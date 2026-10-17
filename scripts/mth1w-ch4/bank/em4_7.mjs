// 4.7 Finding the Equation of a Line — 20 easy + 20 medium questions
import { mc, ms, num, tf, mx } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";

export const E = [
  num(String.raw`Find the slope through $(1,3)$ and $(3,11)$.`, 4, "8 ÷ 2."),
  num(String.raw`Find the slope through $(0,5)$ and $(5,0)$.`, -1, "−5 ÷ 5."),
  mx(String.raw`Write the line with slope $3$ and y-intercept $-7$.`, "3*x-7", "y = 3x − 7."),
  mx(String.raw`Write the line with slope $-2$ through $(0,4)$.`, "-2*x+4", "b = 4."),
  num(String.raw`A line has slope 2 and passes through $(3,10)$. Find b.`, 4, "10 = 6 + b."),
  num(String.raw`A line has slope −1 and passes through $(2,5)$. Find b.`, 7, "5 = −2 + b."),
  mx(String.raw`Write the line through $(0,1)$ and $(2,7)$.`, "3*x+1", "m = 3, b = 1."),
  mc(String.raw`Which formula gives the slope through $(x_1,y_1)$ and $(x_2,y_2)$?`, String.raw`$\frac{y_2-y_1}{x_2-x_1}$`, [String.raw`$\frac{x_2-x_1}{y_2-y_1}$`, String.raw`$\frac{y_2+y_1}{x_2+x_1}$`, String.raw`$y_2-y_1$`], "Rise over run."),
  num(`Read the graph: what is the slope?`, 2, "From (0, −1) to (2, 3).", planeDoc({ view: { xmin: -6, xmax: 6, ymin: -6, ymax: 6 }, lines: [{ m: 2, b: -1 }], points: [{ x: 0, y: -1 }, { x: 2, y: 3 }] })),
  mx(`Write the equation of the line through (0, −1) and (2, 3).`, "2*x-1", "y = 2x − 1."),
  tf(String.raw`The point $(2,9)$ is on $y=4x+1$.`, true, "8 + 1 = 9."),
  tf(String.raw`The point $(3,5)$ is on $y=2x+1$.`, false, "6 + 1 = 7 ≠ 5."),
  num(`A table: x = 0, 1, 2; y = 3, 8, 13. What is the slope?`, 5, "First difference."),
  mx(`Write the equation for the table x = 0, 1, 2; y = 3, 8, 13.`, "5*x+3", "y = 5x + 3."),
  mc(String.raw`The line through $(4,2)$ and $(4,9)$ is…`, String.raw`$x=4$`, [String.raw`$y=4$`, String.raw`$y=2x$`, String.raw`$y=x+4$`], "Same x: vertical."),
  mc(String.raw`The line through $(-1,6)$ and $(5,6)$ is…`, String.raw`$y=6$`, [String.raw`$x=6$`, String.raw`$y=x+6$`, String.raw`$x=-1$`], "Same y: horizontal."),
  num(String.raw`Find the slope through $(-2,-3)$ and $(2,5)$.`, 2, "8 ÷ 4."),
  num(String.raw`A line through the origin passes through $(4,12)$. What is its slope?`, 3, "12 ÷ 4."),
  mx(`Write the direct variation through (5, −10).`, "-2*x", "m = −2."),
  num(String.raw`For $y=3x+b$ through $(-1,2)$, find b.`, 5, "2 = −3 + b."),
];

export const M = [
  mx(String.raw`Write the line through $(2,1)$ and $(5,10)$.`, "3*x-5", "m = 3; 1 = 6 + b."),
  mx(String.raw`Write the line through $(-3,7)$ and $(1,-1)$.`, "-2*x+1", "m = −2; 7 = 6 + b."),
  mx(String.raw`Write the line through $(0,-2)$ and $(6,2)$.`, "(2/3)*x-2", "m = 4/6 = 2/3."),
  num(String.raw`A line has slope $\frac12$ and passes through $(-6,1)$. Find b.`, 4, "1 = −3 + b."),
  mx(String.raw`Write the line with slope $-\frac34$ through $(8,-1)$.`, "-0.75*x+5", "−1 = −6 + b."),
  num(`An electrician charges 140 dollars for 2 h and 245 dollars for 3.5 h. What is the hourly rate?`, 70, "105 ÷ 1.5."),
  num(`An electrician charges 140 dollars for 2 h and 245 dollars for 3.5 h. What is the fixed call-out fee?`, 0, "140 = 140 + b → b = 0. (A direct variation.)"),
  num(`A candle is 20 cm after 1 h and 14 cm after 4 h. What was its starting height (cm)?`, 22, "m = −2; 20 = −2 + b."),
  ms(String.raw`Which points lie on the line through $(0,3)$ and $(2,7)$? Select all.`, ["(1, 5)", "(−1, 1)", "(3, 10)", "(4, 11)", "(−2, −1)"], [0, 1, 3, 4], "y = 2x + 3; (3, 10): 9 ≠ 10."),
  num(String.raw`A table (unequal steps): $(1,4)$, $(3,10)$, $(7,22)$. What is the y-intercept?`, 1, "m = 3; 4 = 3 + b."),
  num(`Read the graph: what is the y-intercept of the line?`, -3, "Through (2, 1) and (4, 5): slope 2, so b = 1 − 4 = −3.", planeDoc({ view: { xmin: -2, xmax: 6, ymin: -4, ymax: 6 }, lines: [{ m: 2, b: -3 }], points: [{ x: 2, y: 1, label: "(2, 1)" }, { x: 4, y: 5, label: "(4, 5)" }], step: { x: 1, y: 1 } })),
  tf(String.raw`The slope through $(3,-2)$ and $(-1,6)$ is $-2$.`, true, "8 ÷ (−4)."),
  num(String.raw`A line through $(2,k)$ and $(5,13)$ has slope 3. Find k.`, 4, "(13 − k)/3 = 3."),
  mc(`Water: 18 °C at 2 min and 42 °C at 6 min (heating steadily). Which equation fits?`, "T = 6t + 6", ["T = 6t + 18", "T = 4t + 10", "T = 12t − 6"], "m = 24/4 = 6; 18 = 12 + b."),
  num(`A phone loses value linearly: 700 dollars after 1 year, 400 after 3 years. What was its original price?`, 850, "m = −150; 700 = −150 + b."),
  num(`A phone loses value linearly: 700 dollars after 1 year, 400 after 3 years. After how many years is it worth nothing?`, 5.6667, "850 − 150t = 0 → t ≈ 5.67.", null, 0.006),
  mx(String.raw`Write the line with the same y-intercept as $y=4x-5$ through $(5,0)$.`, "x-5", "b = −5; 0 = 5m − 5 → m = 1."),
  ms(String.raw`Which tables are linear with slope 2? Select all.`, ["(0, 1), (1, 3), (2, 5)", "(1, 0), (3, 4), (6, 10)", "(0, 0), (1, 2), (2, 6)", "(−1, −5), (0, −3), (4, 5)"], [0, 1, 3], "The third has differences 2, 4."),
  num(String.raw`Find the x-intercept of the line through $(1,5)$ and $(3,1)$.`, 3.5, "y = −2x + 7 → x = 3.5.", null, 0.001),
  num(`A pool contains 900 L after 5 min and 1500 L after 15 min of filling. How many litres were in it at the start?`, 600, "m = 60; 900 = 300 + b."),
];
