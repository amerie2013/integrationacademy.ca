// MCR3U Worksheet 4.4 — Exponential Functions and Their Properties (teacher edition)
import { F, gridT, pt } from "./figT.mjs";

const EXAMPLES = [
  { title: "Graphing y = 2ˣ", q: String.raw`Graph $y=2^x$ from a table and state its properties.`,
    fig: F({ view: { xmin: -4, xmax: 4, ymin: -1, ymax: 10 }, curves: [{ f: (x) => 2 ** x }], points: [pt(-2, 0.25), pt(-1, 0.5), pt(0, 1), pt(1, 2), pt(2, 4), pt(3, 8)] }),
    steps: [String.raw`$x=-2..3$: $\tfrac14,\tfrac12,1,2,4,8$.`], ans: String.raw`domain $\mathbb R$, range $y>0$, y-int 1, asymptote $y=0$, increasing` },
  { title: "Decay", q: String.raw`Describe $y=\left(\tfrac13\right)^x$.`, steps: [String.raw`$=3^{-x}$: decreasing, through $(0,1)$ and $(-1,3)$.`], ans: "reflection of 3ˣ in the y-axis" },
  { title: "y = a·bˣ", q: String.raw`State the y-intercept and behaviour of $y=4(1.5)^x$.`, steps: [String.raw`$y(0)=4$; $b=1.5>1$.`], ans: "y-intercept 4, growth" },
  { title: "Growth table", q: String.raw`$x$: $0,1,2,3$; $y$: $6,12,24,48$. Find the equation.`, steps: ["Ratio 2, a = 6."], ans: String.raw`$y=6(2)^x$` },
  { title: "Decay table", q: String.raw`$x$: $0,1,2,3$; $y$: $81,27,9,3$. Find the equation.`, steps: [String.raw`Ratio $\tfrac13$.`], ans: String.raw`$y=81\left(\tfrac13\right)^x$` },
  { title: "Classifying", q: String.raw`Classify $A: 2,5,8,11$; $B: 2,3,6,11$; $C: 2,6,18,54$.`, steps: ["A constant difference; B constant second difference; C constant ratio."], ans: "linear, quadratic, exponential" },
  { title: "Two points with x = 0", q: "Find y = a·bˣ through (0, 5) and (1, 15).", steps: [String.raw`$a=5$; $5b=15$.`], ans: String.raw`$y=5(3)^x$` },
  { title: "Two points", q: "Find y = a·bˣ through (1, 12) and (3, 3).", steps: [String.raw`Divide: $b^2=\tfrac14\Rightarrow b=\tfrac12$; $a=24$.`], ans: String.raw`$y=24\left(\tfrac12\right)^x$` },
  { title: "Exponential vs quadratic", q: String.raw`Where do $y=2^x$ and $y=x^2$ meet for $x>0$?`,
    fig: F({ view: { xmin: -2, xmax: 5, ymin: -1, ymax: 20 }, curves: [{ f: (x) => 2 ** x }, { f: (x) => x * x, color: "amber" }], points: [pt(2, 4), pt(4, 16)], step: { x: 1, y: 2 } }),
    steps: [String.raw`Test: $2^2=2^2$, $2^4=4^2$.`], ans: String.raw`$x=2$ and $x=4$; after 4 the exponential stays ahead` },
];

