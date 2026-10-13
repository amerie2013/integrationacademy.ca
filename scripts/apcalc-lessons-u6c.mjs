// AP Calculus AB exam prep — Unit 6 (Integration), lessons 6.10–6.13.
// Original wording, examples, numbers and figures throughout (see u1a for notes).
import { r, lesson, lede, goals, sec, p, disp, def, thm, exam, mistake, justify, ex, pq, key, table } from "./apcalc/kit.mjs";
import { plot, figure, C } from "./apcalc/fig.mjs";
import { fGraph } from "./apcalc-lessons-u6a.mjs";

export const u6c = {};

// A graph with a semicircle: upper semicircle of radius 2 centred (2,0) on [0,4],
// then line segments (4,0) → (6,−3) → (8,0). Areas: 2π, −3, −3.
export const kval = (x) => (x <= 4 ? Math.sqrt(Math.max(0, 4 - (x - 2) ** 2)) : x <= 6 ? -1.5 * (x - 4) : -3 + 1.5 * (x - 6));
export const kGraph = () => {
  const g = plot({ w: 430, h: 300, x: [-1, 9], y: [-4, 3], alt: "Graph of k: a semicircle followed by two line segments" });
  g.curve(kval, 0, 4, { n: 900 }).poly([[4, 0], [6, -3], [8, 0]]).dot(0, 0).dot(8, 0).label(2.9, 2.3, "y = k(x)");
  return g;
};

