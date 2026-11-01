// LINALG1 5.3 — Bases of a Subspace: linear independence recalled (and tested by row reduction), the definition of a
// basis, the standard basis of Rⁿ, unique coordinates, and the two ways to find a basis: describe a general element
// as a combination, or keep the pivot columns of the matrix whose columns span the subspace.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, q, num, choice, hard, definition, theorem, cv, am, sys, steps, dir } from "./lib.mjs";
import { vfig, scene3, a3, pt3, patch3 } from "./vecfig.mjs";

export const TITLE = "5.3 Bases of a Subspace";
export const ID = "11a10001-0001-4001-8001-000000000503";

const S = String.raw;
/** coordinates in the basis (1,1), (1,2): a skewed grid */
const skewGrid = (() => {
  const segs = [];
  for (let k = -3; k <= 4; k++) { segs.push({ pts: [[k - 4, k - 8], [k + 4, k + 8]], color: "#cbd5e1", w: 1 }); segs.push({ pts: [[k - 4, 2 * k - 4], [k + 4, 2 * k + 4]], color: "#e2e8f0", w: 1 }); }
  return vfig({ view: { xmin: -1, xmax: 5, ymin: -1, ymax: 7 }, step: 1, width: 280, segs,
    arrows: [{ from: [0, 0], to: [1, 1], color: "blue", w: 2.6, label: "b₁" }, { from: [0, 0], to: [1, 2], color: "red", w: 2.6, label: "b₂" }, { from: [0, 0], to: [1, 1], color: "blue", w: 1 }, { from: [1, 1], to: [3, 5], color: "red", w: 2, dash: true }],
    points: [{ x: 3, y: 5, label: "x = 1b₁ + 2b₂", color: "green" }] }, "x = (3, 5) has coordinates (1, 2) in the basis b₁ = (1, 1), b₂ = (1, 2)");
})();
const planeBasis = vfig(scene3(3.4, { polys: [patch3([0, 0, 0], [2, 1, 0], [-3, 0, 1], 0.75, "#ede9fe", "violet", 0.55)],
  arrows: [a3([0, 0, 0], [2, 1, 0], { color: "blue", label: "(2, 1, 0)", off: 14 }), a3([0, 0, 0], [-3, 0, 1], { color: "red", label: "(−3, 0, 1)", off: -14 })],
  points: [pt3([0, 0, 0], "0", { color: "black", dx: -14 })] }), "the plane x₁ − 2x₂ + 3x₃ = 0 with a basis of two vectors");
const coplanar = vfig(scene3(3.2, { polys: [patch3([0, 0, 0], [1, 0, 1], [1, 1, 0], 1.1, "#dbeafe", "blue", 0.45)],
  arrows: [a3([0, 0, 0], [1, 0, 1], { color: "blue", vl: "v₁", off: 14 }), a3([0, 0, 0], [1, 1, 0], { color: "red", vl: "v₂", off: -14 }), a3([0, 0, 0], [0, -1, 1], { color: "green", vl: "v₃", off: 14 })],
  points: [pt3([0, 0, 0], "0", { color: "black", dx: -14 })] }), "three vectors in one plane are dependent: v₁ = v₂ + v₃");

