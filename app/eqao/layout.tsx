import { staticMeta } from "../../lib/seo";

export const metadata = staticMeta("/eqao");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
