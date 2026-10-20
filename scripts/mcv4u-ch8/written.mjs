// MCV4U chapter 8 written-response (long_answer) bank questions for printed chapter tests (Part C).
// Each question carries a figure (SVG uploaded to graph-images; paper tests print image_url).
//   node scripts/mcv4u-ch8/written.mjs           -> dry run
//   node scripts/mcv4u-ch8/written.mjs --apply   -> uploads figures, inserts rows not already in the bank (matched by prompt)
// Run --apply only after the chapter 8 lessons are loaded and renumber8.mjs has run (it links each row to its lesson by title).
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";
import crypto from "crypto";
import { vdoc, p3, axes3, merge, line3, patch3 } from "./vecfig.mjs";

const T = {
  1: "8.1 Equations of Lines in Two-Space and Three-Space", 2: "8.2 Equations of Planes", 3: "8.3 Properties of Planes",
  4: "8.4 Intersections of Lines in Two-Space and Three-Space", 5: "8.5 Intersections of Lines and Planes", 6: "8.6 Intersections of Planes",
};
const W = (t, difficulty, points, prompt, feedback, fig) => ({ topic: T[t], difficulty, points, prompt, feedback, kind: "long_answer", answer: null, choices: null, fig });
const S = String.raw;
const V3 = { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 5.8 }, grid: false, axes: false };
const pt = (x, y, z, label, dx = 8, dy = -6) => { const [a, b] = p3(x, y, z); return { x: a, y: b, label, dx, dy }; };
const L2 = (p, m, t0, t1, color = "violet") => ({ pts: [[p[0] + t0 * m[0], p[1] + t0 * m[1]], [p[0] + t1 * m[0], p[1] + t1 * m[1]]], color, w: 2.4 });

