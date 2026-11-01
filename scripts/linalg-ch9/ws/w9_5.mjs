// LINALG1 Worksheet 9.5 — The Gram–Schmidt Process
// Self-contained: complete notes, 9 worked examples with figures, 13 problems with an answer key.
import { svgT } from "./figT.mjs";
import { S, def, thm } from "./wkit.mjs";
import { rowPic, matPic } from "./fig3.mjs";
import { vecs3 } from "./fig5.mjs";
import { gsPlane } from "./fig9.mjs";
import { am } from "../bank/la.mjs";

const P = (svg, w = 4.4) => svgT(svg, w);
const M = (m) => am(m, false);
const C = (...a) => am(a.map((x) => [x]), false);
const T = (v) => M([v]);

const NOTES = [
  { h: "1. The idea",
    lead: S`Keep the first vector. From each later vector subtract its projections onto the vectors already chosen; what remains is perpendicular to all of them and spans the same space together with them.`,
    fig: gsPlane([1, 1], [2, 0], { w: 4 }), w: 0.5 },
  { h: "2. The formulas",
    lead: thm("Gram–Schmidt", S`For a basis \(\vec v_1,\dots,\vec v_p\): \(\vec w_1=\vec v_1\) and \(\vec w_k=\vec v_k-\sum_{j<k}\dfrac{\vec v_k^T\vec w_j}{\vec w_j^T\vec w_j}\vec w_j\). The \(\vec w\)'s are orthogonal and \(\operatorname{span}\{\vec w_1..\vec w_k\}=\operatorname{span}\{\vec v_1..\vec v_k\}\).`) + S`\pf{\(\vec w_k=\vec v_k-\operatorname{proj}_{W_{k-1}}\vec v_k\) lies in \(W_{k-1}^\perp\) by 9.3, and is a combination of \(\vec v_1..\vec v_k\).}`,
    fig: P(rowPic([[[["vₖ"]], {}], "−", [[["proj onto w₁…wₖ₋₁"]], {}], "=", [[["wₖ"]], {}]]), 4), w: 0.5 },
  { h: "3. Rescaling",
    lead: S`Any nonzero multiple of \(\vec w_k\) may replace it — this clears fractions and changes neither orthogonality nor span. Use the rescaled vector in every later step.`,
    fig: P(matPic([["(½, −½, 1)"], ["→ (1, −1, 2)"]], { label: "rescale by 2" }), 2), w: 0.55 },
  { h: "4. Normalising",
    lead: S`\(\vec q_k=\vec w_k/|\vec w_k|\) gives an orthonormal basis. Check: \(W^TW\) diagonal before normalising, \(Q^TQ=I\) after.`,
    fig: vecs3([[[1, 0, 1], "w₁", "blue"], [[1, 2, -1], "w₂", "red"], [[-1, 1, 1], "w₃", "green"]], { w: 4 }), w: 0.5 },
  { h: "5. Dependent inputs",
    lead: def("dependence", S`If \(\vec v_k\in\operatorname{span}\{\vec v_1..\vec v_{k-1}\}\), Gram–Schmidt gives \(\vec w_k=\vec 0\). Discard it; the nonzero \(\vec w\)'s still form an orthogonal basis of the span.`),
    fig: P(matPic([["w₃ = 0"]], { label: "v₃ was dependent" }), 1.6), w: 0.55 },
  { h: "6. Order matters",
    lead: S`Different orders of the input vectors give different orthogonal bases (of the same subspace). The first vector is always kept unchanged.`,
    fig: gsPlane([2, 0], [1, 1], { w: 4 }), w: 0.5 },
];

