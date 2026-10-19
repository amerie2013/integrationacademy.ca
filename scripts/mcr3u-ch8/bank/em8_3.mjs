// 8.3 Compound Interest: Present Value — 20 easy + 20 medium questions
import { mc, ms, num, tf } from "./kit.mjs";
import { growthD, timelineD, pv, fv, periodsTo, c2 } from "./fig.mjs";

const S = String.raw;
const $ = (p, v, fb, fig = null) => num(p, c2(v), fb, fig, 0.02);

export const E = [
  $("Find the present value of 1100 dollars due in 1 year at 10%/a compounded annually (dollars).", 1000, "1100 ÷ 1.1."),
  $("Find the present value of 2000 dollars due in 3 years at 5%/a compounded annually (dollars).", pv(2000, 0.05, 3), "2000(1.05)⁻³."),
  $("Find the present value of 5000 dollars due in 2 years at 4%/a compounded annually (dollars).", pv(5000, 0.04, 2), "5000 ÷ 1.04²."),
  $("Find the present value of 800 dollars due in 4 years at 6%/a compounded annually (dollars).", pv(800, 0.06, 4), "800(1.06)⁻⁴."),
  $("Find the present value of 3000 dollars due in 2 years at 6%/a compounded semi-annually (dollars).", pv(3000, 0.03, 4), "i = 0.03, n = 4."),
  $("Find the present value of 1000 dollars due in 1 year at 12%/a compounded monthly (dollars).", pv(1000, 0.01, 12), "i = 0.01, n = 12."),
  mc("Which formula gives present value?", S`\(PV=A(1+i)^{-n}\)`, [S`\(PV=A(1+i)^n\)`, S`\(PV=\frac{A}{1+in}\)`, S`\(PV=A-in\)`], "Divide by the growth factor."),
  tf("The present value of a future amount is less than the amount (for a positive interest rate).", true, "It grows to reach the amount."),
  tf("A higher interest rate gives a higher present value.", false, "You need to invest less now."),
  mc("Which is worth more today at 5%/a: 1000 dollars now or 1000 dollars in 2 years?", "1000 dollars now", ["1000 dollars in 2 years", "they are equal", "it cannot be decided"], "Money now can earn interest."),
  num("Using the rule of 72, about how many years does money take to double at 6%/a?", 12, "72 ÷ 6."),
  num("Using the rule of 72, about how many years does money take to double at 9%/a?", 8, "72 ÷ 9."),
  num("How many whole years does money take to double at 10%/a compounded annually?", periodsTo(2, 0.1), "1.1ⁿ ≥ 2."),
  num("How many whole years does 1000 dollars take to reach 1200 dollars at 5%/a compounded annually?", periodsTo(1.2, 0.05), "1.05ⁿ ≥ 1.2."),
  $("Write 4000(1.05)⁻² as a dollar amount.", pv(4000, 0.05, 2), "4000 ÷ 1.1025."),
  $("How much must be invested now at 8%/a compounded annually to have 5000 dollars in 5 years (dollars)?", pv(5000, 0.08, 5), "5000(1.08)⁻⁵."),
  $("Find the present value of 10 000 dollars due in 10 years at 7%/a compounded annually (dollars).", pv(10000, 0.07, 10), "10 000 ÷ 1.07¹⁰."),
  num("Is 950 dollars now or 1000 dollars in one year better at 4%/a? Enter 1 for now, 2 for later.", 950 > pv(1000, 0.04, 1) ? 1 : 2, `PV of 1000 is ${c2(pv(1000, 0.04, 1))}.`),
  $("The time line shows 6000 dollars due in 4 years. Find its present value at 5%/a compounded annually (dollars).", pv(6000, 0.05, 4), "6000(1.05)⁻⁴.", timelineD(4, { 4: "6000" })),
  $("The graph shows an amount growing at 6%/a compounded annually to 7000 dollars in 8 years. What was invested at the start (dollars)?", pv(7000, 0.06, 8), "7000 ÷ 1.06⁸.", growthD([{ f: (t) => pv(7000, 0.06, 8) * 1.06 ** t }], 8, { pts: [[8, 7000, "7000"]] })),
];

