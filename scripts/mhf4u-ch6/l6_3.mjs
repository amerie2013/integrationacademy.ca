// MHF4U 6.3 — Transformations of Logarithmic Functions (rebuilt from old 4.2): key features of y = log_b x,
// the four parameters of y = a log_b(k(x − d)) + c, the point mapping, and equations from graphs.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";

export const TITLE = "6.3 Transformations of Logarithmic Functions";
export const ID = "afa58b5f-6c0e-4716-8075-e6fd2d575864";

const S = String.raw;
const lg = (b) => (x) => Math.log(x) / Math.log(b);
const st = { x: 1, y: 1 };
const va = (x) => ({ x, color: "red", dash: true });
export const blocks = () => [
  intro({
    icon: "📈",
    title: "Transformations of Logarithmic Functions",
    overview: S`The graph of \(y=\log_b x\) has a vertical asymptote at \(x=0\), passes through \((1,0)\) and \((b,1)\), and rises slowly forever when \(b>1\). Every other logarithmic graph is this one stretched, reflected and shifted: \(y=a\log_b\big(k(x-d)\big)+c\). The same rules you used for every other function family apply, and the asymptote moves with the horizontal shift.`,
    goals: [
      "state the key features of \\(y=\\log_b x\\);",
      "describe the effect of \\(a\\), \\(k\\), \\(d\\) and \\(c\\);",
      "map key points with \\((x,y)\\to\\left(\\frac xk+d,\\ ay+c\\right)\\);",
      "state the domain, range and asymptote of a transformed logarithm;",
      "write the equation of a logarithmic graph.",
    ],
    curriculum: "A2.1 (graph logarithmic functions and identify key features), A2.3 (transformations of logarithmic functions)",
    prior: [
      [S`Evaluate \(\log_2 8\) and \(\log_2\frac12\).`, S`\(3\) and \(-1\).`],
      [S`What does \(y=f(x-3)+2\) do to \(y=f(x)\)?`, S`Right 3, up 2.`],
      [S`What does \(y=f(2x)\) do?`, S`Horizontal compression by \(\frac12\).`],
    ],
    words: [
      ["Vertical asymptote", "a vertical line the graph approaches but never reaches", "\\(x=0\\) for \\(y=\\log x\\)"],
      ["Domain", "the allowed inputs; the argument must be positive", "\\(x>0\\)"],
      ["Key points", "easy points to transform, e.g. \\((\\frac1b,-1),(1,0),(b,1)\\)", "\\((\\frac12,-1),(1,0),(2,1)\\)"],
      ["Mapping rule", "\\((x,y)\\to(\\frac xk+d,\\ ay+c)\\)", "where each point moves"],
    ],
  }),

  section("📌 The parent graph y = log_b x", S`
  ${table(["Feature", "\\(y=\\log_b x\\), \\(b>1\\)"], [["domain", "\\(x>0\\)"], ["range", "all real numbers"], ["x-intercept", "\\(1\\)"], ["vertical asymptote", "\\(x=0\\)"], ["key points", "\\(\\left(\\frac1b,-1\\right),\\ (1,0),\\ (b,1)\\)"], ["behaviour", "increasing, slower and slower"]])}
  ${plane({ view: { xmin: -1, xmax: 11, ymin: -4, ymax: 4 }, vlines: [va(0)], curves: [{ f: lg(2), a: 0.01, color: "violet" }, { f: Math.log10, a: 0.01, color: "blue" }], points: [{ x: 2, y: 1, label: "(2, 1)", color: "violet" }, { x: 10, y: 1, label: "(10, 1)", color: "blue" }, { x: 1, y: 0, label: "(1, 0)", color: "amber" }], step: st }, "y = log₂ x (violet) and y = log x (blue): both pass through (1, 0) with asymptote x = 0.")}`),

  section("📌 The four parameters", S`
  ${table(["In \\(y=a\\log_b\\big(k(x-d)\\big)+c\\)", "Effect", "Changes"], [
    ["\\(a\\)", "vertical stretch by \\(|a|\\); reflect in the x-axis if \\(a<0\\)", "y-coordinates \\(\\times a\\)"],
    ["\\(k\\)", "horizontal stretch by \\(\\frac1{|k|}\\); reflect in the y-axis if \\(k<0\\)", "x-coordinates \\(\\div k\\)"],
    ["\\(d\\)", "shift right \\(d\\) (left if \\(d<0\\))", "asymptote becomes \\(x=d\\)"],
    ["\\(c\\)", "shift up \\(c\\) (down if \\(c<0\\))", "y-coordinates \\(+c\\)"],
  ])}
  ${keyIdea(S`Mapping rule: \[(x,\,y)\ \longrightarrow\ \left(\frac xk+d,\ ay+c\right)\] Domain: the argument must be positive, \(k(x-d)>0\). For \(k>0\) that means \(x>d\).`)}`),

  widget("ibLogGraph", { init: [2, 3, -1] }),

  section("📌 Watch out", watchOut([
    "Factor k out first: log(2x − 6) = log(2(x − 3)), so d = 3, not 6.",
    "The vertical asymptote moves only with d (x = d); c moves the graph up but not the asymptote.",
    "A negative k flips the graph to the left of the asymptote: the domain becomes x < d.",
    "Apply stretches and reflections before translations when mapping points.",
    "Check the domain by testing the argument at one point: it must be positive.",
  ])),

  examples([
    ["Key features of a parent graph", S`State the domain, range, intercept, asymptote and three key points of \(y=\log_3 x\).`,
      [S`<b>Rule.</b> \(y=\log_bx\) is the reflection of \(y=b^x\) in \(y=x\), so their features swap.`,
        S`<b>From \(y=3^x\):</b> domain \(\mathbb R\to\) range; range \(y>0\to\) domain \(x>0\); asymptote \(y=0\to x=0\); y-intercept \(1\to\) x-intercept \(1\).`,
        S`<b>Key points:</b> \(\log_3\frac13=-1\), \(\log_31=0\), \(\log_33=1\): \(\left(\frac13,-1\right),(1,0),(3,1)\). Add \((9,2)\) for shape.`,
        S`<b>Check:</b> \(3^2=9\), so \((9,2)\) is on the curve ✓`],
      S`domain \(x>0\), range \(\mathbb R\), x-int \(1\), VA \(x=0\); \(\left(\frac13,-1\right),(1,0),(3,1)\)`,
      plane({ view: { xmin: -1, xmax: 10, ymin: -3, ymax: 3 }, vlines: [va(0)], curves: [{ f: lg(3), a: 0.01, color: "violet" }], points: [{ x: 1 / 3, y: -1, label: "(⅓, −1)", color: "blue" }, { x: 3, y: 1, label: "(3, 1)", color: "blue" }, { x: 9, y: 2, label: "(9, 2)", color: "blue" }], step: st })],
    ["Two translations", S`Graph \(y=\log_2(x-3)+1\). State the asymptote, domain and the image of the key points.`,
      [S`<b>Match:</b> \(a=1,\ k=1,\ d=3,\ c=1\): right \(3\), up \(1\).`,
        S`<b>Mapping</b> \((x,y)\to(x+3,\ y+1)\): \(\left(\frac12,-1\right)\to\left(3.5,0\right)\), \((1,0)\to(4,1)\), \((2,1)\to(5,2)\), \((4,2)\to(7,3)\).`,
        S`<b>Asymptote:</b> \(x=0\to x=3\). <b>Domain:</b> \(x-3>0\), so \(x>3\). Range: all reals.`,
        S`<b>Check one point:</b> \(x=7\): \(\log_24+1=2+1=3\) ✓`],
      S`VA \(x=3\); domain \(x>3\); \((3.5,0),(4,1),(5,2),(7,3)\)`,
      plane({ view: { xmin: -1, xmax: 10, ymin: -3, ymax: 4 }, vlines: [va(3)], curves: [{ f: lg(2), a: 0.01, color: "gray" }, { f: (x) => lg(2)(x - 3) + 1, a: 3.005, color: "violet" }], points: [{ x: 4, y: 1, label: "(4, 1)", color: "blue" }, { x: 7, y: 3, label: "(7, 3)", color: "blue" }], step: st })],
    ["A reflection and a stretch", S`Describe and graph \(y=-2\log x\).`,
      [S`<b>Match:</b> \(a=-2\): vertical stretch by \(2\) and reflection in the x-axis; \(k=1,\ d=0,\ c=0\).`,
        S`<b>Mapping</b> \((x,y)\to(x,-2y)\): \((0.1,-1)\to(0.1,2)\), \((1,0)\to(1,0)\), \((10,1)\to(10,-2)\).`,
        S`<b>Features:</b> asymptote still \(x=0\); domain \(x>0\); the graph now <i>decreases</i>.`,
        S`<b>Check:</b> \(x=100\): \(-2\log100=-2(2)=-4\), so it keeps falling ✓`],
      S`stretch 2, reflect in x-axis; \((0.1,2),(1,0),(10,-2)\)`,
      plane({ view: { xmin: -1, xmax: 12, ymin: -4, ymax: 4 }, vlines: [va(0)], curves: [{ f: Math.log10, a: 0.01, color: "gray" }, { f: (x) => -2 * Math.log10(x), a: 0.01, color: "violet" }], points: [{ x: 10, y: -2, label: "(10, −2)", color: "blue" }, { x: 0.1, y: 2, label: "(0.1, 2)", color: "blue" }], step: st })],
    ["Factor before reading d", S`State the transformations, asymptote and domain of \(y=\log_2(4x-8)\).`,
      [S`<b>Rule.</b> Read \(d\) only after factoring \(k\): \(4x-8=4(x-2)\).`,
        S`<b>Match:</b> \(k=4\): horizontal compression by \(\frac14\); \(d=2\): right \(2\).`,
        S`<b>Asymptote</b> \(x=2\); <b>domain</b> \(4(x-2)>0\Rightarrow x>2\).`,
        S`<b>Mapping</b> \((x,y)\to\left(\frac x4+2,\ y\right)\): \((1,0)\to(2.25,0)\), \((4,2)\to(3,2)\).`,
        S`<b>Check:</b> \(x=3\): \(\log_2(12-8)=\log_24=2\) ✓`],
      S`compress \(\frac14\), right 2; VA \(x=2\); domain \(x>2\)`,
      plane({ view: { xmin: -1, xmax: 8, ymin: -3, ymax: 5 }, vlines: [va(2)], curves: [{ f: (x) => lg(2)(4 * x - 8), a: 2.002, color: "violet" }], points: [{ x: 2.25, y: 0, label: "(2.25, 0)", color: "blue" }, { x: 3, y: 2, label: "(3, 2)", color: "blue" }], step: st })],
    ["An equation from a graph", S`A graph of the form \(y=\log_2(x-d)+c\) has asymptote \(x=-1\) and passes through \((0,-3)\) and \((3,-1)\). Find its equation.`,
      [S`<b>Asymptote gives \(d\):</b> \(x=d=-1\), so \(y=\log_2(x+1)+c\).`,
        S`<b>Use a point:</b> \((0,-3)\): \(-3=\log_2(1)+c=0+c\), so \(c=-3\).`,
        S`<b>Equation:</b> \(y=\log_2(x+1)-3\).`,
        S`<b>Check the other point:</b> \(x=3\): \(\log_24-3=2-3=-1\) ✓`],
      S`\(y=\log_2(x+1)-3\)`,
      plane({ view: { xmin: -3, xmax: 8, ymin: -6, ymax: 2 }, vlines: [va(-1)], curves: [{ f: (x) => lg(2)(x + 1) - 3, a: -0.995, color: "violet" }], points: [{ x: 0, y: -3, label: "(0, −3)", color: "blue" }, { x: 3, y: -1, label: "(3, −1)", color: "blue" }], step: st })],
  ]),

  practice([
    q("asymptote", S`What is the vertical asymptote of \(y=\log(x+5)-2\)? Enter \(c\) in \(x=c\).`, num(-5), "The asymptote moves with d.", [S`\(x+5=x-(-5)\): \(d=-5\).`], S`\(-5\)`),
    q("domain", S`What is the domain of \(y=\log_3(2x-6)\)?`, choice(["x > 3", "x > 6", "x > 0", "x < 3"], 0), "The argument must be positive.", [S`\(2x-6>0\Rightarrow x>3\).`], "x > 3"),
    q("image point", S`The point \((8,3)\) is on \(y=\log_2x\). Find the y-coordinate of its image on \(y=3\log_2x-4\).`, num(5), "y → 3y − 4.", [S`\(3(3)-4=5\).`], S`\(5\)`),
    q("x-intercept", S`Find the x-intercept of \(y=\log_2(x-1)\).`, num(2), "log₂ of what is 0?", [S`\(x-1=1\Rightarrow x=2\).`], S`\(2\)`),
    q("find c", S`\(y=\log x+c\) passes through \((100,5)\). Find \(c\).`, num(3), "log 100 = 2.", [S`\(5=2+c\Rightarrow c=3\).`], S`\(3\)`),
  ]),

  ...hard([
    ["A reflection in the y-axis", S`For \(y=3\log_2(4-x)+1\): (a) write it in the form \(a\log_2\big(k(x-d)\big)+c\); (b) state the domain and asymptote; (c) find the image of \((2,1)\) and the x-intercept.`,
      [S`<b>(a)</b> \(4-x=-(x-4)\): \(a=3,\ k=-1,\ d=4,\ c=1\).`,
        S`<b>(b)</b> \(-(x-4)>0\Rightarrow x<4\); asymptote \(x=4\). The graph lies to the left of it.`,
        S`<b>(c)</b> mapping \((x,y)\to\left(\frac x{-1}+4,\ 3y+1\right)\): \((2,1)\to(2,4)\).`,
        S`<b>x-intercept:</b> \(3\log_2(4-x)+1=0\Rightarrow\log_2(4-x)=-\frac13\Rightarrow4-x=2^{-1/3}\approx0.794\Rightarrow x\approx3.206\).`,
        S`<b>Check (c):</b> \(x=2\): \(3\log_22+1=4\) ✓`],
      S`domain \(x<4\), VA \(x=4\); \((2,4)\); x-intercept \(\approx3.21\)`,
      plane({ view: { xmin: -6, xmax: 6, ymin: -6, ymax: 8 }, vlines: [va(4)], curves: [{ f: (x) => 3 * lg(2)(4 - x) + 1, b: 3.995, color: "violet" }], points: [{ x: 2, y: 4, label: "(2, 4)", color: "blue" }], step: st })],
    ["Find a and c from two points", S`\(y=a\log x+c\) passes through \((1,5)\) and \((100,9)\). Find \(a\) and \(c\), then find \(y\) at \(x=1000\).`,
      [S`<b>Point \((1,5)\):</b> \(\log1=0\), so \(5=c\).`,
        S`<b>Point \((100,9)\):</b> \(9=a\log100+5=2a+5\), so \(a=2\).`,
        S`<b>Equation:</b> \(y=2\log x+5\). At \(x=1000\): \(2(3)+5=11\).`,
        S`<b>Check:</b> each factor of \(10\) in \(x\) adds \(a=2\) to \(y\): \(5\to7\to9\to11\) ✓`],
      S`\(a=2\), \(c=5\); \(y=11\)`],
  ], [
    q("hard", S`Find the x-intercept of \(y=2\log_3(x+4)-4\).`, num(5), "Set y = 0.", [S`\(\log_3(x+4)=2\Rightarrow x+4=9\).`], S`\(5\)`),
    q("hard", S`For \(y=-\log_2(8-2x)\), the asymptote is \(x=c\). Find \(c\).`, num(4), "8 − 2x = −2(x − 4).", [S`\(d=4\).`], S`\(4\)`),
    q("hard", S`The point \((4,2)\) on \(y=\log_2x\) maps to which x-coordinate on \(y=\log_2(2(x+1))\)?`, num(1), "x → x/k + d.", [S`\(\frac42-1=1\).`], S`\(1\)`),
  ]),

  wrapUp({
    qas: [
      ["Where is the asymptote of y = a log_b(k(x − d)) + c?", "At x = d; only the horizontal shift moves it."],
      ["Why must I factor k first?", "d is read from (x − d); log(2x − 6) = log(2(x − 3)) has d = 3."],
      ["How do I find the domain?", "Set the argument greater than 0 and solve."],
      ["What does a negative a do?", "Reflects the graph in the x-axis: it decreases instead of increasing."],
      ["Which points should I map?", "(1/b, −1), (1, 0), (b, 1) and one more, like (b², 2)."],
    ],
    summary: [
      "y = log_b x: domain x > 0, range ℝ, VA x = 0, through (1, 0) and (b, 1).",
      "y = a log_b(k(x − d)) + c: stretch a, compress 1/k, shift d and c.",
      "Mapping: (x, y) → (x/k + d, ay + c); VA x = d.",
      "Find equations from the asymptote first, then points.",
    ],
    next: "6.4 proves the power law of logarithms and uses it with any base.",
  }),
];
