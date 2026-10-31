// Worksheet 1.4 problems: 3 knowledge, 5 application, 5 challenge (multi-part) problems.
export const PROBLEMS = [
  { level: 1, q: String.raw`Write $\frac{45}{105}$ in lowest terms.`, ans: String.raw`$\frac37$` },
  { level: 1, q: String.raw`Fill in the blank: $\frac49=\frac{\square}{63}$.`, ans: "$28$" },
  { level: 1, q: String.raw`Write $\frac{41}{8}$ as a mixed number and $3\frac29$ as an improper fraction.`, recap: String.raw`$\frac{41}{8}$ mixed; $3\frac29$ improper.`, ans: String.raw`$5\frac18$; $\frac{29}{9}$` },
  { level: 2, q: String.raw`Evaluate $\dfrac38+\dfrac56-1\dfrac{7}{12}$.`, ans: String.raw`$-\dfrac38$` },
  { level: 2, q: String.raw`Evaluate $-\dfrac23+\dfrac14-\left(-\dfrac56\right)$.`, ans: String.raw`$\dfrac{5}{12}$` },
  { level: 2, q: String.raw`Evaluate $\frac45-\left(-\frac16\right)$.`, ans: String.raw`$\frac{29}{30}$` },
  { level: 2, q: String.raw`Evaluate $2\frac34+3\frac58$.`, ans: String.raw`$6\frac38$` },
  { level: 2, q: String.raw`Leah walks $1\frac12$ km to school, $\frac34$ km to the library and $2\frac13$ km home. How far does she walk in total?`, recap: String.raw`Leah: $1\frac12+\frac34+2\frac13$ km.`, ans: String.raw`$4\frac{7}{12}$ km` },
  { level: 3, space: 5,
    q: String.raw`Alexis left home at 7:45 p.m.\ to go shopping and returned at 10:30 p.m.
(a) Express the time she was away as a mixed number of hours.
(b) She spent $1\frac56$ h shopping for clothes. How much time did she spend doing other things? Give hours and minutes.
(c) What fraction of her time away was spent shopping for clothes?`,
    recap: "Alexis away 7:45–10:30 p.m.; time not shopping; fraction shopping.",
    ans: String.raw`(a) $2\frac34$ h (b) $\frac{33}{12}-\frac{22}{12}=\frac{11}{12}$ h $=55$ min (c) $\frac{22}{12}\div\frac{33}{12}=\frac23$.` },
  { level: 3, space: 5,
    q: String.raw`John's training log for one day: run $1\frac14$ laps, walk $\frac12$ lap, run $2\frac23$ laps, walk $\frac34$ lap, run $1\frac12$ laps.
(a) How many laps did he run?
(b) How many laps did he walk?
(c) How many more laps did he run than walk?
(d) One lap is $400$ m. How far did he travel in total, to the nearest metre?`,
    recap: "John's laps: run, walk, difference, total distance.",
    ans: String.raw`(a) $5\frac{5}{12}$ (b) $1\frac14$ (c) $4\frac16$ (d) $6\frac23$ laps $\approx2667$ m.` },
  { level: 3, space: 5.5,
    q: String.raw`(a) Show that $\dfrac1n-\dfrac{1}{n+1}=\dfrac{1}{n(n+1)}$ when $n=3$ and when $n=5$.
(b) Use this to evaluate $\dfrac{1}{3\times4}+\dfrac{1}{4\times5}+\cdots+\dfrac{1}{9\times10}$.
(c) Write a rule for the sum from $\dfrac{1}{a(a+1)}$ up to $\dfrac{1}{b(b+1)}$.`,
    ans: String.raw`(a) $\dfrac13-\dfrac14=\dfrac{1}{12}$; $\dfrac15-\dfrac16=\dfrac{1}{30}$ (b) $\dfrac13-\dfrac{1}{10}=\dfrac{7}{30}$ (c) $\dfrac1a-\dfrac{1}{b+1}$.` },
  { level: 3, space: 5,
    q: String.raw`Jane is putting wood trim around a doorway: two sides $6\frac58$ ft long and a top piece $3\frac14$ ft long.
(a) How many feet of trim does she need?
(b) Trim is sold in $8$-ft boards, and each piece must be cut from a single board. How many boards does she need?
(c) How many feet of trim will be left over?`,
    recap: String.raw`Door trim: $2\times6\frac58+3\frac14$ ft; 8-ft boards.`,
    ans: String.raw`(a) $16\frac12$ ft (b) $3$ boards (each side needs its own board; the leftovers $1\frac38$ ft are too short for the top) (c) $24-16\frac12=7\frac12$ ft.` },
  { level: 3, space: 5.5,
    q: String.raw`A tank starts $\dfrac34$ full. An amount equal to $\dfrac13$ of its capacity is drained. Then $22$ L is added, and the tank is $\dfrac35$ full.
(a) What fraction of the tank is $22$ L?
(b) Find the capacity of the tank.
(c) How many litres were in it at the start?
(d) How many more litres are needed to fill it at the end?`,
    ans: String.raw`(a) $\dfrac35-\left(\dfrac34-\dfrac13\right)=\dfrac{11}{60}$ (b) $120$ L (c) $90$ L (d) $48$ L.` },
];
