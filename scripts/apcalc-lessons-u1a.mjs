// AP Calculus AB exam prep — Unit 1 (Limits and Continuity), lessons 1.1–1.5.
// Original wording, examples, numbers and figures throughout. Lesson titles and
// numbering are our own; each lesson names the published framework topic it
// prepares for so students can cross-reference.
import { r, lesson, lede, goals, sec, p, disp, def, thm, exam, mistake, justify, ex, pq, key, table } from "./apcalc/kit.mjs";
import { plot, figure, C } from "./apcalc/fig.mjs";

export const u1a = {};

// ───────────────────────── 1.1 ─────────────────────────
u1a["1.1"] = lesson({
  code: "1.1", unit: 1, official: "1.1–1.2", calc: "No calculator",
  title: "The Instant Problem: From Average Rates to Limits",
  parts: () => {
    const same = (kind) => {
      const g = plot({ w: 250, h: 220, x: [-1, 4], y: [-1, 5], alt: "A curve approaching height 3 as x approaches 2" });
      g.curve((x) => 3 + 0.8 * (x - 2) - 0.35 * (x - 2) ** 2, 0, 3.7);
      if (kind === "equal") g.dot(2, 3);
      if (kind === "hole") g.hole(2, 3);
      if (kind === "moved") g.hole(2, 3).dot(2, 1);
      return g;
    };
    return [
      lede(r`A speedometer reports a speed <em>at an instant</em>. But speed is distance divided by time, and at a single instant no time passes and no distance is covered: the calculation is \(\tfrac{0}{0}\). Calculus exists because of this problem. Its answer is the <strong>limit</strong>: instead of asking what happens <em>at</em> the instant, ask what the average rates are closing in on as the time interval shrinks.`),
      goals([
        r`Compute and interpret an average rate of change, with units.`,
        r`Explain why an instantaneous rate cannot be found by a single division.`,
        r`Read and write limit notation, including one-sided limits.`,
        r`State precisely why the value \(f(c)\) plays no part in \(\displaystyle\lim_{x\to c}f(x)\).`,
      ]),

      sec("Average rate of change"),
      def("Average rate of change", r`<p>The average rate of change of \(f\) over the interval \([a,b]\) is</p>${disp(r`\frac{f(b)-f(a)}{b-a}`)}<p>the slope of the <strong>secant line</strong> through \((a,f(a))\) and \((b,f(b))\). Its units are the units of \(f\) divided by the units of \(x\).</p>`),
      p(r`An average rate uses only the two endpoints. It says nothing about what happened in between: a car that averages 60 km/h over an hour may have been stopped for ten minutes of it.`),

      sec("Shrinking the interval"),
      p(r`A ball rolls down a ramp so that its distance from the top after \(t\) seconds is \(s(t)=t^2+2t\) metres. How fast is it moving at exactly \(t=3\)? We cannot divide by a time interval of zero, so we use a short interval \([3,\,3+h]\) and let it shrink.`),
      disp(r`\frac{s(3+h)-s(3)}{h}=\frac{(3+h)^2+2(3+h)-15}{h}=\frac{8h+h^2}{h}=8+h\qquad(h\neq 0)`),
      table(
        [r`\(h\)`, "1", "0.1", "0.01", "0.001", "−0.001", "−0.01", "−0.1"],
        [[r`average rate \(8+h\) (m/s)`, "9", "8.1", "8.01", "8.001", "7.999", "7.99", "7.9"]],
      ),
      p(r`No row of this table has \(h=0\), and none ever can. Yet the averages are plainly closing in on one number, from both sides. That number, 8 m/s, is what we <em>mean</em> by the speed at \(t=3\). We write`),
      disp(r`\lim_{h\to 0}\,(8+h)=8.`),

      sec("What a limit says"),
      def("Limit (working definition)", r`<p>\(\displaystyle\lim_{x\to c}f(x)=L\) means: the values \(f(x)\) can be made as close to \(L\) as we like by taking \(x\) sufficiently close to \(c\), <strong>with \(x\neq c\)</strong>.</p>`),
      p(r`Two consequences follow directly from the words "with \(x\neq c\)", and the exam tests both relentlessly.`),
      key([
        [r`The value at \(c\) is irrelevant`, r`\(f(c)\) may equal the limit, differ from it, or not exist. The limit is unchanged.`],
        [r`Both sides must agree`, r`\(x\) approaches \(c\) from the left and from the right. One number must serve both.`],
      ]),
      `<div class="apx-figrow">${figure(same("equal"), r`\(f(2)=3\)`)}${figure(same("hole"), r`\(f(2)\) undefined`)}${figure(same("moved"), r`\(f(2)=1\)`)}</div>`,
      p(r`In all three graphs \(\displaystyle\lim_{x\to 2}f(x)=3\). Only the first has \(f(2)=3\).`),

      sec("One-sided limits"),
      def("One-sided limits", r`<p>\(\displaystyle\lim_{x\to c^-}f(x)\) uses only \(x\lt c\) (approach from the left). \(\displaystyle\lim_{x\to c^+}f(x)\) uses only \(x\gt c\) (approach from the right).</p>`),
      thm("Existence of a two-sided limit", r`<p>\(\displaystyle\lim_{x\to c}f(x)=L\) <strong>if and only if</strong> \(\displaystyle\lim_{x\to c^-}f(x)=L\) and \(\displaystyle\lim_{x\to c^+}f(x)=L\).</p>`),
      p(r`If the one-sided limits are different numbers, the two-sided limit <strong>does not exist</strong>, even though each one-sided limit does.`),

      sec("Worked examples"),
      ex("core", "Average rate from a formula", r`Find the average rate of change of \(f(x)=x^3-x\) over \([1,3]\).`, [
        r`Evaluate the endpoints: \(f(3)=27-3=24\) and \(f(1)=1-1=0\).`,
        r`Divide the change in output by the change in input: \(\dfrac{24-0}{3-1}\).`,
      ], r`The average rate of change is \(12\).`),
      ex("exam", "Average rate from a table, in context", r`The volume of water in a tank, \(V(t)\) litres, is measured at selected times \(t\) minutes.${table(["\\(t\\) (min)", "0", "2", "5", "9"], [["\\(V(t)\\) (L)", "140", "128", "110", "98"]])}Find the average rate of change of \(V\) over \(2\le t\le 5\) and interpret it.`, [
        r`\(\dfrac{V(5)-V(2)}{5-2}=\dfrac{110-128}{3}=-6\).`,
        r`Units: litres divided by minutes. The sign is negative, so the volume is falling.`,
      ], r`From \(t=2\) to \(t=5\) minutes the volume of water in the tank decreased at an average rate of 6 litres per minute.`),
      ex("stretch", "A limit that ignores the function value", r`Let \(g(x)=\dfrac{x^2-9}{x-3}\) for \(x\neq 3\), and \(g(3)=10\). Find \(\displaystyle\lim_{x\to 3}g(x)\).`, [
        r`The limit only uses \(x\neq 3\), where \(g(x)=\dfrac{(x-3)(x+3)}{x-3}=x+3\).`,
        r`As \(x\to 3\), \(x+3\to 6\) from both sides.`,
        r`The assigned value \(g(3)=10\) is never consulted.`,
      ], r`\(\displaystyle\lim_{x\to 3}g(x)=6\), even though \(g(3)=10\).`),

      sec("Common errors"),
      mistake("treating the limit as the function value", r`<p>"\(\displaystyle\lim_{x\to 3}g(x)=g(3)=10\)." This is true only for functions that are continuous at the point (Lesson 1.8). Never assume it; a question that gives you \(f(c)\) separately is usually testing whether you will.</p>`),
      mistake("reading 0/0 as an answer", r`<p>\(\tfrac{0}{0}\) is not 0, not 1 and not "does not exist". It is a signal that the expression must be rewritten before the limit can be seen (Lesson 1.5).</p>`),
      mistake("an interpretation with no interval", r`<p>"The water decreases by 6 litres per minute" loses credit. An average rate belongs to an interval: say <em>from \(t=2\) to \(t=5\) minutes</em>, say <em>average</em>, and give units.</p>`),

      sec("Write it so it scores"),
      justify(
        r`Using correct units, interpret the meaning of \(\dfrac{V(9)-V(5)}{9-5}=-3\) in the context of the tank.`,
        r`From \(t=5\) minutes to \(t=9\) minutes, the volume of water in the tank decreased at an average rate of 3 litres per minute.`,
        r`It names the quantity (volume of water), the interval (5 to 9 minutes), the direction (decreased), the word <em>average</em>, and the units (litres per minute). Leave out any one and the point is at risk.`,
      ),
      exam(r`<p>Interpretation questions are scored on wording, not arithmetic. Build every answer from the same four parts: <strong>what</strong> is changing, <strong>when</strong> (the interval or instant), <strong>which way and how fast</strong>, and <strong>units</strong>.</p>`),

      sec("Practice"),
      pq(r`Find the average rate of change of \(f(x)=\dfrac{12}{x}\) over \([2,6]\).`, r`\(\dfrac{f(6)-f(2)}{6-2}=\dfrac{2-6}{4}=-1\).`, "core"),
      pq(r`For \(s(t)=t^2+2t\), simplify the average rate of change over \([1,1+h]\), \(h\neq0\), and state what it approaches as \(h\to0\).`, r`\(\dfrac{(1+h)^2+2(1+h)-3}{h}=\dfrac{4h+h^2}{h}=4+h\), which approaches \(4\).`, "core"),
      pq(r`A function has \(\displaystyle\lim_{x\to 4^-}f(x)=7\), \(\displaystyle\lim_{x\to 4^+}f(x)=7\) and \(f(4)=-2\). State \(\displaystyle\lim_{x\to 4}f(x)\) and explain.`, r`The limit is \(7\): the one-sided limits agree. The value \(f(4)=-2\) has no bearing on the limit.`, "exam"),
      pq(r`A function has \(\displaystyle\lim_{x\to 1^-}h(x)=5\) and \(\displaystyle\lim_{x\to 1^+}h(x)=-5\). Does \(\displaystyle\lim_{x\to 1}h(x)\) exist?`, r`No. The one-sided limits exist but are not equal, so the two-sided limit does not exist.`, "exam"),
      pq(r`The temperature of a metal bar is \(H(t)\) °C after \(t\) minutes, with \(H(3)=82\) and \(H(11)=58\). Find the average rate of change of \(H\) over \([3,11]\) and interpret it with units.`, r`\(\dfrac{58-82}{11-3}=-3\). From \(t=3\) to \(t=11\) minutes, the temperature of the bar decreased at an average rate of 3 °C per minute.`, "exam"),
      pq(r`Let \(k(x)=\dfrac{x^2-2x}{x-2}\) for \(x\neq2\) and \(k(2)=c\). For what value of \(c\) does \(\displaystyle\lim_{x\to2}k(x)=k(2)\)?`, r`For \(x\neq2\), \(k(x)=x\), so the limit is \(2\). The limit equals \(k(2)\) only when \(c=2\).`, "stretch"),

      sec("Summary"),
      key([
        ["Average rate", r`\(\dfrac{f(b)-f(a)}{b-a}\): a secant slope over an interval.`],
        ["Instantaneous rate", r`The limit of average rates as the interval shrinks to a point.`],
        ["Limit", r`What \(f(x)\) approaches as \(x\to c\), never using \(x=c\) itself.`],
        ["Existence", r`Left and right limits must both exist and be equal.`],
      ]),
    ];
  },
});

