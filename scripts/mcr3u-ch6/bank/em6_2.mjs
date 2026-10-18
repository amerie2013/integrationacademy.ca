// 6.2 Graphs of Sine and Cosine — 20 easy + 20 medium questions
import { mc, ms, num, tf } from "./kit.mjs";
import { waveD, sin, cos, rd } from "./fig.mjs";

const S = String.raw;

export const E = [
  num(S`Evaluate \(\sin630^\circ\).`, -1, "630° − 360° = 270°."),
  num(S`Evaluate \(\cos0^\circ\).`, 1, "The point (1, 0)."),
  num(S`What is the period of \(y=\sin x\) in degrees?`, 360, "One full turn."),
  num(S`What is the amplitude of \(y=\cos x\)?`, 1, "Max 1, min −1."),
  mc(S`What is the range of \(y=\sin x\)?`, S`\(-1\le y\le1\)`, [S`\(0\le y\le1\)`, S`\(-360\le y\le360\)`, "all real numbers"], "The unit circle has radius 1."),
  num(S`How many zeros does \(y=\sin x\) have for \(0^\circ\le x\le360^\circ\)?`, 3, "0°, 180°, 360°."),
  num(S`At what x between 0° and 360° does \(\cos x\) first equal −1?`, 180, "The point (−1, 0)."),
  mc(S`What is the y-intercept of \(y=\cos x\)?`, S`\(1\)`, [S`\(0\)`, S`\(-1\)`, S`\(90\)`], "cos 0° = 1."),
  tf(S`\(\cos x=\sin(x+90^\circ)\) for every x.`, true, "Cosine is sine shifted 90° left."),
  tf(S`The maximum value of \(y=\sin x\) is 2.`, false, "It is 1."),
  num(S`Evaluate \(\sin720^\circ\).`, 0, "Two full turns."),
  num(S`Evaluate \(\cos450^\circ\).`, 0, "450° − 360° = 90°."),
  mc(S`For \(0^\circ<x<360^\circ\), where is \(\sin x<0\)?`, S`\(180^\circ<x<360^\circ\)`, [S`\(0^\circ<x<180^\circ\)`, S`\(90^\circ<x<270^\circ\)`, S`\(270^\circ<x<360^\circ\) only`], "Below the axis in Q3 and Q4."),
  num(S`Evaluate \(\sin(-90^\circ)\).`, -1, "Clockwise to (0, −1)."),
  num(S`Evaluate \(\cos(-180^\circ)\).`, -1, "The point (−1, 0)."),
  mc("Which parent graph starts at its maximum when x = 0?", S`\(y=\cos x\)`, [S`\(y=\sin x\)`, "both", "neither"], "cos 0° = 1."),
  num(S`How many maximums does \(y=\cos x\) have for \(0^\circ\le x\le720^\circ\)?`, 3, "At 0°, 360°, 720°."),
  tf(S`The domain of \(y=\sin x\) is \(0^\circ\le x\le360^\circ\).`, false, "Any angle is allowed: all real numbers."),
  num("Read the y-coordinate of the marked point on y = sin x.", 0.5, "sin 150° = ½.", waveD((x) => sin(x), { xmin: 0, xmax: 360, ymin: -1.5, ymax: 1.5 }, { x: 30, y: 0.5 }, { pts: [[150, 0.5, "(150°, ?)"]] }), 0.001),
  num("How many zeros of y = cos x are shown?", 4, "90°, 270°, 450°, 630°.", waveD((x) => cos(x), { xmin: 0, xmax: 720, ymin: -1.5, ymax: 1.5 }, { x: 90, y: 0.5 })),
];

