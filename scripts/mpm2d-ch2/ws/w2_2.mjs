// MPM2D Worksheet 2.2 — Length of a Line Segment (teacher edition)
import { planeT, F, pt, std, gridT, circ, poly } from "./figT.mjs";

const EXAMPLES = [
  { title: "A whole-number length", q: String.raw`Find the length of the segment from $(-4,-1)$ to $(2,7)$.`,
    fig: planeT({ view: { xmin: -6, xmax: 4, ymin: -3, ymax: 9 }, segs: [{ pts: [[-4, -1], [2, -1]], color: "blue" }, { pts: [[2, -1], [2, 7]], color: "red" }, { pts: [[-4, -1], [2, 7]], color: "violet" }], points: [{ x: -4, y: -1, label: "(−4, −1)", color: "blue" }, { x: 2, y: 7, label: "(2, 7)", color: "red" }], step: { x: 1, y: 1 } }, 4.5),
    steps: [String.raw`$\Delta x=6$, $\Delta y=8$.`, String.raw`$d=\sqrt{36+64}=\sqrt{100}=10$.`], ans: "$10$" },
  { title: "Exact and decimal", q: String.raw`Find the length from $(5,-2)$ to $(-1,1)$.`,
    steps: [String.raw`$\Delta x=-6$, $\Delta y=3$.`, String.raw`$d=\sqrt{36+9}=\sqrt{45}=3\sqrt5\approx6.71$.`], ans: String.raw`$\sqrt{45}\approx6.71$` },
  { title: "A vertical segment", q: String.raw`Find the length from $(-3,4)$ to $(-3,-6)$.`,
    steps: ["Same x-coordinate: vertical.", String.raw`$4-(-6)=10$.`], ans: "$10$" },
  { title: "Perimeter", q: String.raw`Find the perimeter of the triangle with vertices $(0,0)$, $(6,0)$, $(3,5)$.`,
    steps: [String.raw`Base $6$.`, String.raw`Other sides: $\sqrt{9+25}=\sqrt{34}$ each.`, String.raw`$P=6+2\sqrt{34}\approx17.66$.`], ans: String.raw`$\approx17.66$ (isosceles)` },
  { title: "Classify by sides", q: String.raw`Classify $\triangle DEF$ with $D(-2,-2)$, $E(4,1)$, $F(1,7)$.`,
    steps: [String.raw`$DE^2=36+9=45$, $EF^2=9+36=45$, $FD^2=9+81=90$.`, String.raw`Two equal sides, and $45+45=90$: Pythagoras holds.`], ans: "isosceles right triangle (right angle at E)" },
  { title: "Which is closer?", q: String.raw`A clinic is at $H(3,4)$. Is town $A(-1,1)$ or town $B(8,2)$ closer?`,
    steps: [String.raw`$HA=\sqrt{16+9}=5$.`, String.raw`$HB=\sqrt{25+4}=\sqrt{29}\approx5.39$.`], ans: "A" },
  { title: "Unknown x-coordinate", q: String.raw`$(k,-1)$ is $10$ units from $(3,5)$. Find $k$.`,
    steps: [String.raw`$(k-3)^2+36=100\Rightarrow(k-3)^2=64$.`, String.raw`$k-3=\pm8$.`], ans: "$k=11$ or $k=-5$" },
  { title: "A point on the y-axis", q: String.raw`Find the points on the $y$-axis that are $13$ units from $(5,2)$.`,
    steps: [String.raw`$(0-5)^2+(y-2)^2=169\Rightarrow(y-2)^2=144$.`, String.raw`$y-2=\pm12$.`], ans: "$(0,14)$ and $(0,-10)$" },
  { title: "Radius of a circle", q: String.raw`A circle has centre $(-2,3)$ and passes through $(4,-5)$. Find its radius.`,
    steps: [String.raw`$r=\sqrt{36+64}=10$.`], ans: "$10$" },
];

