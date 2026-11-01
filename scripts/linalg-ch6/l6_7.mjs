// LINALG1 6.7 — Cramer's Rule, the Adjugate and Volume: the cofactor matrix and adj A = Cᵀ, A·adj A = (det A)I and
// A⁻¹ = adj A / det A, Cramer's rule xᵢ = det Aᵢ(b) / det A, and |det| as area/volume and as an area scale factor.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, q, num, choice, hard, definition, theorem, am, cv, sfig } from "./lib.mjs";
import { rowPic } from "./ws/fig3.mjs";
import { vecs2, vecs3 } from "./ws/fig5.mjs";

export const TITLE = "6.7 Cramer's Rule, the Adjugate and Volume";
export const ID = "11a10001-0001-4001-8001-000000000607";

const S = String.raw;
const M = (m) => am(m, false);
const D = (m) => S`\left|\begin{array}{${"c".repeat(m[0].length)}}${m.map((r) => r.join(" & ")).join(" \\\\ ")}\end{array}\right|`;
const cramerFig = sfig(rowPic([[[[3, 2], [1, -4]], { label: "A" }], " ", [[[7, 2], [0, -4]], { col: 0, colFill: "#dcfce7", label: "A₁(b)" }], " ", [[[3, 7], [1, 0]], { col: 1, colFill: "#dcfce7", label: "A₂(b)" }]]), "Cramer's rule: replace column i of A by b");
const volFig = sfig(vecs3([[[1, 0, 2], "a₁"], [[2, 1, 0], "a₂"], [[0, 3, 1], "a₃"]], { raw: true }), "|det[a₁ a₂ a₃]| is the volume of the box (parallelepiped) on the three vectors");
const scaleFig = sfig(vecs2([[[1, 0], "e₁", "blue"], [[0, 1], "e₂", "red"], [[2, 1], "Ae₁", "blue", null, true], [[1, 3], "Ae₂", "red", null, true]], { xmin: -1, xmax: 4, ymin: -1, ymax: 5 },
  { segs: [{ pts: [[2, 1], [3, 4], [1, 3]], color: "#94a3b8", w: 1.4, dash: true }], raw: true }), "A maps the unit square (area 1) to a parallelogram of area |det A| = 5");

