// 4.5 Dependence Relations and Reducing a Spanning Set — 20 hard questions
import { S, F, mc, num, tf, ms, relQ, pivotsQ } from "./gen4.mjs";

const R = (rows) => `\\begin{bmatrix}${rows.map((r) => r.join("&")).join("\\\\")}\\end{bmatrix}`;
export const TOPIC = "4.5 Dependence Relations and Reducing a Spanning Set";
export const Q = [
  relQ([[1, 0, 1, 1], [0, 1, 1, 0], [1, 1, 0, 1], [3, 2, 2, 3]], 2),
  relQ([[1, 2, 0], [0, 1, 1], [1, 0, 1], [2, 3, 2]], 1),
  pivotsQ([[1, 0, 1, 0], [0, 1, 0, 1], [1, 1, 1, 1], [1, -1, 1, -1], [2, 0, 2, 1]]),
  pivotsQ([[1, 2, 3], [2, 4, 6], [1, 0, 1], [0, 2, 2], [3, 2, 5]], F.plane([1, 2, 3], [1, 0, 1], { lu: "(1, 2, 3)", lv: "(1, 0, 1)", more: [[[0, 2, 2], "(0, 2, 2)", "green"]], len: 4 })),
  num(S`For which $h$ is $(2,h,1)$ redundant in $\{(1,1,1),(1,0,-1),(2,h,1)\}$?`, 1.5, "Redundant ⇔ in the plane x₁ − 2x₂ + x₃ = 0 (normal (1, 1, 1) × (1, 0, −1) = (−1, 2, −1)): 2 − 2h + 1 = 0.", F.plane([1, 1, 1], [1, 0, -1], { lu: "(1, 1, 1)", lv: "(1, 0, −1)" }), 0.001),
  num(S`The RREF of $[\,\vec v_1\ \cdots\ \vec v_5\,]$ is $${R([[1, 2, 0, 0, -1], [0, 0, 1, 0, 3], [0, 0, 0, 1, 2]])}$. In $\vec v_5=a\vec v_1+b\vec v_3+c\vec v_4$, find $a+b+c$.`, 4, "Column 5 is (−1, 3, 2): −1 + 3 + 2 = 4."),
  ms(S`With the same RREF, which subsets are independent with the same span as all five vectors?`, [S`$\{\vec v_1,\vec v_3,\vec v_4\}$`, S`$\{\vec v_2,\vec v_3,\vec v_4\}$`, S`$\{\vec v_1,\vec v_2,\vec v_3\}$`, S`$\{\vec v_3,\vec v_4,\vec v_5\}$`], [0, 1, 3], "v₂ = 2v₁ can replace v₁; v₅ = −v₁ + 3v₃ + 2v₄ can replace v₁ too (nonzero coefficient). {v₁, v₂, v₃} contains the parallel pair v₁, v₂."),
  tf(S`If $\vec v_1,\dots,\vec v_k$ are dependent and $\vec v_1\ne\vec 0$, some $\vec v_j$ with $j\ge2$ is a combination of $\vec v_1,\dots,\vec v_{j-1}$.`, true, "Take the last nonzero coefficient cⱼ in a relation; j ≥ 2 because c₁v₁ = 0 alone would force v₁ = 0."),
  mc(S`$A=${R([[1, 2], [2, 4]])}$. Why can't the RREF column $(1,0)$ be used as a spanning vector for the column span?`, S`$(1,0)$ is not a column combination of $A$`, ["it is not a pivot", "it is the zero vector", "it is not independent"], "Col A = Span{(1, 2)}; (1, 0) is not on that line."),
  num(S`$\vec v_1=(1,1)$, $\vec v_2=(2,3)$, $\vec v_3=(4,5)$. In $\vec v_3=a\vec v_1+b\vec v_2$, find $a$.`, 2, "a + 2b = 4, a + 3b = 5: b = 1, a = 2.", F.v2([[[1, 1], "v₁", "blue"], [[2, 3], "v₂", "red"], [[4, 5], "v₃", "green"]], { xmin: -1, xmax: 5, ymin: -1, ymax: 6 })),
  tf("Every spanning set of ℝⁿ contains a basis of ℝⁿ.", true, "Keep the pivot columns: n of them, independent and spanning."),
  num(S`$\{(1,0,0),(1,1,0),(1,1,1),(2,3,4),(0,5,7)\}$ is reduced by the pivot method. How many vectors remain?`, 3, "The first three already have 3 pivots; the rest are redundant in ℝ³."),
  tf(S`If $\vec v_2$ has coefficient 0 in every dependence relation of $\{\vec v_1,\vec v_2,\vec v_3\}$, then $\vec v_2\notin\operatorname{Span}\{\vec v_1,\vec v_3\}$.`, true, "If v₂ = av₁ + bv₃, then av₁ − v₂ + bv₃ = 0 has coefficient −1 on v₂."),
  relQ([[1, -1, 0], [0, 1, -1], [1, 0, -1]], 0),
  num(S`For which $k$ does $\operatorname{Span}\{(1,2,1),(1,k,3)\}$ equal $\operatorname{Span}\{(1,2,1),(1,k,3),(0,1,1)\}$?`, 4, "The spans agree exactly when (0, 1, 1) = a(1, 2, 1) + b(1, k, 3). Entry 1 gives b = −a; entry 3 gives a − 3a = 1, so a = −½, b = ½. Entry 2: −1 + k/2 = 1, so k = 4. Check: ½[(1, 4, 3) − (1, 2, 1)] = (0, 1, 1) ✓."),
  mc("A spanning set of ℝ³ has 5 vectors and the RREF has pivots in columns 1, 2, 4. A basis inside it is:", S`$\{\vec v_1,\vec v_2,\vec v_4\}$`, [S`$\{\vec v_3,\vec v_5\}$`, S`$\{\vec v_1,\vec v_2,\vec v_3\}$`, S`$\{\vec e_1,\vec e_2,\vec e_3\}$`], "Pivot columns of the original matrix."),
  tf("If the RREF of [v₁ … vₖ] has no zero columns, no vector can be removed.", false, "A non-pivot column need not be zero, e.g. column (2, 0) means v₂ = 2v₁."),
  pivotsQ([[1, 1, 0, 0], [0, 0, 1, 1], [1, 1, 1, 1], [1, -1, 0, 0], [2, 0, 1, 1]], F.row([[[[1, 0, 1, 1, 2], [1, 0, 1, -1, 0], [0, 1, 1, 0, 1], [0, 1, 1, 0, 1]], { label: "[v₁ … v₅]" }]])),
  num(S`$\vec v_4=2\vec v_1-\vec v_2$ and $\vec v_5=\vec v_2+3\vec v_3$, with $\{\vec v_1,\vec v_2,\vec v_3\}$ independent. How many vectors does an independent subset of $\{\vec v_1,\dots,\vec v_5\}$ with the same span have?`, 3, "v₄ and v₅ are redundant; v₁, v₂, v₃ remain."),
  tf(S`$\{\vec u,\vec v,\vec u+\vec v,\vec u-\vec v\}$ has span equal to $\operatorname{Span}\{\vec u+\vec v,\vec u-\vec v\}$.`, true, "u = ½[(u + v) + (u − v)], v = ½[(u + v) − (u − v)]."),
];
