// MCR3U chapter 1 written-response (long_answer) bank questions for printed chapter tests (Part C).
// Each question carries a figure (SVG uploaded to graph-images; paper tests print image_url).
//   node scripts/mcr3u-ch1/written.mjs           -> dry run
//   node scripts/mcr3u-ch1/written.mjs --apply   -> uploads figures, inserts rows not already in the bank (matched by prompt)
// Run --apply only after the chapter 1 lessons exist (it links each row to its lesson by title).
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";
import crypto from "crypto";
import { planeDoc, P, sideways, mapDoc } from "./bank/fig.mjs";

const T = {
  1: "1.1 Relations and Functions", 2: "1.2 Function Notation", 3: "1.3 Parent Functions", 4: "1.4 Domain and Range",
  5: "1.5 Inverse Functions", 6: "1.6 Translations and Vertical Stretches", 7: "1.7 Horizontal Stretches, Compressions and Reflections", 8: "1.8 Combining Transformations",
};
const W = (t, difficulty, points, prompt, feedback, fig) => ({ topic: T[t], difficulty, points, prompt, feedback, kind: "long_answer", answer: null, choices: null, fig });
const V8 = { xmin: -8, xmax: 8, ymin: -8, ymax: 8 };

export const WRITTEN = [
  W(1, "medium", 4, String.raw`The mapping diagram and the graph each show a relation. (a) Is each a function? Justify. (b) State the domain and range of the mapping-diagram relation. (c) Is the graphed relation one-to-one? Explain.`,
    String.raw`Mapping: inputs $-3,1,4$; the input $1$ maps to $2$ and to $6$, so not a function; $D=\{-3,1,4\}$, $R=\{0,2,6\}$. Graph ($x=(y-2)^2-3$, a sideways parabola): not a function — e.g. $x=1$ meets it at $y=0$ and $y=4$; one-to-one does not apply because it is not a function. [2, 1, 1.]`,
    mapDoc([[-3, 0], [1, 2], [1, 6], [4, 6]])),
  W(1, "hard", 4, String.raw`The graph shows the relation $x=(y-2)^2-3$. (a) Use the vertical-line test to explain why it is not a function. (b) For which values of $k$ does the line $x=k$ meet it exactly once, twice, never? (c) Write two functions whose graphs together make the relation.`,
    String.raw`(a) $x=1$: $(y-2)^2=4$, $y=0$ or $4$. (b) vertex $(-3,2)$: once at $k=-3$, twice for $k>-3$, never for $k<-3$. (c) $y=2+\sqrt{x+3}$ and $y=2-\sqrt{x+3}$. [1, 2, 1.]`,
    planeDoc({ view: V8, curves: sideways(-3, 2), points: [P(-3, 2)] })),
  W(2, "medium", 4, String.raw`A theatre's revenue is $R(p)=-20p^2+800p$ dollars when tickets cost $p$ dollars (graph shown). (a) Find and interpret $R(15)$. (b) Solve $R(p)=6000$ and interpret. (c) Simplify $R(p+5)-R(p)$.`,
    String.raw`(a) $R(15)=-4500+12000=7500$: 7500 dollars at 15 dollars a ticket. (b) $-20p^2+800p-6000=0\Rightarrow p^2-40p+300=0\Rightarrow p=10$ or $30$. (c) $-20(2\cdot5p+25)+800\cdot5=-200p-500+4000=-200p+3500$. [1, 2, 1.]`,
    planeDoc({ view: { xmin: 0, xmax: 42, ymin: 0, ymax: 9000 }, curves: [{ f: (p) => -20 * p * p + 800 * p, a: 0, b: 40, color: "violet" }], step: { x: 5, y: 1000 }, xlabel: "price p", ylabel: "R" })),
  W(2, "hard", 4, String.raw`$f(x)=ax^2+bx+c$ passes through the three points shown. (a) Find $a$, $b$, $c$. (b) Find $f(f(1))$. (c) Solve $f(x)=f(4)$.`,
    String.raw`Points $(0,3)$, $(1,0)$, $(3,0)$: $c=3$, zeros 1 and 3 give $f(x)=(x-1)(x-3)=x^2-4x+3$. (b) $f(1)=0$, $f(0)=3$. (c) $f(4)=3$: $x^2-4x=0\Rightarrow x=0$ or $4$. [2, 1, 1.]`,
    planeDoc({ view: { xmin: -2, xmax: 6, ymin: -2, ymax: 6 }, curves: [{ f: (x) => x * x - 4 * x + 3, color: "violet" }], points: [P(0, 3), P(1, 0), P(3, 0)] })),
  W(3, "medium", 4, String.raw`The graph shows four parent functions. (a) Identify each by colour. (b) State the domain and range of the red and green ones. (c) Solve $\sqrt x=\frac1x$ and mark the point.`,
    String.raw`(a) blue $x^2$, green $\sqrt x$, red $\frac1x$, amber $|x|$. (b) red: $x\ne0$, $y\ne0$; green: $x\ge0$, $y\ge0$. (c) $x^{3/2}=1$, $x=1$: $(1,1)$. [1, 2, 1.]`,
    planeDoc({ view: { xmin: -4, xmax: 4, ymin: -4, ymax: 4 }, curves: [{ f: (x) => x * x, color: "blue" }, { f: (x) => Math.sqrt(x), a: 0, color: "green" }, { f: (x) => 1 / x, color: "red" }, { f: (x) => Math.abs(x), color: "amber" }] })),
  W(4, "medium", 4, String.raw`A diver's height above the water is $h(t)=-5t^2+10t+15$ m. (a) When does the diver enter the water? (b) Find the maximum height. (c) State a sensible domain and range, explaining each restriction.`,
    String.raw`(a) $-5(t^2-2t-3)=0\Rightarrow(t-3)(t+1)=0$: $t=3$ s. (b) $h(1)=20$ m. (c) $0\le t\le3$ (from the jump to the water); $0\le h\le20$. [1, 1, 2.]`,
    planeDoc({ view: { xmin: 0, xmax: 4, ymin: 0, ymax: 22 }, curves: [{ f: (t) => -5 * t * t + 10 * t + 15, a: 0, b: 3, color: "violet" }], points: [P(0, 15), P(1, 20), P(3, 0)], step: { x: 0.5, y: 2 }, xlabel: "t (s)", ylabel: "h (m)" })),
  W(4, "hard", 4, String.raw`(a) Find the domain of $f(x)=\dfrac{\sqrt{9-x}}{x+3}$. (b) Find the range of $g(x)=x^2-2x-3$ on the domain $-2\le x\le4$ (graph shown). (c) Explain why the range of $\frac{12}{x^2+3}$ is $0<y\le4$.`,
    String.raw`(a) $x\le9$, $x\ne-3$. (b) vertex $(1,-4)$; $g(-2)=5$, $g(4)=5$: $-4\le y\le5$. (c) $x^2+3\ge3$, so $0<\frac{12}{x^2+3}\le4$, with 4 at $x=0$. [1, 2, 1.]`,
    planeDoc({ view: { xmin: -3, xmax: 5, ymin: -5, ymax: 6 }, curves: [{ f: (x) => x * x - 2 * x - 3, a: -2, b: 4, color: "violet" }], points: [P(-2, 5), P(1, -4), P(4, 5)] })),
  W(5, "medium", 4, String.raw`$f(x)=\frac{3x-4}{2}$. (a) Find $f^{-1}(x)$ algebraically. (b) Graph $f$ and $f^{-1}$ on the grid and explain the connection with $y=x$. (c) Verify that $f(f^{-1}(6))=6$.`,
    String.raw`(a) $x=\frac{3y-4}{2}\Rightarrow f^{-1}(x)=\frac{2x+4}{3}$. (b) reflections in $y=x$; they meet at $(4,4)$. (c) $f^{-1}(6)=\frac{16}{3}$, $f(\frac{16}{3})=\frac{16-4}{2}=6$. [1, 2, 1.]`,
    planeDoc({ view: V8, lines: [{ m: 1, b: 0, color: "gray", dash: true }] })),
  W(5, "hard", 5, String.raw`$f(x)=-(x-1)^2+4$ (graph shown). (a) Explain why $f^{-1}$ is not a function. (b) Restrict the domain of $f$ to $x\ge1$ and find $f^{-1}$. (c) State the domain and range of $f^{-1}$. (d) Find where the restricted $f$ meets $f^{-1}$.`,
    String.raw`(a) $f(0)=f(2)=3$: not one-to-one. (b) $f^{-1}(x)=1+\sqrt{4-x}$. (c) $x\le4$; $y\ge1$. (d) on $y=x$: $-(x-1)^2+4=x\Rightarrow x^2-x-3=0\Rightarrow x=\frac{1+\sqrt{13}}2\approx2.30$. [1, 2, 1, 1.]`,
    planeDoc({ view: { xmin: -3, xmax: 5, ymin: -3, ymax: 5 }, curves: [{ f: (x) => -((x - 1) ** 2) + 4, color: "blue" }], lines: [{ m: 1, b: 0, color: "gray", dash: true }], points: [P(1, 4), P(0, 3, false), P(2, 3, false)] })),
  W(6, "medium", 4, String.raw`The red graph is a transformation of $y=\sqrt x$ (grey) of the form $y=a\sqrt{k(x-d)}+c$ with $|k|=1$. (a) Find $a$, $k$, $d$ and $c$ and write the equation. (b) Describe the transformations in order and write the mapping $(x,y)\to\left(\frac xk+d,\ ay+c\right)$. (c) State its domain, range and exact y-intercept.`,
    String.raw`Start $(3,1)$: $d=3$, $c=1$; it runs left, so $k=-1$; through $(2,3)$: $3=a\sqrt1+1\Rightarrow a=2$. (a) $y=2\sqrt{-(x-3)}+1$. (b) vertical stretch by 2, reflection in the y-axis, 3 right, 1 up; $(x,y)\to(-x+3,\ 2y+1)$. (c) $D: x\le3$, $R: y\ge1$; $y(0)=2\sqrt3+1\approx4.46$. [1, 1, 2.]`,
    planeDoc({ view: V8, curves: [{ f: (x) => Math.sqrt(x), a: 0, color: "gray" }, { f: (x) => 2 * Math.sqrt(3 - x) + 1, b: 3, color: "red" }], points: [P(3, 1), P(2, 3), P(-1, 5)] })),
  W(7, "hard", 4, String.raw`The graph of $y=f(x)$ is shown (vertex $(2,-4)$, zeros $0$ and $4$). (a) Sketch $y=f(-\tfrac12x)$ and give its vertex and zeros. (b) Explain why the range does not change. (c) Find $k$ so that $y=f(kx)$ has zeros $0$ and $-1$.`,
    String.raw`(a) $(x,y)\to(-2x,y)$: vertex $(-4,-4)$, zeros $0$ and $-8$. (b) only x-coordinates move. (c) $\frac4k=-1\Rightarrow k=-4$. [2, 1, 1.]`,
    planeDoc({ view: { xmin: -9, xmax: 6, ymin: -5, ymax: 6 }, curves: [{ f: (x) => x * x - 4 * x, color: "violet" }], points: [P(2, -4), P(0, 0, false), P(4, 0)] })),
  W(8, "medium", 4, String.raw`Graph $y=-2\sqrt{\tfrac12(x+4)}+3$ on the grid. (a) Identify $a,k,d,c$. (b) Map $(0,0)$, $(1,1)$, $(4,2)$, $(9,3)$. (c) State the domain and range.`,
    String.raw`(a) $a=-2$, $k=\tfrac12$, $d=-4$, $c=3$. (b) $(x,y)\to(2x-4,\ -2y+3)$: $(-4,3)$, $(-2,1)$, $(4,-1)$, $(14,-3)$. (c) $x\ge-4$; $y\le3$. [1, 2, 1.]`,
    planeDoc({ view: { xmin: -6, xmax: 16, ymin: -6, ymax: 6 }, step: { x: 2, y: 1 } })),
  W(8, "hard", 5, String.raw`$f$ has domain $-3\le x\le5$ and range $-2\le y\le4$; its graph passes through $(1,4)$. (a) Find the domain and range of $g(x)=-\tfrac12f(2x-6)+1$. (b) Where does $(1,4)$ go? (c) Design a transformation $y=af(k(x-d))+c$ whose image has domain $0\le x\le16$ and range $0\le y\le18$ with $a>0$, $k>0$.`,
    String.raw`(a) $f(2(x-3))$: $x\to\frac x2+3$: $1.5\le x\le5.5$; $y\to-\tfrac12y+1$: $-1\le y\le2$. (b) $(3.5,-1)$. (c) need $\frac{-3}{k}+d=0$, $\frac5k+d=16$: $k=\tfrac12$, $d=6$; $-2a+c=0$, $4a+c=18$: $a=3$, $c=6$: $y=3f(\tfrac12(x-6))+6$. [2, 1, 2.]`,
    planeDoc({ view: { xmin: -4, xmax: 6, ymin: -3, ymax: 5 }, segs: [{ pts: [[-3, 0], [1, 4], [3, -2], [5, 1]] }], points: [P(-3, 0), P(1, 4), P(3, -2), P(5, 1)] })),
];

const APPLY = process.argv.includes("--apply");
if (process.argv[1] && import.meta.url.endsWith(process.argv[1].replace(/\\/g, "/").split("/").pop())) {
  const env = {};
  for (const line of readFileSync(".env.local", "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
  const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });
  const cid = (await db.from("courses").select("id").eq("code", "MCR3U").single()).data.id;
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
    const key = `mcr3u-${w.topic.split(" ")[0].replace(".", "-")}/written-${crypto.createHash("sha1").update(w.fig).digest("hex").slice(0, 10)}.svg`;
    const up = await db.storage.from("graph-images").upload(key, Buffer.from(w.fig), { upsert: true, contentType: "image/svg+xml" });
    if (up.error) throw up.error;
    const image_url = db.storage.from("graph-images").getPublicUrl(key).data.publicUrl;
    const { fig, ...row } = w;
    const r = await db.from("bank_questions").insert({ ...row, image_url, course_id: cid, lesson_id: lessons.find((l) => l.title === w.topic).id });
    if (r.error) throw r.error;
  }
  console.log(`inserted ${todo.length}`);
}
