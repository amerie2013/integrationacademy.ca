"use client";

import { useEffect, useRef, useState } from "react";
import { FoundationsGame } from "../../../components/FoundationsGame";
import { FACT_LEVEL_NAMES, FACT_TABLES, factKey, factQ, type Q } from "../../../lib/foundations";

// Multiplication facts. Every fact has a "heat": unseen (grey), missed (red),
// warming up (amber), or mastered (green = right twice in a row, each under 5 s).
// The question picker leans toward red and unseen facts, so practice time goes
// where it's needed. Mastery is kept on this device.

type Mastery = Record<string, { c: number; m: number; t: number }>;
const STORE = "ia_fnd_fact-heat_mastery";
const SLOW_MS = 5000;

type Status = "new" | "red" | "amber" | "green";
function status(m: Mastery[string] | undefined): Status {
  if (!m) return "new";
  if (m.c === 0) return "red";
  if (m.c >= 2 && m.t <= SLOW_MS) return "green";
  return "amber";
}
const WEIGHT: Record<Status, number> = { new: 3, red: 6, amber: 2.5, green: 0.4 };
const COLOR: Record<Status, string> = { new: "rgba(255,255,255,.08)", red: "#ef4444", amber: "#f59e0b", green: "#34d27f" };

export default function FactHeat() {
  const [mastery, setMastery] = useState<Mastery>({});
  const ref = useRef<Mastery>({});

  useEffect(() => {
    try {
      const m = JSON.parse(localStorage.getItem(STORE) || "{}");
      ref.current = m; setMastery(m);
    } catch {}
  }, []);

  function nextQuestion(level: number): Q {
    const tables = FACT_TABLES[level];
    const pool: { a: number; b: number; w: number }[] = [];
    for (const a of tables) for (let b = 1; b <= 12; b++) pool.push({ a, b, w: WEIGHT[status(ref.current[factKey(a, b)])] });
    let r = Math.random() * pool.reduce((s, x) => s + x.w, 0);
    let chosen = pool[pool.length - 1];
    for (const x of pool) { r -= x.w; if (r <= 0) { chosen = x; break; } }
    return Math.random() < 0.5 ? factQ(chosen.a, chosen.b) : factQ(chosen.b, chosen.a);
  }

  function onAnswer(q: Q, ok: boolean, ms: number) {
    const prev = ref.current[q.key] ?? { c: 0, m: 0, t: 0 };
    const next = ok ? { c: prev.c + 1, m: prev.m, t: ms } : { c: 0, m: prev.m + 1, t: ms };
    ref.current = { ...ref.current, [q.key]: next };
    setMastery(ref.current);
    try { localStorage.setItem(STORE, JSON.stringify(ref.current)); } catch {}
  }

  let green = 0;
  for (let a = 1; a <= 12; a++) for (let b = a; b <= 12; b++) if (status(mastery[factKey(a, b)]) === "green") green++;

  const heat = (
    <div style={{ marginTop: 20, background: "#fff", border: "1px solid #e2e8f0", borderRadius: 18, padding: "16px 16px 14px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 10 }}>
        <div style={{ fontWeight: 800, color: "#0f172a", fontSize: 15 }}>Your fact map</div>
        <div style={{ fontSize: 13, color: "#475569", fontWeight: 700 }}>{green} / 78 facts mastered</div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(13, 1fr)", gap: 3 }}>
        <span />
        {Array.from({ length: 12 }, (_, i) => <span key={i} style={hdr}>{i + 1}</span>)}
        {Array.from({ length: 12 }, (_, r) => (
          <FactRow key={r} a={r + 1} mastery={mastery} />
        ))}
      </div>
      <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 10, fontSize: 12, color: "#64748b" }}>
        {([["new", "Not seen yet"], ["red", "Missed"], ["amber", "Getting there"], ["green", "Mastered"]] as [Status, string][]).map(([s, label]) => (
          <span key={s} style={{ display: "inline-flex", alignItems: "center", gap: 5 }}>
            <i style={{ width: 11, height: 11, borderRadius: 3, background: s === "new" ? "#cbd5e1" : COLOR[s], display: "inline-block" }} /> {label}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <FoundationsGame
      id="fact-heat"
      title="Fact Heat"
      glyph="🔥"
      intro="Cool down the map. Every multiplication fact starts grey — get it right fast, twice in a row, and it turns green. Miss it and it burns red and keeps coming back."
      levels={FACT_LEVEL_NAMES}
      nextQuestion={nextQuestion}
      onAnswer={onAnswer}
      autoSubmit
      extra={heat}
      tip="Tip: 6 × 7 is the same as 7 × 6 — each fact only lights up once on the map."
    />
  );
}

function FactRow({ a, mastery }: { a: number; mastery: Mastery }) {
  return (
    <>
      <span style={hdr}>{a}</span>
      {Array.from({ length: 12 }, (_, i) => {
        const b = i + 1;
        const m = mastery[factKey(a, b)];
        const s = status(m);
        return (
          <span
            key={b}
            title={`${a} × ${b} = ${a * b}${m ? ` · ${m.c} in a row` : ""}`}
            style={{ aspectRatio: "1", borderRadius: 4, background: s === "new" ? "#e2e8f0" : COLOR[s], opacity: s === "green" ? 0.9 : 1 }}
          />
        );
      })}
    </>
  );
}

const hdr: React.CSSProperties = { fontSize: 10, color: "#94a3b8", fontWeight: 700, textAlign: "center", alignSelf: "center" };
