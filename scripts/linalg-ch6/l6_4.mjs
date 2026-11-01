// LINALG1 6.4 — The Invertible Matrix Theorem: for a square matrix, invertibility is equivalent to n pivots,
// RREF = I, only the trivial solution of Ax = 0, independent columns, spanning columns, Ax = b always (uniquely)
// solvable, being a product of elementary matrices, invertibility of Aᵀ, and a one-sided inverse.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, q, num, choice, hard, definition, theorem, am, cv, sfig, steps } from "./lib.mjs";
import { rowPic } from "./ws/fig3.mjs";
import { vecs3, planeFig } from "./ws/fig5.mjs";

export const TITLE = "6.4 The Invertible Matrix Theorem";
export const ID = "11a10001-0001-4001-8001-000000000604";

const S = String.raw;
const M = (m) => am(m, false);
const twoFig = sfig(rowPic([[[["■", "*", "*"], [0, "■", "*"], [0, 0, "■"]], { label: "n pivots: every statement TRUE" }], " ", [[["■", "*", "*"], [0, "■", "*"], [0, 0, 0]], { label: "fewer: every statement FALSE" }]]), "for a square matrix, all the conditions stand or fall together");
const goodFig = sfig(vecs3([[[1, 0, 2], "a₁"], [[2, 1, 5], "a₂"], [[1, 3, 6], "a₃"]]), "independent columns: they span ℝ³ and A is invertible");
const badFig = sfig(planeFig([1, 2, 3], [-1, 1, 0], { lu: "a₁", lv: "a₂", more: [[[2, 1, 3], "a₃ = a₁ − a₂", "green"]], raw: true }), "columns in one plane: A is singular");

const LIST = S`<ol type="a" style="line-height:1.7;">
<li>\(A\) is invertible;</li>
<li>the RREF of \(A\) is \(I_n\);</li>
<li>\(A\) has \(n\) pivots (\(\operatorname{rank}A=n\));</li>
<li>\(A\vec x=\vec 0\) has only the trivial solution;</li>
<li>the columns of \(A\) are linearly independent;</li>
<li>the columns of \(A\) span \(\mathbb R^n\);</li>
<li>\(A\vec x=\vec b\) has at least one solution for every \(\vec b\);</li>
<li>\(A\vec x=\vec b\) has exactly one solution for every \(\vec b\);</li>
<li>\(A\) is a product of elementary matrices;</li>
<li>\(A^T\) is invertible;</li>
<li>there is a \(C\) with \(CA=I\);</li>
<li>there is a \(D\) with \(AD=I\).</li></ol>`;

