// MCV4U 6.1 — Introduction to Vectors (rebuild of the existing lesson): scalars and vectors, notation, magnitude,
// direction as an angle, a true bearing or a quadrant bearing, scale diagrams, equal, opposite and parallel vectors
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard } from "./lib.mjs";
import { vfig, pol, brg } from "./vecfig.mjs";

export const TITLE = "6.1 Introduction to Vectors";
export const ID = "2993f4d0-0787-468b-ba79-0ab7fc5ddf3c";

const S = String.raw;
const compass = (b, color = "violet", vl = "v") => ({ from: [0, 0], to: brg(3.4, b), color, vl });
export const blocks = () => [
  intro({
    icon: "🧭",
    title: "Introduction to Vectors",
    overview: S`Some quantities need only a size: a mass of 5 kg, a temperature of 20 °C, a speed of 60 km/h. These are <strong>scalars</strong>. Others need a size <em>and</em> a direction: a displacement of 3 km east, a force of 49 N downward, a velocity of 60 km/h north. These are <strong>vectors</strong>. We draw a vector as an arrow — its length shows the <strong>magnitude</strong>, its arrowhead shows the direction — and describe the direction with an angle or a bearing.`,
    goals: [
      "tell scalars from vectors;",
      "use vector notation and find the magnitude of a vector drawn on a grid;",
      "describe a direction with an angle, a true bearing or a quadrant bearing;",
      "draw a vector to scale;",
      "recognize equal, opposite and parallel vectors.",
    ],
    curriculum: "C1.1, C1.2 (recognize a vector as a quantity with magnitude and direction; represent vectors geometrically and with bearings)",
    prior: [
      [S`Distance between \((0,0)\) and \((3,4)\)?`, S`\(5\).`],
      [S`\(\tan^{-1}1\)?`, S`\(45^\circ\).`],
      [S`A full turn is how many degrees?`, S`\(360^\circ\).`],
    ],
    words: [
      ["Scalar", "size only", "mass, time, speed"],
      ["Vector", "size and direction", "\\(\\vec v\\), \\(\\overrightarrow{AB}\\)"],
      ["Magnitude", "length of the arrow", "\\(|\\vec v|\\)"],
      ["True bearing", "clockwise from north, 3 digits", "\\(060^\\circ\\)"],
      ["Quadrant bearing", "from N or S toward E or W", "N60°E"],
    ],
  }),

  section("📌 Arrows, notation and bearings", S`
  <p>The vector from point \(A\) (its <em>tail</em>) to point \(B\) (its <em>head</em>) is written \(\overrightarrow{AB}\); a single letter is written \(\vec v\) (bold \(\mathbf v\) in print). Its magnitude is \(|\overrightarrow{AB}|\), the length \(AB\).</p>
  ${table(["Direction written as", "Measured", "Example (same direction)"], [
    ["angle from east", "counterclockwise from the positive x-axis", "\\(30^\\circ\\)"],
    ["true bearing", "clockwise from north", "\\(060^\\circ\\)"],
    ["quadrant bearing", "from N or S, turning toward E or W", "N60°E"],
  ])}
  ${vfig({ view: { xmin: -4.5, xmax: 4.5, ymin: -4.5, ymax: 4.5 }, grid: false, north: [0, 0, 4.2], arrows: [compass(60, "violet", "a"), compass(140, "blue", "b"), compass(335, "red", "c")], arcs: [{ at: [0, 0], r: 1.2, a: 30, b: 90, label: "60°", color: "violet" }, { at: [0, 0], r: 1.8, a: -50, b: 90, label: "140°", color: "blue", lr: 0.6 }], texts: [{ x: 3.6, y: 2.4, t: "N60°E", color: "violet" }, { x: 2.9, y: -3.2, t: "S40°E", color: "blue" }, { x: -2.2, y: 3.6, t: "N25°W", color: "red" }] }, "a: bearing 060° = N60°E;  b: bearing 140° = S40°E;  c: bearing 335° = N25°W")}
  ${keyIdea(S`A vector has a magnitude and a direction and <strong>nothing else</strong>: where you draw it does not matter. Two vectors are <strong>equal</strong> when they have the same magnitude and the same direction. \(-\vec v\) has the same magnitude as \(\vec v\) and the opposite direction.`)}`),

  section("📌 Explore", S`<p>Change the magnitude and direction of \(\vec v\) and read its true and quadrant bearings. Slide the second tail around: the blue copy is the same vector wherever it sits. Switch to the opposite vector to see \(-\vec v\).</p>`),

  widget("vectorBasics", { init: { m: 4, deg: 50, tx: -4, ty: -3 } }),

  section("📌 Working with bearings and scale", S`
  <p>To draw a vector to scale, choose a scale (for example 1 cm : 50 m), mark north, turn through the bearing clockwise, and draw an arrow of the scaled length. On a grid, the magnitude comes from the Pythagorean theorem and the direction from the inverse tangent.</p>
  ${watchOut([
    "True bearings are measured clockwise from north and written with three digits: 045°, not 45°.",
    "A quadrant bearing starts at N or S and is never more than 90°.",
    "Equal vectors need the same direction too — same length is not enough.",
    "The opposite direction of bearing θ is θ ± 180°.",
    "A speed is a scalar; a velocity (speed with a direction) is a vector.",
  ])}`),

  examples([
    ["Scalar or vector?", S`Classify each quantity: (a) 60 km/h; (b) 60 km/h due north; (c) 5 kg; (d) a 49 N pull straight down; (e) 18 °C; (f) 3 km east.`,
      [S`Quantities with only a size: (a) speed, (c) mass, (e) temperature.`, S`Quantities with a direction: (b) velocity, (d) force, (f) displacement.`],
      S`scalars (a), (c), (e); vectors (b), (d), (f)`],
    ["Converting bearings", S`Write the true bearing \(140^\circ\) as a quadrant bearing, and the quadrant bearing N25°W as a true bearing.`,
      [S`\(140^\circ\) is past east (90°) and short of south (180°): it is \(180^\circ-140^\circ=40^\circ\) east of south, S40°E.`, S`N25°W turns 25° west from north, so the clockwise angle is \(360^\circ-25^\circ=335^\circ\).`],
      S`S40°E and \(335^\circ\)`,
      vfig({ view: { xmin: -4, xmax: 4, ymin: -4, ymax: 4 }, grid: false, north: [0, 0, 3.8], arrows: [compass(140, "blue", "b"), compass(335, "red", "c")], arcs: [{ at: [0, 0], r: 1.3, a: -90, b: -50, label: "40°", color: "blue" }, { at: [0, 0], r: 1.9, a: 90, b: 115, label: "25°", color: "red", lr: 0.45 }] })],
    ["A scale diagram", S`Draw a displacement of 250 m on a bearing of \(060^\circ\) using the scale 1 cm : 50 m.`,
      [S`Scaled length \(250\div50=5\) cm.`, S`Mark north, turn \(60^\circ\) clockwise, and draw a 5 cm arrow.`],
      S`a 5 cm arrow pointing \(60^\circ\) east of north`,
      vfig({ view: { xmin: -1, xmax: 6, ymin: -1, ymax: 4.5 }, north: [0, 0, 4], arrows: [{ from: [0, 0], to: brg(5, 60), vl: "d", label: "5 cm = 250 m" }], arcs: [{ at: [0, 0], r: 1.2, a: 30, b: 90, label: "60°" }] })],
    ["Equal and opposite vectors", S`\(ABCD\) is a parallelogram. Name a vector equal to \(\overrightarrow{AB}\), one equal to \(\overrightarrow{AD}\), and one opposite to \(\overrightarrow{AB}\).`,
      [S`Opposite sides of a parallelogram are parallel and equal in length, so \(\overrightarrow{DC}\) has the same length and direction as \(\overrightarrow{AB}\).`, S`Likewise \(\overrightarrow{BC}=\overrightarrow{AD}\). Reversing the arrow gives \(\overrightarrow{BA}=-\overrightarrow{AB}\) (also \(\overrightarrow{CD}\)).`],
      S`\(\overrightarrow{DC}=\overrightarrow{AB}\), \(\overrightarrow{BC}=\overrightarrow{AD}\), \(\overrightarrow{BA}=\overrightarrow{CD}=-\overrightarrow{AB}\)`,
      vfig({ view: { xmin: -0.5, xmax: 7, ymin: -0.8, ymax: 3.8 }, grid: false, arrows: [{ from: [0, 0], to: [4.5, 0], color: "violet", off: -15 }, { from: [1.8, 3], to: [6.3, 3], color: "violet" }, { from: [0, 0], to: [1.8, 3], color: "blue" }, { from: [4.5, 0], to: [6.3, 3], color: "blue", off: -15 }], points: [{ x: 0, y: 0, label: "A", dx: -14, dy: 16 }, { x: 4.5, y: 0, label: "B", dx: 6, dy: 16 }, { x: 6.3, y: 3, label: "C", dx: 8, dy: -6 }, { x: 1.8, y: 3, label: "D", dx: -16, dy: -6 }] })],
    ["Magnitude and direction from a grid", S`Find the magnitude and the true bearing of the vector from \(P(-1,-2)\) to \(Q(3,1)\) (north is up).`,
      [S`It moves 4 right and 3 up: \(|\overrightarrow{PQ}|=\sqrt{4^2+3^2}=5\).`, S`Angle above east \(\tan^{-1}\frac34\approx36.87^\circ\), so the angle from north is \(90^\circ-36.87^\circ=53.13^\circ\).`],
      S`\(|\overrightarrow{PQ}|=5\), bearing about \(053.1^\circ\)`,
      vfig({ view: { xmin: -2, xmax: 4, ymin: -3, ymax: 2 }, arrows: [{ from: [-1, -2], to: [3, 1], vl: "PQ", off: 16 }], segs: [{ pts: [[-1, -2], [3, -2], [3, 1]], dash: true }], texts: [{ x: 1, y: -2.45, t: "4" }, { x: 3.3, y: -0.5, t: "3" }], points: [{ x: -1, y: -2, label: "P", dx: -16, dy: 4 }, { x: 3, y: 1, label: "Q", dx: 8, dy: -4 }] })],
  ]),

  practice([
    q("type", S`Which quantity is a vector?`, choice(["an acceleration of 9.8 m/s² downward", "a time of 12 s", "a length of 4 m", "an energy of 300 J"], 0),
      "It has a direction.", ["Look for a stated direction."], "the acceleration downward"),
    q("bearing", S`Write S35°W as a true bearing (degrees).`, num(215),
      "From south, 35° toward west.", [S`\(180^\circ+35^\circ\).`], S`\(215^\circ\)`),
    q("opposite", S`\(\vec v\) has a true bearing of \(070^\circ\). What is the true bearing of \(-\vec v\)?`, num(250),
      "Add 180°.", [S`\(70^\circ+180^\circ\).`], S`\(250^\circ\)`),
    q("magnitude", S`Find the magnitude of the vector from \((2,-1)\) to \((-4,7)\).`, num(10),
      "Pythagoras on the run and rise.", [S`\(\sqrt{6^2+8^2}\).`], S`\(10\)`),
    q("hexagon", S`\(ABCDEF\) is a regular hexagon labelled counterclockwise. Which vector equals \(\overrightarrow{AB}\)?`, choice([S`\(\overrightarrow{ED}\)`, S`\(\overrightarrow{DE}\)`, S`\(\overrightarrow{BC}\)`, S`\(\overrightarrow{CD}\)`], 0),
      "Opposite sides of a regular hexagon are parallel.", ["AB is parallel to DE but points the other way."], S`\(\overrightarrow{ED}\)`),
  ]),

  ...hard([
    ["Equal edges of a cube", S`In cube \(ABCDEFGH\) (base \(ABCD\), top \(EFGH\), with \(E\) above \(A\)), list every edge vector equal to \(\overrightarrow{AB}\). How many vectors along edges have the same magnitude as \(\overrightarrow{AB}\) but are not equal to it?`,
      [S`Edges parallel to \(AB\) and pointing the same way: \(\overrightarrow{DC}\), \(\overrightarrow{EF}\), \(\overrightarrow{HG}\).`, S`A cube has 12 edges, each giving 2 vectors (one each way): 24 vectors of the same length. Four of them equal \(\overrightarrow{AB}\) (including itself).`],
      S`\(\overrightarrow{DC},\overrightarrow{EF},\overrightarrow{HG}\); \(24-4=20\) others`,
      vfig({ view: { xmin: -0.5, xmax: 6, ymin: -0.6, ymax: 5.2 }, grid: false, axes: false, segs: [{ pts: [[0, 0], [3.5, 0], [5, 1.5], [1.5, 1.5], [0, 0]], color: "gray" }, { pts: [[0, 3.5], [3.5, 3.5], [5, 5], [1.5, 5], [0, 3.5]], color: "gray" }, { pts: [[0, 0], [0, 3.5]], color: "gray" }, { pts: [[3.5, 0], [3.5, 3.5]], color: "gray" }, { pts: [[5, 1.5], [5, 5]], color: "gray" }, { pts: [[1.5, 1.5], [1.5, 5]], color: "gray", dash: true }], arrows: [{ from: [0, 0], to: [3.5, 0], color: "red", w: 3.4 }, { from: [1.5, 1.5], to: [5, 1.5], color: "violet", dash: true }, { from: [0, 3.5], to: [3.5, 3.5], color: "violet" }, { from: [1.5, 5], to: [5, 5], color: "violet" }], points: [{ x: 0, y: 0, label: "A", dx: -14, dy: 16 }, { x: 3.5, y: 0, label: "B", dx: 4, dy: 16 }, { x: 5, y: 1.5, label: "C", dx: 8, dy: 6 }, { x: 1.5, y: 1.5, label: "D", dx: -16, dy: -4 }, { x: 0, y: 3.5, label: "E", dx: -16, dy: 0 }, { x: 3.5, y: 3.5, label: "F", dx: 4, dy: 18 }, { x: 5, y: 5, label: "G", dx: 8, dy: 0 }, { x: 1.5, y: 5, label: "H", dx: -16, dy: -4 }] })],
    ["The tip of a minute hand", S`A minute hand is 10 cm long. Find the magnitude and true bearing of the displacement of its tip from 12:00 to 12:20 (12 is north).`,
      [S`At 12:00 the tip is at \((0,10)\). In 20 minutes the hand turns \(120^\circ\) clockwise, to bearing \(120^\circ\): the tip is at \((10\sin120^\circ,10\cos120^\circ)=(8.66,-5)\).`, S`Displacement \((8.66,-15)\): magnitude \(\sqrt{8.66^2+15^2}\approx17.32\) cm (also \(2\cdot10\sin60^\circ\)).`, S`It points \(\tan^{-1}\frac{8.66}{15}=30^\circ\) east of south: bearing \(150^\circ\).`],
      S`about 17.32 cm on a bearing of \(150^\circ\)`,
      vfig({ view: { xmin: -11.5, xmax: 11.5, ymin: -11.5, ymax: 11.5 }, grid: false, axes: false, step: 5, segs: [{ pts: Array.from({ length: 61 }, (_, i) => pol(10, i * 6)), color: "gray" }], arrows: [{ from: [0, 0], to: [0, 10], color: "gray", w: 2 }, { from: [0, 0], to: [8.66, -5], color: "gray", w: 2 }, { from: [0, 10], to: [8.66, -5], color: "red", vl: "d", label: "17.32 cm" }], points: [{ x: 0, y: 10, label: "12:00", dx: -46, dy: -6 }, { x: 8.66, y: -5, label: "12:20", dx: 8, dy: 16 }] })],
  ], [
    q("hard", S`A regular hexagon \(ABCDEF\) has side 2. Find \(|\overrightarrow{AD}|\).`, num(4),
      "AD is a long diagonal: twice the side.", [S`The hexagon is six equilateral triangles.`], S`\(4\)`),
    q("hard", S`The tip of a 12 cm minute hand moves from 12:00 to 12:30. Find the magnitude of its displacement (cm).`, num(24),
      "It goes to the opposite side of the circle.", [S`A diameter: \(2\times12\).`], S`\(24\)`),
    q("hard", S`Find the magnitude of the vector from \((-3,5)\) to \((4,-19)\).`, num(25),
      "Run 7, rise −24.", [S`\(\sqrt{49+576}\).`], S`\(25\)`),
  ]),

  wrapUp({
    qas: [
      ["What makes a quantity a vector?", "It has both a magnitude and a direction, like a force or a displacement."],
      ["When are two vectors equal?", "When they have the same magnitude and the same direction, wherever they are drawn."],
      ["What is the difference between a true and a quadrant bearing?", "A true bearing is the clockwise angle from north (000° to 359°); a quadrant bearing names N or S, an angle up to 90°, then E or W."],
      ["How is −v related to v?", "Same magnitude, opposite direction: its bearing differs by 180°."],
      ["How do I find a magnitude on a grid?", "Use the Pythagorean theorem on the horizontal and vertical changes."],
    ],
    summary: [
      "Vectors have magnitude and direction; scalars only magnitude.",
      "Notation: \\(\\vec v\\), \\(\\overrightarrow{AB}\\), magnitude \\(|\\vec v|\\).",
      "Bearings: true (clockwise from N) or quadrant (N/S then E/W).",
      "Equal: same length and direction; opposite: reversed.",
    ],
    next: "6.2 adds and subtracts vectors.",
  }),
];
