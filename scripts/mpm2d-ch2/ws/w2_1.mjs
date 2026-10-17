// MPM2D Worksheet 2.1 — Midpoint of a Line Segment (teacher edition)
import { planeT, F, pt, std, gridT, circ, poly } from "./figT.mjs";

const EXAMPLES = [
  { title: "Midpoint with mixed signs", q: String.raw`Find the midpoint of $(-5,8)$ and $(9,-2)$.`,
    fig: planeT({ view: { xmin: -7, xmax: 11, ymin: -4, ymax: 10 }, segs: [{ pts: [[-5, 8], [9, -2]], color: "violet" }], points: [{ x: -5, y: 8, label: "(−5, 8)", color: "blue" }, { x: 9, y: -2, label: "(9, −2)", color: "red" }, { x: 2, y: 3, label: "M(2, 3)", color: "green" }], step: { x: 1, y: 1 } }, 5),
    steps: [String.raw`$x=\frac{-5+9}{2}=2$.`, String.raw`$y=\frac{8+(-2)}{2}=3$.`], ans: "$(2,3)$" },
  { title: "A fractional midpoint", q: String.raw`Find the midpoint of $(3,-7)$ and $(-4,2)$.`,
    steps: [String.raw`$x=\frac{3+(-4)}{2}=-\frac12$.`, String.raw`$y=\frac{-7+2}{2}=-\frac52$.`], ans: String.raw`$\left(-\frac12,-\frac52\right)$` },
  { title: "Missing endpoint", q: String.raw`$M(1,-2)$ is the midpoint of $AB$ with $A(-6,3)$. Find $B$.`,
    steps: [String.raw`$x_B=2(1)-(-6)=8$.`, String.raw`$y_B=2(-2)-3=-7$.`, String.raw`Check: $\left(\frac{-6+8}{2},\frac{3+(-7)}{2}\right)=(1,-2)$ ✓`], ans: "$B(8,-7)$" },
  { title: "A quarter of the way", q: String.raw`Find the point one quarter of the way from $A(-4,-6)$ to $B(8,2)$.`,
    steps: [String.raw`Midpoint of $AB$: $M(2,-2)$.`, String.raw`Midpoint of $AM$: $\left(\frac{-4+2}{2},\frac{-6+(-2)}{2}\right)=(-1,-4)$.`], ans: "$(-1,-4)$" },
  { title: "Centre and radius", q: String.raw`A diameter of a circle has endpoints $(-7,-1)$ and $(3,5)$. Find the centre and the radius.`,
    steps: [String.raw`Centre: $\left(\frac{-7+3}{2},\frac{-1+5}{2}\right)=(-2,2)$.`, String.raw`Radius: distance from $(-2,2)$ to $(3,5)$: $\sqrt{25+9}=\sqrt{34}\approx5.83$.`], ans: String.raw`centre $(-2,2)$, $r=\sqrt{34}$` },
  { title: "Is it the midpoint?", q: String.raw`Is $M(1,4)$ the midpoint of $(-3,7)$ and $(5,2)$?`,
    steps: [String.raw`Midpoint: $\left(\frac{-3+5}{2},\frac{7+2}{2}\right)=(1,4.5)$.`, String.raw`$4.5\ne4$.`], ans: "no — the midpoint is $(1,4.5)$" },
  { title: "Diagonals of a quadrilateral", q: String.raw`Do the diagonals of $ABCD$ with $A(-5,-1)$, $B(3,-3)$, $C(5,3)$, $D(-3,5)$ bisect each other?`,
    fig: planeT({ view: { xmin: -7, xmax: 7, ymin: -5, ymax: 7 }, segs: [{ pts: [[-5, -1], [3, -3], [5, 3], [-3, 5], [-5, -1]], color: "green" }, { pts: [[-5, -1], [5, 3]], color: "gray" }, { pts: [[3, -3], [-3, 5]], color: "gray" }], points: [{ x: 0, y: 1, label: "(0, 1)", color: "red" }], step: { x: 1, y: 1 } }, 5),
    steps: [String.raw`Midpoint of $AC$: $(0,1)$.`, String.raw`Midpoint of $BD$: $(0,1)$.`, "Same point: the diagonals bisect each other, so ABCD is a parallelogram."], ans: "yes" },
  { title: "Fourth vertex of a parallelogram", q: String.raw`$ABCD$ is a parallelogram with $A(-2,-3)$, $B(4,-1)$, $C(6,4)$. Find $D$.`,
    steps: [String.raw`The diagonals $AC$ and $BD$ share a midpoint: $\left(2,\frac12\right)$.`, String.raw`$D=2\left(2,\tfrac12\right)-B=(4-4,\ 1-(-1))=(0,2)$.`], ans: "$D(0,2)$" },
  { title: "Midpoints of all three sides", q: String.raw`Find the midpoints of the sides of $\triangle PQR$ with $P(-4,2)$, $Q(6,6)$, $R(2,-4)$.`,
    steps: [String.raw`$PQ$: $(1,4)$.`, String.raw`$QR$: $(4,1)$.`, String.raw`$RP$: $(-1,-1)$.`], ans: "$(1,4)$, $(4,1)$, $(-1,-1)$" },
];

