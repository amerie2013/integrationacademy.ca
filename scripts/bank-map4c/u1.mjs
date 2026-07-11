// MAP4C Unit 1 — Mathematical Models: question bank.
// 60 per topic: 20 easy / 20 medium / 20 hard. Kinds: mc, ms, tf, num, fill.
// Log-free (MAP4C solves exponentials by common bases or graphically/table).
import { mc, ms, tf, num, fill } from "./helpers.mjs";

// ── 1.1 Exponent Laws & Rational Exponents ───────────────────
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
  q.push(ms("easy", "Which are true?", ["$a^0=1$ for $a\\ne0$", "$a^{-n}=1/a^n$", "$a^m a^n=a^{mn}$", "$(a^m)^n=a^{mn}$"], [0, 1, 3]));
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
  q.push(mc("hard", "Simplify $\\dfrac{(2a^2b^{-1})^3}{4a^{-1}b^2}$ with positive exponents.", ["$\\frac{2a^7}{b^5}$", "$\\frac{2a^5}{b^5}$", "$2a^7b^5$", "$\\frac{a^7}{2b^5}$"], 0));
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

// ── 1.2 Solving Exponential Equations by Common Bases ────────
function g12() {
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
  q.push(mc("hard", "Solve $\\left(\\sqrt2\\right)^{x}=8$.", ["$x=6$", "$x=3$", "$x=4$", "$x=\\frac32$"], 0));
  q.push(mc("hard", "Solve $25^{x}=5^{x+3}$.", ["$x=3$", "$x=1$", "$x=-3$", "$x=6$"], 0));
  q.push(ms("hard", "Which equal $4^{x+1}=16^{x}$ correctly reduced?", ["$2x+2=4x$", "$x=1$", "$2^{2x+2}=2^{4x}$", "$x=2$"], [0, 1, 2]));
  q.push(ms("hard", "Which rewrite $\\left(\\tfrac14\\right)^{x}$ as a power of $2$?", ["$2^{-2x}$", "$(2^{-2})^x$", "$2^{2x}$", "$4^{-x}$"], [0, 1, 3]));
  q.push(tf("hard", "$2^{x}\\cdot4^{x}=2^{3x}$.", true));
  q.push(tf("hard", "$8^{x+1}=4^{2x-1}$ reduces to $3x+3=4x-2$.", true));
  q.push(tf("hard", "$\\left(\\sqrt3\\right)^{x}=3^{x/2}$.", true));
  q.push(tf("hard", "$2^{2x}=4^{x}$ for all $x$.", true));
  q.push(num("hard", "Solve $4^{x+1}=8^{x-1}$: $x=$ ___.", 5, 0));
  q.push(num("hard", "Solve $\\left(\\sqrt2\\right)^{x}=16$: $x=$ ___.", 8, 0));
  q.push(num("hard", "Solve $9^{x}=3\\cdot27^{x-2}$: $x=$ ___.", 5, 0));
  q.push(num("hard", "Solve $25^{x}=5^{x+3}$: $x=$ ___.", 3, 0));
  q.push(fill("hard", "Solve $27^{x-1}=9^{2x+1}$: $x=$ ___.", ["-5"]));
  q.push(fill("hard", "Solve $2^{x}\\cdot8=32$: $x=$ ___.", ["2"]));
  return q;
}

