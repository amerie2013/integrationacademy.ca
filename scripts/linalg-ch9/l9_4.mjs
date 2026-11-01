// LINALG1 9.4 — Projection Matrices: projecting onto Col A for any basis via the normal equations AᵀAx̂ = Aᵀy
// (solved by row reducing [AᵀA | Aᵀy]), the projection matrix P = A(AᵀA)⁻¹Aᵀ with P² = P and Pᵀ = P, the line case
// aaᵀ/aᵀa, and I − P as the projection onto the complement — every product written out.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, q, num, frac, choice, hard, definition, theorem, am, cv, sfig, steps } from "./lib.mjs";
import { projPlane, projLine } from "./ws/fig9.mjs";
import { rowPic } from "./ws/fig3.mjs";

export const TITLE = "9.4 Projection Matrices and the Normal Equations";
export const ID = "11a10001-0001-4001-8001-000000000904";

const S = String.raw;
const M = (m) => am(m, false);
const T = (v) => M([v]);
const plFig = sfig(projPlane([1, 1, 0], [1, 0, 1], [2, 3, 4], [11 / 3, 4 / 3, 7 / 3], { raw: true }), "Col A is a plane; Ax̂ = ŷ is the foot of the perpendicular from y");
const neFig = sfig(rowPic([[[["Aᵀ"]], {}], [[["y − Ax̂"]], { label: "error" }], "=", [[[0], [0]], { label: "0" }]]), "the error is perpendicular to every column of A: Aᵀ(y − Ax̂) = 0");
const lnFig = sfig(projLine([1, 2], [4, 1], { raw: true }), "projection onto the line through a = (1, 2): P = aaᵀ/aᵀa");

