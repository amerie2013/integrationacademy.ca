// LINALG1 7.5 — Composition and Inverse Transformations: S∘T has standard matrix BA (order matters), compositions
// across different spaces, invertible linear maps and T⁻¹(x) = A⁻¹x, inverting by row reducing [A | I], and why
// projections cannot be undone — every product and inverse written out in matrix form.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, q, num, frac, choice, hard, definition, theorem, am, cv, sfig, steps } from "./lib.mjs";
import { shapeMap } from "./ws/fig7.mjs";
import { flowSvg } from "./ws/fig2.mjs";

export const TITLE = "7.5 Composition and Inverse Transformations";
export const ID = "11a10001-0001-4001-8001-000000000705";

const S = String.raw;
const M = (m) => am(m, false);
const L = [[0, 0], [2, 0], [2, 1], [1, 1], [1, 3], [0, 3]];
const flow = sfig(flowSvg(["x in ℝⁿ", "T: multiply by A", "T(x) in ℝᵐ", "S: multiply by B", "S(T(x)) = BAx"], 520), "first T (matrix A), then S (matrix B): the product BA, with A on the right");
const orderFig1 = sfig(shapeMap([[0, -1], [-1, 0]], L, { raw: true, label: "BA·shape" }), "rotate 90°, then reflect in the x₁-axis: BA = reflection in x₂ = −x₁");
const orderFig2 = sfig(shapeMap([[0, 1], [1, 0]], L, { raw: true, label: "AB·shape" }), "reflect first, then rotate: AB = reflection in x₂ = x₁ — a different map");
const shearFig = sfig(shapeMap([[1, 3], [0, 1]], [[0, 0], [1, 0], [1, 1], [0, 1]], { raw: true, label: "H·square" }), "the shear H moves points right by 3 × height; H⁻¹ moves them back");

