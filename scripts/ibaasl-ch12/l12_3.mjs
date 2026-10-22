// IB AA SL 12.3 — Trigonometric Identities: the Pythagorean identity, tan θ = sin θ/cos θ, double angle identities for sine and cosine, simplifying expressions, proving identities, exact values with double angles
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { fig, unitPoint } from "./figs12.mjs";

export const TITLE = "12.3 Trigonometric Identities";
export const ID = "1baa0012-0001-4001-8001-000000001203";
const S = String.raw;
const PI = Math.PI;
const P = (x, y, label, color = "blue") => ({ x, y, label, color });

export const blocks = () => [
  intro({
    icon: "🟰",
    title: "Trigonometric Identities",
    overview: S`An identity is an equation that is true for every value of the variable. The most important one comes straight from the unit circle: \(\cos^2\theta+\sin^2\theta=1\). The double angle identities express \(\sin2\theta\) and \(\cos2\theta\) in terms of \(\sin\theta\) and \(\cos\theta\). In this lesson you will use these identities to simplify expressions, prove other identities and find exact values.`,
    goals: [
      S`use \(\sin^2\theta+\cos^2\theta=1\) and \(\tan\theta=\frac{\sin\theta}{\cos\theta}\);`,
      S`use \(\sin2\theta=2\sin\theta\cos\theta\);`,
      S`use \(\cos2\theta=\cos^2\theta-\sin^2\theta=2\cos^2\theta-1=1-2\sin^2\theta\);`,
      "simplify trigonometric expressions;",
      "prove identities by working on one side.",
    ],
    curriculum: "SL 3.6 (the Pythagorean identity cos²θ + sin²θ = 1; double angle identities for sine and cosine; relationship between trigonometric ratios)",
    prior: [
      [S`Expand \((a-b)(a+b)\).`, S`\(a^2-b^2\).`],
      [S`\(\sin\frac{\pi}{6}\) and \(\cos\frac{\pi}{6}\)?`, S`\(\frac12\), \(\frac{\sqrt3}2\).`],
      [S`Simplify \(\frac{x^2-1}{x-1}\).`, S`\(x+1\).`],
    ],
    words: [
      ["Identity", "true for all values", S`\(\sin^2x+\cos^2x=1\)`],
      ["Pythagorean identity", S`\(\sin^2\theta+\cos^2\theta=1\)`, ""],
      ["Double angle", S`formula for \(2\theta\)`, S`\(\sin2\theta=2\sin\theta\cos\theta\)`],
      [S`\(\sin^2\theta\)`, S`means \((\sin\theta)^2\)`, ""],
      ["Proof", "transform one side into the other", ""],
    ],
  }),

  section("📌 The Pythagorean identity", S`
  <p>The point \((\cos\theta,\sin\theta)\) lies on \(x^2+y^2=1\), so \(\cos^2\theta+\sin^2\theta=1\) for every θ. Rearranged: \(\sin^2\theta=1-\cos^2\theta\) and \(\cos^2\theta=1-\sin^2\theta\). Dividing by \(\cos^2\theta\) relates tan to the others: \(\tan^2\theta+1=\frac{1}{\cos^2\theta}\).</p>
  ${fig({ items: unitPoint(0.9, { label: "θ", quadrants: false }) }, "Legs cos θ and sin θ, hypotenuse 1: Pythagoras gives cos²θ + sin²θ = 1")}
  ${plane({ view: { xmin: 0, xmax: 2 * PI, ymin: -0.2, ymax: 1.3 }, step: { x: PI / 2, y: 0.5 }, curves: [{ f: (x) => Math.sin(x) ** 2, color: "violet" }, { f: (x) => Math.cos(x) ** 2, color: "amber" }, { f: () => 1, color: "green" }] }, "sin²x (violet) and cos²x (amber) always add to 1 (green)")}
  ${keyIdea("sin²θ + cos²θ = 1 for every θ. Use it to swap between sin² and cos².")}`),

  section("📌 Double angle identities", S`
  ${table(["Identity", "Useful when"], [
    [S`\(\sin2\theta=2\sin\theta\cos\theta\)`, "a product sin·cos appears"],
    [S`\(\cos2\theta=\cos^2\theta-\sin^2\theta\)`, "both squares appear"],
    [S`\(\cos2\theta=2\cos^2\theta-1\)`, "only cos is wanted"],
    [S`\(\cos2\theta=1-2\sin^2\theta\)`, "only sin is wanted"],
  ])}
  ${plane({ view: { xmin: 0, xmax: 2 * PI, ymin: -1.4, ymax: 1.4 }, step: { x: PI / 2, y: 0.5 }, curves: [{ f: (x) => Math.sin(2 * x), color: "violet" }, { f: (x) => 2 * Math.sin(x) * Math.cos(x), color: "amber" }, { f: Math.sin, color: "gray" }] }, "sin 2x and 2 sin x cos x draw the same curve; sin x (grey) is NOT the same as ½ sin 2x")}
  <p>Exact values: if \(\sin\theta=\frac35\) with θ acute, then \(\cos\theta=\frac45\), \(\sin2\theta=2\cdot\frac35\cdot\frac45=\frac{24}{25}\) and \(\cos2\theta=1-2\cdot\frac{9}{25}=\frac{7}{25}\).</p>
  ${fig({ items: unitPoint(Math.asin(0.6), { label: "θ", quadrants: false }) }, "sin θ = 3/5, cos θ = 4/5")}
  ${watchOut([
    S`\(\sin2\theta\ne2\sin\theta\).`,
    S`\(\sin^2\theta\) means \((\sin\theta)^2\), not \(\sin(\theta^2)\).`,
    "When proving, work on one side only; do not move terms across the equals sign.",
    "Choose the form of cos 2θ that matches the rest of the expression.",
  ])}`),

  section("📌 Explore", S`<p>Choose an identity and move x. The two sides give the same value every time, so their graphs coincide.</p>`),

  widget("ibIdentity", { init: [2, 70] }),

  examples([
    ["Level 1 · Simplify", S`Simplify \(3\sin^2x+3\cos^2x\) and \(\frac{\sin x}{\tan x}\).`,
      [S`\(3(\sin^2x+\cos^2x)=3\).`, S`\(\sin x\cdot\frac{\cos x}{\sin x}=\cos x\).`],
      S`\(3\); \(\cos x\)`],
    ["Level 1 · Find cos from sin", S`\(\sin\theta=\frac{12}{13}\), θ obtuse. Find \(\cos\theta\).`,
      [S`\(\cos^2\theta=1-\frac{144}{169}=\frac{25}{169}\); negative for obtuse θ.`],
      S`\(-\frac{5}{13}\)`],
    ["Level 2 · Double angle values", S`\(\cos\theta=\frac{2}{3}\) and \(0<\theta<\frac{\pi}{2}\). Find \(\sin2\theta\) and \(\cos2\theta\) exactly.`,
      [S`\(\sin\theta=\frac{\sqrt5}{3}\).`, S`\(\sin2\theta=2\cdot\frac{\sqrt5}3\cdot\frac23=\frac{4\sqrt5}{9}\); \(\cos2\theta=2\cdot\frac49-1=-\frac19\).`],
      S`\(\frac{4\sqrt5}{9}\); \(-\frac19\)`],
    ["Level 2 · Prove", S`Prove that \((\sin x+\cos x)^2=1+\sin2x\).`,
      [S`LHS \(=\sin^2x+2\sin x\cos x+\cos^2x\).`, S`\(=1+2\sin x\cos x=1+\sin2x=\) RHS.`],
      "proved",
      plane({ view: { xmin: 0, xmax: 2 * PI, ymin: -0.3, ymax: 2.3 }, step: { x: PI / 2, y: 0.5 }, curves: [{ f: (x) => (Math.sin(x) + Math.cos(x)) ** 2, color: "violet" }, { f: (x) => 1 + Math.sin(2 * x), color: "amber" }], points: [P(PI / 4, 2, "max at π/4", "red")] }, "Both sides give the same curve")],
    ["Level 3 · Prove with cos 2x", S`Prove that \(\frac{1-\cos2x}{\sin2x}=\tan x\).`,
      [S`\(1-\cos2x=2\sin^2x\); \(\sin2x=2\sin x\cos x\).`, S`\(\frac{2\sin^2x}{2\sin x\cos x}=\frac{\sin x}{\cos x}=\tan x\).`],
      "proved"],
  ]),

  practice([
    q("Level 1 · simplify", S`Simplify \(1-\sin^2x\).`, choice([S`\(\cos^2x\)`, S`\(\sin^2x\)`, S`\(\cos x\)`, "1"], 0),
      "Pythagorean identity.", [S`\(\cos^2x\).`], S`\(\cos^2x\)`),
    q("Level 1 · value", S`If \(\sin x=0.6\), find \(\cos2x\).`, num(0.28, 0.001),
      "1 − 2 sin² x.", [S`\(1-0.72\).`], S`\(0.28\)`),
    q("Level 2 · value", S`\(\sin\theta=\frac{5}{13}\), θ acute. Find \(\sin2\theta\) (4 d.p.).`, num(120 / 169, 0.0001),
      "cos θ = 12/13.", [S`\(2\cdot\frac{5}{13}\cdot\frac{12}{13}\).`], S`\(\frac{120}{169}\)`),
    q("Level 2 · tan", S`\(\cos\theta=-0.8\), θ in quadrant 2. Find \(\tan\theta\).`, num(-0.75, 0.001),
      "sin θ = 0.6.", [S`\(\frac{0.6}{-0.8}\).`], S`\(-0.75\)`),
    q("Level 2 · exact", S`Evaluate \(\cos^2\frac{\pi}{8}-\sin^2\frac{\pi}{8}\) exactly (decimal, 4 d.p.).`, num(Math.SQRT2 / 2, 0.0001),
      "cos 2θ with θ = π/8.", [S`\(\cos\frac{\pi}{4}\).`], S`\(\frac{\sqrt2}{2}\)`),
  ]),

  ...hard([
    ["Expressing cos in terms of sin", S`Show that \(\cos4x=1-8\sin^2x\cos^2x\).`,
      [S`\(\cos4x=1-2\sin^22x\).`, S`\(\sin^22x=(2\sin x\cos x)^2=4\sin^2x\cos^2x\).`, S`So \(\cos4x=1-8\sin^2x\cos^2x\).`],
      "proved",
      plane({ view: { xmin: 0, xmax: PI, ymin: -1.3, ymax: 1.3 }, step: { x: PI / 4, y: 0.5 }, curves: [{ f: (x) => Math.cos(4 * x), color: "violet" }, { f: (x) => 1 - 8 * Math.sin(x) ** 2 * Math.cos(x) ** 2, color: "amber" }] }, "cos 4x and 1 − 8 sin²x cos²x coincide")],
    ["A double angle from tan", S`\(\tan\theta=-\frac{3}{4}\) with \(\frac{3\pi}{2}<\theta<2\pi\). Find \(\sin2\theta\) and \(\cos2\theta\).`,
      [S`Quadrant 4: \(\sin\theta=-\frac35\), \(\cos\theta=\frac45\).`, S`\(\sin2\theta=2\left(-\frac35\right)\frac45=-\frac{24}{25}\); \(\cos2\theta=\frac{16}{25}-\frac{9}{25}=\frac{7}{25}\).`],
      S`\(-\frac{24}{25}\); \(\frac{7}{25}\)`],
  ], [
    q("Level 3 · sum", S`If \(\sin x+\cos x=\frac43\), find \(\sin2x\) (4 d.p.).`, num(7 / 9, 0.0001),
      "Square both sides.", [S`\(1+\sin2x=\frac{16}{9}\).`], S`\(\frac79\)`),
    q("Level 3 · range", S`The maximum value of \(\sin x\cos x\) is:`, num(0.5, 0.001),
      "½ sin 2x.", ["½."], S`\(\frac12\)`),
    q("Level 3 · simplify", S`\(\frac{\sin2x}{1+\cos2x}\) simplifies to:`, choice([S`\(\tan x\)`, S`\(\cot x\)`, S`\(\sin x\)`, S`\(2\tan x\)`], 0),
      "1 + cos 2x = 2cos² x.", [S`\(\frac{2\sin x\cos x}{2\cos^2x}\).`], S`\(\tan x\)`),
  ]),

  wrapUp({
    qas: [
      ["What is the difference between an identity and an equation?", "An identity is true for every value; an equation only for some."],
      ["Where does sin² + cos² = 1 come from?", "The point (cos θ, sin θ) lies on the unit circle x² + y² = 1."],
      ["Which form of cos 2θ should I use?", "The one that matches the other terms: all sin, all cos, or both."],
      ["How do I prove an identity?", "Start from the more complicated side and transform it until it equals the other side."],
      ["How do I find sin 2θ from one ratio?", "Find the other ratio with the Pythagorean identity and the quadrant, then substitute."],
    ],
    summary: [
      "sin²θ + cos²θ = 1; tan θ = sin θ/cos θ.",
      "sin 2θ = 2 sin θ cos θ.",
      "cos 2θ = cos²θ − sin²θ = 2cos²θ − 1 = 1 − 2sin²θ.",
      "Prove by working on one side.",
    ],
    next: "12.4 uses these ideas to solve trigonometric equations.",
  }),
];
