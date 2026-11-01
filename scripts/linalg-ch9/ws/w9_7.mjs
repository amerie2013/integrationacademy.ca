// LINALG1 Worksheet 9.7 — Least-Squares Problems
// Self-contained: complete notes, 9 worked examples with figures, 13 problems with an answer key.
import { svgT } from "./figT.mjs";
import { S, def, thm } from "./wkit.mjs";
import { rowPic, matPic } from "./fig3.mjs";
import { lsqLine, projPlane } from "./fig9.mjs";
import { am, steps, autoPlan } from "../bank/la.mjs";

const P = (svg, w = 4.4) => svgT(svg, w);
const M = (m) => am(m, false);
const C = (...a) => am(a.map((x) => [x]), false);
const T = (v) => M([v]);
const N3 = [[4, 6, 14, 7], [6, 14, 36, 14], [14, 36, 98, 40]];

const NOTES = [
  { h: "1. Least-squares solutions",
    lead: def("least squares", S`\(\hat x\) is a least-squares solution of \(A\vec x=\vec b\) if \(|\vec b-A\hat x|\le|\vec b-A\vec x|\) for all \(\vec x\). The least-squares error is \(|\vec b-A\hat x|\).`) + S`Geometrically, \(A\hat x\) is the projection of \(\vec b\) onto \(\operatorname{Col}A\).`,
    fig: projPlane([1, 1, 1], [1, -1, 1], [2, 0, 4], [3, 0, 3], { w: 4.2, names: ["b", "Ax̂"] }), w: 0.5 },
  { h: "2. The normal equations",
    lead: thm("normal equations", S`The least-squares solutions are the solutions of \(A^TA\vec x=A^T\vec b\); with independent columns there is exactly one, \(\hat x=(A^TA)^{-1}A^T\vec b\).`) + S`\pf{\(A\hat x\) is closest to \(\vec b\iff\vec b-A\hat x\perp\operatorname{Col}A\iff A^T(\vec b-A\hat x)=\vec 0\).}`,
    fig: P(rowPic([[[["Aᵀ"]], {}], [[["b − Ax̂"]], {}], "=", [[[0], [0]], {}]]), 2.8), w: 0.5 },
  { h: "3. Fitting a line",
    lead: S`For data \((x_i,y_i)\), the least-squares line \(y=\beta_0+\beta_1x\) solves \(X^TX\vec\beta=X^T\vec y\), where \(X\) has rows \((1,x_i)\). Then \(X^TX=${M([["n", "\\sum x_i"], ["\\sum x_i", "\\sum x_i^2"]])}\) and \(X^T\vec y=(\sum y_i,\ \sum x_iy_i)\).`,
    fig: lsqLine([[-2, 0], [-1, 1], [0, 1], [1, 2], [2, 4]], 1.6, 0.9, { w: 4 }), w: 0.5 },
  { h: "4. Residuals",
    lead: S`The residuals \(e_i=y_i-(\beta_0+\beta_1x_i)\) form \(\vec e=\vec y-X\vec\beta\). The line minimises \(\sum e_i^2\) (SSE). Since \(X^T\vec e=\vec 0\), the residuals sum to zero and are uncorrelated with the \(x_i\).`,
    fig: lsqLine([[1, 1], [2, 3], [3, 4]], -1 / 3, 1.5, { w: 4 }), w: 0.5 },
  { h: "5. Other models",
    lead: S`Any model linear in its unknown coefficients works the same way: for a parabola \(y=\beta_0+\beta_1x+\beta_2x^2\) the rows of \(X\) are \((1,x_i,x_i^2)\).`,
    fig: P(matPic([[1, "xᵢ", "xᵢ²"]], { label: "a row of X" }), 2), w: 0.55 },
  { h: "6. Least squares with QR",
    lead: S`If \(A=QR\), the normal equations reduce to \(R\hat x=Q^T\vec b\) (since \(A^TA=R^TR\), \(A^T\vec b=R^TQ^T\vec b\)) — a triangular system, numerically more stable than forming \(A^TA\).`,
    fig: P(matPic([["r₁₁", "r₁₂"], [0, "r₂₂"]], { label: "R x̂ = Qᵀb" }), 2), w: 0.55 },
];

