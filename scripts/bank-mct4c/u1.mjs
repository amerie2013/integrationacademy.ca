// MCT4C Unit 1 — Exponential Functions & Logarithms: question bank.
// 60 questions per topic: 20 easy / 20 medium / 20 hard (hard = genuinely hard,
// but within MCT4C scope). Kinds: mc, ms, tf, num, fill.
import { mc, ms, tf, num, fill } from "./helpers.mjs";

// ── 1.1 Exponent Laws ─────────────────────────────────────────
function g11() {
  const q = [];
  // EASY
  q.push(mc("easy", "Simplify $2^3\\cdot2^4$.", ["$2^7$", "$2^{12}$", "$4^7$", "$2^{1}$"], 0));
  q.push(mc("easy", "Simplify $\\dfrac{x^5}{x^2}$.", ["$x^3$", "$x^{2.5}$", "$x^7$", "$x^{10}$"], 0));
  q.push(mc("easy", "Simplify $(x^2)^3$.", ["$x^6$", "$x^5$", "$x^8$", "$x^9$"], 0));
  q.push(mc("easy", "Evaluate $5^0$.", ["$1$", "$0$", "$5$", "undefined"], 0));
  q.push(mc("easy", "Evaluate $2^{-2}$.", ["$\\frac14$", "$-4$", "$4$", "$-\\frac14$"], 0));
  q.push(mc("easy", "Simplify $(3x)^2$.", ["$9x^2$", "$3x^2$", "$6x^2$", "$9x$"], 0));
  q.push(mc("easy", "Evaluate $3^2\\cdot3$.", ["$27$", "$9$", "$81$", "$18$"], 0));
  q.push(ms("easy", "Which equal $2^5$?", ["$32$", "$2^2\\cdot2^3$", "$2^{10}/2^2$", "$16$"], [0, 1]));
  q.push(ms("easy", "Which simplify to $x^6$?", ["$(x^2)^3$", "$x^2\\cdot x^4$", "$x^8/x^2$", "$x^3+x^3$"], [0, 1, 2]));
  q.push(ms("easy", "Which statements are true?", ["$a^0=1$ for $a\\ne0$", "$a^{-n}=1/a^n$", "$a^m a^n=a^{mn}$", "$(a^m)^n=a^{mn}$"], [0, 1, 3]));
  q.push(tf("easy", "$a^m\\cdot a^n=a^{m+n}$.", true));
  q.push(tf("easy", "$(ab)^n=a^n b^n$.", true));
  q.push(tf("easy", "$a^m+a^n=a^{m+n}$.", false, "You add exponents only when multiplying powers."));
  q.push(tf("easy", "$2^{-3}=\\tfrac18$.", true));
  q.push(num("easy", "Evaluate $3^4$.", 81, 0));
  q.push(num("easy", "Evaluate $2^6$.", 64, 0));
  q.push(num("easy", "Evaluate $10^{-2}$ as a decimal.", 0.01, 0.001));
  q.push(num("easy", "Evaluate $5^3$.", 125, 0));
  q.push(fill("easy", "$2^0=$ ___.", ["1"]));
  q.push(fill("easy", "$x^7\\cdot x^3=x^{\\text{___}}$.", ["10"]));
  // MEDIUM
  q.push(mc("medium", "Simplify $(2x^3)^4$.", ["$16x^{12}$", "$8x^{12}$", "$16x^7$", "$2x^{12}$"], 0));
  q.push(mc("medium", "Simplify $\\dfrac{(x^2y^3)^2}{xy}$.", ["$x^3y^5$", "$x^4y^6$", "$x^3y^6$", "$x^5y^5$"], 0));
  q.push(mc("medium", "Evaluate $27^{2/3}$.", ["$9$", "$18$", "$3$", "$6$"], 0));
  q.push(mc("medium", "Evaluate $16^{-3/4}$.", ["$\\frac18$", "$8$", "$-8$", "$\\frac{1}{16}$"], 0));
  q.push(mc("medium", "Evaluate $\\left(\\tfrac{8}{27}\\right)^{-2/3}$.", ["$\\frac94$", "$\\frac49$", "$\\frac23$", "$\\frac32$"], 0));
  q.push(mc("medium", "Simplify $a^{1/2}\\cdot a^{1/3}$.", ["$a^{5/6}$", "$a^{1/6}$", "$a^{2/5}$", "$a^{1/5}$"], 0));
  q.push(mc("medium", "Simplify $(4x^{-2})^{-1}$.", ["$\\frac{x^2}{4}$", "$\\frac{4}{x^2}$", "$4x^2$", "$\\frac{1}{4x^2}$"], 0));
  q.push(mc("medium", "Evaluate $32^{3/5}$.", ["$8$", "$16$", "$6$", "$4$"], 0));
  q.push(ms("medium", "Which equal $9$?", ["$27^{2/3}$", "$81^{1/2}$", "$3^2$", "$729^{1/2}$"], [0, 1, 2]));
  q.push(ms("medium", "Which simplify to $\\tfrac{1}{x^2}$?", ["$x^{-2}$", "$(x^2)^{-1}$", "$x^3/x^5$", "$x^{-1/2}$"], [0, 1, 2]));
  q.push(tf("medium", "$(a^{2/3})^6=a^4$.", true));
  q.push(tf("medium", "$8^{2/3}=4$.", true));
  q.push(num("medium", "Evaluate $64^{2/3}$.", 16, 0));
  q.push(num("medium", "Evaluate $81^{3/4}$.", 27, 0));
  q.push(num("medium", "Evaluate $\\left(\\tfrac12\\right)^{-3}$.", 8, 0));
  q.push(num("medium", "Evaluate $25^{1.5}$.", 125, 0));
  q.push(fill("medium", "$100^{1/2}=$ ___.", ["10"]));
  q.push(fill("medium", "In $(3a^2)^3$, the numerical coefficient is ___.", ["27"]));
  q.push(mc("medium", "Simplify $\\dfrac{6a^5b^2}{2a^2b^5}$.", ["$\\frac{3a^3}{b^3}$", "$3a^3b^3$", "$\\frac{a^3}{3b^3}$", "$3a^7b^7$"], 0));
  q.push(mc("medium", "Simplify $(x^{2/3}y^{-1/2})^6$.", ["$\\frac{x^4}{y^3}$", "$x^4y^3$", "$\\frac{x^4}{y}$", "$x^{12}y^{-3}$"], 0));
  // HARD
  q.push(mc("hard", "Simplify $\\dfrac{(2x^{1/2}y^{-1})^4}{x^{-1}y^2}$.", ["$\\frac{16x^3}{y^6}$", "$\\frac{16x^2}{y^4}$", "$16x^3y^6$", "$\\frac{8x^3}{y^6}$"], 0));
  q.push(mc("hard", "If $2^x=5$, find $2^{x+3}$.", ["$40$", "$15$", "$8$", "$125$"], 0));
  q.push(mc("hard", "Simplify $(a^{-1}+b^{-1})^{-1}$.", ["$\\frac{ab}{a+b}$", "$a+b$", "$\\frac{a+b}{ab}$", "$\\frac{1}{a+b}$"], 0));
  q.push(mc("hard", "Simplify $\\dfrac{2^{n+1}}{2^{n-1}}$.", ["$4$", "$2$", "$2^{2n}$", "$1$"], 0));
  q.push(mc("hard", "If $x=2^{1/3}$, find $x^6$.", ["$4$", "$2$", "$8$", "$64$"], 0));
  q.push(mc("hard", "Simplify $\\sqrt{50x^4}$ for $x\\ge0$.", ["$5x^2\\sqrt2$", "$25x^2$", "$5x^2$", "$50x^2$"], 0));
  q.push(mc("hard", "Simplify $\\dfrac{3^{2n}\\cdot3^{n}}{3^{2n}}$.", ["$3^n$", "$3^{3n}$", "$9^n$", "$3^{2n}$"], 0));
  q.push(mc("hard", "Simplify $\\left(\\dfrac{x^3}{y^{-2}}\\right)^2$.", ["$x^6y^4$", "$\\frac{x^6}{y^4}$", "$x^6y^{-4}$", "$x^5y^2$"], 0));
  q.push(ms("hard", "Which equal $2^{10}$?", ["$1024$", "$(2^5)^2$", "$4^5$", "$2^4\\cdot2^6$"], [0, 1, 2, 3]));
  q.push(ms("hard", "Which equal $a^{-2/3}$?", ["$\\frac{1}{a^{2/3}}$", "$\\frac{1}{\\sqrt[3]{a^2}}$", "$(\\sqrt[3]{a})^{-2}$", "$a^{3/2}$"], [0, 1, 2]));
  q.push(tf("hard", "$\\sqrt{a^2}=a$ for every real $a$.", false, "It equals $|a|$."));
  q.push(tf("hard", "$(x+y)^2=x^2+y^2$.", false, "The cross term $2xy$ is missing."));
  q.push(tf("hard", "If $3^x=7$, then $3^{2x}=49$.", true));
  q.push(tf("hard", "$8^{1/3}+27^{1/3}=35^{1/3}$.", false, "It equals $2+3=5$."));
  q.push(num("hard", "If $2^x=6$, find $2^{2x}$.", 36, 0));
  q.push(num("hard", "If $5^x=3$, find $5^{3x}$.", 27, 0));
  q.push(num("hard", "Evaluate $\\dfrac{4^{3}\\cdot4^{-1}}{4^{0}}$.", 16, 0));
  q.push(num("hard", "Evaluate $\\left(\\tfrac{27}{8}\\right)^{2/3}$ as a decimal.", 2.25, 0.01));
  q.push(fill("hard", "Simplify $\\dfrac{x^{2n}}{x^{n}}=x^{\\text{___}}$ (in terms of $n$).", ["n"]));
  q.push(fill("hard", "If $a^3=5$, then $a^6=$ ___.", ["25"]));
  return q;
}

