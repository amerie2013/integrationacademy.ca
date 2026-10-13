// AP Calculus AB exam prep — Unit 5 (Analysing Functions): question bank.
// Original questions in exam format; see u1.mjs for the conventions.
import { mc, num, tbl } from "./helpers.mjs";
import { plot, C } from "../apcalc/fig.mjs";

const r = String.raw;

// ── figures ──
// f'(x): line segments through (−4,−2) (−2,2) (0,0) (1,2) (3,−2) (6,4); zeros at −3, 0 (touch), 2, 4
const figFp = () => {
  const g = plot({ w: 430, h: 300, x: [-5, 7], y: [-3, 5], alt: "Piecewise-linear graph of f prime" });
  g.poly([[-4, -2], [-2, 2], [0, 0], [1, 2], [3, -2], [6, 4]]).dot(-4, -2).dot(6, 4).label(4.6, 3.6, "y = f ′(x)");
  return g;
};
// f(x) = x³ − 3x² − 9x + 5 with four marked points
const cubic = (x) => x ** 3 - 3 * x * x - 9 * x + 5;
const figCubic = () => {
  const g = plot({ w: 400, h: 330, x: [-3.5, 5.5], y: [-26, 14], stepY: 4, tickEvery: 2, alt: "Graph of f with points A, B, C and D marked" });
  g.curve(cubic, -2.6, 4.75);
  for (const [x, n] of [[-2, "A"], [0, "B"], [2, "C"], [4, "D"]]) g.dot(x, cubic(x), { color: C.alt }).label(x + 0.18, cubic(x) + 1.6, n, { color: C.alt, size: 15 });
  return g;
};
// the curve x² − xy + y² = 27 (the lesson uses a different curve)
const figImp = () => {
  const top = (x) => (x + Math.sqrt(Math.max(0, 108 - 3 * x * x))) / 2, bot = (x) => (x - Math.sqrt(Math.max(0, 108 - 3 * x * x))) / 2;
  const g = plot({ w: 360, h: 360, x: [-8, 8], y: [-8, 8], stepX: 2, stepY: 2, alt: "The curve x squared minus xy plus y squared equals 27" });
  g.curve(top, -6, 6, { n: 1400 }).curve(bot, -6, 6, { n: 1400 });
  return g;
};
const FP = r`The graph of $f'$, the derivative of a function $f$, is shown for $-4\le x\le6$. It consists of line segments. `;
const CU = r`The graph of a twice-differentiable function $f$ is shown, with four points marked. `;
const IMP = r`The curve $x^{2}-xy+y^{2}=27$ is shown. For this curve, $\dfrac{dy}{dx}=\dfrac{y-2x}{2y-x}$. `;
const F = r`Let $f(x)=x^{3}+3x^{2}-9x-2$. `;

// ── 5.1 The Mean Value Theorem ───────────────
function g51() {
  return [
    mc("easy", r`The Mean Value Theorem applies to a function $f$ on $[a,b]$ provided that $f$ is`, "continuous on $[a,b]$ and differentiable on $(a,b)$", ["continuous on $[a,b]$", "differentiable on $(a,b)$ with $f(a)=f(b)$", "defined on $[a,b]$ with $f(a)\\neq f(b)$"], r`Both hypotheses are required. $f(a)=f(b)$ is the extra condition of Rolle's Theorem.`),
    mc("easy", r`If the Mean Value Theorem applies to $f$ on $[a,b]$, it guarantees a number $c$ in $(a,b)$ such that`, r`$f'(c)=\dfrac{f(b)-f(a)}{b-a}$`, [r`$f(c)=\dfrac{f(a)+f(b)}{2}$`, r`$f'(c)=0$`, r`$f(c)=\dfrac{f(b)-f(a)}{b-a}$`], r`The instantaneous rate equals the average rate somewhere in the interval.`),
    mc("easy", r`What value of $c$ is guaranteed by the Mean Value Theorem for $f(x)=x^{2}+2x$ on $[0,4]$?`, "$2$", ["$-1$", "$3$", "$4$"], r`Average rate $\dfrac{24-0}{4}=6$, and $2c+2=6$ gives $c=2$. The option $-1$ is where $f'=0$.`),
    num("easy", r`Find the value of $c$ guaranteed by the Mean Value Theorem for $f(x)=x^{2}$ on $[2,8]$.`, 5, 0, r`Average rate $\dfrac{64-4}{6}=10$, and $2c=10$.`),
    mc("medium", r`What value of $c$ is guaranteed by the Mean Value Theorem for $f(x)=x^{3}$ on $[0,6]$?`, r`$2\sqrt3$`, ["$6$", "$3$", r`$\sqrt6$`], r`Average rate 36, and $3c^2=36$ gives $c=2\sqrt3$.`),
    mc("medium", r`What value of $c$ is guaranteed by the Mean Value Theorem for $f(x)=\sqrt{x}$ on $[0,9]$?`, r`$\dfrac{9}{4}$`, ["$3$", r`$\dfrac{9}{2}$`, r`$\dfrac{3}{2}$`], r`Average rate $\dfrac13$, and $\dfrac{1}{2\sqrt c}=\dfrac13$ gives $\sqrt c=\dfrac32$.`),
    mc("medium", r`A car's velocity $v(t)$, in m/s, is a differentiable function of $t$ seconds. ${tbl("t", [0, 3, 7, 10], "v(t)", [12, 20, 14, 26])} Which statement is guaranteed by the Mean Value Theorem?`, r`There is a time $t$ in $(3,7)$ at which the acceleration is $-1.5$ m/s².`, [r`There is a time $t$ in $(3,7)$ at which the velocity is $17$ m/s.`, r`There is a time $t$ in $(3,7)$ at which the acceleration is $0$.`, r`The velocity is decreasing throughout $(3,7)$.`], r`$\dfrac{v(7)-v(3)}{7-3}=-1.5$ is a value of $v'$. The statement about velocity 17 is true, but by the Intermediate Value Theorem.`),
    mc("medium", r`Why does the Mean Value Theorem not apply to $f(x)=|x-2|$ on $[0,5]$?`, "$f$ is not differentiable at $x=2$.", ["$f$ is not continuous at $x=2$.", "$f(0)\\neq f(5)$", "$f$ is not defined at $x=2$."], r`The graph has a corner at $x=2$, inside the interval.`),
    mc("medium", r`A differentiable function $P$ has $P(1)=40$ and $P(9)=16$. Which must be true?`, r`$P'(c)=-3$ for some $c$ in $(1,9)$`, [r`$P'(c)=3$ for some $c$ in $(1,9)$`, r`$P'(c)=0$ for some $c$ in $(1,9)$`, r`$P'(x)\lt0$ for all $x$ in $(1,9)$`], r`$\dfrac{16-40}{9-1}=-3$. The function need not decrease throughout.`),
    mc("medium", r`A differentiable function $g$ has $g(0)=5$ and $g(4)=5$. Which must be true?`, r`$g'(c)=0$ for some $c$ in $(0,4)$`, [r`$g(x)=5$ for all $x$ in $(0,4)$`, r`$g'(c)=5$ for some $c$ in $(0,4)$`, r`$g$ has a relative maximum in $(0,4)$`], r`Rolle's Theorem: the average rate is 0.`),
    mc("medium", r`Why does the Mean Value Theorem not apply to $f(x)=\dfrac{1}{x-2}$ on $[0,4]$?`, "$f$ is not continuous on $[0,4]$.", ["$f(0)\\neq f(4)$", "$f$ is decreasing on both sides of $2$.", "$f$ has no critical points."], r`$f$ is undefined at $x=2$.`),
    mc("hard", r`A function $f$ is twice differentiable with $f'(1)=4$ and $f'(5)=4$. Which must be true?`, r`$f''(c)=0$ for some $c$ in $(1,5)$`, [r`$f'(x)=4$ for all $x$ in $(1,5)$`, r`$f(5)-f(1)=16$`, r`$f''(c)=4$ for some $c$ in $(1,5)$`], r`Apply the Mean Value Theorem to $f'$ on $[1,5]$: its average rate of change is 0.`),
    mc("hard", r`A differentiable function $f$ has $f(2)=3$ and $f(6)=11$. Which of the following must be true? I. $f(c)=7$ for some $c$ in $(2,6)$. II. $f'(c)=2$ for some $c$ in $(2,6)$. III. $f'(c)=0$ for some $c$ in $(2,6)$.`, "I and II only", ["I only", "II only", "I, II and III"], r`I is the Intermediate Value Theorem (7 is between 3 and 11). II is the Mean Value Theorem ($\tfrac{11-3}{4}=2$). Nothing forces III.`),
    mc("hard", r`A car passes one toll booth at 2:00 and another, 180 km further on, at 3:30. Which conclusion follows from the Mean Value Theorem?`, "At some instant the car's speed was exactly 120 km/h.", ["The car's speed was 120 km/h for the whole journey.", "The car's speed never exceeded 120 km/h.", "The car's speed was 120 km/h at 2:45."], r`The average rate is $\dfrac{180}{1.5}=120$ km/h; the theorem guarantees it is attained at some instant, not when.`),
    mc("hard", r`For $f(x)=x^{3}-x$ on $[-1,2]$, how many values of $c$ in $(-1,2)$ satisfy the conclusion of the Mean Value Theorem?`, "$1$", ["$0$", "$2$", "$3$"], r`Average rate $\dfrac{6-0}{3}=2$. $3c^2-1=2$ gives $c=\pm1$, but $c=-1$ is an endpoint, not in the open interval.`),
    mc("hard", r`A differentiable function $f$ has $f(0)=-1$ and $f'(x)\le3$ for all $x$. What is the largest possible value of $f(4)$?`, "$11$", ["$12$", "$13$", "$3$"], r`By the Mean Value Theorem $\dfrac{f(4)-f(0)}{4}=f'(c)\le3$, so $f(4)\le-1+12$.`),
    num("hard", r`Find the value of $c$ guaranteed by the Mean Value Theorem for $f(x)=\ln x$ on $[1,e]$, to three decimal places.`, 1.718, 0.001, r`Average rate $\dfrac{1}{e-1}$, and $\dfrac1c=\dfrac{1}{e-1}$ gives $c=e-1$.`, { calc: true }),
  ];
}

