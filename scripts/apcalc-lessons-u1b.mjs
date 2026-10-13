// AP Calculus AB exam prep — Unit 1 (Limits and Continuity), lessons 1.6–1.10.
// Original wording, examples, numbers and figures throughout (see u1a for notes).
import { r, lesson, lede, goals, sec, p, disp, def, thm, exam, mistake, justify, ex, pq, key, table } from "./apcalc/kit.mjs";
import { plot, figure, C } from "./apcalc/fig.mjs";

export const u1b = {};

// ───────────────────────── 1.6 ─────────────────────────
u1b["1.6"] = lesson({
  code: "1.6", unit: 1, official: "1.8", calc: "No calculator",
  title: "Trapping a Limit: The Squeeze Theorem",
  parts: () => {
    const g = plot({ w: 420, h: 300, x: [-0.5, 0.5], y: [-0.25, 0.25], stepX: 0.1, stepY: 0.05, tickEvery: 2, alt: "x squared times sine of one over x trapped between x squared and negative x squared" });
    g.curve((x) => x * x, -0.5, 0.5, { color: C.alt, width: 1.8 }).curve((x) => -x * x, -0.5, 0.5, { color: C.alt, width: 1.8 });
    g.curve((x) => x * x * Math.sin(1 / x), -0.5, -0.004, { n: 2500, width: 1.5 }).curve((x) => x * x * Math.sin(1 / x), 0.004, 0.5, { n: 2500, width: 1.5 });
    g.label(0.31, 0.2, "y = x²", { color: C.alt }).label(0.31, -0.21, "y = −x²", { color: C.alt });
    return [
      lede(r`Some limits cannot be reached by any algebra. \(x^2\sin\!\left(\tfrac1x\right)\) near 0 has nothing to factor and nothing to cancel, and the sine factor oscillates without settling. The squeeze theorem handles such limits indirectly: trap the awkward function between two simple ones that share a limit, and it has nowhere else to go. The same idea gives the two trigonometric limits on which every derivative of sine and cosine rests.`),
      goals([
        r`State the squeeze theorem with all of its conditions.`,
        r`Build the bounding inequality for a product involving \(\sin\) or \(\cos\).`,
        r`Use \(\displaystyle\lim_{\theta\to0}\dfrac{\sin\theta}{\theta}=1\) and \(\displaystyle\lim_{\theta\to0}\dfrac{1-\cos\theta}{\theta}=0\) to evaluate related limits.`,
        r`Write a complete squeeze argument in three lines.`,
      ]),

      sec("The theorem"),
      thm("Squeeze theorem", r`<p>Suppose \(g(x)\le f(x)\le h(x)\) for all \(x\) near \(c\) (except possibly at \(c\)), and</p>${disp(r`\lim_{x\to c}g(x)=\lim_{x\to c}h(x)=L.`)}<p>Then \(\displaystyle\lim_{x\to c}f(x)=L\).</p>`),
      figure(g, r`\(y=x^2\sin\!\left(\tfrac1x\right)\) oscillates faster and faster near 0, but it is trapped between \(y=-x^2\) and \(y=x^2\), which both tend to 0.`),
      p(r`The theorem needs two things: an inequality that holds near the point, and two outer limits that are <strong>equal</strong>. If the outer limits differ, nothing can be concluded.`),

      sec("Building the bounds"),
      p(r`Almost every squeeze question on the exam is built from one fact: for every real input, \(-1\le\sin(\text{anything})\le1\) and \(-1\le\cos(\text{anything})\le1\). Multiply the three parts of the inequality by the remaining factor.`),
      `<ul><li>If that factor is <strong>never negative</strong> (such as \(x^2\), \(x^4\), \(|x|\)), the inequality keeps its direction.</li><li>If the factor can be negative (such as \(x\) or \(x^3\)), bound with its absolute value instead: \(-|x|\le x\sin\!\left(\tfrac1x\right)\le|x|\).</li></ul>`,

      sec("Two limits to know by heart"),
      thm("Fundamental trigonometric limits", r`${disp(r`\lim_{\theta\to0}\frac{\sin\theta}{\theta}=1\qquad\qquad\lim_{\theta\to0}\frac{1-\cos\theta}{\theta}=0`)}<p>with \(\theta\) in <strong>radians</strong>.</p>`),
      p(r`The first is itself proved by a squeeze: comparing areas in the unit circle gives \(\cos\theta\le\dfrac{\sin\theta}{\theta}\le1\) for small \(\theta\neq0\), and both ends tend to 1. The second follows from the first by multiplying by \(\dfrac{1+\cos\theta}{1+\cos\theta}\).`),
      p(r`To use them, the quantity inside the sine must <strong>match</strong> the quantity underneath it. Create the match by multiplying and dividing by the constant you need.`),
      disp(r`\lim_{x\to0}\frac{\sin(5x)}{3x}=\lim_{x\to0}\frac{5}{3}\cdot\frac{\sin(5x)}{5x}=\frac53\cdot1=\frac53`),

      sec("Worked examples"),
      ex("core", "Matching the argument", r`Evaluate \(\displaystyle\lim_{x\to0}\dfrac{\sin(3x)}{x}\).`, [
        r`The sine has \(3x\) inside, so we need \(3x\) underneath. Multiply and divide by 3: \(\dfrac{\sin(3x)}{x}=3\cdot\dfrac{\sin(3x)}{3x}\).`,
        r`As \(x\to0\), \(3x\to0\), so \(\dfrac{\sin(3x)}{3x}\to1\).`,
      ], r`The limit is \(3\).`),
      ex("exam", "A function known only by its bounds", r`A function \(f\) satisfies \(4x-9\le f(x)\le x^2-4x+7\) for all \(x\). Find \(\displaystyle\lim_{x\to4}f(x)\).`, [
        r`Lower bound: \(\displaystyle\lim_{x\to4}(4x-9)=7\).`,
        r`Upper bound: \(\displaystyle\lim_{x\to4}(x^2-4x+7)=16-16+7=7\).`,
        r`The bounds have the same limit, and \(f\) lies between them.`,
      ], r`By the squeeze theorem, \(\displaystyle\lim_{x\to4}f(x)=7\). Nothing else about \(f\) is needed.`),
      ex("exam", "A ratio of sines", r`Evaluate \(\displaystyle\lim_{x\to0}\dfrac{\sin(4x)}{\sin(7x)}\).`, [
        r`Give each sine its matching denominator: \(\dfrac{\sin(4x)}{\sin(7x)}=\dfrac{\sin(4x)}{4x}\cdot\dfrac{7x}{\sin(7x)}\cdot\dfrac{4x}{7x}\).`,
        r`The first two factors each tend to 1 (the reciprocal of a limit of 1 is 1). The third is \(\dfrac47\) for \(x\neq0\).`,
      ], r`The limit is \(\dfrac47\).`),
      ex("stretch", "A limit at infinity by squeezing", r`Evaluate \(\displaystyle\lim_{x\to\infty}\dfrac{\sin x}{x}\).`, [
        r`This is <em>not</em> the fundamental limit: here \(x\to\infty\), not 0.`,
        r`For \(x\gt0\), divide \(-1\le\sin x\le1\) by \(x\): \(-\dfrac1x\le\dfrac{\sin x}{x}\le\dfrac1x\).`,
        r`\(\displaystyle\lim_{x\to\infty}\left(-\dfrac1x\right)=0\) and \(\displaystyle\lim_{x\to\infty}\dfrac1x=0\).`,
      ], r`By the squeeze theorem the limit is \(0\).`),

      sec("Common errors"),
      mistake("using the product law on a limit that does not exist", r`<p>\(\displaystyle\lim_{x\to0}x^2\sin\tfrac1x=\lim x^2\cdot\lim\sin\tfrac1x=0\cdot(\text{DNE})\). The product law requires both limits to exist. The answer 0 is right, but this argument earns nothing.</p>`),
      mistake(r`confusing \(x\to0\) with \(x\to\infty\)`, r`<p>\(\dfrac{\sin x}{x}\to1\) as \(x\to0\), but \(\to0\) as \(x\to\infty\). Read the subscript before reaching for a memorised limit.</p>`),
      mistake("mismatched arguments", r`<p>\(\displaystyle\lim_{x\to0}\dfrac{\sin(5x)}{x}\) is 5, not 1. The fundamental limit needs the same expression inside the sine and underneath it.</p>`),
      mistake("multiplying an inequality by a quantity that changes sign", r`<p>From \(-1\le\sin\tfrac1x\le1\), multiplying by \(x\) gives a <em>reversed</em> inequality when \(x\lt0\). Use \(|x|\).</p>`),

      sec("Write it so it scores"),
      justify(
        r`Show that \(\displaystyle\lim_{x\to0}x^4\cos\!\left(\dfrac2x\right)=0\).`,
        r`For all \(x\neq0\), \(-1\le\cos\!\left(\dfrac2x\right)\le1\). Since \(x^4\ge0\), multiplying gives \(-x^4\le x^4\cos\!\left(\dfrac2x\right)\le x^4\). Because \(\displaystyle\lim_{x\to0}(-x^4)=0\) and \(\displaystyle\lim_{x\to0}x^4=0\), the squeeze theorem gives \(\displaystyle\lim_{x\to0}x^4\cos\!\left(\dfrac2x\right)=0\).`,
        r`Three things are on the page: the bounding inequality, the two outer limits evaluated and shown equal, and the theorem named as the reason. Each is typically a separate point.`,
      ),
      exam(r`<p>In multiple choice, a squeeze question is often disguised as "\(g(x)\le f(x)\le h(x)\); which of the following must be true?" Evaluate the two outer limits at the stated point <strong>first</strong>. If they are equal you have the answer; if not, the limit of \(f\) is not determined.</p>`),

      sec("Practice"),
      pq(r`Evaluate \(\displaystyle\lim_{x\to0}\dfrac{\sin(8x)}{2x}\).`, r`\(\dfrac82\cdot\dfrac{\sin(8x)}{8x}\to4\).`, "core"),
      pq(r`Evaluate \(\displaystyle\lim_{x\to0}\dfrac{\tan x}{x}\).`, r`\(\dfrac{\tan x}{x}=\dfrac{\sin x}{x}\cdot\dfrac{1}{\cos x}\to1\cdot1=1\).`, "core"),
      pq(r`A function satisfies \(6-x^2\le g(x)\le6+x^2\) for all \(x\). Find \(\displaystyle\lim_{x\to0}g(x)\).`, r`Both bounds tend to 6, so by the squeeze theorem the limit is \(6\).`, "exam"),
      pq(r`A function satisfies \(2x\le k(x)\le x^2+2\) for all \(x\). Can \(\displaystyle\lim_{x\to0}k(x)\) be found from this alone?`, r`No. At 0 the bounds tend to 0 and 2, which are different, so the theorem gives no conclusion. (At \(x=1\) the bounds are 2 and 3, also different. The parabola \(x^2+2\) never meets the line \(2x\), because \(x^2-2x+2=(x-1)^2+1\gt0\).)`, "exam"),
      pq(r`Evaluate \(\displaystyle\lim_{x\to0}\dfrac{1-\cos x}{x^2}\).`, r`Multiply by \(\dfrac{1+\cos x}{1+\cos x}\): \(\dfrac{\sin^2x}{x^2(1+\cos x)}=\left(\dfrac{\sin x}{x}\right)^2\cdot\dfrac{1}{1+\cos x}\to1\cdot\dfrac12=\dfrac12\).`, "stretch"),
      pq(r`Show that \(\displaystyle\lim_{x\to0}x\sin\!\left(\dfrac1x\right)=0\).`, r`For \(x\neq0\), \(\left|\sin\tfrac1x\right|\le1\), so \(-|x|\le x\sin\tfrac1x\le|x|\). Both \(-|x|\) and \(|x|\) tend to 0 as \(x\to0\), so by the squeeze theorem the limit is 0.`, "stretch"),

      sec("Summary"),
      key([
        ["Squeeze", r`Bounds below and above with the <em>same</em> limit force the limit between.`],
        ["Source of bounds", r`\(-1\le\sin,\cos\le1\), multiplied by a non-negative factor.`],
        [r`\(\dfrac{\sin\theta}{\theta}\to1\)`, r`As \(\theta\to0\), in radians, with matching arguments.`],
        ["Three lines", r`Inequality, two equal outer limits, name the theorem.`],
      ]),
    ];
  },
});

