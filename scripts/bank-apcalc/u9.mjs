// AP Calculus AB exam prep — Unit 9 (Exam Mastery): question bank.
// Original questions in exam format; see u1.mjs for the conventions. The
// scenarios here are separate from the worked questions in the Unit 9 lessons.
import { mc, num, tbl } from "./helpers.mjs";

const r = String.raw;
const I = (a, b, body, v = "x") => `\\displaystyle\\int_{${a}}^{${b}}${body}\\,d${v}`;
const LIM = (to, body, v = "x") => `\\displaystyle\\lim_{${v}\\to ${to}}${body}`;

// ── 9.1 How the Exam Is Built and Scored ───────────────
function g91() {
  return [
    mc("easy", "How many multiple-choice questions are on the exam?", "$42$", ["$45$", "$40$", "$48$"], r`29 without a calculator and 13 with one.`),
    mc("easy", "How many of the multiple-choice questions require a graphing calculator?", "$13$", ["$29$", "$15$", "$6$"], r`Part B of Section I.`),
    mc("easy", "How many free-response questions are on the exam, and how many of them require a calculator?", "6 questions, 2 with a calculator", ["6 questions, 4 with a calculator", "4 questions, 2 with a calculator", "8 questions, 2 with a calculator"], r`Section II: Part A has 2 calculator questions, Part B has 4 without.`),
    mc("easy", "How much time is allowed for the 29 no-calculator multiple-choice questions?", "62 minutes", ["38 minutes", "60 minutes", "90 minutes"], r`A little over 2 minutes per question.`),
    mc("medium", "What happens when a multiple-choice question is answered incorrectly?", "No points are deducted; it scores the same as a blank.", ["A quarter of a point is deducted.", "One point is deducted.", "The whole section is rescaled."], r`There is no penalty for a wrong answer, so no question should be left blank.`),
    mc("medium", "How many points is each free-response question worth?", "$9$", ["$6$", "$10$", "$12$"], r`Six questions of 9 points each, 54 in all.`),
    mc("medium", "How much does each of the two sections contribute to the final score?", "half each", ["multiple choice two thirds, free response one third", "multiple choice one third, free response two thirds", "it depends on the year"], r`The sections are weighted equally.`),
    mc("medium", "During the no-calculator part of the free-response section, a student wants to go back to a calculator free-response question. Is this allowed?", "Yes, but without the calculator.", ["Yes, with the calculator.", "No, the earlier questions are collected.", "Only if all four later questions are finished."], r`Calculator work must be completed in the first 30 minutes.`),
    mc("medium", "On average, how long is available for each free-response question?", "15 minutes", ["10 minutes", "20 minutes", "9 minutes"], r`90 minutes for 6 questions.`),
    mc("hard", "A student earns 28 of the 42 multiple-choice points and 36 of the 54 free-response points. About what fraction of the available score is this?", "about 67%", ["about 60%", "about 71%", "about 64%"], r`Each section is half: $\dfrac12\left(\dfrac{28}{42}+\dfrac{36}{54}\right)=\dfrac23$.`),
    mc("hard", r`A free-response part says "Write, but do not evaluate, an integral expression for the volume." Which response is best?`, "the integral, with its integrand and limits, and nothing further", ["the integral followed by its expanded form and a numerical value", "a numerical value only", "a description in words of how the volume would be found"], r`The part is marked on the set-up. Further work earns nothing and risks an error.`),
    mc("hard", "In a free-response question, a student's answer to part (a) is wrong. The student uses that wrong value correctly in part (b). What usually happens?", "Part (b) can still earn full credit.", ["Part (b) earns no credit.", "Both parts are marked as wrong.", "Part (b) earns at most half credit."], r`Later parts are marked against the student's own earlier value, provided the error did not make the work easier.`),
  ];
}

