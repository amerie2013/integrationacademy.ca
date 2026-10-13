// AP Calculus AB exam prep — Unit 0 (Readiness): question bank.
// Original questions in exam format; see u1.mjs for the conventions. None of
// these functions or equations repeats an example from the Unit 0 lessons.
import { mc, num } from "./helpers.mjs";

const r = String.raw;
const I = (a, b, body) => `\\displaystyle\\int_{${a}}^{${b}}${body}\\,dx`;

// ── 0.1 Functions You Must Know Cold ───────────────
function g01() {
  return [
    mc("easy", r`What is the domain of $f(x)=\sqrt{x-5}$?`, r`$x\ge5$`, [r`$x\gt5$`, r`$x\le5$`, "all real numbers"], r`The quantity under the root must be at least 0.`),
    mc("easy", r`What is the range of $y=x^{2}+4$?`, r`$y\ge4$`, [r`$y\ge0$`, "all real numbers", r`$y\gt4$`], r`The graph of $x^2$ moved up 4; its lowest point is $(0,4)$.`),
    mc("easy", r`Which function is odd?`, r`$f(x)=x^{3}$`, [r`$f(x)=x^{2}$`, r`$f(x)=|x|$`, r`$f(x)=\cos x$`], r`$(-x)^3=-x^3$. The other three are even.`),
    num("easy", r`Let $f(x)=3x-2$ and $g(x)=x^{2}+1$. Find $f\big(g(2)\big)$.`, 13, 0, r`$g(2)=5$ and $f(5)=13$.`),
    mc("medium", r`What is the domain of $f(x)=\ln(4-x)$?`, r`$x\lt4$`, [r`$x\gt4$`, r`$x\le4$`, r`$x\neq4$`], r`$4-x\gt0$.`),
    mc("medium", r`What is the domain of $f(x)=\dfrac{1}{x^{2}-9}$?`, r`all real numbers except $x=3$ and $x=-3$`, [r`all real numbers except $x=3$`, r`all real numbers except $x=9$`, r`$x\gt3$`], r`The denominator is zero at $x=\pm3$.`),
    mc("medium", r`What is the inverse of $f(x)=2x+6$?`, r`$f^{-1}(x)=\dfrac{x-6}{2}$`, [r`$f^{-1}(x)=\dfrac{1}{2x+6}$`, r`$f^{-1}(x)=\dfrac{x+6}{2}$`, r`$f^{-1}(x)=6-2x$`], r`Solve $y=2x+6$ for $x$. The first wrong option is the reciprocal, not the inverse.`),
    mc("medium", r`How is the graph of $y=(x-2)^{2}+3$ obtained from the graph of $y=x^{2}$?`, "It is moved right 2 and up 3.", ["It is moved left 2 and up 3.", "It is moved right 2 and down 3.", "It is moved left 3 and up 2."], r`The vertex moves from $(0,0)$ to $(2,3)$.`),
    mc("medium", r`Let $f(x)=x+1$ and $g(x)=x^{2}$. What is $g\big(f(x)\big)$?`, r`$(x+1)^{2}$`, [r`$x^{2}+1$`, r`$x^{2}+x$`, r`$2x+2$`], r`Apply $f$ first, then square. The option $x^2+1$ is $f(g(x))$.`),
    mc("medium", r`What is the vertical asymptote of the graph of $y=\ln(x+3)$?`, "$x=-3$", ["$x=3$", "$y=-3$", "$y=0$"], r`The graph of $\ln x$, whose asymptote is $x=0$, moved left 3.`),
    mc("medium", r`Which function is even?`, r`$f(x)=x^{4}-3x^{2}$`, [r`$f(x)=x^{3}+x$`, r`$f(x)=x^{2}+x$`, r`$f(x)=e^{x}$`], r`Replacing $x$ by $-x$ leaves $x^4-3x^2$ unchanged.`),
    mc("hard", r`What is the inverse of $f(x)=\dfrac{x+2}{x-1}$?`, r`$f^{-1}(x)=\dfrac{x+2}{x-1}$`, [r`$f^{-1}(x)=\dfrac{x-1}{x+2}$`, r`$f^{-1}(x)=\dfrac{x-2}{x+1}$`, r`$f^{-1}(x)=\dfrac{2x+1}{x-1}$`], r`$y(x-1)=x+2$ gives $x(y-1)=y+2$, so $x=\dfrac{y+2}{y-1}$. This function is its own inverse.`),
    mc("hard", r`What is the domain of $f(x)=\dfrac{\sqrt{x+1}}{\ln x}$?`, r`$x\gt0$ and $x\neq1$`, [r`$x\ge-1$`, r`$x\gt0$`, r`$x\ge-1$ and $x\neq1$`], r`The logarithm needs $x\gt0$, and it is zero at $x=1$. The root adds no further restriction.`),
    mc("hard", r`What is the range of $y=3-e^{x}$?`, r`$y\lt3$`, [r`$y\gt3$`, r`$y\gt-3$`, "all real numbers"], r`$e^x\gt0$, so $3-e^x\lt3$.`),
    num("hard", r`Let $f(x)=x^{3}+1$. Find $f^{-1}(9)$.`, 2, 0, r`$x^3+1=9$ gives $x=2$.`),
  ];
}

