// Worksheet 5.2 — Designs with Circle & Triangle Properties (teacher edition)
import { figT } from "./figT.mjs";
import { polygon } from "../figs5.mjs";

const P = (deg, r = 1) => [r * Math.cos((deg * Math.PI) / 180), r * Math.sin((deg * Math.PI) / 180)];
/** unit circle, named points at angles, segments between names ("O" = centre), right-angle marks, angle labels */
function circ({ pts, segs = [], right = [], labels = [], extra = [] }, width = 4.2) {
  const at = (k) => (k === "O" ? [0, 0] : P(pts.find((p) => p[0] === k)[1]));
  const items = [{ circle: [0, 0, 1], color: "ink" }, { dot: [0, 0], r: 3 }, { text: "O", at: [-0.1, -0.12], size: 12, color: "gray" }];
  for (const [a, b, col] of segs) items.push({ seg: [at(a), at(b)], color: col ?? "blue" });
  for (const [a, b, c] of right) items.push({ right: [at(a), at(b), at(c)] });
  for (const [a, b, c, t] of labels) items.push({ arc: [at(a), at(b), at(c)], label: t, r: 0.2, lr: 0.16 });
  for (const [n, d] of pts) items.push({ dot: P(d), r: 3.5 }, { text: n, at: P(d, 1.15), bold: true });
  return figT([...items, ...extra], width);
}

const EXAMPLES = [
  { title: "Angle sum with algebra", q: String.raw`The angles of a triangle are $x$, $2x+15^\circ$ and $3x-9^\circ$. Find each angle.`,
    steps: [String.raw`$x+(2x+15)+(3x-9)=180$, so $6x+6=180$.`, String.raw`$x=29$: the angles are $29^\circ$, $73^\circ$, $78^\circ$; sum $180^\circ$ ✓`], ans: String.raw`$29^\circ$, $73^\circ$, $78^\circ$` },
  { title: "Exterior angle with algebra", q: String.raw`An exterior angle of a triangle is $(4x+2)^\circ$. The two opposite interior angles are $(x+20)^\circ$ and $(2x+7)^\circ$. Find $x$ and the exterior angle.`,
    steps: [String.raw`Exterior angle $=$ sum of opposite interior angles: $4x+2=3x+27$.`, String.raw`$x=25$; exterior angle $=102^\circ$ (check $45+57=102$).`], ans: String.raw`$x=25$; $102^\circ$` },
  { title: "Isosceles triangle from two radii", q: String.raw`$A$ and $B$ are on a circle with centre $O$ and $\angle AOB=124^\circ$. Find $\angle OAB$.`,
    fig: circ({ pts: [["A", 208], ["B", 332]], segs: [["O", "A"], ["O", "B"], ["A", "B", "red"]], labels: [["A", "O", "B", "124°"]] }, 3.6),
    steps: [String.raw`$OA=OB$ (radii), so $\triangle OAB$ is isosceles.`, String.raw`$\angle OAB=(180^\circ-124^\circ)\div2=28^\circ$.`], ans: String.raw`$28^\circ$` },
  { title: "Polygon angle sum", q: String.raw`Find the sum of the interior angles of a $12$-sided polygon and each angle if it is regular.`,
    steps: [String.raw`$(12-2)\times180^\circ=1800^\circ$.`, String.raw`$1800^\circ\div12=150^\circ$ (exterior $30^\circ$, and $12\times30=360$ ✓).`], ans: String.raw`$1800^\circ$; $150^\circ$` },
  { title: "Number of sides from an angle", q: String.raw`Each interior angle of a regular polygon is $156^\circ$. How many sides does it have?`,
    steps: [String.raw`Each exterior angle $=180^\circ-156^\circ=24^\circ$.`, String.raw`$n=360\div24=15$.`], ans: "15 sides" },
  { title: "Inscribed angles on the same arc", q: String.raw`Points $P$ and $Q$ are on the major arc $AB$ and $\angle APB=41^\circ$. Find $\angle AQB$ and the central angle $\angle AOB$.`,
    fig: circ({ pts: [["A", 220], ["B", 320], ["P", 70], ["Q", 140]], segs: [["A", "P", "red"], ["B", "P", "red"], ["A", "Q", "violet"], ["B", "Q", "violet"], ["O", "A"], ["O", "B"]] }, 3.8),
    steps: [String.raw`Inscribed angles on the same arc are equal: $\angle AQB=41^\circ$.`, String.raw`Central angle $=2\times41^\circ=82^\circ$.`], ans: String.raw`$41^\circ$ and $82^\circ$` },
  { title: "Tangents from a point", q: String.raw`Two tangents from point $T$ touch a circle with centre $O$ at $A$ and $B$. If $\angle ATB=48^\circ$, find $\angle AOB$.`,
    fig: figT([{ circle: [0, 0, 1], color: "ink" }, { dot: [0, 0], r: 3 }, { poly: [[0, 0], P(156), [0, 2.459], P(24)], fill: "none", color: "blue" }, { right: [[0, 0], P(156), [0, 2.459]] }, { right: [[0, 2.459], P(24), [0, 0]] }, { text: "T", at: [0, 2.7], bold: true }, { text: "A", at: P(156, 1.25), bold: true }, { text: "B", at: P(24, 1.25), bold: true }, { text: "O", at: [0, -0.2], bold: true }], 3.4),
    steps: [String.raw`$OATB$ is a quadrilateral: angles add to $360^\circ$.`, String.raw`$\angle OAT=\angle OBT=90^\circ$ (tangent $\perp$ radius).`, String.raw`$\angle AOB=360^\circ-90^\circ-90^\circ-48^\circ=132^\circ$.`], ans: String.raw`$132^\circ$` },
  { title: "Semicircle and isosceles", q: String.raw`$AB$ is a diameter and $C$ is on the circle with $AC=BC$. Find the angles of $\triangle ABC$.`,
    steps: [String.raw`Angle in a semicircle: $\angle ACB=90^\circ$.`, String.raw`$AC=BC$, so $\angle A=\angle B=(180^\circ-90^\circ)\div2=45^\circ$.`], ans: String.raw`$90^\circ$, $45^\circ$, $45^\circ$` },
  { title: "Designing a star", q: String.raw`A five-pointed star is drawn by joining every second vertex of a regular pentagon inscribed in a circle. Find the angle at each point of the star.`,
    fig: figT([{ circle: [0, 0, 1], color: "gray", dash: true }, { poly: [0, 2, 4, 1, 3].map((k) => P(90 + 72 * k)), fill: "none", color: "violet" }], 3.2),
    steps: [String.raw`Each point is an inscribed angle standing on one-fifth of the circle (arc $72^\circ$).`, String.raw`Inscribed angle $=\tfrac12\times72^\circ=36^\circ$.`], ans: String.raw`$36^\circ$` },
];

