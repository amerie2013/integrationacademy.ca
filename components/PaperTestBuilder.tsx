"use client";

// Printable chapter test builder (used by app/tests/paper). Given the courses a
// teacher can use and a loader for a course's bank, it draws a test from the bank
// (Part A multiple choice, Part B short answer, Part C problem solving), lets the
// teacher review/swap questions, and prints the test with writing space plus a
// separate answer key ("Save as PDF" in the print dialog). Nothing is written to
// the database; drafts are kept in this browser's localStorage.

import { useEffect, useMemo, useState, type CSSProperties } from "react";
import Link from "next/link";
import { PromptText } from "./QuestionView";
import { SiteHeader } from "./SiteHeader";
import { chaptersIn } from "../lib/chapterTest";
import { DEFAULT_SECTIONS, buildForms, swapCandidate, topicsOfChapter, spaceFor, markOf, sectionMarks, type PaperForm, type PaperRow, type SectionKey, type SectionSpec } from "../lib/paperTest";

export type CourseOpt = { id: string; code: string; title: string };
type Settings = { title: string; school: string; teacher: string; minutes: number; instructions: string; formCount: number; showChart: boolean };
type Saved = { chapter: number; topics: string[]; sections: SectionSpec[]; settings: Settings; forms: PaperForm[] };

const LETTERS = "abcdefghij";

