// MHF4U 4.3 — Equivalent Trigonometric Expressions (NEW): cofunction, supplementary, opposite and half-turn relations
// from the symmetry of the unit circle
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { UC, TG } from "./trigfig.mjs";

export const TITLE = "4.3 Equivalent Trigonometric Expressions";
export const ID = "6d4f0004-0001-4001-8001-000000000403";

const S = String.raw;
const T = (d, l, more) => plane(UC(d, l, more));
export const blocks = () => [
  intro({
    icon: "🪞",
    title: "Equivalent Trigonometric Expressions",
    overview: S`The sine curve and the cosine curve are the same wave shifted by \(\frac\pi2\), and the unit circle is symmetric across both axes and the line \(y=x\). These facts mean one angle can be written in many ways: \(\sin\left(\frac\pi2-x\right)\) is just \(\cos x\), and \(\cos(\pi+x)\) is just \(-\cos x\). These relations let you simplify expressions and evaluate ratios without a calculator.`,
    goals: [
      "use the cofunction relations with \\(\\frac\\pi2-x\\);",
      "use the relations for \\(\\pi-x\\), \\(\\pi+x\\), \\(2\\pi-x\\) and \\(-x\\);",
      "explain each relation using a unit circle or a graph;",
      "evaluate a ratio from a known value;",
      "simplify combined expressions.",
    ],
    curriculum: "B3.1 (recognize equivalent trigonometric expressions using the unit circle and graphs)",
    prior: [
      [S`\(\sin\frac\pi6\) and \(\cos\frac\pi3\)?`, S`Both \(\frac12\).`],
      [S`Sign of \(\cos x\) in Q2?`, S`Negative.`],
      [S`Reflect \((a,b)\) in the x-axis.`, S`\((a,-b)\).`],
    ],
    words: [
      ["Equivalent expressions", "equal for every value of the variable", "\\(\\sin(-x)=-\\sin x\\)"],
      ["Cofunction", "sine/cosine, tangent/cotangent, secant/cosecant", "\\(\\sin\\left(\\frac\\pi2-x\\right)=\\cos x\\)"],
      ["Even function", "\\(f(-x)=f(x)\\)", "cosine"],
      ["Odd function", "\\(f(-x)=-f(x)\\)", "sine, tangent"],
    ],
  }),

  section("📌 The relations", S`
  ${table(["Angle", "sin", "cos", "tan", "Circle move"], [
    ["−x", "−sin x", "cos x", "−tan x", "reflect in the x-axis"],
    ["π − x", "sin x", "−cos x", "−tan x", "reflect in the y-axis"],
    ["π + x", "−sin x", "−cos x", "tan x", "half-turn"],
    ["2π − x", "−sin x", "cos x", "−tan x", "reflect in the x-axis"],
    ["π/2 − x", "cos x", "sin x", "cot x", "reflect in y = x"],
    ["π/2 + x", "cos x", "−sin x", "−cot x", "quarter-turn"],
  ])}
  ${plane(TG([[Math.sin, "violet"], [Math.cos, "green"]], { xmin: -6.5, xmax: 6.5, ymin: -2, ymax: 2 }), "cos x (green) is sin x (violet) shifted π/2 left.")}
  ${keyIdea(S`You do not have to memorize the table. Picture \(x\) as a small angle in Q1, find where the new angle lands, read off the sign from CAST, and decide whether the name changes: it changes only with \(\frac\pi2\) or \(\frac{3\pi}2\).`)}`),

  section("📌 Explore", S`<p>Set the angle to \(30^\circ\) and note the coordinates. Move to \(150^\circ\), \(210^\circ\) and \(330^\circ\): the same two numbers appear with different signs. Now compare \(30^\circ\) and \(60^\circ\): the coordinates swap, which is the cofunction relation.</p>`),

  widget("ibUnitCircle", { init: 150 }),

  section("📌 Testing a relation", S`
  <p>To check a claimed relation, substitute one angle: \(\cos\left(\frac{3\pi}2-x\right)=-\sin x\) with \(x=\frac\pi6\) gives \(\cos\frac{4\pi}3=-\frac12\) and \(-\sin\frac\pi6=-\frac12\). One value can disprove a relation, but only the circle or a proof can establish it.</p>
  ${watchOut([
    "π − x keeps sine, not cosine: sin(π − x) = sin x but cos(π − x) = −cos x.",
    "Only π/2 and 3π/2 swap the name. π and 2π keep it.",
    "cos(−x) = cos x: cosine ignores the sign of the angle.",
    "sin(x + π) is not sin x + sin π in general; the sine does not distribute.",
    "The relations hold for every x, not just acute angles.",
  ])}`),

  examples([
    ["Using a cofunction", S`Given \(\sin\dfrac\pi5\approx0.5878\), find \(\cos\dfrac{3\pi}{10}\) without a calculator.`,
      [S`<b>Look for the relation.</b> The angles might be complementary, so add them: \(\frac\pi5+\frac{3\pi}{10}=\frac{2\pi+3\pi}{10}=\frac\pi2\). They are.`,
        S`<b>Rewrite.</b> So \(\frac{3\pi}{10}=\frac\pi2-\frac\pi5\).`,
        S`<b>Apply.</b> \(\cos\left(\frac\pi2-x\right)=\sin x\), so \(\cos\frac{3\pi}{10}=\sin\frac\pi5\).`,
        S`<b>Check.</b> In degrees, \(\cos54^\circ\approx0.5878\) ✓`],
      S`\(\approx0.5878\)`,
      T(54, "3π/10")],
    ["Simplifying a sum", S`Simplify \(\cos(\pi-x)+\sin\left(\dfrac\pi2-x\right)\).`,
      [S`<b>First term.</b> Reflecting across the y-axis changes the sign of the x-coordinate: \(\cos(\pi-x)=-\cos x\).`,
        S`<b>Second term.</b> Complementary angles swap the name: \(\sin\left(\frac\pi2-x\right)=\cos x\).`,
        S`<b>Add.</b> \(-\cos x+\cos x=0\).`,
        S`<b>Check.</b> \(x=0\): \(\cos\pi+\sin\frac\pi2=-1+1=0\) ✓`],
      S`\(0\)`,
      plane(TG([[(x) => Math.cos(Math.PI - x), "violet"], [(x) => Math.sin(Math.PI / 2 - x), "green"]], { xmin: -6.5, xmax: 6.5, ymin: -2, ymax: 2 }))],
    ["A special value as 2π − x", S`Write \(\sin\dfrac{11\pi}6\) using \(2\pi-x\) and evaluate it.`,
      [S`<b>Rewrite.</b> \(2\pi=\frac{12\pi}6\), so \(\frac{11\pi}6=2\pi-\frac\pi6\).`,
        S`<b>Apply.</b> \(2\pi-x\) reflects \(x\) across the x-axis, so \(\sin(2\pi-x)=-\sin x\).`,
        S`<b>Evaluate.</b> \(-\sin\frac\pi6=-\frac12\).`,
        S`<b>Check.</b> The angle is in Q4, where sine is negative ✓`],
      S`\(-\dfrac12\)`,
      T(330, "11π/6")],
    ["A product", S`Show that \(\tan\left(\dfrac\pi2-x\right)\tan x=1\) where both are defined.`,
      [S`<b>First factor.</b> Complementary angles swap the name: \(\tan\left(\frac\pi2-x\right)=\cot x\).`,
        S`<b>Reciprocal.</b> \(\cot x=\dfrac1{\tan x}\).`,
        S`<b>Multiply.</b> \(\dfrac1{\tan x}\cdot\tan x=1\).`,
        S`<b>Check.</b> \(x=\frac\pi6\): \(\tan\frac\pi3\tan\frac\pi6=\sqrt3\cdot\frac1{\sqrt3}=1\) ✓`],
      S`the product is \(1\)`,
      plane(TG([[(x) => Math.tan(Math.PI / 2 - x) * Math.tan(x), "violet"]], { xmin: -3, xmax: 3, ymin: -1, ymax: 3 }))],
    ["A new relation", S`Find an equivalent expression for \(\cos\left(\dfrac{3\pi}2-x\right)\) from the circle, and test it.`,
      [S`<b>Sign.</b> Take \(x\) small in Q1. Then \(\frac{3\pi}2-x\) is in Q3, where cosine is negative.`,
        S`<b>Name.</b> An odd multiple of \(\frac\pi2\) swaps sine and cosine, so the result uses \(\sin x\).`,
        S`<b>Relation.</b> Together, these give \(-\sin x\).`,
        S`<b>Test.</b> \(x=\frac\pi6\): \(\cos\frac{4\pi}3=-\frac12\) and \(-\sin\frac\pi6=-\frac12\) ✓`],
      S`\(-\sin x\)`,
      T(240, "4π/3")],
  ]),

  practice([
    q("cofunction", S`Given \(\cos\dfrac\pi8\approx0.9239\), find \(\sin\dfrac{3\pi}8\) (4 decimals).`, num(0.9239, 0.0001),
      "π/2 − π/8.", [S`\(\frac\pi2-\frac\pi8=\frac{3\pi}8\), so the values match.`], S`\(0.9239\)`),
    q("relation", S`Which expression equals \(\sin(\pi+x)\)?`, choice([S`\(-\sin x\)`, S`\(\sin x\)`, S`\(\cos x\)`, S`\(-\cos x\)`], 0),
      "Half-turn: both coordinates change sign.", [S`\(-\sin x\).`], S`\(-\sin x\)`),
    q("relation", S`Which expression equals \(\cos(-x)\)?`, choice([S`\(\cos x\)`, S`\(-\cos x\)`, S`\(\sin x\)`, S`\(-\sin x\)`], 0),
      "Cosine is even.", [S`\(\cos x\).`], S`\(\cos x\)`),
    q("value", S`If \(\sin x=0.6\), find \(\sin(\pi-x)\).`, num(0.6),
      "π − x keeps sine.", [S`\(\sin(\pi-x)=\sin x\).`], S`\(0.6\)`),
    q("value", S`If \(\tan x=2.5\), find \(\cot\left(\dfrac\pi2-x\right)\).`, num(2.5),
      "The cofunction of cot is tan.", [S`\(\cot\left(\frac\pi2-x\right)=\tan x\).`], S`\(2.5\)`),
  ]),

  ...hard([
    ["Four relations at once", S`Simplify \(\sin(\pi-x)\cos\left(\dfrac\pi2-x\right)-\cos(\pi+x)\cos(-x)\).`,
      [S`\(\sin(\pi-x)=\sin x\) and \(\cos\left(\frac\pi2-x\right)=\sin x\): the first product is \(\sin^2x\).`, S`\(\cos(\pi+x)=-\cos x\) and \(\cos(-x)=\cos x\): the second product is \(-\cos^2x\).`, S`\(\sin^2x-(-\cos^2x)=\sin^2x+\cos^2x=1\).`],
      S`\(1\)`],
    ["In terms of a", S`\(\sin x=a\), where \(0\lt x\lt\dfrac\pi2\). Express \(\cos\left(\dfrac\pi2+x\right)\) and \(\cos(\pi-x)\) in terms of \(a\).`,
      [S`\(\cos\left(\frac\pi2+x\right)=-\sin x=-a\).`, S`\(\cos x=\sqrt{1-a^2}\) since \(x\) is in Q1, so \(\cos(\pi-x)=-\cos x=-\sqrt{1-a^2}\).`],
      S`\(-a\) and \(-\sqrt{1-a^2}\)`,
      T(40, "(cos x, a)")],
  ], [
    q("hard", S`If \(\cos x=0.28\), find \(\sin\left(\dfrac\pi2-x\right)\).`, num(0.28),
      "Cofunction.", [S`\(\sin\left(\frac\pi2-x\right)=\cos x\).`], S`\(0.28\)`),
    q("hard", S`If \(\cos x=0.6\), find \(\cos(\pi+x)+\cos(2\pi-x)\).`, num(0),
      "Apply each relation.", [S`\(-0.6+0.6=0\).`], S`\(0\)`),
    q("hard", S`If \(\sin x=0.25\), find \(\sec\left(\dfrac\pi2-x\right)\).`, num(4),
      "sec is 1/cos.", [S`\(\cos\left(\frac\pi2-x\right)=\sin x=0.25\), so the secant is 4.`], S`\(4\)`),
  ]),

  wrapUp({
    qas: [
      ["Why is it called a cofunction?", "Cosine is the sine of the complementary angle: 'co' stands for complement."],
      ["Why is cosine even but sine odd?", "Reflecting in the x-axis changes the angle's sign. The x-coordinate stays and the y-coordinate flips."],
      ["How do I remember whether the name changes?", "Vertical-axis angles (π/2, 3π/2) swap the name. Horizontal-axis angles (π, 2π) keep it."],
      ["How do I find the sign?", "Pretend x is a small angle in Q1 and use CAST on the new angle."],
      ["Are these the same as identities?", "Yes: each is true for all x where both sides are defined."],
    ],
    summary: [
      "sin(π/2 − x) = cos x; cos(π/2 − x) = sin x; tan(π/2 − x) = cot x.",
      "sin(π − x) = sin x; cos(π − x) = −cos x.",
      "sin(π + x) = −sin x; cos(π + x) = −cos x.",
      "sin(−x) = −sin x; cos(−x) = cos x.",
    ],
    next: "4.4 develops formulas for the sine and cosine of a sum or difference of any two angles.",
  }),
];
