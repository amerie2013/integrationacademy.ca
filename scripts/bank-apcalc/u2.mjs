// AP Calculus AB exam prep — Unit 2 (The Derivative): question bank.
// Original questions in exam format; see u1.mjs for the conventions.
import { mc, num, tbl } from "./helpers.mjs";
import { plot, C } from "../apcalc/fig.mjs";

const r = String.raw;
const lim = (to, body, v = "x") => `\\displaystyle\\lim_{${v}\\to ${to}}${body}`;
const D = (body) => `\\dfrac{d}{dx}\\left[${body}\\right]`;
const DNE = "does not exist";

// ── figures ──
// f(x) = 2 + (x−2)/2 − (x−2)²/4 with its tangent at x = 2, which passes through (0,1) and (4,3)
const quad = (x) => 2 + 0.5 * (x - 2) - 0.25 * (x - 2) ** 2;
const figT = () => {
  const g = plot({ w: 400, h: 300, x: [-1, 6], y: [-1, 4], alt: "Graph of f with its tangent line at x = 2" });
  g.curve((x) => 0.5 * x + 1, -0.8, 5.6, { color: C.alt, width: 1.8 }).curve(quad, -0.6, 5.7).dot(2, 2).dot(0, 1, { color: C.alt, r: 3.4 }).dot(4, 3, { color: C.alt, r: 3.4 });
  g.label(4.6, 0.9, "y = f(x)");
  return g;
};
// k: corner at x = −2, jump at x = 0, corner at x = 2
const figK = () => {
  const g = plot({ w: 400, h: 320, x: [-5, 6], y: [-2, 5], alt: "Piecewise graph of k" });
  g.poly([[-4, 1], [-2, 3], [0, 1]]).curve((x) => x * x - 1, 0, 2).seg(2, 3, 5, 0);
  g.dot(-4, 1).dot(0, 1).hole(0, -1).dot(5, 0).label(3.6, 2.4, "y = k(x)");
  return g;
};
const FT = "The graph of the function $f$ is shown, together with the line tangent to the graph at $x=2$. ";
const K = "The graph of the function $k$, which consists of line segments and part of a parabola, is shown. ";
const TAB = r`$\begin{array}{c|cccc} x & f(x) & f'(x) & g(x) & g'(x) \\ \hline 1 & 4 & 2 & -3 & 5 \\ 2 & 3 & -1 & 5 & 4 \end{array}$`;
const FG = `The differentiable functions $f$ and $g$ have the values shown. ${TAB} `;
const TEMP = `The temperature of a liquid, $T(t)$ in °C, is recorded at selected times $t$ in minutes. ${tbl("t", [0, 4, 10, 15, 20], "T(t)", [68, 61, 52, 47, 44])} `;

// ── 2.1 Slope at a Single Point ───────────────
function g21() {
  const t = { fig: figT() };
  return [
    mc("easy", r`What is the slope of the line tangent to the graph of $f(x)=x^2+4x$ at $x=1$?`, "$6$", ["$5$", "$2$", "$6+h$"], r`$\dfrac{(1+h)^2+4(1+h)-5}{h}=6+h\to6$. The option $6+h$ is a secant slope; 5 is $f(1)$.`),
    mc("easy", r`The instantaneous rate of change of $f$ at $x=a$ is best described as`, "the limit of the average rates of change of $f$ over intervals shrinking to $a$", ["the average rate of change of $f$ over an interval containing $a$", "the value $f(a)$", r`the quotient $\dfrac{f(a)}{a}$`], r`It is the limit of $\dfrac{f(a+h)-f(a)}{h}$ as $h\to0$.`),
    mc("easy", r`The line tangent to the graph of $f$ at the point $(2,5)$ has slope $-3$. Which is an equation of this line?`, "$y-5=-3(x-2)$", ["$y-2=-3(x-5)$", "$y+5=-3(x+2)$", "$y=-3x+5$"], r`Point-slope form: $y-y_1=m(x-x_1)$ with $(x_1,y_1)=(2,5)$.`),
    mc("easy", FT + r`What is $f'(2)$?`, r`$\dfrac{1}{2}$`, ["$2$", "$1$", "$3$"], r`The tangent line passes through $(0,1)$ and $(4,3)$: slope $\dfrac{3-1}{4-0}=\dfrac12$. The option 2 is $f(2)$.`, t),
    num("easy", r`For a function $f$, the average rate of change over $[2,2+h]$ simplifies to $7+3h$ for $h\neq0$. What is the instantaneous rate of change of $f$ at $x=2$?`, 7, 0, r`$${lim("0", "(7+3h)", "h")}=7$.`),
    mc("medium", r`What is the slope of the line tangent to the graph of $f(x)=x^2+x$ at $x=2$?`, "$5$", ["$6$", "$4$", "$3$"], r`$\dfrac{(2+h)^2+(2+h)-6}{h}=5+h\to5$. The option 6 is $f(2)$.`),
    mc("medium", r`What is the instantaneous rate of change of $f(x)=\dfrac{3}{x}$ at $x=3$?`, r`$-\dfrac{1}{3}$`, [r`$\dfrac{1}{3}$`, "$-1$", "$1$"], r`$\dfrac{\frac{3}{3+h}-1}{h}=\dfrac{-1}{3+h}\to-\dfrac13$.`),
    mc("medium", r`Which is an equation of the line tangent to the graph of $f(x)=x^2+1$ at $x=-2$?`, "$y-5=-4(x+2)$", ["$y-5=4(x+2)$", "$y+5=-4(x-2)$", "$y-5=-4(x-2)$"], r`The point is $(-2,5)$ and the slope is $-4$, so $y-5=-4(x-(-2))$.`),
    mc("medium", r`A particle's position is $s(t)=3t^2$ metres at time $t$ seconds. What is its instantaneous velocity at $t=2$?`, "$12$ m/s", ["$6$ m/s", "$24$ m/s", "$3$ m/s"], r`$\dfrac{3(2+h)^2-12}{h}=12+3h\to12$. The option 6 is the average velocity over $[0,2]$.`),
    mc("medium", r`The amount of water in a tank is $W(t)$ litres at time $t$ hours, and the instantaneous rate of change of $W$ at $t=5$ is $-3$. Which statement is a correct interpretation?`, "At $t=5$ hours, the amount of water in the tank is decreasing at a rate of 3 litres per hour.", ["From $t=0$ to $t=5$ hours, the amount of water decreased at an average rate of 3 litres per hour.", "At $t=5$ hours, the tank contains 3 litres less water than at $t=0$.", "During the fifth hour, the amount of water decreased by 3 litres."], r`An instantaneous rate is stated at a moment, with units of litres per hour, and its sign gives the direction.`),
    mc("medium", FT + r`Which is an equation of the tangent line shown?`, r`$y-2=\dfrac{1}{2}(x-2)$`, [r`$y-2=2(x-2)$`, r`$y=\dfrac{1}{2}x+2$`, r`$y-1=\dfrac{1}{2}(x-2)$`], r`The line touches the graph at $(2,2)$ and has slope $\dfrac12$. Its $y$-intercept is 1, not 2.`, t),
    mc("hard", r`What is the slope of the line tangent to the graph of $f(x)=\sqrt{x+1}$ at $x=3$?`, r`$\dfrac{1}{4}$`, [r`$\dfrac{1}{2}$`, "$2$", r`$\dfrac{1}{3}$`], r`$\dfrac{\sqrt{x+1}-2}{x-3}=\dfrac{1}{\sqrt{x+1}+2}\to\dfrac14$.`),
    mc("hard", r`At what point on the graph of $y=x^2$ is the tangent line parallel to the secant line through $(1,1)$ and $(5,25)$?`, "$(3,9)$", ["$(6,36)$", "$(2,4)$", "$(4,16)$"], r`The secant slope is $\dfrac{24}{4}=6$. The tangent slope at $x=a$ is $2a$, so $a=3$.`),
    mc("hard", r`The line tangent to the graph of $f$ at $x=4$ is $y=3x-5$. What are $f(4)$ and $f'(4)$?`, "$f(4)=7$ and $f'(4)=3$", ["$f(4)=-5$ and $f'(4)=3$", "$f(4)=3$ and $f'(4)=7$", "$f(4)=7$ and $f'(4)=-5$"], r`The tangent line shares the point $(4,f(4))$ with the graph, so $f(4)=3(4)-5=7$, and its slope is $f'(4)=3$.`),
    mc("hard", r`A function $f$ has $f(1)=-2$ and $${lim("0", r`\dfrac{f(1+h)-f(1)}{h}`, "h")}=4$. The line tangent to the graph of $f$ at $x=1$ passes through which point?`, "$(3,6)$", ["$(3,10)$", "$(0,-2)$", "$(2,4)$"], r`The tangent line is $y+2=4(x-1)$. At $x=3$, $y=-2+8=6$.`),
    mc("hard", r`A ball's height is $H(t)=30t-5t^2$ metres at time $t$ seconds. Which statement describes the ball at $t=4$?`, "It is falling at 10 metres per second.", ["It is rising at 10 metres per second.", "It is falling at 20 metres per second.", "It is momentarily at rest."], r`$\dfrac{H(4+k)-H(4)}{k}=\dfrac{-10k-5k^2}{k}=-10-5k\to-10$. The negative sign means the height is decreasing.`),
    num("hard", r`Find the slope of the line tangent to the graph of $f(x)=x^2-4x$ at $x=5$.`, 6, 0, r`$\dfrac{(5+h)^2-4(5+h)-5}{h}=\dfrac{6h+h^2}{h}=6+h\to6$.`),
  ];
}

