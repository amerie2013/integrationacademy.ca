// 7.4 Applications of the Sine & Cosine Laws — 20 hard questions (values computed)
import { mc, ms, num, tf } from "./kit.mjs";
import { atriDoc } from "./fig.mjs";

const D = Math.PI / 180, G = 180 / Math.PI, sin = (d) => Math.sin(d * D), cos = (d) => Math.cos(d * D), tan = (d) => Math.tan(d * D);
const r1 = (x) => Math.round(x * 10) / 10;
const n1 = (p, v, fb, fig) => num(`${p} Round to one decimal place.`, r1(v), `${fb} $\\approx${r1(v)}$.`, fig, 0.06);
const a1 = (p, v, fb, fig) => num(`${p} Give the angle to one decimal place.`, r1(v), `${fb} $\\approx${r1(v)}^\\circ$.`, fig, 0.06);
const side = (a, A, B) => (a * sin(B)) / sin(A);
const cl = (b, c, A) => Math.sqrt(b * b + c * c - 2 * b * c * cos(A));
const ang = (a, b, c) => Math.acos((b * b + c * c - a * a) / (2 * b * c)) * G;

export const TOPIC = "7.4 Applications of the Sine & Cosine Laws";
export const Q = [
  n1(`Two observers $1.5$ km apart, on opposite sides of a drone, see it at angles of elevation of $57^\\circ$ and $69^\\circ$. Find the drone's altitude (km).`, side(1.5, 54, 69) * sin(57), "Angle at the drone $54^\\circ$; distance $\\frac{1.5\\sin69^\\circ}{\\sin54^\\circ}$; altitude $\\times\\sin57^\\circ$"),
  n1(`From the roof of a $40$ m building, the angle of depression to a car is $30^\\circ$; from the roof of a $40$ m building on the other side of the car it is $45^\\circ$. How far apart are the buildings (m)?`, 40 / tan(30) + 40 / tan(45), "$\\frac{40}{\\tan30^\\circ}+\\frac{40}{\\tan45^\\circ}$"),
  n1(`A triangular sail has sides $5$ m, $6$ m and $7$ m. Find its area using an angle from the cosine law (m²).`, 0.5 * 6 * 7 * sin(ang(5, 6, 7)), "Angle between $6$ and $7$, then $\\frac12(6)(7)\\sin\\theta$"),
  n1(`A ship sails $30$ km, turns and sails $45$ km; the angle between the legs at the turn is $70^\\circ$. How far must it sail to return directly (km)?`, cl(30, 45, 70), "Cosine law"),
  a1(`In the same trip ($30$ km, then $45$ km, $70^\\circ$ at the turn), find the angle at the start between the first leg and the return path.`, Math.asin((45 * sin(70)) / cl(30, 45, 70)) * G, "Sine law with the return distance"),
  n1(`Towers $A$ and $B$ are $14$ km apart. A fire makes angles of $58^\\circ$ at $A$ and $67^\\circ$ at $B$ with $AB$. How far is the fire from the line $AB$ (km)?`, side(14, 55, 67) * sin(58), "$AF=\\frac{14\\sin67^\\circ}{\\sin55^\\circ}$; distance $=AF\\sin58^\\circ$"),
  tf(`For two sightings from opposite sides of a tower, the angle at the top equals $180^\\circ$ minus the two angles of elevation.`, true, "The three angles of the triangle add to $180^\\circ$."),
  a1(`Three towns are joined by straight roads of $35$ km, $42$ km and $50$ km. Find the angle at the town between the $35$ km and $42$ km roads.`, ang(50, 35, 42), "Opposite $50$"),
  n1(`A parallelogram-shaped lot has sides $40$ m and $65$ m with an acute angle of $72^\\circ$. Find the shorter diagonal (m).`, cl(40, 65, 72), "Cosine law"),
  ms(`Select all quantities a surveyor could find from a baseline of known length and the two angles at its ends.`, ["the third angle", "both distances to the far point", "the perpendicular distance to the far point", "the height of an object at the far point", "the length of the baseline"], [0, 1, 2], "A height needs another angle."),
  n1(`Two people $60$ m apart, on opposite sides of a tree, see its top at angles of elevation of $52^\\circ$ and $58^\\circ$. How tall is the tree (m)?`, side(60, 70, 58) * sin(52), "Angle at the top $70^\\circ$; distance $\\frac{60\\sin58^\\circ}{\\sin70^\\circ}$; height $\\times\\sin52^\\circ$"),
  mc(`From two points on opposite sides of a hill, $500$ m apart, the angles of elevation to the top are $58^\\circ$ and $65^\\circ$. The first step is…`, "find the angle at the top: $180^\\circ-58^\\circ-65^\\circ$", ["use the cosine law", "subtract the angles", "use SOH CAH TOA with $500$"], "Then the sine law."),
  n1(`Continue: $500$ m apart, $58^\\circ$ and $65^\\circ$ on opposite sides. Find the height of the hill (m).`, side(500, 57, 65) * sin(58), "Top angle $57^\\circ$; distance from the first point $\\frac{500\\sin65^\\circ}{\\sin57^\\circ}$; height $\\times\\sin58^\\circ$"),
  n1(`A tunnel will be dug through a hill from $A$ to $B$. From point $C$, $CA=520$ m, $CB=610$ m and $\\angle ACB=55^\\circ$. How long is the tunnel (m)?`, cl(520, 610, 55), "Cosine law"),
  a1(`A triangular frame has sides $1.2$ m, $1.5$ m and $1.7$ m. Find its smallest angle.`, ang(1.2, 1.5, 1.7), "Opposite $1.2$"),
  tf(`In a triangulation, a longer baseline usually gives more accurate distances.`, true, "Small angle errors matter less."),
  n1(`Two boats leave a dock on courses $48^\\circ$ apart at $15$ km/h and $18$ km/h. How far apart are they after $2.5$ hours (km)?`, cl(37.5, 45, 48), "Distances $37.5$ and $45$ km"),
  a1(`Points $P$, $Q$ and $R$ are $8$ km, $9$ km and $11$ km apart (PQ, QR, PR). Find $\\angle Q$.`, ang(11, 8, 9), "Opposite $PR=11$"),
  n1(`A radio mast is supported by wires anchored $24$ m apart on opposite sides at $62^\\circ$ and $70^\\circ$ to the ground. How long is the wire at $70^\\circ$ (m)?`, side(24, 48, 62), "Top angle $48^\\circ$; the wire at $70^\\circ$ is opposite the $62^\\circ$ angle"),
  n1(`Use the triangle shown to find the width of the canyon, the perpendicular distance from $C$ to $AB$ (m).`, side(140, 57, 59) * sin(64), "$AC=\\frac{140\\sin59^\\circ}{\\sin57^\\circ}$; width $=AC\\sin64^\\circ$", atriDoc(64, 59, 140, { c: "140 m", A: "64°", B: "59°", names: ["A", "B", "C"] })),
];
