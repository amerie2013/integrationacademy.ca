// MCV4U chapter 2 written-response (long_answer) bank questions for printed chapter tests (Part C).
// Each question carries a figure (SVG uploaded to graph-images; paper tests print image_url).
//   node scripts/mcv4u-ch2/written.mjs           -> dry run
//   node scripts/mcv4u-ch2/written.mjs --apply   -> uploads figures, inserts rows not already in the bank (matched by prompt)
// Run --apply only after the chapter 2 lessons are loaded and renumber2.mjs has run (it links each row to its lesson by title).
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";
import crypto from "crypto";
import { planeDoc, P } from "./bank/fig.mjs";

const T = {
  1: "2.1 Derivative of a Polynomial Function", 2: "2.2 The Product Rule", 3: "2.3 Velocity, Acceleration, and Second Derivatives",
  4: "2.4 The Chain Rule", 5: "2.5 Derivatives of Quotients", 6: "2.6 Rate of Change Problems",
};
const W = (t, difficulty, points, prompt, feedback, fig) => ({ topic: T[t], difficulty, points, prompt, feedback, kind: "long_answer", answer: null, choices: null, fig });
const S = String.raw;
/** rational curve split at its vertical asymptotes */
const rat = (f, poles, v, color = "violet") => {
  const cuts = [v.xmin, ...poles, v.xmax];
  return cuts.slice(0, -1).map((a, i) => ({ f, a: i === 0 ? a : a + 0.004, b: i === cuts.length - 2 ? cuts[i + 1] : cuts[i + 1] - 0.004, color }));
};

