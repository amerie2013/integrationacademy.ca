// IB AA SL Worksheet 4.2 — Transforming the Reciprocal Function (teacher edition)
import { F, gridT, pt } from "./figT.mjs";

const S = String.raw;
const hyp = (f, h, xmin, xmax, color = "violet") => [{ f, a: xmin, b: h - 0.02, color }, { f, a: h + 0.02, b: xmax, color }];
const ASY = (h, k) => ({ vlines: [{ x: h, color: "red", dash: true }], lines: [{ m: 0, b: k, color: "red", dash: true }] });

const EXAMPLES = [
  { title: "Features", q: S`State the asymptotes, domain and range of $y=\frac{7}{x+5}-3$.`,
    steps: [S`$x+5=0\Rightarrow x=-5$; the constant is $-3$.`], ans: S`$x=-5$, $y=-3$; $x\ne-5$, $y\ne-3$` },
  { title: "Transformations", q: S`Describe how $y=-\frac{1}{x-4}+2$ is obtained from $y=\frac1x$.`,
    steps: ["Reflect (a = −1).", "Translate 4 right and 2 up."], ans: "reflection; translation 4 right, 2 up" },
  { title: "Intercepts", q: S`Find the intercepts of $y=\frac{6}{x+2}-1$.`,
    steps: [S`$x=0$: $3-1=2$.`, S`$y=0$: $\frac{6}{x+2}=1\Rightarrow x=4$.`], ans: S`$(0,2)$, $(4,0)$` },
  { title: "A sketch", q: S`Sketch $y=\frac{2}{x-1}+1$ with its asymptotes and intercepts.`,
    fig: F({ view: { xmin: -5, xmax: 6, ymin: -5, ymax: 6 }, curves: hyp((x) => 2 / (x - 1) + 1, 1, -5, 6), ...ASY(1, 1), points: [pt(0, -1, null, "green"), pt(-1, 0)] }),
    steps: [S`Asymptotes $x=1$, $y=1$.`, S`$x=0$: $-2+1=-1$; $y=0$: $\frac{2}{x-1}=-1\Rightarrow x=-1$.`], ans: S`$(0,-1)$, $(-1,0)$` },
  { title: "From a graph", q: "Find the equation of the graph shown.",
    fig: F({ view: { xmin: -2, xmax: 8, ymin: -7, ymax: 4 }, curves: hyp((x) => 3 / (x - 3) - 2, 3, -2, 8), ...ASY(3, -2), points: [pt(4, 1)] }),
    steps: [S`Asymptotes $x=3$, $y=-2$: $y=\frac{a}{x-3}-2$.`, S`$(4,1)$: $a-2=1\Rightarrow a=3$.`], ans: S`$y=\frac{3}{x-3}-2$` },
  { title: "Finding a", q: S`$y=\frac{a}{x-2}+4$ passes through $(0,1)$. Find $a$.`,
    steps: [S`$\frac{a}{-2}=-3$.`], ans: S`$a=6$` },
  { title: "Solving", q: S`Solve $\frac{4}{x+1}+3=5$.`,
    steps: [S`$\frac{4}{x+1}=2\Rightarrow x+1=2$.`], ans: S`$x=1$` },
  { title: "Translation vector", q: S`Which translation takes $y=\frac1x$ to $y=\frac{1}{x+6}+2$?`,
    steps: ["6 left, 2 up."], ans: S`$\binom{-6}{2}$` },
  { title: "A population model", q: S`A fish population is $P=800-\frac{600}{t+1}$ after $t$ years. Find the starting population, the long-run value and when $P=650$.`,
    steps: [S`$P(0)=200$; $P\to800$.`, S`$\frac{600}{t+1}=150\Rightarrow t=3$.`], ans: "200; 800; 3 years" },
];

