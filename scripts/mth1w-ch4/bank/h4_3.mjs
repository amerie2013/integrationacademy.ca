// 4.3 Representing Linear and Non-Linear Relations (y = mx + b) — 20 hard questions
import { mc, ms, num, tf, mx } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";

export const TOPIC = "4.3 Representing Linear and Non-Linear Relations";
export const Q = [
  mx(String.raw`A linear relation has $y=11$ when $x=2$ and $y=-1$ when $x=6$. Write its equation.`, "-3*x+17", "m = −12/4 = −3; 11 = −6 + b → b = 17."),
  num(`A printing company charges 0.35 dollars per flyer plus a set-up fee. 400 flyers cost 165 dollars. What is the set-up fee?`, 25, "165 − 140."),
  num(`Read the graph of a plan's cost. What is the cost per minute (dollars)?`, 0.15, "From (0, 20) to (200, 50): 30/200.", planeDoc({ view: { xmin: 0, xmax: 300, ymin: 0, ymax: 80 }, lines: [{ m: 0.15, b: 20, color: "blue" }], points: [{ x: 0, y: 20, label: "(0, 20)" }, { x: 200, y: 50, label: "(200, 50)" }], xlabel: "minutes", ylabel: "cost", step: { x: 50, y: 10 } }), 0.001),
  num(`For the plan in the previous graph, how many minutes cost 62 dollars?`, 280, "0.15t + 20 = 62."),
  mc(`A relation is a direct variation. When x = 6, y = 15. Which point is also on it?`, "(10, 25)", ["(10, 19)", "(8, 17)", "(2, 9)"], "k = 2.5: 2.5 × 10 = 25."),
  num(String.raw`A partial variation passes through $(0, 4)$ and $(5, 19)$. What is y when x = 12?`, 40, "m = 3; 36 + 4."),
  tf(`In a partial variation, doubling x always doubles y.`, false, "Only true for direct variation (b = 0)."),
  num(String.raw`The line $y=mx+3$ passes through $(4,-5)$. Find m.`, -2, "−5 = 4m + 3."),
  ms(`A taxi's fare graph starts at (0, 3.75) and has slope 1.6. Which are true? Select all.`, ["the flag fee is 3.75 dollars", "each km costs 1.60 dollars", "a 10-km ride costs 19.75 dollars", "the relation is a direct variation", "the fare for 0 km is 0"], [0, 1, 2], "C = 1.6d + 3.75; 16 + 3.75 = 19.75."),
  num(`A ramp rises 0.45 m over a horizontal run of 5.4 m. What is its slope as a decimal (3 places)?`, 0.083, "0.45 ÷ 5.4 ≈ 0.0833.", null, 0.0006),
  num(`A water tank holds 900 L and is filled at 45 L/min starting with 135 L in it. After how many minutes is it full?`, 17, "45t + 135 = 900."),
  mx(String.raw`Celsius and Fahrenheit: $0\,^\circ$C = $32\,^\circ$F and $100\,^\circ$C = $212\,^\circ$F. Write F in terms of C.`, "1.8*C+32", "m = 180/100 = 1.8; b = 32."),
  num(`Using F = 1.8C + 32, what Celsius temperature equals 50 °F?`, 10, "1.8C = 18."),
  mc(`Two phone plans: A = 0.20t + 10, B = 0.12t + 22. Which has the larger initial value and which the larger rate?`, "B has the larger initial value; A has the larger rate", ["A has both", "B has both", "A has the larger initial value; B the larger rate"], "22 > 10; 0.20 > 0.12."),
  num(`Gas in a car: 52 L after 0 km, 37 L after 200 km (steady use). How many km until 10 L remain?`, 560, "Rate −0.075 L/km; 52 − 0.075d = 10."),
  num(`A line through the origin passes through (−4, 10). What is y when x = 6?`, -15, "m = −2.5."),
  tf(String.raw`The graph of $C=15n+5$ for whole numbers $n$ should be drawn as a solid line.`, false, "n is a count: plot points."),
  num(String.raw`A table: $x$ = 3, 7, 12; $y$ = 1, 9, 19. What is the y-intercept?`, -5, "m = 2; 1 = 6 + b."),
  num(String.raw`A babysitter earns a fixed 10 dollars plus an hourly rate. 4 hours pay 70 dollars. What is the pay for 7 hours?`, 115, "rate 15; 10 + 105."),
  mc(`Which situation is NOT modelled by a linear relation?`, "a savings account earning 5% interest per year, compounded", ["a taxi fare with a flag fee and a per-km rate", "a candle burning at a steady rate", "earnings at a fixed hourly wage"], "Compound interest grows by a constant ratio: exponential."),
];
