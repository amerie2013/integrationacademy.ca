// Worksheet 4.4 — Comparing Lines (teacher edition)
import { EXAMPLES } from "./e4_4.mjs";
import { planeT } from "./plotT.mjs";

const PROBLEMS = [
  { level: 1, q: String.raw`Which line is steeper, and which starts higher: $y=4x-3$ or $y=-6x+1$?`, recap: String.raw`$y=4x-3$ vs $y=-6x+1$.`, ans: String.raw`steeper: $y=-6x+1$ ($|-6|>4$); higher start: $y=-6x+1$ ($1>-3$)` },
  { level: 1, q: String.raw`Find the point of intersection of $y=x+5$ and $y=3x-1$.`, ans: "$(3, 8)$" },
  { level: 1, q: String.raw`Do $y=-2x+4$ and $y=-2x-6$ intersect? Explain.`, recap: "Same slope, different intercepts.", ans: "no: parallel (same slope, different intercepts)" },
  { level: 2, q: String.raw`Find the intersection of $y=\frac12x+3$ and $y=-x+12$.`, ans: "$(6, 6)$" },
  { level: 2, q: String.raw`Use the table to find where the relations are equal.\begin{center}\begin{tabular}{c|ccccc}$x$ & 0 & 1 & 2 & 3 & 4\\\hline A & 2 & 5 & 8 & 11 & 14\\ B & 14 & 12 & 10 & 8 & 6\end{tabular}\end{center}`, recap: "Tables A and B.", ans: String.raw`between $x=2$ and $3$: $3x+2=14-2x$, $x=2.4$, $y=9.2$` },
  { level: 2, q: String.raw`Estimate the intersection from the graph, then find it exactly.${planeT({ view: { xmin: -2, xmax: 8, ymin: -2, ymax: 10 }, lines: [{ m: 1.5, b: -1, color: "blue" }, { m: -0.5, b: 7, color: "red" }], step: { x: 1, y: 1 } }, 5.5)}`, recap: String.raw`$y=1.5x-1$ and $y=-0.5x+7$.`, ans: "$(4, 5)$" },
  { level: 2, q: String.raw`Plan A: $15$ dollars plus $0.08$ per text. Plan B: $0.12$ per text, no fee. When do they cost the same?`, recap: "Texts: 15 + 0.08t vs 0.12t.", ans: "$375$ texts ($45$ dollars)" },
  { level: 2, q: String.raw`Solve $2x+3=-x+3$ and explain what the solution means for the two lines.`, recap: String.raw`$2x+3=-x+3$.`, ans: String.raw`$x=0$: the lines meet at $(0,3)$ — they share the y-intercept` },
  { level: 3, space: 5.5,
    q: String.raw`Two hot-air balloons: A is at $1200$ m and descends $40$ m/min; B is at $300$ m and rises $50$ m/min.
(a) Write an equation for each height.
(b) When are they at the same height, and what is it?
(c) Graph both relations for $0$ to $15$ min and mark the intersection.`,
    recap: "Balloons 1200 − 40t and 300 + 50t.",
    ans: String.raw`(a) $h=1200-40t$; $h=300+50t$ (b) $t=10$ min, $800$ m (c) lines crossing at $(10, 800)$` },
  { level: 3, space: 5.5,
    q: String.raw`Gym A: $50$ dollars to join, $35$ per month. Gym B: $200$ to join, $20$ per month. Gym C: no joining fee, $45$ per month.
(a) Write the three equations.
(b) Find where A and B are equal, and where A and C are equal.
(c) Which gym is cheapest for $3$, $8$ and $12$ months?`,
    recap: "Three gyms.",
    ans: String.raw`(a) $C=35m+50$; $C=20m+200$; $C=45m$ (b) A$=$B at $m=10$ ($400$); A$=$C at $m=5$ ($225$) (c) $3$: C ($135$); $8$: A ($330$); $12$: B ($440$)` },
  { level: 3, space: 5.5,
    q: String.raw`Maya starts $2$ km ahead and runs at $8$ km/h; Liam starts at the line and runs at $12$ km/h.
(a) Write equations for their distances from the start.
(b) When and where does Liam catch Maya?
(c) If the race is $5$ km long, who wins? By how many minutes?`,
    recap: "Runners 2 + 8t and 12t.",
    ans: String.raw`(a) $d=8t+2$; $d=12t$ (b) $t=0.5$ h, $6$ km (c) Maya finishes at $0.375$ h, Liam at $0.4167$ h: Maya by $2.5$ min (Liam catches her only after the finish)` },
  { level: 3, space: 5,
    q: String.raw`A school compares two buses for a trip: Company 1 charges $350$ dollars plus $2.25$ per km; Company 2 charges $500$ dollars plus $1.50$ per km.
(a) Find the break-even distance.
(b) The trip is $180$ km each way. Which company is cheaper, and by how much?
(c) Explain how the graph shows which company to choose for any distance.`,
    recap: "Buses 350 + 2.25d vs 500 + 1.5d.",
    ans: String.raw`(a) $d=200$ km (b) $360$ km: Company 2 ($1040$ vs $1160$), by $120$ dollars (c) left of the intersection the lower line is Company 1; right of it, Company 2` },
  { level: 3, space: 5,
    q: String.raw`Create two linear relations that (a) meet at $(2, 7)$; (b) never meet; (c) meet at every point. Justify each.`,
    recap: "Create intersecting, parallel and identical lines.",
    ans: String.raw`Sample: (a) $y=3x+1$, $y=-x+9$ (b) $y=2x+1$, $y=2x-4$ (c) $y=2x+3$, $2y=4x+6$` },
];

