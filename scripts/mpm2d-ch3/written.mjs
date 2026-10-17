// MPM2D chapter 3 written-response (long_answer) bank questions for printed chapter tests (Part C).
// Each question carries a figure (SVG uploaded to graph-images; paper tests print image_url). Figures show the
// given information only, never the answer.
//   node scripts/mpm2d-ch3/written.mjs           -> dry run
//   node scripts/mpm2d-ch3/written.mjs --apply   -> uploads figures, inserts rows not already in the bank (matched by prompt)
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";
import crypto from "crypto";
import { planeDoc } from "../mth1w-ch4/figs4.mjs";
import { areaDoc, sqDoc } from "./bank/fig.mjs";

const T = { 1: "3.1 Expanding & Multiplying Polynomials", 2: "3.2 Common Factoring & Factoring by Grouping", 3: "3.3 Factoring Simple Trinomials (x² + bx + c)", 4: "3.4 Factoring Complex Trinomials (ax² + bx + c)", 5: "3.5 Special Products" };
const W = (t, difficulty, points, prompt, feedback, fig) => ({ topic: T[t], difficulty, points, prompt, feedback, kind: "long_answer", answer: null, choices: null, fig });
const grid = (view, step = { x: 1, y: 1 }) => planeDoc({ view, step });

export const WRITTEN = [
  W(1, "medium", 5, String.raw`A rectangular lawn is $(3x+2)$ m by $(2x-1)$ m. A square flower bed of side $x$ m is dug in it. (a) Write the area of the lawn as a simplified polynomial. (b) Write the area of the flower bed. (c) Write the area of grass that remains. (d) Find the grass area when $x=4$.`,
    String.raw`(a) $6x^2-3x+4x-2=6x^2+x-2$. (b) $x^2$. (c) $5x^2+x-2$. (d) $80+4-2=82$ m$^2$. [2, 1, 1, 1.]`,
    areaDoc(["3x", "+2"], ["2x", "-1"], [["?", "?"], ["?", "?"]])),
  W(1, "hard", 4, String.raw`(a) Expand and simplify $(n+1)^2-n^2$. (b) Explain what your answer says about the difference between consecutive square numbers. (c) Use it to calculate $51^2-50^2$. (d) Show that $(n+2)^2-n^2$ is always a multiple of $4$.`,
    String.raw`(a) $2n+1$. (b) Consecutive squares differ by the odd numbers $3, 5, 7, \ldots$ (c) $2(50)+1=101$. (d) $4n+4=4(n+1)$. [1, 1, 1, 1.]`,
    sqDoc("n + 1", "n", "(n + 1)² − n²")),
  W(2, "medium", 5, String.raw`(a) Factor $14x^3-21x^2$. (b) Factor $6ab+9a-4b-6$ by grouping. (c) Check your answer to (b) by expanding. (d) Explain how you chose the common factor in (a).`,
    String.raw`(a) $7x^2(2x-3)$. (b) $3a(2b+3)-2(2b+3)=(2b+3)(3a-2)$. (c) $6ab-4b+9a-6$ ✓ (d) GCF of 14 and 21 is 7; the lowest power of $x$ is $x^2$. [1, 2, 1, 1.]`,
    areaDoc(["?", "?"], ["?", "?"], [["6ab", "9a"], ["-4b", "-6"]])),
  W(2, "hard", 5, String.raw`A rectangle has area $20x^2+15x$. (a) Factor the area fully. (b) Give two different pairs of dimensions with whole-number coefficients that give this area. (c) If the width is $5x$, write the perimeter. (d) Find the perimeter when $x=2$.`,
    String.raw`(a) $5x(4x+3)$. (b) e.g. $5x$ by $4x+3$; $x$ by $20x+15$; $5$ by $4x^2+3x$. (c) $2(5x+4x+3)=18x+6$. (d) $42$. [1, 2, 1, 1.]`,
    areaDoc(["5x"], ["?", "?"], [["20x^2", "15x"]])),
  W(3, "medium", 5, String.raw`Consider $y=x^2-4x-21$. (a) Factor the right side. (b) State the zeros. (c) State the $y$-intercept. (d) Sketch the graph on the grid.`,
    String.raw`(a) $(x-7)(x+3)$. (b) $7$ and $-3$. (c) $-21$. (d) a parabola opening up through $(-3,0)$, $(7,0)$ and $(0,-21)$, lowest point at $x=2$. [2, 1, 1, 1.]`,
    grid({ xmin: -5, xmax: 9, ymin: -26, ymax: 10 }, { x: 1, y: 2 })),
  W(3, "hard", 5, String.raw`(a) Find all integers $b$ for which $x^2+bx-12$ factors over the integers. (b) Factor the trinomial for $b=4$ and give its zeros. (c) Explain why $b=5$ does not work. (d) Sketch $y=x^2+4x-12$ on the grid.`,
    String.raw`(a) $\pm11$, $\pm4$, $\pm1$. (b) $(x+6)(x-2)$; zeros $-6$ and $2$. (c) No factor pair of $-12$ has sum 5. (d) parabola through $(-6,0)$, $(2,0)$, $(0,-12)$. [2, 1, 1, 1.]`,
    grid({ xmin: -8, xmax: 4, ymin: -18, ymax: 8 }, { x: 1, y: 2 })),
  W(4, "medium", 5, String.raw`Factor $6x^2+7x-20$ by decomposition. (a) State $a\cdot c$ and the two numbers you need. (b) Split the middle term and group. (c) Check by expanding. (d) State the zeros of $y=6x^2+7x-20$.`,
    String.raw`(a) $-120$; $15$ and $-8$. (b) $3x(2x+5)-4(2x+5)=(2x+5)(3x-4)$. (c) $6x^2-8x+15x-20$ ✓ (d) $x=-2.5$ and $x=\frac43$. [1, 2, 1, 1.]`,
    areaDoc(["?", "?"], ["?", "?"], [["6x^2", "?"], ["?", "-20"]])),
  W(4, "hard", 5, String.raw`A rectangle has area $10x^2+19x+6$ and one side $2x+3$. (a) Find the other side. (b) Write the perimeter. (c) Check your answer to (a) for $x=3$. (d) Can $x$ be $-1$? Explain.`,
    String.raw`(a) $5x+2$. (b) $14x+10$. (c) area $90+57+6=153=9\times17$ ✓ (d) No: the sides would be $1$ and $-3$; a length cannot be negative. [2, 1, 1, 1.]`,
    areaDoc(["2x", "+3"], ["?", "?"], [["10x^2", "?"], ["?", "6"]])),
  W(5, "medium", 5, String.raw`Factor fully: (a) $36x^2-49$ (b) $4x^2+28x+49$ (c) $75-3x^2$. (d) Explain why $x^2+49$ does not factor over the real numbers.`,
    String.raw`(a) $(6x-7)(6x+7)$. (b) $(2x+7)^2$. (c) $3(5-x)(5+x)$. (d) A product of real binomials gives either a difference of squares or a trinomial with a middle term; it can never give a sum of squares. [1, 1, 2, 1.]`,
    sqDoc("6x", "7", "36x² − 49")),
  W(5, "hard", 5, String.raw`A square picture of side $x$ cm has a frame, and the whole framed picture is a square of side $(x+4)$ cm. (a) Write the area of the frame as a difference of squares. (b) Factor it using the difference-of-squares pattern. (c) Expand and simplify to check. (d) The frame has area $96$ cm$^2$. Find $x$.`,
    String.raw`(a) $(x+4)^2-x^2$. (b) $[(x+4)-x][(x+4)+x]=4(2x+4)=8(x+2)$. (c) $x^2+8x+16-x^2=8x+16$ ✓ (d) $8x+16=96\Rightarrow x=10$. [1, 2, 1, 1.]`,
    sqDoc("x + 4", "x", "frame")),
  W(5, "hard", 5, String.raw`Factor each expression fully, explaining your strategy: (a) $3x^3-3x$ (b) $2x^2-12x+18$ (c) $4x^2y-y$. (d) The graph of $y=3x^3-3x$ is shown. How does it confirm your answer to (a)?`,
    String.raw`(a) $3x(x^2-1)=3x(x-1)(x+1)$: GCF, then difference of squares. (b) $2(x^2-6x+9)=2(x-3)^2$: GCF, then perfect square. (c) $y(4x^2-1)=y(2x-1)(2x+1)$. (d) It crosses the $x$-axis at $-1$, $0$ and $1$ — one zero for each factor. [1, 1, 2, 1.]`,
    planeDoc({ view: { xmin: -2, xmax: 2, ymin: -4, ymax: 4 }, curves: [{ f: (x) => 3 * x ** 3 - 3 * x, color: "violet" }], step: { x: 0.5, y: 1 } })),
];

