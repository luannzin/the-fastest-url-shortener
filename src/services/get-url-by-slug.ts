"use cache";

import { setTimeout } from "node:timers/promises";
import { cacheLife, cacheTag } from "next/cache";

const URLS = [
  {
    slug: "google",
    url: "https://www.google.com",
  },
  {
    slug: "youtube",
    url: "https://www.youtube.com",
  },
  {
    slug: "facebook",
    url: "https://www.facebook.com",
  },
  {
    slug: "x",
    url: "https://www.x.com",
  },
] as const;

async function getUrlBySlug(
  slug: string,
): Promise<(typeof URLS)[number] | null> {
  cacheLife("days");
  cacheTag("url-by-slug");

  await setTimeout(2000);

  const url = URLS.find((url) => url.slug === slug);
  if (!url) {
    return null;
  }

  return url;
}

export { getUrlBySlug };
