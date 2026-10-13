// AP Calculus AB exam prep — Unit 7 (Differential Equations): question bank.
// Original questions in exam format; see u1.mjs for the conventions. Several
// questions use slope fields, either in the stem or as the four answer options.
import { mc, mcFig, num } from "./helpers.mjs";
import { plot, C } from "../apcalc/fig.mjs";

const r = String.raw;
const DY = (rhs, t = "x") => `\\dfrac{dy}{d${t}}=${rhs}`;
const LIM = (to, body, v = "x") => `\\displaystyle\\lim_{${v}\\to ${to}}${body}`;

// ── figures ──
/** slope field on [−3,3]² at integer lattice points */
const field = (fn, o = {}) => {
  const g = plot({ w: o.w ?? 300, h: o.h ?? 300, x: o.x ?? [-3.6, 3.6], y: o.y ?? [-3.6, 3.6], grid: false, alt: "Slope field" });
  g.slopes(fn, { half: o.half ?? 8 });
  return g;
};
const small = (fn) => field(fn, { w: 240, h: 240, half: 6.5 });
const figLog = () => {
  const g = plot({ w: 360, h: 320, x: [-3.6, 3.6], y: [-1.6, 5.6], grid: false, alt: "Slope field with horizontal segments along y = 0 and y = 4" });
  g.slopes((x, y) => (y * (4 - y)) / 4, { half: 8 });
  return g;
};
const SF = "A slope field for a differential equation is shown. ";
const LOG = r`The slope field for $\dfrac{dy}{dx}=\dfrac{y(4-y)}{4}$ is shown. `;

// ── 7.1 Writing a Differential Equation ───────────────
function g71() {
  return [
    mc("easy", r`"The rate of change of $y$ with respect to $t$ is proportional to $y$" is written as`, r`$\dfrac{dy}{dt}=ky$`, [r`$y=kt$`, r`$\dfrac{dy}{dt}=\dfrac{k}{y}$`, r`$\dfrac{dy}{dt}=kt$`], r`"Rate of change" is the derivative; "proportional to $y$" is $k$ times $y$.`),
    mc("easy", r`"The rate of change of $y$ with respect to $x$ is inversely proportional to the square of $x$" is written as`, r`$\dfrac{dy}{dx}=\dfrac{k}{x^{2}}$`, [r`$\dfrac{dy}{dx}=kx^{2}$`, r`$\dfrac{dy}{dx}=\dfrac{k}{y^{2}}$`, r`$y=\dfrac{k}{x^{2}}$`], r`Inversely proportional means divided by.`),
    mc("easy", r`A differential equation is an equation that`, "relates an unknown function to one or more of its derivatives", ["has a derivative as its solution", "can be solved by differentiating both sides", "contains only constants and one variable"], r`Its solutions are functions.`),
    num("easy", r`A quantity satisfies $\dfrac{dy}{dt}=ky$, and $\dfrac{dy}{dt}=10$ when $y=4$. Find $k$.`, 2.5, 0.001, r`$10=4k$.`),
    mc("medium", r`A metal bar at temperature $T$ is left in air at 25 °C. Its temperature changes at a rate proportional to the difference between its temperature and the air's. Which equation models this?`, r`$\dfrac{dT}{dt}=k(T-25)$`, [r`$\dfrac{dT}{dt}=kT-25$`, r`$\dfrac{dT}{dt}=k(T-25)t$`, r`$T=k(t-25)$`], r`The rate is $k$ times the difference $T-25$.`),
    mc("medium", r`For the bar modelled by $\dfrac{dT}{dt}=k(T-25)$, the bar is cooling at 3 °C per minute when $T=85$. What is $k$?`, "$-0.05$", ["$0.05$", "$-0.035$", "$-20$"], r`$-3=k(60)$. Cooling means the rate is negative.`),
    mc("medium", r`In a school of 900 students, a virus spreads at a rate proportional to the product of the number $y$ who have caught it and the number who have not. Which equation models this?`, r`$\dfrac{dy}{dt}=ky(900-y)$`, [r`$\dfrac{dy}{dt}=ky+(900-y)$`, r`$\dfrac{dy}{dt}=k(900-y)$`, r`$\dfrac{dy}{dt}=900ky$`], r`The product of $y$ and $900-y$, times a constant.`),
    mc("medium", r`A pond holds $A$ kilograms of algae. New algae grow at 8 kilograms per day, and fish eat 4% of the amount present each day. Which equation models this?`, r`$\dfrac{dA}{dt}=8-0.04A$`, [r`$\dfrac{dA}{dt}=8-0.04$`, r`$\dfrac{dA}{dt}=0.04A-8$`, r`$\dfrac{dA}{dt}=8A-0.04$`], r`Rate in minus rate out.`),
    mc("medium", r`A quantity $M\gt0$ decays at a rate proportional to $M^{2}$. In the model $\dfrac{dM}{dt}=kM^{2}$, the constant $k$ is`, "negative", ["positive", "zero", "equal to $2$"], r`$M^2\gt0$ and $M$ is decreasing, so $k\lt0$.`),
    mc("medium", r`The rate at which a child's vocabulary $V$ (thousands of words) grows is proportional to the difference between 60 and $V$. When $V=20$ it is growing at 2 thousand words per year. Which equation models this?`, r`$\dfrac{dV}{dt}=0.05(60-V)$`, [r`$\dfrac{dV}{dt}=0.1(60-V)$`, r`$\dfrac{dV}{dt}=0.05(V-60)$`, r`$\dfrac{dV}{dt}=2(60-V)$`], r`$2=k(40)$ gives $k=0.05$.`),
    mc("hard", r`For the virus model $\dfrac{dy}{dt}=ky(900-y)$ with $k\gt0$, for what value of $y$ is the virus spreading fastest?`, "$450$", ["$900$", "$0$", "$225$"], r`$y(900-y)$ is greatest midway between its zeros.`),
    mc("hard", r`The area $A$ of a circular oil slick increases at a rate proportional to its circumference. Which statement follows?`, "Its radius increases at a constant rate.", ["Its radius increases at a rate proportional to its radius.", "Its area increases at a constant rate.", "Its circumference is constant."], r`$2\pi r\dfrac{dr}{dt}=k\cdot2\pi r$ gives $\dfrac{dr}{dt}=k$.`),
    mc("hard", r`The algae in a pond satisfy $\dfrac{dA}{dt}=8-0.04A$. Which statement is true?`, "The amount of algae is not changing when $A=200$.", ["The amount of algae is always increasing.", "The amount of algae is not changing when $A=8$.", "The amount of algae decreases at 0.04 kilograms per day."], r`$8-0.04A=0$ when $A=200$.`),
    mc("hard", r`A population $P$ grows at a rate jointly proportional to $P$ and to $1-\dfrac{P}{K}$, where $K$ is a constant. Which equation models this?`, r`$\dfrac{dP}{dt}=kP\left(1-\dfrac{P}{K}\right)$`, [r`$\dfrac{dP}{dt}=kP+\left(1-\dfrac{P}{K}\right)$`, r`$\dfrac{dP}{dt}=\dfrac{kP}{1-P/K}$`, r`$P=kt\left(1-\dfrac{t}{K}\right)$`], r`Jointly proportional means proportional to the product.`),
    num("hard", r`A child's vocabulary satisfies $\dfrac{dV}{dt}=0.05(60-V)$, with $V$ in thousands of words and $t$ in years. How fast, in thousands of words per year, is it growing when $V=40$?`, 1, 0.001, r`$0.05(60-40)$.`),
  ];
}

