// MPM2D 7.2 — The Cosine Law (self-study format): development from an altitude and the Pythagorean theorem,
// SAS (third side), SSS (an angle), the largest angle, and a distance problem — acute triangles only
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, q, num, fig, atri, polygon } from "./lib.mjs";

export const TITLE = "7.2 The Cosine Law";

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "📏",
    title: "The Cosine Law",
    overview: S`The sine law needs a side together with its opposite angle. When you know two sides and the angle between them (SAS), or all three sides (SSS), no such pair is available — and the <strong>cosine law</strong> takes over: \(a^2=b^2+c^2-2bc\cos A\). It comes from the Pythagorean theorem applied to the two right triangles made by an altitude. In this lesson you will follow that development and use the law to find a third side and to find angles.`,
    goals: [
      "follow the development of the cosine law from an altitude and the Pythagorean theorem;",
      "find the third side when two sides and the included angle are known (SAS);",
      "find an angle when three sides are known (SSS);",
      "explain how the cosine law relates to the Pythagorean theorem;",
      "solve problems using the cosine law.",
    ],
    curriculum: "T3 (explore the development of the cosine law within acute triangles; solve problems involving acute triangles using the cosine law)",
    prior: [
      [S`\(8^2+11^2-2(8)(11)\cos50^\circ\approx\)?`, S`\(\approx71.9\).`],
      [S`If \(\cos A=0.5\), \(A=\)?`, S`\(60^\circ\).`],
      [S`State the Pythagorean theorem.`, S`\(c^2=a^2+b^2\) in a right triangle.`],
    ],
    words: [
      ["Included angle", "the angle between two given sides", "\\(\\angle A\\) is between \\(b\\) and \\(c\\)"],
      ["SAS", "two sides and the included angle", ""],
      ["SSS", "three sides", ""],
      ["Cosine law", "\\(a^2=b^2+c^2-2bc\\cos A\\)", ""],
    ],
  }),

  section("📌 Developing the law", S`
  ${fig({ w: 380, items: [...polygon([[0, 0], [10, 0], [4, 6.93]], { names: ["A", "B", "C"], sides: ["", "a", "b"], angles: [[0, "A"]] }), { seg: [[4, 0], [4, 6.93]], color: "red", dash: true }, { text: "h", at: [4.5, 3.2], color: "red", bold: true }, { text: "x", at: [2, -0.7], color: "green", bold: true }, { text: "c − x", at: [7, -0.7], color: "green", bold: true }] }, "The altitude from C meets AB, splitting c into x and c − x.")}
  <ol style="line-height:2">
    <li>Left right triangle: \(h^2=b^2-x^2\), and \(\cos A=\frac xb\), so \(x=b\cos A\).</li>
    <li>Right right triangle: \(a^2=h^2+(c-x)^2=b^2-x^2+c^2-2cx+x^2=b^2+c^2-2cx\).</li>
    <li>Replace \(x\): \(a^2=b^2+c^2-2bc\cos A\).</li>
  </ol>
  ${keyIdea(S`Cosine law: \(a^2=b^2+c^2-2bc\cos A\) (and similarly \(b^2=a^2+c^2-2ac\cos B\), \(c^2=a^2+b^2-2ab\cos C\)). For SAS it gives the third side directly. For SSS rearrange: \(\cos A=\dfrac{b^2+c^2-a^2}{2bc}\). When \(A=90^\circ\), \(\cos A=0\) and it becomes the Pythagorean theorem.`)}`),

  section("📌 Explore", S`<p>Change \(b\), \(c\) and \(\angle A\). Follow the three steps, and set \(\angle A=90^\circ\) to see the Pythagorean theorem appear.</p>`),

  widget("cosineDerive", { init: [8, 10, 60] }),

  section("📌 Using it", S`
  ${watchOut([
    "The angle in the formula must be the one between the two sides you use.",
    "Work out 2bc cos A as one product before subtracting — don't subtract 2bc first.",
    "Take the square root at the end to get the side, not its square.",
    "For SSS, find the largest angle first (opposite the longest side).",
    "In this course every triangle is acute: each cos value you get should be positive.",
  ])}`),

  examples([
    ["SAS: the third side", S`In acute \(\triangle ABC\), \(b=8\), \(c=11\) and \(\angle A=50^\circ\). Find \(a\).`,
      [S`\(a^2=8^2+11^2-2(8)(11)\cos50^\circ=185-176\cos50^\circ\approx71.87\).`, S`\(a\approx8.48\).`],
      S`\(a\approx8.5\)`,
      fig({ w: 320, items: atri(50, 46.3, 11, { b: "8", c: "11", a: "a", A: "50°" }) })],
    ["SAS with a different angle", S`In acute \(\triangle ABC\), \(a=12\), \(b=10\) and \(\angle C=58^\circ\). Find \(c\).`,
      [S`\(c^2=12^2+10^2-2(12)(10)\cos58^\circ=244-240\cos58^\circ\approx116.82\).`, S`\(c\approx10.81\).`],
      S`\(c\approx10.8\)`],
    ["SSS: an angle", S`An acute triangle has sides \(a=7\), \(b=8\) and \(c=9\). Find \(\angle A\).`,
      [S`\(\cos A=\frac{8^2+9^2-7^2}{2(8)(9)}=\frac{96}{144}\approx0.667\).`, S`\(\angle A\approx48.2^\circ\).`],
      S`\(\angle A\approx48.2^\circ\)`],
    ["The largest angle", S`A triangle has sides \(9\), \(11\) and \(13\). Find its largest angle and confirm the triangle is acute.`,
      [S`The largest angle is opposite \(13\): \(\cos\theta=\frac{9^2+11^2-13^2}{2(9)(11)}=\frac{33}{198}\).`, S`\(\theta\approx80.4^\circ\lt90^\circ\), so all angles are acute.`],
      S`about \(80.4^\circ\); acute`],
    ["Distance between hikers", S`Two hikers leave a trailhead along straight paths that are \(64^\circ\) apart. One walks \(3.2\) km and the other \(4.5\) km. How far apart are they?`,
      [S`SAS: \(d^2=3.2^2+4.5^2-2(3.2)(4.5)\cos64^\circ\approx17.86\).`, S`\(d\approx4.23\).`],
      S`about \(4.2\) km`,
      fig({ w: 320, items: atri(64, 42.8, 4.5, { c: "4.5 km", b: "3.2 km", a: "d", A: "64°", names: ["T", "", ""], fill: "green", color: "green" }) })],
  ]),

  practice([
    q("SAS", S`In acute \(\triangle ABC\), \(b=5\), \(c=7\) and \(\angle A=60^\circ\). Find \(a\) to one decimal place.`, num(6.2, 0.06),
      "a² = 25 + 49 − 70 cos 60°.", [S`\(a^2=74-35=39\).`, S`\(a=\sqrt{39}\approx6.24\).`], S`\(6.2\)`),
    q("SAS", S`In acute \(\triangle ABC\), \(a=9\), \(b=12\) and \(\angle C=45^\circ\). Find \(c\) to one decimal place.`, num(8.5, 0.06),
      "c² = a² + b² − 2ab cos C.", [S`\(c^2=225-216\cos45^\circ\approx72.27\).`], S`\(8.5\)`),
    q("SSS", S`A triangle has sides \(5\), \(6\) and \(7\). Find the angle opposite \(5\) to one decimal place.`, num(44.4, 0.06),
      "cos θ = (36 + 49 − 25)/(2·6·7).", [S`\(\cos\theta=\frac{60}{84}\approx0.714\).`], S`\(44.4^\circ\)`),
    q("largest angle", S`A triangle has sides \(8\), \(9\) and \(10\). Find its largest angle to one decimal place.`, num(71.8, 0.06),
      "Opposite the side 10.", [S`\(\cos\theta=\frac{64+81-100}{144}=\frac{45}{144}\).`], S`\(71.8^\circ\)`),
    q("park", S`Two straight paths meet at \(70^\circ\). Their far ends are \(120\) m and \(150\) m from the corner. How far apart are the ends, to the nearest metre?`, num(157, 0.6),
      "SAS.", [S`\(d^2=120^2+150^2-2(120)(150)\cos70^\circ\approx24\,587\).`], S`\(157\) m`),
  ]),

  wrapUp({
    qas: [
      ["Where does the cosine law come from?", "An altitude makes two right triangles. Writing h² from each with the Pythagorean theorem and using x = b cos A gives a² = b² + c² − 2bc cos A."],
      ["When do I use the cosine law?", "When no side is known together with its opposite angle: two sides and the included angle (SAS), or three sides (SSS)."],
      ["How is it related to the Pythagorean theorem?", "It is the Pythagorean theorem plus a correction, −2bc cos A. At A = 90°, cos A = 0 and the correction disappears."],
      ["Why find the largest angle first in SSS?", "It tells you whether the triangle is acute; after that, the sine law can find the others safely."],
      ["What is the most common mistake?", "Subtracting 2bc before multiplying by cos A. Compute 2bc cos A as one number first."],
    ],
    summary: [
      "a² = b² + c² − 2bc cos A (Pythagoras + an altitude).",
      "SAS: find the third side.",
      "SSS: cos A = (b² + c² − a²)/(2bc).",
      "At 90° it becomes the Pythagorean theorem.",
    ],
    next: "7.3 decides which law to use from the information given.",
  }),
];