// ── 5.2 Extreme Values and Critical Points ───────────────
function g52() {
  return [
    mc("easy", r`A number $c$ in the domain of $f$ is a critical point of $f$ if`, r`$f'(c)=0$ or $f'(c)$ does not exist`, [r`$f(c)=0$`, r`$f'(c)=0$ only`, r`$f''(c)=0$`], r`Points where the derivative fails to exist count too.`),
    mc("easy", r`The Extreme Value Theorem guarantees that $f$ has an absolute maximum on an interval when $f$ is`, "continuous on a closed interval $[a,b]$", ["continuous on an open interval $(a,b)$", "differentiable on an open interval $(a,b)$", "defined on a closed interval $[a,b]$"], r`Both continuity and a closed interval are needed.`),
    mc("easy", F + r`What are the critical points of $f$?`, "$x=-3$ and $x=1$", ["$x=-1$ only", "$x=3$ and $x=-1$", "$x=0$ and $x=-2$"], r`$f'(x)=3(x+3)(x-1)$. The value $x=-1$ is where $f''=0$.`),
    num("easy", r`Find the critical point of $f(x)=x^{2}-6x+2$.`, 3, 0, r`$f'(x)=2x-6=0$.`),
    mc("medium", r`What are the critical points of $f(x)=x^{1/3}(x-4)$, for which $f'(x)=\dfrac{4(x-1)}{3x^{2/3}}$?`, "$x=0$ and $x=1$", ["$x=1$ only", "$x=0$ and $x=4$", "$x=4$ only"], r`$f'(1)=0$, and $f'(0)$ does not exist while 0 is in the domain of $f$.`),
    mc("medium", r`What are the critical points of $f(x)=x\,e^{-2x}$?`, r`$x=\dfrac{1}{2}$ only`, ["$x=0$ only", r`$x=0$ and $x=\dfrac{1}{2}$`, r`$x=-\dfrac{1}{2}$ only`], r`$f'(x)=e^{-2x}(1-2x)$, and $e^{-2x}$ is never zero.`),
    mc("medium", r`What are the critical points of $f(x)=x+\dfrac{9}{x}$?`, "$x=-3$ and $x=3$", ["$x=-3$, $x=0$ and $x=3$", "$x=0$ only", "$x=3$ only"], r`$f'(x)=1-\dfrac{9}{x^2}$. $x=0$ is not in the domain of $f$, so it is not a critical point.`),
    mc("medium", r`What are the critical points of $f(x)=|x-3|$?`, "$x=3$ only", ["There are none.", "$x=0$ only", "$x=-3$ and $x=3$"], r`$f'(x)=\pm1$ is never zero, but $f'(3)$ does not exist and 3 is in the domain.`),
    mc("medium", r`What are the critical points of $f(x)=x^{2}e^{-x}$?`, "$x=0$ and $x=2$", ["$x=0$ only", "$x=-2$ and $x=0$", "$x=2$ only"], r`$f'(x)=x\,e^{-x}(2-x)$.`),
    mc("medium", r`What are the critical points of $f(x)=x+2\cos x$ on the interval $(0,2\pi)$?`, r`$\dfrac{\pi}{6}$ and $\dfrac{5\pi}{6}$`, [r`$\dfrac{\pi}{3}$ and $\dfrac{5\pi}{3}$`, r`$\dfrac{7\pi}{6}$ and $\dfrac{11\pi}{6}$`, r`$\dfrac{\pi}{3}$ and $\dfrac{2\pi}{3}$`], r`$f'(x)=1-2\sin x=0$ when $\sin x=\tfrac12$.`),
    mc("hard", r`How many critical points does $f(x)=x^{4}-2x^{2}$ have?`, "$3$", ["$1$", "$2$", "$4$"], r`$f'(x)=4x(x-1)(x+1)$: $x=-1,0,1$.`),
    mc("hard", r`Which statement about $f(x)=x^{5}$ is true?`, "$f$ has a critical point at $x=0$ but no relative extremum there.", ["$f$ has a relative minimum at $x=0$.", "$f$ has no critical points.", "$f$ has a relative maximum at $x=0$."], r`$f'(0)=0$, but $f'(x)=5x^4$ is positive on both sides.`),
    mc("hard", r`A function $f$ is defined for all $x\neq-3$, with $f'(x)=\dfrac{\left(x^{2}-4\right)(x-1)}{x+3}$. How many critical points does $f$ have?`, "$3$", ["$4$", "$2$", "$1$"], r`$f'=0$ at $x=-2,1,2$. $x=-3$ is not in the domain, so it is not a critical point.`),
    mc("hard", r`Which statement about $f(x)=\dfrac{1}{x^{2}}$ on the interval $(0,2]$ is true?`, "$f$ has an absolute minimum but no absolute maximum.", ["$f$ has both an absolute maximum and an absolute minimum.", "$f$ has an absolute maximum but no absolute minimum.", "$f$ has neither."], r`$f$ decreases to its least value $f(2)=\dfrac14$, but grows without bound as $x\to0^+$. The interval is not closed, so the Extreme Value Theorem does not apply.`),
    mc("hard", r`Which statement about $f(x)=\sqrt[3]{x-1}$ is true?`, "$x=1$ is a critical point, but $f$ has no relative extremum there.", ["$f$ has no critical points.", "$f$ has a relative minimum at $x=1$.", "$f$ is not continuous at $x=1$."], r`$f'(x)=\dfrac{1}{3(x-1)^{2/3}}$ is undefined at 1 (a vertical tangent) and positive on both sides.`),
    num("hard", r`Find the critical point of $f(x)=x^{2}\ln x$, to three decimal places.`, 0.607, 0.001, r`$f'(x)=x(2\ln x+1)=0$ at $x=e^{-1/2}$.`, { calc: true }),
  ];
}

