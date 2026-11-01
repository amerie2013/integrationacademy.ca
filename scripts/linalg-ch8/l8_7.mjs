// LINALG1 8.7 — Symmetric Matrices: real eigenvalues and orthogonal eigenvectors, orthogonal diagonalisation
// A = QDQᵀ (QᵀQ = I), choosing an orthonormal basis inside a repeated eigenspace, the spectral decomposition
// A = Σ λᵢuᵢuᵢᵀ, and quadratic forms on principal axes — every product written out.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, q, num, choice, hard, definition, theorem, am, cv, sfig } from "./lib.mjs";
import { eigLines } from "./ws/fig8.mjs";
import { vecs2 } from "./ws/fig5.mjs";

export const TITLE = "8.7 Symmetric Matrices";
export const ID = "11a10001-0001-4001-8001-000000000807";

const S = String.raw;
const M = (m) => am(m, false);
const symFig = sfig(eigLines([[3, 1], [1, 3]], [[[1, 1], 4], [[1, -1], 2]], { raw: true }), "a symmetric matrix: the eigen-lines are perpendicular");
const ellipse = (a, b, ang) => { const pts = []; for (let t = 0; t <= 2 * Math.PI + 1e-6; t += 0.05) { const x = a * Math.cos(t), y = b * Math.sin(t); pts.push([x * Math.cos(ang) - y * Math.sin(ang), x * Math.sin(ang) + y * Math.cos(ang)]); } return pts; };
const qfFig = sfig(vecs2([[[1.2, 1.2], "u₁ (λ = 4)", "blue"], [[1.2, -1.2], "u₂ (λ = 2)", "red"]], { xmin: -2, xmax: 2, ymin: -2, ymax: 2 }, { segs: [{ pts: ellipse(1 / 2, 1 / Math.SQRT2, Math.PI / 4), color: "violet", w: 2.4 }], raw: true }),
  "the curve 3x₁² + 2x₁x₂ + 3x₂² = 1 is an ellipse whose axes are the eigenvectors");

