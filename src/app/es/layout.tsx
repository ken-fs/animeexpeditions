import type { Metadata } from "next";
import { RootShell } from "@/components/RootShell";
import { baseMetadata } from "@/lib/siteMetadata";

export const metadata: Metadata = baseMetadata;

export default function EsRootLayout({ children }: { children: React.ReactNode }) {
  return <RootShell lang="es">{children}</RootShell>;
}
