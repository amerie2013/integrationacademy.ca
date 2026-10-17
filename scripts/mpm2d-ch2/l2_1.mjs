// MPM2D 2.1 — Midpoint of a Line Segment (self-study format): averaging coordinates, the midpoint formula,
// missing endpoints, centres of circles and the diagonals of a parallelogram
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, q, num, choice } from "./lib.mjs";
import { plane } from "../mth1w-ch4/figs4.mjs";

export const TITLE = "2.1 Midpoint of a Line Segment";

export const blocks = () => [
  intro({
    icon: "📍",
    title: "Midpoint of a Line Segment",
    overview: String.raw`The midpoint of a segment is the point exactly halfway between its endpoints. On a grid you find it by averaging: the average of the \(x\)-coordinates and the average of the \(y\)-coordinates. In this lesson you will develop the midpoint formula, use it backwards to find a missing endpoint, and apply it to circles and quadrilaterals. Midpoints are the starting point for medians and right bisectors later in the chapter.`,
    goals: [
      "develop the midpoint formula by averaging coordinates;",
      "find the midpoint of a segment, including fractional answers;",
      "find a missing endpoint from one endpoint and the midpoint;",
      "use midpoints to find the centre of a circle from a diameter;",
      "use midpoints to test whether two segments bisect each other.",
    ],
    curriculum: "AG2 (develop the formula for the midpoint of a line segment, and use it to solve problems)",
    prior: [
      [String.raw`Average of \(-3\) and \(9\)?`, String.raw`\(\frac{-3+9}{2}=3\).`],
      [String.raw`What number is halfway between \(-7\) and \(-1\)?`, String.raw`\(-4\).`],
      [String.raw`Plot \((2,-3)\): which quadrant?`, "Quadrant IV."],
    ],
    words: [
      ["Line segment", "the part of a line between two endpoints", "\\(AB\\)"],
      ["Midpoint", "the point that divides a segment into two equal parts", "\\(M\\)"],
      ["Bisect", "cut into two equal parts", ""],
      ["Diameter", "a chord through the centre of a circle", ""],
    ],
  }),

  section("📌 Halfway is an average", String.raw`
  <p>On a number line, the point halfway between \(2\) and \(8\) is \(5=\frac{2+8}{2}\). On a grid the same idea works in each direction separately: halfway across and halfway up.</p>
  ${plane({ view: { xmin: -2, xmax: 10, ymin: -2, ymax: 8 }, segs: [{ pts: [[0, 1], [8, 7]], color: "violet" }, { pts: [[0, 1], [4, 1], [4, 4]], color: "gray" }], points: [{ x: 0, y: 1, label: "A(0, 1)", color: "blue" }, { x: 8, y: 7, label: "B(8, 7)", color: "red" }, { x: 4, y: 4, label: "M(4, 4)", color: "green" }], step: { x: 1, y: 1 } }, "From A, M is 4 across and 3 up — half of the 8 across and 6 up to B.")}
  ${keyIdea(String.raw`The midpoint of the segment from \((x_1,y_1)\) to \((x_2,y_2)\) is \[M=\left(\frac{x_1+x_2}{2},\ \frac{y_1+y_2}{2}\right).\] The order of the endpoints does not matter.`)}`),

  section("📌 Explore", String.raw`<p>Move A and B and watch the midpoint. Then switch to <em>find a missing endpoint</em>: fix A and M, and the explorer finds B by repeating the step from A to M.</p>`),

  widget("midpointLab", { init: [-6, -2, 4, 6] }),

  section("📌 Working backwards", String.raw`
  <p>If you know an endpoint \(A\) and the midpoint \(M\), the other endpoint is as far past \(M\) as \(A\) is before it: \[x_B=2x_M-x_A,\qquad y_B=2y_M-y_A.\] A quick check: the step from \(A\) to \(M\) must equal the step from \(M\) to \(B\).</p>
  <p><strong>Where midpoints appear:</strong> the centre of a circle is the midpoint of any diameter; the diagonals of a parallelogram bisect each other (same midpoint); a median of a triangle joins a vertex to the midpoint of the opposite side (2.4).</p>
  ${watchOut([
    "Add the coordinates, then divide by 2 — not subtract.",
    "Keep signs: the average of −5 and 2 is −3/2, not 7/2.",
    "Leave fractional midpoints as fractions or decimals; do not round to a grid point.",
    "For a missing endpoint, double the midpoint and subtract the known endpoint.",
  ])}`),

  examples([
    ["Midpoint with negative coordinates", String.raw`Find the midpoint of \(P(-3,5)\) and \(Q(7,-1)\).`,
      [String.raw`\(x=\frac{-3+7}{2}=\frac42=2\).`, String.raw`\(y=\frac{5+(-1)}{2}=\frac42=2\).`],
      String.raw`\(M(2,2)\)`,
      plane({ view: { xmin: -5, xmax: 9, ymin: -3, ymax: 7 }, segs: [{ pts: [[-3, 5], [7, -1]], color: "violet" }], points: [{ x: -3, y: 5, label: "P(−3, 5)", color: "blue" }, { x: 7, y: -1, label: "Q(7, −1)", color: "red" }, { x: 2, y: 2, label: "M(2, 2)", color: "green" }], step: { x: 1, y: 1 } })],
    ["A fractional midpoint", String.raw`Find the midpoint of \(A(-4,3)\) and \(B(1,-6)\).`,
      [String.raw`\(x=\frac{-4+1}{2}=-\frac32\).`, String.raw`\(y=\frac{3+(-6)}{2}=-\frac32\).`],
      String.raw`\(M\left(-\tfrac32,-\tfrac32\right)=(-1.5,-1.5)\)`],
    ["A missing endpoint", String.raw`\(M(-1,1)\) is the midpoint of \(AB\), where \(A(2,-5)\). Find \(B\).`,
      [String.raw`\(x_B=2(-1)-2=-4\).`, String.raw`\(y_B=2(1)-(-5)=7\).`, String.raw`Check: \(\left(\frac{2+(-4)}{2},\frac{-5+7}{2}\right)=(-1,1)\) ✓`],
      String.raw`\(B(-4,7)\)`],
    ["Centre of a circle", String.raw`The endpoints of a diameter of a circle are \((-6,2)\) and \((4,-8)\). Find the centre.`,
      [String.raw`The centre is the midpoint of the diameter.`, String.raw`\(\left(\frac{-6+4}{2},\frac{2+(-8)}{2}\right)=(-1,-3)\).`],
      String.raw`centre \((-1,-3)\)`],
    ["Do the diagonals bisect each other?", String.raw`Quadrilateral \(PQRS\) has \(P(-3,-2)\), \(Q(5,0)\), \(R(7,6)\), \(S(-1,4)\). Do its diagonals bisect each other?`,
      [String.raw`Midpoint of \(PR\): \(\left(\frac{-3+7}{2},\frac{-2+6}{2}\right)=(2,2)\).`, String.raw`Midpoint of \(QS\): \(\left(\frac{5+(-1)}{2},\frac{0+4}{2}\right)=(2,2)\).`, "Same point, so each diagonal cuts the other in half — PQRS is a parallelogram."],
      String.raw`yes — both diagonals have midpoint \((2,2)\)`,
      plane({ view: { xmin: -5, xmax: 9, ymin: -4, ymax: 8 }, segs: [{ pts: [[-3, -2], [5, 0], [7, 6], [-1, 4], [-3, -2]], color: "green" }, { pts: [[-3, -2], [7, 6]], color: "gray" }, { pts: [[5, 0], [-1, 4]], color: "gray" }], points: [{ x: 2, y: 2, label: "(2, 2)", color: "red" }], step: { x: 1, y: 1 } })],
  ]),

  practice([
    q("midpoint", String.raw`What is the \(x\)-coordinate of the midpoint of \((-8,3)\) and \((2,9)\)?`, num(-3),
      "Average the x-coordinates.", [String.raw`\(\frac{-8+2}{2}=-3\).`], String.raw`\(-3\)`),
    q("midpoint", String.raw`What is the \(y\)-coordinate of the midpoint of \((-8,3)\) and \((2,9)\)?`, num(6),
      "Average the y-coordinates.", [String.raw`\(\frac{3+9}{2}=6\).`], String.raw`\(6\)`),
    q("endpoint", String.raw`\(M(3,-2)\) is the midpoint of \(AB\) with \(A(7,1)\). What is the \(x\)-coordinate of \(B\)?`, num(-1),
      "Double the midpoint, subtract the known endpoint.", [String.raw`\(2(3)-7=-1\).`], String.raw`\(-1\)`),
    q("circle", String.raw`A diameter of a circle joins \((-5,4)\) and \((3,-2)\). What is the \(y\)-coordinate of the centre?`, num(1),
      "The centre is the midpoint of a diameter.", [String.raw`\(\frac{4+(-2)}{2}=1\).`], String.raw`\(1\)`),
    q("midpoint", String.raw`Which point is the midpoint of \((0,0)\) and \((6,-4)\)?`, choice(["(3, −2)", "(6, −4)", "(−3, 2)", "(3, 2)"], 0),
      "Half of each coordinate.", [String.raw`\(\left(\frac62,\frac{-4}{2}\right)\).`], String.raw`\((3,-2)\)`),
  ]),

  wrapUp({
    qas: [
      ["Does it matter which point I call \((x_1,y_1)\)?", "No. Addition does not depend on order, so either endpoint can be first."],
      ["Can a midpoint have fractions?", "Yes. If the sum of the coordinates is odd, the midpoint has a half, such as −3/2. That is an exact answer."],
      ["How do I check a missing endpoint?", "Find the midpoint of the known endpoint and your answer. You should get the given midpoint back."],
      ["Why is the centre of a circle the midpoint of a diameter?", "A diameter passes through the centre, and the centre is the same distance (the radius) from both ends."],
      ["What does it mean if two diagonals have the same midpoint?", "They bisect each other. A quadrilateral whose diagonals bisect each other is a parallelogram."],
    ],
    summary: [
      "Midpoint = average of the x-coordinates, average of the y-coordinates.",
      "Missing endpoint: x_B = 2x_M − x_A and y_B = 2y_M − y_A.",
      "The centre of a circle is the midpoint of a diameter.",
      "Diagonals with the same midpoint bisect each other.",
    ],
    next: "2.2 measures the length of a segment with the distance formula.",
  }),
];
