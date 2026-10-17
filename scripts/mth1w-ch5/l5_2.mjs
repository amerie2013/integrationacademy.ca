// MTH1W 5.2 — Designs with Circle & Triangle Properties (self-study format)
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice } from "./lib.mjs";
import { fig, polygon } from "./figs5.mjs";

export const TITLE = "5.2 Designs with Circle & Triangle Properties";

const P = (deg, r = 1) => [r * Math.cos((deg * Math.PI) / 180), r * Math.sin((deg * Math.PI) / 180)];
/** circle of radius 1 with named points at given angles and a list of chords [i, j] (index "O" = centre) */
function circleFig({ pts, chords = [], radii = [], right = [], arcs = [], extra = [] }, caption = "", w = 270) {
  const at = (k) => (k === "O" ? [0, 0] : P(pts[k][1]));
  const items = [{ circle: [0, 0, 1], color: "ink", fill: "#fff" }, { dot: [0, 0], r: 3 }, { text: "O", at: [-0.08, -0.1], size: 12, color: "gray" }];
  for (const [i, j] of [...chords, ...radii]) items.push({ seg: [at(i), at(j)], color: radii.some(([a, b]) => a === i && b === j) ? "blue" : "red" });
  for (const [a, b, c] of right) items.push({ right: [at(a), at(b), at(c)] });
  for (const [a, b, c, t] of arcs) items.push({ arc: [at(a), at(b), at(c)], label: t, r: 0.18, lr: 0.14 });
  pts.forEach(([name, deg]) => { items.push({ dot: P(deg), r: 3.5, color: "ink" }, { text: name, at: P(deg, 1.14), bold: true }); });
  return fig({ w, items: [...items, ...extra] }, caption);
}

