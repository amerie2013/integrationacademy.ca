// MCV4U Worksheet 1.5 — Introduction to Derivatives (teacher edition)
import { F, gridT, pt } from "./figT.mjs";

const EXAMPLES = [
  { title: "A quadratic", q: String.raw`Find $f'(x)$ for $f(x)=4x^2-3x$ from first principles.`,
    steps: [String.raw`$f(x+h)-f(x)=8xh+4h^2-3h$.`, String.raw`$\frac{8xh+4h^2-3h}{h}=8x+4h-3\to8x-3$.`], ans: String.raw`$f'(x)=8x-3$` },
  { title: "A cubic", q: String.raw`Find $f'(x)$ for $f(x)=x^3+x$.`,
    steps: [String.raw`$\frac{3x^2h+3xh^2+h^3+h}{h}=3x^2+3xh+h^2+1\to3x^2+1$.`], ans: String.raw`$3x^2+1$` },
  { title: "A reciprocal", q: String.raw`Find $f'(x)$ for $f(x)=\frac2x$.`,
    steps: [String.raw`$\frac{\frac2{x+h}-\frac2x}{h}=\frac{-2}{x(x+h)}\to-\frac2{x^2}$.`], ans: String.raw`$-\frac2{x^2}$` },
  { title: "A shifted root", q: String.raw`Find $f'(x)$ for $f(x)=\sqrt{x+1}$.`,
    steps: [String.raw`Multiply by the conjugate: $\frac1{\sqrt{x+h+1}+\sqrt{x+1}}\to\frac1{2\sqrt{x+1}}$.`], ans: String.raw`$\frac1{2\sqrt{x+1}}$` },
  { title: "A quartic", q: String.raw`Find $f'(x)$ for $f(x)=x^4$.`,
    steps: [String.raw`$(x+h)^4-x^4=4x^3h+6x^2h^2+4xh^3+h^4$.`, String.raw`Divide by $h$ and let $h\to0$.`], ans: String.raw`$4x^3$` },
  { title: "Sketch f′ from f", q: String.raw`The cubic shown has turning points at $x=-1$ and $x=2$. Sketch $f'$.`,
    fig: F({ view: { xmin: -3, xmax: 4, ymin: -8, ymax: 8 }, curves: [{ f: (x) => (2 * x ** 3 - 3 * x * x - 12 * x) / 4 }, { f: (x) => (6 * x * x - 6 * x - 12) / 4, color: "blue" }], points: [pt(-1, 0, false, "blue"), pt(2, 0, false, "blue")], step: { x: 1, y: 2 } }),
    steps: [String.raw`$f'$ is 0 at $-1$ and $2$, positive outside, negative between: an upward parabola (blue).`], ans: "a parabola crossing zero at −1 and 2" },
  { title: "Match the degree", q: String.raw`If $f$ is a parabola, what kind of graph is $f'$?`,
    steps: [String.raw`A quadratic's derivative is linear (degree drops by 1).`], ans: "a line" },
  { title: "Not differentiable", q: String.raw`Where are $f(x)=|x+2|$ and the step function shown not differentiable?`,
    fig: F({ view: { xmin: -5, xmax: 3, ymin: -1, ymax: 4 }, curves: [{ f: (x) => Math.abs(x + 2) }], points: [pt(-2, 0)], step: { x: 1, y: 1 } }),
    steps: [String.raw`$|x+2|$: corner at $x=-2$. A step function: at each jump (not even continuous).`], ans: "corner at −2; at every jump" },
  { title: "Tangent from the derivative", q: String.raw`Find the tangent to $f(x)=x^2-5x$ at $x=4$.`,
    steps: [String.raw`$f'(x)=2x-5$, $f'(4)=3$; point $(4,-4)$.`, String.raw`$y+4=3(x-4)$.`], ans: String.raw`$y=3x-16$` },
];

