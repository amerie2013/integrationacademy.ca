// MPM2D 6.5 — Finding Angles (self-study format): inverse sine, cosine and tangent, choosing the ratio from two
// known sides, both acute angles, and a ramp-slope check
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, q, num, fig, rt } from "./lib.mjs";

export const TITLE = "6.5 Finding Angles";

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "🧭",
    title: "Finding Angles",
    overview: S`If you know two sides of a right triangle, you can find its acute angles. Write the ratio of the two known sides — that gives \(\sin\theta\), \(\cos\theta\) or \(\tan\theta\) as a number — then use the inverse key (\(\sin^{-1}\), \(\cos^{-1}\) or \(\tan^{-1}\)) to find the angle that has that ratio. In this lesson you will choose the right inverse, find both acute angles, and check a ramp against a building-code limit.`,
    goals: [
      "explain what sin⁻¹, cos⁻¹ and tan⁻¹ do;",
      "choose the ratio from the two known sides;",
      "find an acute angle to the nearest degree or tenth;",
      "find the second acute angle using 90° − θ;",
      "solve angle problems such as ramp slopes and ladders.",
    ],
    curriculum: "T2 (determine the measures of the angles in right triangles using the primary trigonometric ratios; solve problems)",
    prior: [
      [S`\(\sin30^\circ=\)?`, S`\(0.5\).`],
      [S`Which angle has \(\tan\theta=1\)?`, S`\(45^\circ\).`],
      [S`The acute angles of a right triangle add to…`, S`\(90^\circ\).`],
    ],
    words: [
      ["Inverse sine (sin⁻¹)", "the angle whose sine is a given number", "\\(\\sin^{-1}(0.5)=30^\\circ\\)"],
      ["Inverse cosine (cos⁻¹)", "the angle whose cosine is a given number", ""],
      ["Inverse tangent (tan⁻¹)", "the angle whose tangent is a given number", ""],
      ["Complementary angles", "two angles that add to \\(90^\\circ\\)", ""],
    ],
  }),

  section("📌 Working backwards", S`
  ${fig({ w: 340, items: rt(12, 5, { adj: "12", opp: "5", theta: "θ" }) }, "Opposite 5 and adjacent 12: tan θ = 5/12, so θ = tan⁻¹(5/12) ≈ 22.6°.")}
  ${keyIdea(S`Label the two known sides from \(\theta\). O & H: \(\theta=\sin^{-1}\frac{O}{H}\). A & H: \(\theta=\cos^{-1}\frac{A}{H}\). O & A: \(\theta=\tan^{-1}\frac{O}{A}\). The other acute angle is \(90^\circ-\theta\).`)}`),

  section("📌 Explore", S`<p>Choose which two sides you know and change their lengths. Watch the ratio and the angle from the inverse key.</p>`),

  widget("angleFinder", { init: [5, 12] }),

  section("📌 Inverse keys", S`
  <p>\(\sin^{-1}\) is not \(\frac{1}{\sin}\): it undoes sine. On most calculators press <strong>2nd</strong> or <strong>shift</strong>, then <strong>sin</strong>.</p>
  ${watchOut([
    "sin⁻¹ means ‘the angle whose sine is’, not 1 ÷ sin.",
    "Use the ratio as a fraction or a full decimal — don't round it first.",
    "sin⁻¹ and cos⁻¹ need a number between 0 and 1 here; a value above 1 means a mistake (the hypotenuse must be the larger side).",
    "Degree mode!",
    "Check: the larger acute angle is opposite the longer leg.",
  ])}`),

  examples([
    ["Inverse sine", S`In a right triangle the side opposite \(\theta\) is \(5\) and the hypotenuse is \(9\). Find \(\theta\) to the nearest degree.`,
      [S`\(\sin\theta=\frac59\).`, S`\(\theta=\sin^{-1}\frac59\approx33.7^\circ\).`],
      S`\(\theta\approx34^\circ\)`],
    ["Inverse cosine", S`The side adjacent to \(\theta\) is \(7\) and the hypotenuse is \(11\). Find \(\theta\).`,
      [S`\(\cos\theta=\frac7{11}\).`, S`\(\theta=\cos^{-1}\frac7{11}\approx50.5^\circ\).`],
      S`\(\theta\approx50^\circ\)`,
      fig({ w: 300, items: rt(7, Math.sqrt(72), { adj: "7", hyp: "11", theta: "θ" }) })],
    ["Inverse tangent", S`The side opposite \(\theta\) is \(8\) and the adjacent side is \(5\). Find \(\theta\).`,
      [S`\(\tan\theta=\frac85=1.6\).`, S`\(\theta=\tan^{-1}1.6\approx58.0^\circ\).`, S`Check: the opposite side is longer, so \(\theta>45^\circ\) ✓.`],
      S`\(\theta\approx58^\circ\)`],
    ["Both acute angles", S`A right triangle has legs \(9\) and \(4\). Find both acute angles.`,
      [S`The angle opposite \(4\): \(\tan^{-1}\frac49\approx24.0^\circ\).`, S`The other: \(90^\circ-24.0^\circ=66.0^\circ\).`],
      S`about \(24^\circ\) and \(66^\circ\)`,
      fig({ w: 320, items: rt(9, 4, { adj: "9", opp: "4", theta: "θ", other: "β" }) })],
    ["A ramp", S`A wheelchair ramp rises \(1\) m over a horizontal run of \(12\) m. Building codes often limit ramps to about \(5^\circ\). Does this ramp meet the limit?`,
      [S`\(\tan\theta=\frac1{12}\).`, S`\(\theta=\tan^{-1}\frac1{12}\approx4.8^\circ\).`],
      S`yes: about \(4.8^\circ\)`],
  ]),

  practice([
    q("sin⁻¹", S`\(\sin\theta=0.6\). Find \(\theta\) to the nearest degree.`, num(37, 0.6),
      "θ = sin⁻¹ 0.6.", [S`\(\approx36.87^\circ\).`], S`\(37^\circ\)`),
    q("tan⁻¹", S`The opposite side is \(7\) and the adjacent side is \(10\). Find \(\theta\) to the nearest degree.`, num(35, 0.6),
      "tan θ = 7/10.", [S`\(\tan^{-1}0.7\approx34.99^\circ\).`], S`\(35^\circ\)`),
    q("cos⁻¹", S`The adjacent side is \(6\) and the hypotenuse is \(10\). Find \(\theta\) to the nearest degree.`, num(53, 0.6),
      "cos θ = 6/10.", [S`\(\cos^{-1}0.6\approx53.13^\circ\).`], S`\(53^\circ\)`),
    q("ladder", S`A \(5\) m ladder has its foot \(1.5\) m from a wall. What angle does it make with the ground, to the nearest degree?`, num(73, 0.6),
      "Adjacent and hypotenuse.", [S`\(\cos\theta=\frac{1.5}{5}=0.3\).`, S`\(\theta\approx72.5^\circ\).`], S`\(73^\circ\)`),
    q("special", S`\(\tan\theta=1\). Find \(\theta\) in degrees.`, num(45, 0.01),
      "Equal legs.", [S`\(\tan^{-1}1=45^\circ\).`], S`\(45^\circ\)`),
  ]),

  wrapUp({
    qas: [
      ["What does sin⁻¹ do?", "It answers ‘which angle has this sine?’. If sin θ = 0.5, then θ = sin⁻¹(0.5) = 30°."],
      ["How do I choose the inverse?", "Use the two sides you know, labelled from the angle you want: O&H → sin⁻¹, A&H → cos⁻¹, O&A → tan⁻¹."],
      ["Why can't I get sin θ = 1.2?", "sin θ is a leg divided by the hypotenuse, which is less than 1. A value above 1 means the sides were mixed up."],
      ["How do I find the third angle?", "In a right triangle the two acute angles add to 90°, so subtract from 90°."],
      ["How can I check an angle?", "Use a different ratio with the third side (found by Pythagoras), or check that the larger angle is opposite the longer side."],
    ],
    summary: [
      "Write the ratio of the two known sides.",
      "Use sin⁻¹, cos⁻¹ or tan⁻¹ (degree mode).",
      "Second acute angle = 90° − θ.",
      "Larger angle ↔ longer opposite side.",
    ],
    next: "6.6 puts it all together: solving whole triangles and angles of elevation and depression.",
  }),
];
