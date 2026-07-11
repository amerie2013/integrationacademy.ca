// MBF3C Unit 3 — Personal Finance: question bank (60 per topic).
// 3.1 reuses MCF3M 4.1 (simple & compound interest). 3.2 / 3.3 authored fresh.
// Currency uses \$ (escaped) so it renders as a literal dollar sign, never starting math.
import { mc, ms, tf, num, fill, order, match } from "../bank-mpm2d/helpers.mjs";
import mcf3m4 from "../bank-mcf3m/u4.mjs";

const g4 = Object.fromEntries(mcf3m4.map((t) => [t.code, t.gen]));

// ── 3.2 Saving, Investing & Credit ───────────────────────────
function g32() {
  const q = [];
  q.push(mc("easy", "Monthly interest rate for a 12%/yr card:", ["1%", "12%", "0.1%", "6%"], 0));
  q.push(mc("easy", "Which is riskier?", ["stocks", "a savings account", "a GIC", "a chequing account"], 0));
  q.push(mc("easy", "Interest on a \\$1000 balance at 24%/yr for one month:", ["\\$20", "\\$240", "\\$2", "\\$10"], 0));
  q.push(mc("easy", "Not paying a credit-card balance means:", ["interest is charged", "it is free", "you earn interest", "nothing happens"], 0));
  q.push(mc("easy", "A GIC is generally:", ["low-risk", "high-risk", "a credit card", "a loan"], 0));
  q.push(mc("easy", "A debit card:", ["spends your own money", "borrows money", "always charges interest", "is a loan"], 0));
  q.push(ms("easy", "Comparing accounts:", ["total each option's fees", "pick the lower cost", "count transactions", "ignore fees"], [0, 1, 2]));
  q.push(ms("easy", "Credit-card costs:", ["interest on the unpaid balance", "monthly rate = annual ÷ 12", "grows if unpaid", "free if unpaid"], [0, 1, 2]));
  q.push(ms("easy", "Risk vs return:", ["higher return → higher risk", "savings is low-risk", "stocks are higher-risk", "all are equal"], [0, 1, 2]));
  q.push(ms("easy", "Examples of investments:", ["a GIC", "stocks", "mutual funds", "a credit card"], [0, 1, 2]));
  q.push(tf("easy", "A monthly rate is the annual rate divided by 12.", true));
  q.push(tf("easy", "Carrying a credit-card balance is free.", false));
  q.push(tf("easy", "Stocks are higher-risk than a savings account.", true));
  q.push(fill("easy", "Monthly rate for 18%/yr (decimal).", ["0.015"]));
  q.push(fill("easy", "Interest on a \\$1000 balance at 24%/yr for one month.", ["20", "$20"]));
  q.push(fill("easy", "Riskier: a savings account or stocks?", ["stocks"]));
  q.push(num("easy", "Interest on a \\$2000 balance at 18%/yr for one month.", 30, 0));
  q.push(num("easy", "Monthly rate (%) for a 24%/yr card.", 2, 0));
  q.push(num("easy", "Interest on a \\$500 balance at 12%/yr for one month.", 5, 0));
  q.push(match("easy", "Match each to its risk level.", ["savings account", "GIC", "stocks"], ["low", "low", "high"], [0, 1, 2]));
  q.push(mc("medium", "A \\$2000 GIC at 3% compounded annually for 2 years:", ["\\$2121.80", "\\$2120", "\\$2060", "\\$2000"], 0));
  q.push(mc("medium", "Interest on a \\$1500 balance at 19.9%/yr for one month:", ["\\$24.88", "\\$298.50", "\\$24", "\\$30"], 0));
  q.push(mc("medium", "Account A: \\$10/mo flat. Account B: \\$0.50 × 25. Cheaper?", ["A", "B", "equal", "cannot tell"], 0));
  q.push(mc("medium", "Interest on a \\$1200 purchase paid 30 days late at 20%/yr (simple):", ["\\$19.73", "\\$240", "\\$20", "\\$72"], 0));
  q.push(mc("medium", "A \\$1000 balance for one month: 19.9% vs 21.5% card —", ["19.9% is cheaper", "21.5% is cheaper", "equal", "cannot tell"], 0));
  q.push(mc("medium", "A \\$3000 GIC at 4% compounded annually for 2 years:", ["\\$3244.80", "\\$3240", "\\$3120", "\\$3000"], 0));
  q.push(ms("medium", "A \\$2000 GIC at 3% for 2 yr:", ["$2000(1.03)^2$", "compound interest", "$\\approx\\$2121.80$", "simple interest"], [0, 1, 2]));
  q.push(ms("medium", "Cost of a \\$1500 purchase 55 days late at 19.9%:", ["$I=Prt$", "$t=55/365$", "$\\approx\\$45$", "$t=55$"], [0, 1, 2]));
  q.push(ms("medium", "Choosing the cheaper account:", ["compute each cost", "compare totals", "lower wins", "higher wins"], [0, 1, 2]));
  q.push(ms("medium", "The cost of credit depends on:", ["the interest rate", "the time unpaid", "the balance", "nothing"], [0, 1, 2]));
  q.push(tf("medium", "A \\$2000 GIC at 3% for 2 yr is about \\$2121.80.", true));
  q.push(tf("medium", "A \\$1500 balance at 19.9% costs about \\$24.88 for one month.", true));
  q.push(tf("medium", "A 19.9% card costs more per month than a 21.5% card on the same balance.", false));
  q.push(fill("medium", "A \\$2000 GIC at 3% annually for 2 yr (to cents).", ["2121.80", "2121.8"]));
  q.push(fill("medium", "Interest on a \\$1500 balance at 19.9% for one month (to cents).", ["24.88"]));
  q.push(fill("medium", "Cheaper: A \\$10/mo or B \\$0.50 × 25?", ["A"]));
  q.push(num("medium", "A \\$3000 GIC at 4% for 2 yr (to cents).", 3244.80, 0.5));
  q.push(num("medium", "Interest on a \\$1000 balance at 19.9% for one month (to cents).", 16.58, 0.1));
  q.push(num("medium", "Interest on a \\$1200 purchase 30 days late at 20% (to cents).", 19.73, 0.2));
  q.push(match("medium", "Match each to its value.", ["GIC \\$2000, 3%, 2yr", "card \\$1500, 19.9%, 1 mo", "interest \\$2000, 18%, 1 mo"], ["$\\approx2121.80$", "$\\approx24.88$", "$30$"], [0, 1, 2]));
  q.push(mc("hard", "A \\$1500 purchase on a 19.9% card, paid 55 days late: interest $\\approx$", ["\\$45", "\\$298", "\\$24.88", "\\$30"], 0));
  q.push(mc("hard", "Interest on a \\$2500 balance at 19.9%/yr for one month:", ["\\$41.46", "\\$497.50", "\\$24.88", "\\$50"], 0));
  q.push(mc("hard", "Cost of a \\$1500 purchase 45 days late at 19.9% (simple):", ["\\$36.80", "\\$298", "\\$45", "\\$30"], 0));
  q.push(mc("hard", "A \\$4000 balance unpaid 2 months at 18% (compounded monthly): interest $\\approx$", ["\\$120.90", "\\$120", "\\$60", "\\$144"], 0));
  q.push(mc("hard", "Which GIC pays more: \\$2000 at 3% for 3 yr or \\$2000 at 4% for 2 yr?", ["3% for 3 yr", "4% for 2 yr", "equal", "cannot tell"], 0));
  q.push(ms("hard", "Cost of a \\$1500 purchase 55 days late:", ["$I=Prt$", "$1500(0.199)(55/365)$", "$\\approx\\$45$", "total $\\approx\\$1545$"], [0, 1, 2, 3]));
  q.push(ms("hard", "Interest on a \\$2500 balance for one month:", ["monthly rate $0.199/12$", "$2500(0.01658)$", "$\\approx\\$41.46$", "$\\approx\\$50$"], [0, 1, 2]));
  q.push(ms("hard", "A \\$4000 balance unpaid 2 months:", ["$i=0.015$", "$4000(1.015)^2$", "$\\approx\\$4120.90$", "interest $\\approx\\$120.90$"], [0, 1, 2, 3]));
  q.push(ms("hard", "Comparing two GICs:", ["compute each amount", "longer time & higher rate matter", "compare totals", "guess"], [0, 1, 2]));
  q.push(tf("hard", "A \\$1500 purchase paid 55 days late at 19.9% costs about \\$45 interest.", true));
  q.push(tf("hard", "A \\$2500 balance at 19.9% costs about \\$41.46 for one month.", true));
  q.push(tf("hard", "A \\$1500 purchase paid 45 days late at 19.9% costs about \\$60 interest.", false));
  q.push(fill("hard", "Interest on a \\$1500 card balance, 55 days, 19.9% (to cents).", ["45.00", "45"]));
  q.push(fill("hard", "Interest on a \\$2500 card balance, 1 month, 19.9% (to cents).", ["41.46"]));
  q.push(fill("hard", "Total to pay for a \\$1500 computer plus 55-day interest.", ["1545", "$1545"]));
  q.push(num("hard", "Interest on \\$1500 at 19.9% for 55 days (to cents).", 45.00, 0.5));
  q.push(num("hard", "Interest on \\$2500 at 19.9% for one month (to cents).", 41.46, 0.2));
  q.push(num("hard", "Interest on \\$1500 at 19.9% for 45 days (to cents).", 36.80, 0.3));
  q.push(order("hard", "Order the steps to cost a \\$1500 purchase paid 55 days late at 19.9%.", ["Use $I=Prt$", "$t=55/365$ years", "$1500(0.199)(55/365)$", "$\\approx\\$45.00$"]));
  q.push(match("hard", "Match each card cost.", ["\\$1500, 55 days, 19.9%", "\\$2500, 1 month, 19.9%", "\\$1500, 45 days, 19.9%"], ["$\\approx45$", "$\\approx41.46$", "$\\approx36.80$"], [0, 1, 2]));
  return q;
}

