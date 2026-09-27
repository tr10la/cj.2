import { mkdir, readFile, writeFile } from "fs/promises";
import path from "path";
import { createClient } from "@supabase/supabase-js";
import { parseIcal, safeCalendarUrl, type StayBlock } from "@/lib/ical";

export type LocalReserve = {
  id: string;
  nom_client: string | null;
  notes_client: string | null;
  data_entrada: string;
  data_sortida: string;
  hostes: number | null;
  preu_total: number | null;
  origen: "manual" | "booking" | "airbnb";
};

export type ExternalReserve = {
  id: string;
  nom_client: string;
  notes_client: string;
  data_entrada: string;
  data_sortida: string;
  hostes: null;
  preu_total: null;
  origen: "booking" | "airbnb";
};

type IcalUrls = { booking: string; airbnb: string };

const filePath = path.join(process.cwd(), "data", "ical.json");
const hiddenPath = path.join(process.cwd(), "data", "hidden-stays.json");
let cache: { at: number; blocks: StayBlock[]; warning: string } | null = null;

function supabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return null;
  return createClient(url, key, { auth: { persistSession: false } });
}

export function hasServiceRole() {
  return Boolean(process.env.SUPABASE_SERVICE_ROLE_KEY);
}

export async function readIcalUrls(): Promise<IcalUrls> {
  let saved: Partial<IcalUrls> = {};
  try {
    saved = JSON.parse(await readFile(filePath, "utf8")) as Partial<IcalUrls>;
  } catch {
    saved = {};
  }
  return {
    booking: saved.booking || process.env.ICAL_BOOKING_URL || "",
    airbnb: saved.airbnb || process.env.ICAL_AIRBNB_URL || "",
  };
}

export async function writeIcalUrls(urls: IcalUrls) {
  await mkdir(path.dirname(filePath), { recursive: true });
  await writeFile(filePath, JSON.stringify(urls, null, 2));
  cache = null;
}

async function fetchFeed(url: string, source: StayBlock["source"]) {
  if (!url) return [];
  const response = await fetch(url, {
    cache: "no-store",
    signal: AbortSignal.timeout(8000),
    headers: { "User-Agent": "CanJoanEmporda/1.0" },
  });
  if (!response.ok) throw new Error(`${source} ha respost ${response.status}`);
  return parseIcal(await response.text(), source);
}

export async function externalStays() {
  const now = Date.now();
  if (cache && now - cache.at < 15000) return cache;

  const urls = await readIcalUrls();
  const warnings: string[] = [];
  const blocks: StayBlock[] = [];

  for (const [source, url] of [
    ["booking", urls.booking],
    ["airbnb", urls.airbnb],
  ] as const) {
    if (!url) continue;
    try {
      blocks.push(...(await fetchFeed(url, source)));
    } catch (error) {
      warnings.push(error instanceof Error ? error.message : `No s'ha pogut llegir ${source}`);
    }
  }

  cache = { at: now, blocks, warning: warnings.join(" · ") };
  return cache;
}

export async function localReserves(): Promise<LocalReserve[]> {
  const client = supabase();
  if (!client) return [];
  const { data, error } = await client.from("reserves").select("*").order("data_entrada", { ascending: true });
  if (error || !data) return [];
  return data.map((row) => ({
    id: String(row.id),
    nom_client: row.nom_client ?? null,
    notes_client: row.notes_client ?? null,
    data_entrada: String(row.data_entrada).slice(0, 10),
    data_sortida: String(row.data_sortida).slice(0, 10),
    hostes: row.hostes ?? null,
    preu_total: row.preu_total ?? null,
    origen: row.origen === "booking" || row.origen === "airbnb" ? row.origen : "manual",
  }));
}

export async function syncExternalReserves() {
  const client = supabase();
  if (!client) return { error: "Falta la configuració de Supabase." };
  if (!hasServiceRole()) return { error: "Cal la clau service_role per guardar les reserves de Booking i Airbnb." };

  const external = await visibleExternalStays();
  const { data: existing, error: readError } = await client.from("reserves").select("id_extern");
  if (readError) return { error: readError.message };

  const stored = new Set((existing ?? []).map((row) => row.id_extern).filter((id): id is string => typeof id === "string" && id.length > 0));
  const missing = external.blocks.filter((block) => !stored.has(externalId(block)));
  if (!missing.length) return { error: "" };

  const { error } = await client.from("reserves").insert(
    missing.map((block) => ({
      nom_client: block.summary || (block.source === "booking" ? "Booking" : "Airbnb"),
      notes_client: block.source === "booking" ? "Sincronitzat amb Booking" : "Sincronitzat amb Airbnb",
      data_entrada: block.start,
      data_sortida: block.end,
      hostes: 0,
      preu_total: 0,
      origen: block.source,
      id_extern: externalId(block),
    })),
  );
  if (!error) return { error: "" };
  if (error.code === "42501") return { error: "Supabase no deixa crear reserves amb la clau pública." };
  return { error: error.message };
}

