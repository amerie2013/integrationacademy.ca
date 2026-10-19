// 1.5 Introduction to Derivatives — 20 easy + 20 medium questions
import { mc, num, tf, fill, mx } from "./kit.mjs";
import { graph, planeDoc, P } from "./fig.mjs";

export const E = [
  num(String.raw`What is $f'(x)$ for $f(x)=5x-2$?`, 5, "A line's slope."),
  mx(String.raw`Find $f'(x)$ for $f(x)=x^2$.`, "2*x", "Limit of 2x + h."),
  mx(String.raw`Find $f'(x)$ for $f(x)=x^3$.`, "3*x^2", "Limit of 3x² + 3xh + h²."),
  num(String.raw`For $f(x)=x^2$, find $f'(3)$.`, 6, "2(3)."),
  tf("f′(a) is the slope of the tangent to y = f(x) at x = a.", true, "Definition."),
  mc(String.raw`What does $\frac{dy}{dx}$ mean?`, "the rate of change of y with respect to x", ["y divided by x", "the area under the curve", "the y-intercept"], "Leibniz notation."),
  num(String.raw`What is the derivative of the constant function $f(x)=7$?`, 0, "Horizontal line."),
  mc("The graph shows f increasing. What is the sign of f′ there?", "positive", ["negative", "zero", "undefined"], "Tangents slope upward.", graph((x) => 0.2 * x ** 3 + x, { xmin: -2.5, xmax: 2.5, ymin: -6, ymax: 6 })),
  tf(String.raw`$f(x)=|x|$ is differentiable at $x=0$.`, false, "Corner."),
  num(String.raw`For $f(x)=x^2$, find $f'(-1)$.`, -2, "2(−1)."),
  mx(String.raw`Find $f'(x)$ for $f(x)=3x^2$.`, "6*x", "3 times 2x."),
  mc("The derivative of a quadratic function is:", "linear", ["quadratic", "constant", "cubic"], "Degree drops by 1."),
  num(String.raw`For $f(x)=x^3$, find $f'(0)$.`, 0, "3(0)²."),
  mc("At a turning point of a smooth graph, f′ equals:", "0", ["1", "−1", "it does not exist"], "Horizontal tangent."),
  mx(String.raw`Find $f'(x)$ for $f(x)=x^2+x$.`, "2*x+1", "2x + h + 1."),
  tf("Every continuous function is differentiable.", false, "Corners are continuous."),
  num(String.raw`For $f(x)=4x^2$, find $f'(2)$.`, 16, "8(2)."),
  mc("What is the sign of f′ on the part of the graph shown?", "negative", ["positive", "zero", "it changes"], "The graph falls.", graph((x) => 6 - x * x, { xmin: 0, xmax: 2.4, ymin: 0, ymax: 7 }, [], { a: 0 })),
  num(String.raw`Find the slope of the tangent to $y=x^2-3x$ at $x=1$.`, -1, "2(1) − 3."),
  fill("Finding f′ with the limit definition is called differentiating from first ___.", ["principles"], "First principles."),
];

export const M = [
  mx(String.raw`Find $f'(x)$ for $f(x)=x^2-5x$.`, "2*x-5", "2x + h − 5."),
  mx(String.raw`Find $f'(x)$ for $f(x)=2x^3$.`, "6*x^2", "2 times 3x²."),
  mx(String.raw`Find $f'(x)$ for $f(x)=\frac1x$.`, "-1/x^2", "−1/(x(x + h))."),
  num(String.raw`For $f(x)=\sqrt x$, find $f'(4)$.`, 0.25, "1/(2√x).", null, 0.0001),
  mx(String.raw`Find $f'(x)$ for $f(x)=x^3-x^2$.`, "3*x^2-2*x", "3x² − 2x."),
  num(String.raw`At what $x$ is $f'(x)=0$ for $f(x)=x^2+6x$?`, -3, "2x + 6 = 0."),
  mc("The graph of f is a parabola opening up with vertex at x = 1. Which describes f′?", "a line with positive slope crossing zero at x = 1", ["a line with negative slope crossing zero at x = 1", "a parabola", "a horizontal line"], "f falls then rises.", graph((x) => (x - 1) ** 2 - 1, { xmin: -2, xmax: 4, ymin: -2, ymax: 6 })),
  num(String.raw`For $f(x)=x^3-4x$, find $f'(2)$.`, 8, "3(4) − 4."),
  num(String.raw`Find the y-intercept of the tangent to $y=x^2$ at $x=1$.`, -1, "y = 2x − 1."),
  tf("If f′(x) = 0 for every x, then f is constant.", true, "No change anywhere."),
  mx(String.raw`Find $f'(x)$ for $f(x)=(x+1)^2$.`, "2*x+2", "Expand: x² + 2x + 1."),
  num(String.raw`For $f(x)=\frac1x$, find $f'(-2)$.`, -0.25, "−1/4.", null, 0.0001),
  mc(String.raw`Where is $f(x)=|x+3|$ not differentiable?`, String.raw`$x=-3$`, [String.raw`$x=3$`, String.raw`$x=0$`, "nowhere"], "The corner."),
  num(String.raw`For $f(x)=x^4$, find $f'(2)$.`, 32, "4(8)."),
  mx(String.raw`Find $f'(x)$ for $f(x)=5-3x^2$.`, "-6*x", "−3 times 2x."),
  num(String.raw`Find the slope of the tangent to $y=\frac2x$ at $x=1$.`, -2, "−2/x²."),
  mc("The graph of f has turning points at x = −1 and x = 1. Where is f′(x) = 0?", "x = −1 and x = 1", ["x = 0", "x = ±2", "nowhere"], "Horizontal tangents.", graph((x) => x ** 3 - 3 * x, { xmin: -2.5, xmax: 2.5, ymin: -4, ymax: 4 })),
  num(String.raw`For $f(x)=\sqrt x$, find $f'(9)$ (4 decimals).`, 0.1667, "1/6.", null, 0.0005),
  num(String.raw`An object's position is $s(t)=t^3$ m. Find its velocity at $t=2$.`, 12, "3t²."),
  num(String.raw`At what positive $x$ is $f'(x)=0$ for $f(x)=x^3-3x$?`, 1, "3x² − 3 = 0."),
];
