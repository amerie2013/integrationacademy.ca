// 5.5 Optimisation — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { planeDoc, P } from "../../mcr3u-ch1/bank/fig.mjs";

const S = String.raw;

export const E = [
  num(S`$A=50x-5x^2$. Find the value of $x$ that maximises $A$.`, 5, "A′ = 50 − 10x."),
  num(S`Find the maximum value of $A=50x-5x^2$.`, 125, "250 − 125."),
  num(S`$C=2x^2-24x+100$. Find the value of $x$ that minimises $C$.`, 6, "4x − 24 = 0."),
  num(S`Find the minimum value of $C=2x^2-24x+100$.`, 28, "72 − 144 + 100."),
  num("Two positive numbers have sum 14. Use calculus to find their maximum product.", 49, "x(14 − x), x = 7."),
  num("A rectangle has perimeter 28 m. Use calculus to find its maximum area (m²).", 49, "x(14 − x)."),
  mc("To find a maximum with calculus, first:", "write the quantity as a function of one variable", ["set the second derivative to 0", "take the largest x in the domain", "set the function equal to 0"], "Then differentiate and solve f′ = 0."),
  tf(S`On a closed interval, the global maximum can occur at an endpoint.`, true, "Always compare the endpoint values."),
  tf(S`If $f'(a)=0$, then $f(a)$ is always the global maximum.`, false, "It could be a minimum, an inflection, or only a local maximum."),
  fill("The equation that links the variables in an optimisation problem (such as a fixed perimeter) is called the ___.", ["constraint", "Constraint"], "It lets you reduce to one variable."),
  num(S`$P=-x^2+40x-300$. Find the maximum profit.`, 100, "x = 20: −400 + 800 − 300."),
  num(S`$V=x(10-2x)^2$ for an open box. Find the value of $x$ that maximises $V$ (3 d.p.).`, 5 / 3, "V′ = (10 − 2x)(10 − 6x) = 0.", null, 0.001),
  num("The graph of an area function A(x) is shown. Find the x-value of the maximum.", 4, "The top of the curve.", planeDoc({ view: { xmin: -0.5, xmax: 8.5, ymin: -2, ymax: 36 }, curves: [{ f: (x) => x * (16 - 2 * x), a: 0, b: 8 }], points: [P(4, 32)], step: { x: 1, y: 4 } })),
  num("The graph shows a cost function C(x). What is the least cost?", 20, "The minimum point is (3, 20).", planeDoc({ view: { xmin: -0.5, xmax: 7, ymin: -2, ymax: 70 }, curves: [{ f: (x) => 5 * (x - 3) ** 2 + 20, a: 0, b: 6.5 }], points: [P(3, 20)], step: { x: 1, y: 10 } })),
  num(S`For $f(x)=x^2-12x$ on $0\le x\le14$, find the global maximum.`, 28, "f(14) = 196 − 168 = 28 > f(0) = 0."),
  num(S`For $f(x)=x^2-12x$ on $0\le x\le14$, find the global minimum.`, -36, "f(6) = −36."),
  mc(S`At $x=4$, $A'(4)=0$ and $A''(4)=-2$. So $A(4)$ is:`, "a local maximum", ["a local minimum", "an inflection", "zero"], "A″ < 0."),
  num("A farmer encloses a rectangle against a river with 40 m of fence on the other three sides. Find the maximum area (m²).", 200, "A = x(40 − 2x), x = 10."),
  num(S`$R=12x-0.5x^2$. Find the number of items that maximises revenue.`, 12, "12 − x = 0."),
  num(S`The height of a ball is $h=24t-6t^2$. Find its maximum height.`, 24, "t = 2: 48 − 24."),
];

