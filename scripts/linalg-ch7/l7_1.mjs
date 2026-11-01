// LINALG1 7.1 — Matrix Transformations: T(x) = Ax from ℝⁿ to ℝᵐ, domain, codomain, image and range; computing
// images, finding every x with T(x) = b by row reducing [A | b], deciding whether b is in the range, and the image
// of the unit square computed all at once as A times the matrix of corners.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, q, num, choice, hard, definition, theorem, am, cv, sfig, steps } from "./lib.mjs";
import { sqMap, ptMap, lineMap } from "./ws/fig7.mjs";

export const TITLE = "7.1 Matrix Transformations";
export const ID = "11a10001-0001-4001-8001-000000000701";

const S = String.raw;
const M = (m) => am(m, false);
const mapFig = sfig(ptMap([[1, -1], [1, 2]], [2, 1], { raw: true }), "T(x) = Ax sends the vector x to a new vector");
const sqFig = sfig(sqMap([[2, 1], [0, 1]], { raw: true }), "the unit square and its image: the edges e₁, e₂ land on the columns of A");
const ex4Fig = sfig(sqMap([[1, 2], [1, -1]], { raw: true }), "corners (0,0), (1,0), (0,1), (1,1) go to (0,0), (1,1), (2,−1), (3,0)");
const lineFig = sfig(lineMap([[1, 2], [0, 1]], [1, 0], [1, 1], { raw: true }), "a line maps to a line: A(p + td) = Ap + t·Ad");

