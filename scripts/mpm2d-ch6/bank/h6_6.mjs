// 6.6 Solving Right Triangles & Applications — 20 hard questions (values computed)
import { mc, ms, num, tf } from "./kit.mjs";
import { sceneDoc } from "./fig.mjs";

const D = Math.PI / 180, sin = (d) => Math.sin(d * D), tan = (d) => Math.tan(d * D);
const r1 = (x) => Math.round(x * 10) / 10;
const n1 = (prompt, v, fb, fig) => num(`${prompt} Round to one decimal place.`, r1(v), `${fb} $\\approx${r1(v)}$.`, fig, 0.06);
const n0 = (prompt, v, fb) => num(`${prompt} Round to the nearest whole number.`, Math.round(v), `${fb} $\\approx${Math.round(v)}$.`, null, 0.6);
// two sightings: angles a (near) and b (far), points s apart
const near = (a, b, s) => (s * tan(b)) / (tan(a) - tan(b));

export const TOPIC = "6.6 Solving Right Triangles & Applications";
export const Q = [
  n1(`The angle of elevation to the top of a tower is $40^\\circ$ from point $A$ and $28^\\circ$ from point $B$, $30$ m farther away. How tall is the tower (m)?`, near(40, 28, 30) * tan(40), "$h=d\\tan40^\\circ=(d+30)\\tan28^\\circ$ gives"),
  n1(`In the same problem ($40^\\circ$ and $28^\\circ$, $30$ m apart), how far is $A$ from the tower (m)?`, near(40, 28, 30), "$d=\\frac{30\\tan28^\\circ}{\\tan40^\\circ-\\tan28^\\circ}$"),
  n1(`From the roof of a $40$ m building, the angle of depression to the base of a taller building is $30^\\circ$ and the angle of elevation to its top is $20^\\circ$. How tall is the taller building (m)?`, 40 + (40 / tan(30)) * tan(20), "Distance $\\frac{40}{\\tan30^\\circ}$; height $40+\\frac{40}{\\tan30^\\circ}\\tan20^\\circ$"),
  n1(`From the near bank of a river, the angle of elevation to the top of a $30$ m tower on the far bank is $18^\\circ$. How wide is the river (m)?`, 30 / tan(18), "$\\frac{30}{\\tan18^\\circ}$"),
  n1(`From a $55$ m lighthouse, the angles of depression to two boats on the same side, in line with it, are $42^\\circ$ and $27^\\circ$. How far apart are the boats (m)?`, 55 / tan(27) - 55 / tan(42), "$\\frac{55}{\\tan27^\\circ}-\\frac{55}{\\tan42^\\circ}$"),
  n1(`From a $55$ m lighthouse, the angles of depression to two boats on opposite sides of it are $42^\\circ$ and $27^\\circ$. How far apart are the boats (m)?`, 55 / tan(27) + 55 / tan(42), "$\\frac{55}{\\tan27^\\circ}+\\frac{55}{\\tan42^\\circ}$"),
  n1(`From $50$ m away, the angle of elevation to the top of a building is $35^\\circ$ and to the top of a flagpole on its roof is $40^\\circ$. How long is the flagpole (m)?`, 50 * (tan(40) - tan(35)), "$50\\tan40^\\circ-50\\tan35^\\circ$"),
  mc(`In a two-sighting problem (two angles of elevation from points a known distance apart), why can't you solve either triangle on its own?`, "each triangle has only an angle and no known side", ["the angles are too small", "the triangles are not right triangles", "the distance must be the hypotenuse"], "The shared height links them; write an equation for each."),
  n1(`A $6.5$ m ladder is safe at angles from $70^\\circ$ to $76^\\circ$ with the ground. What is the highest point on a wall it can safely reach (m)?`, 6.5 * sin(76), "Steepest angle: $6.5\\sin76^\\circ$"),
  tf(`As you walk toward a building, the angle of elevation to its top increases.`, true, "$\\tan\\theta=\\frac hd$ grows as $d$ shrinks."),
  n0(`A plane flying level at $3000$ m sees a landmark at an angle of depression of $20^\\circ$, and later at $35^\\circ$. How far did it fly between the sightings (m)?`, 3000 / tan(20) - 3000 / tan(35), "$\\frac{3000}{\\tan20^\\circ}-\\frac{3000}{\\tan35^\\circ}$"),
  n1(`From a boat, the angle of elevation to a cliff top is $15^\\circ$. After rowing $100$ m straight toward the cliff, it is $25^\\circ$. How tall is the cliff (m)?`, near(25, 15, 100) * tan(25), "$d\\tan25^\\circ=(d+100)\\tan15^\\circ$ gives"),
  ms(`Select all true statements about angles of depression.`, ["they are measured from a horizontal line at the observer", "they equal the angle of elevation from the object", "they are measured from the vertical", "the alternate-angle property explains them", "they are always $45^\\circ$"], [0, 1, 3], "Horizontal, alternate angles."),
  n1(`A person whose eyes are $1.6$ m high sees the top of a tower at $34^\\circ$ from $80$ m away. How tall is the tower (m)?`, 80 * tan(34) + 1.6, "$80\\tan34^\\circ+1.6$"),
  n1(`An escalator rises $8$ m at $30^\\circ$. How much horizontal floor space does it span (m)?`, 8 / tan(30), "$\\frac8{\\tan30^\\circ}$"),
  n0(`A helicopter $400$ m up sees two hikers on opposite sides at angles of depression of $30^\\circ$ and $50^\\circ$. How far apart are the hikers (m)?`, 400 / tan(30) + 400 / tan(50), "$\\frac{400}{\\tan30^\\circ}+\\frac{400}{\\tan50^\\circ}$"),
  tf(`An angle of elevation can be more than $90^\\circ$.`, false, "It is between the horizontal and the vertical."),
  mc(`The angles of elevation to a building top are $50^\\circ$ from $P$ and $35^\\circ$ from $Q$, $20$ m farther away. Which equation is correct ($d$ = distance from $P$)?`, "$d\\tan50^\\circ=(d+20)\\tan35^\\circ$", ["$d\\tan35^\\circ=(d+20)\\tan50^\\circ$", "$\\frac{d}{\\tan50^\\circ}=\\frac{d+20}{\\tan35^\\circ}$", "$d\\sin50^\\circ=(d+20)\\sin35^\\circ$"], "Both equal the height."),
  n1(`A $20$ m tower's shadow is measured when the sun is $60^\\circ$ high and again at $30^\\circ$. By how much did the shadow grow (m)?`, 20 / tan(30) - 20 / tan(60), "$\\frac{20}{\\tan30^\\circ}-\\frac{20}{\\tan60^\\circ}$"),
  n1(`Use the sketch to find the height $h$ (m).`, near(45, 30, 20) * tan(45), "$d\\tan45^\\circ=(d+20)\\tan30^\\circ$ gives", sceneDoc([{ seg: [[-1, 0], [48.5, 0]], color: "gray" }, { seg: [[0, 0], [0, 27.3]], color: "green", width: 5 }, { seg: [[27.3, 0], [0, 27.3]], color: "red" }, { seg: [[47.3, 0], [0, 27.3]], color: "blue" }, { arc: [[0, 0], [27.3, 0], [0, 27.3]], label: "45°", color: "red" }, { arc: [[0, 0], [47.3, 0], [0, 27.3]], label: "30°", color: "blue" }, { text: "20 m", at: [37.3, -2.5] }, { text: "h", at: [-2, 13.6], bold: true, color: "green" }], 400)),
];