// ── 7.2 Checking a Proposed Solution ───────────────
function g72() {
  return [
    mc("easy", r`Which function is a solution of $${DY("5y")}$?`, r`$y=Ce^{5x}$`, [r`$y=5x+C$`, r`$y=Cx^{5}$`, r`$y=e^{x}+5$`], r`$\dfrac{d}{dx}\left[Ce^{5x}\right]=5Ce^{5x}=5y$.`),
    mc("easy", r`The general solution of $${DY("5y")}$ is $y=Ce^{5x}$. Which is the particular solution with $y(0)=2$?`, r`$y=2e^{5x}$`, [r`$y=e^{5x}+2$`, r`$y=e^{5x}+1$`, r`$y=2e^{x}$`], r`$y(0)=C=2$.`),
    mc("easy", r`A general solution of a first-order differential equation`, "contains an arbitrary constant", ["passes through a given point", "is always a constant function", "contains no constants"], r`An initial condition then fixes the constant, giving a particular solution.`),
    num("easy", r`Find the constant solution of $\dfrac{dy}{dt}=y-7$.`, 7, 0, r`$y-7=0$.`),
    mc("medium", r`Which function is a solution of $y''+4y=0$?`, r`$y=\sin(2x)$`, [r`$y=e^{2x}$`, r`$y=\sin(4x)$`, r`$y=x^{2}$`], r`$y''=-4\sin(2x)$, so $y''+4y=0$.`),
    mc("medium", r`For $x\gt0$, is $y=x^{3}$ a solution of $${DY(r`\dfrac{3y}{x}`)}$?`, "Yes, because both sides equal $3x^{2}$.", ["No, because the left side is $3x^{2}$ and the right side is $3x^{3}$.", "Yes, because $y(1)=1$.", "No, because $y$ is not exponential."], r`$\dfrac{3x^3}{x}=3x^2$.`),
    mc("medium", r`What are the constant solutions of $\dfrac{dy}{dt}=y^{2}-16$?`, "$y=4$ and $y=-4$", ["$y=16$ only", "$y=0$ and $y=16$", "$y=4$ only"], r`$y^2-16=0$.`),
    mc("medium", r`For what value of $k$ is $y=e^{4x}$ a solution of $y'-ky=0$?`, "$4$", ["$-4$", r`$\dfrac{1}{4}$`, "$0$"], r`$4e^{4x}-ke^{4x}=0$.`),
    mc("medium", r`For $x\gt0$, the function $y=x^{3}+\dfrac{1}{x}$ satisfies $x\dfrac{dy}{dx}+y=$`, r`$4x^{3}$`, [r`$4x^{3}+\dfrac{2}{x}$`, r`$3x^{3}$`, r`$x^{3}$`], r`$x\left(3x^2-\dfrac{1}{x^2}\right)+x^3+\dfrac1x=4x^3$.`),
    mc("medium", r`For what values of $k$ is $y=e^{kx}$ a solution of $y''-7y'+12y=0$?`, "$k=3$ and $k=4$", ["$k=-3$ and $k=-4$", "$k=1$ and $k=12$", "$k=7$ and $k=12$"], r`$k^2-7k+12=0$.`),
    mc("hard", r`For $x\gt0$, for what values of $m$ is $y=x^{m}$ a solution of $x^{2}y''-6y=0$?`, "$m=3$ and $m=-2$", ["$m=-3$ and $m=2$", "$m=3$ only", r`$m=\sqrt6$ and $m=-\sqrt6$`], r`$m(m-1)-6=(m-3)(m+2)=0$.`),
    mc("hard", r`For what non-zero values of $a$ is $y=\sin(ax)$ a solution of $y''+16y=0$?`, "$a=4$ and $a=-4$", ["$a=16$ only", "$a=4$ only", r`$a=\dfrac{1}{4}$ and $a=-\dfrac{1}{4}$`], r`$-a^2\sin(ax)+16\sin(ax)=0$ requires $a^2=16$.`),
    mc("hard", r`Which function is NOT a solution of $${DY("y")}$?`, r`$y=e^{x}+1$`, [r`$y=e^{x}$`, r`$y=3e^{x}$`, r`$y=0$`], r`Its derivative is $e^x$, which is not equal to $e^x+1$.`),
    mc("hard", r`Which family of functions solves $${DY("y-x")}$?`, r`$y=x+1+Ce^{x}$`, [r`$y=x-1+Ce^{x}$`, r`$y=x+1+Ce^{-x}$`, r`$y=xy-\dfrac{x^{2}}{2}+C$`], r`$y'=1+Ce^{x}$ and $y-x=1+Ce^{x}$.`),
    mc("hard", r`The function $y=\sqrt{2x^{2}+C}$ satisfies which differential equation?`, r`$y\,\dfrac{dy}{dx}=2x$`, [r`$\dfrac{dy}{dx}=2xy$`, r`$\dfrac{dy}{dx}=\dfrac{y}{2x}$`, r`$y\,\dfrac{dy}{dx}=x$`], r`$\dfrac{dy}{dx}=\dfrac{2x}{\sqrt{2x^2+C}}=\dfrac{2x}{y}$.`),
    num("hard", r`The function $y=Ce^{2x}$ satisfies $y(0)=3$. Find $y(\ln2)$.`, 12, 0, r`$C=3$, and $e^{2\ln2}=4$.`),
  ];
}

