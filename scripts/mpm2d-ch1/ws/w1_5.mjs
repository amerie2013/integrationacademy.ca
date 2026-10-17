// MPM2D Worksheet 1.5 — Solving Problems with Linear Systems (teacher edition)
import { planeT, F, pt, std, gridT, circ, poly, rectT, trackT } from "./figT.mjs";

const EXAMPLES = [
  { title: "Coins", q: String.raw`A jar has $45$ coins, all dimes and quarters, worth $\$7.95$. How many of each?`,
    steps: [String.raw`$d+q=45$ and $10d+25q=795$ (cents).`, String.raw`$10(45-q)+25q=795\Rightarrow15q=345\Rightarrow q=23$, $d=22$.`, String.raw`Check: $220+575=795$ ✓`], ans: "22 dimes, 23 quarters" },
  { title: "Concert tickets", q: String.raw`Floor seats cost $\$45$ and balcony seats $\$30$. A sold-out show of $1200$ seats earned $\$42\,600$. How many of each?`,
    steps: [String.raw`$f+b=1200$ and $45f+30b=42\,600$.`, String.raw`$45f+30(1200-f)=42\,600\Rightarrow15f=6600\Rightarrow f=440$, $b=760$.`], ans: "440 floor, 760 balcony" },
  { title: "Mixture", q: String.raw`A nut mix sells for $\$12$/kg using peanuts ($\$8$/kg) and cashews ($\$18$/kg). How much of each for $25$ kg of mix?`,
    steps: [String.raw`$p+c=25$ and $8p+18c=12(25)=300$.`, String.raw`$8(25-c)+18c=300\Rightarrow10c=100\Rightarrow c=10$, $p=15$.`], ans: "15 kg peanuts, 10 kg cashews" },
  { title: "Acid solution", q: String.raw`How much $15\%$ acid and $40\%$ acid make $50$ mL of $25\%$ acid?`,
    steps: [String.raw`$x+y=50$, $0.15x+0.40y=12.5$.`, String.raw`$\times100$: $15x+40y=1250$; subtract $15(x+y)=750$: $25y=500\Rightarrow y=20$, $x=30$.`], ans: "30 mL of 15%, 20 mL of 40%" },
  { title: "Investments", q: String.raw`$\$12\,000$ is invested, part at $6\%$ and part at $2.5\%$. The first year's interest is $\$475$. How much at each rate?`,
    steps: [String.raw`$x+y=12\,000$, $0.06x+0.025y=475$.`, String.raw`$\times1000$: $60x+25y=475\,000$; subtract $25(x+y)=300\,000$: $35x=175\,000\Rightarrow x=5000$, $y=7000$.`], ans: String.raw`\$5000 at 6%, \$7000 at 2.5%` },
  { title: "Current", q: String.raw`A motorboat travels $48$ km downstream in $2$ h and returns in $3$ h. Find the boat's speed in still water and the current's speed.`,
    steps: [String.raw`$b+c=24$ and $b-c=16$.`, String.raw`Add: $b=20$; $c=4$.`], ans: "20 km/h and 4 km/h" },
  { title: "Two speeds, one total", q: String.raw`Ana runs part of a $10$ km route at $12$ km/h and walks the rest at $5$ km/h. The trip takes $1.25$ h. How far does she run?`,
    steps: [String.raw`$r+w=10$ and $\frac{r}{12}+\frac{w}{5}=1.25$.`, String.raw`$\times60$: $5r+12w=75$; with $w=10-r$: $5r+120-12r=75\Rightarrow r=\frac{45}{7}\approx6.43$ km.`], ans: String.raw`about $6.43$ km` },
  { title: "Break-even", q: "A food truck has fixed costs of 900 dollars a week and spends 3.50 dollars per meal, selling meals at 9.50 dollars. Find the break-even point.",
    fig: planeT({ view: { xmin: 0, xmax: 250, ymin: 0, ymax: 2400 }, lines: [{ m: 3.5, b: 900, color: "red", label: "cost", lx: 200 }, { m: 9.5, b: 0, color: "green", label: "revenue", lx: 190 }], points: [{ x: 150, y: 1425, label: "(150, 1425)", color: "blue" }], xlabel: "meals", ylabel: "dollars", step: { x: 50, y: 400 } }, 5.5),
    steps: [String.raw`$C=3.5n+900$, $R=9.5n$.`, String.raw`$6n=900\Rightarrow n=150$ meals ($\$1425$).`], ans: "150 meals" },
  { title: "Ages", q: String.raw`Mia is $4$ times as old as her brother. In $6$ years she will be twice his age. Find their ages.`,
    steps: [String.raw`$m=4b$ and $m+6=2(b+6)$.`, String.raw`$4b+6=2b+12\Rightarrow b=3$, $m=12$.`], ans: "Mia 12, brother 3" },
];

