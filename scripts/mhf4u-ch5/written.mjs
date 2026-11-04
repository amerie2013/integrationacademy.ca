// MHF4U chapter 5 written-response (long_answer) bank questions for printed chapter tests (Part C).
// Each question carries a figure (SVG uploaded to graph-images; paper tests print image_url).
//   node scripts/mhf4u-ch5/written.mjs           -> dry run
//   node scripts/mhf4u-ch5/written.mjs --apply   -> uploads figures, inserts rows not already in the bank (matched by prompt)
// Run --apply only after the chapter 5 lessons exist and renumber5.mjs has run (it links each row to its lesson by title).
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";
import crypto from "crypto";
import { planeDoc } from "./bank/fig.mjs";
import { TG, UC } from "./trigfig.mjs";

const S = String.raw;
const P = Math.PI;
const T = {
  1: "5.1 Graphs of Sine, Cosine and Tangent", 2: "5.2 Graphs of Reciprocal Trigonometric Functions", 3: "5.3 Sinusoidal Functions",
  4: "5.4 Solving Trigonometric Equations", 5: "5.5 Trigonometric Models and Rates of Change",
};
const W = (t, difficulty, points, prompt, feedback, fig) => ({ topic: T[t], difficulty, points, prompt, feedback, kind: "long_answer", answer: null, choices: null, fig });
const V = { xmin: -0.5, xmax: 6.8, ymin: -2, ymax: 2 };
const cut = (g) => (x) => (Math.abs(g(x)) < 0.07 ? NaN : 1 / g(x));
const vl = (xs) => ({ vlines: xs.map((x) => ({ x, color: "red", dash: true })) });