// ── 7.3 Drawing Slope Fields ───────────────
function g73() {
  const xmy = (x, y) => x - y;
  return [
    mc("easy", r`For $${DY("y-x")}$, what is the slope of the solution curve through the point $(2,5)$?`, "$3$", ["$-3$", "$7$", "$5$"], r`$5-2$.`),
    mc("easy", r`For $${DY("2x+y")}$, what is the slope at the point $(1,3)$?`, "$5$", ["$4$", "$3$", "$1$"], r`$2+3$.`),
    mc("easy", r`In the slope field for $${DY("y-x")}$, the segments are horizontal at every point of`, "the line $y=x$", ["the $x$-axis", "the line $y=-x$", "the $y$-axis"], r`The slope $y-x$ is zero when $y=x$.`),
    num("easy", r`For $${DY("y^{2}-x")}$, find the slope at the point $(2,3)$.`, 7, 0, r`$9-2$.`),
    mc("medium", SF + r`Which differential equation could it represent?`, r`$${DY(r`\dfrac{x}{2}`)}$`, [r`$${DY(r`\dfrac{y}{2}`)}$`, r`$${DY("x+y")}$`, r`$${DY("xy")}$`], r`Every column of segments is identical, so the slope depends on $x$ only.`, { fig: field((x) => x / 2) }),
    mc("medium", SF + r`Which differential equation could it represent?`, r`$${DY(r`\dfrac{y}{2}`)}$`, [r`$${DY(r`\dfrac{x}{2}`)}$`, r`$${DY("x-y")}$`, r`$${DY(r`-\dfrac{y}{2}`)}$`], r`Every row is identical, with positive slopes above the $x$-axis and negative below.`, { fig: field((x, y) => y / 2) }),
    mc("medium", r`For $${DY("y(x+2)")}$, the segments of the slope field are horizontal at every point of`, "the lines $x=-2$ and $y=0$", ["the line $y=x$", "the lines $x=2$ and $y=0$", "the line $y=0$ only"], r`$y(x+2)=0$ when $y=0$ or $x=-2$.`),
    mc("medium", r`For $${DY("x-y^{2}")}$, the segments of the slope field are horizontal at every point of`, "the parabola $x=y^{2}$", ["the line $y=x$", "the $y$-axis", "the parabola $y=x^{2}$"], r`$x-y^2=0$.`),
    mc("medium", r`For $${DY(r`\dfrac{y}{x}`)}$, what is the slope at the point $(2,-4)$?`, "$-2$", ["$2$", r`$-\dfrac{1}{2}$`, "undefined"], r`$\dfrac{-4}{2}$.`),
    mc("medium", r`For $${DY("3x-y")}$, the segments of the slope field are horizontal along`, "the line $y=3x$", [r`the line $y=\dfrac{x}{3}$`, "the line $y=-3x$", "the $y$-axis"], r`$3x-y=0$.`),
    mc("medium", r`Which straight line is itself a solution of $${DY("y-x")}$?`, "$y=x+1$", ["$y=x$", "$y=x-1$", "$y=-x$"], r`On $y=x+1$ the field gives slope $(x+1)-x=1$, the slope of the line itself.`),
    mcFig("hard", r`Which of the following is the slope field for $${DY("y-x")}$?`, small((x, y) => y - x), [small((x, y) => x + y), small(xmy), small((x, y) => (x * y) / 2)], r`Horizontal segments lie along $y=x$, and at $(0,1)$ the slope is $+1$. The field for $x-y$ has slope $-1$ there.`),
    mcFig("hard", r`Which of the following is the slope field for $${DY("-y")}$?`, small((x, y) => -y), [small((x) => -x), small((x, y) => y), small((x, y) => x + y)], r`The rows are identical (dependence on $y$ only), with negative slopes above the $x$-axis and positive slopes below it.`),
    mc("hard", SF + r`Which differential equation could it represent?`, r`$${DY(r`\dfrac{xy}{2}`)}$`, [r`$${DY("x+y")}$`, r`$${DY("x-y")}$`, r`$${DY(r`\dfrac{x}{y}`)}$`], r`Segments are horizontal along both axes; slopes are positive in the first and third quadrants and negative in the second and fourth.`, { fig: field((x, y) => (x * y) / 2) }),
    mc("hard", r`The solution of $${DY("y-x")}$ through the point $(0,-1)$`, "increases at first, reaches a maximum where it crosses the line $y=x$, then decreases", ["increases for all $x$", "decreases for all $x$", "decreases at first, reaches a minimum where it crosses the line $y=x$, then increases"], r`Below the line $y=x$ the slope $y-x$ is negative and above it the slope is positive. The solution $y=x+1-2e^{x}$ starts above the line far to the left, crosses it at $x=-\ln2$ with slope 0, and falls afterwards.`),
    mc("hard", r`Which straight line is itself a solution of $${DY("3x-y")}$?`, "$y=3x-3$", ["$y=3x$", "$y=3x+3$", "$y=x-3$"], r`For $y=mx+b$: $m=3x-mx-b$ for all $x$ forces $m=3$, $b=-3$.`),
  ];
}

