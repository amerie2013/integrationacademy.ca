// 6.4 Finding Side Lengths — 20 easy + 20 medium questions (values computed, rounded as asked)
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { rtADoc } from "./fig.mjs";

const D = Math.PI / 180, sin = (d) => Math.sin(d * D), cos = (d) => Math.cos(d * D), tan = (d) => Math.tan(d * D);
const r1 = (x) => Math.round(x * 10) / 10, r2 = (x) => Math.round(x * 100) / 100;
const n1 = (prompt, value, fb, fig) => num(`${prompt} Round to one decimal place.`, r1(value), `${fb} $\\approx${r1(value)}$.`, fig, 0.06);

export const E = [
  num(`The hypotenuse is $10$ and an acute angle is $30^\\circ$. Find the side opposite the angle.`, 5, "$10\\sin30^\\circ=5$.", null, 0.06),
  num(`The hypotenuse is $8$ and an acute angle is $60^\\circ$. Find the side adjacent to the angle.`, 4, "$8\\cos60^\\circ=4$.", null, 0.06),
  num(`The side adjacent to a $45^\\circ$ angle is $5$. Find the opposite side.`, 5, "$5\\tan45^\\circ=5$.", null, 0.06),
  n1(`The hypotenuse is $12$ and an acute angle is $25^\\circ$. Find the opposite side.`, 12 * sin(25), "$12\\sin25^\\circ$"),
  n1(`The hypotenuse is $15$ and an acute angle is $40^\\circ$. Find the adjacent side.`, 15 * cos(40), "$15\\cos40^\\circ$"),
  n1(`The side adjacent to a $35^\\circ$ angle is $7$. Find the opposite side.`, 7 * tan(35), "$7\\tan35^\\circ$"),
  mc(`You know the hypotenuse and want the side opposite $\\theta$. Which ratio?`, "sine", ["cosine", "tangent", "none"], "O and H."),
  mc(`You know the side opposite $\\theta$ and want the adjacent side. Which ratio?`, "tangent", ["sine", "cosine", "none"], "O and A."),
  mc(`You know the adjacent side and want the hypotenuse. Which ratio?`, "cosine", ["sine", "tangent", "none"], "A and H."),
  tf(`When the unknown side is in the denominator of the ratio, you divide to find it.`, true, "$\\sin\\theta=\\frac ox\\Rightarrow x=\\frac o{\\sin\\theta}$."),
  n1(`The hypotenuse is $20$ and an acute angle is $70^\\circ$. Find the opposite side.`, 20 * sin(70), "$20\\sin70^\\circ$"),
  num(`The side opposite a $30^\\circ$ angle is $6$. Find the hypotenuse.`, 12, "$\\frac6{\\sin30^\\circ}=12$.", null, 0.06),
  num(`The side adjacent to a $60^\\circ$ angle is $9$. Find the hypotenuse.`, 18, "$\\frac9{\\cos60^\\circ}=18$.", null, 0.06),
  n1(`The hypotenuse is $9$ and an acute angle is $55^\\circ$. Find the adjacent side.`, 9 * cos(55), "$9\\cos55^\\circ$"),
  n1(`The side adjacent to a $65^\\circ$ angle is $4$. Find the opposite side.`, 4 * tan(65), "$4\\tan65^\\circ$"),
  fill(`In $\\tan40^\\circ=\\frac8x$, $x=8\\div$ ___.`, ["tan 40°", "tan40°", "tan 40", "tan40"], "Multiply by $x$, then divide by $\\tan40^\\circ$."),
  n1(`A $4$ m ladder makes a $60^\\circ$ angle with the ground. How high up the wall does it reach (m)?`, 4 * sin(60), "$4\\sin60^\\circ$"),
  tf(`If $12$ is the hypotenuse, $x=12\\cos50^\\circ$ is the side adjacent to the $50^\\circ$ angle.`, true, "CAH."),
  mc(`The hypotenuse is $15$ and $x$ is opposite a $32^\\circ$ angle. Which equation is correct?`, "$x=15\\sin32^\\circ$", ["$x=15\\cos32^\\circ$", "$x=\\frac{15}{\\sin32^\\circ}$", "$x=15\\tan32^\\circ$"], "SOH."),
  n1(`Find the side $x$ opposite the $38^\circ$ angle in the triangle shown.`, 14 * sin(38), "$14\\sin38^\\circ$", rtADoc(38, { hyp: "14", opp: "x", theta: "38°" })),
];

