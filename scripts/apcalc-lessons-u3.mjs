// AP Calculus AB exam prep — Unit 3 (Composite, Implicit and Inverse Functions).
// Original wording, examples, numbers and figures throughout (see u1a for notes).
import { r, lesson, lede, goals, sec, p, disp, def, thm, exam, mistake, justify, ex, pq, key, table } from "./apcalc/kit.mjs";
import { plot, figure, C } from "./apcalc/fig.mjs";

export const u3 = {};

// The same table of values is used in 3.1 and 3.5.
const FG_TABLE = table(
  [r`\(x\)`, r`\(f(x)\)`, r`\(f'(x)\)`, r`\(g(x)\)`, r`\(g'(x)\)`],
  [["1", "3", "−2", "2", "4"], ["2", "5", "6", "1", "−3"]],
);

// ───────────────────────── 3.1 ─────────────────────────
u3["3.1"] = lesson({
  code: "3.1", unit: 3, official: "3.1", calc: "No calculator",
  title: "Functions Inside Functions: The Chain Rule",
  parts: () => [
    lede(r`Every rule so far handles a function of plain \(x\). Real functions are layered: \(\sin(4x)\), \(e^{x^2}\), \(\sqrt{x^2+9}\) each have one function sitting inside another. The chain rule differentiates such compositions, and from this point it is part of nearly every derivative you compute. More marks are lost on the exam to a forgotten chain-rule factor than to any other single error.`),
    goals([
      r`Identify the inner and outer functions of a composition.`,
      r`Apply the chain rule, including to compositions of three layers.`,
      r`Use the chain rule with functions given by a table.`,
      r`Differentiate \(a^x\) and \(\log_ax\).`,
    ]),

    sec("The rule"),
    thm("Chain rule", r`<p>If \(g\) is differentiable at \(x\) and \(f\) is differentiable at \(g(x)\), then</p>${disp(r`\frac{d}{dx}\Big[f\big(g(x)\big)\Big]=f'\big(g(x)\big)\cdot g'(x).`)}<p>In Leibniz notation, with \(y=f(u)\) and \(u=g(x)\): \(\ \dfrac{dy}{dx}=\dfrac{dy}{du}\cdot\dfrac{du}{dx}\).</p>`),
    p(r`In words: <strong>differentiate the outside, leave the inside alone, then multiply by the derivative of the inside.</strong> The inside is whatever you would compute first if you were evaluating the function at a number.`),

    sec("The rules you already know, upgraded"),
    p(r`With \(u\) standing for any differentiable function of \(x\), each earlier rule gains a factor of \(u'\).`),
    table(
      ["Function", "Derivative", "Example"],
      [
        [r`\(u^n\)`, r`\(n\,u^{n-1}\cdot u'\)`, r`\(\dfrac{d}{dx}\left[(3x^2+1)^5\right]=5(3x^2+1)^4\cdot6x\)`],
        [r`\(\sin u\)`, r`\(\cos u\cdot u'\)`, r`\(\dfrac{d}{dx}[\sin(4x)]=4\cos(4x)\)`],
        [r`\(\cos u\)`, r`\(-\sin u\cdot u'\)`, r`\(\dfrac{d}{dx}\left[\cos(x^3)\right]=-3x^2\sin(x^3)\)`],
        [r`\(e^u\)`, r`\(e^u\cdot u'\)`, r`\(\dfrac{d}{dx}\left[e^{x^2}\right]=2x\,e^{x^2}\)`],
        [r`\(\ln u\)`, r`\(\dfrac{u'}{u}\)`, r`\(\dfrac{d}{dx}\left[\ln(x^2+1)\right]=\dfrac{2x}{x^2+1}\)`],
        [r`\(\tan u\)`, r`\(\sec^2u\cdot u'\)`, r`\(\dfrac{d}{dx}[\tan(5x)]=5\sec^2(5x)\)`],
      ],
    ),

    sec("Other bases"),
    p(r`Since \(a^x=e^{x\ln a}\), the chain rule gives the derivative of an exponential with any base, and with it the logarithm to any base:`),
    disp(r`\frac{d}{dx}\left[a^x\right]=a^x\ln a\qquad\qquad\frac{d}{dx}\left[\log_ax\right]=\frac{1}{x\ln a}.`),

    sec("Compositions from a table"),
    p(r`For \(h(x)=f(g(x))\), the rule \(h'(x)=f'(g(x))\cdot g'(x)\) says: evaluate \(f'\) at the <strong>output of \(g\)</strong>, not at \(x\).`),
    FG_TABLE,
    p(r`\(h'(1)=f'\big(g(1)\big)\cdot g'(1)=f'(2)\cdot4=6\cdot4=24\). The value \(f'(1)=-2\) is never used.`),

    sec("Worked examples"),
    ex("core", "A power of a polynomial", r`Differentiate \(y=(3x^2+1)^5\).`, [
      r`Outside: \((\ \ )^5\), with derivative \(5(\ \ )^4\). Inside: \(3x^2+1\), with derivative \(6x\).`,
      r`\(y'=5(3x^2+1)^4\cdot6x\).`,
    ], r`\(y'=30x(3x^2+1)^4\).`),
    ex("exam", "A square root, evaluated", r`Let \(f(x)=\sqrt{x^2+9}\). Find \(f'(4)\).`, [
      r`\(f(x)=(x^2+9)^{1/2}\), so \(f'(x)=\tfrac12(x^2+9)^{-1/2}\cdot2x=\dfrac{x}{\sqrt{x^2+9}}\).`,
      r`\(f'(4)=\dfrac{4}{\sqrt{25}}\).`,
    ], r`\(f'(4)=\dfrac45\).`),
    ex("exam", "Chain rule inside the product rule", r`Differentiate \(y=x^2e^{3x}\).`, [
      r`Product rule first: \(y'=(2x)(e^{3x})+(x^2)\cdot\dfrac{d}{dx}\left[e^{3x}\right]\).`,
      r`Chain rule for the second factor: \(\dfrac{d}{dx}\left[e^{3x}\right]=3e^{3x}\).`,
    ], r`\(y'=2xe^{3x}+3x^2e^{3x}=xe^{3x}(2+3x)\).`),
    ex("stretch", "Three layers", r`Differentiate \(y=\cos^3(2x)\).`, [
      r`Rewrite to expose the layers: \(y=\big[\cos(2x)\big]^3\). Outermost: cube. Middle: cosine. Innermost: \(2x\).`,
      r`Cube: \(3\big[\cos(2x)\big]^2\). Times the derivative of \(\cos(2x)\): \(-\sin(2x)\). Times the derivative of \(2x\): \(2\).`,
    ], r`\(y'=-6\cos^2(2x)\sin(2x)\).`),

    sec("Common errors"),
    mistake("forgetting the inside derivative", r`<p>\(\dfrac{d}{dx}[\sin(4x)]=\cos(4x)\) is the most common wrong answer in the course. Every time the inside is anything other than a bare \(x\), a factor is owed.</p>`),
    mistake("differentiating the inside in place", r`<p>\(\dfrac{d}{dx}\left[\cos(x^3)\right]\) is not \(-\sin(3x^2)\). The inside stays exactly as it was; its derivative appears as a separate <em>factor</em>.</p>`),
    mistake("reading the table at the wrong input", r`<p>For \(h=f\circ g\), \(h'(1)\) is \(f'(g(1))g'(1)\), not \(f'(1)g'(1)\). Find \(g(1)\) first, then go to that row for \(f'\).</p>`),
    mistake(r`misreading \(\sin^2x\)`, r`<p>\(\sin^2x\) means \((\sin x)^2\): the square is the <em>outside</em> function. Its derivative is \(2\sin x\cos x\).</p>`),

    sec("Write it so it scores"),
    justify(
      r`Using the table, let \(h(x)=f\big(g(x)\big)\). Find \(h'(2)\).`,
      r`\(h'(x)=f'\big(g(x)\big)\,g'(x)\), so \(h'(2)=f'\big(g(2)\big)\,g'(2)=f'(1)\cdot(-3)=(-2)(-3)=6\).`,
      r`The general rule, then the substitution showing \(g(2)\) replaced by 1, then the numbers. A reader can follow exactly which table entries were used.`,
    ),
    exam(r`<p>In free response, the chain rule usually arrives disguised as a table, a graph, or a related-rates or implicit question. Scoring guidelines routinely state "no credit without the chain rule". When you finish any derivative, look at every function in it and ask whether its inside was a bare \(x\).</p>`),

    sec("Practice"),
    pq(r`Differentiate \(y=(2x-5)^7\).`, r`\(y'=7(2x-5)^6\cdot2=14(2x-5)^6\).`, "core"),
    pq(r`Differentiate \(y=e^{-2x}\).`, r`\(y'=-2e^{-2x}\).`, "core"),
    pq(r`Differentiate \(y=\ln(\cos x)\).`, r`\(y'=\dfrac{-\sin x}{\cos x}=-\tan x\).`, "exam"),
    pq(r`Differentiate \(y=\sqrt{1+\sin x}\).`, r`\(y'=\dfrac{\cos x}{2\sqrt{1+\sin x}}\).`, "exam"),
    pq(r`Differentiate \(y=3^x\) and \(y=\log_2x\).`, r`\(3^x\ln3\) and \(\dfrac{1}{x\ln2}\).`, "exam"),
    pq(r`Using the table in this lesson, find the derivative of \(\big[g(x)\big]^3\) at \(x=1\).`, r`\(3[g(1)]^2g'(1)=3(4)(4)=48\).`, "exam"),
    pq(r`A differentiable function \(f\) has \(f'(4)=3\). Find the derivative of \(f(x^2)\) at \(x=2\).`, r`\(\dfrac{d}{dx}\left[f(x^2)\right]=f'(x^2)\cdot2x\). At \(x=2\): \(f'(4)\cdot4=12\).`, "stretch"),
    pq(r`Differentiate \(y=e^{\sin(x^2)}\).`, r`\(y'=e^{\sin(x^2)}\cdot\cos(x^2)\cdot2x\).`, "stretch"),

    sec("Summary"),
    key([
      ["Chain rule", r`\(\big[f(g(x))\big]'=f'(g(x))\,g'(x)\).`],
      ["Method", r`Outside derivative, inside untouched, times inside derivative.`],
      ["Tables", r`Evaluate \(f'\) at \(g(x)\), not at \(x\).`],
      ["Other bases", r`\(\big[a^x\big]'=a^x\ln a\).`],
    ]),
  ],
});

