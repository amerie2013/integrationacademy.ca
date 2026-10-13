// AP Calculus AB exam prep — Unit 8 (Applications of Integration): question bank.
// Original questions in exam format; see u1.mjs for the conventions.
// These questions are written separately from the lessons: no function, region
// or context here repeats a worked example or practice question in Unit 8.
import { mc, num, tbl } from "./helpers.mjs";
import { plot, C } from "../apcalc/fig.mjs";

const r = String.raw;
const INT = (a, b, body, v = "x") => `\\displaystyle\\int_{${a}}^{${b}}${body}\\,d${v}`;

// ── figures ──
const figTent = () => {
  const g = plot({ w: 360, h: 270, x: [-0.6, 6.8], y: [-0.7, 5], alt: "Graph of f made of three line segments from (0,0) to (2,4) to (4,4) to (6,0)" });
  g.poly([[0, 0], [2, 4], [4, 4], [6, 0]]).dot(0, 0).dot(6, 0).label(4.6, 3.6, "y = f(x)");
  return g;
};
const figVel = () => {
  const g = plot({ w: 400, h: 270, x: [-0.6, 8.8], y: [-3, 3], xName: "t", yName: "v", alt: "Graph of velocity v made of line segments through (0,2), (2,2), (4,−2), (6,−2) and (8,0)" });
  g.poly([[0, 2], [2, 2], [4, -2], [6, -2], [8, 0]]).dot(0, 2).dot(8, 0);
  return g;
};
const figLens = () => {
  const g = plot({ w: 360, h: 290, x: [-1, 4], y: [-1.6, 4], alt: "The region between the line y = x and the parabola y = x² − 2x" });
  g.shade((x) => x, (x) => x * x - 2 * x, 0, 3).curve((x) => x * x - 2 * x, -0.7, 3.5).curve((x) => x, -0.9, 3.7, { color: C.alt }).label(2.6, 3.35, "y = x", { color: C.alt, anchor: "end" }).label(2.55, 0.35, "y = x² − 2x");
  return g;
};
const VEL = "The graph of the velocity $v$ of a particle moving along the $x$-axis, for $0\\le t\\le8$, consists of four line segments, as shown. ";

// ── 8.1 Average Value of a Function ───────────────
function g81() {
  return [
    mc("easy", r`The average value of a continuous function $f$ on $[a,b]$ is`, r`$\dfrac{1}{b-a}${INT("a", "b", "f(x)")}$`, [r`$\dfrac{f(b)-f(a)}{b-a}$`, r`$\dfrac{f(a)+f(b)}{2}$`, r`$${INT("a", "b", "f(x)")}$`], r`The integral is divided by the length of the interval.`),
    num("easy", r`If $${INT(2, 8, "f(x)")}=30$, what is the average value of $f$ on $[2,8]$?`, 5, 0, r`$\dfrac{30}{6}$.`),
    num("easy", r`Find the average value of $f(x)=2x+1$ on $[1,5]$.`, 7, 0, r`$\dfrac14\Big[x^2+x\Big]_1^5=\dfrac{28}{4}$.`),
    num("easy", r`The average value of $f$ on $[1,6]$ is 4. Find $${INT(1, 6, "f(x)")}$.`, 20, 0, r`$4\times5$.`),
    mc("medium", r`What is the average value of $f(x)=6x^{2}$ on $[0,2]$?`, "$8$", ["$16$", "$12$", "$24$"], r`$\dfrac12\cdot16$. The value 16 is the integral, 12 is the mean of the endpoint values.`),
    mc("medium", r`What is the average value of $f(x)=\sin x$ on $[0,\pi]$?`, r`$\dfrac{2}{\pi}$`, ["$2$", "$0$", r`$\dfrac{1}{\pi}$`], r`$\dfrac1\pi\cdot2$.`),
    mc("medium", r`What is the average value of $f(x)=\dfrac{1}{x^{2}}$ on $[1,4]$?`, r`$\dfrac14$`, [r`$\dfrac34$`, r`$-\dfrac{5}{16}$`, r`$\dfrac{17}{32}$`], r`$\dfrac13\cdot\dfrac34$. The value $-\tfrac{5}{16}$ is the average rate of change.`),
    mc("medium", r`What is the average value of $f(x)=\sec^{2}x$ on $\left[0,\dfrac{\pi}{4}\right]$?`, r`$\dfrac{4}{\pi}$`, ["$1$", r`$\dfrac{\pi}{4}$`, r`$\dfrac32$`], r`$\dfrac{4}{\pi}\Big[\tan x\Big]_0^{\pi/4}$.`),
    mc("medium", r`What is the average value of $f(x)=e^{x}$ on $[0,\ln5]$?`, r`$\dfrac{4}{\ln5}$`, ["$4$", "$3$", r`$\dfrac{5}{\ln5}$`], r`$\dfrac{1}{\ln5}(5-1)$.`),
    mc("medium", r`For $f(x)=x^{3}$ on $[0,2]$, which statement is true?`, "The average value is 2 and the average rate of change is 4.", ["The average value is 4 and the average rate of change is 2.", "The average value and the average rate of change are both 4.", "The average value is 4 and the average rate of change is 8."], r`$\dfrac12\cdot4=2$ and $\dfrac{8-0}{2}=4$.`),
    mc("medium", r`The power used by a factory is $P(t)$ kilowatts, where $t$ is in hours. What does $\dfrac{1}{24}${INT(0, 24, "P(t)", "t")}$ represent?`, "the average power, in kilowatts, used over the 24 hours", ["the total energy, in kilowatt-hours, used over the 24 hours", "the average rate of change of the power, in kilowatts per hour", "the power, in kilowatts, being used at $t=24$"], r`An average value has the units of the function itself.`),
    mc("hard", r`Let $f(x)=4x^{3}$ on $[0,2]$. For what value of $c$ in $[0,2]$ does $f(c)$ equal the average value of $f$?`, r`$\sqrt[3]{2}$`, ["$1$", r`$\sqrt2$`, r`$\dfrac43$`], r`The average value is $\dfrac{16}{2}=8$, and $4c^3=8$.`),
    mc("hard", r`A twice-differentiable function $f$ has $f'(0)=2$ and $f'(4)=10$. What is the average value of $f''$ on $[0,4]$?`, "$2$", ["$8$", "$6$", "$3$"], r`$\dfrac14${INT(0, 4, "f''(x)")}=\dfrac{f'(4)-f'(0)}{4}$.`),
    mc("hard", r`Selected values of a continuous function $f$ are shown. ${tbl("t", [0, 2, 6, 10], "f(t)", [4, 8, 6, 2])} Using a trapezoidal sum with the three subintervals given, the average value of $f$ on $[0,10]$ is approximately`, "$5.6$", ["$5$", "$56$", "$14$"], r`The trapezoidal sum is $12+28+16=56$; divide by 10.`),
    mc("hard", r`The graph of $f$ on $[0,6]$ consists of three line segments, as shown. What is the average value of $f$ on $[0,6]$?`, r`$\dfrac83$`, ["$16$", "$2$", "$4$"], r`The area is $4+8+4=16$; divide by 6.`, { fig: figTent() }),
    num("hard", r`Find the average value of $f(x)=e^{-x^{2}}$ on $[0,2]$, to three decimal places.`, 0.441, 0.001, r`$\dfrac12${INT(0, 2, "e^{-x^2}")}=\dfrac12(0.88208)$.`, { calc: true }),
    num("hard", r`Find the average value of $f(x)=\ln(1+x^{2})$ on $[0,3]$, to three decimal places.`, 1.135, 0.001, r`$\dfrac13(3.40585)$.`, { calc: true }),
  ];
}

