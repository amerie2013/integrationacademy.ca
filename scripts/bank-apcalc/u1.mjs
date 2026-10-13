// AP Calculus AB exam prep — Unit 1 (Limits and Continuity): question bank.
// Original questions in exam format. Wrong options are the specific errors
// students make (reading the dot, substituting into a composition, dropping a
// sign with √(x²), and so on), and each explanation names the error.
import { mc, num, tbl } from "./helpers.mjs";
import { plot } from "../apcalc/fig.mjs";

const r = String.raw;
const lim = (to, body, v = "x") => `\\displaystyle\\lim_{${v}\\to ${to}}${body}`;
const DNE = "does not exist";

// ── figures shared by several questions ──
// f: jump at x = -2 (3 from the left, 1 from the right, value 1); removable discontinuity at x = 1 (limit -2, value 2).
// This graph belongs to the bank only; lesson 1.2 has a different reference graph.
const figF = () => {
  const g = plot({ w: 400, h: 320, x: [-5, 6], y: [-4, 5], alt: "Graph of f" });
  g.curve((x) => x + 5, -4, -2).curve((x) => x * x - 3, -2, 1).curve((x) => x - 3, 1, 5);
  g.dot(-4, 1).hole(-2, 3).dot(-2, 1).hole(1, -2).dot(1, 2).dot(5, 2).label(3.2, 1.2, "y = f(x)");
  return g;
};
// g: removable discontinuity at x = -2 (limit 1, value 3); jump at x = 1 (4 from the left, 2 from the right)
const figG = () => {
  const g = plot({ w: 400, h: 320, x: [-5, 6], y: [-3, 5], alt: "Graph of g" });
  g.curve((x) => -x - 1, -4, -2).curve((x) => x + 3, -2, 1).curve((x) => (x - 3) ** 2 - 2, 1, 5);
  g.dot(-4, 3).hole(-2, 1).dot(-2, 3).dot(1, 4).hole(1, 2).dot(5, 2).label(3.9, 0.4, "y = g(x)");
  return g;
};
// h(x) = (x + 1)/(x − 2): vertical asymptote x = 2, horizontal asymptote y = 1
const figH = () => {
  const h = (x) => (x + 1) / (x - 2);
  const g = plot({ w: 400, h: 320, x: [-6, 9], y: [-5, 7], alt: "Graph of h with asymptotes" });
  g.vline(2).hline(1).curve(h, -6, 1.75).curve(h, 2.25, 9).label(5.6, 2.6, "y = h(x)");
  return g;
};
const F = "The graph of the function $f$ is shown. ";
const G = "The graph of the function $g$ is shown. ";
const H = "The graph of the function $h$ is shown, with its asymptotes drawn as dashed lines. ";

// ── 1.1 The Instant Problem ───────────────
function g11() {
  return [
    mc("easy", r`What is the average rate of change of $f(x)=x^2+3x$ over the interval $[1,4]$?`, "$8$", ["$24$", "$6$", r`$\dfrac{32}{3}$`], r`$\dfrac{f(4)-f(1)}{4-1}=\dfrac{28-4}{3}=8$. The option 24 is the change in $f$ without dividing by the width.`),
    mc("easy", r`The statement $${lim("c", "f(x)=L")}$ means that`, r`$f(x)$ can be made arbitrarily close to $L$ by taking $x$ sufficiently close to $c$, with $x\neq c$`, [r`$f(c)=L$`, r`$f$ is defined at $x=c$`, r`$f(x)=L$ for every $x$ near $c$`], r`A limit describes the values of $f$ near $c$, never at $c$. It does not require $f(c)$ to exist or to equal $L$.`),
    mc("easy", r`A function $f$ has $${lim("2^-", "f(x)=4")}$, $${lim("2^+", "f(x)=4")}$ and $f(2)=9$. What is $${lim("2", "f(x)")}$?`, "$4$", ["$9$", DNE, r`$\dfrac{13}{2}$`], r`The one-sided limits agree, so the limit is 4. The value $f(2)=9$ is irrelevant to the limit.`),
    mc("easy", r`A function $h$ has $${lim("0^-", "h(x)=3")}$ and $${lim("0^+", "h(x)=-3")}$. What is $${lim("0", "h(x)")}$?`, DNE, ["$0$", "$3$", "$-3$"], r`The one-sided limits exist but are unequal, so the two-sided limit does not exist. Averaging them to 0 is not valid.`),
    num("easy", r`Find the average rate of change of $f(x)=2^x$ over the interval $[1,3]$.`, 3, 0, r`$\dfrac{2^3-2^1}{3-1}=\dfrac{6}{2}=3$.`),
    mc("medium", r`The volume of water in a tank, $V(t)$ litres, is recorded at selected times $t$ minutes. ${tbl("t", [0, 3, 7, 12], "V(t)", [50, 62, 90, 80])} What is the average rate of change of $V$, in litres per minute, over $3\le t\le 7$?`, "$7$", ["$28$", r`$\dfrac{90}{7}$`, "$4$"], r`$\dfrac{V(7)-V(3)}{7-3}=\dfrac{90-62}{4}=7$.`),
    mc("medium", r`For the tank above, $\dfrac{V(12)-V(7)}{12-7}=-2$, where $V(t)$ is the volume in litres at time $t$ minutes. Which statement correctly interprets this value?`, "From $t=7$ to $t=12$ minutes, the volume of water decreased at an average rate of 2 litres per minute.", ["At $t=12$ minutes, the volume of water is decreasing at 2 litres per minute.", "The volume of water decreased by 2 litres between $t=7$ and $t=12$ minutes.", "The average volume of water between $t=7$ and $t=12$ minutes is 2 litres."], r`A difference quotient is an average rate over an interval. A correct interpretation names the interval, says "average rate", and gives units of litres per minute.`),
    mc("medium", r`For $s(t)=t^2+5t$ and $h\neq0$, the average rate of change of $s$ over $[3,3+h]$ simplifies to`, "$11+h$", ["$11$", "$6+h$", "$11h+h^2$"], r`$\dfrac{(3+h)^2+5(3+h)-24}{h}=\dfrac{11h+h^2}{h}=11+h$. The option $11h+h^2$ forgets to divide by $h$; 11 is the limit, not the average rate.`),
    mc("medium", r`Let $g(x)=\dfrac{x^2-1}{x-1}$ for $x\neq1$ and $g(1)=5$. What is $${lim("1", "g(x)")}$?`, "$2$", ["$5$", DNE, "$0$"], r`For $x\neq1$, $g(x)=x+1$, which approaches 2. The assigned value $g(1)=5$ does not affect the limit.`),
    mc("medium", r`If $${lim("3", "f(x)=7")}$, which of the following must be true? I. $f(3)=7$. II. $${lim("3^-", "f(x)=7")}$. III. $f$ is defined at $x=3$.`, "II only", ["I only", "I and II only", "I, II and III"], r`A two-sided limit of 7 forces both one-sided limits to be 7. It says nothing about whether $f(3)$ exists or what it equals.`),
    num("medium", r`Find the average rate of change of $f(x)=\sqrt{x}$ over the interval $[4,9]$. Give your answer as a decimal.`, 0.2, 0.001, r`$\dfrac{\sqrt9-\sqrt4}{9-4}=\dfrac{1}{5}=0.2$.`),
    mc("hard", r`The average rate of change of a function $f$ over $[1,3]$ is 5, and $f(1)=-2$. What is $f(3)$?`, "$8$", ["$10$", "$3$", "$13$"], r`$\dfrac{f(3)-(-2)}{2}=5$ gives $f(3)+2=10$, so $f(3)=8$.`),
    mc("hard", r`Let $k(x)=\dfrac{x^2-5x}{x-5}$ for $x\neq5$ and $k(5)=c$. For what value of $c$ is $${lim("5", "k(x)=k(5)")}$?`, "$5$", ["$0$", "$10$", "There is no such value."], r`For $x\neq5$, $k(x)=x$, so the limit is 5. The limit equals $k(5)$ exactly when $c=5$.`),
    mc("hard", r`A particle's position is $s(t)=5t^2$ metres at time $t$ seconds. As $h\to0$, the average velocity of the particle over $[2,2+h]$ approaches`, "$20$ m/s", ["$10$ m/s", "$25$ m/s", "$5$ m/s"], r`$\dfrac{5(2+h)^2-20}{h}=\dfrac{20h+5h^2}{h}=20+5h\to20$.`),
    mc("hard", r`A function $f$ satisfies $${lim("1^-", "f(x)=2")}$ and $f(1)=2$. Which statement must be true?`, r`None of the other statements must be true.`, [r`$${lim("1", "f(x)=2")}$`, r`$f$ is continuous at $x=1$`, r`$${lim("1^+", "f(x)=2")}$`], r`Nothing is known about the right-hand limit, so the two-sided limit and continuity are both undetermined.`),
    mc("hard", r`The function $p$ gives the population of a town, in thousands, $t$ years after 2000. If the average rate of change of $p$ over $[5,15]$ is $-0.4$, which statement is correct?`, "The population in 2015 was 4 thousand less than in 2005.", ["The population decreased by 0.4 thousand people between 2005 and 2015.", "The population was decreasing at every moment between 2005 and 2015.", "The population in 2015 was 0.4 thousand."], r`Total change = average rate × width $=-0.4\times10=-4$ thousand. An average rate says nothing about each individual moment.`),
  ];
}

