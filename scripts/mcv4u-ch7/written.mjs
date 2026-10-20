// MCV4U chapter 7 written-response (long_answer) bank questions for printed chapter tests (Part C).
// Each question carries a figure (SVG uploaded to graph-images; paper tests print image_url).
//   node scripts/mcv4u-ch7/written.mjs           -> dry run
//   node scripts/mcv4u-ch7/written.mjs --apply   -> uploads figures, inserts rows not already in the bank (matched by prompt)
// Run --apply only after the chapter 7 lessons are loaded and renumber7.mjs has run (it links each row to its lesson by title).
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";
import crypto from "crypto";
import { vdoc, pol, p3, axes3, merge } from "./vecfig.mjs";

const T = {
  1: "7.1 Cartesian Vectors", 2: "7.2 The Dot Product", 3: "7.3 Applications of the Dot Product",
  4: "7.4 Vectors in Three-Space", 5: "7.5 The Cross Product and Its Properties", 6: "7.6 Applications of the Dot Product and Cross Product",
};
const W = (t, difficulty, points, prompt, feedback, fig) => ({ topic: T[t], difficulty, points, prompt, feedback, kind: "long_answer", answer: null, choices: null, fig });
const S = String.raw;
const V3 = { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 5.8 }, grid: false, axes: false };
const add3 = (...v) => v.reduce((s, a) => [s[0] + a[0], s[1] + a[1], s[2] + a[2]], [0, 0, 0]);
const ppd = (a, b, c) => {
  const k = [[0, 0, 0], a, b, c, add3(a, b), add3(a, c), add3(b, c), add3(a, b, c)];
  return [[0, 1], [0, 2], [0, 3], [1, 4], [1, 5], [2, 4], [2, 6], [3, 5], [3, 6], [4, 7], [5, 7], [6, 7]].map(([i, j]) => ({ pts: [p3(...k[i]), p3(...k[j])], color: "gray", w: 1.3 }));
};

