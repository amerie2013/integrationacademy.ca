// Worksheet 4.5 worked examples (separate from the lesson's examples).
import { planeT } from "./plotT.mjs";

export const EXAMPLES = [
  { title: "Horizontal", q: String.raw`A freezer stays at $-18\,^\circ$C. Equation of temperature against time?`, steps: [String.raw`$T=-18$, slope $0$.`], ans: String.raw`$T=-18$` },
  { title: "Vertical", q: String.raw`Line through $(4,-2)$ and $(4,3)$.`, steps: ["Run 0: slope undefined."], ans: String.raw`$x=4$` },
  { title: "Direct variation", q: String.raw`Cheese costs $22$ dollars per kg; cost of $0.35$ kg.`, steps: [String.raw`$C=22k$; $7.70$.`], ans: String.raw`$C=22k$` },
  { title: "Graphing an inequality", q: String.raw`Graph $y\le-2x+3$ and test $(0,0)$.`,
    fig: planeT({ view: { xmin: -6, xmax: 6, ymin: -6, ymax: 6 }, lines: [{ m: -2, b: 3 }], shade: { m: -2, b: 3, above: false }, points: [{ x: 0, y: 0, color: "green" }] }, 5),
    steps: ["Solid; (0, 0): 0 ≤ 3 true; shade below."], ans: "below, solid" },
  { title: "Budget", q: String.raw`Paint costs $10$ dollars per can and brushes $4$ dollars; $10x+4y\le50$. Is $(3,4)$ affordable?`, steps: [String.raw`$30+16=46\le50$.`], ans: "yes" },
  { title: "Rearranging first", q: String.raw`Graph $4x-2y>6$.`, steps: [String.raw`$-2y>-4x+6$; divide by $-2$ and flip: $y<2x-3$.`, "Dashed, shade below."], ans: String.raw`$y<2x-3$` },
  { title: "Reading a graph", q: "A dashed line y = 2x + 1 with the region above shaded.", steps: ["Dashed and above."], ans: String.raw`$y>2x+1$` },
  { title: "Horizontal inequality", q: String.raw`Graph $y\le-1$.`, steps: [String.raw`Solid horizontal line $y=-1$; shade below.`], ans: "below y = −1" },
  { title: "Vertical inequality", q: String.raw`Graph $x>2$.`, steps: [String.raw`Dashed vertical line $x=2$; shade to the right.`], ans: "right of x = 2" },
];
