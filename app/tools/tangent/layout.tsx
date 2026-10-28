import { staticMeta } from "../../../lib/seo";

export const metadata = staticMeta("/tools/tangent");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
