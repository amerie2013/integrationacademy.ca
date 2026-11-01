// LINALG1 Worksheet 6.7 — Cramer's Rule, the Adjugate and Volume
// Self-contained: complete notes, 9 worked examples with figures, 13 problems with an answer key.
import { svgT } from "./figT.mjs";
import { S, def, thm } from "./wkit.mjs";
import { rowPic, matPic } from "./fig3.mjs";
import { vecs2, vecs3 } from "./fig5.mjs";
import { am } from "../bank/la.mjs";

const P = (svg, w = 4.4) => svgT(svg, w);
const M = (m) => am(m, false);
const C = (...a) => am(a.map((x) => [x]), false);
const D = (m) => S`\left|\begin{array}{${"c".repeat(m[0].length)}}${m.map((r) => r.join(" & ")).join(" \\\\ ")}\end{array}\right|`;

const NOTES = [
  { h: "1. The adjugate",
    lead: def("adjugate", S`The cofactor matrix \(C=[C_{ij}]\) collects all cofactors; the \emph{adjugate} is its transpose, \(\operatorname{adj}A=C^T\).`) + thm("inverse formula", S`\(A\,\operatorname{adj}A=(\operatorname{adj}A)A=(\det A)I\), so \(A^{-1}=\dfrac1{\det A}\operatorname{adj}A\) when \(\det A\ne0\).`) + S`\pf{Diagonal entries of \(A\operatorname{adj}A\) are cofactor expansions of \(\det A\); off-diagonal ones expand a matrix with two equal rows, hence are 0.}`,
    fig: P(rowPic([[[["C₁₁", "C₁₂"], ["C₂₁", "C₂₂"]], { label: "C" }], "→ᵀ", [[["C₁₁", "C₂₁"], ["C₁₂", "C₂₂"]], { label: "adj A" }]]), 3.6), w: 0.48 },
  { h: "2. Cramer's rule",
    lead: thm("Cramer's rule", S`If \(\det A\ne0\), the solution of \(A\vec x=\vec b\) is \(x_i=\dfrac{\det A_i(\vec b)}{\det A}\), where \(A_i(\vec b)\) is \(A\) with column \(i\) replaced by \(\vec b\).`) + S`\pf{\(A\,I_i(\vec x)=A_i(\vec b)\), where \(I_i(\vec x)\) is \(I\) with column \(i\) replaced by \(\vec x\), and \(\det I_i(\vec x)=x_i\).}`,
    fig: P(rowPic([[[[2, 3], [1, -1]], { label: "A" }], " ", [[[8, 3], [-1, -1]], { col: 0, colFill: "#dcfce7", label: "A₁(b)" }], " ", [[[2, 8], [1, -1]], { col: 1, colFill: "#dcfce7", label: "A₂(b)" }]]), 4.4), w: 0.5 },
  { h: "3. Area and volume",
    lead: thm("volume", S`\(|\det[\,\vec a_1\ \vec a_2\,]|\) is the area of the parallelogram on \(\vec a_1,\vec a_2\); \(|\det[\,\vec a_1\ \vec a_2\ \vec a_3\,]|\) is the volume of the parallelepiped on \(\vec a_1,\vec a_2,\vec a_3\).`),
    fig: vecs3([[[2, 1, 0], "a₁"], [[0, 1, 3], "a₂"], [[1, 0, 1], "a₃"]]), w: 0.5 },
  { h: "4. Scaling areas",
    lead: S`A matrix \(A\) maps the unit square (or cube) to the parallelogram (or parallelepiped) on its columns. Every region is scaled by the same factor: \[\text{area of image}=|\det A|\cdot\text{area of region}.\]`,
    fig: vecs2([[[1, 0], "e₁", "blue"], [[0, 1], "e₂", "red"], [[3, 1], "Ae₁", "blue", null, true], [[1, 2], "Ae₂", "red", null, true]], { xmin: -1, xmax: 5, ymin: -1, ymax: 4 }), w: 0.5 },
  { h: "5. When to use what",
    lead: S`Cramer's rule and the adjugate give exact \emph{formulas} (useful for parameters and theory). For numerical work row reduction is far faster: an \(n\times n\) Cramer solution needs \(n+1\) determinants.`,
    fig: P(matPic([["a", "b"], ["c", "d"]], { label: "adj = [d −b; −c a]" }), 1.8), w: 0.55 },
];

