// LINALG1 Worksheet 9.3 — Orthogonal Projection onto a Subspace
// Self-contained: complete notes, 9 worked examples with figures, 13 problems with an answer key.
import { svgT } from "./figT.mjs";
import { S, def, thm } from "./wkit.mjs";
import { rowPic, matPic } from "./fig3.mjs";
import { projPlane, projLine } from "./fig9.mjs";
import { am } from "../bank/la.mjs";

const P = (svg, w = 4.4) => svgT(svg, w);
const M = (m) => am(m, false);
const C = (...a) => am(a.map((x) => [x]), false);
const T = (v) => M([v]);
const plane = (w = 4.4) => projPlane([1, 0, 1], [1, 1, -1], [2, 3, 0], [8 / 3, 5 / 3, -2 / 3], { w });

const NOTES = [
  { h: "1. The orthogonal decomposition",
    lead: thm("decomposition", S`For a subspace \(W\) of \(\mathbb R^n\), every \(\vec y\) is uniquely \(\vec y=\hat y+\vec z\) with \(\hat y\in W\) and \(\vec z\in W^\perp\). \(\hat y\) is the \emph{orthogonal projection} of \(\vec y\) onto \(W\).`) + S`\pf{Existence comes from the formula below; uniqueness from \(W\cap W^\perp=\{\vec 0\}\).}`,
    fig: plane(4.2), w: 0.5 },
  { h: "2. The formula (orthogonal basis)",
    lead: S`If \(\vec u_1,\dots,\vec u_k\) is an \emph{orthogonal} basis of \(W\) and \(U=[\vec u_1\cdots\vec u_k]\): \[\hat y=\sum_{i=1}^k\frac{\vec u_i^T\vec y}{\vec u_i^T\vec u_i}\vec u_i=U\vec c,\qquad c_i=\frac{\vec u_i^T\vec y}{\vec u_i^T\vec u_i}.\] Check with \(U^T(\vec y-\hat y)=\vec 0\).`,
    fig: P(rowPic([[[["u₁", "u₂"]], { label: "U" }], [[["c₁"], ["c₂"]], { label: "c" }], "=", [[["ŷ"]], {}]]), 3), w: 0.5 },
  { h: "3. Best approximation",
    lead: thm("closest point", S`\(\hat y\) is the closest point of \(W\) to \(\vec y\): \(|\vec y-\hat y|<|\vec y-\vec v|\) for every other \(\vec v\in W\). The distance from \(\vec y\) to \(W\) is \(|\vec y-\hat y|\).`) + S`\pf{Pythagoras: \(|\vec y-\vec v|^2=|\vec y-\hat y|^2+|\hat y-\vec v|^2\), because \(\vec y-\hat y\perp\hat y-\vec v\).}`,
    fig: projLine([2, 1], [1, 3], { w: 4 }), w: 0.5 },
  { h: "4. Orthonormal bases",
    lead: S`If the columns of \(U\) are orthonormal, \(c_i=\vec u_i^T\vec y\), so \(\vec c=U^T\vec y\) and \(\hat y=UU^T\vec y\). The matrix \(UU^T\) is the projection matrix onto \(W\).`,
    fig: P(matPic([["UUᵀ"]], { label: "projection matrix" }), 1.6), w: 0.55 },
  { h: "5. Special cases",
    lead: S`If \(\vec y\in W\) then \(\hat y=\vec y\). If \(\vec y\in W^\perp\) then \(\hat y=\vec 0\). For a line (\(k=1\)) the formula is the familiar \(\frac{\vec u^T\vec y}{\vec u^T\vec u}\vec u\).`,
    fig: projLine([1, 0], [3, 2], { w: 4 }), w: 0.5 },
  { h: "6. The basis must be orthogonal",
    lead: S`With a non-orthogonal basis the sum of one-dimensional projections is \emph{not} the projection — the error test \(U^T(\vec y-\hat y)=\vec 0\) fails. Orthogonalise first (9.5) or use the normal equations (9.4).`,
    fig: P(matPic([["u₁·u₂ ≠ 0"]], { label: "formula fails" }), 1.8), w: 0.55 },
];

