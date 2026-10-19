// 2.4 The Chain Rule — 20 easy + 20 medium questions
import { mc, num, tf, fill, mx } from "./kit.mjs";
import { graph, P } from "./fig.mjs";

const S = String.raw;
export const E = [
  mc(S`Which is the chain rule?`, S`$\frac{d}{dx}f(g(x))=f'(g(x))\,g'(x)$`, [S`$\frac{d}{dx}f(g(x))=f'(x)\,g'(x)$`, S`$\frac{d}{dx}f(g(x))=f'(g'(x))$`, S`$\frac{d}{dx}f(g(x))=f(g'(x))$`], "Outer derivative at the inside, times the inner derivative."),
  mx(S`Differentiate $y=(x+3)^2$.`, "2*(x+3)", "Inner derivative 1."),
  mx(S`Differentiate $y=(2x+1)^3$.`, "6*(2*x+1)^2", "3(2x + 1)² · 2."),
  num(S`For $y=(x-1)^4$, find $y'(2)$.`, 4, "4(1)³ · 1."),
  tf(S`$\frac{d}{dx}(3x+1)^5=5(3x+1)^4$.`, false, "Missing the inner factor 3."),
  mc(S`What is the inner function of $\sqrt{x^2+7}$?`, S`$x^2+7$`, [S`$\sqrt x$`, S`$x^2$`, S`$7$`], "It is computed first."),
  num(S`For $y=(4x)^2$, find $y'(1)$.`, 32, "2(4x) · 4 = 32x."),
  num(S`For $y=(x+2)^3$, find $y'(0)$.`, 12, "3(2)²."),
  fill(S`$\frac{d}{dx}[g(x)]^n=n[g(x)]^{n-1}\cdot$ ___`, ["g'(x)", "g′(x)", "g'", "g′"], "Multiply by the inner derivative."),
  mx(S`Differentiate $y=(1+x)^{-1}$.`, "-(1+x)^(-2)", "−1 · (1 + x)⁻² · 1."),
  num(S`For $y=\sqrt{x+1}$, find $y'(3)$.`, 0.25, "1/(2√4).", null, 0.0001),
  num(S`If $\frac{dy}{du}=3$ and $\frac{du}{dx}=4$, find $\frac{dy}{dx}$.`, 12, "Rates multiply."),
  num(S`For $y=(3x-2)^2$, find $y'(1)$.`, 6, "2(3x − 2) · 3 at 1."),
  tf(S`$\sqrt{5x}$ can be written $(5x)^{1/2}$ before differentiating.`, true, "Root = power ½."),
  num("The graph of y = (x² + 1)² is shown. Find the slope of the tangent at x = 1.", 8, "2(x² + 1) · 2x at 1.", graph((x) => (x * x + 1) ** 2, { xmin: -1.8, xmax: 1.8, ymin: -1, ymax: 10 }, [P(1, 4)], { more: [{ f: (x) => 4 + 8 * (x - 1), color: "green" }] })),
  num(S`For $y=(5-x)^3$, find $y'(4)$.`, -3, "3(1)² · (−1)."),
  mx(S`Differentiate $y=(x^2-2)^2$.`, "4*x*(x^2-2)", "2(x² − 2) · 2x."),
  num(S`$f(x)=x^2$ and $g(x)=x+1$. Find $(f\circ g)'(2)$.`, 6, "2g(2) · g′(2) = 2(3)(1)."),
  num(S`For $y=\frac1{x+2}$, find $y'(0)$ using the chain rule.`, -0.25, "−(x + 2)⁻² at 0.", null, 0.0001),
  num("The graph of y = (x − 2)² is shown. Find the slope of the tangent at x = 3.", 2, "2(x − 2) at 3.", graph((x) => (x - 2) ** 2, { xmin: -1, xmax: 5, ymin: -1, ymax: 8 }, [P(3, 1)], { more: [{ f: (x) => 2 * x - 5, color: "green" }] })),
];

