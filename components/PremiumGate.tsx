"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { loadPlan, FEATURE_MIN_TIER, FEATURE_LABEL, TIER_LABEL, type Feature } from "../lib/plan";

/**
 * Wrap any premium feature. Renders `children` when the signed-in user is
 * entitled to `feature`; otherwise shows a compact upsell that links to pricing.
 *
 *   <PremiumGate feature="ai_tutor"><Tutor /></PremiumGate>
 */
export function PremiumGate({ feature, children, compact }: { feature: Feature; children: React.ReactNode; compact?: boolean }) {
  const [state, setState] = useState<"loading" | "ok" | "locked">("loading");

  useEffect(() => {
    let alive = true;
    loadPlan().then((p) => { if (alive) setState(p.has(feature) ? "ok" : "locked"); });
    return () => { alive = false; };
  }, [feature]);

  if (state === "loading") return <div style={{ color: "#94a3b8", fontSize: 14, padding: compact ? 8 : 20 }}>Loading…</div>;
  if (state === "ok") return <>{children}</>;

  const tier = TIER_LABEL[FEATURE_MIN_TIER[feature]];
  return (
    <div style={{
      background: "linear-gradient(180deg,#fffdf5,#fff)", border: "1px solid #f0d98a", borderRadius: 14,
      padding: compact ? "16px 18px" : "26px 24px", textAlign: "center",
    }}>
      <div style={{ fontSize: 13, fontWeight: 800, letterSpacing: ".05em", textTransform: "uppercase", color: "#a16207" }}>
        ★ {tier} feature
      </div>
      <h3 style={{ fontFamily: "Fraunces, serif", fontSize: compact ? 18 : 22, fontWeight: 700, margin: "6px 0 6px" }}>
        {FEATURE_LABEL[feature]}
      </h3>
      <p style={{ color: "#64748b", fontSize: 14, margin: "0 auto 16px", maxWidth: 420, lineHeight: 1.55 }}>
        Unlock {FEATURE_LABEL[feature].toLowerCase()} and the rest of {tier} to get the most out of your learning.
      </p>
      <Link href="/pricing" style={{
        display: "inline-block", background: "#b8860b", color: "#fff", padding: "10px 22px",
        borderRadius: 10, textDecoration: "none", fontWeight: 700, fontSize: 15,
      }}>
        Upgrade to {tier} →
      </Link>
    </div>
  );
}
