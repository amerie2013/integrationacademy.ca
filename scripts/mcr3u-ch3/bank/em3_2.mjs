// 3.2 Converting Between Forms — 20 easy + 20 medium questions
import { mc, num, tf, mx } from "./kit.mjs";
import { P, graph } from "./fig.mjs";

const S = String.raw;
const V8 = { xmin: -8, xmax: 8, ymin: -8, ymax: 8 };

export const E = [
  num(S`Use $x=-\frac{b}{2a}$: what is the axis of symmetry of $y=x^2-10x+3$?`, 5, "−b/(2a) = 10/2."),
  num(S`What is the smaller zero of $y=x^2-x-20$?`, -4, "(x − 5)(x + 4)."),
  mx(S`Expand $y=(x+2)^2+1$ into standard form.`, "x^2+4*x+5", "x² + 4x + 4 + 1."),
  mx(S`Write $y=(x-1)(x+6)$ in standard form.`, "x^2+5*x-6", "Multiply the brackets."),
  num(S`Write $y=2(x+1)^2-3$ in standard form. What is the constant term?`, -1, "2(x² + 2x + 1) − 3 = 2x² + 4x − 1."),
  num(S`What is $a$ when $y=-4(x-3)^2+1$ is written in standard form?`, -4, "a never changes."),
  mc(S`Which is the factored form of $x^2+7x+10$?`, "(x + 2)(x + 5)", ["(x + 1)(x + 10)", "(x − 2)(x − 5)", "(x + 3)(x + 4)"], "Product 10, sum 7."),
  num(S`Use $x=-\frac{b}{2a}$: what is the axis of $y=2x^2-12x+5$?`, 3, "12/4."),
  num(S`What is the larger zero of $y=x^2-4x-21$?`, 7, "(x − 7)(x + 3)."),
  tf("Converting a quadratic from one form to another changes the value of a.", false, "a is the same in every form."),
  num("The zeros of a parabola are −2 and 8. What is the x-coordinate of its vertex?", 3, "Average the zeros."),
  mc(S`What should you do first to factor $5x^2-20x-25$?`, "take out the common factor 5", ["use the axis formula", "expand it", "add 25 to both sides"], "5(x² − 4x − 5) = 5(x − 5)(x + 1)."),
  num(S`Write $y=-(x+3)(x-3)$ in standard form. What is the constant term?`, 9, "−(x² − 9) = −x² + 9."),
  num(S`What is the y-coordinate of the vertex of $y=(x-2)(x-6)$?`, -4, "Axis 4: (2)(−2)."),
  mc(S`The axis of symmetry of $y=ax^2+bx+c$ is:`, S`$x=-\frac{b}{2a}$`, [S`$x=\frac{b}{2a}$`, S`$x=-\frac{2a}{b}$`, S`$x=c$`], "Halfway between x = 0 and x = −b/a."),
  num(S`Factor $y=x^2-16$. What is the positive zero?`, 4, "(x − 4)(x + 4)."),
  num(S`$y=3x^2+6x$. What is its nonzero zero?`, -2, "3x(x + 2)."),
  num("The parabola shown has zeros −1 and 3 and a = 1. What is b in its standard form?", -2, "(x + 1)(x − 3) = x² − 2x − 3.", graph((x) => (x + 1) * (x - 3), V8, [P(-1, 0), P(3, 0), P(0, -3)])),
  num("The parabola shown has vertex (−2, 1) and a = 1. Write it in standard form. What is c?", 5, "(x + 2)² + 1 = x² + 4x + 5.", graph((x) => (x + 2) ** 2 + 1, V8, [P(-2, 1)])),
  num("A parabola has vertex (0, −3) and passes through (1, −1). Find a.", 2, "a(1)² − 3 = −1."),
];

export const M = [
  num(S`What is the y-coordinate of the vertex of $y=x^2-8x+10$?`, -6, "x = 4: 16 − 32 + 10."),
  num(S`What is the maximum value of $y=-3x^2+12x-5$?`, 7, "x = 2: −12 + 24 − 5."),
  mx(S`Write $y=2(x-1)^2-3$ in standard form.`, "2*x^2-4*x-1", "2(x² − 2x + 1) − 3."),
  mx(S`Write $y=-(x+4)(x-2)$ in standard form.`, "-x^2-2*x+8", "−(x² + 2x − 8)."),
  num(S`Find $a$ if $y=a(x-2)(x-6)$ passes through $(4,8)$.`, -2, "a(2)(−2) = 8."),
  num("A parabola has vertex (1, −5) and passes through (3, 3). Find a.", 2, "4a − 5 = 3."),
  mc("Which equation matches the graph?", S`$y=2(x+3)(x-1)$`, [S`$y=(x+3)(x-1)$`, S`$y=2(x-3)(x+1)$`, S`$y=-2(x+3)(x-1)$`], "Zeros −3, 1; y-intercept −6 = a(3)(−1).", graph((x) => 2 * (x + 3) * (x - 1), V8, [P(-3, 0), P(1, 0), P(0, -6)])),
  num(S`What is the minimum value of $y=4x^2-8x+1$?`, -3, "x = 1: 4 − 8 + 1."),
  num(S`Write $y=(x-5)^2+2$ in standard form. What is $c$?`, 27, "25 + 2."),
  num(S`What is the axis of symmetry of $y=-4x^2+24x-1$?`, 3, "−24/(−8)."),
  mx(S`Write $y=-2(x+3)^2+4$ in standard form.`, "-2*x^2-12*x-14", "−2(x² + 6x + 9) + 4."),
  mx(S`Write $y=3(x-1)(x-4)$ in standard form.`, "3*x^2-15*x+12", "3(x² − 5x + 4)."),
  num(S`Write $y=x^2+8x+7$ in vertex form $y=(x-h)^2+k$. What is $k$?`, -9, "h = −4: 16 − 32 + 7."),
  num(S`Write $y=-x^2+6x-2$ in vertex form. What is $k$?`, 7, "h = 3: −9 + 18 − 2."),
  num("A parabola has zeros −6 and 2 and passes through (0, 6). Find a.", -0.5, "a(6)(−2) = −12a = 6.", null, 0.001),
  num("A parabola has vertex (4, −2) and y-intercept 6. Find a.", 0.5, "16a − 2 = 6.", null, 0.001),
  num(S`Find the zeros of $y=2x^2+10x+12$. Enter the larger one.`, -2, "2(x + 2)(x + 3)."),
  mc("Which vertex-form equation matches the graph?", S`$y=\tfrac12(x-2)^2-2$`, [S`$y=2(x-2)^2-2$`, S`$y=\tfrac12(x+2)^2-2$`, S`$y=(x-2)^2-2$`], "Vertex (2, −2); through (0, 0): 4a − 2 = 0.", graph((x) => 0.5 * (x - 2) ** 2 - 2, V8, [P(2, -2), P(0, 0), P(4, 0)])),
  num(S`$y=x^2+bx+c$ has zeros 3 and 7. Find $c$.`, 21, "(x − 3)(x − 7)."),
  tf(S`$y=2(x-1)^2+3$ and $y=2x^2-4x+5$ are the same function.`, true, "2x² − 4x + 2 + 3."),
];
