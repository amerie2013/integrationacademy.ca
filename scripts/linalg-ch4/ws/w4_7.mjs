// LINALG1 Worksheet 4.7 — Coordinates with Respect to a Basis
// Self-contained: complete notes, 9 worked examples with figures, 13 problems with an answer key.
import { svgT } from "./figT.mjs";
import { S, def, thm } from "./wkit.mjs";
import { vecs2, vecs3 } from "./fig5.mjs";
import { rowPic } from "./fig3.mjs";
import { am, steps } from "../bank/la.mjs";

const P = (svg, w = 4.6) => svgT(svg, w);
const M = (m) => am(m, false);
/** skewed basis grid with x reached as c1·b1 + c2·b2 */
const skew = (b1, b2, c, view, lx = "x") => {
  const segs = [];
  for (let k = -5; k <= 5; k++) {
    segs.push({ pts: [[k * b2[0] - 6 * b1[0], k * b2[1] - 6 * b1[1]], [k * b2[0] + 6 * b1[0], k * b2[1] + 6 * b1[1]]], color: "#bfdbfe", w: 1 });
    segs.push({ pts: [[k * b1[0] - 6 * b2[0], k * b1[1] - 6 * b2[1]], [k * b1[0] + 6 * b2[0], k * b1[1] + 6 * b2[1]]], color: "#fecaca", w: 1 });
  }
  const p = [c[0] * b1[0], c[0] * b1[1]], x = [p[0] + c[1] * b2[0], p[1] + c[1] * b2[1]];
  return vecs2([[b1, "b₁", "blue"], [b2, "b₂", "red"], [p, "", "blue", null, true], [x, "", "red", p, true], [x, lx, "green"]], view, { segs });
};

const NOTES = [
  { h: "1. Unique representation",
    lead: thm("uniqueness", S`If \(\mathcal B=\{\vec b_1,\dots,\vec b_n\}\) is a basis of \(\mathbb R^n\), every \(\vec x\) equals \(c_1\vec b_1+\dots+c_n\vec b_n\) for exactly one list \((c_1,\dots,c_n)\).`) + S`\pf{Spanning gives one list. Two lists give \(\sum(c_i-d_i)\vec b_i=\vec 0\); independence forces \(c_i=d_i\).}`,
    fig: skew([1, 2], [3, 1], [1, 2], { xmin: -1, xmax: 8, ymin: -1, ymax: 5 }, "x = (7, 4)"), w: 0.5 },
  { h: "2. The coordinate vector",
    lead: def("coordinates", S`For an \emph{ordered} basis \(\mathcal B\), the coordinate vector of \(\vec x\) is \([\vec x]_{\mathcal B}=(c_1,\dots,c_n)\) where \(\vec x=c_1\vec b_1+\dots+c_n\vec b_n\).`),
    fig: vecs3([[[1, 0, 1], "b₁"], [[0, 1, 0], "b₂"], [[1, 1, 0], "b₃"], [[3, 4, 1], "x", "violet"]]), w: 0.5,
    body: S`In the standard basis the coordinates of \(\vec x\) are its entries. Changing the order of \(\mathcal B\) permutes the coordinates.` },
  { h: "3. Computing coordinates",
    lead: S`With \(P_{\mathcal B}=[\,\vec b_1\ \cdots\ \vec b_n\,]\): \[\vec x=P_{\mathcal B}\,[\vec x]_{\mathcal B}.\] \textbf{Find} \([\vec x]_{\mathcal B}\): row reduce \([\,P_{\mathcal B}\mid\vec x\,]\) (unique solution, \(n\) pivots). \textbf{Rebuild} \(\vec x\): multiply \(P_{\mathcal B}[\vec x]_{\mathcal B}\).`,
    fig: P(rowPic([[[[1, 3], [2, 1]], { label: "P_B" }], [[[1], [2]], { label: "[x]_B" }], "=", [[[7], [4]], { label: "x" }]]), 3.4), w: 0.5 },
  { h: "4. Coordinates are linear",
    lead: thm("linearity", S`\([\vec x+\vec y]_{\mathcal B}=[\vec x]_{\mathcal B}+[\vec y]_{\mathcal B}\), \([c\vec x]_{\mathcal B}=c[\vec x]_{\mathcal B}\), and \([\vec b_i]_{\mathcal B}=\vec e_i\).`) + S`\pf{Add or scale the representations; by uniqueness the new weights are the coordinates.}`,
    fig: skew([2, 1], [0, 1], [1.5, 0.5], { xmin: -1, xmax: 4, ymin: -1, ymax: 3 }, "(3, 2)"), w: 0.5 },
  { h: "5. One vector, many coordinate systems",
    lead: S`The same point has different coordinates in different bases. To pass from \(\mathcal B\) to \(\mathcal C\): rebuild \(\vec x=P_{\mathcal B}[\vec x]_{\mathcal B}\), then solve \(P_{\mathcal C}\vec c=\vec x\).`,
    fig: skew([3, 1], [1, 2], [0.2, 0.4], { xmin: -1, xmax: 4, ymin: -1, ymax: 3 }, "(1, 1)"), w: 0.5 },
];

