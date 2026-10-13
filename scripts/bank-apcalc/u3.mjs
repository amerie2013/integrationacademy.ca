// AP Calculus AB exam prep — Unit 3 (Composite, Implicit and Inverse Functions):
// question bank. Original questions in exam format; see u1.mjs for the conventions.
import { mc, num } from "./helpers.mjs";
import { plot, C } from "../apcalc/fig.mjs";

const r = String.raw;
const D = (body) => `\\dfrac{d}{dx}\\left[${body}\\right]`;

const TAB = r`$\begin{array}{c|cccc} x & f(x) & f'(x) & g(x) & g'(x) \\ \hline 1 & 3 & -2 & 2 & 4 \\ 2 & 5 & 6 & 1 & -3 \end{array}$`;
const FG = `The differentiable functions $f$ and $g$ have the values shown. ${TAB} `;
const INV = r`The function $f$ is differentiable and increasing, with the values shown, and $g=f^{-1}$. $\begin{array}{c|ccc} x & 1 & 2 & 3 \\ \hline f(x) & 2 & 3 & 5 \\ f'(x) & 5 & 4 & 6 \end{array}$ `;

// the curve x² + xy + y² = 3 with a marked point (the lesson uses x² − xy + y² = 3)
const figE = () => {
  const top = (x) => (-x + Math.sqrt(Math.max(0, 12 - 3 * x * x))) / 2, bot = (x) => (-x - Math.sqrt(Math.max(0, 12 - 3 * x * x))) / 2;
  const g = plot({ w: 340, h: 340, x: [-3, 3], y: [-3, 3], alt: "The curve x squared plus xy plus y squared equals 3" });
  g.curve(top, -2, 2, { n: 1200 }).curve(bot, -2, 2, { n: 1200 }).dot(1, 1, { color: C.alt }).label(1.15, 1.25, "(1, 1)", { plain: true, size: 12 });
  return g;
};
const E = r`The curve $x^{2}+xy+y^{2}=3$ is shown. `;

// ── 3.1 The Chain Rule ───────────────
function g31() {
  return [
    mc("easy", r`$${D(r`\left(3x^{2}+1\right)^{5}`)}=$`, r`$30x\left(3x^{2}+1\right)^{4}$`, [r`$5\left(3x^{2}+1\right)^{4}$`, r`$5(6x)^{4}$`, r`$30x\left(3x^{2}+1\right)^{5}$`], r`Outside: $5(\ )^4$. Inside derivative: $6x$. The first wrong option omits the inside derivative.`),
    mc("easy", r`$${D(r`\sin(4x)`)}=$`, r`$4\cos(4x)$`, [r`$\cos(4x)$`, r`$-4\cos(4x)$`, r`$4\cos x$`], r`$\cos(4x)$ times the derivative of $4x$.`),
    mc("easy", r`$${D(r`e^{x^{2}}`)}=$`, r`$2x\,e^{x^{2}}$`, [r`$e^{x^{2}}$`, r`$x^{2}e^{x^{2}-1}$`, r`$e^{2x}$`], r`$e^u\cdot u'$ with $u=x^2$.`),
    mc("easy", r`$${D(r`\ln\left(x^{2}+1\right)`)}=$`, r`$\dfrac{2x}{x^{2}+1}$`, [r`$\dfrac{1}{x^{2}+1}$`, r`$\dfrac{1}{2x}$`, r`$2x\ln\left(x^{2}+1\right)$`], r`$\dfrac{u'}{u}$ with $u=x^2+1$.`),
    num("easy", r`Let $f(x)=(2x-5)^{3}$. Find $f'(3)$.`, 6, 0, r`$f'(x)=3(2x-5)^2\cdot2$, so $f'(3)=3(1)(2)=6$.`),
    mc("medium", r`Let $f(x)=\sqrt{x^{2}+16}$. What is $f'(3)$?`, r`$\dfrac{3}{5}$`, [r`$\dfrac{1}{10}$`, r`$\dfrac{6}{5}$`, r`$\dfrac{1}{5}$`], r`$f'(x)=\dfrac{x}{\sqrt{x^2+16}}$. The option $\tfrac1{10}$ omits the inside derivative $2x$; $\tfrac65$ omits the factor $\tfrac12$.`),
    mc("medium", FG + r`If $h(x)=f\big(g(x)\big)$, what is $h'(1)$?`, "$24$", ["$-8$", "$6$", "$20$"], r`$f'(g(1))\cdot g'(1)=f'(2)\cdot4=24$. The option $-8$ uses $f'(1)$ instead of $f'(g(1))$.`),
    mc("medium", FG + r`If $h(x)=f\big(g(x)\big)$, what is $h'(2)$?`, "$6$", ["$-18$", "$-9$", "$-6$"], r`$f'(g(2))\cdot g'(2)=f'(1)\cdot(-3)=(-2)(-3)=6$. The option $-18$ is $f'(2)g'(2)$.`),
    mc("medium", r`$${D(r`\cos\left(x^{3}\right)`)}=$`, r`$-3x^{2}\sin\left(x^{3}\right)$`, [r`$-\sin\left(3x^{2}\right)$`, r`$-\sin\left(x^{3}\right)$`, r`$3x^{2}\sin\left(x^{3}\right)$`], r`The inside $x^3$ is left unchanged; its derivative $3x^2$ multiplies the result.`),
    mc("medium", r`$${D(r`\ln(\cos x)`)}=$`, r`$-\tan x$`, [r`$\tan x$`, r`$\dfrac{1}{\cos x}$`, r`$-\cot x$`], r`$\dfrac{-\sin x}{\cos x}=-\tan x$.`),
    mc("medium", r`$${D("3^{x}")}=$`, r`$3^{x}\ln3$`, [r`$x\,3^{x-1}$`, r`$3^{x}$`, r`$\dfrac{3^{x}}{\ln3}$`], r`$a^x$ differentiates to $a^x\ln a$. The power rule does not apply to a variable exponent.`),
    mc("medium", r`$${D(r`\sin^{2}(3x)`)}=$`, r`$6\sin(3x)\cos(3x)$`, [r`$2\sin(3x)$`, r`$2\sin(3x)\cos(3x)$`, r`$6\cos(3x)$`], r`Three layers: $2\sin(3x)\cdot\cos(3x)\cdot3$.`),
    mc("hard", r`$${D(r`\cos^{3}(2x)`)}=$`, r`$-6\cos^{2}(2x)\sin(2x)$`, [r`$-3\cos^{2}(2x)\sin(2x)$`, r`$3\cos^{2}(2x)$`, r`$6\cos^{2}(2x)\sin(2x)$`], r`$3\cos^2(2x)\cdot(-\sin(2x))\cdot2$.`),
    mc("hard", r`$${D(r`e^{\sin\left(x^{2}\right)}`)}=$`, r`$2x\cos\left(x^{2}\right)e^{\sin\left(x^{2}\right)}$`, [r`$\cos\left(x^{2}\right)e^{\sin\left(x^{2}\right)}$`, r`$e^{\cos\left(x^{2}\right)}$`, r`$2x\,e^{\sin\left(x^{2}\right)}$`], r`$e^u$, then $\cos(x^2)$, then $2x$.`),
    mc("hard", r`A differentiable function $f$ has $f'(4)=3$. What is the derivative of $f\left(x^{2}\right)$ at $x=2$?`, "$12$", ["$3$", "$6$", "$48$"], r`$f'(x^2)\cdot2x$ at $x=2$ is $f'(4)\cdot4$.`),
    mc("hard", FG + r`What is the derivative of $\big[g(x)\big]^{3}$ at $x=1$?`, "$48$", ["$12$", "$24$", "$192$"], r`$3[g(1)]^2g'(1)=3(4)(4)=48$. The option 12 omits $g'(1)$.`),
    mc("hard", FG + r`What is the derivative of $f(2x)$ at $x=1$?`, "$12$", ["$6$", "$-4$", "$10$"], r`$2f'(2x)$ at $x=1$ is $2f'(2)=12$. The option 6 omits the factor 2.`),
    mc("hard", r`$${D(r`x^{2}e^{3x}`)}=$`, r`$x\,e^{3x}(2+3x)$`, [r`$6x\,e^{3x}$`, r`$x\,e^{3x}(2+x)$`, r`$2x\,e^{3x}$`], r`$2xe^{3x}+x^2\cdot3e^{3x}$. The option with $(2+x)$ omits the chain factor 3.`),
    num("hard", r`Find the slope of the line tangent to the graph of $y=e^{2x}$ at $x=0$.`, 2, 0, r`$y'=2e^{2x}$, which is 2 at $x=0$.`),
  ];
}

