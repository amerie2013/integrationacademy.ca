// 4.3 Linear Dependence and Independence — 20 easy + 20 medium questions
import { S, F, mc, num, tf, fill, indepQ, relQ } from "./gen4.mjs";

const easy = [
  indepQ([[3, 1], [1, 2]]),
  indepQ([[2, -6], [-1, 3]], F.v2([[[2, -6], "(2, −6)", "blue"], [[-1, 3], "(−1, 3)", "red"]], { xmin: -3, xmax: 3, ymin: -7, ymax: 4 })),
  tf(S`$\{(0,0,0),(1,2,3)\}$ is linearly independent.`, false, "Any set containing 0 is dependent: 1·0 + 0·(1, 2, 3) = 0."),
  tf(S`$\{(4,1,-2)\}$ is linearly independent.`, true, "A single nonzero vector: c(4, 1, −2) = 0 forces c = 0."),
  fill("The solution c₁ = c₂ = … = cₖ = 0 of c₁v₁ + … + cₖvₖ = 0 is called the ___ solution.", ["trivial"], "It always exists; independence means it is the only one."),
  mc("A set is linearly independent when:", "only the trivial combination gives 0", ["some combination gives 0", "no vector is 0", "the vectors are all different"], "That is the definition."),
  indepQ([[1, 0, 2], [0, 1, 1]]),
  num(S`$(5,-10)=c(-1,2)$. Find $c$.`, -5, "So {(5, −10), (−1, 2)} is dependent."),
  tf("Two vectors are dependent exactly when one is a scalar multiple of the other.", true, "Solve a nontrivial relation for one of them."),
  fill("Vectors are independent exactly when the matrix with them as columns has a pivot in every ___.", ["column"], "No free variable in Ac = 0."),
  indepQ([[1, 1], [1, -1]]),
  tf(S`If $2\vec v_1-\vec v_2+3\vec v_3=\vec 0$, then $\{\vec v_1,\vec v_2,\vec v_3\}$ is dependent.`, true, "A relation with nonzero weights."),
  mc(S`$A=[\,\vec v_1\ \vec v_2\ \vec v_3\,]$ has an echelon form with a free column. Then the vectors are:`, "dependent", ["independent", "spanning", "orthogonal"], "A free variable gives a nontrivial solution of Ac = 0."),
  indepQ([[1, 2, 3], [3, 6, 9]]),
  tf(S`$\{(1,0),(0,1)\}$ is independent.`, true, "c₁(1, 0) + c₂(0, 1) = (c₁, c₂) = 0 forces both to be 0."),
  num(S`For which $k$ is $\{(1,3),(2,k)\}$ dependent?`, 6, "(2, k) = 2(1, 3) requires k = 6."),
  tf("A set of one vector is always independent.", false, "{0} is dependent."),
  indepQ([[2, 1, 0], [0, 1, 1], [0, 0, 3]], F.v3([[[2, 1, 0], "(2, 1, 0)"], [[0, 1, 1], "(0, 1, 1)"], [[0, 0, 3], "(0, 0, 3)"]])),
  mc(S`Which relation shows $\{\vec u,\vec v\}$ is dependent if $\vec v=4\vec u$?`, S`$4\vec u-\vec v=\vec 0$`, [S`$\vec u+\vec v=\vec 0$`, S`$4\vec v-\vec u=\vec 0$`, S`$0\vec u+0\vec v=\vec 0$`], "Move v across: 4u − v = 0."),
  tf("The trivial combination always gives the zero vector.", true, "0·v₁ + … + 0·vₖ = 0."),
];

