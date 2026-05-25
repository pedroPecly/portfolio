import { NextResponse, type NextRequest } from "next/server";

import { defaultLocale, isLocale, locales } from "@/i18n/config";

const getPreferredLocale = (headerValue: string | null) => {
  if (!headerValue) {
    return defaultLocale;
  }

  const tokens = headerValue
    .split(",")
    .map((value) => value.trim().split(";")[0])
    .map((value) => value.split("-")[0]);

  for (const token of tokens) {
    if (isLocale(token)) {
      return token;
    }
  }

  return defaultLocale;
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (!hasLocale) {
    const locale = getPreferredLocale(request.headers.get("accept-language"));
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}${pathname}`;
    return NextResponse.redirect(url);
  }

  const locale = pathname.split("/")[1];
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-locale", isLocale(locale) ? locale : defaultLocale);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
