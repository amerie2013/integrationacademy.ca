// MCT4C Unit 2 — Polynomial Functions: question bank.
// 60 per topic: 20 easy / 20 medium / 20 hard. Kinds: mc, ms, tf, num, fill.
import { mc, ms, tf, num, fill } from "./helpers.mjs";

// ── 2.1 Polynomial Expressions & Functions ────────────────────
function g21() {
  const q = [];
  // EASY
  q.push(mc("easy", "Which is a polynomial?", ["$x^3-2x+1$", "$2^x$", "$\\sqrt{x}$", "$x^{-2}$"], 0));
  q.push(mc("easy", "Degree of $4x^5-x^2+7$?", ["$5$", "$2$", "$7$", "$4$"], 0));
  q.push(mc("easy", "Leading coefficient of $-3x^4+2x$?", ["$-3$", "$2$", "$4$", "$3$"], 0));
  q.push(mc("easy", "$P(x)=x^2+1$; $P(3)=$", ["$10$", "$7$", "$9$", "$4$"], 0));
  q.push(mc("easy", "Constant term of $2x^3-5x+6$?", ["$6$", "$-5$", "$2$", "$0$"], 0));
  q.push(mc("easy", "Number of terms in $x^3-2x^2+x-1$?", ["$4$", "$3$", "$2$", "$1$"], 0));
  q.push(mc("easy", "$P(x)=2x-1$; $P(0)=$", ["$-1$", "$0$", "$1$", "$2$"], 0));
  q.push(ms("easy", "Which are polynomials?", ["$3x^2-1$", "$x^4$", "$5$", "$1/x$"], [0, 1, 2]));
  q.push(ms("easy", "Which have degree 3?", ["$x^3+1$", "$2x^3-x$", "$x^2$", "$5x^3$"], [0, 1, 3]));
  q.push(ms("easy", "True about $-2x^3+4x-7$?", ["degree 3", "leading coeff $-2$", "constant $-7$", "4 terms"], [0, 1, 2]));
  q.push(tf("easy", "$2^x$ is a polynomial.", false, "It has a variable exponent."));
  q.push(tf("easy", "The degree of a nonzero constant is 0.", true));
  q.push(tf("easy", "$\\sqrt{x}$ is a polynomial.", false, "It has a fractional exponent."));
  q.push(tf("easy", "$x^3-2x^2+4$ has degree 3.", true));
  q.push(num("easy", "$P(x)=x^2-2x$; find $P(4)$.", 8, 0));
  q.push(num("easy", "Degree of $7x^6-x^3+2$.", 6, 0));
  q.push(num("easy", "$P(x)=2x^3-x+5$; find $P(2)$.", 19, 0));
  q.push(num("easy", "Constant term of $3x^4-2x+9$.", 9, 0));
  q.push(fill("easy", "Leading coefficient of $5-3x^2$ is ___.", ["-3"]));
  q.push(fill("easy", "$P(x)=x^2+x$; $P(3)=$ ___.", ["12"]));
  // MEDIUM
  q.push(mc("medium", "$P(x)=2x^3-x+5$; $P(-1)=$", ["$4$", "$6$", "$2$", "$8$"], 0));
  q.push(mc("medium", "Standard form of $3x-5x^4+2$?", ["$-5x^4+3x+2$", "$3x-5x^4+2$", "$2+3x-5x^4$", "$5x^4+3x+2$"], 0));
  q.push(mc("medium", "Degree of $(x^2+1)(x^3-x)$?", ["$5$", "$6$", "$3$", "$2$"], 0));
  q.push(mc("medium", "$P(x)=x^3-2x^2+4$; $P(3)=$", ["$13$", "$9$", "$31$", "$7$"], 0));
  q.push(mc("medium", "$P(x)=x^4-3x^2+2x$; $P(-2)=$", ["$0$", "$8$", "$16$", "$-8$"], 0));
  q.push(mc("medium", "Which is degree 4?", ["$x^4-2x^3+1$", "$3x^3$", "$x^5$", "$2x^2$"], 0));
  q.push(mc("medium", "$P(x)=x^3-x$; $P(2)=$", ["$6$", "$4$", "$8$", "$2$"], 0));
  q.push(mc("medium", "For $P(x)=x^3-2x^2+x+1$, $P(1)=$", ["$1$", "$0$", "$3$", "$-1$"], 0));
  q.push(ms("medium", "Which equal $P(1)$ for $P(x)=x^3-2x^2+x+1$?", ["$1$", "the sum of coefficients", "$0$", "$P(1)$"], [0, 1, 3]));
  q.push(ms("medium", "Which are NOT polynomials?", ["$x^{1/2}+1$", "$3^x$", "$2x^2-1$", "$x^{-1}$"], [0, 1, 3]));
  q.push(tf("medium", "The degree of $(x^2+1)(x^3-x)$ is 5.", true));
  q.push(tf("medium", "$P(1)$ equals the sum of the coefficients of $P$.", true));
  q.push(num("medium", "$P(x)=x^3-4x^2+x+6$; find $P(3)$.", 0, 0));
  q.push(num("medium", "$P(x)=2x^3+x-4$; find $P(0)$.", -4, 0));
  q.push(num("medium", "Degree of $(x^3+2)(x^2-1)$.", 5, 0));
  q.push(num("medium", "$P(x)=x^4-3x^2+2x$; find $P(-2)$.", 0, 0));
  q.push(fill("medium", "Standard-form leading term of $3x-5x^4+2$ is ___.", ["-5x^4"]));
  q.push(fill("medium", "$P(x)=x^3-2x^2+4$; $P(3)=$ ___.", ["13"]));
  q.push(mc("medium", "$P(x)=-x^3+2x+5$; $P(-1)=$", ["$4$", "$6$", "$8$", "$2$"], 0));
  q.push(mc("medium", "Number of terms in the standard form of $x^2+3x-x^2+5$?", ["$2$", "$3$", "$4$", "$1$"], 0));
  // HARD
  q.push(mc("hard", "$P(x)=x^3-2x^2+ax+1$ and $P(1)=3$. Then $a=$", ["$3$", "$1$", "$2$", "$0$"], 0));
  q.push(mc("hard", "$P(x)=x^2-3x$; find $P(a+1)$.", ["$a^2-a-2$", "$a^2-3a+1$", "$a^2-a$", "$a^2-3a-2$"], 0));
  q.push(mc("hard", "If $\\deg P=3$, then $\\deg[P(x)]^2=$", ["$6$", "$3$", "$9$", "$5$"], 0));
  q.push(mc("hard", "$P(x)=x^3+1$; find $P(P(0))$.", ["$2$", "$1$", "$0$", "$8$"], 0));
  q.push(mc("hard", "If $\\deg P=m,\\deg Q=n$, then $\\deg(PQ)=$", ["$m+n$", "$mn$", "$\\max(m,n)$", "$m-n$"], 0));
  q.push(mc("hard", "$P(x)=2x^3-5x^2+x-3$; $P(2)=$", ["$-5$", "$5$", "$3$", "$-1$"], 0));
  q.push(mc("hard", "$P(x)=x^4-1$; find $P(\\sqrt2)$.", ["$3$", "$1$", "$0$", "$2$"], 0));
  q.push(mc("hard", "$P(x)=x^3,\\ Q(x)=x-1$; then $P(Q(x))=$", ["$(x-1)^3$", "$x^3-1$", "$x^3-1^3$", "$x^2-1$"], 0));
  q.push(ms("hard", "Which give a degree-6 product?", ["$x^2\\cdot x^4$", "$(x^3)^2$", "$x^3\\cdot x^3$", "$x^2\\cdot x^3$"], [0, 1, 2]));
  q.push(ms("hard", "For $P(x)=x^3-2x^2+x+1$, which equal $P(2)$?", ["$3$", "$8-8+2+1$", "$2$", "$P(2)$"], [0, 1, 3]));
  q.push(tf("hard", "$\\deg(P+Q)$ can be less than $\\max(\\deg P,\\deg Q)$.", true));
  q.push(tf("hard", "The degree of $[P(x)]^2$ is twice $\\deg P$.", true));
  q.push(tf("hard", "$P(a)$ is found by substituting $x=a$.", true));
  q.push(tf("hard", "A degree-$n$ polynomial has exactly $n$ terms.", false, "It has at most $n+1$ terms."));
  q.push(num("hard", "$P(x)=x^3-2x^2+ax+1$, $P(1)=3$. Find $a$.", 3, 0));
  q.push(num("hard", "$P(x)=2x^3-5x^2+x-3$; find $P(2)$.", -5, 0));
  q.push(num("hard", "$P(x)=x^3+1$; find $P(P(0))$.", 2, 0));
  q.push(num("hard", "$\\deg P=4$; find $\\deg[P(x)]^3$.", 12, 0));
  q.push(fill("hard", "$P(x)=x^2-3x$; $P(a+1)=a^2-a$ ___ (constant, with sign).", ["-2"]));
  q.push(fill("hard", "If $\\deg P=3,\\deg Q=2$, then $\\deg(P\\cdot Q)=$ ___.", ["5"]));
  return q;
}