export const WRITTEN = [
  W(1, "medium", 4, S`The graphs of $y=\sin x$ and $y=\cos x$ are shown for $0\le x\le2\pi$. (a) Find the exact crossing points. (b) State where $\sin x>\cos x$. (c) Explain why the crossings are $\pi$ apart.`,
    S`(a) $\tan x=1$: $\left(\frac\pi4,\frac{\sqrt2}2\right)$, $\left(\frac{5\pi}4,-\frac{\sqrt2}2\right)$. (b) $\frac\pi4<x<\frac{5\pi}4$ (test $x=\frac\pi2$). (c) $\tan$ has period $\pi$. [2, 1, 1.]`,
    planeDoc(TG([[Math.sin, "violet"], [Math.cos, "green"]], V))),
  W(1, "hard", 4, S`(a) Show that $\tan(x+\pi)=\tan x$ using the unit circle. (b) State the asymptotes and zeros of $y=\tan x$ on $[-\pi,\pi]$. (c) How many solutions does $\tan x=-4$ have on $[-\pi,2\pi]$? Explain.`,
    S`(a) $\frac{-\sin x}{-\cos x}=\tan x$. (b) asymptotes $x=\pm\frac\pi2$; zeros $-\pi,0,\pi$. (c) $3$: one in each of $\left(-\frac\pi2,\frac\pi2\right)$, $\left(\frac\pi2,\frac{3\pi}2\right)$, $\left(\frac{3\pi}2,2\pi\right)$; on $\left(-\pi,-\frac\pi2\right)$ tangent is positive. [1, 1, 2.]`,
    planeDoc(UC(210, "x + π", [{ x: Math.cos(P / 6), y: 0.5, label: "x", color: "blue" }]))),
  W(2, "medium", 4, S`The graphs of $y=\sin x$ and $y=\csc x$ are shown. (a) Explain where the asymptotes of $y=\csc x$ come from. (b) Give its turning points on $(0,2\pi)$. (c) Solve $\csc x=-2$ on $[0,2\pi]$.`,
    S`(a) zeros of $\sin x$: $x=0,\pi,2\pi$. (b) $\left(\frac\pi2,1\right)$ min, $\left(\frac{3\pi}2,-1\right)$ max. (c) $\sin x=-\frac12$: $\frac{7\pi}6,\frac{11\pi}6$. [1, 1, 2.]`,
    planeDoc(TG([[Math.sin, "violet"], [cut(Math.sin), "red"]], { xmin: -0.5, xmax: 6.8, ymin: -4, ymax: 4 }, [], vl([0, P, 2 * P])))),
  W(2, "hard", 4, S`(a) State the domain and range of $y=3\sec x$. (b) Solve $\sec^2x=2$ on $[0,2\pi]$. (c) Explain why $\sec x=\frac12$ has no solution, using the range.`,
    S`(a) $x\ne\frac\pi2+n\pi$; $y\le-3$ or $y\ge3$. (b) $\cos x=\pm\frac{\sqrt2}2$: $\frac\pi4,\frac{3\pi}4,\frac{5\pi}4,\frac{7\pi}4$. (c) range of sec is $|y|\ge1$ ($\cos x=2$ impossible). [1, 2, 1.]`,
    planeDoc(TG([[Math.cos, "green"], [cut(Math.cos), "red"]], { xmin: -0.5, xmax: 6.8, ymin: -4, ymax: 4 }, [], vl([P / 2, 1.5 * P])))),
  W(3, "medium", 4, S`The graph shows a sinusoid with a maximum at $\left(\frac\pi6,5\right)$ and the next minimum at $\left(\frac{2\pi}3,-1\right)$. (a) Find the amplitude, axis and period. (b) Write a cosine equation. (c) Write a sine equation.`,
    S`(a) $3$; $y=2$; $\pi$. (b) $y=3\cos\left(2\left(x-\frac\pi6\right)\right)+2$. (c) $y=3\sin\left(2\left(x+\frac\pi{12}\right)\right)+2$. [2, 1, 1.]`,
    planeDoc(TG([[(x) => 3 * Math.cos(2 * (x - P / 6)) + 2, "violet"]], { xmin: -0.5, xmax: 6.8, ymin: -2, ymax: 6 }))),
  W(3, "hard", 4, S`(a) Describe the transformations that map $y=\sin x$ onto $y=-2\sin(3x+\pi)+4$. (b) Give the range and period. (c) Find the first maximum with $x>0$.`,
    S`(a) $3x+\pi=3\left(x+\frac\pi3\right)$: reflect, stretch 2, compress $\frac13$, left $\frac\pi3$, up 4. (b) $[2,6]$; $\frac{2\pi}3$. (c) $\sin(3x+\pi)=-1$: $3x+\pi=\frac{3\pi}2$, $x=\frac\pi6$, point $\left(\frac\pi6,6\right)$. [2, 1, 1.]`,
    planeDoc(TG([[(x) => -2 * Math.sin(3 * x + P) + 4, "violet"]], { xmin: -0.5, xmax: 6.8, ymin: 0, ymax: 7 }))),
  W(4, "medium", 4, S`Solve $2\sin^2x-\sin x-1=0$ for $0\le x\le2\pi$. Show the factoring, and check one solution in the original equation. The graph of $y=\sin x$ is given.`,
    S`$(2\sin x+1)(\sin x-1)=0$: $\sin x=1\Rightarrow\frac\pi2$; $\sin x=-\frac12\Rightarrow\frac{7\pi}6,\frac{11\pi}6$. Check $\frac\pi2$: $2-1-1=0$. [1, 2, 1.]`,
    planeDoc(TG([[Math.sin, "violet"], [() => -0.5, "blue"], [() => 1, "blue"]], V))),
  W(4, "hard", 4, S`(a) Solve $\sin2x=\sqrt3\cos x$ for $0\le x\le2\pi$. (b) Explain why dividing by $\cos x$ would lose solutions. (c) Write the general solution.`,
    S`(a) $\cos x(2\sin x-\sqrt3)=0$: $\frac\pi3,\frac\pi2,\frac{2\pi}3,\frac{3\pi}2$. (b) the solutions with $\cos x=0$ disappear. (c) $x=\frac\pi2+n\pi$, $x=\frac\pi3+2n\pi$, $x=\frac{2\pi}3+2n\pi$. [2, 1, 1.]`,
    planeDoc(TG([[(x) => Math.sin(2 * x), "violet"], [(x) => Math.sqrt(3) * Math.cos(x), "green"]], { xmin: -0.5, xmax: 6.8, ymin: -2, ymax: 2 }))),
  W(5, "medium", 4, S`A Ferris wheel has radius 16 m, centre 18 m above the ground and turns every 48 s. A rider boards at the bottom at $t=0$. (a) Write $h(t)$. (b) Find $h(12)$ and $h(20)$. (c) Find the average rate of change from $t=12$ to $t=20$.`,
    S`(a) $h=-16\cos\left(\frac\pi{24}t\right)+18$. (b) $18$; $-16\cos\frac{5\pi}6+18\approx31.86$. (c) $\frac{31.86-18}8\approx1.73$ m/s. [2, 1, 1.]`,
    planeDoc(TG([[(t) => -16 * Math.cos((P / 24) * t) + 18, "violet"]], { xmin: -2, xmax: 100, ymin: 0, ymax: 36 }, [], { step: { x: 10, y: 4 }, xlabel: "t (s)" }))),
  W(5, "hard", 4, S`The depth of a harbour is $d(t)=2.5\cos\left(\frac\pi6(t-3)\right)+6$ m, $t$ hours after midnight. (a) Find the high and low depths and their first times. (b) A ship needs 7.25 m. Find when it can enter during $0\le t\le12$. (c) Estimate the rate of change at $t=6$.`,
    S`(a) $8.5$ m at $t=3$; $3.5$ m at $t=9$. (b) $\cos\ge\frac12$: $|t-3|\le2$, so $1\le t\le5$. (c) axis crossing, falling: $-2.5\cdot\frac\pi6\approx-1.31$ m/h. [1, 2, 1.]`,
    planeDoc(TG([[(t) => 2.5 * Math.cos((P / 6) * (t - 3)) + 6, "violet"], [() => 7.25, "blue"]], { xmin: -0.5, xmax: 13, ymin: 0, ymax: 10 }, [], { step: { x: 1, y: 1 }, xlabel: "t (h)" }))),
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
