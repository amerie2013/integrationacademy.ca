// LINALG1 Worksheet 7.2 — Linear Transformations
// Self-contained: complete notes, 9 worked examples with figures, 13 problems with an answer key.
import { svgT } from "./figT.mjs";
import { S, def, thm } from "./wkit.mjs";
import { rowPic, matPic } from "./fig3.mjs";
import { vecs2 } from "./fig5.mjs";
import { ptMap, sqMap } from "./fig7.mjs";
import { am } from "../bank/la.mjs";

const P = (svg, w = 4.4) => svgT(svg, w);
const M = (m) => am(m, false);
const C = (...a) => am(a.map((x) => [x]), false);

const NOTES = [
  { h: "1. The definition",
    lead: def("linear transformation", S`\(T:\mathbb R^n\to\mathbb R^m\) is \emph{linear} if for all \(\vec u,\vec v\in\mathbb R^n\) and all scalars \(c\): (i) \(T(\vec u+\vec v)=T(\vec u)+T(\vec v)\); (ii) \(T(c\vec u)=cT(\vec u)\).`) + S`Both conditions must hold for \emph{every} choice of vectors and scalars.`,
    fig: vecs2([[[2, 0], "u", "blue"], [[1, 2], "v", "red"], [[3, 2], "u + v", "violet", null, true]], { xmin: -1, xmax: 4, ymin: -1, ymax: 3 }, { segs: [{ pts: [[2, 0], [3, 2]], color: "gray", w: 1.2 }, { pts: [[1, 2], [3, 2]], color: "gray", w: 1.2 }] }), w: 0.55 },
  { h: "2. Matrix maps are linear",
    lead: thm("matrix maps", S`For every \(m\times n\) matrix \(A\), \(T(\vec x)=A\vec x\) is linear: \(A(\vec u+\vec v)=A\vec u+A\vec v\) and \(A(c\vec u)=cA\vec u\).`) + S`\pf{Entry \(i\) of \(A(\vec u+\vec v)\) is \(\sum_j a_{ij}(u_j+v_j)=\sum_j a_{ij}u_j+\sum_j a_{ij}v_j\); entry \(i\) of \(A(c\vec u)\) is \(\sum_j a_{ij}cu_j=c\sum_ja_{ij}u_j\).}`,
    fig: P(rowPic([[[[1, 2], [3, 4]], { label: "A" }], [[["u₁ + v₁"], ["u₂ + v₂"]], { label: "u + v" }], "=", [[["Au"]], {}], "+", [[["Av"]], {}]]), 4.4), w: 0.5 },
  { h: "3. Consequences",
    lead: thm("zero and superposition", S`If \(T\) is linear: \(T(\vec 0)=\vec 0\), \(T(-\vec u)=-T(\vec u)\), and \[T(c_1\vec v_1+\dots+c_k\vec v_k)=c_1T(\vec v_1)+\dots+c_kT(\vec v_k)=\big[T(\vec v_1)\ \cdots\ T(\vec v_k)\big]${C("c_1", "\\vdots", "c_k")}.\]`) + S`\pf{\(T(\vec 0)=T(0\vec 0)=0T(\vec 0)=\vec 0\); \(T(-\vec u)=T((-1)\vec u)=-T(\vec u)\); superposition by (i) and (ii) repeatedly.}`,
    fig: P(rowPic([[[["T(v₁)", "T(v₂)"]], { label: "images as columns" }], [[["c₁"], ["c₂"]], { label: "weights" }]]), 3.6), w: 0.5 },
  { h: "4. Proving a map is not linear",
    lead: S`One counterexample is enough. First test \(T(\vec 0)\): a nonzero value ends the question. Otherwise look for a product of coordinates, a power, an absolute value or a constant and choose vectors that expose it, e.g. \(T(2\vec u)\) versus \(2T(\vec u)\).`,
    fig: vecs2([[[2, 1], "u", "blue"], [[4, 2], "2u", "blue", null, true], [[4, 1], "T(u) = (u₁², u₂)", "red"], [[16, 2], "", "red", null, true]], { xmin: -1, xmax: 6, ymin: -1, ymax: 3 }), w: 0.5 },
  { h: "5. A linear map is decided by T(e₁), …, T(eₙ)",
    lead: S`Every \(\vec x=x_1\vec e_1+\dots+x_n\vec e_n\), so by superposition \[T(\vec x)=x_1T(\vec e_1)+\dots+x_nT(\vec e_n)=\big[T(\vec e_1)\ \cdots\ T(\vec e_n)\big]\vec x.\] Knowing the images of the standard vectors (or of any basis) determines \(T\) everywhere.`,
    fig: sqMap([[2, -1], [1, 1]], { w: 4, names: ["T(e₁)", "T(e₂)"] }), w: 0.5 },
  { h: "6. Rank-one maps and functionals",
    lead: S`Dot products give linear maps: \(T(\vec x)=\vec a\cdot\vec x=\vec a^T\vec x\) (a \(1\times n\) matrix) and \(T(\vec x)=(\vec a\cdot\vec x)\vec b=(\vec b\vec a^T)\vec x\), whose matrix \(\vec b\vec a^T\) has every column a multiple of \(\vec b\).`,
    fig: P(rowPic([[[[1], [3]], { label: "b" }], [[[2, -1, 1]], { label: "aᵀ" }], "=", [[[2, -1, 1], [6, -3, 3]], { label: "baᵀ" }]]), 4), w: 0.5 },
];

