// AP Calculus AB exam prep — Unit 6 (Integration), lessons 6.5–6.9.
// Original wording, examples, numbers and figures throughout (see u1a for notes).
import { r, lesson, lede, goals, sec, p, disp, def, thm, exam, mistake, justify, ex, pq, key, table } from "./apcalc/kit.mjs";
import { plot, figure, C } from "./apcalc/fig.mjs";
import { fGraph } from "./apcalc-lessons-u6a.mjs";

export const u6b = {};

// ───────────────────────── 6.5 ─────────────────────────
u6b["6.5"] = lesson({
  code: "6.5", unit: 6, official: "6.5", calc: "No calculator",
  title: "Analysing a Function Defined by an Integral",
  parts: () => [
    lede(r`Lesson 6.4 gave two lines: if \(g(x)=\displaystyle\int_a^xf(t)\,dt\), then \(g'=f\) and \(g''=f'\). Unit 5 taught you to analyse any function whose first and second derivatives you can see. Put those together and a graph of \(f\) tells you everything about \(g\): where it rises, where it peaks, how it bends. This is Lesson 5.9 again, with one addition. Because \(g\) is an area, you can also compute its actual <em>values</em>.`),
    goals([
      r`Determine where an accumulation function is increasing or decreasing.`,
      r`Locate and justify its relative extrema and points of inflection.`,
      r`Find its absolute extrema on a closed interval with the candidates test.`,
      r`Write justifications that refer correctly to \(g'=f\).`,
    ]),

    sec("The dictionary, restated"),
    table(
      [r`For \(g(x)=\displaystyle\int_a^xf(t)\,dt\)`, r`Look on the graph of \(f\) for`],
      [
        [r`\(g\) increasing`, r`\(f\gt0\) (graph above the axis)`],
        [r`\(g\) decreasing`, r`\(f\lt0\) (graph below the axis)`],
        [r`relative maximum of \(g\)`, r`\(f\) changes from positive to negative`],
        [r`relative minimum of \(g\)`, r`\(f\) changes from negative to positive`],
        [r`\(g\) concave up`, r`\(f\) increasing`],
        [r`\(g\) concave down`, r`\(f\) decreasing`],
        [r`point of inflection of \(g\)`, r`\(f\) changes between increasing and decreasing`],
        [r`a value \(g(c)\)`, r`the signed area from \(a\) to \(c\)`],
      ],
    ),

    sec("The reference graph, analysed"),
    figure(fGraph({ t: true, shade: true }), r`The graph of \(f\) on \([-2,8]\). Signed areas: \(4\) on \([-2,0]\), \(4\) on \([0,2]\), \(-4\) on \([2,4]\), \(-4\) on \([4,6]\), \(2\) on \([6,8]\).`),
    p(r`Let \(g(x)=\displaystyle\int_0^xf(t)\,dt\).`),
    table(
      [r`\(x\)`, "−2", "0", "2", "4", "6", "8"],
      [[r`\(g(x)\)`, "−4", "0", "4", "0", "−4", "−2"]],
    ),
    `<ul><li><strong>Increasing</strong> on \((-2,2)\) and \((6,8)\), where \(f\gt0\). <strong>Decreasing</strong> on \((2,6)\).</li><li><strong>Relative maximum</strong> at \(x=2\); <strong>relative minimum</strong> at \(x=6\).</li><li><strong>Concave up</strong> on \((-2,0)\) and \((4,8)\), where \(f\) is increasing. <strong>Concave down</strong> on \((0,4)\).</li><li><strong>Points of inflection</strong> at \(x=0\) and \(x=4\).</li><li><strong>Absolute maximum</strong> on \([-2,8]\): compare \(g(-2)=-4\), \(g(2)=4\), \(g(6)=-4\), \(g(8)=-2\). The maximum is 4, at \(x=2\).</li></ul>`,

    sec("Worked examples"),
    ex("core", "A relative maximum", r`For \(g(x)=\displaystyle\int_0^xf(t)\,dt\) with \(f\) as graphed, at what value of \(x\) does \(g\) have a relative maximum? Justify.`, [
      r`\(g'(x)=f(x)\).`,
      r`\(f\) changes from positive to negative at \(x=2\).`,
    ], r`\(x=2\), because \(g'=f\) changes from positive to negative there.`),
    ex("exam", "Absolute minimum", r`Find the absolute minimum value of \(g\) on \([-2,8]\). Justify.`, [
      r`Candidates: endpoints \(x=-2\), \(8\) and the points where \(g'=f=0\) inside the interval: \(x=2\), \(6\).`,
      r`\(g(-2)=-4\), \(g(2)=4\), \(g(6)=-4\), \(g(8)=-2\).`,
    ], r`The absolute minimum value is \(-4\), attained at \(x=-2\) and at \(x=6\).`),
    ex("exam", "An accumulation function from a formula", r`Let \(h(x)=\displaystyle\int_0^x\left(t^2-4t+3\right)dt\). Find the \(x\)-coordinates of the relative extrema and the point of inflection of \(h\).`, [
      r`\(h'(x)=x^2-4x+3=(x-1)(x-3)\): positive, negative, positive.`,
      r`\(h''(x)=2x-4\), which changes sign at \(x=2\).`,
    ], r`Relative maximum at \(x=1\), relative minimum at \(x=3\), point of inflection at \(x=2\).`),
    ex("stretch", "A different starting point", r`Let \(k(x)=\displaystyle\int_4^xf(t)\,dt\) with the same \(f\). How do the graphs of \(k\) and \(g\) compare? Find \(k(0)\).`, [
      r`\(k(x)=\displaystyle\int_0^xf(t)\,dt-\int_0^4f(t)\,dt=g(x)-g(4)=g(x)-0\).`,
      r`Here \(g(4)=0\), so \(k=g\). In general, changing the lower limit shifts the graph vertically by a constant and leaves every derivative unchanged.`,
    ], r`\(k(0)=g(0)-g(4)=0\). The extrema and inflection points occur at the same \(x\)-values as for \(g\).`),

    sec("Common errors"),
    mistake("placing extrema of g at the peaks of f", r`<p>The highest point of the graph of \(f\), at \(x=0\), is where \(g\) is increasing <em>fastest</em>: a point of inflection of \(g\), not a maximum.</p>`),
    mistake("an integral with the limits reversed", r`<p>\(g(-2)=\displaystyle\int_0^{-2}f(t)\,dt=-\int_{-2}^0f(t)\,dt=-4\). The region is above the axis, but integrating right to left makes the result negative.</p>`),
    mistake("justifying from g without mentioning f", r`<p>"\(g\) has a maximum at 2 because \(g\) changes from increasing to decreasing" is circular. The evidence is on the graph: \(g'=f\) changes from positive to negative.</p>`),
    mistake("forgetting endpoints for absolute extrema", r`<p>Here the absolute minimum is attained at the endpoint \(x=-2\) as well as at \(x=6\). The candidates test always includes endpoints.</p>`),

    sec("Write it so it scores"),
    justify(
      r`With \(g\) and \(f\) as above, find all values of \(x\) in \((-2,8)\) at which the graph of \(g\) has a point of inflection. Give a reason.`,
      r`The graph of \(g\) has points of inflection at \(x=0\) and \(x=4\), because \(g'=f\) changes from increasing to decreasing at \(x=0\) and from decreasing to increasing at \(x=4\).`,
      r`It ties the conclusion to \(g'=f\) and describes what that derivative does on the given graph.`,
    ),
    exam(r`<p>In these questions, one part almost always asks for a <em>value</em> of \(g\) and another for a value of \(g'\) or \(g''\). Label each answer (\(g(4)=\dots\), \(g'(4)=\dots\)) so that a correct number is not attached to the wrong quantity.</p>`),

    sec("Practice"),
    p(r`Questions 1–4 use \(g(x)=\displaystyle\int_0^xf(t)\,dt\) with the graph of \(f\) in this lesson.`),
    pq(r`On which intervals is \(g\) decreasing?`, r`Where \(f\lt0\): \((2,6)\).`, "core"),
    pq(r`Find \(g(3)\) and \(g(5)\).`, r`\(g(3)=4-\tfrac12(1)(2)=3\). \(g(5)=0-\tfrac12(4+2)(1)=-3\).`, "exam"),
    pq(r`On which intervals is the graph of \(g\) concave down?`, r`Where \(f\) is decreasing: \((0,4)\).`, "exam"),
    pq(r`Write an equation for the tangent line to the graph of \(g\) at \(x=1\).`, r`\(g(1)=3\) and \(g'(1)=f(1)=2\): \(y-3=2(x-1)\).`, "exam"),
    pq(r`Let \(h(x)=\displaystyle\int_1^x\frac{t-2}{t^2+1}\,dt\). Where does \(h\) have a relative minimum?`, r`\(h'(x)=\dfrac{x-2}{x^2+1}\) changes from negative to positive at \(x=2\): a relative minimum.`, "exam"),
    pq(r`Let \(F(x)=\displaystyle\int_0^{x^2}e^{-t}\,dt\). Find the critical point of \(F\) and classify it.`, r`\(F'(x)=2xe^{-x^2}\), zero only at \(x=0\), changing from negative to positive: a relative (and absolute) minimum, with \(F(0)=0\).`, "stretch"),

    sec("Summary"),
    key([
      [r`\(g'=f\)`, r`Sign of \(f\) gives increase and decrease of \(g\).`],
      [r`\(g''=f'\)`, r`Direction of \(f\) gives the concavity of \(g\).`],
      ["Values", r`Signed areas from the lower limit.`],
      ["Absolute extrema", r`Candidates test, with the values computed as areas.`],
    ]),
  ],
});