// ───────────────────────── 6.10 ─────────────────────────
u6c["6.10"] = lesson({
  code: "6.10", unit: 6, official: "6.10", calc: "No calculator",
  title: "Rational Integrands: Division and Completing the Square",
  parts: () => [
    lede(r`A quotient of polynomials rarely matches a basic rule as it stands. Two pieces of algebra from earlier courses repair most of them. If the numerator's degree is at least the denominator's, <strong>divide</strong>. If the denominator is a quadratic that does not factor, <strong>complete the square</strong> and an arctangent appears. Neither is calculus; both are preparation that lets the calculus happen.`),
    goals([
      r`Use long division to rewrite an improper rational integrand.`,
      r`Complete the square to reach an inverse-tangent or inverse-sine form.`,
      r`Tell a logarithm form from an arctangent form.`,
      r`Split a numerator to use both forms in one integral.`,
    ]),

    sec("Divide when the top is at least as big"),
    p(r`If the degree of the numerator is greater than or equal to the degree of the denominator, divide first. The result is a polynomial plus a simpler fraction, each of which can be integrated.`),
    disp(r`\frac{x^2+3x+5}{x+1}=x+2+\frac{3}{x+1}\qquad\text{since}\qquad(x+1)(x+2)=x^2+3x+2.`),

    sec("Two inverse-trigonometric forms"),
    thm("Integrals leading to inverse trigonometric functions", r`${disp(r`\int\frac{du}{a^2+u^2}=\frac1a\arctan\!\left(\frac ua\right)+C\qquad\qquad\int\frac{du}{\sqrt{a^2-u^2}}=\arcsin\!\left(\frac ua\right)+C\qquad(a\gt0)`)}`),
    p(r`With \(a=1\) these are the two rows from Lesson 6.8. The factor \(\dfrac1a\) belongs to the arctangent form only.`),

    sec("Completing the square"),
    p(r`A quadratic with no real roots can be written as a square plus a positive constant, which is exactly the shape \(a^2+u^2\).`),
    disp(r`x^2+4x+13=(x^2+4x+4)+9=(x+2)^2+3^2.`),

    sec("Logarithm or arctangent?"),
    table(
      ["Numerator", "Denominator", "Result"],
      [
        ["a constant multiple of the denominator's derivative", "any", r`logarithm: \(\displaystyle\int\frac{g'}{g}=\ln|g|\)`],
        ["a constant", "irreducible quadratic", "arctangent, after completing the square"],
        ["linear, not a multiple of the derivative", "irreducible quadratic", "split into one of each"],
      ],
    ),

    sec("Worked examples"),
    ex("core", "Division", r`Find \(\displaystyle\int\frac{x^2+3x+5}{x+1}\,dx\).`, [
      r`Divide: \(x+2+\dfrac{3}{x+1}\).`,
      r`Integrate term by term.`,
    ], r`\(\dfrac{x^2}{2}+2x+3\ln|x+1|+C\).`),
    ex("exam", "Division with a quadratic denominator", r`Find \(\displaystyle\int\frac{x^3}{x^2+1}\,dx\).`, [
      r`\(x^3=x(x^2+1)-x\), so \(\dfrac{x^3}{x^2+1}=x-\dfrac{x}{x^2+1}\).`,
      r`\(\displaystyle\int x\,dx=\dfrac{x^2}{2}\), and \(\displaystyle\int\frac{x}{x^2+1}\,dx=\dfrac12\ln\left(x^2+1\right)\) by substitution.`,
    ], r`\(\dfrac{x^2}{2}-\dfrac12\ln\left(x^2+1\right)+C\).`),
    ex("exam", "Completing the square", r`Find \(\displaystyle\int\frac{1}{x^2+4x+13}\,dx\).`, [
      r`\(x^2+4x+13=(x+2)^2+9\).`,
      r`With \(u=x+2\) and \(a=3\): \(\displaystyle\int\frac{du}{9+u^2}=\dfrac13\arctan\!\left(\dfrac u3\right)\).`,
    ], r`\(\dfrac13\arctan\!\left(\dfrac{x+2}{3}\right)+C\).`),
    ex("exam", "A definite arctangent", r`Evaluate \(\displaystyle\int_0^3\frac{1}{9+x^2}\,dx\).`, [
      r`\(\Big[\dfrac13\arctan\!\left(\dfrac x3\right)\Big]_0^3=\dfrac13\big(\arctan1-\arctan0\big)\).`,
    ], r`\(\dfrac13\cdot\dfrac\pi4=\dfrac{\pi}{12}\).`),
    ex("stretch", "One of each", r`Find \(\displaystyle\int\frac{2x+5}{x^2+4x+13}\,dx\).`, [
      r`The derivative of the denominator is \(2x+4\). Write \(2x+5=(2x+4)+1\).`,
      r`\(\displaystyle\int\frac{2x+4}{x^2+4x+13}\,dx=\ln\left(x^2+4x+13\right)\).`,
      r`\(\displaystyle\int\frac{1}{x^2+4x+13}\,dx=\dfrac13\arctan\!\left(\dfrac{x+2}{3}\right)\), from the earlier example.`,
    ], r`\(\ln\left(x^2+4x+13\right)+\dfrac13\arctan\!\left(\dfrac{x+2}{3}\right)+C\).`),

    sec("Common errors"),
    mistake("a logarithm where an arctangent belongs", r`<p>\(\displaystyle\int\frac{1}{x^2+9}\,dx\) is not \(\ln\left(x^2+9\right)\). A logarithm needs the derivative of the denominator, \(2x\), on top.</p>`),
    mistake(r`forgetting the \(\dfrac1a\)`, r`<p>\(\displaystyle\int\frac{1}{9+x^2}\,dx=\dfrac13\arctan\!\left(\dfrac x3\right)+C\). Both the factor in front and the division inside are needed.</p>`),
    mistake("integrating numerator and denominator separately", r`<p>\(\displaystyle\int\frac{x^2+3x+5}{x+1}\,dx\) is not \(\dfrac{\int(x^2+3x+5)\,dx}{\int(x+1)\,dx}\). Divide first.</p>`),
    mistake("an arithmetic slip in completing the square", r`<p>Half the coefficient of \(x\), squared: for \(x^2+4x\) add and subtract 4, not 16 and not 2.</p>`),

    sec("Write it so it scores"),
    justify(
      r`Evaluate \(\displaystyle\int_{-2}^{1}\frac{1}{x^2+4x+13}\,dx\).`,
      r`\(\displaystyle\int_{-2}^{1}\frac{1}{(x+2)^2+9}\,dx=\Big[\dfrac13\arctan\!\left(\dfrac{x+2}{3}\right)\Big]_{-2}^{1}=\dfrac13\big(\arctan1-\arctan0\big)=\dfrac{\pi}{12}\).`,
      r`The completed square, the antiderivative and the evaluation at both limits are each visible, so partial credit is available at every stage.`,
    ),
    exam(r`<p>In multiple choice, look at the numerator before doing anything. A bare constant over a quadratic that cannot be factored means an arctangent is coming; an \(x\) on top means a logarithm (and possibly an arctangent too).</p>`),

    sec("Practice"),
    pq(r`Find \(\displaystyle\int\frac{x^2+2x}{x+1}\,dx\).`, r`\(\dfrac{x^2+2x}{x+1}=x+1-\dfrac{1}{x+1}\), so the integral is \(\dfrac{x^2}{2}+x-\ln|x+1|+C\).`, "core"),
    pq(r`Find \(\displaystyle\int\frac{1}{x^2+25}\,dx\).`, r`\(\dfrac15\arctan\!\left(\dfrac x5\right)+C\).`, "core"),
    pq(r`Find \(\displaystyle\int\frac{2x}{x^2+25}\,dx\).`, r`The numerator is the derivative of the denominator: \(\ln\left(x^2+25\right)+C\).`, "exam"),
    pq(r`Find \(\displaystyle\int\frac{1}{x^2-6x+10}\,dx\).`, r`\(x^2-6x+10=(x-3)^2+1\), so the integral is \(\arctan(x-3)+C\).`, "exam"),
    pq(r`Find \(\displaystyle\int\frac{1}{\sqrt{6x-x^2}}\,dx\).`, r`\(6x-x^2=9-(x-3)^2\), so the integral is \(\arcsin\!\left(\dfrac{x-3}{3}\right)+C\).`, "stretch"),
    pq(r`Evaluate \(\displaystyle\int_0^1\frac{x^3}{x^2+1}\,dx\).`, r`\(\Big[\dfrac{x^2}{2}-\dfrac12\ln\left(x^2+1\right)\Big]_0^1=\dfrac12-\dfrac12\ln2\).`, "stretch"),

    sec("Summary"),
    key([
      ["Top-heavy", r`Divide first.`],
      [r`\(\dfrac{1}{a^2+u^2}\)`, r`\(\dfrac1a\arctan\dfrac ua\).`],
      ["Irreducible quadratic", r`Complete the square.`],
      ["Derivative on top", r`Logarithm.`],
    ]),
  ],
});

