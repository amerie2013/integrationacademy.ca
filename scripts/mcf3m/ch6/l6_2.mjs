// MCF3M 6.2 — The Sine Function: sine of an angle of rotation (y / r), the graph of y = sin x on 0°–360° and beyond,
// key properties, related angles by symmetry, solving sin x = k from the graph.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard } from "../lib.mjs";
import { SG, sd, cd, P } from "./sfig.mjs";
import { tv } from "../lib.mjs";
const S = String.raw;

export const TITLE = "6.2 The Sine Function";
const circle = (R, ang, lab) => SG([], {
  base: false, view: { xmin: -R * 1.3, xmax: R * 1.3, ymin: -R * 1.3, ymax: R * 1.3 }, step: { x: R / 2, y: R / 2 },
  segs: [{ pts: Array.from({ length: 73 }, (_, i) => [R * cd(i * 5), R * sd(i * 5)]), color: "gray" }, { pts: [[0, 0], [R * cd(ang), R * sd(ang)]], color: "violet" }, { pts: [[R * cd(ang), 0], [R * cd(ang), R * sd(ang)]], color: "red" }],
  points: [P(Math.round(R * cd(ang) * 100) / 100, Math.round(R * sd(ang) * 100) / 100, lab)],
});
const r2 = (v) => Math.round(v * 100) / 100;

