// MPM2D Worksheet 2.6 — Problems Involving Lines & Line Segments (teacher edition)
import { planeT, F, pt, std, gridT, poly } from "./figT.mjs";

const circ = (r) => [{ f: (x) => Math.sqrt(Math.max(0, r * r - x * x)), a: -r, b: r, color: "violet" }, { f: (x) => -Math.sqrt(Math.max(0, r * r - x * x)), a: -r, b: r, color: "violet" }];

const EXAMPLES = [
  { title: "Distance from a point to a line", q: String.raw`Find the shortest distance from $P(8,1)$ to $y=3x-3$.`,
    fig: planeT({ view: { xmin: -1, xmax: 10, ymin: -2, ymax: 8 }, lines: [{ m: 3, b: -3, color: "violet" }], segs: [{ pts: [[8, 1], [2, 3]], color: "red" }], points: [{ x: 8, y: 1, label: "P(8, 1)", color: "red" }, { x: 2, y: 3, label: "F(2, 3)", color: "green" }], step: { x: 1, y: 1 } }, 4.5),
    steps: [String.raw`Perpendicular slope $-\frac13$ through $P$: $y=-\frac13x+\frac{11}{3}$.`, String.raw`$3x-3=-\frac13x+\frac{11}{3}\Rightarrow10x=20\Rightarrow x=2$, $y=3$.`, String.raw`$PF=\sqrt{36+4}=\sqrt{40}\approx6.32$.`], ans: String.raw`$\sqrt{40}\approx6.32$` },
  { title: "A line in standard form", q: String.raw`Find the distance from $(-3,5)$ to $2x+y=4$.`,
    steps: [String.raw`$y=-2x+4$; perpendicular slope $\frac12$: $y=\frac12x+\frac{13}{2}$.`, String.raw`$-2x+4=\frac12x+\frac{13}{2}\Rightarrow x=-1$, $y=6$.`, String.raw`$\sqrt{4+1}=\sqrt5\approx2.24$.`], ans: String.raw`$\sqrt5\approx2.24$` },
  { title: "A horizontal line", q: String.raw`Find the distance from $(4,-6)$ to $y=3$.`,
    steps: ["The perpendicular is vertical.", String.raw`$3-(-6)=9$.`], ans: "$9$" },
  { title: "Equidistant point on the y-axis", q: String.raw`Find the point on the $y$-axis equidistant from $A(2,1)$ and $B(6,5)$.`,
    steps: [String.raw`Right bisector: midpoint $(4,3)$, slope $-1$: $y=-x+7$.`, String.raw`$x=0$: $(0,7)$. Check: $4+36=36+4$ ✓`], ans: "$(0,7)$" },
  { title: "A water station", q: String.raw`A water station must be the same distance from towns $A(0,0)$, $B(8,0)$ and $C(2,6)$. Where should it go?`,
    steps: [String.raw`Right bisector of $AB$: $x=4$.`, String.raw`Right bisector of $AC$: midpoint $(1,3)$, slope $-\frac13$: at $x=4$, $y=2$.`, String.raw`Check: squared distances $20$, $20$, $20$ ✓`], ans: "$(4,2)$ (the circumcentre)" },
  { title: "Chord length", q: String.raw`Find the length of the chord of $x^2+y^2=169$ on the line $x=5$.`,
    steps: [String.raw`$25+y^2=169\Rightarrow y=\pm12$.`], ans: "$24$" },
  { title: "Distance from the centre to a chord", q: String.raw`$(-6,8)$ and $(8,6)$ are on $x^2+y^2=100$. How far is the chord joining them from the centre?`,
    fig: planeT({ view: { xmin: -11, xmax: 11, ymin: -11, ymax: 11 }, curves: circ(10), segs: [{ pts: [[-6, 8], [8, 6]], color: "red" }, { pts: [[0, 0], [1, 7]], color: "green" }], points: [{ x: 1, y: 7, label: "M(1, 7)", color: "green" }], step: { x: 2, y: 2 } }, 4.5),
    steps: [String.raw`Midpoint $M(1,7)$; $OM$ has slope $7$, the chord $-\frac17$: perpendicular.`, String.raw`Distance $OM=\sqrt{1+49}=\sqrt{50}\approx7.07$.`], ans: String.raw`$\sqrt{50}\approx7.07$` },
  { title: "The shortest pipe", q: String.raw`A well is at $W(1,6)$ and a canal follows $y=\frac12x-2$ (units of 100 m). How long is the shortest pipe?`,
    steps: [String.raw`Perpendicular: $y=-2x+8$.`, String.raw`$\frac12x-2=-2x+8\Rightarrow x=4$, $y=0$.`, String.raw`$\sqrt{9+36}=\sqrt{45}\approx6.71$ units.`], ans: "about 671 m" },
  { title: "Area using a height", q: String.raw`Find the area of $\triangle ABC$ with $A(0,0)$, $B(6,2)$, $C(1,7)$ using the distance from $C$ to $AB$.`,
    steps: [String.raw`$AB$: $y=\frac13x$, length $\sqrt{40}$.`, String.raw`Perpendicular through $C$: $y=-3x+10$; meets $AB$ at $(3,1)$.`, String.raw`Height $\sqrt{4+36}=\sqrt{40}$; area $\frac12\sqrt{40}\sqrt{40}=20$.`], ans: "$20$" },
];