// ── 1.2 Exponential Functions & Their Graphs ──────────────────
function g12() {
  const q = [];
  // EASY
  q.push(mc("easy", "The $y$-intercept of $y=3\\cdot2^{x}$ is:", ["$(0,3)$", "$(0,2)$", "$(0,6)$", "$(0,1)$"], 0));
  q.push(mc("easy", "$y=6\\left(\\tfrac34\\right)^{x}$ is:", ["decay", "growth", "linear", "constant"], 0));
  q.push(mc("easy", "$y=2\\cdot5^{x}$ at $x=2$ is:", ["$50$", "$20$", "$100$", "$10$"], 0));
  q.push(mc("easy", "The horizontal asymptote of $y=4\\cdot3^{x}$ is:", ["$y=0$", "$y=4$", "$x=0$", "$y=3$"], 0));
  q.push(mc("easy", "$y=2^{x}$ passes through:", ["$(0,1)$", "$(1,0)$", "$(0,0)$", "$(0,2)$"], 0));
  q.push(mc("easy", "Which is growth?", ["$y=2^{x}$", "$y=\\left(\\tfrac12\\right)^{x}$", "$y=0.3^{x}$", "$y=0.9^{x}$"], 0));
  q.push(mc("easy", "$y=5\\cdot2^{x}$ at $x=0$ is:", ["$5$", "$10$", "$2$", "$1$"], 0));
  q.push(ms("easy", "Which are exponential-growth functions?", ["$y=3^{x}$", "$y=2\\cdot4^{x}$", "$y=\\left(\\tfrac13\\right)^{x}$", "$y=5^{x}$"], [0, 1, 3]));
  q.push(ms("easy", "True for $y=a\\,b^{x}$ with $a>0,b>1$?", ["passes $(0,a)$", "asymptote $y=0$", "increasing", "has $x$-intercept"], [0, 1, 2]));
  q.push(ms("easy", "Which have $y$-intercept $(0,4)$?", ["$y=4\\cdot2^{x}$", "$y=4\\cdot3^{x}$", "$y=2\\cdot4^{x}$", "$y=4\\left(\\tfrac12\\right)^{x}$"], [0, 1, 3]));
  q.push(tf("easy", "$y=2^{x}$ has range $y>0$.", true));
  q.push(tf("easy", "An exponential function $y=a\\,b^{x}$ ($a>0$) has an $x$-intercept.", false, "It never touches the $x$-axis."));
  q.push(tf("easy", "$y=\\left(\\tfrac25\\right)^{x}$ is decay.", true));
  q.push(tf("easy", "The base of $y=3\\cdot2^{x}$ is $3$.", false, "The base is $2$; $3$ is the coefficient."));
  q.push(num("easy", "Evaluate $y=4\\cdot3^{x}$ at $x=2$.", 36, 0));
  q.push(num("easy", "Evaluate $y=2\\cdot5^{x}$ at $x=1$.", 10, 0));
  q.push(num("easy", "Evaluate $y=6\\left(\\tfrac12\\right)^{x}$ at $x=3$.", 0.75, 0.001));
  q.push(num("easy", "Evaluate $y=3\\cdot2^{x}$ at $x=4$.", 48, 0));
  q.push(fill("easy", "The asymptote of $y=7\\cdot4^{x}$ is $y=$ ___.", ["0"]));
  q.push(fill("easy", "$y=5\\cdot2^{x}$ at $x=3$ equals ___.", ["40"]));
  // MEDIUM
  q.push(mc("medium", "An exponential passes $(0,7)$ and $(1,21)$. It is:", ["$y=7\\cdot3^{x}$", "$y=7\\cdot2^{x}$", "$y=3\\cdot7^{x}$", "$y=21^{x}$"], 0));
  q.push(mc("medium", "The range of $y=2\\cdot3^{x}$ is:", ["$y>0$", "$y\\ge0$", "all reals", "$y>2$"], 0));
  q.push(mc("medium", "$y=5\\cdot2^{x}$ at $x=-2$ is:", ["$\\frac54$", "$\\frac{5}{2}$", "$20$", "$-20$"], 0));
  q.push(mc("medium", "A function passes $(2,20)$ and $(4,80)$. Its base is:", ["$2$", "$4$", "$3$", "$\\sqrt5$"], 0));
  q.push(mc("medium", "Which grows faster for large $x$?", ["$y=3^{x}$", "$y=2^{x}$", "$y=1.5^{x}$", "$y=x^{3}$"], 0));
  q.push(mc("medium", "$y=a\\,b^{x}$ has $y$-intercept $5$ and passes $(2,45)$. Then $b=$", ["$3$", "$9$", "$5$", "$\\sqrt{9}=3$ only if..."], 0));
  q.push(mc("medium", "A quantity triples from $2$ each step. Model:", ["$y=2\\cdot3^{x}$", "$y=3\\cdot2^{x}$", "$y=2^{x}$", "$y=6^{x}$"], 0));
  q.push(mc("medium", "$y=8\\left(\\tfrac12\\right)^{x}$ at $x=3$ is:", ["$1$", "$2$", "$4$", "$\\frac12$"], 0));
  q.push(ms("medium", "Which pass through $(1,6)$?", ["$y=3\\cdot2^{x}$", "$y=2\\cdot3^{x}$", "$y=6\\cdot1^{x}$", "$y=6^{x}$"], [0, 1, 2]));
  q.push(ms("medium", "For $y=2\\cdot3^{x}$, which are true?", ["$y$-int $(0,2)$", "increasing", "asymptote $y=0$", "passes $(1,6)$"], [0, 1, 2, 3]));
  q.push(tf("medium", "If $y=a\\,b^{x}$ passes $(0,5)$ and $(1,15)$, then $b=3$.", true));
  q.push(tf("medium", "$y=4\\cdot2^{x}$ and $y=2\\cdot4^{x}$ have the same $y$-intercept.", false, "They are $(0,4)$ and $(0,2)$."));
  q.push(num("medium", "A function passes $(0,3)$ and $(2,27)$. Find its base $b$.", 3, 0));
  q.push(num("medium", "$y=100\\left(\\tfrac12\\right)^{x}$ at $x=4$.", 6.25, 0.01));
  q.push(num("medium", "A function passes $(1,12)$ and $(3,48)$. Find $b$.", 2, 0));
  q.push(num("medium", "$y=2\\cdot3^{x}$ at $x=-1$ (2 dp).", 0.67, 0.01));
  q.push(fill("medium", "If $y=a\\,b^{x}$ passes $(0,4)$ and $(1,12)$, then $b=$ ___.", ["3"]));
  q.push(fill("medium", "$y=5\\cdot2^{x}$ equals $40$ when $x=$ ___.", ["3"]));
  q.push(mc("medium", "A function passes $(1,6)$ and $(3,54)$. It is:", ["$y=2\\cdot3^{x}$", "$y=3\\cdot2^{x}$", "$y=6\\cdot3^{x}$", "$y=6^{x}$"], 0));
  q.push(mc("medium", "$y=3\\cdot4^{x}$ at $x=\\tfrac12$ is:", ["$6$", "$12$", "$3$", "$24$"], 0));
  // HARD
  q.push(mc("hard", "An exponential passes $(2,18)$ and $(5,486)$. Its base is:", ["$3$", "$2$", "$6$", "$27$"], 0));
  q.push(mc("hard", "If $f(x)=a\\,b^{x}$ with $f(1)=10,f(3)=250$, then $a=$", ["$2$", "$5$", "$10$", "$50$"], 0));
  q.push(mc("hard", "$y=2^{x}$ and $y=3^{x}$ intersect at:", ["$(0,1)$", "$(1,1)$", "nowhere", "$(0,0)$"], 0));
  q.push(mc("hard", "For which $x$ is $2^{x}=3^{x}$?", ["$x=0$", "$x=1$", "no solution", "all $x$"], 0));
  q.push(mc("hard", "If a bacteria count doubles every $3$ h from $500$, the model (in hours) is:", ["$500\\cdot2^{t/3}$", "$500\\cdot2^{3t}$", "$500\\cdot3^{t/2}$", "$500\\cdot2^{t}$"], 0));
  q.push(mc("hard", "$f(x)=3\\cdot2^{x}$. Then $f(x+1)-f(x)=$", ["$3\\cdot2^{x}$", "$3$", "$6$", "$2^{x}$"], 0));
  q.push(mc("hard", "If $g(x)=5^{x}$, then $\\dfrac{g(x+2)}{g(x)}=$", ["$25$", "$10$", "$5$", "$2$"], 0));
  q.push(mc("hard", "A function halves every $4$ h from $80$ mg. Amount after $12$ h:", ["$10$ mg", "$20$ mg", "$40$ mg", "$5$ mg"], 0));
  q.push(ms("hard", "Which pass through both $(0,2)$ and $(2,18)$?", ["$y=2\\cdot3^{x}$", "$y=2\\cdot(-3)^{x}$", "$y=2\\cdot9^{x/2}$", "$y=2\\cdot3^{-x}$"], [0, 2]));
  q.push(ms("hard", "Which describe $y=a\\,b^{x}$ with $0<b<1$, $a>0$?", ["decreasing", "asymptote $y=0$", "$y$-int $(0,a)$", "increasing"], [0, 1, 2]));
  q.push(tf("hard", "If $f(x)=a\\,b^{x}$, then $\\tfrac{f(x+1)}{f(x)}=b$ for all $x$.", true));
  q.push(tf("hard", "Every exponential $y=a\\,b^{x}$ ($a,b>0$) is one-to-one.", true));
  q.push(tf("hard", "$y=2\\cdot3^{x}$ ever equals a negative number.", false, "Its range is $y>0$."));
  q.push(tf("hard", "If $b>1$, then $b^{x}\\to0$ as $x\\to-\\infty$.", true));
  q.push(num("hard", "$f(x)=a\\,b^{x}$, $f(0)=4$, $f(3)=108$. Find $b$.", 3, 0));
  q.push(num("hard", "A colony of $50$ triples every $2$ h. Find the count after $6$ h.", 1350, 0));
  q.push(num("hard", "$f(x)=6\\cdot2^{x}$. Find $f(5)-f(4)$.", 96, 0));
  q.push(num("hard", "A sample of $160$ mg halves every $5$ h. Amount after $15$ h (mg).", 20, 0));
  q.push(fill("hard", "If $f(x)=a\\,b^{x}$ passes $(0,3)$ and $(2,75)$, then $b=$ ___.", ["5"]));
  q.push(fill("hard", "$y=2^{x}$ and $y=8$ meet at $x=$ ___.", ["3"]));
  return q;
}