// ── 9.2 A Phrase Bank for Justifications ───────────────
function g92() {
  return [
    mc("easy", r`Which statement justifies that $f$ has a relative maximum at $x=4$?`, r`$f'$ changes from positive to negative at $x=4$.`, [r`$f'(4)=0$.`, r`$f(4)$ is larger than $f(3)$.`, r`$f''(4)=0$.`], r`A zero derivative gives a candidate; the sign change classifies it.`),
    mc("easy", r`Which statement justifies that $f$ is increasing on $(2,7)$?`, r`$f'(x)\gt0$ for all $x$ in $(2,7)$.`, [r`$f(7)\gt f(2)$.`, r`$f''(x)\gt0$ for all $x$ in $(2,7)$.`, r`$f'(2)=0$ and $f'(7)=0$.`], r`Monotonicity is justified by the sign of $f'$ on the whole interval.`),
    mc("easy", r`A particle has $v(5)=-3$ and $a(5)=-2$. At $t=5$ its speed is`, "increasing, because $v(5)$ and $a(5)$ have the same sign", ["decreasing, because $a(5)\\lt0$", "decreasing, because $v(5)\\lt0$", "increasing, because $a(5)\\gt v(5)$"], r`Speed increases when velocity and acceleration have the same sign.`),
    mc("medium", r`The graph of $f'$ is given. Which statement justifies that the graph of $f$ is concave up on $(1,5)$?`, r`$f'$ is increasing on $(1,5)$.`, [r`$f'$ is positive on $(1,5)$.`, r`The graph is concave up on $(1,5)$.`, r`$f$ is increasing on $(1,5)$.`], r`$f$ is concave up where $f'$ is increasing. "The graph" does not say which graph.`),
    mc("medium", r`Which statement justifies that the graph of $f$ has a point of inflection at $x=2$?`, r`$f''$ changes sign at $x=2$.`, [r`$f''(2)=0$.`, r`$f'(2)=0$.`, r`$f''(2)\gt0$.`], r`A zero of $f''$ is not enough; the sign must change.`),
    mc("medium", r`A function $g$ is differentiable, with $g(2)=5$ and $g(8)=-1$. Which theorem guarantees a number $c$ in $(2,8)$ with $g'(c)=-1$?`, "the Mean Value Theorem", ["the Intermediate Value Theorem", "the Extreme Value Theorem", "the Fundamental Theorem of Calculus"], r`The average rate of change is $\dfrac{-1-5}{6}=-1$, and the claim is about a value of the derivative.`),
    mc("medium", r`A function $h$ is continuous on $[0,6]$, with $h(0)=-4$ and $h(6)=3$. Which theorem guarantees a number $c$ in $(0,6)$ with $h(c)=0$?`, "the Intermediate Value Theorem", ["the Mean Value Theorem", "the Extreme Value Theorem", "Rolle's Theorem"], r`The claim is about a value of the function lying between two known values.`),
    mc("medium", r`Given $f'(3)=0$ and $f''(3)=5$, which conclusion is justified?`, r`$f$ has a relative minimum at $x=3$.`, [r`$f$ has a relative maximum at $x=3$.`, r`The graph of $f$ has a point of inflection at $x=3$.`, r`$f$ has an absolute minimum at $x=3$.`], r`The second derivative test: a critical point with $f''\gt0$. It says nothing about an absolute minimum.`),
    mc("hard", r`A student justifies an absolute maximum of $f$ on $[1,9]$ by writing "$f'$ changes from positive to negative at $x=4$." What is missing?`, r`a comparison of $f(4)$ with $f(1)$ and $f(9)$`, [r`the value of $f''(4)$`, r`a statement that $f'(4)=0$`, r`nothing; the justification is complete`], r`A sign change shows a relative maximum. On a closed interval the endpoints must be compared.`),
    mc("hard", r`A tangent-line approximation of $f(2.1)$ is made at $x=2$. Which statement justifies that it is an underestimate?`, r`$f''(x)\gt0$ for $2\le x\le2.1$, so the graph of $f$ lies above its tangent line.`, [r`$f'(x)\gt0$ for $2\le x\le2.1$, so $f$ is increasing.`, r`$f''(2)=0$.`, r`$f(2.1)\gt f(2)$.`], r`Over- and underestimates from a tangent line depend on concavity, not on whether the function is increasing.`),
    mc("hard", r`A student writes: "By the Mean Value Theorem there is a $c$ in $(1,5)$ with $f'(c)=3$, because $\dfrac{f(5)-f(1)}{4}=3$." What must be added?`, r`that $f$ is continuous on $[1,5]$ and differentiable on $(1,5)$`, [r`that $f'$ is continuous on $[1,5]$`, r`that $f(1)=f(5)$`, r`the exact value of $c$`], r`A theorem earns its point only with its conditions stated.`),
    mc("hard", r`A particle has velocity $v$ with $v(3)=0$. Which statement justifies that it changes direction at $t=3$?`, r`$v$ changes sign at $t=3$.`, [r`$v(3)=0$.`, r`$a(3)\neq0$.`, r`The position has a point of inflection at $t=3$.`], r`A particle can stop without turning. The velocity must change sign.`),
  ];
}

