// IB AA SL Unit 6 — Integral Calculus: question bank.
import { mc, ms, tf, num, fill, order, match } from "../bank-mpm2d/helpers.mjs";

// ── 6.1 Antiderivatives & Indefinite Integrals ───────────────
function g61() {
  const q = [];
  q.push(mc("easy", "$\\int x^n\\,dx$ equals:", ["$\\dfrac{x^{n+1}}{n+1}+C$", "$nx^{n-1}+C$", "$x^{n-1}+C$", "$\\dfrac{x^n}{n}+C$"], 0));
  q.push(mc("easy", "The constant $C$ appears because:", ["constants differentiate to 0", "integration is never exact", "$C$ is always 0", "it represents the domain"], 0));
  q.push(mc("easy", "Find $\\int 6x\\,dx$.", ["$3x^2+C$", "$6x^2+C$", "$3x+C$", "$6+C$"], 0));
  q.push(mc("easy", "$\\int(ax+b)^n\\,dx$ equals:", ["$\\dfrac{(ax+b)^{n+1}}{a(n+1)}+C$", "$\\dfrac{(ax+b)^{n+1}}{n+1}+C$", "$a(ax+b)^{n+1}+C$", "$(ax+b)^{n-1}+C$"], 0));
  q.push(mc("easy", "Find $\\int 4\\,dx$.", ["$4x+C$", "$4+C$", "$2x^2+C$", "$C$"], 0));
  q.push(ms("easy", "True facts about antiderivatives:", ["every indefinite integral has $+C$", "the power rule reverses differentiation", "$\\int x^n dx$ requires $n\\neq-1$", "$C$ can always be determined without extra info"], [0, 1, 2]));
  q.push(tf("easy", "Every indefinite integral includes an arbitrary constant $C$.", true));
  q.push(tf("easy", "$\\int x^3\\,dx=3x^2+C$.", false));
  q.push(fill("easy", "Find $\\int 10x^4\\,dx$.", ["2x^5+C"]));
  q.push(num("easy", "Find $\\int 3x^2\\,dx$ and evaluate the antiderivative (without $C$) at $x=2$.", 8, 0));
  q.push(mc("medium", "Find $\\int(6x^2-4x+3)\\,dx$.", ["$2x^3-2x^2+3x+C$", "$2x^3-2x^2+C$", "$6x^3-4x^2+3x+C$", "$12x-4+C$"], 0));
  q.push(mc("medium", "Given $f'(x)=4x-1$, $f(1)=6$, find $f(x)$.", ["$2x^2-x+5$", "$2x^2-x+6$", "$2x^2-x+1$", "$4x^2-x+5$"], 0));
  q.push(mc("medium", "Find $\\int(3x-2)^3\\,dx$.", ["$\\dfrac{(3x-2)^4}{12}+C$", "$\\dfrac{(3x-2)^4}{4}+C$", "$3(3x-2)^4+C$", "$\\dfrac{(3x-2)^3}{3}+C$"], 0));
  q.push(ms("medium", "For $\\int(6x^2-4x+3)\\,dx$:", ["antiderivative of $6x^2$ is $2x^3$", "antiderivative of $-4x$ is $-2x^2$", "antiderivative of $3$ is $3x$", "final answer omits $+C$"], [0, 1, 2]));
  q.push(tf("medium", "Given $f'(x)=4x-1$, $f(1)=6$, then $f(x)=2x^2-x+5$.", true));
  q.push(fill("medium", "Find $\\int\\dfrac{8x^3-2x}{2x}\\,dx$ (simplify first).", ["2x^2-x+C"]));
  q.push(num("medium", "A particle has $a(t)=6t$, $v(0)=1$; find $v(t)$ and evaluate $v(2)$.", 13, 0));
  q.push(num("medium", "Given $f'(x)=3x^2$, $f(0)=4$, find $f(2)$.", 12, 0));
  q.push(match("medium", "Match each integral to its antiderivative.", ["$\\int 4x^3dx$", "$\\int(2x+1)^2dx$ (leading term check)", "$\\int 5dx$"], ["$x^4+C$", "$\\frac{(2x+1)^3}{6}+C$", "$5x+C$"], [0, 1, 2]));
  q.push(order("medium", "Order the steps to find $f(x)$ given $f'(x)=2x+3$, $f(0)=5$.", ["Integrate: $f(x)=x^2+3x+C$", "Substitute $x=0$: $5=0+0+C$", "Solve: $C=5$", "State $f(x)=x^2+3x+5$"]));
  q.push(mc("hard", "A particle has $a(t)=6t-4$, $v(0)=2$, $s(0)=-1$; find $s(t)$.", ["$t^3-2t^2+2t-1$", "$t^3-2t^2+2t$", "$3t^2-4t+2$", "$t^3-2t^2-1$"], 0));
  q.push(mc("hard", "Find $\\int(4x+3)^{-2}\\,dx$... actually find $\\int(2x-1)^5dx$.", ["$\\dfrac{(2x-1)^6}{12}+C$", "$\\dfrac{(2x-1)^6}{6}+C$", "$5(2x-1)^4+C$", "$\\dfrac{(2x-1)^5}{5}+C$"], 0));
  q.push(mc("hard", "Given $f''(x)=6x$, $f'(0)=2$, $f(0)=1$, find $f(x)$.", ["$x^3+2x+1$", "$x^3+2x$", "$3x^2+2x+1$", "$x^3+1$"], 0));
  q.push(ms("hard", "For $a(t)=6t-4$, $v(0)=2$, $s(0)=-1$:", ["$v(t)=3t^2-4t+2$", "$s(t)=t^3-2t^2+2t+C_2$", "$C_2=-1$", "$s(t)=t^3-2t^2+2t-1$"], [0, 1, 2, 3]));
  q.push(tf("hard", "For $a(t)=6t-4$, $v(0)=2$, $s(0)=-1$, then $s(t)=t^3-2t^2+2t-1$.", true));
  q.push(fill("hard", "Find $\\int(5x+1)^4\\,dx$.", ["(5x+1)^5/25+C"]));
  q.push(num("hard", "Given $f''(x)=12x-6$, $f'(1)=4$, $f(0)=2$, find $f(1)$.", 6, 0));
  q.push(order("hard", "Order the steps to find $f(x)$ given $f''(x)=6x-4$, $f'(0)=3$, $f(0)=-2$.", ["Integrate once: $f'(x)=3x^2-4x+C_1$", "Use $f'(0)=3$: $C_1=3$", "Integrate again: $f(x)=x^3-2x^2+3x+C_2$", "Use $f(0)=-2$: $C_2=-2$, final $f(x)=x^3-2x^2+3x-2$"]));
  q.push(match("hard", "Match each integration scenario to its number of constants needed.", ["single antiderivative", "acceleration to position", "$f''$ given, find $f$"], ["one constant", "two constants", "two constants"], [0, 1, 2]));
  return q;
}

