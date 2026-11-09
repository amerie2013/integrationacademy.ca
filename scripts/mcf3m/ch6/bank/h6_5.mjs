// 6.5 Sinusoidal Models — 20 hard questions
import { mc, ms, num, tf, sd, cd, P, n2, tgraph } from "./sk.mjs";
const S = String.raw;
const wheel = (r, hub, T) => (t) => hub - r * cd((360 * t) / T);
const tide = (t) => 3.5 * sd(30 * (t - 2)) + 6;

export const TOPIC = "6.5 Sinusoidal Models";
export const Q = [
  num(S`Wheel: radius $16$ m, hub $18$ m, $96$ s per turn, boarding at the bottom. For how many seconds per turn is a rider above $26$ m?`, 32, "26 is 8 above the hub (half the radius): 120° of the turn.", tgraph(wheel(16, 18, 96), { xmin: 0, xmax: 96, ymin: 0, ymax: 36 }, { x: 12, y: 4 }, { xlabel: "t (s)", ylabel: "h (m)", lines: [{ m: 0, b: 26, color: "green", dash: true }] })),
  n2(S`Same wheel: enter the height at $t=20$ s (two decimals).`, wheel(16, 18, 96)(20), "75° past the bottom."),
  num(S`$d(t)=3.5\sin(30(t-2))+6$. Enter the time of the first high tide after $t=0$ (h).`, 5, "30(t − 2) = 90."),
  num(S`For that tide, enter the time of the first low tide after $t=0$ (h).`, 11, "30(t − 2) = 270."),
  num(S`For that tide, a boat needs $d\ge7.75$ m. Enter the length of the first safe window (h).`, 4, "sin ≥ 0.5: t from 3 to 7.", tgraph(tide, { xmin: 0, xmax: 24, ymin: 0, ymax: 11 }, { x: 2, y: 1 }, { xlabel: "t (h)", ylabel: "d (m)", lines: [{ m: 0, b: 7.75, color: "green", dash: true }] })),
  n2(S`Wheels A (radius $9$, hub $11$, $45$ s) and B (radius $12$, hub $14$, $60$ s) both board at the bottom at $t=0$. Enter B's height minus A's at $t=15$ s.`, wheel(12, 14, 60)(15) - wheel(9, 11, 45)(15), "A: 120° → 15.5; B: 90° → 14."),
  mc("The graph shows a model. Which statement fits?", "period 8 s, amplitude 5, axis 12", ["period 4 s, amplitude 10, axis 12", "period 8 s, amplitude 17, axis 7", "period 16 s, amplitude 5, axis 12"], "Peaks at 2 and 10.", tgraph((t) => 5 * sd(45 * t) + 12, { xmin: 0, xmax: 16, ymin: 0, ymax: 18 }, { x: 2, y: 2 })),
  num("For the model shown (y = 5 sin(45t) + 12), enter the first t > 0 when y = 9.5.", Math.round((210 / 45) * 100) / 100, "sin(45t) = −0.5 → 45t = 210.", tgraph((t) => 5 * sd(45 * t) + 12, { xmin: 0, xmax: 16, ymin: 0, ymax: 18 }, { x: 2, y: 2 }, { lines: [{ m: 0, b: 9.5, color: "green", dash: true }] }), 0.011),
  n2(S`A pendulum: $x(t)=22\sin(150t)$ cm. Enter the period (s).`, 2.4, "360/150."),
  n2(S`For that pendulum, enter $x(1)$ (cm).`, 22 * sd(150), "22 sin 150°."),
  ms("A wheel with radius 10 m, hub 12 m, 50 s per turn is changed to radius 10 m, hub 15 m, 40 s per turn. Select every TRUE statement.", ["the max goes from 22 to 25 m", "the amplitude is unchanged", "the period decreases by 10 s", "the min stays 2 m"], [0, 1, 2], "Min becomes 5 m."),
  tf(S`If a tide model is $d(t)=a\sin(kt)+c$ and the moon causes high tides every $12.4$ h, then $k=\frac{360}{12.4}$.`, true, "Period 360/k."),
  n2(S`Enter $k$ for a tide with period $12.4$ h (two decimals).`, 360 / 12.4, "360/12.4."),
  num(S`A wheel turns at $1.5$ rev/min. Through how many degrees does it turn in $10$ s?`, 90, "Period 40 s: a quarter turn."),
  n2(S`A seat starts at hub level going up on a wheel of radius $14$ m, hub $16$ m, $56$ s per turn. Enter its height at $t=7$ s (two decimals).`, 16 + 14 * sd(45), "45° above hub level."),
  mc(S`$T(m)=a\sin(30(m-4))+c$ with July high $24$ °C and January low $-6$ °C. Which values?`, S`$a=15,\ c=9$`, [S`$a=30,\ c=9$`, S`$a=15,\ c=-6$`, S`$a=9,\ c=15$`], "Half the range; average."),
  num(S`For that temperature model, enter $T(5)$ (°C, two decimals).`, Math.round((15 * sd(30) + 9) * 100) / 100, "15 sin 30° + 9.", null, 0.011),
  n2(S`Daylight: $D(n)=4\sin\left(\tfrac{360}{365}(n-80)\right)+12.2$ h. Enter the longest day length.`, 16.2, "12.2 + 4."),
  num("The graph shows a rider who did NOT board at the bottom. At what time is the rider first at the top?", 5, "Peak at t = 5.", tgraph((t) => 9 - 7 * cd(18 * (t + 5)), { xmin: 0, xmax: 40, ymin: 0, ymax: 18 }, { x: 5, y: 2 }, { xlabel: "t (s)", ylabel: "h (m)", points: [P(5, 16)] })),
  num(S`A wheel of radius $8$ m and hub $10$ m turns every $48$ s. For how many seconds per turn is the rider below $6$ m?`, 16, "6 is 4 below the hub: within 60° of the bottom."),
];
