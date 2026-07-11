"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabase";
import { SiteHeader } from "../../components/SiteHeader";
import { levelLabel } from "../../lib/theme";

type Course = {
  id: string;
  code: string | null;
  title: string;
  description: string | null;
  level: string | null;
};

export default function CourseCatalogPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState<Course[]>([]);
  const [enrolledIds, setEnrolledIds] = useState<Set<string>>(new Set());
  const [userId, setUserId] = useState<string | null>(null);
  const [busy, setBusy] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUserId(session?.user.id ?? null);

      const { data: cs } = await supabase
        .from("courses")
        .select("id, code, title, description, level")
        .eq("published", true)
        .order("level");
      setCourses((cs ?? []) as Course[]);

      if (session) {
        const { data: en } = await supabase
          .from("enrollments")
          .select("course_id")
          .eq("student_id", session.user.id);
        setEnrolledIds(new Set((en ?? []).map((e: any) => e.course_id)));
      }
      setLoading(false);
    })();
  }, []);

  async function enroll(courseId: string) {
    if (!userId) return router.push("/login");
    setBusy(courseId);
    const { error } = await supabase.from("enrollments").insert({ student_id: userId, course_id: courseId });
    if (!error) setEnrolledIds((s) => new Set(s).add(courseId));
    setBusy(null);
  }

  return (
    <main style={{ minHeight: "100vh" }}>
      <SiteHeader />
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "44px 28px" }}>
        <h1 style={{ fontFamily: "Fraunces, serif", fontSize: 36, fontWeight: 700, margin: "0 0 8px" }}>Course catalog</h1>
        <p style={{ color: "#64748b", fontSize: 16, margin: "0 0 32px" }}>
          Enroll to unlock interactive lessons, quizzes, and assignments.
        </p>

        {loading ? (
          <p style={{ color: "#64748b" }}>Loading…</p>
        ) : courses.length === 0 ? (
          <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 14, padding: 28, color: "#64748b" }}>
            No published courses yet. Check back soon.
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 18 }}>
            {courses.map((c) => {
              const isEnrolled = enrolledIds.has(c.id);
              return (
                <div key={c.id} style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 16, padding: 22, display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                    {c.code ? (
                      <span style={{ fontFamily: "JetBrains Mono, monospace", color: "#1b7a44", fontWeight: 700, fontSize: 13 }}>{c.code}</span>
                    ) : <span />}
                    <span style={{ fontSize: 12, fontWeight: 700, color: "#0d9488", background: "#ecfdf5", padding: "3px 9px", borderRadius: 999 }}>
                      {levelLabel(c.level)}
                    </span>
                  </div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 8px" }}>{c.title}</h3>
                  {c.description && <p style={{ color: "#64748b", fontSize: 14, lineHeight: 1.5, margin: "0 0 16px", flex: 1 }}>{c.description}</p>}
                  <div style={{ display: "flex", gap: 10, marginTop: "auto" }}>
                    {isEnrolled ? (
                      <Link href={`/courses/${c.id}`} style={{ flex: 1, textAlign: "center", background: "#1b7a44", color: "#fff", padding: "10px", borderRadius: 9, textDecoration: "none", fontWeight: 700, fontSize: 14 }}>
                        Open course →
                      </Link>
                    ) : (
                      <>
                        <Link href={`/courses/${c.id}`} style={{ background: "#fff", color: "#0f172a", padding: "10px 14px", borderRadius: 9, textDecoration: "none", fontWeight: 700, fontSize: 14, border: "1px solid #cbd5e1" }}>
                          Details
                        </Link>
                        <button onClick={() => enroll(c.id)} disabled={busy === c.id} style={{ flex: 1, background: "#0d9488", color: "#fff", border: "none", padding: "10px", borderRadius: 9, fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
                          {busy === c.id ? "Enrolling…" : "Enroll"}
                        </button>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}
