// 4.7 Coordinates with Respect to a Basis — 20 easy + 20 medium questions
import { S, F, mc, num, tf, fill, coordQ, rebuildQ } from "./gen4.mjs";

const easy = [
  coordQ([[1, 0], [0, 1]], [6, -2], 1),
  coordQ([[2, 0], [0, 5]], [8, 15], 1),
  coordQ([[1, 1], [0, 1]], [3, 7], 1),
  rebuildQ([[1, 0], [1, 1]], [2, 3], 0),
  rebuildQ([[1, 2], [0, 1]], [4, -1], 1),
  tf(S`For a basis $\mathcal B$, $[\vec b_1]_{\mathcal B}=\vec e_1$.`, true, "b₁ = 1b₁ + 0b₂ + …"),
  tf(S`$[\vec 0]_{\mathcal B}=\vec 0$ for every basis.`, true, "All weights 0."),
  fill("The unique weights that build x from a basis are called the ___ of x in that basis.", ["coordinates"], "They form the coordinate vector [x]_B."),
  mc(S`In the standard basis of $\mathbb R^3$, $[(5,0,-1)]=$`, S`$(5,0,-1)$`, [S`$(-1,0,5)$`, S`$(1,0,-5)$`, S`$(5,-1,0)$`], "Standard coordinates are the entries."),
  tf("Coordinates in a basis are unique.", true, "Independence rules out two representations."),
  mc(S`$[\vec x]_{\mathcal B}=(2,-3)$ for $\mathcal B=\{\vec b_1,\vec b_2\}$. Then $\vec x=$`, S`$2\vec b_1-3\vec b_2$`, [S`$-3\vec b_1+2\vec b_2$`, S`$(2,-3)$ always`, S`$2\vec b_2-3\vec b_1$`], "Coordinates are the weights in order."),
  tf(S`Swapping the order of a basis swaps the coordinates.`, true, "The weights follow their vectors."),
  num(S`$[\vec u]_{\mathcal B}=(1,4)$. Find the second coordinate of $3\vec u$.`, 12, "Coordinates scale: 3(1, 4) = (3, 12)."),
  num(S`$[\vec u]_{\mathcal B}=(1,4)$, $[\vec v]_{\mathcal B}=(2,-1)$. First coordinate of $\vec u+\vec v$?`, 3, "Coordinates add."),
  coordQ([[1, 1], [1, -1]], [6, 2], 0, F.v2([[[1, 1], "b₁", "blue"], [[1, -1], "b₂", "red"], [[6, 2], "x", "green"]], { xmin: -1, xmax: 7, ymin: -2, ymax: 3 })),
  mc("To find [x]_B, solve:", S`$P_{\mathcal B}\vec c=\vec x$`, [S`$\vec c=P_{\mathcal B}\vec x$`, S`$\vec x^TP_{\mathcal B}$`, S`$P_{\mathcal B}\vec x=\vec c$`], "x = P_B[x]_B; the coordinates are the unknowns."),
  rebuildQ([[2, 1, 0], [0, 1, 1], [1, 0, 1]], [1, 1, 1], 2),
  tf("Coordinates can be defined with respect to any spanning set.", false, "Only for a basis; a dependent set gives many representations."),
  coordQ([[3, 0], [1, 1]], [7, 1], 0),
  rebuildQ([[1, -1], [2, 1]], [3, 2], 0, F.v2([[[1, -1], "b₁", "blue"], [[2, 1], "b₂", "red"]], { xmin: -1, xmax: 8, ymin: -2, ymax: 2 })),
];

