// 1.2 Rates of Change Using Equations — 20 easy + 20 medium questions
import { mc, num, tf, fill } from "./kit.mjs";
import { graph, P } from "./fig.mjs";

export const E = [
  num(String.raw`Evaluate $\frac{f(1+h)-f(1)}{h}$ for $f(x)=x^2$ and $h=1$.`, 3, "(4 − 1) ÷ 1."),
  num(String.raw`Evaluate $\frac{f(2+h)-f(2)}{h}$ for $f(x)=x^2$ and $h=0.1$.`, 4.1, "(4.41 − 4) ÷ 0.1.", null, 0.0001),
  mc(String.raw`What does $\frac{f(a+h)-f(a)}{h}$ represent?`, "the slope of a secant", ["the slope of the tangent", "the y-intercept", "the area under the curve"], "Rise over run between two points."),
  num(String.raw`For $f(x)=x^2$ at $a=3$, the simplified quotient is $6+h$. What is the instantaneous rate?`, 6, "Let h → 0."),
  num(String.raw`What is the instantaneous rate of change of $f(x)=5x+1$ at $x=2$?`, 5, "Slope of the line."),
  tf("You may substitute h = 0 into the difference quotient before simplifying.", false, "That gives 0/0."),
  num(String.raw`Find the instantaneous rate of change of $f(x)=x^2$ at $x=-2$.`, -4, "Rate 2a."),
  mc(String.raw`For $f(x)=x^2$, what is $f(2+h)$?`, String.raw`$4+4h+h^2$`, [String.raw`$4+h$`, String.raw`$4+h^2$`, String.raw`$2+h^2$`], "(2 + h)²."),
  num(String.raw`For $f(x)=3x$, the difference quotient equals what number for every $h\ne0$?`, 3, "3h ÷ h."),
  num(String.raw`Find the instantaneous rate of change of $f(x)=x^2+1$ at $x=1$.`, 2, "The +1 doesn't change slopes.", graph((x) => x * x + 1, { xmin: -2, xmax: 3, ymin: -1, ymax: 8 }, [P(1, 2)])),
  mc(String.raw`What should you do with $\sqrt{a+h}-\sqrt a$ in a difference quotient?`, "multiply by the conjugate", ["square it", "set h = 0 immediately", "factor out h directly"], "Rationalize the numerator."),
  num(String.raw`Find the instantaneous rate of change of $f(x)=x^3$ at $x=0$.`, 0, "3h² + h³ … over h → 0."),
  tf("h may be negative in the difference quotient.", true, "That gives a secant to the left."),
  num(String.raw`Evaluate $\frac{f(1+h)-f(1)}{h}$ for $f(x)=2x^2$ and $h=0.5$.`, 5, "(4.5 − 2) ÷ 0.5."),
  num(String.raw`Find the instantaneous rate of change of $f(x)=2x^2$ at $x=1$.`, 4, "4 + 2h → 4."),
  mc("Which is the point-slope form of the tangent at (a, f(a)) with slope m?", String.raw`$y-f(a)=m(x-a)$`, [String.raw`$y=mx+a$`, String.raw`$y-a=m(x-f(a))$`, String.raw`$y=f(a)x+m$`], "Point-slope form."),
  num(String.raw`Find the instantaneous rate of change of $f(x)=7-x$ at $x=3$.`, -1, "Slope −1."),
  num(String.raw`Find the instantaneous rate of change of $f(x)=x^2$ at $x=0.5$.`, 1, "2(0.5)."),
  num("The secant on y = x² from a = 1 with h = 1 is drawn. What is its slope?", 3, "(4 − 1) ÷ 1.", graph((x) => x * x, { xmin: -1, xmax: 3, ymin: -1, ymax: 6 }, [P(1, 1), P(2, 4)], { more: [{ f: (x) => 3 * x - 2, color: "amber" }] })),
  fill("The limit of the difference quotient as h → 0 is the ___ rate of change.", ["instantaneous"], "Tangent slope."),
];

export const M = [
  num(String.raw`Find the instantaneous rate of change of $f(x)=x^2-3x$ at $x=4$.`, 5, "2(4) − 3."),
  num(String.raw`Find the instantaneous rate of change of $f(x)=x^3$ at $x=-2$.`, 12, "3(4)."),
  num(String.raw`Find the instantaneous rate of change of $f(x)=\frac1x$ at $x=1$.`, -1, "−1/(1)(1 + h) → −1."),
  num(String.raw`Find the instantaneous rate of change of $f(x)=\sqrt x$ at $x=1$.`, 0.5, "1/(√(1 + h) + 1) → ½.", null, 0.0001),
  num(String.raw`Find the instantaneous rate of change of $f(x)=4x^2+x$ at $x=0$.`, 1, "4h + 1 → 1."),
  num(String.raw`Find the instantaneous rate of change of $f(x)=x^2+2x$ at $x=-1$.`, 0, "2(−1) + 2."),
  mc(String.raw`Which line is tangent to $y=x^2$ at $(2,4)$?`, String.raw`$y=4x-4$`, [String.raw`$y=2x$`, String.raw`$y=4x+4$`, String.raw`$y=2x+4$`], "Slope 4 through (2, 4).", graph((x) => x * x, { xmin: -1, xmax: 4, ymin: -2, ymax: 10 }, [P(2, 4)])),
  num(String.raw`An object's position is $s(t)=t^2+3t$ m. Find its velocity at $t=2$.`, 7, "2(2) + 3."),
  num(String.raw`Find the instantaneous rate of change of $f(x)=\frac2x$ at $x=2$.`, -0.5, "−2/x².", null, 0.0001),
  num(String.raw`Find the instantaneous rate of change of $f(x)=-x^2$ at $x=3$.`, -6, "−2(3)."),
  num(String.raw`Evaluate $\frac{f(1+h)-f(1)}{h}$ for $f(x)=x^3$ and $h=0.1$.`, 3.31, "(1.331 − 1) ÷ 0.1.", null, 0.0001),
  tf("Simplifying the difference quotient proves the exact rate; a table of values only suggests it.", true, "Tables can't reach h = 0."),
  num(String.raw`Find the instantaneous rate of change of $f(x)=(x+1)^2$ at $x=1$.`, 4, "2(x + 1) at 1."),
  num(String.raw`Find the instantaneous rate of change of $f(x)=\sqrt x$ at $x=25$.`, 0.1, "1/(2·5).", null, 0.0001),
  num(String.raw`At what x is the tangent to $y=x^2-10x$ horizontal?`, 5, "2a − 10 = 0."),
  num(String.raw`Find the y-intercept of the tangent to $y=x^2$ at $x=3$.`, -9, "y = 6x − 9."),
  num(String.raw`Find the instantaneous rate of change of $f(x)=3x^2-2x$ at $x=1$.`, 4, "6(1) − 2."),
  num(String.raw`A ball's height is $h(t)=-5t^2+20t$ m. Find its velocity at $t=1$.`, 10, "20 − 10(1)."),
  num("The tangent to y = ½x² at x = −2 is drawn. What is its slope?", -2, "Rate of ½x² at a is a.", graph((x) => 0.5 * x * x, { xmin: -4, xmax: 2, ymin: -3, ymax: 6 }, [P(-2, 2)], { more: [{ f: (x) => -2 * x - 2, color: "green" }] })),
  num(String.raw`Find the instantaneous rate of change of $f(x)=x^3+x$ at $x=1$.`, 4, "3 + 1."),
];