// ───────────────────────── 3.2 ─────────────────────────
u3["3.2"] = lesson({
  code: "3.2", unit: 3, official: "3.2", calc: "No calculator",
  title: "Curves That Are Not Functions: Implicit Differentiation",
  parts: () => {
    const circ = plot({ w: 380, h: 333, x: [-7, 7], y: [-6, 6], alt: "Circle of radius 5 with its tangent line at (3,4)" });
    circ.curve((x) => Math.sqrt(25 - x * x), -5, 5, { n: 800 }).curve((x) => -Math.sqrt(25 - x * x), -5, 5, { n: 800 })
      .curve((x) => 4 - 0.75 * (x - 3), -1, 6.6, { color: C.alt, width: 1.9 }).dot(3, 4).label(3.35, 4.35, "(3, 4)", { plain: true, size: 12 });
    const top = (x) => (x + Math.sqrt(Math.max(0, 12 - 3 * x * x))) / 2, bot = (x) => (x - Math.sqrt(Math.max(0, 12 - 3 * x * x))) / 2;
    const ell = plot({ w: 340, h: 340, x: [-3, 3], y: [-3, 3], alt: "The curve x squared minus xy plus y squared equals 3 with its horizontal and vertical tangent points" });
    ell.curve(top, -2, 2, { n: 1200 }).curve(bot, -2, 2, { n: 1200 })
      .seg(0.3, 2, 1.7, 2, { color: C.alt, width: 1.7 }).seg(-1.7, -2, -0.3, -2, { color: C.alt, width: 1.7 })
      .seg(2, 0.3, 2, 1.7, { color: C.green, width: 1.7 }).seg(-2, -1.7, -2, -0.3, { color: C.green, width: 1.7 })
      .dot(1, 2).dot(-1, -2).dot(2, 1).dot(-2, -1);
    return [
      lede(r`The circle \(x^2+y^2=25\) fails the vertical line test, so it is not the graph of a function. It still has a tangent line at each point, and that tangent has a slope. Implicit differentiation finds \(\dfrac{dy}{dx}\) directly from the equation, without solving for \(y\), which for most curves cannot be done anyway.`),
      goals([
        r`Differentiate both sides of an equation in \(x\) and \(y\) with respect to \(x\).`,
        r`Solve for \(\dfrac{dy}{dx}\) and evaluate it at a point.`,
        r`Write tangent lines to implicitly defined curves.`,
        r`Locate horizontal and vertical tangents.`,
      ]),

      sec("The idea"),
      p(r`Near any point of the curve (away from vertical tangents), \(y\) behaves as <em>some</em> function of \(x\), even if we cannot write it down. So every \(y\) in the equation is a function of \(x\), and differentiating it requires the <strong>chain rule</strong>:`),
      disp(r`\frac{d}{dx}\left[y^2\right]=2y\,\frac{dy}{dx}\qquad\frac{d}{dx}[\sin y]=\cos y\,\frac{dy}{dx}\qquad\frac{d}{dx}[xy]=y+x\,\frac{dy}{dx}.`),
      p(r`The last one is the product rule: \(x\) and \(y\) are two functions of \(x\) multiplied together.`),

      sec("The procedure"),
      `<ol><li>Differentiate both sides with respect to \(x\). Every \(y\)-term picks up a factor \(\dfrac{dy}{dx}\).</li><li>Collect the terms containing \(\dfrac{dy}{dx}\) on one side.</li><li>Factor out \(\dfrac{dy}{dx}\) and divide.</li></ol>`,
      figure(circ, r`For \(x^2+y^2=25\): \(2x+2y\dfrac{dy}{dx}=0\), so \(\dfrac{dy}{dx}=-\dfrac{x}{y}\). At \((3,4)\) the slope is \(-\dfrac34\).`),
      p(r`The answer contains both \(x\) and \(y\). That is normal: to get a number you need both coordinates of the point.`),

      sec("Horizontal and vertical tangents"),
      p(r`If \(\dfrac{dy}{dx}=\dfrac{N}{D}\), the tangent is <strong>horizontal</strong> where \(N=0\) (and \(D\neq0\)) and <strong>vertical</strong> where \(D=0\) (and \(N\neq0\)). Each condition gives a relation between \(x\) and \(y\); substitute it back into the <em>original equation</em> to find the actual points.`),

      sec("Worked examples"),
      ex("core", "Slope on a circle", r`Find the slope of the tangent line to \(x^2+y^2=25\) at \((3,4)\).`, [
        r`Differentiate: \(2x+2y\dfrac{dy}{dx}=0\).`,
        r`Solve: \(\dfrac{dy}{dx}=-\dfrac{x}{y}\).`,
        r`Substitute \((3,4)\).`,
      ], r`The slope is \(-\dfrac34\).`),
      ex("exam", "A product term", r`Find \(\dfrac{dy}{dx}\) for the curve \(x^2-xy+y^2=3\), and the slope at \((1,-1)\).`, [
        r`Differentiate term by term: \(2x-\left(y+x\dfrac{dy}{dx}\right)+2y\dfrac{dy}{dx}=0\).`,
        r`Collect: \((2y-x)\dfrac{dy}{dx}=y-2x\).`,
        r`\(\dfrac{dy}{dx}=\dfrac{y-2x}{2y-x}\). At \((1,-1)\): \(\dfrac{-1-2}{-2-1}\).`,
      ], r`\(\dfrac{dy}{dx}=\dfrac{y-2x}{2y-x}\); the slope at \((1,-1)\) is \(1\).`),
      ex("exam", "A tangent line", r`Write an equation for the tangent line to \(y^2=x^3+3x\) at \((1,2)\).`, [
        r`Check the point: \(2^2=4\) and \(1+3=4\).`,
        r`Differentiate: \(2y\dfrac{dy}{dx}=3x^2+3\), so \(\dfrac{dy}{dx}=\dfrac{3x^2+3}{2y}\).`,
        r`At \((1,2)\): \(\dfrac{6}{4}=\dfrac32\).`,
      ], r`\(y-2=\dfrac32(x-1)\).`),
      ex("stretch", "Every horizontal and vertical tangent", r`For the curve \(x^2-xy+y^2=3\), find all points where the tangent line is horizontal and all points where it is vertical.`, [
        r`From above, \(\dfrac{dy}{dx}=\dfrac{y-2x}{2y-x}\).`,
        r`<strong>Horizontal:</strong> \(y-2x=0\), so \(y=2x\). Substitute into the curve: \(x^2-2x^2+4x^2=3\), so \(x=\pm1\). Points \((1,2)\) and \((-1,-2)\). (There \(2y-x=\pm3\neq0\).)`,
        r`<strong>Vertical:</strong> \(2y-x=0\), so \(x=2y\). Substitute: \(4y^2-2y^2+y^2=3\), so \(y=\pm1\). Points \((2,1)\) and \((-2,-1)\). (There \(y-2x=\mp3\neq0\).)`,
      ], r`Horizontal at \((1,2)\) and \((-1,-2)\); vertical at \((2,1)\) and \((-2,-1)\).`),
      figure(ell, r`The curve \(x^2-xy+y^2=3\) with its two horizontal tangents (red) and two vertical tangents (green).`),

      sec("Common errors"),
      mistake(r`no \(\dfrac{dy}{dx}\) on a \(y\)-term`, r`<p>\(\dfrac{d}{dx}\left[y^2\right]=2y\) treats \(y\) as if it were \(x\). It is \(2y\dfrac{dy}{dx}\). This single omission makes the whole problem collapse.</p>`),
      mistake(r`no product rule on \(xy\)`, r`<p>\(\dfrac{d}{dx}[xy]\) is \(y+x\dfrac{dy}{dx}\), not \(\dfrac{dy}{dx}\) and not \(1\cdot\dfrac{dy}{dx}\).</p>`),
      mistake("a lost minus sign in front of a product", r`<p>In \(-xy\), the minus applies to both terms of the product rule: \(-y-x\dfrac{dy}{dx}\). Use brackets as in the second example.</p>`),
      mistake("forgetting the right-hand side", r`<p>The derivative of the constant on the right is 0. Writing \(2x+2y\dfrac{dy}{dx}=25\) is a common slip.</p>`),

      sec("Write it so it scores"),
      justify(
        r`Consider the curve \(x^2-xy+y^2=3\). Show that \(\dfrac{dy}{dx}=\dfrac{y-2x}{2y-x}\).`,
        r`Differentiating with respect to \(x\): \(2x-y-x\dfrac{dy}{dx}+2y\dfrac{dy}{dx}=0\). Then \((2y-x)\dfrac{dy}{dx}=y-2x\), so \(\dfrac{dy}{dx}=\dfrac{y-2x}{2y-x}\).`,
        r`In a "show that" question the first line, the implicit differentiation itself, carries the marks. It must display the product rule and the chain rule correctly; the algebra afterwards is expected, not rewarded.`,
      ),
      exam(r`<p>Implicit curves appear regularly as a full free-response question: show the given \(\dfrac{dy}{dx}\), write a tangent line, find horizontal or vertical tangents, then find \(\dfrac{d^2y}{dx^2}\) at a point (Lesson 3.6). Because the derivative is <em>given</em> in part (a), you can do every later part even if you could not derive it.</p>`),

      sec("Practice"),
      pq(r`Find the slope of the tangent to \(x^2+y^2=13\) at \((2,3)\).`, r`\(\dfrac{dy}{dx}=-\dfrac xy=-\dfrac23\).`, "core"),
      pq(r`Find the slope of the tangent to \(xy=12\) at \((3,4)\).`, r`\(y+x\dfrac{dy}{dx}=0\), so \(\dfrac{dy}{dx}=-\dfrac yx=-\dfrac43\).`, "core"),
      pq(r`Find the slope of the tangent to \(x^3+y^3=9\) at \((1,2)\).`, r`\(3x^2+3y^2\dfrac{dy}{dx}=0\), so \(\dfrac{dy}{dx}=-\dfrac{x^2}{y^2}=-\dfrac14\).`, "exam"),
      pq(r`Find the slope of the tangent to \(y^2-x^2y=6\) at \((1,3)\).`, r`\(2y\,y'-2xy-x^2y'=0\), so \(y'=\dfrac{2xy}{2y-x^2}=\dfrac{6}{5}\).`, "exam"),
      pq(r`Find the slope of the tangent to \(\ln y+xy=1\) at \((1,1)\).`, r`\(\dfrac{y'}{y}+y+xy'=0\). At \((1,1)\): \(y'+1+y'=0\), so \(y'=-\dfrac12\).`, "exam"),
      pq(r`Write an equation for the tangent line to \(x^2+4y^2=8\) at \((2,1)\).`, r`\(2x+8y\,y'=0\), so \(y'=-\dfrac{x}{4y}=-\dfrac12\). Line: \(y-1=-\dfrac12(x-2)\).`, "stretch"),
      pq(r`Find all points on \(x^2+y^2=25\) where the tangent line has slope \(\dfrac34\).`, r`\(-\dfrac xy=\dfrac34\) gives \(x=-\dfrac34y\). Then \(\dfrac{9}{16}y^2+y^2=25\), so \(y=\pm4\): the points \((-3,4)\) and \((3,-4)\).`, "stretch"),

      sec("Summary"),
      key([
        ["Every y-term", r`Differentiate, then multiply by \(\dfrac{dy}{dx}\).`],
        [r`\(xy\)`, r`Product rule: \(y+x\dfrac{dy}{dx}\).`],
        ["Solve", r`Collect, factor, divide.`],
        ["Special tangents", r`Numerator zero: horizontal. Denominator zero: vertical. Substitute back into the curve.`],
      ]),
    ];
  },
});

