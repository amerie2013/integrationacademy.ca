import type { MetadataRoute } from "next";

import { SITE as BASE } from "../lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Keep private/authenticated areas out of search results.
        disallow: ["/dashboard", "/teacher", "/classes", "/progress", "/profile", "/api/", "/quizzes/", "/assignments/", "/verify-email"],
      },
    ],
    sitemap: `${BASE}/sitemap.xml`,
    host: BASE,
  };
}
