import { blockedRanges } from "@/lib/availability";

export const dynamic = "force-dynamic";

export async function GET() {
  const { blocked, warning } = await blockedRanges();
  return Response.json(
    { blocked, warning },
    { headers: { "Cache-Control": "no-store" } },
  );
}
