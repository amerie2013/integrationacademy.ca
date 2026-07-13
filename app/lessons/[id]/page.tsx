"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { supabase } from "../../../lib/supabase";
import { SiteHeader } from "../../../components/SiteHeader";
import { BlockRenderer } from "../../../components/BlockRenderer";
import { CourseNav } from "../../../components/CourseNav";
import { MaterialsPanel } from "../../../components/MaterialsPanel";
import { fetchMaterials } from "../../../lib/materials";
import { Block } from "../../../lib/blocks";
import { TutorChat } from "../../../components/TutorChat";

export default function LessonViewPage() {
  const params = useParams();
  const lessonId = params.id as string;
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [blocks, setBlocks] = useState<Block[]>([]);
  const [pdfUrl, setPdfUrl] = useState("");
  const [pdfName, setPdfName] = useState("");
  const [courseId, setCourseId] = useState("");
  const [notFound, setNotFound] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [hasMaterials, setHasMaterials] = useState(false);
  const [tab, setTab] = useState<"lesson" | "materials">("lesson");
  const [role, setRole] = useState<string | null>(null);
  const [completed, setCompleted] = useState(false);
  const [progBusy, setProgBusy] = useState(false);

  useEffect(() => {
    (async () => {
      const { data } = await supabase
        .from("lessons")
        .select("title, blocks, course_id")
        .eq("id", lessonId)
        .single();
      if (!data) {
        setNotFound(true);
      } else {
        setTitle(data.title ?? "");
        setBlocks(Array.isArray(data.blocks) ? (data.blocks as Block[]) : []);
        setCourseId(data.course_id ?? "");
      }
      // best-effort: pdf_url column may not exist yet (migration optional)
      const { data: pdf } = await supabase.from("lessons").select("pdf_url, pdf_name").eq("id", lessonId).single();
      if (pdf?.pdf_url) { setPdfUrl(pdf.pdf_url); setPdfName(pdf.pdf_name ?? ""); }
      // materials (PDF + attachments)
      const { items } = await fetchMaterials("lesson", lessonId);
      setHasMaterials(items.length > 0 || !!pdf?.pdf_url);
      // show an Edit button for admins; record activity for students
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        const { data: me } = await supabase.from("profiles").select("role").eq("id", session.user.id).single();
        setIsAdmin(me?.role === "admin");
        setRole(me?.role ?? null);
        if (me?.role === "student") {
          // best-effort — no-op until the lesson_progress migration is run
          supabase.rpc("record_lesson_view", { p_lesson: lessonId }).then(() => {}, () => {});
          const { data: prog } = await supabase.from("lesson_progress").select("completed").eq("lesson_id", lessonId).eq("student_id", session.user.id).maybeSingle();
          if (prog?.completed) setCompleted(true);
        }
      }
      setLoading(false);
    })();
  }, [lessonId]);

  async function toggleComplete() {
    setProgBusy(true);
    const next = !completed;
    const { error } = await supabase.rpc("set_lesson_complete", { p_lesson: lessonId, p_done: next });
    if (!error) setCompleted(next);
    setProgBusy(false);
  }

  return (
    <main style={{ minHeight: "100vh" }}>
      <SiteHeader />
      <article style={{ maxWidth: 760, margin: "0 auto", padding: "44px 28px" }}>
        {loading ? (
          <p style={{ color: "#64748b" }}>Loading…</p>
        ) : notFound ? (
          <p style={{ color: "#64748b" }}>This lesson isn't available.</p>
        ) : (
          <>
            <div style={{ display: "flex", justifyContent: "flex-end", gap: 10, marginBottom: 12 }}>
              <Link
                href={`/lessons/${lessonId}/slides`}
                style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#0d9488", color: "#fff", padding: "9px 18px", borderRadius: 9, textDecoration: "none", fontWeight: 700, fontSize: 14 }}
              >
                ▶ Present (slides)
              </Link>
              {isAdmin && (
                <Link
                  href={`/teacher/lessons/${lessonId}`}
                  style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#1b7a44", color: "#fff", padding: "9px 18px", borderRadius: 9, textDecoration: "none", fontWeight: 700, fontSize: 14 }}
                >
                  ✏️ Edit lesson
                </Link>
              )}
            </div>
            {hasMaterials && (
              <div style={{ display: "flex", gap: 6, borderBottom: "1px solid var(--border)", marginBottom: 24 }}>
                <TabBtn active={tab === "lesson"} onClick={() => setTab("lesson")}>Lesson</TabBtn>
                <TabBtn active={tab === "materials"} onClick={() => setTab("materials")}>Materials</TabBtn>
              </div>
            )}

            {tab === "lesson" ? (
              <>
                <h1 style={{ fontFamily: "Fraunces, serif", fontSize: 38, fontWeight: 700, margin: "0 0 16px" }}>{title}</h1>
                <BlockRenderer blocks={blocks} />
                {role === "student" && (
                  <div style={{ display: "flex", justifyContent: "center", margin: "32px 0 4px" }}>
                    <button
                      onClick={toggleComplete}
                      disabled={progBusy}
                      style={{
                        display: "inline-flex", alignItems: "center", gap: 8, cursor: progBusy ? "default" : "pointer",
                        padding: "11px 22px", borderRadius: 999, fontWeight: 700, fontSize: 15,
                        border: completed ? "1px solid #1b7a44" : "1px solid #cbd5e1",
                        background: completed ? "#1b7a44" : "#fff",
                        color: completed ? "#fff" : "#334155",
                      }}
                    >
                      {completed ? "✓ Completed" : "Mark as complete"}
                    </button>
                  </div>
                )}
                {courseId && <CourseNav courseId={courseId} type="lesson" id={lessonId} />}
              </>
            ) : (
              <>
                <div style={{ fontSize: 13, fontWeight: 800, color: "#0d5c30", textTransform: "uppercase", letterSpacing: "0.05em" }}>PDF lesson</div>
                <h1 style={{ fontFamily: "Fraunces, serif", fontSize: 28, fontWeight: 700, margin: "6px 0 18px" }}>{title}</h1>
                <MaterialsPanel ownerType="lesson" ownerId={lessonId} fallbackPdf={pdfUrl ? { url: pdfUrl, name: pdfName } : null} />
              </>
            )}
          </>
        )}
      </article>
      {!loading && !notFound && (
        <TutorChat lessonId={lessonId} lessonTitle={title} />
      )}
    </main>
  );
}

function TabBtn({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: "none",
        border: "none",
        borderBottom: active ? "2px solid #1b7a44" : "2px solid transparent",
        color: active ? "#0d5c30" : "#64748b",
        fontWeight: 700,
        fontSize: 15,
        padding: "10px 16px",
        cursor: "pointer",
        marginBottom: -1,
      }}
    >
      {children}
    </button>
  );
}
