// MHF4U chapter 6 written-response (long_answer) bank questions for printed chapter tests (Part C).
// Each question carries a figure (SVG uploaded to graph-images; paper tests print image_url).
//   node scripts/mhf4u-ch6/written.mjs           -> dry run
//   node scripts/mhf4u-ch6/written.mjs --apply   -> uploads figures, inserts rows not already in the bank (matched by prompt)
// Run --apply only after the chapter 6 lessons exist (it links each row to its lesson by title).
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";
import crypto from "crypto";
import { planeDoc, P } from "./bank/fig.mjs";

const T = { 1: "6.1 The Exponential Function and Its Inverse", 2: "6.2 Logarithms", 3: "6.3 Transformations of Logarithmic Functions", 4: "6.4 The Power Law of Logarithms", 5: "6.5 Logarithmic Scales" };
const S = String.raw;
const L = Math.log10;
const va = (x) => ({ x, color: "red", dash: true });
const W = (t, difficulty, points, prompt, feedback, fig) => ({ topic: T[t], difficulty, points, prompt, feedback, kind: "long_answer", answer: null, choices: null, fig });
const lg = (b) => (x) => Math.log(x) / Math.log(b);
const YX = { m: 1, b: 0, color: "gray", dash: true };

export const WRITTEN = [
  W(1, "medium", 4, String.raw`The graph of $y=\left(\tfrac32\right)^x$ is shown. (a) Make a table of values for $x=-2,-1,0,1,2$ and the matching table for its inverse. (b) Sketch the inverse on the grid. (c) State the domain, range, intercept and asymptote of the inverse.`,
    String.raw`(a) $\tfrac49,\tfrac23,1,\tfrac32,\tfrac94$; inverse points $(\tfrac49,-2)$, $(\tfrac23,-1)$, $(1,0)$, $(\tfrac32,1)$, $(\tfrac94,2)$. (b) reflection in $y=x$, increasing, hugging the y-axis as $x\to0^+$. (c) domain $x>0$, range $\mathbb R$, x-intercept 1, VA $x=0$. [1, 1, 2.]`,
    planeDoc({ view: { xmin: -3, xmax: 5, ymin: -3, ymax: 5 }, lines: [YX], curves: [{ f: (x) => 1.5 ** x, color: "blue" }], points: [P(0, 1), P(2, 2.25)], step: { x: 1, y: 1 } })),
  W(1, "hard", 4, String.raw`For $f(x)=4\cdot2^x-2$: (a) find the inverse with the power isolated; (b) state its domain, range and vertical asymptote; (c) find the exact intercepts of the inverse; (d) sketch $f$ and its inverse on the grid and explain how the asymptotes are related.`,
    String.raw`(a) $x=4\cdot2^y-2\Rightarrow2^y=\tfrac{x+2}4$. (b) domain $x>-2$, range $\mathbb R$, VA $x=-2$. (c) $f(0)=2$ → inverse x-intercept $(2,0)$; $f(x)=0\Rightarrow2^x=\tfrac12\Rightarrow x=-1$ → inverse y-intercept $(0,-1)$. (d) mirror images in $y=x$; the horizontal asymptote $y=-2$ of $f$ reflects to $x=-2$. [1, 1, 1, 1.]`,
    planeDoc({ view: { xmin: -4, xmax: 8, ymin: -4, ymax: 8 }, lines: [YX], step: { x: 1, y: 1 } })),
  W(2, "medium", 4, S`The graph of $y=\log_2x$ is shown. (a) Write $\log_2 32=5$ in exponential form. (b) Evaluate $\log_2\frac18$ and $\log_2\sqrt[3]{4}$ exactly. (c) Use the graph to explain why $\log_2 20$ is between 4 and 5.`,
    S`(a) $2^5=32$. (b) $-3$; $4^{1/3}=2^{2/3}$, so $\frac23$. (c) $2^4=16$ and $2^5=32$, and $16<20<32$; the curve is increasing. [1, 2, 1.]`,
    planeDoc({ view: { xmin: -1, xmax: 34, ymin: -4, ymax: 6 }, curves: [{ f: lg(2), a: 0.01, color: "violet" }], points: [P(16, 4), P(32, 5)], step: { x: 4, y: 1 } })),
  W(2, "hard", 4, S`(a) Evaluate $\log_{16}8$ and $\log_{1/8}4$ exactly. (b) Find $x$ if $\log_x 32=\frac52$. (c) Evaluate $\log_3\left(\log_2 512\right)$ exactly. Show your reasoning.`,
    S`(a) $2^{4y}=2^3\Rightarrow\frac34$; $2^{-3y}=2^2\Rightarrow-\frac23$. (b) $x^{5/2}=32\Rightarrow x=32^{2/5}=4$. (c) $\log_2512=9$, $\log_39=2$. [2, 1, 1.]`,
    planeDoc({ view: { xmin: -1, xmax: 17, ymin: -2, ymax: 3 }, curves: [{ f: lg(16), a: 0.01, color: "violet" }], points: [P(8, 0.75)], step: { x: 2, y: 0.5 } })),
  W(3, "medium", 4, S`For $y=\log_3(x+2)-1$: (a) state the asymptote, domain and range; (b) map $\left(\frac13,-1\right)$, $(1,0)$, $(3,1)$, $(9,2)$ of $y=\log_3x$; (c) find the x-intercept.`,
    S`(a) $x=-2$; $x>-2$; $\mathbb R$. (b) $\left(-\frac53,-2\right)$, $(-1,-1)$, $(1,0)$, $(7,1)$. (c) $\log_3(x+2)=1\Rightarrow x=1$. [1, 2, 1.]`,
    planeDoc({ view: { xmin: -4, xmax: 10, ymin: -4, ymax: 3 }, vlines: [va(-2)], curves: [{ f: (x) => lg(3)(x + 2) - 1, a: -1.995, color: "violet" }], step: { x: 1, y: 1 } })),
  W(3, "hard", 4, S`The graph shown has the form $y=a\log_2(x-d)+c$. It has asymptote $x=1$ and passes through $(2,3)$ and $(5,-1)$. (a) Find $d$, $c$ and $a$. (b) State the domain. (c) Find the x-intercept.`,
    S`(a) $d=1$; $(2,3)$: $\log_21=0$, so $c=3$; $(5,-1)$: $2a+3=-1$, $a=-2$. (b) $x>1$. (c) $-2\log_2(x-1)+3=0\Rightarrow x-1=2^{1.5}\Rightarrow x\approx3.83$. [2, 1, 1.]`,
    planeDoc({ view: { xmin: -1, xmax: 9, ymin: -4, ymax: 6 }, vlines: [va(1)], curves: [{ f: (x) => -2 * lg(2)(x - 1) + 3, a: 1.003, color: "violet" }], points: [P(2, 3), P(5, -1)], step: { x: 1, y: 1 } })),
  W(4, "medium", 4, S`(a) Prove $\log_b x^n=n\log_bx$. (b) Use it to evaluate $\log_9 27^4$. (c) Solve $1.03^t=2$ and interpret it as a doubling time.`,
    S`(a) let $\log_bx=m$, $x=b^m$, $x^n=b^{mn}$, so $\log_bx^n=mn$. (b) $4\log_927=4\cdot\frac32=6$. (c) $t=\frac{\log2}{\log1.03}\approx23.45$: about 23.4 years at 3\%. [2, 1, 1.]`,
    planeDoc({ view: { xmin: -1, xmax: 30, ymin: -0.2, ymax: 3 }, lines: [{ m: 0, b: 2, color: "blue", dash: true }], curves: [{ f: (t) => 1.03 ** t, color: "violet" }], step: { x: 5, y: 0.5 } })),
  W(4, "hard", 4, S`(a) Solve $4^x=3^{x+1}$ exactly and to three decimals. (b) Verify your answer by substitution. (c) The graphs of $y=4^x$ and $y=3^{x+1}$ are shown; explain what the solution means on the graph.`,
    S`(a) $x\log4=(x+1)\log3\Rightarrow x=\frac{\log3}{\log4-\log3}\approx3.819$. (b) both sides $\approx199$. (c) the x-coordinate of the intersection. [2, 1, 1.]`,
    planeDoc({ view: { xmin: -1, xmax: 5, ymin: -10, ymax: 260 }, curves: [{ f: (x) => 4 ** x, color: "violet" }, { f: (x) => 3 ** (x + 1), color: "green" }], step: { x: 1, y: 50 } })),
  W(5, "medium", 4, S`(a) Find the pH of a solution with $[\text{H}^+]=5.6\times10^{-5}$. (b) A second solution has pH $7.8$; find its $[\text{H}^+]$. (c) How many times as acidic is the first solution?`,
    S`(a) $\approx4.25$. (b) $10^{-7.8}\approx1.6\times10^{-8}$. (c) $10^{7.8-4.25}=10^{3.55}\approx3550$. [1, 1, 2.]`,
    planeDoc({ view: { xmin: -0.5, xmax: 14.5, ymin: -1, ymax: 1.5 }, points: [{ x: 4.25, y: 0, label: "A", color: "red" }, { x: 7.8, y: 0, label: "B", color: "blue" }], step: { x: 1, y: 1 } })),
  W(5, "hard", 4, S`One machine produces $70$ dB. (a) Find its intensity ($I_0=10^{-12}$). (b) Find the level of five such machines together. (c) How many machines are needed to reach $80$ dB? Explain.`,
    S`(a) $10^{-5}$ W/m$^2$. (b) $10\log\left(5\times10^7\right)\approx77.0$ dB. (c) $80$ dB is $10$ times the intensity of one machine: $10$ machines. [1, 2, 1.]`,
    planeDoc({ view: { xmin: -0.5, xmax: 10.5, ymin: 68, ymax: 82 }, curves: [{ f: (n) => 70 + 10 * L(n), a: 1, color: "violet" }], points: [P(5, 76.99), P(10, 80)], step: { x: 1, y: 2 } })),
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