// ───────────────────────── 6.6 ─────────────────────────
u6b["6.6"] = lesson({
  code: "6.6", unit: 6, official: "6.6", calc: "No calculator",
  title: "Properties of Definite Integrals",
  parts: () => [
    lede(r`A definite integral is an area, and areas obey simple rules: regions side by side add, a region doubled in height doubles in area, and a region measured backwards counts as negative. Written in symbols, these rules let you find unknown integrals from known ones without ever seeing the function. That is exactly how the multiple-choice section tests them.`),
    goals([
      r`Use linearity to combine and split integrals.`,
      r`Reverse the limits of integration and join adjacent intervals.`,
      r`Solve for an unknown integral from given ones.`,
      r`Use symmetry for even and odd functions.`,
    ]),

    sec("The properties"),
    thm("Properties of the definite integral", r`<p>For integrable functions \(f\) and \(g\) and constants \(a,b,c,k\):</p>
      <ul>
        <li><strong>Zero width:</strong> \(\displaystyle\int_a^af(x)\,dx=0\)</li>
        <li><strong>Reversal:</strong> \(\displaystyle\int_b^af(x)\,dx=-\int_a^bf(x)\,dx\)</li>
        <li><strong>Constant multiple:</strong> \(\displaystyle\int_a^bk\,f(x)\,dx=k\int_a^bf(x)\,dx\)</li>
        <li><strong>Sum and difference:</strong> \(\displaystyle\int_a^b\big[f(x)\pm g(x)\big]dx=\int_a^bf(x)\,dx\pm\int_a^bg(x)\,dx\)</li>
        <li><strong>Adjacent intervals:</strong> \(\displaystyle\int_a^bf(x)\,dx+\int_b^cf(x)\,dx=\int_a^cf(x)\,dx\)</li>
        <li><strong>A constant:</strong> \(\displaystyle\int_a^bk\,dx=k(b-a)\)</li>
      </ul>`),
    p(r`The adjacent-intervals property holds for any order of \(a\), \(b\), \(c\). There is <strong>no</strong> product rule: the integral of a product is not the product of the integrals.`),

    sec("Symmetry"),
    thm("Even and odd functions", r`<p>If \(f\) is <strong>odd</strong>, \(f(-x)=-f(x)\), then \(\displaystyle\int_{-a}^{a}f(x)\,dx=0\). If \(f\) is <strong>even</strong>, \(f(-x)=f(x)\), then \(\displaystyle\int_{-a}^{a}f(x)\,dx=2\int_0^af(x)\,dx\).</p>`),
    p(r`Odd functions include \(x\), \(x^3\), \(\sin x\) and \(\tan x\); even ones include constants, \(x^2\), \(\cos x\) and \(|x|\). For an odd function the areas on either side of the origin cancel exactly.`),

    sec("Worked examples"),
    ex("core", "Splitting an interval", r`Given \(\displaystyle\int_0^5f(x)\,dx=7\) and \(\displaystyle\int_0^2f(x)\,dx=3\), find \(\displaystyle\int_2^5f(x)\,dx\).`, [
      r`\(\displaystyle\int_0^2f+\int_2^5f=\int_0^5f\).`,
      r`\(3+\displaystyle\int_2^5f=7\).`,
    ], r`\(\displaystyle\int_2^5f(x)\,dx=4\).`),
    ex("exam", "Linearity with a constant", r`Given \(\displaystyle\int_0^5f(x)\,dx=7\), find \(\displaystyle\int_0^5\big[2f(x)+3\big]dx\).`, [
      r`Split: \(2\displaystyle\int_0^5f(x)\,dx+\int_0^53\,dx\).`,
      r`\(2(7)+3(5-0)\).`,
    ], r`\(14+15=29\).`),
    ex("exam", "Two functions and a reversal", r`Given \(\displaystyle\int_1^4f(x)\,dx=6\) and \(\displaystyle\int_1^4g(x)\,dx=-2\), find \(\displaystyle\int_4^1\big[3f(x)-2g(x)\big]dx\).`, [
      r`First with limits 1 to 4: \(3(6)-2(-2)=22\).`,
      r`Reversing the limits changes the sign.`,
    ], r`\(-22\).`),
    ex("stretch", "Symmetry does the work", r`Evaluate \(\displaystyle\int_{-2}^{2}\left(x^5-3\sin x+4\right)dx\).`, [
      r`\(x^5\) and \(\sin x\) are odd: their integrals over \([-2,2]\) are 0.`,
      r`The constant 4 is even: \(\displaystyle\int_{-2}^{2}4\,dx=4(4)\).`,
    ], r`\(16\). No antiderivative is needed.`),

    sec("Common errors"),
    mistake("forgetting to integrate the constant", r`<p>\(\displaystyle\int_0^5\big[2f(x)+3\big]dx\) is \(14+15\), not \(14+3\). The constant 3 is integrated over an interval of width 5.</p>`),
    mistake("subtracting in the wrong order", r`<p>\(\displaystyle\int_2^5f=\int_0^5f-\int_0^2f\). Draw the number line and check that the pieces fit end to end.</p>`),
    mistake("a product rule that does not exist", r`<p>\(\displaystyle\int_a^bf(x)g(x)\,dx\) cannot be found from \(\displaystyle\int_a^bf\) and \(\displaystyle\int_a^bg\).</p>`),
    mistake("using symmetry on an interval that is not symmetric", r`<p>\(\displaystyle\int_{-1}^{3}x^3\,dx\) is not 0. The interval must be of the form \([-a,a]\).</p>`),

    sec("Write it so it scores"),
    justify(
      r`A continuous function \(f\) satisfies \(\displaystyle\int_{-3}^{2}f(x)\,dx=5\) and \(\displaystyle\int_{2}^{6}f(x)\,dx=-9\). Find \(\displaystyle\int_{6}^{-3}f(x)\,dx\).`,
      r`\(\displaystyle\int_{-3}^{6}f(x)\,dx=\int_{-3}^{2}f(x)\,dx+\int_{2}^{6}f(x)\,dx=5+(-9)=-4\), so \(\displaystyle\int_{6}^{-3}f(x)\,dx=4\).`,
      r`The two properties used (joining adjacent intervals, then reversing) are each shown as a separate step, so a sign error in one cannot hide the other.`,
    ),
    exam(r`<p>These properties are also the engine behind accumulation-function questions: \(g(x)=\displaystyle\int_2^xf(t)\,dt\) evaluated at \(x=-1\) requires a reversal, and \(g(5)-g(1)\) is \(\displaystyle\int_1^5f(t)\,dt\).</p>`),

    sec("Practice"),
    pq(r`Given \(\displaystyle\int_0^5f(x)\,dx=7\), find \(\displaystyle\int_5^0f(x)\,dx\).`, r`\(-7\).`, "core"),
    pq(r`Given \(\displaystyle\int_1^4f(x)\,dx=6\) and \(\displaystyle\int_1^4g(x)\,dx=-2\), find \(\displaystyle\int_1^4\big[f(x)+g(x)\big]dx\).`, r`\(6+(-2)=4\).`, "core"),
    pq(r`Given \(\displaystyle\int_2^8f(x)\,dx=10\) and \(\displaystyle\int_5^8f(x)\,dx=13\), find \(\displaystyle\int_2^5f(x)\,dx\).`, r`\(10-13=-3\).`, "exam"),
    pq(r`Given \(\displaystyle\int_0^4f(x)\,dx=10\), find \(\displaystyle\int_0^4\big[f(x)+2x\big]dx\).`, r`\(\displaystyle\int_0^42x\,dx\) is a triangle of area 16, so the answer is \(26\).`, "exam"),
    pq(r`Evaluate \(\displaystyle\int_{-3}^{3}\left(x^3+5\right)dx\).`, r`\(x^3\) is odd: 0. The constant gives \(5(6)=30\).`, "exam"),
    pq(r`An even function \(f\) has \(\displaystyle\int_0^4f(x)\,dx=10\) and \(\displaystyle\int_0^1f(x)\,dx=3\). Find \(\displaystyle\int_{-4}^{-1}f(x)\,dx\).`, r`By symmetry it equals \(\displaystyle\int_1^4f(x)\,dx=10-3=7\).`, "stretch"),

    sec("Summary"),
    key([
      ["Reverse", r`Swapping the limits changes the sign.`],
      ["Join", r`Adjacent intervals add.`],
      ["Linear", r`Constants come out; sums split; integrate any constant term.`],
      ["Symmetry", r`Odd over \([-a,a]\): zero. Even: twice the half.`],
    ]),
  ],
});

