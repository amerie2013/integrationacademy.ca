// Worksheet 2.6 problems: 3 knowledge, 5 application, 5 textbook-level (multi-part) problems.
import { lineT } from "./tikz2.mjs";

export const PROBLEMS = [
  { level: 1, q: String.raw`Solve $V=lwh$ for $w$.`, ans: String.raw`$w=\frac{V}{lh}$` },
  { level: 1, q: String.raw`Solve $y=mx+b$ for $m$.`, ans: String.raw`$m=\frac{y-b}{x}$` },
  { level: 1, q: String.raw`Solve $P=2(l+w)$ for $l$.`, ans: String.raw`$l=\frac P2-w$` },
  { level: 2, q: String.raw`Solve $3x-4y=12$ for $y$.`, ans: String.raw`$y=\frac34x-3$` },
  { level: 2, q: String.raw`Solve $A=\frac12(a+b)h$ for $h$.`, ans: String.raw`$h=\frac{2A}{a+b}$` },
  { level: 2, q: String.raw`The angle sum of a polygon with $n$ sides is $S=180(n-2)$. Solve for $n$, then find $n$ when $S=1260^\circ$.`, recap: String.raw`$S=180(n-2)$: solve for $n$; $S=1260$.`, ans: String.raw`$n=\frac{S}{180}+2$; $9$ sides` },
  { level: 2, q: String.raw`A data plan costs $C=25+0.12k$ dollars for $k$ extra MB. Solve for $k$ and find $k$ when $C=43$.`, recap: String.raw`$C=25+0.12k$; $C=43$.`, ans: String.raw`$k=\frac{C-25}{0.12}$; $150$ MB` },
  { level: 2, q: String.raw`Solve $v=331+0.6T$ for $T$, then find the temperature when sound travels at $340$ m/s.`, recap: String.raw`$v=331+0.6T$; $v=340$.`, ans: String.raw`$T=\frac{v-331}{0.6}$; $15\,^\circ$C` },
  { level: 3, space: 5,
    q: String.raw`Renting a hall costs $C=350+22.5g$ dollars for $g$ guests.
(a) Rearrange the formula to give $g$ in terms of $C$.
(b) Use it to complete the table for budgets of $800$, $1250$, $1700$ and $2150$ dollars.
(c) Describe the pattern in the number of guests and explain it using the formula.`,
    recap: String.raw`Hall $C=350+22.5g$; budgets 800 to 2150.`,
    ans: String.raw`(a) $g=\frac{C-350}{22.5}$ (b) $20, 40, 60, 80$ (c) $+20$ guests for every $+450$ dollars, since $450\div22.5=20$.` },
  { level: 3, space: 5,
    q: String.raw`(a) Solve $F=1.8C+32$ for $C$.
(b) Kelvin temperature is $K=C+273.15$. Write one formula for $K$ in terms of $F$.
(c) Find $K$ when $F=212$.
(d) At what temperature do the Celsius and Fahrenheit scales show the same number?`,
    recap: "Fahrenheit, Celsius and Kelvin.",
    ans: String.raw`(a) $C=\frac{F-32}{1.8}$ (b) $K=\frac{F-32}{1.8}+273.15$ (c) $373.15$ (d) $C=1.8C+32$ gives $C=-40$` },
  { level: 3, space: 5,
    q: String.raw`A line has equation $4x+3y=24$.
${lineT({ m: -4 / 3, b: 8, xmax: 7, ymax: 9, xtick: "0,1,...,7", ytick: "0,1,...,9", width: 6.5, height: 5 }, "")}
(a) Rearrange it into the form $y=mx+b$ and state the slope and $y$-intercept.
(b) Find both intercepts.
(c) Is the point $(-3, 12)$ on the line? Show how you know.
(d) Solve the equation for $x$ instead.`,
    recap: String.raw`Line $4x+3y=24$.`,
    ans: String.raw`(a) $y=-\frac43x+8$; slope $-\frac43$, $y$-int $8$ (b) $(6,0)$, $(0,8)$ (c) Yes: $-12+36=24$ (d) $x=\frac{24-3y}{4}$` },
  { level: 3, space: 5,
    q: String.raw`The volume of a cylinder is $V=\pi r^2h$.
(a) Solve for $h$.
(b) A can holds $355$ cm$^3$ and has a radius of $3.3$ cm. Find its height to one decimal place.
(c) Solve for $r$ (you will need a square root), then find the radius of a $500$-cm$^3$ can that is $12$ cm tall.`,
    recap: String.raw`Cylinder $V=\pi r^2h$: height and radius of cans.`,
    ans: String.raw`(a) $h=\frac{V}{\pi r^2}$ (b) $\approx10.4$ cm (c) $r=\sqrt{\frac{V}{\pi h}}\approx3.64$ cm` },
  { level: 3, space: 5,
    q: String.raw`Priya solved $A=\frac12h(a+b)$ for $b$ like this: $\ 2A=h(a+b)\ \Rightarrow\ 2A-h=a+b\ \Rightarrow\ b=2A-h-a$.
(a) Find her error.
(b) Write the correct formula.
(c) Test both formulas with $a=4$, $b=6$, $h=5$ (so $A=25$).`,
    recap: String.raw`Error analysis: $A=\frac12h(a+b)$ for $b$.`,
    ans: String.raw`(a) $h$ multiplies $(a+b)$, so she must divide by $h$, not subtract it (b) $b=\frac{2A}{h}-a$ (c) Priya: $50-5-4=41$ (wrong); correct: $10-4=6$ ✓` },
];
