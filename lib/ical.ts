export type StayBlock = {
  start: string;
  end: string;
  source: "booking" | "airbnb";
  summary: string;
};

function unfold(text: string) {
  return text.replace(/\r\n[ \t]/g, "").replace(/\n[ \t]/g, "");
}

function readProperty(block: string, name: string) {
  const match = block.match(new RegExp(`^${name}((?:;[^:\\n]*)?):([^\\n]*)$`, "m"));
  if (!match) return null;
  return { params: match[1] ?? "", value: match[2].trim() };
}

function isoDate(year: number, month: number, day: number) {
  return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

function addDays(iso: string, days: number) {
  const [year, month, day] = iso.split("-").map(Number);
  const date = new Date(year, month - 1, day + days);
  return isoDate(date.getFullYear(), date.getMonth() + 1, date.getDate());
}

function toIso(raw: string, dateOnly: boolean) {
  if (dateOnly || !raw.includes("T")) {
    const digits = raw.replace(/\D/g, "");
    if (digits.length < 8) return "";
    return isoDate(Number(digits.slice(0, 4)), Number(digits.slice(4, 6)), Number(digits.slice(6, 8)));
  }

  if (raw.endsWith("Z")) {
    const normalized = raw.replace(/(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})Z/, "$1-$2-$3T$4:$5:$6Z");
    const date = new Date(normalized);
    if (Number.isNaN(date.getTime())) return "";
    const parts = new Intl.DateTimeFormat("en-CA", {
      timeZone: "Europe/Madrid",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(date);
    return parts;
  }

  const digits = raw.replace(/\D/g, "");
  if (digits.length < 8) return "";
  return isoDate(Number(digits.slice(0, 4)), Number(digits.slice(4, 6)), Number(digits.slice(6, 8)));
}

export function parseIcal(text: string, source: StayBlock["source"]) {
  const unfolded = unfold(text);
  const blocks = unfolded.split("BEGIN:VEVENT").slice(1);
  const stays: StayBlock[] = [];

  for (const piece of blocks) {
    const block = piece.split("END:VEVENT")[0] ?? "";
    const status = readProperty(block, "STATUS")?.value.toUpperCase();
    if (status === "CANCELLED") continue;

    const startProp = readProperty(block, "DTSTART");
    if (!startProp) continue;
    const endProp = readProperty(block, "DTEND");
    const start = toIso(startProp.value, /VALUE=DATE/i.test(startProp.params));
    if (!start) continue;

    let end = endProp ? toIso(endProp.value, /VALUE=DATE/i.test(endProp.params)) : "";
    if (!end || end <= start) end = addDays(start, 1);

    const summary = (readProperty(block, "SUMMARY")?.value ?? "")
      .replace(/\\n/g, " ")
      .replace(/\\,/g, ",")
      .trim();

    stays.push({ start, end, source, summary });
  }

  return stays;
}

export function isPrivateHost(hostname: string) {
  const host = hostname.replace(/^\[|\]$/g, "").toLowerCase();
  if (host === "localhost" || host.endsWith(".localhost") || host.endsWith(".local")) return true;
  if (host === "0.0.0.0" || host === "::1") return true;
  const parts = host.split(".").map(Number);
  if (parts.length === 4 && parts.every((part) => Number.isInteger(part))) {
    if (parts[0] === 10 || parts[0] === 127 || parts[0] === 0) return true;
    if (parts[0] === 192 && parts[1] === 168) return true;
    if (parts[0] === 172 && parts[1] >= 16 && parts[1] <= 31) return true;
    if (parts[0] === 169 && parts[1] === 254) return true;
  }
  return false;
}

export function safeCalendarUrl(value: string) {
  const trimmed = value.trim();
  if (!trimmed) return "";
  let url: URL;
  try {
    url = new URL(trimmed);
  } catch {
    return "";
  }
  if (url.protocol !== "https:" || isPrivateHost(url.hostname)) return "";
  return url.toString();
}