// ── 3.2 Implicit Differentiation ───────────────
function g32() {
  const e = { fig: figE() };
  return [
    mc("easy", r`If $x^{2}+y^{2}=100$, then $\dfrac{dy}{dx}=$`, r`$-\dfrac{x}{y}$`, [r`$\dfrac{x}{y}$`, r`$-\dfrac{y}{x}$`, r`$-2x$`], r`$2x+2y\dfrac{dy}{dx}=0$.`),
    mc("easy", r`When $y$ is a differentiable function of $x$, $${D("y^{3}")}=$`, r`$3y^{2}\,\dfrac{dy}{dx}$`, [r`$3y^{2}$`, r`$3x^{2}$`, r`$y^{3}\,\dfrac{dy}{dx}$`], r`Chain rule: the power rule on $y$, times the derivative of $y$.`),
    mc("easy", r`When $y$ is a differentiable function of $x$, $${D("xy")}=$`, r`$y+x\,\dfrac{dy}{dx}$`, [r`$\dfrac{dy}{dx}$`, r`$x\,\dfrac{dy}{dx}$`, r`$y\,\dfrac{dy}{dx}$`], r`Product rule on the two functions $x$ and $y$.`),
    num("easy", r`Find the slope of the line tangent to $x^{2}+y^{2}=100$ at the point $(6,8)$.`, -0.75, 0.001, r`$\dfrac{dy}{dx}=-\dfrac xy=-\dfrac68$.`),
    mc("medium", r`If $x^{2}+xy+y^{2}=3$, then $\dfrac{dy}{dx}=$`, r`$-\dfrac{2x+y}{x+2y}$`, [r`$\dfrac{2x+y}{x+2y}$`, r`$-\dfrac{2x+y}{2y}$`, r`$-\dfrac{x}{y}$`], r`$2x+y+x\,y'+2y\,y'=0$, so $(x+2y)y'=-(2x+y)$.`),
    mc("medium", E + r`What is the slope of the line tangent to the curve at the point $(1,1)$?`, "$-1$", ["$1$", "$-3$", r`$-\dfrac{1}{3}$`], r`$-\dfrac{2x+y}{x+2y}=-\dfrac{3}{3}=-1$.`, e),
    mc("medium", r`What is the slope of the line tangent to $y^{2}=x^{3}+8$ at the point $(1,3)$?`, r`$\dfrac{1}{2}$`, ["$3$", "$2$", r`$\dfrac{3}{2}$`], r`$2y\,y'=3x^2$, so $y'=\dfrac{3}{6}$. The option 3 forgets to divide by $2y$.`),
    mc("medium", r`What is the slope of the line tangent to $xy=12$ at the point $(3,4)$?`, r`$-\dfrac{4}{3}$`, [r`$-\dfrac{3}{4}$`, r`$\dfrac{4}{3}$`, "$0$"], r`$y+x\,y'=0$ gives $y'=-\dfrac yx$.`),
    mc("medium", r`What is the slope of the line tangent to $x^{3}+y^{3}=28$ at the point $(1,3)$?`, r`$-\dfrac{1}{9}$`, [r`$\dfrac{1}{9}$`, "$-9$", r`$-\dfrac{1}{3}$`], r`$y'=-\dfrac{x^2}{y^2}=-\dfrac19$.`),
    mc("medium", r`Which is an equation of the line tangent to $x^{2}+9y^{2}=18$ at the point $(3,1)$?`, r`$y-1=-\dfrac{1}{3}(x-3)$`, [r`$y-1=-3(x-3)$`, r`$y-1=\dfrac{1}{3}(x-3)$`, r`$y-1=-\dfrac{1}{9}(x-3)$`], r`$2x+18y\,y'=0$ gives $y'=-\dfrac{x}{9y}=-\dfrac13$.`),
    mc("medium", r`If $\cos y=x$, then $\dfrac{dy}{dx}=$`, r`$-\dfrac{1}{\sin y}$`, [r`$\dfrac{1}{\sin y}$`, r`$-\sin y$`, r`$-\dfrac{1}{\sin x}$`], r`$-\sin y\,\dfrac{dy}{dx}=1$.`),
    mc("hard", E + r`At which points is the tangent line to the curve horizontal?`, "$(1,-2)$ and $(-1,2)$", ["$(2,-1)$ and $(-2,1)$", r`$\left(\sqrt3,0\right)$ and $\left(-\sqrt3,0\right)$`, r`$\left(0,\sqrt3\right)$ and $\left(0,-\sqrt3\right)$`], r`$2x+y=0$ gives $y=-2x$; substituting, $3x^2=3$. The points $(2,-1)$, $(-2,1)$ are where the tangent is vertical.`, e),
    mc("hard", E + r`At which points is the tangent line to the curve vertical?`, "$(2,-1)$ and $(-2,1)$", ["$(1,-2)$ and $(-1,2)$", "$(1,1)$ and $(-1,-1)$", r`$\left(\sqrt3,0\right)$ and $\left(-\sqrt3,0\right)$`], r`$x+2y=0$ gives $x=-2y$; substituting, $3y^2=3$.`, e),
    mc("hard", r`At which points on the circle $x^{2}+y^{2}=100$ does the tangent line have slope $\dfrac{3}{4}$?`, "$(-6,8)$ and $(6,-8)$", ["$(6,8)$ and $(-6,-8)$", "$(8,6)$ and $(-8,-6)$", "$(-8,6)$ and $(8,-6)$"], r`$-\dfrac xy=\dfrac34$ gives $x=-\dfrac34y$, and then $y=\pm8$.`),
    mc("hard", r`What is the slope of the line tangent to $\ln y+x^{2}y=1$ at the point $(1,1)$?`, "$-1$", ["$-2$", "$1$", r`$-\dfrac{1}{2}$`], r`$\dfrac{y'}{y}+2xy+x^2y'=0$. At $(1,1)$: $2y'+2=0$.`),
    mc("hard", r`What is the slope of the line tangent to $y^{2}+x^{2}y=6$ at the point $(1,2)$?`, r`$-\dfrac{4}{5}$`, [r`$\dfrac{4}{5}$`, "$-1$", r`$-\dfrac{4}{3}$`], r`$2y\,y'+2xy+x^2y'=0$ gives $y'=-\dfrac{2xy}{2y+x^2}=-\dfrac45$.`),
    mc("hard", r`What is the slope of the line tangent to $x+\sin y=xy$ at the point $(0,0)$?`, "$-1$", ["$1$", "$0$", "undefined"], r`$1+\cos y\,y'=y+x\,y'$. At $(0,0)$: $1+y'=0$.`),
    num("hard", r`Find the slope of the line tangent to $x^{2}+3y^{2}=12$ at the point $(3,1)$.`, -1, 0, r`$2x+6y\,y'=0$ gives $y'=-\dfrac{x}{3y}=-1$.`),
  ];
}