const PROBLEMS = [
  { level: 1, q: String.raw`Two angles of a triangle are $63^\circ$ and $58^\circ$. Find the third angle and the exterior angle next to it.`, recap: "63°, 58°: third and exterior.", ans: String.raw`$59^\circ$; $121^\circ$` },
  { level: 1, q: String.raw`Find each interior angle of a regular hexagon and each exterior angle of a regular $20$-gon.`, recap: "Hexagon interior; 20-gon exterior.", ans: String.raw`$120^\circ$; $18^\circ$` },
  { level: 1, q: String.raw`An inscribed angle measures $57^\circ$. Find the central angle on the same arc.`, recap: "Inscribed 57°.", ans: String.raw`$114^\circ$` },
  { level: 2, q: String.raw`An isosceles triangle has one angle of $40^\circ$. Find the other two angles. (There are two possible answers.)`, recap: "Isosceles with a 40° angle.", ans: String.raw`$70^\circ,70^\circ$ (40° at apex) or $40^\circ,100^\circ$ (40° a base angle)` },
  { level: 2, q: String.raw`Each exterior angle of a regular polygon is $40^\circ$. How many sides does it have, and what is the interior angle sum?`, recap: "Exterior angle 40°.", ans: String.raw`$9$ sides; $1260^\circ$` },
  { level: 2, q: String.raw`$AB$ is a diameter; $C$ is on the circle with $\angle CAB=(2x+8)^\circ$ and $\angle CBA=(3x-3)^\circ$. Find $x$ and both angles.`, recap: "Semicircle with algebra.", ans: String.raw`$5x+5=90$, $x=17$: $42^\circ$ and $48^\circ$` },
  { level: 2, q: String.raw`A tangent at $A$ and a chord $AB$ are drawn. $O$ is the centre and $\angle OBA=31^\circ$. Find the angle between the tangent and the chord $AB$.`, recap: "Tangent–chord angle.", ans: String.raw`$\angle OAB=31^\circ$ (isosceles), so tangent–chord angle $=90-31=59^\circ$` },
  { level: 2, q: String.raw`Find $x$ if the angles of a quadrilateral are $x$, $2x$, $3x-20^\circ$ and $110^\circ$.`, recap: "Quadrilateral x, 2x, 3x − 20, 110.", ans: String.raw`$6x+90=360$, $x=45$: $45^\circ, 90^\circ, 115^\circ, 110^\circ$` },
  { level: 3, space: 5, q: String.raw`A regular octagon is inscribed in a circle with centre $O$.
(a) Find each central angle.
(b) Find the base angles of the triangle formed by $O$ and one side.
(c) Use (b) to find the interior angle of the octagon, and check with $(n-2)\times180^\circ$.`, recap: "Octagon in a circle.", ans: String.raw`(a) $45^\circ$ (b) $67.5^\circ$ each (c) $2\times67.5=135^\circ$; $1080\div8=135^\circ$ ✓` },
  { level: 3, space: 5, q: String.raw`Prove that the exterior angles of any triangle add to $360^\circ$. (Hint: each exterior angle is $180^\circ$ minus an interior angle.)`, recap: "Sum of exterior angles of a triangle.", ans: String.raw`$(180-a)+(180-b)+(180-c)=540-(a+b+c)=540-180=360$` },
  { level: 3, space: 5, q: String.raw`Tiles that are regular polygons meet at a point with no gaps. Show that equilateral triangles, squares and hexagons can each tile a floor alone, but regular octagons cannot. Then show that one square and two octagons can tile together.`, recap: "Which regular polygons tile?", ans: String.raw`$6\times60=4\times90=3\times120=360$; $2\times135=270$, $3\times135=405$; but $90+2\times135=360$ ✓` },
  { level: 3, space: 5, q: String.raw`Points $A$, $B$, $C$ lie on a circle with centre $O$ and $\angle ABC=118^\circ$, where $B$ is on the minor arc $AC$.
(a) Find the reflex central angle standing on the major arc $AC$.
(b) Find $\angle AOC$ (the non-reflex angle).
(c) Find $\angle OAC$.`, recap: "Inscribed angle > 90°.", ans: String.raw`(a) $236^\circ$ (b) $124^\circ$ (c) $28^\circ$` },
  { level: 3, space: 5, q: String.raw`Design task: create a logo inside a circle using a regular polygon with at least $6$ sides and at least one triangle formed by radii. Label every angle in your design and show how you found each one, naming the property you used.`, recap: "Design a logo.", ans: "Answers vary; angles must be consistent: central = 360°/n, base angles of radius triangles (180° − central)/2, interior angle = 2 × base angle" },
];

