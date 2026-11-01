// LINALG1 1.5 — The Cross Product: definition in R³ via 2×2 determinants, orthogonality to both factors, the
// algebra (anticommutative, distributive, not associative), the length ‖u‖‖v‖sin θ and parallelogram/triangle
// areas, the parallel test, and the scalar triple product as a volume (hard level).
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, hard, definition, theorem, vec, dir } from "./lib.mjs";
import { vfig, scene3, a3, pt3, seg3 } from "./vecfig.mjs";

export const TITLE = "1.5 The Cross Product";
export const ID = "11a10001-0001-4001-8001-000000000105";

const S = String.raw;
const add = (a, b) => a.map((x, i) => x + b[i]);
export const blocks = () => [
  intro({
    icon: "✖️",
    title: "The Cross Product",
    overview: S`The dot product of two vectors is a number. In \(\mathbb R^3\) — and only there — there is also a product that gives a <strong>vector</strong>: the cross product \(\vec u\times\vec v\). It is perpendicular to both \(\vec u\) and \(\vec v\), and its length is the area of the parallelogram they span. That makes it the natural tool for normals to planes, areas and volumes.`,
    goals: [
      "compute \\(\\vec u\\times\\vec v\\) with the determinant pattern;",
      "verify that \\(\\vec u\\times\\vec v\\) is orthogonal to \\(\\vec u\\) and \\(\\vec v\\);",
      "use the algebraic rules, including \\(\\vec v\\times\\vec u=-\\vec u\\times\\vec v\\);",
      "find areas of parallelograms and triangles in \\(\\mathbb R^3\\);",
      "test for parallel vectors and compute volumes with the scalar triple product.",
    ],
    outcomes: "geometry of \\(\\mathbb R^n\\): the cross product in \\(\\mathbb R^3\\)",
    prior: [
      [S`\(\det\begin{bmatrix}3&1\\4&2\end{bmatrix}\)?`, S`\(3\cdot2-1\cdot4=2\).`],
      [S`Area of a parallelogram with sides 5 and 8 meeting at \(30^\circ\)?`, S`\(5\cdot8\sin30^\circ=20\).`],
      [S`Test \((1,2,3)\perp(3,0,-1)\).`, S`\(3+0-3=0\): yes.`],
    ],
    words: [
      ["Cross product", "a vector in \\(\\mathbb R^3\\) orthogonal to \\(\\vec u\\) and \\(\\vec v\\)", "\\(\\vec e_1\\times\\vec e_2=\\vec e_3\\)"],
      ["Right-hand rule", "fingers along \\(\\vec u\\), curl to \\(\\vec v\\), thumb = \\(\\vec u\\times\\vec v\\)", "fixes the direction"],
      ["Anticommutative", "\\(\\vec v\\times\\vec u=-\\vec u\\times\\vec v\\)", "order matters"],
      ["Scalar triple product", "\\(\\vec u\\cdot(\\vec v\\times\\vec w)\\)", "± volume of a box"],
    ],
  }),

  section("📌 The definition", S`
  ${definition("cross product", S`For \(\vec u=(u_1,u_2,u_3)\) and \(\vec v=(v_1,v_2,v_3)\) in \(\mathbb R^3\): \[\vec u\times\vec v=\begin{bmatrix}u_2v_3-u_3v_2\\u_3v_1-u_1v_3\\u_1v_2-u_2v_1\end{bmatrix}.\]`)}
  <p><strong>Memory aid.</strong> Each component is a \(2\times2\) determinant. Write \(\vec u\) above \(\vec v\); to get component \(i\), cover column \(i\) and take the determinant of what is left — with a minus sign on the middle one:</p>
  \[\vec u\times\vec v=\left(\begin{vmatrix}u_2&u_3\\v_2&v_3\end{vmatrix},\ -\begin{vmatrix}u_1&u_3\\v_1&v_3\end{vmatrix},\ \begin{vmatrix}u_1&u_2\\v_1&v_2\end{vmatrix}\right).\]
  ${theorem("orthogonality", S`\(\vec u\cdot(\vec u\times\vec v)=0\) and \(\vec v\cdot(\vec u\times\vec v)=0\).`, S`\(u_1(u_2v_3-u_3v_2)+u_2(u_3v_1-u_1v_3)+u_3(u_1v_2-u_2v_1)\): the six terms cancel in pairs (\(u_1u_2v_3\) with \(-u_2u_1v_3\), and so on). The same happens for \(\vec v\).`)}
  ${vfig(scene3(4.5, { polys: [{ pts: [[0, 0, 0], [3, 0, 0], [4, 2.5, 0], [1, 2.5, 0]].map((p) => [p[1] - 0.55 * p[0], p[2] - 0.42 * p[0]]), fill: "#fde68a", op: 0.7, stroke: "amber" }], arrows: [a3([0, 0, 0], [3, 0, 0], { color: "blue", vl: "u", off: 16 }), a3([0, 0, 0], [1, 2.5, 0], { color: "red", vl: "v", off: -16 }), a3([0, 0, 0], [0, 0, 4], { color: "green", w: 3.6, label: "u × v", off: -24 })] }), "u × v stands straight up out of the parallelogram spanned by u and v; its length is that parallelogram's area")}`),

  section("📌 Algebra and geometry", S`
  ${table(["Rule", "Statement"], [
    ["anticommutative", "\\(\\vec v\\times\\vec u=-(\\vec u\\times\\vec v)\\), so \\(\\vec u\\times\\vec u=\\vec 0\\)"],
    ["distributive", "\\(\\vec u\\times(\\vec v+\\vec w)=\\vec u\\times\\vec v+\\vec u\\times\\vec w\\)"],
    ["scalars", "\\((c\\vec u)\\times\\vec v=c(\\vec u\\times\\vec v)=\\vec u\\times(c\\vec v)\\)"],
    ["basis", "\\(\\vec e_1\\times\\vec e_2=\\vec e_3\\), \\(\\vec e_2\\times\\vec e_3=\\vec e_1\\), \\(\\vec e_3\\times\\vec e_1=\\vec e_2\\)"],
    ["NOT associative", "\\((\\vec u\\times\\vec v)\\times\\vec w\\ne\\vec u\\times(\\vec v\\times\\vec w)\\) in general"],
  ])}
  ${theorem("length", S`\(\|\vec u\times\vec v\|=\|\vec u\|\,\|\vec v\|\sin\theta\), the <strong>area of the parallelogram</strong> with sides \(\vec u\) and \(\vec v\). Half of it is the area of the triangle they form. In particular \(\vec u\times\vec v=\vec 0\) exactly when \(\vec u\) and \(\vec v\) are parallel (or one is \(\vec 0\)).`)}
  ${keyIdea(S`Direction: perpendicular to both, chosen by the right-hand rule. Length: the area of the parallelogram. Those two facts determine \(\vec u\times\vec v\) completely.`)}`),

  section("📌 Explore", S`<p>Change \(\vec u\) and \(\vec v\) and watch the green arrow stay perpendicular to the amber parallelogram while its length tracks the area. Swap the order to see the arrow flip; make \(\vec v\) a multiple of \(\vec u\) to see it vanish.</p>`),
  widget("laCross", { init: { u: [2, 0, 0], v: [1, 2, 0] } }),

  section("📌 Pitfalls", S`
  ${watchOut([
    "The middle component carries a minus sign: u₃v₁ − u₁v₃.",
    "Order matters: v × u points the opposite way.",
    "The cross product is defined only in ℝ³ (the dot product works in every ℝⁿ).",
    "‖u × v‖ uses sin θ; u · v uses cos θ.",
    "Always check your answer: it must have dot product 0 with both factors.",
  ])}`),

  examples([
    ["Computing a cross product", S`Compute \((2,-1,3)\times(1,4,-2)\) and check it.`,
      [S`First: \((-1)(-2)-3(4)=2-12=-10\). Second: \(3(1)-2(-2)=3+4=7\). Third: \(2(4)-(-1)(1)=8+1=9\).`, S`Check: \((-10,7,9)\cdot(2,-1,3)=-20-7+27=0\) and \((-10,7,9)\cdot(1,4,-2)=-10+28-18=0\).`],
      S`\((-10,7,9)\)`],
    ["Area of a parallelogram", S`Find the area of the parallelogram with sides \(\vec u=(1,2,0)\) and \(\vec v=(3,-1,2)\).`,
      [S`\(\vec u\times\vec v=(2\cdot2-0,\ 0-1\cdot2,\ 1(-1)-2\cdot3)=(4,-2,-7)\).`, S`\(\|(4,-2,-7)\|=\sqrt{16+4+49}=\sqrt{69}\).`],
      S`area \(=\sqrt{69}\approx8.31\)`],
    ["Area of a triangle", S`Find the area of the triangle with vertices \(P(1,0,1)\), \(Q(2,2,3)\), \(R(0,1,4)\).`,
      [S`\(\overrightarrow{PQ}=(1,2,2)\), \(\overrightarrow{PR}=(-1,1,3)\).`, S`\(\overrightarrow{PQ}\times\overrightarrow{PR}=(6-2,\ -2-3,\ 1+2)=(4,-5,3)\), length \(\sqrt{50}=5\sqrt2\).`, S`The triangle is half the parallelogram.`],
      S`area \(=\tfrac{5\sqrt2}{2}\approx3.54\)`,
      vfig(scene3(4.5, { polys: [{ pts: [[1, 0, 1], [2, 2, 3], [0, 1, 4]].map((p) => [p[1] - 0.55 * p[0], p[2] - 0.42 * p[0]]), fill: "#dbeafe", op: 0.8, stroke: "blue" }], points: [pt3([1, 0, 1], "P", { color: "black" }), pt3([2, 2, 3], "Q", { color: "black" }), pt3([0, 1, 4], "R", { color: "black" })] }))],
    ["Not associative", S`Compare \(\vec e_1\times(\vec e_1\times\vec e_2)\) with \((\vec e_1\times\vec e_1)\times\vec e_2\).`,
      [S`\(\vec e_1\times\vec e_2=\vec e_3\), and \(\vec e_1\times\vec e_3=-(\vec e_3\times\vec e_1)=-\vec e_2\).`, S`\(\vec e_1\times\vec e_1=\vec 0\), so the second is \(\vec 0\times\vec e_2=\vec 0\).`],
      S`\(-\vec e_2\ne\vec 0\): brackets matter`],
    ["A parallel test", S`Are \((2,-4,6)\) and \((-1,2,-3)\) parallel? Use the cross product.`,
      [S`Components: \((-4)(-3)-6(2)=0\), \(6(-1)-2(-3)=0\), \(2(2)-(-4)(-1)=0\).`],
      S`the cross product is \(\vec 0\), so yes (the first is \(-2\) times the second)`],
  ]),

  practice([
    q("compute", S`Compute \((1,0,2)\times(0,3,1)\).`, vec(-6, -1, 3),
      "Cover a column, take the 2×2 determinant; minus sign in the middle.", [S`\((0\cdot1-2\cdot3,\ 2\cdot0-1\cdot1,\ 1\cdot3-0\cdot0)\).`], S`\((-6,-1,3)\)`),
    q("area", S`Find the area of the parallelogram with sides \((2,0,0)\) and \((1,3,4)\).`, num(10),
      "Length of the cross product.", [S`\((0,-8,6)\); \(\sqrt{64+36}\).`], S`\(10\)`),
    q("swap", S`\(\vec u\times\vec v=(1,-2,4)\). Find \(\vec v\times\vec u\).`, vec(-1, 2, -4),
      "Swapping the order changes the sign.", [S`\(-(1,-2,4)\).`], S`\((-1,2,-4)\)`),
    q("orthogonal to both", S`Give a nonzero vector orthogonal to both \((1,1,1)\) and \((1,-1,2)\).`, dir(3, -1, -2),
      "Take their cross product.", [S`\((1\cdot2-1(-1),\ 1\cdot1-1\cdot2,\ 1(-1)-1\cdot1)\). Any nonzero multiple works.`], S`\((3,-1,-2)\)`),
    q("length", S`\(\|\vec u\|=4\), \(\|\vec v\|=5\), angle \(30^\circ\). Find \(\|\vec u\times\vec v\|\).`, num(10),
      "‖u‖‖v‖sin θ.", [S`\(4\times5\times\tfrac12\).`], S`\(10\)`),
  ]),

  ...hard([
    ["Lagrange's identity", S`Prove \(\|\vec u\times\vec v\|^2=\|\vec u\|^2\|\vec v\|^2-(\vec u\cdot\vec v)^2\), and deduce \(\|\vec u\times\vec v\|=\|\vec u\|\|\vec v\|\sin\theta\).`,
      [S`Left side, by definition: \((u_2v_3-u_3v_2)^2+(u_3v_1-u_1v_3)^2+(u_1v_2-u_2v_1)^2=\sum_{i\lt j}(u_iv_j-u_jv_i)^2\).`, S`Right side: \(\left(\sum u_i^2\right)\left(\sum v_j^2\right)-\left(\sum u_iv_i\right)^2\). The terms \(u_i^2v_i^2\) cancel, leaving \(\sum_{i\lt j}\left(u_i^2v_j^2+u_j^2v_i^2-2u_iv_iu_jv_j\right)=\sum_{i\lt j}(u_iv_j-u_jv_i)^2\).`, S`Substitute \(\vec u\cdot\vec v=\|\vec u\|\|\vec v\|\cos\theta\): \(\|\vec u\times\vec v\|^2=\|\vec u\|^2\|\vec v\|^2(1-\cos^2\theta)=\|\vec u\|^2\|\vec v\|^2\sin^2\theta\).`],
      S`\(\|\vec u\times\vec v\|=\|\vec u\|\|\vec v\|\sin\theta\) (since \(\sin\theta\ge0\) on \([0,\pi]\))`],
    ["Volume of a parallelepiped", S`Find the volume of the box (parallelepiped) with edges \(\vec u=(1,0,2)\), \(\vec v=(2,1,0)\), \(\vec w=(0,3,1)\).`,
      [S`Base: the parallelogram on \(\vec v,\vec w\), area \(\|\vec v\times\vec w\|\). Height: the part of \(\vec u\) along the normal \(\vec v\times\vec w\). So volume \(=|\vec u\cdot(\vec v\times\vec w)|\).`, S`\(\vec v\times\vec w=(1\cdot1-0\cdot3,\ 0\cdot0-2\cdot1,\ 2\cdot3-1\cdot0)=(1,-2,6)\).`, S`\(\vec u\cdot(1,-2,6)=1+0+12=13\).`],
      S`volume \(=13\)`,
      vfig(scene3(4.5, { segs: [[[1, 0, 2], [3, 1, 2], [3, 4, 3], [1, 3, 3], [1, 0, 2]], [[2, 1, 0], [2, 4, 1], [0, 3, 1]], [[2, 1, 0], [3, 1, 2]], [[2, 4, 1], [3, 4, 3]], [[0, 3, 1], [1, 3, 3]]].map((e) => seg3(e, { color: "gray", w: 1.2 })), arrows: [a3([0, 0, 0], [1, 0, 2], { color: "blue", vl: "u", off: 14 }), a3([0, 0, 0], [2, 1, 0], { color: "red", vl: "v", off: 16 }), a3([0, 0, 0], [0, 3, 1], { color: "green", vl: "w", off: -14 })] }))],
  ], [
    q("hard", S`Find the volume of the parallelepiped with edges \((1,1,0)\), \((0,2,1)\), \((3,0,1)\).`, num(5),
      "|u · (v × w)|.", [S`\((0,2,1)\times(3,0,1)=(2,3,-6)\).`, S`\((1,1,0)\cdot(2,3,-6)=5\).`], S`\(5\)`),
    q("hard", S`Find the area of the triangle \(O(0,0,0)\), \(B(2,1,2)\), \(C(-1,2,2)\) (3 decimals).`, num(Math.sqrt(65) / 2, 0.002),
      "Half the length of b × c.", [S`\(\vec b\times\vec c=(-2,-6,5)\), length \(\sqrt{65}\).`], S`\(\tfrac{\sqrt{65}}2\approx4.031\)`),
    q("hard", S`For which \(k\) do \((1,2,k)\), \((0,1,1)\) and \((2,1,0)\) lie in one plane through \(O\)?`, num(1.5),
      "Coplanar ⇔ zero volume.", [S`\((0,1,1)\times(2,1,0)=(-1,2,-2)\).`, S`\(-1+4-2k=0\).`], S`\(1.5\)`),
  ]),

  wrapUp({
    qas: [
      ["Why only ℝ³?", "In ℝ³, two non-parallel vectors leave exactly one perpendicular direction. In ℝⁿ with n > 3 there are many, so no single vector is singled out."],
      ["How do I remember the formula?", "Cover each column of the 2 × 3 array (u over v) in turn and take the 2 × 2 determinant, with a minus sign on the middle component."],
      ["What does ‖u × v‖ measure?", "The area of the parallelogram spanned by u and v."],
      ["How do I know which way u × v points?", "Right-hand rule; and v × u points the opposite way."],
      ["What is u · (v × w)?", "Plus or minus the volume of the box with edges u, v, w. It is 0 exactly when the three vectors lie in one plane."],
    ],
    summary: [
      "u × v = (u₂v₃ − u₃v₂, u₃v₁ − u₁v₃, u₁v₂ − u₂v₁).",
      "u × v ⊥ u and v; v × u = −(u × v); not associative.",
      "‖u × v‖ = ‖u‖‖v‖sin θ = parallelogram area; triangle = half.",
      "Volume of a box = |u · (v × w)|.",
    ],
    next: "1.6 uses a normal vector — often a cross product — to write the scalar equation of a plane.",
  }),
];
