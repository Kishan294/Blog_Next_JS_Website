import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const middleware = async (request: NextRequest) => {
  const { pathname } = request.nextUrl;
  const isPublic =
    pathname === "/login" ||
    pathname === "/signup" ||
    pathname === "/verifyemail";
  const token = request.cookies.get("token")?.value || "";
  if (isPublic && token) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }

  if (!isPublic && !token) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }
};

export const config = {
  matcher: ["/profile/:path*", "/login", "/signup", "/verifyemail"],
};
