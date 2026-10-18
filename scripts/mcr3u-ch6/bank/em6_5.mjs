// 6.5 Graphing Sinusoidal Functions Using Transformations — 20 easy + 20 medium questions
import { mc, ms, num, tf } from "./kit.mjs";
import { waveD, sin, cos } from "./fig.mjs";

const S = String.raw;

export const E = [
  num(S`The parent point \((90^\circ,1)\) is mapped onto \(y=\sin x-4\). What is the image's y-coordinate?`, -3, "1 − 4."),
  num(S`The parent point \((270^\circ,-1)\) is mapped onto \(y=2\sin x\). What is the image's y-coordinate?`, -2, "2(−1)."),
  num(S`The parent point \((180^\circ,0)\) is mapped onto \(y=\sin2x\). What is the image's x-coordinate?`, 90, "180 ÷ 2."),
  num(S`The parent point \((90^\circ,1)\) is mapped onto \(y=\sin(x+30^\circ)\). What is the image's x-coordinate?`, 60, "90 − 30."),
  num(S`The parent point \((360^\circ,0)\) is mapped onto \(y=\sin\frac x2\). What is the image's x-coordinate?`, 720, "360 ÷ ½."),
  num(S`The cosine point \((0^\circ,1)\) is mapped onto \(y=-\cos x+3\). What is the image's y-coordinate?`, 2, "−1 + 3."),
  mc(S`Which are the five key points of one cycle of \(y=\sin x\)?`, "(0°, 0), (90°, 1), (180°, 0), (270°, −1), (360°, 0)", ["(0°, 1), (90°, 0), (180°, −1), (270°, 0), (360°, 1)", "(0°, 0), (180°, 1), (360°, 0), (540°, −1), (720°, 0)", "(0°, 0), (45°, 1), (90°, 0), (135°, −1), (180°, 0)"], "Quarter-turn points of the sine wave."),
  mc(S`Which are the five key points of one cycle of \(y=\cos x\)?`, "(0°, 1), (90°, 0), (180°, −1), (270°, 0), (360°, 1)", ["(0°, 0), (90°, 1), (180°, 0), (270°, −1), (360°, 0)", "(0°, 1), (180°, 0), (360°, −1), (540°, 0), (720°, 1)", "(0°, −1), (90°, 0), (180°, 1), (270°, 0), (360°, −1)"], "Cosine starts at its maximum."),
  num(S`How far apart (degrees) are consecutive key points of \(y=\sin3x\)?`, 30, "Period 120°, quarter period 30°."),
  num(S`How far apart (degrees) are consecutive key points of \(y=\cos\frac x2\)?`, 180, "Period 720°, quarter period 180°."),
  tf(S`The axis of \(y=2\sin x+5\) is \(y=5\).`, true, "c = 5."),
  num(S`What is the y-intercept of \(y=3\cos x-1\)?`, 2, "3(1) − 1."),
  num(S`What is the y-intercept of \(y=2\sin x+4\)?`, 4, "2(0) + 4."),
  num(S`At what x between 0° and 360° is the first maximum of \(y=\sin(x+60^\circ)\)?`, 30, "90° − 60°."),
  num(S`What is the minimum value of \(y=3\sin x-2\)?`, -5, "−2 − 3."),
  mc("Which rule maps a parent point onto y = a sin(k(x − d)) + c?", S`\((x,y)\to\left(\frac xk+d,\ ay+c\right)\)`, [S`\((x,y)\to(kx+d,\ ay+c)\)`, S`\((x,y)\to\left(\frac xk-d,\ \frac ya+c\right)\)`, S`\((x,y)\to(x+d,\ ky+c)\)`], "Divide x by k, add d; multiply y by a, add c."),
  num(S`How many complete cycles of \(y=\sin3x\) are there for \(0^\circ\le x\le360^\circ\)?`, 3, "Period 120°."),
  tf(S`To graph \(y=\sin2x\), multiply each x-coordinate of the parent key points by 2.`, false, "Divide by 2: the graph is compressed."),
  num("Read the y-coordinate of the graph at x = 270°.", -1, "2(−1) + 1.", waveD((x) => 2 * sin(x) + 1, { xmin: 0, xmax: 360, ymin: -2, ymax: 4 }, { x: 45, y: 1 }, { pts: [[0, 1], [90, 3], [180, 1], [270, -1], [360, 1]] })),
  num("At what x is the first minimum of the graph (degrees)?", 90, "y = cos 2x: min at 180 ÷ 2.", waveD((x) => cos(2 * x), { xmin: 0, xmax: 360, ymin: -1.5, ymax: 1.5 }, { x: 45, y: 0.5 })),
];

