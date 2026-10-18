// MPM2D 6.4 — Finding Side Lengths (self-study format): choosing sin/cos/tan from the known and unknown sides,
// unknown in the numerator (multiply) or denominator (divide), and a ladder problem
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, q, num, fig, rt } from "./lib.mjs";

export const TITLE = "6.4 Finding Side Lengths";

const S = String.raw;
const T = (deg, h) => [h * Math.cos((deg * Math.PI) / 180), h * Math.sin((deg * Math.PI) / 180)];
export const blocks = () => [
  intro({
    icon: "📐",
    title: "Finding Side Lengths",
    overview: S`If you know one acute angle and one side of a right triangle, you can find any other side. Label the sides from the angle, choose the ratio that contains the known side and the unknown side, write an equation and solve it. In this lesson you will practise choosing the ratio, solving when the unknown is on top of the fraction (multiply) or underneath (divide), and use the method on a ladder and a ramp.`,
    goals: [
      "label the sides relative to a given angle;",
      "choose sine, cosine or tangent from the known side and the unknown side;",
      "solve when the unknown is in the numerator;",
      "solve when the unknown is in the denominator;",
      "solve real problems and round sensibly.",
    ],
    curriculum: "T2 (determine the measures of the sides and angles in right triangles, using the primary trigonometric ratios and the Pythagorean theorem; solve problems)",
    prior: [
      [S`Solve \(\frac{x}{8}=0.6\).`, S`\(x=4.8\).`],
      [S`Solve \(\frac{8}{x}=0.4\).`, S`\(x=20\).`],
      [S`Which ratio uses opposite and hypotenuse?`, S`sine.`],
    ],
    words: [
      ["SOH", "\\(\\sin\\theta=\\frac{O}{H}\\)", ""],
      ["CAH", "\\(\\cos\\theta=\\frac{A}{H}\\)", ""],
      ["TOA", "\\(\\tan\\theta=\\frac{O}{A}\\)", ""],
      ["Angle of inclination", "the angle a ladder or ramp makes with the ground", ""],
    ],
  }),

  section("📌 Choosing the ratio", S`
  ${fig({ w: 360, items: rt(...T(35, 12), { adj: "adjacent", opp: "x (opposite)", hyp: "12 (hypotenuse)", theta: "35°" }) }, "Known: hypotenuse. Unknown: opposite. The ratio with O and H is sine.")}
  ${keyIdea(S`(1) Mark the angle you know. (2) Label the known side and the unknown side as O, A or H. (3) Pick the ratio with exactly those two: O & H → sin, A & H → cos, O & A → tan. (4) Write \(\text{ratio}(\theta)=\frac{\text{side}}{\text{side}}\) and solve. If \(x\) is on top, multiply; if \(x\) is underneath, divide.`)}`),

  section("📌 Explore", S`<p>Choose which side you know and which you want. The explorer picks the ratio and shows whether to multiply or divide.</p>`),

  widget("sideFinder", { init: [40, 10] }),

  section("📌 Solving the equation", S`
  <p>\(\sin35^\circ=\frac{x}{12}\) gives \(x=12\sin35^\circ\). But \(\sin28^\circ=\frac{9}{x}\) gives \(x\sin28^\circ=9\), so \(x=\frac{9}{\sin28^\circ}\). A quick check: the hypotenuse must be the longest side.</p>
  ${watchOut([
    "Use the side touching the angle as adjacent only if it is not the hypotenuse.",
    "When x is in the denominator, divide: x = 9 ÷ sin 28°, not 9 × sin 28°.",
    "Round only at the end — keep full calculator values.",
    "Check: the hypotenuse must be longer than either leg.",
  ])}`),

  examples([
    ["Unknown opposite (sine)", S`In a right triangle, the hypotenuse is \(12\) and one acute angle is \(35^\circ\). Find the side opposite that angle, to one decimal place.`,
      [S`O and H → sine: \(\sin35^\circ=\frac{x}{12}\).`, S`\(x=12\sin35^\circ\approx6.88\).`],
      S`\(x\approx6.9\)`],
    ["Unknown adjacent (cosine)", S`The hypotenuse is \(20\) and an acute angle is \(52^\circ\). Find the adjacent side.`,
      [S`A and H → cosine: \(\cos52^\circ=\frac{x}{20}\).`, S`\(x=20\cos52^\circ\approx12.31\).`],
      S`\(x\approx12.3\)`,
      fig({ w: 320, items: rt(...T(52, 20), { adj: "x", hyp: "20", theta: "52°" }) })],
    ["Tangent", S`The side adjacent to a \(40^\circ\) angle is \(8\). Find the opposite side.`,
      [S`O and A → tangent: \(\tan40^\circ=\frac{x}{8}\).`, S`\(x=8\tan40^\circ\approx6.71\).`],
      S`\(x\approx6.7\)`],
    ["Unknown hypotenuse", S`The side opposite a \(28^\circ\) angle is \(9\). Find the hypotenuse.`,
      [S`\(\sin28^\circ=\frac{9}{x}\Rightarrow x\sin28^\circ=9\).`, S`\(x=\frac{9}{\sin28^\circ}\approx19.17\).`, S`Check: \(19.17>9\) ✓.`],
      S`\(x\approx19.2\)`,
      fig({ w: 320, items: rt(...T(28, 19.17), { opp: "9", hyp: "x", theta: "28°" }) })],
    ["A ladder", S`A \(6\) m ladder leans against a wall, making a \(70^\circ\) angle with the ground. How high up the wall does it reach?`,
      [S`Ladder = hypotenuse; height = opposite the \(70^\circ\) angle.`, S`\(h=6\sin70^\circ\approx5.64\).`],
      S`about \(5.6\) m`,
      fig({ w: 260, items: rt(...T(70, 6), { opp: "h", hyp: "6 m", theta: "70°" }) })],
  ]),

  practice([
    q("sine", S`Hypotenuse \(15\), angle \(30^\circ\). Find the side opposite the angle.`, num(7.5, 0.05),
      "x = 15 sin 30°.", [S`\(15\times0.5\).`], S`\(7.5\)`),
    q("tangent", S`The side adjacent to a \(55^\circ\) angle is \(10\). Find the opposite side to one decimal place.`, num(14.3, 0.06),
      "tan 55° = x/10.", [S`\(x=10\tan55^\circ\approx14.28\).`], S`\(14.3\)`),
    q("divide", S`The side opposite a \(40^\circ\) angle is \(6\). Find the adjacent side to one decimal place.`, num(7.2, 0.06),
      "tan 40° = 6/x.", [S`\(x=\frac6{\tan40^\circ}\approx7.15\).`], S`\(7.2\)`),
    q("hypotenuse", S`The side adjacent to a \(48^\circ\) angle is \(7\). Find the hypotenuse to one decimal place.`, num(10.5, 0.06),
      "cos 48° = 7/x.", [S`\(x=\frac7{\cos48^\circ}\approx10.46\).`], S`\(10.5\)`),
    q("ramp", S`A ramp \(4\) m long rises at \(6^\circ\) to the ground. How high does it rise, to two decimal places (m)?`, num(0.42, 0.006),
      "height = 4 sin 6°.", [S`\(4\sin6^\circ\approx0.418\).`], S`\(0.42\) m`),
  ]),

  wrapUp({
    qas: [
      ["How do I pick the ratio?", "Write down which two sides are involved (the one you know and the one you want), relative to the angle you know. O&H → sin, A&H → cos, O&A → tan."],
      ["Why do I sometimes divide?", "If the unknown is in the denominator, like sin 28° = 9/x, multiply both sides by x and divide by sin 28°: x = 9/sin 28°."],
      ["Can I use the Pythagorean theorem instead?", "Only when two sides are already known. With one side and an angle you need a ratio; afterwards Pythagoras is a good check."],
      ["How should I round?", "Keep full calculator values during the work and round the final answer to the accuracy asked (often one decimal place)."],
      ["What if I use the other acute angle?", "Fine — relabel the sides from that angle. The answers agree because sin A = cos(90° − A)."],
    ],
    summary: [
      "Label O, A, H from the known angle.",
      "Pick the ratio with the known and unknown sides.",
      "x on top: multiply. x underneath: divide.",
      "Check that the hypotenuse is the longest side.",
    ],
    next: "6.5 works backwards: from two sides to an angle.",
  }),
];