const PROBLEMS = [
  { level: 1, q: String.raw`Find $f'(x)$ for $f(x)=6x$.`, recap: "Linear.", ans: "6" },
  { level: 1, q: String.raw`For $f(x)=x^2$, $f'(x)=2x$. Find $f'(2)$.`, recap: "Evaluate.", ans: "4" },
  { level: 1, q: String.raw`What does $\frac{dy}{dx}=5$ at $x=1$ mean?`, recap: "Notation.", ans: "the tangent slope (rate of change of y) at x = 1 is 5" },
  { level: 2, q: String.raw`Find $f'(x)$ for $f(x)=x^2+5x$ from first principles.`, recap: "Quadratic.", ans: String.raw`$2x+5$` },
  { level: 2, q: String.raw`Find $f'(x)$ for $f(x)=3-x^2$.`, recap: "Quadratic.", ans: String.raw`$-2x$` },
  { level: 2, q: String.raw`Find $f'(x)$ for $f(x)=x^3-2x^2$.`, recap: "Cubic.", ans: String.raw`$3x^2-4x$` },
  { level: 2, q: String.raw`Find $f'(x)$ for $f(x)=\frac1{x+3}$.`, recap: "Reciprocal.", ans: String.raw`$-\frac1{(x+3)^2}$` },
  { level: 2, q: String.raw`Sketch the graph of $f'$ for the function shown.`, recap: "Graph of f′.", ans: "f′ is a line crossing 0 at x = 1 with positive slope",
    fig: F({ view: { xmin: -2, xmax: 4, ymin: -3, ymax: 6 }, curves: [{ f: (x) => (x - 1) ** 2 - 2 }], step: { x: 1, y: 1 } }) },
  { level: 3, space: 5, q: String.raw`Find $f'(x)$ for $f(x)=\sqrt{2x}$ from first principles.`, recap: "Root.", ans: String.raw`$\frac{1}{\sqrt{2x}}$` },
  { level: 3, space: 5, q: String.raw`$f(x)=ax^2+bx$ has $f'(1)=5$ and $f'(3)=13$. Find $a$ and $b$.`, recap: "Use f′(x) = 2ax + b.", ans: "a = 2, b = 1" },
  { level: 3, space: 5, q: String.raw`Find the points where the tangent to $y=x^3-6x^2+9x$ is horizontal.`, recap: "f′ = 0.", ans: "(1, 4) and (3, 0)" },
  { level: 3, space: 5, q: String.raw`Explain why $f(x)=x^{2/3}$ is continuous at 0 but has no derivative there.`, recap: "Cusp.", ans: String.raw`$\frac{h^{2/3}}{h}=h^{-1/3}\to\pm\infty$: a cusp` },
  { level: 3, space: 5, q: String.raw`Find the tangent to $y=x^3$ at $x=-1$, and the other point where it meets the curve. Sketch both.`, recap: "Tangent meets again.", ans: String.raw`$y=3x+2$; $x^3-3x-2=(x+1)^2(x-2)$: $(2,8)$`, fig: gridT({ xmin: -3, xmax: 3, ymin: -6, ymax: 10 }, { x: 1, y: 2 }) },
];

export const WS = {
  code: "1.5",
  title: "Introduction to Derivatives",
  bigideas: String.raw`The derivative $f'(x)=\lim_{h\to0}\frac{f(x+h)-f(x)}{h}$ gives the tangent slope at every $x$; $\frac{dy}{dx}$ means the same. From first principles, expand or combine fractions or rationalize, cancel $h$, then let $h\to0$. The graph of $f'$ is positive where $f$ rises, negative where it falls, and zero at horizontal tangents. Functions are not differentiable at corners, cusps, vertical tangents or discontinuities.`,
  goals: ["Use the limit definition.", "Differentiate from first principles.", "Sketch f′ from f.", "Find where f′ does not exist."],
  curriculum: "A1.5–A1.8, A2.1",
  vocab: [["Derivative", "$f'(x)=\\lim_{h\\to0}\\frac{f(x+h)-f(x)}{h}$"], ["Leibniz notation", "$\\frac{dy}{dx}$"], ["Differentiable", "f′ exists"]],
  hook: String.raw`Plot the tangent slopes of $y=x^2$ at $x=-2,-1,0,1,2$. What graph do the points make?`,
  concepts: [
    ["1. f and f′", String.raw`Turning points of $f$ are zeros of $f'$.
${F({ view: { xmin: -2.5, xmax: 2.5, ymin: -4, ymax: 6 }, curves: [{ f: (x) => x ** 3 - 3 * x }, { f: (x) => 3 * x * x - 3, color: "blue" }], step: { x: 1, y: 1 } })}`],
    ["2. First principles", String.raw`Simplify, cancel $h$, let $h\to0$.`],
    ["3. Differentiability", String.raw`Smooth ⇒ differentiable; corners and cusps are not.`],
  ],
  tips: ["Replace every x with x + h.", "Keep lim until h is gone.", "f′(x) is a function; f′(a) a number.", "Degree drops by one.", "Continuous ≠ differentiable."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
