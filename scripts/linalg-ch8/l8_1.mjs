// LINALG1 8.1 — Eigenvectors and Eigenvalues: Ax = λx with x ≠ 0; verifying eigenvectors by one product; testing a
// candidate λ through A − λI; the eigenspace Nul(A − λI) by row reduction; triangular matrices; eigenvalue 0 and
// invertibility; geometric meaning for projections, reflections and rotations.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, q, num, choice, hard, definition, theorem, am, cv, sfig, steps } from "./lib.mjs";
import { eigLines, notEig } from "./ws/fig8.mjs";

export const TITLE = "8.1 Eigenvectors and Eigenvalues";
export const ID = "11a10001-0001-4001-8001-000000000801";

const S = String.raw;
const M = (m) => am(m, false);
const eigFig = sfig(eigLines([[3, 1], [2, 2]], [[[1, 1], 4], [[1, -2], 1]], { raw: true }), "on the two eigen-lines A only stretches: v₁ by 4, v₂ by 1");
const notFig = sfig(notEig([[3, 1], [2, 2]], [1, 0], { raw: true }), "(1, 0) is not an eigenvector: A turns it off its line");
const projFig = sfig(eigLines([[0.5, 0.5], [0.5, 0.5]], [[[1, 1], 1], [[1, -1], 0]], { raw: true }), "projection onto x₂ = x₁: the line is kept (λ = 1), the perpendicular is crushed (λ = 0)");

