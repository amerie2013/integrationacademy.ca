// 7.4 Applications of the Sine & Cosine Laws — 20 easy + 20 medium questions (values computed)
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { atriDoc, sasDoc } from "./fig.mjs";

const D = Math.PI / 180, G = 180 / Math.PI, sin = (d) => Math.sin(d * D), cos = (d) => Math.cos(d * D);
const r1 = (x) => Math.round(x * 10) / 10;
const n1 = (p, v, fb, fig) => num(`${p} Round to one decimal place.`, r1(v), `${fb} $\\approx${r1(v)}$.`, fig, 0.06);
const n0 = (p, v, fb, fig) => num(`${p} Round to the nearest whole number.`, Math.round(v), `${fb} $\\approx${Math.round(v)}$.`, fig, 0.6);
const a1 = (p, v, fb, fig) => num(`${p} Give the angle to one decimal place.`, r1(v), `${fb} $\\approx${r1(v)}^\\circ$.`, fig, 0.06);
const side = (a, A, B) => (a * sin(B)) / sin(A);
const cl = (b, c, A) => Math.sqrt(b * b + c * c - 2 * b * c * cos(A));
const ang = (a, b, c) => Math.acos((b * b + c * c - a * a) / (2 * b * c)) * G;

export const E = [
  n0(`From a point, the ends of a pond are $200$ m and $250$ m away with $60^\\circ$ between the sightlines. How long is the pond (m)?`, cl(200, 250, 60), "Cosine law"),
  n1(`Two ships leave port on courses $50^\\circ$ apart and sail $10$ km and $12$ km. How far apart are they (km)?`, cl(10, 12, 50), "Cosine law"),
  n1(`Towers $A$ and $B$ are $10$ km apart. A fire makes angles of $60^\\circ$ at $A$ and $70^\\circ$ at $B$ with $AB$. How far is the fire from $A$ (km)?`, side(10, 50, 70), "Third angle $50^\\circ$; $\\frac{10\\sin70^\\circ}{\\sin50^\\circ}$"),
  mc(`A baseline and the two angles at its ends are measured. Which law finds the distances to the far point?`, "the sine law", ["the cosine law", "SOH CAH TOA", "the Pythagorean theorem"], "Find the third angle, then use the pairs."),
  mc(`Two distances and the angle between them are measured. Which law finds the third distance?`, "the cosine law", ["the sine law", "SOH CAH TOA", "neither"], "SAS."),
  tf(`Triangulation locates a point using a measured baseline and two angles.`, true, "The sine law gives the distances."),
  a1(`A truss has sides $3$ m, $4$ m and $4$ m. Find the angle opposite the $3$ m side.`, ang(3, 4, 4), "Cosine law"),
  n1(`Points $A$ and $B$ are $50$ m apart. A tree $C$ makes $\\angle A=70^\\circ$ and $\\angle B=65^\\circ$. Find $AC$ (m).`, side(50, 45, 65), "Third angle $45^\\circ$; sine law"),
  fill(`To find a height after finding a slanted side, multiply that side by the ___ of the angle at the base.`, ["sine", "sin"], "Height = side × sin(angle)."),
  n1(`A slanted side of $40$ m makes a $55^\\circ$ angle with the ground. How high does it reach (m)?`, 40 * sin(55), "$40\\sin55^\\circ$"),
  n1(`Two hikers leave a camp on paths $70^\\circ$ apart and walk $3$ km and $4$ km. How far apart are they (km)?`, cl(3, 4, 70), "Cosine law"),
  tf(`In application problems you should draw a diagram before choosing a law.`, true, "It shows which parts are known."),
  a1(`A triangular garden has sides $8$ m, $9$ m and $10$ m. Find the angle between the $8$ m and $9$ m sides.`, ang(10, 8, 9), "Opposite $10$"),
  n1(`Two people $20$ m apart, on opposite sides of a balloon, see it at $50^\\circ$ and $60^\\circ$. How far is the balloon from the first person (m)?`, side(20, 70, 60), "Angle at the balloon $70^\\circ$; $\\frac{20\\sin60^\\circ}{\\sin70^\\circ}$"),
  mc(`A lighthouse sees two boats $7$ km and $9$ km away with $55^\\circ$ between them. What is the first step to find the distance between the boats?`, "use the cosine law with $7$, $9$ and $55^\\circ$", ["use the sine law", "subtract $9-6$", "find the third angle"], "SAS."),
  n0(`A triangular lot has two sides of $60$ m and $80$ m meeting at $75^\\circ$. Find the third side (m).`, cl(60, 80, 75), "Cosine law"),
  tf(`The angle at the top of a kite seen from two people on opposite sides is $180^\\circ$ minus the two angles of elevation.`, true, "The three angles of the triangle add to $180^\\circ$."),
  n1(`A ramp's slanted surface is $5$ m long at $12^\\circ$ to the ground. How high does it rise (m)?`, 5 * sin(12), "$5\\sin12^\\circ$"),
  n1(`A surveyor measures $AC=150$ m, $BC=170$ m and $\\angle ACB=45^\\circ$. Find $AB$ (m).`, cl(150, 170, 45), "Cosine law"),
  n1(`Find the distance $AB$ across the lake shown (m).`, cl(300, 260, 58), "Cosine law", sasDoc(300, 260, 58, { b: "300 m", c: "260 m", a: "?", A: "58°", names: ["C", "B", "A"] })),
];