// ── 1.3 Solving Exponential Equations Graphically ────────────
function g13() {
  const q = [];
  // EASY
  q.push(mc("easy", "To solve $b^{x}=k$ graphically, find the:", ["intersection of $y=b^x$ and $y=k$", "$y$-intercept", "slope", "vertex"], 0));
  q.push(mc("easy", "The solution is read as the ___ of the intersection.", ["$x$-coordinate", "$y$-coordinate", "slope", "area"], 0));
  q.push(mc("easy", "Solve $2^{x}=8$ (a clean case).", ["$x=3$", "$x=4$", "$x=2$", "$x=8$"], 0));
  q.push(mc("easy", "A graphical solution is:", ["an estimate", "always exact", "an integer", "impossible"], 0));
  q.push(mc("easy", "Solve $10^{x}=100$.", ["$x=2$", "$x=10$", "$x=100$", "$x=1$"], 0));
  q.push(mc("easy", "If $2^3=8$ and $2^4=16$, the solution of $2^{x}=10$ is between:", ["$3$ and $4$", "$1$ and $2$", "$4$ and $5$", "$2$ and $3$"], 0));
  q.push(mc("easy", "Solve $3^{x}=27$.", ["$x=3$", "$x=9$", "$x=2$", "$x=1$"], 0));
  q.push(ms("easy", "Which help solve $1.05^x=1.276$?", ["a graph", "a table of values", "technology", "a common base"], [0, 1, 2]));
  q.push(ms("easy", "Which equations need a graph or table (no common base)?", ["$3^x=10$", "$1.06^x=2$", "$2^x=8$", "$1.05^x=1.5$"], [0, 1, 3]));
  q.push(ms("easy", "To narrow a solution, you can:", ["bracket between two $x$-values", "zoom in with a table", "read the intersection", "add the exponents"], [0, 1, 2]));
  q.push(tf("easy", "A graphical solution is an estimate, not exact.", true));
  q.push(tf("easy", "The solution is the $x$-coordinate of the intersection.", true));
  q.push(tf("easy", "$3^x=10$ can be solved by a common base.", false, "$10$ is not a power of $3$."));
  q.push(tf("easy", "You can solve $2^x=8$ by reading a graph.", true));
  q.push(num("easy", "Solve $2^{x}=16$.", 4, 0));
  q.push(num("easy", "Solve $10^{x}=1000$.", 3, 0));
  q.push(num("easy", "Solve $5^{x}=25$.", 2, 0));
  q.push(num("easy", "Solve $4^{x}=64$.", 3, 0));
  q.push(fill("easy", "The solution is the ___-coordinate of the intersection.", ["x"]));
  q.push(fill("easy", "Solve $2^{x}=8$: $x=$ ___.", ["3"]));
  // MEDIUM
  q.push(mc("medium", "Between which integers is the solution of $2^{x}=20$?", ["$4$ and $5$", "$3$ and $4$", "$5$ and $6$", "$2$ and $3$"], 0));
  q.push(mc("medium", "Between which integers is the solution of $3^{x}=40$?", ["$3$ and $4$", "$2$ and $3$", "$4$ and $5$", "$1$ and $2$"], 0));
  q.push(mc("medium", "Estimate the solution of $3^{x}=20$ (1 dp).", ["$2.7$", "$3.0$", "$1.3$", "$6.7$"], 0));
  q.push(mc("medium", "When does $1.05^{x}=1.276$?", ["$5$", "$4$", "$6$", "$3$"], 0));
  q.push(mc("medium", "When does $1.08^{x}=2$ (nearest year)?", ["$9$", "$6$", "$12$", "$3$"], 0));
  q.push(mc("medium", "Estimate the solution of $2^{x}=50$ (1 dp).", ["$5.6$", "$4.6$", "$6.6$", "$5.0$"], 0));
  q.push(mc("medium", "$y=2^{x}$ and $y=3x+4$ are equal at $x=$", ["$4$", "$2$", "$3$", "$5$"], 0));
  q.push(mc("medium", "When is half a drug left, $0.8^{t}=0.5$ (1 dp)?", ["$3.1$", "$2.1$", "$4.1$", "$5.0$"], 0));
  q.push(ms("medium", "For $2^{x}=10$, which are true?", ["between $3$ and $4$", "$\\approx3.3$", "exactly $3$", "no solution"], [0, 1]));
  q.push(ms("medium", "Which solve $1.06^{x}=2$?", ["read a graph", "a table of values", "$\\approx12$ years", "a common base"], [0, 1, 2]));
  q.push(tf("medium", "The solution of $3^{x}=5$ is between $1$ and $2$.", true));
  q.push(tf("medium", "$1.05^{x}=1.276$ gives $x=5$.", true));
  q.push(num("medium", "Solve $1.06^{t}=2$ (nearest year).", 12, 0));
  q.push(num("medium", "The clean solution of $2^{x}=32$.", 5, 0));
  q.push(num("medium", "When does $1.04^{t}=2$ (nearest year)?", 18, 1));
  q.push(num("medium", "Estimate $x$ for $3^{x}=20$ (1 dp).", 2.7, 0.1));
  q.push(fill("medium", "$2^{x}=20$: the solution is between $4$ and ___.", ["5"]));
  q.push(fill("medium", "$1.05^{x}=1.276$: $x=$ ___.", ["5"]));
  q.push(mc("medium", "Estimate when $0.9^{t}=0.5$ (steps).", ["about $6.6$", "about $3$", "about $10$", "about $2$"], 0));
  q.push(mc("medium", "When does $200(1.06)^{t}=1000$, i.e. $1.06^{t}=5$ (nearest year)?", ["about $28$", "about $5$", "about $15$", "about $40$"], 0));
  // HARD
  q.push(mc("hard", "A \\$500 deposit grows by $1.06^{t}$. When does it reach \\$800? ($1.06^{t}=1.6$, nearest year)", ["$8$", "$5$", "$12$", "$3$"], 0));
  q.push(mc("hard", "When does a \\$1000 investment at $6\\%$/yr triple ($1.06^{t}=3$, nearest year)?", ["$19$", "$12$", "$25$", "$6$"], 0));
  q.push(mc("hard", "$0.85^{t}=0.25$ (a $15\\%$/yr decay). Estimate $t$ (1 dp).", ["$8.5$", "$4.0$", "$12.0$", "$2.0$"], 0));
  q.push(mc("hard", "$1.04^{t}=1.5$ (nearest year).", ["$10$", "$5$", "$15$", "$3$"], 0));
  q.push(mc("hard", "$2^{x}=100$ (1 dp).", ["$6.6$", "$5.6$", "$7.6$", "$6.0$"], 0));
  q.push(mc("hard", "$1.08^{t}=3$ (nearest year).", ["$14$", "$9$", "$20$", "$6$"], 0));
  q.push(mc("hard", "$0.95^{t}=0.5$ (nearest year).", ["$14$", "$7$", "$20$", "$10$"], 0));
  q.push(mc("hard", "$1.10^{t}=2$ (nearest year).", ["$7$", "$5$", "$10$", "$14$"], 0));
  q.push(ms("hard", "For $1.06^{t}=2$, which are true?", ["between $11$ and $12$", "$\\approx11.9$", "solve by graph/table", "exactly $12$"], [0, 1, 2]));
  q.push(ms("hard", "Which require a graph or table?", ["$1.05^t=3$", "$3^x=10$", "$2^x=16$", "$0.9^t=0.4$"], [0, 1, 3]));
  q.push(tf("hard", "$1.06^{t}=2$ has $t\\approx11.9$ years.", true));
  q.push(tf("hard", "$0.85^{t}=0.25$ has $t\\approx8.5$ years.", true));
  q.push(tf("hard", "A graphical estimate should state its accuracy.", true));
  q.push(tf("hard", "$1.04^{t}=2$ takes about $18$ years.", true));
  q.push(num("hard", "Estimate $t$ for $1.06^{t}=1.6$ (nearest year).", 8, 0));
  q.push(num("hard", "Estimate $t$ for $1.06^{t}=3$ (nearest year).", 19, 1));
  q.push(num("hard", "Estimate $t$ for $0.85^{t}=0.25$ (1 dp).", 8.5, 0.3));
  q.push(num("hard", "Estimate $x$ for $2^{x}=100$ (1 dp).", 6.6, 0.1));
  q.push(fill("hard", "$1.06^{t}=2$ gives $t\\approx$ ___ years (1 dp).", ["11.9"]));
  q.push(fill("hard", "$0.9^{t}=0.5$ gives $t\\approx$ ___ steps (1 dp).", ["6.6"]));
  return q;
}

