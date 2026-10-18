// 6.5 Finding Angles — 20 hard questions (angles computed, rounded as asked)
import { mc, ms, num, tf } from "./kit.mjs";
import { rtDoc } from "./fig.mjs";

const G = 180 / Math.PI, asin = (x) => Math.asin(x) * G, acos = (x) => Math.acos(x) * G, atan = (x) => Math.atan(x) * G;
const a1 = (prompt, v, fb, fig) => num(`${prompt} Give the angle to one decimal place.`, Math.round(v * 10) / 10, `${fb} $\\approx${Math.round(v * 10) / 10}^\\circ$.`, fig, 0.06);

export const TOPIC = "6.5 Finding Angles";
export const Q = [
  a1(`An isosceles triangle has base $10$ and height $12$. Find a base angle.`, atan(12 / 5), "$\\tan^{-1}\\frac{12}5$"),
  a1(`An isosceles triangle has base $10$ and height $12$. Find the vertex (top) angle.`, 180 - 2 * atan(12 / 5), "$180^\\circ-2\\tan^{-1}\\frac{12}5$"),
  a1(`The diagonals of a $9$ by $4$ rectangle cross. Find the acute angle between them.`, 2 * atan(4 / 9), "Each half-angle is $\\tan^{-1}\\frac49$; double it:"),
  a1(`From $50$ m away on level ground, a $30$ m building is seen. Find the angle of elevation to its top (from the ground).`, atan(30 / 50), "$\\tan^{-1}\\frac{30}{50}$"),
  a1(`From the top of a $40$ m tower, a boat is $120$ m from the base. Find the angle of depression.`, atan(40 / 120), "$\\tan^{-1}\\frac{40}{120}$"),
  tf(`If both legs of a right triangle are doubled, its acute angles double.`, false, "The triangle is similar, so the angles stay the same."),
  mc(`Which expression gives the largest angle?`, "$\\tan^{-1}2$", ["$\\sin^{-1}0.8$", "$\\cos^{-1}0.5$", "$\\tan^{-1}1.5$"], "About $63.4^\\circ$, vs $53.1^\\circ$, $60^\\circ$, $56.3^\\circ$."),
  a1(`A triangle has sides $7$, $24$ and $25$. Find its smallest angle.`, asin(7 / 25), "It is right-angled ($7^2+24^2=25^2$): $\\sin^{-1}\\frac7{25}$"),
  a1(`A guy wire runs from the ground $20$ m from a pole to a point $35$ m up. Find the angle between the wire and the pole.`, atan(20 / 35), "$\\tan^{-1}\\frac{20}{35}$"),
  a1(`Find the angle the line $y=0.6x$ makes with the $x$-axis.`, atan(0.6), "The slope is $\\tan\\theta$: $\\tan^{-1}0.6$"),
  ms(`For an acute angle with $\\sin\\theta=0.6$, select all true statements.`, ["$\\theta\\approx36.9^\\circ$", "$\\cos\\theta=0.8$", "$\\tan\\theta=0.75$", "the other acute angle is about $53.1^\\circ$", "$\\theta=0.6^\\circ$"], [0, 1, 2, 3], "A $3$-$4$-$5$ triangle."),
  a1(`A person whose eyes are $1.5$ m high stands $25$ m from a $20$ m tree. Find the angle of elevation from their eyes to the top.`, atan(18.5 / 25), "$\\tan^{-1}\\frac{18.5}{25}$"),
  a1(`A rectangle has a $13$ cm diagonal and a $5$ cm side. Find the angle between the diagonal and that side.`, acos(5 / 13), "$\\cos^{-1}\\frac5{13}$"),
  a1(`A $5$ m ladder's foot slides from $1.4$ m to $2.2$ m from the wall. By how many degrees does its angle with the ground decrease?`, acos(1.4 / 5) - acos(2.2 / 5), "$\\cos^{-1}\\frac{1.4}5-\\cos^{-1}\\frac{2.2}5$"),
  a1(`How many degrees steeper is a ramp with slope $1:12$ than one with slope $1:15$?`, atan(1 / 12) - atan(1 / 15), "$\\tan^{-1}\\frac1{12}-\\tan^{-1}\\frac1{15}$"),
  tf(`For $0<x<1$, $\\sin^{-1}x+\\cos^{-1}x=90^\\circ$.`, true, "The two angles are the acute angles of one right triangle."),
  mc(`For an acute angle greater than $45^\\circ$, $\\tan\\theta$ is…`, "greater than 1", ["less than 1", "equal to 1", "negative"], "The opposite side is longer than the adjacent."),
  a1(`A $9$ m pole casts a $12$ m shadow. Find the angle of the sun above the horizon.`, atan(9 / 12), "$\\tan^{-1}\\frac9{12}$"),
  a1(`One leg of a right triangle is twice the other. Find the smaller acute angle.`, atan(0.5), "$\\tan^{-1}\\frac12$"),
  a1(`A ramp rises $0.6$ m over a horizontal run of $7.5$ m, as shown. Find its angle with the ground.`, atan(0.6 / 7.5), "$\\tan^{-1}\\frac{0.6}{7.5}$", rtDoc(7.5, 1.2, { adj: "7.5 m", opp: "0.6 m", theta: "θ" })),
];
