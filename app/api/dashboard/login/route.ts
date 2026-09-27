import { cookies } from "next/headers";
import { dashboardToken, sameSecret } from "@/lib/session";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const password = process.env.DASHBOARD_PASSWORD || "";
  if (!password) {
    return Response.json({ error: "Falta DASHBOARD_PASSWORD al servidor." }, { status: 500 });
  }

  const body = (await request.json().catch(() => null)) as { password?: string } | null;
  const given = body?.password ?? "";
  if (!sameSecret(given, password)) {
    return Response.json({ error: "Contrasenya incorrecta." }, { status: 401 });
  }

  const jar = await cookies();
  jar.set("canjoan_dashboard", await dashboardToken(password), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });

  return Response.json({ ok: true });
}