// ── 2.2 The Derivative as a Limit ───────────────
function g22() {
  return [
    mc("easy", r`Which expression defines $f'(x)$?`, r`$${lim("0", r`\dfrac{f(x+h)-f(x)}{h}`, "h")}$`, [r`$\dfrac{f(x+h)-f(x)}{h}$`, r`$${lim("0", r`\dfrac{f(x+h)-f(x)}{x}`, "h")}$`, r`$${lim("0", r`\dfrac{f(x)+h-f(x)}{h}`, "h")}$`], r`The derivative is the limit of the difference quotient. Without the limit it is only a secant slope.`),
    mc("easy", r`For $y=f(x)$, which of the following is NOT a notation for the derivative?`, r`$\dfrac{\Delta y}{\Delta x}$`, [r`$\dfrac{dy}{dx}$`, r`$f'(x)$`, r`$y'$`], r`$\dfrac{\Delta y}{\Delta x}$ is an average rate of change over an interval. The derivative is its limit.`),
    mc("easy", r`Using the definition of the derivative with $f(x)=3x^2$, the difference quotient simplifies to $6x+3h$. Therefore $f'(x)$ equals`, "$6x$", ["$6x+3h$", "$3x$", "$3x^2$"], r`Let $h\to0$ in $6x+3h$.`),
    num("easy", r`Let $f(x)=5x+2$. Find $f'(4)$.`, 5, 0, r`$\dfrac{5(x+h)+2-(5x+2)}{h}=5$ for every $x$: a line has constant slope.`),
    mc("medium", r`For $f(x)=x^2+4x$ and $h\neq0$, the difference quotient $\dfrac{f(x+h)-f(x)}{h}$ simplifies to`, "$2x+h+4$", ["$2x+4$", "$2x+h$", "$2xh+h^2+4h$"], r`$f(x+h)-f(x)=2xh+h^2+4h$; dividing by $h$ gives $2x+h+4$. The option $2x+4$ is the limit, not the quotient.`),
    mc("medium", r`Using the definition, the derivative of $f(x)=\dfrac{2}{x}$ is`, r`$-\dfrac{2}{x^2}$`, [r`$\dfrac{2}{x^2}$`, r`$-\dfrac{2}{x}$`, r`$2\ln x$`], r`$\dfrac{\frac{2}{x+h}-\frac2x}{h}=\dfrac{-2}{x(x+h)}\to-\dfrac{2}{x^2}$.`),
    mc("medium", r`Evaluate $${lim("0", r`\dfrac{(1+h)^4-1}{h}`, "h")}$.`, "$4$", ["$1$", "$0$", "$3$"], r`This is $f'(1)$ for $f(x)=x^4$. Expanding: $\dfrac{4h+6h^2+4h^3+h^4}{h}\to4$.`),
    mc("medium", r`The limit $${lim("0", r`\dfrac{\sqrt{16+h}-4}{h}`, "h")}$ is $f'(a)$ for which function and point?`, r`$f(x)=\sqrt{x}$, $a=16$`, [r`$f(x)=\sqrt{x}$, $a=4$`, r`$f(x)=x^2$, $a=4$`, r`$f(x)=\sqrt{x}-4$, $a=0$`], r`Match $\dfrac{f(a+h)-f(a)}{h}$: $h$ is added to 16, and $\sqrt{16}=4$ is $f(a)$.`),
    mc("medium", r`The limit $${lim("3", r`\dfrac{x^2-9}{x-3}`)}$ represents`, r`$f'(3)$ where $f(x)=x^2$`, [r`$f'(9)$ where $f(x)=x^2$`, r`$f'(3)$ where $f(x)=x^3$`, r`$f(3)$ where $f(x)=x^2$`], r`Match $\dfrac{f(x)-f(a)}{x-a}$ with $a=3$ and $f(3)=9$.`),
    mc("medium", r`Evaluate $${lim("0", r`\dfrac{\sin(\pi+h)-\sin\pi}{h}`, "h")}$.`, "$-1$", ["$0$", "$1$", r`$\pi$`], r`This is the derivative of $\sin x$ at $x=\pi$, which is $\cos\pi=-1$.`),
    mc("hard", r`If $f'(5)=6$, what is $${lim("0", r`\dfrac{f(5+3h)-f(5)}{h}`, "h")}$?`, "$18$", ["$6$", "$2$", "$9$"], r`$3\cdot\dfrac{f(5+3h)-f(5)}{3h}\to3f'(5)=18$.`),
    mc("hard", r`If $f'(2)=5$, what is $${lim("0", r`\dfrac{f(2+h)-f(2-h)}{h}`, "h")}$?`, "$10$", ["$5$", "$0$", r`$\dfrac{5}{2}$`], r`$\dfrac{f(2+h)-f(2)}{h}+\dfrac{f(2)-f(2-h)}{h}\to f'(2)+f'(2)=10$.`),
    mc("hard", r`Evaluate $${lim("0", r`\dfrac{e^{2+h}-e^{2}}{h}`, "h")}$.`, "$e^{2}$", ["$0$", "$1$", "$2e$"], r`This is the derivative of $e^x$ at $x=2$, which is $e^2$.`),
    mc("hard", r`Evaluate $${lim("0", r`\dfrac{\ln(e+h)-1}{h}`, "h")}$.`, r`$\dfrac{1}{e}$`, ["$1$", "$e$", "$0$"], r`Since $\ln e=1$, this is the derivative of $\ln x$ at $x=e$, which is $\dfrac1e$.`),
    mc("hard", r`For $f(x)=x^4$ and any real number $a$, evaluate $${lim("a", r`\dfrac{f(x)-f(a)}{x-a}`)}$.`, r`$4a^3$`, [r`$a^3$`, r`$4a$`, "$0$"], r`$\dfrac{x^4-a^4}{x-a}=(x+a)(x^2+a^2)\to2a\cdot2a^2=4a^3$.`),
    mc("hard", r`If $g'(4)=-2$, what is $${lim("0", r`\dfrac{g(4+3h)-g(4)}{6h}`, "h")}$?`, "$-1$", ["$-2$", "$-4$", "$-6$"], r`$\dfrac36\cdot\dfrac{g(4+3h)-g(4)}{3h}\to\dfrac12(-2)=-1$.`),
    num("hard", r`Evaluate $${lim("0", r`\dfrac{(1+h)^{10}-1}{h}`, "h")}$.`, 10, 0, r`This is $f'(1)$ for $f(x)=x^{10}$, and $f'(x)=10x^9$.`),
  ];
}

