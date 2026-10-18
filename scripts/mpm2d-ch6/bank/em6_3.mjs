// 6.3 The Primary Trigonometric Ratios — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { rtDoc } from "./fig.mjs";

const D = Math.PI / 180, sin = (d) => Math.sin(d * D), cos = (d) => Math.cos(d * D), tan = (d) => Math.tan(d * D);
const r = (x, n) => +x.toFixed(n);

export const E = [
  mc(`$\\sin\\theta$ equals…`, "$\\frac{\\text{opposite}}{\\text{hypotenuse}}$", ["$\\frac{\\text{adjacent}}{\\text{hypotenuse}}$", "$\\frac{\\text{opposite}}{\\text{adjacent}}$", "$\\frac{\\text{hypotenuse}}{\\text{opposite}}$"], "SOH."),
  mc(`$\\cos\\theta$ equals…`, "$\\frac{\\text{adjacent}}{\\text{hypotenuse}}$", ["$\\frac{\\text{opposite}}{\\text{hypotenuse}}$", "$\\frac{\\text{opposite}}{\\text{adjacent}}$", "$\\frac{\\text{adjacent}}{\\text{opposite}}$"], "CAH."),
  mc(`$\\tan\\theta$ equals…`, "$\\frac{\\text{opposite}}{\\text{adjacent}}$", ["$\\frac{\\text{adjacent}}{\\text{opposite}}$", "$\\frac{\\text{opposite}}{\\text{hypotenuse}}$", "$\\frac{\\text{adjacent}}{\\text{hypotenuse}}$"], "TOA."),
  num(`A right triangle has sides $3$, $4$, $5$. Find $\\sin\\theta$ for the angle opposite $3$.`, 0.6, "$\\frac35$."),
  num(`In the $3$-$4$-$5$ triangle, find $\\cos\\theta$ for the angle opposite $3$.`, 0.8, "$\\frac45$."),
  num(`In the $3$-$4$-$5$ triangle, find $\\tan\\theta$ for the angle opposite $3$.`, 0.75, "$\\frac34$."),
  mc(`The hypotenuse of a right triangle is…`, "the side opposite the right angle", ["the side next to θ", "the shortest side", "the side opposite θ"], "It is also the longest side."),
  tf(`$\\sin\\theta$ can be greater than $1$ for an acute angle.`, false, "A leg is shorter than the hypotenuse."),
  num(`Evaluate $\\sin30^\\circ$.`, 0.5, "A useful calculator check."),
  num(`Evaluate $\\tan45^\\circ$.`, 1, "The legs are equal."),
  num(`Evaluate $\\cos60^\\circ$.`, 0.5, "$\\cos60^\\circ=\\sin30^\\circ$."),
  fill(`In SOH CAH TOA, “TOA” means tangent = opposite ÷ ___.`, ["adjacent"], "TOA."),
  num(`A right triangle has sides $5$, $12$, $13$. Find $\\tan\\theta$ for the angle opposite $5$, to three decimal places.`, 0.417, "$\\frac5{12}$.", null, 0.001),
  mc(`Why is $\\sin40^\\circ$ the same in every right triangle with a $40^\\circ$ angle?`, "all such triangles are similar", ["all such triangles are congruent", "the hypotenuse is always 1", "it is a rule of calculators"], "AA: $90^\\circ$ and $40^\\circ$."),
  num(`Evaluate $\\sin50^\\circ$ to four decimal places.`, r(sin(50), 4), `$\\approx${r(sin(50), 4)}$.`, null, 0.0001),
  tf(`$\\tan\\theta$ can be greater than $1$.`, true, "When the opposite side is longer than the adjacent side."),
  num(`Evaluate $\\cos20^\\circ$ to four decimal places.`, r(cos(20), 4), `$\\approx${r(cos(20), 4)}$.`, null, 0.0001),
  mc(`A right triangle has legs $a$ (opposite $\\theta$) and $b$ (adjacent to $\\theta$). $\\tan\\theta=$`, "$\\frac ab$", ["$\\frac ba$", "$\\frac a{\\sqrt{a^2+b^2}}$", "$ab$"], "Opposite ÷ adjacent."),
  num(`Find the hypotenuse of a right triangle with legs $9$ and $12$.`, 15, "$\\sqrt{81+144}$."),
  mc(`In the triangle shown, which ratio equals $\\frac6{10}$?`, "$\\sin\\theta$", ["$\\cos\\theta$", "$\\tan\\theta$", "none"], "Opposite ÷ hypotenuse.", rtDoc(8, 6, { adj: "8", opp: "6", hyp: "10", theta: "θ" })),
];