// ── 1.3 Transformations of Exponential Functions ──────────────
function g13() {
  const q = [];
  // EASY
  q.push(mc("easy", "$y=2^{x-3}$ is $y=2^{x}$ shifted:", ["right $3$", "left $3$", "up $3$", "down $3$"], 0));
  q.push(mc("easy", "The asymptote of $y=5\\cdot3^{x}-2$ is:", ["$y=-2$", "$y=0$", "$y=5$", "$y=2$"], 0));
  q.push(mc("easy", "$y=2^{x}+4$ is shifted:", ["up $4$", "down $4$", "right $4$", "left $4$"], 0));
  q.push(mc("easy", "The asymptote of $y=2^{x-3}+1$ is:", ["$y=1$", "$y=0$", "$y=3$", "$y=-1$"], 0));
  q.push(mc("easy", "$y=-2^{x}$ is $y=2^{x}$:", ["reflected in the $x$-axis", "shifted down", "reflected in the $y$-axis", "stretched"], 0));
  q.push(mc("easy", "$y=2^{x+1}$ is shifted:", ["left $1$", "right $1$", "up $1$", "down $1$"], 0));
  q.push(mc("easy", "In $y=3\\cdot2^{x}$, the $3$ is a:", ["vertical stretch", "shift up", "shift right", "reflection"], 0));
  q.push(ms("easy", "Which shift $y=2^{x}$ up?", ["$y=2^{x}+3$", "$y=2^{x}+1$", "$y=2^{x}-2$", "$y=2^{x+3}$"], [0, 1]));
  q.push(ms("easy", "Which have asymptote $y=3$?", ["$y=2^{x}+3$", "$y=5\\cdot4^{x}+3$", "$y=2^{x}+1$", "$y=3^{x}+3$"], [0, 1, 3]));
  q.push(ms("easy", "Which reflect $y=2^{x}$?", ["$y=-2^{x}$", "$y=2^{-x}$", "$y=2^{x}$", "$y=3\\cdot2^{x}$"], [0, 1]));
  q.push(tf("easy", "$y=2^{x}+5$ has asymptote $y=5$.", true));
  q.push(tf("easy", "$y=2^{x-4}$ shifts left $4$.", false, "It shifts right $4$."));
  q.push(tf("easy", "$y=-3\\cdot2^{x}$ opens downward (reflected).", true));
  q.push(tf("easy", "Adding a constant moves the horizontal asymptote.", true));
  q.push(num("easy", "The asymptote of $y=2^{x}+7$ is $y=$ ___ .", 7, 0));
  q.push(num("easy", "The $y$-intercept of $y=2^{x}+4$ (i.e. value at $x=0$).", 5, 0));
  q.push(num("easy", "The asymptote of $y=5\\cdot3^{x}-6$.", -6, 0));
  q.push(num("easy", "The $y$-intercept of $y=3\\cdot2^{x}-1$.", 2, 0));
  q.push(fill("easy", "$y=2^{x}-3$ has asymptote $y=$ ___.", ["-3"]));
  q.push(fill("easy", "$y=2^{x+5}$ shifts ___ 5 (left/right).", ["left"]));
  // MEDIUM
  q.push(mc("medium", "The $y$-intercept of $y=-3\\cdot2^{x}+4$ is:", ["$(0,1)$", "$(0,4)$", "$(0,-3)$", "$(0,7)$"], 0));
  q.push(mc("medium", "The range of $y=3\\cdot2^{x-1}-6$ is:", ["$y>-6$", "$y>0$", "$y<-6$", "$y>-1$"], 0));
  q.push(mc("medium", "The range of $y=-4\\cdot2^{x}+10$ is:", ["$y<10$", "$y>10$", "$y<-4$", "$y>0$"], 0));
  q.push(mc("medium", "$y=2^{x+1}-3$ has $y$-intercept:", ["$(0,-1)$", "$(0,-3)$", "$(0,2)$", "$(0,-2)$"], 0));
  q.push(mc("medium", "$y=3^{x}$ stretched by $2$, reflected in the $x$-axis, up $5$:", ["$y=-2\\cdot3^{x}+5$", "$y=2\\cdot3^{x}+5$", "$y=-2\\cdot3^{x}-5$", "$y=-2\\cdot3^{-x}+5$"], 0));
  q.push(mc("medium", "$y=2\\cdot3^{x-1}+4$ describes:", ["stretch 2, right 1, up 4", "stretch 2, left 1, up 4", "stretch 3, right 1", "right 1, down 4"], 0));
  q.push(mc("medium", "The $y$-intercept of $y=-2\\cdot4^{x}+9$:", ["$(0,7)$", "$(0,9)$", "$(0,-2)$", "$(0,11)$"], 0));
  q.push(mc("medium", "$y=4^{x+2}+3$ describes:", ["left 2, up 3", "right 2, up 3", "left 2, down 3", "up 2, left 3"], 0));
  q.push(ms("medium", "Which have range $y>2$?", ["$y=3\\cdot2^{x}+2$", "$y=5^{x}+2$", "$y=-2^{x}+2$", "$y=4\\cdot3^{x}+2$"], [0, 1, 3]));
  q.push(ms("medium", "For $y=-2\\cdot3^{x}+5$, which are true?", ["asymptote $y=5$", "range $y<5$", "reflected", "$y$-int $(0,3)$"], [0, 1, 2, 3]));
  q.push(tf("medium", "$y=-5\\cdot3^{x}+2$ has range $y<2$.", true));
  q.push(tf("medium", "$y=3\\cdot2^{x-1}-6$ has range $y>-6$.", true));
  q.push(num("medium", "The $y$-intercept value of $y=6\\cdot2^{x}-4$.", 2, 0));
  q.push(num("medium", "The $y$-intercept value of $y=-2\\cdot4^{x}+9$.", 7, 0));
  q.push(num("medium", "The asymptote of $y=2^{x-5}+8$.", 8, 0));
  q.push(num("medium", "The $y$-intercept value of $y=3\\cdot2^{x}-1$.", 2, 0));
  q.push(fill("medium", "$y=-4\\cdot2^{x}+7$ has range $y<$ ___.", ["7"]));
  q.push(fill("medium", "$y=2^{x-3}+1$ has asymptote $y=$ ___.", ["1"]));
  q.push(mc("medium", "Which has $y$-intercept $(0,2)$?", ["$y=3\\cdot2^{x}-1$", "$y=2^{x}+2$", "$y=2\\cdot2^{x}$", "$y=2^{x}$"], 0));
  q.push(mc("medium", "The range of $y=-2\\cdot5^{x+1}+12$ is:", ["$y<12$", "$y>12$", "$y<-2$", "$y>0$"], 0));
  // HARD
  q.push(mc("hard", "$y=a\\cdot2^{x}+c$ has asymptote $y=3$ and $y$-intercept $(0,7)$. Then $a=$", ["$4$", "$7$", "$3$", "$10$"], 0));
  q.push(mc("hard", "$y=2^{x-d}$ passes through $(5,1)$. Then $d=$", ["$5$", "$-5$", "$1$", "$0$"], 0));
  q.push(mc("hard", "$y=-2^{x}+8$ crosses the $x$-axis at:", ["$x=3$", "$x=8$", "$x=2$", "never"], 0));
  q.push(mc("hard", "$y=3\\cdot2^{x-1}-6$ crosses the $x$-axis at:", ["$x=2$", "$x=1$", "$x=3$", "never"], 0));
  q.push(mc("hard", "For $y=a\\cdot b^{x}+c$ to have asymptote $y=-4$ and pass $(0,-1)$ with base $3$, then $a=$", ["$3$", "$-1$", "$4$", "$-4$"], 0));
  q.push(mc("hard", "$y=5\\cdot2^{x}$ and $y=5\\cdot2^{x}+3$ differ by:", ["a vertical shift of $3$", "a stretch of $3$", "a horizontal shift", "a reflection"], 0));
  q.push(mc("hard", "$y=2^{x}$ reflected in the $y$-axis is:", ["$y=2^{-x}$", "$y=-2^{x}$", "$y=\\left(\\tfrac12\\right)^{-x}$", "$y=2^{x}$"], 0));
  q.push(mc("hard", "The graph of $y=-3\\cdot2^{x-2}+5$ has maximum value approaching:", ["$5$ (from below)", "$-3$", "$\\infty$", "$2$"], 0));
  q.push(ms("hard", "Which transformations move the asymptote of $y=2^{x}$?", ["$+c$ vertical shift", "reflection in $x$-axis", "$\\times a$ stretch", "$-d$ horizontal shift"], [0]));
  q.push(ms("hard", "For $y=-2\\cdot3^{x-1}+6$, which are correct?", ["asymptote $y=6$", "range $y<6$", "reflected", "$y$-int $(0,\\tfrac{16}{3})$"], [0, 1, 2, 3]));
  q.push(tf("hard", "$y=2^{-x}$ is decreasing.", true));
  q.push(tf("hard", "Reflecting $y=2^{x}$ in the $y$-axis gives the same graph as reflecting in the $x$-axis.", false, "They give $2^{-x}$ and $-2^{x}$."));
  q.push(tf("hard", "$y=a\\cdot b^{x}+c$ always has range $y>c$ when $a>0$.", true));
  q.push(tf("hard", "If $a<0$, then $y=a\\cdot b^{x}+c$ has range $y<c$.", true));
  q.push(num("hard", "$y=2^{x}+c$ passes $(3,10)$. Find $c$.", 2, 0));
  q.push(num("hard", "$y=a\\cdot2^{x}$ passes $(3,40)$. Find $a$.", 5, 0));
  q.push(num("hard", "$y=-2^{x}+16$ crosses the $x$-axis at $x=$ ___.", 4, 0));
  q.push(num("hard", "$y=a\\cdot3^{x}+2$ has $y$-intercept $(0,5)$. Find $a$.", 3, 0));
  q.push(fill("hard", "$y=2^{x-d}$ passes $(4,1)$; then $d=$ ___.", ["4"]));
  q.push(fill("hard", "$y=3\\cdot2^{x}-24$ crosses the $x$-axis at $x=$ ___.", ["3"]));
  return q;
}