const medium = [
  indepQ([[1, 2, 1], [2, 1, 0], [1, -1, -1]]),
  indepQ([[1, 0, 1], [1, 1, 0], [0, 1, 2]]),
  indepQ([[1, 1, 0, 1], [0, 1, 1, 1], [1, 2, 1, 2]]),
  indepQ([[2, 1, 1], [1, 2, 1], [1, 1, 3]], F.v3([[[2, 1, 1], "(2, 1, 1)"], [[1, 2, 1], "(1, 2, 1)"], [[1, 1, 3], "(1, 1, 3)"]])),
  relQ([[1, 1, 0], [0, 1, 1], [2, 3, 1]], 0),
  relQ([[1, 2, 1], [1, 0, -1], [3, 4, 1]], 1, F.plane([1, 2, 1], [1, 0, -1], { lu: "v₁", lv: "v₂", more: [[[3, 4, 1], "v₃", "green"]], len: 4 })),
  relQ([[1, 0, 2, 1], [0, 1, 1, 1], [2, -1, 3, 1]], 0),
  num(S`For which $k$ is $\{(1,2,0),(0,1,1),(1,k,1)\}$ dependent?`, 3, "Columns [[1,0,1],[2,1,k],[0,1,1]]: R₂ − 2R₁ → (0, 1, k − 2); R₃ − R₂ → (0, 0, 3 − k)."),
  num(S`For which $h$ is $\{(1,h),(h,4)\}$ dependent with $h\gt0$?`, 2, "Second pivot 4 − h² = 0: h = ±2."),
  tf(S`$\{(1,1,1),(1,2,3),(1,3,5)\}$ is independent.`, false, "(1, 3, 5) = 2(1, 2, 3) − (1, 1, 1)."),
  mc(S`The echelon form of $[\,\vec v_1\ \vec v_2\ \vec v_3\,]$ is $${"\\begin{bmatrix}1&2&0\\\\0&0&1\\\\0&0&0\\end{bmatrix}"}$. Which vector is a combination of earlier ones?`, S`$\vec v_2$`, [S`$\vec v_1$`, S`$\vec v_3$`, "none"], "Column 2 has no pivot: v₂ = 2v₁."),
  tf(S`If $\{\vec u,\vec v\}$ is independent, so is $\{\vec u,\ \vec u+\vec v\}$.`, true, "a u + b(u + v) = (a + b)u + bv = 0 forces b = 0 and then a = 0."),
  tf(S`If $\{\vec u,\vec v\}$ is independent, so is $\{\vec u-\vec v,\ 3\vec v-3\vec u\}$.`, false, "3v − 3u = −3(u − v): the two are parallel."),
  num(S`Four vectors in $\mathbb R^4$ give a matrix with 3 pivots. How many free variables does $A\vec c=\vec 0$ have?`, 1, "4 columns − 3 pivots."),
  indepQ([[1, -1, 0], [0, 1, -1], [-1, 0, 1]]),
  mc(S`Which set is independent?`, S`$\{(1,0,1),(0,1,1)\}$`, [S`$\{(1,2),(2,4)\}$`, S`$\{(0,0),(1,1)\}$`, S`$\{(1,1,1),(2,2,2)\}$`], "The others contain parallel vectors or 0."),
  num(S`$\vec v_3=2\vec v_1-5\vec v_2$. In the relation $a\vec v_1+b\vec v_2+\vec v_3=\vec 0$, find $b$.`, 5, "Move everything left: −2v₁ + 5v₂ + v₃ = 0."),
  tf("If a set is dependent, every vector in it is a combination of the others.", false, "{(1, 0), (2, 0), (0, 1)} is dependent but (0, 1) is not a combination of the others."),
  relQ([[2, 1], [1, 3], [3, -1]], 0, F.v2([[[2, 1], "v₁", "blue"], [[1, 3], "v₂", "red"], [[3, -1], "v₃", "green"]], { xmin: -1, xmax: 4, ymin: -2, ymax: 4 })),
  num(S`For which $c$ is $\{(c,2,0),(2,c,0),(0,0,1)\}$ dependent, $c\gt0$?`, 2, "(0, 0, 1) is independent of the other two, which have third entry 0; (c, 2) and (2, c) are parallel when c² = 4."),
];

export const E = easy;
export { medium as M };
