"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { SiteHeader } from "@/components/SiteHeader";

type Code = {
  id: string; code: string; active: boolean;
  percent_off: number | null; duration: string | null; duration_in_months: number | null;
  times_redeemed: number; max_redemptions: number | null;
};

export default function PromoAdminPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [denied, setDenied] = useState(false);
  const [token, setToken] = useState("");
  const [codes, setCodes] = useState<Code[]>([]);
  const [form, setForm] = useState({ code: "", percentOff: 50, duration: "once", months: 3 });
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState("");

  async function load(accessToken: string) {
    const res = await fetch("/api/admin/promo", { headers: { Authorization: `Bearer ${accessToken}` } });
    const j = await res.json().catch(() => ({}));
    if (res.ok) setCodes(j.codes ?? []);
    else setErr(j.error || "Could not load promo codes.");
  }

  useEffect(() => {
    (async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) return router.push("/login");
      const { data: me } = await supabase.from("profiles").select("role").eq("id", session.user.id).single();
      if (me?.role !== "admin") { setDenied(true); setLoading(false); return; }
      setToken(session.access_token);
      await load(session.access_token);
      setLoading(false);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function create() {
    setBusy(true); setErr(""); setMsg("");
    const res = await fetch("/api/admin/promo", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({ action: "create", code: form.code, percentOff: form.percentOff, duration: form.duration, months: form.months }),
    });
    const j = await res.json().catch(() => ({}));
    setBusy(false);
    if (!res.ok) { setErr(j.error || "Could not create code."); return; }
    setMsg(`✓ Promo code “${j.code}” created — customers can enter it at checkout.`);
    setForm({ ...form, code: "" });
    await load(token);
  }

  async function deactivate(c: Code) {
    if (!window.confirm(`Deactivate “${c.code}”? Existing subscriptions keep their discount, but no one new can use this code.`)) return;
    setBusy(true); setErr("");
    const res = await fetch("/api/admin/promo", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({ action: "deactivate", id: c.id }),
    });
    setBusy(false);
    if (res.ok) { setMsg(`✓ “${c.code}” deactivated.`); await load(token); }
    else { const j = await res.json().catch(() => ({})); setErr(j.error || "Could not deactivate."); }
  }

  function durationLabel(c: Code) {
    if (c.duration === "forever") return "every payment";
    if (c.duration === "repeating") return `first ${c.duration_in_months ?? 1} month${(c.duration_in_months ?? 1) === 1 ? "" : "s"}`;
    return "first payment only";
  }

  if (loading) return (<main><SiteHeader /><div style={{ padding: 48, color: "#64748b" }}>Loading…</div></main>);
  if (denied) return (<main><SiteHeader /><div style={{ padding: 48, color: "#64748b" }}>Only admins can manage promo codes.</div></main>);

  return (
    <main style={{ minHeight: "100vh" }}>
      <SiteHeader />
      <div style={{ maxWidth: 820, margin: "0 auto", padding: "32px 28px" }}>
        <Link href="/teacher" style={{ color: "#64748b", fontWeight: 600, fontSize: 14, textDecoration: "none" }}>← Admin dashboard</Link>
        <h1 style={{ fontFamily: "Fraunces, serif", fontSize: 28, fontWeight: 700, margin: "10px 0 4px" }}>Promo codes</h1>
        <p style={{ color: "#64748b", margin: "0 0 20px", fontSize: 15 }}>Create a discount code customers type at checkout. Works on both monthly and annual plans, for any course.</p>

        {msg && <div style={{ marginBottom: 12, fontSize: 14, fontWeight: 600, color: "#059669" }}>{msg}</div>}
        {err && <div style={{ marginBottom: 12, fontSize: 14, fontWeight: 600, color: "#dc2626", background: "#fef2f2", border: "1px solid #fecaca", borderRadius: 10, padding: "10px 14px" }}>{err}</div>}

        {/* Create */}
        <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 14, padding: 20, marginBottom: 28 }}>
          <h2 style={{ fontSize: 17, fontWeight: 700, margin: "0 0 14px" }}>Create a code</h2>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "flex-end" }}>
            <div>
              <label style={lbl}>Code</label>
              <input value={form.code} onChange={(e) => setForm({ ...form, code: e.target.value.toUpperCase() })} placeholder="LAUNCH50" style={{ ...field, width: 160, fontFamily: "JetBrains Mono, monospace", letterSpacing: 1 }} />
            </div>
            <div>
              <label style={lbl}>Discount %</label>
              <input type="number" min={1} max={100} value={form.percentOff} onChange={(e) => setForm({ ...form, percentOff: Number(e.target.value) })} style={{ ...field, width: 90 }} />
            </div>
            <div>
              <label style={lbl}>Applies to (subscriptions)</label>
              <select value={form.duration} onChange={(e) => setForm({ ...form, duration: e.target.value })} style={{ ...field, width: 180 }}>
                <option value="once">First payment only</option>
                <option value="repeating">First N months</option>
                <option value="forever">Every payment</option>
              </select>
            </div>
            {form.duration === "repeating" && (
              <div>
                <label style={lbl}>Months</label>
                <input type="number" min={1} value={form.months} onChange={(e) => setForm({ ...form, months: Number(e.target.value) })} style={{ ...field, width: 80 }} />
              </div>
            )}
            <button onClick={create} disabled={busy || !form.code.trim()} style={{ background: "#1b7a44", color: "#fff", border: "none", borderRadius: 9, padding: "10px 20px", fontWeight: 700, fontSize: 14, cursor: busy || !form.code.trim() ? "default" : "pointer", opacity: busy || !form.code.trim() ? 0.55 : 1 }}>
              {busy ? "…" : "Create code"}
            </button>
          </div>
          <p style={{ color: "#94a3b8", fontSize: 12.5, margin: "12px 0 0" }}>Tip: "First payment only" gives one discounted month (or the discounted annual); "Every payment" discounts every month forever.</p>
        </div>

        {/* List */}
        <h2 style={{ fontSize: 17, fontWeight: 700, margin: "0 0 10px" }}>Your codes</h2>
        {codes.length === 0 ? (
          <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 14, padding: 22, color: "#94a3b8" }}>No promo codes yet.</div>
        ) : (
          <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 14, overflow: "hidden" }}>
            {codes.map((c, i) => (
              <div key={c.id} style={{ display: "flex", alignItems: "center", gap: 12, padding: "13px 16px", borderTop: i ? "1px solid #f1f5f9" : "none" }}>
                <span style={{ fontFamily: "JetBrains Mono, monospace", fontWeight: 800, letterSpacing: 1, color: c.active ? "#0f172a" : "#94a3b8" }}>{c.code}</span>
                <span style={{ fontSize: 13, fontWeight: 700, color: "#1b7a44", background: "#e7f6ec", padding: "2px 9px", borderRadius: 999 }}>{c.percent_off}% off</span>
                <span style={{ fontSize: 13, color: "#64748b" }}>{durationLabel(c)}</span>
                <span style={{ fontSize: 13, color: "#94a3b8" }}>· used {c.times_redeemed}×</span>
                {!c.active && <span style={{ fontSize: 12, fontWeight: 700, color: "#b91c1c", background: "#fee2e2", padding: "2px 9px", borderRadius: 999 }}>inactive</span>}
                {c.active && <button onClick={() => deactivate(c)} disabled={busy} style={{ marginLeft: "auto", background: "#fff", border: "1px solid #fecaca", color: "#dc2626", borderRadius: 8, padding: "6px 12px", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>Deactivate</button>}
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

const lbl: React.CSSProperties = { display: "block", fontSize: 12, fontWeight: 700, color: "#475569", marginBottom: 5 };
const field: React.CSSProperties = { padding: "9px 12px", borderRadius: 9, border: "1px solid #cbd5e1", fontSize: 14, background: "#fff", boxSizing: "border-box" };
