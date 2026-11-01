// LINALG1 Worksheet 7.1 — Matrix Transformations
// Self-contained: complete notes, 9 worked examples with figures, 13 problems with an answer key.
import { svgT } from "./figT.mjs";
import { S, def, thm } from "./wkit.mjs";
import { rowPic, matPic } from "./fig3.mjs";
import { sqMap, ptMap, lineMap, shapeMap } from "./fig7.mjs";
import { am, steps } from "../bank/la.mjs";

const P = (svg, w = 4.4) => svgT(svg, w);
const M = (m) => am(m, false);
const C = (...a) => am(a.map((x) => [x]), false);

const NOTES = [
  { h: "1. Transformations",
    lead: def("transformation", S`A \emph{transformation} \(T:\mathbb R^n\to\mathbb R^m\) assigns to each \(\vec x\in\mathbb R^n\) (the \emph{domain}) one vector \(T(\vec x)\in\mathbb R^m\) (the \emph{codomain}). \(T(\vec x)\) is the \emph{image} of \(\vec x\); the set of all images is the \emph{range}.`),
    fig: ptMap([[2, -1], [1, 1]], [1, 2], { w: 4.2 }), w: 0.55 },
  { h: "2. Matrix transformations",
    lead: def("matrix transformation", S`For an \(m\times n\) matrix \(A\), \(T(\vec x)=A\vec x\) maps \(\mathbb R^n\to\mathbb R^m\): the number of \emph{columns} is the input size, the number of \emph{rows} the output size.`) + S`Row \(i\) of \(A\vec x\) is row \(i\) of \(A\) times \(\vec x\); equivalently \(A\vec x=x_1\vec a_1+\dots+x_n\vec a_n\), a combination of the columns.`,
    fig: P(rowPic([[[[1, 2], [0, 1], [3, -1]], { label: "A (3 × 2)" }], [[["x₁"], ["x₂"]], { label: "x ∈ ℝ²" }], "=", [[["x₁ + 2x₂"], ["x₂"], ["3x₁ − x₂"]], { label: "T(x) ∈ ℝ³" }]]), 4.6), w: 0.5 },
  { h: "3. The range is the column space",
    lead: thm("range", S`The range of \(T(\vec x)=A\vec x\) is \(\operatorname{Col}A\). Hence \(\vec b\) is in the range \(\iff A\vec x=\vec b\) is consistent \(\iff [A\mid\vec b]\) has no row \([\,0\ \cdots\ 0\mid c\,]\) with \(c\ne0\).`) + S`\pf{\(A\vec x\) runs through all combinations of the columns as \(\vec x\) varies.}`,
    fig: P(matPic([[1, 2, "b₁"], [0, 0, "c"]], { label: "c ≠ 0: b is NOT in the range" }), 2.6), w: 0.55 },
  { h: "4. Finding inputs",
    lead: S`To find every \(\vec x\) with \(T(\vec x)=\vec b\), row reduce \([A\mid\vec b]\). As for any system there are three possibilities: no input (\(\vec b\) outside the range), exactly one, or infinitely many (a free variable). In the last case the inputs form a line, plane, … parallel to the solution set of \(A\vec x=\vec 0\).`,
    fig: P(rowPic([[[[1, 2, 3], [2, 5, 7]], { label: "[A | b]", bar: true }], "→", [[[1, 0, 1], [0, 1, 1]], { label: "x = (1, 1)" }]]), 4.2), w: 0.5 },
  { h: "5. Pictures in the plane",
    lead: S`For a \(2\times2\) matrix, \(A\vec e_1\) and \(A\vec e_2\) are the columns of \(A\), so the unit square goes to the parallelogram on the columns. Many points are transformed at once by putting them as the columns of a matrix \(P\): column \(j\) of \(AP\) is \(A\) times column \(j\) of \(P\).`,
    fig: sqMap([[1, 1], [-1, 2]], { w: 4.2 }), w: 0.5 },
  { h: "6. Lines go to lines",
    lead: thm("image of a line", S`\(A(\vec p+t\vec d)=A\vec p+t\,A\vec d\): the line through \(\vec p\) along \(\vec d\) goes to the line through \(A\vec p\) along \(A\vec d\), or to the single point \(A\vec p\) if \(A\vec d=\vec 0\).`) + S`\pf{Distributive and scalar rules for matrix--vector products.}`,
    fig: lineMap([[2, 0], [1, 1]], [0, 1], [1, 0], { w: 4.2 }), w: 0.5 },
];

