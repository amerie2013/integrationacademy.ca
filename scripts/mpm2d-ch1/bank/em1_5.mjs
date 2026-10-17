// 1.5 Solving Problems with Linear Systems — 20 easy + 20 medium questions (money written as "dollars")
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";

export const E = [
  num(`Two numbers add to $30$ and differ by $6$. Find the larger.`, 18, "$x+y=30$, $x-y=6$: add, $2x=36$."),
  mc(`120 tickets were sold, $a$ adult and $s$ student. Which equation shows this?`, "$a+s=120$", ["$a-s=120$", "$as=120$", "$120a+120s=1$"], "The counts add to the total."),
  mc(`Adult tickets cost 8 dollars and student tickets 5 dollars; sales were 780 dollars. Which equation shows the money?`, "$8a+5s=780$", ["$a+s=780$", "$5a+8s=780$", "$13(a+s)=780$"], "Number × price, added."),
  num(`20 coins, all nickels and dimes, are worth 1.50 dollars. How many dimes?`, 10, "$5n+10d=150$ with $n=20-d$: $5d=50$."),
  mc(`The amount of acid in $x$ litres of a $40\\%$ solution is…`, "$0.4x$ L", ["$40x$ L", "$x+0.4$ L", "$\\frac{x}{40}$ L"], "Percent as a decimal, times the volume."),
  num(`How much simple interest does 2000 dollars earn in one year at 3% (dollars)?`, 60, "$0.03\\times2000$."),
  num(`A boat goes 12 km/h in still water and the current is 3 km/h. What is its speed downstream (km/h)?`, 15, "With the current: $12+3$."),
  tf(`The break-even point is where cost equals revenue.`, true, "No profit and no loss."),
  num(`Two numbers add to $50$ and one is $4$ times the other. Find the smaller.`, 10, "$x+4x=50$."),
  num(`A rectangle has perimeter $30$ m and its length is twice its width. Find the width (m).`, 5, "$2(2w+w)=30$."),
  mc(`What is the best first step in solving a word problem with a system?`, "define the variables", ["guess an answer", "graph a random line", "add the numbers in the problem"], "Write “Let $x$ = …” with units."),
  num(`Items sell for 15 dollars each. Costs are 300 dollars plus 5 dollars per item. How many items must be sold to break even?`, 30, "$15n=300+5n$."),
  fill(`A plane flies at 500 km/h with a 50 km/h tailwind. Its ground speed is ___ km/h.`, ["550"], "With the wind: add."),
  num(`How many litres of acid are in 10 L of a 30% solution?`, 3, "$0.3\\times10$."),
  tf(`In a coin problem, it helps to write the values in cents.`, true, "Whole numbers are easier to work with."),
  num(`3 pens and 2 pencils cost 8 dollars. A pen costs 2 dollars. What does a pencil cost (dollars)?`, 1, "$3(2)+2p=8$."),
  mc(`“Ana is 3 years older than Ben.” Which equation is correct?`, "$a=b+3$", ["$b=a+3$", "$a+b=3$", "$a=3b$"], "Ana's age is Ben's plus 3."),
  num(`Ana is 4 years older than Ben, and their ages add to 30. How old is Ben?`, 13, "$b+4+b=30$."),
  num(`Shirts cost 20 dollars and hats 15 dollars. 10 items cost 175 dollars. How many shirts?`, 5, "$20s+15(10-s)=175\\Rightarrow 5s=25$."),
  mc(`A boat's speed going upstream is…`, "boat speed minus current", ["boat speed plus current", "current minus boat speed", "the same as downstream"], "The current pushes against it."),
];

