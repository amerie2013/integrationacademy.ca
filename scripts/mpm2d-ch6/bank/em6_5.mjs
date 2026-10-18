// 6.5 Finding Angles — 20 easy + 20 medium questions (angles computed, rounded as asked)
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { rtDoc } from "./fig.mjs";

const G = 180 / Math.PI, asin = (x) => Math.asin(x) * G, acos = (x) => Math.acos(x) * G, atan = (x) => Math.atan(x) * G;
const a0 = (prompt, v, fb, fig) => num(`${prompt} Give the angle to the nearest degree.`, Math.round(v), `${fb} $\\approx${Math.round(v)}^\\circ$.`, fig, 0.6);
const a1 = (prompt, v, fb, fig) => num(`${prompt} Give the angle to one decimal place.`, Math.round(v * 10) / 10, `${fb} $\\approx${Math.round(v * 10) / 10}^\\circ$.`, fig, 0.06);

export const E = [
  num(`$\\sin\\theta=0.5$. Find the acute angle $\\theta$ in degrees.`, 30, "$\\sin^{-1}0.5=30^\\circ$.", null, 0.6),
  num(`$\\cos\\theta=0.5$. Find the acute angle $\\theta$ in degrees.`, 60, "$\\cos^{-1}0.5=60^\\circ$.", null, 0.6),
  num(`A right triangle has two equal legs of $7$. Find each acute angle in degrees.`, 45, "$\\tan^{-1}\\frac77=45^\\circ$.", null, 0.6),
  num(`The side opposite $\\theta$ is $3$ and the hypotenuse is $6$. Find $\\theta$ in degrees.`, 30, "$\\sin^{-1}0.5$.", null, 0.6),
  a0(`The side opposite $\\theta$ is $4$ and the adjacent side is $9$. Find $\\theta$.`, atan(4 / 9), "$\\tan^{-1}\\frac49$"),
  a0(`The side adjacent to $\\theta$ is $6$ and the hypotenuse is $9$. Find $\\theta$.`, acos(6 / 9), "$\\cos^{-1}\\frac69$"),
  mc(`$\\sin^{-1}(0.6)$ means…`, "the angle whose sine is $0.6$", ["$\\frac1{\\sin0.6}$", "$\\sin(0.6)\\times-1$", "$0.6^{-1}$"], "It undoes sine."),
  mc(`You know the opposite side and the hypotenuse. Which key finds the angle?`, "$\\sin^{-1}$", ["$\\cos^{-1}$", "$\\tan^{-1}$", "$\\sin$"], "O and H."),
  mc(`You know the adjacent side and the hypotenuse. Which key finds the angle?`, "$\\cos^{-1}$", ["$\\sin^{-1}$", "$\\tan^{-1}$", "$\\cos$"], "A and H."),
  tf(`$\\sin^{-1}(0.5)=\\frac1{\\sin0.5}$.`, false, "$\\sin^{-1}$ is the inverse function, not a reciprocal."),
  a0(`The side opposite $\\theta$ is $5$ and the hypotenuse is $8$. Find $\\theta$.`, asin(5 / 8), "$\\sin^{-1}\\frac58$"),
  a0(`The side opposite $\\theta$ is $10$ and the adjacent side is $7$. Find $\\theta$.`, atan(10 / 7), "$\\tan^{-1}\\frac{10}7$"),
  a0(`$\\sin\\theta=0.8$. Find $\\theta$.`, asin(0.8), "$\\sin^{-1}0.8$"),
  a0(`$\\cos\\theta=0.25$. Find $\\theta$.`, acos(0.25), "$\\cos^{-1}0.25$"),
  a0(`$\\tan\\theta=0.4$. Find $\\theta$.`, atan(0.4), "$\\tan^{-1}0.4$"),
  fill(`The two acute angles of a right triangle add to ___ degrees.`, ["90"], "With the right angle, $180^\\circ$."),
  num(`One acute angle of a right triangle is $35^\\circ$. Find the other in degrees.`, 55, "$90-35$.", null, 0.01),
  tf(`In a right triangle, the larger acute angle is opposite the longer leg.`, true, "Bigger side, bigger opposite angle."),
  a1(`A ramp rises $1$ m over a horizontal run of $10$ m. Find its angle with the ground.`, atan(0.1), "$\\tan^{-1}0.1$"),
  a0(`Find $\\theta$ in the triangle shown.`, atan(5 / 9), "$\\tan^{-1}\\frac59$", rtDoc(9, 5, { adj: "9", opp: "5", theta: "θ" })),
];

