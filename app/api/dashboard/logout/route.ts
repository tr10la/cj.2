import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

export async function POST() {
  const jar = await cookies();
  jar.delete("canjoan_dashboard");
  return Response.json({ ok: true });
}
