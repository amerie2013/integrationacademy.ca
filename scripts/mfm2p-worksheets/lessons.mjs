// "Getting the Idea" teaching sections for MFM2P worksheets, keyed by code.
// build.mjs renders LEARN[code] as a green learnbox before the Worked Examples.
// LaTeX content; each entry is an array of [heading, bodyLaTeX] blocks.

export const LEARN = {
  // ── Unit 1: Algebra & Equations ────────────────────────────
  "1.1": [
    ["Expressions and integers", "An \\textbf{expression} combines numbers and variables with operations, while \\textbf{integers} include negatives whose signs follow fixed rules."],
    ["Integer rules", "Same signs multiply or divide to a positive, different signs to a negative; subtracting is adding the opposite, so $5-(-3)=5+3=8$."],
    ["Order of operations", "Follow BEDMAS — brackets, exponents, division and multiplication, then addition and subtraction — to evaluate correctly."],
  ],
  "1.2": [
    ["Like terms", "\\textbf{Like terms} share the same variable part, such as $3x$ and $5x$; only like terms combine, by adding their coefficients."],
    ["Distributive property", "$a(b+c)=ab+ac$ lets you expand brackets, so $3(x+4)=3x+12$."],
    ["Simplify fully", "Expand any brackets first, then collect like terms so the expression is as short as possible."],
  ],
  "1.3": [
    ["Keep it balanced", "An equation is a balance: whatever you do to one side, do to the other to keep them equal."],
    ["Undo in reverse", "Isolate the variable with inverse operations — subtract to undo addition, divide to undo multiplication."],
    ["Check your answer", "Substitute your solution into the original equation; both sides should match."],
  ],
  "1.4": [
    ["More steps, same idea", "Multi-step equations may need you to expand brackets and collect like terms before isolating the variable."],
    ["Variables on both sides", "Move all variable terms to one side and all numbers to the other, then solve as usual."],
    ["Stay organized", "Work one step at a time and track your signs — most errors come from a dropped negative."],
  ],
  "1.5": [
    ["Solving for a variable", "Rearranging a formula means isolating a chosen variable using the same inverse operations as solving an equation."],
    ["Treat others as numbers", "The letters you are not solving for behave like constants while you rearrange."],
    ["Why it helps", "A rearranged formula lets you compute the variable you want directly, without re-solving each time."],
  ],
  "1.6": [
    ["From words to an equation", "Translate a problem into an equation by choosing a variable for the unknown and turning each condition into symbols."],
    ["Solve and interpret", "Solve the equation, then state the answer in the words of the original problem."],
    ["Check for sense", "Make sure the answer is realistic — a length or a price should be positive and sensible."],
  ],
  // ── Unit 2: Linear Relations ───────────────────────────────
  "2.1": [
    ["Rate of change", "A \\textbf{rate of change} tells how one quantity changes per unit of another, like cost per item or distance per hour."],
    ["Slope", "On a graph, this rate is the \\textbf{slope}: rise over run, or $\\dfrac{\\text{change in }y}{\\text{change in }x}$."],
    ["Reading direction", "A positive slope rises, a negative slope falls, and a zero slope is flat."],
  ],
  "2.2": [
    ["Direct variation", "In \\textbf{direct variation} $y=mx$, the line passes through the origin, so doubling $x$ doubles $y$."],
    ["Partial variation", "In \\textbf{partial variation} $y=mx+b$, there is a fixed starting value $b$ plus a rate $m$."],
    ["Spotting them", "A base fee plus a per-unit charge is partial variation; a pure per-unit rate with no fee is direct."],
  ],
  "2.3": [
    ["Reading the equation", "In $y=mx+b$, the slope $m$ is the rate of change and $b$ is the $y$-intercept, where the line crosses the $y$-axis."],
    ["Building it", "Read the starting value ($b$) and the step size ($m$) from a table or graph to write the equation."],
    ["A quick model", "This form is the most common way to describe a linear relationship at a glance."],
  ],
  "2.4": [
    ["Start at the intercept", "Plot the $y$-intercept $b$ first, then use the slope as rise over run to step to a second point."],
    ["Draw the line", "Join the two points with a straight line and extend it across the grid."],
    ["Check a point", "Pick another $x$-value, compute $y$, and confirm the point lands on your line."],
  ],
  "2.5": [
    ["From a graph or table", "Read the $y$-intercept where the line crosses the axis and the slope between two clear points, then write $y=mx+b$."],
    ["From slope and a point", "Substitute the slope and a known point into $y=mx+b$ and solve for $b$."],
    ["From two points", "Find the slope with rise over run first, then use either point to find $b$."],
  ],
  "2.6": [
    ["Meaning of slope and intercept", "In a real model the slope is a rate (cost per item, speed) and the intercept a starting amount (a base fee)."],
    ["Making predictions", "Substitute a value into the equation to predict the other quantity."],
    ["Know the limits", "Predictions are trustworthy within the data's range; far beyond it, a linear model may no longer apply."],
  ],
  // ── Unit 3: Linear Systems ─────────────────────────────────
  "3.1": [
    ["What a system is", "A \\textbf{system} is two lines together, and the \\textbf{solution} is the point that lies on both."],
    ["Read the crossing", "Graph both lines; where they intersect is the solution, which you check in both equations."],
    ["Its limits", "Graphing is clear but only as precise as your reading — messy solutions call for algebra."],
  ],
  "3.2": [
    ["The idea", "\\textbf{Substitution} solves one equation for a variable, then replaces that variable in the other equation."],
    ["The steps", "Isolate a variable, substitute into the second equation, solve, then back-substitute for the other."],
    ["When it fits", "Substitution is easiest when a variable already has a coefficient of $1$."],
  ],
  "3.3": [
    ["The idea", "\\textbf{Elimination} adds or subtracts the equations to cancel a variable, scaling one first if needed."],
    ["The steps", "Line up the equations, make a variable's coefficients opposite, add to eliminate it, then solve."],
    ["Choosing it", "Elimination is handy when no variable is already isolated."],
  ],
  "3.4": [
    ["Two unknowns, two equations", "A problem with two unknowns becomes a system: give each unknown a variable and write two equations."],
    ["Solve either way", "Use substitution or elimination, whichever suits the equations."],
    ["Check the story", "Confirm the answer makes sense in the original words, not just the algebra."],
  ],
  // ── Unit 4: Measurement ────────────────────────────────────
  "4.1": [
    ["Units matter", "Every measurement needs a unit, and choosing a sensible one keeps the numbers manageable."],
    ["Metric conversions", "Metric units scale by powers of ten: $1$ m $=100$ cm, $1$ km $=1000$ m. Moving to a bigger unit divides, to a smaller one multiplies."],
    ["Convert carefully", "Multiply by a fraction equal to $1$ that cancels the old unit, and check the unwanted unit cancels."],
  ],
  "4.2": [
    ["Add up the faces", "\\textbf{Surface area} totals all the outside faces; a box has three matching pairs, $SA=2(lw+lh+wh)$."],
    ["Cylinders", "A cylinder is two circles plus a wrapped rectangle: $SA=2\\pi r^2+2\\pi rh$."],
    ["Square units", "Surface area is always measured in square units."],
  ],
  "4.3": [
    ["Base times height", "The volume of a prism or cylinder is the \\textbf{base area times the height}: box $V=lwh$, cylinder $V=\\pi r^2h$."],
    ["Keep units consistent", "Use the same unit for every length, and give the answer in cubic units."],
    ["What it means", "Volume measures how much a solid holds or fills."],
  ],
  "4.4": [
    ["One-third the prism", "A pyramid or cone holds one-third of the matching prism or cylinder: $V=\\tfrac13(\\text{base})h$."],
    ["Slant height", "For surface area, a cone's slant height comes from $\\ell=\\sqrt{r^2+h^2}$."],
    ["Match the formula", "Choose the formula that fits the solid, keeping the height perpendicular to the base."],
  ],
  "4.5": [
    ["Sphere formulas", "A sphere has volume $V=\\tfrac43\\pi r^3$ and surface area $SA=4\\pi r^2$ — both depend only on the radius."],
    ["Half a sphere", "A hemisphere is half a sphere, so its volume is $\\tfrac23\\pi r^3$."],
    ["Everyday spheres", "Balls, tanks, and domes are modelled as spheres or hemispheres."],
  ],
  "4.6": [
    ["Break it into parts", "A composite solid is built from simpler shapes; measure each part, then add — or subtract a hole."],
    ["Watch shared faces", "When solids join, ignore the faces hidden where they meet when finding surface area."],
    ["Solve in context", "Real problems ask for capacity, material, or cost — translate the measurement into what is requested."],
  ],
  // ── Unit 5: Proportion, Geometry & Trigonometry ────────────
  "5.1": [
    ["Ratios and proportions", "A \\textbf{ratio} compares quantities; a \\textbf{proportion} says two ratios are equal, solved by cross-multiplying."],
    ["Scale", "A scale is a ratio between a drawing or model and the real object, letting you compute actual sizes."],
    ["Setting it up", "Match corresponding parts in the correct order before cross-multiplying."],
  ],
  "5.2": [
    ["Congruent vs similar", "\\textbf{Congruent} triangles are identical; \\textbf{similar} triangles share the same shape but may differ in size."],
    ["Proportional sides", "In similar triangles, matching angles are equal and matching sides share one scale factor."],
    ["Why it helps", "Similarity lets you find an unknown length by comparing a small and a large copy."],
  ],
  "5.3": [
    ["Set up a proportion", "Match corresponding sides of similar triangles, write a proportion, then solve for the unknown."],
    ["Indirect measurement", "Shadows and mirrors form similar triangles that measure heights you cannot reach."],
    ["Name sides carefully", "Line up the sides opposite equal angles, or the proportion will be wrong."],
  ],
  "5.4": [
    ["The right-triangle rule", "In a right triangle $a^2+b^2=c^2$, where $c$ is the hypotenuse — the longest side, opposite the right angle."],
    ["Finding a side", "Add the squares of the legs for the hypotenuse, or subtract for a leg."],
    ["Only right triangles", "The theorem applies only when there is a $90^\\circ$ angle."],
  ],
  "5.5": [
    ["Sine, cosine, tangent", "In a right triangle the side ratios depend on an angle: $\\sin=\\dfrac{\\text{opp}}{\\text{hyp}}$, $\\cos=\\dfrac{\\text{adj}}{\\text{hyp}}$, $\\tan=\\dfrac{\\text{opp}}{\\text{adj}}$."],
    ["SOH-CAH-TOA", "The mnemonic pairs each ratio with the two sides it uses."],
    ["Label first", "Mark the opposite, adjacent, and hypotenuse relative to your angle before choosing a ratio."],
  ],
  "5.6": [
    ["Solve the triangle", "Solving a right triangle means finding every missing side and angle using the trig ratios."],
    ["Elevation and depression", "Angles of elevation (up) and depression (down) from the horizontal set up real-world triangles."],
    ["Draw and decide", "Sketch and label first, then pick the ratio or theorem each step needs."],
  ],
  // ── Unit 6: Polynomials ────────────────────────────────────
  "6.1": [
    ["Distribute everything", "To expand, multiply every term of one factor by every term of the other, then collect like terms."],
    ["Two binomials", "FOIL — First, Outer, Inner, Last — is the shortcut for two binomials."],
    ["Simplify", "Combine like terms so the product is written cleanly."],
  ],
  "6.2": [
    ["Common factor first", "\\textbf{Factoring} reverses expanding, so always pull out the greatest common factor first."],
    ["Grouping", "With four terms, group them in pairs, factor each pair, then factor out the shared binomial."],
    ["Check", "Expand your factors to confirm you recover the original expression."],
  ],
  "6.3": [
    ["The pattern", "To factor $x^2+bx+c$, find two numbers that multiply to $c$ and add to $b$."],
    ["Signs guide you", "If $c>0$ the numbers share $b$'s sign; if $c<0$ they have opposite signs."],
    ["Verify", "Expand your answer to make sure the middle term returns."],
  ],
  "6.4": [
    ["Handy patterns", "Two products recur: the perfect square $(a\\pm b)^2=a^2\\pm2ab+b^2$ and the difference of squares $(a+b)(a-b)=a^2-b^2$."],
    ["Why memorize them", "Recognizing them speeds up both expanding and factoring."],
    ["A common trap", "$(a+b)^2\\ne a^2+b^2$: the middle term $2ab$ must not be dropped."],
  ],
  // ── Unit 7: Quadratic Relations ────────────────────────────
  "7.1": [
    ["What is quadratic", "A \\textbf{quadratic relation} has a squared variable, and its graph is a curved \\textbf{parabola}, not a line."],
    ["Second differences", "In a table, quadratics show equal \\emph{second} differences, where linear relations show equal first differences."],
    ["Where they appear", "Thrown objects and areas follow quadratic relations."],
  ],
  "7.2": [
    ["The landmarks", "A parabola has a \\textbf{vertex} (highest or lowest point), an \\textbf{axis of symmetry}, a $y$-intercept, and often $x$-intercepts."],
    ["Opening", "A positive leading coefficient opens the parabola up; a negative one opens it down."],
    ["Symmetry", "The curve mirrors itself across the axis of symmetry through the vertex."],
  ],
  "7.3": [
    ["Vertex form", "$y=a(x-h)^2+k$ places the vertex at $(h,k)$ and shows the transformations directly."],
    ["The parameters", "$a$ stretches and can flip the parabola, $h$ shifts it right, and $k$ shifts it up."],
    ["Sketching", "Plot the vertex, then use $a$ and symmetry to add points on each side."],
  ],
  "7.4": [
    ["Factored form", "$y=a(x-r)(x-s)$ shows the \\textbf{zeros} $r$ and $s$ — the $x$-intercepts of the parabola."],
    ["Finding the vertex", "The axis of symmetry sits halfway between the zeros, at $x=\\dfrac{r+s}{2}$."],
    ["Why zeros matter", "Zeros answer real questions like when a ball lands or when a quantity is zero."],
  ],
  "7.5": [
    ["Reading the graph", "In a real quadratic, the vertex is a maximum or minimum and the zeros mark where the quantity is zero."],
    ["Match the feature", "A greatest height or best value points to the vertex; a start or landing points to a zero."],
    ["State it plainly", "Translate the vertex or zero back into the situation — the height reached, the time to land, the break-even point."],
  ],
};

export default LEARN;
