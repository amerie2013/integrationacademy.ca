// MHF4U 4.2 — Trigonometric Ratios and Special Angles: exact values at special angles in radians, the CAST rule,
// reciprocal ratios, and ratios from a point on the terminal arm
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { UC, ARM } from "./trigfig.mjs";
import { tv } from "../mcr3u-extables.mjs";

export const TITLE = "4.2 Trigonometric Ratios and Special Angles";
export const ID = "1aae247b-f10a-4743-8e73-82121fd9dfc9";

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "⭕",
    title: "Trigonometric Ratios and Special Angles",
    overview: S`A point on the unit circle at angle \(\theta\) has coordinates \((\cos\theta,\sin\theta)\). Two special triangles give exact values at \(\frac\pi6\), \(\frac\pi4\) and \(\frac\pi3\), and the symmetry of the circle carries those values to every quadrant. The reciprocal ratios \(\csc\), \(\sec\) and \(\cot\) follow by flipping the fractions.`,
    goals: [
      "state exact values of sin, cos and tan at special angles in radians;",
      "use a reference angle and the CAST rule in any quadrant;",
      "evaluate the reciprocal ratios csc, sec and cot;",
      "find all six ratios from a point on the terminal arm;",
      "evaluate expressions exactly, without a calculator.",
    ],
    curriculum: "B1.3 (exact values for special angles), B1.4 (determine reciprocal ratios and solve problems)",
    prior: [
      [S`\(\frac{5\pi}4\) in degrees?`, S`\(225^\circ\).`],
      [S`Hypotenuse of a right triangle with legs 1 and 1?`, S`\(\sqrt2\).`],
      [S`Which quadrant is \(\frac{2\pi}3\) in?`, S`Quadrant 2.`],
    ],
    words: [
      ["Reference angle", "the acute angle between the terminal arm and the x-axis", "of \\(\\frac{5\\pi}6\\) is \\(\\frac\\pi6\\)"],
      ["CAST rule", "which ratios are positive in each quadrant", "All, Sin, Tan, Cos"],
      ["Reciprocal ratios", "\\(\\csc=\\frac1\\sin,\\ \\sec=\\frac1\\cos,\\ \\cot=\\frac1\\tan\\)", ""],
      ["Terminal arm", "the rotating side of an angle in standard position", ""],
    ],
  }),

  section("📌 The special values", S`
  ${table(["θ", "0", "π/6", "π/4", "π/3", "π/2"], [
    ["sin θ", "0", "1/2", "√2/2", "√3/2", "1"],
    ["cos θ", "1", "√3/2", "√2/2", "1/2", "0"],
    ["tan θ", "0", "√3/3", "1", "√3", "not defined"],
  ])}
  ${plane(UC(60, "(1/2, √3/2)"), "At θ = π/3 the point on the unit circle is (1/2, √3/2).")}
  ${keyIdea(S`To find a ratio of any angle: (1) find the quadrant; (2) find the reference angle; (3) write the special value; (4) attach the sign from CAST. In Q1 all ratios are positive, in Q2 sine, in Q3 tangent and in Q4 cosine.`)}`),

  section("📌 Explore", S`<p>Drag the angle around the circle. Watch \(\cos\theta\) (the x-coordinate) and \(\sin\theta\) (the y-coordinate) change sign. Stop at \(150^\circ\), \(210^\circ\) and \(330^\circ\): each has the reference angle \(30^\circ\).</p>`),

  widget("ibUnitCircle", { init: 225 }),

  section("📌 Points on the terminal arm", S`
  <p>If \((x,y)\) is on the terminal arm and \(r=\sqrt{x^2+y^2}\), then \(\sin\theta=\frac yr\), \(\cos\theta=\frac xr\), \(\tan\theta=\frac yx\). The reciprocals flip each fraction: \(\csc\theta=\frac ry\), \(\sec\theta=\frac rx\), \(\cot\theta=\frac xy\).</p>
  ${watchOut([
    "csc is the reciprocal of sin, not of cos. The 'co' pairing is a trap.",
    "sec(π/2) and tan(π/2) are not defined because cos(π/2) = 0.",
    "sin⁻¹x is an inverse, not the reciprocal: csc x = 1/sin x.",
    "r is always positive. Only x and y carry signs.",
    "For calculators: cot x = 1/tan x. There is usually no cot key.",
  ])}`),

  examples([
    ["A Quadrant 2 angle", S`Find the exact value of \(\cos\dfrac{5\pi}6\).`,
      [S`<b>Locate.</b> \(\frac\pi2\lt\frac{5\pi}6\lt\pi\), so the angle is in Q2.`,
        S`<b>Reference angle.</b> \(\pi-\frac{5\pi}6=\frac\pi6\).`,
        S`<b>Size.</b> \(\cos\frac\pi6=\frac{\sqrt3}2\).`,
        S`<b>Sign.</b> In Q2 the x-coordinate is negative, so cosine is negative.`,
        S`<b>Check.</b> The point on the circle is \(\left(-\frac{\sqrt3}2,\frac12\right)\), and its x-coordinate is the answer ✓`],
      S`\(-\dfrac{\sqrt3}2\)`,
      plane(UC(150, "(−√3/2, 1/2)"))],
    ["A Quadrant 3 angle", S`Find the exact value of \(\tan\dfrac{5\pi}4\).`,
      [S`<b>Locate.</b> \(\frac{5\pi}4=\pi+\frac\pi4\), so the angle is in Q3 with reference angle \(\frac\pi4\).`,
        S`<b>Size.</b> \(\tan\frac\pi4=1\).`,
        S`<b>Sign.</b> In Q3, both coordinates are negative, so \(\tan=\frac yx\) is positive.`,
        S`<b>Check.</b> The point is \(\left(-\frac{\sqrt2}2,-\frac{\sqrt2}2\right)\), and its ratio \(\frac yx=1\) ✓`],
      S`\(1\)`,
      plane(UC(225, "(−√2/2, −√2/2)"))],
    ["A reciprocal ratio", S`Find the exact value of \(\csc\dfrac{11\pi}6\).`,
      [S`<b>Rewrite.</b> Cosecant is the reciprocal of sine, so find \(\sin\frac{11\pi}6\) first.`,
        S`<b>Locate.</b> \(\frac{11\pi}6=2\pi-\frac\pi6\), so it is in Q4 with reference angle \(\frac\pi6\).`,
        S`<b>Sine.</b> \(\sin\frac\pi6=\frac12\), and sine is negative in Q4: \(\sin\frac{11\pi}6=-\frac12\).`,
        S`<b>Reciprocal.</b> \(\dfrac1{-1/2}=-2\).`,
        S`<b>Check.</b> \(\left(-\frac12\right)(-2)=1\) ✓`],
      S`\(-2\)`,
      plane(UC(330, "(√3/2, −1/2)"))],
    ["An exact expression", S`Evaluate \(\sin^2\dfrac\pi3+\cos\pi\).`,
      [S`<b>First term.</b> \(\sin\frac\pi3=\frac{\sqrt3}2\). The notation \(\sin^2\) means the square of the sine: \(\left(\frac{\sqrt3}2\right)^2=\frac34\).`,
        S`<b>Second term.</b> The angle \(\pi\) is at the point \((-1,0)\), so \(\cos\pi=-1\).`,
        S`<b>Add.</b> \(\frac34+(-1)=-\frac14\).`,
        S`<b>Check.</b> Decimals: \(0.866^2-1\approx-0.25\) ✓`],
      S`\(-\dfrac14\)`,
      plane(UC(60, "π/3"))],
    ["A point on the terminal arm", S`The terminal arm of \(\theta\) passes through \((-3,4)\). Find all six ratios and \(\theta\) in radians.`,
      [S`<b>Radius.</b> \(r=\sqrt{(-3)^2+4^2}=\sqrt{25}=5\).`,
        S`<b>Ratios.</b> ${tv(["\\(\\sin\\theta=\\frac yr\\)", "\\(\\cos\\theta=\\frac xr\\)", "\\(\\tan\\theta=\\frac yx\\)"], ["\\(\\frac45\\)", "\\(-\\frac35\\)", "\\(-\\frac43\\)"], ["\\(\\csc\\theta=\\frac ry\\)", "\\(\\sec\\theta=\\frac rx\\)", "\\(\\cot\\theta=\\frac xy\\)"], ["\\(\\frac54\\)", "\\(-\\frac53\\)", "\\(-\\frac34\\)"])}`,
        S`<b>Angle.</b> The point is in Q2. The reference angle is \(\tan^{-1}\frac43\approx0.93\), so \(\theta\approx\pi-0.93\approx2.21\).`,
        S`<b>Check.</b> \(\sin^2\theta+\cos^2\theta=\frac{16}{25}+\frac9{25}=1\) ✓`],
      S`\(\sin\theta=\frac45\), \(\cos\theta=-\frac35\), \(\tan\theta=-\frac43\), \(\theta\approx2.21\)`,
      plane(ARM(-3, 4, "(−3, 4)"))],
  ]),

  practice([
    q("special angle", S`Find \(\sin\dfrac{3\pi}4\) as a decimal (4 decimals).`, num(0.7071, 0.001),
      "Q2, reference π/4.", [S`\(\frac{\sqrt2}2\approx0.7071\).`], S`\(0.7071\)`),
    q("special angle", S`Find \(\cos\dfrac{4\pi}3\).`, num(-0.5),
      "Q3, reference π/3.", [S`\(-\frac12\).`], S`\(-0.5\)`),
    q("special angle", S`Find \(\tan\dfrac{7\pi}4\).`, num(-1),
      "Q4, reference π/4.", [S`\(-1\).`], S`\(-1\)`),
    q("reciprocal", S`Find \(\sec\dfrac{2\pi}3\).`, num(-2),
      "Flip cos.", [S`\(\cos\frac{2\pi}3=-\frac12\).`], S`\(-2\)`),
    q("reciprocal", S`What is \(\cot\dfrac\pi6\)?`, choice([S`\(\sqrt3\)`, S`\(\dfrac{\sqrt3}3\)`, S`\(\dfrac12\)`, S`\(2\)`], 0),
      "Flip tan.", [S`\(\tan\frac\pi6=\frac{\sqrt3}3\), so \(\cot\frac\pi6=\sqrt3\).`], S`\(\sqrt3\)`),
  ]),

  ...hard([
    ["From one ratio to all", S`\(\cos\theta=-\dfrac5{13}\), and \(\pi\lt\theta\lt\dfrac{3\pi}2\). Find \(\sin\theta\), \(\tan\theta\) and \(\csc\theta\) exactly.`,
      [S`Q3: take \(x=-5\), \(r=13\). Then \(y^2=169-25=144\), and \(y=-12\) in Q3.`, S`\(\sin\theta=-\frac{12}{13}\), \(\tan\theta=\frac{12}5\), \(\csc\theta=-\frac{13}{12}\).`],
      S`\(\sin\theta=-\frac{12}{13},\ \tan\theta=\frac{12}5,\ \csc\theta=-\frac{13}{12}\)`,
      plane(ARM(-5, -12, "(−5, −12)"))],
    ["All solutions on an interval", S`Find all \(\theta\) in \([0,2\pi]\) with \(\sec\theta=-\sqrt2\).`,
      [S`\(\cos\theta=-\frac1{\sqrt2}=-\frac{\sqrt2}2\): reference angle \(\frac\pi4\).`, S`Cosine is negative in Q2 and Q3: \(\pi-\frac\pi4\) and \(\pi+\frac\pi4\).`],
      S`\(\theta=\dfrac{3\pi}4,\ \dfrac{5\pi}4\)`,
      plane(UC(135, "3π/4", [{ x: -Math.SQRT1_2, y: -Math.SQRT1_2, label: "5π/4", color: "red" }]))],
  ], [
    q("hard", S`Evaluate \(2\sin\dfrac\pi4\cos\dfrac\pi4\).`, num(1),
      "Multiply the exact values.", [S`\(2\cdot\frac{\sqrt2}2\cdot\frac{\sqrt2}2=1\).`], S`\(1\)`),
    q("hard", S`Evaluate \(\sin^2\dfrac{5\pi}6+\cos^2\dfrac{5\pi}6\).`, num(1),
      "Compute each square.", [S`\(\frac14+\frac34=1\).`], S`\(1\)`),
    q("hard", S`Evaluate \(\tan\dfrac\pi3\cot\dfrac\pi6\).`, num(3),
      "Both are √3.", [S`\(\sqrt3\cdot\sqrt3=3\).`], S`\(3\)`),
  ]),

  wrapUp({
    qas: [
      ["Why do special values come from triangles?", "Half a square gives π/4 and half an equilateral triangle gives π/6 and π/3, and both side ratios are exact."],
      ["Why is cos the x-coordinate?", "On the unit circle r = 1, so cos θ = x/r = x, and sin θ = y."],
      ["When is a reciprocal ratio not defined?", "When the original ratio is 0: csc 0 and cot 0, for example."],
      ["Why memorize only one quadrant?", "Reference angles carry the values to the other quadrants; only the sign changes."],
      ["Is sin²θ the same as sin θ²?", "No. sin²θ means (sin θ)², while sin θ² means the sine of θ²."],
    ],
    summary: [
      "Point on the unit circle: (cos θ, sin θ).",
      "Quadrant, reference angle, special value, CAST sign.",
      "csc = 1/sin, sec = 1/cos, cot = 1/tan.",
      "From (x, y): r = √(x² + y²); sin = y/r, cos = x/r, tan = y/x.",
    ],
    next: "4.3 uses the symmetry of the circle to write equivalent trigonometric expressions.",
  }),
];
