// Worksheet 4.3 — Representing Linear Relations: y = mx + b (teacher edition)
import { EXAMPLES } from "./e4_3.mjs";
import { planeT } from "./plotT.mjs";

const PROBLEMS = [
  { level: 1, q: String.raw`State the slope and y-intercept: (a) $y=-4x+9$ (b) $y=7-\frac12x$ (c) $y=6x$.`, recap: "m and b of three equations.", ans: String.raw`(a) $-4, 9$ (b) $-\frac12, 7$ (c) $6, 0$` },
  { level: 1, q: String.raw`Find the slope through $(2,-1)$ and $(6,7)$.`, ans: "$2$" },
  { level: 1, q: String.raw`Direct or partial variation? (a) $C=3.2n$ (b) $C=25+3.2n$ (c) $d=60t$.`, recap: "Direct or partial.", ans: "(a) direct (b) partial (c) direct" },
  { level: 2, q: String.raw`Graph $y=\frac34x-2$ using the intercept and the slope. List three points on the line.`, recap: String.raw`Graph $y=\frac34x-2$.`, ans: String.raw`$(0,-2), (4,1), (8,4)$` },
  { level: 2, q: String.raw`Write the equation of the line.${planeT({ view: { xmin: -6, xmax: 6, ymin: -6, ymax: 6 }, lines: [{ m: -1.5, b: 3 }], points: [{ x: 0, y: 3 }, { x: 2, y: 0 }] }, 5.5)}`, recap: "Line through (0, 3) and (2, 0).", ans: String.raw`$y=-\frac32x+3$` },
  { level: 2, q: String.raw`A table has $y=8, 13.5, 19, 24.5$ at $x=1,2,3,4$. Write the equation.`, recap: String.raw`$y$: $8, 13.5, 19, 24.5$.`, ans: String.raw`$y=5.5x+2.5$` },
  { level: 2, q: String.raw`A babysitter earns $12$ dollars plus $15$ dollars per hour. Write the equation, find the pay for $4.5$ h, and find the hours for $102$ dollars.`, recap: "Babysitter 12 + 15h.", ans: String.raw`$P=15h+12$; $79.50$ dollars; $6$ h` },
  { level: 2, q: String.raw`A water tank holds $800$ L and drains at $25$ L/min. Write $V$ in terms of $t$ and give the meaning of the slope and intercept.`, recap: "Tank 800 L, −25 L/min.", ans: String.raw`$V=800-25t$: starts at $800$ L, loses $25$ L each minute` },
  { level: 3, space: 5.5,
    q: String.raw`Two car rentals: Speedy charges $45$ dollars per day plus $0.20$ dollars per km; Thrifty charges $0.35$ dollars per km and no daily fee.
(a) Write an equation for each for a one-day rental. Which is a direct variation?
(b) Graph both on the same axes for $0$ to $500$ km.
(c) For what distances is Thrifty cheaper?`,
    recap: "Speedy 45 + 0.20d; Thrifty 0.35d.",
    ans: String.raw`(a) $C=0.2d+45$; $C=0.35d$ (direct) (b) lines crossing at $(300, 105)$ (c) under $300$ km` },
  { level: 3, space: 5.5,
    q: String.raw`A wheelchair ramp rises $0.6$ m over a horizontal distance of $7.2$ m.
(a) Find its slope as a fraction and a decimal.
(b) The building code requires a slope of at most $\frac1{12}$. Does the ramp meet the code?
(c) What horizontal length is needed for a rise of $0.75$ m at slope exactly $\frac1{12}$?`,
    recap: "Ramp 0.6 m over 7.2 m.",
    ans: String.raw`(a) $\frac{1}{12}\approx0.083$ (b) yes, exactly at the limit (c) $9$ m` },
  { level: 3, space: 5.5,
    q: String.raw`The graph shows a printing company's charges.
${planeT({ view: { xmin: 0, xmax: 500, ymin: 0, ymax: 300 }, lines: [{ m: 0.4, b: 60, color: "blue" }], points: [{ x: 0, y: 60, label: "(0, 60)", color: "green" }, { x: 300, y: 180, label: "(300, 180)" }], xlabel: "posters n", ylabel: "cost C", step: { x: 50, y: 50 } }, 7)}
(a) Find the equation.
(b) Explain the meaning of $m$ and $b$.
(c) Another company charges $0.55$ dollars per poster with no set-up fee. When is it cheaper?`,
    recap: "Printing: (0, 60), (300, 180).",
    ans: String.raw`(a) $C=0.4n+60$ (b) $0.40$ dollars per poster; $60$-dollar set-up (c) $0.55n<0.4n+60$ gives $n<400$ posters` },
  { level: 3, space: 5,
    q: String.raw`A candle $30$ cm tall burns $2.5$ cm per hour.
(a) Write the equation and state the domain that makes sense.
(b) Graph it and label both intercepts. What does each mean?
(c) A second candle is $24$ cm tall and burns $1.5$ cm per hour. Which candle lasts longer, and by how long?`,
    recap: "Candles 30 − 2.5t and 24 − 1.5t.",
    ans: String.raw`(a) $h=30-2.5t$, $0\le t\le12$ (b) $(0,30)$ start height; $(12,0)$ burns out (c) second lasts $16$ h, $4$ h longer` },
  { level: 3, space: 5,
    q: String.raw`For $y=mx+b$, describe in words what happens to the graph and the real situation when (a) $b$ increases by $10$ in $C=0.4n+60$; (b) $m$ doubles; (c) $m$ becomes $0$.`,
    recap: "Effects of changing m and b in a cost model.",
    ans: "(a) every cost rises by 10: the line moves up (b) cost per item doubles: steeper (c) a flat fee only: horizontal line" },
];

