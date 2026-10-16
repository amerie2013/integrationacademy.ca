// 2.6 Rearranging Formulas — 20 hard questions (new topic: rows are inserted)
import { mc, num, tf, mx } from "./kit.mjs";
import { polyFig } from "./svg2.mjs";

export const TOPIC = "2.6 Rearranging Formulas";
export const Q = [
  mx(String.raw`Solve $A=\frac12h(a+b)$ for $a$.`, "2*A/h-b", String.raw`$2A=h(a+b)$; $\frac{2A}h=a+b$; $a=\frac{2A}{h}-b$.`, polyFig([[40, 140], [300, 140], [230, 30], [100, 30]], ["b", "", "a", ""])),
  mx(String.raw`Solve $5x-3y=15$ for $y$.`, "(5*x-15)/3", String.raw`$-3y=15-5x$; $y=\frac{5x-15}{3}=\frac53x-5$.`),
  num(String.raw`The surface area of a cylinder is $S=2\pi r^2+2\pi rh$. Solve for $h$, then find $h$ when $S=300\pi$ cm² and $r=10$ cm.`, 5, String.raw`$h=\frac{S-2\pi r^2}{2\pi r}=\frac{300\pi-200\pi}{20\pi}=5$.`),
  mx(String.raw`Solve $ax+b=cx+d$ for $x$ (assume $a\ne c$).`, "(d-b)/(a-c)", String.raw`$ax-cx=d-b$; $x(a-c)=d-b$; $x=\frac{d-b}{a-c}$.`),
  mx(String.raw`Solve $y=\dfrac{2x-3}{5}$ for $x$.`, "(5*y+3)/2", String.raw`$5y=2x-3$; $x=\frac{5y+3}{2}$.`),
  num(String.raw`Kelvin and Fahrenheit are related by $K=\frac{F-32}{1.8}+273.15$. What is $K$ when $F=32$?`, 273.15, String.raw`$\frac{0}{1.8}+273.15$.`, null, 0.001),
  mx(String.raw`Solve $p=2(a+b)-c$ for $a$.`, "(p+c)/2-b", String.raw`$p+c=2(a+b)$; $\frac{p+c}{2}=a+b$; $a=\frac{p+c}2-b$.`),
  mc(String.raw`Lin solved $y=mx+b$ for $m$ and wrote $m=y-b-x$. What is correct?`, "$m=\\frac{y-b}{x}$", ["$m=y-b-x$", "$m=\\frac yx-b$", "$m=\\frac{y+b}{x}$"], String.raw`$x$ multiplies $m$, so divide by $x$ (do not subtract it).`),
  num(String.raw`The mean of four marks is $A=\frac{a+b+c+d}{4}$. Solve for $d$. What mark is needed with $74$, $91$ and $68$ for a mean of $80$?`, 87, String.raw`$d=4A-a-b-c=320-233=87$.`),
  mx(String.raw`Solve $V=\frac13\pi r^2h$ for $h$. (Type pi for $\pi$.)`, "3*V/(pi*r^2)", String.raw`$3V=\pi r^2h$; $h=\frac{3V}{\pi r^2}$.`),
  num(String.raw`A taxi charges $C=3.75+1.6d$ dollars. Solve for $d$ and find the distance for a $27.75$-dollar fare.`, 15, String.raw`$d=\frac{C-3.75}{1.6}=\frac{24}{1.6}=15$ km.`),
  mc(String.raw`Which is $2x+3y=12$ solved for $x$?`, "$x=\\frac{12-3y}{2}$", ["$x=12-\\frac{3y}{2}$", "$x=\\frac{12+3y}{2}$", "$x=6-3y$"], String.raw`$2x=12-3y$, then divide every term by $2$.`),
  num(String.raw`What is the slope of the line $3x-4y=20$? Give a decimal.`, 0.75, String.raw`$-4y=-3x+20$; $y=\frac34x-5$.`, null, 0.001),
  num(String.raw`Body mass index is $B=\frac{m}{h^2}$ ($m$ in kg, $h$ in m). Solve for $m$ and find $m$ when $B=22$ and $h=1.7$. Round to two decimal places.`, 63.58, String.raw`$m=Bh^2=22(2.89)=63.58$.`, null, 0.006),
  mx(String.raw`Solve $ax+bx=c$ for $x$.`, "c/(a+b)", String.raw`Factor: $x(a+b)=c$; $x=\frac{c}{a+b}$.`),
  num(String.raw`An investment grows to $A=P(1+rt)$. Solve for $P$ and find the amount invested if $A=1120$ dollars, $r=0.04$ and $t=3$ years.`, 1000, String.raw`$P=\frac{A}{1+rt}=\frac{1120}{1.12}=1000$.`),
  tf(String.raw`If $d=vt$, then $v=\frac td$.`, false, String.raw`$v=\frac dt$.`),
  mx(String.raw`Solve $\frac12(x+y)=z$ for $y$.`, "2*z-x", String.raw`$x+y=2z$; $y=2z-x$.`),
  num(String.raw`A trapezoid has area $40$ cm², height $4$ cm and one parallel side $6$ cm. How long is the other parallel side?`, 14, String.raw`$b=\frac{2A}{h}-a=20-6=14$ cm.`),
  mc(String.raw`Which formula gives $r$ for a circle of area $A=\pi r^2$?`, "$r=\\sqrt{\\frac A\\pi}$", ["$r=\\frac{A}{2\\pi}$", "$r=\\frac{\\sqrt A}{\\pi^2}$", "$r=\\frac{A}{\\pi^2}$"], String.raw`$r^2=\frac A\pi$, then take the square root.`),
];