// ── 6.2 Definite Integrals & Area ───────────────
function g62() {
  const q = [];
  q.push(mc("easy", "$\\int_a^bf(x)dx$ equals:", ["$F(b)-F(a)$", "$F(a)-F(b)$", "$F(b)+F(a)$", "$f(b)-f(a)$"], 0));
  q.push(mc("easy", "If $f(x)\\geq0$ on $[a,b]$, the definite integral gives:", ["the area under the curve", "the derivative", "always zero", "the slope"], 0));
  q.push(mc("easy", "Evaluate $\\int_0^2 3\\,dx$.", ["6", "3", "2", "0"], 0));
  q.push(mc("easy", "If $f(x)<0$ somewhere on $[a,b]$, the plain integral gives:", ["signed area (can be negative)", "always positive area", "zero", "undefined result"], 0));
  q.push(mc("easy", "Evaluate $\\int_1^3 2x\\,dx$.", ["8", "4", "6", "9"], 0));
  q.push(ms("easy", "True facts about definite integrals:", ["gives net signed area", "requires splitting at x-intercepts for true area", "always gives a positive number", "uses the Fundamental Theorem of Calculus"], [0, 1, 3]));
  q.push(tf("easy", "A definite integral can be negative.", true));
  q.push(tf("easy", "$\\int_a^bf(x)dx$ always equals the true (unsigned) area.", false));
  q.push(fill("easy", "Evaluate $\\int_0^3 x\\,dx$.", ["4.5"]));
  q.push(num("easy", "Evaluate $\\int_1^4 2\\,dx$.", 6, 0));
  q.push(mc("medium", "Evaluate $\\int_0^2(3x^2+1)dx$.", ["10", "9", "8", "12"], 0));
  q.push(mc("medium", "Find the area under $f(x)=x^2$ from $x=0$ to $x=3$.", ["9", "6", "12", "3"], 0));
  q.push(mc("medium", "Given $\\int_0^5f\\,dx=20$, $\\int_0^3f\\,dx=8$, find $\\int_3^5f\\,dx$.", ["12", "28", "8", "20"], 0));
  q.push(ms("medium", "For $\\int_0^2(3x^2+1)dx$:", ["antiderivative is $x^3+x$", "evaluate at 2: $8+2=10$", "evaluate at 0: $0$", "result is 10"], [0, 1, 2, 3]));
  q.push(tf("medium", "$\\int_0^2(3x^2+1)dx=10$.", true));
  q.push(fill("medium", "Find the area under $f(x)=4-x$ from $x=0$ to $x=4$.", ["8"]));
  q.push(num("medium", "Evaluate $\\int_{-1}^2(2x+3)dx$.", 12, 0));
  q.push(num("medium", "A tank's flow rate is $r(t)=8-2t$; find the net volume change from $t=0$ to $t=3$.", 15, 0));
  q.push(match("medium", "Match each definite integral to its value.", ["$\\int_0^2 x^2dx$", "$\\int_1^3 4dx$", "$\\int_0^1 3x^2dx$"], ["8/3", "8", "1"], [0, 1, 2]));
  q.push(order("medium", "Order the steps to evaluate $\\int_1^3(2x-1)dx$.", ["Antiderivative: $x^2-x$", "Evaluate at 3: $9-3=6$", "Evaluate at 1: $1-1=0$", "Subtract: $6-0=6$"]));
  q.push(mc("hard", "Find the total (unsigned) area between $f(x)=x^2-4$ and the x-axis on $[0,3]$.", ["23/3", "10/3", "5", "16/3"], 0));
  q.push(mc("hard", "Given $\\int_2^9f\\,dx=30$, $\\int_5^9f\\,dx=18$, find $\\int_2^5f\\,dx$.", ["12", "48", "18", "30"], 0));
  q.push(mc("hard", "Find the total (unsigned) area between $f(x)=x^2-9$ and the x-axis on $[0,4]$.", ["64/3", "18", "20", "50/3"], 0));
  q.push(ms("hard", "For the total area between $f(x)=x^2-4$ and the x-axis on $[0,3]$:", ["intercept at $x=2$", "$\\int_0^2(x^2-4)dx=-16/3$", "$\\int_2^3(x^2-4)dx=7/3$", "total $=16/3+7/3=23/3$"], [0, 1, 2, 3]));
  q.push(tf("hard", "The total unsigned area between $f(x)=x^2-4$ and the x-axis on $[0,3]$ is $23/3$.", true));
  q.push(fill("hard", "A rate function is $r(t)=10-5t$ for $0\\leq t\\leq4$; find the net accumulated change.", ["0"]));
  q.push(num("hard", "Find the total (unsigned) area between $f(x)=x^2-6x+5$ and the x-axis on $[0,6]$ (factor first).", 18.67, 0.2));
  q.push(order("hard", "Order the steps to find the total area between $f(x)=x^2-1$ and the x-axis on $[0,2]$.", ["Find intercept: $x=1$", "$\\int_0^1(x^2-1)dx=-2/3$", "$\\int_1^2(x^2-1)dx=4/3$", "Total: $2/3+4/3=2$"]));
  q.push(match("hard", "Match each area scenario to its technique.", ["curve entirely above axis", "curve crosses axis once", "using additivity of adjacent intervals"], ["direct integral = area", "split at intercept, sum absolute values", "add/subtract known sub-integrals"], [0, 1, 2]));
  return q;
}

