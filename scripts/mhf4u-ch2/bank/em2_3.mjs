// 2.3 Polynomial Equations — 20 easy + 20 medium questions
import { mc, num, tf, fill } from "./kit.mjs";
import { graph, planeDoc, P } from "./fig.mjs";

export const E = [
  num(String.raw`Solve $x^3=64$.`, 4, "4³ = 64."),
  num(String.raw`Find the largest root of $x(x-3)(x+7)=0$.`, 3, "Roots 0, 3, −7."),
  num(String.raw`Find the smallest root of $(x+2)(x-5)(x-1)=0$.`, -2, "Roots −2, 5, 1."),
  mc(String.raw`Solve $x^2(x-4)=0$.`, String.raw`$x=0$ or $x=4$`, [String.raw`$x=4$ only`, String.raw`$x=-4$ or $x=0$`, String.raw`$x=2$ or $x=4$`], "x² = 0 gives 0."),
  num(String.raw`Find the real root of $x^3+125=0$.`, -5, "(−5)³ = −125."),
  tf(String.raw`$x^3-x=0$ has three real roots.`, true, "x(x − 1)(x + 1): 0, ±1."),
  num(String.raw`How many real roots does $x^2+9=0$ have?`, 0, "x² = −9 has none."),
  num(String.raw`How many real roots does $(x-1)(x^2+4)=0$ have?`, 1, "Only x = 1."),
  mc(String.raw`Solve $2x^3=18x$.`, String.raw`$x=0, \pm3$`, [String.raw`$x=\pm3$`, String.raw`$x=3$`, String.raw`$x=0, 9$`], "2x(x² − 9) = 0 — don't divide by x."),
  num(String.raw`Find the positive root of $x^4=81$.`, 3, "3⁴ = 81."),
  mc("What are the real roots of P(x) = 0 for the graph shown?", "−2, 1, 3", ["−3, −1, 2", "−2, 3", "0, 1, 3"], "Read the x-intercepts.", graph((x) => 0.5 * (x + 2) * (x - 1) * (x - 3), { xmin: -3, xmax: 4, ymin: -6, ymax: 6 })),
  tf("The real roots of P(x) = 0 are the x-intercepts of y = P(x).", true, "Where P(x) = 0."),
  num(String.raw`Find the real root of $8x^3=1$.`, 0.5, "x³ = ⅛.", null, 0.001),
  mc(String.raw`What is the first step in solving $x^3=5x$?`, String.raw`Rewrite as $x^3-5x=0$`, ["Divide both sides by x", "Take the cube root of both sides", "Square both sides"], "Get 0 on one side, then factor."),
  num(String.raw`Find the sum of the roots of $(x-4)(x+1)(x-2)=0$.`, 5, "4 − 1 + 2."),
  num(String.raw`How many distinct roots does $(x-3)^2(x+1)=0$ have?`, 2, "3 and −1."),
  mc(String.raw`Which equation has the root $x=2$?`, String.raw`$x^3-8=0$`, [String.raw`$x^3+8=0$`, String.raw`$x^2+4=0$`, String.raw`$x^3-2x^2-1=0$`], "2³ − 8 = 0."),
  num(String.raw`Find the positive root of $x^3-4x=0$.`, 2, "x(x − 2)(x + 2)."),
  num("How many distinct real roots does the equation P(x) = 0 shown by the graph have?", 2, "It touches at one point and crosses at another.", graph((x) => 0.5 * (x - 1) ** 2 * (x + 2), { xmin: -3, xmax: 2.5, ymin: -4, ymax: 4 })),
  fill(String.raw`Complete: $a^3-b^3=(a-b)($___$)$.`, ["a^2+ab+b^2", "a²+ab+b²", "a^2+ba+b^2", "b^2+ab+a^2"], "Same sign, opposite sign, always positive."),
];

