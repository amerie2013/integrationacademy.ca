// AP Calculus AB exam prep — Unit 9 (Exam Mastery), lessons 9.5–9.8.
// Original wording, examples and numbers throughout (see u1a for notes). The
// worked questions here are written for this course; none is taken from a
// released examination, and none is reused in the bank or the free-response set.
import { r, lesson, lede, goals, sec, p, disp, def, thm, exam, mistake, justify, ex, pq, key, table } from "./apcalc/kit.mjs";

export const u9b = {};

// ───────────────────────── 9.5 ─────────────────────────
u9b["9.5"] = lesson({
  code: "9.5", unit: 9, official: "exam skills", calc: "No calculator",
  title: "Free-Response Type: Functions Given by Graphs and Tables",
  parts: () => [
    lede(r`Some questions give you no formula at all: only a table of five or six values, or a graph made of line segments and arcs. There is nothing to differentiate and nothing to integrate. These questions test whether you understand what a derivative and an integral <em>are</em>, and whether you can call on the right theorem by name. They are the questions on which a student with weak algebra and strong understanding can earn all nine points.`),
    goals([
      r`Estimate a derivative and an integral from a table.`,
      r`Use the Intermediate Value and Mean Value Theorems on tabulated functions.`,
      r`Read values of \(f\), \(\displaystyle\int f\) and \(f'\) from a graph.`,
      r`Work a complete table question in fifteen minutes.`,
    ]),

    sec("From a table"),
    table(
      ["The part asks", "Method"],
      [
        [r`estimate \(f'(c)\)`, r`the slope between the two nearest table values on either side of \(c\); show the difference quotient`],
        [r`approximate \(\displaystyle\int_a^bf\)`, r`a left, right, midpoint or trapezoidal sum with the subintervals of the table; the widths are usually unequal`],
        [r`"must there be a time when \(f(t)=k\)?"`, r`Intermediate Value Theorem: continuity, and \(k\) between two table values`],
        [r`"must there be a time when \(f'(t)=m\)?"`, r`Mean Value Theorem: find two table values whose average rate of change is \(m\)`],
        [r`\(\displaystyle\int_a^bf'(t)\,dt\)`, r`exactly \(f(b)-f(a)\), from the table`],
      ],
    ),

    sec("From a graph"),
    table(
      ["Given the graph of", "To find", "Use"],
      [
        [r`\(f\)`, r`\(\displaystyle\int_a^bf(x)\,dx\)`, "signed areas of triangles, rectangles, semicircles"],
        [r`\(f\)`, r`\(f'(c)\)`, "the slope of the graph at \\(c\\)"],
        [r`\(f\)`, r`\(g(x)=\displaystyle\int_a^xf(t)\,dt\): its extrema, concavity`, r`\(g'=f\) and \(g''=f'\)`],
        [r`\(f'\)`, r`extrema and inflection points of \(f\)`, r`zeros with sign change of \(f'\); where \(f'\) changes direction`],
        [r`\(f'\)`, r`\(f(b)\) from a known \(f(a)\)`, r`\(f(b)=f(a)+\displaystyle\int_a^bf'(x)\,dx\), by areas`],
      ],
    ),

    sec("A complete question"),
    ex("exam", "The pumping station", r`Water is pumped out of a flooded field at the rate \(R(t)\) litres per minute, where \(R\) is a differentiable function of time \(t\) minutes. Selected values are shown. \[\begin{array}{c|ccccc}t&0&2&5&7&10\\ \hline R(t)&3&9&14&12&6\end{array}\] (a) Use the data to estimate \(R'(6)\). Show your work and indicate units. (b) Use a trapezoidal sum with the four subintervals of the table to approximate \(\displaystyle\int_0^{10}R(t)\,dt\), and explain the meaning of the integral. (c) Must there be a time \(t\), \(0\lt t\lt10\), at which \(R'(t)=0\)? Justify your answer. (d) Let \(G(x)=\displaystyle\int_0^xR(t)\,dt\). Find \(G'(5)\), and estimate \(G''(6)\).`, [
      r`(a) \(R'(6)\approx\dfrac{R(7)-R(5)}{7-5}=\dfrac{12-14}{2}=-1\) litre per minute per minute.`,
      r`(b) \(\tfrac12(3+9)(2)+\tfrac12(9+14)(3)+\tfrac12(14+12)(2)+\tfrac12(12+6)(3)=12+34.5+26+27=99.5\). About 99.5 litres of water are pumped out of the field during the first 10 minutes.`,
      r`(c) \(R\) is differentiable, and therefore continuous. Since \(R(2)=9\lt12\lt14=R(5)\), the Intermediate Value Theorem gives a time \(c\) in \((2,5)\) with \(R(c)=12\). Then \(R(c)=R(7)=12\), so by the Mean Value Theorem on \([c,7]\) there is a time \(t\) in \((c,7)\) with \(R'(t)=\dfrac{R(7)-R(c)}{7-c}=0\).`,
      r`(d) \(G'(5)=R(5)=14\). \(G''(6)=R'(6)\approx-1\).`,
    ], r`Yes to part (c), by two theorems used one after the other.`),
    p(r`<strong>Marking it.</strong> (a) One point for the difference quotient and value, one for units. (b) One for the trapezoidal sum, one for the value, one for the meaning with units. (c) One for the conditions (differentiable, hence continuous) and one for a correct argument naming the theorems. (d) One point each. Part (c) is the hard one: the table never shows two equal values, so the Intermediate Value Theorem has to create one first.`),

    sec("Common errors"),
    mistake("averaging the wrong pair", r`<p>To estimate \(R'(6)\), use the nearest table values on each side, \(t=5\) and \(t=7\). Using \(t=0\) and \(t=10\) gives the average rate over the whole table, which is a different quantity.</p>`),
    mistake("equal widths assumed", r`<p>The subintervals here have widths 2, 3, 2 and 3. A trapezoidal "formula" that assumes equal widths gives a wrong answer and no credit.</p>`),
    mistake("a theorem with no conditions", r`<p>Both the Intermediate Value Theorem and the Mean Value Theorem need continuity, and the second needs differentiability. Say so, using what the question tells you about the function.</p>`),
    mistake("an estimate where an exact value exists", r`<p>\(\displaystyle\int_2^7R'(t)\,dt\) is exactly \(R(7)-R(2)=3\). A Riemann sum there earns nothing.</p>`),

    sec("Write it so it scores"),
    justify(
      r`For the pumping station, is there a time \(t\), \(5\lt t\lt10\), at which \(R'(t)=-1.6\)? Justify your answer.`,
      r`\(\dfrac{R(10)-R(5)}{10-5}=\dfrac{6-14}{5}=-1.6\). Since \(R\) is differentiable on \((5,10)\) and continuous on \([5,10]\), the Mean Value Theorem guarantees a time \(t\) in \((5,10)\) with \(R'(t)=-1.6\).`,
      r`The difference quotient is shown with table values, the conditions are stated, and the theorem is named. Each of the three is needed.`,
    ),
    exam(r`<p>When a table question says "justify", the answer is almost always one of the three existence theorems. Decide which before you write: a value of the function is the Intermediate Value Theorem; a value of the derivative is the Mean Value Theorem.</p>`),

    sec("Practice"),
    pq(r`For the pumping station, estimate \(R'(3.5)\).`, r`\(\dfrac{R(5)-R(2)}{5-2}=\dfrac53\) litres per minute per minute.`, "core"),
    pq(r`For the pumping station, approximate \(\displaystyle\int_0^{10}R(t)\,dt\) with a left Riemann sum.`, r`\((2)(3)+(3)(9)+(2)(14)+(3)(12)=97\).`, "core"),
    pq(r`For the pumping station, find \(\displaystyle\int_2^7R'(t)\,dt\).`, r`\(R(7)-R(2)=3\), exactly.`, "exam"),
    pq(r`For the pumping station, must there be a time at which \(R(t)=10\)? How many such times, at least?`, r`Yes, at least two: one in \((2,5)\) and one in \((7,10)\), by the Intermediate Value Theorem, since \(R\) is continuous and 10 lies between the table values on each of those intervals.`, "exam"),
    pq(r`For the pumping station, approximate the average rate at which water is pumped over the 10 minutes, using the trapezoidal sum.`, r`\(\dfrac{99.5}{10}=9.95\) litres per minute.`, "exam"),

    sec("Summary"),
    key([
      ["Derivative", "Difference quotient from the nearest values."],
      ["Integral", "Sum with the table's own widths."],
      ["Function value exists", "Intermediate Value Theorem."],
      ["Derivative value exists", "Mean Value Theorem."],
    ]),
  ],
});

