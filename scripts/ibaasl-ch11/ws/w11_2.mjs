// IB AA SL Worksheet 11.2 — Right-Angled Triangle Trigonometry (teacher edition)
import { svgT } from "./figT.mjs";
import { figDoc, rightT, elevation } from "../figs11.mjs";

const S = String.raw;
const T = (items, w = 5.4) => svgT(figDoc({ items }), w);
const tn = (d) => Math.tan((d * Math.PI) / 180);

const EXAMPLES = [
  { title: "Opposite side", q: S`The hypotenuse is 16 and one angle is 27°. Find the side opposite the angle.`,
    fig: T(rightT(14.26, 7.26, { lb: "x", lc: "16", angle: "27°" })),
    steps: [S`$16\sin27^\circ$.`], ans: S`$\approx7.26$` },
  { title: "Adjacent side", q: S`The side opposite a 62° angle is 9. Find the adjacent side.`,
    steps: [S`$\tan62^\circ=\frac9x\Rightarrow x=\frac9{\tan62^\circ}$.`], ans: S`$\approx4.79$` },
  { title: "Hypotenuse", q: S`The side adjacent to a 18° angle is 25. Find the hypotenuse.`,
    steps: [S`$h=\frac{25}{\cos18^\circ}$.`], ans: S`$\approx26.29$` },
  { title: "Angle from two sides", q: "A right triangle has legs 7 and 24. Find its smallest angle.",
    steps: [S`$\tan\theta=\frac7{24}$.`], ans: S`$\approx16.26^\circ$` },
  { title: "Exact values", q: S`Find the exact value of $\sin60^\circ\cos30^\circ+\sin30^\circ\cos60^\circ$.`,
    steps: [S`$\frac34+\frac14$.`], ans: "1" },
  { title: "Elevation", q: "From 30 m away, the angle of elevation of the top of a tree is 41°. Find the tree's height.",
    fig: T(elevation(30, 30 * tn(41), { ld: "30 m", lh: "h", angle: "41°" })),
    steps: [S`$30\tan41^\circ$.`], ans: S`$\approx26.1$ m` },
  { title: "Depression", q: "From a window 18 m up, the angle of depression of a bench is 31°. How far is the bench from the wall?",
    steps: [S`$\frac{18}{\tan31^\circ}$.`], ans: S`$\approx29.96$ m` },
  { title: "Eye height", q: "A person with eyes 1.7 m above the ground stands 25 m from a building and sees its top at 50°. Find the building's height.",
    steps: [S`$25\tan50^\circ+1.7$.`], ans: S`$\approx31.5$ m` },
  { title: "Two right triangles", q: "From a point 40 m from a building, the angles of elevation of the bottom and top of a flagpole on the roof are 32° and 38°. Find the flagpole's length.",
    steps: [S`$40\tan38^\circ-40\tan32^\circ$.`], ans: S`$\approx6.26$ m` },
];

const PROBLEMS = [
  { level: 1, q: S`Find the side opposite a 35° angle if the hypotenuse is 12.`, recap: "sin.", ans: S`$\approx6.88$` },
  { level: 1, q: S`Find θ if adj = 8 and hyp = 10.`, recap: S`$\cos^{-1}$.`, ans: S`$\approx36.87^\circ$` },
  { level: 1, q: S`Write down the exact value of $\tan30^\circ$.`, recap: "Special triangle.", ans: S`$\frac{1}{\sqrt3}=\frac{\sqrt3}{3}$` },
  { level: 2, q: S`The side opposite a 48° angle is 20. Find the hypotenuse.`, recap: "Unknown in the denominator.", ans: S`$\approx26.91$` },
  { level: 2, q: "A 6 m ladder reaches 5.4 m up a wall. Find the angle with the ground.", recap: S`$\sin^{-1}$.`, ans: S`$\approx64.16^\circ$` },
  { level: 2, q: "A plane takes off at 14° and flies 2 km in a straight line. Find its height.", recap: "sin.", ans: S`$\approx0.484$ km` },
  { level: 2, q: "From a 75 m cliff the angle of depression of a ship is 9°. Find its distance from the cliff base.", recap: "tan.", ans: S`$\approx473.5$ m` },
  { level: 2, q: "Label opp, adj and hyp for the marked angle, then find x.", recap: "Choose the ratio.", ans: S`$x=11\cos40^\circ\approx8.43$`,
    fig: T(rightT(8.43, 7.07, { la: "x", lc: "11", angle: "40°" }), 4.8) },
  { level: 3, space: 4, q: "From two points 30 m apart in line with a tower, the angles of elevation are 25° and 40°. Find the tower's height.", recap: "Two equations.", ans: S`$h\approx${(30 / (1 / tn(25) - 1 / tn(40))).toFixed(1)}$ m` },
  { level: 3, space: 4, q: S`In triangle ABC, B = 90°, A = 60° and AC = 10. Find AB and BC exactly.`, recap: "Exact values.", ans: S`$AB=5$, $BC=5\sqrt3$` },
  { level: 3, space: 4, q: "A rhombus has diagonals 16 and 12. Find its interior angles.", recap: "Half-diagonals.", ans: S`$2\tan^{-1}\frac68\approx73.74^\circ$ and $106.26^\circ$` },
  { level: 3, space: 4, q: "A regular hexagon has side 8. Find the distance between opposite sides.", recap: "30–60–90.", ans: S`$8\sqrt3\approx13.86$` },
  { level: 3, space: 4, q: S`Show that $\sin^2\theta+\cos^2\theta=1$ using a right triangle with hypotenuse 1.`, recap: "Pythagoras.", ans: S`legs $\sin\theta$, $\cos\theta$: $\sin^2\theta+\cos^2\theta=1^2$` },
];

export const WS = {
  code: "11.2",
  title: "Right-Angled Triangle Trigonometry",
  bigideas: S`In a right triangle, relative to an angle θ: $\sin\theta=\frac{\text{opp}}{\text{hyp}}$, $\cos\theta=\frac{\text{adj}}{\text{hyp}}$, $\tan\theta=\frac{\text{opp}}{\text{adj}}$. Inverse functions give angles. Exact values come from the 30°–60°–90° (1 : √3 : 2) and 45°–45°–90° (1 : 1 : √2) triangles. Elevation and depression are measured from the horizontal.`,
  goals: ["Find sides.", "Find angles.", "Use exact values.", "Solve elevation problems."],
  curriculum: "SL 3.2",
  vocab: [["SOH CAH TOA", "the three ratios"], ["Elevation", "up from horizontal"], ["Depression", "down from horizontal"]],
  hook: "How tall is your school? Measure your distance from the wall and the angle to the roof — trigonometry does the rest.",
  concepts: [
    ["1. Ratios", S`${T(rightT(8, 5, { la: "adj", lb: "opp", lc: "hyp", angle: "θ" }), 4.6)} Label from θ.`],
    ["2. Exact values", "Special triangles."],
    ["3. Applications", "Elevation and depression."],
  ],
  tips: ["Degree mode.", "Label from the angle.", "Unknown below the line: rearrange.", "Add eye height.", "Depression = elevation."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
