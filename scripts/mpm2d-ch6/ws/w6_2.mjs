// MPM2D Worksheet 6.2 — Solving Problems with Similar Triangles (teacher edition)
import { sceneT, polygon } from "./figT.mjs";

const ground = (a, b) => ({ seg: [[a, 0], [b, 0]], color: "gray" });
// not-to-scale sketches: the tree is drawn 8 by 10 and the person 3.2 by 4, whatever the numbers
const shadow = (_H, _S, _h, _s, lH = "", lS = "", lh = "", ls = "") => { const H = 8, S = 10, h = 3.2, s = 4, gap = 1.5; return sceneT([ground(-0.5, S + gap + s + 0.5), { text: "not to scale", at: [S / 2, H + 0.6], size: 11, color: "gray" }, ...polygon([[0, 0], [S, 0], [0, H]], { fill: "green", color: "green", rightAt: [0], sides: [lS, "", lH] }), ...polygon([[S + gap, 0], [S + gap + s, 0], [S + gap, h]], { fill: "blue", rightAt: [0], sides: [ls, "", lh] })], 6, 420); };
const mirror = (_H, _d1, _e, _d2, lH, l1, le, l2) => { const H = 8, d1 = 10, e = 3, d2 = 3.75; return sceneT([{ text: "not to scale", at: [d1 / 2, H + 0.6], size: 11, color: "gray" }, ground(-0.5, d1 + d2 + 0.5), ...polygon([[0, 0], [d1, 0], [0, H]], { fill: "green", color: "green", rightAt: [0], sides: [l1, "", lH] }), ...polygon([[d1, 0], [d1 + d2, 0], [d1 + d2, e]], { fill: "blue", rightAt: [1], sides: [l2, le, ""] }), { dot: [d1, 0], color: "red", r: 5 }, { text: "mirror", at: [d1, -0.08 * (d1 + d2)], color: "red", size: 12 }], 6, 420); };

const EXAMPLES = [
  { title: "Building shadow", q: String.raw`A $1.7$ m tall person casts a $2.5$ m shadow when a building casts a $30$ m shadow. How tall is the building?`,
    fig: shadow(20.4, 30, 1.7, 2.5, "h", "30 m", "1.7", "2.5"),
    steps: [String.raw`Right angles and the same sun angle: similar (AA).`, String.raw`$\frac{h}{1.7}=\frac{30}{2.5}\Rightarrow h=20.4$.`], ans: String.raw`$20.4$ m` },
  { title: "Mirror", q: String.raw`A person whose eyes are $1.4$ m high stands $1.75$ m from a mirror on the ground and sees the top of a flagpole $14$ m beyond the mirror. How tall is the flagpole?`,
    fig: mirror(11.2, 14, 1.4, 1.75, "h", "14 m", "1.4", "1.75"),
    steps: [String.raw`Equal angles at the mirror and right angles: similar (AA).`, String.raw`$\frac{h}{1.4}=\frac{14}{1.75}=8\Rightarrow h=11.2$.`], ans: String.raw`$11.2$ m` },
  { title: "River width", q: String.raw`A surveyor's similar right triangles: the large one has legs $x$ (across the river) and $40$ m; the small one has matching legs $9$ m and $15$ m. Find $x$.`,
    steps: [String.raw`$\frac{x}{9}=\frac{40}{15}\Rightarrow x=24$.`], ans: String.raw`$24$ m` },
  { title: "Sighting with a ruler", q: String.raw`A $30$ cm ruler held upright $60$ cm from the eye just covers a tower $300$ m away. How tall is the tower?`,
    steps: [String.raw`The eye, ruler and tower form two similar triangles.`, String.raw`$\frac{h}{0.3}=\frac{300}{0.6}\Rightarrow h=150$.`], ans: String.raw`$150$ m` },
  { title: "Along a ramp", q: String.raw`A ramp rises $0.9$ m over a horizontal run of $6$ m. How high is it $4$ m from the bottom (horizontally)?`,
    fig: sceneT([...polygon([[0, 0], [6, 0], [6, 0.9]], { fill: "amber", color: "amber", rightAt: [1], sides: ["6 m", "0.9 m", ""] }), { seg: [[4, 0], [4, 0.6]], color: "red", width: 2.6 }, { text: "4 m", at: [2, -0.3] }], 5.5, 380),
    steps: [String.raw`$\frac{x}{0.9}=\frac46\Rightarrow x=0.6$.`], ans: String.raw`$0.6$ m` },
  { title: "Lamp post", q: String.raw`A $1.5$ m tall child stands $2$ m from a $4.5$ m lamp post. How long is the child's shadow?`,
    steps: [String.raw`$\frac{s}{1.5}=\frac{s+2}{4.5}\Rightarrow4.5s=1.5s+3$.`, String.raw`$3s=3\Rightarrow s=1$.`], ans: String.raw`$1$ m` },
  { title: "Pinhole camera", q: String.raw`A $2$ m tall object is $5$ m in front of a pinhole camera that is $0.2$ m deep. How tall is the upside-down image?`,
    steps: [String.raw`The two triangles meet at the pinhole (vertical angles): similar.`, String.raw`$\frac{i}{2}=\frac{0.2}{5}\Rightarrow i=0.08$.`], ans: String.raw`$8$ cm` },
  { title: "Map scale", q: String.raw`On a $1:25\,000$ map, two towns are $6.4$ cm apart. How far apart are they?`,
    steps: [String.raw`$6.4\times25\,000=160\,000$ cm.`], ans: String.raw`$1.6$ km` },
  { title: "Shadow tips meet", q: String.raw`A $1.8$ m person stands $9$ m from a flagpole so that the tips of their shadows meet. The person's shadow is $3$ m. How tall is the flagpole?`,
    fig: sceneT([ground(-0.5, 12.5), { seg: [[0, 0], [0, 7.2]], color: "green", width: 4 }, { seg: [[9, 0], [9, 1.8]], color: "blue", width: 4 }, { seg: [[0, 7.2], [12, 0]], color: "amber" }, { text: "h", at: [-0.6, 3.6], bold: true }, { text: "1.8", at: [8.4, 0.9], color: "blue" }, { text: "9 m", at: [4.5, -0.6] }, { text: "3 m", at: [10.5, -0.6] }], 5.5, 380),
    steps: [String.raw`Large triangle base $9+3=12$; small base $3$.`, String.raw`$\frac{h}{1.8}=\frac{12}{3}\Rightarrow h=7.2$.`], ans: String.raw`$7.2$ m` },
];

