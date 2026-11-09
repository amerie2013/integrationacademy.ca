// MCF3M 5.4 — The Cosine Law: a² = b² + c² − 2bc cos A; finding a side (SAS) and an angle (SSS); connection to
// Pythagoras; navigation and land problems.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, fig } from "../lib.mjs";
import { triD, sasD, sin, cos, acos } from "../figs.mjs";
const S = String.raw;

export const TITLE = "5.4 The Cosine Law";
const SAS = (b, c, A, labels = ["A", "B", "C"], marks = []) => fig(sasD(b, c, A, labels, { marks }), "");
const SSS = (a, b, c, labels = ["A", "B", "C"], marks = []) => { const A = acos((b * b + c * c - a * a) / (2 * b * c)); return fig(sasD(b, c, A, labels, { marks }), ""); };

export const blocks = () => [
  intro({
    icon: "📐",
    title: "The Cosine Law",
    overview: S`The sine law needs a side and its opposite angle. When you know two sides and the angle <b>between</b> them (SAS), or all three sides (SSS), use the <b>cosine law</b>: \[a^2=b^2+c^2-2bc\cos A.\] It is Pythagoras' theorem with a correction term: when \(A=90^\circ\), \(\cos A=0\) and it becomes \(a^2=b^2+c^2\). The cosine law finds the third side of a SAS triangle, or any angle of a SSS triangle.`,
    goals: [
      "state the cosine law in its three forms;",
      "explain how it reduces to Pythagoras when the angle is 90°;",
      "find the third side when two sides and the contained angle are known;",
      "find an angle when three sides are known;",
      "choose between the sine law and cosine law and solve real problems.",
    ],
    curriculum: "C1.3 (verify the cosine law), C1.4 (describe when to use the sine law or the cosine law, and use them to calculate sides and angles in acute triangles), C1.5 (solve problems using the cosine law)",
    prior: [
      [S`Evaluate \(\cos60^\circ\).`, S`\(0.5\).`],
      [S`\(c^2=25+64\). Find \(c\).`, S`\(\sqrt{89}\approx9.43\).`],
      [S`\(\cos A=0.3\). Find \(A\).`, S`\(\cos^{-1}0.3\approx72.54^\circ\).`],
    ],
    words: [
      ["Contained angle", "the angle between two known sides", "angle A between b and c"],
      ["SAS", "two sides and the contained angle", "cosine law for the third side"],
      ["SSS", "three sides", "cosine law for an angle"],
      ["Cosine law", "\\(a^2=b^2+c^2-2bc\\cos A\\)", "any triangle"],
      ["Angle form", "\\(\\cos A=\\frac{b^2+c^2-a^2}{2bc}\\)", "find an angle"],
    ],
  }),

  section("📌 The law and when to use it", S`
  ${table(["Form", "Use"], [
    ["\\(a^2=b^2+c^2-2bc\\cos A\\)", "side a opposite angle A"],
    ["\\(b^2=a^2+c^2-2ac\\cos B\\)", "side b opposite angle B"],
    ["\\(\\cos C=\\dfrac{a^2+b^2-c^2}{2ab}\\)", "angle C from three sides"],
  ])}
  ${SAS(9, 12, 40, ["A", "B", "C"], [[6, -0.7, "c = 12"], [2.6, 3.4, "b = 9"], [9, 3, "a = ?"]])}
  ${keyIdea(S`<b>Choosing a law.</b> Have a complete side–opposite-angle pair? Use the sine law. Have SAS or SSS? Use the cosine law. After one cosine-law step you usually have a complete pair, and the sine law can finish the triangle.`)}`),

  widget("cosineDerive", { init: [8, 10, 60] }),

  section("⚠️ Common errors", S`
  ${watchOut([
    "The angle in the formula is the one BETWEEN the two known sides and OPPOSITE the unknown side.",
    "Compute 2bc cos A first, then subtract: 81 + 144 − 216 cos 40°, not (81 + 144 − 216) cos 40°.",
    "Take the square root at the end to get the side.",
    "To find an angle, rearrange to cos A = (b² + c² − a²)/(2bc) before taking cos⁻¹.",
    "Find the largest angle with the cosine law first; then the sine law is safe for the rest.",
  ])}`),

  examples([
    ["Third side (SAS)", S`In \(\triangle ABC\), \(b=9\), \(c=12\), \(A=40^\circ\). Find \(a\).`,
      [S`<b>Which law?</b> Two sides and the contained angle: cosine law.`,
        S`<b>Substitute.</b> \(a^2=9^2+12^2-2(9)(12)\cos40^\circ=81+144-216\cos40^\circ\).`,
        S`<b>Evaluate.</b> \(216\cos40^\circ\approx165.47\), so \(a^2\approx225-165.47=59.53\).`,
        S`<b>Root.</b> \(a\approx7.72\).`,
        S`<b>Sense.</b> A \(40^\circ\) angle is small, so \(a\) is shorter than both \(b\) and \(c\) ✓`],
      S`a ≈ 7.72`,
      SAS(9, 12, 40, ["A", "B", "C"], [[6, -0.7, "12"], [2.6, 3.4, "9"]])],

    ["An angle (SSS)", S`A triangle has sides \(a=7\), \(b=8\), \(c=9\). Find all three angles.`,
      [S`<b>Angle A.</b> \(\cos A=\frac{8^2+9^2-7^2}{2(8)(9)}=\frac{96}{144}\approx0.6667\Rightarrow A\approx48.19^\circ\).`,
        S`<b>Angle B.</b> \(\cos B=\frac{7^2+9^2-8^2}{2(7)(9)}=\frac{66}{126}\approx0.5238\Rightarrow B\approx58.41^\circ\).`,
        S`<b>Angle C.</b> \(180-48.19-58.41=73.40^\circ\).`,
        S`<b>Check.</b> The largest angle is opposite the largest side \(c=9\) ✓`],
      S`A ≈ 48.19°, B ≈ 58.41°, C ≈ 73.40°`,
      SSS(7, 8, 9)],

    ["Two ships", S`Two ships leave port at the same time. One sails \(35\) km and the other \(48\) km, on courses \(62^\circ\) apart. How far apart are they?`,
      [S`<b>Triangle.</b> Port and the two ships; sides \(35\) and \(48\) with the contained angle \(62^\circ\).`,
        S`<b>Cosine law.</b> \(d^2=35^2+48^2-2(35)(48)\cos62^\circ\).`,
        S`<b>Evaluate.</b> \(1225+2304-3360\cos62^\circ\approx3529-1577.42=1951.58\).`,
        S`<b>Distance.</b> \(d\approx44.18\) km.`],
      S`about 44.18 km`,
      SAS(35, 48, 62, ["port", "ship 2", "ship 1"])],

    ["A park path", S`A triangular park has sides \(60\) m and \(85\) m meeting at a \(75^\circ\) corner. How long is the third side?`,
      [S`<b>SAS:</b> \(x^2=60^2+85^2-2(60)(85)\cos75^\circ\).`,
        S`<b>Evaluate:</b> \(3600+7225-10200\cos75^\circ\approx10825-2639.95=8185.05\).`,
        S`<b>Root:</b> \(x\approx90.47\) m.`,
        S`<b>Check:</b> the side opposite the largest angle should be the longest; the \(75^\circ\) angle is the largest here ✓`],
      S`about 90.47 m`,
      SAS(60, 85, 75, ["", "", ""])],

    ["Cosine law, then sine law", S`Solve \(\triangle ABC\) with \(b=10\), \(c=14\), \(A=55^\circ\).`,
      [S`<b>Side a (cosine law).</b> \(a^2=100+196-280\cos55^\circ\approx135.40\Rightarrow a\approx11.64\).`,
        S`<b>Angle B (sine law, smaller side so acute).</b> \(\sin B=\frac{10\sin55^\circ}{11.64}\approx0.7037\Rightarrow B\approx44.75^\circ\).`,
        S`<b>Angle C.</b> \(180-55-44.75=80.25^\circ\).`,
        S`<b>Check.</b> \(c=14\) is the largest side, opposite the largest angle ✓`],
      S`a ≈ 11.64, B ≈ 44.75°, C ≈ 80.25°`,
      SAS(10, 14, 55)],
  ]),

  practice([
    q("sas", S`\(b=6\), \(c=10\), \(A=50^\circ\). Find \(a\) (two decimals).`, num(7.67, 0.011), "a² = 36 + 100 − 120 cos 50°.", [S`\(a\approx7.67\).`], S`\(7.67\)`),
    q("sss", S`\(a=11\), \(b=9\), \(c=13\). Find \(A\) (two decimals).`, num(56.54, 0.011), "cos A = (81 + 169 − 121)/(2·9·13).", [S`\(\cos A\approx0.5513\Rightarrow A\approx56.54^\circ\).`], S`\(56.54^\circ\)`),
    q("ships", S`Two paths of \(120\) m and \(150\) m meet at \(70^\circ\). Find the distance between their ends (two decimals).`, num(156.80, 0.011), "SAS.", [S`\(\approx156.80\).`], S`\(156.80\)`),
    q("smallest", S`Find the smallest angle of a \(5\)-\(6\)-\(7\) triangle (two decimals).`, num(44.42, 0.011), "Opposite the shortest side.", [S`\(\cos A=\frac{36+49-25}{84}\Rightarrow A\approx44.42^\circ\).`], S`\(44.42^\circ\)`),
    q("choose", S`Which law finds the third side when two sides and the contained angle are known?`, choice(["cosine law", "sine law", "Pythagoras only", "tangent ratio"], 0), "SAS.", [S`Cosine law.`], S`cosine law`),
  ]),

  ...hard([
    ["Two angles from three sides", S`Find the two smallest angles of a triangle with sides \(10\), \(13\), \(15\).`,
      [S`<b>Opposite 13.</b> \(\cos B=\frac{100+225-169}{300}=0.52\Rightarrow B\approx58.67^\circ\).`,
        S`<b>Opposite 10.</b> \(\cos A=\frac{169+225-100}{390}\approx0.7538\Rightarrow A\approx41.08^\circ\).`,
        S`<b>Third.</b> \(180-58.67-41.08\approx80.25^\circ\).`],
      S`≈ 41.08° and ≈ 58.67°`,
      SSS(10, 13, 15)],
    ["A plane's detour", S`A plane flies \(14\) km, turns through an angle so that the angle between its two legs is \(80^\circ\), and flies \(9\) km. How far is it from the start?`,
      [S`<b>SAS:</b> \(d^2=196+81-252\cos80^\circ\approx277-43.76=233.24\).`,
        S`<b>Distance:</b> \(d\approx15.27\) km.`],
      S`≈ 15.27 km`],
  ], [
    q("hard", S`\(b=8\), \(c=11\), \(A=58^\circ\). Find \(a\) (two decimals).`, num(9.58, 0.011), "SAS.", [S`\(a^2=64+121-176\cos58^\circ\approx91.73\).`], S`\(9.58\)`),
    q("hard", S`Find the smallest angle of a triangle with sides \(12\), \(15\), \(18\) (two decimals).`, num(41.41, 0.011), "Opposite 12.", [S`\(\cos=\frac{225+324-144}{540}=0.75\).`], S`\(41.41^\circ\)`),
    q("hard", S`A tunnel is planned between points \(A\) and \(B\). From a point \(C\), \(CA=400\) m, \(CB=650\) m, \(\angle C=48^\circ\). Find \(AB\) (two decimals).`, num(484.31, 0.011), "SAS.", [S`\(\approx484.31\).`], S`\(484.31\)`),
    q("hard", S`What is each angle of an equilateral triangle, found by the cosine law?`, num(60, 0.011), "cos A = (s² + s² − s²)/(2s²).", [S`\(\cos A=\tfrac12\).`], S`\(60^\circ\)`),
    q("hard", S`For which angle \(A\) does the cosine law reduce to \(a^2=b^2+c^2\)?`, num(90), "cos A = 0.", [S`\(A=90^\circ\): Pythagoras.`], S`\(90^\circ\)`),
  ]),

  wrapUp({
    qas: [
      ["What does the cosine law say?", "a² = b² + c² − 2bc cos A."],
      ["When should I use it?", "SAS (find the third side) or SSS (find an angle)."],
      ["How is it related to Pythagoras?", "If A = 90°, cos A = 0 and the law becomes a² = b² + c²."],
      ["How do I find an angle?", "cos A = (b² + c² − a²)/(2bc), then cos⁻¹."],
      ["Can I mix the two laws?", "Yes: cosine law first, then the sine law to finish."],
    ],
    summary: [
      "a² = b² + c² − 2bc cos A.",
      "SAS → side; SSS → angle.",
      "Pair the angle with the side opposite it.",
      "Then use the sine law to finish.",
    ],
    next: "5.5 chooses between all the tools to solve acute-triangle problems.",
  }),
];
