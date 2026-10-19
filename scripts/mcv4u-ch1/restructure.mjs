// MCV4U course restructure to 8 chapters (same approach as MHF4U, 2026-10-19; plan in docs/mcv4u-curriculum-alignment.md):
//   Ch1 Rates of Change and Limits (1.1–1.6, rebuilt; old 1.4 Slope of Tangent becomes 1.2) · Ch2 Derivatives ·
//   Ch3 Curve Sketching · Ch4 Derivatives of Sinusoidal Functions · Ch5 Exponential and Logarithmic Functions ·
//   Ch6 Geometric Vectors · Ch7 Cartesian Vectors · Ch8 Lines and Planes. Chapters 2–8 keep their old titles for now
//   (only the number changes); each chapter's own build later sets titles and inserts its new lessons.
// Renames lesson titles + positions, bank topics, assignment titles and worksheet rows (code, title, position),
// and rebuilds the moved worksheet PDFs from scripts/mcv4u-worksheets/*.tex with the new numbers.
//   node scripts/mcv4u-ch1/restructure.mjs            -> dry run (prints every change)
//   node scripts/mcv4u-ch1/restructure.mjs --test-ws  -> also builds the renumbered PDFs locally (no uploads)
//   node scripts/mcv4u-ch1/restructure.mjs --apply    -> backs up all affected rows, then writes
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
const CID = "88ea0686-581a-4236-b4df-8059c8f1d214";

// chapter 1: fixed lesson ids → final titles (the lesson files set the blocks; this sets titles + positions)
export const CH1 = [
  ["4432b35e-2f50-4a65-9397-3a95e13be7b2", "1.1 Rates of Change and the Slope of a Curve"],
  ["b6a81360-8f08-454d-8593-c625e6b79a74", "1.2 Rates of Change Using Equations"],
  ["e1e6a05f-7871-4aaf-8218-fead1881b090", "1.3 Limits"],
  ["6151cde3-e842-4f3e-b636-935d2ddbf938", "1.4 Limits and Continuity"],
  ["87b0f574-9eb8-40ee-8aa6-14f60d314863", "1.5 Introduction to Derivatives"],
  ["6d4fc001-0001-4001-8001-000000000106", "1.6 Chapter 1 Review"],
];
// old code → new code for every existing lesson / topic / assignment / worksheet
const MAP = {
  "1.1": "1.1", "1.4": "1.2", "1.2": "1.3", "1.3": "1.4", "1.5": "1.5",
  "2.1": "2.1", "2.2": "2.2", "5.3": "2.3", "2.3": "2.4", "2.4": "2.5", "5.2": "2.6",
  "4.1": "3.1", "4.3": "3.2", "4.2": "3.3", "4.4": "3.5", "5.1": "3.6",
  "3.1": "4.2",
  "3.3": "5.2", "3.2": "5.3",
  "6.1": "6.1", "6.2": "6.2",
  "6.3": "7.1", "6.4": "7.2", "6.5": "7.5",
  "7.1": "8.1", "7.2": "8.2", "7.3": "8.5",
};
// bank topics with no lesson of their own: left untouched (their code would collide with a renumbered topic)
const SKIP_TOPICS = new Set(["1.4 The Derivative from First Principles"]);
// new titles for the chapter-1 topics (keyed by OLD code); other chapters keep their titles until rebuilt
const NEW_TITLE_1 = Object.fromEntries([["1.1", 0], ["1.4", 1], ["1.2", 2], ["1.3", 3], ["1.5", 4]].map(([o, i]) => [o, CH1[i][1].replace(/^\d+\.\d+ /, "")]));
const UNIT_NAME = { 1: "Rates of Change and Limits", 2: "Derivatives", 3: "Curve Sketching", 4: "Derivatives of Sinusoidal Functions", 5: "Exponential and Logarithmic Functions", 6: "Geometric Vectors", 7: "Cartesian Vectors", 8: "Lines and Planes" };
const rank = (code) => { const [a, b] = code.split(".").map(Number); return a * 1000 + b; };
const splitTitle = (t) => { const m = t.match(/^(\d+\.\d+)\s+(.*)$/); return m ? [m[1], m[2]] : [null, t]; };
const newTitle = (code, rest) => `${MAP[code]} ${NEW_TITLE_1[code] ?? rest}`;

if (import.meta.url.endsWith(path.basename(process.argv[1] ?? ""))) await run();