// ── 5.3 Increasing and Decreasing Intervals ───────────────
function g53() {
  const p = { fig: figFp() };
  return [
    mc("easy", r`If $f'(x)\gt0$ for all $x$ in an interval, then on that interval $f$ is`, "increasing", ["positive", "concave up", "decreasing"], r`A positive derivative means the function is increasing. It says nothing about the sign of $f$.`),
    mc("easy", F + r`On which intervals is $f$ increasing?`, r`$(-\infty,-3)$ and $(1,\infty)$`, [r`$(-3,1)$`, r`$(-1,\infty)$`, r`$(-\infty,-1)$`], r`$f'(x)=3(x+3)(x-1)\gt0$ when $x\lt-3$ or $x\gt1$.`),
    mc("easy", FP + r`On which of the following intervals is $f$ increasing?`, r`$-3\lt x\lt0$`, [r`$-4\lt x\lt-2$`, r`$2\lt x\lt4$`, r`$1\lt x\lt3$`], r`$f$ is increasing where the graph of $f'$ is above the $x$-axis.`, p),
    mc("medium", r`On which interval is $f(x)=x^{2}e^{-x}$ increasing?`, r`$(0,2)$`, [r`$(-\infty,0)$`, r`$(2,\infty)$`, r`$(-2,0)$`], r`$f'(x)=x\,e^{-x}(2-x)\gt0$ for $0\lt x\lt2$.`),
    mc("medium", r`On which interval is $f(x)=x\,e^{-2x}$ increasing?`, r`$\left(-\infty,\dfrac{1}{2}\right)$`, [r`$\left(\dfrac{1}{2},\infty\right)$`, r`$(0,\infty)$`, r`$(-\infty,0)$`], r`$f'(x)=e^{-2x}(1-2x)\gt0$ when $x\lt\tfrac12$.`),
    mc("medium", r`For $x\gt0$, on which interval is $f(x)=x+\dfrac{9}{x}$ decreasing?`, r`$(0,3)$`, [r`$(3,\infty)$`, r`$(0,9)$`, r`$(0,\infty)$`], r`$f'(x)=\dfrac{x^2-9}{x^2}\lt0$ when $0\lt x\lt3$.`),
    mc("medium", FP + r`On which intervals is $f$ decreasing?`, r`$(-4,-3)$ and $(2,4)$`, [r`$(-2,0)$ and $(1,3)$`, r`$(-4,-2)$ and $(3,6)$`, r`$(-3,2)$`], r`$f$ is decreasing where $f'\lt0$. The intervals $(-2,0)$ and $(1,3)$ are where $f'$ is decreasing, which concerns concavity.`, p),
    mc("medium", r`A function has $f'(x)=(x+2)^{2}(x-3)$. On which interval is $f$ increasing?`, r`$(3,\infty)$`, [r`$(-2,3)$`, r`$(-\infty,-2)$ and $(3,\infty)$`, r`$(-2,\infty)$`], r`$(x+2)^2\ge0$, so $f'$ has the sign of $(x-3)$.`),
    mc("medium", r`On which intervals is $f(x)=x^{4}-2x^{2}$ increasing?`, r`$(-1,0)$ and $(1,\infty)$`, [r`$(-\infty,-1)$ and $(0,1)$`, r`$(0,\infty)$`, r`$(-1,1)$`], r`$f'(x)=4x(x-1)(x+1)$ has signs $-,+,-,+$ on the four intervals.`),
    mc("medium", FP + r`On the interval $-2\lt x\lt0$, the function $f$ is`, "increasing, because $f'(x)\\gt0$ there", ["decreasing, because the graph of $f'$ is falling there", "decreasing, because $f'(x)\\lt0$ there", "constant"], r`The graph of $f'$ is falling but still above the axis, so $f$ is increasing (and concave down).`, p),
    mc("hard", r`A function has $f'(x)=x(x-3)^{2}(x+2)$. On which intervals is $f$ increasing?`, r`$(-\infty,-2)$ and $(0,\infty)$`, [r`$(-2,0)$`, r`$(-2,0)$ and $(3,\infty)$`, r`$(-\infty,-2)$ and $(0,3)$ only`], r`The sign is that of $x(x+2)$: positive for $x\lt-2$ and for $x\gt0$. There is no sign change at $x=3$.`),
    mc("hard", r`On which interval within $(0,2\pi)$ is $f(x)=x+2\cos x$ decreasing?`, r`$\left(\dfrac{\pi}{6},\dfrac{5\pi}{6}\right)$`, [r`$\left(0,\dfrac{\pi}{6}\right)$`, r`$\left(\dfrac{\pi}{3},\dfrac{2\pi}{3}\right)$`, r`$\left(\dfrac{5\pi}{6},2\pi\right)$`], r`$f'(x)=1-2\sin x\lt0$ when $\sin x\gt\tfrac12$.`),
    mc("hard", FP + r`A student claims that $f$ is not increasing on $(-3,2)$ because $f'(0)=0$. Which response is correct?`, "The student is wrong: $f'(x)\\gt0$ on both sides of $0$, so $f$ is increasing throughout $(-3,2)$.", ["The student is right: $f$ has a relative maximum at $x=0$.", "The student is right: $f$ is constant near $x=0$.", "The student is wrong: $f$ is decreasing on $(-3,2)$."], r`A single point where $f'=0$ with positive values on both sides does not interrupt the increase.`, p),
    mc("hard", r`For $x\gt0$, on which interval is $f(x)=\dfrac{e^{x}}{x}$ decreasing?`, r`$(0,1)$`, [r`$(1,\infty)$`, r`$(0,e)$`, r`$(0,\infty)$`], r`$f'(x)=\dfrac{e^x(x-1)}{x^2}\lt0$ for $0\lt x\lt1$.`),
    mc("hard", F + r`Which is a correct justification that $f$ is decreasing on $(-3,1)$?`, r`$f'(x)=3(x+3)(x-1)\lt0$ for $-3\lt x\lt1$.`, [r`$f(-3)=25$ and $f(1)=-7$.`, r`$f'(-3)=0$ and $f'(1)=0$.`, r`$f''(x)\lt0$ for $-3\lt x\lt1$.`], r`Decreasing is justified by the sign of $f'$ throughout the interval. Two function values do not show what happens between them.`),
    num("hard", r`The function $f(x)=x^{3}-27x$ is decreasing on the interval $(-a,a)$. Find the largest possible value of $a$.`, 3, 0, r`$f'(x)=3x^2-27\lt0$ for $-3\lt x\lt3$.`),
  ];
}

// ── 5.4 The First Derivative Test ───────────────
function g54() {
  const p = { fig: figFp() };
  return [
    mc("easy", r`If $f$ is continuous at a critical point $c$ and $f'$ changes from positive to negative at $c$, then $f$ has`, "a relative maximum at $c$", ["a relative minimum at $c$", "a point of inflection at $c$", "neither a maximum nor a minimum at $c$"], r`Rising then falling is a peak.`),
    mc("easy", F + r`At what value of $x$ does $f$ have a relative maximum?`, "$x=-3$", ["$x=1$", "$x=-1$", "$x=0$"], r`$f'(x)=3(x+3)(x-1)$ changes from positive to negative at $x=-3$.`),
    mc("easy", F + r`What is the relative minimum value of $f$?`, "$-7$", ["$1$", "$9$", "$25$"], r`The relative minimum occurs at $x=1$, and $f(1)=-7$. The option 1 is the location, not the value.`),
    mc("easy", FP + r`At what value of $x$ does $f$ have a relative maximum?`, "$x=2$", ["$x=-2$", "$x=1$", "$x=0$"], r`$f'$ changes from positive to negative only at $x=2$. The values $-2$ and $1$ are peaks of $f'$, not of $f$.`, p),
    mc("medium", r`For $f(x)=x^{4}-2x^{2}$, which statement is true?`, "$f$ has a relative maximum at $x=0$ and relative minima at $x=\\pm1$.", ["$f$ has a relative minimum at $x=0$ and relative maxima at $x=\\pm1$.", "$f$ has relative minima at $x=0$ and $x=\\pm1$.", "$f$ has no relative extrema."], r`$f'(x)=4x(x-1)(x+1)$ has signs $-,+,-,+$, so $f$ falls, rises, falls and rises.`),
    mc("medium", r`The function $f(x)=x\,e^{-2x}$ has`, r`a relative maximum value of $\dfrac{1}{2e}$ at $x=\dfrac{1}{2}$`, [r`a relative minimum value of $\dfrac{1}{2e}$ at $x=\dfrac{1}{2}$`, r`a relative maximum value of $\dfrac{1}{2}$ at $x=\dfrac{1}{2e}$`, "no relative extrema"], r`$f'(x)=e^{-2x}(1-2x)$ changes from positive to negative at $x=\tfrac12$, and $f\!\left(\tfrac12\right)=\tfrac12e^{-1}$.`),
    mc("medium", r`A function has $f'(x)=(x+2)^{2}(x-3)$. Which statement is true?`, "$f$ has a relative minimum at $x=3$ and no other relative extremum.", ["$f$ has a relative maximum at $x=-2$ and a relative minimum at $x=3$.", "$f$ has relative minima at $x=-2$ and $x=3$.", "$f$ has a relative maximum at $x=3$."], r`$f'$ does not change sign at $x=-2$; it changes from negative to positive at $x=3$.`),
    mc("medium", FP + r`At which values of $x$ does $f$ have a relative minimum?`, "$x=-3$ and $x=4$", ["$x=0$ and $x=3$", "$x=-3$, $x=0$ and $x=4$", "$x=3$ only"], r`$f'$ changes from negative to positive at $x=-3$ and $x=4$. At $x=0$ it does not change sign.`, p),
    mc("medium", r`For $f(x)=x^{1/3}(x-4)$, with $f'(x)=\dfrac{4(x-1)}{3x^{2/3}}$, which statement is true?`, "$f$ has a relative minimum at $x=1$ and no relative extremum at $x=0$.", ["$f$ has a relative maximum at $x=0$ and a relative minimum at $x=1$.", "$f$ has a relative minimum at $x=0$ and a relative maximum at $x=1$.", "$f$ has a relative maximum at $x=1$ only."], r`The denominator is positive for $x\neq0$, so $f'$ is negative on both sides of 0 and changes from negative to positive at $x=1$.`),
    mc("medium", F + r`Which is a correct justification that $f$ has a relative maximum at $x=-3$?`, r`$f'$ changes from positive to negative at $x=-3$.`, [r`$f'(-3)=0$.`, r`$f(-3)=25$ is the largest value of $f$.`, r`$f$ is positive at $x=-3$.`], r`$f'(-3)=0$ only makes $-3$ a candidate; the sign change classifies it.`),
    mc("medium", FP + r`At $x=0$, the function $f$ has`, "neither a relative maximum nor a relative minimum", ["a relative minimum", "a relative maximum", "a discontinuity"], r`$f'(0)=0$ but $f'$ is positive on both sides.`, p),
    mc("hard", r`A function has $f'(x)=x^{2}(x-1)^{3}(x+4)$. Which statement is true?`, "$f$ has a relative maximum at $x=-4$ and a relative minimum at $x=1$.", ["$f$ has a relative minimum at $x=-4$ and a relative maximum at $x=1$.", "$f$ has relative extrema at $x=-4$, $x=0$ and $x=1$.", "$f$ has a relative maximum at $x=0$."], r`$f'$ is positive for $x\lt-4$, negative on $(-4,1)$ (with no sign change at 0) and positive for $x\gt1$.`),
    mc("hard", r`The derivative of $g$ is $g'(x)=(2-x)e^{x}$. Which statement is true?`, "$g$ has a relative maximum at $x=2$.", ["$g$ has a relative minimum at $x=2$.", "$g$ has relative extrema at $x=0$ and $x=2$.", "$g$ has no relative extrema."], r`$e^x\gt0$, so $g'$ changes from positive to negative at $x=2$ only.`),
    mc("hard", r`Which statement about $f(x)=|x-3|$ is true?`, "$f$ has a relative minimum at $x=3$, although $f'(3)$ does not exist.", ["$f$ has no relative extremum, because $f'(3)$ does not exist.", "$f$ has a relative maximum at $x=3$.", "$f$ has a relative minimum at $x=3$ because $f'(3)=0$."], r`$f$ is continuous at 3 and $f'$ changes from $-1$ to $1$. The first derivative test does not need $f'(c)$ to exist.`),
    mc("hard", r`A function has $f'(x)=(x+1)(x-2)^{2}(x-5)$. How many relative extrema does $f$ have?`, "$2$", ["$3$", "$1$", "$0$"], r`$f'$ changes sign at $x=-1$ and $x=5$ but not at $x=2$.`),
    mc("hard", r`A function has $f'(x)=\sin x$ for $0\lt x\lt3\pi$. At which values of $x$ does $f$ have a relative maximum?`, r`$x=\pi$ only`, [r`$x=\pi$ and $x=2\pi$`, r`$x=2\pi$ only`, r`$x=\dfrac{\pi}{2}$ and $x=\dfrac{5\pi}{2}$`], r`$\sin x$ changes from positive to negative at $x=\pi$, and from negative to positive at $x=2\pi$.`),
    num("hard", F + r`Find the relative maximum value of $f$.`, 25, 0, r`It occurs at $x=-3$: $f(-3)=-27+27+27-2=25$.`),
  ];
}

