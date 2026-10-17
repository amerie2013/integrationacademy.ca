// Worksheet 4.6 worked examples (separate from the lesson's examples).
export const EXAMPLES = [
  { title: "Translation", q: String.raw`$y=-x+5$ vs $y=-x$.`, steps: ["Same slope; up 5."], ans: "translated up 5" },
  { title: "Rotation", q: String.raw`$y=5x-2$ vs $y=x-2$.`, steps: ["Same intercept (0, −2); steeper."], ans: "rotated about (0, −2), steeper" },
  { title: "Reflection", q: String.raw`$y=2x+5$ vs $y=-2x+5$.`, steps: [String.raw`$(1,7)\leftrightarrow(-1,7)$.`], ans: "reflection in the y-axis" },
  { title: "Several changes", q: String.raw`$y=-3x-4$ from $y=x$.`, steps: ["Steeper (×3), reflected, down 4."], ans: "as described" },
  { title: "Fee and rate", q: String.raw`A bus fare $C=3d+5$ becomes $C=3.4d+7$; extra cost for $10$ km.`, steps: [String.raw`$35\to41$.`], ans: "6 dollars" },
  { title: "Writing a translation", q: String.raw`$y=-x+2$ moved up $3$.`, steps: [String.raw`$b$: $2\to5$.`], ans: String.raw`$y=-x+5$` },
  { title: "Finding m", q: String.raw`$y=mx-1$ passes through $(2,7)$.`, steps: [String.raw`$7=2m-1$, $m=4$.`], ans: "$m=4$" },
  { title: "Steepness order", q: String.raw`Order $y=0.2x$, $y=-5x$, $y=x$.`, steps: ["0.2, 1, 5."], ans: String.raw`$0.2x$, $x$, $-5x$` },
  { title: "Parallel family", q: String.raw`Write two lines parallel to $y=-3x+1$.`, steps: ["Keep m = −3."], ans: String.raw`e.g. $y=-3x$, $y=-3x+8$` },
];
