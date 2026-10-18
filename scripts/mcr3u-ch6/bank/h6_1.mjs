// 6.1 Periodic Functions and Their Properties — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { waveD, sin, cos } from "./fig.mjs";

const S = String.raw;
const saw = (p, h, n) => Array.from({ length: n }, (_, i) => ({ pts: [[p * i, 0], [p * (i + 1), h]], color: "violet" }));

export const TOPIC = "6.1 Periodic Functions and Their Properties";
export const Q = [
  num(S`A function has period 9 with \(f(2)=4\), \(f(5)=-1\) and \(f(8)=6\). Find \(f(-7)\).`, 4, "−7 + 9 = 2."),
  num(S`For the same function (period 9, \(f(2)=4\), \(f(5)=-1\), \(f(8)=6\)), find \(f(50)\).`, -1, "50 − 45 = 5."),
  num(S`For the same function (period 9, \(f(2)=4\), \(f(5)=-1\), \(f(8)=6\)), find \(f(1001)\).`, 4, "1001 = 111 × 9 + 2."),
  num("The tide has a period of 12 h 25 min and there is a high tide at t = 0. How many high tides occur from t = 0 to t = 72 h inclusive?", 6, "Highs at 0, 12.42, 24.83, 37.25, 49.67, 62.08 h."),
  num("A heart beats 80 times per minute. How many seconds do 100 beats take?", 75, "Period 0.75 s × 100."),
  num("A sinusoid has a maximum at t = 2 and the next minimum at t = 7. What is its period?", 10, "Max to min is half a period."),
  num("A sinusoid has a maximum of 9 at t = 2 and the next minimum of 1 at t = 7. What is its value at t = 4.5?", 5, "Halfway between max and min in time: on the axis."),
  num("For the same sinusoid (max at t = 2, period 10), when is the first maximum after t = 40?", 42, "Maxima at 2, 12, 22, 32, 42."),
  tf("If a function satisfies f(x + 6) = f(x) and f(x + 4) = f(x) for all x, then f(x + 2) = f(x) for all x.", true, "f(x + 2) = f(x + 6 − 4) = f(x)."),
  num("A Ferris wheel ride repeats every 45 s and lasts 6 min. How many complete cycles is that?", 8, "360 ÷ 45."),
  ms("A periodic function has max 8, min −2 and period 6. Which are true? Select all.", ["the amplitude is 5", "the amplitude is 10", "the axis is y = 3", "f(x + 12) = f(x)", "the range is −2 ≤ y ≤ 8"], [0, 2, 3, 4], "Amplitude (8 − (−2))/2 = 5."),
  num("Average monthly temperatures range from −8°C to 22°C. What is the amplitude?", 15, "(22 + 8)/2."),
  num("Average monthly temperatures range from −8°C to 22°C. What is the axis (°C)?", 7, "(22 − 8)/2."),
  num("Day 100 has 13.1 h of daylight. Assuming the pattern repeats every 365 days, how much daylight does day 1195 have?", 13.1, "1195 = 100 + 3 × 365.", null, 0.001),
  num("A lighthouse flashes every 7.5 s, starting at t = 0. How many flashes occur from t = 0 to t = 600 s inclusive?", 81, "600 ÷ 7.5 = 80 intervals, so 81 flashes."),
  num(S`The graph has period 8. Find \(f(30)\).`, -2, "30 = 3 × 8 + 6: read f(6).", waveD((x) => 3 * sin(45 * x) + 1, { xmin: 0, xmax: 16, ymin: -3, ymax: 5 }, { x: 1, y: 1 }, { pts: [[6, -2]] })),
  num("Read the maximum value of the function graphed.", 1, "Axis −1.5, amplitude 2.5.", waveD((x) => 2.5 * cos(30 * x) - 1.5, { xmin: 0, xmax: 24, ymin: -5, ymax: 2 }, { x: 2, y: 1 })),
  num(S`The sawtooth repeats every 2 units, rising from 0 to 6. Find \(f(9.5)\).`, 4.5, "9.5 = 4 × 2 + 1.5: three quarters of the way up.", waveD([], { xmin: 0, xmax: 10, ymin: -1, ymax: 7 }, { x: 1, y: 1 }, { segs: saw(2, 6, 5) }), 0.001),
  num("How many complete cycles are shown from x = 0 to x = 60?", 5, "Period 12.", waveD((x) => 4 * sin(30 * x) + 6, { xmin: 0, xmax: 60, ymin: 0, ymax: 11 }, { x: 6, y: 1 })),
  num("A screen refreshes 120 times per second. What is the period in milliseconds (2 decimals)?", 8.33, "1000 ÷ 120.", null, 0.006),
];
