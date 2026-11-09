// 6.1 Periodic Functions — 20 hard questions
import { mc, ms, num, tf, sDoc, sd, cd, repeat, P, n2, tgraph } from "./sk.mjs";
const S = String.raw;
const pump = sDoc([], { base: false, segs: [repeat([[0, 40], [2, 100], [3, 100], [6, 40]], 6, 4)], view: { xmin: 0, xmax: 24, ymin: 0, ymax: 110 }, step: { x: 2, y: 10 }, xlabel: "t (s)", ylabel: "p" });
const wheel = (r, hub, T) => (t) => hub - r * cd((360 * t) / T);

export const TOPIC = "6.1 Periodic Functions";
export const Q = [
  n2("The pump pressure shown rises from 40 to 100 in 2 s, holds for 1 s, and falls back in 3 s. Find the pressure at t = 47 s.", 100 - 20 * 2, "47 = 7·6 + 5; falling 20 per second from t = 3: 100 − 20(2) = 60.", pump),
  num("For the pump graph shown, enter the number of complete cycles in 1 minute.", 10, "60/6.", pump),
  n2(S`High tide $6.3$ m at 5:20 a.m.; next low $0.9$ m at 11:35 a.m. Enter the time of the next high tide in hours after midnight.`, 5 + 20 / 60 + 12.5, "Period 12.5 h: 17.83 h (5:50 p.m.)."),
  num(S`For that tide, enter the axis value.`, 3.6, "(6.3 + 0.9)/2.", null, 0.001),
  n2(S`A wheel: radius $13$ m, hub $15$ m, $52$ s per turn, boarding at the bottom. Find the height at $t=13$ s.`, 15, "Quarter turn: level with the hub.", tgraph(wheel(13, 15, 52), { xmin: 0, xmax: 104, ymin: 0, ymax: 30 }, { x: 13, y: 5 }, { xlabel: "t (s)", ylabel: "h (m)" })),
  n2(S`Same wheel: height at $t=130$ s.`, wheel(13, 15, 52)(130), "130 = 2(52) + 26: the top, 28 m."),
  n2(S`Same wheel: height at $t=19.5$ s (two decimals).`, wheel(13, 15, 52)(19.5), "135° past the bottom: 15 + 13 cos 45°."),
  num(S`$f$ has period $7$; $f(2)=5$ and $f(6)=-1$. Enter $f(-12)+f(41)$.`, 4, "f(−12) = f(2) = 5, f(41) = f(6) = −1."),
  mc("The graph shown is …", "periodic with period 4 and amplitude 3", ["periodic with period 2 and amplitude 6", "not periodic", "periodic with period 8 and amplitude 3"], "Peaks every 4, from −1 to 5.", tgraph((x) => 2 + 3 * sd(90 * x), { xmin: 0, xmax: 12, ymin: -2, ymax: 6 }, { x: 1, y: 1 })),
  num(S`A function has amplitude $5$ and minimum $-3$. Enter its maximum.`, 7, "−3 + 2(5)."),
  num(S`A function has axis $y=-4$ and maximum $1.5$. Enter its minimum.`, -9.5, "Amplitude 5.5.", null, 0.001),
  ms(S`Select every TRUE statement.`, ["amplitude is always positive", "the axis lies halfway between max and min", "a periodic graph must be smooth", "f(x + 2p) = f(x) if p is a period"], [0, 1, 3], "Square waves are periodic but not smooth."),
  tf(S`If a function has period $6$, then it also repeats every $18$ units.`, true, "Any whole multiple."),
  num(S`Two gears: one completes a cycle every $8$ s, the other every $12$ s. Both start together. After how many seconds are they first together again?`, 24, "LCM of 8 and 12."),
  n2(S`A pendulum swings out $14$ cm and back with period $2.4$ s, starting at the far right. How far right of centre is it at $t=6$ s?`, -14, "6 = 2.5 periods: far left, −14 cm."),
  num(S`A Ferris wheel's highest point is $65$ m and its diameter $61$ m. Enter the hub height (two decimals).`, 34.5, "65 − 30.5.", null, 0.011),
  mc("A heart monitor shows a spike every 0.75 s. What is the heart rate in beats per minute?", "80", ["75", "45", "133"], "60/0.75."),
  n2(S`A tidal river's depth has period $12.4$ h. It is $3.2$ m at noon. Find the next time (in hours after noon) it must again be $3.2$ m and rising in the same way.`, 12.4, "One period later."),
  num("For the square wave shown, enter f(99.5).", 5, "Period 3; 99.5 − 33(3) = 0.5, which is on the top part of the cycle: 5.", sDoc([], { base: false, segs: [repeat([[0, 5], [1, 5], [1, 1], [3, 1]], 3, 5)], view: { xmin: 0, xmax: 15, ymin: 0, ymax: 6 }, step: { x: 1, y: 1 } })),
  num(S`A wheel turns once every $40$ s. Through how many degrees does it turn in $1$ s?`, 9, "360/40."),
];