function externalId(block: StayBlock) {
  return `ext:${block.source}:${block.start}:${block.end}`;
}

async function readHidden() {
  try {
    const raw = JSON.parse(await readFile(hiddenPath, "utf8")) as unknown;
    if (!Array.isArray(raw)) return new Set<string>();
    return new Set(raw.filter((id): id is string => typeof id === "string"));
  } catch {
    return new Set<string>();
  }
}

export async function visibleExternalStays() {
  const [external, hidden] = await Promise.all([externalStays(), readHidden()]);
  return {
    blocks: external.blocks.filter((block) => !hidden.has(externalId(block))),
    warning: external.warning,
  };
}

export async function hideExternalStay(id: string) {
  if (!/^ext:(booking|airbnb):\d{4}-\d{2}-\d{2}:\d{4}-\d{2}-\d{2}$/.test(id)) {
    return { error: "Aquesta reserva no es pot esborrar des d'aquí." };
  }
  const hidden = await readHidden();
  hidden.add(id);
  await mkdir(path.dirname(hiddenPath), { recursive: true });
  await writeFile(hiddenPath, JSON.stringify([...hidden], null, 2));
  return { error: "" };
}

export async function blockedRanges() {
  const [locals, external] = await Promise.all([localReserves(), visibleExternalStays()]);
  const blocked = [
    ...locals
      .filter((reserve) => reserve.data_entrada && reserve.data_sortida)
      .map((reserve) => ({ start: reserve.data_entrada, end: reserve.data_sortida })),
    ...external.blocks.map((block) => ({ start: block.start, end: block.end })),
  ];
  return { blocked, warning: external.warning };
}

export function externalAsReserves(blocks: StayBlock[]): ExternalReserve[] {
  return blocks.map((block) => ({
    id: `ext:${block.source}:${block.start}:${block.end}`,
    nom_client: block.summary || (block.source === "booking" ? "Booking" : "Airbnb"),
    notes_client: block.source === "booking" ? "Sincronitzat amb Booking" : "Sincronitzat amb Airbnb",
    data_entrada: block.start,
    data_sortida: block.end,
    hostes: null,
    preu_total: null,
    origen: block.source,
  }));
}

export async function createReserve(input: { nom_client: string; data_entrada: string; data_sortida: string; notes_client: string }) {
  const client = supabase();
  if (!client) return { error: "Falta la configuració de Supabase." };
  const { error } = await client.from("reserves").insert({
    nom_client: input.nom_client,
    data_entrada: input.data_entrada,
    data_sortida: input.data_sortida,
    notes_client: input.notes_client,
    hostes: 0,
    preu_total: 0,
    origen: "manual",
  });
  if (!error) return { error: "" };
  if (error.code === "42501") {
    return {
      error:
        "Supabase no deixa crear reserves amb la clau pública. Afegeix SUPABASE_SERVICE_ROLE_KEY a .env.local (Settings → API → service_role) i torna a engegar el servidor.",
    };
  }
  return { error: error.message };
}

export async function updateReserve(id: string, nom_client: string, notes_client: string) {
  const client = supabase();
  if (!client) return { error: "Falta la configuració de Supabase." };
  const { error } = await client.from("reserves").update({ nom_client, notes_client }).eq("id", id);
  if (!error) return { error: "" };
  if (error.code === "42501") {
    return { error: "Supabase no deixa editar amb la clau pública. Cal la clau service_role al servidor." };
  }
  return { error: error.message };
}

export async function deleteReserve(id: string) {
  const client = supabase();
  if (!client) return { error: "Falta la configuració de Supabase." };
  if (!hasServiceRole()) {
    return { error: "Supabase no deixa esborrar amb la clau pública. Cal la clau service_role al servidor." };
  }
  const { data: existing } = await client.from("reserves").select("id_extern").eq("id", id).maybeSingle();
  if (typeof existing?.id_extern === "string" && existing.id_extern.startsWith("ext:")) {
    await hideExternalStay(existing.id_extern);
  }
  const { data, error } = await client.from("reserves").delete().eq("id", id).select("id");
  if (error) {
    if (error.code === "42501") {
      return { error: "Supabase no deixa esborrar amb la clau pública. Cal la clau service_role al servidor." };
    }
    return { error: error.message };
  }
  if (!data?.length) return { error: "No s'ha trobat aquesta reserva." };
  return { error: "" };
}

export function cleanIcalInput(booking: string, airbnb: string) {
  return {
    booking: safeCalendarUrl(booking),
    airbnb: safeCalendarUrl(airbnb),
    bookingRejected: Boolean(booking.trim()) && !safeCalendarUrl(booking),
    airbnbRejected: Boolean(airbnb.trim()) && !safeCalendarUrl(airbnb),
  };
}
