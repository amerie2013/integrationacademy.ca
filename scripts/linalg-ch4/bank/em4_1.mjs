// 4.1 Linear Combinations and Span — 20 easy + 20 medium questions
import { S, F, mc, num, tf, fill, inSpanQ, coefQ } from "./gen4.mjs";

const V5 = { xmin: -5, xmax: 5, ymin: -5, ymax: 5 };
const easy = [
  mc(S`Which vector is a linear combination $2\vec u-\vec v$ for $\vec u=(1,3)$, $\vec v=(4,1)$?`, S`$(-2,5)$`, [S`$(6,7)$`, S`$(-3,2)$`, S`$(2,5)$`], "2(1, 3) − (4, 1) = (2 − 4, 6 − 1) = (−2, 5)."),
  tf(S`$(10,-4)\in\operatorname{Span}\{(5,-2)\}$.`, true, "(10, −4) = 2(5, −2)."),
  tf(S`$(3,7)\in\operatorname{Span}\{(1,2)\}$.`, false, "c(1, 2) = (3, 7) needs c = 3 and c = 3.5 at once."),
  fill("The set of all linear combinations of v₁, …, vₖ is called their ___.", ["span"], "That is the definition of Span{v₁, …, vₖ}."),
  tf(S`$\vec 0$ belongs to every span.`, true, "Take every weight equal to 0."),
  mc(S`$\operatorname{Span}\{(2,-1)\}$ is:`, "a line through the origin", ["a single point", "all of ℝ²", "a line not through the origin"], "All multiples of one nonzero vector.", F.v2([[[2, -1], "(2, −1)", "blue"]], V5, { segs: [{ pts: [[-5, 2.5], [5, -2.5]], color: "violet", w: 3 }] })),
  mc(S`$\operatorname{Span}\{(1,0),(0,1)\}$ is:`, S`all of $\mathbb R^2$`, ["the x-axis", "a line", S`$\{\vec 0\}$`], "(x, y) = x(1, 0) + y(0, 1)."),
  num(S`Find $c$ with $(-6,9)=c(2,-3)$.`, -3, "2c = −6 gives c = −3; check −3c = 9 ✓."),
  tf(S`$\operatorname{Span}\{\vec 0\}=\{\vec 0\}$.`, true, "Every multiple of 0 is 0."),
  tf(S`Each $\vec v_i$ lies in $\operatorname{Span}\{\vec v_1,\dots,\vec v_k\}$.`, true, "Weight 1 on vᵢ and 0 on the others."),
  inSpanQ([[1, 1], [1, -1]], [4, 2]),
  coefQ([[1, 0], [1, 1]], [5, 3], 0),
  coefQ([[2, 1], [0, 1]], [6, 5], 1),
  mc(S`Membership $\vec b\in\operatorname{Span}\{\vec v_1,\vec v_2\}$ is decided by which augmented matrix?`, S`$[\,\vec v_1\ \vec v_2\mid\vec b\,]$`, [S`$[\,\vec b\mid\vec v_1\ \vec v_2\,]$`, S`rows $\vec v_1,\vec v_2,\vec b$`, S`$[\,\vec v_1+\vec v_2\mid\vec b\,]$`], "The spanning vectors are the columns; b is the right side."),
  num(S`Compute the second entry of $3(1,-2,0)+2(0,4,1)$.`, 2, "3(−2) + 2(4) = −6 + 8 = 2."),
  tf(S`Two parallel vectors in $\mathbb R^2$ span all of $\mathbb R^2$.`, false, "Every combination stays on their common line.", F.v2([[[1, 2], "u", "blue"], [[-2, -4], "−2u", "red"]], V5)),
  tf(S`If $\vec b\in\operatorname{Span}\{\vec v\}$ and $\vec v\ne\vec 0$, then $\vec b$ is a multiple of $\vec v$.`, true, "The span of one vector is its set of multiples."),
  inSpanQ([[1, 2, 0]], [-3, -6, 0]),
  mc(S`A row $[\,0\ 0\mid 3\,]$ after reducing $[\,\vec v_1\ \vec v_2\mid\vec b\,]$ means:`, S`$\vec b\notin\operatorname{Span}\{\vec v_1,\vec v_2\}$`, [S`$\vec b\in\operatorname{Span}$`, "the weights are 0 and 3", S`$\vec v_1=\vec v_2$`], "The row reads 0 = 3: no weights work."),
  tf(S`$\operatorname{Span}\{(1,1)\}$ contains infinitely many vectors.`, true, "Every multiple c(1, 1), for every real c, is in it."),
];

