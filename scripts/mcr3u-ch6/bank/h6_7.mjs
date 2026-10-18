// 6.7 Solving Problems with Sinusoidal Models — 20 hard questions
import { mc, num, tf } from "./kit.mjs";
import { waveD, sin, cos, acos, rd } from "./fig.mjs";

const S = String.raw;
const days14 = (120 * 365) / 360;
const L = (t) => 4 * sin((360 / 365) * (t - 80)) + 12;
const below4 = (360 - 2 * acos(-0.4)) / 30;
const L18 = (t) => 3.2 * sin((360 / 365) * (t - 80)) + 12.1;

export const TOPIC = "6.7 Solving Problems with Sinusoidal Models";
export const Q = [
  num(S`A wheel: radius 14 m, hub 16 m, 72 s per turn, boarding at the bottom: \(h=-14\cos(5t)+16\). For how long per turn is a rider above 23 m (s)?`, 24, "cos(5t) ≤ −0.5: 5t from 120° to 240°."),
  num(S`For the same wheel (\(h=-14\cos(5t)+16\)), for how long per turn is a rider below 9 m (s)?`, 24, "cos(5t) > 0.5: a 120° range around 0°."),
  num(S`For the tide \(D=3\cos(30(t-4))+5\), for how many hours per cycle is the depth at least 6.5 m?`, 4, "cos ≥ 0.5: a 120° range; 120 ÷ 30."),
  num(S`For the tide \(D=3\cos(30(t-4))+5\), at what time after t = 4 does the depth first fall to 3.5 m?`, 8, "cos = −0.5: 30(t − 4) = 120°."),
  num(S`Daylight \(L=3\cos\left(\frac{360}{365}(t-172)\right)+12.5\). For how many days a year are there at least 14 h of daylight (2 decimals)?`, rd(days14), "cos ≥ 0.5: a 120° range; 120 × 365/360.", null, 0.01),
  num(S`A spring: \(h=-4\cos(240t)+10\) (cm, s). When is it first 12 cm high (2 decimals)?`, 0.5, "cos(240t) = −0.5: 240t = 120°.", null, 0.001),
  num(S`A pendulum's displacement is \(x=12\sin(200t)\) (cm, s). When is it first 6 cm from centre (2 decimals)?`, 0.15, "sin(200t) = 0.5: 200t = 30°.", null, 0.001),
  num("A wheel takes 3 min per turn, with max height 40 m and min 2 m, boarding at the bottom (t in seconds). How high is a rider at t = 45 s (m)?", 21, "h = −19 cos(2t) + 21: 2t = 90°."),
  num("For that wheel (h = −19 cos(2t) + 21), how high is a rider at t = 150 s (m)?", 11.5, "−19 cos 300° + 21.", null, 0.001),
  tf("A model with t in days and a period of 365 days has k ≈ 0.986.", true, "360 ÷ 365."),
  mc("Which change makes the graph of a model taller without changing its period?", "increasing |a|", ["increasing k", "increasing d", "decreasing k"], "a controls amplitude."),
  num(S`For \(T=12\cos\left(\frac{360}{365}(t-200)\right)+8\), which day (0 ≤ t ≤ 365) is coldest (1 decimal)?`, 17.5, "Half a year (182.5 days) before day 200.", null, 0.05),
  num(S`For \(T=12\cos\left(\frac{360}{365}(t-200)\right)+8\), what is the coldest temperature (°C)?`, -4, "8 − 12."),
  num(S`For \(L=4\sin\left(\frac{360}{365}(t-80)\right)+12\), how many more hours of daylight does day 100 have than day 80 (2 decimals)?`, rd(L(100) - L(80)), "L(80) = 12; L(100) = 4 sin(19.73°) + 12.", null, 0.01),
  num(S`A boat needs 4 m of water. With \(D=2.5\cos(30t)+5\), for how many hours per cycle is it too shallow (2 decimals)?`, rd(below4), "cos(30t) < −0.4.", null, 0.01),
  num("For how long per turn is the rider above the dashed level (2 decimals)?", rd(120 / 9), "h = −10 cos(9t) + 12 ≥ 17: 9t from 120° to 240°.", waveD((t) => -10 * cos(9 * t) + 12, { xmin: 0, xmax: 80, ymin: 0, ymax: 24 }, { x: 5, y: 2 }, { xlabel: "t (s)", ylabel: "h (m)", lines: [{ m: 0, b: 17, color: "amber", dash: true }] }), 0.01),
  num("The tide is D = 3 cos(30(t − 2)) + 6. When does it first fall to 4.5 m after t = 2 (h)?", 6, "cos = −0.5: 30(t − 2) = 120°.", waveD((t) => 3 * cos(30 * (t - 2)) + 6, { xmin: 0, xmax: 24, ymin: 0, ymax: 10 }, { x: 2, y: 1 }, { xlabel: "t (h)", ylabel: "D (m)", lines: [{ m: 0, b: 4.5, color: "amber", dash: true }] })),
  num("The model is L = 3.2 sin((360/365)(t − 80)) + 12.1. Predict the daylight on day 172 (2 decimals).", rd(L18(172)), "Close to the maximum.", waveD(L18, { xmin: 0, xmax: 365, ymin: 6, ymax: 18 }, { x: 30, y: 2 }, { xlabel: "day", ylabel: "hours", pts: [[172, L18(172), "day 172"]] }), 0.01),
  num("The spring's height is h = −5 cos(180t) + 15. When is it first 17.5 cm high (2 decimals)?", rd(120 / 180), "cos(180t) = −0.5: 180t = 120°.", waveD((t) => -5 * cos(180 * t) + 15, { xmin: 0, xmax: 4, ymin: 0, ymax: 22 }, { x: 0.5, y: 2 }, { xlabel: "t (s)", ylabel: "h (cm)", lines: [{ m: 0, b: 17.5, color: "amber", dash: true }] }), 0.01),
  num("A Ferris wheel takes 90 s per turn. If its speed doubles, what is the new period (s)?", 45, "Twice as fast: half the time."),
];