const PROBLEMS = [
  { level: 1, q: String.raw`Find the length from $(1,-3)$ to $(7,5)$.`, recap: "(1, −3) to (7, 5).", ans: "$10$" },
  { level: 1, q: String.raw`Find the length from $(-2,4)$ to $(3,-8)$.`, recap: "(−2, 4) to (3, −8).", ans: "$13$" },
  { level: 1, q: String.raw`Find the length from $(-6,2)$ to $(5,2)$.`, recap: "Horizontal segment.", ans: "$11$" },
  { level: 2, q: String.raw`Find the length from $(-3,-5)$ to $(1,-1)$, exactly and to two decimals.`, recap: "(−3, −5) to (1, −1).", ans: String.raw`$\sqrt{32}=4\sqrt2\approx5.66$` },
  { level: 2, q: String.raw`Find the perimeter of the triangle with vertices $(-4,0)$, $(4,0)$, $(0,3)$.`, recap: "Perimeter.", ans: "$8+5+5=18$" },
  { level: 2, q: String.raw`Is the triangle with vertices $A(1,1)$, $B(5,4)$, $C(-2,5)$ isosceles? Explain.`, recap: "Isosceles?", ans: String.raw`yes: $AB=AC=5$, $BC=\sqrt{50}$` },
  { level: 2, q: String.raw`Which is closer to the origin: $(-7,4)$ or $(5,-6)$?`, recap: "Closer to the origin.", ans: String.raw`$(5,-6)$: $\sqrt{61}<\sqrt{65}$` },
  { level: 2, q: String.raw`$(x,2)$ is $5$ units from $(1,-2)$. Find $x$.`, recap: "Find x.", ans: "$x=4$ or $x=-2$" },
  { level: 3, space: 5, q: String.raw`Show that the triangle with vertices $A(-3,-2)$, $B(1,4)$, $C(7,0)$ is a right isosceles triangle.`, recap: "Right isosceles.", ans: String.raw`$AB^2=BC^2=52$, $CA^2=104=52+52$: right angle at $B$` },
  { level: 3, space: 5, q: String.raw`Find the point on the $x$-axis that is the same distance from $(-1,3)$ and $(5,5)$.`, recap: "Equidistant on the x-axis.", ans: String.raw`$(x+1)^2+9=(x-5)^2+25\Rightarrow x=\frac{10}{3}$` },
  { level: 3, space: 5, q: String.raw`Find the perimeter of $ABCD$ with $A(-4,-2)$, $B(2,-4)$, $C(4,2)$, $D(-2,4)$. What kind of quadrilateral could it be?`, recap: "Quadrilateral perimeter.", ans: String.raw`each side $\sqrt{40}$; $4\sqrt{40}\approx25.30$; four equal sides (rhombus — in fact a square)` },
  { level: 3, space: 5, q: String.raw`A drone flies from $(0,0)$ to $(12,5)$, then to $(12,-4)$ (units in km).
(a) How far does it fly?
(b) How far is it from its start at the end?`, recap: "Drone flight.", ans: String.raw`(a) $13+9=22$ km (b) $\sqrt{160}\approx12.65$ km` },
  { level: 3, space: 5, q: "Explain why swapping the two points does not change the result of the length formula.", recap: "Order of points.", ans: "(x₁ − x₂)² = (x₂ − x₁)² because squaring removes the sign" },
];