export function PaperTestBuilder({ courses, initialCourseId, loadRows, className = "", showBankLink = true }: {
  courses: CourseOpt[];
  initialCourseId: string | null;
  loadRows: (courseId: string) => Promise<PaperRow[]>;
  className?: string;
  showBankLink?: boolean;
}) {
  const [courseId, setCourseId] = useState<string | null>(null);
  const [rows, setRows] = useState<PaperRow[]>([]);
  const [chapter, setChapter] = useState<number | null>(null);
  const [topics, setTopics] = useState<string[]>([]);
  const [sections, setSections] = useState<SectionSpec[]>(DEFAULT_SECTIONS);
  const [settings, setSettings] = useState<Settings>({ title: "", school: "", teacher: "", minutes: 75, instructions: "Answer all questions. Calculators are permitted. Show your work for Parts B and C.", formCount: 2, showChart: true });
  const [forms, setForms] = useState<PaperForm[]>([]);
  const [warnings, setWarnings] = useState<string[]>([]);
  const [printing, setPrinting] = useState<{ form: number | "all"; key: boolean } | null>(null);
  const [swapNote, setSwapNote] = useState<string | null>(null);

  const course = courses.find((c) => c.id === courseId) ?? null;
  const byId = useMemo(() => new Map(rows.map((r) => [r.id, r])), [rows]);
  const chapters = useMemo(() => chaptersIn(rows), [rows]);
  const chapterTopics = useMemo(() => (chapter == null ? [] : topicsOfChapter(rows, chapter)), [rows, chapter]);
  const storeKey = courseId && chapter != null ? `paperTest:${courseId}:${chapter}` : null;

  useEffect(() => {
    if (initialCourseId) pickCourse(initialCourseId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialCourseId]);

  async function pickCourse(cid: string) {
    setCourseId(cid);
    setForms([]);
    setChapter(null);
    setRows(await loadRows(cid));
  }

  // Choosing a chapter restores this browser's saved draft for it, or starts fresh with every topic.
  function chooseChapter(c: number | null) {
    setChapter(c);
    setWarnings([]);
    if (c == null || !courseId) { setForms([]); return; }
    try {
      const raw = localStorage.getItem(`paperTest:${courseId}:${c}`);
      if (raw) {
        const saved = JSON.parse(raw) as Saved;
        setTopics(saved.topics); setSections(saved.sections); setSettings(saved.settings);
        setForms(saved.forms.filter((f) => Object.values(f.sections).flat().every((id) => byId.has(id))));
        return;
      }
    } catch { /* ignore a corrupt draft */ }
    setTopics(topicsOfChapter(rows, c));
    setSections(DEFAULT_SECTIONS);
    setSettings((st) => ({ ...st, title: `Chapter ${c} Test` }));
    setForms([]);
  }

  useEffect(() => {
    if (!storeKey || chapter == null) return;
    try { localStorage.setItem(storeKey, JSON.stringify({ chapter, topics, sections, settings, forms } satisfies Saved)); } catch { /* ignore */ }
  }, [storeKey, chapter, topics, sections, settings, forms]);

  // Esc closes the print preview
  useEffect(() => {
    if (!printing) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setPrinting(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [printing]);

  function generate() {
    if (chapter == null) return;
    const { forms: f, warnings: w } = buildForms(rows, topics, sections, settings.formCount);
    setForms(f);
    setWarnings(w);
  }

  function swap(fi: number, key: SectionKey, qi: number) {
    const spec = sections.find((s) => s.key === key)!;
    const form = forms[fi];
    const cur = byId.get(form.sections[key][qi]);
    if (!cur) return;
    const onForm = new Set(Object.values(form.sections).flat());
    const used = new Set(forms.flatMap((f) => Object.values(f.sections).flat()));
    const alt = swapCandidate(rows, cur, spec, onForm, used);
    if (!alt) { setSwapNote(`No other ${key === "C" ? "problem-solving" : "matching"} question for ${cur.topic} in the bank.`); return; }
    setSwapNote(null);
    setForms((fs) => fs.map((f, i) => (i !== fi ? f : { ...f, sections: { ...f.sections, [key]: f.sections[key].map((id, j) => (j === qi ? alt.id : id)) } })));
  }
  function remove(fi: number, key: SectionKey, qi: number) {
    setForms((fs) => fs.map((f, i) => (i !== fi ? f : { ...f, sections: { ...f.sections, [key]: f.sections[key].filter((_, j) => j !== qi) } })));
  }
  function move(fi: number, key: SectionKey, qi: number, d: -1 | 1) {
    setForms((fs) => fs.map((f, i) => {
      if (i !== fi) return f;
      const a = [...f.sections[key]];
      const j = qi + d;
      if (j < 0 || j >= a.length) return f;
      [a[qi], a[j]] = [a[j], a[qi]];
      return { ...f, sections: { ...f.sections, [key]: a } };
    }));
  }

  const available = (spec: SectionSpec) => rows.filter((r) => spec.kinds.includes(r.kind) && r.topic && topics.includes(r.topic)).length;
  const totalMarks = (f: PaperForm) => sections.reduce((s, sp) => s + sectionMarks(sp, f.sections[sp.key], byId), 0);

  return (
    <>
      <style>{PRINT_CSS}</style>
      <div className="paper-screen">
        <Shell>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 12, flexWrap: "wrap", marginBottom: 18 }}>
            <div>
              <h1 style={{ fontFamily: "Fraunces, serif", fontSize: 32, margin: 0 }}>Printable chapter test</h1>
              <p style={{ color: "#64748b", margin: "6px 0 0" }}>Build a paper test from the question bank, review it, then print it — or choose “Save as PDF” in the print dialog. Each form prints with writing space; the answer key prints separately.</p>
            </div>
            {course && showBankLink && <Link href={`/teacher/bank?course=${course.id}`} style={{ color: "#1b7a44", fontWeight: 700, fontSize: 14 }}>Open question bank →</Link>}
          </div>

          <Card>
            <Row>
              <Field label="Course">
                <select value={courseId ?? ""} onChange={(e) => e.target.value && pickCourse(e.target.value)} style={input}>
                  <option value="">Choose a course…</option>
                  {courses.map((c) => <option key={c.id} value={c.id}>{c.code} — {c.title}</option>)}
                </select>
              </Field>
              <Field label="Chapter">
                <select value={chapter ?? ""} onChange={(e) => chooseChapter(e.target.value ? Number(e.target.value) : null)} style={input} disabled={!chapters.length}>
                  <option value="">Choose…</option>
                  {chapters.map((c) => <option key={c} value={c}>Chapter {c}</option>)}
                </select>
              </Field>
              <Field label="Versions (forms)">
                <select value={settings.formCount} onChange={(e) => setSettings({ ...settings, formCount: Number(e.target.value) })} style={input}>
                  {[1, 2, 3, 4].map((n) => <option key={n} value={n}>{n} — Form{n > 1 ? `s A–${"ABCD"[n - 1]}` : " A"}</option>)}
                </select>
              </Field>
            </Row>
            {courseId && !chapters.length && <p style={{ color: "#b45309" }}>This course has no bank questions with chapter-numbered topics yet.</p>}

            {chapter != null && (
              <>
                <h3 style={h3}>Topics to include</h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {chapterTopics.map((t) => (
                    <label key={t} style={{ display: "flex", gap: 6, alignItems: "center", border: "1px solid #e2e8f0", borderRadius: 999, padding: "5px 12px", fontSize: 13.5, background: topics.includes(t) ? "#e7f6ec" : "#fff", cursor: "pointer" }}>
                      <input type="checkbox" checked={topics.includes(t)} onChange={(e) => setTopics(e.target.checked ? [...topics, t] : topics.filter((x) => x !== t))} />
                      {t}
                    </label>
                  ))}
                </div>

                <h3 style={h3}>Sections</h3>
                <div style={{ display: "grid", gap: 10 }}>
                  {sections.map((sp, i) => (
                    <div key={sp.key} style={{ display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap", border: "1px solid #e2e8f0", borderRadius: 10, padding: "10px 14px" }}>
                      <div style={{ flex: "1 1 260px" }}>
                        <strong>{sp.title}</strong>
                        <div style={{ fontSize: 12.5, color: "#64748b" }}>{sp.category} · {available(sp)} question{available(sp) === 1 ? "" : "s"} in the bank for these topics</div>
                      </div>
                      <label style={small}>Questions <input type="number" min={0} max={40} value={sp.count} onChange={(e) => setSections(sections.map((x, j) => (j === i ? { ...x, count: Math.max(0, Number(e.target.value)) } : x)))} style={{ ...input, width: 70 }} /></label>
                      {sp.ownPoints
                        ? <span style={{ ...small, fontWeight: 500, maxWidth: 230 }}>Marks: each problem’s own marking guide (usually 3–4)</span>
                        : <label style={small}>Marks each <input type="number" min={1} max={10} value={sp.marks} onChange={(e) => setSections(sections.map((x, j) => (j === i ? { ...x, marks: Math.max(1, Number(e.target.value)) } : x)))} style={{ ...input, width: 70 }} /></label>}
                      {!sp.ownPoints && <span style={{ fontWeight: 700, color: "#1b7a44", minWidth: 70 }}>= {sp.count * sp.marks} marks</span>}
                    </div>
                  ))}
                </div>

                <h3 style={h3}>Test header</h3>
                <Row>
                  <Field label="Title"><input value={settings.title} onChange={(e) => setSettings({ ...settings, title: e.target.value })} style={input} /></Field>
                  <Field label="School (optional)"><input value={settings.school} onChange={(e) => setSettings({ ...settings, school: e.target.value })} style={input} /></Field>
                  <Field label="Teacher (optional)"><input value={settings.teacher} onChange={(e) => setSettings({ ...settings, teacher: e.target.value })} style={input} /></Field>
                  <Field label="Time (minutes)"><input type="number" min={10} max={240} value={settings.minutes} onChange={(e) => setSettings({ ...settings, minutes: Number(e.target.value) })} style={{ ...input, width: 100 }} /></Field>
                </Row>
                <Field label="Instructions"><textarea value={settings.instructions} onChange={(e) => setSettings({ ...settings, instructions: e.target.value })} style={{ ...input, minHeight: 60, width: "100%" }} /></Field>
                <label style={{ ...small, marginTop: 10 }}><input type="checkbox" checked={settings.showChart} onChange={(e) => setSettings({ ...settings, showChart: e.target.checked })} /> Print the achievement-category mark box (K/U, Application, Thinking &amp; Communication)</label>

                <div style={{ display: "flex", gap: 10, marginTop: 18, flexWrap: "wrap" }}>
                  <button onClick={generate} style={btn(true)} disabled={!topics.length}>{forms.length ? "Regenerate all forms" : "Generate test"}</button>
                  {forms.length > 0 && <span style={{ alignSelf: "center", color: "#64748b", fontSize: 14 }}>Your draft is saved in this browser.</span>}
                </div>
                {warnings.map((w) => <p key={w} style={{ color: "#b45309", margin: "8px 0 0", fontSize: 14 }}>{w}</p>)}
              </>
            )}
          </Card>

          {forms.length > 0 && (
            <>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap", margin: "22px 0 10px" }}>
                <button onClick={() => setPrinting({ form: "all", key: false })} style={btn(true)}>Preview &amp; print — all forms</button>
                <button onClick={() => setPrinting({ form: "all", key: true })} style={btn(false)}>Preview &amp; print — all answer keys</button>
              </div>
              {swapNote && <p style={{ color: "#b45309" }}>{swapNote}</p>}
              {forms.map((f, fi) => (
                <Card key={f.label}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10 }}>
                    <h2 style={{ margin: 0, fontSize: 22 }}>Form {f.label} <span style={{ color: "#64748b", fontWeight: 500, fontSize: 15 }}>· {Object.values(f.sections).flat().length} questions · {totalMarks(f)} marks</span></h2>
                    <div style={{ display: "flex", gap: 8 }}>
                      <button onClick={() => setPrinting({ form: fi, key: false })} style={btn(false)}>Preview test</button>
                      <button onClick={() => setPrinting({ form: fi, key: true })} style={btn(false)}>Preview answer key</button>
                    </div>
                  </div>
                  {sections.filter((sp) => f.sections[sp.key].length).map((sp) => (
                    <div key={sp.key} style={{ marginTop: 14 }}>
                      <h3 style={{ ...h3, marginTop: 0 }}>{sp.title} <span style={{ color: "#64748b", fontWeight: 500, fontSize: 13 }}>({sectionMarks(sp, f.sections[sp.key], byId)} marks{sp.ownPoints ? "" : `, ${sp.marks} each`})</span></h3>
                      <ol style={{ margin: 0, paddingLeft: 0, listStyle: "none", display: "grid", gap: 6 }}>
                        {f.sections[sp.key].map((id, qi) => {
                          const r = byId.get(id);
                          if (!r) return null;
                          return (
                            <li key={id} style={{ display: "flex", gap: 10, alignItems: "flex-start", border: "1px solid #eef2f7", borderRadius: 9, padding: "8px 10px" }}>
                              <span style={{ fontWeight: 800, minWidth: 26 }}>{qi + 1}.</span>
                              <div style={{ flex: 1, fontSize: 14.5 }}>
                                <PromptText prompt={r.prompt} />
                                <div style={{ fontSize: 12, color: "#64748b", marginTop: 3 }}>{r.topic} · {r.difficulty} · {r.kind.replace("_", " ")}</div>
                              </div>
                              <div style={{ display: "flex", gap: 4 }}>
                                <button title="Move up" onClick={() => move(fi, sp.key, qi, -1)} style={mini}>↑</button>
                                <button title="Move down" onClick={() => move(fi, sp.key, qi, 1)} style={mini}>↓</button>
                                <button title="Swap for another question on the same topic" onClick={() => swap(fi, sp.key, qi)} style={{ ...mini, width: "auto", padding: "0 8px" }}>Swap</button>
                                <button title="Remove" onClick={() => remove(fi, sp.key, qi)} style={{ ...mini, color: "#b91c1c" }}>✕</button>
                              </div>
                            </li>
                          );
                        })}
                      </ol>
                    </div>
                  ))}
                </Card>
              ))}
            </>
          )}
        </Shell>
      </div>

      {/* print preview: on screen it is an overlay of paper sheets; when printing, only the sheets print */}
      {printing && course && (
        <div className="paper-overlay">
          <div className="paper-toolbar">
            <strong>{printing.form === "all" ? (printing.key ? "All answer keys" : "All forms") : `Form ${forms[printing.form].label} — ${printing.key ? "answer key" : "test"}`}</strong>
            <span style={{ color: "#cbd5e1", fontSize: 13 }}>In the print dialog choose “Save as PDF” to get a PDF file.</span>
            <span style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
              <button onClick={() => window.print()} style={btn(true)}>Print / Save as PDF</button>
              <button onClick={() => setPrinting(null)} style={btn(false)}>Close</button>
            </span>
          </div>
        <div className="paper-print">
          {(printing.form === "all" ? forms : [forms[printing.form]]).map((f) => (
            <PrintedTest key={f.label + printing.key} form={f} answerKey={printing.key} sections={sections} byId={byId} settings={settings} courseLabel={`${course.code} — ${course.title}`} className={className} multi={forms.length > 1} />
          ))}
        </div>
        </div>
      )}
    </>
  );
}

// ───────── printed document ─────────
function PrintedTest({ form, answerKey, sections, byId, settings, courseLabel, className, multi }: { form: PaperForm; answerKey: boolean; sections: SectionSpec[]; byId: Map<string, PaperRow>; settings: Settings; courseLabel: string; className: string; multi: boolean }) {
  const parts = sections.filter((sp) => form.sections[sp.key].length);
  const total = parts.reduce((s, sp) => s + sectionMarks(sp, form.sections[sp.key], byId), 0);
  let n = 0;
  return (
    <section className="pt-doc">
      <header className="pt-head">
        <div className="pt-top"><span>{settings.school || courseLabel}</span><span>{multi ? `Form ${form.label}` : ""}{answerKey ? " · ANSWER KEY" : ""}</span></div>
        <h1>{settings.title}</h1>
        <div className="pt-sub">{[settings.school ? courseLabel : "", settings.teacher, className].filter(Boolean).join(" · ")}</div>
        {!answerKey && (
          <div className="pt-fields">
            <span>Name: <i /></span><span>Date: <i className="short" /></span><span>Class: <i className="short" /></span>
          </div>
        )}
        <div className="pt-meta"><span>Time: {settings.minutes} minutes</span><span>Total: {total} marks</span></div>
        {!answerKey && settings.instructions && <p className="pt-instr"><strong>Instructions.</strong> {settings.instructions}</p>}
        {!answerKey && settings.showChart && (
          <table className="pt-chart">
            <thead><tr>{parts.map((sp) => <th key={sp.key}>Part {sp.key}<br /><small>{sp.category}</small></th>)}<th>Total</th></tr></thead>
            <tbody><tr>{parts.map((sp) => <td key={sp.key}>&nbsp;&nbsp;&nbsp;&nbsp; / {sectionMarks(sp, form.sections[sp.key], byId)}</td>)}<td>&nbsp;&nbsp;&nbsp;&nbsp; / {total}</td></tr></tbody>
          </table>
        )}
      </header>

      {parts.map((sp) => (
        <div key={sp.key} className="pt-part">
          <h2>{sp.title} <small>({sectionMarks(sp, form.sections[sp.key], byId)} marks)</small></h2>
          {!answerKey && <p className="pt-hint">{sp.hint}</p>}
          {form.sections[sp.key].map((id) => {
            const r = byId.get(id);
            if (!r) return null;
            n++;
            return <PrintedQuestion key={id} n={n} r={r} marks={markOf(sp, r)} answerKey={answerKey} />;
          })}
        </div>
      ))}
      <p className="pt-end">— End of {answerKey ? "answer key" : "test"} —</p>
    </section>
  );
}

function PrintedQuestion({ n, r, marks, answerKey }: { n: number; r: PaperRow; marks: number; answerKey: boolean }) {
  const choices: { id: string; text: string }[] = Array.isArray(r.choices) ? r.choices : [];
  const space = spaceFor(r, marks);
  const ans = answerText(r);
  return (
    <div className="pt-q">
      <div className="pt-qline"><span className="pt-n">{n}.</span><span className="pt-prompt"><PromptText prompt={r.prompt} />{r.kind === "multiple_select" && <em> (Select all that apply.)</em>}</span><span className="pt-marks">[{marks}]</span></div>
      {r.image_url && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={r.image_url} alt="" className="pt-img" />
      )}
      {(r.kind === "multiple_choice" || r.kind === "multiple_select") && (
        <div className="pt-choices">
          {choices.map((c, i) => {
            const right = r.kind === "multiple_choice" ? r.answer === c.id : Array.isArray(r.answer) && r.answer.includes(c.id);
            return <div key={c.id} className={answerKey && right ? "pt-choice right" : "pt-choice"}><span className="pt-bubble">{LETTERS[i]}</span><PromptText prompt={c.text} /></div>;
          })}
        </div>
      )}
      {r.kind === "true_false" && (
        <div className="pt-choices tf">
          {["true", "false"].map((v) => <div key={v} className={answerKey && String(r.answer) === v ? "pt-choice right" : "pt-choice"}><span className="pt-bubble">{v === "true" ? "T" : "F"}</span>{v === "true" ? "True" : "False"}</div>)}
        </div>
      )}
      {!answerKey && space > 0 && (
        <div className="pt-work" style={{ height: `${space}cm` }}>
          {r.kind !== "long_answer" && <div className="pt-answer-line">Answer: <i /></div>}
        </div>
      )}
      {answerKey && (ans || r.feedback) && (
        <div className="pt-key">
          {ans && <div><strong>Answer:</strong> <PromptText prompt={ans} /></div>}
          {r.feedback && <div className="pt-sol"><strong>{r.kind === "long_answer" ? "Model solution / marking:" : "Why:"}</strong> <PromptText prompt={r.feedback} /></div>}
        </div>
      )}
    </div>
  );
}