const EXAMPLES = [
  { title: "A 2 × 2 adjugate", q: S`Find \(\operatorname{adj}A\) and \(A^{-1}\) for \(A=${M([[3, 4], [1, 2]])}\).`,
    fig: P(matPic([[3, 4], [1, 2]], { label: "A" }), 1.6),
    steps: [S`Cofactors: \(C_{11}=2\), \(C_{12}=-1\), \(C_{21}=-4\), \(C_{22}=3\). \(C=${M([[2, -1], [-4, 3]])}\), \(\operatorname{adj}A=C^T=${M([[2, -4], [-1, 3]])}\).`, S`\(\det A=6-4=2\): \(A^{-1}=\tfrac12${M([[2, -4], [-1, 3]])}=${M([[1, -2], ["-\\tfrac12", "\\tfrac32"]])}\).`, S`Check: \(${M([[3, 4], [1, 2]])}${M([[2, -4], [-1, 3]])}=${M([["6-4", "-12+12"], ["2-2", "-4+6"]])}=2I\) ✓.`],
    ans: S`\(A^{-1}=\tfrac12${M([[2, -4], [-1, 3]])}\)` },
  { title: "A 3 × 3 adjugate", q: S`Find \(\operatorname{adj}A\) and \(A^{-1}\) for \(A=${M([[1, 1, 0], [0, 2, 1], [1, 0, 1]])}\).`,
    fig: P(matPic([[1, 1, 0], [0, 2, 1], [1, 0, 1]], { label: "A" }), 2.2),
    steps: [S`\(\det A=1${D([[2, 1], [0, 1]])}-1${D([[0, 1], [1, 1]])}+0=2-(-1)=3\).`, S`Cofactors: \(C_{11}=${D([[2, 1], [0, 1]])}=2\), \(C_{12}=-${D([[0, 1], [1, 1]])}=1\), \(C_{13}=${D([[0, 2], [1, 0]])}=-2\); \(C_{21}=-${D([[1, 0], [0, 1]])}=-1\), \(C_{22}=${D([[1, 0], [1, 1]])}=1\), \(C_{23}=-${D([[1, 1], [1, 0]])}=1\); \(C_{31}=${D([[1, 0], [2, 1]])}=1\), \(C_{32}=-${D([[1, 0], [0, 1]])}=-1\), \(C_{33}=${D([[1, 1], [0, 2]])}=2\).`, S`\[\operatorname{adj}A=${M([[2, -1, 1], [1, 1, -1], [-2, 1, 2]])},\qquad A^{-1}=\tfrac13${M([[2, -1, 1], [1, 1, -1], [-2, 1, 2]])}.\]`, S`Check: \[${M([[1, 1, 0], [0, 2, 1], [1, 0, 1]])}${M([[2, -1, 1], [1, 1, -1], [-2, 1, 2]])}=${M([["2+1+0", "-1+1+0", "1-1+0"], ["0+2-2", "0+2+1", "0-2+2"], ["2+0-2", "-1+0+1", "1+0+2"]])}=3I\ \checkmark\]`],
    ans: S`\(A^{-1}=\tfrac13${M([[2, -1, 1], [1, 1, -1], [-2, 1, 2]])}\)` },
  { title: "Cramer's rule, two unknowns", q: S`Solve \(2x_1+3x_2=8,\ x_1-x_2=-1\) by Cramer's rule.`,
    fig: P(rowPic([[[[2, 3], [1, -1]], { label: "A" }], " ", [[[8, 3], [-1, -1]], { col: 0, colFill: "#dcfce7", label: "A₁(b)" }], " ", [[[2, 8], [1, -1]], { col: 1, colFill: "#dcfce7", label: "A₂(b)" }]]), 4),
    steps: [S`\(\det A=${D([[2, 3], [1, -1]])}=-2-3=-5\).`, S`\[x_1=\frac{${D([[8, 3], [-1, -1]])}}{-5}=\frac{-8+3}{-5}=1,\qquad x_2=\frac{${D([[2, 8], [1, -1]])}}{-5}=\frac{-2-8}{-5}=2.\]`, S`Check: \(${M([[2, 3], [1, -1]])}${C(1, 2)}=${C("2+6", "1-2")}=${C(8, -1)}\) ✓.`],
    ans: S`\((1,2)\)` },
  { title: "Cramer's rule, three unknowns", q: S`Solve \(A\vec x=(3,3,3)\) for \(A=${M([[2, 1, 0], [1, 0, 1], [0, 1, 1]])}\).`,
    fig: P(matPic([[2, 1, 0], [1, 0, 1], [0, 1, 1]], { label: "A" }), 2.2),
    steps: [S`\(\det A=2${D([[0, 1], [1, 1]])}-1${D([[1, 1], [0, 1]])}+0=2(-1)-1(1)=-3\).`, S`\(\det A_1(\vec b)=${D([[3, 1, 0], [3, 0, 1], [3, 1, 1]])}=3(0-1)-1(3-3)+0=-3\); \(\det A_2(\vec b)=${D([[2, 3, 0], [1, 3, 1], [0, 3, 1]])}=2(3-3)-3(1-0)+0=-3\); \(\det A_3(\vec b)=${D([[2, 1, 3], [1, 0, 3], [0, 1, 3]])}=2(0-3)-1(3-0)+3(1-0)=-6\).`, S`\(x_1=\tfrac{-3}{-3}=1\), \(x_2=\tfrac{-3}{-3}=1\), \(x_3=\tfrac{-6}{-3}=2\). Check: \(${M([[2, 1, 0], [1, 0, 1], [0, 1, 1]])}${C(1, 1, 2)}=${C("2+1+0", "1+0+2", "0+1+2")}=${C(3, 3, 3)}\) ✓.`],
    ans: S`\((1,1,2)\)` },
  { title: "Volume of a parallelepiped", q: S`Find the volume of the box on \((2,1,0)\), \((0,1,3)\), \((1,0,1)\).`,
    fig: vecs3([[[2, 1, 0], "a₁"], [[0, 1, 3], "a₂"], [[1, 0, 1], "a₃"]]),
    steps: [S`Columns: \(${M([[2, 0, 1], [1, 1, 0], [0, 3, 1]])}\).`, S`Along row 1: \(2${D([[1, 0], [3, 1]])}-0+1${D([[1, 1], [0, 3]])}=2(1)+1(3)=5\).`, S`Volume \(=|5|=5\).`],
    ans: S`\(5\)` },
  { title: "Scaling an area", q: S`\(A=${M([[3, 1], [1, 2]])}\) maps a disk of radius 1 to an ellipse. Find the ellipse's area.`,
    fig: vecs2([[[1, 0], "e₁", "blue"], [[0, 1], "e₂", "red"], [[3, 1], "Ae₁", "blue", null, true], [[1, 2], "Ae₂", "red", null, true]], { xmin: -1, xmax: 5, ymin: -1, ymax: 4 }),
    steps: [S`\(\det A=6-1=5\).`, S`The disk has area \(\pi\cdot1^2=\pi\); areas are multiplied by \(|\det A|=5\).`, S`Ellipse area \(=5\pi\).`],
    ans: S`\(5\pi\)` },
  { title: "Area of a triangle", q: S`Find the area of the triangle with vertices \((2,1)\), \((6,2)\), \((3,5)\).`,
    fig: vecs2([[[6, 2], "", "blue", [2, 1]], [[3, 5], "", "red", [2, 1]]], { xmin: 0, xmax: 7, ymin: 0, ymax: 6 }, { segs: [{ pts: [[6, 2], [3, 5]], color: "#94a3b8", w: 1.5 }] }),
    steps: [S`Edges from \((2,1)\): \((4,1)\) and \((1,4)\).`, S`\(${D([[4, 1], [1, 4]])}=16-1=15\).`, S`Area \(=\tfrac12|15|=7.5\).`],
    ans: S`\(7.5\)` },
  { title: "Cramer's rule with a parameter", q: S`For which \(a\) does \(ax_1+2x_2=1,\ 2x_1+ax_2=0\) have a unique solution? Find \(x_2\).`,
    fig: P(matPic([["a", 2], [2, "a"]], { label: "A" }), 1.6),
    steps: [S`\(\det A=a^2-4\); unique \(\iff a\ne\pm2\).`, S`\[x_2=\frac{${D([["a", 1], [2, 0]])}}{a^2-4}=\frac{0-2}{a^2-4}=\frac{-2}{a^2-4}.\]`, S`Check \(a=0\): \(x_2=\tfrac12\), and \(x_1=\tfrac{${D([[1, 2], [0, 0]])}}{-4}=0\): \(0+2\cdot\tfrac12=1\) ✓, \(0+0=0\) ✓.`],
    ans: S`\(a\ne\pm2\); \(x_2=\dfrac{-2}{a^2-4}\)` },
  { title: "Why A adj A = (det A) I", q: S`Verify \(A\operatorname{adj}A=(\det A)I\) for a general \(2\times2\) matrix.`,
    steps: [S`\(A=${M([["a", "b"], ["c", "d"]])}\), \(\operatorname{adj}A=${M([["d", "-b"], ["-c", "a"]])}\).`, S`\[A\operatorname{adj}A=${M([["ad-bc", "-ab+ab"], ["cd-cd", "-bc+ad"]])}=(ad-bc)I.\]`],
    ans: S`\((ad-bc)I\)` },
];