// ── 0.2 Trigonometry Without Hesitation ───────────────
function g02() {
  return [
    mc("easy", r`What is $\sin\dfrac{\pi}{3}$?`, r`$\dfrac{\sqrt3}{2}$`, [r`$\dfrac12$`, r`$\dfrac{\sqrt2}{2}$`, r`$\sqrt3$`], r`A standard value. $\tfrac12$ is $\cos\tfrac\pi3$.`),
    mc("easy", r`What is $\cos\pi$?`, "$-1$", ["$0$", "$1$", r`$\pi$`], r`The point on the unit circle is $(-1,0)$.`),
    mc("easy", r`An angle of $\dfrac{\pi}{6}$ radians is equal to`, r`$30^\circ$`, [r`$60^\circ$`, r`$45^\circ$`, r`$15^\circ$`], r`$\pi$ radians is $180^\circ$.`),
    mc("easy", r`What is $\tan\dfrac{\pi}{4}$?`, "$1$", [r`$\dfrac{\sqrt2}{2}$`, r`$\sqrt3$`, "$0$"], r`Sine and cosine are equal at $\tfrac\pi4$.`),
    mc("medium", r`What is $\sin\dfrac{7\pi}{6}$?`, r`$-\dfrac12$`, [r`$\dfrac12$`, r`$-\dfrac{\sqrt3}{2}$`, r`$\dfrac{\sqrt3}{2}$`], r`Quadrant III, reference angle $\tfrac\pi6$; sine is negative.`),
    mc("medium", r`What is $\cos\dfrac{5\pi}{3}$?`, r`$\dfrac12$`, [r`$-\dfrac12$`, r`$\dfrac{\sqrt3}{2}$`, r`$-\dfrac{\sqrt3}{2}$`], r`Quadrant IV, reference angle $\tfrac\pi3$; cosine is positive.`),
    mc("medium", r`What is $\tan\dfrac{2\pi}{3}$?`, r`$-\sqrt3$`, [r`$\sqrt3$`, r`$-\dfrac{1}{\sqrt3}$`, r`$\dfrac{1}{\sqrt3}$`], r`Quadrant II, reference angle $\tfrac\pi3$; tangent is negative.`),
    mc("medium", r`Which values of $x$ in $[0,2\pi)$ satisfy $\cos x=\dfrac12$?`, r`$\dfrac{\pi}{3}$ and $\dfrac{5\pi}{3}$`, [r`$\dfrac{\pi}{3}$ and $\dfrac{2\pi}{3}$`, r`$\dfrac{\pi}{6}$ and $\dfrac{11\pi}{6}$`, r`$\dfrac{\pi}{3}$ only`], r`Cosine is positive in quadrants I and IV.`),
    mc("medium", r`Which value of $x$ in $[0,2\pi)$ satisfies $\sin x=-1$?`, r`$\dfrac{3\pi}{2}$`, [r`$\pi$`, r`$\dfrac{\pi}{2}$`, r`$\dfrac{7\pi}{4}$`], r`The lowest point of the sine graph.`),
    mc("medium", r`The expression $1-\sin^{2}x$ is equal to`, r`$\cos^{2}x$`, [r`$\cos x$`, r`$-\cos^{2}x$`, r`$\tan^{2}x$`], r`From $\sin^2x+\cos^2x=1$.`),
    mc("medium", r`The expression $\sin2x$ is equal to`, r`$2\sin x\cos x$`, [r`$2\sin x$`, r`$\sin^{2}x$`, r`$\cos^{2}x-\sin^{2}x$`], r`The double-angle identity for sine. The last option is $\cos2x$.`),
    mc("hard", r`Which values of $x$ in $[0,2\pi)$ satisfy $2\cos x+\sqrt3=0$?`, r`$\dfrac{5\pi}{6}$ and $\dfrac{7\pi}{6}$`, [r`$\dfrac{\pi}{6}$ and $\dfrac{11\pi}{6}$`, r`$\dfrac{2\pi}{3}$ and $\dfrac{4\pi}{3}$`, r`$\dfrac{5\pi}{6}$ and $\dfrac{11\pi}{6}$`], r`$\cos x=-\dfrac{\sqrt3}{2}$: reference angle $\tfrac\pi6$, quadrants II and III.`),
    mc("hard", r`Which values of $x$ in $[0,2\pi)$ satisfy $\sin^{2}x-\sin x=0$?`, r`$0$, $\dfrac{\pi}{2}$ and $\pi$`, [r`$\dfrac{\pi}{2}$ only`, r`$0$ and $\pi$`, r`$0$, $\dfrac{\pi}{2}$, $\pi$ and $\dfrac{3\pi}{2}$`], r`$\sin x(\sin x-1)=0$: $\sin x=0$ or $\sin x=1$. Dividing by $\sin x$ loses $0$ and $\pi$.`),
    mc("hard", r`If $\cos\theta=\dfrac{5}{13}$ and $\theta$ is in quadrant IV, what is $\sin\theta$?`, r`$-\dfrac{12}{13}$`, [r`$\dfrac{12}{13}$`, r`$-\dfrac{5}{12}$`, r`$\dfrac{8}{13}$`], r`$\sin^2\theta=1-\dfrac{25}{169}$, and sine is negative in quadrant IV.`),
    mc("hard", r`What is $\arccos\!\left(-\dfrac{\sqrt2}{2}\right)$?`, r`$\dfrac{3\pi}{4}$`, [r`$-\dfrac{\pi}{4}$`, r`$\dfrac{5\pi}{4}$`, r`$\dfrac{\pi}{4}$`], r`The arccosine returns an angle in $[0,\pi]$.`),
    mc("hard", r`If $\sin x=\dfrac13$, what is $\cos2x$?`, r`$\dfrac79$`, [r`$\dfrac23$`, r`$\dfrac89$`, r`$-\dfrac79$`], r`$\cos2x=1-2\sin^2x=1-\dfrac29$.`),
  ];
}

