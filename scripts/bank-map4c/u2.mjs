// MAP4C Unit 2 — Personal Finance: question bank.
// 60 per topic: 20 easy / 20 medium / 20 hard.
// Formulas: SI I=Prt, A=P(1+rt); CI A=P(1+i)^n;
//   FV annuity R[((1+i)^n-1)/i]; PV annuity R[(1-(1+i)^-n)/i];
//   mortgage payment R=PV·i/(1-(1+i)^-n).
import { mc, ms, tf, num, fill } from "./helpers.mjs";

// ── 2.1 Simple & Compound Interest ───────────────────────────
function g21() {
  const q = [];
  // EASY
  q.push(mc("easy", "Simple interest formula:", ["$I=Prt$", "$I=P+rt$", "$I=\\frac{Pr}{t}$", "$I=Prt^2$"], 0));
  q.push(mc("easy", "Compound amount formula:", ["$A=P(1+i)^n$", "$A=P+in$", "$A=Pin$", "$A=P(1+i)n$"], 0));
  q.push(mc("easy", "\\$500 at $4\\%$/yr simple for 3 yr earns:", ["\\$60", "\\$20", "\\$600", "\\$560"], 0));
  q.push(mc("easy", "In $A=P(1+i)^n$, $i$ is the:", ["rate per period", "principal", "number of years", "total interest"], 0));
  q.push(mc("easy", "In $A=P(1+i)^n$, $n$ is the:", ["number of compounding periods", "rate", "principal", "interest"], 0));
  q.push(mc("easy", "\\$800 at $6\\%$/yr simple for 5 yr earns:", ["\\$240", "\\$48", "\\$1040", "\\$300"], 0));
  q.push(mc("easy", "Compound interest earns interest on:", ["principal and past interest", "principal only", "interest only", "nothing"], 0));
  q.push(ms("easy", "Which are true of simple interest?", ["$I=Prt$", "interest is constant each year", "interest compounds", "linear growth"], [0, 1, 3]));
  q.push(ms("easy", "Which describe compound interest?", ["$A=P(1+i)^n$", "interest on interest", "exponential growth", "constant interest"], [0, 1, 2]));
  q.push(ms("easy", "A $6\\%$ annual rate compounded monthly gives:", ["$i=0.005$", "$i=0.06/12$", "$i=0.06$", "$i=0.72$"], [0, 1]));
  q.push(tf("easy", "Simple interest grows linearly.", true));
  q.push(tf("easy", "Compound interest grows exponentially.", true));
  q.push(tf("easy", "Compound interest earns interest only on the principal.", false, "It also earns on accumulated interest."));
  q.push(tf("easy", "For $6\\%$/yr compounded monthly, $i=0.005$.", true));
  q.push(num("easy", "\\$500 at $4\\%$/yr simple, 3 yr: interest (dollars).", 60, 0));
  q.push(num("easy", "\\$1000 at $5\\%$/yr simple, 2 yr: interest (dollars).", 100, 0));
  q.push(num("easy", "\\$800 at $6\\%$/yr simple, 5 yr: interest (dollars).", 240, 0));
  q.push(num("easy", "\\$500 at $4\\%$/yr simple, 3 yr: total amount (dollars).", 560, 0));
  q.push(fill("easy", "The simple-interest formula is $I=P\\,r\\,$___.", ["t"]));
  q.push(fill("easy", "For $12\\%$/yr compounded monthly, $i=$ ___ (decimal).", ["0.01"]));
  // MEDIUM
  q.push(mc("medium", "\\$1000 at $5\\%$/yr compounded annually, 2 yr:", ["\\$1102.50", "\\$1100", "\\$1105", "\\$1050"], 0));
  q.push(mc("medium", "\\$2000 at $6\\%$/yr compounded annually, 3 yr:", ["\\$2382.03", "\\$2360", "\\$2400", "\\$2382"], 0));
  q.push(mc("medium", "\\$5000 at $4\\%$/yr compounded annually, 10 yr:", ["\\$7401.22", "\\$7000", "\\$7400", "\\$7200"], 0));
  q.push(mc("medium", "\\$1200 at $3.5\\%$/yr simple, 4 yr: interest:", ["\\$168", "\\$42", "\\$1368", "\\$150"], 0));
  q.push(mc("medium", "\\$3000 at $5\\%$/yr compounded quarterly, 2 yr:", ["\\$3313.46", "\\$3300", "\\$3315", "\\$3306.08"], 0));
  q.push(mc("medium", "\\$1500 at $6\\%$/yr compounded monthly, 3 yr:", ["\\$1795.02", "\\$1770", "\\$1800", "\\$1590"], 0));
  q.push(mc("medium", "For $8\\%$/yr compounded quarterly, the rate per period is:", ["$0.02$", "$0.08$", "$0.32$", "$0.04$"], 0));
  q.push(mc("medium", "For $5\\%$/yr compounded semi-annually over 4 yr, $n=$", ["$8$", "$4$", "$2$", "$20$"], 0));
  q.push(ms("medium", "For \\$1000 at $5\\%$/yr compounded annually, 2 yr, which are true?", ["$A=1000(1.05)^2$", "$A=\\$1102.50$", "interest \\$102.50", "$A=\\$1100$"], [0, 1, 2]));
  q.push(ms("medium", "Which give more interest than simple interest?", ["annual compounding", "monthly compounding", "quarterly compounding", "none"], [0, 1, 2]));
  q.push(tf("medium", "\\$1000 at $5\\%$/yr compounded annually for 2 yr gives \\$1102.50.", true));
  q.push(tf("medium", "More frequent compounding earns more interest.", true));
  q.push(num("medium", "\\$1000 at $5\\%$/yr compounded annually, 2 yr (dollars, 2 dp).", 1102.5, 0.5));
  q.push(num("medium", "\\$2000 at $6\\%$/yr compounded annually, 3 yr (dollars, 2 dp).", 2382.03, 0.5));
  q.push(num("medium", "\\$5000 at $4\\%$/yr compounded annually, 10 yr (dollars).", 7401.22, 1));
  q.push(num("medium", "\\$1200 at $3.5\\%$/yr simple, 4 yr: interest (dollars).", 168, 0));
  q.push(fill("medium", "\\$1500 at $6\\%$/yr compounded monthly, 3 yr $\\approx$ \\$___ (2 dp).", ["1795.02"]));
  q.push(fill("medium", "For $8\\%$/yr compounded quarterly, $i=$ ___ (decimal).", ["0.02"]));
  q.push(mc("medium", "\\$2500 at $4\\%$/yr simple, 6 yr: total amount:", ["\\$3100", "\\$600", "\\$2600", "\\$3000"], 0));
  q.push(mc("medium", "Which grows faster over 20 yr: $5\\%$ simple or $5\\%$ compound?", ["compound", "simple", "equal", "neither grows"], 0));
  // HARD
  q.push(mc("hard", "\\$1000 at $8\\%$/yr for 5 yr: compound minus simple interest:", ["\\$69.33", "\\$0", "\\$400", "\\$100"], 0));
  q.push(mc("hard", "\\$4000 grows to \\$5000 in 4 yr (simple). The rate is:", ["$6.25\\%$", "$5\\%$", "$25\\%$", "$1.25\\%$"], 0));
  q.push(mc("hard", "\\$2000 at $6\\%$/yr compounded monthly, how long to double? (nearest yr)", ["$12$", "$8$", "$6$", "$16$"], 0));
  q.push(mc("hard", "\\$1000 at $5\\%$ compounded annually reaches \\$1500 in about:", ["$8.3$ yr", "$5$ yr", "$10$ yr", "$3$ yr"], 0));
  q.push(mc("hard", "\\$3000 at $5\\%$/yr compounded quarterly, 2 yr:", ["\\$3313.46", "\\$3300", "\\$3306.08", "\\$3315"], 0));
  q.push(mc("hard", "Which principal gives \\$100 simple interest at $4\\%$/yr over 2 yr?", ["\\$1250", "\\$1000", "\\$500", "\\$2000"], 0));
  q.push(mc("hard", "\\$5000 compounded annually to \\$6749.18 in 6 yr. The rate is:", ["$5\\%$", "$4\\%$", "$6\\%$", "$3\\%$"], 0));
  q.push(mc("hard", "Interest on \\$200000 mortgage total \\$1288.60/mo over 300 payments:", ["\\$186580.84", "\\$200000", "\\$386580.84", "\\$88580"], 0));
  q.push(ms("hard", "For \\$1000 at $8\\%$, 5 yr, which are true?", ["CI $\\approx\\$1469.33$", "SI $=\\$1400$", "CI $>$ SI", "SI $>$ CI"], [0, 1, 2]));
  q.push(ms("hard", "To find the doubling time of an investment you can:", ["set $(1+i)^n=2$", "use a graph/table", "solve $1.005^n=2$", "double the rate"], [0, 1, 2]));
  q.push(tf("hard", "\\$1000 at $8\\%$ for 5 yr earns about \\$69.33 more compounded than simple.", true));
  q.push(tf("hard", "A \\$200000 mortgage at $1288.60/mo for 300 payments repays about \\$386580.84 total.", true));
  q.push(tf("hard", "Doubling time depends only on the rate, not the principal.", true));
  q.push(tf("hard", "Halving the compounding period halves the total interest.", false, "More frequent compounding raises interest."));
  q.push(num("hard", "\\$1000 at $8\\%$, 5 yr: compound $-$ simple interest (dollars, 2 dp).", 69.33, 0.5));
  q.push(num("hard", "\\$4000 to \\$5000 in 4 yr simple: the annual rate as a percent.", 6.25, 0.05));
  q.push(num("hard", "Total repaid on \\$1288.60/mo for 300 payments (dollars).", 386580, 5));
  q.push(num("hard", "Total interest on that \\$200000 mortgage (dollars).", 186580, 5));
  q.push(fill("hard", "\\$1000 doubling at $6\\%$/yr compounded monthly takes about ___ years (whole).", ["12"]));
  q.push(fill("hard", "\\$1000 at $8\\%$, 5 yr, compounded annually $\\approx$ \\$___ (2 dp).", ["1469.33"]));
  return q;
}

