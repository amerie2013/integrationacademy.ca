import type { Metadata } from "next";

// Gated / per-user page: crawlers only see a sign-in wall, so keep it out of the index.
export const metadata: Metadata = { robots: { index: false, follow: true } };

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
