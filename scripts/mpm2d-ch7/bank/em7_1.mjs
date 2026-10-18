// 7.1 The Sine Law — 20 easy + 20 medium questions (values computed, rounded as asked)
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { atriDoc } from "./fig.mjs";

const D = Math.PI / 180, G = 180 / Math.PI, sin = (d) => Math.sin(d * D), asin = (x) => Math.asin(x) * G;
const r1 = (x) => Math.round(x * 10) / 10;
const n1 = (p, v, fb, fig) => num(`${p} Round to one decimal place.`, r1(v), `${fb} $\\approx${r1(v)}$.`, fig, 0.06);
const a1 = (p, v, fb, fig) => num(`${p} Give the angle to one decimal place.`, r1(v), `${fb} $\\approx${r1(v)}^\\circ$.`, fig, 0.06);
const side = (a, A, B) => (a * sin(B)) / sin(A); // side opposite B, from the pair (a, A)
const ang = (a, A, b) => asin((b * sin(A)) / a); // angle opposite b, from the pair (a, A)

export const E = [
  mc(`Which is the sine law?`, "$\\frac a{\\sin A}=\\frac b{\\sin B}=\\frac c{\\sin C}$", ["$\\frac a{\\sin B}=\\frac b{\\sin A}$", "$a^2=b^2+c^2-2bc\\cos A$", "$\\frac{\\sin a}{A}=\\frac{\\sin b}{B}$"], "Each side over the sine of its opposite angle."),
  mc(`In $\\triangle ABC$, side $a$ is…`, "opposite $\\angle A$", ["next to $\\angle A$", "the longest side", "between $\\angle B$ and $\\angle C$ only"], "Lower-case sides are opposite the matching angles."),
  tf(`The sine law can be used in acute triangles that have no right angle.`, true, "It was developed for exactly those."),
  n1(`In acute $\\triangle ABC$, $\\angle A=45^\\circ$, $\\angle B=60^\\circ$ and $a=10$. Find $b$.`, side(10, 45, 60), "$b=\\frac{10\\sin60^\\circ}{\\sin45^\\circ}$"),
  n1(`In acute $\\triangle ABC$, $\\angle A=50^\\circ$, $\\angle B=70^\\circ$ and $a=8$. Find $b$.`, side(8, 50, 70), "$b=\\frac{8\\sin70^\\circ}{\\sin50^\\circ}$"),
  num(`Two angles of a triangle are $52^\\circ$ and $61^\\circ$. Find the third (degrees).`, 67, "$180-52-61$.", null, 0.01),
  n1(`In acute $\\triangle ABC$, $\\angle A=40^\\circ$, $\\angle B=65^\\circ$ and $b=12$. Find $a$.`, side(12, 65, 40), "$a=\\frac{12\\sin40^\\circ}{\\sin65^\\circ}$"),
  mc(`Which information lets you use the sine law directly?`, "two angles and a side opposite one of them (AAS)", ["three sides", "two sides and the included angle", "three angles only"], "You need a side–angle pair."),
  n1(`In acute $\\triangle ABC$, $\\angle A=58^\\circ$, $\\angle B=72^\\circ$ and $a=15$. Find $b$.`, side(15, 58, 72), "$b=\\frac{15\\sin72^\\circ}{\\sin58^\\circ}$"),
  tf(`To find an angle with the sine law, you solve for its sine and then use $\\sin^{-1}$.`, true, "$\\sin B=\\frac{b\\sin A}a$."),
  a1(`In acute $\\triangle ABC$, $a=7$, $b=8$ and $\\angle B=70^\\circ$. Find $\\angle A$.`, ang(8, 70, 7), "$\\sin A=\\frac{7\\sin70^\\circ}8$"),
  n1(`In acute $\\triangle ABC$, $\\angle A=55^\\circ$, $\\angle C=65^\\circ$ and $a=11$. Find $c$.`, side(11, 55, 65), "$c=\\frac{11\\sin65^\\circ}{\\sin55^\\circ}$"),
  fill(`In $\\frac a{\\sin A}=\\frac b{\\sin B}$, side $b$ is paired with angle ___.`, ["B", "∠B", "angle B"], "Its opposite angle."),
  num(`In a triangle, $a=10$ and $\\angle A=30^\\circ$. Find $\\frac a{\\sin A}$.`, 20, "$\\frac{10}{0.5}$.", null, 0.01),
  a1(`In acute $\\triangle ABC$, $a=9$, $b=10$ and $\\angle B=75^\\circ$. Find $\\angle A$.`, ang(10, 75, 9), "$\\sin A=\\frac{9\\sin75^\\circ}{10}$"),
  mc(`An altitude $h$ from $C$ gives $h=b\\sin A$. It also equals…`, "$a\\sin B$", ["$c\\sin C$", "$a\\cos B$", "$b\\sin B$"], "From the other right triangle."),
  n1(`In acute $\\triangle ABC$, $\\angle A=60^\\circ$, $\\angle B=50^\\circ$ and $c=10$. Find $a$.`, side(10, 70, 60), "$\\angle C=70^\\circ$; $a=\\frac{10\\sin60^\\circ}{\\sin70^\\circ}$"),
  tf(`In any triangle, the longest side is opposite the largest angle.`, true, "Larger angle, larger sine (for acute angles), larger side."),
  n1(`In acute $\\triangle ABC$, $\\angle A=48^\\circ$, $\\angle B=62^\\circ$ and $b=20$. Find $a$.`, side(20, 62, 48), "$a=\\frac{20\\sin48^\\circ}{\\sin62^\\circ}$"),
  n1(`Find $x$ in the triangle shown.`, side(14, 52, 66), "$x=\\frac{14\\sin66^\\circ}{\\sin52^\\circ}$", atriDoc(52, 66, side(14, 52, 62), { a: "14", b: "x", A: "52°", B: "66°" })),
];

