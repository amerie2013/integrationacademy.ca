// IB AA SL Unit 5 — Differential Calculus: question bank.
import { mc, ms, tf, num, fill, order, match } from "../bank-mpm2d/helpers.mjs";

// ── 5.1 Limits & Introducing the Derivative ───────────────
function g51() {
  const q = [];
  q.push(mc("easy", "The derivative is defined as:", ["$\\lim_{h\\to0}\\dfrac{f(x+h)-f(x)}h$", "$\\dfrac{f(x+h)}{h}$", "$f(x+h)-f(x)$", "$\\lim_{x\\to0}f(x)$"], 0));
  q.push(mc("easy", "If direct substitution gives $0/0$, you should:", ["factor or rationalize first", "conclude the limit doesn't exist", "the answer is automatically 0", "the answer is automatically 1"], 0));
  q.push(mc("easy", "Evaluate $\\lim_{x\\to2}(3x+1)$.", ["7", "6", "8", "5"], 0));
  q.push(mc("easy", "$h$ in the derivative definition represents:", ["a small gap between two points", "the slope", "the function value", "the domain"], 0));
  q.push(mc("easy", "As $h\\to0$, the secant line approaches the:", ["tangent line", "x-axis", "y-axis", "asymptote"], 0));
  q.push(ms("easy", "True facts about limits and derivatives:", ["$0/0$ is an indeterminate form needing more work", "the derivative is a limit of secant slopes", "$h$ approaches but never equals 0", "$h$ must equal 0 exactly"], [0, 1, 2]));
  q.push(tf("easy", "A limit giving $0/0$ can often be resolved by factoring.", true));
  q.push(tf("easy", "The derivative definition uses $h=0$ directly.", false));
  q.push(fill("easy", "Evaluate $\\lim_{x\\to5}(2x-3)$.", ["7"]));
  q.push(num("easy", "Evaluate $\\lim_{x\\to-1}(x^2+4)$.", 5, 0));
  q.push(mc("medium", "Evaluate $\\lim_{x\\to4}\\dfrac{x^2-16}{x-4}$.", ["8", "4", "16", "0"], 0));
  q.push(mc("medium", "Evaluate $\\lim_{x\\to0}\\dfrac{\\sqrt{x+4}-2}{x}$.", ["1/4", "1/2", "4", "0"], 0));
  q.push(mc("medium", "Use first principles to find $f'(x)$ for $f(x)=x^2+3x$.", ["$2x+3$", "$2x$", "$x+3$", "$2x+3x$"], 0));
  q.push(ms("medium", "For $\\lim_{x\\to4}\\dfrac{x^2-16}{x-4}$:", ["factors to $\\dfrac{(x-4)(x+4)}{x-4}$", "simplifies to $x+4$", "the limit is 8", "the limit is 4"], [0, 1, 2]));
  q.push(tf("medium", "$\\lim_{x\\to4}\\dfrac{x^2-16}{x-4}=8$.", true));
  q.push(fill("medium", "Use first principles to find $f'(x)$ for $f(x)=x^2-5x$.", ["2x-5"]));
  q.push(num("medium", "Evaluate $\\lim_{x\\to3}\\dfrac{x^2-9}{x-3}$.", 6, 0));
  q.push(num("medium", "Evaluate $\\lim_{x\\to0}\\dfrac{\\sqrt{x+9}-3}{x}$ (as a fraction, give the denominator; numerator is 1).", 6, 0));
  q.push(match("medium", "Match each limit to its value.", ["$\\lim_{x\\to2}\\frac{x^2-4}{x-2}$", "$\\lim_{x\\to5}\\frac{x^2-25}{x-5}$", "$\\lim_{x\\to0}(3x+7)$"], ["4", "10", "7"], [0, 1, 2]));
  q.push(order("medium", "Order the steps to evaluate $\\lim_{x\\to1}\\dfrac{x^2-1}{x-1}$.", ["Factor numerator: $(x-1)(x+1)$", "Cancel $(x-1)$", "Simplify to $x+1$", "Substitute $x=1$: result is 2"]));
  q.push(mc("hard", "Use first principles to prove $f'(x)=2ax$ for $f(x)=ax^2$. The key algebraic step is:", ["$f(x+h)-f(x)=a(2xh+h^2)=h(2ax+ah)$", "$f(x+h)-f(x)=2axh$", "$f(x+h)-f(x)=ah^2$", "$f(x+h)-f(x)=a$"], 0));
  q.push(mc("hard", "Evaluate $\\lim_{x\\to2}\\dfrac{x^3-8}{x-2}$ (difference of cubes).", ["12", "8", "6", "4"], 0));
  q.push(mc("hard", "Use first principles to find $f'(x)$ for $f(x)=4x^2-x$.", ["$8x-1$", "$8x$", "$4x-1$", "$8x+1$"], 0));
  q.push(ms("hard", "For $\\lim_{x\\to2}\\dfrac{x^3-8}{x-2}$ (using $x^3-8=(x-2)(x^2+2x+4)$):", ["factors to $(x-2)(x^2+2x+4)$", "cancels to $x^2+2x+4$", "at $x=2$: $4+4+4=12$", "the limit is 8"], [0, 1, 2]));
  q.push(tf("hard", "$\\lim_{x\\to2}\\dfrac{x^3-8}{x-2}=12$.", true));
  q.push(fill("hard", "Use first principles to find $f'(x)$ for $f(x)=3x^2+2x$.", ["6x+2"]));
  q.push(num("hard", "Evaluate $\\lim_{x\\to0}\\dfrac{\\sqrt{x+16}-4}{x}$ (as a fraction's denominator, numerator 1).", 8, 0));
  q.push(order("hard", "Order the steps to prove $f'(x)=2ax+b$ for $f(x)=ax^2+bx+c$ using first principles.", ["Expand $f(x+h)=a(x+h)^2+b(x+h)+c$", "Subtract $f(x)$: $f(x+h)-f(x)=h(2ax+ah+b)$", "Divide by $h$: $2ax+ah+b$", "Let $h\\to0$: result $2ax+b$"]));
  q.push(match("hard", "Match each limit technique to its use case.", ["factoring", "rationalizing (conjugate)", "difference of cubes"], ["polynomial $0/0$", "square root $0/0$", "cubic $0/0$"], [0, 1, 2]));
  return q;
}

