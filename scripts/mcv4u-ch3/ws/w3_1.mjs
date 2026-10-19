// MCV4U Worksheet 3.1 — Increasing and Decreasing Functions (teacher edition)
import { F, gridT, pt } from "./figT.mjs";

const S = String.raw;
const rat = (f, poles, v, color = "violet") => {
  const cuts = [v.xmin, ...poles, v.xmax];
  return cuts.slice(0, -1).map((a, i) => ({ f, a: i === 0 ? a : a + 0.004, b: i === cuts.length - 2 ? cuts[i + 1] : cuts[i + 1] - 0.004, color }));
};
const VR = { xmin: -4, xmax: 11, ymin: -6, ymax: 30 };

const EXAMPLES = [
  { title: "A cubic", q: S`Find the intervals of increase and decrease of $f(x)=x^3+6x^2-15x$.`,
    steps: [S`$f'(x)=3x^2+12x-15=3(x+5)(x-1)$.`, S`Test $-6$: $+$; $0$: $-$; $2$: $+$.`], ans: S`increasing on $(-\infty,-5)$ and $(1,\infty)$; decreasing on $(-5,1)$` },
  { title: "A repeated factor", q: S`Find the intervals of increase and decrease of $f(x)=x^4-2x^3$.`,
    fig: F({ view: { xmin: -1, xmax: 2.5, ymin: -2, ymax: 3 }, curves: [{ f: (x) => x ** 4 - 2 * x ** 3 }], points: [pt(1.5, 1.5 ** 4 - 2 * 1.5 ** 3), pt(0, 0)], step: { x: 0.5, y: 0.5 } }),
    steps: [S`$f'(x)=4x^3-6x^2=2x^2(2x-3)$.`, S`$2x^2\ge0$, so the sign is that of $2x-3$ (no change at 0).`], ans: S`decreasing on $(-\infty,1.5)$; increasing on $(1.5,\infty)$` },
  { title: "A quadratic", q: S`Where is $f(x)=5-4x-x^2$ increasing?`,
    steps: [S`$f'(x)=-4-2x\gt0\iff x\lt-2$.`], ans: S`on $(-\infty,-2)$` },
  { title: "From a factored derivative", q: S`$f'(x)=x(x-2)^2(x+3)$. Find the intervals of increase and decrease of $f$.`,
    steps: [S`Zeros $-3$, $0$, $2$.`, S`Signs: $x\lt-3$: $+$; $(-3,0)$: $-$; $(0,2)$: $+$; $x\gt2$: $+$.`], ans: S`increasing on $(-\infty,-3)$ and $(0,\infty)$; decreasing on $(-3,0)$` },
  { title: "A rational function", q: S`Find the intervals of increase and decrease of $f(x)=\frac{x^2}{x-3}$.`,
    fig: F({ view: VR, curves: rat((x) => (x * x) / (x - 3), [3], VR), vlines: [{ x: 3, color: "red", dash: true }], points: [pt(0, 0), pt(6, 12)], step: { x: 1, y: 4 } }),
    steps: [S`$f'(x)=\frac{2x(x-3)-x^2}{(x-3)^2}=\frac{x(x-6)}{(x-3)^2}$.`, S`Cut at $0$, $3$ (asymptote), $6$.`], ans: S`increasing on $(-\infty,0)$ and $(6,\infty)$; decreasing on $(0,3)$ and $(3,6)$` },
  { title: "A root function", q: S`Find the intervals of increase and decrease of $f(x)=\sqrt x\,(5-x)$, $x\ge0$.`,
    fig: F({ view: { xmin: 0, xmax: 6, ymin: -4, ymax: 5.5 }, curves: [{ f: (x) => Math.sqrt(x) * (5 - x), a: 0, b: 6 }], points: [pt(5 / 3, Math.sqrt(5 / 3) * (10 / 3))], step: { x: 1, y: 1 } }),
    steps: [S`$f=5x^{1/2}-x^{3/2}$; $f'=\frac{5}{2\sqrt x}-\frac32\sqrt x=\frac{5-3x}{2\sqrt x}$.`], ans: S`increasing on $\left(0,\frac53\right)$; decreasing on $\left(\frac53,\infty\right)$` },
  { title: "Reading the graph of f′", q: S`The graph of $f'(x)=4-x^2$ is shown. Where is $f$ increasing, and where does it have a local maximum?`,
    fig: F({ view: { xmin: -3.5, xmax: 3.5, ymin: -5, ymax: 5 }, curves: [{ f: (x) => 4 - x * x, color: "blue" }], points: [pt(-2, 0), pt(2, 0)], step: { x: 1, y: 1 } }),
    steps: [S`$f'\gt0$ on $(-2,2)$.`, S`$f'$ changes from $+$ to $-$ at $x=2$.`], ans: S`increasing on $(-2,2)$; local maximum at $x=2$` },
  { title: "A temperature model", q: S`A temperature is $T(t)=t^3-15t^2+63t+10$ °C for $0\le t\le10$ h. When is it rising?`,
    steps: [S`$T'(t)=3t^2-30t+63=3(t-3)(t-7)$.`], ans: S`rising for $0\le t\lt3$ and $7\lt t\le10$; falling on $(3,7)$` },
  { title: "A parameter", q: S`For which $k$ is $f(x)=x^3-3x^2+kx$ increasing for all $x$?`,
    steps: [S`$f'(x)=3x^2-6x+k\ge0$ for all $x$ needs discriminant $36-12k\le0$.`], ans: S`$k\ge3$` },
];

