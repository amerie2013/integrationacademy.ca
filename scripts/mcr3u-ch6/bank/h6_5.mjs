// 6.5 Graphing Sinusoidal Functions Using Transformations — 20 hard questions (new topic)
import { mc, ms, num, tf } from "./kit.mjs";
import { waveD, sin, cos, acos, rd } from "./fig.mjs";

const S = String.raw;

export const TOPIC = "6.5 Graphing Sinusoidal Functions Using Transformations";
export const Q = [
  num(S`The parent point \((270^\circ,-1)\) is mapped onto \(y=-4\sin\left(\frac12(x+60^\circ)\right)+3\). What is the image's x-coordinate?`, 480, "270 × 2 − 60."),
  num(S`The parent point \((270^\circ,-1)\) is mapped onto \(y=-4\sin\left(\frac12(x+60^\circ)\right)+3\). What is the image's y-coordinate?`, 7, "−4(−1) + 3."),
  num(S`At what x > 15° does \(y=-3\cos(2(x-15^\circ))+2\) first reach its maximum?`, 105, "cos = −1: 2(x − 15°) = 180°."),
  num(S`Find the larger x-intercept of \(y=2\sin x+\sqrt3\) for \(0^\circ\le x\le360^\circ\).`, 300, "sin x = −√3/2: 240° and 300°."),
  num(S`Find the larger x-intercept of \(y=2\cos2x-1\) for \(0^\circ\le x\le180^\circ\).`, 150, "cos 2x = ½: 2x = 60° or 300°."),
  num(S`How many x-intercepts does \(y=3\sin2x+3\) have for \(0^\circ\le x\le360^\circ\)?`, 2, "It touches the axis at its minimums, 135° and 315°."),
  mc(S`Which are the key points of \(y=2\cos\left(\frac13(x-90^\circ)\right)-1\)?`, "(90°, 1), (360°, −1), (630°, −3), (900°, −1), (1170°, 1)", ["(90°, 1), (120°, −1), (150°, −3), (180°, −1), (210°, 1)", "(−90°, 1), (180°, −1), (450°, −3), (720°, −1), (990°, 1)", "(90°, 2), (360°, 0), (630°, −2), (900°, 0), (1170°, 2)"], "x → 3x + 90; y → 2y − 1."),
  num(S`What is the sum of the x-coordinates of the five key points of one cycle of \(y=\sin2x\) starting at 0°?`, 450, "0 + 45 + 90 + 135 + 180."),
  num(S`At what x between 0° and 120° does \(y=-2\sin3x+4\) reach its maximum?`, 90, "sin 3x = −1: 3x = 270°."),
  tf(S`The graph of \(y=\sin(2(x-45^\circ))\) is the same as the graph of \(y=-\cos2x\).`, true, "sin(2x − 90°) = −cos 2x."),
  ms(S`Which are key points of \(y=-\cos2x+1\)? Select all.`, ["(0°, 0)", "(45°, 1)", "(90°, 2)", "(135°, 1)", "(180°, 0)", "(90°, 0)"], [0, 1, 2, 3, 4], "y → −y + 1, x → x/2."),
  num(S`How many complete cycles of \(y=2\sin\frac x4\) occur for \(0^\circ\le x\le2880^\circ\)?`, 2, "Period 1440°."),
  num(S`How far apart (degrees) are consecutive maximums of \(y=\cos6x\)?`, 60, "One period."),
  num(S`Find the y-intercept of \(y=-5\sin(3(x+10^\circ))+2\).`, -0.5, "−5 sin 30° + 2.", null, 0.001),
  num(S`Find the smallest x in \(0^\circ\le x\le180^\circ\) where \(y=4\cos(2(x-30^\circ))+1\) equals 1.`, 75, "cos = 0: 2(x − 30°) = 90°."),
  num("At what x is the first maximum after 0° (degrees)?", 75, "y = 2 sin(2(x − 30°)) + 1: 90 ÷ 2 + 30.", waveD((x) => 2 * sin(2 * (x - 30)) + 1, { xmin: 0, xmax: 270, ymin: -2, ymax: 4 }, { x: 15, y: 1 })),
  num("The graph is y = 3 cos(0.5x) − 1. Find its smallest positive x-intercept (2 decimals).", rd(2 * acos(1 / 3)), "cos(0.5x) = ⅓.", waveD((x) => 3 * cos(0.5 * x) - 1, { xmin: 0, xmax: 720, ymin: -5, ymax: 3 }, { x: 90, y: 1 }), 0.01),
  num("For 0° < x < 360°, how many times does the graph touch the x-axis?", 2, "y = −2 cos 3x + 2 touches at 120° and 240°.", waveD((x) => -2 * cos(3 * x) + 2, { xmin: 0, xmax: 360, ymin: -1, ymax: 5 }, { x: 30, y: 1 })),
  num("Read the difference between the maximum and minimum of the graph.", 8, "y = 4 sin(x − 45°) + 2: 2 × 4.", waveD((x) => 4 * sin(x - 45) + 2, { xmin: 0, xmax: 405, ymin: -3, ymax: 7 }, { x: 45, y: 1 })),
  num(S`The cosine point \((90^\circ,0)\) is mapped onto \(y=5\cos(4(x+15^\circ))-2\). What is the image's x-coordinate?`, 7.5, "90 ÷ 4 − 15.", null, 0.001),
];
