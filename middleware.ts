import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";
import { locales, defaultLocale } from "./next-intl.config";

const intlMiddleware = createMiddleware({
  locales: locales as unknown as string[],
  defaultLocale,
  localePrefix: "always"
});

export function middleware(request: NextRequest) {
  // Safety guard (prevents crashes if something ever calls this incorrectly)
  const pathname = request?.nextUrl?.pathname;

  if (!pathname) {
    return NextResponse.next();
  }

  if (pathname === "/") {
    return NextResponse.redirect(new URL("/en", request.url));
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"]
};