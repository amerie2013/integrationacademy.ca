// MCV4U Worksheet 6.1 — Introduction to Vectors (teacher edition)
import { svgT, gridT } from "./figT.mjs";
import { vdoc, pol, brg } from "../vecfig.mjs";

const S = String.raw;
const VF = (o, w = 6) => svgT(vdoc(o), w);
const HEX = Array.from({ length: 6 }, (_, i) => pol(3, i * 60));
const EXAMPLES = [
  { title: "Scalar or vector?", q: S`Classify: (a) 12 N to the left; (b) 3 h; (c) 70 km/h on a bearing of $210^\circ$; (d) 2 L; (e) 400 m up a hill; (f) 15 m/s.`,
    steps: [S`A direction is stated in (a), (c) and (e).`, S`(b), (d) and (f) give only a size.`], ans: "vectors (a), (c), (e); scalars (b), (d), (f)" },
  { title: "True to quadrant", q: S`Write the true bearing $230^\circ$ as a quadrant bearing.`,
    fig: VF({ view: { xmin: -3.6, xmax: 3.6, ymin: -3.6, ymax: 3.6 }, grid: false, north: [0, 0, 3.4], arrows: [{ from: [0, 0], to: brg(3.2, 230), vl: "v" }], arcs: [{ at: [0, 0], r: 1.1, a: 220, b: 270, label: "50°" }] }, 5),
    steps: [S`$230^\circ$ is past south ($180^\circ$) by $50^\circ$, turning toward west.`], ans: "S50°W" },
  { title: "Quadrant to true", q: S`Write N70°E and S15°E as true bearings.`,
    steps: [S`N70°E: $70^\circ$ clockwise from north.`, S`S15°E: from south ($180^\circ$) back $15^\circ$ toward east: $165^\circ$.`], ans: "070° and 165°" },
  { title: "A scale diagram", q: S`Draw a displacement of 36 km on a bearing of $300^\circ$ with the scale 1 cm : 6 km.`,
    fig: VF({ view: { xmin: -6, xmax: 1, ymin: -0.8, ymax: 4 }, north: [0, 0, 3.6], arrows: [{ from: [0, 0], to: brg(6, 300), vl: "d", label: "6 cm", off: -16 }], arcs: [{ at: [0, 0], r: 1, a: 90, b: 150, label: "60°" }] }, 5),
    steps: [S`Length $36\div6=6$ cm.`, S`$300^\circ$ is $60^\circ$ west of north (N60°W).`], ans: "a 6 cm arrow pointing N60°W" },
  { title: "From a grid", q: S`Find the magnitude and true bearing of $\overrightarrow{AB}$ for $A(-4,2)$ and $B(8,7)$ (north is up).`,
    fig: VF({ view: { xmin: -5, xmax: 9, ymin: 0, ymax: 8 }, step: 1, axes: false, arrows: [{ from: [-4, 2], to: [8, 7], vl: "AB" }], segs: [{ pts: [[-4, 2], [8, 2], [8, 7]], dash: true }], texts: [{ x: 2, y: 1.3, t: "12" }, { x: 8.5, y: 4.4, t: "5" }], points: [{ x: -4, y: 2, label: "A", dx: -6, dy: 18 }, { x: 8, y: 7, label: "B", dx: -16, dy: -6 }] }, 5.5),
    steps: [S`Run $12$, rise $5$: $|\overrightarrow{AB}|=\sqrt{144+25}=13$.`, S`Angle north of east: $\tan^{-1}\frac5{12}\approx22.62^\circ$, so the angle from north is $90^\circ-22.62^\circ$.`], ans: "13, on a bearing of about 067.4° (N67.4°E)" },
  { title: "Equal vectors in a hexagon", q: S`$ABCDEF$ is a regular hexagon (counterclockwise) with centre $O$. Name three vectors joining labelled points that equal $\overrightarrow{OA}$.`,
    fig: VF({ view: { xmin: -3.8, xmax: 3.8, ymin: -3.3, ymax: 3.3 }, grid: false, axes: false, segs: [{ pts: [...HEX, HEX[0]], color: "gray" }], arrows: [{ from: [0, 0], to: HEX[0], color: "red" }, { from: HEX[2], to: HEX[1], color: "violet" }, { from: HEX[3], to: [0, 0], color: "violet" }, { from: HEX[4], to: HEX[5], color: "violet" }], points: ["A", "B", "C", "D", "E", "F"].map((t, i) => ({ x: HEX[i][0], y: HEX[i][1], label: t, dx: i === 0 ? 8 : i === 3 ? -16 : 4, dy: i < 3 ? -8 : 18 })).concat([{ x: 0, y: 0, label: "O", dx: -6, dy: 18 }]) }, 4.6),
    steps: [S`$\overrightarrow{OA}$ points right with length equal to the side.`, S`Segments parallel to $OA$ of the same length, pointing right: $CB$, $DO$, $EF$.`], ans: S`$\overrightarrow{CB}$, $\overrightarrow{DO}$, $\overrightarrow{EF}$` },
  { title: "An opposite bearing", q: S`$\vec v$ is on a bearing of $305^\circ$. Give $-\vec v$ as a true and as a quadrant bearing.`,
    steps: [S`$305^\circ-180^\circ=125^\circ$.`, S`$125^\circ$ is $55^\circ$ short of south, toward east.`], ans: "125°, S55°E" },
  { title: "Equal velocities", q: S`Two ships 50 km apart both sail at 18 knots on a bearing of $215^\circ$. Are their velocity vectors equal?`,
    steps: [S`A vector is fixed by magnitude and direction only; position does not matter.`], ans: "yes: same speed and same direction" },
  { title: "Opposite positions", q: S`The tip of a 15 cm hour hand moves from 3:00 to 9:00 (12 is north). Describe its displacement.`,
    steps: [S`It goes from the 3 to the 9: straight across the circle, a diameter of 30 cm.`, S`From east to west: bearing $270^\circ$.`], ans: "30 cm on a bearing of 270° (due west)" },
];

