import type { Metadata } from "next";
import { RootShell } from "@/components/RootShell";
import { baseMetadata } from "@/lib/siteMetadata";

export const metadata: Metadata = baseMetadata;

export default function PtRootLayout({ children }: { children: React.ReactNode }) {
  return <RootShell lang="pt-BR">{children}</RootShell>;
}
