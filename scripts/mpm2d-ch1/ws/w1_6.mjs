// MPM2D Worksheet 1.6 — Number of Solutions of a Linear System (teacher edition)
import { planeT } from "./figT.mjs";

const EXAMPLES = [
  { title: "One solution", q: String.raw`How many solutions does $y=2x-1$, $y=-\frac12x+4$ have?`,
    fig: planeT({ view: { xmin: -2, xmax: 6, ymin: -3, ymax: 6 }, lines: [{ m: 2, b: -1, color: "blue" }, { m: -0.5, b: 4, color: "red" }], points: [{ x: 2, y: 3, label: "(2, 3)", color: "green" }], step: { x: 1, y: 1 } }, 4.5),
    steps: [String.raw`Slopes $2$ and $-\frac12$ are different.`, String.raw`The lines cross once, at $(2,3)$.`], ans: "exactly one" },
  { title: "No solution", q: String.raw`How many solutions does $y=-3x+2$, $6x+2y=10$ have?`,
    fig: planeT({ view: { xmin: -2, xmax: 4, ymin: -4, ymax: 6 }, lines: [{ m: -3, b: 2, color: "blue" }, { m: -3, b: 5, color: "red" }], step: { x: 1, y: 1 } }, 4.5),
    steps: [String.raw`Second: $y=-3x+5$.`, "Same slope, different intercepts: parallel and distinct."], ans: "none" },
  { title: "Infinitely many", q: String.raw`How many solutions does $4x-6y=8$, $y=\frac23x-\frac43$ have?`,
    steps: [String.raw`First: $-6y=-4x+8\Rightarrow y=\frac23x-\frac43$.`, "Same slope and intercept: the same line."], ans: "infinitely many" },
  { title: "Comparing coefficients", q: String.raw`Classify without graphing: (a) $3x-y=4$, $9x-3y=12$ (b) $3x-y=4$, $9x-3y=10$ (c) $3x-y=4$, $x+3y=8$.`,
    steps: [String.raw`(a) ratios $\frac93=\frac{-3}{-1}=\frac{12}{4}=3$: same line.`, String.raw`(b) $\frac93=\frac{-3}{-1}=3\ne\frac{10}{4}$: parallel.`, String.raw`(c) slopes $3$ and $-\frac13$: they intersect (perpendicular).`], ans: "(a) infinitely many (b) none (c) one" },
  { title: "Algebra shows the case", q: String.raw`Solve $2x+5y=7$ and $-4x-10y=3$ by elimination.`,
    steps: [String.raw`$\times2$ the first: $4x+10y=14$.`, String.raw`Add: $0=17$, false.`], ans: "no solution" },
  { title: "Choosing k for no solution", q: String.raw`For what $k$ does $kx+4y=6$, $3x+2y=5$ have no solution?`,
    steps: [String.raw`Parallel needs $\frac{k}{3}=\frac42=2$, so $k=6$.`, String.raw`Then $6x+4y=6$ vs $6x+4y=10$: different, so no solution ✓`], ans: "$k=6$" },
  { title: "Choosing values for infinitely many", q: String.raw`Find $a$ and $c$ so that $ax-6y=c$ and $2x-3y=5$ have infinitely many solutions.`,
    steps: [String.raw`The first must be $2\times$ the second: $4x-6y=10$.`], ans: "$a=4$, $c=10$" },
  { title: "In context: same rate", q: String.raw`Two savings plans: Leo has $\$200$ and adds $\$15$/week; Sam has $\$120$ and adds $\$15$/week. Will their savings ever be equal?`,
    fig: planeT({ view: { xmin: 0, xmax: 12, ymin: 0, ymax: 400 }, lines: [{ m: 15, b: 200, color: "blue", label: "Leo", lx: 9 }, { m: 15, b: 120, color: "red", label: "Sam", lx: 10 }], xlabel: "weeks", ylabel: "dollars", step: { x: 2, y: 50 } }, 5),
    steps: [String.raw`$S=15w+200$ and $S=15w+120$: equal slopes, different intercepts.`, "Leo stays 80 dollars ahead forever."], ans: "never (no solution)" },
  { title: "In context: same line", q: String.raw`Receipt 1: $2$ muffins and $3$ coffees cost $\$13$. Receipt 2: $4$ muffins and $6$ coffees cost $\$26$. Can you find each price?`,
    steps: [String.raw`$2m+3c=13$ and $4m+6c=26$: the second is $2\times$ the first.`, String.raw`Many prices work, e.g. $(2,3)$, $(3.5,2)$, $(5,1)$.`], ans: "no — infinitely many possibilities; a different second fact is needed" },
];

