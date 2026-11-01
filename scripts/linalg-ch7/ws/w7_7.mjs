// LINALG1 Worksheet 7.7 — The Matrix of a Transformation Relative to a Basis
// Self-contained: complete notes, 9 worked examples with figures, 13 problems with an answer key.
import { svgT } from "./figT.mjs";
import { S, def, thm } from "./wkit.mjs";
import { rowPic, matPic } from "./fig3.mjs";
import { vecs2 } from "./fig5.mjs";
import { am } from "../bank/la.mjs";

const P = (svg, w = 4.4) => svgT(svg, w);
const M = (m) => am(m, false);
const C = (...a) => am(a.map((x) => [x]), false);

const NOTES = [
  { h: "1. Coordinates in a basis",
    lead: def("B-coordinates", S`If \(\mathcal B=\{\vec b_1,\dots,\vec b_n\}\) is a basis and \(\vec x=c_1\vec b_1+\dots+c_n\vec b_n\), then \([\vec x]_{\mathcal B}=(c_1,\dots,c_n)\). With \(P=[\vec b_1\cdots\vec b_n]\): \(\vec x=P[\vec x]_{\mathcal B}\) and \([\vec x]_{\mathcal B}=P^{-1}\vec x\).`),
    fig: vecs2([[[2, 1], "b₁", "blue"], [[1, 1], "b₂", "red"], [[4, 3], "x = b₁ + 2b₂", "violet"]], { xmin: -1, xmax: 5, ymin: -1, ymax: 4 }), w: 0.5 },
  { h: "2. The B-matrix",
    lead: thm("B-matrix", S`For \(T(\vec x)=A\vec x\), \([T]_{\mathcal B}=P^{-1}AP\) satisfies \([T(\vec x)]_{\mathcal B}=[T]_{\mathcal B}[\vec x]_{\mathcal B}\); its column \(j\) is \([T(\vec b_j)]_{\mathcal B}\).`) + S`\pf{\(P^{-1}A\vec x=P^{-1}AP\,P^{-1}\vec x\); column \(j\) of \(P^{-1}AP\) is \(P^{-1}(A\vec b_j)\).}`,
    fig: P(rowPic([[[["P⁻¹"]], {}], [[["A"]], {}], [[["P"]], {}], "=", [[["[T]_B"]], {}]]), 3.4), w: 0.5 },
  { h: "3. Back to the standard matrix",
    lead: S`From \([T]_{\mathcal B}=P^{-1}AP\): \(A=P[T]_{\mathcal B}P^{-1}\). Read right to left: convert to \(\mathcal B\)-coordinates (\(P^{-1}\)), apply \(T\) there, convert back (\(P\)).`,
    fig: P(matPic([["x"], ["→ P⁻¹x"], ["→ [T]_B P⁻¹x"], ["→ P[T]_B P⁻¹x"]], { label: "A = P[T]_B P⁻¹" }), 2.4), w: 0.55 },
  { h: "4. Diagonal B-matrices",
    lead: S`If \(T(\vec b_j)=\lambda_j\vec b_j\) for every basis vector, then \([T]_{\mathcal B}=D=\operatorname{diag}(\lambda_1,\dots,\lambda_n)\): in this basis \(T\) only stretches. Then \(A=PDP^{-1}\) and \(A^k=PD^kP^{-1}\), since the inner \(P^{-1}P\) cancel.`,
    fig: vecs2([[[1, 1], "b₁", "blue"], [[3, 3], "T(b₁) = 3b₁", "blue", null, true], [[1, -1], "b₂", "red"], [[-1, 1], "T(b₂) = −b₂", "red", null, true]], { xmin: -2, xmax: 4, ymin: -2, ymax: 4 }), w: 0.5 },
  { h: "5. Similar matrices",
    lead: def("similar", S`\(A\) and \(B\) are \emph{similar} if \(B=P^{-1}AP\) for an invertible \(P\): they are matrices of the same map in two bases.`) + thm("invariants", S`Similar matrices have the same determinant and the same trace.`) + S`\pf{\(\det(P^{-1}AP)=\tfrac1{\det P}\det A\det P\); \(\operatorname{tr}(XY)=\operatorname{tr}(YX)\) with \(X=P^{-1}\), \(Y=AP\).}`,
    fig: P(matPic([["det"], ["trace"]], { label: "unchanged by P⁻¹(·)P" }), 1.8), w: 0.6 },
  { h: "6. Non-diagonal B-matrices",
    lead: S`Not every map has a diagonalising basis. A good basis can still make \([T]_{\mathcal B}\) triangular: column \(j\) records \(T(\vec b_j)\) as a combination of \(\vec b_1,\dots,\vec b_n\), e.g. \(T(\vec b_2)=\vec b_1+2\vec b_2\) gives column \((1,2)\).`,
    fig: vecs2([[[1, 1], "b₁", "blue"], [[0, 1], "b₂", "red"], [[1, 3], "T(b₂) = b₁ + 2b₂", "red", null, true]], { xmin: -1, xmax: 3, ymin: -1, ymax: 4 }), w: 0.5 },
];