// ── 3.3 Slopes of Inverse Functions ───────────────
function g33() {
  return [
    mc("easy", r`Suppose $f$ is differentiable with inverse $f^{-1}$, and $f(a)=b$ with $f'(a)\neq0$. Then $\left(f^{-1}\right)'(b)=$`, r`$\dfrac{1}{f'(a)}$`, [r`$\dfrac{1}{f'(b)}$`, r`$f'(a)$`, r`$-\dfrac{f'(a)}{\big[f(a)\big]^{2}}$`], r`The reciprocal of the slope of $f$ at the partner point $a$.`),
    mc("easy", r`Let $f(x)=x^{3}+2x$. What is $\left(f^{-1}\right)'(3)$?`, r`$\dfrac{1}{5}$`, [r`$\dfrac{1}{29}$`, "$5$", r`$\dfrac{1}{3}$`], r`$f(1)=3$ and $f'(1)=5$. The option $\tfrac1{29}$ is $\tfrac{1}{f'(3)}$.`),
    mc("easy", INV + r`What is $g'(3)$?`, r`$\dfrac{1}{4}$`, [r`$\dfrac{1}{6}$`, "$4$", r`$\dfrac{1}{3}$`], r`$f(2)=3$, so $g'(3)=\dfrac{1}{f'(2)}=\dfrac14$. The option $\tfrac16$ reads the column $x=3$.`),
    mc("easy", r`The graph of $f$ passes through $(1,2)$ with slope $5$. The graph of $f^{-1}$ passes through`, r`$(2,1)$ with slope $\dfrac{1}{5}$`, [r`$(2,1)$ with slope $5$`, r`$(1,2)$ with slope $\dfrac{1}{5}$`, r`$(2,1)$ with slope $-5$`], r`Reflection in $y=x$ swaps the coordinates and inverts the slope.`),
    num("easy", r`Let $f(x)=x^{3}+4x+1$. Find $\left(f^{-1}\right)'(6)$, to three decimal places.`, 0.1429, 0.001, r`$f(1)=6$ and $f'(1)=7$, so the answer is $\dfrac17\approx0.143$.`),
    mc("medium", INV + r`What is $g'(5)$?`, r`$\dfrac{1}{6}$`, ["$6$", r`$\dfrac{1}{5}$`, r`$\dfrac{1}{4}$`], r`$f(3)=5$, so $g'(5)=\dfrac{1}{f'(3)}$.`),
    mc("medium", INV + r`What is $g'(2)$?`, r`$\dfrac{1}{5}$`, [r`$\dfrac{1}{4}$`, "$5$", r`$\dfrac{1}{2}$`], r`$f(1)=2$, so $g'(2)=\dfrac{1}{f'(1)}$. The option $\tfrac14$ reads the column $x=2$.`),
    mc("medium", r`Let $f(x)=x^{5}+3x-2$. What is $\left(f^{-1}\right)'(2)$?`, r`$\dfrac{1}{8}$`, [r`$\dfrac{1}{83}$`, "$8$", r`$\dfrac{1}{2}$`], r`$f(1)=2$ and $f'(1)=5+3=8$. The option $\tfrac1{83}$ is $\tfrac{1}{f'(2)}$.`),
    mc("medium", r`Let $f(x)=x^{5}+3x-2$ and $g=f^{-1}$. Which is an equation of the line tangent to the graph of $g$ at $x=2$?`, r`$y-1=\dfrac{1}{8}(x-2)$`, [r`$y-2=\dfrac{1}{8}(x-1)$`, r`$y-1=8(x-2)$`, r`$y-1=\dfrac{1}{83}(x-2)$`], r`$g(2)=1$ and $g'(2)=\dfrac{1}{f'(1)}=\dfrac18$.`),
    mc("medium", r`Let $f(x)=3x+\cos x$. What is $\left(f^{-1}\right)'(1)$?`, r`$\dfrac{1}{3}$`, [r`$\dfrac{1}{3-\sin1}$`, "$3$", "$1$"], r`$f(0)=1$ and $f'(0)=3-\sin0=3$. The first wrong option evaluates $f'$ at 1.`),
    mc("medium", r`Let $f(x)=e^{2x}+x$. What is $\left(f^{-1}\right)'(1)$?`, r`$\dfrac{1}{3}$`, [r`$\dfrac{1}{2e^{2}+1}$`, "$3$", "$1$"], r`$f(0)=1$ and $f'(0)=2e^0+1=3$.`),
    mc("medium", r`A function $f$ has $f(3)=7$ and $f'(3)=-2$. What is $\left(f^{-1}\right)'(7)$?`, r`$-\dfrac{1}{2}$`, ["$-2$", r`$\dfrac{1}{2}$`, r`$-\dfrac{1}{7}$`], r`The reciprocal of $-2$. The sign is kept.`),
    mc("hard", r`Let $f(x)=x^{3}+5x-6$. What is $\left(f^{-1}\right)'(0)$?`, r`$\dfrac{1}{8}$`, [r`$\dfrac{1}{5}$`, "$8$", r`$-\dfrac{1}{6}$`], r`$f(1)=0$ and $f'(1)=8$. The option $\tfrac15$ is $\tfrac{1}{f'(0)}$.`),
    mc("hard", r`Let $f(x)=2x+\ln x$. What is $\left(f^{-1}\right)'(2)$?`, r`$\dfrac{1}{3}$`, ["$3$", r`$\dfrac{2}{5}$`, r`$\dfrac{1}{2}$`], r`$f(1)=2$ and $f'(1)=2+1=3$; take the reciprocal. The option $\tfrac25$ is $\tfrac{1}{f'(2)}$.`),
    mc("hard", r`Let $f(x)=\sqrt{x^{2}+5}$ for $x\ge0$. What is $\left(f^{-1}\right)'(3)$?`, r`$\dfrac{3}{2}$`, [r`$\dfrac{2}{3}$`, r`$\dfrac{1}{3}$`, r`$\dfrac{\sqrt{14}}{3}$`], r`$f(2)=3$ and $f'(2)=\dfrac{2}{3}$; take the reciprocal. The last option is $\tfrac{1}{f'(3)}$.`),
    mc("hard", r`If $g$ is the inverse of the differentiable function $f$, then $g'(x)=$`, r`$\dfrac{1}{f'\big(g(x)\big)}$`, [r`$\dfrac{1}{f'(x)}$`, r`$-\dfrac{f'(x)}{\big[f(x)\big]^{2}}$`, r`$\dfrac{1}{g\big(f'(x)\big)}$`], r`Differentiate $f(g(x))=x$ by the chain rule: $f'(g(x))\,g'(x)=1$.`),
    mc("hard", r`A function $f$ has $f(2)=5$, $f'(2)=3$ and $f'(5)=4$. If $g=f^{-1}$, what is $g'(5)$?`, r`$\dfrac{1}{3}$`, [r`$\dfrac{1}{4}$`, "$3$", r`$\dfrac{1}{5}$`], r`$g(5)=2$, so $g'(5)=\dfrac{1}{f'(2)}$. The value $f'(5)$ is not needed.`),
  ];
}

