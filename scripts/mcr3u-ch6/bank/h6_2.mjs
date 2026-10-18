// 6.2 Graphs of Sine and Cosine — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { waveD, sin, cos, rd } from "./fig.mjs";

const S = String.raw;

export const TOPIC = "6.2 Graphs of Sine and Cosine";
export const Q = [
  num(S`How many solutions does \(\sin x=\cos x\) have for \(0^\circ\le x\le1080^\circ\)?`, 6, "Two per cycle (45° and 225° + multiples of 360°)."),
  num(S`Find x in \(360^\circ\le x\le720^\circ\) with \(\cos x=-1\).`, 540, "180° + 360°."),
  num(S`How many solutions does \(2\sin x=1\) have for \(-360^\circ\le x\le360^\circ\)?`, 4, "−330°, −210°, 30°, 150°."),
  mc(S`For \(0^\circ\le x\le360^\circ\), where is \(\sin x>0.5\)?`, S`\(30^\circ<x<150^\circ\)`, [S`\(0^\circ<x<30^\circ\)`, S`\(150^\circ<x<360^\circ\)`, S`\(30^\circ<x<330^\circ\)`], "Between the two solutions of sin x = 0.5."),
  mc(S`For \(0^\circ\le x\le360^\circ\), where is \(\cos x<-0.5\)?`, S`\(120^\circ<x<240^\circ\)`, [S`\(60^\circ<x<300^\circ\)`, S`\(0^\circ<x<120^\circ\)`, S`\(240^\circ<x<360^\circ\)`], "Between the two solutions of cos x = −0.5."),
  num(S`For how many degrees in each cycle is \(\sin x\ge0.5\)?`, 120, "From 30° to 150°."),
  num(S`What fraction of each cycle is \(\cos x>0\)? Enter a decimal.`, 0.5, "From −90° to 90°: half a cycle."),
  num(S`What is the maximum value of \(\sin x+\cos x\) (2 decimals)?`, rd(Math.SQRT2), "At 45°: √2.", null, 0.006),
  tf("The graph of y = cos x is symmetric about the y-axis.", true, "cos(−x) = cos x."),
  tf("The graph of y = sin x is symmetric about the y-axis.", false, "sin(−x) = −sin x: it is symmetric about the origin instead."),
  num(S`Evaluate \(\sin(-1110^\circ)\).`, -0.5, "−1110° + 1440° = 330°."),
  num(S`Evaluate \(\cos2025^\circ\) to 4 decimals.`, rd(cos(225), 4), "2025° − 1800° = 225°.", null, 0.0001),
  num("A nail on a water wheel of radius 1 m starts level with the centre (3 o'clock) and turns counterclockwise; its height is sin θ. Find its height after turning 1500° (4 decimals).", rd(sin(60), 4), "1500° − 1440° = 60°.", null, 0.0001),
  ms(S`Which x satisfy \(\cos x=\cos40^\circ\)? Select all.`, ["40°", "320°", "400°", "−40°", "140°"], [0, 1, 2, 3], "cos 140° = −cos 40°."),
  num(S`Where in \(0^\circ\le x\le360^\circ\) is \(y=\cos x\) decreasing most steeply?`, 90, "At the zero between the max and the min."),
  num("How many intersections of y = sin x and y = cos x are shown?", 4, "45°, 225°, 405°, 585°.", waveD([(x) => sin(x), (x) => cos(x)], { xmin: 0, xmax: 720, ymin: -1.5, ymax: 1.5 }, { x: 90, y: 0.5 })),
  num("The line y = 0.8 meets y = sin x at A and B (0° < x < 180°). What is the sum of their x-coordinates?", 180, "B = 180° − A.", waveD((x) => sin(x), { xmin: 0, xmax: 360, ymin: -1.5, ymax: 1.5 }, { x: 30, y: 0.5 }, { lines: [{ m: 0, b: 0.8, color: "amber", dash: true }], pts: [[53.13, 0.8, "A"], [126.87, 0.8, "B"]] })),
  num("How many times does the line y = −0.3 meet the cosine graph shown?", 4, "Two per cycle.", waveD((x) => cos(x), { xmin: 0, xmax: 720, ymin: -1.5, ymax: 1.5 }, { x: 90, y: 0.5 }, { lines: [{ m: 0, b: -0.3, color: "amber", dash: true }] })),
  num("Read the y-coordinate of the marked point on y = cos x.", 0.5, "cos(−60°) = cos 60°.", waveD((x) => cos(x), { xmin: -360, xmax: 360, ymin: -1.5, ymax: 1.5 }, { x: 90, y: 0.5 }, { pts: [[-60, 0.5, "(−60°, ?)"]] }), 0.001),
  num(S`Find the other x in \(0^\circ\le x\le360^\circ\) with \(\sin x=\sin200^\circ\).`, 340, "Both in Q3/Q4: 180° + 20° and 360° − 20°."),
];