// ── 2.3 Estimating a Derivative ───────────────
function g23() {
  const t = { fig: figT() }, c = { calc: true };
  return [
    mc("easy", TEMP + r`Which is the best estimate of $T'(12)$?`, "$-1$ °C per minute", ["$-5$ °C per minute", "$1$ °C per minute", "$-0.8$ °C per minute"], r`$T'(12)\approx\dfrac{T(15)-T(10)}{15-10}=\dfrac{-5}{5}=-1$. The option $-0.8$ uses $t=10$ and $t=20$, which is a wider interval than necessary.`),
    mc("easy", r`To estimate $f'(a)$ from a table when $a$ lies between two tabulated inputs, the best practice is to use`, "the difference quotient over the two tabulated inputs nearest to $a$, one on each side", ["the difference quotient over the first and last entries of the table", "the function value at the nearest input", "the average of all the function values"], r`The shortest interval containing $a$ gives the closest approximation to the instantaneous rate.`),
    mc("easy", FT + r`Which of the following is greatest?`, "$f'(0)$", ["$f'(2)$", "$f'(4)$", "$f'(5)$"], r`The graph is steepest and rising at $x=0$; it flattens toward its peak at $x=3$ and falls afterwards.`, t),
    mc("medium", TEMP + r`Which is the best estimate of $T'(7)$?`, "$-1.5$", ["$-9$", "$-1.6$", "$1.5$"], r`$T'(7)\approx\dfrac{T(10)-T(4)}{10-4}=\dfrac{52-61}{6}=-1.5$. The option $-9$ omits the division.`),
    mc("medium", TEMP + r`What are the units of $T'(t)$?`, "°C per minute", ["°C", "minutes per °C", "°C × minutes"], r`A derivative has the units of the output divided by the units of the input.`),
    mc("medium", TEMP + r`An estimate gives $T'(12)\approx-1$. Which statement interprets this correctly?`, "At $t=12$ minutes, the temperature of the liquid is decreasing at approximately 1 °C per minute.", ["The temperature of the liquid at $t=12$ minutes is approximately $-1$ °C.", "From $t=0$ to $t=12$ minutes, the temperature fell by approximately 1 °C.", "At $t=12$ minutes, the temperature is decreasing at approximately 12 °C per minute."], r`The derivative is a rate at an instant: it names the time, the quantity, the direction and the units.`),
    mc("medium", r`Let $f(x)=x^3\cos x$. What is $f'(1)$?`, "$0.779$", ["$0.540$", "$2.462$", "$1.621$"], r`The numerical derivative in radian mode is 0.779. The option 0.540 is $f(1)$ itself.`, c),
    mc("medium", r`Let $f(x)=\ln(x^3+2)$. What is $f'(2)$?`, "$1.200$", ["$2.303$", "$0.100$", "$12.000$"], r`The numerical derivative at 2 is 1.200. The option 2.303 is $f(2)=\ln10$.`, c),
    mc("medium", r`A population $P(t)$, in thousands, is recorded at selected times $t$ in years. ${tbl("t", [0, 2, 5, 9], "P(t)", [12, 18, 30, 34])} Which is the best estimate of $P'(3.5)$, in thousands per year?`, "$4$", ["$12$", "$3.6$", "$6$"], r`$P'(3.5)\approx\dfrac{P(5)-P(2)}{5-2}=\dfrac{12}{3}=4$.`),
    mc("medium", FT + r`At which value of $x$ is $f'(x)=0$?`, "$x=3$", ["$x=2$", "$x=0$", "$x=5$"], r`The graph has a horizontal tangent at its highest point, $x=3$. At $x=2$ the tangent shown has slope $\dfrac12$.`, t),
    mc("hard", FT + r`Which statement is true?`, "$f'(2)$ equals the average rate of change of $f$ over $[0,4]$.", ["$f'(0)$ is negative.", "$f'(4)\\gt f'(0)$", "$f'(3)\\gt f'(1)$"], r`The graph passes through $(0,0)$ and $(4,2)$, so the average rate is $\dfrac12$, the slope of the tangent at $x=2$.`, t),
    mc("hard", r`Selected values of a differentiable function $f$ are $f(1.9)=7.22$, $f(2)=8$ and $f(2.1)=8.82$. Using the symmetric difference quotient, the best estimate of $f'(2)$ is`, "$8$", ["$8.2$", "$7.8$", "$0.8$"], r`$\dfrac{f(2.1)-f(1.9)}{2.1-1.9}=\dfrac{1.6}{0.2}=8$. The others are the forward and backward quotients, and the last omits a factor of 10.`),
    mc("hard", r`Selected values of a differentiable function $g$ are shown. ${tbl("x", [2, 5, 8, 12], "g(x)", [3, 9, 6, 14])} Which is the best estimate of $g'(6)$?`, "$-1$", ["$1$", "$-3$", "$0.5$"], r`$g'(6)\approx\dfrac{g(8)-g(5)}{8-5}=\dfrac{6-9}{3}=-1$.`),
    mc("hard", r`Use the symmetric difference quotient with $h=0.01$ to estimate the derivative of $f(x)=3^x$ at $x=0$.`, "$1.099$", ["$1.000$", "$0.477$", "$0.011$"], r`$\dfrac{3^{0.01}-3^{-0.01}}{0.02}\approx1.099$, which is $\ln3$.`, c),
    mc("hard", r`Let $f(x)=\dfrac{e^x}{x^2}$. What is $f'(1)$?`, "$-2.718$", ["$2.718$", "$-5.437$", "$0.000$"], r`The numerical derivative at 1 is $-2.718$ (exactly $-e$). The option 2.718 is $f(1)$.`, c),
    num("hard", r`A differentiable function $f$ has $f(4.8)=10.1$ and $f(5.2)=11.3$. Estimate $f'(5)$.`, 3, 0.001, r`$f'(5)\approx\dfrac{11.3-10.1}{5.2-4.8}=\dfrac{1.2}{0.4}=3$.`),
  ];
}

