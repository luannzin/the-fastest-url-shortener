import { type NextRequest, NextResponse } from "next/server";

export async function proxy(req: NextRequest) {
  const url = req.nextUrl;
  const slug = url.pathname.slice(1);
  if (!slug || slug.includes("/")) {
    return NextResponse.next();
  }

  url.pathname = `/r/${slug}`;

  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
