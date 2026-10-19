// 8.3 Compound Interest: Present Value — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { growthD, timelineD, pv, fv, periodsTo, c2 } from "./fig.mjs";

const S = String.raw;
const $ = (p, v, fb, fig = null) => num(p, c2(v), fb, fig, 0.02);

export const TOPIC = "8.3 Compound Interest: Present Value";
export const Q = [
  $("You owe 5000 dollars in 2 years and 8000 dollars in 6 years. What single payment in 4 years settles both, at 5%/a compounded annually (dollars)?", fv(5000, 0.05, 2) + pv(8000, 0.05, 2), "Move 5000 forward 2 years and 8000 back 2 years."),
  $("Offer A pays 3000 dollars now and 3000 dollars in 3 years. Offer B pays 6500 dollars in 3 years. At 6%/a compounded annually, find the present value of A (dollars).", 3000 + pv(3000, 0.06, 3), "3000 + 3000(1.06)⁻³."),
  num("For the offers above (A: 3000 now + 3000 in 3 years; B: 6500 in 3 years), which is better at 6%? Enter 1 for A or 2 for B.", 3000 + pv(3000, 0.06, 3) > pv(6500, 0.06, 3) ? 1 : 2, `PV(B) = ${c2(pv(6500, 0.06, 3))}.`),
  num("How many months does 4000 dollars take to grow to 5000 dollars at 4.8%/a compounded monthly?", periodsTo(1.25, 0.004), "1.004ⁿ ≥ 1.25."),
  num("How many quarters does money take to double at 5%/a compounded quarterly?", periodsTo(2, 0.0125), "1.0125ⁿ ≥ 2."),
  num("At what annual rate compounded annually does money double in exactly 9 years (%, 2 decimals)?", c2((2 ** (1 / 9) - 1) * 100), "2^(1/9) − 1.", null, 0.01),
  num("At what annual rate compounded quarterly is 10 000 dollars due in 8 years worth 7000 dollars today (%, 2 decimals)?", c2(((10000 / 7000) ** (1 / 32) - 1) * 4 * 100), "(10/7)^(1/32) − 1, then × 4.", null, 0.01),
  $("A loan is repaid with 2500 dollars in 1 year and 2500 dollars in 2 years at 8%/a compounded quarterly. How much was borrowed (dollars)?", pv(2500, 0.02, 4) + pv(2500, 0.02, 8), "Discount each payment."),
  tf("If the rate doubles, the present value of a future amount is halved.", false, "PV depends on (1 + i)⁻ⁿ, which does not halve."),
  tf("The present value of 1000 dollars in 10 years at 7% is less than half of 1000 dollars.", true, `1.07¹⁰ ≈ ${(1.07 ** 10).toFixed(3)} > 2.`),
  ms("Which strategies find n in 1.05ⁿ = 1.6? Select all.", ["guess and check powers of 1.05", "graph y = 1.05ˣ and y = 1.6 and find the intersection", "use a table of values", "divide 1.6 by 1.05"], [0, 1, 2], "1.6 ÷ 1.05 is not n."),
  mc("Which payment has the greatest present value at 6%/a compounded annually?", "5000 dollars in 1 year", ["5250 dollars in 2 years", "5600 dollars in 3 years", "5900 dollars in 4 years"], `PVs: ${[[5000, 1], [5250, 2], [5600, 3], [5900, 4]].map(([a, n]) => c2(pv(a, 0.06, n))).join(", ")}.`),
  $("A lottery pays 50 000 dollars now and 50 000 dollars in 5 years. What is it worth today at 4.2%/a compounded monthly (dollars)?", 50000 + pv(50000, 0.0035, 60), "50 000 + PV of the second payment."),
  num("To the nearest dollar, how much more must be invested now at 3%/a than at 6%/a (both compounded annually) to have 20 000 dollars in 10 years?", Math.round(pv(20000, 0.03, 10) - pv(20000, 0.06, 10)), "Difference of the two present values.", null, 1),
  $("A debt of 7000 dollars due in 5 years is replaced by two equal payments, now and in 5 years. At 5%/a compounded annually, find each payment (dollars).", 7000 / (1 + 1.05 ** 5), "x(1.05)⁵ + x = 7000 at year 5."),
  num("How many whole years until 1000 dollars at 9%/a compounded annually exceeds 1000 dollars at 6%/a compounded annually by more than 500 dollars?", (() => { let t = 1; while (fv(1000, 0.09, t) - fv(1000, 0.06, t) <= 500) t++; return t; })(), "Compare year by year."),
  $("Read the time line: find the total present value at 4%/a compounded semi-annually (dollars).", pv(3000, 0.02, 4) + pv(3000, 0.02, 8) + pv(3000, 0.02, 12), "Discount each payment (2, 4, 6 years).", timelineD(6, { 2: "3000", 4: "3000", 6: "3000" })),
  num("The graph shows 2000 dollars growing at 6%/a compounded annually. Read the year when it first exceeds 4000 dollars.", periodsTo(2, 0.06), "Doubling time at 6%.", growthD([{ f: (t) => 2000 * 1.06 ** t }], 16, { lines: [{ m: 0, b: 4000, color: "amber", dash: true }] })),
  num("The graph shows the PV of 10 000 dollars due in t years. Find the rate (annual compounding, %) if the PV at 10 years is shown.", 4, `PV(10) = ${c2(pv(10000, 0.04, 10))}: (10 000/PV)^(1/10) − 1.`, growthD([{ f: (t) => pv(10000, 0.04, t) }], 20, { ylabel: "PV", pts: [[10, pv(10000, 0.04, 10), `(10, ${c2(pv(10000, 0.04, 10))})`]] }), 0.01),
  $("Read the time line: a car is paid with 5000 dollars now and 10 000 dollars in 2 years. What is the cash price today at 7.2%/a compounded monthly (dollars)?", 5000 + pv(10000, 0.006, 24), "5000 + 10 000(1.006)⁻²⁴.", timelineD(2, { 2: "10 000" }, "5000")),
];
