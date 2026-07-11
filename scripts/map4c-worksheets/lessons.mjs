// "Concept Boost" teaching sections for MAP4C worksheets, keyed by code.
// build.mjs renders LEARN[code] as a green learnbox before the Worked Examples.
// LaTeX content; each entry is an array of [heading, bodyLaTeX] blocks.

export const LEARN = {
  // ── Unit 1: Mathematical Models ────────────────────────────
  "1.1": [
    ["Powers and the laws", "Same-base powers combine: $a^m a^n=a^{m+n}$, $\\dfrac{a^m}{a^n}=a^{m-n}$, $(a^m)^n=a^{mn}$; also $a^0=1$ and $a^{-n}=\\dfrac{1}{a^n}$."],
    ["Rational exponents", "A fraction exponent is a root: $a^{m/n}=\\left(\\sqrt[n]{a}\\right)^m$. Take the root first — $8^{2/3}=(\\sqrt[3]{8})^2=4$."],
    ["Work in steps", "Apply one law at a time and clear negative exponents last by moving the factor across the fraction bar."],
  ],
  "1.2": [
    ["Match the base", "If both sides can be written as powers of one base, the exponents must be equal: $b^{M}=b^{N}\\Rightarrow M=N$."],
    ["Hidden powers", "Rewrite numbers as powers first — $8=2^3$, $27=3^3$, $\\tfrac14=2^{-2}$ — then equate exponents and solve."],
    ["Distribute carefully", "Spread a power over an exponent expression: $8^{x-1}=2^{3(x-1)}$, not $2^{3x-1}$."],
  ],
  "1.3": [
    ["No common base", "When numbers are not clean powers of one base, solve $b^{x}=k$ by graphing $y=b^x$ and $y=k$ and reading the intersection's $x$-value."],
    ["Trap with a table", "Bracket the solution between two $x$-values whose outputs straddle $k$, then zoom in for more decimals."],
    ["State the accuracy", "A graphical solution is an estimate, so report it to the required number of decimals."],
  ],
  "1.4": [
    ["Percentage-change model", "Constant-percentage change is $A=A_0\\,b^{t}$: growth uses $b=1+r$, decay uses $b=1-r$."],
    ["Half-life and doubling", "Halving uses base $\\tfrac12$ with exponent $\\tfrac{t}{h}$; doubling uses base $2$ with exponent $\\tfrac{t}{d}$."],
    ["Find the time", "Solve for the time with a table or graph (MAP4C is log-free)."],
  ],
  "1.5": [
    ["Describe the relationship", "Say how the output changes as the input rises — increasing, decreasing, or levelling off — with the correct quantities and units."],
    ["Trends and predictions", "Extend a trend to predict, and always state the assumption that it continues."],
    ["Special points", "Note maxima, minima, and intercepts, and be cautious extrapolating a curved trend far ahead."],
  ],
  "1.6": [
    ["Rate of change", "Between two points, rate of change $=\\dfrac{\\text{change in output}}{\\text{change in input}}$ — the slope, with units \"output per input\"."],
    ["Constant vs changing", "Equal first differences (straight line) mean a constant rate; unequal differences (a curve) mean a changing rate."],
    ["Zero rate", "A flat, horizontal graph has a rate of change of zero."],
  ],
  "1.7": [
    ["The fingerprints", "Constant first difference $\\Rightarrow$ linear; constant second difference $\\Rightarrow$ quadratic; constant ratio $\\Rightarrow$ exponential."],
    ["Amount vs percent", "A constant \\emph{amount} of change per step is linear; a constant \\emph{percentage} per step is exponential."],
    ["Write the model", "Read the starting value and the step (add for linear, multiply for exponential) to build $y=mx+b$ or $y=a\\,b^{x}$."],
  ],
  "1.8": [
    ["Solving $x^{n}=a$", "Undo a power with a root: $x=\\sqrt[n]{a}$. An even $n$ (with $a>0$) gives $\\pm$; an odd $n$ gives one root."],
    ["Rearranging formulas", "Isolate a variable by undoing operations in reverse, treating the other letters as constants; a power is undone by a root."],
    ["Physical roots", "For a length or radius, keep only the positive root."],
  ],
  // ── Unit 2: Personal Finance ───────────────────────────────
  "2.1": [
    ["Simple vs compound", "Simple interest $I=Prt$ is on the principal only; compound interest $A=P(1+i)^{n}$ is on the growing balance."],
    ["Match the period", "For compounding $k$ times a year, use $i=\\dfrac{r}{k}$ and $n=kt$."],
    ["Find the principal", "Rearrange to $P=\\dfrac{A}{(1+i)^{n}}$ to find how much to invest today."],
  ],
  "2.2": [
    ["Future value", "An annuity's future value is $FV=R\\cdot\\dfrac{(1+i)^{n}-1}{i}$, where $R$ is the payment, $i$ the rate per period, $n$ the number of payments."],
    ["Read the schedule", "Monthly payments at annual rate $r$ use $i=\\tfrac{r}{12}$ and $n=12\\times(\\text{years})$."],
    ["Start early", "Early deposits compound longest, so beginning sooner sharply raises the future value."],
  ],
  "2.3": [
    ["Present value", "The present value is $PV=R\\cdot\\dfrac{1-(1+i)^{-n}}{i}$ — the single amount today equal to a stream of payments; for a loan it is the amount borrowed."],
    ["Payment on a loan", "Rearrange to $R=\\dfrac{PV\\cdot i}{1-(1+i)^{-n}}$."],
    ["Total interest", "Total repaid minus the loan: $R\\cdot n-PV$."],
  ],
  "2.4": [
    ["Mortgage payment", "A mortgage is a present-value annuity: $R=\\dfrac{PV\\cdot i}{1-(1+i)^{-n}}$, where $PV$ is the amount borrowed (price minus down payment)."],
    ["Amortization split", "Each payment's interest is (balance $\\times i$); the rest reduces the balance. Early payments are mostly interest."],
    ["Term matters", "A shorter term means a higher payment but far less total interest."],
  ],
  "2.5": [
    ["Fixed vs variable", "Fixed costs (rent/mortgage, insurance, tax) stay steady; variable costs (utilities, repairs) change with use."],
    ["Affordability", "A common guideline: total housing cost $\\le$ about $30\\%$ of gross monthly income."],
    ["Trade-offs", "Owning builds equity but adds tax and repairs; renting costs less up front but builds none."],
  ],
  "2.6": [
    ["Income vs expenses", "A budget balances when expenses plus planned savings do not exceed income; the leftover is a surplus."],
    ["Savings plan", "To reach a goal, save $\\dfrac{\\text{goal}}{\\text{months}}$ each month."],
    ["Adjusting", "When money is tight, cut variable (discretionary) spending first."],
  ],
  // ── Unit 3: Geometry & Trigonometry ────────────────────────
  "3.1": [
    ["Metric scaling", "Metric units scale by tens: $1\\text{ m}=100\\text{ cm}$, $1\\text{ km}=1000\\text{ m}$. To a bigger unit divides; to a smaller unit multiplies."],
    ["Metric $\\leftrightarrow$ imperial", "Key bridges: $1\\text{ in}=2.54\\text{ cm}$, $1\\text{ ft}\\approx0.305\\text{ m}$, $1\\text{ mi}\\approx1.609\\text{ km}$."],
    ["Cancel the unit", "Multiply by a ratio equal to $1$ arranged so the old unit cancels."],
  ],
  "3.2": [
    ["Building blocks", "Rectangle $lw$, triangle $\\tfrac12bh$, circle $\\pi r^2$, semicircle $\\tfrac12\\pi r^2$."],
    ["Decompose", "Split a region into simple shapes, then add the pieces or subtract a cut-out."],
    ["Watch the radius", "Use the radius (half the diameter) in $\\pi r^2$, and keep every length in one unit."],
  ],
  "3.3": [
    ["Volume", "Prism or cylinder: (base area) $\\times$ height — box $V=lwh$, cylinder $V=\\pi r^2h$."],
    ["Surface area", "Box $SA=2(lw+lh+wh)$; closed cylinder $SA=2\\pi r^2+2\\pi rh$."],
    ["Composite solids", "Add joined volumes, subtract a drilled hole, and ignore hidden internal faces for surface area."],
  ],
  "3.4": [
    ["The square rule", "For a fixed perimeter the maximum area is a square; for a fixed area the minimum perimeter is a square."],
    ["Reduce to one variable", "Use the constraint to write area (or perimeter) in one variable, then read the optimum from a table or graph."],
    ["Against a wall", "With one side a free wall, the best pen is a $1{:}2$ rectangle, not a square."],
  ],
  "3.5": [
    ["The cube rule", "For a fixed volume, the least surface area is a cube; for a cylinder it is when $h=2r$ (height equals diameter)."],
    ["Use a table", "List candidate dimensions with the right volume and read off the least surface area."],
    ["Why it matters", "Least surface area means least material — real savings in packaging."],
  ],
  "3.6": [
    ["The three ratios", "$\\sin=\\dfrac{\\text{opp}}{\\text{hyp}}$, $\\cos=\\dfrac{\\text{adj}}{\\text{hyp}}$, $\\tan=\\dfrac{\\text{opp}}{\\text{adj}}$ — SOH-CAH-TOA."],
    ["Sides and angles", "For a side, set up a ratio and solve; for an angle, use an inverse ratio ($\\sin^{-1}$, etc.)."],
    ["Elevation/depression", "Angles up or down from the horizontal build the triangle in real problems."],
  ],
  "3.7": [
    ["Two laws", "Sine law $\\dfrac{a}{\\sin A}=\\dfrac{b}{\\sin B}=\\dfrac{c}{\\sin C}$ (matched pair); cosine law $a^2=b^2+c^2-2bc\\cos A$ (SAS or SSS)."],
    ["Obtuse angles", "An obtuse angle has a negative cosine, which lengthens the opposite side in the cosine law."],
    ["Choose the law", "Use the sine law with a side and its opposite angle; otherwise start with the cosine law."],
  ],
  // ── Unit 4: Data Management ─────────────────────────────────
  "4.1": [
    ["Centre", "Mean (average), median (middle value in order), mode (most frequent). For an even count, average the two middle values."],
    ["Spread and graphs", "Range $=$ highest $-$ lowest. Bar/circle graphs suit categories; histograms suit numeric intervals."],
    ["Outliers", "An outlier pulls the mean, so the median often better represents a typical value."],
  ],
  "4.2": [
    ["Population vs sample", "The population is everyone of interest; a sample is the part studied. A good sample is random, representative, and large enough."],
    ["Bias", "Bias makes a sample misrepresent the population — a skewed frame, leading questions, or non-response."],
    ["Misuse", "Watch for tiny samples, cherry-picked data, and truncated graph axes that exaggerate."],
  ],
  "4.3": [
    ["Paired data", "A scatter plot graphs $(x,y)$ pairs; the independent variable goes on the horizontal axis, the dependent on the vertical."],
    ["Read the cloud", "An upward cloud is positive, downward is negative, shapeless is none."],
    ["Points, not lines", "A scatter plot shows separate points — do not join them."],
  ],
  "4.4": [
    ["Correlation", "Direction (positive/negative/none) and strength (tight line = strong, loose cloud = weak)."],
    ["Line of best fit", "The trend line $y=mx+b$ (from technology) predicts a $y$ from an $x$."],
    ["Interpolate vs extrapolate", "Predicting within the data is reliable; far beyond it is risky — and correlation is not causation."],
  ],
  "4.5": [
    ["Theoretical probability", "$P=\\dfrac{\\text{favourable}}{\\text{total}}$, a number from $0$ to $1$, when outcomes are equally likely."],
    ["Experimental probability", "From trials: $\\dfrac{\\text{successes}}{\\text{trials}}$; it approaches the theoretical value over many trials."],
    ["Two dice", "There are $36$ equally likely outcomes — count the favourable pairs (six make a sum of $7$)."],
  ],
};

export default LEARN;