export const M = [
  n1(`In acute $\\triangle ABC$, $\\angle A=38^\\circ$, $\\angle B=75^\\circ$ and $a=12$. Find $c$.`, side(12, 38, 67), "$\\angle C=67^\\circ$; $c=\\frac{12\\sin67^\\circ}{\\sin38^\\circ}$"),
  a1(`In acute $\\triangle ABC$, $a=15$, $b=17$ and $\\angle B=80^\\circ$. Find $\\angle A$.`, ang(17, 80, 15), "$\\sin A=\\frac{15\\sin80^\\circ}{17}$"),
  n1(`Points $A$ and $B$ are $120$ m apart. A buoy $C$ makes $\\angle A=65^\\circ$ and $\\angle B=70^\\circ$. Find $AC$ (m).`, side(120, 45, 70), "$\\angle C=45^\\circ$; $AC=\\frac{120\\sin70^\\circ}{\\sin45^\\circ}$"),
  n1(`In acute $\\triangle ABC$, $\\angle A=56^\\circ$, $\\angle B=68^\\circ$ and $c=25$. Find $b$.`, side(25, 56, 68), "$\\angle C=56^\\circ$; $b=\\frac{25\\sin68^\\circ}{\\sin56^\\circ}$"),
  a1(`In acute $\\triangle ABC$, $a=20$, $\\angle A=78^\\circ$ and $c=16$. Find $\\angle C$.`, ang(20, 78, 16), "$\\sin C=\\frac{16\\sin78^\\circ}{20}$"),
  num(`A triangle has $\\angle A=\\angle B=60^\\circ$ and $a=10$. Find its perimeter.`, 30, "It is equilateral.", null, 0.01),
  mc(`A student writes $\\frac a{\\sin B}=\\frac b{\\sin A}$. What is wrong?`, "each side must be over the sine of its opposite angle", ["nothing", "it should use cosines", "the sides should be squared"], "$\\frac a{\\sin A}=\\frac b{\\sin B}$."),
  n1(`Two towers are $20$ km apart. A fire is seen at $50^\\circ$ from tower $A$ and $64^\\circ$ from tower $B$. How far is the fire from tower $A$ (km)?`, side(20, 66, 64), "$\\angle F=66^\\circ$; $AF=\\frac{20\\sin64^\\circ}{\\sin66^\\circ}$"),
  tf(`If $a=b$ in a triangle, then $\\angle A=\\angle B$.`, true, "Equal sides are opposite equal angles."),
  n1(`In acute $\\triangle ABC$, $\\angle A=64^\\circ$, $\\angle C=58^\\circ$ and $b=18$. Find $a$.`, side(18, 58, 64), "$\\angle B=58^\\circ$; $a=\\frac{18\\sin64^\\circ}{\\sin58^\\circ}$"),
  ms(`Select all true statements about the sine law.`, ["each side is paired with its opposite angle", "it can find an angle", "it needs a known side–angle pair", "it can solve a triangle from three sides alone", "the common ratio also equals $\\frac c{\\sin C}$"], [0, 1, 2, 4], "SSS needs the cosine law."),
  a1(`In acute $\\triangle ABC$, $b=12$, $c=14$ and $\\angle C=75^\\circ$. Find $\\angle B$.`, ang(14, 75, 12), "$\\sin B=\\frac{12\\sin75^\\circ}{14}$"),
  n1(`An isosceles triangle has a $40^\\circ$ vertex angle and a base of $10$. Find the length of each equal side.`, side(10, 40, 70), "Base angles $70^\\circ$: $\\frac{10\\sin70^\\circ}{\\sin40^\\circ}$"),
  n1(`Two people $50$ m apart, on opposite sides of a kite, see it at angles of elevation of $52^\\circ$ and $66^\\circ$. How high is the kite (m)?`, side(50, 62, 66) * sin(52), "Angle at the kite $62^\\circ$; distance $\\frac{50\\sin66^\\circ}{\\sin62^\\circ}$, height $\\times\\sin52^\\circ$"),
  mc(`In acute $\\triangle ABC$, $\\angle A=50^\\circ$ and $\\angle B=70^\\circ$. Which side is longer, $a$ or $b$?`, "$b$", ["$a$", "they are equal", "it depends on $c$"], "The larger angle is opposite the longer side."),
  n1(`Points $A$ and $B$ are $90$ m apart on a riverbank. A tree $C$ across the river makes $\\angle A=75^\\circ$ and $\\angle B=60^\\circ$. Find the width of the river (m).`, side(90, 45, 60) * sin(75), "$AC=\\frac{90\\sin60^\\circ}{\\sin45^\\circ}$; width $=AC\\sin75^\\circ$"),
  a1(`In acute $\\triangle ABC$, $a=11$, $b=9$ and $\\angle A=68^\\circ$. Find $\\angle B$.`, ang(11, 68, 9), "$\\sin B=\\frac{9\\sin68^\\circ}{11}$"),
  num(`In a triangle, $a=5$ and $\\angle A=30^\\circ$. Find $\\frac{\\sin A}a$.`, 0.1, "$\\frac{0.5}5$.", null, 0.001),
  fill(`Before using the sine law when two angles are known, find the ___ angle.`, ["third"], "Angles add to $180^\\circ$."),
  n1(`Find side $b$ in the triangle shown.`, side(12, 58, 64), "$\\angle C=58^\\circ$; $b=\\frac{12\\sin64^\\circ}{\\sin58^\\circ}$", atriDoc(58, 64, 12, { c: "12", b: "b", A: "58°", B: "64°" })),
];