// ───────────────────────── 1.7 ─────────────────────────
u1b["1.7"] = lesson({
  code: "1.7", unit: 1, official: "1.10", calc: "No calculator",
  title: "Where Graphs Break: Classifying Discontinuities",
  parts: () => {
    const rem = plot({ w: 250, h: 220, x: [-1, 5], y: [-1, 5], alt: "Line with a hole: removable discontinuity" });
    rem.curve((x) => 0.5 * x + 1.5, -0.6, 4.6).hole(3, 3);
    const jmp = plot({ w: 250, h: 220, x: [-1, 5], y: [-1, 5], alt: "Two branches at different heights: jump discontinuity" });
    jmp.curve((x) => 0.25 * x * x + 0.5, -0.6, 2).curve((x) => 6 - x, 2, 4.6).dot(2, 1.5).hole(2, 4);
    const inf = plot({ w: 250, h: 220, x: [-1, 5], y: [-3, 5], alt: "Curve with a vertical asymptote: infinite discontinuity" });
    inf.vline(2).curve((x) => 1 + 1 / (x - 2), -0.6, 1.9).curve((x) => 1 + 1 / (x - 2), 2.1, 4.6);
    return [
      lede(r`A function is discontinuous at a point when its graph cannot be drawn through that point without lifting the pen. That description is fine for a first impression and useless for earning marks. The exam wants the <em>type</em> of break, and it wants the type justified with limits. There are three types, and limits tell them apart cleanly.`),
      goals([
        r`Classify a discontinuity as removable, jump or infinite.`,
        r`Justify each classification with one-sided limits.`,
        r`Locate and classify every discontinuity of a rational function by factoring.`,
        r`Classify discontinuities of piecewise functions at their boundaries.`,
      ]),

      sec("The three types"),
      `<div class="apx-figrow">${figure(rem, r`<strong>Removable.</strong> The limit exists, but the function value is missing or different.`)}${figure(jmp, r`<strong>Jump.</strong> Both one-sided limits exist but are unequal.`)}${figure(inf, r`<strong>Infinite.</strong> At least one one-sided limit is \(\pm\infty\).`)}</div>`,
      table(
        ["Type", r`\(\displaystyle\lim_{x\to c^-}f(x)\) and \(\displaystyle\lim_{x\to c^+}f(x)\)`, r`\(\displaystyle\lim_{x\to c}f(x)\)`, "On the graph"],
        [
          ["Removable", "exist and are equal", r`exists, but \(\neq f(c)\) or \(f(c)\) undefined`, "a hole"],
          ["Jump", "exist and are different", "does not exist", "a step"],
          ["Infinite", r`at least one is \(\infty\) or \(-\infty\)`, "does not exist", "a vertical asymptote"],
        ],
      ),
      p(r`"Removable" is meant literally: redefining the function at that single point repairs it (Lesson 1.8). No single value can repair a jump or an infinite discontinuity.`),

      sec("Rational functions: factor first"),
      p(r`A rational function can only be discontinuous where its denominator is zero. Factor numerator and denominator completely, then sort each zero of the denominator.`),
      key([
        ["The factor cancels completely", r`<strong>Removable.</strong> There is a hole; find its height by substituting into the simplified expression.`],
        ["A factor remains in the denominator", r`<strong>Infinite.</strong> There is a vertical asymptote.`],
      ]),
      p(r`A zero of the denominator is therefore <em>not</em> automatically an asymptote. Always factor before deciding.`),

      sec("Piecewise functions: check the boundaries"),
      p(r`Each piece is usually continuous on its own interval. The only candidates for discontinuity are the points where the rule changes. At each boundary compute the left-hand limit (from the rule on the left), the right-hand limit (from the rule on the right), and the function value (from whichever rule includes the equals sign).`),

      sec("Worked examples"),
      ex("core", "A rational function with both kinds", r`Find and classify the discontinuities of \(f(x)=\dfrac{x^2-x-6}{x^2-4x+3}\).`, [
        r`Factor: \(f(x)=\dfrac{(x-3)(x+2)}{(x-3)(x-1)}\). The denominator is zero at \(x=3\) and \(x=1\).`,
        r`At \(x=3\) the factor cancels: \(\displaystyle\lim_{x\to3}f(x)=\lim_{x\to3}\dfrac{x+2}{x-1}=\dfrac52\). The limit exists and \(f(3)\) is undefined.`,
        r`At \(x=1\) the factor \((x-1)\) remains while the numerator tends to \(3\neq0\): \(\displaystyle\lim_{x\to1^+}f(x)=\infty\).`,
      ], r`Removable discontinuity at \(x=3\) (a hole at \(\left(3,\tfrac52\right)\)); infinite discontinuity at \(x=1\).`),
      ex("exam", "A piecewise function", r`Let \(g(x)=\begin{cases}x^2+1,&x\lt1\\4,&x=1\\3-x,&x\gt1\end{cases}\). Classify the discontinuity of \(g\) at \(x=1\).`, [
        r`\(\displaystyle\lim_{x\to1^-}g(x)=1^2+1=2\).`,
        r`\(\displaystyle\lim_{x\to1^+}g(x)=3-1=2\).`,
        r`The one-sided limits agree, so \(\displaystyle\lim_{x\to1}g(x)=2\). But \(g(1)=4\neq2\).`,
      ], r`\(g\) has a removable discontinuity at \(x=1\).`),
      ex("stretch", "An absolute value in the denominator", r`Classify the discontinuity of \(h(x)=\dfrac{x^2-4}{|x-2|}\) at \(x=2\).`, [
        r`For \(x\gt2\): \(|x-2|=x-2\), so \(h(x)=x+2\) and \(\displaystyle\lim_{x\to2^+}h(x)=4\).`,
        r`For \(x\lt2\): \(|x-2|=-(x-2)\), so \(h(x)=-(x+2)\) and \(\displaystyle\lim_{x\to2^-}h(x)=-4\).`,
        r`Both one-sided limits exist and they are not equal.`,
      ], r`\(h\) has a jump discontinuity at \(x=2\), even though the formula "looks rational".`),

      sec("Common errors"),
      mistake("\"undefined, so there is an asymptote\"", r`<p>\(\dfrac{x^2-9}{x-3}\) is undefined at 3 and has no asymptote there, only a hole. Undefined tells you <em>that</em> there is a discontinuity, never <em>which kind</em>.</p>`),
      mistake("cancelling and forgetting", r`<p>After simplifying \(\dfrac{(x-3)(x+2)}{(x-3)(x-1)}\) to \(\dfrac{x+2}{x-1}\), the original function is still undefined at \(x=3\). The simplified formula gives the hole's height; it does not fill the hole.</p>`),
      mistake("classifying from the picture alone", r`<p>"It is a jump because the graph jumps" restates the question. State the two one-sided limits.</p>`),

      sec("Write it so it scores"),
      justify(
        r`For \(g\) in the second example, a student is asked what type of discontinuity \(g\) has at \(x=1\) and to give a reason.`,
        r`\(g\) has a removable discontinuity at \(x=1\), because \(\displaystyle\lim_{x\to1^-}g(x)=2\) and \(\displaystyle\lim_{x\to1^+}g(x)=2\), so \(\displaystyle\lim_{x\to1}g(x)=2\) exists, but \(g(1)=4\neq2\).`,
        r`It names the type and supports it with the exact facts that define that type: the limit exists, and it differs from the function value.`,
      ),
      exam(r`<p>A favourite multiple-choice item gives a rational function and asks for the number of vertical asymptotes, or the values of \(x\) at which the function has a removable discontinuity. Both are answered by the same factoring. Do not count zeros of the denominator without cancelling first.</p>`),

      sec("Practice"),
      pq(r`Classify the discontinuity of \(f(x)=\dfrac{x^2-25}{x-5}\) at \(x=5\).`, r`\(f(x)=x+5\) for \(x\neq5\), so the limit is 10 and \(f(5)\) is undefined: removable.`, "core"),
      pq(r`Classify the discontinuity of \(f(x)=\dfrac{x+1}{x-4}\) at \(x=4\).`, r`The numerator tends to 5 and the denominator to 0, so the one-sided limits are \(\pm\infty\): infinite.`, "core"),
      pq(r`Find and classify all discontinuities of \(f(x)=\dfrac{x^2-4}{x^3-4x}\).`, r`\(f(x)=\dfrac{(x-2)(x+2)}{x(x-2)(x+2)}=\dfrac1x\) for \(x\neq\pm2\). Removable at \(x=2\) (limit \(\tfrac12\)) and at \(x=-2\) (limit \(-\tfrac12\)); infinite at \(x=0\).`, "exam"),
      pq(r`Let \(p(x)=\begin{cases}2x+3,&x\le-1\\x^2+2,&x\gt-1\end{cases}\). Classify the behaviour of \(p\) at \(x=-1\).`, r`Left limit: \(1\). Right limit: \(3\). They differ, so \(p\) has a jump discontinuity at \(x=-1\).`, "exam"),
      pq(r`For what value of \(a\) does \(f(x)=\dfrac{x^2+ax+12}{x-3}\) have a removable discontinuity at \(x=3\)?`, r`The numerator must vanish at 3: \(9+3a+12=0\), so \(a=-7\). Then \(x^2-7x+12=(x-3)(x-4)\) and the hole is at \((3,-1)\).`, "stretch"),
      pq(r`Classify the discontinuity of \(q(x)=\dfrac{x}{|x|}\) at \(x=0\).`, r`\(q(x)=1\) for \(x\gt0\) and \(-1\) for \(x\lt0\). The one-sided limits are \(1\) and \(-1\): a jump.`, "stretch"),

      sec("Summary"),
      key([
        ["Removable", r`Limit exists; value missing or wrong. A hole.`],
        ["Jump", r`One-sided limits exist and differ.`],
        ["Infinite", r`A one-sided limit is \(\pm\infty\). A vertical asymptote.`],
        ["Rational functions", r`Factor: cancelled factor → hole; surviving factor → asymptote.`],
      ]),
    ];
  },
});

