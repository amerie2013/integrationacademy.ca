// 4.5 Graphing Special Lines (special lines and linear inequalities) — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";

export const TOPIC = "4.5 Graphing Special Lines";
export const Q = [
  num(String.raw`A store sells shirts for 15 dollars and caps for 10 dollars and needs at least 600 dollars in sales: $15s+10c\ge600$. If 28 shirts are sold, what is the least number of caps?`, 18, "420 + 10c ≥ 600 → c ≥ 18."),
  ms(String.raw`Which points satisfy both $y\ge x-2$ and $y<-x+6$? Select all.`, ["(0, 0)", "(4, 2)", "(2, 3)", "(5, 0)", "(−3, 8)"], [0, 2, 4], "(0, 0), (2, 3) and (−3, 8) satisfy both. (4, 2): 2 < 2 is false; (5, 0): 0 ≥ 3 is false."),
  num(String.raw`The region $y\ge x-2$ and $y\le-x+6$ has a corner where the boundaries meet. What is its x-coordinate?`, 4, "x − 2 = −x + 6."),
  mc(String.raw`Which inequality is shown?`, String.raw`$2x+3y<12$`, [String.raw`$2x+3y>12$`, String.raw`$2x+3y\le12$`, String.raw`$3x+2y<12$`], "Dashed line through (6, 0) and (0, 4), shaded on the origin's side.", planeDoc({ view: { xmin: -2, xmax: 8, ymin: -2, ymax: 8 }, lines: [{ m: -2 / 3, b: 4, dash: true }], shade: { m: -2 / 3, b: 4, above: false }, step: { x: 1, y: 1 } })),
  num(String.raw`A bakery has 30 oven-hours: bread 1.5 h per batch, cakes 2 h per batch, $1.5b+2c\le30$. With 12 bread batches, what is the greatest number of cake batches?`, 6, "18 + 2c ≤ 30 → c ≤ 6."),
  num(String.raw`How many points with whole-number coordinates (x, y ≥ 0) satisfy $x+y\le3$?`, 10, "Diagonals: 1 + 2 + 3 + 4 = 10."),
  tf(String.raw`Dividing $-3y\le6x-9$ by $-3$ gives $y\le-2x+3$.`, false, "Dividing by a negative flips the sign: y ≥ −2x + 3."),
  mc(String.raw`The lines $y=2$, $y=-3$, $x=1$ and $x=k$ make a square. What could $k$ be?`, "6", ["5", "4", "3"], "The height is 5, so |k − 1| = 5: k = 6 (or −4)."),
  num(String.raw`A triangle is formed by $x=0$, $y=0$ and $x+2y=8$. What is its area?`, 16, "Intercepts 8 and 4: ½ × 8 × 4."),
  ms(String.raw`Which inequalities have (2, −1) in their solution region? Select all.`, [String.raw`$y<x$`, String.raw`$y\ge-x+1$`, String.raw`$x>2$`, String.raw`$2x-y\le5$`, String.raw`$y>-1$`], [0, 1, 3], "−1 < 2 ✓; −1 ≥ −1 ✓; 2 > 2 ✗; 5 ≤ 5 ✓; −1 > −1 ✗."),
  num(String.raw`A phone plan allows at most 600 minutes. Calls to friends take 4 min each, calls to family 10 min: $4f+10g\le600$. With 50 family calls, at most how many friend calls?`, 25, "500 + 4f ≤ 600 → f ≤ 25."),
  mc(`Which line is both horizontal and passes through the intersection of y = 2x − 1 and y = −x + 8?`, String.raw`$y=5$`, [String.raw`$x=3$`, String.raw`$y=3$`, String.raw`$x=5$`], "Intersection (3, 5): horizontal line y = 5."),
  num(String.raw`For what value of $k$ is the point $(k, 2k)$ on the boundary of $y\le x+5$?`, 5, "2k = k + 5."),
  tf(String.raw`The region $y>3$ and $y<1$ (together) contains no points.`, true, "No number is both greater than 3 and less than 1."),
  num(String.raw`A rectangle has vertices on $x=-3$, $x=a$, $y=-1$, $y=5$ and area 48. If $a>-3$, what is $a$?`, 5, "Height 6; width 8; a = −3 + 8."),
  mc(String.raw`A direct variation passes through $(-6, 9)$. Which point is also on it?`, String.raw`$(4,-6)$`, [String.raw`$(4,6)$`, String.raw`$(-4,-6)$`, String.raw`$(9,-6)$`], "y = −1.5x."),
  num(String.raw`How many integers x satisfy both $2x+1>-5$ and $x\le4$?`, 7, "x > −3 and x ≤ 4: −2 … 4."),
  ms(String.raw`Which describe the region $y\le0$? Select all.`, ["the x-axis and everything below it", "the boundary y = 0 is solid", "it contains (3, −2)", "it contains (0, 1)"], [0, 1, 2], "y ≤ 0 includes the axis; (0, 1) has y > 0."),
  num(String.raw`A gardener has 48 m of fencing for a rectangle with length $l$ and width $w$: $2l+2w\le48$. If $w=9$, what is the greatest possible length (m)?`, 15, "18 + 2l ≤ 48."),
  mc(String.raw`Which inequality is equivalent to $4-2y>6x$?`, String.raw`$y<-3x+2$`, [String.raw`$y>-3x+2$`, String.raw`$y<3x-2$`, String.raw`$y>3x+2$`], "−2y > 6x − 4 → y < −3x + 2."),
];
