import { createReserve, deleteReserve, externalAsReserves, hideExternalStay, localReserves, syncExternalReserves, updateReserve, visibleExternalStays } from "@/lib/availability";
export const dynamic = "force-dynamic";

function iso(value: unknown) {
  return typeof value === "string" && /^\d{4}-\d{2}-\d{2}$/.test(value) ? value : "";
}

export async function GET() {
  const synced = await syncExternalReserves();
  const [locals, external] = await Promise.all([localReserves(), visibleExternalStays()]);
  const stored = new Set(locals.map((reserve) => `${reserve.origen}:${reserve.data_entrada}:${reserve.data_sortida}`));
  const externals = externalAsReserves(external.blocks).filter(
    (reserve) => !stored.has(`${reserve.origen}:${reserve.data_entrada}:${reserve.data_sortida}`),
  );
  return Response.json(
    {
      reserves: locals,
      externals,
      warning: [external.warning, synced.error].filter(Boolean).join(" · "),
      serviceRole: Boolean(process.env.SUPABASE_SERVICE_ROLE_KEY),
    },
    { headers: { "Cache-Control": "no-store" } },
  );
}

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as {
    nom_client?: string;
    data_entrada?: string;
    data_sortida?: string;
    notes_client?: string;
  } | null;

  const nom = body?.nom_client?.trim() ?? "";
  const entrada = iso(body?.data_entrada);
  const sortida = iso(body?.data_sortida);
  if (!nom || !entrada || !sortida || sortida <= entrada) {
    return Response.json({ error: "Cal un nom, una entrada i una sortida posterior." }, { status: 400 });
  }

  const result = await createReserve({
    nom_client: nom,
    data_entrada: entrada,
    data_sortida: sortida,
    notes_client: body?.notes_client?.trim() || "Bloqueig manual",
  });
  if (result.error) return Response.json({ error: result.error }, { status: 400 });
  return Response.json({ ok: true });
}

export async function PATCH(request: Request) {
  const body = (await request.json().catch(() => null)) as { id?: string; nom_client?: string; notes_client?: string } | null;
  const id = body?.id?.trim() ?? "";
  if (!id || id.startsWith("ext:")) {
    return Response.json({ error: "Aquesta reserva ve de Booking o Airbnb i no s'edita aquí." }, { status: 400 });
  }
  const result = await updateReserve(id, body?.nom_client?.trim() ?? "", body?.notes_client ?? "");
  if (result.error) return Response.json({ error: result.error }, { status: 400 });
  return Response.json({ ok: true });
}
export async function DELETE(request: Request) {
  const body = (await request.json().catch(() => null)) as { id?: string } | null;
  const id = body?.id?.trim() ?? "";
  if (!id) return Response.json({ error: "Falta l'ID per eliminar." }, { status: 400 });
  const result = id.startsWith("ext:") ? await hideExternalStay(id) : await deleteReserve(id);
  if (result.error) return Response.json({ error: result.error }, { status: 400 });
  return Response.json({ ok: true });
}