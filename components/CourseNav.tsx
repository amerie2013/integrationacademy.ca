"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "../lib/supabase";

type NavItem = { type: string; id: string; title: string; href: string; label: string };
const LABEL: Record<string, string> = { lesson: "Lesson", worksheet: "Worksheet", assignment: "Assignment", quiz: "Quiz" };
const HREF: Record<string, (id: string) => string> = {
  lesson: (id) => `/lessons/${id}`,
  worksheet: (id) => `/worksheets/${id}`,
  assignment: (id) => `/assignments/${id}`,
  quiz: (id) => `/quizzes/${id}`,
};
const RANK: Record<string, number> = { lesson: 0, worksheet: 1, assignment: 2, quiz: 3 };
const codeOf = (t: string) => { const m = (t || "").match(/(\d+)\.(\d+)/); return m ? Number(m[1]) * 1000 + Number(m[2]) : 999999; };

/**
 * Previous / Next navigator. If the viewer belongs to (or teaches) a class for
 * this course, it uses that class's teacher-defined order — weaving in the
 * class's quizzes and skipping hidden (locked) items. Otherwise it falls back
 * to the course's lessons + assignments.
 */
export function CourseNav({ courseId, type, id, classId: forcedClassId }: { courseId: string; type: string; id: string; classId?: string | null }) {
  const [items, setItems] = useState<NavItem[]>([]);

  useEffect(() => {
    (async () => {
      const { data: { session } } = await supabase.auth.getSession();
      const uid = session?.user.id;

      // Prefer an explicit class (e.g. the quiz's own class); otherwise find the
      // viewer's class for this course (teaches or enrolled).
      let classId: string | null = forcedClassId ?? null;
      if (!classId && uid) {
        const taught = await supabase.from("classes").select("id").eq("course_id", courseId).eq("teacher_id", uid).limit(1);
        if (taught.data && taught.data.length) classId = taught.data[0].id;
        if (!classId) {
          const mem = await supabase.from("class_students").select("class_id").eq("student_id", uid);
          const ids = (mem.data ?? []).map((m: any) => m.class_id);
          if (ids.length) {
            const cls = await supabase.from("classes").select("id").eq("course_id", courseId).in("id", ids).limit(1);
            if (cls.data && cls.data.length) classId = cls.data[0].id;
          }
        }
      }
      // Fallback (admin/teacher previewing, or any viewer without their own class):
      // use a class for this course that has a teacher-defined order, so Next/Prev
      // follows the same unified order — quizzes woven in with lessons/assignments.
      if (!classId) {
        const all = await supabase.from("classes").select("id").eq("course_id", courseId).order("created_at");
        const cids = (all.data ?? []).map((c: any) => c.id);
        if (cids.length) {
          const withOrder = await supabase.from("class_order").select("class_id").in("class_id", cids).limit(1);
          classId = withOrder.data?.[0]?.class_id ?? cids[0];
        }
      }

      const { data: ls } = await supabase.from("lessons").select("id, title, position").eq("course_id", courseId).eq("published", true).order("position");
      const { data: wsd } = await supabase.from("worksheets").select("id, code, title, position").eq("course_id", courseId).eq("published", true).order("position");
      let as: any[] = [];
      const ra = await supabase.from("assignments").select("id, title, published").eq("course_id", courseId).order("created_at");
      if (!ra.error) as = (ra.data ?? []).filter((a: any) => a.published !== false);
      else as = (await supabase.from("assignments").select("id, title").eq("course_id", courseId).order("created_at")).data ?? [];

      let quizzes: any[] = [];
      let order: any[] = [];
      const locked = new Set<string>();
      if (classId) {
        const [{ data: qs }, { data: ord }, { data: lk }] = await Promise.all([
          supabase.from("quizzes").select("id, title").eq("class_id", classId).eq("published", true).order("created_at"),
          supabase.from("class_order").select("item_type, item_id, position").eq("class_id", classId),
          supabase.from("class_locks").select("item_type, item_id").eq("class_id", classId),
        ]);
        quizzes = qs ?? [];
        order = ord ?? [];
        (lk ?? []).forEach((r: any) => locked.add(`${r.item_type}:${r.item_id}`));
      }

      let def: NavItem[] = [
        ...(ls ?? []).map((l: any) => ({ type: "lesson", id: l.id, title: l.title, href: HREF.lesson(l.id), label: LABEL.lesson })),
        ...(wsd ?? []).map((w: any) => ({ type: "worksheet", id: w.id, title: w.code ? `${w.code} ${w.title}` : w.title, href: HREF.worksheet(w.id), label: LABEL.worksheet })),
        ...quizzes.map((q: any) => ({ type: "quiz", id: q.id, title: q.title, href: HREF.quiz(q.id), label: LABEL.quiz })),
        ...(as ?? []).map((a: any) => ({ type: "assignment", id: a.id, title: a.title, href: HREF.assignment(a.id), label: LABEL.assignment })),
      ].filter((it) => !locked.has(`${it.type}:${it.id}`));

      // Default order: by subject code (1.1, 1.2, …); within a subject lesson → worksheet → assignment → quiz.
      def.sort((a, b) => (codeOf(a.title) - codeOf(b.title)) || (RANK[a.type] - RANK[b.type]));

      const pos: Record<string, number> = {};
      order.forEach((o: any) => (pos[`${o.item_type}:${o.item_id}`] = o.position));
      def = def.map((it, i) => ({ it, p: pos[`${it.type}:${it.id}`] ?? 1000 + i })).sort((a, b) => a.p - b.p).map((x) => x.it);

      setItems(def);
    })();
  }, [courseId, type, id, forcedClassId]);

  const idx = items.findIndex((i) => i.type === type && i.id === id);
  if (idx === -1) return null;
  const prev = items[idx - 1];
  const next = items[idx + 1];
  const box: React.CSSProperties = { flex: 1, display: "flex", flexDirection: "column", gap: 2, padding: "12px 16px", border: "1px solid #e2e8f0", borderRadius: 12, textDecoration: "none", background: "#fff", color: "#0f172a", maxWidth: "48%" };

  return (
    <nav style={{ display: "flex", justifyContent: "space-between", gap: 12, marginTop: 36, borderTop: "1px solid #e2e8f0", paddingTop: 24 }}>
      {prev ? (
        <Link href={prev.href} style={box}>
          <span style={{ fontSize: 12, color: "#94a3b8", fontWeight: 700 }}>← Previous · {prev.label}</span>
          <span style={{ fontWeight: 700, fontSize: 15 }}>{prev.title}</span>
        </Link>
      ) : <span style={{ maxWidth: "48%", flex: 1 }} />}
      {next ? (
        <Link href={next.href} style={{ ...box, textAlign: "right", alignItems: "flex-end" }}>
          <span style={{ fontSize: 12, color: "#94a3b8", fontWeight: 700 }}>Next · {next.label} →</span>
          <span style={{ fontWeight: 700, fontSize: 15 }}>{next.title}</span>
        </Link>
      ) : <span style={{ maxWidth: "48%", flex: 1 }} />}
    </nav>
  );
}