// ── 8.2 Position, Velocity and Acceleration by Integration ───────────────
function g82() {
  return [
    mc("easy", r`A particle moves along a line with velocity $v(t)$. Its displacement from $t=a$ to $t=b$ is`, r`$${INT("a", "b", "v(t)", "t")}$`, [r`$${INT("a", "b", "|v(t)|", "t")}$`, r`$v(b)-v(a)$`, r`$\dfrac{v(b)-v(a)}{b-a}$`], r`Displacement is the net change in position.`),
    mc("easy", r`A particle moves along a line with velocity $v(t)$. The total distance it travels from $t=a$ to $t=b$ is`, r`$${INT("a", "b", "|v(t)|", "t")}$`, [r`$\left|${INT("a", "b", "v(t)", "t")}\right|$`, r`$${INT("a", "b", "v(t)", "t")}$`, r`$|v(b)-v(a)|$`], r`The absolute value goes inside the integral.`),
    num("easy", r`A particle has velocity $v(t)=4t^{3}$ and position $x(1)=4$. Find $x(2)$.`, 19, 0, r`$4+\Big[t^4\Big]_1^2=4+15$.`),
    num("easy", r`A particle has velocity $v(t)=8-2t$ for $0\le t\le6$. Find its displacement.`, 12, 0, r`$\Big[8t-t^2\Big]_0^6=48-36$.`),
    num("medium", r`A particle has velocity $v(t)=8-2t$ for $0\le t\le6$. Find the total distance it travels.`, 20, 0, r`It turns at $t=4$: $16$ forwards, then $4$ back.`),
    mc("medium", r`A particle has velocity $v(t)=3t^{2}-12$ for $0\le t\le3$. What is its displacement?`, "$-9$", ["$23$", "$9$", "$-16$"], r`$\Big[t^3-12t\Big]_0^3=27-36$.`),
    mc("medium", r`A particle has velocity $v(t)=3t^{2}-12$ for $0\le t\le3$. What is the total distance it travels?`, "$23$", ["$9$", "$-9$", "$16$"], r`It turns at $t=2$: $16$ in the negative direction, then $7$ in the positive direction.`),
    mc("medium", r`A particle has velocity $v(t)=\sin t$ for $0\le t\le\dfrac{3\pi}{2}$. What is the total distance it travels?`, "$3$", ["$1$", "$2$", "$0$"], r`$2$ on $[0,\pi]$ and $1$ on $\left[\pi,\tfrac{3\pi}{2}\right]$. The displacement is 1.`),
    mc("medium", r`A particle has constant acceleration $a(t)=4$ and initial velocity $v(0)=-6$. At what time does it change direction?`, r`$t=\dfrac32$`, ["$t=6$", "$t=0$", "It never changes direction."], r`$v(t)=4t-6$ changes sign at $t=\tfrac32$.`),
    num("medium", r`A particle has acceleration $a(t)=e^{t}$ and $v(0)=2$. Find $v(\ln3)$.`, 4, 0, r`$2+\Big[e^t\Big]_0^{\ln3}=2+2$.`),
    mc("medium", VEL + r`What is the displacement of the particle from $t=0$ to $t=8$?`, "$-2$", ["$12$", "$2$", "$-7$"], r`Signed areas: $4+1-1-4-2$.`, { fig: figVel() }),
    mc("medium", VEL + r`What is the total distance travelled by the particle from $t=0$ to $t=8$?`, "$12$", ["$-2$", "$2$", "$10$"], r`Unsigned areas: $4+1+1+4+2$.`, { fig: figVel() }),
    mc("hard", VEL + r`If the particle is at $x=5$ when $t=0$, what is its position when $t=8$?`, "$3$", ["$-2$", "$7$", "$17$"], r`$5+(-2)$.`, { fig: figVel() }),
    mc("hard", VEL + r`At what time $t$ in $[0,8]$ is the particle farthest to the right?`, "$t=3$", ["$t=2$", "$t=8$", "$t=4$"], r`The velocity is positive until $t=3$ and negative afterwards, so position is greatest at $t=3$.`, { fig: figVel() }),
    mc("hard", r`For a particle moving along a line, $${INT(0, 10, "v(t)", "t")}=6$ and $${INT(0, 10, "|v(t)|", "t")}=20$. If $x(0)=-1$, what is $x(10)$?`, "$5$", ["$19$", "$6$", "$13$"], r`Position changes by the displacement, 6. The total distance is not needed.`),
    num("hard", r`A particle has velocity $v(t)=\ln(t+1)-1$ for $0\le t\le4$. Find the total distance it travels, to three decimal places.`, 1.484, 0.001, r`$${INT(0, 4, r`\left|\ln(t+1)-1\right|`, "t")}$.`, { calc: true }),
    mc("hard", r`A particle has velocity $v(t)=\ln(t+1)-1$ for $0\le t\le4$. What is its displacement, to three decimal places?`, "$0.047$", ["$1.484$", "$-0.047$", "$0.609$"], r`$${INT(0, 4, r`\big(\ln(t+1)-1\big)`, "t")}$. The value $0.609$ is $v(4)$.`, { calc: true }),
  ];
}