// ── 5.5 Absolute Extrema ───────────────
function g55() {
  return [
    mc("easy", r`To find the absolute extrema of a continuous function on $[a,b]$, compare the values of $f$ at`, "the critical points in $(a,b)$ and both endpoints", ["the critical points in $(a,b)$ only", "the endpoints only", "the points of inflection"], r`This is the candidates test.`),
    mc("easy", r`What is the absolute maximum value of $f(x)=x^{2}-6x+2$ on $[0,4]$?`, "$2$", ["$-6$", "$4$", "$0$"], r`Candidates: $f(0)=2$, $f(3)=-7$, $f(4)=-6$. The option 0 is the location.`),
    mc("easy", r`What is the absolute minimum value of $f(x)=x^{2}-6x+2$ on $[0,4]$?`, "$-7$", ["$3$", "$-6$", "$2$"], r`The smallest candidate is $f(3)=-7$.`),
    num("easy", r`Find the absolute minimum value of $f(x)=x^{3}-3x$ on $[0,2]$.`, -2, 0, r`Candidates: $f(0)=0$, $f(1)=-2$, $f(2)=2$.`),
    mc("medium", F + r`What is the absolute maximum value of $f$ on $[-4,2]$?`, "$25$", ["$18$", "$0$", "$-7$"], r`Candidates: $f(-4)=18$, $f(-3)=25$, $f(1)=-7$, $f(2)=0$.`),
    mc("medium", F + r`At what value of $x$ does $f$ attain its absolute minimum on $[-4,2]$?`, "$x=1$", ["$x=2$", "$x=-4$", "$x=-7$"], r`The least candidate value is $f(1)=-7$. The question asks where, not what.`),
    mc("medium", r`At what value of $x$ does $f(x)=x+2\cos x$ attain its absolute maximum on $[0,2\pi]$?`, r`$x=2\pi$`, [r`$x=\dfrac{\pi}{6}$`, r`$x=\dfrac{5\pi}{6}$`, "$x=0$"], r`The endpoint value $f(2\pi)=2\pi+2\approx8.283$ exceeds the relative maximum $f\!\left(\tfrac{\pi}{6}\right)=\tfrac{\pi}{6}+\sqrt3\approx2.256$.`),
    mc("medium", r`For $f(x)=x\,e^{-2x}$ on $[0,2]$, the absolute minimum value is`, "$0$, at $x=0$", [r`$\dfrac{1}{2e}$, at $x=\dfrac{1}{2}$`, r`$\dfrac{2}{e^{4}}$, at $x=2$`, r`$0$, at $x=\dfrac{1}{2}$`], r`Candidates: $f(0)=0$, $f\!\left(\tfrac12\right)\approx0.184$, $f(2)\approx0.037$. The minimum is at an endpoint.`),
    mc("medium", r`What are the absolute maximum and minimum values of $f(x)=\sin x-\cos x$ on $[0,\pi]$?`, r`maximum $\sqrt2$, minimum $-1$`, [r`maximum $1$, minimum $-1$`, r`maximum $\sqrt2$, minimum $1$`, r`maximum $\sqrt2$, minimum $-\sqrt2$`], r`Critical point $\tfrac{3\pi}{4}$: $f=\sqrt2$. Endpoints: $f(0)=-1$, $f(\pi)=1$.`),
    mc("medium", r`At what value of $x$ does $f(x)=x\sqrt{6-x}$ attain its absolute maximum on $[0,6]$?`, "$x=4$", ["$x=3$", "$x=6$", "$x=2$"], r`$f'(x)=\dfrac{12-3x}{2\sqrt{6-x}}=0$ at $x=4$; the endpoints both give 0.`),
    mc("medium", r`A function $f$ is continuous on $[1,7]$ with exactly one critical point, at $x=4$, and $f(1)=6$, $f(4)=2$, $f(7)=9$. Which statement is true?`, "The absolute maximum is $9$ and the absolute minimum is $2$.", ["The absolute maximum is $6$ and the absolute minimum is $2$.", "The absolute maximum is $9$ and the absolute minimum is $6$.", "The absolute extrema cannot be determined."], r`Compare the three candidate values.`),
    mc("hard", r`On the interval $(0,\infty)$, the function $f(x)=x+\dfrac{9}{x}$ has`, "an absolute minimum value of $6$ and no absolute maximum", ["an absolute maximum value of $6$ and no absolute minimum", "neither an absolute maximum nor an absolute minimum", "an absolute minimum value of $3$"], r`$f'$ is negative on $(0,3)$ and positive on $(3,\infty)$, so $f(3)=6$ is the least value, and $f$ is unbounded above.`),
    mc("hard", r`What is the absolute minimum value of $f(x)=x-\ln x$ on $(0,\infty)$?`, "$1$", ["$0$", "$e-1$", "$-1$"], r`The only critical point is $x=1$, where $f$ changes from decreasing to increasing, and $f(1)=1$.`),
    mc("hard", F + r`A student writes: "$f$ has its absolute maximum on $[-4,2]$ at $x=-3$ because $f'$ changes from positive to negative there." Why is this justification incomplete?`, "A sign change of $f'$ shows only a relative maximum; the candidate values, including endpoints, must be compared.", ["$f'$ does not change sign at $x=-3$.", "The student should have used the second derivative.", "An absolute maximum cannot occur at a critical point."], r`On a closed interval the absolute maximum is found by comparing $f$ at the critical points and the endpoints.`),
    mc("hard", F + r`What is the absolute maximum value of $f$ on $[-4,4]$?`, "$74$", ["$25$", "$18$", "$4$"], r`$f(4)=64+48-36-2=74$ exceeds the relative maximum 25. Endpoints must be checked.`),
    mc("hard", r`What is the absolute minimum value of $f(x)=e^{-x}+\dfrac{x}{2}$ on $[0,3]$?`, "$0.847$", ["$1.000$", "$0.693$", "$1.550$"], r`$f'(x)=-e^{-x}+\tfrac12=0$ at $x=\ln2$, where $f=\tfrac12+\tfrac{\ln2}{2}=0.847$. Endpoints give 1 and 1.550.`, { calc: true }),
    num("hard", r`Find the absolute maximum value of $f(x)=x^{3}-3x$ on $[-2,2]$.`, 2, 0, r`Candidates: $f(-2)=-2$, $f(-1)=2$, $f(1)=-2$, $f(2)=2$.`),
  ];
}