const EXAMPLES = [
  { title: "Proving linearity in matrix form", q: S`Show \(T(x_1,x_2)=(3x_1-x_2,\ x_1+x_2,\ 2x_2)\) is linear and check (i) on \(\vec u=(1,2)\), \(\vec v=(2,-1)\).`,
    fig: P(matPic([[3, -1], [1, 1], [0, 2]], { label: "A" }), 1.8),
    steps: [S`\[T(\vec x)=${C("3x_1-x_2", "x_1+x_2", "0x_1+2x_2")}=${M([[3, -1], [1, 1], [0, 2]])}${C("x_1", "x_2")}=A\vec x,\] so \(T(\vec u+\vec v)=A\vec u+A\vec v\) and \(T(c\vec u)=cA\vec u\): linear.`,
      S`\[A\vec u=${M([[3, -1], [1, 1], [0, 2]])}${C(1, 2)}=${C("3-2", "1+2", "0+4")}=${C(1, 3, 4)},\qquad A\vec v=${M([[3, -1], [1, 1], [0, 2]])}${C(2, -1)}=${C("6+1", "2-1", "0-2")}=${C(7, 1, -2)}.\]`,
      S`\[A(\vec u+\vec v)=${M([[3, -1], [1, 1], [0, 2]])}${C(3, 1)}=${C("9-1", "3+1", "0+2")}=${C(8, 4, 2)}=${C(1, 3, 4)}+${C(7, 1, -2)}\ \checkmark\]`],
    ans: S`\(T(\vec x)=${M([[3, -1], [1, 1], [0, 2]])}\vec x\): linear` },
  { title: "A shifted map", q: S`Is \(T(x_1,x_2)=(x_1-2,\ x_2)\) linear?`,
    fig: vecs2([[[-2, 0], "T(0) = (−2, 0)", "red"]], { xmin: -3, xmax: 2, ymin: -2, ymax: 2 }),
    steps: [S`\(T${C(0, 0)}=${C("0-2", 0)}=${C(-2, 0)}\ne\vec 0\).`, S`A linear map sends \(\vec 0\) to \(\vec 0\), so \(T\) is not linear. (It is \(I\vec x+(-2,0)\): a matrix map plus a shift.)`],
    ans: S`no` },
  { title: "A square", q: S`Is \(T(x_1,x_2)=(x_1^2,\ x_2)\) linear?`,
    fig: vecs2([[[1, 0], "u", "blue"], [[3, 0], "3u", "blue", null, true]], { xmin: -1, xmax: 4, ymin: -1, ymax: 2 }),
    steps: [S`\(T(\vec 0)=\vec 0\) — test (ii). Take \(\vec u=(1,0)\), \(c=3\): \[T(3\vec u)=T${C(3, 0)}=${C(9, 0)},\qquad 3T(\vec u)=3${C(1, 0)}=${C(3, 0)}.\]`, S`They differ, so (ii) fails: not linear.`],
    ans: S`no: \(T(3,0)\ne3T(1,0)\)` },
  { title: "An absolute value", q: S`Is \(T(x_1,x_2)=(|x_1|,\ x_2)\) linear?`,
    fig: vecs2([[[1, 0], "u", "blue"], [[-1, 0], "v", "red"]], { xmin: -2, xmax: 2, ymin: -1, ymax: 1 }),
    steps: [S`Take \(\vec u=(1,0)\), \(\vec v=(-1,0)\): \[T(\vec u)+T(\vec v)=${C(1, 0)}+${C(1, 0)}=${C(2, 0)},\qquad T(\vec u+\vec v)=T${C(0, 0)}=${C(0, 0)}.\]`, S`(i) fails: not linear.`],
    ans: S`no` },
  { title: "Superposition into ℝ³", q: S`\(T\) is linear, \(T(\vec u)=(2,0,1)\), \(T(\vec v)=(1,-1,3)\). Find \(T(2\vec u+3\vec v)\).`,
    fig: P(rowPic([[[[2, 1], [0, -1], [1, 3]], { label: "[T(u) T(v)]" }], [[[2], [3]], { label: "weights" }]]), 3),
    steps: [S`\[T(2\vec u+3\vec v)=\big[T(\vec u)\ T(\vec v)\big]${C(2, 3)}=${M([[2, 1], [0, -1], [1, 3]])}${C(2, 3)}=${C("4+3", "0-3", "2+9")}=${C(7, -3, 11)}.\]`],
    ans: S`\((7,-3,11)\)` },
  { title: "From T(e₁), T(e₂)", q: S`\(T(\vec e_1)=(3,1)\), \(T(\vec e_2)=(-1,2)\). Find a formula for \(T\) and \(T(2,5)\).`,
    fig: sqMap([[3, -1], [1, 2]], { w: 3.8, names: ["T(e₁)", "T(e₂)"] }),
    steps: [S`\[T(\vec x)=x_1${C(3, 1)}+x_2${C(-1, 2)}=${M([[3, -1], [1, 2]])}${C("x_1", "x_2")}=${C("3x_1-x_2", "x_1+2x_2")}.\]`, S`\[T${C(2, 5)}=${M([[3, -1], [1, 2]])}${C(2, 5)}=${C("6-5", "2+10")}=${C(1, 12)}.\]`],
    ans: S`\(T(\vec x)=(3x_1-x_2,\ x_1+2x_2)\), \(T(2,5)=(1,12)\)` },
  { title: "Images of another pair", q: S`\(T\) is linear, \(T(1,0)=(1,1)\), \(T(1,1)=(4,0)\). Find \(T(2,3)\).`,
    fig: vecs2([[[1, 0], "(1, 0)", "blue"], [[1, 1], "(1, 1)", "red"], [[0, 1], "e₂ = (1,1) − (1,0)", "violet", null, true]], { xmin: -1, xmax: 2, ymin: -1, ymax: 2 }),
    steps: [S`\(\vec e_2=(1,1)-(1,0)\), so \(T(\vec e_2)=${C(4, 0)}-${C(1, 1)}=${C(3, -1)}\).`, S`\[T${C(2, 3)}=\big[T(\vec e_1)\ T(\vec e_2)\big]${C(2, 3)}=${M([[1, 3], [1, -1]])}${C(2, 3)}=${C("2+9", "2-3")}=${C(11, -1)}.\]`],
    ans: S`\((11,-1)\)` },
  { title: "A rank-one map", q: S`Find the matrix of \(T(\vec x)=(\vec a\cdot\vec x)\vec b\) with \(\vec a=(2,-1,1)\), \(\vec b=(1,3)\), and \(T(1,1,1)\).`,
    fig: P(rowPic([[[[1], [3]], { label: "b" }], [[[2, -1, 1]], { label: "aᵀ" }]]), 2.6),
    steps: [S`\(T(\vec x)=\vec b(\vec a^T\vec x)=(\vec b\vec a^T)\vec x\): \[\vec b\vec a^T=${C(1, 3)}${M([[2, -1, 1]])}=${M([[2, -1, 1], [6, -3, 3]])}.\]`, S`\[T${C(1, 1, 1)}=${M([[2, -1, 1], [6, -3, 3]])}${C(1, 1, 1)}=${C("2-1+1", "6-3+3")}=${C(2, 6)}.\] Directly: \(\vec a\cdot(1,1,1)=2\) and \(2\vec b=(2,6)\) ✓.`],
    ans: S`\(${M([[2, -1, 1], [6, -3, 3]])}\); \(T(1,1,1)=(2,6)\)` },
  { title: "Vectors sent to zero", q: S`\(T\) is linear and \(T(\vec u)=T(\vec v)=\vec 0\). Show \(T(c\vec u+d\vec v)=\vec 0\) for all \(c,d\).`,
    steps: [S`By superposition \(T(c\vec u+d\vec v)=cT(\vec u)+dT(\vec v)=c\vec 0+d\vec 0=\vec 0\).`, S`So the vectors sent to \(\vec 0\) form a subspace (closed under combinations, contains \(\vec 0\)).`],
    ans: S`\(cT(\vec u)+dT(\vec v)=\vec 0\)` },
];

