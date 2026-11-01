// LINALG1 Worksheet 7.5 — Composition and Inverse Transformations
// Self-contained: complete notes, 9 worked examples with figures, 13 problems with an answer key.
import { svgT } from "./figT.mjs";
import { S, def, thm } from "./wkit.mjs";
import { rowPic, matPic } from "./fig3.mjs";
import { sqMap, shapeMap } from "./fig7.mjs";
import { am, steps } from "../bank/la.mjs";

const P = (svg, w = 4.4) => svgT(svg, w);
const M = (m) => am(m, false);
const C = (...a) => am(a.map((x) => [x]), false);
const L = [[0, 0], [2, 0], [2, 1], [1, 1], [1, 3], [0, 3]];

const NOTES = [
  { h: "1. Composition",
    lead: def("composition", S`For \(T:\mathbb R^n\to\mathbb R^m\) and \(S:\mathbb R^m\to\mathbb R^p\), \(S\circ T:\mathbb R^n\to\mathbb R^p\) is \((S\circ T)(\vec x)=S(T(\vec x))\): first \(T\), then \(S\).`),
    fig: P(rowPic([[[["x"]], { label: "ℝⁿ" }], "→ A →", [[["Ax"]], { label: "ℝᵐ" }], "→ B →", [[["BAx"]], { label: "ℝᵖ" }]]), 4.6), w: 0.5 },
  { h: "2. The matrix of a composition",
    lead: thm("composition = product", S`If \(T\) has standard matrix \(A\) and \(S\) has \(B\), then \(S\circ T\) is linear with standard matrix \(BA\).`) + S`\pf{\(S(T(\vec x))=B(A\vec x)=(BA)\vec x\) by associativity.}` + S`Sizes chain: \((p\times m)(m\times n)=p\times n\).`,
    fig: P(matPic([["B"], ["(p × m)"]], { label: "first map on the right: BA" }), 1.8), w: 0.6 },
  { h: "3. Order matters",
    lead: S`Usually \(BA\ne AB\): rotating then reflecting differs from reflecting then rotating. Maps that do commute include two rotations, any map and a multiple of \(I\), and two stretches along the same axes.`,
    fig: shapeMap([[0, 1], [1, 0]], L, { w: 4, label: "after both" }), w: 0.5 },
  { h: "4. Invertible maps",
    lead: def("inverse map", S`\(T:\mathbb R^n\to\mathbb R^n\) is \emph{invertible} if some \(S\) satisfies \(S(T(\vec x))=\vec x\) and \(T(S(\vec y))=\vec y\) for all vectors; \(S=T^{-1}\).`) + thm("matrix of the inverse", S`\(T(\vec x)=A\vec x\) is invertible \(\iff A\) is invertible, and then \(T^{-1}(\vec y)=A^{-1}\vec y\).`) + S`\pf{\(A^{-1}A=AA^{-1}=I\) are the matrices of the identity map in both orders.}`,
    fig: sqMap([[1, 2], [0, 1]], { w: 4 }), w: 0.5 },
  { h: "5. Inverse of a composition",
    lead: thm("socks and shoes", S`If \(S\), \(T\) are invertible, \((S\circ T)^{-1}=T^{-1}\circ S^{-1}\), matrix \((BA)^{-1}=A^{-1}B^{-1}\).`) + S`\pf{\((BA)(A^{-1}B^{-1})=B(AA^{-1})B^{-1}=BB^{-1}=I\), and similarly in the other order.}`,
    fig: P(rowPic([[[[2, 2], [0, 1]], { label: "BA" }], [[["½", "−1"], [0, 1]], { label: "A⁻¹B⁻¹" }], "=", [[[1, 0], [0, 1]], { label: "I" }]]), 4), w: 0.5 },
  { h: "6. Maps that cannot be undone",
    lead: S`If \(\det A=0\), some \(\vec x\ne\vec 0\) has \(A\vec x=\vec 0=A\vec 0\): two inputs share an output and no inverse map can exist. Projections, and all maps from \(\mathbb R^n\) to \(\mathbb R^m\) with \(m\ne n\), are never invertible.`,
    fig: sqMap([[1, 0], [0, 0]], { w: 4 }), w: 0.5 },
];

