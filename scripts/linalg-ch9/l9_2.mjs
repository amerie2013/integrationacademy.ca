// LINALG1 9.2 — Orthogonal Matrices: orthonormal sets, matrices with orthonormal columns (UᵀU = I), preservation of
// lengths, dot products and angles, square orthogonal matrices (Q⁻¹ = Qᵀ, det Q = ±1), solving Qx = b by Qᵀb,
// normalising an orthogonal set, and completing an orthonormal basis — every check a displayed product.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, q, num, choice, hard, definition, theorem, am, cv, sfig } from "./lib.mjs";
import { sqMap } from "./ws/fig7.mjs";
import { vecs3 } from "./ws/fig5.mjs";

export const TITLE = "9.2 Orthogonal Matrices";
export const ID = "11a10001-0001-4001-8001-000000000902";

const S = String.raw;
const M = (m) => am(m, false);
const T = (v) => M([v]);
const rotFig = sfig(sqMap([[0.6, -0.8], [0.8, 0.6]], { raw: true }), "an orthogonal matrix moves the unit square rigidly: lengths and right angles survive");
const onFig = sfig(vecs3([[[1, 2, 2], "(1, 2, 2)/3", "blue"], [[2, 1, -2], "(2, 1, −2)/3", "red"], [[-2, 2, -1], "(−2, 2, −1)/3", "green"]], { raw: true }), "three orthonormal vectors in ℝ³ (drawn three times longer)");

