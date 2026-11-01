// 5.3 Bases of a Subspace — 20 hard questions
import { S, F, mc, num, tf, ms, indepQ, coefQ } from "./gen5.mjs";

export const TOPIC = "5.3 Bases of a Subspace";
const coord = (basis, x, i, fig) => coefQ(basis, x, i, fig, S`$\{${basis.map((b) => `(${b.join(",")})`).join(",\\ ")}\}$ is a basis (in this order). Find coordinate ${i + 1} of $(${x.join(",")})$.`);

export const Q = [
  num(S`For which $k$ is $\{(1,1,1),(1,k,1),(1,1,k)\}$ not a basis of $\mathbb R^3$?`, 1, "Subtract the first vector: (0, k − 1, 0) and (0, 0, k − 1). Dependent exactly when k = 1."),
  coord([[1, 1, 1], [1, 1, 0], [1, 0, 0]], [4, 3, 1], 2),
  tf(S`If $\{\vec u,\vec v,\vec w\}$ is independent, so is $\{\vec u,\ \vec u+\vec v,\ \vec u+\vec v+\vec w\}$.`, true, "a u + b(u + v) + c(u + v + w) = (a + b + c)u + (b + c)v + cw = 0 forces c = 0, then b = 0, then a = 0."),
  tf(S`If $\{\vec u,\vec v\}$ is dependent and $\vec u\ne\vec 0$, then $\vec v$ is a multiple of $\vec u$.`, true, "au + bv = 0 with b = 0 would force a = 0; so b ≠ 0 and v = −(a/b)u."),
  mc(S`A basis of $\{\vec x\in\mathbb R^4: x_1+x_2+x_3+x_4=0\}$ has:`, "3 vectors", ["4 vectors", "1 vector", "2 vectors"], "One pivot, three free variables."),
  ms(S`Which sets are bases of $\mathbb R^2$?`, [S`$\{(1,2),(2,1)\}$`, S`$\{(1,0),(2,0)\}$`, S`$\{(0,1),(1,1)\}$`, S`$\{(1,1)\}$`], [0, 2], "Exactly two non-parallel vectors."),
  num(S`For which $h$ are $(1,0,1)$, $(0,1,1)$, $(1,2,h)$ dependent?`, 3, "(1, 2, h) must be (1, 0, 1) + 2(0, 1, 1) = (1, 2, 3)."),
  indepQ([[1, 2, 0], [0, 1, 2], [1, 4, 4]], F.v3([[[1, 2, 0], "(1, 2, 0)"], [[0, 1, 2], "(0, 1, 2)"], [[1, 4, 4], "(1, 4, 4)", "green"]], { plane: [[1, 2, 0], [0, 1, 2], 1] })),
  tf(S`The coordinates of $\vec x$ in the basis $\{\vec v_1,\vec v_2\}$ and in the basis $\{\vec v_2,\vec v_1\}$ are the same list.`, false, "The order of the basis vectors is the order of the coordinates: the list is reversed."),
  coord([[1, 0, 0], [1, 1, 0], [1, 1, 1]], [1, 3, 5], 0),
  mc(S`A basis of $\operatorname{Null}\begin{bmatrix}1&1&1\end{bmatrix}$ is:`, S`$\{(-1,1,0),(-1,0,1)\}$`, [S`$\{(1,1,1)\}$`, S`$\{(-1,1,0)\}$`, S`$\{(1,-1,0),(-1,1,0)\}$`], "x₁ = −x₂ − x₃ with x₂, x₃ free."),
  tf("Every spanning set of ℝ³ contains a basis of ℝ³.", true, "Remove redundant vectors (keep the pivot columns) until the set is independent."),
  num(S`How many vectors must be removed from $\{(1,2),(2,4),(3,6),(0,1)\}$ to leave a basis of $\mathbb R^2$?`, 2, "The span is ℝ² (dimension 2); two of the three parallel vectors must go."),
  tf("The vectors (1, 1, 0), (1, −1, 0), (0, 0, 1) in the figure form a basis of ℝ³.", true, "They are mutually orthogonal and nonzero, hence independent; three in ℝ³.", F.v3([[[1, 1, 0], "(1, 1, 0)"], [[1, -1, 0], "(1, −1, 0)"], [[0, 0, 1], "(0, 0, 1)"]])),
  indepQ([[1, 2, 3, 4], [2, 3, 4, 5], [3, 4, 5, 6]]),
  num(S`For which positive $a$ is $\{(a,1),(4,a)\}$ not a basis of $\mathbb R^2$?`, 2, "Parallel when a·a − 4·1 = 0, i.e. a² = 4."),
  tf("If vectors v₁, …, vₖ in S span S and every vector of S has only one representation in terms of them, they form a basis of S.", true, "Unique representation of 0 is exactly independence."),
  mc(S`Which pair does NOT extend $\{(1,2,0)\}$ to a basis of $\mathbb R^3$?`, S`$\{\vec e_1,\vec e_2\}$`, [S`$\{\vec e_1,\vec e_3\}$`, S`$\{\vec e_2,\vec e_3\}$`, S`$\{\vec e_1+\vec e_3,\ \vec e_2\}$`], "(1, 2, 0), e₁, e₂ all have third entry 0: they lie in a plane."),
  coord([[1, 1, 0], [-2, 0, 1]], [-1, 3, 2], 1, F.plane([1, 1, 0], [-2, 0, 1], { lu: "(1, 1, 0)", lv: "(−2, 0, 1)", more: [[[-1, 3, 2], "x", "green"]], len: 3.5 })),
  tf(S`$\{(1,2,3),(0,0,0),(4,5,6)\}$ (figure) is linearly independent.`, false, "Any set containing the zero vector is dependent.", F.v3([[[1, 2, 3], "(1, 2, 3)"], [[4, 5, 6], "(4, 5, 6)"]], { len: 6 })),
];