// ── 6.3 Integration of Trig & Exponential Functions ───────────────
function g63() {
  const q = [];
  q.push(mc("easy", "$\\int\\sin x\\,dx$ equals:", ["$-\\cos x+C$", "$\\cos x+C$", "$-\\sin x+C$", "$\\sin x+C$"], 0));
  q.push(mc("easy", "$\\int\\cos x\\,dx$ equals:", ["$\\sin x+C$", "$-\\sin x+C$", "$\\cos x+C$", "$-\\cos x+C$"], 0));
  q.push(mc("easy", "$\\int e^x\\,dx$ equals:", ["$e^x+C$", "$xe^{x-1}+C$", "$e^{x-1}+C$", "$x+C$"], 0));
  q.push(mc("easy", "$\\int\\dfrac1x\\,dx$ equals:", ["$\\ln|x|+C$", "$\\dfrac1{x^2}+C$", "$x\\ln x+C$", "$\\ln x+C$ (no absolute value needed ever)"], 0));
  q.push(mc("easy", "Find $\\int 3e^x\\,dx$.", ["$3e^x+C$", "$3xe^{x-1}+C$", "$e^{3x}+C$", "$3e^{x-1}+C$"], 0));
  q.push(ms("easy", "True antiderivatives:", ["$\\sin x\\to-\\cos x$", "$\\cos x\\to\\sin x$", "$e^x\\to e^x$", "$1/x\\to x^2/2$"], [0, 1, 2]));
  q.push(tf("easy", "$\\int\\cos x\\,dx=\\sin x+C$.", true));
  q.push(tf("easy", "$\\int\\sin x\\,dx=\\cos x+C$.", false));
  q.push(fill("easy", "Find $\\int 5\\cos x\\,dx$.", ["5sinx+C"]));
  q.push(num("easy", "Find $\\int e^x\\,dx$ and evaluate the antiderivative (no $C$) at $x=0$.", 1, 0));
  q.push(mc("medium", "Find $\\int e^{4x+1}\\,dx$.", ["$\\dfrac{e^{4x+1}}{4}+C$", "$e^{4x+1}+C$", "$4e^{4x+1}+C$", "$\\dfrac{e^{4x+1}}{4x+1}+C$"], 0));
  q.push(mc("medium", "Find $\\int\\sin(3x-2)\\,dx$.", ["$-\\dfrac{\\cos(3x-2)}3+C$", "$\\dfrac{\\cos(3x-2)}3+C$", "$-3\\cos(3x-2)+C$", "$-\\cos(3x-2)+C$"], 0));
  q.push(mc("medium", "Find $\\int\\dfrac1{2x+5}\\,dx$.", ["$\\dfrac{\\ln|2x+5|}2+C$", "$\\ln|2x+5|+C$", "$2\\ln|2x+5|+C$", "$\\dfrac1{2}\\ln(2x+5)^2+C$"], 0));
  q.push(ms("medium", "For $\\int e^{4x+1}\\,dx$:", ["treat like power rule pattern for linear substitution", "divide by the inner derivative, $a=4$", "result is $e^{4x+1}/4+C$", "result is $4e^{4x+1}+C$"], [0, 1, 2]));
  q.push(tf("medium", "$\\int\\sin(3x-2)\\,dx=-\\dfrac{\\cos(3x-2)}3+C$.", true));
  q.push(fill("medium", "Find $\\int\\cos(5x)\\,dx$.", ["sin(5x)/5+C"]));
  q.push(num("medium", "Evaluate $\\int_0^{\\pi/2}\\cos x\\,dx$.", 1, 0));
  q.push(num("medium", "Evaluate $\\int_0^{\\pi}\\sin x\\,dx$.", 2, 0));
  q.push(match("medium", "Match each integral to its antiderivative.", ["$\\int e^{2x}dx$", "$\\int\\sin(4x)dx$", "$\\int\\frac1{3x}dx$"], ["$e^{2x}/2+C$", "$-\\cos(4x)/4+C$", "$\\ln|3x|/3+C$"], [0, 1, 2]));
  q.push(order("medium", "Order the steps to evaluate $\\int_0^{\\pi/2}(2\\sin x+\\cos x)dx$.", ["Antiderivative: $-2\\cos x+\\sin x$", "Evaluate at $\\pi/2$: $0+1=1$", "Evaluate at 0: $-2+0=-2$", "Subtract: $1-(-2)=3$"]));
  q.push(mc("hard", "Evaluate $\\int_0^{\\pi}(3\\cos x-\\sin x)dx$ exactly.", ["-2", "2", "4", "0"], 0));
  q.push(mc("hard", "Find $\\int(e^{2x}-\\cos(3x)+4)\\,dx$.", ["$\\dfrac{e^{2x}}2-\\dfrac{\\sin(3x)}3+4x+C$", "$e^{2x}-\\sin(3x)+4x+C$", "$\\dfrac{e^{2x}}2+\\dfrac{\\sin(3x)}3+4x+C$", "$2e^{2x}-3\\sin(3x)+C$"], 0));
  q.push(mc("hard", "Evaluate $\\int_0^{\\pi/4}\\sec^2x\\,dx$ (using $\\int\\sec^2x=\\tan x$).", ["1", "0.5", "$\\pi/4$", "2"], 0));
  q.push(ms("hard", "For $\\int_0^{\\pi}(3\\cos x-\\sin x)dx$:", ["antiderivative is $3\\sin x+\\cos x$", "at $\\pi$: $0-1=-1$", "at $0$: $0+1=1$", "result: $-1-1=-2$"], [0, 1, 2, 3]));
  q.push(tf("hard", "$\\int_0^{\\pi}(3\\cos x-\\sin x)dx=-2$.", true));
  q.push(fill("hard", "Find $\\int\\dfrac{1}{4x-3}\\,dx$.", ["ln|4x-3|/4+C"]));
  q.push(num("hard", "Evaluate $\\int_0^{\\ln2}e^x\\,dx$.", 1, 0));
  q.push(order("hard", "Order the steps to evaluate $\\int_0^{\\pi/2}(4\\cos x+2\\sin x)dx$.", ["Antiderivative: $4\\sin x-2\\cos x$", "Evaluate at $\\pi/2$: $4-0=4$", "Evaluate at $0$: $0-2=-2$", "Subtract: $4-(-2)=6$"]));
  q.push(match("hard", "Match each combined-integral scenario to its component antiderivatives.", ["$e^{ax}$ term", "$\\sin(ax)$ term", "$1/(ax+b)$ term"], ["divide exponential by $a$", "negative cosine over $a$", "log of $|ax+b|$ over $a$"], [0, 1, 2]));
  return q;
}

