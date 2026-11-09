// 5.2 Problems with Two Right Triangles — 20 hard questions
import { mc, ms, num, tf } from "../../bank/kit.mjs";
import { n2, sin, cos, tan, atan, triD } from "./trig.mjs";
const S = String.raw;
const walk = (d, a1, a2) => d / (1 / tan(a1) - 1 / tan(a2));

export const TOPIC = "5.2 Problems with Two Right Triangles";
export const Q = [
  n2(S`Walking $100$ m toward a hill changes the elevation from $15^\circ$ to $25^\circ$. Find the height.`, walk(100, 15, 25), "h = d/(1/tan15 − 1/tan25).", triD([[-walk(100, 15, 25) / tan(15), 0], [0, 0], [0, walk(100, 15, 25)]], [], { open: true, extra: [{ pts: [[-walk(100, 15, 25) / tan(25), 0], [0, walk(100, 15, 25)]], color: "violet" }] })),
  n2(S`For that hill, how far is the second point from the base?`, walk(100, 15, 25) / tan(25), "x = h / tan 25°."),
  n2(S`A $35$ m lighthouse stands on a cliff. From a boat, its top is at $28^\circ$ and its base at $20^\circ$. Find the cliff height.`, (35 / (tan(28) - tan(20))) * tan(20), "x(tan 28 − tan 20) = 35.", triD([[35 / (tan(28) - tan(20)), 0], [0, 0], [0, (35 / (tan(28) - tan(20))) * tan(28)]], [], { open: true, extra: [{ pts: [[35 / (tan(28) - tan(20)), 0], [0, (35 / (tan(28) - tan(20))) * tan(20)]], color: "violet" }, { pts: [[35 / (tan(28) - tan(20)), 0], [0, (35 / (tan(28) - tan(20))) * tan(28)]], color: "violet" }] })),
  n2(S`A helicopter is above a road between points $3$ km apart, with depressions $35^\circ$ and $55^\circ$. Find its height (km).`, ((3 * tan(55)) / (tan(35) + tan(55))) * tan(35), "x tan 35 = (3 − x) tan 55."),
  n2(S`From a window $18$ m up, the top of a building across the street is at $40^\circ$ and its base at $30^\circ$ depression. Building height?`, 18 + (18 / tan(30)) * tan(40), "Width 18/tan 30°.", triD([[0, 0], [0, 18], [18 / tan(30), 18 + (18 / tan(30)) * tan(40)], [18 / tan(30), 0]], [], { extra: [{ pts: [[0, 18], [18 / tan(30), 18]], color: "gray" }] })),
  n2(S`$AB=24$, $\angle A=50^\circ$, $BD\perp AC$, $BC=20$. Find $\angle C$.`, Math.asin((24 * sin(50)) / 20) * 180 / Math.PI, "sin C = BD / BC."),
  n2(S`Two buildings are $40$ m apart. From the top of the shorter ($25$ m), the top of the taller is at $35^\circ$ elevation. Find the taller height.`, 25 + 40 * tan(35), "25 + 40 tan 35°."),
  n2(S`From a $90$ m cliff, a boat sails directly toward it for $2$ minutes and its depression changes from $10^\circ$ to $18^\circ$. Find its speed in m/min.`, (90 / tan(10) - 90 / tan(18)) / 2, "Distance ÷ 2."),
  n2(S`The angles of elevation of a tower's top from two points $30$ m apart on the same side are $40^\circ$ and $55^\circ$. Find the height.`, walk(30, 40, 55), "Walking toward."),
  mc("The diagram shows two right triangles sharing BD. Which side do you find first?", "BD from the triangle with a known side and angle", ["AC", "the hypotenuse of the second triangle", "none"], "Shared side first.", triD([[0, 0], [10 * cos(40), 10 * sin(40)], [10 * cos(40) + (10 * sin(40)) / tan(60), 0]], ["A", "B", "C"], { extra: [{ pts: [[10 * cos(40), 10 * sin(40)], [10 * cos(40), 0]], color: "red" }] })),
  n2(S`In that diagram, $AB=10$, $\angle A=40^\circ$, $\angle C=60^\circ$. Find $BC$.`, (10 * sin(40)) / sin(60), "BC = BD / sin 60°."),
  ms(S`Select every TRUE statement.`, ["a smaller angle of depression means a farther object", "the shared side must be horizontal", "keeping full precision avoids rounding errors", "observers on opposite sides: add distances"], [0, 2, 3], "The shared side can be vertical or slanted."),
  tf(S`In a walking-toward problem, if $\alpha=\beta$ the walk distance is $0$.`, true, "Same position."),
  n2(S`A $1.7$ m person stands $12$ m from a tree and sees its top at $38^\circ$. Tree height?`, 1.7 + 12 * tan(38), "Add eye height."),
  n2(S`From a balloon $250$ m up, two cars on opposite sides are at $38^\circ$ and $52^\circ$ depression. Distance apart?`, 250 / tan(38) + 250 / tan(52), "Add."),
  n2(S`A pole is supported by two wires anchored $8$ m and $15$ m from its base on the same side. The near wire makes $60^\circ$ with the ground. Find the far wire's angle.`, atan((8 * tan(60)) / 15), "Same height h = 8 tan 60°."),
  n2(S`A plane flying at $5000$ m sees a lake's near and far shores at $40^\circ$ and $25^\circ$ depression. Lake length?`, 5000 / tan(25) - 5000 / tan(40), "Subtract."),
  num(S`Two right triangles share a leg of length $h$. If the other legs are $h$ and $h\sqrt3$, enter the difference of their acute angles at the base (degrees).`, 15, "45° and 30°."),
  n2(S`From the top of a $45$ m building, the angles of depression to the top and base of a shorter building are $22^\circ$ and $41^\circ$. Find the shorter building's height.`, 45 - (45 / tan(41)) * tan(22), "45 − gap·tan 22°."),
  n2(S`A tower and a building are $60$ m apart. From the building's roof ($20$ m), the tower top is at $38^\circ$ elevation and its base at $\tan^{-1}(20/60)$ depression. Tower height?`, 20 + 60 * tan(38), "20 + 60 tan 38°."),
];
