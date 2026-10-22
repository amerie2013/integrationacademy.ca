// MHF4U 3.4 — Solving Rational Equations and Inequalities: restrictions, clearing denominators, extraneous roots,
// rewriting an inequality as one fraction compared with 0, sign charts with excluded values, and graphical checks
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, roots, hard, plane, rat } from "./lib.mjs";

export const TITLE = "3.4 Solving Rational Equations and Inequalities";
export const ID = "7ca04013-8a8a-4239-8c5b-161f39f4dae4";

const S = String.raw;
const V = { xmin: -8, xmax: 8, ymin: -8, ymax: 8 };
export const blocks = () => [
  intro({
    icon: "⚖️",
    title: "Solving Rational Equations and Inequalities",
    overview: S`To solve a rational equation, first note the <strong>restrictions</strong> (values that make a denominator 0), then multiply both sides by the common denominator to get a polynomial equation. Any solution that is a restricted value is <strong>extraneous</strong> and must be rejected. Inequalities need more care: you can't multiply by an expression whose sign you don't know. Instead, move everything to one side, combine into one fraction, and use a sign chart whose critical values are the zeros of the numerator <em>and</em> of the denominator — the latter are never included.`,
    goals: [
      "state the restrictions of a rational equation or inequality;",
      "solve rational equations by multiplying by the common denominator;",
      "identify and reject extraneous roots;",
      "solve rational inequalities with a sign chart, excluding the zeros of the denominator;",
      "confirm solutions with a graph.",
    ],
    curriculum: "C3.5 (solve simple rational equations algebraically, and verify using technology), C3.6 (solve problems involving rational equations), C4.1, C4.2 (solve rational inequalities, using a graph and algebraically)",
    prior: [
      [S`Solve \(\frac x3=4\).`, S`\(x=12\).`],
      [S`Restriction of \(\frac1{x-2}\)?`, S`\(x\ne2\).`],
      [S`Solve \((x-1)(x+3)\lt0\).`, S`\(-3\lt x\lt1\).`],
    ],
    words: [
      ["Restriction", "a value that makes a denominator 0", "\\(x\\ne2\\)"],
      ["Common denominator", "a multiple of every denominator", "\\((x-1)(x+2)\\)"],
      ["Extraneous root", "a solution of the cleared equation that fails the original", ""],
      ["Critical value", "a zero of the numerator or the denominator", ""],
    ],
  }),

  section("📌 Equations vs inequalities", S`
  ${table(["Step", "Rational equation", "Rational inequality"], [
    ["1", "state restrictions", "state restrictions"],
    ["2", "multiply by the common denominator", "move all terms to one side (do NOT multiply)"],
    ["3", "solve the polynomial equation", "combine into one fraction"],
    ["4", "reject restricted values", "sign chart: zeros of numerator and denominator"],
    ["5", "check", "denominator zeros always excluded"],
  ])}
  ${plane({ view: V, curves: [...rat((x) => (x - 4) / (x + 2), [-2], V)], vlines: [{ x: -2, color: "red", dash: true }], lines: [{ m: 0, b: 1, color: "red", dash: true }], points: [{ x: 4, y: 0, label: "(4, 0)", color: "blue" }], step: { x: 1, y: 1 } }, "(x − 4)/(x + 2) ≥ 0: positive for x < −2 and x > 4, zero at x = 4, not defined at x = −2.")}
  ${keyIdea(S`A rational expression can change sign only where its numerator is 0 (it crosses the axis) or its denominator is 0 (it jumps across an asymptote). Those critical values split the number line into intervals of constant sign.`)}`),

  section("📌 Explore", S`<p>Set \(f(x)=\frac{ax+b}{cx+d}\) and the value \(k\). Choose = or an inequality: the solution is shaded and written out. The asymptote is always excluded.</p>`),

  widget("rationalSolver", { init: { a: 2, b: -1, c: 1, d: 1, k: 1, op: "≤" } }),

  section("📌 Why not multiply both sides?", S`
  <p>Multiplying \(\frac{2x+1}{x-1}\lt3\) by \(x-1\) only works when \(x-1>0\); when \(x-1\lt0\) the inequality sign must flip. Rewriting as \(\frac{-x+4}{x-1}\lt0\) handles both cases at once.</p>
  ${watchOut([
    "Always state restrictions first — they decide which roots are extraneous.",
    "Multiply EVERY term by the common denominator, including whole-number terms.",
    "Never include a zero of the denominator, even with ≤ or ≥.",
    "When subtracting fractions, put the numerator in brackets: −(x − 2) = −x + 2.",
    "Check answers in the ORIGINAL equation, not the cleared one.",
  ])}`),

  examples([
    ["A one-step equation", S`Solve \(\dfrac3{x-2}=6\).`,
      [S`Restriction \(x\ne2\).`, S`\(3=6(x-2)\Rightarrow x-2=\frac12\).`],
      S`\(x=2.5\)`],
    ["Cross-multiplying", S`Solve \(\dfrac{x+1}{x-3}=\dfrac{x-2}{x+1}\).`,
      [S`Restrictions \(x\ne3\), \(x\ne-1\).`, S`\((x+1)^2=(x-2)(x-3)\Rightarrow x^2+2x+1=x^2-5x+6\Rightarrow7x=5\).`],
      S`\(x=\tfrac57\)`],
    ["A quadratic after clearing", S`Solve \(x+\dfrac6x=5\).`,
      [S`Restriction \(x\ne0\). Multiply by \(x\): \(x^2+6=5x\Rightarrow x^2-5x+6=0\).`, S`\((x-2)(x-3)=0\).`],
      S`\(x=2\) or \(x=3\)`,
      plane({ view: { xmin: -2, xmax: 7, ymin: -2, ymax: 10 }, curves: [...rat((x) => x + 6 / x, [0], { xmin: -2, xmax: 7 }), { f: () => 5, color: "green" }], vlines: [{ x: 0, color: "red", dash: true }], points: [{ x: 2, y: 5, label: "(2, 5)", color: "blue" }, { x: 3, y: 5, label: "(3, 5)", color: "blue" }], step: { x: 1, y: 1 } })],
    ["A sign chart", S`Solve \(\dfrac{x-4}{x+2}\ge0\).`,
      [S`Critical values: \(4\) (numerator, included) and \(-2\) (denominator, excluded).`, S`Signs: \(x\lt-2\): +; \(-2\lt x\lt4\): −; \(x>4\): +.`],
      S`\(x\lt-2\) or \(x\ge4\)`],
    ["Rewrite as one fraction", S`Solve \(\dfrac{2x+1}{x-1}\lt3\).`,
      [S`\(\dfrac{2x+1}{x-1}-3\lt0\Rightarrow\dfrac{2x+1-3x+3}{x-1}\lt0\Rightarrow\dfrac{-x+4}{x-1}\lt0\).`, S`Equivalently \(\dfrac{x-4}{x-1}>0\): critical values 1 and 4.`],
      S`\(x\lt1\) or \(x>4\)`,
      plane({ view: V, curves: [...rat((x) => (2 * x + 1) / (x - 1), [1], V), { f: () => 3, color: "green" }], vlines: [{ x: 1, color: "red", dash: true }], points: [{ x: 4, y: 3, label: "(4, 3)", color: "blue" }], step: { x: 1, y: 1 } })],
  ]),

  practice([
    q("equation", S`Solve \(\dfrac4{x+1}=2\).`, num(1),
      "4 = 2(x + 1).", [S`\(x+1=2\).`], S`\(1\)`),
    q("equation", S`Solve \(\dfrac{x+3}{x-1}=2\).`, num(5),
      "x + 3 = 2(x − 1).", [S`\(x+3=2x-2\).`], S`\(5\)`),
    q("equation", S`Solve \(x-\dfrac8x=2\).`, roots(4, -2),
      "Multiply by x.", [S`\(x^2-2x-8=0\Rightarrow(x-4)(x+2)=0\).`], S`\(4, -2\)`),
    q("inequality", S`Solve \(\dfrac{x-1}{x+3}\lt0\).`, choice([S`\(-3\lt x\lt1\)`, S`\(x\lt-3\) or \(x>1\)`, S`\(-3\le x\le1\)`, S`\(x\lt1\)`], 0),
      "Critical values −3 and 1.", ["Signs +, −, +."], S`\(-3\lt x\lt1\)`),
    q("inequality", S`Solve \(\dfrac{x+2}{x-5}\ge1\).`, choice([S`\(x>5\)`, S`\(x\ge5\)`, S`\(x\lt5\)`, S`all \(x\ne5\)`], 0),
      "Subtract 1 and combine.", [S`\(\frac{7}{x-5}\ge0\) — positive exactly when \(x>5\).`], S`\(x>5\)`),
  ]),

  ...hard([
    ["Two fractions", S`Solve \(\dfrac1{x-1}+\dfrac2{x+2}=1\).`,
      [S`Restrictions \(x\ne1, -2\). Multiply by \((x-1)(x+2)\): \((x+2)+2(x-1)=(x-1)(x+2)\).`, S`\(3x=x^2+x-2\Rightarrow x^2-2x-2=0\Rightarrow x=1\pm\sqrt3\).`, S`Neither is restricted.`],
      S`\(x=1+\sqrt3\approx2.73\) or \(x=1-\sqrt3\approx-0.73\)`],
    ["A quadratic over a linear", S`Solve \(\dfrac{x^2-9}{x-1}\le0\).`,
      [S`\(\dfrac{(x-3)(x+3)}{x-1}\le0\); critical values \(-3, 1, 3\) (1 excluded).`, S`Signs: \(x\lt-3\): −; \((-3,1)\): +; \((1,3)\): −; \(x>3\): +.`],
      S`\(x\le-3\) or \(1\lt x\le3\)`,
      plane({ view: { xmin: -6, xmax: 6, ymin: -12, ymax: 12 }, curves: rat((x) => (x * x - 9) / (x - 1), [1], { xmin: -6, xmax: 6 }), vlines: [{ x: 1, color: "red", dash: true }], points: [{ x: -3, y: 0, label: "−3", color: "blue" }, { x: 3, y: 0, label: "3", color: "blue" }], step: { x: 1, y: 2 } })],
  ], [
    q("hard", S`Solve \(\dfrac2x+\dfrac3{x+1}=2\).`, roots(2, -0.5),
      "Multiply by x(x + 1).", [S`\(2(x+1)+3x=2x(x+1)\Rightarrow2x^2-3x-2=0\Rightarrow(2x+1)(x-2)=0\).`], S`\(2, -\tfrac12\)`),
    q("hard", S`How many integers satisfy \(\dfrac{x+1}{x-4}\le0\)?`, num(5),
      "−1 ≤ x < 4.", [S`\(-1,0,1,2,3\).`], S`\(5\)`),
    q("hard", S`Solve \(\dfrac1x\lt2\).`, choice([S`\(x\lt0\) or \(x>\tfrac12\)`, S`\(x>\tfrac12\)`, S`\(0\lt x\lt\tfrac12\)`, S`\(x\lt\tfrac12\)`], 0),
      "1/x − 2 < 0 → (1 − 2x)/x < 0.", [S`Critical values 0 and ½: signs −, +, −.`], S`\(x\lt0\) or \(x>\tfrac12\)`),
  ]),

  wrapUp({
    qas: [
      ["What is an extraneous root?", "A value that solves the polynomial equation you got after clearing denominators but makes a denominator of the original 0. It must be rejected."],
      ["Why can't I cross-multiply an inequality?", "The denominator could be negative, which would flip the inequality. Combining into one fraction and using a sign chart avoids guessing."],
      ["Why are denominator zeros never included?", "The expression is undefined there, so it can't satisfy any inequality."],
      ["How do I check with a graph?", "Graph y = f(x) and y = k; the solution of f(x) > k is where the curve is above the line, away from the asymptote."],
      ["What if the numerator is a constant?", "Then only the denominator changes the sign, e.g. 7/(x − 5) ≥ 0 exactly when x > 5."],
    ],
    summary: [
      "Restrictions first.",
      "Equations: multiply by the common denominator, reject extraneous roots.",
      "Inequalities: one side 0, one fraction, sign chart.",
      "Denominator zeros are always excluded.",
    ],
    next: "3.5 uses rational functions as models.",
  }),
];