export const M = [
  mc(S`Solve \(\sin x=\frac{\sqrt3}2\) for \(0^\circ\le x\le720^\circ\).`, "60°, 120°, 420°, 480°", ["60°, 120°", "30°, 150°, 390°, 510°", "60°, 300°, 420°, 660°"], "Two per cycle; add 360°."),
  mc(S`Solve \(\cos x=0\) for \(0^\circ\le x\le720^\circ\).`, "90°, 270°, 450°, 630°", ["0°, 180°, 360°, 540°, 720°", "90°, 270°", "180°, 540°"], "Cosine is zero at 90° and 270° each cycle."),
  num(S`Evaluate \(\cos840^\circ\).`, -0.5, "840° − 720° = 120°."),
  num(S`Evaluate \(\sin(-210^\circ)\).`, 0.5, "−210° + 360° = 150°."),
  num(S`How many solutions does \(\cos x=-0.4\) have for \(0^\circ\le x\le1080^\circ\)?`, 6, "Two per cycle, three cycles."),
  num(S`Evaluate \(\sin1290^\circ\).`, -0.5, "1290° − 1080° = 210°."),
  mc(S`On \(0^\circ\le x\le360^\circ\), where is \(y=\cos x\) decreasing?`, "from 0° to 180°", ["from 180° to 360°", "from 90° to 270°", "everywhere"], "From the max at 0° to the min at 180°."),
  mc(S`On \(0^\circ\le x\le360^\circ\), where is \(y=\sin x\) increasing?`, "from 0° to 90° and from 270° to 360°", ["from 90° to 270°", "from 0° to 180°", "from 180° to 360°"], "Rises up to the max at 90°, falls to the min at 270°, rises again."),
  num(S`What is the smallest positive x with \(\cos x=0\)?`, 90, "First zero of cosine."),
  num(S`What is the largest x in \(0^\circ\le x\le720^\circ\) with \(\sin x=-1\)?`, 630, "270° + 360°."),
  tf(S`\(\sin(180^\circ-x)=\sin x\) for every x.`, true, "The sine graph is symmetric about x = 90°."),
  tf(S`\(\cos(-x)=-\cos x\) for every x.`, false, "cos(−x) = cos x: the cosine graph is symmetric about the y-axis."),
  ms("Which equal 0? Select all.", [S`\(\sin180^\circ\)`, S`\(\cos90^\circ\)`, S`\(\sin270^\circ\)`, S`\(\cos540^\circ\)`, S`\(\sin900^\circ\)`], [0, 1, 4], "sin 270° = −1, cos 540° = −1, sin 900° = sin 180° = 0."),
  num(S`What is the sum of the two solutions of \(\sin x=0.3\) for \(0^\circ\le x\le360^\circ\)?`, 180, "β + (180° − β)."),
  num(S`What is the sum of the two solutions of \(\cos x=0.3\) for \(0^\circ\le x\le360^\circ\)?`, 360, "β + (360° − β)."),
  num(S`Evaluate \(\cos45^\circ+\sin45^\circ\) to 2 decimals.`, rd(Math.SQRT2), "2 × 1/√2 = √2.", null, 0.006),
  mc(S`Where do \(y=\sin x\) and \(y=\cos x\) meet for \(0^\circ\le x\le360^\circ\)?`, "45° and 225°", ["90° and 270°", "0° and 180°", "135° and 315°"], "tan x = 1."),
  num(S`How many solutions does \(\sin x=1.2\) have?`, 0, "Sine never exceeds 1."),
  num("Find the x-value of the second marked crossing (between 0° and 360°).", 330, "sin x = −½ at 210° and 330°.", waveD((x) => sin(x), { xmin: 0, xmax: 360, ymin: -1.5, ymax: 1.5 }, { x: 30, y: 0.5 }, { lines: [{ m: 0, b: -0.5, color: "amber", dash: true }], pts: [[210, -0.5, "A"], [330, -0.5, "B"]] })),
  num("The marked point on y = cos x has y = −0.5 and lies in Quadrant 3 (180° < x < 270°). Find x.", 240, "cos 240° = −½.", waveD((x) => cos(x), { xmin: 0, xmax: 360, ymin: -1.5, ymax: 1.5 }, { x: 30, y: 0.5 }, { pts: [[240, -0.5, "(x, −0.5)"]] })),
];
