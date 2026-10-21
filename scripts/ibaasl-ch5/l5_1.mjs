// IB AA SL 5.1 — Limits and Convergence: limits from tables and graphs, removable gaps, limits at infinity, convergent sequences
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";

export const TITLE = "5.1 Limits and Convergence";
export const ID = "7263af75-2709-48b4-b688-43b43c92bb1c";
const S = String.raw;
const P = (x, y, label, color = "blue") => ({ x, y, label, color });
const O = (x, y, label, color = "violet") => ({ x, y, label, color, open: true });

export const blocks = () => [
  intro({
    icon: "🎯",
    title: "Limits and Convergence",
    overview: S`Calculus is built on one idea: what value does a quantity approach as something else gets closer and closer to a target? That value is a limit. In this lesson you will estimate limits from tables and graphs, find them algebraically when direct substitution gives \(\frac00\), describe the behaviour of functions as \(x\to\infty\), and decide whether a sequence converges. These ideas lead directly to the derivative in 5.2.`,
    goals: [
      "estimate \\(\\lim_{x\\to a}f(x)\\) from a table of values approaching \\(a\\) from both sides;",
      "read limits from a graph, including where \\(f(a)\\) does not exist;",
      "find limits by factorising and cancelling when substitution gives \\(\\frac00\\);",
      "find limits as \\(x\\to\\infty\\) and link them to horizontal asymptotes;",
      "decide whether a sequence converges and find its limit.",
    ],
    curriculum: "SL 5.1 (introduction to the concept of a limit; convergence of sequences and limits of functions, informally)",
    prior: [
      [S`Factorise \(x^2-9\).`, S`\((x-3)(x+3)\).`],
      [S`State the horizontal asymptote of \(y=\frac{2x+1}{x-4}\).`, S`\(y=2\).`],
      [S`Find the sum to infinity of \(8+4+2+\dots\).`, S`\(\frac{8}{1-0.5}=16\).`],
    ],
    words: [
      ["Limit", "the value f(x) approaches as x approaches a", "\\(\\lim_{x\\to2}(3x+1)=7\\)"],
      ["One-sided limit", "approaching from the left (\\(x\\to a^-\\)) or right (\\(x\\to a^+\\))", "\\(x\\to0^+\\)"],
      ["Indeterminate form", "\\(\\frac00\\): substitution gives no answer", "\\(\\frac{x^2-1}{x-1}\\) at 1"],
      ["Limit at infinity", "the value approached as \\(x\\to\\infty\\)", "\\(\\frac1x\\to0\\)"],
      ["Convergent sequence", "its terms approach a fixed number", "\\(u_n=\\frac{n}{n+1}\\to1\\)"],
    ],
  }),

  section("📌 Limits from tables and graphs", S`
  <p>\(f(x)=\frac{x^2-9}{x-3}\) is not defined at \(x=3\). But a table shows what happens <em>near</em> 3: from both sides the values approach 6. We write \(\lim_{x\to3}f(x)=6\). The graph is the line \(y=x+3\) with a hole at \((3,6)\).</p>
  ${table(["x", "2.9", "2.99", "2.999", "3.001", "3.01", "3.1"], [["f(x)", "5.9", "5.99", "5.999", "6.001", "6.01", "6.1"]])}
  ${plane({ view: { xmin: -1, xmax: 6, ymin: -1, ymax: 10 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => x + 3, color: "violet" }], points: [O(3, 6, "hole (3, 6)")] }, "y = (x² − 9)/(x − 3): the line y = x + 3 with a hole at x = 3")}
  ${plane({ view: { xmin: -3, xmax: 3, ymin: -2, ymax: 3 }, step: { x: 1, y: 1 }, curves: [{ f: () => -1, a: -3, b: -0.01, color: "violet" }, { f: () => 1, a: 0.01, b: 3, color: "violet" }], points: [O(0, -1, "(0, −1)"), O(0, 1, "(0, 1)")] }, "y = |x|/x: −1 from the left, 1 from the right — no limit at 0")}
  ${keyIdea(S`\(\lim_{x\to a}f(x)=L\) means \(f(x)\) can be made as close to \(L\) as we like by taking \(x\) close enough to \(a\) (from both sides). The value \(f(a)\) does not matter — it may not even exist.`)}`),

  section("📌 Algebra, infinity and sequences", S`
  <p>If substitution gives a number, that is the limit: \(\lim_{x\to2}(x^2+1)=5\). If it gives \(\frac00\), simplify first — usually by factorising and cancelling the factor that is zero.</p>
  <p style="text-align:center">\(\displaystyle\lim_{x\to-2}\frac{x^2+5x+6}{x+2}=\lim_{x\to-2}\frac{(x+2)(x+3)}{x+2}=\lim_{x\to-2}(x+3)=1\)</p>
  <p>As \(x\to\infty\), terms like \(\frac{1}{x}\) and \(\frac{5}{x^2}\) tend to 0. Dividing top and bottom by \(x\) gives \(\lim_{x\to\infty}\frac{3x+2}{x-1}=\lim\frac{3+\frac2x}{1-\frac1x}=3\): the horizontal asymptote.</p>
  ${plane({ view: { xmin: -2, xmax: 20, ymin: -2, ymax: 10 }, step: { x: 2, y: 1 }, curves: [{ f: (x) => (3 * x + 2) / (x - 1), a: 1.6, b: 20, color: "violet" }], lines: [{ m: 0, b: 3, color: "red", dash: true }] }, "(3x + 2)/(x − 1) → 3 as x → ∞")}
  <p>A sequence <em>converges</em> if its terms approach a number. \(u_n=\frac{2n+1}{n}=2+\frac1n\) converges to 2; \(u_n=(-1)^n\) does not converge; a geometric sequence with \(|r|<1\) converges to 0, which is why its series has a sum to infinity.</p>
  ${plane({ view: { xmin: 0, xmax: 11, ymin: -0.5, ymax: 4 }, step: { x: 1, y: 0.5 }, curves: [], lines: [{ m: 0, b: 2, color: "red", dash: true }], points: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => P(n, 2 + 1 / n, n === 1 ? "u₁ = 3" : null, "blue")).map((p) => p.label === null ? { ...p, label: undefined } : p) }, "u_n = 2 + 1/n converges to 2")}
  ${plane({ view: { xmin: 0, xmax: 9, ymin: -1, ymax: 17 }, step: { x: 1, y: 2 }, curves: [], lines: [{ m: 0, b: 16, color: "red", dash: true }], points: [1, 2, 3, 4, 5, 6, 7, 8].map((n) => ({ x: n, y: 16 * (1 - 0.5 ** n), color: "green" })) }, "Partial sums of 8 + 4 + 2 + … converge to 16")}
  ${watchOut([
    "A limit can exist even when f(a) does not (a hole), and can differ from f(a).",
    "0/0 is not a value: it means 'simplify and try again'.",
    "Both one-sided limits must agree for the limit to exist.",
    "∞ is not a number; 'the limit is ∞' means the values grow without bound, so there is no finite limit.",
  ])}`),

  section("📌 Explore", S`<p>Pick a function and shrink the distance \(h\). Watch the left and right values: do they settle on the same number?</p>`),

  widget("ibLimit", { init: 0 }),

  examples([
    ["Level 1 · From a table", S`Use a table to estimate \(\lim_{x\to1}\frac{x^3-1}{x-1}\).`,
      [S`\(x=0.99\): \(2.9701\); \(x=1.01\): \(3.0301\); \(x=0.999\): \(2.997\); \(x=1.001\): \(3.003\).`, "Both sides approach 3."],
      S`\(3\)`],
    ["Level 1 · From a graph", S`For the function shown, find \(\lim_{x\to2}f(x)\) and \(f(2)\).`,
      [S`The curve approaches the open circle at \((2,1)\) from both sides.`, S`The filled point shows \(f(2)=4\).`],
      S`limit \(1\); \(f(2)=4\)`,
      plane({ view: { xmin: -1, xmax: 5, ymin: -2, ymax: 5 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => (x - 2) ** 2 + 1, a: -1, b: 1.98, color: "violet" }, { f: (x) => (x - 2) ** 2 + 1, a: 2.02, b: 5, color: "violet" }], points: [O(2, 1, "(2, 1)"), P(2, 4, "(2, 4)", "red")] })],
    ["Level 2 · Factorise and cancel", S`Find \(\lim_{x\to4}\frac{x^2-2x-8}{x-4}\).`,
      [S`Substitution gives \(\frac00\).`, S`\(\frac{(x-4)(x+2)}{x-4}=x+2\) for \(x\ne4\).`, S`Limit \(4+2=6\).`],
      S`\(6\)`],
    ["Level 2 · At infinity", S`Find \(\lim_{x\to\infty}\frac{5x-3}{2x+7}\) and \(\lim_{n\to\infty}\left(4-\frac{3}{n^2}\right)\).`,
      [S`Divide by \(x\): \(\frac{5-\frac3x}{2+\frac7x}\to\frac52\).`, S`\(\frac{3}{n^2}\to0\), so the sequence converges to 4.`],
      S`\(2.5\) and \(4\)`],
    ["Level 3 · Towards the derivative", S`For \(f(x)=x^2\), simplify \(\frac{f(3+h)-f(3)}{h}\) and find its limit as \(h\to0\). Interpret the result.`,
      [S`\(\frac{9+6h+h^2-9}{h}=\frac{6h+h^2}{h}=6+h\) for \(h\ne0\).`, S`As \(h\to0\), \(6+h\to6\).`, S`The secant gradients between \(x=3\) and \(x=3+h\) approach 6: the gradient of the tangent at \((3,9)\).`],
      S`\(6+h\to6\)`,
      plane({ view: { xmin: -1, xmax: 6, ymin: -2, ymax: 26 }, step: { x: 1, y: 2 }, curves: [{ f: (x) => x * x, color: "violet" }, { f: (x) => 7 * (x - 3) + 9, color: "green" }, { f: (x) => 6 * (x - 3) + 9, color: "red" }], points: [P(3, 9, "(3, 9)"), P(4, 16, "(4, 16)", "green")] }, "Secant through x = 3 and 4 (gradient 7) and the tangent at x = 3 (gradient 6)")],
  ]),

  practice([
    q("Level 1 · substitution", S`Find \(\lim_{x\to3}(2x^2-5)\).`, num(13),
      "Substitute directly.", [S`\(18-5\).`], S`\(13\)`),
    q("Level 1 · at infinity", S`Find \(\lim_{x\to\infty}\frac{7}{x+2}\).`, num(0),
      "The denominator grows without bound.", [S`\(\frac{7}{\text{large}}\to0\).`], S`\(0\)`),
    q("Level 2 · cancel", S`Find \(\lim_{x\to5}\frac{x^2-25}{x-5}\).`, num(10),
      "Factorise the top.", [S`\(x+5\to10\).`], S`\(10\)`),
    q("Level 2 · rational", S`Find \(\lim_{x\to\infty}\frac{6x+1}{3x-2}\).`, num(2),
      "Divide by x.", [S`\(\frac63\).`], S`\(2\)`),
    q("Level 2 · sequences", S`Which sequence converges?`, choice([S`\(u_n=\frac{n+4}{n}\)`, S`\(u_n=(-1)^n\)`, S`\(u_n=2n\)`, S`\(u_n=n^2-n\)`], 0),
      "Rewrite each term.", [S`\(1+\frac4n\to1\).`], S`\(\frac{n+4}{n}\)`),
  ]),

  ...hard([
    ["A limit with a parameter", S`Find \(k\) so that \(\lim_{x\to2}\frac{x^2+kx-10}{x-2}\) exists, and find the limit.`,
      [S`For a finite limit the top must be 0 at \(x=2\): \(4+2k-10=0\Rightarrow k=3\).`, S`\(\frac{x^2+3x-10}{x-2}=\frac{(x-2)(x+5)}{x-2}=x+5\).`, S`Limit \(7\).`],
      S`\(k=3\); limit \(7\)`],
    ["A difference quotient", S`For \(f(x)=x^2-4x\), simplify \(\frac{f(1+h)-f(1)}{h}\) and find its limit as \(h\to0\).`,
      [S`\(f(1+h)=1+2h+h^2-4-4h=h^2-2h-3\); \(f(1)=-3\).`, S`\(\frac{h^2-2h}{h}=h-2\).`, S`Limit \(-2\): the tangent gradient at \(x=1\).`],
      S`\(h-2\to-2\)`,
      plane({ view: { xmin: -1, xmax: 5, ymin: -6, ymax: 4 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => x * x - 4 * x, color: "violet" }, { f: (x) => -2 * (x - 1) - 3, color: "red" }], points: [P(1, -3, "(1, −3)")] }, "Tangent at x = 1 has gradient −2")],
  ], [
    q("Level 3 · cubic", S`Find \(\lim_{x\to3}\frac{x^3-27}{x-3}\).`, num(27),
      "x³ − 27 = (x − 3)(x² + 3x + 9).", [S`\(9+9+9\).`], S`\(27\)`),
    q("Level 3 · sum to infinity", S`The partial sums of \(12+4+\frac43+\dots\) converge. Find the limit.`, num(18),
      "Geometric with r = 1/3.", [S`\(\frac{12}{1-\frac13}\).`], S`\(18\)`),
    q("Level 3 · quotient", S`For \(f(x)=3x^2\), find \(\lim_{h\to0}\frac{f(2+h)-f(2)}{h}\).`, num(12),
      "Expand 3(2 + h)².", [S`\(\frac{12h+3h^2}{h}=12+3h\).`], S`\(12\)`),
  ]),

  wrapUp({
    qas: [
      ["Is the limit the same as the value of the function?", "Often, but not always: at a hole the function has no value but the limit exists, and a function can be redefined at one point without changing the limit."],
      ["What should I do with 0/0?", "Simplify — factorise and cancel, or expand — then substitute again."],
      ["How do I find a limit as x → ∞?", "Divide every term by the highest power of x in the denominator; terms like 1/x then tend to 0."],
      ["When does a sequence converge?", "When its terms approach a fixed number; e.g. geometric sequences with |r| < 1 converge to 0."],
      ["Why do limits matter for calculus?", "The gradient of a tangent is the limit of secant gradients as the second point moves onto the first."],
    ],
    summary: [
      "lim f(x) as x → a: the value approached from both sides.",
      "0/0: simplify, then substitute.",
      "x → ∞: divide by the highest power; links to horizontal asymptotes.",
      "Convergent sequence: terms approach a fixed number.",
      "Secant gradients → tangent gradient (next lesson).",
    ],
    next: "5.2 uses limits to define the derivative function.",
  }),
];
