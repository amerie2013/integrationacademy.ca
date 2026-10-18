// 6.6 Equations of Sinusoidal Functions — 20 hard questions (new topic)
import { mc, ms, num, tf } from "./kit.mjs";
import { waveD, sin, cos } from "./fig.mjs";

const S = String.raw;

export const TOPIC = "6.6 Equations of Sinusoidal Functions";
export const Q = [
  mc("A sinusoid has a maximum at (25°, 9) and the next minimum at (70°, 3). Which equation fits?", S`\(y=3\cos(4(x-25^\circ))+6\)`, [S`\(y=3\cos(2(x-25^\circ))+6\)`, S`\(y=6\cos(4(x-25^\circ))+3\)`, S`\(y=3\cos(4(x+25^\circ))+6\)`], "Half period 45°, period 90°, k = 4."),
  num("For the same sinusoid (max at 25°, period 90°), what is d in a sine equation with a > 0?", 2.5, "The rising crossing is 22.5° before the max.", null, 0.001),
  mc("A graph has a minimum at (0°, −1) and the next maximum at (45°, 5). Which equation fits?", S`\(y=-3\cos4x+2\)`, [S`\(y=3\cos4x+2\)`, S`\(y=-3\cos2x+2\)`, S`\(y=-6\cos4x+5\)`], "a = −3 (min start), c = 2, period 90°."),
  num("A sinusoid completes exactly 3 cycles in 540°. What is k?", 2, "Period 180°."),
  num("A cosine graph (a > 0) has a maximum at x = 400° and period 360°. What is the smallest non-negative d?", 40, "400 − 360."),
  tf(S`\(4\sin(2(x+45^\circ))=4\cos2x\) for every x.`, true, "sin(2x + 90°) = cos 2x."),
  ms(S`Which describe \(y=-2\cos3x+1\)? Select all.`, ["minimum at x = 0°", "maximum at x = 60°", "period 120°", "axis y = 1", "range −1 ≤ y ≤ 3", "maximum at x = 0°"], [0, 1, 2, 3, 4], "a < 0: it starts at its minimum."),
  num(S`Evaluate \(y=5\cos(30(t-1))+10\) at \(t=7\).`, 5, "5 cos 180° + 10."),
  num("A sinusoid has axis y = 4, passes through (0°, 4) going up, and has its first maximum 7 at x = 30°. What is k?", 3, "Quarter period 30°, period 120°."),
  num("For that sinusoid (axis 4, rising through (0°, 4), first max at 30°), what is the period (degrees)?", 120, "4 × 30."),
  mc("Daylight peaks at 14.8 h on day 172 and bottoms at 9.6 h. Which model fits (t in days)?", S`\(L=2.6\cos\left(\frac{360}{365}(t-172)\right)+12.2\)`, [S`\(L=5.2\cos\left(\frac{360}{365}(t-172)\right)+9.6\)`, S`\(L=2.6\cos(365(t-172))+12.2\)`, S`\(L=2.6\sin\left(\frac{360}{365}(t-172)\right)+12.2\)`], "a = 2.6, c = 12.2, cosine from the max."),
  num("For that daylight model (max 14.8 h, min 9.6 h), what is the amplitude (h)?", 2.6, "(14.8 − 9.6)/2.", null, 0.001),
  num("A model has a maximum of 30 at t = 3 and the next minimum of 10 at t = 9. What is its value at t = 6?", 20, "Halfway in time: on the axis."),
  num("For the same model (max 30 at t = 3, min 10 at t = 9), what is its value at t = 15?", 30, "One period after t = 3."),
  num("For the same model (max at t = 3, next min at t = 9), what is k?", 30, "Period 12."),
  num("Write a sine equation for the graph. What is k?", 2, "Max (45°, 6), min (135°, 0): period 180°.", waveD((x) => 3 * sin(2 * x) + 3, { xmin: 0, xmax: 360, ymin: -1, ymax: 7 }, { x: 45, y: 1 }, { pts: [[45, 6], [135, 0]] })),
  num("The graph lies entirely below the x-axis. Read the value of c.", -3, "Halfway between −1 and −5.", waveD((x) => 2 * cos(2 * (x + 30)) - 3, { xmin: -90, xmax: 270, ymin: -6, ymax: 0 }, { x: 30, y: 1 })),
  num("Writing the graph as y = a cos x + c, what is a?", -4, "It starts at its minimum.", waveD((x) => -4 * cos(x) + 1, { xmin: 0, xmax: 360, ymin: -4, ymax: 6 }, { x: 45, y: 1 }, { pts: [[0, -3], [180, 5]] })),
  num("Read the period of the graph (degrees).", 240, "y = 2 sin(1.5(x − 20°)): max to next max.", waveD((x) => 2 * sin(1.5 * (x - 20)), { xmin: 0, xmax: 540, ymin: -3, ymax: 3 }, { x: 30, y: 1 })),
  num(S`What is the smallest positive d for which \(5\cos(x-d)=5\sin x\) for every x?`, 90, "sin x = cos(x − 90°)."),
];