// ── 1.4 Solving Exponential Equations by Common Bases ─────────
function g14() {
  const q = [];
  // EASY
  q.push(mc("easy", "Solve $2^{x}=8$.", ["$x=3$", "$x=4$", "$x=2$", "$x=8$"], 0));
  q.push(mc("easy", "Solve $3^{x}=9$.", ["$x=2$", "$x=3$", "$x=1$", "$x=9$"], 0));
  q.push(mc("easy", "Solve $2^{x}=16$.", ["$x=4$", "$x=3$", "$x=8$", "$x=2$"], 0));
  q.push(mc("easy", "Solve $5^{x}=25$.", ["$x=2$", "$x=5$", "$x=3$", "$x=1$"], 0));
  q.push(mc("easy", "Solve $10^{x}=1000$.", ["$x=3$", "$x=2$", "$x=100$", "$x=4$"], 0));
  q.push(mc("easy", "Solve $2^{x}=1$.", ["$x=0$", "$x=1$", "$x=2$", "no sol."], 0));
  q.push(mc("easy", "Solve $4^{x}=64$.", ["$x=3$", "$x=2$", "$x=4$", "$x=16$"], 0));
  q.push(ms("easy", "Which equal $2^{5}$?", ["$32$", "$4\\cdot8$", "$2^2\\cdot2^3$", "$25$"], [0, 1, 2]));
  q.push(ms("easy", "Which are powers of $3$?", ["$9$", "$27$", "$81$", "$12$"], [0, 1, 2]));
  q.push(ms("easy", "Which solve $2^{x}=4$?", ["$x=2$", "$2^2=4$", "$x=1$", "$x=4$"], [0, 1]));
  q.push(tf("easy", "If $2^{x}=2^{5}$, then $x=5$.", true));
  q.push(tf("easy", "$8=2^{3}$.", true));
  q.push(tf("easy", "$27=3^{2}$.", false, "$27=3^3$."));
  q.push(tf("easy", "$\\tfrac14=2^{-2}$.", true));
  q.push(num("easy", "Solve $2^{x}=32$.", 5, 0));
  q.push(num("easy", "Solve $3^{x}=81$.", 4, 0));
  q.push(num("easy", "Solve $5^{x}=125$.", 3, 0));
  q.push(num("easy", "Solve $2^{x}=64$.", 6, 0));
  q.push(fill("easy", "Solve $10^{x}=100$: $x=$ ___.", ["2"]));
  q.push(fill("easy", "Solve $4^{x}=16$: $x=$ ___.", ["2"]));
  // MEDIUM
  q.push(mc("medium", "Solve $9^{x}=27$.", ["$x=\\frac32$", "$x=3$", "$x=\\frac23$", "$x=2$"], 0));
  q.push(mc("medium", "Solve $\\left(\\tfrac14\\right)^{x}=8$.", ["$x=-\\frac32$", "$x=\\frac32$", "$x=-2$", "$x=3$"], 0));
  q.push(mc("medium", "Solve $8^{x-1}=16$.", ["$x=\\frac73$", "$x=2$", "$x=\\frac43$", "$x=3$"], 0));
  q.push(mc("medium", "Solve $25^{x}=125$.", ["$x=\\frac32$", "$x=\\frac23$", "$x=2$", "$x=3$"], 0));
  q.push(mc("medium", "Solve $\\left(\\tfrac19\\right)^{x}=27$.", ["$x=-\\frac32$", "$x=\\frac32$", "$x=-3$", "$x=3$"], 0));
  q.push(mc("medium", "Solve $2^{3x}=32$.", ["$x=\\frac53$", "$x=5$", "$x=\\frac35$", "$x=2$"], 0));
  q.push(mc("medium", "Solve $16^{x}=8$.", ["$x=\\frac34$", "$x=\\frac43$", "$x=2$", "$x=\\frac12$"], 0));
  q.push(mc("medium", "Solve $\\left(\\tfrac12\\right)^{x}=16$.", ["$x=-4$", "$x=4$", "$x=-2$", "$x=\\frac14$"], 0));
  q.push(ms("medium", "Which rewrite $8$ as a power?", ["$2^3$", "$8^1$", "$4^{3/2}$", "$2^4$"], [0, 1, 2]));
  q.push(ms("medium", "Which solve $4^{x}=8$?", ["$x=\\frac32$", "$2^{2x}=2^3$", "$x=2$", "$x=\\frac23$"], [0, 1]));
  q.push(tf("medium", "$9^{x}=3^{2x}$.", true));
  q.push(tf("medium", "To solve $8^{x-1}=16$, write both as powers of $2$.", true));
  q.push(num("medium", "Solve $4^{x-1}=64$.", 4, 0));
  q.push(num("medium", "Solve $8^{x}=32$ (as a decimal).", 1.6667, 0.01));
  q.push(num("medium", "Solve $27^{x}=9$ (2 dp).", 0.6667, 0.01));
  q.push(num("medium", "Solve $2^{2x}=128$ (as a decimal).", 3.5, 0.01));
  q.push(fill("medium", "Solve $25^{x}=5$: $x=$ ___ (decimal).", ["0.5"]));
  q.push(fill("medium", "Solve $\\left(\\tfrac13\\right)^{x}=81$: $x=$ ___.", ["-4"]));
  q.push(mc("medium", "Solve $\\left(\\tfrac18\\right)^{x}=4$.", ["$x=-\\frac23$", "$x=\\frac23$", "$x=-2$", "$x=3$"], 0));
  q.push(mc("medium", "Solve $32^{x}=8$.", ["$x=\\frac35$", "$x=\\frac53$", "$x=2$", "$x=\\frac12$"], 0));
  // HARD
  q.push(mc("hard", "Solve $4^{x+1}=8^{x-1}$.", ["$x=5$", "$x=1$", "$x=-5$", "$x=3$"], 0));
  q.push(mc("hard", "Solve $27^{x-1}=9^{2x+1}$.", ["$x=-5$", "$x=5$", "$x=-1$", "$x=1$"], 0));
  q.push(mc("hard", "Solve $4^{x+1}=16^{x}$.", ["$x=1$", "$x=2$", "$x=\\frac12$", "$x=-1$"], 0));
  q.push(mc("hard", "Solve $8^{x+1}=4^{2x-1}$.", ["$x=5$", "$x=-5$", "$x=1$", "$x=3$"], 0));
  q.push(mc("hard", "Solve $2^{x}\\cdot4^{x}=64$.", ["$x=2$", "$x=3$", "$x=6$", "$x=4$"], 0));
  q.push(mc("hard", "Solve $9^{x}=3\\cdot27^{x-2}$.", ["$x=5$", "$x=-5$", "$x=2$", "$x=3$"], 0));
  q.push(mc("hard", "Solve $2^{2x}-5\\cdot2^{x}+4=0$ (smaller $x$).", ["$x=0$", "$x=2$", "$x=1$", "$x=4$"], 0));
  q.push(mc("hard", "Solve $\\left(\\sqrt2\\right)^{x}=8$.", ["$x=6$", "$x=3$", "$x=4$", "$x=\\frac32$"], 0));
  q.push(ms("hard", "Which are solutions of $2^{2x}-5\\cdot2^{x}+4=0$?", ["$x=0$", "$x=2$", "$x=1$", "$x=4$"], [0, 1]));
  q.push(ms("hard", "Which equal $4^{x+1}=16^{x}$ correctly reduced?", ["$2x+2=4x$", "$x=1$", "$2^{2x+2}=2^{4x}$", "$x=2$"], [0, 1, 2]));
  q.push(tf("hard", "$2^{x}\\cdot4^{x}=2^{3x}$.", true));
  q.push(tf("hard", "$8^{x+1}=4^{2x-1}$ reduces to $3x+3=4x-2$.", true));
  q.push(tf("hard", "$\\left(\\sqrt3\\right)^{x}=3^{x/2}$.", true));
  q.push(tf("hard", "$2^{2x}=4^{x}$ for all $x$.", true));
  q.push(num("hard", "Solve $4^{x+1}=8^{x-1}$: $x=$ ___.", 5, 0));
  q.push(num("hard", "Solve $2^{2x}-6\\cdot2^{x}+8=0$; give the larger $x$.", 2, 0));
  q.push(num("hard", "Solve $\\left(\\sqrt2\\right)^{x}=16$: $x=$ ___.", 8, 0));
  q.push(num("hard", "Solve $9^{x}=3\\cdot27^{x-2}$: $x=$ ___.", 5, 0));
  q.push(fill("hard", "Solve $27^{x-1}=9^{2x+1}$: $x=$ ___.", ["-5"]));
  q.push(fill("hard", "Solve $2^{x}\\cdot8=32$: $x=$ ___.", ["2"]));
  return q;
}

