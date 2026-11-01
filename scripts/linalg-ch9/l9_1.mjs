// LINALG1 9.1 — Orthogonal Complements: W⊥ as the set of vectors perpendicular to every vector of W; testing against a
// spanning set; W⊥ = Nul Aᵀ for W = Col A and (Row A)⊥ = Nul A, computed by row reduction; dim W + dim W⊥ = n; the
// decomposition y = ŷ + z for a line, and the consistency condition of Ax = b read from Nul Aᵀ.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, q, num, choice, hard, definition, theorem, am, cv, sfig, steps } from "./lib.mjs";
import { projLine } from "./ws/fig9.mjs";
import { planeFig, lineFig } from "./ws/fig5.mjs";

export const TITLE = "9.1 Orthogonal Complements";
export const ID = "11a10001-0001-4001-8001-000000000901";

const S = String.raw;
const M = (m) => am(m, false);
const T = (v) => M([v]);
const planeLine = sfig(planeFig([-2, 1, 0], [1, 0, 1], { lu: "(−2, 1, 0)", lv: "(1, 0, 1)", more: [[[1, 2, -1], "normal (1, 2, −1)", "green"]], raw: true }), "W = span{(1, 2, −1)} (green) and W⊥, the plane of vectors perpendicular to it");
const decFig = sfig(projLine([1, 1], [3, 1], { raw: true }), "y = ŷ + z with ŷ on the line W and z = y − ŷ in W⊥");
const lineF = sfig(lineFig([1, -1, 1], { raw: true }), "Nul Aᵀ = span{(1, −1, 1)}: the line perpendicular to Col A");