// ── 7.4 Reasoning from a Slope Field ───────────────
function g74() {
  const L = { fig: figLog() };
  return [
    mc("easy", r`What are the equilibrium (constant) solutions of $\dfrac{dy}{dt}=y^{2}-5y$?`, "$y=0$ and $y=5$", [r`$y=\dfrac{5}{2}$ only`, "$y=5$ only", "$y=-5$ and $y=0$"], r`$y(y-5)=0$.`),
    mc("easy", r`A slope field in which every row of segments is identical belongs to a differential equation in which $\dfrac{dy}{dx}$ depends on`, "$y$ only", ["$x$ only", "both $x$ and $y$", "neither $x$ nor $y$"], r`Moving sideways (changing $x$) does not change the slope.`),
    mc("easy", r`For $${DY("y-x")}$, $\dfrac{d^{2}y}{dx^{2}}=$`, "$y-x-1$", ["$-1$", "$y+x-1$", "$y-x$"], r`$\dfrac{dy}{dx}-1=(y-x)-1$. The option $-1$ treats $y$ as a constant.`),
    mc("medium", LOG + r`A solution has $y(0)=1$. What is $${LIM(r`\infty`, "y(x)")}$?`, "$4$", ["$0$", "$1$", r`$\infty$`], r`Between the equilibria $y=0$ and $y=4$ the slope is positive, so the solution rises toward 4 without crossing it.`, L),
    mc("medium", LOG + r`A solution has $y(0)=5$. Which statement describes it?`, "It decreases, approaching $y=4$.", ["It increases without bound.", "It decreases, approaching $y=0$.", "It is constant."], r`For $y\gt4$ the slope $\dfrac{y(4-y)}{4}$ is negative, and the solution cannot cross the equilibrium $y=4$.`, L),
    mc("medium", LOG + r`A solution has $0\lt y\lt4$. At what value of $y$ is it increasing most rapidly?`, "$y=2$", ["$y=4$", "$y=1$", "$y=0$"], r`$\dfrac{y(4-y)}{4}$ is greatest midway between its zeros.`, L),
    mc("medium", r`For $${DY("x^{2}y")}$, $\dfrac{d^{2}y}{dx^{2}}=$`, r`$xy\left(2+x^{3}\right)$`, ["$2xy$", r`$2x+x^{2}y$`, r`$x^{4}y$`], r`$2xy+x^2\dfrac{dy}{dx}=2xy+x^2(x^2y)$.`),
    mc("medium", r`A solution of $\dfrac{dy}{dt}=0.2(10-y)$ has $y(0)=3$. What is $${LIM(r`\infty`, "y(t)", "t")}$?`, "$10$", ["$3$", "$0.2$", r`$\infty$`], r`The only equilibrium is $y=10$, and below it the solution increases.`),
    mc("medium", r`Let $y=f(x)$ be the solution of $${DY("y-x")}$ with $f(0)=-1$. At $x=0$ the graph of $f$ is`, "decreasing and concave down", ["decreasing and concave up", "increasing and concave up", "increasing and concave down"], r`$\dfrac{dy}{dx}=-1$ and $\dfrac{d^2y}{dx^2}=y-x-1=-2$.`),
    mc("medium", r`A slope field has horizontal segments at every point of the line $y=-x$ and nowhere else. Which differential equation could it represent?`, r`$${DY("x+y")}$`, [r`$${DY("x-y")}$`, r`$${DY("xy")}$`, r`$${DY(r`\dfrac{x}{y}`)}$`], r`$x+y=0$ on $y=-x$.`),
    mc("hard", r`A solution of $${DY("y-x^{3}")}$ passes through the point $(1,1)$. At that point the solution has`, "a relative maximum", ["a relative minimum", "neither a relative maximum nor a relative minimum", "a point of inflection"], r`$\dfrac{dy}{dx}=0$ and $\dfrac{d^2y}{dx^2}=\dfrac{dy}{dx}-3x^2=-3\lt0$.`),
    mc("hard", r`For $${DY("3x-y")}$, at any point where a solution curve has a horizontal tangent, the solution has`, "a relative minimum", ["a relative maximum", "a point of inflection", "either a maximum or a minimum, depending on the point"], r`$\dfrac{d^2y}{dx^2}=3-\dfrac{dy}{dx}=3\gt0$ wherever $\dfrac{dy}{dx}=0$.`),
    mc("hard", r`For $${DY("y-x")}$, solution curves are concave up at all points $(x,y)$ satisfying`, r`$y\gt x+1$`, [r`$y\lt x+1$`, r`$y\gt x$`, r`$y\lt x$`], r`$\dfrac{d^2y}{dx^2}=y-x-1\gt0$.`),
    mc("hard", LOG + r`A solution with $0\lt y\lt4$ has a point of inflection when`, "$y=2$", ["$y=4$", "$y=1$", "$y=3$"], r`$\dfrac{d^2y}{dx^2}=\dfrac{4-2y}{4}\cdot\dfrac{dy}{dx}$ changes sign at $y=2$.`, L),
    mc("hard", r`Let $y=f(x)$ be the solution of $${DY("y-x")}$ with $f(0)=-1$. The tangent line at $x=0$ gives $f(0.2)\approx-1.2$. This approximation is`, r`an overestimate, because $\dfrac{d^{2}y}{dx^{2}}\lt0$ near $(0,-1)$`, [r`an underestimate, because $\dfrac{d^{2}y}{dx^{2}}\lt0$ near $(0,-1)$`, r`an overestimate, because $\dfrac{dy}{dx}\lt0$ near $(0,-1)$`, r`an underestimate, because $\dfrac{dy}{dx}\lt0$ near $(0,-1)$`], r`$\dfrac{d^2y}{dx^2}=y-x-1=-2$ at $(0,-1)$: the graph is concave down, so it lies below its tangent line.`),
    num("hard", r`For $${DY("x^{2}y")}$, find the value of $\dfrac{d^{2}y}{dx^{2}}$ at the point $(1,2)$.`, 6, 0, r`$xy(2+x^3)=2(3)$.`),
  ];
}

