// AP Calculus AB exam prep — Unit 9 (Exam Mastery), lessons 9.1–9.4.
// Original wording, examples and numbers throughout (see u1a for notes). The
// worked questions here are written for this course; none is taken from a
// released examination, and none is reused in the bank or the free-response set.
import { r, lesson, lede, goals, sec, p, disp, def, thm, exam, mistake, justify, ex, pq, key, table } from "./apcalc/kit.mjs";

export const u9a = {};

// ───────────────────────── 9.1 ─────────────────────────
u9a["9.1"] = lesson({
  code: "9.1", unit: 9, official: "exam skills", calc: "Both",
  title: "How the Exam Is Built and Scored",
  parts: () => [
    lede(r`By now you know the calculus. What is left is a three-hour-and-fifteen-minute event with a fixed shape, and the students who score highest are rarely the ones who know the most mathematics. They are the ones who know exactly what is coming, how long each part deserves, and where the points are. This lesson is the map.`),
    goals([
      r`Describe the four parts of the exam and what is allowed in each.`,
      r`Plan your time question by question.`,
      r`Explain how the two sections combine into a final score.`,
      r`Know what earns a point and what never does.`,
    ]),

    sec("The four parts"),
    table(
      ["Part", "Questions", "Time", "Calculator", "Share of the score"],
      [
        ["Section I, Part A", "29 multiple choice", "62 minutes", "not permitted", "about one third"],
        ["Section I, Part B", "13 multiple choice", "38 minutes", "required", "about one sixth"],
        ["Section II, Part A", "2 free response", "30 minutes", "required", "about one sixth"],
        ["Section II, Part B", "4 free response", "60 minutes", "not permitted", "about one third"],
      ],
    ),
    p(r`Each section counts for half of the final score. The exam is taken in a digital testing application: multiple-choice answers are entered on screen, while free-response questions are read on screen and answered by hand in a paper booklet. Check the current year's instructions from your exam coordinator, because the delivery details are set by the examining body and can change.`),
    p(r`During Part B of Section II you may go back to the two Part A questions, but without the calculator. Any calculator work must be finished in the first 30 minutes.`),

    sec("Pacing"),
    table(
      ["Part", "Time per question", "Working rule"],
      [
        ["I-A", "about 2 minutes", "after 2 minutes with no progress, mark a guess and move on"],
        ["I-B", "about 3 minutes", "decide in the first 20 seconds whether the calculator is needed at all"],
        ["II-A and II-B", "15 minutes", "read every part first; start with the part you can do"],
      ],
    ),
    p(r`There is no penalty for a wrong multiple-choice answer. Never leave one blank.`),

    sec("How the score is built"),
    p(r`Each multiple-choice question is worth one point, and each free-response question is worth nine. The two sections are scaled so that they contribute equally, and the total is converted to a score from 1 to 5. The conversion is set separately for every exam, so no fixed percentage guarantees a given score. As a rough guide from past years, a 5 has usually needed somewhat under two thirds of the available points, and a 3 somewhat under half.`),
    p(r`Two consequences follow. A paper with many small errors can still earn the top score. And a blank free-response part is far more expensive than an imperfect one: most parts award a point for the set-up alone.`),

    sec("What earns points on free response"),
    table(
      ["Earns a point", "Earns nothing"],
      [
        ["a correct set-up: the integral, the equation, the derivative expression", "a bare answer where work was required"],
        ["a correct answer supported by that set-up", "calculator syntax"],
        ["a justification that names the reason (a sign change, a theorem and its conditions)", r`"by the graph", "by my calculator", "it looks like"`],
        ["correct units when the question asks for them", "an explanation with no reference to the context"],
        ["work that follows correctly from an earlier wrong answer", "a correct statement contradicted by another on the same page"],
      ],
    ),

    sec("Worked examples"),
    ex("core", "A time budget", r`You reach question 20 of Part A with 24 minutes left. Are you on pace?`, [
      r`There are 10 questions still to answer, 20 to 29.`,
      r`24 minutes for 10 questions is 2.4 minutes each, slightly more than the overall average of about 2.1.`,
    ], r`Yes, with a small margin. A useful checkpoint is question 15 at the half-hour mark.`),
    ex("exam", "Where the points are", r`A free-response part reads: "Find the total distance travelled by the particle for \(0\le t\le6\)." A student writes only "\(12.4\)". The correct value is \(12.417\). How many of the part's 2 points are earned?`, [
      r`One point is normally for the set-up, \(\displaystyle\int_0^6|v(t)|\,dt\), which is absent.`,
      r`The answer point requires three correct decimal places, and \(12.4\) has one.`,
    ], r`None. Writing the integral and "\(\approx12.417\)" would have taken ten more seconds and earned both.`),
    ex("exam", "Follow-through", r`In part (a) a student finds the wrong intersection point, \(x=1.8\) where it should be \(x=2.1\). In part (b) the student sets up the area integral correctly using 1.8 as the limit and evaluates it correctly. What happens to part (b)?`, [
      r`Readers mark part (b) against the student's own value from part (a), provided the error did not make the problem simpler.`,
    ], r`Part (b) can earn full credit. Never abandon a later part because an earlier answer looks wrong.`),

    sec("Common errors"),
    mistake("spending five minutes on one multiple-choice question", r`<p>Every question in the section is worth the same. Five minutes spent on one is two others not attempted.</p>`),
    mistake("leaving the calculator questions until Part B", r`<p>The calculator is collected after the first 30 minutes of Section II. Finish every number that needs it before then.</p>`),
    mistake("crossing out work and writing nothing in its place", r`<p>Crossed-out work is not marked. If you have no time to replace it, leave it: imperfect work can earn points and deleted work cannot.</p>`),
    mistake("writing two answers", r`<p>If two different answers appear, a reader does not choose the better one. Decide, and cross out the other.</p>`),

    sec("Write it so it scores"),
    justify(
      r`A part asks: "Is the amount of water in the tank increasing or decreasing at time \(t=5\)? Give a reason for your answer."`,
      r`The rate of change of the amount is \(R(5)-D(5)=14.2-9.6=4.6\gt0\), so the amount of water is increasing at \(t=5\).`,
      r`"Give a reason" means the conclusion alone earns nothing. The reason has to be a mathematical statement about the quantity that decides the question, here the sign of the net rate, with its value shown.`,
    ),
    exam(r`<p>Bring a calculator you have used all year, with fresh batteries, and set to radian mode. A new or borrowed calculator on the day is a common and avoidable disaster.</p>`),

    sec("Practice"),
    pq(r`How many multiple-choice questions are there, and how many of them allow a calculator?`, r`42 in total; 13 of them (Part B) require a calculator.`, "core"),
    pq(r`How long is allowed for the four no-calculator free-response questions?`, r`60 minutes, an average of 15 minutes each.`, "core"),
    pq(r`You cannot decide between two options on a multiple-choice question. What should you do?`, r`Choose one. There is no penalty for a wrong answer, so a guess between two options is worth half a point on average.`, "core"),
    pq(r`A student earns 30 of the 42 multiple-choice points and 31 of the 54 free-response points. Roughly what fraction of the available score is this?`, r`Each section counts for half: \(\dfrac12\left(\dfrac{30}{42}+\dfrac{31}{54}\right)\approx0.64\), about 64%.`, "exam"),
    pq(r`A free-response part asks you to "write, but do not evaluate, an integral expression". What do you write, and what do you not do?`, r`The integral, with integrand and limits, in standard notation. Do not expand it, antidifferentiate it or compute a value.`, "exam"),

    sec("Summary"),
    key([
      ["Structure", "29 + 13 multiple choice; 2 + 4 free response."],
      ["Pace", "2 minutes, 3 minutes, 15 minutes."],
      ["Never", "Leave a multiple-choice answer blank."],
      ["Always", "Write the set-up before the answer."],
    ]),
  ],
});

