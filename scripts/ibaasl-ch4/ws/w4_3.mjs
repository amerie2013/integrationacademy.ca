// IB AA SL Worksheet 4.3 — Rational Functions (teacher edition)
import { F, gridT, pt } from "./figT.mjs";

const S = String.raw;
const hyp = (f, h, xmin, xmax, color = "violet") => [{ f, a: xmin, b: h - 0.02, color }, { f, a: h + 0.02, b: xmax, color }];
const ASY = (h, k) => ({ vlines: [{ x: h, color: "red", dash: true }], lines: [{ m: 0, b: k, color: "red", dash: true }] });

const EXAMPLES = [
  { title: "Asymptotes", q: S`State the asymptotes, domain and range of $f(x)=\frac{4x+3}{x-1}$.`,
    steps: [S`$x-1=0\Rightarrow x=1$; $y=\frac41$.`], ans: S`$x=1$, $y=4$; $x\ne1$, $y\ne4$` },
  { title: "Intercepts", q: S`Find the intercepts of $y=\frac{2x-8}{x+2}$.`,
    steps: [S`$y=0$: $x=4$.`, S`$x=0$: $y=\frac{-8}{2}$.`], ans: S`$(4,0)$, $(0,-4)$` },
  { title: "Rewriting", q: S`Write $\frac{3x+7}{x+2}$ in the form $\frac{A}{x-h}+k$.`,
    steps: [S`$3x+7=3(x+2)+1$.`], ans: S`$\frac{1}{x+2}+3$` },
  { title: "A sketch", q: S`Sketch $y=\frac{x+4}{x-2}$.`,
    fig: F({ view: { xmin: -6, xmax: 8, ymin: -5, ymax: 8 }, curves: hyp((x) => (x + 4) / (x - 2), 2, -6, 8), ...ASY(2, 1), points: [pt(-4, 0), pt(0, -2, null, "green")] }),
    steps: [S`Asymptotes $x=2$, $y=1$.`, S`Intercepts $(-4,0)$ and $(0,-2)$.`], ans: "two branches about (2, 1)" },
  { title: "Inverse", q: S`Find $f^{-1}(x)$ for $f(x)=\frac{2x+3}{x-4}$.`,
    steps: [S`$x(y-4)=2y+3\Rightarrow xy-2y=4x+3$.`, S`$y(x-2)=4x+3$.`], ans: S`$f^{-1}(x)=\frac{4x+3}{x-2}$` },
  { title: "A special case", q: S`Simplify $\frac{2x+4}{x+2}$ and describe its graph.`,
    steps: [S`$\frac{2(x+2)}{x+2}=2$ for $x\ne-2$.`], ans: "the line y = 2 with a hole at x = −2" },
  { title: "Unknown coefficients", q: S`$f(x)=\frac{ax+5}{x-c}$ has asymptotes $x=3$ and $y=-1$. Find $a$, $c$ and the x-intercept.`,
    steps: [S`$c=3$; $a=-1$.`, S`$-x+5=0$.`], ans: S`$a=-1$, $c=3$; $x=5$` },
  { title: "Meeting a horizontal line", q: S`Solve $\frac{5x-1}{x+1}=2$.`,
    steps: [S`$5x-1=2x+2$.`], ans: S`$x=1$` },
  { title: "Average cost", q: S`Making $n$ items costs $1500+5n$. Find the average cost model, its long-run value, and $n$ when the average cost is 6.50.`,
    fig: F({ view: { xmin: -40, xmax: 2100, ymin: -1, ymax: 22 }, curves: [{ f: (n) => 5 + 1500 / n, a: 90, b: 2100 }], lines: [{ m: 0, b: 5, color: "red", dash: true }], points: [pt(1000, 6.5)], step: { x: 200, y: 2 } }),
    steps: [S`$A=\frac{1500+5n}{n}=5+\frac{1500}{n}$; $A\to5$.`, S`$\frac{1500}{n}=1.5\Rightarrow n=1000$.`], ans: "5 + 1500/n; 5; 1000" },
];

