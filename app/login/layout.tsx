import { staticMeta } from "../../lib/seo";

export const metadata = staticMeta("/login");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