const PROBLEMS = [
  { level: 1, q: S`State the vertical asymptote of $y=\frac{9}{x-7}+2$.`, recap: "Vertical asymptote.", ans: S`$x=7$` },
  { level: 1, q: S`State the range of $y=\frac{1}{x+3}-5$.`, recap: "Range.", ans: S`$y\ne-5$` },
  { level: 1, q: S`Find the y-intercept of $y=\frac{8}{x+4}+1$.`, recap: "y-intercept.", ans: "3" },
  { level: 2, q: S`Find the x-intercept of $y=\frac{3}{x-2}+1$.`, recap: "x-intercept.", ans: S`$x=-1$` },
  { level: 2, q: S`A graph has asymptotes $x=1$ and $y=3$ and passes through $(2,7)$. Find its equation.`, recap: "Equation.", ans: S`$y=\frac{4}{x-1}+3$` },
  { level: 2, q: S`Describe how $y=\frac{4}{x+1}-3$ is obtained from $y=\frac1x$.`, recap: "Transformations.", ans: "stretch ×4; 1 left, 3 down" },
  { level: 2, q: S`Sketch $y=-\frac{3}{x-2}+1$ on the grid, with its asymptotes and intercepts.`, recap: "Sketch.", ans: S`$x=2$, $y=1$; $(0,2.5)$, $(5,0)$`, fig: gridT({ xmin: -4, xmax: 8, ymin: -5, ymax: 7 }) },
  { level: 2, q: S`Solve $\frac{6}{x-1}-2=1$.`, recap: "Solve.", ans: S`$x=3$` },
  { level: 3, space: 4, q: S`A graph $y=\frac{a}{x-h}+k$ has centre $(2,-1)$ and passes through $(5,0)$. Find $a$, $h$ and $k$.`, recap: "Centre and point.", ans: S`$a=3$, $h=2$, $k=-1$` },
  { level: 3, space: 4, q: S`Find where $y=\frac{2}{x-1}$ meets $y=x$.`, recap: "Meets y = x.", ans: S`$(2,2)$, $(-1,-1)$`,
    fig: F({ view: { xmin: -4, xmax: 5, ymin: -4, ymax: 5 }, curves: [...hyp((x) => 2 / (x - 1), 1, -4, 5), { f: (x) => x, color: "blue" }] }) },
  { level: 3, space: 4, q: S`State the range of $y=\frac{4}{x-3}+2$ for $x>3$.`, recap: "Range on one branch.", ans: S`$y>2$` },
  { level: 3, space: 4, q: S`Coffee cools as $T=\frac{300}{t+5}+20$ °C. Find the starting temperature and when it is 35 °C.`, recap: "Model.", ans: "80 °C; 15 min" },
  { level: 3, space: 5, q: S`Show that the graph of $y=\frac{2}{x-1}+3$ is symmetric about the point $(1,3)$.`, recap: "Symmetry about the centre.", ans: S`$(1+u,3+\frac2u)$ and $(1-u,3-\frac2u)$ have midpoint $(1,3)$` },
];

export const WS = {
  code: "4.2",
  title: "Transforming the Reciprocal Function",
  bigideas: S`$y=\frac{a}{x-h}+k$ is $y=\frac1x$ stretched by $a$ (reflected if $a<0$) and translated $h$ right and $k$ up. The asymptotes move with it: $x=h$ and $y=k$, crossing at the centre $(h,k)$. Domain $x\ne h$, range $y\ne k$. Find intercepts with $x=0$ and $y=0$; find an equation from the asymptotes and one point.`,
  goals: ["Describe the transformations.", "State asymptotes, domain and range.", "Find intercepts and sketch.", "Find equations from graphs."],
  curriculum: "SL 2.8, SL 2.11",
  vocab: [["Vertical asymptote", S`$x=h$`], ["Horizontal asymptote", S`$y=k$`], ["Centre", S`$(h,k)$`]],
  hook: "Show y = 1/x on a transparency and slide it so the asymptotes cross at (2, 3). Ask students to write the new equation.",
  concepts: [
    ["1. Moving the asymptotes", S`${F({ view: { xmin: -3, xmax: 7, ymin: -3, ymax: 7 }, curves: [...hyp((x) => 1 / x, 0, -3, 7, "gray"), ...hyp((x) => 1 / (x - 2) + 3, 2, -3, 7)], ...ASY(2, 3) }, 5)} $x=h$ and $y=k$.`],
    ["2. The factor a", S`$|a|$ pushes the branches away from the centre; $a<0$ reflects them.`],
    ["3. Intercepts", S`$x=0$ for the y-intercept; solve $\frac{a}{x-h}=-k$ for the x-intercept.`],
  ],
  tips: ["x + 3 means h = −3.", "The range excludes k.", "Draw asymptotes first.", "Check with a point on each branch.", "Use one point to find a."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