// ── 2.4 When the Derivative Fails ───────────────
function g24() {
  const k = { fig: figK() };
  return [
    mc("easy", r`If $f$ is differentiable at $x=a$, which of the following must be true?`, "$f$ is continuous at $x=a$.", ["$f'(a)=0$", "$f$ is increasing at $x=a$.", "$f(a)=0$"], r`Differentiability implies continuity.`),
    mc("easy", r`Which statement about $f(x)=|x|$ at $x=0$ is true?`, "$f$ is continuous but not differentiable.", ["$f$ is differentiable but not continuous.", "$f$ is both continuous and differentiable.", "$f$ is neither continuous nor differentiable."], r`The graph is unbroken at 0 but has a corner: the slope is $-1$ on the left and $1$ on the right.`),
    mc("easy", K + r`At how many values of $x$ in the open interval $(-4,5)$ is $k$ not differentiable?`, "$3$", ["$1$", "$2$", "$4$"], r`Corners at $x=-2$ and $x=2$, and a jump at $x=0$.`, k),
    mc("easy", r`The function $f(x)=\sqrt[3]{x}$ is not differentiable at $x=0$ because its graph has`, "a vertical tangent", ["a corner", "a jump discontinuity", "a hole"], r`The slope $\dfrac{1}{3x^{2/3}}$ grows without bound as $x\to0$ from both sides.`),
    mc("medium", K + r`At how many values of $x$ in $(-4,5)$ is $k$ continuous but not differentiable?`, "$2$", ["$0$", "$1$", "$3$"], r`The corners at $x=-2$ and $x=2$. At $x=0$ the function is not continuous.`, k),
    mc("medium", K + r`What is $k'(-3)$?`, "$1$", ["$-1$", "$2$", DNE], r`On $[-4,-2]$ the graph is a line from $(-4,1)$ to $(-2,3)$, with slope 1.`, k),
    mc("medium", K + r`What is $k'(-2)$?`, DNE, ["$0$", "$1$", "$-1$"], r`The slope is 1 to the left of $-2$ and $-1$ to the right: a corner.`, k),
    mc("medium", r`Let $f(x)=\begin{cases}3x^2,&x\le1\\6x-3,&x\gt1\end{cases}$. At $x=1$, $f$ is`, "both continuous and differentiable", ["continuous but not differentiable", "differentiable but not continuous", "neither continuous nor differentiable"], r`Both pieces equal 3 at $x=1$, and both have slope 6 there.`),
    mc("medium", r`Let $g(x)=\begin{cases}x^2,&x\le2\\3x-2,&x\gt2\end{cases}$. At $x=2$, $g$ is`, "continuous but not differentiable", ["both continuous and differentiable", "differentiable but not continuous", "neither continuous nor differentiable"], r`Both pieces equal 4 at $x=2$, but the slopes are 4 and 3.`),
    mc("medium", r`Let $h(x)=\begin{cases}x^3+1,&x\le1\\3x+2,&x\gt1\end{cases}$. At $x=1$, $h$ is`, "neither continuous nor differentiable", ["both continuous and differentiable", "continuous but not differentiable", "differentiable but not continuous"], r`The pieces give 2 and 5, so $h$ is not continuous and therefore not differentiable, even though both slopes are 3. "Differentiable but not continuous" is impossible.`),
    mc("medium", r`At which values of $x$ is $f(x)=|x^2-9|$ not differentiable?`, "$x=-3$ and $x=3$", ["$x=0$ only", "$x=3$ only", "no values of $x$"], r`The graph has corners where $x^2-9$ changes sign.`),
    mc("hard", r`For which values of $a$ and $b$ is $f(x)=\begin{cases}x^4,&x\le1\\ax+b,&x\gt1\end{cases}$ differentiable at $x=1$?`, "$a=4,\\ b=-3$", ["$a=4,\\ b=1$", "$a=1,\\ b=0$", "$a=4,\\ b=3$"], r`Slopes: $a=4$. Continuity: $1=a+b$, so $b=-3$. The option $a=1,b=0$ satisfies continuity only.`),
    mc("hard", r`The function $f(x)=\begin{cases}2x^2,&x\le1\\ax+b,&x\gt1\end{cases}$ is differentiable at $x=1$. What is $a+b$?`, "$2$", ["$6$", "$4$", "$-2$"], r`Slopes: $a=4$. Continuity: $2=a+b$, so $b=-2$ and $a+b=2$.`),
    mc("hard", r`For which values of $a$ and $b$ is $f(x)=\begin{cases}e^{x},&x\le0\\ax+b,&x\gt0\end{cases}$ differentiable at $x=0$?`, "$a=1,\\ b=1$", ["$a=0,\\ b=1$", "$a=1,\\ b=0$", "$a=0,\\ b=0$"], r`Continuity: $b=e^0=1$. Slopes: the derivative of $e^x$ at 0 is 1, so $a=1$.`),
    mc("hard", r`Which statement about $f(x)=x|x|$ at $x=0$ is true?`, "$f$ is differentiable at $0$ and $f'(0)=0$.", ["$f$ has a corner at $0$.", "$f$ is differentiable at $0$ and $f'(0)=1$.", "$f$ is not continuous at $0$."], r`$f(x)=x^2$ for $x\ge0$ and $-x^2$ for $x\lt0$. Both one-sided slopes at 0 are 0.`),
    mc("hard", r`Which of the following are true for every function $f$? I. If $f$ is differentiable at $a$, then $f$ is continuous at $a$. II. If $f$ is continuous at $a$, then $f$ is differentiable at $a$. III. If $f$ is not continuous at $a$, then $f$ is not differentiable at $a$.`, "I and III only", ["I only", "I and II only", "I, II and III"], r`III is the contrapositive of I, so it is equally true. II is false: $|x|$ at 0.`),
    mc("hard", r`The function $f(x)=\begin{cases}ax^2+1,&x\le1\\4x+b,&x\gt1\end{cases}$ is differentiable at $x=1$. What is $b$?`, "$-1$", ["$1$", "$3$", "$-3$"], r`Slopes: $2a=4$, so $a=2$. Continuity: $2+1=4+b$, so $b=-1$.`),
    num("hard", r`For what value of $k$ is $f(x)=\begin{cases}kx^2,&x\le3\\6x-9,&x\gt3\end{cases}$ differentiable at $x=3$?`, 1, 0, r`Slopes: $6k=6$, so $k=1$. Continuity then holds as well: $9k=9$.`),
  ];
}