// ── 5.6 Concavity and Points of Inflection ───────────────
function g56() {
  const p = { fig: figFp() };
  return [
    mc("easy", r`If $f''(x)\gt0$ for all $x$ in an interval, then on that interval the graph of $f$ is`, "concave up", ["increasing", "concave down", "above the $x$-axis"], r`A positive second derivative means the slopes are increasing.`),
    mc("easy", F + r`On which interval is the graph of $f$ concave down?`, r`$(-\infty,-1)$`, [r`$(-1,\infty)$`, r`$(-3,1)$`, r`$(-\infty,-3)$`], r`$f''(x)=6x+6\lt0$ for $x\lt-1$.`),
    mc("easy", F + r`What is the point of inflection of the graph of $f$?`, "$(-1,9)$", ["$(-1,0)$", "$(-3,25)$", "$(1,-7)$"], r`$f''$ changes sign at $x=-1$, and $f(-1)=9$.`),
    mc("easy", r`The graph of $f$ has a point of inflection at $x=c$ when`, "the concavity of the graph changes at $x=c$", [r`$f''(c)=0$`, r`$f'(c)=0$`, r`$f(c)=0$`], r`$f''(c)=0$ is not enough; the sign of $f''$ must change.`),
    mc("medium", r`At which values of $x$ does the graph of $f(x)=x^{4}-6x^{3}$ have a point of inflection?`, "$x=0$ and $x=3$", [r`$x=0$ and $x=\dfrac{9}{2}$`, "$x=3$ only", r`$x=\dfrac{9}{2}$ only`], r`$f''(x)=12x(x-3)$ changes sign at both. The value $x=\tfrac92$ is a critical point.`),
    mc("medium", r`At which value of $x$ does the graph of $f(x)=x\,e^{-2x}$ have a point of inflection?`, "$x=1$", [r`$x=\dfrac{1}{2}$`, "$x=0$", "$x=-1$"], r`$f''(x)=4e^{-2x}(x-1)$ changes sign at $x=1$. The value $x=\tfrac12$ is the critical point.`),
    mc("medium", r`At which values of $x$ does the graph of $f(x)=x^{4}-24x^{2}$ have a point of inflection?`, "$x=-2$ and $x=2$", [r`$x=-2\sqrt3$ and $x=2\sqrt3$`, "$x=0$ only", "$x=-2$, $x=0$ and $x=2$"], r`$f''(x)=12(x-2)(x+2)$.`),
    mc("medium", r`For $f(x)=x^{6}$, which statement is true?`, "$f''(0)=0$, but the graph has no point of inflection at $x=0$.", ["The graph has a point of inflection at $x=0$ because $f''(0)=0$.", "$f''(0)\\neq0$", "The graph is concave down for $x\\lt0$."], r`$f''(x)=30x^4$ is positive on both sides of 0.`),
    mc("medium", FP + r`On which intervals is the graph of $f$ concave up?`, r`$(-4,-2)$, $(0,1)$ and $(3,6)$`, [r`$(-3,2)$ and $(4,6)$`, r`$(-2,0)$ and $(1,3)$`, r`$(-4,-3)$ and $(2,4)$`], r`$f$ is concave up where $f'$ is increasing.`, p),
    mc("medium", FP + r`At how many values of $x$ in $(-4,6)$ does the graph of $f$ have a point of inflection?`, "$4$", ["$3$", "$2$", "$5$"], r`Where $f'$ changes between increasing and decreasing: $x=-2,0,1,3$.`, p),
    mc("medium", r`On which interval is the graph of $f(x)=\ln\left(x^{2}+4\right)$ concave up?`, r`$(-2,2)$`, [r`$(0,\infty)$`, r`$(-\infty,-2)$ and $(2,\infty)$`, r`$(-\infty,\infty)$`], r`$f''(x)=\dfrac{8-2x^2}{(x^2+4)^2}\gt0$ when $x^2\lt4$.`),
    mc("hard", r`A function has $f''(x)=(x+3)^{2}(x-1)$. At which values of $x$ does the graph of $f$ have a point of inflection?`, "$x=1$ only", ["$x=-3$ and $x=1$", "$x=-3$ only", "no values of $x$"], r`$(x+3)^2$ does not change sign, so $f''$ changes sign only at $x=1$.`),
    mc("hard", r`The graph of $f'$ is a parabola that opens upward with its vertex at $x=3$. Which statement about the graph of $f$ is true?`, "It is concave down for $x\\lt3$ and concave up for $x\\gt3$.", ["It is concave up for all $x$.", "It has a relative minimum at $x=3$.", "It is concave up for $x\\lt3$ and concave down for $x\\gt3$."], r`$f'$ decreases until $x=3$ and increases afterwards.`),
    mc("hard", FP + r`On which intervals is $f$ both increasing and concave down?`, r`$(-2,0)$ and $(1,2)$`, [r`$(-2,0)$ and $(1,3)$`, r`$(-3,-2)$ and $(0,1)$`, r`$(2,3)$ only`], r`$f'$ must be positive (above the axis) and decreasing (falling).`, p),
    mc("hard", r`A function has $f''(x)=x(x-1)^{2}(x+2)$. How many points of inflection does the graph of $f$ have?`, "$2$", ["$3$", "$1$", "$0$"], r`$f''$ changes sign at $x=-2$ and $x=0$, but not at $x=1$.`),
    mc("hard", r`At which values of $x$ does the graph of $f(x)=e^{-x^{2}}$ have a point of inflection?`, r`$x=\pm\dfrac{1}{\sqrt2}$`, [r`$x=0$ only`, r`$x=\pm1$`, r`$x=\pm\sqrt2$`], r`$f''(x)=\left(4x^2-2\right)e^{-x^2}$ changes sign where $x^2=\tfrac12$.`),
    num("hard", r`Find the $x$-coordinate of the point of inflection of the graph of $f(x)=x^{3}-6x^{2}+2$.`, 2, 0, r`$f''(x)=6x-12$ changes sign at $x=2$.`),
  ];
}

// ── 5.7 The Second Derivative Test ───────────────
function g57() {
  const G = r`A twice-differentiable function $g$ has the values shown. $\begin{array}{c|ccc} x & 1 & 2 & 5 \\ \hline g'(x) & 0 & 3 & 0 \\ g''(x) & 4 & 0 & -2 \end{array}$ `;
  return [
    mc("easy", r`If $f'(c)=0$ and $f''(c)\gt0$, then $f$ has`, "a relative minimum at $x=c$", ["a relative maximum at $x=c$", "a point of inflection at $x=c$", "an absolute maximum at $x=c$"], r`Concave up at a horizontal tangent: a valley.`),
    mc("easy", r`A twice-differentiable function has $f'(4)=0$ and $f''(4)=7$. Which statement is true?`, "$f$ has a relative minimum at $x=4$.", ["$f$ has a relative maximum at $x=4$.", "$f$ has a point of inflection at $x=4$.", "Nothing can be concluded."], r`$f'(4)=0$ and $f''(4)\gt0$.`),
    mc("easy", F + r`Since $f'(-3)=0$ and $f''(-3)=-12$, the function $f$ has`, "a relative maximum at $x=-3$", ["a relative minimum at $x=-3$", "a point of inflection at $x=-3$", "an absolute minimum at $x=-3$"], r`A negative second derivative at a critical point gives a relative maximum.`),
    mc("medium", G + r`Which statement is true?`, "$g$ has a relative minimum at $x=1$ and a relative maximum at $x=5$.", ["$g$ has a relative maximum at $x=1$ and a relative minimum at $x=5$.", "$g$ has relative extrema at $x=1$, $x=2$ and $x=5$.", "$g$ has a relative minimum at $x=2$."], r`At 1: $g'=0$, $g''\gt0$. At 5: $g'=0$, $g''\lt0$. At 2, $g'\neq0$.`),
    mc("medium", G + r`At $x=2$, the function $g$ has`, "no relative extremum, because $g'(2)\\neq0$", ["a relative extremum, because $g''(2)=0$", "a relative minimum, because $g'(2)\\gt0$", "a relative maximum, because $g''(2)=0$"], r`2 is not a critical point, so there is nothing to classify.`),
    mc("medium", r`For $f(x)=x^{6}$, the second derivative test at $x=0$`, "is inconclusive, although $f$ has a relative minimum there", ["shows that $f$ has a relative minimum there", "shows that $f$ has neither a maximum nor a minimum there", "shows that $f$ has a point of inflection there"], r`$f''(0)=0$. The first derivative test settles it: $f'(x)=6x^5$ changes from negative to positive.`),
    mc("medium", r`For $f(x)=x\,e^{-2x}$, $f'\!\left(\tfrac12\right)=0$ and $f''(x)=4e^{-2x}(x-1)$. Therefore $f$ has`, r`a relative maximum at $x=\dfrac{1}{2}$`, [r`a relative minimum at $x=\dfrac{1}{2}$`, r`a point of inflection at $x=\dfrac{1}{2}$`, "a relative maximum at $x=1$"], r`$f''\!\left(\tfrac12\right)=-2e^{-1}\lt0$.`),
    mc("medium", r`For $f(x)=x^{3}-27x$, the second derivative test shows that $f$ has`, "a relative minimum at $x=3$ and a relative maximum at $x=-3$", ["a relative maximum at $x=3$ and a relative minimum at $x=-3$", "relative minima at $x=3$ and $x=-3$", "no relative extrema"], r`$f''(x)=6x$: $f''(3)=18\gt0$ and $f''(-3)=-18\lt0$.`),
    mc("medium", r`A twice-differentiable function has $f'(3)=0$ and $f''(3)=0$. At $x=3$, $f$ has`, "a relative maximum, a relative minimum, or neither: it cannot be determined", ["neither a relative maximum nor a relative minimum", "a point of inflection", "a relative minimum"], r`The test is inconclusive. Compare $x^4$, $-x^4$ and $x^3$ at 0.`),
    mc("hard", r`Which is a complete justification that $f(x)=x-\ln x$ has its absolute minimum on $(0,\infty)$ at $x=1$?`, r`$f'(1)=0$ and $f''(x)=\dfrac{1}{x^{2}}\gt0$ for all $x\gt0$.`, [r`$f'(1)=0$.`, r`$f''(1)=1\gt0$.`, r`$f(1)=1$ is less than $f(2)$.`], r`A single critical point with the graph concave up on the whole interval gives an absolute minimum. $f''(1)\gt0$ alone shows only a relative minimum.`),
    mc("hard", r`A solution $y=f(x)$ of $\dfrac{dy}{dx}=2x-y$ passes through the point $(1,2)$. At $x=1$, $f$ has`, "a relative minimum", ["a relative maximum", "neither a relative maximum nor a relative minimum", "a point of inflection"], r`At $(1,2)$, $\dfrac{dy}{dx}=0$ and $\dfrac{d^2y}{dx^2}=2-\dfrac{dy}{dx}=2\gt0$.`),
    mc("hard", r`For $f(x)=x^{4}-6x^{3}$, which statement is true?`, r`$f$ has a relative minimum at $x=\dfrac{9}{2}$ and no relative extremum at $x=0$.`, [r`$f$ has a relative maximum at $x=0$ and a relative minimum at $x=\dfrac{9}{2}$.`, r`$f$ has relative minima at $x=0$ and $x=\dfrac{9}{2}$.`, r`$f$ has a relative maximum at $x=\dfrac{9}{2}$.`], r`$f''\!\left(\tfrac92\right)=81\gt0$. At 0 the second derivative test is inconclusive, and $f'(x)=2x^2(2x-9)$ does not change sign there.`),
    mc("hard", r`A twice-differentiable function $h$ satisfies $h'(2)=0$ and $h''(2)=-3$. Which is a correct conclusion with justification?`, r`$h$ has a relative maximum at $x=2$ because $h'(2)=0$ and $h''(2)\lt0$.`, [r`$h$ has a relative minimum at $x=2$ because $h'(2)=0$ and $h''(2)\lt0$.`, r`$h$ has a relative maximum at $x=2$ because $h''(2)\lt0$.`, r`$h$ has a point of inflection at $x=2$ because $h''(2)\neq0$.`], r`Both conditions must be stated: the critical point and the sign of the second derivative.`),
    mc("hard", r`A solution $y=f(x)$ of $\dfrac{dy}{dx}=y-x^{2}$ passes through the point $(1,1)$. At $x=1$, $f$ has`, "a relative maximum", ["a relative minimum", "neither a relative maximum nor a relative minimum", "a vertical tangent"], r`At $(1,1)$, $\dfrac{dy}{dx}=0$ and $\dfrac{d^2y}{dx^2}=\dfrac{dy}{dx}-2x=-2\lt0$.`),
    num("hard", r`The function $f(x)=x^{3}-6x^{2}+9x$ has a relative minimum at $x=c$. Find $c$.`, 3, 0, r`$f'(x)=3(x-1)(x-3)$ and $f''(x)=6x-12$: $f''(3)=6\gt0$.`),
  ];
}