const PROBLEMS = [
  { level: 1, q: String.raw`Find the midpoint of $(-6,-1)$ and $(4,7)$.`, recap: "(−6, −1) and (4, 7).", ans: "$(-1,3)$" },
  { level: 1, q: String.raw`Find the midpoint of $(2,-9)$ and $(-5,0)$.`, recap: "(2, −9) and (−5, 0).", ans: String.raw`$\left(-\frac32,-\frac92\right)$` },
  { level: 1, q: String.raw`$M(-2,5)$ is the midpoint of $AB$ with $A(3,1)$. Find $B$.`, recap: "Missing endpoint.", ans: "$B(-7,9)$" },
  { level: 2, q: String.raw`The endpoints of a diameter of a circle are $(-8,3)$ and $(4,-5)$. Find the centre.`, recap: "Centre from a diameter.", ans: "$(-2,-1)$" },
  { level: 2, q: String.raw`Show that the diagonals of $ABCD$ with $A(-4,0)$, $B(2,-3)$, $C(6,1)$, $D(0,4)$ bisect each other.`, recap: "Diagonals bisect?", ans: String.raw`both midpoints are $\left(1,\frac12\right)$` },
  { level: 2, q: String.raw`$ABCD$ is a parallelogram with $A(-3,1)$, $B(2,-1)$, $C(5,3)$. Find $D$.`, recap: "Fourth vertex.", ans: "$D(0,5)$" },
  { level: 2, q: String.raw`Find the midpoints of the three sides of the triangle with vertices $(-2,-4)$, $(6,0)$ and $(0,6)$.`, recap: "Three midpoints.", ans: "$(2,-2)$, $(3,3)$, $(-1,1)$" },
  { level: 2, q: String.raw`The midpoint of $(k,3)$ and $(7,-5)$ is $(2,-1)$. Find $k$.`, recap: "Find k.", ans: "$k=-3$" },
  { level: 3, space: 5, q: String.raw`Find the three points that divide the segment from $A(-6,-2)$ to $B(10,6)$ into four equal parts.`, recap: "Four equal parts.", ans: "$(-2,0)$, $(2,2)$, $(6,4)$" },
  { level: 3, space: 5, q: String.raw`The midpoint of $(3a,5)$ and $(a-4,b)$ is $(6,2)$. Find $a$ and $b$.`, recap: "Find a and b.", ans: String.raw`$2a-2=6\Rightarrow a=4$; $\frac{5+b}{2}=2\Rightarrow b=-1$` },
  { level: 3, space: 5, q: String.raw`A circle has centre $(1,-2)$. One end of a diameter is $(-4,1)$. Find the other end.`, recap: "Other end of a diameter.", ans: "$(6,-5)$" },
  { level: 3, space: 5, q: String.raw`Right triangle $OAB$ has $O(0,0)$, $A(8,0)$, $B(0,6)$. Show that the midpoint of the hypotenuse is the same distance from all three vertices.`, recap: "Midpoint of the hypotenuse.", ans: String.raw`$M(4,3)$; $MO=MA=MB=5$` },
  { level: 3, space: 5, q: String.raw`Use the rectangle with vertices $(0,0)$, $(a,0)$, $(a,b)$, $(0,b)$ to explain why the diagonals of every rectangle bisect each other.`, recap: "General rectangle.", ans: String.raw`both diagonals have midpoint $\left(\frac a2,\frac b2\right)$` },
];

