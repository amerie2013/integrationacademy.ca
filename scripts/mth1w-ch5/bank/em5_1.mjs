// 5.1 Geometry & Measurement Through History — 20 easy + 20 medium questions
import { mc, ms, num, tf } from "./kit.mjs";
import { figDoc, rightTri } from "./fig.mjs";

export const E = [
  mc(`The word “geometry” comes from Greek words meaning…`, "earth measuring", ["shape drawing", "star counting", "angle making"], "geo = earth, metria = measuring."),
  num(`An Egyptian rope has 12 equal spaces. If one side of the right triangle uses 3 spaces and another uses 4, how many spaces are on the third side?`, 5, "12 − 3 − 4."),
  tf(`The 3-4-5 triangle has a right angle because $3^2+4^2=5^2$.`, true, "9 + 16 = 25."),
  mc(`Babylonian mathematicians counted in base…`, "60", ["10", "2", "12"], "Base 60 (sexagesimal)."),
  num(`How many degrees are in a full circle (a Babylonian legacy)?`, 360, "6 × 60."),
  num(`Write the base-60 number 1;15 (one unit and 15 sixtieths) as a decimal.`, 1.25, "15/60 = 0.25."),
  mc(`π is the ratio of a circle's…`, "circumference to its diameter", ["area to its radius", "diameter to its radius", "radius to its circumference"], "π = C ÷ d."),
  tf(`π can be written exactly as the fraction 22/7.`, false, "22/7 is only an approximation; π is irrational."),
  mc(`Who estimated the circumference of the Earth around 240 BCE using shadows?`, "Eratosthenes", ["Archimedes", "Pythagoras", "Euclid"], "He compared shadows in Syene and Alexandria."),
  mc(`Archimedes estimated π by drawing…`, "polygons inside and outside a circle", ["triangles on a sphere", "squares on a line", "a spiral"], "The circle lies between the two polygons."),
  num(`Write 22/7 as a decimal to 2 decimal places.`, 3.14, "22 ÷ 7 ≈ 3.1429.", null, 0.001),
  mc(`The cubit, an ancient unit of length, was based on…`, "the forearm (elbow to fingertip)", ["the foot", "a grain of barley", "the speed of light"], "Elbow to fingertip."),
  tf(`Using multiples of 3, 4 and 5, a rope with 24 equal spaces can make a right angle.`, true, "6 + 8 + 10 = 24."),
  num(`How many minutes are in 2.5 hours?`, 150, "2.5 × 60."),
  mc(`Today the metre is defined using…`, "the speed of light", ["a king's foot", "the Earth's radius exactly", "a cubit rod"], "Since 1983, light travel in a fraction of a second."),
  num(`A Babylonian number reads 0;30. What decimal is that?`, 0.5, "30/60."),
  tf(`Indian, Chinese and Babylonian mathematicians knew the Pythagorean relationship before Pythagoras.`, true, "Śulba Sūtras, Zhoubi Suanjing, Plimpton 322."),
  num(`Eratosthenes' angle was 7.2°. What fraction of 360° is that? Give the denominator of 1/n.`, 50, "360 ÷ 7.2 = 50."),
  mc(`Which value of π is the most accurate?`, "355/113", ["22/7", "3", "256/81"], "355/113 ≈ 3.1415929."),
  num(`If 1 cubit = 7 palms, how many palms are in 4 cubits?`, 28, "4 × 7."),
];

export const M = [
  num(`Convert the base-60 number 2;24 to a decimal.`, 2.4, "24/60 = 0.4."),
  num(`Convert the base-60 number 0;7,30 to a decimal.`, 0.125, "7/60 + 30/3600 = 0.1167 + 0.0083."),
  num(`Write 3.2 hours as minutes past 3 hours (how many minutes?).`, 12, "0.2 × 60."),
  tf(`A triangle with sides 8, 15 and 17 is right-angled.`, true, "64 + 225 = 289 = 17²."),
  num(`A rope with equal knots makes a right triangle with legs of 9 and 12 spaces. How many spaces long is the hypotenuse?`, 15, "√(81 + 144) = 15.", figDoc({ w: 260, items: rightTri(12, 9, { la: "12", lb: "9", lc: "?", fill: "amber" }) })),
  num(`Two towns are 400 km apart north–south. The Sun's angle differs by 3.6° between them. Estimate Earth's circumference (km).`, 40000, "3.6° is 1/100 of 360°: 100 × 400."),
  num(`Using the Egyptian rule (square of 8/9 of the diameter), what area does a circle with diameter 45 m get (m²)?`, 1600, "8/9 × 45 = 40; 40² = 1600."),
  num(`What value of π does the Egyptian rule imply, to 2 decimal places?`, 3.16, "256/81 ≈ 3.1605.", null, 0.006),
  mc(`Archimedes showed that 3 10/71 < π < 3 1/7. How many sides did his polygons have?`, "96", ["6", "12", "360"], "He doubled from 6 to 12, 24, 48, 96."),
  num(`A regular hexagon inside a circle of diameter 1 has perimeter 3. What estimate of π does it give?`, 3, "Perimeter ÷ diameter."),
  ms(`Which are Pythagorean triples? Select all.`, ["5, 12, 13", "6, 8, 11", "7, 24, 25", "4, 5, 6"], [0, 2], "25 + 144 = 169; 49 + 576 = 625."),
  num(`Write 355/113 as a decimal to 6 decimal places.`, 3.141593, "355 ÷ 113 = 3.14159292…", null, 0.0000006),
  num(`A clock's minute hand turns how many degrees in 10 minutes?`, 60, "360 ÷ 60 = 6° per minute."),
  mc(`Why do 60 and 360 make convenient bases for angles and time?`, "they have many factors", ["they are prime", "they are powers of 10", "they are odd"], "60 = 2·2·3·5: divisible by 2, 3, 4, 5, 6, 10, 12, …"),
  num(`Aryabhata gave π ≈ 62 832/20 000. Write it as a decimal.`, 3.1416, "62 832 ÷ 20 000.", null, 0.00001),
  tf(`Eratosthenes' method works because the Sun's rays reaching the Earth are almost parallel.`, true, "Parallel rays make the shadow angle equal the angle at the centre."),
  num(`The percent error of 22/7 compared with π is about what percent (2 decimal places)?`, 0.04, "(3.142857 − 3.141593)/3.141593 × 100 ≈ 0.04%.", null, 0.005),
  num(`If a stadion is 185 m, how many km is 250 000 stadia?`, 46250, "250 000 × 0.185 km."),
  mc(`The Chinese text Zhoubi Suanjing describes the right-triangle rule as the…`, "gougu rule", ["Plimpton rule", "rope rule", "golden rule"], "Gou and gu are the two legs."),
  num(`Convert 1;40 hours (base 60) to minutes.`, 100, "1 h + 40 min."),
];
