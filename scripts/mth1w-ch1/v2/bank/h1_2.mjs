// 1.2 Adding & Subtracting Integers — 20 hard questions
import { mc, ms, num, fill, tf } from "./kit.mjs";
import { numberLine, barChart, thermometer } from "./svg.mjs";

export const TOPIC = "1.2 Adding & Subtracting Integers";
export const Q = [
  num(String.raw`On Sunday the temperature was $-4\,^\circ$C. The chart shows the change each day. What was the temperature on Friday (in $^\circ$C)?`, -11,
    String.raw`$-4+(-6)+9+(-11)+3+(-2)=-11$.`, barChart([["Mon", -6], ["Tue", 9], ["Wed", -11], ["Thu", 3], ["Fri", -2]], { ylabel: "change (°C)", min: -12, max: 10, step: 2 })),
  mc(String.raw`Which expression has the greatest value?`, String.raw`$|-8-15|$`, [String.raw`$-|-8|-(-15)$`, String.raw`$-8-|-15|$`, String.raw`$|8-15|-(-1)$`], String.raw`Values: $23$, $7$, $-23$, $8$.`),
  fill(String.raw`Fill in the blank: $-13-\_\_\_=9$.`, ["-22", "−22"], String.raw`Subtracting the blank must raise $-13$ to $9$, so the blank is negative: $-13-(-22)=9$.`),
  num(String.raw`If $a=-7$ and $b=12$, evaluate $|a-b|-|b-a|+(a-b)$.`, -19, String.raw`$|-19|-|19|+(-19)=19-19-19=-19$.`),
  ms(String.raw`Which expressions equal $-6$? Select all.`, [String.raw`$-10+4$`, String.raw`$4-10$`, String.raw`$-10-(-4)$`, String.raw`$10-(-4)$`, String.raw`$-4-(-10)$`, String.raw`$-4-2$`], [0, 1, 2, 5], String.raw`$-6,-6,-6,14,6,-6$.`),
  tf(String.raw`If $a$ and $b$ are both negative, then $a-b$ is always negative.`, false, String.raw`$a=-2$, $b=-5$: $-2-(-5)=3$, which is positive.`),
  tf(String.raw`$|a-b|=|a|-|b|$ for all integers $a$ and $b$.`, false, String.raw`$a=-3$, $b=4$: $|-7|=7$ but $3-4=-1$.`),
  num(String.raw`The thermometer shows the lowest and highest temperatures one day in Yellowknife. By how many degrees did the temperature rise?`, 41,
    String.raw`$14-(-27)=41$.`, thermometer({ lo: -30, hi: 20, step: 5, marks: [{ at: 14, label: "high 14°" }, { at: -27, label: "low −27°", color: "blue" }] })),
  num(String.raw`A submarine at $-85$ m rises $37$ m, then dives $64$ m. A diver is at $-12$ m. How many metres apart are they now?`, 100, String.raw`Submarine: $-85+37-64=-112$. Distance $=-12-(-112)=100$ m.`),
  num(String.raw`Find the sum of all integers from $-15$ to $12$ inclusive.`, -42, String.raw`$-12$ to $12$ cancel in pairs, leaving $-15-14-13=-42$.`),
  num(String.raw`The integers $-4,-3,\dots,3,4$ are placed in a $3\times3$ magic square (every row, column and diagonal has the same sum). What is that sum?`, 0, String.raw`All nine numbers add to $0$, shared equally by $3$ rows: $0\div3=0$.`),
  num(String.raw`Two integers have a sum of $-3$ and a difference (larger minus smaller) of $15$. What is the smaller integer?`, -9, String.raw`Larger $+$ smaller $=-3$ and larger $-$ smaller $=15$, so $2\times$larger $=12$: larger $6$, smaller $-9$.`),
  mc(String.raw`Which expression does the number-line diagram show?`, String.raw`$5+(-9)$`, [String.raw`$5-(-9)$`, String.raw`$-5+9$`, String.raw`$9-5$`], String.raw`Start at $0$, move to $5$, then $9$ to the left: $5+(-9)=-4$.`,
    numberLine({ min: -6, max: 7, arrows: [{ from: 0, to: 5, label: "first move", color: "blue", lane: 0 }, { from: 5, to: -4, label: "second move", color: "red", lane: 1 }], dots: [{ at: -4, label: "end", color: "green" }] })),
  num(String.raw`A bank account starts at $-35$ dollars. Then: deposit $120$, withdraw $48$, withdraw $90$, deposit $60$. What is the lowest balance after any of these steps, in dollars?`, -53, String.raw`Balances: $85$, $37$, $-53$, $7$. The lowest is $-53$.`),
  ms(String.raw`Which statements are true for all integers $a$ and $b$? Select all.`, [String.raw`$a+b=b+a$`, String.raw`$a-b=b-a$`, String.raw`$a-(-b)=a+b$`, String.raw`$-(a-b)=b-a$`, String.raw`$|a+b|\le|a|+|b|$`], [0, 2, 3, 4], String.raw`Subtraction is not commutative ($5-2\neq2-5$); the other four always hold.`),
  num(String.raw`Par for a golf course is $72$. Over four rounds a golfer scores $-3$, $+2$, $-5$ and $+1$ relative to par. How many strokes did she take in total?`, 283, String.raw`Total relative to par: $-5$. Strokes $=4\times72-5=283$.`),
  mc(String.raw`Which list is in order from least to greatest? \quad $P=-|-9|$, \ $Q=-(-7)$, \ $R=|-4|-|-11|$, \ $S=-2-(-2)$`, "P, R, S, Q", ["R, P, S, Q", "P, S, R, Q", "Q, S, R, P"], String.raw`$P=-9$, $Q=7$, $R=-7$, $S=0$.`),
  num(String.raw`A climber at $150$ m above sea level descends $230$ m into a canyon, then climbs $85$ m. How many metres below her starting point is she now?`, 145, String.raw`Position: $150-230+85=5$ m. Below start: $150-5=145$ m.`),
  tf(String.raw`Subtracting a negative integer from any number always gives a result larger than that number.`, true, String.raw`$x-(-n)=x+n>x$ for $n>0$.`),
  num(String.raw`At noon it is $7\,^\circ$C. The temperature falls $4$ degrees each hour until 5 p.m., then rises $2$ degrees each hour until 9 p.m. What is the temperature at 9 p.m.?`, -5, String.raw`Noon to 5 p.m.: $7-5\times4=-13$. Then $4$ hours of $+2$: $-13+8=-5$.`),
];