// ── 2.2 Annuities: Future Value ──────────────────────────────
function g22() {
  const q = [];
  // EASY
  q.push(mc("easy", "An annuity is:", ["equal payments at regular intervals", "one lump sum", "a single interest payment", "a random deposit"], 0));
  q.push(mc("easy", "Future value of an annuity formula:", ["$FV=R\\dfrac{(1+i)^n-1}{i}$", "$FV=R(1+i)^n$", "$FV=\\dfrac{R}{i}$", "$FV=Rni$"], 0));
  q.push(mc("easy", "In the FV formula, $R$ is the:", ["regular payment", "rate", "number of periods", "future value"], 0));
  q.push(mc("easy", "FV of an annuity is its value:", ["at the end (accumulated)", "at the start", "halfway", "before any deposits"], 0));
  q.push(mc("easy", "A regular monthly deposit into savings is a(n):", ["annuity", "mortgage", "lump sum", "loan"], 0));
  q.push(mc("easy", "The FV of an annuity grows with:", ["more payments", "fewer payments", "a lower rate", "a shorter term"], 0));
  q.push(mc("easy", "For \\$100/mo at $6\\%$/yr compounded monthly, $i=$", ["$0.005$", "$0.06$", "$0.5$", "$0.6$"], 0));
  q.push(ms("easy", "Which are annuities?", ["monthly RRSP deposits", "weekly savings", "one lottery win", "a single gift"], [0, 1]));
  q.push(ms("easy", "The FV formula uses:", ["$R$", "$i$", "$n$", "the borrower's name"], [0, 1, 2]));
  q.push(ms("easy", "A larger FV results from:", ["a higher rate", "more payments", "a longer term", "fewer deposits"], [0, 1, 2]));
  q.push(tf("easy", "An annuity is a series of equal, regular payments.", true));
  q.push(tf("easy", "Future value measures accumulated worth at the end.", true));
  q.push(tf("easy", "A single lump-sum deposit is an annuity.", false, "An annuity is a series of payments."));
  q.push(tf("easy", "More frequent, larger payments increase the future value.", true));
  q.push(num("easy", "For $6\\%$/yr compounded monthly, the rate per period (decimal).", 0.005, 0.0001));
  q.push(num("easy", "\\$50/mo for 12 months: number of payments $n$.", 12, 0));
  q.push(num("easy", "\\$100/mo for 2 yr compounded monthly: $n$.", 24, 0));
  q.push(num("easy", "\\$1000/yr for 10 yr: number of payments.", 10, 0));
  q.push(fill("easy", "Equal regular payments form an ___.", ["annuity"]));
  q.push(fill("easy", "In $FV=R\\frac{(1+i)^n-1}{i}$, $R$ is the regular ___.", ["payment", "deposit"]));
  // MEDIUM
  q.push(mc("medium", "\\$100/mo at $6\\%$/yr compounded monthly for 2 yr:", ["\\$2543.20", "\\$2400", "\\$2500", "\\$2540"], 0));
  q.push(mc("medium", "\\$200/mo at $6\\%$/yr compounded monthly for 3 yr:", ["\\$7867.22", "\\$7200", "\\$7800", "\\$7900"], 0));
  q.push(mc("medium", "\\$50/mo at $6\\%$/yr compounded monthly for 1 yr:", ["\\$616.78", "\\$600", "\\$620", "\\$612"], 0));
  q.push(mc("medium", "\\$1000/yr at $5\\%$/yr for 10 yr:", ["\\$12577.89", "\\$10000", "\\$12500", "\\$13000"], 0));
  q.push(mc("medium", "\\$500/yr at $6\\%$/yr for 8 yr:", ["\\$4948.73", "\\$4000", "\\$4900", "\\$5000"], 0));
  q.push(mc("medium", "\\$250/mo at $6\\%$/yr compounded monthly for 4 yr:", ["\\$13524.46", "\\$12000", "\\$13500", "\\$13525"], 0));
  q.push(mc("medium", "\\$300/mo at $6\\%$/yr compounded monthly for 5 yr:", ["\\$20931.01", "\\$18000", "\\$21000", "\\$20900"], 0));
  q.push(mc("medium", "\\$2000/yr at $4\\%$/yr for 20 yr:", ["\\$59556.16", "\\$40000", "\\$59000", "\\$60000"], 0));
  q.push(ms("medium", "For \\$100/mo at $6\\%$/yr monthly, 2 yr, which are true?", ["$i=0.005$", "$n=24$", "$FV\\approx\\$2543.20$", "$n=2$"], [0, 1, 2]));
  q.push(ms("medium", "Which increase an annuity's FV?", ["higher payment", "more years", "higher rate", "fewer payments"], [0, 1, 2]));
  q.push(tf("medium", "\\$100/mo at $6\\%$ compounded monthly grows to about \\$2543.20 in 2 yr.", true));
  q.push(tf("medium", "\\$1000/yr at $5\\%$ for 10 yr is worth about \\$12577.89.", true));
  q.push(num("medium", "\\$100/mo at $6\\%$/yr monthly, 2 yr (dollars, 2 dp).", 2543.2, 1));
  q.push(num("medium", "\\$200/mo at $6\\%$/yr monthly, 3 yr (dollars, 2 dp).", 7867.22, 1));
  q.push(num("medium", "\\$1000/yr at $5\\%$/yr, 10 yr (dollars, 2 dp).", 12577.89, 1));
  q.push(num("medium", "\\$500/yr at $6\\%$/yr, 8 yr (dollars, 2 dp).", 4948.73, 1));
  q.push(fill("medium", "\\$50/mo at $6\\%$/yr monthly for 1 yr $\\approx$ \\$___ (2 dp).", ["616.78"]));
  q.push(fill("medium", "\\$300/mo at $6\\%$/yr monthly for 5 yr $\\approx$ \\$___ (2 dp).", ["20931.01"]));
  q.push(mc("medium", "In \\$1000/yr at $5\\%$ for 10 yr, total deposited is:", ["\\$10000", "\\$12577.89", "\\$5000", "\\$2577.89"], 0));
  q.push(mc("medium", "Interest earned in \\$1000/yr at $5\\%$ for 10 yr:", ["\\$2577.89", "\\$12577.89", "\\$10000", "\\$1000"], 0));
  // HARD
  q.push(mc("hard", "\\$300/mo at $6\\%$/yr monthly, 5 yr. Total deposited:", ["\\$18000", "\\$20931.01", "\\$2931.01", "\\$15000"], 0));
  q.push(mc("hard", "\\$300/mo at $6\\%$/yr monthly, 5 yr. Interest earned:", ["\\$2931.01", "\\$18000", "\\$20931.01", "\\$900"], 0));
  q.push(mc("hard", "To reach \\$10000 in 3 yr at $6\\%$/yr monthly, the monthly payment $\\approx$:", ["\\$254.15", "\\$277.78", "\\$300", "\\$200"], 0));
  q.push(mc("hard", "\\$200/mo at $6\\%$/yr monthly, 3 yr. Total deposited:", ["\\$7200", "\\$7867.22", "\\$667.22", "\\$6000"], 0));
  q.push(mc("hard", "\\$200/mo at $6\\%$/yr monthly, 3 yr. Interest earned:", ["\\$667.22", "\\$7200", "\\$7867.22", "\\$200"], 0));
  q.push(mc("hard", "Doubling the monthly payment (same rate, term) changes FV by a factor of:", ["$2$", "$4$", "$1$", "$\\tfrac12$"], 0));
  q.push(mc("hard", "\\$100/mo at $6\\%$/yr monthly. Which term gives a larger FV?", ["3 yr over 2 yr", "1 yr over 2 yr", "same", "cannot tell"], 0));
  q.push(mc("hard", "\\$250/mo at $6\\%$/yr monthly, 4 yr. Total deposited:", ["\\$12000", "\\$13524.46", "\\$1524.46", "\\$10000"], 0));
  q.push(ms("hard", "For \\$300/mo at $6\\%$, 5 yr, which are true?", ["$FV\\approx\\$20931.01$", "deposited \\$18000", "interest $\\approx\\$2931.01$", "$n=5$"], [0, 1, 2]));
  q.push(ms("hard", "Which double an annuity's FV?", ["doubling every payment", "doubling $R$", "doubling the rate", "doubling nothing"], [0, 1]));
  q.push(tf("hard", "For \\$300/mo, 5 yr at $6\\%$, interest is about \\$2931.01.", true));
  q.push(tf("hard", "FV is proportional to the payment $R$ (rate and term fixed).", true));
  q.push(tf("hard", "Total deposited into a \\$200/mo, 3-yr annuity is \\$7200.", true));
  q.push(tf("hard", "Interest earned equals FV minus total deposits.", true));
  q.push(num("hard", "\\$300/mo at $6\\%$/yr monthly, 5 yr: interest earned (dollars, 2 dp).", 2931.01, 2));
  q.push(num("hard", "\\$250/mo at $6\\%$/yr monthly, 4 yr: interest earned (dollars, 2 dp).", 1524.46, 2));
  q.push(num("hard", "\\$2000/yr at $4\\%$/yr, 20 yr (dollars).", 59556, 5));
  q.push(num("hard", "Total deposited in \\$300/mo for 5 yr (dollars).", 18000, 0));
  q.push(fill("hard", "\\$200/mo, 3 yr at $6\\%$: interest earned is \\$___ (2 dp).", ["667.22"]));
  q.push(fill("hard", "Doubling $R$ multiplies the future value by ___.", ["2"]));
  return q;
}