// ── 3.3 Owning & Operating a Vehicle ─────────────────────────
function g33() {
  const q = [];
  q.push(mc("easy", "The fuel-cost formula is:", ["$(\\text{km}/100)\\times(\\text{L}/100\\text{km})\\times\\text{price}$", "$\\text{km}\\times\\text{price}$", "$\\text{L}\\times\\text{km}$", "$\\text{price}/\\text{km}$"], 0));
  q.push(mc("easy", "Insurance of \\$1800/yr is, per month:", ["\\$150", "\\$1800", "\\$18", "\\$216"], 0));
  q.push(mc("easy", "Depreciation is:", ["the yearly loss of value", "a yearly gain", "the fuel cost", "the insurance"], 0));
  q.push(mc("easy", "Total cost of ownership includes:", ["financing, insurance, fuel, maintenance", "only fuel", "only the price", "only insurance"], 0));
  q.push(mc("easy", "Cost per km equals:", ["total annual cost ÷ km/yr", "km ÷ cost", "cost × km", "fuel only"], 0));
  q.push(mc("easy", "A car losing value over time shows:", ["depreciation", "appreciation", "interest", "inflation"], 0));
  q.push(ms("easy", "Fuel cost:", ["$(\\text{km}/100)\\times\\text{L}/100\\text{km}\\times\\text{price}$", "more km → more fuel", "more efficient → less fuel", "independent of price"], [0, 1, 2]));
  q.push(ms("easy", "Total cost of ownership:", ["financing", "insurance", "fuel & maintenance", "fuel only"], [0, 1, 2]));
  q.push(ms("easy", "Depreciation:", ["value $=$ price$(1-r)^t$", "exponential decay", "loses value yearly", "gains value"], [0, 1, 2]));
  q.push(ms("easy", "Cost per km:", ["total ÷ km", "lower is cheaper to run", "compares vehicles", "total × km"], [0, 1, 2]));
  q.push(tf("easy", "Insurance quoted per year is divided by 12 for the monthly cost.", true));
  q.push(tf("easy", "A car appreciates (gains value) each year.", false));
  q.push(tf("easy", "Depreciation is exponential decay.", true));
  q.push(fill("easy", "Monthly insurance for \\$1800/yr.", ["150", "$150"]));
  q.push(fill("easy", "Fuel: 10000 km, 9 L/100 km, \\$1.40/L.", ["1260", "$1260"]));
  q.push(fill("easy", "Value after 1 yr of a \\$30000 car losing 15%.", ["25500", "$25500"]));
  q.push(num("easy", "Fuel: 12000 km, 8 L/100 km, \\$1.50/L.", 1440, 0));
  q.push(num("easy", "Monthly insurance for \\$2400/yr.", 200, 0));
  q.push(num("easy", "Value after 1 yr of a \\$25000 car losing 20%.", 20000, 0));
  q.push(match("easy", "Match each cost.", ["insurance \\$1800/yr", "fuel 12000km 8L \\$1.50", "depreciation \\$30000 15% 1yr"], ["\\$150/mo", "\\$1440", "\\$25500"], [0, 1, 2]));
  q.push(mc("medium", "Total: 4000 + 1800 + 1440 + 600 =", ["\\$7840", "\\$7000", "\\$8000", "\\$6840"], 0));
  q.push(mc("medium", "Cost per km for \\$7840/yr over 12000 km:", ["\\$0.65", "\\$1.53", "\\$6.53", "\\$0.50"], 0));
  q.push(mc("medium", "Fuel: 15000 km, 7 L/100 km, \\$1.60/L:", ["\\$1680", "\\$1050", "\\$1600", "\\$2400"], 0));
  q.push(mc("medium", "A \\$30000 car at 15%/yr — value after 2 years:", ["\\$21675", "\\$25500", "\\$21000", "\\$22500"], 0));
  q.push(mc("medium", "A \\$20000 car at 10%/yr — value after 1 year:", ["\\$18000", "\\$2000", "\\$22000", "\\$19000"], 0));
  q.push(mc("medium", "Cost per km for \\$9000/yr over 15000 km:", ["\\$0.60", "\\$1.67", "\\$0.90", "\\$0.50"], 0));
  q.push(ms("medium", "Total annual cost:", ["add all categories", "financing + insurance + fuel + maintenance", "$=\\$7840$ for the example", "fuel only"], [0, 1, 2]));
  q.push(ms("medium", "Cost per km:", ["total ÷ km", "$7840/12000$", "$\\approx\\$0.65$", "$12000/7840$"], [0, 1, 2]));
  q.push(ms("medium", "Depreciation over 2 years:", ["value $=30000(0.85)^2$", "$=30000(0.7225)$", "$=\\$21675$", "$=30000(0.70)$"], [0, 1, 2]));
  q.push(ms("medium", "Fuel for 15000 km:", ["$(15000/100)\\times7\\times1.60$", "$=150\\times7\\times1.60$", "$=\\$1680$", "$=15000\\times1.60$"], [0, 1, 2]));
  q.push(tf("medium", "The total of 4000 + 1800 + 1440 + 600 is \\$7840.", true));
  q.push(tf("medium", "Cost per km for \\$7840/yr over 12000 km is about \\$0.65.", true));
  q.push(tf("medium", "A \\$30000 car at 15%/yr is worth \\$22500 after 2 years.", false));
  q.push(fill("medium", "Total annual: 4000 + 1800 + 1440 + 600.", ["7840", "$7840"]));
  q.push(fill("medium", "Cost per km: \\$7840 over 12000 km.", ["0.65", "$0.65"]));
  q.push(fill("medium", "Value after 2 yr of a \\$30000 car losing 15%.", ["21675", "$21675"]));
  q.push(num("medium", "Fuel: 15000 km, 7 L/100 km, \\$1.60/L.", 1680, 0));
  q.push(num("medium", "Cost per km: \\$9000 over 15000 km.", 0.60, 0.01));
  q.push(num("medium", "Value after 2 yr of a \\$30000 car at 15% decay.", 21675, 0));
  q.push(match("medium", "Match each.", ["total 4000+1800+1440+600", "cost/km \\$7840 over 12000", "fuel 15000km 7L \\$1.60"], ["\\$7840", "$\\approx0.65$", "\\$1680"], [0, 1, 2]));
  q.push(mc("hard", "Value of a \\$28000 car after 3 yr at 15%/yr:", ["\\$17195.50", "\\$15400", "\\$19600", "\\$16450"], 0));
  q.push(mc("hard", "Fuel: 18000 km, 9 L/100 km, \\$1.55/L:", ["\\$2511", "\\$2790", "\\$1620", "\\$2511.50"], 0));
  q.push(mc("hard", "Cost per km for \\$9000/yr over 18000 km:", ["\\$0.50", "\\$2.00", "\\$0.90", "\\$0.45"], 0));
  q.push(mc("hard", "Car A: \\$0.60/km; Car B: \\$0.52/km, over 15000 km. Cheaper to run?", ["B by \\$1200", "A by \\$1200", "equal", "cannot tell"], 0));
  q.push(mc("hard", "A \\$30000 car at 15%/yr first drops below \\$20000 after:", ["3 years", "2 years", "4 years", "5 years"], 0));
  q.push(ms("hard", "Value of a \\$28000 car after 3 yr (15%):", ["$28000(0.85)^3$", "$0.85^3\\approx0.6141$", "$\\approx\\$17195.50$", "$28000(0.55)$"], [0, 1, 2]));
  q.push(ms("hard", "Fuel for 18000 km (9 L, \\$1.55):", ["$(18000/100)\\times9\\times1.55$", "$180\\times9\\times1.55$", "$=\\$2511$", "$18000\\times1.55$"], [0, 1, 2]));
  q.push(ms("hard", "Comparing run cost:", ["cost/km × km", "difference × km", "B saves \\$1200", "they're equal"], [0, 1, 2]));
  q.push(ms("hard", "Depreciation over time:", ["multiply by $(1-r)$ each year", "exponential decay", "value keeps falling", "value rises"], [0, 1, 2]));
  q.push(tf("hard", "A \\$28000 car at 15%/yr is worth about \\$17195.50 after 3 years.", true));
  q.push(tf("hard", "Fuel for 18000 km at 9 L/100 km and \\$1.55/L is \\$2511.", true));
  q.push(tf("hard", "A car gains value as it ages.", false));
  q.push(fill("hard", "Value of a \\$28000 car after 3 yr at 15% (to cents).", ["17195.50", "17195.5"]));
  q.push(fill("hard", "Fuel: 18000 km, 9 L/100 km, \\$1.55/L.", ["2511", "$2511"]));
  q.push(fill("hard", "Cost per km: \\$9000 over 18000 km.", ["0.50", "$0.50"]));
  q.push(num("hard", "Value of a \\$28000 car after 3 yr at 15% (nearest dollar).", 17196, 2));
  q.push(num("hard", "Fuel: 18000 km, 9 L/100 km, \\$1.55/L.", 2511, 0));
  q.push(num("hard", "Cost per km: \\$9000 over 18000 km.", 0.50, 0.01));
  q.push(order("hard", "Order the steps to find a \\$28000 car's value after 3 years at 15%/yr.", ["Decay factor $1-0.15=0.85$", "Value $=28000(0.85)^3$", "$0.85^3\\approx0.6141$", "$\\approx\\$17195.50$"]));
  q.push(match("hard", "Match each to its value.", ["\\$28000, 15%, 3 yr", "fuel 18000km 9L \\$1.55", "cost/km \\$9000 over 18000"], ["$\\approx17195.50$", "\\$2511", "\\$0.50"], [0, 1, 2]));
  return q;
}

export default [
  { code: "3.1", gen: g4["4.1"] }, // Simple & Compound Interest (= MCF3M 4.1)
  { code: "3.2", gen: g32 },        // Saving, Investing & Credit
  { code: "3.3", gen: g33 },        // Owning & Operating a Vehicle
];
