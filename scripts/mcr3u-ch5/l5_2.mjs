// MCR3U 5.2 — Angles from 0° to 360°: standard position, ratios from a point on the terminal arm, related acute angles,
// the CAST rule, exact values beyond 90°, and the two angles with a given ratio
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, roots, rootsT, hard, plane } from "./lib.mjs";

export const TITLE = "5.2 Angles from 0° to 360°";
export const ID = "1d13cf53-ddcc-4566-a360-039fdd0be6ea";
const S = String.raw;
const arm = (x, y, label) => plane({ view: { xmin: -6, xmax: 6, ymin: -6, ymax: 6 }, segs: [{ pts: [[0, 0], [x, y]], color: "violet" }, { pts: [[x, y], [x, 0]], color: "amber" }], points: [{ x, y, label }], step: { x: 1, y: 1 } });

export const blocks = () => [
  intro({
    icon: "🧭",
    title: "Angles from 0° to 360°",
    overview: S`An angle in standard position starts on the positive x-axis and turns counterclockwise. If \((x,y)\) is any point on its terminal arm and \(r=\sqrt{x^2+y^2}\), then \(\sin\theta=\frac yr\), \(\cos\theta=\frac xr\) and \(\tan\theta=\frac yx\) — for every angle, not just acute ones. In this lesson you will use the related acute angle and the CAST rule to find exact and approximate values from 0° to 360°, and find both angles that share a ratio.`,
    goals: [
      "draw an angle in standard position and find r for a point on its terminal arm;",
      "find the three ratios from a point on the terminal arm;",
      "find the related acute angle and use CAST to decide signs;",
      "evaluate exact values for angles such as 120°, 225°, 330°;",
      "find the two angles between 0° and 360° that have a given ratio.",
    ],
    curriculum: "D1.2 (determine the values of the sine, cosine and tangent of angles from 0° to 360°), D1.3 (determine the measures of two angles from 0° to 360° for which a given ratio is the same)",
    prior: [
      [S`What is \(\sin30^\circ\)?`, S`\(\frac12\).`],
      [S`For \((-3,4)\), what is \(\sqrt{x^2+y^2}\)?`, S`\(5\).`],
      [S`In which quadrant are x < 0 and y > 0?`, "Quadrant 2."],
    ],
    words: [
      ["Standard position", "vertex at the origin, initial arm on the positive x-axis", ""],
      ["Terminal arm", "where the angle stops", ""],
      ["Related acute angle", "the acute angle between the terminal arm and the x-axis", "for 150°: 30°"],
      ["CAST rule", "positive ratios: Q1 all, Q2 sin, Q3 tan, Q4 cos", ""],
    ],
  }),

  section("📌 Related angles and CAST", S`
  ${table(["Quadrant", "θ in terms of the related angle β", "Positive"], [["1", "\\(\\theta=\\beta\\)", "all"], ["2", "\\(\\theta=180^\\circ-\\beta\\)", "sin"], ["3", "\\(\\theta=180^\\circ+\\beta\\)", "tan"], ["4", "\\(\\theta=360^\\circ-\\beta\\)", "cos"]])}
  ${keyIdea(S`Value of a ratio for any angle = (sign from CAST) × (the same ratio of the related acute angle). Example: \(\cos150^\circ=-\cos30^\circ=-\frac{\sqrt3}2\).`)}`),

  section("📌 Explore", S`<p>Turn the terminal arm. Watch the signs of x and y, the related acute angle, and the second angle that has the same sine or cosine.</p>`),

  widget("terminalArm", { init: 150 }),

  section("📌 Watch out", watchOut([
    "r is always positive; x and y carry the signs.",
    "The related angle is measured to the x-axis, never the y-axis.",
    S`A calculator's \(\sin^{-1}\) gives only one angle — use CAST to find the other.`,
    S`\(\tan90^\circ\) and \(\tan270^\circ\) are undefined (x = 0).`,
  ])),

  examples([
    ["From a point", S`The point \((-3,4)\) is on the terminal arm of θ. Find the three ratios and θ.`,
      [S`\(r=\sqrt{9+16}=5\): \(\sin\theta=\frac45\), \(\cos\theta=-\frac35\), \(\tan\theta=-\frac43\).`, S`Related angle \(\tan^{-1}\frac43\approx53.1^\circ\); Quadrant 2: \(\theta\approx126.9^\circ\).`],
      S`\(\theta\approx126.9^\circ\)`,
      arm(-3, 4, "(−3, 4)")],
    ["An exact value in Quadrant 2", S`Find \(\cos150^\circ\) exactly.`,
      [S`Related angle \(30^\circ\); cosine is negative in Quadrant 2.`],
      S`\(-\frac{\sqrt3}2\)`],
    ["Exact values in Quadrants 3 and 4", S`Find \(\tan225^\circ\) and \(\sin300^\circ\) exactly.`,
      [S`225°: related 45°, Quadrant 3 (tan positive): \(\tan225^\circ=1\).`, S`300°: related 60°, Quadrant 4 (sin negative): \(-\frac{\sqrt3}2\).`],
      S`\(1\) and \(-\frac{\sqrt3}2\)`],
    ["Two angles with a given sine", S`Solve \(\sin\theta=-\tfrac12\) for \(0^\circ\le\theta\le360^\circ\).`,
      [S`Related angle \(30^\circ\); sine is negative in Quadrants 3 and 4.`, S`\(180^\circ+30^\circ\) and \(360^\circ-30^\circ\).`],
      S`\(\theta=210^\circ\) or \(330^\circ\)`,
      plane({ view: { xmin: -6, xmax: 6, ymin: -6, ymax: 6 }, segs: [{ pts: [[0, 0], [-4.33, -2.5]], color: "violet" }, { pts: [[0, 0], [4.33, -2.5]], color: "violet" }], lines: [{ m: 0, b: -2.5, color: "amber", dash: true }], points: [{ x: -4.33, y: -2.5, label: "210°" }, { x: 4.33, y: -2.5, label: "330°" }], step: { x: 1, y: 1 } })],
    ["A non-special value", S`Solve \(\cos\theta=0.42\) for \(0^\circ\le\theta\le360^\circ\).`,
      [S`\(\cos^{-1}0.42\approx65.2^\circ\) (Quadrant 1).`, S`Cosine is also positive in Quadrant 4: \(360^\circ-65.2^\circ\).`],
      S`\(\theta\approx65.2^\circ\) or \(294.8^\circ\)`],
  ]),

  practice([
    q("from a point", S`The point \((5,-12)\) is on the terminal arm of θ. Find \(\cos\theta\) (4 decimals).`, num(5 / 13, 0.0001),
      "r = 13.", [S`\(\frac5{13}\).`], S`\(\approx0.3846\)`),
    q("related angle", "What is the related acute angle of 245°?", num(65),
      "Quadrant 3: θ − 180°.", [S`\(245-180\).`], S`\(65^\circ\)`),
    q("exact", S`What is \(\sin135^\circ\)?`, choice([S`\(\frac1{\sqrt2}\)`, S`\(-\frac1{\sqrt2}\)`, S`\(\frac{\sqrt3}2\)`, S`\(-\frac12\)`], 0),
      "Related 45°, Quadrant 2: sine positive.", [S`\(\sin45^\circ\).`], S`\(\frac1{\sqrt2}\)`),
    q("two angles", S`Solve \(\tan\theta=-1\) for \(0^\circ\le\theta\le360^\circ\).`, roots(135, 315),
      "Related 45°; tan negative in Q2 and Q4.", [S`\(180-45\), \(360-45\).`], S`\(135^\circ,\ 315^\circ\)`),
    q("CAST", S`If \(\sin\theta<0\) and \(\cos\theta>0\), where is the terminal arm?`, choice(["Quadrant 4", "Quadrant 2", "Quadrant 3", "Quadrant 1"], 0),
      "Only cosine positive.", ["CAST: Quadrant 4 is “C”."], "Quadrant 4"),
  ]),

  ...hard([
    ["A ratio and a quadrant", S`\(\sin\theta=\frac35\) and \(90^\circ<\theta<180^\circ\). Find \(\cos\theta\) and \(\tan\theta\) exactly.`,
      [S`Take \(y=3\), \(r=5\); then \(x=\pm4\), and Quadrant 2 means \(x=-4\).`, S`\(\cos\theta=-\frac45\), \(\tan\theta=-\frac34\).`],
      S`\(\cos\theta=-\frac45\), \(\tan\theta=-\frac34\)`,
      arm(-4, 3, "(−4, 3)")],
    ["A quadratic in cos θ", S`Solve \(2\cos^2\theta-1=0\) for \(0^\circ\le\theta\le360^\circ\).`,
      [S`\(\cos^2\theta=\frac12\Rightarrow\cos\theta=\pm\frac1{\sqrt2}\).`, S`Related angle 45° in every quadrant.`],
      S`\(\theta=45^\circ,135^\circ,225^\circ,315^\circ\)`],
  ], [
    q("hard", S`\(\tan\theta=-2.4\) and \(\cos\theta>0\). Find \(\sin\theta\) (4 decimals).`, num(-12 / 13, 0.0001),
      "Quadrant 4: point (5, −12).", [S`\(r=13\); \(\sin\theta=-\frac{12}{13}\).`], S`\(\approx-0.9231\)`),
    q("hard", S`The two solutions of \(\sin\theta=0.3\) between 0° and 360° add to what?`, num(180),
      "They are β and 180° − β.", [S`\(\beta+(180-\beta)\).`], S`\(180^\circ\)`),
    q("hard", S`Solve \(2\sin\theta+\sqrt3=0\) for \(0^\circ\le\theta\le360^\circ\).`, roots(240, 300),
      "sin θ = −√3/2.", [S`Related 60°, Quadrants 3 and 4.`], S`\(240^\circ,\ 300^\circ\)`),
  ]),

  wrapUp({
    qas: [
      ["Why define ratios with x, y and r?", "It works for every angle; for acute angles it matches SOH CAH TOA."],
      ["How do I remember CAST?", "Start in Quadrant 4 and go counterclockwise: Cos, All, Sin, Tan."],
      ["Why are there usually two angles?", "Each nonzero ratio value is positive (or negative) in exactly two quadrants."],
      ["When is there only one angle?", "At the axes: sin θ = 1 only at 90°, cos θ = −1 only at 180°."],
      ["How do I find exact values beyond 90°?", "Find the related angle, use its special-triangle value, and attach the CAST sign."],
    ],
    summary: [
      "sin = y/r, cos = x/r, tan = y/x with r = √(x² + y²).",
      "Related angle to the x-axis; CAST gives the sign.",
      "θ = β, 180° − β, 180° + β, 360° − β.",
      "Usually two angles share a ratio.",
    ],
    next: "5.3 adds reciprocal ratios and proves identities.",
  }),
];