// ── 5.2 Differentiation Rules ───────────────
function g52() {
  const q = [];
  q.push(mc("easy", "The power rule states $\\dfrac{d}{dx}[x^n]=$:", ["$nx^{n-1}$", "$x^{n-1}$", "$nx^n$", "$n^{x-1}$"], 0));
  q.push(mc("easy", "The product rule is:", ["$(uv)'=u'v+uv'$", "$(uv)'=u'v'$", "$(uv)'=u'+v'$", "$(uv)'=uv'-u'v$"], 0));
  q.push(mc("easy", "The quotient rule is:", ["$(u/v)'=(u'v-uv')/v^2$", "$(u/v)'=u'/v'$", "$(u/v)'=(u'v+uv')/v^2$", "$(u/v)'=u'v-uv'$"], 0));
  q.push(mc("easy", "The chain rule for $f(g(x))$ gives:", ["$f'(g(x))g'(x)$", "$f'(x)g'(x)$", "$f'(g(x))$", "$f(g'(x))$"], 0));
  q.push(mc("easy", "Differentiate $f(x)=5x^3$.", ["$15x^2$", "$5x^2$", "$15x^3$", "$3x^2$"], 0));
  q.push(ms("easy", "True facts about differentiation rules:", ["power rule: bring down exponent, subtract 1", "product rule needs both derivatives", "chain rule multiplies outer and inner derivatives", "quotient rule ignores the denominator's derivative"], [0, 1, 2]));
  q.push(tf("easy", "The chain rule is used for composite functions.", true));
  q.push(tf("easy", "$(uv)'=u'v'$ is the correct product rule.", false));
  q.push(fill("easy", "Differentiate $f(x)=7x^4$.", ["28x^3"]));
  q.push(num("easy", "Differentiate $f(x)=x^2$ and evaluate $f'(3)$.", 6, 0));
  q.push(mc("medium", "Differentiate $f(x)=(2x+1)(x^2-3)$.", ["$6x^2+2x-6$", "$2x^2-3$", "$6x^2-6$", "$4x-3$"], 0));
  q.push(mc("medium", "Differentiate $f(x)=\\dfrac{x}{x+2}$.", ["$\\dfrac2{(x+2)^2}$", "$\\dfrac1{(x+2)^2}$", "$\\dfrac{-2}{(x+2)^2}$", "$\\dfrac1{x+2}$"], 0));
  q.push(mc("medium", "Differentiate $f(x)=(3x-1)^4$.", ["$12(3x-1)^3$", "$4(3x-1)^3$", "$3(3x-1)^3$", "$12(3x-1)^4$"], 0));
  q.push(ms("medium", "For $f(x)=(2x+1)(x^2-3)$ using the product rule:", ["$u=2x+1,v=x^2-3$", "$u'=2,v'=2x$", "$f'(x)=2(x^2-3)+(2x+1)(2x)$", "simplifies to $6x^2+2x-6$"], [0, 1, 2, 3]));
  q.push(tf("medium", "$\\dfrac{d}{dx}\\left[\\dfrac{x}{x+2}\\right]=\\dfrac2{(x+2)^2}$.", true));
  q.push(fill("medium", "Differentiate $f(x)=(5x+2)^3$.", ["15(5x+2)^2"]));
  q.push(num("medium", "Find the slope of $f(x)=x^3-2x$ at $x=2$.", 10, 0));
  q.push(num("medium", "Differentiate $f(x)=(x-1)(x+4)$ and evaluate $f'(0)$.", 3, 0));
  q.push(match("medium", "Match each function to its derivative.", ["$x^2(x+1)$", "$(2x-1)^2$", "$\\dfrac1{x+1}$"], ["$3x^2+2x$", "$4(2x-1)$", "$-\\dfrac1{(x+1)^2}$"], [0, 1, 2]));
  q.push(order("medium", "Order the steps to differentiate $f(x)=\\dfrac{x^2}{2x+1}$.", ["Identify $u=x^2$, $v=2x+1$", "Find $u'=2x$, $v'=2$", "Apply quotient rule: $\\dfrac{2x(2x+1)-x^2(2)}{(2x+1)^2}$", "Simplify: $\\dfrac{2x^2+2x}{(2x+1)^2}$"]));
  q.push(mc("hard", "Differentiate $f(x)=x^2(3x-1)^4$, factored.", ["$x(3x-1)^3(9x-1)\\times2$... actually $2x(3x-1)^3(9x-1)$", "$2x(3x-1)^4$", "$12x^2(3x-1)^3$", "$x^2(3x-1)^3$"], 0));
  q.push(mc("hard", "Find the equation of the tangent to $f(x)=x^3-3x$ at $x=2$.", ["$y=9x-16$", "$y=9x-2$", "$y=6x-10$", "$y=9x+2$"], 0));
  q.push(mc("hard", "Differentiate $f(x)=\\dfrac{(x+1)^2}{x-3}$ at $x=0$ (evaluate).", ["$-5/9$", "$5/9$", "$-2/3$", "$2/3$"], 0));
  q.push(ms("hard", "For $f(x)=x^2(3x-1)^4$ using product+chain rule:", ["$u'=2x$, $v'=12(3x-1)^3$", "$f'(x)=2x(3x-1)^4+12x^2(3x-1)^3$", "factors to $2x(3x-1)^3[(3x-1)+6x]$", "simplifies to $2x(3x-1)^3(9x-1)$"], [0, 1, 2, 3]));
  q.push(tf("hard", "The tangent line to $f(x)=x^3-3x$ at $x=2$ is $y=9x-16$.", true));
  q.push(fill("hard", "Differentiate $f(x)=x^3(2x-1)^2$, factored form's simplest coefficient bracket (give the full factored derivative as text is complex; instead state $f'(0)$).", ["0"]));
  q.push(num("hard", "Find $f'(1)$ for $f(x)=(x^2+1)(x-2)^3$.", -8, 0));
  q.push(order("hard", "Order the steps to find the tangent line to $f(x)=x^2-4x$ at $x=1$.", ["Find $f'(x)=2x-4$, so $f'(1)=-2$", "Find $f(1)=1-4=-3$", "Use point-slope: $y-(-3)=-2(x-1)$", "Simplify: $y=-2x-1$"]));
  q.push(match("hard", "Match each layered derivative expression to the rules it needs.", ["$x^2(3x-1)^4$", "$\\dfrac{(x+1)^2}{x-3}$", "$(5x^2-1)^6$"], ["product + chain", "quotient + chain", "chain only"], [0, 1, 2]));
  return q;
}

