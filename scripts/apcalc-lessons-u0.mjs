// AP Calculus AB exam prep — Unit 0 (Readiness): the precalculus the course
// assumes. Original wording, examples, numbers and figures throughout (see u1a
// for notes). As elsewhere, these examples are not reused in the question bank
// or the free-response questions.
import { r, lesson, lede, goals, sec, p, disp, def, thm, exam, mistake, justify, ex, pq, key, table } from "./apcalc/kit.mjs";
import { plot, figure, C } from "./apcalc/fig.mjs";

export const u0 = {};

/** one small parent-function graph */
const mini = (fn, a, b, name, o = {}) => {
  const g = plot({ w: 200, h: 180, x: o.x ?? [-4, 4], y: o.y ?? [-4, 4], pad: 16, ticks: false, alt: `Graph of y = ${name}` });
  if (o.split) g.curve(fn, a, -0.05).curve(fn, 0.05, b);
  else g.curve(fn, a, b, { n: 600 });
  return figure(g, `\\(y=${o.tex ?? name}\\)`);
};

// ───────────────────────── 0.1 ─────────────────────────
u0["0.1"] = lesson({
  code: "0.1", unit: 0, official: "prerequisite", calc: "No calculator",
  title: "Functions You Must Know Cold",
  parts: () => [
    lede(r`Calculus is built out of a small number of functions. Every limit, derivative and integral in this course is taken of one of about a dozen basic graphs, or of something made from them by shifting, stretching, combining and inverting. The exam never tests this material on its own, and never stops to remind you of it. If you have to work out what the graph of \(y=\ln x\) looks like, you will not finish the paper. This lesson is the list.`),
    goals([
      r`Sketch the twelve parent graphs from memory, with their domains and ranges.`,
      r`Read a transformation off a formula.`,
      r`Find the domain of a function from its formula.`,
      r`Compose two functions and find the inverse of a function.`,
    ]),

    sec("The twelve parent functions"),
    `<div class="apx-figrow">${mini((x) => x * x, -2, 2, "x^2")}${mini((x) => x ** 3, -1.6, 1.6, "x^3")}${mini((x) => Math.sqrt(x), 0, 4, "\\sqrt{x}", { tex: r`\sqrt{x}` })}${mini((x) => Math.abs(x), -4, 4, "|x|")}${mini((x) => 1 / x, -4, 4, "1/x", { split: true, tex: r`\dfrac1x` })}${mini((x) => Math.exp(x), -4, 1.4, "e^x")}${mini((x) => Math.log(x), 0.02, 4, "\\ln x", { tex: r`\ln x` })}${mini((x) => Math.sin(x), -4, 4, "\\sin x", { tex: r`\sin x` })}</div>`,
    table(
      ["Function", "Domain", "Range", "Remember"],
      [
        [r`\(x\), \(x^3\), \(\sqrt[3]{x}\)`, "all real numbers", "all real numbers", "odd; pass through the origin"],
        [r`\(x^2\), \(|x|\)`, "all real numbers", r`\(y\ge0\)`, "even; lowest point at the origin"],
        [r`\(\sqrt{x}\)`, r`\(x\ge0\)`, r`\(y\ge0\)`, "starts at the origin, vertical there"],
        [r`\(\dfrac1x\)`, r`\(x\neq0\)`, r`\(y\neq0\)`, "odd; both axes are asymptotes"],
        [r`\(\dfrac{1}{x^2}\)`, r`\(x\neq0\)`, r`\(y\gt0\)`, "even; both branches above the axis"],
        [r`\(e^x\)`, "all real numbers", r`\(y\gt0\)`, r`through \((0,1)\); asymptote \(y=0\)`],
        [r`\(\ln x\)`, r`\(x\gt0\)`, "all real numbers", r`through \((1,0)\); asymptote \(x=0\)`],
        [r`\(\sin x\), \(\cos x\)`, "all real numbers", r`\(-1\le y\le1\)`, r`period \(2\pi\)`],
      ],
    ),

    sec("Transformations"),
    table(
      ["Change to the formula", "Effect on the graph"],
      [
        [r`\(f(x)+k\)`, r`up \(k\)`],
        [r`\(f(x-h)\)`, r`right \(h\)`],
        [r`\(a\,f(x)\)`, r`vertical stretch by \(a\); reflected in the \(x\)-axis if \(a\lt0\)`],
        [r`\(f(bx)\)`, r`horizontal compression by \(b\)`],
        [r`\(f(-x)\)`, r`reflected in the \(y\)-axis`],
      ],
    ),
    p(r`Changes inside the brackets act on \(x\) and work "backwards": \(f(x-3)\) moves the graph right, and \(f(2x)\) makes it narrower. Changes outside act on \(y\) and do what they appear to do.`),

    sec("Domain, composition and inverses"),
    p(r`To find a domain, look for the three things that can go wrong: a zero denominator, a negative number under an even root, and a logarithm of a number that is not positive.`),
    def("Composition and inverse", r`<p>\((f\circ g)(x)=f\big(g(x)\big)\): do \(g\) first, then \(f\). The <strong>inverse</strong> \(f^{-1}\) undoes \(f\): \(f^{-1}\big(f(x)\big)=x\). A function has an inverse only if it is one-to-one, and the graph of \(f^{-1}\) is the reflection of the graph of \(f\) in the line \(y=x\).</p>`),
    p(r`A function is <strong>even</strong> if \(f(-x)=f(x)\) (symmetric about the \(y\)-axis) and <strong>odd</strong> if \(f(-x)=-f(x)\) (symmetric about the origin). Later this will save whole integrals.`),

    sec("Worked examples"),
    ex("core", "Domain from a formula", r`Find the domain of (a) \(f(x)=\sqrt{6-2x}\), (b) \(g(x)=\dfrac{3}{x-4}+1\), (c) \(h(x)=\ln(x+5)\).`, [
      r`(a) \(6-2x\ge0\) gives \(x\le3\).`,
      r`(b) The denominator is zero at \(x=4\).`,
      r`(c) \(x+5\gt0\) gives \(x\gt-5\).`,
    ], r`(a) \(x\le3\) &nbsp; (b) \(x\neq4\) &nbsp; (c) \(x\gt-5\). The range of \(g\) is \(y\neq1\): the graph of \(\tfrac1x\) stretched, moved right 4 and up 1.`),
    ex("exam", "Composing in both orders", r`Let \(f(x)=x^2+1\) and \(g(x)=\sqrt{x-2}\). Find \(f\big(g(x)\big)\) and \(g\big(f(x)\big)\), with their domains.`, [
      r`\(f\big(g(x)\big)=\left(\sqrt{x-2}\right)^2+1=x-1\), but only where \(g\) is defined: \(x\ge2\).`,
      r`\(g\big(f(x)\big)=\sqrt{x^2+1-2}=\sqrt{x^2-1}\), which needs \(x^2\ge1\).`,
    ], r`\(f\big(g(x)\big)=x-1\) for \(x\ge2\); \(g\big(f(x)\big)=\sqrt{x^2-1}\) for \(x\le-1\) or \(x\ge1\). The order matters, and the domain of a composition is not always visible in its simplified formula.`),
    ex("exam", "Finding an inverse", r`Find the inverse of \(h(x)=\dfrac{2x+1}{x-3}\).`, [
      r`Write \(y=\dfrac{2x+1}{x-3}\) and solve for \(x\): \(y(x-3)=2x+1\).`,
      r`\(xy-2x=3y+1\), so \(x=\dfrac{3y+1}{y-2}\).`,
      r`Swap the letters.`,
    ], r`\(h^{-1}(x)=\dfrac{3x+1}{x-2}\). Check: \(h(4)=9\) and \(h^{-1}(9)=\dfrac{28}{7}=4\).`),
    ex("stretch", "Reading a transformation", r`Describe how the graph of \(y=-2\sqrt{x+3}+1\) is obtained from \(y=\sqrt x\), and state its domain and range.`, [
      r`Inside: \(x+3\) moves the graph left 3.`,
      r`Outside: the factor \(-2\) stretches it vertically by 2 and reflects it in the \(x\)-axis; \(+1\) moves it up 1.`,
      r`The starting point \((0,0)\) goes to \((-3,1)\), and the graph now falls from there.`,
    ], r`Domain \(x\ge-3\); range \(y\le1\).`),

    sec("Common errors"),
    mistake("shifting the wrong way", r`<p>\(f(x+3)\) is a shift to the <em>left</em>. Ask what value of \(x\) now gives the old starting point.</p>`),
    mistake("the domain of a simplified composition", r`<p>\(\left(\sqrt{x-2}\right)^2+1\) simplifies to \(x-1\), but its domain is still \(x\ge2\). Record the domain before simplifying.</p>`),
    mistake("the inverse as a reciprocal", r`<p>\(f^{-1}(x)\) is the inverse function, not \(\dfrac{1}{f(x)}\). \(\sin^{-1}x\) is \(\arcsin x\), not \(\csc x\).</p>`),
    mistake("range confused with domain", r`<p>The domain is the set of allowed inputs, read along the \(x\)-axis. The range is the set of outputs, read along the \(y\)-axis.</p>`),

    sec("Write it so it scores"),
    justify(
      r`Explain why \(f(x)=x^2\) has no inverse function on its whole domain, and give a restriction of the domain on which it has one.`,
      r`\(f\) is not one-to-one: for example \(f(-2)=f(2)=4\), so the output 4 does not determine the input. On the restricted domain \(x\ge0\), \(f\) is increasing, hence one-to-one, and its inverse is \(f^{-1}(x)=\sqrt x\).`,
      r`A specific pair of inputs with the same output shows the failure, and "increasing, hence one-to-one" is the reason the restriction works. This is the argument used in Unit 3 for derivatives of inverse functions.`,
    ),
    exam(r`<p>None of this is examined directly. All of it is used, without comment, inside questions on other topics. A parent graph you can sketch in five seconds is five seconds; one you have to derive is two minutes.</p>`),

    sec("Practice"),
    pq(r`Find the domain of \(f(x)=\dfrac{\sqrt{x+2}}{x-1}\).`, r`\(x\ge-2\) and \(x\neq1\).`, "core"),
    pq(r`State the domain and range of \(y=e^{x}-3\).`, r`Domain all real numbers; range \(y\gt-3\).`, "core"),
    pq(r`Let \(f(x)=2x-5\) and \(g(x)=x^2\). Find \(f\big(g(3)\big)\) and \(g\big(f(3)\big)\).`, r`\(f(9)=13\) and \(g(1)=1\).`, "core"),
    pq(r`Find the inverse of \(f(x)=\sqrt[3]{x-4}\).`, r`\(y^3=x-4\), so \(f^{-1}(x)=x^3+4\).`, "exam"),
    pq(r`Is \(f(x)=x^3-x\) even, odd or neither?`, r`\(f(-x)=-x^3+x=-f(x)\): odd.`, "exam"),
    pq(r`The graph of \(y=\ln x\) is moved right 2 and reflected in the \(x\)-axis. Write its equation and state its vertical asymptote.`, r`\(y=-\ln(x-2)\), with asymptote \(x=2\).`, "stretch"),

    sec("Summary"),
    key([
      ["Twelve graphs", "Shape, domain, range, one key point."],
      ["Inside the brackets", r`Acts on \(x\), backwards.`],
      ["Domain", "No zero denominators, negative even roots or logs of non-positives."],
      ["Inverse", r`Swap \(x\) and \(y\), then solve.`],
    ]),
  ],
});

