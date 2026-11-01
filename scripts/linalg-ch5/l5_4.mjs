// LINALG1 5.4 — Dimension: more vectors than a basis are dependent (proof by a homogeneous system with more unknowns
// than equations), so all bases of a subspace have the same size; the dimension; dim {0} = 0, dim Rⁿ = n; the
// dimension of a solution space is n − rank; and the counting theorem for a k-dimensional subspace.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, q, num, choice, hard, definition, theorem, am, cv, sys, steps } from "./lib.mjs";
import { vfig, scene3, a3, pt3, line3, patch3 } from "./vecfig.mjs";

export const TITLE = "5.4 Dimension";
export const ID = "11a10001-0001-4001-8001-000000000504";

const S = String.raw;
const dims = vfig(scene3(3.4, { polys: [patch3([0, 0, 0], [1, 0, 0], [0, 1, 0], 2.2, "#dbeafe", "blue", 0.35)],
  segs: [line3([0, 0, 0], [1, 1, 2], -1, 1.2, "red")],
  points: [pt3([0, 0, 0], "0  (dim 0)", { color: "black", dx: -10, anchor: "end" }), pt3([1.1, 1.1, 2.2], "line: dim 1", { color: "red" }), pt3([2, -1.6, 0], "plane: dim 2", { color: "blue" })] }), "subspaces of ℝ³ by dimension: {0}, lines and planes through 0, and ℝ³ (dimension 3)");
const tooMany = vfig({ view: { xmin: -1.5, xmax: 4, ymin: -1.5, ymax: 4 }, step: 1, width: 260,
  arrows: [{ from: [0, 0], to: [3, 1], color: "blue", w: 2.6, label: "v₁" }, { from: [0, 0], to: [1, 3], color: "red", w: 2.6, label: "v₂" }, { from: [0, 0], to: [2.5, 2.5], color: "green", w: 2.6, label: "v₃" }] },
  "three vectors in ℝ² (dimension 2) are always dependent: v₃ = 0.625v₁ + 0.625v₂");

