// MPM2D 6.7 — Chapter 6 Review (NEW lesson, placed after 6.6)
import { intro, section, keyIdea, widget, examples, practice, wrapUp, table, q, num, choice, fig, rt, polygon } from "./lib.mjs";

export const TITLE = "6.7 Chapter 6 Review";
export const NEW = { id: "2d1e7c1a-0a17-4d1e-9c17-d1a9f0000607", position: 41 };

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "🧩",
    title: "Chapter 6 Review — Similar & Right Triangles",
    overview: S`This page pulls the chapter together before the test: each lesson's key idea on one screen, practice choosing the right tool, multi-step problems, mixed practice and a readiness checklist. Work through it after 6.1–6.6 and return to any lesson where you get stuck.`,
    goals: [
      "recall the key idea and common mistake of each lesson;",
      "choose between similar triangles, a trigonometric ratio, an inverse ratio and the Pythagorean theorem;",
      "solve multi-step problems with right triangles;",
      "check your readiness for the chapter test.",
    ],
    curriculum: "T1, T2 (whole chapter)",
    prior: [
      [S`Conditions for similar triangles?`, S`AA, SSS~, SAS~.`],
      [S`\(\tan\theta=\)?`, S`\(\frac{\text{opposite}}{\text{adjacent}}\).`],
      [S`\(\sin^{-1}(0.5)=\)?`, S`\(30^\circ\).`],
    ],
    words: [
      ["Similar", "equal angles, proportional sides", ""],
      ["SOH CAH TOA", "the three primary ratios", ""],
      ["Inverse ratio", "finds an angle from a ratio", ""],
      ["Elevation / depression", "angles from the horizontal", ""],
    ],
  }),

  section("📌 The chapter on one page", table(["Lesson", "Key idea", "Example", "Watch out"], [
    ["6.1 Congruent & similar", "≅: same size; ∼: equal angles, sides in ratio k", "\\(6,8,10\\sim9,12,15\\)", "AAA is not congruence"],
    ["6.2 Problems", "find two similar triangles, one proportion", "shadow: \\(\\frac h{1.8}=\\frac{14}{2.4}\\)", "match heights with heights"],
    ["6.3 Ratios", "same angle → similar → same ratios", "\\(\\sin\\theta=\\frac OH\\)", "label from the angle"],
    ["6.4 Sides", "ratio with known and unknown side", "\\(x=12\\sin35^\\circ\\)", "x underneath: divide"],
    ["6.5 Angles", "inverse ratio", "\\(\\theta=\\tan^{-1}\\frac85\\)", "degree mode"],
    ["6.6 Applications", "solve triangles; elevation/depression", "\\(d=\\frac{45}{\\tan12^\\circ}\\)", "from the horizontal"],
  ])),

  section("📌 Which tool?", keyIdea(S`<strong>Two triangles with matching angles?</strong> Similar triangles and a proportion. <strong>Right triangle, two sides known, want the third?</strong> Pythagorean theorem. <strong>Right triangle, angle and side known, want a side?</strong> sin, cos or tan. <strong>Two sides known, want an angle?</strong> sin⁻¹, cos⁻¹ or tan⁻¹.`)),

  practice([
    q("tool", "In a right triangle you know both legs and want the hypotenuse. Which tool is quickest?", choice(["the Pythagorean theorem", "an inverse ratio", "similar triangles", "the sine ratio with an unknown angle"], 0),
      "Three sides, no angle needed.", [S`\(c^2=a^2+b^2\).`], "Pythagorean theorem"),
    q("tool", "You know the hypotenuse and an acute angle and want the side opposite the angle. Which ratio?", choice(["sine", "cosine", "tangent", "inverse tangent"], 0),
      "O and H.", ["SOH."], "sine"),
    q("tool", "You know the opposite and adjacent sides and want the angle. What do you use?", choice(["tan⁻¹(opposite ÷ adjacent)", "sin⁻¹(opposite ÷ adjacent)", "tan(opposite ÷ adjacent)", "the Pythagorean theorem only"], 0),
      "Inverse tangent.", ["TOA, then the inverse key."], "tan⁻¹"),
    q("tool", "A tree's height is found from its shadow and a person's shadow. Which idea is used?", choice(["similar triangles", "congruent triangles", "the cosine ratio", "the Pythagorean theorem"], 0),
      "Parallel sun rays.", ["Two right triangles with the same sun angle are similar."], "similar triangles"),
    q("tool", "Two triangles have all three pairs of angles equal. What can you conclude?", choice(["they are similar", "they are congruent", "nothing", "they are both right triangles"], 0),
      "AAA fixes shape, not size.", ["Similar, not necessarily congruent."], "similar"),
  ]),

  examples([
    ["Similar triangles inside a right triangle", S`In right \(\triangle ABC\) (\(\angle C=90^\circ\)), \(D\) is on \(AC\) and \(E\) is on \(AB\) with \(DE\perp AC\). \(AD=6\), \(DE=4\) and \(AC=15\). Find \(BC\).`,
      [S`\(DE\) and \(BC\) are both perpendicular to \(AC\), so \(DE\parallel BC\) and \(\triangle ADE\sim\triangle ACB\) (AA).`, S`\(k=\frac{15}{6}=2.5\); \(BC=2.5\times4=10\).`],
      S`\(BC=10\)`],
    ["Side, then angle", S`A right triangle has hypotenuse \(13\) and one leg \(5\). Find the other leg and the angle opposite the leg \(5\).`,
      [S`\(\sqrt{13^2-5^2}=\sqrt{144}=12\).`, S`\(\theta=\sin^{-1}\frac5{13}\approx22.6^\circ\).`],
      S`\(12\); about \(22.6^\circ\)`,
      fig({ w: 320, items: rt(12, 5, { opp: "5", hyp: "13", theta: "θ" }) })],
    ["Ladder safety", S`A \(7\) m ladder is safe when it makes an angle between \(70^\circ\) and \(76^\circ\) with the ground. What range of distances from the wall is safe for its foot?`,
      [S`Foot distance \(=7\cos\theta\).`, S`\(7\cos76^\circ\approx1.69\) and \(7\cos70^\circ\approx2.39\).`],
      S`between about \(1.7\) m and \(2.4\) m`],
    ["Depression to two boats", S`From a \(60\) m cliff, the angles of depression to two boats in line with the cliff are \(40^\circ\) and \(25^\circ\). How far apart are the boats?`,
      [S`Near boat: \(\frac{60}{\tan40^\circ}\approx71.51\) m. Far boat: \(\frac{60}{\tan25^\circ}\approx128.67\) m.`, S`Difference \(\approx57.2\) m.`],
      S`about \(57.2\) m`,
      fig({ w: 440, items: [{ seg: [[0, 0], [135, 0]], color: "gray" }, { seg: [[0, 0], [0, 60]], color: "green", width: 4 }, { seg: [[0, 60], [135, 60]], color: "gray", dash: true }, { seg: [[0, 60], [71.51, 0]], color: "red" }, { seg: [[0, 60], [128.67, 0]], color: "blue" }, { dot: [71.51, 0], color: "red", r: 5 }, { dot: [128.67, 0], color: "blue", r: 5 }, { text: "60 m", at: [-9, 30] }, { arc: [[135, 60], [0, 60], [71.51, 0]], label: "40°", color: "red", r: 22 }, { arc: [[135, 60], [0, 60], [128.67, 0]], label: "25°", color: "blue", r: 40 }] })],
    ["Isosceles triangle", S`An isosceles triangle has two sides of \(10\) cm and a base of \(12\) cm. Find its base angles and its height.`,
      [S`The height splits it into two right triangles with base \(6\) and hypotenuse \(10\).`, S`Base angle \(=\cos^{-1}\frac6{10}\approx53.1^\circ\); height \(=\sqrt{100-36}=8\).`],
      S`base angles about \(53.1^\circ\); height \(8\) cm`,
      fig({ w: 320, items: [...polygon([[0, 0], [12, 0], [6, 8]], { sides: ["12", "10", "10"], fill: "blue" }), { seg: [[6, 0], [6, 8]], color: "red", dash: true }, { right: [[12, 0], [6, 0], [6, 8]] }] })],
  ]),

  section("📌 Mixed review", S`<p>Each question uses one lesson's skill — decide which first.</p>`),

  practice([
    q("similar", S`\(\triangle ABC\sim\triangle DEF\), \(AB=5\), \(DE=8\) and \(BC=7.5\). Find \(EF\).`, num(12),
      "k = 8/5.", [S`\(7.5\times1.6=12\).`], S`\(12\)`),
    q("shadow", S`A \(2\) m post casts a \(3\) m shadow when a tower casts a \(45\) m shadow. How tall is the tower (m)?`, num(30),
      "Proportion.", [S`\(\frac h2=\frac{45}{3}\).`], S`\(30\) m`),
    q("side", S`The side adjacent to a \(60^\circ\) angle is \(9\). Find the hypotenuse.`, num(18, 0.05),
      "cos 60° = 9/x.", [S`\(x=\frac9{0.5}\).`], S`\(18\)`),
    q("angle", S`A right triangle has opposite side \(3\) and hypotenuse \(8\). Find \(\theta\) to the nearest degree.`, num(22, 0.6),
      "sin θ = 3/8.", [S`\(\sin^{-1}0.375\approx22.0^\circ\).`], S`\(22^\circ\)`),
    q("elevation", S`From \(15\) m away, the angle of elevation to the top of a pole is \(62^\circ\). How tall is the pole, to one decimal place (m)?`, num(28.2, 0.06),
      "tan 62° = h/15.", [S`\(15\tan62^\circ\approx28.21\).`], S`\(28.2\) m`),
  ]),

  section("📌 Am I ready for the test?", S`<ul style="list-style:none;padding-left:0;">
    ${[
      ["6.1", "I can tell congruent from similar triangles and find missing sides with a scale factor."],
      ["6.2", "I can solve shadow, mirror and other measurement problems with similar triangles."],
      ["6.3", "I can explain why trigonometric ratios depend only on the angle and write sin, cos and tan."],
      ["6.4", "I can find a side using sin, cos or tan, including an unknown in the denominator."],
      ["6.5", "I can find an angle using an inverse ratio."],
      ["6.6", "I can solve right triangles and problems with angles of elevation and depression."],
    ].map(([c, t]) => `<li style="margin:6px 0;"><label><input type="checkbox"> <strong>${c}</strong> — ${t}</label></li>`).join("")}
  </ul>`),

  widget("sideFinder", { init: [32, 15] }),

  wrapUp({
    qas: [
      ["How should I study for this test?", "Do the mixed review without notes. For each mistake, return to that lesson's explorer and practice set, then try the Level 3 worksheet problems for your two weakest lessons."],
      ["What are the most common mistakes?", "Mixing up opposite and adjacent, multiplying when the unknown is in the denominator, measuring elevation from the vertical, calculator in radian mode, and pairing the wrong sides in a proportion."],
      ["How much work should I show?", "A labelled diagram, the ratio or proportion you used, the substitution, the answer with units, and a sentence for word problems."],
      ["How do I check my answers?", "The hypotenuse is longest, the angles add to 180°, the larger angle is opposite the longer side, and a² + b² = c²."],
      ["How does this lead to Chapter 7?", "Chapter 7 extends trigonometry to triangles without a right angle, using the sine law and the cosine law."],
    ],
    summary: [
      "Similar: equal angles, proportional sides.",
      "SOH CAH TOA for sides; inverses for angles.",
      "Pythagoras when two sides are known.",
      "Elevation and depression from the horizontal.",
    ],
    next: "Write the Chapter 6 test. Chapter 7 covers acute triangles.",
  }),
];
