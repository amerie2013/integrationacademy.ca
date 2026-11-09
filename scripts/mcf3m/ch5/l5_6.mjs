// MCF3M 5.6 — Chapter 5 Review: primary ratios, two right triangles, sine law, cosine law, area, choosing a method.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, table, q, num, choice, hard, fig } from "../lib.mjs";
import { triD, sasD, rightD, sin, cos, acos } from "../figs.mjs";
const S = String.raw;

export const TITLE = "5.6 Chapter 5 Review";
const SAS = (b, c, A, labels = ["A", "B", "C"], marks = []) => fig(sasD(b, c, A, labels, { marks }), "");

export const blocks = () => [
  intro({
    icon: "🧩",
    title: "Chapter 5 Review",
    overview: S`Chapter 5 built a complete toolkit for triangles: the primary ratios for right triangles, combinations of two right triangles, the sine law for a side–angle pair, the cosine law for SAS and SSS, and the area formula \(\tfrac12ab\sin C\). The review mixes them, so the first step of every question is to decide which tool fits.`,
    goals: [
      "solve right triangles with SOH CAH TOA;",
      "solve two-right-triangle problems;",
      "apply the sine law and the cosine law;",
      "find areas with ½ab sin C;",
      "choose and justify a method.",
    ],
    curriculum: "C1.1–C1.5 (chapter 5 review)",
    prior: [
      [S`\(\tan\theta=\frac{\text{?}}{\text{?}}\)`, S`opposite over adjacent.`],
      [S`Sine law?`, S`\(\frac a{\sin A}=\frac b{\sin B}=\frac c{\sin C}\).`],
      [S`Cosine law?`, S`\(a^2=b^2+c^2-2bc\cos A\).`],
    ],
    words: [
      ["Primary ratios", "sin, cos, tan in a right triangle", "SOH CAH TOA"],
      ["Sine law", "side–opposite-angle pairs", "AAS, ASA, SSA"],
      ["Cosine law", "SAS or SSS", "third side or an angle"],
      ["Area", "\\(\\tfrac12ab\\sin C\\)", "SAS"],
      ["Elevation/depression", "angles from the horizontal", "alternate angles"],
    ],
  }),

  section("📌 Summary", S`
  ${table(["Lesson", "Tool"], [
    ["5.1", "SOH CAH TOA; inverse ratios for angles"],
    ["5.2", "two right triangles sharing a side; add or subtract"],
    ["5.3", "sine law (side–angle pair)"],
    ["5.4", "cosine law (SAS, SSS)"],
    ["5.5", "choosing a method; area ½ab sin C"],
  ])}
  ${keyIdea(S`Ask three questions: Is there a right angle? Do I have a side and its opposite angle? Do I have SAS or SSS? The answer chooses the tool.`)}`),

  widget("lawChooser", { init: "aas" }),

  examples([
    ["Right triangle", S`A ramp rises at \(33^\circ\) over a horizontal run of \(18\) m. Find its height and length.`,
      [S`<b>Height.</b> \(18\tan33^\circ\approx11.69\) m.`,
        S`<b>Length.</b> \(\frac{18}{\cos33^\circ}\approx21.46\) m.`,
        S`<b>Check.</b> \(11.69^2+18^2\approx460.6\approx21.46^2\) ✓`],
      S`height ≈ 11.69 m; length ≈ 21.46 m`,
      fig(rightD(18, 11.69, ["33°", "", ""], [[9, -1, "18"], [19, 5.8, "h"]]), "")],

    ["Two right triangles", S`From a \(300\) m cliff, two boats in line are seen at angles of depression \(31^\circ\) and \(19^\circ\). How far apart are they?`,
      [S`<b>Distances.</b> \(\frac{300}{\tan31^\circ}\approx499.29\) and \(\frac{300}{\tan19^\circ}\approx871.26\).`,
        S`<b>Same side: subtract.</b> \(\approx371.98\) m.`],
      S`≈ 371.98 m`,
      fig(triD([[0, 300], [0, 0], [871.26, 0]], [], { open: true, extra: [{ pts: [[0, 300], [499.29, 0]], color: "violet" }, { pts: [[0, 300], [871.26, 0]], color: "violet" }] }), "")],

    ["Sine law", S`\(A=66^\circ\), \(B=57^\circ\), \(b=14\). Find \(a\) and \(c\).`,
      [S`<b>C.</b> \(180-66-57=57^\circ\), so the triangle is isosceles with \(c=b=14\).`,
        S`<b>a.</b> \(\frac{14\sin66^\circ}{\sin57^\circ}\approx15.25\).`,
        S`<b>Check.</b> Largest angle \(66^\circ\) faces the largest side ✓`],
      S`a ≈ 15.25, c = 14`,
      SAS(14, 15.25, 57, ["C", "B", "A"])],

    ["Cosine law", S`Two sides of a triangle are \(16\) and \(21\) with a \(58^\circ\) angle between them. Find the third side.`,
      [S`<b>SAS.</b> \(a^2=256+441-672\cos58^\circ\approx340.9\).`,
        S`<b>Side.</b> \(a\approx18.46\).`],
      S`≈ 18.46`,
      SAS(16, 21, 58)],

    ["Angle and area from three sides", S`A triangle has sides \(9\), \(11\), \(14\). Find the angle opposite the \(9\) side and the area.`,
      [S`<b>Angle.</b> \(\cos A=\frac{121+196-81}{308}\approx0.7662\Rightarrow A\approx39.98^\circ\).`,
        S`<b>Area.</b> \(\tfrac12(11)(14)\sin39.98^\circ\approx49.48\).`],
      S`A ≈ 39.98°; area ≈ 49.48`,
      fig(sasD(11, 14, 39.98, ["A", "B", "C"], {}), "")],
  ]),

  practice([
    q("ratio", S`A right triangle has legs \(5\) and \(8\). Find the angle opposite the \(5\) side (two decimals).`, num(32.01, 0.011), "tan θ = 5/8.", [S`\(32.01^\circ\).`], S`\(32.01^\circ\)`),
    q("sine", S`\(A=70^\circ\), \(B=50^\circ\), \(b=12\). Find \(a\) (two decimals).`, num(14.72, 0.011), "Sine law.", [S`\(\frac{12\sin70^\circ}{\sin50^\circ}\approx14.72\).`], S`\(14.72\)`),
    q("cos", S`\(b=7\), \(c=9\), \(A=45^\circ\). Find \(a\) (two decimals).`, num(6.40, 0.011), "Cosine law.", [S`\(\approx6.40\).`], S`\(6.40\)`),
    q("sss", S`Sides \(6\), \(8\), \(9\): find the angle opposite \(6\) (two decimals).`, num(40.80, 0.011), "Cosine law.", [S`\(\approx40.80^\circ\).`], S`\(40.80^\circ\)`),
    q("area", S`Find the area of a triangle with sides \(8\) and \(11\) and contained angle \(72^\circ\) (two decimals).`, num(41.85, 0.011), "½ab sin C.", [S`\(44\sin72^\circ\approx41.85\).`], S`\(41.85\)`),
  ]),

  ...hard([
    ["Solve with the sine law", S`Solve acute \(\triangle ABC\) with \(a=9\), \(b=8\), \(A=55^\circ\).`,
      [S`<b>B.</b> \(\sin B=\frac{8\sin55^\circ}9\Rightarrow B\approx46.73^\circ\).`,
        S`<b>C.</b> \(180-55-46.73=78.27^\circ\).`,
        S`<b>c.</b> \(\frac{9\sin78.27^\circ}{\sin55^\circ}\approx10.76\).`],
      S`B ≈ 46.73°, C ≈ 78.27°, c ≈ 10.76`,
      fig(sasD(8, 10.76, 55, ["A", "B", "C"], {}), "")],
    ["Walking toward a cliff", S`From a boat, the angle of elevation of a cliff top is \(35^\circ\). After moving \(40\) m closer it is \(52^\circ\). Find the cliff's height.`,
      [S`<b>Equations.</b> \(x=\frac h{\tan52^\circ}\), \(x+40=\frac h{\tan35^\circ}\).`,
        S`<b>Subtract.</b> \(40=h\left(\frac1{\tan35^\circ}-\frac1{\tan52^\circ}\right)\Rightarrow h\approx61.84\) m.`],
      S`≈ 61.84 m`],
  ], [
    q("hard", S`Two ships leave port: one sails \(1200\) m, the other \(900\) m, on courses \(54^\circ\) apart. Find their distance (two decimals).`, num(990.14, 0.011), "Cosine law.", [S`\(\approx990.14\).`], S`\(990.14\)`),
    q("hard", S`Find the area of a triangle with sides \(13\) and \(9\) and contained angle \(60^\circ\) (two decimals).`, num(50.66, 0.011), "½ab sin C.", [S`\(58.5\sin60^\circ\approx50.66\).`], S`\(50.66\)`),
    q("hard", S`Each angle of a triangle with sides \(12\), \(12\), \(12\)?`, num(60), "Equilateral.", [S`\(60^\circ\).`], S`\(60^\circ\)`),
    q("hard", S`Walking \(40\) m toward a cliff changes the elevation from \(35^\circ\) to \(52^\circ\). Enter the remaining distance to the cliff (two decimals).`, num(48.32, 0.02), "x = h/tan 52°.", [S`\(\frac{61.84}{\tan52^\circ}\approx48.32\).`], S`\(48.32\)`),
    q("hard", S`Which method finds the third side from SAS?`, choice(["cosine law", "sine law", "tangent", "area formula"], 0), "SAS.", [S`Cosine law.`], S`cosine law`),
  ]),

  wrapUp({
    qas: [
      ["How do I choose a tool?", "Right angle → ratios; side–angle pair → sine law; SAS/SSS → cosine law."],
      ["How do two-triangle problems work?", "Find the shared side in one triangle, then use it in the other."],
      ["How do I find an area?", "½ab sin C with the contained angle."],
      ["What checks catch mistakes?", "Angles sum to 180°; larger sides face larger angles; Pythagoras for right triangles."],
      ["What next?", "Chapter 6 uses the sine ratio as a function."],
    ],
    summary: ["SOH CAH TOA.", "Sine law / cosine law.", "Area ½ab sin C.", "Diagram, choose, solve, check."],
    next: "Chapter 6 studies periodic and sinusoidal functions.",
  }),
];
