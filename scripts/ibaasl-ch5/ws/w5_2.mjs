// IB AA SL Worksheet 5.2 — The Derivative Function (teacher edition)
import { F, gridT, pt } from "./figT.mjs";

const S = String.raw;

const EXAMPLES = [
  { title: "Secant gradient", q: S`For $f(x)=x^2$, find the gradient of the secant from $x=1$ to $x=1.5$.`,
    steps: [S`$\frac{2.25-1}{0.5}$.`], ans: "2.5" },
  { title: "Shrinking h", q: S`For $f(x)=x^3$, find secant gradients from $x=1$ with $h=0.1$ and $h=0.01$, and guess $f'(1)$.`,
    steps: [S`$\frac{1.331-1}{0.1}=3.31$; $\frac{1.030301-1}{0.01}=3.0301$.`], ans: S`$f'(1)=3$` },
  { title: "First principles: linear", q: S`Use first principles to differentiate $f(x)=5x-2$.`,
    steps: [S`$\frac{5(x+h)-2-(5x-2)}{h}=\frac{5h}{h}=5$.`], ans: "5" },
  { title: "First principles: quadratic", q: S`Use first principles to differentiate $f(x)=x^2-4x$.`,
    steps: [S`$\frac{2xh+h^2-4h}{h}=2x+h-4\to2x-4$.`], ans: S`$2x-4$` },
  { title: "First principles: scaled", q: S`Use first principles to differentiate $f(x)=-2x^2+3$.`,
    steps: [S`$\frac{-4xh-2h^2}{h}=-4x-2h\to-4x$.`], ans: S`$-4x$` },
  { title: "Reading a graph", q: "State where f′(x) > 0, f′(x) < 0 and f′(x) = 0 for the graph shown.",
    fig: F({ view: { xmin: -4, xmax: 3, ymin: -3, ymax: 6 }, curves: [{ f: (x) => -((x + 1) ** 2) + 4 }], points: [pt(-1, 4, null, "red")] }),
    steps: ["Increasing to the left of the maximum at x = −1, decreasing to the right."], ans: S`$f'>0$ for $x<-1$; $f'<0$ for $x>-1$; $f'(-1)=0$` },
  { title: "Sketching f′", q: S`Sketch the graph of $f'$ for $f(x)=x^2-6x$.`,
    fig: F({ view: { xmin: -1, xmax: 7, ymin: -10, ymax: 8 }, curves: [{ f: (x) => x * x - 6 * x }, { f: (x) => 2 * x - 6, color: "amber" }], points: [pt(3, -9), pt(3, 0, null, "amber")] }),
    steps: ["Minimum at x = 3, so f′ crosses zero there; f′ is a straight line, negative then positive."], ans: S`$f'(x)=2x-6$` },
  { title: "A tangent", q: S`Using $\frac{d}{dx}(x^2)=2x$, find the tangent to $y=x^2$ at $x=-3$.`,
    steps: [S`Point $(-3,9)$, gradient $-6$.`, S`$y-9=-6(x+3)$.`], ans: S`$y=-6x-9$` },
  { title: "Rate of change", q: S`A balloon's volume is $V=t^2+3t$ litres after $t$ seconds. Find $V'(t)$ from first principles and the rate at $t=4$.`,
    steps: [S`$\frac{2th+h^2+3h}{h}\to2t+3$.`], ans: "11 L/s" },
];

