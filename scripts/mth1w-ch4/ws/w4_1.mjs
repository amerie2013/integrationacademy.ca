// Worksheet 4.1 — Relations (teacher edition)
import { EXAMPLES } from "./e4_1.mjs";
import { planeT } from "./plotT.mjs";

const PROBLEMS = [
  { level: 1, q: String.raw`Name the independent and dependent variables: the time a candle burns and its height.`, recap: "Candle: time vs height.", ans: "independent: time; dependent: height" },
  { level: 1, q: String.raw`Is each relation discrete or continuous? (a) number of cars washed and money raised (b) time and the temperature of an oven.`, recap: "Cars washed / oven temperature.", ans: "(a) discrete (b) continuous" },
  { level: 1, q: String.raw`A plant is $4$ cm tall and grows $1.5$ cm per week. Make a table for weeks $0$ to $4$.`, recap: "Plant 4 cm + 1.5 cm/week.", ans: "$4, 5.5, 7, 8.5, 10$" },
  { level: 2, q: String.raw`Write an equation for the plant in Problem 3 and find its height after $10$ weeks.`, recap: "Plant equation; week 10.", ans: "$h=4+1.5w$; $19$ cm" },
  { level: 2, q: String.raw`Describe the trip shown (distance from home in km against time in minutes), with speeds.
${planeT({ view: { xmin: 0, xmax: 60, ymin: 0, ymax: 12 }, segs: [{ pts: [[0, 0], [15, 10], [35, 10], [60, 0]] }], xlabel: "time (min)", ylabel: "distance (km)", step: { x: 10, y: 2 } }, 7)}`, recap: "Trip: 0–15–35–60 min.", ans: String.raw`out $10$ km in $15$ min ($40$ km/h), stopped $20$ min, back in $25$ min ($24$ km/h)` },
  { level: 2, q: String.raw`Sketch a distance–time graph for: “Leo jogs away from home for $10$ min, walks back halfway in $10$ min, rests $5$ min, then walks home in $10$ min.”`, recap: "Sketch Leo's trip.", ans: "rise, smaller fall, flat, fall to 0 (the two walking parts have the same steepness)" },
  { level: 2, q: String.raw`A taxi charges $C=3.5+2d$. Use the equation to interpolate the cost for $4.5$ km and extrapolate for $40$ km. Which is less reliable, and why?`, recap: "Taxi 3.5 + 2d: 4.5 km and 40 km.", ans: "$12.50$; $83.50$ dollars; the 40-km value assumes the same rate far outside the data (extrapolation)" },
  { level: 2, q: String.raw`Explain why the graph of the cost of $n$ concert tickets should be drawn as separate points, but the graph of the cost of $g$ litres of gas as a line.`, recap: "Tickets vs litres of gas.", ans: "tickets are counted (discrete); litres can take any value (continuous)" },
  { level: 3, space: 5.5,
    q: String.raw`A swimming pool is drained. The table shows the water depth.
\begin{center}\begin{tabular}{c|cccccc}time (h) & 0 & 1 & 2 & 3 & 4 & 5\\\hline depth (cm) & 180 & 156 & 132 & 108 & 84 & 60\end{tabular}\end{center}
(a) Identify the variables and graph the relation. Is it discrete or continuous?
(b) Write an equation for the depth $d$ after $t$ hours.
(c) When will the pool be empty? Is that an interpolation or an extrapolation?`,
    recap: "Draining pool: 180 cm, −24 cm/h.",
    ans: String.raw`(a) $t$ independent, $d$ dependent; continuous (b) $d=180-24t$ (c) $t=7.5$ h; extrapolation (beyond the data)` },
  { level: 3, space: 5.5,
    q: String.raw`Match each story to a graph shape (distance from home vs time), and explain.
(a) “I walked to school at a steady pace.” (b) “I walked to the bus stop, waited, then rode the bus away from home.” (c) “I ran to the corner and walked back.” (d) “I stayed at home.”
Shapes: A: rising line; B: rise, flat, steep rise; C: horizontal on the axis; D: steep rise then gentler fall back to $0$.`,
    recap: "Match four stories to graph shapes.",
    ans: "(a) A (b) B (c) D (d) C — steepness is speed, flat is stopped, falling is returning" },
  { level: 3, space: 5.5,
    q: String.raw`Two hikers' distances from a trailhead are shown.
${planeT({ view: { xmin: 0, xmax: 6, ymin: 0, ymax: 16 }, lines: [{ m: 2.5, b: 0, color: "blue", label: "Ana", lx: 4.6 }, { m: 1.5, b: 4, color: "red", label: "Ben", lx: 5 }], xlabel: "time (h)", ylabel: "distance (km)", step: { x: 1, y: 2 } }, 7)}
(a) Who started ahead, and by how much? (b) Who is faster? By how much?
(c) Estimate when they are at the same place, then check with equations.`,
    recap: "Ana 2.5t vs Ben 4 + 1.5t.",
    ans: String.raw`(a) Ben, $4$ km (b) Ana, $1$ km/h faster (c) $2.5t=4+1.5t$, $t=4$ h ($10$ km)` },
  { level: 3, space: 5,
    q: String.raw`A cellphone plan costs $20$ dollars per month plus $0.05$ dollars per text.
(a) Write the relation in words, as an equation, and as a table for $0, 100, 200, 300$ texts.
(b) Is the relation discrete or continuous? Explain carefully.
(c) A bill was $41$ dollars. How many texts were sent?`,
    recap: "Plan 20 + 0.05t.",
    ans: String.raw`(a) $C=20+0.05t$: $20, 25, 30, 35$ (b) discrete (whole texts), though a line is often drawn to show the trend (c) $420$ texts` },
  { level: 3, space: 5,
    q: String.raw`A ball is dropped from a balcony. Its height (m) is recorded: $(0, 20)$, $(0.5, 18.8)$, $(1, 15.1)$, $(1.5, 9)$, $(2, 0.4)$.
(a) Plot the points. Should you join them with a straight line or a curve? Why?
(b) Estimate the height at $1.25$ s.
(c) Estimate when the ball hits the ground. Why is this an estimate?`,
    recap: "Falling ball heights.",
    ans: String.raw`(a) a smooth curve: the height falls faster and faster (b) about $12.3$ m (c) just after $2$ s (about $2.02$ s); we are extrapolating slightly beyond the data` },
];

