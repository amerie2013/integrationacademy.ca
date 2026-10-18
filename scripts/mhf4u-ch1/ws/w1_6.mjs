// MHF4U Worksheet 1.6 — Slopes of Tangents and Instantaneous Rate of Change (teacher edition)
import { F, gridT, pt } from "./figT.mjs";

const EXAMPLES = [
  { title: "Secants that shrink", q: String.raw`Estimate the instantaneous rate of change of $f(x)=x^2$ at $x=3$ using $h=0.1$ and $h=0.01$.`,
    fig: F({ view: { xmin: 0, xmax: 5, ymin: -1, ymax: 18 }, curves: [{ f: (x) => x * x }, { f: (x) => 6 * x - 9, color: "red", a: 1.6, b: 4.6 }], points: [pt(3, 9)], step: { x: 1, y: 2 } }),
    steps: [String.raw`$h=0.1$: $\dfrac{9.61-9}{0.1}=6.1$.`, String.raw`$h=0.01$: $\dfrac{9.0601-9}{0.01}=6.01$. The values approach 6.`], ans: "≈ 6 (the slope of the red tangent)" },
  { title: "A centred interval", q: String.raw`Estimate the instantaneous rate of change of $f(x)=2x^3$ at $x=1$ using $[0.99,1.01]$.`,
    steps: [String.raw`$f(1.01)=2.060602$, $f(0.99)=1.940598$.`, String.raw`$\dfrac{2.060602-1.940598}{0.02}=6.0002$.`], ans: "≈ 6" },
  { title: "From a table", q: String.raw`At $t=2.9, 3, 3.1$ s an object has travelled $33.64, 36, 38.44$ m. Estimate its speed at $t=3$.`,
    steps: [String.raw`Use the centred interval: $\dfrac{38.44-33.64}{3.1-2.9}=\dfrac{4.8}{0.2}=24$.`], ans: "≈ 24 m/s" },
  { title: "Read a tangent from a graph", q: String.raw`The tangent to $y=0.25x^2$ at $(2,1)$ also passes through $(4,3)$. Find the instantaneous rate of change at $x=2$.`,
    fig: F({ view: { xmin: -1, xmax: 5, ymin: -1, ymax: 6 }, curves: [{ f: (x) => 0.25 * x * x }, { f: (x) => x - 1, color: "red", a: 0, b: 5 }], points: [pt(2, 1), pt(4, 3)], step: { x: 1, y: 1 } }),
    steps: [String.raw`Slope of the tangent: $\dfrac{3-1}{4-2}=1$.`], ans: "1" },
  { title: "Signs of the rate", q: String.raw`For $y=-x^3+3x$, is the instantaneous rate of change positive, negative or zero at $x=0$, $x=1$ and $x=2$?`,
    fig: F({ view: { xmin: -2.5, xmax: 2.5, ymin: -4, ymax: 4 }, curves: [{ f: (x) => -(x ** 3) + 3 * x, color: "violet" }], points: [pt(0, 0, "A"), pt(1, 2, "B"), pt(2, -2, "C")], step: { x: 1, y: 1 } }),
    steps: [String.raw`A: the graph is rising, so positive. B: a turning point, the tangent is horizontal, so zero.`, String.raw`C: falling, so negative.`], ans: "positive, zero, negative" },
  { title: "Exponential growth rate", q: String.raw`Estimate the rate of change of $A(t)=500(1.1)^t$ at $t=5$ using $[4.99,5.01]$.`,
    steps: [String.raw`$A(5.01)\approx806.023$ and $A(4.99)\approx804.488$.`, String.raw`$\dfrac{806.023-804.488}{0.02}\approx76.75$.`], ans: String.raw`$\approx76.75$ per year` },
  { title: "An exact slope with h", q: String.raw`Find the slope of the tangent to $f(x)=x^2+3x$ at $x=1$ using $\dfrac{f(1+h)-f(1)}{h}$.`,
    steps: [String.raw`$f(1+h)=1+2h+h^2+3+3h=4+5h+h^2$; $f(1)=4$.`, String.raw`$\dfrac{5h+h^2}{h}=5+h\to5$ as $h\to0$.`], ans: "5" },
  { title: "Equation of the tangent", q: String.raw`Write the equation of the tangent to $f(x)=x^2+3x$ at $x=1$.`,
    steps: [String.raw`Point $(1,4)$; slope 5 (from the previous example).`, String.raw`$y-4=5(x-1)$, so $y=5x-1$.`], ans: String.raw`$y=5x-1$` },
  { title: "A falling object", q: String.raw`An object has fallen $d(t)=4.9t^2$ m after $t$ s. Find its exact speed at $t=2$.`,
    steps: [String.raw`$\dfrac{4.9(2+h)^2-19.6}{h}=\dfrac{19.6h+4.9h^2}{h}=19.6+4.9h$.`, String.raw`As $h\to0$: $19.6$ m/s.`], ans: "19.6 m/s" },
];

