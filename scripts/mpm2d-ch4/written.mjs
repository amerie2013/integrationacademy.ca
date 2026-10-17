// MPM2D chapter 4 written-response (long_answer) bank questions for printed chapter tests (Part C).
// Each question carries a figure (SVG uploaded to graph-images; paper tests print image_url). Figures show the
// given information only, never the answer. Run --apply AFTER the lessons are loaded (4.7 is a new lesson).
//   node scripts/mpm2d-ch4/written.mjs           -> dry run
//   node scripts/mpm2d-ch4/written.mjs --apply   -> uploads figures, inserts rows not already in the bank (matched by prompt)
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";
import crypto from "crypto";
import { planeDoc } from "../mth1w-ch4/figs4.mjs";

const T = { 1: "4.1 Introducing Quadratic Relations", 2: "4.2 Key Features of a Parabola", 3: "4.3 Transformations & Vertex Form", 4: "4.4 Graphing from Vertex Form", 5: "4.5 Factored Form & the Zeros", 6: "4.6 Standard Form & Converting Between Forms", 7: "4.7 Comparing y = x² and y = 2ˣ" };
const W = (t, difficulty, points, prompt, feedback, fig) => ({ topic: T[t], difficulty, points, prompt, feedback, kind: "long_answer", answer: null, choices: null, fig });
const grid = (view, step = { x: 1, y: 1 }, extra = {}) => planeDoc({ view, step, ...extra });

