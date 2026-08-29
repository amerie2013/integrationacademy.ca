"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { SiteHeader } from "../../../components/SiteHeader";
import { Stats } from "../../../components/Stats";
import { Counting } from "../../../components/Counting";
import { Probability } from "../../../components/Probability";
import { Distributions } from "../../../components/Distributions";
import { Regression } from "../../../components/Regression";

type Mode = "stats" | "counting" | "probability" | "distributions" | "regression";
const MODES: { key: Mode; label: string }[] = [
  { key: "stats", label: "1-Variable Stats" },
  { key: "counting", label: "Counting" },
  { key: "probability", label: "Probability" },
  { key: "distributions", label: "Distributions" },
  { key: "regression", label: "2-Variable Stats" },
];

/**
 * Data-management workspace covering the MDM4U topics one at a time.
 * Standalone at /tools/stats and embeddable via <iframe>; pass ?embed=1 to
 * drop the page padding for a clean embed (embeds always show the 1-Variable
 * Stats figure — the other topics have no saved state to embed). Mirrors
 * app/tools/graph/page.tsx.
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
  const [mode, setMode] = useState<Mode>("stats");
  if (embed) {
    return (
      <main style={{ height: "100vh" }}>
        <Stats embed={!panel} initialData={data} initialId={id} />
      </main>
    );
  }
  return (
    <main style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <SiteHeader />
      <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 14px", borderBottom: "1px solid #e2e8f0", background: "#f8faff" }}>
        <span style={{ fontWeight: 800, color: "#1f3a4b" }}>Data Management Workspace</span>
        <span style={{ fontSize: 13, color: "#94a3b8" }}>MDM4U · save / embed</span>
        <span style={{ flex: 1 }} />
        <div style={{ display: "flex", gap: 4 }}>
          {MODES.map((m) => (
            <button
              key={m.key}
              onClick={() => setMode(m.key)}
              style={{
                padding: "6px 12px", borderRadius: 8, border: "1px solid " + (mode === m.key ? "#1b7a44" : "#cbd5e1"),
                background: mode === m.key ? "#1b7a44" : "#fff", color: mode === m.key ? "#fff" : "#475569",
                fontWeight: 700, fontSize: 12.5, cursor: "pointer",
              }}
            >
              {m.label}
            </button>
          ))}
        </div>
      </div>
      <div style={{ flex: 1, minHeight: 0 }}>
        {mode === "stats" && <Stats initialData={data} initialId={id} />}
        {mode === "counting" && <Counting />}
        {mode === "probability" && <Probability />}
        {mode === "distributions" && <Distributions />}
        {mode === "regression" && <Regression />}
      </div>
    </main>
  );
}
