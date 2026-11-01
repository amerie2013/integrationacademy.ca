// 4.5 Dependence Relations and Reducing a Spanning Set — 20 easy + 20 medium questions
import { S, F, mc, num, tf, fill, relQ, pivotsQ } from "./gen4.mjs";

const R = (rows) => `\\begin{bmatrix}${rows.map((r) => r.join("&")).join("\\\\")}\\end{bmatrix}`;
const easy = [
  num(S`$5\vec v_1+\vec v_2-2\vec v_3=\vec 0$. Write $\vec v_2=a\vec v_1+b\vec v_3$ and give $a$.`, -5, "v₂ = −5v₁ + 2v₃."),
  num(S`$5\vec v_1+\vec v_2-2\vec v_3=\vec 0$. Write $\vec v_3=a\vec v_1+b\vec v_2$ and give $b$.`, 0.5, "2v₃ = 5v₁ + v₂, so v₃ = 2.5v₁ + 0.5v₂.", undefined, 0.001),
  tf("Removing a vector that is a combination of the others does not change the span.", true, "Substitute it into any combination."),
  tf("Any vector of a dependent set can be removed without changing the span.", false, "Only vectors with a nonzero coefficient in some relation."),
  fill("To find an independent subset with the same span, keep the vectors in the ___ columns of the original matrix.", ["pivot"], "Pivot columns of A."),
  mc(S`The RREF of $[\,\vec v_1\ \vec v_2\ \vec v_3\,]$ is $${R([[1, 0, 2], [0, 1, -1], [0, 0, 0]])}$. Then $\vec v_3=$`, S`$2\vec v_1-\vec v_2$`, [S`$\vec v_1+2\vec v_2$`, S`$-2\vec v_1+\vec v_2$`, S`$2\vec v_2-\vec v_1$`], "Column 3 lists the weights (2, −1)."),
  tf("A dependent set always has a vector that is a combination of the others.", true, "Solve a relation for a vector with a nonzero coefficient."),
  pivotsQ([[1, 2], [2, 4], [3, 6]], F.v2([[[1, 2], "(1, 2)", "blue"], [[2, 4], "(2, 4)", "red", null, true]], { xmin: -1, xmax: 4, ymin: -1, ymax: 7 })),
  pivotsQ([[1, 0], [0, 1], [1, 1]]),
  mc("Which vectors may be removed from {(1, 0), (2, 0), (0, 1)} without changing the span?", "(1, 0) or (2, 0)", ["(0, 1)", "any of the three", "none"], "(0, 1) has coefficient 0 in every relation.", F.v2([[[1, 0], "(1, 0)", "blue"], [[2, 0], "(2, 0)", "red", null, true], [[0, 1], "(0, 1)", "green"]], { xmin: -1, xmax: 3, ymin: -1, ymax: 2 })),
  tf("Row operations change the column relations of a matrix.", false, "They keep the solutions of Ac = 0, hence every column relation."),
  num(S`The RREF of $[\,\vec v_1\ \cdots\ \vec v_4\,]$ has pivots in columns 1 and 3. How many vectors are redundant?`, 2, "Columns 2 and 4."),
  tf("The columns of the RREF themselves form an independent subset with the same span as the original vectors.", false, "The RREF columns are different vectors; use the original pivot columns."),
  mc(S`$\vec v_3=\vec v_1+\vec v_2$. A dependence relation is:`, S`$\vec v_1+\vec v_2-\vec v_3=\vec 0$`, [S`$\vec v_1-\vec v_2+\vec v_3=\vec 0$`, S`$\vec v_1+\vec v_2+\vec v_3=\vec 0$`, S`$\vec v_3-\vec v_1=\vec 0$`], "Move v₃ across."),
  pivotsQ([[1, 1, 0], [0, 1, 1], [1, 2, 1]]),
  tf("Different choices of which redundant vectors to remove leave subsets of the same size.", true, "Each has as many vectors as there are pivots."),
  num(S`Eight vectors span $\mathbb R^3$. How many vectors are in an independent subset with the same span?`, 3, "Three pivots."),
  tf(S`If $\vec v_1=\vec 0$, then $\vec v_1$ can be removed from any set without changing the span.`, true, "0 is in every span."),
  mc(S`The RREF of $[\,\vec v_1\ \vec v_2\ \vec v_3\,]$ is $${R([[1, 3, 0], [0, 0, 1]])}$. Keep:`, S`$\vec v_1,\vec v_3$`, [S`$\vec v_2,\vec v_3$ only`, S`$\vec v_1,\vec v_2$`, "all three"], "Pivot columns 1 and 3 (v₂ = 3v₁)."),
  tf(S`If $2\vec v_1+0\vec v_2-\vec v_3=\vec 0$ is the only relation (up to multiples), $\vec v_2$ can be removed.`, false, "v₂ has coefficient 0: it is not a combination of the others."),
];