const PROBLEMS = [
  { level: 1, q: S`For $f(x)=x^2$, find the gradient of the secant from $x=2$ to $x=4$.`, recap: "Secant.", ans: "6" },
  { level: 1, q: S`Given $f'(x)=2x$ for $f(x)=x^2$, find the gradient at $x=5$.`, recap: "Gradient.", ans: "10" },
  { level: 1, q: S`On which side of a maximum point is $f'(x)<0$?`, recap: "Sign of f′.", ans: "the right" },
  { level: 2, q: S`Use first principles to differentiate $f(x)=3x^2$.`, recap: "First principles.", ans: S`$6x$` },
  { level: 2, q: S`Use first principles to differentiate $f(x)=x^2+7x$.`, recap: "First principles.", ans: S`$2x+7$` },
  { level: 2, q: S`Sketch $f'$ for the graph of $f(x)=4-x^2$ on the grid.`, recap: "Sketch f′.", ans: S`the line $y=-2x$`, fig: gridT({ xmin: -4, xmax: 4, ymin: -8, ymax: 8 }) },
  { level: 2, q: S`$f'(x)=2x-8$. Find the x-coordinate of the turning point of $f$.`, recap: "Turning point.", ans: "4" },
  { level: 2, q: S`For $f(x)=x^3$, find the tangent gradient at $x=-2$ (use $3x^2$).`, recap: "Cubic gradient.", ans: "12" },
  { level: 3, space: 4, q: S`Use first principles to differentiate $f(x)=x^3+x$.`, recap: "Cubic from first principles.", ans: S`$3x^2+1$` },
  { level: 3, space: 4, q: S`Use first principles on $f(x)=2x^2-5x$, then find where the tangent is horizontal.`, recap: "Horizontal tangent.", ans: S`$4x-5$; $x=1.25$` },
  { level: 3, space: 4, q: S`The graph of $f$ has a maximum at $x=-1$ and a minimum at $x=2$. Describe the graph of $f'$.`, recap: "Shape of f′.", ans: S`zeros at $-1$ and $2$; negative between them, positive outside`,
    fig: F({ view: { xmin: -3, xmax: 4, ymin: -6, ymax: 6 }, curves: [{ f: (x) => 2 * x ** 3 / 3 - x * x - 4 * x + 1 }] }) },
  { level: 3, space: 4, q: S`A stone falls $d=4.9t^2$ m. Find its speed after 3 s, using first principles.`, recap: "Rate.", ans: S`$9.8t$: 29.4 m/s` },
  { level: 3, space: 4, q: S`Find the point on $y=x^2$ where the tangent is parallel to $y=8x+1$.`, recap: "Given gradient.", ans: S`$(4,16)$` },
];

export const WS = {
  code: "5.2",
  title: "The Derivative Function",
  bigideas: S`The tangent gradient is the limit of secant gradients: $f'(x)=\lim_{h\to0}\frac{f(x+h)-f(x)}{h}$. The derivative is a new function giving the gradient (rate of change) everywhere; notation $f'(x)$ or $\frac{dy}{dx}$. Where $f$ increases $f'>0$, where it decreases $f'<0$, and at turning points $f'=0$.`,
  goals: ["Find secant gradients.", "Differentiate from first principles.", "Sketch f′ from f.", "Interpret rates of change."],
  curriculum: "SL 5.1, SL 5.2",
  vocab: [["Secant", "line through two points"], ["Tangent", "touches at one point"], ["Derivative", S`$f'(x)$, $\frac{dy}{dx}$`]],
  hook: "A car's odometer and speedometer: the odometer gives distance, the speedometer gives the rate of change at one instant. How could you get the speed from odometer readings alone?",
  concepts: [
    ["1. Secant to tangent", S`${F({ view: { xmin: -1, xmax: 3.5, ymin: -1, ymax: 9 }, curves: [{ f: (x) => x * x }, { f: (x) => 3 * (x - 1) + 1, color: "green" }, { f: (x) => 2 * (x - 1) + 1, color: "red" }], points: [pt(1, 1), pt(2, 4, null, "green")] }, 5)} Secant (green) → tangent (red).`],
    ["2. First principles", S`Expand $f(x+h)$, subtract, divide by $h$, cancel, let $h\to0$.`],
    ["3. Graph of f′", "Increasing ↔ f′ above the axis; turning points ↔ zeros of f′."],
  ],
  tips: ["(x + h)² = x² + 2xh + h².", "Cancel h before h → 0.", "f′(x) is a function; f′(2) a number.", "Use turning points as zeros of f′.", "Give rates with units."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
