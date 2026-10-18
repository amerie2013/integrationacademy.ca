// 6.3 Interpreting Sinusoidal Graphs — 20 hard questions (new topic)
import { mc, ms, num, tf } from "./kit.mjs";
import { waveD, sin, cos, acos, asin, rd } from "./fig.mjs";

const S = String.raw;
const T = { xlabel: "t (s)", ylabel: "h (m)" };
const above23 = (360 - 2 * acos(-0.75)) / 7.5;
const under4 = (180 - 2 * asin(0.2)) / 360; // 0.5 + 2.5 sin θ < 0 ⇔ sin θ < −0.2
const peb = 33 - 33 * cos((360 * 100) / (66 * Math.PI));
const entry = (180 + asin(1 / 3)) / 30;

export const TOPIC = "6.3 Interpreting Sinusoidal Graphs";
export const Q = [
  num(S`A wheel has radius 12 m, hub 14 m and turns once every 48 s: \(h=14-12\cos(7.5t)\). For how long per turn is a rider above 23 m (2 decimals)?`, rd(above23), "cos(7.5t) ≤ −0.75 for 7.5t between 138.6° and 221.4°; divide that 82.8° range by 7.5.", null, 0.01),
  num(S`For the same wheel (\(h=14-12\cos(7.5t)\)), for how long per turn is a rider below 8 m (s)?`, 16, "cos(7.5t) > 0.5: angles within 60° of 0°, a 120° range; 120 ÷ 7.5."),
  num("Wheel A: radius 8 m, hub 10 m, 30 s per turn. Wheel B: radius 10 m, hub 12 m, 40 s per turn. Both riders board at the bottom at t = 0. How much higher is A's rider than B's at t = 10 s (m)?", 2, "A: 10 − 8 cos 120° = 14; B: 12 − 10 cos 90° = 12."),
  num("A water wheel of radius 2.5 m has its centre 0.5 m above the water. What fraction of each turn is a paddle under water (2 decimals)?", rd(under4), "0.5 + 2.5 sin θ < 0 ⇔ sin θ < −0.2.", null, 0.01),
  num("A pebble is stuck at the bottom of a 66 cm tire. How high is it after the bike travels 100 cm (2 decimals)?", rd(peb), "Angle turned 360 × 100/(66π) ≈ 173.6°; height 33 − 33 cos(angle).", null, 0.01),
  num("A Ferris wheel gives 30 rides (turns) per hour. What is its period in seconds?", 120, "3600 ÷ 30."),
  tf("If a wheel turns twice as fast, its height graph is compressed horizontally by a factor of ½.", true, "The period is halved."),
  mc("A wheel's hub and boarding platform are both raised 1 m. Which property of the height graph stays the same?", "the amplitude", ["the axis", "the maximum", "the minimum"], "The radius is unchanged."),
  num("An observation wheel has diameter 120 m and its lowest point is 15 m above the ground. How high is its hub (m)?", 75, "15 + 60."),
  num("That wheel (diameter 120 m, lowest 15 m) takes 30 min per turn and riders board at the bottom. How many minutes until a rider is first level with the hub?", 7.5, "A quarter turn.", null, 0.001),
  num("For that wheel (diameter 120 m, lowest 15 m, 30 min per turn), how high is a rider after 10 min (m)?", 105, "75 − 60 cos 120°."),
  ms("A blade tip on a turbine (hub 30 m, blade 12 m, 6 s per turn) starts at the top. Which are true at t = 3 s? Select all.", ["the tip is at the bottom", "the tip is 18 m high", "the tip is 42 m high", "the tip is level with the hub"], [0, 1], "Half a turn: 30 − 12."),
  num("A tide graph has high water 9.5 m and low water 1.5 m with period 12.5 h. What is the amplitude (m)?", 4, "(9.5 − 1.5)/2."),
  num("For that tide (high 9.5 m, low 1.5 m), what is the mean water level (m)?", 5.5, "(9.5 + 1.5)/2.", null, 0.001),
  num("For that tide (period 12.5 h), how many hours pass from a high tide to the next low tide?", 6.25, "Half a period.", null, 0.001),
  num("Two wheels are graphed. By how much do their maximum heights differ (m)?", 6, "22 m and 16 m.", waveD([(t) => 12 - 10 * cos(6 * t), (t) => 9 - 7 * cos(6 * t)], { xmin: 0, xmax: 120, ymin: 0, ymax: 24 }, { x: 10, y: 2 }, T)),
  num("When does the rider first reach 20 m (s)?", 20, "14 − 12 cos(6t) = 20 ⇒ cos(6t) = −0.5 ⇒ 6t = 120°.", waveD((t) => 14 - 12 * cos(6 * t), { xmin: 0, xmax: 120, ymin: 0, ymax: 28 }, { x: 10, y: 2 }, { ...T, lines: [{ m: 0, b: 20, color: "amber", dash: true }] })),
  num("A paddle's height is 1 + 3 sin(30t) (m, t in s). When does it first enter the water (2 decimals)?", rd(entry), "1 + 3 sin(30t) = 0 going down: 30t = 180° + 19.47°.", waveD((t) => 1 + 3 * sin(30 * t), { xmin: 0, xmax: 24, ymin: -3, ymax: 5 }, { x: 2, y: 1 }, T), 0.01),
  num("The graph shows a pebble's height on a 70 cm tire against distance. At what distance is it first at the top (cm, 2 decimals)?", rd(35 * Math.PI), "Half a circumference: 35π.", waveD((d) => 35 - 35 * cos((360 * d) / (70 * Math.PI)), { xmin: 0, xmax: 450, ymin: 0, ymax: 75 }, { x: 50, y: 10 }, { xlabel: "d (cm)", ylabel: "h (cm)" }), 0.01),
  num("A wheel's height graph has period 50 s. Through how many degrees does the wheel turn each second?", 7.2, "360 ÷ 50.", null, 0.001),
];
