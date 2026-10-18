// 1.3 Equations and Graphs of Polynomial Functions — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { graph, P } from "./fig.mjs";

export const E = [
  mc(String.raw`What are the zeros of $f(x)=(x-3)(x+5)$?`, "3 and −5", ["−3 and 5", "3 and 5", "−3 and −5"], "Set each factor to 0."),
  num(String.raw`What is the order of the zero $x=2$ in $f(x)=(x-2)^3(x+1)$?`, 3, "The power on (x − 2)."),
  num(String.raw`Find the y-intercept of $f(x)=(x+1)(x-4)(x+2)$.`, -8, "(1)(−4)(2)."),
  num(String.raw`What is the degree of $f(x)=(x-1)^2(x+3)^3$?`, 5, "2 + 3."),
  tf(String.raw`At a zero of order 2, the graph crosses the x-axis.`, false, "It touches and turns back."),
  mc("At a zero of order 1, the graph:", "crosses the x-axis like a line", ["touches and turns back", "crosses with a flat bend", "does not reach the axis"], "Order 1 behaves like a line."),
  num(String.raw`What is the smallest zero of $f(x)=(x+6)(x-2)(x-9)$?`, -6, "Zeros −6, 2, 9."),
  num(String.raw`Find the y-intercept of $f(x)=2(x-1)^2(x+3)$.`, 6, "2(1)(3)."),
  mc("Which equation matches the graph?", String.raw`$y=\tfrac12(x+1)(x-2)(x-4)$`, [String.raw`$y=\tfrac12(x-1)(x+2)(x+4)$`, String.raw`$y=\tfrac12(x+1)(x+2)(x+4)$`, String.raw`$y=-\tfrac12(x+1)(x-2)(x-4)$`], "Zeros −1, 2, 4 and Q3 → Q1.", graph((x) => (x + 1) * (x - 2) * (x - 4) / 2, { xmin: -2, xmax: 5, ymin: -5, ymax: 6 }, [P(-1, 0), P(2, 0), P(4, 0)])),
  tf(String.raw`$y=-(x-1)(x+2)$ opens downward.`, true, "Leading coefficient −1."),
  fill(String.raw`The zero of the factor $(2x-5)$ is $x=$ ___.`, ["2.5", "5/2"], "2x − 5 = 0."),
  mc("The graph touches the x-axis at x = 2. Which factor is in its equation?", String.raw`$(x-2)^2$`, [String.raw`$(x+2)^2$`, String.raw`$(x-2)^3$`, String.raw`$(x+1)^2$`], "Touching means an even order.", graph((x) => (x - 2) ** 2 * (x + 1) / 2, { xmin: -2, xmax: 4, ymin: -4, ymax: 5 })),
  num(String.raw`How many distinct zeros does $f(x)=x(x-3)^2(x+4)$ have?`, 3, "0, 3, −4."),
  mc(String.raw`End behaviour of $f(x)=-(x-1)(x+2)(x-5)$:`, "Q2 → Q4", ["Q3 → Q1", "up at both ends", "down at both ends"], "Degree 3, a = −1."),
  tf(String.raw`The factor $(x+4)$ gives a zero at $x=4$.`, false, "It gives x = −4."),
  num(String.raw`Evaluate $f(x)=(x-2)(x+3)$ at $x=1$.`, -4, "(−1)(4)."),
  mc(String.raw`What is the sign of $(x-1)(x-4)$ when $1<x<4$?`, "negative", ["positive", "zero", "it depends on x"], "One factor positive, one negative."),
  num(String.raw`What is the largest zero of $f(x)=3(x+2)(x-7)^2$?`, 7, "Zeros −2 and 7."),
  mc(String.raw`The family $y=k(x-1)(x+3)$ all share the same:`, "x-intercepts", ["y-intercept", "vertex", "direction of opening"], "k changes the stretch only."),
  num(String.raw`What is the degree of $f(x)=x^2(x-1)(x+5)^2$?`, 5, "2 + 1 + 2."),
];

