// MCF3M Worksheet 7.4 — Exponential Functions and Their Graphs (teacher edition).
import { svgT } from "../../ws/figT.mjs";
import { eDoc, P } from "../efig.mjs";
const S = String.raw;
const G = (curves, o, w = 5.2) => svgT(eDoc(curves, o), w);
const V = { view: { xmin: -3, xmax: 3, ymin: -1, ymax: 17 }, step: { x: 1, y: 2 } };

const EXAMPLES = [
  { title: "Growth graph", q: S`Make a table for $y=4^x$, $-2\le x\le2$, graph it and state its properties.`, fig: G([(x) => 4 ** x], { ...V, points: [P(-1, 0.25, "(−1, 1/4)"), P(0, 1, "(0, 1)"), P(1, 4, "(1, 4)"), P(2, 16, "(2, 16)")] }),
    steps: [S`$y=\frac1{16},\ \frac14,\ 1,\ 4,\ 16$.`, S`Domain all real $x$; range $y>0$; $y$-intercept $1$; asymptote $y=0$; increasing.`], ans: S`range $y>0$, asymptote $y=0$, increasing` },
  { title: "Decay graph", q: S`Graph $y=\left(\frac13\right)^x$, $-2\le x\le2$.`, fig: G([(x) => (1 / 3) ** x], { view: { xmin: -2.5, xmax: 3, ymin: -1, ymax: 10 }, step: { x: 1, y: 1 }, points: [P(-2, 9, "(−2, 9)"), P(0, 1, "(0, 1)"), P(2, 0.11, "(2, 1/9)")] }),
    steps: [S`$y=9,\ 3,\ 1,\ \frac13,\ \frac19$.`, S`Decreasing; range $y>0$; asymptote $y=0$ on the right.`], ans: S`decreasing, $y$-int $1$` },
  { title: "Reflections", q: S`Compare $y=1.25^x$ and $y=0.8^x$.`, fig: G([{ f: (x) => 1.25 ** x, color: "violet" }, { f: (x) => 0.8 ** x, color: "green" }], { view: { xmin: -6, xmax: 6, ymin: -0.5, ymax: 4 }, step: { x: 1, y: 0.5 }, points: [P(0, 1, "(0, 1)")] }),
    steps: [S`$0.8=\frac45=1.25^{-1}$, so $0.8^x=1.25^{-x}$.`, S`The graphs are reflections in the $y$-axis; both pass through $(0,1)$.`], ans: S`mirror images in the $y$-axis` },
  { title: "Classify tables", q: S`Classify ($x=0..3$): D: $5,10,20,40$; E: $4,7,12,19$; F: $10,7,4,1$.`, fig: G([{ f: (x) => 5 * 2 ** x, color: "violet" }, { f: (x) => x * x + 2 * x + 4, color: "amber" }, { f: (x) => 10 - 3 * x, color: "green" }], { view: { xmin: 0, xmax: 3.2, ymin: 0, ymax: 42 }, step: { x: 1, y: 5 } }),
    steps: [S`D: ratios $2$: exponential.`, S`E: differences $3,5,7$, second differences $2$: quadratic.`, S`F: differences $-3$: linear.`], ans: S`D exponential, E quadratic, F linear` },
  { title: "Initial value", q: S`Graph $y=3(2)^x$ and find its $y$-intercept and the value at $x=4$.`, fig: G([(x) => 3 * 2 ** x], { view: { xmin: -2, xmax: 4.3, ymin: -2, ymax: 52 }, step: { x: 1, y: 5 }, points: [P(0, 3, "(0, 3)"), P(4, 48, "(4, 48)")] }),
    steps: [S`$y$-intercept $3$.`, S`$3(2)^4=48$.`], ans: S`$3$; $48$` },
  { title: "Decay with a", q: S`Graph $y=2(0.5)^x$; find the value at $x=-3$ and at $x=3$.`, fig: G([(x) => 2 * 0.5 ** x], { view: { xmin: -3.5, xmax: 4, ymin: -1, ymax: 18 }, step: { x: 1, y: 2 }, points: [P(-3, 16, "(−3, 16)"), P(3, 0.25, "(3, 1/4)")] }),
    steps: [S`$2(0.5)^{-3}=2(8)=16$.`, S`$2(0.5)^3=\frac14$.`], ans: S`$16$; $\frac14$` },
  { title: "Find the equation", q: S`An exponential function $y=a\cdot b^x$ passes through $(0,\,5)$ and $(1,\,15)$. Find it and $y(3)$.`, fig: G([(x) => 5 * 3 ** x], { view: { xmin: -1, xmax: 3.2, ymin: -5, ymax: 140 }, step: { x: 1, y: 20 }, points: [P(0, 5, "(0, 5)"), P(1, 15, "(1, 15)"), P(3, 135, "(3, 135)")] }),
    steps: [S`$a=5$; $b=\frac{15}5=3$.`, S`$y=5(3)^x$; $y(3)=135$.`], ans: S`$y=5(3)^x$; $135$` },
  { title: "Exponential vs cubic", q: S`Compare $y=3^x$ and $y=x^3$ for $x=0,1,\dots,5$.`, fig: G([{ f: (x) => 3 ** x, color: "violet" }, { f: (x) => x ** 3, color: "green" }], { view: { xmin: 0, xmax: 5, ymin: 0, ymax: 250 }, step: { x: 1, y: 25 }, points: [P(3, 27, "(3, 27)")] }),
    steps: [S`$3^x$: $1,3,9,27,81,243$; $x^3$: $0,1,8,27,64,125$.`, S`Equal at $x=3$; $3^x$ pulls ahead after that.`], ans: S`equal at $x=3$; $3^x$ larger for $x>3$` },
  { title: "Solve from a graph", q: S`Use the graph of $y=2^x$ to solve $2^x=32$ and $2^x=\frac14$.`, fig: G([(x) => 2 ** x], { view: { xmin: -3, xmax: 5.5, ymin: -2, ymax: 34 }, step: { x: 1, y: 4 }, lines: [{ m: 0, b: 32, color: "green", dash: true }], points: [P(5, 32, "(5, 32)"), P(-2, 0.25, "(−2, 1/4)")] }),
    steps: [S`$32=2^5$: $x=5$.`, S`$\frac14=2^{-2}$: $x=-2$.`], ans: S`$x=5$; $x=-2$` },
];