export const M = [
  num(`500 tickets were sold: adults at 12 dollars, children at 7 dollars, for 4900 dollars. How many adult tickets?`, 280, "$12a+7(500-a)=4900\\Rightarrow 5a=1400$."),
  num(`32 coins, all quarters and dimes, are worth 5.75 dollars. How many quarters?`, 17, "$25q+10(32-q)=575\\Rightarrow 15q=255$."),
  num(`How many litres of 30% solution are mixed with 60% solution to make 90 L of 40% solution?`, 60, "$x+y=90$, $0.3x+0.6y=36$: $y=30$."),
  num(`10 000 dollars is invested, part at 4% and part at 6%. The yearly interest is 520 dollars. How much is at 4% (dollars)?`, 4000, "$0.04x+0.06(10\\,000-x)=520\\Rightarrow 0.02x=80$."),
  num(`A boat goes 36 km downstream in 2 h and back in 3 h. What is the speed of the current (km/h)?`, 3, "$b+c=18$, $b-c=12$."),
  num(`A plane flies 2100 km with the wind in 3 h and against it in 3.5 h. What is its speed in still air (km/h)?`, 650, "$p+w=700$, $p-w=600$."),
  num(`A print shop has 1200 dollars of fixed costs, spends 4 dollars per shirt and sells each for 12 dollars. How many shirts to break even?`, 150, "$12n=1200+4n$."),
  num(`A rental costs 70 dollars for a 100 km day and 115 dollars for a 250 km day. What is the daily fee (dollars)?`, 40, "Rate $\\frac{45}{150}=0.30$/km; $70-30=40$."),
  num(`A mother is 3 times as old as her son. In 10 years she will be twice as old. How old is she now?`, 30, "$m=3s$, $3s+10=2(s+10)\\Rightarrow s=10$."),
  num(`A rectangle has perimeter 56 cm. Its length is 4 cm less than 3 times its width. Find the length (cm).`, 20, "$l=3w-4$; $2(4w-4)=56\\Rightarrow w=8$."),
  mc(`Nuts at 6 dollars/kg and dried fruit at 9 dollars/kg make 15 kg of trail mix worth 7 dollars/kg. Which system fits?`, "$n+f=15$, $6n+9f=105$", ["$n+f=15$, $6n+9f=7$", "$n+f=105$, $6n+9f=15$", "$6n+9f=15$, $n+f=7$"], "Total value: $15\\times7=105$."),
  num(`Kai cycles part of a 35 km trip at 20 km/h and walks the rest at 5 km/h. The trip takes 2.5 h. How far does he cycle (km)?`, 30, "$\\frac{x}{20}+\\frac{y}{5}=2.5$ and $x+y=35$: $3y=15$."),
  ms(`A 12 L mix of 10% and 25% salt solutions contains 2.1 L of salt. Which equations model it?`, ["$x+y=12$", "$0.10x+0.25y=2.1$", "$0.10x+0.25y=12$", "$x+y=2.1$"], [0, 1], "Volumes add to 12 L; salt adds to 2.1 L."),
  num(`A 12 L mix of 10% and 25% salt solutions contains 2.1 L of salt. How many litres of the 10% solution are in it?`, 6, "$0.1x+0.25(12-x)=2.1\\Rightarrow 0.15x=0.9$."),
  tf(`An answer of $12.5$ people is acceptable in a ticket problem.`, false, "Counts of people must be whole numbers — check the set-up."),
  num(`Gym A: 50 dollars to join plus 30 dollars a month. Gym B: 45 dollars a month. After how many whole months is A first cheaper?`, 4, "Equal at $3\\frac13$ months; A is cheaper from month 4."),
  num(`Two trains 600 km apart travel toward each other at 110 km/h and 90 km/h. After how many hours do they meet?`, 3, "$110t+90t=600$."),
  num(`A cash box has 34 bills, all fives and tens, worth 250 dollars. How many five-dollar bills?`, 18, "$5f+10(34-f)=250\\Rightarrow 5f=90$."),
  fill(`Revenue $R=25n$ and cost $C=15n+800$ are equal at $n=$ ___.`, ["80"], "$10n=800$.", planeDoc({ view: { xmin: 0, xmax: 120, ymin: 0, ymax: 3000 }, lines: [{ m: 25, b: 0, color: "green", label: "R", lx: 100 }, { m: 15, b: 800, color: "red", label: "C", lx: 105 }], xlabel: "n", ylabel: "dollars", step: { x: 20, y: 500 } })),
  num(`Jill invested twice as much at 5% as at 2%. Her yearly interest is 360 dollars. How much is at 5% (dollars)?`, 6000, "$0.05(2x)+0.02x=360\\Rightarrow x=3000$."),
];
