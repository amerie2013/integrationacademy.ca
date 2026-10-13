// AP Calculus AB exam prep — Unit 2 (The Derivative), lessons 2.1–2.4.
// Original wording, examples, numbers and figures throughout (see u1a for notes).
import { r, lesson, lede, goals, sec, p, disp, def, thm, exam, mistake, justify, ex, pq, key, table } from "./apcalc/kit.mjs";
import { plot, figure, C } from "./apcalc/fig.mjs";

export const u2a = {};

// ───────────────────────── 2.1 ─────────────────────────
u2a["2.1"] = lesson({
  code: "2.1", unit: 2, official: "2.1", calc: "No calculator",
  title: "Slope at a Single Point",
  parts: () => {
    const g = plot({ w: 400, h: 320, x: [-1, 3.5], y: [-1, 7], alt: "Secant lines through (1,1) on y = x squared swinging toward the tangent line" });
    g.curve((x) => 1 + 3.5 * (x - 1), -0.2, 3.1, { color: C.grey, width: 1.4, dash: "5 4" })
      .curve((x) => 1 + 3 * (x - 1), -0.2, 3, { color: C.grey, width: 1.4, dash: "5 4" })
      .curve((x) => 2 * x - 1, -0.2, 3.4, { color: C.alt, width: 2 })
      .curve((x) => x * x, -0.9, 2.62)
      .dot(1, 1).dot(2.5, 6.25, { color: C.grey }).dot(2, 4, { color: C.grey })
      .label(1.12, 0.55, "P(1, 1)", { plain: true, size: 12 }).label(2.55, 3.6, "tangent", { color: C.alt, size: 13 });
    return [
      lede(r`A straight line has one slope. A curve has a different steepness at every point, and the question "how steep is it <em>here</em>?" cannot be answered with two points, because a single point gives rise over run of \(\tfrac00\). Unit 1 built the tool for exactly this. Take a second point, compute the slope between them, and ask what that slope approaches as the second point slides in.`),
      goals([
        r`Express the slope of a tangent line as a limit of secant slopes, in two equivalent forms.`,
        r`Compute an instantaneous rate of change from the limit.`,
        r`Write the equation of a tangent line.`,
        r`Interpret an instantaneous rate in context, with units.`,
      ]),

      sec("From secant to tangent"),
      figure(g, r`On \(y=x^2\), secant lines through \(P(1,1)\) and a second point (dashed) swing toward the tangent line (red) as the second point approaches \(P\).`),
      p(r`Take the fixed point \((a,f(a))\) and a second point \(h\) units to the right. The secant slope between them is the average rate of change`),
      disp(r`\frac{f(a+h)-f(a)}{h}.`),
      p(r`As \(h\to0\) the second point slides into the first and the secant line turns into the <strong>tangent line</strong>.`),
      def("Instantaneous rate of change", r`<p>The instantaneous rate of change of \(f\) at \(x=a\), which is also the slope of the tangent line to the graph at \((a,f(a))\), is</p>${disp(r`\lim_{h\to0}\frac{f(a+h)-f(a)}{h}\qquad\text{or equivalently}\qquad\lim_{x\to a}\frac{f(x)-f(a)}{x-a},`)}<p>provided the limit exists.</p>`),
      p(r`The two forms describe the same secant slope: the second simply names the moving point \(x\) instead of \(a+h\). Use whichever makes the algebra easier, and learn to recognise both.`),

      sec("The tangent line"),
      p(r`Once the slope \(m\) at \(x=a\) is known, the tangent line is the line through \((a,f(a))\) with that slope:`),
      disp(r`y-f(a)=m\,(x-a).`),
      p(r`You need two ingredients, a <strong>point</strong> and a <strong>slope</strong>, and they come from two different calculations: the point from \(f\), the slope from the limit.`),

      sec("Worked examples"),
      ex("core", "Slope and tangent line", r`Find the slope of the tangent line to \(f(x)=x^2\) at \(x=3\), and write an equation for the line.`, [
        r`\(\dfrac{f(3+h)-f(3)}{h}=\dfrac{(3+h)^2-9}{h}=\dfrac{6h+h^2}{h}=6+h\) for \(h\neq0\).`,
        r`\(\displaystyle\lim_{h\to0}(6+h)=6\). The slope is 6.`,
        r`The point is \((3,f(3))=(3,9)\).`,
      ], r`Slope \(6\); tangent line \(y-9=6(x-3)\).`),
      ex("exam", "A reciprocal", r`Find the instantaneous rate of change of \(f(x)=\dfrac1x\) at \(x=2\).`, [
        r`\(f(2+h)-f(2)=\dfrac{1}{2+h}-\dfrac12=\dfrac{2-(2+h)}{2(2+h)}=\dfrac{-h}{2(2+h)}\).`,
        r`Divide by \(h\): \(\dfrac{-1}{2(2+h)}\) for \(h\neq0\).`,
        r`Let \(h\to0\): \(\dfrac{-1}{2\cdot2}\).`,
      ], r`The instantaneous rate of change is \(-\dfrac14\).`),
      ex("exam", "A rate in context", r`A ball is thrown upward. Its height after \(t\) seconds is \(H(t)=20t-5t^2\) metres. Find the instantaneous rate of change of \(H\) at \(t=1\) and interpret it.`, [
        r`\(H(1)=15\) and \(H(1+k)=20(1+k)-5(1+k)^2=15+10k-5k^2\).`,
        r`\(\dfrac{H(1+k)-H(1)}{k}=\dfrac{10k-5k^2}{k}=10-5k\to10\) as \(k\to0\).`,
      ], r`At \(t=1\) second, the height of the ball is increasing at a rate of 10 metres per second.`),
      ex("stretch", "The other form of the limit", r`Use \(\displaystyle\lim_{x\to a}\dfrac{f(x)-f(a)}{x-a}\) to find the slope of the tangent to \(f(x)=\sqrt x\) at \(x=4\). Where does this tangent line cross the \(y\)-axis?`, [
        r`\(\dfrac{\sqrt x-2}{x-4}=\dfrac{\sqrt x-2}{(\sqrt x-2)(\sqrt x+2)}=\dfrac{1}{\sqrt x+2}\) for \(x\neq4\).`,
        r`As \(x\to4\) this tends to \(\dfrac14\). The slope is \(\dfrac14\).`,
        r`Tangent line: \(y-2=\dfrac14(x-4)\). At \(x=0\): \(y=2-1=1\).`,
      ], r`Slope \(\dfrac14\); the tangent line crosses the \(y\)-axis at \((0,1)\).`),

      sec("Common errors"),
      mistake("stopping before the limit", r`<p>\(6+h\) is a secant slope. The tangent slope is the number it approaches, 6. An answer that still contains \(h\) is not finished.</p>`),
      mistake("building the line from the wrong numbers", r`<p>In \(y-f(a)=m(x-a)\) the point comes from the <em>function</em> and the slope from the <em>limit</em>. Writing \(y-6=9(x-3)\) in the first example swaps them.</p>`),
      mistake("an interpretation with an interval", r`<p>An instantaneous rate belongs to a moment. Say "at \(t=1\) second", not "from \(t=0\) to \(t=1\)", and do not say "average".</p>`),

      sec("Write it so it scores"),
      justify(
        r`For the ball above, the instantaneous rate of change of \(H\) at \(t=3\) is \(-10\). Interpret this value in context, with units.`,
        r`At \(t=3\) seconds, the height of the ball is decreasing at a rate of 10 metres per second.`,
        r`It states the instant, the quantity, the direction (taken from the sign) and the units. Writing "the rate is \(-10\) and decreasing" would double the negative and be marked wrong.`,
      ),
      exam(r`<p>A tangent line may be left in point-slope form, \(y-9=6(x-3)\). Simplifying to \(y=6x-9\) earns nothing extra and is one more place to make an arithmetic slip.</p>`),

      sec("Practice"),
      pq(r`Find the slope of the tangent line to \(f(x)=3x^2-x\) at \(x=1\).`, r`\(\dfrac{3(1+h)^2-(1+h)-2}{h}=\dfrac{5h+3h^2}{h}=5+3h\to5\).`, "core"),
      pq(r`Write an equation for the tangent line to \(f(x)=x^3\) at \(x=1\).`, r`\(\dfrac{(1+h)^3-1}{h}=3+3h+h^2\to3\). Point \((1,1)\): \(y-1=3(x-1)\).`, "core"),
      pq(r`Find the instantaneous rate of change of \(f(x)=\dfrac2x\) at \(x=1\).`, r`\(\dfrac{\frac{2}{1+h}-2}{h}=\dfrac{-2h}{h(1+h)}=\dfrac{-2}{1+h}\to-2\).`, "exam"),
      pq(r`A tank holds \(V(t)=t^2+4t\) litres after \(t\) minutes. Find the instantaneous rate of change of \(V\) at \(t=3\) and interpret it.`, r`\(\dfrac{(3+h)^2+4(3+h)-21}{h}=10+h\to10\). At \(t=3\) minutes, the volume of water in the tank is increasing at a rate of 10 litres per minute.`, "exam"),
      pq(r`Write an equation for the tangent line to \(f(x)=\sqrt{x+5}\) at \(x=4\).`, r`\(\dfrac{\sqrt{9+h}-3}{h}=\dfrac{1}{\sqrt{9+h}+3}\to\dfrac16\). Point \((4,3)\): \(y-3=\dfrac16(x-4)\).`, "stretch"),
      pq(r`At what point on \(y=x^2\) is the tangent line parallel to the secant line through \((0,0)\) and \((4,16)\)?`, r`The secant slope is 4. At \(x=a\) the tangent slope is \(\displaystyle\lim_{h\to0}(2a+h)=2a\). Setting \(2a=4\) gives \(a=2\): the point \((2,4)\).`, "stretch"),

      sec("Summary"),
      key([
        ["Secant slope", r`\(\dfrac{f(a+h)-f(a)}{h}\): an average rate over an interval.`],
        ["Tangent slope", r`Its limit as \(h\to0\): the rate at an instant.`],
        ["Tangent line", r`\(y-f(a)=m(x-a)\): point from \(f\), slope from the limit.`],
        ["Interpretation", r`"At \(t=\dots\), [quantity] is increasing/decreasing at [rate] [units]."`],
      ]),
    ];
  },
});