// ── 5.3 Derivatives of Trig, Exponential & Log Functions ───────────────
function g53() {
  const q = [];
  q.push(mc("easy", "$\\dfrac{d}{dx}[\\sin x]$ equals:", ["$\\cos x$", "$-\\cos x$", "$-\\sin x$", "$\\sin x$"], 0));
  q.push(mc("easy", "$\\dfrac{d}{dx}[\\cos x]$ equals:", ["$-\\sin x$", "$\\sin x$", "$\\cos x$", "$-\\cos x$"], 0));
  q.push(mc("easy", "$\\dfrac{d}{dx}[e^x]$ equals:", ["$e^x$", "$xe^{x-1}$", "$e^{x-1}$", "$1$"], 0));
  q.push(mc("easy", "$\\dfrac{d}{dx}[\\ln x]$ equals:", ["$1/x$", "$x$", "$\\ln x$", "$e^x$"], 0));
  q.push(mc("easy", "Differentiate $f(x)=3\\sin x$.", ["$3\\cos x$", "$-3\\cos x$", "$3\\sin x$", "$\\cos x$"], 0));
  q.push(ms("easy", "True base derivatives:", ["$\\sin x\\to\\cos x$", "$\\cos x\\to-\\sin x$", "$e^x\\to e^x$", "$\\ln x\\to x$"], [0, 1, 2]));
  q.push(tf("easy", "$e^x$ is its own derivative.", true));
  q.push(tf("easy", "$\\dfrac{d}{dx}[\\ln x]=x$.", false));
  q.push(fill("easy", "Differentiate $f(x)=4e^x$.", ["4e^x"]));
  q.push(num("easy", "Differentiate $f(x)=5\\cos x$ and evaluate $f'(0)$.", 0, 0));
  q.push(mc("medium", "Differentiate $f(x)=e^{3x-1}$.", ["$3e^{3x-1}$", "$e^{3x-1}$", "$(3x-1)e^{3x-2}$", "$3xe^{3x-1}$"], 0));
  q.push(mc("medium", "Differentiate $f(x)=\\ln(4x^2+1)$.", ["$\\dfrac{8x}{4x^2+1}$", "$\\dfrac1{4x^2+1}$", "$\\dfrac{4x}{4x^2+1}$", "$8x$"], 0));
  q.push(mc("medium", "Differentiate $f(x)=x^2e^x$.", ["$2xe^x+x^2e^x$", "$2xe^x$", "$x^2e^x$", "$2x+e^x$"], 0));
  q.push(ms("medium", "For $f(x)=x^2e^x$ using the product rule:", ["$u=x^2,v=e^x$", "$u'=2x,v'=e^x$", "$f'(x)=2xe^x+x^2e^x$", "factors to $xe^x(x+2)$"], [0, 1, 2, 3]));
  q.push(tf("medium", "$\\dfrac{d}{dx}[\\ln(4x^2+1)]=\\dfrac{8x}{4x^2+1}$.", true));
  q.push(fill("medium", "Differentiate $f(x)=\\sin(5x)$.", ["5cos(5x)"]));
  q.push(num("medium", "Differentiate $f(x)=e^{2x}$ and evaluate $f'(0)$.", 2, 0));
  q.push(num("medium", "Differentiate $f(x)=x\\ln x$ and evaluate $f'(1)$ (using product rule; $\\ln1=0$).", 1, 0));
  q.push(match("medium", "Match each function to its derivative.", ["$e^{4x}$", "$\\ln(3x)$", "$\\cos(2x)$"], ["$4e^{4x}$", "$1/x$", "$-2\\sin(2x)$"], [0, 1, 2]));
  q.push(order("medium", "Order the steps to differentiate $f(x)=x^3\\ln x$.", ["Identify $u=x^3,v=\\ln x$", "Find $u'=3x^2,v'=1/x$", "Apply product rule: $3x^2\\ln x+x^3(1/x)$", "Simplify: $3x^2\\ln x+x^2$"]));
  q.push(mc("hard", "Prove $\\dfrac{d}{dx}[\\tan x]=\\sec^2x$ using the quotient rule on $\\sin x/\\cos x$; the numerator after simplification is:", ["$\\cos^2x+\\sin^2x=1$", "$\\cos^2x-\\sin^2x$", "$2\\sin x\\cos x$", "$\\sin^2x$"], 0));
  q.push(mc("hard", "Differentiate $f(x)=e^{x^2}\\sin x$ at general $x$; the derivative is:", ["$2xe^{x^2}\\sin x+e^{x^2}\\cos x$", "$e^{x^2}\\cos x$", "$2xe^{x^2}\\sin x$", "$e^{x^2}(\\sin x+\\cos x)$"], 0));
  q.push(mc("hard", "Differentiate $f(x)=\\dfrac{e^x}{x}$ and evaluate $f'(1)$.", ["0", "$e$", "$1$", "$-e$"], 0));
  q.push(ms("hard", "Proving $\\dfrac{d}{dx}[\\tan x]=\\sec^2x$:", ["apply quotient rule to $\\sin x/\\cos x$", "numerator becomes $\\cos^2x+\\sin^2x$", "this equals 1 by the Pythagorean identity", "result is $1/\\cos^2x=\\sec^2x$"], [0, 1, 2, 3]));
  q.push(tf("hard", "$\\dfrac{d}{dx}[\\tan x]=\\sec^2x$.", true));
  q.push(fill("hard", "Differentiate $f(x)=\\ln(\\sin x)$.", ["cosx/sinx"]));
  q.push(num("hard", "Differentiate $f(x)=x^2e^{2x}$ and evaluate $f'(0)$.", 0, 0));
  q.push(order("hard", "Order the steps to derive $\\dfrac{d}{dx}[\\sec x]=\\sec x\\tan x$ from $\\sec x=1/\\cos x$.", ["Apply quotient rule with $u=1,v=\\cos x$", "Numerator: $0\\cdot\\cos x-1\\cdot(-\\sin x)=\\sin x$", "Result: $\\sin x/\\cos^2x$", "Rewrite as $\\dfrac1{\\cos x}\\cdot\\dfrac{\\sin x}{\\cos x}=\\sec x\\tan x$"]));
  q.push(match("hard", "Match each derivative rule combination to its example.", ["chain rule with exponential", "product rule with trig", "quotient rule deriving a new identity"], ["$e^{3x^2}$", "$x\\sin x$", "$\\tan x$ from $\\sin x/\\cos x$"], [0, 1, 2]));
  return q;
}