// ── 8.3 Rate In, Rate Out ───────────────
function g83() {
  return [
    mc("easy", r`Fuel is pumped into a tank at $r(t)$ gallons per hour. What does $${INT(0, 5, "r(t)", "t")}$ represent?`, "the number of gallons pumped into the tank during the first 5 hours", ["the rate, in gallons per hour, at which fuel is pumped at $t=5$", "the average rate at which fuel is pumped over 5 hours", "the number of gallons in the tank at $t=5$"], r`The integral of a rate is an accumulated amount. It is the amount in the tank only if the tank started empty and nothing left.`),
    mc("easy", r`Grain enters a silo at $f(t)$ tonnes per hour and is removed at $g(t)$ tonnes per hour. The amount of grain in the silo is increasing at time $t$ when`, "$f(t)\\gt g(t)$", ["$f'(t)\\gt g'(t)$", "$f(t)\\gt0$", "$f'(t)\\gt0$"], r`The rate of change of the amount is $f(t)-g(t)$.`),
    num("easy", r`Water enters a tank at $6t$ litres per minute and drains at 9 litres per minute, for $0\le t\le4$. What is the net change, in litres, in the amount of water over the 4 minutes?`, 12, 0, r`$${INT(0, 4, "(6t-9)", "t")}=48-36$.`),
    mc("medium", r`Water enters a tank at $6t$ litres per minute and drains at 9 litres per minute, for $0\le t\le4$. At what time is the amount of water in the tank least?`, r`$t=\dfrac32$`, ["$t=0$", "$t=4$", "$t=3$"], r`$6t-9$ changes from negative to positive at $t=\tfrac32$.`),
    num("medium", r`Water enters a tank at $6t$ litres per minute and drains at 9 litres per minute. The tank holds 20 litres at $t=0$. How many litres does it hold at $t=4$?`, 32, 0, r`$20+12$.`),
    mc("medium", r`A warehouse holds 40 crates at the start of a shift. During the shift 120 crates are delivered and 95 are shipped out. In the notation $A(8)=A(0)+${INT(0, 8, r`\big[f(t)-g(t)\big]`, "t")}$, what is $A(8)$?`, "$65$", ["$25$", "$255$", "$160$"], r`$40+120-95$.`),
    mc("medium", r`The rate at which rain falls is $R(t)$ millimetres per hour, where $t$ is in hours. The units of $R'(t)$ are`, "millimetres per hour per hour", ["millimetres per hour", "millimetres", "hours per millimetre"], r`Differentiating with respect to time divides the units by hours once more.`),
    mc("medium", r`A pond holds $A(0)$ litres at $t=0$. Water flows in at $f(t)$ and out at $g(t)$ litres per hour. Which expression gives the amount in the pond at $t=6$?`, r`$A(0)+${INT(0, 6, r`\big[f(t)-g(t)\big]`, "t")}$`, [r`$${INT(0, 6, r`\big[f(t)-g(t)\big]`, "t")}$`, r`$A(0)+f(6)-g(6)$`, r`$A(0)+${INT(0, 6, "f(t)", "t")}$`], r`Starting amount plus the integral of the net rate.`),
    num("medium", r`Oil leaks from a pipe at $20e^{-0.1t}$ litres per minute. How many litres leak during the first 10 minutes? Give three decimal places.`, 126.424, 0.001, r`$${INT(0, 10, "20e^{-0.1t}", "t")}=200\left(1-e^{-1}\right)$.`, { calc: true }),
    mc("hard", r`Selected values of the rate $R(t)$, in litres per minute, at which water enters a tank are shown. ${tbl("t", [0, 2, 5, 9], "R(t)", [10, 14, 12, 6])} Using a trapezoidal sum with the three subintervals given, the amount of water that enters from $t=0$ to $t=9$ is approximately`, "$99$", ["$110$", "$88$", "$42$"], r`$24+39+36$. The values 110 and 88 are the left and right Riemann sums.`),
    num("hard", r`Compost is added to a bin at $f(t)=8+3\cos\!\left(\dfrac t2\right)$ kilograms per hour and removed at $g(t)=5+0.5t$ kilograms per hour, for $0\le t\le10$. At what time $t$ is the amount of compost in the bin greatest? Give three decimal places.`, 3.868, 0.001, r`$f(t)=g(t)$ at $t\approx3.868$, where $f-g$ changes from positive to negative.`, { calc: true }),
    num("hard", r`Compost is added to a bin at $f(t)=8+3\cos\!\left(\dfrac t2\right)$ kilograms per hour and removed at $g(t)=5+0.5t$ kilograms per hour, for $0\le t\le10$. The bin holds 25 kilograms at $t=0$. What is the greatest amount of compost in the bin, to three decimal places?`, 38.472, 0.001, r`$25+${INT(0, "3.868", r`\big[f(t)-g(t)\big]`, "t")}=25+13.472$.`, { calc: true }),
    mc("hard", r`Compost is added to a bin at $f(t)=8+3\cos\!\left(\dfrac t2\right)$ kilograms per hour and removed at $g(t)=5+0.5t$ kilograms per hour. At $t=6$, the amount of compost in the bin is`, "decreasing at about 2.970 kilograms per hour", ["increasing at about 2.970 kilograms per hour", "decreasing at about 0.212 kilograms per hour", "increasing at about 5.030 kilograms per hour"], r`$f(6)\approx5.030$ and $g(6)=8$, so the net rate is about $-2.970$.`, { calc: true }),
    mc("hard", r`The rate in, $f$, and the rate out, $g$, are continuous on $[0,12]$, and $f(c)=g(c)$ for exactly one $c$ in $(0,12)$. Which additional statement justifies that the amount is greatest at $t=c$?`, "$f(t)-g(t)$ changes from positive to negative at $t=c$.", ["$f(c)-g(c)=0$.", "$f'(c)=g'(c)$.", "$f$ has a maximum at $t=c$."], r`A critical point alone is not a justification; the sign change of the net rate is.`),
  ];
}

// ── 8.4 Area Between Curves, Slicing Vertically ───────────────
function g84() {
  return [
    mc("easy", r`If $f(x)\ge g(x)$ on $[a,b]$, the area of the region between the graphs of $f$ and $g$ from $x=a$ to $x=b$ is`, r`$${INT("a", "b", r`\big[f(x)-g(x)\big]`)}$`, [r`$${INT("a", "b", r`\big[g(x)-f(x)\big]`)}$`, r`$${INT("a", "b", r`\big[f(x)+g(x)\big]`)}$`, r`$${INT("a", "b", r`f(x)\,g(x)`)}$`], r`Top minus bottom.`),
    mc("easy", r`What is the area of the region enclosed by $y=x$ and $y=x^{2}$?`, r`$\dfrac16$`, [r`$\dfrac13$`, r`$\dfrac12$`, r`$\dfrac56$`], r`$${INT(0, 1, "(x-x^2)")}=\dfrac12-\dfrac13$.`),
    num("easy", r`Find the area of the region enclosed by $y=6x-x^{2}$ and the $x$-axis.`, 36, 0, r`$${INT(0, 6, "(6x-x^2)")}=108-72$.`),
    mc("medium", r`What is the area of the region in the first quadrant enclosed by $y=x^{3}$ and $y=x$?`, r`$\dfrac14$`, [r`$\dfrac12$`, r`$\dfrac34$`, r`$\dfrac{1}{12}$`], r`$${INT(0, 1, "(x-x^3)")}=\dfrac12-\dfrac14$.`),
    mc("medium", r`What is the area of the region bounded by $y=e^{x}$, $y=1$ and $x=2$?`, r`$e^{2}-3$`, [r`$e^{2}-1$`, r`$e^{2}$`, r`$e^{2}-2$`], r`$${INT(0, 2, "(e^x-1)")}=(e^2-1)-2$.`),
    mc("medium", r`What is the area of the region between $y=\cos x$ and $y=\sin x$ for $0\le x\le\dfrac{\pi}{4}$?`, r`$\sqrt2-1$`, [r`$1-\sqrt2$`, r`$\sqrt2$`, r`$\sqrt2+1$`], r`$\Big[\sin x+\cos x\Big]_0^{\pi/4}=\sqrt2-1$.`),
    mc("medium", r`What is the area of the region enclosed by $y=x^{2}$ and $y=3x$?`, r`$\dfrac92$`, ["$9$", r`$\dfrac{27}{2}$`, r`$\dfrac94$`], r`$${INT(0, 3, "(3x-x^2)")}=\dfrac{27}{2}-9$.`),
    mc("medium", r`What is the area of the region enclosed by $y=x^{2}$ and $y=8-x^{2}$?`, r`$\dfrac{64}{3}$`, [r`$\dfrac{32}{3}$`, r`$\dfrac{16}{3}$`, r`$\dfrac{128}{3}$`], r`$${INT(-2, 2, "(8-2x^2)")}=32-\dfrac{32}{3}$.`),
    mc("medium", r`What is the area of the region enclosed by $y=\sqrt{x}$ and $y=x^{2}$?`, r`$\dfrac13$`, [r`$\dfrac23$`, r`$\dfrac16$`, "$1$"], r`$${INT(0, 1, r`\left(\sqrt x-x^2\right)`)}=\dfrac23-\dfrac13$.`),
    mc("medium", r`Which integral gives the area of the region enclosed by $y=x^{2}-2$ and $y=x$?`, r`$${INT(-1, 2, "(x-x^2+2)")}$`, [r`$${INT(-1, 2, "(x^2-2-x)")}$`, r`$${INT(-2, 1, "(x-x^2+2)")}$`, r`$${INT(-1, 2, "(x-x^2-2)")}$`], r`The curves meet at $x=-1$ and $x=2$, with the line on top; subtracting $x^2-2$ gives $+2$.`),
    mc("hard", r`The shaded region is enclosed by the line $y=x$ and the parabola $y=x^{2}-2x$, as shown. Which integral gives its area?`, r`$${INT(0, 3, "(3x-x^2)")}$`, [r`$${INT(0, 3, "(x^2-3x)")}$`, r`$${INT(0, 2, "(3x-x^2)")}$`, r`$${INT(0, 3, "(x^2-x)")}$`], r`The curves meet at $x=0$ and $x=3$; the line is on top, and $x-(x^2-2x)=3x-x^2$.`, { fig: figLens() }),
    mc("hard", r`The vertical line $x=k$ divides the region under $y=3x^{2}$ on $[0,2]$ into two regions of equal area. What is $k$?`, r`$\sqrt[3]{4}$`, ["$1$", r`$\sqrt2$`, r`$\dfrac43$`], r`The total area is 8, and $k^3=4$.`),
    num("hard", r`Find the area of the region enclosed by $y=\ln x$ and $y=x-2$, to three decimal places.`, 1.949, 0.001, r`The graphs meet at $x\approx0.1586$ and $x\approx3.1462$; integrate $\ln x-x+2$ between them.`, { calc: true }),
    num("hard", r`Find the area of the region enclosed by $y=e^{-x^{2}}$ and $y=x^{2}$, to three decimal places.`, 0.979, 0.001, r`The graphs meet at $x\approx\pm0.7531$; integrate $e^{-x^2}-x^2$ between them.`, { calc: true }),
  ];
}

