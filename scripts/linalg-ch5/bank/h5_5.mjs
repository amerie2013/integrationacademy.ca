// 5.5 Orthogonal and Orthonormal Bases — 20 hard questions
import { S, F, mc, num, tf, ms, orthoQ, orthoCoordQ } from "./gen5.mjs";

export const TOPIC = "5.5 Orthogonal and Orthonormal Bases";
export const Q = [
  num(S`For which $k$ are $(1,k,1)$ and $(k,1,-3)$ orthogonal?`, 1.5, "k + k − 3 = 0.", undefined, 0.001),
  orthoCoordQ([[1, 1, 1, 1], [1, -1, 1, -1], [1, 1, -1, -1]], [6, 2, 0, -4], 2),
  tf("ℝ² has exactly one orthonormal basis.", false, "Rotating {e₁, e₂} by any angle gives another one."),
  num(S`$\vec x$ has coordinates $(2,-1,2)$ in an orthonormal basis. Find $\|\vec x\|$.`, 3, "√(4 + 1 + 4)."),
  mc(S`In an orthonormal basis, $\vec x$ has coordinates $(1,2)$ and $\vec y$ has $(3,-1)$. Then $\vec x\cdot\vec y=$`, "1", ["5", "−1", "0"], "x·y = Σ aᵢbᵢ = 3 − 2."),
  tf(S`If $\{\vec v_1,\dots,\vec v_k\}$ is orthogonal with nonzero vectors and $\vec x=\sum c_i\vec v_i$, then $c_i=\vec x\cdot\vec v_i/\|\vec v_i\|^2$.`, true, "Dot both sides with vᵢ."),
  orthoCoordQ([[1, 2], [2, -1]], [4, 7], 0, F.v2([[[1, 2], "v₁", "blue"], [[2, -1], "v₂", "red"], [[4, 7], "x", "green"]], { xmin: -1, xmax: 5, ymin: -2, ymax: 8 })),
  ms("Which sets are orthogonal?", [S`$\{(1,0),(0,1)\}$`, S`$\{(1,1),(1,-1)\}$`, S`$\{(1,2),(2,1)\}$`, S`$\{(0,0),(3,4)\}$`], [0, 1, 3], "Check the dot product of each pair; the zero vector is orthogonal to everything."),
  num(S`How many orthonormal bases does $\mathbb R^1$ have?`, 2, "A unit vector in ℝ¹ is 1 or −1."),
  orthoQ([[1, 2, 0, -1], [2, -1, 1, 0], [1, 0, -2, 1]]),
  tf(S`For $\vec v\ne\vec 0$, the vector $\vec x-\dfrac{\vec x\cdot\vec v}{\|\vec v\|^2}\vec v$ is orthogonal to $\vec v$ (figure).`, true, "Its dot product with v is x·v − (x·v/‖v‖²)‖v‖² = 0.", F.v2([[[3, 1], "v", "blue"], [[2, 3], "x", "green"], [[2.7, 0.9], "projection", "amber", null, true]], { xmin: -1, xmax: 4, ymin: -1, ymax: 4 })),
  num(S`For which $a$ is $\{(1,1,1),(1,-2,1),(a,0,1)\}$ orthogonal?`, -1, "(1, 1, 1)·(a, 0, 1) = a + 1 = 0; then (1, −2, 1)·(−1, 0, 1) = 0 too."),
  mc(S`An orthonormal basis of the plane $x_1=x_2$ in $\mathbb R^3$ is:`, S`$\{\tfrac1{\sqrt2}(1,1,0),\ (0,0,1)\}$`, [S`$\{(1,1,0),(0,0,1)\}$`, S`$\{\tfrac1{\sqrt2}(1,-1,0),(0,0,1)\}$`, S`$\{\tfrac1{\sqrt3}(1,1,1)\}$`], "Both vectors lie in the plane, are orthogonal and have length 1."),
  tf("An orthogonal set in ℝ³ may contain four vectors if one of them is the zero vector.", true, "0 is orthogonal to everything; three nonzero mutually orthogonal vectors plus 0."),
  orthoCoordQ([[2, 1, -1], [1, 0, 2]], [1, 1, -3], 1, F.plane([2, 1, -1], [1, 0, 2], { lu: "v₁", lv: "v₂", more: [[[1, 1, -3], "x", "green"]], len: 3.5 })),
  num(S`For which positive $c$ is $c(2,-2,1)$ a unit vector?`, 0.3333, "‖(2, −2, 1)‖ = 3, so c = 1/3.", undefined, 0.001),
  tf("An orthonormal set of n vectors in ℝⁿ is a basis of ℝⁿ.", true, "Orthonormal vectors are nonzero and orthogonal, hence independent; n of them in dimension n."),
  mc(S`If $\{\vec w_1,\vec w_2\}$ is orthonormal, $\|3\vec w_1-4\vec w_2\|=$`, "5", ["7", "1", "−1"], "√(3² + 4²)."),
  orthoCoordQ([[1, 1, 0], [1, -1, 0], [0, 0, 1]], [3, 1, 5], 1, F.v3([[[1, 1, 0], "v₁"], [[1, -1, 0], "v₂"], [[0, 0, 1], "v₃"], [[3, 1, 5], "x", "green"]])),
  tf(S`$\tfrac13(1,2,2)$ is a unit vector.`, true, "‖(1, 2, 2)‖ = 3."),
];
