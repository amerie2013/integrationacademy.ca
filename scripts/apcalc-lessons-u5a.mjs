// AP Calculus AB exam prep — Unit 5 (Analysing Functions), lessons 5.1–5.4.
// Original wording, examples, numbers and figures throughout (see u1a for notes).
import { r, lesson, lede, goals, sec, p, disp, def, thm, exam, mistake, justify, ex, pq, key, table } from "./apcalc/kit.mjs";
import { plot, figure, C } from "./apcalc/fig.mjs";

export const u5a = {};

// The unit's running example: f(x) = x³ − 3x² − 9x + 5.
//   f' = 3(x+1)(x−3), f'' = 6(x−1); relative max (−1, 10), relative min (3, −22), inflection (1, −6).
export const cubic = (x) => x ** 3 - 3 * x * x - 9 * x + 5;
export const cubicFigure = (o = {}) => {
  const g = plot({ w: 400, h: 330, x: [-3.5, 5.5], y: [-26, 14], stepY: 4, tickEvery: 2, alt: "Graph of f(x) = x cubed minus 3 x squared minus 9x plus 5" });
  g.curve(cubic, -2.6, 4.75).dot(-1, 10).dot(3, -22);
  if (o.inflection) g.dot(1, -6, { color: C.alt });
  if (o.interval) g.dot(-2, 3, { color: C.grey }).dot(4, -15, { color: C.grey });
  g.label(-2.9, 11.6, "(−1, 10)", { plain: true, size: 12 }).label(3.25, -23.6, "(3, −22)", { plain: true, size: 12 });
  return g;
};

// The piecewise-linear graph of f' used in 5.3, 5.4, 5.6 and 5.9:
//   (−4,−2) (−2,2) (0,0) (1,2) (3,−2) (6,4); zeros at −3, 0 (touch), 2, 4.
export const FP = [[-4, -2], [-2, 2], [0, 0], [1, 2], [3, -2], [6, 4]];
export const fprimeFigure = () => {
  const g = plot({ w: 430, h: 300, x: [-5, 7], y: [-3, 5], alt: "Piecewise-linear graph of f prime" });
  g.poly(FP).dot(-4, -2).dot(6, 4).label(4.6, 3.6, "y = f ′(x)");
  return g;
};

