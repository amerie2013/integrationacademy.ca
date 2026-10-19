// MCV4U chapter 3 written-response (long_answer) bank questions for printed chapter tests (Part C).
// Each question carries a figure (SVG uploaded to graph-images; paper tests print image_url).
//   node scripts/mcv4u-ch3/written.mjs           -> dry run
//   node scripts/mcv4u-ch3/written.mjs --apply   -> uploads figures, inserts rows not already in the bank (matched by prompt)
// Run --apply only after the chapter 3 lessons are loaded and renumber3.mjs has run (it links each row to its lesson by title).
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";
import crypto from "crypto";
import { planeDoc, P } from "./bank/fig.mjs";

const T = {
  1: "3.1 Increasing and Decreasing Functions", 2: "3.2 Maxima and Minima", 3: "3.3 Concavity and the Second Derivative Test",
  4: "3.4 Simple Rational Functions", 5: "3.5 Putting It All Together", 6: "3.6 Optimization Problems",
};
const W = (t, difficulty, points, prompt, feedback, fig) => ({ topic: T[t], difficulty, points, prompt, feedback, kind: "long_answer", answer: null, choices: null, fig });
const S = String.raw;
/** rational curve split at its vertical asymptotes */
const rat = (f, poles, v, color = "violet") => {
  const cuts = [v.xmin, ...poles, v.xmax];
  return cuts.slice(0, -1).map((a, i) => ({ f, a: i === 0 ? a : a + 0.004, b: i === cuts.length - 2 ? cuts[i + 1] : cuts[i + 1] - 0.004, color }));
};
const k8 = (x) => Math.cbrt(x * x) * (x * x - 4);
const q4 = (x) => x ** 4 + 4 * x ** 3 - 8 * x * x;
const VR = { xmin: -5, xmax: 8, ymin: -8, ymax: 16 };
const VQ = { xmin: -8, xmax: 8, ymin: -6, ymax: 8 };
const VO = { xmin: -5, xmax: 7, ymin: -8, ymax: 12 };

