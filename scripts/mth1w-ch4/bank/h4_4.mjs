// 4.4 Comparing Lines — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";

export const TOPIC = "4.4 Comparing Lines";
export const Q = [
  num(`Three gyms: A = 60 + 25m, B = 150 + 15m, C = 35m. For a 7-month membership, what does the cheapest gym cost (dollars)?`, 235, "A 235, B 255, C 245."),
  num(`For the same gyms, after how many months does B become the cheapest of all three?`, 10, "B = A at 9 (285 each); B < A after 9, and B < C after 7.5; so from month 10 B is cheapest."),
  num(`A boat leaves port at 9:00 travelling 18 km/h. A faster boat leaves at 9:30 at 27 km/h on the same route. At what time (decimal hours, 24-h clock) does it catch up?`, 10.5, "18t = 27(t − 0.5) → t = 1.5 h after 9:00.", null, 0.01),
  num(`Two lines meet at (4, 9). One is y = 2x + 1. The other has slope −0.5. What is its y-intercept?`, 11, "9 = −2 + b."),
  ms(`The graph shows two plans. Which statements are true? Select all.`, ["the plans cost the same at 400 km", "the steeper line has the larger rate", "plan B is cheaper for 600 km", "plan A has the larger fixed cost"], [0, 1, 2], "A: 0.4d + 20 (steeper); B: 0.25d + 80. Equal at 400 km; at 600: A 260, B 230; B has the larger fixed cost.", planeDoc({ view: { xmin: 0, xmax: 700, ymin: 0, ymax: 300 }, lines: [{ m: 0.4, b: 20, color: "blue", label: "A", lx: 560 }, { m: 0.25, b: 80, color: "red", label: "B", lx: 620 }], xlabel: "distance (km)", ylabel: "cost", step: { x: 100, y: 50 } })),
  num(`Maya rows at 6 km/h downstream from a dock; Liam starts 9 km downstream of the dock 30 min later and rows back toward the dock at 4 km/h. How many hours after Maya starts do they meet?`, 1.1, "Maya: 6t; Liam: 9 − 4(t − 0.5) = 11 − 4t; 6t = 11 − 4t → t = 1.1.", null, 0.001),
  num(String.raw`The lines $y=kx+3$ and $y=2x-5$ meet at $x=4$. Find $k$.`, 0, "At x = 4 the second gives 3, so 4k + 3 = 3 → k = 0."),
  tf(`If two cost lines intersect at a negative x-value, one option is cheaper for every real situation.`, true, "For x ≥ 0 the lines never cross, so one is always above the other."),
  num(`Salary A: 2400 dollars per month + 3% of sales. Salary B: 1800 + 5% of sales. Above what monthly sales does B pay more (dollars)?`, 30000, "0.02s = 600."),
  num(`Two tanks: A has 500 L and drains 20 L/min; B has 80 L and fills at 15 L/min. After how many minutes do they hold the same amount?`, 12, "500 − 20t = 80 + 15t."),
  mc(`Plan A = 0.25t + 20 and plan B = 0.25t + 35. Which statement is correct?`, "B always costs 15 dollars more", ["they cost the same at t = 60", "A becomes more expensive after 60 texts", "they cross once"], "Parallel lines: the gap stays 15."),
  num(`The lines y = 2x + 3, y = −x + 9 and y = mx − 2 all pass through one point. Find m.`, 4.5, "First two meet at (2, 7); 7 = 2m − 2, so 2m = 9.", null, 0.001),
  num(`A school can rent bus A for 400 dollars plus 3 dollars per km, or bus B for 250 dollars plus 4.50 dollars per km. For a round trip of 2 × 70 km, how much does the cheaper option save (dollars)?`, 60, "140 km: A 820, B 880."),
  ms(`Which systems have NO solution? Select all.`, ["y = 3x − 1, y = 3x + 4", "2x + y = 5, y = −2x + 1", "y = x, y = −x", "y = 0.5x + 2, 2y − x = 4"], [0, 1], "Equal slopes with different intercepts; the last pair is the same line."),
  num(`A runner starts 200 m behind a walker. The runner goes 4 m/s, the walker 1.5 m/s. How many metres does the runner cover before catching the walker?`, 320, "4t = 200 + 1.5t → t = 80 s; 4 × 80."),
  num(String.raw`For which value of $k$ are $y=(k-1)x+2$ and $y=3x-7$ parallel?`, 4, "k − 1 = 3."),
  num(`A table shows A: (0, 18), (2, 14), (4, 10) and B: (0, 3), (2, 6), (4, 9). At what x are A and B equal (decimal)?`, 4.2857, "A = 18 − 2x, B = 3 + 1.5x; 3.5x = 15 → x ≈ 4.29.", null, 0.006),
  mc(`Why can a graph only estimate the intersection of 0.15x + 22 and 0.4x + 9?`, "the crossing (x = 52) may not fall exactly on a grid line", ["the lines are parallel", "graphs are always wrong", "the slopes are negative"], "Algebra gives the exact value: 0.25x = 13 → x = 52."),
  num(`A water slide park: day pass 45 dollars, or season pass 180 dollars plus 6 dollars per visit. How many visits make the season pass cheaper?`, 5, "45v > 180 + 6v → v > 4.6, so 5 visits."),
  num(`Two lines intersect at (−3, 5). One has slope 2; the other has y-intercept 8. What is the slope of the second line?`, 1, "5 = −3m + 8 → m = 1."),
];