// ───────────────────────── 3.3 ─────────────────────────
u3["3.3"] = lesson({
  code: "3.3", unit: 3, official: "3.3", calc: "No calculator",
  title: "Slopes of Inverse Functions",
  parts: () => {
    const g = plot({ w: 360, h: 360, x: [-0.5, 5.5], y: [-0.5, 5.5], alt: "Graphs of y = x squared and y = square root of x reflected in the line y = x, with tangents at (2,4) and (4,2)" });
    g.curve((x) => x, -0.3, 5.3, { color: C.grey, width: 1.2, dash: "5 4" }).curve((x) => x * x, 0, 2.3).curve(Math.sqrt, 0, 5.3, { color: C.green })
      .curve((x) => 4 + 4 * (x - 2), 1.65, 2.33, { color: C.alt, width: 1.8 }).curve((x) => 2 + 0.25 * (x - 4), 2.6, 5.3, { color: C.alt, width: 1.8 })
      .dot(2, 4).dot(4, 2, { color: C.green }).label(0.75, 4.2, "(2, 4)", { plain: true, size: 12 }).label(3.7, 1.35, "(4, 2)", { plain: true, size: 12 });
    return [
      lede(r`An inverse function undoes the original: if \(f\) sends 2 to 4, then \(f^{-1}\) sends 4 back to 2. Graphically, the inverse is the mirror image in the line \(y=x\). A reflection that swaps \(x\) and \(y\) also swaps rise and run, so slopes at mirrored points are <strong>reciprocals</strong>. That one observation is the whole lesson; the rest is bookkeeping about <em>which</em> point to use.`),
      goals([
        r`State the formula for the derivative of an inverse function.`,
        r`Evaluate \(\left(f^{-1}\right)'\) at a point from a formula for \(f\).`,
        r`Evaluate \(\left(f^{-1}\right)'\) from a table of values of \(f\) and \(f'\).`,
        r`Write a tangent line to the graph of an inverse function.`,
      ]),

      sec("The formula"),
      figure(g, r`\(y=x^2\) (for \(x\ge0\)) and its inverse \(y=\sqrt x\). At \((2,4)\) the slope is 4; at the mirrored point \((4,2)\) the slope is \(\tfrac14\).`),
      thm("Derivative of an inverse function", r`<p>Suppose \(f\) is differentiable and has an inverse, and \(f(a)=b\). If \(f'(a)\neq0\), then</p>${disp(r`\left(f^{-1}\right)'(b)=\frac{1}{f'(a)}.`)}<p>Equivalently, \(\left(f^{-1}\right)'(x)=\dfrac{1}{f'\!\left(f^{-1}(x)\right)}\).</p>`),
      p(r`It follows from the chain rule in one line: differentiate both sides of \(f\!\left(f^{-1}(x)\right)=x\) to get \(f'\!\left(f^{-1}(x)\right)\cdot\left(f^{-1}\right)'(x)=1\).`),

      sec("The two-step method"),
      `<ol><li><strong>Find the partner point.</strong> To evaluate \(\left(f^{-1}\right)'(b)\), find the \(a\) with \(f(a)=b\). This usually means solving by inspection: try small whole numbers.</li><li><strong>Take the reciprocal of \(f'\) there.</strong> Compute \(f'(a)\) and invert it.</li></ol>`,
      p(r`The derivative of \(f\) is evaluated at \(a\), the <em>input</em> of \(f\). Evaluating it at \(b\) is the standard error.`),

      sec("Worked examples"),
      ex("core", "From a formula", r`Let \(f(x)=x^3+x\). Find \(\left(f^{-1}\right)'(2)\).`, [
        r`Find \(a\) with \(f(a)=2\): \(a^3+a=2\) is satisfied by \(a=1\).`,
        r`\(f'(x)=3x^2+1\), so \(f'(1)=4\).`,
      ], r`\(\left(f^{-1}\right)'(2)=\dfrac14\).`),
      ex("exam", "From a table", r`The function \(f\) is differentiable and increasing, with the values shown. Let \(g=f^{-1}\). Find \(g'(3)\) and \(g'(5)\).${table(["\\(x\\)", "1", "2", "3"], [["\\(f(x)\\)", "2", "3", "5"], ["\\(f'(x)\\)", "5", "4", "6"]])}`, [
        r`\(g'(3)\): find where \(f\) <em>outputs</em> 3. That is \(x=2\). So \(g'(3)=\dfrac{1}{f'(2)}=\dfrac14\).`,
        r`\(g'(5)\): \(f(3)=5\), so \(g'(5)=\dfrac{1}{f'(3)}=\dfrac16\).`,
      ], r`\(g'(3)=\dfrac14\) and \(g'(5)=\dfrac16\).`),
      ex("exam", "A tangent line to the inverse", r`Let \(f(x)=x^5+2x-1\) and \(g=f^{-1}\). Write an equation for the line tangent to the graph of \(g\) at \(x=2\).`, [
        r`\(f(1)=1+2-1=2\), so \(g(2)=1\): the point is \((2,1)\).`,
        r`\(f'(x)=5x^4+2\), so \(f'(1)=7\) and \(g'(2)=\dfrac17\).`,
      ], r`\(y-1=\dfrac17(x-2)\).`),
      ex("stretch", "Recovering a familiar derivative", r`Use the inverse-function formula with \(f(x)=e^x\) to derive the derivative of \(\ln x\).`, [
        r`\(f^{-1}(x)=\ln x\) and \(f'(x)=e^x\).`,
        r`\(\left(f^{-1}\right)'(x)=\dfrac{1}{f'\!\left(f^{-1}(x)\right)}=\dfrac{1}{e^{\ln x}}\).`,
      ], r`\(\dfrac{d}{dx}[\ln x]=\dfrac1x\). The same method produces the inverse trigonometric derivatives in Lesson 3.4.`),

      sec("Common errors"),
      mistake("evaluating the derivative at the wrong number", r`<p>For \(f(x)=x^3+x\), \(\left(f^{-1}\right)'(2)\) is \(\dfrac{1}{f'(1)}=\dfrac14\), not \(\dfrac{1}{f'(2)}=\dfrac{1}{13}\). The 2 is an <em>output</em> of \(f\).</p>`),
      mistake("confusing the inverse with the reciprocal", r`<p>\(f^{-1}(x)\) is not \(\dfrac{1}{f(x)}\). The derivative of \(\dfrac{1}{f(x)}\) is \(-\dfrac{f'(x)}{[f(x)]^2}\), an entirely different quantity.</p>`),
      mistake("reading a table across instead of backwards", r`<p>In the table example, \(g'(3)\) does not use the column \(x=3\). Look for 3 in the \(f(x)\) row, then read \(f'\) in that column.</p>`),

      sec("Write it so it scores"),
      justify(
        r`For the table above with \(g=f^{-1}\), find \(g'(2)\). Show the work that leads to your answer.`,
        r`Since \(f(1)=2\), \(g(2)=1\). Therefore \(g'(2)=\dfrac{1}{f'\big(g(2)\big)}=\dfrac{1}{f'(1)}=\dfrac15\).`,
        r`It shows the partner point explicitly, states the formula with \(g(2)\) inside \(f'\), and only then substitutes. A bare "\(\tfrac15\)" leaves the reader unable to tell a correct method from a lucky one.`,
      ),
      exam(r`<p>This topic is nearly always a single multiple-choice question with predictable wrong options: \(\dfrac{1}{f'(b)}\), \(f'(a)\) without the reciprocal, and \(\dfrac{1}{f(a)}\). Do the two steps in order and none of them will tempt you.</p>`),

      sec("Practice"),
      pq(r`Let \(f(x)=x^3+2x+1\). Find \(\left(f^{-1}\right)'(4)\).`, r`\(f(1)=4\) and \(f'(1)=3+2=5\), so the answer is \(\dfrac15\).`, "core"),
      pq(r`The graph of \(f\) passes through \((3,7)\) with slope \(-2\). What is the slope of the graph of \(f^{-1}\) at \((7,3)\)?`, r`\(\dfrac{1}{-2}=-\dfrac12\).`, "core"),
      pq(r`Let \(f(x)=2x+\cos x\). Find \(\left(f^{-1}\right)'(1)\).`, r`\(f(0)=1\) and \(f'(x)=2-\sin x\), so \(f'(0)=2\). The answer is \(\dfrac12\).`, "exam"),
      pq(r`Let \(f(x)=x^3+3x-4\). Find \(\left(f^{-1}\right)'(0)\).`, r`\(f(1)=0\) and \(f'(1)=3+3=6\). The answer is \(\dfrac16\).`, "exam"),
      pq(r`Let \(f(x)=\sqrt{x^3+1}\). Find \(\left(f^{-1}\right)'(3)\).`, r`\(f(2)=\sqrt9=3\). \(f'(x)=\dfrac{3x^2}{2\sqrt{x^3+1}}\), so \(f'(2)=\dfrac{12}{6}=2\). The answer is \(\dfrac12\).`, "exam"),
      pq(r`Let \(f(x)=x+\ln x\). Find \(\left(f^{-1}\right)'(e+1)\).`, r`\(f(e)=e+1\) and \(f'(x)=1+\dfrac1x\), so \(f'(e)=\dfrac{e+1}{e}\). The answer is \(\dfrac{e}{e+1}\).`, "stretch"),
      pq(r`A function \(f\) has \(f(2)=5\), \(f'(2)=3\) and \(f'(5)=4\). With \(g=f^{-1}\), write an equation for the tangent line to the graph of \(g\) at \(x=5\).`, r`\(g(5)=2\) and \(g'(5)=\dfrac{1}{f'(2)}=\dfrac13\). Line: \(y-2=\dfrac13(x-5)\). The value \(f'(5)=4\) is a distractor.`, "stretch"),

      sec("Summary"),
      key([
        ["Formula", r`\(\left(f^{-1}\right)'(b)=\dfrac{1}{f'(a)}\) where \(f(a)=b\).`],
        ["Step 1", r`Find \(a\): the input of \(f\) that gives \(b\).`],
        ["Step 2", r`Reciprocal of \(f'(a)\).`],
        ["Picture", r`Reflection in \(y=x\) inverts slopes.`],
      ]),
    ];
  },
});

