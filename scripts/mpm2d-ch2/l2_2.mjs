// MPM2D 2.2 — Length of a Line Segment (self-study format): the distance formula from the Pythagorean theorem,
// horizontal and vertical segments, exact and decimal lengths, perimeters, comparing distances, unknown coordinates
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, q, num, choice } from "./lib.mjs";
import { plane } from "../mth1w-ch4/figs4.mjs";

export const TITLE = "2.2 Length of a Line Segment";

export const blocks = () => [
  intro({
    icon: "📏",
    title: "Length of a Line Segment",
    overview: String.raw`How far apart are two points on a grid? If the segment is slanted, you cannot just count squares — but the horizontal and vertical gaps form the legs of a right triangle, and the segment is its hypotenuse. The Pythagorean theorem then gives the length. In this lesson you will develop the distance formula, give exact and decimal lengths, and use lengths to find perimeters, compare distances and find unknown coordinates.`,
    goals: [
      "develop the formula for the length of a segment from the Pythagorean theorem;",
      "find lengths of horizontal, vertical and slanted segments;",
      "give lengths exactly (with a square root) and as decimals;",
      "use lengths to find perimeters and decide which point is closer;",
      "find an unknown coordinate from a given length.",
    ],
    curriculum: "AG2 (develop the formula for the length of a line segment, and use it to solve problems)",
    prior: [
      [String.raw`Legs \(6\) and \(8\): hypotenuse?`, String.raw`\(\sqrt{36+64}=10\).`],
      [String.raw`\((-3)^2=\)?`, String.raw`\(9\).`],
      [String.raw`\(\sqrt{50}\approx\)?`, String.raw`\(7.07\).`],
    ],
    words: [
      ["Run, Δx", "horizontal change \\(x_2-x_1\\)", ""],
      ["Rise, Δy", "vertical change \\(y_2-y_1\\)", ""],
      ["Hypotenuse", "the side opposite the right angle", ""],
      ["Exact value", "an answer kept as a square root", "\\(\\sqrt{52}\\)"],
    ],
  }),

  section("📌 From Pythagoras to a formula", String.raw`
  <p>Draw the horizontal and vertical legs from \(A(x_1,y_1)\) to \(B(x_2,y_2)\). The legs have lengths \(|x_2-x_1|\) and \(|y_2-y_1|\), so by the Pythagorean theorem:</p>
  ${plane({ view: { xmin: -1, xmax: 8, ymin: -1, ymax: 7 }, segs: [{ pts: [[1, 1], [7, 1]], color: "blue" }, { pts: [[7, 1], [7, 6]], color: "red" }, { pts: [[1, 1], [7, 6]], color: "violet" }], points: [{ x: 1, y: 1, label: "A(1, 1)", color: "blue" }, { x: 7, y: 6, label: "B(7, 6)", color: "red" }], step: { x: 1, y: 1 } }, "Run 6, rise 5: AB = √(36 + 25) = √61 ≈ 7.81.")}
  ${keyIdea(String.raw`The length of the segment from \((x_1,y_1)\) to \((x_2,y_2)\) is \[d=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}.\] Squaring makes negative differences positive, so the order of the points does not matter.`)}
  <p>For a horizontal segment the length is the difference of the \(x\)-coordinates; for a vertical one, the difference of the \(y\)-coordinates. No formula is needed.</p>`),

  section("📌 Explore", String.raw`<p>Move the points. The dashed legs show the run and the rise; the readout builds the length step by step and shows it exactly and as a decimal.</p>`),

  widget("distanceLab", { init: [-5, -3, 3, 3] }),

  section("📌 Exact or decimal?", String.raw`
  <p>\(\sqrt{61}\) is exact; \(7.81\) is rounded. Keep the exact value while you work, and round only at the end (to the accuracy the question asks for). You may also simplify a square root by taking out a perfect square, e.g. \(\sqrt{52}=\sqrt{4\cdot13}=2\sqrt{13}\) — both forms are correct.</p>
  ${watchOut([
    "Square each difference before adding: (−4)² = 16, not −16.",
    "√(a² + b²) is not a + b: √(9 + 16) = 5, not 7.",
    "Subtract in the same order for x and for y.",
    "Round only the final answer.",
  ])}`),

  examples([
    ["A whole-number length", String.raw`Find the length of the segment from \((-2,1)\) to \((4,9)\).`,
      [String.raw`\(\Delta x=4-(-2)=6\), \(\Delta y=9-1=8\).`, String.raw`\(d=\sqrt{6^2+8^2}=\sqrt{100}=10\).`],
      String.raw`\(10\) units`],
    ["An exact and a decimal length", String.raw`Find the length of \(AB\) with \(A(3,-4)\) and \(B(-1,2)\).`,
      [String.raw`\(\Delta x=-1-3=-4\), \(\Delta y=2-(-4)=6\).`, String.raw`\(d=\sqrt{(-4)^2+6^2}=\sqrt{16+36}=\sqrt{52}\).`, String.raw`\(\sqrt{52}=2\sqrt{13}\approx7.21\).`],
      String.raw`\(\sqrt{52}=2\sqrt{13}\approx7.21\) units`],
    ["Perimeter of a triangle", String.raw`Find the perimeter of \(\triangle ABC\) with \(A(-3,-1)\), \(B(5,-1)\), \(C(1,5)\).`,
      [String.raw`\(AB\) is horizontal: \(5-(-3)=8\).`, String.raw`\(BC=\sqrt{(1-5)^2+(5-(-1))^2}=\sqrt{16+36}=\sqrt{52}\).`, String.raw`\(CA=\sqrt{(-3-1)^2+(-1-5)^2}=\sqrt{16+36}=\sqrt{52}\).`, String.raw`Perimeter \(=8+2\sqrt{52}\approx8+14.42=22.42\). (Two equal sides: the triangle is isosceles.)`],
      String.raw`\(\approx22.42\) units`,
      plane({ view: { xmin: -5, xmax: 7, ymin: -3, ymax: 7 }, segs: [{ pts: [[-3, -1], [5, -1], [1, 5], [-3, -1]], color: "violet" }], points: [{ x: -3, y: -1, label: "A", color: "blue" }, { x: 5, y: -1, label: "B", color: "blue" }, { x: 1, y: 5, label: "C", color: "blue" }], step: { x: 1, y: 1 } })],
    ["Which point is closer?", String.raw`Is \(P(4,-3)\) closer to \(A(1,1)\) or to \(B(9,-1)\)?`,
      [String.raw`\(PA=\sqrt{(1-4)^2+(1-(-3))^2}=\sqrt{9+16}=5\).`, String.raw`\(PB=\sqrt{(9-4)^2+(-1-(-3))^2}=\sqrt{25+4}=\sqrt{29}\approx5.39\).`],
      String.raw`closer to \(A\) (\(5<5.39\))`],
    ["An unknown coordinate", String.raw`The distance from \((1,k)\) to \((4,2)\) is \(5\). Find \(k\).`,
      [String.raw`\((4-1)^2+(2-k)^2=25\Rightarrow9+(2-k)^2=25\).`, String.raw`\((2-k)^2=16\Rightarrow2-k=4\) or \(2-k=-4\).`, String.raw`\(k=-2\) or \(k=6\). Both points are \(5\) units away — one above, one below.`],
      String.raw`\(k=-2\) or \(k=6\)`],
  ]),

  practice([
    q("length", String.raw`Find the length of the segment from \((0,0)\) to \((5,12)\).`, num(13),
      "Use the distance formula.", [String.raw`\(\sqrt{25+144}=\sqrt{169}\).`], String.raw`\(13\)`),
    q("length", String.raw`Find the length of the segment from \((-3,2)\) to \((3,-6)\).`, num(10),
      "Δx = 6, Δy = −8.", [String.raw`\(\sqrt{36+64}=\sqrt{100}\).`], String.raw`\(10\)`),
    q("decimal", String.raw`Find the length from \((-1,-2)\) to \((2,4)\), to two decimal places.`, num(6.71, 0.01),
      "Δx = 3, Δy = 6.", [String.raw`\(\sqrt{9+36}=\sqrt{45}\approx6.708\).`], String.raw`\(6.71\)`),
    q("horizontal", String.raw`Find the length of the segment from \((-7,3)\) to \((5,3)\).`, num(12),
      "It is horizontal.", [String.raw`\(5-(-7)=12\).`], String.raw`\(12\)`),
    q("compare", String.raw`Which is longer: \(AB\) with \(A(0,0)\), \(B(4,4)\), or \(CD\) with \(C(1,1)\), \(D(7,1)\)?`, choice(["CD", "AB", "they are equal", "cannot tell"], 0),
      "Find both lengths.", [String.raw`\(AB=\sqrt{32}\approx5.66\); \(CD=6\).`], String.raw`\(CD\)`),
  ]),

  wrapUp({
    qas: [
      ["Why does the formula use squares?", "It is the Pythagorean theorem: the run and rise are the legs of a right triangle and the segment is the hypotenuse."],
      ["Can a length be negative?", "No. The differences may be negative, but squaring makes them positive, and the square root is never negative."],
      ["Should I simplify square roots?", "An exact answer like √52 is fine; 2√13 is the same number. Give a decimal when the question asks or when comparing lengths."],
      ["How is length different from slope?", "Slope compares rise to run (a ratio, with a sign); length combines them with Pythagoras (always positive)."],
      ["Why were there two answers in Example 5?", "Points 5 units from (4, 2) form a circle. The vertical line x = 1 crosses that circle twice."],
    ],
    summary: [
      "d = √((x₂ − x₁)² + (y₂ − y₁)²): Pythagoras on the grid.",
      "Horizontal or vertical segment: subtract the changing coordinate.",
      "Keep exact values; round only at the end.",
      "Lengths classify triangles and compare distances.",
    ],
    next: "2.3 uses the length formula to find the equation of a circle.",
  }),
];
