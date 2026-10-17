// MPM2D Worksheet 4.7 — Comparing y = x² and y = 2ˣ (teacher edition)
import { F, gridT } from "./figT.mjs";

const both = (view, pts = [], step) => F({ view, curves: [{ f: (x) => x * x, color: "blue" }, { f: (x) => 2 ** x, color: "red" }], points: pts, ...(step ? { step } : {}) });

const EXAMPLES = [
  { title: "Two tables", q: String.raw`Make tables of $y=x^2$ and $y=2^x$ for $x=-2,\ldots,6$ and compare.`,
    fig: both({ xmin: -3, xmax: 6.5, ymin: -2, ymax: 40 }, [{ x: 2, y: 4, label: "(2, 4)", color: "green" }, { x: 4, y: 16, label: "(4, 16)", color: "green" }], { x: 1, y: 5 }),
    steps: [String.raw`$x^2$: $4,1,0,1,4,9,16,25,36$. $2^x$: $\frac14,\frac12,1,2,4,8,16,32,64$.`, String.raw`Equal at $x=2$ and $x=4$; after that $2^x$ is larger.`], ans: "2ˣ overtakes x² for x > 4" },
  { title: "Differences and ratios", q: String.raw`Find the first differences and the ratios of consecutive values of $y=2^x$ for $x=0,\ldots,5$.`,
    steps: [String.raw`Values $1,2,4,8,16,32$; first differences $1,2,4,8,16$ — the same pattern, never constant.`, String.raw`Ratios: all $2$.`], ans: "constant ratio 2 (exponential)" },
  { title: "Evaluating", q: String.raw`Evaluate $4^0$, $2^{-4}$, $5^{-1}$ and $(-3)^0$.`,
    steps: [String.raw`$4^0=1$; $2^{-4}=\frac{1}{16}$; $5^{-1}=\frac15$; $(-3)^0=1$.`], ans: String.raw`$1$, $\frac1{16}$, $\frac15$, $1$` },
  { title: "A pattern for base 3", q: String.raw`Continue the pattern $3^3=27$, $3^2=9$, $3^1=3$ down to $3^{-2}$.`,
    fig: F({ view: { xmin: -3, xmax: 3.5, ymin: -1, ymax: 28 }, curves: [{ f: (x) => 3 ** x, color: "red" }], points: [[-2, 1 / 9], [-1, 1 / 3], [0, 1], [1, 3], [2, 9], [3, 27]].map(([x, y]) => ({ x, y, color: "blue" })), step: { x: 1, y: 3 } }),
    steps: [String.raw`Divide by 3 each step: $3^0=1$, $3^{-1}=\frac13$, $3^{-2}=\frac19$.`], ans: String.raw`$1$, $\frac13$, $\frac19$` },
  { title: "Why b⁰ = 1", q: String.raw`Use $\frac{5^2}{5^2}$ to show that $5^0=1$.`,
    steps: [String.raw`Exponent law: $5^{2-2}=5^0$.`, String.raw`Arithmetic: $\frac{25}{25}=1$.`], ans: "$5^0=1$" },
  { title: "Exponent laws", q: String.raw`Evaluate $2^5\times2^{-8}$ and $(3^2)^{-1}$.`,
    steps: [String.raw`$2^{5-8}=2^{-3}=\frac18$.`, String.raw`$3^{-2}=\frac19$.`], ans: String.raw`$\frac18$ and $\frac19$` },
  { title: "Powers of ten", q: String.raw`Write $0.004$ using a power of 10 with a negative exponent.`,
    steps: [String.raw`$0.004=\frac{4}{1000}=4\times10^{-3}$.`], ans: String.raw`$4\times10^{-3}$` },
  { title: "Which model?", q: String.raw`Which data set is quadratic and which is exponential? A: $3,6,12,24$. B: $1,4,9,16$.`,
    steps: [String.raw`A: ratio 2 each time — exponential.`, String.raw`B: first differences $3,5,7$, second differences $2$ — quadratic.`], ans: "A exponential, B quadratic" },
  { title: "A bouncing ball", q: String.raw`A ball dropped from $16$ m bounces to half its height each time: $h=16\left(\tfrac12\right)^n$. Find its height after 3 bounces.`,
    fig: F({ view: { xmin: -0.5, xmax: 6, ymin: 0, ymax: 18 }, curves: [{ f: (n) => 16 * 0.5 ** n, color: "red" }], points: [0, 1, 2, 3, 4, 5].map((n) => ({ x: n, y: 16 * 0.5 ** n, color: "blue" })), xlabel: "n", ylabel: "h", step: { x: 1, y: 2 } }),
    steps: [String.raw`$16\times\frac18=2$ m.`, "The height is multiplied by ½ each bounce: exponential, never reaching 0."], ans: "2 m" },
];

