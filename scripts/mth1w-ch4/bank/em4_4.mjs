// 4.4 Comparing Lines — 20 easy + 20 medium questions
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";

export const E = [
  num(String.raw`At what x do $y=x+3$ and $y=2x$ meet?`, 3, "x + 3 = 2x."),
  num(String.raw`What is the y-value where $y=x+3$ and $y=2x$ meet?`, 6, "2(3)."),
  mc(`Which line is steeper: y = 3x + 1 or y = 5x − 2?`, "y = 5x − 2", ["y = 3x + 1", "same steepness", "cannot tell"], "5 > 3."),
  mc(`Which line has the larger initial value: y = 3x + 10 or y = 8x + 2?`, "y = 3x + 10", ["y = 8x + 2", "they are equal", "cannot tell"], "10 > 2."),
  tf(String.raw`$y=4x+1$ and $y=4x-6$ intersect.`, false, "Parallel: same slope."),
  num(String.raw`Solve $3x-2=x+8$ for x.`, 5, "2x = 10."),
  mc(`The point where two lines cross is called the…`, "point of intersection", ["y-intercept", "slope", "origin"], "Same x and y on both lines."),
  num(`Plan A costs 10 + 2x; plan B costs 4x. For what x are they equal?`, 5, "2x = 10."),
  tf(`At the point of intersection, both relations give the same y for the same x.`, true, "That is what intersection means."),
  num(`Read the graph: what is the x-coordinate of the intersection?`, 2, "The lines cross at (2, 3).", planeDoc({ view: { xmin: -4, xmax: 6, ymin: -2, ymax: 8 }, lines: [{ m: 1, b: 1, color: "blue" }, { m: -1, b: 5, color: "red" }], step: { x: 1, y: 1 } })),
  num(String.raw`Find x where $y=-x+7$ and $y=x-1$ meet.`, 4, "2x = 8."),
  mc(`Option A: 50 + 5h. Option B: 20 + 10h. Which is cheaper for 2 hours?`, "B", ["A", "they are equal", "neither"], "A: 60; B: 40."),
  mc(`For the same options, which is cheaper for 10 hours?`, "A", ["B", "they are equal", "neither"], "A: 100; B: 120."),
  num(`For the same options, after how many hours do they cost the same?`, 6, "5h = 30."),
  tf(`Two lines with the same slope and the same y-intercept are the same line.`, true, "Every point is shared."),
  num(String.raw`Find y where $y=2x+1$ and $y=-x+10$ meet.`, 7, "x = 3; 2(3) + 1."),
  mc(`Two lines have slopes 2 and −3. How many times do they cross?`, "exactly once", ["never", "twice", "infinitely often"], "Different slopes: one intersection."),
  num(`Runner A starts 10 m ahead at 3 m/s; runner B starts at 0 at 5 m/s. After how many seconds does B catch A?`, 5, "5t = 3t + 10."),
  mc(`In a cost comparison, the option with the smaller rate is cheaper…`, "for large amounts", ["for small amounts", "always", "never"], "Its line is less steep."),
  num(String.raw`Solve $0.5x+4=2x-2$.`, 4, "1.5x = 6."),
];

export const M = [
  num(String.raw`Find the x-coordinate where $y=\frac12x+2$ and $y=-x+11$ meet.`, 6, "1.5x = 9."),
  num(String.raw`Find the y-coordinate of that intersection ($y=\frac12x+2$, $y=-x+11$).`, 5, "−6 + 11."),
  num(`A gym: A = 40 + 30m; B = 100 + 20m. After how many months are they equal?`, 6, "10m = 60."),
  num(`For those gyms, what is the cost at the break-even point (dollars)?`, 220, "40 + 180."),
  mc(`For the gyms, which is cheaper for a 12-month membership?`, "B", ["A", "they are equal", "neither"], "A 400; B 340."),
  ms(`Which pairs of lines intersect exactly once? Select all.`, ["y = 2x + 1 and y = 3x + 1", "y = −x and y = −x + 4", "y = 5 and y = x", "y = 4x − 2 and 8x − 2y = 4"], [0, 2], "The second pair is parallel; the fourth pair is the same line."),
  num(`Two candles: A is 30 cm and burns 3 cm/h; B is 20 cm and burns 1 cm/h. After how many hours are they the same height?`, 5, "30 − 3t = 20 − t."),
  num(`Read the graph: at what x do the plans cost the same?`, 150, "The lines cross at 150 minutes.", planeDoc({ view: { xmin: 0, xmax: 300, ymin: 0, ymax: 70 }, lines: [{ m: 0.1, b: 25, color: "blue" }, { m: 0.2, b: 10, color: "red" }], xlabel: "minutes", ylabel: "cost", step: { x: 50, y: 10 } })),
  num(String.raw`Solve the system by setting equal: $y=1.5x-3$, $y=-0.5x+5$. What is x?`, 4, "2x = 8."),
  tf(String.raw`The lines $y=3x+2$ and $2y=6x+4$ intersect at exactly one point.`, false, "They are the same line (infinitely many points)."),
  num(`Car rental A: 45 + 0.20d. Rental B: 0.35d. For what distance d are they equal (km)?`, 300, "0.15d = 45."),
  mc(`Rental B (0.35d) is cheaper when…`, "d < 300", ["d > 300", "d = 300 only", "never"], "Below the break-even distance."),
  num(`Ana has 120 dollars and saves 15 per week. Ben has 300 and spends 15 per week. After how many weeks do they have the same amount?`, 6, "120 + 15w = 300 − 15w."),
  num(`Find the x-coordinate of the intersection of y = 3x − 7 and y = −2x + 8.`, 3, "5x = 15."),
  mc(`A table: x = 0, 1, 2, 3; A: 5, 8, 11, 14; B: 11, 10, 9, 8. Where are A and B equal?`, "x = 1.5, y = 9.5", ["x = 2, y = 9", "x = 1, y = 10", "they never meet"], "3x + 5 = 11 − x → x = 1.5."),
  num(`Two trains leave the same station on parallel tracks: one at noon at 80 km/h, one at 1 p.m. at 120 km/h. How many hours after noon does the second catch the first?`, 3, "80t = 120(t − 1)."),
  ms(`At the intersection of two cost lines, which are true? Select all.`, ["both options cost the same", "the x-value is the break-even amount", "both lines have the same slope", "on one side, one option is cheaper"], [0, 1, 3], "Slopes are different (or they would be parallel)."),
  num(String.raw`For what value of $b$ does $y=2x+b$ pass through the intersection of $y=x+1$ and $y=-x+5$?`, -1, "Intersection (2, 3): 3 = 4 + b."),
  num(`Phone plan X: 25 + 0.05t; plan Y: 10 + 0.15t. For how many texts are they equal?`, 150, "0.10t = 15."),
  mc(`For 200 texts, which plan (X: 25 + 0.05t, Y: 10 + 0.15t) is cheaper?`, "X", ["Y", "they are equal", "neither"], "X 35; Y 40."),
];