// ── 1.5 Introduction to Logarithms ────────────────────────────
function g15() {
  const q = [];
  // EASY
  q.push(mc("easy", "$\\log_2 8=$", ["$3$", "$2$", "$4$", "$8$"], 0));
  q.push(mc("easy", "$\\log_3 9=$", ["$2$", "$3$", "$1$", "$9$"], 0));
  q.push(mc("easy", "$\\log_5 25=$", ["$2$", "$5$", "$3$", "$1$"], 0));
  q.push(mc("easy", "$\\log 1000=$ (base 10)", ["$3$", "$2$", "$10$", "$100$"], 0));
  q.push(mc("easy", "$\\log_2 1=$", ["$0$", "$1$", "$2$", "undefined"], 0));
  q.push(mc("easy", "$\\log_b b=$", ["$1$", "$0$", "$b$", "undefined"], 0));
  q.push(mc("easy", "$2^{5}=32$ in log form is:", ["$\\log_2 32=5$", "$\\log_5 32=2$", "$\\log_{32}2=5$", "$\\log_2 5=32$"], 0));
  q.push(ms("easy", "Which equal $2$?", ["$\\log_3 9$", "$\\log_5 25$", "$\\log_2 4$", "$\\log_2 8$"], [0, 1, 2]));
  q.push(ms("easy", "Which are true?", ["$\\log_b 1=0$", "$\\log_b b=1$", "$\\log_2 8=3$", "$\\log_2 0=1$"], [0, 1, 2]));
  q.push(ms("easy", "Which convert $3^4=81$ correctly?", ["$\\log_3 81=4$", "$\\log_{81}3=4$", "$\\log_3 4=81$", "$3=81^{1/4}$"], [0, 3]));
  q.push(tf("easy", "$\\log_b x=y$ means $b^{y}=x$.", true));
  q.push(tf("easy", "$\\log_2 16=4$.", true));
  q.push(tf("easy", "$\\log 100=10$.", false, "$\\log100=2$."));
  q.push(tf("easy", "$\\log_b 1=0$ for any valid base.", true));
  q.push(num("easy", "Evaluate $\\log_2 16$.", 4, 0));
  q.push(num("easy", "Evaluate $\\log_3 27$.", 3, 0));
  q.push(num("easy", "Evaluate $\\log 10000$ (base 10).", 4, 0));
  q.push(num("easy", "Evaluate $\\log_5 125$.", 3, 0));
  q.push(fill("easy", "$\\log_2 32=$ ___.", ["5"]));
  q.push(fill("easy", "Rewrite $10^4=10000$: $\\log 10000=$ ___.", ["4"]));
  // MEDIUM
  q.push(mc("medium", "$\\log_2\\tfrac18=$", ["$-3$", "$3$", "$-\\frac13$", "$\\frac18$"], 0));
  q.push(mc("medium", "$\\log_9 3=$", ["$\\frac12$", "$2$", "$3$", "$\\frac13$"], 0));
  q.push(mc("medium", "$\\log_4 8=$", ["$\\frac32$", "$2$", "$\\frac23$", "$3$"], 0));
  q.push(mc("medium", "Solve $\\log_2 x=5$.", ["$x=32$", "$x=10$", "$x=25$", "$x=7$"], 0));
  q.push(mc("medium", "Solve $\\log_x 64=3$.", ["$x=4$", "$x=8$", "$x=64$", "$x=2$"], 0));
  q.push(mc("medium", "$\\log_5\\tfrac{1}{25}=$", ["$-2$", "$2$", "$-\\frac12$", "$5$"], 0));
  q.push(mc("medium", "$\\log_3\\tfrac{1}{27}=$", ["$-3$", "$3$", "$-\\frac13$", "$27$"], 0));
  q.push(mc("medium", "Solve $\\log_x 81=4$.", ["$x=3$", "$x=9$", "$x=4$", "$x=81$"], 0));
  q.push(ms("medium", "Which equal $\\tfrac12$?", ["$\\log_9 3$", "$\\log_4 2$", "$\\log_{16}4$", "$\\log_2 4$"], [0, 1, 2]));
  q.push(ms("medium", "Which equal a negative number?", ["$\\log_2\\tfrac18$", "$\\log_3\\tfrac19$", "$\\log_2 8$", "$\\log 0.1$"], [0, 1, 3]));
  q.push(tf("medium", "$\\log_8 2=\\tfrac13$.", true));
  q.push(tf("medium", "$\\log_x 1000=3$ gives $x=10$.", true));
  q.push(num("medium", "Evaluate $\\log_4 2$ (decimal).", 0.5, 0.01));
  q.push(num("medium", "Solve $\\log_2 x=6$.", 64, 0));
  q.push(num("medium", "Evaluate $\\log_6 36$.", 2, 0));
  q.push(num("medium", "Solve $\\log_x 1000=3$.", 10, 0));
  q.push(fill("medium", "$\\log_{16}4=$ ___ (decimal).", ["0.5"]));
  q.push(fill("medium", "Solve $\\log_x 81=4$: $x=$ ___.", ["3"]));
  q.push(mc("medium", "$\\log_8 32=$", ["$\\frac53$", "$\\frac35$", "$2$", "$4$"], 0));
  q.push(mc("medium", "$\\log_{27}9=$", ["$\\frac23$", "$\\frac32$", "$3$", "$\\frac13$"], 0));
  // HARD
  q.push(mc("hard", "$\\log_2 3+\\log_2 \\tfrac{16}{3}=$", ["$4$", "$3$", "$\\log_2 19$", "$16$"], 0));
  q.push(mc("hard", "If $\\log_b 8=3$, then $b=$", ["$2$", "$3$", "$8$", "$\\frac83$"], 0));
  q.push(mc("hard", "Solve $\\log_2(x-1)=3$.", ["$x=9$", "$x=8$", "$x=7$", "$x=4$"], 0));
  q.push(mc("hard", "$\\log_3 81-\\log_3 3=$", ["$3$", "$4$", "$1$", "$27$"], 0));
  q.push(mc("hard", "Solve $\\log_5(2x)=2$.", ["$x=\\frac{25}{2}$", "$x=25$", "$x=5$", "$x=10$"], 0));
  q.push(mc("hard", "If $\\log_2 x=a$, then $\\log_2 (4x)=$", ["$a+2$", "$4a$", "$2a$", "$a+4$"], 0));
  q.push(mc("hard", "$\\log_{1/2}8=$", ["$-3$", "$3$", "$-\\frac13$", "$\\frac13$"], 0));
  q.push(mc("hard", "Solve $\\log_x 16=\\tfrac43$.", ["$x=8$", "$x=4$", "$x=2$", "$x=16$"], 0));
  q.push(ms("hard", "Which equal $3$?", ["$\\log_2 8$", "$\\log_5 125$", "$\\log_{10}1000$", "$\\log_3 9$"], [0, 1, 2]));
  q.push(ms("hard", "Which statements hold?", ["$\\log_b b^{k}=k$", "$b^{\\log_b x}=x$", "$\\log_b(x+y)=\\log_b x+\\log_b y$", "$\\log_b 1=0$"], [0, 1, 3]));
  q.push(tf("hard", "$\\log_2 x$ is undefined for $x\\le0$.", true));
  q.push(tf("hard", "$\\log_{1/3}9=-2$.", true));
  q.push(tf("hard", "$\\log_b(xy)=\\log_b x\\cdot\\log_b y$.", false, "It equals the sum of the logs."));
  q.push(tf("hard", "If $\\log_b 27=3$ then $b=3$.", true));
  q.push(num("hard", "If $\\log_b 8=3$, find $b$.", 2, 0));
  q.push(num("hard", "Solve $\\log_2(x-1)=4$.", 17, 0));
  q.push(num("hard", "Solve $\\log_x 16=\\tfrac43$: $x=$ ___.", 8, 0));
  q.push(num("hard", "Evaluate $\\log_9 27$ (decimal).", 1.5, 0.01));
  q.push(fill("hard", "$\\log_{1/2}16=$ ___.", ["-4"]));
  q.push(fill("hard", "If $\\log_2 x=a$, then $\\log_2(8x)=a+$ ___.", ["3"]));
  return q;
}