const PROBLEMS = [
  { level: 1, q: String.raw`Two numbers add to $73$ and differ by $19$. Find them.`, recap: "Sum 73, difference 19.", ans: "46 and 27" },
  { level: 1, q: String.raw`A piggy bank has $30$ coins, nickels and dimes, worth $\$2.35$. How many dimes?`, recap: "Nickels and dimes.", ans: "17 dimes (13 nickels)" },
  { level: 1, q: String.raw`Write (do not solve) a system: adult passes cost $\$8$, child passes $\$5$; $150$ passes sold for $\$1020$.`, recap: "Write the pass system.", ans: String.raw`$a+c=150$, $8a+5c=1020$` },
  { level: 2, q: String.raw`How many litres of $10\%$ and $30\%$ solution make $40$ L of $25\%$ solution?`, recap: "10% + 30% → 40 L of 25%.", ans: "10 L of 10%, 30 L of 30%" },
  { level: 2, q: String.raw`$\$9000$ is split between $4\%$ and $7\%$ accounts. Yearly interest is $\$495$. How much is in each?`, recap: "4% and 7% accounts.", ans: String.raw`\$4500 each` },
  { level: 2, q: String.raw`A plane flies $2400$ km in $4$ h against the wind and $3$ h with it. Find the plane's speed and the wind speed.`, recap: "Plane and wind.", ans: "700 km/h and 100 km/h" },
  { level: 2, q: String.raw`A rental company charges a daily fee plus a cost per km. A $200$ km day costs $\$105$; a $350$ km day costs $\$142.50$. Find the daily fee and the cost per km.`, recap: "Rental fee and rate.", ans: String.raw`$\$0.25$/km and $\$55$/day` },
  { level: 2, q: String.raw`The perimeter of a rectangle is $64$ cm. Its length is $8$ cm more than its width. Find the dimensions.`, recap: "Rectangle, perimeter 64.", ans: "20 cm by 12 cm" },
  { level: 3, space: 5, q: String.raw`A chemist has $20$ L of a $35\%$ solution. How much water must be added to dilute it to $25\%$? Set up a system with $x$ = water added and $y$ = final volume.`, recap: "Dilution.", ans: String.raw`$y=20+x$, $0.25y=7$: $y=28$, $x=8$ L` },
  { level: 3, space: 5, q: String.raw`A theatre has $500$ seats. Tickets cost $\$40$ (orchestra) and $\$25$ (balcony). To make $\$16\,000$ when full, how many orchestra seats must there be? Is your answer realistic? Explain.`, recap: "Theatre seating plan.", ans: String.raw`$o+b=500$, $40o+25b=16\,000$: $o=233\frac13$ — not a whole number, so exactly \$16\,000 is impossible; 234 orchestra seats gives \$16\,010` },
  { level: 3, space: 5, q: String.raw`Two trains leave stations $540$ km apart at the same time, travelling toward each other. One is $20$ km/h faster than the other, and they meet after $3$ h. Find their speeds.`, recap: "Trains meeting.", ans: String.raw`$3(a+b)=540$, $a=b+20$: $100$ and $80$ km/h` },
  { level: 3, space: 5, q: String.raw`A store's two printers: Model A costs $\$180$ and $\$0.05$ per page; model B costs $\$100$ and $\$0.09$ per page.
(a) Write the cost equations.
(b) Find the break-even number of pages.
(c) Which should a family that prints $300$ pages a month for $3$ years buy?`, recap: "Two printers.", ans: String.raw`(a) $C=0.05p+180$, $C=0.09p+100$ (b) $2000$ pages (c) $10\,800$ pages: A ($\$720$ vs $\$1072$)` },
  { level: 3, space: 5, q: "Write your own word problem that leads to the system x + y = 20 and 3x + 5y = 80. Solve it and interpret the answer.", recap: "Write a problem for a given system.", ans: "answers vary; solution x = 10, y = 10" },
];

