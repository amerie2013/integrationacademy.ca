// LINALG1 8.4 — Diagonalisation: A = PDP⁻¹ with eigenvectors as the columns of P; the theorem (n independent
// eigenvectors), verifying AP = PD column by column, distinct eigenvalues, repeated eigenvalues that do and do not
// allow it, and building a matrix from prescribed eigenvectors.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, q, num, choice, hard, definition, theorem, am, cv, sfig } from "./lib.mjs";
import { eigLines } from "./ws/fig8.mjs";
import { rowPic } from "./ws/fig3.mjs";

export const TITLE = "8.4 Diagonalisation";
export const ID = "11a10001-0001-4001-8001-000000000804";

const S = String.raw;
const M = (m) => am(m, false);
const D = (m) => S`\left|\begin{array}{${"c".repeat(m[0].length)}}${m.map((r) => r.join(" & ")).join(" \\\\ ")}\end{array}\right|`;
const apFig = sfig(rowPic([[[["A"]], {}], [[["v₁", "v₂"]], { label: "P" }], "=", [[["λ₁v₁", "λ₂v₂"]], { label: "AP" }], "=", [[["v₁", "v₂"]], { label: "P" }], [[["λ₁", 0], [0, "λ₂"]], { label: "D" }]]), "AP = PD says exactly: each column of P is an eigenvector");
const ex1Fig = sfig(eigLines([[7, 2], [-4, 1]], [[[1, -1], 5], [[1, -2], 3]], { raw: true }), "[7 2; −4 1] stretches (1, −1) by 5 and (1, −2) by 3");
const buildFig = sfig(eigLines([[0.5, 1.5], [1.5, 0.5]], [[[1, 1], 2], [[1, -1], -1]], { raw: true }), "the matrix built in the hard problem: (1, 1) doubled, (1, −1) reversed");

