"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "../../../../lib/supabase";
import { SiteHeader } from "../../../../components/SiteHeader";
import { Math as Tex } from "../../../../components/Math";
import { QKind, QKIND_LABELS } from "../../../../lib/quiz";
import { exprToTex } from "../../../../lib/mathcheck";
import { chaptersIn, sampleChapterTest, titleFor, isChapterTest, FORM_LABELS, DifficultyCounts, SampleResult } from "../../../../lib/chapterTest";

type BankRow = { id: string; topic: string | null; difficulty: string; kind: QKind; prompt: string; choices: any; answer: any; tolerance: number | null; points: number; feedback: string | null };
type ClassQuiz = { id: string; title: string; test_group_id: string | null };
// While stepping through a multi-form chapter test: each finished form's question ids,
// plus the chapter/settings so the next form's sampling can avoid repeats.
type TestFlow = { chapter: number; counts: DifficultyCounts; minPerTopic: number; totalForms: number; forms: string[][] };

const KINDS: QKind[] = ["multiple_choice", "multiple_select", "true_false", "numeric", "math_expr", "short_answer", "fill_blank", "matching", "ordering"];
const DIFFS = ["easy", "medium", "hard"];

export default function ClassQuizBuilder() {
  const router = useRouter();
  const classId = useParams().id as string;
  const [loading, setLoading] = useState(true);
  const [uid, setUid] = useState<string | null>(null);
  const [cls, setCls] = useState<{ name: string; course_id: string } | null>(null);
  const [rows, setRows] = useState<BankRow[]>([]);
  const [quizzes, setQuizzes] = useState<ClassQuiz[]>([]);
  const [fTopic, setFTopic] = useState("all");
  const [fDiff, setFDiff] = useState("all");
  const [fKind, setFKind] = useState("all");
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [building, setBuilding] = useState(false);
  const [showAll, setShowAll] = useState(true);

  // chapter test generator
  const [genOpen, setGenOpen] = useState(false);
  const [genChapter, setGenChapter] = useState<number | null>(null);
  const [genCounts, setGenCounts] = useState<DifficultyCounts>({ easy: 6, medium: 6, hard: 3 });
  const [genMinPerTopic, setGenMinPerTopic] = useState(1);
  const [genVersions, setGenVersions] = useState(1);
  const [genWarning, setGenWarning] = useState<string | null>(null);
  const [testFlow, setTestFlow] = useState<TestFlow | null>(null);

  async function loadQuizzes() {
    const { data } = await supabase.from("quizzes").select("id, title, test_group_id").eq("class_id", classId).order("created_at", { ascending: false });
    setQuizzes((data ?? []) as ClassQuiz[]);
  }

  useEffect(() => {
    (async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) return router.push("/login");
      setUid(session.user.id);
      const { data: c } = await supabase.from("classes").select("name, course_id, teacher_id").eq("id", classId).single();
      if (!c) return router.push("/classes");
      const { data: me } = await supabase.from("profiles").select("role").eq("id", session.user.id).single();
      if (c.teacher_id !== session.user.id && me?.role !== "admin") return router.push("/classes");
      setCls({ name: c.name, course_id: c.course_id });
      // Fetch ALL bank questions in pages (Supabase caps one request at 1000 rows;
      // the bank exceeds that, so later subjects would be missing without paging).
      const byId = new Map<string, BankRow>();
      const PAGE = 1000;
      for (let from = 0; ; from += PAGE) {
        const { data: bank, error } = await supabase
          .from("bank_questions")
          .select("*")
          .eq("course_id", c.course_id)
          .order("topic")
          .order("difficulty")
          .order("id") // stable tiebreaker so .range() paging can't repeat/skip rows
          .range(from, from + PAGE - 1);
        if (error || !bank || bank.length === 0) break;
        for (const r of bank as BankRow[]) byId.set(r.id, r); // dedupe defensively
        if (bank.length < PAGE) break;
      }
      setRows([...byId.values()]);
      await loadQuizzes();
      setLoading(false);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [classId]);

  const topics = useMemo(() => [...new Set(rows.map((r) => r.topic).filter(Boolean))] as string[], [rows]);
  const chapters = useMemo(() => chaptersIn(rows), [rows]);
  const filtered = rows.filter((r) => (fTopic === "all" || r.topic === fTopic) && (fDiff === "all" || r.difficulty === fDiff) && (fKind === "all" || r.kind === fKind));
  function toggle(id: string) { setSelected((s) => { const n = new Set(s); n.has(id) ? n.delete(id) : n.add(id); return n; }); }
  const allFilteredSelected = filtered.length > 0 && filtered.every((r) => selected.has(r.id));
  function toggleAllFiltered() {
    setSelected((s) => {
      const n = new Set(s);
      if (filtered.every((r) => n.has(r.id))) filtered.forEach((r) => n.delete(r.id));
      else filtered.forEach((r) => n.add(r.id));
      return n;
    });
  }

  async function build(settings: any): Promise<string | null> {
    if (!cls) return null;
    const items = rows.filter((r) => selected.has(r.id));
    const { data: quiz, error } = await supabase.from("quizzes").insert({
      course_id: cls.course_id, class_id: classId, created_by: uid, title: settings.title, published: true,
      show_score: true, allow_backtracking: true, attempts_allowed: settings.attempts,
      time_limit_minutes: settings.timeLimit, passing_score: settings.passing,
      shuffle_questions: settings.shuffleQ, shuffle_choices: settings.shuffleC, show_answers: settings.showAnswers,
      due_date: settings.dueDate ? new Date(settings.dueDate).toISOString() : null,
    }).select("id").single();
    if (error || !quiz) { alert("Could not create quiz: " + (error?.message ?? "")); return null; }
    await supabase.from("quiz_questions").insert(items.map((q, i) => ({
      quiz_id: quiz.id, kind: q.kind, prompt: q.prompt, choices: q.choices ?? null, answer: q.answer ?? null,
      tolerance: q.tolerance ?? null, points: q.points ?? 1, feedback: q.feedback ?? null, position: i, bank_id: q.id,
    })));
    setSelected(new Set());
    await loadQuizzes();
    return quiz.id;
  }

  function warningText(r: SampleResult, chapter: number): string | null {
    const parts: string[] = [];
    if (r.topicsCovered < r.topicsTotal) parts.push(`only ${r.topicsCovered} of ${r.topicsTotal} topics in chapter ${chapter} have questions available`);
    if (r.reusedCount > 0) parts.push(`${r.reusedCount} question${r.reusedCount === 1 ? "" : "s"} reused from an earlier form (the bank is too small to avoid it)`);
    const short = Object.entries(r.shortfall).filter(([, n]) => n);
    if (short.length) parts.push(`short by ${short.map(([d, n]) => `${n} ${d}`).join(", ")}`);
    return parts.length ? parts.join("; ") + "." : null;
  }

  // Generates the first form and enters review mode: `selected` becomes that
  // form's picks so the existing checkbox list below doubles as the review UI.
  function startGenerate() {
    if (genChapter == null) return;
    const result = sampleChapterTest(rows, genChapter, genCounts, { minPerTopic: genMinPerTopic });
    setTestFlow({ chapter: genChapter, counts: genCounts, minPerTopic: genMinPerTopic, totalForms: genVersions, forms: [] });
    setSelected(new Set(result.ids));
    setGenWarning(warningText(result, genChapter));
    setGenOpen(false);
    setFTopic("all"); setFDiff("all"); setFKind("all");
  }

  // Finalizes the form currently under review (using whatever the teacher swapped
  // `selected` to) and either samples the next form or, if that was the last one,
  // opens the publish step.
  function nextForm() {
    if (!testFlow) return;
    const forms = [...testFlow.forms, [...selected]];
    if (forms.length >= testFlow.totalForms) {
      setTestFlow({ ...testFlow, forms });
      setSelected(new Set());
      setGenWarning(null);
      return;
    }
    const usedSoFar = new Set(forms.flat());
    const result = sampleChapterTest(rows, testFlow.chapter, testFlow.counts, { minPerTopic: testFlow.minPerTopic, exclude: usedSoFar });
    setTestFlow({ ...testFlow, forms });
    setSelected(new Set(result.ids));
    setGenWarning(warningText(result, testFlow.chapter));
  }

  function cancelTestFlow() {
    setTestFlow(null);
    setSelected(new Set());
    setGenWarning(null);
  }

  // Called when the publish modal is dismissed (success or cancel) — resets
  // both the review flow and the modal's own open/closed state.
  function finishTestFlow() {
    setBuilding(false);
    setTestFlow(null);
    setSelected(new Set());
    setGenWarning(null);
  }

  // Publishes every reviewed form as its own quiz, all sharing one test_group_id
  // so the list below and deletion treat them as one test.
  async function buildTest(settings: any): Promise<string | null> {
    if (!cls || !testFlow) return null;
    const groupId = crypto.randomUUID();
    const multi = testFlow.forms.length > 1;
    let firstId: string | null = null;
    for (let i = 0; i < testFlow.forms.length; i++) {
      const items = rows.filter((r) => testFlow.forms[i].includes(r.id));
      const title = titleFor(testFlow.chapter, multi ? FORM_LABELS[i] : undefined);
      const { data: quiz, error } = await supabase.from("quizzes").insert({
        course_id: cls.course_id, class_id: classId, created_by: uid, title, published: true,
        test_group_id: groupId, show_score: true, allow_backtracking: true,
        attempts_allowed: settings.attempts, time_limit_minutes: settings.timeLimit, passing_score: settings.passing,
        shuffle_questions: settings.shuffleQ, shuffle_choices: settings.shuffleC, show_answers: settings.showAnswers,
        due_date: settings.dueDate ? new Date(settings.dueDate).toISOString() : null,
      }).select("id").single();
      if (error || !quiz) { alert("Could not create test: " + (error?.message ?? "")); return firstId; }
      await supabase.from("quiz_questions").insert(items.map((q, j) => ({
        quiz_id: quiz.id, kind: q.kind, prompt: q.prompt, choices: q.choices ?? null, answer: q.answer ?? null,
        tolerance: q.tolerance ?? null, points: q.points ?? 1, feedback: q.feedback ?? null, position: j, bank_id: q.id,
      })));
      if (!firstId) firstId = quiz.id;
    }
    // Deliberately leave testFlow/selected set here — BuildTestModal is only
    // rendered while testFlow is truthy, so clearing it now would unmount the
    // modal before it can show its own success screen. finishTestFlow() (wired
    // to the modal's onClose) does the actual reset once the teacher dismisses it.
    await loadQuizzes();
    return firstId;
  }

  async function del(id: string) {
    await supabase.from("quizzes").delete().eq("id", id);
    await loadQuizzes();
  }

  async function delGroup(groupId: string) {
    await supabase.from("quizzes").delete().eq("test_group_id", groupId);
    await loadQuizzes();
  }

  if (loading) return (<main><SiteHeader /><div style={{ padding: 48, color: "#64748b" }}>Loading…</div></main>);

  return (
    <main style={{ minHeight: "100vh" }}>
      <SiteHeader />
      <div style={{ maxWidth: 980, margin: "0 auto", padding: "32px 28px" }}>
        <Link href="/classes" style={{ color: "#64748b", fontWeight: 600, fontSize: 14, textDecoration: "none" }}>← My classes</Link>
        <h1 style={{ fontFamily: "Fraunces, serif", fontSize: 28, fontWeight: 700, margin: "10px 0 4px" }}>Quizzes — {cls?.name}</h1>
        <p style={{ color: "#64748b", margin: "0 0 22px", fontSize: 15 }}>Pick questions from the bank and build a quiz your students will see in this class.</p>

        {/* existing class quizzes — quizzes that share a test_group_id (a chapter test's
            forms) are shown and deleted together instead of as separate rows */}
        <h2 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 10px" }}>Your class quizzes &amp; tests</h2>
        {quizzes.length === 0 ? (
          <div style={{ color: "#64748b", background: "#fff", border: "1px solid #e2e8f0", borderRadius: 12, padding: 18, marginBottom: 26 }}>None yet — select questions below and build one.</div>
        ) : (
          <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 12, overflow: "hidden", marginBottom: 26 }}>
            {groupQuizzes(quizzes).map((g, i) => (
              <div key={g.key} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 16px", borderTop: i ? "1px solid #f1f5f9" : "none" }}>
                <span style={{ fontWeight: 600, display: "flex", gap: 8, alignItems: "center" }}>
                  {isChapterTest(g.title) && <Badge bg="#fef3c7" color="#92400e">Test</Badge>}
                  {g.title}
                  {g.items.length > 1 && <span style={{ color: "#94a3b8", fontWeight: 400, fontSize: 13 }}>({g.items.length} forms)</span>}
                </span>
                <button onClick={() => (g.groupId ? delGroup(g.groupId) : del(g.items[0].id))} style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 8, padding: "6px 12px", fontWeight: 700, fontSize: 13, color: "#dc2626", cursor: "pointer" }}>Delete</button>
              </div>
            ))}
          </div>
        )}

        {/* chapter test generator */}
        <h2 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 10px" }}>Chapter test</h2>
        {testFlow ? (
          <TestFlowBanner
            testFlow={testFlow}
            selectedCount={selected.size}
            warning={genWarning}
            onNext={nextForm}
            onCancel={cancelTestFlow}
          />
        ) : chapters.length === 0 ? (
          <div style={{ color: "#64748b", background: "#fff", border: "1px solid #e2e8f0", borderRadius: 12, padding: 18, marginBottom: 26 }}>No chapters detected yet — topics need a leading number like "1.1 …" for chapter grouping.</div>
        ) : genOpen ? (
          <GeneratorPanel
            chapters={chapters}
            chapter={genChapter}
            setChapter={setGenChapter}
            counts={genCounts}
            setCounts={setGenCounts}
            minPerTopic={genMinPerTopic}
            setMinPerTopic={setGenMinPerTopic}
            versions={genVersions}
            setVersions={setGenVersions}
            onGenerate={startGenerate}
            onCancel={() => setGenOpen(false)}
          />
        ) : (
          <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 12, padding: 18, marginBottom: 26, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
            <p style={{ color: "#64748b", margin: 0, fontSize: 14 }}>Auto-build a test from the bank across a whole chapter, with as many versions as you like.</p>
            <button onClick={() => { setGenChapter(chapters[0]); setGenOpen(true); }} style={{ ...primaryL, flexShrink: 0 }}>Generate chapter test →</button>
          </div>
        )}

        {/* bank picker */}
        <h2 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 10px" }}>Question bank</h2>
        <div style={{ display: "flex", gap: 10, marginBottom: 16, flexWrap: "wrap" }}>
          <Filter label="Topic" value={fTopic} onChange={setFTopic} options={["all", ...topics]} />
          <Filter label="Difficulty" value={fDiff} onChange={setFDiff} options={["all", ...DIFFS]} />
          <Filter label="Type" value={fKind} onChange={setFKind} options={["all", ...KINDS]} labels={QKIND_LABELS} />
          <label style={{ marginLeft: "auto", alignSelf: "center", display: "flex", gap: 7, alignItems: "center", fontSize: 14, fontWeight: 600, color: "#334155", cursor: "pointer" }}>
            <input type="checkbox" checked={showAll} onChange={(e) => setShowAll(e.target.checked)} /> Show full questions &amp; answers
          </label>
          <span style={{ alignSelf: "center", color: "#64748b", fontSize: 14 }}>{filtered.length} of {rows.length}</span>
        </div>

        <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 12 }}>
          <button onClick={toggleAllFiltered} disabled={filtered.length === 0} style={{ background: "#e7f6ec", color: "#1b7a44", border: "1px solid #bfe3cd", borderRadius: 8, padding: "7px 14px", fontWeight: 700, fontSize: 13, cursor: filtered.length === 0 ? "default" : "pointer" }}>
            {allFilteredSelected ? "Deselect all" : `Select all ${filtered.length} shown`}
          </button>
          {selected.size > 0 && <span style={{ color: "#64748b", fontSize: 13 }}>{selected.size} selected</span>}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 8, paddingBottom: 70 }}>
          {filtered.map((r) => (
            <div key={r.id} style={{ background: selected.has(r.id) ? "#f5f3ff" : "#fff", border: `1px solid ${selected.has(r.id) ? "#bfe3cd" : "#e2e8f0"}`, borderRadius: 10, padding: "10px 14px", display: "flex", alignItems: "flex-start", gap: 12 }}>
              <input type="checkbox" checked={selected.has(r.id)} onChange={() => toggle(r.id)} style={{ width: 18, height: 18, cursor: "pointer", flexShrink: 0, marginTop: 3 }} />
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", gap: 8, marginBottom: 3, flexWrap: "wrap", alignItems: "center" }}>
                  <Badge bg="#e7f6ec" color="#1b7a44">{r.difficulty}</Badge>
                  <Badge bg="#ecfdf5" color="#0d9488">{QKIND_LABELS[r.kind] ?? r.kind}</Badge>
                  {r.topic && <span style={{ fontSize: 12, color: "#94a3b8" }}>{r.topic}</span>}
                </div>
                <div style={{ fontSize: 14, lineHeight: 1.5 }}><PromptText prompt={r.prompt} /></div>
                {showAll && <QuestionDetail r={r} />}
              </div>
            </div>
          ))}
        </div>
      </div>

      {!testFlow && selected.size > 0 && !building && (
        <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, background: "#0f172a", color: "#fff", padding: "14px 28px", display: "flex", justifyContent: "center", alignItems: "center", gap: 16, zIndex: 90 }}>
          <span style={{ fontWeight: 700 }}>{selected.size} selected</span>
          <button onClick={() => setSelected(new Set())} style={{ background: "transparent", color: "#cbd5e1", border: "1px solid #334155", borderRadius: 8, padding: "8px 14px", fontWeight: 700, cursor: "pointer" }}>Clear</button>
          <button onClick={() => setBuilding(true)} style={{ background: "#1b7a44", color: "#fff", border: "none", borderRadius: 8, padding: "9px 18px", fontWeight: 700, cursor: "pointer" }}>Build quiz →</button>
        </div>
      )}
      {testFlow && testFlow.forms.length >= testFlow.totalForms && !building && (
        <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, background: "#0f172a", color: "#fff", padding: "14px 28px", display: "flex", justifyContent: "center", alignItems: "center", gap: 16, zIndex: 90 }}>
          <span style={{ fontWeight: 700 }}>{testFlow.forms.length} form{testFlow.forms.length !== 1 ? "s" : ""} ready — Chapter {testFlow.chapter}</span>
          <button onClick={cancelTestFlow} style={{ background: "transparent", color: "#cbd5e1", border: "1px solid #334155", borderRadius: 8, padding: "8px 14px", fontWeight: 700, cursor: "pointer" }}>Discard</button>
          <button onClick={() => setBuilding(true)} style={{ background: "#1b7a44", color: "#fff", border: "none", borderRadius: 8, padding: "9px 18px", fontWeight: 700, cursor: "pointer" }}>Configure &amp; publish test →</button>
        </div>
      )}
      {building && !testFlow && <BuildModal count={selected.size} topics={topics} defaultTopic={fTopic !== "all" ? fTopic : ""} onClose={() => setBuilding(false)} onCreate={build} />}
      {building && testFlow && <BuildTestModal chapter={testFlow.chapter} formCount={testFlow.forms.length} onClose={finishTestFlow} onCreate={buildTest} />}
    </main>
  );
}

