// LINALG1 6.1 — The Inverse of a Matrix: AB = BA = I, uniqueness, the 2 × 2 formula with ad − bc, singular
// matrices, solving Ax = b as x = A⁻¹b, and the rules (A⁻¹)⁻¹ = A, (AB)⁻¹ = B⁻¹A⁻¹, (Aᵀ)⁻¹ = (A⁻¹)ᵀ, (kA)⁻¹ = A⁻¹/k.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, q, num, choice, hard, definition, theorem, am, cv, sfig, steps } from "./lib.mjs";
import { rowPic } from "./ws/fig3.mjs";
import { vecs2 } from "./ws/fig5.mjs";

export const TITLE = "6.1 The Inverse of a Matrix";
export const ID = "11a10001-0001-4001-8001-000000000601";

const S = String.raw;
const M = (m) => am(m, false);
const prodFig = sfig(rowPic([[[[3, 1], [5, 2]], { label: "A" }], [[[2, -1], [-5, 3]], { label: "A⁻¹" }], "=", [[[1, 0], [0, 1]], { label: "I" }]]), "a matrix times its inverse is the identity");
const mapFig = sfig(vecs2([[[1, 0], "e₁", "blue"], [[0, 1], "e₂", "red"], [[3, 5], "Ae₁ = (3, 5)", "blue", null, true], [[1, 2], "Ae₂ = (1, 2)", "red", null, true]], { xmin: -1, xmax: 4, ymin: -1, ymax: 6 }, { raw: true }),
  "A sends e₁, e₂ to its columns; A⁻¹ sends the columns back to e₁, e₂");
const singFig = sfig(vecs2([[[2, 1], "column 1 = (2, 1)", "blue"], [[6, 3], "column 2 = (6, 3)", "red", null, true]], { xmin: -1, xmax: 7, ymin: -1, ymax: 4 }, { segs: [{ pts: [[-1, -0.5], [7, 3.5]], color: "violet", w: 2 }], raw: true }),
  "parallel columns: every Ax lies on one line, so A cannot be undone");