// ── 8.5 Area Between Curves, Slicing Horizontally ───────────────
function g85() {
  return [
    mc("easy", r`A region lies between $x=f(y)$ on the right and $x=g(y)$ on the left, for $c\le y\le d$. Its area is`, r`$${INT("c", "d", r`\big[f(y)-g(y)\big]`, "y")}$`, [r`$${INT("c", "d", r`\big[g(y)-f(y)\big]`, "y")}$`, r`$${INT("c", "d", r`\big[f(x)-g(x)\big]`)}$`, r`$${INT("c", "d", r`\big[f(y)-g(y)\big]`)}$`], r`Right minus left, integrated in $y$.`),
    mc("easy", r`Written as $x$ in terms of $y$, the curve $y=x^{3}$ is`, r`$x=y^{1/3}$`, [r`$x=y^{3}$`, r`$x=3y$`, r`$x=\dfrac{1}{y^{3}}$`], r`Take the cube root of both sides.`),
    mc("easy", r`When a region is cut into horizontal strips, the thickness of each strip is`, "$dy$", ["$dx$", "$y$", "$x$"], r`So the integral is taken with respect to $y$, between $y$-values.`),
    num("easy", r`Find the area of the region enclosed by $x=y^{2}$ and $x=9$.`, 36, 0, r`$${INT(-3, 3, "(9-y^2)", "y")}=54-18$.`),
    mc("medium", r`What is the area of the region enclosed by $x=y^{2}$ and $x=y+6$?`, r`$\dfrac{125}{6}$`, [r`$\dfrac{125}{3}$`, r`$\dfrac{95}{6}$`, r`$\dfrac{25}{6}$`], r`$${INT(-2, 3, "(y+6-y^2)", "y")}$.`),
    mc("medium", r`For the region enclosed by $x=y^{2}$ and $x=y+6$, integrated with respect to $y$, the limits of integration are`, "$-2$ and $3$", ["$4$ and $9$", "$0$ and $9$", "$-3$ and $2$"], r`$y^2=y+6$ gives $y=-2$ and $y=3$. The values 4 and 9 are the $x$-coordinates.`),
    mc("medium", r`What is the area of the region enclosed by $x=2-y^{2}$ and $x=-y$?`, r`$\dfrac92$`, [r`$\dfrac94$`, r`$\dfrac76$`, r`$\dfrac{27}{2}$`], r`$${INT(-1, 2, "(2-y^2+y)", "y")}$.`),
    num("medium", r`Find the area of the region bounded by $x=e^{y}$, the $y$-axis, $y=0$ and $y=\ln3$.`, 2, 0, r`$${INT(0, r`\ln3`, "e^y", "y")}=3-1$.`),
    mc("medium", r`What is the area of the region enclosed by $x=y^{2}$ and $x=2-y^{4}$?`, r`$\dfrac{44}{15}$`, [r`$\dfrac{22}{15}$`, "$4$", r`$\dfrac{14}{15}$`], r`$${INT(-1, 1, "(2-y^4-y^2)", "y")}=2\left(2-\dfrac15-\dfrac13\right)$.`),
    mc("medium", r`A region is bounded by $y=\sqrt{x}$, $y=6-x$ and the $x$-axis. Which integral gives its area?`, r`$${INT(0, 2, "(6-y-y^2)", "y")}$`, [r`$${INT(0, 4, "(6-y-y^2)", "y")}$`, r`$${INT(0, 2, "(y^2-6+y)", "y")}$`, r`$${INT(0, 6, r`\left(\sqrt x-6+x\right)`)}$`], r`The curves meet at $(4,2)$. For $0\le y\le2$ the line $x=6-y$ is on the right and $x=y^2$ is on the left.`),
    num("medium", r`Find the area of the region bounded by $y=\sqrt{x}$, $y=6-x$ and the $x$-axis, to three decimal places.`, 7.333, 0.001, r`$${INT(0, 2, "(6-y-y^2)", "y")}=12-2-\dfrac83=\dfrac{22}{3}$.`),
    mc("hard", r`A region is bounded by $y=\sqrt{x}$, $y=6-x$ and the $x$-axis. If its area is written using integrals with respect to $x$, how many integrals are needed?`, "$2$", ["$1$", "$3$", "$4$"], r`The top boundary changes from the root to the line at $x=4$.`),
    mc("hard", r`What is the area of the region enclosed by $x=y^{2}-4y$ and the $y$-axis?`, r`$\dfrac{32}{3}$`, [r`$-\dfrac{32}{3}$`, r`$\dfrac{16}{3}$`, r`$\dfrac{64}{3}$`], r`For $0\le y\le4$ the curve lies to the left of the axis, so the area is $${INT(0, 4, "(4y-y^2)", "y")}$.`),
    num("hard", r`Find the area of the region enclosed by $x=y^{2}-2$ and $x=\sin y$, to three decimal places.`, 4.1045, 0.001, r`The curves meet at $y\approx-1.0616$ and $y\approx1.7285$; integrate $\sin y-y^2+2$ between them.`, { calc: true }),
  ];
}

