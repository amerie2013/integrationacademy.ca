// 5.1 Subspaces and the Subspace Test — 20 easy + 20 medium questions
import { S, F, mc, num, tf, fill } from "./gen5.mjs";

const V4 = { xmin: -4, xmax: 4, ymin: -4, ymax: 4 };

const easy = [
  tf(S`$\{\vec x\in\mathbb R^2: x_1=3x_2\}$ is a subspace of $\mathbb R^2$.`, true, "A homogeneous linear equation: the line through 0 spanned by (3, 1)."),
  tf(S`$\{\vec x\in\mathbb R^2: x_1+x_2=2\}$ is a subspace of $\mathbb R^2$.`, false, "It does not contain 0: 0 + 0 ≠ 2."),
  tf(S`$\{\vec 0\}$ is a subspace of $\mathbb R^3$.`, true, "Non-empty; 0 + 0 = 0 and c·0 = 0."),
  tf("The empty set is a subspace of ℝ³.", false, "A subspace must be non-empty."),
  mc("Every subspace of ℝⁿ must contain:", "the zero vector", ["the vector (1, 1, …, 1)", "every standard basis vector", "at least two vectors"], "Take any u in S and the scalar 0: 0u = 0 is in S."),
  tf(S`$\mathbb R^4$ is a subspace of $\mathbb R^4$.`, true, "Sums and multiples of vectors in ℝ⁴ are in ℝ⁴."),
  tf("The line in the figure (y = −x) is a subspace of ℝ².", true, "It passes through 0 and is closed under addition and scaling.", F.set("line", { m: -1, view: V4 })),
  tf("The line in the figure (y = x + 2) is a subspace of ℝ².", false, "It misses the origin: at x = 0, y = 2.", F.set("line", { m: 1, b: 2, view: V4 })),
  mc("Which set is NOT a subspace of ℝ²?", S`$\{(x,y): y=x^2\}$`, [S`$\{(x,y): y=5x\}$`, S`$\{(x,y): x=0\}$`, S`$\{\vec 0\}$`], "(1, 1) is on the parabola but 2(1, 1) = (2, 2) is not."),
  fill("A non-empty subset of ℝⁿ that is closed under addition and scalar multiplication is called a ___.", ["subspace"], "That is the definition."),
  tf("The union of the two coordinate axes in ℝ² (figure) is a subspace.", false, "(1, 0) + (0, 1) = (1, 1) lies on neither axis.", F.set("axes", { view: { xmin: -3, xmax: 3, ymin: -3, ymax: 3 } })),
  num(S`For which $b$ is $\{\vec x\in\mathbb R^3: 2x_1-x_2+x_3=b\}$ a subspace?`, 0, "It must contain 0, which needs 0 = b."),
  tf(S`$\{(t,\ 3t): t\in\mathbb R\}$ is a subspace of $\mathbb R^2$.`, true, "It is the line through 0 spanned by (1, 3)."),
  mc("Which set is closed under addition but NOT under scalar multiplication?", S`$\{(x,y): y\ge0\}$`, [S`$\{(x,y): y=2x\}$`, S`$\{(x,y): xy=0\}$`, S`$\{(x,y): y=x+1\}$`], "Sums of points with y ≥ 0 have y ≥ 0, but (−1)(0, 1) = (0, −1)."),
  tf(S`If $S$ is a subspace and $\vec u\in S$, then $-5\vec u\in S$.`, true, "Closure under scalar multiplication, with c = −5."),
  tf(S`The plane $x_1+x_2+x_3=1$ is a subspace of $\mathbb R^3$.`, false, "It does not pass through 0."),
  num(S`How many of these are subspaces of $\mathbb R^2$: $\{\vec 0\}$, $\mathbb R^2$, the line $y=4x$, the line $y=4x+1$?`, 3, "Only the last one misses 0."),
  tf("Every subspace of ℝ² other than {0} and ℝ² is a line through the origin.", true, "The subspaces of ℝ² are {0}, the lines through 0, and ℝ²."),
  mc(S`$S$ is a subspace and $(1,2)\in S$. Which vector must be in $S$?`, S`$(-2,-4)$`, [S`$(2,1)$`, S`$(1,3)$`, S`$(0,1)$`], "(−2, −4) = −2(1, 2)."),
  tf(S`$\{\vec x\in\mathbb R^2: x_1x_2=0\}$ is closed under scalar multiplication.`, true, "(cx₁)(cx₂) = c²x₁x₂ = 0 — but it is not closed under addition."),
];