export const WRITTEN = [
  W(1, "medium", 5, String.raw`A ball's height (m) is recorded every second: $t: 0,1,2,3,4,5$; $h: 2,22,32,32,22,2$. (a) Use finite differences to show the relation is quadratic. (b) Find $a$. (c) Estimate the maximum height and when it occurs. (d) Write a model in vertex form.`,
    String.raw`(a) First differences $20,10,0,-10,-20$; second differences $-10$ (constant). (b) $a=-5$. (c) Symmetric about $t=2.5$: about $33.25$ m. (d) $h=-5(t-2.5)^2+33.25$ (check $t=0$: $2$ ✓). [2, 1, 1, 1.]`,
    planeDoc({ view: { xmin: -0.5, xmax: 5.5, ymin: 0, ymax: 36 }, points: [[0, 2], [1, 22], [2, 32], [3, 32], [4, 22], [5, 2]].map(([x, y]) => ({ x, y, color: "blue" })), xlabel: "t (s)", ylabel: "h (m)", step: { x: 1, y: 4 } })),
  W(1, "hard", 5, String.raw`Rectangles have a perimeter of $24$ cm. (a) Make a table of area for widths $1$ to $6$ cm. (b) Show that area is a quadratic function of width. (c) Write an equation for the area $A$ in terms of the width $w$. (d) Find the largest possible area and describe that rectangle.`,
    String.raw`(a) $11,20,27,32,35,36$. (b) First differences $9,7,5,3,1$; second differences $-2$. (c) $A=w(12-w)$. (d) $36$ cm$^2$: a $6$ cm by $6$ cm square. [1, 2, 1, 1.]`,
    grid({ xmin: 0, xmax: 12, ymin: 0, ymax: 40 }, { x: 1, y: 4 }, { xlabel: "w (cm)", ylabel: "A (cm²)" })),
  W(2, "medium", 5, String.raw`For $y=x^2-2x-8$: (a) find the zeros (b) find the axis of symmetry and the vertex (c) state the $y$-intercept and the range (d) sketch the parabola on the grid.`,
    String.raw`(a) $(x-4)(x+2)$: $4$ and $-2$. (b) $x=1$; vertex $(1,-9)$. (c) $-8$; $y\ge-9$. (d) through $(-2,0)$, $(4,0)$, $(0,-8)$, $(1,-9)$. [1, 2, 1, 1.]`,
    grid({ xmin: -4, xmax: 6, ymin: -10, ymax: 8 }, { x: 1, y: 2 })),
  W(2, "hard", 5, String.raw`A ball is thrown so that $h=-5t^2+20t+25$ (metres, seconds). (a) Find the maximum height and when it occurs. (b) Find when the ball lands. (c) Find its height after 1 s. (d) State a sensible domain and range.`,
    String.raw`(a) $t=2$: $45$ m. (b) $-5(t-5)(t+1)=0$: $5$ s. (c) $40$ m. (d) $0\le t\le5$; $0\le h\le45$. [1, 2, 1, 1.]`,
    grid({ xmin: 0, xmax: 6, ymin: 0, ymax: 50 }, { x: 1, y: 5 }, { xlabel: "t (s)", ylabel: "h (m)" })),
  W(3, "medium", 5, String.raw`For $y=-2(x+1)^2+8$: (a) describe the transformations of $y=x^2$ (b) state the vertex, axis and optimal value (c) find the images of $(1,1)$ and $(2,4)$ (d) sketch it on the grid with $y=x^2$.`,
    String.raw`(a) reflection in the $x$-axis, vertical stretch by 2, left 1, up 8. (b) $(-1,8)$; $x=-1$; maximum $8$. (c) $(0,6)$ and $(1,0)$. (d) parabola opening down through $(-3,0)$, $(1,0)$, $(0,6)$. [2, 1, 1, 1.]`,
    grid({ xmin: -5, xmax: 3, ymin: -4, ymax: 10 }, { x: 1, y: 1 }, { curves: [{ f: (x) => x * x, color: "gray" }] })),
  W(3, "hard", 5, String.raw`The parabola shown has vertex $(3,-2)$ and passes through $(5,6)$. (a) Find its equation in vertex form. (b) Find its zeros. (c) Find its $y$-intercept. (d) Describe it as a transformation of $y=x^2$.`,
    String.raw`(a) $6=4a-2\Rightarrow a=2$: $y=2(x-3)^2-2$. (b) $(x-3)^2=1$: $2$ and $4$. (c) $18-2=16$. (d) stretch by 2, right 3, down 2. [2, 1, 1, 1.]`,
    planeDoc({ view: { xmin: -1, xmax: 7, ymin: -3, ymax: 10 }, curves: [{ f: (x) => 2 * (x - 3) ** 2 - 2, color: "violet" }], points: [{ x: 3, y: -2, label: "(3, −2)", color: "blue" }, { x: 5, y: 6, label: "(5, 6)", color: "red" }], step: { x: 1, y: 1 } })),
  W(4, "medium", 5, String.raw`(a) Graph $y=\frac12(x-2)^2-8$ using the vertex and the step pattern. (b) Find the zeros algebraically. (c) Find the $y$-intercept. (d) Check that your graph agrees with (b) and (c).`,
    String.raw`(a) vertex $(2,-8)$; over 2 up 2: $(0,-6)$, $(4,-6)$; over 4 up 8: $(-2,0)$, $(6,0)$. (b) $(x-2)^2=16$: $-2$ and $6$. (c) $-6$. (d) the step points include both zeros and the $y$-intercept. [2, 1, 1, 1.]`,
    grid({ xmin: -4, xmax: 8, ymin: -9, ymax: 4 })),
  W(4, "hard", 5, String.raw`A diver's height above the water is $h=-5(t-0.5)^2+20$ (metres, seconds). (a) Find the maximum height and when it occurs. (b) How high is the diving platform? (c) When does the diver enter the water? (d) For how long is the diver more than $15$ m above the water?`,
    String.raw`(a) $20$ m at $0.5$ s. (b) $t=0$: $18.75$ m. (c) $(t-0.5)^2=4$: $t=2.5$ s. (d) $(t-0.5)^2<1$: $-0.5<t<1.5$; with $t\ge0$, from $0$ to $1.5$ s, so $1.5$ s. [1, 1, 1, 2.]`,
    grid({ xmin: 0, xmax: 3, ymin: 0, ymax: 22 }, { x: 0.5, y: 2 }, { xlabel: "t (s)", ylabel: "h (m)" })),
  W(5, "medium", 5, String.raw`For $y=-(x+3)(x-5)$: (a) state the zeros (b) find the axis and the vertex (c) find the $y$-intercept (d) sketch the parabola on the grid.`,
    String.raw`(a) $-3$ and $5$. (b) $x=1$; $-(4)(-4)=16$: $(1,16)$. (c) $15$. (d) opens down through the zeros, vertex and $(0,15)$. [1, 2, 1, 1.]`,
    grid({ xmin: -5, xmax: 7, ymin: -4, ymax: 18 }, { x: 1, y: 2 })),
  W(5, "hard", 5, String.raw`A parabolic arch is $24$ m wide at ground level and $18$ m high. (a) Write its equation as $y=ax(x-24)$. (b) Find the height $4$ m from one foot. (c) A truck $4$ m wide and $6$ m tall drives through the middle. Will it fit? Explain.`,
    String.raw`(a) $18=a(12)(-12)$: $a=-\frac18$. (b) $-\frac18(4)(-20)=10$ m. (c) The truck's sides are at $x=10$ and $x=14$, where $y=-\frac18(10)(-14)=17.5$ m $>6$ m: yes, it fits. [2, 1, 2.]`,
    planeDoc({ view: { xmin: -2, xmax: 26, ymin: -1, ymax: 20 }, curves: [{ f: (x) => -(x * (x - 24)) / 8, a: 0, b: 24, color: "violet" }], points: [{ x: 0, y: 0, label: "(0, 0)", color: "red" }, { x: 24, y: 0, label: "(24, 0)", color: "red" }], xlabel: "m", ylabel: "m", step: { x: 2, y: 2 } })),
  W(6, "medium", 5, String.raw`For $y=x^2+6x-7$: (a) complete the square to write it in vertex form (b) factor it (c) state the vertex, zeros and $y$-intercept (d) sketch it on the grid.`,
    String.raw`(a) $(x+3)^2-16$. (b) $(x+7)(x-1)$. (c) vertex $(-3,-16)$; zeros $-7$, $1$; $y$-intercept $-7$. (d) parabola through those points. [1, 1, 2, 1.]`,
    grid({ xmin: -9, xmax: 3, ymin: -18, ymax: 6 }, { x: 1, y: 2 })),
  W(6, "hard", 5, String.raw`A company's profit (thousands of dollars) is $P=-2x^2+24x-54$, where $x$ is the number of items in thousands. (a) Write $P$ in vertex form. (b) Write $P$ in factored form. (c) State the maximum profit and the break-even points. (d) Explain which form gives each answer most easily.`,
    String.raw`(a) $-2(x-6)^2+18$. (b) $-2(x-3)(x-9)$. (c) $18$ thousand dollars at $6$ thousand items; break-even at $3$ and $9$ thousand items. (d) vertex form shows the maximum; factored form shows where profit is zero. [1, 1, 2, 1.]`,
    grid({ xmin: 0, xmax: 12, ymin: -20, ymax: 22 }, { x: 1, y: 4 }, { xlabel: "x (thousands)", ylabel: "P" })),
  W(7, "medium", 5, String.raw`(a) Make tables of values for $y=x^2$ and $y=2^x$ for $x=-2$ to $5$. (b) Graph both on the grid. (c) Where are the two relations equal for $x\ge0$? (d) Describe two differences between the graphs.`,
    String.raw`(a) $x^2$: $4,1,0,1,4,9,16,25$; $2^x$: $\frac14,\frac12,1,2,4,8,16,32$. (b) — (c) $x=2$ and $x=4$. (d) e.g. $x^2$ is symmetric and has a minimum at 0; $2^x$ is always positive, passes through $(0,1)$ and eventually grows faster. [1, 1, 1, 2.]`,
    grid({ xmin: -3, xmax: 6, ymin: -1, ymax: 34 }, { x: 1, y: 2 })),
  W(7, "hard", 5, String.raw`(a) Evaluate $2^{-3}$, $5^0$ and $\left(\frac13\right)^{-2}$. (b) Use an exponent law to explain why $b^0=1$. (c) A colony has $N=400(2)^t$ bacteria after $t$ hours. Find $N$ two hours before $t=0$ and the time when $N=6400$. (d) Is this growth quadratic or exponential? Explain using the table of values.`,
    String.raw`(a) $\frac18$, $1$, $9$. (b) $\frac{b^n}{b^n}=b^{n-n}=b^0$, and $\frac{b^n}{b^n}=1$. (c) $N(-2)=100$; $2^t=16$, $t=4$ h. (d) Exponential: the values have a constant ratio of 2, not constant second differences. [1, 1, 2, 1.]`,
    planeDoc({ view: { xmin: -3, xmax: 5, ymin: 0, ymax: 7000 }, curves: [{ f: (t) => 400 * 2 ** t, color: "red" }], points: [{ x: 0, y: 400, label: "(0, 400)", color: "blue" }], xlabel: "t (h)", ylabel: "N", step: { x: 1, y: 1000 } })),
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