const EXAMPLES = [
  { title: "Two vectors in ℝ²", q: S`Apply Gram–Schmidt to \((1,1)\), \((2,0)\).`,
    fig: gsPlane([1, 1], [2, 0], { w: 3.8 }),
    steps: [S`\(\vec w_1=(1,1)\); \(\dfrac{\vec v_2^T\vec w_1}{\vec w_1^T\vec w_1}=\dfrac{2+0}{2}=1\).`, S`\(\vec w_2=${C(2, 0)}-${C(1, 1)}=${C(1, -1)}\); \(\vec w_1^T\vec w_2=1-1=0\) ✓.`],
    ans: S`\((1,1)\), \((1,-1)\)` },
  { title: "Three vectors in ℝ³", q: S`Apply Gram–Schmidt to \((1,0,1)\), \((1,1,0)\), \((0,1,1)\).`,
    fig: vecs3([[[1, 0, 1], "w₁", "blue"], [[1, 2, -1], "w₂", "red"], [[-1, 1, 1], "w₃", "green"]], { w: 3.8 }),
    steps: [S`\(\vec w_1=(1,0,1)\). \(c=\tfrac{1}{2}\): \(\vec w_2=${C(1, 1, 0)}-\tfrac12${C(1, 0, 1)}=${C("\\tfrac12", 1, "-\\tfrac12")}\to(1,2,-1)\).`, S`\(c_1=\tfrac{0+0+1}2=\tfrac12\), \(c_2=\tfrac{0+2-1}{6}=\tfrac16\): \(\vec w_3=${C(0, 1, 1)}-\tfrac12${C(1, 0, 1)}-\tfrac16${C(1, 2, -1)}=${C("-\\tfrac23", "\\tfrac23", "\\tfrac23")}\to(-1,1,1)\).`, S`\(W^TW=${M([[1, 0, 1], [1, 2, -1], [-1, 1, 1]])}${M([[1, 1, -1], [0, 2, 1], [1, -1, 1]])}=${M([[2, 0, 0], [0, 6, 0], [0, 0, 3]])}\) ✓.`],
    ans: S`\((1,0,1)\), \((1,2,-1)\), \((-1,1,1)\)` },
  { title: "Orthonormal version", q: S`Normalise Example 2's vectors.`,
    fig: P(matPic([["1/√2", "1/√6", "−1/√3"], [0, "2/√6", "1/√3"], ["1/√2", "−1/√6", "1/√3"]], { label: "Q" }), 2.6),
    steps: [S`Lengths \(\sqrt2,\sqrt6,\sqrt3\) (diagonal of \(W^TW\)).`, S`\(\vec q_1=\tfrac1{\sqrt2}(1,0,1)\), \(\vec q_2=\tfrac1{\sqrt6}(1,2,-1)\), \(\vec q_3=\tfrac1{\sqrt3}(-1,1,1)\).`],
    ans: S`as shown` },
  { title: "A subspace of ℝ⁴", q: S`Orthogonalise \((1,1,0,0)\), \((1,0,1,0)\), \((1,0,0,1)\).`,
    fig: P(matPic([[1, 1, 1], [1, -1, -1], [0, 2, -1], [0, 0, 3]], { label: "W" }), 2),
    steps: [S`\(\vec w_1=(1,1,0,0)\); \(c=\tfrac12\): \(\vec w_2=(1,0,1,0)-\tfrac12(1,1,0,0)=(\tfrac12,-\tfrac12,1,0)\to(1,-1,2,0)\).`, S`\(c_1=\tfrac12\), \(c_2=\tfrac{1+0+0+0}6=\tfrac16\): \(\vec w_3=(1,0,0,1)-\tfrac12(1,1,0,0)-\tfrac16(1,-1,2,0)=(\tfrac13,-\tfrac13,-\tfrac13,1)\to(1,-1,-1,3)\).`, S`\(W^TW=\operatorname{diag}(2,6,12)\) (off-diagonal: \(1-1=0\), \(1-1+0=0\), \(1+1-2+0=0\)) ✓.`],
    ans: S`\((1,1,0,0)\), \((1,-1,2,0)\), \((1,-1,-1,3)\)` },
  { title: "A dependent input", q: S`Apply Gram–Schmidt to \((1,1,1)\), \((1,0,0)\), \((2,1,1)\).`,
    fig: P(matPic([["v₃ = v₁ + v₂"]], {}), 1.8),
    steps: [S`\(\vec w_1=(1,1,1)\); \(c=\tfrac13\): \(\vec w_2=(1,0,0)-\tfrac13(1,1,1)=(\tfrac23,-\tfrac13,-\tfrac13)\to(2,-1,-1)\).`, S`\(c_1=\tfrac43\), \(c_2=\tfrac{4-1-1}6=\tfrac13\): \(\vec w_3=(2,1,1)-\tfrac43(1,1,1)-\tfrac13(2,-1,-1)=(0,0,0)\). Discard.`],
    ans: S`span is a plane: \((1,1,1)\), \((2,-1,-1)\)` },
  { title: "Orthogonal basis of a plane", q: S`Find an orthogonal basis of \(x_1-x_2+x_3=0\).`,
    fig: vecs3([[[1, 1, 0], "w₁", "blue"], [[-1, 1, 2], "w₂", "red"]], { w: 3.8 }),
    steps: [S`Basis: \((1,1,0)\), \((-1,0,1)\). \(c=\tfrac{-1}{2}\): \(\vec w_2=(-1,0,1)+\tfrac12(1,1,0)=(-\tfrac12,\tfrac12,1)\to(-1,1,2)\).`, S`Check: \((1,1,0)\cdot(-1,1,2)=0\) ✓; \(-1-1+2=0\) ✓ (in the plane).`],
    ans: S`\((1,1,0)\), \((-1,1,2)\)` },
  { title: "Changing the order", q: S`Apply Gram–Schmidt to \((2,0),(1,1)\) and compare with Example 1.`,
    fig: gsPlane([2, 0], [1, 1], { w: 3.8 }),
    steps: [S`\(\vec w_1=(2,0)\); \(c=\tfrac24=\tfrac12\): \(\vec w_2=(1,1)-(1,0)=(0,1)\).`, S`A different orthogonal basis, \((2,0),(0,1)\), of the same \(\mathbb R^2\).`],
    ans: S`\((2,0)\), \((0,1)\)` },
  { title: "The coefficient formula", q: S`For \(\vec w_1=(3,4)\) and \(\vec v_2=(1,7)\), compute \(\vec w_2\) and verify orthogonality.`,
    fig: gsPlane([3, 4], [1, 7], { w: 3.8 }),
    steps: [S`\(c=\tfrac{3+28}{25}=\tfrac{31}{25}\). \(\vec w_2=(1,7)-\tfrac{31}{25}(3,4)=(\tfrac{25-93}{25},\tfrac{175-124}{25})=(-\tfrac{68}{25},\tfrac{51}{25})\to(-4,3)\).`, S`\((3,4)\cdot(-4,3)=0\) ✓.`],
    ans: S`\((-4,3)\)` },
  { title: "Spans agree", q: S`Prove \(\operatorname{span}\{\vec w_1,\vec w_2\}=\operatorname{span}\{\vec v_1,\vec v_2\}\).`,
    steps: [S`\(\vec w_1=\vec v_1\) and \(\vec w_2=\vec v_2-c\vec v_1\) are combinations of \(\vec v_1,\vec v_2\); conversely \(\vec v_2=\vec w_2+c\vec w_1\).`],
    ans: S`each set is a combination of the other` },
];

