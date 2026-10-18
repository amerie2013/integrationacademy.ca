// MHF4U chapter 2 written-response (long_answer) bank questions for printed chapter tests (Part C).
// Each question carries a figure (SVG uploaded to graph-images; paper tests print image_url).
//   node scripts/mhf4u-ch2/written.mjs           -> dry run
//   node scripts/mhf4u-ch2/written.mjs --apply   -> uploads figures, inserts rows not already in the bank (matched by prompt)
// Run --apply only after the chapter 2 lessons exist and renumber2.mjs has run (it links each row to its lesson by title).
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";
import crypto from "crypto";
import { planeDoc, P } from "./bank/fig.mjs";

const T = {
  1: "2.1 Dividing Polynomials and the Remainder Theorem", 2: "2.2 The Factor Theorem", 3: "2.3 Polynomial Equations",
  4: "2.4 Families of Polynomial Functions", 5: "2.5 Solving Polynomial Inequalities Graphically", 6: "2.6 Solving Factorable Polynomial Inequalities Algebraically",
};
const W = (t, difficulty, points, prompt, feedback, fig) => ({ topic: T[t], difficulty, points, prompt, feedback, kind: "long_answer", answer: null, choices: null, fig });

export const WRITTEN = [
  W(1, "medium", 4, String.raw`$P(x)=2x^3-3x^2+4x+7$ is graphed. (a) Divide $P(x)$ by $x-2$ using synthetic division. (b) Write the division statement. (c) Use the remainder theorem to check your remainder, and explain what it means on the graph.`,
    String.raw`(a) $2;\ 1;\ 6;\ 19$: $Q=2x^2+x+6$, $R=19$. (b) $P(x)=(x-2)(2x^2+x+6)+19$. (c) $P(2)=16-12+8+7=19$: the graph passes through $(2,19)$. [2, 1, 1.]`,
    planeDoc({ view: { xmin: -2, xmax: 3, ymin: -20, ymax: 40 }, curves: [{ f: (x) => 2 * x ** 3 - 3 * x * x + 4 * x + 7, color: "violet" }], step: { x: 0.5, y: 5 } })),
  W(1, "hard", 4, String.raw`$P(x)=x^3+ax^2+bx-4$ passes through the two marked points. (a) Use the remainder theorem to find $a$ and $b$. (b) Factor $P(x)$ completely. (c) Find the remainder when $P(x)$ is divided by $x-3$.`,
    String.raw`(a) $P(1)=a+b-3=-6\Rightarrow a+b=-3$; $P(2)=4+4a+2b=0\Rightarrow2a+b=-2$: $a=1$, $b=-4$. (b) $x^2(x+1)-4(x+1)=(x+1)(x-2)(x+2)$. (c) $P(3)=27+9-12-4=20$. [2, 1, 1.]`,
    planeDoc({ view: { xmin: -3, xmax: 3, ymin: -8, ymax: 6 }, points: [P(1, -6), P(2, 0)], step: { x: 1, y: 1 } })),
  W(2, "medium", 4, String.raw`For $P(x)=2x^3-5x^2-4x+3$: (a) list the possible rational zeros; (b) factor $P(x)$ completely, showing your test; (c) sketch $y=P(x)$ on the grid, labelling the intercepts.`,
    String.raw`(a) $\pm1,\pm3,\pm\tfrac12,\pm\tfrac32$. (b) $P(3)=54-45-12+3=0$; quotient $2x^2+x-1=(2x-1)(x+1)$: $P(x)=(x-3)(2x-1)(x+1)$. (c) zeros $-1,\tfrac12,3$; y-intercept 3; Q3 → Q1. [1, 2, 1.]`,
    planeDoc({ view: { xmin: -2, xmax: 4, ymin: -12, ymax: 8 }, step: { x: 0.5, y: 2 } })),
  W(2, "hard", 4, String.raw`$x-1$ and $x+2$ are factors of $P(x)=x^4+kx^3-7x^2+mx+12$. (a) Find $k$ and $m$. (b) Factor $P(x)$ completely. (c) Sketch $y=P(x)$ on the grid.`,
    String.raw`(a) $P(1)=k+m+6=0$; $P(-2)=-8k-2m=0\Rightarrow m=-4k$; so $k=2$, $m=-8$. (b) $P(x)=(x^2+x-2)(x^2+x-6)=(x-1)(x+2)(x+3)(x-2)$. (c) zeros $-3,-2,1,2$; y-intercept 12; up at both ends. [2, 1, 1.]`,
    planeDoc({ view: { xmin: -4, xmax: 3, ymin: -12, ymax: 20 }, step: { x: 1, y: 4 } })),
  W(3, "medium", 4, String.raw`(a) Solve $x^3-7x^2+7x+15=0$ algebraically. (b) Explain how the graph of $y=x^3-7x^2+7x+15$ confirms your answer. (c) Sketch it on the grid.`,
    String.raw`(a) $P(-1)=-1-7-7+15=0$; quotient $x^2-8x+15=(x-3)(x-5)$: $x=-1, 3, 5$. (b) the roots are the x-intercepts. (c) Q3 → Q1, crossing at $-1,3,5$, y-intercept 15. [2, 1, 1.]`,
    planeDoc({ view: { xmin: -2, xmax: 6, ymin: -20, ymax: 30 }, step: { x: 1, y: 5 } })),
  W(3, "hard", 4, String.raw`An open box is made from a 20 cm by 12 cm sheet by cutting squares of side $x$ cm from the corners. (a) Show that the volume is 256 cm³ when $x^3-16x^2+60x-64=0$. (b) Solve the equation and decide which solutions make sense. (c) Use the graph to explain why there are two possible boxes.`,
    String.raw`(a) $x(20-2x)(12-2x)=256\Rightarrow4x^3-64x^2+240x-256=0$, divide by 4. (b) $x=2$ works: $(x-2)(x^2-14x+32)=0$, $x=7\pm\sqrt{17}$; with $0\lt x\lt6$: $x=2$ or $x=7-\sqrt{17}\approx2.88$. (c) the volume curve rises to a maximum and falls, crossing the line $V=256$ twice. [1, 2, 1.]`,
    planeDoc({ view: { xmin: 0, xmax: 6.2, ymin: 0, ymax: 300 }, curves: [{ f: (x) => x * (20 - 2 * x) * (12 - 2 * x), a: 0, b: 6, color: "violet" }, { f: () => 256, color: "green" }], step: { x: 0.5, y: 50 }, xlabel: "x (cm)", ylabel: "V (cm³)" })),
  W(3, "hard", 4, String.raw`(a) Solve $(x^2+2x)^2-11(x^2+2x)+24=0$ by substituting $u=x^2+2x$. (b) Check one solution. (c) Explain why a quartic equation can have at most 4 real roots, and how many this one has.`,
    String.raw`(a) $u^2-11u+24=0\Rightarrow u=3$ or $8$. $x^2+2x-3=0\Rightarrow x=1,-3$; $x^2+2x-8=0\Rightarrow x=2,-4$. (b) e.g. $x=2$: $u=8$, $64-88+24=0$. (c) a degree-4 polynomial has at most 4 linear factors; this one has all 4. [2, 1, 1.]`,
    planeDoc({ view: { xmin: -5, xmax: 3, ymin: -10, ymax: 30 }, curves: [{ f: (x) => (x * x + 2 * x) ** 2 - 11 * (x * x + 2 * x) + 24, color: "violet" }], step: { x: 1, y: 5 } })),
  W(4, "medium", 4, String.raw`(a) Write the family of cubics with zeros $-2$, $1$ and $3$. (b) Find the member through $(2,8)$ and its y-intercept. (c) Sketch that member and the member with $k=1$ on the grid, and describe how they are related.`,
    String.raw`(a) $y=k(x+2)(x-1)(x-3)$. (b) $k(4)(1)(-1)=-4k=8\Rightarrow k=-2$; y-intercept $-2(2)(-1)(-3)=-12$. (c) $k=1$ has y-intercept 6; $k=-2$ is that graph stretched by 2 and reflected in the x-axis; same x-intercepts. [1, 2, 1.]`,
    planeDoc({ view: { xmin: -3, xmax: 4, ymin: -20, ymax: 20 }, step: { x: 1, y: 4 } })),
  W(4, "hard", 4, String.raw`A quartic has a double zero at $-1$ and zeros $2\pm\sqrt3$, and its y-intercept is 3. (a) Find its equation. (b) Find $f(1)$. (c) Sketch the graph, showing the behaviour at each zero.`,
    String.raw`(a) $(x-2)^2-3=x^2-4x+1$: $y=k(x+1)^2(x^2-4x+1)$; $f(0)=k=3$. (b) $f(1)=3(4)(-2)=-24$. (c) up at both ends; touches at $-1$; crosses at $2-\sqrt3\approx0.27$ and $2+\sqrt3\approx3.73$. [2, 1, 1.]`,
    planeDoc({ view: { xmin: -2, xmax: 4.5, ymin: -40, ymax: 20 }, step: { x: 0.5, y: 5 } })),
  W(5, "medium", 4, String.raw`The graph of $f(x)=x^3-2x^2-5x+6$ is shown. (a) Read the zeros and confirm one algebraically. (b) Solve $f(x)\ge0$ and $f(x)\lt0$, in interval notation. (c) Explain why the endpoints are included in one answer and not the other.`,
    String.raw`(a) zeros $-2, 1, 3$; e.g. $f(1)=1-2-5+6=0$. (b) $f\ge0$: $[-2,1]\cup[3,\infty)$; $f\lt0$: $(-\infty,-2)\cup(1,3)$. (c) at the zeros $f=0$, which satisfies $\ge$ but not $\lt$. [1, 2, 1.]`,
    planeDoc({ view: { xmin: -3, xmax: 4, ymin: -10, ymax: 10 }, curves: [{ f: (x) => x ** 3 - 2 * x * x - 5 * x + 6, color: "violet" }], step: { x: 1, y: 2 } })),
  W(5, "hard", 4, String.raw`The graphs of $y=x^3$ and $y=3x+2$ are shown. (a) Find where they meet algebraically. (b) Solve $x^3\le3x+2$ and explain the role of the touching point. (c) For which $k$ does $x^3=3x+k$ have three real solutions?`,
    String.raw`(a) $x^3-3x-2=(x+1)^2(x-2)=0$: $x=-1$ (touch) and $x=2$. (b) $(x+1)^2(x-2)\le0\Rightarrow x\le2$; at $x=-1$ the cubic touches the line but does not cross, so the sign does not change. (c) $x^3-3x$ has turning values $2$ and $-2$: $-2\lt k\lt2$. [1, 2, 1.]`,
    planeDoc({ view: { xmin: -2.5, xmax: 2.5, ymin: -8, ymax: 10 }, curves: [{ f: (x) => x ** 3, color: "violet" }, { f: (x) => 3 * x + 2, color: "green" }], step: { x: 0.5, y: 2 } })),
  W(6, "medium", 4, String.raw`Solve $x^3+2x^2-11x-12\ge0$. (a) Factor completely. (b) Make a sign chart. (c) State the solution in interval notation and show it on a number line (use the x-axis of the grid).`,
    String.raw`(a) $P(-1)=0$; quotient $x^2+x-12=(x+4)(x-3)$: $(x+1)(x+4)(x-3)$. (b) signs on $x\lt-4$, $(-4,-1)$, $(-1,3)$, $x>3$: −, +, −, +. (c) $[-4,-1]\cup[3,\infty)$, closed dots. [1, 2, 1.]`,
    planeDoc({ view: { xmin: -6, xmax: 5, ymin: -2, ymax: 2 }, step: { x: 1, y: 1 } })),
  W(6, "hard", 4, String.raw`(a) Solve $x^4-5x^3+4x^2\lt0$ algebraically. (b) Explain why $x=0$ is not part of the solution even though the polynomial does not change sign there. (c) Solve $x^4-5x^3+4x^2\le0$ and compare.`,
    String.raw`(a) $x^2(x-1)(x-4)\lt0$: signs +, +, −, +: $1\lt x\lt4$. (b) at $x=0$ the value is 0, which is not $\lt0$; on both sides it is positive. (c) $\le0$: $\{0\}\cup[1,4]$ — the touching zero becomes an isolated solution. [2, 1, 1.]`,
    planeDoc({ view: { xmin: -1.5, xmax: 5, ymin: -12, ymax: 8 }, curves: [{ f: (x) => x ** 4 - 5 * x ** 3 + 4 * x * x, color: "violet" }], step: { x: 0.5, y: 2 } })),
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
