// LINALG1 3.7 — Properties of Matrix Multiplication and Powers: associativity ((AB)C = A(BC), (AB)x = A(Bx)),
// distributive laws, scalars, the identity, (AB)ᵀ = BᵀAᵀ, powers Aᵏ (diagonal and nilpotent examples), and the
// algebra that fails: (A + B)² ≠ A² + 2AB + B², (AB)² ≠ A²B² in general.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, q, num, choice, hard, definition, theorem, am, cv, sfig, vec } from "./lib.mjs";
import { rowPic, patternPic } from "./ws/fig3.mjs";

export const TITLE = "3.7 Properties of Matrix Multiplication and Powers";
export const ID = "11a10001-0001-4001-8001-000000000307";

const S = String.raw;
const M = (m) => am(m, false);
const trFig = sfig(rowPic([[[[7, 9], [-2, -4]], { label: "AB" }], "→", [[[7, -2], [9, -4]], { label: "(AB)ᵀ = BᵀAᵀ" }]]), "transposing a product reverses the order");
const powFig = sfig(rowPic([[[[2, 0, 0], [0, -1, 0], [0, 0, 3]], { cells: [[0, 0], [1, 1], [2, 2]], label: "D" }], "→", [[[8, 0, 0], [0, -1, 0], [0, 0, 27]], { cells: [[0, 0], [1, 1], [2, 2]], label: "D³" }]]), "powers of a diagonal matrix: cube each diagonal entry");
const nilFig = sfig(patternPic("upper", 3), "a strictly upper triangular N (zero diagonal) has N³ = 0");