// ── 2.5 Power, Sum and Constant-Multiple Rules ───────────────
function g25() {
  return [
    mc("easy", r`$${D("x^6")}=$`, "$6x^5$", ["$6x^6$", "$x^5$", "$5x^6$"], r`Power rule: bring down the exponent and reduce it by 1.`),
    mc("easy", r`$${D("4x^3-2x+9")}=$`, "$12x^2-2$", ["$12x^2-2x$", "$4x^2-2$", "$12x^2+7$"], r`Differentiate term by term; the constant 9 contributes 0.`),
    mc("easy", r`$${D(r`\pi^2`)}=$`, "$0$", [r`$2\pi$`, r`$\pi^2$`, r`$2\pi^2$`], r`$\pi^2$ is a constant, so its derivative is 0.`),
    num("easy", r`Let $f(x)=x^4$. Find $f'(2)$.`, 32, 0, r`$f'(x)=4x^3$, so $f'(2)=32$.`),
    mc("medium", r`$${D(r`\sqrt{x}`)}=$`, r`$\dfrac{1}{2\sqrt{x}}$`, [r`$\dfrac{1}{\sqrt{x}}$`, r`$\dfrac{\sqrt{x}}{2}$`, r`$2\sqrt{x}$`], r`$x^{1/2}$ differentiates to $\tfrac12x^{-1/2}$.`),
    mc("medium", r`$${D(r`\dfrac{5}{x^2}`)}=$`, r`$-\dfrac{10}{x^3}$`, [r`$\dfrac{5}{2x}$`, r`$-\dfrac{10}{x}$`, r`$\dfrac{10}{x^3}$`], r`$5x^{-2}$ differentiates to $-10x^{-3}$. The option $\tfrac{5}{2x}$ differentiates only the denominator.`),
    mc("medium", r`$${D(r`\dfrac{x^3-4x+2}{x}`)}=$`, r`$2x-\dfrac{2}{x^2}$`, [r`$3x^2-4$`, r`$2x+\dfrac{2}{x^2}$`, r`$2x-4$`], r`Divide first: $x^2-4+2x^{-1}$, which differentiates to $2x-2x^{-2}$.`),
    mc("medium", r`$${D("(2x+1)^2")}=$`, "$8x+4$", ["$4x+2$", "$4x+1$", "$8x$"], r`Expand to $4x^2+4x+1$ and differentiate. The option $4x+2$ is $2(2x+1)$, which omits a factor (the chain rule, Unit 3).`),
    mc("medium", r`Which is an equation of the line tangent to the graph of $y=x^3+x$ at $x=1$?`, "$y-2=4(x-1)$", ["$y-4=2(x-1)$", "$y-2=3(x-1)$", "$y=4x+2$"], r`$y(1)=2$ and $y'=3x^2+1$ gives slope 4.`),
    mc("medium", r`At which values of $x$ does the graph of $y=x^3-12x$ have a horizontal tangent?`, "$x=-2$ and $x=2$", ["$x=0$ only", r`$x=-2\sqrt3$ and $x=2\sqrt3$`, "$x=2$ only"], r`$y'=3x^2-12=0$ gives $x=\pm2$. The values $\pm2\sqrt3$ are zeros of $y$, not of $y'$.`),
    mc("medium", r`$${D("6x^{2/3}")}=$`, r`$4x^{-1/3}$`, [r`$4x^{1/3}$`, r`$9x^{-1/3}$`, r`$4x^{5/3}$`], r`$6\cdot\tfrac23x^{2/3-1}=4x^{-1/3}$.`),
    mc("hard", r`What is the slope of the line normal to the graph of $y=x^2+1$ at $x=2$?`, r`$-\dfrac{1}{4}$`, ["$4$", r`$\dfrac{1}{4}$`, "$-4$"], r`The tangent slope is $2(2)=4$; the normal slope is its negative reciprocal.`),
    mc("hard", r`For what value of $k$ is the line $y=4x+k$ tangent to the parabola $y=x^2$?`, "$-4$", ["$4$", "$0$", "$-8$"], r`$2x=4$ gives $x=2$, the point $(2,4)$. Then $4=8+k$.`),
    mc("hard", r`The function $g(x)=ax^3+bx$ satisfies $g(1)=5$ and $g'(1)=11$. What is $a$?`, "$3$", ["$2$", "$5$", "$11$"], r`$a+b=5$ and $3a+b=11$; subtracting gives $2a=6$.`),
    mc("hard", r`At which values of $x$ is the tangent line to $y=x^3+3x$ parallel to the line $y=15x-1$?`, "$x=-2$ and $x=2$", ["$x=-1$ and $x=1$", r`$x=-\sqrt5$ and $x=\sqrt5$`, "$x=2$ only"], r`$3x^2+3=15$ gives $x^2=4$.`),
    mc("hard", r`$${D(r`\dfrac{x^2+\sqrt{x}}{x}`)}=$`, r`$1-\dfrac{1}{2x^{3/2}}$`, [r`$1+\dfrac{1}{2\sqrt{x}}$`, r`$2x+\dfrac{1}{2\sqrt{x}}$`, r`$1-\dfrac{1}{2\sqrt{x}}$`], r`Divide first: $x+x^{-1/2}$, which differentiates to $1-\tfrac12x^{-3/2}$.`),
    mc("hard", r`Let $f(x)=3\sqrt[3]{x^2}$. What is $f'(8)$?`, "$1$", ["$2$", r`$\dfrac{1}{2}$`, "$12$"], r`$f(x)=3x^{2/3}$, so $f'(x)=2x^{-1/3}$ and $8^{-1/3}=\tfrac12$, giving $f'(8)=1$. The option 12 is $f(8)$.`),
    mc("hard", r`At which point on the graph of $y=x^2-6x+1$ does the tangent line have slope $2$?`, "$(4,-7)$", ["$(4,2)$", "$(1,-4)$", "$(2,-7)$"], r`$2x-6=2$ gives $x=4$, and $y(4)=16-24+1=-7$.`),
  ];
}

