// MPM2D Worksheet 6.4 — Finding Side Lengths (teacher edition)
import { rtA } from "./figT.mjs";

const EXAMPLES = [
  { title: "Opposite from the hypotenuse", q: String.raw`The hypotenuse is $18$ and an acute angle is $27^\circ$. Find the side opposite the angle, to one decimal place.`,
    fig: rtA(27, { opp: "x", hyp: "18", theta: "27°" }),
    steps: [String.raw`O and H: $\sin27^\circ=\frac{x}{18}$.`, String.raw`$x=18\sin27^\circ\approx8.17$.`], ans: String.raw`$x\approx8.2$` },
  { title: "Adjacent from the hypotenuse", q: String.raw`In the same triangle, find the side adjacent to the $27^\circ$ angle.`,
    steps: [String.raw`$\cos27^\circ=\frac{y}{18}\Rightarrow y=18\cos27^\circ\approx16.04$.`, String.raw`Check: $8.17^2+16.04^2\approx324=18^2$ ✓.`], ans: String.raw`$y\approx16.0$` },
  { title: "Tangent", q: String.raw`The side adjacent to a $63^\circ$ angle is $11$. Find the opposite side.`,
    fig: rtA(63, { adj: "11", opp: "x", theta: "63°" }, 4.5),
    steps: [String.raw`$\tan63^\circ=\frac{x}{11}\Rightarrow x=11\tan63^\circ\approx21.59$.`], ans: String.raw`$x\approx21.6$` },
  { title: "Unknown hypotenuse (sine)", q: String.raw`The side opposite a $22^\circ$ angle is $7$. Find the hypotenuse.`,
    steps: [String.raw`$\sin22^\circ=\frac7x\Rightarrow x=\frac7{\sin22^\circ}\approx18.69$.`], ans: String.raw`$x\approx18.7$` },
  { title: "Unknown hypotenuse (cosine)", q: String.raw`The side adjacent to a $34^\circ$ angle is $9$. Find the hypotenuse.`,
    fig: rtA(34, { adj: "9", hyp: "x", theta: "34°" }),
    steps: [String.raw`$\cos34^\circ=\frac9x\Rightarrow x=\frac9{\cos34^\circ}\approx10.86$.`], ans: String.raw`$x\approx10.9$` },
  { title: "Unknown adjacent (tangent)", q: String.raw`The side opposite a $58^\circ$ angle is $12$. Find the adjacent side.`,
    steps: [String.raw`$\tan58^\circ=\frac{12}x\Rightarrow x=\frac{12}{\tan58^\circ}\approx7.50$.`], ans: String.raw`$x\approx7.5$` },
  { title: "Ladder", q: String.raw`An $8$ m ladder makes a $72^\circ$ angle with the ground. How far is its foot from the wall?`,
    fig: rtA(72, { adj: "x", hyp: "8 m", theta: "72°" }, 3.8),
    steps: [String.raw`$\cos72^\circ=\frac{x}{8}\Rightarrow x=8\cos72^\circ\approx2.47$.`], ans: String.raw`about $2.5$ m` },
  { title: "Ramp length", q: String.raw`A ramp must rise $1.1$ m at an angle of $5^\circ$. How long must the ramp be?`,
    steps: [String.raw`Ramp = hypotenuse, rise = opposite.`, String.raw`$x=\frac{1.1}{\sin5^\circ}\approx12.62$.`], ans: String.raw`about $12.6$ m` },
  { title: "Tower and sun", q: String.raw`When the sun is $41^\circ$ above the horizon, a tower casts a $25$ m shadow. How tall is the tower?`,
    fig: rtA(41, { adj: "25 m", opp: "h", theta: "41°" }),
    steps: [String.raw`$\tan41^\circ=\frac{h}{25}\Rightarrow h\approx21.73$.`], ans: String.raw`about $21.7$ m` },
];

