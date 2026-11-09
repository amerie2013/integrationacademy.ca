// MCF3M restructure to 8 chapters (user's choice, 2026-11-08). Run ONCE.
// Renames the 24 existing lessons (kept ids) to their new code + title, renames their bank topics, assignment titles
// and worksheet rows (code, title, position), moves the free-preview flags to the new 1.1, and re-sorts positions.
// Content of not-yet-rebuilt lessons is untouched (each chapter's pipeline rebuilds it later).
//   node scripts/mcf3m/restructure.mjs           -> dry run (prints every change)
//   node scripts/mcf3m/restructure.mjs --apply   -> backs up all affected rows, then writes
import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";
import { CID, LESSONS } from "./plan.mjs";

const APPLY = process.argv.includes("--apply");
const env = {};
for (const line of fs.readFileSync(".env.local", "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });

const { data: lessons, error: le } = await db.from("lessons").select("id, title, position, free_preview").eq("course_id", CID);
if (le) throw le;
if (lessons.some((l) => l.title.startsWith("8.8") || l.title === "1.1 Relations and Functions")) { console.log("Already restructured — nothing to do."); process.exit(0); }

const plan = [];
for (const [code, title, id, old] of LESSONS) {
  if (!old) continue;
  const row = lessons.find((l) => l.id === id);
  if (!row) throw new Error(`lesson ${id} (old ${old}) not found`);
  if (!row.title.startsWith(old + " ")) throw new Error(`lesson ${id}: expected old code ${old}, found "${row.title}"`);
  plan.push({ id, oldTitle: row.title, oldCode: old, code, title, newTitle: `${code} ${title}` });
}
console.log("Lessons:"); for (const p of plan) console.log(`  ${p.oldTitle}  ->  ${p.newTitle}`);

// bank topics
let bank = [];
for (let p = 0; ; p++) { const { data, error } = await db.from("bank_questions").select("id, topic").eq("course_id", CID).range(p * 1000, p * 1000 + 999); if (error) throw error; bank = bank.concat(data); if (data.length < 1000) break; }
const topicPlan = plan.map((p) => ({ ...p, n: bank.filter((b) => b.topic === p.oldTitle).length }));
console.log("Bank topics:"); for (const p of topicPlan) console.log(`  ${p.n} rows  ${p.oldTitle} -> ${p.newTitle}`);
const orphan = [...new Set(bank.map((b) => b.topic))].filter((t) => !plan.some((p) => p.oldTitle === t));
if (orphan.length) console.log("  (topics not matched, left alone):", orphan);

// assignments
const { data: asg, error: ae } = await db.from("assignments").select("id, title, free_preview").eq("course_id", CID);
if (ae) throw ae;
const asgPlan = [];
for (const p of plan) {
  const a = asg.find((x) => x.title === `Assignment ${p.oldTitle.replace(" ", " — ")}`);
  if (!a) { console.log(`  no assignment for ${p.oldTitle}`); continue; }
  asgPlan.push({ id: a.id, from: a.title, to: `Assignment ${p.code} — ${p.title}` });
}
console.log("Assignments:"); for (const a of asgPlan) console.log(`  ${a.from} -> ${a.to}`);

// worksheets
const { data: ws, error: we } = await db.from("worksheets").select("id, code, title, position, free_preview").eq("course_id", CID);
if (we) throw we;
const wsPlan = [];
for (const p of plan) {
  const w = ws.find((x) => x.code === p.oldCode);
  if (!w) { console.log(`  no worksheet for ${p.oldCode}`); continue; }
  const [a, b] = p.code.split(".").map(Number);
  wsPlan.push({ id: w.id, from: `${w.code} ${w.title}`, code: p.code, title: p.title, position: a * 1000 + b });
}
console.log("Worksheets:"); for (const w of wsPlan) console.log(`  ${w.from} -> ${w.code} ${w.title}`);

// free preview → new 1.1
const new11 = plan.find((p) => p.code === "1.1");
console.log(`Free preview: lesson/assignment/worksheet flags move to ${new11.newTitle}`);
if (!APPLY) { console.log("\nDry run only — re-run with --apply."); process.exit(0); }

const dir = path.resolve("scripts/mcf3m/backup");
fs.mkdirSync(dir, { recursive: true });
fs.writeFileSync(path.join(dir, `restructure-before.${new Date().toISOString().replace(/[:.]/g, "-")}.json`), JSON.stringify({ lessons, bank, asg, ws }, null, 1));
const ck = (r) => { if (r.error) throw r.error; };

for (const p of plan) ck(await db.from("lessons").update({ title: p.newTitle }).eq("id", p.id));
for (const p of topicPlan) if (p.n) ck(await db.from("bank_questions").update({ topic: p.newTitle }).eq("course_id", CID).eq("topic", p.oldTitle));
for (const a of asgPlan) ck(await db.from("assignments").update({ title: a.to }).eq("id", a.id));
// worksheets: two phases so a new code never collides with an old one still in place
for (const w of wsPlan) ck(await db.from("worksheets").update({ code: `tmp-${w.code}` }).eq("id", w.id));
for (const w of wsPlan) ck(await db.from("worksheets").update({ code: w.code, title: w.title, position: w.position }).eq("id", w.id));

// free preview
ck(await db.from("lessons").update({ free_preview: false }).eq("course_id", CID).neq("id", new11.id));
ck(await db.from("lessons").update({ free_preview: true }).eq("id", new11.id));
const a11 = asgPlan.find((a) => a.to.startsWith("Assignment 1.1 "));
ck(await db.from("assignments").update({ free_preview: false }).eq("course_id", CID));
if (a11) ck(await db.from("assignments").update({ free_preview: true }).eq("id", a11.id));
ck(await db.from("worksheets").update({ free_preview: false }).eq("course_id", CID));
ck(await db.from("worksheets").update({ free_preview: true }).eq("course_id", CID).eq("code", "1.1"));
console.log("Restructure applied. Now run positions.mjs --apply.");