const PROBLEMS = [
  { level: 1, q: S`Orthogonalise \((1,0)\), \((3,2)\).`, ans: S`\((1,0)\), \((0,2)\)` },
  { level: 1, q: S`Orthogonalise \((1,2)\), \((2,1)\).`, ans: S`\((1,2)\), \(\tfrac35(2,-1)\to(2,-1)\)`, fig: gsPlane([1, 2], [2, 1], { w: 3.2 }) },
  { level: 1, q: S`What does a zero \(\vec w_k\) mean?`, ans: S`\(\vec v_k\) depends on the earlier vectors` },
  { level: 2, q: S`Orthogonalise \((1,1,1)\), \((0,1,2)\).`, ans: S`\((1,1,1)\), \((-1,0,1)\)` },
  { level: 2, q: S`Orthonormalise \((1,0,0)\), \((1,1,0)\), \((1,1,1)\).`, ans: S`\(\vec e_1,\vec e_2,\vec e_3\)`, fig: vecs3([[[1, 0, 0], "e₁", "blue"], [[1, 1, 0], "v₂", "red"], [[1, 1, 1], "v₃", "green"]], { w: 3.2 }) },
  { level: 2, q: S`Orthogonalise \((1,1,0,1)\), \((1,0,1,1)\).`, ans: S`\((1,1,0,1)\), \(\tfrac13(1,-2,3,1)\to(1,-2,3,1)\)` },
  { level: 2, q: S`Find an orthogonal basis of the plane \(x_1+x_2+x_3=0\).`, ans: S`e.g. \((1,-1,0)\), \((1,1,-2)\)` },
  { level: 2, q: S`Orthogonalise \((2,1,2)\), \((1,1,1)\), \((0,1,0)\).`, ans: S`\((2,1,2)\), \((-1,4,-1)\) (scaled), \(\vec w_3=\vec 0\)`, fig: P(matPic([["third input dependent"]], {}), 2) },
  { level: 3, space: 5, q: S`Prove that \(\vec w_2\perp\vec w_1\).`, ans: S`\(\vec w_1^T\vec v_2-c\,\vec w_1^T\vec w_1=0\)` },
  { level: 3, space: 5, q: S`Show that Gram–Schmidt leaves an orthogonal input unchanged.`, ans: S`all coefficients are 0` },
  { level: 3, space: 5, q: S`Orthonormalise \((1,1,1,1)\), \((1,1,-1,-1)\), \((1,-1,1,-1)\) and explain the result.`, ans: S`already orthogonal: divide each by 2` },
  { level: 3, space: 5, q: S`Find an orthonormal basis of \(\operatorname{Nul}${M([[1, 1, 1, 1]])}\).`, ans: S`e.g. \(\tfrac1{\sqrt2}(1,-1,0,0)\), \(\tfrac1{\sqrt6}(1,1,-2,0)\), \(\tfrac1{\sqrt{12}}(1,1,1,-3)\)`, fig: P(matPic([[1, 1, 1, 1]], { label: "A" }), 1.8) },
  { level: 3, space: 5, q: S`Explain why Gram–Schmidt on \(p\) independent vectors never produces a zero vector.`, ans: S`\(\vec v_k\notin W_{k-1}\), so \(\vec v_k\ne\operatorname{proj}\)` },
];

