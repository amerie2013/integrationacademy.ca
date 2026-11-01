// 2.2 Augmented Matrices and Elementary Row Operations — 20 hard questions
import { S, sysT, withSol, sysFig, solveQ, countQ, mc, num, tf, ms, am, matSvg, linesSvg } from "./gen2.mjs";

export const TOPIC = "2.2 Augmented Matrices and Elementary Row Operations";
export const Q = [
  solveQ(withSol([[1, 1, 0, 1], [2, 1, 1, 0], [0, 1, 2, 1], [1, 0, 1, 1]], [1, 0, -1, 2]), 3, false, "Use row operations to solve"),
  solveQ(withSol([[1, 2, 0, 1], [0, 1, 1, 0], [1, 0, 1, 2], [2, 1, 0, 1]], [0, 1, -1, 2]), 0, false, "Use row operations to solve"),
  mc(S`For which $a$ does $${am([[1, "a", 2], ["a", 4, 4]])}$ have infinitely many solutions?`, S`$a=2$`, [S`$a=-2$`, S`$a=\pm2$`, S`$a=4$`], "R₂ − aR₁: (0, 4 − a² | 4 − 2a): both zero only for a = 2."),
  mc(S`For which $a$ is $${am([[1, "a", 2], ["a", 4, 4]])}$ inconsistent?`, S`$a=-2$`, [S`$a=2$`, S`$a=\pm2$`, S`no value of $a$`], "a = −2 gives (0, 0 | 8)."),
  num(S`After row operations a system reads $${am([[1, 2, -1, 3], [0, 1, "k", 1], [0, 0, "k^2-1", "k-1"]])}$. For which $k$ is it inconsistent?`, -1, "k = −1: last row (0,0,0 | −2)."),
  num(S`For the matrix in the previous question with $k=2$, find $x_3$.`, 0.333, "(4 − 1)x₃ = 1.", undefined, 0.002),
  mc(S`For which $\vec b$ is $${am([[1, -1, "b_1"], [2, 1, "b_2"], [1, 2, "b_3"]])}$ consistent?`, S`$b_1-b_2+b_3=0$`, [S`$b_1+b_2+b_3=0$`, S`$b_1-b_2-b_3=0$`, S`for every $\vec b$`], "Reduce: the last row becomes (0, 0 | b₁ − b₂ + b₃).", linesSvg([[1, -1, 1], [2, 1, 3], [1, 2, 2]], { xmin: -1, xmax: 3, ymin: -1, ymax: 3 }, [4 / 3, 1 / 3], "")),
  num(S`$${am([[1, 2, "b_1"], [2, 3, "b_2"], [3, 5, "b_3"]])}$ is consistent and $b_1=1$, $b_2=4$. Find $b_3$.`, 5, "Consistency condition b₃ = b₁ + b₂."),
  tf("Every swap of two rows can be produced by a sequence of row operations of the other two types.", true, "R₁ + R₂, R₂ − R₁, R₁ + R₂, −R₂."),
  tf(S`If two augmented matrices have the same RREF, the systems have the same solutions.`, true, "Both are row equivalent to the same matrix, hence to each other."),
  tf("Swapping two columns of an augmented matrix does not change the solution set.", false, "It exchanges the roles of two unknowns."),
  ms("Which operations are elementary row operations?", [S`$R_1\leftrightarrow R_3$`, S`$R_2\to-\tfrac12R_2$`, S`$R_2\to 0\cdot R_2$`, S`$R_3\to R_3-\pi R_1$`], [0, 1, 3], "Scaling by 0 is not allowed; scaling by −½ and adding −π times another row are."),
  num(S`Row operations turn $${am([[1, 2, -1, 3], [2, 5, 1, 10], [3, 7, 2, 15]])}$ into triangular form. Find $x_3$.`, 1, "R₂ − 2R₁, R₃ − 3R₁, then R₃ − R₂ give (0, 0, 2 | 2); the solution is (2, 1, 1).", matSvg([[1, 2, -1, 3], [2, 5, 1, 10], [3, 7, 2, 15]])),
  countQ([[1, 1, 1, 1], [1, 2, 4, 3], [1, 3, 7, 5]], true),
  countQ([[1, 1, 1, 1], [1, 2, 4, 3], [1, 3, 7, 6]], true),
  num(S`For which $c$ is $${sysT([[1, 1, 1, 1], [1, 2, 4, 3], [1, 3, 7, "c"]])}$ consistent?`, 5, "R₂ − R₁ = (0,1,3 | 2); R₃ − R₁ = (0,2,6 | c − 1); consistent iff c − 1 = 4."),
  mc(S`$A$ is $3\times3$ and $[A\mid\vec b]$ reduces to a matrix with last row $[\,0\ 0\ 0\mid 0\,]$. What can you conclude?`, "the system is consistent if no other row is [0 0 0 | c ≠ 0], and then has infinitely many solutions", ["the system is inconsistent", "the system has exactly one solution", "nothing — a zero row means 0 = 0 and changes nothing about consistency"], "A zero row is harmless but leaves at most two pivots for three unknowns."),
  num(S`$${am([[1, 2, 3, 6], [2, 5, 3, 10], [1, 0, 8, 9]])}$: find $x_1$.`, 1, "Unique solution (1, 1, 1).", matSvg([[1, 2, 3, 6], [2, 5, 3, 10], [1, 0, 8, 9]])),
  num(S`How many elementary row operations of the form $R_i\to R_i+cR_j$ are needed to clear all entries below the diagonal of a $4\times4$ matrix with nonzero pivots (no swaps)?`, 6, "3 + 2 + 1."),
  mc(S`Which system is row equivalent to $x_1+x_2=3,\ x_1-x_2=1$?`, S`$x_1+x_2=3,\ 2x_1=4$`, [S`$x_1+x_2=3,\ x_1=1$`, S`$x_1=2,\ x_2=2$`, S`$2x_1+2x_2=3,\ x_1-x_2=1$`], "R₂ → R₂ + R₁ gives 2x₁ = 4; the solution (2, 1) must be kept.", linesSvg([[1, 1, 3], [1, -1, 1], [2, 0, 4]], { xmin: -1, xmax: 4, ymin: -2, ymax: 4 }, [2, 1])),
];
