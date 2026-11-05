import { FIG } from "../../mhf4u-bank-figures/figs.mjs";
// 5.5 Trigonometric Models and Rates of Change — 20 easy + 20 medium questions
import { mc, num, tf, fill, ms } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
import { TG } from "../trigfig.mjs";
const S = String.raw;
const P = Math.PI;
const wheel = (t) => -10 * Math.cos((P / 20) * t) + 12;

export const E = [
  num(S`A Ferris wheel has radius $12$ m and its centre is $14$ m above the ground. What is the greatest height of a rider?`, 26, "Top = centre + radius = 14 + 12.", FIG.w1214),
  num(S`A Ferris wheel has radius $12$ m and its centre is $14$ m above the ground. What is the least height of a rider?`, 2, "Bottom = centre − radius = 14 − 12.", FIG.w1214),
  num(S`A wheel turns once every $40$ s. What is $k$ in $h=a\cos(kt)+c$? Give three decimals.`, (2 * P) / 40, "k = 2π/period = 2π/40 = π/20 ≈ 0.157.", null, 0.002),
  num(S`For $h(t)=5\sin\left(\frac\pi6t\right)+8$, what is the period?`, 12, "2π/(π/6) = 12."),
  num(S`For $h(t)=5\sin\left(\frac\pi6t\right)+8$, what is the maximum value?`, 13, "c + |a| = 8 + 5."),
  num(S`For $h(t)=5\sin\left(\frac\pi6t\right)+8$, find $h(3)$.`, 13, "π/6 · 3 = π/2, sin(π/2) = 1, so h = 13."),
  mc("A tide is high at 2:00 and the next low tide is at 8:15. What is the period?", "12.5 h", ["6.25 h", "6 h", "24 h"], "High to low is half a cycle: 6.25 h, so the period is 12.5 h."),
  mc("A rider boards a Ferris wheel at the bottom at t = 0. Which form fits best?", S`$h=-a\cos(kt)+c$`, [S`$h=a\cos(kt)+c$`, S`$h=a\sin(kt)+c$`, S`$h=-a\sin(kt)+c$`], "−cos starts at its minimum."),
  mc("A mass is released from its highest point at t = 0. Which form fits best?", S`$y=a\cos(kt)+c$`, [S`$y=-a\cos(kt)+c$`, S`$y=a\sin(kt)+c$`, S`$y=-a\sin(kt)+c$`], "cos starts at its maximum."),
  mc("The water depth varies from 3 m to 11 m. What is the axis value c?", "7 m", ["4 m", "8 m", "14 m"], "c = (11 + 3)/2 = 7."),
  mc("The water depth varies from 3 m to 11 m. What is the amplitude?", "4 m", ["8 m", "7 m", "3 m"], "(11 − 3)/2 = 4."),
  tf("The average rate of change of a sinusoid over one full period is 0.", true, "It ends at the same value it started, so the change is 0."),
  tf("A sinusoid changes fastest at its maximum.", false, "At a maximum the graph is flat for an instant: the rate is 0."),
  fill(S`The average rate of change from $t_1$ to $t_2$ is the slope of the ____ line through the two points.`, ["secant"], "Rise over run between the two points."),
  fill(S`The instantaneous rate of change is the slope of the ____ line at a point.`, ["tangent"], "The limit of secant slopes as the interval shrinks."),
  num(S`For $y=4\sin t$, find the average rate of change from $t=0$ to $t=\frac\pi2$ (two decimals).`, 8 / P, "(4 − 0)/(π/2) = 8/π ≈ 2.55.", null, 0.01),
  num(S`For $y=\cos t$, find the average rate of change from $t=0$ to $t=\pi$ (two decimals).`, -2 / P, "(−1 − 1)/π ≈ −0.64.", null, 0.01),
  mc("Daylight in a city varies over 365 days. What is k?", S`$\frac{2\pi}{365}$`, [S`$\frac{365}{2\pi}$`, S`$365$`, S`$\frac\pi{365}$`], "k = 2π/period."),
  mc("The graph shows the height of a rider. What is the period?", "40 s", ["20 s", "22 s", "10 s"], "The rider is back at the bottom at t = 40.", planeDoc(TG([[wheel, "violet"]], { xmin: -2, xmax: 85, ymin: 0, ymax: 25 }, [], { step: { x: 10, y: 5 }, xlabel: "t (s)" }))),
  mc("The graph shows the height of a rider. What is the rider's maximum height?", "22 m", ["12 m", "10 m", "20 m"], "Centre 12 + radius 10.", planeDoc(TG([[wheel, "violet"]], { xmin: -2, xmax: 85, ymin: 0, ymax: 25 }, [{ x: 20, y: 22, label: "(20, 22)" }], { step: { x: 10, y: 5 }, xlabel: "t (s)" }))),
];

