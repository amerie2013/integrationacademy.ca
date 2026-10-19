// MCV4U chapter 1 written-response (long_answer) bank questions for printed chapter tests (Part C).
// Each question carries a figure (SVG uploaded to graph-images; paper tests print image_url).
//   node scripts/mcv4u-ch1/written.mjs           -> dry run
//   node scripts/mcv4u-ch1/written.mjs --apply   -> uploads figures, inserts rows not already in the bank (matched by prompt)
// Run --apply only after the chapter 1 lessons exist and restructure.mjs has run (it links each row to its lesson by title).
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";
import crypto from "crypto";
import { planeDoc, P, H } from "./bank/fig.mjs";

const T = {
  1: "1.1 Rates of Change and the Slope of a Curve", 2: "1.2 Rates of Change Using Equations", 3: "1.3 Limits",
  4: "1.4 Limits and Continuity", 5: "1.5 Introduction to Derivatives",
};
const W = (t, difficulty, points, prompt, feedback, fig) => ({ topic: T[t], difficulty, points, prompt, feedback, kind: "long_answer", answer: null, choices: null, fig });

export const WRITTEN = [
  W(1, "medium", 4, String.raw`A sprinter's distance (m) after $t$ s is plotted for $t=0,1,\ldots,5$. (a) Find the average speed on $[1,4]$. (b) Estimate the speed at $t=3$ using the interval $[2,4]$. (c) Explain why a centred interval gives a good estimate.`,
    String.raw`Data $0,3,10,21,36,55$. (a) $\frac{36-3}{3}=11$ m/s. (b) $\frac{36-10}{2}=13$ m/s. (c) Errors on the two sides tend to cancel; for these data ($d=2t^2+t$) the centred estimate is exact. [1, 2, 1.]`,
    planeDoc({ view: { xmin: -0.3, xmax: 5.5, ymin: -3, ymax: 60 }, points: [P(0, 0), P(1, 3), P(2, 10), P(3, 21), P(4, 36), P(5, 55)], step: { x: 1, y: 5 }, xlabel: "t (s)", ylabel: "d (m)" })),
  W(1, "hard", 4, String.raw`The graph of $f(x)=|x^2-2x|$ is shown. (a) At which x-values does $f$ have no tangent? (b) Find the one-sided slopes at $x=2$. (c) Find the average rate of change on $[0,3]$.`,
    String.raw`(a) Corners where $x^2-2x$ changes sign: $x=0$ and $x=2$. (b) Right of 2, $f=x^2-2x$: slope $2(2)-2=2$. Left of 2, $f=2x-x^2$: slope $2-2(2)=-2$. (c) $\frac{f(3)-f(0)}{3}=\frac{3}{3}=1$. [1, 2, 1.]`,
    planeDoc({ view: { xmin: -1.5, xmax: 3.5, ymin: -1, ymax: 5 }, curves: [{ f: (x) => Math.abs(x * x - 2 * x), color: "violet" }], step: { x: 0.5, y: 1 } })),
  W(2, "medium", 4, String.raw`For $f(x)=x^2-3x+2$ (graph shown): (a) write and simplify $\frac{f(2+h)-f(2)}{h}$; (b) evaluate it for $h=0.1$ and $h=0.01$; (c) find the instantaneous rate at $x=2$ and the equation of the tangent.`,
    String.raw`(a) $\frac{(4+4h+h^2)-(6+3h)+2-0}{h}=\frac{h+h^2}{h}=1+h$. (b) $1.1$, $1.01$. (c) $1$; tangent through $(2,0)$: $y=x-2$. [2, 1, 1.]`,
    planeDoc({ view: { xmin: -1, xmax: 4, ymin: -1, ymax: 6 }, curves: [{ f: (x) => x * x - 3 * x + 2, color: "violet" }], points: [P(2, 0)], step: { x: 0.5, y: 1 } })),
  W(2, "hard", 4, String.raw`For $f(x)=\frac1{x+2}$: (a) find the instantaneous rate of change at $x=0$ from the difference quotient; (b) write the equation of the tangent at $x=0$; (c) find where the tangent crosses the x-axis, and draw it.`,
    String.raw`(a) $\frac{\frac1{2+h}-\frac12}{h}=\frac{-1}{2(2+h)}\to-\frac14$. (b) Point $\left(0,\frac12\right)$: $y=-\frac14x+\frac12$. (c) $0=-\frac14x+\frac12\Rightarrow x=2$. [2, 1, 1.]`,
    planeDoc({ view: { xmin: -1.5, xmax: 4, ymin: -0.5, ymax: 2 }, curves: [{ f: (x) => 1 / (x + 2), a: -1.5, b: 4, color: "violet" }], points: [P(0, 0.5)], step: { x: 0.5, y: 0.5 } })),
  W(3, "medium", 4, String.raw`Use the graph of $f$ to find (a) $\lim_{x\to1^-}f(x)$ and $\lim_{x\to1^+}f(x)$; (b) whether $\lim_{x\to1}f(x)$ exists, with a reason; (c) $f(1)$, and whether it affects your answer to (b).`,
    String.raw`(a) Left: $2$ (along $x+1$); right: $3$ (along $5-2x$). (b) No — the one-sided limits differ. (c) $f(1)=1$; the value at 1 does not affect the limit. [2, 1, 1.]`,
    planeDoc({ view: { xmin: -2, xmax: 4, ymin: -2, ymax: 5 }, curves: [{ f: (x) => x + 1, a: -2, b: 0.97, color: "violet" }, { f: (x) => 5 - 2 * x, a: 1.03, b: 3.5, color: "violet" }], points: [H(1, 2), H(1, 3), P(1, 1, false)], step: { x: 1, y: 1 } })),
  W(3, "hard", 4, String.raw`(a) Evaluate $f(x)=\sqrt{x^2+4x}-x$ at $x=100$ and $x=1000$. (b) Find $\lim_{x\to\infty}\left(\sqrt{x^2+4x}-x\right)$ algebraically. (c) What does the result say about the graph shown?`,
    String.raw`(a) $\approx1.980$ and $\approx1.998$. (b) Multiply by $\frac{\sqrt{x^2+4x}+x}{\sqrt{x^2+4x}+x}$: $\frac{4x}{\sqrt{x^2+4x}+x}=\frac{4}{\sqrt{1+\frac4x}+1}\to2$. (c) $y=2$ is a horizontal asymptote as $x\to\infty$. [1, 2, 1.]`,
    planeDoc({ view: { xmin: 0, xmax: 30, ymin: 0, ymax: 3 }, curves: [{ f: (x) => Math.sqrt(x * x + 4 * x) - x, a: 0, b: 30, color: "violet" }], lines: [{ m: 0, b: 2, color: "red", dash: true }], step: { x: 5, y: 0.5 } })),
  W(3, "hard", 4, String.raw`One dollar is invested at 100% interest per year, compounded $n$ times a year, giving $A_n=\left(1+\frac1n\right)^n$ after one year. (a) Compute $A_1$, $A_{12}$, $A_{365}$. (b) Estimate $\lim_{n\to\infty}A_n$. (c) Explain why the values increase but never pass about 2.72.`,
    String.raw`(a) $2$, $\approx2.613$, $\approx2.7146$. (b) $e\approx2.718$. (c) More frequent compounding adds interest on interest, but each extra step adds less; the sequence is increasing and bounded, approaching $e$. [1, 1, 2.]`,
    planeDoc({ view: { xmin: 0, xmax: 25, ymin: 1.9, ymax: 2.8 }, points: Array.from({ length: 24 }, (_, i) => ({ x: i + 1, y: (1 + 1 / (i + 1)) ** (i + 1), color: "blue" })), lines: [{ m: 0, b: Math.E, color: "red", dash: true }], step: { x: 2, y: 0.1 }, xlabel: "n", ylabel: "Aₙ" })),
  W(4, "medium", 4, String.raw`$f(x)=x^2-1$ for $x\lt2$ and $f(x)=kx+1$ for $x\ge2$. (a) Find $k$ so that $f$ is continuous. (b) Sketch $f$ for that $k$. (c) If $k=2$ instead, classify the discontinuity and give the one-sided limits.`,
    String.raw`(a) $3=2k+1\Rightarrow k=1$. (b) Parabola up to $(2,3)$, then the line $y=x+1$. (c) Jump: left limit 3, right limit 5. [1, 1, 2.]`,
    planeDoc({ view: { xmin: -2, xmax: 5, ymin: -2, ymax: 8 }, step: { x: 1, y: 1 } })),
  W(4, "hard", 4, String.raw`$f(x)=\dfrac{x^2-4}{x^2-x-2}$ is graphed. (a) Find and classify every discontinuity. (b) Redefine $f$ at one point to remove a discontinuity. (c) Find $\lim_{x\to\infty}f(x)$.`,
    String.raw`(a) $f=\frac{(x-2)(x+2)}{(x-2)(x+1)}=\frac{x+2}{x+1}$ for $x\ne2$: removable at $x=2$ (limit $\frac43$), infinite at $x=-1$. (b) $f(2)=\frac43$. (c) $1$. [2, 1, 1.]`,
    planeDoc({ view: { xmin: -5, xmax: 5, ymin: -4, ymax: 6 }, curves: [{ f: (x) => (x + 2) / (x + 1), a: -5, b: -1.25, color: "violet" }, { f: (x) => (x + 2) / (x + 1), a: -0.8, b: 1.96, color: "violet" }, { f: (x) => (x + 2) / (x + 1), a: 2.04, b: 5, color: "violet" }], vlines: [{ x: -1, color: "red", dash: true }], points: [H(2, 4 / 3)], step: { x: 1, y: 1 } })),
  W(4, "hard", 4, String.raw`$f(x)=x^3-4x+1$ is continuous. (a) Evaluate $f$ at $x=-3,-2,0,1,2$. (b) Use continuity to locate three zeros between consecutive integers. (c) Explain why continuity is essential to the argument.`,
    String.raw`(a) $-14, 1, 1, -2, 1$. (b) Sign changes on $(-3,-2)$, $(0,1)$, $(1,2)$. (c) A continuous graph can't get from a negative to a positive value without crossing 0; a jump could skip over it. [1, 2, 1.]`,
    planeDoc({ view: { xmin: -3.5, xmax: 3, ymin: -15, ymax: 10 }, step: { x: 0.5, y: 5 } })),
  W(5, "medium", 4, String.raw`For $f(x)=2x^2-4x$: (a) find $f'(x)$ from first principles; (b) find the tangent at $x=3$; (c) find where the tangent is horizontal and draw it on the graph.`,
    String.raw`(a) $\frac{4xh+2h^2-4h}{h}=4x+2h-4\to4x-4$. (b) $f(3)=6$, $f'(3)=8$: $y=8x-18$. (c) $4x-4=0\Rightarrow x=1$, at $(1,-2)$. [2, 1, 1.]`,
    planeDoc({ view: { xmin: -1, xmax: 4, ymin: -3, ymax: 10 }, curves: [{ f: (x) => 2 * x * x - 4 * x, color: "violet" }], step: { x: 0.5, y: 1 } })),
  W(5, "hard", 4, String.raw`For $f(x)=\sqrt x$: (a) find $f'(x)$ from first principles; (b) find the point on the curve whose tangent passes through $(-4,0)$; (c) explain why $f$ has no derivative at $x=0$.`,
    String.raw`(a) $\frac1{2\sqrt x}$. (b) Tangent at $(a,\sqrt a)$: $y-\sqrt a=\frac{x-a}{2\sqrt a}$; through $(-4,0)$: $-2a=-4-a\Rightarrow a=4$: point $(4,2)$. (c) $\frac{\sqrt h}{h}=\frac1{\sqrt h}\to\infty$: vertical tangent (and no left side). [1, 2, 1.]`,
    planeDoc({ view: { xmin: -5, xmax: 9, ymin: -1, ymax: 4 }, curves: [{ f: (x) => Math.sqrt(x), a: 0, b: 9, color: "violet" }], points: [P(-4, 0)], step: { x: 1, y: 1 } })),
  W(5, "hard", 4, String.raw`$f(x)=x^2$ for $x\le1$ and $f(x)=2x-1$ for $x>1$. (a) Show that $f$ is continuous at 1. (b) Show that $f$ is differentiable at 1 by comparing one-sided slopes. (c) Write $f'(x)$ as a piecewise function and sketch it.`,
    String.raw`(a) Both pieces give 1 at $x=1$. (b) Left: $\frac{(1+h)^2-1}{h}=2+h\to2$ ($h\lt0$); right: $\frac{2(1+h)-1-1}{h}=2$. Equal, so $f'(1)=2$. (c) $f'(x)=2x$ for $x\le1$, $2$ for $x>1$: a rising line that levels off at height 2. [1, 2, 1.]`,
    planeDoc({ view: { xmin: -2, xmax: 3, ymin: -1, ymax: 6 }, curves: [{ f: (x) => x * x, a: -2, b: 1, color: "violet" }, { f: (x) => 2 * x - 1, a: 1, b: 3, color: "green" }], points: [P(1, 1)], step: { x: 0.5, y: 1 } })),
];

const APPLY = process.argv.includes("--apply");
if (process.argv[1] && import.meta.url.endsWith(process.argv[1].replace(/\\/g, "/").split("/").pop())) {
  const env = {};
  for (const line of readFileSync(".env.local", "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
  const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });
  const cid = (await db.from("courses").select("id").eq("code", "MCV4U").single()).data.id;
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
    const key = `mcv4u-${w.topic.split(" ")[0].replace(".", "-")}/written-${crypto.createHash("sha1").update(w.fig).digest("hex").slice(0, 10)}.svg`;
    const up = await db.storage.from("graph-images").upload(key, Buffer.from(w.fig), { upsert: true, contentType: "image/svg+xml" });
    if (up.error) throw up.error;
    const image_url = db.storage.from("graph-images").getPublicUrl(key).data.publicUrl;
    const { fig, ...row } = w;
    const r = await db.from("bank_questions").insert({ ...row, image_url, course_id: cid, lesson_id: lessons.find((l) => l.title === w.topic).id });
    if (r.error) throw r.error;
  }
  console.log(`inserted ${todo.length}`);
}