// ───────────────────────── 6.11 ─────────────────────────
u6c["6.11"] = lesson({
  code: "6.11", unit: 6, official: "6.14", calc: "No calculator",
  title: "Choosing an Integration Method",
  parts: () => [
    lede(r`Differentiation is mechanical: there is a rule for every structure, and applying the rules always works. Integration is different. There are only a handful of methods in this course, and no rule tells you which to use. The skill is diagnosis: looking at an integrand and recognising which of a few familiar shapes it has, or can be made to have. This lesson is a decision procedure and a great deal of mixed practice.`),
    goals([
      r`Classify an integrand by its structure.`,
      r`Decide when algebra, substitution, division or completing the square is needed.`,
      r`Distinguish integrals that look alike but need different methods.`,
      r`Verify an antiderivative by differentiating.`,
    ]),

    sec("A decision procedure"),
    `<ol><li><strong>Is it basic already?</strong> Compare with the table in Lesson 6.8.</li><li><strong>Will algebra make it basic?</strong> Expand a product; divide by a single-term denominator; write roots as powers; use an identity (for instance \(\tan^2x=\sec^2x-1\)).</li><li><strong>Is there an inside function with its derivative beside it?</strong> Substitute.</li><li><strong>Is it a quotient of polynomials?</strong> If top-heavy, divide. If the derivative of the bottom is on top, logarithm. If the bottom is an irreducible quadratic under a constant, complete the square.</li></ol>`,
    p(r`If none of these works, the integral is either beyond this course or needs a calculator. On the no-calculator section that will not happen: one of the four always applies.`),

    sec("Look-alikes"),
    p(r`The most instructive practice is on integrals that differ by one symbol and need different methods.`),
    table(
      ["Integral", "Method", "Result"],
      [
        [r`\(\displaystyle\int\frac{1}{1+x^2}\,dx\)`, "basic", r`\(\arctan x+C\)`],
        [r`\(\displaystyle\int\frac{x}{1+x^2}\,dx\)`, r`substitution, \(u=1+x^2\)`, r`\(\tfrac12\ln\left(1+x^2\right)+C\)`],
        [r`\(\displaystyle\int\frac{x^2}{1+x^2}\,dx\)`, "division", r`\(x-\arctan x+C\)`],
        [r`\(\displaystyle\int\frac{x}{1+x^4}\,dx\)`, r`substitution, \(u=x^2\)`, r`\(\tfrac12\arctan\left(x^2\right)+C\)`],
        [r`\(\displaystyle\int\frac{1}{\sqrt{1-x^2}}\,dx\)`, "basic", r`\(\arcsin x+C\)`],
        [r`\(\displaystyle\int\frac{x}{\sqrt{1-x^2}}\,dx\)`, r`substitution, \(u=1-x^2\)`, r`\(-\sqrt{1-x^2}+C\)`],
      ],
    ),

    sec("Worked examples"),
    ex("core", "Algebra first", r`Find \(\displaystyle\int\frac{(x+1)^2}{x}\,dx\).`, [
      r`Expand and divide: \(\dfrac{x^2+2x+1}{x}=x+2+\dfrac1x\).`,
    ], r`\(\dfrac{x^2}{2}+2x+\ln|x|+C\).`),
    ex("exam", "The same exponential, two answers", r`Find (a) \(\displaystyle\int\frac{e^x}{1+e^x}\,dx\) and (b) \(\displaystyle\int\frac{e^x}{1+e^{2x}}\,dx\).`, [
      r`(a) The numerator is the derivative of the denominator: \(u=1+e^x\) gives \(\ln\left(1+e^x\right)\).`,
      r`(b) Here \(e^{2x}=\left(e^x\right)^2\). With \(u=e^x\), \(du=e^x\,dx\): \(\displaystyle\int\frac{du}{1+u^2}=\arctan u\).`,
    ], r`(a) \(\ln\left(1+e^x\right)+C\). (b) \(\arctan\left(e^x\right)+C\).`),
    ex("exam", "An identity first", r`Find \(\displaystyle\int\tan^2x\,dx\).`, [
      r`\(\tan^2x=\sec^2x-1\).`,
      r`\(\displaystyle\int\left(\sec^2x-1\right)dx\).`,
    ], r`\(\tan x-x+C\).`),
    ex("stretch", "A substitution inside a logarithm", r`Find \(\displaystyle\int\frac{1}{x\ln x}\,dx\) for \(x\gt1\).`, [
      r`Write the integrand as \(\dfrac{1}{\ln x}\cdot\dfrac1x\): the derivative of \(\ln x\) is present.`,
      r`With \(u=\ln x\), \(du=\dfrac1x\,dx\): \(\displaystyle\int\frac{du}{u}=\ln|u|\).`,
    ], r`\(\ln(\ln x)+C\).`),

    sec("Common errors"),
    mistake("substituting when algebra would do", r`<p>\(\displaystyle\int\frac{(x+1)^2}{x}\,dx\) needs no substitution; forcing one makes it harder.</p>`),
    mistake("treating every fraction as a logarithm", r`<p>Only \(\displaystyle\int\frac{g'(x)}{g(x)}\,dx\) is a logarithm. Check that the numerator really is the derivative of the denominator (up to a constant).</p>`),
    mistake("not checking", r`<p>Differentiating the answer takes ten seconds and catches almost every error. If the derivative is not the integrand, the antiderivative is wrong.</p>`),

    sec("Write it so it scores"),
    justify(
      r`Find \(\displaystyle\int\frac{x^2}{1+x^2}\,dx\), showing your method.`,
      r`\(\dfrac{x^2}{1+x^2}=\dfrac{(1+x^2)-1}{1+x^2}=1-\dfrac{1}{1+x^2}\), so \(\displaystyle\int\frac{x^2}{1+x^2}\,dx=x-\arctan x+C\).`,
      r`The rewriting is shown as an identity before integrating. Adding and subtracting 1 in the numerator is a quick form of division worth recognising.`,
    ),
    exam(r`<p>When a multiple-choice integral looks unfamiliar, differentiate the options. Four derivatives are often quicker than one difficult integration, and it cannot go wrong.</p>`),

    sec("Practice"),
    pq(r`Find \(\displaystyle\int\cos x\,e^{\sin x}\,dx\).`, r`\(u=\sin x\): \(e^{\sin x}+C\).`, "core"),
    pq(r`Find \(\displaystyle\int\frac{x}{\sqrt{1-x^2}}\,dx\).`, r`\(u=1-x^2\), \(x\,dx=-\tfrac12du\): \(-\tfrac12\cdot2u^{1/2}=-\sqrt{1-x^2}+C\).`, "core"),
    pq(r`Find \(\displaystyle\int\frac{\sec^2x}{1+\tan x}\,dx\).`, r`\(u=1+\tan x\): \(\ln|1+\tan x|+C\).`, "exam"),
    pq(r`Find \(\displaystyle\int\frac{x}{1+x^4}\,dx\).`, r`\(u=x^2\), \(x\,dx=\tfrac12du\): \(\dfrac12\arctan\left(x^2\right)+C\).`, "exam"),
    pq(r`Find \(\displaystyle\int\left(\sqrt x+\frac{1}{\sqrt x}\right)^2dx\).`, r`Expand: \(x+2+\dfrac1x\). The integral is \(\dfrac{x^2}{2}+2x+\ln|x|+C\).`, "exam"),
    pq(r`Find \(\displaystyle\int\frac{\sin(2x)}{1+\sin^2x}\,dx\).`, r`\(\sin(2x)=2\sin x\cos x\) is the derivative of \(1+\sin^2x\): \(\ln\left(1+\sin^2x\right)+C\).`, "stretch"),

    sec("Summary"),
    key([
      ["1. Basic?", r`Recognise the table.`],
      ["2. Algebra?", r`Expand, divide, identity.`],
      ["3. Substitution?", r`Inside function with its derivative.`],
      ["4. Rational?", r`Divide; logarithm; complete the square.`],
    ]),
  ],
});

