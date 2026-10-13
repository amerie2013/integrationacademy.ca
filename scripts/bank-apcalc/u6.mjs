// AP Calculus AB exam prep — Unit 6 (Integration): question bank.
// Original questions in exam format; see u1.mjs for the conventions.
import { mc, num, tbl } from "./helpers.mjs";
import { plot, C } from "../apcalc/fig.mjs";

const r = String.raw;
const I = (a, b, body, v = "x") => `\\displaystyle\\int_{${a}}^{${b}}${body}\\,d${v}`;
const J = (body, v = "x") => `\\displaystyle\\int ${body}\\,d${v}`;
const DDX = (body) => `\\dfrac{d}{dx}\\left[${body}\\right]`;

// ── figures ──
// f: segments through (−2,0) (0,4) (4,−4) (6,0) (8,2). Signed areas 4, 4, −4, −4, 2.
// The bank has its own graphs and table; the Unit 6 lessons use different ones.
const FPTS = [[-2, -2], [1, 4], [4, -2], [6, 2], [8, 0]];
const figF = (name = "x") => {
  const g = plot({ w: 440, h: 320, x: [-3, 9], y: [-5, 5], xName: name, alt: "Piecewise-linear graph of f" });
  g.poly(FPTS).dot(-2, -2).dot(8, 0).label(1.4, 4.2, `y = f(${name})`);
  return g;
};
// k: semicircle of radius 3 on [0,6], then (6,0) → (8,−2) → (10,0). Areas 9π/2, −2, −2.
const figK = () => {
  const g = plot({ w: 430, h: 300, x: [-1, 11], y: [-3, 4], alt: "Graph of k: a semicircle followed by two line segments" });
  g.curve((x) => Math.sqrt(Math.max(0, 9 - (x - 3) ** 2)), 0, 6, { n: 900 }).poly([[6, 0], [8, -2], [10, 0]]).dot(0, 0).dot(10, 0).label(4.6, 3.2, "y = k(x)");
  return g;
};
// R: rate through (0,4) (3,10) (7,10) (10,4). Areas 21, 40, 21.
const figR = () => {
  const g = plot({ w: 430, h: 290, x: [-1, 11], y: [-1, 12], stepY: 2, xName: "t", yName: "R", alt: "Rate of flow R against time t" });
  g.poly([[0, 4], [3, 10], [7, 10], [10, 4]]).dot(0, 4).dot(10, 4);
  return g;
};
const FX = "The graph of the function $f$, consisting of four line segments, is shown. ";
const FG = r`The graph of the function $f$, consisting of four line segments, is shown. Let $g(x)=\displaystyle\int_{0}^{x}f(t)\,dt$. `;
const KX = "The graph of the function $k$ is shown. It consists of a semicircle and two line segments. ";
const RX = "Water enters a tank at a rate of $R(t)$ litres per minute. The graph of $R$, consisting of three line segments, is shown for $0\\le t\\le10$. ";
const ET = `Water enters a tank at a rate of $E(t)$ litres per minute, where $t$ is measured in minutes. Selected values of $E$ are shown. ${tbl("t", [0, 3, 5, 9, 12], "E(t)", [10, 16, 22, 14, 8])} `;

// ── 6.1 Accumulating Change ───────────────
function g61() {
  const R = { fig: figR() };
  return [
    mc("easy", r`If $R(t)$ is the rate of change of a quantity, the area between the graph of $R$ and the $t$-axis from $t=a$ to $t=b$ represents`, "the net change in the quantity from $t=a$ to $t=b$", ["the value of the quantity at $t=b$", "the average rate of change of $R$", "the rate of change of the quantity at $t=b$"], r`Rate × time accumulates to a change in the quantity.`),
    mc("easy", r`A car travels at a constant 30 m/s for 4 seconds. How far does it travel?`, "$120$ m", ["$7.5$ m", "$34$ m", "$60$ m"], r`Rate × time: the area of a 30 by 4 rectangle.`),
    mc("easy", r`Water flows at $r(t)$ litres per minute, with $t$ in minutes. What are the units of the area under the graph of $r$?`, "litres", ["litres per minute", "minutes", "litres per minute per minute"], r`(litres per minute) × (minutes).`),
    num("easy", r`A tap runs at $r(t)=3t$ litres per minute for $0\le t\le4$. How many litres flow out?`, 24, 0, r`A triangle with base 4 and height 12.`),
    mc("medium", RX + r`How much water enters the tank from $t=0$ to $t=10$?`, "$82$ litres", ["$100$ litres", "$61$ litres", "$10$ litres"], r`Trapezoid 21, rectangle 40, trapezoid 21.`, R),
    mc("medium", RX + r`The tank holds 15 litres at $t=0$. How much water is in the tank at $t=7$?`, "$76$ litres", ["$61$ litres", "$36$ litres", "$97$ litres"], r`$15+21+40$. The option 61 is the change, not the amount.`, R),
    mc("medium", RX + r`How much water enters the tank from $t=7$ to $t=10$?`, "$21$ litres", ["$30$ litres", "$15$ litres", "$12$ litres"], r`A trapezoid with parallel sides 10 and 4 and width 3.`, R),
    mc("medium", r`Water is pumped into a pool at $r(t)=2t$ litres per minute for $0\le t\le5$. How much water is pumped in?`, "$25$ litres", ["$10$ litres", "$50$ litres", "$20$ litres"], r`A triangle with base 5 and height 10.`),
    mc("medium", r`A population grows at $P'(t)=50+10t$ people per year for $0\le t\le6$. If the population is 2000 at $t=0$, what is it at $t=6$?`, "$2480$", ["$480$", "$2110$", "$2660$"], r`Trapezoid $\tfrac12(50+110)(6)=480$, added to 2000.`),
    mc("hard", r`A particle has velocity $v(t)=6-2t$ m/s for $0\le t\le5$. What is the net change in its position?`, "$5$ m", ["$13$ m", "$9$ m", "$-4$ m"], r`Above the axis 9, below the axis 4: $9-4$. The option 13 is the total distance.`),
    mc("hard", r`A particle has velocity $v(t)=6-2t$ m/s for $0\le t\le5$. What is the total distance it travels?`, "$13$ m", ["$5$ m", "$9$ m", "$25$ m"], r`$9+4$: both areas counted as positive.`),
    mc("hard", RX + r`Which statement correctly interprets the value $R(3)=10$?`, "At $t=3$ minutes, water is entering the tank at 10 litres per minute.", ["By $t=3$ minutes, 10 litres of water have entered the tank.", "At $t=3$ minutes, the tank contains 10 litres of water.", "From $t=0$ to $t=3$, water entered at an average of 10 litres per minute."], r`A height on a rate graph is a rate. The amount entered by $t=3$ is the area, 21 litres.`, R),
    mc("hard", r`A particle has velocity $v(t)=4-t$ m/s for $0\le t\le6$. Which pair gives its displacement and total distance?`, "displacement $6$ m, distance $10$ m", ["displacement $10$ m, distance $6$ m", "displacement $6$ m, distance $6$ m", "displacement $8$ m, distance $10$ m"], r`Above: $\tfrac12(4)(4)=8$. Below: $\tfrac12(2)(2)=2$. $8-2$ and $8+2$.`),
    num("hard", RX + r`At what time $t$ has exactly 61 litres of water entered the tank?`, 7, 0, r`$21$ litres by $t=3$, then 10 litres per minute for 4 more minutes.`, R),
  ];
}

