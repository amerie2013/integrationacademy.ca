// "Concept Essentials" teaching sections for MCR3U worksheets, keyed by code.
// build.mjs renders LEARN[code] as a green learnbox before the Worked Examples.
// LaTeX content; each entry is an array of [heading, bodyLaTeX] blocks.

export const LEARN = {
  // ── Unit 1: Functions ──────────────────────────────────────
  "1.1": [
    ["Relations and functions", "A \\textbf{relation} pairs inputs with outputs. It is a \\textbf{function} when every input gives exactly \\emph{one} output — no $x$-value maps to two different $y$-values."],
    ["The vertical line test", "On a graph a relation is a function if no vertical line crosses it more than once, since each $x$ then has a single $y$."],
    ["Function notation", "$f(x)$ names the output for input $x$. Writing $f(3)=7$ means input $3$ gives output $7$ — a compact way to describe and evaluate a function."],
  ],
  "1.2": [
    ["What they mean", "The \\textbf{domain} is the set of allowed inputs ($x$-values); the \\textbf{range} is the set of resulting outputs ($y$-values)."],
    ["Finding restrictions", "Exclude inputs that break the rule: values making a denominator $0$, or a negative under a square root, are not in the domain."],
    ["Reading from a graph", "Scan left-to-right for the domain and bottom-to-top for the range, watching for arrows (continuing) versus open or closed endpoints."],
  ],
  "1.3": [
    ["Undoing a function", "The \\textbf{inverse} $f^{-1}$ reverses $f$ by swapping inputs and outputs: if $f(2)=5$ then $f^{-1}(5)=2$."],
    ["Finding it", "Swap $x$ and $y$ in the equation, then solve for $y$. The domain and range swap between a function and its inverse."],
    ["The graph", "The graph of $f^{-1}$ is the reflection of $f$ in the line $y=x$. The inverse is a function only if $f$ passes the horizontal line test."],
  ],
  "1.4": [
    ["The general form", "In $y=af\\!\\left(k(x-d)\\right)+c$, each parameter moves the base graph: $a$ stretches vertically, $k$ stretches horizontally, $d$ shifts right, $c$ shifts up."],
    ["Order and signs", "Mind the minus: $(x-d)$ shifts \\emph{right} by $d$. A negative $a$ reflects in the $x$-axis; a negative $k$ reflects in the $y$-axis."],
    ["Mapping points", "Apply the changes to key points of the base function: $(x,y)\\to\\left(\\dfrac{x}{k}+d,\\ ay+c\\right)$ places each on the new graph."],
  ],
  "1.5": [
    ["Three forms, three views", "Standard form shows the $y$-intercept, factored form shows the \\textbf{zeros}, and vertex form shows the \\textbf{vertex} — the maximum or minimum point."],
    ["The vertex is the extreme", "A parabola turns at its vertex, so the vertex's $y$-value is the function's maximum (opens down) or minimum (opens up)."],
    ["Finding key features", "Get zeros by factoring or the quadratic formula; the axis of symmetry is $x=-\\dfrac{b}{2a}$, and substituting it gives the vertex."],
  ],
  "1.6": [
    ["Solving a quadratic", "Set the equation to $0$, then factor, complete the square, or use the quadratic formula. The discriminant $b^2-4ac$ tells the number of real roots."],
    ["Linear--quadratic systems", "A line and a parabola meet at their shared points. Substitute the line into the parabola to get a single quadratic, then solve."],
    ["Counting intersections", "That quadratic's discriminant tells whether the line cuts the parabola twice, touches it once (tangent), or misses it entirely."],
  ],
  // ── Unit 2: Algebraic Tools ────────────────────────────────
  "2.1": [
    ["Combining polynomials", "Add or subtract by collecting \\textbf{like terms} — same variable and exponent. Distribute a leading minus sign across every term."],
    ["Multiplying", "Multiply each term of one factor by each term of the other, then simplify. FOIL is the shortcut for two binomials."],
    ["Degree check", "The product's degree equals the sum of the factors' degrees — a quick check that no term was lost."],
  ],
  "2.2": [
    ["A toolbox of methods", "Factoring reverses expansion. Try in order: a \\textbf{common factor}, a \\textbf{difference of squares}, a \\textbf{trinomial} pattern, or \\textbf{grouping} for four terms."],
    ["Trinomials", "For $ax^2+bx+c$, find factors of $a\\cdot c$ that add to $b$, split the middle term, and group."],
    ["Factor fully", "Keep going until nothing more factors, and verify by expanding your result."],
  ],
  "2.3": [
    ["Fractions with polynomials", "A \\textbf{rational expression} is a ratio of polynomials. Simplify by factoring top and bottom and cancelling common factors."],
    ["State restrictions", "Any value making the original denominator $0$ is excluded — list these before cancelling, since cancelling can hide them."],
    ["Only factors cancel", "You may cancel matching \\emph{factors}, never individual terms: $\\dfrac{x+2}{x}$ does not become $2$."],
  ],
  "2.4": [
    ["Common denominators", "Just as with numeric fractions, you need a \\textbf{common denominator} first — usually the least common multiple of the factored denominators."],
    ["The process", "Rewrite each expression over the common denominator, combine the numerators, then simplify and state restrictions."],
    ["Mind the subtraction", "When subtracting, distribute the minus sign across the \\emph{entire} numerator being subtracted, or a sign error slips in."],
  ],
  "2.5": [
    ["Simplifying radicals", "A radical is simplest when no perfect-square factor remains under the root: $\\sqrt{50}=\\sqrt{25\\cdot2}=5\\sqrt2$."],
    ["Operating with radicals", "Add or subtract only \\emph{like} radicals (same root), and multiply with $\\sqrt{a}\\cdot\\sqrt{b}=\\sqrt{ab}$."],
    ["Rationalizing", "Remove a radical from a denominator by multiplying top and bottom by it (or by the conjugate) to get an equivalent, tidier expression."],
  ],
  // ── Unit 3: Exponential Functions ──────────────────────────
  "3.1": [
    ["The laws", "Same-base powers obey $a^m a^n=a^{m+n}$, $\\dfrac{a^m}{a^n}=a^{m-n}$, and $(a^m)^n=a^{mn}$; also $a^0=1$ and $a^{-n}=\\dfrac{1}{a^n}$."],
    ["Rational exponents", "A fractional exponent is a root: $a^{m/n}=\\sqrt[n]{a^m}$, so $27^{2/3}=(\\sqrt[3]{27})^2=9$."],
    ["Simplify in steps", "Apply one law at a time, and rewrite negative or fractional exponents last while keeping the base consistent."],
  ],
  "3.2": [
    ["The shape", "An \\textbf{exponential function} $y=a\\,b^x$ multiplies by $b$ each unit step; it has $y$-intercept $(0,a)$ and a horizontal asymptote at $y=0$."],
    ["Growth vs decay", "If $b>1$ the function grows; if $0<b<1$ it decays. The base controls how fast the curve rises or falls."],
    ["Key behaviour", "The graph never touches the $x$-axis, and for $a>0$ its range is $y>0$ — a hallmark of exponential behaviour."],
  ],
  "3.3": [
    ["Shifting the curve", "In $y=a\\,b^{\\,k(x-d)}+c$, the constant $c$ moves the horizontal asymptote to $y=c$ and slides the whole curve up or down."],
    ["Reflections and stretches", "$a$ stretches the curve and, if negative, flips it; $d$ shifts it horizontally. The $y$-intercept comes from substituting $x=0$."],
    ["Reading the range", "With asymptote $y=c$, the range is $y>c$ when $a>0$ and $y<c$ when $a<0$."],
  ],
  "3.4": [
    ["Percentage-change models", "Constant-percentage change uses $A=A_0 b^{\\,t}$: growth takes $b=1+r$ and decay $b=1-r$, with $r$ the rate as a decimal."],
    ["Half-life and doubling", "Halving models use base $\\tfrac12$ with exponent $\\dfrac{t}{h}$; doubling uses base $2$ — each captures change over a set period."],
    ["Compound interest", "Money compounding each period grows by $A=P(1+i)^n$, where $i$ is the rate per period and $n$ the number of periods."],
  ],
  // ── Unit 4: Trigonometry ───────────────────────────────────
  "4.1": [
    ["The primary ratios", "In a right triangle $\\sin=\\dfrac{\\text{opp}}{\\text{hyp}}$, $\\cos=\\dfrac{\\text{adj}}{\\text{hyp}}$, $\\tan=\\dfrac{\\text{opp}}{\\text{adj}}$ — recall SOH-CAH-TOA."],
    ["Special angles", "The angles $30^\\circ$, $45^\\circ$, and $60^\\circ$ have exact ratios from the $30$-$60$-$90$ and $45$-$45$-$90$ triangles, worth memorizing."],
    ["Exact vs decimal", "Special angles give exact surds like $\\sin60^\\circ=\\dfrac{\\sqrt3}{2}$; other angles need a calculator."],
  ],
  "4.2": [
    ["Beyond the first quadrant", "Angles up to $360^\\circ$ use a \\textbf{reference angle} — the acute angle to the $x$-axis — together with a sign from the quadrant."],
    ["The CAST rule", "\\textbf{CAST} records where each ratio is positive: all in QI, sine in QII, tangent in QIII, cosine in QIV."],
    ["Solving equations", "To solve $\\sin\\theta=\\tfrac12$ on $[0^\\circ,360^\\circ)$, find the reference angle, then place a solution in each quadrant where the sign fits."],
  ],
  "4.3": [
    ["The reciprocal ratios", "$\\csc\\theta=\\dfrac{1}{\\sin\\theta}$, $\\sec\\theta=\\dfrac{1}{\\cos\\theta}$, and $\\cot\\theta=\\dfrac{1}{\\tan\\theta}$ complete the six trig ratios."],
    ["Fundamental identities", "The identities $\\sin^2\\theta+\\cos^2\\theta=1$ and $\\tan\\theta=\\dfrac{\\sin\\theta}{\\cos\\theta}$ link the ratios and let you rewrite expressions."],
    ["Proving identities", "Work one side into the other using known identities and algebra — a proof is a chain of equal expressions, not an equation to solve."],
  ],
  "4.4": [
    ["Two laws for any triangle", "The \\textbf{sine law} $\\dfrac{a}{\\sin A}=\\dfrac{b}{\\sin B}=\\dfrac{c}{\\sin C}$ and the \\textbf{cosine law} $a^2=b^2+c^2-2bc\\cos A$ solve non-right triangles."],
    ["Which to use", "Use the sine law with a matched side-angle pair (ASA, AAS, SSA); use the cosine law with SAS or SSS."],
    ["The ambiguous case", "With two sides and a non-included angle (SSA) there may be zero, one, or two triangles — always check for a second possible angle."],
  ],
  "4.5": [
    ["Breaking 3-D into triangles", "A three-dimensional problem is solved by finding right or oblique triangles \\emph{within} the figure and applying trig to each."],
    ["Work in stages", "Often one triangle produces a length needed as a side of a second triangle — solve them in sequence."],
    ["Draw carefully", "A clear diagram that separates each triangle from the solid is the key to setting up the correct ratios."],
  ],
  // ── Unit 5: Sinusoidal Functions ───────────────────────────
  "5.1": [
    ["What periodic means", "A \\textbf{periodic} function repeats its values at regular intervals; the \\textbf{period} is the length of one full cycle."],
    ["Key measurements", "Describe a periodic graph by its \\textbf{period}, \\textbf{amplitude} (half the max-to-min distance), and \\textbf{midline} (the central horizontal line)."],
    ["Real examples", "Tides, sound waves, and a Ferris wheel's height are all periodic and modelled with these features."],
  ],
  "5.2": [
    ["The base graphs", "$y=\\sin x$ and $y=\\cos x$ each have period $360^\\circ$, amplitude $1$, and midline $y=0$; cosine starts at a maximum, sine at the midline."],
    ["Five key points", "Plot one cycle with five evenly spaced points — the maxima, minima, and midline crossings — then repeat the pattern."],
    ["Reading features", "From a sine or cosine graph you can read the period, amplitude, and midline directly off the axes."],
  ],
  "5.3": [
    ["The parameters", "In $y=a\\sin\\!\\left(k(x-d)\\right)+c$: $|a|$ is the amplitude, $\\dfrac{360^\\circ}{|k|}$ the period, $d$ the phase shift, and $c$ the midline."],
    ["Factor first", "Before reading the phase shift, factor out $k$ so the inside is $k(x-d)$; then $d$ is the shift."],
    ["Building the graph", "Set the midline from $c$, height from $a$, width from $k$, and slide by $d$ — draw one cycle, then repeat."],
  ],
  "5.4": [
    ["Modelling real cycles", "Turn repeating data (tides, temperatures, wheels) into $y=a\\sin\\!\\left(k(x-d)\\right)+c$ using $c=\\dfrac{\\max+\\min}{2}$ and $a=\\dfrac{\\max-\\min}{2}$."],
    ["Setting the period", "Find $k$ from the real cycle length: $k=\\dfrac{360^\\circ}{\\text{period}}$, with time in the units given."],
    ["Sine or cosine", "Use $-\\cos$ to start at a minimum and $+\\cos$ to start at a maximum; either models the same motion with a suitable shift."],
  ],
  // ── Unit 6: Sequences & Series ─────────────────────────────
  "6.1": [
    ["Adding a constant", "An \\textbf{arithmetic sequence} rises by a fixed \\textbf{common difference} $d$ each term: $3, 7, 11, 15,\\dots$ has $d=4$."],
    ["The general term", "The $n$th term is $t_n=a+(n-1)d$, where $a$ is the first term — letting you jump straight to any term."],
    ["Recognizing one", "Equal consecutive differences mean the sequence is arithmetic; a plot of its terms is a straight line."],
  ],
  "6.2": [
    ["Multiplying by a ratio", "A \\textbf{geometric sequence} multiplies by a fixed \\textbf{common ratio} $r$ each term: $2, 6, 18, 54,\\dots$ has $r=3$."],
    ["The general term", "The $n$th term is $t_n=a\\,r^{\\,n-1}$. A ratio between $0$ and $1$ shrinks the terms; a ratio above $1$ grows them."],
    ["Recognizing one", "A constant \\emph{ratio} between consecutive terms marks a geometric sequence; its terms grow or decay exponentially."],
  ],
  "6.3": [
    ["Summing a sequence", "A \\textbf{series} is the sum of a sequence's terms; an arithmetic series adds terms with a common difference."],
    ["The sum formula", "$S_n=\\dfrac{n}{2}(a+t_n)$ — the number of terms times the average of the first and last (equivalently $\\dfrac{n}{2}\\left[2a+(n-1)d\\right]$)."],
    ["Why it works", "Pairing first with last, second with second-last, and so on gives equal sums — the idea behind the formula."],
  ],
  "6.4": [
    ["Summing a geometric sequence", "A \\textbf{geometric series} adds terms that share a common ratio $r$."],
    ["The sum formula", "$S_n=\\dfrac{a(r^n-1)}{r-1}$ for $r\\ne1$ gives the sum of the first $n$ terms directly."],
    ["A useful special case", "When $|r|<1$ the terms shrink and the infinite sum converges to $\\dfrac{a}{1-r}$ — the basis of many financial formulas."],
  ],
  "6.5": [
    ["The triangle", "Each entry of \\textbf{Pascal's triangle} is the sum of the two above it, and row $n$ holds the coefficients of $(a+b)^n$."],
    ["The binomial theorem", "$(a+b)^n=\\displaystyle\\sum_{r=0}^{n}\\dbinom{n}{r}a^{n-r}b^{r}$, where $\\dbinom{n}{r}$ is a triangle entry and the exponents sum to $n$."],
    ["Single terms", "The general term $\\dbinom{n}{r}a^{n-r}b^{r}$ lets you find one coefficient — say of $x^3$ — without the full expansion."],
  ],
  // ── Unit 7: Financial Mathematics ──────────────────────────
  "7.1": [
    ["Interest on the principal", "\\textbf{Simple interest} is earned only on the original \\textbf{principal}: $I=Prt$, with rate $r$ per year and time $t$ in years."],
    ["The total amount", "The final amount is $A=P+I=P(1+rt)$ — the principal plus all the interest."],
    ["Linear growth", "Because the interest each period is the same, simple interest grows the balance in a straight line."],
  ],
  "7.2": [
    ["Interest on interest", "\\textbf{Compound interest} adds each period's interest to the balance, so later interest is earned on a larger amount: $A=P(1+i)^n$."],
    ["Rate and periods", "$i$ is the rate \\emph{per compounding period} and $n$ the number of periods; more frequent compounding earns slightly more."],
    ["Why it outpaces simple", "Because the base keeps growing, compound interest curves upward and overtakes simple interest over time."],
  ],
  "7.3": [
    ["Value today", "\\textbf{Present value} answers how much must be invested now to reach a target amount later — it reverses compound interest."],
    ["The formula", "$PV=\\dfrac{A}{(1+i)^n}$ discounts a future amount back to today using the rate per period."],
    ["Why it matters", "Present value puts money available at different times on equal footing — essential for comparing loans and investments."],
  ],
  "7.4": [
    ["Regular payments", "An \\textbf{annuity} is a series of equal payments made at regular intervals, such as savings deposits or loan repayments."],
    ["Future and present value", "The \\textbf{future value} sums each payment's growth; the \\textbf{present value} sums each payment discounted to today — both are geometric series."],
    ["Everyday uses", "Annuity formulas model mortgages, car loans, and retirement savings, where equal payments meet compound interest."],
  ],
};

export default LEARN;
