// MCR3U course restructure to 8 chapters (user's choice, 2026-10-18):
//   Ch1 Introduction to Functions (1.1–1.9, rebuilt) · Ch2 Equivalent Expressions (unchanged) ·
//   Ch3 Quadratic Functions (old 1.5, 1.6 → 3.1, 3.2; rebuilt later) · Ch4–8 = old units 3–7 renumbered.
// Renames lesson titles + positions, bank topics, assignment titles and worksheet rows (code, title, position,
// content.unit), and rebuilds the renumbered worksheet PDFs from the old .tex sources with the new numbers.
//   node scripts/mcr3u-ch1/restructure.mjs           -> dry run (prints every change)
//   node scripts/mcr3u-ch1/restructure.mjs --apply   -> backs up all affected rows, then writes
// Run AFTER `lessons-publish.mjs --all --apply` (so the new chapter-1 lessons exist) and BEFORE the chapter-1
// worksheet / bank / assignment / written loads (they use the new numbers).
import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import os from "os";
import path from "path";
import { execFileSync } from "child_process";

const APPLY = process.argv.includes("--apply");
const env = {};
for (const line of fs.readFileSync(".env.local", "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });
const CID = "4819065e-1703-478f-adb7-8226825be6aa";

// ---- the new numbering ------------------------------------------------------------------------------
// chapter 1: fixed lesson ids → final titles (the lesson files set blocks; this sets titles + positions)
const CH1 = [
  ["1dd83ca5-843e-4d6c-a8dd-cf2a2147f35c", "1.1 Relations and Functions"],
  ["5c3e0001-0001-4001-8001-000000000102", "1.2 Function Notation"],
  ["5c3e0001-0001-4001-8001-000000000103", "1.3 Parent Functions"],
  ["79cdb1c2-797b-44a1-a067-f4d56117e968", "1.4 Domain and Range"],
  ["bd79c525-1735-4d81-914e-2161934afb7f", "1.5 Inverse Functions"],
  ["fb3ea947-f6f0-4301-a7f5-86245df1c0f1", "1.6 Translations and Vertical Stretches"],
  ["5c3e0001-0001-4001-8001-000000000107", "1.7 Horizontal Stretches, Compressions and Reflections"],
  ["5c3e0001-0001-4001-8001-000000000108", "1.8 Combining Transformations"],
  ["5c3e0001-0001-4001-8001-000000000109", "1.9 Chapter 1 Review"],
];
// old "N.x Title" (bank topic / lesson / assignment / worksheet code) → new number, for everything outside the rebuilt ch1
const OLD1 = { "1.1": "1.1", "1.2": "1.4", "1.3": "1.5", "1.4": "1.6", "1.5": "3.1", "1.6": "3.2" };
const NEW_TITLE_1 = { "1.1": "Relations and Functions", "1.2": "Domain and Range", "1.3": "Inverse Functions", "1.4": "Translations and Vertical Stretches" }; // keyed by OLD code
function renum(code) {
  const [u, l] = code.split(".").map(Number);
  if (u === 1) return OLD1[code] ?? null;
  if (u === 2) return code;
  return `${u + 1}.${l}`;
}
const UNIT_NAME = { 3: "Quadratic Functions", 4: "Exponential Functions", 5: "Trigonometric Ratios", 6: "Sinusoidal Functions", 7: "Discrete Functions: Sequences and Series", 8: "Discrete Functions: Financial Applications" };
const rank = (code) => { const [a, b] = code.split(".").map(Number); return a * 1000 + b; };
const splitTitle = (t) => { const m = t.match(/^(\d+\.\d+)\s+(.*)$/); return m ? [m[1], m[2]] : [null, t]; };

const plan = { lessons: [], topics: [], assignments: [], worksheets: [] };

// ---- lessons ----
const { data: lessons, error: le } = await db.from("lessons").select("id, title, position").eq("course_id", CID);
if (le) throw le;
const ch1Ids = new Set(CH1.map(([id]) => id));
const missingNew = CH1.filter(([id]) => !lessons.some((l) => l.id === id)).map(([, t]) => t);
const finalL = [];
CH1.forEach(([id, title]) => finalL.push({ id, title }));
for (const l of lessons) {
  if (ch1Ids.has(l.id)) continue;
  const [code, rest] = splitTitle(l.title);
  if (!code) { console.log("lesson without a number, left alone:", l.title); continue; }
  const nc = renum(code);
  if (!nc) { console.log("no mapping for lesson", l.title); continue; }
  finalL.push({ id: l.id, title: `${nc} ${rest}` });
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
  if (!code) continue;
  const nc = renum(code);
  const nt = code.startsWith("1.") && NEW_TITLE_1[code] ? `${nc} ${NEW_TITLE_1[code]}` : `${nc} ${rest}`;
  if (nc && nt !== t) plan.topics.push({ from: t, to: nt });
}

// ---- assignments ----
const { data: asg } = await db.from("assignments").select("id, title").eq("course_id", CID);
for (const a of asg) {
  const m = a.title.match(/^Assignment (\d+\.\d+) — (.*)$/);
  if (!m) continue;
  const nc = renum(m[1]);
  const nt = m[1].startsWith("1.") && NEW_TITLE_1[m[1]] ? `Assignment ${nc} — ${NEW_TITLE_1[m[1]]}` : `Assignment ${nc} — ${m[2]}`;
  if (nc && nt !== a.title) plan.assignments.push({ id: a.id, from: a.title, to: nt });
}

// ---- worksheets (descending order so a code is free before another row takes it) ----
const { data: ws } = await db.from("worksheets").select("id, code, title, position, content").eq("course_id", CID);
for (const w of ws) {
  const nc = renum(w.code);
  if (!nc || nc === w.code) continue;
  const title = w.code.startsWith("1.") && NEW_TITLE_1[w.code] ? NEW_TITLE_1[w.code] : w.title;
  // only the moved non-chapter-1 worksheets get a rebuilt PDF; renumbered chapter-1 rows are replaced by ws/build.mjs
  plan.worksheets.push({ id: w.id, from: w.code, to: nc, title, rebuild: !nc.startsWith("1."), content: w.content });
}
plan.worksheets.sort((a, b) => rank(b.from) - rank(a.from));

// ---- report ----
console.log(`LESSONS: ${plan.lessons.length} changes`); plan.lessons.forEach((c) => console.log(`  [${c.from}] -> [${c.position} ${c.title}]`));
if (missingNew.length) console.log("  NOTE: new chapter-1 lessons not inserted yet (run lessons-publish --all --apply first):", missingNew.join(", "));
console.log(`BANK TOPICS: ${plan.topics.length} renames`); plan.topics.forEach((c) => console.log(`  ${c.from} -> ${c.to}`));
console.log(`ASSIGNMENTS: ${plan.assignments.length} renames`); plan.assignments.forEach((c) => console.log(`  ${c.from} -> ${c.to}`));
console.log(`WORKSHEETS: ${plan.worksheets.length} moves`); plan.worksheets.forEach((c) => console.log(`  ${c.from} -> ${c.to} ${c.title}${c.rebuild ? "  (PDF rebuilt)" : ""}`));
const TEST_WS = process.argv.includes("--test-ws"); // build the renumbered PDFs locally only (no uploads, no DB writes)
if (!APPLY && !TEST_WS) { console.log("\nDry run — nothing written. Re-run with --apply (or --test-ws to build the renumbered PDFs locally)."); process.exit(0); }
if (APPLY && missingNew.length) { console.log("Refusing to apply: insert the new chapter-1 lessons first."); process.exit(1); }

// ---- backup ----
const BK = path.resolve("scripts/mcr3u-ch1/backup");
fs.mkdirSync(BK, { recursive: true });
const stamp = new Date().toISOString().replace(/[:.]/g, "-");
fs.writeFileSync(path.join(BK, `restructure-before.${stamp}.json`), JSON.stringify({ lessons, topics: [...topics], assignments: asg, worksheets: ws.map(({ content, ...w }) => w) }, null, 1));

// ---- worksheets: rebuild PDFs with new numbers, then move rows ----
const SRC = path.resolve("scripts/mcr3u-worksheets"), OUT = path.resolve("scripts/mcr3u-ch1/renumbered-ws");
fs.mkdirSync(OUT, { recursive: true });
fs.copyFileSync(path.join(SRC, "_preamble.tex"), path.join(OUT, "_preamble.tex"));
const BIN = path.join(os.homedir(), "tools", "tectonic", "tectonic.exe");
for (const w of plan.worksheets) {
  const row = { code: w.to, title: w.title, position: rank(w.to), content: w.content ? { ...w.content, ...(w.rebuild ? { unit: `${w.to.split(".")[0]}: ${UNIT_NAME[w.to.split(".")[0]]}` } : {}) } : w.content };
  if (w.rebuild) {
    const u = w.to.split(".")[0];
    const tex = fs.readFileSync(path.join(SRC, `${w.from}.tex`), "utf8")
      .split(`periodcentered{} ${w.from}}`).join(`periodcentered{} ${w.to}}`)
      .split(`Worksheet ${w.from} ---`).join(`Worksheet ${w.to} ---`)
      .replace(/Unit \d+: [^}]*\}/, `Unit ${u}: ${UNIT_NAME[u]}}`);
    fs.writeFileSync(path.join(OUT, `${w.to}.tex`), tex);
    execFileSync(BIN, ["-X", "compile", `${w.to}.tex`, "--outdir", "."], { cwd: OUT, stdio: "pipe" });
    if (TEST_WS) { console.log(`built ${w.from} -> ${w.to}`); continue; }
    const remote = `${CID}/mcr3u_${w.to}_worksheet.pdf`;
    const up = await db.storage.from("worksheets").upload(remote, fs.readFileSync(path.join(OUT, `${w.to}.pdf`)), { upsert: true, contentType: "application/pdf" });
    if (up.error) throw up.error;
    row.worksheet_url = db.storage.from("worksheets").getPublicUrl(remote).data.publicUrl + `?v=${Date.now()}`;
    row.worksheet_name = `${w.to} worksheet.pdf`;
  }
  if (TEST_WS) continue;
  const r = await db.from("worksheets").update(row).eq("id", w.id);
  if (r.error) throw r.error;
  console.log(`worksheet ${w.from} -> ${w.to}`);
}
if (TEST_WS) { console.log(`test build done: ${OUT}`); process.exit(0); }
// ---- lessons ----
for (const c of plan.lessons) { const r = await db.from("lessons").update({ title: c.title, position: c.position }).eq("id", c.id); if (r.error) throw r.error; }
console.log(`lessons updated: ${plan.lessons.length}`);
// ---- bank topics ----
for (const c of plan.topics) { const r = await db.from("bank_questions").update({ topic: c.to }).eq("course_id", CID).eq("topic", c.from); if (r.error) throw r.error; }
console.log(`bank topics renamed: ${plan.topics.length}`);
// ---- assignments ----
for (const c of plan.assignments) { const r = await db.from("assignments").update({ title: c.to }).eq("id", c.id); if (r.error) throw r.error; }
console.log(`assignments renamed: ${plan.assignments.length}`);
console.log("done");