export const blocks = () => [
  intro({
    icon: "⭕",
    title: "Designs with Circle & Triangle Properties",
    overview: String.raw`Logos, quilts, stained glass, wheels and roof trusses are built from triangles and circles. A few reliable angle facts let you find every unknown angle in such a design — and create designs of your own that fit together exactly. This lesson collects the triangle, polygon and circle properties you need and shows how to chain them.`,
    goals: [
      "use the angle sum of a triangle (180°) and the exterior angle property;",
      "use the properties of isosceles and equilateral triangles;",
      "find interior and exterior angles of regular polygons;",
      "use circle properties: inscribed and central angles, the angle in a semicircle, and a tangent meeting a radius at 90°;",
      "analyse and design figures built from triangles, polygons and circles.",
    ],
    curriculum: "E1.2 (create and analyse designs using circle and triangle properties)",
    book: "Nelson Principles of Mathematics 9, Ch. 7 Properties of 2-D Figures (7.1 interior angles of polygons, 7.2 exterior angles, 7.5 applying properties)",
    prior: [
      [String.raw`Angles on a straight line add to…?`, String.raw`\(180^\circ\).`],
      [String.raw`Angles around a point add to…?`, String.raw`\(360^\circ\).`],
      [String.raw`What is the radius of a circle with diameter \(14\)?`, String.raw`\(7\).`],
    ],
    words: [
      ["Exterior angle", "angle between one side and the extension of the next side", "\\(115^\\circ\\)"],
      ["Isosceles triangle", "two equal sides; the angles opposite them are equal", "base angles"],
      ["Regular polygon", "all sides equal and all angles equal", "stop sign (octagon)"],
      ["Central angle", "angle with its vertex at the centre of a circle", "\\(\\angle AOB\\)"],
      ["Inscribed angle", "angle with its vertex on the circle", "\\(\\angle APB\\)"],
      ["Tangent", "a line touching a circle at exactly one point", ""],
    ],
  }),

  section("📌 Triangle facts", String.raw`
  ${table(["Property", "Statement", "In symbols"], [
    ["Angle sum", "the interior angles of every triangle add to 180°", "\\(a+b+c=180^\\circ\\)"],
    ["Exterior angle", "an exterior angle equals the sum of the two opposite interior angles", "\\(e=a+b\\)"],
    ["Isosceles", "two equal sides ⇔ the two base angles are equal", "\\(b=c\\)"],
    ["Equilateral", "three equal sides ⇔ every angle is 60°", "\\(60^\\circ\\)"],
  ])}
  <p>Why the exterior angle property works: the exterior angle and \(c\) make a straight line, so \(e=180^\circ-c\); and \(a+b=180^\circ-c\) too.</p>`),

  widget("triangleAngles"),

  section("📌 Polygons", String.raw`
  <p>Draw diagonals from one vertex of an \(n\)-sided polygon: they split it into \(n-2\) triangles, each with \(180^\circ\).</p>
  ${fig({ w: 300, items: [...polygon([[0, 0], [4, 0], [5.2, 2.6], [3, 4.4], [-0.6, 2.8]], { fill: "violet", color: "violet" }), { seg: [[0, 0], [5.2, 2.6]], color: "violet", dash: true }, { seg: [[0, 0], [3, 4.4]], color: "violet", dash: true }, { text: "1", at: [3.1, 0.9], bold: true }, { text: "2", at: [2.8, 2.5], bold: true }, { text: "3", at: [0.9, 2.5], bold: true }] }, "A pentagon splits into 3 triangles: 3 × 180° = 540°.")}
  ${keyIdea(String.raw`Sum of interior angles \(=(n-2)\times180^\circ\). For a regular polygon each interior angle is \(\dfrac{(n-2)\times180^\circ}{n}\). The exterior angles of any convex polygon add to \(360^\circ\), so each exterior angle of a regular polygon is \(\dfrac{360^\circ}{n}\).`)}
  ${table(["Polygon", "n", "Angle sum", "Each angle (regular)", "Each exterior angle"], [
    ["triangle", "3", "180°", "60°", "120°"], ["square", "4", "360°", "90°", "90°"], ["pentagon", "5", "540°", "108°", "72°"], ["hexagon", "6", "720°", "120°", "60°"], ["octagon", "8", "1080°", "135°", "45°"],
  ])}`),

  section("📌 Circle facts", String.raw`
  <div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center;">
  ${circleFig({ pts: [["A", 210], ["B", 330], ["P", 100]], radii: [["O", 0], ["O", 1]], chords: [[0, 2], [1, 2]], arcs: [[0, "O", 1, ""], [0, 2, 1, ""]] }, "Inscribed ∠APB = ½ central ∠AOB.", 230)}
  ${circleFig({ pts: [["A", 180], ["B", 0], ["P", 60]], chords: [[0, 2], [1, 2], [0, 1]], right: [[0, 2, 1]] }, "AB is a diameter, so ∠APB = 90°.", 230)}
  ${circleFig({ pts: [["T", 270]], radii: [["O", 0]], extra: [{ seg: [[-1.2, -1], [1.2, -1]], color: "green" }, { right: [[0, 0], [0, -1], [1, -1]] }] }, "A tangent is perpendicular to the radius.", 230)}
  </div>
  ${table(["Property", "Statement"], [
    ["Inscribed angle", "an inscribed angle is half the central angle standing on the same arc; inscribed angles on the same arc are equal"],
    ["Angle in a semicircle", "an angle inscribed in a semicircle (standing on a diameter) is 90°"],
    ["Tangent–radius", "a tangent is perpendicular to the radius drawn to the point of contact"],
    ["Radii", "all radii are equal, so a triangle with two radii as sides is isosceles"],
    ["Regular polygon in a circle", "the n vertices split 360° into n equal central angles of 360°/n"],
  ])}
  <p>Move P around the circle and change the arc. The inscribed angle stays half the central angle.</p>`),

  widget("circleAngles"),

  section("📌 Analysing a design", String.raw`
  <p>To find an unknown angle in a design, write down what you know, name the property you use at each step, and check that each triangle adds to \(180^\circ\).</p>
  ${watchOut([
    "The inscribed angle must stand on the same arc as the central angle.",
    "In an isosceles triangle the equal angles are opposite the equal sides — not necessarily at the bottom.",
    "Two radii make an isosceles triangle: use it!",
    "The exterior angles of a polygon add to 360° only when you take one at each vertex.",
  ])}`),

  examples([
    ["Exterior angle", String.raw`In \(\triangle ABC\), \(\angle A=48^\circ\) and the exterior angle at \(C\) is \(115^\circ\). Find \(\angle B\) and \(\angle ACB\).`,
      [String.raw`Exterior angle property: \(\angle A+\angle B=115^\circ\), so \(\angle B=115^\circ-48^\circ=67^\circ\).`, String.raw`Straight line at \(C\): \(\angle ACB=180^\circ-115^\circ=65^\circ\).`, String.raw`Check: \(48+67+65=180\) ✓`],
      String.raw`\(\angle B=67^\circ\), \(\angle ACB=65^\circ\)`],
    ["A roof truss", String.raw`A roof truss is an isosceles triangle with equal rafters. The angle at the peak is \(110^\circ\). What angle does each rafter make with the horizontal beam?`,
      [String.raw`The base angles are equal: \(2x+110=180\).`, String.raw`\(2x=70\), \(x=35\).`],
      String.raw`\(35^\circ\) each`,
      fig({ w: 300, items: polygon([[0, 0], [8, 0], [4, 1.4]], { fill: "amber", color: "amber", angles: [[2, "110°"], [0, "x"], [1, "x"]] }) })],
    ["A stop sign", String.raw`Find each interior and exterior angle of a regular octagon (a stop sign).`,
      [String.raw`Angle sum \(=(8-2)\times180^\circ=1080^\circ\).`, String.raw`Each interior angle \(=1080^\circ\div8=135^\circ\).`, String.raw`Each exterior angle \(=360^\circ\div8=45^\circ\); check \(135+45=180\) ✓`],
      String.raw`\(135^\circ\) interior, \(45^\circ\) exterior`],
    ["Angle in a semicircle", String.raw`\(AB\) is a diameter of a circle and \(P\) is on the circle. If \(\angle PAB=34^\circ\), find \(\angle PBA\).`,
      [String.raw`Angle in a semicircle: \(\angle APB=90^\circ\).`, String.raw`Triangle sum: \(\angle PBA=180^\circ-90^\circ-34^\circ=56^\circ\).`],
      String.raw`\(56^\circ\)`,
      circleFig({ pts: [["A", 180], ["B", 0], ["P", 112]], chords: [[0, 2], [1, 2], [0, 1]], right: [[0, 2, 1]] })],
    ["A hexagon logo", String.raw`A logo is a regular hexagon drawn inside a circle of radius \(5\) cm, with each vertex joined to the centre. Find the central angles, the angles of each small triangle and the perimeter of the hexagon.`,
      [String.raw`Central angles: \(360^\circ\div6=60^\circ\).`, String.raw`Each triangle has two radii, so it is isosceles with base angles \((180^\circ-60^\circ)\div2=60^\circ\): equilateral.`, String.raw`So each side equals the radius, \(5\) cm, and the perimeter is \(6\times5=30\) cm.`],
      String.raw`six \(60^\circ\) central angles; equilateral triangles; perimeter \(30\) cm`,
      fig({ w: 240, items: [{ circle: [0, 0, 5], color: "gray" }, { poly: [0, 1, 2, 3, 4, 5].map((k) => P(60 * k, 5)), fill: "blue", color: "blue" }, ...[0, 1, 2, 3, 4, 5].map((k) => ({ seg: [[0, 0], P(60 * k, 5)], color: "blue", width: 1.5 })), { text: "5 cm", at: [2.9, 0.75], color: "red", bold: true, size: 12 }] })],
  ]),

  practice([
    q("third angle", String.raw`Two angles of a triangle are \(29^\circ\) and \(104^\circ\). Find the third angle (degrees).`, num(47),
      "The three angles add to 180°.", [String.raw`\(180-29-104=47\).`], String.raw`\(47^\circ\)`),
    q("exterior angle", String.raw`The two interior angles opposite an exterior angle are \(55^\circ\) and \(72^\circ\). Find the exterior angle.`, num(127),
      "Exterior angle = sum of the two opposite interior angles.", [String.raw`\(55+72=127\).`], String.raw`\(127^\circ\)`),
    q("regular polygon", String.raw`Find each interior angle of a regular decagon (\(10\) sides).`, num(144),
      "Angle sum (n − 2) × 180°, then divide by n.", [String.raw`\((10-2)\times180=1440\); \(1440\div10=144\).`], String.raw`\(144^\circ\)`),
    q("inscribed angle", String.raw`A central angle is \(136^\circ\). Find an inscribed angle standing on the same arc.`, num(68),
      "Inscribed angle = half the central angle.", [String.raw`\(136\div2=68\).`], String.raw`\(68^\circ\)`),
    q("tangent", String.raw`A tangent touches a circle with centre \(O\) at \(A\). Point \(T\) is on the tangent and \(\angle AOT=52^\circ\). Find \(\angle ATO\).`, num(38),
      "The tangent meets the radius OA at 90°.", [String.raw`\(\angle OAT=90^\circ\); \(180-90-52=38\).`], String.raw`\(38^\circ\)`),
  ]),

  wrapUp({
    qas: [
      ["How do I know which property to use?", "Look at where the vertex of the unknown angle is. At the centre: central angle facts. On the circle: inscribed angle or semicircle. Where a line touches the circle: tangent ⟂ radius. Inside a triangle: angle sum and exterior angle."],
      ["Why is the angle in a semicircle always 90°?", "Its central angle is a straight angle, 180°. An inscribed angle is half of that: 90°."],
      ["How do designers draw a regular polygon?", "Draw a circle and divide 360° by the number of sides to get equal central angles. Mark the points where the rays meet the circle and join them."],
      ["Why does a regular hexagon tile a floor but a regular pentagon does not?", "Tiles meeting at a point must total 360°. Three hexagon angles (3 × 120°) make 360°; pentagon angles of 108° cannot (3 × 108 = 324, 4 × 108 = 432)."],
      ["Is a triangle's exterior angle always obtuse?", "No. It is obtuse only when the interior angle next to it is acute. Next to an obtuse interior angle the exterior angle is acute."],
    ],
    summary: [
      "Triangle: a + b + c = 180°; exterior angle = sum of the two opposite interior angles.",
      "Polygon: angle sum (n − 2) × 180°; exterior angles total 360°.",
      "Circle: inscribed = ½ central; angle in a semicircle = 90°; tangent ⟂ radius.",
      "Two radii make an isosceles triangle.",
    ],
    next: "5.3 converts measurements between units and systems.",
  }),
];
