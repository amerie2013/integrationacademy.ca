// MTH1W 5.4 — The Pythagorean Theorem (self-study format): hypotenuse, legs, converse, distance, 3-D diagonals
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice } from "./lib.mjs";
import { fig, rightTri, prism } from "./figs5.mjs";
import { plane } from "../mth1w-ch4/figs4.mjs";

export const TITLE = "5.4 The Pythagorean Theorem";

export const blocks = () => [
  intro({
    icon: "📐",
    title: "The Pythagorean Theorem",
    overview: String.raw`In a right triangle the three sides are linked by one equation: \(a^2+b^2=c^2\). With it you can find a missing side from the other two, test whether a corner is square, find the distance between two points on a grid and even the longest rod that fits in a box. You will see why it works, practise both directions (hypotenuse and leg), and use the converse to check right angles.`,
    goals: [
      "identify the hypotenuse and legs of a right triangle;",
      "use \\(a^2+b^2=c^2\\) to find the hypotenuse, and rearrange it to find a leg;",
      "use the converse to decide whether a triangle is right, acute or obtuse;",
      "find the distance between two points on a coordinate grid;",
      "solve multi-step problems, including diagonals of rectangles and boxes.",
    ],
    curriculum: "E1.5 (solve problems involving the Pythagorean theorem)",
    book: "Nelson Principles of Mathematics 9, Ch. 8 Measurement (Getting Started: the Pythagorean theorem; 8.4 slant heights)",
    prior: [
      [String.raw`Evaluate \(\sqrt{169}\).`, String.raw`\(13\).`],
      [String.raw`Between which two whole numbers is \(\sqrt{50}\)?`, String.raw`\(7\) and \(8\) (\(49<50<64\)).`],
      [String.raw`Solve \(x^2=81\), \(x>0\).`, String.raw`\(x=9\).`],
    ],
    words: [
      ["Hypotenuse", "the longest side, opposite the right angle", "\\(c\\)"],
      ["Legs", "the two sides that form the right angle", "\\(a, b\\)"],
      ["Pythagorean triple", "three whole numbers with \\(a^2+b^2=c^2\\)", "3, 4, 5; 5, 12, 13"],
      ["Converse", "the statement reversed: if \\(a^2+b^2=c^2\\), the angle is 90°", ""],
      ["Distance between points", "the hypotenuse of the run-rise triangle", "\\(\\sqrt{\\Delta x^2+\\Delta y^2}\\)"],
    ],
  }),

  section("📌 The theorem", String.raw`
  ${fig({ w: 300, items: rightTri(4, 3, { la: "a (leg)", lb: "b (leg)", lc: "c (hypotenuse)" }) })}
  ${keyIdea(String.raw`In a right triangle with legs \(a\), \(b\) and hypotenuse \(c\): \(\;a^2+b^2=c^2\). The hypotenuse is always the longest side and is always alone on one side of the equation.`)}
  <p><strong>Why it works.</strong> Put four copies of the triangle inside a square of side \(a+b\). The hole in the middle is a square of side \(c\). Rearranging the four triangles leaves two holes, squares of sides \(a\) and \(b\). The same space is left over both times, so \(c^2=a^2+b^2\).</p>
  ${table(["Find", "Formula", "Remember"], [
    ["hypotenuse", "\\(c=\\sqrt{a^2+b^2}\\)", "add the squares"],
    ["a leg", "\\(a=\\sqrt{c^2-b^2}\\)", "subtract from the hypotenuse squared"],
  ])}`),

  widget("pythagoras"),

  section("📌 The converse: is the corner square?", String.raw`
  <p>Let \(c\) be the longest side. Compare \(a^2+b^2\) with \(c^2\):</p>
  ${table(["Result", "Triangle", "Angle opposite c"], [["\\(a^2+b^2=c^2\\)", "right", "exactly 90°"], ["\\(a^2+b^2>c^2\\)", "acute", "less than 90°"], ["\\(a^2+b^2<c^2\\)", "obtuse", "more than 90°"]])}
  <p>Builders use this to check a corner: measure \(3\) ft along one wall, \(4\) ft along the other, and the diagonal must be exactly \(5\) ft.</p>`),

  section("📌 Distance on a grid", String.raw`
  <p>The segment joining two points is the hypotenuse of a right triangle whose legs are the run \(\Delta x\) and the rise \(\Delta y\).</p>
  ${plane({ view: { xmin: -4, xmax: 6, ymin: -1, ymax: 10 }, segs: [{ pts: [[-2, 1], [4, 9]], color: "violet" }], tri: { x: -2, y: 1, run: 6, rise: 8 }, points: [{ x: -2, y: 1, label: "(−2, 1)" }, { x: 4, y: 9, label: "(4, 9)" }], step: { x: 1, y: 1 } }, "Run 6, rise 8, so the distance is √(36 + 64) = 10.")}
  ${watchOut([
    "Add squares only when finding the hypotenuse; subtract when finding a leg.",
    String.raw`\(\sqrt{a^2+b^2}\) is <strong>not</strong> \(a+b\): \(\sqrt{9+16}=5\), not \(7\).`,
    "The theorem only works in right triangles.",
    "Check: the hypotenuse must come out longer than each leg.",
  ])}`),

  examples([
    ["A ladder (finding a leg)", String.raw`A \(6.5\) m ladder leans against a wall with its foot \(2.5\) m from the wall. How high up the wall does it reach?`,
      [String.raw`The ladder is the hypotenuse: \(h^2+2.5^2=6.5^2\).`, String.raw`\(h^2=42.25-6.25=36\).`, String.raw`\(h=\sqrt{36}=6\).`],
      String.raw`\(6\) m`,
      fig({ w: 220, items: rightTri(2.5, 6, { la: "2.5 m", lb: "h", lc: "6.5 m", fill: "amber" }) })],
    ["A TV screen (finding the hypotenuse)", String.raw`A screen is \(104\) cm wide and \(58.5\) cm high. TVs are sold by their diagonal in inches. Find the diagonal in cm and in inches.`,
      [String.raw`\(d^2=104^2+58.5^2=10\,816+3422.25=14\,238.25\).`, String.raw`\(d=\sqrt{14\,238.25}\approx119.3\) cm.`, String.raw`\(119.3\div2.54\approx47\) in.`],
      String.raw`about \(119\) cm, a \(47\)-inch TV`],
    ["The converse", String.raw`A carpenter measures the sides of two triangular frames: (a) \(9, 12, 15\) and (b) \(7, 9, 12\). Which frame has a right angle?`,
      [String.raw`(a) \(9^2+12^2=81+144=225=15^2\): right.`, String.raw`(b) \(7^2+9^2=49+81=130\) and \(12^2=144\); \(130<144\): obtuse.`],
      "(a) is right-angled; (b) is obtuse"],
    ["Distance between points", String.raw`Find the distance between \((-2, 1)\) and \((4, 9)\).`,
      [String.raw`Run \(=4-(-2)=6\); rise \(=9-1=8\).`, String.raw`\(d=\sqrt{6^2+8^2}=\sqrt{100}=10\).`],
      String.raw`\(10\) units`],
    ["The longest rod in a box", String.raw`A box is \(3\) cm by \(4\) cm by \(12\) cm. Find the length of the longest straight rod that fits inside (corner to opposite corner).`,
      [String.raw`Diagonal of the \(3\times4\) base: \(\sqrt{3^2+4^2}=5\).`, String.raw`That diagonal and the height \(12\) are the legs of a second right triangle: \(\sqrt{5^2+12^2}=\sqrt{169}=13\).`],
      String.raw`\(13\) cm`,
      fig({ w: 260, items: [...prism(4, 3, 12, { ll: "4", lw: "3", lh: "12" }), { seg: [[0, 0], [4 + 3 * 0.45, 12 + 3 * 0.32]], color: "red", width: 2.4 }] })],
  ]),

  practice([
    q("hypotenuse", String.raw`The legs of a right triangle are \(9\) and \(40\). Find the hypotenuse.`, num(41),
      "Add the squares, then take the square root.", [String.raw`\(81+1600=1681\); \(\sqrt{1681}=41\).`], String.raw`\(41\)`),
    q("leg", String.raw`A right triangle has hypotenuse \(25\) and one leg \(7\). Find the other leg.`, num(24),
      "Subtract: c² − a².", [String.raw`\(625-49=576\); \(\sqrt{576}=24\).`], String.raw`\(24\)`),
    q("ramp", String.raw`A wheelchair ramp rises \(0.4\) m over a horizontal distance of \(4.8\) m. How long is the ramp surface (to the nearest hundredth of a metre)?`, num(4.82, 0.006),
      "The ramp is the hypotenuse.", [String.raw`\(\sqrt{4.8^2+0.4^2}=\sqrt{23.2}\approx4.817\).`], String.raw`\(\approx4.82\) m`),
    q("converse", String.raw`Do the side lengths \(20\), \(21\) and \(29\) form a right triangle?`, choice(["yes", "no — acute", "no — obtuse"], 0),
      "Compare 20² + 21² with 29².", [String.raw`\(400+441=841=29^2\).`], "yes"),
    q("diagonal", String.raw`Find the length of a diagonal of an \(8\) cm by \(15\) cm rectangle.`, num(17),
      "The diagonal is the hypotenuse of a right triangle with legs 8 and 15.", [String.raw`\(64+225=289\); \(\sqrt{289}=17\).`], String.raw`\(17\) cm`),
  ]),

  wrapUp({
    qas: [
      ["How do I know which side is the hypotenuse?", "It is opposite the right angle and it is always the longest side. In a word problem it is usually the slanted object: the ladder, the ramp, the diagonal."],
      ["Why can't I just add the legs?", "Because squaring is not linear. The squares add, not the lengths: legs 3 and 4 give a hypotenuse of 5, not 7."],
      ["What if the answer is not a whole number?", "Leave it as a square root for an exact answer (√50), or round to a sensible number of decimal places for a measurement (7.07)."],
      ["Does the theorem work for any triangle?", "Only for right triangles. For other triangles, a² + b² is bigger (acute) or smaller (obtuse) than c²."],
      ["Where else does it appear in this chapter?", "Slant heights of cones and pyramids (5.8), diagonals for composite shapes, and distances on a grid."],
    ],
    summary: [
      "a² + b² = c², with c the hypotenuse (longest side).",
      "Hypotenuse: add the squares. Leg: subtract from c².",
      "Converse: a² + b² = c² ⇒ right angle; > acute; < obtuse.",
      "Distance between points: √(run² + rise²).",
    ],
    next: "5.5 investigates how changing dimensions changes the perimeter.",
  }),
];
