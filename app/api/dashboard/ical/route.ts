import { cleanIcalInput, readIcalUrls, writeIcalUrls } from "@/lib/availability";

export const dynamic = "force-dynamic";

export async function GET() {
  const urls = await readIcalUrls();
  return Response.json(urls, { headers: { "Cache-Control": "no-store" } });
}

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as { booking?: string; airbnb?: string } | null;
  const cleaned = cleanIcalInput(body?.booking ?? "", body?.airbnb ?? "");
  if (cleaned.bookingRejected || cleaned.airbnbRejected) {
    return Response.json({ error: "Els enllaços han de ser https i no poden apuntar a la xarxa local." }, { status: 400 });
  }
  await writeIcalUrls({ booking: cleaned.booking, airbnb: cleaned.airbnb });
  return Response.json({ ok: true, booking: cleaned.booking, airbnb: cleaned.airbnb });
}
