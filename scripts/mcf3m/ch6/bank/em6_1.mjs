// 6.1 Periodic Functions — 20 easy + 20 medium
import { mc, ms, num, tf, fill, sDoc, sd, cd, repeat, P, n2, tgraph } from "./sk.mjs";
const S = String.raw;
const sq = sDoc([], { base: false, segs: [repeat([[0, 1], [2, 1], [2, 5], [3, 5], [3, 1]], 3, 5)], view: { xmin: 0, xmax: 15, ymin: 0, ymax: 6 }, step: { x: 1, y: 1 }, xlabel: "t" });
const tri = sDoc([], { base: false, segs: [repeat([[0, -2], [4, 6], [8, -2]], 8, 3)], view: { xmin: 0, xmax: 24, ymin: -3, ymax: 7 }, step: { x: 2, y: 1 }, xlabel: "x" });

export const E = [
  num(S`A periodic graph has max $20$ and min $8$. Enter the amplitude.`, 6, "(20 − 8)/2."),
  num(S`A periodic graph has max $20$ and min $8$. The axis is $y=k$. Enter $k$.`, 14, "(20 + 8)/2."),
  num(S`Consecutive peaks are at $x=5$ and $x=17$. Enter the period.`, 12, "17 − 5."),
  num(S`$f$ has period $4$ and $f(1)=9$. Enter $f(13)$.`, 9, "13 = 1 + 3(4)."),
  num(S`$f$ has period $5$ and $f(2)=-3$. Enter $f(22)$.`, -3, "22 = 2 + 4(5)."),
  mc("Which is periodic?", "the position of a clock's second hand", ["the height of a growing tree", "a car's distance travelled", "the price of a stock"], "It repeats every minute."),
  mc("The period of a periodic function is …", "the horizontal length of one cycle", ["the highest value", "half of max − min", "the y-intercept"], "Measured along the x-axis."),
  tf("The amplitude is half the distance between the maximum and the minimum.", true, "(max − min)/2."),
  tf("The period can be measured from a peak to the next trough.", false, "That is half a period."),
  fill("One complete repetition of a periodic pattern is called a ____.", ["cycle"], "Cycle."),
  mc("For the graph shown, what is the period?", "3", ["2", "4", "5"], "The pattern repeats every 3 units.", sq),
  num("For the graph shown, enter the amplitude.", 2, "(5 − 1)/2.", sq),
  num(S`A tide goes from $1.5$ m to $6.5$ m. Enter the amplitude.`, 2.5, "(6.5 − 1.5)/2.", null),
  num(S`A Ferris wheel takes $50$ s per turn. How many turns in $10$ min?`, 12, "600 ÷ 50."),
  num(S`A heart beats $72$ times per minute. Enter the period in seconds (two decimals).`, 0.83, "60/72.", null, 0.011),
  mc("Which graph feature tells you the average level?", "the axis", ["the period", "the amplitude", "the domain"], "Axis = (max + min)/2."),
  num(S`The axis is $y=3$ and the amplitude is $4$. Enter the maximum.`, 7, "3 + 4."),
  num(S`The axis is $y=3$ and the amplitude is $4$. Enter the minimum.`, -1, "3 − 4."),
  tf("A bouncing ball that loses height each bounce is periodic.", false, "The cycles shrink."),
  num(S`$f$ has period $360$ and $f(30)=0.5$. Enter $f(750)$.`, 0.5, "750 − 720 = 30."),
];

export const M = [
  num("For the triangle wave shown, enter the period.", 8, "Peaks at 4 and 12.", tri),
  num("For the triangle wave shown, enter the value at x = 22.", 2, "22 − 16 = 6; on the way down from 6 at x = 4 to −2 at x = 8: 6 − 2(2) = 2.", tri),
  num(S`High tide at 4:00 a.m. and next low at 10:15 a.m. Enter the period in hours.`, 12.5, "Half-period 6.25 h."),
  num(S`A wheel: radius $16$ m, hub $18$ m. Enter the maximum height.`, 34, "18 + 16."),
  num(S`A wheel: radius $16$ m, hub $18$ m. Enter the minimum height.`, 2, "18 − 16."),
  num(S`$f$ has period $9$ and $f(4)=11$. Enter $f(-14)$.`, 11, "−14 + 18 = 4."),
  num(S`A pattern has period $0.4$ s. How many cycles in $1$ min?`, 150, "60/0.4."),
  num(S`A function has max $-2$ and min $-10$. Enter the axis value $k$ ($y=k$).`, -6, "(−2 − 10)/2."),
  num(S`A function has max $-2$ and min $-10$. Enter the amplitude.`, 4, "(−2 + 10)/2."),
  mc("A wheel speeds up. What happens to the period of the height graph?", "it decreases", ["it increases", "it stays the same", "it becomes zero"], "Less time per turn."),
  ms("Select every periodic situation.", ["tides at a harbour", "a person's height over a lifetime", "phases of the moon", "the temperature of a cooling pie", "a car's turn signal blinking"], [0, 2, 4], "Repeating cycles."),
  tf(S`If $f(x+6)=f(x)$ for all $x$, then $6$ is a period of $f$.`, true, "Definition."),
  n2(S`A pendulum swings $9$ cm either side of rest. Its amplitude is …`, 9, "Distance from axis to peak."),
  num(S`A lighthouse light flashes every $6$ s starting at $t=0$. How many flashes in the first $2$ minutes, counting $t=0$ and $t=120$?`, 21, "120/6 = 20 intervals, 21 flashes."),
  mc("The wave shown has max 5 and min −1. Its axis is …", "y = 2", ["y = 3", "y = 5", "y = 0"], "(5 − 1)/2 = 2.", tgraph((x) => 2 + 3 * sd(x), { xmin: 0, xmax: 720, ymin: -2, ymax: 6 }, { x: 90, y: 1 })),
  num("For the wave shown (max 5, min −1), enter the period in degrees.", 360, "One cycle per 360°.", tgraph((x) => 2 + 3 * sd(x), { xmin: 0, xmax: 720, ymin: -2, ymax: 6 }, { x: 90, y: 1 })),
  fill(S`The axis of a periodic function is $y=\frac{\max+\square}{2}$. The missing word is ____.`, ["min", "minimum"], "Average of max and min."),
  num(S`A tide's high is $5.8$ m and its amplitude is $2.1$ m. Enter the low tide depth.`, 1.6, "5.8 − 2(2.1).", null, 0.001),
  num(S`A wheel turns at $4$ rev/min. Enter its period in seconds.`, 15, "60/4."),
  num(S`$f$ has period $12$. If $f(5)=0$, how many values of $x$ in $0\le x\le60$ are guaranteed to have $f(x)=0$?`, 5, "5, 17, 29, 41, 53."),
];