// ── 5.8 Sketching from Derivatives ───────────────
function g58() {
  const c = { fig: figCubic() };
  const signs = (correct) => [r`$f'\gt0$ and $f''\gt0$`, r`$f'\gt0$ and $f''\lt0$`, r`$f'\lt0$ and $f''\gt0$`, r`$f'\lt0$ and $f''\lt0$`].filter((t) => t !== correct);
  const S = (d, prompt, correct, why, o) => mc(d, prompt, correct, signs(correct), why, o);
  return [
    mc("easy", r`At a certain point, $f'(x)\lt0$ and $f''(x)\gt0$. Near that point the graph of $f$ is`, "decreasing and concave up", ["decreasing and concave down", "increasing and concave up", "increasing and concave down"], r`The first derivative gives direction; the second gives concavity.`),
    S("easy", r`A population is growing, but more and more slowly. If $f(t)$ is the population at time $t$, which is true?`, r`$f'\gt0$ and $f''\lt0$`, r`Growing means $f'\gt0$; the growth rate falling means $f''\lt0$.`),
    S("easy", CU + r`Which is true at point $B$?`, r`$f'\lt0$ and $f''\lt0$`, r`At $B$ the graph is falling and concave down (it is still left of the inflection point at $x=1$).`, c),
    S("easy", CU + r`Which is true at point $D$?`, r`$f'\gt0$ and $f''\gt0$`, r`At $D$ the graph is rising and concave up.`, c),
    S("medium", CU + r`Which is true at point $C$?`, r`$f'\lt0$ and $f''\gt0$`, r`At $C$ the graph is falling but concave up, levelling off toward the minimum.`, c),
    S("medium", CU + r`Which is true at point $A$?`, r`$f'\gt0$ and $f''\lt0$`, r`At $A$ the graph is rising and concave down, approaching the maximum.`, c),
    mc("medium", F + r`On what interval is $f$ both decreasing and concave up?`, r`$(-1,1)$`, [r`$(-3,-1)$`, r`$(-3,1)$`, r`$(1,\infty)$`], r`$f'\lt0$ on $(-3,1)$ and $f''\gt0$ for $x\gt-1$; the overlap is $(-1,1)$.`),
    mc("medium", F + r`On what interval is $f$ both increasing and concave down?`, r`$(-\infty,-3)$`, [r`$(-\infty,-1)$`, r`$(-3,-1)$`, r`$(1,\infty)$`], r`$f'\gt0$ for $x\lt-3$ or $x\gt1$, and $f''\lt0$ for $x\lt-1$.`),
    mc("medium", r`What is the relative maximum value of $f(x)=\dfrac{x}{x^{2}+4}$?`, r`$\dfrac{1}{4}$`, ["$2$", "$0$", r`$\dfrac{1}{2}$`], r`$f'(x)=\dfrac{4-x^2}{(x^2+4)^2}$ changes from positive to negative at $x=2$, and $f(2)=\tfrac14$.`),
    mc("medium", r`Which line is a horizontal asymptote of the graph of $f(x)=\dfrac{x}{x^{2}+4}$?`, "$y=0$", ["$y=1$", r`$y=\dfrac{1}{4}$`, "There is none."], r`The denominator has the higher degree.`),
    mc("medium", r`A continuous function $f$ satisfies $f'(x)\gt0$ for $x\lt0$, $f'(x)\lt0$ for $x\gt0$, $f''(x)\lt0$ for $-1\lt x\lt1$ and $f''(x)\gt0$ for $|x|\gt1$. Which statement is true?`, "$f$ has a relative maximum at $x=0$ and points of inflection at $x=\\pm1$.", ["$f$ has a relative minimum at $x=0$ and points of inflection at $x=\\pm1$.", "$f$ has relative maxima at $x=\\pm1$.", "$f$ has a point of inflection at $x=0$."], r`$f'$ changes from positive to negative at 0; $f''$ changes sign at $\pm1$.`),
    mc("hard", r`For $f(x)=x^{4}-6x^{3}$, on which intervals is $f$ both decreasing and concave up?`, r`$(-\infty,0)$ and $\left(3,\dfrac{9}{2}\right)$`, [r`$(0,3)$`, r`$(-\infty,0)$ only`, r`$(3,\infty)$`], r`$f'(x)=2x^2(2x-9)\lt0$ for $x\lt\tfrac92$ ($x\neq0$); $f''(x)=12x(x-3)\gt0$ for $x\lt0$ or $x\gt3$.`),
    mc("hard", r`Which combination of properties is impossible for a twice-differentiable function $f$?`, r`$f(x)\gt0$, $f'(x)\lt0$ and $f''(x)\lt0$ for all real $x$`, [r`$f(x)\gt0$, $f'(x)\lt0$ and $f''(x)\gt0$ for all real $x$`, r`$f(x)\gt0$, $f'(x)\gt0$ and $f''(x)\gt0$ for all real $x$`, r`$f(x)\lt0$, $f'(x)\lt0$ and $f''(x)\lt0$ for all real $x$`], r`A graph that is falling and concave down lies below each of its downward-sloping tangent lines, so it must eventually become negative. ($e^{-x}$, $e^{x}$ and $-e^{x}$ show the others are possible.)`),
    mc("hard", r`A function has $f'(x)\gt0$ for all $x$, with $f''(x)\gt0$ for $x\lt2$ and $f''(x)\lt0$ for $x\gt2$. At $x=2$,`, "the graph of $f$ is steepest", ["$f$ has a relative maximum", "the graph of $f$ has a horizontal tangent", "$f$ has a relative minimum"], r`$f'$ increases until $x=2$ and decreases afterwards, so $f'$ is greatest there: an inflection point where the graph is steepest.`),
    mc("hard", r`A function with continuous second derivative has a relative maximum at $x=1$ and a relative minimum at $x=5$, and no other critical points. Which must be true?`, "The graph of $f$ has a point of inflection for some $x$ in $(1,5)$.", ["$f''(3)=0$", "$f$ is concave down on all of $(1,5)$.", "$f(1)\\lt f(5)$"], r`$f'(1)=f'(5)=0$ with $f'\lt0$ between, so $f'$ has a relative minimum in $(1,5)$: an inflection point of $f$. It need not be at $x=3$.`),
    mc("hard", r`How many points of inflection does the graph of $f(x)=\dfrac{x}{x^{2}+4}$ have?`, "$3$", ["$1$", "$2$", "$0$"], r`$f''(x)=\dfrac{2x(x^2-12)}{(x^2+4)^3}$ changes sign at $x=0$ and $x=\pm2\sqrt3$.`),
  ];
}

