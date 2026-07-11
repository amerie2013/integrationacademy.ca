// "The Big Picture" teaching sections for MCV4U worksheets, keyed by code.
// build.mjs renders LEARN[code] as a green learnbox before the Worked Examples.
// LaTeX content; each entry is an array of [heading, bodyLaTeX] blocks.

export const LEARN = {
  // ── Unit 1: Rates of Change & Limits ───────────────────────
  "1.1": [
    ["Two kinds of rate", "The \\textbf{average rate of change} of $f$ over $[a,b]$ is the secant slope $\\dfrac{f(b)-f(a)}{b-a}$; the \\textbf{instantaneous rate} is the slope at a single point."],
    ["Secant to tangent", "As the interval shrinks toward a point, the secant line approaches the \\textbf{tangent} line — the geometric idea behind the derivative."],
    ["Estimating", "Compute average rates over ever-smaller intervals to close in on the instantaneous rate at a point."],
  ],
  "1.2": [
    ["What a limit is", "$\\displaystyle\\lim_{x\\to a}f(x)=L$ means $f(x)$ gets arbitrarily close to $L$ as $x$ approaches $a$ — regardless of the value (or gap) at $a$ itself."],
    ["One-sided limits", "The limit exists only when the left-hand and right-hand limits agree; a jump between them means the limit does not exist."],
    ["Indeterminate forms", "A form like $\\tfrac00$ signals more work — factor, rationalize, or simplify first, then substitute."],
  ],
  "1.3": [
    ["Continuity", "A function is \\textbf{continuous} at $a$ when $\\lim_{x\\to a}f(x)=f(a)$ — no holes, jumps, or breaks in the graph there."],
    ["Limit laws", "Limits distribute over sums, products, and quotients, so a complicated limit can be broken into simpler pieces."],
    ["Evaluating", "For continuous functions a limit is found by direct substitution; only breaks require closer analysis."],
  ],
  "1.4": [
    ["The definition", "The \\textbf{derivative} is $f'(x)=\\displaystyle\\lim_{h\\to0}\\dfrac{f(x+h)-f(x)}{h}$ — the limit of the secant slope as the interval collapses to zero."],
    ["What it measures", "$f'(x)$ gives the instantaneous rate of change, equivalently the slope of the tangent line at $x$."],
    ["First principles", "Computing this limit directly is differentiating from \\emph{first principles}, and it justifies the shortcut rules that follow."],
  ],
  // ── Unit 2: Derivative Rules ───────────────────────────────
  "2.1": [
    ["The power rule", "For $f(x)=x^n$ the derivative is $f'(x)=nx^{\\,n-1}$ — the workhorse of differentiation."],
    ["Constants and sums", "A constant multiple factors out, $\\dfrac{d}{dx}[cf]=cf'$, and derivatives add term by term, $\\dfrac{d}{dx}[f+g]=f'+g'$."],
    ["Together", "These rules differentiate any polynomial instantly, one term at a time."],
  ],
  "2.2": [
    ["Products", "The derivative of a product is \\emph{not} the product of derivatives: $\\dfrac{d}{dx}[fg]=f'g+fg'$."],
    ["Quotients", "For a quotient, $\\dfrac{d}{dx}\\!\\left[\\dfrac{f}{g}\\right]=\\dfrac{f'g-fg'}{g^2}$ — mind the order in the numerator."],
    ["Choosing a rule", "Identify the structure first: a product calls for the product rule, a fraction for the quotient rule."],
  ],
  "2.3": [
    ["Differentiating a composition", "The \\textbf{chain rule} handles a function inside a function: $\\dfrac{d}{dx}f(g(x))=f'(g(x))\\cdot g'(x)$."],
    ["Outside times inside", "Differentiate the outer function while keeping the inner intact, then multiply by the derivative of the inner."],
    ["Layer by layer", "For nested functions, apply the chain rule repeatedly, working from the outermost layer inward."],
  ],
  "2.4": [
    ["Rewrite then differentiate", "Rational and radical functions are easiest as powers: write $\\dfrac{1}{x}=x^{-1}$ and $\\sqrt{x}=x^{1/2}$, then apply the power rule."],
    ["Combine rules", "These often need the chain, product, or quotient rule together — identify the structure before differentiating."],
    ["Higher-order derivatives", "Differentiating again gives $f''(x)$, the rate of change of the slope, and so on for further derivatives."],
  ],
  // ── Unit 3: Derivatives of Special Functions ───────────────
  "3.1": [
    ["The trig derivatives", "$\\dfrac{d}{dx}\\sin x=\\cos x$ and $\\dfrac{d}{dx}\\cos x=-\\sin x$ — note the sign that appears with cosine."],
    ["Radians required", "These formulas hold only when $x$ is measured in \\textbf{radians}, which is why calculus works in radian mode."],
    ["With the chain rule", "For a composition, $\\dfrac{d}{dx}\\sin(g(x))=\\cos(g(x))\\,g'(x)$."],
  ],
  "3.2": [
    ["The special base $e$", "The exponential $e^x$ is its own derivative: $\\dfrac{d}{dx}e^x=e^x$, which is why $e$ is calculus's natural base."],
    ["Other bases", "For a general base, $\\dfrac{d}{dx}b^x=b^x\\ln b$ — the extra factor $\\ln b$ appears."],
    ["With the chain rule", "$\\dfrac{d}{dx}e^{g(x)}=e^{g(x)}\\,g'(x)$, multiplying by the derivative of the exponent."],
  ],
  "3.3": [
    ["The natural log", "$\\dfrac{d}{dx}\\ln x=\\dfrac{1}{x}$ — the derivative that fills the gap the power rule leaves at $x^{-1}$."],
    ["General logs", "$\\dfrac{d}{dx}\\log_b x=\\dfrac{1}{x\\ln b}$, with the factor $\\ln b$ coming from the change of base."],
    ["With the chain rule", "$\\dfrac{d}{dx}\\ln(g(x))=\\dfrac{g'(x)}{g(x)}$, dividing by the inside function."],
  ],
  // ── Unit 4: Curve Analysis ─────────────────────────────────
  "4.1": [
    ["Sign of the derivative", "Where $f'(x)>0$ the function \\textbf{increases}; where $f'(x)<0$ it \\textbf{decreases}. The derivative's sign reads the graph's direction."],
    ["Critical numbers", "Points where $f'(x)=0$ or is undefined are \\textbf{critical numbers} — the only places a local max or min can occur."],
    ["The first derivative test", "If $f'$ changes from $+$ to $-$ at a critical number it is a local maximum; from $-$ to $+$ it is a local minimum."],
  ],
  "4.2": [
    ["What concavity means", "\\textbf{Concave up} curves like a cup ($f''>0$); \\textbf{concave down} curves like a cap ($f''<0$). The second derivative reads the bend."],
    ["Inflection points", "Where concavity changes sign is an \\textbf{inflection point} — the curve switches from cupping up to down or vice versa."],
    ["The second derivative test", "At a critical number, $f''>0$ signals a local minimum and $f''<0$ a local maximum."],
  ],
  "4.3": [
    ["Gathering the features", "A full analysis collects critical numbers, inflection points, intercepts, and the behaviour as $x\\to\\pm\\infty$."],
    ["Asymptotes and limits", "Limits at infinity reveal horizontal asymptotes, while limits at breaks reveal vertical ones."],
    ["A complete picture", "Together these features describe every important part of the graph before you draw it."],
  ],
  "4.4": [
    ["A systematic method", "Curve sketching combines the whole toolkit: domain, intercepts, asymptotes, $f'$ for increase/decrease, and $f''$ for concavity."],
    ["Assemble the evidence", "Mark critical points, inflection points, and asymptotes, then record the sign of $f'$ and $f''$ on each interval."],
    ["Then draw", "Only after gathering every feature do you sketch — the graph is the summary, not the starting point."],
  ],
  // ── Unit 5: Applications of Derivatives ────────────────────
  "5.1": [
    ["Best possible value", "\\textbf{Optimization} finds a maximum or minimum in a real situation — largest area, least cost, shortest time."],
    ["The strategy", "Write the quantity to optimize as a function of one variable (using any constraint), then find its critical points on the valid domain."],
    ["Confirm the extreme", "Use the first or second derivative test, and check the endpoints, to confirm you found the true maximum or minimum."],
  ],
  "5.2": [
    ["Rates linked in time", "In a \\textbf{related rates} problem several quantities change together over time, and their rates are connected by an equation."],
    ["Differentiate implicitly", "Differentiate the relating equation with respect to time $t$, so each variable's rate appears through the chain rule."],
    ["Substitute last", "Plug in the known values only \\emph{after} differentiating, then solve for the unknown rate."],
  ],
  "5.3": [
    ["Position, velocity, acceleration", "If $s(t)$ is position, then velocity is $v(t)=s'(t)$ and acceleration is $a(t)=v'(t)=s''(t)$ — each a derivative of the last."],
    ["Reading motion", "Velocity's sign gives direction; where $v=0$ the object is momentarily at rest and may turn around."],
    ["Speeding up or slowing", "The object speeds up when velocity and acceleration share a sign, and slows when their signs differ."],
  ],
  // ── Unit 6: Vectors ────────────────────────────────────────
  "6.1": [
    ["Magnitude and direction", "A \\textbf{vector} has both size and direction, unlike a scalar. Displacement, velocity, and force are vector quantities."],
    ["Representing vectors", "Draw a vector as a directed arrow; two vectors are equal when they share magnitude and direction, wherever they are placed."],
    ["Special vectors", "The \\textbf{zero vector} has no length, and the opposite of a vector reverses its direction."],
  ],
  "6.2": [
    ["Adding vectors", "Add vectors \\textbf{tip-to-tail}: the resultant runs from the first tail to the last tip. The parallelogram rule gives the same result."],
    ["Scalar multiples", "Multiplying by a scalar scales the length and, if negative, reverses the direction while keeping the line of action."],
    ["Subtraction", "Subtracting a vector means adding its opposite, which the triangle of vectors makes easy to picture."],
  ],
  "6.3": [
    ["Component form", "A \\textbf{Cartesian vector} is written by components, $\\vec v=(x,y)$ or $(x,y,z)$, making calculations algebraic rather than geometric."],
    ["Magnitude", "The magnitude is $\\sqrt{x^2+y^2}$ in 2-D and $\\sqrt{x^2+y^2+z^2}$ in 3-D — the distance formula in vector form."],
    ["Operations by component", "Add, subtract, and scale vectors component by component; a unit vector is the vector divided by its magnitude."],
  ],
  "6.4": [
    ["Multiplying to a scalar", "The \\textbf{dot product} $\\vec u\\cdot\\vec v=u_1v_1+u_2v_2+\\cdots$ produces a \\emph{scalar}, not a vector."],
    ["The angle connection", "It also equals $|\\vec u|\\,|\\vec v|\\cos\\theta$, so it measures how aligned two vectors are and gives the angle between them."],
    ["Perpendicular test", "Two nonzero vectors are perpendicular exactly when their dot product is $0$."],
  ],
  "6.5": [
    ["Multiplying to a vector", "The \\textbf{cross product} $\\vec u\\times\\vec v$ produces a \\emph{vector} perpendicular to both $\\vec u$ and $\\vec v$ in 3-D."],
    ["Magnitude and area", "Its magnitude $|\\vec u|\\,|\\vec v|\\sin\\theta$ equals the area of the parallelogram the two vectors span."],
    ["Direction", "The right-hand rule fixes the direction, and $\\vec u\\times\\vec v=-\\,\\vec v\\times\\vec u$ — order matters."],
  ],
  // ── Unit 7: Lines & Planes ─────────────────────────────────
  "7.1": [
    ["Point and direction", "A line is fixed by a point on it and a \\textbf{direction vector}; the \\textbf{vector equation} is $\\vec r=\\vec r_0+t\\,\\vec d$."],
    ["Parametric form", "Splitting into components gives the \\textbf{parametric equations}, each coordinate written in terms of the parameter $t$."],
    ["2-D vs 3-D", "In 2-D a line also has scalar and symmetric forms; in 3-D the vector and parametric forms are the natural description."],
  ],
  "7.2": [
    ["Point and normal", "A plane is fixed by a point and a \\textbf{normal vector} perpendicular to it; the normal's components give the \\textbf{scalar equation} $ax+by+cz+d=0$."],
    ["Vector and parametric forms", "Using two direction vectors lying in the plane, $\\vec r=\\vec r_0+s\\,\\vec u+t\\,\\vec v$ describes every point on it."],
    ["Reading the normal", "The coefficients $(a,b,c)$ in the scalar equation are exactly the components of the normal vector."],
  ],
  "7.3": [
    ["What can happen", "Two lines, a line and a plane, or two planes can \\textbf{intersect} in a point or line, be \\textbf{parallel}, or (lines only) be \\textbf{skew}."],
    ["Solving", "Substitute the line's parametric form into the plane's equation, or solve the system of equations, to find any intersection."],
    ["Interpreting the outcome", "No solution means parallel or skew; a unique solution gives a point; infinitely many means the objects coincide or a line lies in a plane."],
  ],
};

export default LEARN;