const PROBLEMS = [
  { level: 1, q: String.raw`Hypotenuse $9$, angle $40^\circ$. Find the side opposite the angle.`, recap: "sin, multiply.", ans: String.raw`$9\sin40^\circ\approx5.8$` },
  { level: 1, q: String.raw`Hypotenuse $14$, angle $65^\circ$. Find the side adjacent to the angle.`, recap: "cos, multiply.", ans: String.raw`$14\cos65^\circ\approx5.9$` },
  { level: 1, q: String.raw`The side adjacent to a $25^\circ$ angle is $6$. Find the opposite side.`, recap: "tan, multiply.", ans: String.raw`$6\tan25^\circ\approx2.8$` },
  { level: 2, q: String.raw`Find $x$ in the triangle shown.`, recap: "Unknown hypotenuse.", ans: String.raw`$x=\frac{10}{\sin35^\circ}\approx17.4$`, fig: rtA(35, { opp: "10", hyp: "x", theta: "35°" }) },
  { level: 2, q: String.raw`The side adjacent to a $50^\circ$ angle is $15$. Find the hypotenuse.`, recap: "cos, divide.", ans: String.raw`$\frac{15}{\cos50^\circ}\approx23.3$` },
  { level: 2, q: String.raw`Find $x$ in the triangle shown.`, recap: "tan, divide.", ans: String.raw`$x=\frac4{\tan15^\circ}\approx14.9$`, fig: rtA(15, { opp: "4", adj: "x", theta: "15°" }) },
  { level: 2, q: String.raw`A $5.5$ m ladder makes a $75^\circ$ angle with the ground. How high up the wall does it reach?`, recap: "Ladder height.", ans: String.raw`$5.5\sin75^\circ\approx5.3$ m` },
  { level: 2, q: String.raw`A slide's top is $3.2$ m high and it makes a $38^\circ$ angle with the ground. How long is the slide?`, recap: "Slide length.", ans: String.raw`$\frac{3.2}{\sin38^\circ}\approx5.2$ m` },
  { level: 3, space: 5, q: String.raw`A plane takes off at a $6^\circ$ angle and flies $20$ km along that path. How high is it? Explain which ratio you used and why.`, recap: "Plane altitude.", ans: String.raw`opposite and hypotenuse: $20\sin6^\circ\approx2.1$ km` },
  { level: 3, space: 5, q: String.raw`A right triangle has hypotenuse $20$ cm and a $30^\circ$ angle. Find its perimeter.`, recap: "Perimeter.", ans: String.raw`$20+10+20\cos30^\circ\approx47.3$ cm` },
  { level: 3, space: 5, q: String.raw`Two students find the side opposite a $40^\circ$ angle in a triangle with hypotenuse $12$. One gets $7.71$ and the other $9.19$. Which is correct, and what did the other do wrong?`, recap: "Find the error.", ans: String.raw`$12\sin40^\circ\approx7.71$ is correct; $9.19=12\cos40^\circ$ used the adjacent side` },
  { level: 3, space: 5, q: String.raw`An isosceles triangle has equal sides of $10$ cm and base angles of $65^\circ$. Find its base and height.`, recap: "Isosceles.", ans: String.raw`height $10\sin65^\circ\approx9.1$; base $2\times10\cos65^\circ\approx8.5$ cm` },
  { level: 3, space: 5, q: String.raw`A wheelchair ramp may rise at most $1$ m for every $12$ m of run. A ramp must rise $0.75$ m. Find the shortest run, and the angle it makes with the ground.`, recap: "Ramp design.", ans: String.raw`$9$ m; $\tan^{-1}\frac{1}{12}\approx4.8^\circ$` },
];

export const WS = {
  code: "6.4",
  title: "Finding Side Lengths",
  bigideas: String.raw`With one acute angle and one side of a right triangle, any other side can be found. Label the known and unknown sides from the angle, choose the ratio that contains both (O and H: sin, A and H: cos, O and A: tan), write the equation and solve: multiply when the unknown is in the numerator, divide when it is in the denominator. Check that the hypotenuse is the longest side.`,
  goals: ["Choose sin, cos or tan.", "Solve with the unknown in the numerator.", "Solve with the unknown in the denominator.", "Solve ladder, ramp and height problems."],
  curriculum: "T2",
  vocab: [["SOH CAH TOA", "the three ratios"], ["Angle of inclination", "angle with the ground"], ["Hypotenuse", "longest side"]],
  hook: String.raw`Show a ladder leaning on a wall with only its length and angle given. Ask how high it reaches — and why measuring would be hard.`,
  concepts: [
    ["1. Choose the ratio", String.raw`Known side + unknown side → the ratio with both.
${rtA(35, { adj: "adjacent", opp: "opposite", hyp: "hypotenuse", theta: "θ" })}`],
    ["2. Solve", String.raw`$\sin\theta=\frac{x}{h}\Rightarrow x=h\sin\theta$; $\sin\theta=\frac{o}{x}\Rightarrow x=\frac{o}{\sin\theta}$.`],
    ["3. Check", String.raw`Hypotenuse longest; Pythagoras when two sides are known.`],
  ],
  tips: ["Label from the given angle.", "x on top: multiply; x underneath: divide.", "Degree mode.", "Round at the end.", "Check with Pythagoras."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