// ── 2.6 Sine, Cosine, e^x, ln x ───────────────
function g26() {
  return [
    mc("easy", r`$${D(r`3\sin x-2\cos x`)}=$`, r`$3\cos x+2\sin x$`, [r`$3\cos x-2\sin x$`, r`$-3\cos x+2\sin x$`, r`$3\cos x-2\cos x$`], r`The derivative of $\cos x$ is $-\sin x$, so $-2\cos x$ becomes $+2\sin x$.`),
    mc("easy", r`$${D(r`5e^{x}+\ln x`)}=$`, r`$5e^{x}+\dfrac{1}{x}$`, [r`$5xe^{x-1}+\dfrac{1}{x}$`, r`$5e^{x}+\ln x$`, r`$5e^{x}+x$`], r`$e^x$ is its own derivative and $\ln x$ differentiates to $\tfrac1x$. The power rule does not apply to $e^x$.`),
    mc("easy", r`$${D("e^{2}")}=$`, "$0$", ["$e^{2}$", "$2e$", "$2e^{2}$"], r`$e^2$ is a constant.`),
    num("easy", r`Let $f(x)=4\ln x$. Find $f'(2)$.`, 2, 0, r`$f'(x)=\dfrac4x$, so $f'(2)=2$.`),
    mc("medium", r`Let $f(x)=5\ln x-x^2+2e^{x}$. What is $f'(1)$?`, "$3+2e$", ["$2e-1$", "$7+2e$", "$3$"], r`$f'(x)=\dfrac5x-2x+2e^x$, so $f'(1)=5-2+2e$. The option $2e-1$ is $f(1)$.`),
    mc("medium", r`Which is an equation of the line tangent to the graph of $y=3e^{x}-x$ at $x=0$?`, "$y=2x+3$", ["$y=3x+3$", "$y=2x$", "$y=-x+3$"], r`$y(0)=3$ and $y'=3e^x-1$ gives slope 2.`),
    mc("medium", r`At which values of $x$ in $[0,2\pi]$ does the graph of $y=x-2\cos x$ have a horizontal tangent?`, r`$\dfrac{7\pi}{6}$ and $\dfrac{11\pi}{6}$`, [r`$\dfrac{\pi}{6}$ and $\dfrac{5\pi}{6}$`, r`$\dfrac{2\pi}{3}$ and $\dfrac{4\pi}{3}$`, r`$\dfrac{\pi}{3}$ and $\dfrac{5\pi}{3}$`], r`$y'=1+2\sin x=0$ gives $\sin x=-\tfrac12$.`),
    mc("medium", r`For $x\gt0$, $${D(r`\ln\left(x^{5}\right)`)}=$`, r`$\dfrac{5}{x}$`, [r`$\dfrac{1}{x^{5}}$`, r`$5x^{4}$`, r`$\dfrac{5}{x^{5}}$`], r`$\ln(x^5)=5\ln x$, which differentiates to $\dfrac5x$.`),
    mc("medium", r`Evaluate $${lim("0", r`\dfrac{\cos\left(\frac{\pi}{6}+h\right)-\cos\frac{\pi}{6}}{h}`, "h")}$.`, r`$-\dfrac{1}{2}$`, [r`$\dfrac{1}{2}$`, r`$\dfrac{\sqrt3}{2}$`, r`$-\dfrac{\sqrt3}{2}$`], r`This is the derivative of $\cos x$ at $\tfrac\pi6$, namely $-\sin\tfrac\pi6=-\tfrac12$.`),
    mc("medium", r`$${D("e^{x}-x^{e}")}=$`, r`$e^{x}-e\,x^{e-1}$`, [r`$e^{x}-x^{e}$`, r`$x\,e^{x-1}-e\,x^{e-1}$`, r`$e^{x}-e^{x}$`], r`$e^x$ is exponential (its own derivative); $x^e$ is a power, so the power rule applies.`),
    mc("hard", r`Let $f(x)=2\sin x+4\cos x$. What is $f'\!\left(\dfrac{\pi}{3}\right)$?`, r`$1-2\sqrt3$`, [r`$1+2\sqrt3$`, r`$2+\sqrt3$`, r`$-1-2\sqrt3$`], r`$f'(x)=2\cos x-4\sin x$, giving $1-2\sqrt3$. The option $1+2\sqrt3$ has the wrong sign on the second term; $2+\sqrt3$ is $f\!\left(\tfrac\pi3\right)$.`),
    mc("hard", r`Which is an equation of the line tangent to the graph of $y=\ln x$ at $x=e$?`, r`$y=\dfrac{x}{e}$`, ["$y=ex$", "$y=x-e+1$", r`$y=\dfrac{x}{e}+1$`], r`Point $(e,1)$, slope $\tfrac1e$: $y-1=\tfrac1e(x-e)$, which simplifies to $y=\tfrac{x}{e}$.`),
    mc("hard", r`At which value of $x$ does the graph of $y=e^{x}-5x$ have a horizontal tangent?`, r`$x=\ln5$`, ["$x=5$", r`$x=\ln\dfrac15$`, "$x=e^{5}$"], r`$y'=e^x-5=0$ gives $e^x=5$.`),
    mc("hard", r`For $x\gt0$, $${D(r`\ln(3x)`)}=$`, r`$\dfrac{1}{x}$`, [r`$\dfrac{1}{3x}$`, r`$\dfrac{3}{x}$`, r`$\dfrac{1}{3}$`], r`$\ln(3x)=\ln3+\ln x$, and $\ln3$ is a constant.`),
    mc("hard", r`$${D("e^{x+2}")}=$`, "$e^{x+2}$", ["$(x+2)e^{x+1}$", "$e^{x}$", "$2e^{x+2}$"], r`$e^{x+2}=e^2\cdot e^x$, a constant multiple of $e^x$.`),
    mc("hard", r`Evaluate $${lim("0", r`\dfrac{\ln(e+h)-1}{h}`, "h")}$.`, r`$\dfrac{1}{e}$`, ["$1$", "$e$", "$0$"], r`Since $\ln e=1$, this is the derivative of $\ln x$ at $x=e$, which is $\dfrac1e$.`),
    mc("hard", r`For $x\gt0$, $${D(r`\ln\!\left(\dfrac{x^{2}}{e^{x}}\right)`)}=$`, r`$\dfrac{2}{x}-1$`, [r`$\dfrac{2}{x}-e^{x}$`, r`$\dfrac{e^{x}}{x^{2}}$`, r`$\dfrac{2}{x}-x$`], r`$\ln\!\left(\tfrac{x^2}{e^x}\right)=2\ln x-x$.`),
    mc("hard", r`At which values of $x$ in $[0,2\pi]$ does the graph of $y=\sin x-\cos x$ have a horizontal tangent?`, r`$\dfrac{3\pi}{4}$ and $\dfrac{7\pi}{4}$`, [r`$\dfrac{\pi}{4}$ and $\dfrac{5\pi}{4}$`, r`$0$ and $\pi$`, r`$\dfrac{\pi}{2}$ and $\dfrac{3\pi}{2}$`], r`$y'=\cos x+\sin x=0$ when $\tan x=-1$. The values $\tfrac{\pi}{4},\tfrac{5\pi}{4}$ are the zeros of $y$.`),
    num("hard", r`Let $f(x)=6\cos x$. Find $f'\!\left(\dfrac{\pi}{2}\right)$.`, -6, 0, r`$f'(x)=-6\sin x$ and $\sin\tfrac\pi2=1$.`),
  ];
}

