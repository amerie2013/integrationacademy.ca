// 5.4 The Cosine Law — 20 hard questions
import { mc, ms, num, tf } from "../../bank/kit.mjs";
import { n2, sin, cos, asin, L, Ang, sasD } from "./trig.mjs";
const S = String.raw;

export const TOPIC = "5.4 The Cosine Law";
export const Q = [
  n2(S`Two hikers leave camp on paths $52^\circ$ apart, walking $4.2$ km/h and $5.5$ km/h. How far apart are they after $1.5$ h?`, L(6.3, 8.25, 52), "Sides 6.3 and 8.25 km.", sasD(6.3, 8.25, 52, ["camp", "", ""])),
  n2(S`A triangular lot has sides $42$ m, $58$ m and $65$ m. Find its area (find an angle first, then $\tfrac12ab\sin C$).`, 0.5 * 42 * 58 * sin(Ang(65, 42, 58)), "C opposite 65."),
  n2(S`A boat sails $12$ km east, then turns $40^\circ$ toward the north and sails $9$ km. How far is it from the start?`, L(12, 9, 140), "Interior angle 140°."),
  n2(S`For that boat, find the angle between its first leg and the line back to the start.`, Ang(9, 12, L(12, 9, 140)), "SSS with the computed side."),
  n2(S`A baseball diamond is a square with $27.4$ m sides. The pitcher's mound is $18.4$ m from home plate on the diagonal. How far is the mound from first base?`, L(27.4, 18.4, 45), "Angle 45° at home plate.", sasD(27.4, 18.4, 45, ["home", "1st", "mound"])),
  n2(S`A rhombus has side $10$ cm and one diagonal $16$ cm. Find the obtuse angle of the rhombus.`, Ang(16, 10, 10), "The 16 cm diagonal is opposite the obtuse angle."),
  n2(S`Towers $A$ and $B$ are $7$ km and $11$ km from a fire, and $9$ km from each other. Find the angle at tower $A$ between $B$ and the fire.`, Ang(11, 7, 9), "Side opposite A is 11.", sasD(7, 9, Ang(11, 7, 9), ["A", "fire", "B"])),
  n2(S`Two forces of $30$ N and $45$ N act at $65^\circ$ to each other. The resultant is the diagonal of the parallelogram. Find its size.`, L(30, 45, 115), "Diagonal opposite 180° − 65° = 115°."),
  n2(S`A triangle has $a=11$, $b=15$, $C=37^\circ$. Find $A$.`, asin((11 * sin(37)) / L(11, 15, 37)), "Cosine law for c, then sine law for the smaller angle A."),
  n2(S`A triangle has sides $x$, $x+2$ and $x+4$ with $x=6$. Find its largest angle.`, Ang(10, 6, 8), "Sides 6, 8, 10."),
  ms(S`Select every TRUE statement.`, ["the cosine law works for obtuse angles", "SSS always gives the largest angle opposite the longest side", "the cosine law needs a right angle", "if c² > a² + b², angle C is obtuse"], [0, 1, 3], "Compare c² with a² + b²."),
  tf(S`If $c^2=a^2+b^2$, then $C=90^\circ$.`, true, "cos C = 0."),
  num(S`Sides $5$, $7$, $8$: enter the middle angle (degrees).`, 60, "cos = (25 + 64 − 49)/80 = ½.", null, 0.01),
  n2(S`A radar station sees a plane $48$ km away at a bearing of $038^\circ$ and a second plane $65$ km away at $112^\circ$. How far apart are the planes?`, L(48, 65, 74), "Angle 112 − 38 = 74°."),
  mc("In the diagram, which equation finds angle P?", S`$\cos P=\frac{9^2+12^2-14^2}{2(9)(12)}$`, [S`$\cos P=\frac{14^2-9^2-12^2}{2(9)(12)}$`, S`$\sin P=\frac{14}{12}$`, S`$\cos P=\frac{9+12-14}{2}$`], "P is opposite 14.", sasD(9, 12, Ang(14, 9, 12), ["P", "", ""])),
  n2("For that diagram (sides 9, 12, 14 with 14 opposite P), find P.", Ang(14, 9, 12), "SSS."),
  n2(S`A tunnel will go straight through a hill from $A$ to $B$. From a point $C$, $CA=380$ m, $CB=520$ m and $\angle C=63^\circ$. Find the tunnel's length.`, L(380, 520, 63), "SAS."),
  n2(S`A $3.5$ m and a $4$ m pole are joined at the top; their feet are $5$ m apart. Find the angle between the poles.`, Ang(5, 3.5, 4), "Opposite 5."),
  n2(S`A pizza slice with $18$ cm sides has a $9$ cm straight crust edge. Find the slice's angle.`, Ang(9, 18, 18), "SSS isosceles."),
  n2(S`A satellite dish triangle: sides $1.8$ m and $2.1$ m meet at $118^\circ$. Find the third side.`, L(1.8, 2.1, 118), "Obtuse SAS: cos is negative."),
];
