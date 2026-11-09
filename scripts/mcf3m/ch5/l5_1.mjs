// MCF3M 5.1 — The Primary Trigonometric Ratios: SOH CAH TOA, finding sides and angles, angles of elevation and
// depression, solving right triangles.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, fig } from "../lib.mjs";
import { triD, rightD } from "../figs.mjs";
const S = String.raw;

export const TITLE = "5.1 The Primary Trigonometric Ratios";

export const blocks = () => [
  intro({
    icon: "📐",
    title: "The Primary Trigonometric Ratios",
    overview: S`In a right triangle, the ratio of two sides depends only on the size of an acute angle, not on how big the triangle is. These ratios have names: <b>sine</b>, <b>cosine</b> and <b>tangent</b>. Knowing one acute angle and one side lets you find every other side, and knowing two sides lets you find the angles. Surveyors, builders and navigators use exactly this to measure heights and distances they cannot reach.`,
    goals: [
      "label the opposite, adjacent and hypotenuse relative to an acute angle;",
      "write \\(\\sin\\theta\\), \\(\\cos\\theta\\) and \\(\\tan\\theta\\) as ratios of sides;",
      "find an unknown side using a primary ratio;",
      "find an unknown angle using an inverse ratio;",
      "solve real problems with angles of elevation and depression.",
    ],
    curriculum: "C1.1 (solve problems, including real-world applications such as surveying and navigation, by determining the measures of sides and angles of right triangles using the primary trigonometric ratios)",
    prior: [
      [S`Find the hypotenuse of a right triangle with legs \(6\) and \(8\).`, S`\(\sqrt{36+64}=10\).`],
      [S`Solve \(\frac x{12}=0.4\).`, S`\(x=4.8\).`],
      [S`The angles of a triangle add to …?`, S`\(180^\circ\).`],
    ],
    words: [
      ["Hypotenuse", "the side opposite the right angle (longest)", "side c"],
      ["Opposite", "the side across from the angle θ", "faces θ"],
      ["Adjacent", "the side next to θ that is not the hypotenuse", "touches θ"],
      ["Angle of elevation", "angle up from the horizontal", "looking up at a tower"],
      ["Angle of depression", "angle down from the horizontal", "looking down from a cliff"],
    ],
  }),

  section("📌 SOH CAH TOA", S`
  ${table(["Ratio", "Definition", "Memory aid"], [
    ["\\(\\sin\\theta\\)", "\\(\\dfrac{\\text{opposite}}{\\text{hypotenuse}}\\)", "SOH"],
    ["\\(\\cos\\theta\\)", "\\(\\dfrac{\\text{adjacent}}{\\text{hypotenuse}}\\)", "CAH"],
    ["\\(\\tan\\theta\\)", "\\(\\dfrac{\\text{opposite}}{\\text{adjacent}}\\)", "TOA"],
  ])}
  ${fig(triD([[0, 0], [12, 0], [12, 9]], ["A", "C", "B"], { marks: [[6, -0.9, "adjacent 12"], [13.2, 4.5, "opposite 9"], [5, 5.4, "hypotenuse 15"]] }), "Relative to angle A: opposite 9, adjacent 12, hypotenuse 15.")}
  ${keyIdea(S`Choose the ratio that uses the side you know and the side you want. To find an angle, use the inverse: if \(\tan A=0.75\), then \(A=\tan^{-1}(0.75)\approx36.87^\circ\). Make sure your calculator is in <b>degree</b> mode.`)}`),

  widget("sideFinder", { init: [38, 20] }),

  section("⚠️ Common errors", S`
  ${watchOut([
    "Opposite and adjacent depend on which angle you use; relabel when the angle changes.",
    "The hypotenuse is never the adjacent side.",
    "Calculator in degree mode: sin 30° = 0.5. If you get −0.988, it is in radians.",
    "Use sin⁻¹, cos⁻¹, tan⁻¹ to find angles — not 1/sin.",
    "If the unknown is in the denominator (x = 8/sin 25°), divide; do not multiply.",
  ])}`),

  examples([
    ["Write the three ratios", S`In right \(\triangle ABC\) with \(\angle C=90^\circ\), \(BC=9\), \(AC=12\), \(AB=15\). Write \(\sin A\), \(\cos A\), \(\tan A\) and find \(\angle A\).`,
      [S`<b>Label relative to A.</b> Opposite \(BC=9\); adjacent \(AC=12\); hypotenuse \(AB=15\).`,
        S`<b>Ratios.</b> \(\sin A=\frac9{15}=0.6\); \(\cos A=\frac{12}{15}=0.8\); \(\tan A=\frac9{12}=0.75\).`,
        S`<b>Angle.</b> \(A=\sin^{-1}(0.6)\approx36.87^\circ\).`,
        S`<b>Check.</b> \(\tan^{-1}(0.75)\approx36.87^\circ\) too ✓; and \(9^2+12^2=225=15^2\) ✓`],
      S`\(\sin A=0.6\), \(\cos A=0.8\), \(\tan A=0.75\); \(A\approx36.87^\circ\)`,
      fig(triD([[0, 0], [12, 0], [12, 9]], ["A", "C", "B"], { marks: [[6, -0.9, "12"], [13, 4.5, "9"], [5.3, 5.3, "15"]] }), "")],

    ["Find a side (multiply)", S`In a right triangle, an acute angle is \(38^\circ\) and the hypotenuse is \(20\) cm. Find the side opposite the \(38^\circ\) angle.`,
      [S`<b>Choose the ratio.</b> Known: hypotenuse. Wanted: opposite. Use \(\sin\).`,
        S`<b>Equation.</b> \(\sin38^\circ=\frac x{20}\).`,
        S`<b>Solve.</b> \(x=20\sin38^\circ\approx20(0.6157)\approx12.31\) cm.`,
        S`<b>Check.</b> The opposite side must be shorter than the hypotenuse: \(12.31<20\) ✓`],
      S`about 12.31 cm`,
      fig(triD([[0, 0], [15.76, 0], [15.76, 12.31]], ["38°", "", ""], { marks: [[7, 7.5, "20"], [16.8, 6, "x"]] }), "")],

    ["Find an angle", S`A right triangle has legs \(7\) m and \(11\) m. Find the angle opposite the \(7\) m side.`,
      [S`<b>Ratio.</b> Opposite \(7\), adjacent \(11\): tangent.`,
        S`<b>Equation.</b> \(\tan\theta=\frac7{11}\approx0.6364\).`,
        S`<b>Inverse.</b> \(\theta=\tan^{-1}(0.6364)\approx32.47^\circ\).`,
        S`<b>Check.</b> The other acute angle is \(90-32.47=57.53^\circ\), opposite the longer leg — larger, as expected ✓`],
      S`about 32.47°`,
      fig(rightD(11, 7, ["θ", "", ""], [[5.5, -0.8, "11"], [11.8, 3.5, "7"]]), "")],

    ["Angle of elevation", S`From a point \(45\) m from the base of a tower, the angle of elevation to the top is \(28^\circ\). How tall is the tower?`,
      [S`<b>Diagram.</b> The ground is the adjacent side (\(45\) m), the tower is the opposite side.`,
        S`<b>Ratio.</b> \(\tan28^\circ=\frac h{45}\).`,
        S`<b>Solve.</b> \(h=45\tan28^\circ\approx45(0.5317)\approx23.93\) m.`,
        S`<b>Check.</b> \(28^\circ<45^\circ\), so the height should be less than \(45\) m ✓`],
      S`about 23.93 m`,
      fig(rightD(45, 23.93, ["28°", "", "top"], [[22, -3, "45 m"], [47, 12, "h"]]), "")],

    ["Solve a right triangle", S`Solve the right triangle with hypotenuse \(16\) and an acute angle of \(52^\circ\) (find all sides and angles).`,
      [S`<b>Other angle.</b> \(90^\circ-52^\circ=38^\circ\).`,
        S`<b>Opposite \(52^\circ\).</b> \(16\sin52^\circ\approx12.61\).`,
        S`<b>Adjacent to \(52^\circ\).</b> \(16\cos52^\circ\approx9.85\).`,
        S`<b>Check with Pythagoras.</b> \(12.61^2+9.85^2\approx159.0+97.0=256=16^2\) ✓`],
      S`angles 52°, 38°, 90°; sides 12.61, 9.85, 16`,
      fig(rightD(9.85, 12.61, ["52°", "", "38°"], [[4.9, -1, "9.85"], [10.8, 6.3, "12.61"], [3.6, 7.2, "16"]]), "")],
  ]),

  practice([
    q("side", S`A right triangle has hypotenuse \(14\) and an angle of \(35^\circ\). Find the side adjacent to the \(35^\circ\) angle (two decimals).`, num(11.47, 0.011), "cos 35° = x/14.", [S`\(14\cos35^\circ\approx11.47\).`], S`\(11.47\)`),
    q("angle", S`In a right triangle, opposite \(=5\) and hypotenuse \(=13\). Find the angle (two decimals).`, num(22.62, 0.011), "sin θ = 5/13.", [S`\(\sin^{-1}(5/13)\approx22.62^\circ\).`], S`\(22.62^\circ\)`),
    q("elev", S`From \(30\) m away, the angle of elevation to a roof is \(41^\circ\). Find the roof height (two decimals).`, num(26.08, 0.011), "tan 41° = h/30.", [S`\(30\tan41^\circ\approx26.08\).`], S`\(26.08\)`),
    q("divide", S`The side opposite a \(25^\circ\) angle is \(8\) cm. Find the hypotenuse (two decimals).`, num(18.93, 0.011), "sin 25° = 8/x.", [S`\(x=\frac8{\sin25^\circ}\approx18.93\).`], S`\(18.93\)`),
    q("ratio", S`Which ratio uses the opposite and adjacent sides?`, choice(["tangent", "sine", "cosine", "none"], 0), "TOA.", [S`\(\tan\theta=\frac{\text{opp}}{\text{adj}}\).`], S`tangent`),
  ]),

  ...hard([
    ["A ladder", S`A \(6\) m ladder leans against a wall at \(72^\circ\) to the ground. How far is its foot from the wall, and how high does it reach?`,
      [S`<b>Foot.</b> Adjacent to \(72^\circ\): \(6\cos72^\circ\approx1.85\) m.`,
        S`<b>Height.</b> Opposite: \(6\sin72^\circ\approx5.71\) m.`,
        S`<b>Check.</b> \(1.85^2+5.71^2\approx3.42+32.60\approx36\) ✓`],
      S`foot 1.85 m from the wall; reaches 5.71 m`,
      fig(rightD(1.85, 5.71, ["72°", "", ""], [[0.9, -0.5, "1.85"], [2.3, 2.9, "5.71"], [0.5, 3.4, "6"]]), "")],
    ["A wheelchair ramp", S`Building rules limit a ramp to \(4.8^\circ\). How long must the horizontal run be for a rise of \(0.75\) m, and how long is the ramp surface?`,
      [S`<b>Run.</b> \(\tan4.8^\circ=\frac{0.75}{x}\Rightarrow x=\frac{0.75}{\tan4.8^\circ}\approx8.93\) m.`,
        S`<b>Ramp.</b> \(\sin4.8^\circ=\frac{0.75}{L}\Rightarrow L\approx8.96\) m.`,
        S`<b>Sense.</b> The ramp is only slightly longer than the run because the angle is small ✓`],
      S`run ≈ 8.93 m; ramp ≈ 8.96 m`],
  ], [
    q("hard", S`A road rises \(3\) m over a horizontal \(40\) m. Find its angle of inclination (two decimals).`, num(4.29, 0.011), "tan θ = 3/40.", [S`\(\tan^{-1}(0.075)\approx4.29^\circ\).`], S`\(4.29^\circ\)`),
    q("hard", S`From \(50\) m away, the angles of elevation to the bottom and top of a flagpole on a building are \(20^\circ\) and \(30^\circ\). Find the pole's height (two decimals).`, num(10.67, 0.011), "Difference of two heights.", [S`\(50\tan30^\circ-50\tan20^\circ\approx28.87-18.20=10.67\).`], S`\(10.67\)`),
    q("hard", S`A kite string makes \(35^\circ\) with the ground and the kite is \(10\) m high. Find the horizontal distance to the kite (two decimals).`, num(14.28, 0.011), "tan 35° = 10/x.", [S`\(x=\frac{10}{\tan35^\circ}\approx14.28\).`], S`\(14.28\)`),
    q("hard", S`In a right triangle the adjacent side is \(4\) and the hypotenuse \(7\). Find the angle (two decimals).`, num(55.15, 0.011), "cos θ = 4/7.", [S`\(\cos^{-1}(4/7)\approx55.15^\circ\).`], S`\(55.15^\circ\)`),
    q("hard", S`If \(\tan\theta=1.5\), find \(\theta\) (two decimals).`, num(56.31, 0.011), "Inverse tangent.", [S`\(\tan^{-1}1.5\approx56.31^\circ\).`], S`\(56.31^\circ\)`),
  ]),

  wrapUp({
    qas: [
      ["What does SOH CAH TOA mean?", "sin = opp/hyp, cos = adj/hyp, tan = opp/adj."],
      ["How do I choose a ratio?", "Use the one that contains the side you know and the side you want."],
      ["How do I find an angle?", "Form the ratio from two sides, then use the inverse (sin⁻¹, cos⁻¹, tan⁻¹)."],
      ["Why must my calculator be in degrees?", "This course measures angles in degrees."],
      ["How can I check a solved right triangle?", "Angles sum to 180° and the sides satisfy Pythagoras."],
    ],
    summary: [
      "sin = opp/hyp, cos = adj/hyp, tan = opp/adj.",
      "Unknown on top: multiply; unknown on the bottom: divide.",
      "Angles from inverse ratios.",
      "Elevation and depression are measured from the horizontal.",
    ],
    next: "5.2 solves problems that need two right triangles.",
  }),
];