const PROBLEMS = [
  { level: 1, q: S`Is \(T(x_1,x_2)=(x_1+x_2,\ 0)\) linear?`, ans: S`yes: \(${M([[1, 1], [0, 0]])}\vec x\)` },
  { level: 1, q: S`\(T\) is linear and \(T(\vec u)=(1,4)\). Find \(T(5\vec u)\).`, ans: S`\((5,20)\)`, fig: vecs2([[[1, 4], "T(u)", "blue"]], { xmin: -1, xmax: 2, ymin: -1, ymax: 5 }) },
  { level: 1, q: S`What is \(T(\vec 0)\) for any linear \(T\)?`, ans: S`\(\vec 0\)` },
  { level: 2, q: S`\(T(\vec u)=(1,2)\), \(T(\vec v)=(3,-1)\). Find \(T(\vec u-2\vec v)\).`, ans: S`\((-5,4)\)`, fig: P(rowPic([[[[1, 3], [2, -1]], { label: "[T(u) T(v)]" }], [[[1], [-2]], {}]]), 2.6) },
  { level: 2, q: S`Show by a counterexample that \(T(x_1,x_2)=(x_1x_2,\ x_1)\) is not linear.`, ans: S`e.g. \(T(2,2)=(4,2)\ne2T(1,1)=(2,2)\)` },
  { level: 2, q: S`\(T(\vec e_1)=(1,0,2)\), \(T(\vec e_2)=(0,1,-1)\). Find \(T(3,2)\).`, ans: S`\((3,2,4)\)`, fig: P(matPic([[1, 0], [0, 1], [2, -1]], { label: "[T(e₁) T(e₂)]" }), 1.8) },
  { level: 2, q: S`Is \(T(x_1,x_2)=(2x_1-x_2+1,\ x_2)\) linear?`, ans: S`no: \(T(\vec 0)=(1,0)\)` },
  { level: 2, q: S`\(T:\mathbb R^2\to\mathbb R\) is linear, \(T(1,1)=3\), \(T(1,-1)=1\). Find \(T(x_1,x_2)\).`, ans: S`\(2x_1+x_2\)`, fig: vecs2([[[1, 1], "(1, 1)", "blue"], [[1, -1], "(1, −1)", "red"]], { xmin: -1, xmax: 2, ymin: -2, ymax: 2 }) },
  { level: 3, space: 5, q: S`Prove that \(T(-\vec u)=-T(\vec u)\) for linear \(T\).`, ans: S`\(T((-1)\vec u)=(-1)T(\vec u)\) by (ii)` },
  { level: 3, space: 5, q: S`Prove that if \(S,T\) are linear then \(S\circ T\) is linear.`, ans: S`\(S(T(\vec u+\vec v))=S(T\vec u+T\vec v)=S(T\vec u)+S(T\vec v)\); scalars likewise` },
  { level: 3, space: 5, q: S`Prove: \(T(\vec x)=\vec x+\vec b\) is linear only if \(\vec b=\vec 0\).`, ans: S`\(T(\vec 0)=\vec b\) must be \(\vec 0\)` },
  { level: 3, space: 5, q: S`Find every linear \(T:\mathbb R\to\mathbb R\).`, ans: S`\(T(x)=ax\) with \(a=T(1)\)` },
  { level: 3, space: 5, q: S`\(T\) is linear with \(T(1,2)=(0,1)\) and \(T(2,4)=(1,1)\). Explain why this is impossible.`, ans: S`\((2,4)=2(1,2)\) forces \(T(2,4)=(0,2)\)` },
];

