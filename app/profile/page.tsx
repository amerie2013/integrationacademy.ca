"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabase";
import { SiteHeader } from "../../components/SiteHeader";
import { LEVELS } from "../../lib/theme";

export default function ProfilePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [saved, setSaved] = useState(false);
  const [billingBusy, setBillingBusy] = useState(false);
  const [billingMsg, setBillingMsg] = useState("");
  const [form, setForm] = useState({
    full_name: "",
    role: "student",
    level: "11",
    school_name: "",
    bio: "",
  });

  useEffect(() => {
    (async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (!session) {
        router.push("/login");
        return;
      }
      const { data } = await supabase
        .from("profiles")
        .select("full_name, role, level, school_name, bio")
        .eq("id", session.user.id)
        .single();
      if (data) {
        setForm({
          full_name: data.full_name ?? "",
          role: data.role ?? "student",
          level: data.level ?? "11",
          school_name: data.school_name ?? "",
          bio: data.bio ?? "",
        });
      }
      setLoading(false);
    })();
  }, [router]);

  async function save() {
    const {
      data: { session },
    } = await supabase.auth.getSession();
    if (!session) return;
    await supabase
      .from("profiles")
      .update({
        full_name: form.full_name,
        level: form.role === "student" ? form.level : null,
        school_name: form.school_name,
        bio: form.bio,
      })
      .eq("id", session.user.id);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  // Open Stripe's secure billing portal: update card, see invoices, cancel auto-renew.
  async function manageBilling() {
    setBillingBusy(true); setBillingMsg("");
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) return router.push("/login");
    try {
      const res = await fetch("/api/stripe/portal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: session.user.id }),
      });
      const j = await res.json().catch(() => ({}));
      if (j.url) { window.location.href = j.url; return; }
      setBillingMsg(res.status === 404 ? "You don't have a paid plan yet — nothing to manage here." : (j.error || "Could not open billing."));
    } catch (e: any) {
      setBillingMsg(e.message || "Could not open billing.");
    }
    setBillingBusy(false);
  }

  const input: React.CSSProperties = {
    width: "100%",
    padding: "11px 14px",
    borderRadius: 10,
    border: "1px solid #cbd5e1",
    fontSize: 15,
    outline: "none",
    fontFamily: "inherit",
  };
  const label: React.CSSProperties = { display: "block", fontSize: 13, fontWeight: 700, color: "#334155", marginBottom: 6 };

  if (loading) {
    return (
      <main>
        <SiteHeader />
        <div style={{ padding: 48, color: "#64748b" }}>Loading…</div>
      </main>
    );
  }

  return (
    <main style={{ minHeight: "100vh" }}>
      <SiteHeader />
      <div style={{ maxWidth: 600, margin: "0 auto", padding: "40px 28px" }}>
        <h1 style={{ fontFamily: "Fraunces, serif", fontSize: 30, fontWeight: 700, margin: "0 0 28px" }}>
          My profile
        </h1>

        <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 16, padding: 28, display: "flex", flexDirection: "column", gap: 18 }}>
          <div>
            <label style={label}>Full name</label>
            <input style={input} value={form.full_name} onChange={(e) => setForm({ ...form, full_name: e.target.value })} />
          </div>

          {form.role === "student" && (
            <div>
              <label style={label}>Level</label>
              <select style={input} value={form.level} onChange={(e) => setForm({ ...form, level: e.target.value })}>
                {LEVELS.map((l) => (
                  <option key={l.value} value={l.value}>
                    {l.label}
                  </option>
                ))}
              </select>
            </div>
          )}

          <div>
            <label style={label}>School / Institution</label>
            <input style={input} value={form.school_name} onChange={(e) => setForm({ ...form, school_name: e.target.value })} />
          </div>

          <div>
            <label style={label}>Bio</label>
            <textarea
              style={{ ...input, minHeight: 90, resize: "vertical" }}
              value={form.bio}
              onChange={(e) => setForm({ ...form, bio: e.target.value })}
            />
          </div>

          <button
            onClick={save}
            style={{ background: "#1b7a44", color: "#fff", border: "none", borderRadius: 10, padding: "13px", fontWeight: 700, fontSize: 16, cursor: "pointer" }}
          >
            {saved ? "Saved ✓" : "Save changes"}
          </button>
        </div>

        {/* Billing */}
        <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 16, padding: 28, marginTop: 20 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 6px" }}>Billing &amp; subscription</h2>
          <p style={{ color: "#64748b", fontSize: 14, margin: "0 0 14px" }}>
            View your invoices, update your payment card, or <strong>cancel auto‑renewal</strong> on a monthly plan. Opens Stripe's secure billing page.
          </p>
          <button
            onClick={manageBilling}
            disabled={billingBusy}
            style={{ background: "#fff", color: "#0f172a", border: "1px solid #cbd5e1", borderRadius: 10, padding: "12px 20px", fontWeight: 700, fontSize: 15, cursor: billingBusy ? "default" : "pointer" }}
          >
            {billingBusy ? "Opening…" : "Manage subscription →"}
          </button>
          {billingMsg && <p style={{ color: "#dc2626", fontSize: 13, marginTop: 10 }}>{billingMsg}</p>}
        </div>
      </div>
    </main>
  );
}