// ── 1.4 Exponential Growth & Decay Applications ──────────────
function g14() {
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
  q.push(ms("easy", "Which model growth or decay?", ["$A=500(1.04)^t$", "$A=80(0.5)^{t/6}$", "$A=P(1+i)^n$", "$y=3x+2$"], [0, 1, 2]));
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
  q.push(ms("medium", "Correct half-life expressions for $80$ mg, $h=6$?", ["$80(0.5)^{t/6}$", "$80\\left(\\tfrac12\\right)^{t/6}$", "$80(0.5)^{6t}$", "$80(2)^{t/6}$"], [0, 1]));
  q.push(tf("medium", "\\$1000 at $5\\%$/yr for 3 yr is about \\$1157.63.", true));
  q.push(tf("medium", "A quantity with half-life 5 h loses half every 5 h.", true));
  q.push(num("medium", "\\$1000 at $5\\%$/yr, 3 yr (dollars, 2 dp).", 1157.63, 0.5));
  q.push(num("medium", "$40$ mg, half-life 5 h; amount after 15 h (mg).", 5, 0.01));
  q.push(num("medium", "$P=600(1.03)^{10}$ (nearest whole).", 806, 2));
  q.push(num("medium", "\\$5000 at $6\\%$/yr, 2 yr (dollars).", 5618, 1));
  q.push(fill("medium", "$200$ mg, half-life 8 h; after 24 h is ___ mg.", ["25"]));
  q.push(fill("medium", "A \\$20000 car at $10\\%$/yr: after 3 yr, $0.9^3=$ ___ (3 dp).", ["0.729"]));
  q.push(mc("medium", "\\$3000 at $7\\%$/yr, 5 yr $\\approx$", ["\\$4207.66", "\\$4050", "\\$3900", "\\$4500"], 0));
  q.push(mc("medium", "$A=A_0(0.95)^t$ reaches $50\\%$ at $t\\approx$", ["$13.5$ yr", "$20$ yr", "$7$ yr", "$2$ yr"], 0));
  // HARD
  q.push(mc("hard", "At $6\\%$/yr, doubling time $\\approx$", ["$11.9$ yr", "$9.0$ yr", "$16.7$ yr", "$6$ yr"], 0));
  q.push(mc("hard", "$A=A_0(0.9)^t$; when is $50\\%$ left?", ["$6.6$ yr", "$5$ yr", "$10$ yr", "$3.3$ yr"], 0));
  q.push(mc("hard", "A \\$20000 car at $12\\%$/yr; when worth \\$10000?", ["$\\approx5.4$ yr", "$\\approx4$ yr", "$\\approx8$ yr", "$\\approx10$ yr"], 0));
  q.push(mc("hard", "A substance decays $15\\%$/yr; when is $25\\%$ left?", ["$\\approx8.5$ yr", "$\\approx4$ yr", "$\\approx12$ yr", "$\\approx2$ yr"], 0));
  q.push(mc("hard", "At $8\\%$/yr, time to double $\\approx$", ["$9.0$ yr", "$12.5$ yr", "$6$ yr", "$16$ yr"], 0));
  q.push(mc("hard", "Money at $4\\%$/yr; time to reach $1.5\\times$?", ["$\\approx10.3$ yr", "$\\approx5$ yr", "$\\approx15$ yr", "$\\approx3$ yr"], 0));
  q.push(mc("hard", "A \\$2000 investment at $6\\%$/yr compounded monthly, 2 yr:", ["\\$2254.32", "\\$2240", "\\$2120", "\\$2300"], 0));
  q.push(mc("hard", "$A=A_0(0.85)^t$; when is $50\\%$ left?", ["$\\approx4.3$ yr", "$\\approx8$ yr", "$\\approx2$ yr", "$\\approx6$ yr"], 0));
  q.push(ms("hard", "Which find the doubling time at $6\\%$?", ["$1.06^t=2$", "read a graph/table", "$t\\approx11.9$", "$t=2/0.06$"], [0, 1, 2]));
  q.push(ms("hard", "True for half-life problems?", ["base $\\tfrac12$", "$\\left(\\tfrac12\\right)^{t/h}$", "exponent $t/h$", "base $2$"], [0, 1, 2]));
  q.push(tf("hard", "Doubling time at $6\\%$ is about 11.9 years.", true));
  q.push(tf("hard", "A $15\\%$/yr decay reaches $25\\%$ in about 8.5 years.", true));
  q.push(tf("hard", "Compound interest grows faster than simple interest for $n>1$.", true));
  q.push(tf("hard", "Half-life is independent of the starting amount.", true));
  q.push(num("hard", "\\$2000 at $6\\%$/yr compounded monthly, 2 yr (dollars, 2 dp).", 2254.32, 0.5));
  q.push(num("hard", "When is $50\\%$ left for $A_0(0.9)^t$? (yr, 1 dp).", 6.6, 0.2));
  q.push(num("hard", "When does $200(1.08)^t=1000$? (yr, 1 dp).", 20.9, 0.3));
  q.push(num("hard", "When is $25\\%$ left for $(0.85)^t$? (yr, 1 dp).", 8.5, 0.2));
  q.push(fill("hard", "\\$1000 doubles at $9\\%$/yr in about ___ years (whole).", ["8"]));
  q.push(fill("hard", "$1.05^t=2$ gives $t\\approx$ ___ years (1 dp).", ["14.2"]));
  return q;
}