// ── 2.7 Products and Quotients ───────────────
function g27() {
  return [
    mc("easy", r`If $f$ and $g$ are differentiable, then $${D("f(x)\\,g(x)")}=$`, r`$f'(x)\,g(x)+f(x)\,g'(x)$`, [r`$f'(x)\,g'(x)$`, r`$f'(x)\,g(x)-f(x)\,g'(x)$`, r`$f'(x)+g'(x)$`], r`The product rule has two terms, added.`),
    mc("easy", r`$${D(r`x^{2}\sin x`)}=$`, r`$2x\sin x+x^{2}\cos x$`, [r`$2x\cos x$`, r`$2x\sin x-x^{2}\cos x$`, r`$x^{2}\cos x$`], r`Product rule. The option $2x\cos x$ multiplies the two derivatives.`),
    mc("easy", r`If $f$ and $g$ are differentiable and $g(x)\neq0$, then $${D(r`\dfrac{f(x)}{g(x)}`)}=$`, r`$\dfrac{f'(x)\,g(x)-f(x)\,g'(x)}{\big[g(x)\big]^{2}}$`, [r`$\dfrac{f(x)\,g'(x)-f'(x)\,g(x)}{\big[g(x)\big]^{2}}$`, r`$\dfrac{f'(x)}{g'(x)}$`, r`$\dfrac{f'(x)\,g(x)-f(x)\,g'(x)}{g(x)}$`], r`The term with the numerator's derivative comes first, and the denominator is squared.`),
    mc("easy", r`$${D(r`x\,e^{x}`)}=$`, r`$e^{x}+x\,e^{x}$`, [r`$e^{x}$`, r`$x\,e^{x}$`, r`$x^{2}e^{x-1}$`], r`Product rule: $(1)(e^x)+(x)(e^x)$.`),
    mc("medium", r`$${D(r`\dfrac{3x+1}{x^{2}+2}`)}=$`, r`$\dfrac{-3x^{2}-2x+6}{\left(x^{2}+2\right)^{2}}$`, [r`$\dfrac{3x^{2}+2x-6}{\left(x^{2}+2\right)^{2}}$`, r`$\dfrac{3}{2x}$`, r`$\dfrac{-3x^{2}-2x+6}{x^{2}+2}$`], r`$\dfrac{3(x^2+2)-(3x+1)(2x)}{(x^2+2)^2}$. The first wrong option has the subtraction reversed.`),
    mc("medium", FG + r`If $h(x)=f(x)\,g(x)$, what is $h'(2)$?`, "$7$", ["$-4$", "$15$", "$17$"], r`$f'(2)g(2)+f(2)g'(2)=(-1)(5)+(3)(4)=7$. The option $-4$ is $f'(2)g'(2)$.`),
    mc("medium", FG + r`If $k(x)=\dfrac{f(x)}{g(x)}$, what is $k'(2)$?`, r`$-\dfrac{17}{25}$`, [r`$\dfrac{17}{25}$`, r`$-\dfrac{1}{4}$`, r`$-\dfrac{17}{5}$`], r`$\dfrac{(-1)(5)-(3)(4)}{5^2}=-\dfrac{17}{25}$. The option $-\tfrac14$ is $\tfrac{f'(2)}{g'(2)}$.`),
    mc("medium", FG + r`If $h(x)=f(x)\,g(x)$, what is $h'(1)$?`, "$14$", ["$10$", "$-12$", "$26$"], r`$f'(1)g(1)+f(1)g'(1)=(2)(-3)+(4)(5)=14$.`),
    mc("medium", r`Let $h(x)=x^{2}\ln x$. What is $h'(e)$?`, "$3e$", ["$2e$", "$e^{2}$", "$e$"], r`$h'(x)=2x\ln x+x$, so $h'(e)=2e+e$. The option $e^2$ is $h(e)$.`),
    mc("medium", r`$${D(r`\dfrac{\sin x}{x}`)}=$`, r`$\dfrac{x\cos x-\sin x}{x^{2}}$`, [r`$\dfrac{\sin x-x\cos x}{x^{2}}$`, r`$\cos x$`, r`$\dfrac{x\cos x-\sin x}{x}$`], r`Quotient rule with numerator $\sin x$ and denominator $x$.`),
    mc("medium", r`$${D(r`\dfrac{x^{2}-1}{x^{2}+1}`)}=$`, r`$\dfrac{4x}{\left(x^{2}+1\right)^{2}}$`, [r`$-\dfrac{4x}{\left(x^{2}+1\right)^{2}}$`, r`$\dfrac{4x}{x^{2}+1}$`, "$1$"], r`$\dfrac{2x(x^2+1)-(x^2-1)(2x)}{(x^2+1)^2}=\dfrac{4x}{(x^2+1)^2}$.`),
    mc("hard", r`A differentiable function $f$ has $f(2)=5$ and $f'(2)=-3$. If $g(x)=x^{3}f(x)$, what is $g'(2)$?`, "$36$", ["$-36$", "$84$", "$60$"], r`$g'(x)=3x^2f(x)+x^3f'(x)$, so $g'(2)=60-24=36$. The option $-36$ is $(3x^2)(f'(x))$ at 2.`),
    mc("hard", FG + r`What is the derivative of $\dfrac{g(x)}{f(x)}$ at $x=1$?`, r`$\dfrac{13}{8}$`, [r`$\dfrac{7}{8}$`, r`$\dfrac{5}{2}$`, r`$-\dfrac{13}{8}$`], r`$\dfrac{g'(1)f(1)-g(1)f'(1)}{[f(1)]^2}=\dfrac{20-(-6)}{16}=\dfrac{13}{8}$. The option $\tfrac78$ mishandles the double negative.`),
    mc("hard", r`At which value of $x$ does the graph of $y=x^{2}\ln x$ have a horizontal tangent?`, r`$x=\dfrac{1}{\sqrt{e}}$`, [r`$x=\dfrac{1}{e}$`, "$x=1$", r`$x=\sqrt{e}$`], r`$y'=2x\ln x+x=x(2\ln x+1)=0$ gives $\ln x=-\tfrac12$.`),
    mc("hard", r`A differentiable function $f$ has $f(2)=4$ and $f'(2)=-1$. If $h(x)=\dfrac{x}{f(x)}$, what is $h'(2)$?`, r`$\dfrac{3}{8}$`, [r`$\dfrac{1}{8}$`, r`$-\dfrac{3}{8}$`, "$-1$"], r`$h'(x)=\dfrac{f(x)-xf'(x)}{[f(x)]^2}$, so $h'(2)=\dfrac{4+2}{16}=\dfrac38$.`),
    mc("hard", r`$${D(r`x^{3}e^{x}`)}=$`, r`$x^{2}e^{x}(x+3)$`, [r`$3x^{2}e^{x}$`, r`$x^{2}e^{x}(3x+1)$`, r`$x^{3}e^{x}$`], r`$3x^2e^x+x^3e^x=x^2e^x(3+x)$.`),
    mc("hard", FG + r`If $p(x)=\big[f(x)\big]^{2}$, what is $p'(1)$?`, "$16$", ["$8$", "$4$", "$32$"], r`$p=f\cdot f$, so $p'=2f\,f'$ and $p'(1)=2(4)(2)=16$. The option 8 is $2f(1)$.`),
    mc("hard", r`At which value of $x$ does the graph of $y=\dfrac{e^{x}}{x^{2}}$ have a horizontal tangent?`, "$x=2$", ["$x=0$", "$x=1$", "$x=-2$"], r`$y'=\dfrac{x^2e^x-2xe^x}{x^4}=\dfrac{e^x(x-2)}{x^3}$, which is zero only at $x=2$.`),
    num("hard", r`Let $p(x)=(2x+1)\left(x^{2}-3\right)$. Find $p'(1)$.`, 2, 0, r`$p'(x)=2(x^2-3)+(2x+1)(2x)$, so $p'(1)=-4+6=2$.`),
  ];
}