// ── 3.4 Inverse Trigonometric Derivatives ───────────────
function g34() {
  return [
    mc("easy", r`$${D(r`\arcsin x`)}=$`, r`$\dfrac{1}{\sqrt{1-x^{2}}}$`, [r`$\dfrac{1}{1+x^{2}}$`, r`$-\dfrac{1}{\sqrt{1-x^{2}}}$`, r`$\dfrac{1}{\cos x}$`], r`From $\sin y=x$: $\dfrac{dy}{dx}=\dfrac{1}{\cos y}=\dfrac{1}{\sqrt{1-x^2}}$.`),
    mc("easy", r`$${D(r`\arctan x`)}=$`, r`$\dfrac{1}{1+x^{2}}$`, [r`$\dfrac{1}{\sqrt{1-x^{2}}}$`, r`$\sec^{2}x$`, r`$\dfrac{1}{1-x^{2}}$`], r`From $\tan y=x$: $\dfrac{dy}{dx}=\dfrac{1}{\sec^2y}=\dfrac{1}{1+x^2}$.`),
    mc("easy", r`$${D(r`\arccos x`)}=$`, r`$-\dfrac{1}{\sqrt{1-x^{2}}}$`, [r`$\dfrac{1}{\sqrt{1-x^{2}}}$`, r`$-\dfrac{1}{1+x^{2}}$`, r`$-\sin x$`], r`The negative of the arcsine derivative.`),
    num("easy", r`Let $f(x)=\arctan x$. Find $f'(1)$.`, 0.5, 0.001, r`$\dfrac{1}{1+1^2}=\dfrac12$.`),
    mc("medium", r`$${D(r`\arctan(3x)`)}=$`, r`$\dfrac{3}{1+9x^{2}}$`, [r`$\dfrac{1}{1+9x^{2}}$`, r`$\dfrac{3}{1+3x^{2}}$`, r`$\dfrac{3}{1+x^{2}}$`], r`$\dfrac{u'}{1+u^2}$ with $u=3x$ and $u^2=9x^2$.`),
    mc("medium", r`$${D(r`\arcsin\left(x^{2}\right)`)}=$`, r`$\dfrac{2x}{\sqrt{1-x^{4}}}$`, [r`$\dfrac{1}{\sqrt{1-x^{4}}}$`, r`$\dfrac{2x}{\sqrt{1-x^{2}}}$`, r`$\dfrac{2x}{1+x^{4}}$`], r`$\dfrac{u'}{\sqrt{1-u^2}}$ with $u=x^2$.`),
    mc("medium", r`What is the slope of the graph of $y=\arcsin x$ at $x=\dfrac{\sqrt3}{2}$?`, "$2$", [r`$\dfrac{1}{2}$`, "$4$", r`$\dfrac{4}{7}$`], r`$\dfrac{1}{\sqrt{1-\frac34}}=\dfrac{1}{1/2}$. The option 4 omits the square root; $\tfrac47$ uses the arctangent formula.`),
    mc("medium", r`Let $f(x)=x\arctan x$. What is $f'(1)$?`, r`$\dfrac{\pi}{4}+\dfrac{1}{2}$`, [r`$\dfrac{1}{2}$`, r`$\dfrac{\pi}{4}$`, r`$\dfrac{\pi}{4}+1$`], r`$f'(x)=\arctan x+\dfrac{x}{1+x^2}$.`),
    mc("medium", r`$${D(r`\arccos(2x)`)}=$`, r`$-\dfrac{2}{\sqrt{1-4x^{2}}}$`, [r`$\dfrac{2}{\sqrt{1-4x^{2}}}$`, r`$-\dfrac{1}{\sqrt{1-4x^{2}}}$`, r`$-\dfrac{2}{\sqrt{1-2x^{2}}}$`], r`$-\dfrac{u'}{\sqrt{1-u^2}}$ with $u=2x$.`),
    mc("medium", r`$${D(r`\arctan\left(e^{x}\right)`)}=$`, r`$\dfrac{e^{x}}{1+e^{2x}}$`, [r`$\dfrac{1}{1+e^{2x}}$`, r`$\dfrac{e^{x}}{1+e^{x}}$`, r`$\dfrac{e^{x}}{1+x^{2}}$`], r`$u=e^x$, $u'=e^x$, $u^2=e^{2x}$.`),
    mc("medium", r`Which is an equation of the line tangent to the graph of $y=\arctan x$ at $x=1$?`, r`$y-\dfrac{\pi}{4}=\dfrac{1}{2}(x-1)$`, [r`$y-\dfrac{\pi}{4}=(x-1)$`, r`$y-1=\dfrac{1}{2}\left(x-\dfrac{\pi}{4}\right)$`, r`$y-\dfrac{\pi}{2}=\dfrac{1}{2}(x-1)$`], r`$\arctan1=\dfrac\pi4$ and the slope is $\dfrac12$.`),
    mc("hard", r`$${D(r`\arctan\left(\sqrt{x}\right)`)}=$`, r`$\dfrac{1}{2\sqrt{x}\,(1+x)}$`, [r`$\dfrac{1}{1+x}$`, r`$\dfrac{1}{2\sqrt{x}\left(1+\sqrt{x}\right)}$`, r`$\dfrac{\sqrt{x}}{1+x}$`], r`$u=\sqrt x$, $u'=\dfrac{1}{2\sqrt x}$, $u^2=x$.`),
    mc("hard", r`Let $f(x)=x^{2}\arctan x$. What is $f'(1)$?`, r`$\dfrac{\pi}{2}+\dfrac{1}{2}$`, [r`$\dfrac{\pi}{2}$`, r`$\dfrac{\pi}{4}$`, r`$\dfrac{\pi}{4}+\dfrac{1}{2}$`], r`$f'(x)=2x\arctan x+\dfrac{x^2}{1+x^2}$, so $f'(1)=\dfrac\pi2+\dfrac12$. The option $\tfrac{\pi}{4}$ is $f(1)$.`),
    mc("hard", r`For $x\gt0$, $${D(r`\arctan x+\arctan\!\left(\dfrac{1}{x}\right)`)}=$`, "$0$", [r`$\dfrac{2}{1+x^{2}}$`, r`$\dfrac{1}{1+x^{2}}$`, r`$-\dfrac{1}{x^{2}}$`], r`The second term differentiates to $\dfrac{-1/x^2}{1+1/x^2}=-\dfrac{1}{x^2+1}$, cancelling the first.`),
    mc("hard", r`$${D(r`\arcsin\!\left(\dfrac{x}{2}\right)`)}=$`, r`$\dfrac{1}{\sqrt{4-x^{2}}}$`, [r`$\dfrac{1}{2\sqrt{1-x^{2}}}$`, r`$\dfrac{2}{\sqrt{4-x^{2}}}$`, r`$\dfrac{2}{4+x^{2}}$`], r`$\dfrac{\frac12}{\sqrt{1-\frac{x^2}{4}}}=\dfrac{1}{\sqrt{4-x^2}}$.`),
    mc("hard", r`$${D(r`x\arcsin x+\sqrt{1-x^{2}}`)}=$`, r`$\arcsin x$`, [r`$\arcsin x+\dfrac{2x}{\sqrt{1-x^{2}}}$`, r`$\dfrac{1}{\sqrt{1-x^{2}}}$`, r`$\arcsin x-\dfrac{x}{\sqrt{1-x^{2}}}$`], r`$\arcsin x+\dfrac{x}{\sqrt{1-x^2}}-\dfrac{x}{\sqrt{1-x^2}}$.`),
    mc("hard", r`What is the slope of the graph of $y=\arcsin(2x)$ at $x=\dfrac{1}{4}$?`, r`$\dfrac{4}{\sqrt3}$`, [r`$\dfrac{2}{\sqrt3}$`, "$2$", r`$\dfrac{8}{\sqrt{15}}$`], r`$\dfrac{2}{\sqrt{1-4x^2}}=\dfrac{2}{\sqrt{3/4}}=\dfrac{4}{\sqrt3}$.`),
    num("hard", r`Let $f(x)=\arctan(2x)$. Find $f'(0)$.`, 2, 0, r`$f'(x)=\dfrac{2}{1+4x^2}$.`),
  ];
}

