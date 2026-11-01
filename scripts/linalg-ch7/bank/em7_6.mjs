// 7.6 Kernel and Range; One-to-One and Onto — 20 easy + 20 medium questions
import { S, F, M, col, mc, num, tf, fill, kerDimQ, rangeDimQ, oneOneQ, ontoQ } from "./gen7.mjs";

const easy = [
  oneOneQ([[1, 2], [3, 4]]),
  oneOneQ([[1, 2], [2, 4]], F.sq([[1, 2], [2, 4]])),
  ontoQ([[1, 0, 2], [0, 1, 3]]),
  ontoQ([[1, 2], [2, 4]]),
  kerDimQ([[1, 2], [2, 4]]),
  kerDimQ([[1, 0, 0], [0, 1, 0]]),
  rangeDimQ([[1, 2], [2, 4], [3, 6]]),
  rangeDimQ([[1, 0], [0, 1], [1, 1]]),
  fill("The set of x with T(x) = 0 is the ___ of T.", ["kernel", "null space", "nullspace"], "ker T = Nul A."),
  mc("T is one-to-one exactly when:", "ker T = {0}", ["range T = ℝᵐ", "T(0) = 0", "A is square"], "T(u) = T(v) ⇔ u − v ∈ ker T."),
  mc("T(x) = Ax is onto ℝᵐ exactly when A has:", "a pivot in every row", ["a pivot in every column", "no zero entries", "more rows than columns"], "Then [A | b] is consistent for every b."),
  tf("A linear map ℝ³ → ℝ² can be one-to-one.", false, "Three columns, at most two pivots."),
  tf("A linear map ℝ² → ℝ³ can be onto.", false, "Two columns span at most a plane."),
  tf("The kernel of a linear map always contains 0.", true, "T(0) = 0."),
  num(S`$T:\mathbb R^5\to\mathbb R^3$ has a 2-dimensional range. Find $\dim\ker T$.`, 3, "5 − 2."),
  num(S`$T:\mathbb R^4\to\mathbb R^4$ is onto. Find $\dim\ker T$.`, 0, "Square and onto ⇒ one-to-one."),
  num(S`$\ker T$ of $${M([[1, 3], [2, 6]])}\vec x$ is spanned by $(-3,k)$. Find $k$.`, 1, S`$${M([[1, 3], [2, 6]])}${col([-3, 1])}=${col(["-3+3", "-6+6"])}$.`, F.ker([-3, 1])),
  tf(S`$\ker T$ is a subspace of the codomain.`, false, "It lies in the domain ℝⁿ."),
  tf(S`For square $A$, $T$ is one-to-one exactly when it is onto.`, true, "n pivots in an n × n matrix fill every row and column."),
  num(S`$A$ is $3\times7$ with rank 3. Find $\dim\ker T$.`, 4, "7 − 3."),
];

const medium = [
  kerDimQ([[1, 2, -1], [2, 4, 1]], F.mat([[1, 2, -1], [2, 4, 1]], { label: "A" })),
  kerDimQ([[1, 2, 3], [2, 4, 6], [1, 1, 1]]),
  kerDimQ([[1, 0, 2, 1], [0, 1, 1, -1], [1, 1, 3, 0]]),
  rangeDimQ([[1, 2, 3], [4, 5, 6], [7, 8, 9]]),
  rangeDimQ([[1, -1, 2], [2, -2, 4]]),
  oneOneQ([[1, 0], [2, 1], [1, 3]]),
  oneOneQ([[1, 1, 0], [0, 1, 1]]),
  ontoQ([[1, 0], [2, 1], [1, 3]], F.mat([[1, 0], [2, 1], [1, 3]], { label: "3 × 2" })),
  ontoQ([[1, 2, 0], [0, 1, 1], [1, 3, 2]]),
  oneOneQ([[1, 2, 0], [0, 1, 1], [1, 3, 2]]),
  num(S`For which $h$ is $${M([[1, "h"], [3, 6]])}\vec x$ not one-to-one?`, 2, S`$R_2-3R_1$: $(0,\ 6-3h)$; no pivot when $h=2$.`),
  num(S`For which $h$ is $${M([[1, 2], [2, "h"]])}\vec x$ not onto $\mathbb R^2$?`, 4, S`$R_2-2R_1$: $(0,\ h-4)$.`),
  num(S`$\ker T$ of $${M([[1, 1, 1], [1, 2, 3]])}\vec x$ is spanned by $(1,a,1)$. Find $a$.`, -2, S`$${M([[1, 1, 1], [1, 2, 3]])}${col([1, -2, 1])}=${col(["1-2+1", "1-4+3"])}=\vec 0$.`, F.ker([1, -2])),
  num(S`$T(\vec u)=T(\vec v)$ for $A=${M([[1, 2], [2, 4]])}$, $\vec u=(3,0)$, $\vec v=(1,b)$. Find $b$.`, 1, S`$\vec u-\vec v=(2,-b)$ must be in $\ker T=\operatorname{span}\{(2,-1)\}$.`),
  tf(S`The range of $${M([[1, 2], [0, 1], [1, 3]])}\vec x$ is the plane $x_3=x_1+x_2$.`, true, S`Columns $(1,0,1)$ and $(2,1,3)$ satisfy $x_3=x_1+x_2$ and are independent.`),
  mc("The range of a 2 × 2 matrix of rank 1 is:", "a line through 0", ["a point", "the whole plane", "a line not through 0"], "Col A is spanned by one nonzero column."),
  num(S`$T:\mathbb R^6\to\mathbb R^4$ is onto. Find $\dim\ker T$.`, 2, "6 − 4."),
  num(S`$\dim\ker T=1$ for $T:\mathbb R^4\to\mathbb R^4$. Find $\dim\operatorname{range}T$.`, 3, "4 − 1."),
  tf("If T(x) = Ax is one-to-one, then Ax = b has at most one solution for each b.", true, "Two solutions would differ by a nonzero kernel vector."),
  num(S`$A$ is $4\times3$ with rank 3. How many of "one-to-one", "onto" hold?`, 1, "One-to-one (3 pivots in 3 columns), not onto (4 rows)."),
];

export const E = easy;
export { medium as M };
