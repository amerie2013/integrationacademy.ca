// AP Calculus AB exam prep — Unit 5 (Analysing Functions), lessons 5.5–5.8.
// Original wording, examples, numbers and figures throughout (see u1a for notes).
import { r, lesson, lede, goals, sec, p, disp, def, thm, exam, mistake, justify, ex, pq, key, table } from "./apcalc/kit.mjs";
import { plot, figure, C } from "./apcalc/fig.mjs";
import { cubicFigure, fprimeFigure } from "./apcalc-lessons-u5a.mjs";

export const u5b = {};

// ───────────────────────── 5.5 ─────────────────────────
u5b["5.5"] = lesson({
  code: "5.5", unit: 5, official: "5.5", calc: "Both",
  title: "Absolute Extrema on a Closed Interval",
  parts: () => [
    lede(r`The first derivative test finds local peaks and valleys. Often the question is bigger: over the whole interval, what is the greatest value, and what is the least? On a closed interval the answer is found by a short, mechanical comparison called the candidates test. It needs no sign chart and no classification, and it is the method the exam expects whenever it says "absolute".`),
    goals([
      r`Find the absolute maximum and minimum of a continuous function on a closed interval.`,
      r`Present the candidates test so that it justifies the answer.`,
      r`Justify an absolute extremum on an open or unbounded interval.`,
      r`Report the extreme value or its location, as asked.`,
    ]),

    sec("The candidates test"),
    p(r`By the Extreme Value Theorem a continuous function on \([a,b]\) has an absolute maximum and minimum. By Lesson 5.2 they can only be at critical points or endpoints. So:`),
    `<ol><li>Find the critical points of \(f\) in \((a,b)\).</li><li>Evaluate \(f\) at each critical point and at <strong>both endpoints</strong>.</li><li>The largest of these values is the absolute maximum; the smallest is the absolute minimum.</li></ol>`,
    figure(cubicFigure({ interval: true }), r`\(f(x)=x^3-3x^2-9x+5\) on \([-2,4]\). The candidates are the endpoints (grey) and the two critical points.`),
    table(
      [r`\(x\)`, r`\(-2\) (endpoint)`, r`\(-1\) (critical)`, r`\(3\) (critical)`, r`\(4\) (endpoint)`],
      [[r`\(f(x)\)`, "3", "10", "−22", "−15"]],
    ),
    p(r`The absolute maximum is 10, at \(x=-1\). The absolute minimum is \(-22\), at \(x=3\). The table of candidates <strong>is</strong> the justification.`),

    sec("When the interval is not closed"),
    p(r`Without a closed interval there are no endpoints to compare and the Extreme Value Theorem does not apply. A different argument is needed, and one situation covers nearly every exam case:`),
    thm("One critical point", r`<p>Suppose \(f\) is continuous on an interval and has exactly <strong>one</strong> critical point \(c\) there. If \(f\) has a relative maximum at \(c\), it is the absolute maximum on the interval; if a relative minimum, the absolute minimum.</p>`),
    p(r`Equivalently: if \(f'\gt0\) for all \(x\lt c\) in the interval and \(f'\lt0\) for all \(x\gt c\), then \(f\) rises all the way up to \(c\) and falls all the way after it, so \(f(c)\) is the greatest value.`),

    sec("Worked examples"),
    ex("core", "The standard computation", r`Find the absolute maximum and minimum values of \(f(x)=x^3-3x^2-9x+5\) on \([-2,4]\).`, [
      r`\(f'(x)=3(x+1)(x-3)\): critical points \(x=-1\) and \(x=3\), both in \((-2,4)\).`,
      r`\(f(-2)=3\), \(f(-1)=10\), \(f(3)=-22\), \(f(4)=-15\).`,
    ], r`Absolute maximum value 10 (at \(x=-1\)); absolute minimum value \(-22\) (at \(x=3\)).`),
    ex("exam", "A trigonometric function", r`Find the absolute maximum and minimum values of \(f(x)=x-2\sin x\) on \([0,2\pi]\).`, [
      r`\(f'(x)=1-2\cos x=0\) when \(\cos x=\tfrac12\): \(x=\dfrac\pi3\) and \(x=\dfrac{5\pi}{3}\).`,
      r`\(f(0)=0\). \(f\!\left(\dfrac\pi3\right)=\dfrac\pi3-\sqrt3\approx-0.685\).`,
      r`\(f\!\left(\dfrac{5\pi}{3}\right)=\dfrac{5\pi}{3}+\sqrt3\approx6.968\). \(f(2\pi)=2\pi\approx6.283\).`,
    ], r`Absolute maximum \(\dfrac{5\pi}{3}+\sqrt3\) at \(x=\dfrac{5\pi}{3}\); absolute minimum \(\dfrac\pi3-\sqrt3\) at \(x=\dfrac\pi3\).`),
    ex("exam", "An extremum at an endpoint", r`Find the absolute maximum and minimum values of \(f(x)=xe^{-x}\) on \([0,3]\).`, [
      r`\(f'(x)=e^{-x}(1-x)=0\) at \(x=1\).`,
      r`\(f(0)=0\), \(f(1)=\dfrac1e\approx0.368\), \(f(3)=\dfrac{3}{e^3}\approx0.149\).`,
    ], r`Absolute maximum \(\dfrac1e\) at \(x=1\); absolute minimum 0 at the endpoint \(x=0\).`),
    ex("stretch", "No endpoints", r`Show that \(f(x)=x+\dfrac4x\) has an absolute minimum on \((0,\infty)\), and find it.`, [
      r`\(f'(x)=1-\dfrac4{x^2}=\dfrac{x^2-4}{x^2}\), which is zero on \((0,\infty)\) only at \(x=2\).`,
      r`\(f'(x)\lt0\) for \(0\lt x\lt2\) and \(f'(x)\gt0\) for \(x\gt2\).`,
      r`So \(f\) is decreasing on all of \((0,2)\) and increasing on all of \((2,\infty)\).`,
    ], r`The absolute minimum is \(f(2)=4\), because \(f\) decreases for all \(0\lt x\lt2\) and increases for all \(x\gt2\).`),

    sec("Common errors"),
    mistake("forgetting the endpoints", r`<p>In the third example the minimum is at \(x=0\), an endpoint. Checking only critical points would miss it entirely.</p>`),
    mistake("including critical points outside the interval", r`<p>If \(f'(x)=0\) at \(x=5\) and the interval is \([-2,4]\), that point is not a candidate.</p>`),
    mistake("justifying an absolute extremum with the first derivative test", r`<p>"\(f'\) changes from positive to negative at \(x=-1\)" shows a <em>relative</em> maximum. For an absolute maximum on a closed interval, the comparison of candidate values is required.</p>`),
    mistake("answering where instead of what", r`<p>"The absolute maximum <em>value</em>" is 10. "The absolute maximum <em>occurs at</em>" \(x=-1\).</p>`),

    sec("Write it so it scores"),
    justify(
      r`Find the absolute minimum value of \(f(x)=x^3-3x^2-9x+5\) on the closed interval \([-2,4]\). Justify your answer.`,
      r`\(f'(x)=3(x+1)(x-3)=0\) at \(x=-1\) and \(x=3\). The candidates are \(f(-2)=3\), \(f(-1)=10\), \(f(3)=-22\) and \(f(4)=-15\). The absolute minimum value of \(f\) on \([-2,4]\) is \(-22\).`,
      r`Every candidate is listed with its value, endpoints included, and the answer is the smallest. Typical scoring: one point for identifying the critical points as candidates, one for the endpoints and the comparison, one for the answer.`,
    ),
    exam(r`<p>In the calculator section the critical points and the candidate values are often decimals found numerically. The structure of the answer is unchanged: list each candidate \(x\) and its value to three decimal places, then state the conclusion.</p>`),

    sec("Practice"),
    pq(r`Find the absolute maximum and minimum values of \(f(x)=x^2-4x+1\) on \([0,5]\).`, r`\(f'(x)=2x-4=0\) at \(x=2\). \(f(0)=1\), \(f(2)=-3\), \(f(5)=6\). Maximum 6, minimum \(-3\).`, "core"),
    pq(r`Find the absolute maximum and minimum values of \(f(x)=x^3-12x\) on \([0,4]\).`, r`\(f'(x)=3x^2-12=0\) at \(x=2\) (in the interval). \(f(0)=0\), \(f(2)=-16\), \(f(4)=16\). Maximum 16, minimum \(-16\).`, "core"),
    pq(r`Find the absolute maximum value of \(f(x)=x\sqrt{4-x}\) on \([0,4]\).`, r`\(f'(x)=\sqrt{4-x}-\dfrac{x}{2\sqrt{4-x}}=\dfrac{8-3x}{2\sqrt{4-x}}=0\) at \(x=\dfrac83\). \(f(0)=0\), \(f(4)=0\), \(f\!\left(\tfrac83\right)=\dfrac83\cdot\dfrac{2}{\sqrt3}=\dfrac{16}{3\sqrt3}\). Maximum \(\dfrac{16}{3\sqrt3}\approx3.079\).`, "exam"),
    pq(r`Find the absolute maximum and minimum values of \(f(x)=\sin x+\cos x\) on \([0,\pi]\).`, r`\(f'(x)=\cos x-\sin x=0\) at \(x=\dfrac\pi4\). \(f(0)=1\), \(f\!\left(\tfrac\pi4\right)=\sqrt2\), \(f(\pi)=-1\). Maximum \(\sqrt2\), minimum \(-1\).`, "exam"),
    pq(r`Find the absolute minimum value of \(f(x)=x\ln x\) on \((0,\infty)\), with justification.`, r`\(f'(x)=\ln x+1=0\) only at \(x=\dfrac1e\). \(f'\lt0\) for \(0\lt x\lt\tfrac1e\) and \(f'\gt0\) for \(x\gt\tfrac1e\), so \(f\) decreases then increases and the absolute minimum is \(f\!\left(\tfrac1e\right)=-\dfrac1e\).`, "stretch"),
    pq(r`A function \(f\) is continuous on \([1,7]\) with a single critical point at \(x=4\), and \(f(1)=6\), \(f(4)=2\), \(f(7)=9\). State the absolute maximum and minimum values.`, r`Compare the candidates: maximum 9 (at \(x=7\)), minimum 2 (at \(x=4\)).`, "stretch"),

    sec("Summary"),
    key([
      ["Candidates", r`Critical points in the interval, plus both endpoints.`],
      ["Compare", r`Largest value is the absolute maximum; smallest the minimum.`],
      ["Justification", r`The list of candidate values.`],
      ["Open interval", r`One critical point, with \(f'\) keeping one sign on each side.`],
    ]),
  ],
});

