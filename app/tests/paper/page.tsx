"use client";

// Printable chapter tests (teachers and admins). Auth + course list live here;
// the builder itself is components/PaperTestBuilder. Nothing is written to the DB.

import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { supabase } from "../../../lib/supabase";
import { SiteHeader } from "../../../components/SiteHeader";
import { PaperTestBuilder, type CourseOpt } from "../../../components/PaperTestBuilder";
import type { PaperRow } from "../../../lib/paperTest";

export default function PaperTestPage() {
  return (
    <Suspense>
      <PaperTestInner />
    </Suspense>
  );
}

async function loadBank(courseId: string): Promise<PaperRow[]> {
  const out: PaperRow[] = [];
  for (let from = 0; from < 20000; from += 1000) {
    const { data } = await supabase.from("bank_questions").select("id, topic, difficulty, kind, prompt, choices, answer, tolerance, points, feedback, image_url").eq("course_id", courseId).range(from, from + 999);
    out.push(...((data ?? []) as PaperRow[]));
    if (!data || data.length < 1000) break;
  }
  // dev server only: written-response questions staged locally before they are published
  if (process.env.NODE_ENV === "development") {
    try {
      const r = await fetch(`/api/dev/bank-preview/${courseId}`, { cache: "no-store" });
      if (r.ok) {
        const j = await r.json();
        const have = new Set(out.map((x) => x.prompt));
        out.push(...(j.rows as PaperRow[]).filter((x) => !have.has(x.prompt)));
      }
    } catch { /* no preview */ }
  }
  return out;
}

function PaperTestInner() {
  const router = useRouter();
  const params = useSearchParams();
  const [ready, setReady] = useState(false);
  const [courses, setCourses] = useState<CourseOpt[]>([]);
  const [initial, setInitial] = useState<string | null>(null);
  const [className, setClassName] = useState("");

  useEffect(() => {
    (async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) return router.push("/login");
      const { data: me } = await supabase.from("profiles").select("role").eq("id", session.user.id).single();
      if (me?.role !== "admin" && me?.role !== "teacher") return router.push("/classes");
      let list: CourseOpt[] = [];
      if (me.role === "admin") {
        const { data } = await supabase.from("courses").select("id, code, title").order("level").order("code");
        list = (data ?? []) as CourseOpt[];
      } else {
        const { data: cls } = await supabase.from("classes").select("course_id").eq("teacher_id", session.user.id);
        const ids = [...new Set((cls ?? []).map((c: { course_id: string | null }) => c.course_id).filter(Boolean))] as string[];
        if (ids.length) {
          const { data } = await supabase.from("courses").select("id, code, title").in("id", ids).order("code");
          list = (data ?? []) as CourseOpt[];
        }
      }
      setCourses(list);
      const classId = params.get("class");
      if (classId) {
        const { data: c } = await supabase.from("classes").select("name").eq("id", classId).single();
        if (c?.name) setClassName(c.name);
      }
      const want = params.get("course");
      setInitial(list.find((c) => c.id === want)?.id ?? (list.length === 1 ? list[0].id : null));
      setReady(true);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!ready) {
    return (
      <div style={{ minHeight: "100vh", background: "#f6f8fc" }}>
        <SiteHeader />
        <main style={{ maxWidth: 1000, margin: "0 auto", padding: "28px 20px" }}><p style={{ color: "#64748b" }}>Loading…</p></main>
      </div>
    );
  }
  return <PaperTestBuilder courses={courses} initialCourseId={initial} loadRows={loadBank} className={className} />;
}