// ───────────────────────── 6.7 ─────────────────────────
u6b["6.7"] = lesson({
  code: "6.7", unit: 6, official: "6.7", calc: "Both",
  title: "The Fundamental Theorem, Part 2: Evaluating Integrals",
  parts: () => [
    lede(r`Part 1 of the Fundamental Theorem said that the derivative of an accumulated area is the original function. Read backwards, that is a recipe: to find the area under \(f\), find any function whose derivative is \(f\), and subtract its values at the two ends. No rectangles, no limits. This turns the hardest computation in calculus into one of the easiest, and it gives the exam its most useful single equation.`),
    goals([
      r`Evaluate a definite integral using an antiderivative.`,
      r`Use the net change form \(f(b)=f(a)+\displaystyle\int_a^bf'(x)\,dx\).`,
      r`Interpret the definite integral of a rate, with units.`,
      r`Evaluate definite integrals on a calculator and record them correctly.`,
    ]),

    sec("The theorem"),
    thm("Fundamental Theorem of Calculus, Part 2", r`<p>If \(f\) is continuous on \([a,b]\) and \(F\) is any antiderivative of \(f\) (that is, \(F'=f\)), then</p>${disp(r`\int_a^bf(x)\,dx=F(b)-F(a).`)}`),
    p(r`The notation \(\Big[F(x)\Big]_a^b\) means \(F(b)-F(a)\). Any antiderivative will do, because a constant added to \(F\) cancels in the subtraction; so no "\(+C\)" is needed in a definite integral.`),

    sec("Net change"),
    p(r`Apply the theorem to a derivative. Since \(f\) is an antiderivative of \(f'\):`),
    disp(r`\int_a^bf'(x)\,dx=f(b)-f(a)\qquad\text{equivalently}\qquad f(b)=f(a)+\int_a^bf'(x)\,dx.`),
    p(r`<strong>Final value = starting value + accumulated change.</strong> Whenever a question gives a rate and one value of the quantity and asks for another value, this is the equation to write. It is used on the free-response section more than any other single formula.`),

    sec("Interpreting an integral of a rate"),
    p(r`If \(R(t)\) is the rate of change of a quantity, \(\displaystyle\int_a^bR(t)\,dt\) is the <strong>net change</strong> in that quantity from \(t=a\) to \(t=b\). An interpretation states the quantity, the units and the interval, as in Lesson 6.1.`),

    sec("Worked examples"),
    ex("core", "A polynomial", r`Evaluate \(\displaystyle\int_1^3\left(3x^2-2x\right)dx\).`, [
      r`An antiderivative is \(F(x)=x^3-x^2\).`,
      r`\(F(3)-F(1)=(27-9)-(1-1)\).`,
    ], r`\(18\).`),
    ex("core", "Standard functions", r`Evaluate (a) \(\displaystyle\int_0^{\pi/2}\cos x\,dx\), (b) \(\displaystyle\int_1^e\frac1x\,dx\), (c) \(\displaystyle\int_0^4\sqrt x\,dx\).`, [
      r`(a) \(\Big[\sin x\Big]_0^{\pi/2}=1-0\).`,
      r`(b) \(\Big[\ln x\Big]_1^e=1-0\).`,
      r`(c) \(\Big[\tfrac23x^{3/2}\Big]_0^4=\tfrac23(8)\).`,
    ], r`(a) \(1\). (b) \(1\). (c) \(\dfrac{16}{3}\).`),
    ex("exam", "Net change from a rate", r`A differentiable function \(f\) has \(f(2)=5\), and \(\displaystyle\int_2^6f'(x)\,dx=-3\). Find \(f(6)\).`, [
      r`\(f(6)=f(2)+\displaystyle\int_2^6f'(x)\,dx\).`,
      r`\(5+(-3)\).`,
    ], r`\(f(6)=2\).`),
    ex("exam", "A value that needs the calculator", r`A function \(f\) satisfies \(f(1)=3\) and \(f'(x)=\sqrt{1+x^3}\). Find \(f(2)\).`, [
      r`\(f(2)=f(1)+\displaystyle\int_1^2\sqrt{1+x^3}\,dx\).`,
      r`The integrand has no elementary antiderivative. Evaluate numerically: \(\displaystyle\int_1^2\sqrt{1+x^3}\,dx=2.130\).`,
    ], r`\(f(2)=3+2.130=5.130\).`),
    ex("stretch", "An absolute value", r`Evaluate \(\displaystyle\int_0^3|x-1|\,dx\).`, [
      r`\(|x-1|=1-x\) for \(x\le1\) and \(x-1\) for \(x\ge1\). Split at \(x=1\).`,
      r`\(\displaystyle\int_0^1(1-x)\,dx=\Big[x-\tfrac{x^2}{2}\Big]_0^1=\tfrac12\).`,
      r`\(\displaystyle\int_1^3(x-1)\,dx=\Big[\tfrac{x^2}{2}-x\Big]_1^3=\tfrac32-\left(-\tfrac12\right)=2\).`,
    ], r`\(\dfrac12+2=\dfrac52\).`),

    sec("Common errors"),
    mistake("subtracting in the wrong order", r`<p>It is \(F(b)-F(a)\): upper limit first. Reversing gives the negative of the answer.</p>`),
    mistake("assuming F(0) = 0", r`<p>\(\displaystyle\int_0^1e^x\,dx=e^1-e^0=e-1\), not \(e\). Likewise \(\cos0=1\). Always evaluate at the lower limit.</p>`),
    mistake("forgetting the starting value", r`<p>\(\displaystyle\int_2^6f'(x)\,dx\) is the <em>change</em> in \(f\), not \(f(6)\). Add \(f(2)\).</p>`),
    mistake("integrating across a discontinuity", r`<p>\(\displaystyle\int_{-1}^{1}\frac{1}{x^2}\,dx\) is not \(\Big[-\tfrac1x\Big]_{-1}^{1}=-2\). The theorem requires \(f\) to be continuous on \([a,b]\), and here it is not.</p>`),

    sec("Write it so it scores"),
    justify(
      r`Water flows into a tank at \(E(t)=20e^{-0.2t}\) litres per minute. The tank holds 30 litres at \(t=0\). Find the amount of water in the tank at \(t=5\).`,
      r`Amount \(=30+\displaystyle\int_0^5 20e^{-0.2t}\,dt=30+63.212=93.212\) litres.`,
      r`The starting value plus the integral of the rate is written as a single expression <em>before</em> any number is computed. That set-up is typically worth one point by itself, and the answer another.`,
    ),
    exam(r`<p>In the calculator section, write the integral with its limits and integrand, then the value to three decimal places. Do not show an antiderivative; none is expected, and an incorrect one can cost a point that the calculator would have earned.</p>`),

    sec("Practice"),
    pq(r`Evaluate \(\displaystyle\int_0^2\left(x^3+1\right)dx\).`, r`\(\Big[\tfrac{x^4}{4}+x\Big]_0^2=4+2=6\).`, "core"),
    pq(r`Evaluate \(\displaystyle\int_0^1e^x\,dx\).`, r`\(e-1\).`, "core"),
    pq(r`Evaluate \(\displaystyle\int_0^{\pi}\sin x\,dx\).`, r`\(\Big[-\cos x\Big]_0^\pi=1-(-1)=2\).`, "exam"),
    pq(r`A particle has velocity \(v(t)=3t^2-4\) and position \(x(1)=2\). Find \(x(3)\).`, r`\(x(3)=2+\displaystyle\int_1^3(3t^2-4)\,dt=2+\Big[t^3-4t\Big]_1^3=2+(15-(-3))=20\).`, "exam"),
    pq(r`(Calculator) A function has \(g(0)=4\) and \(g'(x)=e^{-x^2}\). Find \(g(2)\).`, r`\(g(2)=4+\displaystyle\int_0^2e^{-x^2}dx=4+0.882=4.882\).`, "exam"),
    pq(r`Evaluate \(\displaystyle\int_0^2f(x)\,dx\) where \(f(x)=\begin{cases}x^2,&x\le1\\2-x,&x\gt1\end{cases}\).`, r`\(\displaystyle\int_0^1x^2\,dx+\int_1^2(2-x)\,dx=\tfrac13+\tfrac12=\tfrac56\).`, "stretch"),

    sec("Summary"),
    key([
      ["Evaluate", r`\(\displaystyle\int_a^bf=F(b)-F(a)\), with \(F'=f\).`],
      ["Net change", r`\(f(b)=f(a)+\displaystyle\int_a^bf'(x)\,dx\).`],
      ["Meaning", r`The integral of a rate is the change in the quantity.`],
      ["Calculator", r`Write the integral, then its value to three places.`],
    ]),
  ],
});