const PROBLEMS = [
  { level: 1, q: S`Where is $f(x)=x^2-8x+1$ increasing?`, recap: "f′ = 2x − 8.", ans: S`$x\gt4$` },
  { level: 1, q: S`$f'(x)\lt0$ on $(1,5)$. What does $f$ do there?`, recap: "Sign of f′.", ans: "decreases" },
  { level: 1, q: S`Find the critical numbers of $f(x)=x^3-48x$.`, recap: "Solve f′ = 0.", ans: S`$x=\pm4$` },
  { level: 2, q: S`Find the intervals of increase and decrease of $f(x)=2x^3+3x^2-12x$.`, recap: "Factor f′.", ans: S`increasing on $(-\infty,-2)$, $(1,\infty)$; decreasing on $(-2,1)$` },
  { level: 2, q: S`Find the intervals of increase and decrease of $f(x)=x^4-32x$.`, recap: "f′ = 4(x − 2)(x² + 2x + 4).", ans: S`decreasing for $x\lt2$; increasing for $x\gt2$` },
  { level: 2, q: S`Find the intervals of increase and decrease of $f(x)=\frac{x}{(x+1)^2}$.`, recap: "Cut at the asymptote too.", ans: S`$f'=\frac{1-x}{(x+1)^3}$: decreasing on $(-\infty,-1)$ and $(1,\infty)$; increasing on $(-1,1)$` },
  { level: 2, q: S`Find the intervals of increase and decrease of $f(x)=x-2\sqrt x$.`, recap: "f′ = 1 − 1/√x.", ans: S`decreasing on $(0,1)$; increasing on $(1,\infty)$` },
  { level: 2, q: S`Make a sign chart for $f'$ where $f(x)=-x^3+3x$, then sketch $f$.`, recap: "f′ = 3(1 − x²).", ans: S`increasing on $(-1,1)$; decreasing elsewhere`, fig: gridT({ xmin: -3, xmax: 3, ymin: -4, ymax: 4 }, { x: 1, y: 1 }) },
  { level: 3, space: 5, q: S`$f(x)=x^3+bx^2+cx$ is decreasing exactly on $(-1,3)$. Find $b$ and $c$.`, recap: "f′ = 3(x + 1)(x − 3).", ans: S`$b=-3$, $c=-9$` },
  { level: 3, space: 5, q: S`Show that $f(x)=x^5+x^3+x$ is increasing everywhere, and explain why the equation $f(x)=0$ has exactly one real solution.`, recap: "Sign of f′; an increasing function crosses 0 at most once.", ans: S`$f'=5x^4+3x^2+1\gt0$; $f$ is increasing and takes negative and positive values, so it crosses 0 once (at $x=0$)` },
  { level: 3, space: 5, q: S`Find the intervals of increase and decrease of $f(x)=x^{2/3}(x-5)$.`, recap: "Factor out the lowest power of x.", ans: S`$f'=\frac53x^{-1/3}(x-2)$: increasing on $(-\infty,0)$ and $(2,\infty)$; decreasing on $(0,2)$` },
  { level: 3, space: 5, q: S`Monthly sales of a new game are $S(t)=\frac{200t}{t^2+100}$ thousand, $t$ months after launch. When are sales increasing, and when decreasing?`, recap: "Quotient rule; t ≥ 0.", ans: S`$S'=\frac{200(100-t^2)}{(t^2+100)^2}$: increasing for $0\le t\lt10$, decreasing for $t\gt10$` },
  { level: 3, space: 5, q: S`Sketch a function with $f(-1)=4$, $f(2)=-1$, $f'\gt0$ for $x\lt-1$ and $x\gt2$, and $f'\lt0$ on $(-1,2)$.`, recap: "Rise, fall, rise.", ans: "local maximum (−1, 4), local minimum (2, −1); rising, falling, rising", fig: gridT({ xmin: -4, xmax: 5, ymin: -4, ymax: 7 }, { x: 1, y: 1 }) },
];

export const WS = {
  code: "3.1",
  title: "Increasing and Decreasing Functions",
  bigideas: S`A function increases where $f'(x)\gt0$ and decreases where $f'(x)\lt0$. Its derivative can only change sign at critical numbers — where $f'(x)=0$ or $f'(x)$ does not exist — and, for rational functions, at vertical asymptotes. Factor $f'$, mark these numbers on a line, and test one value in each interval to build a sign chart. A repeated (squared) factor does not change the sign.`,
  goals: ["Connect the sign of f′ with increasing/decreasing.", "Find critical numbers.", "Build sign charts, including rational functions.", "Read f from the graph of f′."],
  curriculum: "B1.1, B1.2",
  vocab: [["Increasing", "$x_1\\lt x_2\\Rightarrow f(x_1)\\lt f(x_2)$"], ["Critical number", "$f'(c)=0$ or does not exist"], ["Sign chart", "signs of $f'$ on intervals"]],
  hook: S`Trace $y=x^3-3x$ with a finger from left to right. Where does your finger go up? Where are the tangents horizontal?`,
  concepts: [
    ["1. Sign of f′, direction of f", S`$f(x)=x^3+6x^2-15x$ (violet) with $f'(x)=3(x+5)(x-1)$ (blue):
${F({ view: { xmin: -8, xmax: 4, ymin: -40, ymax: 110 }, curves: [{ f: (x) => x ** 3 + 6 * x * x - 15 * x }, { f: (x) => 3 * x * x + 12 * x - 15, color: "blue" }], points: [pt(-5, 100), pt(1, -8)], step: { x: 1, y: 20 } })}`],
    ["2. The method", S`Factor $f'$ $\to$ critical numbers $\to$ test each interval.`],
    ["3. Watch the factors", S`Even powers like $(x-2)^2$ never change sign.`],
  ],
  tips: ["Test f′, not f.", "Cut at asymptotes for rational functions.", "A squared factor does not change the sign.", "Use open intervals.", "Check the domain (roots need x ≥ 0)."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