// ── 2.2 Graphs of Polynomial Functions ────────────────────────
function g22() {
  const q = [];
  // EASY
  q.push(mc("easy", "End behaviour of $y=x^3$?", ["down-left, up-right", "up both", "down both", "up-left, down-right"], 0));
  q.push(mc("easy", "End behaviour of $y=x^4$?", ["up both", "down both", "down-left, up-right", "up-left, down-right"], 0));
  q.push(mc("easy", "Max $x$-intercepts of a cubic?", ["$3$", "$2$", "$4$", "$1$"], 0));
  q.push(mc("easy", "Max turning points of a quartic?", ["$3$", "$4$", "$2$", "$5$"], 0));
  q.push(mc("easy", "Even degree, positive leading coefficient — ends:", ["up both", "down both", "opposite", "one up, one down"], 0));
  q.push(mc("easy", "Odd-degree polynomial — ends:", ["opposite directions", "same direction", "both up", "both down"], 0));
  q.push(mc("easy", "A degree-5 polynomial has at most how many real zeros?", ["$5$", "$4$", "$6$", "$3$"], 0));
  q.push(ms("easy", "Which have ends in opposite directions?", ["$y=x^3$", "$y=x^5$", "$y=x^4$", "$y=2x^3-1$"], [0, 1, 3]));
  q.push(ms("easy", "Which open up on both ends?", ["$y=x^4$", "$y=2x^4-1$", "$y=-x^4$", "$y=x^6$"], [0, 1, 3]));
  q.push(ms("easy", "True for polynomials?", ["degree $n$ has $\\le n$ zeros", "$\\le n-1$ turning points", "continuous and smooth", "always symmetric"], [0, 1, 2]));
  q.push(tf("easy", "Odd-degree polynomials have opposite end behaviours.", true));
  q.push(tf("easy", "A quartic can have 4 turning points.", false, "At most 3."));
  q.push(tf("easy", "$y=-x^4$ falls on both ends.", true));
  q.push(tf("easy", "A cubic always has at least one real zero.", true));
  q.push(num("easy", "Max $x$-intercepts of a degree-6 polynomial.", 6, 0));
  q.push(num("easy", "Max turning points of a degree-5 polynomial.", 4, 0));
  q.push(num("easy", "Max real zeros of a quartic.", 4, 0));
  q.push(num("easy", "Max turning points of a cubic.", 2, 0));
  q.push(fill("easy", "A degree-$n$ polynomial has at most ___ turning points (in terms of $n$).", ["n-1"]));
  q.push(fill("easy", "$y=x^4$ rises on ___ ends (both/one).", ["both"]));
  // MEDIUM
  q.push(mc("medium", "End behaviour of $y=-2x^3+x$?", ["up-left, down-right", "down-left, up-right", "up both", "down both"], 0));
  q.push(mc("medium", "End behaviour of $y=-x^4+3x^2$?", ["down both", "up both", "opposite", "up-left, down-right"], 0));
  q.push(mc("medium", "A graph rises on both ends. Then it is:", ["even degree, $+$LC", "odd degree", "even, $-$LC", "odd, $+$LC"], 0));
  q.push(mc("medium", "A graph falls on both ends. Then it is:", ["even degree, $-$LC", "odd, $+$LC", "even, $+$LC", "odd, $-$LC"], 0));
  q.push(mc("medium", "End behaviour of $y=3x^5$?", ["down-left, up-right", "up both", "down both", "up-left, down-right"], 0));
  q.push(mc("medium", "End behaviour of $y=-x^6$?", ["down both", "up both", "opposite", "up-left, down-right"], 0));
  q.push(mc("medium", "A cubic with positive leading coefficient:", ["down-left, up-right", "up-left, down-right", "up both", "down both"], 0));
  q.push(mc("medium", "The degree of a polynomial with 3 turning points is at least:", ["$4$", "$3$", "$2$", "$5$"], 0));
  q.push(ms("medium", "Which fall on the left and rise on the right?", ["$y=x^3$", "$y=x^5$", "$y=2x^7$", "$y=-x^3$"], [0, 1, 2]));
  q.push(ms("medium", "Which have even degree?", ["$y=x^4-2x^2$", "$y=-3x^6$", "$y=x^3$", "$y=5x^2$"], [0, 1, 3]));
  q.push(tf("medium", "$y=-5x^3+2x^2-1$ goes up-left, down-right.", true));
  q.push(tf("medium", "A degree-4 graph must have an even number of turning points.", false, "It can have 1 or 3."));
  q.push(num("medium", "Minimum degree with 4 turning points.", 5, 0));
  q.push(num("medium", "Max $x$-intercepts of $y=x^4-5x^2+4$.", 4, 0));
  q.push(num("medium", "Max turning points for degree 7.", 6, 0));
  q.push(num("medium", "Max real zeros for degree 5.", 5, 0));
  q.push(fill("medium", "A graph with ends up-left and down-right has ___ degree (odd/even).", ["odd"]));
  q.push(fill("medium", "$y=-x^4$ ends point ___ (up/down) on both sides.", ["down"]));
  q.push(mc("medium", "How many $x$-intercepts does $y=(x-1)(x+2)(x-3)$ have?", ["$3$", "$2$", "$1$", "$0$"], 0));
  q.push(mc("medium", "$y=x^2(x-1)$ touches the axis at:", ["$x=0$", "$x=1$", "both", "neither"], 0));
  // HARD
  q.push(mc("hard", "A degree-4 polynomial with positive LC and 4 distinct real zeros has how many turning points?", ["$3$", "$2$", "$4$", "$1$"], 0));
  q.push(mc("hard", "If a graph rises on both ends and has 2 $x$-intercepts, its minimum degree is:", ["$2$", "$4$", "$3$", "$6$"], 0));
  q.push(mc("hard", "A cubic that is strictly increasing has how many turning points?", ["$0$", "$1$", "$2$", "$3$"], 0));
  q.push(mc("hard", "The graph of $y=(x-2)^2(x+1)$ at $x=2$:", ["touches", "crosses", "has an asymptote", "has a hole"], 0));
  q.push(mc("hard", "End behaviour of $y=-(x-1)(x+2)(x-3)(x+4)$?", ["down both", "up both", "opposite", "up-left, down-right"], 0));
  q.push(mc("hard", "At a triple root ($x=1$), the graph:", ["crosses, flattening", "touches", "jumps", "is vertical"], 0));
  q.push(mc("hard", "Minimum degree of a polynomial with turning points at 3 distinct places?", ["$4$", "$3$", "$5$", "$6$"], 0));
  q.push(mc("hard", "If $P(x)$ has degree 5 with 3 real zeros, the other 2 zeros are:", ["a complex conjugate pair", "also real", "zero", "undefined"], 0));
  q.push(ms("hard", "Which could describe a graph up on both ends?", ["degree 2, $+$LC", "degree 4, $+$LC", "degree 6, $+$LC", "degree 3, $+$LC"], [0, 1, 2]));
  q.push(ms("hard", "For $y=(x+1)^2(x-2)^3$, which are true?", ["touches at $x=-1$", "crosses at $x=2$", "degree 5", "6 real zeros"], [0, 1, 2]));
  q.push(tf("hard", "A degree-4 polynomial can have exactly 1 turning point.", true));
  q.push(tf("hard", "If LC $>0$ and degree even, both ends go up.", true));
  q.push(tf("hard", "A polynomial of odd degree always crosses the $x$-axis at least once.", true));
  q.push(tf("hard", "Even multiplicity means the graph crosses the axis.", false, "It touches."));
  q.push(num("hard", "Degree of $y=(x-1)^2(x+2)^3$.", 5, 0));
  q.push(num("hard", "Number of distinct real zeros of $y=(x-1)^2(x+2)(x-3)$.", 3, 0));
  q.push(num("hard", "Turning points of a degree-4 with 4 distinct zeros.", 3, 0));
  q.push(num("hard", "Zero count (with multiplicity) of $(x-1)^3(x+2)^2$.", 5, 0));
  q.push(fill("hard", "At a zero of even multiplicity, the graph ___ the axis (touches/crosses).", ["touches"]));
  q.push(fill("hard", "$y=-x^5$ goes ___-left (up/down).", ["up"]));
  return q;
}