const EXAMPLES = [
  { title: "Projection onto a plane", q: S`\(\vec u_1=(1,0,1)\), \(\vec u_2=(1,1,-1)\), \(\vec y=(2,3,0)\). Find \(\hat y\) and \(\vec z\).`,
    fig: plane(3.8),
    steps: [S`\(\vec u_1^T\vec u_2=1+0-1=0\). \(U^T\vec y=${M([[1, 0, 1], [1, 1, -1]])}${C(2, 3, 0)}=${C(2, 5)}\), \(U^TU=\operatorname{diag}(2,3)\), \(\vec c=(1,\tfrac53)\).`, S`\(\hat y=${M([[1, 1], [0, 1], [1, -1]])}${C(1, "\\tfrac53")}=${C("1+\\tfrac53", "\\tfrac53", "1-\\tfrac53")}=${C("\\tfrac83", "\\tfrac53", "-\\tfrac23")}\), \(\vec z=${C("-\\tfrac23", "\\tfrac43", "\\tfrac23")}\).`, S`Check: \(U^T\vec z=${C("-\\tfrac23+0+\\tfrac23", "-\\tfrac23+\\tfrac43-\\tfrac23")}=\vec 0\) ✓.`],
    ans: S`\(\hat y=(\tfrac83,\tfrac53,-\tfrac23)\)` },
  { title: "Distance to the plane", q: S`Find the distance from \(\vec y=(2,3,0)\) to the plane of Example 1.`,
    fig: plane(3.8),
    steps: [S`\(\vec z=\tfrac23(-1,2,1)\): \(|\vec z|^2=\tfrac49(1+4+1)=\tfrac{24}9\).`, S`Distance \(=\tfrac{2\sqrt6}3\approx1.633\).`],
    ans: S`\(\tfrac{2\sqrt6}3\)` },
  { title: "Projection onto a line in ℝ³", q: S`Project \(\vec y=(1,1,4)\) onto \(\operatorname{span}\{(2,1,2)\}\).`,
    fig: P(rowPic([[[[2], [1], [2]], { label: "u" }], "·", [[[1], [1], [4]], { label: "y" }], "=", [[["11"]], {}]]), 3),
    steps: [S`\(c=\dfrac{${T([2, 1, 2])}${C(1, 1, 4)}}{${T([2, 1, 2])}${C(2, 1, 2)}}=\dfrac{2+1+8}{4+1+4}=\dfrac{11}9\).`, S`\(\hat y=\tfrac{11}9(2,1,2)\), \(\vec z=(1-\tfrac{22}9,\ 1-\tfrac{11}9,\ 4-\tfrac{22}9)=(-\tfrac{13}9,-\tfrac29,\tfrac{14}9)\); \(\vec u^T\vec z=\tfrac{-26-2+28}9=0\) ✓.`],
    ans: S`\(\tfrac{11}9(2,1,2)\)` },
  { title: "The projection matrix UUᵀ", q: S`Normalise the basis of Example 1 and find \(UU^T\).`,
    fig: P(matPic([[5, 2, 1], [2, 2, -2], [1, -2, 5]], { label: "6·UUᵀ" }), 2),
    steps: [S`\(UU^T=\tfrac12${M([[1, 0, 1], [0, 0, 0], [1, 0, 1]])}+\tfrac13${M([[1, 1, -1], [1, 1, -1], [-1, -1, 1]])}=\tfrac16${M([[5, 2, 1], [2, 2, -2], [1, -2, 5]])}\).`, S`\(UU^T\vec y=\tfrac16${C("10+6+0", "4+6+0", "2-6+0")}=${C("\\tfrac83", "\\tfrac53", "-\\tfrac23")}\) ✓.`],
    ans: S`\(\tfrac16${M([[5, 2, 1], [2, 2, -2], [1, -2, 5]])}\)` },
  { title: "A vector already in W", q: S`Project \((2,1,0)\) onto the plane of Example 1.`,
    fig: P(rowPic([[[[1], [0], [1]], { label: "u₁" }], "+", [[[1], [1], [-1]], { label: "u₂" }], "=", [[[2], [1], [0]], {}]]), 3),
    steps: [S`\(U^T\vec y=(2,3)\), \(\vec c=(1,1)\): \(\hat y=\vec u_1+\vec u_2=(2,1,0)=\vec y\).`, S`\(\vec y\in W\), so it is its own projection; \(\vec z=\vec 0\).`],
    ans: S`\((2,1,0)\)` },
  { title: "A subspace of ℝ⁴", q: S`\(W=\operatorname{span}\{(1,0,1,0),(0,1,0,1)\}\), \(\vec y=(1,2,3,4)\). Find \(\hat y\) and the distance.`,
    fig: P(matPic([[1, 0], [0, 1], [1, 0], [0, 1]], { label: "U" }), 1.8),
    steps: [S`\(U^TU=\operatorname{diag}(2,2)\), \(U^T\vec y=(1+3,\ 2+4)=(4,6)\), \(\vec c=(2,3)\).`, S`\(\hat y=(2,3,2,3)\), \(\vec z=(-1,-1,1,1)\), \(U^T\vec z=(-1+1,-1+1)=\vec 0\) ✓. Distance \(=2\).`],
    ans: S`\(\hat y=(2,3,2,3)\), distance 2` },
  { title: "Best approximation in numbers", q: S`For Example 1, compare \(|\vec y-\hat y|\) with \(|\vec y-\vec u_1|\).`,
    fig: plane(3.8),
    steps: [S`\(|\vec y-\hat y|^2=\tfrac{24}9\approx2.67\).`, S`\(\vec y-\vec u_1=(1,3,-1)\): \(|\vec y-\vec u_1|^2=11>2.67\) ✓.`],
    ans: S`\(2.67<11\)` },
  { title: "A non-orthogonal basis", q: S`Show that \(\tfrac{\vec v_1^T\vec y}{\vec v_1^T\vec v_1}\vec v_1+\tfrac{\vec v_2^T\vec y}{\vec v_2^T\vec v_2}\vec v_2\) with \(\vec v_1=(1,0,1)\), \(\vec v_2=(2,1,0)\) (same plane) is not the projection of \((2,3,0)\).`,
    fig: P(matPic([["v₁·v₂ = 2"]], { label: "not orthogonal" }), 1.8),
    steps: [S`Sum \(=\tfrac22(1,0,1)+\tfrac75(2,1,0)=(3.8,1.4,1)\).`, S`Error \((2,3,0)-(3.8,1.4,1)=(-1.8,1.6,-1)\): \(\vec v_1^T\vec e=-1.8-1=-2.8\ne0\). Not perpendicular; the true projection is \((\tfrac83,\tfrac53,-\tfrac23)\).`],
    ans: S`the formula fails` },
  { title: "Uniqueness", q: S`Prove that the decomposition \(\vec y=\hat y+\vec z\) is unique.`,
    steps: [S`If \(\hat y_1+\vec z_1=\hat y_2+\vec z_2\), then \(\hat y_1-\hat y_2=\vec z_2-\vec z_1\) lies in \(W\cap W^\perp\).`, S`\(W\cap W^\perp=\{\vec 0\}\), so \(\hat y_1=\hat y_2\), \(\vec z_1=\vec z_2\).`],
    ans: S`\(W\cap W^\perp=\{\vec 0\}\)` },
];