export const WS = {
  code: "4.3",
  title: "Representing Linear Relations",
  bigideas: String.raw`Every linear relation can be written $y=mx+b$: $m$ is the \textbf{rate of change} (slope $=\frac{\text{rise}}{\text{run}}$) and $b$ is the \textbf{initial value} (y-intercept). When $b=0$ the relation is a \textbf{direct variation} (through the origin); otherwise it is a \textbf{partial variation}. Graph from $(0,b)$ using the slope as a step.`,
  goals: ["Identify m and b in words, tables, graphs and equations.", "Compute slope as rise over run.", "Distinguish direct and partial variation.", "Graph y = mx + b from b and m.", "Model situations and answer questions with the equation."],
  curriculum: "C4.2, C4.3",
  vocab: [["Slope", "rise ÷ run; rate of change"], ["y-intercept", "value at x = 0; initial value"], ["Direct variation", "y = mx (through the origin)"], ["Partial variation", "y = mx + b, b ≠ 0"]],
  hook: String.raw`Show two taxi signs: “2.50 per km” and “4.00 + 2.00 per km”. Ask which is better for a 3-km ride and for a 20-km ride. Students compute, then we graph both: one starts at the origin, one does not. That difference — the initial value — is today's idea.`,
  concepts: [
    ["1. The meaning of m and b", String.raw`Plumber: $C=60h+75$. $b=75$ (call-out fee, value at $h=0$); $m=60$ (dollars per hour, the first difference and the slope).`],
    ["2. Slope as rise over run", String.raw`${planeT({ view: { xmin: -6, xmax: 6, ymin: -6, ymax: 6 }, lines: [{ m: 2 / 3, b: -1 }], tri: { x: 0, y: -1, run: 3, rise: 2 }, points: [{ x: 0, y: -1, color: "green" }, { x: 3, y: 1 }] }, 5.5, "From (0, −1): right 3, up 2.")}`],
    ["3. Direct and partial variation", String.raw`Direct: $E=16.5h$ (through the origin). Partial: $C=0.35d+12$ (starts at $12$). In a partial variation, doubling $x$ does \emph{not} double $y$.`],
  ],
  tips: ["b is the value at x = 0, not the first table value.", "y = 5 − 2x has slope −2.", "Negative slope: step down as you move right.", "Interpret both m and b with units.", "Use fractions for slopes when graphing."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