// ───────────────────────── 1.2 ─────────────────────────
// One piecewise graph carries the whole lesson, so every statement can be checked against it.
const F = (x) => (x < -1 ? x + 3 : x < 2 ? x * x - 1 : x === 2 ? 1 : 5 - x);
const mainGraph = () => {
  const g = plot({ w: 400, h: 320, x: [-5, 6], y: [-2, 5], alt: "Piecewise graph of f with a jump at x = -1 and a hole at x = 2" });
  g.curve((x) => x + 3, -4, -1).curve((x) => x * x - 1, -1, 2).curve((x) => 5 - x, 2, 5);
  g.dot(-4, -1).hole(-1, 2).dot(-1, 0).hole(2, 3).dot(2, 1).dot(5, 0);
  g.label(3.4, 2.3, "y = f(x)");
  return g;
};

u1a["1.2"] = lesson({
  code: "1.2", unit: 1, official: "1.3", calc: "No calculator",
  title: "Reading Limits off a Graph",
  parts: () => {
    const osc = plot({ w: 300, h: 230, x: [-1, 1], y: [-1.5, 1.5], stepX: 0.5, stepY: 0.5, tickEvery: 2, alt: "Graph of sin(1/x) oscillating near zero" });
    osc.curve((x) => Math.sin(1 / x), -1, -0.012, { n: 3000, width: 1.3 }).curve((x) => Math.sin(1 / x), 0.012, 1, { n: 3000, width: 1.3 });
    const unb = plot({ w: 300, h: 230, x: [-3, 3], y: [-1, 8], alt: "Graph of 1 over x squared rising without bound near zero" });
    unb.curve((x) => 1 / (x * x), -3, -0.05).curve((x) => 1 / (x * x), 0.05, 3).vline(0);
    return [
      lede(r`A large share of exam questions give you no formula at all: only a graph. To read a limit from a graph, cover the point itself with your finger and follow the curve toward it from each side. What the curve is heading for is the limit. What sits <em>at</em> the point (a filled dot, an open circle, or nothing) answers a different question.`),
      goals([
        r`Read left-hand, right-hand and two-sided limits from a graph.`,
        r`Separate the three questions: \(\lim\limits_{x\to c^-}\), \(\lim\limits_{x\to c^+}\) and \(f(c)\).`,
        r`Recognise the three ways a limit can fail to exist.`,
        r`Evaluate the limit of a composition such as \(f(f(x))\) from a graph.`,
      ]),

      sec("The reference graph"),
      figure(mainGraph(), r`The graph of \(f\), defined on \([-4,5]\). Filled dots are values the function takes; open circles are not.`),
      table(
        [r`At \(x=c\)`, r`\(\displaystyle\lim_{x\to c^-}f(x)\)`, r`\(\displaystyle\lim_{x\to c^+}f(x)\)`, r`\(\displaystyle\lim_{x\to c}f(x)\)`, r`\(f(c)\)`],
        [
          [r`\(c=-1\)`, "2", "0", "does not exist", "0"],
          [r`\(c=0\)`, "−1", "−1", "−1", "−1"],
          [r`\(c=2\)`, "3", "3", "3", "1"],
        ],
      ),
      p(r`Read each row against the graph before moving on. At \(x=-1\) the curve arrives at height 2 from the left and leaves from height 0 on the right: a <strong>jump</strong>. At \(x=2\) both branches head for height 3, and the filled dot at height 1 changes nothing about the limit.`),

      sec("Three ways a limit fails to exist"),
      key([
        ["Jump", r`The one-sided limits are different numbers, as at \(x=-1\) above.`],
        ["Unbounded", r`The values grow without bound. No real number is approached.`],
        ["Oscillation", r`The values keep swinging and settle on nothing.`],
      ]),
      `<div class="apx-figrow">${figure(unb, r`\(y=\dfrac{1}{x^2}\): unbounded as \(x\to0\). We write \(\displaystyle\lim_{x\to0}\tfrac{1}{x^2}=\infty\) to <em>describe</em> the behaviour; the limit still does not exist as a number.`)}${figure(osc, r`\(y=\sin\!\left(\tfrac1x\right)\): oscillates between \(-1\) and \(1\) infinitely often as \(x\to0\).`)}</div>`,

      sec("Limits of compositions from a graph"),
      p(r`To find \(\displaystyle\lim_{x\to c}f(g(x))\) from graphs, work in two stages, and keep track of <strong>direction</strong>.`),
      `<ol><li>As \(x\to c\), what value \(L\) does the inner function approach, and does it approach from <em>above</em>, from <em>below</em>, or from both?</li><li>Feed that into the outer function: find its limit as its input approaches \(L\) from that same direction.</li></ol>`,
      p(r`Skipping the direction in step 1 is the single most common way to lose this point.`),

      sec("Worked examples"),
      ex("core", "Three questions at one point", r`Using the graph of \(f\), find \(\displaystyle\lim_{x\to 2^-}f(x)\), \(\displaystyle\lim_{x\to 2^+}f(x)\), \(\displaystyle\lim_{x\to 2}f(x)\) and \(f(2)\).`, [
        r`From the left, the parabola rises toward the open circle at height 3: \(\displaystyle\lim_{x\to 2^-}f(x)=3\).`,
        r`From the right, the line comes down toward the same open circle: \(\displaystyle\lim_{x\to 2^+}f(x)=3\).`,
        r`The one-sided limits agree, so \(\displaystyle\lim_{x\to 2}f(x)=3\).`,
        r`The filled dot gives the value: \(f(2)=1\).`,
      ], r`The limit is 3; the value is 1. They are different questions.`),
      ex("exam", "A sum of limits at different points", r`Using the graph of \(f\), evaluate \(\displaystyle\lim_{x\to -1^-}f(x)+\lim_{x\to 2}f(x)-f(-1)\).`, [
        r`\(\displaystyle\lim_{x\to -1^-}f(x)=2\) (the line arriving at the open circle).`,
        r`\(\displaystyle\lim_{x\to 2}f(x)=3\).`,
        r`\(f(-1)=0\) (the filled dot at \(x=-1\)).`,
      ], r`\(2+3-0=5\).`),
      ex("stretch", "A composition, tracking direction", r`Using the graph of \(f\), find \(\displaystyle\lim_{x\to -1^-}f(f(x))\).`, [
        r`<strong>Inner.</strong> As \(x\to-1^-\) the graph climbs the line toward height 2, so \(f(x)\to 2\), and it does so through values <em>less than</em> 2. Write \(f(x)\to 2^-\).`,
        r`<strong>Outer.</strong> We now need \(\displaystyle\lim_{u\to 2^-}f(u)\). Approaching 2 from the left, the graph heads for height 3.`,
        r`Note what would go wrong without the direction: \(f(2)=1\), and substituting gives the wrong answer 1.`,
      ], r`\(\displaystyle\lim_{x\to -1^-}f(f(x))=3\).`),

      sec("Common errors"),
      mistake("reading the dot instead of the trend", r`<p>Answering \(\displaystyle\lim_{x\to2}f(x)=1\) because the filled dot is at height 1. Cover the point; follow the curve.</p>`),
      mistake("answering only \"does not exist\"", r`<p>When a question asks for \(\displaystyle\lim_{x\to-1^+}f(x)\) the answer is 0, a perfectly good number. "Does not exist" applies to the <em>two-sided</em> limit there. Read the superscript.</p>`),
      mistake("substituting in a composition", r`<p>\(\displaystyle\lim_{x\to c}f(g(x))=f\big(\lim g(x)\big)\) is valid only when \(f\) is continuous at that inner limit. When it is not, use the two-stage method.</p>`),

      sec("Write it so it scores"),
      justify(
        r`For the function \(f\) graphed above, does \(\displaystyle\lim_{x\to-1}f(x)\) exist? Justify your answer.`,
        r`No. \(\displaystyle\lim_{x\to-1^-}f(x)=2\) and \(\displaystyle\lim_{x\to-1^+}f(x)=0\). Because the left-hand and right-hand limits are not equal, \(\displaystyle\lim_{x\to-1}f(x)\) does not exist.`,
        r`It gives a clear decision, states <em>both</em> one-sided limits with correct notation and values, and names the reason. "There is a jump" on its own is a description, not a justification.`,
      ),
      exam(r`<p>When a graph question asks you to <strong>justify</strong> or <strong>explain</strong>, the reader is looking for limit notation with numbers attached. Words about the picture ("it jumps", "there is a hole") earn nothing unless the limits are stated.</p>`),

      sec("Practice"),
      p(r`All questions refer to the graph of \(f\) in this lesson.`),
      pq(r`Find \(\displaystyle\lim_{x\to 0}f(x)\) and \(f(0)\).`, r`Both equal \(-1\): the graph passes straight through \((0,-1)\).`, "core"),
      pq(r`Find \(\displaystyle\lim_{x\to -1^+}f(x)\).`, r`\(0\). Just to the right of \(-1\) the graph is the parabola leaving the filled dot at \((-1,0)\).`, "core"),
      pq(r`Find \(\displaystyle\lim_{x\to 2}\big[f(x)\big]^2\).`, r`\(f(x)\to3\), so \([f(x)]^2\to 9\). (Not \([f(2)]^2=1\).)`, "exam"),
      pq(r`Find \(\displaystyle\lim_{x\to 5^-}f(x)\). Why is \(\displaystyle\lim_{x\to 5}f(x)\) not asked?`, r`\(\displaystyle\lim_{x\to 5^-}f(x)=0\). The function is not defined for \(x\gt5\), so only the left-hand limit makes sense at the endpoint.`, "exam"),
      pq(r`Find \(\displaystyle\lim_{x\to 2}f(f(x))\).`, r`As \(x\to2\) from either side, \(f(x)\to3\) through values less than 3 (the parabola rises to 3; the line \(5-x\) is below 3 for \(x\gt2\)). So we need \(\displaystyle\lim_{u\to3^-}f(u)=5-3=2\). The limit is \(2\).`, "stretch"),
      pq(r`Find \(\displaystyle\lim_{x\to -1^+}f(f(x))\).`, r`As \(x\to-1^+\), \(f(x)=x^2-1\to0\) through values <em>less than</em> 0 (just right of \(-1\), \(x^2\lt1\)). So we need \(\displaystyle\lim_{u\to0^-}f(u)=-1\). The limit is \(-1\).`, "stretch"),

      sec("Summary"),
      key([
        ["Cover the point", r`A limit is about the approach. The dot answers \(f(c)\), nothing else.`],
        ["Two sides", r`State each one-sided limit; the two-sided limit exists only if they match.`],
        ["Three failures", r`Jump, unbounded behaviour, oscillation.`],
        ["Compositions", r`Inner limit <em>with direction</em>, then the outer one-sided limit.`],
      ]),
    ];
  },
});

