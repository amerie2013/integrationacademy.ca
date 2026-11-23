"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "../lib/supabase";
import { langForCourse } from "../lib/lang";

type Item = { id: string; title: string; ch: number; sub: number };
const codeOf = (t: string): [number, number] => { const m = (t || "").match(/(\d+)\.(\d+)/); return m ? [+m[1], +m[2]] : [999, 999]; };

/**
 * Left-hand list of every lesson in the course, grouped by chapter (from the
 * "5.3" prefix in the title). The current chapter starts open; the others can
 * be expanded. Hides lessons the teacher locked for the viewer's class.
 * On narrow screens (see .lesson-side in globals.css) it collapses into a
 * "Topics" toggle above the lesson.
 */
export function LessonSidebar({ courseId, courseCode, currentId, accent }: { courseId: string; courseCode: string | null; currentId: string; accent: string }) {
  const [items, setItems] = useState<Item[]>([]);
  const [open, setOpen] = useState<Record<number, boolean>>({});
  const [mobileOpen, setMobileOpen] = useState(false);
  const fr = langForCourse(courseCode) === "fr";

  useEffect(() => {
    (async () => {
      const { data: ls } = await supabase.from("lessons").select("id, title, position").eq("course_id", courseId).eq("published", true).order("position");
      const locked = new Set<string>();
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        const { data: mem } = await supabase.from("class_students").select("class_id").eq("student_id", session.user.id);
        const ids = (mem ?? []).map((m: any) => m.class_id);
        if (ids.length) {
          const { data: cls } = await supabase.from("classes").select("id").eq("course_id", courseId).in("id", ids);
          const cids = (cls ?? []).map((c: any) => c.id);
          if (cids.length) {
            const { data: lk } = await supabase.from("class_locks").select("item_id").eq("item_type", "lesson").in("class_id", cids);
            (lk ?? []).forEach((r: any) => locked.add(r.item_id));
          }
        }
      }
      const list = (ls ?? [])
        .filter((l: any) => !locked.has(l.id) || l.id === currentId)
        .map((l: any) => { const [ch, sub] = codeOf(l.title); return { id: l.id, title: l.title, ch, sub }; })
        .sort((a, b) => a.ch - b.ch || a.sub - b.sub);
      setItems(list);
      const cur = list.find((l) => l.id === currentId);
      if (cur) setOpen((o) => ({ ...o, [cur.ch]: true }));
    })();
  }, [courseId, currentId]);

  // Keep the current lesson visible inside the scrolling sidebar.
  useEffect(() => {
    document.getElementById(`side-${currentId}`)?.scrollIntoView({ block: "nearest" });
  }, [items, currentId]);

  if (items.length < 2) return null;

  const chapters: { ch: number; items: Item[] }[] = [];
  items.forEach((it) => {
    const last = chapters[chapters.length - 1];
    if (last && last.ch === it.ch) last.items.push(it);
    else chapters.push({ ch: it.ch, items: [it] });
  });

  return (
    <aside className="lesson-side">
      <button className="lesson-side-toggle" onClick={() => setMobileOpen((v) => !v)}>
        {fr ? "Sujets du cours" : "Course topics"} <span style={{ marginLeft: "auto" }}>{mobileOpen ? "▴" : "▾"}</span>
      </button>
      <nav className={`lesson-side-list${mobileOpen ? " open" : ""}`}>
        <div style={{ fontSize: 11.5, fontWeight: 800, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.06em", padding: "4px 10px 10px" }}>
          {fr ? "Sujets du cours" : "Course topics"}
        </div>
        {chapters.map(({ ch, items: chItems }) => {
          const isOpen = !!open[ch];
          const hasCurrent = chItems.some((i) => i.id === currentId);
          return (
            <div key={ch} style={{ marginBottom: 2 }}>
              {ch !== 999 && (
                <button
                  onClick={() => setOpen((o) => ({ ...o, [ch]: !isOpen }))}
                  style={{
                    width: "100%", display: "flex", alignItems: "center", gap: 8, background: "none", border: "none", cursor: "pointer",
                    padding: "8px 10px", borderRadius: 8, textAlign: "left", fontSize: 14, fontWeight: 700,
                    color: hasCurrent ? accent : "#334155",
                  }}
                >
                  <span style={{ display: "inline-block", width: 10, fontSize: 10, color: "#94a3b8", transform: isOpen ? "rotate(90deg)" : "none", transition: "transform .15s" }}>▶</span>
                  {fr ? "Chapitre" : "Chapter"} {ch}
                  <span style={{ marginLeft: "auto", fontSize: 12, fontWeight: 600, color: "#94a3b8" }}>{chItems.length}</span>
                </button>
              )}
              {(isOpen || ch === 999) && (
                <div style={{ marginLeft: ch === 999 ? 0 : 14, borderLeft: ch === 999 ? "none" : "1px solid #e2e8f0", paddingLeft: 6 }}>
                  {chItems.map((it) => {
                    const cur = it.id === currentId;
                    return (
                      <Link
                        key={it.id}
                        id={`side-${it.id}`}
                        href={`/lessons/${it.id}`}
                        aria-current={cur ? "page" : undefined}
                        className="lesson-side-link"
                        style={{
                          display: "block", padding: "6px 10px", borderRadius: 7, textDecoration: "none", fontSize: 13.5, lineHeight: 1.4,
                          color: cur ? "#fff" : "#475569", background: cur ? accent : "transparent", fontWeight: cur ? 700 : 500,
                        }}
                      >
                        {it.title}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