// ───────────────────────── 2.2 ─────────────────────────
u2a["2.2"] = lesson({
  code: "2.2", unit: 2, official: "2.2", calc: "No calculator",
  title: "The Derivative as a Limit",
  parts: () => [
    lede(r`In Lesson 2.1 the slope was found at one chosen point. Leave the point as a variable and the same limit produces a whole new function, one that reports the slope of \(f\) everywhere at once. That function is the <strong>derivative</strong>. The exam tests its definition in two directions: forwards (compute a derivative from the limit) and backwards (recognise that a given limit <em>is</em> a derivative and evaluate it at sight).`),
    goals([
      r`State both limit definitions of the derivative.`,
      r`Differentiate simple functions directly from the definition.`,
      r`Read and write every standard notation for a derivative.`,
      r`Recognise a limit as the derivative of a function at a point, and use that to evaluate it.`,
    ]),

    sec("The definition"),
    def("Derivative", r`<p>The derivative of \(f\) is the function</p>${disp(r`f'(x)=\lim_{h\to0}\frac{f(x+h)-f(x)}{h}`)}<p>defined wherever the limit exists. Its value at a particular point can also be written</p>${disp(r`f'(a)=\lim_{x\to a}\frac{f(x)-f(a)}{x-a}.`)}<p>If \(f'(a)\) exists, \(f\) is <strong>differentiable</strong> at \(a\).</p>`),

    sec("Notation"),
    p(r`For \(y=f(x)\) the following all mean the derivative. The exam uses every one of them without warning.`),
    table(
      ["Notation", "Read as", "Value at a point"],
      [
        [r`\(f'(x)\)`, r`"f prime of x"`, r`\(f'(2)\)`],
        [r`\(y'\)`, r`"y prime"`, r`\(y'(2)\)`],
        [r`\(\dfrac{dy}{dx}\)`, r`"dee y dee x"`, r`\(\left.\dfrac{dy}{dx}\right|_{x=2}\)`],
        [r`\(\dfrac{d}{dx}\big[f(x)\big]\)`, r`"the derivative with respect to x of f"`, ""],
      ],
    ),
    p(r`\(\dfrac{d}{dx}\) is an instruction: "differentiate what follows". \(\dfrac{dy}{dx}\) is the result of carrying it out on \(y\).`),

    sec("Recognising a derivative inside a limit"),
    p(r`A limit that looks hard is sometimes a derivative in disguise. Match it to one of the two templates and identify the function \(f\) and the point \(a\).`),
    table(
      ["Limit", "Template", r`\(f\) and \(a\)`, "So the limit equals"],
      [
        [r`\(\displaystyle\lim_{h\to0}\dfrac{(2+h)^3-8}{h}\)`, r`\(\dfrac{f(a+h)-f(a)}{h}\)`, r`\(f(x)=x^3,\ a=2\)`, r`\(f'(2)\)`],
        [r`\(\displaystyle\lim_{x\to9}\dfrac{\sqrt x-3}{x-9}\)`, r`\(\dfrac{f(x)-f(a)}{x-a}\)`, r`\(f(x)=\sqrt x,\ a=9\)`, r`\(f'(9)\)`],
        [r`\(\displaystyle\lim_{h\to0}\dfrac{e^{h}-1}{h}\)`, r`\(\dfrac{f(a+h)-f(a)}{h}\)`, r`\(f(x)=e^x,\ a=0\)`, r`\(f'(0)\)`],
      ],
    ),
    p(r`The check that confirms your match: the number being subtracted must equal \(f(a)\). In the first row, \(8=2^3\). Once the differentiation rules of Lessons 2.5 and 2.6 are known, such limits are evaluated in one line.`),

    sec("Worked examples"),
    ex("core", "A polynomial from the definition", r`Use the definition to find \(f'(x)\) for \(f(x)=x^2-3x\).`, [
      r`\(f(x+h)=(x+h)^2-3(x+h)=x^2+2xh+h^2-3x-3h\).`,
      r`\(f(x+h)-f(x)=2xh+h^2-3h=h(2x+h-3)\).`,
      r`\(f'(x)=\displaystyle\lim_{h\to0}\dfrac{h(2x+h-3)}{h}=\lim_{h\to0}(2x+h-3)\).`,
    ], r`\(f'(x)=2x-3\).`),
    ex("exam", "A square root from the definition", r`Use the definition to find \(f'(x)\) for \(f(x)=\sqrt x\), \(x\gt0\).`, [
      r`\(\dfrac{\sqrt{x+h}-\sqrt x}{h}\cdot\dfrac{\sqrt{x+h}+\sqrt x}{\sqrt{x+h}+\sqrt x}=\dfrac{(x+h)-x}{h\left(\sqrt{x+h}+\sqrt x\right)}\).`,
      r`Cancel \(h\): \(\dfrac{1}{\sqrt{x+h}+\sqrt x}\).`,
      r`Let \(h\to0\): \(\dfrac{1}{\sqrt x+\sqrt x}\).`,
    ], r`\(f'(x)=\dfrac{1}{2\sqrt x}\).`),
    ex("exam", "A rational function from the definition", r`Use the definition to find \(f'(x)\) for \(f(x)=\dfrac{1}{x+1}\).`, [
      r`\(\dfrac{1}{x+h+1}-\dfrac{1}{x+1}=\dfrac{(x+1)-(x+h+1)}{(x+h+1)(x+1)}=\dfrac{-h}{(x+h+1)(x+1)}\).`,
      r`Divide by \(h\): \(\dfrac{-1}{(x+h+1)(x+1)}\).`,
      r`Let \(h\to0\).`,
    ], r`\(f'(x)=-\dfrac{1}{(x+1)^2}\).`),
    ex("stretch", "Variations on the template", r`Suppose \(f'(3)=4\). Evaluate (a) \(\displaystyle\lim_{h\to0}\dfrac{f(3+2h)-f(3)}{h}\) and (b) \(\displaystyle\lim_{h\to0}\dfrac{f(3+h)-f(3-h)}{h}\).`, [
      r`<strong>(a)</strong> The step is \(2h\), but the denominator is only \(h\). Write \(\dfrac{f(3+2h)-f(3)}{h}=2\cdot\dfrac{f(3+2h)-f(3)}{2h}\). As \(h\to0\), \(2h\to0\), so the fraction tends to \(f'(3)\).`,
      r`<strong>(b)</strong> Insert \(f(3)\): \(\dfrac{f(3+h)-f(3)}{h}+\dfrac{f(3)-f(3-h)}{h}\). The first term tends to \(f'(3)\). The second is the secant slope between \(3-h\) and \(3\), which also tends to \(f'(3)\).`,
    ], r`(a) \(2\cdot4=8\). (b) \(4+4=8\).`),

    sec("Common errors"),
    mistake(r`\(f(x+h)=f(x)+h\)`, r`<p>\(f(x+h)\) means "replace every \(x\) by \((x+h)\)". For \(f(x)=x^2-3x\) that is \((x+h)^2-3(x+h)\), not \(x^2-3x+h\).</p>`),
    mistake(r`\((x+h)^2=x^2+h^2\)`, r`<p>The middle term \(2xh\) is the one that survives the limit. Lose it and the derivative comes out as 0.</p>`),
    mistake("losing the limit symbol", r`<p>As in Lesson 1.5: keep "\(\lim\)" on every line that still contains \(h\), and drop it on the line where \(h\) is replaced by 0.</p>`),
    mistake("mis-matching a disguised derivative", r`<p>\(\displaystyle\lim_{h\to0}\dfrac{(2+h)^3-8}{h}\) is \(f'(2)\) for \(f(x)=x^3\), not \(f'(8)\). The point \(a\) is what \(h\) is added to.</p>`),

    sec("Write it so it scores"),
    justify(
      r`Use the definition of the derivative to show that if \(f(x)=x^2-3x\) then \(f'(x)=2x-3\).`,
      r`\(f'(x)=\displaystyle\lim_{h\to0}\dfrac{f(x+h)-f(x)}{h}=\lim_{h\to0}\dfrac{(x+h)^2-3(x+h)-(x^2-3x)}{h}=\lim_{h\to0}\dfrac{2xh+h^2-3h}{h}=\lim_{h\to0}(2x+h-3)=2x-3.\)`,
      r`When a question says "use the definition", the limit must appear explicitly and be carried through correctly. Quoting the power rule earns no credit, even though it gives the same answer.`,
    ),
    exam(r`<p>The backwards direction is a multiple-choice staple: a limit such as \(\displaystyle\lim_{h\to0}\dfrac{\cos\left(\frac\pi2+h\right)-\cos\frac\pi2}{h}\) appears with four numerical options. Do not attempt algebra. Name it as \(f'\!\left(\tfrac\pi2\right)\) for \(f(x)=\cos x\) and differentiate.</p>`),

    sec("Practice"),
    pq(r`Use the definition to find \(f'(x)\) for \(f(x)=4x^2+1\).`, r`\(\dfrac{4(x+h)^2+1-4x^2-1}{h}=\dfrac{8xh+4h^2}{h}=8x+4h\to8x\).`, "core"),
    pq(r`Use the definition to find \(f'(x)\) for \(f(x)=x^3\).`, r`\(\dfrac{(x+h)^3-x^3}{h}=3x^2+3xh+h^2\to3x^2\).`, "core"),
    pq(r`Use the definition to find \(f'(x)\) for \(f(x)=\dfrac2x\).`, r`\(\dfrac{\frac{2}{x+h}-\frac2x}{h}=\dfrac{-2h}{h\,x(x+h)}=\dfrac{-2}{x(x+h)}\to-\dfrac{2}{x^2}\).`, "exam"),
    pq(r`The limit \(\displaystyle\lim_{x\to2}\dfrac{x^3-8}{x-2}\) is the derivative of what function at what point? Evaluate it.`, r`\(f(x)=x^3\) at \(a=2\). Factoring, \(x^2+2x+4\to12\), so \(f'(2)=12\).`, "exam"),
    pq(r`Identify \(f\) and \(a\) so that \(\displaystyle\lim_{h\to0}\dfrac{\ln(e+h)-1}{h}=f'(a)\).`, r`\(f(x)=\ln x\) and \(a=e\), since \(\ln e=1\). (Its value, from Lesson 2.6, is \(\tfrac1e\).)`, "exam"),
    pq(r`Suppose \(g'(1)=-3\). Evaluate \(\displaystyle\lim_{h\to0}\dfrac{g(1+5h)-g(1)}{2h}\).`, r`\(\dfrac52\cdot\dfrac{g(1+5h)-g(1)}{5h}\to\dfrac52(-3)=-\dfrac{15}{2}\).`, "stretch"),
    pq(r`For \(f(x)=x^2\), evaluate \(\displaystyle\lim_{h\to0}\dfrac{f(x+h)-f(x-h)}{2h}\).`, r`\(\dfrac{(x+h)^2-(x-h)^2}{2h}=\dfrac{4xh}{2h}=2x\). This "symmetric" quotient also gives \(f'(x)\).`, "stretch"),

    sec("Summary"),
    key([
      ["Definition", r`\(f'(x)=\displaystyle\lim_{h\to0}\dfrac{f(x+h)-f(x)}{h}\).`],
      ["At a point", r`\(f'(a)=\displaystyle\lim_{x\to a}\dfrac{f(x)-f(a)}{x-a}\).`],
      ["Notation", r`\(f'(x)\), \(y'\), \(\dfrac{dy}{dx}\), \(\dfrac{d}{dx}[f(x)]\).`],
      ["In disguise", r`Match the template, name \(f\) and \(a\), check \(f(a)\).`],
    ]),
  ],
});