const PROBLEMS = [
  { level: 1, q: String.raw`A $1.6$ m post casts a $2$ m shadow when a tree casts a $12.5$ m shadow. How tall is the tree?`, recap: "Shadow.", ans: String.raw`$10$ m` },
  { level: 1, q: String.raw`Eyes $1.5$ m high, $3$ m from a mirror on the ground; a building is $24$ m beyond the mirror. How tall is it?`, recap: "Mirror.", ans: String.raw`$12$ m` },
  { level: 1, q: String.raw`A model is built at $1:20$. A model table is $15$ cm long. How long is the real table?`, recap: "Scale.", ans: String.raw`$300$ cm $=3$ m` },
  { level: 2, q: String.raw`A $1$ m stick casts a $1.25$ m shadow when a tower casts a $50$ m shadow. How tall is the tower?`, recap: "Tower.", ans: String.raw`$40$ m`, fig: shadow(10, 12.5, 1, 1.25, "h", "50 m", "1 m", "1.25 m") },
  { level: 2, q: String.raw`Similar right triangles across a river: legs $x$ and $35$ m in the large one match $6$ m and $10$ m in the small one. Find $x$.`, recap: "River.", ans: String.raw`$21$ m` },
  { level: 2, q: String.raw`A $1.6$ m person stands $5$ m from a $6$ m lamp post. How long is the shadow, to two decimal places?`, recap: "Lamp post.", ans: String.raw`$6s=1.6s+8$: $s\approx1.82$ m` },
  { level: 2, q: String.raw`A $1.5$ m person stands $6$ m from a pole so their shadow tips meet. The person's shadow is $2.5$ m. How tall is the pole?`, recap: "Shadow tips.", ans: String.raw`$\frac{h}{1.5}=\frac{8.5}{2.5}$: $5.1$ m` },
  { level: 2, q: String.raw`A $1.8$ m object is $3$ m from a pinhole camera that is $0.25$ m deep. How tall is the image?`, recap: "Pinhole.", ans: String.raw`$0.15$ m $=15$ cm` },
  { level: 3, space: 5, q: String.raw`A $20$ cm ruler held $50$ cm from your eye just covers a tree $40$ m away. How tall is the tree? Draw the similar triangles.`, recap: "Ruler sighting.", ans: String.raw`$\frac{h}{0.2}=\frac{40}{0.5}$: $16$ m` },
  { level: 3, space: 5, q: String.raw`A ramp has a run of $6$ m and a rise of $1.2$ m. Support posts stand every $1.5$ m along the run. Find the height of each post.`, recap: "Ramp posts.", ans: String.raw`$0.3$, $0.6$, $0.9$ m (and $1.2$ m at the end)`, fig: sceneT([...polygon([[0, 0], [6, 0], [6, 1.2]], { fill: "amber", color: "amber", rightAt: [1], sides: ["6 m", "1.2 m", ""] }), ...[1.5, 3, 4.5].map((x) => ({ seg: [[x, 0], [x, x * 0.2]], color: "red", width: 2.4 }))], 5.5, 380) },
  { level: 3, space: 5, q: String.raw`Explain why the shadow method gives a wrong answer if the ground slopes between the person and the tree.`, recap: "When it fails.", ans: "the triangles no longer both have right angles with the same ground line, so they need not be similar" },
  { level: 3, space: 5, q: String.raw`Describe, step by step, how you could measure the height of your school's flagpole using only your own height, a measuring tape and a sunny day.`, recap: "Design a method.", ans: "measure your height, your shadow and the pole's shadow at the same time; h = your height × pole shadow ÷ your shadow" },
  { level: 3, space: 5, q: String.raw`A person whose eyes are $1.5$ m high stands $4$ m from a $2$ m wall and can just see the top of a tree over the wall. The tree is $20$ m beyond the wall. How tall is the tree?`, recap: "Over a wall.", ans: String.raw`the sight line rises $0.5$ m per $4$ m, so $3$ m over $24$ m: $4.5$ m`,
    fig: sceneT([ground(-0.5, 24.5), { seg: [[0, 0], [0, 1.5]], color: "blue", width: 4 }, { seg: [[4, 0], [4, 2]], color: "gray", width: 6 }, { seg: [[24, 0], [24, 4.5]], color: "green", width: 4 }, { seg: [[0, 1.5], [24, 4.5]], color: "red", dash: true }, { text: "1.5 m", at: [-1.4, 0.8], color: "blue" }, { text: "2 m", at: [4.9, 1], color: "gray" }, { text: "4 m", at: [2, -0.5] }, { text: "20 m", at: [14, -0.5] }, { text: "h", at: [24.8, 2.3], bold: true, color: "green" }], 6, 420) },
];

