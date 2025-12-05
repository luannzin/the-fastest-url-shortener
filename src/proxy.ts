import { type NextRequest, NextResponse } from "next/server";
import { getUrlBySlug } from "./services/get-url-by-slug";

export async function proxy(request: NextRequest) {
  "use cache";
  const slug = request.nextUrl.pathname.split("/").pop();
  if (!slug) {
    return NextResponse.next();
  }

  const url = await getUrlBySlug(slug);
  if (!url) {
    return NextResponse.next();
  }

  return NextResponse.next();
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
