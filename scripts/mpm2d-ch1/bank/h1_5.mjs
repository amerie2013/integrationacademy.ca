// 1.5 Solving Problems with Linear Systems — 20 hard questions (money written as "dollars")
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";

export const TOPIC = "1.5 Solving Problems with Linear Systems";
export const Q = [
  num(`A theatre has 800 seats: orchestra at 45 dollars and balcony at 30 dollars. How many orchestra seats give 30 000 dollars when sold out?`, 400, "$45o+30(800-o)=30\\,000\\Rightarrow 15o=6000$."),
  num(`How many litres of water must be added to 30 L of 40% acid to make a 25% solution?`, 18, "Acid stays $12$ L; $\\frac{12}{0.25}=48$ L total."),
  num(`Alloys with 60% and 85% copper are melted to make 200 kg of a 70% alloy. How many kg of the 60% alloy are used?`, 120, "$x+y=200$, $0.6x+0.85y=140$: $25y=2000$."),
  num(`20 000 dollars is split between a fund that gains 7% and one that loses 2% in a year. The net gain is 680 dollars. How much is in the 7% fund (dollars)?`, 12000, "$0.07x-0.02(20\\,000-x)=680\\Rightarrow 0.09x=1080$."),
  num(`A boat travels 56 km downstream in 2 h and returns in 3.5 h. Find the boat's speed in still water (km/h).`, 22, "$b+c=28$, $b-c=16$."),
  num(`A plane flies 2880 km against the wind in 4.5 h and returns in 3.6 h. Find the wind speed (km/h).`, 80, "$p-w=640$, $p+w=800$."),
  num(`A company has 2400 dollars of fixed costs, spends 6 dollars per item and sells each for 14 dollars. How many items give a profit of 1600 dollars?`, 500, "$14n-(6n+2400)=1600\\Rightarrow 8n=4000$."),
  num(`Lena earns 16 dollars/h at a café and 22 dollars/h tutoring. Last month she worked 30 h and earned 576 dollars. How many hours did she tutor?`, 16, "$16c+22t=576$, $c+t=30$: $6t=96$."),
  num(`A parent's and child's ages add to 50. Ten years ago the parent was 4 times as old as the child. How old is the child now?`, 16, "$p=4c-30$; $5c-30=50$."),
  num(`A two-digit number is 6 times the sum of its digits, and its tens digit is 1 more than its units digit. Find the number.`, 54, "$10t+u=6(t+u)\\Rightarrow 4t=5u$; $t=u+1\\Rightarrow u=4$."),
  num(`A car leaves at 60 km/h. One hour later a second car follows the same route at 80 km/h. How far from the start does it catch up (km)?`, 240, "$60t=80(t-1)\\Rightarrow t=4$.", planeDoc({ view: { xmin: 0, xmax: 6, ymin: 0, ymax: 400 }, lines: [{ m: 60, b: 0, color: "blue", label: "car 1", lx: 5 }, { m: 80, b: -80, color: "red", label: "car 2", lx: 5.2 }], points: [{ x: 4, y: 240, label: "(4, 240)", color: "green" }], xlabel: "hours", ylabel: "km", step: { x: 1, y: 50 } })),
  mc(`Solving a mixture system gives $-4$ L of one solution. This means…`, "the requested mixture is impossible with these solutions", ["remove 4 L instead", "the answer is 4 L", "the other solution is negative too"], "The target concentration must lie between the two given concentrations."),
  ms(`In a ticket problem, which values of $a$ (adult tickets) could be valid?`, ["$a=120$", "$a=0$", "$a=-5$", "$a=37.5$"], [0, 1], "Counts must be whole and not negative."),
  num(`An electric car costs 42 000 dollars and 0.04 dollars/km to run; a gas car costs 30 000 dollars and 0.14 dollars/km. After how many km do the total costs match?`, 120000, "$12\\,000=0.10k$."),
  num(`Job A pays 2400 dollars a month. Job B pays 1500 dollars plus 6% commission on sales. What monthly sales (dollars) make the pay equal?`, 15000, "$0.06s=900$."),
  tf(`If a word-problem system has infinitely many solutions, the problem has not given enough independent information.`, true, "Both facts describe the same line."),
  num(`4 kg of apples and 3 kg of pears cost 18.60 dollars; 2 kg of apples and 5 kg of pears cost 19.80 dollars. What is the price of apples per kg (dollars)?`, 2.4, "Double the second and subtract: $7p=21$, $p=3$; $4a=9.60$."),
  num(`A 10 L radiator holds 30% antifreeze. How many litres must be drained and replaced with pure antifreeze to reach 50%? (2 decimals)`, 2.857142857, "$3-0.3x+x=5\\Rightarrow 0.7x=2$.", null, 0.01),
  num(`Floor seats cost 60 dollars and balcony seats 40 dollars. Of 1500 tickets sold, floor revenue equalled balcony revenue. How many floor tickets?`, 600, "$60f=40b$ and $f+b=1500$."),
  num(`Two runners on a 400 m track meet every 40 s running in opposite directions and every 200 s running the same direction. Find the faster speed (m/s).`, 6, "$a+b=10$, $a-b=2$."),
];