// ── 1.2 Reading Limits off a Graph ───────────────
function g12() {
  const f = { fig: figF() }, g = { fig: figG() };
  return [
    mc("easy", F + r`What is $${lim("1", "f(x)")}$?`, "$-2$", ["$2$", DNE, "$1$"], r`Both branches head toward the open circle at height $-2$. The filled dot at height 2 is $f(1)$, not the limit.`, f),
    mc("easy", F + r`What is $f(1)$?`, "$2$", ["$-2$", "undefined", "$0$"], r`The filled dot at $x=1$ is at height 2. The open circle at height $-2$ marks the limit.`, f),
    mc("easy", F + r`What is $${lim("-2^-", "f(x)")}$?`, "$3$", ["$1$", DNE, "$-2$"], r`Approaching $-2$ from the left, the line rises toward the open circle at height 3.`, f),
    mc("easy", F + r`What is $${lim("-2^+", "f(x)")}$?`, "$1$", ["$3$", DNE, "$-2$"], r`Just to the right of $-2$ the graph leaves the filled dot at $(-2,1)$, so the right-hand limit is 1.`, f),
    mc("easy", G + r`What is $${lim("1^+", "g(x)")}$?`, "$2$", ["$4$", DNE, "$1$"], r`To the right of 1 the graph starts from the open circle at height 2. The value 4 is the left-hand limit and $g(1)$.`, g),
    mc("medium", F + r`What is $${lim("-2", "f(x)")}$?`, DNE, ["$3$", "$1$", "$2$"], r`The left-hand limit is 3 and the right-hand limit is 1. They are unequal, so the two-sided limit does not exist.`, f),
    mc("medium", F + r`What is the value of $${lim("1", r`\big[f(x)\big]^3`)}-f(1)$?`, "$-10$", ["$6$", "$-4$", "$-8$"], r`$f(x)\to-2$, so $[f(x)]^3\to-8$, and $f(1)=2$: $-8-2=-10$. The option 6 uses $f(1)$ in place of the limit.`, f),
    mc("medium", F + r`Which of the following are true? I. $${lim("1", "f(x)")}$ exists. II. $f(1)$ exists. III. $${lim("1", "f(x)=f(1)")}$.`, "I and II only", ["I only", "II only", "I, II and III"], r`The limit is $-2$ and $f(1)=2$: both exist, but they are not equal.`, f),
    mc("medium", G + r`What is $${lim("-2", "g(x)")}$?`, "$1$", ["$3$", DNE, "$-2$"], r`Both sides approach the open circle at height 1. The filled dot at height 3 is $g(-2)$.`, g),
    mc("medium", G + r`What is $g(-2)+${lim("1^-", "g(x)")}$?`, "$7$", ["$5$", "$3$", DNE], r`$g(-2)=3$ (the filled dot) and the left-hand limit at 1 is 4, giving 7. The option 5 uses the limit at $-2$ instead of the value.`, g),
    mc("medium", G + r`For which value(s) of $a$ in $(-4,5)$ does $${lim("a", "g(x)", "x")}$ exist but differ from $g(a)$?`, "$a=-2$ only", ["$a=1$ only", "$a=-2$ and $a=1$", "no value of $a$"], r`At $-2$ the limit is 1 but $g(-2)=3$. At 1 the two-sided limit does not exist at all.`, g),
    mc("medium", r`Which statement best describes $${lim("0", r`\sin\!\left(\dfrac{1}{x}\right)`)}$?`, "It does not exist because the values oscillate between $-1$ and $1$.", ["It equals $0$.", "It equals $1$.", "It does not exist because the values grow without bound."], r`As $x\to0$, $\tfrac1x$ runs through infinitely many periods of sine, so the values never settle. They stay bounded.`),
    mc("hard", F + r`What is $${lim("1^-", r`f\big(f(x)\big)`)}$?`, "$3$", ["$1$", "$-1$", DNE], r`As $x\to1^-$, $f(x)\to-2$ through values below $-2$. Then $${lim("-2^-", "f(u)", "u")}=3$. The option $-1$ is $f(f(1))=f(2)$.`, f),
    mc("hard", F + r`What is $${lim("1", r`f\big(f(x)\big)`)}$?`, DNE, ["$3$", "$1$", "$-1$"], r`From the left $f(x)\to-2$ from below, giving $${lim("-2^-", "f(u)", "u")}=3$. From the right $f(x)\to-2$ from above, giving $${lim("-2^+", "f(u)", "u")}=1$. The one-sided limits differ.`, f),
    mc("hard", G + r`What is $${lim("-2", r`g\big(g(x)\big)`)}$?`, "$2$", ["$4$", "$-2$", DNE], r`From both sides $g(x)\to1$ through values greater than 1, so we need $${lim("1^+", "g(u)", "u")}=2$. The option 4 is $g(1)$; $-2$ is $g(g(-2))=g(3)$.`, g),
    mc("hard", G + r`What is $${lim("1^+", r`g\big(g(x)\big)`)}$?`, "$-1$", ["$2$", "$4$", DNE], r`As $x\to1^+$, $g(x)\to2$, and $g$ is continuous at 2 with $g(2)=(2-3)^2-2=-1$.`, g),
    mc("hard", G + r`At how many values of $x$ in the open interval $(-4,5)$ is $g$ discontinuous?`, "$2$", ["$0$", "$1$", "$3$"], r`$g$ is discontinuous at $x=-2$ (limit 1, value 3) and at $x=1$ (a jump).`, g),
  ];
}

