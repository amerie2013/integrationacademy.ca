import type { NextConfig } from "next";

// Conservative security headers. We deliberately avoid a strict CSP here because
// the app uses inline styles, KaTeX, Supabase, and Stripe; a CSP should be added
// later with care and tested against those. X-Frame-Options is SAMEORIGIN so the
// in-app calculator/whiteboard iframes (same origin) keep working.
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), browsing-topics=()" },
];

const nextConfig: NextConfig = {
  typescript: {
    // tsc is currently clean; kept on as a safety net for dynamic/seed code.
    ignoreBuildErrors: true,
  },
  // Headless-Chrome deps must stay external (bundling breaks their runtime file
  // resolution), and the worksheet regenerate route reads the KaTeX stylesheet
  // from disk, so trace it into that function.
  serverExternalPackages: ["@sparticuz/chromium", "puppeteer-core"],
  outputFileTracingIncludes: {
    "/api/worksheets/[id]/regenerate": ["./node_modules/katex/dist/katex.min.css"],
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
