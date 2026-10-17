// Worksheet 4.7 worked examples (separate from the lesson's examples).
export const EXAMPLES = [
  { title: "From a graph", q: "A line crosses the y-axis at (0, 3) and passes through (4, −3).", steps: [String.raw`$m=\frac{-6}{4}=-\frac32$, $b=3$.`], ans: String.raw`$y=-\frac32x+3$` },
  { title: "Slope and point", q: String.raw`$m=4$ through $(-1,-6)$.`, steps: [String.raw`$-6=-4+b$, $b=-2$.`], ans: String.raw`$y=4x-2$` },
  { title: "Two points", q: String.raw`$(-4,6)$, $(2,-3)$.`, steps: [String.raw`$m=\frac{-9}{6}=-\frac32$; $6=6+b$, $b=0$.`], ans: String.raw`$y=-\frac32x$` },
  { title: "Table, unequal steps", q: String.raw`$(1,1),(4,10),(6,16)$.`, steps: [String.raw`$m=\frac93=3$ and $\frac62=3$; $b=-2$.`], ans: String.raw`$y=3x-2$` },
  { title: "Data model", q: String.raw`An electrician: $130$ dollars for $1.5$ h and $205$ dollars for $3$ h.`, steps: [String.raw`$m=\frac{75}{1.5}=50$; $130=75+b$, $b=55$.`], ans: String.raw`$C=50h+55$` },
  { title: "Horizontal case", q: String.raw`Through $(-3,4)$ and $(5,4)$.`, steps: ["m = 0."], ans: String.raw`$y=4$` },
  { title: "Vertical case", q: String.raw`Through $(2,-1)$ and $(2,6)$.`, steps: ["Run 0."], ans: String.raw`$x=2$` },
  { title: "Fraction slope", q: String.raw`Through $(0,1)$ and $(6,5)$.`, steps: [String.raw`$m=\frac46=\frac23$.`], ans: String.raw`$y=\frac23x+1$` },
  { title: "Checking a claim", q: String.raw`Is $(10,26)$ on $y=3x-4$?`, steps: [String.raw`$3(10)-4=26$ ✓.`], ans: "yes" },
];