// ── 1.3 Limits from Numerical Evidence ───────────────
function g13() {
  const c = { calc: true };
  return [
    mc("easy", r`Selected values of $f$ are shown. ${tbl("x", [2.9, 2.99, 3.01, 3.1], "f(x)", [6.8, 6.98, 7.02, 7.2])} Which is the best estimate of $${lim("3", "f(x)")}$?`, "$7$", ["$6.98$", "$3$", "$7.02$"], r`From both sides the values close in on 7. The nearest table entries are not themselves the limit.`),
    mc("easy", r`Selected values of $g$ are shown. ${tbl("x", [-0.1, -0.01, 0.01, 0.1], "g(x)", [-3.9, -3.99, 4.01, 4.1])} What does the table suggest about $${lim("0", "g(x)")}$?`, "It does not exist.", ["It is $0$.", "It is $4$.", "It is $-4$."], r`The left-hand values approach $-4$ and the right-hand values approach 4, so the table suggests the two-sided limit does not exist.`),
    num("easy", r`Selected values of $q$ are shown. ${tbl("x", [0.9, 0.99, 1.01, 1.1], "q(x)", [4.59, 4.9599, 5.0401, 5.41])} Estimate $${lim("1", "q(x)")}$.`, 5, 0, r`The values approach 5 from below on the left and from above on the right.`),
    mc("easy", r`To estimate $${lim("2", "f(x)")}$ from a table, which set of inputs is most useful?`, "$1.9,\\ 1.99,\\ 1.999,\\ 2.001,\\ 2.01,\\ 2.1$", ["$1.9,\\ 1.99,\\ 1.999,\\ 1.9999$", "$0,\\ 1,\\ 2,\\ 3,\\ 4$", "$2,\\ 2.5,\\ 3,\\ 3.5$"], r`A two-sided limit needs inputs approaching 2 from both sides. Inputs on one side only test a one-sided limit.`),
    mc("medium", r`Selected values of $f$ are shown. ${tbl("x", [1.9, 1.99, 2, 2.01, 2.1], "f(x)", [4.7, 4.97, 10, 5.03, 5.3])} Which is the best estimate of $${lim("2", "f(x)")}$?`, "$5$", ["$10$", "$7.5$", DNE], r`The entry at $x=2$ is the function value. The surrounding values approach 5 from both sides.`),
    mc("medium", r`Selected values of $w$ are shown. ${tbl("x", [0.9, 0.99, 0.999], "w(x)", [2.71, 2.9701, 2.997])} What can reasonably be concluded?`, r`The table suggests $${lim("1^-", "w(x)=3")}$ and gives no information about the right-hand limit.`, [r`$${lim("1", "w(x)=3")}$`, r`$w(1)=3$`, r`$w$ is continuous at $x=1$`], r`All the inputs are less than 1, so only the left-hand limit is being sampled.`),
    mc("medium", r`Use a table to estimate $${lim("0", r`\dfrac{\sin(5x)}{x}`)}$.`, "$5$", ["$0.087$", "$1$", "$0$"], r`In radian mode the values at $x=\pm0.01$ are about 4.998. The value 0.087 comes from degree mode.`, c),
    mc("medium", r`Use a table to estimate $${lim("0", r`\dfrac{e^{x}-1}{x}`)}$.`, "$1$", ["$0$", "$2.718$", DNE], r`At $x=0.001$ the value is 1.0005 and at $x=-0.001$ it is 0.9995. Both sides approach 1.`, c),
    mc("medium", r`The function $f$ is continuous at $x=4$. Selected values are shown. ${tbl("x", [3.9, 3.99, 4.01, 4.1], "f(x)", [1.8, 1.98, 2.02, 2.2])} Which is the best estimate of $f(4)$?`, "$2$", ["$1.98$", "$2.02$", "$4$"], r`Because $f$ is continuous at 4, $f(4)$ equals the limit, which the table suggests is 2.`),
    mc("hard", r`For $h(x)=\sin\!\left(\dfrac{2\pi}{x}\right)$, a student computes $h(0.1)=h(0.01)=h(0.001)=0$ and concludes that $${lim("0", "h(x)=0")}$. Which statement is correct?`, "The conclusion is unjustified: every chosen input makes $\\dfrac{2\\pi}{x}$ a multiple of $2\\pi$, and the limit does not exist.", ["The conclusion is correct because three values agree.", "The conclusion is correct because $h$ is bounded.", "The conclusion is wrong because the limit is $1$."], r`The inputs were unrepresentative. At $x=\tfrac{4}{5},\tfrac{4}{41},\dots$ the function equals 1, so it oscillates and has no limit.`),
    mc("hard", r`Use a table to estimate $${lim("0", r`(1+x)^{1/x}`)}$.`, "$2.718$", ["$1$", "$2$", "The values grow without bound."], r`At $x=0.001$ the value is 2.7169 and at $x=-0.001$ it is 2.7196. The limit is the number $e$.`, c),
    mc("hard", r`Use a table to estimate $${lim("2", r`\dfrac{2^{x}-4}{x-2}`)}$ to three decimal places.`, "$2.773$", ["$4.000$", "$2.000$", "$1.386$"], r`At $x=2.001$ the value is 2.7736 and at $x=1.999$ it is 2.7716, so the limit is about 2.773 (exactly $4\ln2$).`, c),
    mc("hard", r`A student's calculator reports $\dfrac{\sin x}{x}\approx0.01745$ at $x=0.001$. The most likely explanation is that`, "the calculator is in degree mode", ["the limit of $\\dfrac{\\sin x}{x}$ as $x\\to0$ is $0.01745$", "the input is too close to $0$ and rounding has occurred", "the function is undefined near $0$"], r`$0.01745\approx\tfrac{\pi}{180}$, the value obtained when $x$ is read in degrees. In radians the value is 0.9999998.`),
    mc("hard", r`A function $f$ is defined for all real numbers. A table shows $f(4.9)=8.8$, $f(4.99)=8.98$, $f(5.01)=9.02$, $f(5.1)=9.2$ and $f(5)=3$. Which statement must be true?`, "None of the other statements must be true.", [r`$${lim("5", "f(x)=9")}$`, r`$f$ is not continuous at $x=5$`, r`$${lim("5^-", "f(x)")}=${lim("5^+", "f(x)")}$`], r`Four values near 5 suggest a limit of 9 but cannot force it; the function is unrestricted at inputs closer to 5 than those shown.`),
    num("hard", r`Use a table to estimate $${lim("0", r`\dfrac{1-\cos(2x)}{x^2}`)}$.`, 2, 0.001, r`At $x=\pm0.01$ the value is 1.99993, and at $\pm0.001$ it is 1.9999993. The limit is 2.`, c),
  ];
}

// ── 1.4 Limit Laws and Direct Substitution ───────────────
function g14() {
  const fg = r`Given $${lim("2", "f(x)=5")}$ and $${lim("2", "g(x)=-3")}$, `;
  return [
    mc("easy", r`Evaluate $${lim("3", r`\left(x^2-2x+5\right)`)}$.`, "$8$", ["$20$", "$10$", "$2$"], r`Polynomials are continuous: substitute to get $9-6+5=8$.`),
    mc("easy", r`Evaluate $${lim("1", r`\dfrac{x+4}{x^2+1}`)}$.`, r`$\dfrac{5}{2}$`, ["$5$", r`$\dfrac{5}{3}$`, DNE], r`The denominator is 2, not zero, so substitute: $\dfrac{5}{2}$.`),
    mc("easy", r`Evaluate $${lim("0", r`\left(e^{x}+\cos x\right)`)}$.`, "$2$", ["$1$", "$0$", "$e$"], r`$e^0+\cos0=1+1=2$.`),
    num("easy", r`Evaluate $${lim("-1", r`\left(2x^3+7\right)`)}$.`, 5, 0, r`$2(-1)^3+7=-2+7=5$.`),
    mc("medium", fg + r`find $${lim("2", r`\big[2f(x)-g(x)\big]`)}$.`, "$13$", ["$7$", "$2$", "$16$"], r`$2(5)-(-3)=13$. The option 7 subtracts 3 instead of $-3$.`),
    mc("medium", fg + r`find $${lim("2", r`\Big[f(x)\,g(x)+\big(g(x)\big)^2\Big]`)}$.`, "$-6$", ["$-24$", "$24$", "$6$"], r`$(5)(-3)+(-3)^2=-15+9=-6$.`),
    mc("medium", fg + r`what can be said about $${lim("2", r`\dfrac{f(x)}{g(x)+3}`)}$?`, "It does not exist.", ["It is $0$.", r`It is $\dfrac{5}{6}$.`, "It is $5$."], r`The denominator tends to 0 while the numerator tends to $5\neq0$, so the quotient is unbounded. The quotient law cannot be used.`),
    mc("medium", fg + r`find $${lim("2", r`\sqrt{f(x)+4}`)}$.`, "$3$", ["$9$", r`$\sqrt5+2$`, DNE], r`$\sqrt{5+4}=3$. The root law applies because the inside limit, 9, is positive.`),
    mc("medium", r`Evaluate $${lim(r`\pi/6`, r`\left(2\sin x+\cos(2x)\right)`)}$.`, r`$\dfrac{3}{2}$`, ["$2$", r`$1+\dfrac{\sqrt3}{2}$`, r`$\dfrac{1}{2}$`], r`$2\cdot\tfrac12+\cos\tfrac{\pi}{3}=1+\tfrac12=\tfrac32$.`),
    mc("medium", r`The functions $f$ and $g$ are continuous for all real numbers, with $f(2)=4$, $g(2)=-1$ and $g(4)=6$. What is $${lim("2", r`g\big(f(x)\big)`)}$?`, "$6$", ["$-1$", "$4$", "$24$"], r`Since $f$ is continuous, $f(x)\to4$; since $g$ is continuous at 4, the limit is $g(4)=6$.`),
    mc("hard", r`If $${lim("2", r`\dfrac{f(x)-6}{x-2}`)}=4$, what is $${lim("2", "f(x)")}$?`, "$6$", ["$4$", "$10$", "It cannot be determined."], r`$f(x)-6=\dfrac{f(x)-6}{x-2}\cdot(x-2)\to4\cdot0=0$, so $f(x)\to6$.`),
    mc("hard", r`Let $g(x)=3-(x-2)^2$ and $f(u)=\begin{cases}2u,&u\lt3\\u+5,&u\ge3\end{cases}$. What is $${lim("2", r`f\big(g(x)\big)`)}$?`, "$6$", ["$8$", DNE, "$3$"], r`For $x\neq2$, $g(x)\lt3$, so $g(x)\to3^-$ and the limit is $${lim("3^-", "2u", "u")}=6$. The option 8 substitutes $f(3)$.`),
    mc("hard", r`Suppose $${lim("c", "f(x)=L")}$ and $${lim("c", "g(x)=M")}$, where $L$ and $M$ are real numbers. Which statement must be true?`, r`$${lim("c", r`\big[f(x)\,g(x)\big]`)}=LM$`, [r`$${lim("c", r`\dfrac{f(x)}{g(x)}`)}=\dfrac{L}{M}$`, r`$${lim("c", r`f\big(g(x)\big)`)}=f(M)$`, r`$f(c)=L$`], r`The product law has no extra condition. The quotient law needs $M\neq0$, and the composition needs $f$ continuous at $M$.`),
    mc("hard", r`Given $${lim("4", "f(x)=9")}$, find $${lim("4", r`\dfrac{\sqrt{f(x)}-x}{f(x)-3x}`)}$.`, r`$\dfrac{1}{3}$`, [r`$-\dfrac{1}{3}$`, "$3$", DNE], r`Numerator: $\sqrt9-4=-1$. Denominator: $9-12=-3$. The quotient is $\dfrac{-1}{-3}=\dfrac13$.`),
    mc("hard", r`If $${lim("0", r`\dfrac{f(x)}{x}`)}=3$, which of the following must be true?`, r`$${lim("0", "f(x)=0")}$`, [r`$${lim("0", "f(x)=3")}$`, r`$f(0)=0$`, r`$f(x)=3x$ for all $x$`], r`$f(x)=\dfrac{f(x)}{x}\cdot x\to3\cdot0=0$. Nothing is implied about the value $f(0)$ itself.`),
    num("hard", r`Given $${lim("1", "f(x)=-2")}$ and $${lim("1", "g(x)=6")}$, evaluate $${lim("1", r`\dfrac{\big[f(x)\big]^3+g(x)}{x+f(x)\,g(x)+12}`)}$.`, -2, 0, r`Numerator: $-8+6=-2$. Denominator: $1-12+12=1$. The limit is $-2$.`),
  ];
}