export const blocks = () => [
  intro({
    icon: "🧲",
    title: "Projection Matrices and the Normal Equations",
    overview: S`The formula of 9.3 needs an orthogonal basis. Usually a subspace comes as \(\operatorname{Col}A\) for some matrix \(A\) whose columns are independent but not orthogonal. The projection is still determined by one condition: the error \(\vec y-A\hat x\) must be perpendicular to every column of \(A\), that is \(A^T(\vec y-A\hat x)=\vec 0\). These are the <strong>normal equations</strong> \(A^TA\hat x=A^T\vec y\) — a small square system solved by row reduction. Solving them for every \(\vec y\) at once gives the <strong>projection matrix</strong> \(P=A(A^TA)^{-1}A^T\).`,
    goals: [
      "derive and solve the normal equations \\(A^TA\\hat x=A^T\\vec y\\);",
      "compute \\(\\hat y=A\\hat x\\) and check \\(A^T(\\vec y-\\hat y)=\\vec 0\\);",
      "form \\(P=A(A^TA)^{-1}A^T\\) and verify \\(P^2=P\\), \\(P^T=P\\);",
      "use \\(P=\\dfrac{\\vec a\\vec a^T}{\\vec a^T\\vec a}\\) for a line;",
      "use \\(I-P\\) to project onto the orthogonal complement.",
    ],
    outcomes: "orthogonality: projection matrices and normal equations",
    prior: [
      [S`Compute \(A^TA\) for \(A=${M([[1, 1], [1, 0], [0, 1]])}\).`, S`\(${M([[2, 1], [1, 2]])}\).`],
      [S`\((\operatorname{Col}A)^\perp=\)?`, S`\(\operatorname{Nul}A^T\).`],
      [S`Invert \(${M([[2, 1], [1, 2]])}\).`, S`\(\tfrac13${M([[2, -1], [-1, 2]])}\).`],
    ],
    words: [
      ["Normal equations", "\\(A^TA\\hat x=A^T\\vec y\\)", "error \\(\\perp\\operatorname{Col}A\\)"],
      ["\\(A^TA\\)", "the Gram matrix of the columns", "invertible iff columns independent"],
      ["Projection matrix", "\\(P=A(A^TA)^{-1}A^T\\)", "\\(\\hat y=P\\vec y\\)"],
      ["Idempotent", "\\(P^2=P\\)", "projecting twice = once"],
      ["Complementary projection", "\\(I-P\\)", "projects onto \\((\\operatorname{Col}A)^\\perp\\)"],
    ],
  }),

  section("📌 The normal equations", S`
  ${theorem("normal equations", S`Let \(A\) have independent columns and \(W=\operatorname{Col}A\). The projection of \(\vec y\) onto \(W\) is \(\hat y=A\hat x\), where \(\hat x\) is the unique solution of \[A^TA\,\hat x=A^T\vec y.\]`, S`\(\hat y\in\operatorname{Col}A\) means \(\hat y=A\hat x\). The error \(\vec y-A\hat x\) must lie in \((\operatorname{Col}A)^\perp=\operatorname{Nul}A^T\): \(A^T(\vec y-A\hat x)=\vec 0\), i.e. \(A^TA\hat x=A^T\vec y\). If \(A^TA\vec x=\vec 0\) then \(\vec x^TA^TA\vec x=|A\vec x|^2=0\), so \(A\vec x=\vec 0\) and \(\vec x=\vec 0\) (independent columns): \(A^TA\) is invertible.`)}
  ${neFig}
  ${plFig}`),

  section("📌 The projection matrix", S`
  ${theorem("projection matrix", S`\(P=A(A^TA)^{-1}A^T\) satisfies \(\hat y=P\vec y\) for every \(\vec y\), and \[P^2=P,\qquad P^T=P.\] For a line through \(\vec a\): \(P=\dfrac{\vec a\vec a^T}{\vec a^T\vec a}\). For orthonormal columns (\(A=U\)): \(P=UU^T\). And \(I-P\) projects onto \((\operatorname{Col}A)^\perp\).`, S`\(\hat x=(A^TA)^{-1}A^T\vec y\), so \(\hat y=A\hat x=P\vec y\). \(P^2=A(A^TA)^{-1}(A^TA)(A^TA)^{-1}A^T=P\); \(P^T=A((A^TA)^{-1})^TA^T=P\) since \(A^TA\) is symmetric. For one column \(\vec a\), \(A^TA=\vec a^T\vec a\) is a number. \(\vec y-P\vec y\) is the error, which lies in the complement.`)}
  ${keyIdea(S`To project one vector, solve the normal equations — it is faster than forming \(P\). Form \(P\) only when you need to project many vectors or study the map itself.`)}
  ${lnFig}`),

  section("📌 Explore", S`<p>Choose the angle of a line through the origin. The explorer displays \(P=\vec a\vec a^T/\vec a^T\vec a\), checks \(P^2=P\) and \(P^T=P\), and shows a vector with its projection \(P\vec y\) and its complementary part \((I-P)\vec y\).</p>`),
  widget("laProjMat", { init: { t: 63, x: 4, y: 1 } }),

  section("📌 Common mistakes", watchOut([
    "The normal equations are AᵀAx̂ = Aᵀy — multiply BOTH sides by Aᵀ.",
    "x̂ gives the coordinates of ŷ in the columns of A; the projection itself is ŷ = Ax̂.",
    "(AᵀA)⁻¹ ≠ A⁻¹(Aᵀ)⁻¹ when A is not square — A has no inverse.",
    "P = A(AᵀA)⁻¹Aᵀ is n × n and symmetric; it is I only when Col A is all of ℝⁿ.",
    "AᵀA is invertible only for independent columns.",
  ])),

  examples([
    ["Projecting with the normal equations", S`Project \(\vec y=(2,3,4)\) onto \(\operatorname{Col}A\), \(A=${M([[1, 1], [1, 0], [0, 1]])}\).`,
      [S`\[A^TA=${M([[1, 1, 0], [1, 0, 1]])}${M([[1, 1], [1, 0], [0, 1]])}=${M([["1+1+0", "1+0+0"], ["1+0+0", "1+0+1"]])}=${M([[2, 1], [1, 2]])},\quad A^T\vec y=${M([[1, 1, 0], [1, 0, 1]])}${cv(2, 3, 4)}=${cv(5, 6)}.\]`,
        ...steps([[2, 1, 5], [1, 2, 6]], [[S`Bring the 1 up.`, ["R1<->R2"]], [S`Clear column 1.`, ["R2-2R1"]], [S`Scale the pivot.`, ["R2*-1/3"]], [S`Clear column 2 above its pivot.`, ["R1-2R2"]]], { intro: S`Solve \([\,A^TA\mid A^T\vec y\,]\)` }).steps,
        S`\(\hat x=(\tfrac43,\tfrac73)\), \(\hat y=A\hat x=${M([[1, 1], [1, 0], [0, 1]])}${cv("\\tfrac43", "\\tfrac73")}=${cv("\\tfrac{11}3", "\\tfrac43", "\\tfrac73")}\). Error \(\vec e=${cv("-\\tfrac53", "\\tfrac53", "\\tfrac53")}\), and \(A^T\vec e=${cv("-\\tfrac53+\\tfrac53+0", "-\\tfrac53+0+\\tfrac53")}=\vec 0\) ✓.`],
      S`\(\hat y=(\tfrac{11}3,\tfrac43,\tfrac73)\)`, plFig],
    ["The projection matrix of a plane", S`Find \(P\) for \(A=${M([[1, 1], [1, 0], [0, 1]])}\) and check it on \(\vec y=(2,3,4)\).`,
      [S`\((A^TA)^{-1}=${M([[2, 1], [1, 2]])}^{-1}=\tfrac13${M([[2, -1], [-1, 2]])}\). \[A(A^TA)^{-1}=\tfrac13${M([[1, 1], [1, 0], [0, 1]])}${M([[2, -1], [-1, 2]])}=\tfrac13${M([[1, 1], [2, -1], [-1, 2]])}.\]`,
        S`\[P=\tfrac13${M([[1, 1], [2, -1], [-1, 2]])}${M([[1, 1, 0], [1, 0, 1]])}=\tfrac13${M([["1+1", "1+0", "0+1"], ["2-1", "2+0", "0-1"], ["-1+2", "-1+0", "0+2"]])}=\tfrac13${M([[2, 1, 1], [1, 2, -1], [1, -1, 2]])}.\]`,
        S`\(P${cv(2, 3, 4)}=\tfrac13${cv("4+3+4", "2+6-4", "2-3+8")}=${cv("\\tfrac{11}3", "\\tfrac43", "\\tfrac73")}\) ✓ (Example 1).`],
      S`\(P=\tfrac13${M([[2, 1, 1], [1, 2, -1], [1, -1, 2]])}\)`],
    ["P² = P and Pᵀ = P", S`Verify both properties for the \(P\) of Example 2.`,
      [S`\(P^T=P\) by inspection (the matrix is symmetric).`,
        S`\[P^2=\tfrac19${M([[2, 1, 1], [1, 2, -1], [1, -1, 2]])}${M([[2, 1, 1], [1, 2, -1], [1, -1, 2]])}=\tfrac19${M([["4+1+1", "2+2-1", "2-1+2"], ["2+2-1", "1+4+1", "1-2-2"], ["2-1+2", "1-2-2", "1+1+4"]])}=\tfrac19${M([[6, 3, 3], [3, 6, -3], [3, -3, 6]])}=P.\]`],
      S`\(P^2=P\), \(P^T=P\)`],
    ["Projection onto a line", S`Find the projection matrix onto the line through \(\vec a=(1,2)\) and project \(\vec y=(4,1)\).`,
      [S`\[P=\frac{\vec a\vec a^T}{\vec a^T\vec a}=\frac{1}{5}${cv(1, 2)}${T([1, 2])}=\tfrac15${M([[1, 2], [2, 4]])}.\]`,
        S`\(P\vec y=\tfrac15${M([[1, 2], [2, 4]])}${cv(4, 1)}=\tfrac15${cv("4+2", "8+4")}=${cv("\\tfrac65", "\\tfrac{12}5")}\). Error \(\vec y-P\vec y=(\tfrac{14}5,-\tfrac75)\); \(\vec a^T\vec e=\tfrac{14-14}5=0\) ✓.`],
      S`\(P=\tfrac15${M([[1, 2], [2, 4]])}\), \(P\vec y=(\tfrac65,\tfrac{12}5)\)`, lnFig],
    ["Projecting onto the complement", S`Project \(\vec y=(1,2,6)\) onto the plane \(x_1+x_2+x_3=0\) using \(I-P\) for the normal line.`,
      [S`The plane is \(W^\perp\) for \(W=\operatorname{span}\{\vec a\}\), \(\vec a=(1,1,1)\). \(P_W=\tfrac13${M([[1, 1, 1], [1, 1, 1], [1, 1, 1]])}\), so \[I-P_W=\tfrac13${M([[2, -1, -1], [-1, 2, -1], [-1, -1, 2]])}.\]`,
        S`\((I-P_W)\vec y=\tfrac13${cv("2-2-6", "-1+4-6", "-1-2+12")}=${cv(-2, -1, 3)}\). Check: \(-2-1+3=0\) ✓ (in the plane), and \(\vec y-(-2,-1,3)=(3,3,3)\parallel\vec a\) ✓.`],
      S`\((-2,-1,3)\)`],
  ]),

  practice([
    q("AᵀA", S`Find the \((1,2)\) entry of \(A^TA\) for \(A=${M([[1, 2], [0, 1], [1, 0]])}\).`, num(2),
      "Column 1 · column 2.", [S`\(1(2)+0(1)+1(0)=2\).`], S`\(2\)`),
    q("line", S`Find the \((2,2)\) entry of the projection onto the line through \((3,4)\). (Decimal.)`, num(0.64),
      "16/25.", [S`\(\tfrac1{25}${M([[9, 12], [12, 16]])}\).`], S`\(0.64\)`),
    q("idempotent", S`For any projection matrix, \(P^3=\)`, choice([S`\(P\)`, S`\(I\)`, S`\(0\)`, S`\(3P\)`], 0),
      "P² = P.", [S`\(P^3=P^2P=PP=P\).`], S`\(P\)`),
    q("complement", S`\(P\) projects onto a plane in \(\mathbb R^3\). What is the rank of \(I-P\)?`, num(1),
      "Projection onto the normal line.", [S`\(\dim W^\perp=1\).`], S`\(1\)`),
    q("x̂", S`Normal equations \(${M([[2, 0], [0, 3]])}\hat x=${cv(4, 6)}\). Find \(\hat x_2\).`, num(2),
      "6/3.", [S`Diagonal system.`], S`\(2\)`),
  ]),

  ...hard([
    ["Projection onto a plane in ℝ⁴", S`Project \(\vec y=(1,0,2,3)\) onto \(\operatorname{Col}A\), \(A=${M([[1, 0], [1, 1], [1, 1], [1, 2]])}\), and verify the error is perpendicular to both columns.`,
      [S`\[A^TA=${M([[1, 1, 1, 1], [0, 1, 1, 2]])}${M([[1, 0], [1, 1], [1, 1], [1, 2]])}=${M([[4, 4], [4, 6]])},\quad A^T\vec y=${cv("1+0+2+3", "0+0+2+6")}=${cv(6, 8)}.\]`,
        ...steps([[4, 4, 6], [4, 6, 8]], [[S`Clear column 1.`, ["R2-R1"]], [S`Scale both pivots.`, ["R1*1/4", "R2*1/2"]], [S`Clear column 2 above its pivot.`, ["R1-R2"]]], { intro: S`Solve the normal equations` }).steps,
        S`\(\hat x=(\tfrac12,1)\), \(\hat y=A\hat x=${cv("\\tfrac12", "\\tfrac32", "\\tfrac32", "\\tfrac52")}\), \(\vec e=\vec y-\hat y=${cv("\\tfrac12", "-\\tfrac32", "\\tfrac12", "\\tfrac12")}\). \(A^T\vec e=${cv("\\tfrac12-\\tfrac32+\\tfrac12+\\tfrac12", "0-\\tfrac32+\\tfrac12+1")}=${cv(0, 0)}\) ✓.`],
      S`\(\hat y=(\tfrac12,\tfrac32,\tfrac32,\tfrac52)\)`],
    ["Why P is symmetric and idempotent", S`Prove \(P^2=P\) and \(P^T=P\) for \(P=A(A^TA)^{-1}A^T\), and show that the eigenvalues of \(P\) are 0 and 1.`,
      [S`\(P^2=A(A^TA)^{-1}\underbrace{A^TA(A^TA)^{-1}}_{I}A^T=P\). \(P^T=(A^T)^T\big((A^TA)^{-1}\big)^TA^T=A(A^TA)^{-1}A^T\), since \(A^TA\) is symmetric and so is its inverse.`,
        S`If \(P\vec v=\lambda\vec v\) with \(\vec v\ne\vec 0\): \(\lambda\vec v=P\vec v=P^2\vec v=\lambda^2\vec v\), so \(\lambda^2=\lambda\), \(\lambda\in\{0,1\}\). Vectors in \(\operatorname{Col}A\) have \(\lambda=1\); vectors in \(\operatorname{Nul}A^T\) have \(\lambda=0\).`],
      S`\(P^2=P\), \(P^T=P\), eigenvalues 0 and 1`],
  ], [
    q("hard", S`\(P\) projects \(\mathbb R^4\) onto a 2-dimensional subspace. Find \(\operatorname{tr}P\).`, num(2),
      "Eigenvalues 1, 1, 0, 0.", [S`Trace = sum of eigenvalues.`], S`\(2\)`),
    q("hard", S`Project \((1,1,1)\) onto \(\operatorname{Col}${M([[1], [2], [2]])}\). Give the first entry.`, frac(5, 9),
      "aᵀy / aᵀa = 5/9.", [S`\(\tfrac59(1,2,2)\).`], S`\(\tfrac59\)`),
    q("hard", S`Is \(${M([[1, 1], [0, 0]])}\) an orthogonal projection matrix?`, choice(["no", "yes"], 0),
      "Check Pᵀ = P.", [S`\(P^2=P\) but \(P^T\ne P\): a non-orthogonal (oblique) projection.`], S`no`),
  ]),

  wrapUp({
    qas: [
      ["What are the normal equations?", "AᵀAx̂ = Aᵀy: the error y − Ax̂ is perpendicular to Col A."],
      ["What is ŷ?", "ŷ = Ax̂, the projection of y onto Col A."],
      ["What is the projection matrix?", "P = A(AᵀA)⁻¹Aᵀ; for a line P = aaᵀ/aᵀa; for orthonormal U, P = UUᵀ."],
      ["Which properties characterise P?", "P² = P and Pᵀ = P."],
      ["How do I project onto the complement?", "Use I − P."],
    ],
    summary: [
      "AᵀAx̂ = Aᵀy, ŷ = Ax̂.",
      "Check Aᵀ(y − ŷ) = 0.",
      "P = A(AᵀA)⁻¹Aᵀ, P² = P = Pᵀ.",
      "Line: aaᵀ/aᵀa.",
      "I − P projects onto (Col A)⊥.",
    ],
    next: "9.5 turns any basis into an orthogonal one: the Gram–Schmidt process.",
  }),
];