// ── 2.3 Annuities: Present Value ─────────────────────────────
function g23() {
  const q = [];
  // EASY
  q.push(mc("easy", "Present value of an annuity formula:", ["$PV=R\\dfrac{1-(1+i)^{-n}}{i}$", "$PV=R(1+i)^n$", "$PV=Rni$", "$PV=\\dfrac{R}{n}$"], 0));
  q.push(mc("easy", "Present value is the value:", ["today (a single equivalent amount)", "at the end", "after all payments", "of one payment"], 0));
  q.push(mc("easy", "PV answers: how much to invest ___ to fund the payments.", ["now", "later", "annually", "never"], 0));
  q.push(mc("easy", "A loan's principal equals the ___ of its payments.", ["present value", "future value", "total", "interest"], 0));
  q.push(mc("easy", "In the PV formula, the exponent on $(1+i)$ is:", ["$-n$", "$n$", "$0$", "$1$"], 0));
  q.push(mc("easy", "PV is used to price:", ["loans and pensions", "single deposits only", "nothing", "simple interest"], 0));
  q.push(mc("easy", "A lower interest rate makes the PV of fixed payments:", ["larger", "smaller", "zero", "unchanged"], 0));
  q.push(ms("easy", "The PV formula uses:", ["$R$", "$i$", "$n$", "the future value"], [0, 1, 2]));
  q.push(ms("easy", "PV is useful for:", ["pricing a loan", "valuing a pension", "funding withdrawals", "counting days"], [0, 1, 2]));
  q.push(ms("easy", "Which raise the PV of an annuity?", ["larger payments", "more payments", "a lower rate", "a higher rate"], [0, 1, 2]));
  q.push(tf("easy", "Present value is a single amount today equal to a stream of payments.", true));
  q.push(tf("easy", "The exponent in the PV formula is $-n$.", true));
  q.push(tf("easy", "A loan principal is the future value of the payments.", false, "It is the present value."));
  q.push(tf("easy", "A lower rate increases the present value of fixed payments.", true));
  q.push(num("easy", "\\$200/mo for 2 yr: number of payments.", 24, 0));
  q.push(num("easy", "For $6\\%$/yr compounded monthly, the periodic rate (decimal).", 0.005, 0.0001));
  q.push(num("easy", "\\$1000/yr for 10 yr: number of payments.", 10, 0));
  q.push(num("easy", "\\$500/mo for 3 yr compounded monthly: $n$.", 36, 0));
  q.push(fill("easy", "The value of future payments expressed today is the ___ value.", ["present"]));
  q.push(fill("easy", "A loan principal equals the ___ value of its payments.", ["present"]));
  // MEDIUM
  q.push(mc("medium", "\\$500/mo at $6\\%$/yr monthly for 3 yr, PV:", ["\\$16435.51", "\\$18000", "\\$16000", "\\$16435"], 0));
  q.push(mc("medium", "\\$200/mo at $6\\%$/yr monthly for 2 yr, PV:", ["\\$4512.57", "\\$4800", "\\$4500", "\\$4520"], 0));
  q.push(mc("medium", "\\$1000/yr at $5\\%$/yr for 10 yr, PV:", ["\\$7721.73", "\\$10000", "\\$7700", "\\$8000"], 0));
  q.push(mc("medium", "\\$300/mo at $6\\%$/yr monthly for 5 yr, PV:", ["\\$15517.67", "\\$18000", "\\$15000", "\\$15518"], 0));
  q.push(mc("medium", "\\$400/mo at $6\\%$/yr monthly for 4 yr, PV:", ["\\$17032.13", "\\$19200", "\\$17000", "\\$17032"], 0));
  q.push(mc("medium", "\\$2000/yr at $6\\%$/yr for 15 yr, PV:", ["\\$19424.50", "\\$30000", "\\$19000", "\\$19425"], 0));
  q.push(mc("medium", "A car loan is repaid \\$300/mo for 5 yr at $6\\%$. The amount borrowed is the:", ["PV $\\approx\\$15517.67$", "FV", "\\$18000", "\\$300"], 0));
  q.push(mc("medium", "A lottery pays \\$1000/yr for 10 yr. Its cash value today at $5\\%$ is the:", ["PV $\\approx\\$7721.73$", "\\$10000", "FV", "\\$5000"], 0));
  q.push(ms("medium", "For \\$500/mo at $6\\%$ monthly, 3 yr, which are true?", ["$i=0.005$", "$n=36$", "$PV\\approx\\$16435.51$", "$n=3$"], [0, 1, 2]));
  q.push(ms("medium", "Which equal the loan principal for \\$300/mo, 5 yr at $6\\%$?", ["$PV$", "$\\approx\\$15517.67$", "amount borrowed", "\\$18000"], [0, 1, 2]));
  q.push(tf("medium", "\\$500/mo at $6\\%$ monthly for 3 yr has PV about \\$16435.51.", true));
  q.push(tf("medium", "\\$1000/yr at $5\\%$ for 10 yr has PV about \\$7721.73.", true));
  q.push(num("medium", "\\$500/mo at $6\\%$/yr monthly, 3 yr: PV (dollars, 2 dp).", 16435.51, 1));
  q.push(num("medium", "\\$200/mo at $6\\%$/yr monthly, 2 yr: PV (dollars, 2 dp).", 4512.57, 1));
  q.push(num("medium", "\\$1000/yr at $5\\%$/yr, 10 yr: PV (dollars, 2 dp).", 7721.73, 1));
  q.push(num("medium", "\\$300/mo at $6\\%$/yr monthly, 5 yr: PV (dollars, 2 dp).", 15517.67, 1));
  q.push(fill("medium", "\\$400/mo at $6\\%$/yr monthly for 4 yr has PV \\$___ (2 dp).", ["17032.13"]));
  q.push(fill("medium", "\\$2000/yr at $6\\%$ for 15 yr has PV \\$___ (2 dp).", ["19424.50", "19424.5"]));
  q.push(mc("medium", "For \\$500/mo, 3 yr, PV \\$16435.51: total paid over the term is:", ["\\$18000", "\\$16435.51", "\\$1564.49", "\\$500"], 0));
  q.push(mc("medium", "Interest cost of that \\$500/mo, 3-yr loan:", ["\\$1564.49", "\\$18000", "\\$16435.51", "\\$500"], 0));
  // HARD
  q.push(mc("hard", "\\$500/mo, 3 yr at $6\\%$ (PV \\$16435.51). Total interest paid:", ["\\$1564.49", "\\$18000", "\\$16435.51", "\\$3000"], 0));
  q.push(mc("hard", "A \\$15517.67 loan is repaid \\$300/mo for 5 yr. Total interest:", ["\\$2482.33", "\\$18000", "\\$15517.67", "\\$300"], 0));
  q.push(mc("hard", "Given PV \\$16435.51 for \\$500/mo, 3 yr, which is bigger — PV or total paid?", ["total paid (\\$18000)", "PV", "equal", "cannot tell"], 0));
  q.push(mc("hard", "How much to invest now at $6\\%$/yr monthly to withdraw \\$500/mo for 3 yr?", ["\\$16435.51", "\\$18000", "\\$16000", "\\$500"], 0));
  q.push(mc("hard", "\\$400/mo, 4 yr at $6\\%$ (PV \\$17032.13). Total interest:", ["\\$2167.87", "\\$19200", "\\$17032.13", "\\$400"], 0));
  q.push(mc("hard", "A pension pays \\$2000/yr for 15 yr at $6\\%$. Lump-sum value now:", ["\\$19424.50", "\\$30000", "\\$45000", "\\$2000"], 0));
  q.push(mc("hard", "Two annuities, same $R$ and $n$: the one with the ___ rate has the larger PV.", ["lower", "higher", "same", "negative"], 0));
  q.push(mc("hard", "A loan of \\$4512.57 is repaid \\$200/mo for 2 yr. Total interest:", ["\\$287.43", "\\$4800", "\\$4512.57", "\\$200"], 0));
  q.push(ms("hard", "For \\$300/mo, 5 yr at $6\\%$, which are true?", ["PV $\\approx\\$15517.67$", "total paid \\$18000", "interest $\\approx\\$2482.33$", "PV \\$18000"], [0, 1, 2]));
  q.push(ms("hard", "The PV of an annuity increases when:", ["$R$ increases", "$n$ increases", "$i$ decreases", "$i$ increases"], [0, 1, 2]));
  q.push(tf("hard", "For \\$500/mo, 3 yr at $6\\%$, total interest is about \\$1564.49.", true));
  q.push(tf("hard", "Total interest equals total paid minus the present value.", true));
  q.push(tf("hard", "A \\$300/mo, 5-yr loan at $6\\%$ costs about \\$2482.33 in interest.", true));
  q.push(tf("hard", "Raising the rate raises the present value of fixed payments.", false, "A higher rate lowers the PV."));
  q.push(num("hard", "\\$500/mo, 3 yr at $6\\%$: total interest (dollars, 2 dp).", 1564.49, 1));
  q.push(num("hard", "\\$300/mo, 5 yr at $6\\%$: total interest (dollars, 2 dp).", 2482.33, 1));
  q.push(num("hard", "\\$400/mo, 4 yr at $6\\%$: total interest (dollars, 2 dp).", 2167.87, 1));
  q.push(num("hard", "\\$200/mo, 2 yr at $6\\%$: total interest (dollars, 2 dp).", 287.43, 1));
  q.push(fill("hard", "To fund \\$500/mo for 3 yr at $6\\%$, invest \\$___ now (2 dp).", ["16435.51"]));
  q.push(fill("hard", "For \\$300/mo, 5 yr at $6\\%$: total interest is \\$___ (2 dp).", ["2482.33"]));
  return q;
}