// ── 8.6 Regions with More Than One Piece ───────────────
function g86() {
  return [
    mc("easy", r`For any two continuous functions, the area between their graphs from $x=a$ to $x=b$ is`, r`$${INT("a", "b", r`\big|f(x)-g(x)\big|`)}$`, [r`$\left|${INT("a", "b", r`\big[f(x)-g(x)\big]`)}\right|$`, r`$${INT("a", "b", r`\big[f(x)-g(x)\big]`)}$`, r`$${INT("a", "b", r`\big[|f(x)|-|g(x)|\big]`)}$`], r`The absolute value is taken of the difference, inside the integral.`),
    num("easy", r`Find the area between $y=\cos x$ and the $x$-axis for $0\le x\le\pi$.`, 2, 0, r`$1+1$. The integral itself is 0.`),
    num("easy", r`Find the area between $y=\sin x$ and the $x$-axis for $0\le x\le2\pi$.`, 4, 0, r`$2+2$.`),
    num("medium", r`Find the area between $y=x^{2}-1$ and the $x$-axis for $0\le x\le2$.`, 2, 0, r`$${INT(0, 1, "(1-x^2)")}=\dfrac23$ and $${INT(1, 2, "(x^2-1)")}=\dfrac43$.`),
    mc("medium", r`For $f(x)=x^{2}-1$ on $[0,2]$, which statement is true?`, r`$${INT(0, 2, "f(x)")}=\dfrac23$, and the area between the graph and the $x$-axis is 2.`, [r`$${INT(0, 2, "f(x)")}=2$, and the area between the graph and the $x$-axis is $\dfrac23$.`, r`Both the integral and the area are $\dfrac23$.`, "Both the integral and the area are 2."], r`The integral is $-\dfrac23+\dfrac43$; the area is $\dfrac23+\dfrac43$.`),
    mc("medium", r`What is the total area of the regions enclosed by $y=x^{3}$ and $y=9x$?`, r`$\dfrac{81}{2}$`, ["$0$", r`$\dfrac{81}{4}$`, "$81$"], r`The curves meet at $x=-3,0,3$. Each piece has area $${INT(0, 3, "(9x-x^3)")}=\dfrac{81}{4}$.`),
    mc("medium", r`What is the area between $y=x^{2}-4$ and the $x$-axis for $0\le x\le3$?`, r`$\dfrac{23}{3}$`, ["$-3$", "$3$", r`$\dfrac{16}{3}$`], r`$\dfrac{16}{3}$ below the axis on $[0,2]$ and $\dfrac73$ above it on $[2,3]$.`),
    mc("medium", r`The graphs of $f$ and $g$ cross once in $[0,5]$, at $x=2$. The region between them on $[0,2]$, where $f$ is on top, has area 7; the region on $[2,5]$, where $g$ is on top, has area 3. What is $${INT(0, 5, r`\big[f(x)-g(x)\big]`)}$?`, "$4$", ["$10$", "$-4$", "$7$"], r`$7-3$. The area between the graphs is 10.`),
    mc("medium", r`The graphs of $f$ and $g$ cross once in $[0,5]$, at $x=2$, with $f$ on top for $x\lt2$. Which expression gives the area between the graphs on $[0,5]$?`, r`$${INT(0, 2, r`\big[f(x)-g(x)\big]`)}+${INT(2, 5, r`\big[g(x)-f(x)\big]`)}$`, [r`$${INT(0, 5, r`\big[f(x)-g(x)\big]`)}$`, r`$${INT(0, 2, r`\big[f(x)-g(x)\big]`)}+${INT(2, 5, r`\big[f(x)-g(x)\big]`)}$`, r`$\left|${INT(0, 5, r`\big[f(x)-g(x)\big]`)}\right|$`], r`Larger minus smaller on each piece.`),
    mc("medium", r`The graphs of two continuous functions intersect at $x=1$ and $x=4$ and nowhere else in $[0,6]$, crossing each time. Computed by hand, the area between them on $[0,6]$ requires how many integrals?`, "$3$", ["$1$", "$2$", "$4$"], r`The interval splits into $[0,1]$, $[1,4]$ and $[4,6]$.`),
    mc("hard", r`What is the area between $y=\sin x$ and $y=\cos x$ for $\dfrac{\pi}{4}\le x\le\dfrac{5\pi}{4}$?`, r`$2\sqrt2$`, ["$0$", r`$\sqrt2$`, "$2$"], r`The sine is on top throughout: $\Big[-\cos x-\sin x\Big]_{\pi/4}^{5\pi/4}=\sqrt2+\sqrt2$.`),
    mc("hard", r`What is the total area between $f(x)=x^{3}-4x^{2}+3x$ and the $x$-axis for $0\le x\le3$?`, r`$\dfrac{37}{12}$`, [r`$-\dfrac94$`, r`$\dfrac94$`, r`$\dfrac83$`], r`$\dfrac{5}{12}$ above the axis on $[0,1]$ and $\dfrac83$ below it on $[1,3]$.`),
    num("hard", r`Find the area between $y=\sin x$ and $y=\dfrac{x}{2}$ for $0\le x\le4$, to three decimal places.`, 3.188, 0.001, r`$${INT(0, 4, r`\left|\sin x-\tfrac x2\right|`)}$. The graphs cross at $x\approx1.895$.`, { calc: true }),
    mc("hard", r`To three decimal places, what is $${INT(0, 4, r`\left(\sin x-\dfrac x2\right)`)}$?`, "$-2.346$", ["$3.188$", "$2.346$", "$-3.188$"], r`$(1-\cos4)-4$. This net value is not the area between the graphs, which is $3.188$.`, { calc: true }),
  ];
}

// ── 8.7 Volumes from Known Cross-Sections ───────────────
function g87() {
  return [
    mc("easy", r`A solid lies between $x=a$ and $x=b$, and its cross-section perpendicular to the $x$-axis at $x$ has area $A(x)$. Its volume is`, r`$${INT("a", "b", "A(x)")}$`, [r`$\pi${INT("a", "b", r`\big[A(x)\big]^2`)}$`, r`$${INT("a", "b", r`\big[A(x)\big]^2`)}$`, r`$A(b)-A(a)$`], r`Volume is the integral of cross-sectional area.`),
    mc("easy", r`A semicircle has diameter $s$. Its area is`, r`$\dfrac{\pi s^{2}}{8}$`, [r`$\dfrac{\pi s^{2}}{2}$`, r`$\dfrac{\pi s^{2}}{4}$`, r`$\pi s^{2}$`], r`$\dfrac12\pi\left(\dfrac s2\right)^2$.`),
    mc("easy", r`An equilateral triangle has side $s$. Its area is`, r`$\dfrac{\sqrt3}{4}s^{2}$`, [r`$\dfrac12s^{2}$`, r`$\dfrac{\sqrt3}{2}s^{2}$`, r`$\dfrac14s^{2}$`], r`Base $s$, height $\dfrac{\sqrt3}{2}s$.`),
    mc("easy", r`An isosceles right triangle has hypotenuse $s$. Its area is`, r`$\dfrac14s^{2}$`, [r`$\dfrac12s^{2}$`, r`$s^{2}$`, r`$\dfrac{\sqrt2}{2}s^{2}$`], r`Each leg is $\dfrac{s}{\sqrt2}$, so the area is $\dfrac12\cdot\dfrac{s^2}{2}$.`),
    mc("medium", r`The base of a solid is the region enclosed by $y=1-x^{2}$ and the $x$-axis. Cross-sections perpendicular to the $x$-axis are squares. What is the volume?`, r`$\dfrac{16}{15}$`, [r`$\dfrac43$`, r`$\dfrac{8}{15}$`, r`$\dfrac{16\pi}{15}$`], r`$${INT(-1, 1, "(1-x^2)^2")}=2\left(1-\dfrac23+\dfrac15\right)$. The value $\dfrac43$ is the area of the base.`),
    mc("medium", r`The base of a solid is the region enclosed by $y=1-x^{2}$ and the $x$-axis. Cross-sections perpendicular to the $x$-axis are semicircles with diameters in the base. What is the volume?`, r`$\dfrac{2\pi}{15}$`, [r`$\dfrac{8\pi}{15}$`, r`$\dfrac{16\pi}{15}$`, r`$\dfrac{\pi}{15}$`], r`$\dfrac{\pi}{8}\cdot\dfrac{16}{15}$.`),
    mc("medium", r`The base of a solid is the triangle with vertices $(0,0)$, $(2,0)$ and $(0,2)$. Cross-sections perpendicular to the $x$-axis are squares. What is the volume?`, r`$\dfrac83$`, ["$2$", r`$\dfrac43$`, "$8$"], r`The side is $2-x$: $${INT(0, 2, "(2-x)^2")}$.`),
    mc("medium", r`The base of a solid is the triangle with vertices $(0,0)$, $(2,0)$ and $(0,2)$. Cross-sections perpendicular to the $x$-axis are equilateral triangles. What is the volume?`, r`$\dfrac{2\sqrt3}{3}$`, [r`$\dfrac{8\sqrt3}{3}$`, r`$\dfrac{4\sqrt3}{3}$`, r`$\dfrac{\sqrt3}{2}$`], r`$\dfrac{\sqrt3}{4}\cdot\dfrac83$.`),
    mc("medium", r`The base of a solid is the disc $x^{2}+y^{2}\le1$. Cross-sections perpendicular to the $x$-axis are equilateral triangles. What is the volume?`, r`$\dfrac{4\sqrt3}{3}$`, [r`$\dfrac{\sqrt3}{3}$`, r`$\dfrac{16}{3}$`, r`$\dfrac{4\sqrt3\,\pi}{3}$`], r`The side is $2\sqrt{1-x^2}$: $\dfrac{\sqrt3}{4}${INT(-1, 1, "4(1-x^2)")}=\sqrt3\cdot\dfrac43$.`),
    mc("medium", r`The base of a solid is the region under $y=\sin x$ for $0\le x\le\pi$. Cross-sections perpendicular to the $x$-axis are semicircles with diameters in the base. What is the volume?`, r`$\dfrac{\pi^{2}}{16}$`, [r`$\dfrac{\pi^{2}}{4}$`, r`$\dfrac{\pi}{4}$`, r`$\dfrac{\pi^{2}}{8}$`], r`$\dfrac{\pi}{8}${INT(0, r`\pi`, r`\sin^2x`)}=\dfrac{\pi}{8}\cdot\dfrac{\pi}{2}$.`),
    num("medium", r`The base of a solid is the region under $y=\dfrac{1}{\sqrt{x}}$ for $1\le x\le e$. Cross-sections perpendicular to the $x$-axis are squares. Find the volume.`, 1, 0, r`$${INT(1, "e", r`\dfrac1x`)}$.`),
    num("medium", r`The base of a solid is the region bounded by $y=x$, the $x$-axis and $x=3$. Each cross-section perpendicular to the $x$-axis is a rectangle whose height is twice its base. Find the volume.`, 18, 0, r`$${INT(0, 3, "2x^2")}$.`),
    mc("hard", r`The base of a solid is the region under $y=e^{x}$ for $0\le x\le1$. Cross-sections perpendicular to the $x$-axis are squares. What is the volume?`, r`$\dfrac{e^{2}-1}{2}$`, [r`$e-1$`, r`$e^{2}-1$`, r`$(e-1)^{2}$`], r`$${INT(0, 1, "e^{2x}")}$.`),
    mc("hard", r`The base of a solid is the region enclosed by $y=x^{2}$ and $y=1$. Cross-sections perpendicular to the $y$-axis are squares. What is the volume?`, "$2$", ["$1$", r`$\dfrac43$`, "$4$"], r`At height $y$ the side is $2\sqrt y$: $${INT(0, 1, "4y", "y")}$.`),
    mc("hard", r`The base of a solid is the region enclosed by $y=2x$ and $y=x^{2}$. Cross-sections perpendicular to the $x$-axis are semicircles with diameters in the base. Which expression gives the volume?`, r`$\dfrac{\pi}{8}${INT(0, 2, "(2x-x^2)^2")}$`, [r`$\dfrac{\pi}{2}${INT(0, 2, "(2x-x^2)^2")}$`, r`$\pi${INT(0, 2, r`\big[(2x)^2-(x^2)^2\big]`)}$`, r`$\dfrac{\pi}{8}${INT(0, 2, "(2x-x^2)")}$`], r`The diameter is $2x-x^2$, so the area is $\dfrac{\pi}{8}(2x-x^2)^2$. Nothing is rotated.`),
    num("hard", r`The base of a solid is the region under $y=e^{-x}$ for $0\le x\le2$. Cross-sections perpendicular to the $x$-axis are squares. Find the volume, to three decimal places.`, 0.491, 0.001, r`$${INT(0, 2, "e^{-2x}")}=\dfrac{1-e^{-4}}{2}$.`, { calc: true }),
  ];
}

