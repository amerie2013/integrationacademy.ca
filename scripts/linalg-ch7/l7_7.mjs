// LINALG1 7.7 — The Matrix of a Transformation Relative to a Basis: coordinates [x]_B = P⁻¹x, the B-matrix
// [T]_B = P⁻¹AP whose columns are [T(bⱼ)]_B, [T(x)]_B = [T]_B[x]_B, recovering A = P[T]_B P⁻¹, similar matrices
// (same det and trace) and powers A^k = PD^kP⁻¹ — every change of coordinates done as a matrix product.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, q, num, choice, hard, definition, theorem, am, cv, sfig } from "./lib.mjs";
import { vecs2 } from "./ws/fig5.mjs";
import { flowSvg } from "./ws/fig2.mjs";

export const TITLE = "7.7 The Matrix of a Transformation Relative to a Basis";
export const ID = "11a10001-0001-4001-8001-000000000707";

const S = String.raw;
const M = (m) => am(m, false);
const coordFig = sfig(vecs2([[[1, 1], "b₁", "blue"], [[2, 1], "b₂", "red"], [[4, 2], "2b₂", "red", [1, 1], true], [[5, 3], "x = b₁ + 2b₂", "violet"]], { xmin: -1, xmax: 6, ymin: -1, ymax: 4 }, { raw: true }),
  "x = (5, 3) has B-coordinates (1, 2): one step along b₁, two along b₂");
const eigFig = sfig(vecs2([[[1, 1], "b₁", "blue"], [[2, 2], "T(b₁) = 2b₁", "blue", null, true], [[2, 1], "b₂", "red"], [[6, 3], "T(b₂) = 3b₂", "red", null, true]], { xmin: -1, xmax: 7, ymin: -1, ymax: 4 }, { raw: true }),
  "in the basis B, T only stretches: b₁ by 2 and b₂ by 3");
const flow = sfig(flowSvg(["x", "[x]_B = P⁻¹x", "[T]_B [x]_B", "T(x) = P [T(x)]_B"], 520), "change to B-coordinates, apply the B-matrix, change back: A = P[T]_B P⁻¹");

