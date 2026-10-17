// MPM2D Worksheet 2.4 — Medians, Right Bisectors & Altitudes (teacher edition)
import { planeT, F, pt, std, gridT, circ, poly } from "./figT.mjs";

const TRI = [[-4, -2], [4, 6], [8, -2], [-4, -2]];
const tp = [{ x: -4, y: -2, label: "P(−4, −2)", color: "blue" }, { x: 4, y: 6, label: "Q(4, 6)", color: "blue" }, { x: 8, y: -2, label: "R(8, −2)", color: "blue" }];

const EXAMPLES = [
  { title: "Median from P", q: String.raw`For $\triangle PQR$ with $P(-4,-2)$, $Q(4,6)$, $R(8,-2)$, find the median from $P$.`,
    fig: planeT({ view: { xmin: -6, xmax: 10, ymin: -4, ymax: 8 }, segs: [{ pts: TRI, color: "gray" }, { pts: [[-4, -2], [6, 2]], color: "blue" }], points: [...tp, { x: 6, y: 2, label: "(6, 2)", color: "green" }], step: { x: 1, y: 1 } }, 5),
    steps: [String.raw`Midpoint of $QR$: $(6,2)$.`, String.raw`Slope: $\frac{2-(-2)}{6-(-4)}=\frac25$.`, String.raw`$y+2=\frac25(x+4)\Rightarrow2x-5y=2$.`], ans: "$2x-5y=2$" },
  { title: "Median from Q", q: "For the same triangle, find the median from Q.",
    steps: [String.raw`Midpoint of $RP$: $(2,-2)$.`, String.raw`Slope: $\frac{-2-6}{2-4}=4$.`, String.raw`$y-6=4(x-4)\Rightarrow y=4x-10$.`], ans: "$y=4x-10$" },
  { title: "Centroid", q: "Find the centroid of the triangle and check it with the average of the vertices.",
    steps: [String.raw`Solve $2x-5y=2$ and $y=4x-10$: $2x-20x+50=2\Rightarrow x=\frac83$, $y=\frac23$.`, String.raw`Average: $\left(\frac{-4+4+8}{3},\frac{-2+6-2}{3}\right)=\left(\frac83,\frac23\right)$ ✓`], ans: String.raw`$\left(\frac83,\frac23\right)$` },
  { title: "Right bisector of a horizontal side", q: "Find the right bisector of RP.",
    steps: [String.raw`$RP$ is horizontal ($y=-2$), midpoint $(2,-2)$.`, "A perpendicular to a horizontal line is vertical."], ans: "$x=2$" },
  { title: "Right bisector of PQ", q: "Find the right bisector of PQ.",
    steps: [String.raw`Midpoint $(0,2)$; slope of $PQ=1$; perpendicular slope $-1$.`], ans: "$y=-x+2$" },
  { title: "Circumcentre", q: "Find the circumcentre and verify it is equidistant from P, Q and R.",
    fig: planeT({ view: { xmin: -6, xmax: 10, ymin: -4, ymax: 8 }, segs: [{ pts: TRI, color: "gray" }], vlines: [{ x: 2, color: "green" }], lines: [{ m: -1, b: 2, color: "green" }], points: [...tp, { x: 2, y: 0, label: "(2, 0)", color: "red" }], step: { x: 1, y: 1 } }, 5),
    steps: [String.raw`$x=2$ in $y=-x+2$: $y=0$.`, String.raw`Squared distances: $36+4$, $4+36$, $36+4$ — all $40$.`], ans: "$(2,0)$; radius $\\sqrt{40}$" },
  { title: "Altitude from Q", q: "Find the altitude from Q.",
    steps: [String.raw`$RP$ is horizontal, so the altitude is vertical through $Q(4,6)$.`], ans: "$x=4$" },
  { title: "Orthocentre", q: "Find the orthocentre using the altitudes from Q and R.",
    steps: [String.raw`Altitude from $R$: perpendicular to $PQ$ (slope 1): slope $-1$ through $(8,-2)$: $y=-x+6$.`, String.raw`With $x=4$: $y=2$.`, String.raw`Check with the altitude from $P$ (slope $\frac12$): $y+2=\frac12(4+4)=4$ ✓`], ans: "$(4,2)$" },
  { title: "Three special points in a line", q: String.raw`Show that the circumcentre $(2,0)$, centroid $\left(\frac83,\frac23\right)$ and orthocentre $(4,2)$ are collinear.`,
    steps: [String.raw`Slope circumcentre → orthocentre: $\frac{2}{2}=1$.`, String.raw`Slope circumcentre → centroid: $\frac{2/3}{2/3}=1$.`, "Same slope through a common point: collinear (this line is called the Euler line)."], ans: "collinear on $y=x-2$" },
];