export const WS = {
  code: "9.5",
  title: "The Gram–Schmidt Process",
  bigideas: S`Gram–Schmidt converts any basis into an orthogonal one by subtracting, from each vector, its projections onto the vectors already constructed. The span is unchanged at every stage; normalising gives an orthonormal basis.`,
  goals: ["Apply Gram–Schmidt to 2–4 vectors.", "Compute each coefficient.", "Rescale to clear fractions.", "Normalise and check.", "Detect dependence."],
  curriculum: "Orthogonality — the Gram–Schmidt process",
  vocab: [["\\(\\vec w_k\\)", "\\(\\vec v_k\\) minus projections"], ["Coefficient", "\\(\\vec v_k^T\\vec w_j/\\vec w_j^T\\vec w_j\\)"], ["Rescale", "clears fractions"], ["Normalise", "unit length"], ["Zero vector", "dependent input"]],
  hook: S`Crooked axes make every computation harder. Can any set of axes be straightened without changing the space they span?`,
  concepts: NOTES,
  summary: [S`\(\vec w_1=\vec v_1\), \(\vec w_k=\vec v_k-\sum\frac{\vec v_k^T\vec w_j}{\vec w_j^T\vec w_j}\vec w_j\).`, S`Same span at every stage.`, S`Rescale freely.`, S`Check \(W^TW\) diagonal.`, S`Zero vector ⇒ dependent input.`],
  tips: ["Subtract projections onto the new vectors.", "Divide by squared lengths.", "Use rescaled vectors consistently.", "Check orthogonality at each step.", "Order changes the answer, not the span."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