// ───────────────────────── 9.6 ─────────────────────────
u9b["9.6"] = lesson({
  code: "9.6", unit: 9, official: "exam skills", calc: "Both",
  title: "Free-Response Type: Particle Motion",
  parts: () => [
    lede(r`A particle moves along a line. You are given its velocity, as a formula, a graph or a table, and one position. Everything else is yours to find: when it turns, how far it goes, where it ends up, whether it is speeding up. Motion questions use derivatives and integrals in the same breath, which is why examiners like them, and they reward one habit above all others: keeping velocity, speed, displacement and distance strictly apart.`),
    goals([
      r`Move between position, velocity and acceleration in both directions.`,
      r`Distinguish displacement from total distance, and velocity from speed.`,
      r`Decide whether a particle is speeding up or slowing down.`,
      r`Work a complete motion question in fifteen minutes.`,
    ]),

    sec("The vocabulary"),
    table(
      ["Quantity", "How to find it", "Can it be negative?"],
      [
        ["velocity", r`\(v(t)=x'(t)\)`, "yes: negative means moving in the negative direction"],
        ["acceleration", r`\(a(t)=v'(t)\)`, "yes"],
        ["speed", r`\(|v(t)|\)`, "no"],
        ["displacement", r`\(\displaystyle\int_a^bv(t)\,dt\)`, "yes"],
        ["total distance", r`\(\displaystyle\int_a^b|v(t)|\,dt\)`, "no"],
        ["position", r`\(x(b)=x(a)+\displaystyle\int_a^bv(t)\,dt\)`, "yes"],
      ],
    ),
    p(r`The particle is at rest when \(v=0\); it changes direction when \(v\) changes sign. Its speed is increasing when \(v\) and \(a\) have the same sign and decreasing when they have opposite signs.`),

    sec("A complete question"),
    ex("exam", "With a calculator", r`A particle moves along the \(x\)-axis with velocity \(v(t)=3\cos\!\left(\dfrac{t^2}{5}\right)-1\) for \(0\le t\le4\). At time \(t=0\) its position is \(x=2\). (a) Find the acceleration of the particle at \(t=3\). Is the speed of the particle increasing or decreasing at \(t=3\)? Give a reason. (b) Find the time at which the particle changes direction. Justify your answer. (c) Find the total distance travelled by the particle for \(0\le t\le4\). (d) Find the position of the particle at the time when it is farthest to the right.`, [
      r`(a) \(a(3)=v'(3)\approx-3.506\). Also \(v(3)\approx-1.682\). Since \(v(3)\lt0\) and \(a(3)\lt0\), the speed is increasing.`,
      r`(b) \(v(t)=0\) when \(t\approx2.481\). \(v\) changes from positive to negative there, so the particle changes direction at \(t\approx2.481\).`,
      r`(c) \(\displaystyle\int_0^4|v(t)|\,dt\approx7.484\).`,
      r`(d) The particle moves right while \(v\gt0\), that is until \(t\approx2.481\), and left afterwards. Its position then is \(2+\displaystyle\int_0^{2.481}v(t)\,dt\approx5.910\).`,
    ], r`(a) \(-3.506\), speed increasing &nbsp; (b) \(t\approx2.481\) &nbsp; (c) \(7.484\) &nbsp; (d) \(x\approx5.910\).`),
    p(r`<strong>Marking it.</strong> (a) One point for \(a(3)\), one for the conclusion with both signs given as the reason. (b) One for the time, one for the sign change. (c) One for the integral of \(|v|\), one for the value. (d) One for an integral of \(v\) from 0 to the turning time, one for adding the initial position, one for the answer.`),

    sec("When the velocity is a graph"),
    p(r`If \(v\) is given as a graph of line segments, the same questions are answered without a calculator. Acceleration is the slope of the graph. Displacement is signed area; total distance is unsigned area. The particle is farthest right at a time when \(v\) changes from positive to negative, or at an endpoint. Speed is increasing wherever the graph is moving away from the \(t\)-axis.`),

    sec("Common errors"),
    mistake("speed judged from acceleration alone", r`<p>Negative acceleration does not mean "slowing down". It means velocity is decreasing. If velocity is already negative, the particle is speeding up.</p>`),
    mistake("displacement given for distance", r`<p>In the example the displacement is only \(0.337\), while the distance travelled is \(7.484\). The question asked for distance.</p>`),
    mistake("the initial position left out", r`<p>\(\displaystyle\int_0^{2.481}v(t)\,dt\approx3.910\) is how far the particle has moved from its start. Its position is \(2+3.910\).</p>`),
    mistake("v = 0 taken as a change of direction", r`<p>The velocity must change sign. A particle can stop and continue in the same direction.</p>`),

    sec("Write it so it scores"),
    justify(
      r`For the particle above, find its position at \(t=4\), and determine whether it is moving toward or away from the origin at that time. Give a reason.`,
      r`\(x(4)=2+\displaystyle\int_0^4v(t)\,dt\approx2.337\). Since \(x(4)\gt0\) and \(v(4)=3\cos(3.2)-1\approx-3.995\lt0\), the particle is to the right of the origin and moving left, so it is moving toward the origin.`,
      r`"Toward or away from the origin" needs two signs, of position and of velocity. Opposite signs mean toward; the same sign means away. Giving only the velocity earns no reasoning point.`,
    ),
    exam(r`<p>Underline three words when you read a motion question: <em>distance</em> or <em>displacement</em>; <em>speed</em> or <em>velocity</em>; <em>position</em>. Each one decides which integral or which sign you need.</p>`),

    sec("Practice"),
    pq(r`For the particle above, find its displacement for \(0\le t\le4\).`, r`\(\displaystyle\int_0^4v(t)\,dt\approx0.337\).`, "core"),
    pq(r`For the particle above, what is its speed at \(t=3\)?`, r`\(|v(3)|\approx1.682\).`, "core"),
    pq(r`For the particle above, find its average velocity for \(0\le t\le4\).`, r`\(\dfrac14\displaystyle\int_0^4v(t)\,dt\approx0.084\).`, "exam"),
    pq(r`A particle has \(v(2)=5\) and \(a(2)=-3\). Is it speeding up or slowing down at \(t=2\)?`, r`Slowing down: \(v\) and \(a\) have opposite signs.`, "exam"),
    pq(r`A velocity graph consists of a segment from \((0,4)\) to \((4,-4)\). Find the displacement and the total distance for \(0\le t\le4\), and the time at which the particle is farthest right.`, r`Triangles of area 4 above and 4 below: displacement 0, distance 8. Farthest right at \(t=2\), where \(v\) changes from positive to negative.`, "exam"),

    sec("Summary"),
    key([
      ["Turns", r`\(v\) changes sign.`],
      ["Speeding up", r`\(v\) and \(a\) have the same sign.`],
      ["Distance", r`\(\displaystyle\int|v|\); displacement is \(\displaystyle\int v\).`],
      ["Position", "Initial position plus displacement."],
    ]),
  ],
});