// ───────────────────────── 6.8 ─────────────────────────
u6b["6.8"] = lesson({
  code: "6.8", unit: 6, official: "6.8", calc: "No calculator",
  title: "Antiderivatives and the Basic Rules",
  parts: () => [
    lede(r`The Fundamental Theorem reduces integration to one task: finding a function with a given derivative. Every differentiation rule you know, read from right to left, is an integration rule. This lesson collects those reversed rules. They are few, and the exam assumes you know them as well as you know the derivatives they came from.`),
    goals([
      r`Find indefinite integrals of the standard functions.`,
      r`Rewrite an integrand algebraically so that the basic rules apply.`,
      r`Use an initial condition to determine the constant of integration.`,
      r`Recover position from acceleration with two initial conditions.`,
    ]),

    sec("The indefinite integral"),
    def("Antiderivative and indefinite integral", r`<p>\(F\) is an antiderivative of \(f\) if \(F'=f\). The <strong>indefinite integral</strong> \(\displaystyle\int f(x)\,dx=F(x)+C\) denotes the whole family of antiderivatives, where \(C\) is an arbitrary constant.</p>`),
    p(r`A definite integral is a number. An indefinite integral is a family of functions, and the "\(+C\)" is part of the answer.`),

    sec("The rules"),
    table(
      ["Integral", "Result", "Because"],
      [
        [r`\(\displaystyle\int x^n\,dx,\ n\neq-1\)`, r`\(\dfrac{x^{n+1}}{n+1}+C\)`, r`\(\dfrac{d}{dx}\left[x^{n+1}\right]=(n+1)x^n\)`],
        [r`\(\displaystyle\int\frac1x\,dx\)`, r`\(\ln|x|+C\)`, r`\(\dfrac{d}{dx}\big[\ln|x|\big]=\dfrac1x\)`],
        [r`\(\displaystyle\int e^x\,dx\)`, r`\(e^x+C\)`, ""],
        [r`\(\displaystyle\int\cos x\,dx\)`, r`\(\sin x+C\)`, ""],
        [r`\(\displaystyle\int\sin x\,dx\)`, r`\(-\cos x+C\)`, r`\(\dfrac{d}{dx}[\cos x]=-\sin x\)`],
        [r`\(\displaystyle\int\sec^2x\,dx\)`, r`\(\tan x+C\)`, ""],
        [r`\(\displaystyle\int\sec x\tan x\,dx\)`, r`\(\sec x+C\)`, ""],
        [r`\(\displaystyle\int\frac{1}{1+x^2}\,dx\)`, r`\(\arctan x+C\)`, ""],
        [r`\(\displaystyle\int\frac{1}{\sqrt{1-x^2}}\,dx\)`, r`\(\arcsin x+C\)`, ""],
      ],
    ),
    p(r`Constant multiples come outside and sums split, exactly as for derivatives. Check any antiderivative by differentiating it.`),

    sec("Rewrite first"),
    p(r`There is no product or quotient rule for integrals. An integrand must be brought, by algebra, to a sum of terms each matching a row of the table: expand products, divide through by a single-term denominator, and write roots and reciprocals as powers.`),

    sec("Initial conditions"),
    p(r`A single known value pins down \(C\). Integrate, substitute the known point, solve for \(C\). When integrating twice (acceleration to velocity to position) there are two constants and two conditions are needed.`),

    sec("Worked examples"),
    ex("core", "Powers and a logarithm", r`Find \(\displaystyle\int\left(x^3-2\sqrt x+\frac4x\right)dx\).`, [
      r`Rewrite: \(x^3-2x^{1/2}+4x^{-1}\).`,
      r`Integrate term by term: \(\dfrac{x^4}{4}-2\cdot\dfrac{x^{3/2}}{3/2}+4\ln|x|\).`,
    ], r`\(\dfrac{x^4}{4}-\dfrac43x^{3/2}+4\ln|x|+C\).`),
    ex("exam", "Expand before integrating", r`Find \(\displaystyle\int\left(x^2+1\right)^2dx\).`, [
      r`Expand: \(x^4+2x^2+1\).`,
      r`Integrate: \(\dfrac{x^5}{5}+\dfrac{2x^3}{3}+x\).`,
    ], r`\(\dfrac{x^5}{5}+\dfrac{2x^3}{3}+x+C\).`),
    ex("exam", "A particular antiderivative", r`Find \(f(x)\) given \(f'(x)=6x^2-4\) and \(f(1)=5\).`, [
      r`\(f(x)=2x^3-4x+C\).`,
      r`\(f(1)=2-4+C=5\), so \(C=7\).`,
    ], r`\(f(x)=2x^3-4x+7\).`),
    ex("stretch", "From acceleration to position", r`A particle has acceleration \(a(t)=6t-4\), with \(v(0)=3\) and \(x(0)=2\). Find its position function.`, [
      r`\(v(t)=3t^2-4t+C_1\). From \(v(0)=3\): \(C_1=3\).`,
      r`\(x(t)=t^3-2t^2+3t+C_2\). From \(x(0)=2\): \(C_2=2\).`,
    ], r`\(x(t)=t^3-2t^2+3t+2\).`),

    sec("Common errors"),
    mistake(r`the power rule on \(\dfrac1x\)`, r`<p>\(\displaystyle\int x^{-1}\,dx\) is not \(\dfrac{x^0}{0}\). It is \(\ln|x|+C\), the one power the rule cannot handle.</p>`),
    mistake("differentiating instead of integrating", r`<p>\(\displaystyle\int x^3\,dx=\dfrac{x^4}{4}+C\), not \(3x^2\). Raise the power, then divide by the <em>new</em> power.</p>`),
    mistake("the sign on sine", r`<p>\(\displaystyle\int\sin x\,dx=-\cos x+C\). Differentiating cosine gives a minus, so integrating sine must too.</p>`),
    mistake("omitting + C", r`<p>An indefinite integral without \(+C\) is incomplete, and when solving a differential equation (Unit 7) omitting it forfeits most of the points.</p>`),
    mistake("integrating a product factor by factor", r`<p>\(\displaystyle\int x\cos x\,dx\) is not \(\dfrac{x^2}{2}\sin x\). Multiply out when you can; otherwise a different method is needed.</p>`),

    sec("Write it so it scores"),
    justify(
      r`The velocity of a particle is \(v(t)=4\cos t-2t\), and its position at \(t=0\) is \(x(0)=1\). Find \(x(t)\).`,
      r`\(x(t)=\displaystyle\int(4\cos t-2t)\,dt=4\sin t-t^2+C\). Since \(x(0)=1\), \(0-0+C=1\), so \(C=1\) and \(x(t)=4\sin t-t^2+1\).`,
      r`The antiderivative appears with its constant, the condition is used to find the constant, and the final function is stated. Three visible steps, each creditable.`,
    ),
    exam(r`<p>On multiple choice, an antiderivative can always be checked in seconds by differentiating the options. If you are unsure of a sign or a coefficient, differentiate rather than guess.</p>`),

    sec("Practice"),
    pq(r`Find \(\displaystyle\int\left(4x^3-6x+2\right)dx\).`, r`\(x^4-3x^2+2x+C\).`, "core"),
    pq(r`Find \(\displaystyle\int\frac{5}{x^3}\,dx\).`, r`\(5\cdot\dfrac{x^{-2}}{-2}+C=-\dfrac{5}{2x^2}+C\).`, "core"),
    pq(r`Find \(\displaystyle\int\left(3e^x-2\sin x\right)dx\).`, r`\(3e^x+2\cos x+C\).`, "exam"),
    pq(r`Find \(\displaystyle\int\frac{x^3-4x+2}{x}\,dx\).`, r`\(\displaystyle\int\left(x^2-4+\frac2x\right)dx=\dfrac{x^3}{3}-4x+2\ln|x|+C\).`, "exam"),
    pq(r`Find \(f(x)\) given \(f'(x)=\dfrac{2}{1+x^2}\) and \(f(1)=\pi\).`, r`\(f(x)=2\arctan x+C\). \(f(1)=\dfrac\pi2+C=\pi\), so \(C=\dfrac\pi2\).`, "exam"),
    pq(r`Find \(f(x)\) given \(f''(x)=12x\), \(f'(0)=-1\) and \(f(1)=4\).`, r`\(f'(x)=6x^2-1\). \(f(x)=2x^3-x+C\), and \(f(1)=1+C=4\) gives \(C=3\): \(f(x)=2x^3-x+3\).`, "stretch"),

    sec("Summary"),
    key([
      ["Reverse the rules", r`Each derivative formula gives an integral formula.`],
      [r`\(\displaystyle\int x^n\,dx\)`, r`\(\dfrac{x^{n+1}}{n+1}+C\); for \(n=-1\), \(\ln|x|+C\).`],
      ["Rewrite", r`Expand, divide, convert to powers.`],
      [r`\(+C\)`, r`Always; fixed by an initial condition.`],
    ]),
  ],
});

