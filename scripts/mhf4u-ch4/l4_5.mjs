// MHF4U 4.5 — Double Angle Formulas: sin 2x, the three forms of cos 2x, tan 2x, exact values and simplifying
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { ARM, TG, UC } from "./trigfig.mjs";

export const TITLE = "4.5 Double Angle Formulas";
export const ID = "14a47665-8167-495e-bc1f-3fe77b8fbafb";

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "✖️",
    title: "Double Angle Formulas",
    overview: S`Put \(b=a\) in the compound angle formulas and three short results appear: the double angle formulas. They express a ratio of \(2x\) in terms of ratios of \(x\). Cosine has three forms, and choosing the right one is often what makes a simplification or an equation work.`,
    goals: [
      "derive the double angle formulas from the sum formulas;",
      "use the three forms of \\(\\cos2x\\);",
      "find ratios of \\(2x\\) from a ratio of \\(x\\) and its quadrant;",
      "condense expressions into a single ratio of a double angle;",
      "find exact values with half angles such as \\(\\frac\\pi8\\).",
    ],
    curriculum: "B3.2 (compound angle formulas), B3.3 (use formulas to prove identities)",
    prior: [
      [S`\(\sin(a+b)\)?`, S`\(\sin a\cos b+\cos a\sin b\).`],
      [S`\(\sin^2x+\cos^2x\)?`, S`\(1\).`],
      [S`\(\cos x=\frac45\) in Q4: \(\sin x\)?`, S`\(-\frac35\).`],
    ],
    words: [
      ["Double angle", "an angle of the form 2x", "\\(\\sin2x\\)"],
      ["Half angle", "x when 2x is a known angle", "\\(\\frac\\pi8\\) from \\(\\frac\\pi4\\)"],
      ["Pythagorean identity", "\\(\\sin^2x+\\cos^2x=1\\)", ""],
    ],
  }),

  section("📌 The formulas", S`
  ${table(["Ratio", "Formula", "Derived from"], [
    ["sin 2x", "2 sin x cos x", "sin(x + x)"],
    ["cos 2x", "cos²x − sin²x", "cos(x + x)"],
    ["cos 2x", "2cos²x − 1", "replace sin²x with 1 − cos²x"],
    ["cos 2x", "1 − 2sin²x", "replace cos²x with 1 − sin²x"],
    ["tan 2x", "2 tan x / (1 − tan²x)", "tan(x + x)"],
  ])}
  ${plane(TG([[(x) => Math.sin(2 * x), "violet"], [(x) => 2 * Math.sin(x), "gray"]], { xmin: -6.5, xmax: 6.5, ymin: -3, ymax: 3 }), "sin 2x (violet) is not 2 sin x (gray): the first has half the period, the second twice the height.")}
  ${keyIdea(S`Pick the form of \(\cos2x\) that matches what you know. Given only \(\sin x\), use \(1-2\sin^2x\); given only \(\cos x\), use \(2\cos^2x-1\).`)}`),

  section("📌 Explore", S`<p>Choose an identity and slide \(x\). The two sides have the same value at every \(x\), so the two graphs lie on top of each other. Compare \(\sin2x=2\sin x\cos x\) and \(\cos2x=1-2\sin^2x\).</p>`),

  widget("ibIdentity", { init: [1, 40] }),

  section("📌 Half angles", S`
  <p>Solve \(\cos2x=2\cos^2x-1\) for \(\cos x\): \(\cos x=\pm\sqrt{\dfrac{1+\cos2x}2}\). The sign is set by the quadrant of \(x\).</p>
  ${watchOut([
    "sin 2x ≠ 2 sin x. The 2 belongs inside the angle.",
    "cos²x means (cos x)². Square the value, including any negative sign.",
    "Find the sign of sin x and cos x from the quadrant of x, not of 2x.",
    "tan 2x is not defined when tan²x = 1.",
    "The formulas work for any doubling: sin 6x = 2 sin 3x cos 3x.",
  ])}`),

  examples([
    ["All three from one ratio", S`\(\sin x=\dfrac35\) with \(\dfrac\pi2\lt x\lt\pi\). Find \(\sin2x\), \(\cos2x\) and \(\tan2x\).`,
      [S`<b>Cosine first.</b> The triangle is 3-4-5, and \(x\) is in Q2, where cosine is negative: \(\cos x=-\frac45\).`,
        S`<b>Sine.</b> \(\sin2x=2\sin x\cos x=2\cdot\frac35\cdot\left(-\frac45\right)=-\frac{24}{25}\).`,
        S`<b>Cosine.</b> \(\cos2x=1-2\sin^2x=1-2\cdot\frac9{25}=\frac7{25}\).`,
        S`<b>Tangent.</b> \(\tan2x=\frac{\sin2x}{\cos2x}=-\frac{24}{25}\cdot\frac{25}7=-\frac{24}7\).`,
        S`<b>Check.</b> \(\left(\frac{24}{25}\right)^2+\left(\frac7{25}\right)^2=\frac{576+49}{625}=1\) ✓`],
      S`\(-\frac{24}{25},\ \frac7{25},\ -\frac{24}7\)`,
      plane(ARM(-4, 3, "(−4, 3)"))],
    ["Condensing a product", S`Write \(2\sin\dfrac\pi8\cos\dfrac\pi8\) as one ratio and evaluate it.`,
      [S`<b>Pattern.</b> It matches \(2\sin x\cos x=\sin2x\) with \(x=\frac\pi8\).`,
        S`<b>Double.</b> \(2\cdot\frac\pi8=\frac\pi4\), so it equals \(\sin\frac\pi4\).`,
        S`<b>Evaluate.</b> \(\sin\frac\pi4=\frac{\sqrt2}2\).`,
        S`<b>Check.</b> \(2\sin22.5^\circ\cos22.5^\circ\approx2(0.383)(0.924)\approx0.707\) ✓`],
      S`\(\dfrac{\sqrt2}2\)`,
      plane(UC(45, "π/4"))],
    ["Condensing a difference of squares", S`Evaluate \(\cos^2\dfrac\pi{12}-\sin^2\dfrac\pi{12}\).`,
      [S`<b>Pattern.</b> It matches \(\cos^2x-\sin^2x=\cos2x\) with \(x=\frac\pi{12}\).`,
        S`<b>Double.</b> \(2\cdot\frac\pi{12}=\frac\pi6\).`,
        S`<b>Evaluate.</b> \(\cos\frac\pi6=\frac{\sqrt3}2\).`,
        S`<b>Check.</b> \(0.966^2-0.259^2\approx0.933-0.067=0.866\), and \(\frac{\sqrt3}2\approx0.866\) ✓`],
      S`\(\dfrac{\sqrt3}2\)`,
      plane(UC(30, "π/6"))],
    ["Tangent", S`\(\tan x=3\). Find \(\tan2x\).`,
      [S`<b>Formula.</b> \(\tan2x=\dfrac{2\tan x}{1-\tan^2x}\).`,
        S`<b>Substitute.</b> \(\dfrac{2(3)}{1-3^2}=\dfrac6{-8}\).`,
        S`<b>Simplify.</b> \(-\frac34\).`,
        S`<b>Check.</b> \(x\approx1.249\), so \(\tan2.498\approx-0.75\) ✓`],
      S`\(-\dfrac34\)`,
      plane(ARM(1, 3, "(1, 3)"))],
    ["A half angle", S`Find the exact value of \(\cos\dfrac\pi8\).`,
      [S`<b>Plan.</b> \(\frac\pi8\) is half of \(\frac\pi4\), whose cosine we know. Use \(\cos2x=2\cos^2x-1\) with \(x=\frac\pi8\).`,
        S`<b>Set up.</b> \(\frac{\sqrt2}2=2\cos^2\frac\pi8-1\).`,
        S`<b>Isolate.</b> \(\cos^2\frac\pi8=\frac{1+\frac{\sqrt2}2}2=\frac{2+\sqrt2}4\).`,
        S`<b>Root.</b> \(\frac\pi8\) is in Q1, so cosine is positive: \(\cos\frac\pi8=\frac{\sqrt{2+\sqrt2}}2\).`,
        S`<b>Check.</b> \(\frac{\sqrt{3.414}}2\approx0.924\), and \(\cos22.5^\circ\approx0.924\) ✓`],
      S`\(\dfrac{\sqrt{2+\sqrt2}}2\)`,
      plane(UC(22.5, "π/8"))],
  ]),

  practice([
    q("sin 2x", S`\(\sin x=\dfrac5{13}\) and \(\cos x=\dfrac{12}{13}\). Find \(\sin2x\) (4 decimals).`, num(0.7101, 0.001),
      "2 sin x cos x.", [S`\(\frac{120}{169}\approx0.7101\).`], S`\(0.7101\)`),
    q("cos 2x", S`\(\cos x=0.6\). Find \(\cos2x\).`, num(-0.28, 0.001),
      "2cos²x − 1.", [S`\(2(0.36)-1\).`], S`\(-0.28\)`),
    q("cos 2x", S`\(\sin x=0.5\). Find \(\cos2x\).`, num(0.5, 0.001),
      "1 − 2sin²x.", [S`\(1-2(0.25)\).`], S`\(0.5\)`),
    q("condense", S`Which ratio equals \(1-2\sin^2 3x\)?`, choice([S`\(\cos6x\)`, S`\(\cos3x\)`, S`\(\sin6x\)`, S`\(\cos9x\)`], 0),
      "cos 2u with u = 3x.", [S`\(\cos(2\cdot3x)\).`], S`\(\cos6x\)`),
    q("tan 2x", S`\(\tan x=\dfrac12\). Find \(\tan2x\) (4 decimals).`, num(1.3333, 0.001),
      "2 tan x / (1 − tan²x).", [S`\(\frac{1}{3/4}=\frac43\).`], S`\(1.3333\)`),
  ]),

  ...hard([
    ["From a double angle back to x", S`\(\cos2x=\dfrac7{25}\) with \(0\lt x\lt\dfrac\pi2\). Find \(\sin x\) and \(\cos x\).`,
      [S`\(1-2\sin^2x=\frac7{25}\Rightarrow\sin^2x=\frac9{25}\), so \(\sin x=\frac35\) in Q1.`, S`\(2\cos^2x-1=\frac7{25}\Rightarrow\cos^2x=\frac{16}{25}\), so \(\cos x=\frac45\).`],
      S`\(\sin x=\dfrac35,\ \cos x=\dfrac45\)`,
      plane(ARM(4, 3, "(4, 3)"))],
    ["A triple angle", S`Express \(\sin3x\) in terms of \(\sin x\) only.`,
      [S`\(\sin(2x+x)=\sin2x\cos x+\cos2x\sin x\).`, S`\(=2\sin x\cos^2x+(1-2\sin^2x)\sin x\).`, S`Use \(\cos^2x=1-\sin^2x\): \(2\sin x-2\sin^3x+\sin x-2\sin^3x\).`],
      S`\(\sin3x=3\sin x-4\sin^3x\)`,
      plane(TG([[(x) => Math.sin(3 * x), "violet"]], { xmin: -3.5, xmax: 3.5, ymin: -2, ymax: 2 }))],
  ], [
    q("hard", S`\(\cos x=-\dfrac13\) with \(x\) in Q2. Find \(\sin2x\) (4 decimals).`, num(-0.6285, 0.001),
      "sin x is positive in Q2.", [S`\(\sin x=\frac{2\sqrt2}3\); \(2\cdot\frac{2\sqrt2}3\cdot\left(-\frac13\right)=-\frac{4\sqrt2}9\).`], S`\(-0.6285\)`),
    q("hard", S`Find \(\sin\dfrac\pi8\) (4 decimals).`, num(0.3827, 0.001),
      "Use cos(π/4) = 1 − 2sin²(π/8).", [S`\(\sin^2\frac\pi8=\frac{2-\sqrt2}4\).`], S`\(0.3827\)`),
    q("hard", S`\(\sin x+\cos x=\dfrac12\). Find \(\sin2x\).`, num(-0.75, 0.001),
      "Square both sides.", [S`\(1+2\sin x\cos x=\frac14\), so \(\sin2x=-\frac34\).`], S`\(-0.75\)`),
  ]),

  wrapUp({
    qas: [
      ["Why three forms of cos 2x?", "The Pythagorean identity swaps cos²x and sin²x, so you can write the formula with whichever ratio is given."],
      ["Why doesn't the 2 come out?", "sin 2x means the sine of 2x. Doubling an angle does not double the height: sin 2x never exceeds 1."],
      ["How do I recognize these in an expression?", "2 sin ☐ cos ☐ is sine of double; cos²☐ − sin²☐ is cosine of double."],
      ["How does this help with equations?", "Replacing sin 2x and cos 2x puts everything in terms of x, which factors. You will use this in 5.4."],
      ["When is tan 2x not defined?", "When cos 2x = 0, for example at x = π/4."],
    ],
    summary: [
      "sin 2x = 2 sin x cos x.",
      "cos 2x = cos²x − sin²x = 2cos²x − 1 = 1 − 2sin²x.",
      "tan 2x = 2 tan x / (1 − tan²x).",
      "Use the quadrant of x to choose the signs.",
    ],
    next: "4.6 uses all of these to prove trigonometric identities.",
  }),
];
