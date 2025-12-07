import type { Route } from "next";

type PublicHeaderItem = {
  label: string;
  href: Route;
};

const PUBLIC_HEADER_ITEMS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "OSS",
    href: "/",
  },
] satisfies PublicHeaderItem[];

export { PUBLIC_HEADER_ITEMS };