const PROBLEMS = [
  { level: 1, q: S`Project \((3,7)\) onto the \(x_1\)-axis.`, ans: S`\((3,0)\)` },
  { level: 1, q: S`Project \((4,2)\) onto \(\operatorname{span}\{(1,1)\}\).`, ans: S`\((3,3)\)`, fig: projLine([1, 1], [4, 2], { w: 3.2 }) },
  { level: 1, q: S`\(\vec y\in W^\perp\). Find \(\operatorname{proj}_W\vec y\).`, ans: S`\(\vec 0\)` },
  { level: 2, q: S`Project \((1,2,3)\) onto \(\operatorname{span}\{(1,1,0),(1,-1,0)\}\).`, ans: S`\((1,2,0)\)` },
  { level: 2, q: S`Project \((3,0,3)\) onto \(\operatorname{span}\{(1,2,2)\}\) and give the distance.`, ans: S`\(\tfrac{9}{9}(1,2,2)=(1,2,2)\); distance \(\sqrt{4+4+1}=3\)`, fig: P(rowPic([[[[1], [2], [2]], { label: "u" }]]), 1.6) },
  { level: 2, q: S`\(\vec u_1=(1,1,1)\), \(\vec u_2=(1,-1,0)\), \(\vec y=(3,1,2)\). Find \(\hat y\).`, ans: S`\(2(1,1,1)+1(1,-1,0)=(3,1,2)\) — \(\vec y\in W\)` },
  { level: 2, q: S`With \(\vec u_1=(1,1,1)\), \(\vec u_2=(1,-1,0)\), project \(\vec y=(1,0,0)\).`, ans: S`\(\tfrac13(1,1,1)+\tfrac12(1,-1,0)=(\tfrac56,-\tfrac16,\tfrac13)\)`, fig: projPlane([1, 1, 1], [1, -1, 0], [1, 0, 0], [5 / 6, -1 / 6, 1 / 3], { w: 3.2 }) },
  { level: 2, q: S`Find \(UU^T\) for \(U=\tfrac1{\sqrt2}${M([[1], [1]])}\).`, ans: S`\(\tfrac12${M([[1, 1], [1, 1]])}\)` },
  { level: 3, space: 5, q: S`Prove that \(\hat y\) is the closest point of \(W\) to \(\vec y\).`, ans: S`Pythagoras with \(\vec y-\hat y\perp\hat y-\vec v\)` },
  { level: 3, space: 5, q: S`Find the distance from \((1,1,1,1)\) to \(W=\operatorname{span}\{(1,0,0,0),(0,1,1,0)\}\).`, ans: S`\(\hat y=(1,1,1,0)\), distance 1` },
  { level: 3, space: 5, q: S`Show that \((UU^T)^2=UU^T\) when \(U^TU=I\).`, ans: S`\(U(U^TU)U^T=UU^T\)` },
  { level: 3, space: 5, q: S`Explain why \(\operatorname{proj}_W\vec y+\operatorname{proj}_{W^\perp}\vec y=\vec y\).`, ans: S`they are \(\hat y\) and \(\vec z\)`, fig: projLine([2, 1], [1, 3], { w: 3.2 }) },
  { level: 3, space: 5, q: S`The projection of \(\vec y\) onto \(W\) is \(\vec 0\). What can you say about \(\vec y\)?`, ans: S`\(\vec y\in W^\perp\)` },
];

