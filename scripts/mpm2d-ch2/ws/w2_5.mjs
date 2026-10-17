// MPM2D Worksheet 2.5 — Verifying Geometric Properties (teacher edition)
import { planeT, F, pt, std, gridT, circ, poly } from "./figT.mjs";

const EXAMPLES = [
  { title: "Classify a triangle", q: String.raw`Classify $\triangle ABC$ with $A(-4,1)$, $B(2,3)$, $C(0,-3)$ by sides, and test for a right angle.`,
    steps: [String.raw`$AB^2=40$, $BC^2=40$, $CA^2=32$: isosceles.`, String.raw`Slopes $\frac13$, $3$, $-1$: no product equals $-1$.`], ans: "isosceles, not right-angled" },
  { title: "A right isosceles triangle", q: String.raw`Show that $D(-3,2)$, $E(1,4)$, $F(3,0)$ form a right isosceles triangle.`,
    steps: [String.raw`$m_{DE}=\frac12$, $m_{EF}=-2$: perpendicular at $E$.`, String.raw`$DE^2=16+4=20$, $EF^2=4+16=20$: equal legs.`], ans: "right angle at E, DE = EF" },
  { title: "A parallelogram that is not a rectangle", q: String.raw`Classify $PQRS$ with $P(-5,-2)$, $Q(1,-4)$, $R(4,1)$, $S(-2,3)$.`,
    steps: [String.raw`Slopes: $PQ=-\frac13$, $QR=\frac53$, $RS=-\frac13$, $SP=\frac53$: opposite sides parallel.`, String.raw`$-\frac13\times\frac53\ne-1$: no right angle.`, String.raw`$PQ^2=40$, $QR^2=34$: not a rhombus.`], ans: "parallelogram only" },
  { title: "Rectangle and its diagonals", q: String.raw`Show $ABCD$ with $A(-3,-1)$, $B(3,-4)$, $C(5,0)$, $D(-1,3)$ is a rectangle with equal diagonals.`,
    fig: planeT({ view: { xmin: -5, xmax: 7, ymin: -6, ymax: 5 }, segs: [{ pts: [[-3, -1], [3, -4], [5, 0], [-1, 3], [-3, -1]], color: "green" }, { pts: [[-3, -1], [5, 0]], color: "gray" }, { pts: [[3, -4], [-1, 3]], color: "gray" }], points: [{ x: -3, y: -1, label: "A" }, { x: 3, y: -4, label: "B" }, { x: 5, y: 0, label: "C" }, { x: -1, y: 3, label: "D" }], step: { x: 1, y: 1 } }, 4.5),
    steps: [String.raw`Slopes $AB=-\frac12$, $BC=2$, $CD=-\frac12$, $DA=2$: parallelogram with right angles.`, String.raw`$AC^2=64+1=65$, $BD^2=16+49=65$.`], ans: "rectangle; diagonals both √65" },
  { title: "Diagonals of a rhombus", q: String.raw`$KLMN$ has $K(0,-4)$, $L(3,0)$, $M(0,4)$, $N(-3,0)$. Show it is a rhombus with perpendicular diagonals.`,
    steps: ["Each side: √(9 + 16) = 5.", "KM lies on the y-axis, LN on the x-axis: perpendicular.", "Both diagonals have midpoint (0, 0)."], ans: "rhombus; diagonals are perpendicular bisectors" },
  { title: "An isosceles trapezoid", q: String.raw`Classify $ABCD$ with $A(-4,-2)$, $B(4,-2)$, $C(2,2)$, $D(-2,2)$.`,
    steps: ["AB and DC are horizontal: parallel.", String.raw`$m_{AD}=2$, $m_{BC}=-2$: not parallel.`, String.raw`$AD^2=BC^2=20$.`], ans: "isosceles trapezoid" },
  { title: "A kite", q: String.raw`Classify $WXYZ$ with $W(0,5)$, $X(3,1)$, $Y(0,-4)$, $Z(-3,1)$.`,
    steps: [String.raw`$WX^2=ZW^2=25$; $XY^2=YZ^2=34$.`, "Two pairs of equal adjacent sides; WY vertical and XZ horizontal: perpendicular diagonals."], ans: "kite" },
  { title: "Midsegment", q: String.raw`In $\triangle PQR$ with $P(-6,0)$, $Q(2,8)$, $R(4,-2)$, verify the midsegment property for the midpoints of $PQ$ and $PR$.`,
    steps: [String.raw`Midpoints $(-2,4)$ and $(-1,-1)$: slope $-5$; $m_{QR}=-5$.`, String.raw`Lengths $\sqrt{26}$ and $\sqrt{104}=2\sqrt{26}$.`], ans: "parallel to QR and half as long" },
  { title: "The midpoint quadrilateral", q: String.raw`Join the midpoints of the sides of $ABCD$ with $A(-4,0)$, $B(2,-4)$, $C(6,2)$, $D(0,6)$. Classify the new quadrilateral.`,
    fig: planeT({ view: { xmin: -6, xmax: 8, ymin: -6, ymax: 8 }, segs: [{ pts: [[-4, 0], [2, -4], [6, 2], [0, 6], [-4, 0]], color: "gray" }, { pts: [[-1, -2], [4, -1], [3, 4], [-2, 3], [-1, -2]], color: "red" }], points: [{ x: -1, y: -2, color: "red" }, { x: 4, y: -1, color: "red" }, { x: 3, y: 4, color: "red" }, { x: -2, y: 3, color: "red" }], step: { x: 1, y: 1 } }, 4.5),
    steps: [String.raw`Midpoints: $(-1,-2)$, $(4,-1)$, $(3,4)$, $(-2,3)$.`, String.raw`Slopes: $\frac15$, $-5$, $\frac15$, $-5$: parallelogram with right angles.`, String.raw`(The diagonals of $ABCD$ have slopes $\frac15$ and $-5$: they are perpendicular.)`], ans: "a rectangle" },
];