export const M = [
  num(String.raw`Find the largest root of $x^3-4x^2-4x+16=0$.`, 4, "x²(x − 4) − 4(x − 4) = (x − 4)(x − 2)(x + 2)."),
  num(String.raw`Find the smallest root of $x^3+5x^2-x-5=0$.`, -5, "x²(x + 5) − (x + 5)."),
  mc(String.raw`Solve $x^3-13x-12=0$.`, String.raw`$x=-1, 4, -3$`, [String.raw`$x=1, -4, 3$`, String.raw`$x=-1, 3, 4$`, String.raw`$x=1, 12$`], "P(−1) = 0; quotient x² − x − 12."),
  num(String.raw`Find the largest root of $x^4-20x^2+64=0$.`, 4, "(x² − 4)(x² − 16)."),
  num(String.raw`Find the real root of $27x^3-64=0$ (2 decimals).`, 1.3333, "(3x − 4)(9x² + 12x + 16).", null, 0.006),
  mc(String.raw`Solve $x^3-2x^2-2x+4=0$.`, String.raw`$x=2, \pm\sqrt2$`, [String.raw`$x=-2, \pm\sqrt2$`, String.raw`$x=2, \pm2$`, String.raw`$x=\pm\sqrt2$`], "x²(x − 2) − 2(x − 2)."),
  num(String.raw`How many real roots does $x^3+x^2+4x+4=0$ have?`, 1, "(x + 1)(x² + 4)."),
  num(String.raw`Find the largest root of $x^3-6x^2+5x+12=0$.`, 4, "P(−1) = 0; quotient (x − 3)(x − 4)."),
  mc("For which values of k does x³ − 3x = k have three real solutions?", String.raw`$-2<k<2$`, [String.raw`$k>2$`, String.raw`$k<-2$`, String.raw`$k=0$ only`], "The line y = k must pass between the turning values 2 and −2.", planeDoc({ view: { xmin: -2.5, xmax: 2.5, ymin: -4, ymax: 4 }, curves: [{ f: (x) => x ** 3 - 3 * x, color: "violet" }], points: [P(-1, 2), P(1, -2)], step: { x: 0.5, y: 1 } })),
  num(String.raw`Find the positive root of $2x^3+3x^2-2x=0$.`, 0.5, "x(2x − 1)(x + 2).", null, 0.001),
  num(String.raw`Find the product of the roots of $(2x-1)(x+3)(x-4)=0$.`, -6, "½ · (−3) · 4."),
  mc(String.raw`Find the real roots of $x^4-16=0$.`, String.raw`$x=\pm2$`, [String.raw`$x=2$`, String.raw`$x=\pm4$`, String.raw`$x=\pm2, \pm4$`], "(x² − 4)(x² + 4)."),
  num(String.raw`A box measures $x$ by $x$ by $x+3$ and has volume 20. Find $x$.`, 2, "x³ + 3x² − 20 = 0; x = 2 works."),
  num(String.raw`How many distinct roots does $x^3+x^2-x-1=0$ have?`, 2, "(x + 1)²(x − 1)."),
  num(String.raw`$x=1$ is a root of $2x^3+kx^2-x+1=0$. Find $k$.`, -2, "2 + k − 1 + 1 = 0."),
  num(String.raw`Find the smallest positive root of $x^3-2x^2-3x+6=0$ (2 decimals).`, 1.732, "(x − 2)(x² − 3): √3 ≈ 1.73.", null, 0.006),
  mc("Use the graph to solve P(x) = 2.", String.raw`$x=-1$ or $x=2$`, [String.raw`$x=1$ or $x=-2$`, String.raw`$x=2$ only`, String.raw`$x=-1, 0, 2$`], "The line y = 2 touches at −1 and crosses at 2.", planeDoc({ view: { xmin: -2.5, xmax: 2.5, ymin: -4, ymax: 4 }, curves: [{ f: (x) => x ** 3 - 3 * x, color: "violet" }, { f: () => 2, color: "green" }], step: { x: 0.5, y: 1 } })),
  num("The product of three consecutive positive integers is 120. Find the smallest.", 4, "4 · 5 · 6 = 120."),
  tf(String.raw`$x^3=4x$ can be solved correctly by dividing both sides by $x$.`, false, "That loses the root x = 0."),
  num(String.raw`Find the sum of the real roots of $x^4-5x^2+6=0$.`, 0, "±√2, ±√3."),
];
