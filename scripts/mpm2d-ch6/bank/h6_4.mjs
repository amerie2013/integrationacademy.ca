// 6.4 Finding Side Lengths — 20 hard questions (values computed, rounded as asked)
import { mc, ms, num, tf } from "./kit.mjs";
import { rtADoc } from "./fig.mjs";

const D = Math.PI / 180, sin = (d) => Math.sin(d * D), cos = (d) => Math.cos(d * D), tan = (d) => Math.tan(d * D);
const r1 = (x) => Math.round(x * 10) / 10;
const n1 = (prompt, value, fb, fig) => num(`${prompt} Round to one decimal place.`, r1(value), `${fb} $\\approx${r1(value)}$.`, fig, 0.06);
const n0 = (prompt, value, fb) => num(`${prompt} Round to the nearest whole number.`, Math.round(value), `${fb} $\\approx${Math.round(value)}$.`, null, 0.6);

export const TOPIC = "6.4 Finding Side Lengths";
export const Q = [
  n1(`An isosceles triangle has equal sides of $12$ and base angles of $70^\\circ$. Find the base.`, 2 * 12 * cos(70), "Half the base is $12\\cos70^\\circ$; double it:"),
  n1(`An isosceles triangle has equal sides of $12$ and base angles of $70^\\circ$. Find its height.`, 12 * sin(70), "$12\\sin70^\\circ$"),
  n1(`A right triangle has hypotenuse $15$ and a $38^\\circ$ angle. Find its area.`, 0.5 * 15 * sin(38) * 15 * cos(38), "$\\frac12(15\\sin38^\\circ)(15\\cos38^\\circ)$"),
  n1(`A rectangle's diagonal is $20$ cm and makes a $28^\\circ$ angle with the longer side. Find the perimeter (cm).`, 2 * (20 * cos(28) + 20 * sin(28)), "$2(20\\cos28^\\circ+20\\sin28^\\circ)$"),
  n0(`A plane climbs at $12^\\circ$ and travels $3$ km along its path. What is its altitude in metres?`, 3000 * sin(12), "$3000\\sin12^\\circ$"),
  mc(`The hypotenuse is $10$ and $x$ is opposite a $40^\\circ$ angle. A student writes $x=10\\tan40^\\circ$. What is wrong?`, "with the hypotenuse known, use sine: $x=10\\sin40^\\circ$", ["nothing", "it should be $x=\\frac{10}{\\tan40^\\circ}$", "it should be $x=10\\cos40^\\circ$"], "tan uses opposite and adjacent."),
  n1(`A $6$ m ladder is safest at $75^\\circ$ to the ground. How far should its foot be from the wall (m)?`, 6 * cos(75), "$6\\cos75^\\circ$"),
  n1(`A guy wire is attached $15$ m up a pole and makes a $58^\\circ$ angle with the ground. How long is the wire (m)?`, 15 / sin(58), "$\\frac{15}{\\sin58^\\circ}$"),
  n1(`A right triangle has a $30^\\circ$ angle whose adjacent side is $10$. Find its perimeter.`, 10 + 10 * tan(30) + 10 / cos(30), "$10+10\\tan30^\\circ+\\frac{10}{\\cos30^\\circ}$"),
  n1(`A staircase rises $2.8$ m at an angle of $37^\\circ$. How much horizontal floor space does it cover (m)?`, 2.8 / tan(37), "$\\frac{2.8}{\\tan37^\\circ}$"),
  tf(`$15\\cos38^\\circ$ and $15\\sin52^\\circ$ have the same value.`, true, "$\\cos38^\\circ=\\sin52^\\circ$."),
  ms(`A right triangle has hypotenuse $13$ and the side opposite $\\theta$ is $5$. Select all true statements.`, ["the adjacent side is $12$", "$\\sin\\theta=\\frac5{13}$", "$\\theta\\approx22.6^\\circ$", "$\\cos\\theta=\\frac5{13}$", "$\\tan\\theta=\\frac{13}5$"], [0, 1, 2], "$\\sqrt{169-25}=12$."),
  n1(`A $1.2$ m tall child flies a kite on a $40$ m string at $55^\\circ$ to the horizontal (from the child's hand). How high is the kite above the ground (m)?`, 1.2 + 40 * sin(55), "$1.2+40\\sin55^\\circ$"),
  n1(`An equilateral triangle has sides of $10$ cm. Find its height using trigonometry (cm).`, 10 * sin(60), "$10\\sin60^\\circ$"),
  n1(`A parallelogram has sides $8$ and $12$ with a $50^\\circ$ angle between them. Find its height measured to the side of length $12$.`, 8 * sin(50), "$8\\sin50^\\circ$"),
  n1(`From $120$ m away on level ground, the angle to the top of a cliff is $28^\\circ$. How tall is the cliff (m)?`, 120 * tan(28), "$120\\tan28^\\circ$"),
  n0(`A road rises at $6^\\circ$. Driving $2.5$ km along it, how many metres do you climb?`, 2500 * sin(6), "$2500\\sin6^\\circ$"),
  tf(`For the same hypotenuse, doubling the angle doubles the opposite side.`, false, "$\\sin60^\\circ\\ne2\\sin30^\\circ$: $0.866\\ne1$."),
  mc(`Which is larger, $10\\sin40^\\circ$ or $10\\cos40^\\circ$?`, "$10\\cos40^\\circ$", ["$10\\sin40^\\circ$", "they are equal", "it depends on the triangle"], "Below $45^\\circ$ the adjacent side is longer."),
  n1(`Find the hypotenuse $x$ of the triangle shown.`, 30 / cos(24), "$\\frac{30}{\\cos24^\\circ}$", rtADoc(24, { adj: "30", hyp: "x", theta: "24°" })),
];