const PROBLEMS = [
  { level: 1, q: S`Classify as scalar or vector: (a) 9.8 m/s² downward; (b) 65 kg; (c) 4 km south; (d) 120 s.`, recap: "Look for a direction.", ans: "vectors (a), (c); scalars (b), (d)" },
  { level: 1, q: S`Write $310^\circ$ as a quadrant bearing.`, recap: "360° − 310° from north toward west.", ans: "N50°W" },
  { level: 1, q: S`Write S72°E as a true bearing.`, recap: "180° − 72°.", ans: "108°" },
  { level: 2, q: S`Find the magnitude of the vector from $(-4,3)$ to $(2,-5)$.`, recap: "Pythagoras on the run and rise.", ans: "10" },
  { level: 2, q: S`$\vec v$ points N15°E. Give the true bearing of $-\vec v$.`, recap: "015° + 180°.", ans: "195°" },
  { level: 2, q: S`Draw a displacement of 450 m on a bearing of $135^\circ$ with the scale 1 cm : 100 m.`, recap: "Length 4.5 cm, SE.", ans: "a 4.5 cm arrow pointing S45°E", fig: gridT({ xmin: -1, xmax: 5, ymin: -5, ymax: 1 }, { x: 1, y: 1 }) },
  { level: 2, q: S`In parallelogram $PQRS$, name a vector equal to $\overrightarrow{PQ}$ and a vector opposite to $\overrightarrow{QR}$.`, recap: "Opposite sides are equal and parallel.", ans: S`$\overrightarrow{SR}$; $\overrightarrow{RQ}$ or $\overrightarrow{SP}$` },
  { level: 2, q: S`A vector goes 6 units east and 8 units north. Find its magnitude and true bearing.`, recap: "Angle from north: tan⁻¹(6/8).", ans: "10, bearing about 036.9°" },
  { level: 3, space: 5, q: S`A Ferris wheel of radius 20 m turns so that a seat moves from the top to the point level with the centre on the east side. Find the magnitude and true bearing of its displacement, treating "up" as north in a side view.`, recap: "Quarter turn: from (0, 20) to (20, 0).", ans: S`$\sqrt{800}\approx28.28$ m on a bearing of $135^\circ$` },
  { level: 3, space: 5, q: S`Hiker A walks 5 km N40°E. Hiker B walks 5 km on a bearing of $220^\circ$. Compare their displacement vectors.`, recap: "Compare 040° with 220°.", ans: "same magnitude, opposite directions: they are opposite vectors" },
  { level: 3, space: 5, q: S`A vector of magnitude 10 moves 6 units east and points north of the east-west line. Find its true bearing. What bearing would it have if it moved 6 units west instead?`, recap: "sin(angle from north) = 6/10.", ans: S`$\sin^{-1}0.6\approx36.87^\circ$: $036.9^\circ$; westward: $323.1^\circ$` },
  { level: 3, space: 5, q: S`Explain why a quadrant bearing never exceeds $90^\circ$, and write $000^\circ$, $090^\circ$, $180^\circ$ and $270^\circ$ as compass directions.`, recap: "It is measured from the nearer of N and S.", ans: "the angle is measured from N or S toward E or W, so at most 90°; N, E, S, W" },
  { level: 3, space: 5, q: S`Square $ABCD$ (counterclockwise) has side 4 and centre $O$. Find $|\overrightarrow{OA}|$ and name the vector from $O$ that equals $\overrightarrow{CO}$.`, recap: "Half a diagonal.", ans: S`$|\overrightarrow{OA}|=2\sqrt2\approx2.83$; $\overrightarrow{CO}=\overrightarrow{OA}$` },
];