export const blocks = () => [
  intro({
    icon: "🗝️",
    title: "The Invertible Matrix Theorem",
    overview: S`For a <em>square</em> matrix, a remarkable number of different-looking properties turn out to be the same property. Pivots, solutions of \(A\vec x=\vec 0\) and \(A\vec x=\vec b\), independence and spanning of the columns, elementary matrices, the transpose and one-sided inverses — either all of them hold, or none does. This is the <strong>Invertible Matrix Theorem</strong>. It means that one row reduction answers a dozen questions at once, and that checking whichever condition is easiest is enough.`,
    goals: [
      "state the equivalent conditions of the Invertible Matrix Theorem;",
      "decide invertibility from a single row reduction and draw every consequence;",
      "use the theorem in both directions (a failure of one condition means all fail);",
      "show that a one-sided inverse of a square matrix is a two-sided inverse;",
      "prove facts such as 'AB invertible ⇒ A and B invertible'.",
    ],
    outcomes: "inverses and determinants: the Invertible Matrix Theorem",
    prior: [
      [S`When are \(n\) vectors in \(\mathbb R^n\) a basis?`, S`When the matrix of them has \(n\) pivots.`],
      [S`What does a free variable in \(A\vec x=\vec 0\) mean?`, S`A nonzero solution exists.`],
      [S`What is \((A^T)^{-1}\)?`, S`\((A^{-1})^T\).`],
    ],
    words: [
      ["Square", "\\(n\\times n\\)", "the theorem needs this"],
      ["Rank", "number of pivots", "\\(\\operatorname{rank}A=n\\)"],
      ["Trivial solution", "\\(\\vec x=\\vec 0\\)", "of \\(A\\vec x=\\vec 0\\)"],
      ["One-sided inverse", "\\(CA=I\\) or \\(AD=I\\)", "two-sided for square \\(A\\)"],
      ["Equivalent", "all true or all false", "for one given \\(A\\)"],
    ],
  }),

  section("📌 The theorem", S`
  ${theorem("Invertible Matrix Theorem", S`For an \(n\times n\) matrix \(A\) the following are equivalent: ${LIST}`, S`(a)⇒(h): \(\vec x=A^{-1}\vec b\) is the unique solution (6.1). (h)⇒(d) and (h)⇒(g) are special cases. (d)⇔(e) is the independence test, (g)⇔(f) the spanning test (4.2–4.3). (d) or (g) ⇒ (c): for a square matrix, a pivot in every column ⇔ a pivot in every row ⇔ \(n\) pivots. (c)⇔(b): \(n\) pivots in \(n\times n\) means the RREF is \(I\). (b)⇒(i): \(E_k\cdots E_1A=I\) gives \(A=E_1^{-1}\cdots E_k^{-1}\) (6.3). (i)⇒(a): a product of invertible matrices is invertible. (a)⇔(j): \((A^T)^{-1}=(A^{-1})^T\). (k)⇒(d): \(A\vec x=\vec 0\) gives \(\vec x=CA\vec x=\vec 0\). (l)⇒(g): \(\vec x=D\vec b\) solves \(A\vec x=\vec b\). And (a) gives (k), (l) with \(C=D=A^{-1}\).`)}
  ${twoFig}
  ${keyIdea(S`The theorem is about <strong>square</strong> matrices only. For a \(3\times2\) matrix, independent columns do <em>not</em> mean the columns span \(\mathbb R^3\).`)}`),

  section("📌 Pictures", S`
  <p>In \(\mathbb R^3\): \(A\) is invertible exactly when its three columns do not lie in one plane through the origin.</p>
  ${goodFig}
  ${badFig}`),

  section("📌 Explore", S`<p>Pick a \(3\times3\) matrix and watch the reduction. The explorer counts pivots and then lists every statement of the theorem as true or false — they always agree.</p>`),
  widget("laSpan3", { init: [[1, 0, 2], [2, 1, 5], [1, 3, 6]] }),

  section("📌 Common mistakes", watchOut([
    "The theorem applies to SQUARE matrices only.",
    "If one condition fails, all fail — you may use whichever is easiest to check.",
    "'Ax = 0 has a solution' is always true (x = 0); the condition is 'ONLY the trivial solution'.",
    "For square A, AD = I already forces DA = I; you do not have to check both.",
    "A matrix with no zero entries can still be singular.",
  ])),

  examples([
    ["One reduction, many conclusions", S`Decide whether \(A=${M([[1, 2, 1], [0, 1, 3], [2, 5, 6]])}\) is invertible, and list three consequences.`,
      [...steps([[1, 2, 1], [0, 1, 3], [2, 5, 6]], [
        [S`Clear column 1.`, ["R3-2R1"]],
        [S`Clear column 2 below its pivot.`, ["R3-R2"]],
      ], { bar: false, intro: "Row reduce A" }).steps,
        S`Three pivots in a \(3\times3\) matrix: \(A\) is invertible (c ⇒ a).`,
        S`Consequences: \(A\vec x=\vec 0\) has only \(\vec x=\vec 0\) (d); the columns \((1,0,2),(2,1,5),(1,3,6)\) are independent and span \(\mathbb R^3\) (e, f); every system \(A\vec x=\vec b\) has exactly one solution (h).`],
      S`invertible, with all the equivalent properties`, goodFig],
    ["A singular matrix and a missing right side", S`\(A=${M([[1, -1, 2], [2, 1, 1], [3, 0, 3]])}\). Find a nonzero solution of \(A\vec x=\vec 0\), and a \(\vec b\) for which \(A\vec x=\vec b\) has no solution.`,
      [...steps([[1, -1, 2, 0], [2, 1, 1, 0], [3, 0, 3, 0]], [
        [S`Clear column 1.`, ["R2-2R1", "R3-3R1"]],
        [S`Clear column 2 below its pivot.`, ["R3-R2"]],
        [S`Make the second pivot 1.`, ["R2*1/3"]],
        [S`Clear above it.`, ["R1+R2"]],
      ], { intro: "Row reduce [A | 0]" }).steps,
        S`Only two pivots: \(A\) is singular. Free \(x_3=t\): \(x_1=-t\), \(x_2=t\); with \(t=1\), \(A${cv(-1, 1, 1)}=${cv("-1-1+2", "-2+1+1", "-3+0+3")}=${cv(0, 0, 0)}\).`,
        ...steps([[1, -1, 2, 1], [2, 1, 1, 0], [3, 0, 3, 0]], [
          [S`Try \(\vec b=\vec e_1\). Clear column 1.`, ["R2-2R1", "R3-3R1"]],
          [S`Clear column 2 below its pivot.`, ["R3-R2"]],
        ], { intro: "Row reduce [A | e₁]" }).steps,
        S`The last row reads 0 equals \(-1\): no solution for \(\vec b=(1,0,0)\), exactly as (g) fails.`],
      S`\(A(-1,1,1)=\vec 0\); \(A\vec x=(1,0,0)\) is inconsistent`, badFig],
    ["A one-sided inverse is enough", S`Show \(D=${M([[2, -1], [-5, 3]])}\) satisfies \(AD=I\) for \(A=${M([[3, 1], [5, 2]])}\), and conclude \(DA=I\) without computing it.`,
      [S`\[AD=${M([[3, 1], [5, 2]])}${M([[2, -1], [-5, 3]])}=${M([["6-5", "-3+3"], ["10-10", "-5+6"]])}=${M([[1, 0], [0, 1]])}.\]`,
        S`By (l) ⇒ (a), \(A\) is invertible. Multiply \(AD=I\) on the left by \(A^{-1}\): \(D=A^{-1}\), so \(DA=A^{-1}A=I\).`,
        S`(Directly: \(DA=${M([[2, -1], [-5, 3]])}${M([[3, 1], [5, 2]])}=${M([["6-5", "2-2"], ["-15+15", "-5+6"]])}=I\) ✓.)`],
      S`\(DA=I\) follows from the theorem`],
    ["Reading the theorem from given facts", S`A \(4\times4\) matrix \(A\) has the property that \(A\vec x=\vec 0\) has only the trivial solution. What can you say about \(A\vec x=(1,2,3,4)\), the columns of \(A\), and \(A^T\)?`,
      [S`Condition (d) holds, so every condition holds.`, S`\(A\vec x=(1,2,3,4)\) has exactly one solution (h); the columns are a basis of \(\mathbb R^4\) (e, f); \(A^T\) is invertible (j), so the rows of \(A\) are independent too.`],
      S`unique solution; columns a basis; \(A^T\) invertible`, twoFig],
    ["A parameter", S`For which \(c\) is \(A=${M([[1, 2, "c"], [0, 1, 2], [1, 3, 1]])}\) invertible?`,
      [S`Reduce with \(c\) as a letter. \(R_3\to R_3-R_1\): \[${M([[1, 2, "c"], [0, 1, 2], [0, 1, "1-c"]])}\]`,
        S`\(R_3\to R_3-R_2\): \[${M([[1, 2, "c"], [0, 1, 2], [0, 0, "-1-c"]])}\]`,
        S`Three pivots exactly when \(-1-c\ne0\). So \(A\) is invertible for every \(c\ne-1\); for \(c=-1\) every condition of the theorem fails.`],
      S`invertible \(\iff c\ne-1\)`],
  ]),

  practice([
    q("pivots", S`A \(5\times5\) matrix has 4 pivots. Is it invertible?`, choice(["no", "yes"], 0),
      "Needs n = 5 pivots.", [S`Condition (c) fails.`], S`no`),
    q("columns", S`The columns of a \(3\times3\) matrix span \(\mathbb R^3\). How many solutions does \(A\vec x=\vec 0\) have?`, num(1),
      "Spanning ⇔ invertible.", [S`Only \(\vec x=\vec 0\).`], S`\(1\)`),
    q("transpose", S`\(A\) is \(4\times4\) and \(A^T\vec x=\vec 0\) has a nonzero solution. Is \(A\) invertible?`, choice(["no", "yes"], 0),
      "Apply the theorem to Aᵀ.", [S`\(A^T\) singular \(\Rightarrow\) \(A\) singular.`], S`no`),
    q("square only", S`A \(3\times2\) matrix has independent columns. Do they span \(\mathbb R^3\)?`, choice(["no", "yes"], 0),
      "The theorem needs a square matrix.", [S`Two vectors cannot span \(\mathbb R^3\).`], S`no`),
    q("parameter", S`For which \(k\) is \(${M([[1, 2], [3, "k"]])}\) singular?`, num(6),
      "Second pivot k − 6.", [S`\(R_2-3R_1\).`], S`\(6\)`),
  ]),

  ...hard([
    ["Products of invertible matrices", S`Let \(A,B\) be \(n\times n\). Prove: \(AB\) is invertible \(\iff\) both \(A\) and \(B\) are invertible.`,
      [S`⇐: \((AB)(B^{-1}A^{-1})=I\), so \(AB\) is invertible.`, S`⇒: let \(C=(AB)^{-1}\). Then \(A(BC)=I\), so \(A\) has a right inverse and is invertible by (l). Also \((CA)B=I\), so \(B\) has a left inverse and is invertible by (k).`],
      S`\(AB\) invertible \(\iff\) \(A\) and \(B\) invertible`],
    ["A nilpotent matrix is singular", S`Show that if \(A^2=0\) then \(A\) is not invertible, and illustrate with \(A=${M([[2, -4], [1, -2]])}\).`,
      [S`If \(A^{-1}\) existed, \(A=A^{-1}A^2=A^{-1}0=0\), and the zero matrix is not invertible — contradiction.`,
        S`Check the example: \[A^2=${M([[2, -4], [1, -2]])}${M([[2, -4], [1, -2]])}=${M([["4-4", "-8+8"], ["2-2", "-4+4"]])}=${M([[0, 0], [0, 0]])}.\]`,
        ...steps([[2, -4, 0], [1, -2, 0]], [
          [S`Confirm with \(A\vec x=\vec 0\). Bring the 1 up.`, ["R1<->R2"]],
          [S`Clear below it.`, ["R2-2R1"]],
        ], { intro: "Row reduce [A | 0]" }).steps,
        S`One pivot: \(A(2,1)=\vec 0\), so (d) fails and \(A\) is singular.`],
      S`\(A^2=0\Rightarrow A\) singular`],
  ], [
    q("hard", S`\(A\) and \(B\) are \(3\times3\), \(AB=I\). How many solutions does \(B\vec x=\vec 0\) have?`, num(1),
      "B has a left inverse.", [S`\(\vec x=AB\vec x=\vec 0\).`], S`\(1\)`),
    q("hard", S`For which \(a\) is \(${M([["a", 1, 0], [1, "a", 1], [0, 1, "a"]])}\) singular? (Give the positive value, rounded to 3 decimals.)`, num(1.414, 0.001),
      "Determinant-free: reduce, or use the pattern a(a² − 2).", [S`The last pivot vanishes when \(a(a^2-2)=0\): \(a=0,\pm\sqrt2\).`], S`\(\sqrt2\approx1.414\)`),
    q("hard", S`\(A\) is \(n\times n\) and \(A^3=I\). Then \(A^{-1}=\)`, choice([S`\(A^2\)`, S`\(A\)`, S`\(I\)`, "it may not exist"], 0),
      "A·A² = I.", [S`\(A\cdot A^2=A^3=I\).`], S`\(A^2\)`),
  ]),

  wrapUp({
    qas: [
      ["What does the Invertible Matrix Theorem say?", "For square A, a long list of properties are all equivalent: all true or all false."],
      ["What is the quickest test?", "Row reduce: n pivots ⇔ invertible."],
      ["Does it apply to rectangular matrices?", "No — only to square matrices."],
      ["Is a one-sided inverse enough?", "For square A, yes: AD = I forces DA = I."],
      ["If AB is invertible, what about A and B?", "Both are invertible."],
    ],
    summary: [
      "Invertible ⇔ n pivots ⇔ RREF = I.",
      "⇔ Ax = 0 only trivially ⇔ columns independent.",
      "⇔ columns span ℝⁿ ⇔ Ax = b always uniquely solvable.",
      "⇔ product of elementary matrices ⇔ Aᵀ invertible.",
      "⇔ a one-sided inverse exists.",
    ],
    next: "6.5 adds one more condition to the list: a single number, the determinant, is nonzero.",
  }),
];