const EXAMPLES = [
  { title: "Coordinates in ℝ²", q: S`\(\mathcal B=\{(1,2),(3,1)\}\). Find \([\vec x]_{\mathcal B}\) for \(\vec x=(7,4)\).`,
    fig: skew([1, 2], [3, 1], [1, 2], { xmin: -1, xmax: 8, ymin: -1, ymax: 5 }, "x = (7, 4)"),
    steps: [...steps([[1, 3, 7], [2, 1, 4]], [
      [S`Clear below the first pivot.`, ["R2-2R1"]],
      [S`Make the second pivot 1.`, ["R2*-1/5"]],
      [S`Clear above it.`, ["R1-3R2"]],
    ], { intro: String.raw`Row reduce \([\,P_{\mathcal B}\mid\vec x\,]\)` }).steps, S`\(c_1=1,\ c_2=2\). Check: \((1,2)+2(3,1)=(7,4)\) ✓.`],
    ans: S`\([\vec x]_{\mathcal B}=(1,2)\)` },
  { title: "Rebuilding a vector", q: S`\(\mathcal B=\{(2,-1),(1,1)\}\), \([\vec x]_{\mathcal B}=(2,3)\). Find \(\vec x\).`,
    fig: skew([2, -1], [1, 1], [2, 3], { xmin: -1, xmax: 8, ymin: -3, ymax: 3 }, "x"),
    steps: [S`\(\vec x=2(2,-1)+3(1,1)=(4+3,\ -2+3)\).`, S`\(=(7,1)\). Matrix form: \(${M([[2, 1], [-1, 1]])}\begin{bmatrix}2\\3\end{bmatrix}=\begin{bmatrix}7\\1\end{bmatrix}\) ✓.`],
    ans: S`\(\vec x=(7,1)\)` },
  { title: "Coordinates in ℝ³", q: S`\(\mathcal B=\{(1,0,1),(0,1,0),(1,1,0)\}\). Find \([\vec x]_{\mathcal B}\) for \(\vec x=(3,4,1)\).`,
    fig: vecs3([[[1, 0, 1], "b₁"], [[0, 1, 0], "b₂"], [[1, 1, 0], "b₃"], [[3, 4, 1], "x", "violet"]]),
    steps: [...steps([[1, 0, 1, 3], [0, 1, 1, 4], [1, 0, 0, 1]], [
      [S`Clear column 1.`, ["R3-R1"]],
      [S`Make the third pivot 1.`, ["R3*-1"]],
      [S`Clear above it.`, ["R1-R3", "R2-R3"]],
    ], { intro: String.raw`Row reduce \([\,P_{\mathcal B}\mid\vec x\,]\)` }).steps, S`\([\vec x]_{\mathcal B}=(1,2,2)\). Check: \((1,0,1)+2(0,1,0)+2(1,1,0)=(3,4,1)\) ✓.`],
    ans: S`\((1,2,2)\)` },
  { title: "Fractional coordinates", q: S`\(\mathcal B=\{(3,1),(1,2)\}\). Find \([(1,1)]_{\mathcal B}\).`,
    fig: skew([3, 1], [1, 2], [0.2, 0.4], { xmin: -1, xmax: 4, ymin: -1, ymax: 3 }, "(1, 1)"),
    steps: [...steps([[3, 1, 1], [1, 2, 1]], [
      [S`Bring the 1 up.`, ["R1<->R2"]],
      [S`Clear below the pivot.`, ["R2-3R1"]],
      [S`Make the second pivot 1.`, ["R2*-1/5"]],
      [S`Clear above it.`, ["R1-2R2"]],
    ], { intro: String.raw`Row reduce \([\,P_{\mathcal B}\mid\vec x\,]\)` }).steps, S`\(c_1=\tfrac15,\ c_2=\tfrac25\). Check: \(\tfrac15(3,1)+\tfrac25(1,2)=(\tfrac35+\tfrac25,\ \tfrac15+\tfrac45)=(1,1)\) ✓.`],
    ans: S`\((\tfrac15,\tfrac25)\)` },
  { title: "The order matters", q: S`\([\vec x]_{\mathcal B}=(1,2)\) for \(\mathcal B=\{(1,2),(3,1)\}\). Find \([\vec x]_{\mathcal B'}\) for \(\mathcal B'=\{(3,1),(1,2)\}\).`,
    fig: skew([3, 1], [1, 2], [2, 1], { xmin: -1, xmax: 8, ymin: -1, ymax: 5 }, "x = (7, 4)"),
    steps: [S`\(\vec x=1(1,2)+2(3,1)=2(3,1)+1(1,2)\).`, S`In \(\mathcal B'\) the first basis vector is \((3,1)\), so its weight comes first.`],
    ans: S`\([\vec x]_{\mathcal B'}=(2,1)\)` },
  { title: "Coordinates of the basis vectors", q: S`For any basis \(\mathcal B=\{\vec b_1,\vec b_2,\vec b_3\}\), find \([\vec b_2]_{\mathcal B}\) and \([\vec 0]_{\mathcal B}\).`,
    fig: vecs3([[[1, 0, 1], "b₁"], [[0, 1, 0], "b₂", "red"], [[1, 1, 0], "b₃"]]),
    steps: [S`\(\vec b_2=0\vec b_1+1\vec b_2+0\vec b_3\), so \([\vec b_2]_{\mathcal B}=(0,1,0)=\vec e_2\).`, S`\(\vec 0=0\vec b_1+0\vec b_2+0\vec b_3\), so \([\vec 0]_{\mathcal B}=(0,0,0)\).`],
    ans: S`\(\vec e_2\) and \(\vec 0\)` },
  { title: "Linearity", q: S`\([\vec u]_{\mathcal B}=(2,-1,0)\), \([\vec v]_{\mathcal B}=(1,1,3)\). Find \([3\vec u-2\vec v]_{\mathcal B}\).`,
    fig: P(rowPic(["3", [[[2], [-1], [0]], { label: "[u]_B" }], "−2", [[[1], [1], [3]], { label: "[v]_B" }], "=", [[[4], [-5], [-6]], {}]]), 3.4),
    steps: [S`\([3\vec u-2\vec v]_{\mathcal B}=3[\vec u]_{\mathcal B}-2[\vec v]_{\mathcal B}\).`, S`\(=3(2,-1,0)-2(1,1,3)=(6-2,\ -3-2,\ 0-6)\).`],
    ans: S`\((4,-5,-6)\)` },
  { title: "Changing basis", q: S`\(\mathcal B=\{(1,0),(1,1)\}\), \(\mathcal C=\{(2,1),(0,1)\}\). If \([\vec x]_{\mathcal B}=(1,2)\), find \([\vec x]_{\mathcal C}\).`,
    fig: skew([2, 1], [0, 1], [1.5, 0.5], { xmin: -1, xmax: 4, ymin: -1, ymax: 3 }, "x = (3, 2)"),
    steps: [S`Rebuild \(\vec x\): \[\vec x=P_{\mathcal B}[\vec x]_{\mathcal B}=${am([[1, 1], [0, 1]], false)}${am([[1], [2]], false)}=${am([["1+2"], ["0+2"]], false)}=${am([[3], [2]], false)}.\]`,
      ...steps([[2, 0, 3], [1, 1, 2]], [
        [S`Solve \(P_{\mathcal C}\vec c=\vec x\). Make the first pivot 1.`, ["R1*1/2"]],
        [S`Clear below it.`, ["R2-R1"]],
      ], { intro: String.raw`Augmented matrix \([\,P_{\mathcal C}\mid\vec x\,]\)` }).steps,
      S`\([\vec x]_{\mathcal C}=(\tfrac32,\tfrac12)\). Check: \[${am([[2, 0], [1, 1]], false)}${am([["\\tfrac32"], ["\\tfrac12"]], false)}=${am([[3], ["\\tfrac32+\\tfrac12"]], false)}=${am([[3], [2]], false)}\ ✓\].`],
    ans: S`\([\vec x]_{\mathcal C}=(\tfrac32,\tfrac12)\)` },
  { title: "Why coordinates are unique", q: S`Prove that coordinates with respect to a basis are unique, and show they fail to be unique for the dependent set \(\{(1,0),(2,0)\}\).`,
    steps: [S`If \(\sum c_i\vec b_i=\sum d_i\vec b_i\), then \(\sum(c_i-d_i)\vec b_i=\vec 0\), and independence gives \(c_i=d_i\).`, S`For \(\{(1,0),(2,0)\}\): \((2,0)=2(1,0)+0(2,0)=0(1,0)+1(2,0)\) — two different weight lists.`],
    ans: S`independence gives uniqueness; dependent sets do not` },
];

