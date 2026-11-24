// MCV4U 1.2 — Rates of Change Using Equations: the difference quotient (f(a + h) − f(a))/h, numerical tables with
// and without simplifying, exact instantaneous rates for polynomial, rational and root functions, and tangent lines
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { tv } from "../mcr3u-extables.mjs";

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
      [S`<b>Rule.</b> The instantaneous rate at \(x=a\) is the value the difference quotient \(\dfrac{f(a+h)-f(a)}{h}\) approaches as \(h\to0\). It is the slope of the secant from \(x=a\) to \(x=a+h\), so as \(h\) shrinks the secant turns into the tangent.`,
        S`<b>The two function values.</b> \(f(2)=3(4)-2=10\). Expand carefully: \(f(2+h)=3(2+h)^2-(2+h)=3(4+4h+h^2)-2-h=10+11h+3h^2\).`,
        S`<b>Form the quotient.</b> \(\dfrac{f(2+h)-f(2)}{h}=\dfrac{10+11h+3h^2-10}{h}=\dfrac{11h+3h^2}{h}\).`,
        S`<b>Simplify before letting \(h\to0\).</b> We may divide by \(h\) because \(h\ne0\) in a secant: \(\dfrac{h(11+3h)}{h}=11+3h\).`,
        S`<b>Let \(h\to0\).</b> \(11+3h\to11\). The tangent to the parabola at \((2,10)\) has slope 11.`,
        S`<b>Check numerically.</b> With \(h=0.01\): \(f(2.01)=3(4.0401)-2.01=10.1103\), and \(\frac{10.1103-10}{0.01}=11.03=11+3(0.01)\) ✓`],
      S`\(11\)`,
      plane({ view: { xmin: -1, xmax: 3.2, ymin: -3, ymax: 24 }, curves: [{ f: (x) => 3 * x * x - x, color: "violet", label: "f(x) = 3x² − x" }, { f: (x) => 10 + 11 * (x - 2), a: 1, b: 3, color: "green", label: "tangent: slope 11" }], points: [{ x: 2, y: 10, label: "(2, 10)", color: "red" }], step: { x: 0.5, y: 4 } }, "the tangent at (2, 10) rises 11 for every 1 across")],
    ["With and without simplifying", S`For \(f(x)=x^3\) at \(a=1\), compute the quotient for \(h=0.1, 0.01, 0.001\), then simplify.`,
      [S`<b>Two ways to find a limit.</b> Numbers can <em>suggest</em> the value the quotient approaches; algebra can <em>prove</em> it. We do both and compare.`,
        S`<b>Numerically.</b> \(f(1)=1\). ${tv(["\\(h\\)", "0.1", "0.01", "0.001"], ["\\(f(1+h)\\)", "1.331", "1.030301", "1.003003001"], ["\\(\\dfrac{f(1+h)-1}{h}\\)", "3.31", "3.0301", "3.003001"])} The quotients get closer and closer to 3.`,
        S`<b>Algebraically.</b> Expand the cube: \((1+h)^3=1+3h+3h^2+h^3\). Then \(\dfrac{(1+h)^3-1}{h}=\dfrac{3h+3h^2+h^3}{h}=3+3h+h^2\) for \(h\ne0\).`,
        S`<b>Let \(h\to0\).</b> \(3+3h+h^2\to3+0+0=3\).`,
        S`<b>Compare.</b> The formula \(3+3h+h^2\) explains every number in the table: for \(h=0.1\) it gives \(3+0.3+0.01=3.31\) ✓. The table only showed the trend; the algebra shows the limit is <em>exactly</em> 3.`],
      S`numbers suggest 3; simplifying proves it is exactly 3`,
      plane({ view: { xmin: -0.5, xmax: 1.8, ymin: -1, ymax: 5 }, curves: [{ f: (x) => x ** 3, color: "violet", label: "f(x) = x³" }, { f: (x) => 1 + 3.31 * (x - 1), a: 0.6, b: 1.6, color: "amber" }, { f: (x) => 1 + 3 * (x - 1), color: "green", label: "tangent y = 3x − 2" }], points: [{ x: 1, y: 1, label: "(1, 1)", color: "red" }, { x: 1.1, y: 1.331, color: "amber" }], step: { x: 0.5, y: 1 } }, "amber secant (h = 0.1, slope 3.31) is already close to the green tangent (slope 3)")],
    ["A velocity", S`A ball's height is \(h(t)=-4.9t^2+20t\) m. Find its velocity at \(t=2\).`,
      [S`<b>Meaning.</b> Velocity is the instantaneous rate of change of height, so we need \(\displaystyle\lim_{k\to0}\frac{h(2+k)-h(2)}{k}\). We use \(k\) for the step because \(h\) is already the height function.`,
        S`<b>The values.</b> \(h(2)=-4.9(4)+40=20.4\). \(h(2+k)=-4.9(4+4k+k^2)+40+20k=20.4+0.4k-4.9k^2\).`,
        S`<b>Quotient.</b> \(\dfrac{h(2+k)-h(2)}{k}=\dfrac{0.4k-4.9k^2}{k}=0.4-4.9k\).`,
        S`<b>Limit.</b> As \(k\to0\), \(0.4-4.9k\to0.4\) m/s.`,
        S`<b>Interpret.</b> The velocity is positive but small: the ball is still rising, just before the top. The top is where velocity is 0. From \(20-9.8t=0\) (the same method at a general time) that happens at \(t\approx2.04\) s, just after \(t=2\) ✓`],
      S`0.4 m/s (still rising, almost at the top)`,
      plane({ view: { xmin: 0, xmax: 4.3, ymin: 0, ymax: 24 }, curves: [{ f: (t) => -4.9 * t * t + 20 * t, a: 0, b: 4.08, color: "violet", label: "h(t) = −4.9t² + 20t" }, { f: (t) => 20.4 + 0.4 * (t - 2), a: 1, b: 3, color: "green", label: "slope 0.4" }], points: [{ x: 2, y: 20.4, label: "(2, 20.4)", color: "red" }], step: { x: 0.5, y: 4 }, xlabel: "t (s)", ylabel: "h (m)" }, "near the top the tangent is almost flat")],
    ["A rational function", S`Find the instantaneous rate of change of \(f(x)=\dfrac2x\) at \(x=1\).`,
      [S`<b>Set up.</b> \(f(1)=2\) and \(f(1+h)=\dfrac{2}{1+h}\). The difference quotient is \(\dfrac{\frac{2}{1+h}-2}{h}\).`,
        S`<b>Combine the fractions in the numerator.</b> Use the common denominator \(1+h\): \(\dfrac{2}{1+h}-2=\dfrac{2-2(1+h)}{1+h}=\dfrac{-2h}{1+h}\).`,
        S`<b>Divide by \(h\).</b> \(\dfrac{-2h}{1+h}\cdot\dfrac1h=\dfrac{-2}{1+h}\) (allowed, since \(h\ne0\)).`,
        S`<b>Let \(h\to0\).</b> \(\dfrac{-2}{1+h}\to\dfrac{-2}{1}=-2\).`,
        S`<b>Interpret.</b> The rate is negative, matching the graph: \(y=\frac2x\) falls as \(x\) increases for \(x\gt0\).`,
        S`<b>Check.</b> \(h=0.01\): \(\frac{2/1.01-2}{0.01}=\frac{1.980198-2}{0.01}\approx-1.98\), close to \(-2\) ✓`],
      S`\(-2\)`,
      plane({ view: { xmin: 0, xmax: 4, ymin: 0, ymax: 6 }, curves: [{ f: (x) => 2 / x, a: 0.34, b: 4, color: "violet", label: "f(x) = 2/x" }, { f: (x) => 2 - 2 * (x - 1), color: "green", label: "tangent y = 4 − 2x" }], points: [{ x: 1, y: 2, label: "(1, 2)", color: "red" }], step: { x: 0.5, y: 1 } })],
    ["A square root", S`Find the instantaneous rate of change of \(f(x)=\sqrt x\) at \(x=4\).`,
      [S`<b>Set up.</b> \(\dfrac{f(4+h)-f(4)}{h}=\dfrac{\sqrt{4+h}-2}{h}\). Substituting \(h=0\) gives \(\frac00\), so we must rewrite first.`,
        S`<b>Rationalize the numerator.</b> Multiply top and bottom by the conjugate \(\sqrt{4+h}+2\). The top becomes a difference of squares: \((\sqrt{4+h})^2-2^2=(4+h)-4=h\).`,
        S`<b>Simplify.</b> \(\dfrac{h}{h(\sqrt{4+h}+2)}=\dfrac{1}{\sqrt{4+h}+2}\).`,
        S`<b>Let \(h\to0\).</b> \(\dfrac{1}{\sqrt4+2}=\dfrac14\).`,
        S`<b>Check.</b> \(h=0.01\): \(\sqrt{4.01}\approx2.0024984\), quotient \(\approx\frac{0.0024984}{0.01}=0.24984\approx0.25\) ✓. The tangent at \((4,2)\) is \(y=2+\tfrac14(x-4)=\tfrac14x+1\).`],
      S`\(\tfrac14\)`,
      plane({ view: { xmin: -0.5, xmax: 9, ymin: -0.5, ymax: 4 }, curves: [{ f: (x) => Math.sqrt(x), a: 0, b: 9, color: "violet", label: "f(x) = √x" }, { f: (x) => 0.25 * x + 1, color: "green", label: "tangent y = ¼x + 1" }], points: [{ x: 4, y: 2, label: "(4, 2)", color: "red" }], step: { x: 1, y: 1 } })],
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
