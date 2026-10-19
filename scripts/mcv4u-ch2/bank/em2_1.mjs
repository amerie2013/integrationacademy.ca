// 2.1 Derivative of a Polynomial Function — 20 easy + 20 medium questions
import { mc, num, tf, fill, mx } from "./kit.mjs";
import { graph, P } from "./fig.mjs";

const S = String.raw;
export const E = [
  mx(S`Differentiate $y=x^7$.`, "7*x^6", "Bring down the 7, subtract 1."),
  mx(S`Differentiate $y=5x^3$.`, "15*x^2", "5 · 3x²."),
  num(S`What is $\frac{d}{dx}(-8)$?`, 0, "A constant does not change."),
  mx(S`Differentiate $y=x^2+9x$.`, "2*x+9", "Term by term."),
  num(S`For $f(x)=x^3$, find $f'(2)$.`, 12, "3(2)²."),
  mc(S`Which is the power rule?`, S`$\frac{d}{dx}x^n=nx^{n-1}$`, [S`$\frac{d}{dx}x^n=x^{n-1}$`, S`$\frac{d}{dx}x^n=nx^{n+1}$`, S`$\frac{d}{dx}x^n=(n-1)x^n$`], "Exponent down, then subtract 1."),
  tf("The derivative of a constant function is 0.", true, "Its graph is horizontal."),
  mx(S`Differentiate $y=4x-1$.`, "4", "Slope of the line."),
  num(S`For $f(x)=x^4$, find $f'(1)$.`, 4, "4(1)³."),
  mx(S`Differentiate $y=x^{-2}$.`, "-2*x^(-3)", "Exponent −2 becomes −3."),
  num(S`Find the slope of the tangent to $y=x^2-5x$ at $x=3$.`, 1, "2(3) − 5.", graph((x) => x * x - 5 * x, { xmin: -1, xmax: 6, ymin: -8, ymax: 4 }, [P(3, -6)], { more: [{ f: (x) => x - 9, color: "green" }], step: { x: 1, y: 2 } })),
  mc(S`Which power equals $\sqrt x$?`, S`$x^{1/2}$`, [S`$x^2$`, S`$x^{-1/2}$`, S`$x^{-2}$`], "Square root = power ½."),
  num(S`For $y=6x^2$, find $y'$ at $x=-1$.`, -12, "12x at −1."),
  fill(S`Constant multiple rule: $\frac{d}{dx}\left(c\,f(x)\right)=c\cdot$ ___`, ["f'(x)", "f′(x)", "f'", "f′"], "Keep the constant."),
  mx(S`Differentiate $y=3x^4-x$.`, "12*x^3-1", "Term by term."),
  tf(S`$\frac{d}{dx}(x^3+x^2)=3x^2+2x$.`, true, "Sum rule."),
  num(S`For $y=\frac1x$, find $y'(1)$.`, -1, "−1/x²."),
  num("The tangent to y = x³ at x = −1 is drawn. What is its slope?", 3, "3(−1)².", graph((x) => x ** 3, { xmin: -2, xmax: 2, ymin: -4, ymax: 4 }, [P(-1, -1)], { more: [{ f: (x) => 3 * x + 2, color: "green" }] })),
  mx(S`Differentiate $y=x^5-2x^3$.`, "5*x^4-6*x^2", "Term by term."),
  num(S`For $y=10x$, what is $y'$ at any $x$?`, 10, "Constant slope."),
];

export const M = [
  mx(S`Differentiate $y=2x^5-4x^3+7$.`, "10*x^4-12*x^2", "The 7 disappears."),
  num(S`For $f(x)=x^3-2x^2+x$, find $f'(2)$.`, 5, "3(4) − 4(2) + 1."),
  mx(S`Differentiate $y=8\sqrt x$.`, "4/sqrt(x)", "8 · ½x^(−½)."),
  mx(S`Differentiate $y=\frac3x$.`, "-3/x^2", "3x⁻¹ → −3x⁻²."),
  num(S`For $y=x^{3/2}$, find $y'(4)$.`, 3, "1.5 · 4^(½)."),
  num(S`For $y=(x+2)(x-2)$, find $y'(5)$ by expanding.`, 10, "x² − 4 → 2x."),
  num(S`For $y=\frac{x^3+x}{x}$ ($x\ne0$), find $y'(3)$.`, 6, "Divide: x² + 1."),
  num("The graph of y = x⁴ − 8x is shown. Find the slope of the tangent at x = 1.", -4, "4 − 8.", graph((x) => x ** 4 - 8 * x, { xmin: -1.5, xmax: 2.5, ymin: -10, ymax: 10 }, [P(1, -7)], { step: { x: 0.5, y: 2 } })),
  num(S`At what $x$ is the tangent to $y=x^2-14x$ horizontal?`, 7, "2x − 14 = 0."),
  num(S`Find the y-intercept of the tangent to $y=x^3$ at $x=2$.`, -16, "y = 12x − 16."),
  mc(S`Which line is tangent to $y=x^2+1$ at $x=1$?`, S`$y=2x$`, [S`$y=2x+1$`, S`$y=x+1$`, S`$y=2x-2$`], "Slope 2 through (1, 2)."),
  num(S`For $y=5x^{-1}+x^2$, find $y'(1)$.`, -3, "−5 + 2."),
  num(S`For $f(x)=\sqrt[3]{x}$, find $f'(8)$ (4 decimals).`, 0.0833, "⅓ · 8^(−⅔) = 1/12.", null, 0.0005),
  tf(S`$\frac{d}{dx}(x^2\cdot x^3)=2x\cdot3x^2$.`, false, "x⁵ → 5x⁴, not 6x³."),
  num(S`At what positive $x$ does $y=x^3$ have a tangent of slope 27?`, 3, "3x² = 27."),
  num(S`For $y=x^{4/3}$, find $y'(8)$ (4 decimals).`, 2.6667, "(4/3)x^(1/3) = (4/3)(2).", null, 0.0005),
  num(S`Find the slope of the normal to $y=x^2$ at $x=2$.`, -0.25, "Tangent slope 4, normal −¼.", null, 0.0001),
  num("How many horizontal tangents does the graph of y = x³ − 3x have?", 2, "3x² − 3 = 0: x = ±1.", graph((x) => x ** 3 - 3 * x, { xmin: -2.5, xmax: 2.5, ymin: -4, ymax: 4 }, [P(-1, 2), P(1, -2)])),
  num(S`For $y=0.5x^4$, find $y'(2)$.`, 16, "2x³ at 2."),
  num(S`An object's position is $s(t)=4t^2-t$ m. Find its velocity at $t=2$ s.`, 15, "8t − 1."),
];
