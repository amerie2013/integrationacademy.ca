// IB AA SL 4.4 — Chapter 4 Review: reciprocal function, transformed reciprocals, (ax + b)/(cx + d), inverses and models
import { intro, section, keyIdea, widget, examples, practice, wrapUp, table, q, num, hard, plane } from "./lib.mjs";

export const TITLE = "4.4 Chapter 4 Review";
export const ID = "1baa0004-0001-4001-8001-000000000404";
const S = String.raw;
const P = (x, y, label, color = "blue") => ({ x, y, label, color });
const hyp = (f, h, xmin, xmax, color = "violet") => [{ f, a: xmin, b: h - 0.02, color }, { f, a: h + 0.02, b: xmax, color }];
const ASY = (h, k) => ({ vlines: [{ x: h, color: "red", dash: true }], lines: [{ m: 0, b: k, color: "red", dash: true }] });

export const blocks = () => [
  intro({
    icon: "🧭",
    title: "Chapter 4 Review",
    overview: S`This review connects the chapter. The table lists each question type and the tool for it; the examples combine skills the way exam questions do, and the practice and hard-level questions are exam style, from one-line Paper 1 items to multi-step problems with models.`,
    goals: [
      "sketch \\(y=\\frac kx\\) and use inverse variation;",
      "read asymptotes, domain and range from \\(y=\\frac{a}{x-h}+k\\);",
      "find asymptotes and intercepts of \\(\\frac{ax+b}{cx+d}\\) and rewrite it as a transformed reciprocal;",
      "find inverses of rational functions and where graphs meet lines;",
      "interpret asymptotes in models.",
    ],
    curriculum: "SL 2.8 (reciprocal and rational functions, asymptotes) with SL 2.2, 2.3 and 2.11",
    prior: [
      [S`State the asymptotes of \(y=\frac{2x-1}{x+5}\).`, S`\(x=-5\) and \(y=2\).`],
      [S`What does \(y=\frac{1}{x-4}\) do to \(y=\frac1x\)?`, "Translates it 4 units right."],
      [S`Is \(y=\frac{10}{x}\) self-inverse?`, "Yes: swapping x and y gives the same equation."],
    ],
    words: [
      ["4.1", "the reciprocal function and inverse variation", ""],
      ["4.2", "transformations a/(x − h) + k", ""],
      ["4.3", "rational functions (ax + b)/(cx + d)", ""],
      ["Asymptote", "a line the graph approaches", ""],
      ["Centre", "where the asymptotes cross", ""],
    ],
  }),

  section("📌 The chapter on one page", S`
  ${table(["Question", "Tool"], [
    ["sketch y = k/x", "asymptotes x = 0, y = 0; quadrants 1 and 3 if k > 0, 2 and 4 if k < 0"],
    ["inverse variation", S`\(xy=k\): find \(k\) from one data pair`],
    ["asymptotes of a/(x − h) + k", S`\(x=h\), \(y=k\); domain \(x\ne h\), range \(y\ne k\)`],
    ["asymptotes of (ax + b)/(cx + d)", S`\(x=-\frac dc\), \(y=\frac ac\)`],
    ["intercepts", "x = 0 for the y-intercept; numerator = 0 for the x-intercept"],
    ["rewrite as a transformed reciprocal", S`divide: \(\frac{ax+b}{cx+d}=\frac{A}{x-h}+k\)`],
    ["inverse", "swap x and y, collect the y terms, factorise"],
  ])}
  ${plane({ view: { xmin: -6, xmax: 8, ymin: -6, ymax: 8 }, step: { x: 1, y: 1 }, curves: [...hyp((x) => (3 * x + 2) / (x - 2), 2, -6, 8), { f: (x) => x + 2, color: "blue" }], ...ASY(2, 3), points: [P((3 + Math.sqrt(33)) / 2, (7 + Math.sqrt(33)) / 2, "(4.37, 6.37)", "red"), P((3 - Math.sqrt(33)) / 2, (7 - Math.sqrt(33)) / 2, "(−1.37, 0.63)", "red")] }, "y = (3x + 2)/(x − 2) and the line y = x + 2 (Hard level, Challenge 1)")}
  ${keyIdea("Most questions need two steps: find the asymptotes (or the a/(x − h) + k form), then use them — to sketch, to state the range, to set up an equation, or to interpret a model.")}`),

  section("📌 Explore", S`<p>Use the explorer to check the asymptotes and intercepts of the functions in the examples.</p>`),

  widget("ibRational", { init: [3, 2, 1, -2] }),

  examples([
    ["Level 1 · Inverse variation", S`\(y\) varies inversely with \(x\), and \(y=7.5\) when \(x=4\). Find \(y\) when \(x=6\), and \(x\) when \(y=-3\).`,
      [S`\(k=xy=30\).`, S`\(y=\frac{30}{6}=5\).`, S`\(x=\frac{30}{-3}=-10\).`],
      S`\(5\); \(-10\)`,
      plane({ view: { xmin: -12, xmax: 12, ymin: -12, ymax: 12 }, step: { x: 2, y: 2 }, curves: hyp((x) => 30 / x, 0, -12, 12), ...ASY(0, 0), points: [P(4, 7.5, "(4, 7.5)"), P(6, 5, "(6, 5)", "green"), P(-10, -3, "(−10, −3)", "green")] })],
    ["Level 2 · Transformed reciprocal", S`Sketch \(y=\frac{-3}{x+2}+1\), stating its asymptotes and intercepts.`,
      [S`Asymptotes \(x=-2\), \(y=1\); \(a<0\), so the branches are top-left and bottom-right of the centre.`, S`\(x=0\): \(y=-1.5+1=-0.5\).`, S`\(y=0\): \(\frac{-3}{x+2}=-1\Rightarrow x=1\).`],
      S`\((0,-0.5)\), \((1,0)\)`,
      plane({ view: { xmin: -7, xmax: 5, ymin: -5, ymax: 7 }, step: { x: 1, y: 1 }, curves: hyp((x) => -3 / (x + 2) + 1, -2, -7, 5), ...ASY(-2, 1), points: [P(0, -0.5, "(0, −0.5)", "green"), P(1, 0, "(1, 0)")] })],
    ["Level 2 · Both forms", S`\(f(x)=\frac{2x+9}{x+3}\). Write \(f\) as \(\frac{A}{x-h}+k\), and state its domain and range.`,
      [S`\(2x+9=2(x+3)+3\).`, S`\(f(x)=\frac{3}{x+3}+2\).`, S`Domain \(x\ne-3\), range \(y\ne2\).`],
      S`\(\frac{3}{x+3}+2\); \(x\ne-3\), \(y\ne2\)`],
    ["Level 2 · Inverse", S`Find \(g^{-1}(x)\) for \(g(x)=\frac{3x}{x-4}\), and state the asymptotes of \(g^{-1}\).`,
      [S`\(x=\frac{3y}{y-4}\Rightarrow xy-4x=3y\Rightarrow y(x-3)=4x\).`, S`\(g^{-1}(x)=\frac{4x}{x-3}\).`, S`Asymptotes \(x=3\), \(y=4\) (those of \(g\), swapped).`],
      S`\(\frac{4x}{x-3}\); \(x=3\), \(y=4\)`],
    ["Level 3 · A concentration model", S`A drug's concentration is \(C(t)=\frac{20t}{t+5}\) mg/L after \(t\) hours. Find the concentration after 5 hours, the long-run value, and when it reaches 16 mg/L.`,
      [S`\(C(5)=\frac{100}{10}=10\) mg/L.`, S`Horizontal asymptote \(C=20\) mg/L.`, S`\(20t=16t+80\Rightarrow t=20\) h.`],
      "10 mg/L; 20 mg/L; 20 h",
      plane({ view: { xmin: -2, xmax: 62, ymin: -1, ymax: 24 }, step: { x: 5, y: 2 }, curves: [{ f: (t) => (20 * t) / (t + 5), a: 0, b: 62, color: "violet" }], lines: [{ m: 0, b: 20, color: "red", dash: true }], points: [P(5, 10, "(5, 10)"), P(20, 16, "(20, 16)", "green")], xlabel: "t", ylabel: "C" })],
  ]),

  practice([
    q("Level 1 · find k", S`\(y=\frac kx\) passes through \((-2,9)\). Find \(k\).`, num(-18),
      "k = xy.", [S`\((-2)(9)\).`], S`\(-18\)`),
    q("Level 1 · asymptote", S`What is the horizontal asymptote of \(y=\frac{4}{x-1}-6\)? Give the value of \(y\).`, num(-6),
      "The added constant.", [S`\(y=-6\).`], S`\(-6\)`),
    q("Level 2 · vertical asymptote", S`What is the vertical asymptote of \(y=\frac{x+2}{3x-9}\)? Give the value of \(x\).`, num(3),
      "Denominator = 0.", [S`\(3x=9\).`], S`\(3\)`),
    q("Level 2 · horizontal asymptote", S`What is the horizontal asymptote of \(y=\frac{5x+2}{2x-1}\)? Give the value of \(y\).`, num(2.5, 0.001),
      "a/c.", [S`\(\frac52\).`], S`\(2.5\)`),
    q("Level 2 · intercept", S`Find the x-intercept of \(y=\frac{3}{x-1}+1\).`, num(-2),
      "3/(x − 1) = −1.", [S`\(x-1=-3\).`], S`\(-2\)`),
  ]),

  ...hard([
    ["A rational graph and a line", S`Find where \(y=\frac{3x+2}{x-2}\) meets \(y=x+2\).`,
      [S`\(3x+2=(x+2)(x-2)=x^2-4\).`, S`\(x^2-3x-6=0\Rightarrow x=\frac{3\pm\sqrt{33}}{2}\).`, S`\(x\approx4.37\) or \(-1.37\), giving \((4.37,6.37)\) and \((-1.37,0.628)\).`],
      S`\(x=\frac{3\pm\sqrt{33}}{2}\)`],
    ["Unknown coefficients", S`\(f(x)=\frac{ax+b}{x+c}\) has asymptotes \(x=1\) and \(y=-2\), and \(f(0)=4\). Find \(a\), \(b\) and \(c\), and the x-intercept.`,
      [S`\(x+c=0\) at \(x=1\Rightarrow c=-1\).`, S`\(y=\frac a1=-2\Rightarrow a=-2\).`, S`\(f(0)=\frac{b}{-1}=4\Rightarrow b=-4\).`, S`x-intercept: \(-2x-4=0\Rightarrow x=-2\).`],
      S`\(a=-2\), \(b=-4\), \(c=-1\); \(x=-2\)`,
      plane({ view: { xmin: -6, xmax: 6, ymin: -8, ymax: 6 }, step: { x: 1, y: 1 }, curves: hyp((x) => (-2 * x - 4) / (x - 1), 1, -6, 6), ...ASY(1, -2), points: [P(0, 4, "(0, 4)", "green"), P(-2, 0, "(−2, 0)")] })],
  ], [
    q("Level 3 · inverse", S`\(f(x)=\frac{x+6}{x-2}\). Find \(f^{-1}(3)\).`, num(6),
      "Solve f(x) = 3.", [S`\(x+6=3x-6\Rightarrow x=6\).`], S`\(6\)`),
    q("Level 3 · range", S`\(f(x)=\frac{7}{x-5}+3\) for \(x>5\). What is the greatest lower bound of its range?`, num(3),
      "On the right branch the values decrease towards the asymptote.", [S`\(y>3\).`], S`\(3\)`),
    q("Level 3 · model", S`\(C(t)=\frac{30t}{t+4}\). When is \(C=24\)?`, num(16),
      "30t = 24t + 96.", [S`\(6t=96\).`], S`\(16\)`),
  ]),

  wrapUp({
    qas: [
      ["What should I revise first?", "Finding asymptotes of (ax + b)/(cx + d) and rewriting it as A/(x − h) + k."],
      ["How do I check a sketch?", "Asymptotes, both intercepts, and one extra point on each branch."],
      ["How do I find where a rational graph meets a line?", "Multiply both sides by the denominator and solve the quadratic; reject any x that makes the denominator 0."],
      ["When do I use the GDC?", "Paper 2: intersections and values from graphs. Paper 1: asymptotes and algebra by hand."],
      ["What does an asymptote mean in a model?", "A long-run value the quantity approaches but never reaches."],
    ],
    summary: [
      "y = k/x: asymptotes on the axes; xy = k.",
      "y = a/(x − h) + k: asymptotes x = h, y = k.",
      "(ax + b)/(cx + d): x = −d/c, y = a/c; divide for the transformed form.",
      "Inverse: swap, collect, factorise; asymptotes swap.",
    ],
    next: "Chapter 5 begins differentiation: limits and the derivative.",
  }),
];
