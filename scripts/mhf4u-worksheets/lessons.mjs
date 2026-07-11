// "Core Concepts" teaching sections for MHF4U worksheets, keyed by code.
// build.mjs renders LEARN[code] as a green learnbox before the Worked Examples.
// LaTeX content; each entry is an array of [heading, bodyLaTeX] blocks.

export const LEARN = {
  // ── Unit 1: Polynomial Functions ───────────────────────────
  "1.1": [
    ["Power functions", "A \\textbf{power function} has the form $y=ax^n$ with $n$ a whole number; its degree and the sign of $a$ dictate the overall shape."],
    ["End behaviour", "As $x\\to\\pm\\infty$, the ends are set by the degree's parity and the sign of $a$: even degrees send both ends the same way, odd degrees send them opposite ways."],
    ["Even vs odd symmetry", "Even-degree power functions are symmetric about the $y$-axis; odd-degree ones have rotational symmetry about the origin."],
  ],
  "1.2": [
    ["Built from power functions", "A \\textbf{polynomial} is a sum of power functions; its degree still governs end behaviour and caps the number of intercepts and turning points."],
    ["Key features", "Read a polynomial by its degree, leading coefficient, zeros (with multiplicity), and turning points — at most $n-1$ for degree $n$."],
    ["Finite differences", "The degree shows up in a table too: the $n$th finite differences of a degree-$n$ polynomial are constant."],
  ],
  "1.3": [
    ["From zeros to equation", "Given the zeros, write the factored form $y=a(x-r_1)(x-r_2)\\cdots$; one extra point then fixes the leading coefficient $a$."],
    ["Multiplicity and shape", "A factor's multiplicity shapes the graph at its zero: odd crosses the axis, even touches it, and higher multiplicity flattens the curve there."],
    ["Sketching", "Combine end behaviour, the zeros with their multiplicities, and the $y$-intercept to sketch the whole polynomial."],
  ],
  "1.4": [
    ["A single framework", "Any base function $f$ transforms through $y=af\\!\\left(k(x-d)\\right)+c$, where each constant stretches, reflects, or shifts the graph."],
    ["Vertical vs horizontal", "$a$ and $c$ act vertically (stretch by $a$, shift by $c$); $k$ and $d$ act horizontally (compress by $k$, shift by $d$)."],
    ["Order and mapping", "Apply horizontal changes to $x$ and vertical changes to $y$: each point maps as $(x,y)\\to\\left(\\tfrac{x}{k}+d,\\ ay+c\\right)$."],
  ],
  // ── Unit 2: Polynomial Equations & Inequalities ────────────
  "2.1": [
    ["The division identity", "Polynomial division gives $P(x)=D(x)Q(x)+R$, with the remainder $R$ lower in degree than the divisor $D$."],
    ["Long and synthetic", "Long division works for any divisor; \\textbf{synthetic division} is a fast shortcut when the divisor is $x-a$."],
    ["Fill the gaps", "Insert zero coefficients for missing powers so the terms line up correctly through the division."],
  ],
  "2.2": [
    ["The remainder theorem", "The remainder of $P(x)\\div(x-a)$ is exactly $P(a)$, so one substitution replaces a full division."],
    ["The factor theorem", "When $P(a)=0$ the remainder is zero and $x-a$ is a \\textbf{factor} — the key tool for factoring higher-degree polynomials."],
    ["Finding zeros", "Test factors of the constant term as candidate zeros, then divide out each factor you confirm."],
  ],
  "2.3": [
    ["Factor to solve", "Set the polynomial to zero, factor completely using the factor theorem, then apply the zero-product property."],
    ["Counting real roots", "A degree-$n$ equation has at most $n$ real roots; irreducible quadratic factors contribute non-real roots instead."],
    ["Repeated roots", "A repeated factor produces a repeated root, seen on the graph as a touch or a flattening at the axis."],
  ],
  "2.4": [
    ["Beyond equations", "A polynomial \\textbf{inequality} asks where the graph lies above or below the axis, not just where it crosses."],
    ["Use the zeros", "The zeros split the number line into intervals; the polynomial keeps one sign on each, so test a single point in each interval."],
    ["Reading the sign", "A sign chart across the intervals gives the full solution — remember an even-multiplicity zero does not change the sign."],
  ],
  // ── Unit 3: Rational Functions ─────────────────────────────
  "3.1": [
    ["Reciprocal functions", "The reciprocal $y=\\dfrac{1}{f(x)}$ blows up where $f(x)=0$, creating a \\textbf{vertical asymptote}, and flattens where $f$ grows large."],
    ["Rational functions", "A \\textbf{rational function} is a ratio of polynomials; its behaviour is governed by its own zeros and those of its denominator."],
    ["Asymptotes", "Vertical asymptotes sit where the denominator is zero (but the numerator is not); horizontal or oblique asymptotes come from comparing degrees."],
  ],
  "3.2": [
    ["Locate asymptotes first", "Find vertical asymptotes from the denominator's zeros, and the end-behaviour asymptote by comparing the degrees of top and bottom."],
    ["Intercepts and holes", "Numerator zeros give $x$-intercepts; a factor shared by top and bottom creates a \\textbf{hole} rather than an asymptote."],
    ["Sketching", "Plot the intercepts, draw the asymptotes as guides, and check the sign in each region to finish the graph."],
  ],
  "3.3": [
    ["Clear the denominators", "Solve a rational equation by multiplying through by the common denominator, then solving the resulting polynomial equation."],
    ["Check restrictions", "Any value that makes an original denominator zero is not allowed, so reject such extraneous solutions."],
    ["Inequalities need a sign chart", "For a rational inequality, use the zeros of the numerator \\emph{and} the denominator to build a sign chart across the intervals."],
  ],
  // ── Unit 4: Exponential & Logarithmic Functions ────────────
  "4.1": [
    ["A logarithm is an exponent", "$\\log_b x$ is the power to which $b$ must be raised to give $x$ — the inverse operation of exponentiation."],
    ["The laws", "Logs turn products, quotients, and powers into sums, differences, and multiples: $\\log_b(MN)=\\log_b M+\\log_b N$ and $\\log_b M^p=p\\log_b M$."],
    ["Change of base", "Evaluate any logarithm on a calculator with $\\log_b x=\\dfrac{\\log x}{\\log b}$."],
  ],
  "4.2": [
    ["Inverse of the exponential", "$y=\\log_b x$ is the reflection of $y=b^x$ in the line $y=x$, with a \\textbf{vertical} asymptote at $x=0$."],
    ["Domain and range", "A logarithmic function is defined only for $x>0$, and its range is all real numbers — the mirror of the exponential."],
    ["Transformations", "The framework $y=a\\log_b\\!\\left(k(x-d)\\right)+c$ shifts and stretches the curve and moves the vertical asymptote to $x=d$."],
  ],
  "4.3": [
    ["Exponential equations", "Take a logarithm of both sides to bring the variable exponent down, then solve the resulting linear equation."],
    ["Logarithmic equations", "Condense to a single log, rewrite in exponential form, and solve — then confirm each argument stays positive."],
    ["Watch for extraneous roots", "Because logs need positive arguments, discard any solution that makes an argument zero or negative."],
  ],
  "4.4": [
    ["Growth and decay", "Exponential models $A=A_0 b^{\\,t}$ describe populations, radioactive decay, and cooling; logarithms solve them for the time."],
    ["Compound interest", "Investments grow by $A=P(1+i)^n$, and finding the number of periods $n$ requires a logarithm."],
    ["Logarithmic scales", "Quantities spanning huge ranges — sound in decibels, earthquakes on the Richter scale, acidity as pH — use \\textbf{logarithmic} scales."],
  ],
  // ── Unit 5: Trigonometric Functions ────────────────────────
  "5.1": [
    ["A natural angle unit", "A \\textbf{radian} measures an angle by arc length: one radian subtends an arc equal to the radius, and a full circle is $2\\pi$ radians."],
    ["Converting", "Since $180^\\circ=\\pi$ radians, convert by multiplying by $\\dfrac{\\pi}{180^\\circ}$ or $\\dfrac{180^\\circ}{\\pi}$ as needed."],
    ["Arc and sector", "In radians the formulas simplify: arc length is $r\\theta$ and sector area is $\\tfrac12 r^2\\theta$."],
  ],
  "5.2": [
    ["The unit circle", "On the circle of radius $1$, the point at angle $\\theta$ has coordinates $(\\cos\\theta,\\ \\sin\\theta)$ — the definition that extends trig to every angle."],
    ["Exact values", "The special angles $\\tfrac{\\pi}{6},\\tfrac{\\pi}{4},\\tfrac{\\pi}{3}$ and their multiples give exact coordinates worth knowing all around the circle."],
    ["Signs by quadrant", "The signs of $\\cos\\theta$ and $\\sin\\theta$ follow the point's position, matching the CAST rule."],
  ],
  "5.3": [
    ["Sine and cosine in radians", "Graphed over radians, $y=\\sin x$ and $y=\\cos x$ have period $2\\pi$, amplitude $1$, and midline $y=0$."],
    ["The transformed form", "$y=a\\sin\\!\\left(k(x-d)\\right)+c$ gives amplitude $|a|$, period $\\dfrac{2\\pi}{|k|}$, phase shift $d$, and midline $c$."],
    ["Key points", "Plot the maxima, minima, and midline crossings for one period, then repeat to build the full wave."],
  ],
  "5.4": [
    ["Three more ratios", "The reciprocals $\\csc\\theta=\\dfrac{1}{\\sin\\theta}$, $\\sec\\theta=\\dfrac{1}{\\cos\\theta}$, and $\\cot\\theta=\\dfrac{1}{\\tan\\theta}$ complete the six trig functions."],
    ["Their graphs", "Each reciprocal graph has vertical asymptotes wherever the original ratio is zero; cosecant and secant never take values between $-1$ and $1$."],
    ["Where they help", "Reciprocal ratios appear in identities and in problems where a side ratio is naturally inverted."],
  ],
  // ── Unit 6: Trigonometric Identities & Equations ───────────
  "6.1": [
    ["Angles added together", "The \\textbf{compound angle} formulas express $\\sin(A\\pm B)$ and $\\cos(A\\pm B)$ using the ratios of $A$ and $B$ separately."],
    ["The key identities", "$\\sin(A\\pm B)=\\sin A\\cos B\\pm\\cos A\\sin B$ and $\\cos(A\\pm B)=\\cos A\\cos B\\mp\\sin A\\sin B$."],
    ["Exact new angles", "They give exact values for angles like $75^\\circ=45^\\circ+30^\\circ$ from the known special angles."],
  ],
  "6.2": [
    ["Doubling an angle", "Setting $B=A$ in the compound formulas yields the \\textbf{double angle} identities, such as $\\sin2A=2\\sin A\\cos A$."],
    ["Cosine's three forms", "$\\cos2A=\\cos^2A-\\sin^2A=2\\cos^2A-1=1-2\\sin^2A$ — pick the version that fits your information."],
    ["Simplifying", "Double angle formulas condense expressions and are essential for proving identities and solving equations."],
  ],
  "6.3": [
    ["What a proof shows", "An \\textbf{identity} holds for all valid angles; a proof transforms one side into the other using known identities and algebra."],
    ["A steady strategy", "Start from the more complex side, rewrite everything in sines and cosines, and lean on the Pythagorean and compound identities."],
    ["Not an equation", "You never move terms across the equals sign — each step simply rewrites one side until the two match."],
  ],
  "6.4": [
    ["Finding the angles", "Solving a trig equation means finding every angle in the given interval that satisfies it, using reference angles and the unit circle."],
    ["Use identities first", "Reduce the equation to a single trig function — often with a double angle or Pythagorean identity — before solving."],
    ["All solutions", "Because trig functions repeat, list every solution in the interval, and add the period for the general solution when asked."],
  ],
  // ── Unit 7: Rates of Change & Combining Functions ──────────
  "7.1": [
    ["Average rate of change", "The \\textbf{average rate of change} over an interval is the slope of the secant line, $\\dfrac{f(b)-f(a)}{b-a}$."],
    ["Instantaneous rate", "The \\textbf{instantaneous rate} at a point is the slope of the tangent line, approached by shrinking the interval toward that point."],
    ["Estimating it", "Use average rates over smaller and smaller intervals around a point to estimate the instantaneous rate there."],
  ],
  "7.2": [
    ["Arithmetic of functions", "Functions can be added, subtracted, multiplied, and divided point by point: $(f+g)(x)=f(x)+g(x)$, and so on."],
    ["Domain of the result", "The combined function is defined only where \\emph{both} pieces are defined, and division also excludes where the divisor is zero."],
    ["Reading combined graphs", "Add or subtract the $y$-values at each $x$ to picture the sum or difference of two graphs."],
  ],
  "7.3": [
    ["One function inside another", "\\textbf{Composition} $(f\\circ g)(x)=f(g(x))$ feeds the output of $g$ into $f$; order matters, since $f\\circ g\\ne g\\circ f$ in general."],
    ["The chain of domains", "An input must be valid for $g$, and $g(x)$ must in turn be valid for $f$, so the composite's domain can be restricted."],
    ["Building and undoing", "Composition builds complex functions from simple ones, and inverse functions are precisely those that compose to give $x$."],
  ],
};

export default LEARN;