// ───────────────────────── 5.1 ─────────────────────────
u5a["5.1"] = lesson({
  code: "5.1", unit: 5, official: "5.1", calc: "No calculator",
  title: "The Mean Value Theorem",
  parts: () => {
    const g = plot({ w: 400, h: 290, x: [-0.5, 5], y: [-0.5, 3], stepY: 0.5, tickEvery: 2, alt: "Graph of the square root function with a secant line and a parallel tangent line" });
    g.curve((x) => 0.5 * x, 0, 4.6, { color: C.grey, width: 1.6, dash: "5 4" }).curve((x) => 1 + 0.5 * (x - 1), 0, 4.6, { color: C.alt, width: 1.9 }).curve(Math.sqrt, 0, 4.6, { n: 600 }).dot(0, 0).dot(4, 2).dot(1, 1, { color: C.alt });
    g.label(1.05, 0.55, "c = 1", { size: 13, color: C.alt });
    return [
      lede(r`You drive 150 km in exactly two hours. Your average speed was 75 km/h. Was there a moment when your speedometer read exactly 75? It must have: you cannot average 75 without passing through it. The Mean Value Theorem makes this precise. It is the second of the three existence theorems, and like the Intermediate Value Theorem it is tested as a justification, not a calculation.`),
      goals([
        r`State the Mean Value Theorem with both hypotheses.`,
        r`Find the value of \(c\) that the theorem guarantees.`,
        r`Use the theorem to justify that a derivative takes a particular value.`,
        r`Tell the Mean Value Theorem apart from the Intermediate Value Theorem.`,
      ]),

      sec("The theorem"),
      thm("Mean Value Theorem (MVT)", r`<p>If \(f\) is <strong>continuous on \([a,b]\)</strong> and <strong>differentiable on \((a,b)\)</strong>, then there is at least one number \(c\) in \((a,b)\) such that</p>${disp(r`f'(c)=\frac{f(b)-f(a)}{b-a}.`)}`),
      p(r`In words: somewhere in the interval, the <strong>instantaneous</strong> rate of change equals the <strong>average</strong> rate of change. Geometrically, some tangent line is parallel to the secant line through the endpoints.`),
      figure(g, r`\(f(x)=\sqrt x\) on \([0,4]\). The secant (dashed) has slope \(\tfrac12\). The tangent at \(c=1\) (red) is parallel to it.`),
      p(r`The special case \(f(a)=f(b)\) is called <strong>Rolle's Theorem</strong>: the average rate is 0, so \(f'(c)=0\) for some \(c\). A differentiable function that returns to its starting height must have a horizontal tangent on the way.`),

      sec("Which theorem?"),
      table(
        ["", "Intermediate Value Theorem", "Mean Value Theorem"],
        [
          ["Needs", "continuity", "continuity <em>and</em> differentiability"],
          ["Guarantees a value of", r`the <strong>function</strong> \(f\)`, r`the <strong>derivative</strong> \(f'\)`],
          ["That value is", r`anything between \(f(a)\) and \(f(b)\)`, r`exactly \(\dfrac{f(b)-f(a)}{b-a}\)`],
        ],
      ),
      p(r`A question asking whether \(f\) must equal some number is the IVT. A question asking whether \(f'\) (a rate, a velocity's rate, a slope) must equal some number is almost always the MVT.`),

      sec("Worked examples"),
      ex("core", "Finding the guaranteed value", r`Find the value of \(c\) guaranteed by the Mean Value Theorem for \(f(x)=x^2-4x\) on \([1,5]\).`, [
        r`\(f\) is a polynomial: continuous on \([1,5]\) and differentiable on \((1,5)\).`,
        r`Average rate: \(\dfrac{f(5)-f(1)}{5-1}=\dfrac{5-(-3)}{4}=2\).`,
        r`Solve \(f'(c)=2c-4=2\).`,
      ], r`\(c=3\), which lies in \((1,5)\).`),
      ex("exam", "Justifying from a table", r`A car's velocity \(v(t)\), in m/s, is a differentiable function of time \(t\) seconds. Selected values are shown.${table(["\\(t\\)", "0", "3", "7", "10"], [["\\(v(t)\\)", "12", "20", "14", "26"]])}Must there be a time \(t\), \(3\lt t\lt7\), at which the car's acceleration is \(-1.5\) m/s²? Justify.`, [
        r`Acceleration is \(v'(t)\), a derivative, so think Mean Value Theorem.`,
        r`\(\dfrac{v(7)-v(3)}{7-3}=\dfrac{14-20}{4}=-1.5\).`,
        r`\(v\) is differentiable, hence continuous, on \([3,7]\).`,
      ], r`Yes. Since \(v\) is differentiable (and therefore continuous) on \([3,7]\), the Mean Value Theorem guarantees a time \(t\) in \((3,7)\) with \(v'(t)=\dfrac{v(7)-v(3)}{7-3}=-1.5\).`),
      ex("exam", "When the hypotheses fail", r`Let \(f(x)=|x-2|\) on \([0,5]\). Does the Mean Value Theorem guarantee a \(c\) with \(f'(c)=\dfrac{f(5)-f(0)}{5-0}\)?`, [
        r`\(\dfrac{f(5)-f(0)}{5}=\dfrac{3-2}{5}=\dfrac15\).`,
        r`\(f\) is not differentiable at \(x=2\), which is inside the interval.`,
        r`In fact \(f'(x)\) is only ever \(-1\) or \(1\), never \(\tfrac15\).`,
      ], r`No. The theorem does not apply, because \(f\) is not differentiable on \((0,5)\).`),
      ex("stretch", "The theorem applied to a derivative", r`A function \(f\) is twice differentiable, with \(f'(1)=4\) and \(f'(5)=4\). Show that \(f''(c)=0\) for some \(c\) in \((1,5)\).`, [
        r`Apply the Mean Value Theorem to the function \(f'\), which is differentiable (because \(f\) is twice differentiable) and therefore continuous on \([1,5]\).`,
        r`\(\dfrac{f'(5)-f'(1)}{5-1}=\dfrac{4-4}{4}=0\).`,
      ], r`By the Mean Value Theorem applied to \(f'\), there is a \(c\) in \((1,5)\) with \(f''(c)=0\).`),

      sec("Common errors"),
      mistake("omitting a hypothesis", r`<p>Both conditions must be stated: continuous on \([a,b]\) <em>and</em> differentiable on \((a,b)\). If the question says "differentiable", write "differentiable, and therefore continuous".</p>`),
      mistake("citing the wrong theorem", r`<p>Arguing "\(v(3)=20\) and \(v(7)=14\), so by the IVT \(v'=-1.5\)" confuses values of \(v\) with values of \(v'\). The IVT cannot produce a derivative value.</p>`),
      mistake("accepting a c outside the interval", r`<p>If solving \(f'(c)=\) (average rate) gives two solutions, keep only those strictly between \(a\) and \(b\).</p>`),
      mistake("not showing the difference quotient", r`<p>The average rate must be computed on the page, with the values used. A bare "by the MVT, yes" earns nothing.</p>`),

      sec("Write it so it scores"),
      justify(
        r`A differentiable function \(h\) has \(h(2)=7\) and \(h(6)=19\). Must there be a value \(c\), \(2\lt c\lt6\), such that \(h'(c)=3\)? Justify your answer.`,
        r`Yes. \(h\) is differentiable, so \(h\) is continuous on \([2,6]\) and differentiable on \((2,6)\). Since \(\dfrac{h(6)-h(2)}{6-2}=\dfrac{19-7}{4}=3\), the Mean Value Theorem guarantees a \(c\) in \((2,6)\) with \(h'(c)=3\).`,
        r`A decision, both hypotheses, the difference quotient with numbers, and the theorem named. Those four items are the entire scoring rubric for this kind of part.`,
      ),
      exam(r`<p>Table questions often contain <strong>both</strong> an IVT part and an MVT part. Read whether the target is a value of the function or a value of its derivative, and name the matching theorem. Using one name for both is a classic way to lose a point you understood.</p>`),

      sec("Practice"),
      pq(r`Find the value of \(c\) guaranteed by the Mean Value Theorem for \(f(x)=x^3\) on \([0,3]\).`, r`Average rate \(\dfrac{27}{3}=9\). \(3c^2=9\) gives \(c=\sqrt3\) (the positive root lies in \((0,3)\)).`, "core"),
      pq(r`Find the value of \(c\) guaranteed by the Mean Value Theorem for \(f(x)=\sqrt x\) on \([0,4]\).`, r`Average rate \(\dfrac24=\dfrac12\). \(\dfrac{1}{2\sqrt c}=\dfrac12\) gives \(c=1\).`, "core"),
      pq(r`A differentiable function \(P\) has \(P(1)=40\) and \(P(9)=16\). What value must \(P'\) take somewhere in \((1,9)\)?`, r`\(\dfrac{16-40}{9-1}=-3\). By the MVT, \(P'(c)=-3\) for some \(c\) in \((1,9)\).`, "exam"),
      pq(r`Explain why the Mean Value Theorem does not apply to \(f(x)=\dfrac1x\) on \([-1,1]\).`, r`\(f\) is not continuous on \([-1,1]\): it is undefined at \(x=0\).`, "exam"),
      pq(r`A differentiable function \(g\) has \(g(0)=5\) and \(g(4)=5\). What does Rolle's Theorem guarantee?`, r`A number \(c\) in \((0,4)\) with \(g'(c)=0\): a horizontal tangent.`, "exam"),
      pq(r`A car passes one toll booth at 2:00 and another, 180 km away, at 3:30. The speed limit is 110 km/h. Explain how the Mean Value Theorem shows the driver exceeded the limit.`, r`The position function is differentiable. Its average rate of change is \(\dfrac{180}{1.5}=120\) km/h, so by the MVT the speed was exactly 120 km/h at some instant, which exceeds 110.`, "stretch"),

      sec("Summary"),
      key([
        ["Hypotheses", r`Continuous on \([a,b]\), differentiable on \((a,b)\).`],
        ["Conclusion", r`\(f'(c)=\dfrac{f(b)-f(a)}{b-a}\) for some \(c\) in \((a,b)\).`],
        ["Picture", r`A tangent parallel to the secant.`],
        ["About", r`A value of the derivative (the IVT is about a value of the function).`],
      ]),
    ];
  },
});

// ───────────────────────── 5.2 ─────────────────────────
u5a["5.2"] = lesson({
  code: "5.2", unit: 5, official: "5.2", calc: "No calculator",
  title: "Extreme Values and Critical Points",
  parts: () => [
    lede(r`Where is a function largest? Where is it smallest? These questions drive most applications of the derivative, from maximising profit to minimising material. Before any technique, two matters of principle must be settled: does a largest value even <em>exist</em>, and where could it possibly be? The Extreme Value Theorem answers the first. The idea of a critical point answers the second.`),
    goals([
      r`Distinguish absolute (global) from relative (local) extrema.`,
      r`State the Extreme Value Theorem and recognise when it applies.`,
      r`Find all critical points of a function, including those where the derivative is undefined.`,
      r`Explain why extrema can occur only at critical points or endpoints.`,
    ]),

    sec("Two kinds of extreme"),
    def("Absolute and relative extrema", r`<p>\(f(c)\) is the <strong>absolute maximum</strong> of \(f\) on a domain if \(f(c)\ge f(x)\) for every \(x\) in the domain. It is a <strong>relative maximum</strong> if \(f(c)\ge f(x)\) for all \(x\) in some open interval around \(c\). Minima are defined in the same way with the inequality reversed.</p>`),
    p(r`An absolute maximum is the highest point on the whole graph; a relative maximum is the top of a local hill. The extreme <em>value</em> is the output \(f(c)\); it <em>occurs at</em> the input \(x=c\). Exam questions ask for one or the other, and giving the wrong one loses the mark.`),

    sec("Existence"),
    thm("Extreme Value Theorem (EVT)", r`<p>If \(f\) is <strong>continuous</strong> on a <strong>closed interval</strong> \([a,b]\), then \(f\) has both an absolute maximum and an absolute minimum on \([a,b]\).</p>`),
    p(r`Both conditions are needed. \(f(x)=\dfrac1x\) on \((0,1]\) is continuous but the interval is not closed, and there is no maximum: the values grow without bound. A function with a jump on a closed interval may approach a height without reaching it.`),

    sec("Where extrema can be"),
    def("Critical point", r`<p>A number \(c\) in the domain of \(f\) is a critical point if \(f'(c)=0\) or \(f'(c)\) <strong>does not exist</strong>.</p>`),
    thm("Location of extrema", r`<p>If \(f\) has a relative maximum or minimum at an interior point \(c\), then \(c\) is a critical point of \(f\).</p>`),
    p(r`So the only places an extreme value can occur are critical points and endpoints. The converse is false: a critical point need not be an extremum. \(f(x)=x^3\) has \(f'(0)=0\), and the graph passes straight through.`),

    sec("Worked examples"),
    ex("core", "Critical points of a polynomial", r`Find the critical points of \(f(x)=x^3-3x^2-9x+5\).`, [
      r`\(f'(x)=3x^2-6x-9=3(x+1)(x-3)\).`,
      r`\(f'(x)=0\) at \(x=-1\) and \(x=3\); \(f'\) exists everywhere.`,
    ], r`The critical points are \(x=-1\) and \(x=3\).`),
    ex("exam", "A critical point where the derivative is undefined", r`Find the critical points of \(f(x)=x^{2/3}(x-5)\).`, [
      r`Product rule: \(f'(x)=\tfrac23x^{-1/3}(x-5)+x^{2/3}\).`,
      r`Combine over \(3x^{1/3}\): \(f'(x)=\dfrac{2(x-5)+3x}{3x^{1/3}}=\dfrac{5(x-2)}{3x^{1/3}}\).`,
      r`\(f'(x)=0\) at \(x=2\). \(f'(x)\) is undefined at \(x=0\), which is in the domain of \(f\).`,
    ], r`The critical points are \(x=0\) and \(x=2\).`),
    ex("exam", "An exponential factor", r`Find the critical points of \(f(x)=xe^{-x}\).`, [
      r`\(f'(x)=e^{-x}-xe^{-x}=e^{-x}(1-x)\).`,
      r`\(e^{-x}\) is never zero, so \(f'(x)=0\) only when \(x=1\).`,
    ], r`The only critical point is \(x=1\).`),
    ex("stretch", "Does an extreme value have to exist?", r`For each function and interval, decide whether the Extreme Value Theorem guarantees an absolute maximum: (a) \(f(x)=x^2\) on \([-1,2]\); (b) \(f(x)=x^2\) on \((-1,2)\); (c) \(f(x)=\tan x\) on \(\left[0,\tfrac\pi2\right)\).`, [
      r`(a) Continuous on a closed interval: guaranteed. (The maximum is 4, at \(x=2\).)`,
      r`(b) The interval is open: not guaranteed. In fact there is no maximum, since the values approach 4 without reaching it.`,
      r`(c) The interval is not closed and \(\tan x\) is unbounded as \(x\to\tfrac\pi2^-\): not guaranteed, and none exists.`,
    ], r`Only (a). When the theorem does not apply an extreme value may or may not exist; you must examine the function.`),

    sec("Common errors"),
    mistake("only solving f′(x) = 0", r`<p>Critical points include places where \(f'\) is undefined (corners, cusps, vertical tangents). In the second example, missing \(x=0\) misses a relative maximum.</p>`),
    mistake("counting points outside the domain", r`<p>\(f(x)=\dfrac1x\) has \(f'\) undefined at 0, but 0 is not in the domain of \(f\), so it is not a critical point.</p>`),
    mistake("assuming every critical point is an extremum", r`<p>A critical point is a <em>candidate</em>. Whether it is a maximum, a minimum or neither needs a test (Lessons 5.4 and 5.7).</p>`),
    mistake("value versus location", r`<p>"The maximum is at \(x=-1\)" answers <em>where</em>. "The maximum value is 10" answers <em>what</em>. Read which is asked.</p>`),

    sec("Write it so it scores"),
    justify(
      r`A function \(f\) is continuous on \([0,6]\). Explain why \(f\) must have an absolute minimum on \([0,6]\).`,
      r`\(f\) is continuous on the closed interval \([0,6]\), so by the Extreme Value Theorem \(f\) attains an absolute minimum (and an absolute maximum) on \([0,6]\).`,
      r`It states both conditions of the theorem (continuous, closed interval) and names it. The EVT is the one existence theorem that is usually cited rather than computed with.`,
    ),
    exam(r`<p>The Extreme Value Theorem is what guarantees that the candidates test of Lesson 5.5 will work. On the exam it mostly appears in multiple choice: "which of the following guarantees that \(f\) has a maximum on the interval?" The answer is continuity on a <em>closed</em> interval.</p>`),

    sec("Practice"),
    pq(r`Find the critical points of \(f(x)=x^4-8x^2\).`, r`\(f'(x)=4x^3-16x=4x(x-2)(x+2)\): \(x=-2,\ 0,\ 2\).`, "core"),
    pq(r`Find the critical points of \(f(x)=x+\dfrac4x\).`, r`\(f'(x)=1-\dfrac{4}{x^2}=0\) at \(x=\pm2\). (\(x=0\) is not in the domain.)`, "core"),
    pq(r`Find the critical points of \(f(x)=|x-3|\).`, r`\(f'(x)=\pm1\), never zero, and undefined at \(x=3\), which is in the domain. The only critical point is \(x=3\).`, "exam"),
    pq(r`Find the critical points of \(f(x)=x^2e^{x}\).`, r`\(f'(x)=2xe^x+x^2e^x=xe^x(2+x)\): \(x=0\) and \(x=-2\).`, "exam"),
    pq(r`Find the critical points of \(f(x)=x-2\sin x\) on \((0,2\pi)\).`, r`\(f'(x)=1-2\cos x=0\) when \(\cos x=\tfrac12\): \(x=\dfrac\pi3\) and \(x=\dfrac{5\pi}{3}\).`, "exam"),
    pq(r`Give an example of a function that is continuous on \((0,1)\) and has neither an absolute maximum nor an absolute minimum there.`, r`\(f(x)=x\). Its values fill the open interval \((0,1)\), approaching 0 and 1 without attaining either.`, "stretch"),

    sec("Summary"),
    key([
      ["EVT", r`Continuous on a closed interval ⇒ an absolute max and min exist.`],
      ["Critical point", r`\(f'(c)=0\) or \(f'(c)\) undefined, with \(c\) in the domain.`],
      ["Candidates", r`Extrema occur only at critical points or endpoints.`],
      ["Not automatic", r`A critical point may be neither a max nor a min.`],
    ]),
  ],
});

// ───────────────────────── 5.3 ─────────────────────────
u5a["5.3"] = lesson({
  code: "5.3", unit: 5, official: "5.3", calc: "No calculator",
  title: "Increasing and Decreasing Intervals",
  parts: () => [
    lede(r`A positive derivative means a rising graph and a negative derivative means a falling one. That sentence is the foundation of everything in this unit. The work lies in finding <em>where</em> the derivative is positive or negative, which is a question about signs, and in stating the conclusion with the reason the exam requires.`),
    goals([
      r`Determine the intervals on which a function is increasing or decreasing.`,
      r`Build a sign chart for \(f'\) from its critical points.`,
      r`Read increasing and decreasing behaviour from a graph of \(f'\).`,
      r`Justify conclusions with the sign of the derivative.`,
    ]),

    sec("The principle"),
    thm("Sign of the derivative", r`<p>If \(f'(x)\gt0\) for all \(x\) in an interval, then \(f\) is <strong>increasing</strong> on that interval. If \(f'(x)\lt0\) for all \(x\) in an interval, then \(f\) is <strong>decreasing</strong> on that interval.</p>`),
    p(r`(This is a consequence of the Mean Value Theorem: between any two points the average rate equals \(f'(c)\) for some \(c\), which is positive.)`),

    sec("The sign chart"),
    p(r`The derivative can only change sign at a critical point (or where \(f\) itself is undefined). So the critical points cut the number line into intervals on each of which \(f'\) has one sign.`),
    `<ol><li>Find the critical points.</li><li>Mark them on a number line.</li><li>Find the sign of \(f'\) on each interval, by testing a point or by counting the signs of the factors.</li><li>Read off: \(+\) increasing, \(-\) decreasing.</li></ol>`,
    p(r`For \(f(x)=x^3-3x^2-9x+5\), \(f'(x)=3(x+1)(x-3)\):`),
    table(
      ["Interval", r`\(x\lt-1\)`, r`\(-1\lt x\lt3\)`, r`\(x\gt3\)`],
      [
        [r`\((x+1)\)`, "−", "+", "+"],
        [r`\((x-3)\)`, "−", "−", "+"],
        [r`\(f'(x)\)`, "+", "−", "+"],
        [r`\(f\)`, "increasing", "decreasing", "increasing"],
      ],
    ),

    sec("From a graph of the derivative"),
    p(r`When the graph you are given is of \(f'\), not \(f\), the question "where is \(f\) increasing?" becomes "where is the graph of \(f'\) <strong>above the \(x\)-axis</strong>?" The height of the \(f'\) graph matters; whether it is going up or down does not.`),
    figure(fprimeFigure(), r`A graph of \(f'\). It is above the axis on \((-3,0)\), \((0,2)\) and \((4,6)\), so \(f\) is increasing there; it is below the axis on \((-4,-3)\) and \((2,4)\), so \(f\) is decreasing there.`),

    sec("Worked examples"),
    ex("core", "A polynomial", r`On which intervals is \(f(x)=x^3-3x^2-9x+5\) increasing?`, [
      r`\(f'(x)=3(x+1)(x-3)\), zero at \(x=-1\) and \(x=3\).`,
      r`From the sign chart, \(f'(x)\gt0\) for \(x\lt-1\) and for \(x\gt3\).`,
    ], r`\(f\) is increasing on \((-\infty,-1)\) and on \((3,\infty)\).`),
    ex("exam", "An exponential factor", r`On which intervals is \(f(x)=x^2e^x\) decreasing?`, [
      r`\(f'(x)=xe^x(x+2)\). Since \(e^x\gt0\) always, the sign is that of \(x(x+2)\).`,
      r`\(x(x+2)\lt0\) exactly when \(-2\lt x\lt0\).`,
    ], r`\(f\) is decreasing on \((-2,0)\).`),
    ex("exam", "Reading the graph of f′", r`Using the graph of \(f'\) above, on which intervals is \(f\) decreasing? Give a reason.`, [
      r`\(f\) is decreasing where \(f'\lt0\), that is, where the graph of \(f'\) lies below the \(x\)-axis.`,
      r`That happens for \(-4\lt x\lt-3\) and for \(2\lt x\lt4\).`,
    ], r`\(f\) is decreasing on \((-4,-3)\) and \((2,4)\) because \(f'(x)\lt0\) on those intervals.`),
    ex("stretch", "A derivative that touches zero", r`Using the same graph, a student says "\(f\) is not increasing on \((-3,2)\) because \(f'(0)=0\)." Is the student right?`, [
      r`\(f'(x)\gt0\) on \((-3,0)\) and on \((0,2)\), and \(f'(0)=0\) at a single point.`,
      r`A single point where the derivative is zero, with positive values on both sides, does not interrupt the increase. (Compare \(x^3\) at 0.)`,
    ], r`No. \(f\) is increasing on the whole interval \((-3,2)\); the graph of \(f\) merely has a horizontal tangent at \(x=0\).`),

    sec("Common errors"),
    mistake("reading the direction of the f′ graph", r`<p>On \((-2,0)\) the graph of \(f'\) is <em>falling</em>, but it is still above the axis, so \(f\) is still <em>increasing</em>. Rising and falling of \(f'\) is about concavity (Lesson 5.6), not about whether \(f\) increases.</p>`),
    mistake("a sign chart as the whole answer", r`<p>A chart of plus and minus signs is working, not a justification. The conclusion must be written in a sentence that mentions \(f'\) by name.</p>`),
    mistake("testing a point in the wrong function", r`<p>To decide where \(f\) increases, substitute test points into \(f'\), not into \(f\).</p>`),

    sec("Write it so it scores"),
    justify(
      r`Let \(f(x)=x^3-3x^2-9x+5\). On what interval is \(f\) decreasing? Justify your answer.`,
      r`\(f'(x)=3(x+1)(x-3)\). \(f\) is decreasing on \(-1\lt x\lt3\) because \(f'(x)\lt0\) for \(-1\lt x\lt3\).`,
      r`The derivative is shown, the interval is stated, and the reason is given as a statement about the sign of \(f'\) on that interval. This sentence pattern, with "because \(f'(x)\lt0\)", is what readers look for.`,
    ),
    exam(r`<p>Either open or closed intervals are accepted for increasing and decreasing, so \((-1,3)\) and \([-1,3]\) both earn the mark. Do not spend time worrying about the endpoints.</p>`),

    sec("Practice"),
    pq(r`On which intervals is \(f(x)=x^4-8x^2\) increasing?`, r`\(f'(x)=4x(x-2)(x+2)\). Signs: \(-,+,-,+\) on the four intervals. Increasing on \((-2,0)\) and \((2,\infty)\).`, "core"),
    pq(r`On which interval is \(f(x)=xe^{-x}\) increasing?`, r`\(f'(x)=e^{-x}(1-x)\gt0\) when \(x\lt1\): increasing on \((-\infty,1)\).`, "core"),
    pq(r`On which intervals is \(f(x)=x+\dfrac4x\), \(x\gt0\), decreasing?`, r`\(f'(x)=1-\dfrac{4}{x^2}\lt0\) when \(x^2\lt4\): decreasing on \((0,2)\).`, "exam"),
    pq(r`Using the graph of \(f'\) in this lesson, on which intervals is \(f\) increasing?`, r`Where \(f'\gt0\): \((-3,2)\) (allowing the single zero at \(x=0\)) and \((4,6)\).`, "exam"),
    pq(r`A function has \(f'(x)=(x-1)^2(x-4)\). On which interval is \(f\) increasing?`, r`\((x-1)^2\ge0\), so the sign is that of \((x-4)\): increasing on \((4,\infty)\). There is no sign change at \(x=1\).`, "exam"),
    pq(r`For \(f(x)=\ln(x^2+1)\), show that \(f\) is decreasing for \(x\lt0\) and increasing for \(x\gt0\).`, r`\(f'(x)=\dfrac{2x}{x^2+1}\). The denominator is positive, so \(f'\) has the sign of \(x\): negative for \(x\lt0\), positive for \(x\gt0\).`, "stretch"),

    sec("Summary"),
    key([
      [r`\(f'\gt0\)`, r`\(f\) is increasing.`],
      [r`\(f'\lt0\)`, r`\(f\) is decreasing.`],
      ["Sign chart", r`Critical points split the line; one sign per interval.`],
      ["Graph of f′", r`Above the axis: \(f\) increasing. Below: decreasing.`],
    ]),
  ],
});

// ───────────────────────── 5.4 ─────────────────────────
u5a["5.4"] = lesson({
  code: "5.4", unit: 5, official: "5.4", calc: "No calculator",
  title: "The First Derivative Test",
  parts: () => [
    lede(r`A critical point is only a candidate for a maximum or minimum. The first derivative test decides the matter by looking at what the function is doing on either side. If the graph rises and then falls, the point between is a peak. The test is simple, and its justification is the single most frequently scored sentence in the free-response section.`),
    goals([
      r`Classify a critical point as a relative maximum, relative minimum, or neither.`,
      r`Apply the test to critical points where the derivative is undefined.`,
      r`Apply the test using a graph of \(f'\).`,
      r`Write the justification in the form that earns the point.`,
    ]),

    sec("The test"),
    thm("First derivative test", r`<p>Let \(c\) be a critical point of a function \(f\) that is continuous at \(c\).</p>
      <ul>
        <li>If \(f'\) changes from <strong>positive to negative</strong> at \(c\), then \(f\) has a <strong>relative maximum</strong> at \(c\).</li>
        <li>If \(f'\) changes from <strong>negative to positive</strong> at \(c\), then \(f\) has a <strong>relative minimum</strong> at \(c\).</li>
        <li>If \(f'\) does <strong>not change sign</strong> at \(c\), then \(f\) has neither at \(c\).</li>
      </ul>`),
    figure(cubicFigure(), r`\(f(x)=x^3-3x^2-9x+5\). At \(x=-1\), \(f'\) changes from positive to negative: a relative maximum. At \(x=3\), from negative to positive: a relative minimum.`),

    sec("The justification"),
    p(r`The sentence that scores has a fixed form:`),
    r`<p class="apx-script" style="text-align:center;font-family:Fraunces,serif;font-size:17px;">"\(f\) has a relative maximum at \(x=c\) because \(f'\) changes from positive to negative at \(x=c\)."</p>`,
    p(r`Three things must be present: the function named (\(f\), not "it"), the derivative named (\(f'\), not "the slope" or "the graph"), and the <strong>direction of the sign change</strong>.`),

    sec("Worked examples"),
    ex("core", "Classifying two critical points", r`Find and classify the relative extrema of \(f(x)=x^3-3x^2-9x+5\).`, [
      r`\(f'(x)=3(x+1)(x-3)\); critical points \(x=-1\) and \(x=3\).`,
      r`Signs of \(f'\): positive for \(x\lt-1\), negative for \(-1\lt x\lt3\), positive for \(x\gt3\).`,
      r`\(f(-1)=10\) and \(f(3)=-22\).`,
    ], r`Relative maximum of 10 at \(x=-1\) (\(f'\) changes from positive to negative); relative minimum of \(-22\) at \(x=3\) (\(f'\) changes from negative to positive).`),
    ex("exam", "A critical point where f′ is undefined", r`Classify the critical points of \(f(x)=x^{2/3}(x-5)\), for which \(f'(x)=\dfrac{5(x-2)}{3x^{1/3}}\).`, [
      r`Critical points: \(x=0\) (\(f'\) undefined) and \(x=2\) (\(f'=0\)). \(f\) is continuous at both.`,
      r`For \(x\lt0\): numerator negative, denominator negative, so \(f'\gt0\).`,
      r`For \(0\lt x\lt2\): numerator negative, denominator positive, so \(f'\lt0\). For \(x\gt2\): both positive, so \(f'\gt0\).`,
    ], r`Relative maximum at \(x=0\) (\(f'\) changes from positive to negative; the graph has a cusp there). Relative minimum at \(x=2\) (\(f'\) changes from negative to positive).`),
    ex("exam", "From the graph of f′", r`Using the graph of \(f'\) from Lesson 5.3, with zeros at \(x=-3\), \(0\), \(2\) and \(4\), find all \(x\) at which \(f\) has a relative maximum.`, [
      r`A relative maximum needs \(f'\) to change from positive to negative, that is, the graph of \(f'\) to cross the axis <em>downward</em>.`,
      r`At \(x=-3\) and \(x=4\) it crosses upward. At \(x=0\) it touches the axis and stays positive. At \(x=2\) it crosses downward.`,
    ], r`\(f\) has a relative maximum at \(x=2\) only, because \(f'\) changes from positive to negative there.`),
    ex("stretch", "A repeated factor", r`A function has \(f'(x)=x^2(x-3)(x+2)^3\). Classify each critical point.`, [
      r`Critical points: \(x=-2,\ 0,\ 3\).`,
      r`\(x^2\) never changes sign. \((x+2)^3\) changes sign at \(-2\) (odd power). \((x-3)\) changes sign at 3.`,
      r`Signs of \(f'\): for \(x\lt-2\), \((+)(-)(-)=+\); for \(-2\lt x\lt0\), \((+)(-)(+)=-\); for \(0\lt x\lt3\), \(-\); for \(x\gt3\), \(+\).`,
    ], r`Relative maximum at \(x=-2\), neither at \(x=0\) (no sign change), relative minimum at \(x=3\).`),

    sec("Common errors"),
    mistake("\"because f′(c) = 0\"", r`<p>\(f'(c)=0\) makes \(c\) a candidate. It does not make it a maximum. The reason must be the <em>sign change</em>.</p>`),
    mistake("vague pronouns and nouns", r`<p>"It goes from positive to negative" or "the slope changes sign" may be marked wrong, because the reader cannot tell which function is meant. Write \(f'\).</p>`),
    mistake("\"f changes from increasing to decreasing\" with nothing else", r`<p>True, but in a calculus justification the evidence should be the derivative. If you say it this way, add "because \(f'\) changes from positive to negative".</p>`),
    mistake("classifying where the graph of f′ has a peak", r`<p>A peak of the \(f'\) graph is not a maximum of \(f\). Maxima of \(f\) are where \(f'\) crosses zero going down.</p>`),

    sec("Write it so it scores"),
    justify(
      r`The derivative of a function \(g\) is \(g'(x)=(x-4)e^{x}\). Find the \(x\)-coordinate of each relative extremum of \(g\) and classify it. Justify your answer.`,
      r`\(g'(x)=0\) only at \(x=4\), since \(e^x\gt0\). \(g\) has a relative minimum at \(x=4\) because \(g'\) changes from negative to positive at \(x=4\).`,
      r`The critical point is found with a reason it is the only one, the extremum is classified, and the justification names \(g'\) and the direction of its sign change.`,
    ),
    exam(r`<p>If you draw a sign chart, <strong>label it</strong> with \(f'\) and still write the sentence. Scoring guidelines have stated for years that a sign chart alone is not a sufficient justification.</p>`),

    sec("Practice"),
    pq(r`Classify the critical points of \(f(x)=x^4-8x^2\).`, r`\(f'(x)=4x(x-2)(x+2)\), with signs \(-,+,-,+\). Relative minima at \(x=\pm2\); relative maximum at \(x=0\).`, "core"),
    pq(r`Classify the critical point of \(f(x)=xe^{-x}\).`, r`\(f'(x)=e^{-x}(1-x)\) changes from positive to negative at \(x=1\): a relative maximum, with value \(\dfrac1e\).`, "core"),
    pq(r`A function has \(f'(x)=(x-1)^2(x-4)\). Classify its critical points.`, r`At \(x=1\) there is no sign change: neither. At \(x=4\), \(f'\) changes from negative to positive: a relative minimum.`, "exam"),
    pq(r`Using the graph of \(f'\) from Lesson 5.3, find all \(x\) at which \(f\) has a relative minimum.`, r`\(x=-3\) and \(x=4\), where \(f'\) changes from negative to positive.`, "exam"),
    pq(r`Classify the critical point of \(f(x)=x+\dfrac4x\) on \(x\gt0\).`, r`\(f'(x)=\dfrac{x^2-4}{x^2}\) changes from negative to positive at \(x=2\): a relative minimum, with value 4.`, "exam"),
    pq(r`Classify the critical point of \(f(x)=|x-3|\).`, r`\(f'(x)=-1\) for \(x\lt3\) and \(1\) for \(x\gt3\). \(f\) is continuous at 3 and \(f'\) changes from negative to positive: a relative minimum, even though \(f'(3)\) does not exist.`, "stretch"),

    sec("Summary"),
    key([
      [r`\(+\) to \(-\)`, r`Relative maximum.`],
      [r`\(-\) to \(+\)`, r`Relative minimum.`],
      ["No change", r`Neither.`],
      ["Sentence", r`"…because \(f'\) changes from … to … at \(x=c\)."`],
    ]),
  ],
});