export const M = [
  num("Two positive numbers have sum 9. Find the maximum value of the product of one number and the square of the other.", 108, "P = x²(9 − x); x = 6: 36 × 3."),
  num("An open box is made from a 12 cm by 12 cm sheet by cutting squares from the corners. Find the side of the squares for maximum volume.", 2, "V = x(12 − 2x)²; (12 − 2x)(12 − 6x) = 0."),
  num(S`A closed box with a square base has volume 125 cm³. Find the side of the base that minimises surface area.`, 5, "A = 2x² + 500/x; 4x = 500/x²."),
  num(S`The product of two positive numbers is 49. Find their least sum.`, 14, "S = x + 49/x; x = 7."),
  num(S`For $f(x)=x^3-48x$ on $-5\le x\le9$, find the global maximum.`, 297, "f(9) = 729 − 432 = 297 > f(−4) = 128."),
  num(S`For $f(x)=x^3-48x$ on $-5\le x\le9$, find the global minimum.`, -128, "f(4) = −128; f(−5) = 115."),
  num(S`Profit $P=-x^3+9x^2+48x$ for $0\le x\le12$. Find $x$ for maximum profit.`, 8, "−3x² + 18x + 48 = −3(x − 8)(x + 2)."),
  num(S`For $P=-x^3+9x^2+48x$, find the maximum profit.`, 448, "−512 + 576 + 384."),
  ms(S`To justify that $x=a$ gives a maximum of $f$ on an open interval, which are valid? Select all.`, [S`$f''(a)<0$`, S`$f'$ changes from + to − at $a$`, S`$f(a)>0$`, S`$f'(a)=0$ alone`], [0, 1], "f′(a) = 0 alone does not decide."),
  num(S`An open-topped tank with a square base holds 108 m³. Find the side of the base that minimises the surface area.`, 6, "A = x² + 432/x; 2x = 432/x²."),
  num(S`A cylinder has volume $54\pi$ and a closed top. Find the radius for minimum surface area.`, 3, "A = 2πr² + 108π/r; 4πr = 108π/r²."),
  num("The graph shows V = x(20 − 2x)² for 0 < x < 10. Find the maximum volume (3 s.f.).", 16000 / 27, "x = 10/3: (10/3)(40/3)².", planeDoc({ view: { xmin: -0.3, xmax: 10.3, ymin: -20, ymax: 650 }, curves: [{ f: (x) => x * (20 - 2 * x) ** 2, a: 0, b: 10 }], points: [P(10 / 3, 16000 / 27)], step: { x: 1, y: 100 } }), 0.5),
  num("The rectangle shown has one corner at the origin and the opposite corner on y = 6 − 2x. Find the maximum area.", 4.5, "A = x(6 − 2x); x = 1.5.", planeDoc({ view: { xmin: -0.5, xmax: 4, ymin: -0.5, ymax: 7 }, curves: [{ f: (x) => 6 - 2 * x, a: 0, b: 3 }], segs: [{ pts: [[0, 0], [1.5, 0], [1.5, 3], [0, 3], [0, 0]], color: "red" }], points: [P(1.5, 3)] }), 1e-9),
  num(S`Find the point on the line $y=2x+1$ closest to the origin. Give the x-coordinate.`, -0.4, "D = x² + (2x + 1)²; D′ = 10x + 4.", null, 1e-9),
  tf(S`If $f''(x)<0$ on the whole domain, a stationary point of $f$ is the global maximum.`, true, "f is concave down everywhere."),
  num("A rectangular poster has area 600 cm² with margins of 5 cm at the sides and 6 cm at top and bottom. Find the width that maximises the printed area (3 s.f.).", 10 * Math.sqrt(5), "Printed = (x − 10)(600/x − 12); derivative 6000/x² − 12 = 0 → x² = 500.", null, 0.05),
  num(S`A rectangle is inscribed in a semicircle of radius 5 with its base on the diameter. Using $A=2x\sqrt{25-x^2}$, the maximum occurs where $A^2$ is greatest. Find the maximum area.`, 25, "A² = 4x²(25 − x²) is greatest at x² = 12.5."),
  num(S`Find the maximum value of $f(x)=x\,(12-x)^2$ on $0\le x\le12$.`, 256, "f′ = (12 − x)(12 − 3x); x = 4: 4 × 64."),
  num(S`A wire 20 cm long is bent into a rectangle. Find the side that gives the greatest area.`, 5, "A = x(10 − x)."),
  num(S`The cost per hour of running a boat at $v$ km/h is $C=\frac{v^2}{4}+\frac{400}{v}$. Find the speed that minimises $C$ (3 s.f.).`, Math.cbrt(800), "C′ = v/2 − 400/v² = 0 → v³ = 800.", null, 0.05),
];
