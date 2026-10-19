// MCV4U 1.2 — Rates of Change Using Equations: the difference quotient (f(a + h) − f(a))/h, numerical tables with
// and without simplifying, exact instantaneous rates for polynomial, rational and root functions, and tangent lines
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";

export const TITLE = "1.2 Rates of Change Using Equations";
export const ID = "b6a81360-8f08-454d-8593-c625e6b79a74";

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "🧮",
    title: "Rates of Change Using Equations",
    overview: S`When a function has an equation, the slope of the secant from \(x=a\) to \(x=a+h\) can be written as one expression, the <strong>difference quotient</strong> \(\dfrac{f(a+h)-f(a)}{h}\). Substituting small values of \(h\) estimates the instantaneous rate; but if you first <em>simplify</em> the expression, so that \(h\) cancels from the denominator, you can let \(h\) become 0 and get the exact value. This is the algebra behind every derivative in the course.`,
    goals: [
      "write the difference quotient for a function at x = a;",
      "estimate instantaneous rates by substituting small h (without simplifying);",
      "simplify the difference quotient and let h → 0 for the exact rate;",
      "handle polynomial, rational and square-root functions;",
      "write the equation of a tangent line.",
    ],
    curriculum: "A1.3, A1.5 (connect the average rate on [a, a + h] with (f(a + h) − f(a))/h and the instantaneous rate with its limit), A1.6 (compare calculating the instantaneous rate with and without simplifying before substituting values of h approaching 0)",
    prior: [
      [S`Expand \((2+h)^2\).`, S`\(4+4h+h^2\).`],
      [S`Simplify \(\frac{6h+h^2}{h}\) for \(h\ne0\).`, S`\(6+h\).`],
      [S`Rationalize \(\frac{1}{\sqrt5+2}\).`, S`\(\sqrt5-2\).`],
    ],
    words: [
      ["Difference quotient", "\\(\\frac{f(a+h)-f(a)}{h}\\)", "secant slope from a to a + h"],
      ["h", "the run of the secant; can be positive or negative", ""],
      ["Simplify first", "cancel the factor h before letting h → 0", ""],
      ["Tangent line", "\\(y-f(a)=m(x-a)\\), m the instantaneous rate", ""],
    ],
  }),

  section("📌 The difference quotient", S`
  ${plane({ view: { xmin: -0.5, xmax: 4, ymin: -1, ymax: 14 }, curves: [{ f: (x) => x * x, color: "violet" }, { f: (x) => 1 + 3 * (x - 1), color: "amber" }, { f: (x) => 1 + 2 * (x - 1), color: "green" }], points: [{ x: 1, y: 1, label: "(a, f(a))", color: "red" }, { x: 2, y: 4, label: "(a + h, f(a + h))", color: "amber" }], step: { x: 0.5, y: 2 } }, "y = x², a = 1, h = 1: the secant has slope (4 − 1)/1 = 3 = 2a + h; as h → 0 it approaches the tangent slope 2.")}
  ${table(["h", "1", "0.1", "0.01", "0.001", "simplified: 2 + h"], [
    ["(f(1 + h) − f(1))/h for f(x) = x²", "3", "2.1", "2.01", "2.001", "→ 2 as h → 0"],
  ])}
  ${keyIdea(S`Without simplifying, you can only plug in \(h\ne0\) and watch a pattern. After simplifying, \(h\) no longer divides anything, so setting \(h=0\) gives the exact instantaneous rate: \(\displaystyle\lim_{h\to0}\frac{f(a+h)-f(a)}{h}\).`)}`),

  section("📌 Explore", S`<p>Choose a function, a point \(a\) and a run \(h\). The amber secant has slope equal to the difference quotient; the table shows it from both sides as \(h\) shrinks.</p>`),

  widget("differenceQuotient", { init: { fn: "cube", a: 1, h: 0.8 } }),

  section("📌 Algebra tools", S`
  <p>Polynomials: expand \(f(a+h)\), subtract, factor out \(h\). Rational functions: combine into one fraction. Square roots: multiply by the conjugate.</p>
  ${watchOut([
    "f(a + h) means substitute a + h everywhere x appears — not f(a) + h.",
    "Subtract ALL of f(a): use brackets.",
    "Only cancel h after it is a factor of every term in the numerator.",
    "You can't set h = 0 before simplifying: 0/0 is undefined.",
    "The tangent line needs a point too: (a, f(a)).",
  ])}`),

  examples([
    ["A quadratic", S`Find the instantaneous rate of change of \(f(x)=3x^2-x\) at \(x=2\).`,
      [S`\(f(2+h)=3(4+4h+h^2)-(2+h)=10+11h+3h^2\); \(f(2)=10\).`, S`\(\frac{11h+3h^2}{h}=11+3h\to11\).`],
      S`\(11\)`],
    ["With and without simplifying", S`For \(f(x)=x^3\) at \(a=1\), compute the quotient for \(h=0.1, 0.01, 0.001\), then simplify.`,
      [S`\(h=0.1\): \(\frac{1.331-1}{0.1}=3.31\); \(h=0.01\): \(3.0301\); \(h=0.001\): \(3.003001\).`, S`Simplified: \(\frac{3h+3h^2+h^3}{h}=3+3h+h^2\to3\).`],
      S`numbers suggest 3; simplifying proves it is exactly 3`],
    ["A velocity", S`A ball's height is \(h(t)=-4.9t^2+20t\) m. Find its velocity at \(t=2\).`,
      [S`\(h(2+k)=-4.9(4+4k+k^2)+40+20k=20.4+0.4k-4.9k^2\); \(h(2)=20.4\).`, S`\(\frac{0.4k-4.9k^2}{k}=0.4-4.9k\to0.4\).`],
      S`0.4 m/s (still rising, almost at the top)`,
      plane({ view: { xmin: 0, xmax: 4.3, ymin: 0, ymax: 24 }, curves: [{ f: (t) => -4.9 * t * t + 20 * t, a: 0, b: 4.08, color: "violet" }, { f: (t) => 20.4 + 0.4 * (t - 2), color: "green" }], points: [{ x: 2, y: 20.4, label: "(2, 20.4)", color: "red" }], step: { x: 0.5, y: 4 }, xlabel: "t (s)", ylabel: "h (m)" })],
    ["A rational function", S`Find the instantaneous rate of change of \(f(x)=\dfrac2x\) at \(x=1\).`,
      [S`\(\dfrac{\frac2{1+h}-2}{h}=\dfrac{2-2(1+h)}{h(1+h)}=\dfrac{-2h}{h(1+h)}=\dfrac{-2}{1+h}\).`, S`As \(h\to0\): \(-2\).`],
      S`\(-2\)`,
      plane({ view: { xmin: 0, xmax: 4, ymin: 0, ymax: 6 }, curves: [{ f: (x) => 2 / x, a: 0.34, b: 4, color: "violet" }, { f: (x) => 2 - 2 * (x - 1), color: "green" }], points: [{ x: 1, y: 2, label: "(1, 2)", color: "red" }], step: { x: 0.5, y: 1 } })],
    ["A square root", S`Find the instantaneous rate of change of \(f(x)=\sqrt x\) at \(x=4\).`,
      [S`\(\dfrac{\sqrt{4+h}-2}{h}\cdot\dfrac{\sqrt{4+h}+2}{\sqrt{4+h}+2}=\dfrac{(4+h)-4}{h(\sqrt{4+h}+2)}=\dfrac1{\sqrt{4+h}+2}\).`, S`As \(h\to0\): \(\frac14\).`],
      S`\(\tfrac14\)`],
  ]),

  practice([
    q("limit", S`For \(f(x)=x^2\) at \(a=5\), the simplified quotient is \(10+h\). What is the instantaneous rate?`, num(10),
      "Let h → 0.", [S`\(10+0\).`], S`\(10\)`),
    q("linear", S`What is the instantaneous rate of change of \(f(x)=4x-7\) at \(x=3\)?`, num(4),
      "A line has the same rate everywhere.", [S`\(\frac{4h}{h}=4\).`], S`\(4\)`),
    q("quotient", S`Evaluate \(\dfrac{f(1+h)-f(1)}{h}\) for \(f(x)=x^2+2x\) and \(h=0.1\).`, num(4.1, 0.0001),
      "f(1.1) = 3.41, f(1) = 3.", [S`\(\frac{0.41}{0.1}\).`], S`\(4.1\)`),
    q("cubic", S`Find the instantaneous rate of change of \(f(x)=x^3\) at \(x=2\).`, num(12),
      "Expand (2 + h)³.", [S`\(\frac{12h+6h^2+h^3}{h}\to12\).`], S`\(12\)`),
    q("tangent", S`Which is the tangent to \(y=x^2\) at \(x=-1\)?`, choice([S`\(y=-2x-1\)`, S`\(y=-2x+1\)`, S`\(y=2x+1\)`, S`\(y=-x\)`], 0),
      "Slope 2a = −2 through (−1, 1).", [S`\(y-1=-2(x+1)\).`], S`\(y=-2x-1\)`),
  ]),

  ...hard([
    ["A general point", S`For \(f(x)=x^2-4x\), find the instantaneous rate at \(x=a\). Where is the tangent horizontal, and where is its slope 6?`,
      [S`\(\dfrac{(a+h)^2-4(a+h)-(a^2-4a)}{h}=\dfrac{2ah+h^2-4h}{h}=2a+h-4\to2a-4\).`, S`Horizontal: \(2a-4=0\Rightarrow a=2\), point \((2,-4)\). Slope 6: \(2a-4=6\Rightarrow a=5\), point \((5,5)\).`],
      S`rate \(2a-4\); horizontal at \((2,-4)\); slope 6 at \((5,5)\)`,
      plane({ view: { xmin: -1, xmax: 6, ymin: -6, ymax: 8 }, curves: [{ f: (x) => x * x - 4 * x, color: "violet" }, { f: () => -4, color: "green" }, { f: (x) => 5 + 6 * (x - 5), color: "amber" }], points: [{ x: 2, y: -4, label: "(2, −4)", color: "red" }, { x: 5, y: 5, label: "(5, 5)", color: "red" }], step: { x: 1, y: 2 } })],
    ["Tangent to a rational curve", S`Find the equation of the tangent to \(f(x)=\dfrac1{x+1}\) at \(x=1\).`,
      [S`\(\dfrac{\frac1{2+h}-\frac12}{h}=\dfrac{2-(2+h)}{2h(2+h)}=\dfrac{-1}{2(2+h)}\to-\dfrac14\).`, S`Point \(\left(1,\tfrac12\right)\): \(y-\tfrac12=-\tfrac14(x-1)\).`],
      S`\(y=-\tfrac14x+\tfrac34\)`],
  ], [
    q("hard", S`Find the instantaneous rate of change of \(f(x)=\sqrt x\) at \(x=9\) (4 decimals).`, num(0.1667, 0.0005),
      "Rationalize; the result is 1/(√(9 + h) + 3).", [S`\(\frac16\).`], S`\(0.1667\)`),
    q("hard", S`Find the instantaneous rate of change of \(f(x)=\dfrac3x\) at \(x=-1\).`, num(-3),
      "The quotient simplifies to −3/(a(a + h)).", [S`\(-\frac{3}{(-1)^2}\).`], S`\(-3\)`),
    q("hard", S`At what x-value does the tangent to \(y=x^2+3x\) have slope 7?`, num(2),
      "The rate at a is 2a + 3.", [S`\(2a+3=7\).`], S`\(2\)`),
  ]),

  wrapUp({
    qas: [
      ["Why simplify before letting h → 0?", "Before simplifying, h = 0 gives 0/0. After cancelling the factor h, the expression is defined at h = 0 and gives the exact rate."],
      ["Do I get the same answer from tables?", "Tables suggest the value (2.1, 2.01, 2.001 → 2) but can't prove it; simplifying proves it."],
      ["Can h be negative?", "Yes — a negative h gives a secant to the left. Both sides should approach the same value for a smooth function."],
      ["How do I handle √ in the quotient?", "Multiply numerator and denominator by the conjugate so the roots disappear from the numerator."],
      ["What comes next?", "1.3 and 1.4 make 'h → 0' precise with limits, and 1.5 turns the rate at a into a function of x: the derivative."],
    ],
    summary: [
      "Difference quotient = secant slope from a to a + h.",
      "Small h estimates; simplifying gives the exact rate.",
      "Expand, combine fractions, or rationalize.",
      "Tangent: y − f(a) = m(x − a).",
    ],
    next: "1.3 studies limits.",
  }),
];
