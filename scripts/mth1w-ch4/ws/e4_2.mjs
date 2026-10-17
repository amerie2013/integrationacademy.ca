// Worksheet 4.2 worked examples (separate from the lesson's examples).
const tab = (xs, ys) => String.raw`\begin{center}\begin{tabular}{c|${"c".repeat(xs.length)}}$x$ & ${xs.join(" & ")}\\\hline $y$ & ${ys.join(" & ")}\end{tabular}\end{center}`;

export const EXAMPLES = [
  { title: "Linear table", q: String.raw`Classify:${tab([0, 1, 2, 3, 4], [-4, -1.5, 1, 3.5, 6])}`, steps: [String.raw`Differences $2.5$ each.`], ans: String.raw`linear, $y=2.5x-4$` },
  { title: "Uneven steps", q: String.raw`Taxi fares: $(2, 7.50)$, $(5, 12)$, $(11, 21)$. Linear?`, steps: [String.raw`$\frac{4.5}{3}=1.5$ and $\frac{9}{6}=1.5$.`], ans: String.raw`linear: $C=1.5d+4.5$` },
  { title: "Quadratic", q: String.raw`Dots in triangular-square patterns: $2, 6, 12, 20, 30$.`, steps: ["First 4, 6, 8, 10; second 2, 2, 2."], ans: String.raw`quadratic ($n^2+n$)` },
  { title: "Exponential", q: String.raw`A video's views: $500, 1500, 4500, 13\,500$ on days $0$--$3$.`, steps: ["Ratio 3 each day."], ans: String.raw`exponential, $V=500(3)^d$` },
  { title: "Inverse", q: String.raw`A $90$-km trip: $vt=90$; table for $t=1,2,3,5,6$ hours.`, steps: [String.raw`$v=90, 45, 30, 18, 15$ km/h.`, "The product is always 90."], ans: "inverse variation" },
  { title: "Equation test", q: String.raw`Which are linear: $y=6-\frac x3$, $y=(x-1)^2$, $y=\frac5{x+1}$?`, steps: [String.raw`Only $y=6-\frac x3$ has degree $1$ and no $x$ in a denominator.`], ans: String.raw`$y=6-\frac x3$` },
  { title: "Second differences of a formula", q: String.raw`Second differences of $y=2x^2+1$ ($x=0..4$).`, steps: [String.raw`$1, 3, 9, 19, 33$; first $2, 6, 10, 14$; second $4$.`], ans: "4" },
  { title: "Finding k", q: String.raw`$y$ varies inversely as $x$; $y=8$ when $x=3$. Find $y$ at $x=6$.`, steps: [String.raw`$k=24$; $y=4$.`], ans: "$4$" },
  { title: "Reading a graph", q: "A graph rises more and more steeply. Which families could it be?", steps: ["Exponential or (right half of) quadratic; check the table: ratio or second differences."], ans: "exponential or quadratic" },
];