// ── 2.3 Factored Form & Zeros ─────────────────────────────────
function g23() {
  const q = [];
  // EASY
  q.push(mc("easy", "Zeros of $(x-2)(x+3)$?", ["$2,-3$", "$-2,3$", "$2,3$", "$-2,-3$"], 0));
  q.push(mc("easy", "Zero of $(x-5)$?", ["$5$", "$-5$", "$0$", "$1$"], 0));
  q.push(mc("easy", "$(x+4)$ gives a zero at:", ["$-4$", "$4$", "$0$", "$1$"], 0));
  q.push(mc("easy", "Zeros of $x(x-1)$?", ["$0,1$", "$1$", "$0$", "$-1$"], 0));
  q.push(mc("easy", "A double factor $(x-3)^2$ means the graph:", ["touches at 3", "crosses at 3", "misses 3", "is vertical at 3"], 0));
  q.push(mc("easy", "Zeros of $(x-1)(x+1)(x-2)$?", ["$1,-1,2$", "$1,1,2$", "$-1,-1,-2$", "$1,-1,-2$"], 0));
  q.push(mc("easy", "How many zeros (with multiplicity) does $(x-2)^3$ have?", ["$3$", "$1$", "$2$", "$0$"], 0));
  q.push(ms("easy", "Which have a zero at $x=2$?", ["$(x-2)$", "$(x-2)(x+1)$", "$(x+2)$", "$x^2-4$"], [0, 1, 3]));
  q.push(ms("easy", "Which have a double zero?", ["$(x-1)^2$", "$(x+3)^2(x-1)$", "$(x-2)(x+2)$", "$x^2$"], [0, 1, 3]));
  q.push(ms("easy", "Zeros of $x(x-4)(x+3)$?", ["$0$", "$4$", "$-3$", "$3$"], [0, 1, 2]));
  q.push(tf("easy", "$(x-r)$ gives a zero at $x=r$.", true));
  q.push(tf("easy", "Even multiplicity means the graph touches the axis.", true));
  q.push(tf("easy", "$(x+2)$ gives a zero at $x=2$.", false, "At $x=-2$."));
  q.push(tf("easy", "A cubic can have 3 real zeros.", true));
  q.push(num("easy", "Zero of $(x-7)$.", 7, 0));
  q.push(num("easy", "Number of zeros with multiplicity of $(x-1)^2(x+3)$.", 3, 0));
  q.push(num("easy", "The positive zero of $(x-5)(x+2)$.", 5, 0));
  q.push(num("easy", "Multiplicity of the zero at $x=2$ in $(x-2)^3$.", 3, 0));
  q.push(fill("easy", "$(x+6)$ gives a zero at $x=$ ___.", ["-6"]));
  q.push(fill("easy", "$(x-3)^2$ has a zero of multiplicity ___ at $x=3$.", ["2"]));
  // MEDIUM
  q.push(mc("medium", "A quadratic with zeros 2 and $-5$:", ["$a(x-2)(x+5)$", "$a(x+2)(x-5)$", "$a(x-2)(x-5)$", "$a(x+2)(x+5)$"], 0));
  q.push(mc("medium", "A cubic with zeros $-1,2,3$:", ["$a(x+1)(x-2)(x-3)$", "$a(x-1)(x+2)(x+3)$", "$a(x+1)(x+2)(x+3)$", "$a(x-1)(x-2)(x-3)$"], 0));
  q.push(mc("medium", "At $x=1$, $y=(x-1)^2(x+2)$:", ["touches", "crosses", "has an asymptote", "is undefined"], 0));
  q.push(mc("medium", "Zeros of $y=(x-4)(x+1)^2$?", ["$4,-1$ (double)", "$-4,1$", "$4,1$", "$-4,-1$"], 0));
  q.push(mc("medium", "Behaviour of $y=x(x-2)^3$ at $x=2$:", ["crosses, flattening", "touches", "jumps", "is vertical"], 0));
  q.push(mc("medium", "A cubic with a double zero at 2 and a zero at $-1$:", ["$a(x-2)^2(x+1)$", "$a(x-2)(x+1)^2$", "$a(x+2)^2(x-1)$", "$a(x+2)(x-1)^2$"], 0));
  q.push(mc("medium", "Zeros of $y=x^2(x-3)(x+2)$?", ["$0$ (double), $3,-2$", "$0,3,-2$", "$0,-3,2$", "$0$ (double), $-3,2$"], 0));
  q.push(mc("medium", "A quadratic with zeros $\\pm4$ passes $(0,-16)$. Then $a=$", ["$1$", "$-1$", "$16$", "$-16$"], 0));
  q.push(ms("medium", "Which have zeros $\\{1,-2\\}$?", ["$(x-1)(x+2)$", "$x^2+x-2$", "$(x+1)(x-2)$", "$a(x-1)(x+2)$"], [0, 1, 3]));
  q.push(ms("medium", "For $y=(x-2)^2(x+5)$, which are true?", ["touches at 2", "crosses at $-5$", "degree 3", "zero at 5"], [0, 1, 2]));
  q.push(tf("medium", "A cubic with zeros $0,1,-2$ through $(2,8)$ has $a=1$.", true));
  q.push(tf("medium", "$(x-2)^2(x+1)$ crosses the axis at $x=2$.", false, "It touches."));
  q.push(num("medium", "A cubic with zeros $0,1,-2$ passes $(2,8)$. Find $a$.", 1, 0));
  q.push(num("medium", "A quadratic with zeros $\\pm4$ passes $(0,-16)$. Find $a$.", 1, 0));
  q.push(num("medium", "A cubic with zeros $1,-1,2$ passes $(0,4)$. Find $a$.", 2, 0));
  q.push(num("medium", "Number of distinct zeros of $(x-2)^2(x+5)$.", 2, 0));
  q.push(fill("medium", "A cubic with a double zero at $-1$ and a zero at 4: $a(x+1)^2(x-$ ___$)$.", ["4"]));
  q.push(fill("medium", "$y=(x-2)^5$ at $x=2$: the graph ___ (touches/crosses).", ["crosses"]));
  q.push(mc("medium", "Build a cubic with zeros $-3,0,3$:", ["$a\\,x(x-3)(x+3)$", "$a(x-3)(x+3)$", "$a\\,x^2(x-3)$", "$a\\,x(x-3)^2$"], 0));
  q.push(mc("medium", "The zero of $(2x-1)$ is:", ["$\\frac12$", "$2$", "$-\\frac12$", "$1$"], 0));
  // HARD
  q.push(mc("hard", "A quartic with zeros $\\pm1,\\pm2$ and $a=1$:", ["$(x^2-1)(x^2-4)$", "$(x-1)(x-2)$", "$(x^2+1)(x^2+4)$", "$(x-1)(x+1)$"], 0));
  q.push(mc("hard", "If $y=a(x-1)(x-2)(x-3)$ passes $(0,12)$, then $a=$", ["$-2$", "$2$", "$12$", "$6$"], 0));
  q.push(mc("hard", "A cubic touches at $x=2$ and crosses at $x=-1$. A form is:", ["$a(x-2)^2(x+1)$", "$a(x-2)(x+1)^2$", "$a(x+2)^2(x-1)$", "$a(x+2)(x-1)^2$"], 0));
  q.push(mc("hard", "The polynomial $x^3-3x^2+4$ has zeros:", ["$2$ (double), $-1$", "$2,-1,1$", "$-2,-2,1$", "$3,-1$"], 0));
  q.push(mc("hard", "A degree-5 polynomial with zeros $0,\\pm1,\\pm2$ and $a=1$:", ["$x(x^2-1)(x^2-4)$", "$x(x-1)(x-2)$", "$(x^2-1)(x^2-4)$", "$x^2(x^2-4)$"], 0));
  q.push(mc("hard", "A cubic with zeros $1,1,4$ and $a=2$; its value at $x=0$:", ["$-8$", "$8$", "$4$", "$-4$"], 0));
  q.push(mc("hard", "A quadratic with a double root at 3 is:", ["$a(x-3)^2$", "$a(x-3)(x+3)$", "$a(x+3)^2$", "$a(x-3)$"], 0));
  q.push(mc("hard", "The zeros of $2x^3-3x^2-11x+6$ are $3,\\tfrac12,-2$. Their product is:", ["$-3$", "$3$", "$6$", "$-6$"], 0));
  q.push(ms("hard", "Which are zeros of $x^3+2x^2-5x-6$?", ["$-1$", "$-3$", "$2$", "$1$"], [0, 1, 2]));
  q.push(ms("hard", "For a polynomial with zeros 2 (double) and $-3$, which are true?", ["degree $\\ge3$", "touches at 2", "crosses at $-3$", "factor $(x-2)^2$"], [0, 1, 2, 3]));
  q.push(tf("hard", "A cubic through $(0,12)$ with zeros 1,2,3 has $a=-2$.", true));
  q.push(tf("hard", "The product of the zeros of $a(x-r_1)(x-r_2)$ equals $r_1 r_2$.", true));
  q.push(tf("hard", "A double root contributes 2 to the total count of zeros with multiplicity.", true));
  q.push(tf("hard", "A degree-4 polynomial always has 4 distinct real zeros.", false, "Some may repeat or be complex."));
  q.push(num("hard", "$y=a(x-1)(x-2)(x-3)$ passes $(0,12)$. Find $a$.", -2, 0));
  q.push(num("hard", "A cubic with zeros $1,1,4$ and $a=2$; find $P(0)$.", -8, 0));
  q.push(num("hard", "Product of zeros $3,\\tfrac12,-2$.", -3, 0));
  q.push(num("hard", "A quartic $(x^2-1)(x^2-4)$; number of real zeros.", 4, 0));
  q.push(fill("hard", "The zero of $(3x-2)$ is $x=$ ___ (fraction like 2/3).", ["2/3"]));
  q.push(fill("hard", "$x^3-3x^2+4=(x-2)^2(x+$ ___$)$.", ["1"]));
  return q;
}