const PROBLEMS = [
  { level: 1, q: S`\(\mathcal B=\{(1,0),(0,2)\}\). Find \([(3,4)]_{\mathcal B}\).`, ans: S`\((3,2)\)` },
  { level: 1, q: S`\(\mathcal B=\{(1,1),(0,1)\}\), \([\vec x]_{\mathcal B}=(2,5)\). Find \(\vec x\).`, ans: S`\((2,7)\)` },
  { level: 1, q: S`For a basis \(\{\vec b_1,\vec b_2,\vec b_3\}\), what is \([\vec b_3]_{\mathcal B}\)?`, ans: S`\((0,0,1)\)` },
  { level: 2, q: S`\(\mathcal B=\{(1,1),(2,3)\}\). Find \([(4,5)]_{\mathcal B}\).`, ans: S`\((2,1)\)`, fig: skew([1, 1], [2, 3], [2, 1], { xmin: -1, xmax: 5, ymin: -1, ymax: 6 }, "(4, 5)") },
  { level: 2, q: S`\(\mathcal B=\{(1,0,0),(1,2,0),(0,1,1)\}\). Find \([(2,3,1)]_{\mathcal B}\).`, ans: S`\((1,1,1)\)`, fig: vecs3([[[1, 0, 0], "b₁"], [[1, 2, 0], "b₂"], [[0, 1, 1], "b₃"], [[2, 3, 1], "x", "violet"]]) },
  { level: 2, q: S`\(\mathcal B=\{(1,-1,0),(0,1,1),(1,0,1)\}\), \([\vec x]_{\mathcal B}=(1,2,-1)\). Find \(\vec x\).`, ans: S`\((0,1,1)\)` },
  { level: 2, q: S`\([\vec x]_{\mathcal B}=(1,2)\), \([\vec y]_{\mathcal B}=(0,-1)\). Find \([\vec x+3\vec y]_{\mathcal B}\).`, ans: S`\((1,-1)\)` },
  { level: 2, q: S`\(\mathcal B=\{(1,2),(2,1)\}\). Find \([(1,-1)]_{\mathcal B}\).`, ans: S`\((-1,1)\)`, fig: skew([1, 2], [2, 1], [-1, 1], { xmin: -2, xmax: 3, ymin: -3, ymax: 3 }, "(1, −1)") },
  { level: 3, space: 5, q: S`\(\vec b_1=(1,0)\). Find \(\vec b_2\) so that \([(4,6)]_{\mathcal B}=(2,2)\) for \(\mathcal B=\{\vec b_1,\vec b_2\}\), and check it is a basis.`, ans: S`\(\vec b_2=(1,3)\); not parallel to \((1,0)\)` },
  { level: 3, space: 5, q: S`\(\mathcal B=\{(1,2),(0,1)\}\), \(\mathcal C=\{(1,1),(1,0)\}\), \([\vec x]_{\mathcal B}=(2,-1)\). Find \([\vec x]_{\mathcal C}\).`, ans: S`\(\vec x=(2,3)\); \([\vec x]_{\mathcal C}=(3,-1)\)` },
  { level: 3, space: 5, q: S`Prove \([\vec x+\vec y]_{\mathcal B}=[\vec x]_{\mathcal B}+[\vec y]_{\mathcal B}\) and \([c\vec x]_{\mathcal B}=c[\vec x]_{\mathcal B}\).`, ans: S`add/scale the representations; use uniqueness` },
  { level: 3, space: 5, q: S`Explain why "coordinates" with respect to \(\{(1,1),(2,2),(0,1)\}\) are not well defined.`, ans: S`the set is dependent: e.g. \((2,2)\) has weights \((2,0,0)\) and \((0,1,0)\)` },
  { level: 3, space: 5, q: S`\(\mathcal B=\{(2,1),(1,0)\}\). For which \(k\) does \((k,1)\) have \([\,(k,1)\,]_{\mathcal B}=(1,1)\)?`, ans: S`\(k=3\)`, fig: skew([2, 1], [1, 0], [1, 1], { xmin: -1, xmax: 4, ymin: -1, ymax: 2 }, "(k, 1)") },
];