const PROBLEMS = [
  { level: 1, q: S`State the $y$-intercept and asymptote of $y=9^x$.`, ans: S`$1$; $y=0$` },
  { level: 1, q: S`Is $y=0.35^x$ increasing or decreasing?`, ans: S`decreasing` },
  { level: 1, q: S`Evaluate $y=6(2)^x$ at $x=3$.`, ans: S`$48$` },
  { level: 2, q: S`Classify the table $x=0..3$: $y=2,\ 6,\ 18,\ 54$.`, ans: S`exponential, ratio $3$` },
  { level: 2, q: S`Classify the table $x=0..3$: $y=1,\ 4,\ 9,\ 16$.`, ans: S`quadratic` },
  { level: 2, q: S`Make a table for $y=\left(\frac14\right)^x$, $x=-2..2$.`, ans: S`$16,4,1,\frac14,\frac1{16}$` },
  { level: 2, q: S`State the range of $y=7(1.5)^x$ and its $y$-intercept.`, ans: S`$y>0$; $7$` },
  { level: 2, q: S`Solve $3^x=\frac1{27}$.`, ans: S`$x=-3$` },
  { level: 3, space: 5, q: S`$y=a\cdot b^x$ passes through $(0,\,80)$ and $(2,\,20)$. Find $a$, $b$ and $y(3)$.`, ans: S`$a=80$, $b=\frac12$, $y(3)=10$` },
  { level: 3, space: 5, q: S`$y=a\cdot b^x$ passes through $(1,\,12)$ and $(3,\,108)$. Find $a$ and $b$.`, ans: S`$b=3$, $a=4$` },
  { level: 3, space: 5, q: S`For which whole $x$ is $2^x$ first larger than $x^4$ for $x>2$? Use a table.`, ans: S`equal at $16$; $2^{17}>17^4$: $x=17$` },
  { level: 3, space: 5, q: S`Explain why $y=1^x$ is not called an exponential function.`, ans: S`$1^x=1$: a horizontal line, constant ratio $1$` },
  { level: 3, space: 5, q: S`Sketch $y=2^x$ and $y=-2^x$. Describe the relationship and the range of each.`, ans: S`reflection in the $x$-axis; $y>0$ and $y<0$` },
];

export const WS = {
  code: "7.4",
  title: "Exponential Functions and Their Graphs",
  bigideas: S`An exponential function $y=a\cdot b^x$ ($b>0$, $b\ne1$) multiplies $y$ by $b$ for each step of $1$ in $x$. If $b>1$ it increases (growth); if $0<b<1$ it decreases (decay). Every $y=b^x$ has domain all reals, range $y>0$, $y$-intercept $1$ and asymptote $y=0$; $a$ is the $y$-intercept. Tables: constant differences — linear; constant second differences — quadratic; constant ratios — exponential.`,
  goals: ["Graph $y=b^x$.", "State key properties.", "Interpret $a$.", "Classify relations from tables."],
  curriculum: "B1.1, B1.2, B1.4",
  vocab: [["Exponential function", "$y=a\\cdot b^x$"], ["Asymptote", "$y=0$"], ["Common ratio", "constant $\\frac{y_{n+1}}{y_n}$"], ["Initial value", "$a$"]],
  hook: S`One grain of rice on the first square of a chessboard, two on the second, four on the third\dots{} How many on square $64$?`,
  concepts: [
    ["1. Growth and decay", S`$b>1$ rises, $0<b<1$ falls; both pass through $(0,1)$ and never touch $y=0$.
${G([{ f: (x) => 3 ** x, color: "violet" }, { f: (x) => (1 / 3) ** x, color: "green" }], { view: { xmin: -3, xmax: 3, ymin: -1, ymax: 10 }, step: { x: 1, y: 1 }, points: [P(0, 1, "(0, 1)")] })}`],
    ["2. Identifying from a table", S`Equal $x$-steps: check differences, then second differences, then ratios.`],
  ],
  tips: ["$2^x\\ne2x$.", "Range is $y>0$.", "Use ratios only with equal $x$-steps."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
