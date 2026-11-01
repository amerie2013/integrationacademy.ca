// LINALG1 7.4 — Geometric Transformations of the Plane: standard matrices of rotations, reflections (in the axes,
// in y = ±x, in any line through 0), projections onto a line (uuᵀ), dilations and shears; each found column by
// column from T(e₁), T(e₂) and applied in matrix form, with the reflection written as R = 2P − I.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, q, num, choice, hard, definition, theorem, am, cv, sfig } from "./lib.mjs";
import { sqMap, shapeMap, ptMap } from "./ws/fig7.mjs";
import { vecs2 } from "./ws/fig5.mjs";

export const TITLE = "7.4 Geometric Transformations of the Plane";
export const ID = "11a10001-0001-4001-8001-000000000704";

const S = String.raw;
const M = (m) => am(m, false);
const r3 = Math.sqrt(3);
const rotFig = sfig(ptMap([[0.5, -r3 / 2], [r3 / 2, 0.5]], [4, 2], { raw: true, names: ["x", "R(x)"] }), "rotation by 60°: length is kept, the angle grows by 60°");
const refFig = sfig(shapeMap([[0, 1], [1, 0]], [[1, 0], [3, 0], [3, 1]], { raw: true, label: "reflected" }), "reflection in x₂ = x₁ swaps the coordinates");
const projFig = sfig(vecs2([[[3, 1], "x = (3, 1)", "blue"], [[1, 2], "Px = (1, 2)", "violet"], [[-1, 3], "Rx = (−1, 3)", "red"]], { xmin: -2, xmax: 4, ymin: -1, ymax: 5 }, { segs: [{ pts: [[-1, -2], [2.5, 5]], color: "green", w: 2.4 }, { pts: [[3, 1], [-1, 3]], color: "gray", w: 1.4 }], raw: true }),
  "projection P and reflection R in the line x₂ = 2x₁: Px is the midpoint of x and Rx");
const shearFig = sfig(sqMap([[1, 2], [0, 1]], { raw: true }), "a horizontal shear slides each point sideways by 2 × its height");