const PROBLEMS = [
  { level: 1, q: String.raw`State the number of solutions: $y=4x+1$ and $y=4x-3$.`, recap: "y = 4x + 1, y = 4x − 3.", ans: "none (parallel)" },
  { level: 1, q: String.raw`State the number of solutions: $y=\frac13x+2$ and $y=-3x+2$.`, recap: "y = ⅓x + 2, y = −3x + 2.", ans: String.raw`one, at $(0,2)$` },
  { level: 1, q: String.raw`State the number of solutions: $x+2y=5$ and $3x+6y=15$.`, recap: "x + 2y = 5, 3x + 6y = 15.", ans: "infinitely many (same line)" },
  { level: 2, q: String.raw`Classify $5x-2y=3$ and $-10x+4y=6$ by comparing slopes and intercepts.`, recap: "5x − 2y = 3, −10x + 4y = 6.", ans: String.raw`both slope $\frac52$; intercepts $-\frac32$ and $\frac32$: none` },
  { level: 2, q: String.raw`Solve by elimination and interpret: $3x+4y=12$, $6x+8y=24$.`, recap: "3x + 4y = 12, 6x + 8y = 24.", ans: String.raw`$0=0$: infinitely many` },
  { level: 2, q: String.raw`Solve by substitution and interpret: $y=\frac12x-3$, $x-2y=4$.`, recap: "y = ½x − 3, x − 2y = 4.", ans: String.raw`$x-x+6=4\Rightarrow6=4$: none` },
  { level: 2, q: String.raw`For what value of $k$ is there no solution: $y=kx+5$ and $2x-3y=9$?`, recap: "Find k: no solution.", ans: String.raw`$k=\frac23$` },
  { level: 2, q: String.raw`Write a second equation that forms a system with $2x-y=3$ having (a) one solution (b) no solution (c) infinitely many solutions.`, recap: "Three partners for 2x − y = 3.", ans: String.raw`e.g. (a) $x+y=3$ (b) $2x-y=7$ (c) $4x-2y=6$` },
  { level: 3, space: 5, q: String.raw`Find all values of $m$ and $n$ for which $3x+my=n$ and $6x-4y=10$ have
(a) infinitely many solutions
(b) no solution
(c) exactly one solution.`, recap: "Classify by m and n.", ans: String.raw`(a) $m=-2$, $n=5$ (b) $m=-2$, $n\ne5$ (c) $m\ne-2$, any $n$` },
  { level: 3, space: 5, q: String.raw`Two cyclists start $6$ km apart on the same path, riding the same direction at $18$ km/h. Write a system for their positions and explain, using the number of solutions, whether one catches the other.`, recap: "Same-speed cyclists.", ans: String.raw`$d=18t$ and $d=18t+6$: parallel, no solution — never meets` },
  { level: 3, space: 5, q: String.raw`Explain why a system of two linear equations cannot have exactly two solutions.`, recap: "Why not exactly two?", ans: "two different lines meet at most once; if they shared two points they would be the same line (two points determine a line), giving infinitely many" },
  { level: 3, space: 5, q: String.raw`The lines $x+y=4$, $x-y=2$ and $2x+ky=7$ are given.
(a) For what $k$ do all three pass through one point?
(b) For what $k$ is the third line parallel to the first?`, recap: "Three lines, find k.", ans: String.raw`(a) meet at $(3,1)$: $6+k=7$, $k=1$ (b) $k=2$` },
  { level: 3, space: 5, q: String.raw`A gym charges $\$25$ to join and $\$12$/visit; a rec centre charges $\$12$/visit and a $\$25$ yearly fee. A student says “the system has no solution, so one is always cheaper.” Is the student right? Explain with equations.`, recap: "Gym vs rec centre.", ans: String.raw`both $C=12v+25$: the same line — infinitely many solutions; they always cost the same, so the student is wrong` },
];

export const WS = {
  code: "1.6",
  title: "Number of Solutions of a Linear System",
  bigideas: String.raw`Two lines in a plane intersect once, are parallel and distinct, or coincide. So a linear system has exactly one solution, none, or infinitely many. Comparing slopes and intercepts --- or the ratios of the coefficients in standard form --- classifies a system before solving it. Algebraically, a false statement such as $0=17$ means no solution and a true statement $0=0$ means infinitely many.`,
  goals: ["Classify a system by slopes and intercepts.", "Compare coefficient ratios in standard form.", "Interpret 0 = 0 and 0 = k results.", "Find parameters that give a chosen case.", "Interpret each case in context."],
  curriculum: "AG1",
  vocab: [["Consistent", "at least one solution"], ["Inconsistent", "no solution"], ["Coincident lines", "the same line"], ["Parallel lines", "same slope, different intercepts"]],
  hook: String.raw`Give each pair of students two uncooked spaghetti strands on graph paper. Ask: “In how many ways can two straight lines sit? How many crossing points can each arrangement have?” Collect the three cases.`,
  concepts: [
    ["1. Three cases", String.raw`Different slopes: one solution. Same slope, different intercepts: none. Same slope and intercept: infinitely many.
${planeT({ view: { xmin: -3, xmax: 5, ymin: -3, ymax: 5 }, lines: [{ m: 1, b: 2, color: "blue" }, { m: 1, b: -1, color: "red" }], step: { x: 1, y: 1 } }, 4, "Parallel lines y = x + 2 and y = x − 1: no solution.")}`],
    ["2. Standard form test", String.raw`For $a_1x+b_1y=c_1$, $a_2x+b_2y=c_2$: $\frac{a_1}{a_2}\ne\frac{b_1}{b_2}$ gives one; $\frac{a_1}{a_2}=\frac{b_1}{b_2}\ne\frac{c_1}{c_2}$ gives none; all three equal gives infinitely many.`],
    ["3. What algebra shows", String.raw`Both variables disappear: $0=k$ ($k\ne0$) is inconsistent; $0=0$ means coincident lines.`],
  ],
  tips: ["Write each equation as y = mx + b before comparing.", "Students often say 0 = 0 means x = 0.", "Ratios need care when a coefficient is 0.", "Ask what each case means in the story.", "Infinitely many does not mean every point."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
