// MPM2D 6.3 — The Primary Trigonometric Ratios (self-study format): defining sin, cos, tan through similar right
// triangles, labelling opposite/adjacent/hypotenuse from an angle, exact ratios, calculator values
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, fig, rt } from "./lib.mjs";

export const TITLE = "6.3 The Primary Trigonometric Ratios";

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "📏",
    title: "The Primary Trigonometric Ratios",
    overview: S`All right triangles with the same acute angle \(\theta\) are similar (AA: a right angle and \(\theta\)). So in every one of them, the ratio of any two sides is the same — it depends only on \(\theta\). These ratios have names: <strong>sine</strong>, <strong>cosine</strong> and <strong>tangent</strong>. In this lesson you will see why the ratios are constant, label the sides relative to an angle, write the three ratios exactly from side lengths, and use a calculator to find them for any angle.`,
    goals: [
      "explain, using similar triangles, why trigonometric ratios depend only on the angle;",
      "label the opposite, adjacent and hypotenuse relative to an angle;",
      "write sin θ, cos θ and tan θ as exact fractions;",
      "find the third side first with the Pythagorean theorem when needed;",
      "evaluate trigonometric ratios with a calculator in degree mode.",
    ],
    curriculum: "T2 (determine, through investigation, the relationship between the ratio of two sides in a right triangle and the ratio of the two corresponding sides in a similar right triangle, and define the sine, cosine and tangent ratios)",
    prior: [
      [S`A right triangle has legs \(6\) and \(8\). Hypotenuse?`, S`\(10\).`],
      [S`Why are two right triangles with a \(30^\circ\) angle similar?`, S`AA: \(90^\circ\) and \(30^\circ\).`],
      [S`Simplify \(\frac{12}{15}\).`, S`\(\frac45\).`],
    ],
    words: [
      ["Hypotenuse", "the side opposite the right angle (longest)", ""],
      ["Opposite (to θ)", "the side across from θ", ""],
      ["Adjacent (to θ)", "the leg beside θ (not the hypotenuse)", ""],
      ["SOH CAH TOA", "\\(\\sin=\\frac{O}{H}\\), \\(\\cos=\\frac{A}{H}\\), \\(\\tan=\\frac{O}{A}\\)", ""],
    ],
  }),

  section("📌 Why the ratios are constant", S`
  ${fig({ w: 460, items: [...rt(4, 3, { adj: "4", opp: "3", hyp: "5", theta: "θ" }), ...rt(8, 6, { adj: "8", opp: "6", hyp: "10", theta: "θ", fill: "green" }).map((it) => shift(it, 5.5))] }, "Two similar right triangles: opposite ÷ hypotenuse is 3/5 = 6/10 = 0.6 in both.")}
  <p>Because the triangles are similar, each side of the larger one is \(k\) times the matching side of the smaller one, and \(k\) cancels in every ratio: \(\frac{6}{10}=\frac{2\times3}{2\times5}=\frac35\). So the ratio belongs to the angle, not to the triangle.</p>
  ${table(["Ratio", "Definition", "Memory aid"], [
    ["\\(\\sin\\theta\\)", "\\(\\dfrac{\\text{opposite}}{\\text{hypotenuse}}\\)", "SOH"],
    ["\\(\\cos\\theta\\)", "\\(\\dfrac{\\text{adjacent}}{\\text{hypotenuse}}\\)", "CAH"],
    ["\\(\\tan\\theta\\)", "\\(\\dfrac{\\text{opposite}}{\\text{adjacent}}\\)", "TOA"],
  ])}
  ${keyIdea(S`Label from the angle you are using: the hypotenuse is always opposite the right angle; the opposite side is across from \(\theta\); the adjacent side is the leg touching \(\theta\). Change the angle and the opposite and adjacent sides swap.`)}`),

  section("📌 Explore", S`<p>Change the size of the triangle and watch the three ratios stay fixed. Then change \(\theta\) and watch them change.</p>`),

  widget("ratioLab", { init: [35, 6] }),

  section("📌 Using a calculator", S`
  <p>Set your calculator to <strong>degree</strong> mode. \(\sin 30^\circ=0.5\) is a quick check: if you get \(-0.988\), it is in radians.</p>
  ${watchOut([
    "The hypotenuse is never “opposite” or “adjacent”.",
    "Opposite and adjacent depend on which angle you use.",
    "sin θ and cos θ are always less than 1; tan θ can be greater than 1.",
    "Check degree mode: sin 30° = 0.5.",
    "Write sin θ = 3/5, not sin = 3/5 — the ratio needs its angle.",
  ])}`),

  examples([
    ["All three ratios", S`In a right triangle, the side opposite \(\angle A\) is \(3\), the adjacent side is \(4\) and the hypotenuse is \(5\). Write \(\sin A\), \(\cos A\) and \(\tan A\).`,
      [S`\(\sin A=\frac35\), \(\cos A=\frac45\), \(\tan A=\frac34\).`],
      S`\(\sin A=\tfrac35\), \(\cos A=\tfrac45\), \(\tan A=\tfrac34\)`],
    ["The other angle", S`A right triangle has legs \(5\) and \(12\) and hypotenuse \(13\). \(\angle P\) is opposite the side \(5\) and \(\angle Q\) is opposite the side \(12\). Write \(\sin P\), \(\cos P\), \(\sin Q\) and \(\cos Q\).`,
      [S`From \(P\): opposite \(5\), adjacent \(12\): \(\sin P=\frac5{13}\), \(\cos P=\frac{12}{13}\).`, S`From \(Q\): opposite \(12\), adjacent \(5\): \(\sin Q=\frac{12}{13}\), \(\cos Q=\frac5{13}\).`],
      S`\(\sin P=\cos Q=\tfrac5{13}\); \(\cos P=\sin Q=\tfrac{12}{13}\)`,
      fig({ w: 320, items: rt(12, 5, { adj: "12", opp: "5", hyp: "13", theta: "P", other: "Q" }) })],
    ["Similar triangles, same ratio", S`Show that \(\tan\theta\) is the same in an \(8\)-\(15\)-\(17\) triangle and a \(16\)-\(30\)-\(34\) triangle (θ opposite the shortest leg).`,
      [S`Small: \(\tan\theta=\frac{8}{15}\).`, S`Large: \(\tan\theta=\frac{16}{30}=\frac{8}{15}\).`, S`The triangles are similar (\(k=2\)), so the ratio is unchanged.`],
      S`\(\tan\theta=\tfrac8{15}\) in both`],
    ["Calculator values", S`Evaluate \(\sin25^\circ\), \(\cos62^\circ\) and \(\tan70^\circ\) to four decimal places.`,
      [S`Degree mode.`, S`\(\sin25^\circ\approx0.4226\), \(\cos62^\circ\approx0.4695\), \(\tan70^\circ\approx2.7475\).`],
      S`\(0.4226\), \(0.4695\), \(2.7475\)`],
    ["Find the third side first", S`A right triangle has legs \(7\) and \(24\). For the angle \(\theta\) opposite the side \(7\), find all three ratios.`,
      [S`Hypotenuse: \(\sqrt{7^2+24^2}=\sqrt{625}=25\).`, S`\(\sin\theta=\frac7{25}\), \(\cos\theta=\frac{24}{25}\), \(\tan\theta=\frac7{24}\).`],
      S`\(\tfrac7{25}\), \(\tfrac{24}{25}\), \(\tfrac7{24}\)`,
      fig({ w: 320, items: rt(24, 7, { adj: "24", opp: "7", hyp: "?", theta: "θ" }) })],
  ]),

  practice([
    q("sin", S`A right triangle has sides \(9\), \(12\), \(15\). For the angle opposite the side \(9\), find \(\sin\theta\) as a decimal.`, num(0.6),
      "opposite ÷ hypotenuse.", [S`\(\frac9{15}=0.6\).`], S`\(0.6\)`),
    q("cos", S`In the same \(9\)-\(12\)-\(15\) triangle, find \(\cos\theta\) for that angle.`, num(0.8),
      "adjacent ÷ hypotenuse.", [S`\(\frac{12}{15}=0.8\).`], S`\(0.8\)`),
    q("tan", S`A right triangle has legs \(20\) and \(21\) and hypotenuse \(29\). For the angle opposite the side \(20\), find \(\tan\theta\) to two decimal places.`, num(0.95, 0.005),
      "opposite ÷ adjacent.", [S`\(\frac{20}{21}\approx0.952\).`], S`\(0.95\)`),
    q("calculator", S`Evaluate \(\cos40^\circ\) to three decimal places.`, num(0.766, 0.0006),
      "Degree mode.", [S`\(\cos40^\circ\approx0.7660\).`], S`\(0.766\)`),
    q("which ratio", S`Which ratio is \(\dfrac{\text{opposite}}{\text{adjacent}}\)?`, choice(["tangent", "sine", "cosine", "hypotenuse"], 0),
      "TOA.", ["tan = opposite ÷ adjacent."], "tangent"),
  ]),

  wrapUp({
    qas: [
      ["Why does sin 35° have one fixed value?", "Every right triangle with a 35° angle is similar to every other, so opposite ÷ hypotenuse is the same number in all of them — about 0.5736."],
      ["Why are sin θ and cos θ less than 1?", "They divide a leg by the hypotenuse, and the hypotenuse is the longest side."],
      ["Can tan θ be bigger than 1?", "Yes: when the opposite side is longer than the adjacent side, which happens for angles above 45°."],
      ["How are sin and cos of the two acute angles related?", "The opposite side of one angle is the adjacent side of the other, so sin A = cos B when A + B = 90°."],
      ["What if my calculator gives strange answers?", "Check that it is in degree mode (sin 30° should be 0.5)."],
    ],
    summary: [
      "Same angle → similar right triangles → same ratios.",
      "sin = O/H, cos = A/H, tan = O/A (SOH CAH TOA).",
      "Label from the angle you are using.",
      "Calculator in degree mode.",
    ],
    next: "6.4 uses the ratios to find unknown side lengths.",
  }),
];

// move every point of a figure item to the right
function shift(it, dx) {
  const mv = (p) => [p[0] + dx, p[1]];
  const out = { ...it };
  for (const k of ["poly", "seg"]) if (out[k]) out[k] = out[k].map(mv);
  for (const k of ["dim", "right", "arc"]) if (out[k]) out[k] = out[k].map(mv);
  if (out.at) out.at = mv(out.at);
  if (out.dot) out.dot = mv(out.dot);
  return out;
}