// ── 1.6 Laws of Logarithms ────────────────────────────────────
function g16() {
  const q = [];
  // EASY
  q.push(mc("easy", "$\\log(ab)=$", ["$\\log a+\\log b$", "$\\log a\\cdot\\log b$", "$\\log a-\\log b$", "$\\frac{\\log a}{\\log b}$"], 0));
  q.push(mc("easy", "$\\log\\tfrac{a}{b}=$", ["$\\log a-\\log b$", "$\\log a+\\log b$", "$\\frac{\\log a}{\\log b}$", "$\\log(a-b)$"], 0));
  q.push(mc("easy", "$\\log a^{3}=$", ["$3\\log a$", "$\\log 3a$", "$(\\log a)^3$", "$\\frac{\\log a}{3}$"], 0));
  q.push(mc("easy", "$\\log_6 9+\\log_6 4=$", ["$2$", "$\\log_6 13$", "$36$", "$3$"], 0));
  q.push(mc("easy", "$\\log_2 8^{2}=$", ["$6$", "$3$", "$16$", "$9$"], 0));
  q.push(mc("easy", "$\\log_b x=\\dfrac{\\log x}{\\log b}$ is the:", ["change-of-base rule", "product rule", "power rule", "quotient rule"], 0));
  q.push(mc("easy", "$\\log\\sqrt{x}=$", ["$\\frac12\\log x$", "$2\\log x$", "$\\log x^2$", "$\\frac{\\log x}{2}$ only if..."], 0));
  q.push(ms("easy", "Which expand $\\log(xy)$?", ["$\\log x+\\log y$", "correct product rule", "$\\log x\\cdot\\log y$", "$\\log x-\\log y$"], [0, 1]));
  q.push(ms("easy", "Which are true log laws?", ["$\\log(MN)=\\log M+\\log N$", "$\\log M^p=p\\log M$", "$\\log\\frac MN=\\log M-\\log N$", "$\\log(M+N)=\\log M+\\log N$"], [0, 1, 2]));
  q.push(ms("easy", "Which equal $\\log_2 16$?", ["$4$", "$\\log_2 8+\\log_2 2$", "$2\\log_2 4$", "$\\log_2 8\\cdot\\log_2 2$"], [0, 1, 2]));
  q.push(tf("easy", "$\\log(MN)=\\log M+\\log N$.", true));
  q.push(tf("easy", "$\\log M^p=p\\log M$.", true));
  q.push(tf("easy", "$\\log(M+N)=\\log M+\\log N$.", false, "There is no sum-inside rule."));
  q.push(tf("easy", "$\\log_5 100-\\log_5 4=\\log_5 25=2$.", true));
  q.push(num("easy", "Evaluate $\\log_6 9+\\log_6 4$.", 2, 0));
  q.push(num("easy", "Evaluate $\\log_5 100-\\log_5 4$.", 2, 0));
  q.push(num("easy", "Evaluate $\\log_2 8^{4}$.", 12, 0));
  q.push(num("easy", "Evaluate $\\log_4 8+\\log_4 2$.", 2, 0));
  q.push(fill("easy", "$\\log a+\\log b=\\log(\\text{___})$ (a product).", ["ab"]));
  q.push(fill("easy", "$\\log_2 40-\\log_2 5=$ ___.", ["3"]));
  // MEDIUM
  q.push(mc("medium", "Expand $\\log\\!\\left(\\tfrac{x^2y}{z}\\right)$.", ["$2\\log x+\\log y-\\log z$", "$2\\log x-\\log y+\\log z$", "$\\log x^2+\\log(yz)$", "$2(\\log x+\\log y-\\log z)$"], 0));
  q.push(mc("medium", "Condense $2\\log a+\\log b-3\\log c$.", ["$\\log\\frac{a^2b}{c^3}$", "$\\log\\frac{a^2c^3}{b}$", "$\\log(a^2bc^3)$", "$\\log\\frac{ab}{c}$"], 0));
  q.push(mc("medium", "Condense $3\\log x-\\log y$.", ["$\\log\\frac{x^3}{y}$", "$\\log\\frac{y}{x^3}$", "$\\log(3x-y)$", "$3\\log\\frac xy$"], 0));
  q.push(mc("medium", "$\\log_3 6+\\log_3\\tfrac32=$", ["$2$", "$\\log_3 7.5$", "$3$", "$1$"], 0));
  q.push(mc("medium", "$\\log_2 40-\\log_2 5=$", ["$3$", "$8$", "$\\log_2 35$", "$5$"], 0));
  q.push(mc("medium", "Expand $\\log(x^2\\sqrt{y})$.", ["$2\\log x+\\tfrac12\\log y$", "$2\\log x+2\\log y$", "$\\log x^2+\\log y^2$", "$2\\log(xy)$"], 0));
  q.push(mc("medium", "$\\log_4 8+\\log_4 2=$", ["$2$", "$\\log_4 10$", "$3$", "$16$"], 0));
  q.push(mc("medium", "$\\log_2 3+\\log_2\\tfrac{16}{3}=$", ["$4$", "$3$", "$16$", "$\\log_2 19$"], 0));
  q.push(ms("medium", "Which equal $2$?", ["$\\log_6 9+\\log_6 4$", "$\\log_5 100-\\log_5 4$", "$\\log_3 6+\\log_3 1.5$", "$\\log_2 8$"], [0, 1, 2]));
  q.push(ms("medium", "Which correctly expand $\\log\\frac{x^3}{y^2}$?", ["$3\\log x-2\\log y$", "$\\log x^3-\\log y^2$", "$3\\log x+2\\log y$", "$\\log(x^3)-\\log(y^2)$"], [0, 1, 3]));
  q.push(tf("medium", "$\\log_2 40-\\log_2 5=3$.", true));
  q.push(tf("medium", "$2\\log a+\\log b=\\log(a^2 b)$.", true));
  q.push(num("medium", "Evaluate $\\log_2 3+\\log_2\\tfrac{16}{3}$.", 4, 0));
  q.push(num("medium", "Evaluate $\\log 2+\\log 5$ (base 10).", 1, 0.001));
  q.push(num("medium", "Evaluate $\\log_3 54-\\log_3 2$.", 3, 0));
  q.push(num("medium", "Evaluate $\\log_2 5+\\log_2 6-\\log_2 15$.", 1, 0.001));
  q.push(fill("medium", "Condense $\\log x+\\log y-\\log z=\\log\\frac{xy}{\\text{___}}$.", ["z"]));
  q.push(fill("medium", "$\\log_7 49=$ ___.", ["2"]));
  q.push(mc("medium", "Evaluate $\\log_2 10$ (3 dp).", ["$3.322$", "$3.010$", "$1.000$", "$5.000$"], 0));
  q.push(mc("medium", "Evaluate $\\log_3 20$ (3 dp).", ["$2.727$", "$1.301$", "$3.000$", "$2.996$"], 0));
  // HARD
  q.push(mc("hard", "Write $\\tfrac12\\log x+2\\log y-\\log z$ as one log.", ["$\\log\\frac{y^2\\sqrt x}{z}$", "$\\log\\frac{\\sqrt x}{y^2 z}$", "$\\log\\frac{xy^2}{z}$", "$\\log\\frac{y^2 z}{\\sqrt x}$"], 0));
  q.push(mc("hard", "If $\\log 2=a$ and $\\log 3=b$, then $\\log 12=$", ["$2a+b$", "$a+2b$", "$ab$", "$a+b$"], 0));
  q.push(mc("hard", "If $\\log 2=a$, then $\\log 5=$ (base 10)", ["$1-a$", "$a$", "$5a$", "$1+a$"], 0));
  q.push(mc("hard", "Solve $\\log x+\\log(x-3)=1$ (base 10).", ["$x=5$", "$x=2$", "$x=-2$", "$x=10$"], 0));
  q.push(mc("hard", "If $\\log 2=a,\\log 3=b$, then $\\log\\tfrac{8}{9}=$", ["$3a-2b$", "$3a+2b$", "$8a-9b$", "$a-b$"], 0));
  q.push(mc("hard", "Solve $\\log_2 x+\\log_2(x-2)=3$.", ["$x=4$", "$x=2$", "$x=8$", "$x=6$"], 0));
  q.push(mc("hard", "$\\log_2 3\\cdot\\log_3 8=$", ["$3$", "$\\log_2 24$", "$8$", "$6$"], 0));
  q.push(mc("hard", "If $\\log_b 2=0.4$, then $\\log_b 8=$", ["$1.2$", "$0.8$", "$3$", "$1.6$"], 0));
  q.push(ms("hard", "Which equal $\\log 12$ given $\\log2=a,\\log3=b$?", ["$2a+b$", "$\\log4+\\log3$", "$a+b+a$", "$\\log2+\\log6$"], [0, 1, 2, 3]));
  q.push(ms("hard", "Which are valid change-of-base forms of $\\log_2 5$?", ["$\\frac{\\log5}{\\log2}$", "$\\frac{\\ln5}{\\ln2}$", "$\\frac{\\log2}{\\log5}$", "$\\log5\\div\\log2$"], [0, 1, 3]));
  q.push(tf("hard", "$\\log_2 3\\cdot\\log_3 2=1$.", true));
  q.push(tf("hard", "$\\log(x^2)=2\\log x$ for all real $x\\ne0$.", false, "For $x<0$ it is $2\\log|x|$."));
  q.push(tf("hard", "$\\log_5 100-\\log_5 4=\\log_5 96$.", false, "It is $\\log_5 25=2$."));
  q.push(tf("hard", "If $\\log 2=a$, then $\\log 50=2-a$.", true));
  q.push(num("hard", "Solve $\\log x+\\log(x-3)=1$ (base 10). Give $x$.", 5, 0));
  q.push(num("hard", "Solve $\\log_2 x+\\log_2(x-2)=3$. Give $x$.", 4, 0));
  q.push(num("hard", "Evaluate $\\log_5 100$ (3 dp).", 2.861, 0.005));
  q.push(num("hard", "Evaluate $\\log_3 50$ (3 dp).", 3.561, 0.005));
  q.push(fill("hard", "$\\log_4 64+\\log_4 16=$ ___.", ["5"]));
  q.push(fill("hard", "If $\\log2=a$, then $\\log5=1-$ ___.", ["a"]));
  return q;
}