export const WS = {
  code: "6.2",
  title: "Solving Problems with Similar Triangles",
  bigideas: String.raw`Similar triangles let you measure lengths you cannot reach. Draw a labelled diagram, find two triangles with two pairs of equal angles (right angles, parallel sun rays, equal mirror angles, parallel lines, a shared or vertical angle), write one proportion with matching sides and solve. If the unknown appears in both triangles, solve the proportion as an equation.`,
  goals: ["Find similar triangles in real situations.", "Justify similarity with AA.", "Write and solve a proportion.", "Solve shadow, mirror, river, ramp and lamp problems."],
  curriculum: "T1",
  vocab: [["Indirect measurement", "finding a length without measuring it"], ["Proportion", "$\\frac{a}{b}=\\frac{c}{d}$"], ["AA", "two pairs of equal angles"]],
  hook: String.raw`Take the class outside (or show a photo) of a flagpole's shadow. Ask: how could we find its height without climbing it?`,
  concepts: [
    ["1. Shadows", String.raw`Same sun angle + right angles → similar.
${shadow(9, 12, 1.5, 2, "h", "12 m", "1.5", "2", 1.2)}`],
    ["2. Mirrors", String.raw`Angles of incidence and reflection are equal.`],
    ["3. Unknown in both", String.raw`Write $\frac{s}{h_1}=\frac{s+d}{h_2}$ and solve.`],
  ],
  tips: ["Heights with heights, ground with ground.", "Eye height, not full height, in mirror problems.", "Whole base in the big triangle.", "Convert units at the end.", "Give the AA reason."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
