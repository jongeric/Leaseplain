import { NextRequest, NextResponse } from "next/server";

const PROTECTED = ["/dashboard", "/upload", "/analysis", "/billing"];

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isProtected = PROTECTED.some((p) => pathname.startsWith(p));
  if (!isProtected) return NextResponse.next();

  // Check for better-auth session cookie — full validation happens in each route
  const session = request.cookies.get("better-auth.session_token");

  if (!session) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/upload/:path*", "/analysis/:path*", "/billing/:path*"],
};