// ── 5.4 Curve Sketching with Derivatives ───────────────
function g54() {
  const q = [];
  q.push(mc("easy", "A critical point occurs where:", ["$f'(x)=0$ (or undefined)", "$f(x)=0$", "$f''(x)=0$ always", "the graph is a straight line"], 0));
  q.push(mc("easy", "If $f''(c)>0$ at a critical point, it's a:", ["local minimum", "local maximum", "inflection point", "not a critical point"], 0));
  q.push(mc("easy", "If $f''(c)<0$ at a critical point, it's a:", ["local maximum", "local minimum", "inflection point", "undefined"], 0));
  q.push(mc("easy", "An inflection point is where:", ["concavity changes", "the function equals 0", "the derivative is undefined always", "the function is at a maximum"], 0));
  q.push(mc("easy", "$f'(x)$ changing from $+$ to $-$ at $x=c$ means:", ["local maximum at $c$", "local minimum at $c$", "no extremum", "undefined"], 0));
  q.push(ms("easy", "True facts about curve sketching:", ["critical points occur where $f'(x)=0$", "$f''(c)>0$ suggests a local min", "$f'(c)=0$ always means an extremum", "inflection points are where concavity changes"], [0, 1, 3]));
  q.push(tf("easy", "$f''(c)<0$ at a critical point indicates a local maximum.", true));
  q.push(tf("easy", "$f'(c)=0$ always guarantees a local extremum.", false));
  q.push(fill("easy", "Find the critical point of $f(x)=x^2-6x$ (the $x$-value).", ["3"]));
  q.push(num("easy", "Find $f''(x)$ for $f(x)=x^3$ and evaluate at $x=0$.", 0, 0));
  q.push(mc("medium", "Find and classify the critical points of $f(x)=x^3-3x^2$.", ["max at $x=0$, min at $x=2$", "min at $x=0$, max at $x=2$", "both maxima", "both minima"], 0));
  q.push(mc("medium", "Find the inflection point of $f(x)=x^3-3x^2$.", ["$(1,-2)$", "$(0,0)$", "$(2,-4)$", "$(1,2)$"], 0));
  q.push(mc("medium", "Use the second derivative test for $f(x)=x^3-12x$ at $x=2$.", ["local min ($f''(2)=12>0$)", "local max", "inflection point", "not a critical point"], 0));
  q.push(ms("medium", "For $f(x)=x^3-3x^2$:", ["$f'(x)=3x^2-6x=3x(x-2)$", "critical points at $x=0,2$", "$f''(x)=6x-6$", "$f''(0)=-6<0$, so max at $x=0$"], [0, 1, 2, 3]));
  q.push(tf("medium", "$f(x)=x^3-3x^2$ has a local max at $x=0$ and local min at $x=2$.", true));
  q.push(fill("medium", "Find the inflection point's $x$-value for $f(x)=x^3-6x^2$.", ["2"]));
  q.push(num("medium", "Find the critical point (larger $x$-value) of $f(x)=x^3-12x$.", 2, 0));
  q.push(num("medium", "Find $f''(x)$ for $f(x)=x^4-8x^2$ and evaluate at $x=1$.", -4, 0));
  q.push(match("medium", "Match each function's critical point to its classification.", ["$x^2-4x$ at $x=2$", "$-x^2+6x$ at $x=3$", "$x^3$ at $x=0$"], ["local min", "local max", "neither (inflection)"], [0, 1, 2]));
  q.push(order("medium", "Order the steps to classify the critical points of $f(x)=x^3-6x^2+9x$.", ["Find $f'(x)=3x^2-12x+9=3(x-1)(x-3)$", "Critical points at $x=1,3$", "Find $f''(x)=6x-12$", "$f''(1)=-6<0$ (max), $f''(3)=6>0$ (min)"]));
  q.push(mc("hard", "Show that $f(x)=x^4$ has a critical point at $x=0$ that is a local minimum, even though $f''(0)=0$. The correct method is:", ["first derivative test: $f'(x)=4x^3$ changes sign from $-$ to $+$", "second derivative test only", "assume it's neither", "cannot be determined"], 0));
  q.push(mc("hard", "Find all critical points of $f(x)=3x^4-4x^3$ and classify $x=0$.", ["critical but not an extremum (no sign change in $f'$)", "local minimum", "local maximum", "inflection with sign change"], 0));
  q.push(mc("hard", "Find the intervals of concavity for $f(x)=x^3-6x^2+9x$.", ["down on $(-\\infty,2)$, up on $(2,\\infty)$", "up on $(-\\infty,2)$, down on $(2,\\infty)$", "always concave up", "always concave down"], 0));
  q.push(ms("hard", "For $f(x)=3x^4-4x^3$ at $x=0$:", ["$f'(x)=12x^3-12x^2=12x^2(x-1)$", "$f'(x)$ doesn't change sign through $x=0$", "$x=0$ is critical but not an extremum", "$x=0$ is a local minimum"], [0, 1, 2]));
  q.push(tf("hard", "$f(x)=x^5$ has a critical point at $x=0$ that is neither a max nor a min.", true));
  q.push(fill("hard", "Find the inflection point's $x$-value for $f(x)=x^4-4x^3$ (there are two; give the nonzero one).", ["2"]));
  q.push(num("hard", "Find $f'''(x)$ for $f(x)=x^4$ and evaluate at $x=1$ (just for practice with repeated differentiation).", 24, 0));
  q.push(order("hard", "Order the steps to fully analyze $f(x)=x^4-8x^2$ (critical points, classification, concavity).", ["Find $f'(x)=4x^3-16x=4x(x^2-4)$, critical at $x=0,\\pm2$", "Find $f''(x)=12x^2-16$", "Classify: $f''(\\pm2)=32>0$ (min), $f''(0)=-16<0$ (max)", "Find inflection points where $f''(x)=0$: $x=\\pm\\sqrt{4/3}$"]));
  q.push(match("hard", "Match each curve-sketching subtlety to its example.", ["critical point that isn't an extremum", "second derivative test inconclusive", "multiple inflection points"], ["$f(x)=x^3$ at $x=0$", "$f(x)=x^4$ at $x=0$", "a quartic with two turning concavity changes"], [0, 1, 2]));
  return q;
}