const PROBLEMS = [
  { level: 1, q: String.raw`For $\triangle ABC$ with $A(-2,-3)$, $B(6,1)$, $C(0,5)$, find the midpoint of $BC$.`, recap: "Midpoint of BC.", ans: "$(3,3)$" },
  { level: 1, q: String.raw`For the same triangle, find the slope of the altitude to $AB$.`, recap: "Altitude slope to AB.", ans: String.raw`$m_{AB}=\frac12$, so $-2$` },
  { level: 1, q: "Explain the difference between a median and an altitude.", recap: "Median vs altitude.", ans: "median: vertex to midpoint of opposite side; altitude: vertex, perpendicular to opposite side" },
  { level: 2, q: "Find the equation of the median from A.", recap: "Median from A.", ans: String.raw`through $(3,3)$, slope $\frac65$: $6x-5y=3$` },
  { level: 2, q: "Find the equation of the right bisector of AB.", recap: "Right bisector of AB.", ans: String.raw`midpoint $(2,-1)$, slope $-2$: $y=-2x+3$` },
  { level: 2, q: "Find the equation of the altitude from C.", recap: "Altitude from C.", ans: "$y=-2x+5$" },
  { level: 2, q: "Find the equation of the altitude from A.", recap: "Altitude from A.", ans: String.raw`$m_{BC}=-\frac23$, so slope $\frac32$: $y=\frac32x$` },
  { level: 2, q: "Find the centroid of the triangle.", recap: "Centroid.", ans: String.raw`$\left(\frac43,1\right)$` },
  { level: 3, space: 5, q: "Find the orthocentre of triangle ABC and check it with the third altitude.", recap: "Orthocentre.", ans: String.raw`$\left(\frac{10}{7},\frac{15}{7}\right)$; altitude from B: $y-1=-\frac14(x-6)$ ✓` },
  { level: 3, space: 5, q: "Find the circumcentre of triangle ABC and verify that it is equidistant from A and C.", recap: "Circumcentre.", ans: String.raw`$\left(\frac97,\frac37\right)$; both squared distances $\frac{1105}{49}$` },
  { level: 3, space: 5, q: "Find the length of the median from C, exactly and to two decimals.", recap: "Median length.", ans: String.raw`to $(2,-1)$: $\sqrt{40}\approx6.32$` },
  { level: 3, space: 5, q: String.raw`Triangle $DEF$ has $D(-3,0)$, $E(3,0)$, $F(0,5)$. Show that the median, altitude and right bisector from $F$ (to $DE$) are the same line, and explain why.`, recap: "Isosceles triangle.", ans: "all are x = 0; DF = EF = √34, so the triangle is isosceles" },
  { level: 3, space: 5, q: String.raw`For right triangle $O(0,0)$, $A(6,0)$, $B(0,8)$, show that the circumcentre is the midpoint of the hypotenuse and the orthocentre is $O$.`, recap: "Right triangle centres.", ans: "right bisectors x = 3 and y = 4 meet at (3, 4), the midpoint of AB; the legs are altitudes meeting at O" },
];

