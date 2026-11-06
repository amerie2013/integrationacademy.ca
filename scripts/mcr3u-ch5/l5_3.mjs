// MCR3U 5.3 — Reciprocal Ratios and Trigonometric Identities: csc, sec, cot; the quotient and Pythagorean identities;
// finding all ratios from one; proving identities
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { tv } from "../mcr3u-extables.mjs";

export const TITLE = "5.3 Reciprocal Ratios and Trigonometric Identities";
export const ID = "11b3c714-aab1-4d03-af1c-a425acddb58e";
const S = String.raw;

export const blocks = () => [
  intro({
    icon: "🔁",
    title: "Reciprocal Ratios and Trigonometric Identities",
    overview: S`Each primary ratio has a reciprocal: cosecant, secant and cotangent. And some equations, such as \(\sin^2\theta+\cos^2\theta=1\), are true for every angle — these are <strong>identities</strong>. In this lesson you will use the reciprocal ratios, find every ratio from one given ratio, and prove simple identities by rewriting one side until it matches the other.`,
    goals: [
      "define csc, sec and cot from a right triangle and as reciprocals;",
      "evaluate reciprocal ratios, including exact values;",
      "use the quotient and Pythagorean identities;",
      "find all six ratios from one ratio and a quadrant;",
      "prove simple identities, and disprove a non-identity with a counter-example.",
    ],
    curriculum: "D1.4 (define secant, cosecant and cotangent and relate them to cosine, sine and tangent), D1.5 (prove simple trigonometric identities using the Pythagorean, quotient and reciprocal identities)",
    prior: [
      [S`What is \(\frac{1}{\frac{\sqrt3}2}\)?`, S`\(\frac2{\sqrt3}\).`],
      [S`In a right triangle with legs 3, 4, what is the hypotenuse?`, S`\(5\).`],
      [S`Simplify \(1-\sin^2\theta\) if you know \(\sin^2\theta+\cos^2\theta=1\).`, S`\(\cos^2\theta\).`],
    ],
    words: [
      ["Cosecant", "\\(\\csc\\theta=\\frac1{\\sin\\theta}=\\frac{\\text{hyp}}{\\text{opp}}\\)", ""],
      ["Secant", "\\(\\sec\\theta=\\frac1{\\cos\\theta}=\\frac{\\text{hyp}}{\\text{adj}}\\)", ""],
      ["Cotangent", "\\(\\cot\\theta=\\frac1{\\tan\\theta}=\\frac{\\text{adj}}{\\text{opp}}\\)", ""],
      ["Identity", "an equation true for every value where both sides are defined", "\\(\\tan\\theta=\\frac{\\sin\\theta}{\\cos\\theta}\\)"],
    ],
  }),

  section("📌 The identities", S`
  ${table(["Type", "Identity"], [["Reciprocal", "\\(\\csc\\theta=\\frac1{\\sin\\theta}\\), \\(\\sec\\theta=\\frac1{\\cos\\theta}\\), \\(\\cot\\theta=\\frac1{\\tan\\theta}\\)"], ["Quotient", "\\(\\tan\\theta=\\frac{\\sin\\theta}{\\cos\\theta}\\), \\(\\cot\\theta=\\frac{\\cos\\theta}{\\sin\\theta}\\)"], ["Pythagorean", "\\(\\sin^2\\theta+\\cos^2\\theta=1\\)"]])}
  ${plane({ view: { xmin: -1.5, xmax: 1.5, ymin: -1.5, ymax: 1.5 }, curves: [{ f: (x) => Math.sqrt(Math.max(0, 1 - x * x)), a: -1, b: 1, color: "gray" }, { f: (x) => -Math.sqrt(Math.max(0, 1 - x * x)), a: -1, b: 1, color: "gray" }], segs: [{ pts: [[0, 0], [0.8, 0.6], [0.8, 0], [0, 0]], color: "violet" }], points: [{ x: 0.8, y: 0.6, label: "(cos θ, sin θ)" }], step: { x: 0.5, y: 0.5 } }, "on the unit circle x = cos θ, y = sin θ, and x² + y² = 1")}
  ${keyIdea(S`To <strong>prove</strong> an identity, start with one side (usually the more complicated one) and use known identities and algebra until it becomes the other side. Never move terms across the equals sign — that assumes what you are proving.`)}`),

  section("📌 Explore", S`<p>Choose an identity and move θ. Both sides agree at every angle where they are defined. Try the non-identity too: one angle where the sides differ is enough to show it is false.</p>`),

  widget("identityCheck", { start: "py" }),

  section("📌 Watch out", watchOut([
    S`\(\sin^{-1}x\) is the inverse sine (an angle), but \(\csc x=\frac1{\sin x}\) is the reciprocal.`,
    S`\(\sin^2\theta\) means \((\sin\theta)^2\), not \(\sin(\theta^2)\).`,
    "Testing a few angles does not prove an identity, but one counter-example disproves one.",
    "Write LS and RS separately and work on one side at a time.",
  ])),

  examples([
    ["Reciprocal ratios from a triangle", "A right triangle has sides 9, 40, 41, with ∠A opposite 9. Find csc A, sec A and cot A.",
      [S`<b>Label from A.</b> Opposite \(=9\), adjacent \(=40\), hypotenuse \(=41\). Check: \(81+1600=1681=41^2\) ✓`,
        S`<b>Basic ratios.</b> \(\sin A=\frac9{41}\), \(\cos A=\frac{40}{41}\), \(\tan A=\frac9{40}\).`,
        S`<b>Reciprocals.</b> Each reciprocal ratio flips one basic ratio. ${tv(["basic", "\\(\\sin A\\)", "\\(\\cos A\\)", "\\(\\tan A\\)"], ["value", "\\(\\frac9{41}\\)", "\\(\\frac{40}{41}\\)", "\\(\\frac9{40}\\)"], ["reciprocal", "\\(\\csc A=\\frac{41}9\\)", "\\(\\sec A=\\frac{41}{40}\\)", "\\(\\cot A=\\frac{40}9\\)"])}`,
        S`<b>Check.</b> A ratio times its reciprocal is 1: \(\frac9{41}\cdot\frac{41}9=1\) ✓. Since the hypotenuse is the longest side, csc and sec must be greater than 1 ✓`],
      S`\(\frac{41}9\), \(\frac{41}{40}\), \(\frac{40}9\)`,
      plane({ view: { xmin: -2, xmax: 44, ymin: -2, ymax: 14 }, segs: [{ pts: [[0, 0], [40, 0], [40, 9], [0, 0]], color: "blue" }], points: [{ x: 0, y: 0, label: "A" }, { x: 20, y: 0, label: "40" }, { x: 40, y: 4.5, label: "9" }, { x: 20, y: 6, label: "41" }], step: { x: 5, y: 2 } })],
    ["Exact reciprocal values", S`Evaluate \(\csc30^\circ\), \(\sec45^\circ\) and \(\cot60^\circ\).`,
      [S`<b>Rule.</b> \(\csc\theta=\frac1{\sin\theta}\), \(\sec\theta=\frac1{\cos\theta}\), \(\cot\theta=\frac1{\tan\theta}\). A calculator has no csc key, so we find the basic ratio first.`,
        S`<b>First.</b> \(\sin30^\circ=\frac12\), so \(\csc30^\circ=\frac1{1/2}=2\).`,
        S`<b>Second.</b> \(\cos45^\circ=\frac1{\sqrt2}\), so \(\sec45^\circ=\frac1{1/\sqrt2}=\sqrt2\).`,
        S`<b>Third.</b> \(\tan60^\circ=\sqrt3\), so \(\cot60^\circ=\frac1{\sqrt3}\).`,
        S`<b>Check from the triangle.</b> In the figure, \(\csc30^\circ=\frac{\text{hyp}}{\text{opp}}=\frac21=2\) ✓ and \(\cot60^\circ=\frac{\text{adj}}{\text{opp}}=\frac1{\sqrt3}\) ✓`],
      S`\(2\), \(\sqrt2\), \(\frac1{\sqrt3}\)`,
      plane({ view: { xmin: -0.3, xmax: 2.3, ymin: -0.3, ymax: 1.4 }, segs: [{ pts: [[0, 0], [1.732, 0], [1.732, 1], [0, 0]], color: "blue" }], points: [{ x: 0, y: 0, label: "30°" }, { x: 1.732, y: 1, label: "60°" }, { x: 0.87, y: 0, label: "√3" }, { x: 1.732, y: 0.5, label: "1" }, { x: 0.8, y: 0.55, label: "2" }], step: { x: 0.5, y: 0.5 } })],
    ["All ratios from one", S`\(\sin\theta=\frac5{13}\) and θ is in Quadrant 2. Find the other five ratios.`,
      [S`<b>Read the given ratio.</b> \(\sin\theta=\frac yr\), so \(y=5\) and \(r=13\).`,
        S`<b>Find \(x\).</b> \(x^2+y^2=r^2\) gives \(x^2=169-25=144\), so \(x=\pm12\). In Quadrant 2, \(x<0\), so \(x=-12\).`,
        S`<b>Write all the ratios.</b> ${tv(["\\(\\cos\\theta=\\frac xr\\)", "\\(\\tan\\theta=\\frac yx\\)", "\\(\\csc\\theta=\\frac ry\\)", "\\(\\sec\\theta=\\frac rx\\)", "\\(\\cot\\theta=\\frac xy\\)"], ["\\(-\\frac{12}{13}\\)", "\\(-\\frac5{12}\\)", "\\(\\frac{13}5\\)", "\\(-\\frac{13}{12}\\)", "\\(-\\frac{12}5\\)"])}`,
        S`<b>Check the signs.</b> In Quadrant 2, only sine and cosecant are positive ✓`,
        S`<b>Check the identity.</b> \(\sin^2\theta+\cos^2\theta=\frac{25}{169}+\frac{144}{169}=1\) ✓`],
      S`\(\cos\theta=-\frac{12}{13}\), \(\tan\theta=-\frac5{12}\), \(\csc\theta=\frac{13}5\), \(\sec\theta=-\frac{13}{12}\), \(\cot\theta=-\frac{12}5\)`,
      plane({ view: { xmin: -14, xmax: 4, ymin: -2, ymax: 8 }, segs: [{ pts: [[0, 0], [-12, 5]], color: "violet" }, { pts: [[-12, 5], [-12, 0]], color: "amber" }], points: [{ x: -12, y: 5, label: "(−12, 5)", color: "amber" }, { x: -6, y: 2.9, label: "r = 13" }], step: { x: 2, y: 1 } })],
    ["A first proof", S`Prove \(\tan\theta\cos\theta=\sin\theta\).`,
      [S`<b>How to prove an identity.</b> Work on each side separately until they match. Do not move terms across the equal sign, because that assumes what we are proving.`,
        S`<b>Start with the more complicated side.</b> LS \(=\tan\theta\cos\theta\).`,
        S`<b>Use the quotient identity.</b> \(\tan\theta=\frac{\sin\theta}{\cos\theta}\), so LS \(=\frac{\sin\theta}{\cos\theta}\cdot\cos\theta\).`,
        S`<b>Cancel,</b> for \(\cos\theta\ne0\). LS \(=\sin\theta=\) RS.`,
        S`<b>Test a value.</b> At \(\theta=30^\circ\): \(\frac1{\sqrt3}\cdot\frac{\sqrt3}2=\frac12=\sin30^\circ\) ✓. The graph shows that the left side is the sine curve, with gaps where \(\tan\theta\) is not defined.`],
      "LS = RS ∎",
      plane({ view: { xmin: 0, xmax: 360, ymin: -1.5, ymax: 1.5 }, curves: [{ f: (x) => Math.sin((x * Math.PI) / 180), color: "violet" }], points: [{ x: 30, y: 0.5, label: "(30°, 1/2)", color: "amber" }, { x: 90, y: 1, label: "gap at 90°", color: "red" }, { x: 270, y: -1, label: "gap at 270°", color: "red" }], step: { x: 30, y: 0.5 }, xlabel: "θ" })],
    ["Using the Pythagorean identity", S`Prove \(\dfrac{1-\sin^2\theta}{\cos\theta}=\cos\theta\).`,
      [S`<b>Spot the pattern.</b> The numerator \(1-\sin^2\theta\) comes from the Pythagorean identity \(\sin^2\theta+\cos^2\theta=1\). Rearranged, this gives \(1-\sin^2\theta=\cos^2\theta\).`,
        S`<b>Substitute.</b> LS \(=\dfrac{\cos^2\theta}{\cos\theta}\).`,
        S`<b>Simplify,</b> for \(\cos\theta\ne0\). LS \(=\cos\theta=\) RS.`,
        S`<b>Test a value.</b> At \(\theta=60^\circ\): \(\frac{1-\frac34}{\frac12}=\frac{1/4}{1/2}=\frac12=\cos60^\circ\) ✓`],
      "LS = RS ∎",
      plane({ view: { xmin: 0, xmax: 360, ymin: -1.5, ymax: 1.5 }, curves: [{ f: (x) => Math.cos((x * Math.PI) / 180), color: "violet" }], points: [{ x: 60, y: 0.5, label: "(60°, 1/2)", color: "amber" }, { x: 90, y: 0, label: "gap at 90°", color: "red" }, { x: 270, y: 0, label: "gap at 270°", color: "red" }], step: { x: 30, y: 0.5 }, xlabel: "θ" })],
  ]),

  practice([
    q("exact", S`Evaluate \(\csc30^\circ\).`, num(2),
      "Reciprocal of sin 30°.", [S`\(\frac1{1/2}\).`], S`\(2\)`),
    q("exact", S`Evaluate \(\sec60^\circ\).`, num(2),
      "Reciprocal of cos 60°.", [S`\(\frac1{1/2}\).`], S`\(2\)`),
    q("Pythagorean", S`θ is acute and \(\sin\theta=0.6\). Find \(\cos\theta\).`, num(0.8),
      "sin² + cos² = 1.", [S`\(\cos^2\theta=1-0.36=0.64\).`], S`\(0.8\)`),
    q("quotient", S`Which equals \(\cot\theta\)?`, choice([S`\(\frac{\cos\theta}{\sin\theta}\)`, S`\(\frac{\sin\theta}{\cos\theta}\)`, S`\(\frac1{\sin\theta}\)`, S`\(\frac1{\cos\theta}\)`], 0),
      "1 / tan θ.", [S`\(\frac{1}{\sin\theta/\cos\theta}\).`], S`\(\frac{\cos\theta}{\sin\theta}\)`),
    q("simplify", S`Simplify \(\dfrac{\sin\theta}{\tan\theta}\).`, choice([S`\(\cos\theta\)`, S`\(\sin^2\theta\)`, S`\(\sec\theta\)`, S`\(1\)`], 0),
      "Replace tan θ by sin θ / cos θ.", [S`\(\sin\theta\cdot\frac{\cos\theta}{\sin\theta}\).`], S`\(\cos\theta\)`),
  ]),

  ...hard([
    ["Proving with two identities", S`Prove \((1+\tan^2\theta)\cos^2\theta=1\).`,
      [S`LS \(=\cos^2\theta+\tan^2\theta\cos^2\theta=\cos^2\theta+\frac{\sin^2\theta}{\cos^2\theta}\cos^2\theta\).`, S`\(=\cos^2\theta+\sin^2\theta=1=\) RS.`],
      "LS = RS ∎"],
    ["Expanding first", S`Prove \((\sin\theta+\cos\theta)^2=1+2\sin\theta\cos\theta\), then check it at \(\theta=30^\circ\).`,
      [S`LS \(=\sin^2\theta+2\sin\theta\cos\theta+\cos^2\theta=1+2\sin\theta\cos\theta=\) RS.`, S`Check: \(\left(\tfrac12+\tfrac{\sqrt3}2\right)^2=\tfrac{4+2\sqrt3}4=1+\tfrac{\sqrt3}2\); RS \(=1+2\cdot\tfrac12\cdot\tfrac{\sqrt3}2=1+\tfrac{\sqrt3}2\) ✓.`],
      "LS = RS ∎"],
  ], [
    q("hard", S`θ is acute and \(\tan\theta=2\). Find \(\sec^2\theta\).`, num(5),
      "Use 1 + tan² θ = sec² θ.", [S`\(1+4\).`], S`\(5\)`),
    q("hard", S`Simplify \(\dfrac{\sec\theta-\cos\theta}{\tan\theta}\).`, choice([S`\(\sin\theta\)`, S`\(\cos\theta\)`, S`\(\tan\theta\)`, S`\(1\)`], 0),
      "Write everything with sin and cos.", [S`\(\frac{\frac1{\cos\theta}-\cos\theta}{\frac{\sin\theta}{\cos\theta}}=\frac{1-\cos^2\theta}{\sin\theta}=\frac{\sin^2\theta}{\sin\theta}\).`], S`\(\sin\theta\)`),
    q("hard", S`\(\cos\theta=-0.8\) and θ is in Quadrant 3. Find \(\csc\theta\) (4 decimals).`, num(-1 / 0.6, 0.0001),
      "sin θ = −0.6 in Quadrant 3.", [S`\(\csc\theta=\frac1{-0.6}\).`], S`\(\approx-1.6667\)`),
  ]),

  wrapUp({
    qas: [
      ["Why learn reciprocal ratios?", "They simplify many formulas and appear in later courses (calculus, physics)."],
      ["Where does sin² θ + cos² θ = 1 come from?", "On the unit circle, x = cos θ and y = sin θ satisfy x² + y² = 1 (Pythagoras)."],
      ["How do I start a proof?", "Pick the more complicated side and rewrite everything in sin and cos."],
      ["Is checking with a calculator a proof?", "No — it is evidence. A proof works for every angle."],
      ["How can I show an equation is NOT an identity?", "Find one angle where the two sides differ."],
    ],
    summary: [
      "csc = 1/sin, sec = 1/cos, cot = 1/tan.",
      "tan = sin/cos; sin² + cos² = 1.",
      "One ratio + quadrant → all six ratios.",
      "Prove by transforming one side; disprove with one counter-example.",
    ],
    next: "5.4 solves oblique triangles with the sine law.",
  }),
];