// ---- figures added to examples and problems
const ex = EXAMPLES, pr = PROBLEMS;
ex[1].fig = F({ view: { xmin: -6, xmax: 5, ymin: -9, ymax: 4 }, segs: [{ pts: [[3, -7], [-4, 2]], color: "violet" }], points: [pt(3, -7, null, "blue"), pt(-4, 2, null, "red"), { x: -0.5, y: -2.5, label: "M(−1/2, −5/2)", color: "green" }] });
ex[2].fig = F({ view: { xmin: -8, xmax: 10, ymin: -9, ymax: 5 }, segs: [{ pts: [[-6, 3], [8, -7]], color: "violet" }], points: [pt(-6, 3, "A"), pt(1, -2, "M", "green"), pt(8, -7, "B", "red")] });
ex[3].fig = F({ view: { xmin: -6, xmax: 10, ymin: -8, ymax: 4 }, segs: [{ pts: [[-4, -6], [8, 2]], color: "violet" }], points: [pt(-4, -6, "A"), pt(-1, -4, null, "red"), pt(2, -2, "M", "green"), pt(8, 2, "B")] });
ex[4].fig = F({ view: { xmin: -10, xmax: 6, ymin: -6, ymax: 10 }, curves: circ(Math.sqrt(34), -2, 2), segs: [{ pts: [[-7, -1], [3, 5]], color: "red" }], points: [pt(-7, -1), pt(3, 5), pt(-2, 2, "C", "green")], step: { x: 2, y: 2 } });
ex[5].fig = F({ view: { xmin: -5, xmax: 7, ymin: -1, ymax: 9 }, segs: [{ pts: [[-3, 7], [5, 2]], color: "violet" }], points: [pt(-3, 7), pt(5, 2), pt(1, 4, "M", "red"), { x: 1, y: 4.5, label: "(1, 4.5)", color: "green" }] });
ex[7].fig = F({ view: { xmin: -4, xmax: 8, ymin: -5, ymax: 6 }, segs: [poly([[-2, -3], [4, -1], [6, 4], [0, 2]]), { pts: [[-2, -3], [6, 4]], color: "gray" }, { pts: [[4, -1], [0, 2]], color: "gray" }], points: [pt(-2, -3, "A"), pt(4, -1, "B"), pt(6, 4, "C"), pt(0, 2, "D", "red")] });
ex[8].fig = F({ view: { xmin: -6, xmax: 8, ymin: -6, ymax: 8 }, segs: [poly([[-4, 2], [6, 6], [2, -4]], "gray")], points: [pt(-4, 2, "P"), pt(6, 6, "Q"), pt(2, -4, "R"), pt(1, 4, null, "red"), pt(4, 1, null, "red"), pt(-1, -1, null, "red")] });
pr[0].fig = F({ view: { xmin: -8, xmax: 6, ymin: -3, ymax: 9 }, points: [pt(-6, -1), pt(4, 7)] }, 4);
pr[1].fig = F({ view: { xmin: -7, xmax: 4, ymin: -11, ymax: 2 }, points: [pt(2, -9), pt(-5, 0)] }, 4);
pr[2].fig = F({ view: { xmin: -9, xmax: 5, ymin: -1, ymax: 11 }, points: [pt(3, 1, "A"), pt(-2, 5, "M", "green")] }, 4);
pr[3].fig = F({ view: { xmin: -10, xmax: 6, ymin: -7, ymax: 5 }, points: [pt(-8, 3), pt(4, -5)] }, 4);
pr[4].fig = F({ view: { xmin: -6, xmax: 8, ymin: -5, ymax: 6 }, segs: [poly([[-4, 0], [2, -3], [6, 1], [0, 4]])], points: [pt(-4, 0, "A"), pt(2, -3, "B"), pt(6, 1, "C"), pt(0, 4, "D")] }, 4);
pr[5].fig = F({ view: { xmin: -5, xmax: 7, ymin: -3, ymax: 7 }, segs: [{ pts: [[-3, 1], [2, -1], [5, 3]], color: "green" }], points: [pt(-3, 1, "A"), pt(2, -1, "B"), pt(5, 3, "C")] }, 4);
pr[6].fig = F({ view: { xmin: -4, xmax: 8, ymin: -6, ymax: 8 }, segs: [poly([[-2, -4], [6, 0], [0, 6]], "gray")], points: [pt(-2, -4), pt(6, 0), pt(0, 6)] }, 4);
pr[8].fig = F({ view: { xmin: -8, xmax: 12, ymin: -4, ymax: 8 }, segs: [{ pts: [[-6, -2], [10, 6]], color: "violet" }], points: [pt(-6, -2, "A"), pt(10, 6, "B")], step: { x: 2, y: 2 } }, 4.5);
pr[10].fig = F({ view: { xmin: -6, xmax: 8, ymin: -7, ymax: 4 }, points: [pt(1, -2, "C", "green"), pt(-4, 1)] }, 4);
pr[11].fig = F({ view: { xmin: -1, xmax: 9, ymin: -1, ymax: 7 }, segs: [poly([[0, 0], [8, 0], [0, 6]], "gray")], points: [pt(0, 0, "O"), pt(8, 0, "A"), pt(0, 6, "B")] }, 4);
pr[12].fig = F({ view: { xmin: -1, xmax: 8, ymin: -1, ymax: 6 }, segs: [poly([[0, 0], [6, 0], [6, 4], [0, 4]]), { pts: [[0, 0], [6, 4]], color: "gray" }, { pts: [[6, 0], [0, 4]], color: "gray" }], points: [{ x: 0, y: 0, label: "(0, 0)" }, { x: 6, y: 0, label: "(a, 0)" }, { x: 6, y: 4, label: "(a, b)" }, { x: 0, y: 4, label: "(0, b)" }], step: { x: 1, y: 1 } }, 4);
// ---- end figures

