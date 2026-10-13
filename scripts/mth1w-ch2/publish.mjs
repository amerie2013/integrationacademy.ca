// Publish the rebuilt MTH1W 2.4 "Creating & Solving Equations" material.
//   node scripts/mth1w-ch2/publish.mjs            -> dry run (read-only)
//   node scripts/mth1w-ch2/publish.mjs --apply    -> replace the 2.4 bank, update the 2.4 assignment, fix + refill the equations worksheet row
// Then upload the PDF:  WS_DATA=./mth1w-ch2/ws-data.mjs node scripts/_wsgen.mjs
// The equations worksheet was mislabelled "2.3"; it is renumbered to 2.4 so it matches lesson 2.4. The lesson itself is untouched.
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { CODE, TITLE, FULL_TITLE, ASSIGNMENT, bank, WORKSHEET_CONTENT } from "./t2_4.mjs";

const APPLY = process.argv.includes("--apply");
const __dirname = dirname(fileURLToPath(import.meta.url));
const env = {};
for (const line of readFileSync(join(__dirname, "..", "..", ".env.local"), "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });
const must = (r, what) => { if (r.error) throw new Error(`${what}: ${r.error.message}`); return r.data; };
const say = (m) => console.log((APPLY ? "" : "[dry] ") + m);

const cid = must(await db.from("courses").select("id").eq("code", "MTH1W").single(), "course").id;
const lesson = must(await db.from("lessons").select("id, title").eq("course_id", cid).eq("title", FULL_TITLE), "lesson")[0];
if (!lesson) throw new Error(`lesson "${FULL_TITLE}" not found`);
const asg = must(await db.from("assignments").select("id, title").eq("course_id", cid).eq("title", ASSIGNMENT.title), "assignment")[0];
if (!asg) throw new Error(`assignment "${ASSIGNMENT.title}" not found`);
const subs = (await db.from("submissions").select("id", { count: "exact", head: true }).eq("assignment_id", asg.id)).count;
const sheets = must(await db.from("worksheets").select("id, code, title").eq("course_id", cid).or(`code.eq.2.3,code.eq.2.4`), "worksheets");
const sheet = sheets.find((s) => s.code === "2.4" && s.title === TITLE) ?? sheets.find((s) => s.code === "2.3" && s.title === TITLE);
const rows = bank().map((q) => ({ course_id: cid, lesson_id: lesson.id, topic: FULL_TITLE, difficulty: q.difficulty, kind: q.kind, prompt: q.prompt, choices: q.choices ?? null, answer: q.answer ?? null, tolerance: q.tolerance ?? null, points: q.points ?? 1, feedback: q.feedback ?? null }));
const kinds = rows.reduce((a, r) => ((a[r.kind] = (a[r.kind] || 0) + 1), a), {});
const old = (await db.from("bank_questions").select("id", { count: "exact", head: true }).eq("course_id", cid).eq("topic", FULL_TITLE)).count;

say(`lesson 2.4 (unchanged): ${lesson.title}`);
say(`bank "${FULL_TITLE}": replace ${old} existing questions with ${rows.length} (${JSON.stringify(kinds)})`);
say(`assignment "${asg.title}": update the 10 questions (existing submissions: ${subs})`);
say(`worksheet row: ${sheet ? `code ${sheet.code} -> 2.4, content replaced` : "none found (will insert)"}`);
if (!APPLY) { console.log("\nDry run only — nothing was written. Re-run with --apply."); process.exit(0); }

must(await db.from("bank_questions").delete().eq("course_id", cid).eq("topic", FULL_TITLE), "bank delete");
for (let i = 0; i < rows.length; i += 200) must(await db.from("bank_questions").insert(rows.slice(i, i + 200)), "bank insert");
must(await db.from("assignments").update({ description: ASSIGNMENT.description, published: true }).eq("id", asg.id), "assignment update");
const fields = { code: CODE, title: TITLE, position: 204, content: WORKSHEET_CONTENT, published: true };
if (sheet) must(await db.from("worksheets").update(fields).eq("id", sheet.id), "worksheet update");
else must(await db.from("worksheets").insert({ course_id: cid, ...fields }), "worksheet insert");
const n = (await db.from("bank_questions").select("id", { count: "exact", head: true }).eq("course_id", cid).eq("topic", FULL_TITLE)).count;
console.log(`\nDone. Bank now has ${n} questions for 2.4. Now upload the PDF: WS_DATA=./mth1w-ch2/ws-data.mjs node scripts/_wsgen.mjs`);