const PROBLEMS = [
  { level: 1, q: String.raw`Find the slope of the secant to $f(x)=x^2$ from $x=2$ to $x=2.01$, and use it to estimate the slope of the tangent at $x=2$.`, recap: "Shrinking secant.", ans: "4.01; ≈ 4" },
  { level: 1, q: String.raw`On $y=x^2-4$, is the instantaneous rate of change positive, negative or zero at A, B and C?`, recap: "Signs.", ans: "negative, zero, positive",
    fig: F({ view: { xmin: -3, xmax: 3, ymin: -5, ymax: 5 }, curves: [{ f: (x) => x * x - 4 }], points: [pt(-1, -3, "A"), pt(0, -4, "B"), pt(2, 0, "C")], step: { x: 1, y: 1 } }) },
  { level: 1, q: String.raw`A tangent line passes through $(1,2)$ and $(3,8)$. What is its slope?`, recap: "Tangent slope.", ans: "3" },
  { level: 2, q: String.raw`Estimate the instantaneous rate of change of $f(x)=x^3$ at $x=-1$ using $[-1.01,-0.99]$.`, recap: "Centred interval.", ans: String.raw`$\tfrac{0.060002}{0.02}\approx3$` },
  { level: 2, q: String.raw`A ball's height is $h(t)=-4.9t^2+25t$ m. Estimate its velocity at $t=2$ with a centred interval of half-width 0.01.`, recap: "Instantaneous velocity.", ans: "5.4 m/s" },
  { level: 2, q: String.raw`At $t=4.9, 5, 5.1$ min a tank holds $120.4, 125, 129.8$ L. Estimate the rate of change at $t=5$.`, recap: "From a table.", ans: String.raw`$\tfrac{9.4}{0.2}=47$ L/min` },
  { level: 2, q: String.raw`Draw the tangent to $y=0.5x^2$ at $x=-2$ and estimate its slope from two points on your line.`, recap: "Tangent from a graph.", ans: "≈ −2 (exact −2)",
    fig: F({ view: { xmin: -4, xmax: 2, ymin: -3, ymax: 6 }, curves: [{ f: (x) => 0.5 * x * x }], points: [pt(-2, 2)], step: { x: 1, y: 1 } }) },
  { level: 2, q: String.raw`Use $\dfrac{f(4+h)-f(4)}{h}$ to find the exact slope of the tangent to $f(x)=x^2-5x$ at $x=4$.`, recap: "Exact slope.", ans: String.raw`$3+h\to3$` },
  { level: 3, space: 5, q: String.raw`Find the equation of the tangent to $f(x)=2x^2-x$ at $x=1$.`, recap: "Tangent equation.", ans: String.raw`slope $3+2h\to3$; point $(1,1)$: $y=3x-2$` },
  { level: 3, space: 5, q: String.raw`Show that the slope of the tangent to $y=x^2-6x+5$ at $x=a$ is $2a-6$. Where is the tangent horizontal?`, recap: "General point.", ans: String.raw`$\tfrac{f(a+h)-f(a)}{h}=2a-6+h$; horizontal at $(3,-4)$` },
  { level: 3, space: 5, q: String.raw`Show that the slope of the tangent to $y=x^3$ at $x=a$ is $3a^2$. At which points is the slope 12?`, recap: "Tangent slope of a cubic.", ans: String.raw`$3a^2+3ah+h^2\to3a^2$; $(2,8)$ and $(-2,-8)$` },
  { level: 3, space: 5, q: String.raw`A population is $P(t)=200(1.5)^t$. Compare the average rate of change on $[2,4]$ with an estimate of the instantaneous rate at $t=3$. Explain which is larger using the shape of the graph.`, recap: "Average vs instantaneous.", ans: String.raw`average $281.25$; instantaneous $\approx273.7$; the graph curves upward, so the secant is steeper` },
  { level: 3, space: 5, q: String.raw`For $y=x^3-12x$, the slope of the tangent at $x=a$ is $3a^2-12$. Find the turning points and sketch the graph.`, recap: "Turning points from slopes.", ans: String.raw`$3a^2-12=0$: $a=\pm2$; $(-2,16)$ and $(2,-16)$`, fig: gridT({ xmin: -5, xmax: 5, ymin: -20, ymax: 20 }, { x: 1, y: 4 }) },
];

export const WS = {
  code: "1.6",
  title: "Slopes of Tangents and Instantaneous Rate of Change",
  bigideas: String.raw`The instantaneous rate of change at a point is the slope of the tangent there. Estimate it with secants over shrinking intervals, or with a short centred interval. Using a general $h$, $\dfrac{f(a+h)-f(a)}{h}$ simplifies to an expression whose value as $h\to0$ is the exact tangent slope. At a turning point the tangent is horizontal and the rate is 0.`,
  goals: ["Estimate instantaneous rates with secants.", "Use centred intervals and tables.", "Find exact tangent slopes with h.", "Write equations of tangent lines."],
  curriculum: "D1.5–D1.9",
  vocab: [["Tangent", "the line that touches a curve at a point and matches its slope there"], ["Instantaneous rate", "slope of the tangent"], ["Difference quotient", "$\\dfrac{f(a+h)-f(a)}{h}$"]],
  hook: String.raw`A speedometer shows 72 km/h. Over what time interval was that speed measured?`,
  concepts: [
    ["1. Secants → tangent", String.raw`As the second point moves closer, secant slopes approach the tangent slope.
${F({ view: { xmin: -0.5, xmax: 4, ymin: -1, ymax: 9 }, curves: [{ f: (x) => 0.5 * x * x }, { f: (x) => 2.5 * x - 2, color: "amber", a: 0.5, b: 4 }, { f: (x) => 2 * x - 2, color: "red", a: 0.5, b: 4 }], points: [pt(2, 2, "P"), pt(3, 4.5, "Q")], step: { x: 1, y: 1 } })}`],
    ["2. Centred estimate", String.raw`$\dfrac{f(a+h)-f(a-h)}{2h}$ is usually closer than a one-sided secant.`],
    ["3. Exact value", String.raw`Simplify the difference quotient, then let $h\to0$.`],
  ],
  tips: ["Cancel h before letting h → 0.", "Expand (a + h)² carefully.", "Horizontal tangent: rate 0.", "Keep enough decimals in estimates.", "Use point-slope form for tangent lines."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