// ── 2.4 Mortgages & Amortization ─────────────────────────────
function g24() {
  const q = [];
  // EASY
  q.push(mc("easy", "A mortgage is a:", ["loan to buy property", "type of savings", "single payment", "credit card"], 0));
  q.push(mc("easy", "Amortization is:", ["paying off a loan in regular payments", "earning interest", "a down payment", "a tax"], 0));
  q.push(mc("easy", "The mortgage payment formula is:", ["$R=\\dfrac{PV\\,i}{1-(1+i)^{-n}}$", "$R=PV(1+i)^n$", "$R=PVin$", "$R=\\dfrac{PV}{n}$"], 0));
  q.push(mc("easy", "A down payment is paid:", ["up front, reducing the loan", "at the end", "monthly", "as interest"], 0));
  q.push(mc("easy", "Early mortgage payments are mostly:", ["interest", "principal", "taxes", "fees"], 0));
  q.push(mc("easy", "The amortization period is the:", ["time to fully repay", "interest rate", "down payment", "monthly fee"], 0));
  q.push(mc("easy", "A longer amortization means:", ["lower payments, more total interest", "higher payments", "no interest", "faster payoff"], 0));
  q.push(ms("easy", "Which are parts of a mortgage?", ["principal", "interest", "amortization period", "the realtor's name"], [0, 1, 2]));
  q.push(ms("easy", "A larger down payment:", ["lowers the loan", "lowers total interest", "lowers payments", "raises the loan"], [0, 1, 2]));
  q.push(ms("easy", "Each payment covers:", ["some interest", "some principal", "the whole loan at once", "part of the balance"], [0, 1, 3]));
  q.push(tf("easy", "Amortization spreads a loan over regular payments.", true));
  q.push(tf("easy", "Early payments are mostly interest.", true));
  q.push(tf("easy", "A larger down payment increases the amount borrowed.", false, "It decreases it."));
  q.push(tf("easy", "A longer amortization lowers the payment but raises total interest.", true));
  q.push(num("easy", "A 25-year mortgage paid monthly has how many payments?", 300, 0));
  q.push(num("easy", "A 30-year mortgage paid monthly: number of payments.", 360, 0));
  q.push(num("easy", "A \\$250000 home with \\$50000 down: amount borrowed (dollars).", 200000, 0));
  q.push(num("easy", "A 20-year mortgage paid monthly: number of payments.", 240, 0));
  q.push(fill("easy", "Repaying a loan through regular payments is called ___.", ["amortization"]));
  q.push(fill("easy", "A 25-year monthly mortgage has ___ payments.", ["300"]));
  // MEDIUM
  q.push(mc("medium", "\\$200000 at $6\\%$/yr monthly over 25 yr. Monthly payment:", ["\\$1288.60", "\\$1000", "\\$1200", "\\$1288"], 0));
  q.push(mc("medium", "\\$150000 at $6\\%$/yr monthly over 25 yr. Monthly payment:", ["\\$966.45", "\\$900", "\\$1000", "\\$966"], 0));
  q.push(mc("medium", "\\$100000 at $6\\%$/yr monthly over 20 yr. Monthly payment:", ["\\$716.43", "\\$700", "\\$800", "\\$716"], 0));
  q.push(mc("medium", "\\$300000 at $4.8\\%$/yr monthly over 30 yr. Monthly payment:", ["\\$1574.00", "\\$1500", "\\$1600", "\\$1574"], 0));
  q.push(mc("medium", "\\$250000 at $6\\%$/yr monthly over 25 yr. Monthly payment:", ["\\$1610.75", "\\$1500", "\\$1600", "\\$1611"], 0));
  q.push(mc("medium", "A \\$300000 home with \\$60000 down. Amount financed:", ["\\$240000", "\\$300000", "\\$60000", "\\$360000"], 0));
  q.push(mc("medium", "For a 25-yr monthly mortgage at $6\\%$/yr, $i$ and $n$ are:", ["$0.005$ and $300$", "$0.06$ and $25$", "$0.005$ and $25$", "$0.06$ and $300$"], 0));
  q.push(mc("medium", "Doubling the loan (same rate, term) changes the payment by:", ["$\\times2$", "$\\times4$", "no change", "$\\times\\tfrac12$"], 0));
  q.push(ms("medium", "For \\$200000 at $6\\%$, 25 yr, which are true?", ["$i=0.005$", "$n=300$", "payment $\\approx\\$1288.60$", "$n=25$"], [0, 1, 2]));
  q.push(ms("medium", "A shorter amortization (same loan/rate):", ["raises the payment", "lowers total interest", "speeds payoff", "lowers the payment"], [0, 1, 2]));
  q.push(tf("medium", "\\$200000 at $6\\%$ over 25 yr costs about \\$1288.60/mo.", true));
  q.push(tf("medium", "A \\$300000 home with \\$60000 down is financed as \\$240000.", true));
  q.push(num("medium", "\\$200000 at $6\\%$/yr monthly, 25 yr: monthly payment (dollars, 2 dp).", 1288.6, 0.5));
  q.push(num("medium", "\\$150000 at $6\\%$/yr monthly, 25 yr: monthly payment (dollars, 2 dp).", 966.45, 0.5));
  q.push(num("medium", "\\$100000 at $6\\%$/yr monthly, 20 yr: monthly payment (dollars, 2 dp).", 716.43, 0.5));
  q.push(num("medium", "\\$250000 at $6\\%$/yr monthly, 25 yr: monthly payment (dollars, 2 dp).", 1610.75, 0.5));
  q.push(fill("medium", "\\$300000 at $4.8\\%$/yr monthly, 30 yr $\\approx$ \\$___ /mo (whole).", ["1574"]));
  q.push(fill("medium", "For a 30-yr monthly mortgage, $n=$ ___.", ["360"]));
  q.push(mc("medium", "\\$200000 at $6\\%$ over 25 yr: total of all 300 payments $\\approx$", ["\\$386580", "\\$200000", "\\$300000", "\\$1288.60"], 0));
  q.push(mc("medium", "That mortgage's total interest $\\approx$", ["\\$186580", "\\$200000", "\\$386580", "\\$100000"], 0));
  // HARD
  q.push(mc("hard", "\\$200000 at $6\\%$ over 25 yr. Total interest over the life of the loan:", ["\\$186580.84", "\\$200000", "\\$386580.84", "\\$88580"], 0));
  q.push(mc("hard", "\\$200000: 25-yr vs 30-yr at $6\\%$. The 30-yr option has:", ["lower payment, more total interest", "higher payment", "less interest", "the same cost"], 0));
  q.push(mc("hard", "\\$250000 at $6\\%$ over 25 yr: total paid over 300 payments $\\approx$", ["\\$483225", "\\$250000", "\\$300000", "\\$400000"], 0));
  q.push(mc("hard", "First payment on \\$200000 at $6\\%$ ($1288.60$/mo): interest portion:", ["\\$1000", "\\$288.60", "\\$1288.60", "\\$500"], 0));
  q.push(mc("hard", "First payment on \\$200000 at $6\\%$: principal portion:", ["\\$288.60", "\\$1000", "\\$1288.60", "\\$0"], 0));
  q.push(mc("hard", "Balance after the first \\$1288.60 payment on \\$200000:", ["\\$199711.40", "\\$198711.40", "\\$200000", "\\$199000"], 0));
  q.push(mc("hard", "A larger down payment on the same home lowers:", ["the loan, the payment, and total interest", "only the rate", "the amortization only", "nothing"], 0));
  q.push(mc("hard", "\\$150000 at $6\\%$ over 25 yr ($966.45$/mo): total interest $\\approx$", ["\\$139935", "\\$150000", "\\$289935", "\\$100000"], 0));
  q.push(ms("hard", "For \\$200000 at $6\\%$, 25 yr, which are true?", ["payment \\$1288.60", "first interest \\$1000", "first principal \\$288.60", "no interest"], [0, 1, 2]));
  q.push(ms("hard", "Choosing a 30-yr over a 25-yr amortization:", ["lowers the payment", "raises total interest", "slows payoff", "lowers total interest"], [0, 1, 2]));
  q.push(tf("hard", "\\$200000 at $6\\%$ over 25 yr costs about \\$186580.84 in total interest.", true));
  q.push(tf("hard", "The first payment's interest on \\$200000 at $0.5\\%$/mo is \\$1000.", true));
  q.push(tf("hard", "A longer amortization always reduces total interest paid.", false, "It increases total interest."));
  q.push(tf("hard", "After one payment the balance drops by the payment's principal portion.", true));
  q.push(num("hard", "\\$200000 at $6\\%$, 25 yr: total interest (dollars, nearest).", 186581, 20));
  q.push(num("hard", "First-payment interest on \\$200000 at $0.5\\%$/mo (dollars).", 1000, 0));
  q.push(num("hard", "First-payment principal on \\$200000 (payment \\$1288.60) (dollars, 2 dp).", 288.6, 0.5));
  q.push(num("hard", "Balance after first payment on \\$200000 (payment \\$1288.60) (dollars, 2 dp).", 199711.4, 1));
  q.push(fill("hard", "\\$200000 at $6\\%$, 25 yr: total of all payments is about \\$___ (nearest thousand).", ["386581", "387000", "386580"]));
  q.push(fill("hard", "First-payment principal on \\$200000 at $6\\%$ is \\$___ (2 dp).", ["288.60", "288.6"]));
  return q;
}