export const blocks = () => [
  intro({
    icon: "⚖️",
    title: "Symmetric Matrices",
    overview: S`Symmetric matrices (\(A^T=A\)) are the best-behaved matrices in linear algebra and the most common in applications — covariance matrices, stiffness matrices, Hessians and quadratic forms are all symmetric. Their eigenvalues are always real, eigenvectors for different eigenvalues are automatically perpendicular, and they can always be diagonalised by an <strong>orthogonal</strong> matrix: \(A=QDQ^T\) with \(Q^TQ=I\). No inverse is needed because \(Q^{-1}=Q^T\). Geometrically, a symmetric matrix stretches space along perpendicular axes.`,
    goals: [
      "use that a symmetric matrix has real eigenvalues and orthogonal eigenvectors;",
      "orthogonally diagonalise \\(A=QDQ^T\\) and check \\(Q^TQ=I\\);",
      "choose an orthonormal basis inside a repeated eigenspace;",
      "write the spectral decomposition \\(A=\\sum\\lambda_i\\vec u_i\\vec u_i^T\\);",
      "find the principal axes of a quadratic form \\(\\vec x^TA\\vec x\\).",
    ],
    outcomes: "eigenvalues and eigenvectors: symmetric matrices and orthogonal diagonalisation",
    prior: [
      [S`When is a matrix symmetric?`, S`When \(A^T=A\).`],
      [S`A matrix \(Q\) has orthonormal columns. \(Q^TQ=\)?`, S`\(I\).`],
      [S`Normalise \((1,1)\).`, S`\(\tfrac1{\sqrt2}(1,1)\).`],
    ],
    words: [
      ["Symmetric", "\\(A^T=A\\)", "mirror image across the diagonal"],
      ["Orthogonal matrix", "\\(Q^TQ=I\\)", "\\(Q^{-1}=Q^T\\)"],
      ["Orthogonally diagonalisable", "\\(A=QDQ^T\\)", "exactly the symmetric matrices"],
      ["Spectral decomposition", "\\(A=\\lambda_1\\vec u_1\\vec u_1^T+\\dots+\\lambda_n\\vec u_n\\vec u_n^T\\)", "a sum of projections"],
      ["Quadratic form", "\\(\\vec x^TA\\vec x\\)", "principal axes = eigenvectors"],
    ],
  }),

  section("📌 The spectral theorem", S`
  ${theorem("symmetric matrices", S`Let \(A\) be a real symmetric \(n\times n\) matrix. (1) Every eigenvalue of \(A\) is real. (2) Eigenvectors for different eigenvalues are orthogonal. (3) <strong>Spectral theorem:</strong> \(A=QDQ^T\) for an orthogonal \(Q\) (orthonormal eigenvector columns) and real diagonal \(D\); conversely every such product is symmetric.`, S`(1) If \(A\vec v=\lambda\vec v\) (complex), then \(\bar{\vec v}^TA\vec v=\lambda\,\bar{\vec v}^T\vec v\); taking the conjugate transpose and using \(A=\bar A^T\) gives the same number with \(\bar\lambda\), and \(\bar{\vec v}^T\vec v>0\), so \(\lambda=\bar\lambda\). (2) If \(A\vec u=\lambda\vec u\), \(A\vec w=\mu\vec w\): \(\lambda\vec u^T\vec w=(A\vec u)^T\vec w=\vec u^TA\vec w=\mu\vec u^T\vec w\), so \((\lambda-\mu)\vec u^T\vec w=0\). (3) is proved by induction on \(n\) (quoted here); the converse: \((QDQ^T)^T=QD^TQ^T=QDQ^T\).`)}
  ${symFig}`),

  section("📌 Orthogonal diagonalisation in practice", S`
  ${keyIdea(S`Recipe: (1) eigenvalues; (2) a basis of each eigenspace; (3) inside an eigenspace of dimension \(\ge2\), make the basis orthogonal (Gram–Schmidt, or choose it so); (4) normalise every vector; (5) \(Q=[\vec u_1\cdots\vec u_n]\), \(D=\operatorname{diag}(\lambda_i)\); check \(Q^TQ=I\) and \(AQ=QD\).`)}
  ${definition("spectral decomposition", S`With orthonormal eigenvectors \(\vec u_i\), \(A=QDQ^T=\lambda_1\vec u_1\vec u_1^T+\dots+\lambda_n\vec u_n\vec u_n^T\). Each \(\vec u_i\vec u_i^T\) is the projection onto the line through \(\vec u_i\) (7.4).`)}
  ${qfFig}`),

  section("📌 Explore", S`<p>Set a symmetric \(2\times2\) matrix (\(b=c\) is enforced). The explorer draws its two perpendicular eigen-lines and the image of the unit circle — an ellipse whose semi-axes are \(|\lambda_1|\) and \(|\lambda_2|\) along the eigenvectors.</p>`),
  widget("laSym", { init: { a: 3, b: 1, d: 3 } }),

  section("📌 Common mistakes", watchOut([
    "Normalise the eigenvectors — Q needs UNIT columns for Qᵀ = Q⁻¹.",
    "Inside a repeated eigenspace, an arbitrary basis need not be orthogonal: fix it before normalising.",
    "Only symmetric matrices are orthogonally diagonalisable; others may still be diagonalisable with a non-orthogonal P.",
    "Check AQ = QD and QᵀQ = I rather than computing Q⁻¹.",
    "The cross term 2x₁x₂ of a quadratic form contributes 1 (not 2) to each off-diagonal entry of A.",
  ])),

  examples([
    ["Orthogonally diagonalising a 2 × 2 matrix", S`Orthogonally diagonalise \(A=${M([[3, 1], [1, 3]])}\).`,
      [S`\(\operatorname{tr}A=6\), \(\det A=8\): \(\lambda^2-6\lambda+8=(\lambda-2)(\lambda-4)\). \(\lambda=4\): \(A-4I=${M([[-1, 1], [1, -1]])}\): \((1,1)\). \(\lambda=2\): \(A-2I=${M([[1, 1], [1, 1]])}\): \((1,-1)\). Dot product \(1-1=0\) ✓.`,
        S`Normalise: \(Q=\tfrac1{\sqrt2}${M([[1, 1], [1, -1]])}\), \(D=\operatorname{diag}(4,2)\). \(Q^TQ=\tfrac12${M([[1, 1], [1, -1]])}${M([[1, 1], [1, -1]])}=\tfrac12${M([["1+1", "1-1"], ["1-1", "1+1"]])}=I\).`,
        S`\[QDQ^T=\tfrac12${M([[1, 1], [1, -1]])}${M([[4, 0], [0, 2]])}${M([[1, 1], [1, -1]])}=\tfrac12${M([[4, 2], [4, -2]])}${M([[1, 1], [1, -1]])}=\tfrac12${M([["4+2", "4-2"], ["4-2", "4+2"]])}=${M([[3, 1], [1, 3]])}\ \checkmark\]`],
      S`\(Q=\tfrac1{\sqrt2}${M([[1, 1], [1, -1]])}\), \(D=\operatorname{diag}(4,2)\)`, symFig],
    ["Orthogonal eigenvectors for free", S`Find the eigenvectors of \(A=${M([[1, 2], [2, -2]])}\) and confirm they are perpendicular.`,
      [S`\(\operatorname{tr}A=-1\), \(\det A=-2-4=-6\): \(\lambda^2+\lambda-6=(\lambda+3)(\lambda-2)\).`,
        S`\(\lambda=2\): \(A-2I=${M([[-1, 2], [2, -4]])}\xrightarrow{R_2\to R_2+2R_1}${M([[-1, 2], [0, 0]])}\): \(\vec v_1=(2,1)\). \(\lambda=-3\): \(A+3I=${M([[4, 2], [2, 1]])}\xrightarrow{R_2\to R_2-\frac12R_1}${M([[4, 2], [0, 0]])}\): \(\vec v_2=(1,-2)\).`,
        S`\(\vec v_1^T\vec v_2=${M([[2, 1]])}${cv(1, -2)}=2-2=0\) ✓ — as the theorem promises.`],
      S`\((2,1)\) for \(\lambda=2\), \((1,-2)\) for \(\lambda=-3\): perpendicular`],
    ["A repeated eigenvalue in ℝ³", S`Orthogonally diagonalise \(A=${M([[2, 1, 1], [1, 2, 1], [1, 1, 2]])}\).`,
      [S`\(A-I=${M([[1, 1, 1], [1, 1, 1], [1, 1, 1]])}\) has rank 1, so \(\lambda=1\) has a 2-dimensional eigenspace; \(\operatorname{tr}A=6\) gives the third eigenvalue \(6-1-1=4\), with \(A${cv(1, 1, 1)}=${cv(4, 4, 4)}\).`,
        S`\(E_1\): \(x_1+x_2+x_3=0\). The basis \((1,-1,0),(1,0,-1)\) is not orthogonal (dot product 1). Choose instead \((1,-1,0)\) and \((1,1,-2)\): both satisfy the equation and \(${M([[1, -1, 0]])}${cv(1, 1, -2)}=1-1+0=0\).`,
        S`Normalise: \[Q=${M([["\\tfrac1{\\sqrt3}", "\\tfrac1{\\sqrt2}", "\\tfrac1{\\sqrt6}"], ["\\tfrac1{\\sqrt3}", "-\\tfrac1{\\sqrt2}", "\\tfrac1{\\sqrt6}"], ["\\tfrac1{\\sqrt3}", 0, "-\\tfrac2{\\sqrt6}"]])},\qquad D=\operatorname{diag}(4,1,1).\]`,
        S`Check \(AQ=QD\) on the last column: \(A${cv(1, 1, -2)}=${cv("2+1-2", "1+2-2", "1+1-4")}=${cv(1, 1, -2)}=1\cdot${cv(1, 1, -2)}\) ✓.`],
      S`\(A=QDQ^T\) with \(D=\operatorname{diag}(4,1,1)\) and \(Q\) as shown`],
    ["The spectral decomposition", S`Write \(A=${M([[3, 1], [1, 3]])}\) as \(\lambda_1\vec u_1\vec u_1^T+\lambda_2\vec u_2\vec u_2^T\).`,
      [S`\(\vec u_1=\tfrac1{\sqrt2}(1,1)\), \(\vec u_2=\tfrac1{\sqrt2}(1,-1)\): \[\vec u_1\vec u_1^T=\tfrac12${cv(1, 1)}${M([[1, 1]])}=\tfrac12${M([[1, 1], [1, 1]])},\qquad \vec u_2\vec u_2^T=\tfrac12${M([[1, -1], [-1, 1]])}.\]`,
        S`\[4\cdot\tfrac12${M([[1, 1], [1, 1]])}+2\cdot\tfrac12${M([[1, -1], [-1, 1]])}=${M([[2, 2], [2, 2]])}+${M([[1, -1], [-1, 1]])}=${M([[3, 1], [1, 3]])}\ \checkmark\]`,
        S`\(A\) is 4 times the projection onto \(x_2=x_1\) plus 2 times the projection onto \(x_2=-x_1\).`],
      S`\(A=4\cdot\tfrac12${M([[1, 1], [1, 1]])}+2\cdot\tfrac12${M([[1, -1], [-1, 1]])}\)`],
    ["Principal axes of a quadratic form", S`Remove the cross term of \(Q(\vec x)=x_1^2+4x_1x_2-2x_2^2\) and classify the form.`,
      [S`\(Q(\vec x)=\vec x^TA\vec x\) with \(A=${M([[1, 2], [2, -2]])}\) (the cross coefficient 4 is split as 2 and 2). Check: \(${M([["x_1", "x_2"]])}${M([[1, 2], [2, -2]])}${cv("x_1", "x_2")}=x_1^2+2x_1x_2+2x_1x_2-2x_2^2\) ✓.`,
        S`From Example 2: \(\lambda=2\), \(\vec u_1=\tfrac1{\sqrt5}(2,1)\); \(\lambda=-3\), \(\vec u_2=\tfrac1{\sqrt5}(1,-2)\). With \(\vec x=Q\vec y\), \(Q=\tfrac1{\sqrt5}${M([[2, 1], [1, -2]])}\): \[\vec x^TA\vec x=\vec y^TQ^TAQ\vec y=\vec y^TD\vec y=2y_1^2-3y_2^2.\]`,
        S`One positive and one negative eigenvalue: the form is <em>indefinite</em>; \(Q(\vec x)=1\) is a hyperbola with axes along \((2,1)\) and \((1,-2)\).`],
      S`\(2y_1^2-3y_2^2\): indefinite (hyperbola)`, qfFig],
  ]),

  practice([
    q("real?", S`Can a real symmetric matrix have eigenvalue \(1+i\)?`, choice(["no", "yes"], 0),
      "Spectral theorem.", [S`Eigenvalues of symmetric matrices are real.`], S`no`),
    q("orthogonal", S`\((1,2)\) is an eigenvector of a symmetric \(2\times2\) matrix with two distinct eigenvalues. The other eigenvector is a multiple of \((-2,k)\). Find \(k\).`, num(1),
      "Perpendicular.", [S`\((1,2)\cdot(-2,1)=0\).`], S`\(1\)`),
    q("inverse", S`\(Q\) is orthogonal. \(Q^{-1}=\)`, choice([S`\(Q^T\)`, S`\(Q\)`, S`\(-Q\)`, S`\(I\)`], 0),
      "QᵀQ = I.", [S`Orthonormal columns.`], S`\(Q^T\)`),
    q("form", S`\(x_1^2+6x_1x_2+5x_2^2=\vec x^TA\vec x\). Find \(a_{12}\).`, num(3),
      "Half the cross coefficient.", [S`\(A=${M([[1, 3], [3, 5]])}\).`], S`\(3\)`),
    q("max", S`The maximum of \(\vec x^TA\vec x\) over unit vectors, for \(A\) symmetric with eigenvalues \(5,2,-1\), is:`, num(5),
      "Largest eigenvalue.", [S`Attained at a unit eigenvector for 5.`], S`\(5\)`),
  ]),

  ...hard([
    ["Orthogonal diagonalisation with checks", S`Orthogonally diagonalise \(A=${M([[5, -2], [-2, 2]])}\) and verify \(AQ=QD\).`,
      [S`\(\operatorname{tr}A=7\), \(\det A=10-4=6\): \(\lambda^2-7\lambda+6=(\lambda-1)(\lambda-6)\).`,
        S`\(\lambda=6\): \(A-6I=${M([[-1, -2], [-2, -4]])}\xrightarrow{R_2\to R_2-2R_1}${M([[-1, -2], [0, 0]])}\): \((2,-1)\). \(\lambda=1\): \(A-I=${M([[4, -2], [-2, 1]])}\xrightarrow{R_2\to R_2+\frac12R_1}${M([[4, -2], [0, 0]])}\): \((1,2)\).`,
        S`\(Q=\tfrac1{\sqrt5}${M([[2, 1], [-1, 2]])}\), \(D=\operatorname{diag}(6,1)\). \[AQ=\tfrac1{\sqrt5}${M([[5, -2], [-2, 2]])}${M([[2, 1], [-1, 2]])}=\tfrac1{\sqrt5}${M([["10+2", "5-4"], ["-4-2", "-2+4"]])}=\tfrac1{\sqrt5}${M([[12, 1], [-6, 2]])}=QD\ \checkmark\]`],
      S`\(Q=\tfrac1{\sqrt5}${M([[2, 1], [-1, 2]])}\), \(D=\operatorname{diag}(6,1)\)`],
    ["Every QDQᵀ is symmetric, and a non-example", S`Prove that \(QDQ^T\) is symmetric, and explain why \(${M([[1, 1], [0, 2]])}\) is diagonalisable but not orthogonally diagonalisable.`,
      [S`\((QDQ^T)^T=(Q^T)^TD^TQ^T=QDQ^T\) because \(D\) is diagonal.`,
        S`\(${M([[1, 1], [0, 2]])}\) has distinct eigenvalues 1, 2 (eigenvectors \((1,0)\) and \((1,1)\)), so it is diagonalisable; but it is not symmetric, so by the first part it cannot equal any \(QDQ^T\). Indeed \((1,0)\cdot(1,1)=1\ne0\): its eigenvectors are not perpendicular.`],
      S`\((QDQ^T)^T=QDQ^T\); a non-symmetric matrix cannot be \(QDQ^T\)`],
  ], [
    q("hard", S`\(A\) is symmetric with eigenvalues \(3\) and \(-1\). Is \(\vec x^TA\vec x>0\) for every \(\vec x\ne\vec 0\)?`, choice(["no", "yes"], 0),
      "A negative eigenvalue.", [S`At an eigenvector for \(-1\): \(\vec x^TA\vec x=-|\vec x|^2<0\).`], S`no`),
    q("hard", S`Find the larger eigenvalue of \(${M([[5, -2], [-2, 2]])}\).`, num(6),
      "λ² − 7λ + 6.", [S`Roots 1, 6.`], S`\(6\)`),
    q("hard", S`\(A=4\vec u_1\vec u_1^T+2\vec u_2\vec u_2^T\) with \(\vec u_1=\tfrac1{\sqrt2}(1,1)\), \(\vec u_2=\tfrac1{\sqrt2}(1,-1)\). Find \(a_{12}\).`, num(1),
      "2 − 1.", [S`\(${M([[2, 2], [2, 2]])}+${M([[1, -1], [-1, 1]])}\).`], S`\(1\)`),
  ]),

  wrapUp({
    qas: [
      ["What is special about symmetric matrices?", "Real eigenvalues and orthogonal eigenvectors."],
      ["What is orthogonal diagonalisation?", "A = QDQᵀ with orthonormal eigenvector columns, so Q⁻¹ = Qᵀ."],
      ["What if an eigenvalue is repeated?", "Choose an orthogonal basis inside its eigenspace, then normalise."],
      ["What is the spectral decomposition?", "A = Σ λᵢ uᵢuᵢᵀ, a combination of projections."],
      ["How do quadratic forms simplify?", "x = Qy turns xᵀAx into Σ λᵢ yᵢ²: the eigenvectors are the principal axes."],
    ],
    summary: [
      "Aᵀ = A ⇒ real eigenvalues, orthogonal eigenvectors.",
      "Spectral theorem: A = QDQᵀ, QᵀQ = I.",
      "Repeated eigenvalue: orthogonalise inside E_λ.",
      "A = Σ λᵢ uᵢuᵢᵀ.",
      "xᵀAx = Σ λᵢyᵢ² on the principal axes.",
    ],
    next: "Chapter 9 develops orthogonality further: Gram–Schmidt, QR and least squares.",
  }),
];