// ── 5.9 Graphs of f, f', f'' ───────────────
function g59() {
  const p = { fig: figFp() };
  return [
    mc("easy", r`On a graph of $f'$, the function $f$ is increasing wherever the graph of $f'$ is`, "above the $x$-axis", ["rising", "below the $x$-axis", "falling"], r`$f$ increases where $f'\gt0$. Rising and falling of $f'$ concern the concavity of $f$.`),
    mc("easy", r`On a graph of $f'$, the graph of $f$ is concave up wherever the graph of $f'$ is`, "rising", ["above the $x$-axis", "below the $x$-axis", "falling"], r`$f$ is concave up where $f'$ is increasing.`),
    mc("easy", FP + r`What is $f''(2)$?`, "$-2$", ["$0$", "$2$", "$-1$"], r`$f''$ is the slope of the graph of $f'$: from $(1,2)$ to $(3,-2)$ the slope is $-2$. The value $f'(2)$ is 0.`, p),
    mc("medium", FP + r`Which is greater, $f(2)$ or $f(4)$?`, "$f(2)$, because $f$ is decreasing on $[2,4]$", ["$f(4)$, because $f'(4)\\gt f'(3)$", "They are equal, because $f'(2)=f'(4)=0$.", "It cannot be determined from the graph of $f'$."], r`$f'\lt0$ on $(2,4)$, so $f$ decreases from $x=2$ to $x=4$.`, p),
    mc("medium", FP + r`What is $f''(-1)$?`, "$-1$", ["$1$", "$2$", "$0$"], r`The slope of the segment from $(-2,2)$ to $(0,0)$ is $-1$. The value $f'(-1)$ is 1.`, p),
    mc("medium", FP + r`What is $f''(5)$?`, "$2$", ["$4$", "$-2$", "$0$"], r`The slope of the segment from $(3,-2)$ to $(6,4)$ is $\dfrac{6}{3}=2$.`, p),
    mc("medium", FP + r`On which intervals is $f$ both decreasing and concave up?`, r`$(-4,-3)$ and $(3,4)$`, [r`$(2,3)$ only`, r`$(-4,-2)$ and $(3,6)$`, r`$(2,4)$`], r`$f'$ must be negative (below the axis) and increasing (rising).`, p),
    mc("medium", FP + r`Which statement about $f$ at $x=0$ is true?`, "The graph of $f$ has a horizontal tangent and a point of inflection, but no relative extremum.", ["$f$ has a relative minimum.", "$f$ has a relative maximum.", "$f$ is not differentiable."], r`$f'(0)=0$ with no sign change, and $f'$ changes from decreasing to increasing there.`, p),
    mc("medium", FP + r`At which value of $x$ is the graph of $f$ steepest on $[-4,6]$?`, "$x=6$", ["$x=1$", "$x=-2$", "$x=2$"], r`The steepness of $f$ is $|f'|$, which is greatest at $x=6$, where $f'=4$.`, p),
    mc("hard", FP + r`On the closed interval $[2,6]$, at which value of $x$ does $f$ attain its absolute minimum?`, "$x=4$", ["$x=3$", "$x=2$", "$x=6$"], r`$f$ decreases on $(2,4)$ and increases on $(4,6)$. The value $x=3$ is where $f'$ is least, not $f$.`, p),
    mc("hard", FP + r`Given also that $f(-3)=5$, which is an equation of the line tangent to the graph of $f$ at $x=-3$?`, "$y=5$", ["$y=2x+11$", "$y=5x$", "$x=-3$"], r`$f'(-3)=0$, so the tangent is horizontal through $(-3,5)$.`, p),
    mc("hard", FP + r`On the closed interval $[-3,4]$, at which value of $x$ does $f$ attain its absolute maximum?`, "$x=2$", ["$x=-2$", "$x=1$", "$x=4$"], r`$f$ increases on $(-3,2)$ and decreases on $(2,4)$.`, p),
    mc("hard", r`Three graphs $A$, $B$ and $C$ show a function $f$, its derivative $f'$ and its second derivative $f''$ in some order. Graph $A$ has zeros at $x=-1$ and $x=3$. Graph $B$ has relative extrema at $x=-1$ and $x=3$. Graph $C$ is a line with a zero at $x=1$. Which identification is correct?`, r`$B=f$, $A=f'$, $C=f''$`, [r`$A=f$, $B=f'$, $C=f''$`, r`$C=f$, $A=f'$, $B=f''$`, r`$B=f$, $C=f'$, $A=f''$`], r`$B$ has horizontal tangents where $A$ is zero, so $A=B'$; $A$ turns at $x=1$, where $C$ is zero, so $C=A'$.`),
    mc("hard", FP + r`Which is a correct justification that the graph of $f$ has a point of inflection at $x=-2$?`, r`$f'$ changes from increasing to decreasing at $x=-2$.`, [r`$f'(-2)=2$ is a relative maximum of $f$.`, r`$f'$ changes from positive to negative at $x=-2$.`, r`$f'(-2)\neq0$.`], r`Concavity changes where $f'$ switches between increasing and decreasing. $f'$ does not change sign at $-2$.`, p),
    mc("hard", FP + r`How many relative extrema does $f$ have on the open interval $(-4,6)$?`, "$3$", ["$4$", "$2$", "$5$"], r`$f'$ changes sign at $x=-3$, $2$ and $4$. At $x=0$ it does not.`, p),
    num("hard", FP + r`Find the value of $x$ in $(-4,0)$ at which $f$ has a relative minimum.`, -3, 0, r`$f'$ changes from negative to positive at $x=-3$.`, p),
  ];
}

// ── 5.10 Optimisation ───────────────
function g510() {
  return [
    mc("easy", r`Two positive numbers have a sum of 20. What is the largest possible value of their product?`, "$100$", ["$96$", "$400$", "$200$"], r`$P=x(20-x)$ is greatest at $x=10$.`),
    mc("easy", r`A rectangle has perimeter 36 cm. What dimensions give the largest area?`, "9 cm by 9 cm", ["12 cm by 6 cm", "18 cm by 18 cm", "10 cm by 8 cm"], r`$A=x(18-x)$ is greatest at $x=9$.`),
    mc("easy", r`In an optimisation problem with two variables, the constraint is used to`, "write the quantity to be optimised as a function of one variable", ["find the derivative of the objective", "determine the units of the answer", "check that the answer is positive"], r`A function of one variable can then be differentiated.`),
    num("easy", r`Two positive numbers have a product of 36. What is the smallest possible value of their sum?`, 12, 0, r`$S=x+\dfrac{36}{x}$, $S'=1-\dfrac{36}{x^2}=0$ at $x=6$, giving $6+6$.`),
    mc("medium", r`A farmer has 240 m of fencing to build a rectangular pen divided into two equal parts by a fence parallel to one side. If the pen measures $x$ by $y$ with the dividing fence of length $y$, what dimensions give the largest total area?`, "$x=60$, $y=40$", ["$x=40$, $y=60$", "$x=80$, $y=80$", "$x=60$, $y=60$"], r`$2x+3y=240$ and $A=xy=80x-\tfrac23x^2$, so $A'=0$ at $x=60$.`),
    mc("medium", r`For the divided pen described by $2x+3y=240$, what is the largest possible total area?`, "$2400$ m²", ["$3600$ m²", "$4800$ m²", "$1600$ m²"], r`$60\times40$.`),
    mc("medium", r`A closed cylindrical can must have volume $250\pi$ cm³. What radius minimises its surface area?`, "$5$ cm", ["$10$ cm", r`$\sqrt[3]{250}$ cm`, "$2.5$ cm"], r`$S=2\pi r^2+\dfrac{500\pi}{r}$, $S'=4\pi r-\dfrac{500\pi}{r^2}=0$ gives $r^3=125$.`),
    mc("medium", r`For the can of volume $250\pi$ cm³ with least surface area, what is the height?`, "$10$ cm", ["$5$ cm", "$25$ cm", "$50$ cm"], r`$h=\dfrac{250}{r^2}=\dfrac{250}{25}$. The best can has its height equal to its diameter.`),
    mc("medium", r`Which point on the curve $y=\sqrt{x}$ is closest to the point $(4,0)$?`, r`$\left(\dfrac{7}{2},\sqrt{\dfrac{7}{2}}\right)$`, [r`$\left(4,2\right)$`, r`$\left(3,\sqrt3\right)$`, r`$\left(\dfrac{9}{2},\sqrt{\dfrac{9}{2}}\right)$`], r`Minimise $D=(x-4)^2+x$: $D'=2x-7=0$.`),
    mc("medium", r`A rectangle has its base on the $x$-axis and its upper corners on the parabola $y=27-x^{2}$. What is the largest possible area?`, "$108$", ["$54$", "$81$", "$162$"], r`$A=2x(27-x^2)$, $A'=54-6x^2=0$ at $x=3$: $A=6\cdot18$.`),
    mc("medium", r`An open-topped box with a square base must have volume 32 cm³. What base side length minimises the material used?`, "$4$ cm", ["$2$ cm", r`$\sqrt[3]{32}$ cm`, "$8$ cm"], r`$S=x^2+\dfrac{128}{x}$, $S'=2x-\dfrac{128}{x^2}=0$ gives $x^3=64$.`),
    mc("medium", r`The amount of water in a tank is $W(t)=t^{3}-9t^{2}+24t+5$ litres for $0\le t\le5$ hours. What is the greatest amount of water in the tank?`, "$25$ litres", ["$5$ litres", "$21$ litres", "$30$ litres"], r`$W'(t)=3(t-2)(t-4)$. Candidates: $W(0)=5$, $W(2)=25$, $W(4)=21$, $W(5)=25$.`),
    mc("hard", r`For the can of volume $250\pi$ cm³, $S(r)=2\pi r^{2}+\dfrac{500\pi}{r}$ for $r\gt0$. Which statement justifies that $r=5$ gives the absolute minimum of $S$?`, r`$S'(r)\lt0$ for $0\lt r\lt5$ and $S'(r)\gt0$ for $r\gt5$.`, [r`$S'(5)=0$.`, r`$S''(5)\gt0$.`, r`$S(5)=150\pi$ is positive.`], r`The sign of $S'$ on the whole domain on each side shows an absolute minimum. $S''(5)\gt0$ alone shows only a relative minimum.`),
    mc("hard", r`A rectangle is inscribed in a semicircle of radius 5 with its base on the diameter. What is the largest possible area of the rectangle?`, "$25$", ["$50$", r`$\dfrac{25}{2}$`, r`$25\sqrt2$`], r`$A=2x\sqrt{25-x^2}$ is greatest when $x^2=\tfrac{25}{2}$: $A=2\cdot\tfrac{5}{\sqrt2}\cdot\tfrac{5}{\sqrt2}$.`),
    mc("hard", r`Which point on the line $y=2x+5$ is closest to the origin?`, "$(-2,1)$", ["$(-1,3)$", r`$\left(-\dfrac{5}{2},0\right)$`, "$(0,5)$"], r`Minimise $x^2+(2x+5)^2$: the derivative $10x+20$ is zero at $x=-2$.`),
    mc("hard", r`A farmer has 600 m of fencing to enclose a rectangular field along a straight river, with no fence needed on the river side. What is the largest area that can be enclosed?`, "$45\\,000$ m²", ["$22\\,500$ m²", "$90\\,000$ m²", "$40\\,000$ m²"], r`With $x$ perpendicular to the river, $A=x(600-2x)$ is greatest at $x=150$: $150\times300$.`),
    mc("hard", r`A product sells for $p=100-2q$ dollars when $q$ items are sold. What number of items maximises the revenue $R=pq$?`, "$25$", ["$50$", "$100$", "$20$"], r`$R=100q-2q^2$, $R'=100-4q=0$ at $q=25$.`),
    mc("hard", r`For $x\gt0$, what is the minimum value of $f(x)=x^{2}+\dfrac{16}{x}$?`, "$12$", ["$8$", "$2$", "$17$"], r`$f'(x)=2x-\dfrac{16}{x^2}=0$ gives $x=2$, and $f(2)=4+8$.`),
    num("hard", r`A rectangle has its base on the $x$-axis and its upper corners on the parabola $y=6-x^{2}$. Find the largest possible area, to three decimal places.`, 11.314, 0.001, r`$A=2x(6-x^2)$, $A'=12-6x^2=0$ at $x=\sqrt2$: $A=2\sqrt2\cdot4=8\sqrt2$.`, { calc: true }),
  ];
}