const PROBLEMS = [
  { level: 1, q: String.raw`Find the distance from $(-5,2)$ to $x=3$.`, recap: "(−5, 2) to x = 3.", ans: "$8$" },
  { level: 1, q: String.raw`Find the foot of the perpendicular from $(0,0)$ to $y=-x+4$.`, recap: "Foot from the origin.", ans: "$(2,2)$" },
  { level: 1, q: "Explain why the perpendicular gives the shortest distance from a point to a line.", recap: "Why perpendicular?", ans: "any other segment is the hypotenuse of a right triangle with the perpendicular as a leg" },
  { level: 2, q: String.raw`Find the distance from $(5,-1)$ to $y=2x-1$.`, recap: "(5, −1) to y = 2x − 1.", ans: String.raw`foot $(1,1)$; $\sqrt{20}\approx4.47$` },
  { level: 2, q: String.raw`Find the distance from $(-2,-4)$ to $x+y=4$.`, recap: "(−2, −4) to x + y = 4.", ans: String.raw`foot $(3,1)$; $\sqrt{50}\approx7.07$` },
  { level: 2, q: String.raw`Find the point on the $x$-axis equidistant from $(-3,2)$ and $(5,6)$.`, recap: "Equidistant on the x-axis.", ans: "$(3,0)$" },
  { level: 2, q: String.raw`Find the length of the chord of $x^2+y^2=40$ on $y=2$.`, recap: "Chord on y = 2.", ans: "$12$" },
  { level: 2, q: String.raw`A fire station is at $(2,3)$ and a hospital at $(8,-1)$. Find the equation of the line of points equally close to both.`, recap: "Boundary line.", ans: String.raw`$y=\frac32x-\frac{13}{2}$` },
  { level: 3, space: 5, q: String.raw`Find the centre and radius of the circle through $A(-2,0)$, $B(4,0)$, $C(0,4)$.`, recap: "Circle through three points.", ans: String.raw`centre $(1,1)$, $r=\sqrt{10}$` },
  { level: 3, space: 5, q: String.raw`Find the area of $\triangle ABC$ with $A(0,0)$, $B(8,4)$, $C(2,6)$ using a height.`, recap: "Area with a height.", ans: String.raw`foot $(4,2)$; height $\sqrt{20}$, base $\sqrt{80}$; area $20$` },
  { level: 3, space: 5, q: String.raw`Find the point on $y=x+1$ closest to $(5,0)$, and the distance.`, recap: "Closest point.", ans: String.raw`$(2,3)$; $\sqrt{18}\approx4.24$` },
  { level: 3, space: 5, q: String.raw`Find the distance between the parallel lines $y=2x+1$ and $y=2x-9$.`, recap: "Parallel lines.", ans: String.raw`from $(0,1)$: foot $(4,-1)$; $\sqrt{20}\approx4.47$` },
  { level: 3, space: 5, q: String.raw`Show that $(-5,5)$ and $(7,1)$ lie on $x^2+y^2=50$, that the right bisector of the chord passes through the centre, and find the distance from the centre to the chord.`, recap: "Chord of x² + y² = 50.", ans: String.raw`both give 50; bisector $y=3x$; distance $\sqrt{10}$` },
];

