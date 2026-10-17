// 4.6 Standard Form & Converting Between Forms — 20 hard questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { areaDoc } from "./fig.mjs";

export const TOPIC = "4.6 Standard Form & Converting Between Forms";
export const Q = [
  num(`Find the $y$-coordinate of the vertex of $y=4x^2-24x+31$.`, -5, "$4(x-3)^2-36+31$."),
  num(`Find the $y$-coordinate of the vertex of $y=-3x^2-12x-7$.`, 5, "$-3(x+2)^2+12-7$."),
  mc(`Write $y=5x^2-20x+23$ in vertex form.`, "$y=5(x-2)^2+3$", ["$y=5(x-2)^2+23$", "$y=5(x+2)^2+3$", "$y=5(x-4)^2-57$"], "$5(x^2-4x+4-4)+23=5(x-2)^2-20+23$."),
  num(`For which positive $k$ is $x^2+kx+49$ a perfect square?`, 14, "$2\\times7$."),
  num(`For which $c$ does $y=x^2+16x+c$ have vertex $y$-coordinate $-3$?`, 61, "$(x+8)^2-64+c=-3$."),
  num(`Revenue is $R=-20p^2+400p$. What is the maximum revenue?`, 2000, "$-20(p-10)^2+2000$."),
  tf(`Completing the square for $y=x^2+bx+c$ gives the vertex $\\left(-\\frac b2,\\ c-\\frac{b^2}{4}\\right)$.`, true, "$\\left(x+\\frac b2\\right)^2+c-\\frac{b^2}{4}$."),
  ms(`Select all true statements about $y=2x^2-8x+6$.`, ["its vertex form is $2(x-2)^2-2$", "its factored form is $2(x-1)(x-3)$", "its $y$-intercept is 6", "its vertex is $(2,2)$", "its zeros are $-1$ and $-3$"], [0, 1, 2], "Vertex $(2,-2)$; zeros 1 and 3."),
  num(`For which $b$ does $y=x^2+bx+5$ have its vertex at $x=-3$?`, 6, "$-\\frac b2=-3$."),
  num(`What is the smallest value of $x^2-18x+100$?`, 19, "$(x-9)^2+19$."),
  num(`A rectangle's area is $A=x(30-x)$. Complete the square to find the largest area.`, 225, "$-(x-15)^2+225$."),
  mc(`A parabola has vertex $(-1,-4)$ and passes through $(1,0)$. In standard form it is…`, "$y=x^2+2x-3$", ["$y=x^2-2x-3$", "$y=2x^2+4x-2$", "$y=x^2+2x+5$"], "$a(2)^2-4=0$, $a=1$: $(x+1)^2-4$."),
  num(`For the parabola with vertex $(-1,-4)$ through $(1,0)$, find the $y$-intercept.`, -3, "$(0+1)^2-4$."),
  fill(`$-x^2+8x-12=-(x-4)^2+$ ___`, ["4"], "$-(x^2-8x+16)+16-12$."),
  tf(`Partial factoring finds the vertex even when a parabola has no zeros.`, true, "It uses two points with equal $y$-values, not zeros."),
  num(`Use partial factoring to find the axis of $y=-3x^2+18x-5$ (the value of $x$).`, 3, "$-3x(x-6)-5$."),
  num(`Find the $y$-coordinate of the vertex of $y=-3x^2+18x-5$.`, 22, "$-27+54-5$."),
  mc(`A parabola with $a=1$ has zeros 2 and 4. Its vertex form is…`, "$y=(x-3)^2-1$", ["$y=(x-3)^2+1$", "$y=(x+3)^2-1$", "$y=(x-3)^2-8$"], "$(x-2)(x-4)=x^2-6x+8=(x-3)^2-1$."),
  num(`Write $y=2x^2-4x+7$ in vertex form $a(x-h)^2+k$. Find $a\\cdot k$.`, 10, "$2(x-1)^2+5$."),
  num(`The area model completes $x^2+10x$ into a perfect square. What number goes in the corner?`, 25, "$5\\times5$.", areaDoc(["x", "+5"], ["x", "+5"], [["x^2", "5x"], ["5x", "?"]])),
];