// ── 5.5 Optimization ───────────────
function g55() {
  const q = [];
  q.push(mc("easy", "The first step in optimization is usually to:", ["write a formula for the quantity to optimize", "differentiate immediately", "guess an answer", "ignore the constraint"], 0));
  q.push(mc("easy", "A fixed-perimeter rectangle has maximum area when it is a:", ["square", "very long thin rectangle", "triangle", "circle"], 0));
  q.push(mc("easy", "To confirm a critical point is a maximum, you can use:", ["the second derivative test", "only guessing", "ignoring it", "the first derivative value alone without sign check"], 0));
  q.push(mc("easy", "In optimization, the constraint is used to:", ["eliminate one variable", "add a new variable", "ignore the objective function", "make the problem unsolvable"], 0));
  q.push(mc("easy", "A rectangle with 100 m of fencing has maximum area when each side is:", ["25 m", "20 m", "50 m", "10 m"], 0));
  q.push(ms("easy", "True facts about optimization:", ["use the constraint to reduce to one variable", "differentiate and set equal to 0", "check the result makes physical sense", "always assume the first critical point is correct without checking"], [0, 1, 2]));
  q.push(tf("easy", "For fixed perimeter, a square maximizes rectangular area.", true));
  q.push(tf("easy", "The constraint in an optimization problem is irrelevant.", false));
  q.push(fill("easy", "A rectangle with 60 m of fencing has max area at side length ___ m.", ["15"]));
  q.push(num("easy", "A rectangle with 40 m fencing has max area; find one side length.", 10, 0));
  q.push(mc("medium", "A rectangular pen must have area 400 m$^2$; find the side length minimizing perimeter.", ["20 m", "15 m", "25 m", "10 m"], 0));
  q.push(mc("medium", "An open-top box is cut from a $12\\times12$ sheet with corner squares $x$; find $x$ that maximizes volume.", ["2 cm", "3 cm", "4 cm", "6 cm"], 0));
  q.push(mc("medium", "A cylinder must hold volume $250\\pi$ cm$^3$; find the radius minimizing surface area.", ["5 cm", "4 cm", "6 cm", "10 cm"], 0));
  q.push(ms("medium", "For an open box from a $12\\times12$ sheet, corner squares $x$:", ["$V(x)=x(12-2x)^2$", "$V'(x)=(12-2x)(12-6x)$", "critical points at $x=6,2$", "$x=6$ is rejected (collapses the box)"], [0, 1, 2, 3]));
  q.push(tf("medium", "For a $12\\times12$ sheet, the optimal corner-square size is $x=2$ cm.", true));
  q.push(fill("medium", "A pen must have area 625 m$^2$; find the side minimizing perimeter.", ["25"]));
  q.push(num("medium", "A rectangle with 120 m fencing has max area; find that max area (m$^2$).", 900, 0));
  q.push(num("medium", "A cylinder with volume $128\\pi$ minimizes surface area at radius $r$; find $r$.", 4, 0));
  q.push(match("medium", "Match each optimization setup to its objective function form.", ["fixed perimeter, maximize area", "fixed area, minimize perimeter", "fixed volume, minimize cylinder surface area"], ["$A=xy$, $y$ from perimeter", "$P=2x+2y$, $y$ from area", "$S=2\\pi r^2+2\\pi rh$, $h$ from volume"], [0, 1, 2]));
  q.push(order("medium", "Order the steps to optimize a rectangle's area with 80 m of fencing.", ["Constraint: $2x+2y=80\\Rightarrow y=40-x$", "Objective: $A=x(40-x)=40x-x^2$", "Differentiate: $A'=40-2x=0\\Rightarrow x=20$", "Confirm max: $A''=-2<0$"]));
  q.push(mc("hard", "A pipeline crosses a river (3 km wide) to a point 8 km downstream; underwater costs 2x overland. Set up cost $C(x)$ where $x$ is along-bank distance; the correct form is:", ["$C(x)=2000\\sqrt{x^2+9}+1000(8-x)$", "$C(x)=2000x+1000(8-x)$", "$C(x)=1000\\sqrt{x^2+9}+2000(8-x)$", "$C(x)=2000(8-x)$"], 0));
  q.push(mc("hard", "For the pipeline problem, minimizing cost leads to $2x=\\sqrt{x^2+9}$; solving gives $x=$:", ["$\\sqrt3$", "$3$", "$2\\sqrt3$", "$1$"], 0));
  q.push(mc("hard", "A box with square base and no lid must hold 32 cm$^3$; find the base side minimizing material.", ["4 cm", "3 cm", "2 cm", "5 cm"], 0));
  q.push(ms("hard", "For the pipeline cost $C(x)=2000\\sqrt{x^2+9}+1000(8-x)$:", ["$C'(x)=2000x/\\sqrt{x^2+9}-1000$", "setting $C'=0$ gives $2x=\\sqrt{x^2+9}$", "squaring gives $3x^2=9\\Rightarrow x=\\sqrt3$", "the answer is $x=3$"], [0, 1, 2]));
  q.push(tf("hard", "For a box with square base, no lid, volume 32 cm$^3$, the optimal base side is 4 cm.", true));
  q.push(fill("hard", "A farmer has 200 m fencing for a field using an existing wall as one side (3 sides fenced); find the side perpendicular to the wall that maximizes area.", ["50"]));
  q.push(num("hard", "For the farmer problem (200 m, 3 sides), find the maximum area (m$^2$).", 5000, 0));
  q.push(order("hard", "Order the steps to optimize a box with square base $x$, no lid, volume 50 cm$^3$, minimizing material.", ["Constraint: $x^2h=50\\Rightarrow h=50/x^2$", "Surface: $S=x^2+4xh=x^2+200/x$", "Differentiate: $S'=2x-200/x^2=0\\Rightarrow x^3=100$", "Result: $x\\approx4.64$ cm"]));
  q.push(match("hard", "Match each optimization scenario to its key algebraic challenge.", ["pipeline cost with a square root", "box-from-sheet cubic volume", "cylinder minimal surface area"], ["solve an equation involving a radical", "reject the geometrically invalid root", "isolate $r^3$ after differentiating"], [0, 1, 2]));
  return q;
}