// ───────────────────────── 3.4 ─────────────────────────
u3["3.4"] = lesson({
  code: "3.4", unit: 3, official: "3.4", calc: "No calculator",
  title: "Derivatives of Inverse Trigonometric Functions",
  parts: () => [
    lede(r`The inverse trigonometric functions answer "which angle has this sine?" Their derivatives contain no trigonometry at all: they are purely algebraic expressions, built from square roots and sums of squares. That is exactly why they matter. In Unit 6 these same expressions will turn up as integrands, and recognising \(\dfrac{1}{1+x^2}\) as "the derivative of arctangent" will be the only way forward.`),
    goals([
      r`State the derivatives of \(\arcsin x\), \(\arccos x\) and \(\arctan x\).`,
      r`Derive them by implicit differentiation.`,
      r`Combine them with the chain, product and quotient rules.`,
      r`Recognise their forms for later use in integration.`,
    ]),

    sec("Notation"),
    p(r`\(\arcsin x\) and \(\sin^{-1}x\) mean the same thing: the angle in \(\left[-\tfrac\pi2,\tfrac\pi2\right]\) whose sine is \(x\). The exam uses both. Neither means \(\dfrac{1}{\sin x}\), which is \(\csc x\).`),

    sec("The derivatives"),
    thm("Inverse trigonometric derivatives", r`${disp(r`\frac{d}{dx}[\arcsin x]=\frac{1}{\sqrt{1-x^2}}\qquad\frac{d}{dx}[\arccos x]=-\frac{1}{\sqrt{1-x^2}}\qquad\frac{d}{dx}[\arctan x]=\frac{1}{1+x^2}`)}`),
    p(r`The remaining three follow the co-function pattern and are needed far less often.`),
    table(
      ["Function", "Derivative"],
      [
        [r`\(\operatorname{arccot}x\)`, r`\(-\dfrac{1}{1+x^2}\)`],
        [r`\(\operatorname{arcsec}x\)`, r`\(\dfrac{1}{|x|\sqrt{x^2-1}}\)`],
        [r`\(\operatorname{arccsc}x\)`, r`\(-\dfrac{1}{|x|\sqrt{x^2-1}}\)`],
      ],
    ),

    sec("Where they come from"),
    p(r`Let \(y=\arcsin x\), so that \(\sin y=x\) with \(-\tfrac\pi2\le y\le\tfrac\pi2\). Differentiate implicitly:`),
    disp(r`\cos y\,\frac{dy}{dx}=1\quad\Longrightarrow\quad\frac{dy}{dx}=\frac{1}{\cos y}=\frac{1}{\sqrt{1-\sin^2y}}=\frac{1}{\sqrt{1-x^2}}.`),
    p(r`The positive root is correct because cosine is non-negative on \(\left[-\tfrac\pi2,\tfrac\pi2\right]\). For arctangent, \(\tan y=x\) gives \(\sec^2y\,\dfrac{dy}{dx}=1\), and \(\sec^2y=1+\tan^2y=1+x^2\).`),

    sec("With the chain rule"),
    disp(r`\frac{d}{dx}[\arcsin u]=\frac{u'}{\sqrt{1-u^2}}\qquad\qquad\frac{d}{dx}[\arctan u]=\frac{u'}{1+u^2}`),
    p(r`Square the <strong>whole</strong> inside function: for \(\arctan(3x)\) the denominator is \(1+(3x)^2=1+9x^2\).`),

    sec("Worked examples"),
    ex("core", "Arctangent with a linear inside", r`Differentiate \(y=\arctan(3x)\).`, [
      r`\(u=3x\), \(u'=3\), \(u^2=9x^2\).`,
    ], r`\(y'=\dfrac{3}{1+9x^2}\).`),
    ex("core", "Arcsine with a power inside", r`Differentiate \(y=\arcsin(x^2)\).`, [
      r`\(u=x^2\), \(u'=2x\), \(u^2=x^4\).`,
    ], r`\(y'=\dfrac{2x}{\sqrt{1-x^4}}\).`),
    ex("exam", "With the product rule", r`Let \(f(x)=x\arctan x\). Find \(f'(1)\).`, [
      r`\(f'(x)=\arctan x+\dfrac{x}{1+x^2}\).`,
      r`\(f'(1)=\arctan1+\dfrac12\), and \(\arctan1=\dfrac\pi4\).`,
    ], r`\(f'(1)=\dfrac\pi4+\dfrac12\).`),
    ex("exam", "A tangent line", r`Write an equation for the tangent line to \(y=\arcsin\!\left(\dfrac x2\right)\) at \(x=1\).`, [
      r`Point: \(\arcsin\dfrac12=\dfrac\pi6\), so \(\left(1,\dfrac\pi6\right)\).`,
      r`\(y'=\dfrac{\frac12}{\sqrt{1-\frac{x^2}{4}}}=\dfrac{1}{\sqrt{4-x^2}}\). At \(x=1\): \(\dfrac{1}{\sqrt3}\).`,
    ], r`\(y-\dfrac\pi6=\dfrac{1}{\sqrt3}(x-1)\).`),
    ex("stretch", "A derivative that vanishes", r`For \(x\gt0\), differentiate \(f(x)=\arctan x+\arctan\!\left(\dfrac1x\right)\). What does the result tell you about \(f\)?`, [
      r`First term: \(\dfrac{1}{1+x^2}\).`,
      r`Second term: \(\dfrac{-\frac{1}{x^2}}{1+\frac{1}{x^2}}=\dfrac{-1}{x^2+1}\).`,
      r`\(f'(x)=\dfrac{1}{1+x^2}-\dfrac{1}{1+x^2}=0\) for all \(x\gt0\).`,
    ], r`\(f\) is constant on \((0,\infty)\). Its value is \(f(1)=\dfrac\pi4+\dfrac\pi4=\dfrac\pi2\).`),

    sec("Common errors"),
    mistake(r`reading \(\sin^{-1}x\) as a reciprocal`, r`<p>\(\dfrac{d}{dx}\left[\sin^{-1}x\right]\) is \(\dfrac{1}{\sqrt{1-x^2}}\). It is not the derivative of \(\csc x\).</p>`),
    mistake("mixing the two shapes", r`<p>Arcsine: square root, <em>minus</em>. Arctangent: no root, <em>plus</em>. \(\dfrac{1}{\sqrt{1+x^2}}\) and \(\dfrac{1}{1-x^2}\) are neither.</p>`),
    mistake("squaring only part of the inside", r`<p>\(\dfrac{d}{dx}[\arctan(3x)]=\dfrac{3}{1+9x^2}\), not \(\dfrac{3}{1+3x^2}\).</p>`),
    mistake("forgetting the chain factor", r`<p>\(\dfrac{d}{dx}[\arcsin(x^2)]\) needs the \(2x\) on top.</p>`),

    sec("Write it so it scores"),
    justify(
      r`Use implicit differentiation to show that \(\dfrac{d}{dx}[\arctan x]=\dfrac{1}{1+x^2}\).`,
      r`Let \(y=\arctan x\). Then \(\tan y=x\). Differentiating with respect to \(x\): \(\sec^2y\,\dfrac{dy}{dx}=1\), so \(\dfrac{dy}{dx}=\dfrac{1}{\sec^2y}=\dfrac{1}{1+\tan^2y}=\dfrac{1}{1+x^2}\).`,
      r`It rewrites the inverse relation, differentiates implicitly with the chain-rule factor shown, and uses the identity that converts back to \(x\).`,
    ),
    exam(r`<p>Know the values \(\arctan1=\tfrac\pi4\), \(\arcsin\tfrac12=\tfrac\pi6\), \(\arcsin1=\tfrac\pi2\), \(\arctan0=0\). They are needed to evaluate products such as \(x\arctan x\) and, later, definite integrals.</p>`),

    sec("Practice"),
    pq(r`Differentiate \(y=\arccos(2x)\).`, r`\(y'=-\dfrac{2}{\sqrt{1-4x^2}}\).`, "core"),
    pq(r`Find the slope of \(y=\arcsin x\) at \(x=\dfrac12\).`, r`\(\dfrac{1}{\sqrt{1-\frac14}}=\dfrac{2}{\sqrt3}\).`, "core"),
    pq(r`Differentiate \(y=\arctan(e^x)\).`, r`\(y'=\dfrac{e^x}{1+e^{2x}}\).`, "exam"),
    pq(r`Differentiate \(y=\arctan\!\left(\sqrt x\right)\).`, r`\(y'=\dfrac{\frac{1}{2\sqrt x}}{1+x}=\dfrac{1}{2\sqrt x\,(1+x)}\).`, "exam"),
    pq(r`Let \(f(x)=(\arctan x)^2\). Find \(f'(1)\).`, r`\(f'(x)=\dfrac{2\arctan x}{1+x^2}\), so \(f'(1)=\dfrac{2\cdot\frac\pi4}{2}=\dfrac\pi4\).`, "exam"),
    pq(r`Differentiate \(f(x)=x\arcsin x+\sqrt{1-x^2}\) and simplify.`, r`\(\arcsin x+\dfrac{x}{\sqrt{1-x^2}}+\dfrac{-2x}{2\sqrt{1-x^2}}=\arcsin x\).`, "stretch"),
    pq(r`Show that \(\arcsin x+\arccos x\) is constant on \((-1,1)\), and find the constant.`, r`Its derivative is \(\dfrac{1}{\sqrt{1-x^2}}-\dfrac{1}{\sqrt{1-x^2}}=0\). At \(x=0\) the value is \(0+\dfrac\pi2\), so the constant is \(\dfrac\pi2\).`, "stretch"),

    sec("Summary"),
    key([
      [r`\(\arcsin u\)`, r`\(\dfrac{u'}{\sqrt{1-u^2}}\)`],
      [r`\(\arccos u\)`, r`\(-\dfrac{u'}{\sqrt{1-u^2}}\)`],
      [r`\(\arctan u\)`, r`\(\dfrac{u'}{1+u^2}\)`],
      ["Source", r`Implicit differentiation of \(\sin y=x\), \(\tan y=x\).`],
    ]),
  ],
});

