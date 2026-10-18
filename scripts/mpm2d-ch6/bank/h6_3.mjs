// 6.3 The Primary Trigonometric Ratios — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { rtDoc } from "./fig.mjs";

export const TOPIC = "6.3 The Primary Trigonometric Ratios";
export const Q = [
  mc(`For an acute angle, $\\tan\\theta=1$. Find the exact value of $\\sin\\theta$.`, "$\\frac1{\\sqrt2}$", ["$1$", "$\\frac12$", "$\\sqrt2$"], "Legs $1$ and $1$, hypotenuse $\\sqrt2$."),
  num(`For an acute angle, $\\sin\\theta=0.28$. Find $\\tan\\theta$ to three decimal places.`, 0.292, "Opposite $7$, hypotenuse $25$, adjacent $24$: $\\frac7{24}$.", null, 0.001),
  num(`For an acute angle, $\\cos\\theta=\\frac8{17}$. Find $\\tan\\theta$.`, 1.875, "Opposite $15$: $\\frac{15}8$."),
  tf(`$(\\sin\\theta)^2+(\\cos\\theta)^2=1$ for every acute angle $\\theta$.`, true, "$\\frac{o^2+a^2}{h^2}=\\frac{h^2}{h^2}$ by Pythagoras."),
  num(`Evaluate $(\\sin30^\\circ)^2+(\\cos30^\\circ)^2$.`, 1, "Always 1."),
  num(`In a $6$-$8$-$10$ triangle, find $\\frac{\\sin\\theta}{\\cos\\theta}$ for the angle opposite $6$.`, 0.75, "$\\frac{0.6}{0.8}=\\tan\\theta$."),
  ms(`Select all statements that are true for every acute angle $\\theta$.`, ["$\\sin\\theta<1$", "$\\cos\\theta>0$", "$\\tan\\theta=\\frac{\\sin\\theta}{\\cos\\theta}$", "$\\sin\\theta+\\cos\\theta=1$", "$\\tan\\theta<1$"], [0, 1, 2], "Check $45^\\circ$: $\\sin+\\cos\\approx1.41$; $\\tan60^\\circ>1$."),
  num(`A right triangle has hypotenuse $10$ and $\\sin\\theta=0.6$. Find its perimeter.`, 24, "Opposite $6$, adjacent $8$."),
  num(`For an acute angle, $\\tan\\theta=\\frac5{12}$ and the hypotenuse is $39$. Find the side opposite $\\theta$.`, 15, "$5$-$12$-$13$ scaled by $3$."),
  mc(`As an acute angle $\\theta$ gets closer to $90^\\circ$, $\\tan\\theta$…`, "becomes very large", ["approaches 1", "approaches 0", "becomes negative"], "The adjacent side shrinks toward 0."),
  num(`In right $\\triangle ABC$ with $\\angle C=90^\\circ$, $\\sin A=0.4$. Find $\\cos B$.`, 0.4, "Both equal $\\frac{BC}{AB}$."),
  num(`An isosceles right triangle has legs $7$. Find $\\sin45^\\circ$ to four decimal places.`, 0.7071, "$\\frac7{7\\sqrt2}$.", null, 0.0001),
  tf(`$\\cos60^\\circ=\\sin30^\\circ=0.5$.`, true, "Complementary angles."),
  num(`A right triangle has a $30^\\circ$ angle and the leg opposite it is $4$. Find the hypotenuse.`, 8, "$\\sin30^\\circ=\\frac4h=0.5$."),
  num(`A right triangle has $\\tan\\theta=0.75$ and perimeter $36$. Find the hypotenuse.`, 15, "Sides in ratio $3:4:5$; $12k=36$."),
  mc(`For an acute angle, $\\sin\\theta=\\frac{12}{13}$. Which is $\\cos\\theta$?`, "$\\frac5{13}$", ["$\\frac{12}5$", "$\\frac{13}{12}$", "$\\frac1{13}$"], "Adjacent $5$."),
  num(`Evaluate $2\\sin30^\\circ+\\tan45^\\circ$.`, 2, "$1+1$."),
  num(`A right triangle has legs $20$ and $21$. Find $\\sin\\theta$ for the angle opposite $21$, to three decimal places.`, 0.724, "Hypotenuse $29$: $\\frac{21}{29}$.", null, 0.001),
  tf(`Two right triangles with the same value of $\\tan\\theta$ for an acute angle are similar.`, true, "The same ratio means the same angle, so AA."),
  num(`Find $\\tan\\theta$ in the triangle shown, to three decimal places.`, 0.292, "Adjacent $\\sqrt{625-49}=24$: $\\frac7{24}$.", rtDoc(24, 7, { opp: "7", hyp: "25", theta: "θ" }), 0.001),
];
