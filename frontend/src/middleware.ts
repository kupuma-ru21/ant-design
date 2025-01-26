import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname !== "/" && request.cookies.has("userName")) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  if (
    request.nextUrl.pathname !== "/login" &&
    !request.cookies.has("userName")
  ) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}
