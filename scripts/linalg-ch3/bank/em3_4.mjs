// 3.4 Matrix–Vector Multiplication — 20 easy + 20 medium questions
import { S, F, M, mc, num, tf, fill, matVecQ } from "./gen3.mjs";

const easy = [
  matVecQ([[1, 2], [3, 4]], [1, 1], 0),
  matVecQ([[2, -1], [0, 5]], [3, 2], 1),
  matVecQ([[1, 0, 2], [-1, 3, 1]], [2, 1, -1], 0, F.row([[[[1, 0, 2], [-1, 3, 1]], { row: 0, label: "A" }], [[[2], [1], [-1]], { col: 0, label: "x" }]])),
  matVecQ([[4, 1, 0], [2, -2, 3]], [1, 0, 2], 1),
  mc(S`$A$ is $3\times4$. For $A\vec x$ to be defined, $\vec x$ must be in:`, S`$\mathbb R^4$`, [S`$\mathbb R^3$`, S`$\mathbb R^{12}$`, S`$\mathbb R^7$`], "x needs one entry per column of A."),
  mc(S`$A$ is $3\times4$ and $\vec x\in\mathbb R^4$. Then $A\vec x$ is in:`, S`$\mathbb R^3$`, [S`$\mathbb R^4$`, S`$\mathbb R^{1}$`, S`$\mathbb R^{12}$`], "Ax has one entry per row of A."),
  tf(S`$A\vec x$ is a linear combination of the columns of $A$.`, true, "Ax = x₁a₁ + … + xₙaₙ: the entries of x are the weights."),
  mc(S`$${M([[1, 4], [2, 5], [3, 6]])}${M([[2], [-1]])}=$`, S`$(-2,-1,0)$`, [S`$(2,-4)$`, S`$(6,9,12)$`, S`$(-2,1,0)$`], "2(1, 2, 3) − 1(4, 5, 6) = (2 − 4, 4 − 5, 6 − 6) = (−2, −1, 0)."),
  num(S`For any $2\times3$ matrix $A$, $A\vec e_2$ equals column ___ of $A$.`, 2, "Ae₂ = 0·a₁ + 1·a₂ + 0·a₃ = a₂."),
  tf(S`$A\vec 0=\vec 0$ for every matrix $A$.`, true, "Every weight is 0, so the combination of columns is 0."),
  num(S`$I_3\vec x=(4,-1,7)$. Find $x_3$.`, 7, "I₃x = x for every x."),
  fill(S`The entries of $\vec x$ in $A\vec x=x_1\vec a_1+\dots+x_n\vec a_n$ are called the ___ of the columns.`, ["weights", "coefficients", "weight", "coefficient"], "Ax is a linear combination of the columns with weights x₁, …, xₙ."),
  matVecQ([[3, -2], [1, 1], [0, 4]], [2, 5], 2),
  tf(S`$${M([[1, 2, 3]])}${M([[1], [1], [1]])}=6$.`, true, "1 + 2 + 3 = 6: a 1 × 3 matrix times a vector in ℝ³ gives a single number."),
  matVecQ([[5, 0], [0, 5]], [-2, 3], 0),
  mc(S`Which product is NOT defined?`, S`$${M([[1, 2], [3, 4]])}${M([[1], [2], [3]])}$`, [S`$${M([[1, 2, 3]])}${M([[1], [2], [3]])}$`, S`$${M([[1], [2]])}${M([[3]])}$`, S`$${M([[1, 2], [3, 4], [5, 6]])}${M([[1], [2]])}$`], "A 2 × 2 matrix needs a vector in ℝ², not ℝ³."),
  num(S`For $A=${M([[2, 7], [-1, 3]])}$, $A\vec e_1$ has second entry:`, -1, "Ae₁ is the first column (2, −1)."),
  tf(S`$A(\vec u+\vec v)=A\vec u+A\vec v$.`, true, "The matrix-vector product is linear."),
  tf(S`$A(3\vec x)=3A\vec x$.`, true, "Scaling the weights scales the combination."),
  matVecQ([[1, 1, 1], [1, -1, 0]], [3, 2, -4], 0, F.row([[[[1, 1, 1], [1, -1, 0]], { label: "A" }], [[[3], [2], [-4]], { label: "x" }]])),
];

