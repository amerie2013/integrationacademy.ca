// Worksheet 4.3 worked examples (separate from the lesson's examples).
import { planeT } from "./plotT.mjs";

export const EXAMPLES = [
  { title: "Direct variation", q: String.raw`A lifeguard earns $14.75$ dollars per hour. Equation; pay for $6$ h.`, steps: [String.raw`$E=14.75h$; $14.75(6)=88.50$.`], ans: String.raw`$E=14.75h$; $88.50$ dollars` },
  { title: "From a table", q: String.raw`$y=6.5, 10.5, 14.5, 18.5$ at $x=1..4$.`, steps: [String.raw`$m=4$; back to $x=0$: $2.5$.`], ans: String.raw`$y=4x+2.5$` },
  { title: "Graphing", q: String.raw`Graph $y=-\frac34x+5$.`, fig: planeT({ view: { xmin: -4, xmax: 10, ymin: -4, ymax: 8 }, lines: [{ m: -0.75, b: 5 }], tri: { x: 0, y: 5, run: 4, rise: -3 }, points: [{ x: 0, y: 5, color: "green" }, { x: 4, y: 2 }, { x: 8, y: -1 }] }, 5), steps: [String.raw`$(0,5)$; right $4$, down $3$.`], ans: "(0, 5), (4, 2), (8, −1)" },
  { title: "Reading a graph", q: String.raw`A kayak rental passes through $(0,15)$ and $(3,42)$.`, steps: [String.raw`$m=\frac{27}{3}=9$, $b=15$.`], ans: String.raw`$C=9h+15$` },
  { title: "Using an equation", q: String.raw`$C=0.28d+15$: cost for $80$ km; distance for $50$ dollars.`, steps: [String.raw`$37.40$; $0.28d=35$, $d=125$.`], ans: "37.40 dollars; 125 km" },
  { title: "Slope from two points", q: String.raw`Slope through $(-2,5)$ and $(2,-1)$.`, steps: [String.raw`$\frac{-6}{4}=-\frac32$.`], ans: String.raw`$-\frac32$` },
  { title: "Zero slope", q: "A streaming service costs 15 dollars a month no matter how much you watch. Equation and graph?", steps: [String.raw`$C=15$: slope $0$, horizontal line.`], ans: String.raw`$C=15$` },
  { title: "Negative rate", q: String.raw`A phone is at $100\%$ and loses $8\%$ per hour. Equation; when at $20\%$?`, steps: [String.raw`$B=100-8t$; $8t=80$, $t=10$.`], ans: "10 h" },
  { title: "Comparing m and b", q: String.raw`Which grows faster, $y=3x+20$ or $y=5x$? Which starts higher?`, steps: ["5 > 3: the second grows faster; the first starts at 20."], ans: "faster: y = 5x; higher start: y = 3x + 20" },
];