export const M = [
  mc("A wheel has radius 8 m, centre 9 m high, period 30 s; a rider boards at the bottom at t = 0. Which model fits?", S`$h=-8\cos\left(\frac\pi{15}t\right)+9$`, [S`$h=8\cos\left(\frac\pi{15}t\right)+9$`, S`$h=-8\cos(30t)+9$`, S`$h=-9\cos\left(\frac\pi{15}t\right)+8$`], "a = −8 (start at bottom), k = 2π/30 = π/15, c = 9.", FIG.w89),
  num(S`For $h=-8\cos\left(\frac\pi{15}t\right)+9$, find $h(5)$.`, 5, "cos(π/3) = 1/2, so h = −4 + 9 = 5."),
  num(S`For $h=-8\cos\left(\frac\pi{15}t\right)+9$, find the first time $t>0$ when $h=13$.`, 10, "cos(πt/15) = −1/2, so πt/15 = 2π/3 and t = 10."),
  mc("High tide 10 m at t = 0, low tide 2 m at t = 6 h. Which model fits?", S`$d=4\cos\left(\frac\pi6t\right)+6$`, [S`$d=4\cos\left(\frac\pi{12}t\right)+6$`, S`$d=8\cos\left(\frac\pi6t\right)+2$`, S`$d=4\sin\left(\frac\pi6t\right)+6$`], "a = 4, c = 6, period 12 h so k = π/6, cos starts at high tide.", FIG.tide102),
  num(S`For $d=4\cos\left(\frac\pi6t\right)+6$, find the average rate of change from $t=0$ to $t=3$ (m/h, two decimals).`, -4 / 3, "d(0) = 10, d(3) = 6: (6 − 10)/3 ≈ −1.33.", null, 0.01),
  num(S`For $d=4\cos\left(\frac\pi6t\right)+6$, estimate the instantaneous rate at $t=3$ (two decimals).`, -4 * (P / 6), "At the axis crossing the rate is −a·k = −4(π/6) ≈ −2.09 m/h.", null, 0.02),
  ms(S`For $d=4\cos\left(\frac\pi6t\right)+6$, select every time in $[0,12]$ where the rate of change is $0$.`, ["0", "3", "6", "9", "12"], [0, 2, 4], "The rate is 0 at highs (t = 0, 12) and the low (t = 6)."),
  ms(S`For $d=4\cos\left(\frac\pi6t\right)+6$, select every time in $[0,12]$ where the depth changes fastest.`, ["0", "3", "6", "9", "12"], [1, 3], "Fastest where the curve crosses its axis d = 6: t = 3 and 9."),
  mc("Temperature peaks at 30°C on day 200 and is lowest, −10°C, half a year later. Which model fits (t in days)?", S`$T=20\cos\left(\frac{2\pi}{365}(t-200)\right)+10$`, [S`$T=20\cos\left(\frac{2\pi}{365}t\right)+10$`, S`$T=40\cos\left(\frac{2\pi}{365}(t-200)\right)+10$`, S`$T=20\sin\left(\frac{2\pi}{365}(t-200)\right)+10$`], "a = 20, c = 10, period 365, cosine peaks at t = 200."),
  num(S`A spring oscillates as $y=3\cos(2\pi t)+10$ cm. How many full oscillations happen in $5$ s?`, 5, "Period 2π/(2π) = 1 s, so 5 oscillations."),
  num(S`For $y=3\cos(2\pi t)+10$, find $y(0.25)$.`, 10, "cos(π/2) = 0."),
  mc(S`For $h=-10\cos\left(\frac\pi{20}t\right)+12$, over which time interval in one turn is the rider above $17$ m?`, S`$\frac{40}3<t<\frac{80}3$`, [S`$10<t<30$`, S`$0<t<\frac{40}3$`, S`$\frac{20}3<t<\frac{100}3$`], "cos(πt/20) < −1/2 for 2π/3 < πt/20 < 4π/3."),
  num(S`For $h=-10\cos\left(\frac\pi{20}t\right)+12$, how many seconds per turn is the rider above $17$ m (two decimals)?`, 40 / 3, "80/3 − 40/3 = 40/3 ≈ 13.33 s.", null, 0.01),
  tf(S`For $h=-10\cos\left(\frac\pi{20}t\right)+12$, the rider rises fastest at $t=10$.`, true, "At t = 10 the rider is level with the centre (axis), going up."),
  tf("Doubling the radius of a Ferris wheel (same period) doubles the greatest rate of change of height.", true, "The greatest rate is a·k; doubling a doubles it."),
  mc("A pendulum's angle swings between −15° and 15° with period 2 s, starting at 15°. Which model fits?", S`$\theta=15\cos(\pi t)$`, [S`$\theta=15\cos(2t)$`, S`$\theta=30\cos(\pi t)$`, S`$\theta=15\sin(\pi t)$`], "k = 2π/2 = π; cosine starts at the maximum."),
  num(S`Daylight is $D=3\sin\left(\frac{2\pi}{365}(t-80)\right)+12$. Find the day of the year with the least daylight (nearest day).`, 354, "Min when the inside is 3π/2: t − 80 = 3/4 · 365 = 273.75, t ≈ 354.", null, 1),
  mc("The graph shows the depth of water. Estimate the average rate of change from t = 0 to t = 3.", "−2 m/h", ["2 m/h", "−6 m/h", "0 m/h"], "From 12 m down to 6 m in 3 h: −6/3 = −2.", planeDoc(TG([[(t) => 6 * Math.cos((P / 6) * t) + 6, "violet"]], { xmin: -0.5, xmax: 13, ymin: -1, ymax: 13 }, [{ x: 0, y: 12 }, { x: 3, y: 6 }], { step: { x: 1, y: 2 }, xlabel: "t (h)", segs: [{ pts: [[0, 12], [3, 6]], color: "red" }] }))),
  mc("The graph shows the depth of water. At which time in [0, 12] is the depth changing fastest while rising?", "t = 9", ["t = 6", "t = 3", "t = 12"], "Rising through the axis d = 6 happens at t = 9.", planeDoc(TG([[(t) => 6 * Math.cos((P / 6) * t) + 6, "violet"]], { xmin: -0.5, xmax: 13, ymin: -1, ymax: 13 }, [], { step: { x: 1, y: 2 }, xlabel: "t (h)" }))),
  fill(S`For $y=a\sin(kt)+c$, the greatest instantaneous rate of change is $|a|$ times ____.`, ["|k|", "k"], "Steepest at the axis, with slope a·k."),
];
