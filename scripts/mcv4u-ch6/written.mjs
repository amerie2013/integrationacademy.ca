// MCV4U chapter 6 written-response (long_answer) bank questions for printed chapter tests (Part C).
// Each question carries a figure (SVG uploaded to graph-images; paper tests print image_url).
//   node scripts/mcv4u-ch6/written.mjs           -> dry run
//   node scripts/mcv4u-ch6/written.mjs --apply   -> uploads figures, inserts rows not already in the bank (matched by prompt)
// Run --apply only after the chapter 6 lessons are loaded and renumber6.mjs has run (it links each row to its lesson by title).
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";
import crypto from "crypto";
import { vdoc, pol, brg } from "./vecfig.mjs";

const T = {
  1: "6.1 Introduction to Vectors", 2: "6.2 Addition and Subtraction of Vectors",
  3: "6.3 Multiplying a Vector by a Scalar", 4: "6.4 Applications of Vector Addition",
  5: "6.5 Resolution of Vectors Into Rectangular Components",
};
const W = (t, difficulty, points, prompt, feedback, fig) => ({ topic: T[t], difficulty, points, prompt, feedback, kind: "long_answer", answer: null, choices: null, fig });
const S = String.raw;
const RAD = Math.PI / 180;
const plus = (p, q) => [p[0] + q[0], p[1] + q[1]];
const OCT = Array.from({ length: 8 }, (_, i) => pol(5, 112.5 - i * 45));