// ── 2.4 Dividing Polynomials ──────────────────────────────────
function g24() {
  const q = [];
  // EASY
  q.push(mc("easy", "$(x^2+5x+6)\\div(x+2)=$", ["$x+3$", "$x+2$", "$x+6$", "$x-3$"], 0));
  q.push(mc("easy", "$(x^2-9)\\div(x-3)=$", ["$x+3$", "$x-3$", "$x+9$", "$x$"], 0));
  q.push(mc("easy", "$(x^3)\\div(x)=$", ["$x^2$", "$x^3$", "$x$", "$3$"], 0));
  q.push(mc("easy", "In $P=DQ+R$, $R$ is the:", ["remainder", "quotient", "divisor", "dividend"], 0));
  q.push(mc("easy", "$(2x^2+4x)\\div(2x)=$", ["$x+2$", "$2x+4$", "$x+4$", "$2x$"], 0));
  q.push(mc("easy", "$(x^2+2x+1)\\div(x+1)=$", ["$x+1$", "$x-1$", "$x+2$", "$x$"], 0));
  q.push(mc("easy", "The divisor in $(x^3-1)\\div(x-1)$ is:", ["$x-1$", "$x^3-1$", "$x$", "$1$"], 0));
  q.push(ms("easy", "Which divide evenly by $(x-1)$?", ["$x^2-1$", "$x^3-1$", "$x^2+x-2$", "$x^2+1$"], [0, 1, 2]));
  q.push(ms("easy", "For $x^2+5x+6$, which are factors?", ["$(x+2)$", "$(x+3)$", "$(x-2)$", "$(x+6)$"], [0, 1]));
  q.push(ms("easy", "True about polynomial division?", ["$P=DQ+R$", "$\\deg R<\\deg D$", "synthetic works for $x-a$", "$R$ can exceed $D$"], [0, 1, 2]));
  q.push(tf("easy", "$x^2-9=(x-3)(x+3)$.", true));
  q.push(tf("easy", "Synthetic division works for a divisor $x-a$.", true));
  q.push(tf("easy", "The remainder can have higher degree than the divisor.", false, "It must be lower."));
  q.push(tf("easy", "$(x^3-1)\\div(x-1)=x^2+x+1$.", true));
  q.push(num("easy", "$(x^2+5x+6)\\div(x+2)$: constant term of the quotient.", 3, 0));
  q.push(num("easy", "$(6x^2)\\div(3x)=2x$: its coefficient.", 2, 0));
  q.push(num("easy", "$(x^2-4)\\div(x-2)$: constant of the quotient.", 2, 0));
  q.push(num("easy", "Remainder of $(x^2+3x+2)\\div(x+1)$.", 0, 0));
  q.push(fill("easy", "$(x^2-9)\\div(x-3)=x+$ ___.", ["3"]));
  q.push(fill("easy", "In $P=DQ+R$, the letter for the quotient is ___.", ["Q"]));
  // MEDIUM
  q.push(mc("medium", "$(x^3-1)\\div(x-1)=$", ["$x^2+x+1$", "$x^2-x+1$", "$x^2+1$", "$x^2-1$"], 0));
  q.push(mc("medium", "$(2x^3+3x^2-1)\\div(x+2)$ remainder:", ["$-5$", "$5$", "$0$", "$-1$"], 0));
  q.push(mc("medium", "$(x^3+8)\\div(x+2)=$", ["$x^2-2x+4$", "$x^2+2x+4$", "$x^2-4$", "$x^2+4$"], 0));
  q.push(mc("medium", "$(x^3-7x-6)\\div(x+1)=$", ["$x^2-x-6$", "$x^2+x-6$", "$x^2-6$", "$x^2-x+6$"], 0));
  q.push(mc("medium", "$(2x^2-3x+1)\\div(x-2)$ remainder:", ["$3$", "$0$", "$-3$", "$1$"], 0));
  q.push(mc("medium", "$(x^4-16)\\div(x-2)=$", ["$x^3+2x^2+4x+8$", "$x^3-2x^2+4x-8$", "$x^3+8$", "$x^3-16$"], 0));
  q.push(mc("medium", "$(x^3+2x^2-3)\\div(x-1)=$", ["$x^2+3x+3$", "$x^2+3x-3$", "$x^2-3x+3$", "$x^2+3$"], 0));
  q.push(mc("medium", "$(x^3-6x^2+11x-6)\\div(x-1)=$", ["$x^2-5x+6$", "$x^2-5x-6$", "$x^2+5x+6$", "$x^2-6$"], 0));
  q.push(ms("medium", "Which have remainder 0 on $\\div(x-1)$?", ["$x^3-1$", "$x^2-1$", "$x^3-6x^2+11x-6$", "$x^2+1$"], [0, 1, 2]));
  q.push(ms("medium", "Which quotients are correct for $\\div(x+2)$?", ["$(x^3+8)\\to x^2-2x+4$", "$(x^2-4)\\to x-2$", "$(x^2+5x+6)\\to x+3$", "$(x^3+8)\\to x^2+4$"], [0, 1, 2]));
  q.push(tf("medium", "$(x^4-16)\\div(x-2)=x^3+2x^2+4x+8$.", true));
  q.push(tf("medium", "$(2x^2-3x+1)\\div(x-2)$ has remainder 3.", true));
  q.push(num("medium", "Remainder of $(2x^3+3x^2-1)\\div(x+2)$.", -5, 0));
  q.push(num("medium", "$(2x^2-3x+1)\\div(x-2)$ remainder.", 3, 0));
  q.push(num("medium", "$(x^3-2x^2-5x+6)\\div(x-1)$ remainder.", 0, 0));
  q.push(num("medium", "Constant term of the quotient $(x^3+8)\\div(x+2)$.", 4, 0));
  q.push(fill("medium", "$(x^3-1)\\div(x-1)=x^2+x+$ ___.", ["1"]));
  q.push(fill("medium", "$(x^3-6x^2+11x-6)\\div(x-1)=x^2-5x+$ ___.", ["6"]));
  q.push(mc("medium", "$(x^3-2x^2-5x+6)\\div(x-1)=$", ["$x^2-x-6$", "$x^2+x-6$", "$x^2-x+6$", "$x^2-6$"], 0));
  q.push(mc("medium", "Degree of the quotient when dividing degree 4 by degree 1:", ["$3$", "$4$", "$2$", "$1$"], 0));
  // HARD
  q.push(mc("hard", "$(x^4-3x^2+2)\\div(x-1)=$", ["$x^3+x^2-2x-2$", "$x^3-x^2-2x+2$", "$x^3+x^2-2$", "$x^3-2$"], 0));
  q.push(mc("hard", "If $(x^3+kx-6)\\div(x-2)$ has remainder 4, then $k=$", ["$1$", "$2$", "$-1$", "$4$"], 0));
  q.push(mc("hard", "$(x^3-2x^2-5x+6)\\div(x-3)=$", ["$x^2+x-2$", "$x^2-x-2$", "$x^2+x+2$", "$x^2-2$"], 0));
  q.push(mc("hard", "$(2x^3-x^2-8x+4)\\div(2x-1)=$", ["$x^2-4$", "$x^2+4$", "$x^2-2$", "$2x^2-4$"], 0));
  q.push(mc("hard", "The remainder of $(x^5-1)\\div(x-1)$:", ["$0$", "$1$", "$-1$", "$5$"], 0));
  q.push(mc("hard", "$(x^3+3x^2-4)\\div(x+2)=$", ["$x^2+x-2$", "$x^2-x-2$", "$x^2+x+2$", "$x^2-2$"], 0));
  q.push(mc("hard", "If $(x^3+ax^2+2)\\div(x+1)$ has remainder 0, then $a=$", ["$-1$", "$1$", "$2$", "$3$"], 0));
  q.push(mc("hard", "A polynomial divided by $(x-2)$ gives quotient $x^2+1$ and remainder 3. The polynomial is:", ["$x^3-2x^2+x+1$", "$x^3+x-1$", "$x^3-2x^2+x-1$", "$x^3+x+1$"], 0));
  q.push(ms("hard", "Which divisions give remainder 0?", ["$(x^3+8)\\div(x+2)$", "$(x^4-16)\\div(x-2)$", "$(x^3-1)\\div(x-1)$", "$(x^2+1)\\div(x-1)$"], [0, 1, 2]));
  q.push(ms("hard", "For $(x^3+kx-6)\\div(x-2)$ with remainder 4, which hold?", ["$8+2k-6=4$", "$k=1$", "$P(2)=4$", "$k=2$"], [0, 1, 2]));
  q.push(tf("hard", "$(x^5-1)\\div(x-1)$ has remainder 0.", true));
  q.push(tf("hard", "If $(x^3+ax^2+2)\\div(x+1)$ has remainder 0, then $a=-1$.", true));
  q.push(tf("hard", "The quotient of a degree-5 divided by a degree-2 has degree 3.", true));
  q.push(tf("hard", "A degree-3 divided by degree-1 always leaves a linear remainder.", false, "The remainder is a constant."));
  q.push(num("hard", "If $(x^3+kx-6)\\div(x-2)$ has remainder 4, find $k$.", 1, 0));
  q.push(num("hard", "If $(x^3+ax^2+2)\\div(x+1)$ has remainder 0, find $a$.", -1, 0));
  q.push(num("hard", "Reconstruct $P(0)$ if $P=(x-2)(x^2+1)+3$.", 1, 0));
  q.push(num("hard", "Constant term of the quotient $(x^4-3x^2+2)\\div(x-1)$.", -2, 0));
  q.push(fill("hard", "$(2x^3-x^2-8x+4)\\div(2x-1)=x^2-$ ___.", ["4"]));
  q.push(fill("hard", "$(x^3+3x^2-4)\\div(x+2)=x^2+x-$ ___.", ["2"]));
  return q;
}