export const blocks = () => [
  intro({
    icon: "🔗",
    title: "Composition and Inverse Transformations",
    overview: S`Doing one linear map after another gives a new linear map, the <strong>composition</strong>. Its standard matrix is the product of the two matrices — in the order that looks backwards: first \(T\) (matrix \(A\)) then \(S\) (matrix \(B\)) is \(BA\), because \(S(T(\vec x))=B(A\vec x)=(BA)\vec x\). This is the real reason matrix multiplication is defined the way it is, and why it is not commutative: rotating then reflecting is not reflecting then rotating. A map that can be undone is <strong>invertible</strong>, and undoing it is multiplying by \(A^{-1}\).`,
    goals: [
      "find the standard matrix of \\(S\\circ T\\) as \\(BA\\);",
      "show by example that \\(S\\circ T\\ne T\\circ S\\) in general;",
      "compose maps between spaces of different dimensions, checking sizes;",
      "decide whether a linear map is invertible and find \\(T^{-1}\\);",
      "solve for an unknown factor in a composition.",
    ],
    outcomes: "linear transformations: composition and inverses",
    prior: [
      [S`Compute \(${M([[1, 0], [0, -1]])}${M([[0, -1], [1, 0]])}\).`, S`\(${M([[0, -1], [-1, 0]])}\).`],
      [S`When is a square matrix invertible?`, S`When \(\det A\ne0\) (equivalently, \(A\) row reduces to \(I\)).`],
      [S`\((AB)^{-1}=\)?`, S`\(B^{-1}A^{-1}\).`],
    ],
    words: [
      ["Composition \\(S\\circ T\\)", "first \\(T\\), then \\(S\\): \\(\\vec x\\mapsto S(T(\\vec x))\\)", "read right to left"],
      ["Matrix of \\(S\\circ T\\)", "\\(BA\\)", "\\(A\\) acts first, so it is on the right"],
      ["Invertible map", "some \\(T^{-1}\\) with \\(T^{-1}(T(\\vec x))=\\vec x\\) and \\(T(T^{-1}(\\vec y))=\\vec y\\)", "needs a square invertible \\(A\\)"],
      ["\\(T^{-1}\\)", "the inverse map", "\\(T^{-1}(\\vec y)=A^{-1}\\vec y\\)"],
      ["Identity map", "\\(\\vec x\\mapsto\\vec x\\)", "matrix \\(I\\)"],
    ],
  }),

  section("📌 Composition is multiplication", S`
  ${theorem("matrix of a composition", S`If \(T:\mathbb R^n\to\mathbb R^m\) has standard matrix \(A\) (\(m\times n\)) and \(S:\mathbb R^m\to\mathbb R^p\) has standard matrix \(B\) (\(p\times m\)), then \(S\circ T:\mathbb R^n\to\mathbb R^p\) is linear with standard matrix \(BA\) (\(p\times n\)).`, S`\((S\circ T)(\vec x)=S(A\vec x)=B(A\vec x)=(BA)\vec x\) by associativity of matrix products. A matrix map is linear, so \(S\circ T\) is linear and \(BA\) is its standard matrix.`)}
  ${flow}
  ${keyIdea(S`Sizes chain like dominoes: \((p\times m)(m\times n)=p\times n\). The middle sizes must agree — the output space of \(T\) is the input space of \(S\).`)}`),

  section("📌 Inverse transformations", S`
  ${definition("invertible linear map", S`\(T:\mathbb R^n\to\mathbb R^n\) is <strong>invertible</strong> if there is \(S:\mathbb R^n\to\mathbb R^n\) with \(S(T(\vec x))=\vec x\) and \(T(S(\vec x))=\vec x\) for all \(\vec x\). Then \(S\) is unique and written \(T^{-1}\).`)}
  ${theorem("inverse of a matrix map", S`\(T(\vec x)=A\vec x\) is invertible exactly when \(A\) is invertible, and then \(T^{-1}(\vec y)=A^{-1}\vec y\).`, S`If \(A\) is invertible, \(S(\vec y)=A^{-1}\vec y\) gives \(S(T(\vec x))=A^{-1}A\vec x=\vec x\) and \(T(S(\vec y))=AA^{-1}\vec y=\vec y\). Conversely, if \(T^{-1}\) exists it is linear (7.2-style check), with standard matrix \(B\) say; then \(BA\) and \(AB\) are the matrices of the identity map, so \(BA=AB=I\).`)}
  ${shearFig}`),

  section("📌 Explore", S`<p>Pick two maps \(T\) and \(S\) of the plane. The explorer shows a shape after \(T\), after \(S\circ T\), and — switching the order — after \(T\circ S\), with the matrices \(BA\) and \(AB\). Find a pair for which the order does not matter.</p>`),
  widget("laCompose", { init: { t: "rot90", s: "refx" } }),

  section("📌 Common mistakes", watchOut([
    "First T then S is BA, not AB — the first map is on the RIGHT.",
    "S ∘ T and T ∘ S are usually different maps.",
    "The composition only exists when the output space of T is the input space of S.",
    "Only square matrices with det ≠ 0 give invertible maps; projections never do.",
    "(S ∘ T)⁻¹ = T⁻¹ ∘ S⁻¹: undo the last step first.",
  ])),

  examples([
    ["Order matters", S`\(T\) rotates the plane by \(90^\circ\) and \(S\) reflects in the \(x_1\)-axis. Find the matrices of \(S\circ T\) and \(T\circ S\) and describe them.`,
      [S`\(A=R_{90^\circ}=${M([[0, -1], [1, 0]])}\) and \(B=${M([[1, 0], [0, -1]])}\).`,
        S`First \(T\), then \(S\): \[BA=${M([[1, 0], [0, -1]])}${M([[0, -1], [1, 0]])}=${M([["0+0", "-1+0"], ["0-1", "0+0"]])}=${M([[0, -1], [-1, 0]])}.\] It swaps the coordinates and negates both: the reflection in \(x_2=-x_1\).`,
        S`First \(S\), then \(T\): \[AB=${M([[0, -1], [1, 0]])}${M([[1, 0], [0, -1]])}=${M([["0+0", "0+1"], ["1+0", "0+0"]])}=${M([[0, 1], [1, 0]])},\] the reflection in \(x_2=x_1\).`,
        S`Check on \(\vec e_1\): \(T\) sends it to \((0,1)\), then \(S\) to \((0,-1)\) — the first column of \(BA\) ✓.`],
      S`\(S\circ T\): reflection in \(x_2=-x_1\); \(T\circ S\): reflection in \(x_2=x_1\)`, orderFig1],
    ["Composing across dimensions", S`\(T:\mathbb R^3\to\mathbb R^2\) has matrix \(A=${M([[1, 0, 2], [0, 1, -1]])}\) and \(S:\mathbb R^2\to\mathbb R^2\) has matrix \(B=${M([[1, 1], [2, -1]])}\). Find the matrix of \(S\circ T\) and \((S\circ T)(1,1,1)\).`,
      [S`A \(2\times2\) matrix times a \(2\times3\) matrix is \(2\times3\), so \(S\circ T:\mathbb R^3\to\mathbb R^2\). \[BA=${M([[1, 1], [2, -1]])}${M([[1, 0, 2], [0, 1, -1]])}=${M([["1+0", "0+1", "2-1"], ["2-0", "0-1", "4+1"]])}=${M([[1, 1, 1], [2, -1, 5]])}.\]`,
        S`\[(S\circ T)${cv(1, 1, 1)}=${M([[1, 1, 1], [2, -1, 5]])}${cv(1, 1, 1)}=${cv("1+1+1", "2-1+5")}=${cv(3, 6)}.\]`,
        S`Check in two stages: \(A${cv(1, 1, 1)}=${cv("1+0+2", "0+1-1")}=${cv(3, 0)}\), then \(B${cv(3, 0)}=${cv("3+0", "6-0")}=${cv(3, 6)}\) ✓. (\(T\circ S\) does not exist: \(S\) outputs \(\mathbb R^2\) but \(T\) needs \(\mathbb R^3\).)`],
      S`\(BA=${M([[1, 1, 1], [2, -1, 5]])}\); \((S\circ T)(1,1,1)=(3,6)\)`, flow],
    ["Undoing a shear", S`Find the inverse of the shear \(T(\vec x)=H\vec x\), \(H=${M([[1, 3], [0, 1]])}\).`,
      [S`\(\det H=1\ne0\), so \(T\) is invertible. Swap the diagonal, negate the off-diagonal, divide by 1: \(H^{-1}=${M([[1, -3], [0, 1]])}\).`,
        S`Check both orders: \[HH^{-1}=${M([[1, 3], [0, 1]])}${M([[1, -3], [0, 1]])}=${M([["1+0", "-3+3"], ["0+0", "0+1"]])}=I,\qquad H^{-1}H=${M([[1, -3], [0, 1]])}${M([[1, 3], [0, 1]])}=${M([["1+0", "3-3"], ["0", "1"]])}=I.\]`,
        S`Geometrically, \(T^{-1}\) is the shear the other way: \(T^{-1}(x_1,x_2)=(x_1-3x_2,\ x_2)\).`],
      S`\(T^{-1}(\vec y)=${M([[1, -3], [0, 1]])}\vec y\)`, shearFig],
    ["The inverse of a map on ℝ³", S`\(T(\vec x)=A\vec x\) with \(A=${M([[1, 0, 1], [0, 1, 2], [1, 1, 4]])}\). Find \(T^{-1}\) and the vector \(\vec x\) with \(T(\vec x)=(3,1,6)\).`,
      [...steps([[1, 0, 1, 1, 0, 0], [0, 1, 2, 0, 1, 0], [1, 1, 4, 0, 0, 1]], [
          [S`Clear column 1 below its pivot.`, ["R3-R1"]],
          [S`Clear column 2 below its pivot.`, ["R3-R2"]],
          [S`Clear column 3 above its pivot.`, ["R1-R3", "R2-2R3"]],
        ], { bar: 3, intro: S`Row reduce \([\,A\mid I\,]\)` }).steps,
        S`So \(A^{-1}=${M([[2, 1, -1], [2, 3, -2], [-1, -1, 1]])}\) and \(T^{-1}(\vec y)=A^{-1}\vec y\).`,
        S`\[\vec x=A^{-1}${cv(3, 1, 6)}=${M([[2, 1, -1], [2, 3, -2], [-1, -1, 1]])}${cv(3, 1, 6)}=${cv("6+1-6", "6+3-12", "-3-1+6")}=${cv(1, -3, 2)}.\]`,
        S`Check: \[A\vec x=${M([[1, 0, 1], [0, 1, 2], [1, 1, 4]])}${cv(1, -3, 2)}=${cv("1+0+2", "0-3+4", "1-3+8")}=${cv(3, 1, 6)}\ \checkmark\]`],
      S`\(T^{-1}(\vec y)=${M([[2, 1, -1], [2, 3, -2], [-1, -1, 1]])}\vec y\), \(\vec x=(1,-3,2)\)`],
    ["A map that cannot be undone", S`Show that the projection \(P\) onto the \(x_1\)-axis is not invertible.`,
      [S`\(P=${M([[1, 0], [0, 0]])}\) and \(\det P=1(0)-0(0)=0\).`,
        S`Two different inputs have the same output: \[P${cv(2, 1)}=${cv(2, 0)},\qquad P${cv(2, 5)}=${cv(2, 0)}.\] No map can send \((2,0)\) back to both.`,
        S`Also \(P${cv(0, 1)}=${cv(0, 0)}\): a nonzero vector is crushed to \(\vec 0\), and every linear map sends \(\vec 0\) to \(\vec 0\).`],
      S`not invertible: \(\det P=0\) and \(P(2,1)=P(2,5)\)`],
  ]),

  practice([
    q("size", S`\(T:\mathbb R^4\to\mathbb R^3\), \(S:\mathbb R^3\to\mathbb R^2\). How many columns does the matrix of \(S\circ T\) have?`, num(4),
      "(2 × 3)(3 × 4).", [S`\(BA\) is \(2\times4\).`], S`\(4\)`),
    q("product", S`\(A=${M([[1, 2], [0, 1]])}\) (first), \(B=${M([[3, 0], [0, 1]])}\) (second). Find the \((1,2)\) entry of the matrix of \(S\circ T\).`, num(6),
      "BA.", [S`\(BA=${M([[3, 6], [0, 1]])}\).`], S`\(6\)`),
    q("inverse", S`\(T(\vec x)=${M([[2, 1], [5, 3]])}\vec x\). Find the \((1,2)\) entry of the matrix of \(T^{-1}\).`, num(-1),
      "det = 1.", [S`\(A^{-1}=${M([[3, -1], [-5, 2]])}\).`], S`\(-1\)`),
    q("invertible?", S`Is the rotation by \(37^\circ\) invertible?`, choice(["yes", "no"], 0),
      "Rotate back.", [S`\(R_{37^\circ}^{-1}=R_{-37^\circ}\); \(\det R_\theta=\cos^2\theta+\sin^2\theta=1\).`], S`yes`),
    q("order", S`\(A\) rotates by \(90^\circ\). The matrix of rotating by \(90^\circ\) four times is \(A^k\) with \(A^4=\)`, choice([S`\(I\)`, S`\(-I\)`, S`\(A\)`, S`\(0\)`], 0),
      "360°.", [S`\(R_{90^\circ}^4=R_{360^\circ}=I\).`], S`\(I\)`),
  ]),

  ...hard([
    ["Reflection by conjugation", S`Let \(F=${M([[1, 0], [0, -1]])}\) be the reflection in the \(x_1\)-axis. Compute \(R_{45^\circ}FR_{-45^\circ}\) and explain the result.`,
      [S`\(R_{45^\circ}=\tfrac1{\sqrt2}${M([[1, -1], [1, 1]])}\), \(R_{-45^\circ}=\tfrac1{\sqrt2}${M([[1, 1], [-1, 1]])}\).`,
        S`\[R_{45^\circ}F=\tfrac1{\sqrt2}${M([[1, -1], [1, 1]])}${M([[1, 0], [0, -1]])}=\tfrac1{\sqrt2}${M([[1, 1], [1, -1]])},\]`,
        S`\[R_{45^\circ}FR_{-45^\circ}=\tfrac12${M([[1, 1], [1, -1]])}${M([[1, 1], [-1, 1]])}=\tfrac12${M([["1-1", "1+1"], ["1+1", "1-1"]])}=${M([[0, 1], [1, 0]])}.\]`,
        S`Reading right to left: turn the line \(x_2=x_1\) down onto the \(x_1\)-axis, reflect there, turn back. The result is the reflection in \(x_2=x_1\).`],
      S`\(R_{45^\circ}FR_{-45^\circ}=${M([[0, 1], [1, 0]])}\), the reflection in \(x_2=x_1\)`, orderFig2],
    ["Finding the first factor", S`\(S\) has matrix \(B=${M([[2, 1], [1, 1]])}\) and \(S\circ T\) has matrix \(C=${M([[3, 1], [2, 1]])}\). Find the matrix \(A\) of \(T\).`,
      [S`\(BA=C\). Since \(\det B=2-1=1\ne0\), multiply on the left by \(B^{-1}=${M([[1, -1], [-1, 2]])}\): \(A=B^{-1}C\).`,
        S`\[A=${M([[1, -1], [-1, 2]])}${M([[3, 1], [2, 1]])}=${M([["3-2", "1-1"], ["-3+4", "-1+2"]])}=${M([[1, 0], [1, 1]])}.\]`,
        S`Check: \[BA=${M([[2, 1], [1, 1]])}${M([[1, 0], [1, 1]])}=${M([["2+1", "0+1"], ["1+1", "0+1"]])}=${M([[3, 1], [2, 1]])}=C\ \checkmark\]`],
      S`\(A=${M([[1, 0], [1, 1]])}\) (a vertical shear)`],
  ], [
    q("hard", S`\(T\) has matrix \(${M([[1, 1], [0, 1]])}\) and \(S\) has matrix \(${M([[2, 0], [0, 3]])}\). Find the \((1,2)\) entry of the matrix of \((S\circ T)^{-1}\).`, frac(-1, 3),
      "(BA)⁻¹ = A⁻¹B⁻¹.", [S`\(A^{-1}B^{-1}=${M([[1, -1], [0, 1]])}${M([["\\tfrac12", 0], [0, "\\tfrac13"]])}=${M([["\\tfrac12", "-\\tfrac13"], [0, "\\tfrac13"]])}\).`], S`\(-\tfrac13\)`),
    q("hard", S`\(S\circ T=T\circ S\) for every rotation \(T\) exactly when \(S\) is:`, choice(["a rotation or a multiple of I (among these maps)", "a reflection", "a shear", "a projection"], 0),
      "Rotations commute with rotations.", [S`\(R_\alpha R_\beta=R_{\alpha+\beta}=R_\beta R_\alpha\); reflections and shears do not commute with all rotations.`], "a rotation"),
    q("hard", S`\(T\) reflects in \(x_2=x_1\). Find \(\det\) of the matrix of \(T\circ T\circ T\).`, num(-1),
      "T∘T = identity.", [S`\(A^3=A\), \(\det A=0-1=-1\).`], S`\(-1\)`),
  ]),

  wrapUp({
    qas: [
      ["What is the matrix of S ∘ T?", "BA, where A is T's matrix (applied first) and B is S's."],
      ["Does the order matter?", "Usually yes: rotate-then-reflect differs from reflect-then-rotate."],
      ["When is T(x) = Ax invertible?", "When A is square with det A ≠ 0; then T⁻¹(y) = A⁻¹y."],
      ["What is (S ∘ T)⁻¹?", "T⁻¹ ∘ S⁻¹, with matrix A⁻¹B⁻¹."],
      ["Why can't a projection be undone?", "Different inputs share an output; det = 0."],
    ],
    summary: [
      "S ∘ T ↔ BA (first map on the right).",
      "Sizes: (p × m)(m × n) = p × n.",
      "Composition is not commutative.",
      "T invertible ⇔ A invertible; T⁻¹ ↔ A⁻¹.",
      "(S ∘ T)⁻¹ = T⁻¹ ∘ S⁻¹.",
    ],
    next: "7.6 asks when a map is one-to-one and when it is onto, through its kernel and range.",
  }),
];