// ───────────────────────── 6.12 ─────────────────────────
u6c["6.12"] = lesson({
  code: "6.12", unit: 6, official: "6.2–6.7", calc: "No calculator",
  title: "Integrals from Graphs and Tables",
  parts: () => [
    lede(r`The last four lessons were about formulas. The exam, however, prefers to hide the formula. A function is drawn, or tabulated, and you are asked for an integral involving it. No antiderivative is possible, and none is needed: the properties of Lesson 6.6, the area interpretation and the Fundamental Theorem do all the work. This lesson gathers those ideas into the form in which they are actually examined.`),
    goals([
      r`Evaluate definite integrals from a graph made of line segments and circular arcs.`,
      r`Combine area reasoning with the properties of integrals.`,
      r`Use \(\displaystyle\int_a^bf'(x)\,dx=f(b)-f(a)\) with graphs and tables.`,
      r`Avoid sign errors for regions below the axis and reversed limits.`,
    ]),

    sec("Areas with signs"),
    figure(fGraph(), r`The reference graph of \(f\). Signed areas: \(4\) on \([-2,0]\), \(4\) on \([0,2]\), \(-4\) on \([2,4]\), \(-4\) on \([4,6]\), \(2\) on \([6,8]\).`),
    table(
      ["Integral", "Working", "Value"],
      [
        [r`\(\displaystyle\int_{-2}^{8}f(x)\,dx\)`, r`\(4+4-4-4+2\)`, "2"],
        [r`\(\displaystyle\int_{0}^{6}f(x)\,dx\)`, r`\(4-4-4\)`, "−4"],
        [r`\(\displaystyle\int_{6}^{2}f(x)\,dx\)`, r`\(-(-4-4)\)`, "8"],
        [r`\(\displaystyle\int_{-2}^{8}|f(x)|\,dx\)`, r`\(4+4+4+4+2\)`, "18"],
        [r`\(\displaystyle\int_{0}^{4}\big[f(x)+3\big]dx\)`, r`\((4-4)+3(4)\)`, "12"],
        [r`\(\displaystyle\int_{0}^{4}f'(x)\,dx\)`, r`\(f(4)-f(0)=-4-4\)`, "−8"],
      ],
    ),
    p(r`The last row is the Fundamental Theorem, not an area: the integral of a derivative is the change in the function, read directly from two heights on the graph.`),

    sec("Circular arcs"),
    figure(kGraph(), r`The graph of \(k\): a semicircle of radius 2 on \([0,4]\), then segments to \((6,-3)\) and \((8,0)\).`),
    p(r`\(\displaystyle\int_0^4k(x)\,dx=\tfrac12\pi(2)^2=2\pi\). The triangle below the axis has area \(\tfrac12(4)(3)=6\), so \(\displaystyle\int_4^8k(x)\,dx=-6\) and \(\displaystyle\int_0^8k(x)\,dx=2\pi-6\). Leave such answers exact.`),

    sec("Tables"),
    p(r`A table supports two different kinds of integral question, and they must not be confused.`),
    key([
      ["Integral of the tabulated function", r`Only an <strong>approximation</strong> is possible: a Riemann or trapezoidal sum (Lesson 6.2).`],
      ["Integral of its derivative", r`<strong>Exact</strong>, by the Fundamental Theorem: \(\displaystyle\int_a^bf'(x)\,dx=f(b)-f(a)\), two table entries subtracted.`],
    ]),

    sec("Worked examples"),
    ex("core", "Signed area", r`Using the graph of \(f\), evaluate \(\displaystyle\int_2^8f(x)\,dx\).`, [
      r`\([2,4]\): \(-4\). \([4,6]\): \(-4\). \([6,8]\): \(+2\).`,
    ], r`\(-6\).`),
    ex("exam", "Properties and area together", r`Using the graph of \(f\), evaluate \(\displaystyle\int_{-2}^{2}\big[3f(x)-1\big]dx\).`, [
      r`\(\displaystyle\int_{-2}^{2}f(x)\,dx=4+4=8\).`,
      r`\(3(8)-\displaystyle\int_{-2}^{2}1\,dx=24-4\).`,
    ], r`\(20\).`),
    ex("exam", "A derivative under the integral", r`Selected values of a differentiable function \(h\) are shown. Evaluate \(\displaystyle\int_1^7h'(x)\,dx\) and approximate \(\displaystyle\int_1^7h(x)\,dx\) with a trapezoidal sum using two subintervals.${table(["\\(x\\)", "1", "4", "7"], [["\\(h(x)\\)", "5", "9", "3"]])}`, [
      r`Exact: \(\displaystyle\int_1^7h'(x)\,dx=h(7)-h(1)=3-5=-2\).`,
      r`Approximate: \(\tfrac12(5+9)(3)+\tfrac12(9+3)(3)=21+18\).`,
    ], r`\(\displaystyle\int_1^7h'(x)\,dx=-2\) exactly; \(\displaystyle\int_1^7h(x)\,dx\approx39\).`),
    ex("stretch", "A substitution on a graph", r`Using the graph of \(f\), evaluate \(\displaystyle\int_0^3f(2x)\,dx\).`, [
      r`Let \(u=2x\), \(dx=\tfrac12du\). Limits: \(u=0\) to \(u=6\).`,
      r`\(\dfrac12\displaystyle\int_0^6f(u)\,du=\dfrac12(4-4-4)\).`,
    ], r`\(-2\).`),

    sec("Common errors"),
    mistake("counting area below the axis as positive", r`<p>\(\displaystyle\int_0^6f(x)\,dx\) is \(-4\), not 12. Only \(\displaystyle\int|f|\) adds the areas.</p>`),
    mistake("ignoring reversed limits", r`<p>\(\displaystyle\int_6^2f(x)\,dx\) is the negative of \(\displaystyle\int_2^6f(x)\,dx\). Two negatives here make a positive 8.</p>`),
    mistake(r`computing an area for \(\displaystyle\int f'\)`, r`<p>\(\displaystyle\int_0^4f'(x)\,dx\) is \(f(4)-f(0)\). Finding the area under the graph of \(f\) answers a different question.</p>`),
    mistake("forgetting the constant term's width", r`<p>In \(\displaystyle\int_{-2}^{2}\big[3f(x)-1\big]dx\) the \(-1\) contributes \(-1\times4\), not \(-1\).</p>`),

    sec("Write it so it scores"),
    justify(
      r`Using the graph of \(k\), find \(\displaystyle\int_0^8k(x)\,dx\). Show the work that leads to your answer.`,
      r`\(\displaystyle\int_0^8k(x)\,dx=\int_0^4k(x)\,dx+\int_4^8k(x)\,dx=\tfrac12\pi(2)^2-\tfrac12(4)(3)=2\pi-6\).`,
      r`The interval is split where the graph crosses the axis, each piece is shown as a recognisable area formula with its sign, and the answer is left exact.`,
    ),
    exam(r`<p>Graph questions on the exam are deliberately drawn with integer coordinates and radii so that every area is exact. If you find yourself estimating, you have misread a coordinate.</p>`),

    sec("Practice"),
    pq(r`Using the graph of \(f\), evaluate \(\displaystyle\int_{-2}^{4}f(x)\,dx\).`, r`\(4+4-4=4\).`, "core"),
    pq(r`Using the graph of \(f\), evaluate \(\displaystyle\int_{4}^{0}f(x)\,dx\).`, r`\(\displaystyle\int_0^4f=4-4=0\), so the answer is \(0\).`, "core"),
    pq(r`Using the graph of \(f\), evaluate \(\displaystyle\int_{2}^{6}|f(x)|\,dx\).`, r`\(4+4=8\).`, "exam"),
    pq(r`Using the graph of \(f\), evaluate \(\displaystyle\int_{4}^{8}f'(x)\,dx\).`, r`\(f(8)-f(4)=2-(-4)=6\).`, "exam"),
    pq(r`Using the graph of \(k\), evaluate \(\displaystyle\int_0^6\big[k(x)+1\big]dx\).`, r`\(2\pi-3+6=2\pi+3\).`, "exam"),
    pq(r`Using the graph of \(k\), let \(G(x)=\displaystyle\int_0^xk(t)\,dt\). Find the absolute maximum value of \(G\) on \([0,8]\).`, r`\(G'=k\) is positive on \((0,4)\) and negative on \((4,8)\), so \(G\) increases then decreases. Candidates: \(G(0)=0\), \(G(4)=2\pi\), \(G(8)=2\pi-6\). The maximum is \(2\pi\).`, "stretch"),

    sec("Summary"),
    key([
      ["Signed area", r`Above the axis positive, below negative.`],
      ["Properties", r`Split, scale, reverse, and integrate constants.`],
      [r`\(\displaystyle\int_a^bf'\)`, r`\(f(b)-f(a)\): two heights, not an area.`],
      ["Tables", r`\(\int f\): approximate. \(\int f'\): exact.`],
    ]),
  ],
});

