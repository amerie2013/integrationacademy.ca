// Restructure MTH1W chapter 1 (Number Sense) from 6 topics to 10, in a sensible teaching order.
//   node scripts/mth1w-ch1/publish.mjs            -> DRY RUN: reads only, prints exactly what it would do
//   node scripts/mth1w-ch1/publish.mjs --apply    -> writes lessons, assignments, worksheet rows, bank, quiz titles
// Afterwards upload the worksheet PDFs:
//   WS_DATA=./mth1w-ch1/ws-data.mjs node scripts/_wsgen.mjs
//
// Old -> new:   1.1 stays | old 1.2 Density -> 1.10 | old 1.3 Powers -> 1.6 (rebuilt) | old 1.4 Integers in Context -> 1.3 (rebuilt)
//               old 1.5 Fractions -> 1.4 (rebuilt, first half) | old 1.6 Ratios/Rates/Percent -> 1.9 (renumbered only)
//               NEW: 1.2 Adding & Subtracting Integers, 1.5 Fractions x/÷ & Reciprocals, 1.7 Exponent Laws & Sci. Notation, 1.8 Ratios & Proportions
// Reused rows keep their ids (lesson progress and class locks stay attached). Safe to run twice.
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import * as t12 from "./t1_2.mjs";
import * as t13 from "./t1_3.mjs";
import * as t14 from "./t1_4.mjs";
import * as t15 from "./t1_5.mjs";
import * as t16 from "./t1_6.mjs";
import * as t17 from "./t1_7.mjs";
import * as t18 from "../mth1w-ratios.mjs";

const APPLY = process.argv.includes("--apply");
const __dirname = dirname(fileURLToPath(import.meta.url));
const env = {};
for (const line of readFileSync(join(__dirname, "..", "..", ".env.local"), "utf8").split("\n")) {
  const m = line.match(/^([A-Z0-9_]+)=(.*)$/);
  if (m) env[m[1]] = m[2].trim();
}
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });
const must = (r, what) => { if (r.error) throw new Error(`${what}: ${r.error.message}`); return r.data; };
const say = (m) => console.log((APPLY ? "" : "[dry] ") + m);

// Final order of chapter 1.  reuse = OLD code whose rows this topic takes over (so ids are kept).
//   keep       : content and number unchanged
//   baseTitle  : renumbered only — content stays, only the code in the titles changes
const PLAN = [
  { code: "1.1", keep: true, baseTitle: "Number Sets & Their Subsets" },
  { code: "1.2", mod: t12 },
  { code: "1.3", mod: t13, reuse: "1.4" },
  { code: "1.4", mod: t14, reuse: "1.5" },
  { code: "1.5", mod: t15 },
  { code: "1.6", mod: t16, reuse: "1.3" },
  { code: "1.7", mod: t17 },
  { code: "1.8", mod: t18 },
  { code: "1.9", baseTitle: "Ratios, Rates, Percentages & Proportions", reuse: "1.6" },
  { code: "1.10", baseTitle: "Density, Infinity & Limit", reuse: "1.2" },
];
const QUIZ_RENAME = { "1.2 — Quiz": "1.10 — Quiz", "1.3 — Quiz": "1.6 — Quiz", "1.5 — Quiz": "1.4 — Quiz", "1.6 — Quiz": "1.9 — Quiz" };
const wsPos = (code) => 100 + Number(code.split(".")[1]);

const cid = must(await db.from("courses").select("id").eq("code", "MTH1W").single(), "course").id;
const lessons = must(await db.from("lessons").select("id, title, position").eq("course_id", cid).order("position"), "lessons");
const assigns = must(await db.from("assignments").select("id, title").eq("course_id", cid), "assignments");
const sheets = must(await db.from("worksheets").select("id, code, title").eq("course_id", cid), "worksheets");
const quizzes = must(await db.from("quizzes").select("id, title").eq("course_id", cid), "quizzes");

// Resolve existing rows. Exact NEW title first (so a second run finds its own rows), else the OLD row.
for (const p of PLAN) {
  const from = p.reuse ?? p.code;
  p.title = p.mod ? p.mod.FULL_TITLE : `${p.code} ${p.baseTitle}`;
  p.asgTitle = p.mod ? p.mod.ASSIGNMENT.title : `Assignment ${p.code} — ${p.baseTitle}`;
  p.wsTitle = p.mod ? p.mod.TITLE : p.baseTitle;
  const hasOld = p.reuse || p.keep || p.baseTitle;
  p.lesson = lessons.find((l) => l.title === p.title) ?? (hasOld ? lessons.find((l) => l.title.startsWith(`${from} `)) : undefined);
  p.assign = assigns.find((a) => a.title === p.asgTitle) ?? (hasOld ? assigns.find((a) => a.title.startsWith(`Assignment ${from} — `)) : undefined);
  p.sheet = sheets.find((s) => s.code === p.code && s.title === p.wsTitle) ?? (hasOld ? sheets.find((s) => s.code === from) : undefined);
  p.oldTopic = p.lesson?.title;
  p.kind = p.keep ? "keep as is" : p.mod ? (p.lesson ? `rebuilt (takes over old ${p.reuse ?? p.code} row)` : "NEW") : "renumber only";
}

