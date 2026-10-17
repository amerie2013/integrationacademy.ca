// 4.6 Standard Form & Converting Between Forms — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { areaDoc, planeDoc } from "./fig.mjs";

export const E = [
  num(`Write $y=(x+2)^2+1$ in standard form. What is the constant term?`, 5, "$x^2+4x+4+1$."),
  num(`Write $y=(x-3)^2-1$ in standard form. What is the coefficient of $x$?`, -6, "$x^2-6x+9-1$."),
  mc(`Write $y=(x+1)(x+4)$ in standard form.`, "$y=x^2+5x+4$", ["$y=x^2+4x+5$", "$y=x^2+5x+5$", "$y=x^2+4$"], "$x^2+4x+x+4$."),
  num(`What number completes the square for $x^2+8x$?`, 16, "$(8\\div2)^2$."),
  num(`What number completes the square for $x^2-10x$?`, 25, "$(-5)^2$."),
  mc(`$x^2+6x+9$ equals…`, "$(x+3)^2$", ["$(x+9)^2$", "$(x-3)^2$", "$(x+6)^2$"], "$2\\times3=6$, $3^2=9$."),
  fill(`$x^2+4x+1=(x+2)^2-$ ___`, ["3"], "$(x+2)^2=x^2+4x+4$."),
  tf(`Completing the square changes the parabola.`, false, "It only rewrites the same equation."),
  mc(`Standard form $y=ax^2+bx+c$ shows directly…`, "the y-intercept", ["the vertex", "the zeros", "the axis"], "$c$."),
  num(`What is the $y$-coordinate of the vertex of $y=(x+2)^2-7$?`, -7, "$k$."),
  mc(`Write $y=x^2-2x+1$ in vertex form.`, "$y=(x-1)^2$", ["$y=(x+1)^2$", "$y=(x-1)^2+1$", "$y=(x-2)^2+1$"], "A perfect square."),
  num(`Find the $y$-intercept of $y=2(x-1)^2+3$.`, 5, "$2+3$."),
  tf(`$y=x(x-4)+5$ passes through $(0,5)$ and $(4,5)$.`, true, "$x(x-4)=0$ at both."),
  num(`Use partial factoring: what is the axis of $y=x(x-6)+2$ (the value of $x$)?`, 3, "Halfway between 0 and 6."),
  mc(`Which form is best for finding the zeros?`, "factored form", ["vertex form", "standard form", "partial factoring"], "Each bracket gives a zero."),
  num(`Write $y=2(x+1)(x-3)$ in standard form. What is the constant term?`, -6, "$2(1)(-3)$."),
  fill(`$(x-5)^2=x^2-10x+$ ___`, ["25"], "$(-5)^2$."),
  tf(`Every quadratic relation can be written in vertex form.`, true, "By completing the square."),
  num(`Find the $x$-coordinate of the vertex of $y=x^2+12x+5$.`, -6, "$(x+6)^2-31$."),
  num(`The area model shows $x^2+8x$ split into a square and two strips. What number fills the missing corner?`, 16, "$4\\times4$.", areaDoc(["x", "+4"], ["x", "+4"], [["x^2", "4x"], ["4x", "?"]])),
];

export const M = [
  mc(`Write $y=x^2+6x+5$ in vertex form.`, "$y=(x+3)^2-4$", ["$y=(x+3)^2+5$", "$y=(x-3)^2-4$", "$y=(x+6)^2-31$"], "$(x^2+6x+9)-9+5$."),
  mc(`Write $y=x^2-4x+9$ in vertex form.`, "$y=(x-2)^2+5$", ["$y=(x-2)^2+9$", "$y=(x+2)^2+5$", "$y=(x-4)^2-7$"], "$(x^2-4x+4)-4+9$."),
  num(`Find the $y$-coordinate of the vertex of $y=x^2+10x+18$.`, -7, "$(x+5)^2-7$."),
  num(`Find the $y$-coordinate of the vertex of $y=2x^2-12x+11$.`, -7, "$2(x-3)^2-18+11$."),
  mc(`Write $y=3x^2+6x+1$ in vertex form.`, "$y=3(x+1)^2-2$", ["$y=3(x+1)^2+1$", "$y=3(x+3)^2-26$", "$y=3(x-1)^2-2$"], "$3(x^2+2x+1-1)+1$."),
  num(`Find the $y$-coordinate of the vertex of $y=-x^2+6x-4$.`, 5, "$-(x-3)^2+9-4$."),
  tf(`$y=(x-1)^2+2$ and $y=x^2-2x+3$ are the same parabola.`, true, "Expand the first."),
  ms(`Select all expressions equal to $x^2-2x-8$.`, ["$(x-4)(x+2)$", "$(x-1)^2-9$", "$(x+4)(x-2)$", "$(x-1)^2-7$", "$x(x-2)-8$"], [0, 1, 4], "Expand each to check."),
  num(`For which $c$ does $y=x^2-8x+c$ have its vertex on the $x$-axis?`, 16, "$(x-4)^2-16+c$."),
  num(`Use partial factoring: what is the axis of $y=2x^2+8x+3$ (the value of $x$)?`, -2, "$2x(x+4)+3$: halfway between 0 and $-4$."),
  mc(`A profit is $P=-x^2+10x-16$. What is the maximum profit and where?`, "9 at x = 5", ["16 at x = 5", "9 at x = 10", "25 at x = 5"], "$-(x-5)^2+9$."),
  fill(`$2x^2+12x+7=2(x+3)^2-$ ___`, ["11"], "$2(x^2+6x+9)=2x^2+12x+18$; $18-7=11$."),
  num(`Write $y=-(x-4)^2+1$ in standard form. What is the constant term?`, -15, "$-(x^2-8x+16)+1$."),
  num(`Write $y=3(x+2)(x-1)$ in standard form. What is the coefficient of $x$?`, 3, "$3(x^2+x-2)$."),
  tf(`$y=x^2+5x+1$ can be written in vertex form without fractions.`, false, "Half of 5 is $\\frac52$."),
  mc(`Write $y=-2x^2+8x-3$ in vertex form.`, "$y=-2(x-2)^2+5$", ["$y=-2(x-2)^2-11$", "$y=-2(x+2)^2+5$", "$y=-2(x-4)^2+29$"], "$-2(x^2-4x+4-4)-3=-2(x-2)^2+8-3$."),
  num(`Find the larger zero of $y=(x-3)^2-4$.`, 5, "$x-3=\\pm2$."),
  num(`Find the $y$-intercept of $y=-3(x+1)^2+4$.`, 1, "$-3+4$."),
  mc(`What is the vertex of $y=x^2-14x+40$?`, "$(7,-9)$", ["$(-7,-9)$", "$(7,40)$", "$(14,40)$"], "$(x-7)^2-49+40$."),
  num(`Partial factoring shows $(0,5)$ and $(6,5)$ on the parabola shown. Find the $y$-coordinate of the vertex.`, -4, "$y=x^2-6x+5$; axis 3: $9-18+5$.", planeDoc({ view: { xmin: -1, xmax: 7, ymin: -5, ymax: 7 }, curves: [{ f: (x) => x * x - 6 * x + 5, color: "violet" }], points: [{ x: 0, y: 5, label: "(0, 5)", color: "green" }, { x: 6, y: 5, label: "(6, 5)", color: "green" }], step: { x: 1, y: 1 } })),
];