export const WS = {
  code: "6.1",
  title: "Introduction to Vectors",
  bigideas: S`A scalar has a size; a vector has a size (magnitude) and a direction. We draw a vector as an arrow and name it $\vec v$ or $\overrightarrow{AB}$; its magnitude is $|\vec v|$. Directions are given as angles, true bearings (clockwise from north, three digits) or quadrant bearings (N or S, an angle, then E or W). Equal vectors have the same magnitude and direction wherever they are drawn; $-\vec v$ has the same magnitude and the opposite direction.`,
  goals: ["Tell scalars from vectors.", "Use true and quadrant bearings.", "Draw vectors to scale.", "Find magnitudes on a grid.", "Recognize equal and opposite vectors."],
  curriculum: "C1.1, C1.2",
  vocab: [["Vector", "magnitude and direction"], ["True bearing", "clockwise from north"], ["Quadrant bearing", "e.g. N60°E"], ["Opposite vector", "$-\\vec v$"]],
  hook: S`A pilot is told to fly 200 km. Why is that not enough information to reach the right airport?`,
  concepts: [
    ["1. Arrows", S`An arrow from tail $A$ to head $B$ is $\overrightarrow{AB}$; its length is the magnitude:
${VF({ view: { xmin: -0.5, xmax: 5.5, ymin: -0.6, ymax: 3.2 }, grid: false, axes: false, arrows: [{ from: [0, 0], to: [5, 2.6], vl: "AB" }], points: [{ x: 0, y: 0, label: "A", dx: -14, dy: 14 }, { x: 5, y: 2.6, label: "B", dx: 8, dy: 4 }] }, 4.5)}`],
    ["2. Bearings", S`True bearing $\beta$ (clockwise from N) and quadrant bearing name the same direction: $140^\circ$ = S40°E.`],
    ["3. Equal and opposite", S`Equal: same length and direction. Opposite: same length, direction turned $180^\circ$.`],
  ],
  tips: ["Three digits for true bearings.", "Quadrant bearings start at N or S.", "Speed is a scalar; velocity is a vector.", "Position does not change a vector.", "Opposite bearing: add or subtract 180°."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