// ── 2.5 The Remainder Theorem ─────────────────────────────────
function g25() {
  const q = [];
  // EASY
  q.push(mc("easy", "The remainder of $P(x)\\div(x-a)$ is:", ["$P(a)$", "$P(-a)$", "$P(0)$", "$a$"], 0));
  q.push(mc("easy", "Remainder of $(x^2+3x-2)\\div(x-1)$:", ["$2$", "$0$", "$-2$", "$1$"], 0));
  q.push(mc("easy", "Remainder of $(x^3)\\div(x-2)$:", ["$8$", "$6$", "$2$", "$0$"], 0));
  q.push(mc("easy", "To find the remainder on $\\div(x-3)$, compute:", ["$P(3)$", "$P(-3)$", "$P(0)$", "$P(1)$"], 0));
  q.push(mc("easy", "Remainder of $(x^2-4)\\div(x-2)$:", ["$0$", "$4$", "$-4$", "$2$"], 0));
  q.push(mc("easy", "Remainder of $(x+5)\\div(x-1)$:", ["$6$", "$5$", "$4$", "$0$"], 0));
  q.push(mc("easy", "Remainder of $(x^2+1)\\div(x+1)$:", ["$2$", "$0$", "$1$", "$-1$"], 0));
  q.push(ms("easy", "Which give remainder 0 on $\\div(x-1)$?", ["$x^2-1$", "$x^3-1$", "$x-1$", "$x^2+1$"], [0, 1, 2]));
  q.push(ms("easy", "The remainder theorem says:", ["$R=P(a)$ for $x-a$", "substitute $x=a$", "one evaluation, no long division", "$R=P(0)$ always"], [0, 1, 2]));
  q.push(ms("easy", "Which equal $P(2)$ for $P(x)=x^2$?", ["$4$", "remainder of $\\div(x-2)$", "$2^2$", "$8$"], [0, 1, 2]));
  q.push(tf("easy", "The remainder of $P(x)\\div(x-a)$ equals $P(a)$.", true));
  q.push(tf("easy", "Remainder of $(x^2+1)\\div(x-1)$ is 2.", true));
  q.push(tf("easy", "To divide by $(x+2)$, evaluate $P(2)$.", false, "Evaluate $P(-2)$."));
  q.push(tf("easy", "The remainder theorem avoids full long division.", true));
  q.push(num("easy", "Remainder of $(x^2+3x-2)\\div(x-1)$.", 2, 0));
  q.push(num("easy", "Remainder of $(x^3-8)\\div(x-2)$.", 0, 0));
  q.push(num("easy", "Remainder of $(x^2-4)\\div(x+2)$.", 0, 0));
  q.push(num("easy", "Remainder of $(x+5)\\div(x-1)$.", 6, 0));
  q.push(fill("easy", "For $\\div(x-4)$, evaluate $P($ ___$)$.", ["4"]));
  q.push(fill("easy", "Remainder of $(x^2+1)\\div(x+1)$ is ___.", ["2"]));
  // MEDIUM
  q.push(mc("medium", "Remainder of $(x^3-4x+1)\\div(x-2)$:", ["$1$", "$0$", "$-1$", "$9$"], 0));
  q.push(mc("medium", "Remainder of $(x^3-4x+1)\\div(x+3)$:", ["$-14$", "$14$", "$-2$", "$40$"], 0));
  q.push(mc("medium", "Remainder of $(x^3-2x+4)\\div(x+2)$:", ["$0$", "$8$", "$-8$", "$16$"], 0));
  q.push(mc("medium", "Remainder of $(2x^3+x-5)\\div(x-1)$:", ["$-2$", "$2$", "$0$", "$-5$"], 0));
  q.push(mc("medium", "Remainder of $(x^4-1)\\div(x-1)$:", ["$0$", "$1$", "$-1$", "$2$"], 0));
  q.push(mc("medium", "Remainder of $(x^3+2x^2-x+5)\\div(x+1)$:", ["$7$", "$5$", "$3$", "$-7$"], 0));
  q.push(mc("medium", "Remainder of $(x^4-3x^2+1)\\div(x-1)$:", ["$-1$", "$1$", "$0$", "$3$"], 0));
  q.push(mc("medium", "Remainder of $(3x^2-2x+7)\\div(x+2)$:", ["$23$", "$-23$", "$15$", "$7$"], 0));
  q.push(ms("medium", "Which give remainder 0?", ["$(x^3-2x+4)\\div(x+2)$", "$(x^4-1)\\div(x-1)$", "$(x^3-8)\\div(x-2)$", "$(x^3-4x+1)\\div(x-2)$"], [0, 1, 2]));
  q.push(ms("medium", "For the remainder of $\\div(x+3)$, which are correct?", ["evaluate $P(-3)$", "synthetic with $-3$", "$R=P(-3)$", "evaluate $P(3)$"], [0, 1, 2]));
  q.push(tf("medium", "Remainder of $(x^3-4x+1)\\div(x-2)$ is 1.", true));
  q.push(tf("medium", "Remainder of $(x^3-2x+4)\\div(x+2)$ is 0.", true));
  q.push(num("medium", "Remainder of $(x^3-4x+1)\\div(x+3)$.", -14, 0));
  q.push(num("medium", "Remainder of $(x^3+2x^2-x+5)\\div(x+1)$.", 7, 0));
  q.push(num("medium", "Remainder of $(3x^2-2x+7)\\div(x+2)$.", 23, 0));
  q.push(num("medium", "Remainder of $(2x^3+x-5)\\div(x-1)$.", -2, 0));
  q.push(fill("medium", "Remainder of $(x^4-3x^2+1)\\div(x-1)$ is ___.", ["-1"]));
  q.push(fill("medium", "Remainder of $(x^3-8)\\div(x-2)$ is ___.", ["0"]));
  q.push(mc("medium", "If $P(x)=x^3+kx^2-4$ has remainder 0 on $\\div(x-2)$, then $k=$", ["$-1$", "$1$", "$2$", "$4$"], 0));
  q.push(mc("medium", "If $P(x)=x^3+ax+2$ has remainder 8 on $\\div(x-1)$, then $a=$", ["$5$", "$3$", "$1$", "$8$"], 0));
  // HARD
  q.push(mc("hard", "$P(x)=2x^3-x+c$ has remainder 5 on $\\div(x-1)$. Then $c=$", ["$4$", "$5$", "$1$", "$-1$"], 0));
  q.push(mc("hard", "Remainder of $(3x^3-x+2)\\div(3x-1)$:", ["$\\frac{16}{9}$", "$2$", "$\\frac{4}{3}$", "$0$"], 0));
  q.push(mc("hard", "If $P(2)=0$ and $P(x)=x^3+bx-2$, then $b=$", ["$-3$", "$3$", "$-1$", "$1$"], 0));
  q.push(mc("hard", "$P(x)=x^3-2x^2+x+k$ has remainder 6 on $\\div(x-2)$. Then $k=$", ["$4$", "$6$", "$2$", "$0$"], 0));
  q.push(mc("hard", "Remainder of $(2x^3-3x^2+1)\\div(2x-1)$:", ["$\\frac12$", "$0$", "$1$", "$-\\frac12$"], 0));
  q.push(mc("hard", "$P$ has $P(1)=3,\\ P(-1)=1$. The remainders on $(x-1),(x+1)$ are:", ["$3$ and $1$", "$1$ and $3$", "$0,0$", "$3,3$"], 0));
  q.push(mc("hard", "Remainder of $(x^{10}-1)\\div(x-1)$:", ["$0$", "$1$", "$10$", "$-1$"], 0));
  q.push(mc("hard", "$P(x)=x^4+ax^3-3$ has remainder 13 on $\\div(x-2)$. Then $a=$", ["$0$", "$1$", "$2$", "$-1$"], 0));
  q.push(ms("hard", "Which give a zero remainder (so $x-a$ is a factor)?", ["$(x^3-2x+4)\\div(x+2)$", "$(x^3-8)\\div(x-2)$", "$(x^3-4x+1)\\div(x-2)$", "$(x^4-1)\\div(x+1)$"], [0, 1, 3]));
  q.push(ms("hard", "For $P(x)=2x^3-x+c$ with remainder 5 on $\\div(x-1)$, which hold?", ["$2-1+c=5$", "$c=4$", "$P(1)=5$", "$c=5$"], [0, 1, 2]));
  q.push(tf("hard", "If the remainder of $P\\div(x-a)$ is 0, then $x-a$ is a factor.", true));
  q.push(tf("hard", "Remainder of $(x^{10}-1)\\div(x-1)$ is 0.", true));
  q.push(tf("hard", "For a divisor $2x-1$, evaluate $P(\\tfrac12)$.", true));
  q.push(tf("hard", "The remainder theorem gives the quotient directly.", false, "It gives only the remainder."));
  q.push(num("hard", "$P(x)=2x^3-x+c$, remainder 5 on $\\div(x-1)$. Find $c$.", 4, 0));
  q.push(num("hard", "$P(x)=x^4+ax^3-3$, remainder 13 on $\\div(x-2)$. Find $a$.", 0, 0));
  q.push(num("hard", "Remainder of $(x^{10}-1)\\div(x-1)$.", 0, 0));
  q.push(num("hard", "$P(x)=x^3+bx-2$ with $P(2)=0$. Find $b$.", -3, 0));
  q.push(fill("hard", "For a divisor $3x-1$, evaluate $P($ ___$)$ (fraction).", ["1/3"]));
  q.push(fill("hard", "$P(x)=x^3-2x^2+x+k$, remainder 6 on $\\div(x-2)$; $k=$ ___.", ["4"]));
  return q;
}