// ── 1.5 Interpreting Graphs & Describing Trends ──────────────
function g15() {
  const q = [];
  // EASY
  q.push(mc("easy", "A straight-line distance–time graph through the origin means:", ["constant speed", "acceleration", "stopping", "no motion"], 0));
  q.push(mc("easy", "A graph that rises then flattens is:", ["increasing, then constant", "always decreasing", "constant", "linear"], 0));
  q.push(mc("easy", "A trend is the graph's:", ["overall direction", "highest point", "$y$-intercept", "slope at one point"], 0));
  q.push(mc("easy", "Extending a trend beyond the data is:", ["extrapolation", "interpolation", "rounding", "factoring"], 0));
  q.push(mc("easy", "The peak of a profit graph is the:", ["maximum profit", "break-even", "minimum", "intercept"], 0));
  q.push(mc("easy", "A horizontal graph shows a rate of change of:", ["zero", "one", "infinity", "negative"], 0));
  q.push(mc("easy", "Distance $120$ km in $2$ h at steady speed is:", ["$60$ km/h", "$120$ km/h", "$30$ km/h", "$240$ km/h"], 0));
  q.push(ms("easy", "A good description includes:", ["direction", "units", "special points", "the paper colour"], [0, 1, 2]));
  q.push(ms("easy", "Which are trends?", ["rising", "falling", "levelling off", "the axis labels"], [0, 1, 2]));
  q.push(ms("easy", "Which repeat/curve rather than stay straight?", ["exponential growth", "a quadratic", "a linear cost", "a parabola"], [0, 1, 3]));
  q.push(tf("easy", "A trend is the overall direction of a graph.", true));
  q.push(tf("easy", "Extrapolation assumes the trend continues.", true));
  q.push(tf("easy", "A description does not need units.", false, "Units are essential."));
  q.push(tf("easy", "The peak of a graph can be a maximum.", true));
  q.push(num("easy", "Distance–time line to $(4,200)$: speed (km/h).", 50, 0));
  q.push(num("easy", "Distance–time line to $(2,120)$: speed (km/h).", 60, 0));
  q.push(num("easy", "A horizontal graph's rate of change.", 0, 0));
  q.push(num("easy", "A line to $(5,150)$: speed (km/h).", 30, 0));
  q.push(fill("easy", "Extending a trend beyond the data is called ___.", ["extrapolation"]));
  q.push(fill("easy", "A flat, horizontal graph has a rate of change of ___.", ["0", "zero"]));
  // MEDIUM
  q.push(mc("medium", "Sales $20,24,28,32$ each year. Predict year 6.", ["$40$", "$36$", "$44$", "$48$"], 0));
  q.push(mc("medium", "Users $10,20,40,80$. Predict the next value.", ["$160$", "$120$", "$100$", "$140$"], 0));
  q.push(mc("medium", "A cooling graph falls fast then flattens. This is:", ["exponential decay to a limit", "linear", "growth", "constant"], 0));
  q.push(mc("medium", "A graph falls and flattens. The size of the rate is:", ["decreasing", "increasing", "constant", "zero"], 0));
  q.push(mc("medium", "A profit graph peaks at $(50,900)$. Best sales level:", ["$50$ units", "$900$ units", "$0$", "$45$"], 0));
  q.push(mc("medium", "Sales rise \\$5000/yr from \\$25000. After 3 years:", ["\\$40000", "\\$35000", "\\$45000", "\\$30000"], 0));
  q.push(mc("medium", "Data $3,6,12,24$ is:", ["exponential", "linear", "quadratic", "constant"], 0));
  q.push(mc("medium", "A cost graph crosses the $y$-axis at \\$20. This is the:", ["base fee", "rate", "maximum", "slope"], 0));
  q.push(ms("medium", "For sales $20,24,28,32$, which are true?", ["linear trend", "rises \\$4/yr", "year 6 is \\$40", "exponential"], [0, 1, 2]));
  q.push(ms("medium", "A prediction should state:", ["the assumption the trend continues", "the value", "units", "nothing extra"], [0, 1, 2]));
  q.push(tf("medium", "$10,20,40,80$ is an exponential (doubling) pattern.", true));
  q.push(tf("medium", "A maximum on a graph is its highest point.", true));
  q.push(num("medium", "Sales $20,24,28,32$: predict year 5.", 36, 0));
  q.push(num("medium", "\\$25000 rising \\$5000/yr, after 3 years.", 40000, 0));
  q.push(num("medium", "Users $10,20,40,80$: the next value.", 160, 0));
  q.push(num("medium", "Sales $12,15,18,21$: predict the next value.", 24, 0));
  q.push(fill("medium", "A pattern with a constant ratio is called ___.", ["exponential"]));
  q.push(fill("medium", "$10,20,40,80$: the next value is ___.", ["160"]));
  q.push(mc("medium", "Data $5,10,20,40$: predict the next value.", ["$80$", "$60$", "$50$", "$70$"], 0));
  q.push(mc("medium", "A graph rising with a decreasing slope is:", ["increasing but slowing", "decreasing", "constant", "linear"], 0));
  // HARD
  q.push(mc("hard", "App users climb steeply then bend toward $1\\,000\\,000$. The ceiling is a:", ["saturation limit", "minimum", "$y$-intercept", "slope"], 0));
  q.push(mc("hard", "Why is a distant prediction risky for a flattening curve?", ["the trend may not continue", "graphs are exact", "units change", "it is always safe"], 0));
  q.push(mc("hard", "A world-record-time graph trends down and flattens. Predicting 2100 is:", ["unreliable (limits apply)", "certain", "linear", "impossible to graph"], 0));
  q.push(mc("hard", "Two graphs: A straight, B curving up. Their rates:", ["A constant, B increasing", "both constant", "both increasing", "A increasing, B constant"], 0));
  q.push(mc("hard", "A revenue graph peaks then falls. Beyond the peak, revenue:", ["decreases", "increases", "is constant", "is zero"], 0));
  q.push(mc("hard", "Data $2,6,18,54$: predict the next value.", ["$162$", "$108$", "$90$", "$72$"], 0));
  q.push(mc("hard", "A savings graph doubles each year from \\$1. After 10 years:", ["\\$1024", "\\$500", "\\$100", "\\$10"], 0));
  q.push(mc("hard", "A cost graph: base \\$20 plus \\$0.10/min. The rate of change is:", ["\\$0.10/min", "\\$20", "\\$0.20", "\\$2"], 0));
  q.push(ms("hard", "For a curve bending toward a ceiling, which hold?", ["growth slows near the limit", "linear extrapolation over-predicts", "there is a maximum size", "the rate rises forever"], [0, 1, 2]));
  q.push(ms("hard", "Which are exponential patterns?", ["$3,6,12,24$", "$2,6,18,54$", "$5,10,15,20$", "$1,2,4,8$"], [0, 1, 3]));
  q.push(tf("hard", "$2,6,18,54$ has a constant ratio of $3$.", true));
  q.push(tf("hard", "A saturation limit means growth slows as it is approached.", true));
  q.push(tf("hard", "Extrapolating a curved trend as a straight line is a common error.", true));
  q.push(tf("hard", "A prediction never needs an assumption stated.", false, "State that the trend continues."));
  q.push(num("hard", "$2,6,18,54$: the next value.", 162, 0));
  q.push(num("hard", "\\$1 doubling for 10 years (dollars).", 1024, 0));
  q.push(num("hard", "A base fee \\$30 plus \\$0.05/min: cost of $100$ min (dollars).", 35, 0));
  q.push(num("hard", "$5,10,20,40$: the value after two more doublings.", 160, 0));
  q.push(fill("hard", "A curve approaching a maximum value approaches a ___ (limit/slope).", ["limit"]));
  q.push(fill("hard", "$2,6,18,54$: the next value is ___.", ["162"]));
  return q;
}