// ── 2.5 Renting vs Owning Accommodation ──────────────────────
function g25() {
  const q = [];
  // EASY
  q.push(mc("easy", "A cost of owning (not renting) is:", ["property tax", "monthly rent", "a damage deposit", "a co-signer"], 0));
  q.push(mc("easy", "A cost of renting is:", ["monthly rent", "property tax", "a mortgage", "home insurance on the building"], 0));
  q.push(mc("easy", "Building equity means:", ["gaining ownership value", "paying rent", "losing money", "paying tax"], 0));
  q.push(mc("easy", "A down payment is required to:", ["buy a home", "rent an apartment", "sign a lease", "pay utilities"], 0));
  q.push(mc("easy", "Renters usually do NOT pay for:", ["major repairs", "their own groceries", "rent", "renter's insurance"], 0));
  q.push(mc("easy", "Home ownership can build wealth through:", ["equity and appreciation", "rent", "deposits", "nothing"], 0));
  q.push(mc("easy", "A lease is an agreement to:", ["rent for a fixed term", "buy a home", "get a mortgage", "pay tax"], 0));
  q.push(ms("easy", "Costs of owning include:", ["mortgage payments", "property tax", "maintenance", "a landlord's profit"], [0, 1, 2]));
  q.push(ms("easy", "Costs of renting include:", ["monthly rent", "renter's insurance", "a damage deposit", "property tax"], [0, 1, 2]));
  q.push(ms("easy", "Advantages of owning:", ["build equity", "possible appreciation", "freedom to renovate", "no repair costs"], [0, 1, 2]));
  q.push(tf("easy", "Owners pay property tax; renters usually do not directly.", true));
  q.push(tf("easy", "Owning can build equity over time.", true));
  q.push(tf("easy", "Renters are responsible for major structural repairs.", false, "Landlords are."));
  q.push(tf("easy", "A down payment is needed to buy, not to rent.", true));
  q.push(num("easy", "Rent \\$1200/mo: yearly rent (dollars).", 14400, 0));
  q.push(num("easy", "Rent \\$1500/mo: yearly rent (dollars).", 18000, 0));
  q.push(num("easy", "A 5\\% down payment on a \\$300000 home (dollars).", 15000, 0));
  q.push(num("easy", "A 10\\% down payment on a \\$400000 home (dollars).", 40000, 0));
  q.push(fill("easy", "Gaining ownership value in a home is called ___.", ["equity"]));
  q.push(fill("easy", "Rent \\$1000/mo for a year totals \\$___.", ["12000"]));
  // MEDIUM
  q.push(mc("medium", "Rent \\$1400/mo vs own at \\$1600/mo mortgage + \\$300/mo tax/upkeep. Monthly owning cost:", ["\\$1900", "\\$1600", "\\$1400", "\\$300"], 0));
  q.push(mc("medium", "Renting \\$1400/mo for 3 yr total:", ["\\$50400", "\\$16800", "\\$4200", "\\$42000"], 0));
  q.push(mc("medium", "A \\$350000 home, 20\\% down. Down payment:", ["\\$70000", "\\$35000", "\\$280000", "\\$7000"], 0));
  q.push(mc("medium", "In that purchase, the mortgage principal is:", ["\\$280000", "\\$350000", "\\$70000", "\\$420000"], 0));
  q.push(mc("medium", "Rent rises 3\\% from \\$1200/mo. New monthly rent:", ["\\$1236", "\\$1230", "\\$1500", "\\$1203"], 0));
  q.push(mc("medium", "Owning cost \\$1900/mo, of which \\$400 builds equity. 'Lost' cost/mo:", ["\\$1500", "\\$1900", "\\$400", "\\$2300"], 0));
  q.push(mc("medium", "Which is usually cheaper short-term (1–2 yr)?", ["renting", "owning", "always equal", "always owning"], 0));
  q.push(mc("medium", "Which can be better long-term if prices rise?", ["owning", "renting", "neither", "always renting"], 0));
  q.push(ms("medium", "When comparing rent vs own, include:", ["mortgage payment", "property tax", "maintenance", "the seller's name"], [0, 1, 2]));
  q.push(ms("medium", "Reasons renting may suit someone:", ["flexibility to move", "no repair costs", "lower up-front cost", "builds equity"], [0, 1, 2]));
  q.push(tf("medium", "Total rent over 3 yr at \\$1400/mo is \\$50400.", true));
  q.push(tf("medium", "A 20\\% down payment on \\$350000 is \\$70000.", true));
  q.push(num("medium", "Rent \\$1400/mo for 3 yr: total (dollars).", 50400, 0));
  q.push(num("medium", "20\\% down on a \\$350000 home (dollars).", 70000, 0));
  q.push(num("medium", "Mortgage principal after 20\\% down on \\$350000 (dollars).", 280000, 0));
  q.push(num("medium", "Rent \\$1200/mo rising 3\\%: new monthly rent (dollars).", 1236, 0.5));
  q.push(fill("medium", "Owning cost \\$1900/mo minus \\$400 equity = \\$___ 'lost' per month.", ["1500"]));
  q.push(fill("medium", "Renting \\$1500/mo for 2 yr totals \\$___.", ["36000"]));
  q.push(mc("medium", "A condo has \\$1500 mortgage + \\$350 fees + \\$250 tax monthly. Total:", ["\\$2100", "\\$1850", "\\$1500", "\\$600"], 0));
  q.push(mc("medium", "Comparing options fairly requires the same:", ["time period", "colour", "realtor", "font"], 0));
  // HARD
  q.push(mc("hard", "Rent \\$1400/mo vs own \\$1900/mo (\\$400 equity). Over 5 yr, extra cash paid to own:", ["\\$30000", "\\$84000", "\\$114000", "\\$24000"], 0));
  q.push(mc("hard", "Over 5 yr, renting \\$1400/mo totals \\$84000; owning \\$1900/mo totals:", ["\\$114000", "\\$84000", "\\$30000", "\\$90000"], 0));
  q.push(mc("hard", "Owning 5 yr: \\$114000 paid, \\$24000 to equity, home rises \\$40000. Net cost:", ["\\$50000", "\\$114000", "\\$74000", "\\$90000"], 0));
  q.push(mc("hard", "A \\$400000 home, 10\\% down, closing costs \\$8000. Cash needed up front:", ["\\$48000", "\\$40000", "\\$8000", "\\$400000"], 0));
  q.push(mc("hard", "Rent \\$1200/mo growing 3\\%/yr. Rent in year 2 (monthly):", ["\\$1236", "\\$1272", "\\$1200", "\\$1500"], 0));
  q.push(mc("hard", "If a home's value grows 4\\%/yr, \\$300000 after 3 yr $\\approx$", ["\\$337459", "\\$336000", "\\$312000", "\\$360000"], 0));
  q.push(mc("hard", "Owning builds equity of \\$400/mo. Equity after 5 yr (ignoring appreciation):", ["\\$24000", "\\$4800", "\\$20000", "\\$48000"], 0));
  q.push(mc("hard", "Break-even (rent vs own) depends most on:", ["how long you stay & price growth", "the paint colour", "the realtor", "the day of week"], 0));
  q.push(ms("hard", "A fair rent-vs-own comparison accounts for:", ["all monthly costs", "equity built", "possible appreciation", "up-front cash"], [0, 1, 2, 3]));
  q.push(ms("hard", "Owning may beat renting when:", ["you stay many years", "prices rise", "rents rise fast", "you move every year"], [0, 1, 2]));
  q.push(tf("hard", "Over 5 yr, owning at \\$1900/mo pays \\$30000 more cash than renting at \\$1400/mo.", true));
  q.push(tf("hard", "Equity build is a real cost that reduces the 'net' cost of owning.", true));
  q.push(tf("hard", "A \\$300000 home rising 4\\%/yr is worth about \\$337459 after 3 yr.", true));
  q.push(tf("hard", "Break-even between renting and owning is independent of how long you stay.", false, "It depends heavily on the length of stay."));
  q.push(num("hard", "Extra cash to own vs rent over 5 yr ($1900$ vs $1400$/mo) (dollars).", 30000, 0));
  q.push(num("hard", "Total cash to own at \\$1900/mo for 5 yr (dollars).", 114000, 0));
  q.push(num("hard", "Equity built at \\$400/mo over 5 yr (dollars).", 24000, 0));
  q.push(num("hard", "\\$300000 home at 4\\%/yr for 3 yr (dollars, nearest).", 337459, 5));
  q.push(fill("hard", "Up-front cash: 10\\% down on \\$400000 plus \\$8000 closing = \\$___.", ["48000"]));
  q.push(fill("hard", "Owning 5 yr: \\$114000 paid $-$ \\$24000 equity $-$ \\$40000 gain = \\$___ net.", ["50000"]));
  return q;
}

