// IB AA SL 9.4 — Laws of Logarithms: product, quotient and power laws, expanding and condensing, change of base, solving logarithmic equations with domain checks
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";

export const TITLE = "9.4 Laws of Logarithms";
export const ID = "1baa0009-0001-4001-8001-000000000904";
const S = String.raw;
const P = (x, y, label, color = "blue") => ({ x, y, label, color });
const L2 = (x) => Math.log2(x);

export const blocks = () => [
  intro({
    icon: "⚖️",
    title: "Laws of Logarithms",
    overview: S`Because logarithms are exponents, every law of exponents has a matching law of logarithms: multiplying numbers adds their logs, dividing subtracts them, and a power becomes a multiple. In this lesson you will expand and condense logarithmic expressions, change the base to evaluate any logarithm, and solve logarithmic equations, always checking the domain.`,
    goals: [
      S`use \(\log_b(mn)=\log_b m+\log_b n\) and \(\log_b\frac mn=\log_b m-\log_b n\);`,
      S`use \(\log_b m^k=k\log_b m\);`,
      "expand and condense logarithmic expressions;",
      S`use the change of base formula \(\log_b x=\dfrac{\log_c x}{\log_c b}\);`,
      "solve logarithmic equations and reject values outside the domain.",
    ],
    curriculum: "SL 1.7 (laws of logarithms, change of base); SL 1.5 (logarithms base 10 and e)",
    prior: [
      [S`Simplify \(a^3\times a^5\).`, S`\(a^8\).`],
      [S`Evaluate \(\log_2 16\).`, "4."],
      [S`Solve \(x^2-x-12=0\).`, S`\(x=4\) or \(x=-3\).`],
    ],
    words: [
      ["Product law", "log of a product = sum of logs", S`\(\log 6=\log2+\log3\)`],
      ["Quotient law", "log of a quotient = difference of logs", S`\(\ln\frac x4=\ln x-\ln4\)`],
      ["Power law", "a power comes out as a multiplier", S`\(\log_3 x^5=5\log_3x\)`],
      ["Change of base", "rewrite a log in another base", S`\(\log_2 7=\frac{\ln7}{\ln2}\)`],
      ["Extraneous solution", "a value from the algebra that fails the domain", S`\(x=-4\) in \(\log_2x\)`],
    ],
  }),

  section("📌 The three laws", S`
  <p>Let \(m=b^p\) and \(n=b^q\), so \(p=\log_b m\), \(q=\log_b n\). Then \(mn=b^{p+q}\), so \(\log_b(mn)=p+q\). The other laws follow the same way.</p>
  ${table(["Law of exponents", "Law of logarithms"], [
    [S`\(b^pb^q=b^{p+q}\)`, S`\(\log_b(mn)=\log_b m+\log_b n\)`],
    [S`\(b^p\div b^q=b^{p-q}\)`, S`\(\log_b\frac mn=\log_b m-\log_b n\)`],
    [S`\((b^p)^k=b^{pk}\)`, S`\(\log_b m^k=k\log_b m\)`],
  ])}
  <p>The product law explains a graph fact: \(\log_2(4x)=\log_2 4+\log_2 x=2+\log_2x\), so stretching the input by 4 is the same as shifting the graph up 2.</p>
  ${plane({ view: { xmin: -1, xmax: 10, ymin: -3, ymax: 6 }, step: { x: 1, y: 1 }, curves: [{ f: L2, a: 0.01, b: 10, color: "violet" }, { f: (x) => L2(4 * x), a: 0.003, b: 10, color: "amber" }], points: [P(1, 0, "(1, 0)"), P(1, 2, "(1, 2)", "amber"), P(8, 3, "(8, 3)"), P(8, 5, "(8, 5)", "amber")] }, "log₂(4x) (amber) = 2 + log₂x (violet): every point is 2 higher")}
  <p>The power law needs care with the domain: \(\log_2(x^2)=2\log_2|x|\). The left side exists for all \(x\ne0\), but \(2\log_2 x\) only for \(x>0\).</p>
  ${plane({ view: { xmin: -6, xmax: 6, ymin: -5, ymax: 6 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => L2(x * x), a: -6, b: -0.01, color: "amber" }, { f: (x) => L2(x * x), a: 0.01, b: 6, color: "amber" }, { f: (x) => 2 * L2(x), a: 0.01, b: 6, color: "violet" }], points: [P(4, 4, "(4, 4)"), P(-4, 4, "(−4, 4)", "amber")] }, "log₂(x²) (amber, both sides) and 2log₂x (violet, x > 0 only)")}
  ${keyIdea("log(mn) = log m + log n, log(m/n) = log m − log n, log mᵏ = k log m. There is NO law for log(m + n).")}`),

  section("📌 Change of base", S`
  <p>Calculators have \(\log\) and \(\ln\). For any other base, write \(y=\log_b x\) as \(b^y=x\), take logs of both sides and divide: \(\log_b x=\dfrac{\ln x}{\ln b}=\dfrac{\log x}{\log b}\). For example \(\log_3 50=\frac{\ln 50}{\ln 3}\approx3.561\).</p>
  ${plane({ view: { xmin: -1, xmax: 10, ymin: -3, ymax: 4 }, step: { x: 1, y: 1 }, curves: [{ f: Math.log, a: 0.01, b: 10, color: "amber" }, { f: L2, a: 0.01, b: 10, color: "violet" }], points: [P(Math.E, 1, "(e, 1)", "amber"), P(Math.E, L2(Math.E), "(e, 1.44)")] }, "log₂x = ln x ÷ ln 2 ≈ 1.443 ln x: one graph is a vertical stretch of the other")}
  ${watchOut([
    S`\(\log(m+n)\ne\log m+\log n\).`,
    S`\(\frac{\log m}{\log n}\ne\log\frac mn\) — the left side is a change of base.`,
    S`\((\log x)^2\ne2\log x\); only \(\log(x^2)=2\log x\) (for \(x>0\)).`,
    "After solving a log equation, reject any value that makes a log argument ≤ 0.",
  ])}`),

  section("📌 Solving logarithmic equations", S`
  <p>Condense to a single log, convert to exponential form, solve, then check. Solve \(\log_2 x+\log_2(x+2)=3\): \(\log_2[x(x+2)]=3\), so \(x^2+2x=8\), \((x+4)(x-2)=0\). Since \(\log_2(-4)\) does not exist, only \(x=2\) works.</p>
  ${plane({ view: { xmin: -1, xmax: 6, ymin: -4, ymax: 6 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => L2(x) + L2(x + 2), a: 0.02, b: 6, color: "violet" }], lines: [{ m: 0, b: 3, color: "amber", dash: true }], points: [P(2, 3, "(2, 3)", "red")] }, "y = log₂x + log₂(x + 2) meets y = 3 only at x = 2")}`),

  section("📌 Explore", S`<p>Pick a law and a base, then change m and n. The two bars always match.</p>`),

  widget("ibLogLaws", { init: [2, 5, 3] }),

  examples([
    ["Level 1 · Expand", S`Expand \(\log\left(\dfrac{x^3\sqrt y}{z^2}\right)\).`,
      [S`\(\log x^3+\log y^{1/2}-\log z^2\).`],
      S`\(3\log x+\frac12\log y-2\log z\)`],
    ["Level 1 · Condense", S`Write \(2\ln 5+\ln 4-\ln 10\) as a single logarithm.`,
      [S`\(\ln 25+\ln4-\ln10=\ln\frac{100}{10}\).`],
      S`\(\ln 10\)`],
    ["Level 2 · Exact value", S`Evaluate \(\log_6 9+\log_6 24-\log_6 6\) exactly.`,
      [S`\(\log_6\frac{9\times24}{6}=\log_6 36\).`],
      S`\(2\)`],
    ["Level 2 · In terms of p and q", S`Given \(\log_b 2=p\) and \(\log_b 5=q\), write \(\log_b 40\) and \(\log_b 0.4\) in terms of p and q.`,
      [S`\(40=2^3\cdot5\): \(3p+q\).`, S`\(0.4=\frac25\): \(p-q\).`],
      S`\(3p+q\); \(p-q\)`],
    ["Level 3 · Equation with a rejected root", S`Solve \(\ln x+\ln(x-1)=\ln 6\).`,
      [S`\(x(x-1)=6\Rightarrow x^2-x-6=0\Rightarrow(x-3)(x+2)=0\).`, S`\(x=-2\) makes \(\ln x\) meaningless.`],
      S`\(x=3\)`,
      plane({ view: { xmin: 0, xmax: 6, ymin: -4, ymax: 4 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => Math.log(x) + Math.log(x - 1), a: 1.01, b: 6, color: "violet" }], lines: [{ m: 0, b: Math.log(6), color: "amber", dash: true }], points: [P(3, Math.log(6), "(3, ln 6)", "red")] }, "The only intersection is at x = 3")],
  ]),

  practice([
    q("Level 1 · condense", S`\(\log_3 12-\log_3 4=\)?`, num(1),
      "Quotient law.", [S`\(\log_3 3\).`], S`\(1\)`),
    q("Level 1 · power", S`\(\log_2 8^5=\)?`, num(15),
      "5 log₂8.", [S`\(5\times3\).`], S`\(15\)`),
    q("Level 2 · change of base", S`Evaluate \(\log_7 30\) (3 d.p.).`, num(Math.log(30) / Math.log(7), 0.001),
      "ln 30 ÷ ln 7.", [S`\(\frac{3.4012}{1.9459}\).`], S`\(\approx1.748\)`),
    q("Level 2 · in terms of a", S`If \(\log 3=a\), then \(\log 900\) equals:`, choice([S`\(2a+2\)`, S`\(9a\)`, S`\(a+2\)`, S`\(2a+100\)`], 0),
      "900 = 3² × 100.", [S`\(2\log3+\log100\).`], S`\(2a+2\)`),
    q("Level 2 · equation", S`Solve \(\log_4 x+\log_4 16=3\).`, num(4),
      "log₄16 = 2.", [S`\(\log_4x=1\).`], S`\(4\)`),
  ]),

  ...hard([
    ["A quotient equation", S`Solve \(\log_3(x+7)-\log_3(x-1)=2\).`,
      [S`\(\log_3\frac{x+7}{x-1}=2\Rightarrow\frac{x+7}{x-1}=9\).`, S`\(x+7=9x-9\Rightarrow x=2\). Check: \(2+7>0\), \(2-1>0\).`],
      S`\(x=2\)`,
      plane({ view: { xmin: 0, xmax: 8, ymin: -1, ymax: 5 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => (Math.log(x + 7) - Math.log(x - 1)) / Math.log(3), a: 1.05, b: 8, color: "violet" }], lines: [{ m: 0, b: 2, color: "amber", dash: true }], vlines: [{ x: 1, color: "red", dash: true }], points: [P(2, 2, "(2, 2)", "red")] }, "y = log₃(x + 7) − log₃(x − 1), asymptote x = 1")],
    ["Logs to a power equation", S`Solve \((\log_2 x)^2-\log_2 x^3=4\).`,
      [S`\(\log_2x^3=3\log_2x\). Let \(u=\log_2x\): \(u^2-3u-4=0\), \((u-4)(u+1)=0\).`, S`\(\log_2x=4\Rightarrow x=16\); \(\log_2x=-1\Rightarrow x=\frac12\).`],
      S`\(x=16\) or \(x=\frac12\)`],
  ], [
    q("Level 3 · surds and logs", S`Evaluate \(\log_5\sqrt{125}\).`, num(1.5, 0.001),
      "√125 = 5^(3/2).", [S`\(\frac32\).`], S`\(\frac32\)`),
    q("Level 3 · equation", S`Solve \(2\log x=\log(x+12)\).`, num(4),
      "x² = x + 12, x > 0.", [S`\((x-4)(x+3)=0\); reject \(-3\).`], S`\(x=4\)`),
    q("Level 3 · chain", S`Evaluate \(\log_2 3\times\log_3 4\times\log_4 8\).`, num(3),
      "Change of base: the logs telescope.", [S`\(\frac{\ln3}{\ln2}\cdot\frac{\ln4}{\ln3}\cdot\frac{\ln8}{\ln4}=\frac{\ln8}{\ln2}\).`], S`\(3\)`),
  ]),

  wrapUp({
    qas: [
      ["Why do logs turn multiplication into addition?", "Logs are exponents, and exponents add when powers multiply."],
      ["Is there a law for log(m + n)?", "No. Only products, quotients and powers can be split."],
      ["How do I evaluate log₅ 12 on a calculator?", "ln 12 ÷ ln 5 (or log 12 ÷ log 5)."],
      ["Why must I check solutions?", "Squaring or combining logs can introduce values where an original log does not exist."],
      ["How do I solve (log x)² type equations?", "Let u = log x, solve the quadratic, then convert back."],
    ],
    summary: [
      "log(mn) = log m + log n; log(m/n) = log m − log n; log mᵏ = k log m.",
      "log_b x = ln x / ln b.",
      "Condense → convert → solve → check the domain.",
    ],
    next: "9.5 uses logarithms to solve exponential equations and models.",
  }),
];