// ───────────────────────── 1.3 ─────────────────────────
u1a["1.3"] = lesson({
  code: "1.3", unit: 1, official: "1.4", calc: "Both",
  title: "Limits from Numerical Evidence",
  parts: () => [
    lede(r`A table of values is the third way the exam presents a function, after formulas and graphs. A table can never show the instant itself, only values near it. Read well, it gives a strong estimate of a limit. Read carelessly, it will tell you something false with complete confidence.`),
    goals([
      r`Estimate a limit from a table by approaching from both sides.`,
      r`Decide from a table whether a two-sided limit appears to exist.`,
      r`Build your own table on a graphing calculator, in the correct angle mode.`,
      r`Explain why a table supports a conclusion but does not prove it.`,
    ]),

    sec("Reading a table"),
    p(r`To estimate \(\displaystyle\lim_{x\to c}f(x)\), look at inputs that close in on \(c\) from below and from above, and ask what the outputs are closing in on.`),
    table(
      [r`\(x\)`, "1.9", "1.99", "1.999", "2", "2.001", "2.01", "2.1"],
      [[r`\(f(x)=\dfrac{x^2-4}{x-2}\)`, "3.9", "3.99", "3.999", "undefined", "4.001", "4.01", "4.1"]],
    ),
    p(r`From the left the outputs rise toward 4; from the right they fall toward 4. The evidence supports \(\displaystyle\lim_{x\to2}f(x)=4\). The blank at \(x=2\) is expected and harmless.`),

    sec("When the two sides disagree"),
    table(
      [r`\(x\)`, "2.9", "2.99", "2.999", "3.001", "3.01", "3.1"],
      [[r`\(g(x)\)`, "5.71", "5.9701", "5.997", "7.002", "7.02", "7.2"]],
    ),
    p(r`Here the left-hand values approach 6 and the right-hand values approach 7. The table suggests \(\displaystyle\lim_{x\to3^-}g(x)=6\), \(\displaystyle\lim_{x\to3^+}g(x)=7\), and therefore that the two-sided limit does not exist.`),

    sec("Why a table is evidence, not proof"),
    p(r`A table samples a function at a handful of inputs. Between and beyond those inputs the function is free to do anything. Consider \(h(x)=\sin\!\left(\dfrac{\pi}{x}\right)\) near \(x=0\).`),
    table(
      [r`\(x\)`, "0.1", "0.01", "0.001", "0.0001"],
      [[r`\(h(x)=\sin(\pi/x)\)`, "0", "0", "0", "0"]],
    ),
    p(r`Every entry is 0, because \(\pi/x\) is a whole multiple of \(\pi\) at each of these inputs. A hasty reader concludes the limit is 0. But choose different inputs:`),
    table(
      [r`\(x\)`, r`\(\tfrac{2}{5}\)`, r`\(\tfrac{2}{41}\)`, r`\(\tfrac{2}{401}\)`],
      [[r`\(h(x)=\sin(\pi/x)\)`, "1", "1", "1"]],
    ),
    p(r`Now every entry is 1. The function is oscillating, and the limit does not exist. The first table was not wrong; it was <strong>unrepresentative</strong>. This is why exam questions say <em>estimate</em>, and why an answer drawn from a table should say "the table suggests".`),

    sec("Building a table on the calculator"),
    p(r`In the calculator sections you may generate your own evidence. Enter the function, then use the table feature with inputs you type in (on most graphing calculators: set the independent variable to "ask" rather than "auto").`),
    `<ul><li>Use inputs on <strong>both</strong> sides of \(c\), for example \(c\pm0.1,\ c\pm0.01,\ c\pm0.001\).</li><li>For any trigonometric function, the calculator must be in <strong>radian mode</strong>. Calculus formulas for sine and cosine are true only in radians.</li><li>Do not push inputs too close (say within \(10^{-12}\)): rounding inside the calculator destroys the pattern.</li></ul>`,

    sec("Worked examples"),
    ex("core", "Estimating from a given table", r`Selected values of a function \(p\) are shown. Estimate \(\displaystyle\lim_{x\to -1}p(x)\).${table(["\\(x\\)", "−1.1", "−1.01", "−1.001", "−0.999", "−0.99", "−0.9"], [["\\(p(x)\\)", "2.31", "2.0301", "2.003", "1.997", "1.9701", "1.71"]])}`, [
      r`From the left (\(x=-1.1,-1.01,-1.001\)) the values fall toward 2.`,
      r`From the right (\(x=-0.9,-0.99,-0.999\)) the values rise toward 2.`,
    ], r`The table suggests \(\displaystyle\lim_{x\to-1}p(x)=2\).`),
    ex("exam", "A calculator-built table", r`Use a table to estimate \(\displaystyle\lim_{x\to0}\dfrac{\sin(3x)}{x}\) to three decimal places.`, [
      r`Radian mode. Enter \(y=\sin(3x)/x\) and ask for \(x=\pm0.1,\ \pm0.01,\ \pm0.001\).`,
      r`\(x=\pm0.1\): \(2.955\). \(x=\pm0.01\): \(2.9996\). \(x=\pm0.001\): \(2.999996\).`,
      r`The values agree on both sides and are closing in on 3.`,
    ], r`The limit is approximately \(3.000\). (Lesson 1.6 proves it is exactly 3.)`),
    ex("stretch", "What a table does and does not let you conclude", r`A function \(w\) is defined for all real numbers. A table shows \(w(4.9)=8.8\), \(w(4.99)=8.98\), \(w(5.01)=9.02\), \(w(5.1)=9.2\) and \(w(5)=3\). Which of the following <em>must</em> be true? (I) \(\displaystyle\lim_{x\to5}w(x)=9\). (II) \(w\) is not continuous at 5. (III) \(\displaystyle\lim_{x\to5}w(x)\neq3\).`, [
      r`The four nearby values <em>suggest</em> the limit is 9, but four values cannot force it. \(w\) could behave differently for inputs closer to 5 than those shown.`,
      r`Since the limit is not determined by the table, neither (I), (II) nor (III) is <em>guaranteed</em>.`,
    ], r`None of them must be true. Only "the table suggests the limit is 9" is defensible.`),

    sec("Common errors"),
    mistake("degree mode", r`<p>In degree mode a calculator reports \(\dfrac{\sin x}{x}\approx0.01745\) near 0 instead of 1. Check the mode before every calculator section.</p>`),
    mistake("approaching from one side only", r`<p>Values at \(2.9,\ 2.99,\ 2.999\) tell you about \(\displaystyle\lim_{x\to3^-}\) and nothing about the right-hand limit.</p>`),
    mistake(r`copying the entry at \(x=c\)`, r`<p>If the table includes \(f(c)\), that entry is the function value. The limit comes from the entries around it.</p>`),

    sec("Write it so it scores"),
    justify(
      r`Based on the first table in this lesson, a student writes "\(\displaystyle\lim_{x\to2}f(x)=4\) because \(f(1.999)=3.999\) and \(f(2.001)=4.001\)." Improve the statement.`,
      r`As \(x\) approaches 2 from the left and from the right, the values of \(f(x)\) in the table approach 4. The table therefore suggests that \(\displaystyle\lim_{x\to2}f(x)=4\).`,
      r`It refers to the trend from both sides rather than two isolated entries, and it claims only what a table can support.`,
    ),
    exam(r`<p>When a question gives a table and the word <strong>"must"</strong>, be suspicious of every option that asserts an exact limit or continuity. When it says <strong>"estimate"</strong> or <strong>"best approximation"</strong>, read the trend and commit to it.</p>`),

    sec("Practice"),
    pq(r`A table gives \(q(0.9)=4.59\), \(q(0.99)=4.9599\), \(q(1.01)=5.0401\), \(q(1.1)=5.41\). Estimate \(\displaystyle\lim_{x\to1}q(x)\).`, r`Both sides approach 5, so the table suggests the limit is \(5\).`, "core"),
    pq(r`A table gives \(r(-0.1)=-1.9\), \(r(-0.01)=-1.99\), \(r(0.01)=2.01\), \(r(0.1)=2.1\). What does the table suggest about \(\displaystyle\lim_{x\to0}r(x)\)?`, r`Left-hand values approach \(-2\); right-hand values approach \(2\). The table suggests the two-sided limit does not exist.`, "core"),
    pq(r`(Calculator) Estimate \(\displaystyle\lim_{x\to0}\dfrac{e^{2x}-1}{x}\) to three decimal places.`, r`At \(x=\pm0.001\) the values are \(2.002\) and \(1.998\); at \(\pm0.0001\) they are \(2.0002\) and \(1.9998\). The limit is approximately \(2.000\).`, "exam"),
    pq(r`(Calculator) Estimate \(\displaystyle\lim_{x\to0}\dfrac{1-\cos x}{x^2}\).`, r`At \(x=\pm0.1\): \(0.49958\). At \(x=\pm0.01\): \(0.499996\). The limit is approximately \(0.5\).`, "exam"),
    pq(r`Explain why inputs \(x=1,\ \tfrac12,\ \tfrac13,\ \tfrac14,\dots\) are a poor choice for investigating \(\displaystyle\lim_{x\to0}\cos\!\left(\dfrac{2\pi}{x}\right)\).`, r`At each of those inputs \(2\pi/x\) is a whole multiple of \(2\pi\), so every output is 1. The table would suggest a limit of 1, but the function oscillates between \(-1\) and \(1\) and has no limit. They also approach from the right only.`, "stretch"),

    sec("Summary"),
    key([
      ["Both sides", r`Inputs below and above \(c\), getting closer.`],
      ["Trend, not entry", r`Ask what the outputs are closing in on.`],
      ["Evidence only", r`A table suggests; algebra or a theorem proves.`],
      ["Radians", r`Always, for trigonometric limits.`],
    ]),
  ],
});

