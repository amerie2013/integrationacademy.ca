// 7.2 The Cosine Law — 20 hard questions (values computed, rounded as asked)
import { mc, ms, num, tf } from "./kit.mjs";
import { sasDoc } from "./fig.mjs";

const D = Math.PI / 180, G = 180 / Math.PI, cos = (d) => Math.cos(d * D), sin = (d) => Math.sin(d * D);
const r1 = (x) => Math.round(x * 10) / 10;
const n1 = (p, v, fb, fig) => num(`${p} Round to one decimal place.`, r1(v), `${fb} $\\approx${r1(v)}$.`, fig, 0.06);
const a1 = (p, v, fb, fig) => num(`${p} Give the angle to one decimal place.`, r1(v), `${fb} $\\approx${r1(v)}^\\circ$.`, fig, 0.06);
const cl = (b, c, A) => Math.sqrt(b * b + c * c - 2 * b * c * cos(A));
const ang = (a, b, c) => Math.acos((b * b + c * c - a * a) / (2 * b * c)) * G;

export const TOPIC = "7.2 The Cosine Law";
export const Q = [
  a1(`Two sides of a triangle are $8$ and $11$. Find the included angle that makes the third side exactly $9$.`, ang(9, 8, 11), "$81=64+121-176\\cos A$"),
  n1(`In acute $\\triangle ABC$, $b=12$, $c=15$ and $\\angle A=54^\\circ$. Find $a$, then the area using $\\frac12bc\\sin A$.`, 0.5 * 12 * 15 * sin(54), "Area $=\\frac12(12)(15)\\sin54^\\circ$"),
  a1(`A triangle has sides $5$, $7$ and $8$. Find the angle opposite $7$.`, ang(7, 5, 8), "$\\cos\\theta=\\frac{25+64-49}{80}=0.5$"),
  n1(`A plane flies $180$ km, turns, and flies $240$ km. The angle between the legs at the turn is $68^\\circ$. How far is it from the start (km)?`, cl(180, 240, 68), "SAS"),
  tf(`If $a^2=b^2+c^2$, then $\\angle A=90^\\circ$.`, true, "Then $2bc\\cos A=0$, so $\\cos A=0$."),
  mc(`For sides $6$, $8$ and $9$, which angle is largest and is it acute?`, "the angle opposite $9$; acute", ["the angle opposite $6$; acute", "the angle opposite $9$; obtuse", "they are all equal"], "$81<36+64$."),
  n1(`In acute $\\triangle ABC$, $a=9$, $b=12$ and $\\angle C=58^\\circ$. Find the perimeter.`, 21 + cl(9, 12, 58), "$c=\\sqrt{81+144-216\\cos58^\\circ}$; add $9+12$"),
  a1(`A kite (quadrilateral) has sides $5$, $5$, $8$ and $8$ and a diagonal of $9$ joining the two corners where unequal sides meet. Find the angle between the two $8$ cm sides.`, ang(9, 8, 8), "In the triangle $8$, $8$, $9$: $\\cos\\theta=\\frac{64+64-81}{128}$"),
  ms(`Select all true statements for acute triangles.`, ["$a^2<b^2+c^2$ for every side", "every cosine value is positive", "$2bc\\cos A$ is subtracted", "the cosine law gives $a$ directly without a square root", "the largest angle is opposite the longest side"], [0, 1, 2, 4], "The law gives $a^2$."),
  n1(`Two boats leave a dock on paths $64^\\circ$ apart at $14$ km/h and $18$ km/h. How far apart are they after $1.5$ hours (km)?`, cl(21, 27, 64), "Distances $21$ and $27$ km"),
  a1(`A triangle has sides $11$, $14$ and $16$. Find the angle opposite $14$.`, ang(14, 11, 16), "$\\cos\\theta=\\frac{121+256-196}{352}$"),
  n1(`A rhombus has sides of $10$ cm and an angle of $50^\\circ$. Find its shorter diagonal (cm).`, cl(10, 10, 50), "$d^2=100+100-200\\cos50^\\circ$"),
  mc(`A student computes $a^2=7^2+9^2-2(7)(9)\\cos55^\\circ$ as $(130-126)\\cos55^\\circ$. The correct value of $a$ is about…`, "$7.6$", ["$1.5$", "$57.7$", "$9.0$"], "$a^2=130-126\\cos55^\\circ\\approx57.7$."),
  n1(`From a lighthouse, ship $P$ is $8$ km away and ship $Q$ is $11$ km away, with $52^\\circ$ between the two sightlines. How far apart are the ships (km)?`, cl(8, 11, 52), "SAS"),
  a1(`A triangular sail has sides $4$ m, $6$ m and $7$ m. Find the angle between the $6$ m and $7$ m sides.`, ang(4, 6, 7), "Opposite $4$"),
  tf(`The cosine law can be developed using the Pythagorean theorem twice.`, true, "Once in each right triangle formed by an altitude."),
  n1(`In acute $\\triangle ABC$, $b=7$, $c=10$ and $\\angle A=63^\\circ$. Find $a$, then use the sine law to find $\\angle B$ (degrees).`, (Math.asin((7 * sin(63)) / cl(7, 10, 63)) * 180) / Math.PI, "$a\\approx9.3$; $\\sin B=\\frac{7\\sin63^\\circ}{a}$"),
  a1(`Three towns form a triangle with roads of $24$ km, $30$ km and $33$ km. Find the angle at the town between the $24$ km and $30$ km roads.`, ang(33, 24, 30), "Opposite $33$"),
  a1(`A triangle has sides $7$, $9$ and $11$. Find its largest angle and decide whether the triangle is acute.`, ang(11, 7, 9), "Opposite $11$: $\\cos\\theta=\\frac{49+81-121}{126}$; less than $90^\\circ$, so acute"),
  n1(`Find the side $x$ opposite the $47^\circ$ angle in the triangle shown.`, cl(13, 16, 47), "$x^2=169+256-416\\cos47^\\circ$", sasDoc(13, 16, 47, { b: "13", c: "16", a: "x", A: "47°" })),
];
