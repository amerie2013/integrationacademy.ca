// Worksheet 4.4 worked examples (separate from the lesson's examples).
import { planeT } from "./plotT.mjs";

export const EXAMPLES = [
  { title: "Writing two relations", q: String.raw`Cyclist A starts $150$ m ahead at $3$ m/s; cyclist B starts at the line at $5$ m/s.`, steps: [String.raw`A: $d=3t+150$; B: $d=5t$.`], ans: "as shown" },
  { title: "Table method", q: "When does B catch A?", steps: [String.raw`$t=60$: A $330$, B $300$; $t=75$: both $375$ m.`], ans: "75 s, 375 m" },
  { title: "Algebra", q: String.raw`Intersect $y=4x-3$ and $y=-x+7$.`, steps: [String.raw`$5x=10$, $x=2$, $y=5$.`], ans: "$(2, 5)$" },
  { title: "Graph then algebra", q: String.raw`$y=2x-1$ and $y=-x+5$.`, fig: planeT({ view: { xmin: -4, xmax: 8, ymin: -2, ymax: 8 }, lines: [{ m: 2, b: -1, color: "blue" }, { m: -1, b: 5, color: "red" }], points: [{ x: 2, y: 3, color: "green" }], step: { x: 1, y: 1 } }, 5), steps: [String.raw`Estimate $(2,3)$; $3x=6$, $x=2$.`], ans: "$(2, 3)$" },
  { title: "Decision", q: String.raw`Studio A $40+25m$; studio B $100+15m$ per month.`, steps: [String.raw`$10m=60$, $m=6$ (190 dollars).`, "A cheaper before 6 months, B after."], ans: "6 months" },
  { title: "Parallel lines", q: String.raw`$y=-2x+6$ and $y=-2x-1$?`, steps: ["Same slope, different intercepts."], ans: "no intersection" },
  { title: "Decimals", q: String.raw`Intersect $y=1.2x+4$ and $y=-0.8x+9$.`, steps: [String.raw`$2x=5$, $x=2.5$, $y=7$.`], ans: "$(2.5, 7)$" },
  { title: "Intersection between table rows", q: String.raw`A: $y=2x+5$; B: $y=-x+12$ at $x=0..3$.`, steps: [String.raw`At $x=2$: $9$ vs $10$; at $x=3$: $11$ vs $9$; they cross between. $3x=7$, $x=\frac73$.`], ans: String.raw`$(\frac73, \frac{29}{3})$` },
  { title: "Comparing rates", q: "Two candles: 20 cm burning 2 cm/h, 15 cm burning 1 cm/h. When are they the same height?", steps: [String.raw`$20-2t=15-t$, $t=5$ h, $10$ cm.`], ans: "5 h, 10 cm" },
];
