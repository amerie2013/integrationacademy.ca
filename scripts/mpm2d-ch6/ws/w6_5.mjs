// MPM2D Worksheet 6.5 — Finding Angles (teacher edition)
import { rtT } from "./figT.mjs";

const EXAMPLES = [
  { title: "Inverse sine", q: String.raw`The side opposite $\theta$ is $4$ and the hypotenuse is $7$. Find $\theta$ to the nearest degree.`,
    fig: rtT(Math.sqrt(33), 4, { opp: "4", hyp: "7", theta: "θ" }),
    steps: [String.raw`$\sin\theta=\frac47$.`, String.raw`$\theta=\sin^{-1}\frac47\approx34.8^\circ$.`], ans: String.raw`$35^\circ$` },
  { title: "Inverse cosine", q: String.raw`The side adjacent to $\theta$ is $5$ and the hypotenuse is $8$. Find $\theta$.`,
    steps: [String.raw`$\theta=\cos^{-1}\frac58\approx51.3^\circ$.`], ans: String.raw`$51^\circ$` },
  { title: "Inverse tangent", q: String.raw`The side opposite $\theta$ is $9$ and the adjacent side is $4$. Find $\theta$.`,
    fig: rtT(4, 9, { opp: "9", adj: "4", theta: "θ" }, 4),
    steps: [String.raw`$\theta=\tan^{-1}\frac94\approx66.0^\circ$.`, String.raw`Opposite longer than adjacent, so $\theta>45^\circ$ ✓.`], ans: String.raw`$66^\circ$` },
  { title: "A small angle", q: String.raw`A road rises $3$ m over a horizontal distance of $14$ m. Find its angle of inclination.`,
    steps: [String.raw`$\theta=\tan^{-1}\frac3{14}\approx12.1^\circ$.`], ans: String.raw`about $12.1^\circ$` },
  { title: "Both acute angles", q: String.raw`A right triangle has hypotenuse $6$ and one leg $2.5$. Find both acute angles.`,
    fig: rtT(Math.sqrt(29.75), 2.5, { opp: "2.5", hyp: "6", theta: "θ", other: "β" }),
    steps: [String.raw`Angle opposite $2.5$: $\sin^{-1}\frac{2.5}6\approx24.6^\circ$.`, String.raw`Other: $90^\circ-24.6^\circ=65.4^\circ$.`], ans: String.raw`$24.6^\circ$ and $65.4^\circ$` },
  { title: "Ladder angle", q: String.raw`A $3.5$ m ladder has its foot $3$ m from a wall. What angle does it make with the wall?`,
    steps: [String.raw`From the top: opposite $3$, hypotenuse $3.5$. Or from the ground: $\cos\theta=\frac3{3.5}$ gives $31.0^\circ$ with the ground.`, String.raw`Angle with the wall $=\sin^{-1}\frac3{3.5}\approx59.0^\circ$.`], ans: String.raw`about $59.0^\circ$ (it would be unsafe)` },
  { title: "Angle of a roof", q: String.raw`A roof rises $1.5$ m over a horizontal distance of $8$ m. Find its pitch angle.`,
    steps: [String.raw`$\tan^{-1}\frac{1.5}8\approx10.6^\circ$.`], ans: String.raw`about $10.6^\circ$` },
  { title: "Using a ratio given as a decimal", q: String.raw`$\tan\theta=0.75$. Find $\theta$ and the ratio $\sin\theta$.`,
    steps: [String.raw`$\theta=\tan^{-1}0.75\approx36.9^\circ$.`, String.raw`A $3$-$4$-$5$ triangle has $\tan\theta=\frac34$, so $\sin\theta=\frac35$.`], ans: String.raw`$36.9^\circ$; $0.6$` },
  { title: "Check with a second ratio", q: String.raw`A right triangle has legs $12$ and $9$ and hypotenuse $15$. Find the angle opposite $12$ two ways.`,
    steps: [String.raw`$\tan^{-1}\frac{12}9\approx53.1^\circ$.`, String.raw`$\sin^{-1}\frac{12}{15}\approx53.1^\circ$ ✓.`], ans: String.raw`$53.1^\circ$` },
];

