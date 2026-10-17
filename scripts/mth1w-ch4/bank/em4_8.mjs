// 4.8 General Form vs Slope-Intercept Form — 20 easy + 20 medium questions
import { mc, ms, num, tf, mx } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";

export const E = [
  mc(`Which equation is in general form?`, String.raw`$2x-y+5=0$`, [String.raw`$y=2x+5$`, String.raw`$y-5=2x$`, String.raw`$2x=y-5$`], "Ax + By + C = 0."),
  mx(String.raw`Write $x+y-6=0$ in slope-intercept form.`, "-x+6", "y = −x + 6."),
  num(String.raw`What is the slope of $x+y-6=0$?`, -1, "y = −x + 6."),
  num(String.raw`What is the y-intercept of $3x+y-4=0$?`, 4, "y = −3x + 4."),
  num(String.raw`What is the x-intercept of $2x+y-8=0$?`, 4, "y = 0: 2x = 8."),
  num(String.raw`What is the y-intercept of $2x+y-8=0$?`, 8, "x = 0: y = 8."),
  mc(String.raw`Which is $y=4x-3$ in general form?`, String.raw`$4x-y-3=0$`, [String.raw`$4x+y-3=0$`, String.raw`$-4x+y+3=0$`, String.raw`$4x-y+3=0$`], "Move all terms; A positive."),
  tf(String.raw`In general form, A should be positive.`, true, "Convention: A ≥ 0."),
  num(String.raw`What is the x-intercept of $x-3y+6=0$?`, -6, "y = 0: x = −6."),
  num(String.raw`What is the y-intercept of $x-3y+6=0$?`, 2, "x = 0: −3y = −6."),
  mx(String.raw`Write $4x+2y-10=0$ in slope-intercept form.`, "-2*x+5", "2y = −4x + 10."),
  mc(`To find the x-intercept of a line, set…`, "y = 0", ["x = 0", "y = x", "the slope to 0"], "The x-axis is y = 0."),
  num(String.raw`What is the slope of $6x-2y+1=0$?`, 3, "−A/B = −6/(−2)."),
  tf(String.raw`$y=2x+1$ and $2x-y+1=0$ are the same line.`, true, "Rearrange the second: y = 2x + 1."),
  mc(String.raw`Which is $y=\frac12x+3$ in general form?`, String.raw`$x-2y+6=0$`, [String.raw`$x+2y-6=0$`, String.raw`$2x-y+3=0$`, String.raw`$x-2y-6=0$`], "×2: 2y = x + 6."),
  num(String.raw`Find the x-intercept of $5x-10=0$ (a vertical line).`, 2, "x = 2."),
  mc(String.raw`The line $x-7=0$ is…`, "vertical", ["horizontal", "through the origin", "slope 7"], "x = 7."),
  num(`A school sells adult tickets at 10 dollars and child tickets at 5 dollars to raise 400 dollars: 10a + 5c = 400. If no child tickets are sold, how many adult tickets?`, 40, "10a = 400."),
  num(`A school raises 400 dollars with adult tickets (10 dollars) and child tickets (5 dollars): 10a + 5c = 400. How many child tickets if no adult tickets are sold?`, 80, "5c = 400."),
  tf(String.raw`Every line can be written in slope-intercept form.`, false, "Vertical lines cannot."),
];

export const M = [
  mc(String.raw`Write $y=-\frac23x+4$ in general form.`, String.raw`$2x+3y-12=0$`, [String.raw`$2x-3y+12=0$`, String.raw`$-2x+3y-12=0$`, String.raw`$2x+3y+12=0$`], "×3: 3y = −2x + 12."),
  num(String.raw`What is the slope of $3x+4y-12=0$? (decimal)`, -0.75, "−3/4.", null, 0.001),
  num(String.raw`What is the y-intercept of $3x+4y-12=0$?`, 3, "−C/B = 12/4."),
  ms(String.raw`Which are the same line as $y=3x-2$? Select all.`, [String.raw`$3x-y-2=0$`, String.raw`$6x-2y-4=0$`, String.raw`$3x+y-2=0$`, String.raw`$-3x+y+2=0$`], [0, 1, 3], "Multiplying by a constant gives the same line."),
  num(String.raw`For $5x-2y+20=0$, what is the x-intercept?`, -4, "5x = −20."),
  num(String.raw`For $5x-2y+20=0$, what is the y-intercept?`, 10, "−2y = −20."),
  mx(String.raw`Write $5x-2y+20=0$ in slope-intercept form.`, "2.5*x+10", "y = 2.5x + 10."),
  mc(`The graph shows a line. Which equation is it?`, String.raw`$x+2y-4=0$`, [String.raw`$2x+y-4=0$`, String.raw`$x-2y-4=0$`, String.raw`$x+2y+4=0$`], "Intercepts (4, 0) and (0, 2).", planeDoc({ view: { xmin: -2, xmax: 6, ymin: -2, ymax: 6 }, lines: [{ m: -0.5, b: 2 }], points: [{ x: 4, y: 0 }, { x: 0, y: 2 }], step: { x: 1, y: 1 } })),
  num(String.raw`$kx+2y-8=0$ has slope $-3$. Find k.`, 6, "−k/2 = −3."),
  num(String.raw`$3x+By-6=0$ has y-intercept $-2$. Find B.`, -3, "−C/B = 6/B = −2."),
  tf(String.raw`The x-intercept of $Ax+By+C=0$ is $-\frac{C}{A}$ (for A ≠ 0).`, true, "y = 0: Ax = −C."),
  num(`A club sells hot dogs (3 dollars) and drinks (2 dollars) for exactly 240 dollars: 3h + 2d = 240. With 50 hot dogs, how many drinks?`, 45, "150 + 2d = 240."),
  mc(String.raw`Which line has a y-intercept but no x-intercept?`, String.raw`$y-5=0$`, [String.raw`$x-5=0$`, String.raw`$x+y-5=0$`, String.raw`$x-y=0$`], "y = 5 is horizontal (not on the axis)."),
  num(String.raw`Write $y=0.4x-1.2$ in general form with integers: $Ax+By+C=0$, $A=2$. What is C?`, -6, "×5: 5y = 2x − 6 → 2x − 5y − 6 = 0."),
  ms(String.raw`For $4x-6y+18=0$, which are true? Select all.`, ["slope 2/3", "y-intercept 3", "x-intercept −4.5", "it passes through (0, −3)"], [0, 1, 2], "y = (2/3)x + 3."),
  num(String.raw`Find the area of the triangle formed by $3x+5y-30=0$ and the axes.`, 30, "Intercepts 10 and 6: ½ × 10 × 6."),
  mx(String.raw`Write the line through $(0,4)$ and $(6,0)$ in slope-intercept form.`, "(-2/3)*x+4", "m = −4/6."),
  mc(`Write the same line (through (0, 4) and (6, 0)) in general form.`, String.raw`$2x+3y-12=0$`, [String.raw`$3x+2y-12=0$`, String.raw`$2x-3y+12=0$`, String.raw`$2x+3y+12=0$`], "×3: 3y = −2x + 12."),
  tf(String.raw`$2x-4y+8=0$ and $x-2y+4=0$ represent the same line.`, true, "The first is 2 × the second."),
  num(String.raw`What is the x-intercept of $7x-21=0$?`, 3, "x = 3."),
];