// ── 6.2 Riemann and Trapezoidal Sums ───────────────
function g62() {
  return [
    mc("easy", r`A left Riemann sum uses, on each subinterval, the value of the function at`, "the left endpoint", ["the midpoint", "the right endpoint", "the average of the two endpoints"], r`The height of each rectangle is the value at the left end.`),
    mc("easy", r`What is the left Riemann sum for $f(x)=x^{2}$ on $[0,4]$ with 4 subintervals of equal width?`, "$14$", ["$30$", "$22$", "$7$"], r`$1(0+1+4+9)$. The option 30 is the right Riemann sum.`),
    mc("easy", r`What is the right Riemann sum for $f(x)=x^{2}$ on $[0,4]$ with 4 subintervals of equal width?`, "$30$", ["$14$", "$22$", "$60$"], r`$1(1+4+9+16)$.`),
    num("easy", r`Find the trapezoidal sum for $f(x)=x^{2}$ on $[0,4]$ with 4 subintervals of equal width.`, 22, 0.001, r`The average of the left sum 14 and the right sum 30.`),
    mc("medium", ET + r`What is the trapezoidal sum approximating $${I(0, 12, "E(t)", "t")}$ with the four subintervals indicated?`, "$182$", ["$183$", "$192$", "$172$"], r`$39+38+72+33$. The option 183 uses a width of 3 for every subinterval.`),
    mc("medium", ET + r`What is the left Riemann sum approximating $${I(0, 12, "E(t)", "t")}$ with the four subintervals indicated?`, "$192$", ["$172$", "$182$", "$186$"], r`$(3)(10)+(2)(16)+(4)(22)+(3)(14)$.`),
    mc("medium", ET + r`What is the right Riemann sum approximating $${I(0, 12, "E(t)", "t")}$ with the four subintervals indicated?`, "$172$", ["$192$", "$182$", "$180$"], r`$(3)(16)+(2)(22)+(4)(14)+(3)(8)$.`),
    mc("medium", r`Selected values of $f$ are shown. ${tbl("x", [0, 1, 2, 3, 4, 5, 6], "f(x)", [3, 5, 8, 9, 7, 4, 2])} What is the midpoint Riemann sum for $f$ on $[0,6]$ with three subintervals of equal width?`, "$36$", ["$18$", "$38$", "$33$"], r`Subintervals of width 2 with midpoints 1, 3, 5: $2(5+9+4)$.`),
    mc("medium", r`If $f$ is increasing on $[a,b]$, then a left Riemann sum for $${I("a", "b", "f(x)")}$ is`, "an underestimate", ["an overestimate", "exact", "an overestimate only if $f$ is concave up"], r`Each rectangle's height is the smallest value on its subinterval.`),
    mc("medium", r`If the graph of $f$ is concave up on $[a,b]$, then a trapezoidal sum for $${I("a", "b", "f(x)")}$ is`, "an overestimate", ["an underestimate", "exact", "an overestimate only if $f$ is increasing"], r`The chords of a concave-up curve lie above it.`),
    mc("medium", r`A car's velocity, in m/s, is recorded. ${tbl("t", [0, 3, 4, 8], "v(t)", [10, 16, 18, 14])} What is the trapezoidal estimate of the distance travelled from $t=0$ to $t=8$?`, "$120$ m", ["$116$ m", "$124$ m", "$155$ m"], r`$\tfrac12(26)(3)+\tfrac12(34)(1)+\tfrac12(32)(4)=39+17+64$.`),
    mc("hard", r`A function $f$ is positive, decreasing and concave up on $[1,5]$. Let $L$, $R$ and $T$ be the left, right and trapezoidal sums with the same subintervals, and $A$ the exact value of $${I(1, 5, "f(x)")}$. Which ordering is correct?`, r`$R\lt A\lt T\lt L$`, [r`$L\lt A\lt T\lt R$`, r`$R\lt T\lt A\lt L$`, r`$R\lt A\lt L\lt T$`], r`Decreasing: $R\lt A\lt L$. Concave up: $A\lt T$. And $T$ is the average of $L$ and $R$, so $T\lt L$.`),
    mc("hard", r`A function is increasing and concave down on $[0,4]$. Which statement is true?`, "Both the left Riemann sum and the trapezoidal sum are underestimates.", ["The left sum is an underestimate and the trapezoidal sum is an overestimate.", "Both are overestimates.", "The left sum is an overestimate and the trapezoidal sum is an underestimate."], r`Increasing makes the left sum low; concave down makes the trapezoidal sum low.`),
    mc("hard", ET + r`Which statement about the right Riemann sum, 172, is justified?`, "No conclusion about over- or underestimation can be drawn, because $E$ is not monotonic on $[0,12]$.", ["It is an overestimate because $E(0)\\lt E(12)$ is false.", "It is an underestimate because $E$ is decreasing.", "It is an overestimate because $E$ is increasing."], r`The over/under rules need $E$ increasing or decreasing on the whole interval; here it rises then falls.`),
    mc("hard", r`What is the midpoint Riemann sum for $${I(0, 2, r`\ln\left(1+x^{2}\right)`)}$ with 4 subintervals of equal width?`, "$1.425$", ["$1.433$", "$2.850$", "$1.609$"], r`$0.5\left(\ln1.0625+\ln1.5625+\ln2.5625+\ln4.0625\right)=1.425$. The value 1.433 is the integral itself.`, { calc: true }),
    num("hard", r`Selected values of $h$ are $h(2)=6$, $h(5)=10$ and $h(8)=4$. Find the trapezoidal sum approximating $${I(2, 8, "h(x)")}$ with two subintervals.`, 45, 0, r`$\tfrac12(6+10)(3)+\tfrac12(10+4)(3)=24+21$.`),
  ];
}

// ── 6.3 Sums to the Definite Integral ───────────────
function g63() {
  const S = (body) => `\\displaystyle\\lim_{n\\to\\infty}\\sum_{i=1}^{n}${body}`;
  return [
    mc("easy", r`The definite integral $${I("a", "b", "f(x)")}$ is defined as`, "the limit of Riemann sums as the number of subintervals increases without bound", ["the slope of the graph of $f$ between $a$ and $b$", "any antiderivative of $f$", "the average value of $f$ on $[a,b]$"], r`It is the limit of $\sum f(x_i^*)\Delta x$.`),
    mc("easy", r`Evaluate $${I(0, 3, "(2x+2)")}$ using geometry.`, "$15$", ["$24$", "$9$", "$30$"], r`A trapezoid with parallel sides 2 and 8 and width 3.`),
    mc("easy", r`Evaluate $${I(-4, 4, r`\sqrt{16-x^{2}}`)}$ using geometry.`, r`$8\pi$`, [r`$16\pi$`, r`$4\pi$`, r`$2\pi$`], r`A semicircle of radius 4.`),
    num("easy", r`Evaluate $${I(0, 8, "(4-x)")}$ using geometry.`, 0, 0, r`A triangle of area 8 above the axis and one of area 8 below.`),
    mc("medium", r`Which definite integral equals $${S(r`\left(1+\dfrac{4i}{n}\right)^{2}\cdot\dfrac{4}{n}`)}$?`, r`$${I(1, 5, "x^{2}")}$`, [r`$${I(0, 4, "x^{2}")}$`, r`$${I(1, 4, "x^{2}")}$`, r`$${I(0, 5, "x^{2}")}$`], r`$\Delta x=\tfrac4n$ gives $b-a=4$; $x_i=1+\tfrac{4i}{n}$ gives $a=1$, $b=5$.`),
    mc("medium", r`Which definite integral equals $${S(r`\dfrac{\pi}{2n}\cos\!\left(\dfrac{\pi i}{2n}\right)`)}$?`, r`$${I(0, r`\pi/2`, r`\cos x`)}$`, [r`$${I(0, 1, r`\cos x`)}$`, r`$${I(0, r`\pi/2`, r`\dfrac{\pi}{2}\cos x`)}$`, r`$${I(0, 1, r`\cos\!\left(\dfrac{\pi x}{2}\right)`)}$`], r`$\Delta x=\tfrac{\pi}{2n}$ and $x_i=\tfrac{\pi i}{2n}$: $f(x)=\cos x$ on $\left[0,\tfrac\pi2\right]$.`),
    mc("medium", r`Which limit equals $${I(2, 5, r`\ln x`)}$?`, r`$${S(r`\ln\!\left(2+\dfrac{3i}{n}\right)\cdot\dfrac{3}{n}`)}$`, [r`$${S(r`\ln\!\left(\dfrac{3i}{n}\right)\cdot\dfrac{3}{n}`)}$`, r`$${S(r`\ln\!\left(2+\dfrac{5i}{n}\right)\cdot\dfrac{5}{n}`)}$`, r`$${S(r`\ln\!\left(2+\dfrac{3i}{n}\right)\cdot\dfrac{1}{n}`)}$`], r`$\Delta x=\tfrac{5-2}{n}$ and $x_i=2+\tfrac{3i}{n}$.`),
    mc("medium", r`Evaluate $${I(-1, 4, "|x|")}$ using geometry.`, r`$\dfrac{17}{2}$`, [r`$\dfrac{15}{2}$`, r`$\dfrac{25}{2}$`, "$5$"], r`Triangles of area $\tfrac12$ and 8, both above the axis.`),
    mc("medium", r`Which definite integral equals $${S(r`\left(\dfrac{2i}{n}\right)^{4}\cdot\dfrac{2}{n}`)}$?`, r`$${I(0, 2, "x^{4}")}$`, [r`$${I(0, 1, "x^{4}")}$`, r`$${I(0, 2, "2x^{4}")}$`, r`$${I(1, 2, "x^{4}")}$`], r`$\Delta x=\tfrac2n$, $x_i=\tfrac{2i}{n}$.`),
    mc("medium", r`Evaluate $${I(0, 6, r`\sqrt{36-x^{2}}`)}$ using geometry.`, r`$9\pi$`, [r`$18\pi$`, r`$36\pi$`, r`$\dfrac{9\pi}{2}$`], r`A quarter of a circle of radius 6.`),
    mc("hard", r`Which definite integral equals $${S(r`\sqrt{2+\dfrac{i}{n}}\cdot\dfrac{1}{n}`)}$?`, r`$${I(2, 3, r`\sqrt{x}`)}$`, [r`$${I(0, 1, r`\sqrt{x}`)}$`, r`$${I(0, 3, r`\sqrt{2+x}`)}$`, r`$${I(2, 3, r`\sqrt{2+x}`)}$`], r`$\Delta x=\tfrac1n$ and $x_i=2+\tfrac in$ on $[2,3]$.`),
    mc("hard", r`Which definite integral equals $${S(r`\dfrac{1}{1+\left(\frac{3i}{n}\right)^{2}}\cdot\dfrac{3}{n}`)}$?`, r`$${I(0, 3, r`\dfrac{1}{1+x^{2}}`)}$`, [r`$${I(0, 1, r`\dfrac{1}{1+x^{2}}`)}$`, r`$${I(1, 4, r`\dfrac{1}{x^{2}}`)}$`, r`$${I(0, 3, r`\dfrac{3}{1+x^{2}}`)}$`], r`$\Delta x=\tfrac3n$ and $x_i=\tfrac{3i}{n}$ on $[0,3]$.`),
    mc("hard", r`The expression $${S(r`\left(1+\dfrac{4i}{n}\right)^{2}\cdot\dfrac{4}{n}`)}$ is also equal to`, r`$${I(0, 4, "(1+x)^{2}")}$`, [r`$${I(0, 4, "x^{2}")}$`, r`$${I(1, 5, "(1+x)^{2}")}$`, r`$${I(0, 1, "(1+4x)^{2}")}$`], r`Reading $x_i=\tfrac{4i}{n}$ on $[0,4]$ gives $f(x)=(1+x)^2$. The last option is missing the factor 4.`),
    mc("hard", r`The function $W$ gives the rate, in kilowatts, at which a house uses energy at time $t$ hours after midnight. What does $${I(0, 24, "W(t)", "t")}$ represent?`, "the total energy, in kilowatt-hours, that the house uses during the day", ["the rate, in kilowatts, at which energy is being used at midnight the next day", "the average rate, in kilowatts, at which energy is used during the day", "the change in the rate of energy use, in kilowatts, over the day"], r`The integral of a rate over an interval is the amount accumulated: kilowatts × hours.`),
    num("hard", r`Evaluate $${I(-1, 3, "(2-x)")}$ using geometry.`, 4, 0, r`Above the axis on $[-1,2]$: $\tfrac12(3)(3)=4.5$. Below on $[2,3]$: $0.5$. $4.5-0.5$.`),
  ];
}

