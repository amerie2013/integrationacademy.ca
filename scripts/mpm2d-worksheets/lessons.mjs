// "Concept Spotlight" teaching sections for MPM2D worksheets, keyed by code.
// build.mjs renders LEARN[code] as a green learnbox before the Worked Examples.
// LaTeX content ($...$ math, \textbf{}, \emph{}, \dfrac, ...). Each entry is an
// array of [heading, bodyLaTeX] blocks. Original wording per course.

export const LEARN = {
  // ── Unit 1: Linear Systems ─────────────────────────────────
  "1.2": [
    ["What a system is", "A \\textbf{linear system} is two lines considered together. Its \\textbf{solution} is the point $(x,y)$ that lies on \\emph{both} lines — the coordinates that satisfy both equations at once."],
    ["Reading the intersection", "Graph both lines on the same grid; where they cross is the solution. Always check by substituting that point back into both equations."],
    ["Its limits", "Graphing shows the idea clearly, but it is only as accurate as your reading of the grid — fractional or large solutions call for an algebraic method."],
  ],
  "1.3": [
    ["The idea", "\\textbf{Substitution} turns two equations into one: solve one equation for a variable, then replace that variable in the other equation, leaving a single equation in one unknown."],
    ["The steps", "Isolate $x$ or $y$ (whichever is easiest), substitute the expression into the second equation, solve it, then back-substitute to find the other variable."],
    ["When to use it", "Substitution shines when one variable already has a coefficient of $1$, so isolating it introduces no fractions."],
  ],
  "1.4": [
    ["The idea", "\\textbf{Elimination} adds or subtracts the two equations to cancel one variable. If needed, multiply an equation first so a pair of coefficients line up."],
    ["The steps", "Stack the equations, scale one or both so a variable's coefficients are equal or opposite, add or subtract to eliminate it, solve, then back-substitute."],
    ["Choosing a method", "Elimination is often fastest when no variable is already isolated, especially when the coefficients share a simple multiple."],
  ],
  "1.5": [
    ["Modelling with two equations", "A word problem with two unknowns becomes a system: assign a variable to each unknown, then translate each condition into an equation."],
    ["Common setups", "Mixture, distance, and cost problems usually give one equation for a total (quantity) and one for a value (cost, speed, or concentration)."],
    ["Finish and check", "Solve by substitution or elimination, then confirm the answer makes sense in the original words — not just in the algebra."],
  ],
  "1.6": [
    ["Three possibilities", "Two lines can meet once (\\textbf{one solution}), never (\\textbf{no solution} — parallel), or lie exactly on top of each other (\\textbf{infinitely many} — the same line)."],
    ["Reading from slopes", "Different slopes give one solution. Same slope but different intercept means parallel, no solution. Same slope \\emph{and} intercept means infinitely many."],
    ["From the algebra", "If solving leads to a true statement like $3=3$, there are infinitely many solutions; a false one like $3=5$ means none."],
  ],
  // ── Unit 2: Analytic Geometry ──────────────────────────────
  "2.1": [
    ["The idea", "The \\textbf{midpoint} is the exact centre of a segment — simply the average of the two endpoints' coordinates."],
    ["The formula", "For endpoints $(x_1,y_1)$ and $(x_2,y_2)$, the midpoint is $\\left(\\dfrac{x_1+x_2}{2},\\ \\dfrac{y_1+y_2}{2}\\right)$."],
    ["Working backwards", "Given a midpoint and one endpoint, find the other by treating each coordinate as an average and solving for the missing value."],
  ],
  "2.2": [
    ["The idea", "The \\textbf{length} between two points comes straight from the Pythagorean theorem applied to the horizontal and vertical gaps."],
    ["The formula", "$d=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$: the coordinate differences are the legs of a right triangle, and the segment is its hypotenuse."],
    ["Uses", "Distances let you classify triangles as isosceles or equilateral, and test whether points sit on a circle of a given radius."],
  ],
  "2.3": [
    ["The idea", "A circle centred at the origin is the set of all points a fixed distance $r$ — the radius — from $(0,0)$."],
    ["The equation", "By the distance formula that condition becomes $x^2+y^2=r^2$; the radius is the square root of the right side."],
    ["Reading it", "From $x^2+y^2=25$ the radius is $5$. To test a point, substitute it: equal to $r^2$ is on the circle, less is inside, greater is outside."],
  ],
  "2.4": [
    ["Three special lines", "In a triangle, a \\textbf{median} joins a vertex to the midpoint of the opposite side, a \\textbf{right bisector} crosses a side at $90^\\circ$ through its midpoint, and an \\textbf{altitude} runs from a vertex perpendicular to the opposite side."],
    ["Building each", "Use the midpoint formula for medians and bisectors, and slopes for perpendicularity: an altitude or bisector takes the \\emph{negative reciprocal} of the side's slope."],
    ["Then the equation", "With a point and a slope in hand, write each line as $y=mx+b$ — the tools are just midpoint, slope, and the equation of a line."],
  ],
  "2.5": [
    ["Proof with coordinates", "\\textbf{Analytic geometry} proves geometric claims using algebra: place the figure on a grid, then compute lengths, midpoints, and slopes."],
    ["The toolkit", "Equal \\textbf{lengths} reveal an isosceles shape or a rhombus; equal \\textbf{slopes} show parallel sides; \\emph{negative-reciprocal} slopes show a right angle."],
    ["A tidy argument", "State what you will show, compute the quantities you need, then conclude — a coordinate proof is simply organized calculation."],
  ],
  "2.6": [
    ["Combining the tools", "Richer problems mix midpoint, length, slope, and intersection. Sketch the situation first, then choose the tool each part needs."],
    ["Typical tasks", "Finding where a median meets a side, the centre of a circle through given points, or the shortest distance from a point to a line all reduce to these basics."],
    ["Plan before computing", "Decide the order of steps up front — often a midpoint or slope, then an equation, then an intersection — to keep the algebra under control."],
  ],
  // ── Unit 3: Algebraic Expressions ──────────────────────────
  "3.1": [
    ["Distributing", "To \\textbf{expand}, multiply every term of one factor by every term of the other, then collect like terms. The distributive property does all the work."],
    ["Binomials", "For two binomials, use \\textbf{FOIL} — First, Outer, Inner, Last: $(x+3)(x+5)=x^2+8x+15$."],
    ["Stay organized", "With larger products, multiply systematically so no pair is missed, and track signs carefully when a term is negative."],
  ],
  "3.2": [
    ["Factoring is un-expanding", "\\textbf{Factoring} rewrites a sum as a product. Always pull out the \\textbf{greatest common factor} first: $6x^2+9x=3x(2x+3)$."],
    ["Grouping", "With four terms, \\textbf{group} them in pairs, factor each pair, then factor out the shared binomial: $x^3+2x^2+3x+6=(x^2+3)(x+2)$."],
    ["Check by expanding", "Multiply your factors back out; recovering the original expression confirms the factoring is right."],
  ],
  "3.3": [
    ["The target", "To factor $x^2+bx+c$, find two numbers that \\textbf{multiply to $c$} and \\textbf{add to $b$}; they become the constants in $(x+\\ )(x+\\ )$."],
    ["Signs guide the search", "If $c>0$ the two numbers share $b$'s sign; if $c<0$ they have opposite signs. This quickly narrows the pairs to test."],
    ["Verify", "Expand your answer with FOIL to make sure the middle term $bx$ comes back."],
  ],
  "3.4": [
    ["The extra challenge", "When the leading coefficient is not $1$ (as in $ax^2+bx+c$), factoring is harder because $a$ also splits across the two factors."],
    ["Decomposition", "Find two numbers that multiply to $a\\cdot c$ and add to $b$, split the middle term into those two, then factor by grouping."],
    ["Guess and check", "With practice you can test factor pairs of $a$ and $c$ directly, expanding mentally until the middle term matches."],
  ],
  "3.5": [
    ["Patterns worth knowing", "Two products appear so often they are worth recognizing instantly: the \\textbf{perfect square} $(a\\pm b)^2=a^2\\pm 2ab+b^2$ and the \\textbf{difference of squares} $(a+b)(a-b)=a^2-b^2$."],
    ["Why they help", "Spotting them speeds up both expanding and factoring — $x^2-9$ is at once $(x+3)(x-3)$."],
    ["A common trap", "$(a+b)^2\\ne a^2+b^2$: the middle term $2ab$ is essential and must never be dropped."],
  ],
  // ── Unit 4: Quadratic Relations ────────────────────────────
  "4.1": [
    ["What makes it quadratic", "A \\textbf{quadratic relation} contains a squared variable, and its graph is a \\textbf{parabola} — a smooth U-shaped curve rather than a line."],
    ["Spotting one", "In a table, quadratics have equal \\textbf{second differences} (the differences of the first differences), just as linear relations have equal first differences."],
    ["Where they appear", "Falling objects, projectile paths, and areas all follow quadratic relations."],
  ],
  "4.2": [
    ["The landmarks", "Every parabola has a \\textbf{vertex} (its highest or lowest point), an \\textbf{axis of symmetry} through the vertex, a \\textbf{$y$-intercept}, and often \\textbf{$x$-intercepts} — the zeros."],
    ["Opening and width", "The sign of the leading coefficient decides whether the parabola opens up or down, and its size controls how narrow or wide the curve is."],
    ["Symmetry", "A parabola mirrors itself across its axis, so points equally far left and right of the vertex have the same height."],
  ],
  "4.3": [
    ["Vertex form", "$y=a(x-h)^2+k$ puts the vertex at $(h,k)$ and displays every transformation at a glance."],
    ["Reading the parameters", "$a$ stretches and, if negative, flips the parabola; $h$ shifts it right; $k$ shifts it up. Mind the minus sign: $(x-3)$ means right $3$."],
    ["Building a graph", "From vertex form, plot the vertex, then use $a$ and symmetry to place a few points on each side."],
  ],
  "4.4": [
    ["Start at the vertex", "Plot $(h,k)$ first and draw the axis of symmetry; everything else is measured out from there."],
    ["Use the step pattern", "From the vertex, the curve rises by $a\\cdot1,\\ a\\cdot4,\\ a\\cdot9$ as you step out $1,2,3$ units — then mirror those points on the other side."],
    ["Sketch smoothly", "Join the points in a smooth curve, not straight segments, and label the vertex and intercepts."],
  ],
  "4.5": [
    ["Factored form", "$y=a(x-r)(x-s)$ shows the \\textbf{zeros} $r$ and $s$ directly — the $x$-values that make $y=0$."],
    ["Finding the vertex", "The axis of symmetry sits halfway between the zeros, at $x=\\dfrac{r+s}{2}$; substitute it to get the vertex's height."],
    ["Why zeros matter", "Zeros answer real questions — when a ball lands, when profit is zero — so factored form is ideal for them."],
  ],
  "4.6": [
    ["Standard form", "$y=ax^2+bx+c$ shows the $y$-intercept $c$ at once, but hides the vertex and the zeros."],
    ["Switching forms", "\\textbf{Expand} vertex or factored form to reach standard form; \\textbf{factor} or \\textbf{complete the square} to go back. Each form answers a different question."],
    ["The axis shortcut", "From standard form the axis of symmetry is $x=-\\dfrac{b}{2a}$ — a quick route to the vertex."],
  ],
  // ── Unit 5: Quadratic Equations ────────────────────────────
  "5.1": [
    ["Set it to zero", "To solve, first arrange the equation as $ax^2+bx+c=0$. A quadratic equation can have $0$, $1$, or $2$ real solutions."],
    ["Zero-product property", "Factor, then use the fact that a product is $0$ only when a factor is $0$: from $(x-2)(x+5)=0$ you get $x=2$ or $x=-5$."],
    ["When factoring fails", "Not every quadratic factors neatly — if it resists, switch to completing the square or the quadratic formula."],
  ],
  "5.2": [
    ["The goal", "\\textbf{Completing the square} rewrites $ax^2+bx+c$ as $a(x-h)^2+k$, which reveals the vertex and lets you solve by taking a square root."],
    ["The move", "Take half of the $x$-coefficient, square it, and add-and-subtract it to build a perfect-square trinomial."],
    ["Why it matters", "It works on \\emph{every} quadratic and is the reasoning behind the quadratic formula itself."],
  ],
  "5.3": [
    ["A universal tool", "The \\textbf{quadratic formula} $x=\\dfrac{-b\\pm\\sqrt{b^2-4ac}}{2a}$ solves any equation $ax^2+bx+c=0$, whether or not it factors."],
    ["Substitute carefully", "Identify $a$, $b$, and $c$ with their signs, substitute, and simplify; the $\\pm$ produces the two roots."],
    ["Reading the result", "A whole-number answer means the quadratic could have been factored; a surd means it could not."],
  ],
  "5.4": [
    ["The discriminant", "The quantity $D=b^2-4ac$ — the part under the square root — tells you the number of real roots \\emph{before} you solve."],
    ["Three cases", "$D>0$ gives two distinct real roots, $D=0$ gives one repeated root, and $D<0$ gives no real roots (the parabola misses the $x$-axis)."],
    ["Why it is useful", "It answers questions like \\emph{does this parabola touch the axis?} without a full solution."],
  ],
  "5.5": [
    ["Modelling with quadratics", "Areas, projectile heights, and revenue problems often produce a quadratic; define the variable and write the relation."],
    ["Choosing what to solve", "\\emph{Maximum height} or \\emph{best price} asks for the \\textbf{vertex}; \\emph{when it lands} or \\emph{breaks even} asks for the \\textbf{zeros}."],
    ["Keep valid answers", "Discard negative lengths or times — only the solutions that fit the real situation count."],
  ],
  "5.6": [
    ["Two curves meeting", "A \\textbf{linear--quadratic system} pairs a line with a parabola; the solutions are the points they share."],
    ["Solve by substitution", "Substitute the line's expression for $y$ into the parabola to get a quadratic; each root gives one intersection point."],
    ["Count the meetings", "Such a system can meet in $2$, $1$, or $0$ points, matching the discriminant of the resulting quadratic."],
  ],
  // ── Unit 6: Trigonometry ───────────────────────────────────
  "6.1": [
    ["Two relationships", "\\textbf{Congruent} triangles are identical in size and shape; \\textbf{similar} triangles keep the same shape but may differ in size."],
    ["Similar means proportional", "In similar triangles, matching angles are equal and matching sides sit in the same \\textbf{ratio} — the scale factor."],
    ["Why it helps", "Similarity lets you find an unknown length from a smaller or larger copy by setting up a proportion."],
  ],
  "6.2": [
    ["Setting up proportions", "Match corresponding sides of the similar triangles, write a \\textbf{proportion}, then cross-multiply to solve for the unknown."],
    ["Real-world reach", "Shadows, mirrors, and scale drawings all create similar triangles, letting you measure heights and distances indirectly."],
    ["Name sides carefully", "Line up corresponding sides — those opposite equal angles — or the proportion will be set up wrong."],
  ],
  "6.3": [
    ["Sine, cosine, tangent", "In a right triangle the side ratios depend only on an angle: $\\sin=\\dfrac{\\text{opp}}{\\text{hyp}}$, $\\cos=\\dfrac{\\text{adj}}{\\text{hyp}}$, $\\tan=\\dfrac{\\text{opp}}{\\text{adj}}$."],
    ["Remember SOH-CAH-TOA", "The mnemonic \\textbf{SOH-CAH-TOA} packs all three definitions — pair each ratio with the sides it uses."],
    ["Label first", "Relative to the angle you are using, mark the \\emph{opposite}, \\emph{adjacent}, and \\emph{hypotenuse}, then pick the matching ratio."],
  ],
  "6.4": [
    ["Pick the right ratio", "To find a missing side, choose the ratio that involves the known angle, the known side, and the side you want."],
    ["Solve the equation", "Set up the ratio, then multiply or divide to isolate the unknown side, remembering the hypotenuse is the longest side."],
    ["Estimate to check", "A quick sketch tells you whether an answer is reasonable — the side opposite a small angle should come out short."],
  ],
  "6.5": [
    ["Working backwards", "When two sides are known, the angle comes from the \\textbf{inverse} ratios $\\sin^{-1}$, $\\cos^{-1}$, and $\\tan^{-1}$."],
    ["The steps", "Build the correct ratio from the two known sides, then apply the matching inverse function to get the angle."],
    ["Sanity check", "In a right triangle each other angle is between $0^\\circ$ and $90^\\circ$, and the larger side always faces the larger angle."],
  ],
  "6.6": [
    ["Solve the whole triangle", "\\emph{Solving} a right triangle means finding every unknown side and angle, using the trig ratios and the fact that the angles sum to $180^\\circ$."],
    ["Elevation and depression", "Real problems use the \\textbf{angle of elevation} (looking up) or \\textbf{depression} (looking down) from the horizontal to build the triangle."],
    ["Draw, then decide", "Sketch and label the triangle first, then choose the ratio or theorem each step requires."],
  ],
  // ── Unit 7: Sine & Cosine Laws ─────────────────────────────
  "7.1": [
    ["Beyond right triangles", "The \\textbf{sine law} works in \\emph{any} triangle: $\\dfrac{a}{\\sin A}=\\dfrac{b}{\\sin B}=\\dfrac{c}{\\sin C}$, tying each side to the sine of its opposite angle."],
    ["When to use it", "Use it when you know a side and its opposite angle, plus one more fact — the \\textbf{ASA}, \\textbf{AAS}, or \\textbf{SSA} cases."],
    ["Pair them up", "Always match a side with the angle across from it; that opposite pairing is what keeps the ratios equal."],
  ],
  "7.2": [
    ["A generalized Pythagoras", "The \\textbf{cosine law} $a^2=b^2+c^2-2bc\\cos A$ handles triangles where the sine law cannot even start."],
    ["When to use it", "Reach for it with two sides and the angle between them (\\textbf{SAS}), or with all three sides (\\textbf{SSS}) to find an angle."],
    ["Right-angle check", "When $A=90^\\circ$, $\\cos A=0$ and the law collapses to $a^2=b^2+c^2$ — ordinary Pythagoras."],
  ],
  "7.3": [
    ["Match the given information", "Choose the law from what you know: a matched side--angle pair points to the \\textbf{sine law}; SAS or SSS points to the \\textbf{cosine law}."],
    ["A quick decision", "If you can write a complete $\\dfrac{\\text{side}}{\\sin(\\text{opposite angle})}$ ratio, use the sine law; otherwise begin with the cosine law."],
    ["Then continue", "After one law gives a new side or angle, the sine law is usually easiest for the remaining unknowns."],
  ],
  "7.4": [
    ["Modelling with triangles", "Surveying, navigation, and structural problems become oblique triangles — sketch and label them, then choose a law."],
    ["Bearings and angles", "Convert a \\textbf{bearing} (measured clockwise from north) or an elevation angle into an interior angle of your triangle."],
    ["Finish with meaning", "Solve, then translate the result back into the quantity asked for — a distance, a height, or a heading."],
  ],
};

export default LEARN;