const medium = [
  tf(S`$\{\vec x\in\mathbb R^3: x_1=0\text{ and }x_2=2x_3\}$ is a subspace.`, true, "Two homogeneous equations: a line through 0."),
  tf(S`$\{(a,\ a+1,\ a): a\in\mathbb R\}$ is a subspace of $\mathbb R^3$.`, false, "Its middle entry is never equal to the first, so (0, 0, 0) is not in it."),
  mc(S`$S=\{(x,y): x\ge0\text{ or }y\ge0\}$. Which pair shows $S$ is not closed under addition?`, S`$(1,-2)+(-2,1)=(-1,-1)$`, [S`$(1,2)+(2,1)=(3,3)$`, S`$(0,-1)+(1,0)=(1,-1)$`, S`$(-1,2)+(-1,0)=(-2,2)$`], "Both summands are in S, but (−1, −1) has x < 0 and y < 0."),
  num(S`For which $k$ is $\{\vec x\in\mathbb R^2: x_1+kx_2=k-3\}$ a subspace?`, 3, "It must contain 0: k − 3 = 0."),
  tf(S`$\{\vec x\in\mathbb R^3: x_1^2+x_2^2=0\}$ is a subspace of $\mathbb R^3$.`, true, "x₁² + x₂² = 0 forces x₁ = x₂ = 0: the set is the x₃-axis, a line through 0."),
  tf(S`$\{\vec x\in\mathbb R^2: |x_1|=|x_2|\}$ is a subspace.`, false, "It is the two lines y = ±x: (1, 1) + (1, −1) = (2, 0) is not in it."),
  tf(S`$\{\vec x\in\mathbb R^3: x_1\le x_2\}$ is a subspace.`, false, "(0, 1, 0) is in it, but −1·(0, 1, 0) = (0, −1, 0) is not."),
  mc("Which set is a subspace of ℝ³?", S`$\{(a,\ 2a,\ b): a,b\in\mathbb R\}$`, [S`$\{(a,\ 2,\ b)\}$`, S`$\{(a,\ a^2,\ b)\}$`, S`$\{(a,\ b,\ c): a\ge0\}$`], "a(1, 2, 0) + b(0, 0, 1): a span, hence a subspace."),
  tf(S`$\{(a,\ b,\ ab): a,b\in\mathbb R\}$ is a subspace.`, false, "(1, 1, 1) is in it but 2(1, 1, 1) = (2, 2, 2) needs 2 = 2·2."),
  num(S`$S$ is a subspace containing $(1,0,2)$ and $(0,1,-1)$. Find $x$ so that $(2,3,x)$ must lie in $S$.`, 1, "(2, 3, x) = 2(1, 0, 2) + 3(0, 1, −1) = (2, 3, 1)."),
  tf(S`The set of vectors with $x_1=x_2$ and $x_2=x_3$ is a subspace of $\mathbb R^3$.`, true, "The intersection of two planes through 0 (the line spanned by (1, 1, 1))."),
  tf(S`$\{\vec x\in\mathbb R^2: x_1\text{ is an integer}\}$ is a subspace.`, false, "(1, 0) is in it but ½(1, 0) is not."),
  mc(S`Which condition of the subspace test fails for $\{(x,y): y\ge|x|\}$?`, "closure under scalar multiplication only", ["closure under addition only", "both closure conditions", "it does not contain 0"], "y₁ + y₂ ≥ |x₁| + |x₂| ≥ |x₁ + x₂|, so sums stay; (−1)(0, 1) = (0, −1) leaves."),
  tf("The parabola y = x² (figure) is a subspace of ℝ².", false, "(1, 1) is on it; 2(1, 1) = (2, 2) is not, since 2 ≠ 4.", F.set("parab", { view: { xmin: -2.5, xmax: 2.5, ymin: -1, ymax: 5 } })),
  tf("The first quadrant x ≥ 0, y ≥ 0 (figure) is closed under addition.", true, "Sums of nonnegative numbers are nonnegative (it still fails scalar multiplication).", F.set("quad", { view: { xmin: -3, xmax: 3, ymin: -3, ymax: 3 } })),
  num("How many conditions does the subspace test check?", 3, "Non-empty (contains 0), closed under addition, closed under scalar multiplication."),
  tf(S`$\{\vec x\in\mathbb R^4: x_1+x_2=0,\ x_3-x_4=0\}$ is a subspace.`, true, "Homogeneous linear conditions always give a subspace."),
  mc(S`If $\vec b\ne\vec 0$, the solution set of $A\vec x=\vec b$ is:`, "never a subspace", ["always a subspace", "a subspace if it is a line", "a subspace if A is square"], "A·0 = 0 ≠ b, so 0 is never a solution."),
  tf(S`$\{c(1,-1,2): c\in\mathbb R\}$ is a subspace of $\mathbb R^3$.`, true, "A line through 0 (a span)."),
  num(S`For which $a$ is $\{\vec x\in\mathbb R^3: x_1+x_2=a^2-1,\ x_3=a^2-a\}$ a subspace?`, 1, "Need a² − 1 = 0 and a² − a = 0: only a = 1."),
];

export const E = easy;
export const M = medium;
