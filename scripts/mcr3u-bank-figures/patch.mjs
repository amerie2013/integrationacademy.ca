// MCR3U bank, 2026-11-05: make linked questions stand alone and attach figures (same method as MTH1W).
// Each entry: old = the prompt today; to = new prompt (optional); fig = key in figs.mjs (optional);
// fb = [old feedback, new feedback] (optional).
//   node scripts/mcr3u-bank-figures/patch.mjs --source   -> rewrite the bank source files
//   node scripts/mcr3u-bank-figures/patch.mjs            -> dry run: compare the sources with the database
//   node scripts/mcr3u-bank-figures/patch.mjs --apply    -> back up the rows, upload figures, update only these rows
import fs from "fs";
import path from "path";
import crypto from "crypto";
import { pathToFileURL } from "url";
import { FIG } from "./figs.mjs";

const r = String.raw;
const tide = `A tide graph has high water 9.5 m and low water 1.5 m with period 12.5 h.`;
const tide2 = `High tide is 6.8 m at 2:00 and the next low tide is 1.2 m at 8:12.`;
const fn = r`A function has period 9 with \(f(2)=4\), \(f(5)=-1\) and \(f(8)=6\).`;
const w228 = `A rider boards a wheel at the bottom (2 m high). The top is 28 m and one turn takes 80 s.`;
const w1012 = `A wheel has radius 10 m, hub 12 m and turns once every 60 s; riders board at the bottom.`;
const loan = `A loan of 18 000 dollars is repaid monthly over 5 years at 4.8%/a compounded monthly.`;
const model = `A model has a maximum of 30 at t = 3 and the next minimum of 10 at t = 9.`;
const obs = `An observation wheel has diameter 120 m and its lowest point is 15 m above the ground.`;
const towers = `Fire towers A and B are 15 km apart. From A the fire makes a 40° angle with AB; from B it makes 60° with BA.`;
const w402 = `A wheel takes 3 min per turn, with max height 40 m and min 2 m, boarding at the bottom (t in seconds).`;
export const PATCH = [
  // ---- questions that leaned on another question ----
  { old: r`For $A(x)=x(15-x)$ (the rectangle above), what is the domain?`, to: r`A rectangle with perimeter 30 and one side $x$ has area $A(x)=x(15-x)$. What is the domain?` },
  { old: r`Same $f$ and $g$: find the smallest value in the range of $g$.`, to: r`$f$: domain $-4\le x\le2$, range $0\le y\le5$. For $g(x)=-2f(\tfrac12(x-3))+1$, find the smallest value in the range of $g$.` },
  { old: `For the theatre above (600 seats at 15 dollars, −15 seats per 0.50-dollar increase), what ticket price maximises revenue?`, to: `A theatre sells 600 seats at 15 dollars. Each 0.50-dollar increase loses 15 seats. What ticket price maximises revenue?`, fb: ["x = 5 increases.", "(15 + 0.5x)(600 − 15x) is greatest at x = 5 increases."] },
  { old: r`For the tanks above (A: $4(t-10)^2$, B: $20t$), how many litres are in each when they are equal?`, to: r`Tank A holds $4(t-10)^2$ L for $0\le t\le10$ min; tank B starts empty and fills at 20 L/min. How many litres are in each when they hold equal amounts?`, fb: ["20 × 5.", "They are equal at t = 5; 20 × 5."] },
  { old: `In the same 3–4–5 triangle, find cos A.`, to: `A right triangle has sides 3, 4 and 5. Angle A is opposite the side 3. Find cos A.`, fig: "tri345" },
  { old: `That 4 m ladder slips until its angle with the ground is 50°. How far down the wall did the top slide (2 decimals)?`, to: `A 4 m ladder reaches 3.6 m up a wall. It slips until its angle with the ground is 50°. How far down the wall did the top slide (2 decimals)?`, fig: "ladder4" },
  { old: `For the same rider at 210°, find the x-coordinate to 2 decimals.`, to: `A Ferris wheel of radius 12 m is centred at the origin. A rider is at 210° in standard position. Find the rider's x-coordinate to 2 decimals.`, fig: "ferris210" },
  { old: `In the same 5–12–13 triangle, find sec A to 4 decimals.`, to: `A right triangle has sides 5, 12 and 13, with ∠A opposite 5. Find sec A to 4 decimals.`, fig: "tri5" },
  { old: `In the same 5–12–13 triangle, find cot A.`, to: `A right triangle has sides 5, 12 and 13, with ∠A opposite 5. Find cot A.`, fig: "tri5" },
  { old: `For the same towers, how far is the fire from A (2 decimals)?`, to: `${towers} How far is the fire from A (2 decimals)?`, fig: "towers" },
  { old: `For the same towers, how far is the fire from the straight line AB (2 decimals)?`, to: `${towers} How far is the fire from the straight line AB (2 decimals)?`, fig: "towers" },
  { old: `In the same quadrilateral, CD = 4 and DA = 7. Find ∠D (1 decimal).`, to: `Quadrilateral ABCD has AB = 5, BC = 6, CD = 4, DA = 7 and ∠B = 120°. Find ∠D (1 decimal).`, fig: "quadAll", fb: ["cos D = (16 + 49 − 91)/56.", "AC² = 25 + 36 + 30 = 91; cos D = (16 + 49 − 91)/56."] },
  { old: r`For the same function (period 9, \(f(2)=4\), \(f(5)=-1\), \(f(8)=6\)), find \(f(50)\).`, to: r`${fn} Find \(f(50)\).` },
  { old: r`For the same function (period 9, \(f(2)=4\), \(f(5)=-1\), \(f(8)=6\)), find \(f(1001)\).`, to: r`${fn} Find \(f(1001)\).` },
  { old: `For the same sinusoid (max at t = 2, period 10), when is the first maximum after t = 40?`, to: `A sinusoid has a maximum of 9 at t = 2 and the next minimum of 1 at t = 7. When is the first maximum after t = 40?`, fig: "sinT2", fb: ["Maxima at 2, 12, 22, 32, 42.", "Half a period is 5, so the period is 10. Maxima at 2, 12, 22, 32, 42."] },
  { old: r`For the same wheel (\(h=14-12\cos(7.5t)\)), for how long per turn is a rider below 8 m (s)?`, to: r`A wheel has radius 12 m, hub 14 m and turns once every 48 s: \(h=14-12\cos(7.5t)\). For how long per turn is a rider below 8 m (s)?`, fig: "w1214" },
  { old: `That wheel (diameter 120 m, lowest 15 m) takes 30 min per turn and riders board at the bottom. How many minutes until a rider is first level with the hub?`, to: `${obs} It takes 30 min per turn and riders board at the bottom. How many minutes until a rider is first level with the hub?`, fig: "w120" },
  { old: `For that wheel (diameter 120 m, lowest 15 m, 30 min per turn), how high is a rider after 10 min (m)?`, to: `${obs} It takes 30 min per turn and riders board at the bottom. How high is a rider after 10 min (m)?`, fig: "w120" },
  { old: `For that tide (high 9.5 m, low 1.5 m), what is the mean water level (m)?`, to: `${tide} What is the mean water level (m)?`, fig: "tide95" },
  { old: `For that tide (period 12.5 h), how many hours pass from a high tide to the next low tide?`, to: `${tide} How many hours pass from a high tide to the next low tide?`, fig: "tide95" },
  { old: `For the same wheel (bottom 2 m, top 28 m, 80 s per turn), how high is the rider at t = 40 s (m)?`, to: `${w228} How high is the rider at t = 40 s (m)?`, fig: "w228" },
  { old: `For the same wheel (80 s per turn), at what second time in the first turn is the rider level with the hub (s)?`, to: `${w228} At what second time in the first turn is the rider level with the hub (s)?`, fig: "w228" },
  { old: `For the same wheel (radius 10 m, hub 12 m, 60 s per turn), find the height at t = 45 s (m).`, to: `${w1012} Find the height at t = 45 s (m).`, fig: "w1012" },
  { old: `For the same wheel (radius 10 m, hub 12 m, 60 s per turn), find the height at t = 30 s (m).`, to: `${w1012} Find the height at t = 30 s (m).`, fig: "w1012" },
  { old: `For the same blade (length 18 m, hub 24 m, 4 s per turn, starting at the top), how high is the tip at t = 2 s (m)?`, to: `A blade of length 18 m turns about a hub 24 m high once every 4 s, starting at the top. How high is the tip at t = 2 s (m)?`, fig: "blade1824" },
  { old: `For the same sinusoid (max at 25°, period 90°), what is d in a sine equation with a > 0?`, to: `A sinusoid has a maximum at (25°, 9) and the next minimum at (70°, 3). What is d in a sine equation with a > 0?`, fig: "sinD25" },
  { old: `For that sinusoid (axis 4, rising through (0°, 4), first max at 30°), what is the period (degrees)?`, to: `A sinusoid has axis y = 4, passes through (0°, 4) going up, and has its first maximum 7 at x = 30°. What is the period (degrees)?`, fig: "sinAxis4" },
  { old: `For that daylight model (max 14.8 h, min 9.6 h), what is the amplitude (h)?`, to: `Daylight peaks at 14.8 h on day 172 and bottoms at 9.6 h. What is the amplitude of a model for it (h)?` },
  { old: `For the same model (max 30 at t = 3, min 10 at t = 9), what is its value at t = 15?`, to: `${model} What is its value at t = 15?`, fig: "model30" },
  { old: `For the same model (max at t = 3, next min at t = 9), what is k?`, to: `${model} In a sinusoidal model, what is k?`, fig: "model30" },
  { old: r`For the same wheel (\(h=-14\cos(5t)+16\)), for how long per turn is a rider below 9 m (s)?`, to: r`A wheel: radius 14 m, hub 16 m, 72 s per turn, boarding at the bottom: \(h=-14\cos(5t)+16\). For how long per turn is a rider below 9 m (s)?`, fig: "w1416" },
  { old: `For that wheel (h = −19 cos(2t) + 21), how high is a rider at t = 150 s (m)?`, to: `${w402} How high is a rider at t = 150 s (m)?`, fig: "w402", fb: ["−19 cos 300° + 21.", "h = −19 cos(2t) + 21: −19 cos 300° + 21."] },
  { old: `For the same wheel (radius 15 m, hub 17 m, 60 s), find the height at t = 20 s (m).`, to: `A wheel has radius 15 m, hub 17 m and turns once every 60 s; riders board at the bottom. Find the height at t = 20 s (m).`, fig: "w1517" },
  { old: `For that tide (high 6.8 m, low 1.2 m), what is c (m)?`, to: `${tide2} In a model of the depth, what is c (m)?`, fig: "tide68" },
  { old: `For that tide (high at 2:00, low at 8:12), what is k (2 decimals)?`, to: `${tide2} In a model of the depth, what is k (2 decimals)?`, fig: "tide68" },
  { old: r`For that tide, \(D=2.8\cos(29.03(t-2))+4\). Find the depth at 5:06 (t = 5.1), 2 decimals.`, to: r`The depth of a tide is \(D=2.8\cos(29.03(t-2))+4\). Find the depth at 5:06 (t = 5.1), 2 decimals.`, srcDone: true },
  { old: `Using the same model, how many hours of daylight on day 263 (2 decimals)?`, to: r`Daylight is modelled by \(L=3.5\cos\left(\frac{360}{365}(t-172)\right)+12\). How many hours of daylight on day 263 (2 decimals)?` },
  { old: `For the investment above (6200 after 4 years, 7200 after 9 years), find the rate (%/a, 2 decimals).`, to: `Money is invested at simple interest. After 4 years it is 6200 dollars and after 9 years it is 7200 dollars. Find the rate (%/a, 2 decimals).`, fb: ["200 ÷ 5400.", "200 a year on a principal of 5400: 200 ÷ 5400."] },
  { old: `For the investment above (5300 after 2 years, 5750 after 5 years), find the rate (%/a).`, to: `An investment has 5300 dollars after 2 years and 5750 dollars after 5 years at simple interest. Find the rate (%/a).`, fb: ["150 ÷ 5000.", "150 a year on a principal of 5000: 150 ÷ 5000."] },
  { old: `For the offers above (A: 3000 now + 3000 in 3 years; B: 6500 in 3 years), which is better at 6%? Enter 1 for A or 2 for B.`, to: `Offer A pays 3000 dollars now and 3000 dollars in 3 years. Offer B pays 6500 dollars in 3 years. Which is better at 6%/a compounded annually? Enter 1 for A or 2 for B.` },
  { old: `For that mortgage (280 000, 25 years, 4.8%/a monthly), find the total interest (dollars).`, to: `A 280 000-dollar mortgage is repaid monthly over 25 years at 4.8%/a compounded monthly. Find the total interest (dollars).` },
  { old: `Find the total interest on that car loan (15 000 dollars, 5 years, 6.6%/a monthly) (dollars).`, to: `Find the total interest on a 15 000-dollar car loan repaid monthly over 5 years at 6.6%/a compounded monthly (dollars).` },
  { old: `For the prize above (25 000 a year for 20 years at 4%), what percent of the total payments is the present value (nearest whole %)?`, to: `A prize pays 25 000 dollars a year for 20 years. At 4%/a compounded annually, what percent of the total payments is the present value (nearest whole %)?` },
  { old: `For that mortgage, how many payments are needed with 300 dollars extra each month?`, to: `A 300 000-dollar mortgage at 4.8%/a compounded monthly over 25 years. How many payments are needed with 300 dollars extra each month?` },
  { old: `After 5 years, the mortgage above is renewed at 6%/a compounded monthly for the remaining 20 years. Find the new payment (dollars).`, to: `A 300 000-dollar, 25-year mortgage at 4.8%/a compounded monthly is renewed after 5 years at 6%/a compounded monthly for the remaining 20 years. Find the new payment (dollars).` },
  { old: `For that credit card (2800 at 19.8%/a monthly, 85 a month), how much interest is paid (dollars)?`, to: `A 2800-dollar credit-card balance at 19.8%/a compounded monthly is paid with the minimum of 85 dollars a month. How much interest is paid (dollars)?` },
  { old: `For the loan above (20 000, 7.2%/a, 5 years), in which payment does the principal part first exceed the interest part?`, to: `On a 20 000-dollar loan at 7.2%/a compounded monthly over 5 years, in which payment does the principal part first exceed the interest part?` },
  { old: `For the loan above, after the lump sum the payment stays the same. How many more payments are needed?`, to: `A 15 000-dollar loan at 8.4%/a compounded monthly over 4 years. After 18 payments a lump sum of 3000 dollars is paid and the payment stays the same. How many more payments are needed?` },
  { old: `For that loan (18 000, 5 years, 4.8%/a monthly), find the interest in the first month (dollars).`, to: `${loan} Find the interest in the first month (dollars).` },
  { old: `For that loan, find the principal repaid in the first month (dollars).`, to: `${loan} Find the principal repaid in the first month (dollars).`, fb: ["R − 72.", "R = 338.04 and the first interest is 72: R − 72."] },
  { old: `For that loan, find the balance after 24 payments (dollars).`, to: `${loan} Find the balance after 24 payments (dollars).` },

  // ---- questions that describe a scene or graph: figure added, wording kept ----
  ...[
    ["A right triangle has sides 3, 4 and 5. Angle A is opposite the side 3. Find sin A.", "tri345"],
    ["A 4 m ladder reaches 3.6 m up a wall. Find its angle with the ground (1 decimal).", "ladder4"],
    ["A 7 m ladder makes a 65° angle with the ground.", "ladder7"],
    ["From the top of a 120 m tower, a car is 250 m away horizontally.", "tower120"],
    ["A guy wire runs from the top of a 15 m pole", "guy"],
    ["A ramp rises 0.9 m over a horizontal distance of 10 m.", "ramp"],
    ["A plane climbs at 12° to the ground.", "plane12"],
    ["A kite string is 120 m long at 38° to the ground.", "kite"],
    ["A tree casts a 10 m shadow when the sun is at 50°.", "shadows"],
    ["From a window 18 m above the street", "window"],
    ["From the top of a 50 m lighthouse", "lighthouse"],
    ["The point (6, 8) is on the terminal arm of θ. Find r.", "arm68"],
    ["The point (6, 8) is on the terminal arm of θ. Find cos θ.", "arm68"],
    ["The point (−3, −4) is on the terminal arm of θ. Find sin θ.", "armN34"],
    ["The point (−7, 24) is on the terminal arm of θ.", "armN724"],
    ["The point (−2, −5) is on the terminal arm of θ.", "armN25"],
    ["A Ferris wheel of radius 12 m is centred at the origin. A rider is at 210° in standard position. Find the rider's y-coordinate.", "ferris210"],
    ["A right triangle has sides 5, 12 and 13, with ∠A opposite 5. Find csc A.", "tri5"],
    ["Fire towers A and B are 15 km apart. From A the fire makes a 40° angle with AB; from B it makes 60° with BA. How far is the fire from B", "towers"],
    ["Points A and B are 300 m apart. A point C across a valley", "valley"],
    ["A and B are 60 m apart on a riverbank.", "river"],
    ["Two coast-guard posts are 5 km apart.", "coast"],
    [r`$\angle A=42^\circ$, $a=9$, $b=12$. Find the acute value`, "amb42"],
    [r`$\angle A=42^\circ$, $a=9$, $b=12$. Find the obtuse value`, "amb42"],
    [r`$\angle A=24^\circ$, $a=7$, $b=15$. How many`, "amb24"],
    [r`$\angle A=24^\circ$, $a=7$, $b=15$. Find the obtuse`, "amb24"],
    [r`$\angle A=52^\circ$, $a=10$, $b=12.5$.`, "amb52"],
    [r`$\angle A=40^\circ$, $a=8$, $b=11$.`, "amb40"],
    ["A rhombus has side 10 and an angle of 50°.", "rhomb50"],
    ["A parallelogram has sides 7 and 10 with a 65° angle. Find its longer diagonal", "para65"],
    ["A parallelogram has sides 7 and 10 with a 65° angle. Find its shorter diagonal", "para65"],
    ["Two ships leave port. One sails at 16 km/h", "ships"],
    ["Quadrilateral ABCD has AB = 5, BC = 6 and ∠B = 120°. Find diagonal AC", "quad"],
    ["A plane flies 300 km, turns 40° to the left", "plane300"],
    ["A box is 3 by 4 by 12. Find its space diagonal.", "box3412"],
    ["A box is 3 by 4 by 12. Find the angle between", "box3412"],
    ["A box is 2 by 3 by 6.", "box236"],
    ["A box has a 6 by 8 base.", "base68"],
    ["A box is 6 by 6 by 10", "box6610"],
    ["A box is 10 by 6 by 4.", "box1064"],
    ["From 25 m away on level ground, the top of a tree", "tree25"],
    ["A 30 m building is seen at an angle of elevation of 35°.", "bldg30"],
    ["A 12 m pole is 20 m away.", "pole12"],
    ["From the top of a 40 m cliff, a buoy", "cliff40"],
    ["A square pyramid has base side 6 and height 4.", "pyr64"],
    ["A square pyramid has base side 10 and slant edges 13.", "pyr1013"],
    ["A square pyramid has base side 10 and height 12.", "pyr1012"],
    ["A square pyramid has base side 12 and height 8.", "pyr128"],
    ["For the pyramid with base side 12 and height 8", "pyr128"],
    ["A tent is a square pyramid with base side 4 m", "pyr43"],
    ["A balloon is 200 m above point G.", "balloon200"],
    ["A flagpole stands on a 25 m building.", "flagpole"],
    ["From B, the base of a tower is 150 m away", "tower150"],
    ["A 30 m chimney is seen from a point 40 m", "chimney"],
    ["Ground triangle: AB = 100 m, ∠CAB = 50°", "tower100"],
    ["Ground triangle: AB = 200 m, ∠CAB = 40°", "tower200"],
    ["Ground triangle: AB = 90 m", "ground90"],
    ["A plane is directly above a point between stations A and B", "planeAB"],
    ["A balloon is above point G.", "balloonG"],
    ["A tower stands at C. From A its top is at 30°", "towerRight"],
    ["A drone hovers above D.", "drone"],
    ["A periodic graph has a maximum of 18 and a minimum of 6. What is its amplitude?", "p186"],
    ["A periodic graph has a maximum of 18 and a minimum of 6. What is the y-value", "p186"],
    ["Consecutive peaks of a periodic graph are at x = 2 and x = 9.", "peaks29"],
    ["A periodic graph has max 3.6 and min −1.2. What is the y-value", "p36"],
    ["A periodic graph has max 3.6 and min −1.2. What is its amplitude", "p36"],
    ["A periodic graph has max 10, min 2 and period 6.", "p102"],
    ["A sinusoid has a maximum of 9 at t = 2 and the next minimum of 1 at t = 7. What is its value", "sinT2"],
    ["A sinusoid has a maximum at (25°, 9) and the next minimum at (70°, 3). Which equation fits?", "sinD25"],
    ["A sinusoid has axis y = 4, passes through (0°, 4) going up, and has its first maximum 7 at x = 30°. What is k?", "sinAxis4"],
    ["A model has a maximum of 30 at t = 3 and the next minimum of 10 at t = 9. What is its value at t = 6?", "model30"],
    ["A graph has a minimum at (0°, −1) and the next maximum at (45°, 5).", "min45"],
    ["A Ferris wheel graph has a maximum of 40 m and a minimum of 2 m. What is the radius", "wheelGraph"],
    ["A Ferris wheel graph has a maximum of 40 m and a minimum of 2 m. How high", "wheelGraph"],
    ["A wheel has radius 6 m and its hub is 8 m high. What is the lowest", "w68"],
    ["A wheel has radius 6 m and its hub is 8 m high. What is the highest", "w68"],
    ["A wheel has radius 10 m and its hub is 12 m high.", "w1012"],
    ["A wheel has radius 9 m and its hub is 10 m high.", "w910"],
    [r`A wheel has radius 12 m, hub 14 m and turns once every 48 s: \(h=14-12\cos(7.5t)\). For how long per turn is a rider above`, "w1214"],
    [r`A wheel: radius 14 m, hub 16 m, 72 s per turn, boarding at the bottom: \(h=-14\cos(5t)+16\). For how long per turn is a rider above`, "w1416"],
    ["A wheel has radius 15 m, hub 17 m and turns once every 60 s; riders board at the bottom. Find the height at t = 10 s", "w1517"],
    ["A rider boards a wheel at the bottom (2 m high). The top is 28 m and one turn takes 80 s. How high is the rider at t = 20 s", "w228"],
    ["A wheel has radius 10 m, hub 12 m and turns once every 60 s; riders board at the bottom. Find the height at t = 15 s", "w1012"],
    ["An observation wheel has diameter 120 m and its lowest point is 15 m above the ground. How high is its hub", "w120"],
    ["A wheel takes 3 min per turn, with max height 40 m and min 2 m, boarding at the bottom (t in seconds). How high is a rider at t = 45 s", "w402"],
    ["A blade of length 18 m turns about a hub 24 m high once every 4 s, starting at the top. How high is the tip at t = 1 s", "blade1824"],
    ["A wind turbine hub is 25 m high", "blade1025"],
    ["A paddle wheel of radius 3 m has its centre at the water surface.", "paddle3"],
    ["A paddle wheel of radius 4 m has its centre 1 m above the water", "paddle4"],
    ["A water wheel of radius 2.5 m has its centre 0.5 m above the water.", "paddle25"],
    ["A tide graph has high water 9.5 m and low water 1.5 m with period 12.5 h. What is the amplitude", "tide95"],
    ["High tide is 6.8 m at 2:00 and the next low tide is 1.2 m at 8:12. What is the amplitude", "tide68"],
  ].map(([old, fig]) => ({ old, fig })),
];