export const WS = {
  code: "9.3",
  title: "Orthogonal Projection onto a Subspace",
  bigideas: S`Every vector splits into a part in \(W\) and a part perpendicular to \(W\). With an orthogonal basis, the part in \(W\) — the projection — is a sum of one-dimensional projections; it is the closest point of \(W\), and the length of the remaining part is the distance to \(W\).`,
  goals: ["Decompose \\(\\vec y=\\hat y+\\vec z\\).", "Use the projection formula with an orthogonal basis.", "Check with \\(U^T\\vec z=\\vec 0\\).", "Find distances to subspaces.", "Use \\(UU^T\\)."],
  curriculum: "Orthogonality — orthogonal projections",
  vocab: [["\\(\\hat y\\)", "projection onto \\(W\\)"], ["\\(\\vec z\\)", "error in \\(W^\\perp\\)"], ["\\(c_i\\)", "\\(\\vec u_i^T\\vec y/\\vec u_i^T\\vec u_i\\)"], ["Distance", "\\(|\\vec y-\\hat y|\\)"], ["\\(UU^T\\)", "projection matrix"]],
  hook: S`Your shadow at noon is the projection of you onto the ground. Which point of a subspace is closest to a given vector?`,
  concepts: NOTES,
  summary: [S`\(\vec y=\hat y+\vec z\).`, S`\(\hat y=\sum\frac{\vec u_i^T\vec y}{\vec u_i^T\vec u_i}\vec u_i\) (orthogonal basis).`, S`\(U^T(\vec y-\hat y)=\vec 0\).`, S`Distance \(=|\vec y-\hat y|\).`, S`Orthonormal: \(\hat y=UU^T\vec y\).`],
  tips: ["Check orthogonality of the basis first.", "Divide by squared lengths.", "Verify with U-transpose times z.", "If y is in W, the projection is y.", "The error, not the projection, is perpendicular to W."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
