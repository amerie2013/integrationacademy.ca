// 3.6 The Quadratic Formula and the Discriminant — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { planeDoc, P } from "../../mcr3u-ch1/bank/fig.mjs";

const S = String.raw;

export const E = [
  num(S`Find the discriminant of $x^2+6x+5$.`, 16, "36 − 20."),
  num(S`Find the discriminant of $2x^2-3x+4$.`, -23, "9 − 32."),
  num(S`How many real roots does $x^2-2x+6=0$ have?`, 0, "Δ = 4 − 24 < 0."),
  num(S`How many real roots does $x^2-10x+25=0$ have?`, 1, "Δ = 100 − 100 = 0."),
  num(S`How many real roots does $3x^2+x-1=0$ have?`, 2, "Δ = 1 + 12 > 0."),
  mc(S`If $\Delta>0$, the equation $ax^2+bx+c=0$ has:`, "two different real roots", ["one repeated root", "no real roots", "exactly three roots"], "√Δ is a positive number, giving ±."),
  tf(S`If $\Delta<0$, the graph of $y=ax^2+bx+c$ does not meet the x-axis.`, true, "There are no real zeros."),
  fill(S`The expression $b^2-4ac$ is called the ___.`, ["discriminant", "Discriminant"], "It discriminates between the cases."),
  num(S`Use the formula to solve $x^2-4x+1=0$. Give the larger root (2 d.p.).`, 2 + Math.sqrt(3), "x = (4 ± √12)/2 = 2 ± √3.", null, 0.01),
  num(S`Use the formula to solve $x^2+x-1=0$. Give the positive root (2 d.p.).`, (-1 + Math.sqrt(5)) / 2, "x = (−1 ± √5)/2.", null, 0.01),
  num(S`Find the discriminant of $5x^2-2x-7$.`, 144, "4 + 140."),
  mc("The quadratic formula is:", S`$x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}$`, [S`$x=\frac{b\pm\sqrt{b^2-4ac}}{2a}$`, S`$x=\frac{-b\pm\sqrt{b^2+4ac}}{2a}$`, S`$x=-b\pm\frac{\sqrt{b^2-4ac}}{2a}$`], "All of −b ± √Δ is divided by 2a."),
  mc(S`The graph of $y=ax^2+bx+c$ is shown. The discriminant is:`, "negative", ["positive", "zero", "not possible to tell"], "The parabola never meets the x-axis.", planeDoc({ view: { xmin: -2, xmax: 5, ymin: -1, ymax: 8 }, curves: [{ f: (x) => (x - 1.5) ** 2 + 1.5 }] })),
  tf(S`For the parabola shown, $\Delta>0$.`, true, "It crosses the x-axis twice.", planeDoc({ view: { xmin: -3, xmax: 4, ymin: -5, ymax: 5 }, curves: [{ f: (x) => x * x - x - 3 }] })),
  mc(S`The exact roots of $x^2-6x+4=0$ are:`, S`$3\pm\sqrt5$`, [S`$-3\pm\sqrt5$`, S`$3\pm\sqrt{13}$`, S`$6\pm\sqrt5$`], "x = (6 ± √20)/2."),
  num(S`Find the discriminant of $x^2-8x+16$.`, 0, "64 − 64."),
  num(S`For which $k$ does $x^2+4x+k$ have discriminant 0?`, 4, "16 − 4k = 0."),
  tf(S`$x^2+1=0$ has two real roots.`, false, "Δ = −4 < 0."),
  num(S`Use the formula to solve $x^2-2x-1=0$. Give the positive root (2 d.p.).`, 1 + Math.sqrt(2), "x = 1 ± √2.", null, 0.01),
  num(S`Find the discriminant of $-x^2+3x+4$.`, 25, "9 − 4(−1)(4) = 9 + 16."),
];