export const blocks = () => [
  intro({
    icon: "〰️",
    title: "The Sine Function",
    overview: S`In chapter 5 the sine of an angle was opposite ÷ hypotenuse in a right triangle, so the angle had to be acute. To describe anything that turns, we extend the idea: rotate a radius of length \(r\) by an angle \(x\) from the positive \(x\)-axis; the end point is \((x_P,\,y_P)\), and \(\sin x=\frac{y_P}{r}\). Now every angle has a sine, and graphing \(y=\sin x\) gives the smooth wave that models wheels, tides and sound.`,
    goals: [
      "define sin x for any angle of rotation as y/r;",
      "make a table of values and graph y = sin x for 0° ≤ x ≤ 360°;",
      "state the period, amplitude, axis, max, min, zeros, domain and range of y = sin x;",
      "use symmetry to relate sines of angles in different quadrants;",
      "read solutions of sin x = k from the graph.",
    ],
    curriculum: "C2.3 (make connections between the sine ratio and the sine function by graphing the relationship between angles from 0° to 360° and the corresponding sine ratios), C2.4 (define the sine function and describe its key properties)",
    prior: [
      [S`In a right triangle with hypotenuse \(10\) and angle \(30^\circ\), find the opposite side.`, S`\(10\sin30^\circ=5\).`],
      [S`Find \(\sin60^\circ\) to two decimals.`, S`\(0.87\).`],
      [S`If \(\sin\theta=0.6\), find the acute angle \(\theta\).`, S`\(\theta\approx36.87^\circ\).`],
    ],
    words: [
      ["Angle of rotation", "angle turned counterclockwise from the positive x-axis", "150°"],
      ["sin x (any angle)", "y-coordinate ÷ radius of the rotated point", "sin 150° = 0.5"],
      ["Sine function", "y = sin x", "a wave of period 360°"],
      ["Zeros", "x-values where sin x = 0", "0°, 180°, 360°"],
      ["Related acute angle", "the acute angle between the radius and the x-axis", "30° for 150°"],
    ],
  }),

  section("📌 From a turning radius to a wave", S`
  ${circle(10, 150, "(−8.66, 5)")}
  <p>For a rotation of \(150^\circ\) on a circle of radius \(10\), the end point is \((-8.66,\,5)\), so \(\sin150^\circ=\frac5{10}=0.5\). As the radius turns, the height \(y_P\) rises, falls, goes negative and comes back — exactly one wave per turn.</p>
  ${tv([[0, 0], [30, 0.5], [60, 0.87], [90, 1], [120, 0.87], [150, 0.5], [180, 0], [210, -0.5], [240, -0.87], [270, -1], [300, -0.87], [330, -0.5], [360, 0]], "x (°)", "sin x")}
  ${SG([{ f: sd, color: "violet" }], { base: false, view: { xmin: 0, xmax: 360, ymin: -1.5, ymax: 1.5 }, step: { x: 30, y: 0.5 }, points: [P(90, 1, "(90°, 1)"), P(270, -1, "(270°, −1)", "red")], cap: "y = sin x for 0° ≤ x ≤ 360°" })}
  ${table(["Property", "y = sin x"], [["period", "360°"], ["amplitude", "1"], ["axis", "y = 0"], ["maximum", "1 at x = 90° (+ 360°n)"], ["minimum", "−1 at x = 270° (+ 360°n)"], ["zeros", "0°, 180°, 360° (every 180°)"], ["domain / range", "all real x / −1 ≤ y ≤ 1"]])}
  ${keyIdea(S`Five key points draw one cycle: \((0,0)\), \((90,1)\), \((180,0)\), \((270,-1)\), \((360,0)\). By symmetry, \(\sin(180^\circ-x)=\sin x\) and \(\sin(180^\circ+x)=-\sin x\).`)}`),

  widget("unitWave", { fn: "sin" }),

  section("⚠️ Common errors", S`
  ${watchOut([
    "Set the calculator to DEGREE mode.",
    "sin x is negative between 180° and 360° (the point is below the x-axis).",
    "sin⁻¹ gives only ONE angle (between −90° and 90°); the graph shows the second one, 180° − x.",
    "The period of y = sin x is 360°, not 180° (180° is the gap between zeros).",
    "sin x never exceeds 1 or goes below −1.",
  ])}`),

  examples([
    ["Sine of an angle of rotation", S`A radius of length \(10\) is rotated \(150^\circ\) from the positive \(x\)-axis. Find the end point and \(\sin150^\circ\). Compare with \(\sin30^\circ\).`,
      [S`<b>Related acute angle.</b> The radius makes \(180-150=30^\circ\) with the negative \(x\)-axis.`,
        S`<b>Coordinates.</b> Height \(10\sin30^\circ=5\) (above the axis); horizontal \(10\cos30^\circ\approx8.66\) to the left: \((-8.66,\,5)\).`,
        S`<b>Sine.</b> \(\sin150^\circ=\frac{y}{r}=\frac5{10}=0.5\).`,
        S`<b>Compare.</b> \(\sin30^\circ=0.5\) too — mirror-image points have the same height.`],
      S`(−8.66, 5); sin 150° = 0.5 = sin 30°`,
      circle(10, 150, "(−8.66, 5)")],

    ["Table and graph", S`Complete a table of \(y=\sin x\) for \(x=0^\circ,45^\circ,\dots,360^\circ\) and graph it.`,
      [S`<b>Values.</b> \(0,\ 0.71,\ 1,\ 0.71,\ 0,\ -0.71,\ -1,\ -0.71,\ 0\).`,
        S`<b>Pattern.</b> Up to \(1\) at \(90^\circ\), back to \(0\) at \(180^\circ\), down to \(-1\) at \(270^\circ\), back to \(0\) at \(360^\circ\).`,
        S`<b>Graph.</b> Plot the nine points and join with a smooth curve (rounded at the top and bottom, not pointed).`,
        S`<b>Check.</b> The values in \(180^\circ\)–\(360^\circ\) are the negatives of those in \(0^\circ\)–\(180^\circ\) ✓`],
      S`one smooth wave from (0, 0) up to (90, 1), down to (270, −1), back to (360, 0)`,
      SG([{ f: sd, color: "violet" }], { base: false, view: { xmin: 0, xmax: 360, ymin: -1.5, ymax: 1.5 }, step: { x: 45, y: 0.5 }, points: [0, 45, 90, 135, 180, 225, 270, 315, 360].map((x) => P(x, r2(sd(x)), false)) })],

    ["Properties over two cycles", S`For \(y=\sin x\), \(0^\circ\le x\le720^\circ\), list the maximum points, minimum points and zeros, and state the range.`,
      [S`<b>Maximums.</b> \(x=90^\circ\) and \(90+360=450^\circ\): \((90,1)\), \((450,1)\).`,
        S`<b>Minimums.</b> \((270,-1)\) and \((630,-1)\).`,
        S`<b>Zeros.</b> Every \(180^\circ\): \(0,180,360,540,720\).`,
        S`<b>Range.</b> \(-1\le y\le1\); the axis is \(y=0\) and the amplitude \(1\).`],
      S`max (90, 1), (450, 1); min (270, −1), (630, −1); zeros 0, 180, 360, 540, 720; range −1 ≤ y ≤ 1`,
      SG([{ f: sd, color: "violet" }], { base: false, view: { xmin: 0, xmax: 720, ymin: -1.5, ymax: 1.5 }, step: { x: 90, y: 0.5 }, points: [P(90, 1), P(450, 1), P(270, -1, null, "red"), P(630, -1, null, "red")] })],

    ["Using symmetry", S`Without a calculator (use \(\sin30^\circ=0.5\), \(\sin60^\circ\approx0.87\)), find \(\sin120^\circ\), \(\sin210^\circ\) and \(\sin300^\circ\).`,
      [S`<b>\(120^\circ\).</b> \(180-120=60\): mirror point above the axis, so \(\sin120^\circ=\sin60^\circ\approx0.87\).`,
        S`<b>\(210^\circ\).</b> \(210=180+30\): point below the axis, so \(\sin210^\circ=-\sin30^\circ=-0.5\).`,
        S`<b>\(300^\circ\).</b> \(360-300=60\), below the axis: \(\sin300^\circ\approx-0.87\).`,
        S`<b>Check on the graph.</b> The points \((120,0.87)\), \((210,-0.5)\), \((300,-0.87)\) lie on the wave ✓`],
      S`sin 120° ≈ 0.87, sin 210° = −0.5, sin 300° ≈ −0.87`,
      SG([{ f: sd, color: "violet" }], { base: false, view: { xmin: 0, xmax: 360, ymin: -1.5, ymax: 1.5 }, step: { x: 30, y: 0.5 }, points: [P(120, 0.87), P(210, -0.5, null, "red"), P(300, -0.87, null, "red")] })],

    ["Solving sin x = k", S`Solve \(\sin x=0.6\) for \(0^\circ\le x\le360^\circ\).`,
      [S`<b>Calculator.</b> \(x=\sin^{-1}0.6\approx36.87^\circ\).`,
        S`<b>Second solution.</b> The line \(y=0.6\) crosses the first hump twice, symmetrically about \(90^\circ\): \(180-36.87=143.13^\circ\).`,
        S`<b>No others.</b> Between \(180^\circ\) and \(360^\circ\), \(\sin x<0\).`,
        S`<b>Check.</b> \(\sin143.13^\circ\approx0.6\) ✓`],
      S`x ≈ 36.87° or 143.13°`,
      SG([{ f: sd, color: "violet" }], { base: false, view: { xmin: 0, xmax: 360, ymin: -1.5, ymax: 1.5 }, step: { x: 45, y: 0.5 }, lines: [{ m: 0, b: 0.6, color: "green", dash: true, label: "y = 0.6" }], points: [P(36.87, 0.6, "36.87°"), P(143.13, 0.6, "143.13°")] })],
  ]),

  practice([
    q("val", S`Find \(\sin270^\circ\).`, num(-1), "Lowest point.", [S`\(-1\).`], S`\(-1\)`),
    q("rel", S`Find \(\sin150^\circ\).`, num(0.5, 0.001), "Same as sin 30°.", [S`\(0.5\).`], S`\(0.5\)`),
    q("zeros", S`How many zeros does \(y=\sin x\) have for \(0^\circ\le x\le360^\circ\)?`, num(3), "Every 180°.", [S`\(0,180,360\).`], S`\(3\)`),
    q("max", S`At what \(x\) in \(0^\circ\le x\le360^\circ\) does \(\sin x\) reach its maximum?`, num(90), "Top of the hump.", [S`\(90^\circ\).`], S`\(90\)`),
    q("range", S`What is the range of \(y=\sin x\)?`, choice(["−1 ≤ y ≤ 1", "0 ≤ y ≤ 1", "0 ≤ y ≤ 360", "all real numbers"], 0), "Amplitude 1 about y = 0.", [S`\(-1\le y\le1\).`], S`−1 ≤ y ≤ 1`),
  ]),

  ...hard([
    ["A point on a wheel", S`A wheel of radius \(12\) m turns about its hub. A marker starts level with the hub on the right and turns counterclockwise. How far above or below the hub is it after turning \(225^\circ\)? After \(480^\circ\)?`,
      [S`<b>Height relative to the hub.</b> \(y=12\sin x\).`,
        S`<b>\(225^\circ\).</b> \(12\sin225^\circ=-12\sin45^\circ\approx-8.49\): \(8.49\) m below the hub.`,
        S`<b>\(480^\circ\).</b> \(480-360=120\): \(12\sin120^\circ\approx10.39\) m above.`],
      S`8.49 m below; 10.39 m above`,
      circle(12, 225, "(−8.49, −8.49)")],
    ["Negative value", S`Solve \(\sin x=-0.4\) for \(0^\circ\le x\le360^\circ\).`,
      [S`<b>Related angle.</b> \(\sin^{-1}0.4\approx23.58^\circ\).`,
        S`<b>Where sine is negative.</b> Below the axis: \(180+23.58=203.58^\circ\) and \(360-23.58=336.42^\circ\).`,
        S`<b>Check.</b> \(\sin203.58^\circ\approx-0.4\) ✓`],
      S`x ≈ 203.58° or 336.42°`,
      SG([{ f: sd, color: "violet" }], { base: false, view: { xmin: 0, xmax: 360, ymin: -1.5, ymax: 1.5 }, step: { x: 45, y: 0.5 }, lines: [{ m: 0, b: -0.4, color: "green", dash: true, label: "y = −0.4" }], points: [P(203.58, -0.4, "203.58°"), P(336.42, -0.4, "336.42°")] })],
  ], [
    q("hard", S`Find \(\sin330^\circ\).`, num(-0.5, 0.001), "360 − 30, below the axis.", [S`\(-\sin30^\circ=-0.5\).`], S`\(-0.5\)`),
    q("hard", S`\(\sin x=0.8\) has solutions \(53.13^\circ\) and \(x_2\) in \(0^\circ\le x\le360^\circ\). Find \(x_2\) (two decimals).`, num(126.87, 0.011), "180° − 53.13°.", [S`\(126.87^\circ\).`], S`\(126.87\)`),
    q("hard", S`How many solutions does \(\sin x=0.3\) have for \(0^\circ\le x\le720^\circ\)?`, num(4), "Two per cycle.", [S`Two cycles, two each: \(4\).`], S`\(4\)`),
    q("hard", S`Find \(\sin1110^\circ\).`, num(0.5, 0.001), "Subtract 3 × 360°.", [S`\(1110-1080=30\): \(0.5\).`], S`\(0.5\)`),
    q("hard", S`A radius of \(5\) is rotated \(240^\circ\). Find the \(y\)-coordinate of its end (two decimals).`, num(-4.33, 0.011), "5 sin 240°.", [S`\(5\sin240^\circ=-5\sin60^\circ\approx-4.33\).`], S`\(-4.33\)`),
  ]),

  wrapUp({
    qas: [
      ["How is sin x defined for any angle?", "Rotate a radius r by x; sin x = y-coordinate ÷ r."],
      ["What are the five key points?", "(0, 0), (90, 1), (180, 0), (270, −1), (360, 0)."],
      ["What is the period of y = sin x?", "360°: the wave repeats every full turn."],
      ["Why does sin x = k usually have two solutions in one cycle?", "The horizontal line crosses the hump (or the trough) twice, symmetric about 90° (or 270°)."],
      ["When is sin x negative?", "For 180° < x < 360°, when the point is below the x-axis."],
    ],
    summary: [
      "sin x = y/r for any angle of rotation.",
      "y = sin x: period 360°, amplitude 1, axis y = 0, range −1 ≤ y ≤ 1.",
      "sin(180° − x) = sin x; sin(180° + x) = −sin x.",
      "sin x = k: x₁ = sin⁻¹k, x₂ = 180° − x₁ (for k > 0).",
    ],
    next: "6.3 stretches and shifts the sine wave up and down: y = a sin x + c.",
  }),
];
