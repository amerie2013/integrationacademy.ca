// LINALG1 1.3 — Length, Distance and Unit Vectors: the norm in Rⁿ (Pythagoras twice in R³), its basic properties
// (positivity, scaling, triangle inequality stated), distance between points, normalising, vectors of a given
// length in a given direction, and distance as a measure of similarity for data vectors.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, q, num, choice, hard, definition, theorem, vec, vecT } from "./lib.mjs";
import { vfig, scene3, a3, pt3, seg3 } from "./vecfig.mjs";

export const TITLE = "1.3 Length, Distance and Unit Vectors";
export const ID = "11a10001-0001-4001-8001-000000000103";

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "📏",
    title: "Length, Distance and Unit Vectors",
    overview: S`How long is a vector in \(\mathbb R^5\)? We cannot draw it, but we can extend Pythagoras: square the components, add, take the square root. That number — the <strong>norm</strong> — gives distances between points, lets us shrink any nonzero vector to length 1 (a <strong>unit vector</strong>), and measures how far apart two data vectors are.`,
    goals: [
      "compute the norm of a vector in \\(\\mathbb R^n\\);",
      "use \\(\\|c\\vec x\\|=|c|\\,\\|\\vec x\\|\\) and the triangle inequality;",
      "find the distance between two points;",
      "normalise a vector and build a vector of a given length in a given direction;",
      "solve problems where an unknown is fixed by a length condition.",
    ],
    outcomes: "geometry of \\(\\mathbb R^n\\): norm, distance and unit vectors",
    prior: [
      [S`Hypotenuse of a right triangle with legs 5 and 12?`, S`\(\sqrt{25+144}=13\).`],
      [S`Simplify \(\sqrt{50}\).`, S`\(5\sqrt2\).`],
      [S`\(|-4|\)?`, S`\(4\).`],
    ],
    words: [
      ["Norm (length)", "\\(\\|\\vec x\\|=\\sqrt{x_1^2+\\dots+x_n^2}\\)", "\\(\\|(3,4)\\|=5\\)"],
      ["Distance", "\\(d(\\vec x,\\vec y)=\\|\\vec x-\\vec y\\|\\)", "length of \\(\\overrightarrow{PQ}\\)"],
      ["Unit vector", "a vector of norm 1", "\\((0.6,0.8)\\)"],
      ["Normalise", "divide by the norm", "\\(\\vec x/\\|\\vec x\\|\\)"],
      ["Triangle inequality", "\\(\\|\\vec x+\\vec y\\|\\le\\|\\vec x\\|+\\|\\vec y\\|\\)", "a side ≤ the other two"],
    ],
  }),

  section("📌 The norm", S`
  ${definition("norm", S`The <strong>norm</strong> (length, magnitude) of \(\vec x=(x_1,\dots,x_n)\) is \(\|\vec x\|=\sqrt{x_1^2+x_2^2+\dots+x_n^2}\).`)}
  ${vfig(scene3(5, { arrows: [a3([0, 0, 0], [3, 4, 3], { color: "blue", vl: "x", off: -16 })], segs: [seg3([[0, 0, 0], [3, 4, 0]], { color: "amber", w: 2.2 }), seg3([[3, 0, 0], [3, 4, 0]], { dash: true, w: 1.1 }), seg3([[0, 4, 0], [3, 4, 0]], { dash: true, w: 1.1 }), seg3([[3, 4, 0], [3, 4, 3]], { dash: true, w: 1.4, color: "red" })], points: [pt3([3, 4, 3], "(3, 4, 3)", { color: "blue" })], texts: [{ x: 1.1, y: 1.2, t: "5", color: "amber" }] }), "Pythagoras twice: the floor diagonal is √(3² + 4²) = 5, then ‖x‖ = √(5² + 3²) = √34")}
  <p>In \(\mathbb R^2\) this is the hypotenuse; in \(\mathbb R^3\) it is Pythagoras applied twice. In \(\mathbb R^n\) we simply <em>define</em> length this way, and every familiar property survives.</p>
  ${theorem("properties of the norm", S`For \(\vec x,\vec y\in\mathbb R^n\) and \(c\in\mathbb R\): (1) \(\|\vec x\|\ge0\), with \(\|\vec x\|=0\) only when \(\vec x=\vec 0\); (2) \(\|c\vec x\|=|c|\,\|\vec x\|\); (3) <strong>triangle inequality</strong> \(\|\vec x+\vec y\|\le\|\vec x\|+\|\vec y\|\).`,
    S`(1) A sum of squares is \(\ge0\), and it is 0 only if every square is 0. (2) \(\|c\vec x\|=\sqrt{c^2x_1^2+\dots+c^2x_n^2}=\sqrt{c^2}\sqrt{x_1^2+\dots+x_n^2}=|c|\,\|\vec x\|\). (3) is proved in 1.4 with the dot product (Cauchy–Schwarz).`)}`),

  section("📌 Distance and unit vectors", S`
  ${definition("distance", S`The distance between \(\vec x\) and \(\vec y\) (or between the points they locate) is \(d(\vec x,\vec y)=\|\vec x-\vec y\|\).`)}
  ${definition("unit vector", S`A unit vector has norm 1. For \(\vec x\ne\vec 0\), \(\hat x=\dfrac{1}{\|\vec x\|}\vec x\) is the unit vector in the direction of \(\vec x\) (this is <strong>normalising</strong>). The standard basis vectors \(\vec e_1,\dots,\vec e_n\) are unit vectors.`)}
  ${vfig({ view: { xmin: -1.4, xmax: 5, ymin: -1.4, ymax: 4.4 }, step: 1, segs: [{ pts: Array.from({ length: 61 }, (_, i) => [Math.cos((i * Math.PI) / 30), Math.sin((i * Math.PI) / 30)]), color: "gray", dash: true }], arrows: [{ from: [0, 0], to: [4, 3], vl: "x", label: "length 5", off: -16 }, { from: [0, 0], to: [0.8, 0.6], color: "red", w: 4 }], texts: [{ x: 1.25, y: 0.3, t: "x̂ = (0.8, 0.6)", color: "red", anchor: "start" }] }, "normalising (4, 3): divide by 5 to land on the unit circle")}
  <p>To get a vector of length \(L\) in the direction of \(\vec x\), scale the unit vector: \(L\hat x\). The opposite direction is \(-L\hat x\).</p>
  ${keyIdea(S`Distance is the length of a difference. Normalising keeps the direction and throws away the length; multiplying a unit vector by \(L\) puts the length back.`)}`),

  section("📌 Explore", S`<p>Change the components and watch Pythagoras work twice: the amber floor diagonal, then the full length. The red arrow is the unit vector. Then switch to the triangle inequality and find the only angle where \(\|\vec u+\vec v\|=\|\vec u\|+\|\vec v\|\).</p>`),
  widget("laNorm", { init: { mode: "length" } }),

  section("📌 Distances between data vectors", S`
  <p>Three students' marks on four tests are \(\vec a=(70,82,65,90)\), \(\vec b=(72,80,68,88)\) and \(\vec c=(95,60,85,70)\). Then \(d(\vec a,\vec b)=\sqrt{4+4+9+4}=\sqrt{21}\approx4.6\) while \(d(\vec a,\vec c)=\sqrt{625+484+400+400}\approx43.7\): \(\vec a\) and \(\vec b\) have similar profiles. Recommender systems and image search use exactly this idea in hundreds of dimensions.</p>
  ${watchOut([
    "Square every component before adding; ‖(3, −4)‖ = 5, not √(3 − 4).",
    "‖cx‖ = |c|‖x‖ — a negative scalar does not give a negative length.",
    "‖x + y‖ is usually NOT ‖x‖ + ‖y‖.",
    "The zero vector cannot be normalised.",
    "Distance uses the difference of the two vectors, in either order.",
  ])}`),

  examples([
    ["A norm in ℝ³", S`Find \(\|(2,-3,6)\|\).`,
      [S`\(2^2+(-3)^2+6^2=4+9+36=49\).`],
      S`\(\|(2,-3,6)\|=7\)`],
    ["A norm in ℝ⁵", S`Find \(\|(1,-1,2,0,3)\|\).`,
      [S`\(1+1+4+0+9=15\).`],
      S`\(\sqrt{15}\approx3.87\)`],
    ["Distance between points", S`Find the distance between \(P(1,4,-2)\) and \(Q(5,1,10)\).`,
      [S`\(\vec q-\vec p=(4,-3,12)\).`, S`\(\sqrt{16+9+144}=\sqrt{169}\).`],
      S`\(d=13\)`],
    ["Normalising and rescaling", S`Find the unit vector in the direction of \(\vec x=(6,-2,3)\), and the vector of length 21 pointing opposite to \(\vec x\).`,
      [S`\(\|\vec x\|=\sqrt{36+4+9}=7\), so \(\hat x=\left(\tfrac67,-\tfrac27,\tfrac37\right)\).`, S`Length 21, opposite: \(-21\hat x=-3\vec x\).`],
      S`\(\hat x=\left(\tfrac67,-\tfrac27,\tfrac37\right)\); \((-18,6,-9)\)`],
    ["A scalar from a length", S`Find every \(c\) with \(\|c(1,2,-2)\|=12\).`,
      [S`\(\|(1,2,-2)\|=\sqrt{1+4+4}=3\).`, S`\(|c|\times3=12\), so \(|c|=4\).`],
      S`\(c=4\) or \(c=-4\)`],
  ]),

  practice([
    q("norm", S`Find \(\|(-4,0,3)\|\).`, num(5),
      "Square, add, square root.", [S`\(\sqrt{16+0+9}\).`], S`\(5\)`),
    q("distance in ℝ⁴", S`Find the distance between \(A(2,-1,0,3)\) and \(B(3,1,-2,3)\).`, num(3),
      "Norm of b − a.", [S`\(\vec b-\vec a=(1,2,-2,0)\); \(\sqrt{1+4+4+0}\).`], S`\(3\)`),
    q("unit vector", S`Give the unit vector in the direction of \((0,-5,12)\) (fractions or 4-decimal values).`, vecT(0.0005, 0, -5 / 13, 12 / 13),
      "Divide by the norm, 13.", [S`\(\sqrt{25+144}=13\).`], S`\(\left(0,-\tfrac5{13},\tfrac{12}{13}\right)\)`),
    q("given length", S`Find the vector of length 10 in the direction of \((3,4)\).`, vec(6, 8),
      "Unit vector times 10.", [S`\(\hat x=(0.6,0.8)\); \(10\hat x\).`], S`\((6,8)\)`),
    q("unknown component", S`Find \(k\gt0\) with \(\|(k,4,k)\|=6\) (3 decimals).`, num(Math.sqrt(10), 0.001),
      "Square both sides.", [S`\(2k^2+16=36\Rightarrow k^2=10\).`], S`\(\sqrt{10}\approx3.162\)`),
  ]),

  ...hard([
    ["Norm facts from the definition", S`Prove that \(\|c\vec x\|=|c|\,\|\vec x\|\) and that \(\|\vec x\|=0\) only when \(\vec x=\vec 0\). Then show that \(\left\|\dfrac{\vec x}{\|\vec x\|}\right\|=1\) for every \(\vec x\ne\vec 0\).`,
      [S`\(\|c\vec x\|^2=\sum(cx_i)^2=c^2\sum x_i^2=c^2\|\vec x\|^2\); take square roots, using \(\sqrt{c^2}=|c|\).`, S`If \(\sum x_i^2=0\), each \(x_i^2\ge0\) must be 0, so every \(x_i=0\).`, S`With \(c=\frac1{\|\vec x\|}\gt0\): \(\|c\vec x\|=\frac1{\|\vec x\|}\|\vec x\|=1\).`],
      S`normalising always produces a unit vector`],
    ["Points at a given distance", S`Find every point on the \(x_1\)-axis at distance 7 from \(P(2,3,6)\).`,
      [S`A point on the \(x_1\)-axis is \((t,0,0)\).`, S`\((t-2)^2+3^2+6^2=49\Rightarrow(t-2)^2=4\).`, S`\(t-2=\pm2\), so \(t=0\) or \(t=4\).`],
      S`\((0,0,0)\) and \((4,0,0)\)`,
      vfig(scene3(5, { segs: [seg3([[0, 0, 0], [2, 3, 6]], { color: "red", dash: true, w: 1.8 }), seg3([[4, 0, 0], [2, 3, 6]], { color: "red", dash: true, w: 1.8 })], points: [pt3([2, 3, 6], "P(2, 3, 6)", { color: "blue" }), pt3([0, 0, 0], "", { color: "red" }), pt3([4, 0, 0], "(4, 0, 0)", { color: "red" })] }))],
  ], [
    q("hard", S`Find \(c\gt0\) with \(\|(c,c,c,c)\|=10\) in \(\mathbb R^4\).`, num(5),
      "The norm is √(4c²).", [S`\(2c=10\).`], S`\(5\)`),
    q("hard", S`Find the point at distance 6 from \(O\) along the ray from \(O\) through \(P(1,2,2)\).`, vec(2, 4, 4),
      "Unit vector toward P, times 6.", [S`\(\|\vec p\|=3\); \(6\cdot\frac13(1,2,2)\).`], S`\((2,4,4)\)`),
    q("hard", S`Triangle \(A(1,0,2)\), \(B(3,4,-2)\), \(C(5,2,0)\): where is its right angle?`, choice(["at C", "at A", "at B", "there is none"], 0),
      "Compare the squared side lengths.", [S`\(AB^2=36\), \(AC^2=24\), \(BC^2=12\), and \(36=24+12\).`, S`The longest side \(AB\) is opposite \(C\).`], "at C"),
  ]),

  wrapUp({
    qas: [
      ["Why is the norm defined with squares?", "It extends Pythagoras: in ℝ² and ℝ³ it is exactly the length of the arrow, and it keeps every property of length in ℝⁿ."],
      ["What is the distance between two points?", "The norm of their difference, ‖q − p‖."],
      ["How do I make a unit vector?", "Divide a nonzero vector by its norm."],
      ["When is ‖x + y‖ = ‖x‖ + ‖y‖?", "Only when one vector is a nonnegative multiple of the other (they point the same way)."],
      ["Can a vector in ℝ¹⁰⁰ have length 1?", "Yes — for example e₁, or (0.1, 0.1, …, 0.1) since 100 × 0.01 = 1."],
    ],
    summary: [
      "‖x‖ = √(x₁² + … + xₙ²); ‖x‖ = 0 only for x = 0.",
      "‖cx‖ = |c|‖x‖ and ‖x + y‖ ≤ ‖x‖ + ‖y‖.",
      "d(x, y) = ‖x − y‖.",
      "x̂ = x/‖x‖; a vector of length L along x is L x̂.",
    ],
    next: "1.4 introduces the dot product, which gives angles, orthogonality and a proof of the triangle inequality.",
  }),
];
