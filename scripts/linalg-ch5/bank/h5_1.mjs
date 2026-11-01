// 5.1 Subspaces and the Subspace Test — 20 hard questions
import { S, F, mc, num, tf, ms } from "./gen5.mjs";

export const TOPIC = "5.1 Subspaces and the Subspace Test";
export const Q = [
  tf(S`In $\mathbb R^3$, if $U$ is the $x_1$-axis and $W$ the $x_2$-axis, then $U+W=\{\vec u+\vec w\}$ is the $x_1x_2$-plane, a subspace.`, true, "u + w = (a, b, 0): the plane x₃ = 0 (shaded).", F.plane([1, 0, 0], [0, 1, 0], { lu: "x₁-axis", lv: "x₂-axis" })),
  tf("The union of a plane through 0 and a line through 0 lying inside that plane is a subspace.", true, "The union is just the plane."),
  mc("Which of these four sets is a subspace of ℝ³?", S`$\{\vec x: x_1+2x_2=0\text{ and }x_3=x_1\}$`, [S`$\{\vec x: x_1+2x_2=0\text{ or }x_3=x_1\}$`, S`$\{\vec x: x_1x_3=0\}$`, S`$\{\vec x: x_1+2x_2=1\}$`], "'And' of homogeneous equations is an intersection of subspaces; 'or' is a union."),
  num(S`For which positive $k$ is $\{\vec x\in\mathbb R^3: x_1+kx_2=0,\ (k-2)x_3=k^2-4\}$ a subspace?`, 2, "Need k² − 4 = 0; the positive solution is k = 2 (then the second condition reads 0 = 0)."),
  tf(S`If $S$ is a subspace and $\vec u,\vec v\in S$, then $3\vec u-2\vec v\in S$.`, true, "3u ∈ S, −2v ∈ S, and their sum is in S."),
  tf(S`If $S$ is a subspace, $\vec u\in S$ and $\vec u+\vec v\in S$, then $\vec v\in S$.`, true, "v = (u + v) + (−1)u, a combination of members of S."),
  tf("The set of all vectors in ℝ³ orthogonal to (1, 2, 3) is a subspace.", true, "x·(1, 2, 3) = 0 is a homogeneous linear equation: a plane through 0 with that normal.", F.plane([2, -1, 0], [3, 0, -1], { lu: "", lv: "", more: [[[1, 2, 3], "(1, 2, 3)", "red"]] })),
  tf("The unit circle {x ∈ ℝ²: ‖x‖ = 1} (figure) is a subspace.", false, "It misses 0, and 2(1, 0) = (2, 0) has length 2.", F.set("circle", { b: 1, view: { xmin: -2, xmax: 2, ymin: -2, ymax: 2 } })),
  num("How many subspaces of ℝ², other than ℝ² itself, contain both (1, 2) and (3, 6)?", 1, "(3, 6) = 3(1, 2): the only proper subspace containing them is the line y = 2x."),
  mc(S`The line $\{(x,y): y=mx+b\}$ is a subspace of $\mathbb R^2$ exactly when:`, S`$b=0$`, [S`$m=0$`, S`$m=b$`, S`$m\ne0$`], "It must pass through 0."),
  tf("The set of solutions of x₁² − x₂² = 0 (figure) is closed under addition.", false, "(1, 1) and (1, −1) are solutions; their sum (2, 0) gives 4 ≠ 0.", F.set("cross", { view: { xmin: -3, xmax: 3, ymin: -3, ymax: 3 } })),
  num(S`$S=\{\vec x\in\mathbb R^3: x_1+x_2=0,\ x_2+x_3=0\}$. Find $x_1$ for the vector of $S$ with $x_3=2$.`, 2, "x₂ = −x₃ = −2 and x₁ = −x₂ = 2."),
  tf("If U and W are subspaces of ℝⁿ, then U ∩ W is a subspace.", true, "0 is in both, and sums and multiples of vectors in both stay in both."),
  tf("If U and W are subspaces of ℝⁿ and U ∪ W is a subspace, then U ⊆ W or W ⊆ U.", true, "Otherwise pick u ∈ U∖W and w ∈ W∖U: u + w lies in neither."),
  mc("The smallest subspace of ℝ³ containing (1, 0, 0) and (0, 1, 0) is:", "the plane x₃ = 0", ["the line through the two points", "all of ℝ³", "the set of those two vectors"], "It must contain all their combinations: Span{e₁, e₂} = {(a, b, 0)}."),
  num(S`$S=\{\vec x\in\mathbb R^3: x_1=2x_2,\ x_3=-x_2\}$ (figure). Find $x_1$ for the vector of $S$ with $x_3=4$.`, -8, "x₂ = −4, x₁ = 2x₂ = −8: the vector −4(2, 1, −1).", F.line([2, 1, -1], { label: "(2, 1, −1)" })),
  tf(S`$\{(a,b,c): a=b=c=0\text{ or }a=1\}$ is a subspace.`, false, "(1, 0, 0) is in it, but 2(1, 0, 0) = (2, 0, 0) is not."),
  tf(S`$\{(x,y): x+y\ge0\text{ and }x+y\le0\}$ is a subspace of $\mathbb R^2$.`, true, "The two inequalities together say x + y = 0: a line through 0."),
  ms("Which are subspaces of ℝ²?", [S`$\{\vec 0\}$`, S`the line $y=3x$`, S`$\{(x,y): y\ge0\}$`, S`$\mathbb R^2$`, "the unit circle"], [0, 1, 3], "Only {0}, lines through 0, and ℝ² itself."),
  num(S`For which $b$ is the line $\{(1,b)+t(2,1): t\in\mathbb R\}$ a subspace of $\mathbb R^2$?`, 0.5, "It is a subspace iff it passes through 0, i.e. (1, b) is a multiple of (2, 1): b = ½.", undefined, 0.001),
];