export const M = [
  $("Find the present value of 15 000 dollars due in 6 years at 4.8%/a compounded monthly (dollars).", pv(15000, 0.004, 72), "i = 0.004, n = 72."),
  $("Find the present value of 25 000 dollars due in 12 years at 5.5%/a compounded quarterly (dollars).", pv(25000, 0.01375, 48), "i = 0.01375, n = 48."),
  $("Find the present value of 9000 dollars due in 5 years at 3.4%/a compounded semi-annually (dollars).", pv(9000, 0.017, 10), "i = 0.017, n = 10."),
  $("A debt of 4000 dollars is due in 3 years. What equivalent payment could be made today at 6%/a compounded annually (dollars)?", pv(4000, 0.06, 3), "PV of 4000."),
  $("Find the combined present value of 2000 dollars due in 2 years and 3000 dollars due in 5 years at 5%/a compounded annually (dollars).", pv(2000, 0.05, 2) + pv(3000, 0.05, 5), "Add the two present values."),
  num("How many quarters does it take 2000 dollars to grow to 2500 dollars at 6%/a compounded quarterly?", periodsTo(1.25, 0.015), "1.015ⁿ ≥ 1.25."),
  num("How many months does it take money to grow by 30% at 6%/a compounded monthly?", periodsTo(1.3, 0.005), "1.005ⁿ ≥ 1.3."),
  num("How many whole years does money take to triple at 8%/a compounded annually?", periodsTo(3, 0.08), "1.08ⁿ ≥ 3."),
  num("Offer A: 7000 dollars now. Offer B: 8500 dollars in 4 years. At 5%/a compounded annually, which is better? Enter 1 for A or 2 for B.", 7000 > pv(8500, 0.05, 4) ? 1 : 2, `PV of B: ${c2(pv(8500, 0.05, 4))}.`),
  ms("Which are equal to the present value of 1000 dollars due in 3 years at 5%/a compounded annually? Select all.", [S`\(1000(1.05)^{-3}\)`, S`\(\frac{1000}{1.05^3}\)`, `about ${c2(pv(1000, 0.05, 3))} dollars`, S`\(1000(0.95)^3\)`], [0, 1, 2], "Dividing by 1.05 is not the same as multiplying by 0.95."),
  mc("Which strategy can find n in A = P(1 + i)ⁿ without logarithms?", "guess and check powers of (1 + i)", ["divide A by i", "multiply P by n", "use simple interest instead"], "Try values of n."),
  tf("Doubling the time to maturity halves the present value.", false, "PV depends on (1 + i)⁻ⁿ, not on 1/n."),
  tf("The present value of an amount due in 0 years is the amount itself.", true, "(1 + i)⁰ = 1."),
  $("Parents want 40 000 dollars in 16 years. How much should they invest now at 4.5%/a compounded monthly (dollars)?", pv(40000, 0.045 / 12, 192), "i = 0.00375, n = 192."),
  $("A zero-coupon bond pays 5000 dollars in 7 years. What should it cost today if money earns 3.9%/a compounded semi-annually (dollars)?", pv(5000, 0.0195, 14), "i = 0.0195, n = 14."),
  num("At what annual rate (compounded annually) is 6000 dollars due in 5 years worth 4700 dollars today (%, 2 decimals)?", c2(((6000 / 4700) ** 0.2 - 1) * 100), "(6000/4700)^(1/5) − 1.", null, 0.01),
  num("How many whole years does money take to double at 3%/a compounded annually, and how close is the rule of 72? Enter the exact whole years.", periodsTo(2, 0.03), "1.03ⁿ ≥ 2; rule of 72 gives 24."),
  $("A payment of 12 000 dollars is due in 6 years. What equivalent payment is due in 2 years, at 5%/a compounded annually (dollars)?", pv(12000, 0.05, 4), "Move it back 4 years."),
  $("Read the time line: find the total present value at 6%/a compounded annually (dollars).", pv(1500, 0.06, 2) + pv(2500, 0.06, 5), "Discount each payment.", timelineD(5, { 2: "1500", 5: "2500" })),
  num("The graph shows the present value of 10 000 dollars due in t years at some rate. Read the value at t = 10 years to the nearest dollar.", Math.round(pv(10000, 0.05, 10)), "10 000(1.05)⁻¹⁰.", growthD([{ f: (t) => pv(10000, 0.05, t) }], 20, { ylabel: "PV", pts: [[10, pv(10000, 0.05, 10), `t = 10`]] }), 1),
];