// ── 8.8 Solids of Revolution: Discs ───────────────
function g88() {
  return [
    mc("easy", r`The region between $y=f(x)\ge0$ and the $x$-axis on $[a,b]$ is rotated about the $x$-axis. The volume of the solid is`, r`$\pi${INT("a", "b", r`\big[f(x)\big]^2`)}$`, [r`$\pi${INT("a", "b", "f(x)")}$`, r`$${INT("a", "b", r`\big[f(x)\big]^2`)}$`, r`$2\pi${INT("a", "b", "f(x)")}$`], r`Each slice is a disc of area $\pi r^2$ with $r=f(x)$.`),
    mc("easy", r`The region under $y=x$ for $0\le x\le3$ is rotated about the $x$-axis. What is the volume?`, r`$9\pi$`, [r`$\dfrac{9\pi}{2}$`, r`$27\pi$`, r`$3\pi$`], r`$\pi${INT(0, 3, "x^2")}$. The solid is a cone.`),
    mc("easy", r`A region is rotated about the $y$-axis and the disc method is used. The integral is taken with respect to`, "$y$, with the radius an $x$-value written in terms of $y$", ["$x$, with the radius a $y$-value", "$y$, with the radius a $y$-value", "$x$, with the radius an $x$-value"], r`The slices are stacked along the axis of rotation.`),
    mc("medium", r`The region under $y=e^{x}$ for $0\le x\le1$ is rotated about the $x$-axis. What is the volume?`, r`$\dfrac{\pi\left(e^{2}-1\right)}{2}$`, [r`$\pi(e-1)$`, r`$\pi\left(e^{2}-1\right)$`, r`$\pi(e-1)^{2}$`], r`$\pi${INT(0, 1, "e^{2x}")}$.`),
    mc("medium", r`The region under $y=\sin x$ for $0\le x\le\pi$ is rotated about the $x$-axis. What is the volume?`, r`$\dfrac{\pi^{2}}{2}$`, [r`$2\pi$`, r`$\dfrac{\pi}{2}$`, r`$\pi^{2}$`], r`$\pi${INT(0, r`\pi`, r`\sin^2x`)}=\pi\cdot\dfrac{\pi}{2}$.`),
    mc("medium", r`The region under $y=\dfrac1x$ for $1\le x\le3$ is rotated about the $x$-axis. What is the volume?`, r`$\dfrac{2\pi}{3}$`, [r`$\pi\ln3$`, r`$\dfrac23$`, r`$\dfrac{8\pi}{9}$`], r`$\pi${INT(1, 3, "x^{-2}")}=\pi\left(1-\dfrac13\right)$.`),
    mc("medium", r`The region under $y=x^{2}$ for $0\le x\le2$ is rotated about the $x$-axis. What is the volume?`, r`$\dfrac{32\pi}{5}$`, [r`$\dfrac{8\pi}{3}$`, r`$\dfrac{32}{5}$`, r`$\dfrac{16\pi}{5}$`], r`$\pi${INT(0, 2, "x^4")}$.`),
    mc("medium", r`The region under $y=\sqrt{9-x^{2}}$ for $-3\le x\le3$ is rotated about the $x$-axis. What is the volume?`, r`$36\pi$`, [r`$18\pi$`, r`$9\pi$`, r`$27\pi$`], r`$\pi${INT(-3, 3, "(9-x^2)")}$: a sphere of radius 3.`),
    mc("medium", r`The region under $y=\sec x$ for $0\le x\le\dfrac{\pi}{4}$ is rotated about the $x$-axis. What is the volume?`, r`$\pi$`, ["$1$", r`$\dfrac{\pi^{2}}{4}$`, r`$\pi\sqrt2$`], r`$\pi\Big[\tan x\Big]_0^{\pi/4}$.`),
    mc("medium", r`The region in the first quadrant bounded by $y=x^{2}$, $y=4$ and the $y$-axis is rotated about the $y$-axis. What is the volume?`, r`$8\pi$`, [r`$\dfrac{32\pi}{5}$`, r`$4\pi$`, r`$16\pi$`], r`The radius is $x=\sqrt y$: $\pi${INT(0, 4, "y", "y")}$.`),
    mc("hard", r`The region enclosed by $y=x^{2}$ and $y=1$ is rotated about the line $y=1$. What is the volume?`, r`$\dfrac{16\pi}{15}$`, [r`$\dfrac{8\pi}{5}$`, r`$\dfrac{4\pi}{3}$`, r`$\dfrac{2\pi}{5}$`], r`The radius is $1-x^2$: $\pi${INT(-1, 1, "(1-x^2)^2")}$.`),
    mc("hard", r`The region enclosed by $x=y^{2}$ and $x=9$ is rotated about the line $x=9$. Which expression gives the volume?`, r`$\pi${INT(-3, 3, "(9-y^2)^2", "y")}$`, [r`$\pi${INT(-3, 3, "(81-y^4)", "y")}$`, r`$\pi${INT(0, 9, "(9-y^2)^2", "y")}$`, r`$\pi${INT(-3, 3, "(y^2)^2", "y")}$`], r`The region touches the axis, so the slices are discs of radius $9-y^2$.`),
    mc("hard", r`The region between $y=3$ and $y=3-\sqrt{x}$ for $0\le x\le4$ is rotated about the line $y=3$. The radius of the disc at $x$ is`, r`$\sqrt{x}$`, [r`$3-\sqrt{x}$`, r`$3+\sqrt{x}$`, "$3$"], r`The distance from the curve up to the axis is $3-(3-\sqrt x)$.`),
    num("hard", r`The region under $y=\ln x$ for $1\le x\le e$ is rotated about the $x$-axis. Find the volume, to three decimal places.`, 2.257, 0.001, r`$\pi${INT(1, "e", r`(\ln x)^2`)}=\pi(e-2)$.`, { calc: true }),
    num("hard", r`The region under $y=xe^{-x}$ for $0\le x\le2$ is rotated about the $x$-axis. Find the volume, to three decimal places.`, 0.598, 0.001, r`$\pi${INT(0, 2, "x^2e^{-2x}")}$.`, { calc: true }),
  ];
}

