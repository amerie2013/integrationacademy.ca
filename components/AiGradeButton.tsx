"use client";

import { useState } from "react";
import { supabase } from "../lib/supabase";

// Teacher-assist: ask the AI to draft a mark + feedback for one submission. The
// AI never sets the grade — clicking "Use this" only pre-fills the teacher's
// grade/feedback boxes, which they then edit and save. The draft is cached
// server-side in a staff-only table (never shown to the student).
type Draft = { mark: number; outOf: number; feedback: string; usedImage: boolean; cached?: boolean };

export function AiGradeButton({ submissionId, onUse }: { submissionId: string; onUse: (grade: string, feedback: string) => void }) {
  const [outOf, setOutOf] = useState("10");
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
        body: JSON.stringify({ submissionId, outOf: Number(outOf) || 10, force }),
      });
      const j = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(j.error || "Couldn't get a suggestion.");
      setDraft(j);
    } catch (e: any) { setErr(e.message); }
    setBusy(false);
  }

  return (
    <div style={{ marginTop: 12 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
        <button onClick={() => run(false)} disabled={busy} title="AI drafts a mark and feedback — you decide"
          style={{ background: "#eef2ff", color: "#4338ca", border: "1px solid #c7d2fe", borderRadius: 9, padding: "8px 14px", fontWeight: 700, fontSize: 13, cursor: busy ? "default" : "pointer" }}>
          {busy ? "Reading…" : draft ? "Re-run AI draft" : "✨ AI draft grade"}
        </button>
        <span style={{ fontSize: 12, color: "#94a3b8" }}>out of</span>
        <input value={outOf} onChange={(e) => setOutOf(e.target.value.replace(/[^\d]/g, ""))} inputMode="numeric"
          style={{ width: 52, padding: "6px 8px", borderRadius: 8, border: "1px solid #cbd5e1", fontSize: 13, textAlign: "center" }} />
      </div>

      {err && <div style={{ color: "#dc2626", fontSize: 12, fontWeight: 600, marginTop: 8 }}>{err}</div>}

      {draft && (
        <div style={{ marginTop: 10, background: "#f5f3ff", border: "1px solid #ddd6fe", borderRadius: 10, padding: "12px 14px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
            <span style={{ fontWeight: 800, color: "#4338ca", fontSize: 15 }}>AI suggests {draft.mark} / {draft.outOf}</span>
            {draft.usedImage && <span style={{ fontSize: 11, fontWeight: 700, color: "#5b21b6", background: "#ede9fe", borderRadius: 6, padding: "2px 7px" }}>read the attachment</span>}
            <span style={{ fontSize: 11, color: "#8b5cf6" }}>· a draft — you decide</span>
          </div>
          <p style={{ margin: "8px 0 0", fontSize: 13, color: "#334155", lineHeight: 1.5, whiteSpace: "pre-wrap" }}>{draft.feedback}</p>
          <button onClick={() => onUse(String(draft.mark), draft.feedback)}
            style={{ marginTop: 10, background: "#4338ca", color: "#fff", border: "none", borderRadius: 8, padding: "7px 14px", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
            Use this ↑
          </button>
          <span style={{ fontSize: 11, color: "#94a3b8", marginLeft: 8 }}>fills the grade &amp; feedback boxes — edit before saving</span>
        </div>
      )}
    </div>
  );
}