export const WRITTEN = [
  W(1, "medium", 4, S`For $f(x)=x^3-3x^2-24x+5$ (graph shown): (a) find $f'(x)$; (b) find the points where the tangent is horizontal; (c) find the equation of the tangent at $x=0$.`,
    S`(a) $f'(x)=3x^2-6x-24$. (b) $3(x-4)(x+2)=0$: $(-2,33)$ and $(4,-75)$. (c) $f(0)=5$, $f'(0)=-24$: $y=-24x+5$. [1, 2, 1.]`,
    planeDoc({ view: { xmin: -4, xmax: 6.5, ymin: -85, ymax: 45 }, curves: [{ f: (x) => x ** 3 - 3 * x * x - 24 * x + 5, color: "violet" }], points: [P(-2, 33), P(4, -75), P(0, 5)], step: { x: 1, y: 10 } })),
  W(1, "hard", 4, S`Find the equations of the two tangents to $y=x^2-2x$ that pass through the point $(2,-4)$, which is not on the curve. Show that each line touches the curve.`,
    S`Tangent at $x=a$: $y=(2a-2)(x-a)+a^2-2a$. Substituting $(2,-4)$: $-4=-a^2+4a-4\Rightarrow a(a-4)=0$. $a=0$: $y=-2x$; $a=4$: point $(4,8)$, slope 6, $y=6x-16$. Each meets the curve where $x^2-2x-(\text{line})$ is a perfect square: $x^2$ and $(x-4)^2$. [2, 1, 1.]`,
    planeDoc({ view: { xmin: -2, xmax: 6, ymin: -6, ymax: 14 }, curves: [{ f: (x) => x * x - 2 * x, color: "violet" }, { f: (x) => -2 * x, color: "green" }, { f: (x) => 6 * x - 16, color: "green" }], points: [P(2, -4, null, "red"), P(0, 0), P(4, 8)], step: { x: 1, y: 2 } })),
  W(2, "medium", 4, S`For $f(x)=(x^2-4)(2x+1)$: (a) differentiate with the product rule; (b) check your answer by expanding first; (c) find the tangent at $x=1$ and describe it.`,
    S`(a) $2x(2x+1)+2(x^2-4)=6x^2+2x-8$. (b) $f=2x^3+x^2-8x-4\Rightarrow f'=6x^2+2x-8$ ✓. (c) $f(1)=-9$, $f'(1)=0$: $y=-9$, a horizontal tangent. [2, 1, 1.]`,
    planeDoc({ view: { xmin: -3, xmax: 3, ymin: -12, ymax: 12 }, curves: [{ f: (x) => (x * x - 4) * (2 * x + 1), color: "violet" }, { f: () => -9, color: "green" }], points: [P(1, -9)], step: { x: 1, y: 2 } })),
  W(2, "hard", 4, S`A streaming service has $N(t)=2000+150t$ subscribers paying $p(t)=30-0.5t$ dollars per month, $t$ months from now (the graph shows $R$ in thousands of dollars). (a) Use the product rule to find $R'(t)$ for the monthly revenue $R=Np$. (b) Find $R'(4)$ and interpret it. (c) When does revenue stop growing?`,
    S`(a) $R'=150(30-0.5t)+(2000+150t)(-0.5)=3500-150t$. (b) $R'(4)=2900$: revenue is rising by about 2900 dollars per month. (c) $3500-150t=0\Rightarrow t\approx23.3$ months. [2, 1, 1.]`,
    planeDoc({ view: { xmin: 0, xmax: 50, ymin: 0, ymax: 120 }, curves: [{ f: (t) => (2000 + 150 * t) * (30 - 0.5 * t) / 1000, a: 0, b: 50, color: "violet" }], points: [P(70 / 3, (2000 + 3500) * (30 - 35 / 3) / 1000)], step: { x: 5, y: 20 }, xlabel: "t (months)", ylabel: "R (thousand dollars)" })),
  W(3, "medium", 4, S`An object moves with $s(t)=2t^3-15t^2+36t$ m, $0\le t\le4$ (graph shown). (a) Find $v(t)$ and $a(t)$. (b) When is it at rest, and in which direction does it move between those times? (c) Find the total distance travelled.`,
    S`(a) $v=6t^2-30t+36=6(t-2)(t-3)$, $a=12t-30$. (b) At rest at $t=2$ and $t=3$; $v\lt0$ between, so it moves backward. (c) $s(0)=0$, $s(2)=28$, $s(3)=27$, $s(4)=32$: $28+1+5=34$ m. [1, 1, 2.]`,
    planeDoc({ view: { xmin: 0, xmax: 4.3, ymin: 0, ymax: 36 }, curves: [{ f: (t) => 2 * t ** 3 - 15 * t * t + 36 * t, a: 0, b: 4.3, color: "violet" }], points: [P(2, 28), P(3, 27), P(4, 32)], step: { x: 0.5, y: 4 }, xlabel: "t (s)", ylabel: "s (m)" })),
  W(3, "hard", 4, S`The velocity of a robot is $v(t)=-t^2+8t-12$ m/s, $0\le t\le8$ (graph shown). (a) When does it move forward? (b) Find $a(t)$ and the intervals where it speeds up. (c) Explain, using the graph, why it slows down on $(4,6)$.`,
    S`(a) $v=-(t-2)(t-6)\gt0$ on $(2,6)$. (b) $a=-2t+8$. Same signs: $(2,4)$ ($v\gt0$, $a\gt0$) and $(6,8]$ ($v\lt0$, $a\lt0$). (c) On $(4,6)$ the velocity is positive but falling toward 0, so the speed decreases. [1, 2, 1.]`,
    planeDoc({ view: { xmin: 0, xmax: 8.3, ymin: -13, ymax: 6 }, curves: [{ f: (t) => -t * t + 8 * t - 12, a: 0, b: 8, color: "blue" }], points: [P(2, 0), P(6, 0), P(4, 4)], step: { x: 1, y: 2 }, xlabel: "t (s)", ylabel: "v (m/s)" })),
  W(3, "hard", 3, S`On Mars, a rock thrown upward has height $h(t)=-1.9t^2+19t+2$ m. (a) Find its maximum height. (b) Find its velocity when it lands, to one decimal. (c) Find its acceleration and compare with Earth's $-9.8$ m/s².`,
    S`(a) $v=-3.8t+19=0$ at $t=5$; $h(5)=49.5$ m. (b) $h=0$ at $t=\frac{19+\sqrt{376.2}}{3.8}\approx10.10$ s; $v\approx-19.4$ m/s. (c) $a=-3.8$ m/s², about 39% of Earth's. [1, 1, 1.]`,
    planeDoc({ view: { xmin: 0, xmax: 11, ymin: 0, ymax: 55 }, curves: [{ f: (t) => -1.9 * t * t + 19 * t + 2, a: 0, b: 10.104, color: "violet" }], points: [P(5, 49.5), P(10.1, 0)], step: { x: 1, y: 5 }, xlabel: "t (s)", ylabel: "h (m)" })),
  W(4, "medium", 4, S`For $y=(x^2-2x)^3$ (graph shown): (a) find $\frac{dy}{dx}$ and factor it completely; (b) find all points with horizontal tangents; (c) explain why the graph flattens at $x=0$ and $x=2$ without turning.`,
    S`(a) $3(x^2-2x)^2(2x-2)=6x^2(x-2)^2(x-1)$. (b) $(0,0)$, $(1,-1)$, $(2,0)$. (c) At 0 and 2 the factors are squared, so $y'$ does not change sign: the curve levels off but keeps falling (at 0) or rising (at 2). [1, 2, 1.]`,
    planeDoc({ view: { xmin: -0.8, xmax: 2.8, ymin: -1.5, ymax: 1.5 }, curves: [{ f: (x) => (x * x - 2 * x) ** 3, color: "violet" }], points: [P(0, 0), P(1, -1), P(2, 0)], step: { x: 0.5, y: 0.5 } })),
  W(4, "hard", 4, S`For $y=\frac{x}{\sqrt{x^2+4}}$: (a) use the product and chain rules to show $y'=\frac{4}{(x^2+4)^{3/2}}$; (b) explain why the function is always increasing; (c) find the tangent at the origin.`,
    S`(a) $y=x(x^2+4)^{-1/2}$; $y'=(x^2+4)^{-1/2}-x^2(x^2+4)^{-3/2}=\frac{(x^2+4)-x^2}{(x^2+4)^{3/2}}$. (b) Numerator 4 and denominator positive, so $y'\gt0$. (c) $y'(0)=\frac48=\frac12$: $y=\frac12x$. [2, 1, 1.]`,
    planeDoc({ view: { xmin: -8, xmax: 8, ymin: -1.5, ymax: 1.5 }, curves: [{ f: (x) => x / Math.sqrt(x * x + 4), color: "violet" }, { f: (x) => x / 2, color: "green", a: -3, b: 3 }], points: [P(0, 0)], lines: [{ m: 0, b: 1, color: "red", dash: true }, { m: 0, b: -1, color: "red", dash: true }], step: { x: 1, y: 0.5 } })),
  W(4, "hard", 4, S`A spherical balloon's radius is $r(t)=\sqrt{t+4}$ cm after $t$ s. (a) Use $\frac{dV}{dt}=\frac{dV}{dr}\cdot\frac{dr}{dt}$ with $V=\frac43\pi r^3$ to find the rate at $t=5$. (b) Check by writing $V$ as a function of $t$ and differentiating directly.`,
    S`(a) $\frac{dV}{dr}=4\pi r^2$, $\frac{dr}{dt}=\frac1{2\sqrt{t+4}}$; at $t=5$, $r=3$: $4\pi(9)\cdot\frac16=6\pi\approx18.85$ cm³/s. (b) $V=\frac43\pi(t+4)^{3/2}\Rightarrow V'=2\pi(t+4)^{1/2}=6\pi$ ✓. [2, 2.]`,
    planeDoc({ view: { xmin: 0, xmax: 12, ymin: 0, ymax: 220 }, curves: [{ f: (t) => (4 / 3) * Math.PI * (t + 4) ** 1.5, a: 0, b: 12, color: "violet" }, { f: (t) => 36 * Math.PI + 6 * Math.PI * (t - 5), color: "green", a: 1, b: 10 }], points: [P(5, 113.1)], step: { x: 1, y: 20 }, xlabel: "t (s)", ylabel: "V (cm³)" })),
  W(5, "medium", 4, S`For $f(x)=\frac{2x+3}{x-1}$ (graph shown): (a) find $f'(x)$; (b) explain why $f$ decreases on each side of $x=1$; (c) find the equation of the tangent at $x=2$.`,
    S`(a) $\frac{2(x-1)-(2x+3)}{(x-1)^2}=\frac{-5}{(x-1)^2}$. (b) The numerator is negative and $(x-1)^2\gt0$, so $f'\lt0$ wherever defined. (c) $f(2)=7$, $f'(2)=-5$: $y=-5x+17$. [1, 1, 2.]`,
    planeDoc({ view: { xmin: -4, xmax: 6, ymin: -8, ymax: 14 }, curves: [...rat((x) => (2 * x + 3) / (x - 1), [1], { xmin: -4, xmax: 6 }), { f: (x) => 17 - 5 * x, color: "green", a: 1.3, b: 3.6 }], vlines: [{ x: 1, color: "red", dash: true }], lines: [{ m: 0, b: 2, color: "red", dash: true }], points: [P(2, 7)], step: { x: 1, y: 2 } })),
  W(5, "hard", 4, S`For $f(x)=\frac{x^2-3}{x-2}$ (graph shown): (a) show that $f'(x)=\frac{(x-1)(x-3)}{(x-2)^2}$; (b) find the points with horizontal tangents; (c) describe the behaviour of $f$ near $x=2$.`,
    S`(a) $\frac{2x(x-2)-(x^2-3)}{(x-2)^2}=\frac{x^2-4x+3}{(x-2)^2}$. (b) $(1,2)$ and $(3,6)$. (c) Vertical asymptote $x=2$: $f\to-\infty$ from the left (numerator $1\gt0$, denominator $\to0^-$) and $+\infty$ from the right. [2, 1, 1.]`,
    planeDoc({ view: { xmin: -3, xmax: 7, ymin: -8, ymax: 14 }, curves: rat((x) => (x * x - 3) / (x - 2), [2], { xmin: -3, xmax: 7 }), vlines: [{ x: 2, color: "red", dash: true }], points: [P(1, 2), P(3, 6)], step: { x: 1, y: 2 } })),
  W(6, "medium", 4, S`A company has cost $C(x)=2500+18x+0.015x^2$ and revenue $R(x)=60x-0.005x^2$ dollars for $x$ items (graph: cost red, revenue blue, profit violet, in thousands of dollars). (a) Find the marginal cost at $x=300$ and compare it with the true cost of the 301st item. (b) Find the marginal profit at $x=300$. (c) Find the production level that maximizes profit.`,
    S`(a) $C'(300)=18+9=27$; $C(301)-C(300)=18+0.015(601)=27.015$ dollars. (b) $P'=R'-C'=42-0.04x$; $P'(300)=30$ dollars per item. (c) $P'=0$ at $x=1050$ items. [1, 1, 2.]`,
    planeDoc({ view: { xmin: 0, xmax: 2000, ymin: 0, ymax: 100 }, curves: [{ f: (x) => (2500 + 18 * x + 0.015 * x * x) / 1000, a: 0, b: 2000, color: "red" }, { f: (x) => (60 * x - 0.005 * x * x) / 1000, a: 0, b: 2000, color: "blue" }, { f: (x) => (42 * x - 0.02 * x * x - 2500) / 1000, a: 0, b: 2000, color: "violet" }], points: [P(1050, 19.55)], step: { x: 250, y: 10 }, xlabel: "x (items)", ylabel: "thousand dollars" })),
  W(6, "hard", 4, S`The demand for a product is $p=200-0.5x$ dollars (graph: revenue blue, profit violet, in thousands of dollars). (a) Write the revenue function. (b) Find the quantity and price that maximize revenue. (c) If the cost is $C(x)=4000+40x$, find the quantity, price and profit that maximize profit, and explain why the best price for profit is higher than the best price for revenue.`,
    S`(a) $R=200x-0.5x^2$. (b) $R'=200-x=0$: $x=200$, $p=100$ dollars. (c) $P=160x-0.5x^2-4000$, $P'=0$ at $x=160$; $p=120$, $P=8800$ dollars. Each extra item costs 40 dollars, so it pays to stop selling sooner, which allows a higher price. [1, 1, 2.]`,
    planeDoc({ view: { xmin: 0, xmax: 400, ymin: -6, ymax: 22 }, curves: [{ f: (x) => (200 * x - 0.5 * x * x) / 1000, a: 0, b: 400, color: "blue" }, { f: (x) => (160 * x - 0.5 * x * x - 4000) / 1000, a: 0, b: 400, color: "violet" }], points: [P(200, 20), P(160, 8.8)], step: { x: 50, y: 2 }, xlabel: "x (items)", ylabel: "thousand dollars" })),
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
