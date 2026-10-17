// Worksheet 4.2 — Linear vs Non-Linear Relations (teacher edition)
import { EXAMPLES } from "./e4_2.mjs";
import { planeT } from "./plotT.mjs";

const tab = (xs, ys, extra = "") => String.raw`\begin{center}\begin{tabular}{c|${"c".repeat(xs.length)}}$x$ & ${xs.join(" & ")}\\\hline $y$ & ${ys.join(" & ")}${extra}\end{tabular}\end{center}`;

const PROBLEMS = [
  { level: 1, q: String.raw`Is this relation linear? Give the first differences.${tab([0, 1, 2, 3, 4], [-3, 2, 7, 12, 17])}`, recap: String.raw`$y$: $-3, 2, 7, 12, 17$.`, ans: "linear; first differences $5$" },
  { level: 1, q: String.raw`Classify each equation as linear or non-linear: (a) $y=4-x$ (b) $y=x^2+3$ (c) $y=\frac x5$ (d) $xy=20$.`, recap: "Classify four equations.", ans: "(a) linear (b) non-linear (c) linear (d) non-linear" },
  { level: 1, q: String.raw`Find the second differences of $y=x^2$ for $x=0$ to $4$.`, recap: String.raw`Second differences of $y=x^2$.`, ans: "$2, 2, 2$" },
  { level: 2, q: String.raw`Is this relation linear? (The x-steps are not equal.)${tab([1, 3, 4, 8], [5, 11, 14, 26])}`, recap: "Uneven-step table.", ans: String.raw`yes: $\frac{\Delta y}{\Delta x}=3$ each time; $y=3x+2$` },
  { level: 2, q: String.raw`A population of fish is $200, 300, 450, 675$ in years $0$ to $3$. Linear, quadratic or exponential? Predict year $4$.`, recap: "Fish 200, 300, 450, 675.", ans: String.raw`exponential (ratio $1.5$); $1012.5\approx1013$` },
  { level: 2, q: String.raw`$y$ varies inversely as $x$, and $y=15$ when $x=4$. Find $k$, then $y$ when $x=10$.`, recap: String.raw`Inverse: $y=15$ at $x=4$.`, ans: String.raw`$k=60$; $y=6$` },
  { level: 2, q: String.raw`Classify the relation and describe the graph.${tab([0, 1, 2, 3, 4], [1, 3, 9, 27, 81])}`, recap: String.raw`$y$: $1, 3, 9, 27, 81$.`, ans: "exponential (ratio 3); curve rising faster and faster" },
  { level: 2, q: String.raw`Explain why first differences can be misleading when the x-values are $0, 2, 3, 7$, and what to do instead.`, recap: "Unequal steps and first differences.", ans: String.raw`equal y-changes over unequal x-steps are different rates; use $\frac{\Delta y}{\Delta x}$` },
  { level: 3, space: 5.5,
    q: String.raw`A hot drink cools. Its temperature ($^\circ$C) is recorded every $5$ min: $90, 72, 58, 47, 39$.
(a) Find the first differences. Is the relation linear?
(b) Sketch the graph. What happens to the rate of cooling?
(c) Would a linear model over-estimate or under-estimate the temperature at $30$ min? Explain.`,
    recap: "Cooling drink 90, 72, 58, 47, 39.",
    ans: String.raw`(a) $-18,-14,-11,-8$: not linear (b) a curve flattening out: it cools more slowly as it nears room temperature (c) a line through the early data would fall too fast and under-estimate` },
  { level: 3, space: 5.5,
    q: String.raw`Stopping distance of a car at different speeds:${tab(["20", "40", "60", "80", "100"], ["6", "18", "36", "60", "90"])}($x$: speed in km/h; $y$: distance in m)
(a) Show that the relation is not linear but has constant second differences.
(b) Use the pattern to predict the stopping distance at $120$ km/h.
(c) Why does doubling the speed more than double the stopping distance?`,
    recap: "Stopping distance 6, 18, 36, 60, 90.",
    ans: String.raw`(a) first $12, 18, 24, 30$; second $6, 6, 6$ (b) next first difference $36$: $126$ m (c) the relation is quadratic: distance grows like the square of speed` },
  { level: 3, space: 5.5,
    q: String.raw`A rectangle has area $36$ cm$^2$. Its length $l$ and width $w$ satisfy $lw=36$.
(a) Make a table for $w=1, 2, 3, 4, 6, 9, 12$.
(b) Plot the points and describe the graph.
(c) Is the relation linear? Explain using the table.`,
    recap: String.raw`Rectangles with $lw=36$.`,
    ans: String.raw`(a) $36, 18, 12, 9, 6, 4, 3$ (b) a hyperbola-shaped curve falling toward the axes (c) no: $\frac{\Delta l}{\Delta w}$ changes; the product is constant (inverse variation)` },
  { level: 3, space: 5,
    q: String.raw`For each relation, decide linear, quadratic, exponential or inverse, and give a reason from its table or equation.
(a) $y=5(2)^x$ (b) $y=3x^2-x$ (c) $y=\frac{24}{x}$ (d) $3x+2y=12$`,
    recap: "Classify four relations with reasons.",
    ans: String.raw`(a) exponential: constant ratio 2 (b) quadratic: $x^2$ term, constant second differences (c) inverse: $xy=24$ (d) linear: $y=-1.5x+6$, degree 1` },
  { level: 3, space: 5,
    q: String.raw`Create your own table of $5$ values for (a) a linear relation with rate of change $-4$, (b) a quadratic relation, (c) an exponential relation with ratio $3$. Show the differences or ratios that prove each type.`,
    recap: "Create three tables.",
    ans: String.raw`Sample: (a) $10, 6, 2, -2, -6$ (b) $0, 1, 4, 9, 16$ (second differences $2$) (c) $2, 6, 18, 54, 162$ (ratio $3$)` },
];

