// MHF4U 6.4 — The Power Law of Logarithms (NEW): proof from the exponent laws, evaluating and simplifying,
// the change-of-base formula, and solving b^x = c with logarithms.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";

export const TITLE = "6.4 The Power Law of Logarithms";
export const ID = "6d4f0006-0001-4001-8001-000000000604";

const S = String.raw;
const L = Math.log10;
export const blocks = () => [
  intro({
    icon: "⚡",
    title: "The Power Law of Logarithms",
    overview: S`The exponent law \((b^m)^n=b^{mn}\) has a logarithm twin: \(\log_b(x^n)=n\log_b x\). It lets an exponent come down in front of the logarithm. That one move makes two things possible: evaluating a logarithm with any base on a calculator (the change-of-base formula), and solving equations where the unknown is an exponent, such as \(2^x=50\).`,
    goals: [
      "prove the power law from the exponent laws;",
      "use \\(\\log_b x^n=n\\log_b x\\) to evaluate and simplify;",
      "derive and use the change-of-base formula;",
      "solve \\(b^x=c\\) by taking the logarithm of both sides;",
      "use the power law in growth and decay questions.",
    ],
    curriculum: "A1.4 (connect the laws of exponents and the laws of logarithms; use the power law), A3.1 (equivalent forms of logarithmic expressions), A1.2 (evaluate logarithms with any base using technology)",
    prior: [
      [S`Simplify \((2^3)^4\).`, S`\(2^{12}\).`],
      [S`Evaluate \(\log_2 32\).`, S`\(5\).`],
      [S`Rewrite \(\log_b x=m\) in exponential form.`, S`\(b^m=x\).`],
    ],
    words: [
      ["Power law", "\\(\\log_b(x^n)=n\\log_b x\\)", "\\(\\log 1000=\\log10^3=3\\)"],
      ["Change of base", "\\(\\log_b x=\\dfrac{\\log x}{\\log b}\\)", "\\(\\log_3 20=\\dfrac{\\log20}{\\log3}\\)"],
      ["Exponential equation", "an equation with the unknown in an exponent", "\\(2^x=50\\)"],
      ["Doubling time", "the time for a quantity to double", "\\(1.05^t=2\\)"],
    ],
  }),

  section("📌 Why the power law is true", S`
  <p>Let \(\log_b x=m\). Then \(x=b^m\) (definition). Raise both sides to the power \(n\): \(x^n=(b^m)^n=b^{mn}\) (exponent law). Rewrite in logarithmic form: \(\log_b(x^n)=mn=n\log_b x\).</p>
  ${keyIdea(S`\[\log_b\left(x^n\right)=n\log_b x\qquad(x>0)\] An exponent inside the logarithm comes down as a multiplier in front.`)}
  ${table(["Exponent law", "Logarithm law"], [["\\((b^m)^n=b^{mn}\\)", "\\(\\log_b x^n=n\\log_b x\\)"], ["\\(b^0=1\\)", "\\(\\log_b1=0\\)"], ["\\(b^1=b\\)", "\\(\\log_bb=1\\)"]])}`),

  widget("ibLogLaws", { init: [2, 5, 3] }),

  section("📌 Change of base", S`
  <p>To find \(y=\log_3 20\), rewrite it as \(3^y=20\), take the common logarithm of both sides, and use the power law: \(\log3^y=\log20\Rightarrow y\log3=\log20\Rightarrow y=\dfrac{\log20}{\log3}\approx2.727\).</p>
  ${keyIdea(S`\[\log_b x=\frac{\log x}{\log b}\] Any base can be evaluated with the \(\log\) key on a calculator.`)}
  ${plane({ view: { xmin: -1, xmax: 25, ymin: -1, ymax: 4 }, curves: [{ f: (x) => L(x) / L(3), a: 0.05, color: "violet" }], points: [{ x: 20, y: 2.727, label: "(20, 2.727)", color: "amber" }, { x: 9, y: 2, label: "(9, 2)", color: "blue" }, { x: 27, y: 3, color: "blue" }], step: { x: 2, y: 1 } }, "y = log₃ x: log₃ 20 is a little less than 3, since 27 = 3³.")}
  ${watchOut([
    "The power law needs the whole argument raised to the power: log(3x²) is not 2 log(3x).",
    "(log x)² is not 2 log x: the square is outside the logarithm.",
    "log₃ 20 is not log 20 − log 3; it is log 20 ÷ log 3.",
    "When solving bˣ = c, take logs of both sides, then divide by log b.",
    "Round only at the end: keep the calculator values until the last step.",
  ])}`),

  examples([
    ["Bring the exponent down", S`Evaluate \(\log_2\left(8^5\right)\) and \(\log\sqrt[4]{1000}\).`,
      [S`<b>Power law.</b> \(\log_b(x^n)=n\log_b x\).`,
        S`<b>First:</b> \(\log_2(8^5)=5\log_28=5\times3=15\).`,
        S`<b>Second:</b> \(\sqrt[4]{1000}=1000^{1/4}\), so \(\log1000^{1/4}=\frac14\log1000=\frac14\times3=\frac34\).`,
        S`<b>Check the first another way:</b> \(8^5=(2^3)^5=2^{15}\), and \(\log_22^{15}=15\) ✓`],
      S`\(15\) and \(\frac34\)`],
    ["Simplify an expression", S`Write \(4\log_5 x-\log_5 x^3\) as a single multiple of \(\log_5 x\), then evaluate it for \(x=25\).`,
      [S`<b>Power law on the second term:</b> \(\log_5x^3=3\log_5x\).`,
        S`<b>Collect like terms:</b> \(4\log_5x-3\log_5x=\log_5x\).`,
        S`<b>Evaluate:</b> \(x=25=5^2\), so \(\log_525=2\).`,
        S`<b>Check with the original:</b> \(4\log_525-\log_5(25^3)=4(2)-\log_55^6=8-6=2\) ✓`],
      S`\(\log_5x\); value \(2\)`],
    ["Change of base", S`Evaluate \(\log_7 1000\) to four decimals and check the answer.`,
      [S`<b>Formula.</b> \(\log_bx=\dfrac{\log x}{\log b}\) (from \(7^y=1000\), take \(\log\) of both sides and use the power law).`,
        S`<b>Substitute:</b> \(\log_71000=\dfrac{\log1000}{\log7}=\dfrac{3}{0.8451}\approx3.5499\).`,
        S`<b>Estimate first:</b> \(7^3=343\) and \(7^4=2401\), and \(343<1000<2401\), so the answer must be between \(3\) and \(4\) ✓`,
        S`<b>Check:</b> \(7^{3.5499}\approx1000\) ✓`],
      S`\(\approx3.5499\)`],
    ["Solve an exponential equation", S`Solve \(2^x=50\) to four decimals.`,
      [S`<b>Method.</b> The unknown is an exponent, so take the logarithm of both sides and bring it down with the power law.`,
        S`<b>Take logs:</b> \(\log2^x=\log50\Rightarrow x\log2=\log50\).`,
        S`<b>Divide by \(\log2\):</b> \(x=\dfrac{\log50}{\log2}\approx5.6439\).`,
        S`<b>Check:</b> \(2^5=32\) and \(2^6=64\), so \(x\) is between \(5\) and \(6\) ✓; \(2^{5.6439}\approx50.0\) ✓`],
      S`\(x\approx5.6439\)`,
      plane({ view: { xmin: -1, xmax: 7, ymin: -5, ymax: 70 }, lines: [{ m: 0, b: 50, color: "blue", dash: true }], curves: [{ f: (x) => 2 ** x, color: "violet" }], points: [{ x: 5.644, y: 50, label: "(5.644, 50)", color: "amber" }], step: { x: 1, y: 10 } })],
    ["Doubling time", S`An investment grows by \(5\%\) a year: \(A=P(1.05)^t\). How many years until it doubles?`,
      [S`<b>Model.</b> Doubling means \(A=2P\), so \(P(1.05)^t=2P\). Divide by \(P\): \(1.05^t=2\). (The starting amount does not matter.)`,
        S`<b>Take logs:</b> \(t\log1.05=\log2\).`,
        S`<b>Solve:</b> \(t=\dfrac{\log2}{\log1.05}\approx14.21\) years.`,
        S`<b>Check:</b> \(1.05^{14.21}\approx2.00\) ✓; the "rule of 70" estimate \(70\div5=14\) agrees.`],
      S`about \(14.2\) years`],
  ]),

  practice([
    q("power law", S`Evaluate \(\log_3\left(9^4\right)\).`, num(8), "Bring the 4 down; log₃ 9 = 2.", [S`\(4\times2=8\).`], S`\(8\)`),
    q("root", S`Evaluate \(\log_2\sqrt[3]{16}\) as a fraction.`, num(4 / 3, 0.0001), "∛16 = 16^(1/3).", [S`\(\frac13\log_216=\frac43\).`], S`\(\frac43\)`),
    q("change of base", S`Evaluate \(\log_6 200\) to two decimals.`, num(L(200) / L(6), 0.01), "log 200 ÷ log 6.", [S`\(\frac{2.3010}{0.7782}\approx2.96\).`], S`\(\approx2.96\)`),
    q("solve", S`Solve \(3^x=40\) to two decimals.`, num(L(40) / L(3), 0.01), "Take logs of both sides.", [S`\(x=\frac{\log40}{\log3}\approx3.36\).`], S`\(\approx3.36\)`),
    q("which is true?", S`Which statement is true for every \(x>0\)?`, choice(["log(x⁵) = 5 log x", "(log x)⁵ = 5 log x", "log(5x) = 5 log x", "log₅ x = log x − log 5"], 0),
      "Only an exponent on the whole argument comes down.", [S`Power law: \(\log x^5=5\log x\).`], S`\(\log x^5=5\log x\)`),
  ]),

  ...hard([
    ["Two different bases", S`Show that \(\log_8 x^3=\log_2 x\) for every \(x>0\).`,
      [S`<b>Power law:</b> \(\log_8x^3=3\log_8x\).`,
        S`<b>Change to base 2:</b> \(\log_8x=\dfrac{\log_2x}{\log_28}=\dfrac{\log_2x}{3}\).`,
        S`<b>Combine:</b> \(3\cdot\dfrac{\log_2x}{3}=\log_2x\).`,
        S`<b>Check with \(x=4\):</b> \(\log_8 64=2\) and \(\log_24=2\) ✓`],
      S`both sides equal \(\log_2x\)`],
    ["Which power is bigger?", S`Without finding either number, decide which is larger: \(2^{100}\) or \(3^{63}\).`,
      [S`<b>Idea.</b> \(\log\) is increasing, so the larger number has the larger logarithm.`,
        S`<b>Power law:</b> \(\log2^{100}=100\log2\approx30.103\) and \(\log3^{63}=63\log3\approx30.059\).`,
        S`<b>Compare:</b> \(30.103>30.059\), so \(2^{100}>3^{63}\).`,
        S`<b>Meaning:</b> both numbers have \(31\) digits, because their logarithms are between \(30\) and \(31\).`],
      S`\(2^{100}\) is larger`],
  ], [
    q("hard", S`Solve \(5^{2x}=300\) to three decimals.`, num(L(300) / (2 * L(5)), 0.002), "2x log 5 = log 300.", [S`\(x=\frac{\log300}{2\log5}\approx1.772\).`], S`\(\approx1.772\)`),
    q("hard", S`How many years does an amount take to triple at \(8\%\) per year? (two decimals)`, num(L(3) / L(1.08), 0.01), "1.08ᵗ = 3.", [S`\(t=\frac{\log3}{\log1.08}\approx14.27\).`], S`\(\approx14.27\)`),
    q("hard", S`If \(\log_3 5=a\), express \(\log_9 125\) in terms of \(a\). Enter the coefficient of \(a\).`, num(1.5, 0.0001), "Power law, then change of base.", [S`\(\log_9125=\frac{\log_3125}{\log_39}=\frac{3a}{2}\).`], S`\(\frac32\)`),
  ]),

  wrapUp({
    qas: [
      ["Where does the power law come from?", "From (bᵐ)ⁿ = bᵐⁿ, rewritten in logarithmic form."],
      ["How do I evaluate log₇ 1000?", "log 1000 ÷ log 7, by the change-of-base formula."],
      ["How do I solve 2ˣ = 50?", "Take logs: x log 2 = log 50, so x = log 50 ÷ log 2."],
      ["Is (log x)² = 2 log x?", "No: the power law only applies to a power of the argument, log(x²)."],
      ["Why does doubling time not depend on the amount?", "P cancels: P(1.05)ᵗ = 2P gives 1.05ᵗ = 2."],
    ],
    summary: [
      "log_b(xⁿ) = n log_b x.",
      "log_b x = log x / log b.",
      "Solve bˣ = c: x = log c / log b.",
      "Doubling or tripling time: solve (1 + r)ᵗ = 2 or 3.",
    ],
    next: "6.5 uses logarithms to build scales for quantities that range over many powers of 10.",
  }),
];