// ── 1.5 Resolving 0/0 ───────────────
function g15() {
  return [
    mc("easy", r`Evaluate $${lim("6", r`\dfrac{x^2-36}{x-6}`)}$.`, "$12$", ["$0$", DNE, "$6$"], r`$\dfrac{(x-6)(x+6)}{x-6}=x+6\to12$.`),
    mc("easy", r`Evaluate $${lim("-2", r`\dfrac{x^2+5x+6}{x+2}`)}$.`, "$1$", ["$0$", "$-1$", DNE], r`$x^2+5x+6=(x+2)(x+3)$, so the expression is $x+3\to1$.`),
    mc("easy", r`Substituting into a limit gives $\dfrac{0}{0}$. This means that`, "the form is indeterminate and the expression must be rewritten", ["the limit is $0$", "the limit is $1$", "the limit does not exist"], r`$\tfrac00$ is a signal, not a value. The limit may be any number, or may fail to exist.`),
    num("easy", r`Evaluate $${lim("8", r`\dfrac{x^2-64}{x-8}`)}$.`, 16, 0, r`The expression simplifies to $x+8$, which tends to 16.`),
    mc("medium", r`Evaluate $${lim("3", r`\dfrac{x^2-9}{x^2-x-6}`)}$.`, r`$\dfrac{6}{5}$`, ["$1$", r`$\dfrac{3}{2}$`, DNE], r`$\dfrac{(x-3)(x+3)}{(x-3)(x+2)}=\dfrac{x+3}{x+2}\to\dfrac65$.`),
    mc("medium", r`Evaluate $${lim("0", r`\dfrac{\sqrt{x+16}-4}{x}`)}$.`, r`$\dfrac{1}{8}$`, [r`$\dfrac{1}{4}$`, "$0$", "$8$"], r`Multiply by the conjugate: $\dfrac{x}{x\left(\sqrt{x+16}+4\right)}\to\dfrac{1}{8}$. The option $\tfrac14$ forgets to add the two 4s.`),
    mc("medium", r`Evaluate $${lim("1", r`\dfrac{\dfrac{1}{x+1}-\dfrac{1}{2}}{x-1}`)}$.`, r`$-\dfrac{1}{4}$`, [r`$\dfrac{1}{4}$`, r`$-\dfrac{1}{2}$`, "$0$"], r`$\dfrac{1}{x+1}-\dfrac12=\dfrac{1-x}{2(x+1)}$. Dividing by $x-1$ gives $-\dfrac{1}{2(x+1)}\to-\dfrac14$.`),
    mc("medium", r`Evaluate $${lim("0", r`\dfrac{(3+h)^2-9}{h}`, "h")}$.`, "$6$", ["$9$", "$0$", "$3$"], r`$\dfrac{6h+h^2}{h}=6+h\to6$.`),
    mc("medium", r`Evaluate $${lim("2", r`\dfrac{x^3-8}{x^2-4}`)}$.`, "$3$", ["$2$", "$12$", r`$\dfrac{3}{2}$`], r`$\dfrac{(x-2)(x^2+2x+4)}{(x-2)(x+2)}\to\dfrac{12}{4}=3$.`),
    mc("medium", r`Evaluate $${lim("9", r`\dfrac{x-9}{\sqrt{x}-3}`)}$.`, "$6$", ["$3$", r`$\dfrac{1}{6}$`, "$0$"], r`$x-9=(\sqrt x-3)(\sqrt x+3)$, so the expression is $\sqrt x+3\to6$.`),
    mc("hard", r`The limit $${lim("3", r`\dfrac{x^2+kx-3}{x-3}`)}$ exists for one value of the constant $k$. What is the value of the limit?`, "$4$", ["$-2$", "$2$", "$6$"], r`The numerator must vanish at 3: $9+3k-3=0$, so $k=-2$. Then $x^2-2x-3=(x-3)(x+1)$ and the limit is 4. The option $-2$ is $k$, not the limit.`),
    mc("hard", r`Evaluate $${lim("-4^+", r`\dfrac{|x+4|}{x^2-16}`)}$.`, r`$-\dfrac{1}{8}$`, [r`$\dfrac{1}{8}$`, DNE, "$0$"], r`For $x\gt-4$, $|x+4|=x+4$, so the expression is $\dfrac{1}{x-4}\to-\dfrac18$. (The two-sided limit does not exist, but this is one-sided.)`),
    mc("hard", r`Evaluate $${lim("0", r`\dfrac{\sqrt{1+x}-\sqrt{1-x}}{x}`)}$.`, "$1$", ["$0$", r`$\dfrac{1}{2}$`, "$2$"], r`Multiply by the conjugate: $\dfrac{(1+x)-(1-x)}{x\left(\sqrt{1+x}+\sqrt{1-x}\right)}=\dfrac{2}{\sqrt{1+x}+\sqrt{1-x}}\to1$.`),
    mc("hard", r`Evaluate $${lim("0", r`\dfrac{\dfrac{1}{(2+h)^2}-\dfrac{1}{4}}{h}`, "h")}$.`, r`$-\dfrac{1}{4}$`, [r`$\dfrac{1}{4}$`, r`$-\dfrac{1}{16}$`, r`$-1$`], r`$\dfrac{4-(2+h)^2}{4(2+h)^2\,h}=\dfrac{-4-h}{4(2+h)^2}\to\dfrac{-4}{16}=-\dfrac14$.`),
    mc("hard", r`Evaluate $${lim("1", r`\dfrac{x^4-1}{x^3-1}`)}$.`, r`$\dfrac{4}{3}$`, ["$1$", r`$\dfrac{3}{4}$`, DNE], r`$\dfrac{(x-1)(x+1)(x^2+1)}{(x-1)(x^2+x+1)}\to\dfrac{2\cdot2}{3}=\dfrac43$.`),
    mc("hard", r`Evaluate $${lim("2", r`\dfrac{x^2-4}{(x-2)^2}`)}$.`, DNE, ["$4$", "$0$", "$2$"], r`After cancelling one factor, $\dfrac{x+2}{x-2}$ still has a nonzero numerator over a zero denominator, so the limit does not exist (it is $-\infty$ from the left and $\infty$ from the right).`),
  ];
}