export const blocks = () => [
  intro({
    icon: "📐",
    title: "Cramer's Rule, the Adjugate and Volume",
    overview: S`Cofactors give explicit formulas. Collect all of them in a matrix and transpose it to get the <strong>adjugate</strong>; then \(A\,\operatorname{adj}A=(\det A)I\), so \(A^{-1}=\frac1{\det A}\operatorname{adj}A\) — the \(2\times2\) formula is the smallest case. The same identity gives <strong>Cramer's rule</strong>: each unknown of \(A\vec x=\vec b\) is a ratio of two determinants. These formulas are rarely the fastest way to compute, but they show exactly how the solution depends on the data. Finally, \(|\det A|\) is a volume: the area or volume spanned by the columns, and the factor by which \(A\) scales areas and volumes.`,
    goals: [
      "build the cofactor matrix and the adjugate \\(\\operatorname{adj}A=C^T\\);",
      "use \\(A^{-1}=\\frac1{\\det A}\\operatorname{adj}A\\) and check \\(A\\operatorname{adj}A=(\\det A)I\\);",
      "solve systems by Cramer's rule;",
      "compute areas of parallelograms and volumes of parallelepipeds with determinants;",
      "use \\(|\\det A|\\) as the factor by which \\(A\\) scales area or volume.",
    ],
    outcomes: "inverses and determinants: adjugate, Cramer's rule and volume",
    prior: [
      [S`What is the cofactor \(C_{ij}\)?`, S`\((-1)^{i+j}M_{ij}\).`],
      [S`\(\det${M([[3, 2], [1, -4]])}\)?`, S`\(-12-2=-14\).`],
      [S`Area of the parallelogram on the columns of \(A\) (2 × 2)?`, S`\(|\det A|\).`],
    ],
    words: [
      ["Cofactor matrix \\(C\\)", "entry \\((i,j)\\) is \\(C_{ij}\\)", "same size as \\(A\\)"],
      ["Adjugate", "\\(\\operatorname{adj}A=C^T\\)", "transpose of the cofactor matrix"],
      ["\\(A_i(\\vec b)\\)", "\\(A\\) with column \\(i\\) replaced by \\(\\vec b\\)", "used in Cramer's rule"],
      ["Cramer's rule", "\\(x_i=\\det A_i(\\vec b)/\\det A\\)", "needs \\(\\det A\\ne0\\)"],
      ["Volume", "\\(|\\det[\\,\\vec a_1\\ \\vec a_2\\ \\vec a_3\\,]|\\)", "of the parallelepiped"],
    ],
  }),

  section("📌 The adjugate formula", S`
  ${definition("adjugate", S`The <strong>cofactor matrix</strong> of \(A\) is \(C=[C_{ij}]\). The <strong>adjugate</strong> is its transpose: \(\operatorname{adj}A=C^T\), so entry \((i,j)\) of \(\operatorname{adj}A\) is \(C_{ji}\).`)}
  ${theorem("inverse formula", S`\(A\,\operatorname{adj}A=(\operatorname{adj}A)\,A=(\det A)\,I\). Hence, if \(\det A\ne0\), \[A^{-1}=\frac1{\det A}\operatorname{adj}A.\]`, S`Entry \((i,i)\) of \(A\operatorname{adj}A\) is \(\sum_k a_{ik}C_{ik}\), the expansion of \(\det A\) along row \(i\). Entry \((i,j)\) with \(i\ne j\) is \(\sum_k a_{ik}C_{jk}\): the expansion along row \(j\) of the matrix obtained by copying row \(i\) into row \(j\) — a matrix with two equal rows, so it is 0.`)}
  ${keyIdea(S`For \(2\times2\): \(C=${M([["d", "-c"], ["-b", "a"]])}\), so \(\operatorname{adj}A=${M([["d", "-b"], ["-c", "a"]])}\) — the formula from 6.1.`)}`),

  section("📌 Cramer's rule", S`
  ${theorem("Cramer's rule", S`If \(\det A\ne0\), the unique solution of \(A\vec x=\vec b\) is \[x_i=\frac{\det A_i(\vec b)}{\det A},\qquad i=1,\dots,n,\] where \(A_i(\vec b)\) is \(A\) with column \(i\) replaced by \(\vec b\).`, S`Let \(I_i(\vec x)\) be the identity with column \(i\) replaced by \(\vec x\). Then \(AI_i(\vec x)=[\,A\vec e_1\ \cdots\ A\vec x\ \cdots\ A\vec e_n\,]=A_i(\vec b)\). Taking determinants, \(\det A\cdot\det I_i(\vec x)=\det A_i(\vec b)\), and expanding \(\det I_i(\vec x)\) along row \(i\) gives \(x_i\).`)}
  ${cramerFig}`),

  section("📌 Area and volume", S`
  ${theorem("volume", S`For \(n=2\), \(|\det[\,\vec a_1\ \vec a_2\,]|\) is the area of the parallelogram on \(\vec a_1,\vec a_2\); for \(n=3\), \(|\det[\,\vec a_1\ \vec a_2\ \vec a_3\,]|\) is the volume of the parallelepiped on them. A region of area (volume) \(V\) is mapped by \(A\) to a region of area (volume) \(|\det A|\,V\).`, S`Replacements (shears) keep the base and the height, hence the area or volume; scaling an edge scales it; a triangular form gives a box whose volume is the product of the diagonal. The image of the unit square or cube is the parallelogram or parallelepiped on the columns, and every region is filled by small squares or cubes.`)}
  ${volFig}
  ${scaleFig}`),

  section("📌 Explore", S`<p>Set a \(2\times2\) system. The explorer shows \(A\), \(A_1(\vec b)\) and \(A_2(\vec b)\), their determinants, and the Cramer quotients — and the lines whose crossing point they give.</p>`),
  widget("laCramer", { init: { a: 3, b: 2, c: 1, d: -4, e: 7, f: 0 } }),

  section("📌 Common mistakes", watchOut([
    "adj A is the TRANSPOSE of the cofactor matrix.",
    "Cramer's rule replaces a COLUMN of A by b, not a row.",
    "Cramer's rule needs det A ≠ 0; otherwise use row reduction.",
    "Volume is |det| — take the absolute value.",
    "For large systems, row reduction is far faster than Cramer's rule.",
  ])),

  examples([
    ["The adjugate of a 3 × 3 matrix", S`Find \(\operatorname{adj}A\) and \(A^{-1}\) for \(A=${M([[2, 0, 1], [1, 1, 0], [0, 1, 3]])}\).`,
      [S`\(\det A\) along row 1: \(2${D([[1, 0], [1, 3]])}-0+1${D([[1, 1], [0, 1]])}=2(3)+1(1)=7\).`,
        S`Cofactors \(C_{ij}=(-1)^{i+j}\det A_{ij}\) (delete row \(i\) and column \(j\); signs \(+-+/-+-/+-+\)), placed in the cofactor matrix: \[C=\begin{bmatrix}\rule[-1.3em]{0pt}{3.2em}+${D([[1, 0], [1, 3]])} & -${D([[1, 0], [0, 3]])} & +${D([[1, 1], [0, 1]])}\\ \rule[-1.3em]{0pt}{3.2em}-${D([[0, 1], [1, 3]])} & +${D([[2, 1], [0, 3]])} & -${D([[2, 0], [0, 1]])}\\ \rule[-1.3em]{0pt}{3.2em}+${D([[0, 1], [1, 0]])} & -${D([[2, 1], [1, 0]])} & +${D([[2, 0], [1, 1]])}\end{bmatrix}=${M([[3, -3, 1], [1, 6, -2], [-1, 1, 2]])}.\]`,
        S`\[\operatorname{adj}A=C^T=${M([[3, 1, -1], [-3, 6, 1], [1, -2, 2]])},\qquad A^{-1}=\frac17${M([[3, 1, -1], [-3, 6, 1], [1, -2, 2]])}.\]`,
        S`Check \(A\operatorname{adj}A=(\det A)I\): \[${M([[2, 0, 1], [1, 1, 0], [0, 1, 3]])}${M([[3, 1, -1], [-3, 6, 1], [1, -2, 2]])}=${M([["6+0+1", "2+0-2", "-2+0+2"], ["3-3+0", "1+6+0", "-1+1+0"], ["0-3+3", "0+6-6", "0+1+6"]])}=${M([[7, 0, 0], [0, 7, 0], [0, 0, 7]])}\ \checkmark\]`],
      S`\(A^{-1}=\tfrac17${M([[3, 1, -1], [-3, 6, 1], [1, -2, 2]])}\)`],
    ["Cramer's rule for two unknowns", S`Solve \(3x_1+2x_2=7,\ x_1-4x_2=0\) by Cramer's rule.`,
      [S`\(A=${M([[3, 2], [1, -4]])}\), \(\vec b=${cv(7, 0)}\). \(\det A=3(-4)-2(1)=-14\ne0\).`,
        S`\[x_1=\frac{${D([[7, 2], [0, -4]])}}{-14}=\frac{-28-0}{-14}=2,\qquad x_2=\frac{${D([[3, 7], [1, 0]])}}{-14}=\frac{0-7}{-14}=\frac12.\]`,
        S`Check: \[${M([[3, 2], [1, -4]])}${cv(2, "\\tfrac12")}=${cv("6+1", "2-2")}=${cv(7, 0)}\ \checkmark\]`],
      S`\(x_1=2,\ x_2=\tfrac12\)`, cramerFig],
    ["Cramer's rule for three unknowns", S`Solve \(A\vec x=\vec b\) with \(A=${M([[1, 1, 1], [1, -1, 2], [2, 1, -1]])}\), \(\vec b=(6,5,1)\).`,
      [S`\(\det A=1${D([[-1, 2], [1, -1]])}-1${D([[1, 2], [2, -1]])}+1${D([[1, -1], [2, 1]])}=1(1-2)-1(-1-4)+1(1+2)=-1+5+3=7\).`,
        S`\(\det A_1(\vec b)=${D([[6, 1, 1], [5, -1, 2], [1, 1, -1]])}=6(1-2)-1(-5-2)+1(5+1)=-6+7+6=7\).`,
        S`\(\det A_2(\vec b)=${D([[1, 6, 1], [1, 5, 2], [2, 1, -1]])}=1(-5-2)-6(-1-4)+1(1-10)=-7+30-9=14\).`,
        S`\(\det A_3(\vec b)=${D([[1, 1, 6], [1, -1, 5], [2, 1, 1]])}=1(-1-5)-1(1-10)+6(1+2)=-6+9+18=21\).`,
        S`\(x_1=\tfrac77=1,\ x_2=\tfrac{14}7=2,\ x_3=\tfrac{21}7=3\). Check: \[${M([[1, 1, 1], [1, -1, 2], [2, 1, -1]])}${cv(1, 2, 3)}=${cv("1+2+3", "1-2+6", "2+2-3")}=${cv(6, 5, 1)}\ \checkmark\]`],
      S`\(\vec x=(1,2,3)\)`],
    ["The volume of a parallelepiped", S`Find the volume of the parallelepiped on \(\vec a_1=(1,0,2)\), \(\vec a_2=(2,1,0)\), \(\vec a_3=(0,3,1)\).`,
      [S`Put the vectors in the columns: \(${M([[1, 2, 0], [0, 1, 3], [2, 0, 1]])}\).`,
        S`Expand along row 1: \[${D([[1, 2, 0], [0, 1, 3], [2, 0, 1]])}=1${D([[1, 3], [0, 1]])}-2${D([[0, 3], [2, 1]])}+0=1(1-0)-2(0-6)=1+12=13.\]`,
        S`Volume \(=|13|=13\). (Nonzero, so the three vectors are independent and not coplanar.)`],
      S`volume \(13\)`, volFig],
    ["How a matrix scales area", S`\(A=${M([[2, 1], [1, 3]])}\). Find the area of the image of the unit square and of a triangle of area 3.`,
      [S`\(\det A=2(3)-1(1)=5\).`, S`The unit square (area 1) maps to the parallelogram on the columns \((2,1)\) and \((1,3)\): area \(|5|\cdot1=5\).`, S`Any region is scaled by the same factor: the triangle's image has area \(5\cdot3=15\).`],
      S`5 and 15`, scaleFig],
  ]),

  practice([
    q("adjugate", S`\(\operatorname{adj}${M([[4, 1], [3, 2]])}\) has \((1,2)\) entry:`, num(-1),
      "adj [a b; c d] = [d −b; −c a].", [S`\(-b=-1\).`], S`\(-1\)`),
    q("Cramer", S`Solve \(x_1+x_2=5,\ 2x_1-x_2=1\) by Cramer's rule. \(x_1=\)?`, num(2),
      "det A = −3; det A₁ = 5(−1) − 1(1).", [S`\(x_1=\tfrac{-6}{-3}\).`], S`\(2\)`),
    q("volume", S`Volume of the box on \((2,0,0)\), \((0,3,0)\), \((1,1,4)\)?`, num(24),
      "Triangular-ish: expand.", [S`\(\det=2\cdot3\cdot4\).`], S`\(24\)`),
    q("scale", S`\(\det A=-4\). A region of area 2 maps to a region of area:`, num(8),
      "|det A| × area.", [S`\(4\cdot2\).`], S`\(8\)`),
    q("A·adj A", S`\(A\) is \(3\times3\), \(\det A=5\). \(A\operatorname{adj}A=\)?`, choice([S`\(5I\)`, S`\(I\)`, S`\(\tfrac15I\)`, S`\(125I\)`], 0),
      "(det A)I.", [S`\(5I\).`], S`\(5I\)`),
  ]),

  ...hard([
    ["Cramer's rule with a parameter", S`For which \(k\) does \(kx_1+x_2=1,\ x_1+kx_2=2\) have a unique solution? Find \(x_1\) in terms of \(k\).`,
      [S`\(\det A=${D([["k", 1], [1, "k"]])}=k^2-1\). Unique solution \(\iff k\ne\pm1\).`,
        S`\[x_1=\frac{${D([[1, 1], [2, "k"]])}}{k^2-1}=\frac{k-2}{k^2-1},\qquad x_2=\frac{${D([["k", 1], [1, 2]])}}{k^2-1}=\frac{2k-1}{k^2-1}.\]`,
        S`Check \(k=2\): \(x_1=0\), \(x_2=1\): \(2(0)+1=1\) ✓ and \(0+2(1)=2\) ✓.`],
      S`unique for \(k\ne\pm1\); \(x_1=\dfrac{k-2}{k^2-1}\)`],
    ["The determinant of the adjugate", S`Show that for an invertible \(n\times n\) matrix \(\det(\operatorname{adj}A)=(\det A)^{n-1}\), and check it for \(A=${M([[2, 0, 1], [1, 1, 0], [0, 1, 3]])}\).`,
      [S`Take determinants of \(A\operatorname{adj}A=(\det A)I\): \(\det A\cdot\det(\operatorname{adj}A)=(\det A)^n\). Divide by \(\det A\ne0\).`,
        S`For the example \(\det A=7\), so \(\det(\operatorname{adj}A)\) should be \(7^2=49\). Directly: \[${D([[3, 1, -1], [-3, 6, 1], [1, -2, 2]])}=3(12+2)-1(-6-1)+(-1)(6-6)=42+7+0=49\ \checkmark\]`],
      S`\(\det(\operatorname{adj}A)=(\det A)^{n-1}\); here 49`],
  ], [
    q("hard", S`Area of the triangle with vertices \((0,0)\), \((3,1)\), \((1,4)\)?`, num(5.5),
      "½ |det|.", [S`\(\tfrac12|12-1|\).`], S`\(5.5\)`),
    q("hard", S`By Cramer's rule, \(x_2\) for \(${M([[2, 1, 0], [0, 1, 1], [1, 0, 1]])}\vec x=(3,2,2)\) is:`, num(1),
      "det A = 3; det A₂(b) = 3.", [S`\(\det A=2(1)-1(-1)+0=3\); \(\det A_2=2(2-2)-3(0-1)+0=3\).`], S`\(1\)`),
    q("hard", S`\(A\) is \(3\times3\) with \(\det A=2\). \(\det(\operatorname{adj}A)=\)?`, num(4),
      "(det A)^{n−1}.", [S`\(2^2\).`], S`\(4\)`),
  ]),

  wrapUp({
    qas: [
      ["What is the adjugate?", "The transpose of the cofactor matrix."],
      ["How does it give A⁻¹?", "A adj A = (det A) I, so A⁻¹ = adj A / det A."],
      ["What is Cramer's rule?", "xᵢ = det Aᵢ(b) / det A, with column i replaced by b."],
      ["What does |det A| measure?", "The area (2D) or volume (3D) spanned by the columns."],
      ["How does A change areas?", "It multiplies every area or volume by |det A|."],
    ],
    summary: [
      "adj A = Cᵀ; A adj A = (det A) I.",
      "A⁻¹ = adj A / det A.",
      "Cramer: xᵢ = det Aᵢ(b) / det A.",
      "|det| = area / volume of the columns.",
      "A scales areas and volumes by |det A|.",
    ],
    next: "Chapter 7 studies matrices as transformations of space — where determinants measure how shapes are stretched.",
  }),
];