export const WRITTEN = [
  W(1, "medium", 4, S`For $f(x)=2x^3-3x^2-36x+5$ (graph shown): (a) find $f'(x)$ and factor it; (b) make a sign chart for $f'$; (c) state the intervals of increase and decrease.`,
    S`(a) $f'(x)=6x^2-6x-36=6(x-3)(x+2)$. (b) $+$ on $(-\infty,-2)$, $-$ on $(-2,3)$, $+$ on $(3,\infty)$. (c) Increasing on $(-\infty,-2)$ and $(3,\infty)$; decreasing on $(-2,3)$. [1, 2, 1.]`,
    planeDoc({ view: { xmin: -4, xmax: 5.5, ymin: -80, ymax: 60 }, curves: [{ f: (x) => 2 * x ** 3 - 3 * x * x - 36 * x + 5, color: "violet" }], points: [P(-2, 49), P(3, -76)], step: { x: 1, y: 20 } })),
  W(1, "hard", 4, S`For $f(x)=x\sqrt{6-x}$: (a) state the domain; (b) show that $f'(x)=\dfrac{12-3x}{2\sqrt{6-x}}$; (c) find the intervals of increase and decrease.`,
    S`(a) $x\le6$. (b) $f'=\sqrt{6-x}+x\cdot\frac{-1}{2\sqrt{6-x}}=\frac{2(6-x)-x}{2\sqrt{6-x}}=\frac{12-3x}{2\sqrt{6-x}}$. (c) Increasing for $x\lt4$, decreasing on $(4,6)$; maximum $(4,4\sqrt2)$. [1, 2, 1.]`,
    planeDoc({ view: { xmin: -4, xmax: 7, ymin: -12, ymax: 7 }, curves: [{ f: (x) => x * Math.sqrt(6 - x), a: -4, b: 6, color: "violet" }], points: [P(4, 4 * Math.SQRT2), P(6, 0)], step: { x: 1, y: 2 } })),
  W(2, "medium", 4, S`Find the absolute extrema of $f(x)=x^3-12x^2+45x$ on $[0,7]$ (graph shown). Explain why the absolute maximum is not at a critical number.`,
    S`$f'(x)=3(x-3)(x-5)$: critical numbers 3 and 5. $f(0)=0$, $f(3)=54$, $f(5)=50$, $f(7)=70$. Absolute maximum 70 at the endpoint $x=7$; absolute minimum 0 at $x=0$. The graph is still rising at the right end, so the local maximum at 3 is not the highest point. [3, 1.]`,
    planeDoc({ view: { xmin: -0.3, xmax: 7.5, ymin: -5, ymax: 80 }, curves: [{ f: (x) => x ** 3 - 12 * x * x + 45 * x, a: 0, b: 7, color: "violet" }], points: [P(0, 0), P(3, 54), P(5, 50), P(7, 70)], step: { x: 1, y: 10 } })),
  W(2, "hard", 4, S`For $f(x)=x^{2/3}(x^2-4)$: (a) find all critical numbers, including where $f'$ does not exist; (b) classify each with the first derivative test; (c) describe the graph at $x=0$.`,
    S`(a) $f=x^{8/3}-4x^{2/3}$, $f'=\frac83x^{5/3}-\frac83x^{-1/3}=\frac{8(x^2-1)}{3x^{1/3}}$: zero at $\pm1$, does not exist at 0. (b) Signs $-,+,-,+$: minima $(\pm1,-3)$, maximum $(0,0)$. (c) A cusp: the slopes approach $+\infty$ from the left and $-\infty$ from the right. [2, 1, 1.]`,
    planeDoc({ view: { xmin: -2.5, xmax: 2.5, ymin: -4, ymax: 4 }, curves: [{ f: k8, color: "violet" }], points: [P(-1, -3), P(1, -3), P(0, 0)], step: { x: 0.5, y: 1 } })),
  W(3, "medium", 4, S`For $f(x)=x^4-4x^3-18x^2$ (graph shown): (a) find $f''(x)$; (b) find the intervals of concavity; (c) find the inflection points.`,
    S`(a) $f''(x)=12x^2-24x-36=12(x-3)(x+1)$. (b) Concave up on $(-\infty,-1)$ and $(3,\infty)$, down on $(-1,3)$. (c) $(-1,-13)$ and $(3,-189)$. [1, 2, 1.]`,
    planeDoc({ view: { xmin: -4, xmax: 7, ymin: -400, ymax: 100 }, curves: [{ f: (x) => x ** 4 - 4 * x ** 3 - 18 * x * x, color: "violet" }], points: [P(-1, -13), P(3, -189)], step: { x: 1, y: 50 } })),
  W(3, "hard", 4, S`For $f(x)=3x^5-20x^3$: (a) find the critical numbers; (b) use the second derivative test where it works, and the first derivative test where it does not; (c) find the inflection points.`,
    S`(a) $f'=15x^2(x^2-4)$: $0,\pm2$. (b) $f''=60x^3-120x$; $f''(2)=240\gt0$: min $(2,-64)$; $f''(-2)=-240$: max $(-2,64)$; $f''(0)=0$: $f'\lt0$ on both sides of 0, so no extremum. (c) $f''=60x(x^2-2)$ changes sign at $0,\pm\sqrt2$: $(0,0)$, $(\pm\sqrt2,\mp39.6)$. [1, 2, 1.]`,
    planeDoc({ view: { xmin: -2.8, xmax: 2.8, ymin: -80, ymax: 80 }, curves: [{ f: (x) => 3 * x ** 5 - 20 * x ** 3, color: "violet" }], points: [P(2, -64), P(-2, 64), P(0, 0)], step: { x: 0.5, y: 20 } })),
  W(3, "hard", 3, S`Sales are $S(a)=-a^3+15a^2+200$ units when $a$ thousand dollars is spent on advertising, $0\le a\le10$. (a) Find the point of diminishing returns. (b) Find the sales growth rate there. (c) Explain what happens to extra spending beyond it.`,
    S`(a) $S''(a)=-6a+30=0$ at $a=5$; $S(5)=450$. (b) $S'(5)=-75+150=75$ units per thousand dollars. (c) After $a=5$, each extra thousand dollars still raises sales, but by less and less. [1, 1, 1.]`,
    planeDoc({ view: { xmin: 0, xmax: 10.5, ymin: 150, ymax: 750 }, curves: [{ f: (a) => -(a ** 3) + 15 * a * a + 200, a: 0, b: 10, color: "violet" }, { f: (a) => 450 + 75 * (a - 5), a: 3, b: 7, color: "green" }], points: [P(5, 450)], step: { x: 1, y: 100 }, xlabel: "a (thousand dollars)", ylabel: "S" })),
  W(4, "medium", 4, S`For $f(x)=\dfrac{3x+1}{x-2}$ (graph shown): (a) find the asymptotes and intercepts; (b) describe $f$ on each side of the vertical asymptote; (c) show that $f$ is decreasing on each branch.`,
    S`(a) $x=2$, $y=3$; $\left(-\frac13,0\right)$, $\left(0,-\frac12\right)$. (b) Numerator near 7: $f\to-\infty$ as $x\to2^-$ and $+\infty$ as $x\to2^+$. (c) $f'=\frac{3(x-2)-(3x+1)}{(x-2)^2}=\frac{-7}{(x-2)^2}\lt0$. [2, 1, 1.]`,
    planeDoc({ view: VR, curves: rat((x) => (3 * x + 1) / (x - 2), [2], VR), vlines: [{ x: 2, color: "red", dash: true }], lines: [{ m: 0, b: 3, color: "red", dash: true }], points: [P(-1 / 3, 0), P(0, -0.5)], step: { x: 1, y: 2 } })),
  W(4, "hard", 4, S`Sketch $f(x)=\dfrac{2x^2}{x^2-9}$ after finding: (a) the asymptotes and symmetry; (b) the intervals of increase and decrease and the extremum; (c) the intervals of concavity.`,
    S`(a) $x=\pm3$, $y=2$; even. (b) $f'=\frac{4x(x^2-9)-2x^2(2x)}{(x^2-9)^2}=\frac{-36x}{(x^2-9)^2}$: increasing for $x\lt0$, decreasing for $x\gt0$ (away from $\pm3$); local maximum $(0,0)$. (c) $f''=\frac{108(x^2+3)}{(x^2-9)^3}$: concave up for $|x|\gt3$, down on $(-3,3)$. [1, 2, 1.]`,
    planeDoc({ view: VQ, curves: rat((x) => (2 * x * x) / (x * x - 9), [-3, 3], VQ), vlines: [{ x: -3, color: "red", dash: true }, { x: 3, color: "red", dash: true }], lines: [{ m: 0, b: 2, color: "red", dash: true }], points: [P(0, 0)], step: { x: 1, y: 1 } })),
  W(5, "medium", 4, S`Sketch $f(x)=x^4+4x^3-8x^2$, giving the intercepts, local extrema and inflection points.`,
    S`Intercepts: $x^2(x^2+4x-8)=0\Rightarrow x=0,\ -2\pm2\sqrt3$. $f'=4x(x+4)(x-1)$: minima $(-4,-128)$, $(1,-3)$; maximum $(0,0)$. $f''=4(3x^2+6x-4)$: inflection at $x=-1\pm\sqrt{7/3}\approx0.53,\ -2.53$. [1, 2, 1.]`,
    planeDoc({ view: { xmin: -6, xmax: 2.5, ymin: -140, ymax: 30 }, curves: [{ f: q4, color: "violet" }], points: [P(-4, -128), P(1, -3), P(0, 0), { x: 0.528, y: q4(0.528), color: "violet" }, { x: -2.528, y: q4(-2.528), color: "violet" }], step: { x: 1, y: 20 } })),
  W(5, "hard", 4, S`Sketch $f(x)=\dfrac{x^2-x+4}{x-1}$: (a) find the asymptotes by division; (b) find the local extrema; (c) describe the concavity.`,
    S`(a) $f(x)=x+\frac{4}{x-1}$: $x=1$ and $y=x$. (b) $f'=1-\frac{4}{(x-1)^2}=0\Rightarrow x=3$ or $-1$: minimum $(3,5)$, maximum $(-1,-3)$. (c) $f''=\frac{8}{(x-1)^3}$: concave down for $x\lt1$, up for $x\gt1$. [1, 2, 1.]`,
    planeDoc({ view: VO, curves: rat((x) => (x * x - x + 4) / (x - 1), [1], VO), vlines: [{ x: 1, color: "red", dash: true }], lines: [{ m: 1, b: 0, color: "red", dash: true }], points: [P(3, 5), P(-1, -3)], step: { x: 1, y: 2 } })),
  W(6, "medium", 4, S`Squares of side $x$ are cut from the corners of a 20 cm by 12 cm sheet to form an open box. (a) Write the volume and its domain. (b) Find the value of $x$ that maximizes the volume. (c) Find the maximum volume.`,
    S`(a) $V=x(20-2x)(12-2x)$, $0\le x\le6$. (b) $V'=12x^2-128x+240=0\Rightarrow x=\frac{32-\sqrt{304}}{6}\approx2.43$ (the other root is outside the domain). (c) $V\approx262.7$ cm³; $V(0)=V(6)=0$. [1, 2, 1.]`,
    planeDoc({ view: { xmin: 0, xmax: 6.5, ymin: 0, ymax: 300 }, curves: [{ f: (x) => x * (20 - 2 * x) * (12 - 2 * x), a: 0, b: 6, color: "violet" }], points: [P(2.427, 262.7)], step: { x: 0.5, y: 50 }, xlabel: "x (cm)", ylabel: "V (cm³)" })),
  W(6, "hard", 4, S`A 6000 m² rectangular lot is fenced. The side along the highway costs 12 dollars per metre; the other three sides cost 4 dollars per metre. Find the dimensions that minimize the cost, and the minimum cost.`,
    S`Highway side $x$, other side $y$: $xy=6000$, $C=12x+4x+2(4y)=16x+\frac{48000}{x}$. $C'=16-\frac{48000}{x^2}=0\Rightarrow x=\sqrt{3000}\approx54.8$ m, $y\approx109.5$ m. $C''\gt0$: minimum, $C\approx1752.7$ dollars. [1, 2, 1.]`,
    planeDoc({ view: { xmin: 0, xmax: 160, ymin: 0, ymax: 5 }, curves: [{ f: (x) => (16 * x + 48000 / x) / 1000, a: 10, b: 160, color: "violet" }], points: [P(54.77, 1.7527)], step: { x: 20, y: 0.5 }, xlabel: "x (m)", ylabel: "C (thousand dollars)" })),
  W(6, "hard", 4, S`The demand for a product is $p=80-0.02x$ dollars and the cost is $C(x)=2000+20x$. (a) Write the profit function. (b) Find the quantity and price that maximize profit. (c) Find the maximum profit and justify that it is a maximum.`,
    S`(a) $P(x)=x(80-0.02x)-(2000+20x)=60x-0.02x^2-2000$. (b) $P'=60-0.04x=0\Rightarrow x=1500$, $p=50$ dollars. (c) $P(1500)=43\,000$ dollars; $P''=-0.04\lt0$. [1, 2, 1.]`,
    planeDoc({ view: { xmin: 0, xmax: 3100, ymin: -5, ymax: 50 }, curves: [{ f: (x) => (60 * x - 0.02 * x * x - 2000) / 1000, a: 0, b: 3000, color: "violet" }], points: [P(1500, 43)], step: { x: 500, y: 5 }, xlabel: "x (items)", ylabel: "P (thousand dollars)" })),
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