export const blocks = () => [
  intro({
    icon: "🎯",
    title: "Eigenvectors and Eigenvalues",
    overview: S`Most vectors change direction when a matrix acts on them. A few special ones do not: \(A\) only stretches, shrinks or flips them. Such a vector is an <strong>eigenvector</strong>, and the stretch factor is its <strong>eigenvalue</strong>: \(A\vec x=\lambda\vec x\). Along an eigenvector a complicated matrix behaves like a single number, which is why eigenvectors are the key to powers of matrices, to dynamical systems, to vibrations and to data analysis. In this lesson we learn to recognise eigenvectors, to test whether a number is an eigenvalue, and to find all eigenvectors for a given eigenvalue — the <strong>eigenspace</strong> \(\operatorname{Nul}(A-\lambda I)\).`,
    goals: [
      "state the definition of eigenvector, eigenvalue and eigenspace;",
      "verify an eigenvector with one product \\(A\\vec x\\);",
      "decide whether \\(\\lambda\\) is an eigenvalue by row reducing \\(A-\\lambda I\\);",
      "find a basis of the eigenspace \\(\\operatorname{Nul}(A-\\lambda I)\\);",
      "read eigenvalues of triangular matrices and connect \\(\\lambda=0\\) with singularity.",
    ],
    outcomes: "eigenvalues and eigenvectors: definitions and eigenspaces",
    prior: [
      [S`Compute \(${M([[3, 1], [2, 2]])}${cv(1, 1)}\).`, S`\(${cv(4, 4)}=4${cv(1, 1)}\).`],
      [S`What is \(\operatorname{Nul}B\)?`, S`All solutions of \(B\vec x=\vec 0\).`],
      [S`When does \(B\vec x=\vec 0\) have a nonzero solution (\(B\) square)?`, S`When \(B\) is singular (\(\det B=0\)).`],
    ],
    words: [
      ["Eigenvector", "\\(\\vec x\\ne\\vec 0\\) with \\(A\\vec x=\\lambda\\vec x\\)", "direction kept (or reversed)"],
      ["Eigenvalue", "the scalar \\(\\lambda\\)", "may be 0 or negative"],
      ["Eigenspace", "\\(\\operatorname{Nul}(A-\\lambda I)\\)", "all eigenvectors for \\(\\lambda\\), plus \\(\\vec 0\\)"],
      ["\\(A-\\lambda I\\)", "subtract \\(\\lambda\\) from the diagonal", "singular exactly at eigenvalues"],
      ["Eigen-line", "a 1-dimensional eigenspace in \\(\\mathbb R^2\\)", "\\(A\\) acts on it as multiplication by \\(\\lambda\\)"],
    ],
  }),

  section("📌 The definition", S`
  ${definition("eigenvector and eigenvalue", S`Let \(A\) be \(n\times n\). A <strong>nonzero</strong> vector \(\vec x\) with \(A\vec x=\lambda\vec x\) for some scalar \(\lambda\) is an <strong>eigenvector</strong> of \(A\), and \(\lambda\) is the corresponding <strong>eigenvalue</strong>. A scalar \(\lambda\) is an eigenvalue exactly when \(A\vec x=\lambda\vec x\) has a nontrivial solution.`)}
  ${eigFig}
  ${notFig}`),

  section("📌 Eigenspaces", S`
  ${theorem("eigenspace", S`\(A\vec x=\lambda\vec x\iff(A-\lambda I)\vec x=\vec 0\). So \(\lambda\) is an eigenvalue \(\iff A-\lambda I\) is singular, and the set of eigenvectors for \(\lambda\), together with \(\vec 0\), is the subspace \[E_\lambda=\operatorname{Nul}(A-\lambda I),\] the <strong>eigenspace</strong> of \(\lambda\).`, S`\(A\vec x-\lambda\vec x=A\vec x-\lambda I\vec x=(A-\lambda I)\vec x\). A null space is always a subspace; it contains a nonzero vector exactly when \(A-\lambda I\) is singular.`)}
  ${keyIdea(S`To test \(\lambda\): form \(A-\lambda I\) (subtract \(\lambda\) on the diagonal) and row reduce. A free variable means \(\lambda\) is an eigenvalue, and the free variables give a basis of \(E_\lambda\).`)}`),

  section("📌 Quick facts", S`
  ${theorem("triangular matrices and zero", S`(1) The eigenvalues of a triangular matrix are its diagonal entries. (2) \(0\) is an eigenvalue of \(A\iff A\) is not invertible. (3) Eigenvectors for distinct eigenvalues are linearly independent.`, S`(1) \(A-\lambda I\) is triangular with diagonal \(a_{ii}-\lambda\); it is singular exactly when some \(a_{ii}-\lambda=0\). (2) \(\lambda=0\) means \(A\vec x=\vec 0\) has a nonzero solution. (3) For two: if \(c_1\vec v_1+c_2\vec v_2=\vec 0\), apply \(A\) and subtract \(\lambda_1\) times the relation: \(c_2(\lambda_2-\lambda_1)\vec v_2=\vec 0\), so \(c_2=0\), then \(c_1=0\); induction gives the general case.`)}
  ${projFig}`),

  section("📌 Explore", S`<p>Drag \(\vec x\) around the circle and watch \(A\vec x\). Most of the time the two arrows point in different directions. When they line up, \(\vec x\) is an eigenvector, and the ratio of lengths (with a sign) is the eigenvalue.</p>`),
  widget("laEigHunt", { init: { a: 3, b: 1, c: 2, d: 2 } }),

  section("📌 Common mistakes", watchOut([
    "The zero vector is never an eigenvector, although 0 can be an eigenvalue.",
    "Eigenvalues are found from A − λI, not from A itself: row reducing A changes its eigenvalues.",
    "An eigenspace contains infinitely many eigenvectors — give a basis, not one vector, when asked for all.",
    "Subtract λ only on the diagonal: A − λI, not A − λ (every entry).",
    "Eigenvalues of a triangular matrix are on the diagonal; for other matrices they are not.",
  ])),

  examples([
    ["Checking candidate eigenvectors", S`For \(A=${M([[3, 1], [2, 2]])}\), decide whether \(\vec u=(1,1)\), \(\vec v=(1,-2)\) and \(\vec w=(1,0)\) are eigenvectors.`,
      [S`\[A\vec u=${M([[3, 1], [2, 2]])}${cv(1, 1)}=${cv("3+1", "2+2")}=${cv(4, 4)}=4${cv(1, 1)}:\] an eigenvector with \(\lambda=4\).`,
        S`\[A\vec v=${M([[3, 1], [2, 2]])}${cv(1, -2)}=${cv("3-2", "2-4")}=${cv(1, -2)}=1${cv(1, -2)}:\] an eigenvector with \(\lambda=1\).`,
        S`\[A\vec w=${M([[3, 1], [2, 2]])}${cv(1, 0)}=${cv(3, 2)},\] which is not a multiple of \((1,0)\) (second entry 2 but \(\lambda\cdot0=0\)). Not an eigenvector.`],
      S`\(\vec u\) (\(\lambda=4\)) and \(\vec v\) (\(\lambda=1\)) are; \(\vec w\) is not`, eigFig],
    ["Testing a candidate eigenvalue", S`Is \(\lambda=3\) an eigenvalue of \(A=${M([[1, 2], [4, 3]])}\)? Is \(\lambda=5\)? Find an eigenvector for any that is.`,
      [S`\(\lambda=3\): \[A-3I=${M([["1-3", 2], [4, "3-3"]])}=${M([[-2, 2], [4, 0]])}\xrightarrow{R_2\to R_2+2R_1}${M([[-2, 2], [0, 4]])}.\] Two pivots: only \(\vec x=\vec 0\), so 3 is not an eigenvalue.`,
        S`\(\lambda=5\): \[A-5I=${M([[-4, 2], [4, -2]])}\xrightarrow{R_2\to R_2+R_1}${M([[-4, 2], [0, 0]])}.\] \(x_2=t\) free, \(-4x_1+2x_2=0\Rightarrow x_1=\tfrac12t\). With \(t=2\): \(\vec x=(1,2)\).`,
        S`Check: \[A${cv(1, 2)}=${M([[1, 2], [4, 3]])}${cv(1, 2)}=${cv("1+4", "4+6")}=${cv(5, 10)}=5${cv(1, 2)}\ \checkmark\]`],
      S`3 is not an eigenvalue; 5 is, with eigenvector \((1,2)\)`],
    ["A two-dimensional eigenspace", S`\(\lambda=2\) is an eigenvalue of \(A=${M([[4, -1, 6], [2, 1, 6], [2, -1, 8]])}\). Find a basis of \(E_2\).`,
      [...steps([[2, -1, 6], [2, -1, 6], [2, -1, 6]], [
          [S`Clear column 1 below the pivot.`, ["R2-R1", "R3-R1"]],
          [S`Scale the pivot.`, ["R1*1/2"]],
        ], { bar: false, intro: S`\(A-2I=${M([["4-2", -1, 6], [2, "1-2", 6], [2, -1, "8-2"]])}\); row reduce it` }).steps,
        S`\(x_2=s\), \(x_3=t\) free; \(x_1=\tfrac12s-3t\): \[\vec x=s${cv("\\tfrac12", 1, 0)}+t${cv(-3, 0, 1)},\quad E_2=\operatorname{span}\left\{${cv(1, 2, 0)},${cv(-3, 0, 1)}\right\}.\]`,
        S`Check: \[A${cv(1, 2, 0)}=${cv("4-2+0", "2+2+0", "2-2+0")}=${cv(2, 4, 0)}=2${cv(1, 2, 0)},\qquad A${cv(-3, 0, 1)}=${cv("-12+0+6", "-6+0+6", "-6+0+8")}=${cv(-6, 0, 2)}=2${cv(-3, 0, 1)}.\]`],
      S`\(E_2=\operatorname{span}\{(1,2,0),(-3,0,1)\}\), a plane`],
    ["A triangular matrix and λ = 0", S`Find the eigenvalues of \(A=${M([[3, 1, 0], [0, 0, 2], [0, 0, -1]])}\) and an eigenvector for \(\lambda=0\). Is \(A\) invertible?`,
      [S`\(A\) is upper triangular: the eigenvalues are the diagonal entries \(3,\ 0,\ -1\).`,
        S`\(\lambda=0\): solve \(A\vec x=\vec 0\). \[${M([[3, 1, 0], [0, 0, 2], [0, 0, -1]])}\xrightarrow{R_3\to R_3+\frac12R_2}${M([[3, 1, 0], [0, 0, 2], [0, 0, 0]])}:\] \(x_3=0\), \(x_2=t\), \(x_1=-\tfrac13t\). With \(t=-3\): \(\vec x=(1,-3,0)\).`,
        S`Check: \(A${cv(1, -3, 0)}=${cv("3-3+0", "0+0+0", "0+0+0")}=\vec 0=0\cdot\vec x\) ✓. Since 0 is an eigenvalue, \(A\) is not invertible.`],
      S`eigenvalues \(3,0,-1\); \(E_0=\operatorname{span}\{(1,-3,0)\}\); \(A\) is singular`],
    ["Eigenvectors from geometry", S`Without computing, give the eigenvalues and eigenvectors of the projection \(P\) onto \(x_2=x_1\), and confirm with its matrix \(P=\tfrac12${M([[1, 1], [1, 1]])}\).`,
      [S`Vectors on the line are unchanged: \(\lambda=1\), \(\vec v_1=(1,1)\). Vectors perpendicular to it are sent to \(\vec 0\): \(\lambda=0\), \(\vec v_2=(1,-1)\).`,
        S`\[P\vec v_1=\tfrac12${M([[1, 1], [1, 1]])}${cv(1, 1)}=\tfrac12${cv(2, 2)}=${cv(1, 1)},\qquad P\vec v_2=\tfrac12${M([[1, 1], [1, 1]])}${cv(1, -1)}=\tfrac12${cv(0, 0)}=\vec 0.\]`,
        S`By the same reasoning a reflection has eigenvalues \(1\) and \(-1\), and a rotation by \(90^\circ\) has no real eigenvalues: it moves every nonzero vector off its line.`],
      S`\(\lambda=1\): \((1,1)\); \(\lambda=0\): \((1,-1)\)`, projFig],
  ]),

  practice([
    q("check", S`\(A=${M([[2, 3], [3, 2]])}\). The vector \((1,1)\) is an eigenvector. Find its eigenvalue.`, num(5),
      "Compute A(1,1).", [S`\(${M([[2, 3], [3, 2]])}${cv(1, 1)}=${cv(5, 5)}\).`], S`\(5\)`),
    q("check", S`Same \(A\). Find the eigenvalue of \((1,-1)\).`, num(-1),
      "Compute A(1,−1).", [S`\(${cv("2-3", "3-2")}=${cv(-1, 1)}=-1${cv(1, -1)}\).`], S`\(-1\)`),
    q("triangular", S`Find the largest eigenvalue of \(${M([[2, 7, -1], [0, 5, 3], [0, 0, -4]])}\).`, num(5),
      "Diagonal entries.", [S`Eigenvalues \(2,5,-4\).`], S`\(5\)`),
    q("test", S`Is \(\lambda=2\) an eigenvalue of \(${M([[3, 1], [1, 3]])}\)?`, choice(["yes", "no"], 0),
      "Is A − 2I singular?", [S`\(A-2I=${M([[1, 1], [1, 1]])}\) has rank 1.`], S`yes`),
    q("invertible", S`\(0\) is an eigenvalue of \(A\). Then \(A\) is:`, choice(["not invertible", "invertible", "the zero matrix", "symmetric"], 0),
      "Ax = 0 has a nonzero solution.", [S`A nonzero vector in \(\operatorname{Nul}A\).`], S`not invertible`),
  ]),

  ...hard([
    ["A parameter and an eigenvector", S`For which \(k\) is \((1,2)\) an eigenvector of \(A=${M([[1, "k"], [3, 2]])}\)? What is the eigenvalue?`,
      [S`\[A${cv(1, 2)}=${M([[1, "k"], [3, 2]])}${cv(1, 2)}=${cv("1+2k", "3+4")}=${cv("1+2k", 7)}.\]`,
        S`This must be \(\lambda${cv(1, 2)}=${cv("\\lambda", "2\\lambda")}\). The second entry gives \(\lambda=\tfrac72\); then \(1+2k=\tfrac72\), so \(k=\tfrac54\).`,
        S`Check: \(${M([[1, "\\tfrac54"], [3, 2]])}${cv(1, 2)}=${cv("1+\\tfrac52", 7)}=${cv("\\tfrac72", 7)}=\tfrac72${cv(1, 2)}\) ✓.`],
      S`\(k=\tfrac54\), \(\lambda=\tfrac72\)`],
    ["Eigenvalues of A² and A⁻¹", S`Prove: if \(A\vec x=\lambda\vec x\), then \(A^2\vec x=\lambda^2\vec x\), and if \(A\) is invertible, \(A^{-1}\vec x=\lambda^{-1}\vec x\). Check both for \(A=${M([[3, 1], [2, 2]])}\), \(\vec x=(1,1)\).`,
      [S`\(A^2\vec x=A(\lambda\vec x)=\lambda A\vec x=\lambda^2\vec x\). If \(A\) is invertible, \(\lambda\ne0\) and \(\vec x=A^{-1}A\vec x=\lambda A^{-1}\vec x\), so \(A^{-1}\vec x=\lambda^{-1}\vec x\).`,
        S`Here \(\lambda=4\). \[A^2=${M([[3, 1], [2, 2]])}${M([[3, 1], [2, 2]])}=${M([["9+2", "3+2"], ["6+4", "2+4"]])}=${M([[11, 5], [10, 6]])},\qquad A^2${cv(1, 1)}=${cv(16, 16)}=16${cv(1, 1)}.\]`,
        S`\(\det A=6-2=4\), \(A^{-1}=\tfrac14${M([[2, -1], [-2, 3]])}\): \(A^{-1}${cv(1, 1)}=\tfrac14${cv(1, 1)}\) ✓.`],
      S`\(A^2\vec x=\lambda^2\vec x\), \(A^{-1}\vec x=\lambda^{-1}\vec x\); here \(16\) and \(\tfrac14\)`],
  ], [
    q("hard", S`\(A\vec x=3\vec x\). Find the eigenvalue of \(\vec x\) for \(A^3-2A\).`, num(21),
      "λ³ − 2λ.", [S`\(27-6=21\).`], S`\(21\)`),
    q("hard", S`Find \(\dim E_1\) for \(A=${M([[1, 0, 0], [0, 1, 0], [0, 0, 5]])}\).`, num(2),
      "Nul(A − I).", [S`\(A-I=\operatorname{diag}(0,0,4)\): two free variables.`], S`\(2\)`),
    q("hard", S`\((1,k)\) is an eigenvector of \(${M([[2, 1], [4, 2]])}\) with eigenvalue 4. Find \(k\).`, num(2),
      "Row 1: 2 + k = 4.", [S`\(${cv("2+k", "4+2k")}=${cv(4, "4k")}\) gives \(k=2\); row 2: \(8=8\) ✓.`], S`\(2\)`),
  ]),

  wrapUp({
    qas: [
      ["What is an eigenvector?", "A nonzero x with Ax = λx: A only scales it."],
      ["How do I test whether λ is an eigenvalue?", "Row reduce A − λI; a free variable means yes."],
      ["What is the eigenspace?", "E_λ = Nul(A − λI): all eigenvectors for λ together with 0."],
      ["Where are the eigenvalues of a triangular matrix?", "On its diagonal."],
      ["What does eigenvalue 0 mean?", "A is not invertible."],
    ],
    summary: [
      "Ax = λx, x ≠ 0.",
      "λ is an eigenvalue ⇔ A − λI is singular.",
      "E_λ = Nul(A − λI), a subspace.",
      "Triangular: eigenvalues on the diagonal.",
      "Distinct eigenvalues ⇒ independent eigenvectors.",
    ],
    next: "8.2 finds all eigenvalues at once from the characteristic equation det(A − λI) = 0.",
  }),
];
