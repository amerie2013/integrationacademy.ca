// 2.2 The Product Rule — 20 easy + 20 medium questions
import { mc, num, tf, fill, mx } from "./kit.mjs";
import { graph, P } from "./fig.mjs";

const S = String.raw;
export const E = [
  mc(S`Which is the product rule?`, S`$(uv)'=u'v+uv'$`, [S`$(uv)'=u'v'$`, S`$(uv)'=u'v-uv'$`, S`$(uv)'=\frac{u'}{v'}$`], "Two strips of the area model."),
  tf(S`$(uv)'=u'v'$ for all differentiable $u$ and $v$.`, false, "Try u = v = x: (x²)′ = 2x, but u′v′ = 1."),
  mx(S`Differentiate $y=x(x+2)$ with the product rule.`, "2*x+2", "(1)(x + 2) + x(1)."),
  mx(S`Differentiate $y=x(x-6)$.`, "2*x-6", "(x − 6) + x."),
  num(S`For $f(x)=x(3x+1)$, find $f'(1)$.`, 7, "(3x + 1) + 3x at 1."),
  num(S`$f(2)=2$, $f'(2)=3$, $g(2)=1$, $g'(2)=5$. Find $(fg)'(2)$.`, 13, "3(1) + 2(5)."),
  mx(S`Differentiate $y=(x+1)(x+2)$.`, "2*x+3", "(x + 2) + (x + 1)."),
  num(S`For $y=(x-1)(x+5)$, find $y'(0)$.`, 4, "(x + 5) + (x − 1) at 0."),
  fill(S`Product rule: $(uv)'=u'v+u\cdot$ ___`, ["v'", "v′"], "Derivative of the second factor."),
  num(S`For $y=x^2\cdot x$, find $y'(2)$ with the product rule.`, 12, "2x·x + x²·1 = 3x²."),
  num(S`For $y=(2x)(x^2)$, find $y'(1)$.`, 6, "2x² + 2x·2x = 6x²."),
  tf(S`For a constant $c$, the product rule gives $(cf)'=cf'$.`, true, "c′ = 0, so c′f + cf′ = cf′."),
  num("The graph of y = (x + 3)(x − 3) is shown. Find the slope of the tangent at x = 4.", 8, "(x − 3) + (x + 3) = 2x.", graph((x) => (x + 3) * (x - 3), { xmin: -5, xmax: 5, ymin: -10, ymax: 12 }, [P(4, 7)], { more: [{ f: (x) => 7 + 8 * (x - 4), color: "green" }], step: { x: 1, y: 2 } })),
  mx(S`Differentiate $y=x^3(x+1)$.`, "4*x^3+3*x^2", "3x²(x + 1) + x³."),
  num("The graph of y = 5x(x − 2) is shown. Find the slope of the tangent at x = 1.", 0, "5(x − 2) + 5x at 1: −5 + 5.", graph((x) => 5 * x * (x - 2), { xmin: -1, xmax: 3, ymin: -6, ymax: 8 }, [P(1, -5)], { more: [{ f: () => -5, color: "green" }] })),
  mc(S`For $u=x^2$ and $v=x+7$, which is $(uv)'$?`, S`$2x(x+7)+x^2$`, [S`$2x\cdot1$`, S`$2x(x+7)-x^2$`, S`$x^2(x+7)+2x$`], "u′v + uv′."),
  num(S`$f(1)=4$, $f'(1)=0$, $g(1)=3$, $g'(1)=2$. Find $(fg)'(1)$.`, 8, "0(3) + 4(2)."),
  num(S`Write $(x+1)^2$ as $(x+1)(x+1)$ and use the product rule to find its derivative at $x=2$.`, 6, "(x + 1) + (x + 1) = 2(x + 1)."),
  mx(S`Differentiate $y=(2x+1)(x-1)$.`, "4*x-1", "2(x − 1) + (2x + 1)."),
  num("A price is 10 dollars and rises 1 dollar per month; sales are 50 units and fall 2 units per month. How fast is revenue changing (dollars per month)?", 30, "p′q + pq′ = 50 − 20."),
];