// ───────────────────────── 3.5 ─────────────────────────
u3["3.5"] = lesson({
  code: "3.5", unit: 3, official: "3.5", calc: "No calculator",
  title: "Choosing the Right Rule",
  parts: () => [
    lede(r`You now own every differentiation rule on the exam. The remaining difficulty is not knowing a rule but choosing among them when a function needs three at once, and keeping the bookkeeping straight while you do. This lesson gives a decision procedure and then drills the combinations that actually appear.`),
    goals([
      r`Read the structure of a function from the outside in.`,
      r`Decide whether algebra can simplify a function before differentiating.`,
      r`Combine the product, quotient and chain rules in one derivative without losing a factor.`,
      r`Apply combined rules to functions given by a table.`,
    ]),

    sec("Ask: what was done last?"),
    p(r`Imagine evaluating the function at a number. The <strong>last</strong> operation you would perform is the outermost structure, and it decides the first rule.`),
    table(
      ["Function", "Last operation", "Start with"],
      [
        [r`\(x^3\sin(2x)\)`, "multiply two functions", "product rule"],
        [r`\(\sin\!\left(x^3e^x\right)\)`, "take a sine", "chain rule"],
        [r`\(\dfrac{e^{2x}}{1+x^2}\)`, "divide", "quotient rule"],
        [r`\(\left(\dfrac{x}{x+1}\right)^4\)`, "raise to a power", "chain rule"],
        [r`\(\ln\!\left(x^3\sqrt{x+1}\right)\)`, "take a logarithm", "simplify first"],
      ],
    ),
    p(r`Each rule then hands you smaller derivatives to compute, and you ask the same question of each.`),

    sec("Simplify first when it pays"),
    key([
      ["Logarithms of products, quotients, powers", r`Expand with the log laws. \(\ln\!\left(x^3\sqrt{x+1}\right)=3\ln x+\tfrac12\ln(x+1)\).`],
      ["A constant numerator", r`\(\dfrac{1}{(x^2+4)^3}=(x^2+4)^{-3}\): chain rule, no quotient rule.`],
      ["A single-term denominator", r`Divide through.`],
      ["Trigonometric identities", r`\(\dfrac{1+\sin x}{\cos x}=\sec x+\tan x\).`],
    ]),
    p(r`After differentiating, do <strong>not</strong> simplify unless the question requires it or the next step needs it (for example, solving \(f'(x)=0\)).`),

    sec("Worked examples"),
    ex("core", "Product containing a chain", r`Differentiate \(y=x^3\sin(2x)\).`, [
      r`Last operation: multiplication. Product rule.`,
      r`\(y'=(3x^2)\sin(2x)+(x^3)\cdot\dfrac{d}{dx}[\sin(2x)]\), and \(\dfrac{d}{dx}[\sin(2x)]=2\cos(2x)\).`,
    ], r`\(y'=3x^2\sin(2x)+2x^3\cos(2x)\).`),
    ex("exam", "Quotient containing a chain", r`Differentiate \(y=\dfrac{e^{2x}}{1+x^2}\).`, [
      r`Quotient rule: \(y'=\dfrac{\left(2e^{2x}\right)(1+x^2)-\left(e^{2x}\right)(2x)}{(1+x^2)^2}\).`,
      r`Factor \(2e^{2x}\) from the numerator: \(2e^{2x}\left(1+x^2-x\right)\).`,
    ], r`\(y'=\dfrac{2e^{2x}\left(x^2-x+1\right)}{(1+x^2)^2}\).`),
    ex("exam", "Chain containing a quotient", r`Differentiate \(y=\left(\dfrac{x}{x+1}\right)^4\).`, [
      r`Last operation: fourth power. \(y'=4\left(\dfrac{x}{x+1}\right)^3\cdot\dfrac{d}{dx}\left[\dfrac{x}{x+1}\right]\).`,
      r`Quotient rule for the inside: \(\dfrac{(1)(x+1)-(x)(1)}{(x+1)^2}=\dfrac{1}{(x+1)^2}\).`,
    ], r`\(y'=\dfrac{4x^3}{(x+1)^5}\).`),
    ex("exam", "A logarithm worth expanding", r`Differentiate \(y=\ln\!\left(x^3\sqrt{x+1}\right)\).`, [
      r`Expand: \(y=3\ln x+\tfrac12\ln(x+1)\).`,
      r`Differentiate term by term.`,
    ], r`\(y'=\dfrac3x+\dfrac{1}{2(x+1)}\).`),
    ex("stretch", "Product and chain from a table", r`The differentiable functions \(f\) and \(g\) have the values shown. Let \(p(x)=f(x)\,g(2x)\). Find \(p'(1)\).${FG_TABLE}`, [
      r`Product rule: \(p'(x)=f'(x)\,g(2x)+f(x)\cdot\dfrac{d}{dx}\big[g(2x)\big]\).`,
      r`Chain rule: \(\dfrac{d}{dx}\big[g(2x)\big]=2g'(2x)\).`,
      r`\(p'(1)=f'(1)\,g(2)+f(1)\cdot2g'(2)=(-2)(1)+(3)(2)(-3)\).`,
    ], r`\(p'(1)=-2-18=-20\).`),

    sec("Common errors"),
    mistake("the chain factor lost inside another rule", r`<p>In \(x^3\sin(2x)\), the product rule asks for the derivative of \(\sin(2x)\). Writing \(\cos(2x)\) there, with no 2, is the usual place the chain rule goes missing.</p>`),
    mistake("starting with the wrong rule", r`<p>\(\sin\!\left(x^3e^x\right)\) is not a product. The product is <em>inside</em> the sine, so the chain rule comes first and the product rule is applied to the inside.</p>`),
    mistake("simplifying into an error", r`<p>An unsimplified correct derivative earns full credit. A simplified wrong one does not. Stop when the calculus is done.</p>`),

    sec("Write it so it scores"),
    justify(
      r`Let \(h(x)=x^2\,g(3x)\), where \(g\) is differentiable. Express \(h'(x)\) in terms of \(g\) and \(g'\).`,
      r`\(h'(x)=2x\,g(3x)+x^2\cdot g'(3x)\cdot3=2x\,g(3x)+3x^2g'(3x)\).`,
      r`Both terms of the product rule are present, and the second visibly carries the chain-rule factor 3 with \(g'\) evaluated at \(3x\). Each of those is a separately scored feature.`,
    ),
    exam(r`<p>When time is short in multiple choice, differentiate just far enough to distinguish the options. Often the leading term or the sign of one coefficient is enough to eliminate three of them.</p>`),

    sec("Practice"),
    pq(r`Differentiate \(y=e^{-x}\cos x\).`, r`\(y'=-e^{-x}\cos x-e^{-x}\sin x=-e^{-x}(\cos x+\sin x)\).`, "core"),
    pq(r`Differentiate \(y=\dfrac{1}{(x^2+4)^3}\).`, r`\(y=(x^2+4)^{-3}\), so \(y'=-3(x^2+4)^{-4}\cdot2x=-\dfrac{6x}{(x^2+4)^4}\).`, "core"),
    pq(r`Differentiate \(y=x^2\ln(3x+1)\).`, r`\(y'=2x\ln(3x+1)+\dfrac{3x^2}{3x+1}\).`, "exam"),
    pq(r`Differentiate \(y=\tan\!\left(e^{2x}\right)\).`, r`\(y'=\sec^2\!\left(e^{2x}\right)\cdot2e^{2x}\).`, "exam"),
    pq(r`Differentiate \(y=\sin^2x\cos x\).`, r`\(y'=2\sin x\cos x\cdot\cos x+\sin^2x\cdot(-\sin x)=2\sin x\cos^2x-\sin^3x\).`, "exam"),
    pq(r`Differentiate \(y=(2x+1)^5(x-3)^2\) and factor the result.`, r`\(10(2x+1)^4(x-3)^2+2(2x+1)^5(x-3)=(2x+1)^4(x-3)\big[10(x-3)+2(2x+1)\big]=14(2x+1)^4(x-3)(x-2)\).`, "stretch"),
    pq(r`Differentiate \(y=\ln\sqrt{\dfrac{1+x}{1-x}}\) for \(-1\lt x\lt1\).`, r`\(y=\tfrac12\ln(1+x)-\tfrac12\ln(1-x)\), so \(y'=\dfrac{1}{2(1+x)}+\dfrac{1}{2(1-x)}=\dfrac{1}{1-x^2}\).`, "stretch"),

    sec("Summary"),
    key([
      ["First question", r`What is the last operation? That is the first rule.`],
      ["Then recurse", r`Ask the same of each piece the rule requires.`],
      ["Simplify before", r`Logarithms, constant numerators, identities.`],
      ["Not after", r`Leave correct derivatives alone.`],
    ]),
  ],
});

