// IB AA SL Worksheet 5.3 — Differentiation Rules (teacher edition)
import { F, pt } from "./figT.mjs";

const S = String.raw;

const EXAMPLES = [
  { title: "A polynomial", q: S`Differentiate $y=5x^4-3x^2+x-8$.`,
    steps: ["Term by term."], ans: S`$20x^3-6x+1$` },
  { title: "Negative powers", q: S`Differentiate $f(x)=\frac{3}{x^4}$.`,
    steps: [S`$3x^{-4}\Rightarrow-12x^{-5}$.`], ans: S`$-\frac{12}{x^5}$` },
  { title: "Fractional powers", q: S`Differentiate $y=x\sqrt x$.`,
    steps: [S`$x^{3/2}\Rightarrow\frac32x^{1/2}$.`], ans: S`$\frac32\sqrt x$` },
  { title: "Expand first", q: S`Differentiate $f(x)=(x+3)(x-5)$.`,
    steps: [S`$x^2-2x-15$.`], ans: S`$2x-2$` },
  { title: "Divide first", q: S`Differentiate $y=\frac{2x^2-x}{x}$.`,
    steps: [S`$2x-1$ for $x\ne0$.`], ans: "2" },
  { title: "Gradient at a point", q: S`Find the gradient of $y=x^3-2x^2$ at $x=2$.`,
    steps: [S`$3x^2-4x=12-8$.`], ans: "4" },
  { title: "Tangent", q: S`Find the tangent to $y=x^2+3x$ at $x=1$.`,
    fig: F({ view: { xmin: -4, xmax: 3, ymin: -4, ymax: 10 }, curves: [{ f: (x) => x * x + 3 * x }, { f: (x) => 5 * x - 1, color: "red" }], points: [pt(1, 4)] }),
    steps: [S`Point $(1,4)$, gradient $2+3=5$.`], ans: S`$y=5x-1$` },
  { title: "Normal", q: S`Find the normal to $y=\frac{8}{x}$ at $x=2$.`,
    steps: [S`Point $(2,4)$; $y'=-\frac{8}{x^2}=-2$.`, S`Normal gradient $\frac12$: $y-4=\frac12(x-2)$.`], ans: S`$y=\frac12x+3$` },
  { title: "Given gradient", q: S`Find the points on $y=x^3-12x$ where the tangent is horizontal.`,
    fig: F({ view: { xmin: -4, xmax: 4, ymin: -20, ymax: 20 }, curves: [{ f: (x) => x ** 3 - 12 * x }], points: [pt(-2, 16), pt(2, -16)], step: { x: 1, y: 4 } }),
    steps: [S`$3x^2-12=0\Rightarrow x=\pm2$.`], ans: S`$(-2,16)$, $(2,-16)$` },
];

const PROBLEMS = [
  { level: 1, q: S`Differentiate $y=7x^3$.`, recap: "Power rule.", ans: S`$21x^2$` },
  { level: 1, q: S`Differentiate $f(x)=x^2-9x+4$.`, recap: "Term by term.", ans: S`$2x-9$` },
  { level: 1, q: S`Differentiate $y=12$.`, recap: "Constant.", ans: "0" },
  { level: 2, q: S`Differentiate $y=\frac{1}{x^3}+\sqrt[3]{x}$.`, recap: "Rewrite powers.", ans: S`$-3x^{-4}+\frac13x^{-2/3}$` },
  { level: 2, q: S`Differentiate $f(x)=(2x+1)^2$.`, recap: "Expand.", ans: S`$8x+4$` },
  { level: 2, q: S`Find the gradient of $y=\frac{6}{\sqrt x}$ at $x=4$.`, recap: "Gradient.", ans: S`$-\frac38$` },
  { level: 2, q: S`Find the tangent to $y=x^3$ at $x=-1$.`, recap: "Tangent.", ans: S`$y=3x+2$` },
  { level: 2, q: S`Find the normal to $y=x^2-1$ at $x=2$.`, recap: "Normal.", ans: S`$y=-\frac14x+3.5$` },
  { level: 3, space: 4, q: S`Find the points on $y=2x^3-3x^2-10x$ where the gradient is 2.`, recap: "Given gradient.", ans: S`$x=2$ or $-1$: $(2,-16)$, $(-1,5)$` },
  { level: 3, space: 4, q: S`The tangent to $y=x^2-kx$ at $x=3$ has gradient 1. Find $k$ and the tangent equation.`, recap: "Unknown coefficient.", ans: S`$k=5$; $y=x-9$` },
  { level: 3, space: 4, q: S`Find where the normal to $y=x^2$ at $(-1,1)$ meets the curve again.`, recap: "Normal meets the curve.", ans: S`$(1.5,2.25)$`,
    fig: F({ view: { xmin: -3, xmax: 3, ymin: -1, ymax: 6 }, curves: [{ f: (x) => x * x }, { f: (x) => 0.5 * x + 1.5, color: "green" }], points: [pt(-1, 1)] }) },
  { level: 3, space: 4, q: S`Show that the tangents to $y=x^2$ at $x=a$ and $x=-\frac{1}{4a}$ are perpendicular.`, recap: "Perpendicular tangents.", ans: S`gradients $2a$ and $-\frac{1}{2a}$; product $-1$` },
  { level: 3, space: 4, q: S`Find the equation of the tangent to $y=\sqrt x$ that is parallel to $y=\frac14x$.`, recap: "Parallel tangent.", ans: S`at $(4,2)$: $y=\frac14x+1$` },
];

export const WS = {
  code: "5.3",
  title: "Differentiation Rules",
  bigideas: S`$\frac{d}{dx}(x^n)=nx^{n-1}$ for rational $n$; constants differentiate to 0; differentiate sums term by term and keep constant multiples. Rewrite roots and fractions as powers, and expand or divide products and quotients first. The tangent at $x_1$ is $y-y_1=f'(x_1)(x-x_1)$; the normal has gradient $-\frac{1}{f'(x_1)}$.`,
  goals: ["Use the power rule.", "Rewrite before differentiating.", "Find tangents and normals.", "Find points with a given gradient."],
  curriculum: "SL 5.3, SL 5.4",
  vocab: [["Power rule", S`$nx^{n-1}$`], ["Tangent", S`$y-y_1=m(x-x_1)$`], ["Normal", S`gradient $-\frac1m$`]],
  hook: "Show the first-principles results for x², x³ and x⁴ side by side. Ask students to predict the derivative of x¹⁰ and of x⁻¹.",
  concepts: [
    ["1. The power rule", S`${F({ view: { xmin: -3, xmax: 3, ymin: -6, ymax: 10 }, curves: [{ f: (x) => x ** 3 }, { f: (x) => 3 * x * x, color: "amber" }], step: { x: 1, y: 2 } }, 5)} $x^3\to3x^2$.`],
    ["2. Rewrite first", S`$\frac1{x^2}=x^{-2}$, $\sqrt x=x^{1/2}$; expand brackets, divide fractions.`],
    ["3. Tangents and normals", "Point from f, gradient from f′; normal: negative reciprocal."],
  ],
  tips: ["Constants → 0.", "Write powers first.", "Expand products.", "Normal uses −1/f′(x₁).", "Substitute into f for y₁."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
