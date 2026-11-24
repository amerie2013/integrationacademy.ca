// MCV4U 1.6 — Chapter 1 Review (NEW lesson): rates of change, the difference quotient, limits, continuity, and the
// derivative from first principles
import { intro, section, keyIdea, widget, examples, practice, wrapUp, table, q, num, choice, expr, hard, plane } from "./lib.mjs";
import { tv } from "../mcr3u-extables.mjs";

export const TITLE = "1.6 Chapter 1 Review";
export const ID = "6d4fc001-0001-4001-8001-000000000106";

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "🧩",
    title: "Chapter 1 Review — Rates of Change and Limits",
    overview: S`This page pulls the chapter together before the test: each lesson's key idea on one screen, multi-step examples that combine several skills, mixed practice, a readiness checklist and a hard level. Try each example before reading its solution, and use the explorer to check derivative sketches.`,
    goals: [
      "recall the key idea and common mistake of each lesson;",
      "compute average and instantaneous rates of change;",
      "evaluate limits numerically, graphically and algebraically;",
      "test and repair continuity;",
      "differentiate from first principles and connect f with f′.",
    ],
    curriculum: "A1.1–A1.8, A2.1 (whole chapter)",
    prior: [
      [S`Average rate of \(x^2\) on \([1,3]\)?`, S`\(4\).`],
      [S`\(\lim_{x\to2}\frac{x^2-4}{x-2}\)?`, S`\(4\).`],
      [S`Derivative of \(x^2\)?`, S`\(2x\).`],
    ],
    words: [
      ["Secant / tangent", "average / instantaneous rate", ""],
      ["Difference quotient", "\\(\\frac{f(a+h)-f(a)}{h}\\)", ""],
      ["Limit", "value approached; left = right", ""],
      ["Derivative", "\\(f'(x)=\\lim_{h\\to0}\\frac{f(x+h)-f(x)}{h}\\)", ""],
    ],
  }),

  section("📌 The chapter on one page", table(["Lesson", "Key idea", "Example", "Watch out"], [
    ["1.1 Slope of a curve", "secant = average, tangent = instantaneous", "d: 4 → 40 m on [1, 4]: 12 m/s", "no tangent at a corner"],
    ["1.2 Equations", "simplify (f(a + h) − f(a))/h, then h → 0", "3x² − x at 2: 11", "f(a + h) ≠ f(a) + h"],
    ["1.3 Limits", "near a, not at a; left = right", "(x² − 9)/(x − 3) → 6", "0/0 needs simplifying"],
    ["1.4 Continuity", "f(a) = lim f(x)", "match pieces: k = 1", "removable vs jump vs infinite"],
    ["1.5 Derivatives", "f′(x) from first principles", "x³ → 3x²", "continuous ≠ differentiable"],
  ])),

  section("📌 Explore", S`<p>Use the derivative builder to check your sketches of \(f'\) in the examples and the hard level.</p>`),

  widget("derivativeBuilder", { init: { fn: "quad", x: -2 } }),

  section("📌 The big picture", keyIdea(S`Average rate (secant) → shrink the interval → limit → instantaneous rate (tangent). Doing it at a general \(x\) gives the derivative \(f'(x)\), which exists wherever the graph is smooth.`)),

  examples([
    ["Average and instantaneous", S`For \(f(x)=x^3-2x\), find the average rate on \([1,2]\) and the instantaneous rate at \(x=1\).`,
      [S`<b>Two different questions.</b> The average rate is a secant slope over an interval; the instantaneous rate is a tangent slope at a point (a limit).`,
        S`<b>Values.</b> \(f(1)=1-2=-1\) and \(f(2)=8-4=4\).`,
        S`<b>Average rate on \([1,2]\).</b> \(\dfrac{f(2)-f(1)}{2-1}=\dfrac{4-(-1)}{1}=5\).`,
        S`<b>Instantaneous rate at 1.</b> \(f(1+h)=(1+3h+3h^2+h^3)-2-2h=-1+h+3h^2+h^3\). So \(\dfrac{f(1+h)-f(1)}{h}=\dfrac{h+3h^2+h^3}{h}=1+3h+h^2\to1\).`,
        S`<b>Compare and check.</b> The secant (slope 5) is much steeper than the tangent (slope 1) because the cubic gets steeper as \(x\) grows. With \(h=1\), the formula \(1+3h+h^2\) gives \(1+3+1=5\), the average rate on \([1,2]\) ✓`],
      S`average 5; instantaneous 1`,
      plane({ view: { xmin: -2, xmax: 2.5, ymin: -3, ymax: 7 }, curves: [{ f: (x) => x ** 3 - 2 * x, color: "violet", label: "f(x) = x³ − 2x" }, { f: (x) => -1 + 5 * (x - 1), color: "amber", label: "secant: slope 5" }, { f: (x) => -1 + (x - 1), color: "green", label: "tangent: slope 1" }], points: [{ x: 1, y: -1, label: "(1, −1)", color: "red" }, { x: 2, y: 4, label: "(2, 4)", color: "amber" }], step: { x: 0.5, y: 1 } })],
    ["A limit by rationalizing", S`Evaluate \(\displaystyle\lim_{x\to4}\dfrac{\sqrt x-2}{x-4}\).`,
      [S`<b>Substitution.</b> \(\frac{2-2}{4-4}=\frac00\): indeterminate.`,
        S`<b>Spot a difference of squares.</b> \(x-4=(\sqrt x)^2-2^2=(\sqrt x-2)(\sqrt x+2)\) for \(x\ge0\). (Multiplying top and bottom by the conjugate \(\sqrt x+2\) gives the same thing.)`,
        S`<b>Cancel.</b> \(\dfrac{\sqrt x-2}{(\sqrt x-2)(\sqrt x+2)}=\dfrac1{\sqrt x+2}\) for \(x\ne4\).`,
        S`<b>Evaluate.</b> \(\dfrac1{\sqrt4+2}=\dfrac14\).`,
        S`<b>Check and connect.</b> At \(x=4.01\): \(\frac{2.0024984-2}{0.01}\approx0.2498\) ✓. This limit is the slope of \(y=\sqrt x\) at \(x=4\), found the same way in 1.2.`],
      S`\(\tfrac14\)`,
      plane({ view: { xmin: -0.5, xmax: 10, ymin: -0.05, ymax: 0.6 }, curves: [{ f: (x) => 1 / (Math.sqrt(x) + 2), a: 0, b: 3.9, color: "violet", label: "y = (√x − 2)/(x − 4)" }, { f: (x) => 1 / (Math.sqrt(x) + 2), a: 4.1, b: 10, color: "violet" }], points: [{ x: 4, y: 0.25, label: "hole (4, ¼)", color: "amber", open: true }], step: { x: 1, y: 0.1 } })],
    ["Continuity with a parameter", S`Find \(c\) so that \(f(x)=x^2-c\) for \(x\lt3\) and \(f(x)=cx+1\) for \(x\ge3\) is continuous.`,
      [S`<b>Only the join matters.</b> Both pieces are polynomials, so the only possible break is at \(x=3\).`,
        S`<b>Left limit.</b> \(\displaystyle\lim_{x\to3^-}(x^2-c)=9-c\).`,
        S`<b>Right limit and value.</b> \(f(3)=\displaystyle\lim_{x\to3^+}(cx+1)=3c+1\).`,
        S`<b>Set equal and solve.</b> \(9-c=3c+1\Rightarrow8=4c\Rightarrow c=2\).`,
        S`<b>Check.</b> With \(c=2\): left piece \(9-2=7\), right piece \(3(2)+1=7\). They meet at \((3,7)\) ✓`],
      S`\(c=2\)`,
      plane({ view: { xmin: -1, xmax: 5, ymin: -3, ymax: 12 }, curves: [{ f: (x) => x * x - 2, a: -1, b: 3, color: "violet", label: "y = x² − 2" }, { f: (x) => 2 * x + 1, a: 3, b: 5, color: "green", label: "y = 2x + 1" }], points: [{ x: 3, y: 7, label: "(3, 7)", color: "red" }], step: { x: 1, y: 2 } })],
    ["First principles", S`Find \(f'(x)\) for \(f(x)=3x^2-5x+2\) from first principles.`,
      [S`<b>Expand.</b> \(f(x+h)=3(x^2+2xh+h^2)-5x-5h+2=3x^2+6xh+3h^2-5x-5h+2\).`,
        S`<b>Subtract.</b> \(f(x+h)-f(x)=6xh+3h^2-5h\): the terms \(3x^2\), \(-5x\) and \(2\) cancel.`,
        S`<b>Divide by \(h\).</b> \(6x+3h-5\).`,
        S`<b>Limit.</b> \(h\to0\) gives \(f'(x)=6x-5\).`,
        S`<b>Check.</b> \(f'=0\) at \(x=\frac56\). The vertex of the parabola is at \(x=-\frac{b}{2a}=\frac{5}{6}\) ✓. At \(x=2\): \(f'(2)=7\); secant \(\frac{f(2.01)-f(2)}{0.01}=\frac{4.0703-4}{0.01}=7.03\) ✓`],
      S`\(f'(x)=6x-5\)`,
      plane({ view: { xmin: -1, xmax: 3, ymin: -4, ymax: 10 }, curves: [{ f: (x) => 3 * x * x - 5 * x + 2, color: "violet", label: "f(x) = 3x² − 5x + 2" }, { f: (x) => 6 * x - 5, color: "blue", label: "f′(x) = 6x − 5" }], points: [{ x: 5 / 6, y: 3 * 25 / 36 - 25 / 6 + 2, label: "vertex x = 5/6", color: "red" }], step: { x: 0.5, y: 2 } })],
    ["Reading f′ from f", S`The graph of \(f\) rises until \(x=-1\), falls until \(x=2\), then rises. Describe the sign of \(f'\).`,
      [S`<b>Rule.</b> \(f'(x)\) is the slope of the tangent: positive where \(f\) rises, negative where it falls, zero where the tangent is horizontal.`,
        S`<b>Left piece.</b> On \((-\infty,-1)\), \(f\) rises, so \(f'\gt0\).`,
        S`<b>Turning points.</b> At \(x=-1\) (a peak) and \(x=2\) (a valley) the tangent is flat: \(f'=0\).`,
        S`<b>Middle and right.</b> On \((-1,2)\), \(f\) falls: \(f'\lt0\). On \((2,\infty)\) it rises: \(f'\gt0\).`,
        S`<b>Check with a model.</b> One function with this shape is \(f(x)=\tfrac12(x^3-1.5x^2-6x)\). Its derivative, \(f'(x)=1.5(x+1)(x-2)\), is zero at \(-1\) and \(2\) and negative between them ✓ ${tv(["\\(x\\)", "−2", "−1", "0", "2", "3"], ["sign of \\(f'\\)", "+", "0", "−", "0", "+"])}`],
      S`+, 0, −, 0, +`,
      plane({ view: { xmin: -3, xmax: 4, ymin: -6, ymax: 6 }, curves: [{ f: (x) => 0.5 * (x ** 3 - 1.5 * x * x - 6 * x), color: "violet", label: "f(x) = ½(x³ − 1.5x² − 6x)" }, { f: (x) => 0.5 * (3 * x * x - 3 * x - 6), color: "blue", label: "f′(x) = 1.5(x + 1)(x − 2)" }], points: [{ x: -1, y: 0, color: "blue" }, { x: 2, y: 0, color: "blue" }], step: { x: 1, y: 1 } })],
  ]),

  practice([
    q("average rate", S`Find the average rate of change of \(f(x)=2x^2\) on \([1,4]\).`, num(10),
      "(32 − 2) ÷ 3.", [S`\(\frac{30}{3}\).`], S`\(10\)`),
    q("limit", S`Evaluate \(\displaystyle\lim_{x\to5}\dfrac{x^2-25}{x-5}\).`, num(10),
      "Factor.", [S`\(x+5\to10\).`], S`\(10\)`),
    q("one-sided", S`For \(f(x)=x+2\) when \(x\lt1\) and \(f(x)=2x\) when \(x\ge1\), does \(\displaystyle\lim_{x\to1}f(x)\) exist?`, choice(["no (3 ≠ 2)", "yes, it is 3", "yes, it is 2", "yes, it is 1"], 0),
      "Compare the two sides.", [S`Left 3, right 2.`], "no"),
    q("derivative", S`Find \(f'(x)\) for \(f(x)=x^2-8x\).`, expr("2*x-8"),
      "First principles or the pattern.", [S`\(2x+h-8\to2x-8\).`], S`\(2x-8\)`),
    q("tangent slope", S`Find the slope of the tangent to \(y=x^3\) at \(x=-2\).`, num(12),
      "3x².", [S`\(3(4)\).`], S`\(12\)`),
  ]),

  section("📌 Am I ready for the test?", S`<ul style="list-style:none;padding-left:0;">
    ${[
      ["1.1", "I can find average rates as secant slopes and estimate tangent slopes."],
      ["1.2", "I can simplify the difference quotient and find exact instantaneous rates."],
      ["1.3", "I can evaluate limits, including one-sided, infinite and at infinity."],
      ["1.4", "I can classify discontinuities and make piecewise functions continuous."],
      ["1.5", "I can differentiate from first principles and sketch f′ from f."],
    ].map(([c, t]) => `<li style="margin:6px 0;"><label><input type="checkbox"> <strong>${c}</strong> — ${t}</label></li>`).join("")}
  </ul>`),

  ...hard([
    ["Where is the tangent parallel?", S`For \(f(x)=x^2-3x\), find the point where the tangent is parallel to the secant from \(x=0\) to \(x=4\).`,
      [S`Secant slope \(\frac{f(4)-f(0)}{4}=\frac{4-0}{4}=1\).`, S`\(f'(x)=2x-3=1\Rightarrow x=2\); point \((2,-2)\).`],
      S`\((2,-2)\)`,
      plane({ view: { xmin: -1, xmax: 5, ymin: -4, ymax: 6 }, curves: [{ f: (x) => x * x - 3 * x, color: "violet" }, { f: (x) => x, color: "amber" }, { f: (x) => x - 4, color: "green" }], points: [{ x: 2, y: -2, label: "(2, −2)", color: "red" }, { x: 0, y: 0, color: "amber" }, { x: 4, y: 4, color: "amber" }], step: { x: 1, y: 1 } })],
    ["A derivative of a rational function", S`Find \(f'(x)\) for \(f(x)=\dfrac{1}{x-2}\) from first principles, and explain what its sign says about the graph.`,
      [S`\(\dfrac{\frac1{x+h-2}-\frac1{x-2}}{h}=\dfrac{(x-2)-(x+h-2)}{h(x+h-2)(x-2)}=\dfrac{-1}{(x+h-2)(x-2)}\to-\dfrac1{(x-2)^2}\).`, S`Always negative: the graph decreases on each side of the asymptote \(x=2\).`],
      S`\(f'(x)=-\dfrac1{(x-2)^2}\lt0\)`],
  ], [
    q("hard", S`Evaluate \(\displaystyle\lim_{x\to-3}\dfrac{x^3+27}{x+3}\).`, num(27),
      "Sum of cubes.", [S`\(x^2-3x+9\to27\).`], S`\(27\)`),
    q("hard", S`For \(f(x)=x^3-12x\), at which positive \(x\) is the tangent horizontal?`, num(2),
      "f′(x) = 3x² − 12.", [S`\(x^2=4\).`], S`\(2\)`),
    q("hard", S`Find \(\displaystyle\lim_{x\to\infty}\dfrac{4x-1}{2x+7}\).`, num(2),
      "Divide by x.", [S`\(\frac42\).`], S`\(2\)`),
  ]),

  wrapUp({
    qas: [
      ["How should I study for this test?", "Do the mixed practice and the hard level without notes, then revisit the explorer for each mistake."],
      ["What are the most common mistakes?", "Writing f(a + h) as f(a) + h, cancelling h too early, ignoring one side of a limit, and assuming continuity means differentiability."],
      ["How much work should I show?", "Write the difference quotient, show the simplification, and keep 'lim' until h is gone."],
      ["How do I sketch f′ quickly?", "Mark where f has horizontal tangents (f′ = 0), then note where f rises (f′ > 0) or falls (f′ < 0)."],
      ["How does this lead to Chapter 2?", "Chapter 2 finds derivatives with rules instead of limits: power, product, chain and quotient rules."],
    ],
    summary: [
      "Secant → tangent via limits.",
      "Simplify, then let h → 0.",
      "Continuity: f(a) = lim f(x).",
      "f′(x) gives every tangent slope.",
    ],
    next: "Write the Chapter 1 test. Chapter 2 develops the derivative rules.",
  }),
];