export const blocks = () => [
  intro({
    icon: "⚙️",
    title: "Properties of Matrix Multiplication and Powers",
    overview: S`Matrix multiplication is not commutative, but it obeys most of the other laws of arithmetic: it is associative, it distributes over addition, scalars move freely, and the identity acts as 1. Associativity in particular means \((AB)\vec x=A(B\vec x)\): multiplying matrices is the same as applying them one after the other. Transposing a product reverses the order, \((AB)^T=B^TA^T\). With these laws we can define powers \(A^k\) — but familiar formulas like \((A+B)^2=A^2+2AB+B^2\) need care, because \(AB\) and \(BA\) may differ.`,
    goals: [
      "use associativity, the distributive laws and scalar rules for products;",
      "explain why \\((AB)\\vec x=A(B\\vec x)\\);",
      "prove and use \\((AB)^T=B^TA^T\\);",
      "compute powers of matrices, especially diagonal and triangular ones;",
      "recognise which algebraic identities fail for matrices, and why.",
    ],
    outcomes: "matrix algebra: properties of matrix multiplication, transpose of a product, powers",
    prior: [
      [S`Compute \(${M([[1, 2], [0, 1]])}${M([[1, 0], [3, 1]])}\).`, S`\(${M([[7, 2], [3, 1]])}\) (3.6).`],
      [S`Is \(AB=BA\) in general?`, S`No (3.6).`],
      [S`What is \((A+B)^T\)?`, S`\(A^T+B^T\) (3.2).`],
    ],
    words: [
      ["Associative", "\\((AB)C=A(BC)\\)", "brackets can be dropped: \\(ABC\\)"],
      ["Distributive", "\\(A(B+C)=AB+AC\\), \\((A+B)C=AC+BC\\)", "order kept on each side"],
      ["Power", "\\(A^k=A\\cdots A\\) (\\(k\\) factors), \\(A^0=I\\)", "square matrices only"],
      ["Nilpotent", "\\(A^k=0\\) for some \\(k\\)", "strictly triangular matrices"],
      ["Transpose of a product", "\\((AB)^T=B^TA^T\\)", "order reversed"],
    ],
  }),

  section("📌 The laws that hold", S`
  ${theorem("properties of matrix multiplication", S`Whenever the sizes allow: (1) \((AB)C=A(BC)\); (2) \(A(B+C)=AB+AC\) and \((A+B)C=AC+BC\); (3) \(k(AB)=(kA)B=A(kB)\); (4) \(I_mA=A=AI_n\) for \(m\times n\) \(A\).`, S`(2): column \(j\) of \(A(B+C)\) is \(A(\vec b_j+\vec c_j)=A\vec b_j+A\vec c_j\) by linearity of the matrix–vector product. (1): first \((AB)\vec x=A(B\vec x)\) — write \(B\vec x=\sum x_j\vec b_j\); then \(A(B\vec x)=\sum x_jA\vec b_j=(AB)\vec x\). Applying this to each column \(\vec c_j\) of \(C\) gives the columns of \((AB)C\) and \(A(BC)\) equal. (3), (4) are checked entry by entry.`)}
  ${keyIdea(S`\((AB)\vec x=A(B\vec x)\): the product \(AB\) does "first \(B\), then \(A\)". That is the reason for the definition of matrix multiplication.`)}`),

  section("📌 The transpose of a product", S`
  ${theorem("reversal law", S`If \(AB\) is defined, then \((AB)^T=B^TA^T\). More generally \((A_1A_2\cdots A_k)^T=A_k^T\cdots A_2^TA_1^T\).`, S`\(((AB)^T)_{ij}=(AB)_{ji}=\sum_k a_{jk}b_{ki}=\sum_k (B^T)_{ik}(A^T)_{kj}=(B^TA^T)_{ij}\). The general case follows by repeating this.`)}
  ${trFig}
  <p>Note \((AB)^T=A^TB^T\) is usually <em>wrong</em> — it may not even be defined.</p>`),

  section("📌 Powers", S`
  ${definition("powers", S`For a square matrix \(A\) and \(k\ge1\), \(A^k=AA\cdots A\) (\(k\) factors), and \(A^0=I\). By associativity \(A^rA^s=A^{r+s}\) and \((A^r)^s=A^{rs}\).`)}
  <ul><li><strong>Diagonal matrices:</strong> \(\operatorname{diag}(d_1,\dots,d_n)^k=\operatorname{diag}(d_1^k,\dots,d_n^k)\).</li><li><strong>Strictly triangular</strong> (triangular with zero diagonal) \(n\times n\) matrices are <strong>nilpotent</strong>: \(N^n=0\).</li></ul>
  ${powFig}
  ${nilFig}`),

  section("📌 What fails", S`
  <p>Because \(AB\ne BA\) in general:</p>
  <ul><li>\((A+B)^2=A^2+AB+BA+B^2\), which equals \(A^2+2AB+B^2\) only if \(AB=BA\);</li><li>\((AB)^2=ABAB\), which need not equal \(A^2B^2\);</li><li>\(AB=AC\) does not imply \(B=C\) (no cancellation), and \(A^2=0\) does not imply \(A=0\).</li></ul>`),

  section("📌 Explore", S`<p>With the two \(2\times2\) matrices, compare \(AB\) and \(BA\) entry by entry. Then try the other pairs: when \(BA\) is defined, is it ever equal to \(AB\)?</p>`),
  widget("laMatMul", { init: { set: "sq" } }),

  section("📌 Common mistakes", watchOut([
    "(AB)ᵀ = BᵀAᵀ — reverse the order.",
    "(A + B)² = A² + AB + BA + B², not A² + 2AB + B².",
    "A(B + C) = AB + AC keeps A on the LEFT on both sides.",
    "Powers are defined only for square matrices.",
    "Powers of a non-diagonal matrix are NOT found by powering each entry.",
  ])),

  examples([
    ["The reversal law", S`Verify \((AB)^T=B^TA^T\) for \(A=${M([[1, 2], [0, -1]])}\), \(B=${M([[3, 1], [2, 4]])}\).`,
      [S`\(AB=${M([["3+4", "1+8"], ["0-2", "0-4"]])}=${M([[7, 9], [-2, -4]])}\), so \((AB)^T=${M([[7, -2], [9, -4]])}\).`, S`\(B^TA^T=${M([[3, 2], [1, 4]])}${M([[1, 0], [2, -1]])}=${M([["3+4", "0-2"], ["1+8", "0-4"]])}=${M([[7, -2], [9, -4]])}\) ✓.`, S`(And \(A^TB^T=${M([[1, 0], [2, -1]])}${M([[3, 2], [1, 4]])}=${M([[3, 2], [5, 0]])}\) — different.)`],
      S`both equal \(${M([[7, -2], [9, -4]])}\)`, trFig],
    ["Powers of a diagonal matrix", S`Compute \(D^3\) for \(D=\operatorname{diag}(2,-1,3)\).`,
      [S`\(D^2=DD\): row \(i\) times column \(j\) is 0 unless \(i=j\), and the diagonal entries multiply: \(D^2=\operatorname{diag}(4,1,9)\).`, S`\(D^3=D^2D=\operatorname{diag}(8,-1,27)\).`],
      S`\(D^3=\operatorname{diag}(8,-1,27)\)`, powFig],
    ["A nilpotent matrix", S`Compute \(N^2\) and \(N^3\) for \(N=${M([[0, 1, 2], [0, 0, 3], [0, 0, 0]])}\).`,
      [S`\(N^2=NN\): row 1 \((0,1,2)\) with columns \((0,0,0),(1,0,0),(2,3,0)\): \(0\), \(0\), \(0+3+0=3\); rows 2 and 3 give 0s. \(N^2=${M([[0, 0, 3], [0, 0, 0], [0, 0, 0]])}\).`, S`\(N^3=N^2N\): row 1 \((0,0,3)\) times the columns of \(N\): \(0,0,0\). So \(N^3=0\) although \(N\ne0\).`],
      S`\(N^2=${M([[0, 0, 3], [0, 0, 0], [0, 0, 0]])}\), \(N^3=0\)`, nilFig],
    ["(A + B)² is not A² + 2AB + B²", S`For \(A=${M([[1, 1], [0, 0]])}\), \(B=${M([[0, 0], [1, 0]])}\), compare \((A+B)^2\) with \(A^2+2AB+B^2\).`,
      [S`\(A+B=${M([[1, 1], [1, 0]])}\), so \((A+B)^2=${M([["1+1", "1+0"], ["1+0", "1+0"]])}=${M([[2, 1], [1, 1]])}\).`, S`\(A^2=${M([[1, 1], [0, 0]])}\), \(B^2=0\), \(AB=${M([[1, 0], [0, 0]])}\), \(BA=${M([[0, 0], [1, 1]])}\).`, S`\(A^2+AB+BA+B^2=${M([[2, 1], [1, 1]])}\) ✓, but \(A^2+2AB+B^2=${M([[3, 1], [0, 0]])}\) — different, because \(AB\ne BA\).`],
      S`\((A+B)^2=${M([[2, 1], [1, 1]])}\ne A^2+2AB+B^2\)`],
    ["First B, then A", S`For \(A=${M([[1, 2], [3, 0]])}\), \(B=${M([[0, 1], [1, 1]])}\), \(\vec x=(2,1)\), compute \(A(B\vec x)\) and \((AB)\vec x\).`,
      [S`\(B\vec x=2${cv(0, 1)}+1${cv(1, 1)}=${cv(1, 3)}\), then \(A(B\vec x)=1${cv(1, 3)}+3${cv(2, 0)}=${cv(7, 3)}\).`, S`\(AB=${M([["0+2", "1+2"], ["0+0", "3+0"]])}=${M([[2, 3], [0, 3]])}\), and \((AB)\vec x=2${cv(2, 0)}+1${cv(3, 3)}=${cv(7, 3)}\) ✓.`],
      S`both give \((7,3)\)`],
  ]),

  practice([
    q("transpose", S`\((AB)^T\) equals:`, choice([S`\(B^TA^T\)`, S`\(A^TB^T\)`, S`\(AB\)`, S`\(BA\)`], 0),
      "Reverse the order.", [S`\(((AB)^T)_{ij}=(AB)_{ji}\).`], S`\(B^TA^T\)`),
    q("diagonal power", S`Find the \((2,2)\)-entry of \(\operatorname{diag}(3,-2)^4\).`, num(16),
      "(−2)⁴.", [S`Diagonal powers act entrywise on the diagonal.`], S`\(16\)`),
    q("expand", S`\((A+B)^2\) always equals:`, choice([S`\(A^2+AB+BA+B^2\)`, S`\(A^2+2AB+B^2\)`, S`\(A^2+B^2\)`, S`\(A^2+2BA+B^2\)`], 0),
      "Distribute without commuting.", [S`\((A+B)(A+B)\).`], S`\(A^2+AB+BA+B^2\)`),
    q("associativity", S`\(B\vec x=(1,2)\) and \(A=${M([[3, 0], [1, 1]])}\). Find \((AB)\vec x\).`, vec(3, 3),
      "(AB)x = A(Bx).", [S`\(A(1,2)=(3,\ 1+2)\).`], S`\((3,3)\)`),
    q("identity power", S`What is \(I^{10}\)?`, choice([S`\(I\)`, S`\(10I\)`, S`\(0\)`, S`\(I^T\)`], 0),
      "I·I = I.", [S`Every product of identities is \(I\).`], S`\(I\)`),
  ]),

  ...hard([
    ["AᵀA is symmetric", S`Prove that \(A^TA\) is symmetric for every matrix \(A\), and that its diagonal entries are the squared lengths of the columns of \(A\).`,
      [S`\((A^TA)^T=A^T(A^T)^T=A^TA\) by the reversal law.`, S`\((A^TA)_{jj}=(\text{row } j\text{ of }A^T)\cdot(\text{column } j\text{ of }A)=\vec a_j\cdot\vec a_j=\|\vec a_j\|^2\).`],
      S`\(A^TA\) is symmetric with diagonal \(\|\vec a_1\|^2,\dots,\|\vec a_n\|^2\)`],
    ["When does the binomial formula work?", S`Prove: \((A+B)^2=A^2+2AB+B^2\) if and only if \(AB=BA\). Then find \(A^{10}\) for \(A=${M([[1, 1], [0, 1]])}\) by writing \(A=I+N\).`,
      [S`\((A+B)^2=A^2+AB+BA+B^2\), which equals \(A^2+2AB+B^2\) exactly when \(BA=AB\).`, S`\(A=I+N\) with \(N=${M([[0, 1], [0, 0]])}\), \(N^2=0\), and \(I\) commutes with \(N\).`, S`So \(A^{10}=(I+N)^{10}=I+10N+(\text{terms with }N^2)=I+10N=${M([[1, 10], [0, 1]])}\).`],
      S`\(A^{10}=${M([[1, 10], [0, 1]])}\)`, nilFig],
  ], [
    q("hard", S`For \(A=${M([[1, 2], [0, 1]])}\), find the \((1,2)\)-entry of \(A^5\).`, num(10),
      "A = I + N with N² = 0.", [S`\(A^5=I+5N\), and \(N\) has \((1,2)\)-entry 2.`], S`\(10\)`),
    q("hard", S`\(A\) is \(3\times2\). What size is \(A^TA\)?`, choice([S`\(2\times2\)`, S`\(3\times3\)`, S`\(3\times2\)`, S`\(2\times3\)`], 0),
      "(2 × 3)(3 × 2).", [S`\(A^T\) is \(2\times3\).`], S`\(2\times2\)`),
    q("hard", S`Find \((A^TA)_{11}\) for \(A=${M([[1, 2], [2, 0], [2, -1]])}\).`, num(9),
      "Squared length of column 1.", [S`\(1+4+4\).`], S`\(9\)`),
  ]),

  wrapUp({
    qas: [
      ["Which laws does matrix multiplication obey?", "Associativity, both distributive laws, scalar rules, and IA = AI = A."],
      ["Why is associativity important?", "(AB)x = A(Bx): multiplying matrices is applying them one after another."],
      ["What is (AB)ᵀ?", "BᵀAᵀ — the order reverses."],
      ["How do I compute powers quickly?", "Diagonal: power each diagonal entry; strictly triangular: the powers eventually vanish; or split A = I + N."],
      ["Which algebra rules fail?", "Commutativity, cancellation, and identities like (A + B)² = A² + 2AB + B² unless AB = BA."],
    ],
    summary: [
      "(AB)C = A(BC); A(B + C) = AB + AC; (A + B)C = AC + BC.",
      "k(AB) = (kA)B = A(kB); IA = AI = A.",
      "(AB)ᵀ = BᵀAᵀ.",
      "Aᵏ for square A; diag(dᵢ)ᵏ = diag(dᵢᵏ); strictly triangular ⇒ nilpotent.",
      "(A + B)² = A² + AB + BA + B².",
    ],
    next: "Chapter 4 studies span, linear independence and bases in detail; chapter 6 asks when a matrix can be undone — inverses and determinants.",
  }),
];
