// 5.1 Geometry & Measurement Through History — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { figDoc } from "./fig.mjs";

const reg = (n, R = 1, rot = 90) => Array.from({ length: n }, (_, i) => [R * Math.cos(((rot + (360 * i) / n) * Math.PI) / 180), R * Math.sin(((rot + (360 * i) / n) * Math.PI) / 180)]);

export const TOPIC = "5.1 Geometry & Measurement Through History";
export const Q = [
  num(`Convert the Babylonian number 1;24,51,10 to a decimal (6 decimal places).`, 1.414213, "1 + 24/60 + 51/3600 + 10/216000.", null, 0.0000015),
  num(`Write 3.14159 in base 60 as 3;a,b (two places). What is a?`, 8, "0.14159 × 60 = 8.495 → a = 8."),
  num(`Continuing: 3.14159 = 3;8,b. Find b to the nearest whole number.`, 30, "0.495 × 60 ≈ 29.7 → 30."),
  num(`Two cities 1250 km apart on a meridian have noon Sun angles differing by 11.25°. Estimate Earth's circumference (km).`, 40000, "360 ÷ 11.25 = 32; 32 × 1250."),
  num(`Using C ≈ 40 000 km, how far apart (km) are two places on a meridian whose noon Sun angles differ by 1°?`, 111.1, "40 000 ÷ 360.", null, 0.06),
  num(`A regular 12-gon is drawn inside a circle of diameter 1. Each side is 0.258819. What lower bound for π does its perimeter give (4 decimal places)?`, 3.1058, "12 × 0.258819 = 3.10583.", figDoc({ w: 220, items: [{ circle: [0, 0, 1], color: "ink" }, { poly: reg(12), fill: "none", color: "blue" }] }), 0.00006),
  num(`The outside 12-gon around a circle of diameter 1 has side 0.267949. What upper bound for π does it give (4 decimal places)?`, 3.2154, "12 × 0.267949 = 3.21539.", null, 0.00006),
  ms(`Which of these are correct bounds that Archimedes could prove with his 96-gons? Select all.`, ["π > 3.1408", "π < 3.1429", "π > 3.1416", "π < 3.1410"], [0, 1], "3 10/71 ≈ 3.1408 < π < 3 1/7 ≈ 3.1429."),
  num(`The Rhind papyrus area rule gives (8d/9)². For what value of π is this exact? Give π to 4 decimal places.`, 3.1605, "(8/9)² d² = π d²/4 → π = 256/81.", null, 0.00006),
  num(`Percent error of the Egyptian value 256/81 compared with π (2 decimal places).`, 0.6, "(3.16049 − 3.14159)/3.14159 × 100 ≈ 0.60%.", null, 0.006),
  num(`A rope has 56 equal spaces. It is pulled into a right triangle whose sides are a multiple of 7-24-25. How many spaces is the longest side?`, 25, "7 + 24 + 25 = 56."),
  tf(`A rope with 40 equal spaces can form a right triangle with whole-number sides.`, true, "8 + 15 + 17 = 40, and 64 + 225 = 289 = 17²."),
  num(`Plimpton 322 lists triples such as (65, 72, c). Find c.`, 97, "65² + 72² = 4225 + 5184 = 9409 = 97²."),
  num(`An astronomer measures an angle of 12°34′. Write it in decimal degrees (2 places).`, 12.57, "34/60 ≈ 0.567.", null, 0.006),
  num(`Convert 47.85° to degrees and minutes: how many minutes?`, 51, "0.85 × 60 = 51."),
  mc(`Zu Chongzhi's 355/113 matches π to how many decimal places?`, "6", ["2", "4", "10"], "3.1415929 vs 3.1415926."),
  num(`If the Great Pyramid's base side is 440 royal cubits and its height 280 cubits, what is the ratio perimeter ÷ height (2 decimal places)? (Some say it approximates 2π.)`, 6.29, "1760 ÷ 280 ≈ 6.286.", null, 0.006),
  num(`The Earth's radius is about 6371 km. Using C = 2πr, what is the circumference (nearest km)?`, 40030, "2π(6371) ≈ 40 030.", null, 1),
  tf(`Eratosthenes' method would give the wrong answer if the two cities were not on the same north–south line, because the angle difference would no longer match the arc between them.`, true, "The angle measures the north–south arc only."),
  num(`A ship's navigator uses 1 nautical mile = 1 minute of latitude. Using C = 40 000 km, how many km is one nautical mile (3 decimal places)?`, 1.852, "40 000 ÷ (360 × 60) ≈ 1.852.", null, 0.0006),
];