// ── 7.5 Separation of Variables ───────────────
function g75() {
  return [
    mc("easy", r`A differential equation is separable if it can be written as`, r`$\dfrac{dy}{dx}=g(x)\,h(y)$`, [r`$\dfrac{dy}{dx}=g(x)+h(y)$`, r`$\dfrac{dy}{dx}=g(x+y)$`, r`$\dfrac{dy}{dx}=g(x)$ only`], r`A product of a function of $x$ and a function of $y$.`),
    mc("easy", r`Which differential equation is NOT separable?`, r`$${DY("x+y")}$`, [r`$${DY("xy+y")}$`, r`$${DY("e^{x-y}")}$`, r`$${DY(r`\dfrac{\sin x}{y}`)}$`], r`A sum cannot be split into an $x$-factor times a $y$-factor. $xy+y=y(x+1)$ and $e^{x-y}=e^xe^{-y}$ can.`),
    mc("easy", r`Separating the variables in $${DY(r`\dfrac{4x}{y}`)}$ gives`, r`$y\,dy=4x\,dx$`, [r`$\dfrac{dy}{y}=4x\,dx$`, r`$y\,dx=4x\,dy$`, r`$dy=\dfrac{4x}{y}$`], r`Multiply both sides by $y\,dx$.`),
    mc("easy", r`What is the general solution of $${DY("5y")}$?`, r`$y=Ae^{5x}$`, [r`$y=e^{5x}+C$`, r`$y=5x+C$`, r`$y=\dfrac{5y^{2}}{2}+C$`], r`$\ln|y|=5x+C$, so $y=Ae^{5x}$.`),
    mc("medium", r`What is the general solution of $${DY("4xy")}$?`, r`$y=Ae^{2x^{2}}$`, [r`$y=e^{2x^{2}}+C$`, r`$y=2x^{2}y+C$`, r`$y=Ae^{4x}$`], r`$\dfrac{dy}{y}=4x\,dx$ gives $\ln|y|=2x^2+C$.`),
    mc("medium", r`The general solution of $${DY(r`\dfrac{4x}{y}`)}$ satisfies`, r`$y^{2}=4x^{2}+C$`, [r`$y=2x+C$`, r`$y^{2}=4x^{2}$`, r`$y=\dfrac{2x^{2}}{y}+C$`], r`$\dfrac{y^2}{2}=2x^2+C_0$.`),
    mc("medium", r`What is the general solution of $${DY(r`y^{2}\sin x`)}$ (for $y\neq0$)?`, r`$y=\dfrac{1}{\cos x+C}$`, [r`$y=-\dfrac{1}{\cos x+C}$`, r`$y=\dfrac{1}{\cos x}+C$`, r`$y=Ae^{-\cos x}$`], r`$y^{-2}dy=\sin x\,dx$ gives $-\dfrac1y=-\cos x+C_0$.`),
    mc("medium", r`What is the general solution of $${DY("3x^{2}y^{2}")}$ (for $y\neq0$)?`, r`$y=-\dfrac{1}{x^{3}+C}$`, [r`$y=\dfrac{1}{x^{3}+C}$`, r`$y=-\dfrac{1}{x^{3}}+C$`, r`$y=Ae^{x^{3}}$`], r`$-\dfrac1y=x^3+C$.`),
    mc("medium", r`What is the general solution of $${DY(r`\dfrac{2x}{e^{y}}`)}$?`, r`$y=\ln\left(x^{2}+C\right)$`, [r`$y=\ln\left(x^{2}\right)+C$`, r`$y=e^{x^{2}}+C$`, r`$y=x^{2}+C$`], r`$e^y\,dy=2x\,dx$ gives $e^y=x^2+C$. The constant sits inside the logarithm.`),
    mc("medium", r`What is the general solution of $${DY("e^{x+y}")}$?`, r`$y=-\ln\left(C-e^{x}\right)$`, [r`$y=x+C$`, r`$y=\ln\left(e^{x}+C\right)$`, r`$y=-\ln\left(e^{x}\right)+C$`], r`$e^{-y}\,dy=e^x\,dx$ gives $-e^{-y}=e^x+C_0$, so $e^{-y}=C-e^x$.`),
    mc("medium", r`When solving by separation of variables, the constant of integration must be introduced`, "at the step where the two sides are integrated", ["only after solving for $y$", "only if an initial condition is given", "before separating the variables"], r`Adding it later puts it in the wrong place.`),
    mc("hard", r`What is the general solution of $${DY(r`\dfrac{3x^{2}}{y^{2}}`)}$?`, r`$y=\sqrt[3]{3x^{3}+C}$`, [r`$y=\sqrt[3]{x^{3}+C}$`, r`$y=\sqrt[3]{3x^{3}}+C$`, r`$y=\sqrt{3x^{3}+C}$`], r`$y^2\,dy=3x^2\,dx$ gives $\dfrac{y^3}{3}=x^3+C_0$.`),
    mc("hard", r`What is the general solution of $${DY(r`x\left(1+y^{2}\right)`)}$?`, r`$y=\tan\!\left(\dfrac{x^{2}}{2}+C\right)$`, [r`$y=\tan\!\left(\dfrac{x^{2}}{2}\right)+C$`, r`$y=\arctan\!\left(\dfrac{x^{2}}{2}+C\right)$`, r`$y=Ae^{x^{2}/2}$`], r`$\dfrac{dy}{1+y^2}=x\,dx$ gives $\arctan y=\dfrac{x^2}{2}+C$.`),
    mc("hard", r`A student solves $${DY("4xy")}$ by writing $\ln|y|=2x^{2}$, then $y=e^{2x^{2}}+C$. What is the error?`, "The constant of integration was added after solving for $y$ instead of when integrating.", ["The variables were not separated.", "The antiderivative of $4x$ is wrong.", "The absolute value was dropped."], r`The constant belongs in $\ln|y|=2x^2+C$, which becomes a multiplying constant: $y=Ae^{2x^2}$.`),
    mc("hard", r`For $x\gt0$, what is the general solution of $${DY(r`\dfrac{3y}{x}`)}$?`, r`$y=Ax^{3}$`, [r`$y=3x+C$`, r`$y=\dfrac{A}{x^{3}}$`, r`$y=Ae^{3x}$`], r`$\ln|y|=3\ln|x|+C$ gives $|y|=e^C x^3$.`),
    mc("hard", r`For $x\gt0$, what is the general solution of $${DY(r`\dfrac{y+1}{x}`)}$?`, r`$y=Ax-1$`, [r`$y=Ax+1$`, r`$y=x-1+C$`, r`$y=A(x-1)$`], r`$\ln|y+1|=\ln|x|+C$ gives $y+1=Ax$.`),
  ];
}

