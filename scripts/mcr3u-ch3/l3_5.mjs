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
      [S`\((3x+1)(x-2)=0\).`, S`\(3x+1=0\) or \(x-2=0\).`],
      S`\(x=-\tfrac13\) or \(x=2\)`],
    ["Exact roots", S`Solve \(x^2-4x-7=0\) exactly.`,
      [S`\(x=\frac{4\pm\sqrt{16+28}}{2}=\frac{4\pm\sqrt{44}}{2}\).`, S`\(\sqrt{44}=2\sqrt{11}\), so \(x=\frac{4\pm2\sqrt{11}}{2}=2\pm\sqrt{11}\).`],
      S`\(x=2\pm\sqrt{11}\approx5.32,\ -1.32\)`],
    ["Rearrange first", S`Solve \(2x(x-3)=x+5\).`,
      [S`\(2x^2-6x-x-5=0\Rightarrow2x^2-7x-5=0\).`, S`\(x=\frac{7\pm\sqrt{49+40}}{4}=\frac{7\pm\sqrt{89}}{4}\).`],
      S`\(x\approx4.11\) or \(x\approx-0.61\)`],
    ["Height model", S`A ball's height is \(h(t)=-4.9t^2+14.7t+2\) m. For how long is it above 12 m?`,
      [S`\(-4.9t^2+14.7t-10=0\): \(D=216.09-196=20.09\).`, S`\(t=\frac{14.7\mp\sqrt{20.09}}{9.8}\approx1.04\) and \(1.96\).`],
      "about 0.91 s (from 1.04 s to 1.96 s)",
      plane({ view: { xmin: 0, xmax: 3.5, ymin: 0, ymax: 16 }, curves: [{ f: (t) => -4.9 * t * t + 14.7 * t + 2, a: 0, color: "violet" }], lines: [{ m: 0, b: 12, color: "amber", dash: true }], points: [{ x: 1.04, y: 12, label: "(1.04, 12)" }, { x: 1.96, y: 12, label: "(1.96, 12)" }], step: { x: 0.5, y: 2 }, xlabel: "t (s)", ylabel: "h (m)" })],
    ["Break-even", S`Profit is \(P(x)=-2x^2+28x-66\) thousand dollars for \(x\) thousand items. When does the company make a profit?`,
      [S`\(P=0\): \(x^2-14x+33=0\Rightarrow x=\frac{14\pm\sqrt{64}}{2}=11\) or \(3\).`, S`The parabola opens down, so \(P>0\) between the zeros.`],
      S`for \(3<x<11\) (between 3000 and 11 000 items)`],
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
