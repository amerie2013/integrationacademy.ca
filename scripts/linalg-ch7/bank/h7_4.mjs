// 7.4 Geometric Transformations of the Plane — 20 hard questions
import { S, F, M, col, mc, num, tf, ms, rotQ, projQ, reflQ } from "./gen7.mjs";

export const TOPIC = "7.4 Geometric Transformations of the Plane";
export const Q = [
  reflQ(-2, [5, 0], 0, F.v2([[[5, 0], "x", "blue"]], { xmin: -2, xmax: 6, ymin: -4, ymax: 4 }, { segs: [{ pts: [[-2, 4], [2, -4]], color: "green", w: 2.4 }] })),
  reflQ(-2, [5, 0], 1),
  reflQ(3, [0, 10], 0),
  projQ(-3, [10, 0], 1),
  projQ(4, [17, 0], 0, F.v2([[[17, 0], "x", "blue"]], { xmin: -1, xmax: 18, ymin: -1, ymax: 18 }, { segs: [{ pts: [[0, 0], [4.5, 18]], color: "green", w: 2.4 }] })),
  rotQ(150, [2, 0], 0),
  rotQ(135, [0, 2], 1),
  num(S`Describe $A=\tfrac1{25}${M([[7, 24], [24, -7]])}$: it is the reflection in $x_2=mx_1$. Find $m$. (Decimal.)`, 0.75, S`$A^2=I$, $A=A^T$. Fixed vector: $(A-I)\vec x=\vec 0$ gives $-18x_1+24x_2=0$, so $x_2=\tfrac34x_1$.`, F.mat([[7, 24], [24, -7]], { label: "25A" }), 0.001),
  num(S`$A=${M([["0.6", "-0.8"], ["0.8", "0.6"]])}$ is $R_\theta$. Find $\tan\theta$. (Decimal.)`, 1.3333, S`$\cos\theta=0.6$, $\sin\theta=0.8$.`, F.sq([[0.6, -0.8], [0.8, 0.6]]), 0.001),
  num(S`$P$ is the projection onto $x_2=x_1$. Find $\det(P+I)$.`, 2, S`$P+I=${M([["\\tfrac32", "\\tfrac12"], ["\\tfrac12", "\\tfrac32"]])}$: $\tfrac94-\tfrac14$.`),
  num(S`For $F=${M([[1, 0], [0, -1]])}$, compute the $(1,2)$ entry of $R_{45^\circ}FR_{-45^\circ}$.`, 1, "It is the reflection in x₂ = x₁: [0 1; 1 0].", F.mat([[0, 1], [1, 0]], { label: "result" })),
  tf(S`Every $2\times2$ matrix with $A^TA=I$ is a rotation.`, false, "Reflections also satisfy AᵀA = I (det = −1)."),
  ms("Which matrices are reflections?", ["[0 1; 1 0]", "[1 0; 0 −1]", "[0 −1; 1 0]", "½[1 1; 1 1]"], [0, 1], "Reflections: A² = I, det −1. The third is a rotation, the last a projection."),
  num(S`$R=2P-I$ with $P=\tfrac1{10}${M([[1, 3], [3, 9]])}$. Find the $(1,1)$ entry of $R$. (Decimal.)`, -0.8, S`$\tfrac2{10}-1$.`, undefined, 0.001),
  num(S`A shear $${M([[1, "k"], [0, 1]])}$ sends $(1,1)$ to $(4,1)$. Find $k$.`, 3, "1 + k = 4.", F.sq([[1, 3], [0, 1]])),
  mc(S`$R_\theta$ has a nonzero fixed vector ($R\vec x=\vec x$) exactly when`, S`$\theta$ is a multiple of $360^\circ$`, [S`always`, S`$\theta=180^\circ$`, "never"], "Otherwise every nonzero vector turns."),
  num(S`Find the smallest $n\ge1$ with $R_{72^\circ}^n=I$.`, 5, "72n must be a multiple of 360."),
  num(S`Reflection in $x_1$-axis, then in $x_2=x_1$: this is $R_\theta$. Find $\theta$ in degrees.`, 90, S`$${M([[0, 1], [1, 0]])}${M([[1, 0], [0, -1]])}=${M([[0, -1], [1, 0]])}$.`),
  tf("Projection then reflection in the same line equals the projection.", true, "RP = (2P − I)P = 2P² − P = P."),
  num(S`The square with corners $(0,0),(2,0),(2,2),(0,2)$ under $\tfrac1{5}${M([[-3, 4], [4, 3]])}$ has area`, 4, "Reflections keep area: |det| = 1.", F.shape([[-0.6, 0.8], [0.8, 0.6]], [[0, 0], [2, 0], [2, 2], [0, 2]])),
];