export const M = [
  num(S`Solve $2x^2+6x-3=0$. Give the larger root (3 s.f.).`, (-6 + Math.sqrt(60)) / 4, "x = (−6 ± √60)/4.", null, 0.005),
  num(S`Solve $3x^2-5x-1=0$. Give the positive root (3 s.f.).`, (5 + Math.sqrt(37)) / 6, "x = (5 ± √37)/6.", null, 0.005),
  num(S`$x^2-kx+16=0$ has equal roots and $k>0$. Find $k$.`, 8, "k² − 64 = 0."),
  mc(S`$x^2+8x+k=0$ has two distinct real roots when:`, S`$k<16$`, [S`$k>16$`, S`$k=16$`, S`$k\le16$`], "64 − 4k > 0."),
  num(S`$kx^2+6x+3=0$ has equal roots. Find $k$.`, 3, "36 − 12k = 0."),
  num(S`What is the smallest integer $k$ for which $x^2+10x+k=0$ has no real roots?`, 26, "100 − 4k < 0 → k > 25."),
  mc(S`The line $y=3x-2$ and the parabola $y=x^2+x$:`, "do not meet", ["meet at two points", "touch at one point", "meet at three points"], "x² − 2x + 2 = 0 has Δ = −4."),
  num(S`$y=x+6$ meets $y=x^2$ at two points. Give the larger y-coordinate.`, 9, "x² − x − 6 = 0 → x = 3 or −2."),
  mc(S`Solve $x^2-3x-10<0$.`, S`$-2<x<5$`, [S`$x<-2$ or $x>5$`, S`$-5<x<2$`, S`$x<-5$ or $x>2$`], "(x − 5)(x + 2) < 0 between the roots."),
  mc(S`Solve $x^2\ge9$.`, S`$x\le-3$ or $x\ge3$`, [S`$-3\le x\le3$`, S`$x\ge3$`, S`$x\ge\pm3$`], "Outside the roots ±3."),
  num(S`How many integers satisfy $x^2-6x+5<0$?`, 3, "1 < x < 5: 2, 3, 4."),
  mc(S`The graph of $y=x^2-2x-3$ is shown. Solve $x^2-2x-3>0$.`, S`$x<-1$ or $x>3$`, [S`$-1<x<3$`, S`$x>3$`, S`$-3<x<1$`], "Above the axis outside the zeros.", planeDoc({ view: { xmin: -3, xmax: 5, ymin: -5, ymax: 6 }, curves: [{ f: (x) => x * x - 2 * x - 3 }], points: [P(-1, 0), P(3, 0)] })),
  num(S`The line $y=2x-1$ touches $y=x^2$ (shown). Find the x-coordinate of the point of contact.`, 1, "x² − 2x + 1 = (x − 1)² = 0.", planeDoc({ view: { xmin: -2, xmax: 4, ymin: -3, ymax: 7 }, curves: [{ f: (x) => x * x }], lines: [{ m: 2, b: -1, color: "green" }], points: [P(1, 1)] })),
  num(S`Use the formula to find the sum of the roots of $2x^2-9x+3=0$.`, 4.5, "The ±√Δ parts cancel: 2 × 9/4.", null, 1e-9),
  ms("Which have two distinct real roots? Select all.", [S`$x^2-x-1=0$`, S`$2x^2+3x+2=0$`, S`$x^2+5x=0$`, S`$4x^2-4x+1=0$`], [0, 2], "Δ = 5, −7, 25, 0."),
  tf(S`If $a$ and $c$ have opposite signs, $ax^2+bx+c=0$ always has two real roots.`, true, "−4ac > 0, so Δ = b² − 4ac > 0."),
  num(S`$y=mx+1$ is a tangent to $y=x^2+2$ and $m>0$. Find $m$.`, 2, "x² − mx + 1 = 0 with m² − 4 = 0."),
  num(S`Solve $0.5x^2-3x+2=0$. Give the larger root (2 d.p.).`, 3 + Math.sqrt(5), "x = (3 ± √5)/1.", null, 0.01),
  num(S`The roots of $x^2+2x+c=0$ differ by 4. Find $c$.`, -3, "Roots −1 ± 2 = 1 and −3; c = 1 × (−3)."),
  num(S`Solve $x^2+5x+2=0$. Give the smaller root (2 d.p.).`, (-5 - Math.sqrt(17)) / 2, "x = (−5 ± √17)/2.", null, 0.01),
];
