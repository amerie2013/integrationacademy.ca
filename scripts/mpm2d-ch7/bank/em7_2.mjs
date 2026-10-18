// 7.2 The Cosine Law — 20 easy + 20 medium questions (values computed, rounded as asked)
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { sasDoc, sssDoc } from "./fig.mjs";

const D = Math.PI / 180, G = 180 / Math.PI, cos = (d) => Math.cos(d * D);
const r1 = (x) => Math.round(x * 10) / 10;
const n1 = (p, v, fb, fig) => num(`${p} Round to one decimal place.`, r1(v), `${fb} $\\approx${r1(v)}$.`, fig, 0.06);
const a1 = (p, v, fb, fig) => num(`${p} Give the angle to one decimal place.`, r1(v), `${fb} $\\approx${r1(v)}^\\circ$.`, fig, 0.06);
const cl = (b, c, A) => Math.sqrt(b * b + c * c - 2 * b * c * cos(A)); // side opposite A
const ang = (a, b, c) => Math.acos((b * b + c * c - a * a) / (2 * b * c)) * G; // angle opposite a

export const E = [
  mc(`Which is the cosine law?`, "$a^2=b^2+c^2-2bc\\cos A$", ["$a^2=b^2+c^2+2bc\\cos A$", "$\\frac a{\\sin A}=\\frac b{\\sin B}$", "$a=b+c-2bc\\cos A$"], "Pythagoras with a correction term."),
  mc(`The cosine law is used first when you know…`, "two sides and the included angle", ["two angles and a side", "one side only", "three angles"], "SAS (or SSS)."),
  tf(`When $\\angle A=90^\\circ$, the cosine law becomes the Pythagorean theorem.`, true, "$\\cos90^\\circ=0$."),
  n1(`In acute $\\triangle ABC$, $b=5$, $c=6$ and $\\angle A=60^\\circ$. Find $a$.`, cl(5, 6, 60), "$a^2=25+36-60\\cos60^\\circ=31$"),
  n1(`In acute $\\triangle ABC$, $b=8$, $c=9$ and $\\angle A=55^\\circ$. Find $a$.`, cl(8, 9, 55), "$a^2=64+81-144\\cos55^\\circ$"),
  n1(`In acute $\\triangle ABC$, $a=10$, $b=12$ and $\\angle C=48^\\circ$. Find $c$.`, cl(10, 12, 48), "$c^2=100+144-240\\cos48^\\circ$"),
  a1(`A triangle has sides $4$, $5$ and $6$. Find the angle opposite $4$.`, ang(4, 5, 6), "$\\cos\\theta=\\frac{25+36-16}{60}$"),
  a1(`A triangle has sides $7$, $8$ and $9$. Find the angle opposite $9$.`, ang(9, 7, 8), "$\\cos\\theta=\\frac{49+64-81}{112}$"),
  mc(`In $a^2=b^2+c^2-2bc\\cos A$, the angle $A$ must be…`, "between sides $b$ and $c$", ["opposite side $b$", "the largest angle", "any angle"], "The included angle."),
  fill(`For SSS, $\\cos A$ equals $b^2+c^2-a^2$ divided by ___.`, ["2bc", "2 b c", "2cb"], "Rearranged cosine law."),
  num(`Evaluate $3^2+4^2-2(3)(4)\\cos90^\\circ$.`, 25, "$\\cos90^\\circ=0$.", null, 0.01),
  tf(`To find a side with the cosine law, you take a square root at the end.`, true, "The law gives $a^2$."),
  n1(`In acute $\\triangle PQR$, $q=7$, $r=10$ and $\\angle P=52^\\circ$. Find $p$.`, cl(7, 10, 52), "$p^2=49+100-140\\cos52^\\circ$"),
  a1(`A triangle has sides $6$, $6$ and $5$. Find the angle opposite $5$.`, ang(5, 6, 6), "$\\cos\\theta=\\frac{36+36-25}{72}$"),
  mc(`Which triangle needs the cosine law (not the sine law) first?`, "sides $5$, $7$ and $8$", ["angles $40^\\circ$, $60^\\circ$ and side $5$ opposite $40^\\circ$", "a right triangle with legs $3$ and $4$", "side $6$ opposite $50^\\circ$ and side $7$"], "SSS has no side–angle pair."),
  n1(`Two sides of a triangle are $9$ and $11$ with a $40^\\circ$ angle between them. Find the third side.`, cl(9, 11, 40), "$\\sqrt{81+121-198\\cos40^\\circ}$"),
  tf(`In the cosine law, you should subtract $2bc$ from $b^2+c^2$ before multiplying by $\\cos A$.`, false, "Compute $2bc\\cos A$ first."),
  a1(`A triangle has sides $10$, $11$ and $12$. Find its largest angle.`, ang(12, 10, 11), "Opposite $12$: $\\cos\\theta=\\frac{100+121-144}{220}$"),
  num(`In an equilateral triangle, all sides are $8$. Use the cosine law to find one angle (degrees).`, 60, "$\\cos\\theta=\\frac{64+64-64}{128}=0.5$.", null, 0.06),
  n1(`Find $x$ in the triangle shown.`, cl(7, 9, 62), "$x^2=49+81-126\\cos62^\\circ$", sasDoc(7, 9, 62, { b: "7", c: "9", a: "x", A: "62°" })),
];