// ── 3.5 Choosing the Right Rule ───────────────
function g35() {
  return [
    mc("easy", r`To differentiate $y=e^{x}\cos(5x)$, which rule is applied first?`, "the product rule", ["the chain rule", "the quotient rule", "the power rule alone"], r`The last operation in evaluating $y$ is multiplying $e^x$ by $\cos(5x)$.`),
    mc("easy", r`To differentiate $y=\ln\!\left(x^{2}\tan x\right)$, which rule is applied first?`, "the chain rule", ["the product rule", "the quotient rule", "the power rule alone"], r`The last operation is taking a logarithm; the product is inside it.`),
    mc("easy", r`$${D(r`\dfrac{1}{\left(x^{2}+4\right)^{3}}`)}=$`, r`$-\dfrac{6x}{\left(x^{2}+4\right)^{4}}$`, [r`$\dfrac{6x}{\left(x^{2}+4\right)^{4}}$`, r`$-\dfrac{3}{\left(x^{2}+4\right)^{4}}$`, r`$-\dfrac{6x}{\left(x^{2}+4\right)^{2}}$`], r`Rewrite as $(x^2+4)^{-3}$: $-3(x^2+4)^{-4}\cdot2x$.`),
    mc("medium", r`$${D(r`x^{3}\sin(2x)`)}=$`, r`$3x^{2}\sin(2x)+2x^{3}\cos(2x)$`, [r`$3x^{2}\sin(2x)+x^{3}\cos(2x)$`, r`$6x^{2}\cos(2x)$`, r`$3x^{2}\sin(2x)-2x^{3}\cos(2x)$`], r`Product rule, with the chain factor 2 on the derivative of $\sin(2x)$.`),
    mc("medium", r`$${D(r`\dfrac{e^{2x}}{1+x^{2}}`)}=$`, r`$\dfrac{2e^{2x}\left(x^{2}-x+1\right)}{\left(1+x^{2}\right)^{2}}$`, [r`$\dfrac{e^{2x}\left(x^{2}-2x+1\right)}{\left(1+x^{2}\right)^{2}}$`, r`$\dfrac{e^{2x}}{x}$`, r`$\dfrac{2e^{2x}\left(x^{2}+x+1\right)}{\left(1+x^{2}\right)^{2}}$`], r`$\dfrac{2e^{2x}(1+x^2)-e^{2x}(2x)}{(1+x^2)^2}$. The first wrong option omits the chain factor on $e^{2x}$.`),
    mc("medium", r`For $x\gt0$, $${D(r`\ln\!\left(x^{3}\sqrt{x+1}\right)`)}=$`, r`$\dfrac{3}{x}+\dfrac{1}{2(x+1)}$`, [r`$\dfrac{1}{x^{3}\sqrt{x+1}}$`, r`$\dfrac{3}{x}+\dfrac{1}{x+1}$`, r`$\dfrac{3}{x}\cdot\dfrac{1}{2(x+1)}$`], r`Expand first: $3\ln x+\tfrac12\ln(x+1)$.`),
    mc("medium", r`$${D(r`\left(\dfrac{x}{x+1}\right)^{4}`)}=$`, r`$\dfrac{4x^{3}}{(x+1)^{5}}$`, [r`$\dfrac{4x^{3}}{(x+1)^{3}}$`, r`$4\left(\dfrac{x}{x+1}\right)^{3}$`, r`$\dfrac{4x^{3}}{(x+1)^{4}}$`], r`$4\left(\dfrac{x}{x+1}\right)^3\cdot\dfrac{1}{(x+1)^2}$.`),
    mc("medium", r`$${D(r`e^{-x}\cos x`)}=$`, r`$-e^{-x}(\cos x+\sin x)$`, [r`$e^{-x}(\cos x-\sin x)$`, r`$e^{-x}\sin x$`, r`$-e^{-x}(\cos x-\sin x)$`], r`$-e^{-x}\cos x+e^{-x}(-\sin x)$.`),
    mc("medium", r`$${D(r`x^{2}\ln(3x+1)`)}=$`, r`$2x\ln(3x+1)+\dfrac{3x^{2}}{3x+1}$`, [r`$2x\ln(3x+1)+\dfrac{x^{2}}{3x+1}$`, r`$\dfrac{6x}{3x+1}$`, r`$2x\ln(3x+1)+3x^{2}\ln(3x+1)$`], r`Product rule; the derivative of $\ln(3x+1)$ is $\dfrac{3}{3x+1}$.`),
    mc("medium", r`$${D(r`\tan\!\left(e^{2x}\right)`)}=$`, r`$2e^{2x}\sec^{2}\!\left(e^{2x}\right)$`, [r`$\sec^{2}\!\left(e^{2x}\right)$`, r`$e^{2x}\sec^{2}\!\left(e^{2x}\right)$`, r`$2e^{2x}\sec^{2}x$`], r`$\sec^2(u)\cdot u'$ with $u=e^{2x}$ and $u'=2e^{2x}$.`),
    mc("hard", r`$${D(r`\sin^{2}x\cos x`)}=$`, r`$2\sin x\cos^{2}x-\sin^{3}x$`, [r`$2\sin x\cos^{2}x+\sin^{3}x$`, r`$-2\sin^{2}x\cos x$`, r`$2\cos^{2}x-\sin^{3}x$`], r`$(2\sin x\cos x)(\cos x)+(\sin^2x)(-\sin x)$.`),
    mc("hard", r`$${D(r`(2x+1)^{5}(x-3)^{2}`)}=$`, r`$14(2x+1)^{4}(x-3)(x-2)$`, [r`$10(2x+1)^{4}(x-3)$`, r`$20(2x+1)^{4}(x-3)$`, r`$(2x+1)^{4}(x-3)(9x-13)$`], r`$10(2x+1)^4(x-3)^2+2(2x+1)^5(x-3)=(2x+1)^4(x-3)(14x-28)$. The last option omits the chain factor 2.`),
    mc("hard", r`For $-1\lt x\lt1$, $${D(r`\ln\sqrt{\dfrac{1+x}{1-x}}`)}=$`, r`$\dfrac{1}{1-x^{2}}$`, [r`$\dfrac{1}{1+x^{2}}$`, r`$\dfrac{x}{1-x^{2}}$`, r`$\dfrac{2}{1-x^{2}}$`], r`$\tfrac12\ln(1+x)-\tfrac12\ln(1-x)$ differentiates to $\dfrac{1}{2(1+x)}+\dfrac{1}{2(1-x)}$.`),
    mc("hard", `The differentiable functions $f$ and $g$ have the values shown. ${TAB} ` + r`If $p(x)=f(x)\,g(2x)$, what is $p'(1)$?`, "$-20$", ["$-11$", "$12$", "$-8$"], r`$f'(1)g(2)+f(1)\cdot2g'(2)=(-2)(1)+(3)(2)(-3)=-20$. The option $-11$ omits the chain factor 2.`),
    mc("hard", r`$${D(r`\sin\!\left(x\,e^{x}\right)`)}=$`, r`$(1+x)e^{x}\cos\!\left(x\,e^{x}\right)$`, [r`$\cos\!\left(x\,e^{x}\right)$`, r`$e^{x}\cos\!\left(x\,e^{x}\right)$`, r`$(1+x)e^{x}\cos\!\left(e^{x}\right)$`], r`Chain rule, with the product rule on the inside: $(e^x+xe^x)$.`),
    mc("hard", r`$${D(r`\sqrt{x+\sqrt{x}}`)}=$`, r`$\dfrac{1+\dfrac{1}{2\sqrt{x}}}{2\sqrt{x+\sqrt{x}}}$`, [r`$\dfrac{1}{2\sqrt{x+\sqrt{x}}}$`, r`$\dfrac{1}{2\sqrt{x}}+\dfrac{1}{4x^{3/4}}$`, r`$\dfrac{1+\sqrt{x}}{2\sqrt{x+\sqrt{x}}}$`], r`Outside: $\dfrac{1}{2\sqrt{u}}$. Inside derivative: $1+\dfrac{1}{2\sqrt x}$.`),
    num("hard", r`Let $f(x)=x\sqrt{2x+1}$. Find $f'(4)$ to three decimal places.`, 4.333, 0.001, r`$f'(x)=\sqrt{2x+1}+\dfrac{x}{\sqrt{2x+1}}$, so $f'(4)=3+\dfrac43=\dfrac{13}{3}$.`),
  ];
}