// ───────────────────────── 9.2 ─────────────────────────
u9a["9.2"] = lesson({
  code: "9.2", unit: 9, official: "exam skills", calc: "No calculator",
  title: "A Phrase Bank for Justifications",
  parts: () => [
    lede(r`"Justify your answer" appears in almost every free-response question, and it is where well-prepared students lose the most points. The mathematics is usually right. The sentence is not. Readers award a justification point for one specific statement, and a paragraph of true remarks that does not contain that statement earns nothing. The good news is that there are only about a dozen such statements. This lesson lists them.`),
    goals([
      r`Write the accepted justification for extrema, monotonicity, concavity and inflection.`,
      r`State each existence theorem with its conditions.`,
      r`Recognise wording that earns nothing.`,
      r`Justify in terms of the function the question is about, not a different one.`,
    ]),

    sec("Behaviour of a function"),
    table(
      ["Claim", "Sentence that earns the point"],
      [
        [r`\(f\) is increasing on \((a,b)\)`, r`\(f'(x)\gt0\) for all \(x\) in \((a,b)\).`],
        [r`\(f\) has a relative maximum at \(x=c\)`, r`\(f'\) changes from positive to negative at \(x=c\).`],
        [r`\(f\) has a relative minimum at \(x=c\)`, r`\(f'\) changes from negative to positive at \(x=c\).`],
        [r`\(f\) has a relative minimum at \(x=c\) (second derivative test)`, r`\(f'(c)=0\) and \(f''(c)\gt0\).`],
        [r`the graph of \(f\) is concave up on \((a,b)\)`, r`\(f''(x)\gt0\) on \((a,b)\), or: \(f'\) is increasing on \((a,b)\).`],
        [r`the graph of \(f\) has a point of inflection at \(x=c\)`, r`\(f''\) changes sign at \(x=c\), or: \(f'\) changes from increasing to decreasing (or the reverse) at \(x=c\).`],
        [r`the absolute maximum of \(f\) on \([a,b]\) is \(M\)`, r`a comparison of \(f\) at every critical point and both endpoints.`],
        [r`a tangent-line approximation is an overestimate`, r`\(f''(x)\lt0\) on the interval, so the graph is concave down and lies below its tangent line.`],
      ],
    ),

    sec("Motion"),
    table(
      ["Claim", "Sentence that earns the point"],
      [
        ["the particle is moving left", r`\(v(t)\lt0\).`],
        ["the particle changes direction at \\(t=c\\)", r`\(v\) changes sign at \(t=c\).`],
        ["the speed is increasing at \\(t=c\\)", r`\(v(c)\) and \(a(c)\) have the same sign.`],
        ["the speed is decreasing at \\(t=c\\)", r`\(v(c)\) and \(a(c)\) have opposite signs.`],
      ],
    ),

    sec("The three existence theorems"),
    table(
      ["Theorem", "Conditions to state", "Conclusion"],
      [
        ["Intermediate Value Theorem", r`\(f\) is continuous on \([a,b]\); \(k\) is between \(f(a)\) and \(f(b)\)`, r`there is a \(c\) in \((a,b)\) with \(f(c)=k\)`],
        ["Mean Value Theorem", r`\(f\) is continuous on \([a,b]\) and differentiable on \((a,b)\)`, r`there is a \(c\) in \((a,b)\) with \(f'(c)=\dfrac{f(b)-f(a)}{b-a}\)`],
        ["Extreme Value Theorem", r`\(f\) is continuous on the closed interval \([a,b]\)`, r`\(f\) has an absolute maximum and an absolute minimum on \([a,b]\)`],
      ],
    ),
    p(r`When a question says a function is differentiable, you may write "differentiable, and therefore continuous". That single phrase supplies the condition for all three theorems. The theorem must be named or clearly described, and its conditions must be stated, every time.`),

    sec("Words that earn nothing"),
    table(
      ["Do not write", "Because"],
      [
        [r`"the graph goes from increasing to decreasing"`, r`which graph? Name the function: "\(f'\) changes from positive to negative".`],
        [r`"it" or "the function"`, r`when \(f\), \(f'\) and \(f''\) are all in play, a pronoun is ambiguous and is not credited.`],
        [r`"the slope changes sign"`, r`say which derivative changes sign.`],
        [r`"\(f'(c)=0\), so there is a maximum"`, r`a zero derivative gives a candidate only.`],
        [r`"\(f''(c)=0\), so there is a point of inflection"`, r`\(f''\) must change sign.`],
        [r`"by the calculator" or "from the graph"`, r`a justification is a calculus statement.`],
      ],
    ),

    sec("Worked examples"),
    ex("core", "A relative extremum", r`A function has \(f'(x)=(x-2)(x+3)\). Justify that \(f\) has a relative minimum at \(x=2\).`, [
      r`For \(-3\lt x\lt2\), \(f'(x)\lt0\); for \(x\gt2\), \(f'(x)\gt0\).`,
    ], r`"\(f\) has a relative minimum at \(x=2\) because \(f'\) changes from negative to positive there."`),
    ex("exam", "When the graph given is the derivative", r`The graph of \(f'\) is given. It is increasing on \((0,3)\) and decreasing on \((3,7)\). Justify that the graph of \(f\) has a point of inflection at \(x=3\).`, [
      r`The claim is about \(f\); the evidence is about \(f'\).`,
    ], r`"The graph of \(f\) has a point of inflection at \(x=3\) because \(f'\) changes from increasing to decreasing there." Writing "because the graph changes from increasing to decreasing" would not earn the point: the graph shown is \(f'\), and the sentence does not say so.`),
    ex("exam", "An existence argument", r`A differentiable function \(g\) has \(g(1)=7\) and \(g(6)=-3\). Explain why there must be a value \(c\) in \((1,6)\) with \(g'(c)=-2\).`, [
      r`\(\dfrac{g(6)-g(1)}{6-1}=\dfrac{-10}{5}=-2\).`,
      r`\(g\) is differentiable, and therefore continuous, on \([1,6]\).`,
    ], r`"Since \(g\) is differentiable on \((1,6)\) and continuous on \([1,6]\), the Mean Value Theorem guarantees a \(c\) in \((1,6)\) with \(g'(c)=\dfrac{g(6)-g(1)}{6-1}=-2\)."`),
    ex("stretch", "An absolute extremum", r`A function \(h\) is continuous on \([0,8]\) with \(h'(x)\gt0\) on \((0,5)\) and \(h'(x)\lt0\) on \((5,8)\). Also \(h(0)=2\), \(h(5)=9\) and \(h(8)=-1\). Justify the absolute minimum of \(h\) on \([0,8]\).`, [
      r`The only critical point in the interval, \(x=5\), is a relative maximum, so the minimum is at an endpoint.`,
      r`Compare \(h(0)=2\) and \(h(8)=-1\).`,
    ], r`"The candidates are \(h(0)=2\), \(h(5)=9\) and \(h(8)=-1\). The least is \(-1\), so the absolute minimum is \(-1\), at \(x=8\)."`),

    sec("Common errors"),
    mistake("justifying with the wrong function", r`<p>If the question gives the graph of \(f'\), every reason must be stated in terms of \(f'\). Reading features off it as though it were the graph of \(f\) is the single most common error on these questions.</p>`),
    mistake("a theorem without its conditions", r`<p>"By the Mean Value Theorem" earns the point only together with "\(f\) is continuous on \([a,b]\) and differentiable on \((a,b)\)".</p>`),
    mistake("a sign chart as the whole answer", r`<p>A sign chart is working. It is not a justification unless it is labelled and followed by a sentence that states the conclusion.</p>`),
    mistake("a relative argument for an absolute extremum", r`<p>A sign change of \(f'\) proves a relative extremum. An absolute extremum on a closed interval needs the endpoint values as well.</p>`),

    sec("Write it so it scores"),
    justify(
      r`A particle has velocity \(v(3)=-4\) and acceleration \(a(3)=2\). Is the speed of the particle increasing or decreasing at \(t=3\)? Give a reason.`,
      r`The speed is decreasing at \(t=3\), because \(v(3)=-4\lt0\) and \(a(3)=2\gt0\) have opposite signs.`,
      r`Both values are quoted with their signs, and the comparison is stated. "Decreasing because the acceleration is positive and velocity negative" would also do; "decreasing because \(a\gt0\)" would not, and neither would "increasing because \(a\gt0\)", which confuses speed with velocity.`,
    ),
    exam(r`<p>Learn these sentences word for word. Under time pressure you will not compose a justification; you will reproduce one.</p>`),

    sec("Practice"),
    pq(r`Write a justification that \(f\) is decreasing on \((1,4)\).`, r`"\(f'(x)\lt0\) for all \(x\) in \((1,4)\)."`, "core"),
    pq(r`Write a justification that the graph of \(f\) is concave down on \((2,6)\), given a graph of \(f'\).`, r`"\(f'\) is decreasing on \((2,6)\)."`, "core"),
    pq(r`A function is continuous on \([2,9]\) with \(f(2)=-5\) and \(f(9)=4\). Justify that \(f(c)=0\) for some \(c\) in \((2,9)\).`, r`"\(f\) is continuous on \([2,9]\) and \(f(2)=-5\lt0\lt4=f(9)\), so by the Intermediate Value Theorem there is a \(c\) in \((2,9)\) with \(f(c)=0\)."`, "exam"),
    pq(r`What is wrong with: "\(f''(4)=0\), so the graph of \(f\) has a point of inflection at \(x=4\)"?`, r`A zero second derivative is not enough. The justification must say that \(f''\) changes sign at \(x=4\).`, "exam"),
    pq(r`Given \(f'(5)=0\) and \(f''(5)=-3\), justify the nature of the critical point.`, r`"\(f\) has a relative maximum at \(x=5\) because \(f'(5)=0\) and \(f''(5)\lt0\)."`, "exam"),
    pq(r`A student writes: "The particle changes direction at \(t=2\) because \(v(2)=0\)." Improve the justification.`, r`"The particle changes direction at \(t=2\) because \(v\) changes sign there (from positive to negative)." A zero velocity alone does not show a change of direction.`, "stretch"),

    sec("Summary"),
    key([
      ["Extrema", r`\(f'\) changes sign, in a stated direction.`],
      ["Concavity", r`\(f''\) is positive or negative; or \(f'\) is increasing or decreasing.`],
      ["Theorems", "Name it, and state its conditions."],
      ["Name the function", r`Never "it" or "the graph".`],
    ]),
  ],
});