// ───────────────────────── 1.8 ─────────────────────────
u1b["1.8"] = lesson({
  code: "1.8", unit: 1, official: "1.11–1.13", calc: "No calculator",
  title: "The Three-Part Continuity Test",
  parts: () => {
    const g = plot({ w: 380, h: 280, x: [-3, 5], y: [-3, 5], alt: "Three pieces joined continuously at x = -1 and x = 2" });
    g.curve((x) => 4 * x + 3, -1.4, -1, { color: C.gold }).curve((x) => x * x - 2, -1, 2).curve((x) => 10 - 4 * x, 2, 3.1, { color: C.green }).dot(-1, -1).dot(2, 2);
    return [
      lede(r`Continuity is the property that makes calculus work. The Intermediate Value Theorem, the Extreme Value Theorem, the Mean Value Theorem and the Fundamental Theorem all begin with the words "if \(f\) is continuous". On the exam you will be asked to verify continuity, to disprove it, and to choose constants that create it. All three tasks use one definition with three parts.`),
      goals([
        r`State the definition of continuity at a point and apply it as a three-part test.`,
        r`Identify the intervals on which a function is continuous.`,
        r`Remove a removable discontinuity by defining or redefining one value.`,
        r`Solve for one or two constants that make a piecewise function continuous.`,
      ]),

      sec("Continuity at a point"),
      def("Continuous at \\(x=c\\)", r`<p>A function \(f\) is continuous at \(x=c\) when all three of the following hold.</p><ol><li>\(f(c)\) is defined.</li><li>\(\displaystyle\lim_{x\to c}f(x)\) exists.</li><li>\(\displaystyle\lim_{x\to c}f(x)=f(c)\).</li></ol>`),
      p(r`Each discontinuity type from Lesson 1.7 is a failure of a particular part. A jump or infinite discontinuity fails part 2. A removable discontinuity passes part 2 and fails part 1 or part 3.`),
      p(r`For a piecewise function, the three parts compress into one line that the exam accepts as a full justification:`),
      disp(r`\lim_{x\to c^-}f(x)=\lim_{x\to c^+}f(x)=f(c).`),

      sec("Continuity on an interval"),
      p(r`A function is continuous on an open interval if it is continuous at every point of it. On a closed interval \([a,b]\), the endpoints are judged from inside only: \(\displaystyle\lim_{x\to a^+}f(x)=f(a)\) and \(\displaystyle\lim_{x\to b^-}f(x)=f(b)\).`),
      thm("Functions continuous on their domains", r`<p>Polynomial, rational, power and root, trigonometric, exponential and logarithmic functions are continuous at <strong>every point of their domains</strong>. Sums, differences, products, quotients (where the denominator is not zero) and compositions of continuous functions are continuous.</p>`),
      p(r`This theorem is what you cite when a question says "explain why \(f\) is continuous on \([a,b]\)": name the family and confirm the interval lies in the domain.`),

      sec("Removing a discontinuity"),
      p(r`If \(\displaystyle\lim_{x\to c}f(x)=L\) exists but \(f(c)\) is missing or wrong, define \(f(c)=L\). The new function is continuous at \(c\). For example, \(\dfrac{x^3-8}{x-2}\) is undefined at 2 with limit 12, so assigning the value 12 at \(x=2\) makes it continuous everywhere.`),

      sec("Worked examples"),
      ex("core", "Verifying continuity at a boundary", r`Let \(f(x)=\begin{cases}x^2-1,&x\le2\\2x-1,&x\gt2\end{cases}\). Is \(f\) continuous at \(x=2\)?`, [
        r`\(\displaystyle\lim_{x\to2^-}f(x)=2^2-1=3\).`,
        r`\(\displaystyle\lim_{x\to2^+}f(x)=2(2)-1=3\).`,
        r`\(f(2)=2^2-1=3\) (the top rule includes \(x=2\)).`,
      ], r`Yes: \(\displaystyle\lim_{x\to2^-}f(x)=\lim_{x\to2^+}f(x)=f(2)=3\).`),
      ex("exam", "One constant", r`Find the value of \(k\) that makes \(f(x)=\begin{cases}kx^2+1,&x\le3\\2x+k,&x\gt3\end{cases}\) continuous at \(x=3\).`, [
        r`Left-hand limit and function value: \(9k+1\).`,
        r`Right-hand limit: \(6+k\).`,
        r`Set them equal: \(9k+1=6+k\), so \(8k=5\).`,
      ], r`\(k=\dfrac58\). Check: \(9\cdot\tfrac58+1=\tfrac{53}{8}\) and \(6+\tfrac58=\tfrac{53}{8}\).`),
      ex("stretch", "Two constants, two boundaries", r`Find \(a\) and \(b\) so that \(f(x)=\begin{cases}ax+3,&x\lt-1\\x^2+b,&-1\le x\le2\\10-ax,&x\gt2\end{cases}\) is continuous for all real \(x\).`, [
        r`At \(x=-1\): left limit \(-a+3\); right limit and value \(1+b\). Continuity requires \(-a+3=1+b\).`,
        r`At \(x=2\): left limit and value \(4+b\); right limit \(10-2a\). Continuity requires \(4+b=10-2a\).`,
        r`From the first equation \(b=2-a\). Substitute into the second: \(6-a=10-2a\), so \(a=4\) and \(b=-2\).`,
        r`Check: at \(-1\) both sides give \(-1\); at \(2\) both sides give \(2\).`,
      ], r`\(a=4\), \(b=-2\).`),
      figure(g, r`The solution of the Stretch example: with \(a=4\) and \(b=-2\) the three pieces meet at \((-1,-1)\) and \((2,2)\).`),

      sec("Common errors"),
      mistake("checking only that the function is defined", r`<p>"\(f(2)=3\), so \(f\) is continuous at 2" verifies part 1 only. Continuity is a statement about the limit agreeing with the value.</p>`),
      mistake("setting formulas equal with no limits in sight", r`<p>Writing only \(9k+1=6+k\) may get the right \(k\) but leaves the reasoning unstated. Say what each side <em>is</em>: a left-hand limit, a right-hand limit, a function value.</p>`),
      mistake("continuous does not mean smooth", r`<p>\(|x|\) is continuous at 0 despite its corner. Continuity asks only that the pieces meet. Whether they meet smoothly is differentiability, in Unit 2.</p>`),

      sec("Write it so it scores"),
      justify(
        r`For \(f\) in the first example, justify that \(f\) is continuous at \(x=2\).`,
        r`\(\displaystyle\lim_{x\to2^-}f(x)=\lim_{x\to2^-}(x^2-1)=3\), \(\displaystyle\lim_{x\to2^+}f(x)=\lim_{x\to2^+}(2x-1)=3\), and \(f(2)=3\). Since \(\displaystyle\lim_{x\to2^-}f(x)=\lim_{x\to2^+}f(x)=f(2)\), \(f\) is continuous at \(x=2\).`,
        r`All three quantities are computed and shown, with limit notation, and the conclusion is tied to their equality. This exact structure appears in scoring guidelines year after year.`,
      ),
      exam(r`<p>Continuity is very often <strong>part (a)</strong> of a longer free-response question, worth one or two points, and the later parts (differentiability, the Mean Value Theorem, an integral) depend on it. Learn the one-line justification so that it costs you thirty seconds.</p>`),

      sec("Practice"),
      pq(r`Is \(f(x)=\begin{cases}3x-2,&x\lt1\\x^2,&x\ge1\end{cases}\) continuous at \(x=1\)? Justify.`, r`\(\displaystyle\lim_{x\to1^-}f(x)=1\), \(\displaystyle\lim_{x\to1^+}f(x)=1\), \(f(1)=1\). All three are equal, so \(f\) is continuous at \(x=1\).`, "core"),
      pq(r`On what intervals is \(f(x)=\dfrac{\sqrt{x+3}}{x-1}\) continuous?`, r`The root needs \(x\ge-3\) and the denominator needs \(x\neq1\). \(f\) is continuous on \([-3,1)\) and on \((1,\infty)\).`, "core"),
      pq(r`What value should be assigned to \(g(4)\) to make \(g(x)=\dfrac{\sqrt x-2}{x-4}\) continuous at \(x=4\)?`, r`\(\dfrac{\sqrt x-2}{(\sqrt x-2)(\sqrt x+2)}=\dfrac{1}{\sqrt x+2}\to\dfrac14\). Define \(g(4)=\dfrac14\).`, "exam"),
      pq(r`Find \(c\) so that \(f(x)=\begin{cases}cx+5,&x\lt2\\x^2-c,&x\ge2\end{cases}\) is continuous at \(x=2\).`, r`\(2c+5=4-c\), so \(3c=-1\) and \(c=-\dfrac13\).`, "exam"),
      pq(r`Find \(k\) so that \(f(x)=\begin{cases}\dfrac{\sin(kx)}{x},&x\neq0\\6-k,&x=0\end{cases}\) is continuous at \(x=0\).`, r`\(\displaystyle\lim_{x\to0}\dfrac{\sin(kx)}{x}=k\). Continuity needs \(k=6-k\), so \(k=3\).`, "stretch"),
      pq(r`Find \(a\) and \(b\) so that \(f(x)=\begin{cases}x+a,&x\lt0\\bx^2+2,&0\le x\le1\\3x+b,&x\gt1\end{cases}\) is continuous everywhere.`, r`At 0: \(a=2\). At 1: \(b+2=3+b\), which is impossible. No values of \(a\) and \(b\) make \(f\) continuous at \(x=1\); the question has no solution. (Always check that your system is consistent.)`, "stretch"),

      sec("Summary"),
      key([
        ["Three parts", r`\(f(c)\) defined; the limit exists; they are equal.`],
        ["One line", r`\(\displaystyle\lim_{x\to c^-}f=\lim_{x\to c^+}f=f(c)\).`],
        ["Standard families", r`Continuous everywhere on their domains.`],
        ["Constants", r`Match limits at each boundary; one equation per boundary.`],
      ]),
    ];
  },
});

