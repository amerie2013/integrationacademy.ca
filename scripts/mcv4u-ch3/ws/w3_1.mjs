// MCV4U Worksheet 3.1 — Increasing and Decreasing Functions (teacher edition)
import { F, gridT, pt } from "./figT.mjs";
import { chartT } from "../csign.mjs";
import { tvT } from "../../mcr3u-extables.mjs";
import { field, box, can, poster } from "../diagrams.mjs";

const S = String.raw;
const rat = (f, poles, v, color = "violet") => {
  const cuts = [v.xmin, ...poles, v.xmax];
  return cuts.slice(0, -1).map((a, i) => ({ f, a: i === 0 ? a : a + 0.004, b: i === cuts.length - 2 ? cuts[i + 1] : cuts[i + 1] - 0.004, color }));
};
const VR = { xmin: -4, xmax: 11, ymin: -6, ymax: 30 };

const EXAMPLES = [
  { title: "A cubic", q: S`Find the intervals of increase and decrease of $f(x)=x^3+6x^2-15x$.`,
    fig: F({ view: { xmin: -8, xmax: 4, ymin: -30, ymax: 110 }, curves: [{ f: (x) => x ** 3 + 6 * x * x - 15 * x }], points: [pt(-5, 100), pt(1, -8)], step: { x: 1, y: 20 } }),
    steps: [S`\textbf{Rule:} $f$ rises where $f'>0$ and falls where $f'<0$; a polynomial $f'$ changes sign only at its zeros.`,
      S`\textbf{Factor:} $f'(x)=3x^2+12x-15=3(x^2+4x-5)=3(x+5)(x-1)$.`,
      S`\textbf{Critical numbers:} $x=-5$ and $x=1$. Test one value in each interval (chart below).`,
      S`\textbf{Check:} $f(-5)=-125+150+75=100$ and $f(1)=1+6-15=-8$: the graph peaks at $(-5,100)$ and bottoms at $(1,-8)$ \checkmark`],
    tab: chartT({ cuts: [[-5, "-5"], [1, "1"]], factors: [["x+5", (x) => x + 5], ["x-1", (x) => x - 1]], d: ["f'(x)", (x) => 3 * x * x + 12 * x - 15] }),
    ans: S`increasing on $(-\infty,-5)$ and $(1,\infty)$; decreasing on $(-5,1)$` },
  { title: "A repeated factor", q: S`Find the intervals of increase and decrease of $f(x)=x^4-2x^3$.`,
    fig: F({ view: { xmin: -1, xmax: 2.5, ymin: -2, ymax: 3 }, curves: [{ f: (x) => x ** 4 - 2 * x ** 3 }], points: [pt(1.5, 1.5 ** 4 - 2 * 1.5 ** 3), pt(0, 0)], step: { x: 0.5, y: 0.5 } }),
    steps: [S`\textbf{Factor:} $f'(x)=4x^3-6x^2=2x^2(2x-3)$. Zeros $x=0$ and $x=\tfrac32$.`,
      S`\textbf{Key idea:} $2x^2\ge0$ on both sides of $0$, so it does not change the sign. The sign of $f'$ is the sign of $2x-3$.`,
      S`\textbf{Read the chart:} $x=0$ is a critical number with a horizontal tangent but no turn.`,
      S`\textbf{Check:} $f(1.5)=5.0625-6.75=-1.6875$, lower than $f(1)=-1$ and $f(2)=0$ \checkmark`],
    tab: chartT({ cuts: [[0, "0"], [1.5, "\\tfrac32"]], factors: [["2x^2", (x) => 2 * x * x], ["2x-3", (x) => 2 * x - 3]], d: ["f'(x)", (x) => 4 * x ** 3 - 6 * x * x] }),
    ans: S`decreasing on $(-\infty,1.5)$; increasing on $(1.5,\infty)$` },
  { title: "A quadratic", q: S`Where is $f(x)=5-4x-x^2$ increasing?`,
    fig: F({ view: { xmin: -6, xmax: 2, ymin: -3, ymax: 10 }, curves: [{ f: (x) => 5 - 4 * x - x * x }], points: [pt(-2, 9)], step: { x: 1, y: 1 } }),
    steps: [S`\textbf{Derivative:} $f'(x)=-4-2x$.`,
      S`\textbf{Solve $f'>0$:} $-4-2x>0\iff-2x>4\iff x<-2$ (dividing by $-2$ flips the sign).`,
      S`\textbf{Meaning:} the parabola opens down, so it rises up to its vertex at $x=-2$ and falls after.`,
      S`\textbf{Check:} vertex $x=-\tfrac{b}{2a}=-\tfrac{-4}{2(-1)}=-2$, $f(-2)=9$ \checkmark`],
    tab: chartT({ cuts: [[-2, "-2"]], d: ["f'(x)", (x) => -4 - 2 * x] }),
    ans: S`on $(-\infty,-2)$` },
  { title: "From a factored derivative", q: S`$f'(x)=x(x-2)^2(x+3)$. Find the intervals of increase and decrease of $f$.`,
    fig: F({ view: { xmin: -4, xmax: 3.5, ymin: -12, ymax: 12 }, curves: [{ f: (x) => x * (x - 2) ** 2 * (x + 3), color: "blue" }], points: [pt(-3, 0), pt(0, 0), pt(2, 0)], step: { x: 1, y: 2 } }, 6.5, "the graph of $f'$"),
    steps: [S`\textbf{Zeros of $f'$:} $x=-3$, $0$ and $2$.`,
      S`\textbf{Signs of the factors:} $x$ and $x+3$ change sign at their zeros; $(x-2)^2$ never does.`,
      S`\textbf{Multiply the signs} in each interval (chart below).`,
      S`\textbf{Check:} $f'(1)=1\cdot1\cdot4=4>0$ and $f'(3)=3\cdot1\cdot6=18>0$: rising on both sides of $2$ \checkmark`],
    tab: chartT({ cuts: [[-3, "-3"], [0, "0"], [2, "2"]], factors: [["x+3", (x) => x + 3], ["x", (x) => x], ["(x-2)^2", (x) => (x - 2) ** 2]], d: ["f'(x)", (x) => x * (x - 2) ** 2 * (x + 3)] }),
    ans: S`increasing on $(-\infty,-3)$ and $(0,\infty)$; decreasing on $(-3,0)$` },
  { title: "A rational function", q: S`Find the intervals of increase and decrease of $f(x)=\frac{x^2}{x-3}$.`,
    fig: F({ view: VR, curves: rat((x) => (x * x) / (x - 3), [3], VR), vlines: [{ x: 3, color: "red", dash: true }], points: [pt(0, 0), pt(6, 12)], step: { x: 1, y: 4 } }),
    steps: [S`\textbf{Quotient rule:} $f'(x)=\frac{2x(x-3)-x^2}{(x-3)^2}=\frac{x^2-6x}{(x-3)^2}=\frac{x(x-6)}{(x-3)^2}$.`,
      S`\textbf{Cut points:} zeros $0$ and $6$, and the asymptote $x=3$ (where $f$ is not defined).`,
      S`\textbf{Sign:} $(x-3)^2>0$, so the sign is that of $x(x-6)$.`,
      S`\textbf{Values:} $f(0)=0$ (max), $f(6)=\frac{36}{3}=12$ (min).`],
    tab: chartT({ cuts: [[0, "0"], [3, "3"], [6, "6"]], undef: [3], d: ["f'(x)", (x) => (x * (x - 6)) / (x - 3) ** 2] }),
    ans: S`increasing on $(-\infty,0)$ and $(6,\infty)$; decreasing on $(0,3)$ and $(3,6)$` },
  { title: "A root function", q: S`Find the intervals of increase and decrease of $f(x)=\sqrt x\,(5-x)$, $x\ge0$.`,
    fig: F({ view: { xmin: 0, xmax: 6, ymin: -4, ymax: 5.5 }, curves: [{ f: (x) => Math.sqrt(x) * (5 - x), a: 0, b: 6 }], points: [pt(5 / 3, Math.sqrt(5 / 3) * (10 / 3))], step: { x: 1, y: 1 } }),
    steps: [S`\textbf{Rewrite:} $f(x)=5x^{1/2}-x^{3/2}$.`,
      S`\textbf{Derivative:} $f'(x)=\tfrac52x^{-1/2}-\tfrac32x^{1/2}=\frac{5-3x}{2\sqrt x}$ (common denominator $2\sqrt x$).`,
      S`\textbf{Sign:} $2\sqrt x>0$ for $x>0$, so the sign is that of $5-3x$: zero at $x=\tfrac53$.`,
      S`\textbf{Check:} $f\!\left(\tfrac53\right)=\sqrt{\tfrac53}\cdot\tfrac{10}{3}\approx4.30$, above $f(1)=4$ and $f(3)\approx3.46$ \checkmark`],
    tab: chartT({ from: [0, "0"], cuts: [[5 / 3, "\\tfrac53"]], d: ["f'(x)", (x) => (5 - 3 * x) / (2 * Math.sqrt(x))] }),
    ans: S`increasing on $\left(0,\frac53\right)$; decreasing on $\left(\frac53,\infty\right)$` },
  { title: "Reading the graph of f′", q: S`The graph of $f'(x)=4-x^2$ is shown. Where is $f$ increasing, and where does it have a local maximum?`,
    fig: F({ view: { xmin: -3.5, xmax: 3.5, ymin: -5, ymax: 5 }, curves: [{ f: (x) => 4 - x * x, color: "blue" }], points: [pt(-2, 0), pt(2, 0)], step: { x: 1, y: 1 } }, 6.5, "the graph of $f'$"),
    steps: [S`\textbf{Read heights as slopes:} above the axis means $f'>0$, so $f$ rises.`,
      S`\textbf{Zeros:} the graph crosses at $x=\pm2$.`,
      S`\textbf{Sign changes:} at $x=2$, $f'$ goes $+\to-$: local max. At $x=-2$, $-\to+$: local min.`,
      S`\textbf{Check:} $f(x)=4x-\tfrac13x^3$ has this derivative and peaks at $x=2$ \checkmark`],
    tab: chartT({ cuts: [[-2, "-2"], [2, "2"]], d: ["f'(x)", (x) => 4 - x * x] }),
    ans: S`increasing on $(-2,2)$; local maximum at $x=2$` },
  { title: "A temperature model", q: S`A temperature is $T(t)=t^3-15t^2+63t+10$ °C for $0\le t\le10$ h. When is it rising?`,
    fig: F({ view: { xmin: 0, xmax: 10.5, ymin: 0, ymax: 150 }, curves: [{ f: (t) => t ** 3 - 15 * t * t + 63 * t + 10, a: 0, b: 10 }], points: [pt(3, 91), pt(7, 59), pt(10, 140)], step: { x: 1, y: 20 } }),
    steps: [S`\textbf{Meaning:} $T'(t)$ is the rate of change in °C per hour; rising means $T'(t)>0$.`,
      S`\textbf{Factor:} $T'(t)=3t^2-30t+63=3(t^2-10t+21)=3(t-3)(t-7)$.`,
      S`\textbf{Both zeros} $3$ and $7$ lie in $[0,10]$.`,
      S`\textbf{Check:} $T(0)=10$, $T(3)=91$, $T(7)=59$, $T(10)=140$: up, down, up \checkmark`],
    tab: chartT({ v: "t", f: "T", from: [0, "0"], to: [10, "10"], cuts: [[3, "3"], [7, "7"]], d: ["T'(t)", (t) => 3 * t * t - 30 * t + 63] }),
    ans: S`rising for $0\le t\lt3$ and $7\lt t\le10$; falling on $(3,7)$` },
  { title: "A parameter", q: S`For which $k$ is $f(x)=x^3-3x^2+kx$ increasing for all $x$?`,
    fig: F({ view: { xmin: -1, xmax: 3, ymin: -5, ymax: 5 }, curves: [{ f: (x) => x ** 3 - 3 * x * x + 3 * x, color: "violet" }, { f: (x) => x ** 3 - 3 * x * x, color: "amber" }], points: [pt(1, 1)], step: { x: 1, y: 1 } }, 6.5, "violet: $k=3$; amber: $k=0$ (dips)"),
    steps: [S`\textbf{Condition:} we need $f'(x)=3x^2-6x+k\ge0$ for every $x$.`,
      S`\textbf{Complete the square:} $f'(x)=3(x-1)^2+(k-3)$. Its smallest value is $k-3$, at $x=1$.`,
      S`\textbf{Solve:} $k-3\ge0$, so $k\ge3$.`,
      S`\textbf{Check by discriminant:} $36-12k\le0\iff k\ge3$ \checkmark. At $k=3$ the graph only levels off at $(1,1)$.`],
    ans: S`$k\ge3$` },
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