// ---- figures added to examples and problems
const ex = EXAMPLES, pr = PROBLEMS;
const legs = (a, b) => [{ pts: [a, [b[0], a[1]]], color: "blue" }, { pts: [[b[0], a[1]], b], color: "red" }, { pts: [a, b], color: "violet" }];
ex[1].fig = F({ view: { xmin: -3, xmax: 7, ymin: -4, ymax: 3 }, segs: legs([5, -2], [-1, 1]), points: [pt(5, -2), pt(-1, 1)] });
ex[2].fig = F({ view: { xmin: -6, xmax: 2, ymin: -8, ymax: 6 }, segs: [{ pts: [[-3, 4], [-3, -6]], color: "violet" }], points: [pt(-3, 4), pt(-3, -6)] });
ex[3].fig = F({ view: { xmin: -1, xmax: 7, ymin: -1, ymax: 6 }, segs: [poly([[0, 0], [6, 0], [3, 5]], "violet")], points: [pt(0, 0), pt(6, 0), pt(3, 5)] });
ex[4].fig = F({ view: { xmin: -4, xmax: 6, ymin: -4, ymax: 8 }, segs: [poly([[-2, -2], [4, 1], [1, 7]], "violet")], points: [pt(-2, -2, "D"), pt(4, 1, "E"), pt(1, 7, "F")] });
ex[5].fig = F({ view: { xmin: -3, xmax: 10, ymin: -1, ymax: 6 }, segs: [{ pts: [[3, 4], [-1, 1]], color: "blue" }, { pts: [[3, 4], [8, 2]], color: "red" }], points: [pt(3, 4, "H", "green"), pt(-1, 1, "A"), pt(8, 2, "B", "red")] });
ex[6].fig = F({ view: { xmin: -8, xmax: 14, ymin: -7, ymax: 16 }, curves: circ(10, 3, 5), lines: [{ m: 0, b: -1, color: "gray", dash: true }], points: [pt(3, 5, null, "green"), pt(11, -1, null, "red"), pt(-5, -1, null, "red")] });
ex[7].fig = F({ view: { xmin: -10, xmax: 20, ymin: -12, ymax: 16 }, curves: circ(13, 5, 2), points: [pt(5, 2, null, "green"), pt(0, 14, null, "red"), pt(0, -10, null, "red")] });
ex[8].fig = F({ view: { xmin: -13, xmax: 9, ymin: -8, ymax: 14 }, curves: circ(10, -2, 3), segs: [{ pts: [[-2, 3], [4, -5]], color: "red" }], points: [pt(-2, 3, "C", "green"), pt(4, -5)] });
pr[0].fig = F({ view: { xmin: -1, xmax: 9, ymin: -5, ymax: 7 }, points: [pt(1, -3), pt(7, 5)] });
pr[1].fig = F({ view: { xmin: -4, xmax: 5, ymin: -10, ymax: 6 }, points: [pt(-2, 4), pt(3, -8)] });
pr[2].fig = F({ view: { xmin: -8, xmax: 7, ymin: -2, ymax: 5 }, points: [pt(-6, 2), pt(5, 2)] });
pr[3].fig = F({ view: { xmin: -5, xmax: 3, ymin: -7, ymax: 1 }, points: [pt(-3, -5), pt(1, -1)] });
pr[4].fig = F({ view: { xmin: -6, xmax: 6, ymin: -2, ymax: 5 }, segs: [poly([[-4, 0], [4, 0], [0, 3]], "violet")], points: [pt(-4, 0), pt(4, 0), pt(0, 3)] });
pr[5].fig = F({ view: { xmin: -4, xmax: 7, ymin: -1, ymax: 7 }, segs: [poly([[1, 1], [5, 4], [-2, 5]], "violet")], points: [pt(1, 1, "A"), pt(5, 4, "B"), pt(-2, 5, "C")] });
pr[6].fig = F({ view: { xmin: -9, xmax: 7, ymin: -8, ymax: 6 }, points: [pt(-7, 4), pt(5, -6), pt(0, 0, "O", "green")] });
pr[7].fig = F({ view: { xmin: -4, xmax: 6, ymin: -4, ymax: 4 }, lines: [{ m: 0, b: 2, color: "gray", dash: true }], points: [pt(1, -2)] });
pr[8].fig = F({ view: { xmin: -5, xmax: 9, ymin: -4, ymax: 6 }, segs: [poly([[-3, -2], [1, 4], [7, 0]], "violet")], points: [pt(-3, -2, "A"), pt(1, 4, "B"), pt(7, 0, "C")] });
pr[9].fig = F({ view: { xmin: -3, xmax: 7, ymin: -1, ymax: 7 }, points: [pt(-1, 3), pt(5, 5)] });
pr[10].fig = F({ view: { xmin: -6, xmax: 6, ymin: -6, ymax: 6 }, segs: [poly([[-4, -2], [2, -4], [4, 2], [-2, 4]])], points: [pt(-4, -2, "A"), pt(2, -4, "B"), pt(4, 2, "C"), pt(-2, 4, "D")] });
pr[11].fig = F({ view: { xmin: -2, xmax: 14, ymin: -6, ymax: 8 }, segs: [{ pts: [[0, 0], [12, 5], [12, -4]], color: "violet" }], points: [pt(0, 0), pt(12, 5), pt(12, -4)], xlabel: "km", ylabel: "km" });
// ---- end figures

export const WS = {
  code: "2.2",
  title: "Length of a Line Segment",
  bigideas: String.raw`The horizontal and vertical changes between two points are the legs of a right triangle, so the length of the segment is $d=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$. Lengths give perimeters, classify triangles by sides, compare distances and find unknown coordinates (usually two answers).`,
  goals: ["Develop the length formula from Pythagoras.", "Give exact and decimal lengths.", "Find perimeters and classify triangles.", "Find unknown coordinates."],
  curriculum: "AG2",
  vocab: [["Length", "$\\sqrt{(\\Delta x)^2+(\\Delta y)^2}$"], ["Exact value", "kept as a square root"], ["Isosceles", "two equal sides"]],
  hook: String.raw`Ask: “A knight on a chessboard moves 2 across and 1 up. How far does it travel in a straight line?” Students draw the right triangle: $\sqrt{5}$ squares.`,
  concepts: [
    ["1. Pythagoras on the grid", String.raw`Run and rise are the legs; the segment is the hypotenuse.
${planeT({ view: { xmin: -1, xmax: 8, ymin: -1, ymax: 7 }, segs: [{ pts: [[1, 1], [7, 1]], color: "blue" }, { pts: [[7, 1], [7, 6]], color: "red" }, { pts: [[1, 1], [7, 6]], color: "violet" }], points: [{ x: 1, y: 1, label: "A", color: "blue" }, { x: 7, y: 6, label: "B", color: "red" }], step: { x: 1, y: 1 } }, 4.5)}`],
    ["2. Exact or decimal", String.raw`Keep $\sqrt{45}$ while working; round at the end. $\sqrt{45}=3\sqrt5$ is optional simplification.`],
    ["3. Unknown coordinates", String.raw`Substitute, isolate the square, take $\pm$: two answers are normal.`],
  ],
  tips: ["(−4)² = 16: insist on brackets.", "√(a² + b²) ≠ a + b.", "Horizontal/vertical: no formula needed.", "Compare squared lengths to classify.", "Keep both ± answers."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