// ───────────────────────── 0.2 ─────────────────────────
u0["0.2"] = lesson({
  code: "0.2", unit: 0, official: "prerequisite", calc: "No calculator",
  title: "Trigonometry Without Hesitation",
  parts: () => {
    const g = plot({ w: 440, h: 240, x: [-0.6, 6.9], y: [-1.6, 1.6], stepX: Math.PI / 2, ticks: false, alt: "Graphs of sine and cosine on the interval from 0 to 2π" });
    g.curve(Math.sin, 0, 2 * Math.PI).curve(Math.cos, 0, 2 * Math.PI, { color: C.alt }).label(1.2, 1.2, "y = sin x").label(5.2, 1.2, "y = cos x", { color: C.alt }).label(Math.PI - 0.1, -0.22, "π", { plain: true, size: 13 }).label(2 * Math.PI - 0.2, -0.22, "2π", { plain: true, size: 13 });
    return [
      lede(r`On the no-calculator sections of the exam, about one question in five involves a trigonometric function, and every one of them ends with a value such as \(\cos\dfrac{\pi}{3}\) that you are expected simply to know. Calculus is done in radians, always, and with exact values. This lesson collects what has to be automatic.`),
      goals([
        r`Recall the exact values of sine, cosine and tangent at the standard angles.`,
        r`Find values in any quadrant using a reference angle.`,
        r`Solve trigonometric equations on a given interval.`,
        r`Use the Pythagorean and double-angle identities.`,
      ]),

      sec("Radians and the standard values"),
      p(r`An angle of \(\pi\) radians is \(180^\circ\). Radians are not optional: the formula \(\dfrac{d}{dx}\sin x=\cos x\) is true only when \(x\) is in radians.`),
      table(
        [r`\(\theta\)`, r`\(0\)`, r`\(\dfrac{\pi}{6}\)`, r`\(\dfrac{\pi}{4}\)`, r`\(\dfrac{\pi}{3}\)`, r`\(\dfrac{\pi}{2}\)`],
        [
          [r`\(\sin\theta\)`, r`\(0\)`, r`\(\dfrac12\)`, r`\(\dfrac{\sqrt2}{2}\)`, r`\(\dfrac{\sqrt3}{2}\)`, r`\(1\)`],
          [r`\(\cos\theta\)`, r`\(1\)`, r`\(\dfrac{\sqrt3}{2}\)`, r`\(\dfrac{\sqrt2}{2}\)`, r`\(\dfrac12\)`, r`\(0\)`],
          [r`\(\tan\theta\)`, r`\(0\)`, r`\(\dfrac{1}{\sqrt3}\)`, r`\(1\)`, r`\(\sqrt3\)`, "undefined"],
        ],
      ),
      p(r`The sine row reads \(\dfrac{\sqrt0}{2},\dfrac{\sqrt1}{2},\dfrac{\sqrt2}{2},\dfrac{\sqrt3}{2},\dfrac{\sqrt4}{2}\); the cosine row is the same list backwards.`),

      sec("Other quadrants"),
      p(r`For an angle outside the first quadrant, find its <strong>reference angle</strong> (the acute angle it makes with the \(x\)-axis), take the value from the table, and attach the sign. Sine is positive in quadrants I and II, cosine in I and IV, tangent in I and III.`),
      figure(g, r`One period of each. Sine starts at 0 and rises; cosine starts at 1 and falls. Their zeros and peaks are a quarter-period apart.`),

      sec("The identities that calculus uses"),
      table(
        ["Name", "Identity"],
        [
          ["Pythagorean", r`\(\sin^2x+\cos^2x=1\), &nbsp; \(1+\tan^2x=\sec^2x\), &nbsp; \(1+\cot^2x=\csc^2x\)`],
          ["Quotient and reciprocal", r`\(\tan x=\dfrac{\sin x}{\cos x}\), &nbsp; \(\sec x=\dfrac{1}{\cos x}\), &nbsp; \(\csc x=\dfrac{1}{\sin x}\), &nbsp; \(\cot x=\dfrac{\cos x}{\sin x}\)`],
          ["Double angle", r`\(\sin2x=2\sin x\cos x\), &nbsp; \(\cos2x=\cos^2x-\sin^2x=1-2\sin^2x=2\cos^2x-1\)`],
          ["Even and odd", r`\(\cos(-x)=\cos x\), &nbsp; \(\sin(-x)=-\sin x\), &nbsp; \(\tan(-x)=-\tan x\)`],
        ],
      ),
      p(r`The inverse functions return one angle only: \(\arcsin x\) lies in \(\left[-\dfrac\pi2,\dfrac\pi2\right]\), \(\arccos x\) in \([0,\pi]\), and \(\arctan x\) in \(\left(-\dfrac\pi2,\dfrac\pi2\right)\).`),

      sec("Worked examples"),
      ex("core", "Values in other quadrants", r`Find \(\sin\dfrac{5\pi}{6}\), \(\cos\dfrac{4\pi}{3}\) and \(\tan\dfrac{3\pi}{4}\).`, [
        r`\(\dfrac{5\pi}{6}\) is in quadrant II with reference angle \(\dfrac\pi6\); sine is positive.`,
        r`\(\dfrac{4\pi}{3}\) is in quadrant III with reference angle \(\dfrac\pi3\); cosine is negative.`,
        r`\(\dfrac{3\pi}{4}\) is in quadrant II with reference angle \(\dfrac\pi4\); tangent is negative.`,
      ], r`\(\dfrac12\), \(-\dfrac12\) and \(-1\).`),
      ex("exam", "A linear equation in sine", r`Solve \(2\sin x-1=0\) for \(0\le x\lt2\pi\).`, [
        r`\(\sin x=\dfrac12\). The reference angle is \(\dfrac\pi6\).`,
        r`Sine is positive in quadrants I and II.`,
      ], r`\(x=\dfrac\pi6\) and \(x=\dfrac{5\pi}{6}\).`),
      ex("exam", "A quadratic in cosine", r`Solve \(2\cos^2x-\cos x-1=0\) for \(0\le x\lt2\pi\).`, [
        r`Factor: \((2\cos x+1)(\cos x-1)=0\).`,
        r`\(\cos x=1\) gives \(x=0\).`,
        r`\(\cos x=-\dfrac12\) gives \(x=\dfrac{2\pi}{3}\) and \(x=\dfrac{4\pi}{3}\).`,
      ], r`\(x=0,\ \dfrac{2\pi}{3},\ \dfrac{4\pi}{3}\).`),
      ex("exam", "Using a double-angle identity", r`Solve \(\sin2x=\cos x\) for \(0\le x\lt2\pi\).`, [
        r`\(2\sin x\cos x-\cos x=0\), so \(\cos x\,(2\sin x-1)=0\).`,
        r`\(\cos x=0\) gives \(x=\dfrac\pi2,\dfrac{3\pi}{2}\).`,
        r`\(\sin x=\dfrac12\) gives \(x=\dfrac\pi6,\dfrac{5\pi}{6}\).`,
      ], r`Four solutions: \(\dfrac\pi6,\ \dfrac\pi2,\ \dfrac{5\pi}{6},\ \dfrac{3\pi}{2}\). Dividing both sides by \(\cos x\) would have lost two of them.`),
      ex("stretch", "Inverse trigonometric values", r`Find \(\arcsin\!\left(-\dfrac12\right)\), \(\arccos\!\left(-\dfrac12\right)\) and \(\arctan1\).`, [
        r`\(\arcsin\) returns an angle between \(-\dfrac\pi2\) and \(\dfrac\pi2\): the angle is \(-\dfrac\pi6\).`,
        r`\(\arccos\) returns an angle between 0 and \(\pi\): the angle is \(\dfrac{2\pi}{3}\).`,
        r`\(\tan\dfrac\pi4=1\).`,
      ], r`\(-\dfrac\pi6\), \(\dfrac{2\pi}{3}\) and \(\dfrac\pi4\).`),

      sec("Common errors"),
      mistake("degrees", r`<p>A calculator in degree mode gives \(\sin1=0.0175\). In this course \(\sin1\) means the sine of 1 radian, \(0.8415\).</p>`),
      mistake("dividing away solutions", r`<p>Never divide an equation by \(\sin x\) or \(\cos x\). Move everything to one side and factor.</p>`),
      mistake("only one solution", r`<p>On \([0,2\pi)\) an equation such as \(\sin x=\dfrac12\) has two solutions. Check every quadrant in which the function has the required sign.</p>`),
      mistake("sin²x and sin(x²)", r`<p>\(\sin^2x\) means \((\sin x)^2\). It is not \(\sin(x^2)\), and the two have different derivatives.</p>`),

      sec("Write it so it scores"),
      justify(
        r`Show that \(\dfrac{1-\cos2x}{\sin2x}=\tan x\) wherever both sides are defined.`,
        r`\(\dfrac{1-\cos2x}{\sin2x}=\dfrac{1-\left(1-2\sin^2x\right)}{2\sin x\cos x}=\dfrac{2\sin^2x}{2\sin x\cos x}=\dfrac{\sin x}{\cos x}=\tan x\).`,
        r`One side is transformed into the other, one identity at a time. Working on both sides at once and arriving at something true does not prove the identity.`,
      ),
      exam(r`<p>Leave exact answers exact. \(\dfrac{\sqrt3}{2}\) is correct; \(0.87\) on a no-calculator section is not, and \(0.866\) on a calculator section is only correct if all three decimal places are right.</p>`),

      sec("Practice"),
      pq(r`Find \(\cos\dfrac{5\pi}{6}\), \(\sin\dfrac{7\pi}{4}\) and \(\tan\dfrac{\pi}{3}\).`, r`\(-\dfrac{\sqrt3}{2}\), \(-\dfrac{\sqrt2}{2}\) and \(\sqrt3\).`, "core"),
      pq(r`Solve \(\cos x=-\dfrac{\sqrt2}{2}\) for \(0\le x\lt2\pi\).`, r`\(x=\dfrac{3\pi}{4}\) and \(x=\dfrac{5\pi}{4}\).`, "core"),
      pq(r`Solve \(\tan x=\sqrt3\) for \(0\le x\lt2\pi\).`, r`\(x=\dfrac\pi3\) and \(x=\dfrac{4\pi}{3}\).`, "core"),
      pq(r`Solve \(2\sin^2x=1\) for \(0\le x\lt2\pi\).`, r`\(\sin x=\pm\dfrac{\sqrt2}{2}\): \(x=\dfrac\pi4,\dfrac{3\pi}{4},\dfrac{5\pi}{4},\dfrac{7\pi}{4}\).`, "exam"),
      pq(r`If \(\sin\theta=\dfrac35\) and \(\theta\) is in quadrant II, find \(\cos\theta\) and \(\sin2\theta\).`, r`\(\cos\theta=-\dfrac45\); \(\sin2\theta=2\cdot\dfrac35\cdot\left(-\dfrac45\right)=-\dfrac{24}{25}\).`, "exam"),
      pq(r`Simplify \(\dfrac{\sec^2x-1}{\sec^2x}\).`, r`\(\dfrac{\tan^2x}{\sec^2x}=\sin^2x\).`, "stretch"),

      sec("Summary"),
      key([
        ["Radians", "Always."],
        ["Standard values", r`\(\dfrac{\sqrt n}{2}\) for \(n=0\) to \(4\).`],
        ["Other quadrants", "Reference angle, then the sign."],
        ["Equations", "Factor; never divide by a trig function."],
      ]),
    ];
  },
});

