// MCV4U Worksheet 2.4 — The Chain Rule (teacher edition)
import { F, gridT, pt } from "./figT.mjs";

const S = String.raw;
const EXAMPLES = [
  { title: "A negative inner slope", q: S`Differentiate $y=(5-2x)^6$.`,
    steps: [S`Outer $u^6$, inner $u=5-2x$, $u'=-2$.`, S`$y'=6(5-2x)^5(-2)$.`], ans: S`$y'=-12(5-2x)^5$` },
  { title: "A cubic inside", q: S`Differentiate $y=(x^3+2x)^4$.`,
    steps: [S`$y'=4(x^3+2x)^3\cdot(3x^2+2)$.`], ans: S`$y'=4(3x^2+2)(x^3+2x)^3$` },
  { title: "A cube root", q: S`Differentiate $y=\sqrt[3]{4x-1}$.`,
    steps: [S`$y=(4x-1)^{1/3}\Rightarrow y'=\frac13(4x-1)^{-2/3}\cdot4$.`], ans: S`$y'=\frac{4}{3(4x-1)^{2/3}}$` },
  { title: "A reciprocal power", q: S`Differentiate $y=\frac{3}{(2x+1)^2}$.`,
    steps: [S`$y=3(2x+1)^{-2}\Rightarrow y'=-6(2x+1)^{-3}\cdot2$.`], ans: S`$y'=-\frac{12}{(2x+1)^3}$` },
  { title: "Leibniz notation", q: S`$y=\sqrt u$ and $u=x^2+9$. Find $\frac{dy}{dx}$ at $x=4$.`,
    steps: [S`$\frac{dy}{du}=\frac1{2\sqrt u}$, $\frac{du}{dx}=2x$.`, S`$\frac{dy}{dx}=\frac{x}{\sqrt{x^2+9}}$; at 4: $\frac45$.`], ans: S`$\frac45$` },
  { title: "Order matters", q: S`$f(x)=\sqrt x$ and $g(x)=x^2-7$. Find $(f\circ g)'(4)$ and $(g\circ f)'(4)$.`,
    steps: [S`$(f\circ g)'(4)=f'(g(4))g'(4)=\frac1{2\sqrt9}\cdot8=\frac43$.`, S`$g\circ f=x-7$ (for $x\ge0$), so $(g\circ f)'=1$.`], ans: S`$\frac43$ and $1$` },
  { title: "A tangent line", q: S`Find the tangent to $y=\sqrt{x^2+16}$ at $x=3$.`,
    fig: F({ view: { xmin: -5, xmax: 6, ymin: 0, ymax: 8 }, curves: [{ f: (x) => Math.sqrt(x * x + 16) }, { f: (x) => 0.6 * x + 3.2, color: "green" }], points: [pt(3, 5)], step: { x: 1, y: 1 } }),
    steps: [S`$y(3)=5$; $y'=\frac{x}{\sqrt{x^2+16}}\Rightarrow y'(3)=\frac35$.`, S`$y-5=0.6(x-3)$.`], ans: S`$y=0.6x+3.2$` },
  { title: "Product and chain", q: S`Find the horizontal tangents of $y=x(2x-3)^3$.`,
    fig: F({ view: { xmin: -0.3, xmax: 2, ymin: -5, ymax: 2 }, curves: [{ f: (x) => x * (2 * x - 3) ** 3 }], points: [pt(0.375, 0.375 * (0.75 - 3) ** 3), pt(1.5, 0)], step: { x: 0.5, y: 1 } }),
    steps: [S`$y'=(2x-3)^3+x\cdot3(2x-3)^2\cdot2=(2x-3)^2(8x-3)$.`, S`$y'=0$ at $x=1.5$ and $x=0.375$.`], ans: S`at $x=0.375$ ($y\approx-4.27$) and $x=1.5$ ($y=0$)` },
  { title: "Maximum of a reciprocal", q: S`Find the horizontal tangent of $y=\frac1{x^2-4x+5}$.`,
    fig: F({ view: { xmin: -1, xmax: 5, ymin: -0.2, ymax: 1.4 }, curves: [{ f: (x) => 1 / (x * x - 4 * x + 5) }], points: [pt(2, 1)], step: { x: 1, y: 0.2 } }),
    steps: [S`$y=(x^2-4x+5)^{-1}\Rightarrow y'=-\frac{2x-4}{(x^2-4x+5)^2}$.`, S`$y'=0$ at $x=2$; $y(2)=1$.`], ans: "(2, 1), the highest point" },
];

