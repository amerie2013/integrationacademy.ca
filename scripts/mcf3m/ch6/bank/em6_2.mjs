// 6.2 The Sine Function — 20 easy + 20 medium
import { mc, ms, num, tf, fill, sd, cd, P, n2, asd, wave, sDoc } from "./sk.mjs";
const S = String.raw;
const W = (o) => wave(1, 0, 0, { sy: 0.5, ...o });
const circ = (R, ang) => sDoc([], { base: false, view: { xmin: -R * 1.3, xmax: R * 1.3, ymin: -R * 1.3, ymax: R * 1.3 }, step: { x: R / 2, y: R / 2 },
  segs: [{ pts: Array.from({ length: 73 }, (_, i) => [R * cd(i * 5), R * sd(i * 5)]), color: "gray" }, { pts: [[0, 0], [R * cd(ang), R * sd(ang)]], color: "violet" }, { pts: [[R * cd(ang), 0], [R * cd(ang), R * sd(ang)]], color: "red" }] });

export const E = [
  num(S`Enter $\sin90^\circ$.`, 1, "Top of the wave."),
  num(S`Enter $\sin180^\circ$.`, 0, "A zero."),
  num(S`Enter $\sin360^\circ$.`, 0, "End of one cycle."),
  n2(S`Enter $\sin135^\circ$ (two decimals).`, sd(135), "Same as sin 45°."),
  n2(S`Enter $\sin250^\circ$ (two decimals).`, sd(250), "Below the axis."),
  num(S`Enter the period of $y=\sin x$ in degrees.`, 360, "One turn."),
  num(S`Enter the amplitude of $y=\sin x$.`, 1, "Max 1, min −1."),
  mc(S`The range of $y=\sin x$ is …`, S`$-1\le y\le1$`, [S`$0\le y\le1$`, S`$-360\le y\le360$`, "all real numbers"], "Amplitude 1 about y = 0."),
  mc(S`For $0^\circ<x<360^\circ$, $\sin x$ is negative when …`, S`$180^\circ<x<360^\circ$`, [S`$0^\circ<x<180^\circ$`, S`$90^\circ<x<270^\circ$`, "never"], "Below the x-axis."),
  tf(S`$\sin x$ can be greater than $1$.`, false, "y ≤ r."),
  tf(S`$\sin(180^\circ-x)=\sin x$.`, true, "Mirror points have the same height."),
  fill(S`For a rotated radius $r$ with end point $(x_P,\,y_P)$, $\sin x=\frac{\square}{r}$. Fill in the numerator (one symbol).`, ["y", "y_P", "yP"], "Height over radius."),
  num(S`How many maximum points does $y=\sin x$ have for $0^\circ\le x\le720^\circ$?`, 2, "At 90° and 450°."),
  mc("In the graph shown, where is the minimum?", S`$(270,\,-1)$`, [S`$(90,\,-1)$`, S`$(180,\,0)$`, S`$(360,\,-1)$`], "Bottom of the trough.", W({})),
  num("For the graph shown, enter the x-intercept between 0° and 360° (not at the ends).", 180, "Middle zero.", W({})),
  n2(S`A radius of $4$ is rotated $30^\circ$. Enter the $y$-coordinate of its end.`, 2, "4 sin 30°."),
  n2(S`Enter $\sin(-90^\circ)$.`, -1, "Clockwise quarter turn."),
  num(S`Solve $\sin x=1$ for $0^\circ\le x\le360^\circ$.`, 90, "Top only."),
  num(S`Solve $\sin x=-1$ for $0^\circ\le x\le360^\circ$.`, 270, "Bottom only."),
  n2(S`Enter $\sin400^\circ$ (two decimals).`, sd(40), "400 − 360 = 40."),
];

export const M = [
  n2(S`A radius of $9$ is rotated $160^\circ$. Enter the $y$-coordinate of its end.`, 9 * sd(160), "9 sin 160° = 9 sin 20°.", circ(9, 160)),
  n2(S`A radius of $9$ is rotated $160^\circ$. Enter the $x$-coordinate of its end.`, 9 * cd(160), "Left of the origin.", circ(9, 160)),
  n2(S`Solve $\sin x=0.35$: enter the larger solution in $0^\circ\le x\le360^\circ$.`, 180 - asd(0.35), "180° − sin⁻¹ 0.35."),
  n2(S`Solve $\sin x=-0.55$: enter the smaller solution in $0^\circ\le x\le360^\circ$.`, 180 + asd(0.55), "180° + related angle."),
  n2(S`Solve $\sin x=-0.55$: enter the larger solution in $0^\circ\le x\le360^\circ$.`, 360 - asd(0.55), "360° − related angle."),
  num(S`How many solutions does $\sin x=0.7$ have for $0^\circ\le x\le1080^\circ$?`, 6, "Two per cycle, three cycles."),
  num(S`How many zeros does $y=\sin x$ have for $-360^\circ\le x\le360^\circ$?`, 5, "−360, −180, 0, 180, 360."),
  n2(S`Given $\sin35^\circ\approx0.57$, enter $\sin215^\circ$.`, -0.57, "180 + 35: negative."),
  n2(S`Given $\sin35^\circ\approx0.57$, enter $\sin145^\circ$.`, 0.57, "180 − 35."),
  n2(S`Enter $\sin(-30^\circ)$.`, -0.5, "Same as sin 330°."),
  ms(S`Select every angle with $\sin x=\sin70^\circ$.`, [S`$110^\circ$`, S`$250^\circ$`, S`$430^\circ$`, S`$290^\circ$`, S`$-250^\circ$`], [0, 2, 4], "180 − 70, 70 + 360, 110 − 360."),
  tf(S`$\sin x$ is increasing on $270^\circ<x<450^\circ$.`, true, "From the trough up to the next peak."),
  mc(S`Which angle has the same sine as $310^\circ$?`, S`$230^\circ$`, [S`$50^\circ$`, S`$130^\circ$`, S`$310^\circ-180^\circ$`], "Both have related angle 50° below the axis."),
  mc("The wave shown is y = sin x. At which marked point is sin x ≈ −0.71?", "x = 225°", ["x = 135°", "x = 45°", "x = 90°"], "Below the axis, related angle 45°.", W({ points: [P(45, 0.71, false), P(135, 0.71, false), P(225, -0.71, "225°", "red")] })),
  n2("Using the graph shown, enter sin 315° (two decimals).", sd(315), "Related angle 45°, negative.", W({ points: [P(315, -0.71, "315°", "red")] })),
  fill(S`If $\sin x=k>0$ has solution $x_1$ (acute), the other solution in $0^\circ$–$360^\circ$ is $\square^\circ-x_1$. The number is ____.`, ["180"], "Symmetry about 90°."),
  n2(S`A wheel of radius $11$ m turns from level. How far below the hub is a marker after $200^\circ$ (positive number)?`, -11 * sd(200), "11 sin 20°."),
  num(S`For which angle in $0^\circ\le x\le360^\circ$ is $\sin x$ at its maximum?`, 90, "Top."),
  n2(S`Enter $\sin(-200^\circ)$ (two decimals).`, sd(-200), "−200 + 360 = 160."),
  num(S`The wave $y=\sin x$ goes from its max to the next zero. Over how many degrees?`, 90, "90° to 180°."),
];
