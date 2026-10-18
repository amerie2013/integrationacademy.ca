// 3.1 Properties of Quadratic Functions — 20 easy + 20 medium questions
import { mc, ms, num, tf, mx } from "./kit.mjs";
import { P, graph } from "./fig.mjs";

const V8 = { xmin: -8, xmax: 8, ymin: -8, ymax: 8 };

export const E = [
  num(String.raw`What is the x-coordinate of the vertex of $y=(x-6)^2+1$?`, 6, "Vertex (6, 1)."),
  num(String.raw`What is the y-coordinate of the vertex of $y=-2(x+3)^2-5$?`, -5, "Vertex (−3, −5)."),
  mc(String.raw`Which way does $y=-0.5x^2+3$ open?`, "down", ["up", "left", "right"], "a < 0."),
  num(String.raw`What is the axis of symmetry of $y=(x-2)(x+8)$? Enter the x-value.`, -3, "Average of 2 and −8."),
  num(String.raw`What is the y-intercept of $y=3x^2-x+4$?`, 4, "c."),
  num(String.raw`What is the larger zero of $y=(x+1)(x-9)$?`, 9, "Zeros −1 and 9."),
  num(String.raw`What is the constant second difference of $y=5x^2$ (x-steps of 1)?`, 10, "2a."),
  tf(String.raw`The range of $y=(x-1)^2+4$ is $y\ge4$.`, true, "Opens up from height 4."),
  mc("Which form shows the vertex directly?", "vertex form", ["standard form", "factored form", "none of them"], "a(x − h)² + k."),
  num(String.raw`What is the y-intercept of $y=2(x-3)^2-1$?`, 17, "2(9) − 1."),
  num(String.raw`What is the maximum value of $y=-(x-4)^2+12$?`, 12, "Vertex (4, 12)."),
  num(String.raw`What is the minimum value of $y=x^2-6$?`, -6, "Vertex (0, −6)."),
  tf(String.raw`$y=-3x^2$ has a minimum value.`, false, "It opens down: a maximum."),
  mc("Which equation matches the parabola?", String.raw`$y=(x-2)^2-3$`, [String.raw`$y=(x+2)^2-3$`, String.raw`$y=(x-2)^2+3$`, String.raw`$y=-(x-2)^2-3$`], "Vertex (2, −3), opens up.", graph((x) => (x - 2) ** 2 - 3, V8, [P(2, -3)])),
  num("Read the graph: what is the larger zero?", 5, "It crosses at −1 and 5.", graph((x) => 0.5 * (x + 1) * (x - 5), V8, [P(-1, 0), P(5, 0)])),
  num(String.raw`What is the axis of symmetry of $y=x^2-10x+3$?`, 5, "−b/(2a) = 10/2."),
  mc("A table has constant second differences. The relation is…", "quadratic", ["linear", "exponential", "not a function"], "Constant second differences define quadratics."),
  num(String.raw`What is the y-intercept of $y=-(x+2)(x-6)$?`, 12, "−(2)(−6)."),
  tf("Every quadratic function has domain all real numbers.", true, "Any x can be substituted."),
  num(String.raw`What is the smaller zero of $y=x^2-x-20$?`, -4, "(x − 5)(x + 4)."),
];

export const M = [
  num(String.raw`What is the y-coordinate of the vertex of $y=x^2-8x+10$?`, -6, "x = 4: 16 − 32 + 10."),
  num(String.raw`What is the maximum value of $y=-3x^2+12x-5$?`, 7, "x = 2: −12 + 24 − 5."),
  mx(String.raw`Write $y=2(x-1)^2-3$ in standard form.`, "2*x^2-4*x-1", "2(x² − 2x + 1) − 3."),
  mx(String.raw`Write $y=-(x+4)(x-2)$ in standard form.`, "-x^2-2*x+8", "−(x² + 2x − 8)."),
  num(String.raw`A quadratic table (x-steps of 1) has second differences of $-8$. Find $a$.`, -4, "2a = −8."),
  num(String.raw`A quadratic $y=ax^2+bx+c$ gives $y=6,3,2$ at $x=0,1,2$. Find $b$.`, -4, "Second difference 2 → a = 1; c = 6; 1 + b + 6 = 3."),
  num(String.raw`Find $a$ if $y=a(x-2)(x-6)$ passes through $(4,8)$.`, -2, "a(2)(−2) = 8."),
  num("A parabola has vertex (1, −5) and passes through (3, 3). Find a.", 2, "4a − 5 = 3."),
  ms(String.raw`Which are true for $y=-2(x-3)^2+8$? Select all.`, ["vertex (3, 8)", "maximum value 8", "zeros 1 and 5", "y-intercept −10", "opens up"], [0, 1, 2, 3], "(x − 3)² = 4; −18 + 8 = −10."),
  num(String.raw`What is the y-intercept of $y=0.5(x+4)^2-2$?`, 6, "0.5(16) − 2."),
  mc("Which equation matches the graph?", String.raw`$y=2(x+3)(x-1)$`, [String.raw`$y=(x+3)(x-1)$`, String.raw`$y=2(x-3)(x+1)$`, String.raw`$y=-2(x+3)(x-1)$`], "Zeros −3, 1; y-intercept −6 = a(3)(−1).", graph((x) => 2 * (x + 3) * (x - 1), V8, [P(-3, 0), P(1, 0), P(0, -6)])),
  num("Read the graph: what is the largest value in the range?", 4, "Vertex (−1, 4), opens down.", graph((x) => -((x + 1) ** 2) + 4, V8, [P(-1, 4)])),
  tf(String.raw`The vertex of $y=a(x-r)(x-s)$ always has x-coordinate $\frac{r+s}2$.`, true, "The axis is halfway between the zeros."),
  num(String.raw`What is the minimum value of $y=4x^2-8x+1$?`, -3, "x = 1: 4 − 8 + 1."),
  num(String.raw`How far apart are the zeros of $y=(x-3)^2-16$?`, 8, "x = −1 and 7."),
  num(String.raw`How many x-intercepts does $y=-(x-2)^2$ have?`, 1, "The vertex (2, 0) is on the axis."),
  mc("Which is NOT a quadratic function?", String.raw`$y=2^x$`, [String.raw`$y=3-x^2$`, String.raw`$y=(x-1)(x+5)$`, String.raw`$y=\tfrac12(x+2)^2$`], "2^x is exponential."),
  num(String.raw`Write $y=(x-5)^2+2$ in standard form. What is $c$?`, 27, "25 + 2."),
  num(String.raw`What is the axis of symmetry of $y=-4x^2+24x-1$?`, 3, "−24/(−8)."),
  num(String.raw`A ball's height is $h(t)=-5(t-3)^2+50$ m. From what height was it thrown (t = 0)?`, 5, "−45 + 50."),
];