// ───────────────────────── 0.3 ─────────────────────────
u0["0.3"] = lesson({
  code: "0.3", unit: 0, official: "prerequisite", calc: "No calculator",
  title: "Exponentials, Logarithms and Their Laws",
  parts: () => {
    const g = plot({ w: 360, h: 320, x: [-4, 5], y: [-4, 5], alt: "Graphs of y = e to the x and y = ln x, mirror images in the line y = x" });
    g.curve((x) => x, -4, 5, { color: C.grey, dash: "5 5", width: 1.4 }).curve(Math.exp, -4, 1.7).curve(Math.log, 0.02, 5, { color: C.alt, n: 600 }).dot(0, 1).dot(1, 0, { color: C.alt }).label(-3.6, 1.0, "y = eˣ").label(2.9, 0.55, "y = ln x", { color: C.alt });
    return [
      lede(r`The function \(e^x\) is the only function that is its own derivative, and for that reason it appears in every unit of the course. Its inverse, the natural logarithm, is how every equation with an unknown exponent gets solved. Most of the errors students make with these two functions are errors of algebra, made long before any calculus starts.`),
      goals([
        r`Apply the laws of exponents and the laws of logarithms.`,
        r`Move between exponential and logarithmic form.`,
        r`Solve exponential and logarithmic equations exactly.`,
        r`Rewrite any exponential or logarithm in terms of \(e\) and \(\ln\).`,
      ]),

      sec("Two functions that undo each other"),
      def("Natural logarithm", r`<p>\(\ln x\) is the power to which \(e\approx2.718\) must be raised to give \(x\). So \(y=\ln x\) means exactly \(e^{y}=x\), and</p>\[ \ln\!\left(e^{x}\right)=x\ \text{ for all }x,\qquad e^{\ln x}=x\ \text{ for }x\gt0. \]`),
      figure(g, r`Each graph is the reflection of the other in the line \(y=x\). \(e^x\) is defined everywhere and always positive; \(\ln x\) is defined only for positive \(x\) and takes every value.`),

      sec("The laws"),
      table(
        ["Exponents", "Logarithms"],
        [
          [r`\(e^{a}e^{b}=e^{a+b}\)`, r`\(\ln(ab)=\ln a+\ln b\)`],
          [r`\(\dfrac{e^{a}}{e^{b}}=e^{a-b}\)`, r`\(\ln\dfrac ab=\ln a-\ln b\)`],
          [r`\(\left(e^{a}\right)^{b}=e^{ab}\)`, r`\(\ln\!\left(a^{b}\right)=b\ln a\)`],
          [r`\(e^{0}=1\), &nbsp; \(e^{-a}=\dfrac{1}{e^{a}}\)`, r`\(\ln1=0\), &nbsp; \(\ln e=1\), &nbsp; \(\ln\dfrac1a=-\ln a\)`],
        ],
      ),
      p(r`There is no law for \(\ln(a+b)\). It is not \(\ln a+\ln b\), and it does not simplify.`),
      p(r`Other bases reduce to these: \(a^{x}=e^{x\ln a}\) and \(\log_ax=\dfrac{\ln x}{\ln a}\).`),

      sec("Worked examples"),
      ex("core", "Simplifying", r`Simplify \(\ln\!\left(e^{3}\right)\), \(e^{\ln5}\), \(\ln\dfrac1e\) and \(e^{2\ln3}\).`, [
        r`The first two use the inverse relationship directly.`,
        r`\(\ln\dfrac1e=\ln\!\left(e^{-1}\right)\).`,
        r`\(e^{2\ln3}=e^{\ln(3^2)}\).`,
      ], r`\(3\), \(5\), \(-1\) and \(9\).`),
      ex("exam", "Solving for an exponent", r`Solve (a) \(e^{2x}=7\), (b) \(\ln(x-1)=2\).`, [
        r`(a) Take the logarithm of both sides: \(2x=\ln7\).`,
        r`(b) Rewrite in exponential form: \(x-1=e^{2}\).`,
      ], r`(a) \(x=\dfrac{\ln7}{2}\) &nbsp; (b) \(x=e^{2}+1\).`),
      ex("exam", "A quadratic in disguise", r`Solve \(e^{2x}-5e^{x}+6=0\).`, [
        r`Let \(u=e^{x}\): \(u^2-5u+6=(u-2)(u-3)=0\).`,
        r`\(e^{x}=2\) or \(e^{x}=3\).`,
      ], r`\(x=\ln2\) or \(x=\ln3\).`),
      ex("exam", "Expanding a logarithm", r`Write \(\ln\dfrac{x^2\sqrt{x+1}}{x-3}\) as a sum and difference of simple logarithms.`, [
        r`Quotient: \(\ln\!\left(x^2\sqrt{x+1}\right)-\ln(x-3)\).`,
        r`Product, then powers: \(2\ln x+\dfrac12\ln(x+1)\).`,
      ], r`\(2\ln x+\dfrac12\ln(x+1)-\ln(x-3)\). In Unit 3 this is the step that turns a hard derivative into three easy ones.`),
      ex("stretch", "An extraneous solution", r`Solve \(\ln x+\ln(x-2)=\ln8\).`, [
        r`Combine: \(\ln\big(x(x-2)\big)=\ln8\), so \(x^2-2x-8=0\).`,
        r`\((x-4)(x+2)=0\) gives \(x=4\) or \(x=-2\).`,
        r`\(\ln(-2)\) is not defined, so \(x=-2\) is rejected.`,
      ], r`\(x=4\).`),

      sec("Common errors"),
      mistake("a law that does not exist", r`<p>\(\ln(a+b)\neq\ln a+\ln b\), and \(\dfrac{\ln a}{\ln b}\neq\ln a-\ln b\). The laws turn products into sums and quotients into differences, nothing else.</p>`),
      mistake("e⁰ = 0", r`<p>\(e^{0}=1\). This matters every time an integral has 0 as a limit: \(\big[e^{x}\big]_0^1=e-1\), not \(e\).</p>`),
      mistake("cancelling ln across a sum", r`<p>From \(\ln x+\ln(x-2)=\ln8\) you cannot "cancel the logs" term by term. Combine the left side into a single logarithm first.</p>`),
      mistake("not checking the domain", r`<p>A logarithmic equation can produce a value that makes an original logarithm undefined. Check every solution in the original equation.</p>`),

      sec("Write it so it scores"),
      justify(
        r`A quantity is modelled by \(Q(t)=500e^{0.04t}\). Find the exact time at which \(Q=1000\).`,
        r`\(500e^{0.04t}=1000\) gives \(e^{0.04t}=2\), so \(0.04t=\ln2\) and \(t=\dfrac{\ln2}{0.04}=25\ln2\).`,
        r`The exponential is isolated before the logarithm is taken, and the answer is left exact. Taking \(\ln\) of \(500e^{0.04t}\) as "\(500\cdot0.04t\)" is the most common way to lose this point.`,
      ),
      exam(r`<p>On the no-calculator sections, answers such as \(\ln3\) or \(\dfrac{\ln7}{2}\) are complete. Do not try to turn them into decimals.</p>`),

      sec("Practice"),
      pq(r`Simplify \(\ln\!\left(e^{-4}\right)\), \(e^{3\ln2}\) and \(\ln\sqrt e\).`, r`\(-4\), \(8\) and \(\dfrac12\).`, "core"),
      pq(r`Solve \(3e^{x}=12\).`, r`\(e^{x}=4\), so \(x=\ln4\).`, "core"),
      pq(r`Solve \(\ln(2x+1)=0\).`, r`\(2x+1=1\), so \(x=0\).`, "core"),
      pq(r`Write \(3\ln x-\dfrac12\ln y\) as a single logarithm.`, r`\(\ln\dfrac{x^3}{\sqrt y}\).`, "exam"),
      pq(r`Solve \(e^{2x}-e^{x}-6=0\).`, r`\((e^{x}-3)(e^{x}+2)=0\). \(e^{x}=-2\) is impossible, so \(x=\ln3\).`, "exam"),
      pq(r`Write \(5^{x}\) in terms of \(e\), and solve \(5^{x}=20\) exactly.`, r`\(5^{x}=e^{x\ln5}\); \(x\ln5=\ln20\), so \(x=\dfrac{\ln20}{\ln5}\).`, "stretch"),

      sec("Summary"),
      key([
        ["Inverse pair", r`\(\ln(e^x)=x\) and \(e^{\ln x}=x\).`],
        ["Laws", "Products to sums, quotients to differences, powers to multiples."],
        ["To solve", r`Isolate the exponential, then take \(\ln\).`],
        ["Check", "Logarithms need positive inputs."],
      ]),
    ];
  },
});