// ── 2.6 The Factor Theorem ────────────────────────────────────
function g26() {
  const q = [];
  // EASY
  q.push(mc("easy", "$x-a$ is a factor of $P$ if and only if:", ["$P(a)=0$", "$P(a)=1$", "$P(0)=a$", "$a=0$"], 0));
  q.push(mc("easy", "Is $(x-1)$ a factor of $x^3-1$?", ["yes", "no", "only if $x=1$", "cannot tell"], 0));
  q.push(mc("easy", "Is $(x+2)$ a factor of $x^3+8$?", ["yes", "no", "only sometimes", "no info"], 0));
  q.push(mc("easy", "If $P(3)=0$, a factor is:", ["$(x-3)$", "$(x+3)$", "$(3x)$", "$(x-1)$"], 0));
  q.push(mc("easy", "Factor $x^2-4$:", ["$(x-2)(x+2)$", "$(x-2)^2$", "$(x+2)^2$", "$(x-4)(x+1)$"], 0));
  q.push(mc("easy", "Factor $x^2-x$:", ["$x(x-1)$", "$x(x+1)$", "$(x-1)^2$", "$x^2$"], 0));
  q.push(mc("easy", "For a polynomial with constant term 6, candidate integer zeros include:", ["$\\pm1,\\pm2,\\pm3,\\pm6$", "only $\\pm1$", "$\\pm6$ only", "none"], 0));
  q.push(ms("easy", "Which are factors of $x^2-4$?", ["$(x-2)$", "$(x+2)$", "$(x-4)$", "$(x+1)$"], [0, 1]));
  q.push(ms("easy", "Which have $(x-1)$ as a factor?", ["$x^2-1$", "$x^3-1$", "$x^2-3x+2$", "$x^2+1$"], [0, 1, 2]));
  q.push(ms("easy", "True about the factor theorem?", ["test factors of the constant", "$P(a)=0\\Rightarrow(x-a)$ factor", "divide, then factor the rest", "$P(a)=1\\Rightarrow$ factor"], [0, 1, 2]));
  q.push(tf("easy", "If $P(2)=0$, then $(x-2)$ is a factor.", true));
  q.push(tf("easy", "$(x-1)$ is a factor of $x^3-1$.", true));
  q.push(tf("easy", "$(x+1)$ is a factor of $x^3-1$.", false, "$P(-1)=-2\\ne0$."));
  q.push(tf("easy", "Candidate rational zeros come from the constant term's factors.", true));
  q.push(num("easy", "If $(x-a)$ is a factor and $P(5)=0$, then $a=$", 5, 0));
  q.push(num("easy", "Is $(x-2)$ a factor of $x^2-4$? (1 = yes, 0 = no).", 1, 0));
  q.push(num("easy", "The zero making $(x+3)$ a factor.", -3, 0));
  q.push(num("easy", "$x^2-9=(x-3)(x+$ ___$)$: the blank.", 3, 0));
  q.push(fill("easy", "$(x-1)$ a factor of $x^3-1$? (yes/no).", ["yes"]));
  q.push(fill("easy", "If $P(-4)=0$, a factor is $(x+$ ___$)$.", ["4"]));
  // MEDIUM
  q.push(mc("medium", "Factor $x^3-x$:", ["$x(x-1)(x+1)$", "$x(x^2-1)$ only", "$(x-1)^3$", "$x^3$"], 0));
  q.push(mc("medium", "Factor $x^3-2x^2-x+2$:", ["$(x-1)(x-2)(x+1)$", "$(x+1)(x+2)(x-1)$", "$(x-1)^3$", "$(x-2)^3$"], 0));
  q.push(mc("medium", "Factor $x^3+3x^2-4$:", ["$(x-1)(x+2)^2$", "$(x+1)(x-2)^2$", "$(x-1)(x-2)(x+2)$", "$(x+1)(x+2)^2$"], 0));
  q.push(mc("medium", "Is $x+2$ a factor of $x^3+8$?", ["yes", "no", "only if $x=2$", "no info"], 0));
  q.push(mc("medium", "Factor $x^3-7x+6$:", ["$(x-1)(x-2)(x+3)$", "$(x+1)(x+2)(x-3)$", "$(x-1)(x+2)(x-3)$", "$(x+1)(x-2)(x+3)$"], 0));
  q.push(mc("medium", "Factor $x^3+2x^2-5x-6$:", ["$(x+1)(x+3)(x-2)$", "$(x-1)(x-3)(x+2)$", "$(x+1)(x-3)(x-2)$", "$(x-1)(x+3)(x+2)$"], 0));
  q.push(mc("medium", "Factor $x^4-16$:", ["$(x-2)(x+2)(x^2+4)$", "$(x-2)^2(x+2)^2$", "$(x^2-4)^2$", "$(x-4)(x+4)$"], 0));
  q.push(mc("medium", "Is $x-3$ a factor of $x^3-4x^2+x+6$?", ["yes", "no", "only if $x=3$", "no info"], 0));
  q.push(ms("medium", "Which factor $x^3-x$?", ["$x$", "$(x-1)$", "$(x+1)$", "$(x-2)$"], [0, 1, 2]));
  q.push(ms("medium", "Which are factors of $x^3-6x^2+11x-6$?", ["$(x-1)$", "$(x-2)$", "$(x-3)$", "$(x+1)$"], [0, 1, 2]));
  q.push(tf("medium", "$(x-2)$ is a factor of $x^3-2x^2-x+2$.", true));
  q.push(tf("medium", "$x^3+3x^2-4=(x-1)(x+2)^2$.", true));
  q.push(num("medium", "Is $x+2$ a factor of $x^3+8$? (1/0).", 1, 0));
  q.push(num("medium", "Is $x-3$ a factor of $x^3-4x^2+x+6$? (1/0).", 1, 0));
  q.push(num("medium", "The three zeros of $x^3-6x^2+11x-6$ (1,2,3) sum to:", 6, 0));
  q.push(num("medium", "Product of zeros of $x^3-x$ (0,1,$-1$).", 0, 0));
  q.push(fill("medium", "$x^3-2x^2-x+2=(x-1)(x-2)(x+$ ___$)$.", ["1"]));
  q.push(fill("medium", "$x^3+3x^2-4=(x-1)(x+$ ___$)^2$.", ["2"]));
  q.push(mc("medium", "Factor $x^3-6x^2+11x-6$:", ["$(x-1)(x-2)(x-3)$", "$(x+1)(x+2)(x+3)$", "$(x-1)(x-2)(x+3)$", "$(x-1)(x+2)(x-3)$"], 0));
  q.push(mc("medium", "Factor $x^3+x^2-4x-4$:", ["$(x+1)(x-2)(x+2)$", "$(x-1)(x-2)(x+2)$", "$(x+1)(x+2)^2$", "$(x-1)(x+2)^2$"], 0));
  // HARD
  q.push(mc("hard", "Factor $2x^3-3x^2-11x+6$ (given $x=3$ is a zero):", ["$(x-3)(2x-1)(x+2)$", "$(x-3)(2x+1)(x-2)$", "$(x+3)(2x-1)(x-2)$", "$(x-3)(x-1)(x+2)$"], 0));
  q.push(mc("hard", "Factor $x^4-5x^2+4$:", ["$(x-1)(x+1)(x-2)(x+2)$", "$(x^2-1)^2$", "$(x-2)^2(x+1)^2$", "$(x^2-4)^2$"], 0));
  q.push(mc("hard", "Factor $x^4-1$ over the reals:", ["$(x-1)(x+1)(x^2+1)$", "$(x-1)^2(x+1)^2$", "$(x^2-1)(x^2-1)$", "$(x-1)(x+1)$"], 0));
  q.push(mc("hard", "$(x-1)$ is a factor of $x^3-2x^2+kx-2$ when $k=$", ["$3$", "$1$", "$2$", "$-2$"], 0));
  q.push(mc("hard", "$(x+2)$ is a factor of $x^3+kx^2+4$ when $k=$", ["$1$", "$-3$", "$2$", "$3$"], 0));
  q.push(mc("hard", "Factor completely $x^3-4x^2+x+6$:", ["$(x+1)(x-2)(x-3)$", "$(x-1)(x+2)(x+3)$", "$(x+1)(x+2)(x-3)$", "$(x-1)(x-2)(x-3)$"], 0));
  q.push(mc("hard", "If $x=\\tfrac12$ is a zero of $2x^3-x^2-8x+4$, a factor is:", ["$(2x-1)$", "$(x-2)$", "$(2x+1)$", "$(x+2)$"], 0));
  q.push(mc("hard", "$x^3-2x^2-x+2$ has zeros summing to:", ["$2$", "$1$", "$0$", "$3$"], 0));
  q.push(ms("hard", "Which are zeros of $2x^3-3x^2-11x+6$?", ["$3$", "$\\frac12$", "$-2$", "$1$"], [0, 1, 2]));
  q.push(ms("hard", "For $(x-1)$ to be a factor of $x^3-2x^2+kx-2$, which hold?", ["$P(1)=0$", "$1-2+k-2=0$", "$k=3$", "$k=1$"], [0, 1, 2]));
  q.push(tf("hard", "$(x-1)(x+1)(x-2)(x+2)=x^4-5x^2+4$.", true));
  q.push(tf("hard", "$x^4-1$ factors as $(x-1)(x+1)(x^2+1)$ over the reals.", true));
  q.push(tf("hard", "Every quartic factors into linear real factors.", false, "Some factors may be irreducible quadratics."));
  q.push(tf("hard", "If $x=\\tfrac12$ is a zero, then $(2x-1)$ is a factor.", true));
  q.push(num("hard", "Find $k$ if $(x-1)$ is a factor of $x^3-2x^2+kx-2$.", 3, 0));
  q.push(num("hard", "Find $k$ if $(x+2)$ is a factor of $x^3+kx^2+4$.", 1, 0));
  q.push(num("hard", "Sum of zeros of $x^3-2x^2-x+2$.", 2, 0));
  q.push(num("hard", "Number of real linear factors of $x^4-1$.", 2, 0));
  q.push(fill("hard", "$2x^3-3x^2-11x+6=(x-3)(2x-1)(x+$ ___$)$.", ["2"]));
  q.push(fill("hard", "$x^4-5x^2+4=(x^2-1)(x^2-$ ___$)$.", ["4"]));
  return q;
}

