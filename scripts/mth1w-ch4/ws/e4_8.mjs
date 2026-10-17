// Worksheet 4.8 worked examples (separate from the lesson's examples).
export const EXAMPLES = [
  { title: "To general form", q: String.raw`$y=\frac34x-2$.`, steps: [String.raw`$\times4$: $4y=3x-8$; $3x-4y-8=0$.`], ans: String.raw`$3x-4y-8=0$` },
  { title: "To slope-intercept form", q: String.raw`$6x+3y-12=0$.`, steps: [String.raw`$3y=-6x+12$; $y=-2x+4$.`], ans: String.raw`$m=-2$, $b=4$` },
  { title: "Intercepts", q: String.raw`$4x-3y+24=0$.`, steps: [String.raw`$y=0$: $x=-6$; $x=0$: $y=8$.`], ans: String.raw`$(-6,0)$, $(0,8)$` },
  { title: "Budget", q: String.raw`Adult passes $20$ dollars, youth passes $12$ dollars, total $720$ dollars.`, steps: [String.raw`$20a+12s=720$; $\div4$: $5a+3s-180=0$. Intercepts $36$ and $60$.`], ans: String.raw`$5a+3s-180=0$` },
  { title: "Shortcuts", q: String.raw`$3x-5y+15=0$.`, steps: [String.raw`$m=-\frac{3}{-5}=\frac35$, $b=-\frac{15}{-5}=3$.`], ans: String.raw`$m=\frac35$, $b=3$` },
  { title: "Vertical line", q: String.raw`Write $x=-3$ in general form.`, steps: [String.raw`$x+3=0$ ($B=0$).`], ans: String.raw`$x+3=0$` },
  { title: "Two points to general form", q: String.raw`$(0,2)$, $(3,0)$.`, steps: [String.raw`$m=-\frac23$: $y=-\frac23x+2$; $\times3$: $2x+3y-6=0$.`], ans: String.raw`$2x+3y-6=0$` },
  { title: "Fractions in both", q: String.raw`$y=\frac34x-\frac12$.`, steps: [String.raw`$\times4$: $4y=3x-2$.`], ans: String.raw`$3x-4y-2=0$` },
  { title: "Point on the line?", q: String.raw`Is $(4,-1)$ on $x+2y-2=0$?`, steps: [String.raw`$4-2-2=0$ ✓.`], ans: "yes" },
];
