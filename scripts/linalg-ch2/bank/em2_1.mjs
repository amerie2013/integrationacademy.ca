// 2.1 Systems of Linear Equations — 20 easy + 20 medium questions (answers computed from the data)
import { S, sysT, withSol, sysFig, checkQ, solveQ, countQ, paramQ, freeQ, mc, num, tf, fill, ms, linesSvg } from "./gen2.mjs";

const easy = [
  checkQ([[1, 1, 5], [2, -1, 1]], [2, 3], true),
  checkQ([[3, -1, 4], [1, 2, 6]], [2, 2]),
  checkQ(withSol([[1, 1, 1], [2, -1, 0], [0, 1, 3]], [1, 2, -1]), [1, 2, -1]),
  checkQ([[1, 1, 1, 6], [1, -1, 2, 5], [2, 0, 1, 4]], [1, 2, 3]),
  solveQ([[1, 1, 7], [1, -1, 1]], 0, true),
  solveQ([[2, 1, 8], [1, -1, 1]], 1),
  solveQ([[3, 2, 12], [1, -2, -4]], 1),
  countQ([[1, -2, 3], [-2, 4, 1]], true),
  countQ([[2, 1, 5], [6, 3, 15]]),
  mc(S`Which equation is linear in $x_1,x_2,x_3$?`, S`$\sqrt5\,x_1-x_3=\pi$`, [S`$x_1x_2+x_3=0$`, S`$x_1^2-x_2=1$`, S`$\sin x_1+x_2=0$`], "Each unknown to the first power, multiplied by a number."),
  mc(S`Which equation is <strong>not</strong> linear?`, S`$\tfrac{1}{x_1}+x_2=3$`, [S`$2x_1=7x_2-1$`, S`$\tfrac12x_1+\tfrac13x_2=0$`, S`$x_3=-4$`], "An unknown in a denominator is not linear."),
  tf(S`$e^2x_1-\ln3\,x_2=0$ is a linear equation.`, true, "e² and ln 3 are just real numbers."),
  solveQ([[1, 2, -1, 5], [0, 1, 3, 11], [0, 0, 2, 6]], 0, false, "Use back substitution to solve"),
  solveQ([[2, -1, 1, 4], [0, 3, -2, 1], [0, 0, 4, 8]], 1, false, "Use back substitution to solve"),
  fill("A system of linear equations with at least one solution is called ___.", ["consistent"], "Inconsistent means no solution."),
  tf("A system of linear equations can have exactly two solutions.", false, "Two solutions force every point of the line through them to be a solution."),
  mc("Two distinct parallel lines in the plane represent a system with:", "no solution", ["exactly one solution", "infinitely many solutions", "exactly two solutions"], "Parallel lines never meet."),
  num(S`How many unknowns does the system $${sysT([[1, 0, 2, -1, 3], [0, 1, 1, 4, 0]], ["x_1", "x_2", "x_3", "x_4"])}$ have?`, 4, "Count x₁ through x₄."),
  tf(S`Two planes in $\mathbb R^3$ can meet in exactly one point.`, false, "Two planes are parallel, equal, or meet in a line."),
  num(S`The lines in the figure are $x_1+2x_2=7$ and $x_1-x_2=1$. Find the $x_2$-coordinate of their intersection.`, 2, "Subtract: 3x₂ = 6.", linesSvg([[1, 2, 7], [1, -1, 1]], { xmin: -1, xmax: 6, ymin: -2, ymax: 5 }, [3, 2], "?")),
];

const medium = [
  solveQ(withSol([[1, 2, 1], [2, 1, -1], [1, -1, 2]], [2, 1, 1]), 0, true),
  solveQ(withSol([[2, 1, 1], [1, 3, -1], [1, 1, 2]], [1, -1, 3]), 2),
  solveQ(withSol([[1, -1, 2], [3, 1, 1], [2, 2, 1]], [0, 2, 1]), 1),
  solveQ(withSol([[1, 1, 1], [1, 2, 4], [1, 3, 9]], [3, -1, 2]), 0),
  countQ([[1, 2, -1, 3], [2, 4, -2, 7], [1, 0, 1, 2]], true),
  countQ([[1, 1, 1, 3], [1, 2, 3, 6], [2, 3, 4, 9]]),
  countQ([[1, -1, 0, 1], [0, 1, -1, 2], [1, 0, 1, 4]]),
  num(S`For which $k$ does $x_1+3x_2=4,\ 2x_1+kx_2=8$ have infinitely many solutions?`, 6, "The second equation must be twice the first."),
  num(S`For which $k$ does $2x_1-x_2=k,\ -6x_1+3x_2=9$ have infinitely many solutions?`, -3, "Multiply the first equation by −3."),
  num(S`For which $a$ does $ax_1+4x_2=1,\ 3x_1+6x_2=5$ have no solution?`, 2, "The lines are parallel when a : 4 = 3 : 6."),
  num(S`For which $a$ does $x_1+ax_2=2,\ 4x_1-8x_2=3$ have no solution?`, -2, "Proportional left sides: a = −2; then 4·2 ≠ 3."),
  num(S`The lines $x_1+x_2=5$, $2x_1-x_2=1$ and $x_1+cx_2=7$ pass through one point. Find $c$.`, 2.5, "The first two meet at (2, 3); then 2 + 3c = 7... check: c = 5/3? Solve 2 + 3c = 7.", linesSvg([[1, 1, 5], [2, -1, 1]], { xmin: -1, xmax: 5, ymin: -1, ymax: 6 }, [2, 3]), 0.001),
  num(S`The lines $x_1-x_2=1$, $x_1+x_2=7$ and $cx_1+x_2=11$ pass through one point. Find $c$.`, 2, "The first two meet at (4, 3); 4c + 3 = 11.", linesSvg([[1, -1, 1], [1, 1, 7]], { xmin: -1, xmax: 7, ymin: -2, ymax: 6 }, [4, 3])),
  paramQ([[1, 1, 1, 6], [0, 1, -1, 1]], [2], 0),
  paramQ([[1, -2, 1, 1], [0, 1, 2, 4]], [1], 0),
  tf(S`If $(1,2)$ and $(3,4)$ both solve a linear system, then $(5,6)$ solves it too.`, true, "(5, 6) = (1 − t)(1, 2) + t(3, 4) with t = 2."),
  tf(S`If $(1,0,2)$ and $(3,2,0)$ both solve a linear system, then $(2,1,1)$ solves it too.`, true, "It is the midpoint (t = 1/2)."),
  mc(S`Two non-parallel planes in $\mathbb R^3$ intersect in:`, "a line", ["a point", "the empty set", "a plane"], "Two equations in three unknowns leave one free variable."),
  freeQ([[1, 2, 0, -1, 3], [0, 0, 1, 2, 1]]),
  freeQ([[1, -1, 2, 0, 4], [0, 1, 1, 0, 2], [0, 0, 0, 1, 5]]),
];
// fix the third-line question to an exact answer
medium[11] = num(S`The lines $x_1+x_2=5$, $2x_1-x_2=1$ and $x_1+cx_2=8$ pass through one point. Find $c$.`, 2, "The first two meet at (2, 3); 2 + 3c = 8.", linesSvg([[1, 1, 5], [2, -1, 1]], { xmin: -1, xmax: 5, ymin: -1, ymax: 6 }, [2, 3]));

export const E = easy;
export const M = medium;
