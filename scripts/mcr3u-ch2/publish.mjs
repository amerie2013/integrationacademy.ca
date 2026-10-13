// Publish the rebuilt MCR3U chapter 2 (2.1–2.5): lessons, 60-question banks (with figures), assignments, worksheet rows.
//   node scripts/mcr3u-ch2/publish.mjs                 -> dry run (read-only, prints what would change)
//   node scripts/mcr3u-ch2/publish.mjs --apply         -> write to the database
//   node scripts/mcr3u-ch2/publish.mjs --apply --only 2.3   -> one topic
// Then build + upload the PDFs:
//   node scripts/mcr3u-worksheets/build.mjs scripts/mcr3u-ch2/ws-content.mjs
//   node scripts/mcr3u-worksheet-publish.mjs 2.
// Safe by design: only the five 2.x lessons / banks / assignments / worksheet rows are touched. Lesson rows keep their ids,
// assignment rows are updated in place (never deleted — submissions reference them).
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { createHash } from "crypto";
import * as t21 from "./t2_1.mjs";
import * as t22 from "./t2_2.mjs";
import * as t23 from "./t2_3.mjs";
import * as t24 from "./t2_4.mjs";
import * as t25 from "./t2_5.mjs";

const APPLY = process.argv.includes("--apply");
const only = process.argv.includes("--only") ? process.argv[process.argv.indexOf("--only") + 1] : null;
const TOPICS = [[t21, "W21", "LEARN21"], [t22, "W22", "LEARN22"], [t23, "W23", "LEARN23"], [t24, "W24", "LEARN24"], [t25, "W25", "LEARN25"]].filter(([m]) => !only || m.CODE === only);

const __dirname = dirname(fileURLToPath(import.meta.url));
const env = {};
for (const line of readFileSync(join(__dirname, "..", "..", ".env.local"), "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });
const must = (r, what) => { if (r.error) throw new Error(`${what}: ${r.error.message}`); return r.data; };
const say = (m) => console.log((APPLY ? "" : "[dry] ") + m);

const cid = must(await db.from("courses").select("id").eq("code", "MCR3U").single(), "course").id;
const plan = [];
for (const [m, wKey, lKey] of TOPICS) {
  const lessons = must(await db.from("lessons").select("id, title").eq("course_id", cid).eq("title", m.FULL_TITLE), `lesson ${m.CODE}`);
  if (lessons.length !== 1) throw new Error(`expected exactly one lesson "${m.FULL_TITLE}", found ${lessons.length}`);
  const asg = must(await db.from("assignments").select("id, title").eq("course_id", cid).eq("title", m.ASSIGNMENT.title), `assignment ${m.CODE}`)[0] ?? null;
  const sheet = must(await db.from("worksheets").select("id, code, title").eq("course_id", cid).eq("code", m.CODE), `worksheet ${m.CODE}`)[0] ?? null;
  if (!sheet) throw new Error(`MCR3U worksheet ${m.CODE} not found`);
  const subs = asg ? (await db.from("submissions").select("id", { count: "exact", head: true }).eq("assignment_id", asg.id)).count : 0;
  const old = (await db.from("bank_questions").select("id", { count: "exact", head: true }).eq("course_id", cid).eq("topic", m.FULL_TITLE)).count;
  const W = m[wKey], questions = m.bank();
  const blocks = m.lessonBlocks();
  const content = {
    format: "tex", title: W.title ?? "", unit: W.unit ?? "", intro: W.intro ?? "", ideas: W.ideas ?? [], learn: m[lKey],
    examples: W.examples.map((e) => ({ t: e.t ?? "", body: e.body ?? "" })),
    questions: W.questions.map((q) => ({ ask: q.ask ?? "", grid: !!q.grid, ws: q.ws ?? "", challenge: !!q.challenge })),
    answers: W.answers ?? [],
  };
  const kinds = questions.reduce((a, q) => ((a[q.kind] = (a[q.kind] || 0) + 1), a), {});
  plan.push({ m, lesson: lessons[0], asg, sheet, questions, blocks, content });
  say(`${m.FULL_TITLE}`);
  say(`   lesson: replace blocks (${blocks[0].html.length} chars)`);
  say(`   bank: replace ${old} questions with ${questions.length} (${JSON.stringify(kinds)}), ${questions.filter((q) => q.image).length} figures`);
  say(`   assignment: ${asg ? `update in place (submissions: ${subs})` : "insert new"}`);
  say(`   worksheet row: content -> ${content.examples.length} examples, ${content.questions.length} questions (PDF uploaded separately)`);
}
if (!APPLY) { console.log("\nDry run only — nothing was written. Re-run with --apply."); process.exit(0); }

for (const { m, lesson, asg, sheet, questions, blocks, content } of plan) {
  const urls = new Map();
  for (const [i, q] of questions.entries()) {
    if (!q.image) continue;
    const path = `mcr3u-${m.CODE.replace(".", "-")}/q${String(i + 1).padStart(2, "0")}-${createHash("md5").update(q.image).digest("hex").slice(0, 8)}.svg`;
    const up = await db.storage.from("graph-images").upload(path, Buffer.from(q.image, "utf8"), { contentType: "image/svg+xml", upsert: true });
    if (up.error) throw new Error(`upload ${path}: ${up.error.message}`);
    urls.set(i, db.storage.from("graph-images").getPublicUrl(path).data.publicUrl);
  }
  const rows = questions.map((q, i) => ({ course_id: cid, lesson_id: lesson.id, topic: m.FULL_TITLE, difficulty: q.difficulty, kind: q.kind, prompt: q.prompt, image_url: urls.get(i) ?? null, choices: q.choices ?? null, answer: q.answer ?? null, tolerance: q.tolerance ?? null, points: q.points ?? 1, feedback: q.feedback ?? null }));
  must(await db.from("lessons").update({ blocks }).eq("id", lesson.id), `lesson update ${m.CODE}`);
  must(await db.from("bank_questions").delete().eq("course_id", cid).eq("topic", m.FULL_TITLE), `bank delete ${m.CODE}`);
  for (let i = 0; i < rows.length; i += 200) must(await db.from("bank_questions").insert(rows.slice(i, i + 200)), `bank insert ${m.CODE}`);
  if (asg) must(await db.from("assignments").update({ description: m.ASSIGNMENT.description, published: true }).eq("id", asg.id), `assignment update ${m.CODE}`);
  else must(await db.from("assignments").insert({ course_id: cid, title: m.ASSIGNMENT.title, description: m.ASSIGNMENT.description, published: true }), `assignment insert ${m.CODE}`);
  must(await db.from("worksheets").update({ content }).eq("id", sheet.id), `worksheet content ${m.CODE}`);
  const n = (await db.from("bank_questions").select("id", { count: "exact", head: true }).eq("course_id", cid).eq("topic", m.FULL_TITLE)).count;
  console.log(`${m.FULL_TITLE}: lesson updated, ${n} bank questions (${urls.size} figures), assignment + worksheet row refreshed`);
}
console.log("\nDone. Now upload the PDFs (see header).");
