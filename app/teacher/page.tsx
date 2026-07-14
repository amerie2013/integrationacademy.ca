"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "../../lib/supabase";
import { SiteHeader } from "../../components/SiteHeader";

type Course = { id: string; code: string | null; title: string; level: string | null };

export default function TeacherPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState<string | null>(null);
  const [courses, setCourses] = useState<Course[]>([]);
  const [showNew, setShowNew] = useState(false);
  const [draft, setDraft] = useState({ code: "", title: "", level: "11" });
  const [saving, setSaving] = useState(false);

  async function load(uid: string) {
    const { data } = await supabase
      .from("courses")
      .select("id, code, title, level")
      .eq("teacher_id", uid)
      .order("created_at", { ascending: false });
    setCourses((data ?? []) as Course[]);
  }

  useEffect(() => {
    (async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (!session) {
        router.push("/login");
        return;
      }
      const { data: prof } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", session.user.id)
        .single();
      if (prof?.role === "teacher") {
        router.push("/classes"); // teachers are view-only over their classes
        return;
      }
      if (prof?.role !== "admin") {
        router.push("/dashboard");
        return;
      }
      setUserId(session.user.id);
      await load(session.user.id);
      setLoading(false);
    })();
  }, [router]);

  async function createCourse() {
    if (!userId || !draft.title) return;
    setSaving(true);
    await supabase.from("courses").insert({
      teacher_id: userId,
      code: draft.code || null,
      title: draft.title,
      level: draft.level,
    });
    setDraft({ code: "", title: "", level: "11" });
    setShowNew(false);
    await load(userId);
    setSaving(false);
  }

  const input: React.CSSProperties = {
    padding: "10px 13px",
    borderRadius: 9,
    border: "1px solid #cbd5e1",
    fontSize: 14,
    outline: "none",
    fontFamily: "inherit",
  };

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
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "40px 28px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 28 }}>
          <h1 style={{ fontFamily: "Fraunces, serif", fontSize: 30, fontWeight: 700, margin: 0 }}>
            Admin dashboard
          </h1>
          <div style={{ display: "flex", gap: 10 }}>
            <Link href="/teacher/bank" style={{ background: "#fff", color: "#0f172a", border: "1px solid #cbd5e1", borderRadius: 10, padding: "11px 18px", fontWeight: 700, fontSize: 15, textDecoration: "none" }}>
              Question bank
            </Link>
            <Link href="/teacher/eqao" style={{ background: "#fff", color: "#0f172a", border: "1px solid #cbd5e1", borderRadius: 10, padding: "11px 18px", fontWeight: 700, fontSize: 15, textDecoration: "none" }}>
              EQAO questions
            </Link>
            <Link href="/teacher/classes" style={{ background: "#fff", color: "#0f172a", border: "1px solid #cbd5e1", borderRadius: 10, padding: "11px 18px", fontWeight: 700, fontSize: 15, textDecoration: "none" }}>
              Manage classes
            </Link>
            <Link href="/teacher/members" style={{ background: "#fff", color: "#0f172a", border: "1px solid #cbd5e1", borderRadius: 10, padding: "11px 18px", fontWeight: 700, fontSize: 15, textDecoration: "none" }}>
              Members &amp; plans
            </Link>
            <Link href="/teacher/promo" style={{ background: "#fff", color: "#0f172a", border: "1px solid #cbd5e1", borderRadius: 10, padding: "11px 18px", fontWeight: 700, fontSize: 15, textDecoration: "none" }}>
              Promo codes
            </Link>
            <Link href="/teacher/ai-usage" style={{ background: "#fff", color: "#0f172a", border: "1px solid #cbd5e1", borderRadius: 10, padding: "11px 18px", fontWeight: 700, fontSize: 15, textDecoration: "none" }}>
              AI tutor usage
            </Link>
            <button
              onClick={() => setShowNew((s) => !s)}
              style={{ background: "#1b7a44", color: "#fff", border: "none", borderRadius: 10, padding: "11px 20px", fontWeight: 700, fontSize: 15, cursor: "pointer" }}
            >
              {showNew ? "Cancel" : "+ New course"}
            </button>
          </div>
        </div>

        {showNew && (
          <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 14, padding: 22, marginBottom: 28, display: "flex", gap: 12, flexWrap: "wrap", alignItems: "end" }}>
            <div>
              <label style={{ fontSize: 12, fontWeight: 700, color: "#475569", display: "block", marginBottom: 5 }}>Code</label>
              <input style={{ ...input, width: 120 }} placeholder="MHF4U" value={draft.code} onChange={(e) => setDraft({ ...draft, code: e.target.value })} />
            </div>
            <div style={{ flex: 1, minWidth: 200 }}>
              <label style={{ fontSize: 12, fontWeight: 700, color: "#475569", display: "block", marginBottom: 5 }}>Course title *</label>
              <input style={{ ...input, width: "100%" }} placeholder="Advanced Functions" value={draft.title} onChange={(e) => setDraft({ ...draft, title: e.target.value })} />
            </div>
            <div>
              <label style={{ fontSize: 12, fontWeight: 700, color: "#475569", display: "block", marginBottom: 5 }}>Level</label>
              <select style={input} value={draft.level} onChange={(e) => setDraft({ ...draft, level: e.target.value })}>
                <option value="9">Grade 9</option>
                <option value="10">Grade 10</option>
                <option value="11">Grade 11</option>
                <option value="12">Grade 12</option>
                <option value="college">College</option>
                <option value="university">University</option>
              </select>
            </div>
            <button
              onClick={createCourse}
              disabled={saving || !draft.title}
              style={{ background: saving ? "#a5b4fc" : "#0d9488", color: "#fff", border: "none", borderRadius: 9, padding: "10px 20px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}
            >
              {saving ? "Creating…" : "Create"}
            </button>
          </div>
        )}

        <h2 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 16px" }}>Your courses</h2>
        {courses.length === 0 ? (
          <div style={{ color: "#64748b", background: "#fff", border: "1px solid #e2e8f0", borderRadius: 14, padding: 24 }}>
            No courses yet. Create your first one above — then add lessons, quizzes, and assignments.
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 16 }}>
            {courses.map((c) => (
              <Link
                key={c.id}
                href={`/teacher/courses/${c.id}`}
                style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 14, padding: 20, textDecoration: "none", color: "inherit", display: "block" }}
              >
                {c.code && (
                  <div style={{ fontFamily: "JetBrains Mono, monospace", color: "#1b7a44", fontWeight: 700, fontSize: 13, marginBottom: 6 }}>
                    {c.code}
                  </div>
                )}
                <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 12 }}>{c.title}</div>
                <span style={{ color: "#1b7a44", fontWeight: 700, fontSize: 14 }}>
                  Manage lessons, quizzes & assignments →
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