// ---- figures added to examples and problems
const ex = EXAMPLES, pr = PROBLEMS;
const VW = { xmin: -6, xmax: 10, ymin: -4, ymax: 8 };
const base = [poly(TRI.slice(0, 3), "gray")];
ex[1].fig = F({ view: VW, segs: [...base, { pts: [[4, 6], [2, -2]], color: "blue" }], points: [...tp, pt(2, -2, null, "green")] });
ex[2].fig = F({ view: VW, segs: [...base, { pts: [[-4, -2], [6, 2]], color: "blue" }, { pts: [[4, 6], [2, -2]], color: "blue" }, { pts: [[8, -2], [0, 2]], color: "blue" }], points: [...tp, { x: 8 / 3, y: 2 / 3, label: "(8/3, 2/3)", color: "red" }] });
ex[3].fig = F({ view: VW, segs: base, vlines: [{ x: 2, color: "green" }], points: [...tp, pt(2, -2, null, "green")] });
ex[4].fig = F({ view: VW, segs: base, lines: [{ m: -1, b: 2, color: "green" }], points: [...tp, pt(0, 2, null, "green")] });
ex[6].fig = F({ view: VW, segs: [...base, { pts: [[4, 6], [4, -2]], color: "red" }], points: tp });
ex[7].fig = F({ view: VW, segs: base, vlines: [{ x: 4, color: "red" }], lines: [{ m: -1, b: 6, color: "red" }, { m: 0.5, b: 0, color: "red", dash: true }], points: [...tp, pt(4, 2, null, "green")] });
ex[8].fig = F({ view: VW, segs: base, lines: [{ m: 1, b: -2, color: "gray", dash: true, label: "Euler line", lx: 6 }], points: [pt(2, 0, "O", "green"), { x: 8 / 3, y: 2 / 3, label: "G", color: "blue" }, pt(4, 2, "H", "red")] });
const tri = F({ view: { xmin: -4, xmax: 8, ymin: -5, ymax: 7 }, segs: [poly([[-2, -3], [6, 1], [0, 5]], "gray")], points: [pt(-2, -3, "A"), pt(6, 1, "B"), pt(0, 5, "C")] });
for (const i of [0, 3, 4, 5, 6, 7, 8, 9, 10]) pr[i].fig = tri;
pr[11].fig = F({ view: { xmin: -5, xmax: 5, ymin: -2, ymax: 7 }, segs: [poly([[-3, 0], [3, 0], [0, 5]], "gray")], points: [pt(-3, 0, "D"), pt(3, 0, "E"), pt(0, 5, "F")] });
pr[12].fig = F({ view: { xmin: -1, xmax: 8, ymin: -1, ymax: 9 }, segs: [poly([[0, 0], [6, 0], [0, 8]], "gray")], points: [pt(0, 0, "O"), pt(6, 0, "A"), pt(0, 8, "B")] });
// ---- end figures

export const WS = {
  code: "2.4",
  title: "Medians, Right Bisectors & Altitudes",
  bigideas: String.raw`A median joins a vertex to the midpoint of the opposite side; a right bisector passes through a side's midpoint at right angles; an altitude passes through a vertex at right angles to the opposite side. Each equation comes from a point and a slope. The three lines of each kind meet at one point — centroid, circumcentre, orthocentre — found by solving a system of two of them.`,
  goals: ["Describe the three lines.", "Write each equation.", "Find centroid, circumcentre, orthocentre.", "Verify with the third line or distances."],
  curriculum: "AG3",
  vocab: [["Median", "vertex to midpoint"], ["Right bisector", "midpoint, perpendicular"], ["Altitude", "vertex, perpendicular"], ["Centroid", "average of the vertices"]],
  hook: String.raw`Cut a cardboard triangle and try to balance it on a pencil tip. Then draw the medians: the balance point is where they meet — the centroid.`,
  concepts: [
    ["1. Three recipes", String.raw`Median: vertex + midpoint. Right bisector: midpoint + perpendicular slope. Altitude: vertex + perpendicular slope.
${planeT({ view: { xmin: -6, xmax: 10, ymin: -4, ymax: 8 }, segs: [{ pts: TRI, color: "gray" }, { pts: [[-4, -2], [6, 2]], color: "blue" }, { pts: [[4, 6], [4, -2]], color: "red" }], vlines: [{ x: 2, color: "green", dash: true }], points: tp, step: { x: 1, y: 1 } }, 4.5, "Blue: a median. Red: an altitude. Green: a right bisector.")}`],
    ["2. Meeting points", String.raw`Solve two equations; the third line is a check. Centroid = average of the vertices.`],
    ["3. Special cases", String.raw`Horizontal side: perpendicular is vertical. Isosceles: lines from the apex coincide. Right triangle: circumcentre is the midpoint of the hypotenuse.`],
  ],
  tips: ["Always use the opposite side's slope.", "Altitude feet are usually not midpoints.", "Vertical lines: write x = k.", "Check meeting points with the third line.", "Fractions are expected — keep them exact."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
