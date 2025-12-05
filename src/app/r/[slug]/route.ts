import { type NextRequest, NextResponse } from "next/server";
import { getUrlBySlug } from "@/services/get-url-by-slug";

export async function GET(
  _: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  const slug = (await params).slug;
  const target = await getUrlBySlug(slug);

  if (!target) {
    return NextResponse.json({ error: "URL was not found." }, { status: 404 });
  }

  return Response.redirect(target.url, 302);
}
