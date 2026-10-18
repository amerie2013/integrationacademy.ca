// 6.6 Equations of Sinusoidal Functions — 20 easy + 20 medium questions
import { mc, ms, num, tf } from "./kit.mjs";
import { waveD, sin, cos } from "./fig.mjs";

const S = String.raw;

export const E = [
  num("A sinusoid has max 8 and min 2. What is |a|?", 3, "(8 − 2)/2."),
  num("A sinusoid has max 8 and min 2. What is c?", 5, "(8 + 2)/2."),
  num("A sinusoid has period 180°. What is k?", 2, "360 ÷ 180."),
  num("A sinusoid has period 60°. What is k?", 6, "360 ÷ 60."),
  num("A sinusoid has period 720°. What is k?", 0.5, "360 ÷ 720.", null, 0.0001),
  mc("Which equation has a maximum of 1 at x = 0°, period 360° and axis y = 0?", S`\(y=\cos x\)`, [S`\(y=\sin x\)`, S`\(y=-\cos x\)`, S`\(y=\cos x+1\)`], "Cosine starts at its maximum."),
  mc("Which equation passes through the origin going up, with amplitude 3 and period 360°?", S`\(y=3\sin x\)`, [S`\(y=3\cos x\)`, S`\(y=\sin3x\)`, S`\(y=-3\sin x\)`], "Sine starts on the axis, rising."),
  num("A cosine graph (a > 0) has a maximum at x = 70°. Using that maximum, what is d?", 70, "d is the x-coordinate of a maximum."),
  num(S`A sinusoid has range \(0\le y\le10\). What is c?`, 5, "Midpoint."),
  num(S`A sinusoid has range \(0\le y\le10\). What is |a|?`, 5, "Half the height."),
  tf("The same sinusoidal graph can be described by a sine equation and by a cosine equation.", true, "They differ by a phase shift."),
  num("The distance from a maximum to the next minimum is 50°. What is the period?", 100, "Max to min is half a period."),
  num("The distance from a maximum to the next minimum is 45°. What is k?", 4, "Period 90°."),
  mc("Where should you start reading d for a cosine equation with a > 0?", "at a maximum", ["at a minimum", "where the graph crosses its axis going up", "at the y-intercept"], "cos 0 = 1 is a maximum."),
  mc("Where should you start reading d for a sine equation with a > 0?", "where the graph crosses its axis going up", ["at a maximum", "at a minimum", "where the graph crosses its axis going down"], "sin 0 = 0, increasing."),
  num("A sine graph (a > 0) crosses its axis going up at x = 20°. What is d?", 20, "Start of a sine cycle."),
  tf("To start a cosine equation at a minimum, use a negative value of a.", true, "−cos starts at its minimum."),
  num("A sinusoid has max 3 and min −7. What is c?", -2, "(3 − 7)/2."),
  num("Read |a| from the graph.", 3, "Max 4, min −2.", waveD((x) => 3 * sin(x) + 1, { xmin: 0, xmax: 360, ymin: -3, ymax: 5 }, { x: 45, y: 1 }, { pts: [[90, 4], [270, -2]] })),
  num("Read k from the graph.", 3, "Period 120°.", waveD((x) => 2 * cos(3 * x), { xmin: 0, xmax: 360, ymin: -3, ymax: 3 }, { x: 30, y: 1 }, { pts: [[0, 2], [120, 2]] })),
];