export const M = [
  n1(`Ranger towers $A$ and $B$ are $18$ km apart. A fire makes angles of $55^\\circ$ at $A$ and $62^\\circ$ at $B$ with $AB$. How far is the fire from $B$ (km)?`, side(18, 63, 55), "Third angle $63^\\circ$; $\\frac{18\\sin55^\\circ}{\\sin63^\\circ}$"),
  n1(`A ship sails $14$ km, turns, and sails $20$ km. The angle between the legs at the turn is $72^\\circ$. How far is it from the start (km)?`, cl(14, 20, 72), "Cosine law"),
  n1(`Points $A$ and $B$ on a riverbank are $75$ m apart. A rock $C$ on the far bank makes $\\angle A=62^\\circ$ and $\\angle B=71^\\circ$. Find the width of the river (m).`, side(75, 47, 71) * sin(62), "$AC=\\frac{75\\sin71^\\circ}{\\sin47^\\circ}$; width $=AC\\sin62^\\circ$"),
  n1(`Two people $45$ m apart, on opposite sides of a kite, see it at angles of elevation of $58^\\circ$ and $63^\\circ$. How high is the kite (m)?`, side(45, 59, 63) * sin(58), "Angle at the kite $59^\\circ$; distance, then $\\times\\sin58^\\circ$"),
  a1(`A triangular roof truss has sides $5$ m, $5$ m and $7$ m. Find the angle at the peak (opposite the $7$ m side).`, ang(7, 5, 5), "Cosine law"),
  n1(`A flagpole stands between two people $36$ m apart. They see its top at angles of elevation of $57^\\circ$ and $64^\\circ$. How tall is the flagpole (m)?`, side(36, 59, 64) * sin(57), "Angle at the top $59^\\circ$; distance $\\frac{36\\sin64^\\circ}{\\sin59^\\circ}$; height $\\times\\sin57^\\circ$"),
  mc(`Two people on opposite sides of a tower see its top at angles of elevation of $57^\\circ$ and $64^\\circ$. The angle at the top of their triangle is…`, "$59^\\circ$", ["$7^\\circ$", "$121^\\circ$", "$33^\\circ$"], "$180^\\circ-57^\\circ-64^\\circ$."),
  n0(`Two airplanes leave an airport on courses $54^\\circ$ apart at $600$ km/h and $720$ km/h. How far apart are they after $1$ hour (km)?`, cl(600, 720, 54), "Cosine law"),
  a1(`A triangular field has sides $120$ m, $150$ m and $160$ m. Find its largest angle.`, ang(160, 120, 150), "Opposite $160$"),
  n1(`A surveyor's baseline $AB$ is $400$ m. A landmark $C$ makes $\\angle A=48^\\circ$ and $\\angle B=76^\\circ$. Find $BC$ (m).`, side(400, 56, 48), "Third angle $56^\\circ$; $BC=\\frac{400\\sin48^\\circ}{\\sin56^\\circ}$"),
  tf(`If the angle between two paths increases (staying acute), the distance between the walkers' ends increases.`, true, "$-2bc\\cos A$ gets less negative as $\\cos A$ falls."),
  ms(`Select all problems that need the cosine law first.`, ["two distances and the angle between them", "three sides of a truss", "a baseline with two angles", "two angles of elevation from a known distance apart", "a pond measured from one point to each end, with the angle between"], [0, 1, 4], "Baselines with angles use the sine law."),
  n1(`A guy wire runs from the top of a mast to the ground. Two anchors $16$ m apart, on opposite sides, make angles of $66^\\circ$ and $58^\\circ$ with the ground. How high is the mast (m)?`, side(16, 56, 58) * sin(66), "Top angle $56^\\circ$; nearer wire $\\frac{16\\sin58^\\circ}{\\sin56^\\circ}$; height $\\times\\sin66^\\circ$"),
  n1(`A boat leaves a dock and sails $8$ km. Another sails $11$ km on a course $63^\\circ$ from the first. How far apart are they (km)?`, cl(8, 11, 63), "Cosine law"),
  a1(`From a lighthouse, buoy $P$ is $5$ km away and buoy $Q$ is $7$ km away, and the buoys are $6$ km apart. Find the angle between the sightlines.`, ang(6, 5, 7), "Cosine law"),
  n1(`The angles at the ends of a $250$ m baseline are $64^\\circ$ and $59^\\circ$. Find the perpendicular distance from the far point to the baseline (m).`, side(250, 57, 59) * sin(64), "Third angle $57^\\circ$; side $\\times\\sin64^\\circ$"),
  mc(`Why is a perpendicular step needed to find the width of a river after triangulating?`, "the width is the shortest (perpendicular) distance, not the slanted side", ["the sine law only gives angles", "the triangle is not acute", "it isn't needed"], "Width $=$ slanted side $\\times\\sin$(angle)."),
  n0(`A plane flies $320$ km, turns, and flies $210$ km. It is now $330$ km from its start. Find the angle at the turn (degrees).`, ang(330, 320, 210), "Cosine law"),
  fill(`Measuring a baseline and two angles to locate a point is called ___.`, ["triangulation"], "Used by surveyors and navigators."),
  n1(`Use the triangle shown to find the distance from $A$ to the fire $F$ (km).`, side(12, 66, 61), "Third angle $66^\\circ$; sine law", atriDoc(53, 61, 12, { c: "12 km", A: "53°", B: "61°", names: ["A", "B", "F"] })),
];