// ── 1.6 The Squeeze Theorem ───────────────
function g16() {
  return [
    mc("easy", r`Evaluate $${lim("0", r`\dfrac{\sin(6x)}{x}`)}$.`, "$6$", ["$1$", "$0$", r`$\dfrac{1}{6}$`], r`$\dfrac{\sin(6x)}{x}=6\cdot\dfrac{\sin(6x)}{6x}\to6$.`),
    mc("easy", r`Evaluate $${lim("0", r`\dfrac{\sin x}{4x}`)}$.`, r`$\dfrac{1}{4}$`, ["$4$", "$1$", "$0$"], r`$\dfrac14\cdot\dfrac{\sin x}{x}\to\dfrac14$.`),
    mc("easy", r`Suppose $g(x)\le f(x)\le h(x)$ for all $x$ near $c$. The squeeze theorem gives $${lim("c", "f(x)=L")}$ provided that`, r`$${lim("c", "g(x)")}=${lim("c", "h(x)")}=L$`, [r`$g(c)=h(c)=L$`, r`$${lim("c", "g(x)")}$ and $${lim("c", "h(x)")}$ both exist`, r`$f$ is continuous at $c$`], r`The two bounding functions must have the same limit. Existing but unequal limits give no conclusion.`),
    num("easy", r`Evaluate $${lim("0", r`\dfrac{\sin(9x)}{3x}`)}$.`, 3, 0, r`$\dfrac93\cdot\dfrac{\sin(9x)}{9x}\to3$.`),
    mc("medium", r`A function $f$ satisfies $3x-2\le f(x)\le x^2-x+2$ for all $x$. What is $${lim("2", "f(x)")}$?`, "$4$", ["$2$", "$0$", "It cannot be determined."], r`Both bounds equal 4 at $x=2$ and are continuous, so by the squeeze theorem the limit is 4.`),
    mc("medium", r`Evaluate $${lim("0", r`\dfrac{\sin(3x)}{\sin(5x)}`)}$.`, r`$\dfrac{3}{5}$`, ["$1$", r`$\dfrac{5}{3}$`, "$0$"], r`$\dfrac{\sin 3x}{3x}\cdot\dfrac{5x}{\sin5x}\cdot\dfrac{3}{5}\to\dfrac35$.`),
    mc("medium", r`Evaluate $${lim("0", r`x^2\cos\!\left(\dfrac{1}{x}\right)`)}$.`, "$0$", [DNE, "$1$", r`$\infty$`], r`$-x^2\le x^2\cos\tfrac1x\le x^2$ and both bounds tend to 0. The cosine factor alone has no limit, but the product does.`),
    mc("medium", r`Evaluate $${lim("0", r`\dfrac{\tan(2x)}{x}`)}$.`, "$2$", ["$1$", "$0$", r`$\dfrac{1}{2}$`], r`$\dfrac{\sin(2x)}{x}\cdot\dfrac{1}{\cos(2x)}\to2\cdot1=2$.`),
    mc("medium", r`Evaluate $${lim("0", r`\dfrac{\sin x}{x^2+x}`)}$.`, "$1$", ["$0$", DNE, r`$\dfrac{1}{2}$`], r`$\dfrac{\sin x}{x}\cdot\dfrac{1}{x+1}\to1\cdot1=1$.`),
    mc("medium", r`Evaluate $${lim(r`\infty`, r`\dfrac{\cos x}{x}`)}$.`, "$0$", ["$1$", DNE, r`$\infty$`], r`For $x\gt0$, $-\tfrac1x\le\tfrac{\cos x}{x}\le\tfrac1x$, and both bounds tend to 0. This is not the limit as $x\to0$.`),
    mc("hard", r`Evaluate $${lim("0", r`\dfrac{1-\cos x}{x\sin x}`)}$.`, r`$\dfrac{1}{2}$`, ["$0$", "$1$", DNE], r`Multiply by $\dfrac{1+\cos x}{1+\cos x}$ to get $\dfrac{\sin x}{x}\cdot\dfrac{1}{1+\cos x}\to\dfrac12$.`),
    mc("hard", r`A function $f$ satisfies $1-x^2\le f(x)\le\cos x$ for all $x$ in $(-1,1)$. What is $${lim("0", "f(x)")}$?`, "$1$", ["$0$", r`$\dfrac{1}{2}$`, "It cannot be determined."], r`Both bounds tend to 1 as $x\to0$, so the squeeze theorem gives 1.`),
    mc("hard", r`A function $f$ satisfies $x\le f(x)\le x+1$ for all $x$. What can be concluded about $${lim("0", "f(x)")}$?`, "Nothing: the bounds have different limits at $0$.", ["It equals $0$.", "It equals $1$.", r`It equals $\dfrac{1}{2}$.`], r`The bounds tend to 0 and 1. The squeeze theorem needs equal outer limits; here the limit of $f$ may not even exist.`),
    mc("hard", r`Evaluate $${lim("0", r`\dfrac{\sin^2(3x)}{x^2}`)}$.`, "$9$", ["$3$", "$1$", "$6$"], r`$\left(\dfrac{\sin(3x)}{x}\right)^2\to3^2=9$.`),
    mc("hard", r`Evaluate $${lim("0", r`\dfrac{\sin(5x)-\sin(3x)}{x}`)}$.`, "$2$", ["$0$", "$8$", "$1$"], r`Split into $\dfrac{\sin 5x}{x}-\dfrac{\sin 3x}{x}\to5-3=2$. Both limits exist, so the difference law applies.`),
    mc("hard", r`Which argument correctly justifies $${lim("0", r`x^2\sin\!\left(\dfrac{1}{x}\right)`)}=0$?`, r`Since $-x^2\le x^2\sin\!\left(\tfrac1x\right)\le x^2$ and $${lim("0", "(-x^2)")}=${lim("0", "x^2")}=0$, the squeeze theorem gives 0.`, [r`$${lim("0", "x^2")}\cdot${lim("0", r`\sin\!\left(\tfrac1x\right)`)}=0\cdot1=0$`, r`Substituting $x=0$ gives $0\cdot\sin(\infty)=0$.`, r`$\sin\!\left(\tfrac1x\right)\approx\tfrac1x$ for small $x$, so the product is approximately $x$.`], r`The sine factor has no limit at 0, so the product law is unavailable. Only the bounding argument is valid.`),
  ];
}