// ── 7.6 Particular Solutions ───────────────
function g76() {
  const c = { calc: true };
  return [
    mc("easy", r`What is the particular solution of $${DY("-2y")}$ with $y(0)=7$?`, r`$y=7e^{-2x}$`, [r`$y=e^{-2x}+7$`, r`$y=e^{-2x}+6$`, r`$y=7e^{-x}$`], r`$y=Ae^{-2x}$ with $A=7$.`),
    mc("easy", r`When solving a separable equation with an initial condition, the best moment to use the condition is`, "immediately after integrating, while the constant is still an additive $C$", ["before separating the variables", "only after solving for $y$", "after checking the domain"], r`Finding $C$ is then a single substitution.`),
    mc("easy", r`What is the particular solution of $${DY(r`\dfrac{4x}{y}`)}$ with $y(1)=4$?`, r`$y=\sqrt{4x^{2}+12}$`, [r`$y=-\sqrt{4x^{2}+12}$`, r`$y=\sqrt{4x^{2}+16}$`, r`$y=2x+2$`], r`$y^2=4x^2+C$ with $16=4+C$; $y$ is positive at the initial point.`),
    mc("medium", r`What is the particular solution of $${DY(r`\dfrac{4x}{y}`)}$ with $y(0)=-3$?`, r`$y=-\sqrt{4x^{2}+9}$`, [r`$y=\sqrt{4x^{2}+9}$`, r`$y=\pm\sqrt{4x^{2}+9}$`, r`$y=-\sqrt{4x^{2}-9}$`], r`$y^2=4x^2+9$, and $y\lt0$ at the initial point selects the negative root.`),
    mc("medium", r`What is the particular solution of $${DY("2y^{2}")}$ with $y(0)=1$?`, r`$y=\dfrac{1}{1-2x}$`, [r`$y=\dfrac{1}{1+2x}$`, r`$y=\dfrac{1}{2x-1}$`, r`$y=1-2x$`], r`$-\dfrac1y=2x+C$ with $C=-1$.`),
    mc("medium", r`The particular solution of $${DY("2y^{2}")}$ with $y(0)=1$ is $y=\dfrac{1}{1-2x}$. What is its domain?`, r`$x\lt\dfrac{1}{2}$`, [r`all $x\neq\dfrac{1}{2}$`, r`$x\gt\dfrac{1}{2}$`, "all real numbers"], r`The domain is the single interval containing the initial point $x=0$, up to the break at $x=\tfrac12$.`),
    mc("medium", r`What is the particular solution of $${DY(r`(4-y)\cos x`)}$ with $y(0)=1$?`, r`$y=4-3e^{-\sin x}$`, [r`$y=4+3e^{-\sin x}$`, r`$y=4-3e^{\sin x}$`, r`$y=1+e^{-\sin x}$`], r`$-\ln|4-y|=\sin x-\ln3$, and $4-y\gt0$ at the initial point.`),
    mc("medium", r`What is the particular solution of $${DY("2x(y+1)")}$ with $y(0)=2$?`, r`$y=3e^{x^{2}}-1$`, [r`$y=e^{x^{2}}+1$`, r`$y=2e^{x^{2}}$`, r`$y=-1-3e^{x^{2}}$`], r`$\ln|y+1|=x^2+\ln3$, and $y+1\gt0$ at the initial point.`),
    mc("medium", r`What is the particular solution of $${DY("3x^{2}y^{2}")}$ with $y(0)=1$?`, r`$y=\dfrac{1}{1-x^{3}}$`, [r`$y=\dfrac{1}{1+x^{3}}$`, r`$y=-\dfrac{1}{1-x^{3}}$`, r`$y=1-x^{3}$`], r`$-\dfrac1y=x^3-1$.`),
    mc("medium", r`The particular solution of $${DY("3x^{2}y^{2}")}$ with $y(0)=1$ is $y=\dfrac{1}{1-x^{3}}$. What is its domain?`, r`$x\lt1$`, [r`all $x\neq1$`, r`$x\gt1$`, "all real numbers"], r`One interval containing $x=0$, bounded by the break at $x=1$.`),
    mc("hard", r`For $x\gt0$, what is the particular solution of $${DY(r`\dfrac{3y}{x}`)}$ with $y(1)=-2$?`, r`$y=-2x^{3}$`, [r`$y=2x^{3}$`, r`$y=-\dfrac{2}{x^{3}}$`, r`$y=x^{3}-3$`], r`$|y|=2x^3$, and $y\lt0$ at the initial point.`),
    mc("hard", r`What is the particular solution of $${DY("4+y^{2}")}$ with $y(0)=0$, and its domain?`, r`$y=2\tan(2x)$ for $-\dfrac{\pi}{4}\lt x\lt\dfrac{\pi}{4}$`, [r`$y=2\tan(2x)$ for all $x$ where it is defined`, r`$y=2\arctan(2x)$ for all real $x$`, r`$y=\tan(2x)$ for $-\dfrac{\pi}{4}\lt x\lt\dfrac{\pi}{4}$`], r`$\dfrac12\arctan\dfrac y2=x$, so $y=2\tan(2x)$, on the one interval around $x=0$ where it is continuous.`),
    mc("hard", r`A function satisfies $${DY(r`\sin\left(x^{2}\right)`)}$ and $y(0)=1$. What is $y(2)$?`, "$1.805$", ["$0.805$", "$0.243$", "$2.805$"], r`$y(2)=1+\displaystyle\int_0^2\sin\left(t^2\right)dt=1+0.805$.`, c),
    mc("hard", r`What is the particular solution of $${DY(r`(4-y)\cos x`)}$ with $y(0)=6$?`, r`$y=4+2e^{-\sin x}$`, [r`$y=4-2e^{-\sin x}$`, r`$y=6e^{-\sin x}$`, r`$y=4+2e^{\sin x}$`], r`$|4-y|=2e^{-\sin x}$, and $4-y=-2\lt0$ at the initial point, so $4-y=-2e^{-\sin x}$.`),
    mc("hard", r`What is the particular solution of $${DY(r`-\dfrac{x}{y}`)}$ with $y(0)=5$, and its domain?`, r`$y=\sqrt{25-x^{2}}$ for $-5\lt x\lt5$`, [r`$y=\sqrt{25-x^{2}}$ for $-5\le x\le5$`, r`$y=\pm\sqrt{25-x^{2}}$ for $-5\lt x\lt5$`, r`$y=\sqrt{25+x^{2}}$ for all real $x$`], r`$y^2=25-x^2$ with $y\gt0$. At $x=\pm5$, $y=0$ and the differential equation is undefined, so the endpoints are excluded.`),
    num("hard", r`A function satisfies $${DY("4xy")}$ and $y(0)=3$. Find $y(1)$ to three decimal places.`, 22.167, 0.001, r`$y=3e^{2x^2}$, so $y(1)=3e^2$.`, c),
  ];
}