const EXAMPLES = [
  { title: "Reflect, then rotate", q: S`\(T\) reflects in the \(x_1\)-axis, \(S\) rotates by \(90^\circ\). Find the matrices of \(S\circ T\) and \(T\circ S\).`,
    fig: shapeMap([[0, 1], [1, 0]], L, { w: 3.8, label: "S∘T" }),
    steps: [S`\(A=${M([[1, 0], [0, -1]])}\), \(B=${M([[0, -1], [1, 0]])}\).`, S`\[BA=${M([[0, -1], [1, 0]])}${M([[1, 0], [0, -1]])}=${M([["0+0", "0+1"], ["1+0", "0+0"]])}=${M([[0, 1], [1, 0]])}\ \text{(reflection in }x_2=x_1).\]`, S`\[AB=${M([[1, 0], [0, -1]])}${M([[0, -1], [1, 0]])}=${M([["0+0", "-1+0"], ["0-1", "0+0"]])}=${M([[0, -1], [-1, 0]])}\ \text{(reflection in }x_2=-x_1).\]`],
    ans: S`\(S\circ T\): \(${M([[0, 1], [1, 0]])}\); \(T\circ S\): \(${M([[0, -1], [-1, 0]])}\)` },
  { title: "Two rotations", q: S`Verify \(R_{60^\circ}R_{30^\circ}=R_{90^\circ}\) by multiplying.`,
    fig: sqMap([[0, -1], [1, 0]], { w: 3.6 }),
    steps: [S`\[R_{60^\circ}R_{30^\circ}=${M([["\\tfrac12", "-\\tfrac{\\sqrt3}2"], ["\\tfrac{\\sqrt3}2", "\\tfrac12"]])}${M([["\\tfrac{\\sqrt3}2", "-\\tfrac12"], ["\\tfrac12", "\\tfrac{\\sqrt3}2"]])}=${M([["\\tfrac{\\sqrt3}4-\\tfrac{\\sqrt3}4", "-\\tfrac14-\\tfrac34"], ["\\tfrac34+\\tfrac14", "-\\tfrac{\\sqrt3}4+\\tfrac{\\sqrt3}4"]])}=${M([[0, -1], [1, 0]])}.\]`, S`This is \(R_{90^\circ}\): angles add.`],
    ans: S`\(${M([[0, -1], [1, 0]])}=R_{90^\circ}\)` },
  { title: "Across dimensions", q: S`\(T:\mathbb R^2\to\mathbb R^3\) has \(A=${M([[1, 2], [0, 1], [1, -1]])}\), \(S:\mathbb R^3\to\mathbb R\) has \(B=${M([[1, 1, 2]])}\). Find the matrix of \(S\circ T\).`,
    fig: P(rowPic([[[[1, 1, 2]], { label: "B (1 × 3)" }], [[[1, 2], [0, 1], [1, -1]], { label: "A (3 × 2)" }]]), 3.4),
    steps: [S`\((1\times3)(3\times2)\) gives \(1\times2\): \[BA=${M([[1, 1, 2]])}${M([[1, 2], [0, 1], [1, -1]])}=${M([["1+0+2", "2+1-2"]])}=${M([[3, 1]])}.\]`, S`Check \((1,1)\): \(A${C(1, 1)}=${C(3, 1, 0)}\), \(B${C(3, 1, 0)}=3+1+0=4\), and \(${M([[3, 1]])}${C(1, 1)}=4\) ✓.`],
    ans: S`\(${M([[3, 1]])}\)` },
  { title: "Shear and projection", q: S`\(H=${M([[1, 2], [0, 1]])}\) and \(P=${M([[1, 0], [0, 0]])}\). Compare "shear then project" with "project then shear".`,
    fig: sqMap([[1, 2], [0, 0]], { w: 3.6 }),
    steps: [S`\[PH=${M([[1, 0], [0, 0]])}${M([[1, 2], [0, 1]])}=${M([["1+0", "2+0"], [0, 0]])}=${M([[1, 2], [0, 0]])},\qquad HP=${M([[1, 2], [0, 1]])}${M([[1, 0], [0, 0]])}=${M([[1, 0], [0, 0]])}.\]`, S`Different: e.g. \((0,1)\) goes to \((2,0)\) under \(PH\) but to \((0,0)\) under \(HP\).`],
    ans: S`\(PH=${M([[1, 2], [0, 0]])}\ne HP=${M([[1, 0], [0, 0]])}\)` },
  { title: "Undoing a rotation", q: S`Show \(R_{60^\circ}^{-1}=R_{-60^\circ}=R_{60^\circ}^T\).`,
    fig: P(matPic([["½", "√3/2"], ["−√3/2", "½"]], { label: "R(−60°)" }), 2),
    steps: [S`\(R_{-60^\circ}=${M([["\\tfrac12", "\\tfrac{\\sqrt3}2"], ["-\\tfrac{\\sqrt3}2", "\\tfrac12"]])}=R_{60^\circ}^T\).`, S`\[R_{60^\circ}R_{-60^\circ}=${M([["\\tfrac12", "-\\tfrac{\\sqrt3}2"], ["\\tfrac{\\sqrt3}2", "\\tfrac12"]])}${M([["\\tfrac12", "\\tfrac{\\sqrt3}2"], ["-\\tfrac{\\sqrt3}2", "\\tfrac12"]])}=${M([["\\tfrac14+\\tfrac34", "\\tfrac{\\sqrt3}4-\\tfrac{\\sqrt3}4"], ["\\tfrac{\\sqrt3}4-\\tfrac{\\sqrt3}4", "\\tfrac34+\\tfrac14"]])}=I.\]`],
    ans: S`product is \(I\)` },
  { title: "Inverting a 2 × 2 map", q: S`\(T(x_1,x_2)=(2x_1+x_2,\ 5x_1+3x_2)\). Find \(T^{-1}\) and solve \(T(\vec x)=(4,11)\).`,
    fig: P(matPic([[2, 1], [5, 3]], { label: "A, det = 1" }), 1.8),
    steps: [S`\(A=${M([[2, 1], [5, 3]])}\), \(\det A=6-5=1\): \(A^{-1}=${M([[3, -1], [-5, 2]])}\), so \(T^{-1}(\vec y)=(3y_1-y_2,\ -5y_1+2y_2)\).`, S`\[\vec x=A^{-1}${C(4, 11)}=${M([[3, -1], [-5, 2]])}${C(4, 11)}=${C("12-11", "-20+22")}=${C(1, 2)}.\]`, S`Check: \(${M([[2, 1], [5, 3]])}${C(1, 2)}=${C("2+2", "5+6")}=${C(4, 11)}\) ✓.`],
    ans: S`\(T^{-1}(\vec y)=${M([[3, -1], [-5, 2]])}\vec y\); \(\vec x=(1,2)\)` },
  { title: "Inverting a 3 × 3 map", q: S`Find \(T^{-1}\) for \(T(\vec x)=${M([[1, 1, 0], [0, 1, 1], [0, 0, 1]])}\vec x\).`,
    fig: P(matPic([[1, 1, 0], [0, 1, 1], [0, 0, 1]], { label: "upper triangular" }), 2),
    steps: [...steps([[1, 1, 0, 1, 0, 0], [0, 1, 1, 0, 1, 0], [0, 0, 1, 0, 0, 1]], [
      [S`Clear column 3 above its pivot.`, ["R2-R3"]],
      [S`Clear column 2 above its pivot.`, ["R1-R2"]],
    ], { bar: 3, intro: S`Row reduce \([\,A\mid I\,]\)` }).steps,
      S`\(A^{-1}=${M([[1, -1, 1], [0, 1, -1], [0, 0, 1]])}\). Check: \(${M([[1, 1, 0], [0, 1, 1], [0, 0, 1]])}${M([[1, -1, 1], [0, 1, -1], [0, 0, 1]])}=${M([["1", "-1+1", "1-1"], [0, "1", "-1+1"], [0, 0, 1]])}=I\) ✓.`],
    ans: S`\(${M([[1, -1, 1], [0, 1, -1], [0, 0, 1]])}\)` },
  { title: "Inverse of a composition", q: S`\(A=${M([[1, 1], [0, 1]])}\) (first), \(B=${M([[2, 0], [0, 1]])}\) (second). Verify \((BA)^{-1}=A^{-1}B^{-1}\).`,
    fig: P(rowPic([[[[2, 0], [0, 1]], { label: "B" }], [[[1, 1], [0, 1]], { label: "A" }], "=", [[[2, 2], [0, 1]], { label: "BA" }]]), 3.6),
    steps: [S`\(BA=${M([[2, 2], [0, 1]])}\), \(\det=2\): \((BA)^{-1}=\tfrac12${M([[1, -2], [0, 2]])}=${M([["\\tfrac12", -1], [0, 1]])}\).`, S`\[A^{-1}B^{-1}=${M([[1, -1], [0, 1]])}${M([["\\tfrac12", 0], [0, 1]])}=${M([["\\tfrac12", "0-1"], ["0", "1"]])}=${M([["\\tfrac12", -1], [0, 1]])}\ \checkmark\]`],
    ans: S`both \(${M([["\\tfrac12", -1], [0, 1]])}\)` },
  { title: "Compositions of invertible maps", q: S`Prove that if \(S\) and \(T\) are invertible maps of \(\mathbb R^n\), so is \(S\circ T\).`,
    steps: [S`Let \(A\), \(B\) be their matrices, both invertible. The matrix of \(S\circ T\) is \(BA\).`, S`\((BA)(A^{-1}B^{-1})=I\) and \((A^{-1}B^{-1})(BA)=I\), so \(BA\) is invertible and so is \(S\circ T\).`],
    ans: S`\((BA)^{-1}=A^{-1}B^{-1}\)` },
];