// ── 1.7 Solving Exponential Equations Using Logarithms ────────
function g17() {
  const q = [];
  // EASY
  q.push(mc("easy", "To solve $2^{x}=10$, take:", ["$\\log$ of both sides", "square root", "reciprocal", "derivative"], 0));
  q.push(mc("easy", "$2^{x}=10\\Rightarrow x=$", ["$\\frac{\\log10}{\\log2}$", "$\\log(10-2)$", "$\\frac{\\log2}{\\log10}$", "$10-2$"], 0));
  q.push(mc("easy", "$\\log b^{x}=$", ["$x\\log b$", "$b\\log x$", "$(\\log b)^x$", "$\\log x+\\log b$"], 0));
  q.push(mc("easy", "Solve $10^{x}=100$.", ["$x=2$", "$x=10$", "$x=100$", "$x=1$"], 0));
  q.push(mc("easy", "Solve $e^{x}=1$.", ["$x=0$", "$x=1$", "$x=e$", "$x=-1$"], 0));
  q.push(mc("easy", "$\\ln e^{5}=$", ["$5$", "$e^5$", "$1$", "$\\ln5$"], 0));
  q.push(mc("easy", "Solve $3^{x}=27$.", ["$x=3$", "$x=9$", "$x=2$", "$\\log27$"], 0));
  q.push(ms("easy", "Which are correct first steps for $5^{x}=20$?", ["take $\\log$ both sides", "$x\\log5=\\log20$", "divide by 5", "add $\\log$"], [0, 1]));
  q.push(ms("easy", "Which equal $x$ for $2^{x}=7$?", ["$\\frac{\\log7}{\\log2}$", "$\\log_2 7$", "$\\frac{\\ln7}{\\ln2}$", "$\\log7-\\log2$"], [0, 1, 2]));
  q.push(ms("easy", "Which are exact solutions? $10^{x}=1000$", ["$x=3$", "$\\log1000$", "$x=\\log_{10}1000$", "$x=100$"], [0, 1, 2]));
  q.push(tf("easy", "$\\log b^{x}=x\\log b$.", true));
  q.push(tf("easy", "$\\ln e=1$.", true));
  q.push(tf("easy", "You can solve $3^{x}=10$ by common bases.", false, "$10$ is not a power of $3$; use logs."));
  q.push(tf("easy", "$2^{x}=16$ gives $x=4$.", true));
  q.push(num("easy", "Solve $10^{x}=1000$.", 3, 0));
  q.push(num("easy", "Solve $2^{x}=8$.", 3, 0));
  q.push(num("easy", "Evaluate $\\ln e^{4}$.", 4, 0));
  q.push(num("easy", "Solve $5^{x}=25$.", 2, 0));
  q.push(fill("easy", "$\\log b^{x}=x\\log$ ___.", ["b"]));
  q.push(fill("easy", "Solve $10^{x}=10000$: $x=$ ___.", ["4"]));
  // MEDIUM
  q.push(mc("medium", "Solve $3^{x}=20$ (3 dp).", ["$2.727$", "$3.000$", "$1.301$", "$6.667$"], 0));
  q.push(mc("medium", "Solve $2^{x}=13$ (3 dp).", ["$3.700$", "$1.114$", "$6.500$", "$3.807$"], 0));
  q.push(mc("medium", "Solve $5^{x}=100$ (3 dp).", ["$2.861$", "$1.699$", "$20$", "$2.000$"], 0));
  q.push(mc("medium", "Solve $e^{x}=20$ (3 dp).", ["$2.996$", "$1.301$", "$3.000$", "$20$"], 0));
  q.push(mc("medium", "Solve $2\\cdot3^{x}=54$.", ["$x=3$", "$x=27$", "$x=2$", "$x=4$"], 0));
  q.push(mc("medium", "Solve $3\\cdot2^{x}=96$.", ["$x=5$", "$x=32$", "$x=4$", "$x=6$"], 0));
  q.push(mc("medium", "Solve $2^{x+1}=7$ (3 dp).", ["$1.807$", "$2.807$", "$0.807$", "$3.500$"], 0));
  q.push(mc("medium", "Solve $4^{x}=30$ (3 dp).", ["$2.453$", "$1.500$", "$7.500$", "$3.907$"], 0));
  q.push(ms("medium", "Which solve $2\\cdot3^{x}=54$?", ["$3^{x}=27$", "$x=3$", "$x=9$", "$3^x=54$"], [0, 1]));
  q.push(ms("medium", "Which are exact for $4^{x}=30$?", ["$\\frac{\\log30}{\\log4}$", "$\\log_4 30$", "$\\frac{\\ln30}{\\ln4}$", "$30/4$"], [0, 1, 2]));
  q.push(tf("medium", "$4\\cdot3^{x}=100$ requires isolating $3^{x}=25$ first.", true));
  q.push(tf("medium", "$3^{x}=20$ has $x\\approx2.727$.", true));
  q.push(num("medium", "Solve $2^{x}=13$ (3 dp).", 3.700, 0.01));
  q.push(num("medium", "Solve $3^{x}=45$ (3 dp).", 3.465, 0.01));
  q.push(num("medium", "Solve $5^{x}=100$ (3 dp).", 2.861, 0.01));
  q.push(num("medium", "Solve $2\\cdot3^{x}=54$.", 3, 0));
  q.push(fill("medium", "Solve $3\\cdot2^{x}=96$: $x=$ ___.", ["5"]));
  q.push(fill("medium", "Solve $e^{x}=e^{7}$: $x=$ ___.", ["7"]));
  q.push(mc("medium", "Solve $4\\cdot3^{x}=100$ (3 dp).", ["$2.930$", "$3.000$", "$25$", "$1.398$"], 0));
  q.push(mc("medium", "Solve $10^{x}=250$ (3 dp).", ["$2.398$", "$2.500$", "$25$", "$1.398$"], 0));
  // HARD
  q.push(mc("hard", "Solve $e^{2x}=15$ (3 dp).", ["$1.354$", "$2.708$", "$0.677$", "$2.996$"], 0));
  q.push(mc("hard", "Solve $2^{x-1}=15$ (3 dp).", ["$4.907$", "$3.907$", "$2.907$", "$3.500$"], 0));
  q.push(mc("hard", "Solve $e^{3x}=10$ (3 dp).", ["$0.768$", "$2.303$", "$1.000$", "$3.333$"], 0));
  q.push(mc("hard", "Solve $3^{2x}=50$ (3 dp).", ["$1.781$", "$3.561$", "$0.890$", "$2.500$"], 0));
  q.push(mc("hard", "Solve $2^{x}=3^{x-1}$ (3 dp).", ["$2.710$", "$1.710$", "$0.369$", "$3.000$"], 0));
  q.push(mc("hard", "Solve $5^{x+2}=8^{x}$ (3 dp).", ["$6.848$", "$3.424$", "$1.360$", "$2.000$"], 0));
  q.push(mc("hard", "Solve $4^{x}=2^{x+3}$.", ["$x=3$", "$x=1$", "$x=8$", "$x=6$"], 0));
  q.push(mc("hard", "Solve $2^{2x}-3\\cdot2^{x}-4=0$.", ["$x=2$", "$x=1$", "$x=4$", "$x=0$"], 0));
  q.push(ms("hard", "Which solve $4^{x}=2^{x+3}$ correctly?", ["$2x=x+3$", "$x=3$", "$2^{2x}=2^{x+3}$", "$x=8$"], [0, 1, 2]));
  q.push(ms("hard", "For $2^{2x}-3\\cdot2^{x}-4=0$, let $u=2^{x}$. Which hold?", ["$u^2-3u-4=0$", "$u=4$", "$u=-1$ rejected", "$x=2$"], [0, 1, 2, 3]));
  q.push(tf("hard", "$e^{2x}=15\\Rightarrow x=\\tfrac12\\ln15$.", true));
  q.push(tf("hard", "$2^{2x}-3\\cdot2^{x}-4=0$ has $2^{x}=-1$ as a valid solution.", false, "$2^x>0$, so reject it."));
  q.push(tf("hard", "$2^{x}=3^{x-1}$ can be solved by taking logs of both sides.", true));
  q.push(tf("hard", "$5^{x+2}=8^{x}$ has $x=\\dfrac{2\\log5}{\\log8-\\log5}$.", true));
  q.push(num("hard", "Solve $e^{2x}=15$ (3 dp).", 1.354, 0.01));
  q.push(num("hard", "Solve $2^{x-1}=15$ (3 dp).", 4.907, 0.01));
  q.push(num("hard", "Solve $4^{x}=2^{x+3}$: $x=$ ___.", 3, 0));
  q.push(num("hard", "Solve $2^{2x}-3\\cdot2^{x}-4=0$: $x=$ ___.", 2, 0));
  q.push(fill("hard", "Solve $e^{3x}=e^{12}$: $x=$ ___.", ["4"]));
  q.push(fill("hard", "For $2^{2x}-5\\cdot2^{x}+4=0$, the two solutions are $x=0$ and $x=$ ___.", ["2"]));
  return q;
}

