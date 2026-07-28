"use client";

import { useState } from "react";
import { supabase } from "../lib/supabase";

// Teacher-assist: ask the AI to grade each assignment question out of 10 and
// draft feedback. The AI never sets the grade — "Use this" only pre-fills the
// teacher's grade (the total) and feedback boxes, which they edit and save.
// The draft is cached server-side in a staff-only table (never shown to students).
type QDraft = { label: string; mark: number; comment: string };
type Draft = { total: number; max: number; feedback: string; breakdown: QDraft[]; usedImage: boolean; cached?: boolean };

const markColor = (m: number) => (m >= 8 ? "#059669" : m >= 5 ? "#ca8a04" : "#dc2626");

export function AiGradeButton({ submissionId, onUse }: { submissionId: string; onUse: (grade: string, feedback: string) => void }) {
  const [busy, setBusy] = useState(false);
  const [draft, setDraft] = useState<Draft | null>(null);
  const [err, setErr] = useState("");

  async function run(force = false) {
    setBusy(true); setErr("");
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) { setErr("Please sign in again."); setBusy(false); return; }
      const res = await fetch("/api/grade-suggest", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${session.access_token}` },
        body: JSON.stringify({ submissionId, force }),
      });
      const j = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(j.error || "Couldn't get a suggestion.");
      setDraft(j);
    } catch (e: any) { setErr(e.message); }
    setBusy(false);
  }

  // Build the feedback the teacher can drop into the box: overall summary + a
  // per-question line for each question, ending with the total.
  function compiledFeedback(d: Draft) {
    const lines = d.breakdown.map((q) => `${q.label}: ${q.mark}/10 — ${q.comment}`);
    return [d.feedback.trim(), ...lines, `Total: ${d.total}/${d.max}`].filter(Boolean).join("\n");
  }

  return (
    <div style={{ marginTop: 12 }}>
      <button onClick={() => run(false)} disabled={busy} title="AI grades each question /10 — you decide the final mark"
        style={{ background: "#eef2ff", color: "#4338ca", border: "1px solid #c7d2fe", borderRadius: 9, padding: "8px 14px", fontWeight: 700, fontSize: 13, cursor: busy ? "default" : "pointer" }}>
        {busy ? "Reading…" : draft ? "Re-run AI draft" : "✨ AI draft grade (per question)"}
      </button>

      {err && <div style={{ color: "#dc2626", fontSize: 12, fontWeight: 600, marginTop: 8 }}>{err}</div>}

      {draft && (
        <div style={{ marginTop: 10, background: "#f5f3ff", border: "1px solid #ddd6fe", borderRadius: 10, padding: "12px 14px" }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 8, flexWrap: "wrap", marginBottom: 8 }}>
            <span style={{ fontWeight: 800, color: "#4338ca", fontSize: 18 }}>Total {draft.total} / {draft.max}</span>
            {draft.usedImage && <span style={{ fontSize: 11, fontWeight: 700, color: "#5b21b6", background: "#ede9fe", borderRadius: 6, padding: "2px 7px" }}>read the attachment</span>}
            <span style={{ fontSize: 11, color: "#8b5cf6" }}>· a draft — you decide</span>
          </div>

          <div style={{ display: "grid", gap: 4, marginBottom: 10 }}>
            {draft.breakdown.map((q, i) => (
              <div key={i} style={{ display: "flex", gap: 8, fontSize: 13, alignItems: "baseline" }}>
                <span style={{ fontWeight: 800, color: markColor(q.mark), width: 42, flexShrink: 0 }}>{q.mark}/10</span>
                <span style={{ fontWeight: 700, color: "#334155", width: 40, flexShrink: 0 }}>{q.label}</span>
                <span style={{ color: "#475569" }}>{q.comment}</span>
              </div>
            ))}
          </div>

          {draft.feedback && <p style={{ margin: "0 0 10px", fontSize: 13, color: "#334155", lineHeight: 1.5, whiteSpace: "pre-wrap", borderTop: "1px solid #ddd6fe", paddingTop: 8 }}>{draft.feedback}</p>}

          <button onClick={() => onUse(String(draft.total), compiledFeedback(draft))}
            style={{ background: "#4338ca", color: "#fff", border: "none", borderRadius: 8, padding: "7px 14px", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
            Use this ↑
          </button>
          <span style={{ fontSize: 11, color: "#94a3b8", marginLeft: 8 }}>fills grade ({draft.total}) &amp; the full breakdown as feedback — edit before saving</span>
        </div>
      )}
    </div>
  );
}
