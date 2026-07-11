"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "../../../lib/supabase";
import { SiteHeader } from "../../../components/SiteHeader";

type Teacher = { id: string; full_name: string | null; email: string | null };
type Course = { id: string; code: string | null; title: string };
type ClassRow = { id: string; name: string; join_code: string | null; teacher_id: string | null; course_id: string | null };

function code6() {
  return Math.random().toString(36).slice(2, 8).toUpperCase();
}

export default function AdminClassesPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);
  const [classes, setClasses] = useState<ClassRow[]>([]);
  const [counts, setCounts] = useState<Record<string, number>>({});
  const [name, setName] = useState("");
  const [courseId, setCourseId] = useState("");
  const [teacherId, setTeacherId] = useState("");
  const [saving, setSaving] = useState(false);

  async function load() {
    const { data: t } = await supabase.from("profiles").select("id, full_name, email").eq("role", "teacher").order("full_name");
    setTeachers((t ?? []) as Teacher[]);
    const { data: cr } = await supabase.from("courses").select("id, code, title").order("level");
    setCourses((cr ?? []) as Course[]);
    const { data: c } = await supabase.from("classes").select("id, name, join_code, teacher_id, course_id").order("created_at", { ascending: false });
    setClasses((c ?? []) as ClassRow[]);
    const { data: cs } = await supabase.from("class_students").select("class_id");
    const map: Record<string, number> = {};
    (cs ?? []).forEach((r: any) => (map[r.class_id] = (map[r.class_id] ?? 0) + 1));
    setCounts(map);
  }

  useEffect(() => {
    (async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) return router.push("/login");
      const { data: me } = await supabase.from("profiles").select("role").eq("id", session.user.id).single();
      if (me?.role !== "admin") return router.push("/classes");
      await load();
      setLoading(false);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function create() {
    if (!name || !courseId) return;
    setSaving(true);
    await supabase.from("classes").insert({ name, course_id: courseId, teacher_id: teacherId || null, join_code: code6() });
    setName("");
    setCourseId("");
    setTeacherId("");
    await load();
    setSaving(false);
  }

  const teacherName = (id: string | null) => {
    if (!id) return null;
    const t = teachers.find((x) => x.id === id);
    return t?.full_name || t?.email || "teacher";
  };
  const courseCode = (id: string | null) => courses.find((c) => c.id === id)?.code || courses.find((c) => c.id === id)?.title || "—";

  if (loading) return (<main><SiteHeader /><div style={{ padding: 48, color: "#64748b" }}>Loading…</div></main>);

  const input: React.CSSProperties = { padding: "10px 13px", borderRadius: 9, border: "1px solid #cbd5e1", fontSize: 14, fontFamily: "inherit" };

  return (
    <main style={{ minHeight: "100vh" }}>
      <SiteHeader />
      <div style={{ maxWidth: 920, margin: "0 auto", padding: "36px 28px" }}>
        <Link href="/teacher" style={{ color: "#64748b", fontWeight: 600, fontSize: 14, textDecoration: "none" }}>← Admin dashboard</Link>
        <h1 style={{ fontFamily: "Fraunces, serif", fontSize: 30, fontWeight: 700, margin: "12px 0 6px" }}>Classes</h1>
        <p style={{ color: "#64748b", margin: "0 0 22px", fontSize: 15 }}>Create a class for a course. Leave the teacher <strong>open</strong> and a teacher can claim it to teach.</p>

        <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 14, padding: 22, marginBottom: 28, display: "flex", gap: 12, flexWrap: "wrap", alignItems: "end" }}>
          <div style={{ flex: 1, minWidth: 180 }}>
            <label style={lbl}>Class name *</label>
            <input style={{ ...input, width: "100%" }} placeholder="e.g. Period 2 — Grade 9 Math" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <label style={lbl}>Course *</label>
            <select style={input} value={courseId} onChange={(e) => setCourseId(e.target.value)}>
              <option value="">Select…</option>
              {courses.map((c) => (<option key={c.id} value={c.id}>{c.code ? `${c.code} — ` : ""}{c.title}</option>))}
            </select>
          </div>
          <div>
            <label style={lbl}>Teacher</label>
            <select style={input} value={teacherId} onChange={(e) => setTeacherId(e.target.value)}>
              <option value="">Open — teacher claims</option>
              {teachers.map((t) => (<option key={t.id} value={t.id}>{t.full_name || t.email}</option>))}
            </select>
          </div>
          <button onClick={create} disabled={saving || !name || !courseId} style={{ background: "#0d9488", color: "#fff", border: "none", borderRadius: 9, padding: "10px 20px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
            {saving ? "Creating…" : "Create class"}
          </button>
        </div>

        {courses.length === 0 && (
          <p style={{ color: "#b45309", background: "#fffbeb", border: "1px solid #fed7aa", borderRadius: 10, padding: "10px 14px", fontSize: 14 }}>No courses yet — create a course first.</p>
        )}

        <h2 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 14px" }}>All classes</h2>
        {classes.length === 0 ? (
          <div style={{ color: "#64748b", background: "#fff", border: "1px solid #e2e8f0", borderRadius: 14, padding: 24 }}>No classes yet.</div>
        ) : (
          <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 14, overflow: "hidden" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1.8fr 0.9fr 1.3fr 0.9fr 0.7fr", padding: "11px 18px", background: "#f8fafc", fontSize: 12, fontWeight: 800, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.04em" }}>
              <span>Class</span><span>Course</span><span>Teacher</span><span>Code</span><span style={{ textAlign: "right" }}>Students</span>
            </div>
            {classes.map((c) => (
              <div key={c.id} style={{ display: "grid", gridTemplateColumns: "1.8fr 0.9fr 1.3fr 0.9fr 0.7fr", padding: "13px 18px", borderTop: "1px solid #f1f5f9", alignItems: "center", fontSize: 14 }}>
                <span style={{ fontWeight: 700 }}>{c.name}</span>
                <span style={{ color: "#475569" }}>{courseCode(c.course_id)}</span>
                <span style={{ color: "#475569" }}>{teacherName(c.teacher_id) ?? <em style={{ color: "#0d9488" }}>Open — claimable</em>}</span>
                <span style={{ fontFamily: "JetBrains Mono, monospace", fontWeight: 700, color: "#1b7a44" }}>{c.join_code}</span>
                <span style={{ color: "#64748b", textAlign: "right" }}>{counts[c.id] ?? 0}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

const lbl: React.CSSProperties = { fontSize: 12, fontWeight: 700, color: "#475569", display: "block", marginBottom: 5 };