// ── 6.4 FTC Part 1 ───────────────
function g64() {
  const f = { fig: figF("t") };
  const FT = r`The graph of the function $f$, consisting of four line segments, is shown. Let $g(x)=\displaystyle\int_{0}^{x}f(t)\,dt$. `;
  return [
    mc("easy", r`If $f$ is continuous and $g(x)=${I("a", "x", "f(t)", "t")}$, then $g'(x)=$`, "$f(x)$", ["$f(x)-f(a)$", "$f'(x)$", "$f(a)$"], r`The Fundamental Theorem of Calculus, Part 1.`),
    mc("easy", r`$${DDX(I(1, "x", r`\sqrt{1+t^{3}}`, "t"))}=$`, r`$\sqrt{1+x^{3}}$`, [r`$\sqrt{1+x^{3}}-\sqrt2$`, r`$\dfrac{3x^{2}}{2\sqrt{1+x^{3}}}$`, r`$\sqrt{1+t^{3}}$`], r`Replace $t$ by $x$. The lower limit does not appear.`),
    mc("easy", FT + r`What is $g(2)$?`, "$6$", ["$2$", "$4$", "$8$"], r`Two trapezoids, each of area 3: heights 2 and 4, then 4 and 2. The value $f(2)$ is 2.`, f),
    mc("easy", FT + r`What is $g'(1)$?`, "$4$", ["$3$", "$2$", "$-2$"], r`$g'(1)=f(1)=4$. The option 3 is $g(1)$.`, f),
    mc("medium", r`$${DDX(I(0, "x^{2}", r`\cos\left(t^{2}\right)`, "t"))}=$`, r`$2x\cos\left(x^{4}\right)$`, [r`$\cos\left(x^{4}\right)$`, r`$2x\cos\left(x^{2}\right)$`, r`$-2x\sin\left(x^{4}\right)$`], r`Substitute the upper limit and multiply by its derivative.`),
    mc("medium", r`$${DDX(I("x", 5, "e^{t^{2}}", "t"))}=$`, r`$-e^{x^{2}}$`, [r`$e^{x^{2}}$`, r`$e^{25}-e^{x^{2}}$`, r`$-2x\,e^{x^{2}}$`], r`Reversing the limits introduces a minus sign.`),
    mc("medium", FT + r`What is $g(-2)$?`, "$0$", ["$2$", "$-2$", "$-1$"], r`$${I(0, -2, "f(t)", "t")}=-${I(-2, 0, "f(t)", "t")}=-(-1+1)=0$.`, f),
    mc("medium", FT + r`What is $g''(2)$?`, "$-2$", ["$2$", "$6$", "$0$"], r`$g''=f'$, the slope of the graph of $f$: $\dfrac{-2-4}{4-1}$. The option 2 is $f(2)$.`, f),
    mc("medium", FT + r`What is $g(1)$?`, "$3$", ["$4$", "$2$", "$6$"], r`A trapezoid with heights 2 and 4 and width 1.`, f),
    mc("medium", r`$${DDX(I(1, r`\sin x`, r`\sqrt{1+t^{4}}`, "t"))}=$`, r`$\cos x\sqrt{1+\sin^{4}x}$`, [r`$\sqrt{1+\sin^{4}x}$`, r`$\sqrt{1+\cos^{4}x}$`, r`$\cos x\sqrt{1+x^{4}}$`], r`$f(u)\,u'$ with $u=\sin x$.`),
    mc("hard", r`$${DDX(I("2x", "x^{3}", r`\ln\left(1+t^{2}\right)`, "t"))}=$`, r`$3x^{2}\ln\left(1+x^{6}\right)-2\ln\left(1+4x^{2}\right)$`, [r`$\ln\left(1+x^{6}\right)-\ln\left(1+4x^{2}\right)$`, r`$3x^{2}\ln\left(1+x^{6}\right)+2\ln\left(1+4x^{2}\right)$`, r`$3x^{2}\ln\left(1+x^{6}\right)$`], r`Upper limit contributes $f(x^3)\cdot3x^2$; lower limit contributes $-f(2x)\cdot2$.`),
    mc("hard", FT + r`If $h(x)=${I(0, "2x", "f(t)", "t")}$, what is $h'(2)$?`, "$-4$", ["$-2$", "$4$", "$12$"], r`$h'(x)=2f(2x)$, so $h'(2)=2f(4)=2(-2)$.`, f),
    mc("hard", r`Let $F(x)=${I(0, "x", r`\dfrac{1}{1+t^{4}}`, "t")}$. For $x\gt0$, the graph of $F$ is`, "increasing and concave down", ["increasing and concave up", "decreasing and concave down", "decreasing and concave up"], r`$F'(x)=\dfrac{1}{1+x^4}\gt0$ and $F''(x)=-\dfrac{4x^3}{(1+x^4)^2}\lt0$ for $x\gt0$.`),
    mc("hard", FT + r`What is $g''(5)$?`, "$2$", ["$-2$", "$0$", "$5$"], r`The slope of the graph of $f$ on $(4,6)$ is $\dfrac{2-(-2)}{2}$. The option 0 is $f(5)$.`, f),
    mc("hard", r`If $${I(2, "x", "f(t)", "t")}=x^{3}-8$ for all $x$, then $f(3)=$`, "$27$", ["$19$", "$9$", "$6$"], r`Differentiate both sides: $f(x)=3x^2$.`),
    num("hard", FT + r`Find $g(6)$.`, 6, 0, r`$${I(0, 3, "f(t)", "t")}=7$, then $-1-1+1$.`, f),
  ];
}

// ── 6.5 Analysing an Accumulation Function ───────────────
function g65() {
  const f = { fig: figF("t") };
  return [
    mc("easy", FG + r`On which intervals is $g$ increasing?`, r`$(-1,3)$ and $(5,8)$`, [r`$(-2,1)$ and $(4,6)$`, r`$(3,5)$`, r`$(1,4)$`], r`$g'=f\gt0$ where the graph of $f$ is above the axis.`, f),
    mc("easy", FG + r`At what value of $x$ does $g$ have a relative maximum?`, "$x=3$", ["$x=1$", "$x=5$", "$x=6$"], r`$g'=f$ changes from positive to negative at $x=3$. At $x=1$, $f$ is greatest, which is a point of inflection of $g$.`, f),
    mc("easy", FG + r`At what value of $x$ in the interval $(0,8)$ does $g$ have a relative minimum?`, "$x=5$", ["$x=4$", "$x=3$", "$x=1$"], r`$g'=f$ changes from negative to positive at $x=5$.`, f),
    mc("medium", FG + r`On which intervals is the graph of $g$ concave down?`, r`$(1,4)$ and $(6,8)$`, [r`$(3,5)$`, r`$(-2,1)$ and $(4,6)$`, r`$(-1,3)$`], r`$g$ is concave down where $g'=f$ is decreasing.`, f),
    mc("medium", FG + r`At which values of $x$ does the graph of $g$ have a point of inflection?`, "$x=1$, $x=4$ and $x=6$", ["$x=-1$, $x=3$ and $x=5$", "$x=1$ only", "$x=1$ and $x=4$ only"], r`$g'=f$ changes between increasing and decreasing at 1, 4 and 6.`, f),
    mc("medium", FG + r`What is the absolute maximum value of $g$ on $[-2,8]$?`, "$8$", ["$7$", "$4$", "$6$"], r`Candidates: $g(-2)=0$, $g(-1)=-1$, $g(3)=7$, $g(5)=5$, $g(8)=8$. The maximum is at an endpoint.`, f),
    mc("medium", FG + r`What is the absolute minimum value of $g$ on $[-2,8]$?`, "$-1$", ["$0$", "$-2$", "$5$"], r`$g(-1)=-1$ is the least candidate value.`, f),
    mc("medium", FG + r`What is $g(3)$?`, "$7$", ["$6$", "$8$", "$0$"], r`$g(2)=6$, then the triangle above the axis on $[2,3]$ adds 1.`, f),
    mc("medium", r`Let $h(x)=${I(0, "x", r`\left(t^{2}-6t+5\right)`, "t")}$. At what value of $x$ does $h$ have a relative maximum?`, "$x=1$", ["$x=5$", "$x=3$", "$x=0$"], r`$h'(x)=(x-1)(x-5)$ changes from positive to negative at $x=1$.`),
    mc("hard", FG + r`Which is an equation of the line tangent to the graph of $g$ at $x=2$?`, "$y-6=2(x-2)$", ["$y-2=6(x-2)$", "$y-6=-2(x-2)$", "$y=2x$"], r`$g(2)=6$ and $g'(2)=f(2)=2$.`, f),
    mc("hard", FG + r`Which is a correct justification that $g$ has a relative minimum at $x=5$?`, r`$g'=f$ changes from negative to positive at $x=5$.`, [r`$f(5)=0$.`, r`$g(5)=5$ is less than $g(3)=7$.`, r`$f$ is increasing at $x=5$.`], r`The sign change of $g'=f$ is the evidence. $f$ increasing concerns concavity.`, f),
    mc("hard", r`Let $h(x)=${I(0, "x", r`\left(t^{2}-6t+5\right)`, "t")}$. At what value of $x$ does the graph of $h$ have a point of inflection?`, "$x=3$", ["$x=1$", "$x=5$", "$x=0$"], r`$h''(x)=2x-6$ changes sign at $x=3$.`),
    mc("hard", r`Let $h(x)=${I(0, "x", r`\dfrac{t-3}{t^{2}+4}`, "t")}$. Then $h$ has`, "a relative minimum at $x=3$", ["a relative maximum at $x=3$", "a relative minimum at $x=0$", "no relative extrema"], r`$h'(x)=\dfrac{x-3}{x^2+4}$ changes from negative to positive at $x=3$.`),
    mc("hard", FG + r`Let $k(x)=${I(4, "x", "f(t)", "t")}$. How does $k$ compare with $g$?`, "$k(x)=g(x)-g(4)$, so the two graphs differ by a constant and have the same critical points.", ["$k(x)=g(x-4)$, a horizontal shift.", "$k'(x)=f(x)-f(4)$.", "$k$ and $g$ have different points of inflection."], r`Changing the lower limit subtracts a constant; derivatives are unchanged.`, f),
    mc("hard", r`Let $F(x)=${I(0, "x^{2}", r`\dfrac{1}{1+t}`, "t")}$. Then $F$ has`, "a relative minimum at $x=0$", ["a relative maximum at $x=0$", "no critical points", "a relative minimum at $x=1$"], r`$F'(x)=\dfrac{2x}{1+x^2}$ changes from negative to positive at $x=0$.`),
    num("hard", FG + r`Find $g(5)$.`, 5, 0, r`$g(4)=6$, and on $[4,5]$ the region below the axis is a triangle of area 1.`, f),
  ];
}

