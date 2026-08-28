"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Stats } from "../../../components/Stats";

/**
 * Data-management / statistics workspace. Standalone at /tools/stats and
 * embeddable via <iframe>; pass ?embed=1 to drop the page padding for a
 * clean embed. Mirrors app/tools/graph/page.tsx.
 */
export default function StatsToolPage() {
  return (
    <Suspense fallback={<main style={{ padding: 24, color: "#64748b" }}>Loading…</main>}>
      <StatsTool />
    </Suspense>
  );
}

function StatsTool() {
  const params = useSearchParams();
  const embed = params.get("embed") === "1";
  const panel = params.get("panel") === "1";
  const data = params.get("data") ?? undefined;
  const id = params.get("id") ?? undefined;
  if (embed) {
    return (
      <main style={{ height: "100vh" }}>
        <Stats embed={!panel} initialData={data} initialId={id} />
      </main>
    );
  }
  return (
    <main style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 14px", borderBottom: "1px solid #e2e8f0", background: "#f8faff" }}>
        <span style={{ fontWeight: 800, color: "#1f3a4b" }}>Statistics Workspace</span>
        <span style={{ fontSize: 13, color: "#94a3b8" }}>Data lists · histogram &amp; box plot · summary stats · save / embed</span>
      </div>
      <div style={{ flex: 1, minHeight: 0 }}>
        <Stats initialData={data} initialId={id} />
      </div>
    </main>
  );
}