export const blocks = () => [
  intro({
    icon: "🪞",
    title: "Diagonalisation",
    overview: S`If an \(n\times n\) matrix has \(n\) independent eigenvectors, put them as the columns of \(P\) and the eigenvalues on the diagonal of \(D\). Then \(AP=PD\), and since \(P\) is invertible, \(A=PDP^{-1}\). This is <strong>diagonalisation</strong>: in the eigenvector basis, \(A\) is just the diagonal matrix \(D\) (7.7). It makes powers, long-run behaviour and many other computations easy. Matrices with \(n\) distinct eigenvalues are always diagonalisable; matrices with repeated eigenvalues are diagonalisable exactly when they are not defective.`,
    goals: [
      "state when \\(A=PDP^{-1}\\) is possible;",
      "diagonalise a \\(2\\times2\\) or \\(3\\times3\\) matrix and check \\(AP=PD\\);",
      "use distinct eigenvalues as a sufficient condition;",
      "decide diagonalisability with repeated eigenvalues;",
      "build a matrix from prescribed eigenvalues and eigenvectors.",
    ],
    outcomes: "eigenvalues and eigenvectors: diagonalisation",
    prior: [
      [S`\([T]_{\mathcal B}=\)? (7.7)`, S`\(P^{-1}AP\) with \(P=[\vec b_1\cdots\vec b_n]\).`],
      [S`Column \(j\) of \(AP\) is …`, S`\(A\) times column \(j\) of \(P\).`],
      [S`When is there an eigenbasis? (8.3)`, S`When the geometric multiplicities add to \(n\).`],
    ],
    words: [
      ["Diagonalisable", "\\(A=PDP^{-1}\\) with \\(D\\) diagonal", "similar to a diagonal matrix"],
      ["\\(P\\)", "eigenvectors as columns", "must be invertible"],
      ["\\(D\\)", "eigenvalues on the diagonal", "in the same order as the columns of \\(P\\)"],
      ["\\(AP=PD\\)", "the check without inverting \\(P\\)", "column \\(j\\): \\(A\\vec v_j=\\lambda_j\\vec v_j\\)"],
      ["Distinct eigenvalues", "\\(n\\) different eigenvalues", "always diagonalisable"],
    ],
  }),

  section("📌 The diagonalisation theorem", S`
  ${definition("diagonalisable", S`An \(n\times n\) matrix \(A\) is <strong>diagonalisable</strong> if \(A=PDP^{-1}\) for some invertible \(P\) and diagonal \(D\).`)}
  ${theorem("diagonalisation", S`\(A\) is diagonalisable \(\iff A\) has \(n\) linearly independent eigenvectors. In that case \(A=PDP^{-1}\) where the columns of \(P\) are the eigenvectors \(\vec v_1,\dots,\vec v_n\) and \(D=\operatorname{diag}(\lambda_1,\dots,\lambda_n)\) holds the matching eigenvalues.`, S`\(AP=[A\vec v_1\cdots A\vec v_n]\) and \(PD=[\lambda_1\vec v_1\cdots\lambda_n\vec v_n]\). So \(AP=PD\iff A\vec v_j=\lambda_j\vec v_j\) for every \(j\). \(P\) is invertible \(\iff\) its columns are independent; then \(AP=PD\iff A=PDP^{-1}\).`)}
  ${apFig}`),

  section("📌 When it works", S`
  ${theorem("sufficient and exact conditions", S`(1) An \(n\times n\) matrix with \(n\) distinct eigenvalues is diagonalisable. (2) In general, \(A\) is diagonalisable \(\iff\) its characteristic polynomial splits into real linear factors and every geometric multiplicity equals the algebraic multiplicity.`, S`(1) One eigenvector per eigenvalue gives \(n\) independent eigenvectors (8.1). (2) Combining bases of the eigenspaces gives an independent set (8.3) of size \(\sum\dim E_\lambda\le\sum(\text{alg. mult.})=n\), with equality exactly when every geometric multiplicity is full.`)}
  ${keyIdea(S`Recipe: (1) eigenvalues from \(\det(A-\lambda I)=0\); (2) a basis of each eigenspace; (3) if you have \(n\) vectors, \(P=[\text{eigenvectors}]\), \(D=\operatorname{diag}(\text{eigenvalues})\); (4) check \(AP=PD\).`)}
  ${ex1Fig}`),

  section("📌 Explore", S`<p>Pick a \(2\times2\) matrix. The explorer finds its eigenvalues and eigenvectors, builds \(P\) and \(D\), and shows \(AP\) and \(PD\) side by side. Try a matrix with a repeated eigenvalue to see when \(P\) fails to be invertible.</p>`),
  widget("laDiag", { init: { a: 7, b: 2, c: -4, d: 1 } }),

  section("📌 Common mistakes", watchOut([
    "The order of the eigenvalues in D must match the order of the eigenvectors in P.",
    "Check AP = PD (no inverse needed) rather than trusting the arithmetic.",
    "A repeated eigenvalue does not rule out diagonalisation — count the eigenspace dimension.",
    "Invertible and diagonalisable are different: [1 1; 0 1] is invertible but not diagonalisable; diag(1, 0) is diagonalisable but not invertible.",
    "P is not unique: any nonzero multiples of the eigenvectors, in any order (with D reordered), also work.",
  ])),

  examples([
    ["Diagonalising a 2 × 2 matrix", S`Diagonalise \(A=${M([[7, 2], [-4, 1]])}\).`,
      [S`\(\operatorname{tr}A=8\), \(\det A=7+8=15\): \(p(\lambda)=\lambda^2-8\lambda+15=(\lambda-3)(\lambda-5)\).`,
        S`\(\lambda=5\): \(A-5I=${M([[2, 2], [-4, -4]])}\xrightarrow{R_2\to R_2+2R_1}${M([[2, 2], [0, 0]])}\): \(\vec v_1=(1,-1)\). \(\lambda=3\): \(A-3I=${M([[4, 2], [-4, -2]])}\xrightarrow{R_2\to R_2+R_1}${M([[4, 2], [0, 0]])}\): \(\vec v_2=(1,-2)\).`,
        S`\(P=${M([[1, 1], [-1, -2]])}\), \(D=${M([[5, 0], [0, 3]])}\). Check \(AP=PD\): \[AP=${M([[7, 2], [-4, 1]])}${M([[1, 1], [-1, -2]])}=${M([["7-2", "7-4"], ["-4-1", "-4-2"]])}=${M([[5, 3], [-5, -6]])},\qquad PD=${M([[1, 1], [-1, -2]])}${M([[5, 0], [0, 3]])}=${M([[5, 3], [-5, -6]])}\ \checkmark\]`,
        S`\(\det P=-2+1=-1\), \(P^{-1}=${M([[2, 1], [-1, -1]])}\), and \(PDP^{-1}=${M([[5, 3], [-5, -6]])}${M([[2, 1], [-1, -1]])}=${M([["10-3", "5-3"], ["-10+6", "-5+6"]])}=${M([[7, 2], [-4, 1]])}\) ✓.`],
      S`\(A=PDP^{-1}\), \(P=${M([[1, 1], [-1, -2]])}\), \(D=\operatorname{diag}(5,3)\)`, ex1Fig],
    ["Distinct eigenvalues on the diagonal", S`Diagonalise \(A=${M([[1, 4, 5], [0, 2, 6], [0, 0, 3]])}\).`,
      [S`Triangular: eigenvalues \(1,2,3\), distinct, so \(A\) is diagonalisable.`,
        S`\(\lambda=1\): \(A-I=${M([[0, 4, 5], [0, 1, 6], [0, 0, 2]])}\): \(x_2=x_3=0\): \((1,0,0)\). \(\lambda=2\): \(A-2I=${M([[-1, 4, 5], [0, 0, 6], [0, 0, 1]])}\): \(x_3=0\), \(x_1=4x_2\): \((4,1,0)\).`,
        S`\(\lambda=3\): \(A-3I=${M([[-2, 4, 5], [0, -1, 6], [0, 0, 0]])}\): \(x_3=t\), \(x_2=6t\), \(-2x_1+24t+5t=0\Rightarrow x_1=\tfrac{29}2t\). With \(t=2\): \((29,12,2)\).`,
        S`\(P=${M([[1, 4, 29], [0, 1, 12], [0, 0, 2]])}\), \(D=\operatorname{diag}(1,2,3)\). \[AP=${M([[1, 4, 5], [0, 2, 6], [0, 0, 3]])}${M([[1, 4, 29], [0, 1, 12], [0, 0, 2]])}=${M([[1, "4+4", "29+48+10"], [0, 2, "24+12"], [0, 0, 6]])}=${M([[1, 8, 87], [0, 2, 36], [0, 0, 6]])}=PD\ \checkmark\]`],
      S`\(P=${M([[1, 4, 29], [0, 1, 12], [0, 0, 2]])}\), \(D=\operatorname{diag}(1,2,3)\)`],
    ["A matrix that cannot be diagonalised", S`Is \(A=${M([[1, 1], [-1, 3]])}\) diagonalisable?`,
      [S`\(\operatorname{tr}A=4\), \(\det A=3+1=4\): \(p(\lambda)=\lambda^2-4\lambda+4=(\lambda-2)^2\).`,
        S`\(A-2I=${M([[-1, 1], [-1, 1]])}\xrightarrow{R_2\to R_2-R_1}${M([[-1, 1], [0, 0]])}\): rank 1, \(E_2=\operatorname{span}\{(1,1)\}\), dimension 1.`,
        S`Only one independent eigenvector, but \(n=2\): \(A\) is not diagonalisable.`],
      S`no: one eigenvector for a double eigenvalue`],
    ["A repeated eigenvalue that works", S`Diagonalise \(A=${M([[4, -1, 6], [2, 1, 6], [2, -1, 8]])}\) (8.3: \(E_2=\operatorname{span}\{(1,2,0),(-3,0,1)\}\), \(E_9=\operatorname{span}\{(1,1,1)\}\)).`,
      [S`\(P=${M([[1, -3, 1], [2, 0, 1], [0, 1, 1]])}\), \(D=\operatorname{diag}(2,2,9)\). \(\det P=1(0-1)+3(2-0)+1(2-0)=7\ne0\), so the columns are independent.`,
        S`\[AP=${M([[4, -1, 6], [2, 1, 6], [2, -1, 8]])}${M([[1, -3, 1], [2, 0, 1], [0, 1, 1]])}=${M([["4-2+0", "-12+0+6", "4-1+6"], ["2+2+0", "-6+0+6", "2+1+6"], ["2-2+0", "-6+0+8", "2-1+8"]])}=${M([[2, -6, 9], [4, 0, 9], [0, 2, 9]])}.\]`,
        S`\[PD=${M([[1, -3, 1], [2, 0, 1], [0, 1, 1]])}${M([[2, 0, 0], [0, 2, 0], [0, 0, 9]])}=${M([[2, -6, 9], [4, 0, 9], [0, 2, 9]])}=AP\ \checkmark\]`],
      S`\(P=${M([[1, -3, 1], [2, 0, 1], [0, 1, 1]])}\), \(D=\operatorname{diag}(2,2,9)\)`],
    ["Reading AP = PD", S`Without computing eigenvalues, decide whether \(P=${M([[1, 1], [2, 3]])}\) and \(D=\operatorname{diag}(4,-1)\) diagonalise \(A=${M([[14, -5], [30, -11]])}\).`,
      [S`\[AP=${M([[14, -5], [30, -11]])}${M([[1, 1], [2, 3]])}=${M([["14-10", "14-15"], ["30-22", "30-33"]])}=${M([[4, -1], [8, -3]])}.\]`,
        S`\[PD=${M([[1, 1], [2, 3]])}${M([[4, 0], [0, -1]])}=${M([[4, -1], [8, -3]])}.\]`,
        S`\(AP=PD\) and \(\det P=3-2=1\ne0\), so \(A=PDP^{-1}\): \((1,2)\) has eigenvalue 4 and \((1,3)\) has eigenvalue \(-1\).`],
      S`yes: \(AP=PD\) with \(P\) invertible`],
  ]),

  practice([
    q("distinct", S`A \(3\times3\) matrix has eigenvalues \(1,-2,5\). Is it diagonalisable?`, choice(["yes", "no", "cannot tell"], 0),
      "Three distinct eigenvalues.", [S`One eigenvector each: independent.`], S`yes`),
    q("D", S`\(A=PDP^{-1}\) with \(P=${M([[1, 1], [1, -1]])}\) and \(A${cv(1, -1)}=-3${cv(1, -1)}\). Find the \((2,2)\) entry of \(D\).`, num(-3),
      "Column 2 of P.", [S`\(D_{22}\) is the eigenvalue of column 2.`], S`\(-3\)`),
    q("defective", S`Is \(${M([[5, 1], [0, 5]])}\) diagonalisable?`, choice(["no", "yes"], 0),
      "dim E₅.", [S`\(A-5I=${M([[0, 1], [0, 0]])}\): rank 1.`], S`no`),
    q("trace", S`\(A=P\operatorname{diag}(3,-1,4)P^{-1}\). Find \(\operatorname{tr}A\).`, num(6),
      "Similar ⇒ same trace.", [S`\(3-1+4\).`], S`\(6\)`),
    q("det", S`\(A=P\operatorname{diag}(3,-1,4)P^{-1}\). Find \(\det A\).`, num(-12),
      "Product.", [S`\(3(-1)(4)\).`], S`\(-12\)`),
  ]),

  ...hard([
    ["Building a matrix from its eigenvectors", S`Find the \(2\times2\) matrix with eigenvector \((1,1)\) for \(\lambda=2\) and eigenvector \((1,-1)\) for \(\lambda=-1\).`,
      [S`\(P=${M([[1, 1], [1, -1]])}\), \(D=${M([[2, 0], [0, -1]])}\), \(\det P=-2\), \(P^{-1}=\tfrac1{-2}${M([[-1, -1], [-1, 1]])}=\tfrac12${M([[1, 1], [1, -1]])}\).`,
        S`\[A=PDP^{-1}=${M([[1, 1], [1, -1]])}${M([[2, 0], [0, -1]])}\cdot\tfrac12${M([[1, 1], [1, -1]])}=\tfrac12${M([[2, -1], [2, 1]])}${M([[1, 1], [1, -1]])}=\tfrac12${M([["2-1", "2+1"], ["2+1", "2-1"]])}=\tfrac12${M([[1, 3], [3, 1]])}.\]`,
        S`Check: \(\tfrac12${M([[1, 3], [3, 1]])}${cv(1, 1)}=${cv(2, 2)}\) ✓ and \(\tfrac12${M([[1, 3], [3, 1]])}${cv(1, -1)}=${cv(-1, 1)}\) ✓.`],
      S`\(A=\tfrac12${M([[1, 3], [3, 1]])}\)`, buildFig],
    ["Never diagonalisable", S`Show that \(A=${M([[1, 1, 0], [0, 1, 0], [0, 0, "k"]])}\) is not diagonalisable for any \(k\).`,
      [S`Eigenvalues \(1,1,k\) (triangular). \(A-I=${M([[0, 1, 0], [0, 0, 0], [0, 0, "k-1"]])}\).`,
        S`If \(k\ne1\): rank 2, \(\dim E_1=1<2\) = algebraic multiplicity of 1.`,
        S`If \(k=1\): rank 1, \(\dim E_1=2<3\) = algebraic multiplicity. In both cases the eigenvectors cannot fill \(\mathbb R^3\).`],
      S`\(\dim E_1<\) algebraic multiplicity for every \(k\)`],
  ], [
    q("hard", S`\(A=\tfrac12${M([[1, 3], [3, 1]])}\). Find \(A\)'s eigenvalue for \((1,1)\).`, num(2),
      "A(1,1).", [S`\(\tfrac12(4,4)=(2,2)\).`], S`\(2\)`),
    q("hard", S`How many of these are diagonalisable: \(${M([[1, 1], [0, 1]])}\), \(${M([[1, 0], [0, 0]])}\), \(${M([[2, 1], [0, 3]])}\)?`, num(2),
      "Check each.", [S`The first is defective; the second is diagonal; the third has distinct eigenvalues.`], S`\(2\)`),
    q("hard", S`\(A\) is \(4\times4\) with eigenvalues \(2,2,5,5\), \(\dim E_2=2\), \(\dim E_5=1\). Is \(A\) diagonalisable?`, choice(["no", "yes"], 0),
      "2 + 1 = 3 < 4.", [S`Only 3 independent eigenvectors.`], S`no`),
  ]),

  wrapUp({
    qas: [
      ["What does A = PDP⁻¹ mean?", "In the basis of eigenvectors (columns of P), A acts as the diagonal matrix D."],
      ["When is A diagonalisable?", "When it has n independent eigenvectors."],
      ["Is a matrix with n distinct eigenvalues diagonalisable?", "Always."],
      ["How do I check a diagonalisation?", "Verify AP = PD and det P ≠ 0."],
      ["Does a repeated eigenvalue rule it out?", "No — only a deficient eigenspace does."],
    ],
    summary: [
      "A = PDP⁻¹: P = eigenvectors, D = eigenvalues.",
      "AP = PD column by column.",
      "Diagonalisable ⇔ n independent eigenvectors.",
      "n distinct eigenvalues ⇒ diagonalisable.",
      "Defective ⇒ not diagonalisable.",
    ],
    next: "8.5 uses A = PDP⁻¹ to compute powers and predict the long-run behaviour of x_{k+1} = Ax_k.",
  }),
];
