// 2.4 The Chain Rule — 20 hard questions
import { mc, num, tf } from "./kit.mjs";
import { graph, P } from "./fig.mjs";

const S = String.raw;
export const TOPIC = "2.4 The Chain Rule";
export const Q = [
  num("The graph of y = x²(x − 1)³ is shown. How many horizontal tangents does it have?", 3, "y′ = x(x − 1)²(5x − 2): x = 0, 0.4, 1.", graph((x) => x * x * (x - 1) ** 3, { xmin: -0.6, xmax: 1.5, ymin: -0.15, ymax: 0.1 }, [P(0, 0), P(0.4, 0.16 * (-0.6) ** 3), P(1, 0)], { step: { x: 0.25, y: 0.05 } })),
  num("The tangent to y = √(25 − x²) at x = 3 is drawn. Find its y-intercept.", 6.25, "Slope −x/√(25 − x²) = −¾ through (3, 4).", graph((x) => Math.sqrt(25 - x * x), { xmin: -6, xmax: 9, ymin: -1, ymax: 8 }, [P(3, 4)], { a: -5, b: 5, more: [{ f: (x) => 4 - 0.75 * (x - 3), color: "green" }] }), 0.0001),
  num(S`For $y=\left((2x+1)^2+1\right)^3$, find $y'(0)$.`, 48, "u = (2x + 1)² + 1 = 2, u′ = 4(2x + 1) = 4: 3u²u′."),
  num(S`For $y=x(x^2+1)^{-1/2}$, find $y'(0)$.`, 1, "(x² + 1)^(−½) − x²(x² + 1)^(−3/2) at 0."),
  num("A circular ripple has radius r = 5t cm. How fast is its area growing at t = 2 s? (cm² per s, 2 decimals)", 314.16, "2πr · 5 at r = 10: 100π.", null, 0.01),
  num("A sphere's radius is r = 3 + t cm. How fast is its volume growing at t = 1 s? (cm³ per s, 2 decimals)", 201.06, "4πr² · 1 at r = 4: 64π.", null, 0.01),
  num(S`How many horizontal tangents does $y=(x^2-1)^4$ have?`, 3, "8x(x² − 1)³ = 0."),
  mc(S`Which is $\frac{d}{dx}f(3x)$?`, S`$3f'(3x)$`, [S`$f'(3x)$`, S`$3f'(x)$`, S`$f'(3)$`], "Inner derivative 3."),
  num(S`$f'(x)=\frac1x$ and $g(x)=x^2+1$. Find $(f\circ g)'(1)$.`, 1, "f′(2) · g′(1) = ½ · 2."),
  num(S`For $y=(1-2x)^{-1/2}$, find $y'(-4)$ (4 decimals).`, 0.037, "−½(9)^(−3/2) · (−2) = 1/27.", null, 0.0005),
  num("The graph of y = √(x − 1) is shown. At what x does its tangent have slope ¼?", 5, "1/(2√(x − 1)) = ¼.", graph((x) => Math.sqrt(x - 1), { xmin: 0, xmax: 9, ymin: -1, ymax: 4 }, [P(5, 2)], { a: 1, b: 9, more: [{ f: (x) => 2 + 0.25 * (x - 5), color: "green" }] })),
  tf(S`$\frac{d}{dx}[f(x)]^2=2f(x)f'(x)$.`, true, "Outer u², inner f(x)."),
  num(S`Find the y-intercept of the tangent to $y=(x^3+x)^2$ at $x=1$.`, -12, "y = 4; y′ = 2(2)(4) = 16; y = 16x − 12."),
  num("The graph of y = x√(1 − x) is shown. At what x is its tangent horizontal? (4 decimals)", 0.6667, "y′ = (2 − 3x)/(2√(1 − x)).", graph((x) => x * Math.sqrt(1 - x), { xmin: -1, xmax: 1.2, ymin: -1.6, ymax: 0.6 }, [P(2 / 3, (2 / 3) * Math.sqrt(1 / 3))], { a: -1, b: 1, step: { x: 0.25, y: 0.2 } }), 0.0005),
  num(S`Find $\frac{d^2}{dx^2}(2x+1)^3$ at $x=0$.`, 24, "y′ = 6(2x + 1)², y″ = 24(2x + 1)."),
  num(S`$h(x)=[g(x)]^3$ with $g(2)=-1$ and $g'(2)=5$. Find $h'(2)$.`, 15, "3(−1)² · 5."),
  num(S`A particle has position $s(t)=\sqrt{t^2+16}$ m. Find its velocity at $t=3$ s.`, 0.6, "t/√(t² + 16) at 3.", null, 0.0001),
  num("The graph of y = (x − 2)²(x + 1)² is shown. How many horizontal tangents does it have?", 3, "y′ = 2(x − 2)(x + 1)(2x − 1).", graph((x) => (x - 2) ** 2 * (x + 1) ** 2, { xmin: -2, xmax: 3, ymin: -1, ymax: 8 }, [P(-1, 0), P(0.5, 5.0625), P(2, 0)])),
  num("A cube's edge is e = 2 + 0.5t cm. How fast is its volume changing at t = 2 s? (cm³ per s)", 13.5, "3e² · 0.5 at e = 3.", null, 0.0001),
  num(S`For $y=\frac1{(x^2+1)^2}$, find $y'(1)$.`, -0.5, "−2(x² + 1)⁻³ · 2x at 1: −4/8.", null, 0.0001),
];
