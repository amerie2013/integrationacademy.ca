"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { supabase } from "../../lib/supabase";
import { LEVELS } from "../../lib/theme";

export default function CompleteProfilePage() {
  const t = useTranslations("completeProfile");
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [role, setRole] = useState<"student" | "teacher">("student");
  const [level, setLevel] = useState("11");
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    (async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) return router.push("/login");
      const { data: prof } = await supabase.from("profiles").select("role, level").eq("id", session.user.id).single();
      // Already complete (e.g. a teacher, or a student who already has a grade) — nothing to do here.
      if (prof && ((prof.role ?? "student") === "teacher" || prof.level)) return router.push("/dashboard");
      if (prof?.role === "teacher") setRole("teacher");
      setLoading(false);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function submit() {
    setSaving(true);
    setError("");
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) return router.push("/login");
    const res = await fetch("/api/complete-profile", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${session.access_token}` },
      body: JSON.stringify({ role, level }),
    });
    const json = await res.json().catch(() => ({}));
    if (!res.ok) {
      setError(json.error || t("errGeneric"));
      setSaving(false);
      return;
    }
    if (marketing) await supabase.from("profiles").update({ marketing_opt_in: true }).eq("id", session.user.id);
    router.push(role === "teacher" ? "/teacher" : "/dashboard");
  }

  const input: React.CSSProperties = {
    width: "100%",
    padding: "11px 14px",
    borderRadius: 10,
    border: "1px solid #cbd5e1",
    fontSize: 15,
    fontWeight: 500,
    outline: "none",
    fontFamily: "inherit",
  };
  const label: React.CSSProperties = {
    display: "block",
    fontSize: 13,
    fontWeight: 700,
    color: "#334155",
    marginBottom: 6,
  };

  if (loading) {
    return (
      <main style={{ minHeight: "100vh", background: "#f6f8fc", display: "grid", placeItems: "center" }}>
        <div style={{ color: "#64748b" }}>{t("loading")}</div>
      </main>
    );
  }

  return (
    <main style={{ minHeight: "100vh", background: "#f6f8fc", display: "flex", alignItems: "center", justifyContent: "center", padding: "40px 20px" }}>
      <div style={{ background: "#fff", borderRadius: 18, boxShadow: "0 12px 40px rgba(15,23,42,0.10)", padding: "36px 34px", width: "100%", maxWidth: 420 }}>
        <h1 style={{ fontFamily: "Fraunces, serif", fontSize: 24, fontWeight: 700, margin: "0 0 6px" }}>{t("title")}</h1>
        <p style={{ color: "#64748b", fontSize: 14, margin: "0 0 24px" }}>
          {t("subtitle")}
        </p>

        {error && (
          <div style={{ background: "#fef2f2", border: "1px solid #fecaca", borderRadius: 10, padding: "10px 14px", color: "#dc2626", fontSize: 13, fontWeight: 600, marginBottom: 18 }}>
            {error}
          </div>
        )}

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div>
            <label style={label}>{t("iAm")}</label>
            <select value={role} onChange={(e) => setRole(e.target.value as "student" | "teacher")} style={input}>
              <option value="student">{t("student")}</option>
              <option value="teacher">{t("instructor")}</option>
            </select>
          </div>

          {role === "student" && (
            <div>
              <label style={label}>{t("myGrade")}</label>
              <select value={level} onChange={(e) => setLevel(e.target.value)} style={input}>
                {LEVELS.map((l) => (
                  <option key={l.value} value={l.value}>{l.label}</option>
                ))}
              </select>
            </div>
          )}

          <label style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: 13.5, color: "#475569", lineHeight: 1.45, cursor: "pointer" }}>
            <input type="checkbox" checked={marketing} onChange={(e) => setMarketing(e.target.checked)} style={{ marginTop: 3, width: 16, height: 16, flexShrink: 0, accentColor: "#1b7a44" }} />
            <span>{t("marketingOptIn")}</span>
          </label>

          <button
            onClick={submit}
            disabled={saving}
            style={{
              background: saving ? "#a5b4fc" : "#1b7a44",
              color: "#fff",
              border: "none",
              borderRadius: 10,
              padding: "13px",
              fontWeight: 700,
              fontSize: 16,
              cursor: saving ? "not-allowed" : "pointer",
              marginTop: 4,
            }}
          >
            {saving ? t("saving") : t("continue")}
          </button>
        </div>
      </div>
    </main>
  );
}
