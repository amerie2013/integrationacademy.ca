// 7.3 Choosing the Right Law — 20 hard questions (values computed, rounded as asked)
import { mc, ms, num, tf } from "./kit.mjs";
import { sasDoc } from "./fig.mjs";

const D = Math.PI / 180, G = 180 / Math.PI, sin = (d) => Math.sin(d * D), cos = (d) => Math.cos(d * D), asin = (x) => Math.asin(x) * G;
const r1 = (x) => Math.round(x * 10) / 10;
const n1 = (p, v, fb, fig) => num(`${p} Round to one decimal place.`, r1(v), `${fb} $\\approx${r1(v)}$.`, fig, 0.06);
const a1 = (p, v, fb, fig) => num(`${p} Give the angle to one decimal place.`, r1(v), `${fb} $\\approx${r1(v)}^\\circ$.`, fig, 0.06);
const side = (a, A, B) => (a * sin(B)) / sin(A);
const cl = (b, c, A) => Math.sqrt(b * b + c * c - 2 * b * c * cos(A));
const ang = (a, b, c) => Math.acos((b * b + c * c - a * a) / (2 * b * c)) * G;

export const TOPIC = "7.3 Choosing the Right Law";
export const Q = [
  a1(`In acute $\\triangle ABC$, $b=10$, $c=13$ and $\\angle A=61^\\circ$. Find $\\angle C$.`, 180 - 61 - asin((10 * sin(61)) / cl(10, 13, 61)), "Cosine law for $a$; sine law for $\\angle B$ (the smaller); then $180^\\circ$"),
  n1(`Solve completely and give the perimeter: $\\angle A=54^\\circ$, $\\angle B=67^\\circ$, $c=18$.`, 18 + side(18, 59, 54) + side(18, 59, 67), "$\\angle C=59^\\circ$; sine law for $a$ and $b$"),
  a1(`A triangle has sides $14$, $17$ and $19$. Find the angle opposite $17$.`, ang(17, 14, 19), "Cosine law"),
  mc(`Which information does NOT determine a unique triangle?`, "three angles", ["three sides", "two sides and the included angle", "two angles and a side"], "AAA gives similar triangles of any size."),
  n1(`In acute $\\triangle ABC$, $a=9$, $\\angle A=66^\\circ$ and $b=8$. Find $c$.`, side(9, 66, 180 - 66 - asin((8 * sin(66)) / 9)), "$\\angle B$ by the sine law, $\\angle C=180^\\circ-66^\\circ-\\angle B$, then $c=\\frac{9\\sin C}{\\sin66^\\circ}$"),
  ms(`Select all correct strategies.`, ["SAS: cosine law, then sine law", "SSS: cosine law for the largest angle first", "AAS: find the third angle, then sine law", "SSA in an acute triangle: cosine law only", "right triangle: primary ratios"], [0, 1, 2, 4], "SSA uses the sine law."),
  n1(`In acute $\\triangle ABC$, $b=21$, $c=17$ and $\\angle A=58^\\circ$. Find the altitude from $C$ to $AB$.`, 21 * sin(58), "The altitude to $AB$ is $b\\sin A$"),
  a1(`A parallelogram has sides $9$ and $14$ and a shorter diagonal of $11$. Find the acute angle of the parallelogram.`, ang(11, 9, 14), "In the triangle $9$, $14$, $11$: angle opposite $11$"),
  tf(`Both laws reduce to right-triangle facts when one angle is $90^\\circ$.`, true, "$\\sin90^\\circ=1$ and $\\cos90^\\circ=0$."),
  n1(`Two sides of an acute triangle are $9$ and $13$, and the angle opposite $13$ is $70^\\circ$. Find the third side.`, side(13, 70, 180 - 70 - asin((9 * sin(70)) / 13)), "Sine law for the angle opposite $9$, then the third angle, then the sine law"),
  mc(`You know $a$, $b$ and $c$, and you want the area. A good plan is…`, "find an angle with the cosine law, then use $\\frac12bc\\sin A$", ["use the sine law first", "multiply $a\\times b$", "use SOH CAH TOA directly"], "You need an angle between two known sides."),
  a1(`In acute $\\triangle ABC$, $\\angle A=50^\\circ$, $b=12$ and $c=15$. Find $\\angle B$.`, asin((12 * sin(50)) / cl(12, 15, 50)), "Cosine law for $a$, then the sine law"),
  n1(`A triangle has angles $48^\\circ$ and $75^\\circ$ and the side between them is $22$. Find the shortest side.`, side(22, 57, 48), "Third angle $57^\\circ$; the shortest side is opposite $48^\\circ$"),
  tf(`In an SSS problem, finding the largest angle first shows whether the triangle is acute.`, true, "If it is less than $90^\\circ$, all are."),
  n1(`In acute $\\triangle ABC$, $a=14$, $b=16$, $c=18$. Find the area using an angle from the cosine law.`, 0.5 * 16 * 18 * sin(ang(14, 16, 18)), "$\\angle A$ from the cosine law; area $=\\frac12bc\\sin A$"),
  mc(`A triangle has $a=7$, $\\angle B=40^\\circ$ and $c=9$. The first step is…`, "the cosine law for $b$ (SAS: $\\angle B$ is between $a$ and $c$)", ["the sine law for $\\angle A$", "SOH CAH TOA", "find the third angle"], "Check which angle lies between the sides."),
  a1(`Continue: $a=7$, $\\angle B=40^\\circ$, $c=9$. Find $\\angle A$.`, asin((7 * sin(40)) / cl(7, 9, 40)), "$b=\\sqrt{49+81-126\\cos40^\\circ}$; $\\sin A=\\frac{7\\sin40^\\circ}{b}$"),
  n1(`An isosceles triangle has equal sides $10$ and a vertex angle of $48^\\circ$. Find the base two ways (cosine law, or sine law). Give the base.`, cl(10, 10, 48), "$\\sqrt{200-200\\cos48^\\circ}$"),
  ms(`For an acute triangle with $a=10$, $b=12$, $\\angle C=55^\\circ$, select all true statements.`, ["it is SAS", "the cosine law gives $c$", "after finding $c$, the sine law gives $\\angle A$", "the sine law can be used first", "the angles add to $180^\\circ$"], [0, 1, 2, 4], "No pair at first."),
  n1(`Find the side $x$ opposite the $58^\\circ$ angle in the triangle shown.`, cl(12, 14, 58), "Cosine law", sasDoc(12, 14, 58, { b: "12", c: "14", a: "x", A: "58°" })),
];