const PROBLEMS = [
  { level: 1, q: String.raw`State the y-intercept of $y=9(0.5)^x$.`, recap: "y-intercept.", ans: "9" },
  { level: 1, q: String.raw`Is $y=0.75^x$ increasing or decreasing?`, recap: "Growth or decay.", ans: "decreasing" },
  { level: 1, q: String.raw`An exponential table has $y=3,12,48$. Find the next value.`, recap: "Ratio.", ans: "192" },
  { level: 2, q: String.raw`State all the properties of $y=5(2)^x$ and sketch it.`, recap: "Properties.", ans: String.raw`domain $\mathbb R$, range $y>0$, y-int 5, asymptote $y=0$, increasing`, fig: gridT({ xmin: -4, xmax: 3, ymin: -1, ymax: 20 }, { x: 1, y: 2 }) },
  { level: 2, q: String.raw`$x$: $0,1,2,3$; $y$: $2,10,50,250$. Find the equation.`, recap: "Table.", ans: String.raw`$y=2(5)^x$` },
  { level: 2, q: String.raw`Classify $1,4,9,16$; $3,6,12,24$; $3,6,9,12$ (x = 1, 2, 3, 4).`, recap: "Classify.", ans: "quadratic, exponential, linear" },
  { level: 2, q: "Find y = a·bˣ from the graph through (0, 3) and (2, 27).", recap: "From a graph.", ans: String.raw`$y=3(3)^x$`,
    fig: F({ view: { xmin: -2, xmax: 3, ymin: -2, ymax: 30 }, curves: [{ f: (x) => 3 * 3 ** x }], points: [pt(0, 3), pt(2, 27)], step: { x: 1, y: 5 } }) },
  { level: 2, q: "Find y = a·bˣ through (1, 8) and (2, 4).", recap: "Two points.", ans: String.raw`$y=16\left(\tfrac12\right)^x$` },
  { level: 3, space: 4, q: "Find y = a·bˣ through (2, 18) and (4, 162).", recap: "Two points.", ans: String.raw`$b^2=9$: $y=2(3)^x$` },
  { level: 3, space: 4, q: String.raw`A table has $x=0,3,6$ and $y=5,40,320$. Find the equation.`, recap: "Unequal steps.", ans: String.raw`$b^3=8$: $y=5(2)^x$` },
  { level: 3, space: 4, q: String.raw`Write $\left(\tfrac19\right)^x$ as a power of 3 and describe its graph.`, recap: "Base 3.", ans: String.raw`$3^{-2x}$: decreasing through (0, 1)` },
  { level: 3, space: 4, q: String.raw`Explain why the base of an exponential function must be positive and not equal to 1.`, recap: "Restrictions on b.", ans: String.raw`$b<0$: $b^{1/2}$ not real; $b=1$: a horizontal line` },
  { level: 3, space: 4, q: String.raw`Find the smallest whole number $x\ge1$ for which $3^x>10x^2$.`, recap: "Compare growth.", ans: String.raw`$x=6$ ($3^5=243<250$, $3^6=729>360$)` },
];

export const WS = {
  code: "4.4",
  title: "Exponential Functions and Their Properties",
  bigideas: String.raw`$y=a\cdot b^x$ ($b>0$, $b\ne1$) multiplies by $b$ for each unit step in $x$. Domain $\mathbb R$, range $y>0$ (for $a>0$), y-intercept $a$, asymptote $y=0$; growth if $b>1$, decay if $0<b<1$. Exponential tables have a constant ratio; linear a constant difference; quadratic a constant second difference.`,
  goals: ["Graph and describe y = a·bˣ.", "Recognise exponential data.", "Compare with linear and quadratic.", "Find equations from points."],
  curriculum: "B1.1, B1.4, B2.1, B2.4",
  vocab: [["Growth / decay factor", "$b>1$ / $0<b<1$"], ["Asymptote", "$y=0$"], ["Constant ratio", "exponential test"]],
  hook: "Offer a choice: 1 million dollars now, or 1 cent doubled every day for 30 days. Graph both.",
  concepts: [
    ["1. Growth and decay", String.raw`${F({ view: { xmin: -4, xmax: 4, ymin: -1, ymax: 10 }, curves: [{ f: (x) => 3 ** x }, { f: (x) => 0.5 ** x, color: "red" }], points: [pt(0, 1)] }, 5, "3ˣ (violet) and (½)ˣ (red)")}`],
    ["2. Tests", "Equal x-steps: difference constant → linear; second difference → quadratic; ratio → exponential."],
    ["3. Two points", String.raw`Divide the equations to eliminate $a$.`],
  ],
  tips: ["x² is not exponential.", "Ratios need equal x-steps.", "Range is y > 0, not ≥.", "b must be positive.", "a is the starting value."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