const EXAMPLES = [
  { title: "Domain, codomain and images", q: S`\(T(\vec x)=A\vec x\) with \(A=${M([[2, 0, -1], [1, 3, 1]])}\). State domain and codomain and find \(T(1,2,-1)\).`,
    fig: P(rowPic([[[[2, 0, -1], [1, 3, 1]], { label: "A (2 × 3)" }], [[[1], [2], [-1]], { label: "x" }]]), 3.2),
    steps: [S`\(A\) is \(2\times3\): \(T:\mathbb R^3\to\mathbb R^2\).`, S`\[T${C(1, 2, -1)}=${M([[2, 0, -1], [1, 3, 1]])}${C(1, 2, -1)}=${C("2(1)+0(2)-1(-1)", "1(1)+3(2)+1(-1)")}=${C(3, 6)}.\]`],
    ans: S`\(\mathbb R^3\to\mathbb R^2\); \(T(1,2,-1)=(3,6)\)` },
  { title: "Several images at once", q: S`For \(A=${M([[1, -1], [2, 1]])}\), find the images of \((1,1)\), \((2,0)\) and \((-1,3)\) with one product.`,
    fig: ptMap([[1, -1], [2, 1]], [2, 0], { w: 4 }),
    steps: [S`Put the inputs as columns of \(X=${M([[1, 2, -1], [1, 0, 3]])}\).`, S`\[AX=${M([[1, -1], [2, 1]])}${M([[1, 2, -1], [1, 0, 3]])}=${M([["1-1", "2-0", "-1-3"], ["2+1", "4+0", "-2+3"]])}=${M([[0, 2, -4], [3, 4, 1]])}.\]`],
    ans: S`\((0,3)\), \((2,4)\), \((-4,1)\)` },
  { title: "A unique input", q: S`For \(A=${M([[1, 1], [1, 2], [2, 1]])}\), find all \(\vec x\) with \(T(\vec x)=(4,7,5)\).`,
    fig: P(matPic([[1, 1, 4], [1, 2, 7], [2, 1, 5]], { label: "[A | b]" }), 2.2),
    steps: [...steps([[1, 1, 4], [1, 2, 7], [2, 1, 5]], [
      [S`Clear column 1.`, ["R2-R1", "R3-2R1"]],
      [S`Clear column 2 below its pivot.`, ["R3+R2"]],
      [S`Clear column 2 above its pivot.`, ["R1-R2"]],
    ], { intro: S`Row reduce \([A\mid\vec b]\)` }).steps,
      S`\(x_1=1\), \(x_2=3\). Check: \[${M([[1, 1], [1, 2], [2, 1]])}${C(1, 3)}=${C("1+3", "1+6", "2+3")}=${C(4, 7, 5)}\ \checkmark\]`],
    ans: S`\(\vec x=(1,3)\)` },
  { title: "Not in the range", q: S`Is \(\vec b=(2,1,1)\) in the range of \(T(\vec x)=${M([[1, 2], [0, 1], [1, 3]])}\vec x\)?`,
    fig: P(matPic([[1, 2, 2], [0, 1, 1], [0, 0, -2]], { label: "reduced [A | b]", rows: [2] }), 2.2),
    steps: [...steps([[1, 2, 2], [0, 1, 1], [1, 3, 1]], [
      [S`Clear column 1.`, ["R3-R1"]],
      [S`Clear column 2 below its pivot.`, ["R3-R2"]],
    ], { intro: S`Row reduce \([A\mid\vec b]\)` }).steps,
      S`The last row reads \(0x_1+0x_2=-2\): impossible, so no input has image \(\vec b\).`],
    ans: S`no` },
  { title: "Infinitely many inputs", q: S`For \(A=${M([[1, -1, 2], [2, -2, 5]])}\), find all \(\vec x\) with \(T(\vec x)=(1,3)\).`,
    fig: P(rowPic([[[[1, -1, 0, -1], [0, 0, 1, 1]], { label: "RREF of [A | b]" }]]), 3),
    steps: [...steps([[1, -1, 2, 1], [2, -2, 5, 3]], [
      [S`Clear column 1.`, ["R2-2R1"]],
      [S`Clear column 3 above its pivot.`, ["R1-2R2"]],
    ], { intro: S`Row reduce \([A\mid\vec b]\)` }).steps,
      S`\(x_2=t\) free, \(x_1=-1+t\), \(x_3=1\): \(\vec x=${C(-1, 0, 1)}+t${C(1, 1, 0)}\).`,
      S`Check: \[${M([[1, -1, 2], [2, -2, 5]])}${C(-1, 0, 1)}=${C("-1-0+2", "-2-0+5")}=${C(1, 3)},\qquad ${M([[1, -1, 2], [2, -2, 5]])}${C(1, 1, 0)}=${C(0, 0)}.\]`],
    ans: S`\((-1,0,1)+t(1,1,0)\)` },
  { title: "The image of a triangle", q: S`Find the image of the triangle with corners \((0,0),(2,0),(0,1)\) under \(A=${M([[1, 2], [-1, 1]])}\).`,
    fig: shapeMap([[1, 2], [-1, 1]], [[0, 0], [2, 0], [0, 1]], { w: 4 }),
    steps: [S`\[A${M([[0, 2, 0], [0, 0, 1]])}=${M([[1, 2], [-1, 1]])}${M([[0, 2, 0], [0, 0, 1]])}=${M([[0, "2+0", "0+2"], [0, "-2+0", "0+1"]])}=${M([[0, 2, 2], [0, -2, 1]])}.\]`, S`The image is the triangle \((0,0),(2,-2),(2,1)\).`],
    ans: S`\((0,0),(2,-2),(2,1)\)` },
  { title: "A parameter and the range", q: S`For which \(h\) is \((1,h,3)\) in the range of \(T(\vec x)=${M([[1, 0], [2, 1], [1, 1]])}\vec x\)?`,
    fig: P(matPic([[1, 0, 1], [0, 1, "h − 2"], [0, 0, "4 − h"]], { label: "after reduction" }), 2.4),
    steps: [S`\[${am([[1, 0, 1], [2, 1, "h"], [1, 1, 3]])}\xrightarrow{R_2\to R_2-2R_1,\ R_3\to R_3-R_1}${am([[1, 0, 1], [0, 1, "h-2"], [0, 1, 2]])}\xrightarrow{R_3\to R_3-R_2}${am([[1, 0, 1], [0, 1, "h-2"], [0, 0, "4-h"]])}.\]`, S`Consistent \(\iff 4-h=0\iff h=4\). Then \(\vec x=(1,2)\): \(${M([[1, 0], [2, 1], [1, 1]])}${C(1, 2)}=${C(1, "2+2", "1+2")}\) ✓.`],
    ans: S`\(h=4\)` },
  { title: "A line that collapses", q: S`Find the image of the line \(\vec x=(1,1)+t(2,-1)\) under \(A=${M([[1, 2], [2, 4]])}\).`,
    fig: P(rowPic([[[[1, 2], [2, 4]], { label: "A" }], [[[2], [-1]], { label: "d" }], "=", [[[0], [0]], { label: "0" }]]), 3),
    steps: [S`\[A\vec p=${M([[1, 2], [2, 4]])}${C(1, 1)}=${C(3, 6)},\qquad A\vec d=${M([[1, 2], [2, 4]])}${C(2, -1)}=${C("2-2", "4-4")}=${C(0, 0)}.\]`, S`So \(A(\vec p+t\vec d)=A\vec p+t\vec 0=(3,6)\) for every \(t\): the whole line goes to one point.`],
    ans: S`the single point \((3,6)\)` },
  { title: "Range in ℝ³ as a plane", q: S`Show that the range of \(T(\vec x)=${M([[1, 1], [1, -1], [2, 0]])}\vec x\) is the plane \(x_3=x_1+x_2\).`,
    steps: [S`The range is the span of the columns \((1,1,2)\) and \((1,-1,0)\), independent, so a plane through 0.`, S`Both columns satisfy \(x_3=x_1+x_2\): \(2=1+1\) and \(0=1-1\). Every combination does too: \[T${C("s", "t")}=${C("s+t", "s-t", "2s")}\text{ and }(s+t)+(s-t)=2s.\]`],
    ans: S`range \(=\{x_3=x_1+x_2\}\)` },
];

