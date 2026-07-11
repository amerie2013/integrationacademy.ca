// "Concept Focus" teaching sections for MCT4C worksheets, keyed by code.
// build.mjs renders LEARN[code] as a green learnbox before the Worked Examples.
// LaTeX content; each entry is an array of [heading, bodyLaTeX] blocks.

export const LEARN = {
  // ── Unit 1: Exponential Functions ──────────────────────────
  "1.1": [
    ["Powers as shorthand", "A power packs repeated multiplication into one symbol: $a^n$ means $a$ used as a factor $n$ times. The exponent laws let you combine such powers without expanding them."],
    ["The core rules", "For a shared base: multiply by adding exponents ($a^m a^n=a^{m+n}$), divide by subtracting ($\\tfrac{a^m}{a^n}=a^{m-n}$), and raise a power by multiplying ($(a^m)^n=a^{mn}$)."],
    ["Zero, negative, fractional", "Three special cases finish the toolkit: $a^0=1$, $a^{-n}=\\dfrac{1}{a^n}$, and $a^{m/n}=\\sqrt[n]{a^m}$ — a root written as an exponent."],
  ],
  "1.2": [
    ["A constant multiplier", "Where a line adds the same amount each step, an \\textbf{exponential function} $y=a\\,b^x$ \\emph{multiplies} by $b$ each step, giving rapid growth or decay."],
    ["Reading the graph", "Every such curve passes through $(0,a)$ and hugs the horizontal asymptote $y=0$ without ever crossing it."],
    ["Growth or decay", "A base $b>1$ makes the curve climb; a base $0<b<1$ makes it fall. The further $b$ sits from $1$, the steeper the change."],
  ],
  "1.3": [
    ["Moving the base curve", "Writing $y=a\\,b^{\\,k(x-d)}+c$ shows how the standard exponential is shifted and stretched; the $+c$ lifts the asymptote to $y=c$."],
    ["Each letter's job", "$a$ scales height (and flips the curve if negative), $k$ scales width, and $d$ slides it sideways — recall $(x-d)$ moves it right."],
    ["Intercepts and range", "Substitute $x=0$ for the $y$-intercept; the range is $y>c$ when $a>0$ and $y<c$ when $a<0$."],
  ],
  "1.4": [
    ["Matching the bases", "If both sides can be written as powers of the \\emph{same} base, their exponents must be equal — turning an exponential equation into a linear one."],
    ["Spot the hidden powers", "Rewrite numbers as powers first: $8=2^3$, $27=3^3$, $\\tfrac14=2^{-2}$. Then equate the exponents and solve."],
    ["When it applies", "This works only when a common base exists; otherwise logarithms are needed, which come up next."],
  ],
  "1.5": [
    ["A logarithm is an exponent", "$\\log_b x$ answers \\emph{to what power must $b$ be raised to give $x$?} So $\\log_2 8=3$ because $2^3=8$."],
    ["Switching forms", "The statements $\\log_b x=y$ and $b^{\\,y}=x$ say the same thing; moving fluently between them is the key skill."],
    ["Common and natural logs", "$\\log x$ means base $10$ and $\\ln x$ means base $e$ — the two logarithms a calculator gives directly."],
  ],
  "1.6": [
    ["Products, quotients, powers", "Logarithms turn multiplication into addition: $\\log_b(MN)=\\log_b M+\\log_b N$, $\\log_b\\tfrac{M}{N}=\\log_b M-\\log_b N$, and $\\log_b M^p=p\\log_b M$."],
    ["Expanding and condensing", "Read the laws left-to-right to \\emph{expand} one log into several, or right-to-left to \\emph{condense} several into one."],
    ["Change of base", "Any logarithm evaluates on a calculator through $\\log_b x=\\dfrac{\\log x}{\\log b}$."],
  ],
  "1.7": [
    ["When bases will not match", "With no common base available, take the logarithm of both sides; the power law then brings the exponent down as a multiplier."],
    ["The key step", "From $b^x=k$ you get $x\\log b=\\log k$, so $x=\\dfrac{\\log k}{\\log b}$. Isolate the power before taking logs."],
    ["Applied equations", "Interest and growth equations such as $P(1+r)^t=A$ are solved this way once the exponential term stands alone."],
  ],
  "1.8": [
    ["Percentage change over time", "Repeated percentage change follows $A=A_0 b^{\\,t}$: use $b=1+r$ for growth and $b=1-r$ for decay."],
    ["Half-life and doubling", "A half-life model uses $\\left(\\tfrac12\\right)^{t/h}$ and a doubling model uses $2^{\\,t/d}$ — each tracking change over a fixed interval."],
    ["Compound interest", "Interest that compounds grows by $A=P(1+i)^n$; solving for the number of periods $n$ calls for logarithms."],
  ],
  // ── Unit 2: Polynomial Functions ───────────────────────────
  "2.1": [
    ["What counts as a polynomial", "A \\textbf{polynomial} uses only whole-number exponents and real coefficients — no variables under roots or in denominators."],
    ["Degree and leading coefficient", "The \\textbf{degree} is the highest exponent and the \\textbf{leading coefficient} multiplies it; together they set much of the function's behaviour."],
    ["Evaluating", "Function notation $P(a)$ means substitute $x=a$ — the basis for the remainder and factor theorems later in this unit."],
  ],
  "2.2": [
    ["End behaviour", "The degree's parity and the leading coefficient's sign fix the ends: even degrees send both ends the same way, odd degrees send them opposite ways."],
    ["Intercepts and turns", "A degree-$n$ polynomial has at most $n$ $x$-intercepts and $n-1$ turning points, so the degree caps the graph's complexity."],
    ["Zeros and multiplicity", "At a zero of odd multiplicity the graph crosses the axis; at even multiplicity it touches and turns back."],
  ],
  "2.3": [
    ["Factors reveal zeros", "In $y=a(x-r)(x-s)\\cdots$, each factor $(x-r)$ marks a zero at $x=r$ — the values that make the polynomial $0$."],
    ["Multiplicity and shape", "A repeated factor gives a repeated zero: odd multiplicity crosses the axis, even multiplicity only touches it."],
    ["Fixing the leading coefficient", "One extra known point determines $a$, pinning down the exact polynomial through those zeros."],
  ],
  "2.4": [
    ["The division statement", "Dividing gives $P(x)=D(x)Q(x)+R$, where the remainder $R$ has a lower degree than the divisor $D$."],
    ["Synthetic division", "For a divisor $x-a$, synthetic division is a fast shortcut: bring down, multiply by $a$, add, and repeat."],
    ["Watch the gaps", "Insert a $0$ coefficient for any missing power so the columns stay aligned throughout the division."],
  ],
  "2.5": [
    ["A shortcut for remainders", "The \\textbf{remainder theorem} says the remainder of $P(x)\\div(x-a)$ is simply $P(a)$ — one substitution instead of a full division."],
    ["Finding unknowns", "Setting $P(a)$ equal to a given remainder produces an equation you can solve for an unknown coefficient."],
    ["Divisors like $bx-a$", "For a divisor $bx-a$, evaluate at $x=\\dfrac{a}{b}$ to obtain the remainder."],
  ],
  "2.6": [
    ["Zero remainder means a factor", "$x-a$ is a factor of $P(x)$ exactly when $P(a)=0$ — the factor theorem is the remainder theorem with remainder zero."],
    ["Finding a first factor", "Test the factors of the constant term as candidate zeros; a value giving $P(a)=0$ hands you a factor to divide out."],
    ["Factoring completely", "After dividing out one factor, factor the leftover quotient — often a quadratic — to finish the job."],
  ],
  "2.7": [
    ["Set to zero, then factor", "Move everything to one side, factor completely, and apply the zero-product property: a product is $0$ only when a factor is."],
    ["Repeated and hidden roots", "A repeated factor gives a repeated root, while an equation that is quadratic in $x^2$ yields to a substitution."],
    ["Real roots only", "Some factors are irreducible over the reals, so a degree-$n$ equation can have fewer than $n$ real solutions."],
  ],
  "2.8": [
    ["Modelling with polynomials", "Volumes, projectile heights, and design quantities often form a polynomial; define the variable and write the relation."],
    ["Solving in context", "Factor and solve, then keep only the physically sensible roots — lengths and times must be positive."],
    ["Interpreting the answer", "Match the question to the feature: a maximum points to a turning point, a landing or break-even to a zero."],
  ],
  // ── Unit 3: Trigonometric Functions ────────────────────────
  "3.1": [
    ["Angles all the way round", "Trig ratios extend past $90^\\circ$ using a \\textbf{reference angle} to a special value, plus a sign set by the quadrant."],
    ["The CAST rule", "\\textbf{CAST} shows which ratio is positive where: all in QI, sine in QII, tangent in QIII, cosine in QIV."],
    ["Solving for angles", "To solve $\\cos\\theta=-\\tfrac12$, find the reference angle, then list every quadrant whose sign matches."],
  ],
  "3.2": [
    ["A law for any triangle", "The \\textbf{sine law} $\\dfrac{a}{\\sin A}=\\dfrac{b}{\\sin B}=\\dfrac{c}{\\sin C}$ links each side to the sine of its opposite angle."],
    ["When to use it", "It applies when you know a side and its opposite angle, plus one more piece of information."],
    ["The ambiguous case", "With two sides and a non-included angle, there can be zero, one, or two triangles — always test for a second angle."],
  ],
  "3.3": [
    ["Pythagoras generalized", "The \\textbf{cosine law} $a^2=b^2+c^2-2bc\\cos A$ handles triangles the sine law cannot start, and collapses to Pythagoras at $90^\\circ$."],
    ["Two situations", "Use it with two sides and the included angle (SAS) to find the third side, or with all three sides (SSS) to find an angle."],
    ["Largest angle first", "When solving SSS, find the largest angle (opposite the longest side) first to keep the remaining work clean."],
  ],
  "3.4": [
    ["From words to a triangle", "Surveying and navigation problems become oblique triangles: sketch, label the known parts, then choose the sine or cosine law."],
    ["Bearings and elevations", "Convert a bearing (clockwise from north) or an angle of elevation into an interior angle of the triangle."],
    ["Area from two sides", "The area of any triangle from two sides and their included angle is $\\tfrac12ab\\sin C$."],
  ],
  "3.5": [
    ["The wave shape", "Sine and cosine graphs are smooth repeating waves; describe each by its \\textbf{amplitude}, \\textbf{period}, and \\textbf{midline}."],
    ["Reading the numbers", "In $y=a\\sin x+c$, the amplitude is $|a|$, the midline is $y=c$, and in degrees the base period is $360^\\circ$."],
    ["Effect of a coefficient", "A coefficient $k$ on $x$ changes the period to $\\dfrac{360^\\circ}{|k|}$ — the larger $k$, the shorter the waves."],
  ],
  "3.6": [
    ["The full form", "$y=a\\sin\\!\\left(k(x-d)\\right)+c$ carries every feature: amplitude $|a|$, period $\\tfrac{360^\\circ}{|k|}$, phase shift $d$, and midline $c$."],
    ["Factor before reading", "Factor out $k$ so the inside reads $k(x-d)$; only then does $d$ give the true horizontal shift."],
    ["Max, min, range", "The maximum is $c+|a|$ and the minimum $c-|a|$, so the range runs between them."],
  ],
  "3.7": [
    ["Turning cycles into equations", "Repeating data — tides, wheels, temperatures — fits $y=a\\sin\\!\\left(k(x-d)\\right)+c$ with $c=\\tfrac{\\max+\\min}{2}$ and $a=\\tfrac{\\max-\\min}{2}$."],
    ["Setting the period", "Read $k$ from the cycle length: $k=\\dfrac{360^\\circ}{\\text{period}}$, keeping time in the stated units."],
    ["Choosing the start", "Use $-\\cos$ to begin at a minimum and $+\\cos$ to begin at a maximum, matching the model to the situation."],
  ],
  // ── Unit 4: Vectors & Geometry ─────────────────────────────
  "4.1": [
    ["Size and direction", "A \\textbf{vector} carries both a magnitude and a direction, unlike a plain number (a scalar). Displacement, velocity, and force are all vectors."],
    ["Magnitude and components", "From components $(x,y)$ the magnitude is $\\sqrt{x^2+y^2}$; from a magnitude $m$ at angle $\\theta$ the components are $(m\\cos\\theta,\\ m\\sin\\theta)$."],
    ["Direction and unit vectors", "The direction is the angle to the positive $x$-axis, and dividing a vector by its magnitude gives a \\textbf{unit vector} that keeps only direction."],
  ],
  "4.2": [
    ["Combining component-wise", "Add or subtract vectors by combining their $x$- and $y$-components separately, then take the magnitude of the result."],
    ["The resultant", "Geometrically, vectors join tip-to-tail; the single vector from start to finish is the \\textbf{resultant}."],
    ["Angle between them", "For two vectors at angle $\\theta$, the resultant magnitude is $\\sqrt{a^2+b^2+2ab\\cos\\theta}$ — largest when they are parallel."],
  ],
  "4.3": [
    ["Forces and velocities", "Real problems combine vectors: a plane's velocity plus a wind, or several forces on an object, add to a single resultant."],
    ["Perpendicular components", "Crosswinds and currents meet the main motion at right angles, so the resultant speed is $\\sqrt{a^2+b^2}$ with drift angle $\\tan^{-1}\\tfrac{\\text{cross}}{\\text{main}}$."],
    ["Equilibrium", "When forces balance, their resultant is zero; the \\textbf{equilibrant} is the single force that produces that balance."],
  ],
  "4.4": [
    ["Decompose the region", "Break a complex shape into rectangles, triangles, trapezoids, and circles, then add the pieces — or subtract a cut-out."],
    ["Formulas to keep handy", "Rectangle $lw$, triangle $\\tfrac12bh$, trapezoid $\\tfrac12(a+b)h$, and circle $\\pi r^2$ cover most composite regions."],
    ["Add or subtract", "Removed or hollow parts are subtracted, while a semicircular end or an attached triangle is added."],
  ],
  "4.5": [
    ["Arcs and sectors", "For a central angle $\\theta$ (degrees), the arc length is $\\tfrac{\\theta}{360}\\,2\\pi r$ and the sector area is $\\tfrac{\\theta}{360}\\,\\pi r^2$ — fractions of the whole circle."],
    ["Inscribed angles", "An inscribed angle is half its central angle on the same arc, so an angle inscribed in a semicircle is $90^\\circ$."],
    ["Whole-circle basics", "Circumference $2\\pi r$ and area $\\pi r^2$ anchor every arc and sector calculation."],
  ],
  "4.6": [
    ["Volume of common solids", "Prisms and cylinders hold (base area)$\\times$height; cones and pyramids hold one-third of that; a sphere holds $\\tfrac43\\pi r^3$."],
    ["Surface area", "Add every outer face: a closed cylinder is $2\\pi r^2+2\\pi rh$, a cone is $\\pi r^2+\\pi r\\ell$, and a sphere is $4\\pi r^2$."],
    ["Slant height", "A cone's slant height comes from its radius and height, $\\ell=\\sqrt{r^2+h^2}$, and is needed for the lateral surface."],
  ],
  "4.7": [
    ["Solids built from parts", "Real objects combine solids — a silo is a cylinder plus a hemisphere, a machined block a prism with a drilled hole."],
    ["Add or subtract volumes", "Total the parts' volumes, or subtract the volume of a hole; a hemisphere contributes $\\tfrac23\\pi r^3$."],
    ["Mind the shared faces", "When solids join, ignore the internal faces where they meet — only outer surfaces count toward surface area."],
  ],
};

export default LEARN;