// ── 6.6 Properties of Definite Integrals ───────────────
function g66() {
  const A = r`Given $${I(0, 6, "f(x)")}=11$ and $${I(0, 2, "f(x)")}=4$, `;
  const B = r`Given $${I(2, 7, "f(x)")}=5$ and $${I(2, 7, "g(x)")}=-3$, `;
  return [
    mc("easy", r`$${I(3, 3, "f(x)")}=$`, "$0$", ["$f(3)$", "$1$", "It cannot be determined."], r`An interval of zero width has zero area.`),
    mc("easy", r`If $${I(1, 6, "f(x)")}=9$, then $${I(6, 1, "f(x)")}=$`, "$-9$", ["$9$", "$0$", r`$\dfrac{1}{9}$`], r`Reversing the limits changes the sign.`),
    mc("easy", A + r`what is $${I(2, 6, "f(x)")}$?`, "$7$", ["$15$", "$-7$", "$44$"], r`$11-4$.`),
    mc("easy", B + r`what is $${I(2, 7, r`\big[f(x)+g(x)\big]`)}$?`, "$2$", ["$8$", "$-15$", "$-2$"], r`$5+(-3)$.`),
    mc("medium", r`If $${I(0, 4, "f(x)")}=6$, then $${I(0, 4, r`\big[2f(x)+3\big]`)}=$`, "$24$", ["$15$", "$12$", "$18$"], r`$2(6)+3(4)$. The option 15 forgets to integrate the constant over a width of 4.`),
    mc("medium", B + r`what is $${I(2, 7, r`\big[3f(x)-2g(x)\big]`)}$?`, "$21$", ["$9$", "$15$", "$-21$"], r`$3(5)-2(-3)$.`),
    mc("medium", B + r`what is $${I(7, 2, r`\big[3f(x)-2g(x)\big]`)}$?`, "$-21$", ["$21$", "$-9$", "$9$"], r`The value with limits 2 to 7 is 21; reversing changes the sign.`),
    mc("medium", r`If $${I(1, 9, "f(x)")}=12$ and $${I(4, 9, "f(x)")}=17$, then $${I(1, 4, "f(x)")}=$`, "$-5$", ["$5$", "$29$", "$-29$"], r`$12-17$.`),
    mc("medium", r`Evaluate $${I(-2, 2, r`\left(x^{3}+7\right)`)}$.`, "$28$", ["$0$", "$14$", "$7$"], r`$x^3$ is odd and integrates to 0; the constant gives $7\times4$.`),
    mc("medium", r`If $${I(0, 6, "f(x)")}=5$, then $${I(0, 6, r`\big[f(x)+x\big]`)}=$`, "$23$", ["$11$", "$41$", "$8$"], r`$${I(0, 6, "x")}=18$ (a triangle).`),
    mc("hard", r`Evaluate $${I(-3, 3, r`\left(x^{3}+2\sin x+5\right)`)}$.`, "$30$", ["$0$", "$15$", "$5$"], r`$x^3$ and $\sin x$ are odd; the constant contributes $5\times6$.`),
    mc("hard", r`A continuous function $f$ satisfies $${I(-1, 3, "f(x)")}=8$ and $${I(3, 7, "f(x)")}=-2$. What is $${I(7, -1, "f(x)")}$?`, "$-6$", ["$6$", "$10$", "$-10$"], r`$${I(-1, 7, "f(x)")}=8-2=6$, and reversing gives $-6$.`),
    mc("hard", r`An even function $f$ has $${I(0, 5, "f(x)")}=12$ and $${I(0, 2, "f(x)")}=4$. What is $${I(-5, -2, "f(x)")}$?`, "$8$", ["$-8$", "$16$", "$4$"], r`By symmetry it equals $${I(2, 5, "f(x)")}=12-4$.`),
    mc("hard", r`If $f$ is an odd function and $${I(0, 3, "f(x)")}=5$, then $${I(-3, 3, r`\big[f(x)+2\big]`)}=$`, "$12$", ["$22$", "$10$", "$2$"], r`The odd part integrates to 0 over $[-3,3]$; the constant gives $2\times6$.`),
    mc("hard", r`Which statement is true for all continuous functions $f$ and $g$?`, r`$${I("a", "b", r`\big[f(x)-g(x)\big]`)}=${I("a", "b", "f(x)")}-${I("a", "b", "g(x)")}$`, [r`$${I("a", "b", "f(x)\\,g(x)")}=${I("a", "b", "f(x)")}\cdot${I("a", "b", "g(x)")}$`, r`$${I("a", "b", r`\big[f(x)\big]^{2}`)}=\left(${I("a", "b", "f(x)")}\right)^{2}$`, r`$${I("a", "b", r`\dfrac{f(x)}{g(x)}`)}=\dfrac{${I("a", "b", "f(x)")}}{${I("a", "b", "g(x)")}}$`], r`Integration is linear. There is no product, power or quotient rule.`),
    num("hard", r`If $${I(1, 6, "f(x)")}=8$ and $${I(1, 6, "g(x)")}=3$, find $${I(1, 6, r`\big[2f(x)-g(x)+1\big]`)}$.`, 18, 0, r`$2(8)-3+1(5)$.`),
  ];
}

// ── 6.7 FTC Part 2 ───────────────
function g67() {
  const c = { calc: true };
  return [
    mc("easy", r`If $F$ is an antiderivative of the continuous function $f$, then $${I("a", "b", "f(x)")}=$`, "$F(b)-F(a)$", ["$F(a)-F(b)$", "$f(b)-f(a)$", "$F(b)+F(a)$"], r`The Fundamental Theorem of Calculus, Part 2.`),
    mc("easy", r`Evaluate $${I(1, 2, r`\left(6x^{2}-2x\right)`)}$.`, "$11$", ["$13$", "$12$", "$10$"], r`$\big[2x^3-x^2\big]_1^2=12-1$.`),
    mc("easy", r`Evaluate $${I(0, r`\pi/6`, r`\cos x`)}$.`, r`$\dfrac{1}{2}$`, [r`$\dfrac{\sqrt3}{2}$`, r`$-\dfrac{1}{2}$`, r`$\dfrac{\pi}{6}$`], r`$\sin\tfrac\pi6-\sin0$.`),
    mc("easy", r`Evaluate $${I(1, "e^{2}", r`\dfrac{1}{x}`)}$.`, "$2$", ["$e^{2}-1$", "$1$", "$e^{2}$"], r`$\ln e^2-\ln1$.`),
    num("easy", r`Evaluate $${I(0, 2, r`\left(x^{3}+3\right)`)}$.`, 10, 0, r`$\big[\tfrac{x^4}{4}+3x\big]_0^2=4+6$.`),
    mc("medium", r`Evaluate $${I(0, 9, r`\sqrt{x}`)}$.`, "$18$", ["$27$", "$6$", "$9$"], r`$\big[\tfrac23x^{3/2}\big]_0^9=\tfrac23(27)$.`),
    mc("medium", r`Evaluate $${I(0, r`\ln3`, "e^{x}")}$.`, "$2$", ["$3$", "$1$", r`$\ln3$`], r`$e^{\ln3}-e^0$. The lower limit contributes $e^0=1$, not 0.`),
    mc("medium", r`Evaluate $${I(0, r`\pi/3`, r`\sin x`)}$.`, r`$\dfrac{1}{2}$`, [r`$-\dfrac{1}{2}$`, r`$\dfrac{\sqrt3}{2}$`, r`$\dfrac{3}{2}$`], r`$\big[-\cos x\big]_0^{\pi/3}=-\tfrac12+1$.`),
    mc("medium", r`A differentiable function $f$ has $f(1)=4$ and $${I(1, 5, "f'(x)")}=7$. What is $f(5)$?`, "$11$", ["$7$", "$3$", "$-3$"], r`$f(5)=f(1)+${I(1, 5, "f'(x)")}$. The integral alone is the change, not the value.`),
    mc("medium", r`A particle has velocity $v(t)=6t^{2}-2$ and position $x(0)=3$. What is $x(2)$?`, "$15$", ["$12$", "$19$", "$25$"], r`$3+\big[2t^3-2t\big]_0^2=3+12$.`),
    mc("medium", r`If $R(t)$ is the rate, in people per hour, at which people enter a stadium at time $t$ hours, then $${I(1, 3, "R(t)", "t")}$ is`, "the number of people who entered the stadium between $t=1$ and $t=3$ hours", ["the number of people in the stadium at $t=3$ hours", "the average rate at which people entered", "the change in the rate of entry between $t=1$ and $t=3$"], r`The integral of a rate is the net change in the quantity over the interval.`),
    mc("hard", r`A function $f$ satisfies $f(0)=2$ and $f'(x)=\sqrt{1+x^{4}}$. What is $f(1)$?`, "$3.089$", ["$1.089$", "$3.414$", "$3.000$"], r`$2+${I(0, 1, r`\sqrt{1+x^{4}}`)}=2+1.089$. The option 1.089 omits the starting value.`, c),
    mc("hard", r`Evaluate $${I(0, 5, "|x-2|")}$.`, r`$\dfrac{13}{2}$`, [r`$\dfrac{5}{2}$`, "$5$", r`$\dfrac{25}{2}$`], r`Split at $x=2$: $2+\tfrac92$. The option $\tfrac52$ integrates $x-2$ without the absolute value.`),
    mc("hard", r`A tank holds 12 litres at $t=0$, and water enters at $E(t)=10e^{-0.1t}$ litres per minute. How much water is in the tank at $t=10$?`, "$75.212$ litres", ["$63.212$ litres", "$15.679$ litres", "$112.000$ litres"], r`$12+${I(0, 10, "10e^{-0.1t}", "t")}=12+63.212$.`, c),
    mc("hard", r`Why is $${I(-1, 1, r`\dfrac{1}{x^{2}}`)}=\left[-\dfrac{1}{x}\right]_{-1}^{1}=-2$ incorrect?`, r`The integrand is not continuous on $[-1,1]$, so the Fundamental Theorem does not apply.`, [r`The antiderivative of $\dfrac{1}{x^{2}}$ is $\dfrac{1}{x}$.`, r`The limits were substituted in the wrong order.`, r`The correct value is $2$.`], r`$\tfrac{1}{x^2}$ is unbounded at $x=0$; a positive function cannot have integral $-2$.`),
    mc("hard", r`Let $f(x)=\begin{cases}3x^{2},&x\le1\\4-x,&x\gt1\end{cases}$. What is $${I(0, 3, "f(x)")}$?`, "$5$", ["$1$", "$4$", "$9$"], r`$${I(0, 1, "3x^{2}")}+${I(1, 3, "(4-x)")}=1+4$.`),
    num("hard", r`A function has $g(0)=1$ and $g'(x)=\cos\left(x^{2}\right)$. Find $g(1)$ to three decimal places.`, 1.905, 0.001, r`$1+${I(0, 1, r`\cos\left(x^{2}\right)`)}=1+0.905$.`, c),
  ];
}