// ── 5.11 Implicitly Defined Curves ───────────────
function g511() {
  const c = { fig: figImp() };
  return [
    mc("easy", r`On a curve with $\dfrac{dy}{dx}=\dfrac{N}{D}$, where $N$ and $D$ are expressions in $x$ and $y$, the tangent line is horizontal where`, "$N=0$ and $D\\neq0$", ["$D=0$ and $N\\neq0$", "$N=D$", "$N=0$ and $D=0$"], r`A zero slope needs a zero numerator and a nonzero denominator.`),
    mc("easy", IMP + r`At which points is the tangent line horizontal?`, "$(3,6)$ and $(-3,-6)$", ["$(6,3)$ and $(-6,-3)$", "$(3,-3)$ and $(-3,3)$", "$(3,-6)$ and $(-3,6)$"], r`$y-2x=0$ gives $y=2x$, and then $3x^2=27$.`, c),
    mc("medium", IMP + r`At which points is the tangent line vertical?`, "$(6,3)$ and $(-6,-3)$", ["$(3,6)$ and $(-3,-6)$", "$(6,-3)$ and $(-6,3)$", "$(3,-3)$ and $(-3,3)$"], r`$2y-x=0$ gives $x=2y$, and then $3y^2=27$.`, c),
    mc("medium", IMP + r`At the point $(3,6)$, $\dfrac{dy}{dx}=0$ and $\dfrac{d^{2}y}{dx^{2}}=-\dfrac{2}{9}$. At this point the curve has`, "a relative maximum", ["a relative minimum", "a point of inflection", "a vertical tangent"], r`A horizontal tangent with a negative second derivative.`, c),
    mc("medium", IMP + r`What is the value of $\dfrac{d^{2}y}{dx^{2}}$ at the point $(-3,-6)$?`, r`$\dfrac{2}{9}$`, [r`$-\dfrac{2}{9}$`, "$0$", r`$\dfrac{1}{9}$`], r`Differentiating $2x-y-x\,y'+2y\,y'=0$ and setting $y'=0$ gives $2+(2y-x)y''=0$, so $y''=-\dfrac{2}{-9}$.`, c),
    mc("medium", IMP + r`What is the slope of the curve at the point $(3,-3)$?`, "$1$", ["$-1$", r`$\dfrac{1}{2}$`, "$0$"], r`$\dfrac{-3-2(3)}{2(-3)-3}=\dfrac{-9}{-9}=1$.`, c),
    mc("medium", r`For the circle $x^{2}+y^{2}=49$, $\dfrac{dy}{dx}=-\dfrac{x}{y}$ and $\dfrac{d^{2}y}{dx^{2}}=-\dfrac{49}{y^{3}}$. At the point $(0,7)$ the curve has`, "a relative maximum", ["a relative minimum", "a vertical tangent", "a point of inflection"], r`$\dfrac{dy}{dx}=0$ and $\dfrac{d^2y}{dx^2}=-\dfrac17\lt0$.`),
    mc("medium", r`For the curve $x^{2}+xy+y^{2}=3$, $\dfrac{dy}{dx}=0$ at the point $(1,-2)$. What is $\dfrac{d^{2}y}{dx^{2}}$ there?`, r`$\dfrac{2}{3}$`, [r`$-\dfrac{2}{3}$`, r`$\dfrac{1}{3}$`, "$2$"], r`Differentiating $2x+y+x\,y'+2y\,y'=0$ and setting $y'=0$ gives $2+(x+2y)y''=0$, so $y''=-\dfrac{2}{-3}$.`),
    mc("hard", r`For the curve $x^{3}+y^{3}=8$, $\dfrac{dy}{dx}=-\dfrac{x^{2}}{y^{2}}$. At the point where $x=0$, the curve has`, "a horizontal tangent but neither a relative maximum nor a relative minimum", ["a relative maximum", "a relative minimum", "a vertical tangent"], r`$\dfrac{dy}{dx}=0$ at $x=0$, but $-\dfrac{x^2}{y^2}\le0$ on both sides, so $y$ is decreasing before and after.`),
    mc("hard", r`For the part of the curve $y^{2}=x^{3}-12x+20$ with $y\gt0$, at which values of $x$ is the tangent line horizontal?`, "$x=-2$ and $x=2$", ["$x=0$ only", "$x=2$ only", r`$x=-2\sqrt3$ and $x=2\sqrt3$`], r`$2y\,y'=3x^2-12$, so $y'=0$ when $x=\pm2$; both give points with $y\gt0$.`),
    mc("hard", r`For the part of the curve $y^{2}=x^{3}-12x+20$ with $y\gt0$, $\dfrac{dy}{dx}=\dfrac{3(x-2)(x+2)}{2y}$. At the point $(2,2)$ the curve has`, "a relative minimum, because $\\dfrac{dy}{dx}$ changes from negative to positive", ["a relative maximum, because $\\dfrac{dy}{dx}$ changes from positive to negative", "neither, because $\\dfrac{dy}{dx}$ does not change sign", "a relative minimum, because $\\dfrac{dy}{dx}=0$"], r`With $y\gt0$ the sign of the slope is the sign of $(x-2)(x+2)$, which changes from negative to positive at $x=2$.`),
    mc("hard", r`For the part of the curve $y^{2}=x^{3}-12x+20$ with $y\gt0$, at the point $(-2,6)$ the curve has`, "a relative maximum", ["a relative minimum", "neither a relative maximum nor a relative minimum", "a vertical tangent"], r`$(x-2)(x+2)$ is positive for $x\lt-2$ and negative for $-2\lt x\lt2$, so $\dfrac{dy}{dx}$ changes from positive to negative.`),
    mc("hard", r`For the ellipse $x^{2}+9y^{2}=36$, what is $\dfrac{d^{2}y}{dx^{2}}$ at the point $(0,2)$?`, r`$-\dfrac{1}{18}$`, [r`$\dfrac{1}{18}$`, r`$-\dfrac{1}{9}$`, "$0$"], r`$2x+18y\,y'=0$ gives $y'=0$ at $(0,2)$. Differentiating again with $y'=0$: $2+18y\,y''=0$, so $y''=-\dfrac{2}{36}$.`),
    mc("hard", r`To decide whether a point with a horizontal tangent on an implicitly defined curve is a relative maximum or minimum, the most efficient method is to`, r`differentiate the equation again and substitute the coordinates together with $\dfrac{dy}{dx}=0$`, [r`solve the equation for $y$ and graph it`, r`compare the $y$-coordinates of the horizontal-tangent points`, r`evaluate $\dfrac{dy}{dx}$ at the point`], r`Every term containing $\dfrac{dy}{dx}$ vanishes, leaving a simple equation for $\dfrac{d^2y}{dx^2}$.`),
    num("hard", r`For the curve $x^{2}-xy+y^{2}=27$, find the value of $\dfrac{d^{2}y}{dx^{2}}$ at the point $(3,6)$, to three decimal places.`, -0.222, 0.001, r`$2+(2y-x)y''=0$ with $2y-x=9$ gives $y''=-\dfrac29$.`),
  ];
}

export default [
  { code: "5.1", gen: g51 },
  { code: "5.2", gen: g52 },
  { code: "5.3", gen: g53 },
  { code: "5.4", gen: g54 },
  { code: "5.5", gen: g55 },
  { code: "5.6", gen: g56 },
  { code: "5.7", gen: g57 },
  { code: "5.8", gen: g58 },
  { code: "5.9", gen: g59 },
  { code: "5.10", gen: g510 },
  { code: "5.11", gen: g511 },
];