export const WS = {
  code: "2.1",
  title: "Midpoint of a Line Segment",
  bigideas: String.raw`The midpoint of a segment is found by averaging: $M=\left(\frac{x_1+x_2}{2},\frac{y_1+y_2}{2}\right)$. Used backwards it finds a missing endpoint ($x_B=2x_M-x_A$). Midpoints locate the centre of a circle from a diameter, test whether diagonals bisect each other, and are the first step for medians and right bisectors.`,
  goals: ["Develop the midpoint formula.", "Find midpoints, including fractions.", "Find a missing endpoint.", "Apply midpoints to circles and quadrilaterals."],
  curriculum: "AG2",
  vocab: [["Midpoint", "$\\left(\\frac{x_1+x_2}{2},\\frac{y_1+y_2}{2}\\right)$"], ["Bisect", "cut into two equal parts"], ["Diameter", "chord through the centre"]],
  hook: String.raw`Two friends live at $(-3,1)$ and $(5,7)$ on a city grid (blocks). Ask: “Where should they meet so each walks the same distance in a straight line?” Students estimate, then average the coordinates.`,
  concepts: [
    ["1. Averaging", String.raw`Halfway across is the average of the $x$-coordinates; halfway up is the average of the $y$-coordinates.
${planeT({ view: { xmin: -2, xmax: 10, ymin: -2, ymax: 8 }, segs: [{ pts: [[0, 1], [8, 7]], color: "violet" }, { pts: [[0, 1], [4, 1], [4, 4]], color: "gray" }], points: [{ x: 0, y: 1, label: "A", color: "blue" }, { x: 8, y: 7, label: "B", color: "red" }, { x: 4, y: 4, label: "M", color: "green" }], step: { x: 1, y: 1 } }, 4.5)}`],
    ["2. Working backwards", String.raw`$x_B=2x_M-x_A$, $y_B=2y_M-y_A$: repeat the step from $A$ to $M$.`],
    ["3. Applications", String.raw`Centre = midpoint of a diameter. Diagonals with a common midpoint bisect each other (parallelogram). Fourth vertex: $D=A+C-B$.`],
  ],
  tips: ["Students subtract instead of add.", "Keep halves as fractions or decimals.", "Check a missing endpoint by recomputing the midpoint.", "Sketch first to catch sign errors.", "Link to the number-line average."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