// ── 6.8 Antiderivatives ───────────────
function g68() {
  return [
    mc("easy", r`$${J(r`\left(4x^{3}-6x+2\right)`)}=$`, r`$x^{4}-3x^{2}+2x+C$`, [r`$12x^{2}-6+C$`, r`$x^{4}-6x^{2}+2x+C$`, r`$4x^{4}-3x^{2}+2x+C$`], r`Raise each power by one and divide by the new power.`),
    mc("easy", r`$${J(r`\dfrac{1}{x}`)}=$`, r`$\ln|x|+C$`, [r`$-\dfrac{1}{x^{2}}+C$`, r`$x^{0}+C$`, r`$\dfrac{1}{x^{2}}+C$`], r`The one power the power rule cannot integrate.`),
    mc("easy", r`$${J(r`\sin x`)}=$`, r`$-\cos x+C$`, [r`$\cos x+C$`, r`$-\sin x+C$`, r`$\sin x+C$`], r`The derivative of $\cos x$ is $-\sin x$.`),
    mc("easy", r`$${J(r`\sec^{2}x`)}=$`, r`$\tan x+C$`, [r`$\sec x\tan x+C$`, r`$\dfrac{\sec^{3}x}{3}+C$`, r`$2\sec x+C$`], r`The derivative of $\tan x$ is $\sec^2x$.`),
    mc("medium", r`$${J(r`\dfrac{5}{x^{3}}`)}=$`, r`$-\dfrac{5}{2x^{2}}+C$`, [r`$-\dfrac{15}{x^{4}}+C$`, r`$\dfrac{5}{4x^{4}}+C$`, r`$5\ln\left|x^{3}\right|+C$`], r`$5x^{-3}$ integrates to $5\cdot\dfrac{x^{-2}}{-2}$.`),
    mc("medium", r`$${J(r`\left(x^{3}-2\sqrt{x}+\dfrac{4}{x}\right)`)}=$`, r`$\dfrac{x^{4}}{4}-\dfrac{4}{3}x^{3/2}+4\ln|x|+C$`, [r`$\dfrac{x^{4}}{4}-3x^{3/2}+4\ln|x|+C$`, r`$\dfrac{x^{4}}{4}-\dfrac{4}{3}x^{3/2}-\dfrac{4}{x^{2}}+C$`, r`$3x^{2}-\dfrac{1}{\sqrt{x}}-\dfrac{4}{x^{2}}+C$`], r`$-2x^{1/2}$ integrates to $-2\cdot\tfrac{x^{3/2}}{3/2}=-\tfrac43x^{3/2}$.`),
    mc("medium", r`$${J(r`\left(x^{2}+1\right)^{2}`)}=$`, r`$\dfrac{x^{5}}{5}+\dfrac{2x^{3}}{3}+x+C$`, [r`$\dfrac{\left(x^{2}+1\right)^{3}}{3}+C$`, r`$\dfrac{\left(x^{2}+1\right)^{3}}{6x}+C$`, r`$\dfrac{x^{5}}{5}+x+C$`], r`Expand to $x^4+2x^2+1$ first. The power rule alone does not apply to a composite.`),
    mc("medium", r`If $f'(x)=9x^{2}+2$ and $f(1)=4$, then $f(x)=$`, r`$3x^{3}+2x-1$`, [r`$3x^{3}+2x+4$`, r`$3x^{3}+2x$`, r`$18x+4$`], r`$f(x)=3x^3+2x+C$ and $3+2+C=4$.`),
    mc("medium", r`$${J(r`\left(3e^{x}-2\sin x\right)`)}=$`, r`$3e^{x}+2\cos x+C$`, [r`$3e^{x}-2\cos x+C$`, r`$3xe^{x-1}+2\cos x+C$`, r`$3e^{x}-2\sin x+C$`], r`$-2\sin x$ integrates to $+2\cos x$.`),
    mc("medium", r`$${J(r`\dfrac{x^{3}-4x+2}{x}`)}=$`, r`$\dfrac{x^{3}}{3}-4x+2\ln|x|+C$`, [r`$\dfrac{\frac{x^{4}}{4}-2x^{2}+2x}{\frac{x^{2}}{2}}+C$`, r`$\dfrac{x^{3}}{3}-4x-\dfrac{2}{x^{2}}+C$`, r`$x^{2}-4+\dfrac{2}{x}+C$`], r`Divide first: $x^2-4+\tfrac2x$.`),
    mc("hard", r`A particle has acceleration $a(t)=6t-4$, with $v(0)=3$ and $x(0)=2$. What is its position function?`, r`$x(t)=t^{3}-2t^{2}+3t+2$`, [r`$x(t)=t^{3}-2t^{2}+2$`, r`$x(t)=3t^{2}-4t+3$`, r`$x(t)=t^{3}-2t^{2}+3t$`], r`$v=3t^2-4t+3$, then $x=t^3-2t^2+3t+2$.`),
    mc("hard", r`If $f'(x)=\dfrac{4}{1+x^{2}}$ and $f(1)=0$, then $f(x)=$`, r`$4\arctan x-\pi$`, [r`$4\arctan x$`, r`$4\arctan x+\pi$`, r`$2\ln\left(1+x^{2}\right)-2\ln2$`], r`$4\arctan1=\pi$, so $C=-\pi$.`),
    mc("hard", r`If $f''(x)=12x$, $f'(0)=-1$ and $f(1)=4$, then $f(x)=$`, r`$2x^{3}-x+3$`, [r`$2x^{3}-x+4$`, r`$2x^{3}+3$`, r`$6x^{2}-1$`], r`$f'(x)=6x^2-1$, then $f(x)=2x^3-x+C$ with $1+C=4$.`),
    mc("hard", r`$${J(r`\dfrac{1}{\sqrt{1-x^{2}}}`)}=$`, r`$\arcsin x+C$`, [r`$\arctan x+C$`, r`$2\sqrt{1-x^{2}}+C$`, r`$\ln\sqrt{1-x^{2}}+C$`], r`The derivative of $\arcsin x$.`),
    mc("hard", r`The velocity of a particle is $v(t)=6\sin t+4t$ and $x(0)=2$. What is $x(t)$?`, r`$-6\cos t+2t^{2}+8$`, [r`$6\cos t+2t^{2}-4$`, r`$-6\cos t+2t^{2}+2$`, r`$6\cos t+4$`], r`$-6\cos t+2t^2+C$ with $-6+C=2$.`),
    num("hard", r`If $f'(x)=3x^{2}+2x$ and $f(0)=4$, find $f(2)$.`, 16, 0, r`$f(x)=x^3+x^2+4$, so $f(2)=8+4+4$.`),
  ];
}

