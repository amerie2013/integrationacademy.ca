import { staticMeta } from "../../../lib/seo";

export const metadata = staticMeta("/tools/whiteboard");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
