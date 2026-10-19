// MCV4U Worksheet 3.5 — Putting It All Together (teacher edition)
import { F, gridT, pt } from "./figT.mjs";

const S = String.raw;
const rat = (f, poles, v, color = "violet") => {
  const cuts = [v.xmin, ...poles, v.xmax];
  return cuts.slice(0, -1).map((a, i) => ({ f, a: i === 0 ? a : a + 0.004, b: i === cuts.length - 2 ? cuts[i + 1] : cuts[i + 1] - 0.004, color }));
};
const V3 = { xmin: -6, xmax: 6, ymin: -4, ymax: 6 };
const V4 = { xmin: -8, xmax: 4, ymin: -12, ymax: 6 };
const V9 = { xmin: -3, xmax: 7, ymin: -4, ymax: 6 };
const r1 = (-1 + Math.sqrt(7)) / 3, r2 = (-1 - Math.sqrt(7)) / 3;
const q4 = (x) => 3 * x ** 4 + 4 * x ** 3 - 12 * x * x;

const EXAMPLES = [
  { title: "A complete cubic", q: S`Sketch $f(x)=-x^3+3x^2+9x-2$.`,
    steps: [S`y-intercept $-2$; $f\to-\infty$ as $x\to\infty$, $+\infty$ as $x\to-\infty$.`, S`$f'(x)=-3(x-3)(x+1)$: min $(-1,-7)$, max $(3,25)$.`, S`$f''(x)=-6x+6$: inflection $(1,9)$; concave up for $x\lt1$.`], ans: S`min $(-1,-7)$, max $(3,25)$, inflection $(1,9)$` },
  { title: "A quartic with three turns", q: S`Sketch $f(x)=3x^4+4x^3-12x^2$.`,
    fig: F({ view: { xmin: -3, xmax: 2, ymin: -36, ymax: 12 }, curves: [{ f: q4 }], points: [pt(-2, -32), pt(0, 0), pt(1, -5), { x: r1, y: q4(r1), color: "violet" }, { x: r2, y: q4(r2), color: "violet" }], step: { x: 0.5, y: 4 } }),
    steps: [S`$f'(x)=12x(x+2)(x-1)$: minima $(-2,-32)$ and $(1,-5)$, maximum $(0,0)$.`, S`$f''(x)=12(3x^2+2x-2)$: inflection at $x=\frac{-1\pm\sqrt7}{3}\approx0.55,\ -1.22$.`], ans: S`two minima, one maximum, two inflection points (violet)` },
  { title: "A rational function", q: S`Sketch $f(x)=\frac{x^2-9}{x^2-4}$.`,
    fig: F({ view: V3, curves: rat((x) => (x * x - 9) / (x * x - 4), [-2, 2], V3), vlines: [{ x: -2, color: "red", dash: true }, { x: 2, color: "red", dash: true }], lines: [{ m: 0, b: 1, color: "red", dash: true }], points: [pt(0, 2.25), pt(3, 0), pt(-3, 0)], step: { x: 1, y: 1 } }),
    steps: [S`$f=1-\frac{5}{x^2-4}$: asymptotes $x=\pm2$, $y=1$; intercepts $(\pm3,0)$, $\left(0,\frac94\right)$; even.`, S`$f'(x)=\frac{10x}{(x^2-4)^2}$: minimum $\left(0,\frac94\right)$.`], ans: S`minimum $(0,2.25)$; concave up between the asymptotes, down outside` },
  { title: "An oblique asymptote", q: S`Sketch $f(x)=\frac{x^2-3}{x+2}$.`,
    fig: F({ view: V4, curves: rat((x) => (x * x - 3) / (x + 2), [-2], V4), vlines: [{ x: -2, color: "red", dash: true }], lines: [{ m: 1, b: -2, color: "red", dash: true }], points: [pt(-1, -2), pt(-3, -6)], step: { x: 1, y: 2 } }),
    steps: [S`$f(x)=x-2+\frac{1}{x+2}$: asymptotes $x=-2$ and $y=x-2$.`, S`$f'(x)=1-\frac{1}{(x+2)^2}=0\Rightarrow x=-1$ or $x=-3$.`], ans: S`local minimum $(-1,-2)$, local maximum $(-3,-6)$` },
  { title: "An odd quintic", q: S`Sketch $f(x)=x^5-5x$.`,
    fig: F({ view: { xmin: -2, xmax: 2, ymin: -7, ymax: 7 }, curves: [{ f: (x) => x ** 5 - 5 * x }], points: [pt(-1, 4), pt(1, -4), pt(0, 0)], step: { x: 0.5, y: 1 } }),
    steps: [S`$f'(x)=5x^4-5$: max $(-1,4)$, min $(1,-4)$.`, S`$f''(x)=20x^3$: inflection $(0,0)$; odd function.`], ans: S`max $(-1,4)$, min $(1,-4)$, inflection $(0,0)$` },
  { title: "A root function", q: S`Sketch $f(x)=x\sqrt{x+3}$.`,
    fig: F({ view: { xmin: -3.5, xmax: 2, ymin: -3, ymax: 5 }, curves: [{ f: (x) => x * Math.sqrt(x + 3), a: -3, b: 2 }], points: [pt(-3, 0), pt(-2, -2), pt(0, 0)], step: { x: 0.5, y: 1 } }),
    steps: [S`Domain $x\ge-3$; intercepts $(-3,0)$, $(0,0)$.`, S`$f'(x)=\frac{3x+6}{2\sqrt{x+3}}$: minimum $(-2,-2)$.`, S`$f''(x)=\frac{3x+12}{4(x+3)^{3/2}}\gt0$: concave up throughout.`], ans: S`minimum $(-2,-2)$; starts at $(-3,0)$; concave up` },
  { title: "Matching f, f′, f″", q: S`For $f(x)=-x^3+3x^2$, which graph is which?`,
    fig: F({ view: { xmin: -1.5, xmax: 3.5, ymin: -5, ymax: 6 }, curves: [{ f: (x) => -(x ** 3) + 3 * x * x }, { f: (x) => -3 * x * x + 6 * x, color: "blue" }, { f: (x) => -6 * x + 6, color: "amber" }], step: { x: 0.5, y: 1 } }),
    steps: [S`Violet has horizontal tangents at 0 and 2, where blue is 0.`, S`Blue has its vertex at 1, where amber is 0.`], ans: S`violet $f$, blue $f'$, amber $f''$` },
  { title: "Intercepts and end behaviour", q: S`Sketch $f(x)=x(x-3)^2(x+2)$ using intercepts and end behaviour only.`,
    fig: F({ view: { xmin: -3, xmax: 4.5, ymin: -12, ymax: 25 }, curves: [{ f: (x) => x * (x - 3) ** 2 * (x + 2) }], points: [pt(-2, 0), pt(0, 0), pt(3, 0)], step: { x: 1, y: 5 } }),
    steps: [S`Degree 4, positive leading coefficient: up at both ends.`, S`Crosses at $-2$ and $0$; touches (double root) at $3$.`], ans: "up at both ends; crosses at −2 and 0, touches at 3" },
  { title: "Building from conditions", q: S`Sketch a function with vertical asymptote $x=2$, horizontal asymptote $y=1$, $f'\lt0$ wherever it is defined, $f''\lt0$ for $x\lt2$ and $f''\gt0$ for $x\gt2$.`,
    fig: F({ view: V9, curves: rat((x) => (x - 1) / (x - 2), [2], V9), vlines: [{ x: 2, color: "red", dash: true }], lines: [{ m: 0, b: 1, color: "red", dash: true }], step: { x: 1, y: 1 } }),
    steps: [S`Both branches fall; the left one bends down, the right one up.`, S`One example: $f(x)=\frac{x-1}{x-2}=1+\frac1{x-2}$.`], ans: S`for example $f(x)=\frac{x-1}{x-2}$` },
];

