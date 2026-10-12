// Publish the rebuilt MPM2D 4.1 "Introducing Quadratic Relations" material.
//   node scripts/mpm2d-4_1/publish41.mjs            -> dry run (read-only)
//   node scripts/mpm2d-4_1/publish41.mjs --apply    -> update the 4.1 lesson, replace the 4.1 bank (with figures), refresh the 4.1 worksheet row content
// Then build + upload the PDF:
//   node scripts/mpm2d-worksheets/build.mjs scripts/mpm2d-worksheets/content/u4.mjs ; git checkout -- scripts/mpm2d-worksheets/4.{2,3,4,5,6}.tex
//   node scripts/mpm2d-worksheet-publish.mjs 4.1
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { createHash } from "crypto";
import { lessonBlocks, FULL_TITLE } from "./lesson41.mjs";
import { bank41 } from "./bank41.mjs";
import { W41, LEARN41 } from "./ws41.mjs";

const APPLY = process.argv.includes("--apply");
const __dirname = dirname(fileURLToPath(import.meta.url));
const env = {};
for (const line of readFileSync(join(__dirname, "..", "..", ".env.local"), "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });
const must = (r, what) => { if (r.error) throw new Error(`${what}: ${r.error.message}`); return r.data; };
const say = (m) => console.log((APPLY ? "" : "[dry] ") + m);

const cid = must(await db.from("courses").select("id").eq("code", "MPM2D").single(), "course").id;
const lessons = must(await db.from("lessons").select("id, title").eq("course_id", cid).eq("title", FULL_TITLE), "lesson");
if (lessons.length !== 1) throw new Error(`expected exactly one lesson "${FULL_TITLE}", found ${lessons.length}`);
const lesson = lessons[0];
const sheet = must(await db.from("worksheets").select("id, code, title").eq("course_id", cid).eq("code", "4.1"), "worksheet")[0];
if (!sheet) throw new Error("MPM2D worksheet 4.1 not found");
const questions = bank41();
const old = (await db.from("bank_questions").select("id", { count: "exact", head: true }).eq("course_id", cid).eq("topic", FULL_TITLE)).count;
const kinds = questions.reduce((a, q) => ((a[q.kind] = (a[q.kind] || 0) + 1), a), {});
const blocks = lessonBlocks();
const content = {
  format: "tex", title: W41.title ?? "", unit: W41.unit ?? "", intro: W41.intro ?? "", ideas: W41.ideas ?? [], learn: LEARN41,
  examples: W41.examples.map((e) => ({ t: e.t ?? "", body: e.body ?? "" })),
  questions: W41.questions.map((q) => ({ ask: q.ask ?? "", grid: !!q.grid, ws: q.ws ?? "", challenge: !!q.challenge })),
  answers: W41.answers ?? [],
};

say(`lesson "${lesson.title}": replace blocks (${blocks.length} html block, ${blocks[0].html.length} chars)`);
say(`bank "${FULL_TITLE}": replace ${old} questions with ${questions.length} (${JSON.stringify(kinds)}), ${questions.filter((q) => q.image).length} with graph images`);
say(`worksheet 4.1 row (${sheet.title}): content -> ${content.examples.length} examples, ${content.questions.length} questions (PDF uploaded separately)`);
if (!APPLY) { console.log("\nDry run only — nothing was written. Re-run with --apply."); process.exit(0); }

const urls = new Map();
for (const [i, q] of questions.entries()) {
  if (!q.image) continue;
  const path = `mpm2d-4-1/q${String(i + 1).padStart(2, "0")}-${createHash("md5").update(q.image).digest("hex").slice(0, 8)}.svg`;
  const up = await db.storage.from("graph-images").upload(path, Buffer.from(q.image, "utf8"), { contentType: "image/svg+xml", upsert: true });
  if (up.error) throw new Error(`upload ${path}: ${up.error.message}`);
  urls.set(i, db.storage.from("graph-images").getPublicUrl(path).data.publicUrl);
}
const rows = questions.map((q, i) => ({ course_id: cid, lesson_id: lesson.id, topic: FULL_TITLE, difficulty: q.difficulty, kind: q.kind, prompt: q.prompt, image_url: urls.get(i) ?? null, choices: q.choices ?? null, answer: q.answer ?? null, tolerance: q.tolerance ?? null, points: q.points ?? 1, feedback: q.feedback ?? null }));
must(await db.from("lessons").update({ blocks }).eq("id", lesson.id), "lesson update");
must(await db.from("bank_questions").delete().eq("course_id", cid).eq("topic", FULL_TITLE), "bank delete");
for (let i = 0; i < rows.length; i += 200) must(await db.from("bank_questions").insert(rows.slice(i, i + 200)), "bank insert");
must(await db.from("worksheets").update({ content }).eq("id", sheet.id), "worksheet content");
const n = (await db.from("bank_questions").select("id", { count: "exact", head: true }).eq("course_id", cid).eq("topic", FULL_TITLE)).count;
console.log(`\nDone. Lesson updated, bank has ${n} questions (${urls.size} with figures), worksheet row content refreshed. Now upload the PDF (see header).`);
