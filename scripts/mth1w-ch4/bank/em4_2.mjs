// 4.2 Linear vs Non-Linear Relations — 20 easy + 20 medium questions
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";

export const E = [
  num(String.raw`For $x=0,1,2,3$ the values of $y$ are $4, 9, 14, 19$. What is the first difference?`, 5, "9 − 4 = 5 each time."),
  tf(String.raw`The table $x$: $0,1,2,3$; $y$: $2, 4, 8, 16$ is linear.`, false, "First differences 2, 4, 8 are not constant."),
  mc(String.raw`Which equation is linear?`, String.raw`$y=7-3x$`, [String.raw`$y=x^2$`, String.raw`$y=2^x$`, String.raw`$y=\frac{6}{x}$`], "Degree 1, no x in a denominator."),
  mc(`What shape is the graph of a linear relation?`, "a straight line", ["a U-shape", "a curve that levels off", "two separate curves"], "Linear means straight line."),
  num(String.raw`For $y=6x-1$, what is the first difference for x-steps of 1?`, 6, "The slope."),
  mc(String.raw`The first differences of a table are $3, 5, 7, 9$. The relation is…`, "non-linear", ["linear", "a horizontal line", "impossible to tell"], "The differences change."),
  num(String.raw`What are the second differences of $y=x^2$ (x-steps of 1)?`, 2, "1, 4, 9, 16: first 3, 5, 7; second 2."),
  mc(String.raw`Which table has a constant ratio?`, "3, 6, 12, 24", ["3, 6, 9, 12", "3, 4, 7, 12", "24, 12, 8, 6"], "Each term is 2 times the previous."),
  tf(String.raw`$xy=10$ is a linear relation.`, false, String.raw`$y=\frac{10}{x}$: inverse variation, a curve.`),
  num(String.raw`If $xy=18$ and $x=3$, what is $y$?`, 6, "18 ÷ 3."),
  mc(`Which graph is a parabola?`, String.raw`$y=x^2-4$`, [String.raw`$y=2x-4$`, String.raw`$y=4^x$`, String.raw`$xy=4$`], "Quadratic relations make parabolas."),
  num(String.raw`For $x=0,1,2,3$, $y=10, 7, 4, 1$. What is the rate of change?`, -3, "Each step: −3."),
  tf(`A relation with a constant rate of change is linear.`, true, "That is the definition."),
  mc(String.raw`A table has $x=0,2,4$ and $y=1,7,13$. What is the rate of change?`, "3", ["6", "2", "13"], "Δy/Δx = 6/2 = 3."),
  num(String.raw`Bacteria double every hour, starting at 40. How many after 3 hours?`, 320, "40 × 2³."),
  mc(`Doubling bacteria is an example of…`, "an exponential relation", ["a linear relation", "a quadratic relation", "inverse variation"], "Constant ratio 2."),
  tf(String.raw`The relation $y=\frac{x}{3}+1$ is linear.`, true, String.raw`$\frac x3=\frac13x$: degree 1.`),
  num(String.raw`For $y=3x^2$, what is y when x = 4?`, 48, "3 × 16."),
  mc(`As the speed of a car increases, the time to drive 100 km…`, "decreases (inverse variation)", ["increases at a constant rate", "stays the same", "doubles"], "vt = 100."),
  num(String.raw`Find the next value: $5, 15, 45, 135, \dots$`, 405, "Ratio 3."),
];

export const M = [
  mc(String.raw`Is the table linear? $x$: $1, 3, 4, 7$; $y$: $2, 8, 11, 20$.`, "yes, rate 3", ["no, the differences are 6, 3, 9", "yes, rate 6", "no, it is quadratic"], "Δy/Δx = 6/2, 3/1, 9/3 = 3."),
  num(String.raw`$x$: $0, 2, 5, 9$; $y$: $4, 0, -6, -14$. What is the rate of change?`, -2, "−4/2, −6/3, −8/4 = −2."),
  num(String.raw`What are the second differences of $y=2x^2-x$ (x = 0..4)?`, 4, "0, 1, 6, 15, 28: first 1, 5, 9, 13; second 4."),
  ms(String.raw`Which relations are non-linear? Select all.`, [String.raw`$y=3x^2$`, String.raw`$y=\frac{x}{2}-5$`, String.raw`$y=5(2)^x$`, String.raw`$xy=-8$`, String.raw`$2x+3y=6$`], [0, 2, 3], "Quadratic, exponential and inverse."),
  num(String.raw`$y$ varies inversely as $x$ and $y=12$ when $x=5$. Find $y$ when $x=15$.`, 4, "k = 60; 60 ÷ 15."),
  mc(String.raw`A table: $1, 4, 9, 16, 25$. The relation is…`, "quadratic", ["linear", "exponential", "inverse"], "Second differences 2."),
  mc(String.raw`A table: $2, 6, 18, 54$. The relation is…`, "exponential", ["linear", "quadratic", "inverse"], "Ratio 3."),
  num(String.raw`A population of 800 grows 25% per year. What is it after 2 years?`, 1250, "800 × 1.25²."),
  tf(String.raw`If the first differences are all $0$, the relation is linear (horizontal line).`, true, "Constant (zero) rate of change."),
  num(String.raw`The product $xy$ is constant. When $x=4$, $y=7.5$. What is $y$ when $x=10$?`, 3, "k = 30."),
  mc(`Which graph never touches either axis?`, String.raw`$xy=6$`, [String.raw`$y=x^2$`, String.raw`$y=2^x$`, String.raw`$y=x+6$`], "A hyperbola approaches the axes but never meets them."),
  num(String.raw`Find the missing value so the table is linear: $x$: $0, 1, 2, 3$; $y$: $7, 4, \square, -2$.`, 1, "Difference −3."),
  num(String.raw`Find the missing value so the table is quadratic with second difference 2: $y$: $3, 4, 7, \square$.`, 12, "First differences 1, 3, 5."),
  mc(String.raw`Which is the best description of $y=-2x+8$?`, "linear, falling", ["linear, rising", "quadratic", "exponential decay"], "Slope −2."),
  tf(String.raw`In a linear table with x-steps of 2, the first differences equal the slope.`, false, "They equal 2 × slope."),
  num(String.raw`A linear table has x-steps of 2 and first differences of 10. What is the slope?`, 5, "10 ÷ 2."),
  ms(String.raw`Which tables are linear? Select all.`, ["x: 0,1,2; y: 5,5,5", "x: 0,1,2; y: 1,3,9", "x: 0,2,6; y: 1,5,13", "x: 1,2,3; y: 8,4,2"], [0, 2], "Constant Δy/Δx: 0 and 2."),
  num(String.raw`A ball's height: $0, 15, 20, 15, 0$ m at $t=0..4$ s. What is the constant second difference?`, -10, "First 15, 5, −5, −15; second −10."),
  mc(`The graph shows a relation. Which family is it?`, "inverse variation", ["linear", "quadratic", "exponential"], "Hyperbola-shaped, xy constant.", planeDoc({ view: { xmin: 0, xmax: 10, ymin: 0, ymax: 10 }, curves: [{ f: (x) => 12 / x, a: 1.2 }], points: [{ x: 2, y: 6 }, { x: 3, y: 4 }, { x: 4, y: 3 }, { x: 6, y: 2 }] })),
  num(String.raw`For the curve in the previous question (through $(2,6)$, $(3,4)$, $(4,3)$), what is $k$ in $xy=k$?`, 12, "2 × 6 = 12."),
];