// ───────────────────────── 9.3 ─────────────────────────
u9a["9.3"] = lesson({
  code: "9.3", unit: 9, official: "exam skills", calc: "Calculator",
  title: "Calculator Strategy",
  parts: () => [
    lede(r`Fifteen of the forty-eight questions on the exam require a graphing calculator. On those questions the calculator is not a convenience: the functions are chosen so that they cannot be differentiated or integrated by hand in the time available. The skill being tested is deciding what to compute, writing it down correctly, and letting the machine do the arithmetic. Students who try to do calculator questions by hand run out of time; students who write only what the calculator shows run out of points.`),
    goals([
      r`Decide quickly what a calculator question needs.`,
      r`Record every calculator result in standard notation.`,
      r`Store values and avoid rounding penalties.`,
      r`Recognise the multiple-choice questions in Part B that need no calculator at all.`,
    ]),

    sec("The routine for a calculator free-response question"),
    `<ol><li><strong>Enter the functions once.</strong> Type each given function into the calculator's function list at the start, and refer to them by name from then on. Retyping a long formula in every part is where most keying errors come from.</li><li><strong>Write the set-up.</strong> Before touching the calculator for a part, write the integral, the equation or the derivative expression in standard notation.</li><li><strong>Compute and copy.</strong> Evaluate, and write the result to at least three decimal places.</li><li><strong>Store what you will need again.</strong> A time at which two rates are equal, or an intersection point, should be stored in a memory letter.</li><li><strong>Finish the sentence.</strong> Add units, an interpretation or a justification if the part asks for one.</li></ol>`,

    sec("What to write"),
    table(
      ["Calculator does", "You write"],
      [
        ["numerical integral", r`\(\displaystyle\int_0^8R(t)\,dt\approx112.536\)`],
        ["solve an equation", r`\(R(t)=D(t)\) when \(t\approx5.763\)`],
        ["numerical derivative", r`\(R'(4)\approx-2.008\)`],
        ["evaluate a function", r`\(R(3)\approx16.987\)`],
      ],
    ),
    p(r`You do not have to show how the calculator found these. You do have to show what was found, and of what.`),

    sec("Rounding"),
    p(r`The standard is three decimal places, rounded or truncated. For a calculator display of \(6.5296\), both \(6.530\) (rounded) and \(6.529\) (truncated) are accepted; \(6.53\) is not, because it shows only two places. Giving more than three places is always safe. An intermediate value rounded too early is the usual cause of a wrong third decimal place: use the stored value.`),

    sec("Part B multiple choice"),
    p(r`Only some of the thirteen Part B questions actually need the calculator. Others are placed there because they involve a decimal answer or simply by design. Read the question before reaching for the machine. Typical genuine calculator questions are: a definite integral of a function with no elementary antiderivative; total distance from a velocity that changes sign; an average value; a derivative at a point of an awkward function; an equation whose solution is not exact.`),

    sec("Worked examples"),
    ex("core", "Set-up, then value", r`The rate at which people enter a stadium is \(E(t)=18te^{-0.25t}\) hundred people per hour for \(0\le t\le10\). How many people enter during the 10 hours?`, [
      r`Enter \(E\) in the function list.`,
      r`Write: \(\displaystyle\int_0^{10}E(t)\,dt\).`,
      r`Evaluate.`,
    ], r`\(\displaystyle\int_0^{10}E(t)\,dt\approx205.258\) hundred people, that is about 20 526 people.`),
    ex("exam", "A rate of a rate", r`For the stadium, find \(E'(6)\) and interpret it with units.`, [
      r`Use the numerical derivative: \(E'(6)\approx-2.008\).`,
      r`\(E\) is in hundred people per hour, so \(E'\) is in hundred people per hour per hour.`,
    ], r`At \(t=6\) hours, the rate at which people are entering the stadium is decreasing by about 200.8 people per hour each hour.`),
    ex("exam", "Average value on the calculator", r`Find the average rate at which people enter the stadium over the 10 hours.`, [
      r`Write: \(\dfrac{1}{10}\displaystyle\int_0^{10}E(t)\,dt\).`,
      r`Use the stored value of the integral.`,
    ], r`\(\approx20.526\) hundred people per hour.`),
    ex("stretch", "A Part B question that needs no calculator", r`A multiple-choice question in Part B asks: "If \(f'(x)=\sqrt{1+x^3}\) and \(f(1)=4\), then \(f(1)+\displaystyle\int_1^1f'(x)\,dx=\)". What is the answer?`, [
      r`The integral has equal limits, so it is 0.`,
    ], r`\(4\). Fifteen seconds of reading saved two minutes of keying.`),

    sec("Common errors"),
    mistake("retyping the function in every part", r`<p>One mistyped bracket in part (c) costs the answer points for parts (c) and (d). Enter the function once and reuse it.</p>`),
    mistake("premature rounding", r`<p>Using \(8.89\) for a stored \(8.890318\) as an upper limit can change the third decimal of the integral. Use the memory letter.</p>`),
    mistake("an integral by hand on a calculator question", r`<p>If the antiderivative is not immediate, it is not intended. Set up and evaluate numerically.</p>`),
    mistake("forgetting the initial amount", r`<p>The calculator gives \(\displaystyle\int\) (rate). The amount present is the starting amount plus that integral. This error has nothing to do with the calculator and is the most common one in calculator questions.</p>`),

    sec("Write it so it scores"),
    justify(
      r`Using the stadium model, and given that people leave at the rate \(L(t)=4+1.5t\) hundred people per hour, find the time \(t\), \(1\le t\le10\), at which the number of people in the stadium is greatest. Justify your answer.`,
      r`\(E(t)=L(t)\) when \(t\approx8.890\). For \(1\le t\lt8.890\), \(E(t)\gt L(t)\), and for \(8.890\lt t\le10\), \(E(t)\lt L(t)\). So the number of people increases until \(t\approx8.890\) and decreases afterwards, and is greatest at \(t\approx8.890\).`,
      r`The equation solved is shown, the time is given to three places, and the justification is the sign change of the net rate over the whole interval, which makes the maximum absolute, not just relative.`,
    ),
    exam(r`<p>In the last minute of Section II Part A, check one thing: that every decimal on your page has three places and an integral, equation or derivative written beside it.</p>`),

    sec("Practice"),
    pq(r`A calculator shows \(205.2583\). Which of \(205.26\), \(205.258\), \(205.2583\) are acceptable final answers?`, r`\(205.258\) and \(205.2583\). \(205.26\) has only two decimal places.`, "core"),
    pq(r`What should be written on the page when the calculator has been used to solve \(E(t)=L(t)\)?`, r`The equation and the solution: "\(E(t)=L(t)\) when \(t\approx8.890\)".`, "core"),
    pq(r`Evaluate \(\displaystyle\int_0^3\sqrt{1+\sin^2x}\,dx\).`, r`\(\approx3.678\).`, "exam"),
    pq(r`A particle has velocity \(v(t)=t^2-3\sin t\) for \(0\le t\le3\). Find the total distance travelled.`, r`\(\displaystyle\int_0^3\left|t^2-3\sin t\right|dt\approx6.530\). (The displacement is \(3.030\).)`, "exam"),
    pq(r`Find the average value of \(f(t)=10e^{-0.3t}\) on \([0,5]\).`, r`\(\dfrac15\displaystyle\int_0^5 10e^{-0.3t}\,dt\approx5.179\).`, "exam"),

    sec("Summary"),
    key([
      ["Enter once", "Functions go in the function list at the start."],
      ["Write first", "Set-up in standard notation, then the decimal."],
      ["Store", "Reuse values at full precision."],
      ["Read first", "Not every Part B question needs the calculator."],
    ]),
  ],
});