// ───────────────────────── 1.9 ─────────────────────────
u1b["1.9"] = lesson({
  code: "1.9", unit: 1, official: "1.14–1.15", calc: "No calculator",
  title: "Unbounded Behaviour: Vertical and Horizontal Asymptotes",
  parts: () => {
    const fn = (x) => (2 * (x + 2)) / (x + 1);
    const g = plot({ w: 420, h: 320, x: [-7, 7], y: [-4, 8], alt: "Rational function with vertical asymptote x = -1, horizontal asymptote y = 2 and a hole at x = 2" });
    g.vline(-1).hline(2, { color: C.green }).curve(fn, -7, -1.05).curve(fn, -0.95, 7).hole(2, 8 / 3);
    g.label(-0.8, 7.2, "x = −1", { color: C.alt }).label(4.2, 1.3, "y = 2", { color: C.green });
    return [
      lede(r`Infinity enters limits in two different places, and keeping them apart is half the battle. When the <strong>output</strong> grows without bound as \(x\) approaches a number, the graph has a vertical asymptote. When the <strong>input</strong> grows without bound and the output settles, the graph has a horizontal asymptote. The exam defines both asymptotes by limits and expects you to justify them that way.`),
      goals([
        r`Determine the sign of an infinite limit by analysing factors.`,
        r`Justify vertical and horizontal asymptotes with limit statements.`,
        r`Evaluate limits at \(\pm\infty\) for rational, radical and exponential expressions.`,
        r`Compare growth rates of logarithmic, power and exponential functions.`,
      ]),

      sec("Infinite limits and vertical asymptotes"),
      p(r`\(\displaystyle\lim_{x\to c}f(x)=\infty\) means the values of \(f\) exceed every bound as \(x\to c\). It is a description of <em>how</em> the limit fails to exist, not a claim that it exists.`),
      def("Vertical asymptote", r`<p>The line \(x=c\) is a vertical asymptote of the graph of \(f\) if at least one of \(\displaystyle\lim_{x\to c^-}f(x)\), \(\displaystyle\lim_{x\to c^+}f(x)\) is \(\infty\) or \(-\infty\).</p>`),
      p(r`When substitution gives \(\dfrac{\text{nonzero}}{0}\), the limit is infinite on each side. To find the sign, work out the sign of every factor for \(x\) just to the relevant side of \(c\).`),

      sec("Limits at infinity and horizontal asymptotes"),
      def("Horizontal asymptote", r`<p>The line \(y=L\) is a horizontal asymptote of the graph of \(f\) if \(\displaystyle\lim_{x\to\infty}f(x)=L\) or \(\displaystyle\lim_{x\to-\infty}f(x)=L\).</p>`),
      p(r`A graph can have two different horizontal asymptotes, one for each direction, and it may cross a horizontal asymptote any number of times. The basic fact behind every calculation is \(\displaystyle\lim_{x\to\pm\infty}\dfrac{1}{x^n}=0\) for \(n\gt0\).`),
      thm("Rational functions at infinity", r`<p>Divide every term by the highest power of \(x\) <strong>in the denominator</strong>. The outcome depends only on the degrees.</p><ul><li>Numerator degree smaller: the limit is 0.</li><li>Degrees equal: the limit is the ratio of leading coefficients.</li><li>Numerator degree larger: the limit is \(\infty\) or \(-\infty\) (no horizontal asymptote).</li></ul>`),
      figure(g, r`\(f(x)=\dfrac{2x^2-8}{x^2-x-2}=\dfrac{2(x-2)(x+2)}{(x-2)(x+1)}\): vertical asymptote \(x=-1\), horizontal asymptote \(y=2\), and a hole at \(\left(2,\tfrac83\right)\).`),

      sec("Square roots and the sign of x"),
      p(r`\(\sqrt{x^2}=|x|\), not \(x\). So \(\sqrt{x^2}=x\) when \(x\to\infty\), but \(\sqrt{x^2}=-x\) when \(x\to-\infty\). This single fact decides the sign of the answer in every limit that mixes a square root with \(x\to-\infty\).`),

      sec("Relative growth rates"),
      p(r`As \(x\to\infty\), three families all tend to infinity, but at very different speeds:`),
      disp(r`\ln x\;\ll\;x^p\ (p\gt0)\;\ll\;e^{x}`),
      p(r`A ratio with the faster function underneath tends to 0, and with the faster function on top tends to \(\infty\). So \(\displaystyle\lim_{x\to\infty}\dfrac{x^{50}}{e^x}=0\) and \(\displaystyle\lim_{x\to\infty}\dfrac{\ln x}{\sqrt x}=0\). Also remember \(\displaystyle\lim_{x\to-\infty}e^x=0\).`),

      sec("Worked examples"),
      ex("core", "Sign of an infinite limit", r`Find \(\displaystyle\lim_{x\to2^+}\dfrac{x+1}{x-2}\) and \(\displaystyle\lim_{x\to2^-}\dfrac{x+1}{x-2}\).`, [
        r`Substitution gives \(\dfrac{3}{0}\): the numerator is near 3 (positive), the denominator near 0.`,
        r`For \(x\) slightly greater than 2, \(x-2\) is a small positive number: positive ÷ small positive.`,
        r`For \(x\) slightly less than 2, \(x-2\) is a small negative number: positive ÷ small negative.`,
      ], r`\(\displaystyle\lim_{x\to2^+}=\infty\) and \(\displaystyle\lim_{x\to2^-}=-\infty\). The line \(x=2\) is a vertical asymptote.`),
      ex("core", "A rational limit at infinity", r`Evaluate \(\displaystyle\lim_{x\to\infty}\dfrac{3x^2-x}{5x^2+4}\).`, [
        r`Divide numerator and denominator by \(x^2\): \(\dfrac{3-\frac1x}{5+\frac{4}{x^2}}\).`,
        r`As \(x\to\infty\), \(\tfrac1x\to0\) and \(\tfrac4{x^2}\to0\).`,
      ], r`The limit is \(\dfrac35\), so \(y=\dfrac35\) is a horizontal asymptote.`),
      ex("exam", "A square root as x → −∞", r`Evaluate \(\displaystyle\lim_{x\to-\infty}\dfrac{\sqrt{4x^2+x}}{3x-1}\).`, [
        r`Factor \(x^2\) out of the root: \(\sqrt{4x^2+x}=\sqrt{x^2}\sqrt{4+\tfrac1x}=|x|\sqrt{4+\tfrac1x}\).`,
        r`Since \(x\to-\infty\), \(|x|=-x\). The expression is \(\dfrac{-x\sqrt{4+\frac1x}}{x\left(3-\frac1x\right)}=\dfrac{-\sqrt{4+\frac1x}}{3-\frac1x}\).`,
        r`Let \(x\to-\infty\): \(\dfrac{-\sqrt4}{3}\).`,
      ], r`The limit is \(-\dfrac23\). (As \(x\to+\infty\) the same function tends to \(+\dfrac23\): two horizontal asymptotes.)`),
      ex("exam", "Exponentials in both directions", r`Find both horizontal asymptotes of \(f(x)=\dfrac{2e^x+5}{e^x-3}\).`, [
        r`As \(x\to\infty\): divide by \(e^x\) to get \(\dfrac{2+5e^{-x}}{1-3e^{-x}}\to\dfrac21=2\).`,
        r`As \(x\to-\infty\): \(e^x\to0\) directly, giving \(\dfrac{0+5}{0-3}=-\dfrac53\).`,
      ], r`Horizontal asymptotes \(y=2\) and \(y=-\dfrac53\).`),
      ex("stretch", "Infinity minus infinity", r`Evaluate \(\displaystyle\lim_{x\to\infty}\left(\sqrt{x^2+6x}-x\right)\).`, [
        r`Both terms tend to \(\infty\); their difference is indeterminate, <strong>not</strong> 0.`,
        r`Multiply by the conjugate over itself: \(\dfrac{(x^2+6x)-x^2}{\sqrt{x^2+6x}+x}=\dfrac{6x}{\sqrt{x^2+6x}+x}\).`,
        r`For \(x\gt0\), divide numerator and denominator by \(x=\sqrt{x^2}\): \(\dfrac{6}{\sqrt{1+\frac6x}+1}\).`,
      ], r`The limit is \(\dfrac{6}{1+1}=3\).`),

      sec("Common errors"),
      mistake(r`treating \(\infty\) as a number`, r`<p>\(\infty-\infty\) is not 0, \(\dfrac{\infty}{\infty}\) is not 1, and \(0\cdot\infty\) is not 0. Each is an indeterminate form that must be rewritten.</p>`),
      mistake(r`\(\sqrt{x^2}=x\) when \(x\) is negative`, r`<p>This turns \(-\dfrac23\) into \(+\dfrac23\) and is the classic wrong option in multiple choice. For \(x\to-\infty\), \(\sqrt{x^2}=-x\).`+`</p>`),
      mistake("declaring an asymptote without factoring", r`<p>In the figure's function the denominator is zero at \(x=2\) and \(x=-1\), but only \(x=-1\) is an asymptote. Cancel common factors before counting.</p>`),
      mistake("\"a graph never crosses its asymptote\"", r`<p>True for vertical asymptotes only. \(\dfrac{\sin x}{x}\) crosses its horizontal asymptote \(y=0\) infinitely often.</p>`),

      sec("Write it so it scores"),
      justify(
        r`For \(f(x)=\dfrac{2x^2-8}{x^2-x-2}\), write an equation for each vertical and horizontal asymptote, with justification.`,
        r`For \(x\neq2\), \(f(x)=\dfrac{2(x+2)}{x+1}\). Since \(\displaystyle\lim_{x\to-1^+}f(x)=\infty\), the line \(x=-1\) is a vertical asymptote. Since \(\displaystyle\lim_{x\to\infty}f(x)=2\) (and \(\displaystyle\lim_{x\to-\infty}f(x)=2\)), the line \(y=2\) is a horizontal asymptote. There is no asymptote at \(x=2\), because \(\displaystyle\lim_{x\to2}f(x)=\tfrac83\) is finite.`,
        r`Each asymptote is written as an <em>equation of a line</em> (\(x=-1\), not "\(-1\)") and is tied to the limit that defines it.`,
      ),
      exam(r`<p>Asymptotes are lines. An answer of "\(2\)" where "\(y=2\)" is required can lose the point. And when a question asks for <em>all</em> horizontal asymptotes, check \(x\to\infty\) and \(x\to-\infty\) separately whenever you see a square root, an exponential or an inverse tangent.</p>`),

      sec("Practice"),
      pq(r`Evaluate \(\displaystyle\lim_{x\to-3^-}\dfrac{x}{x+3}\).`, r`Numerator near \(-3\) (negative); denominator small negative. Negative ÷ negative: the limit is \(\infty\).`, "core"),
      pq(r`Evaluate \(\displaystyle\lim_{x\to\infty}\dfrac{7x^3-2x}{4-2x^3}\).`, r`Equal degrees: \(\dfrac{7}{-2}=-\dfrac72\).`, "core"),
      pq(r`Evaluate \(\displaystyle\lim_{x\to-\infty}\dfrac{5x^2+1}{x^3-8}\).`, r`Numerator degree is smaller: the limit is \(0\).`, "core"),
      pq(r`Evaluate \(\displaystyle\lim_{x\to1}\dfrac{4}{(x-1)^2}\).`, r`The denominator is a small <em>positive</em> number on both sides, so the limit is \(\infty\).`, "exam"),
      pq(r`Evaluate \(\displaystyle\lim_{x\to-\infty}\dfrac{6x-5}{\sqrt{9x^2+2}}\).`, r`\(\sqrt{9x^2+2}=|x|\sqrt{9+\tfrac2{x^2}}=-x\sqrt{9+\tfrac{2}{x^2}}\). The expression tends to \(\dfrac{6}{-3}=-2\).`, "exam"),
      pq(r`Find all asymptotes of \(f(x)=\dfrac{x^2-9}{x^2-2x-3}\).`, r`\(f(x)=\dfrac{(x-3)(x+3)}{(x-3)(x+1)}=\dfrac{x+3}{x+1}\) for \(x\neq3\). Vertical asymptote \(x=-1\); horizontal asymptote \(y=1\); a hole (not an asymptote) at \(\left(3,\tfrac32\right)\).`, "exam"),
      pq(r`Evaluate \(\displaystyle\lim_{x\to\infty}\dfrac{3e^{2x}-x^4}{e^{2x}+\ln x}\).`, r`\(e^{2x}\) dominates both \(x^4\) and \(\ln x\). Dividing by \(e^{2x}\): \(\dfrac{3-x^4e^{-2x}}{1+e^{-2x}\ln x}\to\dfrac{3}{1}=3\).`, "stretch"),
      pq(r`Evaluate \(\displaystyle\lim_{x\to\infty}\left(\sqrt{4x^2+3x}-2x\right)\).`, r`Conjugate: \(\dfrac{3x}{\sqrt{4x^2+3x}+2x}=\dfrac{3}{\sqrt{4+\frac3x}+2}\to\dfrac34\).`, "stretch"),

      sec("Summary"),
      key([
        ["Vertical asymptote", r`\(x=c\) where a one-sided limit is \(\pm\infty\). Find the sign factor by factor.`],
        ["Horizontal asymptote", r`\(y=L\) where \(f(x)\to L\) as \(x\to\infty\) or \(x\to-\infty\).`],
        ["Rational at infinity", r`Compare degrees; equal degrees give the ratio of leading coefficients.`],
        [r`\(\sqrt{x^2}=|x|\)`, r`Equal to \(-x\) when \(x\to-\infty\).`],
        ["Growth", r`\(\ln x\ll x^p\ll e^x\).`],
      ]),
    ];
  },
});