export const blocks = () => [
  intro({
    icon: "🧭",
    title: "The Matrix of a Transformation Relative to a Basis",
    overview: S`The standard matrix describes \(T\) in the coordinates of \(\vec e_1,\dots,\vec e_n\). Another basis \(\mathcal B=\{\vec b_1,\dots,\vec b_n\}\) gives other coordinates, and in them \(T\) has another matrix, \([T]_{\mathcal B}=P^{-1}AP\), where \(P=[\,\vec b_1\ \cdots\ \vec b_n\,]\). A good basis can make this matrix very simple — diagonal, when \(T\) just stretches each \(\vec b_j\). Then \(T\) is easy to understand and easy to apply many times: \(A^k=PD^kP^{-1}\). This is the bridge to eigenvalues in Chapter 8.`,
    goals: [
      "compute coordinates \\([\\vec x]_{\\mathcal B}=P^{-1}\\vec x\\) and back, \\(\\vec x=P[\\vec x]_{\\mathcal B}\\);",
      "find \\([T]_{\\mathcal B}=P^{-1}AP\\) and read its columns as \\([T(\\vec b_j)]_{\\mathcal B}\\);",
      "apply \\(T\\) in \\(\\mathcal B\\)-coordinates: \\([T(\\vec x)]_{\\mathcal B}=[T]_{\\mathcal B}[\\vec x]_{\\mathcal B}\\);",
      "recover \\(A=P[T]_{\\mathcal B}P^{-1}\\) and compute powers \\(A^k=PD^kP^{-1}\\);",
      "use that similar matrices have the same determinant and trace.",
    ],
    outcomes: "linear transformations: matrices relative to a basis",
    prior: [
      [S`Write \((5,3)\) as \(c_1(1,1)+c_2(2,1)\).`, S`\(c_1=1\), \(c_2=2\).`],
      [S`Invert \(${M([[1, 2], [1, 1]])}\).`, S`\(\det=-1\): \(${M([[-1, 2], [1, -1]])}\).`],
      [S`\(\operatorname{diag}(2,3)^5=\)?`, S`\(\operatorname{diag}(32,243)\).`],
    ],
    words: [
      ["\\(\\mathcal B\\)-coordinates", "\\([\\vec x]_{\\mathcal B}=(c_1,\\dots,c_n)\\) with \\(\\vec x=\\sum c_j\\vec b_j\\)", "\\(=P^{-1}\\vec x\\)"],
      ["Change-of-basis matrix", "\\(P=[\\,\\vec b_1\\ \\cdots\\ \\vec b_n\\,]\\)", "\\(\\vec x=P[\\vec x]_{\\mathcal B}\\)"],
      ["\\(\\mathcal B\\)-matrix", "\\([T]_{\\mathcal B}=P^{-1}AP\\)", "columns \\([T(\\vec b_j)]_{\\mathcal B}\\)"],
      ["Similar", "\\(B=P^{-1}AP\\) for some invertible \\(P\\)", "same map, different basis"],
      ["Diagonalising basis", "\\(T(\\vec b_j)=\\lambda_j\\vec b_j\\)", "\\([T]_{\\mathcal B}\\) diagonal"],
    ],
  }),

  section("📌 Coordinates in a basis", S`
  ${definition("coordinates", S`If \(\mathcal B=\{\vec b_1,\dots,\vec b_n\}\) is a basis of \(\mathbb R^n\) and \(\vec x=c_1\vec b_1+\dots+c_n\vec b_n\), the <strong>\(\mathcal B\)-coordinate vector</strong> of \(\vec x\) is \([\vec x]_{\mathcal B}=(c_1,\dots,c_n)\). With \(P=[\,\vec b_1\ \cdots\ \vec b_n\,]\): \[\vec x=P[\vec x]_{\mathcal B},\qquad [\vec x]_{\mathcal B}=P^{-1}\vec x.\]`)}
  ${coordFig}`),

  section("📌 The matrix of T in the basis B", S`
  ${theorem("B-matrix", S`Let \(T(\vec x)=A\vec x\) on \(\mathbb R^n\) and \(P=[\,\vec b_1\ \cdots\ \vec b_n\,]\). The matrix \[[T]_{\mathcal B}=P^{-1}AP=\big[\,[T(\vec b_1)]_{\mathcal B}\ \cdots\ [T(\vec b_n)]_{\mathcal B}\,\big]\] satisfies \([T(\vec x)]_{\mathcal B}=[T]_{\mathcal B}[\vec x]_{\mathcal B}\) for all \(\vec x\). Conversely \(A=P[T]_{\mathcal B}P^{-1}\).`, S`\([T(\vec x)]_{\mathcal B}=P^{-1}A\vec x=P^{-1}AP\,P^{-1}\vec x=(P^{-1}AP)[\vec x]_{\mathcal B}\). Column \(j\) of \(P^{-1}AP\) is \(P^{-1}A\vec b_j=[T(\vec b_j)]_{\mathcal B}\). Multiplying \([T]_{\mathcal B}=P^{-1}AP\) by \(P\) on the left and \(P^{-1}\) on the right gives \(A=P[T]_{\mathcal B}P^{-1}\).`)}
  ${theorem("similar matrices", S`If \(B=P^{-1}AP\), then \(\det B=\det A\), \(\operatorname{tr}B=\operatorname{tr}A\), and \(B^k=P^{-1}A^kP\).`, S`\(\det B=\tfrac1{\det P}\det A\det P=\det A\). For the trace use \(\operatorname{tr}(XY)=\operatorname{tr}(YX)\): \(\operatorname{tr}(P^{-1}(AP))=\operatorname{tr}((AP)P^{-1})=\operatorname{tr}A\). Powers: \((P^{-1}AP)(P^{-1}AP)=P^{-1}A^2P\), and so on.`)}
  ${keyIdea(S`Read \(P^{-1}AP\) right to left: \(P\) turns \(\mathcal B\)-coordinates into ordinary ones, \(A\) applies \(T\), \(P^{-1}\) turns the result back into \(\mathcal B\)-coordinates.`)}
  ${flow}`),

  section("📌 Explore", S`<p>Pick a matrix \(A\) and a basis \(\mathcal B\). The explorer draws the \(\mathcal B\)-grid and computes \([T]_{\mathcal B}=P^{-1}AP\). Try to find a basis that makes \([T]_{\mathcal B}\) diagonal — the arrows \(\vec b_j\) and \(T(\vec b_j)\) then lie on the same lines.</p>`),
  widget("laBasis", { init: { set: "diag" } }),

  section("📌 Common mistakes", watchOut([
    "[T]_B = P⁻¹AP, not PAP⁻¹ — P converts FROM B-coordinates.",
    "The columns of [T]_B are the B-coordinates of T(bⱼ), not T(bⱼ) itself.",
    "[x]_B = P⁻¹x: solve P c = x, do not just read off x.",
    "Similar matrices share det and trace, but equal det and trace do not prove similarity.",
    "Order the basis vectors consistently: P, [x]_B and [T]_B all depend on the order.",
  ])),

  examples([
    ["Coordinates in a basis", S`\(\mathcal B=\{(1,1),(2,1)\}\). Find \([\vec x]_{\mathcal B}\) for \(\vec x=(5,3)\).`,
      [S`\(P=${M([[1, 2], [1, 1]])}\), \(\det P=1-2=-1\), so \(P^{-1}=\frac1{-1}${M([[1, -2], [-1, 1]])}=${M([[-1, 2], [1, -1]])}\).`,
        S`\[[\vec x]_{\mathcal B}=P^{-1}\vec x=${M([[-1, 2], [1, -1]])}${cv(5, 3)}=${cv("-5+6", "5-3")}=${cv(1, 2)}.\]`,
        S`Check \(\vec x=P[\vec x]_{\mathcal B}\): \(${M([[1, 2], [1, 1]])}${cv(1, 2)}=${cv("1+4", "1+2")}=${cv(5, 3)}\) ✓.`],
      S`\([\vec x]_{\mathcal B}=(1,2)\)`, coordFig],
    ["A basis that diagonalises T", S`\(T(\vec x)=A\vec x\), \(A=${M([[4, -2], [1, 1]])}\). Find \([T]_{\mathcal B}\) for \(\mathcal B=\{(1,1),(2,1)\}\).`,
      [S`First \(AP\) (the images \(T(\vec b_1),T(\vec b_2)\) as columns): \[AP=${M([[4, -2], [1, 1]])}${M([[1, 2], [1, 1]])}=${M([["4-2", "8-2"], ["1+1", "2+1"]])}=${M([[2, 6], [2, 3]])}.\]`,
        S`Then convert to \(\mathcal B\)-coordinates: \[[T]_{\mathcal B}=P^{-1}(AP)=${M([[-1, 2], [1, -1]])}${M([[2, 6], [2, 3]])}=${M([["-2+4", "-6+6"], ["2-2", "6-3"]])}=${M([[2, 0], [0, 3]])}.\]`,
        S`So \(T(\vec b_1)=2\vec b_1\) and \(T(\vec b_2)=3\vec b_2\): in this basis \(T\) is a pure stretch.`],
      S`\([T]_{\mathcal B}=${M([[2, 0], [0, 3]])}\)`, eigFig],
    ["Applying T in B-coordinates", S`With \(A\), \(\mathcal B\) as in Example 2, compute \(T(5,3)\) through \(\mathcal B\)-coordinates and check directly.`,
      [S`\([\vec x]_{\mathcal B}=(1,2)\) (Example 1). Apply the \(\mathcal B\)-matrix: \[[T(\vec x)]_{\mathcal B}=${M([[2, 0], [0, 3]])}${cv(1, 2)}=${cv(2, 6)}.\]`,
        S`Back to standard coordinates: \[T(\vec x)=P${cv(2, 6)}=${M([[1, 2], [1, 1]])}${cv(2, 6)}=${cv("2+12", "2+6")}=${cv(14, 8)}.\]`,
        S`Directly: \(A${cv(5, 3)}=${M([[4, -2], [1, 1]])}${cv(5, 3)}=${cv("20-6", "5+3")}=${cv(14, 8)}\) ✓.`],
      S`\(T(5,3)=(14,8)\)`, flow],
    ["Powers through a diagonal B-matrix", S`Compute \(A^5\) for \(A=${M([[4, -2], [1, 1]])}\) using \(A=PDP^{-1}\), \(D=${M([[2, 0], [0, 3]])}\).`,
      [S`\(A^5=PD^5P^{-1}\) because the inner \(P^{-1}P\) cancel, and \(D^5=${M([[32, 0], [0, 243]])}\).`,
        S`\[PD^5=${M([[1, 2], [1, 1]])}${M([[32, 0], [0, 243]])}=${M([[32, 486], [32, 243]])}.\]`,
        S`\[A^5=(PD^5)P^{-1}=${M([[32, 486], [32, 243]])}${M([[-1, 2], [1, -1]])}=${M([["-32+486", "64-486"], ["-32+243", "64-243"]])}=${M([[454, -422], [211, -179]])}.\]`,
        S`Check the determinant: \(\det A^5=(\det A)^5=6^5=7776\) and \(454(-179)-(-422)(211)=-81266+89042=7776\) ✓.`],
      S`\(A^5=${M([[454, -422], [211, -179]])}\)`],
    ["Building A from a geometric basis", S`The reflection in the line \(x_2=2x_1\) fixes \(\vec b_1=(1,2)\) and reverses \(\vec b_2=(-2,1)\). Find its standard matrix from \([T]_{\mathcal B}\).`,
      [S`\(T(\vec b_1)=\vec b_1\), \(T(\vec b_2)=-\vec b_2\), so \([T]_{\mathcal B}=${M([[1, 0], [0, -1]])}\). Here \(P=${M([[1, -2], [2, 1]])}\), \(\det P=1+4=5\), \(P^{-1}=\tfrac15${M([[1, 2], [-2, 1]])}\).`,
        S`\[P[T]_{\mathcal B}=${M([[1, -2], [2, 1]])}${M([[1, 0], [0, -1]])}=${M([[1, 2], [2, -1]])},\]`,
        S`\[A=P[T]_{\mathcal B}P^{-1}=\tfrac15${M([[1, 2], [2, -1]])}${M([[1, 2], [-2, 1]])}=\tfrac15${M([["1-4", "2+2"], ["2+2", "4-1"]])}=\tfrac15${M([[-3, 4], [4, 3]])},\] the matrix found in 7.4 ✓.`],
      S`\(A=\tfrac15${M([[-3, 4], [4, 3]])}\)`],
  ]),

  practice([
    q("coordinates", S`\(\mathcal B=\{(1,0),(1,1)\}\). Find the first entry of \([\vec x]_{\mathcal B}\) for \(\vec x=(3,2)\).`, num(1),
      "c₂ = 2 from the second entry.", [S`\(c_1${cv(1, 0)}+c_2${cv(1, 1)}=${cv(3, 2)}\): \(c_2=2\), \(c_1=1\).`], S`\(1\)`),
    q("back", S`\([\vec x]_{\mathcal B}=(2,-1)\) for \(\mathcal B=\{(1,3),(0,1)\}\). Find the second entry of \(\vec x\).`, num(5),
      "x = P[x]_B.", [S`\(${M([[1, 0], [3, 1]])}${cv(2, -1)}=${cv(2, "6-1")}\).`], S`\(5\)`),
    q("det", S`\([T]_{\mathcal B}=${M([[2, 0], [0, 3]])}\). Find \(\det A\).`, num(6),
      "Similar ⇒ same det.", [S`\(\det A=\det[T]_{\mathcal B}=6\).`], S`\(6\)`),
    q("trace", S`\(A=${M([[5, 1], [2, 7]])}\) and \(B=P^{-1}AP\). Find \(\operatorname{tr}B\).`, num(12),
      "Same trace.", [S`\(5+7=12\).`], S`\(12\)`),
    q("column", S`\(T(\vec b_1)=3\vec b_1+\vec b_2\), \(T(\vec b_2)=-\vec b_2\). The first column of \([T]_{\mathcal B}\) is:`, choice([S`\((3,1)\)`, S`\((3,0)\)`, S`\((0,-1)\)`, S`\((1,3)\)`], 0),
      "Coordinates of T(b₁).", [S`\([T(\vec b_1)]_{\mathcal B}=(3,1)\).`], S`\((3,1)\)`),
  ]),

  ...hard([
    ["A basis that gives a triangular matrix", S`\(A=${M([[3, 1], [-1, 1]])}\), \(\mathcal B=\{(1,-1),(1,0)\}\). Find \([T]_{\mathcal B}\) and interpret its columns.`,
      [S`\(P=${M([[1, 1], [-1, 0]])}\), \(\det P=0+1=1\), \(P^{-1}=${M([[0, -1], [1, 1]])}\).`,
        S`\[AP=${M([[3, 1], [-1, 1]])}${M([[1, 1], [-1, 0]])}=${M([["3-1", "3+0"], ["-1-1", "-1+0"]])}=${M([[2, 3], [-2, -1]])},\]`,
        S`\[[T]_{\mathcal B}=P^{-1}(AP)=${M([[0, -1], [1, 1]])}${M([[2, 3], [-2, -1]])}=${M([["0+2", "0+1"], ["2-2", "3-1"]])}=${M([[2, 1], [0, 2]])}.\]`,
        S`Column 1: \(T(\vec b_1)=2\vec b_1\). Column 2: \(T(\vec b_2)=\vec b_1+2\vec b_2\). Check: \(A${cv(1, 0)}=${cv(3, -1)}\) and \(${cv(1, -1)}+2${cv(1, 0)}=${cv(3, -1)}\) ✓. No basis makes this \(T\) diagonal (Chapter 8 explains why).`],
      S`\([T]_{\mathcal B}=${M([[2, 1], [0, 2]])}\)`],
    ["Similar matrices share det and trace", S`Verify \(\det[T]_{\mathcal B}=\det A\) and \(\operatorname{tr}[T]_{\mathcal B}=\operatorname{tr}A\) for Example 2, and show \(${M([[1, 1], [0, 1]])}\) is not similar to \(I\) although both have det 1 and trace 2.`,
      [S`Example 2: \(\det A=4(1)-(-2)(1)=6=\det${M([[2, 0], [0, 3]])}\); \(\operatorname{tr}A=4+1=5=2+3\) ✓.`,
        S`If \(${M([[1, 1], [0, 1]])}=P^{-1}IP\), then \(P^{-1}IP=P^{-1}P=I\), but \(${M([[1, 1], [0, 1]])}\ne I\).`,
        S`So the only matrix similar to \(I\) is \(I\) itself: equal det and trace are necessary for similarity but not sufficient.`],
      S`det and trace agree for similar matrices; the converse fails`],
  ], [
    q("hard", S`\(A=PDP^{-1}\) with \(D=\operatorname{diag}(1,0)\). Then \(A^2=\)`, choice([S`\(A\)`, S`\(I\)`, S`\(0\)`, S`\(2A\)`], 0),
      "D² = D.", [S`\(A^2=PD^2P^{-1}=PDP^{-1}=A\): a projection.`], S`\(A\)`),
    q("hard", S`\(A=PDP^{-1}\), \(D=\operatorname{diag}(-1,2)\). Find \(\det A^3\).`, num(-8),
      "(det D)³.", [S`\(\det D=-2\), \((-2)^3=-8\).`], S`\(-8\)`),
    q("hard", S`\(\mathcal B=\{(1,1),(1,-1)\}\) and \(T\) is the reflection in \(x_2=x_1\). Find the \((2,2)\) entry of \([T]_{\mathcal B}\).`, num(-1),
      "(1,1) is fixed, (1,−1) reversed.", [S`\([T]_{\mathcal B}=${M([[1, 0], [0, -1]])}\).`], S`\(-1\)`),
  ]),

  wrapUp({
    qas: [
      ["How do I find [x]_B?", "[x]_B = P⁻¹x, where P has the basis vectors as columns."],
      ["What is the B-matrix of T?", "[T]_B = P⁻¹AP; column j is [T(bⱼ)]_B."],
      ["How do I get A back?", "A = P[T]_B P⁻¹."],
      ["Why use another basis?", "[T]_B can be diagonal, making T and its powers simple: Aᵏ = PDᵏP⁻¹."],
      ["What do similar matrices share?", "Determinant, trace and powers' structure — they describe the same map."],
    ],
    summary: [
      "x = P[x]_B, [x]_B = P⁻¹x.",
      "[T]_B = P⁻¹AP, columns [T(bⱼ)]_B.",
      "[T(x)]_B = [T]_B[x]_B.",
      "A = PDP⁻¹ ⇒ Aᵏ = PDᵏP⁻¹.",
      "Similar ⇒ same det and trace.",
    ],
    next: "Chapter 8 finds the vectors with T(b) = λb — eigenvectors — that make the B-matrix diagonal.",
  }),
];