export const blocks = () => [
  intro({
    icon: "🧭",
    title: "Bases of a Subspace",
    overview: S`A spanning set describes a subspace, but it may contain redundant vectors. A <strong>basis</strong> is a spanning set with no redundancy at all: its vectors are <strong>linearly independent</strong>. Bases are the "coordinate systems" of subspaces — every vector of the subspace is a combination of the basis vectors in exactly one way. This lesson recalls linear independence and its row-reduction test, defines a basis, and gives two reliable ways to find one: describe a general element with free parameters, or keep the pivot columns of a matrix whose columns span the subspace.`,
    goals: [
      "test a set of vectors for linear independence by row reduction;",
      "state the definition of a basis and the standard basis of \\(\\mathbb R^n\\);",
      "find a basis of a subspace given by equations or in parametric form;",
      "extract a basis of a span from the pivot columns;",
      "find the (unique) coordinates of a vector with respect to a basis.",
    ],
    outcomes: "subspaces of Rⁿ: linear independence, bases and coordinates",
    prior: [
      [S`Write the solutions of \(x_1-x_2+x_3=0\) as a span.`, S`\(x_2=s,\ x_3=t\): \(s(1,1,0)+t(-1,0,1)\).`],
      [S`What does a column without a pivot mean in the RREF of \(A\)?`, S`A free variable of \(A\vec x=\vec 0\).`],
      [S`When is a span of two vectors in \(\mathbb R^3\) only a line?`, S`When the vectors are parallel (one is a multiple of the other).`],
    ],
    words: [
      ["Linearly independent", "\\(c_1\\vec v_1+\\dots+c_k\\vec v_k=\\vec 0\\) only for \\(c_1=\\dots=c_k=0\\)", "\\((1,0),(0,1)\\)"],
      ["Linearly dependent", "some nontrivial combination equals \\(\\vec 0\\)", "\\((1,2),(2,4)\\)"],
      ["Basis", "a linearly independent spanning set", "\\(\\{(1,1),(1,2)\\}\\) for \\(\\mathbb R^2\\)"],
      ["Standard basis", "\\(\\vec e_1,\\dots,\\vec e_n\\): one 1, the rest 0", "\\(\\vec e_2=(0,1,0)\\)"],
      ["Coordinates", "the unique coefficients of \\(\\vec x\\) in a basis", "\\((3,5)=1\\vec b_1+2\\vec b_2\\)"],
    ],
  }),

  section("📌 Linear independence, recalled", S`
  ${definition("linear independence", S`Vectors \(\vec v_1,\dots,\vec v_k\) are <strong>linearly independent</strong> if the only solution of \(c_1\vec v_1+\dots+c_k\vec v_k=\vec 0\) is \(c_1=\dots=c_k=0\). Otherwise they are <strong>linearly dependent</strong>, and then at least one of them is a combination of the others.`)}
  <p><strong>Test.</strong> The equation \(c_1\vec v_1+\dots+c_k\vec v_k=\vec 0\) is a homogeneous system whose coefficient matrix has the \(\vec v_i\) as <strong>columns</strong>. Row reduce it:</p>
  <ul><li>a pivot in every column (no free variables): only the trivial solution — <strong>independent</strong>;</li><li>a column without a pivot: a free variable gives a nontrivial solution — <strong>dependent</strong>, and that vector is a combination of the pivot-column vectors before it.</li></ul>
  <div style="text-align:center;">${coplanar}</div>
  <p>Quick facts: one vector is independent unless it is \(\vec 0\); two vectors are dependent exactly when one is a multiple of the other; any set containing \(\vec 0\) is dependent.</p>`),

  section("📌 Bases", S`
  ${definition("basis", S`A set \(\mathcal B=\{\vec v_1,\dots,\vec v_k\}\) of vectors in a subspace \(S\) is a <strong>basis</strong> of \(S\) if (1) \(\mathcal B\) spans \(S\), and (2) \(\mathcal B\) is linearly independent. (By convention the empty set is a basis of \(\{\vec 0\}\).)`)}
  <p>The <strong>standard basis</strong> of \(\mathbb R^n\) is \(\vec e_1=(1,0,\dots,0),\ \dots,\ \vec e_n=(0,\dots,0,1)\): every \(\vec x=x_1\vec e_1+\dots+x_n\vec e_n\), and the matrix with columns \(\vec e_i\) is the identity, which has a pivot in every column.</p>
  ${theorem("unique coordinates", S`If \(\{\vec v_1,\dots,\vec v_k\}\) is a basis of \(S\), every \(\vec x\in S\) can be written as \(\vec x=c_1\vec v_1+\dots+c_k\vec v_k\) in <strong>exactly one</strong> way. The numbers \(c_1,\dots,c_k\) are the <strong>coordinates</strong> of \(\vec x\) in this basis.`, S`Such \(c_i\) exist because the basis spans \(S\). If also \(\vec x=d_1\vec v_1+\dots+d_k\vec v_k\), subtracting gives \((c_1-d_1)\vec v_1+\dots+(c_k-d_k)\vec v_k=\vec 0\); independence forces every \(c_i-d_i=0\).`)}
  <div style="text-align:center;">${skewGrid}</div>`),

  section("📌 Finding a basis", S`
  <p><strong>Method 1 — from a description.</strong> Take an arbitrary \(\vec x\in S\), use the defining conditions to write it with free parameters, and split by parameter: \(\vec x=t_1\vec v_1+\dots+t_k\vec v_k\). Then \(\{\vec v_1,\dots,\vec v_k\}\) spans \(S\). If each \(\vec v_i\) has a 1 in the position of "its" free variable and 0 in the positions of the other free variables (as happens automatically when solving), the set is independent too — a basis.</p>
  <p><strong>Method 2 — from a spanning set.</strong> If \(S=\operatorname{Span}\{\vec v_1,\dots,\vec v_k\}\), put the \(\vec v_i\) in the columns of a matrix and row reduce. The vectors \(\vec v_i\) <em>of the original set</em> in the pivot columns form a basis of \(S\); the others are combinations of them and can be dropped.</p>
  ${keyIdea(S`A basis is a spanning set with nothing to spare and an independent set with nothing missing: removing a vector loses spanning; adding a vector loses independence.`)}
  <div style="text-align:center;">${planeBasis}</div>`),

  section("📌 Explore", S`<p>The vectors \(\vec v_1,\vec v_2,\vec v_3\) are the columns. The pivot columns give a basis of their span; the readout lists it. With \(k=-2\) in the second set every vector is a multiple of the first.</p>`),
  widget("laSpanDim", { init: { set: "line" } }),

  section("📌 Common mistakes", watchOut([
    "For Method 2, take the basis vectors from the ORIGINAL matrix's pivot columns, not from the RREF.",
    "A spanning set may be dependent; an independent set may not span — a basis needs both.",
    "Bases are not unique; coordinates depend on the basis chosen (and on the order of its vectors).",
    "Two vectors that are not multiples are independent, but three vectors need a real test.",
    "A set containing the zero vector is never independent, so never a basis.",
  ])),

  examples([
    ["A basis of a plane given by an equation", S`Find a basis of \(S=\{\vec x\in\mathbb R^3: x_1-2x_2+3x_3=0\}\).`,
      [S`<strong>Matrix form.</strong> \(S=\{\vec x: A\vec x=\vec 0\}\) with \(A=${am([[1, -2, 3]], false)}\). The augmented matrix \[${am([[1, -2, 3, 0]])}\] is already in RREF: one pivot (column 1), free variables \(x_2=s\), \(x_3=t\).`,
        S`Solve the pivot row: \(x_1=2s-3t\). In vector form \[\vec x=${cv("2s-3t", "s", "t")}=s${cv(2, 1, 0)}+t${cv(-3, 0, 1)},\] so \(\{(2,1,0),(-3,0,1)\}\) spans \(S\).`,
        ...steps([[2, -3], [1, 0], [0, 1]], [
          [S`<strong>Independence.</strong> Bring the 1 up as the first pivot.`, ["R1<->R2"]],
          [S`Clear column 1.`, ["R2-2R1"]],
          [S`Clear column 2 below its pivot.`, ["R3+1/3R2"]],
        ], { bar: false, intro: "Matrix with the two vectors as columns" }).steps,
        S`A pivot in both columns: independent, hence a basis.`,
        S`Check: \(${am([[1, -2, 3]], false)}${cv(2, 1, 0)}=${am([["2-2+0"]], false)}=${am([[0]], false)}\) ✓ and \(${am([[1, -2, 3]], false)}${cv(-3, 0, 1)}=${am([["-3-0+3"]], false)}=${am([[0]], false)}\) ✓.`],
      S`\(\{(2,1,0),\ (-3,0,1)\}\)`, planeBasis],
    ["A basis from a parametric description", S`Find a basis of \(S=\{(a+b,\ b-c,\ a+c): a,b,c\in\mathbb R\}\).`,
      [S`Split by parameter: \((a+b,\ b-c,\ a+c)=a(1,0,1)+b(1,1,0)+c(0,-1,1)\), so these three vectors span \(S\).`,
        ...steps([[1, 1, 0], [0, 1, -1], [1, 0, 1]], [
          [S`Test independence (Method 2): the vectors are the columns. Clear column 1.`, ["R3-R1"]],
          [S`Clear column 2 below the pivot.`, ["R3+R2"]],
        ], { bar: false, intro: "Matrix with the three vectors as columns" }).steps,
        S`Pivots in columns 1 and 2 only: column 3 is a combination of the first two. Indeed \((0,-1,1)=(1,0,1)-(1,1,0)\).`,
        S`So the pivot columns of the original matrix, \((1,0,1)\) and \((1,1,0)\), form a basis.`],
      S`\(\{(1,0,1),\ (1,1,0)\}\): \(S\) is a plane`],
    ["Testing independence in ℝ⁴", S`Are \(\vec v_1=(1,2,0,1)\), \(\vec v_2=(0,1,1,1)\), \(\vec v_3=(2,3,-1,1)\) linearly independent?`,
      [...steps([[1, 0, 2], [2, 1, 3], [0, 1, -1], [1, 1, 1]], [
        [S`Clear column 1.`, ["R2-2R1", "R4-R1"]],
        [S`Clear column 2 below its pivot.`, ["R3-R2", "R4-R2"]],
      ], { bar: false, intro: "Put the vectors in the columns and row reduce" }).steps,
        S`Column 3 has no pivot, so \(c_3\) is free and there is a nontrivial solution: dependent.`,
        S`From the echelon form, \(c_2=c_3\) and \(c_1=-2c_3\); with \(c_3=-1\): \(2\vec v_1-\vec v_2-\vec v_3=\vec 0\), i.e. \(\vec v_3=2\vec v_1-\vec v_2\). Check: \(2(1,2,0,1)-(0,1,1,1)=(2,3,-1,1)\) ✓.`],
      S`dependent: \(\vec v_3=2\vec v_1-\vec v_2\)`],
    ["Coordinates in a basis", S`\(\mathcal B=\{(1,1),(1,2)\}\) is a basis of \(\mathbb R^2\). Find the coordinates of \(\vec x=(3,5)\).`,
      [...steps([[1, 1, 3], [1, 2, 5]], [
        [S`Solve \(c_1(1,1)+c_2(1,2)=(3,5)\). Clear column 1.`, ["R2-R1"]],
        [S`Clear above the second pivot.`, ["R1-R2"]],
      ]).steps,
        S`\(c_1=1\), \(c_2=2\). The pivot in every column also shows the basis is independent, so these coordinates are unique.`,
        S`Check: \(1(1,1)+2(1,2)=(3,5)\) ✓.`],
      S`coordinates \((1,2)\)`, skewGrid],
    ["Is it a basis of ℝ³?", S`Is \(\{(1,0,1),(0,1,1),(1,1,0)\}\) a basis of \(\mathbb R^3\)?`,
      [...steps([[1, 0, 1], [0, 1, 1], [1, 1, 0]], [
        [S`Columns are the vectors. Clear column 1.`, ["R3-R1"]],
        [S`Clear column 2.`, ["R3-R2"]],
      ], { bar: false, intro: "Row reduce the matrix with the vectors as columns" }).steps,
        S`A pivot in every column: independent. A pivot in every row: every \(\vec b\in\mathbb R^3\) gives a consistent system, so the vectors span \(\mathbb R^3\).`],
      S`yes — independent and spanning`],
  ]),

  practice([
    q("standard basis", S`How many vectors are in the standard basis of \(\mathbb R^4\)?`, num(4),
      "e₁, …, eₙ.", [S`\(\vec e_1,\vec e_2,\vec e_3,\vec e_4\).`], S`\(4\)`),
    q("independent?", S`Are \((1,2)\) and \((2,4)\) linearly independent?`, choice(["no", "yes"], 0),
      "Is one a multiple of the other?", [S`\((2,4)=2(1,2)\).`], "no"),
    q("basis of R²", S`Which set is a basis of \(\mathbb R^2\)?`, choice([S`\(\{(1,1),(1,-1)\}\)`, S`\(\{(1,1),(2,2)\}\)`, S`\(\{(1,0)\}\)`, S`\(\{(1,0),(0,1),(1,1)\}\)`], 0),
      "Two independent vectors.", [S`\((1,1)\) and \((1,-1)\) are not multiples of each other.`], S`\(\{(1,1),(1,-1)\}\)`),
    q("basis of a line", S`Give a basis vector of the line \(\{t(2,-1,5): t\in\mathbb R\}\).`, dir(2, -1, 5),
      "One nonzero vector on the line.", [S`\((2,-1,5)\) spans it and is nonzero.`], S`\((2,-1,5)\) (or any nonzero multiple)`),
    q("coordinate", S`Find the first coordinate \(c_1\) of \((4,6)\) in the basis \(\{(1,0),(1,2)\}\).`, num(1),
      "c₁(1,0) + c₂(1,2) = (4, 6).", [S`Second entry: \(2c_2=6\), \(c_2=3\). First: \(c_1+3=4\).`], S`\(c_1=1\)`),
  ]),

  ...hard([
    ["Unique representation ⇔ independence", S`Prove: \(\vec v_1,\dots,\vec v_k\) are linearly independent if and only if every vector of their span has only one representation as a combination of them.`,
      [S`(⇒) Two representations differ by a combination equal to \(\vec 0\); independence makes all differences 0 (the theorem above).`, S`(⇐) \(\vec 0\) has the representation \(0\vec v_1+\dots+0\vec v_k\). If it is the only one, then \(c_1\vec v_1+\dots+c_k\vec v_k=\vec 0\) forces all \(c_i=0\): independence.`],
      S`independence is exactly uniqueness of coordinates`],
    ["A basis of a solution space in ℝ⁴", S`Find a basis of \(S=\{\vec x\in\mathbb R^4: x_1+x_2+x_3+x_4=0,\ x_1-x_4=0\}\).`,
      [...steps([[1, 1, 1, 1], [1, 0, 0, -1]], [
        [S`Clear column 1.`, ["R2-R1"]],
        [S`Scale the second pivot to 1.`, ["R2*-1"]],
        [S`Clear above it.`, ["R1-R2"]],
      ], { bar: false, intro: "Reduce the coefficient matrix" }).steps,
        S`Free: \(x_3=s\), \(x_4=t\). Row 1: \(x_1=t\). Row 2: \(x_2=-s-2t\). So \(\vec x=s(0,-1,1,0)+t(1,-2,0,1)\).`,
        S`The vectors have 1 and 0 in the free positions 3 and 4, so they are independent. Check \((1,-2,0,1)\): \(1-2+0+1=0\) ✓, \(1-1=0\) ✓.`],
      S`\(\{(0,-1,1,0),\ (1,-2,0,1)\}\)`],
  ], [
    q("hard", S`For which \(k\) is \(\{(1,2),(3,k)\}\) <strong>not</strong> a basis of \(\mathbb R^2\)?`, num(6),
      "The vectors must be parallel.", [S`\((3,k)=3(1,2)\) when \(k=6\).`], S`\(k=6\)`),
    q("hard", S`How many vectors are in a basis of the plane \(x_1-x_2+2x_3=0\)?`, num(2),
      "Count free variables.", [S`One pivot, two free variables.`], S`\(2\)`),
    q("hard", S`Find the second coordinate of \((7,4)\) in the basis \(\{(1,1),(2,-1)\}\).`, num(1),
      "c₁ + 2c₂ = 7, c₁ − c₂ = 4.", [S`Subtract: \(3c_2=3\).`], S`\(1\)`),
  ]),

  wrapUp({
    qas: [
      ["What is a basis?", "A set of vectors in the subspace that spans it and is linearly independent."],
      ["How do I test independence?", "Put the vectors in the columns of a matrix and row reduce: independent exactly when every column has a pivot."],
      ["How do I find a basis of a subspace given by equations?", "Solve the equations, write the general solution split by free parameter; the vectors that appear form a basis."],
      ["How do I find a basis of a span?", "Row reduce the matrix with the spanning vectors as columns and keep the ORIGINAL vectors in the pivot columns."],
      ["Why are coordinates unique?", "Two different representations would give a nontrivial combination equal to 0, contradicting independence."],
    ],
    summary: [
      "Independent ⇔ pivot in every column of [v₁ … vₖ].",
      "Basis = spanning + independent.",
      "Standard basis of Rⁿ: e₁, …, eₙ.",
      "Equations → solve → split by parameter → basis; span → pivot columns → basis.",
      "Coordinates in a basis exist and are unique.",
    ],
    next: "5.4 proves that every basis of a subspace has the same number of vectors — its dimension.",
  }),
];
