// 1.5 Inverse Functions — 20 easy + 20 medium questions
import { mc, ms, num, tf, mx } from "./kit.mjs";
import { planeDoc, P } from "./fig.mjs";

const YX = { m: 1, b: 0, color: "gray", dash: true };

export const E = [
  mx(String.raw`Find $f^{-1}(x)$ for $f(x)=x-4$.`, "x+4", "Undo subtracting 4."),
  mx(String.raw`Find $f^{-1}(x)$ for $f(x)=\frac x5$.`, "5*x", "Undo dividing by 5."),
  num(String.raw`$f(1)=6$. Find $f^{-1}(6)$.`, 1, "The inverse sends 6 back to 1."),
  tf(String.raw`$f^{-1}(x)$ means $\frac{1}{f(x)}$.`, false, "−1 here labels the inverse; it is not an exponent."),
  mx(String.raw`Find $f^{-1}(x)$ for $f(x)=2x+1$.`, "(x-1)/2", "Subtract 1, then divide by 2."),
  mc("The graph of an inverse is a reflection of the original graph in…", String.raw`the line $y=x$`, ["the x-axis", "the y-axis", "the origin"], "Swapping x and y reflects in y = x."),
  num(String.raw`$(3,-2)$ is reflected in $y=x$. What is the x-coordinate of the image?`, -2, "Coordinates swap: (−2, 3).", planeDoc({ view: { xmin: -5, xmax: 5, ymin: -5, ymax: 5 }, lines: [YX], points: [P(3, -2)] })),
  mc(String.raw`The domain of $f^{-1}$ is…`, String.raw`the range of $f$`, [String.raw`the domain of $f$`, "all real numbers", String.raw`the y-intercept of $f$`], "Inputs and outputs trade places."),
  num(String.raw`$f(x)=3x$. Find $f^{-1}(12)$.`, 4, "12 ÷ 3."),
  mc(String.raw`$f$ contains $(0,2),(1,5),(2,8)$. Which point is on $f^{-1}$?`, String.raw`$(5,1)$`, [String.raw`$(1,5)$`, String.raw`$(2,0)$`, String.raw`$(8,8)$`], "Swap each pair."),
  tf(String.raw`The inverse of $y=x$ is $y=x$.`, true, "Swapping x and y changes nothing."),
  mx(String.raw`Find $f^{-1}(x)$ for $f(x)=-x$.`, "-x", "Its own inverse."),
  num(String.raw`$f(x)=x+10$. Find $f^{-1}(3)$.`, -7, "3 − 10."),
  mc("The blue line is y = 2x. What is the equation of the red line, its inverse?", String.raw`$y=\frac x2$`, [String.raw`$y=-2x$`, String.raw`$y=2x+1$`, String.raw`$y=\frac2x$`], "Undo doubling.", planeDoc({ view: { xmin: -4, xmax: 4, ymin: -4, ymax: 4 }, lines: [{ m: 2, b: 0, color: "blue" }, { m: 0.5, b: 0, color: "red" }, YX] })),
  tf(String.raw`The inverse of $y=x^2$ (all real $x$) is a function.`, false, "x = y² gives y = ±√x."),
  num(String.raw`$f(x)=x^3$. Find $f^{-1}(8)$.`, 2, "2³ = 8."),
  mc("A function adds 4, then multiplies by 3. Its inverse…", "divides by 3, then subtracts 4", ["subtracts 4, then divides by 3", "multiplies by 3, then adds 4", "divides by 4, then subtracts 3"], "Reverse the operations and their order."),
  mx(String.raw`Find $f^{-1}(x)$ for $f(x)=4-x$.`, "4-x", "Swap: x = 4 − y → y = 4 − x."),
  num(String.raw`$f(x)=\frac{x+1}{2}$. Find $f^{-1}(5)$.`, 9, "f⁻¹(x) = 2x − 1."),
  mc(String.raw`If $(a,b)$ is on the graph of $f$, which point is on the graph of $f^{-1}$?`, String.raw`$(b,a)$`, [String.raw`$(-a,-b)$`, String.raw`$(a,-b)$`, String.raw`$(\frac1a,\frac1b)$`], "Swap."),
];