// ── 1.7 Classifying Discontinuities ───────────────
function g17() {
  const g = { fig: figG() };
  const types = (correct) => ["removable", "jump", "infinite", "none: the function is continuous there"].filter((t) => t !== correct);
  const T = (d, prompt, correct, why, o) => mc(d, prompt, correct, types(correct), why, o);
  return [
    T("easy", r`What type of discontinuity does $f(x)=\dfrac{x^2-4}{x+2}$ have at $x=-2$?`, "removable", r`$f(x)=x-2$ for $x\neq-2$, so the limit is $-4$ and exists, but $f(-2)$ is undefined.`),
    T("easy", r`What type of discontinuity does $f(x)=\dfrac{1}{x+2}$ have at $x=-2$?`, "infinite", r`The numerator is 1 and the denominator tends to 0, so the one-sided limits are $\pm\infty$.`),
    mc("easy", r`A function has a jump discontinuity at $x=c$ when`, "both one-sided limits at $c$ exist and are not equal", ["the limit at $c$ exists but differs from $f(c)$", r`a one-sided limit at $c$ is $\infty$ or $-\infty$`, "$f(c)$ is undefined"], r`A jump is defined by two finite, different one-sided limits.`),
    T("medium", G + r`What type of discontinuity does $g$ have at $x=1$?`, "jump", r`The left-hand limit is 4 and the right-hand limit is 2: both exist and they differ.`, g),
    T("medium", G + r`What type of discontinuity does $g$ have at $x=-2$?`, "removable", r`The limit at $-2$ is 1, which exists, but $g(-2)=3$.`, g),
    mc("medium", r`The function $f(x)=\dfrac{x^2-3x-4}{x^2-1}$ has a removable discontinuity at`, "$x=-1$ only", ["$x=1$ only", "$x=-1$ and $x=1$", "no value of $x$"], r`$f(x)=\dfrac{(x-4)(x+1)}{(x-1)(x+1)}$. The factor $(x+1)$ cancels (removable at $-1$); $(x-1)$ remains (infinite at 1).`),
    mc("medium", r`How many vertical asymptotes does the graph of $f(x)=\dfrac{x^2-9}{x^3-9x}$ have?`, "$1$", ["$3$", "$2$", "$0$"], r`$f(x)=\dfrac{(x-3)(x+3)}{x(x-3)(x+3)}=\dfrac1x$ for $x\neq\pm3$. Only $x=0$ is an asymptote; $x=\pm3$ are holes.`),
    T("medium", r`Let $f(x)=\begin{cases}x+2,&x\lt1\\5,&x=1\\4-x,&x\gt1\end{cases}$. What type of discontinuity does $f$ have at $x=1$?`, "removable", r`Both one-sided limits are 3, so the limit exists, but $f(1)=5\neq3$.`),
    T("medium", r`Let $f(x)=\begin{cases}x^2,&x\le2\\x+3,&x\gt2\end{cases}$. What type of discontinuity does $f$ have at $x=2$?`, "jump", r`The left-hand limit is 4 and the right-hand limit is 5.`),
    mc("hard", r`The graph of $f(x)=\dfrac{x^2+x-6}{x^2-4}$ has a hole at the point`, r`$\left(2,\dfrac{5}{4}\right)$`, [r`$\left(2,0\right)$`, r`$\left(-2,\dfrac{5}{4}\right)$`, r`$\left(2,\dfrac{5}{2}\right)$`], r`$f(x)=\dfrac{(x+3)(x-2)}{(x-2)(x+2)}=\dfrac{x+3}{x+2}$ for $x\neq2$, which tends to $\dfrac54$ at $x=2$.`),
    mc("hard", r`For what value of $a$ does $f(x)=\dfrac{x^2+ax+10}{x-2}$ have a removable discontinuity at $x=2$?`, "$-7$", ["$7$", "$-5$", "$-3$"], r`The numerator must be zero at 2: $4+2a+10=0$, so $a=-7$. Then $x^2-7x+10=(x-2)(x-5)$.`),
    T("hard", r`What type of discontinuity does $f(x)=\dfrac{|x-1|}{x-1}$ have at $x=1$?`, "jump", r`$f(x)=1$ for $x\gt1$ and $-1$ for $x\lt1$: finite, unequal one-sided limits.`),
    T("hard", r`What type of discontinuity does $f(x)=\dfrac{x-2}{x^2-4x+4}$ have at $x=2$?`, "infinite", r`$x^2-4x+4=(x-2)^2$, so $f(x)=\dfrac{1}{x-2}$ for $x\neq2$. One factor cancels but one remains, leaving an asymptote.`),
    T("hard", r`What type of discontinuity does $f(x)=\dfrac{\sin x}{x}$ have at $x=0$?`, "removable", r`$f(0)$ is undefined, but the limit as $x\to0$ exists and equals 1.`),
    mc("hard", r`Which function has exactly one removable discontinuity and exactly one infinite discontinuity?`, r`$\dfrac{x-1}{x^2-1}$`, [r`$\dfrac{x^2-1}{x-1}$`, r`$\dfrac{1}{x^2-1}$`, r`$\dfrac{x^2-1}{x^2+1}$`], r`$\dfrac{x-1}{(x-1)(x+1)}$: removable at 1, infinite at $-1$. The others have one hole only, two asymptotes, and no discontinuity.`),
    mc("hard", r`Let $f(x)=\dfrac{(x-1)(x+3)}{(x-1)(x+3)(x-5)}$. Which statement is true?`, "$f$ has two removable discontinuities and one vertical asymptote.", ["$f$ has three vertical asymptotes.", "$f$ has one removable discontinuity and two vertical asymptotes.", "$f$ has no vertical asymptotes."], r`$(x-1)$ and $(x+3)$ cancel, leaving holes at 1 and $-3$; $(x-5)$ remains, giving the asymptote $x=5$.`),
  ];
}

// ── 1.8 The Three-Part Continuity Test ───────────────
function g18() {
  return [
    mc("easy", r`Which single statement is equivalent to "$f$ is continuous at $x=c$"?`, r`$${lim("c", "f(x)=f(c)")}$`, [r`$f(c)$ is defined`, r`$${lim("c", "f(x)")}$ exists`, r`$${lim("c^-", "f(x)")}=${lim("c^+", "f(x)")}$`], r`Writing $\lim f(x)=f(c)$ asserts that both sides exist and are equal. Each other option is only one of the three parts.`),
    mc("easy", r`Let $f(x)=\begin{cases}2x+1,&x\le1\\x^2+2,&x\gt1\end{cases}$. Which statement is true?`, "$f$ is continuous at $x=1$.", ["$f$ has a jump discontinuity at $x=1$.", "$f$ has a removable discontinuity at $x=1$.", "$f(1)$ is undefined."], r`The left-hand limit, right-hand limit and $f(1)$ all equal 3.`),
    mc("easy", r`On which set is $f(x)=\dfrac{1}{x-5}$ continuous?`, r`all real numbers except $x=5$`, ["all real numbers", r`$x\gt5$ only`, r`all real numbers except $x=0$`], r`A rational function is continuous at every point of its domain; only $x=5$ is excluded.`),
    num("easy", r`What value must be assigned to $f(7)$ to make $f(x)=\dfrac{x^2-49}{x-7}$ continuous at $x=7$?`, 14, 0, r`$f(x)=x+7$ for $x\neq7$, so the limit is 14.`),
    mc("medium", r`For what value of $k$ is $f(x)=\begin{cases}kx+1,&x\le2\\x^2-k,&x\gt2\end{cases}$ continuous at $x=2$?`, "$1$", ["$3$", r`$\dfrac{5}{3}$`, "$-1$"], r`$2k+1=4-k$ gives $3k=3$, so $k=1$.`),
    num("medium", r`For what value of $k$ is $f(x)=\begin{cases}x^2+k,&x\lt3\\4x-1,&x\ge3\end{cases}$ continuous at $x=3$?`, 2, 0, r`$9+k=11$, so $k=2$.`),
    mc("medium", r`On which interval is $f(x)=\sqrt{4-x^2}$ continuous?`, "$[-2,2]$", ["$(-2,2)$ only", r`$(-\infty,\infty)$`, r`$[0,2]$ only`], r`The domain is $4-x^2\ge0$, that is $[-2,2]$, and a root function is continuous on its domain (one-sidedly at the endpoints).`),
    mc("medium", r`On which interval is $f(x)=\ln(x-3)$ continuous?`, r`$(3,\infty)$`, [r`$[3,\infty)$`, r`$(0,\infty)$`, r`$(-\infty,\infty)$`], r`The logarithm needs $x-3\gt0$. It is not defined at $x=3$.`),
    mc("medium", r`For what value of $k$ is $f(x)=\begin{cases}\dfrac{\sin(2x)}{x},&x\neq0\\k,&x=0\end{cases}$ continuous at $x=0$?`, "$2$", ["$1$", "$0$", r`$\dfrac{1}{2}$`], r`$${lim("0", r`\dfrac{\sin(2x)}{x}`)}=2$, so $k$ must be 2.`),
    mc("medium", r`The function $g$ is continuous at $x=1$ with $g(1)=4$, and $f$ is continuous at $x=4$ with $f(4)=-2$. What is $${lim("1", r`f\big(g(x)\big)`)}$?`, "$-2$", ["$4$", "$-8$", "It cannot be determined."], r`A composition of continuous functions is continuous, so the limit is $f(g(1))=f(4)=-2$.`),
    mc("hard", r`Let $f(x)=\begin{cases}2x+a,&x\lt1\\b,&x=1\\x^2+3,&x\gt1\end{cases}$ be continuous at $x=1$. What is $a+b$?`, "$6$", ["$4$", "$8$", "$2$"], r`The right-hand limit is 4, so $b=4$ and $2+a=4$ gives $a=2$. Then $a+b=6$.`),
    mc("hard", r`Let $f(x)=\begin{cases}x^2+a,&x\le0\\bx+3,&0\lt x\lt2\\x^3-1,&x\ge2\end{cases}$ be continuous for all real $x$. What is $a+b$?`, "$5$", ["$6$", "$1$", "$7$"], r`At 0: $a=3$. At 2: $2b+3=7$, so $b=2$. Then $a+b=5$.`),
    mc("hard", r`For what value of $k$ is $f(x)=\begin{cases}\dfrac{x^2-4}{x-2},&x\neq2\\kx,&x=2\end{cases}$ continuous at $x=2$?`, "$2$", ["$4$", "$1$", "$0$"], r`The limit is 4 and $f(2)=2k$, so $2k=4$ and $k=2$. The option 4 confuses $f(2)$ with $k$.`),
    num("hard", r`The function $f$ is continuous at $x=4$ and $f(x)=\dfrac{x^2-x-12}{x-4}$ for $x\neq4$. Find $f(4)$.`, 7, 0, r`$x^2-x-12=(x-4)(x+3)$, so $f(x)=x+3$ for $x\neq4$ and continuity forces $f(4)=7$.`),
    mc("hard", r`A function $f$ has $f(3)=5$, $${lim("3^-", "f(x)=5")}$ and $${lim("3^+", "f(x)=2")}$. Which statement is true?`, "$f$ is not continuous at $x=3$ because the limit at $3$ does not exist.", ["$f$ is continuous at $x=3$ because $f(3)$ equals the left-hand limit.", "$f$ has a removable discontinuity at $x=3$.", "$f$ is continuous at $x=3$ because $f(3)$ is defined."], r`Continuity needs the two-sided limit, which requires the one-sided limits to agree.`),
    mc("hard", r`Let $f(x)=\begin{cases}2x+a,&x\lt0\\bx^2+3,&0\le x\le1\\2x+b,&x\gt1\end{cases}$. For which values of $a$ and $b$ is $f$ continuous for all real $x$?`, "No values of $a$ and $b$ make $f$ continuous.", ["$a=3,\\ b=1$", "$a=3,\\ b=-1$", "$a=3$ and any $b$"], r`At $x=1$ continuity needs $b+3=2+b$, which is impossible. The system has no solution.`),
  ];
}

