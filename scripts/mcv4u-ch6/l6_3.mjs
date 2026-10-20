// MCV4U 6.3 — Multiplying a Vector by a Scalar (NEW lesson): magnitude and direction of kv, unit vectors,
// collinear vectors and points, the distributive and associative laws, linear combinations, and simple
// geometric proofs (midpoints, dividing a segment in a ratio)
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard } from "./lib.mjs";
import { vfig, brg } from "./vecfig.mjs";

export const TITLE = "6.3 Multiplying a Vector by a Scalar";
export const ID = "6d4fc006-0001-4001-8001-000000000603";

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "✖️",
    title: "Multiplying a Vector by a Scalar",
    overview: S`Doubling a velocity doubles the speed and keeps the direction; reversing it keeps the speed and turns it around. Multiplying a vector \(\vec v\) by a real number \(k\) gives \(k\vec v\): its magnitude is \(|k|\,|\vec v|\), and it points the same way as \(\vec v\) when \(k\gt0\) and the opposite way when \(k\lt0\). Scalar multiples are always parallel (collinear), which makes them a powerful tool for proving facts about lines and shapes.`,
    goals: [
      "find the magnitude and direction of kv;",
      "write a unit vector in the direction of a given vector;",
      "simplify expressions such as 3(2u − v) − 2(u + 4v);",
      "decide whether vectors or points are collinear;",
      "use vectors to prove geometric results.",
    ],
    curriculum: "C2.1 (perform scalar multiplication on geometric vectors); C2.2 (solve problems using vector operations)",
    prior: [
      [S`\(|-3|\)?`, S`\(3\).`],
      [S`Expand \(3(2a-b)\).`, S`\(6a-3b\).`],
      [S`Midpoint of a segment divides it in the ratio?`, S`\(1:1\).`],
    ],
    words: [
      ["Scalar multiple", "\\(k\\vec v\\)", "length \\(|k||\\vec v|\\)"],
      ["Collinear vectors", "parallel: one is a multiple of the other", "\\(\\vec u=k\\vec v\\)"],
      ["Unit vector", "magnitude 1", "\\(\\hat v=\\frac{\\vec v}{|\\vec v|}\\)"],
      ["Linear combination", "\\(s\\vec u+t\\vec v\\)", "scalars s, t"],
    ],
  }),

  section("📌 What k does to v", S`
  ${vfig({ view: { xmin: -5, xmax: 7, ymin: -3, ymax: 5.2 }, grid: false, axes: false, arrows: [{ from: [0, 0], to: [2, 1], vl: "v", off: -16 }, { from: [0, 2.2], to: [5, 4.7], color: "red", label: "2.5v" }, { from: [0, -0.6], to: [-4, -2.6], color: "blue", label: "−2v", off: -16 }], segs: [{ pts: [[-5, -2.5], [7, 3.5]], dash: true, color: "gray" }] }, "2.5v is longer and parallel to v; −2v is twice as long and points the opposite way")}
  ${table(["k", "magnitude of kv", "direction of kv"], [
    ["\\(k\\gt1\\)", "stretched", "same as \\(\\vec v\\)"],
    ["\\(0\\lt k\\lt1\\)", "shrunk", "same as \\(\\vec v\\)"],
    ["\\(k=0\\)", "0", "the zero vector"],
    ["\\(k\\lt0\\)", "\\(|k||\\vec v|\\)", "opposite to \\(\\vec v\\)"],
  ])}
  ${keyIdea(S`\(|k\vec v|=|k|\,|\vec v|\). Two nonzero vectors are collinear exactly when one is a scalar multiple of the other. Scalars obey the usual algebra: \(k(\vec u+\vec v)=k\vec u+k\vec v\), \((a+b)\vec v=a\vec v+b\vec v\), \(a(b\vec v)=(ab)\vec v\).`)}`),

  section("📌 Explore", S`<p>Slide \(k\) and watch \(k\vec u\) stretch, shrink and reverse — always along the same dashed line. Then switch to \(s\vec u+t\vec v\): by choosing \(s\) and \(t\) you can make the red vector point anywhere in the plane.</p>`),

  widget("scalarLab", { init: { k: 2, s: 1, t: 1 } }),

  section("📌 Using scalar multiples", S`
  <p>To show three points \(A\), \(B\), \(C\) lie on one line, show \(\overrightarrow{AB}\) is a multiple of \(\overrightarrow{BC}\) (or of \(\overrightarrow{AC}\)). To find a unit vector, divide by the magnitude. In geometry proofs, write every vector in terms of two non-collinear "building block" vectors, simplify, and compare.</p>
  ${watchOut([
    "A negative scalar reverses the direction; the magnitude uses |k|.",
    "Collinear vectors can point in opposite directions.",
    "Dividing by the magnitude gives length 1 — only for a nonzero vector.",
    "Collinear vectors that share a point mean collinear points.",
    "Collect like terms: only multiples of the same vector combine.",
  ])}`),

  examples([
    ["Describing −2u", S`\(\vec u\) has magnitude 3 and a true bearing of \(050^\circ\). Describe \(-2\vec u\).`,
      [S`\(|-2\vec u|=2\times3=6\).`, S`The negative scalar reverses the direction: \(50^\circ+180^\circ=230^\circ\).`],
      S`magnitude 6, bearing \(230^\circ\)`,
      vfig({ view: { xmin: -5.5, xmax: 3.5, ymin: -4.5, ymax: 2.8 }, north: [0, 0, 2.6], arrows: [{ from: [0, 0], to: brg(3, 50), vl: "u", label: "3" }, { from: [0, 0], to: brg(6, 230), color: "red", vl: "−2u", label: "6", off: -16 }], arcs: [{ at: [0, 0], r: 1, a: 40, b: 90, label: "50°" }] })],
    ["Unit vectors", S`\(|\vec v|=8\). Write the unit vector in the direction of \(\vec v\) and the unit vector opposite to \(\vec v\).`,
      [S`Divide by the magnitude: \(\frac18\vec v\) has length \(\frac18\times8=1\).`, S`The opposite unit vector is \(-\frac18\vec v\).`],
      S`\(\frac18\vec v\) and \(-\frac18\vec v\)`],
    ["Simplifying", S`Simplify \(3(2\vec u-\vec v)-2(\vec u+4\vec v)\).`,
      [S`Expand: \(6\vec u-3\vec v-2\vec u-8\vec v\).`, S`Collect: \((6-2)\vec u+(-3-8)\vec v\).`],
      S`\(4\vec u-11\vec v\)`],
    ["Collinear points", S`\(\overrightarrow{AB}=2\vec a-\vec b\) and \(\overrightarrow{BC}=6\vec a-3\vec b\). Show that \(A\), \(B\), \(C\) are collinear and find \(AB:BC\).`,
      [S`\(\overrightarrow{BC}=3(2\vec a-\vec b)=3\overrightarrow{AB}\), so the two vectors are parallel.`, S`They share the point \(B\), so the points are on one line, with \(BC=3AB\).`],
      S`collinear, \(AB:BC=1:3\)`,
      vfig({ view: { xmin: -0.5, xmax: 9, ymin: -0.8, ymax: 3.4 }, grid: false, axes: false, arrows: [{ from: [0, 0], to: [2, 0.75], vl: "AB" }, { from: [2, 0.75], to: [8, 3], color: "blue", label: "BC = 3AB", off: -16 }], points: [{ x: 0, y: 0, label: "A", dx: -6, dy: 18 }, { x: 2, y: 0.75, label: "B", dx: 2, dy: 20 }, { x: 8, y: 3, label: "C", dx: 8, dy: 4 }] })],
    ["The midpoint theorem", S`In \(\triangle ABC\), \(M\) and \(N\) are the midpoints of \(AB\) and \(AC\). Prove \(MN\parallel BC\) and \(MN=\frac12BC\).`,
      [S`Let \(\overrightarrow{AB}=\vec b\), \(\overrightarrow{AC}=\vec c\). Then \(\overrightarrow{AM}=\frac12\vec b\), \(\overrightarrow{AN}=\frac12\vec c\).`, S`\(\overrightarrow{MN}=\overrightarrow{AN}-\overrightarrow{AM}=\frac12(\vec c-\vec b)\), and \(\overrightarrow{BC}=\vec c-\vec b\).`, S`So \(\overrightarrow{MN}=\frac12\overrightarrow{BC}\): parallel and half as long.`],
      S`\(\overrightarrow{MN}=\frac12\overrightarrow{BC}\)`,
      vfig({ view: { xmin: -0.5, xmax: 8.5, ymin: -0.8, ymax: 5.2 }, grid: false, axes: false, segs: [{ pts: [[0, 0], [8, 0], [3, 4.8], [0, 0]], color: "gray" }], arrows: [{ from: [1.5, 2.4], to: [5.5, 2.4], color: "red", label: "MN", off: 14 }, { from: [0, 0], to: [8, 0], color: "blue", label: "BC", off: -14 }], points: [{ x: 3, y: 4.8, label: "A", dx: -4, dy: -8 }, { x: 0, y: 0, label: "B", dx: -14, dy: 14 }, { x: 8, y: 0, label: "C", dx: 6, dy: 14 }, { x: 1.5, y: 2.4, label: "M", dx: -18, dy: 0 }, { x: 5.5, y: 2.4, label: "N", dx: 8, dy: 0 }] })],
  ]),

  practice([
    q("magnitude", S`\(|\vec u|=2.5\). Find \(|-4\vec u|\).`, num(10),
      "|k| times |u|.", [S`\(4\times2.5\).`], S`\(10\)`),
    q("collinear", S`Which pair of vectors is always collinear?`, choice([S`\(2\vec u\) and \(-3\vec u\)`, S`\(\vec u\) and \(\vec u+\vec v\)`, S`\(\vec u+\vec v\) and \(\vec u-\vec v\)`, S`\(\vec u\) and \(\vec v\)`], 0),
      "Both are multiples of u.", ["Look for multiples of one vector."], S`\(2\vec u\) and \(-3\vec u\)`),
    q("unit", S`\(|\vec u|=0.2\). For which positive \(k\) is \(k\vec u\) a unit vector?`, num(5),
      "k · 0.2 = 1.", [S`\(k=\frac1{0.2}\).`], S`\(5\)`),
    q("solve", S`Find \(x\) if \(4(\vec u-2\vec v)+x\vec v=4\vec u\).`, num(8),
      "The v terms must cancel.", [S`\(-8+x=0\).`], S`\(8\)`),
    q("direction", S`\(\frac{\vec v}{|\vec v|}\) is:`, choice([S`a unit vector in the direction of \(\vec v\)`, "the magnitude of v", "the zero vector", S`a vector opposite to \(\vec v\)`], 0),
      "Dividing by the length gives length 1.", ["Same direction, length 1."], "a unit vector in the direction of v"),
  ]),

  ...hard([
    ["Dividing a segment", S`\(P\) is on segment \(AB\) with \(AP:PB=2:1\). Show that \(\overrightarrow{OP}=\frac13\overrightarrow{OA}+\frac23\overrightarrow{OB}\) for any point \(O\).`,
      [S`\(\overrightarrow{AP}=\frac23\overrightarrow{AB}=\frac23(\overrightarrow{OB}-\overrightarrow{OA})\).`, S`\(\overrightarrow{OP}=\overrightarrow{OA}+\overrightarrow{AP}=\overrightarrow{OA}+\frac23\overrightarrow{OB}-\frac23\overrightarrow{OA}\).`],
      S`\(\overrightarrow{OP}=\frac13\overrightarrow{OA}+\frac23\overrightarrow{OB}\) (the weights add to 1)`,
      vfig({ view: { xmin: -0.6, xmax: 8.5, ymin: -0.8, ymax: 4.8 }, grid: false, axes: false, segs: [{ pts: [[1, 4], [7.5, 1.5]], color: "gray" }], arrows: [{ from: [0, 0], to: [1, 4], vl: "a" }, { from: [0, 0], to: [7.5, 1.5], vl: "b", color: "blue", off: -16 }, { from: [0, 0], to: [1 + (2 / 3) * 6.5, 4 - (2 / 3) * 2.5], color: "red", label: "OP" }], points: [{ x: 0, y: 0, label: "O", dx: -14, dy: 14 }, { x: 1, y: 4, label: "A", dx: -6, dy: -8 }, { x: 7.5, y: 1.5, label: "B", dx: 8, dy: 4 }, { x: 1 + (2 / 3) * 6.5, y: 4 - (2 / 3) * 2.5, label: "P", dx: 4, dy: -10 }] })],
    ["Diagonals bisect each other", S`Use vectors to prove that the diagonals of a parallelogram bisect each other.`,
      [S`Let \(\overrightarrow{AB}=\vec u\), \(\overrightarrow{AD}=\vec v\), so \(\overrightarrow{AC}=\vec u+\vec v\).`, S`The midpoint \(M\) of \(AC\) has \(\overrightarrow{AM}=\frac12(\vec u+\vec v)\).`, S`The midpoint \(N\) of \(BD\) has \(\overrightarrow{AN}=\overrightarrow{AB}+\frac12\overrightarrow{BD}=\vec u+\frac12(\vec v-\vec u)=\frac12(\vec u+\vec v)\).`],
      S`\(\overrightarrow{AM}=\overrightarrow{AN}\), so \(M=N\): the diagonals meet at their midpoints`,
      vfig({ view: { xmin: -0.6, xmax: 7.4, ymin: -0.8, ymax: 3.8 }, grid: false, axes: false, segs: [{ pts: [[0, 0], [4.5, 0], [6.3, 3], [1.8, 3], [0, 0]], color: "gray" }, { pts: [[0, 0], [6.3, 3]], color: "red", dash: true }, { pts: [[4.5, 0], [1.8, 3]], color: "blue", dash: true }], arrows: [{ from: [0, 0], to: [4.5, 0], vl: "u", off: -16 }, { from: [0, 0], to: [1.8, 3], vl: "v", color: "blue" }], points: [{ x: 3.15, y: 1.5, label: "M = N", dx: 8, dy: -6, color: "red" }, { x: 0, y: 0, label: "A", dx: -14, dy: 14 }, { x: 4.5, y: 0, label: "B", dx: 6, dy: 16 }, { x: 6.3, y: 3, label: "C", dx: 8, dy: -4 }, { x: 1.8, y: 3, label: "D", dx: -16, dy: -4 }] })],
  ], [
    q("hard", S`\(P\) divides \(AB\) so that \(AP:PB=3:1\) and \(\overrightarrow{OP}=s\overrightarrow{OA}+t\overrightarrow{OB}\). Find \(t\).`, num(0.75, 0.001),
      "P is three quarters of the way from A.", [S`\(\overrightarrow{OP}=\frac14\overrightarrow{OA}+\frac34\overrightarrow{OB}\).`], S`\(0.75\)`),
    q("hard", S`\(|\vec u|=4\), \(|\vec v|=3\) and \(\vec u\perp\vec v\). Find \(|2\vec u-3\vec v|\) (3 decimals).`, num(12.042, 0.002),
      "2u and −3v are perpendicular too.", [S`\(\sqrt{8^2+9^2}=\sqrt{145}\).`], S`\(12.042\)`),
    q("hard", S`\(\vec u\) and \(\vec v\) are not collinear and \((k-2)\vec u+(k+t)\vec v=\vec 0\). Find \(t\).`, num(-2),
      "Both coefficients must be 0.", [S`\(k=2\) and \(2+t=0\).`], S`\(-2\)`),
  ]),

  wrapUp({
    qas: [
      ["What does multiplying by k do?", "Multiplies the length by |k|; keeps the direction when k > 0 and reverses it when k < 0."],
      ["How do I get a unit vector?", "Divide the vector by its magnitude: v/|v| has length 1 and the same direction."],
      ["How can I tell vectors are collinear?", "One is a scalar multiple of the other."],
      ["How do I prove points are collinear?", "Show two vectors joining them are multiples and share a point."],
      ["Why are vectors useful in geometry proofs?", "Writing everything in terms of two non-collinear vectors turns a geometric claim into algebra you can check."],
    ],
    summary: [
      "|kv| = |k||v|; k < 0 reverses.",
      "Unit vector: v/|v|.",
      "Collinear ⇔ scalar multiples.",
      "Distributive laws let you simplify like algebra.",
    ],
    next: "6.4 applies vector addition to forces and navigation.",
  }),
];