const PROBLEMS = [
  { level: 1, q: S`Find the x-intercepts of $f(x)=x^3-4x$.`, recap: "Factor.", ans: S`$0$, $\pm2$` },
  { level: 1, q: S`Describe the end behaviour of $f(x)=-x^4+3x$.`, recap: "Leading term.", ans: "falls at both ends" },
  { level: 1, q: S`What symmetry does $f(x)=x^3-5x$ have?`, recap: "f(−x).", ans: "odd: symmetric about the origin" },
  { level: 2, q: S`Sketch $f(x)=x^3-3x+2$, labelling the extrema and the inflection point.`, recap: "f′ = 3(x² − 1).", ans: S`max $(-1,4)$, min $(1,0)$, inflection $(0,2)$`, fig: gridT({ xmin: -3, xmax: 3, ymin: -2, ymax: 6 }, { x: 1, y: 1 }) },
  { level: 2, q: S`Find the key points of $f(x)=x^4-2x^2-8$.`, recap: "Factor (x² − 4)(x² + 2).", ans: S`intercepts $(\pm2,0)$, $(0,-8)$; minima $(\pm1,-9)$; maximum $(0,-8)$; inflection at $x=\pm\frac1{\sqrt3}$` },
  { level: 2, q: S`Find the asymptotes and extremum of $f(x)=\frac{x+1}{(x-1)^2}$.`, recap: "f′ = −(x + 3)/(x − 1)³.", ans: S`$x=1$ (up on both sides), $y=0$; minimum $\left(-3,-\frac18\right)$` },
  { level: 2, q: S`Find and classify the critical points of $f(x)=x-3x^{1/3}$.`, recap: "Write f′ with a cube root; it does not exist at 0.", ans: S`max $(-1,2)$, min $(1,-2)$; vertical tangent at $(0,0)$` },
  { level: 2, q: S`Sketch the graph of $y=f'(x)$ for $f(x)=x^3-6x^2+9x+1$.`, recap: "f′ = 3(x − 1)(x − 3).", ans: "an upward parabola with zeros at 1 and 3, vertex (2, −3)", fig: gridT({ xmin: -1, xmax: 5, ymin: -4, ymax: 10 }, { x: 1, y: 1 }) },
  { level: 3, space: 5, q: S`Sketch $f(x)=\frac{x^2-1}{x^2}$ with all key features.`, recap: "f = 1 − 1/x².", ans: S`asymptotes $x=0$ (down on both sides), $y=1$; intercepts $(\pm1,0)$; decreasing for $x\lt0$, increasing for $x\gt0$; concave down everywhere` },
  { level: 3, space: 5, q: S`Find and classify the critical points of $f(x)=x^3(x-5)^2$ and sketch the graph.`, recap: "f′ = x²(x − 5)(5x − 15).", ans: S`max $(3,108)$; min $(5,0)$; flat point (no extremum) at $(0,0)$`, fig: gridT({ xmin: -1, xmax: 6, ymin: -20, ymax: 120 }, { x: 1, y: 20 }) },
  { level: 3, space: 5, q: S`Sketch a function with $f(0)=0$, $f'(2)=0$, $f'(x)\gt0$ for all other $x$, $f''\lt0$ for $x\lt2$ and $f''\gt0$ for $x\gt2$. Give an example equation.`, recap: "A flat inflection point at x = 2.", ans: S`for example $f(x)=(x-2)^3+8$` },
  { level: 3, space: 5, q: S`Find the cubic $f(x)=ax^3+bx+c$ with a local maximum at $(-1,6)$ and a local minimum at $(1,2)$.`, recap: "f′ = k(x² − 1).", ans: S`$f(x)=x^3-3x+4$` },
  { level: 3, space: 5, q: S`Sketch $f(x)=\frac{x^2+x-2}{x-3}$: asymptotes and extrema (2 decimals).`, recap: "Divide: x + 4 + 10/(x − 3).", ans: S`$x=3$, $y=x+4$; max $(-0.16,0.68)$, min $(6.16,13.32)$` },
];

