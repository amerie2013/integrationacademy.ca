// AP Calculus AB exam prep — Unit 2 (The Derivative), lessons 2.5–2.8.
// Original wording, examples, numbers and figures throughout (see u1a for notes).
import { r, lesson, lede, goals, sec, p, disp, def, thm, exam, mistake, justify, ex, pq, key, table } from "./apcalc/kit.mjs";
import { plot, figure, C } from "./apcalc/fig.mjs";

export const u2b = {};

// ───────────────────────── 2.5 ─────────────────────────
u2b["2.5"] = lesson({
  code: "2.5", unit: 2, official: "2.5–2.6", calc: "No calculator",
  title: "Power, Sum and Constant-Multiple Rules",
  parts: () => {
    const g = plot({ w: 380, h: 300, x: [-3, 3], y: [-4, 4], alt: "Graph of y = x cubed minus 3x with horizontal tangents at x = -1 and x = 1" });
    g.seg(-1.9, 2, -0.1, 2, { color: C.alt, width: 1.8 }).seg(0.1, -2, 1.9, -2, { color: C.alt, width: 1.8 }).curve((x) => x ** 3 - 3 * x, -2.2, 2.2).dot(-1, 2).dot(1, -2);
    g.label(-2.6, 2.6, "(−1, 2)", { plain: true, size: 12 }).label(1.15, -2.7, "(1, −2)", { plain: true, size: 12 });
    return [
      lede(r`Computing derivatives from the limit definition is how the subject is built, and nobody does it for a living. The definition yields a small set of rules, and from this lesson on you differentiate by rule. The first three rules handle every polynomial and every power of \(x\), including the roots and reciprocals that the exam likes to disguise.`),
      goals([
        r`Differentiate constants, powers, constant multiples, sums and differences.`,
        r`Rewrite roots and reciprocals as powers before differentiating.`,
        r`Write equations of tangent and normal lines.`,
        r`Find where a graph has a horizontal tangent or a tangent of given slope.`,
      ]),

      sec("The rules"),
      thm("Basic differentiation rules", r`<p>For constants \(c\) and \(n\), and differentiable functions \(f\) and \(g\):</p>
        <ul>
          <li><strong>Constant:</strong> \(\dfrac{d}{dx}[c]=0\)</li>
          <li><strong>Power:</strong> \(\dfrac{d}{dx}\left[x^n\right]=n\,x^{n-1}\) for every real number \(n\)</li>
          <li><strong>Constant multiple:</strong> \(\dfrac{d}{dx}\big[c\,f(x)\big]=c\,f'(x)\)</li>
          <li><strong>Sum and difference:</strong> \(\dfrac{d}{dx}\big[f(x)\pm g(x)\big]=f'(x)\pm g'(x)\)</li>
        </ul>`),
      p(r`"Every real number \(n\)" is the important phrase. The power rule works unchanged for negative and fractional exponents, which is why the first step with a root or a reciprocal is always to rewrite it.`),
      table(
        ["Given", "Rewrite as", "Derivative", "Tidied"],
        [
          [r`\(\sqrt x\)`, r`\(x^{1/2}\)`, r`\(\tfrac12x^{-1/2}\)`, r`\(\dfrac{1}{2\sqrt x}\)`],
          [r`\(\dfrac{1}{x}\)`, r`\(x^{-1}\)`, r`\(-x^{-2}\)`, r`\(-\dfrac{1}{x^2}\)`],
          [r`\(\dfrac{5}{x^3}\)`, r`\(5x^{-3}\)`, r`\(-15x^{-4}\)`, r`\(-\dfrac{15}{x^4}\)`],
          [r`\(\sqrt[3]{x^2}\)`, r`\(x^{2/3}\)`, r`\(\tfrac23x^{-1/3}\)`, r`\(\dfrac{2}{3\sqrt[3]{x}}\)`],
        ],
      ),
      p(r`There is no rule yet for products or quotients. For now, a product must be multiplied out and a quotient with a single-term denominator divided through <em>before</em> differentiating.`),

      sec("Tangent and normal lines"),
      p(r`The tangent line at \(x=a\) has slope \(f'(a)\). The <strong>normal line</strong> is perpendicular to it at the same point, so its slope is the negative reciprocal, \(-\dfrac{1}{f'(a)}\) (when \(f'(a)\neq0\)).`),
      p(r`A tangent is <strong>horizontal</strong> where \(f'(x)=0\). More generally, to find where a tangent has a given slope \(m\), solve \(f'(x)=m\).`),
      figure(g, r`\(y=x^3-3x\) has \(y'=3x^2-3\), which is zero at \(x=\pm1\): horizontal tangents at \((-1,2)\) and \((1,-2)\).`),

      sec("Worked examples"),
      ex("core", "A polynomial", r`Differentiate \(f(x)=4x^5-3x^2+7x-9\).`, [
        r`Term by term: \(4\cdot5x^4-3\cdot2x+7-0\).`,
      ], r`\(f'(x)=20x^4-6x+7\).`),
      ex("exam", "Rewrite first", r`Differentiate \(f(x)=6\sqrt x-\dfrac{4}{x^2}+\dfrac{1}{3x}\).`, [
        r`Rewrite: \(f(x)=6x^{1/2}-4x^{-2}+\tfrac13x^{-1}\).`,
        r`Differentiate: \(6\cdot\tfrac12x^{-1/2}-4(-2)x^{-3}+\tfrac13(-1)x^{-2}\).`,
      ], r`\(f'(x)=3x^{-1/2}+8x^{-3}-\tfrac13x^{-2}=\dfrac{3}{\sqrt x}+\dfrac{8}{x^3}-\dfrac{1}{3x^2}\).`),
      ex("exam", "Divide through first", r`Differentiate \(f(x)=\dfrac{x^3-4x+2}{x}\).`, [
        r`The denominator is a single term, so divide each term: \(f(x)=x^2-4+2x^{-1}\).`,
        r`Differentiate: \(2x-0-2x^{-2}\).`,
      ], r`\(f'(x)=2x-\dfrac{2}{x^2}\).`),
      ex("exam", "Tangent and normal", r`Write equations for the tangent line and the normal line to \(y=x^3-2x\) at \(x=2\).`, [
        r`Point: \(y(2)=8-4=4\), so \((2,4)\).`,
        r`Slope: \(y'=3x^2-2\), so \(y'(2)=10\).`,
        r`Normal slope: \(-\dfrac{1}{10}\).`,
      ], r`Tangent: \(y-4=10(x-2)\). Normal: \(y-4=-\dfrac1{10}(x-2)\).`),
      ex("stretch", "Tangents with a prescribed slope", r`Find every point on \(y=x^3-3x\) where the tangent line is parallel to \(y=9x+4\).`, [
        r`Parallel lines have equal slopes, so we need \(y'=9\).`,
        r`\(3x^2-3=9\) gives \(x^2=4\), so \(x=2\) or \(x=-2\).`,
        r`\(y(2)=8-6=2\) and \(y(-2)=-8+6=-2\).`,
      ], r`The points are \((2,2)\) and \((-2,-2)\).`),

      sec("Common errors"),
      mistake("differentiating a constant as if it were a variable", r`<p>\(\dfrac{d}{dx}\left[\pi^2\right]=0\), not \(2\pi\). So is \(\dfrac{d}{dx}\left[e^3\right]\). If there is no \(x\), the derivative is zero.</p>`),
      mistake("the wrong direction with negative exponents", r`<p>\(\dfrac{d}{dx}\left[x^{-2}\right]=-2x^{-3}\), not \(-2x^{-1}\). Subtracting 1 from \(-2\) gives \(-3\).</p>`),
      mistake("differentiating top and bottom separately", r`<p>\(\dfrac{d}{dx}\left[\dfrac{5}{x^2}\right]\) is not \(\dfrac{0}{2x}\) or \(\dfrac{5}{2x}\). Rewrite as \(5x^{-2}\) first.</p>`),
      mistake("using the derivative as the y-coordinate", r`<p>In the tangent-line example the point is \((2,4)\) from \(y\), and 10 is the slope from \(y'\). Keep the two calculations in separate lines.</p>`),

      sec("Write it so it scores"),
      justify(
        r`Write an equation for the line tangent to the graph of \(f(x)=2x^2-3x\) at \(x=1\).`,
        r`\(f(1)=-1\). \(f'(x)=4x-3\), so \(f'(1)=1\). An equation of the tangent line is \(y-(-1)=1\,(x-1)\).`,
        r`The function value, the derivative and its value at the point are each shown, so a reader can award the slope point and the equation point separately. An answer of just "\(y=x-2\)" risks both.`,
      ),
      exam(r`<p>Leave derivatives unsimplified unless the question needs the simplified form. \(3x^{-1/2}+8x^{-3}-\tfrac13x^{-2}\) is a complete answer; rewriting it with radicals and fractions adds only the chance of an error.</p>`),

      sec("Practice"),
      pq(r`Differentiate \(f(x)=x^7-5x^3+2\).`, r`\(f'(x)=7x^6-15x^2\).`, "core"),
      pq(r`Differentiate \(f(x)=8\sqrt[3]{x}\).`, r`\(f(x)=8x^{1/3}\), so \(f'(x)=\tfrac83x^{-2/3}\).`, "core"),
      pq(r`Differentiate \(f(x)=\dfrac{5}{x^3}\).`, r`\(f(x)=5x^{-3}\), so \(f'(x)=-15x^{-4}=-\dfrac{15}{x^4}\).`, "core"),
      pq(r`Differentiate \(f(x)=(2x+1)^2\).`, r`Expand: \(4x^2+4x+1\), so \(f'(x)=8x+4\).`, "exam"),
      pq(r`Differentiate \(f(x)=\dfrac{x^2+\sqrt x}{x}\).`, r`\(f(x)=x+x^{-1/2}\), so \(f'(x)=1-\tfrac12x^{-3/2}\).`, "exam"),
      pq(r`For what value of \(k\) is the line \(y=4x+k\) tangent to the parabola \(y=x^2\)?`, r`The slope must be 4: \(2x=4\), so \(x=2\) and the point is \((2,4)\). Then \(4=8+k\), so \(k=-4\).`, "stretch"),
      pq(r`The function \(g(x)=ax^2+bx\) satisfies \(g(1)=5\) and \(g'(1)=8\). Find \(a\) and \(b\).`, r`\(a+b=5\) and \(2a+b=8\). Subtracting, \(a=3\), so \(b=2\).`, "stretch"),

      sec("Summary"),
      key([
        ["Power rule", r`\(\dfrac{d}{dx}[x^n]=nx^{n-1}\), any real \(n\).`],
        ["Rewrite first", r`Roots and reciprocals become powers; products are expanded.`],
        ["Normal line", r`Slope \(-\dfrac{1}{f'(a)}\).`],
        ["Given slope", r`Solve \(f'(x)=m\); horizontal means \(m=0\).`],
      ]),
    ];
  },
});