const EXAMPLES = [
  { title: "Coordinates", q: S`\(\mathcal B=\{(2,1),(1,1)\}\). Find \([\vec x]_{\mathcal B}\) for \(\vec x=(4,3)\).`,
    fig: vecs2([[[2, 1], "b₁", "blue"], [[1, 1], "b₂", "red"], [[4, 3], "x", "violet"]], { xmin: -1, xmax: 5, ymin: -1, ymax: 4 }),
    steps: [S`\(P=${M([[2, 1], [1, 1]])}\), \(\det P=1\), \(P^{-1}=${M([[1, -1], [-1, 2]])}\).`, S`\[[\vec x]_{\mathcal B}=${M([[1, -1], [-1, 2]])}${C(4, 3)}=${C("4-3", "-4+6")}=${C(1, 2)}.\]`, S`Check: \(${M([[2, 1], [1, 1]])}${C(1, 2)}=${C("2+2", "1+2")}=${C(4, 3)}\) ✓.`],
    ans: S`\((1,2)\)` },
  { title: "A diagonalising basis", q: S`\(A=${M([[1, 2], [2, 1]])}\), \(\mathcal B=\{(1,1),(1,-1)\}\). Find \([T]_{\mathcal B}\).`,
    fig: vecs2([[[1, 1], "b₁", "blue"], [[3, 3], "Ab₁", "blue", null, true], [[1, -1], "b₂", "red"], [[-1, 1], "Ab₂", "red", null, true]], { xmin: -2, xmax: 4, ymin: -2, ymax: 4 }),
    steps: [S`\(P=${M([[1, 1], [1, -1]])}\), \(\det P=-2\), \(P^{-1}=\tfrac12${M([[1, 1], [1, -1]])}\).`, S`\[AP=${M([[1, 2], [2, 1]])}${M([[1, 1], [1, -1]])}=${M([["1+2", "1-2"], ["2+1", "2-1"]])}=${M([[3, -1], [3, 1]])}.\]`, S`\[[T]_{\mathcal B}=P^{-1}(AP)=\tfrac12${M([[1, 1], [1, -1]])}${M([[3, -1], [3, 1]])}=\tfrac12${M([["3+3", "-1+1"], ["3-3", "-1-1"]])}=${M([[3, 0], [0, -1]])}.\]`],
    ans: S`\(\operatorname{diag}(3,-1)\)` },
  { title: "Applying T in B-coordinates", q: S`With Example 2, compute \(T(3,1)\) through \(\mathcal B\).`,
    fig: P(rowPic([[[[3, 0], [0, -1]], { label: "[T]_B" }], [[[2], [1]], { label: "[x]_B" }], "=", [[[6], [-1]], { label: "[T(x)]_B" }]]), 3.4),
    steps: [S`\([\vec x]_{\mathcal B}=\tfrac12${M([[1, 1], [1, -1]])}${C(3, 1)}=\tfrac12${C(4, 2)}=${C(2, 1)}\).`, S`\([T(\vec x)]_{\mathcal B}=${M([[3, 0], [0, -1]])}${C(2, 1)}=${C(6, -1)}\); \(T(\vec x)=P${C(6, -1)}=${M([[1, 1], [1, -1]])}${C(6, -1)}=${C("6-1", "6+1")}=${C(5, 7)}\).`, S`Directly: \(${M([[1, 2], [2, 1]])}${C(3, 1)}=${C("3+2", "6+1")}=${C(5, 7)}\) ✓.`],
    ans: S`\((5,7)\)` },
  { title: "A fourth power", q: S`Compute \(A^4\) for \(A=${M([[1, 2], [2, 1]])}\) with \(A=PDP^{-1}\).`,
    fig: P(matPic([[81, 0], [0, 1]], { label: "D⁴" }), 1.6),
    steps: [S`\(D^4=\operatorname{diag}(3^4,(-1)^4)=\operatorname{diag}(81,1)\).`, S`\[PD^4=${M([[1, 1], [1, -1]])}${M([[81, 0], [0, 1]])}=${M([[81, 1], [81, -1]])},\qquad A^4=\tfrac12${M([[81, 1], [81, -1]])}${M([[1, 1], [1, -1]])}=\tfrac12${M([["81+1", "81-1"], ["81-1", "81+1"]])}=${M([[41, 40], [40, 41]])}.\]`, S`Check: \(A^2=${M([[5, 4], [4, 5]])}\), \(A^4=(A^2)^2=${M([["25+16", "20+20"], ["20+20", "16+25"]])}=${M([[41, 40], [40, 41]])}\) ✓.`],
    ans: S`\(${M([[41, 40], [40, 41]])}\)` },
  { title: "A triangular B-matrix", q: S`\(A=${M([[2, 1], [0, 3]])}\), \(\mathcal B=\{(1,1),(0,1)\}\). Find \([T]_{\mathcal B}\) and interpret it.`,
    fig: vecs2([[[1, 1], "b₁", "blue"], [[3, 3], "Ab₁ = 3b₁", "blue", null, true], [[0, 1], "b₂", "red"], [[1, 3], "Ab₂ = b₁ + 2b₂", "red", null, true]], { xmin: -1, xmax: 4, ymin: -1, ymax: 4 }),
    steps: [S`\(P=${M([[1, 0], [1, 1]])}\), \(P^{-1}=${M([[1, 0], [-1, 1]])}\). \[AP=${M([[2, 1], [0, 3]])}${M([[1, 0], [1, 1]])}=${M([["2+1", "0+1"], ["0+3", "0+3"]])}=${M([[3, 1], [3, 3]])}.\]`, S`\[[T]_{\mathcal B}=${M([[1, 0], [-1, 1]])}${M([[3, 1], [3, 3]])}=${M([["3", "1"], ["-3+3", "-1+3"]])}=${M([[3, 1], [0, 2]])}.\]`, S`Column 1: \(T(\vec b_1)=3\vec b_1\). Column 2: \(T(\vec b_2)=\vec b_1+2\vec b_2=(1,3)\) ✓.`],
    ans: S`\(${M([[3, 1], [0, 2]])}\)` },
  { title: "A projection from its B-matrix", q: S`\(T\) projects onto the line along \((1,3)\). Use \(\mathcal B=\{(1,3),(-3,1)\}\) to find its standard matrix.`,
    fig: vecs2([[[1, 3], "b₁ (kept)", "blue"], [[-3, 1], "b₂ (→ 0)", "red"]], { xmin: -4, xmax: 2, ymin: -1, ymax: 4 }),
    steps: [S`\(T(\vec b_1)=\vec b_1\), \(T(\vec b_2)=\vec 0\): \([T]_{\mathcal B}=${M([[1, 0], [0, 0]])}\). \(P=${M([[1, -3], [3, 1]])}\), \(\det P=10\), \(P^{-1}=\tfrac1{10}${M([[1, 3], [-3, 1]])}\).`, S`\[A=P[T]_{\mathcal B}P^{-1}=${M([[1, 0], [3, 0]])}\cdot\tfrac1{10}${M([[1, 3], [-3, 1]])}=\tfrac1{10}${M([[1, 3], [3, 9]])}.\]`, S`This matches \(\tfrac1{1+m^2}${M([[1, "m"], ["m", "m^2"]])}\) with \(m=3\) ✓.`],
    ans: S`\(\tfrac1{10}${M([[1, 3], [3, 9]])}\)` },
  { title: "A diagonal B-matrix in ℝ³", q: S`\(A=${M([[2, 0, 0], [0, 1, 1], [0, 1, 1]])}\), \(\mathcal B=\{(1,0,0),(0,1,1),(0,1,-1)\}\). Find \([T]_{\mathcal B}\).`,
    fig: P(matPic([[1, 0, 0], [0, 1, 1], [0, 1, -1]], { label: "P" }), 2),
    steps: [S`\(P^{-1}=${M([[1, 0, 0], [0, "\\tfrac12", "\\tfrac12"], [0, "\\tfrac12", "-\\tfrac12"]])}\) (check \(PP^{-1}=I\)).`, S`\[AP=${M([[2, 0, 0], [0, 1, 1], [0, 1, 1]])}${M([[1, 0, 0], [0, 1, 1], [0, 1, -1]])}=${M([[2, 0, 0], [0, "1+1", "1-1"], [0, "1+1", "1-1"]])}=${M([[2, 0, 0], [0, 2, 0], [0, 2, 0]])}.\]`, S`\[P^{-1}(AP)=${M([[2, 0, 0], [0, "\\tfrac12(2)+\\tfrac12(2)", 0], [0, "\\tfrac12(2)-\\tfrac12(2)", 0]])}=${M([[2, 0, 0], [0, 2, 0], [0, 0, 0]])}.\]`],
    ans: S`\(\operatorname{diag}(2,2,0)\)` },
  { title: "Determinant and trace", q: S`Check that \(A=${M([[1, 2], [2, 1]])}\) and \(D=${M([[3, 0], [0, -1]])}\) have equal determinant and trace.`,
    fig: P(rowPic([[[[1, 2], [2, 1]], { label: "A" }], "~", [[[3, 0], [0, -1]], { label: "D" }]]), 3),
    steps: [S`\(\det A=1-4=-3\), \(\det D=3(-1)=-3\).`, S`\(\operatorname{tr}A=1+1=2\), \(\operatorname{tr}D=3-1=2\).`],
    ans: S`det \(-3\), trace \(2\) for both` },
  { title: "Why the B-matrix works", q: S`Prove \([T(\vec x)]_{\mathcal B}=(P^{-1}AP)[\vec x]_{\mathcal B}\).`,
    steps: [S`\([T(\vec x)]_{\mathcal B}=P^{-1}T(\vec x)=P^{-1}A\vec x\).`, S`Insert \(\vec x=P[\vec x]_{\mathcal B}\): \(P^{-1}AP[\vec x]_{\mathcal B}\).`],
    ans: S`\(P^{-1}A\vec x=P^{-1}AP[\vec x]_{\mathcal B}\)` },
];