async function run() {
  const plan = { lessons: [], topics: [], assignments: [], worksheets: [] };

  // ---- lessons ----
  const { data: lessons, error: le } = await db.from("lessons").select("id, title, position").eq("course_id", CID);
  if (le) throw le;
  // run-once guard: only --apply creates chapter-8 lessons (old 7.2/7.3); running MAP again would renumber twice.
  // (lessons-publish already retitles the chapter-1 rows, including old 7.1, so they can't be the marker.)
  if (lessons.some((l) => /^8\.\d+ /.test(l.title))) { console.log("Restructure already applied (chapter 8 lessons exist) — nothing to do."); return; }
  const ch1Ids = new Set(CH1.map(([id]) => id));
  const missingNew = CH1.filter(([id]) => !lessons.some((l) => l.id === id)).map(([, t]) => t);
  const finalL = CH1.map(([id, title]) => ({ id, title }));
  for (const l of lessons) {
    if (ch1Ids.has(l.id)) continue;
    const [code, rest] = splitTitle(l.title);
    if (!code) { console.log("lesson without a number, left alone:", l.title); continue; }
    // already renumbered (re-run): keep as is if its code is a NEW code not present in MAP's keys as an old one
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
    if (!code || !MAP[code] || SKIP_TOPICS.has(t)) continue;
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
  const { data: ws } = await db.from("worksheets").select("id, code, title, position, content").eq("course_id", CID);
  for (const w of ws) {
    const nc = MAP[w.code];
    if (!nc || nc === w.code) continue;
    // moved chapter-1 rows (old 1.2/1.3/1.4) are replaced later by ws/build.mjs; every other move gets a rebuilt PDF
    plan.worksheets.push({ id: w.id, from: w.code, to: nc, title: NEW_TITLE_1[w.code] ?? w.title, rebuild: !nc.startsWith("1."), content: w.content });
  }

  // ---- report ----
  console.log(`LESSONS: ${plan.lessons.length} changes`); plan.lessons.forEach((c) => console.log(`  [${c.from}] -> [${c.position} ${c.title}]`));
  if (missingNew.length) console.log("  NOTE: new chapter-1 lessons not inserted yet (run lessons-publish --all --apply first):", missingNew.join(", "));
  console.log(`BANK TOPICS: ${plan.topics.length} renames`); plan.topics.forEach((c) => console.log(`  ${c.from} -> ${c.to}`));
  console.log(`ASSIGNMENTS: ${plan.assignments.length} renames`); plan.assignments.forEach((c) => console.log(`  ${c.from} -> ${c.to}`));
  console.log(`WORKSHEETS: ${plan.worksheets.length} moves`); plan.worksheets.forEach((c) => console.log(`  ${c.from} -> ${c.to} ${c.title}${c.rebuild ? "  (PDF rebuilt)" : ""}`));
  if (!APPLY && !TEST_WS) { console.log("\nDry run — nothing written. Re-run with --apply (or --test-ws to build the renumbered PDFs locally)."); return; }
  if (APPLY && missingNew.length) { console.log("Refusing to apply: insert the new chapter-1 lessons first."); process.exit(1); }

  // ---- backup ----
  const BK = path.resolve("scripts/mcv4u-ch1/backup");
  fs.mkdirSync(BK, { recursive: true });
  const stamp = new Date().toISOString().replace(/[:.]/g, "-");
  if (APPLY) fs.writeFileSync(path.join(BK, `restructure-before.${stamp}.json`), JSON.stringify({ lessons, topics: [...topics], assignments: asg, worksheets: ws.map(({ content, ...w }) => w) }, null, 1));

  // ---- worksheets: rebuild PDFs with new numbers ----
  const SRC = path.resolve("scripts/mcv4u-worksheets"), OUT = path.resolve("scripts/mcv4u-ch1/renumbered-ws");
  fs.mkdirSync(OUT, { recursive: true });
  fs.copyFileSync(path.join(SRC, "_preamble.tex"), path.join(OUT, "_preamble.tex"));
  const BIN = path.join(os.homedir(), "tools", "tectonic", "tectonic.exe");
  const rows = [];
  for (const w of plan.worksheets) {
    const row = { code: w.to, title: w.title, position: rank(w.to) };
    if (w.rebuild) {
      const u = w.to.split(".")[0];
      const tex = fs.readFileSync(path.join(SRC, `${w.from}.tex`), "utf8")
        .split(`periodcentered{} ${w.from}}`).join(`periodcentered{} ${w.to}}`)
        .split(`Worksheet ${w.from} ---`).join(`Worksheet ${w.to} ---`)
        .replace(/Unit \d+: [^}]*\}/, `Unit ${u}: ${UNIT_NAME[u]}}`);
      fs.writeFileSync(path.join(OUT, `${w.to}.tex`), tex);
      execFileSync(BIN, ["-X", "compile", `${w.to}.tex`, "--outdir", "."], { cwd: OUT, stdio: "pipe" });
      if (TEST_WS) { console.log(`built ${w.from} -> ${w.to}`); continue; }
      const remote = `${CID}/mcv4u_${w.to}_worksheet.pdf`;
      const up = await db.storage.from("worksheets").upload(remote, fs.readFileSync(path.join(OUT, `${w.to}.pdf`)), { upsert: true, contentType: "application/pdf" });
      if (up.error) throw up.error;
      row.worksheet_url = db.storage.from("worksheets").getPublicUrl(remote).data.publicUrl + `?v=${Date.now()}`;
      row.worksheet_name = `${w.to} worksheet.pdf`;
    }
    rows.push([w, row]);
  }
  if (TEST_WS) { console.log(`test build done: ${OUT}`); return; }
  // two phases, because codes swap places (e.g. 5.2 → 4.2 while 5.4 → 5.2) and (course_id, code) is unique
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
