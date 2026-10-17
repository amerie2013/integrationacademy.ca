// MPM2D Worksheet 4.1 — Introducing Quadratic Relations (teacher edition)
import { F, gridT, parT } from "./figT.mjs";

const plot = (ys, view, f, step, labels = {}) => F({ view, points: ys.map((y, x) => ({ x, y, color: "blue" })), curves: f ? [{ f, color: "violet" }] : [], ...(step ? { step } : {}), ...labels });

const EXAMPLES = [
  { title: "A quadratic table", q: String.raw`Classify $x: 0,1,2,3,4$; $y: 1,2,5,10,17$.`,
    fig: plot([1, 2, 5, 10, 17], { xmin: -1, xmax: 5, ymin: -1, ymax: 19 }, (x) => x * x + 1, { x: 1, y: 2 }),
    steps: [String.raw`First differences: $1, 3, 5, 7$.`, String.raw`Second differences: $2, 2, 2$ — constant.`], ans: String.raw`quadratic ($y=x^2+1$)` },
  { title: "A linear table", q: String.raw`Classify $y: 5,8,11,14,17$ for $x=0,\ldots,4$.`,
    fig: plot([5, 8, 11, 14, 17], { xmin: -1, xmax: 5, ymin: 0, ymax: 19 }, (x) => 3 * x + 5, { x: 1, y: 2 }),
    steps: [String.raw`First differences all $3$.`], ans: "linear" },
  { title: "Neither", q: String.raw`Classify $y: 1,2,4,8,16$ for $x=0,\ldots,4$.`,
    fig: plot([1, 2, 4, 8, 16], { xmin: -1, xmax: 5, ymin: 0, ymax: 18 }, (x) => 2 ** x, { x: 1, y: 2 }),
    steps: [String.raw`First differences $1,2,4,8$; second differences $1,2,4$ — not constant.`, "Each value doubles: a constant ratio."], ans: "neither (exponential)" },
  { title: "A minimum in the table", q: String.raw`Classify $y: 0,-1,0,3,8$ for $x=0,\ldots,4$ and describe the graph.`,
    fig: plot([0, -1, 0, 3, 8], { xmin: -1, xmax: 5, ymin: -2, ymax: 9 }, (x) => x * x - 2 * x),
    steps: [String.raw`First differences $-1,1,3,5$; second differences $2$.`, String.raw`The values fall then rise: lowest at $x=1$.`], ans: String.raw`quadratic, opening up, minimum $-1$ at $x=1$` },
  { title: "A missing value", q: String.raw`A quadratic has $y: 4,3,6,\square,24$ for $x=0,\ldots,4$. Find the missing value.`,
    steps: [String.raw`First differences $-1, 3$: second difference $4$.`, String.raw`Next first differences $7$ and $11$: $6+7=13$; check $13+11=24$ ✓`], ans: "$13$" },
  { title: "Finding the equation", q: String.raw`Find the equation of the quadratic with $y: 2,7,16,29$ for $x=0,1,2,3$.`,
    steps: [String.raw`First differences $5,9,13$; second difference $4$, so $a=2$.`, String.raw`$c=2$; at $x=1$: $2+b+2=7\Rightarrow b=3$.`, String.raw`Check $x=3$: $18+9+2=29$ ✓`], ans: "$y=2x^2+3x+2$" },
  { title: "Opening down", q: String.raw`A ball's height (m) is $h: 0,15,20,15,0$ at $t=0,1,2,3,4$ s. Find a model.`,
    fig: plot([0, 15, 20, 15, 0], { xmin: -0.5, xmax: 4.5, ymin: -2, ymax: 24 }, (t) => -5 * (t - 2) ** 2 + 20, { x: 1, y: 4 }, { xlabel: "t", ylabel: "h" }),
    steps: [String.raw`Second differences $-10$: $a=-5$.`, String.raw`Symmetric about $t=2$, maximum $20$: $h=-5(t-2)^2+20$.`], ans: String.raw`$h=-5(t-2)^2+20$` },
  { title: "Unequal steps", q: String.raw`For $x: 0,2,4,6$ and $y: 0,4,16,36$, find the second differences. Is the relation quadratic?`,
    steps: [String.raw`First differences $4,12,20$; second differences $8,8$.`, String.raw`Constant, so quadratic — but with steps of 2 the second difference is $8a$, so $a=1$ ($y=x^2$).`], ans: "quadratic; second difference 8 = 8a" },
  { title: "A curve of best fit", q: String.raw`A football's height (m) is recorded each second: $(0,1)$, $(1,14)$, $(2,21)$, $(3,21)$, $(4,13)$, $(5,1)$. Estimate the maximum height and the hang time.`,
    fig: F({ view: { xmin: -0.5, xmax: 5.5, ymin: -2, ymax: 25 }, points: [[0, 1], [1, 14], [2, 21], [3, 21], [4, 13], [5, 1]].map(([x, y]) => ({ x, y, color: "blue" })), curves: [{ f: (t) => -3.5 * (t - 2.5) ** 2 + 22, color: "violet" }], xlabel: "t", ylabel: "h", step: { x: 1, y: 4 } }),
    steps: [String.raw`A curve of best fit: $h\approx-3.5(t-2.5)^2+22$.`, String.raw`Maximum about $22$ m near $t=2.5$ s; it lands near $t=5$ s.`], ans: "about 22 m; about 5 s in the air" },
];