const APPLY = process.argv.includes("--apply");
if (process.argv[1] && import.meta.url.endsWith(process.argv[1].replace(/\\/g, "/").split("/").pop())) {
  const env = {};
  for (const line of readFileSync(".env.local", "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
  const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });
  const cid = (await db.from("courses").select("id").eq("code", "MPM2D").single()).data.id;
  const { data: lessons } = await db.from("lessons").select("id, title").eq("course_id", cid);
  const missing = WRITTEN.filter((w) => !lessons.some((l) => l.title === w.topic));
  if (missing.length) { console.log("No lesson for:", [...new Set(missing.map((w) => w.topic))]); process.exit(1); }
  const { data: existing } = await db.from("bank_questions").select("prompt").eq("course_id", cid).eq("kind", "long_answer");
  const have = new Set((existing ?? []).map((r) => r.prompt));
  const todo = WRITTEN.filter((w) => !have.has(w.prompt));
  console.log(`${WRITTEN.length} written questions; ${todo.length} not yet in the bank; ${WRITTEN.reduce((s, r) => s + r.points, 0)} marks; ${WRITTEN.filter((w) => w.fig).length} with figures`);
  if (!APPLY) { console.log("Dry run — use --apply."); process.exit(0); }
  for (const w of todo) {
    const key = `mpm2d-${w.topic.split(" ")[0].replace(".", "-")}/written-${crypto.createHash("sha1").update(w.fig).digest("hex").slice(0, 10)}.svg`;
    const upl = await db.storage.from("graph-images").upload(key, Buffer.from(w.fig), { upsert: true, contentType: "image/svg+xml" });
    if (upl.error) throw upl.error;
    const image_url = db.storage.from("graph-images").getPublicUrl(key).data.publicUrl;
    const { fig, ...row } = w;
    const r = await db.from("bank_questions").insert({ ...row, image_url, course_id: cid, lesson_id: lessons.find((l) => l.title === w.topic).id });
    if (r.error) throw r.error;
  }
  console.log(`inserted ${todo.length}`);
}
