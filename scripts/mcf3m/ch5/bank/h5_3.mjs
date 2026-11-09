// 5.3 The Sine Law — 20 hard questions
import { mc, ms, num, tf } from "../../bank/kit.mjs";
import { n2, sin, asin, side, sasD } from "./trig.mjs";
const S = String.raw;
const tri = (A, B, c, labels) => { const C = 180 - A - B; return sasD(side(c, C, B), c, A, labels); };

export const TOPIC = "5.3 The Sine Law";
export const Q = [
  n2(S`Two lighthouses $18$ km apart see a ship at $52^\circ$ and $67^\circ$ from the line between them. Find the ship's distance from the line.`, side(18, 61, 67) * sin(52), "Angle at ship 61°; slant distance then right triangle.", tri(52, 67, 18, ["L1", "L2", "ship"])),
  n2(S`Solve: $a=17$, $b=14$, $A=71^\circ$. Enter $c$.`, side(17, 71, 109 - asin((14 * sin(71)) / 17)), "Find B, then C, then c."),
  n2(S`A $75$ m baseline: angles $80^\circ$ and $55^\circ$ to a buoy. Find the buoy's distance from the $80^\circ$ end.`, side(75, 45, 55), "Angle at buoy 45°; opposite 55°."),
  n2(S`In $\triangle ABC$, $A=44^\circ$, $B=72^\circ$, and the perimeter is $60$. Find $a$.`, (60 * sin(44)) / (sin(44) + sin(72) + sin(64)), "a : b : c = sin A : sin B : sin C."),
  n2(S`A balloon is seen from points $A$ and $B$, $400$ m apart on opposite sides, at $64^\circ$ and $52^\circ$. Find its height.`, side(400, 64, 52) * sin(64), "AT = 400 sin 52°/sin 64°; height = AT sin 64°.", tri(64, 52, 400, ["A", "B", "T"])),
  n2(S`$b=11$, $c=9$, $B=68^\circ$. Find the area using $\tfrac12bc\sin A$.`, 0.5 * 11 * 9 * sin(112 - asin((9 * sin(68)) / 11)), "Find C, then A."),
  n2(S`A triangle's angles are in the ratio $3:4:5$ and its shortest side is $10$. Find its longest side.`, side(10, 45, 75), "Angles 45°, 60°, 75°."),
  n2(S`A radio mast is seen from two points on the same side, $60$ m apart, at $40^\circ$ and $58^\circ$. Using the sine law in the triangle formed, find the slant distance from the nearer point to the top.`, side(60, 18, 40), "Angle at top = 58 − 40 = 18°; opposite the far angle 40°."),
  n2(S`For that mast, find its height.`, side(60, 18, 40) * sin(58), "Slant × sin 58°."),
  mc("The triangle shown has A = 58°, B = 74°. Which is true?", "b is the longest side", ["a is the longest side", "c is the longest side", "all sides are equal"], "Largest angle 74° faces b.", tri(58, 74, 10)),
  ms(S`Select every TRUE statement about the sine law.`, ["it works in any triangle", "it needs a side and its opposite angle", "it is used for SAS", "a/sin A = 2 × (circumradius)"], [0, 1, 3], "SAS uses the cosine law."),
  tf(S`If $\sin B=1.2$ from the sine law, no such triangle exists.`, true, "Sine cannot exceed 1."),
  n2(S`$a=8$, $A=50^\circ$, $c=9$. Find $C$ (acute).`, asin((9 * sin(50)) / 8), "sin C = 9 sin 50°/8."),
  n2(S`A triangle has angles $32^\circ$ and $58^\circ$ at the ends of a $30$ cm side. Find the side opposite the $58^\circ$ angle.`, side(30, 90, 58), "Third angle 90°: 30 sin 58°/sin 90°."),
  n2(S`A plane is spotted from two towers $9$ km apart at $72^\circ$ and $66^\circ$ from the line joining them. Find its distance from the $72^\circ$ tower.`, side(9, 42, 66), "Angle at plane 42°."),
  n2(S`Using the plane above, find its altitude above the line.`, side(9, 42, 66) * sin(72), "× sin 72°."),
  num(S`In $\triangle ABC$, $\sin A:\sin B:\sin C=2:3:4$ and $a=10$. Enter $c$.`, 20, "Sides are proportional to the sines."),
  n2(S`$A=67^\circ$, $B=48^\circ$, $c=15$. Find the area.`, 0.5 * 15 * side(15, 65, 48) * sin(67), "b by sine law; area ½bc sin A."),
  mc("The diagram shows a baseline AB = 100 m and a point P. Which angle is needed before using the sine law for AP?", "angle P = 180° − A − B", ["angle A only", "angle B only", "none"], "Complete the opposite pair for AB.", tri(55, 70, 100, ["A", "B", "P"])),
  n2(S`For that diagram ($AB=100$, $A=55^\circ$, $B=70^\circ$), find $AP$.`, side(100, 55, 70), "Angle P = 55°; isosceles: AP opposite B."),
];