export const WRITTEN = [
  W(1, "medium", 4, S`A line passes through $A(3,-1)$ and $B(-1,5)$. (a) Write vector and parametric equations. (b) Write a scalar equation. (c) Decide whether $C(7,-7)$ lies on the line, using two different forms.`,
    S`(a) Direction $[-4,6]$, or $[-2,3]$: $\vec r=[3,-1]+t[-2,3]$; $x=3-2t$, $y=-1+3t$. (b) Normal $[3,2]$: $3x+2y-7=0$. (c) Parametric: $t=-2$ gives $(7,-7)$ ✓; scalar: $21-14-7=0$ ✓. [1, 1.5, 1.5.]`,
    vdoc({ view: { xmin: -2, xmax: 8, ymin: -8, ymax: 6 }, step: 1, segs: [L2([3, -1], [-2, 3], -2.3, 2.2)], points: [{ x: 3, y: -1, label: "A", dx: 8, dy: 4 }, { x: -1, y: 5, label: "B", dx: 8, dy: 4 }, { x: 7, y: -7, label: "C?", dx: -26, dy: -4 }] })),
  W(1, "hard", 4, S`A line passes through $(2,0,1)$ and $(5,3,-2)$. (a) Write vector and parametric equations. (b) Describe the line as the intersection of two planes. (c) Find where it crosses the xy-plane.`,
    S`(a) Direction $[3,3,-3]$, or $[1,1,-1]$: $\vec r=[2,0,1]+t[1,1,-1]$; $x=2+t$, $y=t$, $z=1-t$. (b) $x-y=2$ and $x+z=3$ (eliminate $t$). (c) $z=0$ at $t=1$: $(3,1,0)$. [1, 2, 1.]`,
    vdoc(merge(V3, axes3(4.8), { segs: [line3([2, 0, 1], [1, 1, -1], -1, 3.2, "violet", 2.8)] }, { points: [pt(2, 0, 1, "(2, 0, 1)", -60, 14), pt(3, 1, 0, "(3, 1, 0)", 8, 14)] }))),
  W(2, "medium", 4, S`For $A(1,2,0)$, $B(3,1,1)$ and $C(0,4,2)$: (a) write a vector equation of the plane through them; (b) write its parametric equations; (c) show that $D(4,2,4)$ lies on the plane and give the parameters.`,
    S`(a) $\vec r=[1,2,0]+s[2,-1,1]+t[-1,2,2]$. (b) $x=1+2s-t$, $y=2-s+2t$, $z=s+2t$. (c) $x$, $y$: $2s-t=3$, $-s+2t=0\Rightarrow s=2,\ t=1$; $z$: $2+2=4$ ✓. [1.5, 1, 1.5.]`,
    vdoc(merge(V3, axes3(4.6), { polys: [{ pts: [p3(1, 2, 0), p3(3, 1, 1), p3(0, 4, 2)], fill: "#dbeafe", stroke: "blue" }], points: [pt(1, 2, 0, "A", -6, 18), pt(3, 1, 1, "B", -16, 12), pt(0, 4, 2, "C"), pt(4, 2, 4, "D")] }, { view: { xmin: -3.8, xmax: 6.4, ymin: -2.8, ymax: 6 } }))),
  W(2, "hard", 4, S`Show that $A(1,0,2)$, $B(2,1,3)$, $C(0,2,1)$ and $D(1,3,2)$ are coplanar, find a vector equation of their plane, and describe the quadrilateral $ABDC$.`,
    S`$\overrightarrow{AB}=[1,1,1]$, $\overrightarrow{AC}=[-1,2,-1]$, $\overrightarrow{AD}=[0,3,0]=\overrightarrow{AB}+\overrightarrow{AC}$, so $D$ is on the plane $\vec r=[1,0,2]+s[1,1,1]+t[-1,2,-1]$ ($s=t=1$). Since $\overrightarrow{AD}=\overrightarrow{AB}+\overrightarrow{AC}$, $ABDC$ is a parallelogram. [2, 1, 1.]`,
    vdoc(merge(V3, axes3(4.6), { polys: [{ pts: [p3(1, 0, 2), p3(2, 1, 3), p3(1, 3, 2), p3(0, 2, 1)], fill: "#dbeafe", stroke: "blue" }], points: [pt(1, 0, 2, "A", -16, 10), pt(2, 1, 3, "B"), pt(0, 2, 1, "C", 6, 16), pt(1, 3, 2, "D")] }, { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 6.4 } }))),
  W(3, "medium", 4, S`(a) Find the scalar equation of the plane through $P(2,-1,3)$ with normal $[1,4,-2]$. (b) Find its intercepts. (c) Find its distance from the origin.`,
    S`(a) $x+4y-2z=2-4-6$, so $x+4y-2z+8=0$. (b) x: $-8$; y: $-2$; z: $4$. (c) $\frac{8}{\sqrt{21}}\approx1.75$. [1.5, 1.5, 1.]`,
    vdoc(merge({ view: { xmin: -4, xmax: 6, ymin: -2.8, ymax: 5.8 }, grid: false, axes: false }, axes3(4.8, 3), { polys: [{ pts: [p3(-8 * 0.4, 0, 0), p3(0, -2 * 0.8, 0), p3(0, 0, 4 * 0.8)], fill: "#dbeafe", stroke: "blue" }] }, { texts: [{ x: 3.4, y: 4.6, t: "intercepts −8, −2, 4 (scaled)", color: "gray" }] }))),
  W(3, "hard", 4, S`Let $\pi$ be the plane $\vec r=[1,1,0]+s[2,0,1]+t[1,3,-1]$. (a) Find a scalar equation of $\pi$. (b) Find the acute angle between $\pi$ and $x+y+z=5$. (c) Find the distance from $(3,0,1)$ to $\pi$.`,
    S`(a) $\vec n=[2,0,1]\times[1,3,-1]=[-3,3,6]$, or $[1,-1,-2]$: $x-y-2z=0$. (b) $\cos\theta=\frac{|1-1-2|}{\sqrt6\sqrt3}\approx0.4714$, $\theta\approx61.87^\circ$. (c) $\frac{|3-0-2|}{\sqrt6}\approx0.41$. [1.5, 1.5, 1.]`,
    vdoc(merge(V3, axes3(4.6), { polys: [patch3([1, 1, 0], [2, 0, 1], [1, 3, -1], 0.7)] }, { points: [pt(3, 0, 1, "(3, 0, 1)")] }))),
  W(4, "medium", 4, S`Find the intersection of $\vec r=[1,4]+s[2,-1]$ and $\vec r=[-2,1]+t[1,1]$, and the acute angle between the lines.`,
    S`$1+2s=-2+t$ and $4-s=1+t$ give $t=3-s$, so $1+2s=1-s$, $s=0$, $t=3$: the point $(1,4)$. Angle: $\cos\theta=\frac{2-1}{\sqrt5\sqrt2}\approx0.316$, $\theta\approx71.57^\circ$. [2.5, 1.5.]`,
    vdoc({ view: { xmin: -3, xmax: 5, ymin: -1, ymax: 6 }, step: 1, segs: [L2([1, 4], [2, -1], -1.6, 1.8), L2([-2, 1], [1, 1], -0.6, 4.6, "blue")], points: [{ x: 1, y: 4, label: "(1, 4)", dx: 8, dy: -6 }] })),
  W(4, "hard", 4, S`$L_1:\ \vec r=[1,-1,2]+s[1,2,0]$ and $L_2:\ \vec r=[3,0,-1]+t[0,1,2]$. (a) Show that the lines are skew. (b) Find the shortest distance between them.`,
    S`(a) Directions are not parallel. $x$: $s=2$; $y$: $-1+4=t\Rightarrow t=3$; $z$: $2$ vs $-1+6=5$ — contradiction, so skew. (b) $\vec n=[1,2,0]\times[0,1,2]=[4,-2,1]$; $\overrightarrow{P_1P_2}=[2,1,-3]$; distance $\frac{|8-2-3|}{\sqrt{21}}=\frac3{\sqrt{21}}\approx0.65$. [2, 2.]`,
    vdoc(merge(V3, axes3(4.6), { segs: [line3([1, -1, 2], [1, 2, 0], -0.6, 2, "violet", 2.8), line3([3, 0, -1], [0, 1, 2], -0.4, 3.2, "blue", 2.8)] }, { view: { xmin: -4.4, xmax: 6, ymin: -3.4, ymax: 6.4 } }))),
  W(5, "medium", 4, S`The line $\vec r=[2,1,-1]+t[1,-1,2]$ and the plane $3x+y-z=15$ are given. (a) Show that the line does not meet the plane. (b) Find the distance between them. (c) For which value of $D$ would the line lie in the plane $3x+y-z=D$?`,
    S`(a) Substituting: $3(2+t)+(1-t)-(-1+2t)=8$ for every $t$, never 15 (and $\vec m\cdot\vec n=3-1-2=0$). (b) $\frac{|8-15|}{\sqrt{11}}\approx2.11$. (c) $D=8$. [1.5, 1.5, 1.]`,
    vdoc(merge(V3, axes3(4.6), { polys: [patch3([3, 3, 0], [1, -1, 2], [0, 1, 1], 0.9)] }, { segs: [line3([2, 1, -1], [1, -1, 2], -0.6, 1.6, "red", 2.8)] }))),
  W(5, "hard", 4, S`For $P(5,-1,4)$ and the plane $2x-y+2z=1$: (a) find the foot of the perpendicular from $P$; (b) find the distance from $P$ to the plane in two ways; (c) find the reflection of $P$ in the plane.`,
    S`(a) $(5+2t,\ -1-t,\ 4+2t)$: $19+9t=1\Rightarrow t=-2$, foot $(1,1,0)$. (b) $|t||\vec n|=2\times3=6$; formula $\frac{|10+1+8-1|}{3}=6$. (c) $t=-4$: $(-3,3,-4)$. [1.5, 1.5, 1.]`,
    vdoc(merge(V3, axes3(4.6), { polys: [patch3([1, 1, 0], [1, 2, 0], [0, 2, 1], 1.1)] }, { segs: [{ pts: [p3(5, -1, 4), p3(-3, 3, -4)].map((q) => q), color: "red", dash: true, w: 2.2 }] }, { points: [pt(5, -1, 4, "P"), pt(1, 1, 0, "foot", 8, 14), pt(-3, 3, -4, "P′", 8, 0)] }, { view: { xmin: -6, xmax: 6, ymin: -6, ymax: 6 } }))),
  W(6, "medium", 4, S`(a) Find the line of intersection of $x+y-z=1$ and $2x-y+z=5$. (b) Find the angle between the planes. (c) Verify that your line lies in both planes.`,
    S`(a) Direction $[1,1,-1]\times[2,-1,1]=[0,-3,-3]$, or $[0,1,1]$; adding the equations gives $x=2$; with $z=0$, $y=-1$: $\vec r=[2,-1,0]+t[0,1,1]$. (b) $\vec n_1\cdot\vec n_2=2-1-1=0$: $90^\circ$. (c) $2+(-1+t)-t=1$ ✓ and $4-(-1+t)+t=5$ ✓. [2, 1, 1.]`,
    vdoc(merge(V3, axes3(4.6), { polys: [patch3([2, 0, 1], [1, -1, 0], [0, 1, 1], 1.2, "#dbeafe", "blue", 0.5), patch3([2, 0, 1], [1, 2, 0], [0, 1, 1], 1.2, "#dcfce7", "green", 0.5)] }, { segs: [line3([2, -1, 0], [0, 1, 1], -0.5, 2.6, "red", 3)] }))),
  W(6, "hard", 4, S`Consider $x+y+z=6$, $x-y+2z=5$ and $2x+3z=k$. (a) Show that the normals are coplanar. (b) For which $k$ do the planes share a line? Find that line. (c) Describe the configuration for every other $k$.`,
    S`(a) $[2,0,3]=[1,1,1]+[1,-1,2]$, so $\vec n_1\cdot(\vec n_2\times\vec n_3)=0$. (b) Adding the first two gives $2x+3z=11$, so $k=11$; subtracting gives $2y-z=1$. With $z=2t$: $\vec r=[5.5,0.5,0]+t[-3,1,2]$. (c) $k\ne11$: inconsistent, no two planes parallel — a triangular prism. [1, 2, 1.]`,
    vdoc(merge(V3, axes3(4.6), { polys: [patch3([1.5, 0, 0], [1, 0, 0], [0, 1.4, 0], 1.5, "#dbeafe", "blue", 0.45), patch3([1.5, 1, 1], [1, 0, 0], [0, 0.7, -0.7], 1.5, "#dcfce7", "green", 0.45), patch3([1.5, -1, 1], [1, 0, 0], [0, 0.7, 0.7], 1.5, "#fee2e2", "red", 0.45)] }, { texts: [{ x: 3.6, y: 4.6, t: "k ≠ 11: a prism", color: "gray" }] }))),
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