// ── 3.6 Second and Higher Derivatives ───────────────
function g36() {
  return [
    mc("easy", r`If $f(x)=x^{5}-4x^{3}+7x$, then $f''(x)=$`, r`$20x^{3}-24x$`, [r`$5x^{4}-12x^{2}+7$`, r`$20x^{3}-24x^{2}$`, r`$60x^{2}-24$`], r`$f'(x)=5x^4-12x^2+7$; differentiate again.`),
    mc("easy", r`For $y=f(x)$, the second derivative is written`, r`$\dfrac{d^{2}y}{dx^{2}}$`, [r`$\left(\dfrac{dy}{dx}\right)^{2}$`, r`$\dfrac{dy^{2}}{dx^{2}}$`, r`$\dfrac{d^{2}y}{d^{2}x}$`], r`The operator $\tfrac{d}{dx}$ applied twice. It is not the square of the first derivative.`),
    mc("easy", r`If $y=\cos x$, then $y''=$`, r`$-\cos x$`, [r`$\cos x$`, r`$\sin x$`, r`$-\sin x$`], r`$y'=-\sin x$ and $y''=-\cos x$.`),
    num("easy", r`Let $f(x)=x^{3}$. Find $f''(2)$.`, 12, 0, r`$f''(x)=6x$.`),
    mc("medium", r`If $y=x\,e^{x}$, then $y''=$`, r`$e^{x}(x+2)$`, [r`$e^{x}(x+1)$`, r`$x\,e^{x}$`, r`$2e^{x}$`], r`$y'=e^x(1+x)$ and $y''=e^x(1+x)+e^x$.`),
    mc("medium", r`If $y=\cos(4x)$, then $y''=$`, r`$-16\cos(4x)$`, [r`$-4\cos(4x)$`, r`$16\cos(4x)$`, r`$-16\sin(4x)$`], r`Each differentiation contributes a factor 4: $y'=-4\sin(4x)$, $y''=-16\cos(4x)$.`),
    mc("medium", r`Let $f(x)=\ln\left(x^{2}+4\right)$. What is $f''(2)$?`, "$0$", [r`$\dfrac{1}{2}$`, r`$\dfrac{1}{4}$`, r`$-\dfrac{1}{8}$`], r`$f''(x)=\dfrac{8-2x^2}{(x^2+4)^2}$, which is 0 at $x=2$. The option $\tfrac12$ is $f'(2)$.`),
    mc("medium", r`If $f(x)=x^{2}\ln x$, then $f''(x)=$`, r`$2\ln x+3$`, [r`$2\ln x+2$`, r`$\dfrac{2}{x}$`, r`$2\ln x+1$`], r`$f'(x)=2x\ln x+x$, so $f''(x)=2\ln x+2+1$.`),
    mc("medium", r`If $y=e^{-2x}$, then $\dfrac{d^{4}y}{dx^{4}}=$`, r`$16e^{-2x}$`, [r`$-16e^{-2x}$`, r`$8e^{-2x}$`, r`$-8e^{-2x}$`], r`Each derivative multiplies by $-2$, and $(-2)^4=16$.`),
    mc("medium", r`A particle's position is $s(t)$ metres at time $t$ seconds. What are the units of $s''(t)$?`, "metres per second per second", ["metres per second", "metres", "seconds per metre"], r`The second derivative is the rate of change of velocity: (m/s) per second.`),
    mc("medium", r`If $y=\cos(2x)$, which equation does $y$ satisfy for all $x$?`, r`$y''+4y=0$`, [r`$y''-4y=0$`, r`$y''+2y=0$`, r`$y''+y=0$`], r`$y''=-4\cos(2x)=-4y$.`),
    mc("hard", r`For the circle $x^{2}+y^{2}=100$, $\dfrac{d^{2}y}{dx^{2}}=$`, r`$-\dfrac{100}{y^{3}}$`, [r`$-\dfrac{1}{y}$`, r`$\dfrac{100}{y^{3}}$`, r`$-\dfrac{x^{2}}{y^{3}}$`], r`$y'=-\dfrac xy$, so $y''=-\dfrac{y-x\,y'}{y^2}=-\dfrac{y^2+x^2}{y^3}$. The option $-\tfrac1y$ treats $y$ as a constant.`),
    mc("hard", r`For the circle $x^{2}+y^{2}=100$, what is the value of $\dfrac{d^{2}y}{dx^{2}}$ at the point $(6,8)$?`, r`$-\dfrac{25}{128}$`, [r`$\dfrac{25}{128}$`, r`$-\dfrac{1}{8}$`, r`$\dfrac{9}{16}$`], r`$-\dfrac{100}{y^3}$ with $y=8$. The option $\tfrac{9}{16}$ is $(y')^2$.`),
    mc("hard", r`For the curve $xy=8$, what is the value of $\dfrac{d^{2}y}{dx^{2}}$ at the point $(2,4)$?`, "$2$", ["$-2$", "$4$", "$1$"], r`$y'=-\dfrac yx$ and $y''=\dfrac{2y}{x^2}=\dfrac{8}{4}$. The option 4 is $(y')^2$.`),
    mc("hard", r`If $f(x)=\sec x$, then $f''(x)=$`, r`$\sec x\tan^{2}x+\sec^{3}x$`, [r`$\sec x\tan^{2}x$`, r`$\sec^{3}x$`, r`$2\sec^{2}x\tan x$`], r`$f'(x)=\sec x\tan x$; the product rule gives $\sec x\tan x\cdot\tan x+\sec x\cdot\sec^2x$.`),
    mc("hard", r`What is the 35th derivative of $y=\cos x$?`, r`$\sin x$`, [r`$-\sin x$`, r`$\cos x$`, r`$-\cos x$`], r`The derivatives repeat with period 4, and $35=32+3$, so it equals the third derivative: $\cos x\to-\sin x\to-\cos x\to\sin x$.`),
    mc("hard", r`For the curve $x^{2}-y^{2}=5$, what is the value of $\dfrac{d^{2}y}{dx^{2}}$ at the point $(3,2)$?`, r`$-\dfrac{5}{8}$`, [r`$\dfrac{5}{8}$`, r`$\dfrac{9}{4}$`, r`$\dfrac{1}{2}$`], r`$y'=\dfrac xy=\dfrac32$ and $y''=\dfrac{y-x\,y'}{y^2}=\dfrac{2-\frac92}{4}$.`),
    mc("hard", r`If $f(x)=2x^{4}+\dfrac{3}{x}$, then $f''(x)=$`, r`$24x^{2}+\dfrac{6}{x^{3}}$`, [r`$24x^{2}-\dfrac{6}{x^{3}}$`, r`$8x^{3}-\dfrac{3}{x^{2}}$`, r`$24x^{2}+\dfrac{3}{x^{3}}$`], r`$f'(x)=8x^3-3x^{-2}$ and $f''(x)=24x^2+6x^{-3}$.`),
    num("hard", r`Let $f(x)=e^{2x}$. Find $f'''(0)$.`, 8, 0, r`$f'''(x)=8e^{2x}$.`),
  ];
}

export default [
  { code: "3.1", gen: g31 },
  { code: "3.2", gen: g32 },
  { code: "3.3", gen: g33 },
  { code: "3.4", gen: g34 },
  { code: "3.5", gen: g35 },
  { code: "3.6", gen: g36 },
];