// ── 9.3 Calculator Strategy ───────────────
function g93() {
  const c = { calc: true };
  return [
    mc("easy", r`A calculator shows $0.892954$ for an integral. Which final answer is acceptable?`, "$0.893$", ["$0.89$", "$0.9$", "$1$"], r`Three decimal places.`, c),
    mc("easy", r`Which line of written work earns full credit for a derivative found on the calculator?`, r`$f'(1)\approx-1.444$`, [r`nDeriv$(e^{\cos(X)},X,1)=-1.444$`, "$-1.444$", r`$f'(1)\approx-1.4$`], r`Standard notation and three decimal places.`, c),
    mc("easy", r`A long rate function appears in all four parts of a calculator question. What is the best way to handle it?`, "Enter it once in the calculator's function list and refer to it by name.", ["Retype it for each part.", "Simplify it by hand first.", "Use it only in the part worth the most points."], r`Retyping is the main source of keying errors.`, c),
    num("medium", r`Evaluate $${I(0, 2, "e^{-x^{3}}")}$, to three decimal places.`, 0.893, 0.001, r`The numerical integral is $0.893$.`, c),
    num("medium", r`Find the value of $x$ at which $\ln x=\cos x$, to three decimal places.`, 1.303, 0.001, r`The graphs intersect at $x\approx1.303$.`, c),
    num("medium", r`Let $f(x)=e^{\cos x}$. Find $f'(1)$, to three decimal places.`, -1.4444, 0.001, r`The numerical derivative is $-1.444$.`, c),
    num("medium", r`Evaluate $${I(0, 1, r`\sqrt{1+9x^{4}}`)}$, to three decimal places.`, 1.5479, 0.001, r`The numerical integral is $1.548$.`, c),
    mc("medium", r`A calculator multiple-choice question asks for $${I(3, 3, r`\sqrt{1+x^{5}}`)}$. What is the fastest correct approach?`, "Notice that the limits are equal, so the value is 0.", ["Evaluate it with the numerical integral command.", "Find an antiderivative by substitution.", "Approximate it with a trapezoidal sum."], r`Not every question in the calculator part needs the calculator.`, c),
    mc("hard", r`The time at which two rates are equal is found to be $t=8.435964$. It will be used as a limit of integration. What should be done?`, "Store the value in the calculator and use the stored value as the limit.", ["Use $t=8.4$.", "Use $t=8.44$.", "Use $t=8$, since the question uses whole hours."], r`Rounded limits can change the third decimal place of the result.`, c),
    mc("hard", r`A tank holds 60 litres at $t=0$, and the calculator gives $${I(0, 5, r`\big[f(t)-g(t)\big]`, "t")}\approx22.417$, where $f$ and $g$ are the rates in and out. How much is in the tank at $t=5$?`, "$82.417$ litres", ["$22.417$ litres", "$37.583$ litres", "$60$ litres"], r`The integral is the change. The amount is the starting amount plus the change.`, c),
    mc("hard", r`Which of these tasks is NOT something the exam expects a calculator to do without written justification?`, "showing that a critical point is a maximum", ["solving an equation numerically", "evaluating a derivative at a point", "evaluating a definite integral"], r`A maximum must be justified with a derivative argument or a comparison of values.`, c),
  ];
}

