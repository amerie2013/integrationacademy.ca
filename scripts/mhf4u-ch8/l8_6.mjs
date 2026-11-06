// MHF4U 8.6 — Chapter 8 Review (NEW lesson): sums, products, quotients, composites, inequalities and
// combined models in multi-step examples.
import { intro, section, examples, practice, wrapUp, table, q, num, choice, hard, plane } from "./lib.mjs";

export const TITLE = "8.6 Chapter 8 Review";
export const ID = "6d4f0008-0001-4001-8001-000000000806";

const S = String.raw;
const L = Math.log10;
export const blocks = () => [
  intro({
    icon: "🧩",
    title: "Chapter 8 Review — Combining Functions",
    overview: S`This page pulls the chapter together before the test: each lesson's key idea on one screen, multi-step examples that combine several skills, mixed practice and two harder problems. The thread through the whole chapter: a combined function is built from the outputs of simpler ones, so its domain, zeros, signs and graph all come from the parts.`,
    goals: [
      "recall the key idea and common mistake of each lesson;",
      "find sums, differences, products, quotients and composites;",
      "state domains of combined functions;",
      "solve inequalities comparing two functions;",
      "build and use combined models.",
    ],
    curriculum: "D2.1–D2.5, D3.1–D3.3 (whole chapter)",
    prior: [
      [S`\((f+g)(x)\)?`, S`\(f(x)+g(x)\).`],
      [S`Domain of \(\frac fg\)?`, S`Both defined and \(g(x)\ne0\).`],
      [S`\(f(g(x))\): which first?`, S`\(g\), then \(f\).`],
    ],
    words: [
      ["Combination", "\\(f\\pm g,\\ fg,\\ \\frac fg\\)", "\\(x^2+2^x\\)"],
      ["Composite", "\\(f(g(x))\\)", "\\(\\log(x^2+1)\\)"],
      ["Crossing", "where \\(f(x)=g(x)\\)", "zeros of \\(f-g\\)"],
      ["Envelope", "the decaying factor of a damped wave", "\\(12(0.75)^t\\)"],
    ],
  }),

  section("📌 The chapter on one page", table(["Lesson", "Key idea", "Example", "Watch out"], [
    ["8.1 Sums & differences", "add or subtract outputs", "\\(P=R-C\\)", "bracket \\(g\\) when subtracting"],
    ["8.2 Products & quotients", "multiply or divide outputs", "\\(\\tan x=\\frac{\\sin x}{\\cos x}\\)", "exclude \\(g(x)=0\\)"],
    ["8.3 Composites", "\\(f(g(x))\\): inside out", "\\(F(d(t))\\)", "order matters; inner domain"],
    ["8.4 Inequalities", "\\(f>g\\iff f-g>0\\)", "\\(x^2>x+6\\)", "never multiply by an unknown sign"],
    ["8.5 Models", "trend + cycle, envelope × wave", "\\(20(0.9)^t\\cos\\pi t\\)", "sensible domain and units"],
  ])),

  examples([
    ["All the combinations", S`\(f(x)=x^2-1\) and \(g(x)=x+3\). Find \((f+g)(2)\), \((fg)(-1)\), the domain of \(\frac fg\), and \(f(g(x))\).`,
      [S`<b>Sum:</b> \(f(2)+g(2)=3+5=8\).`,
        S`<b>Product:</b> \(f(-1)g(-1)=0\cdot2=0\) (a zero of \(f\) is a zero of \(fg\)).`,
        S`<b>Quotient domain:</b> \(g(x)=0\) at \(x=-3\), so \(x\ne-3\).`,
        S`<b>Composite:</b> \(f(x+3)=(x+3)^2-1=x^2+6x+8\). <b>Check at \(x=0\):</b> \(g(0)=3\), \(f(3)=8\) ✓`],
      S`\(8\); \(0\); \(x\ne-3\); \(x^2+6x+8\)`],
    ["Domain with two restrictions", S`Find the domain of \(h(x)=\dfrac{\sqrt{x+1}}{x-3}\).`,
      [S`<b>Numerator:</b> \(\sqrt{x+1}\) needs \(x\ge-1\).`,
        S`<b>Denominator:</b> \(x-3\ne0\), so \(x\ne3\).`,
        S`<b>Both:</b> \(x\ge-1\) and \(x\ne3\).`,
        S`<b>Check:</b> \(h(-1)=\frac{0}{-4}=0\) is defined ✓; \(h(3)\) would divide by \(0\) ✗`],
      S`\(x\ge-1,\ x\ne3\)`],
    ["Solve a composite equation", S`\(f(x)=\log x\) and \(g(x)=x^2\). Solve \(f(g(x))=2\) and state the domain of \(f\circ g\).`,
      [S`<b>Composite:</b> \(f(g(x))=\log(x^2)\), defined when \(x^2>0\), i.e. \(x\ne0\).`,
        S`<b>Exponential form:</b> \(x^2=10^2=100\).`,
        S`<b>Solve:</b> \(x=\pm10\); both are in the domain.`,
        S`<b>Check:</b> \(\log(10^2)=\log((-10)^2)=2\) ✓`],
      S`\(x=\pm10\); domain \(x\ne0\)`],
    ["An inequality from a graph and algebra", S`Solve \(x^3>4x\).`,
      [S`<b>Difference:</b> \(x^3-4x>0\Rightarrow x(x-2)(x+2)>0\).`,
        S`<b>Zeros:</b> \(-2,\ 0,\ 2\).`,
        S`<b>Signs:</b> \(x=-3\): \(-15<0\); \(x=-1\): \(3>0\); \(x=1\): \(-3<0\); \(x=3\): \(15>0\).`,
        S`<b>Answer:</b> \(-2<x<0\) or \(x>2\): where the cubic is above the line \(y=4x\).`],
      S`\(-2<x<0\) or \(x>2\)`,
      plane({ view: { xmin: -3.5, xmax: 3.5, ymin: -16, ymax: 16 }, curves: [{ f: (x) => x ** 3, color: "violet" }], lines: [{ m: 4, b: 0, color: "blue" }], points: [{ x: -2, y: -8, label: "(−2, −8)", color: "amber" }, { x: 2, y: 8, label: "(2, 8)", color: "amber" }], step: { x: 1, y: 2 } })],
    ["A damped model", S`\(d(t)=12(0.75)^t\sin(\pi t)\) cm. When does the envelope first fall below \(2\) cm?`,
      [S`<b>Envelope:</b> \(12(0.75)^t\) is the amplitude at time \(t\).`,
        S`<b>Inequality:</b> \(12(0.75)^t<2\Rightarrow0.75^t<\frac16\).`,
        S`<b>Logs:</b> \(t>\dfrac{\log(1/6)}{\log0.75}\approx6.23\) s (dividing by the negative \(\log0.75\) reverses the sign).`,
        S`<b>Check:</b> \(12(0.75)^{6.23}\approx2.00\) ✓`],
      S`after about \(6.2\) s`,
      plane({ view: { xmin: -0.3, xmax: 9, ymin: -13, ymax: 13 }, curves: [{ f: (t) => 12 * 0.75 ** t, a: 0, color: "gray" }, { f: (t) => -12 * 0.75 ** t, a: 0, color: "gray" }, { f: (t) => 12 * 0.75 ** t * Math.sin(Math.PI * t), a: 0, color: "violet" }], lines: [{ m: 0, b: 2, color: "blue", dash: true }], step: { x: 1, y: 2 } })],
  ]),

  practice([
    q("difference", S`\(f(x)=x^2\), \(g(x)=4x-1\). Find \((f-g)(3)\).`, num(-2), "9 − 11.", [S`\(9-11=-2\).`], S`\(-2\)`),
    q("composite", S`\(f(x)=2^x\), \(g(x)=x+2\). Find \(f(g(1))\).`, num(8), "g(1) = 3.", [S`\(2^3=8\).`], S`\(8\)`),
    q("domain", S`Domain of \(\dfrac{1}{x^2-4x}\)?`, choice(["x ≠ 0 and x ≠ 4", "x ≠ 4", "x ≠ 2", "all real x"], 0), "x(x − 4) ≠ 0.", [S`Exclude \(0\) and \(4\).`], S`\(x\ne0,4\)`),
    q("inequality", S`Solve \(x^2\ge2x+8\).`, choice(["x ≤ −2 or x ≥ 4", "−2 ≤ x ≤ 4", "x ≥ 4", "x ≤ −4 or x ≥ 2"], 0), "(x − 4)(x + 2) ≥ 0.", [S`Positive outside the zeros.`], S`\(x\le-2\) or \(x\ge4\)`),
    q("zeros", S`How many real zeros does \(y=(x-1)(x^2+1)\) have?`, num(1), "x² + 1 is never zero.", [S`Only \(x=1\).`], S`\(1\)`),
  ]),

  ...hard([
    ["Composite with an inverse", S`\(f(x)=3x-6\). Find \(f^{-1}\) and verify \(f(f^{-1}(x))=x\) and \(f^{-1}(f(x))=x\).`,
      [S`<b>Inverse:</b> \(x=3y-6\Rightarrow y=\dfrac{x+6}3\).`,
        S`<b>\(f(f^{-1}(x))\):</b> \(3\cdot\dfrac{x+6}3-6=x+6-6=x\) ✓`,
        S`<b>\(f^{-1}(f(x))\):</b> \(\dfrac{(3x-6)+6}3=\dfrac{3x}3=x\) ✓`,
        S`<b>Numerical check:</b> \(f(4)=6\) and \(f^{-1}(6)=4\) ✓`],
      S`\(f^{-1}(x)=\frac{x+6}3\); both composites give \(x\)`],
    ["A rational inequality", S`Solve \(\dfrac{2x}{x+1}\le1\).`,
      [S`<b>Subtract 1:</b> \(\dfrac{2x-(x+1)}{x+1}=\dfrac{x-1}{x+1}\le0\).`,
        S`<b>Critical values:</b> \(x=1\) (zero, included) and \(x=-1\) (excluded).`,
        S`<b>Signs:</b> \(x=-2\): \(\frac{-3}{-1}>0\) ✗; \(x=0\): \(\frac{-1}{1}<0\) ✓; \(x=2\): \(\frac13>0\) ✗.`,
        S`<b>Answer:</b> \(-1<x\le1\).`],
      S`\(-1<x\le1\)`,
      plane({ view: { xmin: -5, xmax: 5, ymin: -4, ymax: 8 }, curves: [{ f: (x) => (2 * x) / (x + 1), b: -1.05, color: "violet" }, { f: (x) => (2 * x) / (x + 1), a: -0.95, color: "violet" }], lines: [{ m: 0, b: 1, color: "blue", dash: true }], step: { x: 1, y: 1 } })],
  ], [
    q("hard", S`\(f(x)=x^2+2\) and \(f(g(x))=4x^2+4x+3\) with \(g(x)=ax+b\), \(a>0\). Find \(g(3)\).`, num(7), "(g(x))² = 4x² + 4x + 1.", [S`\(g(x)=2x+1\), so \(g(3)=7\).`], S`\(7\)`),
    q("hard", S`How many integers \(x\ge-2\) satisfy \(x^2(x-3)<0\)?`, num(4), "x < 3 and x ≠ 0.", [S`\(-2,-1,1,2\).`], S`\(4\)`),
    q("hard", S`Find the envelope \(12(0.75)^t\) at \(t=2\).`, num(6.75, 0.0001), "12 × 0.5625.", [S`\(6.75\).`], S`\(6.75\)`),
  ]),

  wrapUp({
    qas: [
      ["How do I combine two functions?", "Add, subtract, multiply or divide their outputs at each x."],
      ["What limits the domain of a combination?", "Both domains, plus g(x) ≠ 0 for a quotient, plus the inner function for a composite."],
      ["How do I solve f(x) > g(x)?", "Find where f − g is zero, then test the intervals."],
      ["How do I pick a model?", "Trend + cycle: sum; damping: product; chained: composite; per item: quotient."],
      ["What is f(f⁻¹(x))?", "x."],
    ],
    summary: [
      "(f ± g), fg, f/g act on outputs.",
      "f(g(x)): inside out; order matters.",
      "f > g ⇔ f − g > 0.",
      "Combined models: read each part's meaning.",
    ],
    next: "This completes Advanced Functions.",
  }),
];
