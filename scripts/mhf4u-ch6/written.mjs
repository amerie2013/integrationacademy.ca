// MHF4U chapter 6 written-response (long_answer) bank questions for printed chapter tests (Part C).
// Each question carries a figure (SVG uploaded to graph-images; paper tests print image_url).
//   node scripts/mhf4u-ch6/written.mjs           -> dry run
//   node scripts/mhf4u-ch6/written.mjs --apply   -> uploads figures, inserts rows not already in the bank (matched by prompt)
// Run --apply only after the chapter 6 lessons exist (it links each row to its lesson by title).
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";
import crypto from "crypto";
import { planeDoc, P } from "./bank/fig.mjs";

const T = { 1: "6.1 The Exponential Function and Its Inverse" };
const W = (t, difficulty, points, prompt, feedback, fig) => ({ topic: T[t], difficulty, points, prompt, feedback, kind: "long_answer", answer: null, choices: null, fig });
const lg = (b) => (x) => Math.log(x) / Math.log(b);
const YX = { m: 1, b: 0, color: "gray", dash: true };

export const WRITTEN = [
  W(1, "medium", 4, String.raw`The graph of $y=\left(\tfrac32\right)^x$ is shown. (a) Make a table of values for $x=-2,-1,0,1,2$ and the matching table for its inverse. (b) Sketch the inverse on the grid. (c) State the domain, range, intercept and asymptote of the inverse.`,
    String.raw`(a) $\tfrac49,\tfrac23,1,\tfrac32,\tfrac94$; inverse points $(\tfrac49,-2)$, $(\tfrac23,-1)$, $(1,0)$, $(\tfrac32,1)$, $(\tfrac94,2)$. (b) reflection in $y=x$, increasing, hugging the y-axis as $x\to0^+$. (c) domain $x>0$, range $\mathbb R$, x-intercept 1, VA $x=0$. [1, 1, 2.]`,
    planeDoc({ view: { xmin: -3, xmax: 5, ymin: -3, ymax: 5 }, lines: [YX], curves: [{ f: (x) => 1.5 ** x, color: "blue" }], points: [P(0, 1), P(2, 2.25)], step: { x: 1, y: 1 } })),
  W(1, "hard", 4, String.raw`For $f(x)=4\cdot2^x-2$: (a) find the inverse with the power isolated; (b) state its domain, range and vertical asymptote; (c) find the exact intercepts of the inverse; (d) sketch $f$ and its inverse on the grid and explain how the asymptotes are related.`,
    String.raw`(a) $x=4\cdot2^y-2\Rightarrow2^y=\tfrac{x+2}4$. (b) domain $x>-2$, range $\mathbb R$, VA $x=-2$. (c) $f(0)=2$ → inverse x-intercept $(2,0)$; $f(x)=0\Rightarrow2^x=\tfrac12\Rightarrow x=-1$ → inverse y-intercept $(0,-1)$. (d) mirror images in $y=x$; the horizontal asymptote $y=-2$ of $f$ reflects to $x=-2$. [1, 1, 1, 1.]`,
    planeDoc({ view: { xmin: -4, xmax: 8, ymin: -4, ymax: 8 }, lines: [YX], step: { x: 1, y: 1 } })),
];

const APPLY = process.argv.includes("--apply");
if (process.argv[1] && import.meta.url.endsWith(process.argv[1].replace(/\\/g, "/").split("/").pop())) {
  const env = {};
  for (const line of readFileSync(".env.local", "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
  const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });
  const cid = (await db.from("courses").select("id").eq("code", "MHF4U").single()).data.id;
  const { data: lessons } = await db.from("lessons").select("id, title").eq("course_id", cid);
  const missing = [...new Set(WRITTEN.map((w) => w.topic))].filter((t) => !lessons.some((l) => l.title === t));
  const { data: existing } = await db.from("bank_questions").select("prompt").eq("course_id", cid).eq("kind", "long_answer");
  const have = new Set((existing ?? []).map((r) => r.prompt));
  const todo = WRITTEN.filter((w) => !have.has(w.prompt));
  console.log(`${WRITTEN.length} written questions; ${todo.length} not yet in the bank; ${WRITTEN.reduce((s, r) => s + r.points, 0)} marks; ${WRITTEN.filter((w) => w.fig).length} with figures`);
  if (missing.length) console.log("lessons not loaded yet:", missing);
  if (!APPLY) { console.log("Dry run — use --apply."); process.exit(0); }
  if (missing.length) { console.log("Load the lessons first."); process.exit(1); }
  for (const w of todo) {
    const key = `mhf4u-${w.topic.split(" ")[0].replace(".", "-")}/written-${crypto.createHash("sha1").update(w.fig).digest("hex").slice(0, 10)}.svg`;
    const up = await db.storage.from("graph-images").upload(key, Buffer.from(w.fig), { upsert: true, contentType: "image/svg+xml" });
    if (up.error) throw up.error;
    const image_url = db.storage.from("graph-images").getPublicUrl(key).data.publicUrl;
    const { fig, ...row } = w;
    const r = await db.from("bank_questions").insert({ ...row, image_url, course_id: cid, lesson_id: lessons.find((l) => l.title === w.topic).id });
    if (r.error) throw r.error;
  }
  console.log(`inserted ${todo.length}`);
}
