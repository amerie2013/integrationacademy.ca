// 3.2 Linear Functions and Models — 20 hard questions
import { mc, ms, num, tf, mx } from "./kit.mjs";
import { planeDoc, P } from "../../mcr3u-ch1/bank/fig.mjs";

const S = String.raw;

export const TOPIC = "3.2 Linear Functions and Models";
export const Q = [
  mx(S`$A(1,3)$ and $B(5,7)$. Find the perpendicular bisector of $AB$ (give $y$ in terms of $x$).`, "-x+8", "Midpoint (3, 5); AB has gradient 1, so use −1."),
  num(S`The lines $2x-y=1$, $x+y=5$ and $kx+2y=12$ all pass through one point. Find $k$.`, 3, "The first two meet at (2, 3): 2k + 6 = 12."),
  num("Company A charges 50 + 2x and company B charges 20 + 3.5x for x km (shown). Above how many km is A cheaper?", 20, "50 + 2x = 20 + 3.5x at x = 20.", planeDoc({ view: { xmin: -2, xmax: 32, ymin: -5, ymax: 140 }, lines: [{ m: 2, b: 50, label: "A" }, { m: 3.5, b: 20, color: "green", label: "B" }], points: [P(20, 90)], step: { x: 5, y: 20 } })),
  num(S`A line through $(3,4)$ has equal positive intercepts on both axes. Find the intercept.`, 7, "x + y = c with 3 + 4 = c."),
  num(S`Find the area of the triangle formed by $y=x+2$, $y=-2x+8$ and the x-axis (shown).`, 12, "Base from −2 to 4 is 6; the lines meet at (2, 4); ½ × 6 × 4.", planeDoc({ view: { xmin: -4, xmax: 6, ymin: -2, ymax: 7 }, lines: [{ m: 1, b: 2 }, { m: -2, b: 8, color: "green" }], points: [P(2, 4), P(-2, 0), P(4, 0)] })),
  num("A repair costs 210 for 3 hours and 310 for 5 hours, a fixed fee plus an hourly rate. What is the fixed fee?", 60, "Rate 100 ÷ 2 = 50; 210 − 150."),
  num("For the repair costs above (fixed fee plus hourly rate), what does a 7.5-hour repair cost?", 435, "60 + 50 × 7.5."),
  tf(S`For every value of $k$, the line $y-2=k(x-1)$ passes through $(1,2)$.`, true, "x = 1 makes the right side 0."),
  num(S`Find the x-coordinate of the foot of the perpendicular from $(5,0)$ to $y=2x$ (shown).`, 1, "The perpendicular is y = −0.5(x − 5); 2x = −0.5x + 2.5.", planeDoc({ view: { xmin: -1, xmax: 6, ymin: -1, ymax: 5 }, lines: [{ m: 2, b: 0 }, { m: -0.5, b: 2.5, color: "green", dash: true }], points: [P(5, 0), P(1, 2)] })),
  num(S`A line through $(2,-1)$ is perpendicular to $3x-4y=5$. Find its y-intercept.`, 5 / 3, "Gradient −4/3: y = −4x/3 + 5/3.", null, 1e-3),
  num(S`$ABCD$ is a parallelogram with $A(1,1)$, $B(5,2)$, $C(6,5)$ (shown). Find the y-coordinate of $D$.`, 4, "D = A + C − B = (2, 4).", planeDoc({ view: { xmin: -1, xmax: 8, ymin: -1, ymax: 7 }, segs: [{ pts: [[1, 1], [5, 2], [6, 5]], color: "violet" }], points: [P(1, 1, "A"), P(5, 2, "B"), P(6, 5, "C")] })),
  num("Gym A costs 40 per month. Gym B costs 100 to join plus 25 per month. After how many whole months is B cheaper in total?", 7, "40n > 100 + 25n → n > 6.67."),
  num(S`Demand is $p=50-2q$ and supply is $p=10+3q$. Find the equilibrium price $p$.`, 34, "50 − 2q = 10 + 3q → q = 8."),
  ms(S`For the line $3x-2y+12=0$, which are true? Select all.`, ["The gradient is 1.5", "The x-intercept is −4", "The y-intercept is −6", "It passes through (2, 9)"], [0, 1, 3], "y = 1.5x + 6, so the y-intercept is 6."),
  num(S`The line $kx+y=3$ is perpendicular to the line through $(0,0)$ and $(2,6)$. Find $k$.`, 1 / 3, "Gradients −k and 3 multiply to −1.", null, 1e-3),
  mx("The line shown passes through three lattice points. Write its equation (give y in terms of x).", "2/3*x+2", "Through (−3, 0) and (0, 2): gradient 2/3.", planeDoc({ view: { xmin: -5, xmax: 4, ymin: -2, ymax: 5 }, lines: [{ m: 2 / 3, b: 2 }], points: [P(-3, 0), P(0, 2), P(3, 4)] })),
  num("A plane descends from 9000 m at 600 m per minute while another climbs from 1200 m at 700 m per minute. After how many minutes are they at the same altitude?", 6, "9000 − 600t = 1200 + 700t."),
  num(S`A line through $(4,0)$ and $(0,k)$, $k>0$, makes a triangle of area 10 with the axes. Find $k$.`, 5, "½ × 4 × k = 10."),
  mc("Which system has no solution?", S`$y=3x+1$ and $6x-2y=5$`, [S`$y=3x+1$ and $6x-2y=-2$`, S`$y=3x+1$ and $y=-3x+1$`, S`$y=3x+1$ and $x=0$`], "6x − 2y = 5 is y = 3x − 2.5: parallel and distinct."),
  num(S`The lines $y=(a+1)x+3$ and $y=(2a-4)x-1$ meet where $x=2$. Find $a$.`, 7, "2a + 5 = 4a − 9."),
];