const EXAMPLES = [
  { title: "An inconsistent system", q: S`Find the least-squares solution and error of \(${M([[1, 1], [1, -1], [1, 1]])}\vec x=(2,0,4)\).`,
    fig: projPlane([1, 1, 1], [1, -1, 1], [2, 0, 4], [3, 0, 3], { w: 3.8, names: ["b", "Ax̂"] }),
    steps: [S`\(A^TA=${M([[3, 1], [1, 3]])}\), \(A^T\vec b=${C("2+0+4", "2-0+4")}=${C(6, 6)}\).`, ...steps([[3, 1, 6], [1, 3, 6]], [[S`Bring the 1 up.`, ["R1<->R2"]], [S`Clear column 1.`, ["R2-3R1"]], [S`Scale.`, ["R2*-1/8"]], [S`Clear column 2 above.`, ["R1-3R2"]]], { intro: S`Solve \([A^TA\mid A^T\vec b]\)` }).steps, S`\(\hat x=(\tfrac32,\tfrac32)\), \(A\hat x=(3,0,3)\), \(\vec e=(-1,0,1)\), \(A^T\vec e=(-1+0+1,\ -1-0+1)=\vec 0\) ✓. Error \(\sqrt2\).`],
    ans: S`\(\hat x=(\tfrac32,\tfrac32)\), error \(\sqrt2\)` },
  { title: "A line through three points", q: S`Find the least-squares line through \((1,1),(2,3),(3,4)\).`,
    fig: lsqLine([[1, 1], [2, 3], [3, 4]], -1 / 3, 1.5, { w: 3.8 }),
    steps: [S`\(X^TX=${M([[3, 6], [6, 14]])}\), \(X^T\vec y=${C("1+3+4", "1+6+12")}=${C(8, 19)}\).`, S`\(${am([[3, 6, 8], [6, 14, 19]])}\xrightarrow{R_2\to R_2-2R_1}${am([[3, 6, 8], [0, 2, 3]])}\): \(\beta_1=\tfrac32\), \(3\beta_0=8-9\Rightarrow\beta_0=-\tfrac13\).`, S`\(y=-\tfrac13+\tfrac32x\); residuals \((-\tfrac16,\tfrac13,-\tfrac16)\), sum 0 ✓.`],
    ans: S`\(y=-\tfrac13+\tfrac32x\)` },
  { title: "Centred data", q: S`Fit a line to \((-2,0),(-1,1),(0,1),(1,2),(2,4)\).`,
    fig: lsqLine([[-2, 0], [-1, 1], [0, 1], [1, 2], [2, 4]], 1.6, 0.9, { w: 3.8 }),
    steps: [S`\(\sum x_i=0\), so \(X^TX=${M([[5, 0], [0, 10]])}\) is diagonal; \(X^T\vec y=(8,\ 0-1+0+2+8)=(8,9)\).`, S`\(\beta_0=\tfrac85=1.6\), \(\beta_1=\tfrac9{10}=0.9\): \(y=1.6+0.9x\).`, S`Residuals \((0.2,0.3,-0.6,-0.5,0.6)\), SSE \(=0.04+0.09+0.36+0.25+0.36=1.1\).`],
    ans: S`\(y=1.6+0.9x\), SSE \(1.1\)` },
  { title: "Least squares by QR", q: S`\(A=${M([[2, 4], [1, -1], [2, 1]])}=QR\), \(Q=\tfrac13${M([[2, 2], [1, -2], [2, -1]])}\), \(R=${M([[3, 3], [0, 3]])}\). Solve \(A\vec x=(3,0,3)\) in the least-squares sense.`,
    fig: P(matPic([[3, 3], [0, 3]], { label: "R" }), 1.6),
    steps: [S`\(Q^T\vec b=\tfrac13${M([[2, 1, 2], [2, -2, -1]])}${C(3, 0, 3)}=\tfrac13${C(12, 3)}=${C(4, 1)}\).`, S`\(3\hat x_2=1\Rightarrow\hat x_2=\tfrac13\); \(3\hat x_1+1=4\Rightarrow\hat x_1=1\).`, S`Check: \(A^TA=${M([[9, 9], [9, 18]])}\), \(A^T\vec b=(12,15)\); \(${M([[9, 9], [9, 18]])}${C(1, "\\tfrac13")}=${C(12, 15)}\) ✓.`],
    ans: S`\((1,\tfrac13)\)` },
  { title: "Fitting a parabola", q: S`Fit \(y=\beta_0+\beta_1x+\beta_2x^2\) to \((0,2),(1,0),(2,1),(3,4)\).`,
    fig: P(matPic([[1, 0, 0], [1, 1, 1], [1, 2, 4], [1, 3, 9]], { label: "X" }), 2),
    steps: [S`\(X^TX=${M([[4, 6, 14], [6, 14, 36], [14, 36, 98]])}\), \(X^T\vec y=${C("2+0+1+4", "0+0+2+12", "0+0+4+36")}=${C(7, 14, 40)}\).`, ...steps(N3, autoPlan(N3, { cols: 3 }), { intro: S`Solve` }).steps, S`\(y=1.95-3.05x+1.25x^2\); predictions \((1.95,0.15,0.85,4.05)\).`],
    ans: S`\(y=1.95-3.05x+1.25x^2\)` },
  { title: "Non-unique least squares", q: S`Find all least-squares solutions of \(${M([[1, 1], [1, 1], [1, 1]])}\vec x=(1,2,6)\).`,
    fig: P(matPic([[3, 3], [3, 3]], { label: "AᵀA singular" }), 1.6),
    steps: [S`\(A^TA=${M([[3, 3], [3, 3]])}\), \(A^T\vec b=(9,9)\): \(x_1+x_2=3\).`, S`\(\hat x=(3,0)+t(-1,1)\); every one gives \(A\hat x=(3,3,3)\).`],
    ans: S`\(x_1+x_2=3\)` },
  { title: "Prediction", q: S`Use the line of Example 3 to predict \(y\) at \(x=4\).`,
    fig: lsqLine([[-2, 0], [-1, 1], [0, 1], [1, 2], [2, 4]], 1.6, 0.9, { w: 3.8 }),
    steps: [S`\(y=1.6+0.9(4)=5.2\).`],
    ans: S`\(5.2\)` },
  { title: "An exact fit", q: S`Show that the least-squares line through \((0,1),(1,3),(2,5)\) passes through all three points.`,
    fig: lsqLine([[0, 1], [1, 3], [2, 5]], 1, 2, { w: 3.8 }),
    steps: [S`\(X^TX=${M([[3, 3], [3, 5]])}\), \(X^T\vec y=(9,13)\): \(${am([[3, 3, 9], [3, 5, 13]])}\to${am([[3, 3, 9], [0, 2, 4]])}\), \(\beta_1=2\), \(\beta_0=1\).`, S`\(y=1+2x\) gives 1, 3, 5: residuals 0 — the data were collinear (\(\vec y\in\operatorname{Col}X\)).`],
    ans: S`\(y=1+2x\), error 0` },
  { title: "Residuals sum to zero", q: S`Prove that the residuals of a least-squares line with intercept add to 0.`,
    steps: [S`\(X^T\vec e=\vec 0\); the first row of \(X^T\) is \((1,\dots,1)\).`, S`So \(\sum e_i=0\).`],
    ans: S`first entry of \(X^T\vec e=\vec 0\)` },
];

