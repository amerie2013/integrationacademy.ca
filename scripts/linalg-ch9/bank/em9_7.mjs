// 9.7 Least-Squares Problems — 20 easy + 20 medium questions
import { S, F, M, col, mc, num, tf, fill, lineQ, normalQ } from "./gen9.mjs";

const easy = [
  lineQ([[0, 1], [1, 2], [2, 4]], 1),
  lineQ([[0, 1], [1, 2], [2, 4]], 0),
  lineQ([[0, 0], [1, 1], [2, 3]], 1),
  lineQ([[-1, 1], [0, 2], [1, 4]], 0),
  lineQ([[-1, 1], [0, 2], [1, 4]], 1),
  fill("The least-squares solution satisfies AᵀAx̂ = ___.", ["Aᵀb", "A^Tb", "A^T b", "Aᵀ b"], "The normal equations."),
  mc("A least-squares line minimises the sum of squared:", "vertical residuals", ["perpendicular distances", "slopes", "x-values"], "y − (β₀ + β₁x)."),
  tf("If b ∈ Col A, the least-squares error is 0.", true, "An exact solution exists."),
  tf("The residuals of a least-squares line with intercept sum to 0.", true, "First row of Xᵀe = 0."),
  num(S`Design matrix rows for a line fit are $(1,x_i)$. For a parabola, how many columns?`, 3, "(1, x, x²)."),
  num(S`$X^TX$ for points with $x$-values $0,1,2$: find the $(2,2)$ entry.`, 5, "0 + 1 + 4."),
  num(S`$X^TX$ for points with $x$-values $0,1,2$: find the $(1,2)$ entry.`, 3, "Σxᵢ."),
  num(S`Least-squares line $y=1.6+0.9x$. Predict $y$ at $x=4$. (Decimal.)`, 5.2, "1.6 + 3.6.", undefined, 0.001),
  tf("x̂ is unique when the columns of A are independent.", true, "AᵀA invertible."),
  num(S`Residuals $(0.1,0.2,-0.7,0.4)$: find the SSE. (Decimal.)`, 0.7, "0.01 + 0.04 + 0.49 + 0.16.", undefined, 0.001),
  mc("Ax̂ is:", "the projection of b onto Col A", ["b itself", "orthogonal to b", "the error"], "Closest point."),
  num(S`For data $(1,2),(2,4),(3,6)$, find the least-squares slope.`, 2, "Exactly on y = 2x.", F.lsq([[1, 2], [2, 4], [3, 6]], 0, 2)),
  lineQ([[1, 1], [2, 2], [3, 2]], 1),
  normalQ([[1, 1], [1, -1], [1, 1]], [2, 0, 4], 0),
  num(S`Fit $y=\beta x$ to $(1,2),(2,3),(3,7)$. Find $\beta$. (Decimal.)`, 2.0714, "Σxy / Σx² = 29/14.", undefined, 0.001),
];

const medium = [
  lineQ([[0, 1], [1, 2], [2, 2], [3, 4]], 0),
  lineQ([[-2, 0], [-1, 1], [0, 1], [1, 2], [2, 4]], 1),
  lineQ([[1, 1], [2, 3], [3, 4]], 0),
  lineQ([[0, 0], [1, 1], [2, 1], [3, 2]], 1),
  lineQ([[1, 3], [2, 5], [4, 6], [5, 9]], 1),
  normalQ([[1, 2], [1, -1], [2, 1]], [3, 1, 1], 0, F.pp([1, 1, 2], [2, -1, 1], [3, 1, 1], [2, 0, 2], { names: ["b", "Ax̂"] })),
  normalQ([[1, 0], [1, 1], [1, 2], [1, 3]], [1, 2, 2, 4], 1),
  normalQ([[1, 0, 0], [1, 1, 1], [1, 2, 4], [1, 3, 9]], [2, 0, 1, 4], 2),
  normalQ([[1, -1, 1], [1, 0, 0], [1, 1, 1], [1, 2, 4]], [3, 0, 1, 5], 1),
  num(S`Least-squares error of $${M([[1, 2], [1, -1], [2, 1]])}\vec x=(3,1,1)$ (squared).`, 3, "e = (1, 1, −1)."),
  num(S`$\hat x$ for $A=${M([[1], [1], [1]])}$, $\vec b=(1,2,6)$.`, 3, "The mean of the entries."),
  tf(S`For $A=${M([[1], [1], [1]])}$, the least-squares solution is the average of the entries of $\vec b$.`, true, "AᵀA = 3, Aᵀb = Σbᵢ."),
  num(S`Using $R=${M([[3, 3], [0, 3]])}$ and $Q^T\vec b=(4,1)$, find $\hat x_2$. (Decimal.)`, 0.3333, "1/3.", undefined, 0.001),
  mc("The least-squares line always passes through:", "(x̄, ȳ)", ["(0, 0)", "the first data point", "(0, ȳ)"], "First normal equation divided by n."),
  num(S`Data $(0,1),(1,3),(2,5)$: least-squares error?`, 0, "Collinear: y = 1 + 2x."),
  num(S`All least-squares solutions of $${M([[1, 1], [1, 1], [1, 1]])}\vec x=(1,2,6)$ satisfy $x_1+x_2=$?`, 3, "AᵀA singular; x₁ + x₂ = 3."),
  tf("Least squares can fit models like y = β₀ + β₁x + β₂x² because they are linear in the β's.", true, "The unknowns appear linearly."),
  num(S`For the parabola fit to $(0,2),(1,0),(2,1),(3,4)$, predict $y$ at $x=1$. (Decimal.)`, 0.15, "1.95 − 3.05 + 1.25.", undefined, 0.001),
  num(S`$X^T\vec y$ for the parabola fit to $(0,2),(1,0),(2,1),(3,4)$: third entry.`, 40, "Σxᵢ²yᵢ = 0 + 0 + 4 + 36.", F.mat([[1, 0, 0], [1, 1, 1], [1, 2, 4], [1, 3, 9]], { label: "X" })),
  lineQ([[2, 1], [4, 2], [6, 2], [8, 3]], 1),
];

export const E = easy;
export { medium as M };