const PROBLEMS = [
  { level: 1, q: String.raw`Classify $y: 2,6,10,14$ for $x=0,1,2,3$.`, recap: "2, 6, 10, 14.", ans: "linear (first differences 4)" },
  { level: 1, q: String.raw`Classify $y: 3,4,7,12,19$ for $x=0,\ldots,4$.`, recap: "3, 4, 7, 12, 19.", ans: "quadratic (second differences 2)" },
  { level: 1, q: String.raw`What is the second difference of $y=3x^2-x$ for $x=0,1,2,\ldots$?`, recap: "y = 3x² − x.", ans: "$6$" },
  { level: 2, q: String.raw`Classify $y: 2,6,18,54$ for $x=0,1,2,3$.`, recap: "2, 6, 18, 54.", ans: "neither (ratio 3)" },
  { level: 2, q: String.raw`A quadratic has $y: 1,0,3,\square,21$ for $x=0,\ldots,4$. Find the missing value.`, recap: "Missing value.", ans: "$10$" },
  { level: 2, q: String.raw`Find the equation of the quadratic with $y: 3,4,7,12$ for $x=0,1,2,3$.`, recap: "Equation from a table.", ans: "$y=x^2+3$" },
  { level: 2, q: String.raw`What is the second difference of $y=-2x^2+5x-1$ for $x=0,1,2,\ldots$?`, recap: "y = −2x² + 5x − 1.", ans: "$-4$" },
  { level: 2, q: String.raw`For $x: 0,2,4,6$ and $y: 1,9,25,49$, find the second differences and the value of $a$.`, recap: "Steps of 2.", ans: String.raw`second differences $8$; $a=1$ (8 = 8a)` },
  { level: 3, space: 5, q: String.raw`A water rocket's height (m): $(0,2)$, $(0.5,6.8)$, $(1,9.5)$, $(1.5,10)$, $(2,8.5)$, $(2.5,4.8)$. Plot the data, draw a curve of best fit, and estimate the maximum height and when it lands.`, recap: "Rocket data.", ans: "about 10 m near 1.4 s; lands near 3 s", fig: F({ view: { xmin: 0, xmax: 3.5, ymin: 0, ymax: 12 }, points: [[0, 2], [0.5, 6.8], [1, 9.5], [1.5, 10], [2, 8.5], [2.5, 4.8]].map(([x, y]) => ({ x, y, color: "blue" })), xlabel: "t (s)", ylabel: "h (m)", step: { x: 0.5, y: 2 } }) },
  { level: 3, space: 5, q: String.raw`Rectangles have perimeter 20 cm. Make a table of area for widths $1,2,3,4,5$ cm. Show the relation is quadratic and find the largest area.`, recap: "Fixed perimeter, area.", ans: String.raw`areas $9,16,21,24,25$; second differences $-2$; largest $25$ cm$^2$ (a square)` },
  { level: 3, space: 5, q: String.raw`Find $a$, $b$ and $c$ for the quadratic with $y: -1,2,9,20$ at $x=0,1,2,3$.`, recap: "Find a, b, c.", ans: "$y=2x^2+x-1$" },
  { level: 3, space: 5, q: String.raw`Use differences to explain why $y=2^x$ is not a quadratic relation.`, recap: "Why 2ˣ is not quadratic.", ans: "its differences 1, 2, 4, 8 … are never constant at any level; it has a constant ratio instead" },
  { level: 3, space: 5, q: String.raw`For which value of $k$ is the table $y: 0,3,8,k,24$ (for $x=0,\ldots,4$) quadratic?`, recap: "Find k.", ans: String.raw`$k=15$ (second differences all 2)` },
];

export const WS = {
  code: "4.1",
  title: "Introducing Quadratic Relations",
  bigideas: String.raw`A quadratic relation has $x^2$ as its highest power; its graph is a parabola. With equal $x$-steps, constant first differences mean linear, constant second differences mean quadratic, and a constant ratio means exponential. With steps of 1 the second difference equals $2a$. Real data are fitted with a curve of best fit and used to make careful predictions.`,
  goals: ["Classify tables with finite differences.", "Find missing values.", "Connect the second difference to a.", "Fit a parabola to data."],
  curriculum: "QR1",
  vocab: [["Quadratic", "highest power $x^2$"], ["Parabola", "graph of a quadratic"], ["Second differences", "differences of first differences"]],
  hook: String.raw`Toss a ball and ask students to sketch its height over time. Then show three tables (linear, quadratic, exponential) and ask which one could be the ball.`,
  concepts: [
    ["1. Differences", String.raw`First differences constant: linear. Second differences constant: quadratic.
${plot([1, 2, 5, 10, 17], { xmin: -1, xmax: 5, ymin: -1, ymax: 19 }, (x) => x * x + 1, { x: 1, y: 2 })}`],
    ["2. Second difference = 2a", String.raw`With $x$-steps of 1. With steps of $d$ it is $2ad^2$.`],
    ["3. Best fit", String.raw`Choose a vertex near the turning point, then adjust $a$ until the curve passes close to the points.`],
  ],
  tips: ["Check the x-steps are equal.", "Next minus previous, always.", "Second differences 0 means linear.", "Ratios reveal exponentials.", "Predict only near the data."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
