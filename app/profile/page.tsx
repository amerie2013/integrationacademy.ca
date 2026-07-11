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
      </div>
    </main>
  );
}