export const M = [
  num(`A right triangle has legs $7$ and $24$. Find $\\sin\\theta$ for the angle opposite $7$.`, 0.28, "Hypotenuse $25$: $\\frac7{25}$."),
  num(`In the same $7$-$24$-$25$ triangle, find $\\cos\\theta$ for the angle opposite $7$.`, 0.96, "$\\frac{24}{25}$."),
  num(`A right triangle has hypotenuse $17$ and the leg opposite $\\theta$ is $8$. Find $\\tan\\theta$ to three decimal places.`, 0.533, "Adjacent $15$: $\\frac8{15}$.", null, 0.001),
  mc(`For an acute angle, $\\sin\\theta=\\frac5{13}$. Find $\\cos\\theta$.`, "$\\frac{12}{13}$", ["$\\frac5{12}$", "$\\frac{13}5$", "$\\frac8{13}$"], "Adjacent $=\\sqrt{169-25}=12$."),
  mc(`For an acute angle, $\\tan\\theta=\\frac34$. Find $\\sin\\theta$.`, "$\\frac35$", ["$\\frac45$", "$\\frac34$", "$\\frac43$"], "A $3$-$4$-$5$ triangle."),
  num(`Evaluate $\\tan63^\\circ$ to three decimal places.`, r(tan(63), 3), `$\\approx${r(tan(63), 3)}$.`, null, 0.001),
  num(`Evaluate $\\sin17^\\circ$ to four decimal places.`, r(sin(17), 4), `$\\approx${r(sin(17), 4)}$.`, null, 0.0001),
  tf(`$\\sin35^\\circ=\\cos55^\\circ$.`, true, "The opposite side of one angle is the adjacent side of the other."),
  ms(`A right triangle has sides $6$, $8$, $10$. Select all true statements for the angle $\\theta$ opposite $6$.`, ["$\\sin\\theta=0.6$", "$\\cos\\theta=0.8$", "$\\tan\\theta=0.75$", "$\\tan\\theta=1.33$", "$\\sin\\theta=0.8$"], [0, 1, 2], "SOH CAH TOA."),
  num(`A $15$-$20$-$25$ triangle is similar to a $3$-$4$-$5$ triangle. Find $\\tan\\theta$ for the angle opposite $15$.`, 0.75, "$\\frac{15}{20}$."),
  mc(`In a $5$-$12$-$13$ triangle, $\\theta$ is opposite $5$ and $\\beta$ is the other acute angle. $\\sin\\beta=$`, "$\\frac{12}{13}$", ["$\\frac5{13}$", "$\\frac{12}5$", "$\\frac5{12}$"], "From $\\beta$, the opposite side is $12$."),
  num(`$\\cos\\theta=0.6$ and the hypotenuse is $15$. Find the adjacent side.`, 9, "$0.6\\times15$."),
  num(`$\\sin\\theta=0.8$ and the opposite side is $12$. Find the hypotenuse.`, 15, "$12\\div0.8$."),
  tf(`For acute angles, $\\sin\\theta$ increases as $\\theta$ increases.`, true, "The opposite side grows toward the hypotenuse."),
  num(`A right triangle has legs $1$ and $\\sqrt3$. Find $\\tan\\theta$ for the angle opposite the leg $1$, to three decimal places.`, 0.577, "$\\frac1{\\sqrt3}$.", null, 0.001),
  mc(`Which primary ratio does not use the hypotenuse?`, "tangent", ["sine", "cosine", "all of them use it"], "tan = opposite ÷ adjacent."),
  num(`A right triangle has hypotenuse $26$ and one leg $10$. Find $\\sin\\theta$ for the angle opposite the other leg, to three decimal places.`, 0.923, "Other leg $24$: $\\frac{24}{26}$.", null, 0.001),
  fill(`$\\sin30^\\circ=$ ___ (as a fraction)`, ["1/2", "0.5"], "Exactly one half."),
  num(`$\\tan\\theta=2.4$ and the adjacent side is $5$. Find the opposite side.`, 12, "$2.4\\times5$."),
  num(`Find $\\cos\\theta$ in the triangle shown, to three decimal places.`, 0.882, "Hypotenuse $17$: $\\frac{15}{17}$.", rtDoc(15, 8, { adj: "15", opp: "8", theta: "θ" }), 0.001),
];