// ── 9.4 Free-Response Type: Rates and Accumulation ───────────────
function g94() {
  const c = { calc: true };
  const S = r`Water flows into a pond at the rate $f(t)=12+6\cos\!\left(\dfrac{t}{2}\right)$ cubic metres per hour and out of it at the rate $g(t)=9+0.8t$ cubic metres per hour, for $0\le t\le10$. The pond holds 40 cubic metres at $t=0$. `;
  return [
    num("medium", S + r`How many cubic metres of water flow into the pond during the 10 hours? Give three decimal places.`, 108.493, 0.001, r`$${I(0, 10, "f(t)", "t")}\approx108.493$.`, c),
    mc("medium", S + r`What is $f'(3)$, with its units?`, "$-2.992$ cubic metres per hour per hour", ["$-2.992$ cubic metres per hour", "$12.424$ cubic metres per hour", "$-2.992$ cubic metres"], r`The derivative of a rate is a rate of change of the rate. The value 12.424 is $f(3)$.`, c),
    mc("medium", S + r`At $t=5$, the amount of water in the pond is`, "decreasing, because $f(5)\\lt g(5)$", ["increasing, because $f(5)\\gt0$", "decreasing, because $f'(5)\\lt0$", "increasing, because $f(5)\\gt g(5)$"], r`$f(5)\approx7.193$ and $g(5)=13$. The comparison of the two rates decides it.`, c),
    num("hard", S + r`At what time $t$ is the amount of water in the pond greatest? Give three decimal places.`, 3.2697, 0.001, r`$f(t)=g(t)$ at $t\approx3.270$, where $f-g$ changes from positive to negative.`, c),
    num("hard", S + r`What is the greatest amount of water in the pond, to three decimal places?`, 57.508, 0.001, r`$40+${I(0, "3.270", r`\big[f(t)-g(t)\big]`, "t")}\approx57.508$.`, c),
    num("hard", S + r`How much water is in the pond at $t=10$? Give three decimal places.`, 18.493, 0.001, r`$40+108.493-${I(0, 10, "(9+0.8t)", "t")}=40+108.493-130$.`, c),
    mc("hard", S + r`At what time is the amount of water in the pond least?`, "$t=10$", ["$t=0$", "$t\\approx3.270$", "$t=5$"], r`Candidates: 40 at $t=0$, about 57.508 at $t\approx3.270$, about 18.493 at $t=10$.`, c),
    mc("medium", S + r`Which expression gives the average rate at which water flows out of the pond over the 10 hours?`, r`$\dfrac{1}{10}${I(0, 10, "g(t)", "t")}$`, [r`$${I(0, 10, "g(t)", "t")}$`, r`$\dfrac{g(10)-g(0)}{10}$`, r`$\dfrac{1}{10}${I(0, 10, r`\big[f(t)-g(t)\big]`, "t")}$`], r`An average value of the rate $g$. The second wrong option is the average rate of change of $g$.`, c),
    mc("medium", S + r`What does $${I(2, 6, "f(t)", "t")}$ represent?`, "the volume of water, in cubic metres, that flows into the pond from $t=2$ to $t=6$ hours", ["the volume of water in the pond at $t=6$ hours", "the average rate at which water flows in from $t=2$ to $t=6$", "the change in the rate of inflow from $t=2$ to $t=6$"], r`An integral of a rate is an amount accumulated over the interval.`, c),
  ];
}

// ── 9.5 Free-Response Type: Graphs and Tables ───────────────
function g95() {
  const T = `The function $P$ is differentiable on $[0,10]$. Selected values are shown. ${tbl("t", [0, 3, 4, 8, 10], "P(t)", [20, 26, 30, 22, 18])} `;
  return [
    mc("easy", T + r`Which is the best estimate of $P'(6)$?`, "$-2$", ["$-8$", "$2$", "$-0.2$"], r`$\dfrac{P(8)-P(4)}{8-4}=\dfrac{-8}{4}$.`),
    num("medium", T + r`Using a trapezoidal sum with the four subintervals of the table, approximate $${I(0, 10, "P(t)", "t")}$.`, 241, 0, r`$69+28+104+40$.`),
    mc("medium", T + r`What is the left Riemann sum approximating $${I(0, 10, "P(t)", "t")}$ with the four subintervals of the table?`, "$250$", ["$232$", "$241$", "$290$"], r`$(3)(20)+(1)(26)+(4)(30)+(2)(22)$. The value 232 is the right Riemann sum.`),
    num("medium", T + r`Find the exact value of $${I(3, 8, "P'(t)", "t")}$.`, -4, 0, r`$P(8)-P(3)=22-26$.`),
    mc("medium", T + r`Which theorem guarantees a time $c$ in $(0,3)$ with $P'(c)=2$?`, "the Mean Value Theorem", ["the Intermediate Value Theorem", "the Extreme Value Theorem", "No theorem guarantees this."], r`$\dfrac{P(3)-P(0)}{3}=2$, and $P$ is differentiable.`),
    mc("hard", T + r`What is the least number of times $t$ in $(0,10)$ at which $P(t)=24$?`, "$2$", ["$1$", "$3$", "$0$"], r`24 lies between the table values on $(0,3)$ and on $(4,8)$; the Intermediate Value Theorem applies on each.`),
    mc("hard", T + r`Must there be a time $c$ in $(0,10)$ at which $P'(c)=0$?`, r`Yes: $P$ takes the value 22 at some time in $(0,3)$ and again at $t=8$, so the Mean Value Theorem applies between them.`, [r`No, because no two table values are equal.`, r`Yes, because $P(4)=30$ is the largest value in the table.`, r`Yes, by the Intermediate Value Theorem applied to $P$.`], r`First the Intermediate Value Theorem gives $P(c)=22$ for some $c$ in $(0,3)$; then the Mean Value Theorem on $[c,8]$ gives a zero of $P'$. A largest table value does not show that $P$ has a maximum there.`),
    mc("medium", T + r`Using the trapezoidal sum of 241, the average value of $P$ on $[0,10]$ is approximately`, "$24.1$", ["$241$", "$23.2$", "$-0.2$"], r`$\dfrac{241}{10}$. The value $-0.2$ is the average rate of change.`),
    mc("hard", T + r`Let $G(x)=${I(0, "x", "P(t)", "t")}$. What is $G'(4)$?`, "$30$", ["$4$", "$0$", "$97$"], r`$G'(x)=P(x)$ by the Fundamental Theorem.`),
  ];
}