export const blocks = () => [
  intro({
    icon: "📏",
    title: "Dimension",
    overview: S`A plane through the origin has many bases, but every one of them has exactly two vectors; \(\mathbb R^n\) has many bases, all with \(n\) vectors. This lesson proves that the number of vectors in a basis does not depend on the basis — it is a property of the subspace, its <strong>dimension</strong>. The key fact is that in a subspace with a basis of \(k\) vectors, any \(k+1\) vectors are dependent. Dimension then gives quick answers: how many vectors can be independent, how many are needed to span, and when \(k\) vectors automatically form a basis.`,
    goals: [
      "prove that more than \\(k\\) vectors in a subspace with a \\(k\\)-vector basis are dependent;",
      "explain why all bases of a subspace have the same number of vectors;",
      "find the dimension of a subspace, a span and a solution space;",
      "use the counting theorem: in a \\(k\\)-dimensional subspace, \\(k\\) vectors span if and only if they are independent;",
      "classify the subspaces of \\(\\mathbb R^2\\) and \\(\\mathbb R^3\\) by dimension.",
    ],
    outcomes: "subspaces of Rⁿ: dimension and its consequences",
    prior: [
      [S`How many free variables does a homogeneous system with 2 equations and 3 unknowns have at least?`, S`At least \(3-2=1\): so it has nontrivial solutions (2.6).`],
      [S`What is a basis?`, S`An independent spanning set (5.3).`],
      [S`Give two different bases of \(\mathbb R^2\).`, S`\(\{(1,0),(0,1)\}\) and \(\{(1,1),(1,-1)\}\).`],
    ],
    words: [
      ["Dimension", "the number of vectors in any basis of \\(S\\)", "\\(\\dim\\mathbb R^3=3\\)"],
      ["\\(\\dim\\{\\vec 0\\}\\)", "0 (its basis is the empty set)", "the zero subspace"],
      ["Hyperplane", "\\(\\{\\vec x\\in\\mathbb R^n:\\vec a\\cdot\\vec x=0\\}\\), \\(\\vec a\\ne\\vec 0\\)", "dimension \\(n-1\\)"],
      ["Solution space dimension", "\\(n-\\operatorname{rank}A\\) for \\(A\\vec x=\\vec 0\\)", "number of free variables"],
      ["Counting theorem", "in dimension \\(k\\): \\(k\\) vectors span ⇔ independent", "3 independent vectors in \\(\\mathbb R^3\\) form a basis"],
    ],
  }),

  section("📌 Too many vectors are dependent", S`
  ${theorem("more vectors than a basis", S`Let \(\{\vec v_1,\dots,\vec v_k\}\) be a basis of a subspace \(S\). If \(\vec w_1,\dots,\vec w_\ell\in S\) with \(\ell\gt k\), then \(\vec w_1,\dots,\vec w_\ell\) are linearly dependent.`, S`Each \(\vec w_j\) is a combination of the basis: \(\vec w_j=a_{1j}\vec v_1+\dots+a_{kj}\vec v_k\). For scalars \(t_1,\dots,t_\ell\), \(t_1\vec w_1+\dots+t_\ell\vec w_\ell=\sum_i\big(\sum_j a_{ij}t_j\big)\vec v_i\). The homogeneous system \(\sum_j a_{ij}t_j=0\) (\(i=1,\dots,k\)) has \(k\) equations and \(\ell\gt k\) unknowns, so it has a nontrivial solution. For that solution \(t_1\vec w_1+\dots+t_\ell\vec w_\ell=\vec 0\) with not all \(t_j=0\): dependence.`)}
  <div style="text-align:center;">${tooMany}</div>
  ${theorem("all bases have the same size", S`If \(\{\vec v_1,\dots,\vec v_k\}\) and \(\{\vec w_1,\dots,\vec w_\ell\}\) are both bases of \(S\), then \(k=\ell\).`, S`The \(\vec w_j\) are independent, so by the previous theorem \(\ell\le k\). Swapping the roles, \(k\le\ell\). Hence \(k=\ell\).`)}`),

  section("📌 The dimension of a subspace", S`
  ${definition("dimension", S`If a subspace \(S\) has a basis of \(k\) vectors, then \(k\) is the <strong>dimension</strong> of \(S\), written \(\dim S=k\). The zero subspace has \(\dim\{\vec 0\}=0\).`)}
  <ul>
  <li>\(\dim\mathbb R^n=n\) (the standard basis).</li>
  <li>A line through the origin has dimension 1; a plane through the origin has dimension 2.</li>
  <li>The solution space of \(A\vec x=\vec 0\) (\(n\) unknowns) has dimension \(n-\operatorname{rank}A\): one basis vector per free variable.</li>
  <li>A hyperplane \(\vec a\cdot\vec x=0\) (\(\vec a\ne\vec 0\)) in \(\mathbb R^n\) has dimension \(n-1\).</li>
  <li>\(\dim\operatorname{Span}\{\vec v_1,\dots,\vec v_k\}\) = the number of pivots of the matrix \([\vec v_1\ \cdots\ \vec v_k]\).</li>
  </ul>
  <div style="text-align:center;">${dims}</div>`),

  section("📌 The counting theorem", S`
  ${theorem("counting in a k-dimensional subspace", S`Let \(\dim S=k\gt0\). Then (1) any set of more than \(k\) vectors in \(S\) is dependent; (2) any set of fewer than \(k\) vectors cannot span \(S\); (3) a set of exactly \(k\) vectors in \(S\) spans \(S\) if and only if it is linearly independent — in which case it is a basis.`, S`(1) is the first theorem. (2) A spanning set always contains a basis (remove redundant vectors), which has \(k\) vectors. (3) If \(k\) vectors span, removing redundant ones leaves a basis of \(k\) vectors, so none was removed: they are independent. If \(k\) independent vectors did not span, adding a vector outside their span would give \(k+1\) independent vectors, contradicting (1).`)}
  ${keyIdea(S`Once you know \(\dim S=k\), checking a candidate basis of \(k\) vectors needs only <em>one</em> of the two conditions. Three independent vectors in \(\mathbb R^3\) are automatically a basis.`)}
  <p>Also: if \(U\subseteq W\) are subspaces then \(\dim U\le\dim W\), with equality only when \(U=W\).</p>`),

  section("📌 Explore", S`<p>The dimension of the span is the number of pivot columns. In the third set, \(k=2\) makes the second vector parallel to the first and the dimension drops from 3 to 2.</p>`),
  widget("laSpanDim", { init: { set: "mixed" } }),

  section("📌 Common mistakes", watchOut([
    "Dimension counts vectors in a BASIS, not in any spanning set.",
    "A subspace of R⁴ can have dimension 2 — the dimension of the subspace is not the n of Rⁿ.",
    "The dimension of the solution space is n − rank A (free variables), not the number of equations.",
    "The counting theorem needs dim S first; k vectors outside S say nothing about S.",
    "dim {0} = 0, not 1: the zero vector alone is dependent.",
  ])),

  examples([
    ["A hyperplane in ℝ⁴", S`Find a basis and the dimension of \(S=\{\vec x\in\mathbb R^4: 2x_1-x_2+x_3+3x_4=0\}\).`,
      [...steps([[2, -1, 1, 3, 0]], [
        [S`\(S\) is the solution set of \(A\vec x=\vec 0\) with \(A=${am([[2, -1, 1, 3]], false)}\). Make the pivot 1.`, ["R1*1/2"]],
      ], { intro: "Write the augmented matrix [A | 0]" }).steps,
        S`RREF: one pivot (column 1), free variables \(x_2=r\), \(x_3=s\), \(x_4=t\). The row reads \(x_1-\tfrac12x_2+\tfrac12x_3+\tfrac32x_4=0\), so \(x_1=\tfrac12r-\tfrac12s-\tfrac32t\).`,
        S`Vector form: \[\vec x=${cv("\\tfrac12r-\\tfrac12s-\\tfrac32t", "r", "s", "t")}=r${cv("\\tfrac12", 1, 0, 0)}+s${cv("-\\tfrac12", 0, 1, 0)}+t${cv("-\\tfrac32", 0, 0, 1)}.\] Scaling each vector by 2 clears the fractions: \((1,2,0,0)\), \((-1,0,2,0)\), \((-3,0,0,2)\).`,
        ...steps([[1, -1, -3], [2, 0, 0], [0, 2, 0], [0, 0, 2]], [
          [S`<strong>Independence.</strong> Clear column 1.`, ["R2-2R1"]],
          [S`Clear column 2 below its pivot.`, ["R3-R2"]],
          [S`Clear column 3 below its pivot.`, ["R4+1/3R3"]],
        ], { bar: false, intro: "Matrix with the three vectors as columns" }).steps,
        S`Three pivots: independent, so they form a basis and \(\dim S=3\). Check: \(${am([[2, -1, 1, 3]], false)}${cv(-3, 0, 0, 2)}=${am([["-6-0+0+6"]], false)}=${am([[0]], false)}\) ✓.`],
      S`\(\dim S=3\); basis \(\{(1,2,0,0),(-1,0,2,0),(-3,0,0,2)\}\)`],
    ["The dimension of a span", S`Find \(\dim\operatorname{Span}\{(1,2,1),(2,4,2),(0,1,3),(1,3,4)\}\) and a basis.`,
      [...steps([[1, 2, 0, 1], [2, 4, 1, 3], [1, 2, 3, 4]], [
        [S`The four vectors are the columns. Clear column 1.`, ["R2-2R1", "R3-R1"]],
        [S`Column 2 has no pivot; the next pivot is in column 3. Clear below it.`, ["R3-3R2"]],
      ], { bar: false, intro: "Row reduce the matrix of columns" }).steps,
        S`Pivots in columns 1 and 3: a basis of the span is \(\{(1,2,1),(0,1,3)\}\) (from the original matrix).`, S`Indeed \((2,4,2)=2(1,2,1)\) and \((1,3,4)=(1,2,1)+(0,1,3)\).`],
      S`dimension 2 (a plane); basis \(\{(1,2,1),(0,1,3)\}\)`],
    ["Three vectors in ℝ³", S`Is \(\{(1,2,3),(0,1,4),(5,6,0)\}\) a basis of \(\mathbb R^3\)?`,
      [S`\(\dim\mathbb R^3=3\) and there are 3 vectors, so by the counting theorem it suffices to check independence.`,
        ...steps([[1, 0, 5], [2, 1, 6], [3, 4, 0]], [
          [S`Clear column 1.`, ["R2-2R1", "R3-3R1"]],
          [S`Clear column 2.`, ["R3-4R2"]],
        ], { bar: false, intro: "Columns are the vectors" }).steps,
        S`Three pivots: independent, hence a basis of \(\mathbb R^3\).`],
      S`yes — 3 independent vectors in a 3-dimensional space`],
    ["The dimension of a solution space", S`Find the dimension of the solution space of \(${sys([[1, 2, 0, -1, 1, 0], [2, 4, 1, 0, 3, 0], [1, 2, 1, 1, 2, 0]])}\).`,
      [...steps([[1, 2, 0, -1, 1], [2, 4, 1, 0, 3], [1, 2, 1, 1, 2]], [
        [S`Clear column 1.`, ["R2-2R1", "R3-R1"]],
        [S`Rows 2 and 3 are equal; subtract.`, ["R3-R2"]],
      ], { bar: false, intro: "Reduce the coefficient matrix" }).steps,
        S`Two pivots: \(\operatorname{rank}A=2\). Free variables: \(5-2=3\) (\(x_2,x_4,x_5\)).`],
      S`dimension \(3\)`],
    ["Counting without computing", S`Explain, without row reducing, why \(\{(1,0,2),(3,1,1),(0,4,5),(2,2,2)\}\) is dependent and why \(\{(1,0,2),(3,1,1)\}\) does not span \(\mathbb R^3\).`,
      [S`Four vectors in \(\mathbb R^3\), and \(\dim\mathbb R^3=3\lt4\): by the counting theorem they are dependent.`, S`Two vectors are fewer than \(3=\dim\mathbb R^3\), so they cannot span \(\mathbb R^3\); their span is at most a plane.`],
      S`more than 3 vectors are dependent; fewer than 3 cannot span`, dims],
  ]),

  practice([
    q("dim R⁵", S`What is \(\dim\mathbb R^5\)?`, num(5),
      "Standard basis.", [S`\(\vec e_1,\dots,\vec e_5\).`], S`\(5\)`),
    q("line", S`What is the dimension of a line through the origin in \(\mathbb R^4\)?`, num(1),
      "One spanning vector.", [S`A basis is one nonzero direction vector.`], S`\(1\)`),
    q("two vectors", S`Can two vectors span \(\mathbb R^3\)?`, choice(["no", "yes, if they are independent", "yes, always", "only if one of them is 0"], 0),
      "Counting theorem.", [S`Fewer than \(\dim\mathbb R^3=3\) vectors cannot span.`], "no"),
    q("span", S`Find \(\dim\operatorname{Span}\{(1,2,3),(2,4,6)\}\).`, num(1),
      "Parallel vectors.", [S`\((2,4,6)=2(1,2,3)\).`], S`\(1\)`),
    q("four in three", S`\(\dim S=3\). A set of 4 vectors in \(S\):`, choice(["is always dependent", "is always a basis", "always spans S", "is always independent"], 0),
      "More than the dimension.", [S`More than \(\dim S\) vectors are dependent.`], "is always dependent"),
  ]),

  ...hard([
    ["Equal dimension forces equality", S`Prove: if \(U\subseteq W\) are subspaces of \(\mathbb R^n\) with \(\dim U=\dim W=k\), then \(U=W\).`,
      [S`If \(k=0\), both are \(\{\vec 0\}\). Otherwise take a basis \(\vec u_1,\dots,\vec u_k\) of \(U\).`, S`These \(k\) vectors lie in \(W\) and are independent; \(\dim W=k\), so by the counting theorem they span \(W\).`, S`So \(W=\operatorname{Span}\{\vec u_i\}=U\).`],
      S`a subspace of the same dimension inside \(W\) is \(W\) itself`],
    ["When does the dimension drop?", S`For which \(k\) is \(\dim\operatorname{Span}\{(1,1,k),(1,k,1),(k,1,1)\}\lt3\)? Find the dimension in each such case.`,
      [S`Columns: \[${am([[1, 1, "k"], [1, "k", 1], ["k", 1, 1]], false)}\ \xrightarrow{R_2\to R_2-R_1,\ R_3\to R_3-kR_1}\ ${am([[1, 1, "k"], [0, "k-1", "1-k"], [0, "1-k", "1-k^2"]], false)}\]`,
        S`\(R_3\to R_3+R_2\): \[\longrightarrow\ ${am([[1, 1, "k"], [0, "k-1", "1-k"], [0, 0, "(1-k)(2+k)"]], false)}\] since \((1-k^2)+(1-k)=(1-k)(2+k)\).`,
        S`\(k\ne1,-2\): three pivots, dimension 3. \(k=1\): rows 2 and 3 vanish, dimension 1 (all three vectors are \((1,1,1)\)). \(k=-2\): two pivots, dimension 2.`],
      S`dimension 1 for \(k=1\), dimension 2 for \(k=-2\), otherwise 3`],
  ], [
    q("hard", S`Find \(\dim\{\vec x\in\mathbb R^5: x_1=x_2=x_3\}\).`, num(3),
      "Two equations: x₁ − x₂ = 0, x₂ − x₃ = 0.", [S`Rank 2, so \(5-2=3\).`], S`\(3\)`),
    q("hard", S`What is the largest number of linearly independent vectors in the plane \(x_1+x_2+x_3=0\)?`, num(2),
      "Its dimension.", [S`The plane has dimension 2.`], S`\(2\)`),
    q("hard", S`\(A\) is \(4\times7\) with \(\operatorname{rank}A=3\). Find the dimension of the solution space of \(A\vec x=\vec 0\).`, num(4),
      "n − rank A.", [S`\(7-3\).`], S`\(4\)`),
  ]),

  wrapUp({
    qas: [
      ["Why do all bases have the same size?", "Any set larger than a basis is dependent, so each basis is at most as large as the other."],
      ["What is the dimension?", "The number of vectors in any basis; dim {0} = 0 and dim Rⁿ = n."],
      ["How do I find the dimension of a span?", "Row reduce the matrix with the vectors as columns and count the pivots."],
      ["And of a solution space?", "n − rank A, the number of free variables."],
      ["What does the counting theorem say?", "In dimension k: more than k vectors are dependent, fewer than k cannot span, and exactly k span iff they are independent."],
    ],
    summary: [
      "More vectors than a basis ⇒ dependent.",
      "All bases of S have the same size: dim S.",
      "dim{0} = 0, dim Rⁿ = n, lines 1, planes 2, hyperplanes n − 1.",
      "dim(solutions of Ax = 0) = n − rank A.",
      "In dim k: k vectors span ⇔ independent ⇔ basis.",
    ],
    next: "5.5 looks at especially convenient bases — orthogonal and orthonormal ones — where coordinates come straight from dot products.",
  }),
];
