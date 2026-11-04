// MHF4U 6.2 — Logarithms (rebuilt from old 4.1): the definition log_b x = y ⇔ b^y = x, converting between forms,
// exact values (powers, fractions, roots), the basic properties, common logarithms and estimating.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";

export const TITLE = "6.2 Logarithms";
export const ID = "8054d808-a2ba-44eb-a4af-1e8f91e71bda";

const S = String.raw;
const lg = (b) => (x) => Math.log(x) / Math.log(b);
export const blocks = () => [
  intro({
    icon: "🔢",
    title: "Logarithms",
    overview: S`A logarithm answers one question: <em>what exponent do I put on the base to get this number?</em> Because \(2^5=32\), the logarithm of \(32\) with base \(2\) is \(5\), written \(\log_2 32=5\). Every logarithm statement can be rewritten as an exponent statement and back again, and that one translation is the key to evaluating logarithms, solving with them and graphing them.`,
    goals: [
      "explain a logarithm as an exponent;",
      "rewrite \\(\\log_b x=y\\) as \\(b^y=x\\) and back;",
      "evaluate logarithms exactly, including fractions and roots;",
      "use \\(\\log_b1=0\\), \\(\\log_bb=1\\), \\(\\log_bb^x=x\\) and \\(b^{\\log_bx}=x\\);",
      "use common logarithms and estimate a logarithm between two integers.",
    ],
    curriculum: "A1.1 (logarithm as the inverse of exponentiation), A1.2 (evaluate logarithms with and without technology), A1.3 (approximate a logarithm using powers)",
    prior: [
      [S`Write \(\frac1{25}\) as a power of \(5\).`, S`\(5^{-2}\).`],
      [S`Write \(\sqrt[3]{2}\) as a power of \(2\).`, S`\(2^{1/3}\).`],
      [S`What is the inverse of \(y=2^x\)?`, S`\(x=2^y\) (6.1).`],
    ],
    words: [
      ["Logarithm", "the exponent: \\(\\log_b x=y\\) means \\(b^y=x\\)", "\\(\\log_3 81=4\\)"],
      ["Base", "the number being raised to a power; \\(b>0\\), \\(b\\ne1\\)", "\\(b=3\\)"],
      ["Argument", "the number whose logarithm is taken; it must be positive", "\\(81\\)"],
      ["Common logarithm", "base 10, written \\(\\log x\\)", "\\(\\log1000=3\\)"],
    ],
  }),

  section("📌 The definition", S`
  ${table(["Exponential form", "Logarithmic form", "Read it as"], [
    ["\\(2^5=32\\)", "\\(\\log_2 32=5\\)", "the exponent on 2 that gives 32 is 5"],
    ["\\(10^{-2}=0.01\\)", "\\(\\log 0.01=-2\\)", "the exponent on 10 that gives 0.01 is −2"],
    ["\\(9^{1/2}=3\\)", "\\(\\log_9 3=\\frac12\\)", "the exponent on 9 that gives 3 is ½"],
  ])}
  ${keyIdea(S`\[\log_b x=y\quad\Longleftrightarrow\quad b^y=x\qquad(b>0,\ b\ne1,\ x>0)\] The base stays the base, and the logarithm <em>is</em> the exponent.`)}`),

  section("📌 Logarithms on the graph", S`<p>\(y=\log_b x\) is the inverse of \(y=b^x\) from 6.1, so reading a logarithm is reading the graph backwards: go to \(x\) on the logarithm curve and read the exponent \(y\).</p>
  ${plane({ view: { xmin: -1, xmax: 17, ymin: -3, ymax: 5 }, curves: [{ f: lg(2), a: 0.01, color: "violet" }], points: [{ x: 8, y: 3, label: "(8, 3)", color: "blue" }, { x: 16, y: 4, label: "(16, 4)", color: "blue" }, { x: 0.5, y: -1, label: "(½, −1)", color: "blue" }, { x: 1, y: 0, label: "(1, 0)", color: "amber" }], step: { x: 1, y: 1 } }, "y = log₂ x: log₂ 8 = 3, log₂ 16 = 4, log₂ ½ = −1, log₂ 1 = 0.")}`),

  widget("ibLogGraph", { init: [2, 0, 0] }),

  section("📌 Four properties straight from the definition", S`
  ${table(["Property", "Why it is true"], [
    ["\\(\\log_b 1=0\\)", "\\(b^0=1\\)"],
    ["\\(\\log_b b=1\\)", "\\(b^1=b\\)"],
    ["\\(\\log_b b^x=x\\)", "the exponent on \\(b\\) that gives \\(b^x\\) is \\(x\\)"],
    ["\\(b^{\\log_b x}=x\\)", "\\(\\log_b x\\) is the exponent that turns \\(b\\) into \\(x\\)"],
  ])}
  ${watchOut([
    "log_b x is an exponent, not a product: log₂ 8 is not 2 × 8.",
    "The argument must be positive: log₂(−8) and log₂ 0 are not defined, because bʸ is always positive.",
    "log x with no base written means base 10.",
    "log_b(1/x) is negative when b > 1 and x > 1: a fraction needs a negative exponent.",
    "A root is a fractional exponent: log₅ √5 = ½.",
  ])}`),

  examples([
    ["Convert between forms", S`Write \(4^3=64\) in logarithmic form and \(\log_5\frac1{125}=-3\) in exponential form.`,
      [S`<b>Rule.</b> \(b^y=x\Longleftrightarrow\log_b x=y\): the base stays the base and the exponent becomes the value of the logarithm.`,
        S`<b>First:</b> base \(4\), exponent \(3\), result \(64\): \(\log_4 64=3\).`,
        S`<b>Second:</b> base \(5\), logarithm (exponent) \(-3\), argument \(\frac1{125}\): \(5^{-3}=\frac1{125}\).`,
        S`<b>Check:</b> \(5^{-3}=\frac1{5^3}=\frac1{125}\) ✓`],
      S`\(\log_4 64=3\); \(5^{-3}=\frac1{125}\)`],
    ["Evaluate by matching powers", S`Evaluate \(\log_3 243\) and \(\log_2\frac1{16}\).`,
      [S`<b>Rule.</b> Write the argument as a power of the base; then \(\log_b b^x=x\).`,
        S`<b>First:</b> \(243=3\times3\times3\times3\times3=3^5\), so \(\log_3 243=\log_3 3^5=5\).`,
        S`<b>Second:</b> \(\frac1{16}=\frac1{2^4}=2^{-4}\), so \(\log_2\frac1{16}=-4\).`,
        S`<b>Check:</b> \(3^5=243\) ✓ and \(2^{-4}=\frac1{16}\) ✓`],
      S`\(5\) and \(-4\)`,
      plane({ view: { xmin: -1, xmax: 17, ymin: -5, ymax: 5 }, curves: [{ f: lg(2), a: 0.01, color: "violet" }], points: [{ x: 1 / 16, y: -4, label: "(1/16, −4)", color: "blue" }], step: { x: 1, y: 1 } })],
    ["Roots and a base that is a power", S`Evaluate \(\log_7\sqrt7\) and \(\log_8 4\).`,
      [S`<b>Rule.</b> Roots are fractional exponents: \(\sqrt[n]{a}=a^{1/n}\). When the base and argument are both powers of the same number, write both with that number.`,
        S`<b>First:</b> \(\sqrt7=7^{1/2}\), so \(\log_7\sqrt7=\frac12\).`,
        S`<b>Second:</b> let \(\log_8 4=y\), so \(8^y=4\). Write with base 2: \((2^3)^y=2^2\), so \(2^{3y}=2^2\).`,
        S`<b>Equal powers of the same base have equal exponents:</b> \(3y=2\), \(y=\frac23\).`,
        S`<b>Check:</b> \(8^{2/3}=\left(\sqrt[3]8\right)^2=2^2=4\) ✓`],
      S`\(\frac12\) and \(\frac23\)`],
    ["The four properties", S`Evaluate \(\log_6 1+\log_9 9+\log_4 4^{-3}+5^{\log_5 7}\).`,
      [S`<b>Properties.</b> \(\log_b1=0\), \(\log_bb=1\), \(\log_bb^x=x\), \(b^{\log_bx}=x\).`,
        S`<b>Term by term:</b> \(\log_6 1=0\) (since \(6^0=1\)); \(\log_9 9=1\); \(\log_4 4^{-3}=-3\); \(5^{\log_5 7}=7\).`,
        S`<b>Add:</b> \(0+1-3+7=5\).`,
        S`<b>Check the last term:</b> \(\log_5 7\) is the exponent that turns \(5\) into \(7\), so applying it to \(5\) gives \(7\) ✓`],
      S`\(5\)`],
    ["Estimate, then use a calculator", S`Between which two integers is \(\log 450\)? Then evaluate it to three decimals.`,
      [S`<b>Rule.</b> \(\log x\) means \(\log_{10}x\); trap \(x\) between powers of \(10\).`,
        S`<b>Trap:</b> \(10^2=100\) and \(10^3=1000\), and \(100<450<1000\), so \(2<\log450<3\).`,
        S`<b>Calculator:</b> \(\log450\approx2.653\).`,
        S`<b>Check:</b> \(10^{2.653}\approx449.8\) ✓, and \(2.653\) is between \(2\) and \(3\) ✓`],
      S`\(2<\log450<3\); \(\log450\approx2.653\)`,
      plane({ view: { xmin: -50, xmax: 1100, ymin: -1, ymax: 4 }, curves: [{ f: Math.log10, a: 0.5, color: "violet" }], points: [{ x: 100, y: 2, label: "(100, 2)", color: "blue" }, { x: 450, y: 2.653, label: "(450, 2.653)", color: "amber" }, { x: 1000, y: 3, label: "(1000, 3)", color: "blue" }], step: { x: 100, y: 1 } })],
  ]),

  practice([
    q("evaluate", S`Evaluate \(\log_2 128\).`, num(7), "Write 128 as a power of 2.", [S`\(128=2^7\).`], S`\(7\)`),
    q("fraction", S`Evaluate \(\log_3\frac1{81}\).`, num(-4), "81 = 3⁴.", [S`\(\frac1{81}=3^{-4}\).`], S`\(-4\)`),
    q("root", S`Evaluate \(\log_{2}\sqrt[3]{2}\).`, num(1 / 3, 0.0001), "A cube root is the power 1/3.", [S`\(\sqrt[3]2=2^{1/3}\).`], S`\(\frac13\)`),
    q("convert", S`If \(\log_b 49=2\), find \(b\).`, num(7), "Rewrite as bʸ = x.", [S`\(b^2=49\) with \(b>0\): \(b=7\).`], S`\(7\)`),
    q("defined?", S`Which logarithm is <strong>not</strong> defined?`, choice(["log₃(−9)", "log₃(1/9)", "log₉ 3", "log 0.001"], 0),
      "The argument must be positive.", [S`\(3^y\) is always positive, so it can never equal \(-9\).`], S`\(\log_3(-9)\)`),
  ]),

  ...hard([
    ["A base that is a fraction", S`Evaluate \(\log_{1/4}32\) and explain the sign of the answer.`,
      [S`<b>Rule.</b> Let \(\log_{1/4}32=y\), so \(\left(\frac14\right)^y=32\).`,
        S`<b>Common base 2:</b> \(\frac14=2^{-2}\) and \(32=2^5\): \(2^{-2y}=2^5\).`,
        S`<b>Equate exponents:</b> \(-2y=5\), so \(y=-\frac52\).`,
        S`<b>Sign:</b> raising a number less than 1 to a positive power makes it smaller, so to reach \(32>1\) the exponent must be negative ✓`,
        S`<b>Check:</b> \(\left(\frac14\right)^{-5/2}=4^{5/2}=\left(\sqrt4\right)^5=32\) ✓`],
      S`\(-\frac52\)`],
    ["Nested logarithms", S`Evaluate \(\log_3\left(\log_2\left(\log_4 256\right)\right)\).`,
      [S`<b>Rule.</b> Work from the inside out, like brackets.`,
        S`<b>Innermost:</b> \(256=4^4\), so \(\log_4256=4\).`,
        S`<b>Middle:</b> \(\log_2 4=2\).`,
        S`<b>Outside:</b> \(\log_3 2\) is not a whole number: \(3^0=1\) and \(3^1=3\), and \(1<2<3\), so it is between \(0\) and \(1\); a calculator gives \(\approx0.631\).`,
        S`<b>Check:</b> \(3^{0.631}\approx2.00\) ✓`],
      S`\(\log_3 2\approx0.631\)`],
  ], [
    q("hard", S`Evaluate \(\log_{27}9\).`, num(2 / 3, 0.0001), "Write both as powers of 3.", [S`\(27^y=9\Rightarrow3^{3y}=3^2\Rightarrow y=\frac23\).`], S`\(\frac23\)`),
    q("hard", S`Evaluate \(\log_{\sqrt2}8\).`, num(6), "√2 = 2^(1/2).", [S`\(2^{y/2}=2^3\Rightarrow y=6\).`], S`\(6\)`),
    q("hard", S`Find \(x\) if \(\log_x\frac18=-\frac32\).`, num(4), "Rewrite: x^(−3/2) = 1/8.", [S`\(x^{3/2}=8\Rightarrow x=8^{2/3}=4\).`], S`\(4\)`),
  ]),

  wrapUp({
    qas: [
      ["What is a logarithm?", "An exponent: log_b x is the power you put on b to get x."],
      ["How do I evaluate log₂ 32 without a calculator?", "Write 32 as a power of 2: 32 = 2⁵, so the answer is 5."],
      ["Why can't I take the log of a negative number?", "bʸ is positive for every y, so no exponent gives a negative result."],
      ["What does log x mean with no base?", "The common logarithm, base 10."],
      ["Why is log_b 1 = 0 for every base?", "Every allowed base raised to the power 0 gives 1."],
    ],
    summary: [
      "log_b x = y ⇔ bʸ = x (b > 0, b ≠ 1, x > 0).",
      "Evaluate by writing the argument as a power of the base.",
      "log_b 1 = 0, log_b b = 1, log_b bˣ = x, b^(log_b x) = x.",
      "log x = log₁₀ x; trap x between powers of 10 to estimate.",
    ],
    next: "6.3 graphs y = log_b x and its transformations.",
  }),
];
