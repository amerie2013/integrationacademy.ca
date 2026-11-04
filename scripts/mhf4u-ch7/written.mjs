// MHF4U chapter 7 written-response (long_answer) bank questions for printed chapter tests (Part C).
// Each question carries a figure (SVG uploaded to graph-images; paper tests print image_url).
//   node scripts/mhf4u-ch7/written.mjs           -> dry run
//   node scripts/mhf4u-ch7/written.mjs --apply   -> uploads figures, inserts rows not already in the bank (matched by prompt)
// Run --apply only after the chapter 7 lessons exist (it links each row to its lesson by title).
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";
import crypto from "crypto";
import { planeDoc, P } from "./bank/fig.mjs";

const T = { 1: "7.1 Equivalent Forms of Exponential Equations", 2: "7.2 Solving Exponential Equations", 3: "7.3 Product and Quotient Laws of Logarithms", 4: "7.4 Solving Logarithmic Equations", 5: "7.5 Exponential and Logarithmic Models" };
const S = String.raw;
const L = Math.log10;
const va = (x) => ({ x, color: "red", dash: true });
const W = (t, difficulty, points, prompt, feedback, fig) => ({ topic: T[t], difficulty, points, prompt, feedback, kind: "long_answer", answer: null, choices: null, fig });
const lg = (b) => (x) => Math.log(x) / Math.log(b);
const YX = { m: 1, b: 0, color: "gray", dash: true };

