// "Concept in Focus" teaching sections for MDM4U worksheets, keyed by code.
// build.mjs renders LEARN[code] as a green learnbox before the Worked Examples.
// Content is LaTeX (inline $...$ math, \textbf{}, \emph{}, \dfrac, \dbinom, ...).
// Each entry is an array of [heading, bodyLaTeX] blocks.

export const LEARN = {
  // ── Unit 1: Counting, Permutations & Combinations ──────────
  "1.1": [
    ["Why we multiply", "When a task is built from several independent stages, the number of ways to finish it is the \\textbf{product} of the choices at each stage. Choosing 1 of 3 shirts \\emph{and} 1 of 4 pants gives $3\\times4=12$ outfits, because every shirt pairs with every pair of pants."],
    ["AND multiplies, OR adds", "Use the \\textbf{multiplicative} principle when stages happen together (this \\emph{and} then that). Use the \\textbf{additive} principle for separate cases that cannot both occur (a book \\emph{or} a movie), where you add the counts instead."],
    ["Repetition changes everything", "Always ask whether choices may repeat. A 4-digit PIN allowing repeats has $10^4$ possibilities; if no digit may repeat, the choices shrink each stage: $10\\times9\\times8\\times7$."],
  ],
  "1.2": [
    ["What a factorial counts", "$n! = n(n-1)\\cdots2\\cdot1$ is the number of ways to arrange $n$ distinct objects in a row. We define $0!=1$ so that the permutation formula keeps working at the edges."],
    ["Permutations are ordered", "A \\textbf{permutation} is an arrangement where order matters. Filling $r$ ordered positions from $n$ distinct objects can be done in ${}_{n}P_{r}=\\dfrac{n!}{(n-r)!}$ ways — the product of the shrinking choices $n(n-1)\\cdots$ for $r$ factors."],
    ["Spot the keyword", "If rearranging the same objects counts as a new result (1st, 2nd, 3rd place), you are counting permutations. The words \\emph{arrange} and \\emph{order} are the signal."],
  ],
  "1.3": [
    ["The trouble with duplicates", "When some objects are identical, swapping them does not create a new arrangement, so a plain $n!$ overcounts. You must divide the repeats back out."],
    ["The formula", "For $n$ objects with one kind repeated $a$ times, another $b$ times, and so on, the number of distinct arrangements is $\\dfrac{n!}{a!\\,b!\\cdots}$. The letters of \\textbf{BANANA} give $\\dfrac{6!}{3!\\,2!}=60$."],
    ["Grid paths are the same idea", "A shortest route that goes $a$ blocks east and $b$ blocks north is just an arrangement of $a$ E's and $b$ N's, so there are $\\dfrac{(a+b)!}{a!\\,b!}$ of them."],
  ],
  "1.4": [
    ["Objects that must stay together", "If certain objects must be adjacent, \\textbf{glue} them into one block, arrange the blocks, then multiply by the arrangements \\emph{inside} the block. Two people together among 5 seats: $4!\\times2!$."],
    ["Objects that must stay apart", "If objects must \\emph{not} touch, first arrange the others, then drop the restricted objects into the \\textbf{gaps} between them so they cannot be neighbours."],
    ["Around a circle", "At a round table there is no fixed starting seat, so $n$ people arrange in $(n-1)!$ ways — fixing one person removes the rotations that would otherwise be counted repeatedly."],
  ],
  "1.5": [
    ["Order does not matter", "A \\textbf{combination} is a selection in which arrangement is irrelevant — a committee of 3 is the same group no matter the order you name them. Look for \\emph{choose}, \\emph{select}, or \\emph{group}."],
    ["The formula", "$\\dbinom{n}{r}=\\dfrac{n!}{r!\\,(n-r)!}$. It is the permutation count ${}_{n}P_{r}$ divided by $r!$, because each unordered group was counted $r!$ times when order mattered."],
    ["Use the symmetry", "$\\dbinom{n}{r}=\\dbinom{n}{n-r}$: choosing which $r$ to keep is the same as choosing which $n-r$ to leave out, so $\\dbinom{18}{16}=\\dbinom{18}{2}=153$."],
  ],
  "1.6": [
    ["Break it into cases", "When a selection must meet a condition like \\emph{at least 2 women}, split it into clean cases (exactly 2, exactly 3, \\dots), count each with combinations, and \\textbf{add} them."],
    ["The complement shortcut", "For \\emph{at least one} problems it is usually faster to count the opposite — \\emph{none} — and subtract: $P(\\text{at least one})=\\text{total}-\\text{none}$."],
    ["Do not double-count", "When cases could overlap, make sure every outcome is counted exactly once. Splitting on whether a specific person is in or out gives non-overlapping cases."],
  ],
  "1.7": [
    ["Building the triangle", "Each entry is the sum of the two directly above it. Row $n$ (counting from row 0) lists $\\dbinom{n}{0},\\dbinom{n}{1},\\dots,\\dbinom{n}{n}$ — the combination counts themselves."],
    ["Pascal's identity", "$\\dbinom{n}{r}=\\dbinom{n-1}{r-1}+\\dbinom{n-1}{r}$: choosing $r$ from $n$ either includes a fixed item (choose $r-1$ from the rest) or excludes it (choose $r$ from the rest)."],
    ["Row sums are powers of 2", "The entries in row $n$ add to $2^n$, because that is the number of subsets of an $n$-element set — a bridge to the binomial theorem."],
  ],
  "1.8": [
    ["Expanding a power", "$(a+b)^n=\\displaystyle\\sum_{r=0}^{n}\\dbinom{n}{r}a^{n-r}b^{r}$. The coefficients are exactly row $n$ of Pascal's triangle, and the exponents of $a$ and $b$ always sum to $n$."],
    ["The general term", "The term containing $b^{r}$ is $\\dbinom{n}{r}a^{n-r}b^{r}$. This lets you pick out a single term — such as the coefficient of $x^3$ — without expanding everything."],
    ["Reading the pattern", "As $r$ climbs, the power of $a$ falls while the power of $b$ rises. There are $n+1$ terms in all, with symmetric coefficients."],
  ],
  // ── Unit 2: Probability ────────────────────────────────────
  "2.1": [
    ["Defining probability", "For equally likely outcomes, $P(A)=\\dfrac{\\text{favourable}}{\\text{total}}$, a number between $0$ (impossible) and $1$ (certain). Always list the \\textbf{sample space} of outcomes first."],
    ["Three kinds", "\\textbf{Theoretical} probability comes from counting, \\textbf{experimental} from repeated trials, and \\textbf{subjective} from informed judgement. Experimental results drift toward the theoretical value as trials pile up."],
    ["A worked idea", "Two dice have $36$ equally likely outcomes; six of them sum to $7$, so $P(\\text{sum}=7)=\\dfrac{6}{36}=\\dfrac16$."],
  ],
  "2.2": [
    ["Counting the space", "For richer experiments, use permutations or combinations to count both the favourable outcomes and the total, then divide."],
    ["Match the method", "Count the top and bottom the \\emph{same way} — both ordered or both unordered. Committees and card hands use combinations; ordered arrangements use permutations."],
    ["A card example", "The chance a 5-card hand is all hearts is $\\dfrac{\\binom{13}{5}}{\\binom{52}{5}}$ — combinations above and below keep the comparison fair."],
  ],
  "2.3": [
    ["Odds versus probability", "\\textbf{Odds in favour} compare favourable to unfavourable outcomes, written $a:b$, while probability compares favourable to total. From odds $a:b$ you get $P=\\dfrac{a}{a+b}$."],
    ["The complement", "$P(A')=1-P(A)$. The complement — \\emph{not} $A$ — is often far easier to count, especially for \\emph{at least one} events."],
    ["Same information, two forms", "If $P=0.25=\\tfrac14$, the odds in favour are $1:3$ and the odds against are $3:1$; each conveys the same fact."],
  ],
  "2.4": [
    ["The additive rule", "$P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$. You subtract the overlap so that outcomes belonging to both events are not counted twice."],
    ["Mutually exclusive", "Events are \\textbf{mutually exclusive} when they cannot occur together, so $P(A\\cap B)=0$ and the rule collapses to $P(A)+P(B)$."],
    ["Draw the Venn", "A Venn diagram makes the overlap obvious: king \\emph{or} heart overlaps at the king of hearts, giving $\\tfrac{4}{52}+\\tfrac{13}{52}-\\tfrac{1}{52}$."],
  ],
  "2.5": [
    ["Independent events", "Two events are \\textbf{independent} when one has no effect on the other, like separate coin flips. Then $P(A\\cap B)=P(A)\\cdot P(B)$."],
    ["Dependent events", "Drawing \\emph{without replacement} makes events \\textbf{dependent}: the first draw changes the second's odds. Two kings in a row: $\\dfrac{4}{52}\\times\\dfrac{3}{51}$."],
    ["Not the same as exclusive", "Independent is not mutually exclusive — independent events can both happen, whereas mutually exclusive events never can."],
  ],
  "2.6": [
    ["Probability given information", "$P(A\\mid B)$ is the probability of $A$ \\emph{given} that $B$ has already happened. Knowing $B$ shrinks the sample space to the outcomes inside $B$."],
    ["The formula", "$P(A\\mid B)=\\dfrac{P(A\\cap B)}{P(B)}$. Rearranged, this is the \\textbf{product rule} $P(A\\cap B)=P(B)\\,P(A\\mid B)$."],
    ["Reading a two-way table", "In a two-way table a conditional probability uses just one row or column as the new total — the condition tells you which one."],
  ],
  "2.7": [
    ["Trees show sequences", "A \\textbf{tree diagram} maps a multi-stage experiment: every branch is an outcome, and the branch probabilities leaving any point add to $1$."],
    ["Multiply along, add across", "Multiply the probabilities \\emph{along} a path to get that outcome, then add the probabilities of the \\emph{different} paths that satisfy your event."],
    ["Tables organize outcomes", "A probability table lays every combined outcome in a grid, so totals and conditional probabilities can be read straight off."],
  ],
  // ── Unit 3: Discrete Probability Distributions ─────────────
  "3.1": [
    ["What a random variable is", "A \\textbf{random variable} $X$ attaches a number to each outcome (like the number of heads in three flips). \\emph{Discrete} means it takes separate, countable values."],
    ["Its distribution", "A probability distribution pairs each value of $X$ with its probability. Because some outcome must occur, those probabilities must \\textbf{sum to 1}."],
    ["Building one", "Count the outcomes for each value of $X$ and divide by the total. If your probabilities do not add to $1$, an outcome is missing."],
  ],
  "3.2": [
    ["The long-run average", "The \\textbf{expected value} $E(X)=\\sum x\\,P(x)$ is the average outcome over many repetitions — a weighted average of the values by their probabilities."],
    ["Fair games", "A game is \\textbf{fair} when its expected value equals the cost to play (or $0$ for net gain). Comparing $E(X)$ to the cost decides whether a bet is worth taking."],
    ["Interpret carefully", "$E(X)$ need not be an achievable value — an expected $2.5$ is a long-run average, not any single result."],
  ],
  "3.3": [
    ["Equally likely values", "In a \\textbf{uniform} distribution every value of $X$ is equally likely. With $n$ values, each has probability $\\dfrac1n$, like a fair die at $\\tfrac16$ per face."],
    ["Its expected value", "For the values $1$ through $n$, symmetry gives $E(X)=\\dfrac{n+1}{2}$, the midpoint of the range."],
    ["When to reach for it", "Model with a uniform distribution only when outcomes are genuinely equally likely and no value is favoured."],
  ],
  "3.4": [
    ["The binomial setting", "Use the binomial distribution for a \\emph{fixed} number $n$ of independent trials, each with the same success probability $p$ and only two outcomes. $X$ counts the successes."],
    ["The formula", "$P(X=k)=\\dbinom{n}{k}p^{k}(1-p)^{n-k}$: the combination chooses which trials succeed, and the powers give the probability of that pattern."],
    ["Its mean", "The expected number of successes is simply $E(X)=np$ — for $20$ shots at $p=0.7$, expect $14$."],
  ],
  "3.5": [
    ["Waiting for a first success", "The \\textbf{geometric} distribution models the number of independent trials \\emph{until} the first success, each with probability $p$."],
    ["The formula", "$P(X=k)=(1-p)^{k-1}p$ — you need $k-1$ failures and then one success. Unlike the binomial, the number of trials is not fixed in advance."],
    ["Its mean", "On average you wait $E(X)=\\dfrac1p$ trials; if $p=\\tfrac15$, expect about $5$ trials to the first success."],
  ],
  "3.6": [
    ["Drawing without replacement", "The \\textbf{hypergeometric} distribution counts successes in a sample drawn \\emph{without replacement} from a finite group, so the trials are \\textbf{not} independent."],
    ["The formula", "With $a$ successes among $n$ items and a sample of $r$: $P(X=k)=\\dfrac{\\binom{a}{k}\\binom{n-a}{r-k}}{\\binom{n}{r}}$ — choose the successes and the non-successes, over all possible samples."],
    ["Binomial or hypergeometric?", "Use the binomial for \\emph{with replacement} (independent) trials and the hypergeometric for \\emph{without replacement} draws from a small population."],
  ],
  // ── Unit 4: Continuous & Normal Distributions ──────────────
  "4.1": [
    ["From discrete to continuous", "A \\textbf{continuous} random variable can take any value in an interval (height, time). A single exact value has probability $0$; probability is measured over \\emph{ranges}."],
    ["Area is probability", "For a continuous variable, probability is the \\textbf{area under} its density curve across an interval, and the total area under the curve is $1$."],
    ["Why only ranges", "With infinitely many possible values we ask for $P(a<X<b)$ rather than $P(X=a)$."],
  ],
  "4.2": [
    ["The bell curve", "The \\textbf{normal} distribution is a symmetric bell shape set by its mean $\\mu$ and standard deviation $\\sigma$. Data clusters near the mean and thins out in the tails."],
    ["The z-score", "A \\textbf{z-score} $z=\\dfrac{x-\\mu}{\\sigma}$ says how many standard deviations a value sits from the mean, turning any normal variable into the \\emph{standard} normal ($\\mu=0,\\sigma=1$)."],
    ["The 68-95-99.7 rule", "About $68\\%$ of data lies within $1\\sigma$ of the mean, $95\\%$ within $2\\sigma$, and $99.7\\%$ within $3\\sigma$ — a quick way to estimate probabilities."],
  ],
  "4.3": [
    ["Finding a probability", "Convert the value to a z-score, then use a z-table or technology to read the area to its left, which is $P(X<x)$."],
    ["Between and above", "For $P(X>x)$ subtract the left area from $1$; for $P(a<X<b)$ subtract the two left areas. A quick sketch of the shaded region prevents errors."],
    ["Percentiles run backwards", "For a percentile, start from the area, look up the matching z-score, then reverse the formula: $x=\\mu+z\\sigma$."],
  ],
  "4.4": [
    ["Why approximate", "When $n$ is large, adding binomial terms one by one is tedious. If $np\\ge5$ and $n(1-p)\\ge5$, the binomial is close to \\textbf{normal}."],
    ["Match the parameters", "Use $\\mu=np$ and $\\sigma=\\sqrt{np(1-p)}$, then treat the count as a normal variable and work with z-scores."],
    ["Continuity correction", "Since a discrete count is modelled by a continuous curve, adjust by $\\pm0.5$ — for example $P(X\\ge10)$ becomes $P(X>9.5)$ — for a sharper estimate."],
  ],
  // ── Unit 5: One-Variable Statistics ────────────────────────
  "5.1": [
    ["Population versus sample", "A \\textbf{population} is everyone of interest; a \\textbf{sample} is the part actually studied. Sound conclusions need a sample that represents the population."],
    ["Sampling methods", "\\textbf{Random}, \\textbf{systematic}, \\textbf{stratified}, and \\textbf{cluster} sampling each pursue representativeness differently; a convenience sample usually fails at it."],
    ["Watch for bias", "\\textbf{Bias} — from a poor sampling frame, leading questions, or non-response — makes a sample systematically misrepresent the population."],
  ],
  "5.2": [
    ["Three centres", "The \\textbf{mean} is the average, the \\textbf{median} is the middle value in order, and the \\textbf{mode} is the most frequent value. Each captures a different sense of \\emph{typical}."],
    ["Mean versus median", "The mean uses every value but is pulled by \\textbf{outliers}; the median resists them. For skewed data such as incomes, the median is often the fairer summary."],
    ["Grouped data", "For data given in intervals, estimate the mean using the midpoint of each interval weighted by its frequency."],
  ],
  "5.3": [
    ["Why spread matters", "Two data sets can share a mean yet differ wildly in consistency. \\textbf{Spread} measures how far the values fall from the centre."],
    ["Range and IQR", "The \\textbf{range} is max minus min; the \\textbf{interquartile range} $\\mathrm{IQR}=Q_3-Q_1$ describes the middle $50\\%$ and shrugs off outliers."],
    ["Standard deviation", "The \\textbf{standard deviation} $\\sigma$ is the typical distance of a value from the mean; a larger $\\sigma$ means more spread-out, less consistent data."],
  ],
  "5.4": [
    ["Cutting data into parts", "\\textbf{Quartiles} split ordered data into four equal parts — $Q_1$, the median $Q_2$, and $Q_3$ — while \\textbf{percentiles} split it into a hundred."],
    ["The five-number summary", "Minimum, $Q_1$, median, $Q_3$, and maximum summarize a distribution and are exactly what a \\textbf{box plot} draws."],
    ["Spotting outliers", "A value is commonly flagged as an outlier when it lies more than $1.5\\times\\mathrm{IQR}$ beyond $Q_1$ or $Q_3$."],
  ],
  "5.5": [
    ["Choosing a graph", "\\textbf{Histograms} show the shape of continuous data, \\textbf{bar graphs} compare categories, and \\textbf{stem-and-leaf} plots keep the original values visible."],
    ["Describe the shape", "Summarize a distribution by its \\textbf{shape} (symmetric, skewed, uniform), \\textbf{centre}, and \\textbf{spread}, noting any gaps or clusters."],
    ["Skew direction", "A \\textbf{right-skewed} distribution has a long right tail with mean greater than median; left-skew is its mirror image."],
  ],
  "5.6": [
    ["Standardizing values", "A \\textbf{z-score} $z=\\dfrac{x-\\mu}{\\sigma}$ reports how many standard deviations a value is from its mean, so values from different data sets can be compared fairly."],
    ["Comparing across sets", "A score of $80$ may be excellent in one class and ordinary in another; the z-score, not the raw mark, reveals which is relatively better."],
    ["Sign and size", "A positive z lies above the mean, a negative z below, and the larger the magnitude the more unusual the value."],
  ],
  // ── Unit 6: Two-Variable Statistics ────────────────────────
  "6.1": [
    ["Two variables at once", "A \\textbf{scatter plot} graphs paired data as points to expose a relationship between two variables."],
    ["Reading correlation", "An upward trend is \\textbf{positive} correlation, downward is \\textbf{negative}, and a shapeless cloud is none. A tight, line-like cloud is \\textbf{strong}; a loose one is \\textbf{weak}."],
    ["The correlation coefficient", "The value $r$, from $-1$ to $1$, measures the strength and direction of a \\emph{linear} relationship; values near $\\pm1$ signal a strong linear fit."],
  ],
  "6.2": [
    ["The line of best fit", "\\textbf{Linear regression} finds the straight line $y=ax+b$ that best captures the trend in a scatter plot, computed with technology."],
    ["Slope and intercept", "The slope $a$ predicts the change in $y$ per unit of $x$, and the intercept $b$ predicts $y$ when $x=0$. Interpret both in the situation's context."],
    ["Correlation first", "A regression line is only meaningful when the correlation is reasonably strong and the pattern is genuinely linear."],
  ],
  "6.3": [
    ["What $r^2$ tells you", "The \\textbf{coefficient of determination} $r^2$ is the fraction of the variation in $y$ explained by the line; $r^2=0.85$ means $85\\%$ of it is accounted for by $x$."],
    ["Making predictions", "Substitute an $x$-value into the regression equation to predict $y$. \\textbf{Interpolation} within the data is reliable; \\textbf{extrapolation} beyond it is risky."],
    ["Judging the fit", "The closer $r^2$ is to $1$, the better the line fits and the more trustworthy its predictions."],
  ],
  "6.4": [
    ["When a line will not do", "Many relationships curve. If a scatter plot bends, a \\textbf{non-linear} model — quadratic, exponential, or power — can fit far better than a straight line."],
    ["Choosing a model", "Match the model to the shape and the context: multiplying growth suggests exponential, a symmetric arch suggests quadratic. Compare candidates with $r^2$."],
    ["Using the model", "Once fitted with technology, the equation predicts values — and again, interpolation deserves more trust than extrapolation."],
  ],
  "6.5": [
    ["A crucial distinction", "A strong correlation shows two variables moving together; it does \\textbf{not} prove that one causes the other."],
    ["Hidden variables", "A \\textbf{confounding} variable can drive both quantities: ice-cream sales and drownings rise together because of a shared cause, summer heat."],
    ["Establishing cause", "Only a well-designed \\textbf{experiment} with controls — not observation alone — can support a claim of causation."],
  ],
  // ── Unit 7: The Culminating Investigation ──────────────────
  "7.1": [
    ["Start with a question", "An investigation opens with a clear, answerable \\textbf{question} and a hypothesis about what you expect to find."],
    ["Plan the data", "Decide which variables to measure, which population to study, and how to sample it without bias — thoughtful design prevents useless data."],
    ["Anticipate the analysis", "Choose your tools (graphs, summary statistics, regression) \\emph{before} collecting, so the data you gather actually answers the question."],
  ],
  "7.2": [
    ["Gathering data", "Collect data through surveys, experiments, or existing databases, following your sampling plan so the sample stays representative."],
    ["Organizing it", "Record everything in a clean, structured table that can be sorted, filtered, and analyzed; tidy organization prevents errors down the line."],
    ["Checking quality", "Scan for missing entries, outliers, and measurement mistakes — deciding how to handle them honestly is part of managing data well."],
  ],
  "7.3": [
    ["Summarize first", "Begin with \\textbf{descriptive} tools — measures of centre and spread, plus graphs — to see the overall picture before digging deeper."],
    ["Look for relationships", "Use scatter plots, correlation, and regression to test whether variables are linked, and probability where chance plays a role."],
    ["Interpret in context", "Statistics only matter when tied back to the original question — always translate the numbers into a plain-language finding."],
  ],
  "7.4": [
    ["Answer the question", "A conclusion should directly answer the original question, backed by your evidence — not merely restate the numbers you found."],
    ["Show the evidence", "Support the argument with well-labelled graphs and the key statistics, so a reader can see why the conclusion follows."],
    ["Name the limitations", "Strong reports state their \\textbf{limitations} — sample size, possible bias, the danger of extrapolation — and avoid over-claiming causation."],
  ],
};

export default LEARN;
