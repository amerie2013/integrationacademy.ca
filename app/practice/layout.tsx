import { staticMeta } from "../../lib/seo";

export const metadata = staticMeta("/practice");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
