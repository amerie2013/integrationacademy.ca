"use client";

import { Fragment, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "../../../lib/supabase";
import { SiteHeader } from "../../../components/SiteHeader";

// Foundations games progress: for each student in the teacher's classes, the
// level and accuracy of their most recent play of each game (last 30 days),
// plus the facts they miss most. Admins see every class.

type Attempt = { student_id: string; game: string; level: number; correct: number; total: number; avg_ms: number | null; missed: { q: string; a: string }[]; played_at: string };
type Cls = { id: string; name: string };

const GAMES: { id: string; label: string }[] = [
  { id: "skill-check", label: "Skill Check" },
  { id: "cart-rush", label: "Add" },
  { id: "change-up", label: "Subtract" },
  { id: "fact-heat", label: "Multiply" },
  { id: "split-the-bill", label: "Divide" },
  { id: "sign-flip", label: "Integers" },
];

export default function FoundationsProgress() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [denied, setDenied] = useState(false);
  const [classes, setClasses] = useState<Cls[]>([]);
  const [classId, setClassId] = useState("all");
  const [members, setMembers] = useState<{ class_id: string; student_id: string }[]>([]);
  const [names, setNames] = useState<Record<string, string>>({});
  const [attempts, setAttempts] = useState<Attempt[]>([]);
  const [open, setOpen] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) return router.push("/login");
      const { data: me } = await supabase.from("profiles").select("role").eq("id", session.user.id).single();
      if (me?.role !== "teacher" && me?.role !== "admin") { setDenied(true); setLoading(false); return; }

      let cq = supabase.from("classes").select("id, name").order("name");
      if (me.role === "teacher") cq = cq.eq("teacher_id", session.user.id);
      const { data: cls } = await cq;
      const clist = (cls ?? []) as Cls[];
      setClasses(clist);

      const ids = clist.map((c) => c.id);
      const { data: mem } = ids.length ? await supabase.from("class_students").select("class_id, student_id").in("class_id", ids) : { data: [] as any[] };
      const memList = (mem ?? []) as { class_id: string; student_id: string }[];
      setMembers(memList);
      const sids = [...new Set(memList.map((m) => m.student_id))];

      if (sids.length) {
        const { data: profs } = await supabase.from("profiles").select("id, full_name").in("id", sids);
        const map: Record<string, string> = {};
        (profs ?? []).forEach((p: any) => (map[p.id] = p.full_name || ""));
        setNames(map);
        const since = new Date(Date.now() - 30 * 864e5).toISOString();
        const { data: att } = await supabase
          .from("game_attempts")
          .select("student_id, game, level, correct, total, avg_ms, missed, played_at")
          .in("student_id", sids)
          .gte("played_at", since)
          .order("played_at", { ascending: false })
          .limit(5000);
        setAttempts((att ?? []) as Attempt[]);
      }
      setLoading(false);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const students = useMemo(() => {
    const ids = [...new Set(members.filter((m) => classId === "all" || m.class_id === classId).map((m) => m.student_id))];
    return ids.sort((a, b) => (names[a] || "~").localeCompare(names[b] || "~"));
  }, [members, classId, names]);

  const byStudent = useMemo(() => {
    const m: Record<string, Attempt[]> = {};
    attempts.forEach((a) => (m[a.student_id] ??= []).push(a));
    return m;
  }, [attempts]);

  if (loading) return (<main><SiteHeader /><div style={{ padding: 48, color: "#64748b" }}>Loading…</div></main>);
  if (denied) return (<main><SiteHeader /><div style={{ padding: 48, color: "#64748b" }}>Teachers and admins only.</div></main>);

  const pct = (a: Attempt) => (a.total ? Math.round((a.correct / a.total) * 100) : 0);
  const tone = (p: number) => (p >= 85 ? { bg: "#dcfce7", fg: "#14532d" } : p >= 60 ? { bg: "#fef3c7", fg: "#78350f" } : { bg: "#fee2e2", fg: "#7f1d1d" });
  const th: React.CSSProperties = { textAlign: "left", fontSize: 12, fontWeight: 800, color: "#64748b", textTransform: "uppercase", letterSpacing: ".04em", padding: "10px 10px", borderBottom: "1px solid #e2e8f0", whiteSpace: "nowrap" };
  const td: React.CSSProperties = { padding: "10px 10px", borderBottom: "1px solid #f1f5f9", fontSize: 14, verticalAlign: "middle" };

  const activeCount = students.filter((s) => (byStudent[s] ?? []).length > 0).length;

  return (
    <main style={{ minHeight: "100vh", background: "#f8fafc" }}>
      <SiteHeader />
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "32px 24px" }}>
        <Link href="/teacher" style={{ color: "#64748b", fontWeight: 600, fontSize: 14, textDecoration: "none" }}>← Dashboard</Link>
        <h1 style={{ fontFamily: "Fraunces, serif", fontSize: 30, fontWeight: 700, margin: "10px 0 4px" }}>Foundations progress</h1>
        <p style={{ color: "#64748b", fontSize: 14, margin: "0 0 20px" }}>
          Latest result per skill from the arithmetic games, last 30 days. Each cell shows accuracy and the level reached. Click a student to see the facts they miss most.
        </p>

        <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap", marginBottom: 16 }}>
          <select value={classId} onChange={(e) => { setClassId(e.target.value); setOpen(null); }} style={{ border: "1px solid #cbd5e1", borderRadius: 10, padding: "9px 12px", fontSize: 14, background: "#fff" }}>
            <option value="all">All my classes</option>
            {classes.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
          </select>
          <span style={{ color: "#64748b", fontSize: 14 }}>{activeCount} of {students.length} students have played</span>
        </div>

        <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 14, overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 720 }}>
            <thead>
              <tr>
                <th style={th}>Student</th>
                {GAMES.map((g) => <th key={g.id} style={th}>{g.label}</th>)}
                <th style={th}>Plays</th>
                <th style={th}>Last</th>
              </tr>
            </thead>
            <tbody>
              {students.length === 0 && (
                <tr><td style={{ ...td, color: "#94a3b8" }} colSpan={GAMES.length + 3}>No students yet — add some to a class first.</td></tr>
              )}
              {students.map((sid) => {
                const list = byStudent[sid] ?? [];
                const isOpen = open === sid;
                const missCounts: Record<string, { q: string; a: string; n: number }> = {};
                list.forEach((a) => (a.missed ?? []).forEach((m) => { const k = `${m.q}=${m.a}`; (missCounts[k] ??= { ...m, n: 0 }).n++; }));
                const topMissed = Object.values(missCounts).sort((x, y) => y.n - x.n).slice(0, 8);
                return (
                  <Fragment key={sid}>
                    <tr onClick={() => setOpen(isOpen ? null : sid)} style={{ cursor: "pointer", background: isOpen ? "#f8fafc" : undefined }}>
                      <td style={{ ...td, fontWeight: 700, color: "#0f172a" }}>{names[sid] || `Student ${sid.slice(0, 6)}`}</td>
                      {GAMES.map((g) => {
                        const latest = list.find((a) => a.game === g.id);
                        if (!latest) return <td key={g.id} style={{ ...td, color: "#cbd5e1" }}>—</td>;
                        const p = pct(latest); const t = tone(p);
                        return (
                          <td key={g.id} style={td}>
                            <span style={{ background: t.bg, color: t.fg, fontWeight: 800, fontSize: 13, padding: "3px 9px", borderRadius: 999, whiteSpace: "nowrap" }}>
                              {p}%{g.id !== "skill-check" ? ` · L${latest.level}` : ""}
                            </span>
                          </td>
                        );
                      })}
                      <td style={td}>{list.length}</td>
                      <td style={{ ...td, color: "#64748b", whiteSpace: "nowrap" }}>{list[0] ? new Date(list[0].played_at).toLocaleDateString() : "—"}</td>
                    </tr>
                    {isOpen && (
                      <tr>
                        <td colSpan={GAMES.length + 3} style={{ ...td, background: "#f8fafc" }}>
                          {topMissed.length === 0 ? (
                            <span style={{ color: "#94a3b8" }}>{list.length ? "No misses recorded — nice." : "Hasn't played yet."}</span>
                          ) : (
                            <div>
                              <div style={{ fontSize: 12, fontWeight: 800, color: "#64748b", textTransform: "uppercase", letterSpacing: ".04em", marginBottom: 6 }}>Most-missed (30 days)</div>
                              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                                {topMissed.map((m) => (
                                  <span key={`${m.q}=${m.a}`} style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 13, background: "#fff", border: "1px solid #e2e8f0", borderRadius: 8, padding: "4px 9px" }}>
                                    {m.q} = {m.a.replace(/-/g, "−")}{m.n > 1 ? ` ×${m.n}` : ""}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </td>
                      </tr>
                    )}
                  </Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