export const WRITTEN = [
  W(1, "medium", 4, String.raw`(a) Write $\frac{8^{x}\cdot4}{2^{x-1}}$ as a single power of $2$. (b) Solve $8^{x}\cdot4=2^{x-1}\cdot64$. (c) The graph shows $y=2^{x+2}$ and $y=4\cdot2^x$; explain why they are the same curve.`,
    String.raw`(a) $2^{3x+2-(x-1)}=2^{2x+3}$. (b) $2^{3x+2}=2^{x+5}\Rightarrow x=\tfrac32$. (c) $2^{x+2}=2^x\cdot2^2=4\cdot2^x$: a shift of 2 left equals a vertical stretch by 4. [1, 2, 1.]`,
    planeDoc({ view: { xmin: -4, xmax: 2.5, ymin: -1, ymax: 20 }, curves: [{ f: (x) => 2 ** (x + 2), color: "violet" }], points: [P(-2, 1), P(0, 4)], step: { x: 1, y: 2 } })),
  W(1, "hard", 5, String.raw`Solve $5^{x^2-3}=25^{x}$ and $3^{x+2}-3^{x}=72$. For the first, use the graph of $y=x^2-2x-3$ to show both roots, and check each root in the original equation.`,
    String.raw`First: $x^2-3=2x\Rightarrow(x-3)(x+1)=0$, $x=3$ or $x=-1$; checks $5^6=25^3$ and $5^{-2}=25^{-1}$. Second: $3^x(9-1)=72\Rightarrow3^x=9$, $x=2$. [3, 2.]`,
    planeDoc({ view: { xmin: -3, xmax: 5, ymin: -5, ymax: 6 }, curves: [{ f: (x) => x * x - 2 * x - 3, color: "violet" }], step: { x: 1, y: 1 } })),
  W(2, "medium", 4, String.raw`Solve $4\cdot3^{x-1}+2=50$ to three decimals. Show the isolating step, the logarithm step and a check. Mark the solution on the graph of $y=4\cdot3^{x-1}+2$.`,
    String.raw`$3^{x-1}=12\Rightarrow x=1+\frac{\log12}{\log3}\approx3.262$; check $4(12)+2=50$. [1, 2, 1.]`,
    planeDoc({ view: { xmin: -1, xmax: 5, ymin: -5, ymax: 80 }, curves: [{ f: (x) => 4 * 3 ** (x - 1) + 2, color: "violet" }], lines: [{ m: 0, b: 50, color: "blue", dash: true }], step: { x: 1, y: 10 } })),
  W(2, "hard", 5, String.raw`(a) Solve $9^x-7\cdot3^x+10=0$ exactly. (b) Solve $2^{x+1}=5^{x-1}$ exactly and to three decimals. (c) Use the graph to explain how many solutions part (a) has.`,
    String.raw`(a) $u=3^x$: $(u-2)(u-5)=0$, $x=\frac{\log2}{\log3}$ or $\frac{\log5}{\log3}$. (b) $x=\frac{\log2+\log5}{\log5-\log2}=\frac{1}{\log2.5}\approx2.513$. (c) the curve crosses zero twice. [2, 2, 1.]`,
    planeDoc({ view: { xmin: -1, xmax: 2, ymin: -4, ymax: 8 }, curves: [{ f: (x) => 9 ** x - 7 * 3 ** x + 10, color: "violet" }], step: { x: 0.5, y: 1 } })),
  W(3, "medium", 4, String.raw`(a) Expand $\log_2\dfrac{16x^3}{\sqrt y}$. (b) Condense $2\log a+\log b-3\log c$. (c) Evaluate $\log_4 2+\log_4 32$. (d) Use the graph of $y=\log_2x$ to check part (c) with $2\times32=64$.`,
    String.raw`(a) $4+3\log_2x-\tfrac12\log_2y$. (b) $\log\frac{a^2b}{c^3}$. (c) $\log_464=3$. (d) $\log_22+\log_232=6=\log_264$, and $\log_464=\frac{6}{2}=3$. [1, 1, 1, 1.]`,
    planeDoc({ view: { xmin: -2, xmax: 70, ymin: -1, ymax: 7 }, curves: [{ f: (x) => Math.log2(x), a: 0.05, color: "violet" }], points: [P(2, 1), P(32, 5), P(64, 6)], step: { x: 8, y: 1 } })),
  W(4, "medium", 4, String.raw`Solve $\log_2x+\log_2(x-6)=4$. State the domain, show the condensing step, reject any extraneous root, and confirm with the graph.`,
    String.raw`Domain $x>6$; $x(x-6)=16\Rightarrow(x-8)(x+2)=0$; $x=8$ ($-2$ rejected); check $3+1=4$. [1, 1, 1, 1.]`,
    planeDoc({ view: { xmin: 5, xmax: 12, ymin: -2, ymax: 7 }, curves: [{ f: (x) => Math.log2(x) + Math.log2(x - 6), a: 6.01, color: "violet" }], lines: [{ m: 0, b: 4, color: "blue", dash: true }], step: { x: 1, y: 1 } })),
  W(4, "hard", 5, String.raw`(a) Solve $(\log_3x)^2-\log_3\left(x^2\right)=3$. (b) Solve $\log(x+3)-\log(x-1)=\log x$. (c) Explain, using the graph, why (b) has only one solution.`,
    String.raw`(a) $u^2-2u-3=0$: $x=27$ or $x=\frac13$. (b) $x+3=x^2-x\Rightarrow x^2-2x-3=0$, $x=3$ ($-1$ rejected). (c) the two sides exist only for $x>1$ and cross once. [2, 2, 1.]`,
    planeDoc({ view: { xmin: 0.5, xmax: 7, ymin: -0.5, ymax: 1.5 }, curves: [{ f: (x) => L((x + 3) / (x - 1)), a: 1.05, color: "violet" }, { f: (x) => L(x), a: 0.5, color: "blue" }], step: { x: 1, y: 0.5 } })),
  W(5, "hard", 6, String.raw`Tea at $92^\circ$C is placed in a $20^\circ$C room and is $64^\circ$C after $10$ min. (a) Write a model $T=20+72b^t$. (b) When will it be $35^\circ$C? (c) How long does the temperature difference take to halve? (d) Explain the asymptote shown on the graph.`,
    String.raw`(a) $b^{10}=\frac{44}{72}$, $b\approx0.9519$. (b) $72b^t=15\Rightarrow t=\frac{10\log(15/72)}{\log(44/72)}\approx31.9$ min. (c) $t=\frac{10\log0.5}{\log(44/72)}\approx14.1$ min. (d) $T\to20$: the tea approaches room temperature. [1, 2, 2, 1.]`,
    planeDoc({ view: { xmin: -2, xmax: 60, ymin: 0, ymax: 100 }, curves: [{ f: (t) => 20 + 72 * (44 / 72) ** (t / 10), a: 0, color: "violet" }], lines: [{ m: 0, b: 20, color: "red", dash: true }], step: { x: 5, y: 10 } })),
  W(5, "medium", 4, String.raw`A 6000 dollars investment earns $4.2\%$ per year compounded monthly. (a) Write the model. (b) When will it reach 9000 dollars? (c) Find the effective annual rate. (d) Mark the answer to (b) on the graph.`,
    String.raw`(a) $A=6000(1.0035)^{12t}$. (b) $12t=\frac{\log1.5}{\log1.0035}\approx116.0$ months, $t\approx9.67$ years. (c) $1.0035^{12}-1\approx4.28\%$. (d) the curve meets $A=9000$ near $t\approx9.7$. [1, 1, 1, 1.]`,
    planeDoc({ view: { xmin: 0, xmax: 15, ymin: 5000, ymax: 12000 }, curves: [{ f: (t) => 6000 * 1.0035 ** (12 * t), a: 0, color: "violet" }], lines: [{ m: 0, b: 9000, color: "blue", dash: true }], step: { x: 1, y: 1000 } })),
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
