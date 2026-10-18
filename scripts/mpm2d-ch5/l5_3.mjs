// MPM2D 5.3 — The Quadratic Formula (self-study format): where the formula comes from (completing the square
// in general), rational and irrational roots, rearranging first, a decimal model, and no real roots
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, q, roots, rootsT } from "./lib.mjs";
import { plane } from "../mth1w-ch4/figs4.mjs";

export const TITLE = "5.3 The Quadratic Formula";

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "🧮",
    title: "The Quadratic Formula",
    overview: S`Completing the square works for every quadratic equation, but the arithmetic gets messy when \(a\ne1\) or \(b\) is odd. If you complete the square once on the general equation \(ax^2+bx+c=0\), you get a formula that solves them all: \(x=\dfrac{-b\pm\sqrt{b^2-4ac}}{2a}\). In this lesson you will see where it comes from, use it carefully with negative coefficients, give exact and rounded roots, and apply it to a model with decimals.`,
    goals: [
      "follow the development of the quadratic formula by completing the square;",
      "identify a, b and c after writing the equation in standard form;",
      "use the formula to find exact and approximate roots;",
      "solve equations with decimal coefficients from a model;",
      "recognise from the formula when there are no real roots.",
    ],
    curriculum: "QR3 (explore the algebraic development of the quadratic formula; solve quadratic equations using the quadratic formula); QR4 (solve problems)",
    prior: [
      [S`In \(3x^2-x-4=0\), what are \(a\), \(b\), \(c\)?`, S`\(3\), \(-1\), \(-4\).`],
      [S`\((-5)^2-4(2)(-3)=\)?`, S`\(25+24=49\).`],
      [S`Simplify \(\sqrt{20}\).`, S`\(2\sqrt5\).`],
    ],
    words: [
      ["Quadratic formula", "\\(x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}\\)", ""],
      ["Standard form", "\\(ax^2+bx+c=0\\)", "\\(2x^2-5x-3=0\\)"],
      ["Discriminant", "\\(b^2-4ac\\), the part under the root", ""],
      ["Simplified radical", "no square factor left under the root", "\\(\\sqrt{12}=2\\sqrt3\\)"],
    ],
  }),

  section("📌 Where the formula comes from", S`
  <p>Complete the square on \(ax^2+bx+c=0\), exactly as in 5.2:</p>
  <ol style="line-height:2">
    <li>Divide by \(a\): \(x^2+\frac bax+\frac ca=0\), so \(x^2+\frac bax=-\frac ca\).</li>
    <li>Add \(\left(\frac{b}{2a}\right)^2\) to both sides: \(\left(x+\frac{b}{2a}\right)^2=\frac{b^2}{4a^2}-\frac ca=\frac{b^2-4ac}{4a^2}\).</li>
    <li>Square root: \(x+\frac{b}{2a}=\pm\frac{\sqrt{b^2-4ac}}{2a}\).</li>
    <li>Subtract \(\frac{b}{2a}\): \(x=\dfrac{-b\pm\sqrt{b^2-4ac}}{2a}\).</li>
  </ol>
  ${keyIdea(S`Write the equation as \(ax^2+bx+c=0\), list \(a\), \(b\), \(c\) <em>with their signs</em>, compute \(b^2-4ac\) first, then \(x=\dfrac{-b\pm\sqrt{b^2-4ac}}{2a}\). The \(\pm\) gives the two roots, symmetric about the axis \(x=-\frac{b}{2a}\).`)}`),

  section("📌 Explore", S`<p>Set \(a\), \(b\) and \(c\) and watch the substitution, the value under the root and the roots on the graph.</p>`),

  widget("formulaLab", { init: [2, -3, -5] }),

  section("📌 Careful with signs", S`
  ${plane({ view: { xmin: -5, xmax: 2, ymin: -6, ymax: 6 }, curves: [{ f: (x) => x * x + 4 * x - 1, color: "violet" }], points: [{ x: -2 - Math.sqrt(5), y: 0, label: "−2 − √5", color: "red" }, { x: -2 + Math.sqrt(5), y: 0, label: "−2 + √5", color: "red" }, { x: -2, y: -5, label: "axis x = −2", color: "blue" }], step: { x: 1, y: 1 } }, "The two roots are −2 ± √5: the same distance √5 on each side of the axis x = −b/(2a) = −2.")}
  ${watchOut([
    "If b is negative, −b is positive: for b = −5, −b = 5.",
    "Square b with brackets: (−3)² = 9, not −9.",
    "The fraction bar goes under everything: divide both −b and the square root by 2a.",
    "Rearrange to = 0 before reading a, b, c.",
    "Round only at the end; keep the exact value until then.",
  ])}`),

  examples([
    ["Rational roots", S`Solve \(2x^2-5x-3=0\).`,
      [S`\(a=2\), \(b=-5\), \(c=-3\).`, S`\(b^2-4ac=25+24=49\).`, S`\(x=\frac{5\pm7}{4}\): \(\frac{12}{4}=3\) or \(\frac{-2}{4}=-\frac12\).`],
      S`\(x=3\) or \(x=-\tfrac12\)`],
    ["Irrational roots", S`Solve \(x^2+4x-1=0\). Give exact roots and decimals.`,
      [S`\(b^2-4ac=16+4=20\), and \(\sqrt{20}=2\sqrt5\).`, S`\(x=\frac{-4\pm2\sqrt5}{2}=-2\pm\sqrt5\).`, S`\(x\approx0.24\) or \(x\approx-4.24\).`],
      S`\(x=-2\pm\sqrt5\approx0.24,\ -4.24\)`],
    ["Rearrange first", S`Solve \(3x^2=2x+4\) to two decimal places.`,
      [S`\(3x^2-2x-4=0\): \(a=3\), \(b=-2\), \(c=-4\).`, S`\(b^2-4ac=4+48=52\).`, S`\(x=\frac{2\pm\sqrt{52}}{6}\), with \(\sqrt{52}\approx7.211\): \(x\approx1.54\) or \(x\approx-0.87\).`],
      S`\(x\approx1.54\) or \(x\approx-0.87\)`],
    ["A model with decimals", S`A diver's height above the water is \(h=-4.9t^2+15t+2\) metres after \(t\) seconds. When does she enter the water?`,
      [S`Solve \(-4.9t^2+15t+2=0\): \(b^2-4ac=225+39.2=264.2\).`, S`\(t=\frac{-15\pm\sqrt{264.2}}{-9.8}\), with \(\sqrt{264.2}\approx16.254\).`, S`\(t\approx3.19\) or \(t\approx-0.13\); time after the dive can't be negative.`],
      S`after about \(3.19\) s`,
      plane({ view: { xmin: -0.5, xmax: 3.6, ymin: -2, ymax: 14 }, curves: [{ f: (t) => -4.9 * t * t + 15 * t + 2, a: 0, b: 3.19, color: "violet" }], points: [{ x: 3.19, y: 0, label: "≈ 3.19 s", color: "red" }, { x: 0, y: 2, label: "(0, 2)", color: "green" }], xlabel: "t (s)", ylabel: "h (m)", step: { x: 0.5, y: 2 } })],
    ["No real roots", S`Solve \(x^2-2x+6=0\).`,
      [S`\(b^2-4ac=4-24=-20\).`, S`\(\sqrt{-20}\) is not a real number.`],
      S`no real roots`,
      plane({ view: { xmin: -2, xmax: 4, ymin: -1, ymax: 12 }, curves: [{ f: (x) => x * x - 2 * x + 6, color: "violet" }], points: [{ x: 1, y: 5, label: "(1, 5)", color: "blue" }], step: { x: 1, y: 2 } })],
  ]),

  practice([
    q("rational", S`Solve \(2x^2+3x-2=0\) with the formula.`, roots(0.5, -2),
      "b² − 4ac = 9 + 16.", [S`\(x=\frac{-3\pm5}{4}\).`], S`\(x=\tfrac12\) or \(x=-2\)`),
    q("irrational", S`Solve \(x^2-6x+4=0\). Give both roots to two decimal places.`, rootsT(0.01, 3 + Math.sqrt(5), 3 - Math.sqrt(5)),
      "b² − 4ac = 36 − 16.", [S`\(x=\frac{6\pm\sqrt{20}}{2}=3\pm\sqrt5\).`], S`\(x=3\pm\sqrt5\), about \(5.24\) and \(0.76\)`),
    q("golden", S`Solve \(x^2+x-1=0\). Give both roots to two decimal places.`, rootsT(0.01, (-1 + Math.sqrt(5)) / 2, (-1 - Math.sqrt(5)) / 2),
      "a = 1, b = 1, c = −1.", [S`\(b^2-4ac=1+4=5\).`, S`\(x=\frac{-1\pm\sqrt5}{2}\).`], S`about \(0.62\) and \(-1.62\)`),
    q("double root", S`Solve \(4x^2-4x+1=0\).`, roots(0.5),
      "Find b² − 4ac first.", [S`\(b^2-4ac=16-16=0\).`, S`\(x=\frac{4}{8}\).`], S`\(x=\tfrac12\)`),
    q("none", S`Solve \(x^2+3x+4=0\). (Type “no real roots” if there are none.)`, roots(),
      "Look at b² − 4ac.", [S`\(9-16=-7\lt0\).`], "no real roots"),
  ]),

  wrapUp({
    qas: [
      ["Does the formula always work?", "Yes — for every quadratic equation in standard form. If b² − 4ac is negative, it tells you there are no real roots."],
      ["Should I always use the formula?", "Factoring is faster when it works, and isolating a square is faster for equations like (x − 3)² = 5. The formula is the reliable choice when neither is obvious."],
      ["Why is the axis of symmetry x = −b/(2a)?", "The two roots are −b/(2a) plus and minus the same amount, so −b/(2a) is exactly halfway between them."],
      ["What if a is negative?", "Use it as is (with its sign), or multiply the whole equation by −1 first. Both give the same roots."],
      ["How do I check a decimal root?", "Substitute it back: the left side should be very close to 0 (not exactly, because of rounding)."],
    ],
    summary: [
      "Standard form first; read a, b, c with signs.",
      "x = (−b ± √(b² − 4ac)) / (2a).",
      "Compute b² − 4ac first; simplify the radical.",
      "Negative under the root → no real roots.",
    ],
    next: "5.4 uses b² − 4ac alone to count the roots without solving.",
  }),
];
