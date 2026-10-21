// IB AA SL Worksheet 2.3 — Graphs of Functions (teacher edition)
import { F, pt } from "./figT.mjs";

const S = String.raw;
const EXAMPLES = [
  { title: "Intercepts and vertex", q: S`Find the intercepts and vertex of $f(x)=x^2+2x-8$.`,
    steps: [S`$f(0)=-8$; $(x+4)(x-2)=0$.`, S`Axis $x=-1$: $f(-1)=-9$.`], ans: S`$(0,-8)$, $(-4,0)$, $(2,0)$; vertex $(-1,-9)$` },
  { title: "A cubic", q: S`Sketch $f(x)=x(x-3)(x+2)$, labelling zeros and turning points.`,
    fig: F({ view: { xmin: -3, xmax: 4, ymin: -10, ymax: 6 }, curves: [{ f: (x) => x * (x - 3) * (x + 2) }], points: [pt(-2, 0), pt(0, 0), pt(3, 0), pt(-1.12, 4.06, null, "amber"), pt(1.79, -8.21, null, "amber")], step: { x: 1, y: 2 } }),
    steps: [S`Zeros $-2, 0, 3$.`, S`GDC: local maximum $(-1.12, 4.06)$, local minimum $(1.79,-8.21)$.`], ans: "as shown" },
  { title: "A rational function", q: S`Find the asymptotes and intercepts of $y=\frac{2}{x+1}-3$.`,
    steps: [S`Asymptotes $x=-1$, $y=-3$.`, S`$x=0$: $y=-1$. $y=0$: $\frac{2}{x+1}=3\Rightarrow x=-\frac13$.`], ans: S`$x=-1$, $y=-3$; $(0,-1)$, $\left(-\frac13,0\right)$` },
  { title: "An exponential", q: S`State the asymptote and y-intercept of $y=3(2^{-x})+1$.`,
    steps: [S`$2^{-x}\to0$ as $x\to\infty$: asymptote $y=1$.`, S`$y(0)=3+1=4$.`], ans: S`$y=1$; $(0,4)$` },
  { title: "Two graphs meeting", q: S`Solve $x^2-1=2x+2$ graphically.`,
    fig: F({ view: { xmin: -3, xmax: 5, ymin: -3, ymax: 10 }, curves: [{ f: (x) => x * x - 1 }, { f: (x) => 2 * x + 2, color: "blue" }], points: [pt(-1, 0, null, "red"), pt(3, 8, null, "red")] }),
    steps: [S`Intersections at $(-1,0)$ and $(3,8)$; check $x^2-2x-3=0$.`], ans: S`$x=-1$ or $x=3$` },
  { title: "Symmetry", q: S`Find the zeros of $f(x)=x^4-5x^2+4$ and describe its symmetry.`,
    steps: [S`$(x^2-1)(x^2-4)=0$: $x=\pm1, \pm2$.`, S`$f(-x)=f(x)$: symmetric about the y-axis.`], ans: S`$\pm1$, $\pm2$; y-axis symmetry` },
  { title: "Sketch or draw?", q: S`Draw $y=(x-1)^2$ accurately for $0\le x\le3$.`,
    steps: [S`Table: $x=0,1,2,3$ gives $y=1,0,1,4$; plot and join with a smooth curve over exactly this domain.`], ans: "end points (0, 1) and (3, 4)" },
  { title: "Counting solutions", q: S`$f(x)=x^3-3x^2$ has a local maximum at $(0,0)$ and a local minimum at $(2,-4)$. How many solutions has $f(x)=-2$?`,
    steps: [S`$y=-2$ lies between $-4$ and $0$.`], ans: "3" },
  { title: "A model with a maximum", q: S`A drug concentration is $C(t)=20t(0.8)^t$. Use a GDC to find the maximum.`,
    steps: [S`Maximum at $t\approx4.48$ h, $C\approx32.97$.`], ans: S`$(4.48, 32.97)$` },
];

