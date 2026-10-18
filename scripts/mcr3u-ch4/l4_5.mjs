// MCR3U 4.5 — Transformations of Exponential Functions: y = a·b^(k(x − d)) + c, key points, asymptote, domain/range,
// equations from a graph or from properties
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";

export const TITLE = "4.5 Transformations of Exponential Functions";
export const ID = "7d47cda1-b9bf-4ee5-b58b-b2f9ef5d1b86";
const S = String.raw;

export const blocks = () => [
  intro({
    icon: "🔀",
    title: "Transformations of Exponential Functions",
    overview: S`Everything from chapter 1 works for exponentials: \(y=a\cdot b^{k(x-d)}+c\) stretches, reflects and translates \(y=b^x\). The new feature is the horizontal asymptote, which moves with \(c\). In this lesson you will graph transformed exponentials from three key points, state the asymptote, domain and range, and write equations from a graph or a list of properties.`,
    goals: [
      "describe the roles of a, k, d and c for y = bˣ;",
      "map the key points (−1, 1/b), (0, 1), (1, b);",
      "state the asymptote, domain and range of the image;",
      "find intercepts of a transformed exponential;",
      "write an equation from a graph or from given properties.",
    ],
    curriculum: "B2.2 (roles of a, k, d, c in y = af(k(x − d)) + c for f(x) = aˣ), B2.3 (sketch and state domain and range), B2.5 (represent an exponential function with an equation, given its graph or properties)",
    prior: [
      [S`Under \(y=af(k(x-d))+c\), where does \((x,y)\) go?`, S`\(\left(\frac xk+d,\ ay+c\right)\).`],
      [S`What is the asymptote of \(y=2^x\)?`, S`\(y=0\).`],
      [S`Evaluate \(3^{-1}\).`, S`\(\frac13\).`],
    ],
    words: [
      ["Key points of bˣ", "\\((-1,\\frac1b)\\), \\((0,1)\\), \\((1,b)\\)", ""],
      ["Asymptote", "\\(y=c\\) after the transformation", ""],
      ["Range", "\\(y>c\\) if \\(a>0\\); \\(y<c\\) if \\(a<0\\)", ""],
    ],
  }),

  section("📌 What moves and what stays", S`
  ${table(["Parameter", "Effect", "Asymptote"], [["\\(a\\)", "vertical stretch; \\(a<0\\) reflects in the x-axis", "stays (if c = 0)"], ["\\(k\\)", "horizontal stretch \\(\\frac1{|k|}\\); \\(k<0\\) reflects in the y-axis", "stays"], ["\\(d\\)", "horizontal translation", "stays"], ["\\(c\\)", "vertical translation", "moves to \\(y=c\\)"]])}
  ${keyIdea(S`Map the key points with \((x,y)\to\left(\frac xk+d,\ ay+c\right)\) and draw the asymptote \(y=c\) first. The domain is always \(\mathbb R\); the range is \(y>c\) when \(a>0\) and \(y<c\) when \(a<0\).`)}`),

  section("📌 Explore", S`<p>Change the base and the four parameters. Watch which parameter moves the green asymptote.</p>`),

  widget("expTransform", { base: 2, show: ["a", "k", "d", "c"], init: { a: 1, k: 1, d: 3, c: 1 } }),

  section("📌 Watch out", watchOut([
    "Only c moves the asymptote.",
    "a < 0 puts the graph below the asymptote, so the range becomes y < c.",
    S`Factor \(k\): \(2^{2x-6}=2^{2(x-3)}\), so \(d=3\).`,
    S`A horizontal compression of \(b^x\) is also a change of base: \(3^{2x}=9^x\).`,
  ])),

  examples([
    ["Two translations", S`Graph \(y=2^{x-3}+1\) and state its properties.`,
      [S`Right 3, up 1: \((-1,\tfrac12)\to(2,1.5)\), \((0,1)\to(3,2)\), \((1,2)\to(4,3)\).`, S`Asymptote \(y=1\).`],
      S`domain \(\mathbb R\), range \(y>1\), y-intercept \(2^{-3}+1=1.125\)`,
      plane({ view: { xmin: -3, xmax: 7, ymin: -1, ymax: 8 }, curves: [{ f: (x) => 2 ** x, color: "gray" }, { f: (x) => 2 ** (x - 3) + 1, color: "violet" }], lines: [{ m: 0, b: 1, color: "green", dash: true }], points: [{ x: 2, y: 1.5 }, { x: 3, y: 2, label: "(3, 2)" }, { x: 4, y: 3, label: "(4, 3)" }], step: { x: 1, y: 1 } })],
    ["A reflection", S`Graph \(y=-3(2)^x+4\).`,
      [S`\((x,y)\to(x,\ -3y+4)\): \((-1,\tfrac12)\to(-1,2.5)\), \((0,1)\to(0,1)\), \((1,2)\to(1,-2)\).`, S`Asymptote \(y=4\); the graph lies below it.`],
      S`range \(y<4\); x-intercept where \(2^x=\tfrac43\)`,
      plane({ view: { xmin: -4, xmax: 3, ymin: -6, ymax: 6 }, curves: [{ f: (x) => -3 * 2 ** x + 4, color: "violet" }], lines: [{ m: 0, b: 4, color: "green", dash: true }], points: [{ x: -1, y: 2.5, label: "(−1, 2.5)" }, { x: 0, y: 1, label: "(0, 1)" }, { x: 1, y: -2, label: "(1, −2)" }], step: { x: 1, y: 1 } })],
    ["A compression is a new base", S`Describe \(y=3^{2x}\) two ways.`,
      [S`Horizontal compression by \(\tfrac12\): \((1,3)\to(0.5,3)\).`, S`\(3^{2x}=(3^2)^x=9^x\).`],
      S`compression by \(\tfrac12\), or the function \(9^x\)`],
    ["Decay with translations", S`State the asymptote and y-intercept of \(y=\left(\tfrac12\right)^{x+2}-5\).`,
      [S`Asymptote \(y=-5\).`, S`\(y(0)=\left(\tfrac12\right)^2-5=-4.75\).`],
      S`\(y=-5\); \(-4.75\)`],
    ["From properties", "Write two different exponential functions with y-intercept 5 and asymptote y = 3.",
      [S`\(y=ab^x+3\) with \(a+3=5\Rightarrow a=2\). Any base works.`],
      S`e.g. \(y=2(2)^x+3\) and \(y=2\left(\tfrac12\right)^x+3\)`],
  ]),

  practice([
    q("asymptote", S`What is the horizontal asymptote of \(y=5^x-7\)? Enter the y-value.`, num(-7),
      "c moves the asymptote.", [S`\(y=-7\).`], S`\(-7\)`),
    q("intercept", S`Find the y-intercept of \(y=2^{x+1}+3\).`, num(5),
      "Substitute x = 0.", [S`\(2+3\).`], S`\(5\)`),
    q("key point", S`\((1,2)\) on \(y=2^x\) maps to which x-coordinate on \(y=2^{x-4}+6\)?`, num(5),
      "Right 4.", [S`\((5,8)\).`], S`\(5\)`),
    q("range", S`The range of \(y=3(0.5)^x+2\) is \(y>m\). Find \(m\).`, num(2),
      "a > 0, asymptote y = 2.", [S`\(y>2\).`], S`\(2\)`),
    q("bases", S`Which equals \(4^{x/2}\)?`, choice([S`\(2^x\)`, S`\(2^{x/2}\)`, S`\(4^{2x}\)`, S`\(8^x\)`], 0),
      "4 = 2².", [S`\((2^2)^{x/2}=2^x\).`], S`\(2^x\)`),
  ]),

  ...hard([
    ["Finding a and c", S`\(y=a(2)^x+c\) passes through \((0,-1)\) and \((2,5)\). Find the equation and the asymptote.`,
      [S`\(a+c=-1\) and \(4a+c=5\). Subtract: \(3a=6\Rightarrow a=2\), \(c=-3\).`],
      S`\(y=2(2)^x-3\); asymptote \(y=-3\)`],
    ["All four parameters", S`Graph \(y=-2(3)^{-\frac12(x-4)}+6\), state its range and find its x-intercept.`,
      [S`\(a=-2\), \(k=-\tfrac12\), \(d=4\), \(c=6\): \((x,y)\to(-2x+4,\ -2y+6)\).`, S`\((0,1)\to(4,4)\), \((1,3)\to(2,0)\), \((-1,\tfrac13)\to(6,5.33)\). Asymptote \(y=6\), range \(y<6\).`, S`x-intercept: \(3^{-\frac12(x-4)}=3\Rightarrow-\tfrac12(x-4)=1\Rightarrow x=2\).`],
      S`range \(y<6\); x-intercept 2`,
      plane({ view: { xmin: -2, xmax: 10, ymin: -6, ymax: 8 }, curves: [{ f: (x) => -2 * 3 ** (-0.5 * (x - 4)) + 6, color: "violet" }], lines: [{ m: 0, b: 6, color: "green", dash: true }], points: [{ x: 4, y: 4, label: "(4, 4)" }, { x: 2, y: 0, label: "(2, 0)" }, { x: 6, y: 16 / 3 }], step: { x: 1, y: 1 } })],
  ], [
    q("hard", S`\(y=a(3)^x+c\) passes through \((0,7)\) and \((1,13)\). What is the asymptote? Enter its y-value.`, num(4),
      "Two equations: a + c = 7, 3a + c = 13.", [S`\(a=3\), \(c=4\).`], S`\(y=4\)`),
    q("hard", S`Find the x-intercept of \(y=2^{x-1}-8\).`, num(4),
      "8 = 2³.", [S`\(2^{x-1}=2^3\).`], S`\(4\)`),
    q("hard", S`Evaluate \(y=2\left(\tfrac12\right)^{x-3}+1\) at \(x=1\).`, num(9),
      "(½)⁻² = 4.", [S`\(2(4)+1\).`], S`\(9\)`),
  ]),

  wrapUp({
    qas: [
      ["Why doesn't d move the asymptote?", "A horizontal shift slides the curve along the asymptote; only a vertical shift moves it."],
      ["How can I find a from a graph?", "Read the asymptote (c), then use the y-intercept: a·b^(−kd) + c."],
      ["Are all exponential functions transformations of 2ˣ?", "Yes: any base b > 0 can be written as 2^(kx) for a suitable k."],
      ["What if a < 0?", "The graph flips below the asymptote; growth becomes a falling curve."],
      ["Do I always need three key points?", "Two points and the asymptote are enough for a sketch; three make it safer."],
    ],
    summary: [
      "y = a·b^(k(x − d)) + c: (x, y) → (x/k + d, ay + c).",
      "Asymptote y = c; range y > c (a > 0) or y < c (a < 0).",
      "Domain always ℝ.",
      "Two points (and the asymptote) determine the equation.",
    ],
    next: "4.6 uses exponential functions to model growth, decay and cooling.",
  }),
];