// ───────────────────────── 5.6 ─────────────────────────
u5b["5.6"] = lesson({
  code: "5.6", unit: 5, official: "5.6", calc: "No calculator",
  title: "Concavity and Points of Inflection",
  parts: () => {
    const up = plot({ w: 230, h: 200, x: [-2, 2], y: [-1, 4], ticks: false, alt: "A concave up curve with tangent lines below it" });
    up.curve((x) => 2 * x - 1, 0.2, 1.8, { color: C.alt, width: 1.5 }).curve((x) => -2 * x - 1, -1.8, -0.2, { color: C.alt, width: 1.5 }).curve((x) => x * x, -1.9, 1.9);
    const dn = plot({ w: 230, h: 200, x: [-2, 2], y: [-1, 4], ticks: false, alt: "A concave down curve with tangent lines above it" });
    dn.curve((x) => 3 - (2 * x - 1), 0.2, 1.8, { color: C.alt, width: 1.5 }).curve((x) => 3 - (-2 * x - 1), -1.8, -0.2, { color: C.alt, width: 1.5 }).curve((x) => 3 - x * x, -1.9, 1.9);
    return [
      lede(r`Two roads can both be going uphill and feel completely different: one getting steeper, the other levelling off. The first derivative cannot tell them apart, since both are positive. The <strong>second</strong> derivative can. It measures whether the slope itself is increasing or decreasing, and that is what gives a graph its bend.`),
      goals([
        r`Determine the intervals on which a graph is concave up or concave down.`,
        r`Locate points of inflection.`,
        r`Read concavity from a graph of \(f'\) as well as from \(f''\).`,
        r`Justify concavity and inflection in the accepted forms.`,
      ]),

      sec("Concavity"),
      `<div class="apx-figrow">${figure(up, r`<strong>Concave up.</strong> Slopes are increasing; tangent lines lie below the curve.`)}${figure(dn, r`<strong>Concave down.</strong> Slopes are decreasing; tangent lines lie above the curve.`)}</div>`,
      def("Concavity", r`<p>The graph of \(f\) is <strong>concave up</strong> on an interval if \(f'\) is increasing there, and <strong>concave down</strong> if \(f'\) is decreasing there.</p>`),
      thm("Test for concavity", r`<p>If \(f''(x)\gt0\) on an interval, the graph of \(f\) is concave up there. If \(f''(x)\lt0\), it is concave down.</p>`),
      p(r`This is Lesson 5.3 applied one level up: \(f''\) is the derivative of \(f'\), so \(f''\gt0\) means \(f'\) is increasing.`),

      sec("Points of inflection"),
      def("Point of inflection", r`<p>A point on the graph of \(f\) where the concavity <strong>changes</strong> (and where the graph has a tangent line).</p>`),
      p(r`Candidates are where \(f''(x)=0\) or \(f''\) is undefined. As with critical points, a candidate is not automatically an inflection point: the sign of \(f''\) must actually change. \(f(x)=x^4\) has \(f''(0)=0\) but is concave up on both sides.`),
      p(r`There are two equivalent ways to state the evidence, and you should use whichever matches the information you were given.`),
      key([
        [r`In terms of \(f''\)`, r`\(f''\) changes sign at \(x=c\).`],
        [r`In terms of \(f'\)`, r`\(f'\) changes from increasing to decreasing (or the reverse) at \(x=c\). On a graph of \(f'\), that is a <strong>relative extremum of \(f'\)</strong>.`],
      ]),

      sec("Worked examples"),
      ex("core", "Concavity of a cubic", r`Find the intervals of concavity and the point of inflection of \(f(x)=x^3-3x^2-9x+5\).`, [
        r`\(f'(x)=3x^2-6x-9\) and \(f''(x)=6x-6=6(x-1)\).`,
        r`\(f''(x)\lt0\) for \(x\lt1\); \(f''(x)\gt0\) for \(x\gt1\).`,
        r`\(f(1)=1-3-9+5=-6\).`,
      ], r`Concave down on \((-\infty,1)\), concave up on \((1,\infty)\); point of inflection \((1,-6)\).`),
      ex("exam", "Two inflection points", r`Find the points of inflection of \(f(x)=x^4-4x^3\).`, [
        r`\(f'(x)=4x^3-12x^2\), \(f''(x)=12x^2-24x=12x(x-2)\).`,
        r`Sign of \(f''\): positive for \(x\lt0\), negative for \(0\lt x\lt2\), positive for \(x\gt2\).`,
        r`\(f(0)=0\) and \(f(2)=16-32=-16\).`,
      ], r`Points of inflection at \((0,0)\) and \((2,-16)\); \(f''\) changes sign at each.`),
      ex("exam", "From the graph of f′", r`The graph of \(f'\) from Lesson 5.3 is shown again below. On which intervals is the graph of \(f\) concave up, and at which \(x\) does \(f\) have a point of inflection?${figure(fprimeFigure(), r`The graph of \(f'\).`)}`, [
        r`Concave up where \(f'\) is <strong>increasing</strong>: \((-4,-2)\), \((0,1)\) and \((3,6)\).`,
        r`Concave down where \(f'\) is decreasing: \((-2,0)\) and \((1,3)\).`,
        r`Inflection where \(f'\) switches between increasing and decreasing: \(x=-2,\ 0,\ 1,\ 3\).`,
      ], r`Concave up on \((-4,-2)\), \((0,1)\), \((3,6)\). Points of inflection at \(x=-2\), \(0\), \(1\) and \(3\), because \(f'\) changes between increasing and decreasing at each.`),
      ex("stretch", "A candidate that fails", r`Let \(f(x)=x^4\). Show that \(f''(0)=0\) but that the graph has no point of inflection at \(x=0\).`, [
        r`\(f''(x)=12x^2\), so \(f''(0)=0\).`,
        r`\(12x^2\gt0\) for every \(x\neq0\): positive on both sides of 0.`,
      ], r`\(f''\) does not change sign at 0, so the concavity does not change. There is no point of inflection.`),

      sec("Common errors"),
      mistake("\"inflection point because f″(c) = 0\"", r`<p>This is the most common lost point in the unit. \(f''(c)=0\) nominates a candidate; only a <em>sign change</em> of \(f''\) confirms it.</p>`),
      mistake("reading the graph of f′ as if it were f″", r`<p>On a graph of \(f'\), concavity of \(f\) comes from whether \(f'\) is rising or falling, not from whether it is above or below the axis.</p>`),
      mistake("confusing increasing with concave up", r`<p>A graph can be increasing and concave down (levelling off), or decreasing and concave up. The first derivative gives direction; the second gives bend.</p>`),
      mistake("stating only an x-value when a point is asked", r`<p>"Find the point of inflection" wants both coordinates: \((1,-6)\).</p>`),

      sec("Write it so it scores"),
      justify(
        r`Let \(f(x)=x^3-3x^2-9x+5\). Find the \(x\)-coordinate of the point of inflection of the graph of \(f\). Justify your answer.`,
        r`\(f''(x)=6x-6\). The graph of \(f\) has a point of inflection at \(x=1\) because \(f''\) changes sign (from negative to positive) at \(x=1\).`,
        r`The second derivative is shown and the reason is a sign <em>change</em> of \(f''\), stated by name. If the given information had been a graph of \(f'\), the reason would be "\(f'\) changes from decreasing to increasing at \(x=1\)".`,
      ),
      exam(r`<p>Match your reason to what you were given. With a formula, argue from the sign of \(f''\). With a graph of \(f'\), argue from where \(f'\) is increasing or decreasing. Readers accept either, but the evidence must come from the information on the page.</p>`),

      sec("Practice"),
      pq(r`On which interval is the graph of \(f(x)=x^3-6x^2\) concave down?`, r`\(f''(x)=6x-12\lt0\) for \(x\lt2\): concave down on \((-\infty,2)\).`, "core"),
      pq(r`Find the point of inflection of \(f(x)=xe^{-x}\).`, r`\(f'(x)=e^{-x}(1-x)\), \(f''(x)=e^{-x}(x-2)\), which changes sign at \(x=2\). The point is \(\left(2,\dfrac{2}{e^2}\right)\).`, "exam"),
      pq(r`Find the \(x\)-coordinates of the points of inflection of \(f(x)=x^4-6x^2\).`, r`\(f''(x)=12x^2-12=12(x-1)(x+1)\), which changes sign at \(x=\pm1\).`, "exam"),
      pq(r`For \(f(x)=\ln(x^2+1)\), find where the graph is concave up.`, r`\(f''(x)=\dfrac{2-2x^2}{(x^2+1)^2}\gt0\) when \(x^2\lt1\): concave up on \((-1,1)\).`, "exam"),
      pq(r`A function has \(f''(x)=(x-2)^2(x+1)\). At which \(x\) does the graph of \(f\) have a point of inflection?`, r`Only at \(x=-1\). At \(x=2\) the factor \((x-2)^2\) does not change sign.`, "stretch"),
      pq(r`The graph of \(f'\) is a parabola opening upward with vertex at \(x=3\). Describe the concavity of \(f\).`, r`\(f'\) is decreasing for \(x\lt3\) and increasing for \(x\gt3\). So \(f\) is concave down for \(x\lt3\), concave up for \(x\gt3\), with a point of inflection at \(x=3\).`, "stretch"),

      sec("Summary"),
      key([
        ["Concave up", r`\(f''\gt0\); equivalently \(f'\) increasing.`],
        ["Concave down", r`\(f''\lt0\); equivalently \(f'\) decreasing.`],
        ["Inflection", r`Concavity changes: \(f''\) changes sign.`],
        ["On a graph of f′", r`Inflection points of \(f\) are at the extrema of \(f'\).`],
      ]),
    ];
  },
});