const medium = [
  relQ([[1, 0, 1], [0, 1, 2], [3, 2, 7]], 0),
  relQ([[1, 1, 0], [1, -1, 2], [3, 1, 2]], 1, F.plane([1, 1, 0], [1, -1, 2], { lu: "v₁", lv: "v₂", more: [[[3, 1, 2], "v₃", "green"]], len: 3.6 })),
  relQ([[1, 2, 0, 1], [0, 1, 1, 0], [2, 3, -1, 2]], 1),
  pivotsQ([[1, 0, 1], [2, 0, 2], [0, 1, 1], [1, 1, 2]]),
  pivotsQ([[1, 2, 1, 0], [2, 4, 2, 0], [0, 0, 1, 1], [1, 2, 2, 1]]),
  pivotsQ([[1, 1, 1], [1, 2, 3], [2, 3, 4], [0, 1, 2]], F.v3([[[1, 1, 1], "(1, 1, 1)"], [[1, 2, 3], "(1, 2, 3)"], [[2, 3, 4], "(2, 3, 4)"]])),
  num(S`The RREF of $[\,\vec v_1\ \vec v_2\ \vec v_3\ \vec v_4\,]$ is $${R([[1, 0, -1, 2], [0, 1, 3, 0], [0, 0, 0, 0]])}$. In $\vec v_4=a\vec v_1+b\vec v_2$, find $a$.`, 2, "Column 4 is (2, 0, 0)."),
  num(S`For the same RREF, in $\vec v_3=a\vec v_1+b\vec v_2$, find $a+b$.`, 2, "Column 3 is (−1, 3): −1 + 3 = 2."),
  mc(S`$\{(1,2),(2,1),(3,3)\}$: which single vector can be removed without changing the span?`, "any one of them", ["only (3, 3)", "only (1, 2)", "none"], "(1, 2) + (2, 1) − (3, 3) = 0 with all coefficients nonzero; any two of them still span ℝ²."),
  tf(S`$\operatorname{Span}\{(1,1,0),(0,1,1),(1,2,1)\}=\operatorname{Span}\{(1,1,0),(0,1,1)\}$.`, true, "(1, 2, 1) = (1, 1, 0) + (0, 1, 1)."),
  tf(S`$\operatorname{Span}\{(1,0,0),(0,1,0),(0,0,1)\}=\operatorname{Span}\{(1,0,0),(0,1,0)\}$.`, false, "e₃ is not a combination of e₁ and e₂."),
  num(S`For which $k$ is $(1,k,2)$ redundant in $\{(1,0,1),(0,1,1),(1,k,2)\}$?`, 1, "Redundant ⇔ in the plane {(a, b, a + b)}: 1 + k = 2."),
  mc(S`$\vec v_1=(1,2)$, $\vec v_2=(2,4)$, $\vec v_3=(1,1)$. Which subset is independent with the same span?`, S`$\{\vec v_1,\vec v_3\}$`, [S`$\{\vec v_1,\vec v_2\}$`, S`$\{\vec v_3\}$`, S`$\{\vec v_1\}$`], "v₂ = 2v₁ is redundant; v₁ and v₃ are not parallel."),
  tf("After removing one redundant vector, every other previously redundant vector is still redundant.", false, "{u, 2u, v}: remove u and 2u is no longer redundant."),
  relQ([[2, 1], [1, 1], [0, 1]], 0, F.v2([[[2, 1], "v₁", "blue"], [[1, 1], "v₂", "red"], [[0, 1], "v₃", "green"]], { xmin: -1, xmax: 3, ymin: -1, ymax: 2 })),
  num(S`$\{\vec v_1,\dots,\vec v_6\}\subseteq\mathbb R^4$ has 3 pivots. How many vectors are redundant?`, 3, "6 − 3."),
  tf(S`If $\vec v_3$ is redundant in $\{\vec v_1,\vec v_2,\vec v_3\}$ and $\{\vec v_1,\vec v_2\}$ is independent, then $\vec v_3$ is a unique combination of $\vec v_1,\vec v_2$.`, true, "Independence of v₁, v₂ makes the weights unique."),
  mc("The procedure 'row reduce, keep the pivot columns of A' produces:", "an independent subset with the same span", ["an orthogonal set", "the RREF columns", "a spanning set of ℝⁿ always"], "Pivot-column theorem."),
  num(S`The RREF of $[\,\vec v_1\ \vec v_2\ \vec v_3\,]$ is $${R([[1, 0, 4], [0, 1, 5]])}$. Find the coefficient of $\vec v_3$ in the relation $4\vec v_1+5\vec v_2+c\vec v_3=\vec 0$.`, -1, "v₃ = 4v₁ + 5v₂, so 4v₁ + 5v₂ − v₃ = 0."),
  pivotsQ([[2, 0, 1], [0, 2, 1], [2, 2, 2], [1, 1, 1]]),
];

export const E = easy;
export { medium as M };
