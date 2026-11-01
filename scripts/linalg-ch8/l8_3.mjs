// LINALG1 8.3 — Eigenspaces and Multiplicity: a full eigen-analysis (eigenvalues, then a basis of each eigenspace by
// row reducing A − λI), geometric multiplicity dim E_λ ≤ algebraic multiplicity, defective matrices, and the
// independence of eigenvectors from different eigenspaces — every reduction written out.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, q, num, choice, hard, definition, theorem, am, cv, sfig, steps } from "./lib.mjs";
import { autoPlan } from "./bank/la.mjs";
import { eigLines } from "./ws/fig8.mjs";
import { matPic } from "./ws/fig3.mjs";

export const TITLE = "8.3 Eigenspaces and Multiplicity";
export const ID = "11a10001-0001-4001-8001-000000000803";

const S = String.raw;
const M = (m) => am(m, false);
const defFig = sfig(eigLines([[3, 1], [0, 3]], [[[1, 0], 3]], { raw: true }), "[3 1; 0 3] has only one eigen-line: λ = 3 has multiplicity 2 but a 1-dimensional eigenspace");
const goodFig = sfig(eigLines([[2, 0], [0, 2]], [[[1, 0], 2], [[0, 1], 2]], { raw: true }), "2I stretches every direction by 2: E₂ is the whole plane");
const mFig = sfig(matPic([["alg 2", "geo 1"], ["alg 1", "geo 1"]], { label: "1 ≤ geometric ≤ algebraic" }));
const A9 = [[-5, -1, 6], [2, -8, 6], [2, -1, -1]];