export const M = [
  mx(S`Differentiate $y=(x^2+2)(x-3)$ and simplify.`, "3*x^2-6*x+2", "2x(x − 3) + (x² + 2)."),
  num(S`For $y=(x^2-1)(2x+3)$, find $y'(1)$.`, 10, "2x(2x + 3) + 2(x² − 1) at 1."),
  num(S`For $y=\sqrt x\,(x-1)$, find $y'(4)$.`, 2.75, "(x − 1)/(2√x) + √x at 4: ¾ + 2.", null, 0.0001),
  num("The graph of y = x²(x − 4) is shown. At what positive x is the tangent horizontal? (4 decimals)", 2.6667, "3x² − 8x = 0.", graph((x) => x * x * (x - 4), { xmin: -1, xmax: 5, ymin: -12, ymax: 6 }, [P(8 / 3, (64 / 9) * (8 / 3 - 4))], { step: { x: 1, y: 2 } }), 0.0005),
  num(S`For $y=(3x-1)(x+2)$, find the slope of the tangent at $x=0$.`, 5, "3(x + 2) + (3x − 1) at 0."),
  num(S`$f(2)=-1$, $f'(2)=2$, $g(2)=3$, $g'(2)=-4$. Find $(fg)'(2)$.`, 10, "2(3) + (−1)(−4)."),
  mx(S`Differentiate $y=x(x+1)(x+2)$.`, "3*x^2+6*x+2", "Three-factor rule, or expand."),
  num(S`For $y=(x+1)(x-2)(x-3)$, find $y'(0)$.`, 1, "(−2)(−3) + (1)(−3) + (1)(−2)."),
  num("The graph of y = (4 − x)(x + 1) is shown. At what x is the tangent horizontal?", 1.5, "−(x + 1) + (4 − x) = 3 − 2x.", graph((x) => (4 - x) * (x + 1), { xmin: -2, xmax: 5, ymin: -4, ymax: 8 }, [P(1.5, 6.25)], { more: [{ f: () => 6.25, color: "green" }] }), 0.0001),
  mc(S`Which is the derivative of $x^4(x^2-1)$?`, S`$6x^5-4x^3$`, [S`$8x^4$`, S`$6x^5-4x^4$`, S`$4x^3\cdot2x$`], "4x³(x² − 1) + 2x·x⁴."),
  num("A price is 12 dollars and falls 0.50 dollars per month; sales are 400 and rise 20 per month. How fast is revenue changing (dollars per month)?", 40, "(−0.5)(400) + 12(20)."),
  tf(S`If $f(a)=0$ and $g(a)=0$, then $(fg)'(a)=0$.`, true, "f′(a)·0 + 0·g′(a) = 0."),
  num(S`For $y=x^{1/2}\cdot x^{3/2}$, find $y'(3)$.`, 6, "The product is x²."),
  num(S`A rectangle has length $5+t$ cm and width $3+2t$ cm. Find the rate of change of its area at $t=1$ s.`, 17, "1(5) + 6(2)."),
  num(S`For $y=(x^2+x)(x-1)$, find $y'(-1)$.`, 2, "(2x + 1)(x − 1) + (x² + x) at −1."),
  mx(S`Differentiate $y=(x^2+1)(x^2-1)$.`, "4*x^3", "2x(x² − 1) + 2x(x² + 1)."),
  num(S`For $y=x^3(2-x)$, find $y'(1)$.`, 2, "3x²(2 − x) − x³ at 1."),
  num(S`$f(x)=x\,g(x)$ with $g(2)=5$ and $g'(2)=-1$. Find $f'(2)$.`, 3, "g(2) + 2g′(2)."),
  num(S`For $y=(x-2)(x^2+2x+4)$, find $y'(1)$.`, 3, "The product is x³ − 8."),
  num("The tangent to y = (x + 2)(x − 1) at x = 1 is drawn. Find its y-intercept.", -3, "y(1) = 0, slope 2x + 1 = 3: y = 3x − 3.", graph((x) => (x + 2) * (x - 1), { xmin: -3, xmax: 2.5, ymin: -5, ymax: 6 }, [P(1, 0)], { more: [{ f: (x) => 3 * x - 3, color: "green" }] })),
];
