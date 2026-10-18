// MHF4U chapter 1 written-response (long_answer) bank questions for printed chapter tests (Part C).
// Each question carries a figure (SVG uploaded to graph-images; paper tests print image_url).
//   node scripts/mhf4u-ch1/written.mjs           -> dry run
//   node scripts/mhf4u-ch1/written.mjs --apply   -> uploads figures, inserts rows not already in the bank (matched by prompt)
// Run --apply only after the chapter 1 lessons exist and restructure.mjs has run (it links each row to its lesson by title).
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";
import crypto from "crypto";
import { planeDoc, P } from "./bank/fig.mjs";

const T = {
  1: "1.1 Power Functions", 2: "1.2 Characteristics of Polynomial Functions", 3: "1.3 Equations and Graphs of Polynomial Functions",
  4: "1.4 Transformations of Power Functions", 5: "1.5 Slopes of Secants and Average Rate of Change", 6: "1.6 Slopes of Tangents and Instantaneous Rate of Change",
};
const W = (t, difficulty, points, prompt, feedback, fig) => ({ topic: T[t], difficulty, points, prompt, feedback, kind: "long_answer", answer: null, choices: null, fig });

export const WRITTEN = [
  W(1, "medium", 4, String.raw`The graph shows four power functions in blue, red, green and amber. (a) Match each colour to one of $y=0.5x^4$, $y=-x^3$, $y=x^5$, $y=-2x^2$, giving a reason for each. (b) State the symmetry of each. (c) Which of them have range $\mathbb R$?`,
    String.raw`(a) blue $0.5x^4$ (up at both ends, flat near 0); amber $-2x^2$ (down at both ends); red $-x^3$ (Q2 → Q4); green $x^5$ (Q3 → Q1, flatter than $x^3$ near 0). (b) $0.5x^4$ and $-2x^2$: y-axis; $-x^3$ and $x^5$: origin. (c) the odd ones, $-x^3$ and $x^5$. [2, 1, 1.]`,
    planeDoc({ view: { xmin: -2, xmax: 2, ymin: -4, ymax: 4 }, curves: [{ f: (x) => 0.5 * x ** 4, color: "blue" }, { f: (x) => -(x ** 3), color: "red" }, { f: (x) => x ** 5, color: "green" }, { f: (x) => -2 * x * x, color: "amber" }], step: { x: 0.5, y: 1 } })),
  W(1, "hard", 4, String.raw`A power function $y=ax^n$ passes through the two points shown. (a) Find $a$ and $n$. (b) Describe its end behaviour and symmetry. (c) Solve $ax^n=ax$ for this function.`,
    String.raw`(a) $(1,3)$: $a=3$. $(-2,-96)$: $3(-2)^n=-96\Rightarrow(-2)^n=-32\Rightarrow n=5$. (b) odd degree, $a>0$: Q3 → Q1; symmetric about the origin. (c) $3x^5=3x\Rightarrow x(x^4-1)=0\Rightarrow x=0,\pm1$. [2, 1, 1.]`,
    planeDoc({ view: { xmin: -3, xmax: 3, ymin: -100, ymax: 20 }, points: [P(1, 3), P(-2, -96)], step: { x: 1, y: 10 } })),
  W(2, "medium", 4, String.raw`The points shown come from a polynomial function at $x=0,1,2,3,4,5$. (a) Use finite differences to find its degree and leading coefficient. (b) Describe its end behaviour and give the greatest possible number of turning points. (c) Join the points with a smooth curve consistent with (a) and (b).`,
    String.raw`Values $-2, 2, 8, 10, 2, -22$. First differences $4, 6, 2, -8, -24$; second $2, -4, -10, -16$; third $-6, -6, -6$. (a) degree 3, $a\cdot3!=-6\Rightarrow a=-1$. (b) Q2 → Q4; at most 2 turning points. (c) a cubic rising to a maximum near $x=3$ then falling (the function is $-x^3+4x^2+x-2$). [2, 1, 1.]`,
    planeDoc({ view: { xmin: -1, xmax: 6, ymin: -24, ymax: 14 }, points: [P(0, -2), P(1, 2), P(2, 8), P(3, 10), P(4, 2), P(5, -22)], step: { x: 1, y: 2 } })),
  W(2, "hard", 4, String.raw`The graph shows a polynomial function. (a) State the least possible degree and the sign of the leading coefficient, with reasons. (b) Is the function even, odd or neither? Explain using the graph. (c) Write a possible equation, and explain why a polynomial with the same end behaviour could not have exactly 4 real zeros if it is odd.`,
    String.raw`(a) 4 turning points → degree at least 5; Q3 → Q1, so $a>0$. (b) odd: rotating the graph 180° about the origin gives the same graph. (c) zeros $0,\pm2,\pm3$: $y=0.1x(x^2-4)(x^2-9)$. An odd function has $f(0)=0$ and its nonzero zeros come in pairs $\pm r$, so it has an odd number of real zeros. [1, 1, 2.]`,
    planeDoc({ view: { xmin: -3.5, xmax: 3.5, ymin: -5, ymax: 5 }, curves: [{ f: (x) => 0.1 * x * (x * x - 4) * (x * x - 9), color: "violet" }], step: { x: 1, y: 1 } })),
  W(3, "medium", 4, String.raw`For $f(x)=-(x+2)(x-1)^2(x-3)$: (a) state the zeros, their orders, the degree and the end behaviour; (b) find the y-intercept and the intervals where $f(x)>0$; (c) sketch the graph on the grid.`,
    String.raw`(a) $-2$ (order 1), $1$ (order 2), $3$ (order 1); degree 4, $a=-1$: down at both ends. (b) $f(0)=-(2)(1)(-3)=6$. $f>0$ on $-2<x<1$ and $1<x<3$. (c) crosses at $-2$ and $3$, touches at $1$, passes through $(0,6)$. [1, 2, 1.]`,
    planeDoc({ view: { xmin: -3, xmax: 4, ymin: -10, ymax: 12 }, step: { x: 1, y: 2 } })),
  W(3, "hard", 4, String.raw`The quartic shown touches the x-axis at $-2$, crosses it at $1$ and $4$, and has the y-intercept marked. (a) Find its equation. (b) Solve $f(x)\ge0$. (c) Write a polynomial of a different degree with the same x-intercepts and the same y-intercept.`,
    String.raw`(a) $f=a(x+2)^2(x-1)(x-4)$; $f(0)=16a=-16\Rightarrow a=-1$. (b) $x=-2$ or $1\le x\le4$. (c) e.g. $g(x)=a(x+2)(x-1)(x-4)$ with $8a=-16$: $g=-2(x+2)(x-1)(x-4)$ (degree 3). [2, 1, 1.]`,
    planeDoc({ view: { xmin: -3, xmax: 5, ymin: -30, ymax: 60 }, curves: [{ f: (x) => -((x + 2) ** 2) * (x - 1) * (x - 4), color: "violet" }], points: [P(-2, 0), P(1, 0), P(4, 0), P(0, -16)], step: { x: 1, y: 10 } })),
  W(3, "hard", 4, String.raw`A box has a square base of side $x$ cm and height $(10-x)$ cm, so $V(x)=x^2(10-x)$. (a) State the zeros and their orders, and a sensible domain. (b) Sketch $V$ on the grid. (c) Find all $x$ for which $V=128$, given that $x=8$ is one of them.`,
    String.raw`(a) $0$ (order 2) and $10$; $0<x<10$. (b) touches at 0, crosses at 10, positive between, maximum near $x\approx6.7$. (c) $x^3-10x^2+128=0=(x-8)(x^2-2x-16)$: $x=8$ or $x=1+\sqrt{17}\approx5.12$ (the negative root is rejected). [1, 1, 2.]`,
    planeDoc({ view: { xmin: 0, xmax: 11, ymin: 0, ymax: 160 }, step: { x: 1, y: 20 } })),
  W(4, "medium", 4, String.raw`$y=-2(x+1)^4+3$ is a transformation of $y=x^4$ (gray). (a) Describe the transformations in order. (b) Map the points $(-1,1)$, $(0,0)$, $(1,1)$ and give the vertex. (c) Sketch the graph and state the domain and range.`,
    String.raw`(a) vertical stretch by 2, reflection in the x-axis, translation 1 left and 3 up. (b) $(x,y)\to(x-1,-2y+3)$: $(-2,1)$, $(-1,3)$, $(0,1)$; vertex $(-1,3)$. (c) $D=\mathbb R$, $y\le3$. [1, 2, 1.]`,
    planeDoc({ view: { xmin: -4, xmax: 3, ymin: -4, ymax: 5 }, curves: [{ f: (x) => x ** 4, color: "gray" }], step: { x: 1, y: 1 } })),
  W(4, "hard", 4, String.raw`The cubic shown is a transformation of $y=x^3$ with its point of symmetry and one other point marked. (a) Find its equation in the form $y=a(x-d)^3+c$. (b) Find its x-intercept to 2 decimals. (c) Show that the same graph can be written as $y=[k(x-d)]^3+c$ and find $k$; interpret $k$.`,
    String.raw`(a) $(2,-1)$ and $(3,1)$: $a(1)^3-1=1\Rightarrow a=2$; $y=2(x-2)^3-1$. (b) $(x-2)^3=\tfrac12\Rightarrow x=2+\sqrt[3]{0.5}\approx2.79$. (c) $k^3=2\Rightarrow k=\sqrt[3]2\approx1.26$: a horizontal compression by $\tfrac1{\sqrt[3]2}$ is the same as a vertical stretch by 2. [2, 1, 1.]`,
    planeDoc({ view: { xmin: 0, xmax: 4, ymin: -5, ymax: 5 }, curves: [{ f: (x) => 2 * (x - 2) ** 3 - 1, color: "violet" }], points: [P(2, -1), P(3, 1)], step: { x: 0.5, y: 1 } })),
  W(5, "medium", 4, String.raw`The graph shows a greenhouse temperature (°C) at $t=0,2,4,6,8$ hours. (a) Find the average rate of change on $[0,4]$ and on $[4,8]$. (b) Which 2-hour interval has the greatest average rate of change? (c) Interpret a negative average rate in this context.`,
    String.raw`Values $5, 9, 15, 18, 16$. (a) $\tfrac{15-5}{4}=2.5$ °C/h; $\tfrac{16-15}{4}=0.25$ °C/h. (b) rates $2, 3, 1.5, -1$: $[2,4]$. (c) on $[6,8]$ the greenhouse cooled by 1 °C per hour on average. [2, 1, 1.]`,
    planeDoc({ view: { xmin: -0.5, xmax: 9, ymin: 0, ymax: 20 }, segs: [{ pts: [[0, 5], [2, 9], [4, 15], [6, 18], [8, 16]], color: "violet" }], points: [P(0, 5), P(2, 9), P(4, 15), P(6, 18), P(8, 16)], step: { x: 1, y: 2 }, xlabel: "t (h)", ylabel: "T (°C)" })),
  W(5, "hard", 4, String.raw`A ball's height is $h(t)=-5t^2+25t+1$ m (graph shown). (a) Find the average velocity on $[0,2]$ and on $[2,4]$. (b) Find $b>0$ so that the average velocity on $[0,b]$ is 0. (c) Explain what an average velocity of 0 does and does not tell you about the ball's motion.`,
    String.raw`(a) $h(0)=1$, $h(2)=31$, $h(4)=21$: $15$ m/s and $-5$ m/s. (b) $\tfrac{h(b)-h(0)}{b}=\tfrac{-5b^2+25b}{b}=25-5b=0\Rightarrow b=5$. (c) the ball is back at its starting height; it did move (up then down), so 0 does not mean it stood still. [2, 1, 1.]`,
    planeDoc({ view: { xmin: -0.3, xmax: 5.5, ymin: -2, ymax: 34 }, curves: [{ f: (t) => -5 * t * t + 25 * t + 1, a: 0, b: 5.04, color: "violet" }], step: { x: 0.5, y: 4 }, xlabel: "t (s)", ylabel: "h (m)" })),
  W(6, "medium", 4, String.raw`For $f(x)=x^2-2x$ and the point marked on the graph: (a) estimate the slope of the tangent at $x=3$ using secants with $h=0.1$ and $h=0.01$; (b) find the exact slope using $\dfrac{f(3+h)-f(3)}{h}$; (c) write the equation of the tangent and draw it.`,
    String.raw`(a) $\tfrac{f(3.1)-3}{0.1}=\tfrac{3.41-3}{0.1}=4.1$; $\tfrac{3.0401-3}{0.01}=4.01$. (b) $\tfrac{(9+6h+h^2-6-2h)-3}{h}=4+h\to4$. (c) $y-3=4(x-3)$: $y=4x-9$. [2, 1, 1.]`,
    planeDoc({ view: { xmin: -1, xmax: 5, ymin: -3, ymax: 10 }, curves: [{ f: (x) => x * x - 2 * x, color: "violet" }], points: [P(3, 3)], step: { x: 1, y: 1 } })),
  W(6, "hard", 4, String.raw`An object moves along a line with position $s(t)=t^3-6t^2+9t$ m (graph shown). (a) Find its average velocity on $[0,3]$. (b) Show that its velocity at time $t=a$ is $3a^2-12a+9$. (c) When is the object stopped, and when is it moving in the negative direction?`,
    String.raw`(a) $s(0)=s(3)=0$: 0 m/s. (b) $\tfrac{s(a+h)-s(a)}{h}=3a^2+3ah+h^2-12a-6h+9\to3a^2-12a+9$. (c) $3(a-1)(a-3)=0$: stopped at $t=1$ and $t=3$; negative for $1<t<3$. [1, 2, 1.]`,
    planeDoc({ view: { xmin: -0.3, xmax: 4.3, ymin: -1, ymax: 5 }, curves: [{ f: (t) => t ** 3 - 6 * t * t + 9 * t, a: 0, color: "violet" }], step: { x: 0.5, y: 1 }, xlabel: "t (s)", ylabel: "s (m)" })),
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
