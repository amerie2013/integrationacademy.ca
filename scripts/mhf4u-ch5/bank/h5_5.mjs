import { FIG } from "../../mhf4u-bank-figures/figs.mjs";
// 5.5 Trigonometric Models and Rates of Change — 20 hard questions
import { mc, num, tf, ms } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
import { TG } from "../trigfig.mjs";
const S = String.raw;
const P = Math.PI;
const tide = (t) => 3.6 * Math.cos(((2 * P) / 12.4) * (t - 4)) + 5.2;
const VT = { xmin: -0.5, xmax: 25, ymin: 0, ymax: 10 };
const OT = { step: { x: 2, y: 1 }, xlabel: "t (h)" };

export const TOPIC = "5.5 Trigonometric Models and Rates of Change";
export const Q = [
  mc("High tide 8.8 m at 4:00, next low tide 1.6 m at 10:12. Which model fits (t in hours after midnight)?", S`$d=3.6\cos\left(\frac{2\pi}{12.4}(t-4)\right)+5.2$`, [S`$d=3.6\cos\left(\frac{2\pi}{6.2}(t-4)\right)+5.2$`, S`$d=7.2\cos\left(\frac{2\pi}{12.4}(t-4)\right)+5.2$`, S`$d=3.6\sin\left(\frac{2\pi}{12.4}(t-4)\right)+5.2$`], "a = (8.8 − 1.6)/2, c = (8.8 + 1.6)/2; half period 6.2 h gives period 12.4 h; cosine peaks at t = 4.", FIG.tide88),
  num("High tide 8.8 m at 4:00, next low tide 1.6 m at 10:12. Using a sinusoidal model (t in hours after midnight), find the depth at noon (t = 12), to one decimal.", tide(12), "d(12) = 3.6 cos(2π·8/12.4) + 5.2 ≈ 3.0 m.", FIG.tide88, 0.06),
  num("High tide 8.8 m at 4:00, next low tide 1.6 m at 10:12. Using a sinusoidal model, find the time of the second high tide after midnight, in hours (one decimal).", 16.4, "High tides are one period apart: 4 + 12.4 = 16.4.", FIG.tide88, 0.05),
  mc("A ship needs at least 4 m of water. Using the graph of the tide, which is closest to the first interval after midnight when it is NOT safe?", "about 7.8 h to 12.6 h", ["about 4 h to 10.2 h", "about 0 h to 4 h", "about 10.2 h to 16.4 h"], "Solve 3.6cos(...) + 5.2 = 4: cos(...) = −1/3, giving t ≈ 7.8 and t ≈ 12.6.", planeDoc(TG([[tide, "violet"], [() => 4, "blue"]], VT, [], OT))),
  num(S`A wheel of radius $15$ m turns every $60$ s. What is the greatest vertical speed of a rider, in m/s (three decimals)?`, (15 * 2 * P) / 60, "Greatest rate = a·k = 15 · 2π/60 = π/2 ≈ 1.571.", null, 0.002),
  num(S`For $h=-15\cos\left(\frac\pi{30}t\right)+17$, find the average rate of change from $t=20$ to $t=40$.`, 0, "h(20) = −15cos(2π/3) + 17 = 24.5 and h(40) = −15cos(4π/3) + 17 = 24.5, so the change is 0."),
  num(S`For $h=-15\cos\left(\frac\pi{30}t\right)+17$, find the average rate of change from $t=10$ to $t=20$.`, 1.5, "h(10) = 9.5, h(20) = 24.5: 15/10 = 1.5 m/s."),
  mc(S`For a sinusoid $y=a\sin(k(t-d))+c$ with $a,k>0$, where is the instantaneous rate of change greatest?`, S`at $t=d$ (crossing the axis going up)`, [S`at the maximum`, S`at the minimum`, S`at $t=0$ always`], "The rising axis crossing of sine is at the start of its cycle."),
  ms("Select every true statement about h = −10cos(πt/20) + 12.", ["The rate is 0 at t = 20.", "The rate is greatest at t = 10.", "The average rate over [0, 40] is 0.", "The rate is negative on (0, 20)."], [0, 1, 2], "t = 20 is the top; t = 10 is the rising axis crossing; a full period returns to the start; on (0, 20) the rider rises."),
  num(S`A pendulum's angle is $\theta=12\cos\left(\frac{5\pi}4t\right)$ degrees. How long does one swing back and forth take (seconds, one decimal)?`, 1.6, "Period = 2π/(5π/4) = 8/5 = 1.6 s."),
  num(S`For $\theta=12\cos\left(\frac{5\pi}4t\right)$, find the first time $t>0$ with $\theta=-6$ (seconds, three decimals).`, (2 / 3) * (4 / 5), "cos(5πt/4) = −1/2: 5πt/4 = 2π/3, so t = 8/15 ≈ 0.533.", null, 0.002),
  mc("Daylight (hours) is D = 4 sin(2π(t − 80)/365) + 12. For how many days is daylight above 14 h?", "about 122 days", ["about 61 days", "about 183 days", "about 91 days"], "sin(...) > 1/2 for one-third of each cycle (π/6 to 5π/6): 365/3 ≈ 122."),
  tf("If two sinusoidal models have the same amplitude but one has twice the period, its greatest rate of change is half as large.", true, "Greatest rate = a·k, and doubling the period halves k."),
  tf("The instantaneous rate of change of y = sin t at t = π is 1.", false, "At t = π sine crosses its axis going down: the rate is −1."),
  num(S`Estimate the instantaneous rate of change of $y=10\sin\left(\frac\pi4t\right)$ at $t=2$ using a symmetric interval of width $0.002$.`, 0, "t = 2 is a maximum (π/4·2 = π/2), so the slope is 0."),
  mc("The graph shows a rider's height. What is the model?", S`$h=-9\cos\left(\frac\pi{25}t\right)+11$`, [S`$h=9\cos\left(\frac\pi{25}t\right)+11$`, S`$h=-11\cos\left(\frac\pi{25}t\right)+9$`, S`$h=-9\cos\left(\frac\pi{50}t\right)+11$`], "Min 2, max 20: a = 9, c = 11; period 50 s so k = π/25; starts at the bottom.", planeDoc(TG([[(t) => -9 * Math.cos((P / 25) * t) + 11, "violet"]], { xmin: -2, xmax: 105, ymin: 0, ymax: 22 }, [], { step: { x: 10, y: 2 }, xlabel: "t (s)" }))),
  mc("The graph shows the height of a rider. Which time has the greatest downward speed?", "t = 37.5 s", ["t = 25 s", "t = 12.5 s", "t = 50 s"], "Falling through the axis: three-quarters of the 50 s period.", planeDoc(TG([[(t) => -9 * Math.cos((P / 25) * t) + 11, "violet"]], { xmin: -2, xmax: 55, ymin: 0, ymax: 22 }, [], { step: { x: 5, y: 2 }, xlabel: "t (s)" }))),
  mc("The graph shows the tide and the line d = 7. During the first 12 h, roughly when is the depth above 7 m?", "from about 1.9 h to 6.1 h", ["from about 6.1 h to 13.7 h", "from 0 h to 4 h", "from about 4 h to 10.2 h"], "cos(2π(t − 4)/12.4) > 0.5 when |t − 4| < 12.4/6 ≈ 2.07.", planeDoc(TG([[tide, "violet"], [() => 7, "blue"]], VT, [], OT))),
  num(S`High tide 8.8 m at 4:00, next low tide 1.6 m at 10:12. Using a sinusoidal model, how many hours per cycle is the depth above $7$ m (two decimals)?`, 12.4 / 3, "One third of the 12.4 h period: 4.13 h.", FIG.tide88, 0.02),
  mc("A sinusoidal model is used to predict the tide 3 months ahead. What is the main weakness?", "small errors in the period add up over many cycles", ["the amplitude must be 0", "sinusoids cannot model tides", "the rate of change is always 0"], "A period error of minutes per cycle shifts the predicted times by hours after many cycles."),
];
