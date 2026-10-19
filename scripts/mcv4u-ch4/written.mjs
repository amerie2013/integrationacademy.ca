// MCV4U chapter 4 written-response (long_answer) bank questions for printed chapter tests (Part C).
// Each question carries a figure (SVG uploaded to graph-images; paper tests print image_url).
//   node scripts/mcv4u-ch4/written.mjs           -> dry run
//   node scripts/mcv4u-ch4/written.mjs --apply   -> uploads figures, inserts rows not already in the bank (matched by prompt)
// Run --apply only after the chapter 4 lessons are loaded and renumber4.mjs has run (it links each row to its lesson by title).
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";
import crypto from "crypto";
import { planeDoc, P } from "./bank/fig.mjs";

const T = {
  1: "4.1 Instantaneous Rates of Change of Sinusoidal Functions", 2: "4.2 Derivatives of the Sine and Cosine Functions",
  3: "4.3 Differentiation Rules for Sinusoidal Functions", 4: "4.4 Applications of Sinusoidal Functions and Their Derivatives",
};
const W = (t, difficulty, points, prompt, feedback, fig) => ({ topic: T[t], difficulty, points, prompt, feedback, kind: "long_answer", answer: null, choices: null, fig });
const S = String.raw;
const PI = Math.PI;

export const WRITTEN = [
  W(1, "medium", 4, S`For $f(x)=\sin x$ at $a=\frac\pi3$: (a) evaluate $\frac{f(a+h)-f(a)}{h}$ for $h=0.1,\ 0.01,\ 0.001$; (b) state the instantaneous rate of change it suggests; (c) explain why the secant slopes are all slightly smaller than that value.`,
    S`(a) $0.4559$, $0.4957$, $0.4996$. (b) $0.5=\cos\frac\pi3$. (c) The curve is concave down near $\frac\pi3$, so secants to the right are less steep than the tangent. [2, 1, 1.]`,
    planeDoc({ view: { xmin: 0, xmax: 2.2, ymin: 0.4, ymax: 1.1 }, curves: [{ f: Math.sin, color: "violet" }, { f: (x) => Math.sin(PI / 3) + 0.5 * (x - PI / 3), color: "green", a: 0.4, b: 1.8 }, { f: (x) => Math.sin(PI / 3) + 0.4559 * (x - PI / 3), color: "amber", a: 0.4, b: 1.8 }], points: [P(PI / 3, Math.sin(PI / 3)), P(PI / 3 + 0.1, Math.sin(PI / 3 + 0.1), false)], step: { x: 0.25, y: 0.1 } })),
  W(1, "hard", 4, S`(a) Evaluate $\frac{\sin h}{h}$ and $\frac{\cos h-1}{h}$ for $h=0.01$. (b) Use $\cos(x+h)=\cos x\cos h-\sin x\sin h$ and these limits to prove that the slope of $y=\cos x$ is $-\sin x$.`,
    S`(a) $\approx0.99998$ and $\approx-0.00500$, suggesting limits 1 and 0. (b) $\frac{\cos(x+h)-\cos x}{h}=\cos x\cdot\frac{\cos h-1}{h}-\sin x\cdot\frac{\sin h}{h}\to\cos x\cdot0-\sin x\cdot1=-\sin x$. [1, 3.]`,
    planeDoc({ view: { xmin: -3, xmax: 3, ymin: -0.4, ymax: 1.2 }, curves: [{ f: (h) => (Math.abs(h) < 1e-6 ? 1 : Math.sin(h) / h), color: "violet" }], points: [{ x: 0, y: 1, color: "red", open: true }], step: { x: 0.5, y: 0.2 } })),
  W(2, "medium", 4, S`For $f(x)=x\cos x+\sin x$: (a) find $f'(x)$ and simplify; (b) find the equation of the tangent at $x=\pi$; (c) verify the slope on the graph.`,
    S`(a) $f'=\cos x-x\sin x+\cos x=2\cos x-x\sin x$. (b) $f(\pi)=-\pi$, $f'(\pi)=-2$: $y=-2x+\pi$. (c) The tangent drops 2 units for each unit to the right at $(\pi,-\pi)$. [2, 2.]`,
    planeDoc({ view: { xmin: 0, xmax: 5, ymin: -5, ymax: 2.5 }, curves: [{ f: (x) => x * Math.cos(x) + Math.sin(x), color: "violet" }, { f: (x) => -2 * x + PI, color: "green", a: 2, b: 4.3 }], points: [P(PI, -PI)], step: { x: 0.5, y: 1 } })),
  W(2, "hard", 4, S`(a) Use the quotient rule to show $\frac{d}{dx}\tan x=\sec^2x$. (b) Find the local extrema of $y=\tan x-2x$ on $\left(-\frac\pi2,\frac\pi2\right)$.`,
    S`(a) $\frac{\cos x\cos x-\sin x(-\sin x)}{\cos^2x}=\frac1{\cos^2x}$. (b) $y'=\sec^2x-2=0\Rightarrow\cos x=\pm\frac1{\sqrt2}\Rightarrow x=\pm\frac\pi4$. Local max at $-\frac\pi4$: $-1+\frac\pi2\approx0.571$; local min at $\frac\pi4$: $1-\frac\pi2\approx-0.571$. [1, 3.]`,
    planeDoc({ view: { xmin: -1.6, xmax: 1.6, ymin: -2.5, ymax: 2.5 }, curves: [{ f: (x) => Math.tan(x) - 2 * x, a: -1.45, b: 1.45, color: "violet" }], vlines: [{ x: -PI / 2, color: "red", dash: true }, { x: PI / 2, color: "red", dash: true }], points: [P(-PI / 4, -1 + PI / 2), P(PI / 4, 1 - PI / 2)], step: { x: 0.5, y: 0.5 } })),
  W(3, "medium", 4, S`For $y=3\cos\left(2x-\frac\pi3\right)+1$: (a) find $y'$; (b) state the greatest slope and explain how $A$, $k$, $c$, $d$ affect it; (c) find the tangent at $x=\frac\pi6$.`,
    S`(a) $y'=-6\sin\left(2x-\frac\pi3\right)$. (b) 6 $=|Ak|$; $c$ and $d$ only shift the graph. (c) At $\frac\pi6$ the inner angle is 0: $y=4$, slope 0, tangent $y=4$. [1, 2, 1.]`,
    planeDoc({ view: { xmin: -0.5, xmax: 3.5, ymin: -2.5, ymax: 4.8 }, curves: [{ f: (x) => 3 * Math.cos(2 * x - PI / 3) + 1, color: "violet" }, { f: () => 4, color: "green", a: -0.2, b: 1.2 }], points: [P(PI / 6, 4)], step: { x: 0.5, y: 1 } })),
  W(3, "hard", 4, S`Find the absolute extrema of $y=\sin^2x+\cos x$ on $[0,2\pi]$, showing the derivative and every candidate.`,
    S`$y'=2\sin x\cos x-\sin x=\sin x(2\cos x-1)$: zero at $0,\pi,2\pi$ and $\frac\pi3,\frac{5\pi}3$. Values: $y(0)=y(2\pi)=1$, $y\left(\frac\pi3\right)=y\left(\frac{5\pi}3\right)=\frac34+\frac12=1.25$, $y(\pi)=-1$. Absolute maximum 1.25, absolute minimum $-1$. [2, 2.]`,
    planeDoc({ view: { xmin: 0, xmax: 6.5, ymin: -1.4, ymax: 1.6 }, curves: [{ f: (x) => Math.sin(x) ** 2 + Math.cos(x), a: 0, b: 2 * PI, color: "violet" }], points: [P(PI / 3, 1.25), P((5 * PI) / 3, 1.25), P(PI, -1)], step: { x: 0.5, y: 0.5 } })),
  W(4, "medium", 4, S`A mass moves with $s(t)=4\cos(\pi t)$ cm. (a) Find $v(t)$ and $a(t)$. (b) Find the maximum speed and where the mass is then. (c) Show that $a=-\pi^2s$ and explain what it means.`,
    S`(a) $v=-4\pi\sin(\pi t)$, $a=-4\pi^2\cos(\pi t)$. (b) $4\pi\approx12.6$ cm/s, at $s=0$. (c) $a=-\pi^2(4\cos\pi t)=-\pi^2s$: the acceleration always points back toward the centre (simple harmonic motion). [1, 2, 1.]`,
    planeDoc({ view: { xmin: 0, xmax: 4.2, ymin: -55, ymax: 55 }, curves: [{ f: (t) => 4 * Math.cos(PI * t), a: 0, b: 4.2, color: "violet" }, { f: (t) => -4 * PI * Math.sin(PI * t), a: 0, b: 4.2, color: "blue" }, { f: (t) => -4 * PI * PI * Math.cos(PI * t), a: 0, b: 4.2, color: "amber" }], step: { x: 0.5, y: 10 }, xlabel: "t (s)" })),
  W(4, "hard", 4, S`A Ferris wheel of radius 16 m has its centre 18 m above the ground and turns once every 48 s. A rider boards at the bottom. (a) Write $h(t)$. (b) Find the greatest vertical speed. (c) Find the first time the rider rises at 1 m/s.`,
    S`(a) $h(t)=18-16\cos\left(\frac{\pi}{24}t\right)$. (b) $h'=\frac{2\pi}3\sin\left(\frac\pi{24}t\right)$: greatest $\frac{2\pi}3\approx2.09$ m/s. (c) $\sin\left(\frac\pi{24}t\right)=\frac{3}{2\pi}\approx0.477\Rightarrow t\approx3.80$ s. [1, 1, 2.]`,
    planeDoc({ view: { xmin: 0, xmax: 100, ymin: 0, ymax: 38 }, curves: [{ f: (t) => 18 - 16 * Math.cos((PI / 24) * t), a: 0, b: 96, color: "violet" }], points: [P(3.8, 18 - 16 * Math.cos((PI / 24) * 3.8)), P(12, 18)], step: { x: 10, y: 5 }, xlabel: "t (s)", ylabel: "h (m)" })),
  W(4, "hard", 4, S`A rectangle is inscribed in the ellipse $\frac{x^2}{25}+\frac{y^2}{9}=1$ with sides parallel to the axes. Using the corner $(5\cos\theta,3\sin\theta)$, find the largest area and the corresponding dimensions.`,
    S`$A(\theta)=4(5\cos\theta)(3\sin\theta)=30\sin2\theta$, $0\lt\theta\lt\frac\pi2$. $A'=60\cos2\theta=0\Rightarrow\theta=\frac\pi4$. Maximum 30, with sides $10\cos\frac\pi4\approx7.07$ and $6\sin\frac\pi4\approx4.24$. [2, 2.]`,
    planeDoc({ view: { xmin: -6, xmax: 6, ymin: -4, ymax: 4 }, curves: [{ f: (x) => 3 * Math.sqrt(Math.max(0, 1 - (x * x) / 25)), a: -5, b: 5, color: "violet" }, { f: (x) => -3 * Math.sqrt(Math.max(0, 1 - (x * x) / 25)), a: -5, b: 5, color: "violet" }], segs: [{ pts: [[-3.536, -2.121], [3.536, -2.121], [3.536, 2.121], [-3.536, 2.121], [-3.536, -2.121]], color: "green" }], points: [P(3.536, 2.121)], step: { x: 1, y: 1 } })),
  W(2, "hard", 3, S`Find $\frac{d^{n}}{dx^{n}}(\sin x+\cos x)$ for $n=1,2,3,4$, describe the pattern, and use it to evaluate the 2026th derivative at $x=0$.`,
    S`$n=1$: $\cos x-\sin x$; $n=2$: $-\sin x-\cos x$; $n=3$: $-\cos x+\sin x$; $n=4$: $\sin x+\cos x$ — period 4. $2026=4\cdot506+2$, so the 2026th derivative is $-\sin x-\cos x$, equal to $-1$ at 0. [1, 1, 1.]`,
    planeDoc({ view: { xmin: -2 * PI, xmax: 2 * PI, ymin: -1.7, ymax: 1.7 }, curves: [{ f: (x) => Math.sin(x) + Math.cos(x), color: "violet" }, { f: (x) => -Math.sin(x) - Math.cos(x), color: "blue" }], step: { x: 1, y: 0.5 } })),
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
