import type { Metadata } from "next";
import HomePage from "./HomeClient";

// The home page itself is a client component; this wrapper gives it a canonical URL.
export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function Page() {
  return <HomePage />;
}