const PROBLEMS = [
  { level: 1, q: S`Find \(\operatorname{adj}${M([[5, 2], [3, 1]])}\).`, ans: S`\(${M([[1, -2], [-3, 5]])}\)` },
  { level: 1, q: S`Solve \(x_1+x_2=4,\ x_1-x_2=2\) by Cramer's rule.`, ans: S`\((3,1)\)` },
  { level: 1, q: S`Find the area of the parallelogram on \((4,0)\) and \((1,3)\).`, ans: S`\(12\)`, fig: vecs2([[[4, 0], "", "blue"], [[1, 3], "", "red"]], { xmin: -1, xmax: 6, ymin: -1, ymax: 4 }) },
  { level: 2, q: S`Find \(A^{-1}\) by the adjugate for \(A=${M([[1, 0, 1], [0, 1, 1], [1, 1, 0]])}\).`, ans: S`\(\tfrac12${M([[1, -1, 1], [-1, 1, 1], [1, 1, -1]])}\)`, fig: P(matPic([[1, 0, 1], [0, 1, 1], [1, 1, 0]], { label: "A" }), 2.2) },
  { level: 2, q: S`Use Cramer's rule to find \(x_3\) in \(${M([[1, 1, 1], [0, 1, 1], [0, 0, 1]])}\vec x=(6,5,3)\).`, ans: S`\(3\)` },
  { level: 2, q: S`Volume of the box on \((1,1,0)\), \((0,1,1)\), \((1,0,1)\)?`, ans: S`\(2\)`, fig: vecs3([[[1, 1, 0], "a₁"], [[0, 1, 1], "a₂"], [[1, 0, 1], "a₃"]]) },
  { level: 2, q: S`\(\det A=-3\). A region of area 4 is mapped by \(A\) to a region of area?`, ans: S`\(12\)` },
  { level: 2, q: S`Solve \(3x_1-x_2=5,\ x_1+2x_2=4\) by Cramer's rule.`, ans: S`\((2,1)\)` },
  { level: 3, space: 5, q: S`For which \(k\) is Cramer's rule applicable to \(${M([["k", 1], [4, "k"]])}\vec x=\vec b\)? Find \(x_1\) for \(\vec b=(1,1)\).`, ans: S`\(k\ne\pm2\); \(x_1=\dfrac{k-1}{k^2-4}\)` },
  { level: 3, space: 5, q: S`Prove \(\det(\operatorname{adj}A)=(\det A)^{n-1}\) for invertible \(n\times n\) \(A\).`, ans: S`take determinants of \(A\operatorname{adj}A=(\det A)I\)` },
  { level: 3, space: 5, q: S`Find the area of the triangle with vertices \((-1,0)\), \((3,2)\), \((1,5)\).`, ans: S`\(8\)`, fig: vecs2([[[3, 2], "", "blue", [-1, 0]], [[1, 5], "", "red", [-1, 0]]], { xmin: -2, xmax: 4, ymin: -1, ymax: 6 }, { segs: [{ pts: [[3, 2], [1, 5]], color: "#94a3b8", w: 1.5 }] }) },
  { level: 3, space: 5, q: S`Show that if \(A\) has integer entries and \(\det A=\pm1\), then \(A^{-1}\) has integer entries.`, ans: S`\(A^{-1}=\pm\operatorname{adj}A\), and cofactors are integers` },
  { level: 3, space: 5, q: S`Find the volume of the box on \((1,2,3)\), \((0,1,4)\), \((0,0,t)\), and the values of \(t\) making it flat.`, ans: S`\(|t|\); flat for \(t=0\)` },
];