export const WS = {
  code: "4.1",
  title: "Relations",
  bigideas: String.raw`A \textbf{relation} connects two variables: the \textbf{independent} variable (chosen, horizontal axis) and the \textbf{dependent} variable (responds, vertical axis). Relations can be shown in words, tables, graphs and equations. \textbf{Discrete} data are graphed as points; \textbf{continuous} data as a line or curve. On a distance--time graph, steepness is speed, flat means stopped, and falling means returning. Graphs let us \textbf{interpolate} and (carefully) \textbf{extrapolate}.`,
  goals: [
    "Identify independent and dependent variables.",
    "Move between words, tables, graphs and equations.",
    "Decide whether data are discrete or continuous and graph them correctly.",
    "Interpret and sketch distance–time graphs.",
    "Interpolate and extrapolate, and judge reliability.",
  ],
  curriculum: "C3.1, C4.1",
  vocab: [
    ["Independent variable", "the variable you control; horizontal axis"],
    ["Dependent variable", "the variable that responds; vertical axis"],
    ["Discrete / continuous", "only separate values / any value in an interval"],
    ["Interpolate", "estimate between data points"],
    ["Extrapolate", "predict beyond the data"],
  ],
  hook: String.raw`Walk across the front of the room while a student times you: slowly away from the board, stop, then quickly back. Ask the class to sketch “my distance from the board against time” on mini-whiteboards. Compare sketches: which parts are steep, flat, falling? This is the whole lesson in one minute.`,
  concepts: [
    ["1. Variables and representations", String.raw`Concert tickets: $C=15n+5$. Words: $5$ dollars plus $15$ per ticket. Table: $n=1,2,3,4\to20,35,50,65$. Graph: separate points (tickets are counted).
${planeT({ view: { xmin: 0, xmax: 5, ymin: 0, ymax: 80 }, points: [1, 2, 3, 4].map((n) => ({ x: n, y: 15 * n + 5, color: "blue" })), xlabel: "tickets n", ylabel: "cost C", step: { x: 1, y: 10 } }, 6, "Discrete: plot points, do not join.")}`],
    ["2. Discrete and continuous", String.raw`Counts (people, tickets, figures) are discrete. Measurements (time, length, volume, temperature) are continuous. A filling tub $V=50+45t$ is graphed as a solid line.`],
    ["3. Distance--time graphs", String.raw`${planeT({ view: { xmin: 0, xmax: 45, ymin: 0, ymax: 8 }, segs: [{ pts: [[0, 0], [20, 6], [30, 6], [40, 0]] }], xlabel: "time (min)", ylabel: "distance (km)", step: { x: 5, y: 1 } }, 6.5, "Out at 0.3 km/min, stopped 10 min, back at 0.6 km/min.")}
Steeper = faster; flat = stopped; down = returning toward the start.`],
    ["4. Interpolation and extrapolation", String.raw`Interpolating (between data) is usually reliable; extrapolating (beyond the data) assumes the pattern continues, which may be false (growth slows, prices change).`],
  ],
  tips: [
    "Ask “which depends on which?” to place the variables on the axes.",
    "Students often join discrete points; ask whether 2.5 tickets make sense.",
    "On distance–time graphs, a falling segment is not “going downhill” — it means returning.",
    "Require units on both axes.",
    "Extrapolation answers should include a sentence about reliability.",
  ],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
