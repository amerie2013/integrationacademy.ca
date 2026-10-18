// 6.4 Transformations of Sinusoidal Functions — 20 easy + 20 medium questions
import { mc, ms, num, tf } from "./kit.mjs";
import { waveD, sin, cos } from "./fig.mjs";

const S = String.raw;

export const E = [
  num(S`What is the amplitude of \(y=6\sin x\)?`, 6, "|a|."),
  num(S`What is the amplitude of \(y=-0.25\cos x\)?`, 0.25, "|−0.25|.", null, 0.0001),
  num(S`What is the period of \(y=\sin5x\) in degrees?`, 72, "360 ÷ 5."),
  num(S`What is the period of \(y=\cos\frac x2\) in degrees?`, 720, "360 ÷ ½."),
  num(S`What is the y-value of the axis of \(y=\sin x-7\)?`, -7, "c = −7."),
  num(S`In \(y=\cos(x-75^\circ)\), what is d?`, 75, "75° right."),
  num(S`In \(y=\sin(x+120^\circ)\), what is d?`, -120, "x − d = x + 120°."),
  mc("What does a negative value of a do to a sine graph?", "reflects it in its axis", ["shifts it left", "shortens its period", "moves it down"], "Every y is flipped."),
  mc(S`If \(k=4\), what is the period of \(y=\sin kx\)?`, "90°", ["4°", "1440°", "360°"], "360 ÷ 4."),
  tf("Changing c changes the period of a sinusoid.", false, "c is a vertical translation."),
  num(S`What is the maximum value of \(y=2\sin x+5\)?`, 7, "5 + 2."),
  num(S`What is the minimum value of \(y=2\sin x+5\)?`, 3, "5 − 2."),
  mc(S`What is the range of \(y=3\cos x-1\)?`, S`\(-4\le y\le2\)`, [S`\(-3\le y\le3\)`, S`\(-1\le y\le3\)`, S`\(-4\le y\le-1\)`], "−1 ± 3."),
  num(S`What is the period of \(y=3\sin x\) in degrees?`, 360, "a does not change the period."),
  tf(S`\(y=\sin(x-30^\circ)\) is \(y=\sin x\) shifted 30° to the right.`, true, "d = 30°."),
  num(S`What is the amplitude of \(y=4\sin2x-9\)?`, 4, "|a|."),
  num(S`What is the period of \(y=\cos\frac x5\) in degrees?`, 1800, "360 ÷ ⅕."),
  mc("Which has a period of 180°?", S`\(y=\sin2x\)`, [S`\(y=2\sin x\)`, S`\(y=\sin\frac x2\)`, S`\(y=\sin x+2\)`], "k = 2."),
  num("Read the amplitude of the graph.", 3, "Max 4, min −2.", waveD((x) => 3 * sin(x) + 1, { xmin: 0, xmax: 360, ymin: -3, ymax: 5 }, { x: 45, y: 1 })),
  num("Read the period of the graph (degrees).", 180, "One cycle from 0° to 180°.", waveD((x) => sin(2 * x), { xmin: 0, xmax: 360, ymin: -1.5, ymax: 1.5 }, { x: 45, y: 0.5 })),
];

export const M = [
  num(S`What is the phase shift of \(y=\sin(3x-90^\circ)\) (degrees, right positive)?`, 30, "3(x − 30°)."),
  num(S`What is the phase shift of \(y=\cos(2x+70^\circ)\) (degrees, right positive)?`, -35, "2(x + 35°)."),
  num(S`What is the period of \(y=-2\sin(0.4x)+1\) in degrees?`, 900, "360 ÷ 0.4."),
  num(S`What is the minimum value of \(y=-5\cos x+2\)?`, -3, "2 − 5."),
  num(S`What is the maximum value of \(y=-5\cos x+2\)?`, 7, "2 + 5."),
  mc(S`What is the range of \(y=0.5\sin3x-4\)?`, S`\(-4.5\le y\le-3.5\)`, [S`\(-4\le y\le0.5\)`, S`\(-5\le y\le-3\)`, S`\(-3.5\le y\le4.5\)`], "−4 ± 0.5."),
  mc(S`Which describes \(y=3\cos(2(x-10^\circ))+4\)?`, "amplitude 3, period 180°, 10° right, axis y = 4", ["amplitude 3, period 720°, 10° left, axis y = 4", "amplitude 4, period 180°, 10° right, axis y = 3", "amplitude 3, period 180°, 20° right, axis y = 4"], "Read a, 360/k, d, c."),
  num(S`Evaluate \(y=2\sin(x-30^\circ)+1\) at \(x=120^\circ\).`, 3, "2 sin 90° + 1."),
  num(S`Evaluate \(y=-3\cos2x+1\) at \(x=90^\circ\).`, 4, "−3 cos 180° + 1."),
  ms("Which have a period of 120°? Select all.", [S`\(y=\sin3x\)`, S`\(y=\cos(3x+60^\circ)\)`, S`\(y=3\sin x\)`, S`\(y=\sin\frac x3\)`, S`\(y=2\cos(3(x-10^\circ))+5\)`], [0, 1, 4], "Only k = 3 gives 120°."),
  tf(S`\(-\sin x\) and \(\sin(-x)\) have the same graph.`, true, "Sine is an odd function: sin(−x) = −sin x."),
  tf(S`The graph of \(y=\cos(x+360^\circ)\) is different from the graph of \(y=\cos x\).`, false, "A shift of one full period changes nothing."),
  num("What value of k gives a period of 40°?", 9, "360 ÷ 40."),
  num(S`A sinusoid has range \(2\le y\le8\). What is c?`, 5, "(2 + 8)/2."),
  num(S`A sinusoid has range \(2\le y\le8\). What is |a|?`, 3, "(8 − 2)/2."),
  mc("Which is the graph of y = cos x shifted 45° left?", S`\(y=\cos(x+45^\circ)\)`, [S`\(y=\cos(x-45^\circ)\)`, S`\(y=\cos x+45\)`, S`\(y=\cos x-45\)`], "x − (−45°)."),
  num(S`Where is the first maximum of \(y=\sin(x-30^\circ)\) to the right of 0°?`, 120, "90° + 30°."),
  num(S`Where is the first maximum of \(y=\cos(x-50^\circ)\) to the right of 0°?`, 50, "0° + 50°."),
  num("Using a cosine with a > 0, what phase shift (degrees) does the graph show?", 45, "The maximum is at 45°.", waveD((x) => 2 * cos(x - 45) + 1, { xmin: -90, xmax: 405, ymin: -2, ymax: 4 }, { x: 45, y: 1 }, { pts: [[45, 3]] })),
  num("Read the maximum value of the graph.", 5, "Axis 3, amplitude 2.", waveD((x) => -2 * sin(x) + 3, { xmin: 0, xmax: 360, ymin: 0, ymax: 6 }, { x: 45, y: 1 })),
];