export const WS = {
  code: "6.7",
  title: "Cramer's Rule, the Adjugate and Volume",
  bigideas: S`The adjugate (transposed cofactor matrix) satisfies \(A\operatorname{adj}A=(\det A)I\), giving the formula \(A^{-1}=\operatorname{adj}A/\det A\). Cramer's rule writes each unknown of \(A\vec x=\vec b\) as a ratio of determinants. Determinants also measure size: \(|\det|\) is the area or volume spanned by the columns, and the factor by which \(A\) scales areas and volumes.`,
  goals: ["Build the adjugate and use \\(A^{-1}=\\operatorname{adj}A/\\det A\\).", "Solve systems by Cramer's rule.", "Compute areas and volumes with determinants.", "Use \\(|\\det A|\\) as an area scale factor.", "Handle parameters with exact formulas."],
  curriculum: "Inverses and determinants — adjugate, Cramer's rule and volume",
  vocab: [["Cofactor matrix", "\\([C_{ij}]\\)"], ["Adjugate", "\\(C^T\\)"], ["\\(A_i(\\vec b)\\)", "column \\(i\\) replaced by \\(\\vec b\\)"], ["Cramer's rule", "\\(x_i=\\det A_i(\\vec b)/\\det A\\)"], ["Volume", "\\(|\\det|\\)"]],
  hook: S`Can you write the solution of a \(2\times2\) system as a single formula in its six numbers?`,
  concepts: NOTES,
  summary: [
    S`\(\operatorname{adj}A=C^T\); \(A\operatorname{adj}A=(\det A)I\).`,
    S`\(A^{-1}=\operatorname{adj}A/\det A\).`,
    S`\(x_i=\det A_i(\vec b)/\det A\).`,
    S`Area/volume \(=|\det|\) of the edge vectors.`,
    S`\(A\) scales areas by \(|\det A|\).`,
  ],
  tips: ["Transpose the cofactor matrix.", "Replace a column, never a row.", "Check det A ≠ 0 first.", "Take absolute values for size.", "Triangles are half parallelograms."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