export const M = [
  mx(S`Differentiate $y=(x^3-1)^4$.`, "12*x^2*(x^3-1)^3", "4(x³ − 1)³ · 3x²."),
  num(S`For $y=(2x-3)^5$, find $y'(2)$.`, 10, "5(1)⁴ · 2."),
  num(S`For $y=\sqrt{x^2+5}$, find $y'(2)$ (4 decimals).`, 0.6667, "x/√(x² + 5) at 2: 2/3.", null, 0.0005),
  num(S`For $y=\frac1{(3x+1)^2}$, find $y'(0)$.`, -6, "−2(3x + 1)⁻³ · 3."),
  num(S`For $y=(x^2-x)^3$, find $y'(2)$.`, 36, "3(2)² · (2x − 1) = 12 · 3."),
  num(S`$g(1)=4$, $g'(1)=2$ and $f'(4)=-3$. Find $(f\circ g)'(1)$.`, -6, "f′(4) · g′(1)."),
  num(S`For $y=\sqrt[3]{x+7}$, find $y'(1)$ (4 decimals).`, 0.0833, "⅓(8)^(−⅔) = 1/12.", null, 0.0005),
  num("The graph of y = (x² − 2)³ is shown. Find the slope of the tangent at x = 1.", 6, "3(x² − 2)² · 2x at 1: 3(1)(2).", graph((x) => (x * x - 2) ** 3, { xmin: -2, xmax: 2, ymin: -9, ymax: 9 }, [P(1, -1)], { more: [{ f: (x) => -1 + 6 * (x - 1), color: "green" }], step: { x: 0.5, y: 2 } })),
  mc(S`Which is $\frac{d}{dx}\sqrt{1-x^2}$?`, S`$\dfrac{-x}{\sqrt{1-x^2}}$`, [S`$\dfrac{1}{2\sqrt{1-x^2}}$`, S`$\dfrac{-2x}{\sqrt{1-x^2}}$`, S`$\dfrac{x}{\sqrt{1-x^2}}$`], "½(1 − x²)^(−½) · (−2x)."),
  num(S`For $y=x(x+1)^3$, find $y'(0)$.`, 1, "(x + 1)³ + 3x(x + 1)² at 0."),
  num("A balloon's radius is r = 1 + 0.2t cm. Its surface area is A = 4πr². Find dA/dt at t = 5 (cm² per s, 3 decimals).", 10.053, "dA/dt = 8πr · 0.2 at r = 2: 3.2π.", null, 0.001),
  tf(S`$(f\circ g)'(x)=(g\circ f)'(x)$ for all functions.`, false, "Order matters: try f = x², g = x + 1."),
  num("How many horizontal tangents does the graph of y = (x² − 4)² have?", 3, "4x(x² − 4) = 0: x = 0, ±2.", graph((x) => (x * x - 4) ** 2, { xmin: -3, xmax: 3, ymin: -2, ymax: 20 }, [P(-2, 0), P(0, 16), P(2, 0)], { step: { x: 1, y: 4 } })),
  mx(S`Differentiate $y=\sqrt{4-x^2}$.`, "-x/sqrt(4-x^2)", "½(4 − x²)^(−½) · (−2x)."),
  num(S`For $y=(x+1)^{-3}$, find $y'(1)$ (4 decimals).`, -0.1875, "−3(2)⁻⁴.", null, 0.0001),
  num(S`$h(x)=\sqrt{g(x)}$ with $g(2)=9$ and $g'(2)=6$. Find $h'(2)$.`, 1, "g′/(2√g) = 6/6."),
  num(S`For $y=(3-2x)^4$, find $y'(1)$.`, -8, "4(1)³ · (−2)."),
  num(S`For $y=\sqrt{x^2+1}$, find the slope of the tangent at $x=0$.`, 0, "x/√(x² + 1) at 0."),
  num(S`$y=u^5$ and $u=1-x$. Find $\frac{dy}{dx}$ at $x=2$.`, -5, "5u⁴ · (−1) with u = −1."),
  num("The graph of y = √(2x + 3) is shown. Find the slope of the tangent at x = 3 (4 decimals).", 0.3333, "1/√(2x + 3) at 3.", graph((x) => Math.sqrt(2 * x + 3), { xmin: -2, xmax: 6, ymin: -1, ymax: 4 }, [P(3, 3)], { a: -1.5, b: 6, more: [{ f: (x) => 3 + (x - 3) / 3, color: "green" }] }), 0.0005),
];
