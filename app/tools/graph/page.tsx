"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Calculator } from "../../../components/Calculator";
import { supabase } from "../../../lib/supabase";

/**
 * Our own graphing calculator workspace (no third-party dependency, works
 * offline). Standalone at /tools/graph and embeddable via <iframe>; pass
 * ?embed=1 to drop the page padding for a clean embed.
 */
export default function GraphToolPage() {
  return (
    <Suspense fallback={<main style={{ padding: 24, color: "#64748b" }}>Loading…</main>}>
      <GraphTool />
    </Suspense>
  );
}

function GraphTool() {
  const params = useSearchParams();
  const embed = params.get("embed") === "1";
  const panel = params.get("panel") === "1"; // keep the function-input panel in embed (e.g. EQAO graphing tool)
  const data = params.get("data") ?? undefined;
  if (embed) {
    return (
      <main style={{ height: "100vh" }}>
        <Calculator embed={!panel} initialData={data} />
      </main>
    );
  }
  return (
    <main style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 14px", borderBottom: "1px solid #e2e8f0", background: "#f8faff" }}>
        <span style={{ fontWeight: 800, color: "#1f3a4b" }}>Math Workspace</span>
        <span style={{ fontSize: 13, color: "#94a3b8" }}>Functions, parametric, polar · sliders &amp; animation · save / embed</span>
      </div>
      <div style={{ flex: 1, minHeight: 0 }}>
        <Calculator initialData={data} />
      </div>
    </main>
  );
}
