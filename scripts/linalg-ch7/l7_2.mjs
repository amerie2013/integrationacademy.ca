// LINALG1 7.2 — Linear Transformations: the two defining properties, T(0) = 0 and superposition, why every matrix
// transformation is linear (A(u + v) = Au + Av, A(cu) = cAu), proving a formula map linear by writing it as Ax,
// counterexamples for maps that are not linear, and computing T(cu + dv) as [T(u) T(v)] times the weights.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, q, num, choice, hard, definition, theorem, am, cv, sfig } from "./lib.mjs";

import { vecs2 } from "./ws/fig5.mjs";

export const TITLE = "7.2 Linear Transformations";
export const ID = "11a10001-0001-4001-8001-000000000702";

const S = String.raw;
const M = (m) => am(m, false);
const supFig = sfig(vecs2([[[1, 0], "u", "blue"], [[0, 1], "v", "red"], [[1, 1], "u + v", "violet", null, true], [[2, 1], "T(u)", "blue"], [[-1, 2], "T(v)", "red"], [[1, 3], "T(u + v) = T(u) + T(v)", "violet", null, true]], { xmin: -2, xmax: 3, ymin: -1, ymax: 4 }, { segs: [{ pts: [[2, 1], [1, 3]], color: "gray", w: 1.2 }, { pts: [[-1, 2], [1, 3]], color: "gray", w: 1.2 }], raw: true }),
  "a linear map sends the parallelogram rule to the parallelogram rule");
const affFig = sfig(vecs2([[[1, 0], "T(0) = (1, 0) ≠ 0", "red"], [[1, 2], "x", "blue"], [[2, 2], "x + (1, 0)", "violet", null, true]], { xmin: -1, xmax: 4, ymin: -1, ymax: 4 }, { segs: [{ pts: [[1, 2], [2, 2]], color: "gray", w: 1.4 }], raw: true }),"T(x) = x + (1, 0) moves the origin, so it cannot be linear");
const ex5Fig = sfig(vecs2([[[1, 0], "e₁", "blue"], [[0, 1], "e₂", "red"], [[4, -3], "x = 4e₁ − 3e₂", "violet"]], { xmin: -1, xmax: 5, ymin: -4, ymax: 2 }, { raw: true }), "x is a combination of e₁, e₂, so T(x) is the same combination of T(e₁), T(e₂)");

