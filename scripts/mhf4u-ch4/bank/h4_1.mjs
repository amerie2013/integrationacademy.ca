import { FIG } from "../../mhf4u-bank-figures/figs.mjs";
// 4.1 Radian Measure — 20 hard questions
import { mc, num, tf } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
import { UC, SECTOR } from "../trigfig.mjs";
const S = String.raw;

export const TOPIC = "4.1 Radian Measure";
export const Q = [
  num(S`The minute hand of a clock is 18 cm long. How far, in cm, does its tip travel in 20 minutes (2 decimals)?`, 37.7, "θ = 2π/3; s = 12π.", null, 0.01),
  num(S`The hour hand of a clock is 9 cm long. How far, in cm, does its tip travel in 4 hours (2 decimals)?`, 18.85, "θ = 2π/3; s = 6π.", null, 0.01),
  num(S`Find the angle between the hands of a clock at 4:00, in radians (2 decimals).`, 2.09, "2π/3.", null, 0.01),
  num(S`Find the angle between the hands of a clock at 2:30, in radians (2 decimals).`, 1.83, "The hands are 105° apart.", null, 0.01),
  num(S`A belt joins pulleys of radii 4 cm and 10 cm. The large pulley turns through 2 rad. Through how many radians does the small pulley turn?`, 5, "Equal arcs: 20 = 4θ."),
  num(S`A belt joins pulleys of radii 3 cm and 12 cm. The small pulley makes 8 revolutions. How many revolutions does the large one make?`, 2, "Revolutions scale inversely with the radius."),
  num(S`A sector has perimeter 24 cm and radius 8 cm. Find its area in cm².`, 32, "Arc 8, θ = 1; A = ½(64)(1).", FIG.sP),
  num(S`A sector has area $24\pi$ and angle $\frac{3\pi}4$. Find its radius (2 decimals).`, 8, "½r²(3π/4) = 24π gives r² = 64.", FIG.sA),
  num(S`The tire of a car has radius 0.3 m and turns at 40 rad/s. Find the car's speed in km/h (1 decimal).`, 43.2, "12 m/s × 3.6.", null, 0.1),
  num(S`A car moves at 90 km/h on tires of radius 0.35 m. Find the angular speed in rad/s (1 decimal).`, 71.4, "25 m/s ÷ 0.35.", null, 0.1),
  num(S`A satellite orbits at radius 8000 km, completing one orbit in 2 h. Find its speed in km/h, to the nearest km/h.`, 25133, "2π(8000)/2.", null, 1),
  num(S`Two cities on the same meridian are separated by a central angle of $0.35$ rad, on a sphere of radius 6400 km. Find their distance in km along the surface.`, 2240, "s = rθ.", FIG.earth),
  mc(S`A pendulum of length 60 cm swings through an arc of 25 cm. What is the swing angle?`, S`about $23.9^\circ$`, [S`about $41.7^\circ$`, S`about $0.42^\circ$`, S`about $12^\circ$`], "25/60 rad × 180/π.", FIG.pend),
  mc("The shaded sector has angle 2π/3 and area 12π. What is its radius?", "6", ["4", "12", "18"], "½r²(2π/3) = 12π gives r² = 36.", planeDoc(SECTOR(6, (2 * Math.PI) / 3))),
  mc("A point moves counterclockwise on the unit circle from (1, 0) along an arc of length 7π/6. Where is it?", "at the marked point", ["at (0, 1)", "at (−1, 0)", "at (1, 0)"], "On a unit circle the arc length is the angle: 210°.", planeDoc(UC(210, "?"))),
  mc("The marked point is at angle θ. Which is a coterminal angle with θ?", S`$\frac{17\pi}6$`, [S`$\frac{7\pi}6$`, S`$\frac{11\pi}6$`, S`$\frac{5\pi}3$`], "θ = 5π/6; add 2π.", planeDoc(UC(150, "θ"))),
  mc("On this unit circle, what is the arc length from (1, 0) counterclockwise to the marked point?", S`$\frac{5\pi}4$`, [S`$\frac\pi4$`, S`$\frac{3\pi}4$`, S`$\frac{7\pi}4$`], "225° in radians.", planeDoc(UC(225, "P"))),
  mc("Which sector has the same area as a sector of radius 4 and angle 2?", S`radius 8, angle $\frac12$`, ["radius 8, angle 1", "radius 2, angle 4", "radius 2, angle 2"], "A = 16 for both.", planeDoc(SECTOR(4, 2))),
  tf(S`The angles $\frac{\pi}{3}$ and $-\frac{5\pi}{3}$ have the same terminal arm.`, true, "They differ by 2π."),
  tf(S`At a given angular speed, a point twice as far from the centre moves twice as fast.`, true, "v = rω."),
];