// ── 9.6 Free-Response Type: Particle Motion ───────────────
function g96() {
  const c = { calc: true };
  const S = r`A particle moves along the $x$-axis with velocity $v(t)=2-e^{t/2}$ for $0\le t\le3$. Its position at $t=0$ is $x=1$. `;
  return [
    mc("medium", S + r`At what time does the particle change direction?`, r`$t=2\ln2$`, [r`$t=\ln2$`, "$t=2$", "It does not change direction."], r`$e^{t/2}=2$ gives $t=2\ln2\approx1.386$, where $v$ changes from positive to negative.`),
    num("medium", S + r`Find the acceleration of the particle at $t=1$, to three decimal places.`, -0.8244, 0.001, r`$a(t)=-\dfrac12e^{t/2}$, so $a(1)\approx-0.824$.`, c),
    mc("medium", S + r`At $t=1$ the speed of the particle is`, "decreasing, because $v(1)\\gt0$ and $a(1)\\lt0$", ["increasing, because $v(1)\\gt0$", "decreasing, because $a(1)\\lt0$", "increasing, because $v(1)$ and $a(1)$ have the same sign"], r`$v(1)\approx0.351$ and $a(1)\approx-0.824$: opposite signs.`, c),
    mc("medium", S + r`At $t=2$ the speed of the particle is`, "increasing, because $v(2)\\lt0$ and $a(2)\\lt0$", ["decreasing, because $a(2)\\lt0$", "decreasing, because $v(2)\\lt0$", "increasing, because $v(2)\\gt0$"], r`$v(2)=2-e\lt0$ and $a(2)=-\dfrac e2\lt0$: the same sign.`),
    num("hard", S + r`Find the total distance travelled by the particle for $0\le t\le3$, to three decimal places.`, 2.5086, 0.001, r`$${I(0, 3, r`\left|2-e^{t/2}\right|`, "t")}\approx2.509$.`, c),
    num("hard", S + r`Find the position of the particle at $t=3$, to three decimal places.`, 0.0366, 0.001, r`$1+${I(0, 3, r`\left(2-e^{t/2}\right)`, "t")}=1-0.963$.`, c),
    mc("hard", S + r`At what time is the particle farthest to the right?`, r`$t=2\ln2$`, ["$t=0$", "$t=3$", r`$t=\ln2$`], r`The velocity is positive before $t=2\ln2$ and negative afterwards.`),
    mc("medium", r`For a particle moving along a line, which expression gives the total distance travelled from $t=a$ to $t=b$?`, r`$${I("a", "b", "|v(t)|", "t")}$`, [r`$\left|${I("a", "b", "v(t)", "t")}\right|$`, r`$${I("a", "b", "v(t)", "t")}$`, r`$|v(b)-v(a)|$`], r`The absolute value belongs inside the integral.`),
    mc("hard", r`A particle has position $x(2)=-3$ and velocity $v(2)=4$. At $t=2$ the particle is`, "moving toward the origin", ["moving away from the origin", "at rest", "at the origin"], r`It is to the left of the origin and moving right: position and velocity have opposite signs.`),
  ];
}

