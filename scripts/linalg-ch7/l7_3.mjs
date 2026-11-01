// LINALG1 7.3 — The Standard Matrix: every linear T: ℝⁿ → ℝᵐ is T(x) = Ax with A = [T(e₁) … T(eₙ)]; reading A off
// a formula, from a geometric description, for a map into ℝ, and from the images of a non-standard basis via
// A[u₁ u₂] = [w₁ w₂], A = W U⁻¹ — with every column and product written out.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, q, num, choice, hard, definition, theorem, am, cv, sfig } from "./lib.mjs";
import { sqMap } from "./ws/fig7.mjs";
import { rowPic } from "./ws/fig3.mjs";

export const TITLE = "7.3 The Standard Matrix";
export const ID = "11a10001-0001-4001-8001-000000000703";

const S = String.raw;
const M = (m) => am(m, false);
const colsFig = sfig(rowPic([[[[1, -2, 1], [0, 3, -1]], { label: "A = [T(e₁) T(e₂) T(e₃)]", cols: [0, 1, 2] }]]), "column j of the standard matrix is the image of eⱼ");
const rotFig = sfig(sqMap([[0, -1], [1, 0]], { raw: true, names: ["T(e₁)", "T(e₂)"] }), "rotation by 90°: e₁ → (0, 1), e₂ → (−1, 0)");
const ex4Fig = sfig(sqMap([[2, 1], [-1, 1]], { raw: true, names: ["Ae₁", "Ae₂"] }), "the map found in Example 4 acting on the unit square");