export const WS = {
  code: "4.2",
  title: "Linear vs Non-Linear Relations",
  bigideas: String.raw`A relation is \textbf{linear} when its rate of change is constant: equal first differences for equal x-steps, or equal $\frac{\Delta y}{\Delta x}$ in general; its graph is a straight line and its equation has degree $1$. Non-linear relations include \textbf{quadratic} (constant second differences, parabola), \textbf{exponential} (constant ratio) and \textbf{inverse variation} $xy=k$ (hyperbola).`,
  goals: ["Use first differences and Δy/Δx to test for linearity.", "Recognize quadratic relations by second differences.", "Recognize exponential relations by a constant ratio.", "Recognize inverse variation xy = k.", "Classify relations from tables, graphs and equations."],
  curriculum: "C3.2, C4.1, C4.2",
  vocab: [["First differences", "changes in y for equal steps in x"], ["Rate of change", String.raw`$\frac{\Delta y}{\Delta x}$`], ["Second differences", "differences of the first differences"], ["Constant ratio", "each y divided by the previous y"], ["Inverse variation", "xy = k"]],
  hook: String.raw`Show three graphs without labels: a straight line, a parabola and a steep curve. Ask: “Which one is the cost of gas, which is the height of a thrown ball, which is a viral video's views?” Then reveal the tables. Students discover that the table already tells which is which.`,
  concepts: [
    ["1. Linear: constant rate of change", String.raw`${tab([0, 1, 2, 3], [-2, 1, 4, 7])} First differences $3, 3, 3$. With unequal steps, use $\frac{\Delta y}{\Delta x}$: $(0,1),(2,5),(5,11)$ gives $\frac42=2$ and $\frac63=2$.`],
    ["2. Non-linear families", String.raw`\begin{center}\begin{tabular}{lll}\toprule Family & Clue & Graph\\\midrule quadratic & constant second differences & parabola\\ exponential & constant ratio & grows faster and faster\\ inverse & $xy=k$ & hyperbola\\\bottomrule\end{tabular}\end{center}
${planeT({ view: { xmin: 0, xmax: 6, ymin: 0, ymax: 40 }, curves: [{ f: (x) => x * x, color: "red" }, { f: (x) => 2 ** x, color: "green" }, { f: (x) => 24 / x, a: 0.6, color: "amber" }], lines: [{ m: 4, b: 2, color: "blue" }], step: { x: 1, y: 5 } }, 7, "Blue linear, red quadratic, green exponential, orange inverse.")}`],
    ["3. From the equation", String.raw`Linear equations have $x$ only to the first power and not in a denominator: $y=\frac x4-7$ is linear; $y=x^2$, $y=3^x$ and $y=\frac{12}{x}$ are not.`],
  ],
  tips: ["Check every difference, not just two.", "Unequal x-steps: divide by Δx.", "Exponential vs quadratic: test ratios as well as second differences.", "xy = k: check the product, not the differences.", "Real data are rarely exact; “close to constant” suggests a linear model."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