// ───────────────────────── 3.6 ─────────────────────────
u3["3.6"] = lesson({
  code: "3.6", unit: 3, official: "3.6", calc: "No calculator",
  title: "Second and Higher Derivatives",
  parts: () => [
    lede(r`The derivative of a function is itself a function, so it can be differentiated again. The second derivative measures how the <em>rate of change</em> is changing: for position it is acceleration, and for a graph it will turn out to control which way the curve bends. Unit 5 is built on it. This lesson establishes the notation and the technique, including the case the exam is fondest of, a second derivative found implicitly.`),
    goals([
      r`Compute second and higher derivatives and write them in every standard notation.`,
      r`Interpret a second derivative as a rate of change of a rate, with units.`,
      r`Find \(\dfrac{d^2y}{dx^2}\) for an implicitly defined curve.`,
      r`Recognise patterns in repeated derivatives.`,
    ]),

    sec("Notation"),
    table(
      ["Order", "Prime notation", "Leibniz notation"],
      [
        ["first", r`\(f'(x),\ y'\)`, r`\(\dfrac{dy}{dx}\)`],
        ["second", r`\(f''(x),\ y''\)`, r`\(\dfrac{d^2y}{dx^2}\)`],
        ["third", r`\(f'''(x),\ y'''\)`, r`\(\dfrac{d^3y}{dx^3}\)`],
        [r`\(n\)th`, r`\(f^{(n)}(x),\ y^{(n)}\)`, r`\(\dfrac{d^ny}{dx^n}\)`],
      ],
    ),
    p(r`\(\dfrac{d^2y}{dx^2}\) means \(\dfrac{d}{dx}\left[\dfrac{dy}{dx}\right]\): the operator applied twice. It is <strong>not</strong> \(\left(\dfrac{dy}{dx}\right)^2\). The brackets in \(f^{(4)}\) distinguish the fourth derivative from the fourth power \(f^4\).`),

    sec("Meaning and units"),
    p(r`If \(s(t)\) is position in metres at time \(t\) seconds, then \(s'(t)\) is velocity in metres per second and \(s''(t)\) is acceleration in metres per second <em>per second</em>. In general the units of \(f''\) are the units of \(f\) divided by the square of the units of \(x\).`),

    sec("Implicit second derivatives"),
    p(r`For a curve given implicitly, \(\dfrac{dy}{dx}\) is an expression in both \(x\) and \(y\). To differentiate it again:`),
    `<ol><li>Differentiate the expression for \(\dfrac{dy}{dx}\) with respect to \(x\), usually by the quotient rule, remembering that each \(y\) produces a factor \(\dfrac{dy}{dx}\).</li><li><strong>Substitute</strong> the known expression for \(\dfrac{dy}{dx}\).</li><li>Simplify, using the original equation of the curve if it helps.</li></ol>`,
    p(r`If only a numerical value at a point is required, skip the algebra: after step 1, substitute the coordinates and the <em>number</em> \(\dfrac{dy}{dx}\) at that point.`),

    sec("Worked examples"),
    ex("core", "Repeated differentiation of a polynomial", r`Find all the derivatives of \(f(x)=x^4-3x^2+2x\).`, [
      r`\(f'(x)=4x^3-6x+2\).`,
      r`\(f''(x)=12x^2-6\).`,
      r`\(f'''(x)=24x\), \(f^{(4)}(x)=24\), and every later derivative is 0.`,
    ], r`A polynomial of degree \(n\) has \(f^{(n)}\) constant and all higher derivatives zero.`),
    ex("exam", "A second derivative with the quotient rule", r`Let \(f(x)=\ln(x^2+1)\). Find \(f''(1)\).`, [
      r`\(f'(x)=\dfrac{2x}{x^2+1}\).`,
      r`\(f''(x)=\dfrac{2(x^2+1)-2x(2x)}{(x^2+1)^2}=\dfrac{2-2x^2}{(x^2+1)^2}\).`,
    ], r`\(f''(1)=\dfrac{0}{4}=0\).`),
    ex("exam", "A function tied to its own second derivative", r`Show that \(y=\sin(3x)\) satisfies \(y''+9y=0\).`, [
      r`\(y'=3\cos(3x)\).`,
      r`\(y''=-9\sin(3x)\).`,
      r`\(y''+9y=-9\sin(3x)+9\sin(3x)\).`,
    ], r`\(y''+9y=0\) for all \(x\).`),
    ex("stretch", "An implicit second derivative", r`For the circle \(x^2+y^2=25\), find \(\dfrac{d^2y}{dx^2}\) in terms of \(y\), and its value at \((3,4)\).`, [
      r`From Lesson 3.2, \(\dfrac{dy}{dx}=-\dfrac{x}{y}\).`,
      r`Quotient rule: \(\dfrac{d^2y}{dx^2}=-\dfrac{(1)(y)-(x)\dfrac{dy}{dx}}{y^2}\).`,
      r`Substitute \(\dfrac{dy}{dx}=-\dfrac xy\): \(-\dfrac{y+\dfrac{x^2}{y}}{y^2}=-\dfrac{y^2+x^2}{y^3}\).`,
      r`On the curve \(x^2+y^2=25\).`,
    ], r`\(\dfrac{d^2y}{dx^2}=-\dfrac{25}{y^3}\); at \((3,4)\) it is \(-\dfrac{25}{64}\).`),

    sec("Common errors"),
    mistake(r`\(\dfrac{d^2y}{dx^2}=\left(\dfrac{dy}{dx}\right)^2\)`, r`<p>The second derivative is the derivative <em>of</em> the first derivative, not its square. For \(y=x^3\): \(y''=6x\), whereas \((y')^2=9x^4\).</p>`),
    mistake(r`leaving \(\dfrac{dy}{dx}\) in an implicit second derivative`, r`<p>An answer such as \(-\dfrac{y-x\,y'}{y^2}\) is unfinished when the question asks for the result in terms of \(x\) and \(y\). Substitute for \(y'\).</p>`),
    mistake(r`forgetting that \(y\) depends on \(x\) the second time`, r`<p>When differentiating \(-\dfrac xy\), the denominator \(y\) is a function of \(x\). Treating it as a constant gives \(-\dfrac1y\), which is wrong.</p>`),

    sec("Write it so it scores"),
    justify(
      r`For the curve \(xy=6\), it is known that \(\dfrac{dy}{dx}=-\dfrac{y}{x}\). Find the value of \(\dfrac{d^2y}{dx^2}\) at the point \((2,3)\).`,
      r`At \((2,3)\), \(\dfrac{dy}{dx}=-\dfrac32\). \(\dfrac{d^2y}{dx^2}=-\dfrac{\dfrac{dy}{dx}\cdot x-y\cdot1}{x^2}\). At \((2,3)\): \(-\dfrac{\left(-\tfrac32\right)(2)-3}{4}=-\dfrac{-6}{4}=\dfrac32\).`,
      r`It finds the numerical slope first, differentiates once with the quotient rule (showing \(\tfrac{dy}{dx}\) where \(y\) was differentiated), and substitutes numbers immediately. No general formula in \(x\) and \(y\) was needed, which is the efficient route when only a value is asked for.`,
    ),
    exam(r`<p>The final part of an implicit-curve free-response question is very often "find \(\dfrac{d^2y}{dx^2}\) at the point…". Use the numerical method above. It is shorter, and it avoids the simplification where most errors are made.</p>`),

    sec("Practice"),
    pq(r`Find \(f''(x)\) for \(f(x)=5x^3-\dfrac1x\).`, r`\(f'(x)=15x^2+x^{-2}\), so \(f''(x)=30x-2x^{-3}\).`, "core"),
    pq(r`Find \(y''\) for \(y=xe^x\).`, r`\(y'=e^x+xe^x\), so \(y''=e^x+e^x+xe^x=e^x(x+2)\).`, "core"),
    pq(r`Find the third derivative of \(y=e^{-3x}\).`, r`Each differentiation multiplies by \(-3\): \(y'''=-27e^{-3x}\).`, "exam"),
    pq(r`Find \(f''(x)\) for \(f(x)=x\ln x\).`, r`\(f'(x)=\ln x+1\), so \(f''(x)=\dfrac1x\).`, "exam"),
    pq(r`Find \(f''(x)\) for \(f(x)=\tan x\).`, r`\(f'(x)=\sec^2x\), so \(f''(x)=2\sec x\cdot\sec x\tan x=2\sec^2x\tan x\).`, "exam"),
    pq(r`For the curve \(x^2-y^2=7\), find \(\dfrac{d^2y}{dx^2}\) at \((4,3)\).`, r`\(y'=\dfrac xy=\dfrac43\) at the point. \(y''=\dfrac{y-x\,y'}{y^2}=\dfrac{3-4\cdot\frac43}{9}=\dfrac{-\frac73}{9}=-\dfrac{7}{27}\).`, "stretch"),
    pq(r`Find the 50th derivative of \(y=\sin x\).`, r`The derivatives cycle with period 4: \(\cos x,\ -\sin x,\ -\cos x,\ \sin x\). Since \(50=4\cdot12+2\), the 50th derivative equals the second: \(-\sin x\).`, "stretch"),

    sec("Summary"),
    key([
      ["Second derivative", r`\(f''=\left(f'\right)'\), written \(\dfrac{d^2y}{dx^2}\).`],
      ["Meaning", r`The rate of change of the rate of change.`],
      ["Implicit", r`Differentiate \(\tfrac{dy}{dx}\), then substitute for \(\tfrac{dy}{dx}\).`],
      ["At a point", r`Substitute numbers straight after differentiating.`],
    ]),
  ],
});
