// LINALG1 chapter 1 written-response (long_answer) bank questions for printed chapter tests (Part C).
// Each question carries a figure (SVG uploaded to graph-images; paper tests print image_url).
//   node scripts/linalg-ch1/written.mjs           -> dry run
//   node scripts/linalg-ch1/written.mjs --apply   -> uploads figures, inserts rows not already in the bank (matched by prompt)
// Run --apply only after the chapter 1 lessons are loaded (each row is linked to its lesson by title).
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";
import crypto from "crypto";
import { vdoc, scene3, a3, pt3, seg3, line3, patch3, tri3 } from "./vecfig.mjs";

const T = {
  1: "1.1 Vectors in Rⁿ and Linear Combinations", 2: "1.2 Lines and Planes in Rⁿ", 3: "1.3 Length, Distance and Unit Vectors",
  4: "1.4 The Dot Product, Angles and Orthogonality", 5: "1.5 The Cross Product", 6: "1.6 Normal Vectors and Scalar Equations of Planes", 7: "1.7 Projections and Distances",
};
const W = (t, difficulty, points, prompt, feedback, fig) => ({ topic: T[t], difficulty, points, prompt, feedback, kind: "long_answer", answer: null, choices: null, fig });
const S = String.raw;

export const WRITTEN = [
  W(1, "medium", 4, S`Let $\vec u=(2,-1,3)$ and $\vec v=(1,4,-2)$. (a) Compute $3\vec u-2\vec v$. (b) Solve $2\vec x+\vec u=\vec v$. (c) Is $(5,2,4)$ a linear combination of $\vec u$ and $\vec v$? If so, find the coefficients.`,
    S`(a) $(4,-11,13)$. (b) $\vec x=\tfrac12(\vec v-\vec u)=\left(-\tfrac12,\tfrac52,-\tfrac52\right)$. (c) $2s+t=5$, $-s+4t=2$ give $s=2$, $t=1$; third: $6-2=4$ ✓, so $(5,2,4)=2\vec u+\vec v$. [1, 1, 2.]`,
    vdoc(scene3(4.5, { arrows: [a3([0, 0, 0], [2, -1, 3], { color: "blue", vl: "u", off: 14 }), a3([0, 0, 0], [1, 4, -2], { color: "red", vl: "v", off: -14 })] }))),
  W(1, "hard", 4, S`Triangle $ABC$ has position vectors $\vec a,\vec b,\vec c$ in $\mathbb R^n$. (a) Write the position vector of the midpoint $M$ of $BC$. (b) Show that the point $G$ two thirds of the way from $A$ to $M$ is $\tfrac13(\vec a+\vec b+\vec c)$. (c) Explain why $G$ lies on all three medians.`,
    S`(a) $\vec m=\tfrac12(\vec b+\vec c)$. (b) $\vec g=\vec a+\tfrac23(\vec m-\vec a)=\tfrac13\vec a+\tfrac13(\vec b+\vec c)$. (c) The expression is symmetric in $\vec a,\vec b,\vec c$, so the same point is two thirds along each median. [1, 2, 1.]`,
    vdoc({ view: { xmin: -0.5, xmax: 7.5, ymin: -0.6, ymax: 5.5 }, grid: false, axes: false, segs: [{ pts: [[0, 0], [7, 1], [2.5, 5], [0, 0]], color: "gray" }, { pts: [[0, 0], [4.75, 3]], color: "red", dash: true }, { pts: [[7, 1], [1.25, 2.5]], color: "red", dash: true }, { pts: [[2.5, 5], [3.5, 0.5]], color: "red", dash: true }], points: [{ x: 0, y: 0, label: "A", dx: -14, dy: 14 }, { x: 7, y: 1, label: "B", dx: 6, dy: 14 }, { x: 2.5, y: 5, label: "C", dx: -4, dy: -8 }, { x: 4.75, y: 3, label: "M", dx: 8, dy: -4 }, { x: 3.17, y: 2, label: "G", dx: 6, dy: 16, color: "red" }] })),
  W(2, "medium", 4, S`The line $L$ passes through $A(1,-2,3)$ and $B(4,0,1)$. (a) Write vector and parametric equations of $L$. (b) Does $L$ pass through $(10,4,-3)$? (c) Where does $L$ cross the plane $x_3=0$?`,
    S`(a) $\vec x=(1,-2,3)+t(3,2,-2)$; $x_1=1+3t$, $x_2=-2+2t$, $x_3=3-2t$. (b) $t=3$ gives $(10,4,-3)$: yes. (c) $3-2t=0$ at $t=1.5$: $(5.5,1,0)$. [2, 1, 1.]`,
    vdoc(scene3(5, { segs: [line3([1, -2, 3], [3, 2, -2], -0.3, 1.6, "violet")], points: [pt3([1, -2, 3], "A", { color: "black" }), pt3([4, 0, 1], "B", { color: "black" })] }))),
  W(2, "hard", 4, S`$L_1:\vec x=(1,1,0)+t(2,-1,1)$ and $L_2:\vec x=(3,0,2)+s(1,1,-1)$. (a) Show that the lines are skew. (b) Find the scalar equation of the plane containing $L_1$ and parallel to $L_2$. (c) Find the distance from the point $(3,0,2)$ to that plane, and explain what it represents.`,
    S`(a) Not parallel; the system $1+2t=3+s$, $1-t=s$, $t=2-s$ has no solution (the last two give $1=2$). (b) $\vec n=(2,-1,1)\times(1,1,-1)=(0,3,3)$, i.e. $(0,1,1)$; $d=1$: $x_2+x_3=1$. (c) $\frac{|0+2-1|}{\sqrt2}=\frac1{\sqrt2}$: the distance between the skew lines. [1, 2, 1.]`,
    vdoc(scene3(4, { segs: [line3([1, 1, 0], [2, -1, 1], -0.8, 1.4, "violet"), line3([3, 0, 2], [1, 1, -1], -1.5, 1.2, "blue")] }))),
  W(3, "medium", 4, S`$A(1,2,-1)$, $B(4,6,-1)$, $C(1,2,11)$. (a) Find the three side lengths of triangle $ABC$. (b) Show the triangle is right-angled and name the right angle. (c) Find the unit vector in the direction of $\overrightarrow{BC}$.`,
    S`(a) $AB=\|(3,4,0)\|=5$, $AC=\|(0,0,12)\|=12$, $BC=\|(-3,-4,12)\|=13$. (b) $25+144=169$: right angle at $A$. (c) $\tfrac1{13}(-3,-4,12)$. [2, 1, 1.]`,
    vdoc(scene3(6, { segs: [seg3([[1, 2, -1], [4, 6, -1], [1, 2, 11], [1, 2, -1]], { color: "blue", w: 2 })], points: [pt3([1, 2, -1], "A", { color: "black" }), pt3([4, 6, -1], "B", { color: "black" }), pt3([1, 2, 11], "C", { color: "black" })] }))),
  W(3, "hard", 4, S`(a) Find every point of the line $\vec x=(1,0,0)+t(0,1,1)$ at distance $\sqrt{10}$ from $P(1,2,0)$. (b) Prove $\big|\|\vec x\|-\|\vec y\|\big|\le\|\vec x-\vec y\|$ for all vectors.`,
    S`(a) $(t-2)^2+t^2=10\Rightarrow t^2-2t-3=0$, $t=3$ or $-1$: $(1,3,3)$ and $(1,-1,-1)$. (b) $\|\vec x\|\le\|\vec x-\vec y\|+\|\vec y\|$ and $\|\vec y\|\le\|\vec y-\vec x\|+\|\vec x\|$ by the triangle inequality; together they give the result. [2, 2.]`,
    vdoc(scene3(4, { segs: [line3([1, 0, 0], [0, 1, 1], -1.5, 3.5, "violet")], points: [pt3([1, 2, 0], "P", { color: "blue" }), pt3([1, 3, 3], "", { color: "red" }), pt3([1, -1, -1], "", { color: "red" })] }))),
  W(4, "medium", 4, S`$\vec u=(1,2,-2)$ and $\vec v=(3,0,4)$. (a) Compute $\vec u\cdot\vec v$. (b) Find the angle between $\vec u$ and $\vec v$. (c) Find $k$ so that $\vec u$ is orthogonal to $\vec v+k\vec u$.`,
    S`(a) $3-8=-5$. (b) $\cos\theta=\frac{-5}{3\cdot5}=-\frac13$, $\theta\approx109.5^\circ$. (c) $\vec u\cdot\vec v+k\|\vec u\|^2=-5+9k=0$, $k=\tfrac59$. [1, 1.5, 1.5.]`,
    vdoc(scene3(4.5, { arrows: [a3([0, 0, 0], [1, 2, -2], { color: "blue", vl: "u", off: 14 }), a3([0, 0, 0], [3, 0, 4], { color: "red", vl: "v", off: -14 })] }))),
  W(4, "hard", 4, S`(a) Prove that $\|\vec u+\vec v\|^2+\|\vec u-\vec v\|^2=2\|\vec u\|^2+2\|\vec v\|^2$. (b) A parallelogram has sides of lengths 4 and 3 and one diagonal of length 6. Find the other diagonal. (c) Find the angle between the sides.`,
    S`(a) Expand both with dot products; the $\pm2\,\vec u\cdot\vec v$ terms cancel. (b) $36+d^2=2(16)+2(9)$, $d=\sqrt{14}$. (c) $\vec u\cdot\vec v=\frac{36-25}{2}=5.5$, $\cos\theta=\frac{5.5}{12}$, $\theta\approx62.7^\circ$. [2, 1, 1.]`,
    vdoc({ view: { xmin: -0.5, xmax: 6.6, ymin: -0.6, ymax: 3.2 }, grid: false, axes: false, segs: [{ pts: [[0, 0], [4, 0], [5.37, 2.67], [1.37, 2.67], [0, 0]], color: "gray" }, { pts: [[0, 0], [5.37, 2.67]], color: "red", dash: true }, { pts: [[4, 0], [1.37, 2.67]], color: "blue", dash: true }], texts: [{ x: 2, y: -0.35, t: "4" }, { x: 0.5, y: 1.6, t: "3" }] })),
  W(5, "medium", 4, S`$\vec u=(1,2,1)$ and $\vec v=(2,-1,3)$. (a) Compute $\vec u\times\vec v$ and verify it is orthogonal to both. (b) Find the area of the parallelogram on $\vec u$ and $\vec v$. (c) Find the area of the triangle with vertices $O$, $U(1,2,1)$, $V(2,-1,3)$.`,
    S`(a) $(2\cdot3-1\cdot(-1),\ 1\cdot2-1\cdot3,\ 1\cdot(-1)-2\cdot2)=(7,-1,-5)$; dot products $7-2-5=0$ and $14+1-15=0$. (b) $\sqrt{75}=5\sqrt3$. (c) $\tfrac{5\sqrt3}2\approx4.33$. [2, 1, 1.]`,
    vdoc(scene3(3.5, { polys: [{ pts: [[0, 0, 0], [1, 2, 1], [3, 1, 4], [2, -1, 3]].map(([x, y, z]) => [y - 0.55 * x, z - 0.42 * x]), fill: "#fde68a", op: 0.7, stroke: "amber" }], arrows: [a3([0, 0, 0], [1, 2, 1], { color: "blue", vl: "u", off: 14 }), a3([0, 0, 0], [2, -1, 3], { color: "red", vl: "v", off: -14 })] }))),
  W(5, "hard", 4, S`A tetrahedron has vertices $A(1,0,0)$, $B(0,2,0)$, $C(0,0,3)$, $D(1,1,1)$. (a) Find its volume $\tfrac16|\overrightarrow{AB}\cdot(\overrightarrow{AC}\times\overrightarrow{AD})|$. (b) Find the area of face $ABC$. (c) Find the height from $D$ to face $ABC$.`,
    S`(a) $\overrightarrow{AC}\times\overrightarrow{AD}=(-1,0,3)\times(0,1,1)=(-3,1,-1)$; $(-1,2,0)\cdot(-3,1,-1)=5$; volume $\tfrac56$. (b) $\overrightarrow{AB}\times\overrightarrow{AC}=(6,3,2)$, length 7: area $3.5$. (c) $V=\tfrac13(\text{area})h$ gives $h=\frac{3\cdot5/6}{3.5}=\tfrac57$. [2, 1, 1.]`,
    vdoc(scene3(3.5, { polys: [tri3(1, 2, 3, "#dbeafe", "blue")], segs: [seg3([[1, 0, 0], [1, 1, 1]], { color: "red", w: 1.6 }), seg3([[0, 2, 0], [1, 1, 1]], { color: "red", w: 1.6 }), seg3([[0, 0, 3], [1, 1, 1]], { color: "red", w: 1.6 })], points: [pt3([1, 1, 1], "D", { color: "red" })] }))),
  W(6, "medium", 4, S`The plane $\Pi$ passes through $P(1,-1,2)$, $Q(3,0,1)$ and $R(0,2,3)$. (a) Find a normal vector. (b) Find the scalar equation of $\Pi$ and check it with $Q$ and $R$. (c) Find its three intercepts.`,
    S`(a) $\overrightarrow{PQ}\times\overrightarrow{PR}=(2,1,-1)\times(-1,3,1)=(4,-1,7)$. (b) $d=4+1+14=19$: $4x_1-x_2+7x_3=19$; $Q$: $12+7=19$ ✓, $R$: $-2+21=19$ ✓. (c) $\tfrac{19}4$, $-19$, $\tfrac{19}7$. [1.5, 1.5, 1.]`,
    vdoc(scene3(4, { polys: [patch3([1, -1, 2], [2, 1, -1], [-1, 3, 1], 0.7, "#ede9fe", "violet", 0.7)], points: [pt3([1, -1, 2], "P", { color: "black" }), pt3([3, 0, 1], "Q", { color: "black" }), pt3([0, 2, 3], "R", { color: "black" })] }))),
  W(6, "hard", 4, S`Planes $\Pi_1:\ x_1+2x_2-x_3=4$ and $\Pi_2:\ 2x_1-x_2+x_3=3$. (a) Find the acute angle between them. (b) Find vector equations of their line of intersection. (c) Find the plane through the origin that contains this line.`,
    S`(a) $\vec n_1\cdot\vec n_2=-1$, both norms $\sqrt6$: $\cos\theta=\tfrac16$, $\theta\approx80.4^\circ$. (b) Direction $\vec n_1\times\vec n_2=(1,-3,-5)$; with $x_3=0$: $x_1=2$, $x_2=1$; $\vec x=(2,1,0)+t(1,-3,-5)$. (c) $\vec n=(2,1,0)\times(1,-3,-5)=(-5,10,-7)$: $5x_1-10x_2+7x_3=0$. [1, 2, 1.]`,
    vdoc(scene3(4, { polys: [patch3([2, 1, 0], [1, 0, 1], [0, 1, 2], 1.1, "#dbeafe", "blue", 0.6), patch3([2, 1, 0], [1, 2, 0], [0, 1, 1], 1.1, "#fde68a", "amber", 0.6)], segs: [line3([2, 1, 0], [1, -3, -5], -0.5, 0.5, "red", 3)] }))),
  W(7, "medium", 4, S`$\vec u=(4,3,1)$ and $\vec v=(1,1,0)$. (a) Find $\operatorname{proj}_{\vec v}\vec u$. (b) Find $\operatorname{perp}_{\vec v}\vec u$ and show it is orthogonal to $\vec v$. (c) Verify that $\|\vec u\|^2=\|\operatorname{proj}\|^2+\|\operatorname{perp}\|^2$.`,
    S`(a) $\tfrac72(1,1,0)=(3.5,3.5,0)$. (b) $(0.5,-0.5,1)$; $0.5-0.5+0=0$. (c) $26=24.5+1.5$ ✓. [1, 2, 1.]`,
    vdoc(scene3(4.5, { arrows: [a3([0, 0, 0], [4, 3, 1], { color: "blue", vl: "u", off: -14 }), a3([0, 0, 0], [3.5, 3.5, 0], { color: "green", label: "proj", off: 14 }), a3([3.5, 3.5, 0], [4, 3, 1], { color: "amber", label: "perp", off: 14 })] }))),
  W(7, "hard", 4, S`$Q(3,1,4)$ and the plane $2x_1-x_2+2x_3=5$. (a) Find the distance from $Q$ to the plane. (b) Find the point of the plane closest to $Q$. (c) Find the reflection of $Q$ in the plane.`,
    S`(a) $\frac{|6-1+8-5|}{3}=\tfrac83$. (b) $\frac{\vec n\cdot\vec q-d}{\vec n\cdot\vec n}=\tfrac89$: $\vec q-\tfrac89(2,-1,2)=\left(\tfrac{11}9,\tfrac{17}9,\tfrac{20}9\right)$. (c) $\vec q-\tfrac{16}9(2,-1,2)=\left(-\tfrac59,\tfrac{25}9,\tfrac49\right)$. [1, 1.5, 1.5.]`,
    vdoc(scene3(4.5, { polys: [patch3([11 / 9, 17 / 9, 20 / 9], [1, 2, 0], [1, 0, -1], 1.3, "#ede9fe", "violet", 0.7)], segs: [seg3([[3, 1, 4], [-5 / 9, 25 / 9, 4 / 9]], { color: "amber", dash: true, w: 2 })], points: [pt3([3, 1, 4], "Q", { color: "blue" }), pt3([11 / 9, 17 / 9, 20 / 9], "foot", { color: "red" }), pt3([-5 / 9, 25 / 9, 4 / 9], "Q′", { color: "blue" })] }))),
];

const APPLY = process.argv.includes("--apply");
if (process.argv[1] && import.meta.url.endsWith(process.argv[1].replace(/\\/g, "/").split("/").pop())) {
  const env = {};
  for (const line of readFileSync(".env.local", "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
  const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });
  const cid = (await db.from("courses").select("id").eq("code", "LINALG1").single()).data.id;
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
    const key = `linalg1-${w.topic.split(" ")[0].replace(".", "-")}/written-${crypto.createHash("sha1").update(w.fig).digest("hex").slice(0, 10)}.svg`;
    const up = await db.storage.from("graph-images").upload(key, Buffer.from(w.fig), { upsert: true, contentType: "image/svg+xml" });
    if (up.error) throw up.error;
    const image_url = db.storage.from("graph-images").getPublicUrl(key).data.publicUrl;
    const { fig, ...row } = w;
    const r = await db.from("bank_questions").insert({ ...row, image_url, course_id: cid, lesson_id: lessons.find((l) => l.title === w.topic).id });
    if (r.error) throw r.error;
  }
  console.log(`inserted ${todo.length}`);
}