const medium = [
  matVecQ([[2, -1, 3], [0, 4, -2], [1, 1, 1]], [1, -2, 3], 1, F.row([[[[2, -1, 3], [0, 4, -2], [1, 1, 1]], { row: 1, label: "A" }], [[[1], [-2], [3]], { col: 0, label: "x" }]])),
  matVecQ([[1, 3, 0, -1], [2, 0, 5, 1]], [2, -1, 1, 4], 1),
  matVecQ([[-2, 4], [3, -5], [1, 6]], [3, 2], 1),
  num(S`Find $k$ so that $${M([[1, "k"], [2, 3]])}${M([[2], [1]])}=${M([[8], [7]])}$.`, 6, "Row 1: 1·2 + k·1 = 8 gives k = 6 (row 2: 4 + 3 = 7 checks)."),
  num(S`$A\vec u=(3,1)$ and $A\vec v=(-1,4)$. Find the second entry of $A(2\vec u-\vec v)$.`, -2, "Linearity: 2Au − Av = 2(3, 1) − (−1, 4) = (7, −2)."),
  num(S`$A$ is $2\times2$ with $A\vec e_1=(2,5)$ and $A\vec e_2=(-1,3)$. Find the first entry of $A(4,1)$.`, 7, "A(4, 1) = 4Ae₁ + Ae₂ = (8 − 1, 20 + 3) = (7, 23)."),
  mc(S`$A\vec e_1=(1,2)$, $A\vec e_2=(0,-1)$, $A\vec e_3=(3,0)$. Then $A=$`, S`$${M([[1, 0, 3], [2, -1, 0]])}$`, [S`$${M([[1, 2], [0, -1], [3, 0]])}$`, S`$${M([[3, 0, 1], [0, -1, 2]])}$`, S`$${M([[1, 2, 0], [-1, 3, 0]])}$`], "Column j of A is Aeⱼ."),
  num(S`Write $(5,1,3)$ as $A\vec x$ with $A=${M([[1, 2], [1, 0], [1, 1]])}$. Find $x_2$.`, 2, "x₁(1, 1, 1) + x₂(2, 0, 1) = (5, 1, 3): row 2 gives x₁ = 1, row 1 gives 1 + 2x₂ = 5, x₂ = 2; row 3: 1 + 2 = 3 ✓."),
  tf(S`$${M([[1, 2], [2, 4]])}\vec x=(1,3)$ has a solution.`, false, "Both columns are multiples of (1, 2), so Ax is always a multiple of (1, 2); (1, 3) is not."),
  matVecQ([[0, 1], [1, 0]], [7, -3], 0, F.mat([[0, 1], [1, 0]], { label: "swap" })),
  mc(S`What does $${M([[0, 1], [1, 0]])}$ do to every vector $(x,y)$?`, S`swaps the entries: $(y,x)$`, [S`negates it: $(-x,-y)$`, S`doubles it`, S`sends it to $(x,0)$`], "Row 1 picks y, row 2 picks x."),
  num(S`$A$ is $3\times3$ with every row equal to $(1,2,3)$. Find the sum of the entries of $A(1,1,1)$.`, 18, "Each entry is 1 + 2 + 3 = 6, three times: 18."),
  tf(S`If $A\vec x=A\vec y$, then $\vec x=\vec y$.`, false, S`$A=0$ gives $A\vec x=A\vec y$ for all $\vec x,\vec y$.`),
  num(S`For $A=${M([[1, -1], [2, 1]])}$, find $\vec x$ with $A\vec x=(0,6)$; give $x_1$.`, 2, "Row 1: x₁ = x₂; row 2: 2x₁ + x₂ = 6 → 3x₁ = 6 → x₁ = 2."),
  matVecQ([[3, 1, -2, 0], [1, 0, 4, -3], [-2, 5, 1, 1]], [1, 2, 0, -1], 2),
  num(S`The rotation matrix $R=${M([[0, -1], [1, 0]])}$ is applied to $(3,1)$. Find the first entry of the result.`, -1, "R(3, 1) = (0·3 − 1·1, 1·3 + 0·1) = (−1, 3): a 90° counterclockwise turn."),
  mc(S`Which vector is $A\vec x$ for $A=${M([[2, 0], [0, -1]])}$ and $\vec x=(a,b)$?`, S`$(2a,-b)$`, [S`$(2b,-a)$`, S`$(2a,b)$`, S`$(a-b,2a)$`], "A diagonal matrix scales each entry separately."),
  tf(S`For a $3\times2$ matrix $A$, $A\vec x=\vec b$ can have a solution for every $\vec b\in\mathbb R^3$.`, false, "Two columns span at most a plane in ℝ³, so some b are not combinations."),
  num(S`The columns of $A$ are $\vec a_1=(1,0,2)$, $\vec a_2=(-1,3,1)$. Find the third entry of $A(3,-2)$.`, 4, "3(1, 0, 2) − 2(−1, 3, 1) = (5, −6, 4)."),
  matVecQ([[1, 2, 3], [4, 5, 6], [7, 8, 9]], [1, -2, 1], 2),
];

export const E = easy;
export { medium as M };