export const blocks = () => [
  intro({
    icon: "📐",
    title: "Orthogonal Matrices",
    overview: S`A set of vectors is <strong>orthonormal</strong> when the vectors are unit vectors at right angles to one another. Put them as the columns of a matrix \(U\) and all those dot products appear at once in \(U^TU\): orthonormal columns mean exactly \(U^TU=I\). Such matrices are the rigid motions of linear algebra — they keep lengths, dot products and angles. When \(U\) is square it is called an <strong>orthogonal matrix</strong> \(Q\), and its inverse costs nothing: \(Q^{-1}=Q^T\). Rotations and reflections are the familiar examples.`,
    goals: [
      "test orthonormality with the single product \\(U^TU\\);",
      "use \\(|U\\vec x|=|\\vec x|\\) and \\((U\\vec x)\\cdot(U\\vec y)=\\vec x\\cdot\\vec y\\);",
      "invert an orthogonal matrix by transposing and solve \\(Q\\vec x=\\vec b\\) as \\(\\vec x=Q^T\\vec b\\);",
      "normalise an orthogonal set into an orthogonal matrix;",
      "use \\(\\det Q=\\pm1\\) and complete an orthonormal basis.",
    ],
    outcomes: "orthogonality: orthonormal sets and orthogonal matrices",
    prior: [
      [S`Normalise \((1,2,2)\).`, S`Length 3: \(\tfrac13(1,2,2)\).`],
      [S`Entry \((i,j)\) of \(A^TA\) is …`, S`column \(i\) of \(A\) dotted with column \(j\).`],
      [S`\(R_\theta^{-1}=\)?`, S`\(R_{-\theta}\).`],
    ],
    words: [
      ["Orthonormal set", "unit vectors, pairwise orthogonal", "\\(\\vec u_i\\cdot\\vec u_j=0\\) or 1"],
      ["Orthonormal columns", "\\(U^TU=I\\)", "\\(U\\) may be tall"],
      ["Orthogonal matrix", "square with \\(Q^TQ=I\\)", "\\(Q^{-1}=Q^T\\)"],
      ["Isometry", "keeps lengths", "\\(|Q\\vec x|=|\\vec x|\\)"],
      ["\\(\\det Q\\)", "\\(\\pm1\\)", "rotation \\(+1\\), reflection \\(-1\\) (in \\(\\mathbb R^2\\))"],
    ],
  }),

  section("📌 Orthonormal columns", S`
  ${definition("orthonormal set", S`\(\{\vec u_1,\dots,\vec u_k\}\) is <strong>orthonormal</strong> if \(\vec u_i\cdot\vec u_j=0\) for \(i\ne j\) and \(\vec u_i\cdot\vec u_i=1\). An orthogonal set of nonzero vectors is automatically linearly independent.`)}
  ${theorem("UᵀU = I", S`An \(n\times k\) matrix \(U\) has orthonormal columns \(\iff U^TU=I_k\). Then for all \(\vec x,\vec y\): \[|U\vec x|=|\vec x|,\qquad (U\vec x)\cdot(U\vec y)=\vec x\cdot\vec y,\] and \(U\vec x\perp U\vec y\iff\vec x\perp\vec y\).`, S`Entry \((i,j)\) of \(U^TU\) is \(\vec u_i^T\vec u_j\); these are the entries of \(I\) exactly when the columns are orthonormal. Then \((U\vec x)^T(U\vec y)=\vec x^T(U^TU)\vec y=\vec x^T\vec y\); take \(\vec y=\vec x\) for lengths.`)}
  ${onFig}`),

  section("📌 Square orthogonal matrices", S`
  ${theorem("orthogonal matrices", S`A square \(Q\) with \(Q^TQ=I\) is an <strong>orthogonal matrix</strong>: \(Q^{-1}=Q^T\), so also \(QQ^T=I\) (the rows are orthonormal too). \(\det Q=\pm1\), and products and inverses of orthogonal matrices are orthogonal.`, S`\(Q^TQ=I\) for a square matrix means \(Q^T\) is its inverse, hence \(QQ^T=I\). \((\det Q)^2=\det Q^T\det Q=\det I=1\). \((Q_1Q_2)^T(Q_1Q_2)=Q_2^TQ_1^TQ_1Q_2=I\).`)}
  ${keyIdea(S`Solving \(Q\vec x=\vec b\) needs no row reduction: \(\vec x=Q^T\vec b\). Each coordinate is a dot product \(x_i=\vec q_i\cdot\vec b\).`)}
  ${rotFig}`),

  section("📌 Explore", S`<p>Choose a rotation or a reflection and its angle. The explorer shows \(Q\), the product \(Q^TQ\) (always \(I\)), \(\det Q\), and a vector with its image so you can compare lengths.</p>`),
  widget("laOrthoMat", { init: { kind: "rot", t: 53 } }),

  section("📌 Common mistakes", watchOut([
    "Orthogonal columns are not enough: they must also be UNIT vectors for UᵀU = I.",
    "A tall U with UᵀU = I does NOT have UUᵀ = I (UUᵀ is a projection, 9.4).",
    "“Orthogonal matrix” means orthonormal columns — the name is historical.",
    "det Q = ±1 does not make Q orthogonal: [2 0; 0 ½] has det 1.",
    "Q⁻¹ = Qᵀ only for orthogonal Q; for other matrices compute the inverse properly.",
  ])),

  examples([
    ["Testing orthonormal columns", S`Show that \(U=\tfrac13${M([[1, 2], [2, 1], [2, -2]])}\) has orthonormal columns. Is \(UU^T=I\)?`,
      [S`\[U^TU=\tfrac19${M([[1, 2, 2], [2, 1, -2]])}${M([[1, 2], [2, 1], [2, -2]])}=\tfrac19${M([["1+4+4", "2+2-4"], ["2+2-4", "4+1+4"]])}=${M([[1, 0], [0, 1]])}.\]`,
        S`\[UU^T=\tfrac19${M([[1, 2], [2, 1], [2, -2]])}${M([[1, 2, 2], [2, 1, -2]])}=\tfrac19${M([[5, 4, -2], [4, 5, 2], [-2, 2, 8]])}\ne I.\]`,
        S`A \(3\times2\) matrix can have orthonormal columns but cannot have \(UU^T=I\) (its rank is 2).`],
      S`\(U^TU=I_2\) but \(UU^T\ne I_3\)`],
    ["Lengths are preserved", S`For the same \(U\) and \(\vec x=(3,-3)\), compare \(|\vec x|\) and \(|U\vec x|\).`,
      [S`\[U\vec x=\tfrac13${M([[1, 2], [2, 1], [2, -2]])}${cv(3, -3)}=\tfrac13${cv("3-6", "6-3", "6+6")}=${cv(-1, 1, 4)}.\]`,
        S`\(|\vec x|^2=\vec x^T\vec x=9+9=18\) and \(|U\vec x|^2=${T([-1, 1, 4])}${cv(-1, 1, 4)}=1+1+16=18\) ✓.`],
      S`both lengths are \(\sqrt{18}=3\sqrt2\)`],
    ["Solving Qx = b by transposing", S`\(Q=\tfrac15${M([[3, -4], [4, 3]])}\). Verify \(Q^TQ=I\) and solve \(Q\vec x=(5,10)\).`,
      [S`\[Q^TQ=\tfrac1{25}${M([[3, 4], [-4, 3]])}${M([[3, -4], [4, 3]])}=\tfrac1{25}${M([["9+16", "-12+12"], ["-12+12", "16+9"]])}=I.\]`,
        S`\[\vec x=Q^T\vec b=\tfrac15${M([[3, 4], [-4, 3]])}${cv(5, 10)}=\tfrac15${cv("15+40", "-20+30")}=${cv(11, 2)}.\]`,
        S`Check: \(Q${cv(11, 2)}=\tfrac15${cv("33-8", "44+6")}=${cv(5, 10)}\) ✓.`],
      S`\(\vec x=(11,2)\)`, rotFig],
    ["From an orthogonal set to an orthogonal matrix", S`Show that \((1,1,1)\), \((1,-1,0)\), \((1,1,-2)\) are orthogonal and build an orthogonal matrix from them.`,
      [S`With \(V=${M([[1, 1, 1], [1, -1, 1], [1, 0, -2]])}\): \[V^TV=${M([[1, 1, 1], [1, -1, 0], [1, 1, -2]])}${M([[1, 1, 1], [1, -1, 1], [1, 0, -2]])}=${M([[3, 0, 0], [0, 2, 0], [0, 0, 6]])}.\] Off-diagonal zeros: orthogonal. The diagonal holds the squared lengths.`,
        S`Divide each column by its length: \[Q=${M([["\\tfrac1{\\sqrt3}", "\\tfrac1{\\sqrt2}", "\\tfrac1{\\sqrt6}"], ["\\tfrac1{\\sqrt3}", "-\\tfrac1{\\sqrt2}", "\\tfrac1{\\sqrt6}"], ["\\tfrac1{\\sqrt3}", 0, "-\\tfrac2{\\sqrt6}"]])},\qquad Q^TQ=\operatorname{diag}\left(\tfrac33,\tfrac22,\tfrac66\right)=I.\]`],
      S`\(Q\) as shown, with \(Q^TQ=I\)`],
    ["Determinant and type", S`Find \(\det Q\) for \(Q_1=${M([["0.6", "-0.8"], ["0.8", "0.6"]])}\) and \(Q_2=${M([["0.6", "0.8"], ["0.8", "-0.6"]])}\), and identify each map.`,
      [S`\(\det Q_1=0.36+0.64=1\): a rotation (by \(\varphi\) with \(\cos\varphi=0.6\), about \(53.13^\circ\)).`,
        S`\(\det Q_2=-0.36-0.64=-1\): a reflection. \(Q_2${cv(2, 1)}=${cv("1.2+0.8", "1.6-0.6")}=${cv(2, 1)}\): it fixes the line along \((2,1)\).`,
        S`Both satisfy \(Q^TQ=I\): e.g. \(Q_2^TQ_2=${M([["0.36+0.64", "0.48-0.48"], ["0.48-0.48", "0.64+0.36"]])}=I\).`],
      S`\(Q_1\): rotation (\(\det=1\)); \(Q_2\): reflection in the line along \((2,1)\) (\(\det=-1\))`],
  ]),

  practice([
    q("unit?", S`Is \(\tfrac15(3,4)\) a unit vector?`, choice(["yes", "no"], 0),
      "Length.", [S`\(\tfrac{9+16}{25}=1\).`], S`yes`),
    q("inverse", S`\(Q\) is orthogonal. Find the \((1,2)\) entry of \(Q^{-1}\) if \(Q=\tfrac15${M([[3, -4], [4, 3]])}\). (Decimal.)`, num(0.8),
      "Transpose.", [S`\(Q^T=\tfrac15${M([[3, 4], [-4, 3]])}\).`], S`\(0.8\)`),
    q("length", S`\(U\) has orthonormal columns and \(|\vec x|=7\). Find \(|U\vec x|\).`, num(7),
      "Isometry.", [S`\(|U\vec x|=|\vec x|\).`], S`\(7\)`),
    q("det", S`Possible determinants of an orthogonal matrix:`, choice([S`\(\pm1\)`, S`any nonzero number`, S`\(0\) or \(1\)`, S`\(\pm2\)`], 0),
      "(det Q)² = 1.", [S`\(\det Q^T\det Q=1\).`], S`\(\pm1\)`),
    q("solve", S`\(Q=${M([[0, 1], [-1, 0]])}\). Solve \(Q\vec x=(2,5)\): give \(x_2\).`, num(2),
      "x = Qᵀb.", [S`\(Q^T${cv(2, 5)}=${M([[0, -1], [1, 0]])}${cv(2, 5)}=${cv(-5, 2)}\).`], S`\(2\)`),
  ]),

  ...hard([
    ["Completing an orthogonal matrix", S`Find \(a,b,c\) so that \(Q=\tfrac13${M([[1, 2, "a"], [2, 1, "b"], [2, -2, "c"]])}\) is orthogonal.`,
      [S`The third column \(\vec q_3=\tfrac13(a,b,c)\) must be orthogonal to \((1,2,2)\) and \((2,1,-2)\): \(${M([[1, 2, 2], [2, 1, -2]])}${cv("a", "b", "c")}=\vec 0\).`,
        S`\[${M([[1, 2, 2], [2, 1, -2]])}\xrightarrow{R_2\to R_2-2R_1}${M([[1, 2, 2], [0, -3, -6]])}\xrightarrow{R_2\to-\frac13R_2,\ R_1\to R_1-2R_2}${M([[1, 0, -2], [0, 1, 2]])}:\ (a,b,c)=t(2,-2,1).\]`,
        S`Unit length: \(\tfrac19(4+4+1)t^2=1\Rightarrow t=\pm1\). Take \((a,b,c)=(-2,2,-1)\). Check column 3 against column 1: \(${T([1, 2, 2])}${cv(-2, 2, -1)}=-2+4-2=0\) ✓.`],
      S`\((a,b,c)=\pm(2,-2,1)\), e.g. \((-2,2,-1)\)`, onFig],
    ["Dot products are preserved", S`Prove \((U\vec x)\cdot(U\vec y)=\vec x\cdot\vec y\) when \(U^TU=I\), and deduce that \(U\) preserves angles.`,
      [S`\((U\vec x)\cdot(U\vec y)=(U\vec x)^T(U\vec y)=\vec x^TU^TU\vec y=\vec x^TI\vec y=\vec x\cdot\vec y\).`,
        S`With \(\vec y=\vec x\): \(|U\vec x|=|\vec x|\). Then \(\cos\angle(U\vec x,U\vec y)=\dfrac{(U\vec x)\cdot(U\vec y)}{|U\vec x||U\vec y|}=\dfrac{\vec x\cdot\vec y}{|\vec x||\vec y|}=\cos\angle(\vec x,\vec y)\).`],
      S`\(\vec x^TU^TU\vec y=\vec x^T\vec y\)`],
  ], [
    q("hard", S`\(Q_1,Q_2\) are orthogonal with \(\det Q_1=-1\), \(\det Q_2=-1\). Find \(\det(Q_1Q_2)\).`, num(1),
      "(−1)(−1).", [S`Two reflections compose to a rotation.`], S`\(1\)`),
    q("hard", S`For \(U=\tfrac13${M([[1, 2], [2, 1], [2, -2]])}\), find the \((3,3)\) entry of \(UU^T\). (Decimal.)`, num(0.8889),
      "(4 + 4)/9.", [S`Row 3 of \(U\) dotted with itself: \(\tfrac{4+4}9\).`], S`\(\tfrac89\)`),
    q("hard", S`Is \(${M([[1, 1], [-1, 1]])}\) orthogonal?`, choice(["no", "yes"], 0),
      "Column lengths.", [S`Columns are orthogonal but have length \(\sqrt2\): \(Q^TQ=2I\).`], S`no`),
  ]),

  wrapUp({
    qas: [
      ["How do I test orthonormal columns?", "Compute UᵀU; it must be I."],
      ["What do such matrices preserve?", "Lengths, dot products and angles."],
      ["What is an orthogonal matrix?", "A square Q with QᵀQ = I, so Q⁻¹ = Qᵀ."],
      ["How do I solve Qx = b?", "x = Qᵀb."],
      ["What is det Q?", "+1 or −1."],
    ],
    summary: [
      "Orthonormal columns ⇔ UᵀU = I.",
      "|Ux| = |x|, (Ux)·(Uy) = x·y.",
      "Square: Q⁻¹ = Qᵀ, QQᵀ = I.",
      "det Q = ±1.",
      "Normalise an orthogonal set to get Q.",
    ],
    next: "9.3 projects a vector onto a subspace using an orthogonal basis.",
  }),
];
