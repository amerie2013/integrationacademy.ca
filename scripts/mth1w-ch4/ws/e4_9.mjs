// Worksheet 4.9 worked examples (separate from the lesson's examples).
export const EXAMPLES = [
  { title: "Testing", q: String.raw`$y=-2x+1$ and $4x+2y-7=0$.`, steps: [String.raw`Second: $y=-2x+3.5$, slope $-2$.`], ans: "parallel" },
  { title: "Negative reciprocal", q: String.raw`Perpendicular to $-\frac74$.`, steps: [String.raw`$\frac47$.`], ans: String.raw`$\frac47$` },
  { title: "Parallel through a point", q: String.raw`To $y=5x-3$ through $(1,4)$.`, steps: [String.raw`$4=5+b$, $b=-1$.`], ans: String.raw`$y=5x-1$` },
  { title: "Perpendicular through a point", q: String.raw`To $4x+5y-10=0$ through $(-4,2)$.`, steps: [String.raw`Given $m=-\frac45$, so $m_\perp=\frac54$; $2=-5+b$, $b=7$.`], ans: String.raw`$y=\frac54x+7$` },
  { title: "Right triangle", q: String.raw`$A(1,0)$, $B(3,4)$, $C(7,2)$.`, steps: [String.raw`$m_{AB}=2$, $m_{BC}=-\frac12$: product $-1$.`], ans: "right angle at B" },
  { title: "Horizontal and vertical", q: String.raw`Line perpendicular to $y=5$ through $(3,1)$.`, steps: ["Vertical."], ans: String.raw`$x=3$` },
  { title: "Find k", q: String.raw`$y=kx-1$ parallel to $3x-y+4=0$.`, steps: [String.raw`Slope $3$.`], ans: "$k=3$" },
  { title: "Find k (perpendicular)", q: String.raw`$y=kx$ perpendicular to $y=\frac45x+2$.`, steps: [String.raw`$k=-\frac54$.`], ans: String.raw`$-\frac54$` },
  { title: "Not perpendicular", q: String.raw`Are slopes $2$ and $\frac12$ perpendicular?`, steps: ["Product 1, not −1."], ans: "no" },
];