const ROOT = path.resolve("scripts");
const CHS = [1, 3, 4, 5, 6, 7, 8].map((n) => `mcr3u-ch${n}`);
const files = CHS.flatMap((c) => fs.readdirSync(path.join(ROOT, c, "bank")).filter((f) => /^(em|h)\d/.test(f)).map((f) => path.join(ROOT, c, "bank", f)));
const IMPORT = `import { FIG } from "../../mcr3u-bank-figures/figs.mjs";\n`;
for (const p of PATCH) if (p.fig && !FIG[p.fig]) throw new Error("no figure " + p.fig);
const dbl = (s) => s.replace(/\\/g, "\\\\");

if (process.argv.includes("--source")) {
  // Find every line first, so a miss stops the run before any file is written.
  const plan = PATCH.filter((p) => !p.srcDone).map((p) => {
    const hits = [];
    for (const f of files) for (const [i, l] of fs.readFileSync(f, "utf8").split("\n").entries()) {
      const lit = l.includes(p.old) ? p.old : l.includes(dbl(p.old)) ? dbl(p.old) : null;
      if (lit) hits.push({ f, i, lit, esc: lit !== p.old });
    }
    if (hits.length !== 1) console.log(`${hits.length} source lines hold: ${p.old}`);
    return { p, hit: hits[0], n: hits.length };
  });
  if (plan.some((x) => x.n !== 1)) process.exit(1);
  for (const { p, hit } of plan) {
    const lines = fs.readFileSync(hit.f, "utf8").split("\n");
    let l = lines[hit.i];
    if (p.to) { const raw = /(String\.raw|\bS)`/.test(l); const t = hit.esc || (!raw && /\\/.test(p.to)) ? dbl(p.to) : p.to; l = l.replace(hit.lit, () => t); if (!raw && /\\/.test(p.to) && !hit.esc) l = l.replace(/\b(num|mc|ms|tf|mx|fill)\(`/, "$1(String.raw`"); }
    if (p.fb) { if (!l.includes(p.fb[0])) throw new Error("feedback not on the line: " + p.fb[0]); l = l.replace(p.fb[0], () => p.fb[1]); }
    if (p.fig) {
      const fig = `FIG.${p.fig}`;
      if (/, null, [\d.]+\),\s*$/.test(l)) l = l.replace(/, null, ([\d.]+)\),(\s*)$/, `, ${fig}, $1),$2`);
      else if (/\),\s*$/.test(l)) l = l.replace(/\),(\s*)$/, `, ${fig}),$1`);
      else throw new Error("line ending not recognised: " + l.slice(-50));
    }
    lines[hit.i] = l;
    let text = lines.join("\n");
    if (p.fig && !text.includes(IMPORT)) { text = IMPORT + text; for (const x of plan) if (x.hit.f === hit.f) x.hit.i += 1; }
    fs.writeFileSync(hit.f, text);
  }
  console.log(`rewrote ${plan.length} source lines`);
  process.exit(0);
}

