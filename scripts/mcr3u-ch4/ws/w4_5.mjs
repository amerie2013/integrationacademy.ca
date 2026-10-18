// MCR3U Worksheet 4.5 — Transformations of Exponential Functions (teacher edition)
import { F, gridT, pt } from "./figT.mjs";

const asym = (c) => ({ m: 0, b: c, color: "green", dash: true });

const EXAMPLES = [
  { title: "Translations", q: String.raw`Graph $y=2^{x+2}-3$.`,
    fig: F({ view: { xmin: -6, xmax: 3, ymin: -4, ymax: 6 }, curves: [{ f: (x) => 2 ** (x + 2) - 3 }], lines: [asym(-3)], points: [pt(-3, -2.5), pt(-2, -2), pt(-1, -1), pt(0, 1)] }),
    steps: [String.raw`Left 2, down 3: $(0,1)\to(-2,-2)$, $(1,2)\to(-1,-1)$, $(2,4)\to(0,1)$.`], ans: String.raw`asymptote $y=-3$, range $y>-3$` },
  { title: "Vertical stretch", q: String.raw`Describe $y=4(2)^x$.`, steps: [String.raw`$(x,y)\to(x,4y)$; also $4\cdot2^x=2^{x+2}$.`], ans: "stretch by 4 (= 2 units left)" },
  { title: "Reflection", q: String.raw`Graph $y=-(3)^x+2$.`, steps: [String.raw`$(0,1)\to(0,1)$, $(1,3)\to(1,-1)$; asymptote $y=2$.`], ans: String.raw`range $y<2$` },
  { title: "Reflection in the y-axis", q: String.raw`Write $y=2^{-x}$ with a different base.`, steps: [String.raw`$2^{-x}=(2^{-1})^x$.`], ans: String.raw`$\left(\tfrac12\right)^x$` },
  { title: "Horizontal stretch", q: String.raw`Describe $y=3^{x/2}$.`, steps: [String.raw`$k=\tfrac12$: stretch by 2; $3^{x/2}=(\sqrt3)^x$.`], ans: String.raw`$(1,3)\to(2,3)$` },
  { title: "All together", q: String.raw`Find the asymptote and y-intercept of $y=\tfrac12(4)^{x-1}+1$.`, steps: [String.raw`$y(0)=\tfrac12\cdot\tfrac14+1$.`], ans: String.raw`$y=1$; $1.125$` },
  { title: "Equation from a graph", q: "Asymptote y = −2, y-intercept 1, passes through (1, 4). Find y = a·bˣ + c.",
    fig: F({ view: { xmin: -4, xmax: 3, ymin: -3, ymax: 8 }, curves: [{ f: (x) => 3 * 2 ** x - 2 }], lines: [asym(-2)], points: [pt(0, 1), pt(1, 4)] }),
    steps: [String.raw`$c=-2$; $a-2=1\Rightarrow a=3$; $3b-2=4\Rightarrow b=2$.`], ans: String.raw`$y=3(2)^x-2$` },
  { title: "From properties", q: "Write two exponential functions with y-intercept 6 and asymptote y = 4.", steps: [String.raw`$a+4=6\Rightarrow a=2$; any base.`], ans: String.raw`$y=2(3)^x+4$, $y=2\left(\tfrac13\right)^x+4$` },
  { title: "x-intercept", q: String.raw`Find the x-intercept of $y=3^{x-2}-9$.`, steps: [String.raw`$3^{x-2}=3^2$.`], ans: String.raw`$x=4$` },
];