export const blocks = () => [
  intro({
    icon: "⟂",
    title: "Orthogonal Complements",
    overview: S`Two vectors are orthogonal when their dot product is zero. Extending this to whole subspaces: the <strong>orthogonal complement</strong> \(W^\perp\) of a subspace \(W\) is the set of all vectors perpendicular to everything in \(W\). In \(\mathbb R^3\) the complement of a line is the plane through \(\vec 0\) perpendicular to it, and the complement of a plane is its normal line. Writing dot products as matrix products, \(\vec x\in W^\perp\) becomes the homogeneous system \(A^T\vec x=\vec 0\), so complements are computed by row reduction — and the four fundamental subspaces of a matrix pair up as complements.`,
    goals: [
      "define \\(W^\\perp\\) and test membership against a spanning set;",
      "compute \\(W^\\perp\\) as \\(\\operatorname{Nul}A^T\\) when \\(W=\\operatorname{Col}A\\);",
      "use \\((\\operatorname{Row}A)^\\perp=\\operatorname{Nul}A\\) and \\((\\operatorname{Col}A)^\\perp=\\operatorname{Nul}A^T\\);",
      "use \\(\\dim W+\\dim W^\\perp=n\\);",
      "split a vector into a part in \\(W\\) and a part in \\(W^\\perp\\) (for a line).",
    ],
    outcomes: "orthogonality: orthogonal complements",
    prior: [
      [S`Write \(\vec u\cdot\vec v\) as a matrix product.`, S`\(\vec u^T\vec v\), a \(1\times n\) row times an \(n\times1\) column.`],
      [S`Find \(\operatorname{Nul}${T([1, 2, -1])}\).`, S`\(x_1=-2x_2+x_3\): \(\operatorname{span}\{(-2,1,0),(1,0,1)\}\).`],
      [S`Rank–nullity for an \(m\times n\) matrix?`, S`\(\operatorname{rank}A+\dim\operatorname{Nul}A=n\).`],
    ],
    words: [
      ["Orthogonal", "\\(\\vec u\\cdot\\vec v=\\vec u^T\\vec v=0\\)", "perpendicular"],
      ["Orthogonal complement \\(W^\\perp\\)", "all \\(\\vec x\\) with \\(\\vec x\\cdot\\vec w=0\\) for every \\(\\vec w\\in W\\)", "a subspace"],
      ["\\(\\operatorname{Nul}A^T\\)", "the left null space", "\\(=(\\operatorname{Col}A)^\\perp\\)"],
      ["\\(\\dim W+\\dim W^\\perp=n\\)", "the dimensions add up", "line ↔ plane in \\(\\mathbb R^3\\)"],
      ["Orthogonal decomposition", "\\(\\vec y=\\hat y+\\vec z\\)", "\\(\\hat y\\in W\\), \\(\\vec z\\in W^\\perp\\)"],
    ],
  }),

  section("📌 The orthogonal complement", S`
  ${definition("orthogonal complement", S`For a subspace \(W\) of \(\mathbb R^n\), \[W^\perp=\{\vec x\in\mathbb R^n:\ \vec x\cdot\vec w=0\text{ for every }\vec w\in W\}.\]`)}
  ${theorem("testing and computing", S`If \(W=\operatorname{span}\{\vec w_1,\dots,\vec w_k\}\) and \(A=[\vec w_1\cdots\vec w_k]\), then \[\vec x\in W^\perp\iff\vec w_i^T\vec x=0\ (i=1,\dots,k)\iff A^T\vec x=\vec 0.\] So \(W^\perp=\operatorname{Nul}A^T\); in particular \(W^\perp\) is a subspace.`, S`If \(\vec x\) is orthogonal to each \(\vec w_i\), it is orthogonal to every combination: \(\vec x\cdot(c_1\vec w_1+\dots+c_k\vec w_k)=c_1(\vec x\cdot\vec w_1)+\dots=0\). The \(k\) conditions \(\vec w_i^T\vec x=0\) are the rows of \(A^T\vec x=\vec 0\).`)}
  ${planeLine}`),

  section("📌 The fundamental subspaces in pairs", S`
  ${theorem("complements of the fundamental subspaces", S`For an \(m\times n\) matrix \(A\): \[(\operatorname{Row}A)^\perp=\operatorname{Nul}A\ \text{ in }\mathbb R^n,\qquad(\operatorname{Col}A)^\perp=\operatorname{Nul}A^T\ \text{ in }\mathbb R^m.\] Also \(\dim W+\dim W^\perp=n\) and \((W^\perp)^\perp=W\).`, S`\(A\vec x=\vec 0\) says each row of \(A\) has dot product 0 with \(\vec x\); that is \(\vec x\perp\operatorname{Row}A\). Apply this to \(A^T\), whose rows are the columns of \(A\). For the dimensions, with \(W=\operatorname{Col}A\) of rank \(k\): \(\dim W^\perp=\dim\operatorname{Nul}A^T=m-k\).`)}
  ${keyIdea(S`\(A\vec x=\vec b\) is consistent exactly when \(\vec b\in\operatorname{Col}A\), i.e. when \(\vec b\) is orthogonal to every vector of \(\operatorname{Nul}A^T\). This turns "is it solvable?" into dot-product tests.`)}
  ${lineF}`),

  section("📌 Explore", S`<p>Turn the line \(W\) in the plane. The explorer draws \(W^\perp\) (the perpendicular line) and splits a vector \(\vec y\) into \(\hat y\in W\) and \(\vec z\in W^\perp\), showing \(\hat y^T\vec z=0\).</p>`),
  widget("laPerp", { init: { t: 45, x: 3, y: 1 } }),

  section("📌 Common mistakes", watchOut([
    "W⊥ is a subspace, not just one perpendicular vector — give a basis.",
    "For W = Col A use Nul Aᵀ (rows of Aᵀ are the spanning vectors), not Nul A.",
    "Check orthogonality to the spanning vectors only: that suffices for all of W.",
    "dim W + dim W⊥ = n, the dimension of the whole space.",
    "Two vectors in W⊥ need not be orthogonal to each other.",
  ])),

  examples([
    ["The complement of a line in ℝ³", S`Find a basis of \(W^\perp\) for \(W=\operatorname{span}\{(1,2,-1)\}\).`,
      [S`\(\vec x\in W^\perp\iff${T([1, 2, -1])}${cv("x_1", "x_2", "x_3")}=0\), i.e. \(x_1+2x_2-x_3=0\).`,
        S`\(x_2=s\), \(x_3=t\) free, \(x_1=-2s+t\): \[\vec x=s${cv(-2, 1, 0)}+t${cv(1, 0, 1)},\qquad W^\perp=\operatorname{span}\{(-2,1,0),(1,0,1)\}.\]`,
        S`Check: \(${T([1, 2, -1])}${M([[-2, 1], [1, 0], [0, 1]])}=${M([["-2+2+0", "1+0-1"]])}=${M([[0, 0]])}\) ✓. \(\dim W+\dim W^\perp=1+2=3\).`],
      S`\(W^\perp=\operatorname{span}\{(-2,1,0),(1,0,1)\}\), a plane`, planeLine],
    ["The complement of a plane in ℝ⁴", S`Find a basis of \(W^\perp\) for \(W=\operatorname{span}\{(1,1,0,1),(0,1,1,2)\}\).`,
      [S`\(A=${M([[1, 0], [1, 1], [0, 1], [1, 2]])}\), so \(W^\perp=\operatorname{Nul}A^T\) with \(A^T=${M([[1, 1, 0, 1], [0, 1, 1, 2]])}\).`,
        ...steps([[1, 1, 0, 1], [0, 1, 1, 2]], [[S`Clear column 2 above its pivot.`, ["R1-R2"]]], { bar: false, intro: S`Row reduce \(A^T\)` }).steps,
        S`\(x_3=s\), \(x_4=t\): \(x_1=s+t\), \(x_2=-s-2t\): \(W^\perp=\operatorname{span}\{(1,-1,1,0),(1,-2,0,1)\}\).`,
        S`Check: \[A^T${M([[1, 1], [-1, -2], [1, 0], [0, 1]])}=${M([["1-1+0+0", "1-2+0+1"], ["0-1+1+0", "0-2+0+2"]])}=${M([[0, 0], [0, 0]])}\ \checkmark\]`],
      S`\(W^\perp=\operatorname{span}\{(1,-1,1,0),(1,-2,0,1)\}\)`],
    ["Row space and null space", S`For \(A=${M([[1, 2, 3], [2, 4, 7]])}\), find \(\operatorname{Nul}A\) and confirm it is orthogonal to \(\operatorname{Row}A\).`,
      [...steps([[1, 2, 3], [2, 4, 7]], [[S`Clear column 1.`, ["R2-2R1"]], [S`Clear column 3 above its pivot.`, ["R1-3R2"]]], { bar: false, intro: S`Row reduce \(A\)` }).steps,
        S`\(x_3=0\), \(x_2=t\), \(x_1=-2t\): \(\operatorname{Nul}A=\operatorname{span}\{(-2,1,0)\}\).`,
        S`\(A\vec n=${M([[1, 2, 3], [2, 4, 7]])}${cv(-2, 1, 0)}=${cv("-2+2+0", "-4+4+0")}=${cv(0, 0)}\): each row is perpendicular to \(\vec n\). Dimensions: \(\dim\operatorname{Row}A+\dim\operatorname{Nul}A=2+1=3\).`],
      S`\(\operatorname{Nul}A=\operatorname{span}\{(-2,1,0)\}\perp\operatorname{Row}A\)`],
    ["When is Ax = b solvable?", S`For \(A=${M([[1, 0], [1, 1], [0, 1]])}\), find \((\operatorname{Col}A)^\perp\) and use it to state when \(A\vec x=\vec b\) is consistent.`,
      [S`\((\operatorname{Col}A)^\perp=\operatorname{Nul}A^T\), \(A^T=${M([[1, 1, 0], [0, 1, 1]])}\xrightarrow{R_1\to R_1-R_2}${M([[1, 0, -1], [0, 1, 1]])}\): \(x_3=t\), \(x_1=t\), \(x_2=-t\): \(\operatorname{span}\{(1,-1,1)\}\).`,
        S`\(\vec b\in\operatorname{Col}A\iff\vec b\perp(1,-1,1)\iff b_1-b_2+b_3=0\).`,
        S`Example: \(\vec b=(1,3,2)\): \(1-3+2=0\), consistent — indeed \(A${cv(1, 2)}=${cv(1, "1+2", 2)}\) ✓. \(\vec b=(1,0,0)\): \(1\ne0\), inconsistent.`],
      S`\(A\vec x=\vec b\) is consistent \(\iff b_1-b_2+b_3=0\)`, lineF],
    ["Splitting a vector across a line and its complement", S`Write \(\vec y=(3,1)\) as \(\hat y+\vec z\) with \(\hat y\in W=\operatorname{span}\{(1,1)\}\) and \(\vec z\in W^\perp\).`,
      [S`\(\hat y=c\vec u\) with \(\vec u=(1,1)\), and \(\vec z=\vec y-c\vec u\perp\vec u\): \(\vec u^T(\vec y-c\vec u)=0\Rightarrow c=\dfrac{\vec u^T\vec y}{\vec u^T\vec u}=\dfrac{${T([1, 1])}${cv(3, 1)}}{${T([1, 1])}${cv(1, 1)}}=\dfrac42=2\).`,
        S`\(\hat y=2${cv(1, 1)}=${cv(2, 2)}\), \(\vec z=${cv(3, 1)}-${cv(2, 2)}=${cv(1, -1)}\).`,
        S`Check: \(\hat y^T\vec z=${T([2, 2])}${cv(1, -1)}=2-2=0\) ✓ and \(\hat y+\vec z=\vec y\).`],
      S`\(\vec y=(2,2)+(1,-1)\)`, decFig],
  ]),

  practice([
    q("test", S`Is \((2,-1,0)\) in \(W^\perp\) for \(W=\operatorname{span}\{(1,2,5)\}\)?`, choice(["yes", "no"], 0),
      "Dot product.", [S`\(${T([1, 2, 5])}${cv(2, -1, 0)}=2-2+0=0\).`], S`yes`),
    q("dimension", S`\(W\) is a 2-dimensional subspace of \(\mathbb R^5\). Find \(\dim W^\perp\).`, num(3),
      "n − dim W.", [S`\(5-2\).`], S`\(3\)`),
    q("complement", S`\(W^\perp\) for \(W=\operatorname{span}\{(1,0,0),(0,1,0)\}\) is spanned by \((0,0,k)\). Any nonzero \(k\); give \(k=\)?`, num(1),
      "The x₃-axis.", [S`Perpendicular to both: \(x_1=x_2=0\).`], S`\(1\)`),
    q("Nul Aᵀ", S`\((\operatorname{Col}A)^\perp=\)`, choice([S`\(\operatorname{Nul}A^T\)`, S`\(\operatorname{Nul}A\)`, S`\(\operatorname{Row}A\)`, S`\(\operatorname{Col}A^T\)`], 0),
      "Rows of Aᵀ are the columns of A.", [S`\(A^T\vec x=\vec 0\iff\vec x\perp\) every column.`], S`\(\operatorname{Nul}A^T\)`),
    q("decompose", S`Split \(\vec y=(4,2)\) along \(W=\operatorname{span}\{(1,0)\}\): \(\vec z=(0,k)\). Find \(k\).`, num(2),
      "Remove the x₁-part.", [S`\(\hat y=(4,0)\), \(\vec z=(0,2)\).`], S`\(2\)`),
  ]),

  ...hard([
    ["A complement given by equations", S`\(W\) is the solution set of \(x_1+x_2+x_3+x_4=0\) and \(x_1-x_3=0\) in \(\mathbb R^4\). Find a basis of \(W^\perp\) and of \(W\), and check \(\dim W+\dim W^\perp=4\).`,
      [S`\(W=\operatorname{Nul}A\) with \(A=${M([[1, 1, 1, 1], [1, 0, -1, 0]])}\), so \(W^\perp=\operatorname{Row}A=\operatorname{span}\{(1,1,1,1),(1,0,-1,0)\}\) (independent rows).`,
        ...steps([[1, 1, 1, 1], [1, 0, -1, 0]], [[S`Clear column 1.`, ["R2-R1"]], [S`Scale the new pivot.`, ["R2*-1"]], [S`Clear column 2 above its pivot.`, ["R1-R2"]]], { bar: false, intro: S`For \(W\), row reduce \(A\)` }).steps,
        S`\(x_3=s\), \(x_4=t\): \(x_1=s\), \(x_2=-2s-t\): \(W=\operatorname{span}\{(1,-2,1,0),(0,-1,0,1)\}\). Check: \(A${M([[1, 0], [-2, -1], [1, 0], [0, 1]])}=${M([["1-2+1+0", "0-1+0+1"], ["1+0-1+0", "0+0+0+0"]])}=0\) ✓; \(2+2=4\).`],
      S`\(W^\perp=\operatorname{span}\{(1,1,1,1),(1,0,-1,0)\}\), \(W=\operatorname{span}\{(1,-2,1,0),(0,-1,0,1)\}\)`],
    ["Why the dimensions add up", S`Prove that \(\dim W+\dim W^\perp=n\) for a subspace \(W\) of \(\mathbb R^n\), and that \(W\cap W^\perp=\{\vec 0\}\).`,
      [S`Choose a basis \(\vec w_1,\dots,\vec w_k\) of \(W\) and let \(A=[\vec w_1\cdots\vec w_k]\) (\(n\times k\), rank \(k\)). Then \(W^\perp=\operatorname{Nul}A^T\), and \(A^T\) is \(k\times n\) of rank \(k\).`,
        S`Rank–nullity for \(A^T\): \(\dim\operatorname{Nul}A^T=n-k\). So \(\dim W+\dim W^\perp=k+(n-k)=n\).`,
        S`If \(\vec x\in W\cap W^\perp\), then \(\vec x\cdot\vec x=0\), i.e. \(\vec x^T\vec x=|\vec x|^2=0\), so \(\vec x=\vec 0\).`],
      S`rank–nullity for \(A^T\); \(\vec x^T\vec x=0\Rightarrow\vec x=\vec 0\)`],
  ], [
    q("hard", S`\(A\) is \(5\times3\) of rank 2. Find \(\dim(\operatorname{Col}A)^\perp\).`, num(3),
      "dim Nul Aᵀ = 5 − 2.", [S`\(\operatorname{Col}A\subseteq\mathbb R^5\), dimension 2.`], S`\(3\)`),
    q("hard", S`For which \(k\) is \(\vec b=(2,k,1)\) in \(\operatorname{Col}${M([[1, 0], [1, 1], [0, 1]])}\)?`, num(3),
      "b₁ − b₂ + b₃ = 0.", [S`\(2-k+1=0\).`], S`\(3\)`),
    q("hard", S`\(W\subseteq\mathbb R^4\) has \(W^\perp=\operatorname{span}\{(1,0,1,0)\}\). Find \(\dim W\).`, num(3),
      "4 − 1.", [S`\(\dim W=4-\dim W^\perp\).`], S`\(3\)`),
  ]),

  wrapUp({
    qas: [
      ["What is W⊥?", "All vectors orthogonal to every vector of W — a subspace."],
      ["How do I compute it?", "Put spanning vectors of W as columns of A; W⊥ = Nul Aᵀ."],
      ["How do the fundamental subspaces pair up?", "(Row A)⊥ = Nul A and (Col A)⊥ = Nul Aᵀ."],
      ["How are the dimensions related?", "dim W + dim W⊥ = n."],
      ["How does this help with Ax = b?", "b ∈ Col A exactly when b is orthogonal to Nul Aᵀ."],
    ],
    summary: [
      "W⊥ = {x : x·w = 0 for all w ∈ W}.",
      "W = Col A ⇒ W⊥ = Nul Aᵀ.",
      "(Row A)⊥ = Nul A.",
      "dim W + dim W⊥ = n, W ∩ W⊥ = {0}.",
      "y = ŷ + z with ŷ ∈ W, z ∈ W⊥.",
    ],
    next: "9.2 studies matrices whose columns are orthonormal: they preserve lengths and angles.",
  }),
];