const PROBLEMS = [
  { level: 1, q: S`State the y-intercept of $y=3x^2-x+7$.`, recap: "y-intercept.", ans: "(0, 7)" },
  { level: 1, q: S`State the zeros of $y=(x+3)(x-5)$.`, recap: "Zeros.", ans: S`$-3$, $5$` },
  { level: 1, q: S`State the vertical asymptote of $y=\frac{5}{x-4}$.`, recap: "Asymptote.", ans: S`$x=4$` },
  { level: 2, q: S`Find the asymptotes and intercepts of $y=\frac{1}{x-3}+2$.`, recap: "Rational sketch.", ans: S`$x=3$, $y=2$; $\left(0,\frac53\right)$, $(2.5,0)$` },
  { level: 2, q: S`Find the zeros of $y=x^3-9x$.`, recap: "Cubic zeros.", ans: S`$0$, $\pm3$` },
  { level: 2, q: S`Find the turning point of $y=-x^2+6x-5$ and state whether it is a maximum or minimum.`, recap: "Turning point.", ans: S`$(3,4)$, maximum` },
  { level: 2, q: S`Solve $2^x=4-x$ graphically (3 d.p.).`, recap: "Graphical solution.", ans: S`$x\approx1.386$`,
    fig: F({ view: { xmin: -2, xmax: 4, ymin: -1, ymax: 7 }, curves: [{ f: (x) => 2 ** x }, { f: (x) => 4 - x, color: "blue" }] }) },
  { level: 2, q: S`State the horizontal asymptote of $y=5-3^x$.`, recap: "Asymptote.", ans: S`$y=5$` },
  { level: 3, space: 5, q: S`For $f(x)=x^3-3x+1$, find the number of zeros and the turning points (GDC), and the values of $k$ for which $f(x)=k$ has exactly one solution.`, recap: "Cubic analysis.", ans: S`3 zeros; $(-1,3)$, $(1,-1)$; $k>3$ or $k<-1$`,
    fig: F({ view: { xmin: -3, xmax: 3, ymin: -4, ymax: 5 }, curves: [{ f: (x) => x ** 3 - 3 * x + 1 }] }) },
  { level: 3, space: 4, q: S`Sketch $y=\frac{x+2}{x-1}$, showing asymptotes and intercepts.`, recap: "Rational sketch.", ans: S`$x=1$, $y=1$; $(-2,0)$, $(0,-2)$` },
  { level: 3, space: 5, q: S`Solve $x^3=2x+1$, given that $x=-1$ is one solution.`, recap: "Cubic equation.", ans: S`$x=-1$, $\frac{1\pm\sqrt5}{2}\approx1.618, -0.618$` },
  { level: 3, space: 4, q: S`A drink cools as $T(t)=70(0.9)^t+20$. State the asymptote and find when $T=50$.`, recap: "Model.", ans: S`$T=20$; $t\approx8.04$ min` },
  { level: 3, space: 4, q: S`Explain the difference between sketching and drawing a graph, giving one feature each must show.`, recap: "Communication.", ans: "sketch: shape and labelled key features; drawing: to scale over a given domain" },
];

export const WS = {
  code: "2.3",
  title: "Graphs of Functions",
  bigideas: S`A useful graph shows its key features: intercepts (from $f(0)$ and $f(x)=0$), turning points (vertex or GDC), symmetry, and asymptotes (vertical where a denominator is zero, horizontal for the long-run value). Equations $f(x)=g(x)$ can be solved as the intersections of two graphs.`,
  goals: ["Find intercepts.", "Find turning points and asymptotes.", "Sketch and draw graphs.", "Solve equations graphically."],
  curriculum: "SL 2.3, SL 2.4",
  vocab: [["Zero", "an x-value with f(x) = 0"], ["Turning point", "local maximum or minimum"], ["Asymptote", "a line the graph approaches"]],
  hook: "Show three unlabelled graphs and ask students what they would need to know to draw each one again from memory.",
  concepts: [
    ["1. Key features", S`${F({ view: { xmin: -4, xmax: 5, ymin: -8, ymax: 6 }, curves: [{ f: (x) => x * x - x - 6 }], points: [pt(-2, 0), pt(3, 0), pt(0, -6, null, "green"), pt(0.5, -6.25, null, "amber")] }, 5)} Label intercepts and turning points with coordinates.`],
    ["2. Asymptotes", S`Vertical: denominator $=0$. Horizontal: value of $y$ as $x\to\pm\infty$ (e.g. $y=b$ for $\frac{a}{x-h}+b$ or $a\cdot c^x+b$).`],
    ["3. Graphical solutions", S`Solve $f(x)=g(x)$ by reading the x-coordinates where the graphs meet; use this when algebra cannot solve the equation.`],
  ],
  tips: ["Label points as coordinates.", "Set the GDC window to show every feature.", "Asymptotes as dashed lines.", "Sketch ≠ draw.", "Check graphical answers by substitution."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
