import type { Metadata } from "next";
import { RootShell } from "@/components/RootShell";
import { baseMetadata } from "@/lib/siteMetadata";

export const metadata: Metadata = baseMetadata;

export default function EnRootLayout({ children }: { children: React.ReactNode }) {
  return <RootShell lang="en">{children}</RootShell>;
}
