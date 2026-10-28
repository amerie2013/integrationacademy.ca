import { gameMeta } from "../../../lib/seo";

export const metadata = gameMeta("my-stats");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
