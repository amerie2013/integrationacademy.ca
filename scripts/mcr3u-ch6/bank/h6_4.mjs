// 6.4 Transformations of Sinusoidal Functions — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { waveD, sin, cos, rd } from "./fig.mjs";

const S = String.raw;

export const TOPIC = "6.4 Transformations of Sinusoidal Functions";
export const Q = [
  num(S`What is the phase shift of \(y=\sin(4x+100^\circ)\) (degrees, right positive)?`, -25, "4(x + 25°)."),
  num(S`What is the period of \(y=\cos(0.75x-30^\circ)\) in degrees?`, 480, "360 ÷ 0.75."),
  num(S`What is the phase shift of \(y=\cos(0.75x-30^\circ)\) (degrees, right positive)?`, 40, "0.75(x − 40°)."),
  num(S`What is the maximum value of \(y=-3\sin(2x-60^\circ)+1\)?`, 4, "1 + 3."),
  num(S`At what x > 30° does \(y=-3\sin(2(x-30^\circ))+1\) first reach its maximum?`, 165, "The max happens when sin = −1: 2(x − 30°) = 270°."),
  num(S`Find the y-intercept of \(y=4\cos(2(x+30^\circ))-1\).`, 1, "4 cos 60° − 1."),
  num(S`Find the y-intercept of \(y=-2\sin(3(x-20^\circ))+5\) (2 decimals).`, rd(-2 * sin(-60) + 5), "−2 sin(−60°) + 5 = 5 + √3.", null, 0.01),
  mc("Which equation has amplitude 2, period 120°, phase shift 20° right and axis y = −1?", S`\(y=2\sin(3(x-20^\circ))-1\)`, [S`\(y=2\sin(3x-20^\circ)-1\)`, S`\(y=2\sin(\frac x3-20^\circ)-1\)`, S`\(y=-1\sin(3(x-20^\circ))+2\)`], "k = 3, factored form with d = 20°."),
  ms(S`Which expressions equal \(\sin x\) for every x? Select all.`, [S`\(\cos(x-90^\circ)\)`, S`\(-\sin(x+180^\circ)\)`, S`\(\sin(x+180^\circ)\)`, S`\(-\cos(x+90^\circ)\)`, S`\(\cos(90^\circ-x)\)`], [0, 1, 3, 4], "sin(x + 180°) = −sin x."),
  tf(S`\(y=\sin(2x-60^\circ)\) has a phase shift of 60° to the right.`, false, "Factor: 2(x − 30°), so 30° right."),
  num(S`How many maximum points does \(y=\sin4x\) have for \(0^\circ\le x\le360^\circ\)?`, 4, "Four cycles, one max each."),
  num(S`How many complete cycles of \(y=\cos(2.5x)\) occur for \(0^\circ\le x\le720^\circ\)?`, 5, "Period 144°; 720 ÷ 144."),
  num("A model uses t in hours and has a period of 24 h. What is k?", 15, "360 ÷ 24."),
  num(S`What is the difference between the maximum and minimum of \(y=-6\sin x+2\)?`, 12, "2|a|."),
  num(S`Evaluate \(y=2\cos(2(x-45^\circ))+3\) at \(x=45^\circ\).`, 5, "2 cos 0° + 3."),
  num(S`The graph is \(y=2\sin(kx)+1\). Find k.`, 4, "Period 90°.", waveD((x) => 2 * sin(4 * x) + 1, { xmin: 0, xmax: 180, ymin: -2, ymax: 4 }, { x: 15, y: 1 })),
  num(S`Write the graph as \(y=a\cos x+c\). What is a?`, -3, "It starts at its minimum, so a is negative.", waveD((x) => -3 * cos(x) + 2, { xmin: 0, xmax: 360, ymin: -2, ymax: 6 }, { x: 45, y: 1 }, { pts: [[0, -1], [180, 5]] })),
  num(S`The graph is \(y=\sin(x-d)\). Find the smallest positive d (degrees).`, 60, "It rises through the axis at 60°.", waveD((x) => sin(x - 60), { xmin: 0, xmax: 420, ymin: -1.5, ymax: 1.5 }, { x: 30, y: 0.5 }, { pts: [[60, 0]] })),
  num("Find the period of this stretched and translated sine graph (degrees).", 720, "Max to next max.", waveD((x) => 4 * sin(0.5 * x) - 2, { xmin: 0, xmax: 1440, ymin: -7, ymax: 3 }, { x: 180, y: 1 })),
  num(S`What vertical translation maps the range of \(y=2\sin x+3\) onto \(-1\le y\le3\)?`, -2, "The axis must move from 3 to 1."),
];