// ── 2.6 Designing Budgets ────────────────────────────────────
function g26() {
  const q = [];
  // EASY
  q.push(mc("easy", "A budget is a plan for:", ["income and expenses", "interest only", "taxes only", "savings only"], 0));
  q.push(mc("easy", "A balanced budget has:", ["expenses $\\le$ income", "expenses $>$ income", "no income", "no expenses"], 0));
  q.push(mc("easy", "A fixed expense is one that:", ["stays the same each month", "changes each month", "never occurs", "is optional"], 0));
  q.push(mc("easy", "A variable expense:", ["changes month to month", "is always fixed", "is income", "is a tax"], 0));
  q.push(mc("easy", "Gross income is pay:", ["before deductions", "after deductions", "after rent", "after tax only"], 0));
  q.push(mc("easy", "Net income is pay:", ["after deductions (take-home)", "before deductions", "before tax", "plus bonuses"], 0));
  q.push(mc("easy", "A surplus means:", ["income exceeds expenses", "expenses exceed income", "no savings", "a loan"], 0));
  q.push(ms("easy", "Fixed expenses include:", ["rent", "a phone plan", "groceries", "a car loan payment"], [0, 1, 3]));
  q.push(ms("easy", "Variable expenses include:", ["groceries", "entertainment", "gas", "rent"], [0, 1, 2]));
  q.push(ms("easy", "A good budget:", ["tracks income", "tracks expenses", "plans savings", "ignores spending"], [0, 1, 2]));
  q.push(tf("easy", "A balanced budget keeps expenses at or below income.", true));
  q.push(tf("easy", "Net income is your take-home pay.", true));
  q.push(tf("easy", "Rent is a variable expense.", false, "Rent is usually fixed."));
  q.push(tf("easy", "A surplus means income exceeds expenses.", true));
  q.push(num("easy", "Income \\$2500, expenses \\$2200: surplus (dollars).", 300, 0));
  q.push(num("easy", "Income \\$3000, expenses \\$3200: shortfall (dollars).", 200, 0));
  q.push(num("easy", "Monthly rent \\$1200: yearly total (dollars).", 14400, 0));
  q.push(num("easy", "Save \\$150/mo: yearly savings (dollars).", 1800, 0));
  q.push(fill("easy", "Take-home pay after deductions is your ___ income.", ["net"]));
  q.push(fill("easy", "Income minus expenses, when positive, is a ___.", ["surplus"]));
  // MEDIUM
  q.push(mc("medium", "Income \\$3200; rent \\$1100, food \\$500, transit \\$200, other \\$600. Surplus:", ["\\$800", "\\$700", "\\$2400", "\\$600"], 0));
  q.push(mc("medium", "Spending \\$1100 rent on \\$3200 income is what percent?", ["$34.4\\%$", "$25\\%$", "$29\\%$", "$40\\%$"], 0));
  q.push(mc("medium", "A '50/30/20' budget puts 20\\% toward:", ["savings/debt", "needs", "wants", "rent"], 0));
  q.push(mc("medium", "On \\$3000 net, 50\\% for needs is:", ["\\$1500", "\\$600", "\\$900", "\\$1000"], 0));
  q.push(mc("medium", "On \\$3000 net, 20\\% for savings is:", ["\\$600", "\\$1500", "\\$900", "\\$300"], 0));
  q.push(mc("medium", "Income \\$2800, expenses \\$3050. The budget is:", ["in deficit by \\$250", "balanced", "in surplus", "empty"], 0));
  q.push(mc("medium", "To fix a \\$250 monthly deficit you could:", ["cut variable expenses", "increase income", "reduce wants", "ignore it"], 0));
  q.push(mc("medium", "Annual income \\$48000. Monthly gross:", ["\\$4000", "\\$3600", "\\$4800", "\\$400"], 0));
  q.push(ms("medium", "For income \\$3200, expenses \\$2400, which are true?", ["surplus \\$800", "balanced or better", "can save \\$800", "deficit"], [0, 1, 2]));
  q.push(ms("medium", "Ways to create a surplus:", ["reduce spending", "increase income", "cut wants", "spend more"], [0, 1, 2]));
  q.push(tf("medium", "On \\$3000 net, a 20\\% savings target is \\$600.", true));
  q.push(tf("medium", "A budget with expenses \\$3050 on income \\$2800 is in deficit.", true));
  q.push(num("medium", "Income \\$3200; expenses \\$1100+\\$500+\\$200+\\$600: surplus (dollars).", 800, 0));
  q.push(num("medium", "50\\% of \\$3000 net income (dollars).", 1500, 0));
  q.push(num("medium", "20\\% of \\$3000 net income (dollars).", 600, 0));
  q.push(num("medium", "Annual income \\$48000: monthly gross (dollars).", 4000, 0));
  q.push(fill("medium", "Rent \\$1100 on income \\$3200 is ___\\% (1 dp).", ["34.4"]));
  q.push(fill("medium", "Income \\$2800 minus expenses \\$3050 is a deficit of \\$___.", ["250"]));
  q.push(mc("medium", "30\\% of \\$3000 net for 'wants' is:", ["\\$900", "\\$600", "\\$1500", "\\$300"], 0));
  q.push(mc("medium", "Saving \\$200/mo at $3\\%$/yr compounded monthly is modelled as a(n):", ["annuity (future value)", "single deposit", "mortgage", "loan"], 0));
  // HARD
  q.push(mc("hard", "Net \\$3400: needs \\$1900, wants \\$900. Amount left for savings:", ["\\$600", "\\$500", "\\$700", "\\$0"], 0));
  q.push(mc("hard", "That \\$600/mo saved at $3\\%$/yr compounded monthly for 5 yr $\\approx$", ["\\$38795", "\\$36000", "\\$40000", "\\$38000"], 0));
  q.push(mc("hard", "Net \\$3400; needs are what percent (1 dp) if \\$1900?", ["$55.9\\%$", "$50\\%$", "$26.5\\%$", "$60\\%$"], 0));
  q.push(mc("hard", "A budget shows \\$150/mo deficit. Cutting \\$40 dining, \\$30 subscriptions, \\$25 transit leaves:", ["\\$55 deficit", "surplus \\$55", "balanced", "\\$95 deficit"], 0));
  q.push(mc("hard", "To save \\$5000 in 2 yr with no interest, monthly saving is:", ["\\$208.33", "\\$250", "\\$200", "\\$416.67"], 0));
  q.push(mc("hard", "Income rises 3\\% from \\$3200; expenses rise 2\\% from \\$2600. New surplus:", ["\\$644", "\\$600", "\\$620", "\\$700"], 0));
  q.push(mc("hard", "\\$300/mo saved at $4\\%$/yr compounded monthly for 3 yr $\\approx$", ["\\$11456", "\\$10800", "\\$12000", "\\$11000"], 0));
  q.push(mc("hard", "A person over-spends wants by \\$200/mo. Over a year that is:", ["\\$2400", "\\$200", "\\$1200", "\\$2000"], 0));
  q.push(ms("hard", "For net \\$3400, needs \\$1900, wants \\$900, which are true?", ["savings \\$600", "needs $\\approx55.9\\%$", "wants $\\approx26.5\\%$", "deficit"], [0, 1, 2]));
  q.push(ms("hard", "Turning a deficit into a surplus can use:", ["lower fixed costs", "lower variable costs", "higher income", "more borrowing"], [0, 1, 2]));
  q.push(tf("hard", "Saving \\$600/mo at $3\\%$/yr compounded monthly for 5 yr yields about \\$38795.", true));
  q.push(tf("hard", "Trimming \\$95 of expenses turns a \\$150 deficit into a \\$55 deficit.", true));
  q.push(tf("hard", "Over-spending \\$200/mo costs \\$2400 over a year.", true));
  q.push(tf("hard", "A percentage-based budget must always total more than 100\\%.", false, "It should total 100\\% of net income."));
  q.push(num("hard", "Net \\$3400 minus needs \\$1900 minus wants \\$900: savings (dollars).", 600, 0));
  q.push(num("hard", "\\$600/mo at $3\\%$/yr compounded monthly, 5 yr (dollars, nearest).", 38795, 30));
  q.push(num("hard", "Monthly saving to reach \\$5000 in 2 yr, no interest (dollars, 2 dp).", 208.33, 0.5));
  q.push(num("hard", "New surplus: income $3200\\times1.03$ minus expenses $2600\\times1.02$ (dollars).", 644, 1));
  q.push(fill("hard", "Net \\$3400 with needs \\$1900: needs are ___\\% (1 dp).", ["55.9"]));
  q.push(fill("hard", "Over-spending \\$200/mo costs \\$___ per year.", ["2400"]));
  return q;
}

export default [
  { code: "2.1", gen: g21 },
  { code: "2.2", gen: g22 },
  { code: "2.3", gen: g23 },
  { code: "2.4", gen: g24 },
  { code: "2.5", gen: g25 },
  { code: "2.6", gen: g26 },
];