// ── 9.7 Free-Response Type: Differential Equations ───────────────
function g97() {
  const S = r`Consider the differential equation $\dfrac{dy}{dx}=(x+1)y$, and let $y=f(x)$ be the particular solution with $f(0)=2$. `;
  return [
    mc("easy", S + r`What is the slope of the solution curve at the point $(0,2)$?`, "$2$", ["$0$", "$1$", "$3$"], r`$(0+1)(2)$.`),
    mc("medium", S + r`Along which lines are the segments of the slope field horizontal?`, "$x=-1$ and $y=0$", ["$x=1$ and $y=0$", "$y=-x$", "$x=-1$ only"], r`$(x+1)y=0$ when $x=-1$ or $y=0$.`),
    mc("medium", S + r`Using the tangent line at $x=0$, what is the approximation of $f(0.1)$?`, "$2.2$", ["$2.1$", "$2.02$", "$2.4$"], r`$2+2(0.1)$.`),
    mc("hard", S + r`What is $\dfrac{d^{2}y}{dx^{2}}$ in terms of $x$ and $y$?`, r`$y+(x+1)^{2}y$`, [r`$y$`, r`$(x+1)^{2}y$`, r`$y+(x+1)y$`], r`$\dfrac{d^2y}{dx^2}=y+(x+1)\dfrac{dy}{dx}=y+(x+1)^2y$.`),
    mc("hard", S + r`The tangent-line approximation of $f(0.1)$ made at $x=0$ is`, r`an underestimate, because $\dfrac{d^{2}y}{dx^{2}}\gt0$ near $(0,2)$`, [r`an overestimate, because $\dfrac{d^{2}y}{dx^{2}}\gt0$ near $(0,2)$`, r`an underestimate, because $\dfrac{dy}{dx}\gt0$ near $(0,2)$`, r`an overestimate, because $\dfrac{dy}{dx}\gt0$ near $(0,2)$`], r`At $(0,2)$ the second derivative is $2+2=4\gt0$: concave up, so the tangent lies below the graph.`),
    mc("hard", S + r`What is $f(x)$?`, r`$2e^{x^{2}/2+x}$`, [r`$e^{x^{2}/2+x}+1$`, r`$2e^{x^{2}/2}+x$`, r`$e^{x^{2}/2+x}+2$`], r`$\dfrac{dy}{y}=(x+1)\,dx$ gives $\ln|y|=\dfrac{x^2}{2}+x+C$ with $C=\ln2$.`),
    mc("medium", S + r`Which step must appear for any credit to be earned in finding $f(x)$?`, r`separating the variables: $\dfrac{dy}{y}=(x+1)\,dx$`, [r`differentiating both sides with respect to $x$`, r`substituting $x=0$ and $y=2$ into the differential equation`, r`sketching the slope field`], r`Without separation of variables, none of the solution points can be awarded.`),
    mc("medium", S + r`Which constant function is also a solution of the differential equation?`, "$y=0$", ["$y=-1$", "$y=2$", "$y=1$"], r`It makes $\dfrac{dy}{dx}=0$ for every $x$.`),
    mc("hard", r`A student solving $\dfrac{dy}{dx}=(x+1)y$ writes $\ln|y|=\dfrac{x^{2}}{2}+x$ and then $y=e^{x^{2}/2+x}+C$. How many of the five solution points can this earn at most?`, "$2$", ["$5$", "$4$", "$0$"], r`With no constant of integration at the integration step, only the separation and antiderivative points are available.`),
  ];
}

