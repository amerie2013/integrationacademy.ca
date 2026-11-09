// 6.5 Sinusoidal Models — 20 easy + 20 medium
import { mc, ms, num, tf, fill, sd, cd, P, n2, tgraph } from "./sk.mjs";
const S = String.raw;
const wheel = (r, hub, T) => (t) => hub - r * cd((360 * t) / T);

export const E = [
  num(S`A wheel has radius $17$ m and hub $19$ m. Enter the maximum height.`, 36, "19 + 17."),
  num(S`A wheel has radius $17$ m and hub $19$ m. Enter the minimum height.`, 2, "19 − 17."),
  num(S`A wheel turns once every $64$ s. How long from the bottom to the top (s)?`, 32, "Half a period."),
  num(S`A wheel turns once every $64$ s. How long from the bottom to hub level (s)?`, 16, "Quarter period."),
  mc("For a Ferris wheel, the amplitude of the height graph equals …", "the radius", ["the hub height", "the diameter", "the time per turn"], "Distance from the hub to a seat."),
  mc("For a Ferris wheel, the axis of the height graph is at …", "the hub height", ["the ground", "the top", "the radius"], "Average height."),
  num(S`$d(t)=4\sin(30t)+6$. Enter the maximum depth.`, 10, "6 + 4."),
  num(S`$d(t)=4\sin(30t)+6$. Enter the period in hours.`, 12, "360/30."),
  num(S`$d(t)=4\sin(30t)+6$. Enter $d(3)$.`, 10, "sin 90° = 1."),
  num(S`$d(t)=4\sin(30t)+6$. Enter $d(6)$.`, 6, "sin 180° = 0."),
  tf("A faster wheel has a longer period.", false, "Shorter."),
  tf("Raising a wheel's hub moves the whole height graph up.", true, "Axis moves up."),
  fill("The time for one complete cycle of a sinusoidal model is the ____.", ["period"], "Period."),
  mc("The graph shows a rider's height. What is the period?", "40 s", ["20 s", "80 s", "10 s"], "Bottom to bottom.", tgraph(wheel(8, 10, 40), { xmin: 0, xmax: 80, ymin: 0, ymax: 20 }, { x: 10, y: 2 }, { xlabel: "t (s)", ylabel: "h (m)" })),
  num("The graph shows a rider's height. Enter the radius of the wheel.", 8, "(18 − 2)/2.", tgraph(wheel(8, 10, 40), { xmin: 0, xmax: 80, ymin: 0, ymax: 20 }, { x: 10, y: 2 }, { xlabel: "t (s)", ylabel: "h (m)" })),
  num(S`A spring's height $h(t)=3\sin(180t)+20$ cm. Enter the lowest height.`, 17, "20 − 3."),
  num(S`A spring's height $h(t)=3\sin(180t)+20$ cm. Enter the period in seconds.`, 2, "360/180."),
  mc("Which situation is best modelled by a sinusoidal function?", "the height of a seat on a turning wheel", ["the balance of a loan", "a car's distance from home on a straight trip", "the number of people in a growing city"], "Smooth repeating motion."),
  num(S`Daylight varies from $9$ h to $15$ h. Enter the amplitude.`, 3, "(15 − 9)/2."),
  num(S`Daylight varies from $9$ h to $15$ h. Enter the axis value.`, 12, "(15 + 9)/2."),
];

export const M = [
  n2(S`Wheel: radius $10$ m, hub $12$ m, $60$ s per turn, boarding at the bottom. Enter the height at $t=10$ s.`, wheel(10, 12, 60)(10), "60° past the bottom: 12 − 10 cos 60°."),
  n2(S`Same wheel: enter the height at $t=45$ s.`, wheel(10, 12, 60)(45), "270°: level with the hub."),
  n2(S`Same wheel: enter the height at $t=100$ s.`, wheel(10, 12, 60)(100), "100 − 60 = 40 s: 240°."),
  num(S`$d(t)=2.5\sin(30t)+5$. Enter the first time (h) the depth is $7.5$ m.`, 3, "sin(30t) = 1."),
  num(S`$d(t)=2.5\sin(30t)+5$. Enter the first time (h) the depth is $2.5$ m.`, 9, "sin(30t) = −1."),
  num(S`$d(t)=2.5\sin(30t)+5$. Enter the first time after $t=0$ when $d=6.25$ m.`, 1, "sin(30t) = 0.5 → 30t = 30."),
  n2(S`$h(t)=15\sin(9t)+18$. Enter $h(30)$.`, 15 * sd(270) + 18, "sin 270° = −1."),
  num(S`$h(t)=15\sin(9t)+18$. Enter the period in seconds.`, 40, "360/9."),
  mc("A wheel is replaced by one with a bigger radius but the same hub. What changes?", "max goes up and min goes down", ["only the period", "only the max", "the axis"], "Amplitude increases."),
  ms("Select every change that shortens the period of a wheel's height graph.", ["turning faster", "a larger radius", "fewer seconds per turn", "a higher hub"], [0, 2], "Period = time per turn."),
  tf(S`For $d(t)=a\sin(kt)+c$, the period is $\frac{360}{k}$.`, true, "One cycle when kt grows by 360."),
  mc("The graph shows a tide. Which is correct?", "max 7 m, min 1 m, period 12 h", ["max 7 m, min 1 m, period 6 h", "max 8 m, min 0 m, period 12 h", "max 4 m, min 1 m, period 24 h"], "Read peaks and troughs.", tgraph((t) => 3 * sd(30 * t) + 4, { xmin: 0, xmax: 24, ymin: 0, ymax: 8 }, { x: 2, y: 1 }, { xlabel: "t (h)", ylabel: "d (m)" })),
  num("Using the tide graph, enter the depth at t = 20 h (two decimals).", Math.round((3 * sd(600) + 4) * 100) / 100, "3 sin 600° + 4 = 3 sin 240° + 4.", tgraph((t) => 3 * sd(30 * t) + 4, { xmin: 0, xmax: 24, ymin: 0, ymax: 8 }, { x: 2, y: 1 }, { xlabel: "t (h)", ylabel: "d (m)" }), 0.011),
  n2(S`A pedal: $h(t)=17\sin(300t)+30$ cm. Enter the period in seconds.`, 1.2, "360/300."),
  num(S`A wheel makes $5$ turns in $4$ minutes. Enter the period in seconds.`, 48, "240/5."),
  fill("A rider who boards at the bottom starts the graph at its ____ (one word).", ["minimum", "min", "lowest"], "Lowest point."),
  num(S`$T(m)=10\sin(30(m-4))+5$ °C. Enter the warmest month number.`, 7, "30(m − 4) = 90."),
  num(S`$T(m)=10\sin(30(m-4))+5$ °C. Enter the coldest temperature.`, -5, "5 − 10."),
  n2(S`Wheel: radius $6$ m, hub $7.5$ m, $36$ s per turn. Enter the height at $t=6$ s.`, wheel(6, 7.5, 36)(6), "60°: 7.5 − 6 cos 60°."),
  num(S`A tide has high water every $12.4$ h. How many high tides occur in $62$ h, starting with one at $t=0$?`, 6, "0, 12.4, …, 62 → 6."),
];
