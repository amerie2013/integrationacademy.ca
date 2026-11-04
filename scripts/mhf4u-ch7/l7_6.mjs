// MHF4U 7.6 — Chapter 7 Review (NEW lesson): equivalent forms, exponential equations, product/quotient laws,
// logarithmic equations and models, in multi-step examples.
import { intro, section, examples, practice, wrapUp, table, q, num, choice, hard, plane, roots } from "./lib.mjs";

export const TITLE = "7.6 Chapter 7 Review";
export const ID = "6d4f0007-0001-4001-8001-000000000706";

const S = String.raw;
const L = Math.log10;
export const blocks = () => [
  intro({
    icon: "🧩",
    title: "Chapter 7 Review — Solving Exponential and Logarithmic Equations",
    overview: S`This page pulls the chapter together before the test: each lesson's key idea on one screen, multi-step examples that combine several skills, mixed practice and two harder problems. The thread through the whole chapter is one question: is the unknown in an exponent, or inside a logarithm? Exponents come down with logarithms; logarithms disappear by rewriting in exponential form.`,
    goals: [
      "recall the key idea and common mistake of each lesson;",
      "choose between a common base and logarithms;",
      "expand and condense with the laws of logarithms;",
      "solve logarithmic equations and reject extraneous roots;",
      "model and solve growth and decay problems.",
    ],
    curriculum: "A1.4, A3.1–A3.4, D1.9 (whole chapter)",
    prior: [
      [S`Solve \(2^x=64\).`, S`\(x=6\).`],
      [S`Condense \(\log a-\log b\).`, S`\(\log\frac ab\).`],
      [S`Solve \(\log_2x=3\).`, S`\(x=8\).`],
    ],
    words: [
      ["Common base", "rewrite both sides as powers of one base, then equate exponents", "\\(4^x=8\\Rightarrow2x=3\\)"],
      ["Take logs", "bring an exponent down with the power law", "\\(x\\log5=\\log120\\)"],
      ["Condense", "combine logs into one with the product, quotient and power laws", "\\(\\log x+\\log y=\\log xy\\)"],
      ["Extraneous root", "an algebra answer that fails the original equation", "a negative argument"],
    ],
  }),

  section("📌 The chapter on one page", table(["Lesson", "Key idea", "Example", "Watch out"], [
    ["7.1 Equivalent forms", "\\(b^m=b^n\\iff m=n\\)", "\\(8^x=2^{3x}\\)", "bracket the whole exponent"],
    ["7.2 Exponential equations", "isolate, take logs, divide", "\\(x=\\frac{\\log c}{\\log b}\\)", "\\(b^x\\le0\\) has no solution"],
    ["7.3 Product & quotient laws", "\\(\\log xy=\\log x+\\log y\\)", "\\(\\log_312-\\log_34=1\\)", "no law for \\(\\log(x+y)\\)"],
    ["7.4 Logarithmic equations", "condense, then \\(A=b^c\\) or \\(A=B\\)", "\\(\\log_2A=3\\Rightarrow A=8\\)", "check every root"],
    ["7.5 Models", "\\(A=A_0b^{t/p}\\)", "half-life \\(\\left(\\frac12\\right)^{t/h}\\)", "decay factor is \\(1-r\\)"],
  ])),

  examples([
    ["Common base or logs?", S`Solve \(8^{x}=4^{x+3}\) and \(2^{x+1}=3^{x}\).`,
      [S`<b>First equation, common base 2:</b> \(8^x=2^{3x}\) and \(4^{x+3}=2^{2x+6}\), so \(3x=2x+6\) and \(x=6\).`,
        S`<b>Check:</b> \(8^6=262\,144\) and \(4^9=262\,144\) ✓`,
        S`<b>Second equation, no common base:</b> take logs: \((x+1)\log2=x\log3\).`,
        S`<b>Collect \(x\):</b> \(\log2=x(\log3-\log2)\Rightarrow x=\dfrac{\log2}{\log3-\log2}\approx1.7095\).`,
        S`<b>Check:</b> \(2^{2.7095}\approx6.54\) and \(3^{1.7095}\approx6.54\) ✓`],
      S`\(x=6\); \(x\approx1.7095\)`],
    ["Condense and evaluate", S`Evaluate \(\log_550+\log_510-2\log_52\).`,
      [S`<b>Power law:</b> \(2\log_52=\log_54\).`,
        S`<b>Product, then quotient law:</b> \(\log_5\dfrac{50\times10}{4}=\log_5125\).`,
        S`<b>Evaluate:</b> \(5^3=125\), so the value is \(3\).`,
        S`<b>Check with change of base:</b> \(\log_550\approx2.4307\), \(\log_510\approx1.4307\), \(2\log_52\approx0.8614\); \(2.4307+1.4307-0.8614=3.0000\) ✓`],
      S`\(3\)`],
    ["A logarithmic equation", S`Solve \(\log_3(x+5)+\log_3(x-1)=3\).`,
      [S`<b>Domain:</b> \(x+5>0\) and \(x-1>0\), so \(x>1\).`,
        S`<b>Condense:</b> \(\log_3\big((x+5)(x-1)\big)=3\Rightarrow(x+5)(x-1)=27\).`,
        S`<b>Quadratic:</b> \(x^2+4x-32=0\Rightarrow(x+8)(x-4)=0\).`,
        S`<b>Reject \(x=-8\)</b> (outside the domain). <b>Check \(x=4\):</b> \(\log_39+\log_33=2+1=3\) ✓`],
      S`\(x=4\)`,
      plane({ view: { xmin: 0, xmax: 9, ymin: -2, ymax: 5 }, curves: [{ f: (x) => (Math.log(x + 5) + Math.log(x - 1)) / Math.log(3), a: 1.001, color: "violet" }], lines: [{ m: 0, b: 3, color: "blue", dash: true }], points: [{ x: 4, y: 3, label: "(4, 3)", color: "amber" }], step: { x: 1, y: 1 } })],
    ["Half-life from data, then a prediction", S`A \(120\) g radioactive sample has \(90\) g left after \(5\) days. Find the half-life, then when \(10\) g remain.`,
      [S`<b>Model:</b> \(A=120\left(\tfrac12\right)^{t/h}\). Data: \(\left(\tfrac12\right)^{5/h}=\frac{90}{120}=0.75\).`,
        S`<b>Half-life:</b> \(\dfrac5h\log0.5=\log0.75\Rightarrow h=\dfrac{5\log0.5}{\log0.75}\approx12.05\) days.`,
        S`<b>Prediction:</b> \(\left(\tfrac12\right)^{t/h}=\frac{10}{120}\Rightarrow t=\dfrac{h\log(1/12)}{\log0.5}\approx43.2\) days.`,
        S`<b>Check:</b> \(10\) g is between \(\frac1{8}\) (\(15\) g, \(3\) half-lives \(\approx36\) days) and \(\frac1{16}\) (\(7.5\) g, \(\approx48\) days) of the start ✓`],
      S`\(h\approx12.05\) days; about \(43.2\) days`,
      plane({ view: { xmin: -2, xmax: 60, ymin: 0, ymax: 130 }, curves: [{ f: (t) => 120 * 0.5 ** (t / 12.047), a: 0, color: "violet" }], lines: [{ m: 0, b: 10, color: "blue", dash: true }], points: [{ x: 5, y: 90, label: "(5, 90)", color: "blue" }, { x: 43.19, y: 10, label: "(43.2, 10)", color: "amber" }], step: { x: 5, y: 10 } })],
    ["Two different bases in a log equation", S`Solve \(\log_2x=\log_4(x+6)\).`,
      [S`<b>Change base:</b> \(\log_4(x+6)=\dfrac{\log_2(x+6)}{2}\), so \(2\log_2x=\log_2(x+6)\).`,
        S`<b>Power law, equate arguments:</b> \(x^2=x+6\Rightarrow(x-3)(x+2)=0\).`,
        S`<b>Domain:</b> \(x>0\), so reject \(x=-2\).`,
        S`<b>Check \(x=3\):</b> \(\log_23\approx1.585\) and \(\log_49\approx1.585\) ✓`],
      S`\(x=3\)`],
  ]),

  practice([
    q("common base", S`Solve \(27^{x}=9^{x+1}\).`, num(2), "Base 3.", [S`\(3x=2x+2\).`], S`\(2\)`),
    q("logs", S`Solve \(6^x=50\) to two decimals.`, num(L(50) / L(6), 0.01), "x = log 50 / log 6.", [S`\(\approx2.18\).`], S`\(\approx2.18\)`),
    q("quotient law", S`Evaluate \(\log_2 24-\log_2 3\).`, num(3), "24 ÷ 3 = 8.", [S`\(\log_28=3\).`], S`\(3\)`),
    q("log equation", S`Solve \(\log_4x+\log_4(x+3)=1\).`, num(1), "x(x + 3) = 4.", [S`\((x+4)(x-1)=0\); reject \(-4\).`], S`\(1\)`),
    q("which is equal?", S`Which is equal to \(\log_345-\log_35\)?`, choice(["2", "log₃ 40", "9", "log₃ 45 ÷ log₃ 5"], 0), "Quotient law.", [S`\(\log_39=2\).`], S`\(2\)`),
  ]),

  ...hard([
    ["When do two accounts match?", S`\(\$5000\) earns \(4\%\) compounded quarterly; \(\$6000\) earns \(2.5\%\) compounded annually. When are the balances equal?`,
      [S`<b>Models:</b> \(5000(1.01)^{4t}\) and \(6000(1.025)^{t}\).`,
        S`<b>Collect powers:</b> \(\left(\dfrac{1.01^4}{1.025}\right)^t=\dfrac{6000}{5000}=1.2\), and \(\dfrac{1.01^4}{1.025}\approx1.015223\).`,
        S`<b>Take logs:</b> \(t=\dfrac{\log1.2}{\log1.015223}\approx12.07\) years.`,
        S`<b>Check:</b> both balances are about \(\$8083\) at \(t=12.07\) ✓`],
      S`after about \(12.1\) years`],
    ["Quadratic in an exponential", S`Solve \(4^x-5\cdot2^x+4=0\) and explain why there is no third root.`,
      [S`<b>Let \(u=2^x\):</b> \(u^2-5u+4=0\Rightarrow(u-1)(u-4)=0\).`,
        S`<b>Back-substitute:</b> \(2^x=1\Rightarrow x=0\); \(2^x=4\Rightarrow x=2\).`,
        S`<b>Why only two:</b> a quadratic in \(u\) has at most two roots, and each positive \(u\) gives exactly one \(x\) because \(2^x\) is one-to-one.`,
        S`<b>Check:</b> \(x=0\): \(1-5+4=0\) ✓; \(x=2\): \(16-20+4=0\) ✓`],
      S`\(x=0\) or \(x=2\)`],
  ], [
    q("hard", S`Solve \(9^x-10\cdot3^x+9=0\). Enter both roots.`, roots(0, 2), "Let u = 3ˣ.", [S`\((u-1)(u-9)=0\Rightarrow x=0\) or \(x=2\).`], S`\(x=0,\ 2\)`),
    q("hard", S`Solve \(\log x+\log(x+21)=2\).`, num(4), "x(x + 21) = 100.", [S`\((x+25)(x-4)=0\); reject \(-25\).`], S`\(4\)`),
    q("hard", S`\(30\%\) of a substance remains after \(20\) years. Find its half-life (two decimals).`, num(20 * L(0.5) / L(0.3), 0.01), "(1/2)^(20/h) = 0.3.", [S`\(h=\frac{20\log0.5}{\log0.3}\approx11.51\).`], S`\(\approx11.51\)`),
  ]),

  wrapUp({
    qas: [
      ["First question for any equation?", "Is the unknown in an exponent (take logs) or inside a log (rewrite in exponential form)?"],
      ["When can I equate exponents?", "When both sides are single powers of the same base."],
      ["What must I do after solving a log equation?", "Check every root in the original; reject any with a non-positive argument."],
      ["How do I recognize a quadratic in form?", "b²ˣ and bˣ together: let u = bˣ."],
      ["How do I find a half-life from data?", "Substitute the data into A₀(1/2)^(t/h), take logs and solve for h."],
    ],
    summary: [
      "Common base ⇒ equate exponents; otherwise take logs.",
      "Product, quotient and power laws expand and condense.",
      "Log equations: domain, condense, rewrite, check.",
      "Models: A = A₀b^(t/p); solve \"when\" with logs.",
    ],
    next: "Chapter 8 combines functions: sums, products, quotients and compositions.",
  }),
];