// ── 1.6 Rate of Change from Graphs & Tables ──────────────────
function g16() {
  const q = [];
  // EASY
  q.push(mc("easy", "Rate of change is:", ["$\\frac{\\Delta\\text{output}}{\\Delta\\text{input}}$", "output $\\times$ input", "output $+$ input", "input $-$ output"], 0));
  q.push(mc("easy", "A constant rate of change gives a:", ["straight line", "curve", "circle", "flat line only"], 0));
  q.push(mc("easy", "The units of a rate are:", ["output per input", "input per output", "just a number", "square units"], 0));
  q.push(mc("easy", "$90$ km in $1.5$ h at steady speed:", ["$60$ km/h", "$90$ km/h", "$45$ km/h", "$135$ km/h"], 0));
  q.push(mc("easy", "A horizontal graph has a rate of change of:", ["zero", "one", "negative", "infinity"], 0));
  q.push(mc("easy", "Equal first differences in a table mean:", ["a constant rate (linear)", "a changing rate", "no pattern", "exponential"], 0));
  q.push(mc("easy", "A tank fills $40$ L in $8$ min. Rate:", ["$5$ L/min", "$8$ L/min", "$40$ L/min", "$320$ L/min"], 0));
  q.push(ms("easy", "Which describe a rate of change?", ["km per hour", "dollars per year", "litres per minute", "square metres"], [0, 1, 2]));
  q.push(ms("easy", "A constant rate looks like:", ["a straight line", "equal first differences", "a curve", "a horizontal jump"], [0, 1]));
  q.push(ms("easy", "Which have a rate of change of zero?", ["a horizontal graph", "a constant value", "a rising line", "a flat table"], [0, 1, 3]));
  q.push(tf("easy", "Rate of change equals the slope between two points.", true));
  q.push(tf("easy", "A constant rate gives a straight line.", true));
  q.push(tf("easy", "A rate needs no units.", false, "Units are essential."));
  q.push(tf("easy", "A horizontal graph has a zero rate of change.", true));
  q.push(num("easy", "$60$ L in $10$ min: rate (L/min).", 6, 0));
  q.push(num("easy", "$150$ km in $2.5$ h: speed (km/h).", 60, 0));
  q.push(num("easy", "\\$180 over $12$ h: rate (\\$/h).", 15, 0));
  q.push(num("easy", "A horizontal graph's rate of change.", 0, 0));
  q.push(fill("easy", "Rate of change $=\\dfrac{\\Delta\\text{output}}{\\Delta\\text{___}}$.", ["input"]));
  q.push(fill("easy", "$40$ L in $8$ min $=$ ___ L/min.", ["5"]));
  // MEDIUM
  q.push(mc("medium", "Outputs $2,5,8,11$: the rate is:", ["constant $3$ (linear)", "changing", "zero", "exponential"], 0));
  q.push(mc("medium", "Outputs $3,6,12,24$: the rate is:", ["changing (exponential)", "constant", "zero", "linear"], 0));
  q.push(mc("medium", "Outputs $1,4,9,16$: the rate is:", ["changing (quadratic)", "constant", "zero", "exponential"], 0));
  q.push(mc("medium", "Earnings \\$0 to \\$225 over $15$ h:", ["\\$15/h", "\\$225/h", "\\$10/h", "\\$1.50/h"], 0));
  q.push(mc("medium", "Car A: straight line; car B: curves up. Compare:", ["A constant, B accelerating", "both constant", "both accelerating", "A accelerating"], 0));
  q.push(mc("medium", "A phone plan \\$30 + \\$0.05/min. Rate of change of cost:", ["\\$0.05/min", "\\$30", "\\$0.30", "\\$5"], 0));
  q.push(mc("medium", "In that plan, \\$30 is the:", ["base fee", "rate", "slope", "maximum"], 0));
  q.push(mc("medium", "Outputs $5,9,13,17$: the rate is:", ["constant $4$", "changing", "zero", "exponential"], 0));
  q.push(ms("medium", "For $2,5,8,11$, which are true?", ["first differences $3$", "linear", "constant rate", "exponential"], [0, 1, 2]));
  q.push(ms("medium", "Which tables show a changing rate?", ["$1,4,9,16$", "$3,6,12,24$", "$2,4,6,8$", "$1,3,9,27$"], [0, 1, 3]));
  q.push(tf("medium", "$3,6,12,24$ has a constant ratio (exponential).", true));
  q.push(tf("medium", "$1,4,9,16$ has a constant first difference.", false, "First differences are $3,5,7$."));
  q.push(num("medium", "$5,9,13,17$: the rate of change.", 4, 0));
  q.push(num("medium", "\\$225 over $15$ h: rate (\\$/h).", 15, 0));
  q.push(num("medium", "$2,5,8,11$: the rate of change.", 3, 0));
  q.push(num("medium", "A pool drains $200$ L to $50$ L in $30$ min: rate (L/min, signed).", -5, 0));
  q.push(fill("medium", "A straight sloped line has a ___ rate of change.", ["constant"]));
  q.push(fill("medium", "A base fee \\$30 is the plan's ___ cost.", ["fixed", "base"]));
  q.push(mc("medium", "Outputs $2,6,18,54$: the rate is:", ["changing (exponential)", "constant", "zero", "linear"], 0));
  q.push(mc("medium", "A curve that steepens has a rate that is:", ["increasing", "constant", "zero", "decreasing"], 0));
  // HARD
  q.push(mc("hard", "A pool drains $200$ L to $50$ L in $30$ min. Rate of change:", ["$-5$ L/min", "$5$ L/min", "$-150$ L/min", "$-50$ L/min"], 0));
  q.push(mc("hard", "Outputs $0,3,8,15$: which model (from the differences)?", ["quadratic (2nd diff $2$)", "linear", "exponential", "constant"], 0));
  q.push(mc("hard", "A car's distance graph curves upward. Its speed is:", ["increasing", "constant", "zero", "decreasing"], 0));
  q.push(mc("hard", "A plan: \\$40 base plus \\$0.10/min. Cost of $200$ min:", ["\\$60", "\\$40", "\\$20", "\\$80"], 0));
  q.push(mc("hard", "A tank empties $300$ L to $60$ L in $40$ min. Rate:", ["$-6$ L/min", "$6$ L/min", "$-240$ L/min", "$-8$ L/min"], 0));
  q.push(mc("hard", "Outputs $1,3,9,27$: rate of change is:", ["changing (ratio $3$)", "constant", "zero", "linear"], 0));
  q.push(mc("hard", "A savings graph: constant \\$100/month added. The rate is:", ["constant \\$100/month", "changing", "zero", "exponential"], 0));
  q.push(mc("hard", "A distance graph is flat for $5$ min. During that time the object is:", ["stopped", "speeding up", "slowing", "reversing"], 0));
  q.push(ms("hard", "For a pool draining at a steady rate, which hold?", ["negative rate of change", "straight-line graph", "constant rate", "curved graph"], [0, 1, 2]));
  q.push(ms("hard", "Which have a constant rate of change?", ["$2,5,8,11$", "$5,9,13,17$", "$1,4,9,16$", "$3,6,9,12$"], [0, 1, 3]));
  q.push(tf("hard", "A draining pool has a negative rate of change.", true));
  q.push(tf("hard", "$0,3,8,15$ has constant second differences.", true));
  q.push(tf("hard", "An accelerating car has an increasing rate of change of distance.", true));
  q.push(tf("hard", "A flat distance graph means the object is moving fastest.", false, "It is stopped."));
  q.push(num("hard", "$300$ L to $60$ L in $40$ min: rate (L/min, signed).", -6, 0));
  q.push(num("hard", "$0,3,8,15$: the constant second difference.", 2, 0));
  q.push(num("hard", "Cost of $200$ min on a \\$40 + \\$0.10/min plan (dollars).", 60, 0));
  q.push(num("hard", "$5,9,13,17,21$: the constant rate of change.", 4, 0));
  q.push(fill("hard", "A draining tank has a ___ (positive/negative) rate of change.", ["negative"]));
  q.push(fill("hard", "$0,3,8,15$: the model is ___ (linear/quadratic/exponential).", ["quadratic"]));
  return q;
}