// ── 6.9 Substitution ───────────────
function g69() {
  return [
    mc("easy", r`$${J(r`2x\left(x^{2}+1\right)^{5}`)}=$`, r`$\dfrac{\left(x^{2}+1\right)^{6}}{6}+C$`, [r`$\dfrac{x^{2}\left(x^{2}+1\right)^{6}}{6}+C$`, r`$\left(x^{2}+1\right)^{6}+C$`, r`$10x\left(x^{2}+1\right)^{4}+C$`], r`$u=x^2+1$, $du=2x\,dx$: $\int u^5\,du$.`),
    mc("easy", r`$${J("e^{3x}")}=$`, r`$\dfrac{1}{3}e^{3x}+C$`, [r`$3e^{3x}+C$`, r`$e^{3x}+C$`, r`$\dfrac{e^{3x+1}}{3x+1}+C$`], r`Differentiating $\tfrac13e^{3x}$ returns $e^{3x}$.`),
    mc("easy", r`$${J(r`\cos(5x)`)}=$`, r`$\dfrac{1}{5}\sin(5x)+C$`, [r`$5\sin(5x)+C$`, r`$\sin(5x)+C$`, r`$-\dfrac{1}{5}\sin(5x)+C$`], r`$u=5x$, $dx=\tfrac15du$.`),
    mc("medium", r`$${J(r`x\cos\left(x^{2}\right)`)}=$`, r`$\dfrac{1}{2}\sin\left(x^{2}\right)+C$`, [r`$\sin\left(x^{2}\right)+C$`, r`$2\sin\left(x^{2}\right)+C$`, r`$\dfrac{x^{2}}{2}\sin\left(x^{2}\right)+C$`], r`$u=x^2$, $x\,dx=\tfrac12du$.`),
    mc("medium", r`$${J(r`\dfrac{x}{x^{2}+4}`)}=$`, r`$\dfrac{1}{2}\ln\left(x^{2}+4\right)+C$`, [r`$\ln\left(x^{2}+4\right)+C$`, r`$\dfrac{1}{2}\arctan\!\left(\dfrac{x}{2}\right)+C$`, r`$2\ln\left(x^{2}+4\right)+C$`], r`$u=x^2+4$, $x\,dx=\tfrac12du$.`),
    mc("medium", r`$${J(r`\tan x`)}=$`, r`$-\ln|\cos x|+C$`, [r`$\ln|\cos x|+C$`, r`$\sec^{2}x+C$`, r`$\ln|\sin x|+C$`], r`$\dfrac{\sin x}{\cos x}$ with $u=\cos x$, $du=-\sin x\,dx$.`),
    mc("medium", r`Evaluate $${I(0, 1, r`x\left(x^{2}+2\right)^{2}`)}$.`, r`$\dfrac{19}{6}$`, [r`$\dfrac{1}{6}$`, r`$\dfrac{19}{3}$`, "$9$"], r`$u=x^2+2$ from 2 to 3: $\tfrac12\big[\tfrac{u^3}{3}\big]_2^3$. The option $\tfrac16$ keeps the old limits 0 to 1.`),
    mc("medium", r`Evaluate $${I(1, "e", r`\dfrac{(\ln x)^{2}}{x}`)}$.`, r`$\dfrac{1}{3}$`, ["$1$", r`$\dfrac{1}{2}$`, "$e$"], r`$u=\ln x$ from 0 to 1: $\big[\tfrac{u^3}{3}\big]_0^1$.`),
    mc("medium", r`Evaluate $${I(0, 2, "x\\,e^{x^{2}}")}$.`, r`$\dfrac{1}{2}\left(e^{4}-1\right)$`, [r`$e^{4}-1$`, r`$\dfrac{e^{4}}{2}$`, r`$\dfrac{1}{2}\left(e^{2}-1\right)$`], r`$u=x^2$, $x\,dx=\tfrac12du$: $\tfrac12\big[e^u\big]_0^{4}$.`),
    mc("medium", r`Evaluate $${I(0, r`\pi/2`, r`\cos x\sin^{3}x`)}$.`, r`$\dfrac{1}{4}$`, [r`$-\dfrac{1}{4}$`, "$1$", r`$\dfrac{3}{4}$`], r`$u=\sin x$ from 0 to 1 with $du=\cos x\,dx$: $\int_0^1u^3\,du$.`),
    mc("hard", r`If $${I(0, 8, "f(x)")}=12$, then $${I(0, 2, "f(4x)")}=$`, "$3$", ["$48$", "$12$", "$6$"], r`$u=4x$, $dx=\tfrac14du$, limits 0 to 8.`),
    mc("hard", r`If $${I(0, 16, "f(x)")}=6$, then $${I(0, 4, r`x\,f\left(x^{2}\right)`)}=$`, "$3$", ["$6$", "$12$", r`$\dfrac{3}{2}$`], r`$u=x^2$, $x\,dx=\tfrac12du$, limits 0 to 16.`),
    mc("hard", r`$${J(r`x\sqrt{x+1}`)}=$`, r`$\dfrac{2}{5}(x+1)^{5/2}-\dfrac{2}{3}(x+1)^{3/2}+C$`, [r`$\dfrac{x^{2}}{2}\cdot\dfrac{2}{3}(x+1)^{3/2}+C$`, r`$\dfrac{2}{5}(x+1)^{5/2}+C$`, r`$\dfrac{2}{3}x(x+1)^{3/2}+C$`], r`$u=x+1$, $x=u-1$: $\int\left(u^{3/2}-u^{1/2}\right)du$.`),
    mc("hard", r`$${J(r`\dfrac{(\ln x)^{2}}{x}`)}=$`, r`$\dfrac{(\ln x)^{3}}{3}+C$`, [r`$\dfrac{2\ln x}{x}+C$`, r`$(\ln x)^{3}+C$`, r`$\dfrac{(\ln x)^{3}}{3x}+C$`], r`$u=\ln x$, $du=\tfrac1x\,dx$.`),
    mc("hard", r`Using the substitution $u=x^{3}+1$, the integral $${I(0, 2, r`x^{2}\sqrt{x^{3}+1}`)}$ becomes`, r`$\dfrac{1}{3}${I(1, 9, r`\sqrt{u}`, "u")}$`, [r`$\dfrac{1}{3}${I(0, 2, r`\sqrt{u}`, "u")}$`, r`$${I(1, 9, r`\sqrt{u}`, "u")}$`, r`$3${I(1, 9, r`\sqrt{u}`, "u")}$`], r`$x^2\,dx=\tfrac13du$, and the limits become $u=1$ and $u=9$.`),
    num("hard", r`Evaluate $${I(0, 2, r`\dfrac{2x}{x^{2}+1}`)}$ to three decimal places.`, 1.609, 0.001, r`$\big[\ln(x^2+1)\big]_0^2=\ln5$.`, { calc: true }),
  ];
}

// ── 6.10 Division and Completing the Square ───────────────
function g610() {
  return [
    mc("easy", r`$${J(r`\dfrac{1}{1+x^{2}}`)}=$`, r`$\arctan x+C$`, [r`$\ln\left(1+x^{2}\right)+C$`, r`$\arcsin x+C$`, r`$-\dfrac{1}{x}+C$`], r`A constant over $1+x^2$ is the arctangent form.`),
    mc("easy", r`To integrate $\dfrac{x^{2}+3x+5}{x+1}$, the first step is to`, "divide the numerator by the denominator", ["complete the square", "substitute $u=x^{2}+3x+5$", "integrate the numerator and the denominator separately"], r`The numerator's degree is higher, so divide.`),
    mc("easy", r`$${J(r`\dfrac{2x}{x^{2}+25}`)}=$`, r`$\ln\left(x^{2}+25\right)+C$`, [r`$\dfrac{2}{5}\arctan\!\left(\dfrac{x}{5}\right)+C$`, r`$2\ln\left(x^{2}+25\right)+C$`, r`$\dfrac{1}{x^{2}+25}+C$`], r`The numerator is the derivative of the denominator.`),
    mc("medium", r`$${J(r`\dfrac{x^{2}+3x+5}{x+1}`)}=$`, r`$\dfrac{x^{2}}{2}+2x+3\ln|x+1|+C$`, [r`$\dfrac{x^{2}}{2}+2x+3+C$`, r`$\dfrac{x^{2}}{2}+3x+5\ln|x+1|+C$`, r`$x+2+3\ln|x+1|+C$`], r`The quotient is $x+2+\dfrac{3}{x+1}$.`),
    mc("medium", r`$${J(r`\dfrac{1}{x^{2}+25}`)}=$`, r`$\dfrac{1}{5}\arctan\!\left(\dfrac{x}{5}\right)+C$`, [r`$\arctan\!\left(\dfrac{x}{5}\right)+C$`, r`$\dfrac{1}{25}\arctan\!\left(\dfrac{x}{25}\right)+C$`, r`$\ln\left(x^{2}+25\right)+C$`], r`$\int\frac{du}{a^2+u^2}=\tfrac1a\arctan\tfrac ua$ with $a=5$.`),
    mc("medium", r`$${J(r`\dfrac{1}{x^{2}+4x+13}`)}=$`, r`$\dfrac{1}{3}\arctan\!\left(\dfrac{x+2}{3}\right)+C$`, [r`$\arctan\!\left(\dfrac{x+2}{3}\right)+C$`, r`$\ln\left(x^{2}+4x+13\right)+C$`, r`$\dfrac{1}{9}\arctan\!\left(\dfrac{x+2}{9}\right)+C$`], r`$x^2+4x+13=(x+2)^2+9$.`),
    mc("medium", r`Evaluate $${I(0, 2, r`\dfrac{1}{4+x^{2}}`)}$.`, r`$\dfrac{\pi}{8}$`, [r`$\dfrac{\pi}{4}$`, r`$\dfrac{\pi}{2}$`, r`$\dfrac{1}{2}\ln2$`], r`$\tfrac12\big(\arctan1-\arctan0\big)$. The option $\tfrac\pi4$ omits the factor $\tfrac12$.`),
    mc("medium", r`$${J(r`\dfrac{x^{3}}{x^{2}+1}`)}=$`, r`$\dfrac{x^{2}}{2}-\dfrac{1}{2}\ln\left(x^{2}+1\right)+C$`, [r`$\dfrac{x^{2}}{2}+\dfrac{1}{2}\ln\left(x^{2}+1\right)+C$`, r`$\dfrac{x^{2}}{2}-\arctan x+C$`, r`$\dfrac{x^{4}}{4}\arctan x+C$`], r`$\dfrac{x^3}{x^2+1}=x-\dfrac{x}{x^2+1}$.`),
    mc("medium", r`$${J(r`\dfrac{x^{2}+2x}{x+1}`)}=$`, r`$\dfrac{x^{2}}{2}+x-\ln|x+1|+C$`, [r`$\dfrac{x^{2}}{2}+x+\ln|x+1|+C$`, r`$\dfrac{x^{2}}{2}+2x-\ln|x+1|+C$`, r`$x+1-\ln|x+1|+C$`], r`$x^2+2x=(x+1)^2-1$, so the quotient is $x+1-\dfrac{1}{x+1}$.`),
    mc("hard", r`$${J(r`\dfrac{2x+5}{x^{2}+4x+13}`)}=$`, r`$\ln\left(x^{2}+4x+13\right)+\dfrac{1}{3}\arctan\!\left(\dfrac{x+2}{3}\right)+C$`, [r`$\ln\left(x^{2}+4x+13\right)+C$`, r`$\dfrac{5}{3}\arctan\!\left(\dfrac{x+2}{3}\right)+C$`, r`$\ln\left(x^{2}+4x+13\right)+\arctan\!\left(\dfrac{x+2}{3}\right)+C$`], r`Write $2x+5=(2x+4)+1$: a logarithm plus an arctangent.`),
    mc("hard", r`$${J(r`\dfrac{1}{x^{2}-6x+10}`)}=$`, r`$\arctan(x-3)+C$`, [r`$\ln\left(x^{2}-6x+10\right)+C$`, r`$\dfrac{1}{3}\arctan\!\left(\dfrac{x-3}{3}\right)+C$`, r`$\arctan(x+3)+C$`], r`$x^2-6x+10=(x-3)^2+1$.`),
    mc("hard", r`$${J(r`\dfrac{1}{\sqrt{6x-x^{2}}}`)}=$`, r`$\arcsin\!\left(\dfrac{x-3}{3}\right)+C$`, [r`$\dfrac{1}{3}\arcsin\!\left(\dfrac{x-3}{3}\right)+C$`, r`$\arctan\!\left(\dfrac{x-3}{3}\right)+C$`, r`$2\sqrt{6x-x^{2}}+C$`], r`$6x-x^2=9-(x-3)^2$. The arcsine form has no factor $\tfrac1a$.`),
    mc("hard", r`Evaluate $${I(1, 3, r`\dfrac{1}{x^{2}-2x+5}`)}$.`, r`$\dfrac{\pi}{8}$`, [r`$\dfrac{\pi}{4}$`, r`$\dfrac{\pi}{2}$`, r`$\dfrac{1}{2}$`], r`$\tfrac12\big[\arctan\tfrac{x-1}{2}\big]_{1}^{3}=\tfrac12\cdot\tfrac\pi4$.`),
    mc("hard", r`Evaluate $${I(0, 1, r`\dfrac{x^{2}}{x^{2}+1}`)}$.`, r`$1-\dfrac{\pi}{4}$`, [r`$1+\dfrac{\pi}{4}$`, r`$1-\dfrac{1}{2}\ln2$`, r`$\dfrac{1}{3}$`], r`$\dfrac{x^2}{x^2+1}=1-\dfrac{1}{x^2+1}$, so the integral is $\big[x-\arctan x\big]_0^1$.`),
    num("hard", r`Evaluate $${I(0, 1, r`\dfrac{4}{1+x^{2}}`)}$ to three decimal places.`, 3.142, 0.001, r`$4\big(\arctan1-\arctan0\big)=\pi$.`, { calc: true }),
  ];
}