export const WS = {
  code: "7.2",
  title: "Linear Transformations",
  bigideas: S`A transformation is linear when it preserves sums and scalar multiples. Every matrix transformation is linear, every linear map sends \(\vec 0\) to \(\vec 0\) and combinations to combinations, and a single counterexample shows a map is not linear. A linear map is decided by the images of a basis.`,
  goals: ["State the two properties of linearity.", "Prove a map linear by writing it as \\(A\\vec x\\).", "Disprove linearity with a counterexample.", "Compute \\(T(c\\vec u+d\\vec v)\\) as a matrix product.", "Recover \\(T\\) from images of basis vectors."],
  curriculum: "Linear transformations — linearity",
  vocab: [["Linear", "preserves sums and scalar multiples"], ["Superposition", "\\(T(\\sum c_i\\vec v_i)=\\sum c_iT(\\vec v_i)\\)"], ["Counterexample", "one failure disproves"], ["\\(T(\\vec 0)\\)", "\\(=\\vec 0\\) for linear maps"], ["Functional", "linear \\(\\mathbb R^n\\to\\mathbb R\\)"]],
  hook: S`Double the input, double the output; add two inputs, add the outputs. Which everyday rules behave like that — and which only seem to?`,
  concepts: NOTES,
  summary: [
    S`Linear: \(T(\vec u+\vec v)=T\vec u+T\vec v\), \(T(c\vec u)=cT\vec u\).`,
    S`Every \(A\vec x\) is linear.`,
    S`Linear \(\Rightarrow T(\vec 0)=\vec 0\) and superposition.`,
    S`Shifts, powers, products, absolute values break linearity.`,
    S`\(T(\vec x)=[T(\vec e_1)\ \cdots\ T(\vec e_n)]\vec x\).`,
  ],
  tips: ["Test T(0) first.", "Write the map as Ax to prove linearity.", "A counterexample needs specific numbers.", "Put images as columns for superposition.", "Dependent inputs force dependent outputs."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