// ───────────────────────── 9.7 ─────────────────────────
u9b["9.7"] = lesson({
  code: "9.7", unit: 9, official: "exam skills", calc: "No calculator",
  title: "Free-Response Type: Differential Equations",
  parts: () => [
    lede(r`One free-response question in most years begins "Consider the differential equation…". It then asks for some combination of four things: a slope field, a tangent-line estimate, a second derivative, and a particular solution by separation of variables. The last of these carries five of the nine points, awarded step by step in a pattern that has not changed in decades. This is the most predictable question on the paper, and the one where method marks are easiest to collect.`),
    goals([
      r`Sketch a slope field at given points.`,
      r`Use a tangent line to approximate a solution, and say whether it over- or underestimates.`,
      r`Find \(\dfrac{d^2y}{dx^2}\) from the differential equation.`,
      r`Earn all five points for a separation-of-variables solution.`,
    ]),

    sec("The four standard parts"),
    table(
      ["The part asks", "Method", "Typical points"],
      [
        ["sketch a slope field at the points shown", "substitute each point into the equation; draw a short segment with that slope", "2"],
        [r`approximate \(f(a+h)\) with a tangent line`, r`\(y\approx f(a)+f'(a)\,h\), with \(f'(a)\) from the equation`, "1–2"],
        [r`find \(\dfrac{d^2y}{dx^2}\); over- or underestimate`, r`differentiate the equation implicitly, then replace \(\dfrac{dy}{dx}\)`, "2"],
        ["find the particular solution", "separate, integrate both sides, add the constant, use the condition, solve for \\(y\\)", "5"],
      ],
    ),

    sec("The five points for separation of variables"),
    `<ol><li><strong>Separation.</strong> All of \(y\) with \(dy\), all of \(x\) with \(dx\). Without this, none of the five points can be earned.</li><li><strong>The antiderivative in \(y\).</strong></li><li><strong>The antiderivative in \(x\).</strong></li><li><strong>The constant of integration and the initial condition.</strong> The constant must appear when you integrate, not later. Without it, at most two of the five points.</li><li><strong>Solving for \(y\).</strong> Including the choice of sign or branch that fits the initial condition.</li></ol>`,

    sec("A complete question"),
    ex("exam", "Without a calculator", r`Consider the differential equation \(\dfrac{dy}{dx}=2x(3-y)\). Let \(y=f(x)\) be the particular solution with \(f(1)=1\). (a) Find the slope of the solution curve at each of the points \((0,1)\), \((1,1)\), \((1,3)\) and \((-1,2)\). (b) Write an equation of the line tangent to the graph of \(f\) at \(x=1\), and use it to approximate \(f(1.1)\). (c) Find \(\dfrac{d^2y}{dx^2}\) in terms of \(x\) and \(y\). Is the approximation in part (b) an overestimate or an underestimate? (d) Find the particular solution \(y=f(x)\). (e) Find \(\displaystyle\lim_{x\to\infty}f(x)\).`, [
      r`(a) \(0\), \(4\), \(0\) and \(-2\).`,
      r`(b) \(y=1+4(x-1)\), so \(f(1.1)\approx1.4\).`,
      r`(c) \(\dfrac{d^2y}{dx^2}=2(3-y)-2x\dfrac{dy}{dx}=2(3-y)-4x^2(3-y)=(3-y)\left(2-4x^2\right)\). At \((1,1)\) this is \((2)(-2)=-4\lt0\), so the graph is concave down near \(x=1\) and the tangent-line value is an overestimate.`,
      r`(d) \(\dfrac{dy}{3-y}=2x\,dx\), so \(-\ln|3-y|=x^2+C\). At \((1,1)\): \(-\ln2=1+C\), so \(C=-1-\ln2\).`,
      r`\(\ln|3-y|=1+\ln2-x^2\), so \(|3-y|=2e^{1-x^2}\). Since \(3-y=2\gt0\) at the initial point, \(3-y=2e^{1-x^2}\).`,
      r`(e) \(e^{1-x^2}\to0\) as \(x\to\infty\).`,
    ], r`(d) \(y=3-2e^{1-x^2}\) &nbsp; (e) \(3\).`),
    p(r`<strong>Marking it.</strong> Part (d) is marked exactly as listed above: separation; \(-\ln|3-y|\); \(x^2\); the constant with the condition; the final solved form. A student who forgets the minus sign from \(\dfrac{1}{3-y}\) loses one point, not five, provided every other step follows correctly from it.`),

    sec("Common errors"),
    mistake("no separation shown", r`<p>Writing the answer from memory, or integrating \(2x(3-y)\) with respect to \(x\) as though \(y\) were a constant, earns none of the five points.</p>`),
    mistake("the constant added at the end", r`<p>\(y=3-e^{-x^2}+C\) is not the general solution. The constant belongs in the line \(-\ln|3-y|=x^2+C\).</p>`),
    mistake("the sign from 1/(3 − y)", r`<p>\(\displaystyle\int\dfrac{dy}{3-y}=-\ln|3-y|\). The inner derivative is \(-1\).</p>`),
    mistake("d²y/dx² without replacing dy/dx", r`<p>The answer should be in terms of \(x\) and \(y\) only. Substitute the original equation for \(\dfrac{dy}{dx}\) after differentiating.</p>`),

    sec("Write it so it scores"),
    justify(
      r`For the differential equation above, a different solution passes through the point \((0,5)\). Does it have a relative maximum, a relative minimum or neither at \(x=0\)? Justify your answer.`,
      r`At \((0,5)\), \(\dfrac{dy}{dx}=2(0)(3-5)=0\) and \(\dfrac{d^2y}{dx^2}=(3-5)(2-0)=-4\lt0\). So the solution has a relative maximum at \(x=0\).`,
      r`Both conditions of the second derivative test are shown with values: a zero first derivative and a negative second derivative. Either one alone would not earn the justification.`,
    ),
    exam(r`<p>If the algebra of solving for \(y\) defeats you, stop after applying the initial condition. You will already have four of the five points.</p>`),

    sec("Practice"),
    pq(r`For the equation above, what constant function is a solution?`, r`\(y=3\), since it makes \(\dfrac{dy}{dx}=0\) for all \(x\).`, "core"),
    pq(r`For the equation above, along which lines are the slope-field segments horizontal?`, r`\(x=0\) and \(y=3\).`, "core"),
    pq(r`Use the tangent line at \((1,1)\) to approximate \(f(0.9)\).`, r`\(1+4(-0.1)=0.6\).`, "exam"),
    pq(r`Verify that \(y=3-2e^{1-x^2}\) satisfies the initial condition and the differential equation.`, r`\(f(1)=3-2e^{0}=1\). \(\dfrac{dy}{dx}=4xe^{1-x^2}\) and \(2x(3-y)=2x\cdot2e^{1-x^2}\); the two are equal.`, "exam"),
    pq(r`Find the particular solution of \(\dfrac{dy}{dx}=2x(3-y)\) with \(f(0)=5\).`, r`\(-\ln|3-y|=x^2+C\) with \(C=-\ln2\), so \(|3-y|=2e^{-x^2}\). Since \(3-y=-2\lt0\) at the start, \(y=3+2e^{-x^2}\).`, "stretch"),

    sec("Summary"),
    key([
      ["Slope field", "Substitute each point."],
      ["Tangent line", r`\(f(a)+f'(a)h\); concavity decides over or under.`],
      ["Second derivative", r`Differentiate, then substitute for \(\dfrac{dy}{dx}\).`],
      ["Five points", "Separate, two antiderivatives, constant with condition, solve."],
    ]),
  ],
});