// ── 8.9 Solids of Revolution: Washers ───────────────
function g89() {
  return [
    mc("easy", r`A region is rotated about an axis it does not touch. Each cross-section is a washer with outer radius $R$ and inner radius $r$. The volume is`, r`$\pi\displaystyle\int\left(R^{2}-r^{2}\right)$`, [r`$\pi\displaystyle\int(R-r)^{2}$`, r`$\pi\displaystyle\int\left(R^{2}+r^{2}\right)$`, r`$2\pi\displaystyle\int(R-r)$`], r`A large disc with a small disc removed.`),
    mc("easy", r`The rectangle bounded by $y=1$, $y=3$, $x=0$ and $x=2$ is rotated about the $x$-axis. What is the volume?`, r`$16\pi$`, [r`$8\pi$`, r`$4\pi$`, r`$20\pi$`], r`$\pi(3^2-1^2)\cdot2$. The value $8\pi$ comes from $(R-r)^2$.`),
    mc("medium", r`The region enclosed by $y=\sqrt{x}$ and $y=x^{2}$ is rotated about the $x$-axis. What is the volume?`, r`$\dfrac{3\pi}{10}$`, [r`$\dfrac{9\pi}{70}$`, r`$\dfrac{\pi}{3}$`, r`$\dfrac{3}{10}$`], r`$\pi${INT(0, 1, "(x-x^4)")}=\pi\left(\dfrac12-\dfrac15\right)$. The value $\dfrac{9\pi}{70}$ comes from $(R-r)^2$.`),
    mc("medium", r`The region enclosed by $y=3x$ and $y=x^{2}$ is rotated about the $x$-axis. What is the volume?`, r`$\dfrac{162\pi}{5}$`, [r`$\dfrac{81\pi}{10}$`, r`$\dfrac{9\pi}{2}$`, r`$\dfrac{162}{5}$`], r`$\pi${INT(0, 3, "(9x^2-x^4)")}=\pi\left(81-\dfrac{243}{5}\right)$.`),
    mc("medium", r`The region enclosed by $y=x^{2}$ and $y=2x$ is rotated about the $y$-axis. What is the volume?`, r`$\dfrac{8\pi}{3}$`, [r`$\dfrac{64\pi}{15}$`, r`$\dfrac{4\pi}{3}$`, r`$\dfrac{16\pi}{3}$`], r`In $y$: $R=\sqrt y$, $r=\dfrac y2$, $0\le y\le4$. $\pi${INT(0, 4, r`\left(y-\tfrac{y^2}{4}\right)`, "y")}$. The value $\dfrac{64\pi}{15}$ is the volume about the $x$-axis.`),
    mc("medium", r`The region enclosed by $y=x^{2}$ and $y=4$ is rotated about the $x$-axis. What is the volume?`, r`$\dfrac{256\pi}{5}$`, [r`$\dfrac{512\pi}{15}$`, r`$\dfrac{128\pi}{5}$`, r`$\dfrac{64\pi}{5}$`], r`$\pi${INT(-2, 2, "(16-x^4)")}=\pi\left(64-\dfrac{64}{5}\right)$.`),
    mc("medium", r`When a region between two curves is rotated about a horizontal line that lies above the region, the outer radius is measured to`, "the lower curve, because it is farther from the axis", ["the upper curve, because it is the larger function", "whichever curve has the larger $y$-values", "the $x$-axis"], r`Radii are distances from the axis of rotation.`),
    mc("hard", r`The region bounded by $y=\sqrt{x}$, the $x$-axis and $x=4$ is rotated about the line $y=-1$. What is the volume?`, r`$\dfrac{56\pi}{3}$`, [r`$8\pi$`, r`$\dfrac{68\pi}{3}$`, r`$\dfrac{32\pi}{3}$`], r`$R=\sqrt x+1$, $r=1$: $\pi${INT(0, 4, r`\left(x+2\sqrt x\right)`)}=\pi\left(8+\dfrac{32}{3}\right)$.`),
    mc("hard", r`The region enclosed by $y=x$ and $y=x^{2}$ is rotated about the line $x=-1$. What is the volume?`, r`$\dfrac{\pi}{2}$`, [r`$\dfrac{\pi}{6}$`, r`$\dfrac{7\pi}{15}$`, r`$\dfrac{\pi}{3}$`], r`$R=\sqrt y+1$, $r=y+1$: $\pi${INT(0, 1, r`\left(2\sqrt y-y-y^2\right)`, "y")}=\pi\left(\dfrac43-\dfrac12-\dfrac13\right)$.`),
    mc("hard", r`The region bounded by $y=e^{x}$, $y=1$ and $x=1$ is rotated about the $x$-axis. What is the volume?`, r`$\dfrac{\pi\left(e^{2}-3\right)}{2}$`, [r`$\dfrac{\pi\left(e^{2}-1\right)}{2}$`, r`$\pi(e-2)$`, r`$\pi\left(e^{2}-3\right)$`], r`$\pi${INT(0, 1, "(e^{2x}-1)")}=\pi\left(\dfrac{e^2-1}{2}-1\right)$.`),
    mc("hard", r`The region enclosed by $y=x^{2}$ and $y=x+2$ is rotated about the line $y=6$. Which expression gives the volume?`, r`$\pi${INT(-1, 2, r`\big[(6-x^2)^2-(4-x)^2\big]`)}$`, [r`$\pi${INT(-1, 2, r`\big[(4-x)^2-(6-x^2)^2\big]`)}$`, r`$\pi${INT(-1, 2, r`\big[(x+2)^2-(x^2)^2\big]`)}$`, r`$\pi${INT(-1, 2, r`\big[(x+2)-x^2\big]^2`)}$`], r`The axis is above the region, so the parabola is farther: $R=6-x^2$ and $r=6-(x+2)$.`),
    mc("hard", r`The region enclosed by $x=y^{2}$ and $x=4$ is rotated about the line $x=-1$. Which expression gives the volume?`, r`$\pi${INT(-2, 2, r`\big[25-(y^2+1)^2\big]`, "y")}$`, [r`$\pi${INT(-2, 2, r`\big[16-y^4\big]`, "y")}$`, r`$\pi${INT(-2, 2, r`\big[(y^2+1)^2-25\big]`, "y")}$`, r`$\pi${INT(-2, 2, r`\big(4-y^2\big)^2`, "y")}$`], r`$R=4-(-1)=5$ and $r=y^2+1$.`),
    num("hard", r`The region in the first quadrant enclosed by $y=\sin x$ and $y=x^{2}$ is rotated about the $x$-axis. Find the volume, to three decimal places.`, 0.279, 0.001, r`The graphs meet at $x=0$ and $x\approx0.8767$: $\pi${INT(0, "0.8767", r`\left(\sin^2x-x^4\right)`)}$.`, { calc: true }),
  ];
}

