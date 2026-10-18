// 6.6 Solving Right Triangles & Applications — 20 easy + 20 medium questions (values computed)
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { sceneDoc } from "./fig.mjs";

const D = Math.PI / 180, G = 180 / Math.PI, sin = (d) => Math.sin(d * D), cos = (d) => Math.cos(d * D), tan = (d) => Math.tan(d * D), atan = (x) => Math.atan(x) * G;
const r1 = (x) => Math.round(x * 10) / 10;
const n1 = (prompt, v, fb, fig) => num(`${prompt} Round to one decimal place.`, r1(v), `${fb} $\\approx${r1(v)}$.`, fig, 0.06);
const n0 = (prompt, v, fb) => num(`${prompt} Round to the nearest whole number.`, Math.round(v), `${fb} $\\approx${Math.round(v)}$.`, null, 0.6);
const g = (a, b) => ({ seg: [[a, 0], [b, 0]], color: "gray" });
const ns = (x, y) => ({ text: "not to scale", at: [x, y], size: 11, color: "gray" });

export const E = [
  num(`From $20$ m away on level ground, the angle of elevation to the top of a pole is $45^\\circ$. How tall is the pole (m)?`, 20, "$20\\tan45^\\circ=20$.", null, 0.06),
  n1(`From $30$ m away on level ground, the angle of elevation to a treetop is $40^\\circ$. How tall is the tree (m)?`, 30 * tan(40), "$30\\tan40^\\circ$"),
  n1(`From the top of a $50$ m cliff, the angle of depression to a boat is $30^\\circ$. How far is the boat from the base (m)?`, 50 / tan(30), "$\\frac{50}{\\tan30^\\circ}$"),
  mc(`Angles of elevation are measured from…`, "the horizontal", ["the vertical", "the ground's shadow", "the object's top"], "Up from a horizontal line at the eye."),
  mc(`Why does the angle of depression from $A$ to $B$ equal the angle of elevation from $B$ to $A$?`, "they are alternate angles between parallel horizontals", ["they are vertical angles", "they add to $90^\\circ$", "the triangle is isosceles"], "The horizontal at $A$ is parallel to the ground."),
  tf(`An angle of depression is measured down from the vertical.`, false, "It is measured down from the horizontal."),
  num(`A right triangle has hypotenuse $10$ and a $30^\\circ$ angle. Find the other acute angle in degrees.`, 60, "$90-30$.", null, 0.01),
  num(`A right triangle has hypotenuse $10$ and a $30^\\circ$ angle. Find the side opposite the $30^\\circ$ angle.`, 5, "$10\\sin30^\\circ$.", null, 0.06),
  num(`A right triangle has legs $5$ and $12$. Find the hypotenuse.`, 13, "$\\sqrt{25+144}$."),
  n1(`A kite string is $30$ m long at a $60^\\circ$ angle to the ground. How high is the kite (m)?`, 30 * sin(60), "$30\\sin60^\\circ$"),
  n1(`A $5$ m ladder makes a $70^\\circ$ angle with the ground. How high up the wall does it reach (m)?`, 5 * sin(70), "$5\\sin70^\\circ$"),
  num(`From the top of a $30$ m lighthouse, a boat is $100$ m from the base. Find the angle of depression to one decimal place (degrees).`, r1(atan(0.3)), `$\\tan^{-1}0.3\\approx${r1(atan(0.3))}^\\circ$.`, null, 0.06),
  fill(`The line from an observer's eye to an object is called the line of ___.`, ["sight"], "Line of sight."),
  n1(`From $15$ m away, the angle of elevation to the top of a statue is $50^\\circ$ (from the ground). How tall is it (m)?`, 15 * tan(50), "$15\\tan50^\\circ$"),
  tf(`To solve a right triangle, you need to know at least one side length.`, true, "Angles alone give the shape, not the size."),
  n1(`A person whose eyes are $1.5$ m high stands $40$ m from a building and sees its top at an angle of elevation of $30^\\circ$. How tall is the building (m)?`, 40 * tan(30) + 1.5, "$40\\tan30^\\circ+1.5$"),
  mc(`A right triangle has legs $6$ and $9$. What can you find first?`, "either the hypotenuse (Pythagoras) or an angle ($\\tan^{-1}$)", ["only the hypotenuse", "only an angle with $\\sin^{-1}$", "nothing without an angle"], "Two sides are enough."),
  n0(`A plane flying at $1000$ m sees an airport at an angle of depression of $25^\\circ$. What is the horizontal distance to the airport (m)?`, 1000 / tan(25), "$\\frac{1000}{\\tan25^\\circ}$"),
  num(`A right triangle has an acute angle of $48.5^\\circ$. Find the other acute angle (degrees).`, 41.5, "$90-48.5$.", null, 0.01),
  n1(`Use the sketch to find the height $h$ of the building (m).`, 25 * tan(35), "$25\\tan35^\\circ$", sceneDoc([g(-0.5, 10.8), { seg: [[10, 0], [10, 6]], color: "green", width: 5 }, { seg: [[0, 0], [10, 6]], color: "red" }, { arc: [[10, 0], [0, 0], [10, 6]], label: "35°", color: "amber" }, { right: [[0, 0], [10, 0], [10, 6]] }, { text: "25 m", at: [5, -0.7] }, { text: "h", at: [10.7, 3], bold: true, color: "green" }, ns(5, 6.8)], 360)),
];

