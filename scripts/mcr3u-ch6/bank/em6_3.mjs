// 6.3 Interpreting Sinusoidal Graphs — 20 easy + 20 medium questions
import { mc, ms, num, tf } from "./kit.mjs";
import { waveD, sin, cos, rd } from "./fig.mjs";

const S = String.raw;
const T = { xlabel: "t (s)", ylabel: "h (m)" };

export const E = [
  num("A Ferris wheel graph has a maximum of 40 m and a minimum of 2 m. What is the radius of the wheel (m)?", 19, "(40 − 2)/2."),
  num("A Ferris wheel graph has a maximum of 40 m and a minimum of 2 m. How high is the hub (m)?", 21, "(40 + 2)/2."),
  num("A rider reaches the top at t = 25 s and again at t = 85 s. How long is one turn (s)?", 60, "85 − 25."),
  mc("On a Ferris wheel height graph, what does the amplitude represent?", "the radius of the wheel", ["the diameter of the wheel", "the height of the hub", "the time for one turn"], "Distance from the hub to the rider."),
  mc("On a Ferris wheel height graph, what does the axis represent?", "the height of the hub", ["the ground", "the boarding platform", "the radius"], "Halfway between top and bottom."),
  num("A wheel has radius 6 m and its hub is 8 m high. What is the lowest height of a rider (m)?", 2, "8 − 6."),
  num("A wheel has radius 6 m and its hub is 8 m high. What is the highest height of a rider (m)?", 14, "8 + 6."),
  num("A wheel takes 50 s per turn and riders board at the bottom. When is a rider first at the top (s)?", 25, "Half a turn."),
  num("A wheel takes 50 s per turn and riders board at the bottom. When is a rider first level with the hub (s)?", 12.5, "A quarter turn.", null, 0.001),
  tf("On a Ferris wheel graph, the amplitude equals the diameter of the wheel.", false, "It equals the radius."),
  num("A ride lasts 4 turns of 50 s each. What is the largest value in the domain of the height function (s)?", 200, "4 × 50."),
  num("A bicycle tire has diameter 50 cm. What is the period of a pebble's height graph against distance (cm, 2 decimals)?", rd(50 * Math.PI), "Circumference 50π.", null, 0.01),
  num("A paddle wheel of radius 3 m has its centre at the water surface. How far below the surface is the lowest paddle (enter as a negative height, m)?", -3, "0 − 3."),
  num("A wind turbine hub is 25 m high and each blade is 10 m long. What is the highest point a blade tip reaches (m)?", 35, "25 + 10."),
  mc("A rider boards at the bottom. When are they at the top?", "half a turn after boarding", ["a quarter turn after boarding", "a full turn after boarding", "three quarters of a turn after boarding"], "Bottom to top is half the circle."),
  num("A wheel takes 75 s per turn. How many complete turns does it make in 5 min?", 4, "300 ÷ 75."),
  tf("A wheel that turns faster has a shorter period.", true, "Less time per turn."),
  num("A wheel has radius 10 m and its hub is 12 m high. At what height do riders board at the bottom (m)?", 2, "12 − 10."),
  num("Read the hub height from the graph (m).", 15, "Halfway between 3 and 27.", waveD((t) => 15 - 12 * cos(6 * t), { xmin: 0, xmax: 120, ymin: 0, ymax: 30 }, { x: 10, y: 3 }, T)),
  num("Read the time for one turn from the graph (s).", 40, "Bottom to bottom.", waveD((t) => 10 - 8 * cos(9 * t), { xmin: 0, xmax: 120, ymin: 0, ymax: 20 }, { x: 10, y: 2 }, { ...T, pts: [[0, 2, false], [40, 2, false], [80, 2, false]] })),
];

