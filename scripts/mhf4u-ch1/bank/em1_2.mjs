// 1.2 Characteristics of Polynomial Functions — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { graph, planeDoc } from "./fig.mjs";

export const E = [
  num(String.raw`What is the degree of $f(x)=4x^3-x^5+2$?`, 5, "The highest power is x⁵."),
  num(String.raw`What is the leading coefficient of $f(x)=4x^3-x^5+2$?`, -1, "The coefficient of x⁵."),
  num(String.raw`What is the y-intercept of $f(x)=2x^4-3x+9$?`, 9, "f(0) = 9."),
  num(String.raw`What is the greatest number of turning points of a degree-5 polynomial?`, 4, "At most n − 1."),
  num(String.raw`What is the greatest number of zeros of a degree-7 polynomial?`, 7, "At most n."),
  num(String.raw`What is the least number of real zeros of a polynomial of degree 3?`, 1, "Odd degree: the ends go in opposite directions."),
  num(String.raw`What is the least number of real zeros of a polynomial of degree 4?`, 0, "e.g. x⁴ + 1 has none."),
  tf(String.raw`A polynomial of degree 4 can have exactly 3 turning points.`, true, "e.g. a W shape."),
  tf(String.raw`A polynomial of degree 3 can have exactly 3 turning points.`, false, "At most 2."),
  mc(String.raw`Which constant differences belong to a cubic?`, "third differences", ["first differences", "second differences", "fourth differences"], "Degree n ↔ constant nth differences."),
  num(String.raw`The second differences of a quadratic are all $-8$. Find the leading coefficient.`, -4, "2a = −8."),
  mc(String.raw`Which is an odd function?`, String.raw`$f(x)=x^3-5x$`, [String.raw`$f(x)=x^3+1$`, String.raw`$f(x)=x^2-5x$`, String.raw`$f(x)=x^4-x^2$`], "Only odd powers."),
  mc(String.raw`Which is an even function?`, String.raw`$f(x)=2x^4-x^2+7$`, [String.raw`$f(x)=x^4+x$`, String.raw`$f(x)=x^3$`, String.raw`$f(x)=(x+1)^2$`], "Only even powers (7 = 7x⁰)."),
  fill(String.raw`Even functions are symmetric about the ___.`, ["y-axis", "y axis", "the y-axis"], "f(−x) = f(x)."),
  mc("How many turning points does the graph have?", "3", ["2", "4", "1"], "Count the peaks and valleys.", graph((x) => 0.3 * (x * x - 1) * (x * x - 6), { xmin: -3, xmax: 3, ymin: -4, ymax: 4 })),
  mc("How many x-intercepts does the graph have?", "3", ["2", "4", "1"], "Count the crossings.", graph((x) => 0.4 * (x + 2) * (x - 1) * (x - 3), { xmin: -3, xmax: 4, ymin: -5, ymax: 5 })),
  mc(String.raw`End behaviour of $f(x)=-3x^4+x$:`, "down at both ends", ["up at both ends", "Q3 → Q1", "Q2 → Q4"], "Even, negative leading coefficient."),
  tf(String.raw`Every polynomial of odd degree has at least one x-intercept.`, true, "Its ends go in opposite directions."),
  num(String.raw`The third differences of a cubic are all 12. Find the leading coefficient.`, 2, "a·3! = 12."),
  mc(String.raw`Which number of turning points is possible for a cubic?`, "0 or 2", ["1 or 3", "exactly 1", "exactly 3"], "Odd degree: an even number of turning points, at most 2."),
];