const PROBLEMS = [
  { level: 1, q: S`\(\mathcal B=\{(1,0),(0,2)\}\). Find \([\vec x]_{\mathcal B}\) for \(\vec x=(3,4)\).`, ans: S`\((3,2)\)` },
  { level: 1, q: S`\(\mathcal B=\{(1,2),(3,4)\}\), \([\vec x]_{\mathcal B}=(1,1)\). Find \(\vec x\).`, ans: S`\((4,6)\)`, fig: vecs2([[[1, 2], "b₁", "blue"], [[3, 4], "b₂", "red"]], { xmin: -1, xmax: 5, ymin: -1, ymax: 7 }) },
  { level: 1, q: S`\([T]_{\mathcal B}=\operatorname{diag}(5,2)\). Find \(\det A\).`, ans: S`\(10\)` },
  { level: 2, q: S`Compute \(P^{-1}AP\) for \(A=${M([[1, 1], [0, 2]])}\), \(P=${M([[1, 1], [0, 1]])}\).`, ans: S`\(\operatorname{diag}(1,2)\)`, fig: P(matPic([[1, 1], [0, 1]], { label: "P" }), 1.6) },
  { level: 2, q: S`\(T\) reflects in \(x_2=x_1\). Find \([T]_{\mathcal B}\) for \(\mathcal B=\{(1,1),(1,-1)\}\).`, ans: S`\(\operatorname{diag}(1,-1)\)`, fig: vecs2([[[1, 1], "b₁", "blue"], [[1, -1], "b₂", "red"]], { xmin: -2, xmax: 2, ymin: -2, ymax: 2 }) },
  { level: 2, q: S`Find \(A=PDP^{-1}\) for \(P=${M([[1, 1], [1, 2]])}\), \(D=\operatorname{diag}(1,2)\).`, ans: S`\(${M([[0, 1], [-2, 3]])}\)` },
  { level: 2, q: S`\(A\) is similar to \(\operatorname{diag}(4,-1)\). Find \(\operatorname{tr}A\) and \(\det A\).`, ans: S`\(3\) and \(-4\)` },
  { level: 2, q: S`\(T(\vec b_1)=2\vec b_1-\vec b_2\), \(T(\vec b_2)=\vec b_1\). Write \([T]_{\mathcal B}\).`, ans: S`\(${M([[2, 1], [-1, 0]])}\)` },
  { level: 3, space: 5, q: S`Prove that similar matrices have the same determinant.`, ans: S`\(\det(P^{-1}AP)=\det A\)` },
  { level: 3, space: 5, q: S`Prove \(A^k=PD^kP^{-1}\) when \(A=PDP^{-1}\).`, ans: S`induction: \(A^{k+1}=PD^kP^{-1}PDP^{-1}=PD^{k+1}P^{-1}\)` },
  { level: 3, space: 5, q: S`Compute \(A^{10}\) for \(A=${M([[1, 2], [2, 1]])}\).`, ans: S`\(${M([[29525, 29524], [29524, 29525]])}\)`, fig: P(matPic([["3¹⁰", 0], [0, 1]], { label: "D¹⁰" }), 1.6) },
  { level: 3, space: 5, q: S`Show that if \(B=P^{-1}AP\) then \(A=QBQ^{-1}\) for some invertible \(Q\).`, ans: S`\(Q=P\)` },
  { level: 3, space: 5, q: S`Show that \(${M([[0, 1], [0, 0]])}\) is not similar to the zero matrix.`, ans: S`\(P^{-1}0P=0\ne${M([[0, 1], [0, 0]])}\)`, fig: P(matPic([[0, 1], [0, 0]], { label: "N" }), 1.4) },
];