// ── 6.11 Choosing a Method ───────────────
function g611() {
  return [
    mc("easy", r`Which method is best for $${J(r`\dfrac{\cos x}{1+\sin x}`)}$?`, "substitution with $u=1+\\sin x$", ["the arctangent formula", "long division", "completing the square"], r`The numerator is the derivative of the denominator.`),
    mc("easy", r`Which method is best for $${J(r`\dfrac{x^{2}+3}{\sqrt{x}}`)}$?`, r`divide each term by $\sqrt{x}$ and use the power rule`, ["substitution with $u=x^{2}+3$", "the arctangent formula", "completing the square"], r`Algebra reduces it to $x^{3/2}+3x^{-1/2}$.`),
    mc("easy", r`$${J(r`\cos x\,e^{\sin x}`)}=$`, r`$e^{\sin x}+C$`, [r`$\sin x\,e^{\sin x}+C$`, r`$e^{\cos x}+C$`, r`$-e^{\sin x}+C$`], r`$u=\sin x$, $du=\cos x\,dx$.`),
    mc("medium", r`$${J(r`\dfrac{(x+1)^{2}}{x}`)}=$`, r`$\dfrac{x^{2}}{2}+2x+\ln|x|+C$`, [r`$\dfrac{(x+1)^{3}}{3x}+C$`, r`$\dfrac{x^{2}}{2}+2x+C$`, r`$\dfrac{(x+1)^{3}}{3}\ln|x|+C$`], r`$\dfrac{x^2+2x+1}{x}=x+2+\dfrac1x$.`),
    mc("medium", r`$${J(r`\dfrac{x^{2}}{1+x^{2}}`)}=$`, r`$x-\arctan x+C$`, [r`$x+\arctan x+C$`, r`$\dfrac{x^{3}}{3}\arctan x+C$`, r`$\dfrac{1}{2}\ln\left(1+x^{2}\right)+C$`], r`$\dfrac{x^2}{1+x^2}=1-\dfrac{1}{1+x^2}$.`),
    mc("medium", r`$${J(r`\dfrac{e^{x}}{1+e^{x}}`)}=$`, r`$\ln\left(1+e^{x}\right)+C$`, [r`$\arctan\left(e^{x}\right)+C$`, r`$\dfrac{e^{x}}{x+e^{x}}+C$`, r`$e^{x}\ln\left(1+e^{x}\right)+C$`], r`The numerator is the derivative of the denominator.`),
    mc("medium", r`$${J(r`\dfrac{e^{x}}{1+e^{2x}}`)}=$`, r`$\arctan\left(e^{x}\right)+C$`, [r`$\ln\left(1+e^{2x}\right)+C$`, r`$\dfrac{1}{2}\ln\left(1+e^{2x}\right)+C$`, r`$\arctan\left(e^{2x}\right)+C$`], r`$u=e^x$: $\int\frac{du}{1+u^2}$.`),
    mc("medium", r`$${J(r`\tan^{2}x`)}=$`, r`$\tan x-x+C$`, [r`$\dfrac{\tan^{3}x}{3}+C$`, r`$\sec^{2}x+C$`, r`$\tan x+x+C$`], r`$\tan^2x=\sec^2x-1$.`),
    mc("medium", r`$${J(r`\dfrac{x}{\sqrt{1-x^{2}}}`)}=$`, r`$-\sqrt{1-x^{2}}+C$`, [r`$\arcsin x+C$`, r`$\sqrt{1-x^{2}}+C$`, r`$-\dfrac{1}{2}\ln\left(1-x^{2}\right)+C$`], r`$u=1-x^2$, $x\,dx=-\tfrac12du$: $-\tfrac12\cdot2u^{1/2}$.`),
    mc("medium", r`$${J(r`\dfrac{\sec^{2}x}{1+\tan x}`)}=$`, r`$\ln|1+\tan x|+C$`, [r`$\arctan(\tan x)+C$`, r`$\dfrac{\tan x}{x+\ln|\sec x|}+C$`, r`$\sec^{2}x\ln|1+\tan x|+C$`], r`$u=1+\tan x$, $du=\sec^2x\,dx$.`),
    mc("hard", r`$${J(r`\dfrac{x}{1+x^{4}}`)}=$`, r`$\dfrac{1}{2}\arctan\left(x^{2}\right)+C$`, [r`$\dfrac{1}{4}\ln\left(1+x^{4}\right)+C$`, r`$\arctan\left(x^{2}\right)+C$`, r`$\dfrac{1}{2}\arctan x+C$`], r`$u=x^2$, $x\,dx=\tfrac12du$: $\tfrac12\int\frac{du}{1+u^2}$. A logarithm would need $4x^3$ on top.`),
    mc("hard", r`For $x\gt1$, $${J(r`\dfrac{1}{x\ln x}`)}=$`, r`$\ln(\ln x)+C$`, [r`$\dfrac{1}{2}(\ln x)^{2}+C$`, r`$\ln x+C$`, r`$-\dfrac{1}{(\ln x)^{2}}+C$`], r`$u=\ln x$: $\int\frac{du}{u}$.`),
    mc("hard", r`$${J(r`\left(\sqrt{x}+\dfrac{1}{\sqrt{x}}\right)^{2}`)}=$`, r`$\dfrac{x^{2}}{2}+2x+\ln|x|+C$`, [r`$\dfrac{1}{3}\left(\sqrt{x}+\dfrac{1}{\sqrt{x}}\right)^{3}+C$`, r`$\dfrac{x^{2}}{2}+\ln|x|+C$`, r`$\dfrac{x^{2}}{2}+2x-\dfrac{1}{x^{2}}+C$`], r`Expand to $x+2+\dfrac1x$.`),
    mc("hard", r`$${J(r`\dfrac{\sin(2x)}{1+\sin^{2}x}`)}=$`, r`$\ln\left(1+\sin^{2}x\right)+C$`, [r`$\arctan(\sin x)+C$`, r`$-\dfrac{1}{2}\ln\left(1+\sin^{2}x\right)+C$`, r`$2\arctan(\sin x)+C$`], r`$\sin(2x)=2\sin x\cos x$ is the derivative of $1+\sin^2x$.`),
    mc("hard", r`Which of the following integrals equals $\arcsin x+C$?`, r`$${J(r`\dfrac{1}{\sqrt{1-x^{2}}}`)}$`, [r`$${J(r`\dfrac{x}{\sqrt{1-x^{2}}}`)}$`, r`$${J(r`\dfrac{1}{1+x^{2}}`)}$`, r`$${J(r`\dfrac{1}{1-x^{2}}`)}$`], r`The others are $-\sqrt{1-x^2}$, $\arctan x$, and a form outside this course.`),
    num("hard", r`Evaluate $${I(0, 1, r`\dfrac{x^{2}}{1+x^{2}}`)}$ to three decimal places.`, 0.215, 0.001, r`$\big[x-\arctan x\big]_0^1=1-\tfrac\pi4$.`, { calc: true }),
  ];
}