// under water when sin θ < −0.25: a range of 180° − 2·sin⁻¹(0.25) out of 360°
const f6 = (180 - 2 * ((Math.asin(0.25) * 180) / Math.PI)) / 360;
export const M = [
  num("A rider boards a wheel at the bottom (2 m high). The top is 28 m and one turn takes 80 s. How high is the rider at t = 20 s (m)?", 15, "A quarter turn: level with the hub (2 + 28)/2."),
  num("For the same wheel (bottom 2 m, top 28 m, 80 s per turn), how high is the rider at t = 40 s (m)?", 28, "Half a turn: the top."),
  num("For the same wheel (80 s per turn), at what second time in the first turn is the rider level with the hub (s)?", 60, "Three quarters of a turn."),
  num("A tire has diameter 72 cm. What is the period of a pebble's height graph against distance (cm, 2 decimals)?", rd(72 * Math.PI), "72π.", null, 0.01),
  num("A tire has diameter 72 cm. What is the maximum height of a pebble stuck in its tread (cm)?", 72, "The top of the tire."),
  num("A paddle wheel of radius 4 m has its centre 1 m above the water; a paddle's height is 1 + 4 sin θ. What fraction of each turn is the paddle under water (2 decimals)?", rd(f6), "sin θ < −0.25 between 194.5° and 345.5°.", null, 0.01),
  num("A wheel has radius 10 m, hub 12 m and turns once every 60 s; riders board at the bottom. Find the height at t = 15 s (m).", 12, "A quarter turn."),
  num("For the same wheel (radius 10 m, hub 12 m, 60 s per turn), find the height at t = 45 s (m).", 12, "Three quarters of a turn."),
  num("For the same wheel (radius 10 m, hub 12 m, 60 s per turn), find the height at t = 30 s (m).", 22, "Half a turn: top."),
  mc("A ride lasts 3 turns of 40 s each. What is the domain of the height function?", S`\(0\le t\le120\)`, [S`\(0\le t\le40\)`, S`\(t\ge0\)`, S`\(0\le t\le3\)`], "Only the ride's duration makes sense."),
  mc("A wheel has radius 9 m and its hub is 10 m high. What is the range of a rider's height?", S`\(1\le h\le19\)`, [S`\(0\le h\le19\)`, S`\(1\le h\le10\)`, S`\(-9\le h\le9\)`], "10 ± 9."),
  tf("Doubling the radius of a wheel doubles the period of the height graph.", false, "The radius changes the amplitude, not the period."),
  ms("The hub of a wheel is raised 2 m (same radius and speed). Which change? Select all.", ["the maximum height", "the minimum height", "the axis", "the amplitude", "the period"], [0, 1, 2], "Everything moves up 2 m; size and speed are the same."),
  num("A blade of length 18 m turns about a hub 24 m high once every 4 s, starting at the top. How high is the tip at t = 1 s (m)?", 24, "A quarter turn: level with the hub."),
  num("For the same blade (length 18 m, hub 24 m, 4 s per turn, starting at the top), how high is the tip at t = 2 s (m)?", 6, "Half a turn: bottom, 24 − 18."),
  num("A piston completes 1500 cycles per minute. What is its period in seconds?", 0.04, "60 ÷ 1500.", null, 0.0001),
  num("A water wheel makes 6 turns per minute. What is its period in seconds?", 10, "60 ÷ 6."),
  num("A buoy's height graph has max 2.2 m and min 0.2 m. What is its amplitude (m)?", 1, "(2.2 − 0.2)/2."),
  num("When is the rider first at the top (s)?", 24, "Half of the 48 s period.", waveD((t) => 13 - 11 * cos(7.5 * t), { xmin: 0, xmax: 96, ymin: 0, ymax: 26 }, { x: 8, y: 2 }, T)),
  num("The graph shows a pebble's height on a tire of diameter 40 cm against distance. What is the period (cm, 2 decimals)?", rd(40 * Math.PI), "Circumference 40π.", waveD((d) => 20 - 20 * cos((360 * d) / (40 * Math.PI)), { xmin: 0, xmax: 300, ymin: 0, ymax: 45 }, { x: 25, y: 5 }, { xlabel: "d (cm)", ylabel: "h (cm)" }), 0.01),
];