// ── 7.7 Exponential Growth and Decay ───────────────
function g77() {
  const c = { calc: true };
  return [
    mc("easy", r`If $\dfrac{dy}{dt}=ky$ and $y(0)=y_{0}$, then $y=$`, r`$y_{0}e^{kt}$`, [r`$y_{0}+kt$`, r`$y_{0}t^{k}$`, r`$ke^{y_{0}t}$`], r`A rate proportional to the amount gives exponential change.`),
    mc("easy", r`What is the solution of $\dfrac{dy}{dt}=-0.2y$ with $y(0)=30$?`, r`$y=30e^{-0.2t}$`, [r`$y=30-0.2t$`, r`$y=-0.2e^{30t}$`, r`$y=30e^{0.2t}$`], r`$y_0=30$ and $k=-0.2$.`),
    mc("easy", r`A quantity grows according to $\dfrac{dy}{dt}=0.05y$. What is its doubling time?`, "$13.863$", ["$20$", "$40$", "$0.035$"], r`$\dfrac{\ln2}{0.05}$.`, c),
    num("easy", r`A population satisfies $\dfrac{dP}{dt}=0.03P$ with $P(0)=800$. Find $P(10)$ to the nearest whole number.`, 1080, 0.5, r`$800e^{0.3}=1079.9$.`, c),
    mc("medium", r`A colony of bacteria grows at a rate proportional to its size. It has 200 cells at $t=0$ and 800 cells at $t=4$ hours. How many cells are there at $t=6$?`, "$1600$", ["$1100$", "$1200$", "$3200$"], r`$e^{4k}=4$, so $e^{6k}=4^{3/2}=8$. The option 1100 assumes linear growth of 150 per hour.`),
    mc("medium", r`For the bacteria that grow from 200 to 800 cells in 4 hours, what is the growth constant $k$?`, r`$\dfrac{\ln4}{4}$`, [r`$\ln4$`, "$150$", r`$\dfrac{4}{\ln4}$`], r`$800=200e^{4k}$.`),
    mc("medium", r`A radioactive substance has a half-life of 12 years. What fraction of a sample remains after 30 years?`, "about $0.177$", ["about $0.400$", "about $0.250$", "about $0.125$"], r`$\left(\tfrac12\right)^{30/12}=\left(\tfrac12\right)^{2.5}$.`, c),
    mc("medium", r`A substance has a half-life of 30 years and decays according to $\dfrac{dy}{dt}=ky$. What is $k$?`, r`$-\dfrac{\ln2}{30}$`, [r`$\dfrac{\ln2}{30}$`, r`$-\dfrac{1}{30}$`, r`$-\dfrac{30}{\ln2}$`], r`$e^{30k}=\tfrac12$. For decay $k$ is negative.`),
    mc("medium", r`An investment grows at a rate proportional to its value, from 1000 dollars to 1500 dollars in 6 years. What is it worth after 12 years?`, "2250 dollars", ["2000 dollars", "3000 dollars", "2500 dollars"], r`It is multiplied by 1.5 every 6 years: $1000(1.5)^2$.`),
    mc("medium", r`The mass $M$ of a substance decays at a rate proportional to $M$, from 80 grams initially to 60 grams after 5 days. Which expression gives $M(t)$?`, r`$80\left(\dfrac{3}{4}\right)^{t/5}$`, [r`$80-4t$`, r`$80\left(\dfrac{3}{4}\right)^{5t}$`, r`$60e^{-5t}$`], r`$e^{5k}=\tfrac34$, so $e^{kt}=\left(\tfrac34\right)^{t/5}$.`),
    mc("medium", r`What is the solution of $\dfrac{dT}{dt}=-0.1(T-22)$ with $T(0)=90$?`, r`$T=22+68e^{-0.1t}$`, [r`$T=90e^{-0.1t}$`, r`$T=22+90e^{-0.1t}$`, r`$T=68+22e^{-0.1t}$`], r`The difference $T-22$ starts at 68 and decays exponentially.`),
    mc("hard", r`Tea cools according to $T=22+68e^{-0.1t}$, with $T$ in °C and $t$ in minutes. When does it reach 50 °C?`, "$t=8.873$", ["$t=5.878$", "$t=3.075$", "$t=12.238$"], r`$e^{-0.1t}=\dfrac{28}{68}$, so $t=10\ln\dfrac{68}{28}$. The option 5.878 ignores the room temperature.`),
    mc("hard", r`A quantity satisfies $\dfrac{dy}{dt}=ky$ with $y(1)=6$ and $y(3)=54$. What is $y(0)$?`, "$2$", ["$-18$", r`$\dfrac{2}{3}$`, "$1$"], r`$e^{2k}=9$, so $e^k=3$ and $y(0)=\dfrac{6}{3}$. The option $-18$ assumes linear change.`),
    mc("hard", r`A metal rod at 220 °C is placed in a 20 °C room and cools according to $\dfrac{dT}{dt}=k(T-20)$. After 5 minutes it is at 120 °C. What is its temperature after 10 minutes?`, "70 °C", ["20 °C", "62.5 °C", "45 °C"], r`The difference $T-20$ halves every 5 minutes: 200, 100, 50. So $T=20+50$.`),
    mc("hard", r`A substance decays exponentially from 80 grams to 60 grams in 5 days. What is its half-life?`, "about $12.047$ days", ["about $10$ days", "about $8.333$ days", "about $17.380$ days"], r`$k=\tfrac15\ln\tfrac34$, and the half-life is $\dfrac{\ln2}{|k|}$.`, c),
    mc("hard", r`For the cooling model $\dfrac{dT}{dt}=-0.1(T-22)$ with $T(0)=90$, what is $${LIM(r`\infty`, "T(t)", "t")}$?`, "$22$", ["$0$", "$90$", "$68$"], r`$68e^{-0.1t}\to0$, so $T\to22$, the room temperature.`),
    num("hard", r`A quantity grows exponentially with a doubling time of 5 years. Find its growth constant $k$ to three decimal places.`, 0.139, 0.001, r`$k=\dfrac{\ln2}{5}$.`, c),
  ];
}

export default [
  { code: "7.1", gen: g71 },
  { code: "7.2", gen: g72 },
  { code: "7.3", gen: g73 },
  { code: "7.4", gen: g74 },
  { code: "7.5", gen: g75 },
  { code: "7.6", gen: g76 },
  { code: "7.7", gen: g77 },
];
