import type { ReactNode } from "react";
import { Press_Start_2P, VT323 } from "next/font/google";
import "@/app/globals.css";
import { SiteNav } from "@/components/SiteNav";

// Arcade-cabinet CRT world: pixel display face + phosphor terminal face.
// Shared by every root layout so each locale can set its own <html lang>
// without duplicating the shell.
const display = Press_Start_2P({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});
const body = VT323({
  variable: "--font-body",
  subsets: ["latin"],
  weight: "400",
});

export function RootShell({
  lang,
  children,
}: {
  lang: string;
  children: ReactNode;
}) {
  return (
    <html
      lang={lang}
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col crt">
        <div className="scanlines" aria-hidden="true" />
        <SiteNav />
        {children}
      </body>
    </html>
  );
}