export const WS = {
  code: "7.7",
  title: "The Matrix of a Transformation Relative to a Basis",
  bigideas: S`A basis \(\mathcal B\) gives coordinates \([\vec x]_{\mathcal B}=P^{-1}\vec x\), and a linear map gets a \(\mathcal B\)-matrix \([T]_{\mathcal B}=P^{-1}AP\) whose columns are the \(\mathcal B\)-coordinates of \(T(\vec b_j)\). A well-chosen basis makes this matrix diagonal, which makes the map transparent and its powers easy: \(A^k=PD^kP^{-1}\).`,
  goals: ["Convert between \\(\\vec x\\) and \\([\\vec x]_{\\mathcal B}\\).", "Compute \\([T]_{\\mathcal B}=P^{-1}AP\\).", "Apply \\(T\\) in \\(\\mathcal B\\)-coordinates.", "Recover \\(A=P[T]_{\\mathcal B}P^{-1}\\) and compute powers.", "Use det and trace of similar matrices."],
  curriculum: "Linear transformations — matrices relative to a basis",
  vocab: [["\\([\\vec x]_{\\mathcal B}\\)", "\\(P^{-1}\\vec x\\)"], ["\\([T]_{\\mathcal B}\\)", "\\(P^{-1}AP\\)"], ["Similar", "\\(B=P^{-1}AP\\)"], ["Diagonalising basis", "\\(T\\vec b_j=\\lambda_j\\vec b_j\\)"], ["\\(A^k\\)", "\\(PD^kP^{-1}\\)"]],
  hook: S`Describe a stretch along a slanted direction in ordinary coordinates and the matrix looks messy; describe it along its own directions and it is just two numbers.`,
  concepts: NOTES,
  summary: [
    S`\(\vec x=P[\vec x]_{\mathcal B}\), \([\vec x]_{\mathcal B}=P^{-1}\vec x\).`,
    S`\([T]_{\mathcal B}=P^{-1}AP\), columns \([T(\vec b_j)]_{\mathcal B}\).`,
    S`\(A=P[T]_{\mathcal B}P^{-1}\).`,
    S`\(A=PDP^{-1}\Rightarrow A^k=PD^kP^{-1}\).`,
    S`Similar \(\Rightarrow\) same det and trace.`,
  ],
  tips: ["P converts from B-coordinates.", "Compute AP first, then P⁻¹(AP).", "Check one column: A times a basis vector, in B-coordinates.", "Order the basis consistently.", "Check powers with det or a smaller power."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