const PROBLEMS = [
  { level: 1, q: String.raw`Evaluate $9^0$.`, recap: "9⁰.", ans: "$1$" },
  { level: 1, q: String.raw`Evaluate $3^{-2}$.`, recap: "3⁻².", ans: String.raw`$\frac19$` },
  { level: 1, q: String.raw`Complete a table of values of $y=2^x$ for $x=-2,\ldots,3$.`, recap: "Table of 2ˣ.", ans: String.raw`$\frac14,\frac12,1,2,4,8$` },
  { level: 2, q: String.raw`Evaluate $4^{-3}$.`, recap: "4⁻³.", ans: String.raw`$\frac{1}{64}$` },
  { level: 2, q: String.raw`Evaluate $\left(\frac15\right)^{-2}$.`, recap: "(1/5)⁻².", ans: "$25$" },
  { level: 2, q: String.raw`Evaluate $6^3\times6^{-3}$.`, recap: "6³ × 6⁻³.", ans: "$1$" },
  { level: 2, q: String.raw`Compare $x^2$ and $3^x$ for $x=0,1,2,3,4$. Which is larger?`, recap: "x² vs 3ˣ.", ans: String.raw`$3^x$ is larger at every one: $1>0$, $3>1$, $9>4$, $27>9$, $81>16$` },
  { level: 2, q: String.raw`Is the data set $2,6,18,54$ quadratic or exponential? Explain.`, recap: "Classify data.", ans: "exponential: constant ratio 3" },
  { level: 3, space: 5, q: String.raw`A bacteria count is $N=200(2)^t$ ($t$ in hours). Find $N$ three hours before the count started, and when $N=6400$.`, recap: "Bacteria.", ans: String.raw`$N(-3)=25$; $2^t=32$, $t=5$ h` },
  { level: 3, space: 5, q: String.raw`Explain, using a pattern, why $2^{-3}$ is not $-8$.`, recap: "Why not −8.", ans: String.raw`$2^3=8$, $2^2=4$, … each step divides by 2: $2^0=1$, $2^{-3}=\frac18$` },
  { level: 3, space: 5, q: String.raw`Evaluate $\dfrac{2^{-2}\times2^5}{2^4}$.`, recap: "Exponent laws.", ans: String.raw`$2^{-1}=\frac12$` },
  { level: 3, space: 5, q: String.raw`Graph $y=x^2$ and $y=2^x$ for $0\le x\le5$ on the grid and find where they are equal.`, recap: "Graph both.", ans: "equal at x = 2 and x = 4", fig: gridT({ xmin: 0, xmax: 5.5, ymin: 0, ymax: 34 }, { x: 1, y: 2 }) },
  { level: 3, space: 5, q: String.raw`Town A has 2000 people and grows by 500 per year. Town B has 2000 people and doubles every 5 years. Which is larger after 20 years? Which type of growth is each?`, recap: "Two towns.", ans: String.raw`A: $12\,000$ (linear); B: $2000\times2^4=32\,000$ (exponential)` },
];

export const WS = {
  code: "4.7",
  title: "Comparing y = x² and y = 2ˣ",
  bigideas: String.raw`$y=x^2$ is a parabola: symmetric, with constant second differences. $y=2^x$ is exponential: it has a constant ratio, passes through $(0,1)$, is always positive, and eventually grows faster than any quadratic. Extending the doubling pattern backwards shows $b^0=1$ and $b^{-n}=\frac{1}{b^n}$ for $b\ne0$; the exponent laws agree.`,
  goals: ["Compare tables and graphs of x² and 2ˣ.", "Use differences and ratios.", "Explain zero and negative exponents.", "Choose a model for data."],
  curriculum: "QR1",
  vocab: [["Exponential relation", "variable in the exponent"], ["Ratio", "next value ÷ previous"], ["Negative exponent", "$b^{-n}=\\frac1{b^n}$"]],
  hook: String.raw`Offer students a choice: $x^2$ dollars on day $x$, or $2^x$ cents on day $x$, for 30 days. Which pays more on day 30? ($900$ dollars vs about $10.7$ million dollars.)`,
  concepts: [
    ["1. Two shapes", String.raw`Parabola vs exponential curve; they cross at $x=2$ and $x=4$ (and once for $x<0$).
${both({ xmin: -3, xmax: 6, ymin: -2, ymax: 36 }, [], { x: 1, y: 4 })}`],
    ["2. Zero and negative exponents", String.raw`Each step down in the exponent divides by the base: $b^0=1$, $b^{-n}=\frac1{b^n}$.`],
    ["3. Recognizing data", String.raw`Constant second differences: quadratic. Constant ratio: exponential.`],
  ],
  tips: ["2⁻³ = 1/8, not −8.", "Any non-zero base⁰ = 1.", "Use laws before evaluating.", "Check ratios for exponential data.", "Exponential beats quadratic in the long run."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
