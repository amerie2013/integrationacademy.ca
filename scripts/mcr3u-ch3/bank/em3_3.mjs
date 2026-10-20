// 3.3 Finite Differences and Quadratic Models — 20 easy + 20 medium questions
import { mc, num, tf, mx, fill } from "./kit.mjs";
import { P, planeDoc } from "./fig.mjs";

const S = String.raw;
const dots = (xs, f, view, step) => planeDoc({ view, points: xs.map((x) => P(x, f(x), false)), ...(step ? { step } : {}) });

export const E = [
  num(S`What is the constant second difference of $y=5x^2$ (x-steps of 1)?`, 10, "2a."),
  mc("A table has constant second differences. The relation is…", "quadratic", ["linear", "exponential", "not a function"], "Constant second differences define quadratics."),
  num("x = 0, 1, 2, 3 and y = 3, 5, 7, 9. What is the constant first difference?", 2, "5 − 3 = 2 each time."),
  mc("x = 0, 1, 2, 3 and y = 10, 7, 4, 1. The relation is:", "linear", ["quadratic", "exponential", "none of these"], "First differences are all −3."),
  num("x = 0, 1, 2, 3, 4 and y = 0, 1, 4, 9, 16. Find the constant second difference.", 2, "First differences 1, 3, 5, 7."),
  mc("x = 0, 1, 2, 3 and y = 5, 10, 20, 40. The relation is:", "exponential", ["linear", "quadratic", "none of these"], "Each y is double the one before."),
  num("A quadratic table (x-step 1) has second differences of 6. Find a.", 3, "2a = 6."),
  num(S`Find the second difference of $y=-2x^2+5x$ (x-step 1).`, -4, "2a = −4."),
  tf("Constant first differences mean the relation is quadratic.", false, "They mean linear."),
  mc("x = 0, 1, 2, 3 and y = 1, 2, 5, 10. The relation is:", "quadratic", ["linear", "exponential", "none of these"], "First differences 1, 3, 5; second differences 2."),
  num("A quadratic table has y = 4 at x = 0. What is c in y = ax² + bx + c?", 4, "c = y(0)."),
  tf("To use finite differences, the x-values must go up in equal steps.", true, "Otherwise the differences mean nothing."),
  num("The first differences of a quadratic table are 3, 5, 7. What is the next first difference?", 9, "They grow by 2 each time."),
  num("x = 0, 1, 2, 3 and y = 1, 4, 9, 16 (quadratic). What is y at x = 4?", 25, "Next first difference is 9."),
  mc("A quadratic table with negative constant second differences comes from a parabola that:", "opens down", ["opens up", "is a straight line", "has no vertex"], "2a < 0."),
  num("x = 0, 1, 2, 3 and y = 2, 3, 6, 11. Find the second difference.", 2, "First differences 1, 3, 5."),
  fill("Constant second differences mean the relation is ___.", ["quadratic", "Quadratic"], "Second differences = 2a."),
  num(S`What is the second difference of $y=0.5x^2-x$ (x-step 1)?`, 1, "2(0.5)."),
  num("The points shown come from y = x² + c. Find c.", -1, "At x = 0 the point is (0, −1).", dots([-2, -1, 0, 1, 2], (x) => x * x - 1, { xmin: -4, xmax: 4, ymin: -3, ymax: 5 })),
  mc("The plotted points (x = 0 to 4) are:", "linear", ["quadratic", "exponential", "none of these"], "y goes up by 2 each step.", dots([0, 1, 2, 3, 4], (x) => 2 * x - 1, { xmin: -1, xmax: 5, ymin: -2, ymax: 8 })),
];

export const M = [
  num(S`A quadratic table (x-steps of 1) has second differences of $-8$. Find $a$.`, -4, "2a = −8."),
  num(S`A quadratic $y=ax^2+bx+c$ gives $y=6,3,2$ at $x=0,1,2$. Find $b$.`, -4, "Second difference 2 → a = 1; c = 6; 1 + b + 6 = 3."),
  mc("Which is NOT a quadratic function?", S`$y=2^x$`, [S`$y=3-x^2$`, S`$y=(x-1)(x+5)$`, S`$y=\tfrac12(x+2)^2$`], "2^x is exponential."),
  num("x = 0, 1, 2, 3 and y = 1, 4, 11, 22 is quadratic. Find a.", 2, "First 3, 7, 11; second 4 = 2a."),
  num("x = 0, 1, 2, 3 and y = −2, −1, 4, 13 is quadratic. Find b.", -1, "a = 2, c = −2; 2 + b − 2 = −1."),
  mx("Find the quadratic: x = 0, 1, 2, 3 and y = 3, 4, 7, 12.", "x^2+3", "Second difference 2 → a = 1; c = 3; 1 + b + 3 = 4 → b = 0."),
  mx("Find the quadratic: x = 0, 1, 2, 3 and y = 0, −1, 0, 3.", "x^2-2*x", "a = 1, c = 0; 1 + b = −1."),
  num("x = 0, 2, 4, 6 and y = 1, 9, 33, 73 is quadratic. Find a.", 2, "First 8, 24, 40; second 16 = 2a(2²)."),
  num("A quadratic table (x-step 1) has y = 5, 4, 5, 8. What is y at the next x?", 13, "First −1, 1, 3, next 5."),
  num("A quadratic table (x-step 1) has first differences −7, −3, 1, 5. Find a.", 2, "Second difference 4 = 2a."),
  num("A quadratic passes through (0, 3), (1, 6) and (2, 11). Find a.", 1, "c = 3; a + b = 3; 4a + 2b = 8 → 2a = 2."),
  num("A quadratic passes through (0, −4), (1, −1) and (2, 6). Find b.", 1, "c = −4; a + b = 3; 4a + 2b = 10 → a = 2."),
  num("The plotted points (x = 0 to 4) lie on a quadratic. Find a.", -1, "y = 1, 4, 5, 4, 1: first 3, 1, −1, −3; second −2 = 2a.", dots([0, 1, 2, 3, 4], (x) => -x * x + 4 * x + 1, { xmin: -1, xmax: 5, ymin: -1, ymax: 7 })),
  tf(S`$y=2^x$ has constant second differences.`, false, "Its differences are 1, 2, 4, … and keep doubling."),
  num(S`What is the second difference of $y=x^2$ for a table with x-step 3?`, 18, "2ah² = 2(1)(9)."),
  mc("x = 1, 2, 4, 5. Can you use finite differences directly on this table?", "no — the x-values are not equally spaced", ["yes, always", "only if every y is positive", "only for linear relations"], "The steps are 1, 2, 1."),
  num("A quadratic table has x = 0, 1, 2, 3, 4 and y = 5, k, 3, 5, 9. Find k.", 3, "Second difference 2 (from 3, 5, 9); first difference before 2 is 0, so k = 3."),
  num("A stone's heights at t = 0, 1, 2 s are 20, 25.1, 20.4 m. Find a in h = at² + bt + c.", -4.9, "First 5.1, −4.7; second −9.8 = 2a.", null, 0.001),
  num("Find c for the quadratic through (1, 4), (2, 9) and (3, 16).", 1, "First 5, 7; second 2 → a = 1; back one step: 4 − 3 = 1."),
  mc("The plotted points (x = 0 to 3) are:", "exponential", ["linear", "quadratic", "constant"], "y = 1, 2, 4, 8: constant ratio 2.", dots([0, 1, 2, 3], (x) => 2 ** x, { xmin: -1, xmax: 4, ymin: -1, ymax: 9 })),
];
