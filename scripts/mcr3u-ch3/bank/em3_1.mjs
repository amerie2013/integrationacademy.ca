// 3.1 The Three Forms of a Quadratic Function — 20 easy + 20 medium questions
import { mc, ms, num, tf } from "./kit.mjs";
import { P, graph } from "./fig.mjs";

const S = String.raw;
const V8 = { xmin: -8, xmax: 8, ymin: -8, ymax: 8 };

export const E = [
  num(S`What is the x-coordinate of the vertex of $y=(x-6)^2+1$?`, 6, "Vertex (6, 1)."),
  num(S`What is the y-coordinate of the vertex of $y=-2(x+3)^2-5$?`, -5, "Vertex (−3, −5)."),
  mc(S`Which way does $y=-0.5x^2+3$ open?`, "down", ["up", "left", "right"], "a < 0."),
  num(S`What is the axis of symmetry of $y=(x-2)(x+8)$? Enter the x-value.`, -3, "Average of 2 and −8."),
  num(S`What is the y-intercept of $y=3x^2-x+4$?`, 4, "c."),
  num(S`What is the larger zero of $y=(x+1)(x-9)$?`, 9, "Zeros −1 and 9."),
  tf(S`The range of $y=(x-1)^2+4$ is $y\ge4$.`, true, "Opens up from height 4."),
  mc("Which form shows the vertex directly?", "vertex form", ["standard form", "factored form", "none of them"], "a(x − h)² + k."),
  num(S`What is the y-intercept of $y=2(x-3)^2-1$?`, 17, "2(9) − 1."),
  num(S`What is the maximum value of $y=-(x-4)^2+12$?`, 12, "Vertex (4, 12)."),
  num(S`What is the minimum value of $y=x^2-6$?`, -6, "Vertex (0, −6)."),
  tf(S`$y=-3x^2$ has a minimum value.`, false, "It opens down: a maximum."),
  mc("Which equation matches the parabola?", S`$y=(x-2)^2-3$`, [S`$y=(x+2)^2-3$`, S`$y=(x-2)^2+3$`, S`$y=-(x-2)^2-3$`], "Vertex (2, −3), opens up.", graph((x) => (x - 2) ** 2 - 3, V8, [P(2, -3)])),
  num("Read the graph: what is the larger zero?", 5, "It crosses at −1 and 5.", graph((x) => 0.5 * (x + 1) * (x - 5), V8, [P(-1, 0), P(5, 0)])),
  num(S`What is the y-intercept of $y=-(x+2)(x-6)$?`, 12, "−(2)(−6)."),
  tf("Every quadratic function has domain all real numbers.", true, "Any x can be substituted."),
  num(S`What is the y-coordinate of the vertex of $y=5(x-1)(x-3)$?`, -5, "Axis x = 2: 5(1)(−1)."),
  tf(S`The axis of symmetry of $y=-(x+7)^2+2$ is $x=7$.`, false, "The sign inside is opposite: x = −7."),
  mc(S`Which form is $y=4(x-2)(x+6)$ written in?`, "factored form", ["vertex form", "standard form", "none of these"], "A product of linear factors."),
  num("Read the graph: what is the maximum value of the function?", 6, "The vertex (1, 6) is the highest point.", graph((x) => -((x - 1) ** 2) + 6, V8, [P(1, 6)])),
];

export const M = [
  ms(S`Which are true for $y=-2(x-3)^2+8$? Select all.`, ["vertex (3, 8)", "maximum value 8", "zeros 1 and 5", "y-intercept −10", "opens up"], [0, 1, 2, 3], "(x − 3)² = 4; −18 + 8 = −10."),
  num(S`What is the y-intercept of $y=0.5(x+4)^2-2$?`, 6, "0.5(16) − 2."),
  num("Read the graph: what is the largest value in the range?", 4, "Vertex (−1, 4), opens down.", graph((x) => -((x + 1) ** 2) + 4, V8, [P(-1, 4)])),
  tf(S`The vertex of $y=a(x-r)(x-s)$ always has x-coordinate $\frac{r+s}2$.`, true, "The axis is halfway between the zeros."),
  num(S`How far apart are the zeros of $y=(x-3)^2-16$?`, 8, "x = −1 and 7."),
  num(S`How many x-intercepts does $y=-(x-2)^2$ have?`, 1, "The vertex (2, 0) is on the axis."),
  num(S`A ball's height is $h(t)=-5(t-3)^2+50$ m. From what height was it thrown (t = 0)?`, 5, "−45 + 50."),
  num(S`What is the maximum value of $y=-2(x+1)(x-5)$?`, 18, "Axis x = 2: −2(3)(−3)."),
  num(S`What is the y-intercept of $y=-3(x-2)(x+4)$?`, 24, "−3(−2)(4)."),
  mc(S`What is the range of $y=3(x+1)(x-3)$?`, S`$y\ge-12$`, [S`$y\le-12$`, S`$y\ge-3$`, S`$y\ge1$`], "Axis x = 1: 3(2)(−2) = −12, and a > 0."),
  num(S`How far apart are the zeros of $y=2(x+3)^2-8$?`, 4, "(x + 3)² = 4: x = −1 or −5."),
  ms("Which functions have a maximum value? Select all.", [S`$y=-(x-1)^2$`, S`$y=5-2x^2$`, S`$y=(3-x)(x+1)$`, S`$y=2(x+4)^2-9$`, S`$y=x^2-10$`], [0, 1, 2], "A maximum needs a < 0; (3 − x)(x + 1) has a = −1."),
  num(S`How many zeros does $y=-3(x-4)^2-1$ have?`, 0, "Opens down from height −1: it never reaches 0."),
  tf(S`$y=(x-3)(x+5)$ and $y=2(x-3)(x+5)$ have the same vertex.`, false, "Same axis x = −1, but the minimums are −16 and −32."),
  num(S`What is the minimum value of $y=0.5x(x-8)$?`, -8, "Axis x = 4: 0.5(4)(−4)."),
  num("Read the graph: what is the smaller zero?", -5, "It crosses at −5 and 1.", graph((x) => -0.5 * (x + 5) * (x - 1), V8, [P(-5, 0), P(1, 0)])),
  mc("Which statement about the parabola shown is true?", S`its range is $y\ge-4$`, ["its axis is x = 2", "its maximum value is −4", "its zeros are −2 and 2"], "Vertex (−2, −4), opens up, zeros −4 and 0.", graph((x) => (x + 2) ** 2 - 4, V8, [P(-2, -4), P(-4, 0), P(0, 0)])),
  num(S`A ball's height is $h(t)=-5(t-1.5)^2+16.25$ m. What is its maximum height?`, 16.25, "k of the vertex.", null, 0.001),
  num(S`The axis of $y=-(x-p)(x+3)$ is $x=2$. Find $p$.`, 7, "(p − 3)/2 = 2."),
  num(S`What is the y-intercept of $y=-(x+3)^2+10$?`, 1, "−9 + 10."),
];