// ── 1.7 Choosing a Model: Linear, Quadratic, or Exponential ──
function g17() {
  const q = [];
  // EASY
  q.push(mc("easy", "A constant first difference means a ___ model.", ["linear", "quadratic", "exponential", "no"], 0));
  q.push(mc("easy", "A constant ratio means a ___ model.", ["exponential", "linear", "quadratic", "constant"], 0));
  q.push(mc("easy", "A constant second difference means a ___ model.", ["quadratic", "linear", "exponential", "no"], 0));
  q.push(mc("easy", "$y=2,6,10,14$ is:", ["linear", "quadratic", "exponential", "constant"], 0));
  q.push(mc("easy", "$y=5,10,20,40$ is:", ["exponential", "linear", "quadratic", "constant"], 0));
  q.push(mc("easy", "A constant amount added each step is:", ["linear", "exponential", "quadratic", "none"], 0));
  q.push(mc("easy", "A constant percentage each step is:", ["exponential", "linear", "quadratic", "constant"], 0));
  q.push(ms("easy", "Which are linear (constant difference)?", ["$2,4,6,8$", "$1,4,7,10$", "$2,4,8,16$", "$3,6,9,12$"], [0, 1, 3]));
  q.push(ms("easy", "Which are exponential (constant ratio)?", ["$2,4,8,16$", "$3,9,27,81$", "$2,4,6,8$", "$1,10,100,1000$"], [0, 1, 3]));
  q.push(ms("easy", "The fingerprints are:", ["linear: 1st diff", "quadratic: 2nd diff", "exponential: ratio", "all: 3rd diff"], [0, 1, 2]));
  q.push(tf("easy", "A constant ratio signals an exponential model.", true));
  q.push(tf("easy", "A constant first difference signals a linear model.", true));
  q.push(tf("easy", "A constant percentage change per step is linear.", false, "It is exponential."));
  q.push(tf("easy", "Any increasing data is exponential.", false, "It may be linear or quadratic."));
  q.push(num("easy", "$y=2,6,10,14$: the common difference.", 4, 0));
  q.push(num("easy", "$y=5,10,20,40$: the common ratio.", 2, 0));
  q.push(num("easy", "$y=3,9,27,81$: the common ratio.", 3, 0));
  q.push(num("easy", "$y=7,10,13,16$: the common difference.", 3, 0));
  q.push(fill("easy", "A constant ratio means a(n) ___ model.", ["exponential"]));
  q.push(fill("easy", "A constant first difference means a(n) ___ model.", ["linear"]));
  // MEDIUM
  q.push(mc("medium", "$y=7,10,13,16$: model and equation.", ["linear $y=3x+7$", "exponential", "quadratic", "$y=7x$"], 0));
  q.push(mc("medium", "$y=5,10,20,40$: model and equation.", ["exponential $y=5\\cdot2^x$", "linear", "quadratic", "$y=5x$"], 0));
  q.push(mc("medium", "$y=1,4,9,16$: model.", ["quadratic ($y=x^2$)", "linear", "exponential", "constant"], 0));
  q.push(mc("medium", "Account A adds \\$100/mo; B grows $4\\%$/mo. Which is A?", ["linear", "exponential", "quadratic", "constant"], 0));
  q.push(mc("medium", "$y=2,6,18,54$: model.", ["exponential ($y=2\\cdot3^x$)", "linear", "quadratic", "constant"], 0));
  q.push(mc("medium", "Start at $100$, drop $20\\%$ each step:", ["$y=100(0.8)^x$", "$y=100-20x$", "$y=100(1.2)^x$", "$y=80x$"], 0));
  q.push(mc("medium", "$y=0,3,8,15$: model.", ["quadratic", "linear", "exponential", "constant"], 0));
  q.push(mc("medium", "$y=2,6,10,14$: equation.", ["$y=4x+2$", "$y=2x+4$", "$y=2\\cdot2^x$", "$y=4x$"], 0));
  q.push(ms("medium", "For $y=5,10,20,40$, which are true?", ["ratio $2$", "exponential", "$y=5\\cdot2^x$", "linear"], [0, 1, 2]));
  q.push(ms("medium", "Which are quadratic (constant 2nd difference)?", ["$1,4,9,16$", "$0,3,8,15$", "$2,4,6,8$", "$1,2,4,8$"], [0, 1]));
  q.push(tf("medium", "$y=x^2$ has constant second differences.", true));
  q.push(tf("medium", "A constant dollar amount per year is linear.", true));
  q.push(num("medium", "$y=2,6,18,54$: the common ratio.", 3, 0));
  q.push(num("medium", "$y=1,4,9,16$: the constant second difference.", 2, 0));
  q.push(num("medium", "$y=3\\cdot3^x$ at $x=4$.", 243, 0));
  q.push(num("medium", "$y=4x+2$ at $x=5$.", 22, 0));
  q.push(fill("medium", "Constant amount per step $=$ ___ model.", ["linear"]));
  q.push(fill("medium", "Constant percent per step $=$ ___ model.", ["exponential"]));
  q.push(mc("medium", "$y=1,3,9,27$: model and equation.", ["exponential $y=3^x$", "linear", "quadratic", "$y=3x$"], 0));
  q.push(mc("medium", "$y=3,7,11,15$: model and equation.", ["linear $y=4x+3$", "exponential", "quadratic", "$y=3x$"], 0));
  // HARD
  q.push(mc("hard", "$y=5,8,13,20,29$: model and equation.", ["quadratic $y=x^2+2x+5$", "linear", "exponential", "$y=5x$"], 0));
  q.push(mc("hard", "$y=6,9,14,21,30$: model and equation.", ["quadratic $y=x^2+2x+6$", "linear", "exponential", "$y=6x$"], 0));
  q.push(mc("hard", "A adds \\$50/wk from \\$0; B doubles from \\$1. After 10 weeks, larger is:", ["B (\\$1024)", "A (\\$500)", "equal", "A (\\$550)"], 0));
  q.push(mc("hard", "$y=4,4.8,5.76,6.912$: model and ratio.", ["exponential, ratio $1.2$", "linear", "quadratic", "ratio $0.8$"], 0));
  q.push(mc("hard", "$y=1,2,4,7,11$: model (from differences).", ["quadratic (2nd diff $1$)", "linear", "exponential", "constant"], 0));
  q.push(mc("hard", "Which grows faster long-term: \\$100/yr added or $10\\%$/yr growth?", ["$10\\%$/yr (exponential)", "\\$100/yr (linear)", "equal", "neither grows"], 0));
  q.push(mc("hard", "$y=2,5,10,17,26$: model.", ["quadratic", "linear", "exponential", "constant"], 0));
  q.push(mc("hard", "$y=100,80,64,51.2$: model and ratio.", ["exponential, ratio $0.8$", "linear", "quadratic", "ratio $1.25$"], 0));
  q.push(ms("hard", "For $y=5,8,13,20,29$, which hold?", ["1st diff $3,5,7,9$", "2nd diff $2$", "quadratic", "$y=x^2+2x+5$"], [0, 1, 2, 3]));
  q.push(ms("hard", "Which distinguish exponential from linear?", ["constant ratio vs difference", "constant percent vs amount", "multiplies vs adds", "both add"], [0, 1, 2]));
  q.push(tf("hard", "$y=x^2+2x+6$ gives $6,9,14,21,30$ for $x=0,1,2,3,4$.", true));
  q.push(tf("hard", "Exponential growth eventually overtakes linear growth.", true));
  q.push(tf("hard", "$4,4.8,5.76,6.912$ has a constant ratio of $1.2$.", true));
  q.push(tf("hard", "A quadratic has a constant first difference.", false, "It has a constant second difference."));
  q.push(num("hard", "$y=x^2+2x+5$ at $x=2$.", 13, 0));
  q.push(num("hard", "$y=x^2+2x+6$ at $x=3$.", 21, 0));
  q.push(num("hard", "\\$1 doubling for 10 steps.", 1024, 0));
  q.push(num("hard", "$4,4.8,5.76,\\dots$: the common ratio.", 1.2, 0.01));
  q.push(fill("hard", "$5,8,13,20,29$: the constant second difference is ___.", ["2"]));
  q.push(fill("hard", "$100,80,64,\\dots$: the common ratio is ___.", ["0.8"]));
  return q;
}