// ── 1.8 Growth, Decay & Compound Interest ─────────────────────
function g18() {
  const q = [];
  // EASY
  q.push(mc("easy", "A $5\\%$ annual growth factor is:", ["$1.05$", "$0.95$", "$5$", "$0.05$"], 0));
  q.push(mc("easy", "A $10\\%$ annual decay factor is:", ["$0.90$", "$1.10$", "$0.10$", "$10$"], 0));
  q.push(mc("easy", "Compound interest formula:", ["$A=P(1+i)^{n}$", "$A=P+in$", "$A=Pin$", "$A=P(1-i)^{n}$"], 0));
  q.push(mc("easy", "A half-life model uses base:", ["$\\tfrac12$", "$2$", "$0.9$", "$e$"], 0));
  q.push(mc("easy", "\\$1000 at $5\\%$/yr for 1 year gives:", ["\\$1050", "\\$1005", "\\$1500", "\\$1050.25"], 0));
  q.push(mc("easy", "Doubling model uses base:", ["$2$", "$\\tfrac12$", "$e$", "$1$"], 0));
  q.push(mc("easy", "In $A=A_0 b^{t}$, growth means:", ["$b>1$", "$b<1$", "$b=1$", "$b<0$"], 0));
  q.push(ms("easy", "Which are growth factors?", ["$1.03$", "$1.5$", "$0.8$", "$1.2$"], [0, 1, 3]));
  q.push(ms("easy", "Which are decay factors?", ["$0.9$", "$0.75$", "$1.1$", "$0.5$"], [0, 1, 3]));
  q.push(ms("easy", "Which model growth/decay?", ["$A=500(1.04)^t$", "$A=80(0.5)^{t/6}$", "$A=P(1+i)^n$", "$y=3x+2$"], [0, 1, 2]));
  q.push(tf("easy", "A $6\\%$ growth rate gives factor $1.06$.", true));
  q.push(tf("easy", "Half-life uses factor $\\tfrac12$.", true));
  q.push(tf("easy", "A $20\\%$ decay gives factor $1.20$.", false, "It gives $0.80$."));
  q.push(tf("easy", "Compound interest is $A=P(1+i)^n$.", true));
  q.push(num("easy", "\\$1000 at $5\\%$/yr for 1 year (dollars).", 1050, 0.5));
  q.push(num("easy", "The growth factor for $8\\%$ is ___ (decimal).", 1.08, 0.001));
  q.push(num("easy", "The decay factor for $15\\%$ is ___ (decimal).", 0.85, 0.001));
  q.push(num("easy", "\\$500 at $4\\%$/yr for 1 year (dollars).", 520, 0.5));
  q.push(fill("easy", "A $12\\%$ growth factor is ___ (decimal).", ["1.12"]));
  q.push(fill("easy", "A half-life model has base ___ (fraction, like 1/2).", ["1/2", "0.5"]));
  // MEDIUM
  q.push(mc("medium", "\\$2000 at $4\\%$/yr compounded annually, 5 yr:", ["\\$2433.31", "\\$2400", "\\$2200", "\\$2500"], 0));
  q.push(mc("medium", "$80$ mg, half-life 6 h; amount after 18 h:", ["$10$ mg", "$20$ mg", "$40$ mg", "$5$ mg"], 0));
  q.push(mc("medium", "$P=500(1.03)^{t}$ after 10 yr $\\approx$", ["$672$", "$650$", "$700$", "$515$"], 0));
  q.push(mc("medium", "A \\$30000 car depreciates $12\\%$/yr; value after 1 yr:", ["\\$26400", "\\$27000", "\\$33600", "\\$26000"], 0));
  q.push(mc("medium", "$60$ mg, half-life 4 h; after 12 h:", ["$7.5$ mg", "$15$ mg", "$30$ mg", "$5$ mg"], 0));
  q.push(mc("medium", "\\$1500 at $5\\%$/yr, 4 yr $\\approx$", ["\\$1823.26", "\\$1800", "\\$1750", "\\$1900"], 0));
  q.push(mc("medium", "A colony $50(1.1)^{t}$ after 5 h $\\approx$", ["$80.5$", "$75$", "$100$", "$55$"], 0));
  q.push(mc("medium", "$100$ mg, half-life 3 h; after 9 h:", ["$12.5$ mg", "$25$ mg", "$50$ mg", "$10$ mg"], 0));
  q.push(ms("medium", "Which give \\$1000$(1.05)^3$?", ["\\$1157.63", "$1000\\times1.157625$", "\\$1150", "\\$1050"], [0, 1]));
  q.push(ms("medium", "Which are correct half-life expressions for $80$ mg, $h=6$?", ["$80(0.5)^{t/6}$", "$80\\left(\\tfrac12\\right)^{t/6}$", "$80(0.5)^{6t}$", "$80(2)^{t/6}$"], [0, 1]));
  q.push(tf("medium", "\\$1000 at $5\\%$/yr for 3 yr is about \\$1157.63.", true));
  q.push(tf("medium", "A quantity with half-life 5 h loses half every 5 h.", true));
  q.push(num("medium", "\\$1000 at $5\\%$/yr, 3 yr (dollars, 2 dp).", 1157.63, 0.5));
  q.push(num("medium", "$40$ mg, half-life 5 h; amount after 15 h (mg).", 5, 0.01));
  q.push(num("medium", "$P=600(1.03)^{10}$ (nearest whole).", 806, 2));
  q.push(num("medium", "\\$5000 at $6\\%$/yr, 2 yr (dollars).", 5618, 1));
  q.push(fill("medium", "$200$ mg, half-life 8 h; after 24 h is ___ mg.", ["25"]));
  q.push(fill("medium", "A \\$20000 car at $10\\%$/yr depreciation: after 3 yr, factor is $0.9^3=$ ___ (3 dp).", ["0.729"]));
  q.push(mc("medium", "\\$3000 at $7\\%$/yr, 5 yr $\\approx$", ["\\$4207.66", "\\$4050", "\\$3900", "\\$4500"], 0));
  q.push(mc("medium", "$A=A_0(0.95)^t$ reaches $50\\%$ at $t\\approx$", ["$13.5$ yr", "$20$ yr", "$7$ yr", "$2$ yr"], 0));
  // HARD
  q.push(mc("hard", "At $6\\%$/yr, doubling time $\\approx$", ["$11.9$ yr", "$9.0$ yr", "$16.7$ yr", "$6$ yr"], 0));
  q.push(mc("hard", "$A=A_0(0.9)^t$; when is $50\\%$ left?", ["$6.6$ yr", "$5$ yr", "$10$ yr", "$3.3$ yr"], 0));
  q.push(mc("hard", "When does \\$500$(1.04)^t=800$?", ["$\\approx12.0$ yr", "$\\approx6$ yr", "$\\approx20$ yr", "$\\approx8$ yr"], 0));
  q.push(mc("hard", "A \\$20000 car at $12\\%$/yr; when worth \\$10000?", ["$\\approx5.4$ yr", "$\\approx4$ yr", "$\\approx8$ yr", "$\\approx10$ yr"], 0));
  q.push(mc("hard", "A substance decays $15\\%$/yr; when is $25\\%$ left?", ["$\\approx8.5$ yr", "$\\approx4$ yr", "$\\approx12$ yr", "$\\approx2$ yr"], 0));
  q.push(mc("hard", "At $8\\%$/yr, time to double $\\approx$", ["$9.0$ yr", "$12.5$ yr", "$6$ yr", "$16$ yr"], 0));
  q.push(mc("hard", "When does $2000(1.06)^t=5000$?", ["$\\approx15.7$ yr", "$\\approx10$ yr", "$\\approx25$ yr", "$\\approx5$ yr"], 0));
  q.push(mc("hard", "Money at $4\\%$/yr; time to reach $1.5\\times$?", ["$\\approx10.3$ yr", "$\\approx5$ yr", "$\\approx15$ yr", "$\\approx3$ yr"], 0));
  q.push(ms("hard", "Which correctly find doubling time at $6\\%$?", ["$\\frac{\\log2}{\\log1.06}$", "$1.06^t=2$", "$t\\approx11.9$", "$t=2/0.06$"], [0, 1, 2]));
  q.push(ms("hard", "Which are true for half-life problems?", ["base $\\tfrac12$", "$\\left(\\tfrac12\\right)^{t/h}$", "$t=h\\log_{1/2}(A/A_0)$", "base $2$"], [0, 1, 2]));
  q.push(tf("hard", "Doubling time at $6\\%$ is about 11.9 years.", true));
  q.push(tf("hard", "A $15\\%/$yr decay reaches $25\\%$ in about 8.5 years.", true));
  q.push(tf("hard", "Compound interest grows faster than simple interest for $n>1$.", true));
  q.push(tf("hard", "Half-life is independent of the starting amount.", true));
  q.push(num("hard", "Doubling time at $6\\%$/yr (yr, 1 dp).", 11.9, 0.2));
  q.push(num("hard", "When is $50\\%$ left for $A_0(0.9)^t$? (yr, 1 dp).", 6.6, 0.2));
  q.push(num("hard", "When does $200(1.08)^t=1000$? (yr, 1 dp).", 20.9, 0.3));
  q.push(num("hard", "When is $25\\%$ left for $(0.85)^t$? (yr, 1 dp).", 8.5, 0.2));
  q.push(fill("hard", "\\$1000 doubles at $9\\%$/yr in about ___ years (whole).", ["8"]));
  q.push(fill("hard", "$1.05^t=2$ gives $t\\approx$ ___ years (1 dp).", ["14.2"]));
  return q;
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
];