const PROBLEMS = [
  { level: 1, q: String.raw`Are lines with slopes $\frac25$ and $-\frac52$ perpendicular?`, recap: "Slopes 2/5 and −5/2.", ans: "yes (product −1)" },
  { level: 1, q: String.raw`Are $AB$ with $A(1,2)$, $B(4,6)$ and $CD$ with $C(-2,0)$, $D(1,4)$ parallel and equal?`, recap: "Parallel and equal?", ans: String.raw`yes: both slope $\frac43$, length $5$` },
  { level: 1, q: "Which tool shows that two diagonals bisect each other?", recap: "Tool for bisecting.", ans: "midpoint" },
  { level: 2, q: String.raw`Classify the triangle with vertices $A(-1,-1)$, $B(3,1)$, $C(1,5)$.`, recap: "Classify the triangle.", ans: "isosceles right triangle (right angle at B)" },
  { level: 2, q: String.raw`Show that $A(-3,-2)$, $B(3,0)$, $C(4,3)$, $D(-2,1)$ form a parallelogram. Is it a rectangle?`, recap: "Parallelogram?", ans: String.raw`slopes $\frac13$, $3$, $\frac13$, $3$; not a rectangle` },
  { level: 2, q: String.raw`Show that $E(-2,1)$, $F(1,3)$, $G(4,1)$, $H(1,-1)$ form a rhombus. Is it a square?`, recap: "Rhombus?", ans: String.raw`all sides $\sqrt{13}$; slopes $\frac23$ and $-\frac23$: not a square` },
  { level: 2, q: String.raw`Verify that the diagonals of rectangle $J(0,0)$, $K(8,0)$, $L(8,5)$, $M(0,5)$ are equal and bisect each other.`, recap: "Rectangle diagonals.", ans: String.raw`both $\sqrt{89}$; common midpoint $(4,2.5)$` },
  { level: 2, q: String.raw`Classify $A(-3,-1)$, $B(5,-1)$, $C(3,3)$, $D(-1,3)$.`, recap: "Trapezoid?", ans: "isosceles trapezoid" },
  { level: 3, space: 5, q: String.raw`Three vertices of a parallelogram are $(0,0)$, $(4,1)$ and $(5,5)$. Find all possible positions of the fourth vertex.`, recap: "All fourth vertices.", ans: "$(1,4)$, $(-1,-4)$, $(9,6)$" },
  { level: 3, space: 5, q: String.raw`Prove that $P(-4,-1)$, $Q(1,-3)$, $R(3,2)$, $S(-2,4)$ is a square.`, recap: "Prove a square.", ans: String.raw`slopes $-\frac25$, $\frac52$ alternate; all sides $\sqrt{29}$` },
  { level: 3, space: 5, q: String.raw`For the triangle $(-2,-4)$, $(6,0)$, $(0,6)$, verify the midsegment property for the midpoints of the first two sides that meet at $(-2,-4)$.`, recap: "Midsegment.", ans: String.raw`midpoints $(2,-2)$, $(-1,1)$: slope $-1$ = slope of third side; $\sqrt{18}=\frac12\sqrt{72}$` },
  { level: 3, space: 5, q: String.raw`Join the midpoints of the sides of $A(-5,1)$, $B(1,-3)$, $C(5,3)$, $D(-1,5)$. Show the result is a parallelogram.`, recap: "Midpoint quadrilateral.", ans: String.raw`$(-2,-1)$, $(3,0)$, $(2,4)$, $(-3,3)$; slopes $\frac15$, $-4$, $\frac15$, $-4$` },
  { level: 3, space: 5, q: "Explain why showing four equal sides is not enough to prove a quadrilateral is a square. What else is needed?", recap: "Four equal sides.", ans: "a rhombus also has four equal sides; also show one right angle (slopes product −1)" },
];