export const WS = {
  code: "4.4",
  title: "Comparing Lines",
  bigideas: String.raw`Two linear relations can be compared by their \textbf{rates of change} (slopes) and \textbf{initial values} (intercepts). Where they are equal is the \textbf{point of intersection}, found from a table, estimated from a graph, or calculated exactly by setting the expressions equal. The intersection is the break-even point: one option is better before it, the other after. Parallel lines (equal slopes) never meet.`,
  goals: ["Compare slopes and intercepts in context.", "Find intersections from tables.", "Estimate intersections from graphs.", "Solve for intersections algebraically.", "Interpret break-even points and make decisions."],
  curriculum: "C4.1, C4.4",
  book: "Nelson Principles of Mathematics 9, §4.5",
  vocab: [["Point of intersection", "same x and y on both lines"], ["Break-even point", "where two options are equal"], ["Linear system", "two linear relations together"], ["Parallel", "same slope: no intersection"]],
  hook: String.raw`Offer two job offers: A pays $200$ dollars a week plus $5\%$ of sales; B pays $350$ a week, no commission. Ask students to vote, then ask: “For what sales does it matter?” Graphing both shows the answer is the crossing point.`,
  concepts: [
    ["1. Comparing two relations", String.raw`Plan A $C=0.10m+30$; plan B $C=0.20m+15$. B starts lower but grows faster, so the lines cross.
${planeT({ view: { xmin: 0, xmax: 300, ymin: 0, ymax: 80 }, lines: [{ m: 0.1, b: 30, color: "blue", label: "A", lx: 260 }, { m: 0.2, b: 15, color: "red", label: "B", lx: 250 }], points: [{ x: 150, y: 45, label: "(150, 45)", color: "green" }], xlabel: "minutes", ylabel: "cost", step: { x: 50, y: 10 } }, 6.5)}`],
    ["2. Three methods", String.raw`\textbf{Table:} compute both for the same $x$. \textbf{Graph:} read the crossing (estimate). \textbf{Algebra:} $0.10m+30=0.20m+15\Rightarrow m=150$, then $C=45$.`],
    ["3. Special cases", String.raw`Equal slopes, different intercepts: parallel, no solution. Equal slopes and intercepts: the same line, infinitely many solutions.`],
  ],
  tips: ["Check the intersection in both equations.", "State the answer in context with units.", "A table may show the crossing lies between two rows.", "The less steep option wins for large x.", "Graph estimates should be confirmed with algebra."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