// ── 9.8 Multiple-Choice Technique ───────────────
function g98() {
  return [
    mc("easy", r`$${LIM(r`\infty`, r`\dfrac{3x^{2}-x}{5x^{2}+2}`)}=$`, r`$\dfrac35$`, ["$0$", r`$\infty$`, r`$-\dfrac12$`], r`Equal degrees: the ratio of leading coefficients.`),
    mc("easy", r`If $${I(0, 4, "f(x)")}=6$, then $${I(0, 4, r`\big[f(x)+3\big]`)}=$`, "$18$", ["$9$", "$12$", "$24$"], r`$6+3(4)$. The option 9 forgets to integrate the constant over the interval.`),
    mc("easy", r`$\dfrac{d}{dx}\big[\arctan(2x)\big]=$`, r`$\dfrac{2}{1+4x^{2}}$`, [r`$\dfrac{1}{1+4x^{2}}$`, r`$\dfrac{2}{1+2x^{2}}$`, r`$\dfrac{2}{\sqrt{1-4x^{2}}}$`], r`Chain rule: the inside is $2x$, squared to $4x^2$. The first wrong option omits the factor 2.`),
    mc("medium", r`If $f(x)=x^{2}\sin x$, then $f'(\pi)=$`, r`$-\pi^{2}$`, [r`$2\pi$`, "$0$", r`$\pi^{2}$`], r`$2\pi\sin\pi+\pi^2\cos\pi=-\pi^2$. The option 0 is $f(\pi)$.`),
    mc("medium", r`$${I(1, "e", r`\left(\dfrac1x+1\right)`)}=$`, "$e$", ["$e+1$", "$2$", "$e-1$"], r`$\big[\ln x+x\big]_1^e=(1+e)-(0+1)$.`),
    mc("medium", r`A function $g$ has $g'(x)=(x+1)(x-3)^{2}$. At which values of $x$ does $g$ have a relative minimum?`, "$x=-1$ only", ["$x=3$ only", "$x=-1$ and $x=3$", "no values of $x$"], r`$(x-3)^2\ge0$, so $g'$ changes sign only at $x=-1$, from negative to positive.`),
    mc("medium", r`$\displaystyle\int x\cos\!\left(x^{2}\right)dx=$`, r`$\dfrac12\sin\!\left(x^{2}\right)+C$`, [r`$\sin\!\left(x^{2}\right)+C$`, r`$-\dfrac12\sin\!\left(x^{2}\right)+C$`, r`$\dfrac{x^{2}}{2}\sin\!\left(x^{2}\right)+C$`], r`$u=x^2$, $x\,dx=\tfrac12du$. The first wrong option forgets the factor $\tfrac12$.`),
    mc("medium", r`What is the slope of the line tangent to the curve $x^{2}+y^{3}=9$ at the point $(1,2)$?`, r`$-\dfrac16$`, [r`$\dfrac16$`, r`$-\dfrac23$`, "$-6$"], r`$2x+3y^2\dfrac{dy}{dx}=0$ gives $\dfrac{dy}{dx}=-\dfrac{2}{12}$.`),
    mc("medium", r`What is the average value of $f(x)=\sin x$ on $\left[0,\dfrac{\pi}{2}\right]$?`, r`$\dfrac{2}{\pi}$`, ["$1$", r`$\dfrac{\pi}{2}$`, r`$\dfrac12$`], r`$\dfrac{2}{\pi}\cdot1$. The option 1 is the integral without the division.`),
    mc("hard", r`A quantity satisfies $\dfrac{dy}{dt}=ky$ with $y(0)=5$ and $y(2)=20$. What is $y(4)$?`, "$80$", ["$35$", "$40$", "$100$"], r`The quantity is multiplied by 4 every 2 units of time. The option 35 assumes linear growth.`),
    mc("hard", r`The region under $y=x$ for $0\le x\le2$ is rotated about the $x$-axis. What is the volume of the solid?`, r`$\dfrac{8\pi}{3}$`, [r`$2\pi$`, r`$\dfrac83$`, r`$4\pi$`], r`$\pi${I(0, 2, "x^{2}")}$. The option $2\pi$ omits the square; $\tfrac83$ omits $\pi$.`),
    mc("hard", r`$\dfrac{d}{dx}${I(0, "3x", "e^{t^{2}}", "t")}=$`, r`$3e^{9x^{2}}$`, [r`$e^{9x^{2}}$`, r`$3e^{x^{2}}$`, r`$e^{9x^{2}}-1$`], r`Substitute the upper limit and multiply by its derivative.`),
    mc("hard", r`A particle has velocity $v(t)=6t-3t^{2}$ for $0\le t\le2$. What is its maximum velocity?`, "$3$", ["$1$", "$6$", "$4$"], r`$v'(t)=6-6t=0$ at $t=1$, and $v(1)=3$. The option 1 is the time, not the velocity; 4 is the distance travelled.`),
  ];
}

export default [
  { code: "9.1", gen: g91 },
  { code: "9.2", gen: g92 },
  { code: "9.3", gen: g93 },
  { code: "9.4", gen: g94 },
  { code: "9.5", gen: g95 },
  { code: "9.6", gen: g96 },
  { code: "9.7", gen: g97 },
  { code: "9.8", gen: g98 },
];