// ───────────────────────── 2.3 ─────────────────────────
const quad = (x) => 2 + 0.5 * (x - 2) - 0.25 * (x - 2) ** 2;
export const tangentFigure = () => {
  const g = plot({ w: 400, h: 300, x: [-1, 6], y: [-1, 4], alt: "Graph of f with the tangent line at x = 2 passing through (0,1) and (4,3)" });
  g.curve((x) => 0.5 * x + 1, -0.8, 5.6, { color: C.alt, width: 1.8 }).curve(quad, -0.6, 5.7).dot(2, 2).dot(0, 1, { color: C.alt, r: 3.4 }).dot(4, 3, { color: C.alt, r: 3.4 });
  g.label(4.6, 0.9, "y = f(x)");
  return g;
};

u2a["2.3"] = lesson({
  code: "2.3", unit: 2, official: "2.3", calc: "Both",
  title: "Estimating a Derivative from Data and Graphs",
  parts: () => [
    lede(r`Real measurements do not come with formulas. A sensor reports a temperature every few minutes; a graph is handed to you with no equation. There is still a rate of change at each moment, and the exam expects you to estimate it. In almost every year's free-response section there is a table, and one of the first points available is for estimating a derivative from it.`),
    goals([
      r`Estimate a derivative from a table using the nearest data on each side.`,
      r`Estimate a derivative from a graph using a tangent line.`,
      r`Evaluate a derivative numerically on a graphing calculator and record it properly.`,
      r`Attach units to an estimated derivative and interpret it.`,
    ]),

    sec("From a table"),
    p(r`A derivative is a limit of difference quotients. With only a table, you cannot take the limit, so you use the <strong>best available difference quotient</strong>: the one over the shortest interval that contains the point.`),
    table([r`\(t\) (minutes)`, "0", "4", "10", "15", "20"], [[r`\(T(t)\) (°C)`, "68", "61", "52", "47", "44"]]),
    p(r`To estimate \(T'(12)\), use the tabulated times on either side of 12, namely 10 and 15:`),
    disp(r`T'(12)\approx\frac{T(15)-T(10)}{15-10}=\frac{47-52}{5}=-1\ \text{°C per minute}.`),
    p(r`Three details matter. The symbol is \(\approx\), not \(=\). The difference quotient is <strong>written out with the table values</strong>, not just its result. And the units are those of \(T\) divided by those of \(t\).`),

    sec("From a graph"),
    p(r`On a graph, \(f'(a)\) is the slope of the tangent line at \(x=a\). If the tangent is drawn, pick two points <em>on the tangent line</em> (not on the curve) that sit at clear grid positions and compute rise over run.`),
    figure(tangentFigure(), r`The tangent line to the graph of \(f\) at \(x=2\) passes through \((0,1)\) and \((4,3)\), so \(f'(2)=\dfrac{3-1}{4-0}=\dfrac12\).`),
    p(r`Even without numbers, a graph orders its derivatives. Where the graph rises, \(f'\gt0\); where it falls, \(f'\lt0\); at a peak or valley with a horizontal tangent, \(f'=0\); and the steeper the graph, the larger \(|f'|\). In the figure, \(f'(0)\gt f'(2)\gt0=f'(3)\gt f'(5)\).`),

    sec("On the calculator"),
    p(r`In the calculator-required parts, a derivative at a point can be evaluated numerically (a "numerical derivative" or \(\tfrac{d}{dx}\) template, depending on the model). The calculator does the arithmetic; the <strong>page</strong> must still show what was computed.`),
    `<ul><li>Write the mathematical statement: \(f'(1.5)=3.152\). Never write calculator syntax.</li><li>Give answers correct to <strong>three decimal places</strong>, rounded or truncated.</li><li>Radian mode, always.</li></ul>`,

    sec("Worked examples"),
    ex("core", "A derivative from a table", r`Using the temperature table above, estimate \(T'(7)\). Show the computation and give units.`, [
      r`The times on either side of 7 are 4 and 10.`,
      r`\(T'(7)\approx\dfrac{T(10)-T(4)}{10-4}=\dfrac{52-61}{6}\).`,
    ], r`\(T'(7)\approx-1.5\) °C per minute.`),
    ex("exam", "A numerical derivative", r`Let \(f(x)=x^2\sin x\). Find \(f'(1.5)\).`, [
      r`Radian mode. Evaluate the numerical derivative of \(x^2\sin x\) at \(x=1.5\).`,
      r`The calculator returns \(3.15164\dots\)`,
    ], r`\(f'(1.5)=3.152\).`),
    ex("exam", "Reading slopes from a graph", r`For the function \(f\) graphed above, which is greater: \(f'(2)\) or the average rate of change of \(f\) over \([0,4]\)?`, [
      r`From the tangent line, \(f'(2)=\dfrac12\).`,
      r`The graph passes through \((0,0)\) and \((4,2)\), so the average rate of change over \([0,4]\) is \(\dfrac{2-0}{4-0}=\dfrac12\).`,
    ], r`They are equal. The tangent at \(x=2\) is parallel to the secant through the endpoints.`),
    ex("stretch", "Choosing between possible estimates", r`A table gives \(f(1.9)=7.22\), \(f(2)=8\) and \(f(2.1)=8.82\). Find three difference-quotient estimates of \(f'(2)\) and say which is generally best.`, [
      r`Forward (2 to 2.1): \(\dfrac{8.82-8}{0.1}=8.2\).`,
      r`Backward (1.9 to 2): \(\dfrac{8-7.22}{0.1}=7.8\).`,
      r`Symmetric (1.9 to 2.1): \(\dfrac{8.82-7.22}{0.2}=8\).`,
    ], r`The symmetric quotient, 8, uses data on both sides and balances the over- and under-estimates of the other two. When the point lies between tabulated values, that is the one to use.`),

    sec("Common errors"),
    mistake("writing = for an estimate", r`<p>\(T'(12)=-1\) claims exactness. From a table the correct statement is \(T'(12)\approx-1\).</p>`),
    mistake("using a wider interval than necessary", r`<p>Estimating \(T'(12)\) with \(t=4\) and \(t=20\) uses data, but not the best data. Use the closest values on either side.</p>`),
    mistake("reading points off the curve instead of the tangent", r`<p>Two points on the <em>curve</em> give a secant slope. For \(f'(a)\) from a drawn tangent, both points must lie on the tangent line.</p>`),
    mistake("giving only a number", r`<p>"\(-1\)" with no difference quotient shown usually earns no credit, even when correct. The set-up is the evidence.</p>`),

    sec("Write it so it scores"),
    justify(
      r`Using the table, estimate \(T'(12)\). Show the computations that lead to your answer. Using correct units, interpret the meaning of your answer in context.`,
      r`\(T'(12)\approx\dfrac{T(15)-T(10)}{15-10}=\dfrac{47-52}{5}=-1\). At \(t=12\) minutes, the temperature is decreasing at a rate of approximately 1 °C per minute.`,
      r`The difference quotient is shown with table values, the answer follows from it, and the interpretation names the instant, the quantity, the direction and the units. This two-point pattern recurs on the exam almost unchanged.`,
    ),
    exam(r`<p>"Approximately" in the interpretation is not decoration. The value came from an estimate, and a sentence that presents it as exact can be marked down.</p>`),

    sec("Practice"),
    pq(r`A population \(P(t)\), in thousands, is recorded at \(t=0,2,5,9\) years as \(12,18,30,34\). Estimate \(P'(3.5)\) with units.`, r`\(P'(3.5)\approx\dfrac{P(5)-P(2)}{5-2}=\dfrac{30-18}{3}=4\) thousand per year.`, "core"),
    pq(r`Using the same data, estimate \(P'(7)\).`, r`\(P'(7)\approx\dfrac{34-30}{9-5}=1\) thousand per year.`, "core"),
    pq(r`The tangent line to the graph of \(g\) at \(x=1\) passes through \((1,4)\) and \((3,0)\). Find \(g'(1)\) and \(g(1)\).`, r`\(g'(1)=\dfrac{0-4}{3-1}=-2\), and \(g(1)=4\) because the tangent line touches the graph at \(x=1\).`, "exam"),
    pq(r`(Calculator) Let \(f(x)=\dfrac{e^x}{x}\). Find \(f'(2)\).`, r`\(f'(2)=1.847\).`, "exam"),
    pq(r`(Calculator) Let \(f(x)=\ln(x^2+1)\). Find \(f'(3)\).`, r`\(f'(3)=0.600\).`, "exam"),
    pq(r`(Calculator) Use the symmetric difference quotient with \(h=0.01\) to estimate the derivative of \(f(x)=2^x\) at \(x=0\).`, r`\(\dfrac{2^{0.01}-2^{-0.01}}{0.02}=\dfrac{1.006956-0.993092}{0.02}\approx0.693\). (The exact value is \(\ln2\).)`, "stretch"),

    sec("Summary"),
    key([
      ["Table", r`Nearest values on each side; show the quotient; use \(\approx\).`],
      ["Graph", r`Slope of the tangent, from two points on the tangent line.`],
      ["Calculator", r`Write \(f'(a)=\dots\) to three decimal places, in radians.`],
      ["Units", r`Output units per input unit.`],
    ]),
  ],
});

