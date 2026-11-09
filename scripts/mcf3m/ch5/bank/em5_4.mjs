// 5.4 The Cosine Law — 20 easy + 20 medium (values computed)
import { mc, ms, num, tf, fill } from "../../bank/kit.mjs";
import { n2, cos, L, Ang, sasD, triD } from "./trig.mjs";
const S = String.raw;
const sss = (a, b, c) => { const A = Ang(a, b, c); return sasD(b, c, A); };

export const E = [
  mc(S`Which is the cosine law for side $a$?`, S`$a^2=b^2+c^2-2bc\cos A$`, [S`$a^2=b^2+c^2+2bc\cos A$`, S`$a=b+c-2bc\cos A$`, S`$\frac a{\sin A}=\frac b{\sin B}$`], "Minus twice the product times the cosine of the contained angle."),
  mc("Which information calls for the cosine law?", "two sides and the contained angle", ["two angles and a side", "one side and one angle", "a right angle only"], "SAS (or SSS)."),
  n2(S`$b=5$, $c=7$, $A=60^\circ$. Find $a$.`, L(5, 7, 60), "a² = 25 + 49 − 70 cos 60°."),
  n2(S`$b=8$, $c=6$, $A=45^\circ$. Find $a$.`, L(8, 6, 45), "Cosine law."),
  n2(S`$a=10$, $c=12$, $B=70^\circ$. Find $b$.`, L(10, 12, 70), "b² = a² + c² − 2ac cos B."),
  n2(S`$a=9$, $b=11$, $C=50^\circ$. Find $c$.`, L(9, 11, 50), "c² = a² + b² − 2ab cos C."),
  n2(S`$a=7$, $b=8$, $c=9$. Find $A$.`, Ang(7, 8, 9), "cos A = (b² + c² − a²)/(2bc)."),
  n2(S`$a=7$, $b=8$, $c=9$. Find $C$.`, Ang(9, 7, 8), "Largest side, largest angle."),
  n2(S`$a=5$, $b=6$, $c=7$. Find $B$.`, Ang(6, 5, 7), "cos B = (a² + c² − b²)/(2ac)."),
  num(S`Enter $\cos A$ when $a=5$, $b=5$, $c=5$.`, 0.5, "Equilateral: A = 60°.", null, 0.001),
  tf(S`If $A=90^\circ$, the cosine law becomes the Pythagorean theorem.`, true, "cos 90° = 0."),
  tf("The cosine law can only be used in right triangles.", false, "Any triangle."),
  fill(S`In $a^2=b^2+c^2-2bc\cos A$, angle $A$ is the angle ____ sides b and c (one word).`, ["between", "contained"], "The contained angle."),
  mc("For the triangle shown (two sides and the angle between them), which law finds the third side?", "cosine law", ["sine law", "primary ratios", "none"], "SAS.", sasD(6, 9, 55, ["A", "B", "C"])),
  n2("For the triangle shown, b = 6, c = 9, A = 55°. Find a.", L(6, 9, 55), "Cosine law.", sasD(6, 9, 55, ["A", "B", "C"])),
  num(S`Compute $2bc\cos A$ for $b=4$, $c=5$, $A=60^\circ$.`, 20, "2·4·5·0.5."),
  n2(S`$b=12$, $c=15$, $A=38^\circ$. Find $a$.`, L(12, 15, 38), "Cosine law."),
  n2(S`$a=4$, $b=6$, $c=8$. Find the largest angle.`, Ang(8, 4, 6), "Opposite 8."),
  mc(S`If $\cos A<0$, angle $A$ is …`, "obtuse", ["acute", "right", "zero"], "Cosine is negative past 90°."),
  n2(S`$a=13$, $b=10$, $C=40^\circ$. Find $c$.`, L(13, 10, 40), "Cosine law."),
];

export const M = [
  n2(S`Two roads leave a town at $64^\circ$. Two cars are $30$ km and $45$ km along them. How far apart?`, L(30, 45, 64), "SAS."),
  n2(S`A triangular park has sides $120$ m, $95$ m and $80$ m. Find the angle opposite $120$ m.`, Ang(120, 95, 80), "SSS."),
  n2(S`A golfer is $180$ m from the hole but hooks the ball $12^\circ$ off line, landing $165$ m away. How far is the ball from the hole?`, L(180, 165, 12), "SAS with 12°."),
  n2(S`A parallelogram has sides $8$ and $12$ and an angle of $70^\circ$. Find the shorter diagonal.`, L(8, 12, 70), "Diagonal opposite the 70° angle."),
  n2(S`For that parallelogram, find the longer diagonal.`, L(8, 12, 110), "Opposite the 110° angle."),
  n2(S`Two ships leave port at the same time, at $14$ km/h and $18$ km/h, on courses $75^\circ$ apart. Distance after $2$ h?`, L(28, 36, 75), "Sides 28 and 36."),
  n2(S`A triangle has sides $6$, $9$ and $11$. Find its smallest angle.`, Ang(6, 9, 11), "Opposite 6."),
  n2(S`A ladder frame has legs $2.4$ m and $2.4$ m with feet $1.6$ m apart. Find the angle at the top.`, Ang(1.6, 2.4, 2.4), "SSS."),
  n2(S`$b=14$, $c=10$, $A=82^\circ$. Find $a$.`, L(14, 10, 82), "Cosine law."),
  n2(S`$a=17$, $b=12$, $c=15$. Find $B$.`, Ang(12, 17, 15), "SSS."),
  ms(S`Select every case that needs the cosine law first.`, ["SSS", "SAS", "AAS", "ASA"], [0, 1], "Sine law needs an opposite pair."),
  tf(S`A triangle with sides $3$, $4$, $8$ exists.`, false, "3 + 4 < 8."),
  mc(S`Using SSS with $a=7$, $b=3$, $c=5$, $\cos A=$ …`, S`$-\tfrac12$`, [S`$\tfrac12$`, S`$\tfrac{15}{7}$`, "0"], "(9 + 25 − 49)/30 = −0.5.", sss(7, 3, 5)),
  num("For the triangle shown (sides 7, 3, 5), enter angle A in degrees.", 120, "cos A = −½.", sss(7, 3, 5), 0.01),
  n2(S`A surveyor measures $AP=250$ m, $BP=310$ m and $\angle APB=48^\circ$ across a lake. Find $AB$.`, L(250, 310, 48), "SAS.", sasD(250, 310, 48, ["P", "A", "B"])),
  n2(S`A pendulum $60$ cm long swings through $25^\circ$. Find the straight distance between the end positions.`, L(60, 60, 25), "Isosceles SAS."),
  n2(S`A triangular sail has sides $5$ m, $4$ m and $3.5$ m. Find the angle between the $4$ m and $3.5$ m sides.`, Ang(5, 4, 3.5), "Opposite 5."),
  fill(S`To find an angle from three sides, solve for $\cos A=\frac{b^2+c^2-a^2}{\square}$. The denominator is ____.`, ["2bc"], "Rearrange."),
  n2(S`A clock's hands are $8$ cm and $11$ cm. Find the distance between their tips at 2:00.`, L(8, 11, 60), "Angle 60°."),
  n2(S`A plane flies $200$ km, turns $30^\circ$ and flies $150$ km. How far is it from the start?`, L(200, 150, 150), "Interior angle 180 − 30 = 150°."),
];