export const blocks = () => [
  intro({
    icon: "🔀",
    title: "Matrix Transformations",
    overview: S`So far a matrix has been a table of numbers, and \(A\vec x\) a way to write a system. Now we read \(A\vec x\) as an action: an \(m\times n\) matrix \(A\) takes an input \(\vec x\in\mathbb R^n\) and returns an output \(A\vec x\in\mathbb R^m\). This rule \(T(\vec x)=A\vec x\) is a <strong>matrix transformation</strong>. Every question about systems becomes a question about \(T\): solving \(A\vec x=\vec b\) means finding the inputs with output \(\vec b\), and "is \(A\vec x=\vec b\) consistent?" means "is \(\vec b\) in the range of \(T\)?". In the plane the action can be seen: squares become parallelograms, lines become lines.`,
    goals: [
      "describe \\(T(\\vec x)=A\\vec x\\) with its domain \\(\\mathbb R^n\\) and codomain \\(\\mathbb R^m\\);",
      "compute images \\(T(\\vec x)\\) as matrix–vector products;",
      "find every \\(\\vec x\\) with \\(T(\\vec x)=\\vec b\\) by row reducing \\([A\\mid\\vec b]\\);",
      "decide whether \\(\\vec b\\) is in the range of \\(T\\);",
      "find the image of a square or a line in the plane in matrix form.",
    ],
    outcomes: "linear transformations: matrix transformations",
    prior: [
      [S`Compute \(${M([[1, 2], [3, 4]])}${cv(1, -1)}\).`, S`\(${cv("1-2", "3-4")}=${cv(-1, -1)}\).`],
      [S`What does a row of zeros \([\,0\ \ 0\mid 5\,]\) say about a system?`, S`It reads "zero equals five", which is impossible: the system is inconsistent.`],
      [S`\(A\vec x\) is a combination of what?`, S`Of the columns of \(A\), with weights \(x_1,\dots,x_n\).`],
    ],
    words: [
      ["Transformation \\(T:\\mathbb R^n\\to\\mathbb R^m\\)", "a rule giving each \\(\\vec x\\in\\mathbb R^n\\) one \\(T(\\vec x)\\in\\mathbb R^m\\)", "also called a map"],
      ["Domain / codomain", "\\(\\mathbb R^n\\) (inputs) / \\(\\mathbb R^m\\) (where outputs live)", "\\(A\\) is \\(m\\times n\\)"],
      ["Image", "the output \\(T(\\vec x)\\)", "\\(A\\vec x\\)"],
      ["Range", "the set of all images", "\\(=\\operatorname{Col}A\\)"],
      ["Matrix transformation", "\\(T(\\vec x)=A\\vec x\\)", "the main example"],
    ],
  }),

  section("📌 Transformations given by matrices", S`
  ${definition("transformation", S`A <strong>transformation</strong> \(T:\mathbb R^n\to\mathbb R^m\) assigns to each \(\vec x\) in \(\mathbb R^n\) (the <strong>domain</strong>) a vector \(T(\vec x)\) in \(\mathbb R^m\) (the <strong>codomain</strong>). \(T(\vec x)\) is the <strong>image</strong> of \(\vec x\); the set of all images is the <strong>range</strong> of \(T\).`)}
  ${definition("matrix transformation", S`For an \(m\times n\) matrix \(A\), the rule \(T(\vec x)=A\vec x\) is a transformation \(\mathbb R^n\to\mathbb R^m\). The number of <em>columns</em> of \(A\) is the size of the input; the number of <em>rows</em> is the size of the output.`)}
  ${theorem("range = column space", S`The range of \(T(\vec x)=A\vec x\) is \(\operatorname{Col}A\), the span of the columns of \(A\). So \(\vec b\) is in the range exactly when \(A\vec x=\vec b\) is consistent.`, S`\(A\vec x=x_1\vec a_1+\dots+x_n\vec a_n\) is a combination of the columns, and every combination arises from some \(\vec x\). So the set of images is exactly the span of the columns, and \(\vec b\) is an image exactly when some \(\vec x\) solves \(A\vec x=\vec b\).`)}
  ${mapFig}`),

  section("📌 Pictures in the plane", S`<p>For a \(2\times2\) matrix, \(T\) moves points of the plane. Since \(A\vec e_1\) and \(A\vec e_2\) are the columns of \(A\), the unit square with edges \(\vec e_1,\vec e_2\) goes to the parallelogram with edges the columns.</p>
  ${keyIdea(S`To transform several points at once, put them as the columns of one matrix \(P\) and compute \(AP\): column \(j\) of \(AP\) is \(A\) times column \(j\) of \(P\).`)}
  ${sqFig}
  ${theorem("lines go to lines", S`If \(T(\vec x)=A\vec x\), the line \(\vec x=\vec p+t\vec d\) is sent to \(A\vec p+t\,A\vec d\): a line through \(A\vec p\) with direction \(A\vec d\), or the single point \(A\vec p\) when \(A\vec d=\vec 0\).`, S`\(A(\vec p+t\vec d)=A\vec p+A(t\vec d)=A\vec p+t\,A\vec d\) by the distributive and scalar rules for matrix–vector products.`)}
  ${lineFig}`),

  section("📌 Explore", S`<p>Pick a \(2\times2\) matrix with the sliders. The explorer draws the grid and the unit square before and after \(T\), and a vector \(\vec x\) with its image \(T(\vec x)=A\vec x\).</p>`),
  widget("laMap2", { init: { a: 2, b: 1, c: 0, d: 1, x: 1, y: 2 } }),

  section("📌 Common mistakes", watchOut([
    "An m × n matrix maps ℝⁿ → ℝᵐ: columns = input size, rows = output size.",
    "The range is the set of OUTPUTS (Col A), not the codomain ℝᵐ — they can differ.",
    "To decide whether b is in the range, row reduce [A | b]; do not just look at b.",
    "T(x) = b may have one solution, many, or none — the same three cases as a system.",
    "Transform corners with one product AP instead of four separate products.",
  ])),

  examples([
    ["Images under a 3 × 2 matrix", S`Let \(T(\vec x)=A\vec x\) with \(A=${M([[1, -2], [3, 0], [1, 1]])}\). State the domain and codomain, and find \(T${cv(2, 1)}\) and \(T${cv(-1, 3)}\).`,
      [S`\(A\) is \(3\times2\): inputs have 2 entries and outputs 3, so \(T:\mathbb R^2\to\mathbb R^3\).`,
        S`Row of \(A\) times \(\vec x\): \[T${cv(2, 1)}=${M([[1, -2], [3, 0], [1, 1]])}${cv(2, 1)}=${cv("1(2)-2(1)", "3(2)+0(1)", "1(2)+1(1)")}=${cv(0, 6, 3)}.\]`,
        S`\[T${cv(-1, 3)}=${M([[1, -2], [3, 0], [1, 1]])}${cv(-1, 3)}=${cv("1(-1)-2(3)", "3(-1)+0(3)", "1(-1)+1(3)")}=${cv(-7, -3, 2)}.\]`,
        S`Both at once: \[${M([[1, -2], [3, 0], [1, 1]])}${M([[2, -1], [1, 3]])}=${M([[0, -7], [6, -3], [3, 2]])}.\]`],
      S`\(T:\mathbb R^2\to\mathbb R^3\); \(T(2,1)=(0,6,3)\), \(T(-1,3)=(-7,-3,2)\)`],
    ["Finding the input", S`For \(A=${M([[1, 2], [2, 5], [1, 3]])}\), find every \(\vec x\) with \(T(\vec x)=${cv(3, 7, 4)}\).`,
      [S`\(T(\vec x)=\vec b\) is the system \(A\vec x=\vec b\).`,
        ...steps([[1, 2, 3], [2, 5, 7], [1, 3, 4]], [
          [S`Clear column 1 below the pivot.`, ["R2-2R1", "R3-R1"]],
          [S`Clear column 2 below its pivot.`, ["R3-R2"]],
          [S`Clear column 2 above its pivot.`, ["R1-2R2"]],
        ], { intro: S`Augmented matrix \([A\mid\vec b]\)` }).steps,
        S`So \(x_1=1\), \(x_2=1\). Check: \[${M([[1, 2], [2, 5], [1, 3]])}${cv(1, 1)}=${cv("1+2", "2+5", "1+3")}=${cv(3, 7, 4)}\ \checkmark\]`],
      S`\(\vec x=(1,1)\), the only input with that image`],
    ["A vector outside the range", S`For \(A=${M([[1, -1], [2, 1], [0, 3]])}\), is \(\vec b=${cv(1, 5, 4)}\) in the range of \(T(\vec x)=A\vec x\)?`,
      [...steps([[1, -1, 1], [2, 1, 5], [0, 3, 4]], [
          [S`Clear column 1.`, ["R2-2R1"]],
          [S`Clear column 2 below its pivot.`, ["R3-R2"]],
        ], { intro: S`Row reduce \([A\mid\vec b]\)` }).steps,
        S`The last row reads \(0x_1+0x_2=1\), which is impossible. No \(\vec x\) has \(A\vec x=\vec b\).`,
        S`For contrast, \(\vec x=(2,1)\) fits the first two rows: \[${M([[1, -1], [2, 1], [0, 3]])}${cv(2, 1)}=${cv("2-1", "4+1", "0+3")}=${cv(1, 5, 3)}\ne${cv(1, 5, 4)}.\]`],
      S`no: \([A\mid\vec b]\) has a row \([\,0\ \ 0\mid1\,]\)`],
    ["The image of the unit square", S`Find the image of the unit square under \(T(\vec x)=${M([[1, 2], [1, -1]])}\vec x\).`,
      [S`Put the corners \((0,0),(1,0),(0,1),(1,1)\) as the columns of \(P=${M([[0, 1, 0, 1], [0, 0, 1, 1]])}\).`,
        S`Multiply once: \[AP=${M([[1, 2], [1, -1]])}${M([[0, 1, 0, 1], [0, 0, 1, 1]])}=${M([["0", "1+0", "0+2", "1+2"], ["0", "1+0", "0-1", "1-1"]])}=${M([[0, 1, 2, 3], [0, 1, -1, 0]])}.\]`,
        S`The image is the parallelogram with corners \((0,0),(1,1),(2,-1),(3,0)\) — its edges from the origin are the columns of \(A\).`],
      S`the parallelogram with corners \((0,0),(1,1),(2,-1),(3,0)\)`, ex4Fig],
    ["Many inputs with one image", S`For \(A=${M([[1, 2, -1], [2, 4, 1]])}\), find every \(\vec x\in\mathbb R^3\) with \(T(\vec x)=${cv(4, 5)}\).`,
      [...steps([[1, 2, -1, 4], [2, 4, 1, 5]], [
          [S`Clear column 1.`, ["R2-2R1"]],
          [S`Scale the new pivot (column 3).`, ["R2*1/3"]],
          [S`Clear column 3 above its pivot.`, ["R1+R2"]],
        ], { intro: S`Row reduce \([A\mid\vec b]\)` }).steps,
        S`Pivots in columns 1 and 3; \(x_2=t\) is free. \(x_1=3-2t\), \(x_3=-1\): \[\vec x=${cv("3-2t", "t", "-1")}=${cv(3, 0, -1)}+t${cv(-2, 1, 0)}.\]`,
        S`Check the particular input and the direction: \[${M([[1, 2, -1], [2, 4, 1]])}${cv(3, 0, -1)}=${cv("3+0+1", "6+0-1")}=${cv(4, 5)},\qquad ${M([[1, 2, -1], [2, 4, 1]])}${cv(-2, 1, 0)}=${cv("-2+2+0", "-4+4+0")}=${cv(0, 0)}.\]`],
      S`\(\vec x=(3,0,-1)+t(-2,1,0)\) — a whole line of inputs`],
  ]),

  practice([
    q("sizes", S`\(A\) is \(4\times6\). \(T(\vec x)=A\vec x\) maps \(\mathbb R^n\to\mathbb R^m\). Find \(n\).`, num(6),
      "Columns = input size.", [S`\(A\vec x\) needs \(\vec x\) with 6 entries.`], S`\(6\)`),
    q("image", S`\(A=${M([[2, 0, 1], [1, -1, 3]])}\). Find the second entry of \(T(1,2,-1)\).`, num(-4),
      "Row 2 of A times x.", [S`\(1(1)-1(2)+3(-1)=1-2-3=-4\).`], S`\(-4\)`),
    q("range", S`Is \(${cv(1, 3)}\) in the range of \(T(\vec x)=${M([[1, 2], [2, 4]])}\vec x\)?`, choice(["no", "yes"], 0),
      "Row reduce [A | b].", [S`\(${am([[1, 2, 1], [2, 4, 3]])}\xrightarrow{R_2\to R_2-2R_1}${am([[1, 2, 1], [0, 0, 1]])}\): the row \([\,0\ \ 0\mid1\,]\) is impossible.`], S`no`),
    q("input", S`\(A=${M([[1, 1], [1, -1]])}\). Find \(x_1\) with \(T(\vec x)=${cv(6, 2)}\).`, num(4),
      "Add the two equations.", [S`\(x_1+x_2=6\), \(x_1-x_2=2\); adding, \(2x_1=8\).`], S`\(4\)`),
    q("corner", S`Under \(T(\vec x)=${M([[3, 1], [0, 2]])}\vec x\), the corner \((1,1)\) of the unit square goes to \((a,b)\). Find \(a\).`, num(4),
      "Sum of the columns.", [S`\(${M([[3, 1], [0, 2]])}${cv(1, 1)}=${cv(4, 2)}\).`], S`\(4\)`),
  ]),

  ...hard([
    ["A parameter that puts b in the range", S`Let \(A=${M([[1, 3], [2, "h"], [-1, 1]])}\) and \(\vec b=${cv(4, 6, 0)}\). For which \(h\) is \(\vec b\) in the range of \(T(\vec x)=A\vec x\)?`,
      [S`Rows 1 and 3 do not involve \(h\). Reduce them first by putting row 3 second: \[${am([[1, 3, 4], [-1, 1, 0], [2, "h", 6]])}\xrightarrow{R_2\to R_2+R_1,\ R_3\to R_3-2R_1}${am([[1, 3, 4], [0, 4, 4], [0, "h-6", -2]])}.\]`,
        S`Scale row 2 by \(\tfrac14\): \(${am([[0, 1, 1]])}\), so \(x_2=1\). Then \(R_3\to R_3-(h-6)R_2\): \[${am([[1, 3, 4], [0, 1, 1], [0, 0, "-2-(h-6)"]])}=${am([[1, 3, 4], [0, 1, 1], [0, 0, "4-h"]])}.\]`,
        S`Consistent exactly when \(4-h=0\), i.e. \(h=4\). Then \(x_2=1\), \(x_1=4-3=1\), and \[${M([[1, 3], [2, 4], [-1, 1]])}${cv(1, 1)}=${cv("1+3", "2+4", "-1+1")}=${cv(4, 6, 0)}\ \checkmark\]`],
      S`\(h=4\) (then \(\vec x=(1,1)\))`],
    ["The image of a line", S`Find the image of the line \(\vec x=${cv(1, 0)}+t${cv(1, 1)}\) under \(T(\vec x)=${M([[1, 2], [0, 1]])}\vec x\), and show that a line can collapse to a point under \(${M([[1, 1], [2, 2]])}\).`,
      [S`By linearity of the product, \(A(\vec p+t\vec d)=A\vec p+tA\vec d\): \[A\vec p=${M([[1, 2], [0, 1]])}${cv(1, 0)}=${cv(1, 0)},\qquad A\vec d=${M([[1, 2], [0, 1]])}${cv(1, 1)}=${cv("1+2", "0+1")}=${cv(3, 1)}.\]`,
        S`So the image is the line \(${cv(1, 0)}+t${cv(3, 1)}\) — through \((1,0)\) with direction \((3,1)\).`,
        S`For \(B=${M([[1, 1], [2, 2]])}\) and the direction \(\vec d=(1,-1)\): \[B\vec d=${M([[1, 1], [2, 2]])}${cv(1, -1)}=${cv("1-1", "2-2")}=${cv(0, 0)},\] so the line \(\vec p+t\vec d\) goes to the single point \(B\vec p\).`],
      S`the line \((1,0)+t(3,1)\); under \(B\) the line along \((1,-1)\) collapses to a point`, lineFig],
  ], [
    q("hard", S`\(A=${M([[1, 0, 2], [0, 1, -1]])}\). Find \(t\) so that \(T(t,1,1)=(5,0)\).`, num(3),
      "Row 1: t + 2.", [S`\(${M([[1, 0, 2], [0, 1, -1]])}${cv("t", 1, 1)}=${cv("t+2", "1-1")}\), so \(t+2=5\).`], S`\(3\)`),
    q("hard", S`For \(A=${M([[1, 2], [3, 6]])}\), the range of \(T\) is a line \(y=mx\). Find \(m\).`, num(3),
      "Both columns are multiples of (1, 3).", [S`\(\operatorname{Col}A=\operatorname{span}\{(1,3)\}\): the line \(y=3x\).`], S`\(3\)`),
    q("hard", S`\(T(\vec x)=A\vec x\) with \(A\) a \(3\times3\) matrix whose RREF has a zero row. Then the range of \(T\) is:`, choice([S`a proper subset of \(\mathbb R^3\)`, S`all of \(\mathbb R^3\)`, S`only \(\{\vec 0\}\)`, S`impossible to tell`], 0),
      "Some b makes [A | b] inconsistent.", [S`With fewer than 3 pivots, some \(\vec b\) gives a row \([\,0\ 0\ 0\mid c\,]\), \(c\ne0\).`], S`a proper subset of \(\mathbb R^3\)`),
  ]),

  wrapUp({
    qas: [
      ["What is a matrix transformation?", "The rule T(x) = Ax; an m × n matrix maps ℝⁿ to ℝᵐ."],
      ["What is the range of T(x) = Ax?", "Col A, the span of the columns of A."],
      ["How do I find all x with T(x) = b?", "Row reduce [A | b] and write the solution set."],
      ["How do I test whether b is in the range?", "[A | b] is consistent exactly when b is in the range."],
      ["What happens to the unit square in ℝ²?", "It becomes the parallelogram on the columns of A."],
    ],
    summary: [
      "T(x) = Ax: ℝⁿ → ℝᵐ for an m × n matrix A.",
      "Image T(x); range = all images = Col A.",
      "T(x) = b ⇔ Ax = b: none, one or infinitely many inputs.",
      "AP transforms all the columns of P at once.",
      "Lines go to lines (or points): A(p + td) = Ap + tAd.",
    ],
    next: "7.2 lists the two properties every matrix transformation has and calls any map with them linear.",
  }),
];
