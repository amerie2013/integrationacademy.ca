// 3.6 Optimization Problems — 20 easy + 20 medium questions
import { mc, num, tf, fill } from "./kit.mjs";
import { graph, P } from "./fig.mjs";

const S = String.raw;
export const E = [
  num("Two numbers add to 20. What is their largest possible product?", 100, "x(20 − x): x = 10."),
  num("A rectangle has perimeter 40 m. What is its largest possible area (m²)?", 100, "A 10 by 10 square."),
  mc("The first step in an optimization problem is usually to:", "draw a diagram and name the variables", ["differentiate", "check the endpoints", "solve f′ = 0"], "Model first."),
  tf("The constraint is used to write the objective function in one variable.", true, "Substitute to eliminate a variable."),
  num("Two positive numbers have product 49. What is their smallest possible sum?", 14, "x + 49/x: x = 7."),
  num("A rectangle with perimeter 24 cm has the largest area when its width is how many cm?", 6, "A square."),
  fill("The function that is maximized or minimized is called the ___ function.", ["objective"], "As opposed to the constraint."),
  num(S`At what $x$ is $P(x)=-x^2+50x$ largest?`, 25, "−2x + 50 = 0."),
  tf("In an optimization problem, the best value can occur at an endpoint of the domain.", true, "Always compare endpoints."),
  num(S`At what price $p$ is $R(p)=p(100-2p)$ largest?`, 25, "100 − 4p = 0."),
  num("The area A(x) = x(30 − x) is graphed. What is the largest area?", 225, "Vertex at x = 15.", graph((x) => x * (30 - x), { xmin: 0, xmax: 31, ymin: 0, ymax: 260 }, [P(15, 225)], { a: 0, b: 30, step: { x: 5, y: 25 } })),
  mc("A rectangle has perimeter 40. What is the domain of its width x?", S`$0\le x\le20$`, [S`$0\le x\le40$`, S`$x\ge0$`, S`$0\le x\le10$`], "Width plus length is 20."),
  num(S`For $x\gt0$, find the minimum value of $x+\frac{81}{x}$.`, 18, "x = 9."),
  num("A rectangle has area 64 m². What is its smallest possible perimeter (m)?", 32, "An 8 by 8 square."),
  tf("To find the point closest to another point, you may minimize the squared distance instead.", true, "Same minimizing point."),
  num("Squares of side x are cut from the corners of a 6 cm by 6 cm card to make an open box. What is the largest volume (cm³)?", 16, "V = x(6 − 2x)²: x = 1."),
  num(S`A cost is $C(x)=x^2-40x+500$. What is the minimum cost?`, 100, "x = 20."),
  num("The volume V(x) = x(10 − 2x)² of an open box is graphed. At what x is it largest? (4 decimals)", 1.6667, "V′ = (10 − 2x)(10 − 6x): x = 5/3.", graph((x) => x * (10 - 2 * x) ** 2, { xmin: 0, xmax: 5.2, ymin: 0, ymax: 85 }, [P(5 / 3, (5 / 3) * (20 / 3) ** 2)], { a: 0, b: 5, step: { x: 0.5, y: 10 } }), 0.0005),
  mc("How can you justify that a critical number gives the absolute maximum on a closed interval?", "compare its value with the values at the endpoints", ["show f′ = 0 there", "show f is positive there", "it is always automatic"], "Candidates test."),
  num(S`A ball's height is $h(t)=-5t^2+20t+2$ m. What is its maximum height?`, 22, "t = 2."),
];

export const M = [
  num("200 m of fence makes a rectangular pen along a river (no fence on the river side). What is the largest area (m²)?", 5000, "A = x(200 − 2x): x = 50."),
  num("An open box with a square base holds 4000 cm³. What is the least material (cm²)?", 1200, "A = x² + 16000/x: x = 20."),
  num(S`A closed cylinder holds $250\pi$ cm³. What radius (cm) minimizes its surface area?`, 5, "r³ = V/(2π) = 125."),
  num(S`For $x\gt0$, find the minimum of $x+\frac1x$.`, 2, "x = 1."),
  num(S`A rectangle has a corner at the origin and the opposite corner on $y=27-x^2$ ($x\gt0$). Find its largest area.`, 54, "A = x(27 − x²): x = 3."),
  num(S`Find the shortest distance from $(2,0)$ to the curve $y=\sqrt x$ (4 decimals).`, 1.3229, "D² = (x − 2)² + x: x = 1.5.", null, 0.0005),
  num("A theatre sells 500 tickets at 20 dollars; each 1 dollar decrease sells 50 more. What is the maximum revenue (dollars)?", 11250, "R = (20 − n)(500 + 50n): n = 5, price 15."),
  num("The area of a pen against a barn is A(x) = x(80 − 2x) (graph shown). What is the largest area?", 800, "A′ = 80 − 4x = 0 at x = 20.", graph((x) => x * (80 - 2 * x), { xmin: 0, xmax: 42, ymin: 0, ymax: 900 }, [P(20, 800)], { a: 0, b: 40, step: { x: 5, y: 100 } })),
  num("Two positive numbers add to 16. What is the smallest possible sum of their squares?", 128, "x² + (16 − x)²: x = 8."),
  num("Two numbers differ by 8. What is their smallest possible product?", -16, "x(x − 8): x = 4."),
  num("An open box with a square base uses 108 m² of material. What is its largest volume (m³)?", 108, "V = x(108 − x²)/4: x = 6."),
  mc("On an open domain, a function has a single critical number, and it is a local minimum. Then it is:", "the absolute minimum", ["only a local minimum", "the absolute maximum", "not an extremum"], "The function falls before it and rises after it."),
  num(S`Positive numbers $x$ and $y$ add to 10. Find $y$ that maximizes $xy^2$ (4 decimals).`, 6.6667, "y²(10 − y): y = 20/3.", null, 0.0005),
  num("A farmer uses 1000 m of fence for a rectangle split into two pens by a fence parallel to one side (3 sides of length x). What is the largest total area (m²)?", 41666.67, "A = x(1000 − 3x)/2: x = 500/3.", null, 1),
  num("A closed can holds 400 cm³. Its surface area C(r) = 2πr² + 800/r is graphed. What radius minimizes it (cm, 3 decimals)?", 3.169, "r³ = 200/(2π).", graph((r) => 2 * Math.PI * r * r + 800 / r, { xmin: 0, xmax: 8, ymin: 0, ymax: 700 }, [P(3.169, 2 * Math.PI * 3.169 ** 2 + 800 / 3.169)], { a: 1, b: 8, step: { x: 1, y: 100 } }), 0.005),
  tf("For a fixed sum, the product of two positive numbers is largest when they are equal.", true, "x(S − x) peaks at x = S/2."),
  num("What is the largest area of a rectangle inscribed in a circle of radius 10?", 200, "A square with diagonal 20."),
  num(S`A car trip of 300 km costs $30+\frac{v^2}{120}$ dollars per hour at $v$ km/h. What speed minimizes the total cost?`, 60, "Total 300(30/v + v/120): v² = 3600."),
  num("A right triangle has hypotenuse 10. What is its largest possible area?", 25, "Legs 5√2 each."),
  num(S`The average cost is $A(x)=0.02x+10+\frac{800}{x}$. What is its minimum value?`, 18, "x = 200: 4 + 10 + 4."),
];