// ───────────────────────── 2.6 ─────────────────────────
u2b["2.6"] = lesson({
  code: "2.6", unit: 2, official: "2.7", calc: "No calculator",
  title: "Derivatives of Sine, Cosine, eˣ and ln x",
  parts: () => {
    const g = plot({ w: 420, h: 280, x: [-1, 7], y: [-1.5, 1.5], stepY: 0.5, tickEvery: 2, alt: "Graphs of sine and cosine" });
    g.curve(Math.cos, -0.8, 6.8, { color: C.alt, width: 2 }).curve(Math.sin, -0.8, 6.8).dot(Math.PI / 2, 1).dot(Math.PI / 2, 0, { color: C.alt });
    g.label(2.2, 1.18, "y = sin x").label(5.2, 1.18, "y = cos x", { color: C.alt });
    return [
      lede(r`Four functions outside the power family appear in nearly every exam question: sine, cosine, the natural exponential and the natural logarithm. Their derivatives are short enough to memorise in a minute, and the exam assumes they are automatic. This lesson states them, shows where they come from, and practises the errors out of them.`),
      goals([
        r`Differentiate \(\sin x\), \(\cos x\), \(e^x\) and \(\ln x\) and combinations of them.`,
        r`Explain how each derivative follows from a limit.`,
        r`Use logarithm and exponent laws to simplify before differentiating.`,
        r`Evaluate limits that are these derivatives in disguise.`,
      ]),

      sec("The four derivatives"),
      thm("Derivatives of the basic transcendental functions", r`${disp(r`\frac{d}{dx}[\sin x]=\cos x\qquad\frac{d}{dx}[\cos x]=-\sin x\qquad\frac{d}{dx}\left[e^x\right]=e^x\qquad\frac{d}{dx}[\ln x]=\frac1x\ \ (x\gt0)`)}<p>with \(x\) in radians.</p>`),
      figure(g, r`The height of the cosine graph (red) is the slope of the sine graph (blue). At \(x=\tfrac\pi2\) sine is at its peak, where its tangent is horizontal, and cosine is 0.`),

      sec("Where they come from"),
      p(r`For sine, apply the definition and the angle-sum identity \(\sin(x+h)=\sin x\cos h+\cos x\sin h\):`),
      disp(r`\frac{\sin(x+h)-\sin x}{h}=\sin x\cdot\frac{\cos h-1}{h}+\cos x\cdot\frac{\sin h}{h}\ \longrightarrow\ \sin x\cdot0+\cos x\cdot1.`),
      p(r`The two limits used are exactly the fundamental limits of Lesson 1.6, which is why radians are required. For the exponential, \(\dfrac{e^{x+h}-e^x}{h}=e^x\cdot\dfrac{e^h-1}{h}\), and \(e\) is the one base for which \(\dfrac{e^h-1}{h}\to1\). So \(e^x\) is its own derivative: at every point, <strong>its slope equals its height</strong>.`),

      sec("Simplify before differentiating"),
      p(r`Until the chain rule arrives in Unit 3, anything more complicated than a bare \(x\) inside these functions must be simplified with algebra first.`),
      table(
        ["Given", "Law used", "Rewritten", "Derivative"],
        [
          [r`\(\ln\left(x^5\right)\)`, r`\(\ln(a^n)=n\ln a\)`, r`\(5\ln x\)`, r`\(\dfrac5x\)`],
          [r`\(\ln(3x)\)`, r`\(\ln(ab)=\ln a+\ln b\)`, r`\(\ln3+\ln x\)`, r`\(\dfrac1x\)`],
          [r`\(e^{x+2}\)`, r`\(e^{a+b}=e^ae^b\)`, r`\(e^2\cdot e^x\)`, r`\(e^{x+2}\)`],
        ],
      ),

      sec("Worked examples"),
      ex("core", "A combination", r`Differentiate \(f(x)=3\sin x-2\cos x+5e^x\).`, [
        r`Term by term: \(3\cos x-2(-\sin x)+5e^x\).`,
      ], r`\(f'(x)=3\cos x+2\sin x+5e^x\).`),
      ex("exam", "Evaluating at a point", r`Let \(f(x)=4\ln x-x^3+e^x\). Find \(f'(1)\).`, [
        r`\(f'(x)=\dfrac4x-3x^2+e^x\).`,
        r`\(f'(1)=4-3+e\).`,
      ], r`\(f'(1)=1+e\).`),
      ex("exam", "Horizontal tangents on an interval", r`Find all \(x\) in \([0,2\pi]\) at which the graph of \(y=x+2\sin x\) has a horizontal tangent.`, [
        r`\(y'=1+2\cos x\).`,
        r`Set \(y'=0\): \(\cos x=-\dfrac12\).`,
        r`On \([0,2\pi]\), cosine equals \(-\tfrac12\) in the second and third quadrants.`,
      ], r`\(x=\dfrac{2\pi}{3}\) and \(x=\dfrac{4\pi}{3}\).`),
      ex("exam", "A disguised derivative", r`Evaluate \(\displaystyle\lim_{h\to0}\dfrac{\sin\left(\frac\pi3+h\right)-\sin\frac\pi3}{h}\).`, [
        r`This is \(f'\!\left(\tfrac\pi3\right)\) for \(f(x)=\sin x\).`,
        r`\(f'(x)=\cos x\), so the limit is \(\cos\dfrac\pi3\).`,
      ], r`The limit is \(\dfrac12\).`),
      ex("stretch", "A logarithm that needs unpacking", r`Differentiate \(f(x)=\ln\!\left(\dfrac{x^2}{e^x}\right)\) for \(x\gt0\).`, [
        r`Use the laws of logarithms: \(\ln\!\left(\dfrac{x^2}{e^x}\right)=\ln\left(x^2\right)-\ln\left(e^x\right)=2\ln x-x\).`,
        r`Differentiate: \(\dfrac2x-1\).`,
      ], r`\(f'(x)=\dfrac2x-1\).`),

      sec("Common errors"),
      mistake("the sign on cosine", r`<p>\(\dfrac{d}{dx}[\cos x]=-\sin x\). The derivatives of the "co-" functions carry a minus sign, here and in Lesson 2.8.</p>`),
      mistake(r`the power rule on \(e^x\)`, r`<p>\(\dfrac{d}{dx}\left[e^x\right]\) is \(e^x\), not \(x\,e^{x-1}\). The power rule is for a variable base and constant exponent (\(x^n\)); here the base is constant and the exponent varies. Compare \(\dfrac{d}{dx}\left[x^e\right]=e\,x^{e-1}\).</p>`),
      mistake("constants in costume", r`<p>\(e^2\), \(\ln5\) and \(\sin\tfrac\pi4\) are numbers. Their derivatives are 0.</p>`),
      mistake(r`\(\dfrac{d}{dx}[\ln(3x)]=\dfrac{1}{3x}\)`, r`<p>\(\ln(3x)=\ln3+\ln x\), whose derivative is \(\dfrac1x\). (The chain rule gives the same result later.)</p>`),

      sec("Write it so it scores"),
      justify(
        r`Write an equation for the line tangent to the graph of \(y=2e^x+x\) at \(x=0\).`,
        r`\(y(0)=2e^0+0=2\). \(y'=2e^x+1\), so \(y'(0)=3\). An equation of the tangent line is \(y-2=3(x-0)\).`,
        r`Point, derivative, slope, line: each on the page. Note \(e^0=1\) is used twice; forgetting it (and writing \(y(0)=0\)) is the usual slip.`,
      ),
      exam(r`<p>Exact values are expected in the no-calculator parts. Leave \(1+e\) as \(1+e\) and \(\cos\tfrac\pi3\) as \(\tfrac12\); know the sine and cosine of \(0,\tfrac\pi6,\tfrac\pi4,\tfrac\pi3,\tfrac\pi2\) and their relatives around the circle without thinking.</p>`),

      sec("Practice"),
      pq(r`Differentiate \(f(x)=7\cos x+2\ln x\).`, r`\(f'(x)=-7\sin x+\dfrac2x\).`, "core"),
      pq(r`Differentiate \(f(x)=e^x-x^e\).`, r`\(f'(x)=e^x-e\,x^{e-1}\).`, "core"),
      pq(r`Let \(f(x)=4\sin x-2\sqrt3\cos x\). Find \(f'\!\left(\dfrac\pi6\right)\).`, r`\(f'(x)=4\cos x+2\sqrt3\sin x\), so \(f'\!\left(\tfrac\pi6\right)=4\cdot\tfrac{\sqrt3}{2}+2\sqrt3\cdot\tfrac12=3\sqrt3\).`, "exam"),
      pq(r`Write an equation for the tangent line to \(y=\ln x\) at \(x=e\).`, r`Point \((e,1)\); slope \(\dfrac1e\). \(y-1=\dfrac1e(x-e)\), which simplifies to \(y=\dfrac{x}{e}\).`, "exam"),
      pq(r`At what value of \(x\) does the graph of \(y=e^x-2x\) have a horizontal tangent?`, r`\(y'=e^x-2=0\) gives \(x=\ln2\).`, "exam"),
      pq(r`Evaluate \(\displaystyle\lim_{h\to0}\dfrac{\ln(1+h)}{h}\).`, r`Since \(\ln1=0\), this is \(\dfrac{\ln(1+h)-\ln1}{h}\), the derivative of \(\ln x\) at \(x=1\): \(\dfrac11=1\).`, "stretch"),
      pq(r`Find all \(x\) in \([0,2\pi]\) at which \(y=\sin x+\cos x\) has a horizontal tangent.`, r`\(y'=\cos x-\sin x=0\) when \(\tan x=1\): \(x=\dfrac\pi4\) and \(x=\dfrac{5\pi}{4}\).`, "stretch"),

      sec("Summary"),
      key([
        [r`\(\sin x\)`, r`derivative \(\cos x\)`],
        [r`\(\cos x\)`, r`derivative \(-\sin x\)`],
        [r`\(e^x\)`, r`derivative \(e^x\)`],
        [r`\(\ln x\)`, r`derivative \(\dfrac1x\), for \(x\gt0\)`],
      ]),
    ];
  },
});

