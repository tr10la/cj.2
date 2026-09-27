import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { dashboardToken, sameSecret } from "@/lib/session";

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const password = process.env.DASHBOARD_PASSWORD || "";
  const expected = password ? await dashboardToken(password) : "";
  const token = request.cookies.get("canjoan_dashboard")?.value ?? "";
  const signedIn = Boolean(expected) && sameSecret(token, expected);
  const loginPage = pathname === "/dashboard/login";
  const loginApi = pathname === "/api/dashboard/login";

  if (loginPage || loginApi) {
    if (signedIn && loginPage) return NextResponse.redirect(new URL("/dashboard", request.url));
    return NextResponse.next();
  }

  if (signedIn) return NextResponse.next();

  if (pathname.startsWith("/api/")) {
    return NextResponse.json({ error: "Cal iniciar sessió" }, { status: 401 });
  }

  return NextResponse.redirect(new URL("/dashboard/login", request.url));
}

export const config = {
  matcher: ["/dashboard", "/dashboard/:path*", "/api/dashboard", "/api/dashboard/:path*"],
};
