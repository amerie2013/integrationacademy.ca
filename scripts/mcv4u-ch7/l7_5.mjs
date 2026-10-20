// MCV4U 7.5 — The Cross Product and Its Properties (rebuild of "The Cross Product"): the component formula, the
// right-hand rule, |a × b| = |a||b| sin θ and parallelogram area, i × j = k, and the algebraic properties
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard } from "./lib.mjs";
import { vfig, p3, axes3, merge } from "./vecfig.mjs";

export const TITLE = "7.5 The Cross Product and Its Properties";
export const ID = "81c2fecf-ef74-4437-8626-fbb62dad59d3";

const S = String.raw;
const V3 = { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 5.8 }, grid: false, axes: false };
const add3 = (a, b) => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
const para = (a, b, fill = "#ede9fe") => ({ polys: [{ pts: [p3(0, 0, 0), p3(...a), p3(...add3(a, b)), p3(...b)], fill, stroke: "gray" }] });
export const blocks = () => [
  intro({
    icon: "✖️",
    title: "The Cross Product and Its Properties",
    overview: S`The dot product turns two vectors into a number. The <strong>cross product</strong>, defined only in three-space, turns two vectors into a new <em>vector</em> \(\vec a\times\vec b\) that is perpendicular to both of them. Its direction follows the right-hand rule, and its length \(|\vec a||\vec b|\sin\theta\) equals the area of the parallelogram the two vectors span. In components: \(\vec a\times\vec b=[a_2b_3-a_3b_2,\ a_3b_1-a_1b_3,\ a_1b_2-a_2b_1]\).`,
    goals: [
      "compute a cross product from components;",
      "use the right-hand rule for its direction;",
      "use |a × b| = |a||b| sin θ and find parallelogram areas;",
      "recognize i × j = k and the other unit-vector products;",
      "use and test the properties of the cross product.",
    ],
    curriculum: "C2.6 (perform the cross product in Cartesian form; |a × b| = |a||b| sin θ); C2.7 (investigate properties of the cross product)",
    prior: [
      [S`\(\sin90^\circ\)?`, S`\(1\).`],
      [S`Area of a parallelogram with sides 4, 5 and angle \(30^\circ\)?`, S`\(4\times5\times\sin30^\circ=10\).`],
      [S`\([1,2,3]\cdot[3,0,-1]\)?`, S`\(0\).`],
    ],
    words: [
      ["Cross product", "\\(\\vec a\\times\\vec b\\)", "a vector, three-space only"],
      ["Right-hand rule", "fingers a → b, thumb along a × b", ""],
      ["Magnitude", "\\(|\\vec a||\\vec b|\\sin\\theta\\)", "parallelogram area"],
      ["Anticommutative", "\\(\\vec b\\times\\vec a=-\\vec a\\times\\vec b\\)", ""],
    ],
  }),

  section("📌 A vector perpendicular to both", S`
  ${vfig(merge(V3, axes3(4.4), para([3, 0, 0], [0, 2.5, 0]), { arrows: [{ from: [0, 0], to: p3(3, 0, 0), vl: "a", off: 16 }, { from: [0, 0], to: p3(0, 2.5, 0), vl: "b", color: "blue", off: 16 }, { from: [0, 0], to: p3(0, 0, 4), vl: "a×b", color: "red", off: -18 }] }), "a × b is perpendicular to the parallelogram of a and b; its length is that parallelogram's area")}
  ${table(["Property", "Statement"], [
    ["direction", "perpendicular to \\(\\vec a\\) and \\(\\vec b\\); right-hand rule"],
    ["magnitude", "\\(|\\vec a\\times\\vec b|=|\\vec a||\\vec b|\\sin\\theta\\)"],
    ["order", "\\(\\vec b\\times\\vec a=-(\\vec a\\times\\vec b)\\)"],
    ["scalars, sums", "\\((k\\vec a)\\times\\vec b=k(\\vec a\\times\\vec b)\\); \\(\\vec a\\times(\\vec b+\\vec c)=\\vec a\\times\\vec b+\\vec a\\times\\vec c\\)"],
    ["collinear vectors", "\\(\\vec a\\times\\vec b=\\vec 0\\) (in particular \\(\\vec a\\times\\vec a=\\vec 0\\))"],
    ["unit vectors", "\\(\\vec i\\times\\vec j=\\vec k\\), \\(\\vec j\\times\\vec k=\\vec i\\), \\(\\vec k\\times\\vec i=\\vec j\\)"],
  ])}
  ${keyIdea(S`To compute \(\vec a\times\vec b\), write the components of \(\vec a\) above those of \(\vec b\) twice in a row and cross-multiply: the first component skips the first column (\(a_2b_3-a_3b_2\)), and so on. Always check your answer: it must have a dot product of 0 with both \(\vec a\) and \(\vec b\). The cross product is <strong>not</strong> associative: \((\vec a\times\vec b)\times\vec c\) usually differs from \(\vec a\times(\vec b\times\vec c)\).`)}`),

  section("📌 Explore", S`<p>Set the components of \(\vec a\) and \(\vec b\) and turn the view: the red cross product always stands perpendicular to the shaded parallelogram. Swap the order to see it flip, and make \(\vec b\) a multiple of \(\vec a\) to see it vanish.</p>`),

  widget("crossLab", { init: { a: [3, 0, 0], b: [1, 3, 0] } }),

  section("📌 Computing and checking", S`
  <p>Use the component formula carefully — the middle component is the easy one to get wrong. Then check perpendicularity with two dot products. For areas, take the magnitude of the cross product; a triangle is half of the parallelogram.</p>
  ${watchOut([
    "The middle component is a₃b₁ − a₁b₃ (note the order).",
    "a × b and b × a point in opposite directions.",
    "The cross product exists only for three-space vectors.",
    "|a × b| uses sin θ; the dot product uses cos θ.",
    "A zero cross product means the vectors are collinear (or one is zero).",
  ])}`),

  examples([
    ["Components", S`Find \([2,-1,3]\times[1,4,-2]\) and check the answer.`,
      [S`\([(-1)(-2)-(3)(4),\ (3)(1)-(2)(-2),\ (2)(4)-(-1)(1)]=[2-12,\ 3+4,\ 8+1]\).`, S`Check with \(\vec a\): \(2(-10)+(-1)(7)+3(9)=0\); with \(\vec b\): \(-10+28-18=0\).`],
      S`\([-10,7,9]\)`],
    ["Unit vectors", S`Find \(\vec i\times\vec j\), \(\vec j\times\vec i\) and \(\vec k\times\vec k\).`,
      [S`\([1,0,0]\times[0,1,0]=[0,0,1]=\vec k\).`, S`Reversing the order: \(-\vec k\). A vector crossed with itself gives \(\vec 0\).`],
      S`\(\vec k\), \(-\vec k\), \(\vec 0\)`,
      vfig(merge(V3, axes3(4.2), { arrows: [{ from: [0, 0], to: p3(2, 0, 0), vl: "i", color: "violet", off: 16 }, { from: [0, 0], to: p3(0, 2, 0), vl: "j", color: "blue", off: 16 }, { from: [0, 0], to: p3(0, 0, 2), vl: "k", color: "red", off: -16 }] }))],
    ["Magnitude from the angle", S`\(|\vec a|=5\), \(|\vec b|=4\) and the angle between them is \(30^\circ\). Find \(|\vec a\times\vec b|\).`,
      [S`\(|\vec a\times\vec b|=5\times4\times\sin30^\circ\).`],
      S`\(10\)`],
    ["Area of a parallelogram", S`Find the area of the parallelogram spanned by \(\vec a=[3,0,2]\) and \(\vec b=[1,2,-1]\).`,
      [S`\(\vec a\times\vec b=[0(-1)-2(2),\ 2(1)-3(-1),\ 3(2)-0(1)]=[-4,5,6]\).`, S`Area \(=\sqrt{16+25+36}=\sqrt{77}\).`],
      S`\(\sqrt{77}\approx8.77\) square units`,
      vfig(merge(V3, axes3(4.2), para([3, 0, 2], [1, 2, -1]), { arrows: [{ from: [0, 0], to: p3(3, 0, 2), vl: "a", off: 16 }, { from: [0, 0], to: p3(1, 2, -1), vl: "b", color: "blue", off: 16 }] }, { view: { xmin: -3.8, xmax: 5, ymin: -3.2, ymax: 5 } }))],
    ["Testing for collinear vectors", S`Are \([2,-4,6]\) and \([-3,6,-9]\) collinear?`,
      [S`\([(-4)(-9)-6(6),\ 6(-3)-2(-9),\ 2(6)-(-4)(-3)]=[0,0,0]\).`],
      S`yes: the cross product is \(\vec 0\) (indeed the second is \(-1.5\) times the first)`],
  ]),

  practice([
    q("component", S`Find the z-component of \([1,2,0]\times[3,1,0]\).`, num(-5),
      "a₁b₂ − a₂b₁.", [S`\(1(1)-2(3)\).`], S`\(-5\)`),
    q("magnitude", S`\(|\vec a|=6\), \(|\vec b|=2\), and they are perpendicular. Find \(|\vec a\times\vec b|\).`, num(12),
      "sin 90° = 1.", [S`\(6\times2\times1\).`], S`\(12\)`),
    q("order", S`\(\vec b\times\vec a=\)`, choice([S`\(-(\vec a\times\vec b)\)`, S`\(\vec a\times\vec b\)`, S`\(\vec a\cdot\vec b\)`, S`\(\vec 0\)`], 0),
      "Anticommutative.", ["Swapping reverses the direction."], S`\(-(\vec a\times\vec b)\)`),
    q("component", S`Find the x-component of \([0,1,2]\times[3,0,1]\).`, num(1),
      "a₂b₃ − a₃b₂.", [S`\(1(1)-2(0)\).`], S`\(1\)`),
    q("unit", S`Find \(|\vec i\times\vec k|\).`, num(1),
      "Perpendicular unit vectors.", [S`\(\vec i\times\vec k=-\vec j\).`], S`\(1\)`),
  ]),

  ...hard([
    ["Not associative", S`Show with \(\vec a=\vec i\), \(\vec b=\vec i\), \(\vec c=\vec j\) that \(\vec a\times(\vec b\times\vec c)\ne(\vec a\times\vec b)\times\vec c\).`,
      [S`\(\vec b\times\vec c=\vec i\times\vec j=\vec k\), so \(\vec a\times(\vec b\times\vec c)=\vec i\times\vec k=-\vec j\).`, S`\(\vec a\times\vec b=\vec i\times\vec i=\vec 0\), so \((\vec a\times\vec b)\times\vec c=\vec 0\).`],
      S`\(-\vec j\ne\vec 0\): the cross product is not associative`,
      vfig(merge(V3, axes3(4.2), { arrows: [{ from: [0, 0], to: p3(2.4, 0, 0), vl: "i", off: 16 }, { from: [0, 0], to: p3(0, 0, 2.4), vl: "k", color: "blue", off: -16 }, { from: [0, 0], to: p3(0, -2.4, 0), color: "red", label: "i × k = −j", off: 16 }] }))],
    ["A unit vector perpendicular to two vectors", S`Find a unit vector perpendicular to both \([1,2,2]\) and \([2,-1,0]\).`,
      [S`\([1,2,2]\times[2,-1,0]=[2(0)-2(-1),\ 2(2)-1(0),\ 1(-1)-2(2)]=[2,4,-5]\).`, S`Its length is \(\sqrt{45}=3\sqrt5\); divide.`],
      S`\(\frac{1}{3\sqrt5}[2,4,-5]\approx[0.30,0.60,-0.75]\) (or its opposite)`,
      vfig(merge(V3, axes3(4.2), para([1, 2, 2], [2, -1, 0]), { arrows: [{ from: [0, 0], to: p3(1, 2, 2), vl: "a", off: -16 }, { from: [0, 0], to: p3(2, -1, 0), vl: "b", color: "blue", off: 16 }, { from: [0, 0], to: p3(0.9, 1.8, -2.25), color: "red", label: "a × b (scaled)", off: 16 }] }, { view: { xmin: -3.8, xmax: 5, ymin: -3.6, ymax: 5 } }))],
  ], [
    q("hard", S`Find the area of the triangle with vertices \(O\), \((2,0,0)\) and \((0,3,0)\).`, num(3),
      "Half the parallelogram.", [S`\(\frac12|[2,0,0]\times[0,3,0]|=\frac12(6)\).`], S`\(3\)`),
    q("hard", S`Find \(k\) so that \([1,k,2]\times[2,4,4]=\vec 0\).`, num(2),
      "The vectors must be collinear.", [S`\([2,4,4]=2[1,2,2]\).`], S`\(2\)`),
    q("hard", S`\(|\vec a|=3\) and \(|\vec b|=4\). Find \(|\vec a\times\vec b|^2+(\vec a\cdot\vec b)^2\).`, num(144),
      "sin² θ + cos² θ = 1.", [S`\(9\times16\).`], S`\(144\)`),
  ]),

  wrapUp({
    qas: [
      ["What does a × b give?", "A vector perpendicular to both a and b, whose length is the area of their parallelogram."],
      ["How do I find its direction?", "Right-hand rule: curl your fingers from a to b; your thumb points along a × b."],
      ["How do I check a computed cross product?", "Dot it with a and with b: both results must be 0."],
      ["Is a × b = b × a?", "No: b × a = −(a × b). The cross product is not commutative, and not associative either."],
      ["When is the cross product zero?", "When the vectors are collinear (θ = 0° or 180°) or one of them is zero."],
    ],
    summary: [
      "a × b = [a₂b₃ − a₃b₂, a₃b₁ − a₁b₃, a₁b₂ − a₂b₁].",
      "|a × b| = |a||b| sin θ = parallelogram area.",
      "b × a = −(a × b); i × j = k.",
      "Collinear ⇔ a × b = 0.",
    ],
    next: "7.6 applies the dot and cross products.",
  }),
];