export const blocks = () => [
  intro({
    icon: "🧮",
    title: "The Standard Matrix",
    overview: S`In 7.2 we saw that a linear map is decided by the images of \(\vec e_1,\dots,\vec e_n\). Put those images side by side as columns and you get a matrix \(A\) with \(T(\vec x)=A\vec x\) for every \(\vec x\). So linear transformations of \(\mathbb R^n\) and matrices are the same thing seen two ways: every matrix gives a linear map, and every linear map has exactly one matrix — its <strong>standard matrix</strong>. Finding it is a matter of asking one question per column: where does \(\vec e_j\) go?`,
    goals: [
      "state and use \\(A=[\\,T(\\vec e_1)\\ \\cdots\\ T(\\vec e_n)\\,]\\);",
      "read the standard matrix off a formula for \\(T\\);",
      "find the standard matrix of a map described geometrically;",
      "find \\(A\\) from images of a non-standard basis using \\(AU=W\\);",
      "use the size of \\(A\\) (\\(m\\times n\\)) to describe \\(T:\\mathbb R^n\\to\\mathbb R^m\\).",
    ],
    outcomes: "linear transformations: the standard matrix",
    prior: [
      [S`For linear \(T\), \(T(3\vec e_1-\vec e_2)=\)?`, S`\(3T(\vec e_1)-T(\vec e_2)\).`],
      [S`Invert \(${M([[1, 1], [1, 2]])}\).`, S`\(${M([[2, -1], [-1, 1]])}\) (here \(ad-bc=1\)).`],
      [S`\(A\vec e_2\) is which part of \(A\)?`, S`The second column.`],
    ],
    words: [
      ["Standard matrix", "the \\(A\\) with \\(T(\\vec x)=A\\vec x\\)", "\\(A=[T(\\vec e_1)\\ \\cdots\\ T(\\vec e_n)]\\)"],
      ["\\(\\vec e_j\\)", "the \\(j\\)th standard basis vector", "a 1 in entry \\(j\\)"],
      ["Size", "\\(m\\times n\\) for \\(T:\\mathbb R^n\\to\\mathbb R^m\\)", "one column per input coordinate"],
      ["Linear functional", "a linear map \\(\\mathbb R^n\\to\\mathbb R\\)", "a \\(1\\times n\\) matrix"],
      ["\\(AU=W\\)", "images of a basis \\(\\vec u_j\\) give \\(A=WU^{-1}\\)", "when \\(U\\) is invertible"],
    ],
  }),

  section("📌 The theorem", S`
  ${theorem("standard matrix", S`If \(T:\mathbb R^n\to\mathbb R^m\) is linear, there is exactly one \(m\times n\) matrix \(A\) with \(T(\vec x)=A\vec x\) for all \(\vec x\), namely \[A=\big[\,T(\vec e_1)\ \ T(\vec e_2)\ \ \cdots\ \ T(\vec e_n)\,\big].\]`, S`Every \(\vec x=x_1\vec e_1+\dots+x_n\vec e_n\), so by superposition \(T(\vec x)=x_1T(\vec e_1)+\dots+x_nT(\vec e_n)=A\vec x\) — a combination of the columns of \(A\) with weights \(x_j\). If also \(T(\vec x)=B\vec x\), then column \(j\) of \(B\) is \(B\vec e_j=T(\vec e_j)\), column \(j\) of \(A\); so \(B=A\).`)}
  ${colsFig}
  ${keyIdea(S`One question per column: <em>where does \(\vec e_j\) go?</em> Write the answer as column \(j\).`)}`),

  section("📌 Images of another basis", S`<p>Sometimes \(T\) is given on vectors \(\vec u_1,\dots,\vec u_n\) other than the \(\vec e_j\). If \(T(\vec u_j)=\vec w_j\), then column by column \[A\big[\,\vec u_1\ \cdots\ \vec u_n\,\big]=\big[\,\vec w_1\ \cdots\ \vec w_n\,\big],\quad\text{i.e.}\quad AU=W.\] When the \(\vec u_j\) form a basis, \(U\) is invertible and \(A=WU^{-1}\).</p>
  ${rotFig}`),

  section("📌 Explore", S`<p>Set the images of \(\vec e_1\) and \(\vec e_2\) with the sliders — they are the columns \((a,c)\) and \((b,d)\) of \(A\). The whole picture (grid, unit square, \(\vec x\) and \(T(\vec x)\)) follows from those two arrows.</p>`),
  widget("laMap2", { init: { a: 0, b: -1, c: 1, d: 0, x: 2, y: 1 } }),

  section("📌 Common mistakes", watchOut([
    "T(eⱼ) is a COLUMN of A, not a row.",
    "T: ℝⁿ → ℝᵐ has an m × n matrix — n columns, one per eⱼ.",
    "From images of other vectors, solve AU = W; A = WU⁻¹ (not U⁻¹W).",
    "A formula with a constant term has no standard matrix — it is not linear.",
    "Check a standard matrix on one vector before using it.",
  ])),

  examples([
    ["Reading A off a formula", S`Find the standard matrix of \(T(x_1,x_2,x_3)=(x_1-2x_2+x_3,\ 3x_2-x_3)\).`,
      [S`\(T:\mathbb R^3\to\mathbb R^2\), so \(A\) is \(2\times3\). Images of the standard vectors: \[T(\vec e_1)=T${cv(1, 0, 0)}=${cv(1, 0)},\quad T(\vec e_2)=T${cv(0, 1, 0)}=${cv(-2, 3)},\quad T(\vec e_3)=T${cv(0, 0, 1)}=${cv(1, -1)}.\]`,
        S`\[A=\big[\,T(\vec e_1)\ T(\vec e_2)\ T(\vec e_3)\,\big]=${M([[1, -2, 1], [0, 3, -1]])}.\]`,
        S`Check on \(\vec x=(1,1,1)\): \(T(1,1,1)=(1-2+1,\ 3-1)=(0,2)\) and \[${M([[1, -2, 1], [0, 3, -1]])}${cv(1, 1, 1)}=${cv("1-2+1", "0+3-1")}=${cv(0, 2)}\ \checkmark\]`],
      S`\(A=${M([[1, -2, 1], [0, 3, -1]])}\)`, colsFig],
    ["Rotation by 90°", S`Find the standard matrix of the rotation \(T\) of \(\mathbb R^2\) by \(90^\circ\) counterclockwise, and rotate \((3,1)\).`,
      [S`Rotating \(\vec e_1=(1,0)\) by \(90^\circ\) gives \((0,1)\); rotating \(\vec e_2=(0,1)\) gives \((-1,0)\).`,
        S`\[A=\big[\,T(\vec e_1)\ T(\vec e_2)\,\big]=${M([[0, -1], [1, 0]])}.\]`,
        S`\[T${cv(3, 1)}=${M([[0, -1], [1, 0]])}${cv(3, 1)}=${cv("0(3)-1(1)", "1(3)+0(1)")}=${cv(-1, 3)}.\]`,
        S`Check perpendicularity: \(${M([[3, 1]])}${cv(-1, 3)}=-3+3=0\) ✓.`],
      S`\(A=${M([[0, -1], [1, 0]])}\); \((3,1)\mapsto(-1,3)\)`, rotFig],
    ["A linear map into ℝ", S`\(T:\mathbb R^3\to\mathbb R\) is linear with \(T(\vec e_1)=2\), \(T(\vec e_2)=-1\), \(T(\vec e_3)=4\). Find its matrix and \(T(1,3,2)\).`,
      [S`The outputs are numbers, so \(A\) is \(1\times3\): \(A=${M([[2, -1, 4]])}\).`,
        S`\[T${cv(1, 3, 2)}=${M([[2, -1, 4]])}${cv(1, 3, 2)}=2(1)-1(3)+4(2)=7.\]`,
        S`This is a dot product: \(T(\vec x)=(2,-1,4)\cdot\vec x\).`],
      S`\(A=${M([[2, -1, 4]])}\), \(T(1,3,2)=7\)`],
    ["From images of a non-standard basis", S`\(T\) is linear with \(T(1,1)=(3,0)\) and \(T(1,2)=(4,1)\). Find its standard matrix.`,
      [S`Put the inputs and outputs as columns: \(U=${M([[1, 1], [1, 2]])}\), \(W=${M([[3, 4], [0, 1]])}\). Then \(AU=W\).`,
        S`\(\det U=2-1=1\ne0\), so \(U^{-1}=${M([[2, -1], [-1, 1]])}\). Check: \(${M([[1, 1], [1, 2]])}${M([[2, -1], [-1, 1]])}=${M([["2-1", "-1+1"], ["2-2", "-1+2"]])}=I\).`,
        S`\[A=WU^{-1}=${M([[3, 4], [0, 1]])}${M([[2, -1], [-1, 1]])}=${M([["6-4", "-3+4"], ["0-1", "0+1"]])}=${M([[2, 1], [-1, 1]])}.\]`,
        S`Check \(AU=W\): \[${M([[2, 1], [-1, 1]])}${M([[1, 1], [1, 2]])}=${M([["2+1", "2+2"], ["-1+1", "-1+2"]])}=${M([[3, 4], [0, 1]])}\ \checkmark\]`],
      S`\(A=${M([[2, 1], [-1, 1]])}\)`, ex4Fig],
    ["Projection onto the x₁x₂-plane", S`\(T:\mathbb R^3\to\mathbb R^3\) drops each point straight down onto the \(x_1x_2\)-plane. Find its standard matrix and \(T(2,-1,5)\).`,
      [S`\(T(x_1,x_2,x_3)=(x_1,x_2,0)\). So \(T(\vec e_1)=\vec e_1\), \(T(\vec e_2)=\vec e_2\), \(T(\vec e_3)=\vec 0\): \[A=${M([[1, 0, 0], [0, 1, 0], [0, 0, 0]])}.\]`,
        S`\[T${cv(2, -1, 5)}=${M([[1, 0, 0], [0, 1, 0], [0, 0, 0]])}${cv(2, -1, 5)}=${cv("2+0+0", "0-1+0", "0+0+0")}=${cv(2, -1, 0)}.\]`,
        S`Applying \(T\) twice changes nothing more: \(A^2=A\) (a projection).`],
      S`\(A=\operatorname{diag}(1,1,0)\); \(T(2,-1,5)=(2,-1,0)\)`],
  ]),

  practice([
    q("size", S`\(T:\mathbb R^4\to\mathbb R^2\) is linear. How many entries does its standard matrix have?`, num(8),
      "m × n = 2 × 4.", [S`\(2\times4=8\).`], S`\(8\)`),
    q("entry", S`\(T(x_1,x_2)=(5x_1-x_2,\ x_1+4x_2)\). Find the \((1,2)\) entry of its standard matrix.`, num(-1),
      "Column 2 is T(e₂).", [S`\(T(\vec e_2)=(-1,4)\), so \(A=${M([[5, -1], [1, 4]])}\).`], S`\(-1\)`),
    q("column", S`\(T(\vec e_1)=(2,7)\), \(T(\vec e_2)=(0,3)\). Find the second entry of \(T(1,1)\).`, num(10),
      "Sum of the columns.", [S`\(${M([[2, 0], [7, 3]])}${cv(1, 1)}=${cv(2, 10)}\).`], S`\(10\)`),
    q("reflection", S`The reflection of \(\mathbb R^2\) in the \(x_1\)-axis has standard matrix:`, choice([M([[1, 0], [0, -1]]), M([[-1, 0], [0, 1]]), M([[0, 1], [1, 0]]), M([[1, 0], [0, 1]])].map((x) => S`\(${x}\)`), 0),
      "e₁ stays, e₂ flips.", [S`\(T(\vec e_1)=(1,0)\), \(T(\vec e_2)=(0,-1)\).`], S`\(${M([[1, 0], [0, -1]])}\)`),
    q("functional", S`\(T(\vec x)=${M([[3, -1, 2]])}\vec x\). Find \(T(1,1,1)\).`, num(4),
      "3 − 1 + 2.", [S`\(3-1+2=4\).`], S`\(4\)`),
  ]),

  ...hard([
    ["A map on ℝ³ from three images", S`\(T\) is linear on \(\mathbb R^3\) with \(T(1,0,0)=(1,2)\), \(T(1,1,0)=(0,1)\), \(T(1,1,1)=(3,3)\). Find its standard matrix.`,
      [S`Here \(U=${M([[1, 1, 1], [0, 1, 1], [0, 0, 1]])}\), \(W=${M([[1, 0, 3], [2, 1, 3]])}\) and \(AU=W\).`,
        S`Invert \(U\) by row reducing \([\,U\mid I\,]\): \[${am([[1, 1, 1, 1, 0, 0], [0, 1, 1, 0, 1, 0], [0, 0, 1, 0, 0, 1]], 3)}\xrightarrow{R_2\to R_2-R_3,\ R_1\to R_1-R_3}${am([[1, 1, 0, 1, 0, -1], [0, 1, 0, 0, 1, -1], [0, 0, 1, 0, 0, 1]], 3)}\xrightarrow{R_1\to R_1-R_2}${am([[1, 0, 0, 1, -1, 0], [0, 1, 0, 0, 1, -1], [0, 0, 1, 0, 0, 1]], 3)}.\]`,
        S`\[A=WU^{-1}=${M([[1, 0, 3], [2, 1, 3]])}${M([[1, -1, 0], [0, 1, -1], [0, 0, 1]])}=${M([["1+0+0", "-1+0+0", "0+0+3"], ["2+0+0", "-2+1+0", "0-1+3"]])}=${M([[1, -1, 3], [2, -1, 2]])}.\]`,
        S`Check \(AU=W\): \[${M([[1, -1, 3], [2, -1, 2]])}${M([[1, 1, 1], [0, 1, 1], [0, 0, 1]])}=${M([["1", "1-1", "1-1+3"], ["2", "2-1", "2-1+2"]])}=${M([[1, 0, 3], [2, 1, 3]])}\ \checkmark\]`],
      S`\(A=${M([[1, -1, 3], [2, -1, 2]])}\)`],
    ["When the given vectors are dependent", S`Is there a linear \(T:\mathbb R^2\to\mathbb R^2\) with \(T(1,2)=(1,1)\), \(T(2,4)=(2,3)\)? With \(T(1,2)=(1,1)\), \(T(2,4)=(2,2)\)?`,
      [S`\((2,4)=2(1,2)\), so linearity forces \(T(2,4)=2T(1,2)=2${cv(1, 1)}=${cv(2, 2)}\).`,
        S`First case: \(${cv(2, 3)}\ne${cv(2, 2)}\), so no linear \(T\) exists.`,
        S`Second case: consistent, but not enough to decide \(T\). Every \(A\) with \(A${cv(1, 2)}=${cv(1, 1)}\) works, e.g. \[${M([[1, 0], [1, 0]])}${cv(1, 2)}=${cv(1, 1)},\qquad ${M([[-1, 1], [-1, 1]])}${cv(1, 2)}=${cv("-1+2", "-1+2")}=${cv(1, 1)}.\]`],
      S`first: no such \(T\); second: infinitely many`],
  ], [
    q("hard", S`\(T\) is linear with \(T(1,1)=(2,2)\) and \(T(1,-1)=(0,4)\). Find the \((2,2)\) entry of its standard matrix.`, num(-1),
      "T(e₂) = ½[T(1,1) − T(1,−1)].", [S`\(T(\vec e_2)=\tfrac12\big(${cv(2, 2)}-${cv(0, 4)}\big)=${cv(1, -1)}\).`], S`\(-1\)`),
    q("hard", S`\(T:\mathbb R^2\to\mathbb R^2\) reflects in the line \(x_2=x_1\). Find \(T(5,-2)\)'s first entry.`, num(-2),
      "Swap the coordinates.", [S`\(A=${M([[0, 1], [1, 0]])}\), \(A${cv(5, -2)}=${cv(-2, 5)}\).`], S`\(-2\)`),
    q("hard", S`\(A\) is the standard matrix of \(T\) and \(T(\vec e_1+\vec e_2)=(3,1)\), \(T(\vec e_1-\vec e_2)=(1,-1)\). Find \(a_{11}\).`, num(2),
      "Add and halve.", [S`\(T(\vec e_1)=\tfrac12\big(${cv(3, 1)}+${cv(1, -1)}\big)=${cv(2, 0)}\).`], S`\(2\)`),
  ]),

  wrapUp({
    qas: [
      ["What is the standard matrix?", "A = [T(e₁) … T(eₙ)], the unique matrix with T(x) = Ax."],
      ["How do I read it off a formula?", "Plug in each eⱼ; the result is column j."],
      ["What size is it?", "m × n for T: ℝⁿ → ℝᵐ."],
      ["What if T is given on another basis?", "Solve AU = W: A = WU⁻¹."],
      ["Are linear maps and matrices the same?", "Yes: each linear map has one standard matrix and each matrix gives a linear map."],
    ],
    summary: [
      "A = [T(e₁) … T(eₙ)].",
      "Linear maps ℝⁿ → ℝᵐ ↔ m × n matrices.",
      "Formulas: column j = T(eⱼ).",
      "Other basis: AU = W ⇒ A = WU⁻¹.",
      "Dependent inputs force relations among the outputs.",
    ],
    next: "7.4 finds the standard matrices of the basic geometric maps of the plane: rotations, reflections, projections, shears.",
  }),
];
