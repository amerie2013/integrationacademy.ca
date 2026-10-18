// MPM2D 5.2 — Completing the Square (solving): square-root principle with ±, (x − h)² = k, completing the
// square to solve, exact and approximate roots, dividing out an even common factor, no real roots, zeros from vertex form
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, q, roots, rootsT } from "./lib.mjs";
import { plane } from "../mth1w-ch4/figs4.mjs";

export const TITLE = "5.2 Completing the Square";

export const blocks = () => [
  intro({
    icon: "🟦",
    title: "Solving by Completing the Square",
    overview: String.raw`Many quadratic equations do not factor with integers. If the equation can be written as a square equal to a number, like \((x-2)^2=7\), you can take the square root of both sides — remembering that both \(+\sqrt7\) and \(-\sqrt7\) square to \(7\). Completing the square (from 4.6) turns any \(x^2+bx+c=0\) into that shape. In this lesson you will solve equations this way, give exact and decimal roots, and see when there are no real roots.`,
    goals: [
      "solve x² = k and (x − h)² = k using ± square roots;",
      "solve x² + bx + c = 0 by completing the square;",
      "write roots exactly (with square roots) and as decimals;",
      "recognise when a square equals a negative number (no real roots);",
      "find the zeros of a parabola given in vertex form.",
    ],
    curriculum: "QR3 (solve quadratic equations; complete the square for x² + bx + c with b even; determine zeros from vertex form)",
    prior: [
      [String.raw`Complete the square: \(x^2+6x+\square=(x+\square)^2\).`, String.raw`\(9\); \(x+3\).`],
      [String.raw`\(\sqrt{49}=\)?`, String.raw`\(7\).`],
      [String.raw`Which numbers square to \(25\)?`, String.raw`\(5\) and \(-5\).`],
    ],
    words: [
      ["Square-root principle", "if \\(X^2=k\\) with \\(k\\ge0\\), then \\(X=\\pm\\sqrt k\\)", "\\(x^2=9\\Rightarrow x=\\pm3\\)"],
      ["Perfect-square trinomial", "\\(x^2+2px+p^2=(x+p)^2\\)", "\\(x^2-8x+16=(x-4)^2\\)"],
      ["Exact root", "written with square roots, not rounded", "\\(2+\\sqrt7\\)"],
      ["Irrational root", "a root that is not a fraction", "\\(\\sqrt7\\approx2.65\\)"],
    ],
  }),

  section("📌 Taking square roots", String.raw`
  ${plane({ view: { xmin: -3, xmax: 7, ymin: -8, ymax: 10 }, curves: [{ f: (x) => (x - 2) ** 2 - 7, color: "violet" }], points: [{ x: 2 - Math.sqrt(7), y: 0, label: "2 − √7", color: "red" }, { x: 2 + Math.sqrt(7), y: 0, label: "2 + √7", color: "red" }, { x: 2, y: -7, label: "(2, −7)", color: "blue" }], step: { x: 1, y: 2 } }, "(x − 2)² = 7: the roots are 2 ± √7, about −0.65 and 4.65 — symmetric about the axis x = 2.")}
  ${keyIdea(String.raw`To solve by completing the square: (1) move the constant to the right; (2) add \(\left(\tfrac b2\right)^2\) to <em>both</em> sides; (3) write the left side as \((x+\tfrac b2)^2\); (4) take \(\pm\) square roots; (5) solve for \(x\). If the right side is negative, there are no real roots.`)}`),

  section("📌 Explore", String.raw`<p>Change \(b\) (through half of it) and \(c\). Watch the number on the right after completing the square: positive gives two roots, zero gives one, negative gives none.</p>`),

  widget("squareSolve", { init: [3, 2] }),

  section("📌 The ± matters", String.raw`
  <p>The parabola is symmetric, so its two zeros are the same distance from the axis — one on each side. That distance is the square root, which is why the roots are \(h\pm\sqrt k\).</p>
  ${watchOut([
    "x² = 16 has two roots, x = 4 and x = −4. Writing only 4 loses half the answer.",
    "Add (b/2)² to both sides, not just one.",
    "If a ≠ 1, divide every term by a first (here a will always divide evenly).",
    "√(x² + 9) is not x + 3: complete the square instead of taking roots term by term.",
    "A square can't be negative: (x + 1)² = −4 has no real roots.",
  ])}`),

  examples([
    ["Square-root principle", String.raw`Solve \((x+1)^2=36\).`,
      [String.raw`\(x+1=\pm6\).`, String.raw`\(x=-1+6=5\) or \(x=-1-6=-7\).`],
      String.raw`\(x=5\) or \(x=-7\)`],
    ["Complete the square (nice roots)", String.raw`Solve \(x^2+6x-7=0\) by completing the square.`,
      [String.raw`\(x^2+6x=7\).`, String.raw`Add \(3^2=9\): \(x^2+6x+9=16\), so \((x+3)^2=16\).`, String.raw`\(x+3=\pm4\Rightarrow x=1\) or \(x=-7\).`],
      String.raw`\(x=1\) or \(x=-7\)`],
    ["Irrational roots", String.raw`Solve \(x^2-4x-3=0\). Give exact roots and decimals to two places.`,
      [String.raw`\(x^2-4x=3\); add \(4\): \((x-2)^2=7\).`, String.raw`\(x-2=\pm\sqrt7\Rightarrow x=2\pm\sqrt7\).`, String.raw`\(\sqrt7\approx2.646\), so \(x\approx4.65\) or \(x\approx-0.65\).`],
      String.raw`\(x=2\pm\sqrt7\approx4.65,\ -0.65\)`,
      plane({ view: { xmin: -2, xmax: 6, ymin: -8, ymax: 6 }, curves: [{ f: (x) => x * x - 4 * x - 3, color: "violet" }], points: [{ x: 2 - Math.sqrt(7), y: 0, label: "≈ −0.65", color: "red" }, { x: 2 + Math.sqrt(7), y: 0, label: "≈ 4.65", color: "red" }], step: { x: 1, y: 2 } })],
    ["Divide first, then a case with no roots", String.raw`Solve (a) \(2x^2+12x+10=0\) and (b) \(x^2+2x+5=0\).`,
      [String.raw`(a) Divide by \(2\): \(x^2+6x+5=0\Rightarrow(x+3)^2=4\Rightarrow x+3=\pm2\): \(x=-1\) or \(x=-5\).`, String.raw`(b) \(x^2+2x=-5\Rightarrow(x+1)^2=-4\).`, String.raw`No real number squares to \(-4\): no real roots.`],
      String.raw`(a) \(x=-1\) or \(x=-5\); (b) no real roots`,
      plane({ view: { xmin: -5, xmax: 3, ymin: -2, ymax: 12 }, curves: [{ f: (x) => x * x + 2 * x + 5, color: "violet" }], points: [{ x: -1, y: 4, label: "(−1, 4)", color: "blue" }], step: { x: 1, y: 2 } })],
    ["Zeros from vertex form", String.raw`Find the zeros of \(y=-2(x-3)^2+18\).`,
      [String.raw`Set \(y=0\): \(-2(x-3)^2+18=0\Rightarrow(x-3)^2=9\).`, String.raw`\(x-3=\pm3\Rightarrow x=0\) or \(x=6\).`],
      String.raw`\(x=0\) and \(x=6\)`,
      plane({ view: { xmin: -2, xmax: 8, ymin: -4, ymax: 20 }, curves: [{ f: (x) => -2 * (x - 3) ** 2 + 18, color: "violet" }], points: [{ x: 0, y: 0, label: "(0, 0)", color: "red" }, { x: 6, y: 0, label: "(6, 0)", color: "red" }, { x: 3, y: 18, label: "(3, 18)", color: "blue" }], step: { x: 1, y: 2 } })],
  ]),

  practice([
    q("square root", String.raw`Solve \(x^2=49\).`, roots(7, -7),
      "Two numbers square to 49.", [String.raw`\(x=\pm\sqrt{49}\).`], String.raw`\(x=\pm7\)`),
    q("(x − h)² = k", String.raw`Solve \((x+2)^2=25\).`, roots(3, -7),
      "x + 2 = ±5.", [String.raw`\(x=-2\pm5\).`], String.raw`\(x=3\) or \(x=-7\)`),
    q("irrational", String.raw`Solve \(x^2-8x+11=0\) by completing the square. Give both roots to two decimal places.`, rootsT(0.01, 4 + Math.sqrt(5), 4 - Math.sqrt(5)),
      "Add 16 to both sides after moving 11.", [String.raw`\(x^2-8x=-11\Rightarrow(x-4)^2=5\).`, String.raw`\(x=4\pm\sqrt5\).`], String.raw`\(x=4\pm\sqrt5\), about \(6.24\) and \(1.76\)`),
    q("no real roots", String.raw`Solve \(x^2+4x+9=0\). (Type “no real roots” if there are none.)`, roots(),
      "Complete the square and look at the sign.", [String.raw`\(x^2+4x=-9\Rightarrow(x+2)^2=-5\).`, "A square can't be negative."], "no real roots"),
    q("vertex form", String.raw`Find the zeros of \(y=3(x-1)^2-12\).`, roots(3, -1),
      "Set y = 0 and isolate the square.", [String.raw`\((x-1)^2=4\Rightarrow x-1=\pm2\).`], String.raw`\(x=3\) or \(x=-1\)`),
  ]),

  wrapUp({
    qas: [
      ["Why do we need ±?", "Both a number and its opposite square to the same positive value. The two roots are the two points on the parabola, one on each side of the axis."],
      ["When should I complete the square instead of factoring?", "When the trinomial does not factor with integers but b is even (after dividing by a). If b is odd or a doesn't divide evenly, the quadratic formula (5.3) is easier."],
      ["Do I need exact roots or decimals?", "Exact roots (like 2 ± √7) are precise; decimals are for measurements and graphs. Give exact unless the question asks you to round."],
      ["What does a negative number on the right mean?", "No real roots: the parabola does not reach the x-axis. 5.4 explains how to predict this without solving."],
      ["How is this connected to vertex form?", "Completing the square gives (x − h)² = k, which is vertex form set to 0. The roots are h ± √k, where h is the axis of symmetry."],
    ],
    summary: [
      "X² = k with k ≥ 0 gives X = ±√k.",
      "Complete the square: add (b/2)² to both sides.",
      "Exact roots h ± √k; round only at the end.",
      "Square = negative → no real roots.",
    ],
    next: "5.3 completes the square once for every equation — and gets the quadratic formula.",
  }),
];
