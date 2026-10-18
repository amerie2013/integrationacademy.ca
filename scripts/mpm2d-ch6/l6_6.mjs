// MPM2D 6.6 — Solving Right Triangles & Applications (self-study format): solving a whole triangle, from two legs,
// angles of elevation and depression, and a two-triangle problem
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, q, num, fig, rt } from "./lib.mjs";

export const TITLE = "6.6 Solving Right Triangles & Applications";

const S = String.raw;
const rad = (d) => (d * Math.PI) / 180;
export const blocks = () => [
  intro({
    icon: "🏔️",
    title: "Solving Right Triangles & Applications",
    overview: S`To <strong>solve</strong> a right triangle means to find all its unknown sides and angles. With one side and one acute angle, or with two sides, you can always do it using trigonometric ratios, the Pythagorean theorem and the angle sum. In this lesson you will solve whole triangles, then apply the methods to angles of elevation and depression — and to problems with two right triangles, where you find a shared side first.`,
    goals: [
      "solve a right triangle from one side and one angle;",
      "solve a right triangle from two sides;",
      "use angles of elevation and depression;",
      "explain why the angle of depression equals the angle of elevation from the other end;",
      "solve problems that involve two right triangles.",
    ],
    curriculum: "T2 (determine the measures of the sides and angles in right triangles, using the primary trigonometric ratios and the Pythagorean theorem; solve problems involving the measures of sides and angles in right triangles in real-life applications, e.g. angles of elevation and depression)",
    prior: [
      [S`Find \(x\): \(\tan35^\circ=\frac{x}{20}\).`, S`\(x\approx14.0\).`],
      [S`Find \(\theta\): \(\tan\theta=\frac{3}{4}\).`, S`\(\theta\approx36.9^\circ\).`],
      [S`Alternate angles between parallel lines are…`, S`equal.`],
    ],
    words: [
      ["Solve a triangle", "find every unknown side and angle", ""],
      ["Angle of elevation", "angle above the horizontal to an object", ""],
      ["Angle of depression", "angle below the horizontal to an object", ""],
      ["Line of sight", "the line from the eye to the object", ""],
    ],
  }),

  section("📌 Elevation and depression", S`
  ${fig({ w: 440, items: [{ seg: [[0, 0], [10, 0]], color: "gray" }, { seg: [[0, 0], [0, 5]], color: "green", width: 4 }, { seg: [[0, 5], [10, 5]], color: "gray", dash: true }, { seg: [[0, 5], [10, 0]], color: "red" }, { arc: [[10, 5], [0, 5], [10, 0]], label: "depression", color: "amber" }, { arc: [[0, 0], [10, 0], [0, 5]], label: "elevation", color: "violet" }, { text: "cliff", at: [-0.9, 2.5] }, { dot: [10, 0], color: "blue", r: 5 }] }, "The horizontal at the top is parallel to the ground, so the angle of depression equals the angle of elevation (alternate angles).")}
  ${keyIdea(S`Both angles are measured from the <strong>horizontal</strong>, never from the vertical. Draw the horizontal line at the observer's eye, mark the angle, and find the right triangle. To solve any right triangle: use a ratio for a side, an inverse ratio for an angle, Pythagoras when two sides are known, and \(90^\circ-\theta\) for the other angle.`)}`),

  section("📌 Explore", S`<p>Switch between elevation and depression. Change the distances and angles and follow the tangent equation.</p>`),

  widget("elevationLab", { init: [30, 35] }),

  section("📌 Two triangles", S`
  <p>Some problems contain two right triangles that share a side — for example, sightings of the same building from two places. Find the shared side from the triangle with enough information, then use it in the other triangle. If neither triangle has enough on its own, write an equation for each and solve them together.</p>
  ${watchOut([
    "Angles of elevation and depression are measured from the horizontal.",
    "Add the observer's eye height when it is given.",
    "Draw a clear diagram before choosing a ratio.",
    "In two-triangle problems, keep full values for the shared side.",
  ])}`),

  examples([
    ["Solve a triangle (side and angle)", S`In \(\triangle ABC\), \(\angle C=90^\circ\), \(\angle A=32^\circ\) and the hypotenuse \(AB=15\). Solve the triangle.`,
      [S`\(\angle B=90^\circ-32^\circ=58^\circ\).`, S`\(BC=15\sin32^\circ\approx7.9\).`, S`\(AC=15\cos32^\circ\approx12.7\).`, S`Check: \(7.95^2+12.72^2\approx225=15^2\) ✓.`],
      S`\(\angle B=58^\circ\), \(BC\approx7.9\), \(AC\approx12.7\)`,
      fig({ w: 320, items: rt(15 * Math.cos(rad(32)), 15 * Math.sin(rad(32)), { hyp: "15", theta: "32°", names: ["A", "C", "B"] }) })],
    ["Solve a triangle (two legs)", S`A right triangle has legs \(6\) and \(11\). Find the hypotenuse and both acute angles.`,
      [S`\(c=\sqrt{6^2+11^2}=\sqrt{157}\approx12.5\).`, S`Angle opposite \(6\): \(\tan^{-1}\frac6{11}\approx28.6^\circ\); the other is \(61.4^\circ\).`],
      S`\(12.5\); \(28.6^\circ\) and \(61.4^\circ\)`],
    ["Angle of elevation", S`From \(40\) m away, the angle of elevation to the top of a building is \(38^\circ\). The observer's eyes are \(1.5\) m above the ground. How tall is the building?`,
      [S`Above eye level: \(\tan38^\circ=\frac{x}{40}\Rightarrow x=40\tan38^\circ\approx31.25\).`, S`Height \(\approx31.25+1.5=32.75\).`],
      S`about \(32.8\) m`],
    ["Angle of depression", S`From the top of a \(45\) m lighthouse, the angle of depression to a boat is \(12^\circ\). How far is the boat from the base of the lighthouse?`,
      [S`The angle at the boat is also \(12^\circ\) (alternate angles).`, S`\(\tan12^\circ=\frac{45}{d}\Rightarrow d=\frac{45}{\tan12^\circ}\approx211.7\).`],
      S`about \(211.7\) m`],
    ["Two sightings", S`From point \(P\), the angle of elevation to the top of a building is \(50^\circ\). From point \(Q\), \(20\) m farther away in a straight line, it is \(35^\circ\). Find the height of the building.`,
      [S`Let \(d\) be the distance from \(P\) to the building and \(h\) the height: \(h=d\tan50^\circ\) and \(h=(d+20)\tan35^\circ\).`, S`\(d\tan50^\circ=d\tan35^\circ+20\tan35^\circ\Rightarrow d=\frac{20\tan35^\circ}{\tan50^\circ-\tan35^\circ}\approx28.49\).`, S`\(h\approx28.49\tan50^\circ\approx33.95\).`],
      S`about \(34.0\) m`,
      fig({ w: 440, items: [{ seg: [[-1, 0], [49.5, 0]], color: "gray" }, { seg: [[0, 0], [0, 33.95]], color: "green", width: 5 }, { seg: [[28.49, 0], [0, 33.95]], color: "red" }, { seg: [[48.49, 0], [0, 33.95]], color: "blue" }, { arc: [[0, 0], [28.49, 0], [0, 33.95]], label: "50°", color: "red" }, { arc: [[0, 0], [48.49, 0], [0, 33.95]], label: "35°", color: "blue" }, { text: "P", at: [28.49, -2.6], bold: true }, { text: "Q", at: [48.49, -2.6], bold: true }, { text: "20 m", at: [38.5, -2.6] }, { text: "h", at: [-2, 17], bold: true, color: "green" }] })],
  ]),

  practice([
    q("side", S`A right triangle has hypotenuse \(10\) and an acute angle of \(25^\circ\). Find the side adjacent to that angle, to one decimal place.`, num(9.1, 0.06),
      "cos 25° = x/10.", [S`\(x=10\cos25^\circ\approx9.06\).`], S`\(9.1\)`),
    q("elevation", S`From \(25\) m away on level ground, the angle of elevation to the top of a tree is \(50^\circ\). How tall is the tree, to one decimal place (m)?`, num(29.8, 0.06),
      "tan 50° = h/25.", [S`\(h=25\tan50^\circ\approx29.79\).`], S`\(29.8\) m`),
    q("depression", S`From the top of an \(80\) m cliff, the angle of depression to a boat is \(20^\circ\). How far is the boat from the base of the cliff, to one decimal place (m)?`, num(219.8, 0.06),
      "tan 20° = 80/d.", [S`\(d=\frac{80}{\tan20^\circ}\approx219.80\).`], S`\(219.8\) m`),
    q("kite", S`A kite string is \(60\) m long and makes a \(40^\circ\) angle with the ground. How high is the kite, to one decimal place (m)?`, num(38.6, 0.06),
      "h = 60 sin 40°.", [S`\(60\sin40^\circ\approx38.57\).`], S`\(38.6\) m`),
    q("guy wire", S`A \(12\) m guy wire is attached \(9\) m up a pole. What angle does it make with the ground, to one decimal place (degrees)?`, num(48.6, 0.06),
      "sin θ = 9/12.", [S`\(\theta=\sin^{-1}0.75\approx48.59^\circ\).`], S`\(48.6^\circ\)`),
  ]),

  wrapUp({
    qas: [
      ["What information do I need to solve a right triangle?", "One side and one acute angle, or two sides. The right angle is already known."],
      ["Why is the angle of depression equal to the angle of elevation?", "The horizontal line at the top is parallel to the ground; the line of sight crosses both, making equal alternate angles."],
      ["Where do I measure these angles from?", "Always from the horizontal line through the observer's eye."],
      ["How do two-triangle problems work?", "Find a side the triangles share. If one triangle gives it directly, use it in the other; otherwise write an equation for each triangle and solve them together."],
      ["How can I check a solved triangle?", "The angles must add to 180°, the hypotenuse must be longest, and the sides must satisfy a² + b² = c²."],
    ],
    summary: [
      "Solve: all sides and angles (ratios, inverses, Pythagoras, 90° − θ).",
      "Elevation and depression from the horizontal.",
      "Depression = elevation from the other end.",
      "Two triangles: find the shared side first.",
    ],
    next: "6.7 reviews the whole chapter.",
  }),
];
