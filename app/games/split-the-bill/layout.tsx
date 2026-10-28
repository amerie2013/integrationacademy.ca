import { gameMeta } from "../../../lib/seo";

export const metadata = gameMeta("split-the-bill");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