// ───────────────────────── 5.7 ─────────────────────────
u5b["5.7"] = lesson({
  code: "5.7", unit: 5, official: "5.7", calc: "No calculator",
  title: "The Second Derivative Test",
  parts: () => [
    lede(r`At a critical point with a horizontal tangent, the bend of the graph tells you what kind of point it is. A curve that is concave up at a flat spot is sitting in a valley; one that is concave down is on a hilltop. The second derivative test turns this into a one-line check. It is quicker than the first derivative test when it works, and it is the natural tool when the information comes as a table of values.`),
    goals([
      r`Use the second derivative test to classify a critical point.`,
      r`Recognise when the test is inconclusive and what to do next.`,
      r`Choose between the first and second derivative tests.`,
      r`Use concavity on a whole interval to justify an absolute extremum.`,
    ]),

    sec("The test"),
    thm("Second derivative test", r`<p>Suppose \(f'(c)=0\) and \(f''\) is continuous near \(c\).</p>
      <ul>
        <li>If \(f''(c)\gt0\), then \(f\) has a <strong>relative minimum</strong> at \(c\).</li>
        <li>If \(f''(c)\lt0\), then \(f\) has a <strong>relative maximum</strong> at \(c\).</li>
        <li>If \(f''(c)=0\), the test is <strong>inconclusive</strong>.</li>
      </ul>`),
    p(r`A quick way to keep the signs straight: positive second derivative, concave up, a cup, which holds a <em>minimum</em>.`),
    p(r`The test requires \(f'(c)=0\). It cannot be used at a critical point where \(f'\) is undefined, and it says nothing at a point that is not critical.`),

    sec("Which test?"),
    table(
      ["Situation", "Use"],
      [
        [r`Given \(f'(c)=0\) and a value of \(f''(c)\) (a table, or an easy \(f''\))`, "second derivative test"],
        [r`\(f''\) is laborious to compute`, "first derivative test"],
        [r`\(f''(c)=0\), or \(f'(c)\) undefined`, "first derivative test"],
        [r`Given a graph of \(f'\)`, "first derivative test"],
      ],
    ),

    sec("From relative to absolute"),
    thm("Concavity and a single critical point", r`<p>If \(f'(c)=0\) and \(f''(x)\gt0\) for <strong>all</strong> \(x\) in an interval containing \(c\), then \(f(c)\) is the absolute minimum of \(f\) on that interval. With \(f''(x)\lt0\) throughout, it is the absolute maximum.</p>`),
    p(r`A graph that is concave up everywhere can turn around only once, so its one flat point is its lowest.`),

    sec("Worked examples"),
    ex("core", "Classifying with f″", r`Use the second derivative test to classify the critical points of \(f(x)=x^3-3x^2-9x+5\).`, [
      r`Critical points \(x=-1\) and \(x=3\), with \(f'=0\) at each. \(f''(x)=6x-6\).`,
      r`\(f''(-1)=-12\lt0\).`,
      r`\(f''(3)=12\gt0\).`,
    ], r`Relative maximum at \(x=-1\); relative minimum at \(x=3\).`),
    ex("exam", "From a table of values", r`A twice-differentiable function \(g\) has the values shown. At which of these \(x\) must \(g\) have a relative extremum, and of what kind?${table(["\\(x\\)", "1", "2", "5"], [["\\(g'(x)\\)", "0", "3", "0"], ["\\(g''(x)\\)", "4", "0", "−2"]])}`, [
      r`\(x=1\): \(g'(1)=0\) and \(g''(1)=4\gt0\): relative minimum.`,
      r`\(x=2\): \(g'(2)=3\neq0\), so 2 is not a critical point. No extremum, whatever \(g''(2)\) is.`,
      r`\(x=5\): \(g'(5)=0\) and \(g''(5)=-2\lt0\): relative maximum.`,
    ], r`Relative minimum at \(x=1\); relative maximum at \(x=5\); nothing at \(x=2\).`),
    ex("exam", "When the test says nothing", r`Classify the critical point of \(f(x)=x^4\) at \(x=0\).`, [
      r`\(f'(0)=0\) and \(f''(x)=12x^2\), so \(f''(0)=0\): inconclusive.`,
      r`First derivative test: \(f'(x)=4x^3\) changes from negative to positive at 0.`,
    ], r`Relative (and absolute) minimum at \(x=0\). An inconclusive test is not a conclusion; switch tests.`),
    ex("stretch", "An absolute minimum by concavity", r`Show that \(f(x)=x\ln x\) has an absolute minimum on \((0,\infty)\), and find where.`, [
      r`\(f'(x)=\ln x+1=0\) at \(x=\dfrac1e\), the only critical point.`,
      r`\(f''(x)=\dfrac1x\gt0\) for all \(x\gt0\).`,
    ], r`\(f'\!\left(\tfrac1e\right)=0\) and \(f''(x)\gt0\) on all of \((0,\infty)\), so \(f\) has its absolute minimum at \(x=\dfrac1e\).`),

    sec("Common errors"),
    mistake("reversing the signs", r`<p>\(f''(c)\gt0\) gives a <em>minimum</em>, not a maximum. Positive, concave up, cup, minimum.</p>`),
    mistake("applying the test where f′(c) ≠ 0", r`<p>In the table example, \(g''(2)=0\) and \(g'(2)=3\). There is nothing to classify at \(x=2\), because it is not a critical point.</p>`),
    mistake("treating \"inconclusive\" as \"neither\"", r`<p>\(f''(c)=0\) leaves all three outcomes open: \(x^4\) has a minimum at 0, \(-x^4\) a maximum, \(x^3\) neither.</p>`),
    mistake("omitting f′(c) = 0 from the justification", r`<p>The reason has two parts. "\(f''(3)\gt0\)" alone is incomplete; it must be "\(f'(3)=0\) and \(f''(3)\gt0\)".</p>`),

    sec("Write it so it scores"),
    justify(
      r`A twice-differentiable function \(h\) satisfies \(h'(2)=0\) and \(h''(2)=-3\). Does \(h\) have a relative maximum, a relative minimum, or neither at \(x=2\)? Justify.`,
      r`\(h\) has a relative maximum at \(x=2\) because \(h'(2)=0\) and \(h''(2)=-3\lt0\).`,
      r`Both conditions are stated with their values. This is the complete justification for the second derivative test, and it is one of the shortest full-credit sentences on the exam.`,
    ),
    exam(r`<p>This test appears most often with differential equations: you are given \(\dfrac{dy}{dx}\) and asked whether a particular solution has a relative extremum at a point. Show \(\dfrac{dy}{dx}=0\) there, evaluate \(\dfrac{d^2y}{dx^2}\) there, and state both.</p>`),

    sec("Practice"),
    pq(r`Use the second derivative test to classify the critical points of \(f(x)=x^3-12x\).`, r`\(f'(x)=3x^2-12=0\) at \(x=\pm2\); \(f''(x)=6x\). \(f''(2)=12\gt0\): relative minimum. \(f''(-2)=-12\lt0\): relative maximum.`, "core"),
    pq(r`A function has \(f'(4)=0\) and \(f''(4)=7\). What can be concluded?`, r`\(f\) has a relative minimum at \(x=4\).`, "core"),
    pq(r`Classify the critical point of \(f(x)=xe^{-x}\) using the second derivative.`, r`\(f'(1)=0\) and \(f''(x)=e^{-x}(x-2)\), so \(f''(1)=-\dfrac1e\lt0\): relative maximum.`, "exam"),
    pq(r`A function has \(f'(3)=0\) and \(f''(3)=0\). Which of relative maximum, relative minimum, neither are possible at \(x=3\)?`, r`All three. The test is inconclusive; the first derivative test is needed.`, "exam"),
    pq(r`Classify the critical points of \(f(x)=x^4-4x^3\).`, r`\(f'(x)=4x^2(x-3)\): critical points 0 and 3. \(f''(x)=12x(x-2)\): \(f''(3)=36\gt0\), a relative minimum. \(f''(0)=0\) is inconclusive; \(f'\) is negative on both sides of 0, so neither.`, "exam"),
    pq(r`A solution \(y=f(x)\) of \(\dfrac{dy}{dx}=x-2y\) passes through \((2,1)\). Does \(f\) have a relative extremum there?`, r`At \((2,1)\), \(\dfrac{dy}{dx}=0\). \(\dfrac{d^2y}{dx^2}=1-2\dfrac{dy}{dx}=1\gt0\). So \(f\) has a relative minimum at \(x=2\).`, "stretch"),

    sec("Summary"),
    key([
      [r`\(f'(c)=0,\ f''(c)\gt0\)`, r`Relative minimum.`],
      [r`\(f'(c)=0,\ f''(c)\lt0\)`, r`Relative maximum.`],
      [r`\(f''(c)=0\)`, r`Inconclusive: use the first derivative test.`],
      ["Concave one way throughout", r`The single flat point is the absolute extremum.`],
    ]),
  ],
});

