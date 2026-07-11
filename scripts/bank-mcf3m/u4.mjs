// MCF3M Unit 4 — Financial Mathematics: question bank (60 per topic).
// 4.2 Present Value and 4.3 Annuities match MCR3U 7.3 / 7.4 exactly (reuse).
// 4.1 combines simple + compound interest, authored here.
import { mc, ms, tf, num, fill, order, match } from "../bank-mpm2d/helpers.mjs";
import mcr3u7 from "../bank-mcr3u/u7.mjs";

const gen7 = Object.fromEntries(mcr3u7.map((t) => [t.code, t.gen]));

// ── 4.1 Simple & Compound Interest ───────────────────────────
function g41() {
  const q = [];
  q.push(mc("easy", "Simple-interest formula:", ["$I=Prt$", "$A=P(1+i)^n$", "$I=P+rt$", "$I=\\dfrac Pt$"], 0));
  q.push(mc("easy", "Compound-interest formula:", ["$A=P(1+i)^n$", "$I=Prt$", "$A=P+rn$", "$A=Pin$"], 0));
  q.push(mc("easy", "Simple interest on $500 at 4% for 3 yr.", ["$60$", "$600$", "$20$", "$120$"], 0));
  q.push(mc("easy", "Simple interest grows:", ["linearly", "exponentially", "by halving", "not at all"], 0));
  q.push(mc("easy", "Compound interest grows:", ["exponentially", "linearly", "by subtraction", "not at all"], 0));
  q.push(mc("easy", "Write 5% as a decimal.", ["$0.05$", "$5$", "$0.5$", "$0.005$"], 0));
  q.push(ms("easy", "Simple interest:", ["$I=Prt$", "linear", "$r$ a decimal", "exponential"], [0, 1, 2]));
  q.push(ms("easy", "Compound interest:", ["$A=P(1+i)^n$", "exponential", "interest on interest", "$I=Prt$"], [0, 1, 2]));
  q.push(ms("easy", "Compounding:", ["$i=r\\div$ periods", "$n=$ periods $\\times$ years", "monthly is 12/yr", "$i=r$"], [0, 1, 2]));
  q.push(ms("easy", "Comparing:", ["compound earns more over time", "simple is a straight line", "compound is a curve", "they are equal"], [0, 1, 2]));
  q.push(tf("easy", "$I=Prt$ is simple interest.", true));
  q.push(tf("easy", "Compound interest grows linearly.", false));
  q.push(tf("easy", "For 6% compounded monthly, $i=0.005$.", true));
  q.push(fill("easy", "Simple interest on $200 at 5% for 2 yr.", ["20"]));
  q.push(fill("easy", "$i$ for 6% compounded monthly.", ["0.005"]));
  q.push(fill("easy", "$n$ for 4% compounded semi-annually over 3 yr.", ["6"]));
  q.push(num("easy", "Simple interest on $500 at 4% for 3 yr.", 60, 0));
  q.push(num("easy", "$n$ for 6% compounded monthly over 2 yr.", 24, 0));
  q.push(num("easy", "Amount: $1000 at 5% simple for 2 yr.", 1100, 0));
  q.push(match("easy", "Match each.", ["simple interest", "compound interest", "monthly $i$ for 12%"], ["$I=Prt$", "$A=P(1+i)^n$", "$0.01$"], [0, 1, 2]));
  q.push(mc("medium", "$1000 at 5% compounded annually for 3 yr.", ["$\\approx1157.63$", "$1150$", "$1015$", "$1100$"], 0));
  q.push(mc("medium", "$1000 at 6% compounded quarterly for 1 yr.", ["$\\approx1061.36$", "$1060$", "$1006$", "$1240$"], 0));
  q.push(mc("medium", "Simple amount: $800 at 5% for 2 yr.", ["$880$", "$80$", "$800$", "$840$"], 0));
  q.push(mc("medium", "$i$ for 8% compounded quarterly.", ["$0.02$", "$0.08$", "$0.32$", "$2$"], 0));
  q.push(mc("medium", "$1000 at 5% for 5 yr: which is larger?", ["compound", "simple", "equal", "cannot tell"], 0));
  q.push(mc("medium", "$2000 at 4% compounded semi-annually for 1 yr.", ["$\\approx2080.80$", "$2080$", "$2008$", "$2160$"], 0));
  q.push(ms("medium", "$1000 at 5% for 3 yr (compound):", ["$1000(1.05)^3$", "$\\approx1157.63$", "exponential", "$=1150$"], [0, 1, 2]));
  q.push(ms("medium", "Quarterly compounding (6%, 1 yr):", ["$i=0.015$", "$n=4$", "$1000(1.015)^4$", "$i=0.06$"], [0, 1, 2]));
  q.push(ms("medium", "Simple vs compound:", ["simple is linear", "compound is exponential", "compound earns more", "simple earns more"], [0, 1, 2]));
  q.push(ms("medium", "Finding $i$ and $n$:", ["$i=r\\div$ periods", "$n=$ periods $\\times$ years", "6% monthly $\\to i=0.005$", "$i=r$ always"], [0, 1, 2]));
  q.push(tf("medium", "$1000 at 5% compounded annually for 3 yr is about $1157.63.", true));
  q.push(tf("medium", "$1000 at 6% compounded quarterly for 1 yr is about $1061.36.", true));
  q.push(tf("medium", "Simple interest beats compound over the long run.", false));
  q.push(fill("medium", "$1000 at 5% compounded annually for 3 yr (to cents).", ["1157.63"]));
  q.push(fill("medium", "$1000 at 6% compounded quarterly for 1 yr (to cents).", ["1061.36"]));
  q.push(fill("medium", "Simple amount: $800 at 5% for 2 yr.", ["880"]));
  q.push(num("medium", "$1000 at 5% compounded annually for 3 yr (to cents).", 1157.63, 0.5));
  q.push(num("medium", "$2000 at 4% compounded semi-annually for 1 yr (to cents).", 2080.80, 0.5));
  q.push(num("medium", "$n$ for 6% compounded monthly over 2 yr.", 24, 0));
  q.push(match("medium", "Match each to its amount.", ["$1000$, 5% annual, 3 yr", "$1000$, 6% quarterly, 1 yr", "$2000$, 4% semi-annual, 1 yr"], ["$\\approx1157.63$", "$\\approx1061.36$", "$\\approx2080.80$"], [0, 1, 2]));
  q.push(mc("hard", "$1000 at 6% compounded monthly for 2 yr.", ["$\\approx1127.16$", "$1120$", "$1124$", "$1200$"], 0));
  q.push(mc("hard", "Find $t$: $800 at 5% simple earns $120.", ["$3$", "$2$", "$4$", "$5$"], 0));
  q.push(mc("hard", "Find $P$: at 3% for 2 yr simple, interest is $90.", ["$1500$", "$1350$", "$3000$", "$900$"], 0));
  q.push(mc("hard", "$1000 at 6% compounded annually for 10 yr.", ["$\\approx1790.85$", "$1600$", "$1700$", "$1900$"], 0));
  q.push(mc("hard", "Doubling time at 6% (rule of 72) is about:", ["$12$ yr", "$6$ yr", "$72$ yr", "$36$ yr"], 0));
  q.push(ms("hard", "$1000 at 6% monthly for 2 yr:", ["$i=0.005$", "$n=24$", "$1000(1.005)^{24}$", "$\\approx1127.16$"], [0, 1, 2, 3]));
  q.push(ms("hard", "Solving for $t$ (simple):", ["$t=\\dfrac{I}{Pr}$", "$=\\dfrac{120}{40}$", "$=3$ yr", "$=2$ yr"], [0, 1, 2]));
  q.push(ms("hard", "Rule of 72:", ["doubling $\\approx72\\div$ rate", "at 6% about 12 yr", "a quick estimate", "exact"], [0, 1, 2]));
  q.push(ms("hard", "Solving for $P$ (simple):", ["$P=\\dfrac{I}{rt}$", "$=\\dfrac{90}{0.06}$", "$=1500$", "$=900$"], [0, 1, 2]));
  q.push(tf("hard", "$1000 at 6% compounded monthly for 2 yr is about $1127.16.", true));
  q.push(tf("hard", "By the rule of 72, money doubles in about 12 yr at 6%.", true));
  q.push(tf("hard", "$1000 at 6% compounded annually for 10 yr is about $1600.", false));
  q.push(fill("hard", "$1000 at 6% compounded monthly for 2 yr (to cents).", ["1127.16"]));
  q.push(fill("hard", "$t$ if $800 at 5% simple earns $120.", ["3"]));
  q.push(fill("hard", "$P$ if at 3% for 2 yr simple the interest is $90.", ["1500"]));
  q.push(num("hard", "$1000 at 6% compounded monthly for 2 yr (to cents).", 1127.16, 1));
  q.push(num("hard", "$t$ (yr) if $800 at 5% simple earns $120.", 3, 0));
  q.push(num("hard", "Approx doubling time at 6% (rule of 72), in years.", 12, 0));
  q.push(order("hard", "Order the steps for $1000 at 6% compounded monthly for 2 yr.", ["$i=0.06/12=0.005$", "$n=12\\times2=24$", "$A=1000(1.005)^{24}$", "$\\approx1127.16$"]));
  q.push(match("hard", "Match each to its value.", ["$1000$, 6% monthly, 2 yr", "$t$: $800$,5%,$I=120$", "$P$: 3%,2yr,$I=90$"], ["$\\approx1127.16$", "$3$ yr", "$1500$"], [0, 1, 2]));
  return q;
}

export default [
  { code: "4.1", gen: g41 },          // Simple & Compound Interest
  { code: "4.2", gen: gen7["7.3"] },  // Present Value (= MCR3U 7.3)
  { code: "4.3", gen: gen7["7.4"] },  // Annuities (= MCR3U 7.4)
];