// ───────────────────────── 1.4 ─────────────────────────
u1a["1.4"] = lesson({
  code: "1.4", unit: 1, official: "1.5", calc: "No calculator",
  title: "Limit Laws and Direct Substitution",
  parts: () => [
    lede(r`Tables and graphs estimate limits. To find them exactly we need rules. The limit laws let a complicated limit be taken apart into simple ones, and they explain why, for most functions you meet, a limit can be found just by substituting. They also mark out exactly where substitution stops working, which is where the interesting questions begin.`),
    goals([
      r`Apply the sum, product, quotient, power and root laws to known limits.`,
      r`Justify direct substitution for polynomial, rational, trigonometric, exponential and logarithmic functions.`,
      r`State the condition each law needs, and recognise when it fails.`,
      r`Evaluate the limit of a composition correctly.`,
    ]),

    sec("The limit laws"),
    thm("Limit laws", r`<p>Suppose \(\displaystyle\lim_{x\to c}f(x)=L\) and \(\displaystyle\lim_{x\to c}g(x)=M\), where \(L\) and \(M\) are real numbers, and let \(k\) be a constant. Then</p>
      <ul>
        <li>\(\displaystyle\lim_{x\to c}\big[f(x)\pm g(x)\big]=L\pm M\)</li>
        <li>\(\displaystyle\lim_{x\to c}\big[k\,f(x)\big]=kL\)</li>
        <li>\(\displaystyle\lim_{x\to c}\big[f(x)\,g(x)\big]=LM\)</li>
        <li>\(\displaystyle\lim_{x\to c}\dfrac{f(x)}{g(x)}=\dfrac{L}{M}\), <strong>provided \(M\neq0\)</strong></li>
        <li>\(\displaystyle\lim_{x\to c}\big[f(x)\big]^n=L^n\) and \(\displaystyle\lim_{x\to c}\sqrt[n]{f(x)}=\sqrt[n]{L}\) (with \(L\gt0\) when \(n\) is even)</li>
      </ul>`),
    p(r`The opening words matter as much as the formulas: the laws apply only when <strong>both</strong> limits exist as real numbers. They hold equally for one-sided limits.`),

    sec("Direct substitution"),
    p(r`Start from two facts that are obvious from a graph: \(\displaystyle\lim_{x\to c}x=c\) and \(\displaystyle\lim_{x\to c}k=k\). Apply the product and sum laws repeatedly and every polynomial follows.`),
    thm("Direct substitution", r`<p>If \(f\) is a polynomial, a rational function, a root function, \(\sin\), \(\cos\), \(\tan\), an exponential or a logarithm, and \(c\) is <strong>in the domain</strong> of \(f\), then</p>${disp(r`\lim_{x\to c}f(x)=f(c).`)}`),
    p(r`So the first move for any limit is to substitute. Three things can happen.`),
    key([
      ["A real number", r`Done. That number is the limit.`],
      [r`\(\dfrac{\text{nonzero}}{0}\)`, r`No finite limit. The function is unbounded (Lesson 1.9).`],
      [r`\(\dfrac{0}{0}\)`, r`Indeterminate. Rewrite the expression first (Lesson 1.5).`],
    ]),

    sec("Limits of compositions"),
    thm("Composition", r`<p>If \(\displaystyle\lim_{x\to c}g(x)=L\) and \(f\) is <strong>continuous at \(L\)</strong>, then \(\displaystyle\lim_{x\to c}f\big(g(x)\big)=f(L)\).</p>`),
    p(r`In words: a limit can be moved inside a continuous function. This is what justifies steps like \(\displaystyle\lim_{x\to2}\sqrt{x^2+5}=\sqrt{\lim_{x\to2}(x^2+5)}=3\). When \(f\) is not continuous at \(L\), the theorem is silent, and you must examine how \(g(x)\) approaches \(L\).`),

    sec("Worked examples"),
    ex("core", "Substitution into a rational function", r`Evaluate \(\displaystyle\lim_{x\to2}\dfrac{3x^2-5x+4}{x+1}\).`, [
      r`The function is rational and its denominator at \(x=2\) is \(3\neq0\), so 2 is in the domain.`,
      r`Substitute: \(\dfrac{3(4)-10+4}{3}=\dfrac{6}{3}\).`,
    ], r`The limit is \(2\).`),
    ex("exam", "Laws applied to unknown functions", r`Given \(\displaystyle\lim_{x\to4}f(x)=6\) and \(\displaystyle\lim_{x\to4}g(x)=-2\), find \(\displaystyle\lim_{x\to4}\dfrac{3f(x)-\big[g(x)\big]^2}{f(x)\,g(x)+4}\).`, [
      r`Numerator: \(3(6)-(-2)^2=18-4=14\).`,
      r`Denominator: \((6)(-2)+4=-8\). This is not zero, so the quotient law applies.`,
    ], r`The limit is \(\dfrac{14}{-8}=-\dfrac{7}{4}\).`),
    ex("exam", "Solving for a limit", r`Suppose \(\displaystyle\lim_{x\to1}\dfrac{f(x)-8}{x-1}=10\). Find \(\displaystyle\lim_{x\to1}f(x)\).`, [
      r`Write \(f(x)-8=\dfrac{f(x)-8}{x-1}\cdot(x-1)\) for \(x\neq1\).`,
      r`Both factors have limits as \(x\to1\): \(10\) and \(0\). By the product law, \(\displaystyle\lim_{x\to1}\big[f(x)-8\big]=10\cdot0=0\).`,
    ], r`\(\displaystyle\lim_{x\to1}f(x)=8\). A quotient with denominator tending to 0 can only have a finite limit if its numerator tends to 0 too.`),
    ex("stretch", "A composition where substitution gives the wrong answer", r`Let \(g(x)=(x-1)^2+2\) and \(f(u)=\begin{cases}u+1,&u\le2\\3u-1,&u\gt2\end{cases}\). Find \(\displaystyle\lim_{x\to1}f\big(g(x)\big)\).`, [
      r`As \(x\to1\), \(g(x)\to2\). But \(f\) is not continuous at 2 (its one-sided limits there are 3 and 5), so the composition theorem does not apply.`,
      r`Look at the direction. For every \(x\neq1\), \((x-1)^2\gt0\), so \(g(x)\gt2\): the inner function approaches 2 <strong>from above only</strong>.`,
      r`Therefore \(\displaystyle\lim_{x\to1}f(g(x))=\lim_{u\to2^+}f(u)=3(2)-1\).`,
    ], r`The limit is \(5\). Substituting would have given \(f(2)=3\), which is wrong.`),

    sec("Common errors"),
    mistake("using the quotient law when the denominator tends to 0", r`<p>Writing \(\displaystyle\lim_{x\to3}\dfrac{x^2-9}{x-3}=\dfrac{0}{0}\) and stopping, or calling it undefined. The quotient law does not apply here at all; the limit is 6.</p>`),
    mistake("splitting a limit that does not split", r`<p>\(\displaystyle\lim_{x\to0}\left[x\cdot\sin\tfrac1x\right]\) cannot be written as \(\displaystyle\lim x\cdot\lim\sin\tfrac1x\), because the second limit does not exist. The original limit <em>does</em> exist (it is 0, by Lesson 1.6).</p>`),
    mistake("moving a limit inside a discontinuous function", r`<p>As the Stretch example shows, \(\displaystyle\lim f(g(x))=f(\lim g(x))\) requires continuity of the outer function at the inner limit.</p>`),

    sec("Write it so it scores"),
    justify(
      r`Explain why \(\displaystyle\lim_{x\to1}\dfrac{x^2+3}{x-4}\) can be found by substitution, and find it.`,
      r`The function \(\dfrac{x^2+3}{x-4}\) is rational and its denominator is not zero at \(x=1\), so it is continuous at \(x=1\). Therefore the limit equals the function value: \(\displaystyle\lim_{x\to1}\dfrac{x^2+3}{x-4}=\dfrac{4}{-3}=-\dfrac43\).`,
      r`It states the property that licenses substitution (continuity at the point) and checks its condition (nonzero denominator), instead of substituting without comment.`,
    ),
    exam(r`<p>Questions built on given limits (like the second example) often hide a <strong>zero denominator</strong> among the answer choices. Compute the denominator's limit first. If it is zero, the quotient law is off the table and the answer depends on the numerator.</p>`),

    sec("Practice"),
    pq(r`Evaluate \(\displaystyle\lim_{x\to-2}\big(x^3-4x+1\big)\).`, r`Polynomial: substitute. \(-8+8+1=1\).`, "core"),
    pq(r`Evaluate \(\displaystyle\lim_{x\to\pi/3}\big(4\cos x-\tan^2x\big)\).`, r`\(4\cdot\tfrac12-(\sqrt3)^2=2-3=-1\).`, "core"),
    pq(r`Given \(\displaystyle\lim_{x\to2}f(x)=-3\) and \(\displaystyle\lim_{x\to2}g(x)=5\), find \(\displaystyle\lim_{x\to2}\sqrt{g(x)-4f(x)+8}\).`, r`\(\sqrt{5+12+8}=\sqrt{25}=5\).`, "exam"),
    pq(r`Given \(\displaystyle\lim_{x\to0}f(x)=4\), find \(\displaystyle\lim_{x\to0}\dfrac{x+f(x)}{\cos x+\big[f(x)\big]^2}\).`, r`\(\dfrac{0+4}{1+16}=\dfrac{4}{17}\).`, "exam"),
    pq(r`Suppose \(\displaystyle\lim_{x\to3}\dfrac{f(x)+5}{x-3}=-2\). Find \(\displaystyle\lim_{x\to3}f(x)\).`, r`\(f(x)+5=\dfrac{f(x)+5}{x-3}\cdot(x-3)\to(-2)(0)=0\), so \(\displaystyle\lim_{x\to3}f(x)=-5\).`, "exam"),
    pq(r`With \(f\) as in the Stretch example and \(g(x)=2-(x-1)^2\), find \(\displaystyle\lim_{x\to1}f\big(g(x)\big)\).`, r`Now \(g(x)\lt2\) for \(x\neq1\), so \(g(x)\to2^-\) and the limit is \(\displaystyle\lim_{u\to2^-}f(u)=2+1=3\).`, "stretch"),

    sec("Summary"),
    key([
      ["Laws need existing limits", r`Both limits must be real numbers before any law is used.`],
      ["Quotient law", r`Only when the denominator's limit is not 0.`],
      ["Substitute first", r`Valid at every point of the domain of the standard functions.`],
      ["Compositions", r`A limit passes inside a function that is continuous there.`],
    ]),
  ],
});