const medium = [
  coordQ([[2, 1], [1, 2]], [4, 5], 1),
  coordQ([[1, 3], [2, 5]], [1, 1], 0),
  coordQ([[1, 0, 1], [1, 1, 0], [0, 1, 1]], [2, 3, 1], 2),
  coordQ([[1, 2, 0], [0, 1, 2], [1, 0, 1]], [3, 4, 5], 1),
  coordQ([[1, 1, 1], [1, 1, 0], [1, 0, 0]], [5, 3, 2], 0, F.v3([[[1, 1, 1], "b₁"], [[1, 1, 0], "b₂"], [[1, 0, 0], "b₃"]], { len: 1.7 })),
  rebuildQ([[1, 0, 2], [0, 1, -1], [1, 1, 1]], [2, -1, 3], 2),
  rebuildQ([[1, 2, 1], [1, 0, -1], [0, 1, 1]], [1, 1, -2], 1),
  num(S`$\mathcal B=\{(1,2),(3,4)\}$. If $[\vec x]_{\mathcal B}=(1,1)$, find $[\vec x]_{\mathcal E}$'s first entry (standard coordinates).`, 4, "x = (1, 2) + (3, 4) = (4, 6)."),
  num(S`$\mathcal B=\{(1,0),(1,1)\}$, $\mathcal C=\{(1,1),(0,1)\}$, $[\vec x]_{\mathcal B}=(2,3)$. Find the second coordinate of $[\vec x]_{\mathcal C}$.`, -2, "x = 2(1, 0) + 3(1, 1) = (5, 3); in C: c₁ = 5 and c₁ + c₂ = 3, so c₂ = −2."),
  mc(S`$[\vec x]_{\mathcal B}=(1,0,2)$ and $[\vec y]_{\mathcal B}=(0,3,1)$. $[2\vec x-\vec y]_{\mathcal B}=$`, S`$(2,-3,3)$`, [S`$(2,3,5)$`, S`$(1,-3,1)$`, S`$(2,-3,5)$`], "2(1, 0, 2) − (0, 3, 1)."),
  tf(S`If $[\vec x]_{\mathcal B}=[\vec y]_{\mathcal B}$ then $\vec x=\vec y$.`, true, "Both equal P_B times the same coordinates."),
  num(S`$\mathcal B=\{(1,1),(2,-1)\}$. Find the first coordinate of $[(0,3)]_{\mathcal B}$.`, 2, "c₁ + 2c₂ = 0, c₁ − c₂ = 3: c₂ = −1, c₁ = 2.", F.v2([[[1, 1], "b₁", "blue"], [[2, -1], "b₂", "red"], [[0, 3], "x", "green"]], { xmin: -1, xmax: 3, ymin: -2, ymax: 4 })),
  tf(S`The coordinates of a vector are the same in every basis.`, false, "They depend on the basis."),
  num(S`$\vec b_1=(2,0)$. Find the second entry of $\vec b_2$ so that $[(5,3)]_{\mathcal B}=(1,1)$.`, 3, "b₂ = (5, 3) − (2, 0) = (3, 3)."),
  coordQ([[1, -1, 0], [0, 1, -1], [0, 0, 1]], [2, 1, 4], 2),
  mc(S`$P_{\mathcal B}=\begin{bmatrix}1&1\\0&2\end{bmatrix}$ and $[\vec x]_{\mathcal B}=(3,1)$. Then $\vec x=$`, S`$(4,2)$`, [S`$(3,2)$`, S`$(4,1)$`, S`$(1,3)$`], "P_B(3, 1) = (3 + 1, 0 + 2)."),
  num(S`$\mathcal B=\{(1,2),(2,3)\}$. Find $c_2$ in $[(1,0)]_{\mathcal B}=(c_1,c_2)$.`, 2, "c₁ + 2c₂ = 1, 2c₁ + 3c₂ = 0: c₁ = 1 − 2c₂, 2 − 4c₂ + 3c₂ = 0, c₂ = 2."),
  tf(S`In $\mathcal B=\{\vec b_1,\vec b_2\}$, the vector $\vec b_1+\vec b_2$ has coordinates $(1,1)$.`, true, "Weights 1 and 1."),
  rebuildQ([[3, 1], [1, 2]], [-1, 2], 1),
  coordQ([[2, 0, 0], [0, 4, 0], [0, 0, -1]], [6, 2, 5], 1),
];

export const E = easy;
export { medium as M };