export const M = [
  n1(`The side opposite a $35^\\circ$ angle is $8$. Find the hypotenuse.`, 8 / sin(35), "$\\frac8{\\sin35^\\circ}$"),
  n1(`The side adjacent to a $50^\\circ$ angle is $11$. Find the hypotenuse.`, 11 / cos(50), "$\\frac{11}{\\cos50^\\circ}$"),
  n1(`The side opposite a $28^\\circ$ angle is $10$. Find the adjacent side.`, 10 / tan(28), "$\\frac{10}{\\tan28^\\circ}$"),
  n1(`The side opposite a $62^\\circ$ angle is $3.5$. Find the adjacent side.`, 3.5 / tan(62), "$\\frac{3.5}{\\tan62^\\circ}$"),
  n1(`The hypotenuse is $7.5$ and an acute angle is $18^\\circ$. Find the opposite side.`, 7.5 * sin(18), "$7.5\\sin18^\\circ$"),
  n1(`A $7$ m ladder makes a $74^\\circ$ angle with the ground. How far is its foot from the wall (m)?`, 7 * cos(74), "$7\\cos74^\\circ$"),
  n1(`A kite string is $50$ m long and makes a $48^\\circ$ angle with the ground. How high is the kite (m)?`, 50 * sin(48), "$50\\sin48^\\circ$"),
  n1(`A ramp must rise $0.8$ m at an angle of $4.5^\\circ$. How long is the ramp (m)?`, 0.8 / sin(4.5), "$\\frac{0.8}{\\sin4.5^\\circ}$"),
  n1(`When the sun is $35^\\circ$ above the horizon, how long is the shadow of an $8$ m pole (m)?`, 8 / tan(35), "$\\frac8{\\tan35^\\circ}$"),
  n1(`A tree casts an $18$ m shadow when the sun is $52^\\circ$ above the horizon. How tall is the tree (m)?`, 18 * tan(52), "$18\\tan52^\\circ$"),
  mc(`The side adjacent to $40^\\circ$ is $9$ and $x$ is the hypotenuse. Which is correct?`, "$x=\\frac9{\\cos40^\\circ}$", ["$x=9\\cos40^\\circ$", "$x=9\\sin40^\\circ$", "$x=\\frac9{\\tan40^\\circ}$"], "$\\cos40^\\circ=\\frac9x$."),
  tf(`In $\\sin25^\\circ=\\frac6x$, $x\\approx2.5$.`, false, "$x=\\frac6{\\sin25^\\circ}\\approx14.2$; multiplying gives the wrong answer."),
  n1(`Solve $\\sin25^\\circ=\\frac6x$.`, 6 / sin(25), "$x=\\frac6{\\sin25^\\circ}$"),
  n1(`A slide is $4.2$ m long and makes a $35^\\circ$ angle with the ground. How high is its top (m)?`, 4.2 * sin(35), "$4.2\\sin35^\\circ$"),
  num(`An escalator rises $9$ m at an angle of $30^\\circ$. How long is it (m)?`, 18, "$\\frac9{\\sin30^\\circ}=18$.", null, 0.06),
  ms(`$x$ is opposite a $40^\\circ$ angle and the hypotenuse is $20$. Select all correct equations.`, ["$x=20\\sin40^\\circ$", "$\\sin40^\\circ=\\frac x{20}$", "$x=\\frac{20}{\\sin40^\\circ}$", "$\\cos50^\\circ=\\frac x{20}$", "$\\tan40^\\circ=\\frac x{20}$"], [0, 1, 3], "From the other angle ($50^\\circ$), $x$ is adjacent."),
  n1(`A right triangle has hypotenuse $10$ and a $40^\\circ$ angle. Find its perimeter.`, 10 + 10 * sin(40) + 10 * cos(40), "$10+10\\sin40^\\circ+10\\cos40^\\circ$"),
  num(`A ramp has a horizontal run of $9$ m and makes a $4.8^\\circ$ angle with the ground. How high does it rise? Round to two decimal places (m).`, r2(9 * tan(4.8)), `$9\\tan4.8^\\circ\\approx${r2(9 * tan(4.8))}$.`, null, 0.006),
  n1(`A roof rafter spans a horizontal distance of $5$ m at $30^\\circ$ to the horizontal. How long is the rafter (m)?`, 5 / cos(30), "$\\frac5{\\cos30^\\circ}$"),
  n1(`Find the side $x$ adjacent to the $56^\circ$ angle in the triangle shown.`, 12 / tan(56), "$\\frac{12}{\\tan56^\\circ}$", rtADoc(56, { adj: "x", opp: "12", theta: "56°" })),
];