// ── 8.10 Unit 8 Synthesis ───────────────
function g810() {
  const R = r`Let $R$ be the region enclosed by the graphs of $y=\sqrt{x}$ and $y=\dfrac{x}{3}$. `;
  return [
    num("medium", R + r`Find the area of $R$.`, 4.5, 0.001, r`The graphs meet at $x=0$ and $x=9$: $${INT(0, 9, r`\left(\sqrt x-\tfrac x3\right)`)}=18-\dfrac{27}{2}$.`),
    mc("medium", R + r`Which integral with respect to $y$ gives the area of $R$?`, r`$${INT(0, 3, "(3y-y^2)", "y")}$`, [r`$${INT(0, 9, "(3y-y^2)", "y")}$`, r`$${INT(0, 3, "(y^2-3y)", "y")}$`, r`$${INT(0, 3, r`\left(\sqrt y-\tfrac y3\right)`, "y")}$`], r`The line is $x=3y$ (on the right) and the curve is $x=y^2$, for $0\le y\le3$.`),
    mc("medium", R + r`What is the volume of the solid generated when $R$ is rotated about the $x$-axis?`, r`$\dfrac{27\pi}{2}$`, [r`$\dfrac{27\pi}{10}$`, r`$\dfrac{9\pi}{2}$`, r`$\dfrac{81\pi}{2}$`], r`$\pi${INT(0, 9, r`\left(x-\tfrac{x^2}{9}\right)`)}=\pi\left(\dfrac{81}{2}-27\right)$. The value $\dfrac{27\pi}{10}$ comes from $(R-r)^2$.`),
    mc("hard", R + r`What is the volume of the solid generated when $R$ is rotated about the $y$-axis?`, r`$\dfrac{162\pi}{5}$`, [r`$\dfrac{27\pi}{2}$`, r`$\dfrac{81\pi}{5}$`, r`$\dfrac{324\pi}{5}$`], r`$\pi${INT(0, 3, "(9y^2-y^4)", "y")}=\pi\left(81-\dfrac{243}{5}\right)$.`),
    mc("hard", R + r`$R$ is the base of a solid whose cross-sections perpendicular to the $x$-axis are squares. What is the volume of the solid?`, r`$\dfrac{27}{10}$`, [r`$\dfrac92$`, r`$\dfrac{27\pi}{10}$`, r`$\dfrac{81}{10}$`], r`$${INT(0, 9, r`\left(\sqrt x-\tfrac x3\right)^2`)}=\dfrac{81}{2}-\dfrac{324}{5}+27$.`),
    mc("hard", R + r`$R$ is the base of a solid whose cross-sections perpendicular to the $x$-axis are semicircles with diameters in $R$. What is the volume of the solid?`, r`$\dfrac{27\pi}{80}$`, [r`$\dfrac{27\pi}{20}$`, r`$\dfrac{27\pi}{10}$`, r`$\dfrac{9\pi}{16}$`], r`$\dfrac{\pi}{8}\cdot\dfrac{27}{10}$.`),
    mc("hard", R + r`Which expression gives the volume of the solid generated when $R$ is rotated about the line $y=3$?`, r`$\pi${INT(0, 9, r`\left[\left(3-\tfrac x3\right)^2-\left(3-\sqrt x\right)^2\right]`)}$`, [r`$\pi${INT(0, 9, r`\left[\left(3-\sqrt x\right)^2-\left(3-\tfrac x3\right)^2\right]`)}$`, r`$\pi${INT(0, 9, r`\left[\left(\sqrt x-3\right)^2-\left(\tfrac x3\right)^2\right]`)}$`, r`$\pi${INT(0, 9, r`\left(\sqrt x-\tfrac x3\right)^2`)}$`], r`The axis is along the top of the region, so the line $y=\dfrac x3$ is farther from it.`),
    mc("hard", R + r`Which expression gives the volume of the solid generated when $R$ is rotated about the line $y=-1$?`, r`$\pi${INT(0, 9, r`\left[\left(\sqrt x+1\right)^2-\left(\tfrac x3+1\right)^2\right]`)}$`, [r`$\pi${INT(0, 9, r`\left[\left(\sqrt x-1\right)^2-\left(\tfrac x3-1\right)^2\right]`)}$`, r`$\pi${INT(0, 9, r`\left[\left(\tfrac x3+1\right)^2-\left(\sqrt x+1\right)^2\right]`)}$`, r`$\pi${INT(0, 9, r`\left[x-\tfrac{x^2}{9}\right]`)}+\pi$`], r`Each radius is the curve's height plus 1.`),
    num("hard", R + r`What is the greatest vertical distance between the two graphs for $0\le x\le9$?`, 0.75, 0.001, r`$d(x)=\sqrt x-\dfrac x3$, and $d'(x)=\dfrac{1}{2\sqrt x}-\dfrac13=0$ at $x=\dfrac94$, where $d=\dfrac32-\dfrac34$.`),
    num("medium", r`A particle has velocity $v(t)=6t-t^{2}$ for $0\le t\le6$. Find the average value of its velocity on that interval.`, 6, 0, r`$\dfrac16${INT(0, 6, "(6t-t^2)", "t")}=\dfrac{36}{6}$.`),
    num("medium", r`A particle has velocity $v(t)=t^{2}-2t$ for $0\le t\le3$. Find the total distance it travels, to three decimal places.`, 2.667, 0.001, r`$\dfrac43$ backwards on $[0,2]$ and $\dfrac43$ forwards on $[2,3]$. The displacement is 0.`),
    mc("hard", r`A student finds the volume of a solid of revolution with outer radius $R(x)$ and inner radius $r(x)$ by computing $\pi${INT("a", "b", r`\big[R(x)-r(x)\big]^2`)}$. The student has found`, "the volume of a different solid: one generated by rotating a region of the same thickness placed flush against the axis", ["the correct volume", "the area of the region, multiplied by $\\pi$", "twice the correct volume"], r`$R^2-r^2\neq(R-r)^2$. Squaring the thickness gives a disc, not a washer.`),
  ];
}

export default [
  { code: "8.1", gen: g81 },
  { code: "8.2", gen: g82 },
  { code: "8.3", gen: g83 },
  { code: "8.4", gen: g84 },
  { code: "8.5", gen: g85 },
  { code: "8.6", gen: g86 },
  { code: "8.7", gen: g87 },
  { code: "8.8", gen: g88 },
  { code: "8.9", gen: g89 },
  { code: "8.10", gen: g810 },
];
