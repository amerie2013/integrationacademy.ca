// MHF4U 7.4 — Solving Logarithmic Equations (NEW): log = number (rewrite in exponential form), log = log
// (equate arguments), condensing with the product/quotient/power laws, and rejecting extraneous roots.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane, roots } from "./lib.mjs";

export const TITLE = "7.4 Solving Logarithmic Equations";
export const ID = "6d4f0007-0001-4001-8001-000000000704";

const S = String.raw;
const L = Math.log10;
const lg = (b) => (x) => Math.log(x) / Math.log(b);
export const blocks = () => [
  intro({
    icon: "🔍",
    title: "Solving Logarithmic Equations",
    overview: S`A logarithmic equation has the unknown inside a logarithm, as in \(\log_3(2x+1)=4\) or \(\log x+\log(x-3)=1\). Two moves solve almost all of them: condense each side to a single logarithm with the laws from 7.3, then either rewrite in exponential form or set the arguments equal. Because a logarithm only accepts positive arguments, the algebra can produce answers that do not work, so every solution must be checked in the original equation.`,
    goals: [
      "solve \\(\\log_b(\\text{expression})=c\\) by rewriting in exponential form;",
      "solve \\(\\log_bA=\\log_bB\\) by setting \\(A=B\\);",
      "condense sums and differences of logarithms before solving;",
      "identify and reject extraneous roots;",
      "solve equations that are quadratic in \\(\\log x\\).",
    ],
    curriculum: "A3.3 (solve simple logarithmic equations in one variable algebraically, including problems arising from real-world applications)",
    prior: [
      [S`Rewrite \(\log_2 x=5\) in exponential form.`, S`\(x=2^5=32\).`],
      [S`Condense \(\log x+\log(x+1)\).`, S`\(\log\big(x(x+1)\big)\).`],
      [S`For which \(x\) is \(\log(x-4)\) defined?`, S`\(x>4\).`],
    ],
    words: [
      ["Logarithmic equation", "an equation with the unknown inside a logarithm", "\\(\\log_5(x-1)=2\\)"],
      ["Exponential form", "\\(\\log_bA=c\\iff A=b^c\\)", "\\(\\log_3A=4\\iff A=81\\)"],
      ["Equating arguments", "\\(\\log_bA=\\log_bB\\iff A=B\\) (with \\(A,B>0\\))", "\\(\\log(x+4)=\\log9\\Rightarrow x=5\\)"],
      ["Extraneous root", "a solution of the algebra that fails the original equation", "\\(x=-2\\) in \\(\\log x+\\log(x-3)=1\\)"],
    ],
  }),

  section("📌 Two kinds of logarithmic equation", S`
  ${table(["Form", "Method", "Example"], [
    ["\\(\\log_bA=c\\) (a number)", "rewrite as \\(A=b^c\\)", "\\(\\log_2(x+3)=5\\Rightarrow x+3=32\\)"],
    ["\\(\\log_bA=\\log_bB\\)", "set \\(A=B\\)", "\\(\\log_7(2x)=\\log_7(x+6)\\Rightarrow2x=x+6\\)"],
    ["several logs on one side", "condense first (7.3), then one of the above", "\\(\\log x+\\log(x-3)=\\log\\big(x(x-3)\\big)\\)"],
  ])}
  ${keyIdea(S`\(\log_bA\) exists only when \(A>0\). Condensing can <b>enlarge</b> the domain (for example \(\log x+\log(x-3)\) needs \(x>3\), but \(\log\big(x(x-3)\big)\) also accepts \(x<0\)), so a root of the condensed equation may be <b>extraneous</b>. Always substitute every answer into the <b>original</b> equation.`)}`),

  widget("ibLogGraph", { init: [2, 0, 0] }),

  section("📌 Seeing an extraneous root", S`
  <p>Solve \(\log x+\log(x-3)=1\) graphically: the left side is only defined for \(x>3\), and its graph meets \(y=1\) once, at \(x=5\). The condensed equation \(x(x-3)=10\) also gives \(x=-2\), but no part of the original graph exists there.</p>
  ${plane({ view: { xmin: -4, xmax: 10, ymin: -2, ymax: 2.5 }, curves: [{ f: (x) => L(x) + L(x - 3), a: 3.001, color: "violet" }, { f: (x) => L(x * (x - 3)), b: -0.0001, color: "gray" }], lines: [{ m: 0, b: 1, color: "blue", dash: true }], points: [{ x: 5, y: 1, label: "(5, 1)", color: "amber" }, { x: -2, y: 1, label: "(−2, 1) extraneous", color: "red" }], step: { x: 1, y: 0.5 } }, "Violet: log x + log(x − 3) (x > 3 only). Gray: the extra branch of log(x(x − 3)) for x < 0.")}
  ${watchOut([
    "log(x + 2) = 3 does not mean x + 2 = 3: rewrite as x + 2 = 10³.",
    "Do not cancel 'log': log A = log B gives A = B only when both sides are single logs with the same base.",
    "log x + log(x − 3) is log(x(x − 3)), not log(2x − 3).",
    "Check every root in the original equation; reject any that makes an argument zero or negative.",
    "A negative answer is not automatically wrong: it is fine if every argument is still positive.",
  ])}`),

  examples([
    ["Logarithm equals a number", S`Solve \(\log_3(2x+1)=4\).`,
      [S`<b>Exponential form:</b> \(\log_bA=c\iff A=b^c\), so \(2x+1=3^4=81\).`,
        S`<b>Solve:</b> \(2x=80\), so \(x=40\).`,
        S`<b>Check the argument:</b> \(2(40)+1=81>0\) ✓, and \(\log_381=4\) because \(3^4=81\) ✓`],
      S`\(x=40\)`],
    ["Logarithm equals logarithm", S`Solve \(\log(x+4)=\log(3x-6)\).`,
      [S`<b>Rule:</b> \(\log\) is one-to-one, so equal logarithms (same base) have equal arguments: \(x+4=3x-6\).`,
        S`<b>Solve:</b> \(10=2x\), so \(x=5\).`,
        S`<b>Check the arguments:</b> \(x+4=9>0\) and \(3x-6=9>0\) ✓; both sides equal \(\log9\) ✓`],
      S`\(x=5\)`],
    ["Condense, then reject a root", S`Solve \(\log x+\log(x-3)=1\).`,
      [S`<b>Domain first:</b> need \(x>0\) and \(x-3>0\), so \(x>3\).`,
        S`<b>Product law:</b> \(\log\big(x(x-3)\big)=1\).`,
        S`<b>Exponential form:</b> \(x(x-3)=10^1\Rightarrow x^2-3x-10=0\Rightarrow(x-5)(x+2)=0\).`,
        S`<b>Test each root:</b> \(x=5\) is in the domain; \(x=-2\) needs \(\log(-2)\), which does not exist (no power of 10 is negative), so it is extraneous.`,
        S`<b>Check \(x=5\):</b> \(\log5+\log2=\log10=1\) ✓`],
      S`\(x=5\) (reject \(x=-2\))`,
      plane({ view: { xmin: 2, xmax: 9, ymin: -1, ymax: 2 }, curves: [{ f: (x) => L(x) + L(x - 3), a: 3.001, color: "violet" }], lines: [{ m: 0, b: 1, color: "blue", dash: true }], points: [{ x: 5, y: 1, label: "(5, 1)", color: "amber" }], step: { x: 1, y: 0.5 } })],
    ["A quotient", S`Solve \(\log_2(x+1)-\log_2(x-2)=2\).`,
      [S`<b>Domain:</b> \(x+1>0\) and \(x-2>0\), so \(x>2\).`,
        S`<b>Quotient law:</b> \(\log_2\dfrac{x+1}{x-2}=2\).`,
        S`<b>Exponential form:</b> \(\dfrac{x+1}{x-2}=2^2=4\Rightarrow x+1=4x-8\Rightarrow x=3\).`,
        S`<b>Check:</b> \(x=3>2\) ✓; \(\log_24-\log_21=2-0=2\) ✓`],
      S`\(x=3\)`],
    ["A power law equation with two answers", S`Solve \(2\log x=\log(5x-4)\).`,
      [S`<b>Domain:</b> \(x>0\) and \(5x-4>0\), so \(x>0.8\).`,
        S`<b>Power law:</b> \(\log x^2=\log(5x-4)\). <b>Equate arguments:</b> \(x^2=5x-4\).`,
        S`<b>Solve:</b> \(x^2-5x+4=0\Rightarrow(x-1)(x-4)=0\), so \(x=1\) or \(x=4\).`,
        S`<b>Check \(x=1\):</b> \(2\log1=0\) and \(\log1=0\) ✓. <b>Check \(x=4\):</b> \(2\log4=\log16\) and \(\log16\) ✓`,
        S`<b>Both are in the domain</b> (\(1>0.8\) and \(4>0.8\)), so neither is extraneous.`],
      S`\(x=1\) or \(x=4\)`],
  ]),

  practice([
    q("exponential form", S`Solve \(\log_5(x-2)=2\).`, num(27), "x − 2 = 5².", [S`\(x-2=25\Rightarrow x=27\).`], S`\(27\)`),
    q("exponential form", S`Solve \(\log_2(3x+2)=5\).`, num(10), "3x + 2 = 32.", [S`\(3x=30\Rightarrow x=10\).`], S`\(10\)`),
    q("condense", S`Solve \(\log_6x+\log_6(x-5)=2\).`, num(9), "x(x − 5) = 36.", [S`\(x^2-5x-36=(x-9)(x+4)=0\); reject \(-4\).`], S`\(9\)`),
    q("quotient", S`Solve \(\log(x+6)-\log(x-3)=1\).`, num(4), "(x + 6)/(x − 3) = 10.", [S`\(x+6=10x-30\Rightarrow9x=36\Rightarrow x=4\).`], S`\(4\)`),
    q("extraneous", S`Solving \(\log_2x+\log_2(x+2)=3\) gives \(x^2+2x-8=0\). What is the solution set of the original equation?`, choice(["{2}", "{2, −4}", "{−4}", "{4, −2}"], 0), "Test each root in the original.", [S`\((x-2)(x+4)=0\); \(x=-4\) needs \(\log_2(-4)\), which does not exist.`], S`\(\{2\}\)`),
  ]),

  ...hard([
    ["Quadratic in log x", S`Solve \((\log x)^2-3\log x+2=0\).`,
      [S`<b>Substitute</b> \(u=\log x\): \(u^2-3u+2=0\Rightarrow(u-1)(u-2)=0\).`,
        S`<b>So</b> \(\log x=1\) or \(\log x=2\).`,
        S`<b>Exponential form:</b> \(x=10\) or \(x=100\).`,
        S`<b>Check \(x=10\):</b> \(1-3+2=0\) ✓. <b>Check \(x=100\):</b> \(4-6+2=0\) ✓`],
      S`\(x=10\) or \(x=100\)`,
      plane({ view: { xmin: -5, xmax: 120, ymin: -1, ymax: 3 }, curves: [{ f: (x) => L(x) ** 2 - 3 * L(x) + 2, a: 1, color: "violet" }], points: [{ x: 10, y: 0, label: "(10, 0)", color: "amber" }, { x: 100, y: 0, label: "(100, 0)", color: "amber" }], step: { x: 10, y: 0.5 } })],
    ["Two different bases", S`Solve \(\log_2x+\log_4x=6\).`,
      [S`<b>Change to one base:</b> \(\log_4x=\dfrac{\log_2x}{\log_24}=\dfrac{\log_2x}{2}\).`,
        S`<b>Combine:</b> \(\log_2x+\tfrac12\log_2x=\tfrac32\log_2x=6\), so \(\log_2x=4\).`,
        S`<b>Exponential form:</b> \(x=2^4=16\).`,
        S`<b>Check:</b> \(\log_216+\log_416=4+2=6\) ✓`],
      S`\(x=16\)`],
  ], [
    q("hard", S`Solve \((\log_3x)^2-\log_3x-6=0\). Enter both roots.`, roots(27, 1 / 9), "Let u = log₃ x.", [S`\((u-3)(u+2)=0\Rightarrow x=3^3\) or \(x=3^{-2}\).`], S`\(x=27,\ \frac19\)`),
    q("hard", S`Solve \(\log_3x+\log_9x=6\).`, num(81), "log₉ x = ½ log₃ x.", [S`\(\frac32\log_3x=6\Rightarrow\log_3x=4\).`], S`\(81\)`),
    q("hard", S`Solve \(\log(x+2)+\log(x-1)=1\).`, num(3), "(x + 2)(x − 1) = 10.", [S`\(x^2+x-12=(x+4)(x-3)=0\); reject \(-4\).`], S`\(3\)`),
  ]),

  wrapUp({
    qas: [
      ["How do I solve log_b A = c?", "Rewrite it as A = b^c and solve."],
      ["How do I solve log_b A = log_b B?", "Set A = B (both single logs, same base), then check A, B > 0."],
      ["What do I do with several logs on one side?", "Condense them with the product, quotient and power laws first."],
      ["Why can a root be extraneous?", "Condensing allows values where an original argument is negative; those fail the original equation."],
      ["How do I handle (log x)² − 3 log x + 2 = 0?", "Let u = log x, solve the quadratic, then x = 10ᵘ."],
    ],
    summary: [
      "Find the domain first.",
      "Condense to one log on each side.",
      "log_b A = c ⇒ A = b^c; log_b A = log_b B ⇒ A = B.",
      "Check every root in the original equation.",
    ],
    next: "7.5 uses exponential and logarithmic equations to answer questions about real growth and decay.",
  }),
];
