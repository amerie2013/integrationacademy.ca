// MCR3U 4.5 — Transformations of Exponential Functions: y = a·b^(k(x − d)) + c, key points, asymptote, domain/range,
// equations from a graph or from properties
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { tv } from "../mcr3u-extables.mjs";

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
      [S`<b>Read the transformations.</b> Compare with \(y=2^{x-d}+c\). Here \(d=3\) gives a shift right 3, because the input \(x-3\) must equal the old \(x\). And \(c=1\) gives a shift up 1. So the mapping is \((x,y)\to(x+3,\ y+1)\).`,
        S`<b>Map key points of \(y=2^x\).</b> ${tv(["\\(y=2^x\\)", "\\((-1,\\frac12)\\)", "\\((0,1)\\)", "\\((1,2)\\)", "\\((2,4)\\)"], ["image", "\\((2,1.5)\\)", "\\((3,2)\\)", "\\((4,3)\\)", "\\((5,5)\\)"])}`,
        S`<b>Asymptote.</b> The old asymptote \(y=0\) moves up 1 to \(y=1\). A shift left or right does not move a horizontal line.`,
        S`<b>Domain, range, intercepts.</b> Domain \(\mathbb R\). The curve stays above its asymptote, so the range is \(y>1\). The y-intercept is \(2^{0-3}+1=\frac18+1=1.125\). There is no x-intercept, because \(y\) is always above 1.`,
        S`<b>Check.</b> Substitute \(x=4\) into the equation: \(2^{1}+1=3\), which matches the image \((4,3)\) ✓`],
      S`domain \(\mathbb R\), range \(y>1\), asymptote \(y=1\), y-intercept \(1.125\), increasing`,
      plane({ view: { xmin: -3, xmax: 7, ymin: -1, ymax: 8 }, curves: [{ f: (x) => 2 ** x, color: "gray" }, { f: (x) => 2 ** (x - 3) + 1, color: "violet" }], lines: [{ m: 0, b: 1, color: "green", dash: true }], points: [{ x: 2, y: 1.5 }, { x: 3, y: 2, label: "(3, 2)" }, { x: 4, y: 3, label: "(4, 3)" }, { x: 5, y: 5, label: "(5, 5)" }], step: { x: 1, y: 1 } }, "gray y = 2ˣ, violet the image, green the asymptote y = 1")],
    ["A reflection", S`Graph \(y=-3(2)^x+4\) and state its range and x-intercept.`,
      [S`<b>Read the transformations.</b> \(a=-3\) means a vertical stretch by 3 and a reflection in the x-axis. Then \(c=4\) means up 4. So \((x,y)\to(x,\ -3y+4)\). Stretch and reflect first, translate last.`,
        S`<b>Map key points.</b> ${tv(["\\(y=2^x\\)", "\\((-1,\\frac12)\\)", "\\((0,1)\\)", "\\((1,2)\\)", "\\((2,4)\\)"], ["image", "\\((-1,2.5)\\)", "\\((0,1)\\)", "\\((1,-2)\\)", "\\((2,-8)\\)"])}`,
        S`<b>Asymptote and range.</b> The asymptote \(y=0\) stays at 0 under the stretch and then moves to \(y=4\). The reflection puts the curve below it, so the range is \(y<4\).`,
        S`<b>x-intercept.</b> Set \(y=0\): \(3(2)^x=4\), so \(2^x=\frac43\). Since \(2^0=1\) and \(2^1=2\), the x-value is between 0 and 1. Trial gives \(x\approx0.415\), because \(2^{0.415}\approx1.333\).`,
        S`<b>Check.</b> At \(x=1\): \(-3(2)+4=-2\) ✓. The curve falls through the x-axis between \((0,1)\) and \((1,-2)\), which agrees with \(x\approx0.415\) ✓`],
      S`range \(y<4\); x-intercept \(x\approx0.415\)`,
      plane({ view: { xmin: -4, xmax: 3, ymin: -9, ymax: 6 }, curves: [{ f: (x) => -3 * 2 ** x + 4, color: "violet" }], lines: [{ m: 0, b: 4, color: "green", dash: true }], points: [{ x: -1, y: 2.5, label: "(−1, 2.5)" }, { x: 0, y: 1, label: "(0, 1)" }, { x: 1, y: -2, label: "(1, −2)" }, { x: 2, y: -8, label: "(2, −8)" }, { x: 0.415, y: 0, color: "amber" }], step: { x: 1, y: 1 } })],
    ["A compression is a new base", S`Describe \(y=3^{2x}\) two ways.`,
      [S`<b>As a transformation.</b> In \(y=3^{k x}\) with \(k=2\), the mapping is \((x,y)\to\left(\frac xk,\ y\right)\). This is a horizontal compression by a factor of \(\frac12\): the outputs of \(3^x\) are reached twice as fast.`,
        S`<b>As a new base.</b> A power of a power multiplies exponents, read backwards: \(3^{2x}=(3^2)^x=9^x\).`,
        S`<b>Table comparison.</b> Both formulas give the same row, so they are the same function. ${tv(["\\(x\\)", "\\(-1\\)", "\\(0\\)", "\\(0.5\\)", "\\(1\\)"], ["\\(3^{2x}\\)", "\\(\\frac19\\)", "\\(1\\)", "\\(3\\)", "\\(9\\)"], ["\\(9^x\\)", "\\(\\frac19\\)", "\\(1\\)", "\\(3\\)", "\\(9\\)"])}`,
        S`<b>Check the mapping.</b> \((1,3)\) on \(y=3^x\) maps to \(\left(\frac12,3\right)\). The table confirms \(3^{2(0.5)}=3\) ✓. The point \((0,1)\) does not move, since \(\frac02=0\).`],
      S`a horizontal compression by \(\frac12\) of \(y=3^x\), which is the same function as \(y=9^x\)`,
      plane({ view: { xmin: -2, xmax: 2, ymin: -1, ymax: 10 }, curves: [{ f: (x) => 3 ** x, color: "gray" }, { f: (x) => 9 ** x, color: "violet" }], points: [{ x: 1, y: 3, label: "(1, 3)" }, { x: 0.5, y: 3, label: "(0.5, 3)", color: "amber" }, { x: 1, y: 9, label: "(1, 9)" }, { x: 0, y: 1, label: "(0, 1)" }], step: { x: 1, y: 1 } }, "gray y = 3ˣ, violet y = 3²ˣ = 9ˣ")],
    ["Decay with translations", S`State the asymptote, y-intercept and range of \(y=\left(\tfrac12\right)^{x+2}-5\), and sketch it.`,
      [S`<b>Read the transformations.</b> \(x+2=x-(-2)\), so \(d=-2\) is a shift left 2, and \(c=-5\) is a shift down 5. The mapping is \((x,y)\to(x-2,\ y-5)\).`,
        S`<b>Asymptote and range.</b> Only the vertical shift moves a horizontal asymptote: \(y=0\to y=-5\). Nothing reflects the curve, so it stays above: the range is \(y>-5\).`,
        S`<b>y-intercept.</b> Substitute \(x=0\): \(\left(\tfrac12\right)^{2}-5=\frac14-5=-4.75\).`,
        S`<b>Key points.</b> ${tv(["\\(y=\\left(\\frac12\\right)^x\\)", "\\((-2,4)\\)", "\\((-1,2)\\)", "\\((0,1)\\)", "\\((1,\\frac12)\\)"], ["image", "\\((-4,-1)\\)", "\\((-3,-3)\\)", "\\((-2,-4)\\)", "\\((-1,-4.5)\\)"])}`,
        S`<b>Check.</b> At \(x=-3\): \(\left(\tfrac12\right)^{-1}-5=2-5=-3\) ✓. The base is below 1, so the curve falls toward \(y=-5\) on the right ✓`],
      S`asymptote \(y=-5\); y-intercept \(-4.75\); range \(y>-5\)`,
      plane({ view: { xmin: -6, xmax: 3, ymin: -7, ymax: 4 }, curves: [{ f: (x) => 0.5 ** (x + 2) - 5, color: "violet" }], lines: [{ m: 0, b: -5, color: "green", dash: true }], points: [{ x: -4, y: -1, label: "(−4, −1)" }, { x: -3, y: -3, label: "(−3, −3)" }, { x: -2, y: -4, label: "(−2, −4)" }, { x: 0, y: -4.75, label: "(0, −4.75)", color: "amber" }], step: { x: 1, y: 1 } })],
    ["From properties", "Write two different exponential functions with y-intercept 5 and asymptote y = 3.",
      [S`<b>Choose the form.</b> The form \(y=a\cdot b^x+c\) has asymptote \(y=c\), since \(a\cdot b^x\) can get as close to 0 as we like. So \(c=3\).`,
        S`<b>Use the y-intercept.</b> At \(x=0\): \(y=a\cdot b^0+3=a+3\). This must be 5, so \(a=2\).`,
        S`<b>Choose the base.</b> The two conditions do not involve \(b\), so any allowed base works. A base above 1 gives growth, and a base between 0 and 1 gives decay.`,
        S`<b>Two answers.</b> With \(b=2\): \(y=2(2)^x+3\). With \(b=\tfrac12\): \(y=2\left(\tfrac12\right)^x+3\).`,
        S`<b>Check.</b> For both, \(y(0)=2(1)+3=5\) ✓. Far to one side, the power goes to 0 and \(y\) goes to 3 ✓. The graph shows two different curves through \((0,5)\) with the same asymptote.`],
      S`for example \(y=2(2)^x+3\) and \(y=2\left(\tfrac12\right)^x+3\)`,
      plane({ view: { xmin: -4, xmax: 4, ymin: 0, ymax: 12 }, curves: [{ f: (x) => 2 * 2 ** x + 3, color: "violet" }, { f: (x) => 2 * 0.5 ** x + 3, color: "red" }], lines: [{ m: 0, b: 3, color: "green", dash: true }], points: [{ x: 0, y: 5, label: "(0, 5)", color: "amber" }], step: { x: 1, y: 1 } })],
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