// ───────────────────────── 2.4 ─────────────────────────
u2a["2.4"] = lesson({
  code: "2.4", unit: 2, official: "2.4", calc: "No calculator",
  title: "Corners, Cusps and Breaks: When the Derivative Fails",
  parts: () => {
    const mk = (alt) => plot({ w: 215, h: 200, x: [-2, 4], y: [-2, 4], alt, ticks: false });
    const a = mk("Jump discontinuity"); a.curve((x) => 0.5 * x + 1, -1.7, 1).curve((x) => 0.5 * x - 1, 1, 3.7).dot(1, 1.5).hole(1, -0.5);
    const b = mk("Corner"); b.curve((x) => Math.abs(x - 1) + 0.5, -1.7, 3.7);
    const c = mk("Cusp"); c.curve((x) => 0.5 + 1.6 * Math.cbrt((x - 1) ** 2), -1.7, 3.7, { n: 900 });
    const d = mk("Vertical tangent"); d.curve((x) => 1 + 1.5 * Math.cbrt(x - 1), -1.7, 3.7, { n: 900 });
    return [
      lede(r`A derivative is a limit, and limits can fail to exist. When the difference quotient has no limit at a point, the function has no derivative there: it is <strong>not differentiable</strong> at that point. This lesson catalogues the ways that happens, establishes the one-way link between differentiability and continuity, and shows how to choose constants so that two pieces join <em>smoothly</em>.`),
      goals([
        r`Identify, from a graph or formula, where a function is not differentiable and why.`,
        r`Use the theorem "differentiable implies continuous" in both of its useful forms.`,
        r`Test differentiability of a piecewise function at a boundary.`,
        r`Find constants that make a piecewise function differentiable.`,
      ]),

      sec("Four ways to fail"),
      `<div class="apx-figrow">${figure(a, r`<strong>Discontinuity.</strong> The pieces do not meet.`)}${figure(b, r`<strong>Corner.</strong> The slopes from left and right are different numbers.`)}${figure(c, r`<strong>Cusp.</strong> The slopes tend to \(-\infty\) on one side and \(+\infty\) on the other.`)}${figure(d, r`<strong>Vertical tangent.</strong> The slope tends to \(\infty\) (or \(-\infty\)) from both sides.`)}</div>`,
      p(r`In terms of the definition: \(f'(a)\) exists only if the left-hand and right-hand limits of \(\dfrac{f(x)-f(a)}{x-a}\) both exist, are finite, and are equal. Each picture breaks one of those requirements.`),

      sec("Differentiability and continuity"),
      thm("Differentiable implies continuous", r`<p>If \(f\) is differentiable at \(x=a\), then \(f\) is continuous at \(x=a\).</p>`),
      p(r`The reason is one line: \(f(x)-f(a)=\dfrac{f(x)-f(a)}{x-a}\cdot(x-a)\to f'(a)\cdot0=0\), so \(f(x)\to f(a)\). Two consequences are used constantly.`),
      key([
        ["Reading it forwards", r`A question that says "\(f\) is differentiable" has also told you \(f\) is continuous. That is how the exam supplies the hypothesis of the Intermediate Value Theorem.`],
        ["Reading it backwards", r`If \(f\) is <em>not</em> continuous at \(a\), then \(f\) is not differentiable at \(a\). No further work is needed.`],
        ["What it does not say", r`Continuous does <strong>not</strong> imply differentiable. \(|x|\) is continuous at 0 and has a corner there.`],
      ]),

      sec("Piecewise functions at a boundary"),
      p(r`For \(f\) to be differentiable where its rule changes, two conditions must <strong>both</strong> hold, and they must be checked in this order.`),
      `<ol><li><strong>Continuity.</strong> The two pieces give the same value at the boundary.</li><li><strong>Matching slopes.</strong> The derivatives of the two pieces give the same value at the boundary.</li></ol>`,
      p(r`Checking only the slopes is a trap: two pieces can have equal slopes and still be separated by a jump.`),

      sec("Worked examples"),
      ex("core", "A corner", r`Show that \(f(x)=|x-2|\) is not differentiable at \(x=2\).`, [
        r`For \(x\gt2\): \(\dfrac{f(x)-f(2)}{x-2}=\dfrac{x-2}{x-2}=1\).`,
        r`For \(x\lt2\): \(\dfrac{f(x)-f(2)}{x-2}=\dfrac{-(x-2)}{x-2}=-1\).`,
        r`The one-sided limits of the difference quotient are \(1\) and \(-1\).`,
      ], r`They are not equal, so \(f'(2)\) does not exist. (\(f\) is continuous at 2: this is a corner.)`),
      ex("exam", "Two pieces that join smoothly", r`Let \(f(x)=\begin{cases}x^2,&x\le1\\2x-1,&x\gt1\end{cases}\). Is \(f\) differentiable at \(x=1\)?`, [
        r`<strong>Continuity.</strong> \(\displaystyle\lim_{x\to1^-}f(x)=1\), \(\displaystyle\lim_{x\to1^+}f(x)=2-1=1\), \(f(1)=1\). Continuous.`,
        r`<strong>Slopes.</strong> From the left, the slope of \(x^2\) at 1 is \(2(1)=2\). From the right, the slope of \(2x-1\) is 2.`,
      ], r`Yes. \(f\) is continuous at 1 and the one-sided derivatives are equal, so \(f'(1)=2\).`),
      ex("exam", "Equal slopes are not enough", r`Let \(h(x)=\begin{cases}x^2+3,&x\le1\\2x,&x\gt1\end{cases}\). Is \(h\) differentiable at \(x=1\)?`, [
        r`<strong>Continuity.</strong> \(\displaystyle\lim_{x\to1^-}h(x)=4\) but \(\displaystyle\lim_{x\to1^+}h(x)=2\).`,
        r`\(h\) is not continuous at \(x=1\).`,
      ], r`No. \(h\) is not continuous at 1, so it is not differentiable there, even though both pieces have slope 2 at the boundary.`),
      ex("stretch", "Two constants for a smooth join", r`Find \(a\) and \(b\) so that \(f(x)=\begin{cases}x^3,&x\le1\\ax+b,&x\gt1\end{cases}\) is differentiable at \(x=1\).`, [
        r`<strong>Continuity:</strong> \(1^3=a(1)+b\), so \(a+b=1\).`,
        r`<strong>Slopes:</strong> the slope of \(x^3\) at 1 is \(3(1)^2=3\); the slope of \(ax+b\) is \(a\). So \(a=3\).`,
        r`Then \(b=1-3=-2\).`,
      ], r`\(a=3\), \(b=-2\). The line \(y=3x-2\) is the tangent line to \(y=x^3\) at \((1,1)\), which is exactly what a smooth join means.`),

      sec("Common errors"),
      mistake("\"continuous, therefore differentiable\"", r`<p>The theorem runs one way only. Corners, cusps and vertical tangents are all continuous and not differentiable.</p>`),
      mistake("matching derivatives without checking continuity", r`<p>Setting only \(2x=a\) at the boundary solves for a slope and ignores whether the pieces meet. Always write the continuity equation first.</p>`),
      mistake("differentiating at the boundary with one formula", r`<p>For \(g(x)=\begin{cases}x^2+1,&x\le1\\3x-1,&x\gt1\end{cases}\), writing \(g'(1)=2(1)=2\) uses only the left piece. The right-hand slope is 3, so \(g'(1)\) does not exist.</p>`),

      sec("Write it so it scores"),
      justify(
        r`Let \(g(x)=\begin{cases}x^2+1,&x\le1\\3x-1,&x\gt1\end{cases}\). Is \(g\) differentiable at \(x=1\)? Justify your answer.`,
        r`No. \(\displaystyle\lim_{x\to1^-}\dfrac{g(x)-g(1)}{x-1}=\lim_{x\to1^-}\dfrac{x^2-1}{x-1}=2\) and \(\displaystyle\lim_{x\to1^+}\dfrac{g(x)-g(1)}{x-1}=\lim_{x\to1^+}\dfrac{3x-3}{x-1}=3\). Since these one-sided limits are not equal, \(g'(1)\) does not exist.`,
        r`It decides, shows the left-hand and right-hand slopes with their values, and states that they differ. Saying "there is a corner" describes the graph but is not a justification.`,
      ),
      exam(r`<p>Differentiability at a boundary is frequently the <strong>last</strong> part of a piecewise free-response question, after a continuity part. If you showed discontinuity earlier, the answer is immediate: "not continuous, therefore not differentiable".</p>`),

      sec("Practice"),
      pq(r`At which values of \(x\) is \(f(x)=|x^2-4|\) not differentiable?`, r`At \(x=-2\) and \(x=2\), where \(x^2-4\) changes sign and the graph has corners.`, "core"),
      pq(r`Why is \(f(x)=\sqrt[3]{x-1}\) not differentiable at \(x=1\)?`, r`The graph has a vertical tangent there: the difference quotient \(\dfrac{\sqrt[3]{x-1}}{x-1}=\dfrac{1}{(x-1)^{2/3}}\to\infty\).`, "core"),
      pq(r`Is \(f(x)=\begin{cases}x^2+2,&x\le0\\2x+2,&x\gt0\end{cases}\) differentiable at \(x=0\)?`, r`Continuous (both give 2). Left slope \(2(0)=0\); right slope 2. They differ, so \(f\) is not differentiable at 0.`, "exam"),
      pq(r`Find \(a\) and \(b\) so that \(f(x)=\begin{cases}x^2,&x\le2\\ax+b,&x\gt2\end{cases}\) is differentiable at \(x=2\).`, r`Slopes: \(2(2)=a\), so \(a=4\). Continuity: \(4=8+b\), so \(b=-4\).`, "exam"),
      pq(r`Find \(a\) and \(b\) so that \(f(x)=\begin{cases}\sin x,&x\le0\\ax+b,&x\gt0\end{cases}\) is differentiable at \(x=0\).`, r`Continuity: \(b=\sin0=0\). Slopes: the slope of \(\sin x\) at 0 is \(\displaystyle\lim_{h\to0}\tfrac{\sin h}{h}=1\), so \(a=1\).`, "stretch"),
      pq(r`Is \(f(x)=x|x|\) differentiable at \(x=0\)?`, r`\(f(x)=x^2\) for \(x\ge0\) and \(-x^2\) for \(x\lt0\). It is continuous at 0, and \(\dfrac{f(h)-f(0)}{h}=|h|\to0\) from both sides. Yes: \(f'(0)=0\).`, "stretch"),

      sec("Summary"),
      key([
        ["Fails at", r`Discontinuities, corners, cusps, vertical tangents.`],
        ["Theorem", r`Differentiable ⇒ continuous. Not the reverse.`],
        ["Contrapositive", r`Not continuous ⇒ not differentiable.`],
        ["Smooth join", r`Equal values <em>and</em> equal slopes at the boundary.`],
      ]),
    ];
  },
});
