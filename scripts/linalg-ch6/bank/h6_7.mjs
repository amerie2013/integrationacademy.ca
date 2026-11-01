// 6.7 Cramer's Rule, the Adjugate and Volume — 20 hard questions
import { S, F, M, Dt, mc, num, tf, ms, cramerQ, volumeQ } from "./gen6.mjs";

export const TOPIC = "6.7 Cramer's Rule, the Adjugate and Volume";
export const Q = [
  cramerQ([[2, -1, 1], [1, 3, -2], [3, 1, 1]], [1, 4, 6], 1),
  cramerQ([[1, 2, 1], [2, 1, 0], [1, 0, 3]], [4, 3, 4], 2, F.mat([[1, 2, 1], [2, 1, 0], [1, 0, 3]], { label: "A" })),
  cramerQ([[4, 1, 0], [1, 4, 1], [0, 1, 4]], [5, 6, 5], 0),
  volumeQ([[2, 1, 3], [1, 0, 2], [3, 4, 1]]),
  volumeQ([[1, 2, 0], [2, 1, 1], [0, 1, 3]], F.v3([[[1, 2, 0], "a₁"], [[2, 1, 1], "a₂"], [[0, 1, 3], "a₃"]])),
  num(S`For which $k$ is the box on $(1,1,0)$, $(0,1,1)$, $(1,0,k)$ flat (volume 0)?`, -1, "det[[1, 0, 1], [1, 1, 0], [0, 1, k]] = 1(k − 0) − 0 + 1(1 − 0) = k + 1."),
  num(S`Using Cramer's rule, find $x_2$ in terms of $k$ for $${M([["k", 1], [1, "k"]])}\vec x=(1,0)$, evaluated at $k=3$.`, -0.125, "x₂ = det[[k, 1], [1, 0]]/(k² − 1) = −1/(k² − 1) = −1/8.", undefined, 0.001),
  num(S`$A$ is $4\times4$ with $\det A=2$. $\det(\operatorname{adj}A)=$?`, 8, "(det A)³."),
  num(S`$A$ is $3\times3$, $\det(\operatorname{adj}A)=16$, $\det A\gt0$. $\det A=$?`, 4, "(det A)² = 16."),
  tf(S`$\operatorname{adj}(AB)=\operatorname{adj}B\,\operatorname{adj}A$ for invertible $A,B$.`, true, "adj X = det X·X⁻¹; the reverse order comes from (AB)⁻¹ = B⁻¹A⁻¹."),
  ms("Which give the area of the triangle with vertices P, Q, R?", [S`$\tfrac12|\det[\,Q-P\ \ R-P\,]|$`, S`$|\det[\,Q-P\ \ R-P\,]|$`, S`$\tfrac12|\det[\,P-R\ \ Q-R\,]|$`, S`$\det[\,P\ Q\,]$`], [0, 2], "Half the parallelogram on two edge vectors from a common vertex."),
  num(S`The triangle with vertices $(0,0)$, $(3,1)$, $(1,t)$ has area 4. Find $t\gt0$.`, 3, "½|3t − 1| = 4 gives 3t − 1 = 8.", F.v2([[[3, 1], "", "blue"], [[1, 3], "", "red"]], { xmin: -1, xmax: 4, ymin: -1, ymax: 4 }, { segs: [{ pts: [[3, 1], [1, 3]], color: "#94a3b8", w: 1.5 }] })),
  num(S`For $A=${M([[2, 1, 0], [1, 2, 1], [0, 1, 2]])}$, find the $(2,2)$ entry of $A^{-1}$ using the adjugate.`, 1, "det A = 4; C₂₂ = det[[2, 0], [0, 2]] = 4; entry 4/4.", F.mat([[2, 1, 0], [1, 2, 1], [0, 1, 2]], { cells: [[1, 1]], label: "A" })),
  num(S`For the same $A$, find the $(1,3)$ entry of $A^{-1}$.`, 0.25, "adj entry (1, 3) is C₃₁ = det[[1, 0], [2, 1]] = 1; divide by det A = 4.", undefined, 0.001),
  tf(S`If $A\vec x=\vec b$ has integer $A$, $\vec b$ and $\det A=\pm1$, the solution has integer entries.`, true, "Cramer: each xᵢ is an integer determinant divided by ±1."),
  mc(S`A linear map with $\det=-2$ sends a cube of volume 5 to a region of volume:`, "10", ["−10", "5", "2.5"], "|det|·volume."),
  num(S`The tetrahedron with vertices $0$, $(1,0,0)$, $(0,2,0)$, $(0,0,3)$ has volume $\tfrac16|\det|$. Find it.`, 1, "det diag(1, 2, 3) = 6; 6/6 = 1."),
  cramerQ([[1, -1, 2], [3, 1, 0], [0, 2, 1]], [3, 1, 5], 0),
  num(S`For which $a$ is Cramer's rule unusable for $${M([["a", 1, 0], [1, "a", 1], [0, 1, "a"]])}$, $a\gt0$? (3 decimals)`, 1.414, "det = a(a² − 1) − a = a³ − 2a: zero for a = √2.", undefined, 0.001),
  tf("The adjugate of a singular matrix is always the zero matrix.", false, S`$A=${M([[1, 0], [0, 0]])}$: $\operatorname{adj}A=${M([[0, 0], [0, 1]])}\ne0$.`),
];
