// 1.3 Multiplying & Dividing Integers — 20 hard questions
import { mc, ms, num, fill, tf } from "./kit.mjs";
import { numberLine, barChart, graph } from "./svg.mjs";

export const TOPIC = "1.3 Multiplying & Dividing Integers";
export const Q = [
  num(String.raw`Evaluate $(-2)^3\times(-3)^2\div(-6)$.`, 12, String.raw`$-8\times9=-72$; $-72\div(-6)=12$.`),
  mc(String.raw`Evaluate $-3x^2-2x+5$ when $x=-2$.`, "$-3$", ["$45$", "$-11$", "$21$"], String.raw`$-3(-2)^2-2(-2)+5=-12+4+5=-3$. ($45$ comes from squaring $-3x$; $-11$ from a sign slip on $-2x$.)`),
  ms(String.raw`Which products are positive? Select all.`, [String.raw`$(-1)^{17}(-2)$`, String.raw`$(-3)(4)(-5)(-1)$`, String.raw`$(-2)^4(-1)^3$`, String.raw`$-(-4)(-6)$`, String.raw`$(-1)(-2)(-3)(-4)$`], [0, 4], String.raw`Values: $2$, $-60$, $-16$, $-24$, $24$.`),
  num(String.raw`The graph shows a temperature that falls at a constant rate. If it continues, how many hours after the start will the temperature be $-18\,^\circ$C?`, 8,
    String.raw`It falls $3$ degrees per hour from $6$: $6+h(-3)=-18$ gives $-3h=-24$, $h=8$.`,
    graph({ series: [{ pts: [[0, 6], [1, 3], [2, 0], [3, -3], [4, -6]] }], xmin: 0, xmax: 9, ymin: -20, ymax: 8, xstep: 1, ystep: 4, xlabel: "hours", ylabel: "°C" })),
  fill(String.raw`Fill in the blank: $(-84)\div\_\_\_=12$.`, ["-7", "−7"], String.raw`$-84\div(-7)=12$ (same signs give a positive).`),
  num(String.raw`Find the mean of $-14,\ 9,\ -3,\ -22,\ 0,\ 6$.`, -4, String.raw`Sum $=-24$; $-24\div6=-4$.`),
  tf(String.raw`If $ab>0$ and $a+b<0$, then $a$ and $b$ are both negative.`, true, String.raw`$ab>0$ means same signs; a negative sum rules out both positive.`),
  tf(String.raw`$(-a)^3=-a^3$ for every integer $a$.`, true, String.raw`$(-a)^3=(-1)^3a^3=-a^3$.`),
  mc(String.raw`Where must brackets go in $-4+8\div2\times-3$ to make the value $-6$?`, String.raw`$(-4+8)\div2\times(-3)$`, [String.raw`$(-4+8\div2)\times(-3)$`, String.raw`$-4+(8\div2)\times(-3)$`, String.raw`$-4+8\div(2\times(-3))+0$`], String.raw`$(-4+8)\div2\times(-3)=4\div2\times(-3)=2\times(-3)=-6$. The others give $0$, $-16$ and $-5\tfrac13$.`),
  num(String.raw`Evaluate $\left[(-3)^2-4(-2)(5)\right]\div(-7)$.`, -7, String.raw`$9+40=49$; $49\div(-7)=-7$.`),
  num(String.raw`Find the product of all the integers from $-5$ to $-1$.`, -120, String.raw`Five negative factors: negative; $5!=120$.`),
  num(String.raw`Find the integer $n$ if $-6n-15=33$.`, -8, String.raw`$-6n=48$, so $n=-8$. Check: $48-15=33$.`),
  num(String.raw`A share price fell $3$ dollars per day for $6$ days, then rose $4$ dollars per day for $2$ days (see the chart), ending at $41$ dollars. What was the starting price in dollars?`, 51,
    String.raw`Total change $=6(-3)+2(4)=-10$. Start $=41-(-10)=51$.`, barChart([["1", -3], ["2", -3], ["3", -3], ["4", -3], ["5", -3], ["6", -3], ["7", 4], ["8", 4]], { ylabel: "daily change (dollars)", min: -4, max: 5, step: 1 })),
  ms(String.raw`Which expressions equal $-36$? Select all.`, [String.raw`$(-6)^2$`, String.raw`$-6^2$`, String.raw`$(-4)(9)$`, String.raw`$-(-4)(-9)$`, String.raw`$(-2)^2(-9)$`, String.raw`$72\div(-2)$`], [1, 2, 3, 4, 5], String.raw`Only $(-6)^2=36$ is positive; the rest are $-36$.`),
  num(String.raw`If $a=-4$, $b=3$ and $c=-2$, evaluate $(a-b)c-a^2\div(b+c)$.`, -2, String.raw`$(-7)(-2)-16\div1=14-16=-2$.`),
  tf(String.raw`Dividing a negative integer by a negative integer always gives a positive integer.`, false, String.raw`The quotient is positive but need not be an integer: $-3\div(-2)=1.5$.`),
  mc(String.raw`A diver descends at $2$ m/s for $15$ s, then rises at $1$ m/s for $8$ s. What is her position relative to the surface?`, "$-22$ m", ["$-38$ m", "$22$ m", "$-23$ m"], String.raw`$15(-2)+8(1)=-30+8=-22$.`),
  num(String.raw`A contest gives $+5$ per correct answer, $-3$ per wrong answer and $-1$ per blank. Out of $25$ questions, Kai had $15$ correct, $7$ wrong and $3$ blank. What was his score?`, 51, String.raw`$75-21-3=51$.`),
  num(String.raw`Evaluate $(-1)^{2026}+(-1)^{2027}+(-1)^{0}$.`, 1, String.raw`$1+(-1)+1=1$.`),
  num(String.raw`The diagram shows $6+4\times(-3)$ as jumps on a number line. Where does it end?`, -6, String.raw`Four jumps of $-3$ from $6$: $6-12=-6$.`,
    numberLine({ min: -8, max: 8, arrows: [{ from: 6, to: 3, lane: 0, color: "red" }, { from: 3, to: 0, lane: 1, color: "red" }, { from: 0, to: -3, lane: 0, color: "red" }, { from: -3, to: -6, lane: 1, color: "red" }], dots: [{ at: 6, label: "start", color: "gray" }] })),
];
