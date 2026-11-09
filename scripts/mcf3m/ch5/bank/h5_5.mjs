// 5.5 Solving Acute-Triangle Problems — 20 hard questions
import { mc, ms, num, tf } from "../../bank/kit.mjs";
import { n2, sin, cos, tan, asin, side, L, Ang, sasD, triD } from "./trig.mjs";
const S = String.raw;
const tri = (A, B, c, labels) => sasD(side(c, 180 - A - B, B), c, A, labels);

export const TOPIC = "5.5 Solving Acute-Triangle Problems";
export const Q = [
  n2(S`Two Coast Guard stations $30$ km apart see a ship at $62^\circ$ and $71^\circ$ from the line joining them. How far is the ship from the line?`, side(30, 47, 71) * sin(62), "Angle at ship 47°; sine law then right triangle.", tri(62, 71, 30, ["S1", "S2", "ship"])),
  n2(S`A triangular field has sides $210$ m, $250$ m and $230$ m. A straight path runs from the corner between the $210$ m and $250$ m sides to the $230$ m side, meeting it at a right angle. How long is the path?`, (210 * 250 * sin(Ang(230, 210, 250))) / 230, "Angle between 210 and 250 by SSS, area = ½(210)(250) sin of it, path = 2·area/230."),
  n2(S`A hot-air balloon is tethered by two ropes, $64$ m and $72$ m, anchored $90$ m apart on level ground (balloon between them). Find its height.`, 64 * sin(Ang(72, 64, 90)), "Angle at the 64 m anchor by SSS, then height = 64 sin(angle).", sasD(90, 64, Ang(72, 64, 90), ["anchor 1", "anchor 2", "balloon"])),
  n2(S`A park is a triangle $ABC$ with $AB=180$ m, $\angle A=58^\circ$ and $\angle B=66^\circ$. Find its area.`, 0.5 * 180 * side(180, 56, 66) * sin(58), "AC by sine law; area ½·AB·AC·sin A."),
  n2(S`A $1.6$ m surveyor sights the top of a statue at $28^\circ$, walks $10$ m closer and sights it at $41^\circ$. How tall is the statue?`, 1.6 + 10 * sin(28) * sin(41) / sin(13), "Sine law in the oblique triangle (angle 13° at the top), then add eye height.", triD([[0, 0], [10, 0], [10 + 10 * sin(28) * cos(41) / sin(13), 10 * sin(28) * sin(41) / sin(13)]], ["", "", "top"], { extra: [{ pts: [[10 + 10 * sin(28) * cos(41) / sin(13), 0], [10 + 10 * sin(28) * cos(41) / sin(13), 10 * sin(28) * sin(41) / sin(13)]], color: "gray" }] })),
  n2(S`In $\triangle PQR$, $p=24$, $q=27$, $R=72^\circ$. Find $\angle P$.`, asin((24 * sin(72)) / L(24, 27, 72)), "Cosine law for r, then sine law."),
  n2(S`A regular pentagon has side $10$ cm. Find the length of a diagonal.`, L(10, 10, 108), "Interior angle 108°."),
  n2(S`A kite has sides $40$ cm, $40$ cm, $65$ cm, $65$ cm. The angle between the short sides is $100^\circ$. Find the length of the cross-diagonal joining the side corners.`, L(40, 40, 100), "Isosceles SAS."),
  n2(S`For that kite, find the angle between the two $65$ cm sides.`, Ang(L(40, 40, 100), 65, 65), "SSS on the lower triangle."),
  mc("A triangle has a = 12, b = 14, c = 15. Which order solves it most safely?", "cosine law for C, sine law for A, angle sum for B", ["sine law for A first", "angle sum first", "Pythagoras"], "Largest angle by the cosine law first.", sasD(14, 15, Ang(12, 14, 15))),
  n2("For that triangle (a = 12, b = 14, c = 15), find B.", Ang(14, 12, 15), "SSS or angle sum."),
  ms(S`Select every TRUE statement for acute triangles.`, ["the sine law gives a unique angle", "the cosine law can find any angle", "the largest angle is less than 90°", "the angles can be 50°, 60° and 80°"], [0, 1, 2], "50 + 60 + 80 ≠ 180."),
  tf(S`A triangle with sides $6$, $8$, $9$ is acute.`, true, "9² = 81 < 36 + 64."),
  n2(S`Two lighthouses are $14$ km apart. A ship is $9$ km from one and $11$ km from the other. Find the ship's distance to the line joining the lighthouses.`, 9 * sin(Ang(11, 9, 14)), "Angle at the 9 km lighthouse by SSS."),
  n2(S`A triangle has $B=55^\circ$, $C=61^\circ$ and area $50$ cm². Find $a$.`, Math.sqrt((2 * 50 * sin(64)) / (sin(55) * sin(61))), "Area = a² sin B sin C/(2 sin A)."),
  n2(S`A drone flies $1.2$ km at bearing $040^\circ$, then $0.9$ km at bearing $110^\circ$. How far is it from the start?`, L(1.2, 0.9, 110), "Interior angle 180 − 70 = 110°."),
  num(S`A triangle has sides $5$, $12$, $13$. Enter its largest angle.`, 90, "5² + 12² = 13²: right, not acute.", null, 0.01),
  n2(S`A wire runs from the top of a $30$ m tower to a stake. Another $38$ m wire from the top lands $15$ m past the first stake. Find the first wire's length.`, (() => { const d2 = Math.sqrt(38 * 38 - 900); return Math.sqrt(900 + (d2 - 15) ** 2); })(), "Far stake √(38² − 30²) from the base; near stake 15 m closer."),
  n2(S`Two cyclists leave at 1 pm on roads $57^\circ$ apart, at $22$ km/h and $28$ km/h. When are they $40$ km apart? Enter hours after 1 pm.`, 40 / L(22, 28, 57), "Distance is proportional to time."),
  mc("The diagram shows a baseline of 200 m and two angles to a tree. Which strategy finds the river width?", "sine law for a slant side, then a sine ratio for the width", ["cosine law only", "Pythagoras only", "it cannot be done"], "Two triangles: oblique then right.", tri(64, 70, 200, ["A", "B", "T"])),
];
