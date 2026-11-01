// 9.3 Orthogonal Projection onto a Subspace — 20 hard questions
import { S, F, M, col, mc, num, tf, ms, projOrthQ, distQ, projLineQ } from "./gen9.mjs";

export const TOPIC = "9.3 Orthogonal Projection onto a Subspace";
export const Q = [
  projOrthQ([[1, 1, 1], [1, -1, 1], [1, 1, -1], [1, -1, -1]], [4, 2, 0, 2], 0, F.mat([[1, 1, 1], [1, -1, 1], [1, 1, -1], [1, -1, -1]], { label: "U (orthogonal columns)" })),
  projOrthQ([[1, 1, 1], [1, -1, 1], [1, 1, -1], [1, -1, -1]], [4, 2, 0, 2], 3),
  distQ([[1, 1, 1], [1, -1, 1], [1, 1, -1], [1, -1, -1]], [4, 2, 0, 2]),
  projOrthQ([[1, -1], [1, 1], [1, 0], [0, 1]], [3, 1, 2, 0], 2),
  distQ([[1, -1], [1, 1], [1, 0], [0, 1]], [3, 1, 2, 0]),
  projOrthQ([[2, -1], [1, 2], [0, 0]], [3, 4, 5], 0, F.v3([[[2, 1, 0], "u₁", "blue"], [[-1, 2, 0], "u₂", "red"], [[3, 4, 5], "y", "green"]])),
  num(S`The closest point of the plane $\operatorname{span}\{(1,1,0),(1,-1,2)\}$ to $(0,0,6)$ has third entry: (Decimal.)`, 4, "c₂ = 12/6 = 2; ŷ = 2(1,−1,2) + 0."),
  num(S`Distance from $(1,1,1)$ to the line $\operatorname{span}\{(1,2,2)\}$. (3 decimals)`, 0.4714, S`$\hat y=\tfrac59(1,2,2)$; $\vec z=(\tfrac49,-\tfrac19,-\tfrac19)$; $|\vec z|=\tfrac{\sqrt{18}}9$.`, undefined, 0.001),
  ms("Which are true for ŷ = proj_W y?", ["y − ŷ ⟂ W", "|ŷ| ≤ |y|", "ŷ ⟂ y always", "ŷ ∈ W"], [0, 1, 3], "ŷ and y are usually not perpendicular."),
  tf(S`$\operatorname{proj}_W(\vec y_1+\vec y_2)=\operatorname{proj}_W\vec y_1+\operatorname{proj}_W\vec y_2$.`, true, "Projection is linear (a matrix P)."),
  num(S`$|\vec y|=10$ and its distance to $W$ is 6. Find $|\hat y|$.`, 8, "√(100 − 36)."),
  num(S`$W$ is spanned by orthonormal $\vec u_1,\vec u_2$ in $\mathbb R^4$; $\vec y\cdot\vec u_1=3$, $\vec y\cdot\vec u_2=4$, $|\vec y|^2=50$. Find the distance from $\vec y$ to $W$.`, 5, "|ŷ|² = 9 + 16; 50 − 25.", F.mat([["3"], ["4"]], { label: "Uᵀy" })),
  mc("If W = ℝⁿ, then proj_W y =", "y", ["0", "−y", "depends on y"], "Every vector is in W."),
  num(S`Using $(1,1,0)$ and $(1,0,1)$ directly in the projection formula for $\vec y=(3,1,4)$ gives first entry: (Decimal.)`, 5.5, "2(1,1,0) + 3.5(1,0,1) — wrong, since the basis is not orthogonal.", undefined, 0.001),
  num(S`The correct projection of $(3,1,4)$ onto $\operatorname{span}\{(1,1,0),(1,0,1)\}$ has first entry: (3 decimals)`, 3.6667, "Use the orthogonal basis (1,1,0), (1,−1,2): 11/3.", undefined, 0.001),
  projLineQ([1, 2, 3, 4], [4, 3, 2, 1], 3),
  tf(S`$\vec y-\operatorname{proj}_W\vec y=\operatorname{proj}_{W^\perp}\vec y$.`, true, "That is z."),
  num(S`$W=\operatorname{span}\{(1,1,1,1)\}$. Distance from $(1,2,3,4)$ to $W$. (3 decimals)`, 2.2361, "ŷ = 2.5(1,1,1,1); z = (−1.5,−0.5,0.5,1.5); |z| = √5.", F.v2([[[1, 1], "", "blue"]], { xmin: -1, xmax: 2, ymin: -1, ymax: 2 }), 0.001),
  num(S`$P=UU^T$ projects $\mathbb R^3$ onto a plane. Find $\det P$.`, 0, "Eigenvalue 0 on the normal."),
  distQ([[2, -1], [1, 2], [0, 0]], [3, 4, 5]),
];
