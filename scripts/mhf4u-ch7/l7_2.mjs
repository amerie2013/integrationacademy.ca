// MHF4U 7.2 — Solving Exponential Equations (old 4.3, rebuilt): choosing a method, isolating the power,
// different bases on each side, equations quadratic in form (rejecting impossible roots), and graphical checks.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane, roots } from "./lib.mjs";

export const TITLE = "7.2 Solving Exponential Equations";
export const ID = "7f000088-f05d-406f-95ec-363c5dc6b872";

const S = String.raw;
const L = Math.log10;
export const blocks = () => [
  intro({
    icon: "🧮",
    title: "Solving Exponential Equations",
    overview: S`In 7.1 every equation could be rewritten with a common base. Most real equations cannot: \(5^x=120\) has no whole-number base that fits both sides. Logarithms handle every case. This lesson builds a complete strategy: isolate the power, take the logarithm of both sides, bring exponents down with the power law, and solve. It also covers equations with different bases on each side and equations that are quadratic in disguise.`,
    goals: [
      "decide whether to use a common base or logarithms;",
      "isolate the power before taking logarithms;",
      "solve equations with different bases on each side;",
      "solve equations that are quadratic in form, rejecting impossible values of \\(b^x\\);",
      "check solutions algebraically and with a graph.",
    ],
    curriculum: "A3.2 (solve exponential equations in one variable by determining a common base and by using logarithms, recognizing that logarithms base 10 are commonly used)",
    prior: [
      [S`Solve \(2^{x}=2^7\).`, S`\(x=7\).`],
      [S`Rewrite \(\log(a^n)\) with the power law.`, S`\(n\log a\).`],
      [S`Factor \(u^2-7u+12\).`, S`\((u-3)(u-4)\).`],
    ],
    words: [
      ["Take logs of both sides", "apply \\(\\log\\) to both sides of an equation (allowed because both sides are positive)", "\\(5^x=120\\Rightarrow x\\log5=\\log120\\)"],
      ["Exact answer", "an answer written with logarithms, not rounded", "\\(x=\\dfrac{\\log120}{\\log5}\\)"],
      ["Quadratic in form", "an equation that becomes quadratic after a substitution", "\\(9^x-5\\cdot3^x+6=0,\\ u=3^x\\)"],
      ["Inadmissible root", "a value of \\(u=b^x\\) that is zero or negative, so no \\(x\\) gives it", "\\(2^x=-3\\)"],
    ],
  }),

  section("📌 A strategy for every exponential equation", S`
  ${table(["Step", "What to do", "Why"], [
    ["1", "Isolate the power \\(b^{(\\ldots)}\\)", "the logarithm laws apply to a single power, not to a sum"],
    ["2", "Common base? Equate exponents.", "exact, no calculator (7.1)"],
    ["3", "Otherwise take \\(\\log\\) of both sides", "both sides are positive, and \\(\\log\\) is one-to-one"],
    ["4", "Bring every exponent down (power law)", "the unknown is no longer in an exponent"],
    ["5", "Solve the linear (or quadratic) equation", "ordinary algebra"],
    ["6", "Check: estimate, substitute, or graph", "catches slips and impossible roots"],
  ])}
  ${keyIdea(S`If \(b^x=c\) with \(c>0\), then \[x=\frac{\log c}{\log b}.\] If \(c\le0\) there is <b>no solution</b>, because \(b^x>0\) for every \(x\).`)}`),

  widget("ibExpSolve", { init: [3, 20] }),

  section("📌 Equations that are quadratic in form", S`
  <p>\(9^x=(3^2)^x=(3^x)^2\). So \(9^x-5\cdot3^x+6=0\) is a quadratic in \(u=3^x\): \(u^2-5u+6=0\). Solve for \(u\), then solve \(3^x=u\) for each value. A negative or zero \(u\) gives no solution.</p>
  ${plane({ view: { xmin: -2, xmax: 2, ymin: -1.5, ymax: 3 }, curves: [{ f: (x) => 9 ** x - 5 * 3 ** x + 6, color: "violet" }], points: [{ x: L(2) / L(3), y: 0, label: "(0.63, 0)", color: "amber" }, { x: 1, y: 0, label: "(1, 0)", color: "amber" }], step: { x: 0.5, y: 0.5 } }, "y = 9ˣ − 5·3ˣ + 6 crosses the x-axis twice: x = log 2/log 3 ≈ 0.63 and x = 1.")}
  ${watchOut([
    "Take logs only after the power is alone: log(3·2ˣ + 5) is NOT log 3 + x log 2 + log 5.",
    "Bring the whole exponent down in brackets: log 6ˣ⁺¹ = (x + 1) log 6.",
    "log 120 / log 5 is not log(120/5) and not log 120 − log 5.",
    "bˣ = 0 and bˣ = −3 have no solution; reject those values of u.",
    "Keep the exact form until the last step, then round once.",
  ])}`),

  examples([
    ["Choose the method", S`Solve \(5^x=125\) and \(5^x=120\). Explain why the methods differ.`,
      [S`<b>Common base?</b> \(125=5^3\), so \(5^x=5^3\) and \(x=3\) exactly (equate exponents).`,
        S`<b>No common base:</b> \(120\) is not a whole power of \(5\), so take \(\log\) of both sides: \(\log5^x=\log120\).`,
        S`<b>Power law:</b> \(x\log5=\log120\), so \(x=\dfrac{\log120}{\log5}\approx2.9746\).`,
        S`<b>Check by estimating:</b> \(120\) is just below \(125=5^3\), so \(x\) should be just below \(3\) ✓; \(5^{2.9746}\approx120.0\) ✓`],
      S`\(x=3\); \(x=\dfrac{\log120}{\log5}\approx2.9746\)`],
    ["Isolate the power first", S`Solve \(3(2)^{x-1}+5=50\) to four decimals.`,
      [S`<b>Rule.</b> The logarithm laws apply to a single power, so undo the \(+5\) and the \(\times3\) first.`,
        S`<b>Subtract 5:</b> \(3(2)^{x-1}=45\). <b>Divide by 3:</b> \(2^{x-1}=15\).`,
        S`<b>Take logs, bring the exponent down:</b> \((x-1)\log2=\log15\), so \(x-1=\dfrac{\log15}{\log2}\approx3.9069\).`,
        S`<b>Add 1:</b> \(x\approx4.9069\).`,
        S`<b>Check:</b> \(2^{3.9069}\approx15.0\), and \(3(15)+5=50\) ✓`],
      S`\(x=1+\dfrac{\log15}{\log2}\approx4.9069\)`],
    ["Different bases on each side", S`Solve \(6^{x+1}=4^{2x}\).`,
      [S`<b>No common base</b> (\(6\) and \(4\) are not powers of one integer), so take \(\log\) of both sides.`,
        S`<b>Power law on both sides:</b> \((x+1)\log6=2x\log4\).`,
        S`<b>Expand and collect the \(x\)-terms:</b> \(x\log6+\log6=2x\log4\Rightarrow\log6=x(2\log4-\log6)\).`,
        S`<b>Divide:</b> \(x=\dfrac{\log6}{2\log4-\log6}\approx\dfrac{0.77815}{0.42597}\approx1.8268\).`,
        S`<b>Check:</b> \(6^{2.8268}\approx158.4\) and \(4^{3.6536}\approx158.4\) ✓`],
      S`\(x=\dfrac{\log6}{2\log4-\log6}\approx1.8268\)`,
      plane({ view: { xmin: -1, xmax: 2.5, ymin: -20, ymax: 300 }, curves: [{ f: (x) => 6 ** (x + 1), color: "violet" }, { f: (x) => 4 ** (2 * x), color: "blue" }], points: [{ x: 1.827, y: 158.4, label: "(1.83, 158.4)", color: "amber" }], step: { x: 0.5, y: 50 } })],
    ["Quadratic in form", S`Solve \(9^x-5\cdot3^x+6=0\).`,
      [S`<b>Spot the square:</b> \(9^x=(3^2)^x=(3^x)^2\). Let \(u=3^x\).`,
        S`<b>Substitute:</b> \(u^2-5u+6=0\Rightarrow(u-2)(u-3)=0\), so \(u=2\) or \(u=3\).`,
        S`<b>Back-substitute:</b> \(3^x=3\Rightarrow x=1\); \(3^x=2\Rightarrow x=\dfrac{\log2}{\log3}\approx0.6309\).`,
        S`<b>Check \(x=1\):</b> \(9-15+6=0\) ✓. <b>Check \(x\approx0.6309\):</b> \(3^x=2\), \(9^x=4\), and \(4-10+6=0\) ✓`],
      S`\(x=1\) or \(x=\dfrac{\log2}{\log3}\approx0.6309\)`],
    ["Reject an impossible root", S`Solve \(4^x-2^{x+1}-15=0\).`,
      [S`<b>Equivalent forms:</b> \(4^x=(2^x)^2\) and \(2^{x+1}=2\cdot2^x\). Let \(u=2^x\).`,
        S`<b>Quadratic:</b> \(u^2-2u-15=0\Rightarrow(u-5)(u+3)=0\), so \(u=5\) or \(u=-3\).`,
        S`<b>Reject \(u=-3\):</b> \(2^x>0\) for every \(x\), so \(2^x=-3\) is impossible.`,
        S`<b>Solve \(2^x=5\):</b> \(x=\dfrac{\log5}{\log2}\approx2.3219\).`,
        S`<b>Check:</b> \(2^x=5\) gives \(4^x=25\) and \(2^{x+1}=10\): \(25-10-15=0\) ✓`],
      S`\(x=\dfrac{\log5}{\log2}\approx2.3219\) (one solution)`,
      plane({ view: { xmin: -2, xmax: 3, ymin: -20, ymax: 30 }, curves: [{ f: (x) => 4 ** x - 2 ** (x + 1) - 15, color: "violet" }], lines: [{ m: 0, b: -15, color: "red", dash: true }], points: [{ x: 2.322, y: 0, label: "(2.32, 0)", color: "amber" }], step: { x: 1, y: 5 } })],
  ]),

  practice([
    q("solve", S`Solve \(7^x=60\) to two decimals.`, num(L(60) / L(7), 0.01), "Take logs of both sides.", [S`\(x=\frac{\log60}{\log7}\approx2.10\).`], S`\(\approx2.10\)`),
    q("isolate", S`Solve \(2\cdot5^{x}-3=47\).`, num(2), "Isolate 5ˣ first; then look for a common base.", [S`\(2\cdot5^x=50\Rightarrow5^x=25=5^2\).`], S`\(2\)`),
    q("two bases", S`Solve \(3^{x+2}=7^{x}\) to two decimals.`, num(2 * L(3) / (L(7) - L(3)), 0.01), "(x + 2) log 3 = x log 7.", [S`\(x=\frac{2\log3}{\log7-\log3}\approx2.59\).`], S`\(\approx2.59\)`),
    q("no solution", S`Which equation has no real solution?`, choice(["3ˣ = −9", "3ˣ = 0.5", "3⁻ˣ = 9", "(1/3)ˣ = 9"], 0), "Powers of a positive base are always positive.", [S`\(3^x>0\), so it can never equal \(-9\).`], S`\(3^x=-9\)`),
    q("quadratic form", S`Solve \(4^x-3\cdot2^x-4=0\).`, num(2), "Let u = 2ˣ.", [S`\(u^2-3u-4=(u-4)(u+1)=0\); \(u=-1\) is impossible, so \(2^x=4\).`], S`\(2\)`),
  ]),

  ...hard([
    ["When do two populations meet?", S`Town A has \(500\) people growing \(8\%\) a year; town B has \(800\) growing \(3\%\) a year. When are they equal?`,
      [S`<b>Models:</b> \(A=500(1.08)^t\), \(B=800(1.03)^t\). Set \(A=B\).`,
        S`<b>Collect the powers:</b> \(\dfrac{1.08^t}{1.03^t}=\dfrac{800}{500}\Rightarrow\left(\dfrac{1.08}{1.03}\right)^t=1.6\).`,
        S`<b>Take logs:</b> \(t=\dfrac{\log1.6}{\log(1.08/1.03)}\approx\dfrac{0.20412}{0.02059}\approx9.92\) years.`,
        S`<b>Check:</b> \(500(1.08)^{9.92}\approx1072\) and \(800(1.03)^{9.92}\approx1072\) ✓`],
      S`after about \(9.9\) years`,
      plane({ view: { xmin: -1, xmax: 16, ymin: 0, ymax: 1800 }, curves: [{ f: (t) => 500 * 1.08 ** t, a: 0, color: "violet" }, { f: (t) => 800 * 1.03 ** t, a: 0, color: "blue" }], points: [{ x: 9.92, y: 1072, label: "(9.92, 1072)", color: "amber" }], step: { x: 2, y: 200 } })],
    ["A leading coefficient", S`Solve \(2^{2x+1}-7\cdot2^x+3=0\).`,
      [S`<b>Equivalent form:</b> \(2^{2x+1}=2\cdot(2^x)^2\). Let \(u=2^x\).`,
        S`<b>Quadratic:</b> \(2u^2-7u+3=0\Rightarrow(2u-1)(u-3)=0\), so \(u=\frac12\) or \(u=3\).`,
        S`<b>Back-substitute:</b> \(2^x=\frac12=2^{-1}\Rightarrow x=-1\); \(2^x=3\Rightarrow x=\dfrac{\log3}{\log2}\approx1.585\).`,
        S`<b>Check \(x=-1\):</b> \(2^{-1}-7(0.5)+3=0.5-3.5+3=0\) ✓. <b>Check \(x\approx1.585\):</b> \(2(9)-21+3=0\) ✓`],
      S`\(x=-1\) or \(x\approx1.585\)`],
  ], [
    q("hard", S`Solve \(25^x-6\cdot5^x+5=0\). Enter both roots.`, roots(0, 1), "Let u = 5ˣ.", [S`\((u-1)(u-5)=0\Rightarrow5^x=1\) or \(5^x=5\).`], S`\(x=0,\ 1\)`),
    q("hard", S`When does \(1000(1.06)^t=1500(1.025)^t\)? (two decimals)`, num(L(1.5) / L(1.06 / 1.025), 0.01), "(1.06/1.025)ᵗ = 1.5.", [S`\(t=\frac{\log1.5}{\log(1.06/1.025)}\approx12.08\).`], S`\(\approx12.08\)`),
    q("hard", S`Solve \(5^{2x}=3^{x+4}\) to three decimals.`, num(4 * L(3) / (2 * L(5) - L(3)), 0.002), "2x log 5 = (x + 4) log 3.", [S`\(x=\frac{4\log3}{2\log5-\log3}\approx2.073\).`], S`\(\approx2.073\)`),
  ]),

  wrapUp({
    qas: [
      ["When do I use logs instead of a common base?", "When the two sides cannot be written as powers of one base, such as 5ˣ = 120."],
      ["Why isolate the power first?", "The log laws work on a single power; log of a sum does not split."],
      ["How do I handle 6ˣ⁺¹ = 4²ˣ?", "Take logs, bring both exponents down, collect the x-terms, and factor out x."],
      ["How do I spot a quadratic in form?", "Look for b²ˣ = (bˣ)² together with bˣ, then let u = bˣ."],
      ["Why reject u = −3?", "bˣ is positive for every x, so it can never be −3."],
    ],
    summary: [
      "Isolate, take logs, bring exponents down, solve, check.",
      "bˣ = c ⇒ x = log c / log b (c > 0).",
      "Different bases: collect x-terms and factor.",
      "Quadratic in form: u = bˣ; reject u ≤ 0.",
    ],
    next: "7.3 adds the product and quotient laws, so sums and differences of logarithms can be combined.",
  }),
];