// ───────────────────────── 9.8 ─────────────────────────
u9b["9.8"] = lesson({
  code: "9.8", unit: 9, official: "exam skills", calc: "Both",
  title: "Multiple-Choice Technique and the Last Two Weeks",
  parts: () => [
    lede(r`Half of your score comes from forty-two questions with four options each. Every wrong option was put there on purpose: it is the answer you get by making one particular, common mistake. That is bad news if you make the mistake, because your wrong answer will be waiting for you and will look right. It is good news if you know the mistakes, because then the options themselves tell you what to check.`),
    goals([
      r`Recognise the standard types of wrong option.`,
      r`Eliminate options without finishing the calculation.`,
      r`Decide when to skip a question and come back.`,
      r`Follow a two-week revision plan.`,
    ]),

    sec("Where wrong options come from"),
    table(
      ["Type of wrong option", "Example"],
      [
        ["the chain-rule factor left out", r`\(\cos(3x)\) offered for the derivative of \(\sin(3x)\)`],
        ["the value of the function, not the derivative", r`\(f(2)\) offered where \(f'(2)\) is asked`],
        ["the integral without the initial value", r`\(\displaystyle\int_1^4f'\) offered for \(f(4)\)`],
        ["displacement offered for distance", "the signed integral where the unsigned one is needed"],
        ["the location offered for the value", r`\(x=3\) where the maximum value \(f(3)\) is asked`],
        ["a sign error", r`\(-\dfrac14\) and \(\dfrac14\) both present`],
        ["a critical point that is not an extremum", r`a zero of \(f'\) where \(f'\) does not change sign`],
        ["degrees used for radians", "a decimal that is far too small"],
      ],
    ),
    p(r`When two options differ only in sign, or by a factor of 2 or 3, the question is testing exactly that step. Slow down there.`),

    sec("Working method"),
    `<ol><li><strong>First pass.</strong> Answer everything you can do in under two minutes. Mark a provisional answer on anything longer and flag it.</li><li><strong>Second pass.</strong> Return to the flagged questions with the time that is left.</li><li><strong>Eliminate.</strong> A sign, a unit, or the size of the answer often rules out two options before any calculus is done.</li><li><strong>Never blank.</strong> There is no deduction for a wrong answer.</li></ol>`,

    sec("Worked examples"),
    ex("core", "Reading the options", r`\(\dfrac{d}{dx}\displaystyle\int_1^{x^3}\sqrt{1+t^2}\,dt=\) &nbsp; (A) \(\sqrt{1+x^6}\) &nbsp; (B) \(3x^2\sqrt{1+x^2}\) &nbsp; (C) \(3x^2\sqrt{1+x^6}\) &nbsp; (D) \(\sqrt{1+x^6}-\sqrt2\)`, [
      r`The Fundamental Theorem gives \(\sqrt{1+(x^3)^2}\), and the chain rule multiplies by \(3x^2\).`,
      r`(A) forgets the chain rule. (B) forgets to substitute the upper limit. (D) treats the derivative as an evaluation at both limits.`,
    ], r`(C). Each wrong option is one named error.`),
    ex("exam", "A zero that is not an extremum", r`A function has \(f'(x)=x^2(x-5)\). At which values of \(x\) does \(f\) have a relative minimum? &nbsp; (A) \(x=0\) only &nbsp; (B) \(x=5\) only &nbsp; (C) \(x=0\) and \(x=5\) &nbsp; (D) no values`, [
      r`\(x^2\ge0\), so the sign of \(f'\) is the sign of \(x-5\).`,
      r`\(f'\) is negative on both sides of 0 and changes from negative to positive at 5.`,
    ], r`(B). Option (C) is there for students who list every zero of \(f'\).`),
    ex("exam", "Eliminating before computing", r`\(\displaystyle\int_0^2|x-1|\,dx=\) &nbsp; (A) \(0\) &nbsp; (B) \(\dfrac12\) &nbsp; (C) \(1\) &nbsp; (D) \(2\)`, [
      r`The integrand is never negative and is not identically zero, so (A) is impossible. (A) is what \(\displaystyle\int_0^2(x-1)\,dx\) gives.`,
      r`Two triangles, each with base 1 and height 1.`,
    ], r`(C).`),
    ex("stretch", "A calculator question", r`The average value of \(f(x)=\cos\!\left(x^2\right)\) on \([0,2]\) is &nbsp; (A) \(-0.654\) &nbsp; (B) \(0.231\) &nbsp; (C) \(0.461\) &nbsp; (D) \(-0.827\)`, [
      r`\(\displaystyle\int_0^2\cos\!\left(x^2\right)dx\approx0.461\), and the interval has length 2.`,
      r`(C) is the integral without the division. (A) is \(f(2)\). (D) is \(\dfrac{f(2)-f(0)}{2}\), the average rate of change.`,
    ], r`(B).`),

    sec("The last two weeks"),
    table(
      ["Days before the exam", "What to do"],
      [
        ["14 to 11", "One unit test per day from Units 1 to 4, timed. Mark it the same day and list every error by type."],
        ["10 to 7", "The same for Units 5 to 8. Reread only the lessons your error list points to."],
        ["6 and 5", "A full timed multiple-choice section, both parts. Then the phrase bank (lesson 9.2) from memory."],
        ["4 and 3", "A full timed free-response section, both parts. Mark it against the scoring guides, point by point."],
        ["2", "Redo every question you got wrong in the two full sections. Nothing new."],
        ["1", "Check the calculator: batteries, radian mode, functions cleared. Read the phrase bank once. Stop by early evening."],
      ],
    ),
    p(r`Timed practice is the point of this schedule. Reading solutions feels productive and changes very little; working a question against the clock and then marking it honestly is what moves a score.`),

    sec("Common errors"),
    mistake("changing a right answer", r`<p>Change an answer only when you have found a specific error in your work. A vague unease is not a reason.</p>`),
    mistake("misreading NOT and EXCEPT", r`<p>A few questions ask which statement is false. Circle the word when you see it.</p>`),
    mistake("solving more than was asked", r`<p>If the question asks for \(f'(2)\), do not simplify \(f'(x)\) first. Substitute as early as you can.</p>`),
    mistake("learning new material in the last week", r`<p>The last week is for speed and accuracy on what you already know. A new topic learned in a hurry displaces two that were secure.</p>`),

    sec("Write it so it scores"),
    justify(
      r`After a timed practice section you have twelve wrong answers. Describe how to turn them into a revision list.`,
      r`For each wrong answer, write one line: the lesson it belongs to, and the type of error (chain-rule factor, sign, misread question, ran out of time, did not know the method). Count the types. Revise the two most frequent types first, then the lessons that appear more than once.`,
      r`A list of errors by type shows what to practise. A list of scores does not. Most students find that three or four error types account for most of their lost points.`,
    ),
    exam(r`<p>On the day: answer every multiple-choice question, write a set-up for every free-response part, and move on when the time for a question is up. Those three habits are worth more than any single topic.</p>`),

    sec("Practice"),
    pq(r`\(\dfrac{d}{dx}\big[\ln(5x)\big]=\) &nbsp; (A) \(\dfrac{1}{5x}\) &nbsp; (B) \(\dfrac1x\) &nbsp; (C) \(\dfrac5x\) &nbsp; (D) \(5\ln x\). Which is correct, and what error does (A) represent?`, r`(B): \(\dfrac{1}{5x}\cdot5\). Option (A) omits the chain-rule factor.`, "core"),
    pq(r`A question asks for the maximum <em>value</em> of \(f(x)=6x-x^2\). The options include 3 and 9. Which is correct?`, r`9. The maximum occurs at \(x=3\), and \(f(3)=9\). The option 3 is the location.`, "core"),
    pq(r`A particle has \(v(t)=2t-4\) for \(0\le t\le3\). The options for total distance include \(-3\), 3 and 5. Which is correct?`, r`5: \(4\) to the left, then \(1\) to the right. \(-3\) is the displacement, and a distance cannot be negative.`, "exam"),
    pq(r`You have 6 minutes left and 5 questions unanswered in Part A. What do you do?`, r`Enter an answer for all five immediately, then use the remaining time on the ones that look quickest.`, "exam"),
    pq(r`Without computing, explain why \(\displaystyle\int_1^3\dfrac{1}{x}\,dx\) cannot be \(-1.099\).`, r`The integrand is positive on \([1,3]\), so the integral is positive. (It is \(\ln3\approx1.099\).)`, "exam"),

    sec("Summary"),
    key([
      ["Wrong options", "Each is one common mistake."],
      ["Two passes", "Quick questions first; flagged ones after."],
      ["Never blank", "No penalty for a wrong answer."],
      ["Last fortnight", "Timed practice, marked honestly, errors listed by type."],
    ]),
  ],
});