const PROBLEMS = [
  { level: 1, q: S`\(A\) is \(5\times2\). Give the domain and codomain of \(T(\vec x)=A\vec x\).`, ans: S`\(\mathbb R^2\to\mathbb R^5\)` },
  { level: 1, q: S`Find \(T(3,-1)\) for \(A=${M([[2, 1], [0, 4], [-1, 1]])}\).`, ans: S`\((5,-4,-4)\)`, fig: P(rowPic([[[[2, 1], [0, 4], [-1, 1]], { label: "A" }], [[[3], [-1]], { label: "x" }]]), 2.6) },
  { level: 1, q: S`Find the image of the unit square under \(${M([[3, 0], [1, 2]])}\).`, ans: S`corners \((0,0),(3,1),(0,2),(3,3)\)`, fig: sqMap([[3, 0], [1, 2]], { w: 3.6 }) },
  { level: 2, q: S`Find all \(\vec x\) with \(${M([[1, 3], [2, 7]])}\vec x=(5,12)\).`, ans: S`\((-1,2)\)` },
  { level: 2, q: S`Is \((3,1,4)\) in the range of \(${M([[1, 1], [0, 1], [1, 2]])}\vec x\)?`, ans: S`yes, \(\vec x=(2,1)\)` },
  { level: 2, q: S`Is \((1,0,0)\) in the range of \(${M([[1, 2], [1, 2], [0, 1]])}\vec x\)?`, ans: S`no` },
  { level: 2, q: S`Find all \(\vec x\in\mathbb R^3\) with \(${M([[1, 2, 0], [0, 0, 1]])}\vec x=(4,-1)\).`, ans: S`\((4,0,-1)+t(-2,1,0)\)`, fig: P(matPic([[1, 2, 0, 4], [0, 0, 1, -1]], { label: "[A | b]" }), 2.6) },
  { level: 2, q: S`Find the image of the line \(t(1,2)\) under \(${M([[2, -1], [1, 1]])}\).`, ans: S`the line \(t(0,3)\), i.e. the \(x_2\)-axis`, fig: lineMap([[2, -1], [1, 1]], [0, 0], [1, 2], { w: 3.6 }) },
  { level: 3, space: 5, q: S`For which \(h\) is \((2,h)\) in the range of \(${M([[1, 3], [2, 6]])}\vec x\)? Describe the range.`, ans: S`\(h=4\); the range is the line \(x_2=2x_1\)` },
  { level: 3, space: 5, q: S`Prove that the range of \(T(\vec x)=A\vec x\) contains \(\vec 0\) and is closed under addition.`, ans: S`\(A\vec 0=\vec 0\); \(A\vec u+A\vec v=A(\vec u+\vec v)\)` },
  { level: 3, space: 5, q: S`Show that \(A=${M([[1, 2], [3, 4]])}\) maps the square with corners \((0,0),(1,0),(1,1),(0,1)\) onto a parallelogram of area 2.`, ans: S`corners \((0,0),(1,3),(3,7),(2,4)\); area \(|1(4)-2(3)|=2\)` },
  { level: 3, space: 5, q: S`\(A\) is \(3\times3\) and \(A\vec x=\vec b\) has two different solutions. Show it has infinitely many.`, ans: S`\(\vec u-\vec v\ne\vec 0\) solves \(A\vec x=\vec 0\); \(\vec u+t(\vec u-\vec v)\) all work` },
  { level: 3, space: 5, q: S`Find a \(2\times2\) matrix whose range is the line \(x_2=3x_1\).`, ans: S`e.g. \(${M([[1, 0], [3, 0]])}\)` },
];