export const M = [
  mc("Which equation has a maximum at (0°, 5) and the next minimum at (90°, −1)?", S`\(y=3\cos2x+2\)`, [S`\(y=3\cos x+2\)`, S`\(y=6\cos2x-1\)`, S`\(y=3\sin2x+2\)`], "a = 3, c = 2, period 180°."),
  mc("Which equation has a maximum at (60°, 4) and the next minimum at (240°, −4)?", S`\(y=4\cos(x-60^\circ)\)`, [S`\(y=4\cos(x+60^\circ)\)`, S`\(y=4\sin(x-60^\circ)\)`, S`\(y=4\cos(2(x-60^\circ))\)`], "Period 360°, cosine from the max."),
  num("A sinusoid has a maximum at x = 10° and the next minimum at x = 40°. What is k?", 6, "Period 60°."),
  num("A cosine graph (a > 0) has a maximum at x = −20°. Using that maximum, what is d?", -20, "d = −20°."),
  mc("Which equation is a sine function with amplitude 4, period 90°, phase shift 10° right and axis y = 1?", S`\(y=4\sin(4(x-10^\circ))+1\)`, [S`\(y=4\sin(4x-10^\circ)+1\)`, S`\(y=4\sin(\frac x4-10^\circ)+1\)`, S`\(y=1\sin(4(x-10^\circ))+4\)`], "k = 4, factored with d = 10°."),
  mc("Which cosine equation has range 1 ≤ y ≤ 7, period 240° and a maximum at x = 0°?", S`\(y=3\cos(1.5x)+4\)`, [S`\(y=3\cos(240x)+4\)`, S`\(y=4\cos(1.5x)+3\)`, S`\(y=6\cos(1.5x)+1\)`], "a = 3, c = 4, k = 360/240."),
  num("A model y = a cos(kt) + c has a max of 18 at t = 0 and the next min of 6 at t = 5. What is k?", 36, "Period 10."),
  num("A model y = a cos(kt) + c has a max of 18 at t = 0 and the next min of 6 at t = 5. What is a?", 6, "(18 − 6)/2."),
  num("A model y = a cos(kt) + c has a max of 18 at t = 0 and the next min of 6 at t = 5. What is c?", 12, "(18 + 6)/2."),
  tf(S`\(y=2\sin(x-90^\circ)\) has the same graph as \(y=-2\cos x\).`, true, "sin(x − 90°) = −cos x."),
  tf(S`\(y=3\cos(x+90^\circ)\) has the same graph as \(y=3\sin x\).`, false, "cos(x + 90°) = −sin x."),
  ms("Which equations have a maximum at (0°, 2) and a minimum at (180°, −2)? Select all.", [S`\(y=2\cos x\)`, S`\(y=-2\cos(x-180^\circ)\)`, S`\(y=2\sin(x+90^\circ)\)`, S`\(y=2\sin x\)`, S`\(y=2\cos(x+360^\circ)\)`], [0, 1, 2, 4], "2 sin x starts at 0."),
  num("A sinusoid has period 200° and a maximum at x = 50°. For a sine equation with a > 0, what is the smallest non-negative d?", 0, "The rising axis crossing is a quarter period (50°) before the max."),
  num("A sinusoid has period 120° and a maximum at x = 100°. For a sine equation with a > 0, what is d (closest to the max, below it)?", 70, "100 − 30."),
  num("A graph has a minimum at x = 30°. For a cosine equation with a < 0, what is d?", 30, "−cos starts at its minimum."),
  num("A graph has min −3 at x = 30° and max 5. For a cosine equation starting at that minimum, what is a?", -4, "|a| = 4, negative to start at a min."),
  mc("A temperature has period 24 h, a maximum of 20° at t = 14 and a minimum of 8°. Which model fits?", S`\(T=6\cos(15(t-14))+14\)`, [S`\(T=6\cos(24(t-14))+14\)`, S`\(T=12\cos(15(t-14))+8\)`, S`\(T=6\sin(15(t-14))+14\)`], "a = 6, c = 14, k = 15, d = 14."),
  num(S`Check a point: evaluate \(y=3\cos(2(x-30^\circ))+1\) at \(x=120^\circ\).`, -2, "3 cos 180° + 1."),
  num("A cosine graph has its maximum where shown. What is d (degrees)?", 30, "Max at 30°.", waveD((x) => 2 * cos(x - 30) + 1, { xmin: -60, xmax: 390, ymin: -2, ymax: 4 }, { x: 30, y: 1 }, { pts: [[30, 3]] })),
  num("Read c from the graph.", 3, "Halfway between 5 and 1.", waveD((x) => 2 * sin(2 * x) + 3, { xmin: 0, xmax: 360, ymin: 0, ymax: 6 }, { x: 45, y: 1 })),
];
