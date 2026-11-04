// MHF4U 4.4 — Compound Angle Formulas: sum and difference formulas for sine, cosine and tangent; exact values;
// simplifying; using given ratios in known quadrants
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { UC, ARM, TG } from "./trigfig.mjs";

export const TITLE = "4.4 Compound Angle Formulas";
export const ID = "3a974f23-b5d5-486d-b62b-ea1ef205bc87";

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "➕",
    title: "Compound Angle Formulas",
    overview: S`A common error is to write \(\sin(a+b)=\sin a+\sin b\). It is false: \(\sin\left(\frac\pi6+\frac\pi3\right)=\sin\frac\pi2=1\), but \(\sin\frac\pi6+\sin\frac\pi3\approx1.37\). The correct formulas mix sine and cosine. They produce exact values at new angles, such as \(\frac\pi{12}\), by writing those angles as a sum or difference of special angles.`,
    goals: [
      "state the sum and difference formulas for sin, cos and tan;",
      "find exact values at angles such as \\(\\frac\\pi{12}\\) and \\(\\frac{7\\pi}{12}\\);",
      "recognize a formula in an expanded expression and condense it;",
      "use given ratios in known quadrants;",
      "use the formulas to derive new relations.",
    ],
    curriculum: "B3.2 (explore the compound angle formulas and determine exact values)",
    prior: [
      [S`\(\sin\frac\pi4\cos\frac\pi6\)?`, S`\(\frac{\sqrt6}4\).`],
      [S`\(\frac\pi3-\frac\pi4\)?`, S`\(\frac\pi{12}\).`],
      [S`\(\sin x=\frac35\), \(x\) in Q1: \(\cos x\)?`, S`\(\frac45\).`],
    ],
    words: [
      ["Compound angle", "an angle written as a sum or difference", "\\(a+b\\)"],
      ["Exact value", "written with roots and fractions, not decimals", "\\(\\frac{\\sqrt6+\\sqrt2}4\\)"],
      ["Rationalize", "clear a root from a denominator", ""],
    ],
  }),

  section("📌 The formulas", S`
  ${table(["Formula", "Pattern"], [
    ["sin(a + b) = sin a cos b + cos a sin b", "mixed terms, same sign"],
    ["sin(a − b) = sin a cos b − cos a sin b", "mixed terms, same sign"],
    ["cos(a + b) = cos a cos b − sin a sin b", "matching terms, opposite sign"],
    ["cos(a − b) = cos a cos b + sin a sin b", "matching terms, opposite sign"],
    ["tan(a + b) = (tan a + tan b)/(1 − tan a tan b)", ""],
    ["tan(a − b) = (tan a − tan b)/(1 + tan a tan b)", ""],
  ])}
  ${plane(UC(15, "π/12 = π/3 − π/4"), "π/12 is not a special angle, but it is the difference of two.")}
  ${keyIdea(S`The difference formula for cosine comes from the distance between two points on the unit circle. The others follow from it: replace \(b\) with \(-b\) for the sum, and use \(\sin x=\cos\left(\frac\pi2-x\right)\) for sine.`)}`),

  section("📌 Explore", S`<p>Move to \(15^\circ\) and \(75^\circ\). Note the coordinates, and compare with the exact values from the examples below: \(\frac{\sqrt6+\sqrt2}4\approx0.9659\) and \(\frac{\sqrt6-\sqrt2}4\approx0.2588\).</p>`),

  widget("ibUnitCircle", { init: 15 }),

  section("📌 Reading a formula backwards", S`
  <p>An expression like \(\sin x\cos2x+\cos x\sin2x\) is an expanded sine formula: it equals \(\sin(x+2x)=\sin3x\). Look for mixed terms for sine and matching terms for cosine.</p>
  ${plane(TG([[(x) => Math.sin(3 * x), "violet"]], { xmin: -3.5, xmax: 3.5, ymin: -2, ymax: 2 }), "sin x cos 2x + cos x sin 2x draws the same curve as sin 3x.")}
  ${watchOut([
    "Sine does not distribute: sin(a + b) ≠ sin a + sin b.",
    "The cosine formula flips the sign: cos(a + b) has a minus.",
    "Find the missing ratios with the right sign for each quadrant before you substitute.",
    "Choose the special-angle pair that reproduces the angle: 7π/12 = π/3 + π/4.",
    "Simplify at the end: √2/2 · √3/2 = √6/4.",
  ])}`),

  examples([
    ["A difference", S`Find the exact value of \(\cos\dfrac\pi{12}\).`,
      [S`\(\frac\pi{12}=\frac\pi3-\frac\pi4\).`, S`\(\cos\frac\pi3\cos\frac\pi4+\sin\frac\pi3\sin\frac\pi4=\frac12\cdot\frac{\sqrt2}2+\frac{\sqrt3}2\cdot\frac{\sqrt2}2\).`, S`\(=\frac{\sqrt2+\sqrt6}4\).`],
      S`\(\dfrac{\sqrt6+\sqrt2}4\)`,
      plane(UC(15, "π/12"))],
    ["A sum", S`Find the exact value of \(\sin\dfrac{7\pi}{12}\).`,
      [S`\(\frac{7\pi}{12}=\frac\pi3+\frac\pi4\).`, S`\(\sin\frac\pi3\cos\frac\pi4+\cos\frac\pi3\sin\frac\pi4=\frac{\sqrt3}2\cdot\frac{\sqrt2}2+\frac12\cdot\frac{\sqrt2}2\).`, S`\(=\frac{\sqrt6+\sqrt2}4\).`],
      S`\(\dfrac{\sqrt6+\sqrt2}4\)`,
      plane(UC(105, "7π/12"))],
    ["Tangent", S`Find the exact value of \(\tan\dfrac\pi{12}\).`,
      [S`\(\tan\left(\frac\pi3-\frac\pi4\right)=\dfrac{\sqrt3-1}{1+\sqrt3}\).`, S`Multiply by \(\frac{\sqrt3-1}{\sqrt3-1}\): \(\dfrac{(\sqrt3-1)^2}{3-1}=\dfrac{4-2\sqrt3}2\).`],
      S`\(2-\sqrt3\)`],
    ["Condensing", S`Write \(\cos\dfrac{2\pi}9\cos\dfrac\pi9-\sin\dfrac{2\pi}9\sin\dfrac\pi9\) as one ratio, and evaluate it.`,
      [S`Matching terms with a minus: \(\cos(a+b)\).`, S`\(\cos\left(\frac{2\pi}9+\frac\pi9\right)=\cos\frac\pi3\).`],
      S`\(\cos\dfrac\pi3=\dfrac12\)`],
    ["Given ratios", S`\(\sin a=\dfrac35\) with \(a\) in Q1, and \(\cos b=-\dfrac5{13}\) with \(b\) in Q2. Find \(\sin(a+b)\).`,
      [S`\(\cos a=\frac45\) (Q1). \(\sin b=\frac{12}{13}\) (Q2).`, S`\(\sin a\cos b+\cos a\sin b=\frac35\left(-\frac5{13}\right)+\frac45\cdot\frac{12}{13}\).`, S`\(=\frac{-15+48}{65}\).`],
      S`\(\dfrac{33}{65}\)`,
      plane(ARM(-5, 12, "b: (−5, 12)"))],
  ]),

  practice([
    q("exact value", S`Find \(\sin\dfrac\pi{12}\) (4 decimals, using exact value \(\frac{\sqrt6-\sqrt2}4\)).`, num(0.2588, 0.001),
      "π/3 − π/4.", [S`\(\frac{\sqrt6-\sqrt2}4\approx0.2588\).`], S`\(0.2588\)`),
    q("exact value", S`Evaluate \(\cos\dfrac{5\pi}{12}\) (4 decimals).`, num(0.2588, 0.001),
      "π/4 + π/6.", [S`\(\frac{\sqrt2}2\cdot\frac{\sqrt3}2-\frac{\sqrt2}2\cdot\frac12=\frac{\sqrt6-\sqrt2}4\).`], S`\(0.2588\)`),
    q("condense", S`Which ratio equals \(\sin3x\cos x-\cos3x\sin x\)?`, choice([S`\(\sin2x\)`, S`\(\sin4x\)`, S`\(\cos2x\)`, S`\(\cos4x\)`], 0),
      "Mixed terms with a minus.", [S`\(\sin(3x-x)\).`], S`\(\sin2x\)`),
    q("condense", S`Evaluate \(\sin\dfrac{\pi}{5}\cos\dfrac{3\pi}{10}+\cos\dfrac\pi5\sin\dfrac{3\pi}{10}\).`, num(1),
      "Mixed terms with a plus.", [S`\(\sin\left(\frac\pi5+\frac{3\pi}{10}\right)=\sin\frac\pi2\).`], S`\(1\)`),
    q("given ratios", S`\(\tan a=2\) and \(\tan b=3\). Find \(\tan(a+b)\).`, num(-1),
      "Use the tangent formula.", [S`\(\frac{2+3}{1-6}=-1\).`], S`\(-1\)`),
  ]),

  ...hard([
    ["Two quadrants", S`\(\cos a=-\dfrac45\) with \(a\) in Q2, and \(\sin b=-\dfrac5{13}\) with \(b\) in Q3. Find \(\cos(a-b)\), and state the quadrant of \(a-b\) given that \(\sin(a-b)\) is negative.`,
      [S`\(\sin a=\frac35\) (Q2). \(\cos b=-\frac{12}{13}\) (Q3).`, S`\(\cos(a-b)=\cos a\cos b+\sin a\sin b=\left(-\frac45\right)\left(-\frac{12}{13}\right)+\frac35\left(-\frac5{13}\right)=\frac{48-15}{65}=\frac{33}{65}\).`, S`Cosine positive and sine negative means Q4.`],
      S`\(\cos(a-b)=\dfrac{33}{65}\); Quadrant 4`],
    ["Deriving a relation", S`Use a compound angle formula to prove \(\sin\left(x+\dfrac\pi2\right)=\cos x\). Then simplify \(\cos\left(x+\dfrac\pi4\right)+\cos\left(x-\dfrac\pi4\right)\).`,
      [S`\(\sin x\cos\frac\pi2+\cos x\sin\frac\pi2=\sin x\cdot0+\cos x\cdot1=\cos x\).`, S`\(\cos\left(x+\frac\pi4\right)+\cos\left(x-\frac\pi4\right)=2\cos x\cos\frac\pi4\): the \(\sin\) terms cancel.`, S`\(2\cos x\cdot\frac{\sqrt2}2=\sqrt2\cos x\).`],
      S`\(\sqrt2\cos x\)`,
      plane(TG([[(x) => Math.SQRT2 * Math.cos(x), "violet"], [Math.cos, "gray"]], { xmin: -6.5, xmax: 6.5, ymin: -2, ymax: 2 }))],
  ], [
    q("hard", S`\(\sin a=\dfrac8{17}\) in Q1 and \(\cos b=\dfrac35\) in Q4. Find \(\sin(a-b)\) (4 decimals).`, num(0.9882, 0.001),
      "sin b is negative.", [S`\(\cos a=\frac{15}{17}\), \(\sin b=-\frac45\). \(\frac8{17}\cdot\frac35+\frac{15}{17}\cdot\frac45=\frac{24+60}{85}=\frac{84}{85}\approx0.9882\).`], S`\(0.9882\)`),
    q("hard", S`Evaluate \(\tan\dfrac{5\pi}{12}\) (4 decimals).`, num(3.7321, 0.001),
      "π/4 + π/6.", [S`\(2+\sqrt3\approx3.7321\).`], S`\(3.7321\)`),
    q("hard", S`\(\tan a=\dfrac12\) and \(\tan b=\dfrac13\), both acute. Find \(a+b\) in radians (4 decimals).`, num(0.7854, 0.001),
      "Find tan(a + b).", [S`\(\frac{1/2+1/3}{1-1/6}=1\), so \(a+b=\frac\pi4\).`], S`\(0.7854\)`),
  ]),

  wrapUp({
    qas: [
      ["Why isn't sin(a + b) = sin a + sin b?", "Sine is not linear: try a = b = π/2, where sin π = 0 but the right side is 2."],
      ["How do I remember the signs?", "Sine keeps the sign of the angle operation. Cosine flips it."],
      ["Where do these formulas come from?", "The distance between two points on the unit circle gives cos(a − b); the others follow by substitution."],
      ["Which angle pair should I use?", "Write the angle in twelfths: π/4 = 3π/12, π/3 = 4π/12, π/6 = 2π/12. Then 7π/12 = 3π/12 + 4π/12."],
      ["Do I need radians?", "The formulas are true in degrees too, but MHF4U expects radians."],
    ],
    summary: [
      "sin(a ± b) = sin a cos b ± cos a sin b.",
      "cos(a ± b) = cos a cos b ∓ sin a sin b.",
      "tan(a ± b) = (tan a ± tan b)/(1 ∓ tan a tan b).",
      "Find missing ratios with the correct quadrant signs before you substitute.",
    ],
    next: "4.5 sets a = b to produce the double angle formulas.",
  }),
];