// ───────────────────────── 1.5 ─────────────────────────
u1a["1.5"] = lesson({
  code: "1.5", unit: 1, official: "1.6–1.7", calc: "No calculator",
  title: "Resolving 0/0: Factoring, Conjugates and Compound Fractions",
  parts: () => [
    lede(r`Substitution has failed and returned \(\tfrac00\). This is the most productive failure in calculus: it tells you that numerator and denominator share a hidden factor that vanishes at the point. The whole craft of this lesson is finding that factor and removing it. Every derivative you ever compute from the definition is a \(\tfrac00\) limit resolved in this way.`),
    goals([
      r`Recognise \(\tfrac00\) as indeterminate and choose a rewriting method.`,
      r`Resolve limits by factoring, by a conjugate, and by clearing a compound fraction.`,
      r`Handle absolute values and piecewise definitions with one-sided limits.`,
      r`Present the work with notation that keeps every communication point.`,
    ]),

    sec("Why cancelling is legitimate"),
    thm("Functions that agree near a point", r`<p>If \(f(x)=g(x)\) for all \(x\) near \(c\) <strong>except possibly at \(c\)</strong>, then \(\displaystyle\lim_{x\to c}f(x)=\lim_{x\to c}g(x)\).</p>`),
    p(r`\(\dfrac{x^2-9}{x-3}\) and \(x+3\) are not the same function: the first is undefined at 3. But they agree everywhere else, and a limit never looks at the point itself. So their limits at 3 are equal, and the second can be found by substitution.`),

    sec("Choosing a method"),
    table(
      ["What you see", "Rewrite by", "Why it works"],
      [
        ["Polynomials over polynomials", "Factoring", r`\(c\) is a root of both, so \((x-c)\) divides both.`],
        ["A square root minus a number", "Multiplying by the conjugate", r`\((\sqrt a-b)(\sqrt a+b)=a-b^2\) removes the root.`],
        ["Fractions inside a fraction", "A common denominator", r`Collapses the numerator to one fraction with a factor of \((x-c)\).`],
        [r`\(|x-c|\) or a piecewise rule`, "Separate one-sided limits", "The formula changes at \\(c\\)."],
      ],
    ),

    sec("Worked examples"),
    ex("core", "Factoring", r`Evaluate \(\displaystyle\lim_{x\to-3}\dfrac{x^2+x-6}{x^2-9}\).`, [
      r`Substituting gives \(\dfrac{9-3-6}{9-9}=\dfrac00\): indeterminate.`,
      r`Factor: \(\displaystyle\lim_{x\to-3}\dfrac{(x+3)(x-2)}{(x+3)(x-3)}=\lim_{x\to-3}\dfrac{x-2}{x-3}\).`,
      r`Substitute: \(\dfrac{-5}{-6}\).`,
    ], r`The limit is \(\dfrac56\).`),
    ex("exam", "Conjugate", r`Evaluate \(\displaystyle\lim_{x\to5}\dfrac{\sqrt{x+4}-3}{x-5}\).`, [
      r`Substituting gives \(\tfrac00\). Multiply numerator and denominator by the conjugate \(\sqrt{x+4}+3\).`,
      r`Numerator: \((\sqrt{x+4})^2-3^2=x+4-9=x-5\). Leave the denominator factored: \((x-5)(\sqrt{x+4}+3)\).`,
      r`Cancel \((x-5)\): \(\displaystyle\lim_{x\to5}\dfrac{1}{\sqrt{x+4}+3}=\dfrac{1}{3+3}\).`,
    ], r`The limit is \(\dfrac16\).`),
    ex("exam", "Compound fraction", r`Evaluate \(\displaystyle\lim_{x\to2}\dfrac{\dfrac1x-\dfrac12}{x-2}\).`, [
      r`Combine the numerator over the common denominator \(2x\): \(\dfrac1x-\dfrac12=\dfrac{2-x}{2x}\).`,
      r`The expression becomes \(\dfrac{2-x}{2x(x-2)}\). Since \(2-x=-(x-2)\), it simplifies to \(-\dfrac{1}{2x}\) for \(x\neq2\).`,
      r`Substitute: \(-\dfrac{1}{4}\).`,
    ], r`The limit is \(-\dfrac14\).`),
    ex("exam", "A parameter that makes the limit exist", r`Find the value of \(k\) for which \(\displaystyle\lim_{x\to2}\dfrac{x^2+kx-6}{x-2}\) exists, and find the limit.`, [
      r`The denominator tends to 0. A finite limit is possible only if the numerator also tends to 0: \(4+2k-6=0\), so \(k=1\).`,
      r`With \(k=1\): \(\dfrac{x^2+x-6}{x-2}=\dfrac{(x+3)(x-2)}{x-2}=x+3\) for \(x\neq2\).`,
    ], r`\(k=1\), and the limit is \(5\).`),
    ex("stretch", "Absolute value", r`Evaluate \(\displaystyle\lim_{x\to3}\dfrac{|x-3|}{x^2-9}\), or show that it does not exist.`, [
      r`For \(x\gt3\): \(|x-3|=x-3\), so the expression is \(\dfrac{x-3}{(x-3)(x+3)}=\dfrac{1}{x+3}\to\dfrac16\).`,
      r`For \(x\lt3\): \(|x-3|=-(x-3)\), so the expression is \(-\dfrac{1}{x+3}\to-\dfrac16\).`,
      r`\(\displaystyle\lim_{x\to3^+}=\dfrac16\) and \(\displaystyle\lim_{x\to3^-}=-\dfrac16\) are not equal.`,
    ], r`The limit does not exist.`),

    sec("Common errors"),
    mistake("giving 0/0 a value", r`<p>\(\tfrac00\) is none of: 0, 1, undefined, "does not exist". It means "not yet known". Never write "\(=\tfrac00\)" as a line of working; write "substitution gives the indeterminate form \(\tfrac00\)" in words.</p>`),
    mistake("dropping or keeping the limit symbol at the wrong time", r`<p>\(\displaystyle\lim_{x\to-3}\dfrac{x^2+x-6}{x^2-9}=\dfrac{x-2}{x-3}=\dfrac56\) is wrong twice: the middle expression is a function, not a number. Keep "\(\lim\)" on every line <em>until</em> you substitute, and remove it on the line where you do.</p>`),
    mistake("expanding the denominator after using a conjugate", r`<p>After multiplying by the conjugate, multiply out the part that <em>had</em> the root and leave the other part in factored form. Expanding it hides the factor you need to cancel.</p>`),
    mistake("forgetting the sign in a reversed factor", r`<p>\(2-x\) is \(-(x-2)\). Losing that minus sign is the most frequent arithmetic slip in this topic.</p>`),

    sec("Write it so it scores"),
    justify(
      r`Evaluate \(\displaystyle\lim_{x\to4}\dfrac{x^2-16}{x-4}\), showing the work that leads to your answer.`,
      r`\(\displaystyle\lim_{x\to4}\dfrac{x^2-16}{x-4}=\lim_{x\to4}\dfrac{(x-4)(x+4)}{x-4}=\lim_{x\to4}\,(x+4)=4+4=8.\)`,
      r`Every expression that still contains \(x\) carries the limit symbol; the symbol disappears exactly when 4 is substituted; and the chain of equals signs is true at every link.`,
    ),
    exam(r`<p>In the free-response section, a correct answer with broken notation can lose the point. Two habits protect you: an equals sign only between things that are actually equal, and "\(\lim\)" on every line that still has the variable in it.</p>`),

    sec("Practice"),
    pq(r`Evaluate \(\displaystyle\lim_{x\to1}\dfrac{x^2+4x-5}{x^2-1}\).`, r`\(\dfrac{(x+5)(x-1)}{(x+1)(x-1)}\to\dfrac{6}{2}=3\).`, "core"),
    pq(r`Evaluate \(\displaystyle\lim_{x\to2}\dfrac{x^3-8}{x-2}\).`, r`\(x^3-8=(x-2)(x^2+2x+4)\), so the limit is \(4+4+4=12\).`, "core"),
    pq(r`Evaluate \(\displaystyle\lim_{x\to0}\dfrac{\sqrt{9+x}-3}{x}\).`, r`Conjugate: \(\dfrac{x}{x(\sqrt{9+x}+3)}\to\dfrac{1}{6}\).`, "exam"),
    pq(r`Evaluate \(\displaystyle\lim_{h\to0}\dfrac{\dfrac{1}{3+h}-\dfrac13}{h}\).`, r`\(\dfrac{3-(3+h)}{3(3+h)}\cdot\dfrac1h=\dfrac{-1}{3(3+h)}\to-\dfrac19\).`, "exam"),
    pq(r`Evaluate \(\displaystyle\lim_{x\to7}\dfrac{x-7}{\sqrt{x+2}-3}\).`, r`Multiply by \(\sqrt{x+2}+3\): \(\dfrac{(x-7)(\sqrt{x+2}+3)}{x-7}\to3+3=6\).`, "exam"),
    pq(r`Find \(a\) and the limit, given that \(\displaystyle\lim_{x\to-1}\dfrac{2x^2+ax+3}{x+1}\) exists.`, r`Numerator must vanish at \(-1\): \(2-a+3=0\), so \(a=5\). Then \(2x^2+5x+3=(2x+3)(x+1)\), and the limit is \(2(-1)+3=1\).`, "stretch"),
    pq(r`Evaluate \(\displaystyle\lim_{x\to-2^-}\dfrac{x^2-4}{|x+2|}\).`, r`For \(x\lt-2\), \(|x+2|=-(x+2)\), so the expression is \(-(x-2)\to4\).`, "stretch"),

    sec("Summary"),
    key([
      [r`\(\tfrac00\)`, r`A signal to rewrite, never an answer.`],
      ["Factor", r`Polynomial over polynomial.`],
      ["Conjugate", r`A root minus a number.`],
      ["Common denominator", r`A fraction within a fraction.`],
      ["One-sided", r`Absolute values and piecewise rules.`],
    ]),
  ],
});
