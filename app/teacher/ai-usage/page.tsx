"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "../../../lib/supabase";
import { SiteHeader } from "../../../components/SiteHeader";

// Admin dashboard: AI tutor usage + a rough DeepSeek spend estimate.
// Reads tutor_messages (admins can read all rows via RLS). All aggregation is
// done client-side over the last 30 days.

type Row = { role: "user" | "assistant"; user_id: string; created_at: string; lesson_id: string | null; assignment_id: string | null; content: string };

// DeepSeek deepseek-chat rough pricing (USD / 1M tokens). Adjust if you change model.
const IN_PER_M = 0.27;
const OUT_PER_M = 1.1;
const EST_INPUT_TOKENS_PER_MSG = 2000; // system prompt + lesson/assignment context + short history

export default function AiUsagePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [denied, setDenied] = useState(false);
  const [rows, setRows] = useState<Row[]>([]);
  const [allTime, setAllTime] = useState(0);
  const [names, setNames] = useState<Record<string, string>>({});
  const [lessonCourse, setLessonCourse] = useState<Record<string, string>>({});
  const [assignCourse, setAssignCourse] = useState<Record<string, string>>({});
  const [courseLabel, setCourseLabel] = useState<Record<string, string>>({});

  useEffect(() => {
    (async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) return router.push("/login");
      const { data: me } = await supabase.from("profiles").select("role").eq("id", session.user.id).single();
      if (me?.role !== "admin") { setDenied(true); setLoading(false); return; }

      const since = new Date(Date.now() - 30 * 864e5).toISOString();
      const { data } = await supabase
        .from("tutor_messages")
        .select("role, user_id, created_at, lesson_id, assignment_id, content")
        .gte("created_at", since)
        .order("created_at", { ascending: false })
        .limit(8000);
      const list = (data ?? []) as Row[];
      setRows(list);

      const { count } = await supabase.from("tutor_messages").select("id", { count: "exact", head: true }).eq("role", "user");
      setAllTime(count ?? 0);

      const topIds = [...new Set(list.filter((r) => r.role === "user").map((r) => r.user_id))].slice(0, 200);
      if (topIds.length) {
        const { data: profs } = await supabase.from("profiles").select("id, full_name").in("id", topIds);
        const map: Record<string, string> = {};
        (profs ?? []).forEach((p: any) => (map[p.id] = p.full_name || ""));
        setNames(map);
      }

      // map lessons/assignments → course for the per-course breakdown
      const lIds = [...new Set(list.filter((r) => r.lesson_id).map((r) => r.lesson_id as string))].slice(0, 800);
      const aIds = [...new Set(list.filter((r) => r.assignment_id).map((r) => r.assignment_id as string))].slice(0, 800);
      const lc: Record<string, string> = {}, ac: Record<string, string> = {}; const cids = new Set<string>();
      if (lIds.length) { const { data: ls } = await supabase.from("lessons").select("id, course_id").in("id", lIds); (ls ?? []).forEach((l: any) => { if (l.course_id) { lc[l.id] = l.course_id; cids.add(l.course_id); } }); }
      if (aIds.length) { const { data: as } = await supabase.from("assignments").select("id, course_id").in("id", aIds); (as ?? []).forEach((a: any) => { if (a.course_id) { ac[a.id] = a.course_id; cids.add(a.course_id); } }); }
      setLessonCourse(lc); setAssignCourse(ac);
      if (cids.size) { const { data: cs } = await supabase.from("courses").select("id, code, title").in("id", [...cids]); const cl: Record<string, string> = {}; (cs ?? []).forEach((c: any) => (cl[c.id] = c.code || c.title || c.id)); setCourseLabel(cl); }

      setLoading(false);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return (<main><SiteHeader /><div style={{ padding: 48, color: "#64748b" }}>Loading…</div></main>);
  if (denied) return (<main><SiteHeader /><div style={{ padding: 48, color: "#64748b" }}>Admins only.</div></main>);

  const users = rows.filter((r) => r.role === "user");
  const asst = rows.filter((r) => r.role === "assistant");
  const now = Date.now();
  const since = (days: number) => users.filter((r) => now - new Date(r.created_at).getTime() <= days * 864e5).length;
  const today = users.filter((r) => new Date(r.created_at).toDateString() === new Date().toDateString()).length;

  // per-day (last 14 days)
  const days: { label: string; n: number }[] = [];
  for (let i = 13; i >= 0; i--) {
    const d = new Date(now - i * 864e5);
    const key = d.toDateString();
    days.push({ label: `${d.getMonth() + 1}/${d.getDate()}`, n: users.filter((r) => new Date(r.created_at).toDateString() === key).length });
  }
  const maxDay = Math.max(1, ...days.map((d) => d.n));

  // top students (30d)
  const byUser: Record<string, number> = {};
  users.forEach((r) => (byUser[r.user_id] = (byUser[r.user_id] ?? 0) + 1));
  const top = Object.entries(byUser).sort((a, b) => b[1] - a[1]).slice(0, 10);

  const lessonQ = users.filter((r) => r.lesson_id).length;
  const assignQ = users.filter((r) => r.assignment_id).length;
  const uniqueStudents = new Set(users.map((r) => r.user_id)).size;

  // rough 30-day cost estimate
  const outTokens = asst.reduce((s, r) => s + Math.ceil((r.content?.length ?? 0) / 4), 0);
  const inTokens = users.length * EST_INPUT_TOKENS_PER_MSG;
  const cost = (inTokens / 1e6) * IN_PER_M + (outTokens / 1e6) * OUT_PER_M;

  const card = (label: string, value: string | number, sub?: string) => (
    <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 14, padding: "16px 18px", flex: "1 1 150px" }}>
      <div style={{ fontSize: 12, fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: ".04em" }}>{label}</div>
      <div style={{ fontSize: 26, fontWeight: 800, color: "#0f172a", marginTop: 4 }}>{value}</div>
      {sub && <div style={{ fontSize: 12, color: "#94a3b8", marginTop: 2 }}>{sub}</div>}
    </div>
  );

  return (
    <main style={{ minHeight: "100vh", background: "#f8fafc" }}>
      <SiteHeader />
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "32px 24px" }}>
        <Link href="/teacher" style={{ color: "#64748b", fontWeight: 600, fontSize: 14, textDecoration: "none" }}>← Dashboard</Link>
        <h1 style={{ fontFamily: "Fraunces, serif", fontSize: 30, fontWeight: 700, margin: "10px 0 4px" }}>AI tutor usage</h1>
        <p style={{ color: "#64748b", fontSize: 14, margin: "0 0 22px" }}>Student questions and estimated cost. Detailed billing lives in your DeepSeek dashboard.</p>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 14 }}>
          {card("Today", today)}
          {card("Last 7 days", since(7))}
          {card("Last 30 days", users.length)}
          {card("All time", allTime)}
        </div>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 24 }}>
          {card("Active students (30d)", uniqueStudents)}
          {card("Lesson vs assignment", `${lessonQ} / ${assignQ}`, "questions")}
          {card("Est. spend (30d)", `≈ $${cost.toFixed(2)}`, "rough estimate")}
        </div>

        {/* per-day chart */}
        <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 14, padding: 18, marginBottom: 20 }}>
          <div style={{ fontSize: 14, fontWeight: 800, marginBottom: 12 }}>Questions per day (last 14 days)</div>
          <div style={{ display: "flex", alignItems: "flex-end", gap: 6, height: 130 }}>
            {days.map((d, i) => (
              <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                <div style={{ fontSize: 10, color: "#94a3b8" }}>{d.n || ""}</div>
                <div title={`${d.n} questions`} style={{ width: "100%", height: `${(d.n / maxDay) * 96}px`, minHeight: d.n ? 3 : 0, background: "#1b7a44", borderRadius: "4px 4px 0 0" }} />
                <div style={{ fontSize: 9.5, color: "#94a3b8" }}>{d.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* top students */}
        <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 14, padding: 18 }}>
          <div style={{ fontSize: 14, fontWeight: 800, marginBottom: 12 }}>Most active students (30 days)</div>
          {top.length === 0 && <div style={{ color: "#94a3b8", fontSize: 14 }}>No tutor questions yet.</div>}
          {top.map(([uid, n], i) => (
            <div key={uid} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 0", borderTop: i ? "1px solid #f1f5f9" : "none" }}>
              <span style={{ fontSize: 14, color: "#334155" }}>{i + 1}. {names[uid] || uid.slice(0, 8) + "…"}</span>
              <span style={{ fontSize: 14, fontWeight: 700, color: "#0f172a" }}>{n}</span>
            </div>
          ))}
        </div>

        {/* questions by course */}
        {(() => {
          const byCourse: Record<string, number> = {};
          for (const m of users) {
            const cid = m.lesson_id ? lessonCourse[m.lesson_id] : m.assignment_id ? assignCourse[m.assignment_id] : undefined;
            if (cid) byCourse[cid] = (byCourse[cid] ?? 0) + 1;
          }
          const topC = Object.entries(byCourse).sort((a, b) => b[1] - a[1]).slice(0, 14);
          const maxC = Math.max(1, ...topC.map((t) => t[1]));
          return (
            <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 14, padding: 18, marginTop: 20 }}>
              <div style={{ fontSize: 14, fontWeight: 800, marginBottom: 12 }}>Questions by course (30 days)</div>
              {topC.length === 0 && <div style={{ color: "#94a3b8", fontSize: 14 }}>No questions yet.</div>}
              {topC.map(([cid, n]) => (
                <div key={cid} style={{ display: "flex", alignItems: "center", gap: 10, padding: "5px 0" }}>
                  <span style={{ width: 92, fontSize: 13, fontWeight: 700, color: "#334155", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{courseLabel[cid] ?? cid.slice(0, 6)}</span>
                  <div style={{ flex: 1, background: "#f1f5f9", borderRadius: 6, height: 14, overflow: "hidden" }}>
                    <div style={{ width: `${(n / maxC) * 100}%`, height: "100%", background: "#1b7a44" }} />
                  </div>
                  <span style={{ width: 36, textAlign: "right", fontSize: 13, fontWeight: 700, color: "#0f172a" }}>{n}</span>
                </div>
              ))}
            </div>
          );
        })()}
      </div>
    </main>
  );
}