export const WS = {
  code: "7.1",
  title: "Matrix Transformations",
  bigideas: S`An \(m\times n\) matrix \(A\) defines the transformation \(T(\vec x)=A\vec x\) from \(\mathbb R^n\) to \(\mathbb R^m\). Its range is \(\operatorname{Col}A\); finding inputs with a given image is solving \(A\vec x=\vec b\). In the plane, \(T\) sends the unit square to the parallelogram on the columns and lines to lines.`,
  goals: ["Describe \\(T(\\vec x)=A\\vec x\\), its domain and codomain.", "Compute images, several at once.", "Find all inputs with a given image.", "Decide whether a vector is in the range.", "Transform squares, triangles and lines."],
  curriculum: "Linear transformations — matrix transformations",
  vocab: [["Domain / codomain", "\\(\\mathbb R^n\\) / \\(\\mathbb R^m\\)"], ["Image", "\\(T(\\vec x)\\)"], ["Range", "all images \\(=\\operatorname{Col}A\\)"], ["\\(AP\\)", "images of the columns of \\(P\\)"], ["Line image", "\\(A\\vec p+tA\\vec d\\)"]],
  hook: S`A photo editor stretches, slants and rotates an image with the same rule applied to every pixel. When is that rule a matrix, and what can it do to shapes?`,
  concepts: NOTES,
  summary: [
    S`\(T(\vec x)=A\vec x\): \(\mathbb R^n\to\mathbb R^m\) for \(A\) \(m\times n\).`,
    S`Range \(=\operatorname{Col}A\).`,
    S`\(T(\vec x)=\vec b\iff A\vec x=\vec b\): none, one or infinitely many inputs.`,
    S`\(AP\) transforms every column of \(P\).`,
    S`\(A(\vec p+t\vec d)=A\vec p+tA\vec d\).`,
  ],
  tips: ["Columns = input size, rows = output size.", "Row reduce [A | b] to test the range.", "Transform corners together as AP.", "A zero row with nonzero right side means \"not in the range\".", "Check an input by multiplying back."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
