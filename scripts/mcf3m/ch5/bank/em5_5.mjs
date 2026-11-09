// 5.5 Solving Acute-Triangle Problems — 20 easy + 20 medium (values computed)
import { mc, ms, num, tf, fill } from "../../bank/kit.mjs";
import { n2, sin, cos, tan, asin, side, L, Ang, sasD, rightD } from "./trig.mjs";
const S = String.raw;

export const E = [
  mc("Given two angles and any side, which tool do you use?", "sine law", ["cosine law", "Pythagorean theorem", "none"], "AAS/ASA."),
  mc("Given three sides, which tool finds an angle?", "cosine law", ["sine law", "tangent ratio", "none"], "SSS."),
  mc("Given a right triangle with two sides, which tool is quickest?", "primary trig ratios", ["cosine law", "sine law", "none"], "SOH CAH TOA."),
  mc("Given two sides and the contained angle, which tool finds the third side?", "cosine law", ["sine law", "tangent ratio", "none"], "SAS."),
  n2(S`$A=58^\circ$, $B=64^\circ$, $c=11$. Find $a$.`, side(11, 58, 58), "C = 58°."),
  n2(S`$b=9$, $c=10$, $A=48^\circ$. Find $a$.`, L(9, 10, 48), "SAS."),
  n2(S`$a=8$, $b=9$, $c=10$. Find $A$.`, Ang(8, 9, 10), "SSS."),
  n2(S`A right triangle has legs $7$ and $10$. Find the angle opposite $7$.`, Math.atan(7 / 10) * 180 / Math.PI, "tan⁻¹(0.7)."),
  n2(S`$A=72^\circ$, $C=54^\circ$, $a=20$. Find $c$.`, side(20, 72, 54), "Sine law."),
  n2(S`$a=13$, $c=11$, $B=61^\circ$. Find $b$.`, L(13, 11, 61), "Cosine law."),
  tf("An acute triangle has all three angles less than 90°.", true, "Definition."),
  tf("If you know only three angles, you can find the side lengths.", false, "Similar triangles of any size."),
  fill("After finding two angles, the third is 180° minus their ____.", ["sum"], "Angle sum."),
  mc("For the triangle shown (two sides and the angle between them), the first step is …", "cosine law for the third side", ["sine law for an angle", "add the sides", "nothing"], "SAS.", sasD(8, 11, 52)),
  n2("For the triangle shown, b = 8, c = 11, A = 52°. Find a.", L(8, 11, 52), "Cosine law.", sasD(8, 11, 52)),
  num(S`In an acute triangle, $A=67^\circ$ and $B=48^\circ$. Enter $C$.`, 65, "180 − 115."),
  n2(S`A $6$ m ladder reaches $5.4$ m up a wall. Find its angle with the ground.`, asin(5.4 / 6), "sin⁻¹(0.9).", rightD(Math.sqrt(36 - 29.16), 5.4, ["θ", "", ""])),
  n2(S`$A=66^\circ$, $B=57^\circ$, $a=15$. Find $b$.`, side(15, 66, 57), "Sine law."),
  n2(S`$a=6$, $b=7$, $c=8$. Find $C$.`, Ang(8, 6, 7), "SSS."),
  ms("Select the cases that the sine law can start.", ["ASA", "AAS", "SSS", "SAS"], [0, 1], "Need an opposite pair."),
];

export const M = [
  n2(S`From a dock, a buoy is $420$ m away and a pier end is $350$ m away; the angle between them is $55^\circ$. How far is the buoy from the pier end?`, L(420, 350, 55), "SAS.", sasD(420, 350, 55, ["dock", "buoy", "pier"])),
  n2(S`For that dock problem, find the angle at the buoy.`, asin((350 * sin(55)) / L(420, 350, 55)), "Sine law for the angle opposite 350 (acute)."),
  n2(S`A triangular garden has sides $9$, $11$ and $12$ m. Find its area.`, 0.5 * 9 * 11 * sin(Ang(12, 9, 11)), "Angle opposite 12, then ½ab sin C."),
  n2(S`$A=52^\circ$, $b=14$, $c=17$. Find the smallest angle.`, asin((14 * sin(52)) / L(14, 17, 52)), "Find a; smallest side is opposite the smallest angle."),
  n2(S`Two observers $500$ m apart see a kite at elevations $62^\circ$ and $55^\circ$ from opposite sides. How high is it?`, side(500, 63, 55) * sin(62), "Sine law then right triangle."),
  n2(S`A roof truss has rafters of $5.2$ m and $4.6$ m meeting at $78^\circ$. Find the span.`, L(5.2, 4.6, 78), "SAS."),
  n2(S`A triangle has $A=63^\circ$, $a=18$, $b=16$. Find $c$.`, side(18, 63, 117 - asin((16 * sin(63)) / 18)), "Find B, C, then c."),
  n2(S`A cell tower is $3.2$ km from town A and $4.1$ km from town B; the towns are $3.8$ km apart. Find the angle at the tower.`, Ang(3.8, 3.2, 4.1), "SSS."),
  n2(S`From a point $40$ m from a building's base, the top is at $52^\circ$. Find the height.`, 40 * tan(52), "Right triangle."),
  n2(S`A triangular sign has sides $1.5$ m, $1.7$ m and $1.6$ m. Find the largest angle.`, Ang(1.7, 1.5, 1.6), "Opposite 1.7."),
  mc(S`A triangle has $a=10$, $B=50^\circ$, $C=70^\circ$. Which law first?`, "sine law (find A = 60° first)", ["cosine law", "Pythagoras", "none"], "ASA → AAS."),
  tf(S`To find all three angles from SSS, the cosine law is needed only once; the sine law or angle sum can finish.`, true, "Then use the sine law for an acute angle, and the angle sum for the last."),
  mc("For the diagram (three sides 7, 8, 9), which angle should be found first with the cosine law to stay safe?", "the largest angle, opposite 9", ["the smallest angle", "any angle by the sine law", "none"], "Finding the largest first avoids sine-law ambiguity.", sasD(7, 8, Ang(9, 7, 8))),
  n2("For that diagram (sides 7, 8, 9), find the angle opposite 9.", Ang(9, 7, 8), "SSS."),
  n2(S`A plane leaves an airport, flies $280$ km, turns and flies $190$ km, ending $350$ km from the airport. Find the interior angle at the turn.`, Ang(350, 280, 190), "SSS: opposite 350."),
  n2(S`$b=21$, $A=44^\circ$, $C=69^\circ$. Find the perimeter.`, 21 + side(21, 67, 44) + side(21, 67, 69), "B = 67°."),
  fill(S`In a solved triangle, check that the largest side is opposite the largest ____.`, ["angle"], "Consistency check."),
  n2(S`A $25$ m wire runs from the top of a mast to the ground at $64^\circ$. A second wire from the top meets the ground on the other side at $58^\circ$. Find the second wire's length.`, (25 * sin(64)) / sin(58), "Common height 25 sin 64°."),
  n2(S`Two sides of an acute triangle are $12$ and $15$ with a $66^\circ$ contained angle. Find its area.`, 0.5 * 12 * 15 * sin(66), "½ab sin C."),
  num(S`An acute triangle has angles $x$, $x+10$ and $x+20$. Enter $x$.`, 50, "3x + 30 = 180."),
];