export const WS = {
  code: "3.5",
  title: "Putting It All Together",
  bigideas: S`A complete curve sketch follows a fixed order: domain and vertical asymptotes; intercepts and symmetry; end behaviour (leading term, horizontal or oblique asymptote); critical numbers, intervals of increase and decrease and extrema from $f'$; concavity and inflection points from $f''$. Summarize the signs in one table, plot the key points, then join them following the table. The graphs of $f$, $f'$ and $f''$ are linked: zeros of $f'$ line up with horizontal tangents of $f$, zeros of $f''$ with its inflection points.`,
  goals: ["Follow the full sketching algorithm.", "Organize sign information in a table.", "Sketch polynomial, rational and root functions.", "Match f, f′ and f″."],
  curriculum: "B1.1, B1.5",
  vocab: [["Summary table", "signs of $f'$ and $f''$ by interval"], ["End behaviour", "$x\\to\\pm\\infty$"], ["Flat inflection point", "$f'=0$ and concavity changes"]],
  hook: S`A classmate plots 20 points of $y=x^4-2x^2$ from $x=-5$ to $x=5$ in steps of 0.5. Will the plot show the two dips? Why might it miss features?`,
  concepts: [
    ["1. One table, one sketch", S`$f(x)=-x^3+3x^2+9x-2$ with its extrema and inflection point:
${F({ view: { xmin: -3, xmax: 5, ymin: -12, ymax: 30 }, curves: [{ f: (x) => -(x ** 3) + 3 * x * x + 9 * x - 2 }], points: [pt(-1, -7), pt(3, 25), pt(1, 9), pt(0, -2)], step: { x: 1, y: 5 } })}`],
    ["2. The order", S`Domain $\to$ intercepts $\to$ end behaviour $\to f'\to f''\to$ sketch.`],
    ["3. Linked graphs", S`Zeros of $f'$ $\leftrightarrow$ turning points of $f$; zeros of $f''$ $\leftrightarrow$ inflection points.`],
  ],
  tips: ["Label every key point.", "Draw asymptotes dashed.", "Smooth turns at extrema; corners only where f′ does not exist.", "Check end behaviour.", "A double root touches the axis."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
