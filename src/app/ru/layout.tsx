import type { Metadata } from "next";
import { RootShell } from "@/components/RootShell";
import { baseMetadata } from "@/lib/siteMetadata";

export const metadata: Metadata = baseMetadata;

export default function RuRootLayout({ children }: { children: React.ReactNode }) {
  return <RootShell lang="ru">{children}</RootShell>;
}