// ───────────────────────── 5.8 ─────────────────────────
u5b["5.8"] = lesson({
  code: "5.8", unit: 5, official: "5.8", calc: "No calculator",
  title: "Sketching a Function from Its Derivatives",
  parts: () => {
    const fn = (x) => x / (x * x + 1);
    const g = plot({ w: 430, h: 270, x: [-5, 5], y: [-1, 1], stepY: 0.25, tickEvery: 2, alt: "Graph of x over x squared plus 1" });
    g.curve(fn, -5, 5, { n: 600 }).dot(1, 0.5).dot(-1, -0.5).dot(0, 0, { color: C.alt }).dot(Math.sqrt(3), fn(Math.sqrt(3)), { color: C.alt }).dot(-Math.sqrt(3), fn(-Math.sqrt(3)), { color: C.alt });
    return [
      lede(r`The first derivative says where a graph rises and falls. The second says how it bends. Put the two together, add what Unit 1 says about asymptotes, and the shape of a graph is determined without plotting a single unnecessary point. The exam rarely asks for a full sketch, but it constantly asks you to <em>reason</em> as if you had one: which graph matches these conditions, what must be true of a function with these derivatives.`),
      goals([
        r`Combine the signs of \(f'\) and \(f''\) into the four basic shapes.`,
        r`Organise a full analysis of a function in a single chart.`,
        r`Sketch a graph consistent with given information about \(f\), \(f'\) and \(f''\).`,
        r`Identify which graph, or which statement, is consistent with given conditions.`,
      ]),

      sec("Four shapes"),
      table(
        ["", r`\(f''\gt0\) (concave up)`, r`\(f''\lt0\) (concave down)`],
        [
          [r`\(f'\gt0\) (increasing)`, "rising and getting steeper", "rising and levelling off"],
          [r`\(f'\lt0\) (decreasing)`, "falling and levelling off", "falling and getting steeper"],
        ],
      ),
      p(r`Every piece of a smooth graph is one of these four. Sketching is a matter of finding which shape applies on each interval and joining the pieces at the critical and inflection points.`),

      sec("The combined chart"),
      p(r`For \(f(x)=x^3-3x^2-9x+5\), with \(f'(x)=3(x+1)(x-3)\) and \(f''(x)=6(x-1)\), mark every special \(x\)-value (\(-1\), \(1\), \(3\)) and record both signs on each interval.`),
      table(
        ["Interval", r`\(x\lt-1\)`, r`\(-1\lt x\lt1\)`, r`\(1\lt x\lt3\)`, r`\(x\gt3\)`],
        [
          [r`\(f'\)`, "+", "−", "−", "+"],
          [r`\(f''\)`, "−", "−", "+", "+"],
          ["Shape", "rising, levelling", "falling, steepening", "falling, levelling", "rising, steepening"],
        ],
      ),
      p(r`Add the key points \((-1,10)\), \((1,-6)\), \((3,-22)\) and the \(y\)-intercept \((0,5)\), and the graph of Lesson 5.4 is forced.`),

      sec("A complete analysis"),
      p(r`A function with asymptotes needs Unit 1 as well. Take \(f(x)=\dfrac{x}{x^2+1}\).`),
      `<ul><li><strong>Domain and symmetry.</strong> Defined everywhere; \(f(-x)=-f(x)\), so the graph is symmetric about the origin.</li><li><strong>Asymptotes.</strong> No vertical asymptote. \(\displaystyle\lim_{x\to\pm\infty}f(x)=0\): horizontal asymptote \(y=0\).</li><li><strong>First derivative.</strong> \(f'(x)=\dfrac{1-x^2}{(x^2+1)^2}\): positive on \((-1,1)\), negative elsewhere. Relative minimum \(\left(-1,-\tfrac12\right)\), relative maximum \(\left(1,\tfrac12\right)\).</li><li><strong>Second derivative.</strong> \(f''(x)=\dfrac{2x(x^2-3)}{(x^2+1)^3}\): changes sign at \(x=0\) and \(x=\pm\sqrt3\). Three points of inflection.</li></ul>`,
      figure(g, r`\(f(x)=\dfrac{x}{x^2+1}\): extrema at \(x=\pm1\) (blue), points of inflection at \(x=0,\pm\sqrt3\) (red), and the \(x\)-axis as a horizontal asymptote.`),

      sec("Worked examples"),
      ex("core", "Naming the shape", r`At a certain point, \(f'(x)\lt0\) and \(f''(x)\gt0\). Describe the graph of \(f\) near that point.`, [
        r`\(f'\lt0\): the graph is falling.`,
        r`\(f''\gt0\): concave up, so the (negative) slopes are increasing toward zero.`,
      ], r`The graph is decreasing and concave up: falling, and levelling off.`),
      ex("exam", "Conditions that determine a graph", r`A continuous function \(f\) satisfies: \(f(0)=2\); \(f'(x)\gt0\) for \(x\lt0\) and \(f'(x)\lt0\) for \(x\gt0\); \(f''(x)\lt0\) for \(-1\lt x\lt1\) and \(f''(x)\gt0\) for \(|x|\gt1\); \(\displaystyle\lim_{x\to\pm\infty}f(x)=0\). Describe the graph.`, [
        r`Rises to \(x=0\) then falls: a relative (indeed absolute) maximum of 2 at \(x=0\).`,
        r`Concave down between \(-1\) and \(1\), concave up outside: points of inflection at \(x=\pm1\).`,
        r`Approaches the \(x\)-axis at both ends.`,
      ], r`A single bell-shaped hump with its peak at \((0,2)\), inflection points at \(x=\pm1\), flattening onto the \(x\)-axis in both directions.`),
      ex("exam", "Verifying the derivatives of the rational example", r`For \(f(x)=\dfrac{x}{x^2+1}\), verify that \(f'(x)=\dfrac{1-x^2}{(x^2+1)^2}\) and find the relative extrema.`, [
        r`Quotient rule: \(f'(x)=\dfrac{(1)(x^2+1)-x(2x)}{(x^2+1)^2}=\dfrac{1-x^2}{(x^2+1)^2}\).`,
        r`\(f'(x)=0\) at \(x=\pm1\). The denominator is positive, so \(f'\) has the sign of \(1-x^2\).`,
        r`\(f'\) changes from negative to positive at \(-1\), and from positive to negative at \(1\).`,
      ], r`Relative minimum \(f(-1)=-\dfrac12\); relative maximum \(f(1)=\dfrac12\).`),
      ex("stretch", "What cannot happen", r`Can a twice-differentiable function have \(f(x)\gt0\), \(f'(x)\lt0\) and \(f''(x)\lt0\) for all real \(x\)?`, [
        r`\(f'\lt0\) and \(f''\lt0\): the graph is falling and getting steeper for ever.`,
        r`Take any point \(a\). Since \(f\) is concave down, its graph lies below the tangent line at \(a\), which has negative slope and eventually goes below zero.`,
      ], r`No. The graph would be forced below the \(x\)-axis, contradicting \(f(x)\gt0\).`),

      sec("Common errors"),
      mistake("joining pieces with a corner", r`<p>If \(f\) is differentiable, its graph has no corners. At an inflection point the curve changes its bend smoothly.</p>`),
      mistake("placing an inflection at every zero of f″", r`<p>Check for a sign change, as in Lesson 5.6.</p>`),
      mistake("forgetting end behaviour", r`<p>A sketch that has the right extrema but runs off to infinity where the function has a horizontal asymptote is wrong at the ends.</p>`),

      sec("Write it so it scores"),
      justify(
        r`For \(f(x)=x^3-3x^2-9x+5\), on what interval is \(f\) both decreasing and concave up? Justify.`,
        r`\(f'(x)=3(x+1)(x-3)\lt0\) for \(-1\lt x\lt3\), and \(f''(x)=6(x-1)\gt0\) for \(x\gt1\). Both hold for \(1\lt x\lt3\), so \(f\) is decreasing and concave up on \((1,3)\).`,
        r`Each property is justified by the sign of the correct derivative, and the answer is the overlap of the two intervals.`,
      ),
      exam(r`<p>"Decreasing and concave up", "increasing at a decreasing rate" and similar phrases are routine in both sections. Translate each immediately into a pair of signs: <em>increasing at a decreasing rate</em> means \(f'\gt0\) and \(f''\lt0\).</p>`),

      sec("Practice"),
      pq(r`Translate into signs of \(f'\) and \(f''\): "the population is growing, but more and more slowly".`, r`\(f'\gt0\) and \(f''\lt0\).`, "core"),
      pq(r`For \(f(x)=x^3-3x^2-9x+5\), on what interval is \(f\) increasing and concave down?`, r`\(f'\gt0\) for \(x\lt-1\) or \(x\gt3\); \(f''\lt0\) for \(x\lt1\). Both hold for \(x\lt-1\).`, "core"),
      pq(r`For \(f(x)=x^4-4x^3\), on what intervals is \(f\) decreasing and concave up?`, r`\(f'(x)=4x^2(x-3)\lt0\) for \(x\lt3\), \(x\neq0\). \(f''(x)=12x(x-2)\gt0\) for \(x\lt0\) or \(x\gt2\). Both: \((-\infty,0)\) and \((2,3)\).`, "exam"),
      pq(r`A function has \(f'(x)\gt0\) for all \(x\), \(f''(x)\gt0\) for \(x\lt2\) and \(f''(x)\lt0\) for \(x\gt2\). Describe its graph.`, r`Always increasing; getting steeper up to \(x=2\), then levelling off: an S-shaped curve with a point of inflection at \(x=2\), where it is steepest.`, "exam"),
      pq(r`For \(f(x)=\dfrac{x}{x^2+1}\), on which intervals is the graph concave up?`, r`\(f''\) has the sign of \(x(x^2-3)\): positive on \((-\sqrt3,0)\) and on \((\sqrt3,\infty)\).`, "exam"),
      pq(r`A differentiable function has a relative maximum at \(x=1\) and a relative minimum at \(x=5\), and \(f''\) is continuous. Explain why its graph must have a point of inflection between 1 and 5.`, r`Near the maximum the graph is concave down; near the minimum it is concave up. More precisely, \(f'(1)=f'(5)=0\) with \(f'\lt0\) between, so \(f'\) decreases and then increases: it has a relative minimum at some \(c\) in \((1,5)\), which is a point of inflection of \(f\).`, "stretch"),

      sec("Summary"),
      key([
        ["Direction", r`The sign of \(f'\).`],
        ["Bend", r`The sign of \(f''\).`],
        ["Chart", r`All special points on one line, both signs on every interval.`],
        ["Ends", r`Limits at infinity and vertical asymptotes complete the picture.`],
      ]),
    ];
  },
});
