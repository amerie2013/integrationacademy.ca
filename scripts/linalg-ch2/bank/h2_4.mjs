// 2.4 Gaussian and Gauss–Jordan Elimination — 20 hard questions
import { S, sysT, withSol, sysFig, solveQ, countQ, paramQ, mc, num, tf, ms, am, matSvg, linesSvg, planesSvg } from "./gen2.mjs";

export const TOPIC = "2.4 Gaussian and Gauss–Jordan Elimination";
export const Q = [
  solveQ(withSol([[1, 1, 1, 1], [1, -1, 1, -1], [1, 1, -1, -1], [2, 1, 0, 1]], [1, 2, 0, -1]), 1, false, "Use Gaussian elimination to solve"),
  solveQ(withSol([[2, 1, 0, 1], [1, 0, 1, 2], [0, 1, 1, -1], [1, 1, 0, 0]], [0, 1, 2, -1]), 2, false, "Use Gaussian elimination to solve"),
  solveQ(withSol([[1, 2, 1, 0], [0, 1, 2, 1], [1, 0, 1, 2], [1, 1, 0, 1]], [1, -1, 1, 2]), 3, false, "Solve"),
  solveQ(withSol([[0, 1, 1, 1], [1, 0, 1, 1], [1, 1, 0, 1], [1, 1, 1, 0]], [2, 1, 0, -1]), 0, true, "Solve"),
  mc(S`For which $k$ does $x+y+kz=1,\ x+ky+z=1,\ kx+y+z=1$ have no solution?`, S`$k=-2$`, [S`$k=1$`, S`$k=2$`, S`no value of $k$`], "Adding gives (k + 2)(x + y + z) = 3."),
  mc(S`For which $k$ does $x+y+kz=1,\ x+ky+z=1,\ kx+y+z=1$ have infinitely many solutions?`, S`$k=1$`, [S`$k=-2$`, S`$k=0$`, S`$k=\pm1$`], "k = 1 makes all three equations x + y + z = 1."),
  num(S`For $k=3$, solve $x+y+kz=1,\ x+ky+z=1,\ kx+y+z=1$ and give $x$.`, 0.2, "x = y = z = 1/(k + 2).", undefined, 0.001),
  num(S`For $k=-3$, solve $x+y+kz=1,\ x+ky+z=1,\ kx+y+z=1$ and give $x$.`, -1, "x = y = z = 1/(k + 2)."),
  num(S`Solve $0.0001x_1+x_2=1,\ x_1+x_2=2$ <strong>without</strong> swapping, rounding every result to 3 significant digits. What value of $x_1$ do you get?`, 0, "−9999 rounds to −10000, so x₂ = 1.00 and 0.0001x₁ = 0.", linesSvg([[0.0001, 1, 1], [1, 1, 2]], { xmin: -0.5, xmax: 2.5, ymin: -0.5, ymax: 2.5 }, [1, 1], "")),
  num(S`Solve $0.0001x_1+x_2=1,\ x_1+x_2=2$ <strong>after</strong> swapping the rows, rounding to 3 significant digits. What value of $x_1$ do you get?`, 1, "With pivot 1: x₂ = 1.00 and x₁ = 2 − 1."),
  num(S`How many solutions in nonnegative integers does $x_1+x_2+x_3=12,\ 2x_1+x_2+3x_3=25$ have?`, 6, "x = (13 − 2t, t − 1, t): 1 ≤ t ≤ 6."),
  num(S`How many solutions in nonnegative integers does $x_1+x_2+x_3=10,\ x_1-x_2+2x_3=4$ have?`, 3, "x = (7 − 1.5t, 3 + 0.5t, t): t ∈ {0, 2, 4}."),
  paramQ([[1, 2, -1, 1, 0, 2], [2, 4, -1, 3, 1, 7], [1, 2, 0, 2, 2, 7]], [1, 0], 0, true),
  countQ([[1, 2, 3, 1], [2, 4, 7, 3], [3, 6, 10, 5]], true),
  countQ([[1, 2, 3, 1], [2, 4, 7, 3], [3, 6, 10, 4]]),
  tf("If the forward phase produces a row [0 … 0 | c] with c ≠ 0, the backward phase can still produce a solution.", false, "Row operations never remove an inconsistency."),
  tf("Gauss–Jordan elimination always produces the same final matrix, whatever pivots are chosen.", true, "The RREF is unique."),
  ms("Which of these force a row swap during the forward phase?", ["a 0 in the pivot position with a nonzero entry below it", "a negative pivot", "a pivot equal to 1", "an entire zero column"], [0], "Negative or unit pivots are fine; a zero column has no pivot at all — move right."),
  mc(S`The three planes $x+y+z=3$, $x+2y+3z=6$, $2x+3y+4z=c$ share a line exactly when:`, S`$c=9$`, [S`$c=6$`, S`$c\ne9$`, S`$c=3$`], "Row 3 − row 1 − row 2 gives (0, 0, 0 | c − 9).", planesSvg([[1, 1, 1, 3], [1, 2, 3, 6], [2, 3, 4, 9]], { center: [1, 1, 1], size: 1.1, len: 3, line: { p: [0, 3, 0], d: [1, -2, 1], t0: -0.3, t1: 1.5 } })),
  num(S`For $c=9$, the planes $x+y+z=3$, $x+2y+3z=6$, $2x+3y+4z=c$ share a line. Find $y$ on that line when $x=1$.`, 1, "x = t, y = 3 − 2t, z = t.", matSvg([[1, 1, 1, 3], [1, 2, 3, 6], [2, 3, 4, 9]])),
];