// ── 2.7 Solving Polynomial Equations ──────────────────────────
function g27() {
  const q = [];
  // EASY
  q.push(mc("easy", "Solve $(x-3)(x+4)=0$:", ["$3,-4$", "$-3,4$", "$3,4$", "$-3,-4$"], 0));
  q.push(mc("easy", "Solve $x(x-2)=0$:", ["$0,2$", "$2$", "$0$", "$-2$"], 0));
  q.push(mc("easy", "Solve $x^2-9=0$:", ["$\\pm3$", "$3$", "$9$", "$\\pm9$"], 0));
  q.push(mc("easy", "Solve $x^2=16$:", ["$\\pm4$", "$4$", "$8$", "$\\pm8$"], 0));
  q.push(mc("easy", "The zero-product property: a product is 0 when:", ["a factor is 0", "all factors are 0", "the sum is 0", "never"], 0));
  q.push(mc("easy", "Solve $x^2-x=0$:", ["$0,1$", "$1$", "$0$", "$-1$"], 0));
  q.push(mc("easy", "Solve $2x-1=0$:", ["$\\frac12$", "$2$", "$-\\frac12$", "$1$"], 0));
  q.push(ms("easy", "Which solve $x^2-4=0$?", ["$2$", "$-2$", "$4$", "$0$"], [0, 1]));
  q.push(ms("easy", "Which solve $x(x-3)=0$?", ["$0$", "$3$", "$-3$", "$1$"], [0, 1]));
  q.push(ms("easy", "Steps to solve a polynomial equation:", ["move to one side", "factor", "zero-product", "guess randomly"], [0, 1, 2]));
  q.push(tf("easy", "To solve, first set the equation to 0.", true));
  q.push(tf("easy", "$x^2=25$ gives $x=\\pm5$.", true));
  q.push(tf("easy", "$(x-2)(x+2)=0$ gives $x=2$ only.", false, "Also $x=-2$."));
  q.push(tf("easy", "A product is 0 when at least one factor is 0.", true));
  q.push(num("easy", "Positive solution of $x^2-9=0$.", 3, 0));
  q.push(num("easy", "Solve $x-7=0$.", 7, 0));
  q.push(num("easy", "Number of solutions of $(x-1)(x-2)(x-3)=0$.", 3, 0));
  q.push(num("easy", "Solve $2x=0$.", 0, 0));
  q.push(fill("easy", "Solve $(x+5)=0$: $x=$ ___.", ["-5"]));
  q.push(fill("easy", "$x^2=36$ gives $x=\\pm$ ___.", ["6"]));
  // MEDIUM
  q.push(mc("medium", "Solve $x^3-9x=0$:", ["$0,\\pm3$", "$\\pm3$", "$0,3$", "$0,\\pm9$"], 0));
  q.push(mc("medium", "Solve $x^3-4x=0$:", ["$0,\\pm2$", "$\\pm2$", "$0,2$", "$0,\\pm4$"], 0));
  q.push(mc("medium", "Solve $x^4-5x^2+4=0$:", ["$\\pm1,\\pm2$", "$\\pm1$", "$\\pm2$", "$1,4$"], 0));
  q.push(mc("medium", "Solve $x^3-3x^2+4=0$:", ["$2$ (double), $-1$", "$2,-1,1$", "$-2,-2,1$", "$3,-1$"], 0));
  q.push(mc("medium", "Solve $x^3+2x^2-5x-6=0$:", ["$-1,-3,2$", "$1,3,-2$", "$-1,3,2$", "$1,-3,-2$"], 0));
  q.push(mc("medium", "Solve $x^4-13x^2+36=0$:", ["$\\pm2,\\pm3$", "$\\pm2$", "$\\pm3$", "$2,3$"], 0));
  q.push(mc("medium", "Solve $x^3-x^2-4x+4=0$:", ["$1,2,-2$", "$-1,2,-2$", "$1,-2,-2$", "$-1,-2,2$"], 0));
  q.push(mc("medium", "Solve $x^2(x-3)=0$:", ["$0$ (double), $3$", "$0,3$", "$3$", "$0,-3$"], 0));
  q.push(ms("medium", "Which solve $x^3-4x=0$?", ["$0$", "$2$", "$-2$", "$4$"], [0, 1, 2]));
  q.push(ms("medium", "Which solve $x^4-5x^2+4=0$?", ["$1$", "$-1$", "$2$", "$-2$"], [0, 1, 2, 3]));
  q.push(tf("medium", "$x^3-9x=0$ has solutions $0,\\pm3$.", true));
  q.push(tf("medium", "$x^4-5x^2+4=0$ is quadratic in $x^2$.", true));
  q.push(num("medium", "Number of real solutions of $x^4-5x^2+4=0$.", 4, 0));
  q.push(num("medium", "The largest solution of $x^3+2x^2-5x-6=0$ (roots $-1,-3,2$).", 2, 0));
  q.push(num("medium", "Sum of solutions of $x^3-x^2-4x+4=0$ (roots 1,2,$-2$).", 1, 0));
  q.push(num("medium", "The double root of $x^3-3x^2+4=0$.", 2, 0));
  q.push(fill("medium", "$x^3-4x=0$ has solutions $0$ and $\\pm$ ___.", ["2"]));
  q.push(fill("medium", "$x^4-13x^2+36=0$: the positive solutions are $2$ and ___.", ["3"]));
  q.push(mc("medium", "Solve $x^3-16x=0$:", ["$0,\\pm4$", "$\\pm4$", "$0,4$", "$0,\\pm16$"], 0));
  q.push(mc("medium", "Solve $2x^3-x^2-8x+4=0$:", ["$\\frac12,\\pm2$", "$-\\frac12,\\pm2$", "$\\frac12,2$", "$-\\frac12,2$"], 0));
  // HARD
  q.push(mc("hard", "Solve $x^4-10x^2+9=0$:", ["$\\pm1,\\pm3$", "$\\pm1$", "$\\pm3$", "$1,9$"], 0));
  q.push(mc("hard", "Solve $x^3-6x^2+11x-6=0$:", ["$1,2,3$", "$-1,-2,-3$", "$1,2,-3$", "$-1,2,3$"], 0));
  q.push(mc("hard", "Solve $x^3-x^2-4x+4=0$ (positive roots):", ["$1,2$", "$1,-2$", "$2$", "$1$"], 0));
  q.push(mc("hard", "Solve $2x^3-3x^2-11x+6=0$:", ["$3,\\frac12,-2$", "$-3,\\frac12,2$", "$3,-\\frac12,-2$", "$-3,-\\frac12,2$"], 0));
  q.push(mc("hard", "Solve $x^4-1=0$ over the reals:", ["$\\pm1$", "$1$", "$\\pm1,\\pm i$", "$-1$"], 0));
  q.push(mc("hard", "Solve $x^3-7x-6=0$:", ["$3,-1,-2$", "$-3,1,2$", "$3,1,-2$", "$-3,-1,2$"], 0));
  q.push(mc("hard", "Solve $x^3+x^2-4x-4=0$:", ["$-1,2,-2$", "$1,-2,2$", "$-1,-2,2$", "$1,2,-2$"], 0));
  q.push(mc("hard", "How many real roots does $x^4+1=0$ have?", ["$0$", "$2$", "$4$", "$1$"], 0));
  q.push(ms("hard", "Which are roots of $x^3-6x^2+11x-6=0$?", ["$1$", "$2$", "$3$", "$0$"], [0, 1, 2]));
  q.push(ms("hard", "Which are roots of $2x^3-3x^2-11x+6=0$?", ["$3$", "$\\frac12$", "$-2$", "$1$"], [0, 1, 2]));
  q.push(tf("hard", "$x^4-10x^2+9=0$ has 4 real solutions.", true));
  q.push(tf("hard", "$x^4+1=0$ has no real solutions.", true));
  q.push(tf("hard", "A cubic equation always has at least one real solution.", true));
  q.push(tf("hard", "$x^3-6x^2+11x-6=0$ has roots 1, 2, and 3.", true));
  q.push(num("hard", "Sum of the roots of $x^3-6x^2+11x-6=0$.", 6, 0));
  q.push(num("hard", "Number of real roots of $x^4+1=0$.", 0, 0));
  q.push(num("hard", "The root of $x^3-7x-6=0$ closest to zero (roots $3,-1,-2$).", -1, 0));
  q.push(num("hard", "Product of the roots of $2x^3-3x^2-11x+6=0$ ($3,\\tfrac12,-2$).", -3, 0));
  q.push(fill("hard", "$x^4-10x^2+9=0$: the positive roots are 1 and ___.", ["3"]));
  q.push(fill("hard", "$x^3-7x-6=0$ has roots $3,-1,$ and ___.", ["-2"]));
  return q;
}

