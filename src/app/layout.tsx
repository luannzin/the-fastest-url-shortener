import type { Metadata } from "next";
import { AnchoredToastProvider, ToastProvider } from "@/components/ui/toast";
import "./globals.css";

import { Roboto } from "next/font/google";
import { LightRays } from "@/components/ui/light-rays";
import { cn } from "@/lib/utils";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Fastest Next.js URL Shortener · Ever",
  description: "This is the fastest URL Shortener built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={cn(roboto.className, "dark")}>
      <body className="relative flex flex-col items-center max-w-screen min-h-screen h-screen overflow-x-hidden">
        <ToastProvider>
          <AnchoredToastProvider>
            {children}
            <LightRays />
          </AnchoredToastProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
