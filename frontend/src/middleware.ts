import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  // Exclude static files (like CSS, JS, images, etc.) from middleware
  if (
    pathname.startsWith("/_next") ||
    pathname.endsWith(".*") ||
    pathname === "/sign-up"
  ) {
    return NextResponse.next();
  }

  // Redirect to "/" if a user is already logged in and tries to access other pages
  if (pathname !== "/" && request.cookies.has("userName")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Allow access to the login page even if the "userName" cookie is not present
  if (!request.cookies.has("userName") && pathname !== "/login") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Allow all other requests to proceed
  return NextResponse.next();
}
