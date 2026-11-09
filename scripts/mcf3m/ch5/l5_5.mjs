// MCF3M 5.5 — Solving Acute-Triangle Problems: choosing primary ratios / sine law / cosine law, multi-step problems,
// area ½ab sin C, construction, navigation, surveying.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, fig } from "../lib.mjs";
import { triD, sasD, sin, cos, acos } from "../figs.mjs";
const S = String.raw;

export const TITLE = "5.5 Solving Acute-Triangle Problems";
const SSS = (a, b, c, labels = ["A", "B", "C"], marks = []) => { const A = acos((b * b + c * c - a * a) / (2 * b * c)); return fig(sasD(b, c, A, labels, { marks }), ""); };
const SAS = (b, c, A, labels = ["A", "B", "C"], marks = [], extra) => fig(sasD(b, c, A, labels, { marks, extra }), "");

export const blocks = () => [
  intro({
    icon: "🧭",
    title: "Solving Acute-Triangle Problems",
    overview: S`Real problems do not say which law to use. This lesson practises the decision: right triangle → primary ratios; a complete side–angle pair → sine law; SAS or SSS → cosine law. Many problems need two or three steps — for example, a cosine-law step to find a side, then the sine law for an angle, then a right triangle for a height. The area of any triangle also follows: \(\text{Area}=\tfrac12ab\sin C\).`,
    goals: [
      "choose the primary ratios, the sine law or the cosine law from the given information;",
      "solve multi-step triangle problems and keep full precision;",
      "find the area of a triangle with \\(\\tfrac12ab\\sin C\\);",
      "model construction, navigation and surveying situations with acute triangles;",
      "check results for reasonableness.",
    ],
    curriculum: "C1.4 (describe conditions that guide when it is appropriate to use the sine law or the cosine law), C1.5 (solve problems that require the sine law or the cosine law in acute triangles, including surveying, navigation and building construction)",
    prior: [
      [S`Which law for two sides and the contained angle?`, S`The cosine law.`],
      [S`Which law for two angles and a side?`, S`The sine law.`],
      [S`Area of a triangle with base \(10\) and height \(6\)?`, S`\(30\).`],
    ],
    words: [
      ["Decision", "match the given information to a method", "SAS → cosine law"],
      ["Multi-step", "use one result as data for the next step", "side, then angle"],
      ["Area formula", "\\(\\tfrac12ab\\sin C\\)", "two sides and the contained angle"],
      ["Truss", "a triangle frame in a roof or bridge", "rafters and a span"],
      ["Baseline", "a measured line used in surveying", "250 m"],
    ],
  }),

  section("📌 A decision chart", S`
  ${table(["Given", "Method"], [
    ["right triangle", "SOH CAH TOA (and Pythagoras)"],
    ["AAS or ASA", "sine law (find the third angle first)"],
    ["SSA with acute triangle", "sine law for an angle"],
    ["SAS", "cosine law for the third side"],
    ["SSS", "cosine law for an angle"],
    ["area with SAS", "\\(\\tfrac12ab\\sin C\\)"],
  ])}
  ${SAS(9, 12, 64, ["", "", ""], [[6, -0.7, "12"], [2.5, 4.4, "9"], [4, 3.5, "h = 9 sin 64°"]], [{ pts: [[9 * cos(64), 9 * sin(64)], [9 * cos(64), 0]], color: "red" }])}
  ${keyIdea(S`Why \(\tfrac12ab\sin C\)? The height onto side \(a\) is \(b\sin C\) (a right triangle), so area \(=\tfrac12\times\text{base}\times\text{height}=\tfrac12a\,b\sin C\).`)}`),

  widget("lawChooser", { init: "sas" }),

  section("⚠️ Common errors", S`
  ${watchOut([
    "Draw and label a diagram first; most errors come from mismatched sides and angles.",
    "Do not round intermediate results; store them in the calculator.",
    "In the area formula, C must be the angle BETWEEN sides a and b.",
    "After finding an angle with the sine law, check that it is acute and that the angles add to 180°.",
    "Interpret the answer with units.",
  ])}`),

  examples([
    ["A roof truss", S`A roof truss has rafters \(6.5\) m and \(5.2\) m long resting on a span of \(8\) m. Find the angles the rafters make with the span, and the angle at the peak.`,
      [S`<b>Given.</b> Three sides: SSS, so use the cosine law.`,
        S`<b>Angle at the end of the 6.5 m rafter</b> (opposite the 5.2 m rafter): \(\cos A=\frac{6.5^2+8^2-5.2^2}{2(6.5)(8)}\Rightarrow A\approx40.39^\circ\).`,
        S`<b>Other base angle</b> (opposite 6.5): \(\cos B=\frac{5.2^2+8^2-6.5^2}{2(5.2)(8)}\Rightarrow B\approx54.10^\circ\).`,
        S`<b>Peak.</b> \(180-40.39-54.10=85.51^\circ\): acute, as expected for this truss.`],
      S`≈ 40.39°, ≈ 54.10°; peak ≈ 85.51°`,
      SSS(5.2, 6.5, 8, ["", "", "peak"], [[4, -0.6, "8 m"], [1.7, 2.4, "6.5"], [6.3, 2.4, "5.2"]])],

    ["Height of a balloon (two steps)", S`Two observers \(80\) m apart on level ground, on opposite sides of a balloon, see it at angles of elevation \(50^\circ\) and \(70^\circ\). Find the balloon's height.`,
      [S`<b>Triangle.</b> Observers \(A\), \(B\) and balloon \(T\): \(AB=80\), \(\angle A=50^\circ\), \(\angle B=70^\circ\), so \(\angle T=60^\circ\).`,
        S`<b>Sine law.</b> \(AT=\frac{80\sin70^\circ}{\sin60^\circ}\approx86.81\) m.`,
        S`<b>Right triangle.</b> Height \(=AT\sin50^\circ\approx66.50\) m.`,
        S`<b>Check.</b> \(BT\sin70^\circ\) gives the same height: \(BT=\frac{80\sin50^\circ}{\sin60^\circ}\approx70.76\); \(70.76\sin70^\circ\approx66.50\) ✓`],
      S`about 66.50 m`,
      SAS(86.81, 80, 50, ["A", "B", "T"], [[40, -6, "80 m"]], [{ pts: [[86.81 * cos(50), 86.81 * sin(50)], [86.81 * cos(50), 0]], color: "red" }])],

    ["Navigation by distances", S`A boat is \(11\) km from lighthouse \(P\) and \(13\) km from lighthouse \(Q\); the lighthouses are \(15\) km apart. Find the angle at the boat between the two lines of sight.`,
      [S`<b>Given.</b> SSS: cosine law for the angle opposite \(PQ=15\).`,
        S`<b>Compute.</b> \(\cos B=\frac{11^2+13^2-15^2}{2(11)(13)}=\frac{65}{286}\approx0.2273\).`,
        S`<b>Angle.</b> \(B\approx76.86^\circ\).`,
        S`<b>Check.</b> The other angles are about \(45.57^\circ\) and \(57.56^\circ\); total \(180^\circ\) ✓`],
      S`≈ 76.86°`,
      SSS(15, 11, 13, ["boat", "Q", "P"])],

    ["Area from SAS", S`A triangular garden has sides \(9\) m and \(12\) m with a \(64^\circ\) angle between them. Find its area.`,
      [S`<b>Formula.</b> \(\text{Area}=\tfrac12ab\sin C\) with the contained angle.`,
        S`<b>Substitute.</b> \(\tfrac12(9)(12)\sin64^\circ=54\sin64^\circ\).`,
        S`<b>Evaluate.</b> \(\approx54(0.8988)\approx48.53\) m².`,
        S`<b>Check.</b> The height onto the 12 m side is \(9\sin64^\circ\approx8.09\); \(\tfrac12(12)(8.09)\approx48.53\) ✓`],
      S`≈ 48.53 m²`,
      SAS(9, 12, 64)],

    ["Area from three sides", S`A triangular lot has sides \(40\) m, \(55\) m and \(62\) m. Find its area.`,
      [S`<b>Step 1: an angle (cosine law).</b> Opposite \(62\): \(\cos C=\frac{40^2+55^2-62^2}{2(40)(55)}\Rightarrow C\approx79.78^\circ\).`,
        S`<b>Step 2: area.</b> \(\tfrac12(40)(55)\sin79.78^\circ\approx1082.53\) m².`,
        S`<b>Sense.</b> A \(40\times55\) rectangle is \(2200\) m²; the triangle is about half, as expected ✓`],
      S`≈ 1082.53 m²`,
      SSS(62, 40, 55)],
  ]),

  practice([
    q("sss", S`A triangle has sides \(8\), \(9\), \(10\). Find the angle opposite the side of length \(8\) (two decimals).`, num(49.46, 0.011), "Cosine law.", [S`\(\cos=\frac{81+100-64}{180}=0.65\).`], S`\(49.46^\circ\)`),
    q("aas", S`\(A=75^\circ\), \(B=62^\circ\), \(c=30\). Find \(a\) (two decimals).`, num(42.49, 0.011), "Sine law; C = 43°.", [S`\(a=\frac{30\sin75^\circ}{\sin43^\circ}\approx42.49\).`], S`\(42.49\)`),
    q("area", S`Find the area of a triangle with sides \(14\) and \(10\) and contained angle \(55^\circ\) (two decimals).`, num(57.34, 0.011), "½ab sin C.", [S`\(70\sin55^\circ\approx57.34\).`], S`\(57.34\)`),
    q("sas", S`Two sides \(20\) and \(25\) meet at \(64^\circ\). Find the third side (two decimals).`, num(24.22, 0.011), "Cosine law.", [S`\(\approx24.22\).`], S`\(24.22\)`),
    q("choose", S`Which method for three sides, find an angle?`, choice(["cosine law", "sine law", "tangent ratio", "area formula"], 0), "SSS.", [S`Cosine law.`], S`cosine law`),
  ]),

  ...hard([
    ["Width of a river", S`From two points \(A\) and \(B\) \(60\) m apart on one bank, a tree \(T\) on the far bank is sighted with \(\angle A=70^\circ\) and \(\angle B=58^\circ\). How wide is the river (perpendicular distance from \(T\) to the bank)?`,
      [S`<b>Angle T.</b> \(180-70-58=52^\circ\).`,
        S`<b>AT</b> (opposite \(B\)): \(AT=\frac{60\sin58^\circ}{\sin52^\circ}\approx64.57\) m.`,
        S`<b>Width.</b> \(AT\sin70^\circ\approx60.68\) m.`],
      S`≈ 60.68 m`],
    ["Two-step quadrilateral", S`In quadrilateral \(ABCD\), \(AB=8\), \(BC=10\), \(\angle B=70^\circ\), \(CD=7\) and \(\angle ACD=60^\circ\). Find \(AC\) and \(AD\).`,
      [S`<b>AC (cosine law in ABC).</b> \(AC^2=64+100-160\cos70^\circ\Rightarrow AC\approx10.45\).`,
        S`<b>AD (cosine law in ACD).</b> \(AD^2=10.45^2+49-2(10.45)(7)\cos60^\circ\Rightarrow AD\approx9.23\).`],
      S`AC ≈ 10.45, AD ≈ 9.23`],
  ], [
    q("hard", S`Find the area of a triangle with sides \(20\) and \(15\) and contained angle \(48^\circ\) (two decimals).`, num(111.47, 0.011), "½ab sin C.", [S`\(150\sin48^\circ\approx111.47\).`], S`\(111.47\)`),
    q("hard", S`An isosceles triangle has equal sides \(9\) and apex angle \(40^\circ\). Find its base (two decimals).`, num(6.16, 0.011), "Cosine law.", [S`\(\sqrt{162-162\cos40^\circ}\approx6.16\).`], S`\(6.16\)`),
    q("hard", S`Find the smallest angle of a \(7\)-\(10\)-\(11\) triangle (two decimals).`, num(38.57, 0.011), "Opposite 7.", [S`\(\cos=\frac{100+121-49}{220}\).`], S`\(38.57^\circ\)`),
    q("hard", S`Two stations \(50\) km apart see a plane at \(80^\circ\) and \(45^\circ\) from the baseline. Find the plane's distance from the baseline (two decimals).`, num(42.51, 0.011), "Sine law, then a right triangle.", [S`Angle at the plane \(55^\circ\); distance from the \(45^\circ\) station \(\frac{50\sin80^\circ}{\sin55^\circ}\approx60.11\); \(60.11\sin45^\circ\approx42.51\).`], S`\(42.51\)`),
    q("hard", S`An equilateral triangle has side \(6\). Use \(\tfrac12ab\sin C\) to find its area (two decimals).`, num(15.59, 0.011), "C = 60°.", [S`\(18\sin60^\circ\approx15.59\).`], S`\(15.59\)`),
  ]),

  wrapUp({
    qas: [
      ["How do I choose a method?", "Right triangle: SOH CAH TOA. Side–angle pair: sine law. SAS or SSS: cosine law."],
      ["What if one law is not enough?", "Use its result as data for the next step."],
      ["How do I find an area without the height?", "Area = ½ab sin C with the angle between a and b."],
      ["Why keep full precision?", "Rounding early can change later answers."],
      ["How do I check?", "Angles add to 180°, and larger sides face larger angles."],
    ],
    summary: [
      "Match the information to the method.",
      "Multi-step: side → angle → height/area.",
      "Area = ½ab sin C.",
      "Diagram, precision, check.",
    ],
    next: "5.6 reviews chapter 5.",
  }),
];
