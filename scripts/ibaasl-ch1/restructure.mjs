// IB AA SL course restructure: 7 syllabus-topic units → 15 chapters (plan in docs/ibaasl-curriculum-alignment.md).
// Chapter 1 (Sequences and Series, 1.1–1.7) is rebuilt; chapters 2–15 keep their old titles for now (only the number
// changes) — each chapter's own build later sets titles and inserts its new lessons.
// Renames lesson titles + positions, bank topics, assignment titles and worksheet rows (code, title, position),
// and rebuilds the moved worksheet PDFs from scripts/ibaasl-worksheets/*.tex with the new numbers.
//   node scripts/ibaasl-ch1/restructure.mjs            -> dry run (prints every change)
//   node scripts/ibaasl-ch1/restructure.mjs --test-ws  -> also builds the renumbered PDFs locally (no uploads)
//   node scripts/ibaasl-ch1/restructure.mjs --apply    -> backs up all affected rows, then writes. Apply ONCE.
// Run AFTER `lessons-publish.mjs --all --apply` (so the new chapter-1 lessons exist) and BEFORE the chapter-1
// worksheet / bank / assignment / written loads (they use the new numbers).
import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import os from "os";
import path from "path";
import { execFileSync } from "child_process";

const APPLY = process.argv.includes("--apply"), TEST_WS = process.argv.includes("--test-ws");
const env = {};
for (const line of fs.readFileSync(".env.local", "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });
const CID = "f635431f-3244-45c3-9c4a-39a33fd209b9";

// chapter 1: fixed lesson ids → final titles (the lesson files set the blocks; this sets titles + positions)
export const CH1 = [
  ["7811a365-55aa-470b-aad2-966ebfdc695c", "1.1 Number Patterns and Sigma Notation"],
  ["7808e07c-33e3-4490-880a-8d8e63236d22", "1.2 Arithmetic and Geometric Sequences"],
  ["46258e72-8eef-4835-9baf-dcb0834b1d62", "1.3 Arithmetic and Geometric Series"],
  ["1baa0001-0001-4001-8001-000000000104", "1.4 Financial Applications of Sequences"],
  ["e378089f-aaea-42e2-bdbf-d7db4327b93e", "1.5 The Binomial Theorem"],
  ["0a25303e-b72a-4873-8572-416389d0a1fe", "1.6 Proof"],
  ["1baa0001-0001-4001-8001-000000000107", "1.7 Chapter 1 Review"],
];
// old code → new code for every existing lesson / topic / assignment / worksheet
const MAP = {
  "1.3": "1.1", "1.1": "1.2", "1.2": "1.3", "1.4": "1.5", "1.7": "1.6",
  "2.1": "2.1", "2.3": "2.4",
  "2.4": "3.1", "2.2": "3.3", "2.5": "3.6",
  "2.6": "4.3",
  "5.1": "5.1", "5.2": "5.3", "5.4": "5.4", "5.5": "5.5", "5.6": "5.6",
  "4.1": "6.1", "4.2": "6.3",
  "4.3": "7.1",
  "4.4": "8.2", "4.5": "8.3",
  "1.5": "9.1", "1.6": "9.2",
  "6.1": "10.1", "6.2": "10.3", "6.4": "10.5",
  "3.1": "11.1", "3.2": "11.2", "3.3": "11.3",
  "3.4": "12.1", "3.5": "12.2", "3.6": "12.4",
  "5.3": "13.1", "6.3": "13.3",
  "4.6": "14.1", "4.7": "14.3",
  "7.1": "15.1",
};
// new titles for the chapter-1 topics (keyed by OLD code); other chapters keep their titles until rebuilt
const NEW_TITLE_1 = Object.fromEntries([["1.3", 0], ["1.1", 1], ["1.2", 2], ["1.4", 4], ["1.7", 5]].map(([o, i]) => [o, CH1[i][1].replace(/^\d+\.\d+ /, "")]));
const CHAPTER_NAME = {
  1: "Sequences and Series", 2: "Functions", 3: "Linear and Quadratic Functions", 4: "Rational Functions", 5: "Differentiation",
  6: "Statistics for Univariate Data", 7: "Bivariate Data", 8: "Probability", 9: "Exponentials and Logarithms", 10: "Integration",
  11: "Geometry and Trigonometry", 12: "Trigonometric Functions", 13: "More Calculus", 14: "Probability Distributions", 15: "The Exploration",
};
const rank = (code) => { const [a, b] = code.split(".").map(Number); return a * 1000 + b; };
const splitTitle = (t) => { const m = t.match(/^(\d+\.\d+)\s+(.*)$/); return m ? [m[1], m[2]] : [null, t]; };
const newTitle = (code, rest) => `${MAP[code]} ${NEW_TITLE_1[code] ?? rest}`;

if (import.meta.url.endsWith(path.basename(process.argv[1] ?? ""))) await run();

async function run() {
  const plan = { lessons: [], topics: [], assignments: [], worksheets: [] };

  // ---- lessons ----
  const { data: lessons, error: le } = await db.from("lessons").select("id, title, position").eq("course_id", CID);
  if (le) throw le;
  // run-once guard: only --apply creates a chapter-15 lesson (old 7.1); running MAP again would renumber twice
  if (lessons.some((l) => /^15\.\d+ /.test(l.title))) { console.log("Restructure already applied (chapter 15 lesson exists) — nothing to do."); return; }
  const ch1Ids = new Set(CH1.map(([id]) => id));
  const missingNew = CH1.filter(([id]) => !lessons.some((l) => l.id === id)).map(([, t]) => t);
  const finalL = CH1.map(([id, title]) => ({ id, title }));
  for (const l of lessons) {
    if (ch1Ids.has(l.id)) continue;
    const [code, rest] = splitTitle(l.title);
    if (!code) { console.log("lesson without a number, left alone:", l.title); continue; }
    if (!MAP[code]) { console.log("no mapping for lesson", l.title); continue; }
    finalL.push({ id: l.id, title: `${MAP[code]} ${rest}` });
  }
  finalL.sort((a, b) => rank(splitTitle(a.title)[0]) - rank(splitTitle(b.title)[0]));
  finalL.forEach((l, i) => {
    const cur = lessons.find((x) => x.id === l.id);
    if (!cur || cur.title !== l.title || cur.position !== i) plan.lessons.push({ id: l.id, from: cur ? `${cur.position} ${cur.title}` : "(missing)", title: l.title, position: i });
  });

  // ---- bank topics ----
  const topics = new Set();
  for (let f = 0; ; f += 1000) { const { data } = await db.from("bank_questions").select("topic").eq("course_id", CID).range(f, f + 999); data.forEach((r) => topics.add(r.topic)); if (data.length < 1000) break; }
  for (const t of topics) {
    const [code, rest] = splitTitle(t ?? "");
    if (!code || !MAP[code]) continue;
    const nt = newTitle(code, rest);
    if (nt !== t) plan.topics.push({ from: t, to: nt });
  }

  // ---- assignments ----
  const { data: asg } = await db.from("assignments").select("id, title").eq("course_id", CID);
  for (const a of asg) {
    const m = a.title.match(/^Assignment (\d+\.\d+) — (.*)$/);
    if (!m || !MAP[m[1]]) continue;
    const nt = `Assignment ${MAP[m[1]]} — ${NEW_TITLE_1[m[1]] ?? m[2]}`;
    if (nt !== a.title) plan.assignments.push({ id: a.id, from: a.title, to: nt });
  }

  // ---- worksheets ----
  const { data: ws } = await db.from("worksheets").select("id, code, title, position").eq("course_id", CID);
  for (const w of ws) {
    const nc = MAP[w.code];
    if (!nc) continue;
    // chapter-1 rows are replaced later by ws/build.mjs; every other row gets a PDF rebuilt with its new number
    // (also when the number stays, because the header changes from "Unit" to "Chapter")
    plan.worksheets.push({ id: w.id, from: w.code, to: nc, title: NEW_TITLE_1[w.code] ?? w.title, rebuild: !nc.startsWith("1.") });
  }

  // ---- report ----
  console.log(`LESSONS: ${plan.lessons.length} changes`); plan.lessons.forEach((c) => console.log(`  [${c.from}] -> [${c.position} ${c.title}]`));
  if (missingNew.length) console.log("  NOTE: new chapter-1 lessons not inserted yet (run lessons-publish --all --apply first):", missingNew.join(", "));
  console.log(`BANK TOPICS: ${plan.topics.length} renames`); plan.topics.forEach((c) => console.log(`  ${c.from} -> ${c.to}`));
  console.log(`ASSIGNMENTS: ${plan.assignments.length} renames`); plan.assignments.forEach((c) => console.log(`  ${c.from} -> ${c.to}`));
  console.log(`WORKSHEETS: ${plan.worksheets.length} rows`); plan.worksheets.forEach((c) => console.log(`  ${c.from} -> ${c.to} ${c.title}${c.rebuild ? "  (PDF rebuilt)" : ""}`));
  if (!APPLY && !TEST_WS) { console.log("\nDry run — nothing written. Re-run with --apply (or --test-ws to build the renumbered PDFs locally)."); return; }
  if (APPLY && missingNew.length) { console.log("Refusing to apply: insert the new chapter-1 lessons first."); process.exit(1); }

  // ---- backup ----
  const BK = path.resolve("scripts/ibaasl-ch1/backup");
  fs.mkdirSync(BK, { recursive: true });
  const stamp = new Date().toISOString().replace(/[:.]/g, "-");
  if (APPLY) fs.writeFileSync(path.join(BK, `restructure-before.${stamp}.json`), JSON.stringify({ lessons, topics: [...topics], assignments: asg, worksheets: ws }, null, 1));

  // ---- worksheets: rebuild PDFs with new numbers ----
  const SRC = path.resolve("scripts/ibaasl-worksheets"), OUT = path.resolve("scripts/ibaasl-ch1/renumbered-ws");
  fs.mkdirSync(OUT, { recursive: true });
  fs.copyFileSync(path.join(SRC, "_preamble.tex"), path.join(OUT, "_preamble.tex"));
  const BIN = path.join(os.homedir(), "tools", "tectonic", "tectonic.exe");
  const rows = [];
  for (const w of plan.worksheets) {
    const row = { code: w.to, title: w.title, position: rank(w.to) };
    if (w.rebuild) {
      const c = w.to.split(".")[0];
      const tex = fs.readFileSync(path.join(SRC, `${w.from}.tex`), "utf8")
        .split(`periodcentered{} ${w.from}}`).join(`periodcentered{} ${w.to}}`)
        .split(`Worksheet ${w.from} ---`).join(`Worksheet ${w.to} ---`)
        .replace(/Unit \d+: [^}]*\}/, `Chapter ${c}: ${CHAPTER_NAME[c]}}`);
      fs.writeFileSync(path.join(OUT, `${w.to}.tex`), tex);
      execFileSync(BIN, ["-X", "compile", `${w.to}.tex`, "--outdir", "."], { cwd: OUT, stdio: "pipe" });
      if (TEST_WS) { console.log(`built ${w.from} -> ${w.to}`); continue; }
      const remote = `${CID}/ibaasl_${w.to}_worksheet.pdf`;
      const up = await db.storage.from("worksheets").upload(remote, fs.readFileSync(path.join(OUT, `${w.to}.pdf`)), { upsert: true, contentType: "application/pdf" });
      if (up.error) throw up.error;
      row.worksheet_url = db.storage.from("worksheets").getPublicUrl(remote).data.publicUrl + `?v=${Date.now()}`;
      row.worksheet_name = `${w.to} worksheet.pdf`;
    }
    rows.push([w, row]);
  }
  if (TEST_WS) { console.log(`test build done: ${OUT}`); return; }
  // two phases, because codes swap places (e.g. 1.3 → 1.1 while 1.1 → 1.2) and (course_id, code) is unique
  for (const [w] of rows) { const r = await db.from("worksheets").update({ code: `tmp-${w.from}` }).eq("id", w.id); if (r.error) throw r.error; }
  for (const [w, row] of rows) { const r = await db.from("worksheets").update(row).eq("id", w.id); if (r.error) throw r.error; console.log(`worksheet ${w.from} -> ${w.to}`); }
  // ---- lessons ----
  for (const c of plan.lessons) { const r = await db.from("lessons").update({ title: c.title, position: c.position }).eq("id", c.id); if (r.error) throw r.error; }
  console.log(`lessons updated: ${plan.lessons.length}`);
  // ---- bank topics (two phases for the same reason) ----
  for (const c of plan.topics) { const r = await db.from("bank_questions").update({ topic: `tmp ${c.from}` }).eq("course_id", CID).eq("topic", c.from); if (r.error) throw r.error; }
  for (const c of plan.topics) { const r = await db.from("bank_questions").update({ topic: c.to }).eq("course_id", CID).eq("topic", `tmp ${c.from}`); if (r.error) throw r.error; }
  console.log(`bank topics renamed: ${plan.topics.length}`);
  // ---- assignments ----
  for (const c of plan.assignments) { const r = await db.from("assignments").update({ title: c.to }).eq("id", c.id); if (r.error) throw r.error; }
  console.log(`assignments renamed: ${plan.assignments.length}`);
  console.log("done");
}
