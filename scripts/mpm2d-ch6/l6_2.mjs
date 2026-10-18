// MPM2D 6.2 — Solving Problems with Similar Triangles (self-study format): shadows, mirrors, river widths,
// slopes along a ramp, and a lamp-post shadow that needs an equation
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, q, num, fig, polygon } from "./lib.mjs";

export const TITLE = "6.2 Solving Problems with Similar Triangles";

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "🌳",
    title: "Solving Problems with Similar Triangles",
    overview: S`Similar triangles let you measure what you cannot reach: the height of a tree from its shadow, the width of a river from the bank, the height of a building with a mirror on the ground. Each problem has the same plan: draw a diagram, find two triangles with matching angles, explain why they are similar, write one proportion and solve it. In this lesson you will practise that plan on several kinds of problems, including one where the unknown appears in both triangles.`,
    goals: [
      "draw and label diagrams for measurement problems;",
      "explain why two triangles in a problem are similar (AA);",
      "write and solve a proportion for an unknown length;",
      "solve shadow, mirror, river and ramp problems;",
      "solve a problem where the unknown appears in both triangles.",
    ],
    curriculum: "T1 (solve problems, including those that arise from real-world applications, using the properties of similar triangles)",
    prior: [
      [S`Solve \(\frac{x}{1.5}=\frac{12}{2}\).`, S`\(x=9\).`],
      [S`Solve \(\frac{s}{2}=\frac{s+6}{5}\).`, S`\(5s=2s+12\Rightarrow s=4\).`],
      [S`Why are the sun's rays treated as parallel?`, S`The sun is so far away.`],
    ],
    words: [
      ["Proportion", "two equal ratios", "\\(\\frac{h}{1.8}=\\frac{14}{2.4}\\)"],
      ["Angle of incidence", "the angle a ray makes with a mirror; it equals the angle of reflection", ""],
      ["Indirect measurement", "finding a length without measuring it directly", ""],
      ["AA", "two pairs of equal angles prove similarity", ""],
    ],
  }),

  section("📌 The plan", S`
  ${fig({ w: 460, items: [{ seg: [[-1, 0], [19, 0]], color: "gray" }, ...polygon([[0, 0], [14, 0], [0, 10.5]], { fill: "green", color: "green", rightAt: [0], sides: ["14 m", "", "h"] }), ...polygon([[15.5, 0], [17.9, 0], [15.5, 1.8]], { fill: "blue", rightAt: [0], sides: ["2.4", "", "1.8"] })] }, "A tree and a person, with their shadows: both triangles have a right angle and the same sun angle.")}
  ${keyIdea(S`(1) Draw and label a diagram. (2) Find two triangles and give the reason they are similar — usually two equal angles (right angles, parallel rays, equal reflection angles, a shared angle). (3) Write one proportion with corresponding sides in the same order. (4) Solve and answer with units.`)}`),

  section("📌 Explore", S`<p>Change the person's height and the two shadows. The sun angle is the same for both, so the ratio height : shadow is the same for both.</p>`),

  widget("shadowLab", { init: [1.6, 2.4, 15] }),

  section("📌 Where the similar triangles come from", S`
  <ul>
    <li><strong>Shadows:</strong> right angle at the ground + the same sun angle.</li>
    <li><strong>Mirrors:</strong> right angles + equal angles of incidence and reflection.</li>
    <li><strong>Parallel lines:</strong> corresponding angles are equal; a shared angle completes AA.</li>
  </ul>
  ${watchOut([
    "Pair heights with heights and shadows with shadows — don't cross them.",
    "In a mirror problem the person's eye height matters, not their full height.",
    "When one triangle sits inside another, the big triangle's side is the whole length.",
    "If the unknown appears in both triangles, write the proportion and solve the equation.",
  ])}`),

  examples([
    ["A tree's shadow", S`A \(1.8\) m tall person casts a \(2.4\) m shadow at the same time as a tree casts a \(14\) m shadow. How tall is the tree?`,
      [S`Right angles and the same sun angle: the triangles are similar (AA).`, S`\(\frac{h}{1.8}=\frac{14}{2.4}\Rightarrow h=\frac{1.8\times14}{2.4}=10.5\).`],
      S`\(10.5\) m`],
    ["A mirror", S`A mirror lies on the ground \(12\) m from a building. Standing \(2\) m from the mirror, a person whose eyes are \(1.5\) m high sees the top of the building in it. How tall is the building?`,
      [S`Right angles and equal angles of reflection: similar triangles (AA).`, S`\(\frac{h}{1.5}=\frac{12}{2}\Rightarrow h=9\).`],
      S`\(9\) m`,
      fig({ w: 440, items: [{ seg: [[-1, 0], [15, 0]], color: "gray" }, ...polygon([[0, 0], [12, 0], [0, 9]], { fill: "green", color: "green", rightAt: [0], sides: ["12 m", "", "h"] }), ...polygon([[12, 0], [14, 0], [14, 1.5]], { fill: "blue", rightAt: [1], sides: ["2 m", "1.5", ""] }), { dot: [12, 0], color: "red", r: 5 }, { text: "mirror", at: [12, -0.9], color: "red" }] })],
    ["Width of a river", S`To find the width \(x\) of a river, a surveyor sets up two similar right triangles: the large one has legs \(x\) (across the river) and \(30\) m (along the bank); the small one has legs \(12\) m and \(18\) m, matching \(x\) and \(30\) m respectively. Find \(x\).`,
      [S`The triangles share an angle and have right angles: similar (AA).`, S`\(\frac{x}{12}=\frac{30}{18}\Rightarrow x=\frac{12\times30}{18}=20\).`],
      S`\(20\) m`],
    ["Along a ramp", S`A ramp rises \(1.2\) m over a horizontal distance of \(4\) m. At what horizontal distance from the bottom is it \(0.75\) m high?`,
      [S`Any vertical post under the ramp makes a smaller triangle with the same angles.`, S`\(\frac{d}{4}=\frac{0.75}{1.2}\Rightarrow d=2.5\).`],
      S`\(2.5\) m`],
    ["Unknown in both triangles", S`A \(1.6\) m tall person stands \(4\) m from a \(6\) m lamp post. How long is the person's shadow?`,
      [S`Let the shadow be \(s\). The big triangle (lamp) has base \(s+4\); the small one (person) has base \(s\).`, S`\(\frac{s}{1.6}=\frac{s+4}{6}\Rightarrow6s=1.6s+6.4\Rightarrow4.4s=6.4\).`, S`\(s=\frac{6.4}{4.4}\approx1.45\).`],
      S`about \(1.45\) m`,
      fig({ w: 440, items: [{ seg: [[-0.5, 0], [6.3, 0]], color: "gray" }, { seg: [[0, 0], [0, 6]], color: "gray", width: 4 }, ...polygon([[0, 6], [0, 0], [5.45, 0]], { fill: "amber", color: "amber", sides: ["6 m", "s + 4", ""] }), { seg: [[4, 0], [4, 1.6]], color: "blue", width: 4 }, { text: "1.6 m", at: [3.4, 0.9], color: "blue", bold: true }, { text: "4 m", at: [2, -0.6], color: "ink" }, { text: "s", at: [4.7, -0.6], color: "red", bold: true }] })],
  ]),

  practice([
    q("shadow", S`A \(1.5\) m stick casts a \(2\) m shadow when a flagpole casts a \(16\) m shadow. How tall is the flagpole (m)?`, num(12),
      "height : shadow is the same.", [S`\(\frac{h}{1.5}=\frac{16}{2}\).`], S`\(12\) m`),
    q("mirror", S`A person whose eyes are \(1.6\) m high stands \(2.5\) m from a mirror on the ground and sees the top of a tree \(20\) m beyond the mirror. How tall is the tree (m)?`, num(12.8),
      "eye height : distance = tree height : distance.", [S`\(\frac{h}{1.6}=\frac{20}{2.5}=8\).`], S`\(12.8\) m`),
    q("building", S`A \(3\) m pole casts a \(4\) m shadow. A building nearby casts a \(30\) m shadow. How tall is the building (m)?`, num(22.5),
      "Set up the proportion.", [S`\(\frac{h}{3}=\frac{30}{4}\).`], S`\(22.5\) m`),
    q("scale model", S`A model is built to a scale of \(1:50\). A model car is \(9\) cm long. How long is the real car, in metres?`, num(4.5),
      "Multiply by 50, then convert.", [S`\(9\times50=450\) cm.`], S`\(4.5\) m`),
    q("lamp post", S`A \(1.8\) m tall person stands \(3\) m from a \(5.4\) m lamp post. How long is the shadow (m)?`, num(1.5),
      "s/1.8 = (s + 3)/5.4.", [S`\(5.4s=1.8s+5.4\Rightarrow3.6s=5.4\).`], S`\(1.5\) m`),
  ]),

  wrapUp({
    qas: [
      ["How do I know the triangles are similar?", "Look for two pairs of equal angles: right angles with the ground, parallel sun rays, equal mirror angles, parallel lines, or an angle the two triangles share."],
      ["Which sides go together in the proportion?", "Sides opposite equal angles. In practice: height with height, ground distance with ground distance, in the same order in both ratios."],
      ["Why does a mirror work?", "Light reflects at equal angles, so the person's triangle and the building's triangle have equal angles at the mirror, plus right angles."],
      ["What if the unknown appears twice?", "Write the proportion anyway and solve it as an equation: cross-multiply, collect the unknown on one side, divide."],
      ["How accurate are these methods?", "They depend on careful measurement and on the angles really being equal — the ground must be level and the objects vertical."],
    ],
    summary: [
      "Draw it, find two triangles, give the AA reason.",
      "Write one proportion with matching sides.",
      "Shadows, mirrors, parallels and shared angles give AA.",
      "Answer with units and a sentence.",
    ],
    next: "6.3 uses similar right triangles to define sine, cosine and tangent.",
  }),
];