export const blocks = () => [
  intro({
    icon: "🧩",
    title: "Eigenspaces and Multiplicity",
    overview: S`A complete eigen-analysis has two stages: find the eigenvalues from the characteristic equation, then for each eigenvalue find a basis of its eigenspace \(E_\lambda=\operatorname{Nul}(A-\lambda I)\). The dimension of \(E_\lambda\) is the <strong>geometric multiplicity</strong>. It is always at least 1 and at most the algebraic multiplicity. When it is smaller, the matrix is <strong>defective</strong>: there are not enough independent eigenvectors to build a basis, and (as 8.4 shows) the matrix cannot be diagonalised.`,
    goals: [
      "carry out a full eigen-analysis of a \\(2\\times2\\) or \\(3\\times3\\) matrix;",
      "find a basis of each eigenspace by row reducing \\(A-\\lambda I\\);",
      "compare geometric and algebraic multiplicity;",
      "recognise defective matrices;",
      "use the independence of eigenvectors from different eigenspaces.",
    ],
    outcomes: "eigenvalues and eigenvectors: eigenspaces and multiplicity",
    prior: [
      [S`\(\dim\operatorname{Nul}B=\)?`, S`The number of free variables of \(B\).`],
      [S`Eigenvalues of \(${M([[1, 1, 0], [1, 2, 1], [0, 1, 1]])}\) (from 8.2)?`, S`\(0,1,3\).`],
      [S`Rank–nullity for an \(n\times n\) matrix \(B\)?`, S`\(\operatorname{rank}B+\dim\operatorname{Nul}B=n\).`],
    ],
    words: [
      ["Geometric multiplicity", "\\(\\dim E_\\lambda\\)", "number of free variables of \\(A-\\lambda I\\)"],
      ["Algebraic multiplicity", "multiplicity as a root of \\(p(\\lambda)\\)", "from 8.2"],
      ["Defective", "some geometric < algebraic", "too few eigenvectors"],
      ["Eigenbasis", "a basis of \\(\\mathbb R^n\\) made of eigenvectors", "exists iff not defective (real case)"],
      ["\\(n-\\operatorname{rank}(A-\\lambda I)\\)", "\\(=\\dim E_\\lambda\\)", "quick count"],
    ],
  }),

  section("📌 Two multiplicities", S`
  ${definition("geometric multiplicity", S`The <strong>geometric multiplicity</strong> of an eigenvalue \(\lambda\) is \(\dim E_\lambda=\dim\operatorname{Nul}(A-\lambda I)=n-\operatorname{rank}(A-\lambda I)\).`)}
  ${theorem("multiplicities", S`For every eigenvalue, \(1\le\text{geometric multiplicity}\le\text{algebraic multiplicity}\).`, S`\(E_\lambda\) contains a nonzero vector, so its dimension is at least 1. For the upper bound, take a basis \(\vec v_1,\dots,\vec v_g\) of \(E_\lambda\), extend it to a basis of \(\mathbb R^n\) and let \(P\) have these columns. Then \(P^{-1}AP=${M([["\\lambda I_g", "*"], [0, "B"]])}\), whose characteristic polynomial is \((\lambda-t)^g\det(B-tI)\); similar matrices share it, so \(\lambda\) is a root of multiplicity at least \(g\).`)}
  ${mFig}
  ${defFig}
  ${goodFig}`),

  section("📌 Putting eigenspaces together", S`
  ${theorem("independence across eigenspaces", S`If \(\lambda_1,\dots,\lambda_k\) are distinct eigenvalues and \(\mathcal B_i\) is a basis of \(E_{\lambda_i}\), then the combined list \(\mathcal B_1\cup\dots\cup\mathcal B_k\) is linearly independent.`, S`Suppose a combination is \(\vec 0\); group it as \(\vec w_1+\dots+\vec w_k=\vec 0\) with \(\vec w_i\in E_{\lambda_i}\). Nonzero \(\vec w_i\) would be eigenvectors for distinct eigenvalues, hence independent (8.1), so every \(\vec w_i=\vec 0\). Each \(\mathcal B_i\) is independent, so all coefficients are 0.`)}
  ${keyIdea(S`Add up the geometric multiplicities. If the total is \(n\), the eigenvectors form a basis of \(\mathbb R^n\) (an eigenbasis); if it is less than \(n\), no eigenbasis exists.`)}`),

  section("📌 Explore", S`<p>Choose a \(3\times3\) matrix from the list. The explorer shows each eigenvalue with its algebraic multiplicity, the row-reduced \(A-\lambda I\), and the dimension of the eigenspace, and says whether the eigenvectors fill \(\mathbb R^3\).</p>`),
  widget("laEigSpace", { init: { set: "full" } }),

  section("📌 Common mistakes", watchOut([
    "A repeated eigenvalue does not automatically give two independent eigenvectors — count the free variables of A − λI.",
    "dim E_λ = n − rank(A − λI), not n − rank(A).",
    "Give a BASIS of each eigenspace: one vector per free variable.",
    "Check each eigenvector with Av = λv before moving on.",
    "Eigenvectors from different eigenvalues are automatically independent; within one eigenspace they must be chosen independent.",
  ])),

  examples([
    ["A full eigen-analysis", S`Find a basis of every eigenspace of \(A=${M([[1, 1, 0], [1, 2, 1], [0, 1, 1]])}\) (eigenvalues \(0,1,3\) from 8.2).`,
      [...steps([[-2, 1, 0], [1, -1, 1], [0, 1, -2]], [
          [S`Bring a 1 to the top.`, ["R1<->R2"]],
          [S`Clear column 1.`, ["R2+2R1"]],
          [S`Clear column 2 below its pivot.`, ["R3+R2"]],
        ], { bar: false, intro: S`\(\lambda=3\): \(A-3I\)` }).steps,
        S`\(x_3=t\); \(-x_2+2x_3=0\Rightarrow x_2=2t\); \(x_1=x_2-x_3=t\): \(E_3=\operatorname{span}\{(1,2,1)\}\).`,
        S`\(\lambda=1\): \(A-I=${M([[0, 1, 0], [1, 1, 1], [0, 1, 0]])}\xrightarrow{R_1\leftrightarrow R_2,\ R_3\to R_3-R_2}${M([[1, 1, 1], [0, 1, 0], [0, 0, 0]])}\): \(x_2=0\), \(x_1=-x_3\): \(E_1=\operatorname{span}\{(1,0,-1)\}\). \(\lambda=0\): \(A\xrightarrow{R_2\to R_2-R_1,\ R_3\to R_3-R_2}${M([[1, 1, 0], [0, 1, 1], [0, 0, 0]])}\): \(E_0=\operatorname{span}\{(1,-1,1)\}\).`,
        S`Check all three at once: \[A${M([[1, 1, 1], [2, 0, -1], [1, -1, 1]])}=${M([[3, 1, 0], [6, 0, 0], [3, -1, 0]])}=${M([[1, 1, 1], [2, 0, -1], [1, -1, 1]])}${M([[3, 0, 0], [0, 1, 0], [0, 0, 0]])}.\]`],
      S`\(E_3=\operatorname{span}\{(1,2,1)\}\), \(E_1=\operatorname{span}\{(1,0,-1)\}\), \(E_0=\operatorname{span}\{(1,-1,1)\}\)`],
    ["Geometric smaller than algebraic", S`Find the eigenvalues of \(A=${M([[2, 0, 0], [1, 2, 0], [0, 0, 3]])}\), their multiplicities, and the eigenspaces.`,
      [S`Triangular: eigenvalues \(2,2,3\). Algebraic multiplicities: 2 for \(\lambda=2\), 1 for \(\lambda=3\).`,
        S`\(\lambda=2\): \(A-2I=${M([[0, 0, 0], [1, 0, 0], [0, 0, 1]])}\xrightarrow{R_1\leftrightarrow R_2}${M([[1, 0, 0], [0, 0, 0], [0, 0, 1]])}\xrightarrow{R_2\leftrightarrow R_3}${M([[1, 0, 0], [0, 0, 1], [0, 0, 0]])}\): \(x_1=x_3=0\), \(x_2\) free: \(E_2=\operatorname{span}\{(0,1,0)\}\), dimension 1.`,
        S`\(\lambda=3\): \(A-3I=${M([[-1, 0, 0], [1, -1, 0], [0, 0, 0]])}\xrightarrow{R_2\to R_2+R_1}${M([[-1, 0, 0], [0, -1, 0], [0, 0, 0]])}\): \(E_3=\operatorname{span}\{(0,0,1)\}\).`,
        S`Total geometric multiplicity \(1+1=2<3\): \(A\) is defective.`],
      S`\(\lambda=2\): algebraic 2, geometric 1; \(\lambda=3\): 1 and 1 — defective`],
    ["Repeated but complete", S`\(A=${M([[4, -1, 6], [2, 1, 6], [2, -1, 8]])}\) has \(E_2\) of dimension 2 (8.1). Find the remaining eigenvalue and its eigenspace.`,
      [S`\(\operatorname{tr}A=13\) and \(\lambda=2\) appears at least twice, so the third eigenvalue is \(13-2-2=9\).`,
        ...steps(A9, autoPlan(A9, { cols: 3 }), { bar: false, intro: S`\(A-9I\)` }).steps,
        S`\(x_3=t\), \(x_1=x_2=t\): \(E_9=\operatorname{span}\{(1,1,1)\}\). Check \(A${cv(1, 1, 1)}=${cv("4-1+6", "2+1+6", "2-1+8")}=${cv(9, 9, 9)}\) ✓.`,
        S`Geometric multiplicities \(2+1=3\): an eigenbasis \(\{(1,2,0),(-3,0,1),(1,1,1)\}\) exists.`],
      S`\(\lambda=9\), \(E_9=\operatorname{span}\{(1,1,1)\}\); eigenbasis exists`],
    ["A defective 2 × 2 matrix", S`Show that \(A=${M([[3, 1], [0, 3]])}\) has only one independent eigenvector.`,
      [S`\(p(\lambda)=(3-\lambda)^2\): \(\lambda=3\) with algebraic multiplicity 2.`,
        S`\(A-3I=${M([[0, 1], [0, 0]])}\): \(x_2=0\), \(x_1\) free: \(E_3=\operatorname{span}\{(1,0)\}\), dimension 1.`,
        S`For example \((0,1)\): \(A${cv(0, 1)}=${cv(1, 3)}\), not a multiple of \((0,1)\). Every eigenvector is a multiple of \((1,0)\).`],
      S`geometric multiplicity 1 < 2: defective`, defFig],
    ["Counting with rank", S`Without finding eigenvectors, give \(\dim E_5\) for \(A=${M([[5, 1, 0], [0, 5, 0], [2, 0, 3]])}\) and decide whether \(A\) has an eigenbasis.`,
      [S`\(A-5I=${M([[0, 1, 0], [0, 0, 0], [2, 0, -2]])}\xrightarrow{R_1\leftrightarrow R_3}${M([[2, 0, -2], [0, 0, 0], [0, 1, 0]])}\xrightarrow{R_2\leftrightarrow R_3}${M([[2, 0, -2], [0, 1, 0], [0, 0, 0]])}\): rank 2.`,
        S`\(\dim E_5=3-2=1\), but the algebraic multiplicity of 5 is 2 (8.2).`,
        S`Total geometric multiplicity at most \(1+1=2<3\): no eigenbasis.`],
      S`\(\dim E_5=1\); no eigenbasis`],
  ]),

  practice([
    q("dimension", S`Find \(\dim E_2\) for \(${M([[2, 0, 0], [0, 2, 0], [0, 0, 7]])}\).`, num(2),
      "3 − rank(A − 2I).", [S`\(A-2I=\operatorname{diag}(0,0,5)\): rank 1.`], S`\(2\)`),
    q("defective?", S`Is \(${M([[4, 1], [0, 4]])}\) defective?`, choice(["yes", "no"], 0),
      "dim E₄.", [S`\(A-4I=${M([[0, 1], [0, 0]])}\): one free variable.`], S`yes`),
    q("bound", S`An eigenvalue has algebraic multiplicity 3. Its geometric multiplicity can be at most:`, num(3),
      "geometric ≤ algebraic.", [S`\(1\le g\le3\).`], S`\(3\)`),
    q("eigenvector", S`\(E_4\) of \(${M([[3, 1], [1, 3]])}\) is spanned by \((1,k)\). Find \(k\).`, num(1),
      "A − 4I.", [S`\(${M([[-1, 1], [1, -1]])}\): \(x_1=x_2\).`], S`\(1\)`),
    q("count", S`A \(4\times4\) matrix has eigenvalues with geometric multiplicities 1, 1 and 1. Does it have an eigenbasis?`, choice(["no", "yes"], 0),
      "Total 3 < 4.", [S`Only 3 independent eigenvectors.`], S`no`),
  ]),

  ...hard([
    ["A parameter that splits an eigenspace", S`For which \(a\) does \(A=${M([[1, 0, 0], ["a", 1, 0], [0, 0, 2]])}\) have an eigenbasis? Give the eigenspaces in each case.`,
      [S`Eigenvalues \(1,1,2\) (triangular). \(E_2\): \(A-2I=${M([[-1, 0, 0], ["a", -1, 0], [0, 0, 0]])}\) gives \(x_1=0\), \(x_2=0\): \(E_2=\operatorname{span}\{(0,0,1)\}\) for every \(a\).`,
        S`\(E_1\): \(A-I=${M([[0, 0, 0], ["a", 0, 0], [0, 0, 1]])}\). If \(a\ne0\): rank 2, \(E_1=\operatorname{span}\{(0,1,0)\}\), total \(1+1=2\): no eigenbasis.`,
        S`If \(a=0\): \(A-I=\operatorname{diag}(0,0,1)\), rank 1, \(E_1=\operatorname{span}\{(1,0,0),(0,1,0)\}\), total 3: eigenbasis \(\{(1,0,0),(0,1,0),(0,0,1)\}\).`],
      S`only for \(a=0\)`],
    ["Three eigenvectors are independent", S`Prove that eigenvectors \(\vec v_1,\vec v_2,\vec v_3\) for distinct eigenvalues \(\lambda_1,\lambda_2,\lambda_3\) are linearly independent.`,
      [S`Suppose \(c_1\vec v_1+c_2\vec v_2+c_3\vec v_3=\vec 0\) (1). Apply \(A\): \(c_1\lambda_1\vec v_1+c_2\lambda_2\vec v_2+c_3\lambda_3\vec v_3=\vec 0\) (2).`,
        S`(2) \(-\lambda_3\)(1): \(c_1(\lambda_1-\lambda_3)\vec v_1+c_2(\lambda_2-\lambda_3)\vec v_2=\vec 0\). Two eigenvectors for distinct eigenvalues are independent (8.1), so \(c_1(\lambda_1-\lambda_3)=c_2(\lambda_2-\lambda_3)=0\), hence \(c_1=c_2=0\).`,
        S`Then (1) gives \(c_3\vec v_3=\vec 0\) with \(\vec v_3\ne\vec 0\), so \(c_3=0\).`],
      S`apply \(A\), subtract \(\lambda_3\) times the relation, use the two-vector case`],
  ], [
    q("hard", S`Find \(\dim E_3\) for \(${M([[3, 1, 0], [0, 3, 1], [0, 0, 3]])}\).`, num(1),
      "A − 3I has rank 2.", [S`\(${M([[0, 1, 0], [0, 0, 1], [0, 0, 0]])}\): one free variable.`], S`\(1\)`),
    q("hard", S`For which \(k\) does \(${M([[2, "k"], [0, 2]])}\) have a 2-dimensional \(E_2\)?`, num(0),
      "A − 2I must be 0.", [S`\(${M([[0, "k"], [0, 0]])}=0\iff k=0\).`], S`\(0\)`),
    q("hard", S`A \(3\times3\) matrix has eigenvalues \(1,4,4\) and \(\operatorname{rank}(A-4I)=1\). Does it have an eigenbasis?`, choice(["yes", "no"], 0),
      "dim E₄ = 2.", [S`\(1+2=3\).`], S`yes`),
  ]),

  wrapUp({
    qas: [
      ["How do I find an eigenspace basis?", "Row reduce A − λI; one basis vector per free variable."],
      ["What is geometric multiplicity?", "dim E_λ = n − rank(A − λI)."],
      ["How do the multiplicities compare?", "1 ≤ geometric ≤ algebraic."],
      ["What is a defective matrix?", "One with some geometric multiplicity smaller than the algebraic one."],
      ["When is there an eigenbasis?", "When the geometric multiplicities add up to n."],
    ],
    summary: [
      "Full analysis: eigenvalues, then Nul(A − λI) for each.",
      "dim E_λ = n − rank(A − λI).",
      "1 ≤ geometric ≤ algebraic.",
      "Bases of different eigenspaces combine to an independent set.",
      "Eigenbasis ⇔ geometric multiplicities sum to n.",
    ],
    next: "8.4 uses an eigenbasis to write A = PDP⁻¹: diagonalisation.",
  }),
];
