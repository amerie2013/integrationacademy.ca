import type { Metadata } from "next";
import { supabase } from "../../../lib/supabase";
import { courseAudience, pageMeta } from "../../../lib/seo";

// The course page is a client component, so its title/description come from here.
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const { data: c } = await supabase
    .from("courses")
    .select("code,title,description,level")
    .eq("id", id)
    .eq("published", true)
    .maybeSingle();
  if (!c) return { title: "Course — Integration Academy", robots: { index: false } };
  const desc = (c.description || "").replace(/\s+/g, " ").trim();
  return pageMeta(
    `/courses/${id}`,
    `${c.title} – ${courseAudience(c.code, c.level, c.title)} | Integration Academy`,
    desc.length > 158 ? desc.slice(0, 155).replace(/\s+\S*$/, "") + "…" : desc,
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
