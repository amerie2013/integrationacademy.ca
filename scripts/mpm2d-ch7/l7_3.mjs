// MPM2D 7.3 — Choosing the Right Law (self-study format): right triangle vs sine law vs cosine law from the given
// parts (AAS/ASA, SAS, SSS, SSA in acute triangles), and solving a whole triangle with both laws
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, fig, atri, rt } from "./lib.mjs";

export const TITLE = "7.3 Choosing the Right Law";

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "🧭",
    title: "Choosing the Right Law",
    overview: S`You now have three tools for triangles: the primary ratios (right triangles only), the sine law and the cosine law. The information you are given decides which one works. In this lesson you will classify the given parts (AAS, ASA, SAS, SSS, or two sides with an angle opposite one of them), pick the law, and solve whole acute triangles — often using the cosine law first and the sine law to finish.`,
    goals: [
      "decide whether a triangle can be solved with the primary ratios;",
      "recognise AAS, ASA, SAS, SSS and SSA information;",
      "choose the sine law or the cosine law for each case;",
      "solve a whole acute triangle using both laws;",
      "check a solution using angle sums and side order.",
    ],
    curriculum: "T3 (solve problems involving acute triangles, using the sine law and the cosine law)",
    prior: [
      [S`Sine law?`, S`\(\frac a{\sin A}=\frac b{\sin B}=\frac c{\sin C}\).`],
      [S`Cosine law?`, S`\(a^2=b^2+c^2-2bc\cos A\).`],
      [S`What makes an angle “included”?`, S`It lies between the two given sides.`],
    ],
    words: [
      ["AAS / ASA", "two angles and a side", ""],
      ["SAS", "two sides and the included angle", ""],
      ["SSS", "three sides", ""],
      ["SSA", "two sides and an angle opposite one of them", ""],
    ],
  }),

  section("📌 The decision guide", S`
  ${table(["Given", "Tool", "First step"], [
    ["a right angle", "SOH CAH TOA, Pythagoras", "primary ratio"],
    ["AAS or ASA", "sine law", "third angle = 180° − the other two"],
    ["SSA (acute triangle)", "sine law", "angle opposite the second known side"],
    ["SAS", "cosine law", "third side"],
    ["SSS", "cosine law", "largest angle"],
  ])}
  ${keyIdea(S`Ask: <strong>do I know a side and its opposite angle?</strong> If yes, use the sine law. If no (SAS or SSS), use the cosine law first — it will create a side–angle pair, and the sine law can finish the job.`)}`),

  section("📌 Explore", S`<p>Pick each type of information. The given parts light up in red and the explorer names the law and the first step.</p>`),

  widget("lawChooser", { init: "aas" }),

  section("📌 Finishing a triangle", S`
  ${watchOut([
    "A triangle with a right angle doesn't need either law.",
    "SAS means the angle is between the two sides; if it isn't, the case is SSA.",
    "After the cosine law, find the smaller remaining angle with the sine law, then subtract from 180°.",
    "Use unrounded values in later steps.",
    "Check: largest side opposite the largest angle; angles add to 180°.",
  ])}`),

  examples([
    ["Two angles and a side", S`In acute \(\triangle ABC\), \(\angle A=72^\circ\), \(\angle C=46^\circ\) and \(c=10\). Which law? Find \(a\).`,
      [S`\(c\) and \(\angle C\) are a side–angle pair: sine law.`, S`\(a=\frac{10\sin72^\circ}{\sin46^\circ}\approx13.22\).`],
      S`sine law; \(a\approx13.2\)`],
    ["Two sides and the included angle", S`In acute \(\triangle ABC\), \(b=9\), \(c=12\) and \(\angle A=55^\circ\). Solve the triangle.`,
      [S`SAS → cosine law: \(a^2=81+144-216\cos55^\circ\approx101.11\), \(a\approx10.06\).`, S`Now \(a\) and \(\angle A\) are a pair: \(\sin B=\frac{9\sin55^\circ}{10.06}\), \(\angle B\approx47.2^\circ\).`, S`\(\angle C\approx180^\circ-55^\circ-47.2^\circ=77.8^\circ\).`],
      S`\(a\approx10.1\), \(\angle B\approx47.2^\circ\), \(\angle C\approx77.8^\circ\)`,
      fig({ w: 320, items: atri(55, 47.2, 12, { b: "9", c: "12", a: "a", A: "55°" }) })],
    ["Three sides", S`A triangle has sides \(6\), \(7\) and \(8\). Which law? Find its largest angle.`,
      [S`SSS → cosine law, largest angle opposite \(8\).`, S`\(\cos\theta=\frac{36+49-64}{2(6)(7)}=\frac{21}{84}=0.25\), \(\theta\approx75.5^\circ\).`],
      S`cosine law; about \(75.5^\circ\)`],
    ["A right triangle", S`A right triangle has hypotenuse \(10\) and an acute angle of \(35^\circ\). Find the side opposite that angle.`,
      [S`A right angle: no law needed.`, S`\(x=10\sin35^\circ\approx5.74\).`],
      S`about \(5.7\)`,
      fig({ w: 300, items: rt(10 * Math.cos((35 * Math.PI) / 180), 10 * Math.sin((35 * Math.PI) / 180), { hyp: "10", opp: "x", theta: "35°" }) })],
    ["Two sides and an opposite angle", S`In acute \(\triangle ABC\), \(a=12\), \(\angle A=64^\circ\) and \(b=10\). Find \(\angle B\) and \(\angle C\).`,
      [S`\(a\) and \(\angle A\) are a pair: sine law.`, S`\(\sin B=\frac{10\sin64^\circ}{12}\approx0.749\), \(\angle B\approx48.5^\circ\).`, S`\(\angle C\approx67.5^\circ\).`],
      S`\(\angle B\approx48.5^\circ\), \(\angle C\approx67.5^\circ\)`],
  ]),

  practice([
    q("which law", "You know all three sides of a triangle and want an angle. Which tool?", choice(["the cosine law", "the sine law", "SOH CAH TOA", "the Pythagorean theorem"], 0),
      "No side–angle pair.", ["SSS → cosine law."], "cosine law"),
    q("SAS", S`In acute \(\triangle ABC\), \(b=7\), \(c=9\) and \(\angle A=48^\circ\). Find \(a\) to one decimal place.`, num(6.8, 0.06),
      "Cosine law.", [S`\(a^2=49+81-126\cos48^\circ\approx45.69\).`], S`\(6.8\)`),
    q("SSS", S`A triangle has sides \(11\), \(12\) and \(13\). Find its smallest angle to one decimal place.`, num(52.0, 0.06),
      "Opposite the side 11.", [S`\(\cos\theta=\frac{144+169-121}{2(12)(13)}=\frac{192}{312}\).`], S`\(52.0^\circ\)`),
    q("AAS", S`In acute \(\triangle ABC\), \(\angle A=40^\circ\), \(\angle B=60^\circ\) and \(a=8\). Find \(b\) to one decimal place.`, num(10.8, 0.06),
      "Sine law.", [S`\(b=\frac{8\sin60^\circ}{\sin40^\circ}\approx10.78\).`], S`\(10.8\)`),
    q("SSA", S`In acute \(\triangle ABC\), \(a=15\), \(\angle A=70^\circ\) and \(b=12\). Find \(\angle B\) to one decimal place.`, num(48.7, 0.06),
      "sin B = 12 sin 70° ÷ 15.", [S`\(\sin B\approx0.752\).`], S`\(48.7^\circ\)`),
  ]),

  wrapUp({
    qas: [
      ["What is the quickest way to choose?", "Look for a known side with its opposite angle. If there is one, use the sine law; if not, use the cosine law first."],
      ["Why use the cosine law first in SAS?", "No side is paired with its opposite angle. The cosine law finds the third side, which pairs with the given angle."],
      ["Why find the largest angle first with SSS?", "It shows whether the triangle is acute; the remaining angles can then be found safely with the sine law or the cosine law."],
      ["Can I always use the cosine law instead?", "For SAS and SSS yes. For AAS you need the sine law, because the cosine law needs at least two sides."],
      ["What if there is a right angle?", "Use the primary ratios and the Pythagorean theorem — they are simpler, and both laws reduce to them anyway."],
    ],
    summary: [
      "Right angle: SOH CAH TOA.",
      "Side–angle pair (AAS, ASA, SSA): sine law.",
      "SAS, SSS: cosine law first.",
      "Finish with the sine law and 180°.",
    ],
    next: "7.4 applies both laws to real measurement problems.",
  }),
];