// ───────────────────────── 6.9 ─────────────────────────
u6b["6.9"] = lesson({
  code: "6.9", unit: 6, official: "6.9", calc: "No calculator",
  title: "Integration by Substitution",
  parts: () => [
    lede(r`The basic rules integrate \(\cos x\) but not \(\cos(x^2)\cdot2x\). Yet the second is exactly what the chain rule produces when \(\sin(x^2)\) is differentiated. Substitution is the chain rule run backwards: it spots an "inside" function sitting next to its own derivative, renames the inside as a single letter, and reduces the integral to a basic one. It is the only integration technique beyond algebra that the exam requires, and it appears everywhere.`),
    goals([
      r`Recognise an integrand of the form \(f\big(g(x)\big)\,g'(x)\).`,
      r`Carry out a substitution for an indefinite integral.`,
      r`Change the limits of integration in a definite integral.`,
      r`Apply substitution to integrals involving an unknown function.`,
    ]),

    sec("The method"),
    thm("Substitution", r`<p>If \(u=g(x)\), then \(du=g'(x)\,dx\) and</p>${disp(r`\int f\big(g(x)\big)\,g'(x)\,dx=\int f(u)\,du.`)}`),
    `<ol><li>Choose \(u\): usually the inside of a composition, a denominator, or an exponent.</li><li>Compute \(du=g'(x)\,dx\).</li><li>Rewrite the integral <strong>entirely</strong> in \(u\). Adjust by a constant factor if needed.</li><li>Integrate with respect to \(u\).</li><li>Replace \(u\) by \(g(x)\).</li></ol>`,
    p(r`A constant factor can be supplied: if \(du=2x\,dx\) and the integral has only \(x\,dx\), write \(x\,dx=\tfrac12du\). A <em>variable</em> factor cannot be supplied this way.`),

    sec("Patterns worth knowing at sight"),
    table(
      ["Integral", "Result", "Substitution"],
      [
        [r`\(\displaystyle\int e^{kx}\,dx\)`, r`\(\dfrac1ke^{kx}+C\)`, r`\(u=kx\)`],
        [r`\(\displaystyle\int\cos(kx)\,dx\)`, r`\(\dfrac1k\sin(kx)+C\)`, r`\(u=kx\)`],
        [r`\(\displaystyle\int\frac{g'(x)}{g(x)}\,dx\)`, r`\(\ln|g(x)|+C\)`, r`\(u=g(x)\)`],
        [r`\(\displaystyle\int\tan x\,dx\)`, r`\(-\ln|\cos x|+C\)`, r`\(u=\cos x\)`],
      ],
    ),

    sec("Definite integrals: change the limits"),
    p(r`With a definite integral, convert the limits to values of \(u\) at the same time as the integrand. Then there is no need to return to \(x\).`),
    disp(r`\int_a^bf\big(g(x)\big)\,g'(x)\,dx=\int_{g(a)}^{g(b)}f(u)\,du.`),

    sec("Worked examples"),
    ex("core", "The derivative is already present", r`Find \(\displaystyle\int2x\left(x^2+1\right)^5dx\).`, [
      r`Let \(u=x^2+1\), so \(du=2x\,dx\).`,
      r`The integral becomes \(\displaystyle\int u^5\,du=\dfrac{u^6}{6}+C\).`,
    ], r`\(\dfrac{\left(x^2+1\right)^6}{6}+C\).`),
    ex("exam", "Adjusting by a constant", r`Find \(\displaystyle\int x\cos\left(x^2\right)dx\).`, [
      r`Let \(u=x^2\), so \(du=2x\,dx\) and \(x\,dx=\tfrac12du\).`,
      r`\(\displaystyle\int\cos u\cdot\tfrac12\,du=\tfrac12\sin u+C\).`,
    ], r`\(\dfrac12\sin\left(x^2\right)+C\).`),
    ex("exam", "A definite integral with new limits", r`Evaluate \(\displaystyle\int_0^1x\left(x^2+1\right)^3dx\).`, [
      r`Let \(u=x^2+1\), \(du=2x\,dx\). When \(x=0\), \(u=1\); when \(x=1\), \(u=2\).`,
      r`\(\dfrac12\displaystyle\int_1^2u^3\,du=\dfrac12\Big[\dfrac{u^4}{4}\Big]_1^2=\dfrac12\cdot\dfrac{16-1}{4}\).`,
    ], r`\(\dfrac{15}{8}\).`),
    ex("exam", "A logarithm", r`Evaluate \(\displaystyle\int_1^e\frac{\ln x}{x}\,dx\).`, [
      r`Let \(u=\ln x\), \(du=\dfrac1x\,dx\). Limits: \(u=0\) to \(u=1\).`,
      r`\(\displaystyle\int_0^1u\,du=\Big[\dfrac{u^2}{2}\Big]_0^1\).`,
    ], r`\(\dfrac12\).`),
    ex("stretch", "Substitution with an unknown function", r`Given \(\displaystyle\int_0^9f(x)\,dx=10\), evaluate \(\displaystyle\int_0^3x\,f\left(x^2\right)dx\).`, [
      r`Let \(u=x^2\), \(du=2x\,dx\), so \(x\,dx=\tfrac12du\). Limits: \(u=0\) to \(u=9\).`,
      r`\(\dfrac12\displaystyle\int_0^9f(u)\,du=\dfrac12(10)\).`,
    ], r`\(5\).`),

    sec("Common errors"),
    mistake("leaving the old limits on the new integral", r`<p>\(\dfrac12\displaystyle\int_0^1u^3\,du\) in the third example would give \(\tfrac18\), not \(\tfrac{15}{8}\). Once the variable is \(u\), the limits must be values of \(u\).</p>`),
    mistake("a mixture of x and u", r`<p>An integral such as \(\displaystyle\int x\,u^3\,du\) is not meaningful. Everything, including \(dx\), must be converted.</p>`),
    mistake("losing the constant factor", r`<p>\(\displaystyle\int e^{3x}dx=\tfrac13e^{3x}+C\), not \(e^{3x}+C\) and not \(3e^{3x}+C\). Differentiate to check: the chain rule must reproduce the integrand.</p>`),
    mistake("supplying a variable factor", r`<p>\(\displaystyle\int\cos\left(x^2\right)dx\) has no \(x\) beside it, and you cannot insert one. Substitution does not apply (and this integral has no elementary antiderivative).</p>`),

    sec("Write it so it scores"),
    justify(
      r`Evaluate \(\displaystyle\int_0^{\pi/2}\sin x\cos^2x\,dx\).`,
      r`Let \(u=\cos x\), \(du=-\sin x\,dx\). When \(x=0\), \(u=1\); when \(x=\tfrac\pi2\), \(u=0\). The integral is \(-\displaystyle\int_1^0u^2\,du=\int_0^1u^2\,du=\dfrac13\).`,
      r`The substitution, the differential and both converted limits are stated. The limits come out "upside down" (1 to 0); keeping them in that order and using the minus sign to reverse them is cleaner than rearranging in your head.`,
    ),
    exam(r`<p>The unknown-function version, such as \(\displaystyle\int_0^2f(3x)\,dx\) given \(\displaystyle\int_0^6f(x)\,dx\), is a multiple-choice favourite. Always write the substitution out; the factor \(\tfrac13\) and the new limits are both easy to get wrong by inspection.</p>`),

    sec("Practice"),
    pq(r`Find \(\displaystyle\int e^{3x}\,dx\).`, r`\(\dfrac13e^{3x}+C\).`, "core"),
    pq(r`Find \(\displaystyle\int\frac{x}{x^2+4}\,dx\).`, r`\(u=x^2+4\): \(\dfrac12\ln\left(x^2+4\right)+C\).`, "core"),
    pq(r`Find \(\displaystyle\int\tan x\,dx\).`, r`\(\displaystyle\int\frac{\sin x}{\cos x}\,dx\) with \(u=\cos x\): \(-\ln|\cos x|+C\).`, "exam"),
    pq(r`Evaluate \(\displaystyle\int_0^1x\,e^{-x^2}\,dx\).`, r`\(u=-x^2\), \(du=-2x\,dx\): \(-\dfrac12\Big[e^{u}\Big]_0^{-1}=\dfrac12\left(1-\dfrac1e\right)\).`, "exam"),
    pq(r`Given \(\displaystyle\int_0^6f(x)\,dx=9\), evaluate \(\displaystyle\int_0^2f(3x)\,dx\).`, r`\(u=3x\), \(dx=\tfrac13du\), limits 0 to 6: \(\dfrac13(9)=3\).`, "exam"),
    pq(r`Find \(\displaystyle\int x\sqrt{x+1}\,dx\).`, r`\(u=x+1\), so \(x=u-1\): \(\displaystyle\int(u-1)u^{1/2}\,du=\dfrac25u^{5/2}-\dfrac23u^{3/2}+C=\dfrac25(x+1)^{5/2}-\dfrac23(x+1)^{3/2}+C\).`, "stretch"),

    sec("Summary"),
    key([
      ["Look for", r`An inside function beside its derivative.`],
      ["Convert everything", r`Integrand, \(dx\), and (if definite) the limits.`],
      ["Constants", r`May be adjusted; variables may not.`],
      ["Check", r`Differentiate the answer.`],
    ]),
  ],
});