function BuildModal({ count, topics, defaultTopic, onClose, onCreate }: { count: number; topics: string[]; defaultTopic: string; onClose: () => void; onCreate: (s: any) => Promise<string | null> }) {
  const [s, setS] = useState({ topic: defaultTopic, title: "Quiz", attempts: 3 as number | null, timeLimit: 10 as number | null, passing: 80 as number | null, shuffleQ: true, shuffleC: true, showAnswers: "after_submit", dueDate: "" });
  const [saving, setSaving] = useState(false); const [done, setDone] = useState(false);
  const set = (f: any) => setS({ ...s, ...f });
  const topicCode = (s.topic.match(/\d+\.\d+/) ?? [""])[0];
  const baseTitle = s.title.replace(/^\s*\d+\.\d+\s*[—\-:]*\s*/, "").trim() || "Quiz";
  const finalTitle = topicCode ? `${topicCode} — ${baseTitle}` : (s.title.trim() || "Class Quiz");
  async function go() { setSaving(true); const id = await onCreate({ ...s, title: finalTitle }); setSaving(false); if (id) setDone(true); }
  return (
    <div onClick={onClose} style={{ position: "fixed", inset: 0, background: "rgba(15,23,42,0.45)", display: "flex", justifyContent: "center", alignItems: "flex-start", padding: "40px 20px", overflowY: "auto", zIndex: 100 }}>
      <div onClick={(e) => e.stopPropagation()} style={{ background: "#fff", borderRadius: 16, maxWidth: 520, width: "100%", padding: 26 }}>
        {done ? (
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 40, marginBottom: 8 }}>✅</div>
            <h2 style={{ fontFamily: "Fraunces, serif", fontSize: 22, fontWeight: 700, margin: "0 0 8px" }}>Quiz published to your class!</h2>
            <p style={{ color: "#64748b", fontSize: 14, margin: "0 0 18px" }}>{count} questions · your students can take it now.</p>
            <button onClick={onClose} style={{ background: "#1b7a44", color: "#fff", border: "none", borderRadius: 9, padding: "10px 20px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>Done</button>
          </div>
        ) : (
          <>
            <h2 style={{ fontFamily: "Fraunces, serif", fontSize: 22, fontWeight: 700, margin: "0 0 4px" }}>Build a quiz</h2>
            <p style={{ color: "#64748b", fontSize: 14, margin: "0 0 18px" }}>From {count} selected question{count !== 1 ? "s" : ""}.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <div>
                <label style={lbl}>Topic (places the quiz in order)</label>
                <select value={s.topic} onChange={(e) => set({ topic: e.target.value })} style={field}>
                  <option value="">— none (won't auto-sort) —</option>
                  {topics.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
              <div><label style={lbl}>Quiz name</label><input value={s.title} onChange={(e) => set({ title: e.target.value })} style={field} /></div>
              <div style={{ background: "#f6f8fc", border: "1px solid #e2e8f0", borderRadius: 8, padding: "8px 12px", fontSize: 13, color: "#475569" }}>
                Saved as <strong style={{ color: "#0f172a" }}>{finalTitle}</strong>{topicCode ? ` — appears right after the ${topicCode} content.` : " — appears at the end (no topic chosen)."}
              </div>
              <div style={{ display: "flex", gap: 10 }}>
                <div style={{ flex: 1 }}><label style={lbl}>Attempts (blank = unlimited)</label><input type="number" value={s.attempts ?? ""} onChange={(e) => set({ attempts: e.target.value === "" ? null : Number(e.target.value) })} style={field} /></div>
                <div style={{ flex: 1 }}><label style={lbl}>Time limit (min)</label><input type="number" value={s.timeLimit ?? ""} onChange={(e) => set({ timeLimit: e.target.value === "" ? null : Number(e.target.value) })} style={field} /></div>
              </div>
              <div style={{ display: "flex", gap: 10 }}>
                <div style={{ flex: 1 }}><label style={lbl}>Passing score (%)</label><input type="number" value={s.passing ?? ""} onChange={(e) => set({ passing: e.target.value === "" ? null : Number(e.target.value) })} style={field} /></div>
                <div style={{ flex: 1 }}><label style={lbl}>Show answers</label><select value={s.showAnswers} onChange={(e) => set({ showAnswers: e.target.value })} style={field}><option value="after_submit">After submit</option><option value="after_close">After close</option><option value="never">Never</option></select></div>
              </div>
              <div><label style={lbl}>Due date (optional)</label><input type="date" value={s.dueDate} onChange={(e) => set({ dueDate: e.target.value })} style={field} /></div>
              <label style={{ display: "flex", gap: 7, alignItems: "center", fontSize: 14, fontWeight: 600, color: "#334155" }}><input type="checkbox" checked={s.shuffleQ} onChange={(e) => set({ shuffleQ: e.target.checked })} /> Shuffle questions each attempt</label>
              <label style={{ display: "flex", gap: 7, alignItems: "center", fontSize: 14, fontWeight: 600, color: "#334155" }}><input type="checkbox" checked={s.shuffleC} onChange={(e) => set({ shuffleC: e.target.checked })} /> Shuffle answer choices</label>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end", gap: 10, marginTop: 20 }}>
              <button onClick={onClose} style={{ background: "#fff", border: "1px solid #cbd5e1", borderRadius: 9, padding: "10px 18px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>Cancel</button>
              <button onClick={go} disabled={saving || !s.title} style={{ background: "#1b7a44", color: "#fff", border: "none", borderRadius: 9, padding: "10px 20px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>{saving ? "Publishing…" : "Publish to class"}</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// Groups quizzes that share a test_group_id (a chapter test's forms) into one
// row; ungrouped quizzes each get their own row (groupId null).
function groupQuizzes(quizzes: ClassQuiz[]): { key: string; groupId: string | null; title: string; items: ClassQuiz[] }[] {
  const byGroup = new Map<string, ClassQuiz[]>();
  const solo: ClassQuiz[] = [];
  for (const q of quizzes) {
    if (q.test_group_id) {
      const list = byGroup.get(q.test_group_id) ?? [];
      list.push(q);
      byGroup.set(q.test_group_id, list);
    } else solo.push(q);
  }
  const groups = [...byGroup.entries()].map(([groupId, items]) => ({
    key: groupId,
    groupId,
    title: items[0].title.replace(/\s*—\s*Form\s+[A-Z]$/i, ""),
    items,
  }));
  const soloRows = solo.map((q) => ({ key: q.id, groupId: null, title: q.title, items: [q] }));
  return [...groups, ...soloRows];
}

// Setup form for the chapter-test generator: chapter, per-difficulty counts,
// a per-topic minimum for coverage, and how many non-identical forms to build.
function GeneratorPanel({ chapters, chapter, setChapter, counts, setCounts, minPerTopic, setMinPerTopic, versions, setVersions, onGenerate, onCancel }: {
  chapters: number[]; chapter: number | null; setChapter: (c: number) => void;
  counts: DifficultyCounts; setCounts: (c: DifficultyCounts) => void;
  minPerTopic: number; setMinPerTopic: (n: number) => void;
  versions: number; setVersions: (n: number) => void;
  onGenerate: () => void; onCancel: () => void;
}) {
  const setCount = (d: keyof DifficultyCounts, v: number) => setCounts({ ...counts, [d]: v });
  const total = counts.easy + counts.medium + counts.hard;
  return (
    <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 12, padding: 20, marginBottom: 26, display: "flex", flexDirection: "column", gap: 12 }}>
      <div>
        <label style={lbl}>Chapter</label>
        <select value={chapter ?? ""} onChange={(e) => setChapter(Number(e.target.value))} style={field}>
          {chapters.map((c) => <option key={c} value={c}>Chapter {c}</option>)}
        </select>
      </div>
      <div style={{ display: "flex", gap: 10 }}>
        {(["easy", "medium", "hard"] as const).map((d) => (
          <div key={d} style={{ flex: 1 }}>
            <label style={lbl}>{d[0].toUpperCase() + d.slice(1)} questions</label>
            <input type="number" min={0} value={counts[d]} onChange={(e) => setCount(d, Math.max(0, Number(e.target.value)))} style={field} />
          </div>
        ))}
      </div>
      <div style={{ display: "flex", gap: 10 }}>
        <div style={{ flex: 1 }}>
          <label style={lbl}>Min. questions per topic (coverage)</label>
          <input type="number" min={0} value={minPerTopic} onChange={(e) => setMinPerTopic(Math.max(0, Number(e.target.value)))} style={field} />
        </div>
        <div style={{ flex: 1 }}>
          <label style={lbl}>Number of versions (Form A/B/…)</label>
          <input type="number" min={1} max={FORM_LABELS.length} value={versions} onChange={(e) => setVersions(Math.min(FORM_LABELS.length, Math.max(1, Number(e.target.value))))} style={field} />
        </div>
      </div>
      <p style={{ color: "#64748b", fontSize: 13, margin: 0 }}>Targets {total} question{total !== 1 ? "s" : ""} per form from the bank; you'll review and can swap any of them before publishing.</p>
      <div style={{ display: "flex", justifyContent: "flex-end", gap: 10 }}>
        <button onClick={onCancel} style={{ background: "#fff", border: "1px solid #cbd5e1", borderRadius: 9, padding: "9px 16px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>Cancel</button>
        <button onClick={onGenerate} disabled={chapter == null || total === 0} style={{ background: "#1b7a44", color: "#fff", border: "none", borderRadius: 9, padding: "9px 18px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>Generate →</button>
      </div>
    </div>
  );
}

// Shown in place of the generator panel while stepping through a multi-form
// test's review — the checkbox bank list below is that form's review UI.
function TestFlowBanner({ testFlow, selectedCount, warning, onNext, onCancel }: {
  testFlow: TestFlow; selectedCount: number; warning: string | null; onNext: () => void; onCancel: () => void;
}) {
  const reviewing = testFlow.forms.length; // 0-indexed form currently under review
  const done = reviewing >= testFlow.totalForms;
  return (
    <div style={{ background: "#eef2ff", border: "1px solid #c7d2fe", borderRadius: 12, padding: "14px 18px", marginBottom: 26 }}>
      {!done ? (
        <>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
            <strong style={{ color: "#312e81" }}>
              Reviewing Form {FORM_LABELS[reviewing]} of {testFlow.totalForms} — Chapter {testFlow.chapter} ({selectedCount} question{selectedCount !== 1 ? "s" : ""})
            </strong>
            <div style={{ display: "flex", gap: 8 }}>
              <button onClick={onCancel} style={{ background: "#fff", border: "1px solid #c7d2fe", borderRadius: 8, padding: "7px 14px", fontWeight: 700, fontSize: 13, cursor: "pointer", color: "#4338ca" }}>Cancel test</button>
              <button onClick={onNext} style={{ background: "#4338ca", color: "#fff", border: "none", borderRadius: 8, padding: "7px 16px", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
                {reviewing + 1 >= testFlow.totalForms ? "Finish review →" : "Looks good, next form →"}
              </button>
            </div>
          </div>
          <p style={{ margin: "8px 0 0", fontSize: 13, color: "#4338ca" }}>Tick/untick questions below to swap them, then continue.</p>
        </>
      ) : (
        <strong style={{ color: "#312e81" }}>{testFlow.forms.length} form{testFlow.forms.length !== 1 ? "s" : ""} reviewed — configure and publish below.</strong>
      )}
      {warning && <p style={{ margin: "8px 0 0", fontSize: 13, color: "#92400e", background: "#fef3c7", borderRadius: 8, padding: "6px 10px" }}>⚠ {warning}</p>}
    </div>
  );
}

// Configure-and-publish modal for a fully-reviewed chapter test (1 or more forms).
function BuildTestModal({ chapter, formCount, onClose, onCreate }: { chapter: number; formCount: number; onClose: () => void; onCreate: (s: any) => Promise<string | null> }) {
  const [s, setS] = useState({ attempts: 1 as number | null, timeLimit: 45 as number | null, passing: 60 as number | null, shuffleQ: true, shuffleC: true, showAnswers: "after_close", dueDate: "" });
  const [saving, setSaving] = useState(false); const [done, setDone] = useState(false);
  const set = (f: any) => setS({ ...s, ...f });
  async function go() { setSaving(true); const id = await onCreate(s); setSaving(false); if (id) setDone(true); }
  return (
    <div onClick={onClose} style={{ position: "fixed", inset: 0, background: "rgba(15,23,42,0.45)", display: "flex", justifyContent: "center", alignItems: "flex-start", padding: "40px 20px", overflowY: "auto", zIndex: 100 }}>
      <div onClick={(e) => e.stopPropagation()} style={{ background: "#fff", borderRadius: 16, maxWidth: 520, width: "100%", padding: 26 }}>
        {done ? (
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 40, marginBottom: 8 }}>✅</div>
            <h2 style={{ fontFamily: "Fraunces, serif", fontSize: 22, fontWeight: 700, margin: "0 0 8px" }}>Chapter {chapter} test published!</h2>
            <p style={{ color: "#64748b", fontSize: 14, margin: "0 0 18px" }}>{formCount} form{formCount !== 1 ? "s" : ""} · your students can take it now.</p>
            <button onClick={onClose} style={{ background: "#1b7a44", color: "#fff", border: "none", borderRadius: 9, padding: "10px 20px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>Done</button>
          </div>
        ) : (
          <>
            <h2 style={{ fontFamily: "Fraunces, serif", fontSize: 22, fontWeight: 700, margin: "0 0 4px" }}>Publish Chapter {chapter} test</h2>
            <p style={{ color: "#64748b", fontSize: 14, margin: "0 0 18px" }}>{formCount} form{formCount !== 1 ? "s" : ""}, applied to every form.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <div style={{ display: "flex", gap: 10 }}>
                <div style={{ flex: 1 }}><label style={lbl}>Attempts (blank = unlimited)</label><input type="number" value={s.attempts ?? ""} onChange={(e) => set({ attempts: e.target.value === "" ? null : Number(e.target.value) })} style={field} /></div>
                <div style={{ flex: 1 }}><label style={lbl}>Time limit (min)</label><input type="number" value={s.timeLimit ?? ""} onChange={(e) => set({ timeLimit: e.target.value === "" ? null : Number(e.target.value) })} style={field} /></div>
              </div>
              <div style={{ display: "flex", gap: 10 }}>
                <div style={{ flex: 1 }}><label style={lbl}>Passing score (%)</label><input type="number" value={s.passing ?? ""} onChange={(e) => set({ passing: e.target.value === "" ? null : Number(e.target.value) })} style={field} /></div>
                <div style={{ flex: 1 }}><label style={lbl}>Show answers</label><select value={s.showAnswers} onChange={(e) => set({ showAnswers: e.target.value })} style={field}><option value="after_submit">After submit</option><option value="after_close">After close</option><option value="never">Never</option></select></div>
              </div>
              <div><label style={lbl}>Due date (optional)</label><input type="date" value={s.dueDate} onChange={(e) => set({ dueDate: e.target.value })} style={field} /></div>
              <label style={{ display: "flex", gap: 7, alignItems: "center", fontSize: 14, fontWeight: 600, color: "#334155" }}><input type="checkbox" checked={s.shuffleQ} onChange={(e) => set({ shuffleQ: e.target.checked })} /> Shuffle questions each attempt</label>
              <label style={{ display: "flex", gap: 7, alignItems: "center", fontSize: 14, fontWeight: 600, color: "#334155" }}><input type="checkbox" checked={s.shuffleC} onChange={(e) => set({ shuffleC: e.target.checked })} /> Shuffle answer choices</label>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end", gap: 10, marginTop: 20 }}>
              <button onClick={onClose} style={{ background: "#fff", border: "1px solid #cbd5e1", borderRadius: 9, padding: "10px 18px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>Cancel</button>
              <button onClick={go} disabled={saving} style={{ background: "#1b7a44", color: "#fff", border: "none", borderRadius: 9, padding: "10px 20px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>{saving ? "Publishing…" : `Publish ${formCount > 1 ? "all forms" : "test"}`}</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function PromptText({ prompt }: { prompt: string }) {
  if (!prompt) return null;
  const parts = prompt.split(/(\$[^$]+\$)/g);
  return <span>{parts.map((p, i) => (p.startsWith("$") && p.endsWith("$") && p.length > 1 ? <Tex key={i} expr={p.slice(1, -1)} /> : <span key={i}>{p}</span>))}</span>;
}
function Ans({ children }: { children: React.ReactNode }) {
  return <div style={{ fontSize: 13, color: "#0d9488", fontWeight: 700, marginTop: 2 }}>{children}</div>;
}
// Shows the complete question — choices (correct ones marked), the answer for
// other types, and any feedback — so a teacher can read it fully while picking.
function QuestionDetail({ r }: { r: BankRow }) {
  const isChoice = r.kind === "multiple_choice" || r.kind === "multiple_select";
  const ansArr: any[] = Array.isArray(r.answer) ? r.answer : [r.answer];
  return (
    <div style={{ marginTop: 8, borderTop: "1px dashed #e2e8f0", paddingTop: 8 }}>
      {isChoice && Array.isArray(r.choices) && (
        <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
          {r.choices.map((c: any) => {
            const correct = ansArr.includes(c.id);
            return (
              <div key={c.id} style={{ fontSize: 13, display: "flex", gap: 6, color: correct ? "#0d9488" : "#475569", fontWeight: correct ? 700 : 400 }}>
                <span style={{ flexShrink: 0 }}>{correct ? "✓" : "○"}</span>
                <span><PromptText prompt={c.text} /></span>
              </div>
            );
          })}
        </div>
      )}
      {r.kind === "true_false" && <Ans>Answer: {String(r.answer) === "true" ? "True" : "False"}</Ans>}
      {r.kind === "numeric" && <Ans>Answer: {String(r.answer)}{r.tolerance ? ` (± ${r.tolerance})` : ""}</Ans>}
      {r.kind === "math_expr" && <Ans>Answer: <Tex expr={exprToTex(String(r.answer ?? ""))} /></Ans>}
      {(r.kind === "fill_blank" || r.kind === "short_answer") && <Ans>Accepted: {ansArr.map(String).join("   |   ")}</Ans>}
      {(r.kind === "matching" || r.kind === "ordering") && <Ans>Answer: {JSON.stringify(r.answer)}</Ans>}
      {r.feedback && <div style={{ fontSize: 12, color: "#94a3b8", marginTop: 6 }}>💡 <PromptText prompt={r.feedback} /></div>}
    </div>
  );
}
function Filter({ label, value, onChange, options, labels }: { label: string; value: string; onChange: (v: string) => void; options: string[]; labels?: Record<string, string> }) {
  return (<div><label style={{ ...lbl, marginBottom: 3 }}>{label}</label><select value={value} onChange={(e) => onChange(e.target.value)} style={field}>{options.map((o) => <option key={o} value={o}>{o === "all" ? "All" : labels?.[o] ?? o}</option>)}</select></div>);
}
function Badge({ children, bg, color }: { children: React.ReactNode; bg: string; color: string }) {
  return <span style={{ fontSize: 12, fontWeight: 700, color, background: bg, padding: "2px 8px", borderRadius: 999, textTransform: "capitalize" }}>{children}</span>;
}
const field: React.CSSProperties = { padding: "9px 12px", borderRadius: 8, border: "1px solid #cbd5e1", fontSize: 14, fontFamily: "inherit", outline: "none", boxSizing: "border-box", background: "#fff" };
const lbl: React.CSSProperties = { fontSize: 12, fontWeight: 700, color: "#475569", display: "block", marginBottom: 4 };
const primaryL: React.CSSProperties = { background: "#1b7a44", color: "#fff", border: "none", borderRadius: 9, padding: "10px 18px", fontWeight: 700, fontSize: 14, cursor: "pointer" };