export const blocks = () => [
  intro({
    icon: "↩️",
    title: "The Inverse of a Matrix",
    overview: S`For numbers, \(a\ne0\) has an inverse \(a^{-1}\) with \(aa^{-1}=1\). For a square matrix \(A\), the analogue is a matrix \(A^{-1}\) with \(AA^{-1}=A^{-1}A=I\). When it exists it is unique, it undoes everything \(A\) does, and it solves every system at once: \(A\vec x=\vec b\iff\vec x=A^{-1}\vec b\). Not every nonzero matrix has one — a matrix with parallel columns, for instance, squashes the plane onto a line. For \(2\times2\) matrices a single number, \(ad-bc\), decides everything and gives a formula for the inverse.`,
    goals: [
      "state the definition of an invertible matrix and of its inverse;",
      "verify an inverse by computing \\(AB\\) and \\(BA\\);",
      "use the \\(2\\times2\\) formula and recognise singular matrices (\\(ad-bc=0\\));",
      "solve \\(A\\vec x=\\vec b\\) as \\(\\vec x=A^{-1}\\vec b\\);",
      "use \\((AB)^{-1}=B^{-1}A^{-1}\\), \\((A^T)^{-1}=(A^{-1})^T\\) and \\((kA)^{-1}=\\tfrac1kA^{-1}\\).",
    ],
    outcomes: "inverses and determinants: the inverse of a matrix",
    prior: [
      [S`Compute \(${M([[1, 2], [3, 4]])}${M([[1, 0], [0, 1]])}\).`, S`\(${M([[1, 2], [3, 4]])}\): the identity changes nothing.`],
      [S`Is \(AB=BA\) for all square \(A,B\)?`, S`No — order matters.`],
      [S`What does \((AB)^T\) equal?`, S`\(B^TA^T\).`],
    ],
    words: [
      ["Invertible", "there is \\(B\\) with \\(AB=BA=I\\)", "also called nonsingular"],
      ["\\(A^{-1}\\)", "the (unique) inverse", "\\(AA^{-1}=I\\)"],
      ["Singular", "not invertible", "parallel columns"],
      ["\\(ad-bc\\)", "the number that decides a \\(2\\times2\\) inverse", "the determinant (6.5)"],
      ["Reverse order", "\\((AB)^{-1}=B^{-1}A^{-1}\\)", "socks and shoes"],
    ],
  }),

  section("📌 The definition", S`
  ${definition("inverse", S`An \(n\times n\) matrix \(A\) is <strong>invertible</strong> if there is an \(n\times n\) matrix \(B\) with \[AB=I\quad\text{and}\quad BA=I.\] Then \(B\) is called the <strong>inverse</strong> of \(A\) and written \(A^{-1}\). A square matrix with no inverse is <strong>singular</strong>.`)}
  ${theorem("uniqueness", S`An invertible matrix has exactly one inverse.`, S`If \(B\) and \(C\) are both inverses of \(A\), then \(B=BI=B(AC)=(BA)C=IC=C\).`)}
  ${prodFig}
  ${mapFig}`),

  section("📌 The 2 × 2 case", S`
  ${theorem("2 × 2 inverse", S`Let \(A=${M([["a", "b"], ["c", "d"]])}\). If \(ad-bc\ne0\), then \[A^{-1}=\frac{1}{ad-bc}${M([["d", "-b"], ["-c", "a"]])}.\] If \(ad-bc=0\), \(A\) is singular.`, S`Multiply: \(${M([["a", "b"], ["c", "d"]])}${M([["d", "-b"], ["-c", "a"]])}=${M([["ad-bc", "-ab+ba"], ["cd-dc", "-cb+da"]])}=(ad-bc)I\); dividing by \(ad-bc\) gives \(I\), and the product in the other order is also \((ad-bc)I\). If \(ad-bc=0\), the columns \((a,c)\) and \((b,d)\) are parallel (or one is zero), so \(A\vec x=\vec 0\) has a nonzero solution; an inverse would force \(\vec x=A^{-1}\vec 0=\vec 0\).`)}
  ${keyIdea(S`Swap the diagonal, negate the off-diagonal, divide by \(ad-bc\). Always check with one product.`)}
  ${singFig}`),

  section("📌 Solving systems and the rules", S`
  ${theorem("unique solutions", S`If \(A\) is invertible, then for every \(\vec b\) the system \(A\vec x=\vec b\) has exactly one solution, \(\vec x=A^{-1}\vec b\).`, S`\(A(A^{-1}\vec b)=(AA^{-1})\vec b=\vec b\), so it is a solution. If \(A\vec x=\vec b\), multiply on the left by \(A^{-1}\): \(\vec x=A^{-1}A\vec x=A^{-1}\vec b\).`)}
  ${theorem("algebra of inverses", S`If \(A,B\) are invertible \(n\times n\) and \(k\ne0\): (1) \((A^{-1})^{-1}=A\); (2) \((AB)^{-1}=B^{-1}A^{-1}\); (3) \((A^T)^{-1}=(A^{-1})^T\); (4) \((kA)^{-1}=\tfrac1kA^{-1}\).`, S`Each time, multiply the claimed inverse by the matrix and get \(I\). (2): \((AB)(B^{-1}A^{-1})=A(BB^{-1})A^{-1}=AIA^{-1}=I\), and similarly in the other order. (3): \(A^T(A^{-1})^T=(A^{-1}A)^T=I^T=I\). (4): \((kA)(\tfrac1kA^{-1})=\tfrac kk AA^{-1}=I\).`)}`),

  section("📌 Explore", S`<p>Set the four entries of \(A\). The explorer shows \(ad-bc\), the inverse when it exists, and the check \(AA^{-1}=I\). Make the columns parallel and watch the inverse disappear. Switch to \(3\times3\) to set nine entries: the explorer finds \(\det A\) by cofactor expansion and builds \(A^{-1}=\tfrac1{\det A}\operatorname{adj}A\) (the method of 6.7), again checked with \(AA^{-1}=I\).</p>`),
  widget("laInv2", { init: { a: 3, b: 1, c: 5, d: 2 } }),

  section("📌 Common mistakes", watchOut([
    "Only SQUARE matrices can have inverses.",
    "A⁻¹ is not the matrix of reciprocals 1/aᵢⱼ.",
    "(AB)⁻¹ = B⁻¹A⁻¹ — the order reverses.",
    "A nonzero matrix can still be singular, e.g. one with parallel columns.",
    "Check an inverse by multiplying: one product equal to I is the test.",
  ])),

  examples([
    ["Verifying an inverse", S`Show that \(B=${M([[2, -1], [-5, 3]])}\) is the inverse of \(A=${M([[3, 1], [5, 2]])}\).`,
      [S`Compute \(AB\), each entry a row of \(A\) times a column of \(B\): \[AB=${M([[3, 1], [5, 2]])}${M([[2, -1], [-5, 3]])}=${M([["3(2)+1(-5)", "3(-1)+1(3)"], ["5(2)+2(-5)", "5(-1)+2(3)"]])}=${M([[1, 0], [0, 1]])}.\]`,
        S`Compute \(BA\): \[BA=${M([[2, -1], [-5, 3]])}${M([[3, 1], [5, 2]])}=${M([["2(3)-1(5)", "2(1)-1(2)"], ["-5(3)+3(5)", "-5(1)+3(2)"]])}=${M([[1, 0], [0, 1]])}.\]`,
        S`Both products are \(I\), so \(B=A^{-1}\).`],
      S`\(AB=BA=I\), so \(A^{-1}=${M([[2, -1], [-5, 3]])}\)`, prodFig],
    ["The 2 × 2 formula", S`Find the inverse of \(A=${M([[4, 3], [1, 1]])}\).`,
      [S`\(ad-bc=4(1)-3(1)=1\ne0\): invertible.`, S`Swap the diagonal, negate the off-diagonal, divide by 1: \[A^{-1}=\frac11${M([[1, -3], [-1, 4]])}=${M([[1, -3], [-1, 4]])}.\]`,
        S`Check: \[AA^{-1}=${M([[4, 3], [1, 1]])}${M([[1, -3], [-1, 4]])}=${M([["4-3", "-12+12"], ["1-1", "-3+4"]])}=${M([[1, 0], [0, 1]])}\ \checkmark\]`],
      S`\(A^{-1}=${M([[1, -3], [-1, 4]])}\)`],
    ["A singular matrix", S`Show that \(A=${M([[2, 6], [1, 3]])}\) has no inverse.`,
      [S`\(ad-bc=2(3)-6(1)=0\).`,
        ...steps([[2, 6, 0], [1, 3, 0]], [
          [S`Confirm with \(A\vec x=\vec 0\). Bring the 1 up.`, ["R1<->R2"]],
          [S`Clear below the pivot.`, ["R2-2R1"]],
        ], { intro: "Augmented matrix [A | 0]" }).steps,
        S`Column 2 has no pivot: \(x_2=t\) free, \(x_1=-3t\). With \(t=-1\): \[A${cv(3, -1)}=${M([[2, 6], [1, 3]])}${cv(3, -1)}=${cv("6-6", "3-3")}=${cv(0, 0)}.\]`,
        S`If \(A^{-1}\) existed, \(${cv(3, -1)}=A^{-1}A${cv(3, -1)}=A^{-1}\vec 0=\vec 0\) — impossible. So \(A\) is singular.`],
      S`singular: \(ad-bc=0\) and \(A(3,-1)=\vec 0\)`, singFig],
    ["Solving a system with the inverse", S`Solve \(3x_1+2x_2=1,\ 4x_1+3x_2=2\) using \(A^{-1}\).`,
      [S`Matrix form \(A\vec x=\vec b\): \(A=${M([[3, 2], [4, 3]])}\), \(\vec b=${cv(1, 2)}\). \(ad-bc=9-8=1\), so \(A^{-1}=${M([[3, -2], [-4, 3]])}\).`,
        S`\[\vec x=A^{-1}\vec b=${M([[3, -2], [-4, 3]])}${cv(1, 2)}=${cv("3(1)-2(2)", "-4(1)+3(2)")}=${cv(-1, 2)}.\]`,
        S`Check: \[A\vec x=${M([[3, 2], [4, 3]])}${cv(-1, 2)}=${cv("-3+4", "-4+6")}=${cv(1, 2)}\ \checkmark\]`],
      S`\((x_1,x_2)=(-1,2)\)`],
    ["The inverse of a product", S`For \(A=${M([[1, 2], [0, 1]])}\), \(B=${M([[1, 0], [3, 1]])}\), verify \((AB)^{-1}=B^{-1}A^{-1}\) and show \((AB)^{-1}\ne A^{-1}B^{-1}\).`,
      [S`\(AB=${M([[1, 2], [0, 1]])}${M([[1, 0], [3, 1]])}=${M([["1+6", "0+2"], ["0+3", "0+1"]])}=${M([[7, 2], [3, 1]])}\); \(ad-bc=7-6=1\), so \((AB)^{-1}=${M([[1, -2], [-3, 7]])}\).`,
        S`\(A^{-1}=${M([[1, -2], [0, 1]])}\), \(B^{-1}=${M([[1, 0], [-3, 1]])}\) (each has \(ad-bc=1\)). \[B^{-1}A^{-1}=${M([[1, 0], [-3, 1]])}${M([[1, -2], [0, 1]])}=${M([["1+0", "-2+0"], ["-3+0", "6+1"]])}=${M([[1, -2], [-3, 7]])}=(AB)^{-1}\ \checkmark\]`,
        S`\[A^{-1}B^{-1}=${M([[1, -2], [0, 1]])}${M([[1, 0], [-3, 1]])}=${M([["1+6", "0-2"], ["0-3", "0+1"]])}=${M([[7, -2], [-3, 1]])}\ne(AB)^{-1}.\]`],
      S`\((AB)^{-1}=B^{-1}A^{-1}=${M([[1, -2], [-3, 7]])}\)`],
  ]),

  practice([
    q("ad − bc", S`Find \(ad-bc\) for \(${M([[5, 2], [7, 3]])}\).`, num(1),
      "5·3 − 2·7.", [S`\(15-14=1\).`], S`\(1\)`),
    q("entry", S`Find the \((1,2)\) entry of \(${M([[5, 2], [7, 3]])}^{-1}\).`, num(-2),
      "Negate b, divide by ad − bc = 1.", [S`\(A^{-1}=${M([[3, -2], [-7, 5]])}\).`], S`\(-2\)`),
    q("singular?", S`Is \(${M([[4, -2], [-6, 3]])}\) invertible?`, choice(["no", "yes"], 0),
      "Compute ad − bc.", [S`\(12-12=0\).`], S`no`),
    q("solve", S`\(A^{-1}=${M([[1, 2], [0, 1]])}\). Find \(x_1\) in the solution of \(A\vec x=(3,4)\).`, num(11),
      "x = A⁻¹b.", [S`\(A^{-1}${cv(3, 4)}=${cv("3+8", "0+4")}\).`], S`\(11\)`),
    q("rule", S`\((AB)^{-1}=\)`, choice([S`\(B^{-1}A^{-1}\)`, S`\(A^{-1}B^{-1}\)`, S`\(BA\)`, S`\(A^{-1}+B^{-1}\)`], 0),
      "Reverse the order.", [S`\((AB)(B^{-1}A^{-1})=I\).`], S`\(B^{-1}A^{-1}\)`),
  ]),

  ...hard([
    ["A parameter that makes A singular", S`For which \(k\) is \(A=${M([["k", 4], [1, "k"]])}\) singular? Find \(A^{-1}\) for \(k=3\).`,
      [S`\(ad-bc=k\cdot k-4\cdot1=k^2-4=0\) gives \(k=\pm2\).`, S`For \(k=3\): \(ad-bc=9-4=5\), \[A^{-1}=\frac15${M([[3, -4], [-1, 3]])}.\]`,
        S`Check: \[\frac15${M([[3, 4], [1, 3]])}${M([[3, -4], [-1, 3]])}=\frac15${M([["9-4", "-12+12"], ["3-3", "-4+9"]])}=\frac15${M([[5, 0], [0, 5]])}=I\ \checkmark\]`],
      S`singular for \(k=\pm2\); for \(k=3\), \(A^{-1}=\tfrac15${M([[3, -4], [-1, 3]])}\)`],
    ["An equation with inverses", S`Solve \(AXB=C\) for \(X\) when \(A\) and \(B\) are invertible, then compute \(X\) for \(A=${M([[1, 1], [0, 1]])}\), \(B=${M([[2, 0], [0, 1]])}\), \(C=${M([[4, 3], [2, 1]])}\).`,
      [S`Multiply on the left by \(A^{-1}\) and on the right by \(B^{-1}\): \(A^{-1}(AXB)B^{-1}=IXI=X\), so \(X=A^{-1}CB^{-1}\).`,
        S`\(A^{-1}=${M([[1, -1], [0, 1]])}\), \(B^{-1}=${M([["\\tfrac12", 0], [0, 1]])}\). \[A^{-1}C=${M([[1, -1], [0, 1]])}${M([[4, 3], [2, 1]])}=${M([["4-2", "3-1"], ["0+2", "0+1"]])}=${M([[2, 2], [2, 1]])}.\]`,
        S`\[X=${M([[2, 2], [2, 1]])}${M([["\\tfrac12", 0], [0, 1]])}=${M([[1, 2], [1, 1]])}.\] Check: \(AXB=${M([[1, 1], [0, 1]])}${M([[1, 2], [1, 1]])}${M([[2, 0], [0, 1]])}=${M([[2, 3], [1, 1]])}${M([[2, 0], [0, 1]])}=${M([[4, 3], [2, 1]])}=C\) ✓.`],
      S`\(X=A^{-1}CB^{-1}=${M([[1, 2], [1, 1]])}\)`],
  ], [
    q("hard", S`\(A^2=I\) for an invertible \(A\). Then \(A^{-1}=\)`, choice([S`\(A\)`, S`\(I\)`, S`\(-A\)`, S`\(A^2\)`], 0),
      "A·A = I.", [S`\(AA=I\), so \(A\) is its own inverse.`], S`\(A\)`),
    q("hard", S`For which \(t\) is \(${M([["t", "t+1"], [2, "t+3"]])}\) singular? (Give the positive value.)`, num(1),
      "ad − bc = t(t + 3) − 2(t + 1).", [S`\(t^2+3t-2t-2=t^2+t-2=(t+2)(t-1)\).`], S`\(1\)`),
    q("hard", S`\(A^{-1}=${M([[2, 1], [1, 1]])}\). Find the \((2,1)\) entry of \(A\).`, num(-1),
      "A = (A⁻¹)⁻¹; ad − bc = 1.", [S`\(A=${M([[1, -1], [-1, 2]])}\).`], S`\(-1\)`),
  ]),

  wrapUp({
    qas: [
      ["What is A⁻¹?", "The matrix with AA⁻¹ = A⁻¹A = I; it exists only for some square matrices and is unique."],
      ["How do I invert a 2 × 2 matrix?", "If ad − bc ≠ 0: swap a and d, negate b and c, divide by ad − bc."],
      ["When is a 2 × 2 matrix singular?", "When ad − bc = 0 — its columns are parallel."],
      ["How does A⁻¹ solve systems?", "Ax = b has the unique solution x = A⁻¹b."],
      ["What is (AB)⁻¹?", "B⁻¹A⁻¹ — the order reverses."],
    ],
    summary: [
      "AA⁻¹ = A⁻¹A = I; the inverse is unique.",
      "2 × 2: A⁻¹ = (1/(ad − bc))[d −b; −c a].",
      "ad − bc = 0 ⇒ singular.",
      "x = A⁻¹b solves Ax = b.",
      "(AB)⁻¹ = B⁻¹A⁻¹, (Aᵀ)⁻¹ = (A⁻¹)ᵀ.",
    ],
    next: "6.2 computes inverses of larger matrices by row reducing [A | I].",
  }),
];