function answerText(r: PaperRow): string {
  const choices: { id: string; text: string }[] = Array.isArray(r.choices) ? r.choices : [];
  switch (r.kind) {
    case "multiple_choice": { const i = choices.findIndex((c) => c.id === r.answer); return i >= 0 ? `(${LETTERS[i]}) ${choices[i].text}` : ""; }
    case "multiple_select": return choices.map((c, i) => (Array.isArray(r.answer) && r.answer.includes(c.id) ? `(${LETTERS[i]}) ${c.text}` : null)).filter(Boolean).join(";  ");
    case "true_false": return String(r.answer) === "true" ? "True" : "False";
    case "numeric": return asMath(String(r.answer));
    case "fill_blank": case "short_answer": {
      // accepted-answer lists hold typing variants ("3/4", "\frac{3}{4}"); print one, as math
      const list = (Array.isArray(r.answer) ? r.answer : [r.answer]).filter(Boolean).map(String);
      const plain = list.find((a) => !a.includes("\\"));
      return plain !== undefined ? asMath(plain) : list.length ? `$${list[0]}$` : "";
    }
    case "math_expr": return `$${String(r.answer ?? "")}$`;
    default: return "";
  }
}

// ───────── styles ─────────
const PRINT_CSS = `
.paper-overlay { position: fixed; inset: 0; z-index: 1000; background: #475569; overflow-y: auto; }
.paper-toolbar { position: sticky; top: 0; z-index: 2; display: flex; gap: 14px; align-items: center; flex-wrap: wrap; background: #0f172a; color: #fff; padding: 10px 18px; }
.paper-overlay .paper-print { padding: 24px 12px 60px; }
.paper-overlay .pt-doc { background: #fff; color: #000; width: 8.5in; max-width: 100%; min-height: 11in; margin: 0 auto 24px; padding: 14mm 15mm; box-sizing: border-box; box-shadow: 0 6px 24px rgba(0,0,0,.35); font-family: Inter, Arial, sans-serif; font-size: 11.5pt; }
@media print {
  @page { size: letter; margin: 14mm 15mm 16mm; }
  body { background: #fff !important; }
  body * { visibility: hidden; }
  .paper-screen { display: none !important; }
  .paper-overlay { position: static; background: none; overflow: visible; }
  .paper-toolbar { display: none !important; }
  .paper-print, .paper-print * { visibility: visible; }
  .paper-print { position: absolute; left: 0; top: 0; width: 100%; padding: 0 !important; color: #000; font-family: Inter, Arial, sans-serif; font-size: 11.5pt; }
  .paper-overlay .pt-doc { width: auto; min-height: 0; margin: 0; padding: 0; box-shadow: none; }
}
.pt-doc { break-after: page; }
.pt-doc:last-child { break-after: auto; }
.pt-head { border-bottom: 2px solid #000; padding-bottom: 8px; margin-bottom: 10px; }
.pt-top { display: flex; justify-content: space-between; font-size: 9.5pt; text-transform: uppercase; letter-spacing: .06em; }
.pt-head h1 { font-family: Fraunces, Georgia, serif; font-size: 20pt; margin: 4px 0 2px; }
.pt-sub { font-size: 10pt; color: #333; min-height: 4px; }
.pt-fields { display: flex; gap: 18px; margin: 12px 0 6px; font-size: 11pt; }
.pt-fields i { display: inline-block; width: 210px; border-bottom: 1px solid #000; height: 14px; vertical-align: bottom; }
.pt-fields i.short { width: 100px; }
.pt-meta { display: flex; gap: 24px; font-size: 10.5pt; font-weight: 600; }
.pt-instr { font-size: 10pt; margin: 6px 0; }
.pt-chart { border-collapse: collapse; margin-top: 6px; font-size: 9.5pt; }
.pt-chart th, .pt-chart td { border: 1px solid #000; padding: 3px 10px; text-align: center; }
.pt-chart small { font-weight: 400; }
.pt-part h2 { font-size: 13pt; margin: 14px 0 2px; border-bottom: 1px solid #999; }
.pt-part h2 small { font-weight: 400; font-size: 10pt; }
.pt-hint { font-size: 9.5pt; font-style: italic; margin: 2px 0 6px; }
.pt-q { break-inside: avoid; margin: 8px 0 10px; }
.pt-qline { display: flex; gap: 6px; align-items: baseline; }
.pt-n { font-weight: 700; min-width: 22px; }
.pt-prompt { flex: 1; line-height: 1.45; }
.pt-marks { font-size: 9pt; white-space: nowrap; }
.pt-img { max-width: 60%; max-height: 6cm; display: block; margin: 6px 0 0 28px; }
.pt-choices { display: grid; grid-template-columns: 1fr 1fr; gap: 4px 18px; margin: 5px 0 0 28px; }
.pt-choices.tf { grid-template-columns: auto auto; justify-content: start; }
.pt-choice { display: flex; gap: 8px; align-items: baseline; }
.pt-choice.right { font-weight: 700; color: #b91c1c; }
.pt-bubble { display: inline-flex; justify-content: center; align-items: center; width: 17px; height: 17px; border: 1px solid #000; border-radius: 50%; font-size: 8.5pt; flex-shrink: 0; }
.pt-choice.right .pt-bubble { background: #b91c1c; color: #fff; border-color: #b91c1c; }
.pt-work { position: relative; margin: 6px 0 0 28px; border: 1px solid #bbb; border-radius: 4px; }
.pt-answer-line { position: absolute; right: 10px; bottom: 6px; font-size: 10pt; }
.pt-answer-line i { display: inline-block; width: 150px; border-bottom: 1px solid #000; height: 12px; }
.pt-key { margin: 5px 0 0 28px; color: #b91c1c; font-size: 10.5pt; }
.pt-sol { color: #333; margin-top: 2px; }
.pt-end { text-align: center; font-size: 9pt; margin-top: 14px; }
`;

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ minHeight: "100vh", background: "#f6f8fc" }}>
      <SiteHeader />
      <main style={{ maxWidth: 1000, margin: "0 auto", padding: "28px 20px 60px" }}>{children}</main>
    </div>
  );
}
function Card({ children }: { children: React.ReactNode }) {
  return <section style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 14, padding: 20, marginBottom: 16 }}>{children}</section>;
}
function Row({ children }: { children: React.ReactNode }) {
  return <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>{children}</div>;
}
function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return <label style={{ display: "flex", flexDirection: "column", gap: 5, fontSize: 13, fontWeight: 700, color: "#334155", flex: "1 1 200px", marginTop: 8 }}>{label}{children}</label>;
}
const input: CSSProperties = { border: "1px solid #cbd5e1", borderRadius: 9, padding: "8px 10px", fontSize: 14.5, fontFamily: "inherit", background: "#fff", boxSizing: "border-box" };
const small: CSSProperties = { display: "flex", gap: 6, alignItems: "center", fontSize: 13.5, color: "#334155", fontWeight: 600 };
const h3: CSSProperties = { fontSize: 15, margin: "18px 0 8px", color: "#0f172a" };
const mini: CSSProperties = { width: 30, height: 30, borderRadius: 7, border: "1px solid #e2e8f0", background: "#fff", cursor: "pointer", fontWeight: 700, fontSize: 13 };
const btn = (primary: boolean): CSSProperties => ({ border: primary ? "none" : "1px solid #cbd5e1", background: primary ? "#1b7a44" : "#fff", color: primary ? "#fff" : "#0f172a", borderRadius: 9, padding: "9px 16px", fontWeight: 700, fontSize: 14, cursor: "pointer" });

/** Typed answers like "-11/10", "-8", "2 1/4" → $...$ so they print as math; words stay as words. */
function asMath(a: string): string {
  const t = a.trim();
  const fr = t.match(/^(-?)(\d+)\/(\d+)$/);
  if (fr) return `$${fr[1]}\frac{${fr[2]}}{${fr[3]}}$`;
  const mixed = t.match(/^(-?)(\d+) (\d+)\/(\d+)$/);
  if (mixed) return `$${mixed[1]}${mixed[2]}\tfrac{${mixed[3]}}{${mixed[4]}}$`;
  if (/^-?\d*\.?\d+$/.test(t)) return `$${t}$`;
  return t;
}