const PROBLEMS = [
  { level: 1, q: S`Write the design matrix for fitting a line to \((1,2),(3,5),(4,4)\).`, ans: S`\(${M([[1, 1], [1, 3], [1, 4]])}\)` },
  { level: 1, q: S`Write the normal equations for \(A=${M([[1, 0], [0, 1], [1, 1]])}\), \(\vec b=(1,1,0)\).`, ans: S`\(${M([[2, 1], [1, 2]])}\hat x=(1,1)\)`, fig: P(matPic([[2, 1], [1, 2]], { label: "AᵀA" }), 1.6) },
  { level: 1, q: S`If \(\vec b\in\operatorname{Col}A\), what is the least-squares error?`, ans: S`\(0\)` },
  { level: 2, q: S`Solve the normal equations of the previous problem and give the error.`, ans: S`\(\hat x=(\tfrac13,\tfrac13)\), \(\vec e=(\tfrac23,\tfrac23,-\tfrac23)\), error \(\tfrac2{\sqrt3}\)` },
  { level: 2, q: S`Fit a line to \((0,0),(1,1),(2,1),(3,2)\).`, ans: S`\(y=0.1+0.6x\)`, fig: lsqLine([[0, 0], [1, 1], [2, 1], [3, 2]], 0.1, 0.6, { w: 3.2 }) },
  { level: 2, q: S`Fit a line to \((-1,1),(0,2),(1,4)\).`, ans: S`\(y=\tfrac73+\tfrac32x\)` },
  { level: 2, q: S`Fit \(y=\beta x\) (no intercept) to \((1,2),(2,3),(3,7)\).`, ans: S`\(\beta=\tfrac{2+6+21}{14}=\tfrac{29}{14}\)`, fig: P(matPic([[1], [2], [3]], { label: "X" }), 1.2) },
  { level: 2, q: S`Use \(R=${M([[2, 1], [0, 1]])}\), \(Q^T\vec b=(5,2)\) to find \(\hat x\).`, ans: S`\((\tfrac32,2)\)` },
  { level: 3, space: 5, q: S`Prove that a solution of the normal equations minimises \(|\vec b-A\vec x|\).`, ans: S`Pythagoras: \(|\vec b-A\vec x|^2=|\vec e|^2+|A(\hat x-\vec x)|^2\)` },
  { level: 3, space: 5, q: S`Fit \(y=\beta_0+\beta_1x+\beta_2x^2\) to \((-1,2),(0,1),(1,2),(2,5)\).`, ans: S`\(y=1+0x+1x^2\) (exact)`, fig: P(matPic([[1, -1, 1], [1, 0, 0], [1, 1, 1], [1, 2, 4]], { label: "X" }), 2) },
  { level: 3, space: 5, q: S`Show that the least-squares line passes through \((\bar x,\bar y)\).`, ans: S`first normal equation: \(n\beta_0+\beta_1\sum x_i=\sum y_i\)` },
  { level: 3, space: 5, q: S`Explain why \(\hat x\) is unique exactly when the columns of \(A\) are independent.`, ans: S`\(A^TA\) invertible \(\iff\) independent columns` },
  { level: 3, space: 5, q: S`Derive \(R\hat x=Q^T\vec b\) from the normal equations when \(A=QR\).`, ans: S`\(R^TR\hat x=R^TQ^T\vec b\), cancel \(R^T\)`, fig: P(matPic([["RᵀR x̂ = RᵀQᵀb"]], {}), 2.2) },
];