export const blocks = () => [
  intro({
    icon: "📏",
    title: "Linear Transformations",
    overview: S`Matrix transformations respect the two operations of linear algebra: \(A(\vec u+\vec v)=A\vec u+A\vec v\) and \(A(c\vec u)=cA\vec u\). These two properties are all that is needed for most of what we do, so we give any map that has them a name: <strong>linear</strong>. A linear map sends sums to sums and multiples to multiples, so it sends every linear combination to the same combination of images — knowing \(T\) on a few vectors determines it on their whole span. Maps that move the origin, square a coordinate or multiply coordinates together are not linear, and one counterexample proves it.`,
    goals: [
      "state the definition of a linear transformation;",
      "prove a map linear by writing it as \\(A\\vec x\\) and using \\(A(\\vec u+\\vec v)=A\\vec u+A\\vec v\\), \\(A(c\\vec u)=cA\\vec u\\);",
      "disprove linearity with \\(T(\\vec 0)\\ne\\vec 0\\) or one failed property;",
      "compute \\(T(c\\vec u+d\\vec v)\\) from \\(T(\\vec u)\\) and \\(T(\\vec v)\\) as a matrix product;",
      "recover \\(T(\\vec x)\\) from the images of the standard vectors.",
    ],
    outcomes: "linear transformations: the definition of linearity",
    prior: [
      [S`Expand \(${M([[1, 2], [0, 3]])}\left(${cv(1, 1)}+${cv(2, 0)}\right)\) two ways.`, S`\(${M([[1, 2], [0, 3]])}${cv(3, 1)}=${cv(5, 3)}\) and \(${cv(3, 3)}+${cv(2, 0)}=${cv(5, 3)}\).`],
      [S`Write \((4,-3)\) as a combination of \(\vec e_1,\vec e_2\).`, S`\(4\vec e_1-3\vec e_2\).`],
      [S`What is \(A\vec 0\)?`, S`\(\vec 0\).`],
    ],
    words: [
      ["Linear", "\\(T(\\vec u+\\vec v)=T(\\vec u)+T(\\vec v)\\), \\(T(c\\vec u)=cT(\\vec u)\\)", "both for ALL vectors and scalars"],
      ["Additive", "preserves sums", "first property"],
      ["Homogeneous", "preserves scalar multiples", "second property"],
      ["Superposition", "\\(T(c_1\\vec v_1+\\dots+c_k\\vec v_k)=c_1T(\\vec v_1)+\\dots+c_kT(\\vec v_k)\\)", "both at once"],
      ["Counterexample", "one choice of vectors where a property fails", "enough to disprove"],
    ],
  }),

  section("📌 The definition", S`
  ${definition("linear transformation", S`A transformation \(T:\mathbb R^n\to\mathbb R^m\) is <strong>linear</strong> if for all \(\vec u,\vec v\) in \(\mathbb R^n\) and all scalars \(c\): \[\text{(i)}\ \ T(\vec u+\vec v)=T(\vec u)+T(\vec v),\qquad \text{(ii)}\ \ T(c\vec u)=cT(\vec u).\]`)}
  ${theorem("matrix maps are linear", S`For every \(m\times n\) matrix \(A\), \(T(\vec x)=A\vec x\) is linear.`, S`Row \(i\) of \(A(\vec u+\vec v)\) is \(\sum_j a_{ij}(u_j+v_j)=\sum_j a_{ij}u_j+\sum_j a_{ij}v_j\), which is row \(i\) of \(A\vec u+A\vec v\). Row \(i\) of \(A(c\vec u)\) is \(\sum_j a_{ij}cu_j=c\sum_j a_{ij}u_j\), row \(i\) of \(cA\vec u\).`)}
  ${supFig}`),

  section("📌 Consequences", S`
  ${theorem("zero and superposition", S`If \(T\) is linear then \(T(\vec 0)=\vec 0\), and for all vectors and scalars \[T(c_1\vec v_1+\dots+c_k\vec v_k)=c_1T(\vec v_1)+\dots+c_kT(\vec v_k)=\big[\,T(\vec v_1)\ \cdots\ T(\vec v_k)\,\big]${cv("c_1", "\\vdots", "c_k")}.\]`, S`\(T(\vec 0)=T(0\cdot\vec 0)=0\,T(\vec 0)=\vec 0\) by (ii). For two vectors, (i) then (ii) give \(T(c_1\vec v_1+c_2\vec v_2)=T(c_1\vec v_1)+T(c_2\vec v_2)=c_1T(\vec v_1)+c_2T(\vec v_2)\); repeat for more terms. The last form is the column picture of a matrix–vector product.`)}
  ${keyIdea(S`To show a map is NOT linear, one counterexample is enough — first try \(T(\vec 0)\). To show it IS linear, write it as \(A\vec x\) for a fixed matrix \(A\), or check (i) and (ii) for arbitrary vectors.`)}
  ${affFig}`),

  section("📌 Explore", S`<p>The explorer applies a \(2\times2\) matrix to the plane. Drag \(\vec x\) and compare: the image of a sum of grid steps is the same sum of image steps — the image grid is still made of equal parallelograms.</p>`),
  widget("laMap2", { init: { a: 2, b: -1, c: 1, d: 2, x: 2, y: 1 } }),

  section("📌 Common mistakes", watchOut([
    "Checking (i) and (ii) for ONE pair of vectors does not prove linearity — only a counterexample is that cheap.",
    "T(0) = 0 is necessary but not sufficient: T(x₁, x₂) = (x₁x₂, 0) has T(0) = 0 and is not linear.",
    "A constant term (x + 1) or a power or product of coordinates breaks linearity.",
    "“Linear” here is stricter than “straight-line graph”: f(x) = 2x + 3 is not a linear transformation.",
    "Superposition needs both properties; use it in the matrix form [T(v₁) … T(v_k)] c.",
  ])),

  examples([
    ["Proving a formula map is linear", S`Show that \(T(x_1,x_2,x_3)=(2x_1-x_3,\ x_1+3x_2)\) is linear, and check (i) for \(\vec u=(1,0,2)\), \(\vec v=(0,1,1)\).`,
      [S`Each output entry is a fixed combination of the inputs, so \[T(\vec x)=${cv("2x_1+0x_2-x_3", "x_1+3x_2+0x_3")}=${M([[2, 0, -1], [1, 3, 0]])}${cv("x_1", "x_2", "x_3")}=A\vec x.\]`,
        S`For all \(\vec u,\vec v,c\): \(T(\vec u+\vec v)=A(\vec u+\vec v)=A\vec u+A\vec v=T(\vec u)+T(\vec v)\) and \(T(c\vec u)=A(c\vec u)=cA\vec u=cT(\vec u)\). So \(T\) is linear.`,
        S`Numerical check: \[A\vec u=${M([[2, 0, -1], [1, 3, 0]])}${cv(1, 0, 2)}=${cv("2+0-2", "1+0+0")}=${cv(0, 1)},\qquad A\vec v=${M([[2, 0, -1], [1, 3, 0]])}${cv(0, 1, 1)}=${cv("0+0-1", "0+3+0")}=${cv(-1, 3)},\]`,
        S`\[A(\vec u+\vec v)=${M([[2, 0, -1], [1, 3, 0]])}${cv(1, 1, 3)}=${cv("2+0-3", "1+3+0")}=${cv(-1, 4)}=${cv(0, 1)}+${cv(-1, 3)}\ \checkmark\]`],
      S`\(T(\vec x)=${M([[2, 0, -1], [1, 3, 0]])}\vec x\), so \(T\) is linear`],
    ["A map that moves the origin", S`Is \(T(x_1,x_2)=(x_1+1,\ 2x_2)\) linear?`,
      [S`Test the origin: \(T${cv(0, 0)}=${cv("0+1", "2(0)")}=${cv(1, 0)}\ne\vec 0\). A linear map must send \(\vec 0\) to \(\vec 0\).`,
        S`Additivity also fails, e.g. \(\vec u=(1,0)\), \(\vec v=(0,1)\): \[T(\vec u)+T(\vec v)=${cv(2, 0)}+${cv(1, 2)}=${cv(3, 2)},\qquad T(\vec u+\vec v)=T${cv(1, 1)}=${cv(2, 2)}.\]`,
        S`In matrix language \(T(\vec x)=${M([[1, 0], [0, 2]])}\vec x+${cv(1, 0)}\): a matrix map plus a shift. The shift is what breaks linearity.`],
      S`not linear: \(T(\vec 0)=(1,0)\)`, affFig],
    ["A product of coordinates", S`Is \(T(x_1,x_2)=(x_1x_2,\ x_2)\) linear?`,
      [S`Here \(T(\vec 0)=(0,0)\), so the origin test is passed — look further.`,
        S`Take \(\vec u=(1,1)\), \(c=2\): \[T(2\vec u)=T${cv(2, 2)}=${cv("2\\cdot2", 2)}=${cv(4, 2)},\qquad 2T(\vec u)=2${cv("1\\cdot1", 1)}=${cv(2, 2)}.\]`,
        S`\(${cv(4, 2)}\ne${cv(2, 2)}\): property (ii) fails, so \(T\) is not linear.`],
      S`not linear: \(T(2\vec u)\ne2T(\vec u)\) for \(\vec u=(1,1)\)`],
    ["Superposition as a product", S`\(T\) is linear with \(T(\vec u)=(1,3)\) and \(T(\vec v)=(2,-1)\). Find \(T(3\vec u-2\vec v)\).`,
      [S`By superposition \(T(3\vec u-2\vec v)=3T(\vec u)-2T(\vec v)\): the images as columns times the weights.`,
        S`\[T(3\vec u-2\vec v)=\big[\,T(\vec u)\ \ T(\vec v)\,\big]${cv(3, -2)}=${M([[1, 2], [3, -1]])}${cv(3, -2)}=${cv("3-4", "9+2")}=${cv(-1, 11)}.\]`],
      S`\(T(3\vec u-2\vec v)=(-1,11)\)`],
    ["Images of e₁ and e₂ decide everything", S`\(T:\mathbb R^2\to\mathbb R^3\) is linear, \(T(\vec e_1)=(1,0,2)\), \(T(\vec e_2)=(-1,1,3)\). Find \(T(4,-3)\) and a formula for \(T(x_1,x_2)\).`,
      [S`\((4,-3)=4\vec e_1-3\vec e_2\), so \[T${cv(4, -3)}=\big[\,T(\vec e_1)\ \ T(\vec e_2)\,\big]${cv(4, -3)}=${M([[1, -1], [0, 1], [2, 3]])}${cv(4, -3)}=${cv("4+3", "0-3", "8-9")}=${cv(7, -3, -1)}.\]`,
        S`The same for a general \(\vec x=x_1\vec e_1+x_2\vec e_2\): \[T(\vec x)=${M([[1, -1], [0, 1], [2, 3]])}${cv("x_1", "x_2")}=${cv("x_1-x_2", "x_2", "2x_1+3x_2")}.\]`],
      S`\(T(4,-3)=(7,-3,-1)\); \(T(\vec x)=(x_1-x_2,\ x_2,\ 2x_1+3x_2)\)`, ex5Fig],
  ]),

  practice([
    q("linear?", S`Is \(T(x_1,x_2)=(x_1,\ x_2+3)\) linear?`, choice(["no", "yes"], 0),
      "Try the origin.", [S`\(T(0,0)=(0,3)\ne\vec 0\).`], S`no`),
    q("scaling", S`\(T\) is linear and \(T(\vec u)=(2,5)\). Find the second entry of \(T(-3\vec u)\).`, num(-15),
      "(ii): pull the −3 out.", [S`\(-3${cv(2, 5)}=${cv(-6, -15)}\).`], S`\(-15\)`),
    q("superposition", S`\(T\) is linear, \(T(\vec u)=(1,2)\), \(T(\vec v)=(0,1)\). Find the second entry of \(T(\vec u+2\vec v)\).`, num(4),
      "[T(u) T(v)] (1, 2).", [S`\(${M([[1, 0], [2, 1]])}${cv(1, 2)}=${cv(1, "2+2")}\).`], S`\(4\)`),
    q("which", S`Which map is linear?`, choice([S`\((x_1-x_2,\ 0)\)`, S`\((x_1^2,\ x_2)\)`, S`\((x_1,\ 1)\)`, S`\((|x_1|,\ x_2)\)`], 0),
      "Only one is Ax.", [S`\((x_1-x_2,0)=${M([[1, -1], [0, 0]])}\vec x\).`], S`\((x_1-x_2,0)\)`),
    q("half", S`\(T\) is linear and \(T(2,0)=(4,6)\). Find the first entry of \(T(1,0)\).`, num(2),
      "(1, 0) = ½(2, 0).", [S`\(T(1,0)=\tfrac12${cv(4, 6)}=${cv(2, 3)}\).`], S`\(2\)`),
  ]),

  ...hard([
    ["Recovering T from a non-standard pair", S`\(T:\mathbb R^2\to\mathbb R^2\) is linear with \(T(1,1)=(3,1)\) and \(T(1,-1)=(1,5)\). Find \(T(x_1,x_2)\).`,
      [S`Write \(\vec e_1=c_1(1,1)+c_2(1,-1)\): solve \(${M([[1, 1], [1, -1]])}${cv("c_1", "c_2")}=${cv(1, 0)}\). \[${am([[1, 1, 1], [1, -1, 0]])}\xrightarrow{R_2\to R_2-R_1}${am([[1, 1, 1], [0, -2, -1]])}\xrightarrow{R_2\to-\frac12R_2,\ R_1\to R_1-R_2}${am([[1, 0, "\\tfrac12"], [0, 1, "\\tfrac12"]])}.\]`,
        S`So \(\vec e_1=\tfrac12(1,1)+\tfrac12(1,-1)\) and, the same way, \(\vec e_2=\tfrac12(1,1)-\tfrac12(1,-1)\). By superposition \[T(\vec e_1)=${M([[3, 1], [1, 5]])}${cv("\\tfrac12", "\\tfrac12")}=${cv(2, 3)},\qquad T(\vec e_2)=${M([[3, 1], [1, 5]])}${cv("\\tfrac12", "-\\tfrac12")}=${cv(1, -2)}.\]`,
        S`Hence \(T(\vec x)=x_1T(\vec e_1)+x_2T(\vec e_2)=${M([[2, 1], [3, -2]])}\vec x\). Check: \[${M([[2, 1], [3, -2]])}${M([[1, 1], [1, -1]])}=${M([["2+1", "2-1"], ["3-2", "3+2"]])}=${M([[3, 1], [1, 5]])}\ \checkmark\]`],
      S`\(T(x_1,x_2)=(2x_1+x_2,\ 3x_1-2x_2)\)`],
    ["A rank-one map is linear", S`Fix \(\vec a=(1,2)\) and \(\vec b=(3,-1)\). Show that \(T(\vec x)=(\vec a\cdot\vec x)\,\vec b\) is linear by finding its matrix.`,
      [S`Write the dot product as a row times a column: \(\vec a\cdot\vec x=\vec a^T\vec x\). Then \(T(\vec x)=\vec b(\vec a^T\vec x)=(\vec b\vec a^T)\vec x\).`,
        S`\[\vec b\vec a^T=${cv(3, -1)}${M([[1, 2]])}=${M([["3(1)", "3(2)"], ["-1(1)", "-1(2)"]])}=${M([[3, 6], [-1, -2]])}.\]`,
        S`So \(T(\vec x)=${M([[3, 6], [-1, -2]])}\vec x\), a matrix transformation, hence linear. Check \(\vec x=(2,1)\): \(\vec a\cdot\vec x=4\) and \(4\vec b=(12,-4)\); \[${M([[3, 6], [-1, -2]])}${cv(2, 1)}=${cv("6+6", "-2-2")}=${cv(12, -4)}\ \checkmark\]`],
      S`\(T(\vec x)=${M([[3, 6], [-1, -2]])}\vec x\), so \(T\) is linear`],
  ], [
    q("hard", S`\(T:\mathbb R^2\to\mathbb R\) is linear, \(T(1,2)=5\), \(T(0,1)=1\). Find \(T(1,0)\).`, num(3),
      "(1, 0) = (1, 2) − 2(0, 1).", [S`\(T(1,0)=5-2(1)=3\).`], S`\(3\)`),
    q("hard", S`\(T(\vec x)=A\vec x+\vec b\) is linear exactly when:`, choice([S`\(\vec b=\vec 0\)`, S`\(A=I\)`, S`\(A\) is invertible`, S`always`], 0),
      "T(0) = b.", [S`\(T(\vec 0)=\vec b\) must be \(\vec 0\); if \(\vec b=\vec 0\), \(T=A\vec x\) is linear.`], S`\(\vec b=\vec 0\)`),
    q("hard", S`\(T(x_1,x_2)=(x_1^2,\ x_2)\) and \(\vec u=(1,0)\). Find the first entry of \(T(2\vec u)-2T(\vec u)\).`, num(2),
      "4 − 2.", [S`\(T(2,0)=(4,0)\), \(2T(1,0)=(2,0)\); the difference \((2,0)\ne\vec 0\).`], S`\(2\)`),
  ]),

  wrapUp({
    qas: [
      ["What makes T linear?", "T(u + v) = T(u) + T(v) and T(cu) = cT(u) for all vectors and scalars."],
      ["Are matrix transformations linear?", "Yes: A(u + v) = Au + Av and A(cu) = cAu."],
      ["What is the quickest test for NOT linear?", "T(0) ≠ 0 — otherwise find one failed property."],
      ["How do I compute T(cu + dv)?", "[T(u) T(v)] (c, d) = cT(u) + dT(v)."],
      ["What determines a linear map on ℝⁿ?", "Its values T(e₁), …, T(eₙ)."],
    ],
    summary: [
      "Linear: preserves sums and scalar multiples.",
      "Every T(x) = Ax is linear.",
      "Linear ⇒ T(0) = 0 and superposition.",
      "Shifts, powers and products of coordinates are not linear.",
      "T(x) = x₁T(e₁) + … + xₙT(eₙ).",
    ],
    next: "7.3 turns the last fact into a theorem: every linear map is x ↦ Ax for one matrix, the standard matrix.",
  }),
];
