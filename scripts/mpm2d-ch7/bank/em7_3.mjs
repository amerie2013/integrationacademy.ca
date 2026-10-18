// 7.3 Choosing the Right Law — 20 easy + 20 medium questions (values computed, rounded as asked)
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { atriDoc, sasDoc, sssDoc, rtADoc } from "./fig.mjs";

const D = Math.PI / 180, G = 180 / Math.PI, sin = (d) => Math.sin(d * D), cos = (d) => Math.cos(d * D), asin = (x) => Math.asin(x) * G;
const r1 = (x) => Math.round(x * 10) / 10;
const n1 = (p, v, fb, fig) => num(`${p} Round to one decimal place.`, r1(v), `${fb} $\\approx${r1(v)}$.`, fig, 0.06);
const a1 = (p, v, fb, fig) => num(`${p} Give the angle to one decimal place.`, r1(v), `${fb} $\\approx${r1(v)}^\\circ$.`, fig, 0.06);
const side = (a, A, B) => (a * sin(B)) / sin(A);
const cl = (b, c, A) => Math.sqrt(b * b + c * c - 2 * b * c * cos(A));
const ang = (a, b, c) => Math.acos((b * b + c * c - a * a) / (2 * b * c)) * G;
const SL = "the sine law", CL = "the cosine law", RT = "SOH CAH TOA (no law needed)";
const law = (p, right, fb, fig) => mc(p, right, [SL, CL, RT, "it cannot be solved"].filter((x) => x !== right).slice(0, 3), fb, fig);

export const E = [
  law(`You know $\\angle A$, $\\angle B$ and side $a$. Which tool finds $b$?`, SL, "AAS: $a$ and $\\angle A$ are a pair."),
  law(`You know sides $b$, $c$ and the included $\\angle A$. Which tool finds $a$?`, CL, "SAS."),
  law(`You know all three sides. Which tool finds an angle?`, CL, "SSS."),
  law(`A triangle has a right angle, one side and one acute angle. Which tool is simplest?`, RT, "Right triangle."),
  law(`You know sides $a$, $b$ and $\\angle A$ in an acute triangle. Which tool finds $\\angle B$?`, SL, "SSA: $a$ and $\\angle A$ are a pair."),
  tf(`If a side and its opposite angle are known, the sine law can be used.`, true, "That pair is what the sine law needs."),
  tf(`SAS means two sides and an angle opposite one of them.`, false, "SAS means the angle is between the two sides."),
  n1(`In acute $\\triangle ABC$, $\\angle A=48^\\circ$, $\\angle B=66^\\circ$ and $a=9$. Find $b$.`, side(9, 48, 66), "Sine law: $\\frac{9\\sin66^\\circ}{\\sin48^\\circ}$"),
  n1(`In acute $\\triangle ABC$, $b=7$, $c=8$ and $\\angle A=57^\\circ$. Find $a$.`, cl(7, 8, 57), "Cosine law: $\\sqrt{49+64-112\\cos57^\\circ}$"),
  a1(`A triangle has sides $6$, $8$ and $9$. Find the angle opposite $6$.`, ang(6, 8, 9), "Cosine law"),
  mc(`ASA gives two angles and the side between them. What is the first step?`, "find the third angle", ["use the cosine law", "take a square root", "use SOH CAH TOA"], "Then the given side is paired with its opposite angle."),
  fill(`Two sides and the included angle is written ___.`, ["SAS"], "Side–angle–side."),
  num(`Two angles of a triangle are $58^\\circ$ and $67^\\circ$. Find the third (degrees).`, 55, "$180-58-67$.", null, 0.01),
  n1(`A right triangle has hypotenuse $12$ and an acute angle of $40^\\circ$. Find the side opposite the angle.`, 12 * sin(40), "No law needed: $12\\sin40^\\circ$"),
  law(`You know only the three angles of a triangle. Which tool finds the sides?`, "it cannot be solved", "Angles fix the shape, not the size."),
  tf(`After using the cosine law in an SAS triangle, the sine law can finish the triangle.`, true, "The new side pairs with the given angle."),
  mc(`Which set of information is SSS?`, "$a=5$, $b=6$, $c=7$", ["$a=5$, $b=6$, $\\angle C=40^\\circ$", "$\\angle A=40^\\circ$, $\\angle B=60^\\circ$, $c=7$", "$a=5$, $\\angle A=50^\\circ$, $b=6$"], "Three sides."),
  a1(`In acute $\\triangle ABC$, $a=10$, $\\angle A=70^\\circ$ and $b=8$. Find $\\angle B$.`, asin((8 * sin(70)) / 10), "Sine law"),
  law(`For the triangle shown, which tool finds $x$?`, CL, "Two sides and the included angle.", sasDoc(9, 11, 52, { b: "9", c: "11", a: "x", A: "52°" })),
  law(`Which tool finds the side marked $x$ in this triangle?`, SL, "Two angles and a side: find the third angle, then the sine law.", atriDoc(55, 68, 12, { c: "12", b: "x", A: "55°", B: "68°" })),
];

