// MCR3U 3.5 — Solving Quadratic Equations: factoring, the formula with exact radical roots, rearranging,
// projectile and area models, break-even points and intervals
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, q, num, roots, rootsT, hard, plane } from "./lib.mjs";

export const TITLE = "3.5 Solving Quadratic Equations";
export const ID = "5c3e0001-0001-4001-8001-000000000303";
const S = String.raw;

export const blocks = () => [
  intro({
    icon: "🎯",
    title: "Solving Quadratic Equations",
    overview: S`Many questions about quadratic models — when does the ball land, when does the company break even, how wide is the path — end with a quadratic equation. In this lesson you will solve them by factoring or with the quadratic formula, give exact answers with simplified radicals, rearrange equations into standard form first, and decide which solutions make sense in the context.`,
    goals: [
      "solve quadratic equations by factoring;",
      "solve with the quadratic formula and give exact and rounded roots;",
      "rearrange an equation into the form ax² + bx + c = 0 first;",
      "solve f(x) = k for a model and interpret both roots;",
      "reject roots that do not fit the context.",
    ],
    curriculum: "A2.3 (solve problems involving quadratic functions arising from real-world applications and represented using function notation), A3.2 (simplify radicals in answers)",
    prior: [
      [S`Factor \(2x^2+x-6\).`, S`\((2x-3)(x+2)\).`],
      [S`Simplify \(\sqrt{44}\).`, S`\(2\sqrt{11}\).`],
      [S`State the quadratic formula.`, S`\(x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}\).`],
    ],
    words: [
      ["Root", "a solution of \\(f(x)=0\\) (a zero of \\(f\\))", ""],
      ["Exact form", "answer kept as fractions and radicals", "\\(2\\pm\\sqrt{11}\\)"],
      ["Break-even point", "where profit is 0", ""],
      ["Inadmissible root", "a solution that does not fit the context", "negative time"],
    ],
  }),

  section("📌 Choosing a method", S`
  <p>First write the equation as \(ax^2+bx+c=0\). If it factors easily, factor and use the zero-product property. Otherwise use the formula. The formula always works and gives exact answers; round only at the end.</p>
  ${keyIdea(S`\(x=\dfrac{-b\pm\sqrt{b^2-4ac}}{2a}\). Simplify the radical and then reduce: \(\frac{4\pm2\sqrt{11}}{2}=2\pm\sqrt{11}\).`)}`),

  section("📌 Explore", S`<p>Use the formula explorer to see each step of the formula for different equations.</p>`),

  widget("formulaLab", { init: [1, -4, -7] }),

  section("📌 Heights and intervals", S`
  <p>For a projectile \(h(t)=-4.9t^2+v_0t+h_0\), solving \(h(t)=H\) gives the two moments the object passes height \(H\) — on the way up and on the way down. The time between them is how long it stays above \(H\).</p>`),

  widget("heightInterval", { init: [14.7, 2, 12] }),

  section("📌 Watch out", watchOut([
    "Set the equation equal to 0 before factoring.",
    "Divide the whole numerator by 2a — not just the first term.",
    "Time and lengths cannot be negative: check each root against the context.",
    "Keep exact values until the final step; rounded intermediate values add error.",
  ])),

  examples([
    ["Factoring", S`Solve \(3x^2-5x-2=0\).`,
      [S`<b>Method.</b> Look for two numbers with product \(ac=-6\) and sum \(b=-5\): these are \(-6\) and \(1\).`,
        S`<b>Split the middle term.</b> \(3x^2-6x+x-2=0\). Group: \(3x(x-2)+1(x-2)=0\), so \((3x+1)(x-2)=0\).`,
        S`<b>Zero product.</b> A product is 0 only if a factor is 0: \(3x+1=0\) or \(x-2=0\).`,
        S`<b>Solve.</b> \(x=-\tfrac13\) or \(x=2\).`,
        S`<b>Check.</b> \(x=2\): \(12-10-2=0\) ✓. \(x=-\tfrac13\): \(\tfrac13+\tfrac53-2=0\) ✓. The parabola crosses the x-axis at both values.`],
      S`\(x=-\tfrac13\) or \(x=2\)`,
      plane({ view: { xmin: -2, xmax: 4, ymin: -6, ymax: 8 }, curves: [{ f: (x) => 3 * x * x - 5 * x - 2, color: "violet" }], points: [{ x: -1 / 3, y: 0, label: "(−1/3, 0)", color: "amber" }, { x: 2, y: 0, label: "(2, 0)", color: "amber" }], step: { x: 1, y: 2 } })],
    ["Exact roots", S`Solve \(x^2-4x-7=0\) exactly.`,
      [S`<b>Choose the method.</b> No integers have product \(-7\) and sum \(-4\), so we use the quadratic formula with \(a=1\), \(b=-4\), \(c=-7\).`,
        S`<b>Substitute.</b> \(x=\frac{4\pm\sqrt{(-4)^2-4(1)(-7)}}{2}=\frac{4\pm\sqrt{16+28}}2=\frac{4\pm\sqrt{44}}2\).`,
        S`<b>Simplify the root.</b> \(\sqrt{44}=\sqrt{4\cdot11}=2\sqrt{11}\).`,
        S`<b>Divide.</b> Both terms in the numerator are divisible by 2: \(x=2\pm\sqrt{11}\).`,
        S`<b>Check.</b> Sum of roots \(=4=-\frac ba\) ✓. Product \(=4-11=-7=\frac ca\) ✓. In decimals, the roots are about \(5.32\) and \(-1.32\), as the graph shows.`],
      S`\(x=2\pm\sqrt{11}\approx5.32,\ -1.32\)`,
      plane({ view: { xmin: -3, xmax: 7, ymin: -12, ymax: 8 }, curves: [{ f: (x) => x * x - 4 * x - 7, color: "violet" }], points: [{ x: 5.317, y: 0, label: "(5.32, 0)", color: "amber" }, { x: -1.317, y: 0, label: "(−1.32, 0)", color: "amber" }, { x: 2, y: -11, label: "(2, −11)" }], step: { x: 1, y: 2 } })],
    ["Rearrange first", S`Solve \(2x(x-3)=x+5\).`,
      [S`<b>Standard form first.</b> The zero-product rule and the formula both need one side equal to 0. Expand: \(2x^2-6x=x+5\).`,
        S`<b>Collect.</b> Subtract \(x+5\): \(2x^2-7x-5=0\). So \(a=2\), \(b=-7\), \(c=-5\).`,
        S`<b>Formula.</b> \(x=\frac{7\pm\sqrt{49+40}}4=\frac{7\pm\sqrt{89}}4\).`,
        S`<b>Decimals.</b> \(\sqrt{89}\approx9.434\), so \(x\approx\frac{16.434}4\approx4.11\) or \(x\approx\frac{-2.434}4\approx-0.61\).`,
        S`<b>Check in the original.</b> For \(x\approx4.11\): left \(\approx2(4.11)(1.11)\approx9.12\); right \(\approx9.11\) ✓ (rounding). On the graph, the parabola and the line meet at these x-values.`],
      S`\(x=\frac{7\pm\sqrt{89}}{4}\), so \(x\approx4.11\) or \(x\approx-0.61\)`,
      plane({ view: { xmin: -2, xmax: 6, ymin: -2, ymax: 14 }, curves: [{ f: (x) => 2 * x * (x - 3), color: "violet" }], lines: [{ m: 1, b: 5, color: "blue" }], points: [{ x: 4.11, y: 9.11, label: "(4.11, 9.11)", color: "amber" }, { x: -0.61, y: 4.39, label: "(−0.61, 4.39)", color: "amber" }], step: { x: 1, y: 2 } })],
    ["Height model", S`A ball's height is \(h(t)=-4.9t^2+14.7t+2\) m. For how long is it above 12 m?`,
      [S`<b>Plan.</b> Find when the height equals 12, since the ball is above 12 m between those two times.`,
        S`<b>Set up.</b> \(-4.9t^2+14.7t+2=12\), so \(-4.9t^2+14.7t-10=0\).`,
        S`<b>Discriminant.</b> \(D=14.7^2-4(-4.9)(-10)=216.09-196=20.09\). Its root is about \(4.482\).`,
        S`<b>Formula.</b> \(t=\frac{-14.7\pm4.482}{-9.8}\), which gives \(t\approx1.04\) and \(t\approx1.96\).`,
        S`<b>Duration.</b> \(1.96-1.04\approx0.91\) s, using unrounded values.`,
        S`<b>Check.</b> The axis is \(t=1.5\), and \(1.04\) and \(1.96\) are symmetric about it ✓`],
      "about 0.91 s (from 1.04 s to 1.96 s)",
      plane({ view: { xmin: 0, xmax: 3.5, ymin: 0, ymax: 16 }, curves: [{ f: (t) => -4.9 * t * t + 14.7 * t + 2, a: 0, color: "violet" }], lines: [{ m: 0, b: 12, color: "amber", dash: true }], points: [{ x: 1.04, y: 12, label: "(1.04, 12)" }, { x: 1.96, y: 12, label: "(1.96, 12)" }], step: { x: 0.5, y: 2 }, xlabel: "t (s)", ylabel: "h (m)" })],
    ["Break-even", S`Profit is \(P(x)=-2x^2+28x-66\) thousand dollars for \(x\) thousand items. When does the company make a profit?`,
      [S`<b>Plan.</b> Profit changes sign at the break-even points, where \(P=0\).`,
        S`<b>Simplify.</b> Divide \(P=0\) by \(-2\): \(x^2-14x+33=0\).`,
        S`<b>Solve.</b> \(x=\frac{14\pm\sqrt{196-132}}2=\frac{14\pm8}2\), so \(x=11\) or \(x=3\).`,
        S`<b>Which side is profit?</b> \(a=-2<0\), so the parabola opens down and is above the axis between its zeros.`,
        S`<b>Check.</b> \(P(7)=-98+196-66=32>0\) ✓. \(P(1)=-2+28-66=-40<0\) ✓`],
      S`for \(3<x<11\) (between 3000 and 11 000 items)`,
      plane({ view: { xmin: 0, xmax: 14, ymin: -45, ymax: 40 }, curves: [{ f: (x) => -2 * x * x + 28 * x - 66, color: "violet" }], points: [{ x: 3, y: 0, label: "(3, 0)", color: "amber" }, { x: 11, y: 0, label: "(11, 0)", color: "amber" }, { x: 7, y: 32, label: "(7, 32)" }, { x: 1, y: -40, label: "(1, −40)" }], step: { x: 1, y: 10 }, ylabel: "P" })],
  ]),

  practice([
    q("factor", S`Solve \(x^2-x-12=0\).`, roots(4, -3),
      "Two numbers with product −12 and sum −1.", [S`\((x-4)(x+3)=0\).`], S`\(x=4,\ -3\)`),
    q("factor, a ≠ 1", S`Solve \(2x^2+7x+3=0\).`, roots(-0.5, -3),
      "Decompose 7x as 6x + x.", [S`\((2x+1)(x+3)=0\).`], S`\(x=-\tfrac12,\ -3\)`),
    q("formula", S`Solve \(x^2+6x+2=0\). Round to two decimals.`, rootsT(0.01, -3 + Math.sqrt(7), -3 - Math.sqrt(7)),
      "D = 36 − 8 = 28.", [S`\(x=\frac{-6\pm\sqrt{28}}{2}=-3\pm\sqrt7\).`], S`\(x\approx-0.35,\ -5.65\)`),
    q("model", S`A stone's height is \(h(t)=-5t^2+20t+25\) m. When does it land?`, num(5),
      "Set h = 0 and divide by −5.", [S`\(t^2-4t-5=0\Rightarrow(t-5)(t+1)=0\); reject \(-1\).`], S`\(t=5\) s`),
    q("area", "A rectangle is 3 m longer than it is wide and has area 70 m². Find the width.", num(7),
      "w(w + 3) = 70.", [S`\(w^2+3w-70=0\Rightarrow(w+10)(w-7)=0\).`], S`\(7\) m`),
  ]),

  ...hard([
    ["A path around a garden", S`A 12 m by 8 m garden is surrounded by a path of uniform width. The garden and path together cover 192 m². How wide is the path?`,
      [S`\((12+2w)(8+2w)=192\Rightarrow96+40w+4w^2=192\).`, S`\(4w^2+40w-96=0\Rightarrow w^2+10w-24=0\Rightarrow(w+12)(w-2)=0\).`, S`Reject \(w=-12\).`],
      "2 m",
      plane({ view: { xmin: -1, xmax: 17, ymin: -1, ymax: 13 }, segs: [{ pts: [[0, 0], [16, 0], [16, 12], [0, 12], [0, 0]], color: "amber" }, { pts: [[2, 2], [14, 2], [14, 10], [2, 10], [2, 2]], color: "green" }], step: { x: 2, y: 2 } })],
    ["Exact and simplified", S`Solve \(3x^2-2x-4=0\) exactly, in simplest form.`,
      [S`\(x=\frac{2\pm\sqrt{4+48}}{6}=\frac{2\pm\sqrt{52}}{6}\).`, S`\(\sqrt{52}=2\sqrt{13}\): \(x=\frac{2\pm2\sqrt{13}}{6}=\frac{1\pm\sqrt{13}}{3}\).`],
      S`\(x=\frac{1\pm\sqrt{13}}{3}\approx1.54,\ -0.87\)`],
  ], [
    q("hard", "Two consecutive positive odd integers have a product of 323. What is the smaller one?", num(17),
      "n(n + 2) = 323.", [S`\(n^2+2n-323=0\Rightarrow(n+19)(n-17)=0\).`], S`\(17\)`),
    q("hard", S`\(h(t)=-4.9t^2+19.6t+1.5\). For how many seconds is the object above 16.2 m?`, num(2),
      "Solve h(t) = 16.2.", [S`\(-4.9t^2+19.6t-14.7=0\Rightarrow t^2-4t+3=0\Rightarrow t=1,\ 3\).`], S`\(2\) s`),
    q("hard", S`Solve \(x^2-10x+18=0\). Round to two decimals.`, rootsT(0.01, 5 + Math.sqrt(7), 5 - Math.sqrt(7)),
      "Complete the square or use the formula.", [S`\((x-5)^2=7\Rightarrow x=5\pm\sqrt7\).`], S`\(x\approx7.65,\ 2.35\)`),
  ]),

  wrapUp({
    qas: [
      ["When should I factor instead of using the formula?", "When the factors are easy to see. The formula always works, so use it when factoring stalls."],
      ["Why keep exact answers?", "Radicals are exact; decimals are approximations. Round only for a final measurement."],
      ["What if the context gives two positive answers?", "Both may be meaningful — e.g. passing a height on the way up and on the way down."],
      ["How do break-even points relate to the graph?", "They are the zeros of the profit function; profit is positive between them when the parabola opens down."],
      ["Can a quadratic equation have no solution?", "Yes, when b² − 4ac < 0. 3.6 studies this."],
    ],
    summary: [
      "Standard form first: ax² + bx + c = 0.",
      "Factor, or use x = (−b ± √(b² − 4ac)) / (2a).",
      "Simplify radicals; reduce the whole fraction.",
      "Check roots against the context.",
    ],
    next: "3.6 predicts the number of zeros with the discriminant.",
  }),
];