export const M = [
  n1(`Solve the right triangle with hypotenuse $18$ and a $34^\\circ$ angle: find the side opposite $34^\\circ$.`, 18 * sin(34), "$18\\sin34^\\circ$"),
  n1(`In the right triangle with hypotenuse $18$ and a $34^\\circ$ angle, find the side adjacent to $34^\\circ$.`, 18 * cos(34), "$18\\cos34^\\circ$"),
  num(`A right triangle has legs $9$ and $14$. Find its larger acute angle to one decimal place (degrees).`, r1(atan(14 / 9)), `$\\tan^{-1}\\frac{14}9\\approx${r1(atan(14 / 9))}^\\circ$.`, null, 0.06),
  n1(`A person whose eyes are $1.6$ m high stands $55$ m from a tower and sees its top at $32^\\circ$. How tall is the tower (m)?`, 55 * tan(32) + 1.6, "$55\\tan32^\\circ+1.6$"),
  n1(`From the top of a $75$ m cliff, the angle of depression to a buoy is $15^\\circ$. How far is the buoy from the cliff (m)?`, 75 / tan(15), "$\\frac{75}{\\tan15^\\circ}$"),
  n1(`From the top of a $60$ m tower, the angle of depression to a car is $40^\\circ$. How far is the car from the base (m)?`, 60 / tan(40), "$\\frac{60}{\\tan40^\\circ}$"),
  n1(`A ramp up to a $1.2$ m platform makes a $6^\\circ$ angle with the ground. How long is the ramp (m)?`, 1.2 / sin(6), "$\\frac{1.2}{\\sin6^\\circ}$"),
  n1(`A balloon is held by a $200$ m rope at $65^\\circ$ to the ground. How high is it (m)?`, 200 * sin(65), "$200\\sin65^\\circ$"),
  num(`A $45$ m building is $70$ m away. Find the angle of elevation to its top from the ground, to one decimal place (degrees).`, r1(atan(45 / 70)), `$\\tan^{-1}\\frac{45}{70}\\approx${r1(atan(45 / 70))}^\\circ$.`, null, 0.06),
  n1(`From an $80$ m cliff, the angles of depression to two boats in line with it are $35^\\circ$ and $20^\\circ$. How far apart are the boats (m)?`, 80 / tan(20) - 80 / tan(35), "$\\frac{80}{\\tan20^\\circ}-\\frac{80}{\\tan35^\\circ}$"),
  mc(`The angle of depression from a cliff top to a boat is $25^\\circ$. What is the angle of elevation from the boat to the cliff top?`, "$25^\\circ$", ["$65^\\circ$", "$155^\\circ$", "$50^\\circ$"], "Alternate angles."),
  tf(`From a higher cliff, the angle of depression to the same boat is larger.`, true, "$\\tan\\theta=\\frac{h}{d}$ grows with $h$."),
  n1(`A ladder must reach a window $7$ m up a wall at an angle of $72^\\circ$ with the ground. How long must it be (m)?`, 7 / sin(72), "$\\frac7{\\sin72^\\circ}$"),
  n1(`When the sun is $28^\\circ$ above the horizon, how long is the shadow of a $35$ m building (m)?`, 35 / tan(28), "$\\frac{35}{\\tan28^\\circ}$"),
  ms(`A right triangle has a $40^\\circ$ angle and hypotenuse $12$. Select all correct steps for solving it.`, ["opposite $=12\\sin40^\\circ$", "adjacent $=12\\cos40^\\circ$", "other angle $=50^\\circ$", "adjacent $=12\\tan40^\\circ$", "other angle $=40^\\circ$"], [0, 1, 2], "SOH CAH and $90^\\circ-40^\\circ$."),
  n0(`A plane takes off at $15^\\circ$. After covering $2$ km horizontally, how high is it (m)?`, 2000 * tan(15), "$2000\\tan15^\\circ$"),
  n1(`A kite string held $1.5$ m above the ground is $45$ m long at $40^\\circ$. How high is the kite above the ground (m)?`, 1.5 + 45 * sin(40), "$1.5+45\\sin40^\\circ$"),
  n1(`A lifeguard's eyes are $3$ m above the beach. The angle of depression to a swimmer is $12^\\circ$. How far away (horizontally) is the swimmer (m)?`, 3 / tan(12), "$\\frac3{\\tan12^\\circ}$"),
  num(`A person whose eyes are $1.7$ m high stands $30$ m from a $25$ m building. Find the angle of elevation from their eyes to the top, to one decimal place (degrees).`, r1(atan(23.3 / 30)), `$\\tan^{-1}\\frac{23.3}{30}\\approx${r1(atan(23.3 / 30))}^\\circ$.`, null, 0.06),
  n1(`Use the sketch to find the distance $d$ to the boat (m).`, 65 / tan(22), "$\\frac{65}{\\tan22^\\circ}$", sceneDoc([g(-0.5, 10.8), { seg: [[0, 0], [0, 5]], color: "green", width: 5 }, { seg: [[0, 5], [10.5, 5]], color: "gray", dash: true }, { seg: [[0, 5], [10, 0]], color: "red" }, { arc: [[10.5, 5], [0, 5], [10, 0]], label: "22°", color: "amber" }, { right: [[0, 5], [0, 0], [10, 0]] }, { dot: [10, 0], color: "blue", r: 5 }, { text: "65 m", at: [-1.1, 2.5], bold: true, color: "green" }, { text: "d", at: [5, -0.7], bold: true }, ns(5, 5.8)], 360)),
];