const PROBLEMS = [
  { level: 1, q: String.raw`$\sin\theta=0.3$. Find $\theta$ to one decimal place.`, recap: "sin⁻¹.", ans: String.raw`$17.5^\circ$` },
  { level: 1, q: String.raw`$\cos\theta=\frac9{13}$. Find $\theta$ to one decimal place.`, recap: "cos⁻¹.", ans: String.raw`$46.2^\circ$` },
  { level: 1, q: String.raw`$\tan\theta=\frac{11}6$. Find $\theta$ to one decimal place.`, recap: "tan⁻¹.", ans: String.raw`$61.4^\circ$` },
  { level: 2, q: String.raw`Find $\theta$ in the triangle shown.`, recap: "Choose the inverse.", ans: String.raw`$\tan^{-1}\frac27\approx15.9^\circ$`, fig: rtT(7, 2, { opp: "2", adj: "7", theta: "θ" }) },
  { level: 2, q: String.raw`Find both acute angles of a right triangle with legs $5$ and $12$.`, recap: "Both angles.", ans: String.raw`$22.6^\circ$ and $67.4^\circ$` },
  { level: 2, q: String.raw`A $4$ m ladder reaches $3.6$ m up a wall. What angle does it make with the ground?`, recap: "Ladder.", ans: String.raw`$\sin^{-1}0.9\approx64.2^\circ$` },
  { level: 2, q: String.raw`A ramp rises $2.4$ m over a run of $10$ m. Find its angle of inclination.`, recap: "Ramp.", ans: String.raw`$\tan^{-1}0.24\approx13.5^\circ$` },
  { level: 2, q: String.raw`Find $\theta$ in the triangle shown.`, recap: "cos⁻¹.", ans: String.raw`$\cos^{-1}0.9\approx25.8^\circ$`, fig: rtT(9, Math.sqrt(19), { adj: "9", hyp: "10", theta: "θ" }) },
  { level: 3, space: 5, q: String.raw`A railway climbs $45$ m over a horizontal distance of $600$ m. Find the angle of the track. Railways usually stay below $4^\circ$ — is this one acceptable?`, recap: "Railway grade.", ans: String.raw`$\tan^{-1}\frac{45}{600}\approx4.3^\circ$; slightly too steep` },
  { level: 3, space: 5, q: String.raw`A $24$ m guy wire is attached $18$ m up a tower. Find the angle the wire makes with the ground and with the tower.`, recap: "Two angles.", ans: String.raw`$48.6^\circ$ with the ground; $41.4^\circ$ with the tower` },
  { level: 3, space: 5, q: String.raw`A student says $\sin^{-1}(0.5)=\frac1{\sin0.5}$. Explain the error and find the correct value.`, recap: "Inverse notation.", ans: String.raw`$\sin^{-1}$ means the angle whose sine is $0.5$: $30^\circ$` },
  { level: 3, space: 5, q: String.raw`Explain why $\cos^{-1}(1.3)$ gives an error on a calculator, using a right triangle.`, recap: "No angle.", ans: "cos θ = adjacent ÷ hypotenuse is less than 1, so no angle has cosine 1.3" },
  { level: 3, space: 5, q: String.raw`A building is $120$ m tall. From a point on level ground $50$ m from its base, find the angle of elevation to the top.`, recap: "Angle of elevation.", ans: String.raw`$\tan^{-1}\frac{120}{50}\approx67.4^\circ$` },
];

export const WS = {
  code: "6.5",
  title: "Finding Angles",
  bigideas: String.raw`With two sides of a right triangle, write the ratio of those sides relative to the unknown angle and use the inverse key: $\theta=\sin^{-1}\frac{O}{H}$, $\cos^{-1}\frac{A}{H}$ or $\tan^{-1}\frac{O}{A}$. The other acute angle is $90^\circ-\theta$. $\sin^{-1}$ means ‘the angle whose sine is’, not a reciprocal.`,
  goals: ["Use sin⁻¹, cos⁻¹ and tan⁻¹.", "Choose the ratio from two sides.", "Find both acute angles.", "Solve slope and ladder problems."],
  curriculum: "T2",
  vocab: [["sin⁻¹", "the angle with a given sine"], ["Angle of inclination", "slope angle with the horizontal"], ["Complementary", "add to $90^\\circ$"]],
  hook: String.raw`Ask: a ramp rises 1 m over 12 m — is that steep? How could we put a number on the steepness?`,
  concepts: [
    ["1. Working backwards", String.raw`Ratio first, then the inverse key.
${rtT(12, 5, { adj: "12", opp: "5", theta: "θ" })}`],
    ["2. Choosing", String.raw`O and H: $\sin^{-1}$; A and H: $\cos^{-1}$; O and A: $\tan^{-1}$.`],
    ["3. Checking", String.raw`Larger angle opposite the longer leg; acute angles add to $90^\circ$.`],
  ],
  tips: ["sin⁻¹ is not 1 ÷ sin.", "Keep the full ratio.", "Degree mode.", "Other angle = 90° − θ.", "Check with a second ratio."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