// ---- figures added to examples and problems
const ex = EXAMPLES, pr = PROBLEMS;
const S = (l1, l2, p, view, xl, yl, step) => F({ view, lines: [{ color: "blue", ...l1 }, { color: "red", ...l2 }], points: [p], xlabel: xl, ylabel: yl, step });
ex[0].fig = S({ m: -1, b: 45, label: "count", lx: 3 }, { m: -0.4, b: 31.8, label: "value", lx: 36 }, pt(22, 23, null, "green"), { xmin: 0, xmax: 50, ymin: 0, ymax: 50 }, "dimes", "quarters", { x: 10, y: 10 });
ex[1].fig = S({ m: -1, b: 1200 }, { m: -1.5, b: 1420 }, pt(440, 760, null, "green"), { xmin: 0, xmax: 1300, ymin: 0, ymax: 1500 }, "floor", "balcony", { x: 200, y: 300 });
ex[2].fig = S({ m: -1, b: 25 }, { m: -4 / 9, b: 50 / 3 }, pt(15, 10, null, "green"), { xmin: 0, xmax: 30, ymin: 0, ymax: 30 }, "peanuts (kg)", "cashews (kg)", { x: 5, y: 5 });
ex[3].fig = S({ m: -1, b: 50 }, { m: -0.375, b: 31.25 }, pt(30, 20, null, "green"), { xmin: 0, xmax: 60, ymin: 0, ymax: 55 }, "15% (mL)", "40% (mL)", { x: 10, y: 10 });
ex[4].fig = S({ m: -1, b: 12000 }, { m: -2.4, b: 19000 }, pt(5000, 7000, null, "green"), { xmin: 0, xmax: 13000, ymin: 0, ymax: 20000 }, "at 6%", "at 2.5%", { x: 2000, y: 4000 });
ex[5].fig = S({ m: -1, b: 24 }, { m: 1, b: -16 }, pt(20, 4, null, "green"), { xmin: 0, xmax: 28, ymin: -4, ymax: 26 }, "boat (km/h)", "current (km/h)", { x: 4, y: 4 });
ex[6].fig = S({ m: -1, b: 10 }, { m: -5 / 12, b: 6.25 }, { x: 45 / 7, y: 25 / 7, label: "(6.43, 3.57)", color: "green" }, { xmin: 0, xmax: 12, ymin: 0, ymax: 11 }, "run (km)", "walk (km)", { x: 2, y: 2 });
ex[8].fig = S({ m: 4, b: 0, label: "m = 4b", lx: 3.5 }, { m: 2, b: 6, label: "m + 6 = 2(b + 6)", lx: 4.5 }, pt(3, 12, null, "green"), { xmin: 0, xmax: 8, ymin: 0, ymax: 24 }, "brother", "Mia", { x: 1, y: 4 });
pr[5].fig = trackT("start", "destination", "2400 km", "with the wind: 3 h", "against: 4 h");
pr[6].fig = gridT({ xmin: 0, xmax: 400, ymin: 0, ymax: 160 }, { x: 50, y: 20 }, 6.5, { xlabel: "km", ylabel: "cost" });
pr[7].fig = rectT("length = w + 8", "w", "perimeter 64 cm");
pr[10].fig = trackT("Station A", "Station B", "540 km", "speed b + 20", "speed b");
pr[11].fig = gridT({ xmin: 0, xmax: 4000, ymin: 0, ymax: 400 }, { x: 500, y: 50 }, 6.5, { xlabel: "pages", ylabel: "cost" });
// ---- end figures

export const WS = {
  code: "1.5",
  title: "Solving Problems with Linear Systems",
  bigideas: String.raw`Problems with two unknowns usually give two facts. Define the variables (with units), write one equation per fact, solve the system with an efficient method, and interpret the answer in context. Totals and values, mixtures, investments, travel with wind or current, ages and break-even analysis all follow this pattern.`,
  goals: ["Define variables clearly.", "Translate facts into equations.", "Choose an efficient method.", "Interpret and check answers in context."],
  curriculum: "AG1",
  vocab: [["Value equation", "number × unit value, summed"], ["Mixture equation", "amount of substance = percent × volume"], ["Ground speed", "$v\\pm w$"], ["Break-even point", "cost = revenue"]],
  hook: String.raw`Ask: “A coffee shop sold 80 drinks, lattes at \$5 and teas at \$3, for \$310. How many lattes?” Let students guess and check, then show how two equations make it systematic.`,
  concepts: [
    ["1. A four-step plan", String.raw`Define $\to$ translate (one equation per fact) $\to$ solve $\to$ interpret and check in the words.`],
    ["2. Common models", String.raw`Count/value: $x+y=n$, $ax+by=V$. Mixture: $x+y=V$, $px+qy=rV$. Travel: $t(v\pm w)=d$. Break-even: $C=R$.`],
    ["3. Reasonableness", String.raw`Non-integer counts, negative amounts or impossible speeds mean the set-up or arithmetic needs checking.`],
  ],
  tips: ["Insist on “Let x = …” with units.", "Convert dollars to cents in coin problems.", "Percent to decimal before writing equations.", "Answer in a sentence.", "Check in the original words."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