// ── 6.4 Applications: Area Between Curves & Kinematics ───────────────
function g64() {
  const q = [];
  q.push(mc("easy", "Area between two curves is:", ["$\\int_a^b[f(x)-g(x)]dx$ with $f$ on top", "$\\int_a^b f(x)dx$ only", "$f(b)-g(a)$", "always negative"], 0));
  q.push(mc("easy", "To find the bounds for area between curves, you:", ["solve $f(x)=g(x)$ for intersection points", "guess the interval", "use $x=0$ to $x=1$ always", "differentiate both functions"], 0));
  q.push(mc("easy", "Displacement over $[a,b]$ equals:", ["$\\int_a^b v(t)dt$", "$\\int_a^b|v(t)|dt$", "$v(b)-v(a)$", "$a(b)-a(a)$"], 0));
  q.push(mc("easy", "Total distance over $[a,b]$ equals:", ["$\\int_a^b|v(t)|dt$", "$\\int_a^b v(t)dt$", "$s(b)-s(a)$ always", "$v(b)$"], 0));
  q.push(mc("easy", "If $v(t)$ never changes sign on $[a,b]$, then:", ["displacement equals total distance in magnitude", "displacement is always 0", "total distance is 0", "they're unrelated"], 0));
  q.push(ms("easy", "True facts about these applications:", ["area between curves needs intersection points first", "total distance splits at zeros of $v(t)$", "displacement can be less than total distance", "displacement always equals total distance"], [0, 1, 2]));
  q.push(tf("easy", "Total distance can never be less than the magnitude of displacement.", true));
  q.push(tf("easy", "Area between curves never requires finding intersection points.", false));
  q.push(fill("easy", "For $v(t)=5$ (constant, positive) over $[0,4]$, state whether displacement equals total distance (yes/no).", ["yes"]));
  q.push(num("easy", "$v(t)=4$ m/s constant; find displacement over $[0,3]$.", 12, 0));
  q.push(mc("medium", "Find the area enclosed between $f(x)=x+4$ and $g(x)=x^2$.", ["125/6", "20", "15", "100/6"], 0));
  q.push(mc("medium", "$v(t)=6t-12$; find displacement from $t=0$ to $t=4$.", ["0", "12", "-12", "24"], 0));
  q.push(mc("medium", "Using the same $v(t)=6t-12$, find total distance from $t=0$ to $t=4$.", ["24", "12", "0", "36"], 0));
  q.push(ms("medium", "For $f(x)=x+4$, $g(x)=x^2$ finding intersection:", ["$x+4=x^2\\Rightarrow x^2-x-4=0$", "solve via quadratic formula", "$f$ is on top between the roots", "area uses $\\int[f-g]dx$"], [0, 1, 2, 3]));
  q.push(tf("medium", "For $v(t)=6t-12$ over $[0,4]$, displacement is 0 but total distance is 24.", true));
  q.push(fill("medium", "Find the area enclosed between $f(x)=6-x^2$ and $g(x)=x^2-2$ (intersection at $x=\\pm2$).", ["64/3"]));
  q.push(num("medium", "$v(t)=4t-8$; find displacement from $t=0$ to $t=3$.", -6, 0));
  q.push(num("medium", "Using the same $v(t)=4t-8$, find total distance from $t=0$ to $t=3$.", 10, 0));
  q.push(match("medium", "Match each scenario to its correct integral setup.", ["area between curves", "displacement", "total distance"], ["$\\int[f-g]dx$", "$\\int v\\,dt$", "$\\int|v|\\,dt$"], [0, 1, 2]));
  q.push(order("medium", "Order the steps to find total distance for $v(t)=4t-8$ over $[0,3]$.", ["Find $v=0$ at $t=2$", "$\\int_0^2(4t-8)dt=-8$", "$\\int_2^3(4t-8)dt=2$", "Total distance: $8+2=10$"]));
  q.push(mc("hard", "Find the area enclosed between $f(x)=x^2-4x$ and $g(x)=-x^2+4x+8$.", ["64/3", "32/3", "16", "48/3"], 0));
  q.push(mc("hard", "A particle's velocity is $v(t)=3t^2-18t+24$; find the total distance travelled from $t=0$ to $t=5$ (first find rest times).", ["28", "20", "24", "32"], 0));
  q.push(mc("hard", "Two profit rates are $p_1(t)=t+4$, $p_2(t)=0.4t^2$; find the time (nearest 0.1) where they're equal (positive root).", ["4.6", "4.0", "5.0", "3.5"], 0));
  q.push(ms("hard", "For $v(t)=3t^2-18t+24$ over $[0,5]$ (at rest at $t=2,4$):", ["$\\int_0^2(v)dt=20$", "$\\int_2^4(v)dt=-4$", "$\\int_4^5(v)dt=4$", "total distance $=20+4+4=28$"], [0, 1, 2, 3]));
  q.push(tf("hard", "For $v(t)=3t^2-18t+24$ over $[0,5]$, total distance is 28.", true));
  q.push(fill("hard", "Find the area enclosed between $f(x)=x^2-2x$ and $g(x)=-x^2+2x+8$ (intersection at $x=-1,4$).", ["125/3"]));
  q.push(num("hard", "A particle's velocity is $v(t)=3t^2-12t$; find total distance from $t=0$ to $t=5$ (at rest at $t=0,4$).", 48, 0));
  q.push(order("hard", "Order the steps to find where profit rates $p_1(t)=t+3$, $p_2(t)=0.3t^2$ cross and the accumulated lead.", ["Set equal: $t+3=0.3t^2\\Rightarrow0.3t^2-t-3=0$", "Solve (positive root): $t\\approx5.53$", "Integrate the difference $[(t+3)-0.3t^2]$ from 0 to 5.53", "This gives Company 1's accumulated lead over that interval"]));
  q.push(match("hard", "Match each capstone application to its combined technique.", ["area between curves with a quadratic intersection", "total distance with multiple sign changes", "comparing two accumulation rates"], ["solve quadratic, then integrate difference", "split at every zero of $v(t)$", "find crossing point, then integrate the gap"], [0, 1, 2]));
  return q;
}

export default [
  { code: "6.1", gen: g61 },
  { code: "6.2", gen: g62 },
  { code: "6.3", gen: g63 },
  { code: "6.4", gen: g64 },
];
