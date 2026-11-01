// 5.3 Bases of a Subspace — 20 easy + 20 medium questions
import { S, F, mc, num, tf, fill, indepQ, coefQ } from "./gen5.mjs";

const coord = (basis, x, i) => coefQ(basis, x, i, undefined, S`$\{${basis.map((b) => `(${b.join(",")})`).join(",\\ ")}\}$ is a basis (in this order). Find coordinate ${i + 1} of $(${x.join(",")})$.`);

const easy = [
  indepQ([[1, 2], [3, 6]]),
  indepQ([[1, 2], [2, 1]]),
  tf("A set that contains the zero vector can be linearly independent.", false, "1·0 = 0 is a nontrivial combination equal to 0."),
  num(S`How many vectors are in the standard basis of $\mathbb R^5$?`, 5, "e₁, …, e₅."),
  mc(S`Which set is a basis of $\mathbb R^2$?`, S`$\{(1,2),(2,1)\}$`, [S`$\{(1,2),(2,4)\}$`, S`$\{(1,2)\}$`, S`$\{(0,0),(1,0)\}$`], "Two non-parallel vectors in ℝ²."),
  coord([[1, 1], [0, 1]], [3, 7], 0),
  coord([[1, 1], [0, 1]], [3, 7], 1),
  tf(S`$\{(1,0,0),(0,1,0)\}$ is a basis of $\mathbb R^3$.`, false, "Independent, but it only spans the plane x₃ = 0."),
  tf("The vectors in a basis are linearly independent.", true, "That is half of the definition."),
  fill("A linearly independent spanning set of a subspace S is called a ___ of S.", ["basis"], "Definition of a basis."),
  indepQ([[1, 0, 1], [0, 1, 1]], F.plane([1, 0, 1], [0, 1, 1], { lu: "(1, 0, 1)", lv: "(0, 1, 1)" })),
  mc(S`Which is a basis of the line $\{t(3,-1): t\in\mathbb R\}$?`, S`$\{(3,-1)\}$`, [S`$\{(3,-1),(-3,1)\}$`, S`$\{(0,0)\}$`, S`$\{(1,3)\}$`], "One nonzero vector on the line."),
  tf(S`$\{(1,1),(1,-1),(2,0)\}$ is linearly independent.`, false, "(2, 0) = (1, 1) + (1, −1); also, 3 vectors in ℝ² are always dependent."),
  num(S`How many vectors are in a basis of the plane $x_1-4x_2+x_3=0$?`, 2, "One equation in ℝ³ leaves two free variables."),
  tf("Every vector of a subspace has exactly one list of coordinates in a given basis.", true, "Existence from spanning, uniqueness from independence."),
  mc(S`In $\mathbb R^3$, $\vec e_2$ is:`, S`$(0,1,0)$`, [S`$(1,0,0)$`, S`$(0,0,1)$`, S`$(1,1,0)$`], "A 1 in position 2, zeros elsewhere."),
  indepQ([[2, 0, 0], [0, 3, 0], [0, 0, -1]]),
  num(S`Find the coefficient of $\vec e_3$ when $(5,-2,4)$ is written in the standard basis.`, 4, "(5, −2, 4) = 5e₁ − 2e₂ + 4e₃."),
  tf("Two non-parallel vectors in ℝ² form a basis of ℝ².", true, "They are independent and span ℝ²."),
  indepQ([[1, 2, 3], [2, 4, 6]], F.line([1, 2, 3], { label: "(1, 2, 3)", more: [[[2, 4, 6], "(2, 4, 6)", "red"]], len: 6 })),
];

const medium = [
  indepQ([[1, 1, 0], [0, 1, 1], [1, 0, 1]], F.v3([[[1, 1, 0], "(1, 1, 0)"], [[0, 1, 1], "(0, 1, 1)"], [[1, 0, 1], "(1, 0, 1)"]])),
  indepQ([[1, 2, 1], [1, 0, -1], [2, 2, 0]]),
  coord([[1, 2], [3, 5]], [1, 1], 0),
  coord([[1, 0, 1], [1, 1, 0], [0, 1, 1]], [3, 5, 4], 1),
  num(S`How many vectors are in a basis of $\{\vec x\in\mathbb R^4: x_1=x_2=x_3\}$?`, 2, "Two equations (x₁ − x₂ = 0, x₂ − x₃ = 0), four unknowns: 2 free variables."),
  mc(S`Which is a basis of the plane $x_1+x_2-x_3=0$?`, S`$\{(1,0,1),(0,1,1)\}$`, [S`$\{(1,1,1),(1,0,1)\}$`, S`$\{(1,0,1)\}$`, S`$\{(1,0,1),(2,0,2)\}$`], "x₃ = x₁ + x₂: s(1, 0, 1) + t(0, 1, 1)."),
  tf(S`$\{(1,2,3),(4,5,6),(7,8,9)\}$ is a basis of $\mathbb R^3$.`, false, "(7, 8, 9) = 2(4, 5, 6) − (1, 2, 3): dependent."),
  num(S`For which $k$ is $\{(1,k),(2,8)\}$ not a basis of $\mathbb R^2$?`, 4, "They are parallel when (2, 8) = 2(1, 4)."),
  mc(S`A basis of $\operatorname{Span}\{(1,1,2),(2,2,4),(0,1,1)\}$ is:`, S`$\{(1,1,2),(0,1,1)\}$`, [S`$\{(1,1,2),(2,2,4)\}$`, S`all three vectors`, S`$\{(0,1,1)\}$`], "(2, 2, 4) = 2(1, 1, 2) is redundant; the remaining two are not parallel."),
  tf("Removing a vector from a basis leaves a set that still spans the subspace.", false, "The removed vector is not a combination of the others (independence)."),
  coord([[2, 1], [1, 1]], [4, 3], 1),
  indepQ([[1, 0, 1, 0], [0, 1, 0, 1], [1, 1, 1, 1]]),
  tf("Any four vectors in ℝ³ are linearly dependent.", true, "At most 3 pivots for 4 columns."),
  num(S`How many vectors are in a basis of $\{(a+b,\ a-b,\ 2a): a,b\in\mathbb R\}$?`, 2, "a(1, 1, 2) + b(1, −1, 0): two independent vectors."),
  mc(S`Which vector can be added to $\{(1,0,0),(0,1,0)\}$ to give a basis of $\mathbb R^3$?`, S`$(1,1,1)$`, [S`$(1,1,0)$`, S`$(2,0,0)$`, S`$(0,0,0)$`], "It needs a nonzero third entry."),
  tf(S`$\{(0,0,0),(1,0,0),(0,1,0)\}$ is linearly independent.`, false, "It contains the zero vector."),
  indepQ([[1, -1], [-2, 2]]),
  coord([[1, -1, 0], [0, 1, -1]], [3, -1, -2], 1),
  tf("The vectors (1, 0, 1), (0, 1, 1), (1, 1, 2) in the figure lie in one plane, so they are dependent.", true, "(1, 1, 2) = (1, 0, 1) + (0, 1, 1).", F.v3([[[1, 0, 1], "(1, 0, 1)"], [[0, 1, 1], "(0, 1, 1)"], [[1, 1, 2], "(1, 1, 2)", "green"]], { plane: [[1, 0, 1], [0, 1, 1], 1.1] })),
  num(S`$A$ is $3\times5$ with rank 2. How many vectors are in a basis of the solution space of $A\vec x=\vec 0$?`, 3, "One per free variable: 5 − 2."),
];

export const E = easy;
export const M = medium;
