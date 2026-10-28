import type { Metadata } from "next";
import { strandMeta } from "../../../../lib/eqao";
import { pageMeta } from "../../../../lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ strand: string }> }): Promise<Metadata> {
  const { strand } = await params;
  const s = strandMeta(strand);
  if (!s) return { title: "EQAO Practice — Integration Academy" };
  return pageMeta(
    `/eqao/practice/${s.id}`,
    `EQAO Grade 9 ${s.label} Practice Questions | Integration Academy`,
    `Free EQAO Grade 9 math practice for the ${s.label} strand: ${s.blurb} Auto-graded with worked feedback.`,
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