// ── 5.6 Kinematics & Rates of Change ───────────────
function g56() {
  const q = [];
  q.push(mc("easy", "Velocity is the derivative of:", ["position", "acceleration", "time", "distance only"], 0));
  q.push(mc("easy", "Acceleration is the derivative of:", ["velocity", "position", "time", "distance"], 0));
  q.push(mc("easy", "An object is at rest when:", ["$v(t)=0$", "$s(t)=0$", "$a(t)=0$", "$t=0$"], 0));
  q.push(mc("easy", "If $v$ and $a$ have the same sign, the object is:", ["speeding up", "slowing down", "at rest", "moving backward only"], 0));
  q.push(mc("easy", "If $v$ and $a$ have opposite signs, the object is:", ["slowing down", "speeding up", "at rest", "not moving"], 0));
  q.push(ms("easy", "True facts about kinematics:", ["$v(t)=s'(t)$", "$a(t)=v'(t)$", "at rest means $v(t)=0$", "displacement always equals total distance"], [0, 1, 2]));
  q.push(tf("easy", "Total distance can exceed the magnitude of displacement.", true));
  q.push(tf("easy", "Acceleration is the derivative of position directly.", false));
  q.push(fill("easy", "$s(t)=t^2$; find $v(t)$.", ["2t"]));
  q.push(num("easy", "$s(t)=t^3$; find $a(t)$ and evaluate at $t=1$.", 6, 0));
  q.push(mc("medium", "$s(t)=t^3-6t^2+9t$; find $v(t)$ and evaluate $v(1)$.", ["0", "3", "-3", "6"], 0));
  q.push(mc("medium", "Using the same $s(t)$, find every time the particle is at rest.", ["$t=1,3$", "$t=0,3$", "$t=1,2$", "$t=2,3$"], 0));
  q.push(mc("medium", "A ball's height is $s(t)=-5t^2+20t+2$; find the maximum height.", ["22 m", "20 m", "25 m", "18 m"], 0));
  q.push(ms("medium", "For $s(t)=t^3-6t^2+9t$:", ["$v(t)=3t^2-12t+9$", "$v(t)=0$ at $t=1,3$", "$v(1)=0$", "the particle is never at rest"], [0, 1, 2]));
  q.push(tf("medium", "$s(t)=t^3-6t^2+9t$ has the particle at rest at $t=1$ and $t=3$.", true));
  q.push(fill("medium", "A ball's height is $s(t)=-5t^2+30t+1$; find when maximum height occurs (value of $t$).", ["3"]));
  q.push(num("medium", "$s(t)=t^3-9t^2+24t$; find $v(t)$ and evaluate $v(2)$.", 0, 0));
  q.push(num("medium", "A ball's height is $s(t)=-5t^2+24t+3$; find the maximum height.", 31.8, 0.1));
  q.push(match("medium", "Match each kinematic quantity to its formula.", ["velocity", "acceleration", "displacement over $[a,b]$"], ["$s'(t)$", "$v'(t)$", "$s(b)-s(a)$"], [0, 1, 2]));
  q.push(order("medium", "Order the steps to find when $s(t)=t^3-12t^2+36t$ is at rest.", ["Find $v(t)=3t^2-24t+36$", "Factor: $3(t^2-8t+12)=3(t-2)(t-6)$", "Set equal to 0", "Solutions: $t=2,6$"]));
  q.push(mc("hard", "$s(t)=t^3-6t^2+9t$ for $0\\leq t\\leq4$; given it reverses at $t=1,3$, find total distance if $s(0)=0,s(1)=4,s(3)=0,s(4)=4$.", ["12 m", "4 m", "8 m", "16 m"], 0));
  q.push(mc("hard", "A ball's height is $s(t)=-5t^2+25t+2$; find its landing time (nearest 0.01 s).", ["5.08 s", "5.00 s", "4.90 s", "5.20 s"], 0));
  q.push(mc("hard", "Using the same ball, find its velocity at impact (nearest 0.1 m/s).", ["-25.8", "-25.0", "-24.5", "-26.5"], 0));
  q.push(ms("hard", "For $s(t)=t^3-6t^2+9t$ over $[0,4]$ reversing at $t=1,3$:", ["leg 1: $|4-0|=4$", "leg 2: $|0-4|=4$", "leg 3: $|4-0|=4$", "total distance $=12$"], [0, 1, 2, 3]));
  q.push(tf("hard", "For a ball $s(t)=-5t^2+25t+2$, the landing time is about 5.08 s.", true));
  q.push(fill("hard", "A car's velocity is $v(t)=3t^2-12t+9$; find the times it's at rest (smaller value).", ["1"]));
  q.push(num("hard", "For the car with $v(t)=3t^2-12t+9$, determine if it's speeding up or slowing down right after $t=1$ using $a(t)=6t-12$; give $a(1.1)$ (should be negative, confirming slowing).", -5.4, 0.1));
  q.push(order("hard", "Order the steps to find total distance for $s(t)=t^3-9t^2+24t$ over $[0,5]$, given it's at rest at $t=2,4$.", ["Evaluate $s(0)=0,s(2)=20,s(4)=16,s(5)=20$", "Leg 1: $|20-0|=20$", "Leg 2: $|16-20|=4$, Leg 3: $|20-16|=4$", "Total: $20+4+4=28$"]));
  q.push(match("hard", "Match each kinematics question type to its method.", ["find landing time", "find total distance with reversal", "speeding up vs slowing down"], ["solve $s(t)=0$", "split at zeros of $v(t)$, sum absolute legs", "compare signs of $v(t)$ and $a(t)$"], [0, 1, 2]));
  return q;
}

export default [
  { code: "5.1", gen: g51 },
  { code: "5.2", gen: g52 },
  { code: "5.3", gen: g53 },
  { code: "5.4", gen: g54 },
  { code: "5.5", gen: g55 },
  { code: "5.6", gen: g56 },
];