// ---- figures added to examples and problems
const ex = EXAMPLES, pr = PROBLEMS;
ex[1].fig = F({ view: { xmin: -5, xmax: 4, ymin: -2, ymax: 8 }, lines: [{ m: -2, b: 4, color: "violet" }], segs: [{ pts: [[-3, 5], [-1, 6]], color: "red" }], points: [pt(-3, 5, "P", "red"), pt(-1, 6, "F", "green")] });
ex[2].fig = F({ view: { xmin: -2, xmax: 8, ymin: -8, ymax: 5 }, lines: [{ m: 0, b: 3, color: "violet" }], segs: [{ pts: [[4, -6], [4, 3]], color: "red" }], points: [pt(4, -6, "P", "red"), pt(4, 3, "F", "green")] });
ex[3].fig = F({ view: { xmin: -2, xmax: 9, ymin: -1, ymax: 9 }, lines: [{ m: -1, b: 7, color: "green" }], segs: [{ pts: [[2, 1], [6, 5]], color: "gray" }], points: [pt(2, 1, "A"), pt(6, 5, "B"), pt(0, 7, null, "red")] });
ex[4].fig = F({ view: { xmin: -2, xmax: 10, ymin: -2, ymax: 8 }, segs: [poly([[0, 0], [8, 0], [2, 6]], "gray")], vlines: [{ x: 4, color: "green", dash: true }], points: [pt(0, 0, "A"), pt(8, 0, "B"), pt(2, 6, "C"), pt(4, 2, null, "red")] });
ex[5].fig = F({ view: { xmin: -15, xmax: 15, ymin: -15, ymax: 15 }, curves: circ(13), vlines: [{ x: 5, color: "gray", dash: true }], segs: [{ pts: [[5, 12], [5, -12]], color: "red" }], points: [pt(5, 12, null, "red"), pt(5, -12, null, "red")] });
ex[7].fig = F({ view: { xmin: -1, xmax: 9, ymin: -3, ymax: 8 }, lines: [{ m: 0.5, b: -2, color: "blue", label: "canal", lx: 6.5 }], segs: [{ pts: [[1, 6], [4, 0]], color: "red" }], points: [pt(1, 6, "W", "green"), pt(4, 0, null, "red")] });
ex[8].fig = F({ view: { xmin: -1, xmax: 8, ymin: -1, ymax: 8 }, segs: [poly([[0, 0], [6, 2], [1, 7]], "gray"), { pts: [[1, 7], [3, 1]], color: "red" }], points: [pt(0, 0, "A"), pt(6, 2, "B"), pt(1, 7, "C"), pt(3, 1, null, "red")] });
pr[0].fig = F({ view: { xmin: -7, xmax: 5, ymin: -2, ymax: 5 }, vlines: [{ x: 3, color: "violet" }], points: [pt(-5, 2, null, "red")] });
pr[1].fig = F({ view: { xmin: -2, xmax: 6, ymin: -2, ymax: 6 }, lines: [{ m: -1, b: 4, color: "violet" }], points: [pt(0, 0, "O", "red")] });
pr[3].fig = F({ view: { xmin: -2, xmax: 7, ymin: -3, ymax: 7 }, lines: [{ m: 2, b: -1, color: "violet" }], points: [pt(5, -1, null, "red")] });
pr[4].fig = F({ view: { xmin: -4, xmax: 7, ymin: -6, ymax: 6 }, lines: [{ m: -1, b: 4, color: "violet" }], points: [pt(-2, -4, null, "red")] });
pr[5].fig = F({ view: { xmin: -5, xmax: 7, ymin: -1, ymax: 8 }, points: [pt(-3, 2), pt(5, 6)] });
pr[6].fig = F({ view: { xmin: -8, xmax: 8, ymin: -8, ymax: 8 }, curves: circ(Math.sqrt(40)), lines: [{ m: 0, b: 2, color: "gray", dash: true }] });
pr[7].fig = F({ view: { xmin: -1, xmax: 10, ymin: -3, ymax: 5 }, points: [pt(2, 3, "F"), pt(8, -1, "H", "red")] });
pr[8].fig = F({ view: { xmin: -4, xmax: 6, ymin: -2, ymax: 6 }, points: [pt(-2, 0, "A"), pt(4, 0, "B"), pt(0, 4, "C")] });
pr[9].fig = F({ view: { xmin: -1, xmax: 10, ymin: -1, ymax: 8 }, segs: [poly([[0, 0], [8, 4], [2, 6]], "gray")], points: [pt(0, 0, "A"), pt(8, 4, "B"), pt(2, 6, "C")] });
pr[10].fig = F({ view: { xmin: -3, xmax: 7, ymin: -2, ymax: 7 }, lines: [{ m: 1, b: 1, color: "violet" }], points: [pt(5, 0, null, "red")] });
pr[11].fig = F({ view: { xmin: -2, xmax: 8, ymin: -10, ymax: 6 }, lines: [{ m: 2, b: 1, color: "blue" }, { m: 2, b: -9, color: "red" }], step: { x: 1, y: 2 } });
pr[12].fig = F({ view: { xmin: -9, xmax: 9, ymin: -9, ymax: 9 }, curves: circ(Math.sqrt(50)), segs: [{ pts: [[-5, 5], [7, 1]], color: "red" }], points: [pt(-5, 5, null, "red"), pt(7, 1, null, "red")] });
// ---- end figures