// ---- figures added to examples and problems
const ex = EXAMPLES, pr = PROBLEMS;
const Q = (ps, names, view, diag = false) => F({ view, segs: [poly(ps), ...(diag && ps.length === 4 ? [{ pts: [ps[0], ps[2]], color: "gray" }, { pts: [ps[1], ps[3]], color: "gray" }] : [])], points: ps.map(([x, y], i) => pt(x, y, names[i])) });
ex[0].fig = Q([[-4, 1], [2, 3], [0, -3]], "ABC", { xmin: -6, xmax: 4, ymin: -5, ymax: 5 });
ex[1].fig = Q([[-3, 2], [1, 4], [3, 0]], "DEF", { xmin: -5, xmax: 5, ymin: -2, ymax: 6 });
ex[2].fig = Q([[-5, -2], [1, -4], [4, 1], [-2, 3]], "PQRS", { xmin: -7, xmax: 6, ymin: -6, ymax: 5 });
ex[4].fig = Q([[0, -4], [3, 0], [0, 4], [-3, 0]], "KLMN", { xmin: -5, xmax: 5, ymin: -5, ymax: 5 }, true);
ex[5].fig = Q([[-4, -2], [4, -2], [2, 2], [-2, 2]], "ABCD", { xmin: -6, xmax: 6, ymin: -4, ymax: 4 });
ex[6].fig = Q([[0, 5], [3, 1], [0, -4], [-3, 1]], "WXYZ", { xmin: -5, xmax: 5, ymin: -6, ymax: 7 }, true);
ex[7].fig = F({ view: { xmin: -8, xmax: 6, ymin: -4, ymax: 10 }, segs: [poly([[-6, 0], [2, 8], [4, -2]], "gray"), { pts: [[-2, 4], [-1, -1]], color: "red" }, { pts: [[2, 8], [4, -2]], color: "blue" }], points: [pt(-6, 0, "P"), pt(2, 8, "Q"), pt(4, -2, "R"), pt(-2, 4, null, "red"), pt(-1, -1, null, "red")] });
pr[1].fig = F({ view: { xmin: -3, xmax: 6, ymin: -1, ymax: 7 }, segs: [{ pts: [[1, 2], [4, 6]], color: "blue" }, { pts: [[-2, 0], [1, 4]], color: "red" }], points: [pt(1, 2, "A"), pt(4, 6, "B"), pt(-2, 0, "C", "red"), pt(1, 4, "D", "red")] });
pr[3].fig = Q([[-1, -1], [3, 1], [1, 5]], "ABC", { xmin: -3, xmax: 5, ymin: -3, ymax: 7 });
pr[4].fig = Q([[-3, -2], [3, 0], [4, 3], [-2, 1]], "ABCD", { xmin: -5, xmax: 6, ymin: -4, ymax: 5 });
pr[5].fig = Q([[-2, 1], [1, 3], [4, 1], [1, -1]], "EFGH", { xmin: -4, xmax: 6, ymin: -3, ymax: 5 });
pr[6].fig = Q([[0, 0], [8, 0], [8, 5], [0, 5]], "JKLM", { xmin: -1, xmax: 10, ymin: -1, ymax: 7 }, true);
pr[7].fig = Q([[-3, -1], [5, -1], [3, 3], [-1, 3]], "ABCD", { xmin: -5, xmax: 7, ymin: -3, ymax: 5 });
pr[8].fig = F({ view: { xmin: -2, xmax: 7, ymin: -1, ymax: 7 }, points: [pt(0, 0), pt(4, 1), pt(5, 5)] });
pr[9].fig = Q([[-4, -1], [1, -3], [3, 2], [-2, 4]], "PQRS", { xmin: -6, xmax: 5, ymin: -5, ymax: 6 });
pr[10].fig = F({ view: { xmin: -4, xmax: 8, ymin: -6, ymax: 8 }, segs: [poly([[-2, -4], [6, 0], [0, 6]], "gray")], points: [pt(-2, -4), pt(6, 0), pt(0, 6)] });
pr[11].fig = Q([[-5, 1], [1, -3], [5, 3], [-1, 5]], "ABCD", { xmin: -7, xmax: 7, ymin: -5, ymax: 7 });
// ---- end figures