const PROBLEMS = [
  { level: 1, q: S`Differentiate $y=(x+7)^4$.`, recap: "Inner derivative 1.", ans: S`$4(x+7)^3$` },
  { level: 1, q: S`Differentiate $y=(3x-4)^2$.`, recap: "Inner derivative 3.", ans: S`$6(3x-4)$` },
  { level: 1, q: S`Differentiate $y=(1-x)^3$.`, recap: "Inner derivative −1.", ans: S`$-3(1-x)^2$` },
  { level: 2, q: S`For $y=(x^2-5)^4$, find $y'(2)$.`, recap: "4(x² − 5)³ · 2x.", ans: "−16" },
  { level: 2, q: S`For $y=\sqrt{6x+1}$, find $y'(4)$.`, recap: "3/√(6x + 1).", ans: "0.6" },
  { level: 2, q: S`Differentiate $y=\frac{2}{(x+3)^3}$.`, recap: "Rewrite as a negative power.", ans: S`$-\frac{6}{(x+3)^4}$` },
  { level: 2, q: S`$g(2)=3$, $g'(2)=4$ and $f'(3)=-2$. Find $(f\circ g)'(2)$.`, recap: "f′(g(2)) g′(2).", ans: "−8" },
  { level: 2, q: S`Find the tangent to $y=(2x-3)^4$ at $x=1$ and draw it.`, recap: "Point (1, 1).", ans: S`$y=-8x+9$`, fig: gridT({ xmin: -1, xmax: 3, ymin: -2, ymax: 10 }, { x: 1, y: 1 }) },
  { level: 3, space: 5, q: S`Find all points where $y=(x^2-1)^3$ has a horizontal tangent, and sketch the curve.`, recap: "y′ = 6x(x² − 1)².", ans: S`$(0,-1)$, $(1,0)$, $(-1,0)$`, fig: gridT({ xmin: -2, xmax: 2, ymin: -2, ymax: 3 }, { x: 0.5, y: 0.5 }) },
  { level: 3, space: 5, q: S`For $y=x^2\sqrt{1-x}$, $x\lt1$, find $y'$ as one fraction and the x-values of the horizontal tangents.`, recap: "Product + chain, common denominator.", ans: S`$y'=\frac{x(4-5x)}{2\sqrt{1-x}}$; $x=0$ and $x=0.8$` },
  { level: 3, space: 5, q: S`Find $y'(0)$ for $y=\left(1+(3x-1)^2\right)^3$.`, recap: "Two layers of chain rule.", ans: S`$3(2)^2\cdot6(-1)=-72$` },
  { level: 3, space: 5, q: S`A circular ripple has radius $r=4t$ cm after $t$ s. How fast is its area increasing at $t=3$?`, recap: "dA/dt = 2πr · dr/dt.", ans: S`$96\pi\approx301.6$ cm² per s` },
  { level: 3, space: 5, q: S`Use the chain rule on $g(x)^{-1}$ to show $\left(\frac1g\right)'=-\frac{g'}{g^2}$. Apply it to $g(x)=x^2+x$ at $x=1$.`, recap: "Outer u⁻¹.", ans: S`$-\frac{3}{4}$` },
];

export const WS = {
  code: "2.4",
  title: "The Chain Rule",
  bigideas: S`A composite function $f(g(x))$ has an outer function $f$ and an inner function $g$. Its rate of change is the product of the two rates: $\frac{dy}{dx}=\frac{dy}{du}\cdot\frac{du}{dx}$, or $(f(g(x)))'=f'(g(x))\,g'(x)$. The most common case is the power of a function, $\frac{d}{dx}[g(x)]^n=n[g(x)]^{n-1}g'(x)$. Rewrite roots and reciprocals as powers first, and combine with the product rule when composites are multiplied.`,
  goals: ["Identify inner and outer functions.", "Use the chain rule in both notations.", "Differentiate powers, roots and reciprocals of functions.", "Combine the chain and product rules."],
  curriculum: "A3.4, A3.5",
  vocab: [["Composite function", "$f(g(x))$"], ["Chain rule", "$\\frac{dy}{dx}=\\frac{dy}{du}\\cdot\\frac{du}{dx}$"], ["Inner function", "$u=g(x)$"]],
  hook: S`Gear A turns 3 times for each turn of gear B, and B turns 2 times for each turn of gear C. How many times does A turn for each turn of C?`,
  concepts: [
    ["1. Rates multiply", S`$y=u^2$ with $u=3x-1$: $\frac{dy}{du}=2u$ and $\frac{du}{dx}=3$, so $\frac{dy}{dx}=6(3x-1)$. The curve $y=(3x-1)^2$ and its derivative:
${F({ view: { xmin: -1, xmax: 1.6, ymin: -7, ymax: 10 }, curves: [{ f: (x) => (3 * x - 1) ** 2 }, { f: (x) => 6 * (3 * x - 1), color: "blue" }], points: [pt(1 / 3, 0)], step: { x: 0.5, y: 2 } })}`],
    ["2. Outside, inside", S`Differentiate the outer function, keep the inside unchanged, multiply by the inner derivative.`],
    ["3. Combine", S`$x^2(3x+1)^4$: product rule first, chain rule inside it.`],
  ],
  tips: ["Never drop the inner derivative.", "Do not change the inside when differentiating the outside.", "Rewrite roots and reciprocals as powers.", "Factor common powers in the answer.", "f(g(x)) and g(f(x)) usually have different derivatives."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
