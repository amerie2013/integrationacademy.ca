// IB AA SL 12.2 — The Unit Circle and Exact Values: definition of cos θ and sin θ as coordinates, tan θ, signs in the four quadrants (CAST), reference angles, exact values for multiples of π/6 and π/4, finding other ratios from one
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard } from "./lib.mjs";
import { fig, unitPoint } from "./figs12.mjs";

export const TITLE = "12.2 The Unit Circle and Exact Values";
export const ID = "689834d3-0a97-49d3-815f-b75c525f47d8";
const S = String.raw;
const PI = Math.PI;

export const blocks = () => [
  intro({
    icon: "⭕",
    title: "The Unit Circle and Exact Values",
    overview: S`Right-angled triangles only define trigonometric ratios for acute angles. The unit circle extends them to every angle: measure θ anticlockwise from the positive x-axis, and the point on the circle of radius 1 is \((\cos\theta,\sin\theta)\). In this lesson you will use the unit circle to find signs, reference angles and exact values, and find one ratio from another.`,
    goals: [
      S`define \(\cos\theta\) and \(\sin\theta\) as the coordinates of a point on the unit circle;`,
      S`define \(\tan\theta=\frac{\sin\theta}{\cos\theta}\) and know where it is not defined;`,
      "determine signs in each quadrant (CAST) and use reference angles;",
      "find exact values for multiples of π/6 and π/4;",
      "find the other ratios given one ratio and the quadrant.",
    ],
    curriculum: "SL 3.5 (definition of cos θ, sin θ in terms of the unit circle; tan θ; exact values of trigonometric ratios of 0, π/6, π/4, π/3, π/2 and their multiples; extension of the sine rule to the ambiguous case)",
    prior: [
      [S`\(\sin30^\circ\)?`, S`\(\frac12\).`],
      [S`\(\frac{5\pi}{6}\) in degrees?`, "150°."],
      ["Legs 5 and 12: hypotenuse?", "13."],
    ],
    words: [
      ["Unit circle", "centre (0, 0), radius 1", S`\(x^2+y^2=1\)`],
      ["Reference angle", "the acute angle to the x-axis", S`ref(150°) = 30°`],
      ["CAST", "which ratios are positive in quadrants 4, 1, 2, 3", ""],
      ["Coterminal", "angles differing by full turns", S`\(\frac{\pi}{3}\), \(\frac{7\pi}{3}\)`],
      ["Undefined tan", S`where \(\cos\theta=0\)`, S`\(\theta=\frac{\pi}{2}\)`],
    ],
  }),

  section("📌 Cosine and sine as coordinates", S`
  <p>The point at angle θ on the unit circle has x-coordinate \(\cos\theta\) and y-coordinate \(\sin\theta\). In the first quadrant this agrees with SOH CAH TOA (hypotenuse 1). Beyond 90°, the signs come from the coordinates.</p>
  ${fig({ items: unitPoint(PI / 3) }, "θ = π/3: the point (½, √3/2), so cos = ½, sin = √3/2")}
  ${fig({ items: unitPoint((5 * PI) / 6, { label: "5π/6" }) }, "θ = 5π/6 (150°): reference angle π/6; cos negative, sin positive")}
  ${table(["Quadrant", "Angle range", "Positive"], [["1", "0 to π/2", "all"], ["2", "π/2 to π", "sin"], ["3", "π to 3π/2", "tan"], ["4", "3π/2 to 2π", "cos"]])}
  ${keyIdea("cos θ = x, sin θ = y on the unit circle. Find the reference angle, the exact value for it, then the sign from the quadrant (CAST).")}`),

  section("📌 Exact values", S`
  ${table(["θ", "0", "π/6", "π/4", "π/3", "π/2", "π"], [
    ["sin θ", "0", S`\(\frac12\)`, S`\(\frac{\sqrt2}2\)`, S`\(\frac{\sqrt3}2\)`, "1", "0"],
    ["cos θ", "1", S`\(\frac{\sqrt3}2\)`, S`\(\frac{\sqrt2}2\)`, S`\(\frac12\)`, "0", "−1"],
    ["tan θ", "0", S`\(\frac{\sqrt3}3\)`, "1", S`\(\sqrt3\)`, "not defined", "0"],
  ])}
  <p>For \(\frac{7\pi}{4}\): reference angle \(\frac{\pi}{4}\), quadrant 4 (cos positive), so \(\cos\frac{7\pi}{4}=\frac{\sqrt2}2\) and \(\sin\frac{7\pi}{4}=-\frac{\sqrt2}2\).</p>
  ${fig({ items: unitPoint((7 * PI) / 4, { label: "7π/4" }) }, "θ = 7π/4: (√2/2, −√2/2)")}
  ${fig({ items: unitPoint((4 * PI) / 3, { label: "4π/3" }) }, "θ = 4π/3: (−½, −√3/2); tan = √3 (positive in quadrant 3)")}
  ${watchOut([
    "Measure angles anticlockwise from the positive x-axis; negative angles go clockwise.",
    "The reference angle is always measured to the x-axis, never to the y-axis.",
    "tan θ is not defined when cos θ = 0 (θ = π/2, 3π/2, …).",
    "Adding 2π gives the same point: sin(θ + 2π) = sin θ.",
  ])}`),

  section("📌 Explore", S`<p>Move the angle around the circle. Watch the coordinates, the signs in each quadrant and the reference angle.</p>`),

  widget("ibUnitCircle", { init: 225 }),

  examples([
    ["Level 1 · Exact value", S`Find the exact value of \(\cos\frac{2\pi}{3}\) and \(\sin\frac{2\pi}{3}\).`,
      [S`Reference angle \(\frac{\pi}{3}\); quadrant 2.`],
      S`\(-\frac12\); \(\frac{\sqrt3}{2}\)`],
    ["Level 1 · Negative angle", S`Find \(\sin\left(-\frac{\pi}{6}\right)\) and \(\tan\left(-\frac{\pi}{6}\right)\).`,
      [S`\(-\frac{\pi}{6}\) is in quadrant 4.`],
      S`\(-\frac12\); \(-\frac{\sqrt3}{3}\)`],
    ["Level 2 · Large angle", S`Find the exact value of \(\cos\frac{11\pi}{3}\).`,
      [S`\(\frac{11\pi}{3}-2\pi=\frac{5\pi}{3}\): quadrant 4, reference \(\frac{\pi}{3}\).`],
      S`\(\frac12\)`],
    ["Level 2 · Other ratios", S`Given \(\sin\theta=\frac{8}{17}\) and \(\frac{\pi}{2}<\theta<\pi\), find \(\cos\theta\) and \(\tan\theta\).`,
      [S`\(\cos^2\theta=1-\frac{64}{289}=\frac{225}{289}\); cos negative in quadrant 2.`],
      S`\(\cos\theta=-\frac{15}{17}\), \(\tan\theta=-\frac{8}{15}\)`,
      fig({ items: unitPoint(PI - Math.asin(8 / 17), { label: "θ" }) })],
    ["Level 3 · Two quadrants", S`Find all θ in \([0,2\pi]\) with \(\cos\theta=-\frac{\sqrt2}{2}\).`,
      [S`Reference \(\frac{\pi}{4}\); cos negative in quadrants 2 and 3.`],
      S`\(\frac{3\pi}{4},\ \frac{5\pi}{4}\)`],
  ]),

  practice([
    q("Level 1 · exact", S`Find \(\sin\frac{3\pi}{2}\).`, num(-1),
      "Point (0, −1).", ["−1."], S`\(-1\)`),
    q("Level 1 · sign", S`In which quadrant are sin and tan both negative?`, choice(["4", "2", "3", "1"], 0),
      "cos positive only.", ["Quadrant 4."], "4"),
    q("Level 2 · exact", S`Find \(\tan\frac{5\pi}{4}\).`, num(1),
      "Quadrant 3, ref π/4.", ["1."], S`\(1\)`),
    q("Level 2 · other ratio", S`\(\cos\theta=-\frac35\), θ in quadrant 3. Find \(\tan\theta\) (decimal).`, num(4 / 3, 0.001),
      "sin = −4/5.", [S`\(\frac{-4/5}{-3/5}\).`], S`\(\frac43\)`),
    q("Level 2 · large angle", S`Find \(\sin\frac{17\pi}{6}\) (decimal).`, num(0.5, 0.001),
      "Subtract 2π: 5π/6.", ["½."], S`\(\frac12\)`),
  ]),

  ...hard([
    ["Using a related angle", S`If \(\sin\alpha=0.3\) with α acute, find \(\sin(\pi-\alpha)\), \(\sin(\pi+\alpha)\) and \(\cos\left(\frac{\pi}{2}-\alpha\right)\).`,
      [S`\(\pi-\alpha\) is in quadrant 2: sine positive, 0.3.`, S`\(\pi+\alpha\) in quadrant 3: −0.3.`, S`\(\cos\left(\frac{\pi}{2}-\alpha\right)=\sin\alpha=0.3\).`],
      S`\(0.3\), \(-0.3\), \(0.3\)`,
      fig({ items: unitPoint(Math.asin(0.3), { label: "α", quadrants: false }) }, "Reflections of the point give the related angles")],
    ["Tangent from a line", S`The line \(y=-2x\) meets the unit circle in quadrant 2 at P. Find the angle θ of P and \(\sin\theta\), \(\cos\theta\) exactly.`,
      [S`\(\tan\theta=-2\); with \(x<0\): \(x^2+4x^2=1\Rightarrow x=-\frac{1}{\sqrt5}\), \(y=\frac{2}{\sqrt5}\).`, S`\(\theta=\pi-\tan^{-1}2\approx2.034\).`],
      S`\(\cos\theta=-\frac{\sqrt5}5\), \(\sin\theta=\frac{2\sqrt5}5\); \(\theta\approx2.034\)`],
  ], [
    q("Level 3 · expression", S`Evaluate exactly \(\sin\frac{\pi}{3}\cos\frac{\pi}{6}-\cos\frac{2\pi}{3}\) (decimal).`, num(1.25, 0.001),
      "¾ + ½.", [S`\(\frac34+\frac12\).`], S`\(\frac54\)`),
    q("Level 3 · tan", S`\(\tan\theta=-\frac{5}{12}\), θ in quadrant 4. Find \(\sin\theta\) (decimal, 4 d.p.).`, num(-5 / 13, 0.0001),
      "5-12-13.", [S`\(-\frac{5}{13}\).`], S`\(-\frac{5}{13}\)`),
    q("Level 3 · count", S`How many values of θ in \([0,4\pi]\) satisfy \(\sin\theta=\frac{\sqrt3}{2}\)?`, num(4),
      "Two per turn.", ["4."], S`\(4\)`),
  ]),

  wrapUp({
    qas: [
      ["Why define trig ratios on the unit circle?", "It works for every angle, not just acute ones."],
      ["How do I find the sign?", "From the quadrant: CAST (cos, all, sin, tan positive in quadrants 4, 1, 2, 3)."],
      ["What is a reference angle?", "The acute angle between the terminal arm and the x-axis."],
      ["How do I find cos from sin?", "Use cos² θ = 1 − sin² θ and choose the sign from the quadrant."],
      ["When is tan not defined?", "When cos θ = 0: at π/2 + nπ."],
    ],
    summary: [
      "(cos θ, sin θ) is the point at angle θ.",
      "tan θ = sin θ / cos θ.",
      "CAST and reference angles give signs and values.",
      "Exact values for π/6, π/4, π/3 and their multiples.",
    ],
    next: "12.3 proves and uses trigonometric identities.",
  }),
];