export const M = [
  mx(String.raw`Find $g^{-1}(x)$ for $g(x)=\frac{3x-2}{4}$.`, "(4*x+2)/3", "x = (3y − 2)/4 → 4x + 2 = 3y."),
  mx(String.raw`Find $f^{-1}(x)$ for $f(x)=7-2x$.`, "(7-x)/2", "x = 7 − 2y."),
  num(String.raw`$f(x)=x^2+3$, $x\ge0$. Find $f^{-1}(19)$.`, 4, "x² = 16, x ≥ 0."),
  mc(String.raw`Find the inverse of $f(x)=(x-5)^2$, $x\ge5$.`, String.raw`$f^{-1}(x)=5+\sqrt x$`, [String.raw`$f^{-1}(x)=5-\sqrt x$`, String.raw`$f^{-1}(x)=\sqrt{x-5}$`, String.raw`$f^{-1}(x)=\sqrt x-5$`], "Positive root because y ≥ 5."),
  mc(String.raw`What is the range of $f^{-1}$ if $f(x)=\sqrt{x-2}$?`, String.raw`$y\ge2$`, [String.raw`$y\ge0$`, String.raw`$y\le2$`, String.raw`$y\in\mathbb R$`], "Range of f⁻¹ = domain of f."),
  num(String.raw`$f(x)=5x-8$. Find $f^{-1}(f^{-1}(2))$.`, 2, "f⁻¹(2) = 10/5 = 2, then again 2."),
  tf(String.raw`$f(x)=(x-1)^2$ with $x\ge1$ has an inverse that is a function.`, true, "One side of the vertex is one-to-one."),
  mc("The graph of f is shown. Which point is on the graph of f⁻¹?", String.raw`$(4,3)$`, [String.raw`$(3,4)$`, String.raw`$(-3,4)$`, String.raw`$(4,-3)$`], "(3, 4) is on f.", planeDoc({ view: { xmin: -1, xmax: 6, ymin: -1, ymax: 6 }, curves: [{ f: (x) => Math.sqrt(x - 3) + 4, a: 3, color: "blue" }], points: [P(3, 4)] })),
  num(String.raw`At what x-value does $f(x)=3x-4$ meet its inverse?`, 2, "On y = x: 3x − 4 = x."),
  ms("Which functions have an inverse function without restricting the domain? Select all.", [String.raw`$2x-1$`, String.raw`$x^2$`, String.raw`$x^3$`, String.raw`$|x|$`, String.raw`$\frac1x$`], [0, 2, 4], "x² and |x| are not one-to-one."),
  mx(String.raw`$C=\frac59(F-32)$ converts Fahrenheit to Celsius. Write the inverse as a function of $x$.`, "9*x/5+32", "F = 9C/5 + 32."),
  num(String.raw`$f(x)=\frac x3+2$. Find $f^{-1}(5)$.`, 9, "f⁻¹(x) = 3(x − 2)."),
  mc(String.raw`To make the inverse of $y=(x+4)^2$ equal $y=-4+\sqrt x$, restrict the domain to…`, String.raw`$x\ge-4$`, [String.raw`$x\le-4$`, String.raw`$x\ge4$`, String.raw`$x\ge0$`], "The right half of the parabola."),
  num(String.raw`$f(x)=-x+9$ is its own inverse. Find $f(f(2))$.`, 2, "f(2) = 7, f(7) = 2."),
  mc("In the graph, the blue curve and the red curve are inverses. Which line are they mirror images in?", String.raw`$y=x$`, [String.raw`$y=-x$`, String.raw`$x=0$`, String.raw`$y=0$`], "The dashed line y = x.", planeDoc({ view: { xmin: -2, xmax: 6, ymin: -2, ymax: 6 }, curves: [{ f: (x) => x * x / 4, a: 0, color: "blue" }, { f: (x) => 2 * Math.sqrt(x), a: 0, color: "red" }], lines: [YX] })),
  num(String.raw`$f(x)=2(x-1)^2+3$, $x\ge1$. Find $f^{-1}(11)$.`, 3, "(x − 1)² = 4."),
  tf(String.raw`For every $x$ in the domain of $f^{-1}$, $f(f^{-1}(x))=x$.`, true, "Undoing then redoing."),
  num(String.raw`The inverse of $f(x)=mx+b$ has slope $0.25$. Find $m$.`, 4, "Slopes of inverse lines are reciprocals."),
  mc(String.raw`Find the inverse of $f(x)=x^2-6$, $x\le0$.`, String.raw`$f^{-1}(x)=-\sqrt{x+6}$`, [String.raw`$f^{-1}(x)=\sqrt{x+6}$`, String.raw`$f^{-1}(x)=-\sqrt{x-6}$`, String.raw`$f^{-1}(x)=\sqrt{x-6}$`], "Outputs of f⁻¹ must be ≤ 0."),
  num(String.raw`$g(x)=4x+k$ and $g^{-1}(13)=2$. Find $k$.`, 5, "g(2) = 13."),
];
