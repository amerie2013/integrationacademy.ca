// IB AA SL 4.3 — Rational Functions: y = (ax + b)/(cx + d), asymptotes, intercepts, the a/(x − h) + k form, inverses, models
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";

export const TITLE = "4.3 Rational Functions";
export const ID = "a55a791e-ffa6-4360-9881-60d7f86c1814";
const S = String.raw;
const P = (x, y, label, color = "blue") => ({ x, y, label, color });
const hyp = (f, h, xmin, xmax, color = "violet") => [{ f, a: xmin, b: h - 0.02, color }, { f, a: h + 0.02, b: xmax, color }];
const ASY = (h, k) => ({ vlines: [{ x: h, color: "red", dash: true }], lines: [{ m: 0, b: k, color: "red", dash: true }] });

export const blocks = () => [
  intro({
    icon: "➗",
    title: "Rational Functions",
    overview: S`A rational function of the form \(f(x)=\frac{ax+b}{cx+d}\) is a reciprocal graph in disguise. Its vertical asymptote is where the denominator is zero; its horizontal asymptote comes from the ratio of the x-coefficients, because for large \(x\) the constants hardly matter. In this lesson you will find the asymptotes and intercepts, sketch the graph, rewrite it as \(\frac{A}{x-h}+k\), find its inverse, and use it in models such as average cost.`,
    goals: [
      "find the vertical asymptote \\(x=-\\frac dc\\) and horizontal asymptote \\(y=\\frac ac\\) of \\(\\frac{ax+b}{cx+d}\\);",
      "find the intercepts and sketch the graph, stating the domain and range;",
      "rewrite \\(\\frac{ax+b}{cx+d}\\) in the form \\(\\frac{A}{x-h}+k\\) by division;",
      "find the inverse of a rational function and its domain;",
      "interpret asymptotes in models and solve equations involving rational functions.",
    ],
    curriculum: "SL 2.8 (rational functions of the form f(x) = (ax + b)/(cx + d): graphs, equations of vertical and horizontal asymptotes) with SL 2.2 and 2.3 (domain, range, inverse)",
    prior: [
      [S`State the asymptotes of \(y=\frac{3}{x-1}+2\).`, S`\(x=1\) and \(y=2\).`],
      [S`Solve \(2x-5=0\).`, S`\(x=2.5\).`],
      [S`Find \(f^{-1}(x)\) for \(f(x)=\frac{x+4}{3}\).`, S`\(3x-4\).`],
    ],
    words: [
      ["Rational function", "a quotient of two polynomials", "\\(\\frac{2x+1}{x-3}\\)"],
      ["Vertical asymptote", "\\(cx+d=0\\Rightarrow x=-\\frac dc\\)", "\\(x=3\\)"],
      ["Horizontal asymptote", "\\(y=\\frac ac\\), the long-run value", "\\(y=2\\)"],
      ["Zero (x-intercept)", "\\(ax+b=0\\Rightarrow x=-\\frac ba\\)", "\\(x=-0.5\\)"],
      ["Average cost", "total cost ÷ number made", "\\(\\frac{500+4n}{n}\\)"],
    ],
  }),

  section("📌 Asymptotes and intercepts", S`
  <p>For \(f(x)=\frac{2x+1}{x-3}\): the denominator is zero at \(x=3\), the vertical asymptote. For large \(|x|\), \(\frac{2x+1}{x-3}\approx\frac{2x}{x}=2\), so \(y=2\) is the horizontal asymptote. The x-intercept is where the <em>numerator</em> is zero, \(x=-\frac12\); the y-intercept is \(f(0)=-\frac13\).</p>
  ${table(["Feature", "Rule for (ax + b)/(cx + d)", "For (2x + 1)/(x − 3)"], [
    ["vertical asymptote", S`\(x=-\frac dc\)`, S`\(x=3\)`],
    ["horizontal asymptote", S`\(y=\frac ac\)`, S`\(y=2\)`],
    ["x-intercept", S`\(x=-\frac ba\)`, S`\(x=-0.5\)`],
    ["y-intercept", S`\(y=\frac bd\)`, S`\(y=-\frac13\)`],
    ["domain / range", S`\(x\ne-\frac dc\) / \(y\ne\frac ac\)`, S`\(x\ne3\) / \(y\ne2\)`],
  ])}
  ${plane({ view: { xmin: -6, xmax: 10, ymin: -6, ymax: 10 }, step: { x: 1, y: 1 }, curves: hyp((x) => (2 * x + 1) / (x - 3), 3, -6, 10), ...ASY(3, 2), points: [P(-0.5, 0, "(−0.5, 0)"), P(0, -1 / 3, "(0, −0.33)", "green"), P(4, 9, "(4, 9)"), P(3, 2, "(3, 2)", "amber")] }, "y = (2x + 1)/(x − 3): asymptotes x = 3, y = 2")}
  ${keyIdea(S`Bottom = 0 gives the vertical asymptote; top = 0 gives the x-intercept; the ratio of the x-coefficients gives the horizontal asymptote.`)}`),

  section("📌 The a/(x − h) + k form, inverses and models", S`
  <p>Dividing shows the hidden reciprocal: \(\frac{2x+1}{x-3}=\frac{2(x-3)+7}{x-3}=2+\frac{7}{x-3}\). So the graph is \(y=\frac1x\) stretched by 7 and moved 3 right and 2 up — which is exactly why its asymptotes are \(x=3\) and \(y=2\).</p>
  ${plane({ view: { xmin: -4, xmax: 10, ymin: -6, ymax: 10 }, step: { x: 1, y: 1 }, curves: [...hyp((x) => 7 / x, 0, -4, 10, "gray"), ...hyp((x) => 7 / (x - 3) + 2, 3, -4, 10)], ...ASY(3, 2), points: [P(1, 7, "(1, 7)", "gray"), P(4, 9, "(4, 9)")] }, "y = 7/x (grey) moved 3 right and 2 up gives y = (2x + 1)/(x − 3)")}
  <p>To find the inverse, swap \(x\) and \(y\) and make \(y\) the subject: collect the \(y\) terms on one side and factorise. The inverse of \(\frac{ax+b}{cx+d}\) is again rational, with its asymptotes swapped.</p>
  ${plane({ view: { xmin: -6, xmax: 10, ymin: -6, ymax: 10 }, step: { x: 1, y: 1 }, curves: [...hyp((x) => (2 * x + 1) / (x - 3), 3, -6, 10), ...hyp((x) => (3 * x + 1) / (x - 2), 2, -6, 10, "green"), { f: (x) => x, color: "gray" }], points: [P(4, 9, "(4, 9)"), P(9, 4, "(9, 4)", "green")] }, "f (violet) and f⁻¹(x) = (3x + 1)/(x − 2) (green) are reflections in y = x")}
  ${plane({ view: { xmin: -10, xmax: 410, ymin: -2, ymax: 32 }, step: { x: 50, y: 5 }, curves: [{ f: (n) => (1200 + 4 * n) / n, a: 50, b: 410, color: "violet" }], lines: [{ m: 0, b: 4, color: "red", dash: true }], points: [P(100, 16, "(100, 16)"), P(300, 8, "(300, 8)")], xlabel: "n", ylabel: "cost per item" }, "Average cost (1200 + 4n)/n falls towards 4, the cost of one more item")}
  ${watchOut([
    "The vertical asymptote comes from the denominator, the x-intercept from the numerator — do not mix them up.",
    "The horizontal asymptote is a/c, not b/d (b/d is the y-intercept).",
    "If bc − ad = 0 the top is a multiple of the bottom: the graph is a horizontal line with a hole, not a hyperbola.",
    "When finding the inverse, factorise y out after collecting the y terms.",
  ])}`),

  section("📌 Explore", S`<p>Change \(a\), \(b\), \(c\) and \(d\). The readout gives the asymptotes, intercepts and the \(\frac{A}{x-h}+k\) form; try making \(bc-ad=0\).</p>`),

  widget("ibRational", { init: [2, 1, 1, -3] }),

  examples([
    ["Level 1 · Asymptotes", S`State the asymptotes, domain and range of \(f(x)=\frac{3x-2}{x+4}\).`,
      [S`\(x+4=0\Rightarrow x=-4\).`, S`\(y=\frac31=3\).`],
      S`\(x=-4\), \(y=3\); \(x\ne-4\), \(y\ne3\)`],
    ["Level 1 · Intercepts", S`Find the intercepts of \(y=\frac{x-6}{2x+3}\).`,
      [S`\(y=0\): \(x=6\).`, S`\(x=0\): \(y=-\frac63=-2\).`],
      S`\((6,0)\) and \((0,-2)\)`,
      plane({ view: { xmin: -8, xmax: 10, ymin: -6, ymax: 6 }, step: { x: 1, y: 1 }, curves: hyp((x) => (x - 6) / (2 * x + 3), -1.5, -8, 10), ...ASY(-1.5, 0.5), points: [P(6, 0, "(6, 0)"), P(0, -2, "(0, −2)", "green")] })],
    ["Level 2 · Rewrite and sketch", S`Write \(y=\frac{4x-5}{x-2}\) in the form \(\frac{A}{x-h}+k\) and sketch it.`,
      [S`\(4x-5=4(x-2)+3\).`, S`\(y=4+\frac{3}{x-2}\): asymptotes \(x=2\), \(y=4\).`, S`Intercepts \((1.25,0)\) and \((0,2.5)\).`],
      S`\(y=\frac{3}{x-2}+4\)`,
      plane({ view: { xmin: -4, xmax: 8, ymin: -3, ymax: 10 }, step: { x: 1, y: 1 }, curves: hyp((x) => (4 * x - 5) / (x - 2), 2, -4, 8), ...ASY(2, 4), points: [P(1.25, 0, "(1.25, 0)"), P(0, 2.5, "(0, 2.5)", "green")] })],
    ["Level 2 · Inverse", S`Find \(f^{-1}(x)\) for \(f(x)=\frac{x+5}{x-1}\), \(x\ne1\).`,
      [S`Swap: \(x=\frac{y+5}{y-1}\Rightarrow xy-x=y+5\).`, S`\(xy-y=x+5\Rightarrow y(x-1)=x+5\).`, S`\(f^{-1}(x)=\frac{x+5}{x-1}\), \(x\ne1\): this function is self-inverse.`],
      S`\(f^{-1}(x)=\frac{x+5}{x-1}\)`],
    ["Level 3 · Average cost", S`Making \(n\) phone cases costs \(C=900+3n\). Find the average cost per case \(A(n)\), its horizontal asymptote, and how many cases make the average cost 4.50.`,
      [S`\(A(n)=\frac{900+3n}{n}=3+\frac{900}{n}\).`, S`Horizontal asymptote \(A=3\): the average approaches the cost of each extra case.`, S`\(3+\frac{900}{n}=4.5\Rightarrow n=600\).`],
      S`\(A=3+\frac{900}{n}\); \(A\to3\); 600 cases`,
      plane({ view: { xmin: -20, xmax: 1050, ymin: -1, ymax: 14 }, step: { x: 100, y: 1 }, curves: [{ f: (n) => 3 + 900 / n, a: 90, b: 1050, color: "violet" }], lines: [{ m: 0, b: 3, color: "red", dash: true }], points: [P(600, 4.5, "(600, 4.5)")], xlabel: "n", ylabel: "A" })],
  ]),

  practice([
    q("Level 1 · vertical asymptote", S`What is the vertical asymptote of \(y=\frac{5x+1}{2x-8}\)? Give the value of \(x\).`, num(4),
      "Set the denominator to 0.", [S`\(2x=8\).`], S`\(x=4\)`),
    q("Level 1 · horizontal asymptote", S`What is the horizontal asymptote of \(y=\frac{6x-1}{3x+2}\)? Give the value of \(y\).`, num(2),
      "Ratio of the x-coefficients.", [S`\(\frac63\).`], S`\(y=2\)`),
    q("Level 2 · x-intercept", S`Find the x-intercept of \(y=\frac{2x+7}{x-1}\).`, num(-3.5, 0.001),
      "Numerator = 0.", [S`\(2x=-7\).`], S`\(-3.5\)`),
    q("Level 2 · y-intercept", S`Find the y-intercept of \(y=\frac{3x-12}{x+4}\).`, num(-3),
      "Put x = 0.", [S`\(\frac{-12}{4}\).`], S`\(-3\)`),
    q("Level 2 · form", S`\(\frac{3x+4}{x+1}\) equals:`, choice([S`\(3+\frac{1}{x+1}\)`, S`\(3+\frac{4}{x+1}\)`, S`\(4+\frac{3}{x+1}\)`, S`\(3-\frac{1}{x+1}\)`], 0),
      "Write 3x + 4 = 3(x + 1) + ….", [S`\(3x+4=3(x+1)+1\).`], S`\(3+\frac1{x+1}\)`),
  ]),

  ...hard([
    ["Meeting a line", S`Find where \(y=\frac{x+3}{x-1}\) meets \(y=x\).`,
      [S`\(x+3=x(x-1)\Rightarrow x^2-2x-3=0\).`, S`\((x-3)(x+1)=0\Rightarrow x=3\) or \(-1\).`, S`Points \((3,3)\) and \((-1,-1)\) — on \(y=x\), so they are where \(f\) meets its inverse.`],
      S`\((3,3)\) and \((-1,-1)\)`,
      plane({ view: { xmin: -5, xmax: 7, ymin: -5, ymax: 7 }, step: { x: 1, y: 1 }, curves: [...hyp((x) => (x + 3) / (x - 1), 1, -5, 7), { f: (x) => x, color: "blue" }], ...ASY(1, 1), points: [P(3, 3, "(3, 3)", "red"), P(-1, -1, "(−1, −1)", "red")] })],
    ["Find the coefficients", S`\(f(x)=\frac{ax+3}{x+b}\) has a vertical asymptote \(x=-2\) and passes through \((1,3)\). Find \(a\), \(b\) and the horizontal asymptote.`,
      [S`\(x+b=0\) at \(x=-2\Rightarrow b=2\).`, S`\(f(1)=\frac{a+3}{3}=3\Rightarrow a=6\).`, S`Horizontal asymptote \(y=\frac61=6\).`],
      S`\(a=6\), \(b=2\); \(y=6\)`],
  ], [
    q("Level 3 · inverse value", S`\(f(x)=\frac{2x-1}{x+3}\). Find \(f^{-1}(1)\).`, num(4),
      "Solve f(x) = 1.", [S`\(2x-1=x+3\).`], S`\(4\)`),
    q("Level 3 · inverse asymptote", S`\(f(x)=\frac{4x+1}{x-5}\). What is the vertical asymptote of \(f^{-1}\)? Give the value of \(x\).`, num(4),
      "The asymptotes swap.", [S`\(f\) has \(y=4\), so \(f^{-1}\) has \(x=4\).`], S`\(x=4\)`),
    q("Level 3 · average cost", S`Average cost is \(A(n)=\frac{2400+6n}{n}\). How many items make the average cost 10?`, num(600),
      "6 + 2400/n = 10.", [S`\(\frac{2400}{n}=4\).`], S`\(600\)`),
  ]),

  wrapUp({
    qas: [
      ["Why is the horizontal asymptote a/c?", "For very large |x| the constants b and d hardly matter, so (ax + b)/(cx + d) ≈ ax/(cx) = a/c."],
      ["How do I tell the asymptote from the intercept?", "Denominator zero → vertical asymptote; numerator zero → x-intercept."],
      ["Why rewrite as A/(x − h) + k?", "It shows the graph as a transformed reciprocal, so the sketch and the range follow at once."],
      ["Is the inverse always rational?", "Yes: swapping and rearranging gives another (ax + b)/(cx + d), with the asymptotes swapped."],
      ["What does the horizontal asymptote mean for average cost?", "The long-run cost of each extra item, which the average approaches but never reaches."],
    ],
    summary: [
      "(ax + b)/(cx + d): vertical asymptote x = −d/c, horizontal y = a/c.",
      "x-intercept −b/a, y-intercept b/d.",
      "Divide to get A/(x − h) + k.",
      "Inverse: swap, collect y, factorise.",
      "Models: the horizontal asymptote is the long-run value.",
    ],
    next: "4.4 reviews the chapter with mixed exam-style questions.",
  }),
];