export const M = [
  a1(`The side opposite $\\theta$ is $7.5$ and the hypotenuse is $12$. Find $\\theta$.`, asin(7.5 / 12), "$\\sin^{-1}\\frac{7.5}{12}$"),
  a1(`The side adjacent to $\\theta$ is $11$ and the hypotenuse is $14$. Find $\\theta$.`, acos(11 / 14), "$\\cos^{-1}\\frac{11}{14}$"),
  a1(`The side opposite $\\theta$ is $13$ and the adjacent side is $6$. Find $\\theta$.`, atan(13 / 6), "$\\tan^{-1}\\frac{13}6$"),
  a1(`A $6$ m ladder has its foot $1.8$ m from a wall. What angle does it make with the ground?`, acos(0.3), "$\\cos^{-1}\\frac{1.8}6$"),
  a1(`A $5$ m ladder reaches $4.5$ m up a wall. What angle does it make with the ground?`, asin(0.9), "$\\sin^{-1}0.9$"),
  a1(`A road rises $80$ m over a horizontal distance of $1.2$ km. Find its angle of inclination.`, atan(80 / 1200), "$\\tan^{-1}\\frac{80}{1200}$"),
  a1(`A $1.8$ m person casts a $2.5$ m shadow. Find the angle of the sun above the horizon.`, atan(1.8 / 2.5), "$\\tan^{-1}\\frac{1.8}{2.5}$"),
  a1(`A right triangle has legs $8$ and $15$. Find its smaller acute angle.`, atan(8 / 15), "$\\tan^{-1}\\frac8{15}$"),
  tf(`$\\cos^{-1}(1.2)$ gives an acute angle.`, false, "No angle has a cosine greater than 1."),
  mc(`The side opposite $\\theta$ is $6$ and the hypotenuse is $10$. A student writes $\\theta=\\tan^{-1}\\frac6{10}$. What is wrong?`, "with opposite and hypotenuse, use $\\sin^{-1}$", ["nothing", "it should be $\\cos^{-1}\\frac6{10}$", "it should be $\\tan^{-1}\\frac{10}6$"], "$\\tan$ uses opposite and adjacent."),
  a1(`A kite on an $80$ m string is $60$ m high. What angle does the string make with the ground?`, asin(0.75), "$\\sin^{-1}\\frac{60}{80}$"),
  a1(`An isosceles triangle has equal sides $10$ and base $14$. Find a base angle.`, acos(0.7), "$\\cos^{-1}\\frac7{10}$"),
  a1(`A rectangle is $8$ by $5$. Find the angle a diagonal makes with the longer side.`, atan(5 / 8), "$\\tan^{-1}\\frac58$"),
  ms(`A right triangle has sides $6$, $8$, $10$ and $\\theta$ is opposite $6$. Select all expressions equal to $\\theta$.`, ["$\\tan^{-1}\\frac68$", "$\\sin^{-1}\\frac6{10}$", "$\\cos^{-1}\\frac8{10}$", "$\\tan^{-1}\\frac86$", "$\\sin^{-1}\\frac8{10}$"], [0, 1, 2], "Any correct pair of sides works."),
  a1(`A roof rises $2.5$ m over a horizontal run of $6$ m. Find its pitch.`, atan(2.5 / 6), "$\\tan^{-1}\\frac{2.5}6$"),
  a1(`$\\sin\\theta=0.35$. Find $\\theta$.`, asin(0.35), "$\\sin^{-1}0.35$"),
  a1(`$\\tan\\theta=3.2$. Find $\\theta$.`, atan(3.2), "$\\tan^{-1}3.2$"),
  a1(`$\\cos\\theta=0.92$. Find $\\theta$.`, acos(0.92), "$\\cos^{-1}0.92$"),
  a1(`A plane $2$ km high is $15$ km (horizontally) from the runway. At what angle must it descend in a straight line?`, atan(2 / 15), "$\\tan^{-1}\\frac2{15}$"),
  a1(`Find $\\theta$ in the triangle shown.`, asin(7 / 12), "$\\sin^{-1}\\frac7{12}$", rtDoc(Math.sqrt(95), 7, { opp: "7", hyp: "12", theta: "θ" })),
];