export const WS = {
  code: "9.7",
  title: "Least-Squares Problems",
  bigideas: S`When \(A\vec x=\vec b\) has no solution, the best substitute makes \(A\hat x\) the projection of \(\vec b\) onto \(\operatorname{Col}A\): solve \(A^TA\hat x=A^T\vec b\). This fits lines and curves to data, and QR solves it stably as \(R\hat x=Q^T\vec b\).`,
  goals: ["Define least-squares solutions.", "Solve the normal equations.", "Fit lines and parabolas.", "Compute residuals and SSE.", "Use QR."],
  curriculum: "Orthogonality — least squares",
  vocab: [["\\(\\hat x\\)", "least-squares solution"], ["Normal equations", "\\(A^TA\\hat x=A^T\\vec b\\)"], ["Residual", "\\(\\vec b-A\\hat x\\)"], ["Design matrix", "rows \\((1,x_i)\\)"], ["SSE", "\\(\\sum e_i^2\\)"]],
  hook: S`Measured data never line up perfectly. Which line is the best compromise, and how do you compute it?`,
  concepts: NOTES,
  summary: [S`\(A^TA\hat x=A^T\vec b\).`, S`\(A\hat x=\operatorname{proj}_{\operatorname{Col}A}\vec b\).`, S`\(A^T(\vec b-A\hat x)=\vec 0\).`, S`Line: rows \((1,x_i)\).`, S`QR: \(R\hat x=Q^T\vec b\).`],
  tips: ["Form A-transpose A first.", "Include the column of 1s.", "Check residuals sum to 0.", "Vertical residuals, not perpendicular.", "Error is |b − Ax̂|."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
