// MHF4U chapter 8 written-response (long_answer) bank questions for printed chapter tests (Part C).
// Each question carries a figure (SVG uploaded to graph-images; paper tests print image_url).
//   node scripts/mhf4u-ch8/written.mjs           -> dry run
//   node scripts/mhf4u-ch8/written.mjs --apply   -> uploads figures, inserts rows not already in the bank (matched by prompt)
// Run --apply only after the chapter 8 lessons exist (it links each row to its lesson by title).
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";
import crypto from "crypto";
import { planeDoc, P } from "./bank/fig.mjs";

const T = { 1: "8.1 Sums and Differences of Functions", 2: "8.2 Products and Quotients of Functions", 3: "8.3 Composite Functions", 4: "8.4 Inequalities of Combined Functions", 5: "8.5 Modelling with Combined Functions" };
const S = String.raw;
const L = Math.log10;
const va = (x) => ({ x, color: "red", dash: true });
const W = (t, difficulty, points, prompt, feedback, fig) => ({ topic: T[t], difficulty, points, prompt, feedback, kind: "long_answer", answer: null, choices: null, fig });
const lg = (b) => (x) => Math.log(x) / Math.log(b);
const YX = { m: 1, b: 0, color: "gray", dash: true };

export const WRITTEN = [
  W(1, "medium", 4, String.raw`$f(x)=x^2-4$ and $g(x)=2x-1$. (a) Find $(f+g)(x)$ and $(f-g)(x)$. (b) Find the zeros of $f-g$. (c) Explain, using the graph, what those zeros mean.`,
    String.raw`(a) $x^2+2x-5$; $x^2-2x-3$. (b) $(x-3)(x+1)=0$: $x=3$, $-1$. (c) the parabola and the line cross at $x=-1$ and $x=3$. [2, 1, 1.]`,
    planeDoc({ view: { xmin: -3, xmax: 5, ymin: -5, ymax: 10 }, curves: [{ f: (x) => x * x - 4, color: "blue" }], lines: [{ m: 2, b: -1, color: "gray" }], step: { x: 1, y: 1 } })),
  W(1, "hard", 5, String.raw`Revenue is $R(x)=24x$ and cost is $C(x)=0.03x^2+6x+1500$ dollars for $x$ items. (a) Find $P(x)$. (b) Find the break-even quantities. (c) Find the maximum profit. (d) Mark these on the graph.`,
    String.raw`(a) $P=-0.03x^2+18x-1500$. (b) $x^2-600x+50\,000=0$: $x=300\pm\sqrt{40\,000}=100$ or $500$. (c) vertex $x=300$, $P=1200$. (d) zeros at $100$, $500$; vertex $(300,1200)$. [1, 2, 1, 1.]`,
    planeDoc({ view: { xmin: -20, xmax: 620, ymin: -1600, ymax: 1600 }, curves: [{ f: (x) => -0.03 * x * x + 18 * x - 1500, color: "violet" }], step: { x: 50, y: 200 } })),
  W(2, "medium", 4, String.raw`$f(x)=x^2-9$ and $g(x)=x^2+x-6$. (a) Simplify $\frac fg$. (b) State its domain. (c) Find its hole and vertical asymptote. (d) Sketch it on the grid.`,
    String.raw`(a) $\frac{(x-3)(x+3)}{(x+3)(x-2)}=\frac{x-3}{x-2}$. (b) $x\ne-3,\ 2$. (c) hole at $(-3,\frac65)$; VA $x=2$. (d) HA $y=1$, zero at $3$. [1, 1, 1, 1.]`,
    planeDoc({ view: { xmin: -6, xmax: 6, ymin: -6, ymax: 6 }, step: { x: 1, y: 1 } })),
  W(2, "hard", 5, String.raw`A vibration is $d(t)=6(0.8)^t\cos(2\pi t)$ mm. (a) Identify the envelope and the period. (b) Find $d(1)$ and $d(1.5)$. (c) When is the envelope first below $0.5$ mm? (d) Explain the graph's shape.`,
    String.raw`(a) $6(0.8)^t$; period $1$ s. (b) $4.8$; $6(0.8)^{1.5}\cos3\pi\approx-4.29$. (c) $t>\frac{\log(1/12)}{\log0.8}\approx11.14$ s. (d) a cosine wave squeezed between $\pm6(0.8)^t$. [1, 2, 1, 1.]`,
    planeDoc({ view: { xmin: -0.2, xmax: 8, ymin: -6.5, ymax: 6.5 }, curves: [{ f: (t) => 6 * 0.8 ** t, a: 0, color: "gray" }, { f: (t) => -6 * 0.8 ** t, a: 0, color: "gray" }, { f: (t) => 6 * 0.8 ** t * Math.cos(2 * Math.PI * t), a: 0, color: "violet" }], step: { x: 1, y: 1 } })),
  W(3, "medium", 4, String.raw`$f(x)=\sqrt{x+1}$ and $g(x)=x^2-1$. (a) Find $f(g(x))$ and its domain. (b) Find $g(f(x))$ and its domain. (c) Use the graph to explain why the formulas look simpler than the domains.`,
    String.raw`(a) $\sqrt{x^2}=|x|$, all real $x$. (b) $(\sqrt{x+1})^2-1=x$, domain $x\ge-1$. (c) $g(f(x))=x$ is only the part of the line with $x\ge-1$ because the inner root needs $x\ge-1$. [1, 2, 1.]`,
    planeDoc({ view: { xmin: -3, xmax: 4, ymin: -2, ymax: 4 }, curves: [{ f: (x) => x, a: -1, color: "violet" }, { f: (x) => Math.abs(x), color: "blue" }], step: { x: 1, y: 1 } })),
  W(3, "hard", 5, String.raw`A ripple has radius $r(t)=1.5t+0.5$ m and area $A(r)=\pi r^2$. (a) Write $A(r(t))$. (b) Find the area at $t=4$. (c) When is the area $100\ \text{m}^2$? (d) Explain why a composite is the right model.`,
    String.raw`(a) $\pi(1.5t+0.5)^2$. (b) $r=6.5$, $A\approx132.7\ \text{m}^2$. (c) $1.5t+0.5=\sqrt{100/\pi}\approx5.642\Rightarrow t\approx3.43$ s. (d) area depends on radius, which depends on time. [1, 1, 2, 1.]`,
    planeDoc({ view: { xmin: 0, xmax: 6, ymin: 0, ymax: 300 }, curves: [{ f: (t) => Math.PI * (1.5 * t + 0.5) ** 2, a: 0, color: "violet" }], step: { x: 1, y: 50 } })),
  W(4, "medium", 4, String.raw`Solve $x^3-x^2-12x\ge0$. Show the factoring, a sign chart, and the solution on the graph.`,
    String.raw`$x(x-4)(x+3)\ge0$; signs $-,+,-,+$ on $x<-3$, $-3<x<0$, $0<x<4$, $x>4$; solution $-3\le x\le0$ or $x\ge4$. [1, 2, 1.]`,
    planeDoc({ view: { xmin: -5, xmax: 6, ymin: -30, ymax: 30 }, curves: [{ f: (x) => x ** 3 - x * x - 12 * x, color: "violet" }], step: { x: 1, y: 5 } })),
  W(4, "hard", 5, String.raw`(a) Solve $\dfrac{x+3}{x-2}\le4$ algebraically. (b) Solve $2^x>3x$ using the graph, giving the non-exact crossing to two decimals. (c) Explain why you must not multiply by $x-2$ in (a).`,
    String.raw`(a) $\frac{11-3x}{x-2}\le0$: $x<2$ or $x\ge\frac{11}3$. (b) crossings $x\approx0.46$ and $x\approx3.31$; $x<0.46$ or $x>3.31$. (c) $x-2$ can be negative, which would reverse the inequality. [2, 2, 1.]`,
    planeDoc({ view: { xmin: -1, xmax: 5, ymin: -2, ymax: 20 }, curves: [{ f: (x) => 2 ** x, color: "violet" }], lines: [{ m: 3, b: 0, color: "blue" }], step: { x: 0.5, y: 2 } })),
  W(5, "hard", 6, String.raw`Monthly sales are $S(t)=250+12t+60\sin\left(\frac{\pi t}6\right)$ units. (a) Identify the trend, the swing and the period. (b) Find $S(3)$ and $S(9)$. (c) Use the graph to estimate the first month when sales exceed $500$. (d) Explain why sales can fall from one month to the next even though the trend rises.`,
    String.raw`(a) trend $250+12t$, swing $60$, period $12$ months. (b) $346$; $298$. (c) about $t\approx23.1$ (month 24); at the earlier peak $S(15)=490$ falls just short. (d) the seasonal part can decrease faster than $12$ per month. [1, 2, 2, 1.]`,
    planeDoc({ view: { xmin: 0, xmax: 30, ymin: 150, ymax: 750 }, curves: [{ f: (t) => 250 + 12 * t + 60 * Math.sin(Math.PI * t / 6), color: "violet" }], lines: [{ m: 0, b: 500, color: "blue", dash: true }], step: { x: 2, y: 50 } })),
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