const PROBLEMS = [
  { level: 1, q: S`\(T\) has matrix \(${M([[1, 0], [0, 2]])}\), \(S\) has \(${M([[0, 1], [1, 0]])}\). Find the matrix of \(S\circ T\).`, ans: S`\(${M([[0, 2], [1, 0]])}\)` },
  { level: 1, q: S`\(T:\mathbb R^2\to\mathbb R^4\), \(S:\mathbb R^4\to\mathbb R^3\). What size is the matrix of \(S\circ T\)?`, ans: S`\(3\times2\)` },
  { level: 1, q: S`Find the inverse of the dilation \(4I\) on \(\mathbb R^2\).`, ans: S`\(\tfrac14I\)`, fig: sqMap([[4, 0], [0, 4]], { w: 3.2 }) },
  { level: 2, q: S`Show \(AB\ne BA\) for \(A=${M([[1, 1], [0, 1]])}\), \(B=${M([[1, 0], [1, 1]])}\).`, ans: S`\(AB=${M([[2, 1], [1, 1]])}\), \(BA=${M([[1, 1], [1, 2]])}\)`, fig: P(rowPic([[[[1, 1], [0, 1]], { label: "A" }], [[[1, 0], [1, 1]], { label: "B" }]]), 2.8) },
  { level: 2, q: S`Find \(T^{-1}\) for \(T(x_1,x_2)=(x_1+4x_2,\ x_2)\).`, ans: S`\((y_1-4y_2,\ y_2)\)` },
  { level: 2, q: S`What single map is "rotate by \(20^\circ\) three times"?`, ans: S`\(R_{60^\circ}\)` },
  { level: 2, q: S`Solve \(T(\vec x)=(1,1)\) for \(T(\vec x)=${M([[3, 2], [4, 3]])}\vec x\) using \(T^{-1}\).`, ans: S`\((1,-1)\)`, fig: P(matPic([[3, -2], [-4, 3]], { label: "A⁻¹" }), 1.8) },
  { level: 2, q: S`Is the projection onto \(x_2=x_1\) invertible? Explain.`, ans: S`no: \(\det=0\); \((1,-1)\mapsto\vec 0\)` },
  { level: 3, space: 5, q: S`Prove \((S\circ T)^{-1}=T^{-1}\circ S^{-1}\).`, ans: S`\((BA)(A^{-1}B^{-1})=I\) both ways` },
  { level: 3, space: 5, q: S`Show that reflecting in the \(x_1\)-axis and then in \(x_2=x_1\) is a rotation, and find its angle.`, ans: S`\(${M([[0, 1], [1, 0]])}${M([[1, 0], [0, -1]])}=${M([[0, -1], [1, 0]])}=R_{90^\circ}\)`, fig: shapeMap([[0, -1], [1, 0]], L, { w: 3.4 }) },
  { level: 3, space: 5, q: S`Find the inverse of \(T(\vec x)=${M([[1, 0, 0], [2, 1, 0], [0, 3, 1]])}\vec x\).`, ans: S`\(${M([[1, 0, 0], [-2, 1, 0], [6, -3, 1]])}\)` },
  { level: 3, space: 5, q: S`Find a \(2\times2\) \(A\ne\pm I\) with \(A\circ A=\) identity, and describe it.`, ans: S`e.g. \(${M([[1, 0], [0, -1]])}\), a reflection` },
  { level: 3, space: 5, q: S`Prove that an invertible linear map is one-to-one.`, ans: S`\(T\vec u=T\vec v\Rightarrow\vec u=T^{-1}T\vec u=T^{-1}T\vec v=\vec v\)` },
];

