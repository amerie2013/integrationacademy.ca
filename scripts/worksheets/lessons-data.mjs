// "Learn the Concept" teaching sections for MTH1W worksheets, keyed by code.
// The PDF generator (pdfgen.mjs) and LaTeX export (tex.mjs) render a module's
// inline `lesson` field if present, otherwise fall back to this map. Each entry
// is an array of [heading, bodyHTML] blocks (bodyHTML may use $math$, <b>, <br>,
// <code>). 1.1 lives inline in its own module; the rest live here.

export const LESSONS = {
  // ── Unit 1: Number Sense ───────────────────────────────────
  "1.2": [
    ["Numbers are “dense”", "Pick any two different numbers, say $1$ and $2$. You can always find one <b>between</b> them — for example their average $1.5$. Then between $1$ and $1.5$ you can find $1.25$, and you can keep going <b>forever</b>. This is called <b>density</b>: between any two rational (or real) numbers there are infinitely many more. There is no “next” number right after a given one."],
    ["What infinity really is", "<b>Infinity ($\\infty$) is not a number</b> — it is the idea of something that never ends. The natural numbers $1, 2, 3, \\dots$ continue without stopping, so we say there are infinitely many of them. You cannot do ordinary arithmetic with $\\infty$ (for instance, $\\infty-\\infty$ has no single value)."],
    ["Approaching a limit", "A <b>limit</b> is the value a list of numbers gets closer and closer to. The list $0.9,\\ 0.99,\\ 0.999,\\ \\dots$ creeps toward $1$ without ever passing it — we say its limit is $1$. In fact $0.\\overline{9}=1$ exactly. Limits let us give a single, finite answer to an endless process."],
  ],
  "1.3": [
    ["What a power means", "A <b>power</b> is repeated multiplication. In $a^n$, the <b>base</b> $a$ is multiplied by itself $n$ times: $2^4=2\\times2\\times2\\times2=16$. The small raised number $n$ is the <b>exponent</b>. Two special cases: $a^1=a$ and $a^0=1$ (for $a\\ne0$)."],
    ["Scientific notation", "Scientific notation writes a number as $a\\times10^n$ with $1\\le a<10$ and $n$ an integer — a compact way to handle very large or very small numbers. Move the decimal so one non-zero digit sits in front: $53\\,000=5.3\\times10^4$ and $0.00042=4.2\\times10^{-4}$. A positive exponent means a big number; a negative exponent means a small one."],
    ["Reading the exponent", "The exponent tells you how far the decimal moves. $10^3=1000$ (right 3 places), $10^{-2}=0.01$ (left 2 places). To convert back to an ordinary number, just shift the decimal that many places: $6.1\\times10^5=610\\,000$."],
  ],
  "1.4": [
    ["Why exponent laws exist", "Exponent laws are shortcuts for multiplying and dividing powers that share the <b>same base</b>, so you never have to write out every factor. They only apply when the bases match."],
    ["The main laws", "<b>Product:</b> $a^m\\cdot a^n=a^{m+n}$ (add the exponents).<br><b>Quotient:</b> $\\dfrac{a^m}{a^n}=a^{m-n}$ (subtract them).<br><b>Power of a power:</b> $(a^m)^n=a^{mn}$ (multiply them).<br><b>Power of a product:</b> $(ab)^n=a^n b^n$.<br><b>Zero &amp; negative:</b> $a^0=1$ and $a^{-n}=\\dfrac{1}{a^n}$."],
    ["Using them together", "Simplify one law at a time. For example $\\dfrac{x^5\\cdot x^2}{x^3}=\\dfrac{x^7}{x^3}=x^4$. A negative exponent just means “flip it”: $2^{-3}=\\dfrac{1}{2^3}=\\dfrac18$."],
  ],
  "1.5": [
    ["Integers describe direction", "Integers are the whole numbers together with their negatives: $\\dots,-2,-1,0,1,2,\\dots$ In real life the sign shows an <b>opposite</b>: $+5$ can mean 5 above zero, a deposit, or a temperature rise, while $-5$ means 5 below zero, a withdrawal, or a drop."],
    ["Adding and subtracting", "Picture a number line. Adding a positive moves <b>right</b>; adding a negative moves <b>left</b>. Subtracting is the same as adding the opposite: $3-7=3+(-7)=-4$. Two negatives in a subtraction turn positive: $5-(-2)=5+2=7$."],
    ["Multiplying and dividing", "<b>Same signs give a positive; different signs give a negative.</b> So $(-4)\\times(-3)=12$ but $(-4)\\times3=-12$. The same rule holds for division: $\\dfrac{-12}{-3}=4$ and $\\dfrac{-12}{3}=-4$."],
  ],
  "1.6": [
    ["What a fraction is", "A fraction $\\dfrac{a}{b}$ means $a$ equal parts out of $b$. The bottom number (<b>denominator</b>) says how many pieces the whole is cut into; the top number (<b>numerator</b>) says how many you take. A <b>unit fraction</b> has numerator $1$, like $\\dfrac12,\\ \\dfrac13,\\ \\dfrac14$ — a single piece of the whole."],
    ["Equivalent fractions", "Multiplying or dividing top and bottom by the <b>same</b> number gives an equal fraction: $\\dfrac12=\\dfrac24=\\dfrac36$. Dividing until no common factor remains puts a fraction in <b>lowest terms</b>: $\\dfrac68=\\dfrac34$."],
    ["Comparing fractions", "Fractions are easiest to compare with a <b>common denominator</b>. To compare $\\dfrac23$ and $\\dfrac34$, rewrite them as $\\dfrac{8}{12}$ and $\\dfrac{9}{12}$ — so $\\dfrac34$ is larger. With unit fractions, the <b>bigger the denominator, the smaller the piece</b>: $\\dfrac15<\\dfrac13$."],
  ],
  "1.7": [
    ["Adding and subtracting fractions", "You can only add or subtract fractions once they share a <b>common denominator</b>. Rewrite each over that denominator, then combine the numerators: $\\dfrac13+\\dfrac14=\\dfrac{4}{12}+\\dfrac{3}{12}=\\dfrac{7}{12}$. Watch the signs just as you would with integers."],
    ["Multiplying and dividing fractions", "<b>Multiply</b> straight across: $\\dfrac23\\times\\dfrac45=\\dfrac{8}{15}$. <b>Divide</b> by multiplying by the reciprocal (flip the second fraction): $\\dfrac23\\div\\dfrac45=\\dfrac23\\times\\dfrac54=\\dfrac{10}{12}=\\dfrac56$."],
    ["Handling the signs", "The integer sign rules still apply: same signs make a positive, different signs make a negative. So $\\left(-\\dfrac23\\right)\\times\\dfrac45=-\\dfrac{8}{15}$, and $-\\dfrac13-\\dfrac14=-\\dfrac{7}{12}$. Always reduce your final answer to lowest terms."],
  ],
  "1.8": [
    ["Ratios and rates", "A <b>ratio</b> compares two quantities of the same kind, like $3:2$. A <b>rate</b> compares two <b>different</b> kinds of quantity, like 60 km per 1 hour. A <b>unit rate</b> has a denominator of 1 (60 km/h, \\$2.50 per litre) and makes comparing easy."],
    ["Percentages", "A <b>percent</b> means “out of 100”: $25\\%=\\dfrac{25}{100}=0.25$. To find a percent of a number, multiply: $25\\%$ of $80$ is $0.25\\times80=20$. To go the other way, divide: 20 is what percent of 80? $\\dfrac{20}{80}=0.25=25\\%$."],
    ["Proportions", "A <b>proportion</b> says two ratios are equal: $\\dfrac{a}{b}=\\dfrac{c}{d}$. Solve for a missing value by <b>cross-multiplying</b>: from $\\dfrac34=\\dfrac{x}{20}$ you get $4x=60$, so $x=15$. Proportions handle scaling, recipes, maps, and best-buy problems."],
  ],
  // ── Unit 2: Algebra ────────────────────────────────────────
  "2.1": [
    ["Turning words into symbols", "Algebra uses a <b>variable</b> (a letter like $x$) to stand for an unknown number. Translating a sentence means matching words to operations: “more than / sum” → $+$, “less than / difference” → $-$, “times / product / of” → $\\times$, “divided by / per” → $\\div$."],
    ["Watch the order", "Some phrases reverse the order. “5 less than $x$” is $x-5$, <b>not</b> $5-x$. “Twice a number increased by 3” is $2x+3$. Decide what the variable represents before you write anything."],
    ["Expression vs equation", "An <b>expression</b> (like $2x+3$) is a phrase with no equals sign — you simplify or evaluate it. An <b>equation</b> (like $2x+3=11$) has an equals sign and can be <b>solved</b> for the variable."],
  ],
  "2.2": [
    ["What “equivalent” means", "Two expressions are <b>equivalent</b> if they give the same value for <b>every</b> choice of the variable. For example $2(x+3)$ and $2x+6$ always match — try $x=5$: both give $16$."],
    ["The distributive property", "The main tool for rewriting is the <b>distributive property</b>: $a(b+c)=ab+ac$. It expands brackets: $3(x+4)=3x+12$. Reversed, it lets you <b>factor</b> out a common factor: $6x+9=3(2x+3)$."],
    ["Checking equivalence", "To test whether two expressions are equivalent, either simplify both to the same form, or substitute a number into each and compare. If even one value disagrees, they are not equivalent."],
  ],
  "2.3": [
    ["Like terms", "<b>Like terms</b> have exactly the same variable part, such as $3x$ and $5x$, or $2x^2$ and $-x^2$. Only like terms can be combined — add or subtract their coefficients: $3x+5x=8x$. You cannot combine $3x$ and $3x^2$."],
    ["Collecting terms", "To simplify, expand any brackets first, then group like terms and combine: $2(x+3)+4x=2x+6+4x=6x+6$. Keep the constants (plain numbers) separate from the variable terms."],
    ["Signs and care", "A minus sign in front of a bracket flips every sign inside: $-(x-4)=-x+4$. Work one operation at a time and double-check each sign — most simplifying errors come from a dropped negative."],
  ],
  "2.4": [
    ["What solving means", "Solving an equation means finding the value of the variable that makes both sides <b>equal</b>. The key idea: whatever you do to one side, do to the other, to keep the equation balanced."],
    ["Inverse operations", "Undo operations in reverse order. To solve $2x+3=11$: subtract 3 from both sides ($2x=8$), then divide both sides by 2 ($x=4$). Addition undoes subtraction, and multiplication undoes division."],
    ["Build, solve, check", "First turn the situation into an equation, then solve it, then <b>check</b> by substituting your answer back. For $2x+3=11$, put $x=4$: $2(4)+3=11$ ✓. A check catches mistakes instantly."],
  ],
  // ── Unit 3: Coding ─────────────────────────────────────────
  "3.1": [
    ["Code and algebra are cousins", "A line of code like <code>y = 2 * x + 3</code> expresses the same idea as the algebraic $2x+3$. A <b>variable</b> in code stores a value you can reuse; assigning <code>x = 5</code> is like letting $x=5$ in math."],
    ["Instructions run in order", "Code runs one step at a time, top to bottom, and the order matters: <code>x = 5</code> then <code>y = x + 1</code> gives $y=6$, but swapping the lines would use $x$ before it exists. This mirrors following the order of operations."],
    ["Inputs and outputs", "A program takes an <b>input</b>, processes it, and returns an <b>output</b> — just like a function machine: put in $x$, apply the rule, read out $y$. Thinking in inputs and outputs helps you plan both code and equations."],
  ],
  "3.2": [
    ["An algorithm is a recipe", "An <b>algorithm</b> is a clear, ordered list of steps that solves a problem — like a recipe. Before coding, write the steps in plain language; this is called <b>pseudocode</b>."],
    ["From steps to code", "Each step becomes an instruction. “Double the number, then add 5” becomes <code>result = 2 * n + 5</code>. Break a task into the smallest steps you can, so nothing is left to guess."],
    ["Loops repeat work", "When a step repeats, a <b>loop</b> saves you from writing it many times — a loop that runs 3 times adds a value again and again, the way repeated addition becomes multiplication."],
  ],
  "3.3": [
    ["Trace the code", "To understand a program, <b>trace</b> it: pretend to be the computer and track each variable's value line by line. Writing the values in a small table prevents mistakes."],
    ["Predict the output", "Once you can trace, you can <b>predict</b> what a program prints without running it — follow the same order of operations the computer uses."],
    ["Alter code safely", "To change a program's behaviour, change one thing at a time and re-trace. Swapping <code>+</code> for <code>*</code>, or changing a starting value, changes the output in a predictable way."],
  ],
  // ── Unit 4: Linear Relations ───────────────────────────────
  "4.1": [
    ["What a relation is", "A <b>relation</b> links two quantities, shown as a table, graph, or equation. A relation is <b>linear</b> when its graph is a straight line and it changes by a <b>constant amount</b> each step."],
    ["Spotting linear in a table", "A relation is linear when the $x$-values rise by a fixed step <b>and</b> the $y$-values change by a fixed amount too (equal <b>first differences</b>). If those differences vary, the relation is non-linear."],
    ["Linear from an equation", "An equation is linear when the variable appears only to the first power, like $y=2x+3$. Powers, products of variables, or a variable in a denominator (such as $y=x^2$ or $y=\\dfrac1x$) make it non-linear."],
  ],
  "4.2": [
    ["Four ways to show a line", "A linear relation can appear as a <b>table</b>, a <b>graph</b>, an <b>equation</b>, or a <b>description in words</b>. All four describe the same relationship — moving between them is the key skill."],
    ["Slope and intercept", "In $y=mx+b$, the <b>slope</b> $m$ is the constant rate of change (rise over run) and $b$ is the <b>$y$-intercept</b>, where the line crosses the $y$-axis. In a table, $m$ is the change in $y$ per step and $b$ is the value when $x=0$."],
    ["Building the equation", "From a table or graph, read the starting value ($b$) and the step size ($m$), then write $y=mx+b$. Starting at 3 and rising 2 each step gives $y=2x+3$."],
  ],
  "4.3": [
    ["Compare slope and intercept", "To compare two linear relations, look at their <b>slopes</b> and <b>$y$-intercepts</b>. The slope shows which grows faster (steeper line); the intercept shows which starts higher."],
    ["Where lines meet", "Two lines <b>intersect</b> where their $x$ and $y$ values are equal — the crossing point on a graph. That point is the solution common to both relations, such as a break-even point."],
    ["Reading real situations", "In word problems, the slope is usually a rate (cost per item, speed) and the intercept a fixed starting amount (a base fee). Comparing two plans means comparing these two numbers."],
  ],
  "4.4": [
    ["Horizontal and vertical lines", "A <b>horizontal</b> line has equation $y=k$ — every point shares the same $y$-value, and its slope is $0$. A <b>vertical</b> line has equation $x=k$ — every point shares the same $x$-value, and its slope is <b>undefined</b>."],
    ["Lines through the origin", "When $b=0$, the line $y=mx$ passes through the <b>origin</b> $(0,0)$. These describe direct <b>proportions</b>, where doubling $x$ doubles $y$."],
    ["Quick graphing", "To graph any line, plot the $y$-intercept first, then use the slope (rise over run) to step to a second point, and draw the straight line through them."],
  ],
  "4.5": [
    ["Changing the slope", "In $y=mx+b$, a larger $m$ makes the line <b>steeper</b>; a slope between 0 and 1 makes it flatter. A <b>negative</b> slope tilts the line the other way (downhill from left to right)."],
    ["Changing the intercept", "Changing $b$ slides the whole line <b>up or down</b> without changing its steepness — a larger $b$ shifts it up, a smaller $b$ shifts it down."],
    ["Predicting the effect", "Because $m$ controls the tilt and $b$ the height, you can predict how a graph moves before drawing. Two lines with the same $m$ are parallel; the one with the larger $b$ sits above."],
  ],
  "4.6": [
    ["From slope and a point", "Given the slope $m$ and one point, substitute both into $y=mx+b$ and solve for $b$. Slope 2 through $(1,5)$: $5=2(1)+b$, so $b=3$, giving $y=2x+3$."],
    ["From two points", "First find the slope with $m=\\dfrac{y_2-y_1}{x_2-x_1}$ (rise over run). Then use either point to find $b$, and write $y=mx+b$."],
    ["From a graph or table", "Read the $y$-intercept where the line crosses the $y$-axis, and read the slope as the rise over run between two clear points. Then assemble $y=mx+b$."],
  ],
  "4.7": [
    ["What general form is", "The <b>general form</b> of a line is $Ax+By+C=0$, where $A,B,C$ are integers and $A$ is usually non-negative. Every straight line can be written this way — including vertical lines that $y=mx+b$ cannot handle."],
    ["Rewriting into general form", "To convert $y=mx+b$, move every term to one side so the other side is $0$, then clear fractions. For example $y=\\tfrac23x+1$ becomes $2x-3y+3=0$."],
    ["Reading intercepts", "General form makes intercepts easy: set $y=0$ for the $x$-intercept, and $x=0$ for the $y$-intercept. Those two points are enough to graph the line."],
  ],
  "4.8": [
    ["Two useful forms", "<b>Slope-intercept form</b> $y=mx+b$ shows the slope and $y$-intercept at a glance — best for graphing. <b>General form</b> $Ax+By+C=0$ keeps whole-number coefficients and works for every line — best for a tidy standard answer."],
    ["Converting between them", "From general to slope-intercept, solve for $y$: $2x-3y+3=0$ gives $y=\\tfrac23x+1$. To go the other way, move terms to one side and clear fractions."],
    ["Choosing a form", "Use $y=mx+b$ when you need the slope or want to graph quickly; use $Ax+By+C=0$ when a question asks for general form or integer coefficients."],
  ],
  "4.9": [
    ["Parallel lines", "<b>Parallel</b> lines never meet and have <b>equal slopes</b>. For example $y=2x+1$ and $y=2x-4$ are parallel — same $m$, different $b$."],
    ["Perpendicular lines", "<b>Perpendicular</b> lines cross at $90^\\circ$, and their slopes are <b>negative reciprocals</b> (they multiply to $-1$). If one line has slope $2$, a perpendicular line has slope $-\\dfrac12$."],
    ["Using the slope test", "Compare slopes to classify two lines: equal → parallel; negative reciprocals (product $-1$) → perpendicular; neither → they simply cross at some other angle."],
  ],
  // ── Unit 5: Geometry & Measurement ─────────────────────────
  "5.1": [
    ["Geometry has deep roots", "Geometry (Greek for “earth measure”) grew from practical needs — surveying land, building, and astronomy — in ancient Egypt, Babylon, and Greece. Many rules we still use were discovered thousands of years ago."],
    ["Key milestones", "The Egyptians used a knotted 3–4–5 rope to make right angles; the Greeks, especially Euclid, organized geometry into logical proofs; and Pythagoras gave us the famous relationship for right triangles."],
    ["Why the history matters", "Seeing where these ideas came from shows that mathematics is a human, problem-solving activity — each rule was invented to answer a real question about shape, size, or space."],
  ],
  "5.2": [
    ["Triangle basics", "The three angles of any triangle add to $180^\\circ$. Triangles are named by their sides (equilateral, isosceles, scalene) or their angles (acute, right, obtuse). These facts let you find a missing angle."],
    ["Circle basics", "A circle's key parts are the <b>radius</b> (centre to edge), the <b>diameter</b> ($2\\times$ radius), and the <b>circumference</b> (the distance around, $C=2\\pi r$). Every radius of one circle is equal."],
    ["Combining shapes in design", "Many patterns are built by repeating and combining triangles and circles. Knowing their angle and length properties lets you reproduce or analyze a design accurately."],
  ],
  "5.3": [
    ["Why units matter", "A measurement is meaningless without its <b>unit</b> — 5 could be metres, minutes, or millilitres. Choosing a sensible unit (metres for a room, kilometres for a trip) keeps the numbers manageable."],
    ["The metric system", "Metric units scale by powers of 10, which makes converting easy: $1$ m $=100$ cm, $1$ km $=1000$ m, $1$ L $=1000$ mL. Moving to a bigger unit divides; moving to a smaller unit multiplies."],
    ["Converting carefully", "To convert, multiply by a fraction equal to 1 that cancels the old unit: $250\\text{ cm}\\times\\dfrac{1\\text{ m}}{100\\text{ cm}}=2.5$ m. Always write the units and check that the unwanted ones cancel."],
  ],
  "5.4": [
    ["The right-triangle rule", "In a <b>right triangle</b>, the side opposite the right angle is the <b>hypotenuse</b> (the longest side). The Pythagorean theorem states $a^2+b^2=c^2$, where $c$ is the hypotenuse and $a,b$ are the two legs."],
    ["Finding a missing side", "For the hypotenuse, add the squares of the legs and take the square root: legs 3 and 4 give $c=\\sqrt{9+16}=\\sqrt{25}=5$. For a leg, subtract instead: $a=\\sqrt{c^2-b^2}$."],
    ["When you can use it", "The theorem works <b>only</b> for right triangles. It is used constantly for distances, diagonals, heights, and checking whether a corner is truly square."],
  ],
  "5.5": [
    ["What perimeter is", "<b>Perimeter</b> is the total distance around the outside of a shape — just add all the side lengths. For a rectangle, $P=2(l+w)$; for a circle the perimeter is the <b>circumference</b>, $C=2\\pi r$."],
    ["Scaling a shape", "If you multiply every length by a factor $k$, the <b>perimeter also multiplies by $k$</b>. Double all the sides and the perimeter doubles — perimeter grows in direct proportion to length."],
    ["Working backwards", "Because perimeter scales the same way as length, you can find a missing dimension from a known perimeter — for a square, each side is $\\dfrac{P}{4}$."],
  ],
  "5.6": [
    ["What area is", "<b>Area</b> measures the surface a shape covers, in square units. Common formulas: rectangle $A=lw$, triangle $A=\\tfrac12bh$, circle $A=\\pi r^2$."],
    ["Scaling and area", "If you multiply every length by a factor $k$, the <b>area multiplies by $k^2$</b>. Double the sides and the area becomes 4 times bigger; triple them and it is 9 times bigger. Area grows with the <b>square</b> of the scale factor."],
    ["Why the square", "Area depends on two dimensions (length $\\times$ width), so scaling both by $k$ multiplies the product by $k\\times k=k^2$. That is why a pizza with twice the diameter holds four times the food."],
  ],
  "5.7": [
    ["What volume is", "<b>Volume</b> measures the space a solid fills, in cubic units. For a prism or cylinder, volume is the <b>base area times the height</b>: box $V=lwh$, cylinder $V=\\pi r^2h$. Cones and pyramids hold one-third as much: $V=\\tfrac13(\\text{base})h$."],
    ["Scaling and volume", "If you multiply every length by a factor $k$, the <b>volume multiplies by $k^3$</b>. Double all the dimensions and the volume becomes 8 times larger, because volume depends on three dimensions."],
    ["Choosing the formula", "Match the formula to the solid, keep every measurement in the same unit, and give the answer in cubic units (cm³, m³). Volume tells you how much a container <b>holds</b>."],
  ],
  "5.8": [
    ["What surface area is", "<b>Surface area</b> is the total area of all the outside faces of a solid — imagine unfolding it flat and adding up every face. It is measured in square units."],
    ["Finding it by faces", "Add the area of each face. A rectangular box has 6 faces in 3 matching pairs: $SA=2(lw+lh+wh)$. A cylinder is two circles plus a wrapped rectangle: $SA=2\\pi r^2+2\\pi rh$."],
    ["Surface area vs volume", "Surface area (like area) scales with $k^2$, while volume scales with $k^3$. That is why large objects have relatively little surface for their size — an idea used in packaging, biology, and cooking."],
  ],
  // ── Unit 6: Data ───────────────────────────────────────────
  "6.1": [
    ["What big data is", "<b>Big data</b> means extremely large collections of information — from apps, sensors, and websites — far too big to handle by hand. Computers search it for patterns to make predictions and decisions."],
    ["Where it comes from", "Every search, purchase, and click can be recorded. Businesses and scientists use this data to recommend products, forecast weather, or study health trends."],
    ["Benefits and cautions", "Big data can improve services and research, but it also raises concerns about <b>privacy, consent, and bias</b>. A responsible user asks where the data came from and how it is used."],
  ],
  "6.2": [
    ["Summarizing one variable", "One-variable data is a single list of values (like test scores). We summarize it with <b>measures of centre</b>: the <b>mean</b> (average), the <b>median</b> (middle value), and the <b>mode</b> (most common value)."],
    ["Spread of the data", "The <b>range</b> (highest minus lowest) shows how spread out the data is. Together, centre and spread give a picture of the whole set without listing every value."],
    ["Choosing the right measure", "The <b>mean</b> uses every value but is pulled by extreme outliers; the <b>median</b> is steadier when a few values are unusually high or low. Pick the measure that represents the data most honestly."],
  ],
  "6.3": [
    ["What a scatter plot shows", "A <b>scatter plot</b> graphs paired data (like height vs shoe size) as points. Its shape reveals whether the two variables are <b>related</b>."],
    ["Types of correlation", "If the points trend upward there is a <b>positive correlation</b>; downward is <b>negative</b>; no pattern means <b>no correlation</b>. A tight, line-like cloud is a <b>strong</b> correlation; a loose cloud is <b>weak</b>."],
    ["Correlation is not cause", "Even a strong correlation does <b>not</b> prove that one variable causes the other — a hidden third factor may explain both. Always interpret a trend carefully."],
  ],
  "6.4": [
    ["What modelling is", "<b>Mathematical modelling</b> is using math to describe a real situation and make predictions. It turns a messy real problem into equations or graphs you can work with."],
    ["The modelling cycle", "The process repeats these steps: <b>understand</b> the problem, <b>make assumptions</b> and choose variables, <b>build</b> a model, <b>test</b> it against real data, and <b>refine</b> it if it does not fit."],
    ["Models are approximations", "A model is never perfect — it simplifies reality. A good model is <b>useful</b>, not exact: simple enough to use, yet accurate enough to trust for its purpose."],
  ],
  // ── Unit 7: Financial Literacy ─────────────────────────────
  "7.1": [
    ["Money decisions need math", "Everyday choices — buying, saving, comparing prices — are really math problems. Good decisions weigh <b>cost against value</b> and separate needs from wants."],
    ["Comparing options", "Use unit rates and totals to compare fairly: the cheaper <b>per unit</b> option, or the plan with the lower total cost over time, is usually the better buy. Watch for hidden fees and taxes."],
    ["Budgeting basics", "A smart decision fits your <b>income</b>. Spending less than you earn leaves room to save; spending more leads to debt. Planning ahead avoids nasty surprises."],
  ],
  "7.2": [
    ["Growing and shrinking value", "<b>Appreciation</b> is an increase in value over time (a house, collectibles). <b>Depreciation</b> is a decrease (a new car, electronics). Both are usually a percentage change each year."],
    ["Calculating the change", "To increase by a percent, multiply by $(1+\\text{rate})$; to decrease, multiply by $(1-\\text{rate})$. A \\$100 item rising $10\\%$ becomes $100\\times1.10=\\$110$; falling $10\\%$ becomes $100\\times0.90=\\$90$."],
    ["Repeating each year", "Over several years the change compounds — apply the factor once per year. A \\$20\\,000 car depreciating $10\\%$/yr is worth $20\\,000\\times0.90\\times0.90$ after two years."],
  ],
  "7.3": [
    ["Simple interest", "<b>Interest</b> is the cost of borrowing money (or the reward for saving it). <b>Simple interest</b> is charged only on the original amount: $I=Prt$, where $P$ is the principal, $r$ the yearly rate, and $t$ the time in years."],
    ["Compound interest", "<b>Compound interest</b> is charged on the principal <b>plus</b> the interest already earned, so it grows faster: $A=P(1+i)^n$. Each period, interest earns more interest."],
    ["Borrowing wisely", "When borrowing, a higher rate or a longer term means paying more interest overall. Comparing the <b>total</b> you repay — not just the monthly amount — shows the true cost."],
  ],
  "7.4": [
    ["What a budget is", "A <b>budget</b> is a plan for your money: it lists expected <b>income</b> and planned <b>expenses</b> over a period, so you can see whether you will have enough."],
    ["Income vs expenses", "Split expenses into <b>fixed</b> (the same each month, like rent) and <b>variable</b> (changing, like food or entertainment). A balanced budget keeps total expenses at or below income."],
    ["Saving and adjusting", "Whatever is left after expenses is <b>savings</b>. If expenses exceed income, a budget shows exactly where to cut back. Reviewing and adjusting it regularly keeps your finances on track."],
  ],
};

export default LESSONS;