export const WRITTEN = [
  W(1, "medium", 4, S`For $A(-2,3)$, $B(4,-5)$ and $C(7,1)$: (a) write $\overrightarrow{AB}$ and $\overrightarrow{BC}$ in component form; (b) find $|\overrightarrow{AB}|$ and its direction from the positive x-axis; (c) find $D$ so that $ABCD$ is a parallelogram.`,
    S`(a) $\overrightarrow{AB}=[6,-8]$, $\overrightarrow{BC}=[3,6]$. (b) 10, at $360^\circ-\tan^{-1}\frac86\approx306.87^\circ$. (c) $\overrightarrow{AD}=\overrightarrow{BC}$, so $D=(-2+3,\ 3+6)=(1,9)$. [1, 2, 1.]`,
    vdoc({ view: { xmin: -3, xmax: 8, ymin: -6, ymax: 10 }, step: 1, segs: [{ pts: [[-2, 3], [4, -5], [7, 1], [1, 9], [-2, 3]], color: "gray", dash: true }], arrows: [{ from: [-2, 3], to: [4, -5], vl: "AB", off: -16 }, { from: [4, -5], to: [7, 1], vl: "BC", color: "blue", off: 16 }], points: [{ x: -2, y: 3, label: "A", dx: -14, dy: 0 }, { x: 4, y: -5, label: "B", dx: 6, dy: 14 }, { x: 7, y: 1, label: "C", dx: 8, dy: 4 }, { x: 1, y: 9, label: "D?", dx: 6, dy: -4 }] })),
  W(1, "hard", 4, S`(a) Write $\vec w=[8,-1]$ as $a[2,1]+b[1,-2]$. (b) Explain why every vector in the plane can be written as a combination of $[2,1]$ and $[1,-2]$, but not of $[2,1]$ and $[-4,-2]$. (c) Find the unit vector in the direction of $\vec w$.`,
    S`(a) $2a+b=8$ and $a-2b=-1$ give $a=3$, $b=2$. (b) $[2,1]$ and $[1,-2]$ are not collinear, so their combinations fill the plane; $[-4,-2]=-2[2,1]$, so its combinations stay on one line. (c) $\frac{1}{\sqrt{65}}[8,-1]\approx[0.992,-0.124]$. [2, 1, 1.]`,
    vdoc({ view: { xmin: -0.5, xmax: 9, ymin: -4.6, ymax: 3.6 }, step: 1, arrows: [{ from: [0, 0], to: [6, 3], label: "3[2, 1]", off: -16 }, { from: [6, 3], to: [8, -1], color: "blue", label: "2[1, −2]", off: -16 }, { from: [0, 0], to: [8, -1], color: "red", vl: "w", off: 16 }] })),
  W(2, "medium", 4, S`Let $\vec a=[3,-1]$ and $\vec b=[1,5]$. (a) Find $\vec a\cdot\vec b$. (b) Find the angle between $\vec a$ and $\vec b$. (c) Find $k$ so that $\vec a$ is perpendicular to $[k,6]$, and verify.`,
    S`(a) $3-5=-2$. (b) $\cos\theta=\frac{-2}{\sqrt{10}\sqrt{26}}\approx-0.124$, $\theta\approx97.13^\circ$. (c) $3k-6=0\Rightarrow k=2$; $[3,-1]\cdot[2,6]=6-6=0$. [1, 2, 1.]`,
    vdoc({ view: { xmin: -1, xmax: 4, ymin: -2, ymax: 6 }, step: 1, arrows: [{ from: [0, 0], to: [3, -1], vl: "a", off: 16 }, { from: [0, 0], to: [1, 5], vl: "b", color: "blue", off: -16 }], arcs: [{ at: [0, 0], r: 0.8, a: -18.43, b: 78.69, label: "θ" }] })),
  W(2, "hard", 4, S`(a) Use properties of the dot product to show $|\vec a+\vec b|^2=|\vec a|^2+2\vec a\cdot\vec b+|\vec b|^2$. (b) Use (a) to derive the cosine law for the triangle with sides $\vec a$, $\vec b$ and $\vec a-\vec b$. (c) Show that if $|\vec a+\vec b|=|\vec a-\vec b|$ then $\vec a\perp\vec b$.`,
    S`(a) $(\vec a+\vec b)\cdot(\vec a+\vec b)=\vec a\cdot\vec a+\vec a\cdot\vec b+\vec b\cdot\vec a+\vec b\cdot\vec b$, and $\vec a\cdot\vec b=\vec b\cdot\vec a$. (b) Likewise $|\vec a-\vec b|^2=|\vec a|^2+|\vec b|^2-2|\vec a||\vec b|\cos\theta$ — the cosine law with $\theta$ between $\vec a$ and $\vec b$. (c) Subtracting the two expansions gives $4\vec a\cdot\vec b=0$. [1, 2, 1.]`,
    vdoc({ view: { xmin: -0.5, xmax: 6.5, ymin: -0.8, ymax: 4.2 }, grid: false, axes: false, arrows: [{ from: [0, 0], to: [6, 0], vl: "a", off: 16 }, { from: [0, 0], to: pol(4, 50), vl: "b", color: "blue", off: -16 }, { from: pol(4, 50), to: [6, 0], color: "red", label: "a − b", off: -14 }], arcs: [{ at: [0, 0], r: 1, a: 0, b: 50, label: "θ" }] })),
  W(3, "medium", 4, S`A child pulls a wagon 120 m with a 65 N force along the handle, which makes $28^\circ$ with the ground. (a) Find the work done. (b) Find the work if the handle is lowered to $15^\circ$. (c) Explain the difference using the dot product.`,
    S`(a) $65\times120\cos28^\circ\approx6887$ J. (b) $65\times120\cos15^\circ\approx7534$ J. (c) $W=\vec F\cdot\vec d=|\vec F||\vec d|\cos\theta$: a smaller angle puts more of the pull along the motion; the rest only lifts the handle. [1, 1, 2.]`,
    vdoc({ view: { xmin: -0.6, xmax: 6.4, ymin: -0.8, ymax: 3.6 }, grid: false, axes: false, polys: [{ pts: [[0, 0], [1.8, 0], [1.8, 0.7], [0, 0.7]], fill: "#e0e7ff", stroke: "violet" }], arrows: [{ from: [1.8, 0.35], to: pol(3.8, 28, [1.8, 0.35]), vl: "F", label: "65 N", off: -16 }, { from: [1.8, 0.35], to: pol(3.8, 15, [1.8, 0.35]), color: "blue", w: 1.8, dash: true, label: "15°", off: 14 }], arcs: [{ at: [1.8, 0.35], r: 1.2, a: 0, b: 28, label: "28°" }] })),
  W(3, "hard", 4, S`Let $\vec a=[6,2]$ and $\vec b=[3,-1]$. (a) Find the scalar and vector projections of $\vec a$ on $\vec b$. (b) Find the part of $\vec a$ perpendicular to $\vec b$ and verify it is perpendicular. (c) Find the distance from the point $(6,2)$ to the line through the origin in the direction of $\vec b$.`,
    S`(a) $\vec a\cdot\vec b=16$, $|\vec b|=\sqrt{10}$: scalar $\frac{16}{\sqrt{10}}\approx5.06$; vector $\frac{16}{10}[3,-1]=[4.8,-1.6]$. (b) $[6,2]-[4.8,-1.6]=[1.2,3.6]$; $[1.2,3.6]\cdot[3,-1]=3.6-3.6=0$. (c) $|[1.2,3.6]|\approx3.79$. [2, 1, 1.]`,
    vdoc({ view: { xmin: -0.5, xmax: 7, ymin: -2.2, ymax: 3 }, step: 1, segs: [{ pts: [[-0.3, 0.1], [6.6, -2.2]], color: "blue", dash: true }], arrows: [{ from: [0, 0], to: [6, 2], vl: "a", off: -16 }, { from: [0, 0], to: [3, -1], vl: "b", color: "blue", off: 16 }, { from: [0, 0], to: [4.8, -1.6], color: "red", w: 2.2 }, { from: [4.8, -1.6], to: [6, 2], color: "green", w: 2.2 }] })),
  W(4, "medium", 4, S`For $A(2,-1,3)$ and $B(5,3,-9)$: (a) find $\overrightarrow{AB}$ and $|\overrightarrow{AB}|$; (b) find the direction angles of $\overrightarrow{AB}$; (c) verify that the squares of their cosines add to 1.`,
    S`(a) $[3,4,-12]$, length 13. (b) $\alpha=\cos^{-1}\frac3{13}\approx76.66^\circ$, $\beta=\cos^{-1}\frac4{13}\approx72.08^\circ$, $\gamma=\cos^{-1}\left(-\frac{12}{13}\right)\approx157.38^\circ$. (c) $\frac{9+16+144}{169}=1$. [1, 2, 1.]`,
    vdoc(merge(V3, axes3(4.6), { arrows: [{ from: [0, 0], to: p3(1.2, 1.6, -4.8).map((z) => z * 0.8), color: "red", vl: "AB", off: 16 }] }, { view: { xmin: -3.8, xmax: 5.4, ymin: -4.6, ymax: 5.4 } }))),
  W(4, "hard", 4, S`For $P(1,0,0)$, $Q(3,1,2)$ and $R(1,3,1)$: (a) find the side lengths of $\triangle PQR$; (b) find $\angle P$; (c) find the area of the triangle.`,
    S`(a) $\overrightarrow{PQ}=[2,1,2]$: 3; $\overrightarrow{PR}=[0,3,1]$: $\sqrt{10}$; $\overrightarrow{QR}=[-2,2,-1]$: 3. (b) $\cos P=\frac{5}{3\sqrt{10}}$, $\angle P\approx58.19^\circ$. (c) $\frac12|\overrightarrow{PQ}\times\overrightarrow{PR}|=\frac12|[-5,-2,6]|=\frac{\sqrt{65}}2\approx4.03$ (or $\frac12(3)(\sqrt{10})\sin58.19^\circ$). [1, 1.5, 1.5.]`,
    vdoc(merge(V3, axes3(4.6), { polys: [{ pts: [p3(1, 0, 0), p3(3, 1, 2), p3(1, 3, 1)], fill: "#ede9fe", stroke: "violet" }], points: [{ x: p3(1, 0, 0)[0], y: p3(1, 0, 0)[1], label: "P", dx: -16, dy: 14 }, { x: p3(3, 1, 2)[0], y: p3(3, 1, 2)[1], label: "Q", dx: -16, dy: -6 }, { x: p3(1, 3, 1)[0], y: p3(1, 3, 1)[1], label: "R", dx: 8, dy: -4 }] }))),
  W(5, "medium", 4, S`Let $\vec a=[2,-1,3]$ and $\vec b=[1,2,-1]$. (a) Find $\vec a\times\vec b$. (b) Verify that it is perpendicular to $\vec a$ and $\vec b$. (c) Find the area of the parallelogram they span. (d) Write $\vec b\times\vec a$ without further calculation.`,
    S`(a) $[(-1)(-1)-3(2),\ 3(1)-2(-1),\ 2(2)-(-1)(1)]=[-5,5,5]$. (b) $-10-5+15=0$ and $-5+10-5=0$. (c) $\sqrt{75}=5\sqrt3\approx8.66$. (d) $[5,-5,-5]$. [1.5, 1, 1, 0.5.]`,
    vdoc(merge(V3, axes3(4.4), { polys: [{ pts: [p3(0, 0, 0), p3(2, -1, 3), p3(3, 1, 2), p3(1, 2, -1)], fill: "#ede9fe", stroke: "gray" }], arrows: [{ from: [0, 0], to: p3(2, -1, 3), vl: "a", off: -16 }, { from: [0, 0], to: p3(1, 2, -1), vl: "b", color: "blue", off: 16 }] }, { view: { xmin: -4.2, xmax: 5, ymin: -3.4, ymax: 5.4 } }))),
  W(5, "hard", 4, S`Let $\vec a=[1,0,1]$ and $\vec b=[0,1,-1]$. (a) Find $\vec a\times\vec b$ and $(3\vec a)\times\vec b$; what do you notice? (b) Prove that $(k\vec a)\times\vec b=k(\vec a\times\vec b)$ for any vectors. (c) Show that $\vec a\cdot(\vec a\times\vec b)=0$ and explain what this verifies.`,
    S`(a) $\vec a\times\vec b=[-1,1,1]$, $(3\vec a)\times\vec b=[-3,3,3]=3(\vec a\times\vec b)$. (b) Each component of $(k\vec a)\times\vec b$, such as $ka_2b_3-ka_3b_2$, is $k$ times the matching component of $\vec a\times\vec b$. (c) $-1+0+1=0$: the cross product is perpendicular to $\vec a$. [1.5, 1.5, 1.]`,
    vdoc(merge(V3, axes3(4.4), { arrows: [{ from: [0, 0], to: p3(2, 0, 2), vl: "a", off: -16 }, { from: [0, 0], to: p3(0, 2, -2), vl: "b", color: "blue", off: 16 }, { from: [0, 0], to: p3(-2, 2, 2), color: "red", label: "a × b", off: -16 }] }, { view: { xmin: -3.8, xmax: 5, ymin: -3.6, ymax: 5.4 } }))),
  W(6, "medium", 4, S`A mechanic applies 75 N to the end of a 0.28 m wrench at $65^\circ$ to the handle. (a) Find the magnitude of the torque. (b) What is the greatest torque this force could produce, and how? (c) At what acute angle would the torque be 15 N·m?`,
    S`(a) $0.28\times75\sin65^\circ\approx19.03$ N·m. (b) 21 N·m, pulling perpendicular to the handle. (c) $\sin\theta=\frac{15}{21}$, $\theta\approx45.58^\circ$. [1.5, 1, 1.5.]`,
    vdoc({ view: { xmin: -0.6, xmax: 7.4, ymin: -0.8, ymax: 4.4 }, grid: false, axes: false, arrows: [{ from: [0, 0], to: [5, 0], vl: "r", label: "0.28 m", off: 16, w: 5 }, { from: [5, 0], to: pol(3.6, 65, [5, 0]), vl: "F", label: "75 N", color: "red", off: -16 }], arcs: [{ at: [5, 0], r: 1, a: 0, b: 65, label: "65°" }], points: [{ x: 0, y: 0, label: "bolt", dx: -6, dy: 20 }] })),
  W(6, "hard", 4, S`Let $\vec a=[3,1,0]$, $\vec b=[0,2,1]$ and $\vec c=[1,0,3]$. (a) Find the volume of the parallelepiped they span. (b) Find its height above the face spanned by $\vec b$ and $\vec c$. (c) Show that $\vec a$, $\vec b$ and $\vec a+\vec b$ are coplanar, and explain why that was expected.`,
    S`(a) $\vec b\times\vec c=[6,1,-2]$; $\vec a\cdot(\vec b\times\vec c)=18+1+0=19$. (b) Base area $\sqrt{41}$; height $\frac{19}{\sqrt{41}}\approx2.97$. (c) $[3,3,1]\cdot(\vec b\times\vec a)$ with $\vec b\times\vec a=[-1,3,-6]$: $-3+9-6=0$; $\vec a+\vec b$ is built from $\vec a$ and $\vec b$, so it lies in their plane. [1.5, 1, 1.5.]`,
    vdoc(merge(V3, axes3(4.6), { segs: ppd([3, 1, 0], [0, 2, 1], [1, 0, 3]) }, { arrows: [{ from: [0, 0], to: p3(3, 1, 0), vl: "a", off: 16 }, { from: [0, 0], to: p3(0, 2, 1), vl: "b", color: "blue", off: 16 }, { from: [0, 0], to: p3(1, 0, 3), vl: "c", color: "green", off: -16 }] }, { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 6.4 } }))),
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
