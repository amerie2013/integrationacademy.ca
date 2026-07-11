import type { MetadataRoute } from "next";

const BASE = process.env.NEXT_PUBLIC_APP_URL || "https://integrationacademy.ca";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    { path: "/", priority: 1.0, freq: "weekly" as const },
    { path: "/courses", priority: 0.9, freq: "weekly" as const },
    { path: "/pricing", priority: 0.9, freq: "monthly" as const },
    { path: "/worksheets", priority: 0.7, freq: "weekly" as const },
    { path: "/eqao", priority: 0.7, freq: "monthly" as const },
    { path: "/tools/graph", priority: 0.6, freq: "monthly" as const },
    { path: "/help", priority: 0.5, freq: "monthly" as const },
    { path: "/about", priority: 0.5, freq: "yearly" as const },
    { path: "/contact", priority: 0.5, freq: "yearly" as const },
    { path: "/login", priority: 0.4, freq: "yearly" as const },
    { path: "/terms", priority: 0.3, freq: "yearly" as const },
    { path: "/privacy", priority: 0.3, freq: "yearly" as const },
    { path: "/refund-policy", priority: 0.3, freq: "yearly" as const },
  ];
  return routes.map((r) => ({
    url: `${BASE}${r.path}`,
    lastModified: now,
    changeFrequency: r.freq,
    priority: r.priority,
  }));
}
