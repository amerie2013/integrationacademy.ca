// 4.7 Coordinates with Respect to a Basis — 20 hard questions
import { S, F, mc, num, tf, ms, coordQ, rebuildQ } from "./gen4.mjs";

export const TOPIC = "4.7 Coordinates with Respect to a Basis";
export const Q = [
  coordQ([[1, 1, 0, 0], [0, 1, 1, 0], [0, 0, 1, 1], [0, 0, 0, 1]], [1, 3, 5, 7], 3),
  coordQ([[1, 2, 1], [2, 1, 1], [1, 1, 2]], [4, 4, 4], 0, F.v3([[[1, 2, 1], "b₁"], [[2, 1, 1], "b₂"], [[1, 1, 2], "b₃"]])),
  coordQ([[1, 0, 2], [2, 1, 0], [0, 3, 1]], [3, 4, 5], 2),
  coordQ([[3, 2], [5, 3]], [1, 1], 1),
  rebuildQ([[1, 1, 1, 1], [1, -1, 1, -1], [1, 1, -1, -1], [1, -1, -1, 1]], [1, 2, 3, 4], 3),
  num(S`$\mathcal B=\{(1,1),(1,-1)\}$, $\mathcal C=\{(2,1),(1,1)\}$. If $[\vec x]_{\mathcal B}=(3,1)$, find the first coordinate of $[\vec x]_{\mathcal C}$.`, 2, "x = 3(1, 1) + (1, −1) = (4, 2). In C: 2c₁ + c₂ = 4, c₁ + c₂ = 2: c₁ = 2, c₂ = 0."),
  num(S`Find $k$ so that $[(k,5)]_{\mathcal B}=(2,1)$ for $\mathcal B=\{(1,2),(3,1)\}$.`, 5, "2(1, 2) + (3, 1) = (5, 5).", F.v2([[[1, 2], "b₁", "blue"], [[3, 1], "b₂", "red"], [[5, 5], "x", "green"]], { xmin: -1, xmax: 6, ymin: -1, ymax: 6 })),
  tf(S`The map $\vec x\mapsto[\vec x]_{\mathcal B}$ sends a basis $\mathcal B$ to the standard basis.`, true, "[bᵢ]_B = eᵢ."),
  tf(S`If $\{\vec x,\vec y\}$ is independent, then $\{[\vec x]_{\mathcal B},[\vec y]_{\mathcal B}\}$ is independent.`, true, "a[x] + b[y] = [ax + by] = 0 forces ax + by = 0, hence a = b = 0."),
  ms(S`Which hold for every basis $\mathcal B$ of $\mathbb R^n$?`, [S`$[\vec x+\vec y]_{\mathcal B}=[\vec x]_{\mathcal B}+[\vec y]_{\mathcal B}$`, S`$[\vec x]_{\mathcal B}=\vec x$`, S`$\vec x=P_{\mathcal B}[\vec x]_{\mathcal B}$`, S`$[\vec b_2]_{\mathcal B}=\vec e_2$`, S`$\|[\vec x]_{\mathcal B}\|=\|\vec x\|$`], [0, 2, 3], "[x]_B equals x only for the standard basis; lengths change in general."),
  num(S`$\mathcal B=\{(1,0,0),(1,1,0),(1,1,1)\}$. Find the second coordinate of $(a,b,c)=(4,6,2)$.`, 4, "c₃ = 2, c₂ + c₃ = 6 ⇒ c₂ = 4, c₁ + c₂ + c₃ = 4 ⇒ c₁ = −2."),
  mc(S`$[\vec x]_{\mathcal B}=(1,2)$ and $[\vec x]_{\mathcal C}=(2,1)$ for $\mathcal B=\{(1,0),(0,1)\}$. Then $\mathcal C$ could be:`, S`$\{(0,1),(1,0)\}$`, [S`$\{(1,0),(0,1)\}$`, S`$\{(1,1),(0,1)\}$`, S`$\{(2,0),(0,2)\}$`], "x = (1, 2); in {(0, 1), (1, 0)}: 2(0, 1) + 1(1, 0) = (1, 2) ✓."),
  num(S`A basis $\mathcal B$ of $\mathbb R^2$ has $[(1,0)]_{\mathcal B}=(1,0)$ and $[(0,1)]_{\mathcal B}=(1,1)$. Find the second entry of $\vec b_2$.`, 1, "(1, 0) = b₁; (0, 1) = b₁ + b₂, so b₂ = (0, 1) − (1, 0) = (−1, 1)."),
  tf(S`For the dependent set $\{(1,0),(0,1),(1,1)\}$, the vector $(2,3)$ has exactly one list of weights.`, false, "(2, 3) = 2(1, 0) + 3(0, 1) = 1(1, 0) + 2(0, 1) + 1(1, 1): coordinates need a basis."),
  rebuildQ([[2, 1], [1, 3]], [0.5, -0.5], 1, F.v2([[[2, 1], "b₁", "blue"], [[1, 3], "b₂", "red"]], { xmin: -1, xmax: 3, ymin: -2, ymax: 4 })),
  num(S`$\mathcal B=\{\vec b_1,\vec b_2,\vec b_3\}$. Find the third coordinate of $\vec b_1+2\vec b_2-\vec b_3$ in the basis $\mathcal C=\{\vec b_3,\vec b_2,\vec b_1\}$.`, 1, "Reorder: −b₃ + 2b₂ + 1b₁, so [·]_C = (−1, 2, 1)."),
  coordQ([[1, -1], [1, 1]], [3, 7], 1),
  tf(S`If $[\vec x]_{\mathcal B}=(c_1,c_2)$, then $[\vec x]_{\mathcal B'}=(2c_1,c_2)$ for $\mathcal B'=\{\tfrac12\vec b_1,\vec b_2\}$.`, true, "c₁b₁ = (2c₁)(½b₁)."),
  num(S`For which $t$ is $[(t,2)]_{\mathcal B}=(1,2)$ for $\mathcal B=\{(1,0),(1,1)\}$?`, 3, "(t, 2) = 1(1, 0) + 2(1, 1) = (3, 2), so t = 3.", F.v2([[[1, 0], "b₁", "blue"], [[1, 1], "b₂", "red"], [[3, 2], "(t, 2)", "green"]], { xmin: -1, xmax: 4, ymin: -1, ymax: 3 })),
  mc(S`$P_{\mathcal B}$ has the basis vectors as columns. Which statement is true?`, S`$P_{\mathcal B}$ has $n$ pivots`, [S`$P_{\mathcal B}$ is symmetric`, S`$P_{\mathcal B}=I$`, S`$P_{\mathcal B}$ has a zero row`], "Basis ⇔ n pivots."),
];
