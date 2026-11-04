// MHF4U chapter 3 written-response (long_answer) bank questions for printed chapter tests (Part C).
// Each question carries a figure (SVG uploaded to graph-images; paper tests print image_url).
//   node scripts/mhf4u-ch3/written.mjs           -> dry run
//   node scripts/mhf4u-ch3/written.mjs --apply   -> uploads figures, inserts rows not already in the bank (matched by prompt)
// Run --apply only after the chapter 3 lessons exist and renumber3.mjs has run (it links each row to its lesson by title).
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";
import crypto from "crypto";
import { planeDoc, P, RG } from "./bank/fig.mjs";

const S = String.raw;
const T = {
  1: "3.1 Reciprocal of a Linear Function", 2: "3.2 Reciprocal of a Quadratic Function", 3: "3.3 Rational Functions of the Form (ax + b)/(cx + d)",
  4: "3.4 Solving Rational Equations and Inequalities", 5: "3.5 Rational Function Models",
};
const W = (t, difficulty, points, prompt, feedback, fig) => ({ topic: T[t], difficulty, points, prompt, feedback, kind: "long_answer", answer: null, choices: null, fig });
const grid = (view, step) => planeDoc({ view, ...(step ? { step } : {}) });

export const WRITTEN = [
  W(1, "medium", 4, S`For $g(x)=\dfrac1{2x-6}$: (a) state the asymptotes, domain and range; (b) find the y-intercept and the invariant points with $f(x)=2x-6$; (c) sketch $f$ and $g$ on the grid.`,
    S`(a) VA $x=3$, HA $y=0$; $x\ne3$; $y\ne0$. (b) $-\frac16$; $2x-6=\pm1$: $\left(\frac72,1\right)$, $\left(\frac52,-1\right)$. (c) line and two branches through those points. [2, 1, 1.]`,
    grid({ xmin: -2, xmax: 8, ymin: -5, ymax: 5 })),
  W(1, "hard", 4, S`$g(x)=\dfrac1{kx+c}$ is graphed. (a) Use the marked points to find $k$ and $c$. (b) Find the average rate of change on $[1,2]$. (c) Solve $g(x)\gt1$ and explain the result with the graph.`,
    S`(a) At $(0,\frac12)$: $c=2$; at $(2,\frac14)$: $2k+2=4$, $k=1$. (b) $g(1)=\frac13$, $g(2)=\frac14$: $-\frac1{12}$. (c) $0\lt x+2\lt1$: $-2\lt x\lt-1$; the right branch is above $y=1$ only just after the asymptote. [2, 1, 1.]`,
    RG((x) => 1 / (x + 2), [-2], { xmin: -6, xmax: 5, ymin: -3, ymax: 3 }, 0, [P(0, 0.5), P(2, 0.25)], { step: { x: 1, y: 0.5 } })),
  W(2, "medium", 4, S`For $g(x)=\dfrac1{x^2-6x+5}$: (a) find the vertical asymptotes; (b) find the turning point and y-intercept; (c) sketch $g$ on the grid and state its intervals of increase.`,
    S`(a) $(x-1)(x-5)$: $x=1$, $x=5$. (b) vertex $(3,-4)$: $\left(3,-\frac14\right)$; y-intercept $\frac15$. (c) increasing on $(-\infty,1)$ and $(1,3)$. [1, 2, 1.]`,
    grid({ xmin: -2, xmax: 8, ymin: -2, ymax: 2 }, { x: 1, y: 0.5 })),
  W(2, "hard", 4, S`The graph shows $g(x)=\dfrac a{x^2+bx+c}$. (a) Find $a$, $b$ and $c$. (b) State the range. (c) Solve $g(x)\ge1$.`,
    S`(a) No zeros; max $2$ at $x=-1$; $g(0)=1$: $a/(1+k)=1$, $a/k=2$ with $f=(x+1)^2+k$ gives $k=1$, $a=2$: $g=\frac2{x^2+2x+2}$, $b=2$, $c=2$. (b) $(0,2]$. (c) $x^2+2x+2\le2$: $-2\le x\le0$. [2, 1, 1.]`,
    planeDoc({ view: { xmin: -5, xmax: 3, ymin: -0.5, ymax: 3 }, curves: [{ f: (x) => 2 / (x * x + 2 * x + 2), color: "violet" }], points: [P(-1, 2), P(0, 1)], step: { x: 1, y: 0.5 } })),
  W(3, "medium", 4, S`For $f(x)=\dfrac{2x-8}{x+2}$: (a) state the asymptotes and intercepts; (b) write $f$ in the form $a+\dfrac k{x-h}$; (c) sketch $f$ on the grid.`,
    S`(a) VA $x=-2$, HA $y=2$, $(4,0)$, $(0,-4)$. (b) $2-\frac{12}{x+2}$. (c) two rising branches. [2, 1, 1.]`,
    grid({ xmin: -10, xmax: 8, ymin: -8, ymax: 12 }, { x: 2, y: 2 })),
  W(3, "hard", 4, S`The graph has the form $f(x)=\dfrac{ax+b}{cx+d}$. (a) Find an equation. (b) Find $f^{-1}$ and explain how its asymptotes relate to those of $f$. (c) Find where $f(x)=f^{-1}(x)$ on the line $y=x$.`,
    S`(a) VA $x=1$, HA $y=-2$, x-intercept 3: $f=\frac{-2x+6}{x-1}$. (b) $y(x-1)=-2x+6\Rightarrow x(y+2)=y+6$: $f^{-1}(x)=\frac{x+6}{x+2}$; asymptotes swap. (c) $x(x-1)=-2x+6\Rightarrow x^2+x-6=0$: $x=2$ or $x=-3$. [1, 2, 1.]`,
    RG((x) => (-2 * x + 6) / (x - 1), [1], { xmin: -8, xmax: 8, ymin: -10, ymax: 8 }, -2, [P(3, 0), P(0, -6)])),
  W(4, "medium", 4, S`(a) Solve $\dfrac{x+2}{x-1}=x-1$ algebraically. (b) Use the graphs shown to explain your answer. (c) Solve $\dfrac{x+2}{x-1}\ge0$.`,
    S`(a) $x+2=x^2-2x+1\Rightarrow x^2-3x-1=0$: $x=\frac{3\pm\sqrt{13}}2$. (b) these are the x-coordinates of the two intersection points. (c) $(-\infty,-2]\cup(1,\infty)$. [2, 1, 1.]`,
    planeDoc({ view: { xmin: -6, xmax: 8, ymin: -8, ymax: 8 }, curves: [{ f: (x) => (x + 2) / (x - 1), a: -6, b: 0.996, color: "violet" }, { f: (x) => (x + 2) / (x - 1), a: 1.004, b: 8, color: "violet" }, { f: (x) => x - 1, color: "green" }], step: { x: 1, y: 1 } })),
  W(4, "hard", 4, S`Solve $\dfrac{x^2-4x}{x+2}\le x-2$. (a) Write one fraction. (b) Make a sign chart. (c) State the solution, explaining the role of $x=-2$.`,
    S`(a) $\frac{x^2-4x-(x-2)(x+2)}{x+2}=\frac{4-4x}{x+2}\le0$. (b) critical values $-2$, $1$: signs $-,+,-$. (c) $x\lt-2$ or $x\ge1$; $-2$ makes the denominator 0 and is excluded. [1, 2, 1.]`,
    grid({ xmin: -8, xmax: 6, ymin: -6, ymax: 6 })),
  W(5, "medium", 4, S`The graph shows $A(x)=\dfrac{1000+8x}x$, the average cost in dollars for $x$ items. (a) Find $A(125)$. (b) State and interpret the horizontal asymptote. (c) How many items give an average cost of 12 dollars?`,
    S`(a) $16$. (b) $y=8$: the unit cost for very large orders. (c) $1000=4x$: 250 items. [1, 2, 1.]`,
    planeDoc({ view: { xmin: 0, xmax: 500, ymin: 0, ymax: 40 }, curves: [{ f: (x) => (1000 + 8 * x) / x, a: 35, b: 500, color: "violet" }], lines: [{ m: 0, b: 8, color: "red", dash: true }], points: [P(125, 16), P(250, 12)], step: { x: 50, y: 5 } })),
  W(5, "hard", 4, S`A dose has concentration $C(t)=\dfrac{15t}{t^2+36}$ mg/L after $t$ h. (a) Find the average rate of change on $[6,12]$. (b) When is $C\ge1$? (c) Use the graph to describe what happens as $t$ grows, and explain it from the equation.`,
    S`(a) $C(6)=1.25$, $C(12)=1$: $-\frac{0.25}6\approx-0.042$. (b) $t^2-15t+36\le0$: $3\le t\le12$. (c) $C\to0$: the degree of the denominator is higher, so the ratio shrinks. [1, 2, 1.]`,
    planeDoc({ view: { xmin: 0, xmax: 30, ymin: 0, ymax: 2 }, curves: [{ f: (t) => 15 * t / (t * t + 36), a: 0, b: 30, color: "violet" }, { f: () => 1, color: "green" }], points: [P(3, 1), P(12, 1)], step: { x: 3, y: 0.5 } })),
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