export const WS = {
  code: "5.2",
  title: "Designs with Circle & Triangle Properties",
  bigideas: String.raw`A small set of angle facts lets you find every angle in a design made of triangles, polygons and circles: the angle sum of a triangle ($180^\circ$), the exterior angle property, the polygon angle sum $(n-2)\times180^\circ$, and the circle properties --- inscribed angle $=\frac12$ central angle, the angle in a semicircle is $90^\circ$, and a tangent is perpendicular to the radius. Chaining them, with a reason for each step, is how designs are analysed and created.`,
  goals: ["Find unknown angles using triangle and polygon properties.", "Use isosceles triangles formed by radii.", "Apply inscribed/central angle, semicircle and tangent properties.", "Solve angle problems with algebra.", "Analyse and create designs with regular polygons."],
  curriculum: "E1.2",
  vocab: [["Exterior angle", "between a side and the extension of the next side"], ["Regular polygon", "all sides and angles equal"], ["Central angle", "vertex at the centre"], ["Inscribed angle", "vertex on the circle"], ["Tangent", "touches the circle at one point"]],
  hook: String.raw`Show three logos or a stained-glass window built from a circle and a regular polygon. Ask: “How could the designer know the exact angle to cut each piece?” Collect ideas, then reveal that every angle follows from a handful of facts.`,
  concepts: [
    ["1. Triangles", String.raw`$a+b+c=180^\circ$; exterior angle $=$ sum of the two opposite interior angles; isosceles: equal sides $\Leftrightarrow$ equal opposite angles.
${figT([...polygon([[0, 0], [5, 0], [1.8, 3]], { fill: "blue", angles: [[0, "a"], [2, "b"]] }), { seg: [[5, 0], [7, 0]], color: "gray", dash: true }, { arc: [[7, 0], [5, 0], [1.8, 3]], label: "a + b" }], 5)}`],
    ["2. Polygons", String.raw`Interior sum $(n-2)\times180^\circ$; regular polygon: each angle $\frac{(n-2)180^\circ}{n}$, each exterior angle $\frac{360^\circ}{n}$.`],
    ["3. Circles", String.raw`Inscribed angle $=\frac12$ central angle on the same arc; angles on the same arc are equal; semicircle angle $=90^\circ$; tangent $\perp$ radius; two radii make an isosceles triangle.
${circ({ pts: [["A", 210], ["B", 330], ["P", 95]], segs: [["O", "A"], ["O", "B"], ["A", "P", "red"], ["B", "P", "red"]] }, 3.4)}`],
  ],
  tips: ["Ask students to write the property beside each step.", "Check that the inscribed and central angles stand on the same arc.", "The isosceles base angles are opposite the equal sides.", "Tangent problems usually hide a 90° angle.", "Always verify a triangle adds to 180° at the end."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
