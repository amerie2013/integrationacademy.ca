import { FIG } from "../../mhf4u-bank-figures/figs.mjs";
// 4.1 Radian Measure — 20 easy + 20 medium questions
import { mc, num, tf, fill } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
import { UC, SECTOR } from "../trigfig.mjs";
const S = String.raw;

export const E = [
  mc(S`How many radians are in $180^\circ$?`, S`$\pi$`, [S`$2\pi$`, S`$\frac\pi2$`, "180"], "π rad = 180°."),
  mc(S`How many radians are in a full circle?`, S`$2\pi$`, [S`$\pi$`, S`$360\pi$`, "1"], "Circumference ÷ radius."),
  mc(S`Convert $90^\circ$ to radians.`, S`$\frac\pi2$`, [S`$\pi$`, S`$\frac\pi4$`, S`$2\pi$`], "A quarter of 2π."),
  mc(S`Convert $60^\circ$ to radians.`, S`$\frac\pi3$`, [S`$\frac\pi6$`, S`$\frac\pi4$`, S`$\frac{2\pi}3$`], "60/180 = 1/3."),
  mc(S`Convert $45^\circ$ to radians.`, S`$\frac\pi4$`, [S`$\frac\pi6$`, S`$\frac\pi3$`, S`$\frac\pi8$`], "45/180 = 1/4."),
  mc(S`Convert $270^\circ$ to radians.`, S`$\frac{3\pi}2$`, [S`$\frac{2\pi}3$`, S`$\frac{5\pi}4$`, S`$3\pi$`], "270/180 = 3/2."),
  num(S`Convert $\frac\pi6$ to degrees.`, 30, "180/6."),
  num(S`Convert $\frac{2\pi}3$ to degrees.`, 120, "2 × 60."),
  num(S`Convert $\frac{5\pi}4$ to degrees.`, 225, "5 × 45."),
  num(S`Convert $\frac{5\pi}3$ to degrees.`, 300, "5 × 60."),
  num(S`A circle has radius 3. Find the arc length for $\theta=2$ rad.`, 6, "s = rθ.", FIG.s32),
  num(S`A circle has radius 7. Find the arc length for $\theta=1$ rad.`, 7, "s = r when θ = 1.", FIG.s71),
  num(S`An arc of length 12 lies on a circle of radius 4. Find the angle in radians.`, 3, "θ = s/r.", FIG.a124),
  tf(S`A radian is a ratio of two lengths, so it has no unit.`, true, "Arc length ÷ radius."),
  tf(S`One radian is exactly $60^\circ$.`, false, "One radian is about 57.3°."),
  tf(S`$\sin2$ means the sine of 2 radians.`, true, "No degree symbol means radians."),
  fill("One radian is the angle whose arc is equal in length to the ___.", ["radius"], "Definition of a radian."),
  mc("Which angle is marked on the unit circle?", S`$\frac{3\pi}4$`, [S`$\frac\pi4$`, S`$\frac{5\pi}4$`, S`$\frac{2\pi}3$`], "135° in Q2.", planeDoc(UC(135, "θ"))),
  mc("Which angle does this terminal arm show?", S`$\frac{5\pi}3$`, [S`$\frac{4\pi}3$`, S`$\frac{7\pi}6$`, S`$\frac\pi3$`], "300° in Q4.", planeDoc(UC(300, "θ"))),
  num(S`To 2 decimals, what is $\pi$ radians divided by 2?`, 1.57, "π/2 ≈ 1.57.", null, 0.01),
];

export const M = [
  mc(S`Convert $330^\circ$ to radians.`, S`$\frac{11\pi}6$`, [S`$\frac{5\pi}3$`, S`$\frac{7\pi}4$`, S`$\frac{13\pi}6$`], "330/180 = 11/6."),
  mc(S`Convert $135^\circ$ to radians.`, S`$\frac{3\pi}4$`, [S`$\frac{2\pi}3$`, S`$\frac{5\pi}6$`, S`$\frac{3\pi}2$`], "135/180 = 3/4."),
  mc(S`Convert $-120^\circ$ to radians.`, S`$-\frac{2\pi}3$`, [S`$\frac{2\pi}3$`, S`$-\frac{3\pi}2$`, S`$-\frac\pi3$`], "Keep the sign."),
  num(S`Convert $40^\circ$ to radians (2 decimals).`, 0.7, "40π/180 ≈ 0.70.", null, 0.01),
  num(S`Convert $200^\circ$ to radians (2 decimals).`, 3.49, "200π/180 ≈ 3.49.", null, 0.01),
  num(S`Convert $1$ rad to degrees (1 decimal).`, 57.3, "180/π.", null, 0.1),
  num(S`Convert $2.2$ rad to degrees (1 decimal).`, 126.1, "2.2 × 180/π.", null, 0.1),
  num(S`Convert $\frac{7\pi}9$ to degrees.`, 140, "7 × 20."),
  num(S`Find the arc length for $r=12$ and $\theta=\frac{5\pi}6$ (2 decimals).`, 31.42, "10π.", FIG.s12, 0.01),
  num(S`Find the arc length for $r=15$ cm and an angle of $72^\circ$ (2 decimals).`, 18.85, "72° = 2π/5, so s = 6π.", FIG.s15, 0.01),
  num(S`An arc of 9 cm lies on a circle of radius 6 cm. Find the angle in degrees (1 decimal).`, 85.9, "1.5 rad.", FIG.a96, 0.1),
  num(S`An arc of length $4\pi$ subtends $\frac{2\pi}3$. Find the radius.`, 6, "r = s/θ.", FIG.a4pi),
  num(S`Find the area of a sector with $r=6$ and $\theta=\frac\pi3$ (2 decimals).`, 18.85, "½(36)(π/3) = 6π.", FIG.s6, 0.01),
  num(S`Find the area of a sector with $r=10$ and $\theta=1.5$.`, 75, "½(100)(1.5).", FIG.s10),
  num(S`A wheel turns at 60 revolutions per minute. Find its angular speed in rad/s (2 decimals).`, 6.28, "2π rad/s.", null, 0.01),
  num(S`A disc turns at $4\pi$ rad/s. How many revolutions does it make per second?`, 2, "4π ÷ 2π."),
  num(S`A point 0.5 m from a centre turns at 8 rad/s. Find its speed in m/s.`, 4, "v = rω."),
  mc("The sector has radius 5. What is the perimeter of the shaded region if θ = 2?", "20", ["10", "15", "25"], "5 + 5 + 10.", planeDoc(SECTOR(5, 2))),
  mc("In one hour, through what angle does the minute hand of a clock turn?", S`$2\pi$`, [S`$\pi$`, S`$\frac\pi6$`, S`$60\pi$`], "One full turn."),
  tf(S`Doubling the radius of a sector with a fixed angle doubles its area.`, false, "A = ½r²θ: the area becomes 4 times as large.", planeDoc(SECTOR(3, 1.5))),
];