// ───────────────────────── 1.10 ─────────────────────────
u1b["1.10"] = lesson({
  code: "1.10", unit: 1, official: "1.16", calc: "No calculator",
  title: "Guaranteed Values: The Intermediate Value Theorem",
  parts: () => {
    const f = (x) => x ** 3 + x - 5;
    const a = plot({ w: 300, h: 260, x: [0, 3], y: [-5, 7], stepX: 0.5, tickEvery: 2, alt: "Continuous curve from (1,-3) to (2,5) crossing the x-axis" });
    a.curve(f, 0.6, 2.12).dot(1, -3).dot(2, 5).label(1.05, -3.9, "(1, −3)", { plain: true, size: 12 }).label(1.25, 5.3, "(2, 5)", { plain: true, size: 12 });
    const b = plot({ w: 300, h: 260, x: [0, 3], y: [-5, 7], stepX: 0.5, tickEvery: 2, alt: "Discontinuous graph from (1,-3) to (2,5) that jumps over the x-axis" });
    b.curve((x) => -3 + 1.2 * (x - 1), 0.6, 1.5).curve((x) => 5 - 2.4 * (2 - x), 1.5, 2.15).hole(1.5, -2.4).dot(1.5, 3.8).dot(1, -3).dot(2, 5);
    return [
      lede(r`If the temperature was 12 °C at dawn and 20 °C at noon, then at some moment in between it was exactly 17 °C. Nobody needs to have measured it. Temperature changes continuously, so it cannot get from 12 to 20 without passing through every value on the way. The Intermediate Value Theorem states this precisely, and it is the first of the "existence theorems" that the free-response section tests every year.`),
      goals([
        r`State the Intermediate Value Theorem with its hypothesis and conclusion.`,
        r`Use it to justify that an equation has a solution in an interval.`,
        r`Apply it to functions given by a table, including a difference of two functions.`,
        r`Explain what the theorem does <em>not</em> say.`,
      ]),

      sec("The theorem"),
      thm("Intermediate Value Theorem (IVT)", r`<p>If \(f\) is <strong>continuous on the closed interval \([a,b]\)</strong> and \(N\) is any number between \(f(a)\) and \(f(b)\), then there is at least one number \(c\) in \((a,b)\) such that \(f(c)=N\).</p>`),
      `<div class="apx-figrow">${figure(a, r`Continuous on \([1,2]\): the graph must cross every height between \(-3\) and \(5\), including 0.`)}${figure(b, r`Not continuous: the same endpoints, but the graph jumps over the heights between \(-2.4\) and \(3.8\) and never equals 0.`)}</div>`,

      sec("What it does and does not say"),
      key([
        ["It guarantees existence", r`At least one \(c\) exists. It does not say where, and there may be several.`],
        ["It needs continuity", r`On the whole closed interval. Without it the conclusion can fail, as the second graph shows.`],
        ["It is one-directional", r`If \(N\) is <em>not</em> between \(f(a)\) and \(f(b)\), the theorem says nothing. A solution may or may not exist.`],
      ]),

      sec("The three-step justification"),
      p(r`Every IVT argument on the exam has the same three parts. Missing any one of them loses the point.`),
      `<ol><li><strong>Continuity.</strong> State that \(f\) is continuous on \([a,b]\), and why (given, or a named family, or "differentiable, therefore continuous").</li><li><strong>Betweenness.</strong> Show the target value lies between \(f(a)\) and \(f(b)\), with the numbers: \(f(a)\lt N\lt f(b)\).</li><li><strong>Conclusion.</strong> "By the Intermediate Value Theorem, there is a \(c\) in \((a,b)\) with \(f(c)=N\)."</li></ol>`,

      sec("Worked examples"),
      ex("core", "A root of an equation", r`Show that \(x^3+x-5=0\) has a solution between 1 and 2.`, [
        r`Let \(f(x)=x^3+x-5\). \(f\) is a polynomial, so it is continuous on \([1,2]\).`,
        r`\(f(1)=-3\) and \(f(2)=5\), so \(f(1)\lt0\lt f(2)\).`,
      ], r`By the Intermediate Value Theorem there is a number \(c\) in \((1,2)\) with \(f(c)=0\).`),
      ex("exam", "Counting guaranteed solutions from a table", r`The function \(f\) is continuous on \([0,12]\). Selected values are shown.${table(["\\(t\\)", "0", "2", "5", "9", "12"], [["\\(f(t)\\)", "3", "−1", "4", "6", "2"]])}What is the least number of solutions to \(f(t)=1\) in \([0,12]\)?`, [
        r`Check each consecutive pair for 1 lying between the two values.`,
        r`\([0,2]\): from 3 to \(-1\). 1 is between. One solution guaranteed.`,
        r`\([2,5]\): from \(-1\) to 4. 1 is between. One more.`,
        r`\([5,9]\): from 4 to 6. 1 is not between. \([9,12]\): from 6 to 2. 1 is not between. Nothing guaranteed.`,
      ], r`At least \(2\) solutions. There could be more; the theorem only gives a minimum.`),
      ex("stretch", "Two functions that must be equal somewhere", r`Functions \(f\) and \(g\) are continuous for all real numbers, with \(f(1)=7\), \(f(4)=2\), \(g(1)=3\) and \(g(4)=6\). Show that there is a value \(c\) in \((1,4)\) at which \(f(c)=g(c)\).`, [
        r`Define \(h(x)=f(x)-g(x)\). A difference of continuous functions is continuous, so \(h\) is continuous on \([1,4]\).`,
        r`\(h(1)=7-3=4\) and \(h(4)=2-6=-4\), so \(h(4)\lt0\lt h(1)\).`,
        r`By the Intermediate Value Theorem there is a \(c\) in \((1,4)\) with \(h(c)=0\).`,
      ], r`At that \(c\), \(f(c)-g(c)=0\), so \(f(c)=g(c)\).`),

      sec("Common errors"),
      mistake("leaving out continuity", r`<p>"\(f(1)=-3\) and \(f(2)=5\), so there is a root" is an incomplete argument and earns no credit. The hypothesis must be stated explicitly, even when it seems obvious.</p>`),
      mistake("\"exactly one\"", r`<p>The theorem says <em>at least one</em>. Claiming a unique solution needs more information (for instance, that the function is increasing).</p>`),
      mistake("running the theorem backwards", r`<p>If \(f(a)\) and \(f(b)\) are both positive, it does <strong>not</strong> follow that \(f\) has no zero in \((a,b)\). The graph may dip below the axis and come back.</p>`),
      mistake("citing the wrong theorem", r`<p>The IVT is about <em>function values</em> between \(f(a)\) and \(f(b)\). The Mean Value Theorem (Unit 5) is about a <em>derivative</em> equalling an average rate of change. Questions often place them side by side to see whether you can tell which applies.</p>`),

      sec("Write it so it scores"),
      justify(
        r`A differentiable function \(P\) has \(P(3)=40\) and \(P(8)=15\). Must there be a time \(t\) in \(3\lt t\lt8\) at which \(P(t)=22\)? Justify your answer.`,
        r`Yes. \(P\) is differentiable, so \(P\) is continuous on \([3,8]\). Since \(P(8)=15\lt22\lt40=P(3)\), the Intermediate Value Theorem guarantees a time \(t\) in \((3,8)\) with \(P(t)=22\).`,
        r`A decision, the hypothesis with its reason (differentiable implies continuous), the inequality with numbers, and the theorem named. "Differentiable" is how the exam usually hands you continuity, so learn to convert it.`,
      ),
      exam(r`<p>When a free-response part begins "Is there a time… ?" or "Must there be a value… ?" and asks you to <strong>justify</strong>, it is almost always an existence theorem. If the target is a value of the function itself, it is the IVT. Start your answer with "Yes" or "No".</p>`),

      sec("Practice"),
      pq(r`Show that \(x^4-3x-1=0\) has a solution in \((1,2)\).`, r`\(f(x)=x^4-3x-1\) is a polynomial, hence continuous on \([1,2]\). \(f(1)=-3\lt0\lt9=f(2)\). By the IVT there is \(c\) in \((1,2)\) with \(f(c)=0\).`, "core"),
      pq(r`\(f\) is continuous on \([2,6]\) with \(f(2)=-4\) and \(f(6)=10\). Which of the values \(-5,\ 0,\ 7,\ 12\) must \(f\) take on \((2,6)\)?`, r`Only values strictly between \(-4\) and \(10\) are guaranteed: \(0\) and \(7\).`, "core"),
      pq(r`\(g\) is continuous on \([0,10]\) with values \(g(0)=5,\ g(3)=-2,\ g(6)=1,\ g(8)=-3,\ g(10)=4\). What is the least number of zeros of \(g\) in \([0,10]\)?`, r`Sign changes occur on \([0,3]\), \([3,6]\), \([6,8]\) and \([8,10]\): at least \(4\) zeros.`, "exam"),
      pq(r`\(f(x)=\dfrac{1}{x-2}\) has \(f(1)=-1\) and \(f(3)=1\). Does the IVT guarantee a zero of \(f\) in \((1,3)\)?`, r`No. \(f\) is not continuous on \([1,3]\) (it is undefined at 2), so the theorem does not apply. In fact \(f\) is never zero.`, "exam"),
      pq(r`Show that the equation \(\cos x=x\) has a solution in \(\left(0,\tfrac{\pi}{2}\right)\).`, r`Let \(h(x)=\cos x-x\), continuous on \(\left[0,\tfrac\pi2\right]\) as a difference of continuous functions. \(h(0)=1\gt0\) and \(h\!\left(\tfrac\pi2\right)=-\tfrac\pi2\lt0\). By the IVT there is \(c\) in \(\left(0,\tfrac\pi2\right)\) with \(h(c)=0\), that is, \(\cos c=c\).`, "stretch"),
      pq(r`\(f\) is continuous on \([0,1]\) with \(0\le f(x)\le1\) for all \(x\) in \([0,1]\), and \(f(0)\neq0\), \(f(1)\neq1\). Show that \(f(c)=c\) for some \(c\) in \((0,1)\).`, r`Let \(h(x)=f(x)-x\), continuous on \([0,1]\). \(h(0)=f(0)\gt0\) and \(h(1)=f(1)-1\lt0\). By the IVT, \(h(c)=0\) for some \(c\) in \((0,1)\), so \(f(c)=c\).`, "stretch"),

      sec("Summary"),
      key([
        ["Hypothesis", r`\(f\) continuous on the closed interval \([a,b]\).`],
        ["Conclusion", r`Every value between \(f(a)\) and \(f(b)\) is taken at least once in \((a,b)\).`],
        ["Three steps", r`Continuity, betweenness with numbers, name the theorem.`],
        ["Equal functions", r`Apply the theorem to the difference \(f-g\).`],
      ]),
    ];
  },
});