// ── 2.8 The Other Four Trigonometric Derivatives ───────────────
function g28() {
  return [
    mc("easy", r`$${D(r`\tan x`)}=$`, r`$\sec^{2}x$`, [r`$\sec x\tan x$`, r`$-\csc^{2}x$`, r`$\cot x$`], r`From the quotient rule on $\dfrac{\sin x}{\cos x}$.`),
    mc("easy", r`$${D(r`\sec x`)}=$`, r`$\sec x\tan x$`, [r`$\sec^{2}x$`, r`$-\csc x\cot x$`, r`$\tan^{2}x$`], r`$\sec^2x$ is the derivative of $\tan x$, not of $\sec x$.`),
    mc("easy", r`$${D(r`\cot x`)}=$`, r`$-\csc^{2}x$`, [r`$\csc^{2}x$`, r`$-\sec^{2}x$`, r`$-\csc x\cot x$`], r`The "co-" functions have negative derivatives.`),
    mc("easy", r`$${D(r`\csc x`)}=$`, r`$-\csc x\cot x$`, [r`$\csc x\cot x$`, r`$-\csc^{2}x$`, r`$-\sec x\tan x$`], r`Replace each function in $\sec x\tan x$ by its co-function and attach a minus sign.`),
    num("easy", r`Let $f(x)=4\tan x$. Find $f'(0)$.`, 4, 0, r`$f'(x)=4\sec^2x$ and $\sec0=1$.`),
    mc("medium", r`$${D(r`3\tan x-2\sec x`)}=$`, r`$3\sec^{2}x-2\sec x\tan x$`, [r`$3\sec^{2}x-2\sec^{2}x$`, r`$3\sec x\tan x-2\sec^{2}x$`, r`$3\sec^{2}x+2\sec x\tan x$`], r`Apply each derivative term by term.`),
    mc("medium", r`What is the slope of the graph of $y=\tan x$ at $x=\dfrac{\pi}{3}$?`, "$4$", [r`$\dfrac{1}{4}$`, "$2$", r`$\sqrt3$`], r`$\sec^2\tfrac\pi3=\dfrac{1}{\cos^2(\pi/3)}=\dfrac{1}{1/4}=4$. The option $\tfrac14$ is $\cos^2$; 2 is $\sec$ unsquared; $\sqrt3$ is $\tan$.`),
    mc("medium", r`Which is an equation of the line tangent to the graph of $y=\tan x$ at $x=\dfrac{\pi}{3}$?`, r`$y-\sqrt3=4\left(x-\dfrac{\pi}{3}\right)$`, [r`$y-\sqrt3=2\left(x-\dfrac{\pi}{3}\right)$`, r`$y-4=\sqrt3\left(x-\dfrac{\pi}{3}\right)$`, r`$y-\sqrt3=\sqrt3\left(x-\dfrac{\pi}{3}\right)$`], r`Point $\left(\tfrac\pi3,\sqrt3\right)$ and slope $\sec^2\tfrac\pi3=4$.`),
    mc("medium", r`$${D(r`\csc x-4\cot x`)}=$`, r`$-\csc x\cot x+4\csc^{2}x$`, [r`$-\csc x\cot x-4\csc^{2}x$`, r`$\csc x\cot x+4\csc^{2}x$`, r`$-\csc x\cot x+4\sec^{2}x$`], r`$-4\cot x$ differentiates to $-4(-\csc^2x)=+4\csc^2x$.`),
    mc("medium", r`Let $f(x)=\sec x$. What is $f'\!\left(\dfrac{\pi}{3}\right)$?`, r`$2\sqrt3$`, ["$2$", r`$\dfrac{\sqrt3}{2}$`, "$4$"], r`$\sec\tfrac\pi3\tan\tfrac\pi3=2\cdot\sqrt3$. The option 4 is $\sec^2\tfrac\pi3$.`),
    mc("medium", r`$${D(r`e^{x}\cot x`)}=$`, r`$e^{x}\left(\cot x-\csc^{2}x\right)$`, [r`$e^{x}\left(\cot x+\csc^{2}x\right)$`, r`$-e^{x}\csc^{2}x$`, r`$e^{x}\cot x$`], r`Product rule: $e^x\cot x+e^x(-\csc^2x)$.`),
    mc("hard", r`Let $f(x)=x\tan x$. What is $f'\!\left(\dfrac{\pi}{4}\right)$?`, r`$1+\dfrac{\pi}{2}$`, [r`$1+\dfrac{\pi}{4}$`, r`$\dfrac{\pi}{2}$`, "$1$"], r`$f'(x)=\tan x+x\sec^2x$; at $\tfrac\pi4$ this is $1+\tfrac\pi4\cdot2$.`),
    mc("hard", r`At which values of $x$ in $\left(-\dfrac{\pi}{2},\dfrac{\pi}{2}\right)$ does the graph of $y=4x-\tan x$ have a horizontal tangent?`, r`$x=-\dfrac{\pi}{3}$ and $x=\dfrac{\pi}{3}$`, ["$x=0$ only", r`$x=-\dfrac{\pi}{4}$ and $x=\dfrac{\pi}{4}$`, r`$x=-\dfrac{\pi}{6}$ and $x=\dfrac{\pi}{6}$`], r`$y'=4-\sec^2x=0$ gives $\cos^2x=\tfrac14$.`),
    mc("hard", r`$${D(r`\dfrac{1+\sin x}{\cos x}`)}=$`, r`$\dfrac{1+\sin x}{\cos^{2}x}$`, [r`$\dfrac{1-\sin x}{\cos^{2}x}$`, r`$-\cot x$`, r`$\sec^{2}x$`], r`The function is $\sec x+\tan x$, with derivative $\sec x\tan x+\sec^2x=\dfrac{\sin x+1}{\cos^2x}$.`),
    mc("hard", r`$${D(r`\tan x-x`)}=$`, r`$\tan^{2}x$`, [r`$\sec^{2}x$`, r`$\sec^{2}x-x$`, r`$\tan x$`], r`$\sec^2x-1=\tan^2x$ by the Pythagorean identity.`),
    mc("hard", r`$${D(r`\sec x\tan x`)}=$`, r`$\sec x\tan^{2}x+\sec^{3}x$`, [r`$\sec^{3}x\tan x$`, r`$\sec x\tan x+\sec^{2}x$`, r`$\sec^{3}x$`], r`Product rule: $(\sec x\tan x)(\tan x)+(\sec x)(\sec^2x)$.`),
    mc("hard", r`$${D(r`\dfrac{\sec x}{x}`)}=$`, r`$\dfrac{\sec x\,(x\tan x-1)}{x^{2}}$`, [r`$\dfrac{\sec x\,(1-x\tan x)}{x^{2}}$`, r`$\sec x\tan x$`, r`$\dfrac{\sec x\,(x\tan x-1)}{x}$`], r`Quotient rule: $\dfrac{x\sec x\tan x-\sec x}{x^2}$.`),
    num("hard", r`Let $f(x)=\cot x$. Find $f'\!\left(\dfrac{\pi}{4}\right)$.`, -2, 0, r`$f'(x)=-\csc^2x$ and $\csc^2\tfrac\pi4=2$.`),
  ];
}

export default [
  { code: "2.1", gen: g21 },
  { code: "2.2", gen: g22 },
  { code: "2.3", gen: g23 },
  { code: "2.4", gen: g24 },
  { code: "2.5", gen: g25 },
  { code: "2.6", gen: g26 },
  { code: "2.7", gen: g27 },
  { code: "2.8", gen: g28 },
];
