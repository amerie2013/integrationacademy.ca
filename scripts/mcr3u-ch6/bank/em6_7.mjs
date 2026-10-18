// 6.7 Solving Problems with Sinusoidal Models — 20 easy + 20 medium questions
import { mc, ms, num, tf } from "./kit.mjs";
import { waveD, sin, cos, rd } from "./fig.mjs";

const S = String.raw;
const k3 = 360 / 12.4, tide = (t) => 2.8 * cos(k3 * (t - 2)) + 4;
const day = (t) => 3.5 * cos((360 / 365) * (t - 172)) + 12;

export const E = [
  num(S`What is the maximum of \(y=4\sin(15t)+10\)?`, 14, "10 + 4."),
  num(S`What is the period of \(y=4\sin(15t)+10\)?`, 24, "360 ÷ 15."),
  num(S`Evaluate \(y=4\sin(15t)+10\) at \(t=6\).`, 14, "4 sin 90° + 10."),
  num(S`Evaluate \(h=-8\cos(9t)+10\) at \(t=0\).`, 2, "−8 + 10."),
  num("A model has a period of 45 s. What is k?", 8, "360 ÷ 45."),
  num("A model has a period of 365 days. What is k (4 decimals)?", rd(360 / 365, 4), "360 ÷ 365.", null, 0.0001),
  mc("Riders board a Ferris wheel at the bottom. Which form of model fits?", S`\(h=-r\cos(kt)+c\)`, [S`\(h=r\cos(kt)+c\)`, S`\(h=r\sin(kt)+c\)`, S`\(h=r\cos(kt)\)`], "−cos starts at its minimum."),
  mc("A tide is at its highest at t = 0. Which function is easiest to use?", "cosine with a > 0", ["sine with a > 0", "cosine with a < 0", "a linear function"], "Cosine starts at a maximum."),
  num(S`Evaluate \(h=-10\cos(12t)+12\) at \(t=15\).`, 22, "−10 cos 180° + 12."),
  num(S`Evaluate \(h=-10\cos(12t)+12\) at \(t=7.5\).`, 12, "−10 cos 90° + 12."),
  num("A wheel's hub is 25 m high. What is c in its height model?", 25, "c is the hub height."),
  tf("Raising a whole Ferris wheel changes c in its model.", true, "The axis moves up."),
  tf("Making a Ferris wheel turn faster changes a in its model.", false, "Speed changes k; a is the radius."),
  num("A wheel has radius 16 m. What is |a| in its height model?", 16, "The radius."),
  num("A wheel takes 75 s per turn. How many turns does it make in 10 min?", 8, "600 ÷ 75."),
  num(S`What is the minimum depth for \(D=2\cos(30t)+5\)?`, 3, "5 − 2."),
  num(S`When is the first minimum of \(D=2\cos(30t)+5\) (t in hours)?`, 6, "30t = 180°."),
  mc("Which parameter changes when a wheel's radius changes?", "a", ["k", "d", "only c"], "Amplitude = radius."),
  num("Read the height at t = 18 s.", 14, "h = −6 cos(10t) + 8 at t = 18: −6 cos 180° + 8.", waveD((t) => -6 * cos(10 * t) + 8, { xmin: 0, xmax: 72, ymin: 0, ymax: 16 }, { x: 6, y: 2 }, { xlabel: "t (s)", ylabel: "h (m)", pts: [[18, 14, "t = 18"]] })),
  num("When is the first low tide (hours)?", 6, "D = 2.5 cos(30t) + 4: 30t = 180°.", waveD((t) => 2.5 * cos(30 * t) + 4, { xmin: 0, xmax: 24, ymin: 0, ymax: 8 }, { x: 2, y: 1 }, { xlabel: "t (h)", ylabel: "D (m)" })),
];

export const M = [
  num("A wheel has radius 15 m, hub 17 m and turns once every 60 s; riders board at the bottom. Find the height at t = 10 s (m).", 9.5, "−15 cos 60° + 17.", null, 0.001),
  num("For the same wheel (radius 15 m, hub 17 m, 60 s), find the height at t = 20 s (m).", 24.5, "−15 cos 120° + 17.", null, 0.001),
  num("High tide is 6.8 m at 2:00 and the next low tide is 1.2 m at 8:12. What is the amplitude (m)?", 2.8, "(6.8 − 1.2)/2.", null, 0.001),
  num("For that tide (high 6.8 m, low 1.2 m), what is c (m)?", 4, "(6.8 + 1.2)/2."),
  num("For that tide (high at 2:00, low at 8:12), what is k (2 decimals)?", rd(k3), "Half period 6.2 h, so period 12.4 h.", null, 0.01),
  num(S`For that tide, \(D=2.8\cos(${rd(k3)}(t-2))+4\). Find the depth at 5:06 (t = 5.1), 2 decimals.`, rd(tide(5.1)), "A quarter period after high tide: about the mean level.", null, 0.02),
  num(S`Daylight is modelled by \(L=3.5\cos\left(\frac{360}{365}(t-172)\right)+12\). How many hours on day 172?`, 15.5, "The maximum.", null, 0.001),
  num(S`Using the same model, how many hours of daylight on day 263 (2 decimals)?`, rd(day(263)), "91 days after the max: close to the axis.", null, 0.01),
  mc("A Ferris wheel is sped up to turn twice as fast. What happens to k?", "it doubles", ["it halves", "it stays the same", "it becomes negative"], "Period halves, so k = 360/period doubles."),
  mc("The boarding platform and hub are raised 1 m. What happens in the model?", "c increases by 1", ["a increases by 1", "k increases by 1", "d increases by 1"], "Vertical translation."),
  tf("If the period of a tide increases, k decreases.", true, "k = 360 ÷ period."),
  num(S`Evaluate \(h=5\cos(180t)+12\) at \(t=0.5\).`, 12, "5 cos 90° + 12."),
  num(S`Evaluate \(h=5\cos(180t)+12\) at \(t=1\).`, 7, "5 cos 180° + 12."),
  num(S`For \(T=10\cos(15(t-15))+18\) (t in hours), at what time is the temperature highest?`, 15, "The cosine is 1 when t = 15."),
  num(S`For \(T=10\cos(15(t-15))+18\), what is the lowest temperature?`, 8, "18 − 10."),
  num(S`For \(T=10\cos(15(t-15))+18\), at what time (0 ≤ t < 24) is the temperature lowest?`, 3, "Half a period (12 h) before 15."),
  ms(S`Which are true for \(D=3\cos(30(t-2))+7\)? Select all.`, ["high water at t = 2", "low water at t = 8", "period 12 h", "maximum depth 7", "high water again at t = 14"], [0, 1, 2, 4], "The maximum is 10; 7 is the mean level."),
  num(S`For how long per turn is \(h=-10\cos(6t)+12\) above 12 m (s)?`, 30, "Half of the 60 s period."),
  num("Find the height at t = 16 s.", 15.5, "h = −9 cos(7.5t) + 11 at t = 16: −9 cos 120° + 11.", waveD((t) => -9 * cos(7.5 * t) + 11, { xmin: 0, xmax: 96, ymin: 0, ymax: 22 }, { x: 8, y: 2 }, { xlabel: "t (s)", ylabel: "h (m)", pts: [[16, 15.5, "t = 16"]] }), 0.001),
  num("Read the maximum daylight (hours).", 15, "Axis 12, amplitude 3.", waveD((t) => 3 * cos((360 / 365) * (t - 172)) + 12, { xmin: 0, xmax: 365, ymin: 6, ymax: 18 }, { x: 30, y: 2 }, { xlabel: "day", ylabel: "hours" })),
];