export const WS = {
  code: "2.6",
  title: "Problems Involving Lines & Line Segments",
  bigideas: String.raw`Multi-step problems combine slope, midpoint, length, equations of lines and intersections. The shortest distance from a point to a line is measured along the perpendicular: write the perpendicular, intersect it with the line, then find the length. Points equidistant from two points lie on the right bisector, and the right bisector of any chord passes through the centre of the circle.`,
  goals: ["Plan multi-step problems.", "Find the distance from a point to a line.", "Use right bisectors for equidistant points.", "Solve chord problems."],
  curriculum: "AG3",
  vocab: [["Foot of the perpendicular", "where the perpendicular meets the line"], ["Equidistant", "the same distance from both"], ["Chord", "segment joining two points of a circle"]],
  hook: String.raw`A hiker at $(2,7)$ is lost near a straight road $y=x-1$. Ask: “Which way should she walk to reach the road fastest?” Students argue for straight down, straight across, or at right angles to the road.`,
  concepts: [
    ["1. Four steps", String.raw`Perpendicular slope $\to$ perpendicular line through $P$ $\to$ intersection $F$ $\to$ length $PF$.
${planeT({ view: { xmin: -1, xmax: 9, ymin: -2, ymax: 9 }, lines: [{ m: 1, b: -1, color: "violet" }], segs: [{ pts: [[2, 7], [5, 4]], color: "red" }], points: [{ x: 2, y: 7, label: "P", color: "red" }, { x: 5, y: 4, label: "F", color: "green" }], step: { x: 1, y: 1 } }, 4.5)}`],
    ["2. Equidistant points", String.raw`On the right bisector; three points $\to$ circumcentre.`],
    ["3. Chords", String.raw`Right bisector of a chord passes through the centre; centre, midpoint and endpoint form a right triangle.`],
  ],
  tips: ["Sketch before calculating.", "Solve the intersection exactly.", "Horizontal/vertical lines: subtract.", "The formula |Ax₀ + By₀ − C| / √(A² + B²) is a check only.", "Interpret answers with units."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
