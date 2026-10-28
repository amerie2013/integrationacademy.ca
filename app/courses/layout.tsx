import { staticMeta } from "../../lib/seo";

export const metadata = staticMeta("/courses");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