// ───────────────────────── 9.4 ─────────────────────────
u9a["9.4"] = lesson({
  code: "9.4", unit: 9, official: "exam skills", calc: "Calculator",
  title: "Free-Response Type: Rates and Accumulation",
  parts: () => [
    lede(r`Something flows in. Something flows out. There was a certain amount to begin with. This is the most dependable question on the exam: it appears in the calculator part of the free-response section nearly every year, dressed as water, traffic, sand, people or grain. The story changes and the four parts do not. If you can recognise the type in the first ten seconds, you already know what each part will ask and how each is answered.`),
    goals([
      r`Recognise a rate-in, rate-out question at a glance.`,
      r`Know the four standard parts and the method for each.`,
      r`Interpret a derivative or an integral of a rate, with units.`,
      r`Work a complete question in fifteen minutes.`,
    ]),

    sec("Recognising the type"),
    p(r`The signs are: one or two functions described as rates ("at a rate of … per hour"), a time interval, and a starting amount. The functions usually cannot be integrated by hand.`),

    sec("The four standard parts"),
    table(
      ["The part asks", "Method", "Typical points"],
      [
        [r`a derivative of a rate, with interpretation`, r`numerical derivative; units are "per time per time"`, "2"],
        [r`how much entered (or left) in an interval`, r`\(\displaystyle\int_a^b\text{rate}\,dt\)`, "2"],
        [r`how much is present at a given time`, r`start \(+\displaystyle\int(\text{in}-\text{out})\)`, "2"],
        [r`when the amount is greatest or least`, r`in \(=\) out; then compare with the endpoints`, "3"],
      ],
    ),

    sec("A complete question"),
    ex("exam", "The grain mill", r`Grain is delivered to a mill at the rate \(D(t)=40+25\sin\!\left(\dfrac{t^2}{20}\right)\) tonnes per hour, and the mill grinds grain at the rate \(M(t)=30+3t\) tonnes per hour, for \(0\le t\le9\) hours. At \(t=0\) the mill holds 120 tonnes of unground grain. (a) Find \(D'(4)\). Using correct units, interpret your answer. (b) How many tonnes of grain are delivered during the 9 hours? (c) Is the amount of unground grain increasing or decreasing at \(t=5\)? Give a reason. (d) Find the maximum amount of unground grain at the mill for \(0\le t\le9\). Justify your answer.`, [
      r`(a) \(D'(4)\approx6.967\). At \(t=4\) hours, the rate at which grain is delivered is increasing by about 6.967 tonnes per hour each hour.`,
      r`(b) \(\displaystyle\int_0^9D(t)\,dt\approx448.900\) tonnes.`,
      r`(c) \(D(5)\approx63.725\) and \(M(5)=45\). Since \(D(5)\gt M(5)\), the amount of unground grain is increasing at \(t=5\).`,
      r`(d) Let \(A(t)=120+\displaystyle\int_0^t\big[D(s)-M(s)\big]ds\). \(A'(t)=D(t)-M(t)=0\) when \(t\approx7.278\), the only such time in the interval.`,
      r`Candidates: \(A(0)=120\), \(A(7.278)\approx209.398\), \(A(9)\approx177.400\).`,
    ], r`The maximum amount is about 209.398 tonnes, at \(t\approx7.278\) hours.`),
    p(r`<strong>Marking it.</strong> (a) One point for the value, one for the interpretation with units of tonnes per hour per hour. (b) One for the integral, one for the answer. (c) One for comparing \(D(5)\) with \(M(5)\) and concluding. (d) One for setting \(D(t)=M(t)\), one for the answer, one for the justification, which here is the comparison with both endpoint values. Nine points, of which four are for things written before any number is computed.`),

    sec("Common errors"),
    mistake("interpreting D′(4) as an amount of grain", r`<p>\(D\) is already a rate. \(D'(4)\) is how fast that rate is changing, in tonnes per hour per hour. An answer about "the amount of grain" earns no interpretation point.</p>`),
    mistake("solving D′(t) = 0 for the maximum amount", r`<p>That finds when deliveries are fastest. The amount is greatest when deliveries stop outpacing grinding: \(D(t)=M(t)\).</p>`),
    mistake("no endpoint comparison", r`<p>Part (d) asks for a maximum on a closed interval. State the amount at \(t=0\) and \(t=9\) as well as at the critical time, or give a sign-change argument that covers the whole interval.</p>`),
    mistake("an average confused with a total", r`<p>"How many tonnes" is an integral. "At what average rate" is that integral divided by the length of the interval.</p>`),

    sec("Write it so it scores"),
    justify(
      r`For the mill above, explain the meaning of \(\dfrac19\displaystyle\int_0^9M(t)\,dt\) in the context of the problem, with units.`,
      r`It is the average rate, in tonnes per hour, at which the mill grinds grain over the 9 hours. Its value is \(43.5\) tonnes per hour.`,
      r`The answer names the quantity (average rate of grinding), gives the units of the rate, and states the interval. "The average amount of grain" would not earn the point.`,
    ),
    exam(r`<p>Spend the first minute entering both rate functions into the calculator and checking them by evaluating each at one value. Every later part depends on those two lines.</p>`),

    sec("Practice"),
    pq(r`For the mill, how many tonnes of grain does the mill grind during the 9 hours?`, r`\(\displaystyle\int_0^9(30+3t)\,dt=270+121.5=391.5\) tonnes.`, "core"),
    pq(r`For the mill, how much unground grain is at the mill at \(t=9\)?`, r`\(120+448.900-391.5\approx177.400\) tonnes.`, "core"),
    pq(r`For the mill, what are the units of \(\displaystyle\int_2^6D(t)\,dt\), and what does it represent?`, r`Tonnes: the amount of grain delivered between \(t=2\) and \(t=6\) hours.`, "exam"),
    pq(r`For the mill, at what time is the amount of unground grain least? Justify.`, r`The candidates are \(A(0)=120\), \(A(7.278)\approx209.398\) and \(A(9)\approx177.400\). The least is 120 tonnes, at \(t=0\).`, "exam"),
    pq(r`For the mill, is the rate of change of the amount of unground grain increasing or decreasing at \(t=4\)?`, r`The rate of change of the amount is \(D-M\), whose derivative is \(D'(4)-M'(4)\approx6.967-3\gt0\). It is increasing.`, "stretch"),

    sec("Summary"),
    key([
      ["Type", "Rates in and out, with a starting amount."],
      ["Amount", r`Start \(+\displaystyle\int(\text{in}-\text{out})\).`],
      ["Extremum", r`In \(=\) out, then endpoints.`],
      ["Units", "Derivative of a rate: per time per time."],
    ]),
  ],
});