// ── 2.8 Applications of Polynomial Functions ──────────────────
function g28() {
  const q = [];
  // EASY
  q.push(mc("easy", "A box has volume $V=lwh$. If $l=x,w=x,h=5$, then $V=$", ["$5x^2$", "$x^2$", "$5x$", "$10x$"], 0));
  q.push(mc("easy", "$h(t)=-5t^2+20t$ is zero at $t=$", ["$0,4$", "$4$", "$0$", "$5$"], 0));
  q.push(mc("easy", "Volume of a cube of side $x$:", ["$x^3$", "$3x$", "$x^2$", "$6x^2$"], 0));
  q.push(mc("easy", "If $A=x(x+2)$, then at $x=3$, $A=$", ["$15$", "$5$", "$9$", "$6$"], 0));
  q.push(mc("easy", "A projectile $h=-5t^2+10t$ lands at $t=$", ["$2$", "$10$", "$5$", "$0$"], 0));
  q.push(mc("easy", "A rectangular area $x(10-x)$ at $x=4$:", ["$24$", "$40$", "$10$", "$16$"], 0));
  q.push(mc("easy", "The positive root of $x^2-25=0$:", ["$5$", "$-5$", "$25$", "$0$"], 0));
  q.push(ms("easy", "Which model a volume?", ["$x(x+1)(x+2)$", "$lwh$", "$\\pi r^2h$", "$2x+3$"], [0, 1, 2]));
  q.push(ms("easy", "Which are reasonable (positive) side lengths?", ["$x=2$", "$x=5$", "$x=-3$", "$x=0.5$"], [0, 1, 3]));
  q.push(ms("easy", "For $h(t)=-5t^2+20t$, which are true?", ["lands at $t=4$", "starts at 0", "reaches a max in between", "never returns"], [0, 1, 2]));
  q.push(tf("easy", "A length must be positive.", true));
  q.push(tf("easy", "$h(t)=-5t^2+20t$ lands at $t=4$.", true));
  q.push(tf("easy", "Negative roots are always valid dimensions.", false, "Lengths must be positive."));
  q.push(tf("easy", "The volume of a cube with side $x$ is $x^3$.", true));
  q.push(num("easy", "$V=x^3$ at $x=2$.", 8, 0));
  q.push(num("easy", "$h(t)=-5t^2+20t$; landing time (s).", 4, 0));
  q.push(num("easy", "Area $x(10-x)$ at $x=4$.", 24, 0));
  q.push(num("easy", "A cube of side 3 has volume.", 27, 0));
  q.push(fill("easy", "A box $x\\cdot x\\cdot 5$ has volume $5x$ raised to the power ___.", ["2"]));
  q.push(fill("easy", "$h(t)=-5t^2+10t$ lands at $t=$ ___.", ["2"]));
  // MEDIUM
  q.push(mc("medium", "Squares of side $x$ are cut from a $12\\times12$ sheet. The box volume is:", ["$x(12-2x)^2$", "$x(12-x)^2$", "$x^2(12-2x)$", "$x(12-2x)$"], 0));
  q.push(mc("medium", "For $V=x(12-2x)^2$, at $x=2$:", ["$128$", "$100$", "$144$", "$64$"], 0));
  q.push(mc("medium", "$V=x^3+4x^2+3x=x(x+1)(x+3)$ at $x=2$:", ["$30$", "$24$", "$20$", "$15$"], 0));
  q.push(mc("medium", "$h(t)=-5t^2+30t$ lands at:", ["$6$ s", "$30$ s", "$5$ s", "$3$ s"], 0));
  q.push(mc("medium", "Solve $x^3-7x-6=0$ for the positive root:", ["$3$", "$1$", "$2$", "$6$"], 0));
  q.push(mc("medium", "$d(x)=x^3-12x=0$ at positive $x$:", ["$2\\sqrt3$", "$12$", "$3$", "$4$"], 0));
  q.push(mc("medium", "$h(t)=-5t^2+20t$; the time at the maximum height (vertex):", ["$2$ s", "$4$ s", "$1$ s", "$5$ s"], 0));
  q.push(mc("medium", "A box $x(x-1)(x+2)$ at $x=3$:", ["$30$", "$24$", "$20$", "$15$"], 0));
  q.push(ms("medium", "Which give $V=128$ for $x(12-2x)^2$?", ["$x=2$", "$2(8)^2$", "$x=6$", "$x=3$"], [0, 1]));
  q.push(ms("medium", "For $h(t)=-5t^2+30t$, which are true?", ["lands at 6 s", "vertex at 3 s", "starts at 0", "max at $t=6$"], [0, 1, 2]));
  q.push(tf("medium", "$x(12-2x)^2$ requires $0<x<6$.", true));
  q.push(tf("medium", "$V=x(x+1)(x+3)$ at $x=2$ equals 30.", true));
  q.push(num("medium", "$x(12-2x)^2$ at $x=2$.", 128, 0));
  q.push(num("medium", "$h(t)=-5t^2+30t$; landing time (s).", 6, 0));
  q.push(num("medium", "$x(x-1)(x+2)$ at $x=3$.", 30, 0));
  q.push(num("medium", "Positive root of $x^3-7x-6=0$.", 3, 0));
  q.push(fill("medium", "$h(t)=-5t^2+40t$ lands at $t=$ ___ s.", ["8"]));
  q.push(fill("medium", "$V=x(x+1)(x+3)$ at $x=2$ is ___.", ["30"]));
  q.push(mc("medium", "$V=x(10-2x)^2$ at $x=1$:", ["$64$", "$72$", "$100$", "$80$"], 0));
  q.push(mc("medium", "The vertex time of $h=-5t^2+40t$:", ["$4$ s", "$8$ s", "$2$ s", "$5$ s"], 0));
  // HARD
  q.push(mc("hard", "A $16\\times16$ sheet, cut $x$: volume $x(16-2x)^2$. At $x=2$:", ["$288$", "$768$", "$256$", "$144$"], 0));
  q.push(mc("hard", "A box from a $20\\times20$ sheet, cut $x$: $V=x(20-2x)^2$. At $x=2$:", ["$512$", "$400$", "$576$", "$256$"], 0));
  q.push(mc("hard", "$x(20-2x)^2=512$ has a solution:", ["$x=2$", "$x=10$", "$x=5$", "$x=8$"], 0));
  q.push(mc("hard", "$V=x(x+2)(x+4)$ at $x=2$:", ["$48$", "$30$", "$24$", "$60$"], 0));
  q.push(mc("hard", "$h(t)=-5t^2+25t$ lands at:", ["$5$ s", "$25$ s", "$2.5$ s", "$10$ s"], 0));
  q.push(mc("hard", "The maximum height of $h=-5t^2+20t$ (at $t=2$):", ["$20$ m", "$40$ m", "$15$ m", "$10$ m"], 0));
  q.push(mc("hard", "The maximum height of $h=-5t^2+30t$ (at $t=3$):", ["$45$ m", "$90$ m", "$30$ m", "$60$ m"], 0));
  q.push(mc("hard", "Solve $x^3-x^2-4x+4=0$ for its positive roots:", ["$1,2$", "$1,-2$", "$2$", "$1$"], 0));
  q.push(ms("hard", "For $h=-5t^2+20t$, which are true?", ["max height 20 m", "vertex at $t=2$", "lands at $t=4$", "max 40 m"], [0, 1, 2]));
  q.push(ms("hard", "Which are positive roots of $x^3-x^2-4x+4=0$?", ["$1$", "$2$", "$-2$", "$0$"], [0, 1]));
  q.push(tf("hard", "$x(16-2x)^2=768$ has a solution with $0<x<8$.", false, "The maximum of that volume is about 303."));
  q.push(tf("hard", "$h=-5t^2+20t$ reaches a maximum height of 20 m at $t=2$ s.", true));
  q.push(tf("hard", "A box-volume model $x(w-2x)^2$ needs $0<x<w/2$.", true));
  q.push(tf("hard", "The maximum height of $h=-5t^2+30t$ is 90 m.", false, "It is 45 m at $t=3$."));
  q.push(num("hard", "$V=x(20-2x)^2$ at $x=2$.", 512, 0));
  q.push(num("hard", "Maximum height of $h=-5t^2+20t$ (m).", 20, 0));
  q.push(num("hard", "Maximum height of $h=-5t^2+30t$ (m).", 45, 0));
  q.push(num("hard", "$V=x(x+2)(x+4)$ at $x=2$.", 48, 0));
  q.push(fill("hard", "$h=-5t^2+25t$ lands at $t=$ ___ s.", ["5"]));
  q.push(fill("hard", "The vertex height of $h=-5t^2+20t$ is ___ m.", ["20"]));
  return q;
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