const PROBLEMS = [
  { level: 1, q: String.raw`State the asymptote of $y=7^x+5$.`, recap: "Asymptote.", ans: String.raw`$y=5$` },
  { level: 1, q: String.raw`Describe $y=3^{x-4}$.`, recap: "Translation.", ans: "4 right" },
  { level: 1, q: String.raw`State the range of $y=-2(5)^x+1$.`, recap: "Range.", ans: String.raw`$y<1$` },
  { level: 2, q: String.raw`Sketch $y=2^{x-1}+3$ using three key points.`, recap: "Sketch.", ans: String.raw`$(0,3.5)$, $(1,4)$, $(2,5)$; asymptote $y=3$`, fig: gridT({ xmin: -4, xmax: 5, ymin: -1, ymax: 10 }) },
  { level: 2, q: String.raw`Find the y-intercept of $y=3(2)^{x+1}-5$.`, recap: "y-intercept.", ans: "1" },
  { level: 2, q: String.raw`Write $y=\left(\tfrac12\right)^{2x}$ with a single base and describe it.`, recap: "New base.", ans: String.raw`$\left(\tfrac14\right)^x$: decay` },
  { level: 2, q: "Asymptote y = 1, passes through (0, 4) and (1, 7). Find y = a·bˣ + c.", recap: "Equation.", ans: String.raw`$y=3(2)^x+1$` },
  { level: 2, q: String.raw`Find the x-intercept of $y=2^{x+1}-16$.`, recap: "x-intercept.", ans: String.raw`$x=3$` },
  { level: 3, space: 5, q: String.raw`Graph $y=-3(2)^{-(x+1)}+6$: key points, asymptote, range and x-intercept.`, recap: "All parameters.", ans: String.raw`asymptote $y=6$, range $y<6$; x-int: $2^{-(x+1)}=2\Rightarrow x=-2$`, fig: gridT({ xmin: -6, xmax: 4, ymin: -8, ymax: 8 }) },
  { level: 3, space: 4, q: String.raw`$y=a(3)^x+c$ passes through $(0,5)$ and $(1,11)$. Find $a$ and $c$.`, recap: "Two points.", ans: String.raw`$a=3$, $c=2$` },
  { level: 3, space: 4, q: String.raw`State the domain and range of $y=5-2^x$ and its x-intercept (to 2 decimals).`, recap: "Rewrite first.", ans: String.raw`$\mathbb R$; $y<5$; $2^x=5$: $x\approx2.32$` },
  { level: 3, space: 4, q: String.raw`Show that $9^{x/2}=3^x$ and describe the transformation that maps $y=9^x$ to it.`, recap: "Two descriptions.", ans: String.raw`$(3^2)^{x/2}=3^x$; horizontal stretch by 2 of $9^x$` },
  { level: 3, space: 4, q: "y = a·bˣ + c has asymptote y = −1 and passes through (0, 2) and (2, 11). Find a and b.", recap: "Asymptote and points.", ans: String.raw`$a=3$, $b=2$` },
];

export const WS = {
  code: "4.5",
  title: "Transformations of Exponential Functions",
  bigideas: String.raw`$y=a\cdot b^{k(x-d)}+c$ transforms $y=b^x$: $(x,y)\to(\frac xk+d,\ ay+c)$. Use the key points $(-1,\frac1b)$, $(0,1)$, $(1,b)$. Only $c$ moves the asymptote to $y=c$; the range is $y>c$ ($a>0$) or $y<c$ ($a<0$).`,
  goals: ["Describe a, k, d, c.", "Map key points.", "State asymptote, domain, range.", "Write equations from graphs and properties."],
  curriculum: "B2.2, B2.3, B2.5",
  vocab: [["Key points", "$(-1,\\frac1b),(0,1),(1,b)$"], ["Asymptote", "$y=c$"]],
  hook: "Show y = 2ˣ and y = 2ˣ − 3 together. Ask what happened to the line the curve never touches.",
  concepts: [
    ["1. Asymptote first", String.raw`${F({ view: { xmin: -4, xmax: 4, ymin: -4, ymax: 6 }, curves: [{ f: (x) => 2 ** x, color: "gray" }, { f: (x) => 2 ** x - 3 }], lines: [asym(-3)] }, 5, "y = 2ˣ − 3: asymptote y = −3")}`],
    ["2. Mapping", String.raw`$(x,y)\to\left(\frac xk+d,\ ay+c\right)$.`],
    ["3. Bases", String.raw`$b^{kx}=(b^k)^x$: a horizontal stretch is a new base.`],
  ],
  tips: ["Draw the asymptote first.", "Only c moves it.", "a < 0 → below the asymptote.", "Factor k.", "Check the y-intercept."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