const medium = [
  inSpanQ([[1, 0, 1], [0, 1, 1]], [2, 3, 5], F.plane([1, 0, 1], [0, 1, 1], { lu: "(1, 0, 1)", lv: "(0, 1, 1)", more: [[[2, 3, 5], "(2, 3, 5)", "green"]], len: 5 })),
  inSpanQ([[1, 0, 1], [0, 1, 1]], [2, 3, 4]),
  inSpanQ([[1, 2, 1], [2, 1, 0]], [1, -4, -3]),
  coefQ([[1, 2, 1], [2, 1, 0]], [5, 4, 1], 0),
  coefQ([[3, 1], [1, 2]], [4, 3], 1),
  coefQ([[1, 1, 0], [0, 1, 1], [1, 0, 1]], [3, 4, 5], 2),
  num(S`For which $h$ is $(1,h)\in\operatorname{Span}\{(3,-6)\}$?`, -2, "(1, h) must be ⅓(3, −6) = (1, −2)."),
  num(S`For which $k$ is $(2,1,k)\in\operatorname{Span}\{(1,0,2),(0,1,-1)\}$?`, 3, "Weights 2 and 1 from the first two entries; third entry 2·2 + 1·(−1) = 3."),
  mc(S`An equation of $\operatorname{Span}\{(1,0,3),(0,1,1)\}$ is:`, S`$3x_1+x_2-x_3=0$`, [S`$x_1+x_2+x_3=0$`, S`$3x_1-x_2+x_3=0$`, S`$x_1+3x_3=0$`], "Normal (1, 0, 3) × (0, 1, 1) = (−3, −1, 1); check (1, 0, 3): 3 + 0 − 3 = 0 ✓, (0, 1, 1): 0 + 1 − 1 = 0 ✓.", F.plane([1, 0, 3], [0, 1, 1], { lu: "(1, 0, 3)", lv: "(0, 1, 1)" })),
  tf(S`$\operatorname{Span}\{(1,2,3),(2,4,6)\}$ is a plane.`, false, "(2, 4, 6) = 2(1, 2, 3): the span is a line."),
  tf(S`$\operatorname{Span}\{(1,1),(1,2)\}=\mathbb R^2$.`, true, "Not parallel: weights exist for every (x, y), namely c₁ = 2x − y, c₂ = y − x."),
  mc(S`If $\vec w\in\operatorname{Span}\{\vec u,\vec v\}$, then $\operatorname{Span}\{\vec u,\vec v,\vec w\}$:`, S`equals $\operatorname{Span}\{\vec u,\vec v\}$`, ["is strictly larger", S`is $\{\vec 0\}$`, "is all of ℝⁿ"], "Substituting w = au + bv turns every combination into one of u and v."),
  num(S`$\vec b=c_1(2,1)+c_2(1,3)$ with $\vec b=(1,8)$. Find $c_1$.`, -1, "2c₁ + c₂ = 1 and c₁ + 3c₂ = 8: c₂ = 1 − 2c₁ gives c₁ + 3 − 6c₁ = 8, so c₁ = −1, c₂ = 3."),
  tf(S`$\operatorname{Span}\{\vec u,\vec v\}=\operatorname{Span}\{\vec u,\ 2\vec u+\vec v\}$.`, true, "v = (2u + v) − 2u, so each span contains the other's vectors."),
  tf(S`$\operatorname{Span}\{\vec u,\vec v\}=\operatorname{Span}\{\vec u+\vec v\}$ for all $\vec u,\vec v$.`, false, "u = (1, 0), v = (0, 1): the left side is ℝ², the right side the line through (1, 1)."),
  inSpanQ([[1, -1, 0, 2], [0, 1, 1, 1]], [2, -1, 1, 5]),
  num(S`For which $a$ is $(a,2,4)$ in $\operatorname{Span}\{(1,1,1),(0,1,3)\}$?`, 1, "c₁ = a from entry 1; entry 2: a + c₂ = 2; entry 3: a + 3c₂ = 4. Subtract: 2c₂ = 2, c₂ = 1, a = 1."),
  coefQ([[1, 2], [-1, 3]], [0, 5], 0, F.v2([[[1, 2], "v₁", "blue"], [[-1, 3], "v₂", "red"]], { xmin: -2, xmax: 2, ymin: -1, ymax: 6 }, { points: [{ x: 0, y: 5, label: "(0, 5)", color: "green" }] })),
  mc(S`Which vector is NOT in $\operatorname{Span}\{(1,0,0),(0,1,0)\}$?`, S`$(1,1,1)$`, [S`$(3,-2,0)$`, S`$(0,0,0)$`, S`$(5,5,0)$`], "The span is the plane x₃ = 0."),
  num(S`The line $\operatorname{Span}\{(2,5)\}$ passes through $(x,15)$. Find $x$.`, 6, "(x, 15) = 3(2, 5)."),
];

export const E = easy;
export { medium as M };