const pool = [];
for (const f of files) {
  const m = await import(pathToFileURL(f).href);
  for (const v of Object.values(m)) if (Array.isArray(v)) pool.push(...v.filter((q) => q && q.prompt));
}
const env = {};
for (const line of fs.readFileSync(".env.local", "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
const { createClient } = await import("@supabase/supabase-js");
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });
const CID = "4819065e-1703-478f-adb7-8226825be6aa";
let rows = [];
for (let from = 0; ; from += 1000) {
  const { data, error } = await db.from("bank_questions").select("*").eq("course_id", CID).order("id").range(from, from + 999);
  if (error) throw error;
  rows.push(...data);
  if (data.length < 1000) break;
}
rows = rows.filter((x) => x.kind !== "long_answer");
const APPLY = process.argv.includes("--apply");
if (APPLY) { const dir = path.join(ROOT, "mcr3u-bank-figures", "backup"); fs.mkdirSync(dir, { recursive: true }); fs.writeFileSync(path.join(dir, `bank-before-${new Date().toISOString().replace(/[:.]/g, "-")}.json`), JSON.stringify(rows.filter((x) => PATCH.some((p) => x.prompt.startsWith(p.old))), null, 1)); }

let bad = 0, updated = 0, withFig = 0, reworded = 0;
const key = (a, c) => (Array.isArray(c) ? (Array.isArray(a) ? a : [a]).map((id) => c.find((x) => x.id === id)?.text).sort().join("|") : JSON.stringify(a));
const same = (a, b) => (typeof a === "number" && typeof b === "number" ? Math.abs(a - b) < 1e-9 : false);
for (const p of PATCH) {
  const now = p.to ?? p.old;
  const dbHits = rows.filter((x) => x.prompt.startsWith(p.old) || (p.to && x.prompt.startsWith(now)));
  const srcHits = pool.filter((q) => q.prompt.startsWith(now));
  if (dbHits.length !== 1 || srcHits.length !== 1) { bad++; console.log(`MATCH db=${dbHits.length} src=${srcHits.length}: ${p.old.slice(0, 80)}`); continue; }
  const row = dbHits[0], q = srcHits[0];
  if (key(row.answer, row.choices) !== key(q.answer, q.choices) && !same(row.answer, q.answer)) { bad++; console.log(`ANSWER differs: ${p.old.slice(0, 60)}: ${key(row.answer, row.choices)} vs ${key(q.answer, q.choices)}`); continue; }
  if (p.fig && !q.fig) { bad++; console.log(`NO FIG in source: ${p.old.slice(0, 60)}`); continue; }
  if (p.fig && row.image_url && !row.image_url.includes("/mcr3u-fig/")) { bad++; console.log(`ALREADY HAS IMAGE: ${p.old.slice(0, 60)}`); continue; }
  const fields = { prompt: q.prompt, choices: q.choices ?? null, answer: q.answer, feedback: q.feedback };
  if (APPLY) {
    if (p.fig) {
      const svg = FIG[p.fig];
      const k = `mcr3u-fig/${p.fig}-${crypto.createHash("sha1").update(svg).digest("hex").slice(0, 8)}.svg`;
      const up = await db.storage.from("graph-images").upload(k, Buffer.from(svg), { upsert: true, contentType: "image/svg+xml" });
      if (up.error) throw up.error;
      fields.image_url = db.storage.from("graph-images").getPublicUrl(k).data.publicUrl;
    }
    const u = await db.from("bank_questions").update(fields).eq("id", row.id);
    if (u.error) throw u.error;
  }
  updated++; if (p.fig) withFig++; if (p.to) reworded++;
}
console.log(`${APPLY ? "UPDATED" : "would update"} ${updated} of ${PATCH.length} rows (${reworded} reworded, ${withFig} new figures); ${bad} problems`);
process.exit(bad ? 1 : 0);