export const M = [
  n1(`In acute $\\triangle ABC$, $\\angle A=62^\\circ$, $\\angle B=53^\\circ$ and $c=14$. Find $a$.`, side(14, 65, 62), "$\\angle C=65^\\circ$; sine law"),
  n1(`In acute $\\triangle ABC$, $a=11$, $b=13$ and $\\angle C=59^\\circ$. Find $c$.`, cl(11, 13, 59), "Cosine law"),
  a1(`A triangle has sides $12$, $13$ and $14$. Find the angle opposite $13$.`, ang(13, 12, 14), "Cosine law"),
  a1(`In acute $\\triangle ABC$, $a=16$, $\\angle A=74^\\circ$ and $c=13$. Find $\\angle C$.`, asin((13 * sin(74)) / 16), "Sine law: $\\sin C=\\frac{13\\sin74^\\circ}{16}$"),
  a1(`In acute $\\triangle ABC$, $b=9$, $c=12$ and $\\angle A=55^\\circ$. Find $\\angle B$ (cosine law first, then sine law).`, asin((9 * sin(55)) / cl(9, 12, 55)), "$a=\\sqrt{81+144-216\\cos55^\\circ}$; $\\sin B=\\frac{9\\sin55^\\circ}{a}$"),
  ms(`Select all cases where the sine law can be used first.`, ["AAS", "ASA", "SSA (acute triangle)", "SAS", "SSS"], [0, 1, 2], "Those give (or quickly give) a side–angle pair."),
  mc(`A student uses the cosine law with $b=8$, $c=10$ and $\\angle B=50^\\circ$. What is wrong?`, "$\\angle B$ is not between $b$ and $c$; this is SSA, so use the sine law", ["nothing", "they should use SOH CAH TOA", "the cosine law needs three angles"], "The included angle is $\\angle A$."),
  n1(`Two sides of a triangle are $15$ and $18$ with a $66^\\circ$ angle between them. Find the third side.`, cl(15, 18, 66), "SAS"),
  n1(`In acute $\\triangle PQR$, $\\angle P=71^\\circ$, $\\angle Q=48^\\circ$ and $q=20$. Find $p$.`, side(20, 48, 71), "Sine law"),
  tf(`The cosine law can replace the sine law in an AAS problem.`, false, "AAS gives only one side; the cosine law needs two."),
  a1(`A triangle has sides $7$, $9$ and $10$. Find its smallest angle.`, ang(7, 9, 10), "Opposite $7$"),
  n1(`In acute $\\triangle ABC$, $\\angle B=64^\\circ$, $\\angle C=52^\\circ$ and $a=17$. Find $b$.`, side(17, 64, 64), "$\\angle A=64^\\circ$, so $b=a$"),
  mc(`Which sequence solves an SSS triangle?`, "cosine law for the largest angle, then the sine law or cosine law, then $180^\\circ$", ["sine law first", "SOH CAH TOA for each angle", "subtract the sides from $180$"], "No side–angle pair at the start."),
  n1(`A right triangle has an acute angle of $34^\\circ$ and the adjacent leg is $15$. Find the hypotenuse.`, 15 / cos(34), "No law needed: $\\frac{15}{\\cos34^\\circ}$"),
  a1(`In acute $\\triangle XYZ$, $x=12$, $y=14$ and $\\angle Y=80^\\circ$. Find $\\angle Z$.`, 180 - 80 - asin((12 * sin(80)) / 14), "$\\angle X$ by the sine law, then $180^\\circ-80^\\circ-\\angle X$"),
  fill(`To decide which law to use, ask whether a side is known together with its ___ angle.`, ["opposite"], "The sine law needs that pair."),
  n1(`Solve for the third side: $a=20$, $b=24$, $\\angle C=48^\\circ$.`, cl(20, 24, 48), "Cosine law"),
  mc(`For the triangle shown, which tool finds $\\theta$?`, CL, ["the sine law", "SOH CAH TOA", "it cannot be found"], "Three sides.", sssDoc(7, 8, 9, { A: "θ" })),
  n1(`Find $x$ in the right triangle shown.`, 16 * cos(28), "$x=16\\cos28^\\circ$", rtADoc(28, { hyp: "16", adj: "x", theta: "28°" })),
  n1(`In the triangle shown, find the side opposite the $68^\\circ$ angle.`, side(12, 57, 68), "$\\angle C=57^\\circ$, then the sine law", atriDoc(55, 68, 12, { c: "12", A: "55°", B: "68°" })),
];
