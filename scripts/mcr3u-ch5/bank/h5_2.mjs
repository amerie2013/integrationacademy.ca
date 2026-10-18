// 5.2 Angles from 0° to 360° — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { armD, unitD, cos, acos, atan, rd } from "./fig.mjs";

const S = String.raw;

export const TOPIC = "5.2 Angles from 0° to 360°";
export const Q = [
  mc(S`Solve $2\sin^2\theta=1$ for $0^\circ\le\theta\le360^\circ$.`, "45°, 135°, 225°, 315°", ["45°, 135°", "45°, 315°", "30°, 150°, 210°, 330°"], "sin θ = ±1/√2: related 45° in all four quadrants."),
  num(S`How many solutions does $4\cos^2\theta=1$ have for $0^\circ\le\theta\le360^\circ$?`, 4, "cos θ = ±½: 60°, 120°, 240°, 300°."),
  mc(S`Solve $2\sin^2\theta-\sin\theta-1=0$ for $0^\circ\le\theta\le360^\circ$.`, "90°, 210°, 330°", ["90°, 150°, 210°", "30°, 150°, 270°", "30°, 90°, 150°"], "(2 sin θ + 1)(sin θ − 1) = 0."),
  num(S`$\tan\theta=3$ and $\sin\theta<0$. Find $\cos\theta$ to 4 decimals.`, rd(-1 / Math.sqrt(10), 4), "Quadrant 3, point (−1, −3), r = √10.", null, 0.0001),
  num(S`$\sin\theta=-0.6$ and $\tan\theta>0$. Find $\cos\theta$.`, -0.8, "Quadrant 3: x = −0.8 on the unit circle."),
  num("The point (a, 2a), with a < 0, is on the terminal arm of θ. Find θ to 1 decimal.", rd(180 + atan(2), 1), "Quadrant 3; related tan⁻¹ 2.", null, 0.05),
  num(S`Evaluate $\sin135^\circ\cos315^\circ+\sin225^\circ\cos45^\circ$.`, 0, "½ − ½."),
  num(S`Find θ between 0° and 360° with $\cos\theta=-\frac12$ and $\sin\theta<0$.`, 240, "Quadrant 3, related 60°."),
  num("A Ferris wheel of radius 12 m is centred at the origin. A rider is at 210° in standard position. Find the rider's y-coordinate.", -6, "12 sin 210° = 12(−½)."),
  num("For the same rider at 210°, find the x-coordinate to 2 decimals.", rd(12 * cos(210)), "12 cos 210° = −6√3.", null, 0.01),
  tf("If 0° < θ < 180°, 0° < β < 180°, θ ≠ β and sin θ = sin β, then θ + β = 180°.", true, "The two angles are β and 180° − β."),
  num(S`Solve $\sin\theta=\cos\theta$ for $0^\circ\le\theta\le360^\circ$. Enter the larger solution.`, 225, "tan θ = 1: 45° and 225°."),
  ms("Which angles have related acute angle 35° and a negative cosine? Select all.", ["145°", "215°", "325°", "35°", "235°"], [0, 1], "Quadrants 2 and 3: 180° ± 35°."),
  num(S`$\cos\theta=-0.25$ and θ is in Quadrant 3. Find θ to 1 decimal.`, rd(360 - acos(-0.25), 1), "360° − cos⁻¹(−0.25).", null, 0.05),
  num(S`$\tan\theta=-0.4$ and θ is in Quadrant 2. Find θ to 1 decimal.`, rd(180 - atan(0.4), 1), "180° − tan⁻¹ 0.4.", null, 0.05),
  num("Find sin θ + cos θ for the angle shown, to 4 decimals.", rd(-23 / 17, 4), "r = 17: (−15 − 8)/17.", armD(-8, -15, "(−8, −15)"), 0.0001),
  num(S`All four arms shown satisfy one equation $\sin^2\theta=k$. Find $k$.`, 0.75, "sin 60° = √3/2, squared.", unitD([[60, "60°"], [120, "120°"], [240, "240°"], [300, "300°"]])),
  num("Find θ for the arm shown.", 135, "Related 45°, Quadrant 2.", armD(-2, 2, "(−2, 2)")),
  num(S`The arms show the two solutions of $\cos\theta=c$: 70° and 290°. Find $c$ to 4 decimals.`, rd(cos(70), 4), "c = cos 70°.", unitD([[70, "70°"], [290, "290°"]], { vlines: [{ x: cos(70), color: "amber", dash: true }] }), 0.0001),
  num(S`How many solutions does $\tan\theta=5$ have for $0^\circ\le\theta\le720^\circ$?`, 4, "Two per full turn."),
];
