// 7.6 Exponential Decay — 20 hard questions
import { mc, ms, num, tf, P, n2, eg } from "./ek.mjs";
const S = String.raw;
const below = (fn, lim) => { let t = 0; while (fn(t) >= lim) t++; return t; };

export const TOPIC = "7.6 Exponential Decay";
export const Q = [
  num(S`A $600$ mg dose has a half-life of $5$ h. After how many whole hours is less than $40$ mg left?`, below((t) => 600 * 0.5 ** (t / 5), 40), "600(½)^(t/5) < 40.", eg((t) => 600 * 0.5 ** (t / 5), { xmin: 0, xmax: 25, ymin: 0, ymax: 650 }, { x: 5, y: 50 }, { lines: [{ m: 0, b: 40, color: "green", dash: true }], xlabel: "t (h)", ylabel: "mg" })),
  n2(S`A car loses $18\%$ per year. What percent of its value is left after $4$ years?`, 100 * 0.82 ** 4, "0.82⁴ × 100."),
  num(S`A value falls from $50\,000$ to $32\,000$ in $2$ years. Enter the percent rate.`, 20, "(1 − r)² = 0.64."),
  num(S`A sample loses $\frac{15}{16}$ of its mass in $20$ h. Enter the half-life (h).`, 5, "1/16: 4 halvings."),
  n2(S`Soup at $90$ °C in a $20$ °C room is $55$ °C after $8$ min. Using the halving-difference model, enter $T$ at $20$ min.`, 20 + 70 * 0.5 ** (20 / 8), "Difference 70 → 35 in 8 min."),
  num(S`For the soup above, after how many whole minutes is it first below $25$ °C?`, below((t) => 20 + 70 * 0.5 ** (t / 8), 25), "70(½)^(t/8) < 5.", eg((t) => 20 + 70 * 0.5 ** (t / 8), { xmin: 0, xmax: 40, ymin: 0, ymax: 95 }, { x: 4, y: 10 }, { lines: [{ m: 0, b: 25, color: "green", dash: true }, { m: 0, b: 20, color: "red", dash: true }], xlabel: "t (min)", ylabel: "T" })),
  mc("The graph shows A = A₀(1 − r)ᵗ with marked points. Which r?", "25%", ["75%", "33%", "20%"], "800 → 600.", eg((t) => 800 * 0.75 ** t, { xmin: 0, xmax: 8, ymin: 0, ymax: 850 }, { x: 1, y: 100 }, { points: [P(0, 800, "(0, 800)"), P(1, 600, "(1, 600)"), P(2, 450, "(2, 450)")], xlabel: "t", ylabel: "A" })),
  n2("For that graph, enter A at t = 5.", 800 * 0.75 ** 5, "800 × 0.75⁵.", eg((t) => 800 * 0.75 ** t, { xmin: 0, xmax: 8, ymin: 0, ymax: 850 }, { x: 1, y: 100 }, { points: [P(5, 189.84, "(5, ?)")], xlabel: "t", ylabel: "A" })),
  ms(S`Select every TRUE statement.`, ["a 30% loss is a factor of 0.7", "half-life does not depend on the starting amount", "after 2 half-lives, 25% remains", "a decay graph has an x-intercept"], [0, 1, 2], "No x-intercept."),
  tf(S`A $50\%$ loss followed by a $50\%$ gain returns to the start.`, false, "0.5 × 1.5 = 0.75."),
  num(S`Machine A loses $2500$ a year from $20\,000$; machine B loses $20\%$ a year from $20\,000$. Enter the first whole year B is worth MORE than A.`, (() => { let t = 1; while (20000 * 0.8 ** t <= 20000 - 2500 * t) t++; return t; })(), "Compare year by year."),
  n2(S`Find the yearly decay rate (percent, two decimals) that halves a value in exactly $6$ years.`, (1 - 0.5 ** (1 / 6)) * 100, "(1 − r)⁶ = 0.5."),
  num(S`$4096$ atoms, half-life $3$ min. After how many minutes are $64$ atoms left?`, 18, "64 = 4096/64: 6 halvings."),
  num(S`A tire loses $3\%$ per hour from $250$ kPa. After how many whole hours is it first below $200$ kPa?`, below((t) => 250 * 0.97 ** t, 200), "0.97ᵗ < 0.8."),
  mc("A medicine's level halves every 6 h and a new dose is needed below 25% of the start. When?", "after 12 h", ["after 6 h", "after 24 h", "after 3 h"], "(½)² = 25%."),
  n2(S`Water in a leaky tank: $V=1200(0.96)^t$ L after $t$ min. Enter the litres lost in the first $10$ min.`, 1200 - 1200 * 0.96 ** 10, "1200 − V(10)."),
  num(S`A value is $6561$ now after losing $10\%$ per year for $4$ years. What was it originally?`, 10000, "6561 ÷ 0.6561."),
  num(S`A decay model has $A(2)=360$ and $A(3)=324$. Enter $A(0)$.`, Math.round(360 / 0.81 * 100) / 100, "Factor 0.9: 360 ÷ 0.81.", null, 0.011),
  num(S`Light loses $40\%$ of its intensity for each metre of murky water. What percent remains at $3$ m?`, 21.6, "0.6³.", null, 0.01),
  num(S`A substance has a half-life of $12$ years. What percent remains after $36$ years?`, 12.5, "(½)³.", null, 0.001),
];