// ── plan output ──
console.log(`MTH1W course ${cid}`);
for (const p of PLAN) say(`${p.code.padEnd(5)}${p.title.slice(0, 64).padEnd(65)}${p.kind.padEnd(34)} lesson:${p.lesson ? "reuse" : "insert"} assignment:${p.assign ? "reuse" : "insert"} worksheet:${p.sheet ? "reuse" : "insert"}`);
const later = lessons.filter((l) => !/^1\.\d+\s/.test(l.title)).sort((a, b) => a.position - b.position);
say(`chapters 2-7: ${later.length} lessons move to positions 10..${9 + later.length}`);
const quizHits = quizzes.filter((q) => QUIZ_RENAME[q.title]);
say(`class quizzes retitled: ${quizHits.map((q) => `"${q.title}" -> "${QUIZ_RENAME[q.title]}"`).join("; ") || "none"}`);
if (!APPLY) { console.log("\nDry run only — nothing was written. Re-run with --apply to publish."); process.exit(0); }

// ── 1. lessons ──
for (const [i, l] of later.entries()) if (l.position !== 10 + i) must(await db.from("lessons").update({ position: 10 + i }).eq("id", l.id), `shift ${l.title}`);
const lessonId = {};
for (const [i, p] of PLAN.entries()) {
  const fields = p.keep ? { position: i } : p.mod ? { title: p.title, blocks: p.mod.lessonBlocks(), position: i, published: true } : { title: p.title, position: i };
  if (p.lesson) { must(await db.from("lessons").update(fields).eq("id", p.lesson.id), `lesson ${p.code}`); lessonId[p.code] = p.lesson.id; }
  else lessonId[p.code] = must(await db.from("lessons").insert({ course_id: cid, ...fields }).select("id").single(), `lesson insert ${p.code}`).id;
}

// ── 2. assignments ──
for (const p of PLAN) {
  if (p.keep) continue;
  const fields = p.mod ? { title: p.asgTitle, description: p.mod.ASSIGNMENT.description, published: true } : { title: p.asgTitle };
  if (p.assign) must(await db.from("assignments").update(fields).eq("id", p.assign.id), `assignment ${p.code}`);
  else must(await db.from("assignments").insert({ course_id: cid, ...fields }), `assignment insert ${p.code}`);
}

// ── 3. worksheet rows: park changing rows on temporary codes first so (course, code) never collides ──
for (const p of PLAN) if (p.sheet && !p.keep) must(await db.from("worksheets").update({ code: `tmp-${p.sheet.id.slice(0, 8)}` }).eq("id", p.sheet.id), `park ${p.code}`);
for (const p of PLAN) {
  if (p.keep) continue;
  const fields = p.mod ? { code: p.code, title: p.wsTitle, position: wsPos(p.code), content: p.mod.WORKSHEET_CONTENT, published: true } : { code: p.code, title: p.wsTitle, position: wsPos(p.code) };
  if (p.sheet) must(await db.from("worksheets").update(fields).eq("id", p.sheet.id), `worksheet ${p.code}`);
  else must(await db.from("worksheets").insert({ course_id: cid, published: true, ...fields }), `worksheet insert ${p.code}`);
}

// ── 4. question bank (topic text = lesson title) ──
for (const p of PLAN) {
  if (p.keep) continue;
  if (!p.mod) { if (p.oldTopic && p.oldTopic !== p.title) must(await db.from("bank_questions").update({ topic: p.title }).eq("course_id", cid).eq("topic", p.oldTopic), `bank retitle ${p.code}`); continue; }
  const rows = p.mod.bank().map((q) => ({ course_id: cid, lesson_id: lessonId[p.code], topic: p.title, difficulty: q.difficulty, kind: q.kind, prompt: q.prompt, choices: q.choices ?? null, answer: q.answer ?? null, tolerance: q.tolerance ?? null, points: q.points ?? 1, feedback: q.feedback ?? null }));
  for (const t of new Set([p.oldTopic, p.title].filter(Boolean))) must(await db.from("bank_questions").delete().eq("course_id", cid).eq("topic", t), `bank delete ${t}`);
  for (let i = 0; i < rows.length; i += 200) must(await db.from("bank_questions").insert(rows.slice(i, i + 200)), `bank insert ${p.code}`);
}

// ── 5. class quiz titles follow the new numbering ──
for (const q of quizHits) must(await db.from("quizzes").update({ title: QUIZ_RENAME[q.title] }).eq("id", q.id), `quiz ${q.title}`);

// ── summary ──
const L = must(await db.from("lessons").select("title, position").eq("course_id", cid).order("position").limit(12), "verify");
console.log("\nChapter 1 now reads:"); L.slice(0, 11).forEach((l) => console.log(`  ${String(l.position).padStart(2)}  ${l.title}`));
const bq = must(await db.from("bank_questions").select("topic").eq("course_id", cid).like("topic", "1.%").limit(5000), "verify bank");
const bc = {}; bq.forEach((r) => (bc[r.topic] = (bc[r.topic] || 0) + 1));
console.log("Bank:", JSON.stringify(bc, null, 1));
console.log("\nDone. Now upload the PDFs: WS_DATA=./mth1w-ch1/ws-data.mjs node scripts/_wsgen.mjs");