// ── 0.3 Exponentials, Logarithms and Their Laws ───────────────
function g03() {
  return [
    mc("easy", r`What is $\ln1$?`, "$0$", ["$1$", "$e$", "undefined"], r`$e^0=1$.`),
    mc("easy", r`What is $e^{\ln7}$?`, "$7$", [r`$\ln7$`, "$e^{7}$", r`$7e$`], r`The exponential undoes the logarithm.`),
    num("easy", r`Evaluate $\ln\!\left(e^{5}\right)$.`, 5, 0, r`The logarithm undoes the exponential.`),
    mc("easy", r`For positive $a$ and $b$, $\ln a+\ln b$ is equal to`, r`$\ln(ab)$`, [r`$\ln(a+b)$`, r`$\ln a\cdot\ln b$`, r`$\ln\dfrac ab$`], r`A sum of logarithms is the logarithm of a product.`),
    mc("medium", r`What is the solution of $e^{x}=10$?`, r`$x=\ln10$`, [r`$x=\dfrac{10}{e}$`, r`$x=e^{10}$`, r`$x=\log_{10}e$`], r`Take the natural logarithm of both sides.`),
    mc("medium", r`What is the solution of $\ln x=3$?`, r`$x=e^{3}$`, [r`$x=3e$`, r`$x=\ln3$`, r`$x=3^{e}$`], r`Rewrite in exponential form.`),
    mc("medium", r`What is $e^{2\ln5}$?`, "$25$", ["$10$", "$32$", r`$5e^{2}$`], r`$e^{\ln(5^2)}$.`),
    mc("medium", r`For $x\gt0$, $\ln\!\left(x^{3}\right)$ is equal to`, r`$3\ln x$`, [r`$(\ln x)^{3}$`, r`$\ln(3x)$`, r`$3+\ln x$`], r`A power inside a logarithm becomes a multiple.`),
    mc("medium", r`What is the solution of $2e^{3x}=8$?`, r`$x=\dfrac{\ln4}{3}$`, [r`$x=\ln\dfrac43$`, r`$x=\dfrac{\ln8}{6}$`, r`$x=3\ln4$`], r`$e^{3x}=4$, so $3x=\ln4$. Isolate the exponential before taking the logarithm.`),
    mc("medium", r`The expression $\ln8-\ln2$ is equal to`, r`$\ln4$`, [r`$\ln6$`, r`$\dfrac{\ln8}{\ln2}$`, "$3$"], r`A difference of logarithms is the logarithm of a quotient. $\dfrac{\ln8}{\ln2}$ is 3, which is a different quantity.`),
    mc("hard", r`What are the solutions of $e^{2x}-7e^{x}+10=0$?`, r`$x=\ln2$ and $x=\ln5$`, [r`$x=2$ and $x=5$`, r`$x=\ln7$ and $x=\ln10$`, r`$x=\ln5$ only`], r`$(e^x-2)(e^x-5)=0$.`),
    mc("hard", r`What is the solution of $\ln x+\ln(x+3)=\ln10$?`, "$x=2$", ["$x=2$ and $x=-5$", r`$x=\dfrac72$`, "$x=5$"], r`$x^2+3x-10=0$ gives $x=2$ or $x=-5$, and $\ln(-5)$ is undefined.`),
    mc("hard", r`The function $2^{x}$ can be written as`, r`$e^{x\ln2}$`, [r`$e^{2x}$`, r`$x^{\ln2}$`, r`$e^{x}\ln2$`], r`$2=e^{\ln2}$, so $2^x=\left(e^{\ln2}\right)^x$.`),
    mc("hard", r`For $x\gt0$, what is the solution of $\ln\!\left(x^{2}\right)=4$?`, r`$x=e^{2}$`, [r`$x=e^{4}$`, r`$x=2$`, r`$x=\sqrt{4e}$`], r`$2\ln x=4$, so $\ln x=2$.`),
    mc("hard", r`For $x\gt0$, $\ln\dfrac{\sqrt{x}}{(x+1)^{2}}$ is equal to`, r`$\dfrac12\ln x-2\ln(x+1)$`, [r`$\dfrac12\ln x+2\ln(x+1)$`, r`$2\ln x-\dfrac12\ln(x+1)$`, r`$\dfrac{\ln x}{4\ln(x+1)}$`], r`Quotient to a difference, then each power to a multiple.`),
    num("hard", r`A quantity is modelled by $Q(t)=200e^{0.05t}$. At what time $t$ is $Q=600$? Give three decimal places.`, 21.972, 0.001, r`$e^{0.05t}=3$, so $t=20\ln3$.`, { calc: true }),
  ];
}

