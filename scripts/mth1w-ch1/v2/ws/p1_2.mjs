// Worksheet 1.2 problems: 3 knowledge, 5 application, 5 textbook-level (multi-part) problems.
import { barChart } from "./tikz.mjs";

export const PROBLEMS = [
  { level: 1, q: String.raw`Evaluate (a) $-8+3$ \quad (b) $-4+(-12)$.`, recap: String.raw`$-8+3$; $-4+(-12)$.`, ans: "(a) $-5$ (b) $-16$" },
  { level: 1, q: String.raw`Evaluate (a) $9-15$ \quad (b) $-7-(-7)$.`, recap: String.raw`$9-15$; $-7-(-7)$.`, ans: "(a) $-6$ (b) $0$" },
  { level: 1, q: String.raw`Write the opposite of $-14$, and evaluate $|-14|+|6|$.`, recap: String.raw`Opposite of $-14$; $|-14|+|6|$.`, ans: "$14$; $20$" },
  { level: 2, q: String.raw`Evaluate $-11+6-(-9)$.`, ans: "$4$" },
  { level: 2, q: String.raw`Evaluate $15-(-3)+(-22)$.`, ans: "$-4$" },
  { level: 2, q: String.raw`Maya has $60$ dollars in her account. She spends $85$ dollars, then deposits $40$ dollars. What is her balance?`, recap: "Maya's balance: 60, −85, +40.", ans: "$15$ dollars" },
  { level: 2, q: String.raw`The chart shows the daily change in the noon temperature. Sunday's temperature was $-1\,^\circ$C. What was it on Friday?`, recap: String.raw`Friday temperature from the chart (start $-1\,^\circ$C).`,
    fig: barChart([["Mon", 3], ["Tue", -5], ["Wed", -2], ["Thu", 6], ["Fri", -4]], { ylabel: "change ($^\\circ$C)", ymin: -6, ymax: 7 }), space: 2.6, ans: String.raw`$-3\,^\circ$C` },
  { level: 2, q: String.raw`An elevator starts on floor $4$, goes down $9$ floors, then up $2$ floors. On which floor does it stop? (Ground $=0$.)`, recap: "Elevator: 4, down 9, up 2.", ans: "floor $-3$" },
  { level: 3, space: 5,
    q: String.raw`The daily changes in the price of one share of a stock during a week were $+2.78,\ -5.45,\ -0.38,\ +1.38$ and $-2.12$ dollars. The price was $58.22$ dollars at the start of the week.
(a) What was the price at the end of the week?
(b) What was the average daily change?
(c) On which day was the closing price lowest? Show the price after each day.`,
    recap: "Stock price: 58.22 with five daily changes; end price, average change, lowest day.",
    ans: String.raw`(a) $54.43$ dollars (b) $-3.79\div5\approx-0.76$ dollars (c) $61.00,\ 55.55,\ 55.17,\ 56.55,\ 54.43$: lowest on day 5.` },
  { level: 3, space: 5,
    q: String.raw`The temperature at 5:00 a.m.\ on December 25 in Moosonee, Ontario, over six years was $-21.4,\ -17.7,\ -30.3,\ -24.5,\ -8.0,\ -26.9$ ($^\circ$C).
(a) Find the range (highest minus lowest).
(b) Find the mean temperature, to one decimal place.
(c) In how many of the years was it warmer than the mean?`,
    recap: "Moosonee temperatures: range, mean, years warmer than the mean.",
    ans: String.raw`(a) $-8.0-(-30.3)=22.3$ (b) $-128.8\div6\approx-21.5\,^\circ$C (c) $3$ years ($-21.4,\ -17.7,\ -8.0$).` },
  { level: 3, space: 5,
    q: String.raw`Place the integers $-4,-3,-2,-1,0,1,2,3,4$ in a $3\times3$ grid so that every row, column and diagonal has the same sum.
(a) What must that sum be? Explain.
(b) Which number must go in the centre? Explain.
(c) Complete the square if the top row is $-3,\ 2,\ 1$.`,
    recap: String.raw`Magic square with $-4$ to $4$.`,
    ans: String.raw`(a) $0$ (total $0$ shared by $3$ rows) (b) $0$ (c) rows: $-3,2,1$ / $4,0,-4$ / $-1,-2,3$.` },
  { level: 3, space: 5,
    q: String.raw`Two students evaluated $-7-(-3)+(-5)$.\quad Kai: $-7-3-5=-15$.\quad Lea: $-7+3-5=-9$.
(a) Who is correct?
(b) Explain the other student's error.
(c) Create your own expression with four integers, including subtracting a negative, whose value is $-2$.`,
    recap: String.raw`Kai vs Lea: $-7-(-3)+(-5)$; create an expression equal to $-2$.`,
    ans: String.raw`(a) Lea, $-9$ (b) Kai changed $-(-3)$ into $-3$; subtracting a negative adds (c) e.g.\ $5-(-1)+(-6)-2=-2$.` },
  { level: 3, space: 5,
    q: String.raw`A helicopter hovers $120$ m above sea level. A diver is at $-35$ m and a submarine at $-250$ m.
(a) How far is the helicopter from each of them?
(b) The submarine rises $40$ m every minute. After how many whole minutes is it closer to the helicopter than the diver is?
(c) What is the submarine's position then?`,
    recap: "Helicopter 120 m, diver −35 m, submarine −250 m rising 40 m/min.",
    ans: String.raw`(a) $155$ m and $370$ m (b) it must rise past $-35$, i.e.\ more than $215$ m: $6$ minutes (c) $-250+240=-10$ m.` },
];