// ───────────────────────── 0.4 ─────────────────────────
u0["0.4"] = lesson({
  code: "0.4", unit: 0, official: "prerequisite", calc: "Calculator",
  title: "Your Graphing Calculator: The Four Exam Skills",
  parts: () => [
    lede(r`A third of the exam requires a graphing calculator, and those questions are written so that they cannot be done without one. But the exam expects only four things from the machine. Everything else, including every explanation and every set-up, has to come from you and be written on the page in ordinary mathematical notation. Students lose more calculator-section points to what they write than to what they press.`),
    goals([
      r`Graph a function in a suitable window.`,
      r`Solve an equation numerically, as a zero or as an intersection.`,
      r`Evaluate a derivative at a point and a definite integral numerically.`,
      r`Record calculator work so that it earns the set-up point and the answer point.`,
    ]),

    sec("The four skills"),
    table(
      ["Skill", "What you do on the calculator", "What you write on the page"],
      [
        ["1. Graph in a window", "choose a window that shows the behaviour you need", "nothing; a graph is for your own use"],
        ["2. Solve an equation", "find a zero of a function, or the intersection of two graphs", r`the equation you solved, then \(x\approx\ldots\)`],
        ["3. Derivative at a point", "numerical derivative", r`\(f'(2)\approx\ldots\) in that notation`],
        ["4. Definite integral", "numerical integral", r`the integral with its limits, then \(\approx\ldots\)`],
      ],
    ),
    p(r`You may use these four without showing how the calculator did them. Anything else, such as finding a maximum with a built-in "maximum" command, is not accepted as justification: a maximum has to be justified with a derivative.`),

    sec("Three rules that cost points"),
    `<ol><li><strong>Radian mode.</strong> Check it before the exam begins. Every calculus formula for a trigonometric function assumes radians.</li><li><strong>Three decimal places.</strong> A final answer must be correct to three places after the decimal point, rounded or truncated. \(0.682\) and \(0.6823\) are both accepted for \(0.682328\); \(0.68\) is not.</li><li><strong>Store, do not retype.</strong> An intermediate value that will be used again should be stored in the calculator's memory at full precision. Using a rounded value as a limit of integration can change the third decimal place of the answer.</li></ol>`,

    sec("Worked examples"),
    ex("core", "Solving an equation", r`Find the zero of \(f(x)=x^3+x-1\).`, [
      r`Graph \(f\). It crosses the \(x\)-axis once, between 0 and 1.`,
      r`Use the calculator's zero (root) command, or solve \(x^3+x-1=0\) with its solver.`,
    ], r`On the page: "\(x^3+x-1=0\) when \(x\approx0.682\)".`),
    ex("core", "An intersection", r`Find the value of \(x\) at which \(\cos x=x\).`, [
      r`Graph \(y=\cos x\) and \(y=x\) (radian mode) and use the intersection command.`,
      r`Or find the zero of \(\cos x-x\).`,
    ], r`\(x\approx0.739\). Store the full value \(0.739085\ldots\) if it will be needed again.`),
    ex("exam", "A derivative at a point", r`Let \(f(x)=\sin\!\left(x^2\right)\). Find \(f'(1.5)\).`, [
      r`Use the numerical derivative command with the function \(\sin(x^2)\) at \(x=1.5\).`,
    ], r`On the page: "\(f'(1.5)\approx-1.885\)". No rule needs to be shown on a calculator question, but the notation \(f'(1.5)\) must be.`),
    ex("exam", "A definite integral", r`Evaluate \(\displaystyle\int_0^3e^{-x^2/2}\,dx\).`, [
      r`This function has no antiderivative in terms of the functions of this course. Use the numerical integral command.`,
    ], r`On the page: "\(\displaystyle\int_0^3e^{-x^2/2}\,dx\approx1.250\)" (the calculator shows \(1.249930\)). The integral, written with its limits, earns the set-up point.`),
    ex("stretch", "Why storing matters", r`The graphs of \(y=xe^{-x}\) and \(y=0.2\) intersect at \(x=a\) and \(x=b\). Find the area of the region between them.`, [
      r`Intersections: \(a\approx0.259171\) and \(b\approx2.542641\). Store both.`,
      r`Area \(=\displaystyle\int_a^b\left(xe^{-x}-0.2\right)dx\).`,
      r`With the stored values the calculator gives \(0.236339\).`,
    ], r`Area \(\approx0.236\). Entering the limits as \(0.26\) and \(2.54\) happens to give the same three places here; in questions where the integrand is steep near a limit, the same habit changes the third decimal place.`),

    sec("Common errors"),
    mistake("calculator syntax on the page", r`<p>"fnInt(X^2,X,0,3)" earns nothing. Write \(\displaystyle\int_0^3x^2\,dx\). Readers mark mathematics, not keystrokes.</p>`),
    mistake("an answer with no set-up", r`<p>A bare decimal earns at most the answer point. The equation, derivative or integral that produced it earns the rest.</p>`),
    mistake("degree mode", r`<p>In degree mode, the second example gives \(x\approx0.9998\). If a trigonometric answer looks strange, check the mode first.</p>`),
    mistake("rounding in the middle", r`<p>Round once, at the end. A value rounded to two places and then used in a further calculation is no longer reliable in the third.</p>`),

    sec("Write it so it scores"),
    justify(
      r`Let \(R\) be the region enclosed by the graphs of \(y=\ln(x+1)\) and \(y=x^2\). Find the area of \(R\).`,
      r`The graphs intersect at \(x=0\) and at \(x=b\), where \(\ln(b+1)=b^2\), \(b\approx0.747\). Area \(=\displaystyle\int_0^{b}\left[\ln(x+1)-x^2\right]dx\approx0.089\).`,
      r`The equation that defines the limit is stated, the limit is given to three places, the integral is written in full, and the decimal comes last. Each of those is something a reader can award a point for.`,
    ),
    exam(r`<p>On the two calculator free-response questions, use the calculator for arithmetic, equations, derivatives at a point and definite integrals. Do not use it to avoid writing: the explanation still has to be on the page.</p>`),

    sec("Practice"),
    pq(r`Find the positive zero of \(f(x)=x^3-2x-5\).`, r`\(x\approx2.095\).`, "core"),
    pq(r`Find the value of \(x\) at which \(e^{x}=3-x\).`, r`\(x\approx0.792\).`, "core"),
    pq(r`Let \(f(x)=e^{\sin x}\). Find \(f'(2)\).`, r`\(f'(2)\approx-1.033\).`, "exam"),
    pq(r`Evaluate \(\displaystyle\int_0^{\pi}\sqrt{\sin x}\,dx\).`, r`\(\approx2.396\).`, "exam"),
    pq(r`A student reports the zero of \(x^3+x-1\) as \(0.68\). Is this acceptable?`, r`No. Answers must be accurate to three decimal places: \(0.682\).`, "exam"),
    pq(r`Find the smallest positive solution of \(\tan x=2x\), and explain why a graph is needed before solving.`, r`\(x\approx1.166\). The equation also has the solution \(x=0\) and others beyond \(\dfrac\pi2\); the graph shows which crossing is wanted and where to start the solver.`, "stretch"),

    sec("Summary"),
    key([
      ["Four skills", "Graph, solve, derivative at a point, definite integral."],
      ["Mode", "Radians."],
      ["Accuracy", "Three decimal places, rounded once at the end."],
      ["On the page", "Standard notation: the set-up first, the decimal last."],
    ]),
  ],
});