export const M = [
  mc("A polynomial has these features: degree 4, a > 0, 1 turning point. Which graph shape fits?", "a U shape with one minimum", ["a W shape", "an S shape", "an upside-down U"], "One turning point, up at both ends."),
  num(String.raw`For $x=0,1,2,3,4$ a polynomial has values $2, 3, 10, 29, 66$. Find its degree.`, 3, "Differences 1, 7, 19, 37; 6, 12, 18; 6, 6."),
  num(String.raw`For $x=0,1,2,3,4$ a polynomial has values $2, 3, 10, 29, 66$. Find its leading coefficient.`, 1, "Third differences 6 = a·6."),
  num(String.raw`What are the fourth differences of $y=3x^4+x^2$ (step 1)?`, 72, "3·4! = 72."),
  num(String.raw`What are the fifth differences of $y=-x^5+2x$ (step 1)?`, -120, "−1·5! = −120."),
  ms(String.raw`Which numbers of turning points are possible for a degree-6 polynomial? Select all.`, ["1", "2", "3", "5"], [0, 2, 3], "Even degree: an odd number, at most 5."),
  ms(String.raw`Which numbers of real zeros are possible for a degree-5 polynomial? Select all.`, ["0", "1", "3", "5"], [1, 2, 3], "At least 1, at most 5."),
  mc("The graph has 2 turning points and falls to the right. What can you say?", "odd degree ≥ 3, a < 0", ["even degree ≥ 4, a < 0", "odd degree ≥ 3, a > 0", "degree 2, a < 0"], "Opposite ends (Q2 → Q4), at least 3 for two turning points.", graph((x) => -0.5 * x * (x - 2) * (x + 2), { xmin: -3, xmax: 3, ymin: -4, ymax: 4 })),
  mc("What is the least possible degree of the polynomial shown?", "5", ["4", "3", "6"], "4 turning points need degree ≥ 5; opposite ends confirm odd.", graph((x) => 0.15 * x * (x * x - 4) * (x * x - 9), { xmin: -3.5, xmax: 3.5, ymin: -4, ymax: 4 })),
  tf(String.raw`$f(x)=x^5-3x^3+x$ is an odd function.`, true, "Every power is odd."),
  tf(String.raw`$f(x)=(x-1)^2$ is an even function.`, false, "x² − 2x + 1 has an odd power: neither."),
  mc(String.raw`Classify $f(x)=x^3+x^2$.`, "neither", ["even", "odd", "both"], "Mixed powers."),
  num(String.raw`A quartic has $a=-2$. Its fourth differences (step 1) are:`, -48, "−2·24."),
  mc(String.raw`A polynomial's fourth differences are constant at 12. Which could it be?`, String.raw`$y=\tfrac12x^4-x$`, [String.raw`$y=12x^4$`, String.raw`$y=3x^4$`, String.raw`$y=2x^3$`], "a·24 = 12 → a = 1/2."),
  num(String.raw`An even function has $f(3)=-7$. Find $f(-3)$.`, -7, "f(−3) = f(3)."),
  num(String.raw`An odd function has $f(2)=5$. Find $f(-2)$.`, -5, "f(−2) = −f(2)."),
  mc("A degree-4 polynomial has a < 0 and f(0) = 5. What is certain?", "it has at least two x-intercepts", ["it has no x-intercepts", "it has exactly one x-intercept", "it has four x-intercepts"], "Both ends go down but the graph is above the axis at x = 0."),
  mc("Which statement about the graph is true?", "it could be y = x⁴ − 3x² + 2 (degree 4, a > 0)", ["it is a cubic", "its leading coefficient is negative", "it has 4 turning points"], "W shape: 3 turning points, up at both ends.", planeDoc({ view: { xmin: -2.5, xmax: 2.5, ymin: -1, ymax: 4 }, curves: [{ f: (x) => x ** 4 - 3 * x * x + 2, color: "violet" }], step: { x: 1, y: 1 } })),
  num(String.raw`For equally spaced x-values with step 2, a cubic $y=x^3$ has constant third differences equal to:`, 48, "a·n!·(step)ⁿ = 1·6·8."),
  fill(String.raw`If the first differences of a table are constant, the polynomial has degree ___.`, ["1", "one"], "A linear function."),
];