export const M = [
  n1(`In acute $\\triangle ABC$, $b=14$, $c=17$ and $\\angle A=46^\\circ$. Find $a$.`, cl(14, 17, 46), "$a^2=196+289-476\\cos46^\\circ$"),
  a1(`A triangle has sides $8$, $11$ and $12$. Find the angle opposite $8$.`, ang(8, 11, 12), "$\\cos\\theta=\\frac{121+144-64}{264}$"),
  a1(`A triangle has sides $13$, $15$ and $17$. Find its largest angle.`, ang(17, 13, 15), "$\\cos\\theta=\\frac{169+225-289}{390}$"),
  n1(`Two hikers leave a point on paths $57^\\circ$ apart and walk $4.2$ km and $5.5$ km. How far apart are they (km)?`, cl(4.2, 5.5, 57), "$d^2=4.2^2+5.5^2-2(4.2)(5.5)\\cos57^\\circ$"),
  n1(`A triangular field has two sides of $85$ m and $110$ m meeting at $63^\\circ$. Find the third side (m).`, cl(85, 110, 63), "SAS"),
  mc(`Why is the cosine law needed for SSS?`, "no side is known together with its opposite angle", ["the sine law only works for right triangles", "SSS triangles are always obtuse", "the cosine law is always faster"], "The sine law needs a pair."),
  tf(`If $a^2<b^2+c^2$, then $\\angle A$ is acute.`, true, "Then $\\cos A>0$."),
  n1(`In acute $\\triangle ABC$, $a=6.5$, $c=8$ and $\\angle B=71^\\circ$. Find $b$.`, cl(6.5, 8, 71), "$b^2=a^2+c^2-2ac\\cos B$"),
  a1(`A truss has sides $2.5$ m, $3$ m and $3.5$ m. Find the angle opposite $2.5$ m.`, ang(2.5, 3, 3.5), "$\\cos\\theta=\\frac{9+12.25-6.25}{21}$"),
  num(`Two sides are $8$ and $8$ with a $60^\\circ$ angle between them. Find the third side.`, 8, "$64+64-128(0.5)=64$.", null, 0.06),
  ms(`Select all correct forms of the cosine law.`, ["$b^2=a^2+c^2-2ac\\cos B$", "$c^2=a^2+b^2-2ab\\cos C$", "$\\cos A=\\frac{b^2+c^2-a^2}{2bc}$", "$a^2=b^2+c^2+2bc\\cos A$", "$a=b+c-2\\cos A$"], [0, 1, 2], "Each side with its opposite angle."),
  n1(`From a point, a surveyor measures $240$ m and $210$ m to two corners of a field, with $52^\\circ$ between the sightlines. How far apart are the corners (m)?`, cl(240, 210, 52), "SAS with the $52^\\circ$ angle"),
  a1(`A triangular lot has sides $50$ m, $60$ m and $70$ m. Find the angle between the $50$ m and $60$ m sides.`, ang(70, 50, 60), "Opposite $70$"),
  n1(`Two ships leave port on courses $43^\\circ$ apart at $16$ km/h and $20$ km/h. How far apart are they after one hour (km)?`, cl(16, 20, 43), "SAS"),
  mc(`A student finds $a^2=40.9$ with the cosine law. What is the next step?`, "take the square root: $a\\approx6.4$", ["divide by 2", "use $\\cos^{-1}$", "the answer is $40.9$"], "The law gives $a^2$."),
  a1(`A triangle has sides $9$, $10$ and $12$. Find the smallest angle.`, ang(9, 10, 12), "Opposite $9$"),
  n1(`A parallelogram has sides $6$ cm and $9$ cm with a $70^\\circ$ angle. Find the shorter diagonal (cm).`, cl(6, 9, 70), "The diagonal opposite the $70^\\circ$ angle"),
  tf(`The cosine law can find an angle when all three sides are known.`, true, "$\\cos A=\\frac{b^2+c^2-a^2}{2bc}$."),
  fill(`In the development of the cosine law, the part of side $c$ next to $A$ is $x=b\\,$___ $A$.`, ["cos", "\\cos"], "$\\cos A=\\frac xb$."),
  a1(`Find the angle $\\theta$ in the triangle shown.`, ang(9, 10, 11), "$\\cos\\theta=\\frac{100+121-81}{220}$", sssDoc(9, 10, 11, { A: "θ" })),
];