export const M = [
  num(String.raw`A cubic $y=a(x+2)(x-1)(x-3)$ passes through $(0,12)$. Find $a$.`, 2, "a(2)(−1)(−3) = 6a = 12."),
  num(String.raw`A quadratic has zeros 4 and $-1$ and passes through $(2,-12)$. Find its leading coefficient.`, 2, "a(−2)(3) = −6a = −12."),
  ms(String.raw`Where is $(x+3)(x-2)>0$? Select all.`, [String.raw`$x<-3$`, String.raw`$-3<x<2$`, String.raw`$x>2$`, String.raw`$x=0$`], [0, 2], "Positive outside the zeros."),
  mc(String.raw`Solve $(x-1)(x+2)(x-4)<0$.`, String.raw`$x<-2$ or $1<x<4$`, [String.raw`$-2<x<1$ or $x>4$`, String.raw`$x<1$`, String.raw`$-2<x<4$`], "Degree 3, a > 0: −, +, −, +."),
  num(String.raw`Evaluate $f(x)=(x+1)^2(x-3)$ at $x=-2$.`, -5, "(1)(−5)."),
  mc("Which equation has the graph shown?", String.raw`$y=\tfrac14(x+3)^2(x-2)$`, [String.raw`$y=\tfrac14(x-3)^2(x+2)$`, String.raw`$y=\tfrac14(x+3)(x-2)^2$`, String.raw`$y=-\tfrac14(x+3)^2(x-2)$`], "Touches at −3, crosses at 2, Q3 → Q1.", graph((x) => 0.25 * (x + 3) ** 2 * (x - 2), { xmin: -4, xmax: 3, ymin: -7, ymax: 4 }, [P(-3, 0), P(2, 0)])),
  tf(String.raw`$f(x)=(x-2)^2(x+1)$ is negative for every $x<-1$.`, true, "(positive)(negative)."),
  num(String.raw`How many times does $y=x(x-1)^2(x+2)^3$ cross (not just touch) the x-axis?`, 2, "Crosses at 0 and −2; touches at 1."),
  mc(String.raw`Which polynomial has degree 3, a zero of order 2 at $-2$ and a zero at 3?`, String.raw`$(x+2)^2(x-3)$`, [String.raw`$(x-2)^2(x+3)$`, String.raw`$(x+2)(x-3)^2$`, String.raw`$(x+2)^3(x-3)$`], "(x + 2)² and (x − 3)."),
  num(String.raw`$f(x)=a(x+1)(x-1)(x-2)(x-3)$ has $f(0)=12$. Find $a$.`, -2, "a(1)(−1)(−2)(−3) = −6a = 12."),
  mc(String.raw`Factor $x^3-4x^2$ and state its zeros.`, "x²(x − 4): 0 (order 2) and 4", ["x(x − 4): 0 and 4", "x²(x + 4): 0 and −4", "(x − 2)²x: 0 and 2"], "Common factor x²."),
  num(String.raw`Find the positive zero of $f(x)=x^3-16x$.`, 4, "x(x − 4)(x + 4)."),
  ms(String.raw`Which are zeros of $f(x)=2x^3-18x$? Select all.`, ["0", "3", "−3", "9"], [0, 1, 2], "2x(x − 3)(x + 3)."),
  mc("What is the sign of the leading coefficient of the quartic shown?", "negative", ["positive", "zero", "cannot tell"], "Down at both ends.", graph((x) => -(x + 2) * x * (x - 1) * (x - 3) / 4, { xmin: -3, xmax: 4, ymin: -4, ymax: 4 })),
  num(String.raw`Find the y-intercept of $f(x)=-(x-1)(x+2)(x+4)$.`, 8, "−(−1)(2)(4)."),
  mc(String.raw`Solve $(x+1)^2(x-4)\ge0$.`, String.raw`$x=-1$ or $x\ge4$`, [String.raw`$x\ge4$`, String.raw`$x\ge-1$`, String.raw`$-1\le x\le4$`], "(x + 1)² ≥ 0; the product is 0 at x = −1 and positive only for x > 4."),
  num(String.raw`How many distinct real zeros does $f(x)=(x^2+1)(x-5)$ have?`, 1, "x² + 1 is never 0."),
  tf("Two different cubic functions can have the same three zeros.", true, "Change the leading coefficient."),
  num(String.raw`$y=k(x+1)(x-2)(x-5)$ passes through $(1,16)$. Find $k$.`, 2, "k(2)(−1)(−4) = 8k."),
  fill(String.raw`A polynomial in factored form has zeros of orders 2, 3 and 1 and no other factors. Its degree is ___.`, ["6", "six"], "2 + 3 + 1."),
];