const PROBLEMS = [
  { level: 1, q: S`State the vertical asymptote of $y=\frac{x+7}{x-6}$.`, recap: "Vertical asymptote.", ans: S`$x=6$` },
  { level: 1, q: S`State the horizontal asymptote of $y=\frac{8x-3}{4x+1}$.`, recap: "Horizontal asymptote.", ans: S`$y=2$` },
  { level: 1, q: S`Find the y-intercept of $y=\frac{x-10}{x+5}$.`, recap: "y-intercept.", ans: S`$-2$` },
  { level: 2, q: S`Find the x-intercept of $y=\frac{3x+6}{x-4}$.`, recap: "x-intercept.", ans: S`$x=-2$` },
  { level: 2, q: S`Write $\frac{5x-2}{x-1}$ in the form $\frac{A}{x-h}+k$.`, recap: "Rewrite.", ans: S`$\frac{3}{x-1}+5$` },
  { level: 2, q: S`Find $f^{-1}(x)$ for $f(x)=\frac{x+2}{x-3}$.`, recap: "Inverse.", ans: S`$\frac{3x+2}{x-1}$` },
  { level: 2, q: S`Sketch $y=\frac{2x-2}{x+1}$ on the grid, with asymptotes and intercepts.`, recap: "Sketch.", ans: S`$x=-1$, $y=2$; $(1,0)$, $(0,-2)$`, fig: gridT({ xmin: -6, xmax: 6, ymin: -5, ymax: 8 }) },
  { level: 2, q: S`Solve $\frac{x+1}{x-2}=4$.`, recap: "Solve.", ans: S`$x=3$` },
  { level: 3, space: 4, q: S`Find where $y=\frac{2x+1}{x+1}$ meets $y=x$.`, recap: "Meets a line.", ans: S`$x=\frac{1\pm\sqrt5}{2}$`,
    fig: F({ view: { xmin: -4, xmax: 4, ymin: -4, ymax: 5 }, curves: [...hyp((x) => (2 * x + 1) / (x + 1), -1, -4, 4), { f: (x) => x, color: "blue" }] }) },
  { level: 3, space: 4, q: S`$f(x)=\frac{ax+b}{2x-c}$ has asymptotes $x=2$ and $y=3$ and passes through $(0,1)$. Find $a$, $b$ and $c$.`, recap: "Coefficients.", ans: S`$c=4$, $a=6$, $b=-4$` },
  { level: 3, space: 4, q: S`A drug's concentration is $C=\frac{40t}{t+8}$ mg/L. Find the long-run value and when $C=30$.`, recap: "Model.", ans: "40 mg/L; t = 24 h" },
  { level: 3, space: 4, q: S`State the range of $f(x)=\frac{3x+1}{x-1}$ for $x>1$.`, recap: "Range on a branch.", ans: S`$y>3$` },
  { level: 3, space: 4, q: S`For which $k$ is the graph of $y=\frac{kx+2}{x+1}$ a horizontal line (with a hole)?`, recap: "Special case.", ans: S`$k=2$` },
];

export const WS = {
  code: "4.3",
  title: "Rational Functions",
  bigideas: S`For $f(x)=\frac{ax+b}{cx+d}$: the vertical asymptote is where the denominator is zero, $x=-\frac dc$; the horizontal asymptote is $y=\frac ac$; the x-intercept is where the numerator is zero. Dividing gives $\frac{A}{x-h}+k$, a transformed reciprocal. The inverse is found by swapping $x$ and $y$; its asymptotes are those of $f$, swapped.`,
  goals: ["Find asymptotes and intercepts.", "Rewrite as A/(x − h) + k.", "Find inverses.", "Use rational models."],
  curriculum: "SL 2.8",
  vocab: [["Rational function", "a quotient of polynomials"], ["Vertical asymptote", S`$x=-\frac dc$`], ["Horizontal asymptote", S`$y=\frac ac$`]],
  hook: "Ask: if a factory has fixed costs of 1500 and each item costs 5, what is the cost per item for 10, 100, 1000 items? What value does it approach?",
  concepts: [
    ["1. Asymptotes", S`${F({ view: { xmin: -6, xmax: 8, ymin: -5, ymax: 8 }, curves: hyp((x) => (x + 4) / (x - 2), 2, -6, 8), ...ASY(2, 1) }, 5)} Bottom = 0 and the ratio of x-coefficients.`],
    ["2. The hidden reciprocal", S`$\frac{ax+b}{cx+d}=\frac{A}{x-h}+k$ by division.`],
    ["3. Inverses", "Swap, collect the y terms, factorise."],
  ],
  tips: ["Denominator → vertical asymptote.", "Numerator → x-intercept.", "a/c, not b/d.", "Check for a common factor.", "Reject x-values that make the denominator 0."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