export const WS = {
  code: "7.5",
  title: "Composition and Inverse Transformations",
  bigideas: S`Doing \(T\) and then \(S\) is the linear map \(S\circ T\) with matrix \(BA\) — the first map on the right — and order matters. A linear map of \(\mathbb R^n\) can be undone exactly when its matrix is invertible, and \(T^{-1}\) has matrix \(A^{-1}\); undoing a composition undoes the last step first.`,
  goals: ["Find \\(BA\\) for \\(S\\circ T\\).", "Show order matters.", "Compose across dimensions.", "Invert a linear map.", "Use \\((S\\circ T)^{-1}=T^{-1}\\circ S^{-1}\\)."],
  curriculum: "Linear transformations — composition and inverses",
  vocab: [["\\(S\\circ T\\)", "first \\(T\\), then \\(S\\)"], ["\\(BA\\)", "its matrix"], ["Invertible map", "can be undone"], ["\\(T^{-1}\\)", "matrix \\(A^{-1}\\)"], ["Socks and shoes", "\\((BA)^{-1}=A^{-1}B^{-1}\\)"]],
  hook: S`Turn a page, then flip it over — or flip first, then turn? The two results differ, and matrix multiplication knows why.`,
  concepts: NOTES,
  summary: [
    S`\(S\circ T\leftrightarrow BA\).`,
    S`Sizes \((p\times m)(m\times n)\).`,
    S`\(BA\ne AB\) in general.`,
    S`\(T^{-1}\leftrightarrow A^{-1}\), only for square invertible \(A\).`,
    S`\((S\circ T)^{-1}=T^{-1}\circ S^{-1}\).`,
  ],
  tips: ["First map on the right.", "Check sizes before multiplying.", "Test commutation with one vector.", "det = 0 means no inverse.", "Undo the last step first."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