// ── 1.9 Asymptotes ───────────────
function g19() {
  const h = { fig: figH() };
  return [
    mc("easy", H + r`What is $${lim(r`\infty`, "h(x)")}$?`, "$1$", ["$2$", r`$\infty$`, "$0$"], r`As $x\to\infty$ the graph levels off at the horizontal dashed line $y=1$.`, h),
    mc("easy", H + r`What is $${lim("2^+", "h(x)")}$?`, r`$\infty$`, [r`$-\infty$`, "$1$", "$2$"], r`Just to the right of the vertical dashed line $x=2$ the graph rises without bound.`, h),
    mc("easy", r`Evaluate $${lim(r`\infty`, r`\dfrac{4x^2+1}{2x^2-x}`)}$.`, "$2$", ["$4$", "$0$", r`$\infty$`], r`Equal degrees: the limit is the ratio of leading coefficients, $\dfrac42=2$.`),
    mc("easy", r`Evaluate $${lim(r`\infty`, r`\dfrac{x+5}{x^2+1}`)}$.`, "$0$", ["$1$", "$5$", r`$\infty$`], r`The denominator has the higher degree, so the limit is 0.`),
    num("easy", r`Evaluate $${lim(r`\infty`, r`\dfrac{6x-1}{2x+7}`)}$.`, 3, 0, r`Equal degrees: $\dfrac62=3$.`),
    mc("medium", H + r`What are $${lim("2^-", "h(x)")}$ and $${lim(r`-\infty`, "h(x)")}$, in that order?`, r`$-\infty$ and $1$`, [r`$\infty$ and $1$`, r`$-\infty$ and $-1$`, r`$\infty$ and $-\infty$`], r`To the left of $x=2$ the graph falls without bound; far to the left it approaches $y=1$.`, h),
    mc("medium", r`Evaluate $${lim("3^-", r`\dfrac{x+2}{x-3}`)}$.`, r`$-\infty$`, [r`$\infty$`, "$5$", "$0$"], r`The numerator is near 5 (positive) and $x-3$ is a small negative number.`),
    mc("medium", r`Evaluate $${lim(r`-\infty`, r`\dfrac{2x^3-x}{5x^3+4}`)}$.`, r`$\dfrac{2}{5}$`, [r`$-\dfrac{2}{5}$`, "$0$", r`$-\infty$`], r`Equal degrees give the ratio of leading coefficients in both directions; no sign change occurs.`),
    mc("medium", r`What are the horizontal asymptotes of $f(x)=\dfrac{3e^{x}-1}{e^{x}+2}$?`, r`$y=3$ and $y=-\dfrac{1}{2}$`, [r`$y=3$ only`, r`$y=3$ and $y=-1$`, r`$y=-\dfrac{1}{2}$ only`], r`As $x\to\infty$: $\dfrac{3-e^{-x}}{1+2e^{-x}}\to3$. As $x\to-\infty$: $e^x\to0$, giving $-\dfrac12$.`),
    mc("medium", r`Evaluate $${lim(r`-\infty`, r`\dfrac{\sqrt{9x^2+1}}{x+2}`)}$.`, "$-3$", ["$3$", "$9$", r`$\infty$`], r`$\sqrt{9x^2+1}=|x|\sqrt{9+\tfrac1{x^2}}=-x\sqrt{9+\tfrac1{x^2}}$ for $x\lt0$, so the ratio tends to $-3$. The option 3 forgets that $\sqrt{x^2}=-x$ here.`),
    mc("medium", r`Which lines are vertical asymptotes of $f(x)=\dfrac{x^2-1}{x^2-3x+2}$?`, "$x=2$ only", ["$x=1$ and $x=2$", "$x=1$ only", "$x=-1$ and $x=2$"], r`$f(x)=\dfrac{(x-1)(x+1)}{(x-1)(x-2)}$. The factor $(x-1)$ cancels (a hole), leaving an asymptote at $x=2$.`),
    mc("medium", r`Evaluate $${lim(r`\infty`, r`\dfrac{x^3}{e^{x}}`)}$.`, "$0$", [r`$\infty$`, "$1$", "$3$"], r`Exponential growth dominates every power of $x$.`),
    mc("hard", r`Evaluate $${lim(r`\infty`, r`\left(\sqrt{x^2+4x}-x\right)`)}$.`, "$2$", ["$0$", "$4$", r`$\infty$`], r`Conjugate: $\dfrac{4x}{\sqrt{x^2+4x}+x}=\dfrac{4}{\sqrt{1+\frac4x}+1}\to2$. The option 0 treats $\infty-\infty$ as 0.`),
    mc("hard", r`Evaluate $${lim(r`-\infty`, r`\left(\sqrt{x^2+4x}+x\right)`)}$.`, "$-2$", ["$2$", "$0$", r`$-\infty$`], r`Conjugate: $\dfrac{4x}{\sqrt{x^2+4x}-x}$. For $x\lt0$, $\sqrt{x^2+4x}=-x\sqrt{1+\tfrac4x}$, so this is $\dfrac{4x}{-x\left(\sqrt{1+\frac4x}+1\right)}\to-2$.`),
    mc("hard", r`Evaluate $${lim(r`\infty`, r`\dfrac{2x+\sin x}{x}`)}$.`, "$2$", ["$3$", DNE, "$1$"], r`$2+\dfrac{\sin x}{x}$, and $\dfrac{\sin x}{x}\to0$ as $x\to\infty$ by the squeeze theorem.`),
    mc("hard", r`The graph of $f(x)=\dfrac{ax^2+3}{2x^2-5x+1}$ has the horizontal asymptote $y=4$. What is $a$?`, "$8$", ["$4$", "$2$", "$6$"], r`Equal degrees: $\dfrac{a}{2}=4$, so $a=8$.`),
    mc("hard", r`Evaluate $${lim("1^+", r`\dfrac{x-3}{x^2-1}`)}$.`, r`$-\infty$`, [r`$\infty$`, "$-1$", "$0$"], r`The numerator is near $-2$; the denominator $(x-1)(x+1)$ is a small positive number for $x$ just above 1.`),
    mc("hard", r`How many horizontal asymptotes does the graph of $f(x)=\dfrac{x}{\sqrt{x^2+1}}$ have?`, "$2$", ["$1$", "$0$", "$3$"], r`As $x\to\infty$ the function tends to 1; as $x\to-\infty$ it tends to $-1$. The lines $y=1$ and $y=-1$ are both asymptotes.`),
    mc("hard", r`Evaluate $${lim(r`\infty`, r`\dfrac{\ln x}{\sqrt{x}}`)}$.`, "$0$", [r`$\infty$`, "$1$", r`$\dfrac{1}{2}$`], r`Any positive power of $x$ grows faster than $\ln x$.`),
  ];
}