// ── 6.12 Integrals from Graphs and Tables ───────────────
function g612() {
  const f = { fig: figF() }, k = { fig: figK() };
  return [
    mc("easy", FX + r`What is $${I(-2, 2, "f(x)")}$?`, "$6$", ["$8$", "$7$", "$4$"], r`$-1+4+3$: a triangle below the axis, a triangle above it, and a trapezoid.`, f),
    mc("easy", FX + r`What is $${I(3, 5, "f(x)")}$?`, "$-2$", ["$2$", "$-1$", "$0$"], r`Two triangles of area 1 below the axis.`, f),
    mc("easy", KX + r`What is $${I(0, 6, "k(x)")}$?`, r`$\dfrac{9\pi}{2}$`, [r`$9\pi$`, r`$3\pi$`, "$18$"], r`A semicircle of radius 3: $\tfrac12\pi(3)^2$.`, k),
    mc("medium", FX + r`What is $${I(-2, 8, "f(x)")}$?`, "$8$", ["$14$", "$10$", "$6$"], r`$-1+4+4-1-1+1+2$. The option 14 adds the areas without signs.`, f),
    mc("medium", FX + r`What is $${I(5, 3, "f(x)")}$?`, "$2$", ["$-2$", "$1$", "$0$"], r`$${I(3, 5, "f(x)")}=-2$, and reversing the limits changes the sign.`, f),
    mc("medium", FX + r`What is $${I(-2, 8, "|f(x)|")}$?`, "$14$", ["$8$", "$10$", "$12$"], r`$1+4+4+1+1+1+2$.`, f),
    mc("medium", FX + r`What is $${I(3, 5, r`\big[f(x)+3\big]`)}$?`, "$4$", ["$1$", "$6$", "$10$"], r`$${I(3, 5, "f(x)")}=-2$, plus $3\times2$.`, f),
    mc("medium", FX + r`What is $${I(1, 4, "f'(x)")}$?`, "$-6$", ["$3$", "$-2$", "$6$"], r`$f(4)-f(1)=-2-4$. This is the Fundamental Theorem, not an area; the area integral of $f$ on $[1,4]$ is 3.`, f),
    mc("medium", KX + r`What is $${I(0, 10, "k(x)")}$?`, r`$\dfrac{9\pi}{2}-4$`, [r`$\dfrac{9\pi}{2}+4$`, r`$9\pi-4$`, r`$\dfrac{9\pi}{2}-2$`], r`Semicircle $\tfrac{9\pi}{2}$, minus a triangle of area $\tfrac12(4)(2)$.`, k),
    mc("medium", r`Selected values of a differentiable function $h$ are shown. ${tbl("x", [2, 5, 8], "h(x)", [6, 10, 4])} What is $${I(2, 8, "h'(x)")}$?`, "$-2$", ["$45$", "$2$", "$20$"], r`$h(8)-h(2)$, exactly. The value 45 is a trapezoidal estimate of $\int h$.`),
    mc("hard", FX + r`What is $${I(-2, 2, r`\big[3f(x)-1\big]`)}$?`, "$14$", ["$17$", "$18$", "$22$"], r`$3(6)-1(4)$.`, f),
    mc("hard", FX + r`What is $${I(0, 3, "f(2x)")}$?`, "$3$", ["$6$", "$12$", "$7$"], r`$u=2x$ gives $\tfrac12${I(0, 6, "f(u)", "u")}=\tfrac12(6)$.`, f),
    mc("hard", FX + r`What is $${I(1, 6, "f'(x)")}$?`, "$-2$", ["$3$", "$2$", "$-6$"], r`$f(6)-f(1)=2-4$. The option 3 is the integral of $f$, not of $f'$.`, f),
    mc("hard", KX + r`What is $${I(0, 8, r`\big[k(x)+1\big]`)}$?`, r`$\dfrac{9\pi}{2}+6$`, [r`$\dfrac{9\pi}{2}-1$`, r`$\dfrac{9\pi}{2}+10$`, r`$\dfrac{9\pi}{2}-2$`], r`$\left(\tfrac{9\pi}{2}-2\right)+8$.`, k),
    mc("hard", KX + r`Let $G(x)=${I(0, "x", "k(t)", "t")}$. What is the absolute maximum value of $G$ on $[0,10]$?`, r`$\dfrac{9\pi}{2}$`, [r`$\dfrac{9\pi}{2}-4$`, "$3$", r`$9\pi$`], r`$G'=k$ is positive on $(0,6)$ and negative on $(6,10)$, so $G$ is greatest at $x=6$.`, k),
    num("hard", FX + r`Find $${I(-2, 4, "f(x)")}$.`, 6, 0, r`$-1+4+4-1$.`, f),
  ];
}

// ── 6.13 Synthesis ───────────────
function g613() {
  const f = { fig: figF("t") };
  const ET2 = ET + "The tank contains 30 litres at $t=0$. ";
  return [
    mc("easy", ET + r`Which is the best estimate of $E'(7)$?`, "$-2$ litres per minute per minute", ["$-8$ litres per minute per minute", "$-2$ litres per minute", "$2$ litres per minute per minute"], r`$\dfrac{E(9)-E(5)}{9-5}=\dfrac{14-22}{4}$, and the units of $E'$ are those of $E$ per minute.`),
    mc("easy", ET + r`Which is the best estimate of $E'(4)$?`, "$3$", ["$6$", "$2$", "$-3$"], r`$\dfrac{E(5)-E(3)}{5-3}=\dfrac{6}{2}$.`),
    mc("easy", FG + r`What is $g'(4)$?`, "$-2$", ["$6$", "$0$", "$2$"], r`$g'(4)=f(4)$. The value $g(4)$ is 6.`, f),
    mc("medium", ET + r`Which expression is the trapezoidal sum for $${I(0, 12, "E(t)", "t")}$ with the four subintervals indicated?`, r`$\tfrac12(10+16)(3)+\tfrac12(16+22)(2)+\tfrac12(22+14)(4)+\tfrac12(14+8)(3)$`, [r`$\tfrac12(10+16)(3)+\tfrac12(16+22)(3)+\tfrac12(22+14)(3)+\tfrac12(14+8)(3)$`, r`$(3)(10)+(2)(16)+(4)(22)+(3)(14)$`, r`$\tfrac12(10+8)(12)$`], r`Each trapezoid uses its own width: 3, 2, 4, 3.`),
    mc("medium", ET + r`Assuming $E$ is differentiable, which theorem guarantees a time $t$ in $(5,9)$ at which $E'(t)=-2$?`, "the Mean Value Theorem", ["the Intermediate Value Theorem", "the Extreme Value Theorem", "the Fundamental Theorem of Calculus"], r`The target is a value of the derivative, equal to the average rate of change over $[5,9]$.`),
    mc("medium", ET + r`Assuming $E$ is continuous, which theorem guarantees a time $t$ in $(5,12)$ at which $E(t)=10$?`, "the Intermediate Value Theorem", ["the Mean Value Theorem", "the Extreme Value Theorem", "Rolle's Theorem"], r`The target is a value of the function lying between $E(12)=8$ and $E(5)=22$.`),
    mc("medium", ET2 + r`Water leaves the tank at $L(t)=4+\tfrac12t$ litres per minute. Using the trapezoidal estimate $${I(0, 12, "E(t)", "t")}\approx182$, what is the amount of water in the tank at $t=12$?`, "about $128$ litres", ["about $98$ litres", "about $212$ litres", "about $158$ litres"], r`$30+182-${I(0, 12, r`\left(4+\tfrac12t\right)`, "t")}=30+182-84$.`),
    mc("medium", ET + r`Water leaves the tank at $L(t)=4+\tfrac12t$ litres per minute. At $t=9$ the amount of water in the tank is`, "increasing, because $E(9)\\gt L(9)$", ["decreasing, because $E$ is decreasing at $t=9$", "decreasing, because $E(9)\\lt L(9)$", "increasing, because $E(9)\\gt0$"], r`$E(9)=14$ and $L(9)=8.5$. The comparison of the two rates decides it.`),
    mc("medium", FG + r`On which intervals is $g$ both increasing and concave down?`, r`$(1,3)$ and $(6,8)$`, [r`$(-1,1)$`, r`$(3,4)$`, r`$(1,4)$`], r`$f$ must be positive and decreasing.`, f),
    mc("hard", FG + r`What is $${"\\displaystyle\\lim_{x\\to0}\\dfrac{g(x)}{\\sin x}"}$?`, "$2$", ["$0$", "$1$", "does not exist"], r`Both tend to 0; by L'Hôpital's Rule the limit is $\dfrac{g'(0)}{\cos0}=f(0)$.`, f),
    mc("hard", FG + r`If $h(x)=g\left(x^{2}\right)$, what is $h'(2)$?`, "$-8$", ["$-2$", "$-4$", "$8$"], r`$h'(x)=g'(x^2)\cdot2x=f(x^2)\cdot2x$, so $h'(2)=f(4)\cdot4$.`, f),
    mc("hard", FG + r`Which is a complete justification that the absolute maximum of $g$ on $[-2,8]$ is $8$?`, r`$g'=f=0$ at $x=-1$, $x=3$ and $x=5$; comparing $g(-2)=0$, $g(-1)=-1$, $g(3)=7$, $g(5)=5$ and $g(8)=8$, the greatest is $8$.`, [r`$g'=f$ is positive on $(5,8)$.`, r`$f$ has its greatest value, 4, at $x=1$.`, r`$g(3)=7$ and $g(8)=8$.`], r`An absolute extremum on a closed interval needs the candidates test with both endpoints.`, f),
    mc("hard", ET + r`Which statement correctly gives the meaning of $${I(0, 12, "E(t)", "t")}$?`, "the total amount of water, in litres, that entered the tank from $t=0$ to $t=12$ minutes", ["the amount of water, in litres, in the tank at $t=12$ minutes", "the average rate, in litres per minute, at which water entered the tank", "the total change in the rate at which water entered the tank"], r`An integral of a rate is an accumulated amount over the interval, with units of rate × time.`),
    mc("hard", FG + r`Which is an equation of the line tangent to the graph of $g$ at $x=-1$?`, "$y=-1$", ["$y=1$", "$y=-x-2$", "$x=-1$"], r`$g(-1)=-1$ and $g'(-1)=f(-1)=0$.`, f),
    num("hard", ET + r`Find the left Riemann sum approximating $${I(0, 12, "E(t)", "t")}$ with the four subintervals indicated.`, 192, 0, r`$(3)(10)+(2)(16)+(4)(22)+(3)(14)$.`),
  ];
}

export default [
  { code: "6.1", gen: g61 },
  { code: "6.2", gen: g62 },
  { code: "6.3", gen: g63 },
  { code: "6.4", gen: g64 },
  { code: "6.5", gen: g65 },
  { code: "6.6", gen: g66 },
  { code: "6.7", gen: g67 },
  { code: "6.8", gen: g68 },
  { code: "6.9", gen: g69 },
  { code: "6.10", gen: g610 },
  { code: "6.11", gen: g611 },
  { code: "6.12", gen: g612 },
  { code: "6.13", gen: g613 },
];