// ── 0.4 Your Graphing Calculator ───────────────
function g04() {
  const c = { calc: true };
  return [
    mc("easy", r`On the calculator sections of the exam, which use of a calculator is NOT accepted as justification?`, "using a built-in maximum command to show that a function has a maximum", ["finding a zero of a function", "evaluating a derivative at a point", "evaluating a definite integral"], r`Graphing, solving an equation, a derivative at a point and a definite integral may be used without explanation. A maximum must be justified with calculus.`),
    mc("easy", r`In which angle mode must a calculator be set for calculus?`, "radian mode", ["degree mode", "either mode", "gradian mode"], r`The derivative formulas for trigonometric functions hold only in radians.`),
    mc("easy", r`A calculator displays $2.094551$. Which of these is an acceptable final answer on the exam?`, "$2.095$", ["$2.09$", "$2.1$", "$2$"], r`Answers must be accurate to three decimal places.`),
    mc("easy", r`A calculator reports $\sin1\approx0.0175$. What is the most likely explanation?`, "The calculator is in degree mode.", ["The calculator is in radian mode.", "The value is correct: $\\sin1$ is close to zero.", "The calculator has rounded too early."], r`In radians $\sin1\approx0.8415$.`),
    num("medium", r`Find the zero of $f(x)=x^{3}+2x-4$, to three decimal places.`, 1.1795, 0.001, r`Solve $x^3+2x-4=0$ numerically: $x\approx1.180$.`, c),
    num("medium", r`Find the negative value of $x$ at which $x^{2}=2^{x}$, to three decimal places.`, -0.7667, 0.001, r`The graphs of $y=x^2$ and $y=2^x$ intersect at $x\approx-0.767$ (and at 2 and 4).`, c),
    num("medium", r`Find the value of $x$ at which $\ln x=3-x$, to three decimal places.`, 2.2079, 0.001, r`The graphs intersect at $x\approx2.208$.`, c),
    num("medium", r`Let $f(x)=\ln\!\left(1+x^{3}\right)$. Find $f'(1.2)$, to three decimal places.`, 1.5836, 0.001, r`The numerical derivative at 1.2 is $1.584$.`, c),
    num("medium", r`Evaluate $${I(1, 2, r`\dfrac{e^{x}}{x}`)}$, to three decimal places.`, 3.0591, 0.001, r`The numerical integral is $3.059$.`, c),
    mc("medium", r`Which line of written work earns full credit for evaluating an integral on the calculator section?`, r`$${I(0, 2, r`\sqrt{1+x^{4}}`)}\approx3.653$`, [r`fnInt$\left(\sqrt{1+X^4},X,0,2\right)=3.653$`, "$3.653$", r`$${I(0, 2, r`\sqrt{1+x^{4}}`)}\approx3.65$`], r`Standard notation for the set-up, then three decimal places. Calculator syntax is not marked, and 3.65 is not accurate enough.`, c),
    num("hard", r`Let $f(x)=\tan\!\left(x^{2}\right)$. Find $f'(0.8)$, to three decimal places.`, 2.487, 0.001, r`The numerical derivative at 0.8, in radian mode, is $2.487$.`, c),
    num("hard", r`Evaluate $${I(0, 1, r`\sqrt{1+e^{x}}`)}$, to three decimal places.`, 1.6421, 0.001, r`The numerical integral is $1.642$.`, c),
    num("hard", r`Let $f(x)=x^{x}$ for $x\gt0$. Find $f'(2)$, to three decimal places.`, 6.7726, 0.001, r`The numerical derivative at 2 is $6.773$ (exactly $4(\ln2+1)$).`, c),
    num("hard", r`Evaluate $${I(1, 3, r`(\ln x)^{2}`)}$, to three decimal places.`, 1.0292, 0.001, r`The numerical integral is $1.029$.`, c),
    mc("hard", r`An intersection point found on the calculator will be used as a limit of integration. What should be done with it?`, "Store it in the calculator at full precision and use the stored value.", ["Round it to two decimal places and retype it.", "Round it to the nearest whole number.", "Write it down to three decimal places and retype that."], r`A rounded limit can change the third decimal place of the final answer.`),
  ];
}

export default [
  { code: "0.1", gen: g01 },
  { code: "0.2", gen: g02 },
  { code: "0.3", gen: g03 },
  { code: "0.4", gen: g04 },
];
