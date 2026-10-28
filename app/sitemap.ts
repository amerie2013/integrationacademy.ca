import type { MetadataRoute } from "next";
import { supabase } from "../lib/supabase";
import { GAME_SEO, SITE } from "../lib/seo";
import { ARTICLES } from "../lib/articles";
import { STRANDS } from "../lib/eqao";

// Rebuilt daily so newly published courses show up without a deploy.
export const revalidate = 86400;

type Freq = MetadataRoute.Sitemap[number]["changeFrequency"];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const routes: { path: string; priority: number; freq: Freq }[] = [
    { path: "/", priority: 1.0, freq: "weekly" },
    { path: "/courses", priority: 0.9, freq: "weekly" },
    { path: "/pricing", priority: 0.9, freq: "monthly" },
    { path: "/games", priority: 0.8, freq: "weekly" },
    { path: "/eqao", priority: 0.8, freq: "monthly" },
    { path: "/eqao/exam", priority: 0.6, freq: "monthly" },
    ...STRANDS.map((s) => ({ path: `/eqao/practice/${s.id}`, priority: 0.6, freq: "monthly" as const })),
    { path: "/articles", priority: 0.6, freq: "weekly" },
    ...ARTICLES.map((a) => ({ path: `/articles/${a.slug}`, priority: 0.6, freq: "monthly" as const })),
    ...Object.keys(GAME_SEO)
      .filter((slug) => slug !== "my-stats")
      .map((slug) => ({ path: `/games/${slug}`, priority: 0.7, freq: "monthly" as const })),
    { path: "/tools/graph", priority: 0.6, freq: "monthly" },
    { path: "/tools/stats", priority: 0.6, freq: "monthly" },
    { path: "/tools/tangent", priority: 0.6, freq: "monthly" },
    { path: "/help", priority: 0.5, freq: "monthly" },
    { path: "/about", priority: 0.5, freq: "yearly" },
    { path: "/contact", priority: 0.5, freq: "yearly" },
    { path: "/terms", priority: 0.3, freq: "yearly" },
    { path: "/privacy", priority: 0.3, freq: "yearly" },
    { path: "/refund-policy", priority: 0.3, freq: "yearly" },
  ];

  // Published course pages (the public course overview, not the gated lessons).
  const { data: courses } = await supabase.from("courses").select("id").eq("published", true);
  for (const c of courses ?? []) routes.push({ path: `/courses/${c.id}`, priority: 0.9, freq: "weekly" });

  return routes.map((r) => ({
    url: `${SITE}${r.path === "/" ? "" : r.path}`,
    lastModified: now,
    changeFrequency: r.freq,
    priority: r.priority,
  }));
}
