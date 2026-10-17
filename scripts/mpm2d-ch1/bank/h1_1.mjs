// 1.1 Review of Linear Relations — 20 hard questions (money written as "dollars")
import { mc, ms, num, tf, mx, fill } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";

export const TOPIC = "1.1 Review of Linear Relations";
export const Q = [
  mx(`Find the equation of the line through $(-4,1)$ parallel to $3x-2y=7$. Type the right side of $y=\\ldots$`, "3/2*x+7", "Slope $\\frac32$; $1=\\frac32(-4)+b\\Rightarrow b=7$."),
  mx(`Find the equation of the line through $(6,-2)$ perpendicular to $y=\\frac32x-1$. Type the right side of $y=\\ldots$`, "-2/3*x+2", "Slope $-\\frac23$; $-2=-4+b\\Rightarrow b=2$."),
  num(`Find $k$ if the line through $(k,5)$ and $(3,-1)$ is perpendicular to $y=\\frac12x+4$.`, 0, "Slope must be $-2$: $\\frac{5-(-1)}{k-3}=-2\\Rightarrow k-3=-3$."),
  num(`Find $a$ if $ax+3y=9$ is parallel to $y=-4x+1$.`, 12, "$-\\frac a3=-4\\Rightarrow a=12$."),
  num(`Solve $\\frac{2x-5}{3}-\\frac{x-4}{2}=\\frac{3}{2}$.`, 7, "$\\times6$: $4x-10-3x+12=9\\Rightarrow x+2=9$."),
  num(`Solve $\\frac{3x+2}{4}-\\frac{x-1}{3}=\\frac{5}{2}$.`, 4, "$\\times12$: $9x+6-4x+4=30\\Rightarrow 5x=20$."),
  num(`Solve $2(3x-1)-3(x+4)=4(x-5)$.`, 6, "$6x-2-3x-12=4x-20\\Rightarrow -x=-6$."),
  num(`Solve $0.25(x-8)+0.5x=1.75$.`, 5, "$\\times4$: $x-8+2x=7\\Rightarrow 3x=15$."),
  mc(`The triangle with vertices $A(0,0)$, $B(4,2)$ and $C(-1,2)$ is…`, "right-angled at $A$", ["right-angled at $B$", "right-angled at $C$", "not right-angled"], "$m_{AB}=\\frac12$, $m_{AC}=-2$: product $-1$."),
  num(`A line has $x$-intercept $-3$ and $y$-intercept $6$. What is its slope?`, 2, "Through $(-3,0)$ and $(0,6)$: $\\frac63$."),
  mc(`Which equation gives the line through $(2,-3)$ and $(2,5)$?`, "$x=2$", ["$y=2$", "$y=4x-11$", "$x+y=2$"], "Both points have $x=2$: a vertical line."),
  ms(`Select all lines perpendicular to $2x-5y=10$.`, ["$5x+2y=1$", "$y=-\\frac52x+7$", "$10x+4y=3$", "$2x+5y=10$", "$5x-2y=4$"], [0, 1, 2], "The given slope is $\\frac25$; perpendicular slope $-\\frac52$."),
  num(`An electrician charges a call-out fee plus an hourly rate. A $2.5$ h job costs 252.50 dollars and a $4$ h job costs 365 dollars. What is the call-out fee (dollars)?`, 65, "Rate $\\frac{112.5}{1.5}=75$; fee $252.5-187.5=65$."),
  num(`The temperature of water being heated rises linearly from $18^\\circ$C at $t=2$ min to $54^\\circ$C at $t=8$ min. What was the temperature at $t=0$?`, 6, "Slope $6$ per min; $18-2(6)=6$."),
  mx(`Write the equation of the line with $x$-intercept $5$ and $y$-intercept $-2$ in the form $y=\\ldots$ (right side).`, "2/5*x-2", "Slope $\\frac{0-(-2)}{5-0}=\\frac25$."),
  tf(`For any $A,B\\ne0$, the lines $Ax+By=C$ and $Bx-Ay=D$ are perpendicular.`, true, "Slopes $-\\frac AB$ and $\\frac BA$ multiply to $-1$."),
  fill(`The line through $(1,1)$ and $(5,9)$ crosses the $y$-axis at $y=$ ___.`, ["-1"], "Slope $2$; $1=2+b\\Rightarrow b=-1$."),
  num(`The points $(1,3)$, $(4,9)$ and $(7,k)$ are collinear. Find $k$.`, 15, "Slope $2$; from $x=4$ to $7$ rises $6$."),
  mc(`The graph shows the cost of renting a canoe. Which equation fits?`, "$C=12h+20$", ["$C=20h+12$", "$C=12h$", "$C=16h+20$"], "Intercept $20$; from $(0,20)$ to $(5,80)$ slope $12$.", planeDoc({ view: { xmin: 0, xmax: 6, ymin: 0, ymax: 100 }, lines: [{ m: 12, b: 20, color: "blue" }], points: [{ x: 0, y: 20, label: "(0, 20)" }, { x: 5, y: 80, label: "(5, 80)" }], xlabel: "hours", ylabel: "cost", step: { x: 1, y: 20 } })),
  num(`Find the area of the triangle formed by the line $3x+4y=24$ and the two axes.`, 24, "Intercepts $8$ and $6$: $\\frac12(8)(6)$."),
];
