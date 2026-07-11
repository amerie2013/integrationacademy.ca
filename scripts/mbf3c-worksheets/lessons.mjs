// "Concept Basics" teaching sections for MBF3C worksheets, keyed by code.
// build.mjs renders LEARN[code] as a green learnbox before the Worked Examples.
// LaTeX content; each entry is an array of [heading, bodyLaTeX] blocks.

export const LEARN = {
  // ── Unit 1: Quadratic Relations ────────────────────────────
  "1.1": [
    ["Expanding", "To \\textbf{expand}, multiply every term of one bracket by every term of the other, then collect like terms; FOIL handles two binomials."],
    ["Factoring", "\\textbf{Factoring} reverses expanding: pull out any common factor, then for $x^2+bx+c$ find two numbers multiplying to $c$ and adding to $b$."],
    ["Check both ways", "Expanding and factoring undo each other, so multiply your factors back to confirm the result."],
  ],
  "1.2": [
    ["The parabola", "A \\textbf{quadratic relation} graphs as a U-shaped \\textbf{parabola}, with a vertex, an axis of symmetry, and up to two $x$-intercepts."],
    ["Opening and vertex", "A positive leading coefficient opens the parabola up (a minimum); a negative one opens it down (a maximum)."],
    ["Second differences", "In a table, quadratics have equal \\emph{second} differences, which distinguishes them from straight lines."],
  ],
  "1.3": [
    ["Set to zero", "Rearrange the equation to $ax^2+bx+c=0$, then solve by factoring or the quadratic formula."],
    ["Zero-product property", "Once factored, a product is zero only when a factor is zero, so each factor gives a solution."],
    ["The quadratic formula", "$x=\\dfrac{-b\\pm\\sqrt{b^2-4ac}}{2a}$ solves any quadratic, even one that will not factor."],
  ],
  "1.4": [
    ["Modelling with quadratics", "Heights, areas, and revenue often follow a quadratic, so their maximum or minimum sits at the vertex."],
    ["Vertex or zeros", "A greatest value points to the \\textbf{vertex}; a start or a landing points to the \\textbf{zeros}."],
    ["Interpret in context", "Translate the answer back into the situation and keep only sensible (positive) values."],
  ],
  // ── Unit 2: Exponential Relations ──────────────────────────
  "2.1": [
    ["Powers", "A power $a^n$ is repeated multiplication; same-base powers combine as $a^m a^n=a^{m+n}$ and $(a^m)^n=a^{mn}$."],
    ["Zero and negatives", "$a^0=1$ and $a^{-n}=\\dfrac{1}{a^n}$ handle the special cases."],
    ["Simplify step by step", "Apply one law at a time, and rewrite negative exponents as fractions last."],
  ],
  "2.2": [
    ["Repeated multiplying", "An \\textbf{exponential relation} $y=a\\,b^x$ multiplies by $b$ each step, curving sharply rather than rising steadily."],
    ["The graph", "It passes through $(0,a)$ and levels off toward the asymptote $y=0$ without ever crossing it."],
    ["Growth or decay", "A base $b>1$ grows, while a base between $0$ and $1$ decays."],
  ],
  "2.3": [
    ["Percentage change", "Repeated percentage change follows $A=A_0 b^{\\,t}$, with $b=1+r$ for growth and $b=1-r$ for decay."],
    ["Half-life and doubling", "Halving uses base $\\tfrac12$ and doubling uses base $2$, scaled by the time interval."],
    ["Using the model", "Substitute a time to predict an amount; the base shows how fast the quantity changes."],
  ],
  // ── Unit 3: Financial Literacy ─────────────────────────────
  "3.1": [
    ["Simple interest", "\\textbf{Simple interest} is earned only on the principal, $I=Prt$, growing the balance in a straight line."],
    ["Compound interest", "\\textbf{Compound interest} earns interest on the interest too, $A=P(1+i)^n$, curving upward over time."],
    ["Comparing", "Compound interest eventually beats simple interest because its base keeps growing."],
  ],
  "3.2": [
    ["Saving and investing", "Money set aside earns interest, and the longer it compounds, the more it grows."],
    ["The cost of credit", "Borrowing on credit charges interest, so a balance carried from month to month grows quickly."],
    ["Compare the total", "When choosing a loan or card, compare the \\emph{total} you repay, not just the monthly amount."],
  ],
  "3.3": [
    ["Fixed and variable costs", "Owning a vehicle has \\textbf{fixed} costs (insurance, licensing) and \\textbf{variable} costs (fuel, maintenance) that depend on use."],
    ["Depreciation", "A vehicle loses value over time, each year worth a percentage of the year before."],
    ["Budgeting for it", "Add up all the costs to see the true expense of owning and operating a vehicle."],
  ],
  // ── Unit 4: Measurement & Trigonometry ─────────────────────
  "4.1": [
    ["Volume", "\\textbf{Volume} measures the space a solid fills: prisms and cylinders use base area times height, and a sphere uses $\\tfrac43\\pi r^3$."],
    ["Surface area", "\\textbf{Surface area} totals the outside faces and is measured in square units."],
    ["Match the solid", "Pick the formula that fits the shape, and keep every measurement in the same unit."],
  ],
  "4.2": [
    ["Composite areas", "Break a design into rectangles, triangles, and circles, then add the pieces (or subtract a cut-out)."],
    ["Perimeter and area", "\\textbf{Perimeter} is the distance around; \\textbf{area} is the surface covered — do not mix them up."],
    ["Optimizing", "Design problems often ask for the least material or the largest area for a fixed amount — compare the options."],
  ],
  "4.3": [
    ["Any triangle", "The \\textbf{sine law} $\\dfrac{a}{\\sin A}=\\dfrac{b}{\\sin B}=\\dfrac{c}{\\sin C}$ links each side to the sine of its opposite angle."],
    ["When to use it", "Use it when you know a side and its opposite angle, plus one more piece of information."],
    ["Match the pair", "Always pair a side with the angle across from it to keep the ratios valid."],
  ],
  "4.4": [
    ["A wider tool", "The \\textbf{cosine law} $a^2=b^2+c^2-2bc\\cos A$ solves triangles the sine law cannot start."],
    ["Two cases", "Use it with two sides and their included angle (SAS), or with all three sides (SSS) to find an angle."],
    ["A familiar limit", "At $90^\\circ$ the cosine term vanishes and the law becomes the Pythagorean theorem."],
  ],
  // ── Unit 5: Data Management & Probability ──────────────────
  "5.1": [
    ["Gathering data", "Data is collected through surveys, experiments, or existing records; a fair sample represents the whole group."],
    ["Choosing a graph", "\\textbf{Bar graphs} compare categories, \\textbf{histograms} show numeric ranges, and \\textbf{circle graphs} show parts of a whole."],
    ["Read carefully", "A well-labelled graph makes patterns clear, but watch for a misleading scale."],
  ],
  "5.2": [
    ["Measures of centre", "The \\textbf{mean} is the average, the \\textbf{median} is the middle value, and the \\textbf{mode} is the most common value."],
    ["Mean vs median", "The mean uses every value but is pulled by outliers; the median resists them, so it suits skewed data."],
    ["Spread", "The \\textbf{range} — highest minus lowest — shows how spread out the data is."],
  ],
  "5.3": [
    ["Measuring chance", "\\textbf{Probability} is $\\dfrac{\\text{favourable outcomes}}{\\text{total outcomes}}$, a number from $0$ (impossible) to $1$ (certain)."],
    ["Theoretical vs experimental", "\\textbf{Theoretical} probability comes from counting; \\textbf{experimental} probability comes from trials, and the two agree over many repetitions."],
    ["The complement", "The chance an event does \\emph{not} happen is $1$ minus the chance it does."],
  ],
};

export default LEARN;
