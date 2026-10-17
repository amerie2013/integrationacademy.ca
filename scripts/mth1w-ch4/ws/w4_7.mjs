// Worksheet 4.7 — Finding the Equation of a Line (teacher edition)
import { EXAMPLES } from "./e4_7.mjs";
import { planeT } from "./plotT.mjs";

const PROBLEMS = [
  { level: 1, q: String.raw`Write the equation of the line with slope $-4$ and y-intercept $7$.`, ans: "$y=-4x+7$" },
  { level: 1, q: String.raw`Find the slope through $(-3,5)$ and $(1,-3)$.`, ans: "$-2$" },
  { level: 1, q: String.raw`A line has slope $3$ and passes through $(2,4)$. Find $b$.`, ans: "$b=-2$" },
  { level: 2, q: String.raw`Write the equation of the line through $(1,6)$ and $(5,-2)$.`, ans: "$y=-2x+8$" },
  { level: 2, q: String.raw`Write the equation of the line through $(-4,1)$ and $(2,4)$.`, ans: String.raw`$y=\frac12x+3$` },
  { level: 2, q: String.raw`Write the equation of the line shown.${planeT({ view: { xmin: -6, xmax: 6, ymin: -6, ymax: 6 }, lines: [{ m: 0.75, b: -2 }], points: [{ x: 0, y: -2 }, { x: 4, y: 1 }] }, 5)}`, recap: "Line through (0, −2) and (4, 1).", ans: String.raw`$y=\frac34x-2$` },
  { level: 2, q: String.raw`Is the table linear? If so, write its equation.\begin{center}\begin{tabular}{c|cccc}$x$ & $-2$ & 1 & 3 & 7\\\hline $y$ & 13 & 4 & $-2$ & $-14$\end{tabular}\end{center}`, recap: "Table (−2, 13) … (7, −14).", ans: String.raw`yes, rate $-3$: $y=-3x+7$` },
  { level: 2, q: String.raw`A line through $(6,k)$ and $(2,3)$ has slope $\frac54$. Find $k$.`, recap: String.raw`Find $k$ for slope $\frac54$.`, ans: "$k=8$" },
  { level: 3, space: 5.5,
    q: String.raw`A cell phone's value drops linearly: $650$ dollars after $1$ year and $390$ dollars after $3$ years.
(a) Find the equation of value $V$ against years $t$.
(b) What did the phone cost new? When will it be worth nothing?
(c) Is a linear model realistic for $10$ years? Explain.`,
    recap: "Phone: (1, 650), (3, 390).",
    ans: String.raw`(a) $V=-130t+780$ (b) $780$ dollars; $t=6$ years (c) no: value cannot be negative, and depreciation usually slows (non-linear)` },
  { level: 3, space: 5.5,
    q: String.raw`Points $A(-2,-1)$, $B(1,5)$ and $C(4,11)$.
(a) Show that $A$, $B$ and $C$ lie on one line.
(b) Find the equation of the line.
(c) Find the point on this line with $y=20$, and the x-intercept.`,
    recap: "Collinear A, B, C.",
    ans: String.raw`(a) slopes $AB=BC=2$ (b) $y=2x+3$ (c) $(8.5, 20)$; $(-1.5, 0)$` },
  { level: 3, space: 5.5,
    q: String.raw`Water temperature rises steadily while heating: $18\,^\circ$C after $2$ min and $45\,^\circ$C after $8$ min.
(a) Find the equation.
(b) What was the starting temperature? When does it reach $100\,^\circ$C?
(c) Graph it and mark both given points and your answers to (b).`,
    recap: "Heating: (2, 18), (8, 45).",
    ans: String.raw`(a) $T=4.5t+9$ (b) $9\,^\circ$C; $t\approx20.2$ min` },
  { level: 3, space: 5,
    q: String.raw`A line passes through $(3,-1)$ and has the same y-intercept as $y=5x-7$.
(a) Find its equation.
(b) Where does it cross $y=5x-7$?
(c) Find the area of the triangle formed by the new line and the two axes.`,
    recap: String.raw`Through $(3,-1)$, b = −7.`,
    ans: String.raw`(a) $y=2x-7$ (b) $(0,-7)$ (c) intercepts $(3.5,0)$, $(0,-7)$: area $\frac12(3.5)(7)=12.25$` },
  { level: 3, space: 5,
    q: String.raw`Explain how to find the equation of a line from (a) a graph, (b) two points, (c) a table with unequal x-steps. Then explain how you would check your answer in each case.`,
    recap: "Explain three methods and checks.",
    ans: "read b and count rise/run; slope formula then b = y − mx; Δy/Δx then b; check by substituting given points" },
];

export const WS = {
  code: "4.7",
  title: "Finding the Equation of a Line",
  bigideas: String.raw`To write $y=mx+b$, find the slope $m$ (rise over run, or $m=\frac{y_2-y_1}{x_2-x_1}$), then find $b$ by substituting a point ($b=y-mx$) or reading the y-intercept, and check with another point. This works from graphs, tables and real data alike.`,
  goals: ["Read m and b from a graph.", "Find b from a point and a slope.", "Use the slope formula with two points.", "Write equations from tables (including unequal steps).", "Model situations from two data points."],
  curriculum: "C4.3, C4.4",
  vocab: [["Slope formula", String.raw`$m=\frac{y_2-y_1}{x_2-x_1}$`], ["b from a point", String.raw`$b=y-mx$`], ["Collinear", "on one straight line"]],
  hook: String.raw`Two clues: “A plumber charged $155$ dollars for $2$ hours and $260$ dollars for $3.5$ hours.” Ask students to work out the hourly rate and the call-out fee with no formula. They reinvent the slope formula and $b=y-mx$.`,
  concepts: [
    ["1. The three-step plan", String.raw`(1) slope; (2) $b$ from a point; (3) write and check. Example: $(-2,7)$, $(4,-2)$: $m=\frac{-9}{6}=-\frac32$; $7=3+b$, $b=4$; check $(4,-2)$: $-6+4=-2$ ✓.`],
    ["2. From a graph", String.raw`${planeT({ view: { xmin: -4, xmax: 6, ymin: -6, ymax: 8 }, lines: [{ m: 2, b: -2 }], points: [{ x: 0, y: -2, color: "green" }, { x: 3, y: 4 }], tri: { x: 0, y: -2, run: 3, rise: 6 } }, 5, "b = −2; rise 6 over run 3: m = 2.")}`],
    ["3. From data", String.raw`Two data points determine the line; $m$ is the rate (with units) and $b$ the starting value. Check that a model makes sense before extrapolating.`],
  ],
  tips: ["Same order in numerator and denominator.", "Brackets for negative coordinates.", "Check with the second point.", "Keep slopes as fractions.", "Interpret m and b with units in context."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