export const blocks = () => [
  intro({
    icon: "🔄",
    title: "Geometric Transformations of the Plane",
    overview: S`Rotations, reflections, projections, stretches and shears of the plane all keep the origin fixed and send lines to lines; each is linear, so each has a \(2\times2\) standard matrix. The recipe from 7.3 finds them all: draw where \(\vec e_1\) and \(\vec e_2\) go and write those images as the columns. A short catalogue — \(R_\theta\) for rotation, \(uu^T\) for projection onto a line, \(2P-I\) for the reflection in that line — then lets you compute any of these maps by one matrix product.`,
    goals: [
      "derive the rotation matrix \\(R_\\theta\\) from \\(R_\\theta\\vec e_1\\) and \\(R_\\theta\\vec e_2\\);",
      "write the matrices of reflections in the axes and in \\(x_2=\\pm x_1\\);",
      "find the projection onto a line as \\(P=\\vec u\\vec u^T\\) and the reflection as \\(R=2P-I\\);",
      "recognise dilations, contractions and shears from their matrices;",
      "identify the geometric map of a given matrix.",
    ],
    outcomes: "linear transformations: geometric transformations of the plane",
    prior: [
      [S`\(\cos60^\circ\) and \(\sin60^\circ\)?`, S`\(\tfrac12\) and \(\tfrac{\sqrt3}2\).`],
      [S`The projection of \(\vec x\) onto a unit vector \(\vec u\)?`, S`\((\vec u\cdot\vec x)\vec u\).`],
      [S`Standard matrix of \(T\) from \(T(\vec e_1)\), \(T(\vec e_2)\)?`, S`\([\,T(\vec e_1)\ T(\vec e_2)\,]\).`],
    ],
    words: [
      ["Rotation \\(R_\\theta\\)", "turn by \\(\\theta\\) about 0", S`\(${M([["\\cos\\theta", "-\\sin\\theta"], ["\\sin\\theta", "\\cos\\theta"]])}\)`],
      ["Reflection", "mirror image in a line through 0", "\\(R^2=I\\)"],
      ["Projection", "closest point on a line through 0", "\\(P=\\vec u\\vec u^T\\), \\(P^2=P\\)"],
      ["Dilation / contraction", "\\(kI\\) with \\(k>1\\) / \\(0<k<1\\)", "scales lengths by \\(k\\)"],
      ["Shear", S`\(${M([[1, "k"], [0, 1]])}\) or \(${M([[1, 0], ["k", 1]])}\)`, "slides parallel to an axis"],
    ],
  }),

  section("📌 Rotations", S`
  ${theorem("rotation matrix", S`Rotation of \(\mathbb R^2\) by \(\theta\) counterclockwise about the origin has standard matrix \[R_\theta=${M([["\\cos\\theta", "-\\sin\\theta"], ["\\sin\\theta", "\\cos\\theta"]])}.\]`, S`Rotating \(\vec e_1=(1,0)\) by \(\theta\) lands on the unit circle at angle \(\theta\): \((\cos\theta,\sin\theta)\). Rotating \(\vec e_2=(0,1)\), at angle \(90^\circ\), lands at angle \(\theta+90^\circ\): \((\cos(\theta+90^\circ),\sin(\theta+90^\circ))=(-\sin\theta,\cos\theta)\). These are the two columns.`)}
  ${rotFig}`),

  section("📌 Reflections and projections", S`
  ${definition("projection and reflection in a line", S`Let \(L\) be the line through 0 along a unit vector \(\vec u\). The <strong>projection</strong> onto \(L\) is \(P\vec x=(\vec u\cdot\vec x)\vec u\); the <strong>reflection</strong> in \(L\) is \(R\vec x=2P\vec x-\vec x\).`)}
  ${theorem("matrices of P and R", S`\[P=\vec u\vec u^T=${M([["u_1^2", "u_1u_2"], ["u_1u_2", "u_2^2"]])},\qquad R=2P-I.\] For a line \(x_2=mx_1\), \(\vec u=\tfrac1{\sqrt{1+m^2}}(1,m)\) and \(P=\tfrac1{1+m^2}${M([[1, "m"], ["m", "m^2"]])}\).`, S`\((\vec u\cdot\vec x)\vec u=\vec u(\vec u^T\vec x)=(\vec u\vec u^T)\vec x\). Then \(R\vec x=2P\vec x-I\vec x=(2P-I)\vec x\). For the line \(x_2=mx_1\), the direction \((1,m)\) has length \(\sqrt{1+m^2}\).`)}
  ${keyIdea(S`\(P\vec x\) is the midpoint of \(\vec x\) and \(R\vec x\): \(P=\tfrac12(I+R)\). Special cases: in the \(x_1\)-axis \(R=${M([[1, 0], [0, -1]])}\); in \(x_2=x_1\), \(R=${M([[0, 1], [1, 0]])}\); in \(x_2=-x_1\), \(R=${M([[0, -1], [-1, 0]])}\).`)}
  ${projFig}`),

  section("📌 Dilations and shears", S`<p>\(kI\) scales every vector by \(k\); \(\operatorname{diag}(k_1,k_2)\) stretches the axes by different amounts. The shear \(${M([[1, "k"], [0, 1]])}\) keeps \(\vec e_1\) and sends \(\vec e_2\) to \((k,1)\): each point moves sideways by \(k\) times its height, and areas do not change.</p>
  ${shearFig}`),

  section("📌 Explore", S`<p>Choose a kind of map and its parameter (angle, line, factor). The explorer shows the matrix, the columns \(T(\vec e_1)\), \(T(\vec e_2)\), and the image of an asymmetric shape so you can see turning, flipping and squashing.</p>`),
  widget("laGeo", { init: { kind: "rot", t: 60 } }),

  section("📌 Common mistakes", watchOut([
    "The column for e₂ in R_θ is (−sin θ, cos θ) — the minus sign is on top.",
    "Reflection in the x₁-axis negates x₂ (not x₁).",
    "P = uuᵀ needs a UNIT vector u; for (1, m) divide by 1 + m².",
    "Projections lose information: P² = P and P is not invertible.",
    "A shear changes angles but not areas; a rotation changes neither lengths nor areas.",
  ])),

  examples([
    ["Rotation by 60°", S`Find the matrix of the rotation by \(60^\circ\) and rotate \(\vec x=(4,2)\). Check that the length is unchanged.`,
      [S`\(\cos60^\circ=\tfrac12\), \(\sin60^\circ=\tfrac{\sqrt3}2\): \[R_{60^\circ}=${M([["\\tfrac12", "-\\tfrac{\\sqrt3}2"], ["\\tfrac{\\sqrt3}2", "\\tfrac12"]])}.\]`,
        S`\[R_{60^\circ}${cv(4, 2)}=${M([["\\tfrac12", "-\\tfrac{\\sqrt3}2"], ["\\tfrac{\\sqrt3}2", "\\tfrac12"]])}${cv(4, 2)}=${cv("2-\\sqrt3", "2\\sqrt3+1")}.\]`,
        S`Lengths squared, as \(\vec y^T\vec y\): \(\vec x^T\vec x=${M([[4, 2]])}${cv(4, 2)}=16+4=20\), and \[(2-\sqrt3)^2+(2\sqrt3+1)^2=(7-4\sqrt3)+(13+4\sqrt3)=20\ \checkmark\]`],
      S`\(R_{60^\circ}(4,2)=(2-\sqrt3,\ 2\sqrt3+1)\)`, rotFig],
    ["Reflecting a triangle in x₂ = x₁", S`Reflect the triangle with corners \((1,0),(3,0),(3,1)\) in the line \(x_2=x_1\).`,
      [S`The reflection fixes \((1,1)\) and sends \(\vec e_1\leftrightarrow\vec e_2\): \(A=\big[\,T(\vec e_1)\ T(\vec e_2)\,\big]=${M([[0, 1], [1, 0]])}\).`,
        S`Corners as the columns of \(P\), one product: \[AP=${M([[0, 1], [1, 0]])}${M([[1, 3, 3], [0, 0, 1]])}=${M([["0+0", "0+0", "0+1"], ["1+0", "3+0", "3+0"]])}=${M([[0, 0, 1], [1, 3, 3]])}.\]`,
        S`The image has corners \((0,1),(0,3),(1,3)\).`],
      S`corners \((0,1),(0,3),(1,3)\)`, refFig],
    ["Projection onto x₂ = 2x₁", S`Find the matrix of the projection onto the line \(x_2=2x_1\) and project \(\vec x=(3,1)\).`,
      [S`\(m=2\), \(1+m^2=5\): \[P=\tfrac15${M([[1, 2], [2, 4]])}.\]`,
        S`\[P\vec x=\tfrac15${M([[1, 2], [2, 4]])}${cv(3, 1)}=\tfrac15${cv("3+2", "6+4")}=\tfrac15${cv(5, 10)}=${cv(1, 2)}.\]`,
        S`Check that \(\vec x-P\vec x=(2,-1)\) is perpendicular to the line: \(${M([[1, 2]])}${cv(2, -1)}=2-2=0\) ✓.`],
      S`\(P=\tfrac15${M([[1, 2], [2, 4]])}\), \(P(3,1)=(1,2)\)`, projFig],
    ["Reflection in x₂ = 2x₁", S`Find the matrix of the reflection in \(x_2=2x_1\) and reflect \((3,1)\).`,
      [S`\[R=2P-I=\tfrac25${M([[1, 2], [2, 4]])}-${M([[1, 0], [0, 1]])}=${M([["\\tfrac25-1", "\\tfrac45"], ["\\tfrac45", "\\tfrac85-1"]])}=\tfrac15${M([[-3, 4], [4, 3]])}.\]`,
        S`\[R${cv(3, 1)}=\tfrac15${M([[-3, 4], [4, 3]])}${cv(3, 1)}=\tfrac15${cv("-9+4", "12+3")}=\tfrac15${cv(-5, 15)}=${cv(-1, 3)}.\]`,
        S`Check: the midpoint \(\tfrac12\big(${cv(3, 1)}+${cv(-1, 3)}\big)=${cv(1, 2)}=P\vec x\) ✓.`],
      S`\(R=\tfrac15${M([[-3, 4], [4, 3]])}\), \(R(3,1)=(-1,3)\)`],
    ["A shear and the unit square", S`Apply the horizontal shear \(H=${M([[1, 2], [0, 1]])}\) to the unit square, then the dilation \(3I\) to the result.`,
      [S`Corners as columns: \[HP=${M([[1, 2], [0, 1]])}${M([[0, 1, 0, 1], [0, 0, 1, 1]])}=${M([["0", "1", "0+2", "1+2"], ["0", "0", "1", "1"]])}=${M([[0, 1, 2, 3], [0, 0, 1, 1]])}.\]`,
        S`The parallelogram has base 1 and height 1: area 1, the same as the square.`,
        S`Dilate: \[3I(HP)=${M([[3, 0], [0, 3]])}${M([[0, 1, 2, 3], [0, 0, 1, 1]])}=${M([[0, 3, 6, 9], [0, 0, 3, 3]])},\] base 3, height 3, area 9.`],
      S`corners \((0,0),(1,0),(2,1),(3,1)\), then \((0,0),(3,0),(6,3),(9,3)\)`, shearFig],
  ]),

  practice([
    q("rotation", S`Find the \((1,2)\) entry of \(R_{180^\circ}\).`, num(0),
      "−sin 180°.", [S`\(R_{180^\circ}=${M([[-1, 0], [0, -1]])}\).`], S`\(0\)`),
    q("reflection", S`Reflect \((2,5)\) in the \(x_2\)-axis. Give the first entry.`, num(-2),
      "Negate x₁.", [S`\(${M([[-1, 0], [0, 1]])}${cv(2, 5)}=${cv(-2, 5)}\).`], S`\(-2\)`),
    q("projection", S`Project \((4,7)\) onto the \(x_1\)-axis. Give the second entry.`, num(0),
      "P = diag(1, 0).", [S`\(${M([[1, 0], [0, 0]])}${cv(4, 7)}=${cv(4, 0)}\).`], S`\(0\)`),
    q("shear", S`The shear \(${M([[1, 0], [3, 1]])}\) sends \((2,1)\) to \((a,b)\). Find \(b\).`, num(7),
      "Row 2: 3(2) + 1.", [S`\(${cv("2", "6+1")}\).`], S`\(7\)`),
    q("which", S`\(${M([[0, 1], [-1, 0]])}\) is:`, choice(["rotation by 90° clockwise", "rotation by 90° counterclockwise", "reflection in x₂ = x₁", "a shear"], 0),
      "Where does e₁ go?", [S`\(\vec e_1\mapsto(0,-1)\), \(\vec e_2\mapsto(1,0)\): \(R_{-90^\circ}\).`], S`rotation by 90° clockwise`),
  ]),

  ...hard([
    ["Identify the map", S`Describe geometrically \(A=\tfrac15${M([[3, 4], [4, -3]])}\).`,
      [S`\(A^2=\tfrac1{25}${M([[3, 4], [4, -3]])}${M([[3, 4], [4, -3]])}=\tfrac1{25}${M([["9+16", "12-12"], ["12-12", "16+9"]])}=I\) and \(A=A^T\): the signature of a reflection.`,
        S`Find the fixed line: solve \((A-I)\vec x=\vec 0\), i.e. \(\tfrac15${M([[-2, 4], [4, -8]])}\vec x=\vec 0\). \[${am([[-2, 4, 0], [4, -8, 0]])}\xrightarrow{R_2\to R_2+2R_1}${am([[-2, 4, 0], [0, 0, 0]])}\] so \(x_1=2x_2\): the line along \((2,1)\).`,
        S`Check: \(A${cv(2, 1)}=\tfrac15${cv("6+4", "8-3")}=${cv(2, 1)}\) and \(A${cv(-1, 2)}=\tfrac15${cv("-3+8", "-4-6")}=${cv(1, -2)}\): the perpendicular direction is reversed.`],
      S`reflection in the line \(x_2=\tfrac12x_1\)`],
    ["Rotations add their angles", S`Show that \(R_\alpha R_\beta=R_{\alpha+\beta}\), and use it to find \(R_{30^\circ}^{\,3}\).`,
      [S`\[R_\alpha R_\beta=${M([["\\cos\\alpha", "-\\sin\\alpha"], ["\\sin\\alpha", "\\cos\\alpha"]])}${M([["\\cos\\beta", "-\\sin\\beta"], ["\\sin\\beta", "\\cos\\beta"]])}=${M([["\\cos\\alpha\\cos\\beta-\\sin\\alpha\\sin\\beta", "-\\cos\\alpha\\sin\\beta-\\sin\\alpha\\cos\\beta"], ["\\sin\\alpha\\cos\\beta+\\cos\\alpha\\sin\\beta", "-\\sin\\alpha\\sin\\beta+\\cos\\alpha\\cos\\beta"]])}.\]`,
        S`By the angle-sum identities the entries are \(\cos(\alpha+\beta)\), \(-\sin(\alpha+\beta)\), \(\sin(\alpha+\beta)\), \(\cos(\alpha+\beta)\): this is \(R_{\alpha+\beta}\).`,
        S`So \(R_{30^\circ}^{\,3}=R_{90^\circ}=${M([[0, -1], [1, 0]])}\).`],
      S`\(R_\alpha R_\beta=R_{\alpha+\beta}\); \(R_{30^\circ}^3=${M([[0, -1], [1, 0]])}\)`],
  ], [
    q("hard", S`Find the \((1,2)\) entry of the projection matrix onto the line \(x_2=x_1\). (Decimal.)`, num(0.5),
      "u = (1, 1)/√2.", [S`\(P=\tfrac12${M([[1, 1], [1, 1]])}\).`], S`\(0.5\)`),
    q("hard", S`Reflect \((5,0)\) in the line \(x_2=2x_1\). Give the first entry.`, num(-3),
      "R = (1/5)[−3 4; 4 3].", [S`\(\tfrac15${M([[-3, 4], [4, 3]])}${cv(5, 0)}=${cv(-3, 4)}\).`], S`\(-3\)`),
    q("hard", S`For a projection matrix \(P\) onto a line, \(P^2=\)`, choice([S`\(P\)`, S`\(I\)`, S`\(0\)`, S`\(2P\)`], 0),
      "Projecting twice changes nothing.", [S`\((\vec u\vec u^T)(\vec u\vec u^T)=\vec u(\vec u^T\vec u)\vec u^T=\vec u\vec u^T\).`], S`\(P\)`),
  ]),

  wrapUp({
    qas: [
      ["What is the rotation matrix?", "R_θ = [cos θ −sin θ; sin θ cos θ]."],
      ["How do I project onto a line through 0?", "P = uuᵀ with u a unit direction; for x₂ = mx₁, P = (1/(1 + m²))[1 m; m m²]."],
      ["How do I reflect in that line?", "R = 2P − I."],
      ["What does a shear do?", "Slides points parallel to an axis; it keeps areas."],
      ["How do I identify a matrix's map?", "Look at its columns, A², Aᵀ and fixed vectors."],
    ],
    summary: [
      "R_θ: columns (cos θ, sin θ), (−sin θ, cos θ).",
      "P = uuᵀ, P² = P.",
      "R = 2P − I, R² = I.",
      "kI dilates; [1 k; 0 1] shears.",
      "R_α R_β = R_{α+β}.",
    ],
    next: "7.5 composes transformations — matrix products — and inverts them.",
  }),
];