// ── 1.8 Powers, Roots & Working with Formulas ────────────────
function g18() {
  const q = [];
  // EASY
  q.push(mc("easy", "Solve $x^{3}=64$.", ["$x=4$", "$x=8$", "$x=16$", "$x=3$"], 0));
  q.push(mc("easy", "Solve $x^{2}=49$.", ["$x=\\pm7$", "$x=7$", "$x=24.5$", "$x=\\pm14$"], 0));
  q.push(mc("easy", "To undo $x^3$, take the:", ["cube root", "square root", "reciprocal", "square"], 0));
  q.push(mc("easy", "$\\sqrt[3]{27}=$", ["$3$", "$9$", "$27$", "$81$"], 0));
  q.push(mc("easy", "Solve $x^{2}=25$.", ["$x=\\pm5$", "$x=5$", "$x=12.5$", "$x=\\pm25$"], 0));
  q.push(mc("easy", "$\\sqrt{81}=$", ["$9$", "$81$", "$40.5$", "$\\pm9$"], 0));
  q.push(mc("easy", "An even power $x^2=a$ ($a>0$) has:", ["two roots $\\pm$", "one root", "no root", "three roots"], 0));
  q.push(ms("easy", "Which solve $x^2=36$?", ["$6$", "$-6$", "$18$", "$\\pm6$"], [0, 1, 3]));
  q.push(ms("easy", "Which are cube roots?", ["$\\sqrt[3]{8}=2$", "$\\sqrt[3]{27}=3$", "$\\sqrt[3]{64}=4$", "$\\sqrt[3]{9}=3$"], [0, 1, 2]));
  q.push(ms("easy", "To isolate a variable, you:", ["undo operations in reverse", "take the matching root of a power", "treat other letters as constants", "guess"], [0, 1, 2]));
  q.push(tf("easy", "$x^3=27$ gives $x=3$.", true));
  q.push(tf("easy", "$x^2=16$ gives $x=\\pm4$.", true));
  q.push(tf("easy", "A power is undone with a root.", true));
  q.push(tf("easy", "A length can be a negative root.", false, "Lengths are positive."));
  q.push(num("easy", "Solve $x^3=125$.", 5, 0));
  q.push(num("easy", "The positive solution of $x^2=81$.", 9, 0));
  q.push(num("easy", "$\\sqrt[3]{216}$.", 6, 0));
  q.push(num("easy", "The positive solution of $x^2=100$.", 10, 0));
  q.push(fill("easy", "$x^3=8$ gives $x=$ ___.", ["2"]));
  q.push(fill("easy", "$\\sqrt{49}=$ ___.", ["7"]));
  // MEDIUM
  q.push(mc("medium", "A cube has $V=s^3=216$. Side length?", ["$6$", "$72$", "$8$", "$36$"], 0));
  q.push(mc("medium", "Solve $A=\\pi r^2$ for $r$.", ["$r=\\sqrt{A/\\pi}$", "$r=A/\\pi$", "$r=A\\pi$", "$r=\\sqrt{A\\pi}$"], 0));
  q.push(mc("medium", "Solve $V=lwh$ for $h$.", ["$h=\\frac{V}{lw}$", "$h=Vlw$", "$h=\\frac{lw}{V}$", "$h=V-lw$"], 0));
  q.push(mc("medium", "Solve $x^4=16$.", ["$x=\\pm2$", "$x=2$", "$x=4$", "$x=\\pm4$"], 0));
  q.push(mc("medium", "A square has area $200$ cm$^2$. Side (1 dp)?", ["$14.1$", "$100$", "$14$", "$44.7$"], 0));
  q.push(mc("medium", "Solve $x^5=32$.", ["$x=2$", "$x=6.4$", "$x=\\pm2$", "$x=5$"], 0));
  q.push(mc("medium", "Solve $C=2\\pi r$ for $r$.", ["$r=\\frac{C}{2\\pi}$", "$r=2\\pi C$", "$r=\\frac{2\\pi}{C}$", "$r=C-2\\pi$"], 0));
  q.push(mc("medium", "In $A=P(1+i)^n$ with $P,i$ fixed, $A$ vs $n$ is:", ["exponential", "linear", "quadratic", "constant"], 0));
  q.push(ms("medium", "Which solve $x^2=64$?", ["$8$", "$-8$", "$\\pm8$", "$32$"], [0, 1, 2]));
  q.push(ms("medium", "Correct rearrangements of $A=\\pi r^2$?", ["$r^2=A/\\pi$", "$r=\\sqrt{A/\\pi}$", "$r=A/\\pi$", "$\\pi=A/r^2$"], [0, 1, 3]));
  q.push(tf("medium", "$x^2=49$ has two real solutions.", true));
  q.push(tf("medium", "For a radius, only the positive root is kept.", true));
  q.push(num("medium", "A cube with $V=27$ cm$^3$: the side.", 3, 0));
  q.push(num("medium", "A square with area $144$: the side.", 12, 0));
  q.push(num("medium", "$\\sqrt[3]{1000}$.", 10, 0));
  q.push(num("medium", "The positive solution of $x^4=81$.", 3, 0));
  q.push(fill("medium", "Solve $V=lwh$ for $l$: $l=\\dfrac{V}{\\text{___}}$.", ["wh"]));
  q.push(fill("medium", "$x^2=100$: the positive solution is ___.", ["10"]));
  q.push(mc("medium", "Solve $x^3=8$.", ["$x=2$", "$x=\\pm2$", "$x=4$", "$x=6$"], 0));
  q.push(mc("medium", "In $A=P(1+i)^n$ with $i,n$ fixed, $A$ vs $P$ is:", ["linear", "exponential", "quadratic", "constant"], 0));
  // HARD
  q.push(mc("hard", "A sphere has $V=\\tfrac43\\pi r^3=1000$. Radius (1 dp)?", ["$6.2$", "$5.0$", "$7.0$", "$4.6$"], 0));
  q.push(mc("hard", "A sphere has $V=\\tfrac43\\pi r^3=113.1$. Radius?", ["$3$", "$4$", "$5$", "$6$"], 0));
  q.push(mc("hard", "Why does $x^2=a$ ($a>0$) have two roots but $x^3=a$ one?", ["even power is symmetric; odd is not", "they are the same", "no reason", "$a$ is negative"], 0));
  q.push(mc("hard", "A square patio has area $500$ cm$^2$. Side (1 dp)?", ["$22.4$", "$250$", "$22$", "$70.7$"], 0));
  q.push(mc("hard", "Solve $2x^3=54$.", ["$x=3$", "$x=27$", "$x=\\pm3$", "$x=9$"], 0));
  q.push(mc("hard", "Solve $\\tfrac13 x^2=12$.", ["$x=\\pm6$", "$x=6$", "$x=\\pm4$", "$x=36$"], 0));
  q.push(mc("hard", "Rearrange $V=\\tfrac43\\pi r^3$ for $r$.", ["$r=\\sqrt[3]{\\frac{3V}{4\\pi}}$", "$r=\\frac{3V}{4\\pi}$", "$r=\\sqrt{\\frac{3V}{4\\pi}}$", "$r=\\frac{4\\pi}{3V}$"], 0));
  q.push(mc("hard", "A cube's volume is $V=s^3$. If $V$ triples, $s$ is multiplied by:", ["$\\sqrt[3]{3}$", "$3$", "$9$", "$\\sqrt{3}$"], 0));
  q.push(ms("hard", "For a length from $x^2=a$, which hold?", ["keep the positive root", "reject the negative root", "$x=\\sqrt{a}$", "keep both roots"], [0, 1, 2]));
  q.push(ms("hard", "Which correctly solve $x^3=64$ and $x^2=64$?", ["$x^3=64\\Rightarrow4$", "$x^2=64\\Rightarrow\\pm8$", "$x^3=64\\Rightarrow\\pm4$", "$x^2=64\\Rightarrow8$ only"], [0, 1]));
  q.push(tf("hard", "$\\sqrt[3]{1000}=10$.", true));
  q.push(tf("hard", "For a physical measurement, discard the negative root.", true));
  q.push(tf("hard", "$V=\\tfrac43\\pi r^3=113.1$ gives $r=3$.", true));
  q.push(tf("hard", "Isolate the power before taking the root.", true));
  q.push(num("hard", "A sphere with $V=\\tfrac43\\pi r^3=113.1$: the radius.", 3, 0.05));
  q.push(num("hard", "A square with area $500$: side (1 dp).", 22.4, 0.1));
  q.push(num("hard", "Solve $2x^3=54$: $x=$ ___.", 3, 0));
  q.push(num("hard", "A sphere with $V=1000$ cm$^3$: radius (1 dp).", 6.2, 0.1));
  q.push(fill("hard", "$V=\\tfrac43\\pi r^3$ solved for $r$: $r=\\sqrt[3]{\\frac{3V}{4\\text{___}}}$.", ["\\pi", "pi"]));
  q.push(fill("hard", "$x^2=500$: the positive root to 1 dp is ___.", ["22.4"]));
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
