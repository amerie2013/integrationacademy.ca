// "Concept Check-In" teaching sections for MCF3M worksheets, keyed by code.
// build.mjs renders LEARN[code] as a green learnbox before the Worked Examples.
// LaTeX content; each entry is an array of [heading, bodyLaTeX] blocks.

export const LEARN = {
  // ── Unit 1: Quadratic Expressions & Equations ──────────────
  "1.1": [
    ["Expanding brackets", "To expand, multiply every term of one bracket by every term of the other, then collect like terms; for two binomials, FOIL keeps you organized."],
    ["Simplifying", "After expanding, combine like terms so the result is written cleanly as $ax^2+bx+c$."],
    ["Watch the signs", "A negative in front of a bracket flips every sign inside — a frequent source of errors."],
  ],
  "1.2": [
    ["Factoring reverses expanding", "Factoring rewrites $ax^2+bx+c$ as a product of two binomials — the reverse of expanding."],
    ["Common factor first", "Always remove the greatest common factor before anything else; it simplifies whatever remains."],
    ["Trinomials", "For $x^2+bx+c$, find two numbers that multiply to $c$ and add to $b$; with a leading coefficient, use decomposition (or the difference of squares where it fits)."],
  ],
  "1.3": [
    ["Set to zero", "A quadratic must equal zero before you factor: rearrange it to $ax^2+bx+c=0$ first."],
    ["Zero-product property", "Once factored, a product is zero only when a factor is zero, so each factor yields a solution."],
    ["The roots", "The solutions are the equation's \\textbf{roots}; a quadratic can have two, one, or no real roots."],
  ],
  "1.4": [
    ["A formula for every quadratic", "$x=\\dfrac{-b\\pm\\sqrt{b^2-4ac}}{2a}$ solves any quadratic, whether or not it factors."],
    ["The discriminant", "The value $b^2-4ac$ under the root reveals the number of real roots: positive gives two, zero gives one, negative gives none."],
    ["Substitute carefully", "Identify $a$, $b$, $c$ with their signs before substituting, and simplify the surd fully."],
  ],
  "1.5": [
    ["Roots are x-intercepts", "The \\textbf{roots} of $0=ax^2+bx+c$ are exactly the \\textbf{$x$-intercepts} of $y=ax^2+bx+c$ — where the parabola meets the axis."],
    ["How many", "The discriminant also counts intercepts: two, one (a touch), or none, matching the number of roots."],
    ["Axis of symmetry", "The axis of symmetry lies midway between the intercepts, at $x=-\\dfrac{b}{2a}$, which locates the vertex."],
  ],
  // ── Unit 2: Quadratic Functions ────────────────────────────
  "2.1": [
    ["What a function is", "A \\textbf{function} assigns exactly one output to each input; the notation $f(x)$ names that output for input $x$."],
    ["Domain and range", "The \\textbf{domain} is the set of allowed inputs and the \\textbf{range} is the set of resulting outputs."],
    ["The vertical line test", "A graph represents a function when no vertical line meets it more than once."],
  ],
  "2.2": [
    ["Vertex form", "$y=a(x-h)^2+k$ places the vertex at $(h,k)$ and shows every transformation of the base parabola at once."],
    ["Reading the parameters", "$a$ stretches and (if negative) flips the parabola, $h$ shifts it right, and $k$ shifts it up — recall $(x-h)$ moves it right."],
    ["Sketching", "Plot the vertex, use $a$ with the step pattern $1,4,9$, and mirror across the axis of symmetry."],
  ],
  "2.3": [
    ["Why complete the square", "\\textbf{Completing the square} converts $ax^2+bx+c$ into vertex form, revealing the maximum or minimum directly."],
    ["The technique", "Factor out $a$, take half the $x$-coefficient and square it, then add and subtract that value to form a perfect square."],
    ["Payoff", "The finished form $a(x-h)^2+k$ gives the vertex $(h,k)$ without any graphing."],
  ],
  "2.4": [
    ["Factored form", "$y=a(x-r)(x-s)$ displays the $x$-intercepts $r$ and $s$ immediately."],
    ["Finding the vertex", "The axis of symmetry is halfway between the intercepts, at $x=\\dfrac{r+s}{2}$; substitute to find the vertex."],
    ["Graphing", "Plot the intercepts, mark the vertex, and use $a$ to set the direction and width of the parabola."],
  ],
  "2.5": [
    ["Optimizing with quadratics", "Many real quantities — area, revenue, height — are quadratic, so their maximum or minimum sits at the vertex."],
    ["Set up the model", "Write the quantity as a quadratic in one variable, then find the vertex by completing the square or by $x=-\\dfrac{b}{2a}$."],
    ["Interpret the answer", "Report the vertex in context: the optimal input and the maximum or minimum value it produces."],
  ],
  // ── Unit 3: Exponential Functions ──────────────────────────
  "3.1": [
    ["The laws", "Powers with a shared base obey $a^m a^n=a^{m+n}$, $\\dfrac{a^m}{a^n}=a^{m-n}$, and $(a^m)^n=a^{mn}$; also $a^0=1$ and $a^{-n}=\\dfrac{1}{a^n}$."],
    ["Rational exponents", "A fractional exponent is a root: $a^{m/n}=\\sqrt[n]{a^m}$, so $8^{2/3}=4$."],
    ["Simplify in steps", "Apply one law at a time, leaving negative or fractional exponents until last."],
  ],
  "3.2": [
    ["Repeated multiplication", "An \\textbf{exponential function} $y=a\\,b^x$ multiplies by $b$ each step, giving rapid growth or decay rather than steady change."],
    ["The graph", "It passes through $(0,a)$, has the asymptote $y=0$, and never crosses the $x$-axis; its range is $y>0$ for $a>0$."],
    ["Base sets the trend", "A base $b>1$ grows while $0<b<1$ decays — the further from $1$, the steeper the curve."],
  ],
  "3.3": [
    ["Percentage change", "Constant-percentage change follows $A=A_0 b^{\\,t}$ with $b=1+r$ for growth and $b=1-r$ for decay."],
    ["Half-life and doubling", "Halving uses base $\\tfrac12$ and doubling uses base $2$, each with the exponent scaled by the interval length."],
    ["Interpreting the model", "Substitute a time to predict an amount; the base tells you how fast the quantity changes each period."],
  ],
  // ── Unit 4: Financial Applications ─────────────────────────
  "4.1": [
    ["Simple interest", "\\textbf{Simple interest} is earned only on the principal: $I=Prt$, growing the balance in a straight line."],
    ["Compound interest", "\\textbf{Compound interest} earns interest on previous interest too, following $A=P(1+i)^n$ and curving upward."],
    ["Comparing", "Over time compound interest overtakes simple interest, because its base keeps growing."],
  ],
  "4.2": [
    ["Value today", "\\textbf{Present value} asks how much to invest now to reach a future target, reversing compound interest."],
    ["The formula", "$PV=\\dfrac{A}{(1+i)^n}$ discounts a future amount back to the present using the rate per period."],
    ["Why it matters", "Present value lets you compare amounts available at different times on a fair footing."],
  ],
  "4.3": [
    ["Regular payments", "An \\textbf{annuity} is a sequence of equal payments at regular intervals — savings deposits or loan repayments."],
    ["Two values", "The \\textbf{future value} adds up each payment's growth; the \\textbf{present value} adds each payment discounted to today."],
    ["Everyday uses", "Annuity math underlies mortgages, car loans, and retirement plans."],
  ],
  // ── Unit 5: Trigonometry ───────────────────────────────────
  "5.1": [
    ["The three ratios", "In a right triangle, $\\sin=\\dfrac{\\text{opp}}{\\text{hyp}}$, $\\cos=\\dfrac{\\text{adj}}{\\text{hyp}}$, $\\tan=\\dfrac{\\text{opp}}{\\text{adj}}$ — remember SOH-CAH-TOA."],
    ["Finding sides and angles", "Use a ratio to find a missing side, or an \\emph{inverse} ratio ($\\sin^{-1}$, and so on) to find a missing angle."],
    ["Label first", "Relative to your chosen angle, identify the opposite, adjacent, and hypotenuse before picking a ratio."],
  ],
  "5.2": [
    ["Chaining triangles", "Some problems hide two right triangles that share a side; solve one to get a length needed in the other."],
    ["Angles of elevation", "Sightlines above the horizontal form angles of elevation (below, depression) that set up the triangles."],
    ["Work in order", "Draw and label carefully, then solve the triangles in sequence, passing the shared side between them."],
  ],
  "5.3": [
    ["Beyond right triangles", "The \\textbf{sine law} $\\dfrac{a}{\\sin A}=\\dfrac{b}{\\sin B}=\\dfrac{c}{\\sin C}$ works in any triangle, tying a side to its opposite angle."],
    ["When to use it", "Apply it when you know a side and its opposite angle, plus one more piece of information."],
    ["Pair them up", "Always match a side with the angle across from it to keep the ratios valid."],
  ],
  "5.4": [
    ["A wider tool", "The \\textbf{cosine law} $a^2=b^2+c^2-2bc\\cos A$ handles triangles the sine law cannot start."],
    ["Two cases", "Use it with two sides and their included angle (SAS), or with all three sides (SSS) to find an angle."],
    ["A familiar limit", "At $90^\\circ$ the cosine term vanishes and the law becomes the Pythagorean theorem."],
  ],
  // ── Unit 6: Periodic Functions ─────────────────────────────
  "6.1": [
    ["Repeating behaviour", "A \\textbf{periodic} function repeats at regular intervals; the \\textbf{period} is the length of one full cycle."],
    ["Key features", "Describe such a function by its period, \\textbf{amplitude} (half the max-to-min gap), and \\textbf{midline}."],
    ["The sine function", "$y=\\sin x$ is the model periodic function, oscillating smoothly between $-1$ and $1$."],
  ],
  "6.2": [
    ["The base wave", "$y=\\sin x$ has period $360^\\circ$, amplitude $1$, and midline $y=0$, starting at the midline and rising."],
    ["Five key points", "Plot the start, maximum, midline, minimum, and return over one period, then repeat the shape."],
    ["Reading it", "From the graph you can read the period, amplitude, and midline directly off the axes."],
  ],
  "6.3": [
    ["The transformed form", "$y=a\\sin\\!\\left(k(x-d)\\right)+c$ gives amplitude $|a|$, period $\\dfrac{360^\\circ}{|k|}$, phase shift $d$, and midline $c$."],
    ["Factor first", "Factor out $k$ so the inside reads $k(x-d)$ before reading the horizontal shift $d$."],
    ["Max and min", "The maximum is $c+|a|$ and the minimum $c-|a|$, so the range lies between them."],
  ],
  "6.4": [
    ["Modelling cycles", "Turn repeating data — tides, wheels, temperatures — into $y=a\\sin\\!\\left(k(x-d)\\right)+c$ using $c=\\tfrac{\\max+\\min}{2}$ and $a=\\tfrac{\\max-\\min}{2}$."],
    ["Finding the period", "Read $k$ from the real cycle: $k=\\dfrac{360^\\circ}{\\text{period}}$, with time in the units given."],
    ["Choosing the start", "Use $-\\cos$ to begin at a minimum and $+\\cos$ to begin at a maximum, matching the model to the situation."],
  ],
};

export default LEARN;
