// 6.1 Periodic Functions and Their Properties — 20 easy + 20 medium questions
import { mc, ms, num, tf } from "./kit.mjs";
import { waveD, sin, cos } from "./fig.mjs";

const S = String.raw;
const saw = (p, h, n) => Array.from({ length: n }, (_, i) => ({ pts: [[p * i, 0], [p * (i + 1), h]], color: "violet" }));

export const E = [
  num("A periodic graph has a maximum of 18 and a minimum of 6. What is its amplitude?", 6, "(18 − 6)/2."),
  num("A periodic graph has a maximum of 18 and a minimum of 6. What is the y-value of its axis?", 12, "(18 + 6)/2."),
  num("Consecutive peaks of a periodic graph are at x = 2 and x = 9. What is the period?", 7, "9 − 2."),
  tf("Any graph that goes up and down is periodic.", false, "The pattern must repeat exactly at regular intervals."),
  mc("Which is periodic?", "the position of a clock's second hand", ["the height of a burning candle", "a growing population", "the speed of a falling rock"], "The hand returns to the same place every minute."),
  num(S`A function has period 5 and \(f(1)=3\). Find \(f(21)\).`, 3, "21 − 1 = 20 = 4 periods."),
  num("A periodic function has axis y = 4 and amplitude 3. What is its maximum?", 7, "4 + 3."),
  num("A periodic function has axis y = 4 and amplitude 3. What is its minimum?", 1, "4 − 3."),
  mc("What is one cycle of a periodic function?", "one complete repeat of the pattern", ["the highest point", "the distance from max to min", "the horizontal axis"], "A cycle is a full repeat."),
  num("A pattern repeats every 4 s. How many cycles are there in one minute?", 15, "60 ÷ 4."),
  num("A pattern repeats 30 times per minute. What is its period in seconds?", 2, "60 ÷ 30."),
  tf("The amplitude of a periodic function can be negative.", false, "It is a distance: (max − min)/2 ≥ 0."),
  num(S`A periodic function has range \(-5\le y\le3\). What is its amplitude?`, 4, "(3 − (−5))/2."),
  num(S`A periodic function has range \(-5\le y\le3\). What is the y-value of its axis?`, -1, "(3 + (−5))/2."),
  num("Values recorded every 2 s are 3, 7, 3, −1, 3, 7, 3, −1. What is the period in seconds?", 8, "The pattern 3, 7, 3, −1 takes 4 readings = 8 s."),
  num(S`For every x, \(f(x+6)=f(x)\), and no smaller shift works. What is the period?`, 6, "That is the definition of the period."),
  mc("What is the axis of a periodic function?", "the horizontal line halfway between the maximum and minimum", ["the x-axis, always", "the line through the first maximum", "the vertical line at the start of a cycle"], "y = (max + min)/2."),
  tf("A sawtooth pattern that repeats exactly is periodic.", true, "Periodic does not require a smooth wave."),
  num("Read the period of the function graphed.", 10, "Peak to peak.", waveD((x) => 2 * sin(36 * x) + 3, { xmin: 0, xmax: 30, ymin: 0, ymax: 6 }, { x: 2, y: 1 }, { pts: [[2.5, 5], [12.5, 5]] })),
  num("Read the amplitude of the function graphed.", 5, "Max 4, min −6.", waveD((x) => 5 * cos(60 * x) - 1, { xmin: 0, xmax: 12, ymin: -7, ymax: 5 }, { x: 1, y: 1 })),
];

export const M = [
  num(S`A function has period 7 and \(f(3)=-2\). Find \(f(73)\).`, -2, "73 − 3 = 70 = 10 periods."),
  num(S`A function has period 12 and \(f(0)=5\). Find \(f(-36)\).`, 5, "−36 is 3 periods to the left."),
  num("A heart beats 72 times per minute. What is the period in seconds (2 decimals)?", 0.83, "60 ÷ 72.", null, 0.006),
  num("High tides occur at 3:00 and 15:24. What is the period in hours (decimal)?", 12.4, "12 h 24 min = 12.4 h.", null, 0.001),
  num("High tides occur at 3:00 and 15:24 on day 1. How many hours after midnight of day 1 is the next high tide (decimal)?", 27.8, "15.4 + 12.4.", null, 0.001),
  num("A periodic graph has max 3.6 and min −1.2. What is the y-value of its axis?", 1.2, "(3.6 − 1.2)/2.", null, 0.001),
  num("A periodic graph has max 3.6 and min −1.2. What is its amplitude?", 2.4, "(3.6 + 1.2)/2.", null, 0.001),
  ms("Which are periodic? Select all.", ["the phases of the moon", "the tides at a harbour", "a person's mass over a lifetime", "sunrise times over several years", "a car's odometer reading"], [0, 1, 3], "Mass and odometer readings do not repeat."),
  tf("If a function has period 4, then f(x + 8) = f(x) for every x.", true, "Two periods."),
  num("Readings every 0.5 s: 2, 4, 6, 4, 2, 4, 6, 4, 2. What is the period in seconds?", 2, "4 readings × 0.5 s."),
  num("A sinusoidal function has a maximum at t = 3 and period 10. When is the next minimum?", 8, "Half a period later."),
  num("A sinusoidal function has a maximum at t = 3 and period 10. When does it next cross its axis?", 5.5, "A quarter period later.", null, 0.001),
  mc("A periodic graph has max 10, min 2 and period 6. Which statement is FALSE?", "its amplitude is 8", ["its axis is y = 6", "its range is 2 ≤ y ≤ 10", "it repeats every 6 units"], "Amplitude is (10 − 2)/2 = 4."),
  num("Day length repeats once a year. How many complete cycles occur in 3 years?", 3, "One per year."),
  num("A wheel turns 20 times per minute. What is its period in seconds?", 3, "60 ÷ 20."),
  num("A function has period 0.5 s. How many cycles does it complete in 7 s?", 14, "7 ÷ 0.5."),
  tf("Every periodic function is sinusoidal.", false, "Sawtooth and pulse patterns are periodic but not sinusoidal."),
  num("A periodic function has amplitude 4.5 and minimum −2. What is its maximum?", 7, "−2 + 2 × 4.5."),
  num("Read the period of the sawtooth graph.", 3, "Each ramp takes 3 units.", waveD([], { xmin: 0, xmax: 12, ymin: -1, ymax: 6 }, { x: 1, y: 1 }, { segs: saw(3, 5, 4) })),
  num(S`The graph has period 4. Use it to find \(f(13)\).`, 3.5, "13 = 3 × 4 + 1: read f(1).", waveD((x) => 1.5 * sin(90 * x) + 2, { xmin: 0, xmax: 8, ymin: 0, ymax: 4 }, { x: 1, y: 0.5 }, { pts: [[1, 3.5]] }), 0.001),
];