export const WS = {
  code: "4.7",
  title: "Coordinates with Respect to a Basis",
  bigideas: S`A basis is a coordinate system: every vector is a combination of the basis vectors in exactly one way, and those weights are its coordinates \([\vec x]_{\mathcal B}\). Finding them is one linear system \(P_{\mathcal B}\vec c=\vec x\); rebuilding \(\vec x\) is one product \(P_{\mathcal B}[\vec x]_{\mathcal B}\). Coordinates respect sums and multiples, and change from basis to basis.`,
  goals: ["Explain why coordinates in a basis are unique.", "Find \\([\\vec x]_{\\mathcal B}\\) by row reduction.", "Rebuild \\(\\vec x\\) from its coordinates.", "Use linearity of coordinates.", "Move between two bases."],
  curriculum: "Span and linear independence — coordinates relative to a basis",
  vocab: [["Ordered basis", "a basis with a fixed order"], ["Coordinates", "the unique weights"], ["\\([\\vec x]_{\\mathcal B}\\)", "the coordinate vector"], ["\\(P_{\\mathcal B}\\)", "basis vectors as columns"], ["\\(\\vec x=P_{\\mathcal B}[\\vec x]_{\\mathcal B}\\)", "rebuilding \\(\\vec x\\)"]],
  hook: S`On a city map the streets are not north–south and east–west but slanted. How would you give directions to a point using only "blocks along street 1" and "blocks along street 2"?`,
  concepts: NOTES,
  summary: [
    S`Basis \(\Rightarrow\) unique representation.`,
    S`\([\vec x]_{\mathcal B}=(c_1,\dots,c_n)\) with \(\vec x=\sum c_i\vec b_i\).`,
    S`Find: solve \([\,P_{\mathcal B}\mid\vec x\,]\).`,
    S`Rebuild: \(\vec x=P_{\mathcal B}[\vec x]_{\mathcal B}\).`,
    S`Coordinates are linear; \([\vec b_i]_{\mathcal B}=\vec e_i\).`,
  ],
  tips: ["Solve, don't multiply, to find coordinates.", "Keep the basis order.", "Check by rebuilding x.", "Fractions are normal.", "Go through x to change bases."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
