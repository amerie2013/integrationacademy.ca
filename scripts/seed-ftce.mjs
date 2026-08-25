// Seeds the FTCE Mathematics 6-12 certification course.
// SINGLE-SOURCE design: each lesson's content lives in its worksheet module
// (scripts/worksheets-ftce/<code>.mjs). This script (a) upserts the course row,
// (b) builds the on-site LESSON from each module (lesson[] + examples[] +
// questions[]), converting worksheet "$...$" math to the lesson renderer's
// "\( ... \)", and (c) seeds assignments from ftce-assignments.mjs.
// Delete-then-insert for lessons+assignments (safe to re-run).
//   node scripts/seed-ftce.mjs
import { createClient } from "@supabase/supabase-js";
import { readFileSync, readdirSync } from "fs";
import { fileURLToPath, pathToFileURL } from "url";
import { dirname, join } from "path";
import { ASSIGN } from "./ftce-assignments.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const env = {};
for (const line of readFileSync(join(__dirname, "..", ".env.local"), "utf8").split("\n")) {
  const m = line.match(/^([A-Z0-9_]+)=(.*)$/);
  if (m) env[m[1]] = m[2].trim();
}
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });

const CODE = "FTCEMATH612";
const TITLE = "FTCE Mathematics 6–12";
const LEVEL = "certification";
const DESC = "Complete preparation for the Florida Teacher Certification Examination (FTCE) Mathematics 6–12. Fifteen competency units — Algebra, Functions, Geometry, Trigonometry, Statistics, Probability, Discrete Mathematics, Calculus, Number Sense, and the five process competencies (Communication, Reasoning, Connections, Instruction, Assessment) — taught at certification depth, plus full-length diagnostic and practice tests. Every topic is worked hard, the way the exam demands.";

const SRC = join(__dirname, "worksheets-ftce");
const rank = (code) => { const [a, b] = code.split("."); return Number(a) * 1000 + Number(b || 0); };

// "$...$" -> "\( ... \)", "$$...$$" -> "\[ ... \]", literal "\$" -> "$".
function toTex(s) {
  return String(s)
    .replace(/\$\$([^$]+?)\$\$/g, (_, m) => `\\[${m}\\]`)
    .replace(/(?<!\\)\$([^$]+?)\$/g, (_, m) => `\\(${m}\\)`)
    .replace(/\\\$/g, "$");
}

let bidN = 0;
const bid = () => `ftce-${(++bidN).toString(36)}-${rank ? "b" : "b"}`;

const EX = `class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const PR = `class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"`;

function lessonHtml(m) {
  const parts = [];
  parts.push(`<div class="lecture-box">`);
  parts.push(`<h1>${toTex(`${m.code} ${m.title}`)}</h1>`);
  if (m.intro) parts.push(`<p><strong>Overview.</strong> ${toTex(m.intro)}</p>`);
  if (m.lesson?.length) {
    for (const [h, b] of m.lesson) parts.push(`<h2>📌 ${toTex(h)}</h2>\n  <p>${toTex(b)}</p>`);
  }
  if (m.examples?.length) {
    parts.push(`<h2>🔵 Examples</h2>`);
    for (const [t, prompt, soln] of m.examples) {
      parts.push(`<div ${EX}><h3>${toTex(t)}</h3><p>${toTex(prompt)}</p><div class="solution"><strong>Solution.</strong> ${toTex(soln)}</div></div>`);
    }
  }
  if (m.questions?.length) {
    parts.push(`<h2>🟡 Practice Questions</h2>`);
    m.questions.forEach(([t, prompt, ans], i) => {
      parts.push(`<div ${PR}><h3>${toTex(t) || `Question ${i + 1}`}</h3><p>${toTex(prompt)}</p><details><summary>View answer</summary><div class="solution">${toTex(ans)}</div></details></div>`);
    });
  }
  parts.push(`</div>`);
  return parts.join("\n  ");
}

async function run() {
  // teacher_id: reuse an existing course's teacher (shared admin/instructor).
  const { data: anyCourse } = await db.from("courses").select("teacher_id").not("teacher_id", "is", null).limit(1).single();
  const teacherId = anyCourse?.teacher_id;
  if (!teacherId) throw new Error("No existing course to borrow a teacher_id from.");

  // Upsert course.
  let { data: course } = await db.from("courses").select("id").eq("code", CODE).maybeSingle();
  if (course) {
    await db.from("courses").update({ title: TITLE, description: DESC, level: LEVEL, published: true }).eq("id", course.id);
  } else {
    const ins = await db.from("courses").insert({ teacher_id: teacherId, code: CODE, title: TITLE, description: DESC, level: LEVEL, published: true }).select("id").single();
    if (ins.error) throw ins.error;
    course = ins.data;
  }
  console.log("Course:", course.id, `(${CODE})`);

  // Rebuild lessons from worksheet modules.
  const files = readdirSync(SRC).filter((f) => /^\d/.test(f) && f.endsWith(".mjs")).sort((a, b) => rank(a.replace(/\.mjs$/, "")) - rank(b.replace(/\.mjs$/, "")));
  await db.from("lessons").delete().eq("course_id", course.id);
  let n = 0;
  for (const f of files) {
    const m = (await import(pathToFileURL(join(SRC, f)).href + `?t=${Date.now()}`)).default;
    const blocks = [{ id: bid(), type: "html", html: lessonHtml(m) }];
    const { error } = await db.from("lessons").insert({ course_id: course.id, title: `${m.code} ${m.title}`, blocks, position: rank(m.code), published: true });
    if (error) throw error;
    console.log(`  ${m.code} ${m.title}`);
    n++;
  }
  console.log(`Seeded ${n} FTCE lessons.`);

  // Assignments, keyed by code in ftce-assignments.mjs. assignments.id is
  // referenced by submissions.assignment_id ON DELETE CASCADE, so this upserts
  // by title instead of deleting — a delete-then-insert here would destroy
  // any student's submitted work.
  const codes = Object.keys(ASSIGN).sort((a, b) => rank(a) - rank(b));
  let a = 0;
  for (const code of codes) {
    const ad = ASSIGN[code];
    const existingA = await db.from("assignments").select("id").eq("course_id", course.id).eq("title", ad.title).maybeSingle();
    const { error } = existingA.data
      ? await db.from("assignments").update({ description: ad.description, published: true }).eq("id", existingA.data.id)
      : await db.from("assignments").insert({ course_id: course.id, title: ad.title, description: ad.description, published: true });
    if (error) throw error;
    a++;
  }
  console.log(`Seeded ${a} FTCE assignments.`);
}

run().catch((e) => { console.error(e); process.exit(1); });