// ───────────────────────── 6.13 ─────────────────────────
u6c["6.13"] = lesson({
  code: "6.13", unit: 6, official: "6.1–6.7", calc: "Both",
  title: "Unit 6 Synthesis: The Accumulation Free-Response Question",
  parts: () => [
    lede(r`Every idea in this unit, and several from earlier units, converges on one kind of free-response question: a rate is given by a table or a graph, and you are asked how much has accumulated, how fast things are changing, and whether something must happen. This lesson works two such questions in full, with a scoring guide for each, so that you can see exactly where the nine points are and what each one requires.`),
    goals([
      r`Recognise the standard parts of an accumulation question.`,
      r`Produce a complete, scored response to a table-based question.`,
      r`Produce a complete, scored response to a graph-based question.`,
      r`Mark your own work against a scoring guide.`,
    ]),

    sec("How these questions are scored"),
    p(r`Each free-response question is worth 9 points, spread over three or four parts. Points are awarded for specific things that appear on the page: a difference quotient, an integral set up correctly, an answer, units, a named theorem with its hypotheses. A correct final number with no supporting work typically earns at most one of the points in its part.`),

    sec("Question 1: a rate given by a table"),
    `<div class="apx-def"><span class="apx-cap">Question 1</span><p>Water enters a tank at a rate of \(E(t)\) litres per minute, where \(E\) is a differentiable function of time \(t\) in minutes. Selected values of \(E\) are given. The tank contains 30 litres of water at \(t=0\).</p>${table([r`\(t\) (minutes)`, "0", "2", "5", "9", "12"], [[r`\(E(t)\) (litres per minute)`, "8", "14", "20", "12", "6"]])}<p><strong>(a)</strong> Use the data in the table to estimate \(E'(7)\). Show the computations that lead to your answer, and indicate units of measure.</p><p><strong>(b)</strong> Use a trapezoidal sum with the four subintervals indicated by the table to approximate \(\displaystyle\int_0^{12}E(t)\,dt\). Using correct units, explain the meaning of this integral in context.</p><p><strong>(c)</strong> Is there a time \(t\), \(5\lt t\lt9\), at which \(E'(t)=-2\)? Justify your answer.</p><p><strong>(d)</strong> Water leaves the tank at a rate of \(L(t)=4+\tfrac12t\) litres per minute. Using your answer to part (b), estimate the amount of water in the tank at \(t=12\).</p></div>`,
    ex("exam", "Part (a)", r`Estimate \(E'(7)\).`, [
      r`\(t=7\) lies between the tabulated times 5 and 9.`,
      r`\(E'(7)\approx\dfrac{E(9)-E(5)}{9-5}=\dfrac{12-20}{4}\).`,
    ], r`\(E'(7)\approx-2\) litres per minute per minute.`),
    ex("exam", "Part (b)", r`Trapezoidal sum and meaning.`, [
      r`\(\tfrac12(8+14)(2)+\tfrac12(14+20)(3)+\tfrac12(20+12)(4)+\tfrac12(12+6)(3)\).`,
      r`\(=22+51+64+27=164\).`,
    ], r`\(\displaystyle\int_0^{12}E(t)\,dt\approx164\). The integral is the total amount of water, in litres, that entered the tank from \(t=0\) to \(t=12\) minutes.`),
    ex("exam", "Part (c)", r`Must \(E'(t)=-2\) for some \(t\) in \((5,9)\)?`, [
      r`The target is a value of the derivative, so the Mean Value Theorem is the tool.`,
      r`\(\dfrac{E(9)-E(5)}{9-5}=-2\).`,
    ], r`Yes. \(E\) is differentiable, and therefore continuous, on \([5,9]\). By the Mean Value Theorem there is a time \(t\) in \((5,9)\) with \(E'(t)=\dfrac{E(9)-E(5)}{9-5}=-2\).`),
    ex("exam", "Part (d)", r`Amount of water at \(t=12\).`, [
      r`Amount \(=30+\displaystyle\int_0^{12}E(t)\,dt-\int_0^{12}L(t)\,dt\).`,
      r`\(\displaystyle\int_0^{12}\left(4+\tfrac12t\right)dt=\Big[4t+\tfrac14t^2\Big]_0^{12}=48+36=84\).`,
    ], r`Approximately \(30+164-84=110\) litres.`),
    table(
      ["Part", "Points", "Awarded for"],
      [
        ["(a)", "2", "the difference quotient with table values; the answer with units"],
        ["(b)", "3", "a correct trapezoidal sum; the value 164; the meaning with units and interval"],
        ["(c)", "2", "the difference quotient equal to −2 with continuity/differentiability stated; the conclusion naming the Mean Value Theorem"],
        ["(d)", "2", "the expression starting amount + inflow − outflow; the answer"],
      ],
    ),

    sec("Question 2: a function defined by an integral of a graph"),
    `<div class="apx-def"><span class="apx-cap">Question 2</span><p>The graph of the function \(f\), consisting of four line segments, is shown. Let \(g(x)=\displaystyle\int_0^xf(t)\,dt\).</p>${figure(fGraph({ t: true }), r`The graph of \(f\).`)}<p><strong>(a)</strong> Find \(g(4)\), \(g'(4)\) and \(g''(5)\).</p><p><strong>(b)</strong> On what open intervals is \(g\) both increasing and concave down? Give a reason for your answer.</p><p><strong>(c)</strong> Find the absolute maximum value of \(g\) on \([-2,8]\). Justify your answer.</p><p><strong>(d)</strong> Find \(\displaystyle\lim_{x\to0}\frac{g(x)}{\sin x}\).</p></div>`,
    ex("exam", "Part (a)", r`Three values.`, [
      r`\(g(4)=\displaystyle\int_0^4f(t)\,dt=4-4=0\).`,
      r`\(g'(4)=f(4)=-4\).`,
      r`\(g''(5)=f'(5)=\dfrac{0-(-4)}{6-4}=2\).`,
    ], r`\(g(4)=0\), \(g'(4)=-4\), \(g''(5)=2\).`),
    ex("exam", "Part (b)", r`Increasing and concave down.`, [
      r`\(g\) is increasing where \(g'=f\gt0\): \((-2,2)\) and \((6,8)\).`,
      r`\(g\) is concave down where \(g'=f\) is decreasing: \((0,4)\).`,
    ], r`\(g\) is increasing and concave down on \((0,2)\), because \(g'=f\) is positive and decreasing there.`),
    ex("exam", "Part (c)", r`Absolute maximum of \(g\).`, [
      r`\(g'(x)=f(x)=0\) at \(x=2\) and \(x=6\) in the interior (and at the endpoint \(-2\)).`,
      r`Candidates: \(g(-2)=-4\), \(g(2)=4\), \(g(6)=-4\), \(g(8)=-2\).`,
    ], r`The absolute maximum value of \(g\) on \([-2,8]\) is \(4\), at \(x=2\).`),
    ex("exam", "Part (d)", r`A limit.`, [
      r`\(\displaystyle\lim_{x\to0}g(x)=g(0)=0\) (\(g\) is continuous) and \(\displaystyle\lim_{x\to0}\sin x=0\).`,
      r`By L'Hôpital's Rule: \(\displaystyle\lim_{x\to0}\frac{g'(x)}{\cos x}=\frac{f(0)}{1}\).`,
    ], r`\(4\).`),
    table(
      ["Part", "Points", "Awarded for"],
      [
        ["(a)", "3", "one point for each of the three values"],
        ["(b)", "2", r`the interval \((0,2)\); the reason in terms of \(g'=f\)`],
        ["(c)", "3", r`identifying the interior candidates from \(g'=f=0\); evaluating all candidates including endpoints; the answer`],
        ["(d)", "1", "the limit, with L'Hôpital's Rule correctly applied"],
      ],
    ),

    sec("Where points are usually lost"),
    mistake("Question 1(a): no units, or the wrong ones", r`<p>\(E\) is in litres per minute, so \(E'\) is in litres per minute per minute. Giving "litres per minute" loses the second point.</p>`),
    mistake("Question 1(b): a meaning with no interval or no units", r`<p>"The amount of water" is not enough. It is the amount that <em>entered</em>, in <em>litres</em>, from \(t=0\) to \(t=12\) <em>minutes</em>.</p>`),
    mistake("Question 1(c): naming the Intermediate Value Theorem", r`<p>The question is about \(E'\). The IVT would require information about values of \(E'\), which the table does not give.</p>`),
    mistake("Question 2(b): a reason about g instead of f", r`<p>"Because \(g\) is going up and curving down" restates the question. The reason is that \(f\) is positive and decreasing.</p>`),
    mistake("Question 2(c): omitting the endpoints", r`<p>A candidates-test justification without \(g(-2)\) and \(g(8)\) is incomplete, even though neither turns out to be the maximum.</p>`),

    sec("Write it so it scores"),
    justify(
      r`For Question 1, at \(t=9\) is the amount of water in the tank increasing or decreasing? Give a reason.`,
      r`At \(t=9\), \(E(9)=12\) and \(L(9)=4+4.5=8.5\). Since \(E(9)\gt L(9)\), the rate in exceeds the rate out, so the amount of water in the tank is increasing at \(t=9\).`,
      r`Both rates are evaluated and compared. This follow-up part appears often, and the comparison of the two numbers is the whole justification.`,
    ),
    exam(r`<p>Work every part even if an earlier one defeated you. Parts are scored independently wherever possible, and a later part that correctly uses a wrong earlier answer usually earns its points ("consistent with a previous error").</p>`),

    sec("Practice"),
    pq(r`For Question 1, use a left Riemann sum with the four subintervals to approximate \(\displaystyle\int_0^{12}E(t)\,dt\).`, r`\((2)(8)+(3)(14)+(4)(20)+(3)(12)=174\).`, "core"),
    pq(r`For Question 1, estimate \(E'(3.5)\) with units.`, r`\(\dfrac{E(5)-E(2)}{5-2}=\dfrac{20-14}{3}=2\) litres per minute per minute.`, "core"),
    pq(r`For Question 1, must there be a time \(t\) in \((5,12)\) at which \(E(t)=10\)? Justify.`, r`Yes. \(E\) is differentiable, hence continuous, on \([5,12]\), and \(E(12)=6\lt10\lt20=E(5)\). By the Intermediate Value Theorem there is such a \(t\).`, "exam"),
    pq(r`For Question 2, find \(g(-2)\) and write an equation for the tangent line to the graph of \(g\) at \(x=-2\).`, r`\(g(-2)=-\displaystyle\int_{-2}^0f=-4\) and \(g'(-2)=f(-2)=0\): the tangent line is \(y=-4\).`, "exam"),
    pq(r`For Question 2, find all \(x\) in \((-2,8)\) at which the graph of \(g\) has a point of inflection, with a reason.`, r`\(x=0\) and \(x=4\), because \(g'=f\) changes from increasing to decreasing at 0 and from decreasing to increasing at 4.`, "exam"),
    pq(r`For Question 2, let \(h(x)=g(x^2)\). Find \(h'(2)\).`, r`\(h'(x)=g'(x^2)\cdot2x=f(x^2)\cdot2x\), so \(h'(2)=f(4)\cdot4=-16\).`, "stretch"),

    sec("Summary"),
    key([
      ["Estimate a derivative", r`Difference quotient, nearest data, units.`],
      ["Approximate an integral", r`Each term width × height; then its meaning.`],
      ["Existence", r`Value of the function: IVT. Value of the derivative: MVT.`],
      ["Amount", r`Start + in − out.`],
    ]),
  ],
});