// ── 1.10 The Intermediate Value Theorem ───────────────
function g110() {
  return [
    mc("easy", r`The Intermediate Value Theorem applies to a function $f$ on $[a,b]$ provided that`, "$f$ is continuous on $[a,b]$", ["$f$ is defined at $a$ and $b$", "$f(a)$ and $f(b)$ have opposite signs", "$f$ is increasing on $[a,b]$"], r`Continuity on the closed interval is the only hypothesis. Opposite signs matter only when the target value is 0.`),
    mc("easy", r`A function $f$ is continuous on $[1,5]$ with $f(1)=2$ and $f(5)=10$. Which value must $f$ take somewhere in $(1,5)$?`, "$7$", ["$1$", "$11$", "$12$"], r`7 lies between 2 and 10. The theorem guarantees nothing outside that range.`),
    mc("easy", r`Let $f(x)=x^3+2x-4$. The Intermediate Value Theorem guarantees a zero of $f$ in which interval?`, "$(1,2)$", ["$(0,1)$", "$(2,3)$", "$(-1,0)$"], r`$f(1)=-1\lt0$ and $f(2)=8\gt0$, and $f$ is continuous. On the other intervals the endpoint values have the same sign.`),
    mc("medium", r`The function $f$ is continuous on $[0,10]$. Selected values are shown. ${tbl("t", [0, 1, 3, 6, 10], "f(t)", [4, -2, 1, -3, 5])} What is the least number of solutions to $f(t)=2$ in $[0,10]$?`, "$2$", ["$1$", "$3$", "$4$"], r`2 lies between the endpoint values on $[0,1]$ (4 and $-2$) and on $[6,10]$ ($-3$ and 5), and on no other subinterval.`),
    mc("medium", r`For the function in the table ${tbl("t", [0, 1, 3, 6, 10], "f(t)", [4, -2, 1, -3, 5])} with $f$ continuous on $[0,10]$, what is the least number of zeros of $f$ in $[0,10]$?`, "$4$", ["$2$", "$3$", "$5$"], r`The sign changes on each of the four subintervals, so each contains at least one zero.`),
    mc("medium", r`Let $f(x)=\dfrac{1}{x}$, so that $f(-1)=-1$ and $f(1)=1$. Why does the Intermediate Value Theorem not guarantee a zero of $f$ in $(-1,1)$?`, "$f$ is not continuous on $[-1,1]$.", ["$0$ is not between $f(-1)$ and $f(1)$.", "$f$ is not increasing on $[-1,1]$.", "The interval must be open."], r`$f$ is undefined at 0, so the hypothesis fails. Indeed $\tfrac1x$ is never zero.`),
    mc("medium", r`A function $f$ is continuous on $[0,4]$ with $f(0)=3$ and $f(4)=3$. Must there be a value $c$ in $(0,4)$ with $f(c)=5$?`, "Not necessarily: 5 is not between $f(0)$ and $f(4)$.", ["Yes, by the Intermediate Value Theorem.", "No, it is impossible.", "Yes, because $f$ is continuous."], r`The theorem only guarantees values between $f(a)$ and $f(b)$. A value of 5 is possible but not guaranteed.`),
    mc("medium", r`A function $f$ is continuous on $[2,7]$ with $f(2)=-1$ and $f(7)=6$. The number of solutions to $f(x)=0$ in $(2,7)$ is`, "at least one", ["exactly one", "at most one", "exactly two"], r`The theorem guarantees existence, not uniqueness. There may be several solutions.`),
    mc("medium", r`Which is a complete justification that $f(x)=x^3-x-1$ has a zero in $(1,2)$?`, "$f$ is continuous on $[1,2]$ and $f(1)=-1\\lt0\\lt5=f(2)$, so by the Intermediate Value Theorem $f(c)=0$ for some $c$ in $(1,2)$.", ["$f(1)=-1$ and $f(2)=5$, so $f$ has a zero in $(1,2)$.", "$f$ is continuous, so it has a zero in $(1,2)$.", "$f$ is increasing on $[1,2]$, so it must cross the $x$-axis."], r`A complete argument states continuity, shows the target between the endpoint values, and names the theorem.`),
    mc("hard", r`The functions $f$ and $g$ are continuous on $[0,3]$, with $f(0)=1$, $g(0)=5$, $f(3)=8$ and $g(3)=2$. Which statement must be true?`, "There is a number $c$ in $(0,3)$ with $f(c)=g(c)$.", ["$f(x)\\gt g(x)$ for all $x$ in $(0,3)$.", "There is a number $c$ in $(0,3)$ with $f(c)=0$.", "$f$ and $g$ are both increasing on $[0,3]$."], r`Let $h=f-g$, which is continuous. $h(0)=-4\lt0\lt6=h(3)$, so $h(c)=0$ for some $c$ by the Intermediate Value Theorem.`),
    mc("hard", r`A differentiable function $P$ has $P(2)=10$ and $P(6)=-4$. Which statement is justified?`, "There is a $t$ in $(2,6)$ with $P(t)=0$, because $P$ is differentiable and therefore continuous, and $-4\\lt0\\lt10$.", ["Nothing can be concluded because continuity is not given.", "There is exactly one $t$ in $(2,6)$ with $P(t)=0$.", "$P$ is decreasing on $[2,6]$."], r`Differentiability implies continuity, so the Intermediate Value Theorem applies. It gives at least one such $t$, not exactly one.`),
    mc("hard", r`A function $f$ is continuous and strictly increasing on $[0,5]$ with $f(0)=-2$ and $f(5)=3$. How many zeros does $f$ have in $(0,5)$?`, "exactly one", ["at least one, possibly more", "none", "exactly two"], r`The Intermediate Value Theorem gives at least one zero; a strictly increasing function cannot take the same value twice, so there is exactly one.`),
    mc("hard", r`For which values of $k$ does the Intermediate Value Theorem guarantee that $f(x)=x^3+k$ has a zero in $(0,2)$?`, r`$-8\lt k\lt0$`, [r`$k\lt0$`, r`$0\lt k\lt8$`, r`$k\gt-8$`], r`$f(0)=k$ and $f(2)=8+k$. Zero lies strictly between them when $k\lt0\lt8+k$.`),
    mc("hard", r`The equation $e^{x}=3-x$ has a solution in which interval?`, "$(0,1)$", ["$(-1,0)$", "$(1,2)$", "$(2,3)$"], r`Let $h(x)=e^x+x-3$, continuous everywhere. $h(0)=-2\lt0$ and $h(1)=e-2\gt0$.`),
    mc("hard", r`A function $f$ is continuous on $[1,4]$ with $f(1)=6$ and $f(4)=-2$. Which value is $f$ NOT guaranteed to take in $(1,4)$?`, "$7$", ["$5$", "$0$", "$-1$"], r`Only values strictly between $-2$ and 6 are guaranteed.`),
    mc("hard", r`A function $f$ is continuous on $[0,6]$ with $f(0)=2$, $f(3)=-1$ and $f(6)=4$. What is the least number of solutions to $f(x)=3$ in $[0,6]$?`, "$1$", ["$0$", "$2$", "$3$"], r`On $[0,3]$ the values run from 2 to $-1$, and 3 is not between them. On $[3,6]$ they run from $-1$ to 4, which includes 3.`),
  ];
}

export default [
  { code: "1.1", gen: g11 },
  { code: "1.2", gen: g12 },
  { code: "1.3", gen: g13 },
  { code: "1.4", gen: g14 },
  { code: "1.5", gen: g15 },
  { code: "1.6", gen: g16 },
  { code: "1.7", gen: g17 },
  { code: "1.8", gen: g18 },
  { code: "1.9", gen: g19 },
  { code: "1.10", gen: g110 },
];
