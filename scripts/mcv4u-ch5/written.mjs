// MCV4U chapter 5 written-response (long_answer) bank questions for printed chapter tests (Part C).
// Each question carries a figure (SVG uploaded to graph-images; paper tests print image_url).
//   node scripts/mcv4u-ch5/written.mjs           -> dry run
//   node scripts/mcv4u-ch5/written.mjs --apply   -> uploads figures, inserts rows not already in the bank (matched by prompt)
// Run --apply only after the chapter 5 lessons are loaded and renumber5.mjs has run (it links each row to its lesson by title).
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";
import crypto from "crypto";
import { planeDoc, P } from "./bank/fig.mjs";

const T = {
  1: "5.1 Rates of Change and the Number e", 2: "5.2 The Natural Logarithm and Its Derivative",
  3: "5.3 Derivatives of Exponential Functions", 4: "5.4 Differentiation Rules for Exponential Functions",
  5: "5.5 Making Connections: Exponential Models",
};
const W = (t, difficulty, points, prompt, feedback, fig) => ({ topic: T[t], difficulty, points, prompt, feedback, kind: "long_answer", answer: null, choices: null, fig });
const S = String.raw;
const E = Math.E;
const ln = Math.log;

export const WRITTEN = [
  W(1, "medium", 4, S`For $f(x)=1.8^x$: (a) estimate $f'(0)$ with the centred quotient $\frac{f(0.001)-f(-0.001)}{0.002}$; (b) use your estimate to find the slope at $x=2$; (c) explain why slope $\div$ height is the same at every point of the graph.`,
    S`(a) $\approx0.5878$ (this is $\ln1.8$). (b) $f'(2)=1.8^2\times0.5878\approx1.904$. (c) $\frac{1.8^{x+h}-1.8^x}{h}=1.8^x\cdot\frac{1.8^h-1}{h}$, so the slope is always $1.8^x$ times the fixed number $f'(0)$. [1, 1, 2.]`,
    planeDoc({ view: { xmin: -2, xmax: 3, ymin: -1, ymax: 6 }, curves: [{ f: (x) => 1.8 ** x, color: "violet" }, { f: (x) => 3.24 + 1.9044 * (x - 2), color: "green", a: 0.9, b: 2.9 }], points: [P(2, 3.24), P(0, 1)], step: { x: 0.5, y: 1 } })),
  W(1, "hard", 4, S`One dollar earns 100% interest per year, compounded $n$ times a year. (a) Write the amount after one year and evaluate it for $n=1,2,5,50$. (b) What number does it approach as $n\to\infty$, and what does that mean for continuous compounding? (c) Find the smallest $n$ for which the amount is within 0.01 of that limit.`,
    S`(a) $\left(1+\frac1n\right)^n$: 2, 2.25, 2.48832, 2.69159. (b) $e\approx2.71828$: compounding continuously turns one dollar into $e$ dollars. (c) $n=135$ gives $2.70828$, short by $0.009999\lt0.01$; $n=134$ is short by just over 0.01. [1, 1, 2.]`,
    planeDoc({ view: { xmin: -2, xmax: 50, ymin: 1.8, ymax: 2.9 }, curves: [{ f: (x) => (1 + 1 / x) ** x, a: 1, b: 50, color: "violet" }], lines: [{ m: 0, b: E, color: "gray", dash: true, label: "y = e" }], points: [P(1, 2, false), P(2, 2.25, false), P(5, 2.48832, false), P(50, 2.69159, false)], step: { x: 5, y: 0.1 }, xlabel: "n" })),
  W(2, "medium", 4, S`For $y=\ln(x^2-2x+2)$: (a) find $y'$ and explain why the function is defined for every $x$; (b) find and classify the critical point; (c) find the inflection points.`,
    S`(a) $y'=\frac{2x-2}{x^2-2x+2}$; $x^2-2x+2=(x-1)^2+1\gt0$. (b) $x=1$: $y'$ changes from $-$ to $+$, minimum $(1,0)$. (c) $y''=\frac{-2x(x-2)}{(x^2-2x+2)^2}$ changes sign at $x=0$ and $x=2$: $(0,\ln2)$ and $(2,\ln2)$. [1, 1, 2.]`,
    planeDoc({ view: { xmin: -3, xmax: 5, ymin: -0.5, ymax: 3 }, curves: [{ f: (x) => ln(x * x - 2 * x + 2), color: "violet" }], points: [P(1, 0), P(0, ln(2)), P(2, ln(2))], step: { x: 0.5, y: 0.5 } })),
  W(2, "hard", 4, S`(a) Use the change-of-base formula to prove that $\frac{d}{dx}\log_bx=\frac1{x\ln b}$. (b) Find the equation of the tangent to $y=\log_4(3x+1)$ at $x=5$. (c) Explain why its slope is less than the slope of $y=\ln(3x+1)$ at the same point.`,
    S`(a) $\log_bx=\frac{\ln x}{\ln b}$, and $\ln b$ is a constant. (b) $y(5)=\log_416=2$; $y'=\frac{3}{(3x+1)\ln4}=\frac3{16\ln4}\approx0.1353$: $y=2+0.1353(x-5)$. (c) $\log_4u=\frac{\ln u}{\ln4}$ with $\ln4\gt1$, so every slope is divided by $\ln4\approx1.386$. [1, 2, 1.]`,
    planeDoc({ view: { xmin: -1, xmax: 12, ymin: -1, ymax: 3.5 }, curves: [{ f: (x) => ln(3 * x + 1) / ln(4), a: -0.3, color: "violet" }, { f: (x) => 2 + 0.13525 * (x - 5), color: "green", a: 1, b: 11 }], points: [P(5, 2)], step: { x: 1, y: 0.5 } })),
  W(3, "medium", 4, S`For $y=4e^x-e^{2x}$: (a) find the maximum point; (b) find the x-intercept; (c) find the slope of the graph at the x-intercept.`,
    S`(a) $y'=4e^x-2e^{2x}=2e^x(2-e^x)=0\Rightarrow x=\ln2$; $y=8-4=4$, maximum $(\ln2,4)\approx(0.693,4)$. (b) $e^x(4-e^x)=0\Rightarrow x=\ln4\approx1.386$. (c) $y'(\ln4)=16-32=-16$. [2, 1, 1.]`,
    planeDoc({ view: { xmin: -3, xmax: 2, ymin: -3, ymax: 5 }, curves: [{ f: (x) => 4 * Math.exp(x) - Math.exp(2 * x), color: "violet" }], points: [P(ln(2), 4), P(ln(4), 0)], step: { x: 0.5, y: 1 } })),
  W(3, "hard", 4, S`For $y=2^x+2^{-x}$: (a) find $y'$; (b) show that the only critical point is a minimum and find it; (c) find the equation of the tangent at $x=1$.`,
    S`(a) $y'=\ln2\left(2^x-2^{-x}\right)$. (b) $2^x=2^{-x}\iff x=0$; $y'\lt0$ for $x\lt0$ and $y'\gt0$ for $x\gt0$: minimum $(0,2)$. (c) $y(1)=2.5$, $y'(1)=1.5\ln2\approx1.040$: $y=2.5+1.040(x-1)$. [1, 2, 1.]`,
    planeDoc({ view: { xmin: -3, xmax: 3, ymin: -0.5, ymax: 6 }, curves: [{ f: (x) => 2 ** x + 2 ** -x, color: "violet" }, { f: (x) => 2.5 + 1.0397 * (x - 1), color: "green", a: -0.3, b: 2.4 }], points: [P(0, 2), P(1, 2.5)], step: { x: 0.5, y: 1 } })),
  W(4, "medium", 4, S`For $y=x^4e^{-x}$: (a) find and classify the critical points; (b) find the inflection points; (c) describe the end behaviour.`,
    S`(a) $y'=x^3e^{-x}(4-x)$: minimum $(0,0)$, maximum $(4,256e^{-4})\approx(4,4.689)$. (b) $y''=x^2e^{-x}(x-2)(x-6)$ changes sign at $x=2$ and $x=6$ (not at 0): $(2,16e^{-2})\approx(2,2.165)$, $(6,1296e^{-6})\approx(6,3.212)$. (c) $y\to0$ as $x\to\infty$; $y\to\infty$ as $x\to-\infty$. [2, 1, 1.]`,
    planeDoc({ view: { xmin: -1.5, xmax: 16, ymin: -0.5, ymax: 6 }, curves: [{ f: (x) => x ** 4 * Math.exp(-x), color: "violet" }], points: [P(4, 4.689), P(2, 2.165), P(6, 3.212)], step: { x: 1, y: 1 } })),
  W(4, "hard", 4, S`Let $y=x^{\cos x}$, $x\gt0$. (a) Explain why neither the power rule nor the exponential rule applies. (b) Use logarithmic differentiation to find $y'$. (c) Find the slope at $x=\pi$.`,
    S`(a) Both the base and the exponent vary. (b) $\ln y=\cos x\ln x\Rightarrow\frac{y'}{y}=-\sin x\ln x+\frac{\cos x}{x}$, so $y'=x^{\cos x}\left(\frac{\cos x}{x}-\sin x\ln x\right)$. (c) $y(\pi)=\frac1\pi$, $\frac{y'}{y}=-\frac1\pi$: $y'(\pi)=-\frac1{\pi^2}\approx-0.101$. [1, 2, 1.]`,
    planeDoc({ view: { xmin: -0.5, xmax: 8, ymin: -0.5, ymax: 7 }, curves: [{ f: (x) => x ** Math.cos(x), a: 0.05, b: 8, color: "violet" }, { f: (x) => 1 / Math.PI - (x - Math.PI) / Math.PI ** 2, color: "green", a: 2, b: 4.3 }], points: [P(Math.PI, 1 / Math.PI)], step: { x: 1, y: 1 } })),
  W(5, "medium", 4, S`A bacteria culture has 2500 cells at $t=0$ and 4000 cells after 3 hours. (a) Find a model $P(t)=P_0e^{kt}$. (b) When will there be 10 000 cells? (c) How fast is the culture growing at that moment?`,
    S`(a) $e^{3k}=1.6\Rightarrow k=\frac{\ln1.6}3\approx0.1567$: $P=2500e^{0.1567t}$. (b) $e^{kt}=4\Rightarrow t=\frac{3\ln4}{\ln1.6}\approx8.85$ h. (c) $P'=kP\approx0.1567\times10000\approx1567$ cells per hour. [1, 2, 1.]`,
    planeDoc({ view: { xmin: -0.5, xmax: 12, ymin: -500, ymax: 13000 }, curves: [{ f: (t) => 2500 * Math.exp(0.15667 * t), a: 0, b: 10, color: "violet" }], points: [P(0, 2500), P(3, 4000), P(8.85, 10000)], step: { x: 1, y: 1000 }, xlabel: "t" })),
  W(5, "hard", 4, S`A body is found at 9 p.m. with temperature 30 °C; at 10 p.m. it is 27 °C. The room is 18 °C and normal body temperature is 37 °C. Assume $T=18+Ce^{-kt}$. (a) Find $k$ (per hour). (b) Estimate the time of death. (c) How fast was the body cooling at 9 p.m.?`,
    S`(a) $12e^{-k}=9\Rightarrow k=\ln\frac43\approx0.2877$. (b) From 37 °C: $19e^{-kt}=12\Rightarrow t=\frac{\ln(19/12)}{k}\approx1.60$ h before 9 p.m., about 7:24 p.m. (c) $T'=-k(T-18)=-0.2877\times12\approx-3.45$ °C per hour. [1, 2, 1.]`,
    planeDoc({ view: { xmin: -0.5, xmax: 12, ymin: -2, ymax: 42 }, curves: [{ f: (t) => 18 + 19 * Math.exp(-0.28768 * t), a: 0, b: 12, color: "violet" }], lines: [{ m: 0, b: 18, color: "gray", dash: true }], points: [P(0, 37), P(1.597, 30), P(2.597, 27)], step: { x: 1, y: 5 }, xlabel: "hours after death" })),
  W(5, "hard", 3, S`A pond is stocked with fish, and the population is $P(t)=\frac{600}{1+19e^{-0.5t}}$ after $t$ months. (a) How many fish were stocked? (b) Show that $P'=0.5P\left(1-\frac{P}{600}\right)$. (c) When is the population growing fastest, and how fast?`,
    S`(a) $P(0)=30$. (b) $P'=\frac{600\cdot9.5e^{-0.5t}}{(1+19e^{-0.5t})^2}=0.5\cdot\frac{600}{1+19e^{-0.5t}}\cdot\frac{19e^{-0.5t}}{1+19e^{-0.5t}}$, and the last factor is $1-\frac P{600}$. (c) At $P=300$: $t=2\ln19\approx5.89$ months, $P'=0.5\cdot300\cdot\frac12=75$ fish per month. [1, 1, 1.]`,
    planeDoc({ view: { xmin: -0.5, xmax: 16, ymin: -30, ymax: 680 }, curves: [{ f: (t) => 600 / (1 + 19 * Math.exp(-0.5 * t)), a: 0, b: 16, color: "violet" }], lines: [{ m: 0, b: 600, color: "gray", dash: true }], points: [P(0, 30), P(5.889, 300)], step: { x: 2, y: 100 }, xlabel: "t" })),
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