// ───────────────────────── 2.7 ─────────────────────────
u2b["2.7"] = lesson({
  code: "2.7", unit: 2, official: "2.8–2.9", calc: "No calculator",
  title: "Differentiating Products and Quotients",
  parts: () => [
    lede(r`The derivative of a sum is the sum of the derivatives. It is natural to hope the same holds for products, and it does not: for \(x\cdot x\) the "product of derivatives" would be \(1\cdot1=1\), while the true derivative of \(x^2\) is \(2x\). Products and quotients need their own rules. The exam tests them with formulas and, just as often, with functions known only through a table of values.`),
    goals([
      r`Apply the product rule and the quotient rule accurately.`,
      r`Decide when algebra makes a rule unnecessary.`,
      r`Differentiate products and quotients of functions given by a table.`,
      r`Combine the two rules with every derivative learned so far.`,
    ]),

    sec("The product rule"),
    thm("Product rule", r`<p>If \(f\) and \(g\) are differentiable, then</p>${disp(r`\frac{d}{dx}\big[f(x)\,g(x)\big]=f'(x)\,g(x)+f(x)\,g'(x).`)}`),
    p(r`In words: differentiate each factor in turn, leaving the other alone, and add. The order of the two terms does not matter, since they are added.`),

    sec("The quotient rule"),
    thm("Quotient rule", r`<p>If \(f\) and \(g\) are differentiable and \(g(x)\neq0\), then</p>${disp(r`\frac{d}{dx}\left[\frac{f(x)}{g(x)}\right]=\frac{f'(x)\,g(x)-f(x)\,g'(x)}{\big[g(x)\big]^2}.`)}`),
    p(r`Here the order <strong>does</strong> matter, because of the subtraction: the term that starts with the derivative of the <em>numerator</em> comes first. The denominator is squared and otherwise left alone.`),

    sec("When not to use them"),
    key([
      ["A constant factor", r`\(5\sin x\) needs the constant-multiple rule, not the product rule.`],
      ["A constant numerator", r`\(\dfrac{5}{x^3}=5x^{-3}\): use the power rule.`],
      ["A single-term denominator", r`\(\dfrac{x^3-4x}{x}=x^2-4\): divide first.`],
    ]),

    sec("Functions given by a table"),
    p(r`The rules need only four numbers at the point in question: \(f\), \(f'\), \(g\) and \(g'\). The exam often supplies exactly those in a table and nothing else.`),
    table(
      [r`\(x\)`, r`\(f(x)\)`, r`\(f'(x)\)`, r`\(g(x)\)`, r`\(g'(x)\)`],
      [["1", "4", "2", "−3", "5"], ["2", "3", "−1", "5", "4"]],
    ),
    p(r`For \(h(x)=f(x)\,g(x)\): \(h'(2)=f'(2)g(2)+f(2)g'(2)=(-1)(5)+(3)(4)=7\). Read the values from the correct <strong>row</strong>, and do not confuse the \(f\) column with the \(f'\) column.`),

    sec("Worked examples"),
    ex("core", "Product rule", r`Differentiate \(f(x)=x^2\sin x\).`, [
      r`First factor \(x^2\), derivative \(2x\). Second factor \(\sin x\), derivative \(\cos x\).`,
      r`\(f'(x)=(2x)(\sin x)+(x^2)(\cos x)\).`,
    ], r`\(f'(x)=2x\sin x+x^2\cos x\).`),
    ex("core", "Quotient rule", r`Differentiate \(f(x)=\dfrac{3x+1}{x^2+2}\).`, [
      r`Numerator \(3x+1\), derivative \(3\). Denominator \(x^2+2\), derivative \(2x\).`,
      r`\(f'(x)=\dfrac{3(x^2+2)-(3x+1)(2x)}{(x^2+2)^2}\).`,
      r`Expand the numerator: \(3x^2+6-6x^2-2x\).`,
    ], r`\(f'(x)=\dfrac{-3x^2-2x+6}{(x^2+2)^2}\).`),
    ex("exam", "A quotient from the table", r`Using the table above, find \(k'(2)\) where \(k(x)=\dfrac{f(x)}{g(x)}\).`, [
      r`\(k'(2)=\dfrac{f'(2)g(2)-f(2)g'(2)}{[g(2)]^2}\).`,
      r`Substitute from the row \(x=2\): \(\dfrac{(-1)(5)-(3)(4)}{5^2}\).`,
    ], r`\(k'(2)=-\dfrac{17}{25}\).`),
    ex("exam", "Transcendental factors", r`Let \(h(x)=e^x\ln x\). Find \(h'(1)\).`, [
      r`\(h'(x)=e^x\ln x+e^x\cdot\dfrac1x\).`,
      r`At \(x=1\): \(e\cdot\ln1+e\cdot1=0+e\).`,
    ], r`\(h'(1)=e\).`),
    ex("stretch", "A product with an unknown function", r`A differentiable function \(f\) has \(f(3)=2\) and \(f'(3)=-1\). Let \(g(x)=x^2f(x)\). Write an equation for the tangent line to the graph of \(g\) at \(x=3\).`, [
      r`Point: \(g(3)=9\cdot2=18\).`,
      r`\(g'(x)=2x\,f(x)+x^2f'(x)\), so \(g'(3)=6(2)+9(-1)=3\).`,
    ], r`\(y-18=3(x-3)\).`),

    sec("Common errors"),
    mistake("the product of the derivatives", r`<p>\(\dfrac{d}{dx}[x^2\sin x]\) is not \(2x\cos x\). There are always <em>two</em> terms.</p>`),
    mistake("the quotient rule backwards", r`<p>\(\dfrac{f\,g'-f'g}{g^2}\) gives the negative of the right answer. Start with the derivative of the top.</p>`),
    mistake("forgetting to square, or squaring wrongly", r`<p>The denominator is \([g(x)]^2\). It is not \(g(x)\), and it is not \(g(x^2)\). Leave it as \((x^2+2)^2\); do not expand.</p>`),
    mistake("dropping brackets in the numerator", r`<p>\(3(x^2+2)-(3x+1)(2x)\): the minus sign applies to the whole product \((3x+1)(2x)\). Writing \(-3x\cdot2x+1\) loses a sign.</p>`),

    sec("Write it so it scores"),
    justify(
      r`Using the table, let \(h(x)=f(x)\,g(x)\). Find \(h'(1)\). Show the work that leads to your answer.`,
      r`\(h'(x)=f'(x)g(x)+f(x)g'(x)\), so \(h'(1)=f'(1)g(1)+f(1)g'(1)=(2)(-3)+(4)(5)=14\).`,
      r`The rule is written in symbols, then with the table values substituted, then evaluated. If one number is misread, the symbolic line still earns the method point.`,
    ),
    exam(r`<p>On table questions, leaving the answer as \((2)(-3)+(4)(5)\) is acceptable in free response: numerical answers need not be simplified. Simplify only if you are sure of the arithmetic.</p>`),

    sec("Practice"),
    pq(r`Differentiate \(f(x)=x^3e^x\).`, r`\(f'(x)=3x^2e^x+x^3e^x=x^2e^x(3+x)\).`, "core"),
    pq(r`Differentiate \(f(x)=\dfrac{\sin x}{x}\).`, r`\(f'(x)=\dfrac{x\cos x-\sin x}{x^2}\).`, "core"),
    pq(r`Differentiate \(f(x)=\dfrac{x^2-1}{x^2+1}\).`, r`\(\dfrac{2x(x^2+1)-(x^2-1)(2x)}{(x^2+1)^2}=\dfrac{4x}{(x^2+1)^2}\).`, "exam"),
    pq(r`Using the table in this lesson, find the derivative of \(\dfrac{g(x)}{f(x)}\) at \(x=1\).`, r`\(\dfrac{g'(1)f(1)-g(1)f'(1)}{[f(1)]^2}=\dfrac{(5)(4)-(-3)(2)}{16}=\dfrac{26}{16}=\dfrac{13}{8}\).`, "exam"),
    pq(r`At what value of \(x\) does the graph of \(y=x\ln x\) have a horizontal tangent?`, r`\(y'=\ln x+x\cdot\dfrac1x=\ln x+1=0\) gives \(x=e^{-1}=\dfrac1e\).`, "exam"),
    pq(r`A differentiable function \(f\) has \(f(2)=6\) and \(f'(2)=5\). Let \(h(x)=\dfrac{f(x)}{x}\). Find \(h'(2)\).`, r`\(h'(x)=\dfrac{x\,f'(x)-f(x)}{x^2}\), so \(h'(2)=\dfrac{2(5)-6}{4}=1\).`, "stretch"),
    pq(r`Use the product rule to show that \(\dfrac{d}{dx}\Big[\big(f(x)\big)^2\Big]=2f(x)f'(x)\), and evaluate it at \(x=1\) using the table.`, r`\((f\cdot f)'=f'f+ff'=2ff'\). At \(x=1\): \(2(4)(2)=16\).`, "stretch"),

    sec("Summary"),
    key([
      ["Product", r`\((fg)'=f'g+fg'\).`],
      ["Quotient", r`\(\left(\dfrac fg\right)'=\dfrac{f'g-fg'}{g^2}\). Top's derivative first.`],
      ["Avoid when possible", r`Constant factors, constant numerators, single-term denominators.`],
      ["Tables", r`Right row, right column, rule written out first.`],
    ]),
  ],
});