export const M = [
  num(S`The parent point \((90^\circ,1)\) is mapped onto \(y=3\sin(2(x-15^\circ))+1\). What is the image's x-coordinate?`, 60, "90 ÷ 2 + 15."),
  num(S`The parent point \((90^\circ,1)\) is mapped onto \(y=3\sin(2(x-15^\circ))+1\). What is the image's y-coordinate?`, 4, "3(1) + 1."),
  num(S`The cosine point \((180^\circ,-1)\) is mapped onto \(y=2\cos3x-1\). What is the image's x-coordinate?`, 60, "180 ÷ 3."),
  num(S`The cosine point \((180^\circ,-1)\) is mapped onto \(y=2\cos3x-1\). What is the image's y-coordinate?`, -3, "2(−1) − 1."),
  mc(S`Which are the key points of \(y=-2\sin x+1\)?`, "(0°, 1), (90°, −1), (180°, 1), (270°, 3), (360°, 1)", ["(0°, 1), (90°, 3), (180°, 1), (270°, −1), (360°, 1)", "(0°, −1), (90°, −3), (180°, −1), (270°, 1), (360°, −1)", "(0°, 1), (90°, −2), (180°, 1), (270°, 2), (360°, 1)"], "y → −2y + 1."),
  mc(S`Which are the key points of \(y=\cos(x+90^\circ)\)?`, "(−90°, 1), (0°, 0), (90°, −1), (180°, 0), (270°, 1)", ["(90°, 1), (180°, 0), (270°, −1), (360°, 0), (450°, 1)", "(0°, 1), (90°, 0), (180°, −1), (270°, 0), (360°, 1)", "(−90°, 0), (0°, 1), (90°, 0), (180°, −1), (270°, 0)"], "Each x − 90."),
  num(S`What is the smallest positive x-intercept of \(y=\sin x-0.5\)?`, 30, "sin x = 0.5."),
  num(S`At what x is the first maximum of \(y=2\sin3x+1\) after 0°?`, 30, "90 ÷ 3."),
  num(S`At what x is the first minimum of \(y=\cos(2(x-20^\circ))\) after 20°?`, 110, "180 ÷ 2 + 20."),
  num(S`What is the y-intercept of \(y=4\sin(x+30^\circ)-1\)?`, 1, "4 sin 30° − 1."),
  num(S`What is the y-intercept of \(y=-2\cos(2(x-30^\circ))+3\)?`, 2, "−2 cos(−60°) + 3."),
  ms(S`Which points lie on \(y=2\sin2x+1\)? Select all.`, ["(45°, 3)", "(90°, 1)", "(135°, −1)", "(0°, 0)", "(180°, 1)"], [0, 1, 2, 4], "At 0°: y = 1, not 0."),
  tf(S`The key points of \(y=\sin3x\) are 30° apart.`, true, "Quarter of 120°."),
  num(S`What is the distance between the maximum and minimum values of \(y=-4\cos x+1\)?`, 8, "2|a|."),
  num(S`How many x-intercepts does \(y=\sin x+0.5\) have for \(0^\circ\le x\le360^\circ\)?`, 2, "210° and 330°."),
  num(S`How many x-intercepts does \(y=\cos x+1\) have for \(0^\circ\le x\le360^\circ\)?`, 1, "It only touches at 180°."),
  mc(S`To graph \(y=\sin(2(x-30^\circ))\) from key points, what do you do to each x-coordinate?`, "divide by 2, then add 30", ["add 30, then divide by 2", "multiply by 2, then add 30", "divide by 2, then subtract 30"], "k first, then d."),
  num(S`How far apart (degrees) are consecutive key points of \(y=\sin(0.25x)\)?`, 360, "Period 1440°, quarter 360°."),
  num("At what x does the graph reach its first maximum after 0°?", 60, "y = 3 cos(x − 60°) − 1.", waveD((x) => 3 * cos(x - 60) - 1, { xmin: 0, xmax: 420, ymin: -5, ymax: 3 }, { x: 30, y: 1 })),
  num("Read the y-value of the graph at x = 45°.", 1, "y = −sin 2x + 2 at 45°.", waveD((x) => -sin(2 * x) + 2, { xmin: 0, xmax: 360, ymin: 0, ymax: 4 }, { x: 45, y: 0.5 }, { pts: [[45, 1, "(45°, ?)"]] })),
];
