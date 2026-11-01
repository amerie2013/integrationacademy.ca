// 6.5 Determinants and Cofactor Expansion — 20 hard questions
import { S, F, M, Dt, mc, num, tf, ms, detQ, volumeQ, det } from "./gen6.mjs";

export const TOPIC = "6.5 Determinants and Cofactor Expansion";
export const Q = [
  detQ([[2, -1, 3], [4, 0, -2], [1, 5, 1]]),
  detQ([[3, 1, -2], [-1, 4, 2], [2, 2, 1]], F.mat([[3, 1, -2], [-1, 4, 2], [2, 2, 1]], { label: "A" })),
  num(S`Compute $\det${M([[2, 0, 1, 0], [1, 3, 0, 2], [0, 0, 4, 0], [1, 0, 0, 1]])}$.`, det([[2, 0, 1, 0], [1, 3, 0, 2], [0, 0, 4, 0], [1, 0, 0, 1]]), "Expand along row 3 (only 4, sign +): 4·det[[2, 0, 0], [1, 3, 2], [1, 0, 1]]; expand that along row 1: 2·(3·1 − 2·0) = 6. Total 24.", F.mat([[2, 0, 1, 0], [1, 3, 0, 2], [0, 0, 4, 0], [1, 0, 0, 1]], { row: 2, label: "row 3 has one nonzero entry" })),
  num(S`Compute $\det${M([[1, 2, 0, 0], [3, 4, 0, 0], [0, 0, 5, 6], [0, 0, 7, 8]])}$.`, 4, "Block diagonal: det[[1, 2], [3, 4]]·det[[5, 6], [7, 8]] = (−2)(−2)."),
  num(S`For which $x$ is $${Dt([[1, 1, 1], [1, "x", 1], [1, 1, "x^2"]])}=0$ with $x\lt0$?`, -1, "Along row 1: (x³ − 1) − (x² − 1) + (1 − x) = x³ − x² − x + 1 = (x − 1)²(x + 1)."),
  volumeQ([[1, 2, 3], [0, 1, 4], [5, 6, 0]]),
  num(S`The volume of the box on $(1,0,0)$, $(0,2,0)$, $(1,1,t)$ is 10. Find $t\gt0$.`, 5, "det = 1·2·t = 2t."),
  tf(S`$\det${M([["a", "b"], ["c", "d"]])}=\det${M([["a", "c"], ["b", "d"]])}$.`, true, "Both are ad − bc: det Aᵀ = det A."),
  ms("Which matrices have determinant 0?", [S`$${M([[1, 2], [2, 4]])}$`, S`$${M([[1, 2, 3], [4, 5, 6], [7, 8, 9]])}$`, S`$${M([[0, 1], [1, 0]])}$`, S`$${M([[1, 0, 0], [0, 0, 0], [0, 0, 1]])}$`], [0, 1, 3], "Dependent rows or a zero row."),
  num(S`For which $k$ is $${M([["k", 1, 1], [1, "k", 1], [0, 0, 1]])}$ singular, $k\lt0$?`, -1, "Expand along row 3: 1·(k² − 1)."),
  num(S`Find the area of the triangle with vertices $(1,2)$, $(4,3)$, $(2,6)$.`, 5.5, "Edges (3, 1), (1, 4): ½|12 − 1|.", F.v2([[[4, 3], "", "blue", [1, 2]], [[2, 6], "", "red", [1, 2]]], { xmin: 0, xmax: 5, ymin: 0, ymax: 7 }, { segs: [{ pts: [[4, 3], [2, 6]], color: "#94a3b8", w: 1.5 }] })),
  detQ([[1, 2, 0], [0, 1, 3], [2, 0, 1]]),
  num(S`$\det${M([[0, 0, 0, 2], [0, 0, 3, 0], [0, 1, 0, 0], [4, 0, 0, 0]])}=$?`, 24, "Expand along column 1 (only 4 at (4, 1), sign −): −4·det[[0, 0, 2], [0, 3, 0], [1, 0, 0]] = −4·(−6) = 24."),
  tf(S`For an $n\times n$ matrix, cofactor expansion along any row gives the same value.`, true, "The expansion theorem."),
  mc(S`$\det${M([[1, 2], [3, 4]])}$ equals the signed area of the parallelogram on:`, "its columns (1, 3) and (2, 4)", ["the points (1, 2) and (3, 4) only", "its diagonal", "its first row"], "|det| = area spanned by the columns (or the rows)."),
  num(S`For $A=${M([[2, 0, 1], [1, 3, 2], [1, 1, 1]])}$, compute $\det A$.`, 0, "Along row 1: 2(3 − 2) − 0 + 1(1 − 3) = 2 − 2."),
  num(S`Count the terms (before cancellation) in the full cofactor expansion of a $5\times5$ determinant.`, 120, "5! = 120 products."),
  tf("Expanding a 4 × 4 determinant needs four 3 × 3 determinants unless some entries are 0.", true, "One minor per entry of the chosen line."),
  volumeQ([[1, 1, 0], [1, 0, 1], [0, 1, 1]], F.v3([[[1, 1, 0], "a₁"], [[1, 0, 1], "a₂"], [[0, 1, 1], "a₃"]])),
  num(S`Find $x$ with $${Dt([[2, "x"], [3, "x+1"]])}=5$.`, -3, "2(x + 1) − 3x = 2 − x, and 2 − x = 5 gives x = −3."),
];
