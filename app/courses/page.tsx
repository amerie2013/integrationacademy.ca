"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { supabase } from "../../lib/supabase";
import { SiteHeader } from "../../components/SiteHeader";
import { useLevelLabel } from "../../lib/useLevelLabel";
import { accentFor } from "../../lib/courseAccent";

type Course = {
  id: string;
  code: string | null;
  title: string;
  description: string | null;
  level: string | null;
  language: string | null;
  published: boolean;
};

// Catalog order: Ontario high school (Grade 9 → 12), then university & advanced
// (AP, IB, certification, college/university), then U.S. courses — same groups as the homepage tabs.
const ADVANCED_CODES = ["APCALCAB", "IBAASL", "FTCEMATH612"];
const US_CODES = ["ALG1", "GEO1"];

function courseGroup(c: Course) {
  const code = c.code ?? "";
  if (US_CODES.includes(code)) return 2;
  if (ADVANCED_CODES.includes(code) || !/^\d+$/.test(c.level ?? "")) return 1;
  return 0;
}

function compareCourses(a: Course, b: Course) {
  const level = (c: Course) => (/^\d+$/.test(c.level ?? "") ? +c.level! : 100);
  const base = (c: Course) => (c.code ?? "").replace(/-FR$/, "");
  return (
    courseGroup(a) - courseGroup(b) ||
    level(a) - level(b) ||
    base(a).localeCompare(base(b)) ||
    (a.language === "fr" ? 1 : 0) - (b.language === "fr" ? 1 : 0)
  );
}

export default function CourseCatalogPage() {
  const t = useTranslations("courses");
  const levelLabel = useLevelLabel();
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

      // No .eq("published", true) filter here on purpose: RLS on `courses`
      // already returns published courses to everyone, plus any unpublished
      // (private) course the viewer has real access to — admin, or a
      // course_access() grant/class membership (see
      // supabase/migrations/2026-09-08_private_course_class_access.sql).
      // A random visitor still only ever gets the published ones back.
      const { data: cs } = await supabase
        .from("courses")
        .select("id, code, title, description, level, language, published")
        .order("level");
      setCourses(((cs ?? []) as Course[]).sort(compareCourses));

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
        <h1 style={{ fontFamily: "Fraunces, serif", fontSize: 36, fontWeight: 700, margin: "0 0 8px" }}>{t("catalogTitle")}</h1>
        <p style={{ color: "#64748b", fontSize: 16, margin: "0 0 32px" }}>
          {t("catalogSubtitle")}
        </p>

        {loading ? (
          <p style={{ color: "#64748b" }}>{t("loading")}</p>
        ) : courses.length === 0 ? (
          <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 14, padding: 28, color: "#64748b" }}>
            {t("empty")}
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 18 }}>
            {courses.map((c) => {
              const isEnrolled = enrolledIds.has(c.id);
              const accent = accentFor(c.code);
              return (
                <div key={c.id} style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 16, padding: 22, display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                    {c.code ? (
                      <span style={{ fontFamily: "JetBrains Mono, monospace", color: accent.primary, fontWeight: 700, fontSize: 13 }}>{c.code}</span>
                    ) : <span />}
                    <span style={{ display: "flex", gap: 6 }}>
                      {c.language === "fr" && (
                        <span style={{ fontSize: 12, fontWeight: 700, color: "#1e3a8a", background: "#eff6ff", border: "1px solid #bfdbfe", padding: "3px 9px", borderRadius: 999 }}>
                          {t("french")}
                        </span>
                      )}
                      {!c.published && (
                        <span style={{ fontSize: 12, fontWeight: 700, color: "#92400e", background: "#fffbeb", border: "1px solid #fde68a", padding: "3px 9px", borderRadius: 999 }}>
                          {t("private")}
                        </span>
                      )}
                      <span style={{ fontSize: 12, fontWeight: 700, color: accent.badge, background: accent.badgeBg, padding: "3px 9px", borderRadius: 999 }}>
                        {levelLabel(c.level)}
                      </span>
                    </span>
                  </div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 8px" }}>{c.title}</h3>
                  {c.description && <p style={{ color: "#64748b", fontSize: 14, lineHeight: 1.5, margin: "0 0 16px", flex: 1 }}>{c.description}</p>}
                  <div style={{ display: "flex", gap: 10, marginTop: "auto" }}>
                    {isEnrolled ? (
                      <Link href={`/courses/${c.id}`} style={{ flex: 1, textAlign: "center", background: accent.primary, color: "#fff", padding: "10px", borderRadius: 9, textDecoration: "none", fontWeight: 700, fontSize: 14 }}>
                        {t("openCourse")}
                      </Link>
                    ) : (
                      <>
                        <Link href={`/courses/${c.id}`} style={{ background: "#fff", color: "#0f172a", padding: "10px 14px", borderRadius: 9, textDecoration: "none", fontWeight: 700, fontSize: 14, border: "1px solid #cbd5e1" }}>
                          {t("details")}
                        </Link>
                        <button onClick={() => enroll(c.id)} disabled={busy === c.id} style={{ flex: 1, background: accent.badge, color: "#fff", border: "none", padding: "10px", borderRadius: 9, fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
                          {busy === c.id ? t("enrolling") : t("enroll")}
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