// ───────────────────────── 2.8 ─────────────────────────
u2b["2.8"] = lesson({
  code: "2.8", unit: 2, official: "2.10", calc: "No calculator",
  title: "The Other Four Trigonometric Derivatives",
  parts: () => [
    lede(r`Tangent, cotangent, secant and cosecant are all quotients built from sine and cosine, so the quotient rule delivers their derivatives with nothing new to learn. What remains is to know the four results cold, with their signs, because from here on they appear inside longer problems where there is no time to re-derive them.`),
    goals([
      r`State the derivatives of \(\tan x\), \(\cot x\), \(\sec x\) and \(\csc x\).`,
      r`Derive any of them from the quotient rule.`,
      r`Evaluate them exactly at standard angles.`,
      r`Combine them with the product and quotient rules.`,
    ]),

    sec("The four derivatives"),
    thm("Derivatives of the remaining trigonometric functions", r`${disp(r`\frac{d}{dx}[\tan x]=\sec^2x\qquad\qquad\frac{d}{dx}[\cot x]=-\csc^2x`)}${disp(r`\frac{d}{dx}[\sec x]=\sec x\tan x\qquad\qquad\frac{d}{dx}[\csc x]=-\csc x\cot x`)}`),
    p(r`Two patterns make these easy to hold. The derivatives of the three "co-" functions (cosine, cotangent, cosecant) are the ones with a minus sign. And each right-hand column result is the left-hand one with every function replaced by its co-function.`),

    sec("Deriving tangent"),
    p(r`Write \(\tan x=\dfrac{\sin x}{\cos x}\) and apply the quotient rule:`),
    disp(r`\frac{d}{dx}\left[\frac{\sin x}{\cos x}\right]=\frac{(\cos x)(\cos x)-(\sin x)(-\sin x)}{\cos^2x}=\frac{\cos^2x+\sin^2x}{\cos^2x}=\frac{1}{\cos^2x}=\sec^2x.`),
    p(r`Secant works the same way from \(\sec x=\dfrac{1}{\cos x}\): the result is \(\dfrac{\sin x}{\cos^2x}=\dfrac{1}{\cos x}\cdot\dfrac{\sin x}{\cos x}=\sec x\tan x\).`),

    sec("Exact values you will need"),
    table(
      [r`\(x\)`, r`\(\tan x\)`, r`\(\sec x\)`, r`\(\sec^2x\)`],
      [
        ["0", "0", "1", "1"],
        [r`\(\dfrac\pi6\)`, r`\(\dfrac{1}{\sqrt3}\)`, r`\(\dfrac{2}{\sqrt3}\)`, r`\(\dfrac43\)`],
        [r`\(\dfrac\pi4\)`, "1", r`\(\sqrt2\)`, "2"],
        [r`\(\dfrac\pi3\)`, r`\(\sqrt3\)`, "2", "4"],
      ],
    ),
    p(r`Secant is the reciprocal of <em>cosine</em>: \(\sec\dfrac\pi3=\dfrac{1}{\cos(\pi/3)}=2\), not \(\dfrac12\).`),

    sec("Worked examples"),
    ex("core", "A combination", r`Differentiate \(f(x)=3\tan x-2\sec x\).`, [
      r`Term by term, using the two results.`,
    ], r`\(f'(x)=3\sec^2x-2\sec x\tan x\).`),
    ex("exam", "With the product rule", r`Let \(f(x)=x^2\tan x\). Find \(f'\!\left(\dfrac\pi4\right)\).`, [
      r`\(f'(x)=2x\tan x+x^2\sec^2x\).`,
      r`At \(x=\dfrac\pi4\): \(\tan\dfrac\pi4=1\) and \(\sec^2\dfrac\pi4=2\).`,
      r`\(f'\!\left(\dfrac\pi4\right)=2\cdot\dfrac\pi4\cdot1+\dfrac{\pi^2}{16}\cdot2\).`,
    ], r`\(f'\!\left(\dfrac\pi4\right)=\dfrac\pi2+\dfrac{\pi^2}{8}\).`),
    ex("exam", "A tangent line", r`Write an equation for the tangent line to \(y=\sec x\) at \(x=\dfrac\pi3\).`, [
      r`Point: \(\sec\dfrac\pi3=2\), so \(\left(\dfrac\pi3,2\right)\).`,
      r`Slope: \(y'=\sec x\tan x\), so \(y'\!\left(\dfrac\pi3\right)=2\cdot\sqrt3\).`,
    ], r`\(y-2=2\sqrt3\left(x-\dfrac\pi3\right)\).`),
    ex("stretch", "A derivative that never changes sign", r`Let \(f(x)=\tan x-x\) on \(\left(-\dfrac\pi2,\dfrac\pi2\right)\). Find \(f'(x)\), and find where the graph has a horizontal tangent.`, [
      r`\(f'(x)=\sec^2x-1\).`,
      r`By the identity \(1+\tan^2x=\sec^2x\), this is \(f'(x)=\tan^2x\).`,
      r`\(\tan^2x=0\) only when \(\tan x=0\), that is \(x=0\) on this interval. Everywhere else \(f'(x)\gt0\).`,
    ], r`\(f'(x)=\tan^2x\). The only horizontal tangent is at \(x=0\), and the graph rises on both sides of it.`),

    sec("Common errors"),
    mistake(r`\(\dfrac{d}{dx}[\sec x]=\sec^2x\)`, r`<p>That is the derivative of \(\tan x\). The derivative of \(\sec x\) is \(\sec x\tan x\). They are easy to exchange under pressure.</p>`),
    mistake("missing minus signs", r`<p>\(\cot x\) and \(\csc x\) differentiate to <em>negative</em> results. If the function starts with "co", check for the sign.</p>`),
    mistake("reciprocals of the wrong function", r`<p>\(\sec x=\dfrac{1}{\cos x}\) and \(\csc x=\dfrac{1}{\sin x}\). The pairing is not alphabetical.</p>`),

    sec("Write it so it scores"),
    justify(
      r`Use the quotient rule to show that \(\dfrac{d}{dx}[\cot x]=-\csc^2x\).`,
      r`\(\dfrac{d}{dx}\left[\dfrac{\cos x}{\sin x}\right]=\dfrac{(-\sin x)(\sin x)-(\cos x)(\cos x)}{\sin^2x}=\dfrac{-(\sin^2x+\cos^2x)}{\sin^2x}=-\dfrac{1}{\sin^2x}=-\csc^2x.\)`,
      r`A "show that" question gives you the answer, so all the credit is in the steps: the quotient written out, the Pythagorean identity visibly applied, and the reciprocal identity at the end.`,
    ),
    exam(r`<p>In multiple choice, the wrong options for these derivatives are almost always the same three: a missing minus sign, \(\sec^2x\) and \(\sec x\tan x\) exchanged, and a reciprocal taken of the wrong function. Check your answer against exactly those.</p>`),

    sec("Practice"),
    pq(r`Differentiate \(f(x)=\csc x-4\cot x\).`, r`\(f'(x)=-\csc x\cot x+4\csc^2x\).`, "core"),
    pq(r`Find the slope of the graph of \(y=\tan x\) at \(x=\dfrac\pi6\).`, r`\(\sec^2\dfrac\pi6=\dfrac{1}{\cos^2(\pi/6)}=\dfrac{1}{3/4}=\dfrac43\).`, "core"),
    pq(r`Write an equation for the tangent line to \(y=\tan x\) at \(x=\dfrac\pi4\).`, r`Point \(\left(\tfrac\pi4,1\right)\); slope \(\sec^2\tfrac\pi4=2\). \(y-1=2\left(x-\dfrac\pi4\right)\).`, "exam"),
    pq(r`Differentiate \(f(x)=e^x\cot x\).`, r`\(f'(x)=e^x\cot x-e^x\csc^2x=e^x\left(\cot x-\csc^2x\right)\).`, "exam"),
    pq(r`Differentiate \(f(x)=\dfrac{\sec x}{x}\).`, r`\(f'(x)=\dfrac{x\sec x\tan x-\sec x}{x^2}=\dfrac{\sec x\,(x\tan x-1)}{x^2}\).`, "exam"),
    pq(r`Find all \(x\) in \(\left(-\dfrac\pi2,\dfrac\pi2\right)\) at which \(y=2x-\tan x\) has a horizontal tangent.`, r`\(y'=2-\sec^2x=0\) gives \(\cos^2x=\dfrac12\), so \(\cos x=\dfrac{1}{\sqrt2}\) on this interval: \(x=\pm\dfrac\pi4\).`, "stretch"),
    pq(r`Differentiate \(f(x)=\dfrac{1+\sin x}{\cos x}\) and simplify.`, r`\(f(x)=\sec x+\tan x\), so \(f'(x)=\sec x\tan x+\sec^2x=\dfrac{1+\sin x}{\cos^2x}\).`, "stretch"),

    sec("Summary"),
    key([
      [r`\(\tan x\)`, r`derivative \(\sec^2x\)`],
      [r`\(\cot x\)`, r`derivative \(-\csc^2x\)`],
      [r`\(\sec x\)`, r`derivative \(\sec x\tan x\)`],
      [r`\(\csc x\)`, r`derivative \(-\csc x\cot x\)`],
    ]),
  ],
});
