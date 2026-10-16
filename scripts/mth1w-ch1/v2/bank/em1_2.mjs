// 1.2 Adding & Subtracting Integers — 20 easy + 20 medium questions
import { mc, ms, num, fill, tf } from "./kit.mjs";
import { numberLine, chips, thermometer, barChart } from "./svg.mjs";

export const E = [
  num(String.raw`Evaluate $-6+10$.`, 4, String.raw`Different signs: $10-6=4$, positive.`),
  num(String.raw`Evaluate $-8+(-5)$.`, -13, "Same signs: add the sizes, keep the negative sign."),
  num(String.raw`Evaluate $3-11$.`, -8, String.raw`$3+(-11)=-8$.`),
  num(String.raw`Evaluate $7-(-2)$.`, 9, String.raw`$7+2=9$.`),
  mc(String.raw`What is the opposite of $-15$?`, "$15$", ["$-15$", String.raw`$\frac{1}{15}$`, "$0$"], "Opposites are the same distance from 0 on opposite sides."),
  num(String.raw`Evaluate $|-12|$.`, 12, "Absolute value is the distance from 0."),
  tf(String.raw`$-4>-9$`, true, String.raw`$-4$ is to the right of $-9$ on the number line.`),
  mc("Which is the coldest temperature?", String.raw`$-14\,^\circ$C`, [String.raw`$-9\,^\circ$C`, String.raw`$0\,^\circ$C`, String.raw`$-11\,^\circ$C`], "The most negative number is the lowest."),
  num(String.raw`Use the chips: four positive and six negative. What integer do they show?`, -2, "Four zero pairs cancel; two negative chips remain.", chips(4, 6)),
  fill(String.raw`$-9+\_\_\_=0$`, ["9"], "A number plus its opposite is 0."),
  num(String.raw`The number line shows a start and a move. Where does it end?`, -3, String.raw`Start at $2$ and move $5$ left: $2+(-5)=-3$.`, numberLine({ min: -6, max: 6, arrows: [{ from: 2, to: -3, label: "move", color: "red" }], dots: [{ at: 2, label: "start", color: "gray" }] })),
  num(String.raw`Evaluate $-20-5$.`, -25, String.raw`$-20+(-5)=-25$.`),
  tf(String.raw`$-3+(-4)=7$`, false, String.raw`Adding two negatives gives a negative: $-7$.`),
  ms(String.raw`Which expressions equal $-2$? Select all.`, [String.raw`$3-5$`, String.raw`$-5+3$`, String.raw`$5-3$`, String.raw`$-1+(-1)$`], [0, 1, 3], String.raw`$5-3=2$.`),
  num(String.raw`It is $-7\,^\circ$C and the temperature rises $12$ degrees. What is the new temperature?`, 5, String.raw`$-7+12=5$.`),
  mc(String.raw`Which list is in order from least to greatest?`, "$-8,\\ -3,\\ 0,\\ 2$", ["$-3,\\ -8,\\ 0,\\ 2$", "$0,\\ -3,\\ -8,\\ 2$", "$2,\\ 0,\\ -3,\\ -8$"], "Read the number line from left to right."),
  num(String.raw`Evaluate $0-14$.`, -14, String.raw`$0+(-14)=-14$.`),
  num(String.raw`A diver is at $-18$ m and swims up $7$ m. What is her new depth?`, -11, String.raw`$-18+7=-11$ m.`),
  tf(String.raw`$|-6|=|6|$`, true, "Both are 6 units from 0."),
  num(String.raw`Evaluate $-4-(-4)$.`, 0, String.raw`$-4+4=0$.`),
];

export const M = [
  num(String.raw`Evaluate $-12+7-(-9)$.`, 4, String.raw`$-12+7+9=4$.`),
  num(String.raw`Evaluate $15-(-6)+(-25)$.`, -4, String.raw`$15+6-25=-4$.`),
  fill(String.raw`Fill in the blank: $\_\_\_-6=-15$.`, ["-9", "−9"], String.raw`$-9-6=-15$.`),
  num(String.raw`Find the distance between $-17$ and $8$ on a number line.`, 25, String.raw`$8-(-17)=25$.`),
  num(String.raw`The thermometer shows the morning and afternoon temperatures. By how many degrees did it rise?`, 17, String.raw`$6-(-11)=17$.`, thermometer({ lo: -15, hi: 10, step: 5, marks: [{ at: 6, label: "afternoon" }, { at: -11, label: "morning", color: "blue" }] })),
  mc(String.raw`Which expression has a negative value?`, String.raw`$-9-(-4)$`, [String.raw`$-4-(-9)$`, String.raw`$9+(-4)$`, String.raw`$-4+9$`], String.raw`$-9+4=-5$; the others equal $5$.`),
  num(String.raw`A player's scores in four rounds are $-3$, $+5$, $-8$ and $+2$. What is the total?`, -4, String.raw`$-3+5-8+2=-4$.`),
  tf(String.raw`$a-b$ and $b-a$ always have the same value.`, false, String.raw`They are opposites: $7-2=5$ but $2-7=-5$.`),
  ms(String.raw`Which expressions equal $8$? Select all.`, [String.raw`$3-(-5)$`, String.raw`$-3+11$`, String.raw`$-5-(-13)$`, String.raw`$-8+0$`, String.raw`$13-(-5)$`], [0, 1, 2], String.raw`$-8+0=-8$ and $13+5=18$.`),
  num(String.raw`The chart shows daily changes in a lake's water level (cm). What is the total change for the week?`, -6, String.raw`$-4+2-3+1-2=-6$ cm.`, barChart([["Mon", -4], ["Tue", 2], ["Wed", -3], ["Thu", 1], ["Fri", -2]], { ylabel: "change (cm)", min: -5, max: 3, step: 1 })),
  num(String.raw`An elevator starts on floor $6$, goes down $9$ floors, then up $4$. Which floor is it on? (Underground floors are negative.)`, 1, String.raw`$6-9+4=1$.`),
  fill(String.raw`Fill in the blank: $-7-\_\_\_=3$.`, ["-10", "−10"], String.raw`$-7-(-10)=-7+10=3$.`),
  num(String.raw`A bank balance is $-30$ dollars. After a deposit of $75$ dollars and a payment of $52$ dollars, what is the balance?`, -7, String.raw`$-30+75-52=-7$.`),
  mc("Using zero pairs, what does the diagram show?", String.raw`$5+(-7)=-2$`, [String.raw`$5+(-7)=2$`, String.raw`$5-7=12$`, String.raw`$-5+7=2$`], String.raw`Five zero pairs cancel; two negatives remain.`, chips(5, 7)),
  num(String.raw`Evaluate $-2-3-4-5$.`, -14, "Add all four negatives."),
  num(String.raw`Mount Everest is about $8849$ m high and the Dead Sea shore is about $-430$ m. Find the difference in height.`, 9279, String.raw`$8849-(-430)=9279$ m.`),
  tf(String.raw`Adding a negative integer always makes the result smaller.`, true, String.raw`$x+(-n)=x-n<x$ for $n>0$.`),
  num(String.raw`What number is $11$ less than $-4$?`, -15, String.raw`$-4-11=-15$.`),
  mc(String.raw`If $x=-6$, what is $x-(-x)$?`, "$-12$", ["$0$", "$12$", "$-36$"], String.raw`$-6-(6)=-12$.`),
  num(String.raw`The temperature at midnight was $-13\,^\circ$C. By noon it was still below zero, at $-2\,^\circ$C. By how many degrees did it rise?`, 11, String.raw`$-2-(-13)=11$.`),
];
