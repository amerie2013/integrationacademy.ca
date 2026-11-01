// LINALG1 1.7 — Projections and Distances: projection onto a vector and the perpendicular part, the orthogonal
// decomposition and why the projection is the closest point, projection onto a plane (subtract the normal part),
// distances from a point to a line and to a plane, closest points, and reflections / skew-line distance (hard).
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, q, num, hard, definition, theorem, vec, vecT } from "./lib.mjs";
import { vfig, scene3, a3, pt3, seg3, patch3, line3 } from "./vecfig.mjs";

export const TITLE = "1.7 Projections and Distances";
export const ID = "11a10001-0001-4001-8001-000000000107";

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "🔦",
    title: "Projections and Distances",
    overview: S`Shine a light straight down onto a line: the shadow of a vector \(\vec u\) is its <strong>projection</strong> onto that line. Every vector splits into a piece along a chosen direction and a piece perpendicular to it, and the perpendicular piece is exactly the shortest way from the tip of \(\vec u\) to the line. That single idea gives distances from points to lines and planes now, and least-squares fitting later in the course.`,
    goals: [
      "compute \\(\\operatorname{proj}_{\\vec v}\\vec u\\) and \\(\\operatorname{perp}_{\\vec v}\\vec u\\);",
      "decompose a vector into orthogonal parts and explain why the projection is the closest point;",
      "project a vector onto a plane through the origin;",
      "find the distance from a point to a line and to a plane, and the closest point;",
      "use projections for reflections and for the distance between skew lines.",
    ],
    outcomes: "geometry of \\(\\mathbb R^n\\): orthogonal projections and distances",
    prior: [
      [S`\((2,1,-2)\cdot(1,0,3)\)?`, S`\(2+0-6=-4\).`],
      [S`Normal of \(x_1-2x_2+2x_3=5\)?`, S`\((1,-2,2)\).`],
      [S`Unit vector along \((3,4)\)?`, S`\((0.6,0.8)\).`],
    ],
    words: [
      ["Projection", "\\(\\operatorname{proj}_{\\vec v}\\vec u=\\frac{\\vec u\\cdot\\vec v}{\\vec v\\cdot\\vec v}\\vec v\\)", "shadow of \\(\\vec u\\) on the line of \\(\\vec v\\)"],
      ["Perpendicular part", "\\(\\operatorname{perp}_{\\vec v}\\vec u=\\vec u-\\operatorname{proj}_{\\vec v}\\vec u\\)", "orthogonal to \\(\\vec v\\)"],
      ["Scalar component", "\\(\\frac{\\vec u\\cdot\\vec v}{\\|\\vec v\\|}\\)", "signed length of the shadow"],
      ["Distance to a plane", "\\(\\frac{|\\vec n\\cdot\\vec q-d|}{\\|\\vec n\\|}\\)", "length of the normal part"],
    ],
  }),

  section("📌 Projection onto a vector", S`
  ${definition("projection", S`For \(\vec v\ne\vec 0\), the projection of \(\vec u\) onto \(\vec v\) is \(\operatorname{proj}_{\vec v}\vec u=\dfrac{\vec u\cdot\vec v}{\vec v\cdot\vec v}\,\vec v\), and the perpendicular of \(\vec u\) onto \(\vec v\) is \(\operatorname{perp}_{\vec v}\vec u=\vec u-\operatorname{proj}_{\vec v}\vec u\).`)}
  ${vfig({ view: { xmin: -0.6, xmax: 7.6, ymin: -0.9, ymax: 4.2 }, grid: false, axes: false, segs: [{ pts: [[-0.6, -0.15], [7.6, 1.9]], color: "gray", dash: true }, { pts: [[3.22, 1.11], [2.93, 1.04], [3, 0.75]], color: "gray", w: 1.2 }], arrows: [{ from: [0, 0], to: [6, 1.5], color: "red", w: 2, vl: "v", off: -16 }, { from: [0, 0], to: [2.6, 3.6], vl: "u", off: -16 }, { from: [0, 0], to: [3.29, 0.82], color: "green", w: 4, label: "proj", off: 16 }, { from: [3.29, 0.82], to: [2.6, 3.6], color: "amber", w: 2.6, label: "perp", off: -18 }] }, "u = proj + perp: the shadow on the line of v plus a perpendicular piece")}
  <p>Why this formula? The projection must be a multiple \(c\vec v\), and the leftover \(\vec u-c\vec v\) must be orthogonal to \(\vec v\): \((\vec u-c\vec v)\cdot\vec v=0\) gives \(c=\frac{\vec u\cdot\vec v}{\vec v\cdot\vec v}\). Only the <em>direction</em> of \(\vec v\) matters — replacing \(\vec v\) by \(5\vec v\) gives the same projection.</p>
  ${theorem("orthogonal decomposition", S`\(\vec u=\operatorname{proj}_{\vec v}\vec u+\operatorname{perp}_{\vec v}\vec u\), the first part parallel to \(\vec v\) and the second orthogonal to it; this split is unique. Moreover \(\operatorname{proj}_{\vec v}\vec u\) is the point of the line \(\{t\vec v\}\) closest to \(\vec u\).`)}`),

  section("📌 Projection onto a plane, and distances", S`
  <p>For a plane \(P\) through the origin with normal \(\vec n\), remove the normal part: \[\operatorname{proj}_P\vec x=\vec x-\operatorname{proj}_{\vec n}\vec x=\operatorname{perp}_{\vec n}\vec x.\] (If you know two <em>orthogonal</em> directions \(\vec u\perp\vec v\) in \(P\), you can instead add \(\operatorname{proj}_{\vec u}\vec x+\operatorname{proj}_{\vec v}\vec x\) — chapter 5 explains why orthogonality is essential there.)</p>
  ${theorem("distances", S`<strong>Point to line</strong> \(\vec x=\vec p+t\vec d\): the distance from \(Q\) is \(\|\operatorname{perp}_{\vec d}\overrightarrow{PQ}\|\), and the closest point is \(\vec p+\operatorname{proj}_{\vec d}\overrightarrow{PQ}\). <strong>Point to plane</strong> \(\vec n\cdot\vec x=d\): the distance from \(Q\) is \(\dfrac{|\vec n\cdot\vec q-d|}{\|\vec n\|}\).`, S`For the plane, pick any point \(P\) on it. The shortest path from \(Q\) runs along the normal, so the distance is \(\|\operatorname{proj}_{\vec n}\overrightarrow{PQ}\|=\frac{|\vec n\cdot(\vec q-\vec p)|}{\|\vec n\|}=\frac{|\vec n\cdot\vec q-d|}{\|\vec n\|}\) because \(\vec n\cdot\vec p=d\).`)}
  ${vfig(scene3(5, { polys: [patch3([2, 2, 1], [1, 0, 0], [0, 1, -0.4], 1.8, "#ede9fe", "violet", 0.8)], arrows: [a3([2.6, 2.455, 0.818], [2.6, 3.4, 3.18], { color: "amber", w: 2.6, label: "distance", off: 18 })], segs: [seg3([[2, 2, 1], [2.6, 3.4, 3.18]], { color: "red", dash: true, w: 1.6 })], points: [pt3([2.6, 3.4, 3.18], "Q", { color: "blue" }), pt3([2, 2, 1], "P", { color: "black" })] }), "the distance from Q to the plane is the length of the normal part of PQ")}
  ${keyIdea(S`Distance problems are projection problems: split the vector from a known point to \(Q\) into a part you can travel for free (along the line or plane) and a perpendicular part — its length is the distance.`)}`),

  section("📌 Explore", S`<p>Move \(\vec u\) and turn the line of \(\vec v\). The green projection slides along the line; the amber perpendicular always meets it at a right angle. Make the angle obtuse and watch the projection point backwards. Then switch to a plane in \(\mathbb R^3\).</p>`),
  widget("laProj", { init: { mode: "vector" } }),

  section("📌 Pitfalls", S`
  ${watchOut([
    "Divide by v · v (= ‖v‖²), not by ‖v‖, when you want the projection vector.",
    "proj_v u and proj_u v are different vectors in general.",
    "Check your perp: it must have dot product 0 with v.",
    "Adding projections onto two directions of a plane only works if those directions are orthogonal.",
    "Distance to a plane needs the absolute value |n · q − d|.",
  ])}`),

  examples([
    ["Projection and perpendicular", S`Find \(\operatorname{proj}_{\vec v}\vec u\) and \(\operatorname{perp}_{\vec v}\vec u\) for \(\vec u=(5,-1,2)\), \(\vec v=(1,2,2)\).`,
      [S`\(\vec u\cdot\vec v=5-2+4=7\), \(\vec v\cdot\vec v=9\).`, S`\(\operatorname{proj}=\tfrac79(1,2,2)=\left(\tfrac79,\tfrac{14}9,\tfrac{14}9\right)\).`, S`\(\operatorname{perp}=\vec u-\operatorname{proj}=\left(\tfrac{38}9,-\tfrac{23}9,\tfrac49\right)\). Check: \(\tfrac{38-46+8}{9}=0\) ✓.`],
      S`\(\left(\tfrac79,\tfrac{14}9,\tfrac{14}9\right)\) and \(\left(\tfrac{38}9,-\tfrac{23}9,\tfrac49\right)\)`],
    ["Splitting a force", S`A force \(\vec F=(10,4)\) N acts on a cart that can only move along \(\vec d=(4,3)\). Split \(\vec F\) into the useful part along \(\vec d\) and the part perpendicular to it.`,
      [S`\(\vec F\cdot\vec d=40+12=52\), \(\vec d\cdot\vec d=25\).`, S`Along: \(\tfrac{52}{25}(4,3)=(8.32,6.24)\). Perpendicular: \((10,4)-(8.32,6.24)=(1.68,-2.24)\).`],
      S`\((8.32,6.24)\) N along the track, \((1.68,-2.24)\) N into it`,
      vfig({ view: { xmin: -0.6, xmax: 11, ymin: -2.8, ymax: 7 }, grid: false, width: 380, segs: [{ pts: [[-0.6, -0.45], [10.4, 7.8]], color: "gray", dash: true }], arrows: [{ from: [0, 0], to: [10, 4], vl: "F", off: 16 }, { from: [0, 0], to: [8.32, 6.24], color: "green", w: 3.6, label: "along", off: -16 }, { from: [8.32, 6.24], to: [10, 4], color: "amber", label: "perp", off: -16 }] })],
    ["Distance from a point to a line", S`Find the distance from \(Q(3,1,4)\) to the line \(\vec x=(1,0,1)+t(2,1,2)\), and the closest point.`,
      [S`\(\overrightarrow{PQ}=(2,1,3)\); \(\overrightarrow{PQ}\cdot\vec d=4+1+6=11\), \(\vec d\cdot\vec d=9\).`, S`\(\operatorname{perp}=(2,1,3)-\tfrac{11}9(2,1,2)=\left(-\tfrac49,-\tfrac29,\tfrac59\right)\), length \(\tfrac{\sqrt{45}}9=\tfrac{\sqrt5}3\).`, S`Closest point: \(\vec p+\tfrac{11}9\vec d=\left(\tfrac{31}9,\tfrac{11}9,\tfrac{31}9\right)\).`],
      S`distance \(\tfrac{\sqrt5}3\approx0.745\)`],
    ["Distance from a point to a plane", S`Find the distance from \(Q(2,-1,5)\) to \(2x_1-x_2+2x_3=4\).`,
      [S`\(\vec n\cdot\vec q=4+1+10=15\); \(\|\vec n\|=3\).`, S`\(\dfrac{|15-4|}{3}\).`],
      S`\(\tfrac{11}3\approx3.67\)`],
    ["Projecting onto a plane", S`Project \(\vec x=(3,0,-6)\) onto the plane \(x_1+x_2+x_3=0\).`,
      [S`\(\vec n=(1,1,1)\): \(\operatorname{proj}_{\vec n}\vec x=\tfrac{3+0-6}{3}(1,1,1)=(-1,-1,-1)\).`, S`\(\operatorname{proj}_P\vec x=(3,0,-6)-(-1,-1,-1)\). Check: \(4+1-5=0\), so it lies in the plane ✓.`],
      S`\((4,1,-5)\)`],
  ]),

  practice([
    q("projection", S`Find \(\operatorname{proj}_{(1,1)}(2,3)\).`, vec(2.5, 2.5),
      "(u·v / v·v) v.", [S`\(\tfrac{5}{2}(1,1)\).`], S`\((2.5,2.5)\)`),
    q("the scalar", S`\(\operatorname{proj}_{\vec v}\vec u=k\vec v\) for \(\vec u=(1,4,2)\), \(\vec v=(2,0,1)\). Find \(k\).`, num(0.8),
      "k = u·v / v·v.", [S`\(\tfrac{2+0+2}{5}\).`], S`\(0.8\)`),
    q("perpendicular", S`Find \(\operatorname{perp}_{\vec v}\vec u\) for \(\vec u=(6,2)\), \(\vec v=(3,4)\).`, vecT(0.005, 2.88, -2.16),
      "u minus its projection.", [S`\(\operatorname{proj}=\tfrac{26}{25}(3,4)=(3.12,4.16)\).`], S`\((2.88,-2.16)\)`),
    q("point to plane", S`Distance from \((1,2,3)\) to \(2x_1+2x_2-x_3=12\)?`, num(3),
      "|n·q − d| / ‖n‖.", [S`\(\tfrac{|2+4-3-12|}{3}\).`], S`\(3\)`),
    q("origin to plane", S`Distance from the origin to \(3x_1-4x_2=10\) in \(\mathbb R^3\)?`, num(2),
      "q = 0, so the distance is |d| / ‖n‖.", [S`\(\tfrac{10}{5}\).`], S`\(2\)`),
  ]),

  ...hard([
    ["Why the projection is closest", S`Prove that \(\|\vec u-t\vec v\|\ge\|\operatorname{perp}_{\vec v}\vec u\|\) for every real \(t\), with equality only at \(t=\frac{\vec u\cdot\vec v}{\vec v\cdot\vec v}\).`,
      [S`Let \(c=\frac{\vec u\cdot\vec v}{\vec v\cdot\vec v}\). Write \(\vec u-t\vec v=(\vec u-c\vec v)+(c-t)\vec v=\operatorname{perp}_{\vec v}\vec u+(c-t)\vec v\).`, S`The two pieces are orthogonal, so by Pythagoras \(\|\vec u-t\vec v\|^2=\|\operatorname{perp}_{\vec v}\vec u\|^2+(c-t)^2\|\vec v\|^2\).`, S`The last term is \(\ge0\) and is 0 only when \(t=c\).`],
      S`the projection is the unique closest point of the line to \(\vec u\)`],
    ["Distance between skew lines", S`Find the distance between \(L_1:\ (1,0,0)+t(1,1,0)\) and \(L_2:\ (0,0,2)+s(0,1,1)\).`,
      [S`A vector orthogonal to both lines: \(\vec n=(1,1,0)\times(0,1,1)=(1,-1,1)\).`, S`\(\overrightarrow{PQ}=(0,0,2)-(1,0,0)=(-1,0,2)\) joins a point of each line.`, S`The shortest segment is parallel to \(\vec n\), so the distance is \(\|\operatorname{proj}_{\vec n}\overrightarrow{PQ}\|=\frac{|-1-0+2|}{\sqrt3}\).`],
      S`\(\tfrac1{\sqrt3}\approx0.577\)`,
      vfig(scene3(4, { segs: [line3([1, 0, 0], [1, 1, 0], -1, 2.5, "violet"), line3([0, 0, 2], [0, 1, 1], -1, 2, "blue")] }))],
  ], [
    q("hard", S`Find the point of the line \(\vec x=t(1,2,2)\) closest to \(Q(9,0,0)\).`, vec(1, 2, 2),
      "Project q onto the direction.", [S`\(\tfrac{9}{9}(1,2,2)\).`], S`\((1,2,2)\)`),
    q("hard", S`Find the distance between the parallel planes \(2x_1-x_2+2x_3=1\) and \(2x_1-x_2+2x_3=13\).`, num(4),
      "Take a point on one and measure to the other.", [S`\(\tfrac{|13-1|}{3}\).`], S`\(4\)`),
    q("hard", S`Reflect \(Q(5,0,1)\) in the plane \(x_1+x_3=2\).`, vec(1, 0, -3),
      "Move twice the normal part.", [S`\(\vec n\cdot\vec q-d=4\), \(\vec n\cdot\vec n=2\): \(\operatorname{proj}=2(1,0,1)\).`, S`\(\vec q-2\cdot2(1,0,1)\).`], S`\((1,0,-3)\)`),
  ]),

  wrapUp({
    qas: [
      ["What is proj_v u, in words?", "The multiple of v that is the shadow of u on the line through v; what is left over is perpendicular to v."],
      ["Does the length of v matter?", "No. Any nonzero multiple of v gives the same projection; only the line matters."],
      ["How do I find the distance from a point to a plane?", "|n · q − d| / ‖n‖, the length of the normal part of PQ."],
      ["How do I find the closest point on a line?", "p + proj_d(PQ)."],
      ["Where do projections appear later?", "Orthogonal bases, the Gram–Schmidt process and least-squares solutions all project onto subspaces."],
    ],
    summary: [
      "proj_v u = (u·v / v·v) v; perp_v u = u − proj_v u ⊥ v.",
      "The projection is the closest point of the line.",
      "Onto a plane through O: x − proj_n x.",
      "Point–line: ‖perp_d PQ‖; point–plane: |n · q − d| / ‖n‖.",
    ],
    next: "Chapter 2 turns to systems of linear equations — the tool hiding inside every 'is it a combination?' question of this chapter.",
  }),
];