export const WS = {
  code: "2.5",
  title: "Verifying Geometric Properties",
  bigideas: String.raw`On a grid, properties are proved, not seen. Slope proves parallel and perpendicular sides, length proves equal sides, and midpoint proves that segments bisect each other. These classify triangles (scalene, isosceles, right) and quadrilaterals (parallelogram, rectangle, rhombus, square, trapezoid, kite), and verify general results such as the midsegment property.`,
  goals: ["Match each property to a tool.", "Classify triangles and quadrilaterals.", "Verify properties of diagonals.", "Verify the midsegment property."],
  curriculum: "AG3",
  vocab: [["Parallelogram", "opposite sides parallel"], ["Rhombus", "four equal sides"], ["Kite", "two pairs of equal adjacent sides"], ["Midsegment", "joins midpoints of two sides"]],
  hook: String.raw`Draw a quadrilateral that looks like a square but has vertices $(0,0)$, $(5,1)$, $(6,6)$, $(1,5)$. Vote: square or not? Then compute — slopes $\frac15$ and $5$ show it is not even a rectangle.`,
  concepts: [
    ["1. Tools", String.raw`Equal slopes $\to$ parallel; product $-1$ $\to$ perpendicular; equal lengths $\to$ equal sides; same midpoint $\to$ bisect.`],
    ["2. Family tree", String.raw`Square $\subset$ rectangle, rhombus $\subset$ parallelogram. Name the most specific shape you can prove.`],
    ["3. Writing a proof", String.raw`List calculations for every side needed, state the comparison, conclude in a sentence.`],
  ],
  tips: ["Opposite sides: AB and CD, BC and DA.", "Compare squared lengths.", "Right angle needs perpendicular adjacent sides.", "A sketch helps label the vertices in order.", "Conclusions must be in words."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