export const WRITTEN = [
  W(1, "medium", 4, S`A drone flies from $A(-3,-2)$ to $B(5,4)$ on a map in kilometres (north is up). (a) Find $|\overrightarrow{AB}|$. (b) Give the direction of $\overrightarrow{AB}$ as a true bearing and as a quadrant bearing. (c) Give the true bearing of the return trip $\overrightarrow{BA}$.`,
    S`(a) Run 8, rise 6: $\sqrt{64+36}=10$ km. (b) Angle from north $\tan^{-1}\frac86\approx53.1^\circ$: $053.1^\circ$, N53.1°E. (c) $053.1^\circ+180^\circ=233.1^\circ$. [1, 2, 1.]`,
    vdoc({ view: { xmin: -4, xmax: 6, ymin: -3, ymax: 5 }, north: [-3.4, 2.2, 1.6], arrows: [{ from: [-3, -2], to: [5, 4], vl: "AB" }], segs: [{ pts: [[-3, -2], [5, -2], [5, 4]], dash: true }], points: [{ x: -3, y: -2, label: "A(−3, −2)", dx: -8, dy: 18 }, { x: 5, y: 4, label: "B(5, 4)", dx: -56, dy: -6 }] })),
  W(1, "hard", 4, S`$ABCDEFGH$ is a regular octagon with centre $O$, each vertex 5 units from $O$. (a) Name the edge vector equal to $\overrightarrow{AB}$, and explain. (b) Find $|\overrightarrow{AE}|$. (c) Find $|\overrightarrow{AC}|$.`,
    S`(a) $\overrightarrow{FE}$: the side opposite $AB$ is parallel to it and equally long, and from $F$ to $E$ it points the same way. (b) $A$ and $E$ are opposite vertices: $|\overrightarrow{AE}|=10$. (c) $\angle AOC=90^\circ$, so $|\overrightarrow{AC}|=5\sqrt2\approx7.07$. [2, 1, 1.]`,
    vdoc({ view: { xmin: -6, xmax: 6, ymin: -5.8, ymax: 5.8 }, grid: false, axes: false, segs: [{ pts: [...OCT, OCT[0]], color: "gray" }], arrows: [{ from: OCT[0], to: OCT[1], color: "red", off: -14 }, { from: OCT[5], to: OCT[4], color: "violet", off: -14 }], points: ["A", "B", "C", "D", "E", "F", "G", "H"].map((t, i) => ({ x: OCT[i][0], y: OCT[i][1], label: t, dx: OCT[i][0] >= 0 ? 8 : -16, dy: OCT[i][1] >= 0 ? -6 : 16 })).concat([{ x: 0, y: 0, label: "O", dx: 6, dy: 16 }]) })),
  W(2, "medium", 4, S`$|\vec u|=8$, $|\vec v|=5$ and the angle between them is $70^\circ$. (a) Find $|\vec u+\vec v|$. (b) Find $|\vec u-\vec v|$. (c) Verify that $|\vec u+\vec v|^2+|\vec u-\vec v|^2=2|\vec u|^2+2|\vec v|^2$.`,
    S`(a) Triangle angle $110^\circ$: $\sqrt{64+25+80\cos70^\circ}=\sqrt{116.36}\approx10.79$. (b) $\sqrt{89-27.36}=\sqrt{61.64}\approx7.85$. (c) $116.36+61.64=178=2(64)+2(25)$. [1.5, 1.5, 1.]`,
    vdoc({ view: { xmin: -0.6, xmax: 10.4, ymin: -0.8, ymax: 5.4 }, grid: false, axes: false, segs: [{ pts: [[8, 0], plus([8, 0], pol(5, 70)), pol(5, 70)], color: "gray" }], arrows: [{ from: [0, 0], to: [8, 0], vl: "u", label: "8", off: 16 }, { from: [0, 0], to: pol(5, 70), vl: "v", label: "5", color: "blue", off: -16 }, { from: [0, 0], to: plus([8, 0], pol(5, 70)), color: "red" }, { from: pol(5, 70), to: [8, 0], color: "amber", dash: true }], texts: [{ x: 6.4, y: 3.85, t: "u + v", color: "red" }, { x: 6.9, y: 1.7, t: "u − v", color: "amber" }], arcs: [{ at: [0, 0], r: 1, a: 0, b: 70, label: "70°" }] })),
  W(2, "hard", 4, S`In quadrilateral $ABCD$, $\overrightarrow{AB}=\vec a$, $\overrightarrow{BC}=\vec b$ and $\overrightarrow{CD}=\vec c$. (a) Write $\overrightarrow{AC}$, $\overrightarrow{BD}$ and $\overrightarrow{AD}$ in terms of $\vec a$, $\vec b$, $\vec c$. (b) Show that $\overrightarrow{AC}+\overrightarrow{BD}=\overrightarrow{AD}+\overrightarrow{BC}$. (c) What is $\overrightarrow{AB}+\overrightarrow{BC}+\overrightarrow{CD}+\overrightarrow{DA}$, and why?`,
    S`(a) $\overrightarrow{AC}=\vec a+\vec b$, $\overrightarrow{BD}=\vec b+\vec c$, $\overrightarrow{AD}=\vec a+\vec b+\vec c$. (b) Both sides equal $\vec a+2\vec b+\vec c$. (c) $\vec 0$: the chain returns to its starting point. [2, 1, 1.]`,
    vdoc({ view: { xmin: -0.6, xmax: 8, ymin: -0.8, ymax: 5.4 }, grid: false, axes: false, arrows: [{ from: [0, 0], to: [5, -0.3], vl: "a", off: 16 }, { from: [5, -0.3], to: [7.2, 3.6], vl: "b", color: "blue", off: 16 }, { from: [7.2, 3.6], to: [1.6, 4.6], vl: "c", color: "green", off: 16 }, { from: [0, 0], to: [7.2, 3.6], color: "red", w: 1.8, dash: true }, { from: [5, -0.3], to: [1.6, 4.6], color: "amber", w: 1.8, dash: true }], segs: [{ pts: [[1.6, 4.6], [0, 0]], color: "gray" }], points: [{ x: 0, y: 0, label: "A", dx: -14, dy: 14 }, { x: 5, y: -0.3, label: "B", dx: 6, dy: 16 }, { x: 7.2, y: 3.6, label: "C", dx: 8, dy: 0 }, { x: 1.6, y: 4.6, label: "D", dx: -16, dy: -4 }] })),
  W(3, "medium", 4, S`$\overrightarrow{OA}=\vec a$ and $\overrightarrow{OB}=\vec b$. $P$ lies on $AB$ with $AP:PB=1:2$ and $Q$ is the midpoint of $OB$. (a) Write $\overrightarrow{OP}$ in terms of $\vec a$ and $\vec b$. (b) Write $\overrightarrow{PQ}$ in terms of $\vec a$ and $\vec b$. (c) Is $PQ$ parallel to $OA$? Explain.`,
    S`(a) $\overrightarrow{OP}=\vec a+\frac13(\vec b-\vec a)=\frac23\vec a+\frac13\vec b$. (b) $\overrightarrow{PQ}=\frac12\vec b-\frac23\vec a-\frac13\vec b=-\frac23\vec a+\frac16\vec b$. (c) No: it has a $\vec b$ part, so it is not a multiple of $\vec a$. [1, 2, 1.]`,
    vdoc({ view: { xmin: -0.6, xmax: 7.6, ymin: -0.8, ymax: 5.2 }, grid: false, axes: false, segs: [{ pts: [[6.5, 0.5], [2, 4.5]], color: "gray" }, { pts: [[2 + (6.5 - 2) * 2 / 3, 4.5 - 4 * 2 / 3], [1, 2.25]], color: "red", dash: true }], arrows: [{ from: [0, 0], to: [6.5, 0.5], vl: "a", off: 16 }, { from: [0, 0], to: [2, 4.5], vl: "b", color: "blue", off: -16 }], points: [{ x: 0, y: 0, label: "O", dx: -14, dy: 14 }, { x: 6.5, y: 0.5, label: "A", dx: 8, dy: 4 }, { x: 2, y: 4.5, label: "B", dx: -4, dy: -8 }, { x: 5, y: 1.83, label: "P", dx: 8, dy: -4 }, { x: 1, y: 2.25, label: "Q", dx: -18, dy: 0 }] })),
  W(3, "hard", 4, S`$OACB$ is a parallelogram with $\overrightarrow{OA}=\vec a$ and $\overrightarrow{OB}=\vec b$. $M$ is the midpoint of $AC$, and $OM$ meets $AB$ at $P$. (a) Write $\overrightarrow{OM}$ in terms of $\vec a$ and $\vec b$. (b) By writing $\overrightarrow{OP}=s\overrightarrow{OM}$ and $\overrightarrow{OP}=(1-t)\vec a+t\vec b$, find $s$ and $t$. (c) State what this tells you about where $P$ lies.`,
    S`(a) $\overrightarrow{OM}=\vec a+\frac12\vec b$. (b) $s\vec a+\frac s2\vec b=(1-t)\vec a+t\vec b$; since $\vec a$, $\vec b$ are not collinear, $s=1-t$ and $\frac s2=t$, so $s=\frac23$, $t=\frac13$. (c) $P$ is two thirds of the way from $O$ to $M$ and one third of the way from $A$ to $B$. [1, 2, 1.]`,
    vdoc({ view: { xmin: -0.6, xmax: 8.6, ymin: -0.8, ymax: 4.6 }, grid: false, axes: false, segs: [{ pts: [[6, 0], [7.8, 3.6], [1.8, 3.6]], color: "gray" }, { pts: [[6, 0], [1.8, 3.6]], color: "gray" }, { pts: [[0, 0], [6.9, 1.8]], color: "red", dash: true }], arrows: [{ from: [0, 0], to: [6, 0], vl: "a", off: 16 }, { from: [0, 0], to: [1.8, 3.6], vl: "b", color: "blue", off: -16 }], points: [{ x: 0, y: 0, label: "O", dx: -14, dy: 14 }, { x: 6, y: 0, label: "A", dx: 6, dy: 16 }, { x: 7.8, y: 3.6, label: "C", dx: 8, dy: 0 }, { x: 1.8, y: 3.6, label: "B", dx: -16, dy: -4 }, { x: 6.9, y: 1.8, label: "M", dx: 8, dy: 4 }, { x: 4.6, y: 1.2, label: "P", dx: -6, dy: -10, color: "red" }] })),
  W(4, "medium", 4, S`A plane heads $135^\circ$ at an airspeed of 420 km/h. A 70 km/h wind blows from $045^\circ$. (a) Explain why the wind is perpendicular to the heading. (b) Find the ground speed and track. (c) How long does it take to cover 1000 km over the ground?`,
    S`(a) The wind blows toward $225^\circ$, which is $90^\circ$ from $135^\circ$. (b) $\sqrt{420^2+70^2}\approx425.8$ km/h; drift $\tan^{-1}\frac{70}{420}\approx9.46^\circ$ clockwise: track $\approx144.5^\circ$. (c) $1000\div425.8\approx2.35$ h. [1, 2, 1.]`,
    vdoc({ view: { xmin: -0.8, xmax: 4.4, ymin: -4.4, ymax: 1.4 }, north: [0, 0, 1.2], arrows: [{ from: [0, 0], to: brg(4.2, 135), vl: "a", label: "420 km/h", off: 16 }, { from: brg(4.2, 135), to: plus(brg(4.2, 135), brg(0.7, 225)), color: "blue", label: "70", off: -14 }, { from: [0, 0], to: plus(brg(4.2, 135), brg(0.7, 225)), color: "red", vl: "g", off: -16 }] })),
  W(4, "hard", 4, S`A 300 N load hangs from two cables making $40^\circ$ and $25^\circ$ with the horizontal. (a) Write the horizontal and vertical equilibrium equations. (b) Find both tensions. (c) Explain why the tension in the $40^\circ$ cable equals the weight here.`,
    S`(a) $T_1\cos40^\circ=T_2\cos25^\circ$; $T_1\sin40^\circ+T_2\sin25^\circ=300$. (b) $T_2=T_1\frac{\cos40^\circ}{\cos25^\circ}$; substituting, $T_1\frac{\sin40^\circ\cos25^\circ+\cos40^\circ\sin25^\circ}{\cos25^\circ}=T_1\frac{\sin65^\circ}{\cos25^\circ}=300$, so $T_1=300$ N and $T_2\approx253.6$ N. (c) $\sin65^\circ=\cos25^\circ$, so the factor is exactly 1. [1, 2, 1.]`,
    vdoc({ view: { xmin: -4.4, xmax: 4.4, ymin: -3, ymax: 3 }, grid: false, axes: false, segs: [{ pts: [pol(4, 155), [0, 0], pol(3.4, 40)], color: "gray", w: 1.4 }], polys: [{ pts: [[-0.8, -0.2], [0.8, -0.2], [0.8, -1], [-0.8, -1]], fill: "#fde68a", stroke: "amber" }], arrows: [{ from: [0, 0], to: pol(2.2, 40), color: "violet", label: "T₁", off: -14 }, { from: [0, 0], to: pol(2.2, 155), color: "blue", label: "T₂", off: 14 }, { from: [0, -1], to: [0, -2.8], color: "red", label: "300 N", off: -24 }], arcs: [{ at: [0, 0], r: 1, a: 0, b: 40, label: "40°" }, { at: [0, 0], r: 1, a: 155, b: 180, label: "25°" }] })),
  W(4, "hard", 3, S`A boat moves at 3 m/s in still water across a 250 m river with a 1.8 m/s current. (a) At what angle upstream must it aim to land directly opposite, and how long does that take? (b) If instead it aims straight across, how long does the crossing take and how far downstream does it land?`,
    S`(a) $3\sin\theta=1.8\Rightarrow\theta\approx36.9^\circ$ upstream; across speed $\sqrt{9-3.24}=2.4$ m/s, time $\approx104.2$ s. (b) $250\div3\approx83.3$ s; drift $1.8\times83.3=150$ m. [1.5, 1.5.]`,
    vdoc({ view: { xmin: -2.6, xmax: 2.8, ymin: -0.6, ymax: 3.4 }, grid: false, axes: false, polys: [{ pts: [[-2.6, 0], [2.8, 0], [2.8, 3], [-2.6, 3]], fill: "#e0f2fe" }], arrows: [{ from: [0, 0], to: [-1.8, 2.4], vl: "b", label: "3 m/s", off: -16 }, { from: [-1.8, 2.4], to: [0, 2.4], color: "blue", label: "1.8 m/s", off: -14 }, { from: [0, 0], to: [0, 2.4], color: "red", label: "2.4 m/s", off: 26 }] })),
  W(5, "medium", 4, S`Forces of 40 N at $0^\circ$, 60 N at $120^\circ$ and 30 N at $250^\circ$ act on an object. (a) Resolve each force into components. (b) Find the resultant's magnitude and direction. (c) Describe the equilibrant.`,
    S`(a) $(40,0)$; $(-30,51.96)$; $(-10.26,-28.19)$. (b) Sum $(-0.26,23.77)$: about 23.77 N at $90.6^\circ$ — almost straight up. (c) About 23.77 N at $270.6^\circ$ (almost straight down). [1.5, 1.5, 1.]`,
    vdoc({ view: { xmin: -3.6, xmax: 4.6, ymin: -3.4, ymax: 5.6 }, grid: false, arrows: [{ from: [0, 0], to: [4, 0], label: "40 N", off: 14 }, { from: [0, 0], to: pol(6, 120), label: "60 N", color: "blue", off: -16 }, { from: [0, 0], to: pol(3, 250), label: "30 N", color: "green", off: 16 }, { from: [0, 0], to: [-0.026, 2.377], color: "red", vl: "R", off: 16 }] })),
  W(5, "hard", 4, S`A 500 N crate is held at rest on a frictionless $25^\circ$ ramp. (a) Find the tension in a rope parallel to the ramp. (b) Find the force the ramp exerts on the crate. (c) If the rope were horizontal instead, what tension would be needed? Explain why it is larger.`,
    S`(a) $500\sin25^\circ\approx211.3$ N. (b) $500\cos25^\circ\approx453.2$ N (perpendicular to the ramp). (c) Along the ramp the rope must supply $211.3$ N, but only $T\cos25^\circ$ of a horizontal pull acts along the ramp: $T=500\tan25^\circ\approx233.2$ N — part of the pull is wasted pressing into the ramp. [1, 1, 2.]`,
    vdoc({ view: { xmin: -0.5, xmax: 9, ymin: -1.4, ymax: 6.4 }, grid: false, axes: false, polys: [{ pts: [[0, 0], [8.8, 0], [8.8, 8.8 * Math.tan(25 * RAD)]], fill: "#f1f5f9", stroke: "gray" }], arrows: [{ from: [5, 2.7], to: [5, -0.9], vl: "W", label: "500 N", off: -16 }, { from: [5, 2.7], to: pol(1.5, 25, [5, 2.7]), color: "green", label: "T", off: -14 }, { from: [5, 2.7], to: pol(3.26, 115, [5, 2.7]), color: "blue", label: "N", off: 14 }], arcs: [{ at: [0, 0], r: 1.6, a: 0, b: 25, label: "25°" }] })),
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
