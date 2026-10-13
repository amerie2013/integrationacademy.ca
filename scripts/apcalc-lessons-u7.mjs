// AP Calculus AB exam prep — Unit 7 (Differential Equations).
// Original wording, examples, numbers and figures throughout (see u1a for notes).
import { r, lesson, lede, goals, sec, p, disp, def, thm, exam, mistake, justify, ex, pq, key, table } from "./apcalc/kit.mjs";
import { plot, figure, C } from "./apcalc/fig.mjs";

export const u7 = {};

/** A slope field on the square [−3,3]², drawn at integer lattice points. */
export const field = (fn, o = {}) => {
  const g = plot({ w: o.w ?? 300, h: o.h ?? 300, x: o.x ?? [-3.6, 3.6], y: o.y ?? [-3.6, 3.6], grid: false, tickEvery: o.tickEvery ?? 1, alt: o.alt ?? "Slope field" });
  g.slopes(fn, { half: o.half ?? 8 });
  return g;
};

// ───────────────────────── 7.1 ─────────────────────────
u7["7.1"] = lesson({
  code: "7.1", unit: 7, official: "7.1", calc: "No calculator",
  title: "Writing a Differential Equation from a Description",
  parts: () => [
    lede(r`Most laws of nature are not statements about how big something is. They are statements about how fast it <em>changes</em>: a hot object cools faster when it is much hotter than the room; a population grows faster when there are more individuals to reproduce. An equation that relates a quantity to its own rate of change is a <strong>differential equation</strong>. Before one can be solved it has to be written down, and the exam gives a point simply for translating the words correctly.`),
    goals([
      r`Translate a verbal description of a rate into a differential equation.`,
      r`Use the phrases "proportional to" and "inversely proportional to" correctly.`,
      r`Find a constant of proportionality from given information.`,
      r`Interpret the terms of a differential equation in context.`,
    ]),

    sec("What a differential equation is"),
    def("Differential equation", r`<p>An equation involving an unknown function and one or more of its derivatives. A <strong>solution</strong> is a function, not a number, that makes the equation true for every value of the variable in some interval.</p>`),
    p(r`\(\dfrac{dy}{dt}=0.04y\) is a differential equation. It does not say what \(y\) is; it says that at every moment \(y\) is growing at 4% of its current size.`),

    sec("The vocabulary of proportion"),
    table(
      ["Words", "Symbols"],
      [
        [r`the rate of change of \(y\) with respect to \(t\)`, r`\(\dfrac{dy}{dt}\)`],
        [r`is proportional to \(y\)`, r`\(=ky\)`],
        [r`is inversely proportional to \(y\)`, r`\(=\dfrac{k}{y}\)`],
        [r`is proportional to the square of \(y\)`, r`\(=ky^2\)`],
        [r`is proportional to the difference between \(T\) and 20`, r`\(=k(T-20)\)`],
        [r`is proportional to the product of \(y\) and \(N-y\)`, r`\(=ky(N-y)\)`],
        [r`is jointly proportional to \(x\) and \(y\)`, r`\(=kxy\)`],
      ],
    ),
    p(r`\(k\) is the <strong>constant of proportionality</strong>. Its sign carries meaning: if the quantity is decreasing while the expression it multiplies is positive, then \(k\) is negative. Some questions prefer to write \(-k\) with \(k\gt0\); read which convention is in use.`),

    sec("Rates that combine"),
    p(r`When a quantity is added to at one rate and removed at another, the differential equation is the net rate: \(\dfrac{dA}{dt}=(\text{rate in})-(\text{rate out})\). If the rate out depends on how much is present, the unknown appears on the right-hand side.`),

    sec("Worked examples"),
    ex("core", "Three translations", r`Write a differential equation for each. (a) A population \(P\) grows at a rate proportional to its size. (b) The rate of change of \(y\) with respect to \(x\) is inversely proportional to the square of \(x\). (c) A quantity \(Q\) decays at a rate proportional to the square root of \(Q\).`, [
      r`(a) \(\dfrac{dP}{dt}=kP\).`,
      r`(b) \(\dfrac{dy}{dx}=\dfrac{k}{x^2}\).`,
      r`(c) \(\dfrac{dQ}{dt}=k\sqrt Q\) with \(k\lt0\), or \(\dfrac{dQ}{dt}=-k\sqrt Q\) with \(k\gt0\).`,
    ], r`Each is a statement about a rate, with one unknown constant.`),
    ex("exam", "Cooling, with the constant found", r`A cup of coffee at temperature \(T\) °C sits in a room at 20 °C. Its temperature changes at a rate proportional to the difference between its temperature and the room's. When \(T=85\), the coffee is cooling at 3.9 °C per minute. Write the differential equation, including the value of the constant.`, [
      r`\(\dfrac{dT}{dt}=k(T-20)\).`,
      r`"Cooling at 3.9" means \(\dfrac{dT}{dt}=-3.9\) when \(T=85\): \(-3.9=k(65)\).`,
    ], r`\(k=-0.06\), so \(\dfrac{dT}{dt}=-0.06(T-20)\).`),
    ex("exam", "A product model", r`In a town of 600 people, a rumour spreads at a rate proportional to the product of the number \(y\) who have heard it and the number who have not. Write a differential equation for \(y\).`, [
      r`The number who have not heard it is \(600-y\).`,
      r`"Proportional to the product" means \(k\) times \(y(600-y)\).`,
    ], r`\(\dfrac{dy}{dt}=ky(600-y)\). The rate is small when few have heard (\(y\) small) and again when almost all have (\(600-y\) small).`),
    ex("stretch", "A model that simplifies", r`A spherical raindrop evaporates so that its volume decreases at a rate proportional to its surface area. Show that its radius decreases at a constant rate.`, [
      r`\(\dfrac{dV}{dt}=-kS=-k\cdot4\pi r^2\), with \(k\gt0\).`,
      r`Since \(V=\tfrac43\pi r^3\), the chain rule gives \(\dfrac{dV}{dt}=4\pi r^2\dfrac{dr}{dt}\).`,
      r`Equate: \(4\pi r^2\dfrac{dr}{dt}=-4\pi r^2k\).`,
    ], r`\(\dfrac{dr}{dt}=-k\): the radius shrinks at a constant rate.`),

    sec("Common errors"),
    mistake("writing an equation for the quantity instead of its rate", r`<p>"\(P\) is proportional to \(t\)" is \(P=kt\). "The <em>rate of change</em> of \(P\) is proportional to \(P\)" is \(\dfrac{dP}{dt}=kP\). The word "rate" is what puts a derivative on the left.</p>`),
    mistake("leaving out the constant", r`<p>"Proportional to" always introduces a \(k\). \(\dfrac{dP}{dt}=P\) says something much more specific.</p>`),
    mistake("the wrong sign for a decreasing quantity", r`<p>In the cooling example \(T-20\gt0\) and the temperature is falling, so \(k\) must be negative. Substituting \(+3.9\) for the rate gives \(k=+0.06\) and a cup that heats up.</p>`),
    mistake("\"inversely proportional\" written as a product", r`<p>Inversely proportional to \(y\) is \(\dfrac ky\), not \(ky\) and not \(-ky\).</p>`),

    sec("Write it so it scores"),
    justify(
      r`The rate at which a tree's height \(H\) (metres) increases with respect to time \(t\) (years) is proportional to the difference between 40 and \(H\). When \(H=10\), the tree is growing at 1.5 metres per year. Write a differential equation that models this situation.`,
      r`\(\dfrac{dH}{dt}=k(40-H)\). Using \(\dfrac{dH}{dt}=1.5\) when \(H=10\): \(1.5=k(30)\), so \(k=0.05\) and \(\dfrac{dH}{dt}=0.05(40-H)\).`,
      r`The general form is written first (one point), then the given condition is used to find \(k\) (the next). Showing both stages protects the first point even if the arithmetic fails.`,
    ),
    exam(r`<p>A modelling part is usually the opening of a longer differential-equation question. You will not be asked to solve a product model such as \(ky(N-y)\) in this course, but you may be asked what it says: when is the rate greatest, what happens as \(y\) approaches \(N\).</p>`),

    sec("Practice"),
    pq(r`Write a differential equation: the rate of change of \(y\) with respect to \(t\) is proportional to \(y^3\).`, r`\(\dfrac{dy}{dt}=ky^3\).`, "core"),
    pq(r`Write a differential equation: the rate at which a savings balance \(B\) grows is proportional to the balance.`, r`\(\dfrac{dB}{dt}=kB\), with \(k\gt0\).`, "core"),
    pq(r`A quantity satisfies \(\dfrac{dy}{dt}=ky\), and \(\dfrac{dy}{dt}=6\) when \(y=4\). Find \(k\).`, r`\(6=4k\), so \(k=1.5\).`, "exam"),
    pq(r`A tank holds \(A\) grams of salt. Salt enters at 5 grams per minute and leaves at a rate equal to 10% of the amount present per minute. Write a differential equation for \(A\).`, r`\(\dfrac{dA}{dt}=5-0.1A\).`, "exam"),
    pq(r`For the rumour model \(\dfrac{dy}{dt}=ky(600-y)\) with \(k\gt0\), for what value of \(y\) is the rumour spreading fastest?`, r`\(y(600-y)\) is a downward parabola in \(y\) with its maximum at \(y=300\): when half the town has heard.`, "stretch"),
    pq(r`The rate at which a snowball's volume decreases is proportional to its surface area. If its radius falls from 10 cm to 8 cm in 4 minutes, how long until it has melted completely?`, r`By the raindrop example the radius falls at a constant rate, here 0.5 cm per minute. From 10 cm that takes 20 minutes in total, so 16 more minutes.`, "stretch"),

    sec("Summary"),
    key([
      ["Rate", r`The word that puts \(\tfrac{dy}{dt}\) on the left.`],
      ["Proportional to", r`Multiply by a constant \(k\).`],
      ["Inversely", r`Divide: \(\dfrac kx\).`],
      ["Find k", r`Substitute a known rate and a known value.`],
    ]),
  ],
});

// ───────────────────────── 7.2 ─────────────────────────
u7["7.2"] = lesson({
  code: "7.2", unit: 7, official: "7.2", calc: "No calculator",
  title: "Checking a Proposed Solution",
  parts: () => [
    lede(r`You may not yet know how to solve a differential equation, but you can always tell whether a given function <em>is</em> a solution: differentiate it and see whether the equation holds. This is no more than substitution, and it is the idea behind several exam questions that look harder than they are, including "for what value of the constant is this a solution?"`),
    goals([
      r`Verify that a function satisfies a differential equation.`,
      r`Distinguish a general solution from a particular solution.`,
      r`Find the constants for which a family of functions solves an equation.`,
      r`Identify constant (equilibrium) solutions.`,
    ]),

    sec("Verification"),
    p(r`To check that \(y=f(x)\) solves a differential equation:`),
    `<ol><li>Compute the derivatives of \(f\) that appear in the equation.</li><li>Substitute \(f\) and its derivatives into <strong>both sides</strong> separately.</li><li>Show that the two sides are the same expression for all \(x\).</li></ol>`,

    sec("General and particular solutions"),
    def("General and particular solutions", r`<p>A <strong>general solution</strong> contains an arbitrary constant and represents a whole family of functions. A <strong>particular solution</strong> is the single member of that family picked out by an <strong>initial condition</strong> such as \(y(0)=5\).</p>`),
    p(r`\(y=Ce^{3x}\) is the general solution of \(\dfrac{dy}{dx}=3y\). The condition \(y(0)=5\) gives \(C=5\), so \(y=5e^{3x}\) is the particular solution through \((0,5)\).`),

    sec("Constant solutions"),
    p(r`A constant function \(y=c\) has derivative zero. So it is a solution exactly when substituting \(y=c\) makes the right-hand side zero. For \(\dfrac{dy}{dx}=y(4-y)\) the constant solutions are \(y=0\) and \(y=4\). These <strong>equilibrium solutions</strong> appear as horizontal lines among the solution curves.`),

    sec("Worked examples"),
    ex("core", "A direct check", r`Verify that \(y=Ce^{3x}\) is a solution of \(\dfrac{dy}{dx}=3y\) for every constant \(C\).`, [
      r`Left side: \(\dfrac{dy}{dx}=3Ce^{3x}\).`,
      r`Right side: \(3y=3Ce^{3x}\).`,
    ], r`The two sides are equal for all \(x\), so \(y=Ce^{3x}\) is a solution.`),
    ex("exam", "An equation with x and y", r`Show that \(y=x^2+\dfrac1x\) is a solution of \(x\dfrac{dy}{dx}+y=3x^2\) for \(x\gt0\).`, [
      r`\(\dfrac{dy}{dx}=2x-\dfrac{1}{x^2}\).`,
      r`Left side: \(x\left(2x-\dfrac{1}{x^2}\right)+x^2+\dfrac1x=2x^2-\dfrac1x+x^2+\dfrac1x\).`,
    ], r`This equals \(3x^2\), the right side.`),
    ex("exam", "Finding the constant", r`For what values of \(k\) is \(y=e^{kx}\) a solution of \(y''-5y'+6y=0\)?`, [
      r`\(y'=ke^{kx}\) and \(y''=k^2e^{kx}\).`,
      r`Substitute: \(e^{kx}\left(k^2-5k+6\right)=0\).`,
      r`\(e^{kx}\) is never zero, so \(k^2-5k+6=(k-2)(k-3)=0\).`,
    ], r`\(k=2\) or \(k=3\).`),
    ex("stretch", "A power solution", r`For what values of \(m\) is \(y=x^m\) a solution of \(x^2y''-2y=0\) for \(x\gt0\)?`, [
      r`\(y''=m(m-1)x^{m-2}\), so \(x^2y''=m(m-1)x^m\).`,
      r`Substitute: \(x^m\big[m(m-1)-2\big]=0\).`,
      r`\(m^2-m-2=(m-2)(m+1)=0\).`,
    ], r`\(m=2\) or \(m=-1\).`),

    sec("Common errors"),
    mistake("checking at one point", r`<p>A solution must satisfy the equation for <em>all</em> \(x\) in an interval. \(y=x^2\) agrees with \(\dfrac{dy}{dx}=2y\) at \(x=0\) and \(x=1\), but \(2x\neq2x^2\) in general, so it is not a solution.</p>`),
    mistake("substituting into one side only", r`<p>Compute the left side and the right side separately and then compare. Starting from the equation and manipulating both sides together assumes what you are trying to show.</p>`),
    mistake("dividing away a solution", r`<p>In the third example, cancelling \(e^{kx}\) is safe because it is never zero. Cancelling a factor that <em>can</em> be zero discards solutions.</p>`),

    sec("Write it so it scores"),
    justify(
      r`Show that \(y=\sqrt{x^2+C}\) satisfies \(y\dfrac{dy}{dx}=x\).`,
      r`\(\dfrac{dy}{dx}=\dfrac{2x}{2\sqrt{x^2+C}}=\dfrac{x}{\sqrt{x^2+C}}\). Then \(y\dfrac{dy}{dx}=\sqrt{x^2+C}\cdot\dfrac{x}{\sqrt{x^2+C}}=x\).`,
      r`The derivative is found, substituted into the left side, and simplified to the right side. No steps are left for the reader to fill in.`,
    ),
    exam(r`<p>In multiple choice, "which of the following is a solution of…" is answered by differentiating each option, not by solving the equation. Start with the option that looks simplest to differentiate.</p>`),

    sec("Practice"),
    pq(r`Verify that \(y=\sin(2x)\) is a solution of \(y''+4y=0\).`, r`\(y''=-4\sin(2x)\), so \(y''+4y=-4\sin(2x)+4\sin(2x)=0\).`, "core"),
    pq(r`The general solution of \(\dfrac{dy}{dx}=3y\) is \(y=Ce^{3x}\). Find the particular solution with \(y(0)=5\).`, r`\(C=5\): \(y=5e^{3x}\).`, "core"),
    pq(r`Is \(y=x^2\) a solution of \(\dfrac{dy}{dx}=\dfrac{2y}{x}\) for \(x\gt0\)?`, r`Left: \(2x\). Right: \(\dfrac{2x^2}{x}=2x\). Yes.`, "exam"),
    pq(r`Find the constant solutions of \(\dfrac{dy}{dt}=y^2-9\).`, r`\(y^2-9=0\): \(y=3\) and \(y=-3\).`, "exam"),
    pq(r`For what value of \(k\) is \(y=e^{-2x}\) a solution of \(y'+ky=0\)?`, r`\(-2e^{-2x}+ke^{-2x}=0\) gives \(k=2\).`, "exam"),
    pq(r`For what values of \(a\) is \(y=\sin(ax)\) a solution of \(y''+9y=0\)?`, r`\(-a^2\sin(ax)+9\sin(ax)=0\) for all \(x\) requires \(a^2=9\): \(a=\pm3\) (and \(a=0\), the zero solution).`, "stretch"),

    sec("Summary"),
    key([
      ["Verify", r`Differentiate, substitute into each side, compare.`],
      ["General", r`Contains an arbitrary constant.`],
      ["Particular", r`The constant fixed by an initial condition.`],
      ["Equilibrium", r`Constant solutions: set the right side to zero.`],
    ]),
  ],
});

// ───────────────────────── 7.3 ─────────────────────────
const sol = (x) => x - 1 + 2 * Math.exp(-x); // solution of y' = x − y through (0, 1)
u7["7.3"] = lesson({
  code: "7.3", unit: 7, official: "7.3", calc: "No calculator",
  title: "Drawing Slope Fields",
  parts: () => {
    const main = field((x, y) => x - y, { w: 360, h: 360 });
    main.curve(sol, -1.2, 3.5, { color: C.alt, width: 2.2 }).dot(0, 1, { color: C.alt });
    return [
      lede(r`A differential equation such as \(\dfrac{dy}{dx}=x-y\) gives no formula for \(y\). What it does give, at every point of the plane, is the <em>slope</em> a solution must have if it passes through that point. Draw a short line segment with that slope at each of many points and a picture emerges of all the solutions at once. This is a slope field. On the exam you will be asked to draw one at a handful of points and to sketch a solution through it.`),
      goals([
        r`Compute the slope given by a differential equation at a point.`,
        r`Draw a slope field at specified points.`,
        r`Sketch the solution curve through a given point.`,
        r`Recognise the patterns produced by equations depending on \(x\) only or \(y\) only.`,
      ]),

      sec("From equation to picture"),
      p(r`For \(\dfrac{dy}{dx}=x-y\), substitute the coordinates of a point to find the slope there.`),
      table(
        [r`Point \((x,y)\)`, r`\((0,0)\)`, r`\((1,0)\)`, r`\((2,0)\)`, r`\((0,1)\)`, r`\((1,1)\)`, r`\((0,2)\)`, r`\((-1,1)\)`],
        [[r`Slope \(x-y\)`, "0", "1", "2", "−1", "0", "−2", "−2"]],
      ),
      figure(main, r`The slope field of \(\dfrac{dy}{dx}=x-y\), with the solution through \((0,1)\) in red. The solution is tangent to the segment at every point it passes through.`),
      p(r`Notice the diagonal line \(y=x\), along which every segment is horizontal, since \(x-y=0\) there. Finding where the slope is zero is the quickest way to get a feel for any slope field.`),

      sec("Drawing segments well"),
      `<ul><li>Slope 0: horizontal. Slope 1: rising at 45°. Slope \(-1\): falling at 45°.</li><li>What matters is the <strong>relative</strong> steepness: a segment of slope 2 must be visibly steeper than one of slope 1, and a negative slope must lean the other way.</li><li>Centre each segment on its point, and keep them all about the same length.</li></ul>`,

      sec("Sketching a solution curve"),
      p(r`Start at the given point and move in the direction of the segment there, bending the curve continuously so that it stays parallel to the nearby segments. Continue in <strong>both</strong> directions to the edge of the field. The curve must pass through the given point, must never have a corner, and must not cross a place where the equation is undefined.`),

      sec("Two special patterns"),
      `<div class="apx-figrow">${figure(field((x) => x / 2), r`\(\dfrac{dy}{dx}=\dfrac x2\): the slope depends on \(x\) only, so every <strong>column</strong> of segments is identical.`)}${figure(field((x, y) => y / 2), r`\(\dfrac{dy}{dx}=\dfrac y2\): the slope depends on \(y\) only, so every <strong>row</strong> is identical.`)}</div>`,

      sec("Worked examples"),
      ex("core", "Slopes at points", r`For \(\dfrac{dy}{dx}=x(y-1)\), find the slope at each of \((-1,0)\), \((1,0)\), \((0,2)\), \((1,2)\) and \((2,1)\).`, [
        r`\((-1,0)\): \((-1)(-1)=1\). \((1,0)\): \((1)(-1)=-1\).`,
        r`\((0,2)\): \(0\). \((1,2)\): \((1)(1)=1\). \((2,1)\): \((2)(0)=0\).`,
      ], r`Slopes \(1,\ -1,\ 0,\ 1,\ 0\). The slope is zero everywhere on the lines \(x=0\) and \(y=1\).`),
      ex("exam", "Where the field is flat", r`For \(\dfrac{dy}{dx}=x^2-y\), describe the set of points at which the segments of the slope field are horizontal, and say where the slopes are positive.`, [
        r`Horizontal means \(x^2-y=0\): the parabola \(y=x^2\).`,
        r`\(x^2-y\gt0\) when \(y\lt x^2\).`,
      ], r`Horizontal along the parabola \(y=x^2\); positive slopes at points below the parabola, negative above it.`),
      ex("exam", "The shape of a solution", r`A solution of \(\dfrac{dy}{dx}=x-y\) passes through \((0,1)\). Describe its behaviour near that point.`, [
        r`At \((0,1)\) the slope is \(-1\), so the solution is decreasing there.`,
        r`It continues to fall until it meets the line \(y=x\), where the slope is 0.`,
        r`To the right of that, \(x-y\gt0\) and the solution rises.`,
      ], r`The curve falls from \((0,1)\), reaches a minimum where it crosses \(y=x\), then rises, as the red curve in the figure shows.`),
      ex("stretch", "Points of equal slope", r`For \(\dfrac{dy}{dx}=x-y\), at which points of the plane does the slope equal 1? What is special about the line they form?`, [
        r`\(x-y=1\) gives the line \(y=x-1\).`,
        r`That line itself has slope 1, the same as the segments along it.`,
      ], r`The slope is 1 along \(y=x-1\). Because the line's own slope matches the field everywhere on it, \(y=x-1\) is itself a solution of the differential equation.`),

      sec("Common errors"),
      mistake("all segments the same steepness", r`<p>If slopes of \(\tfrac12\), 1 and 2 are drawn alike, the sketch earns nothing. Draw the zero slopes first, then the \(\pm1\)s, then make steeper ones clearly steeper.</p>`),
      mistake("a solution curve that ignores the field", r`<p>The curve must be tangent to the segments it passes near, not merely pass through the starting point in a plausible direction.</p>`),
      mistake("stopping at the initial point", r`<p>A solution curve extends on both sides of the given point, unless the question restricts it.</p>`),
      mistake("plugging into the wrong variable", r`<p>For \(\dfrac{dy}{dx}=x(y-1)\) at \((2,1)\): \(x=2\), \(y=1\). Swapping them gives \(1(2-1)=1\) instead of 0.</p>`),

      sec("Write it so it scores"),
      justify(
        r`For \(\dfrac{dy}{dx}=x(y-1)\), a slope field is to be sketched at the nine points with \(x=-1,0,1\) and \(y=0,1,2\). State the slope at each point.`,
        r`Row \(y=2\): \(-1,\ 0,\ 1\). Row \(y=1\): \(0,\ 0,\ 0\). Row \(y=0\): \(1,\ 0,\ -1\).`,
        r`On the exam the segments are drawn on a printed grid and scored on two things: the zero slopes are horizontal, and the non-zero slopes have the correct sign and relative steepness. Computing the nine numbers first, as here, makes both automatic.`,
      ),
      exam(r`<p>A slope-field sketch is typically worth two points, and a solution curve through a given point one or two more. They are among the most reliably earned points in the free-response section, provided you compute the slopes before drawing rather than drawing by eye.</p>`),

      sec("Practice"),
      pq(r`For \(\dfrac{dy}{dx}=x+y\), find the slope at \((1,2)\), \((-1,1)\) and \((0,-3)\).`, r`\(3,\ 0,\ -3\).`, "core"),
      pq(r`For \(\dfrac{dy}{dx}=\dfrac{y}{2}\), what is true of the segments along the \(x\)-axis?`, r`They are all horizontal, since \(y=0\) gives slope 0. (So \(y=0\) is a solution.)`, "core"),
      pq(r`For \(\dfrac{dy}{dx}=2x-y\), where are the segments horizontal?`, r`Along the line \(y=2x\).`, "exam"),
      pq(r`A slope field has identical segments in every column. What can you say about the differential equation?`, r`The slope does not depend on \(y\): the equation has the form \(\dfrac{dy}{dx}=g(x)\).`, "exam"),
      pq(r`For \(\dfrac{dy}{dx}=-\dfrac xy\), find the slopes at \((1,1)\), \((1,-1)\), \((0,2)\) and \((2,0)\).`, r`\(-1,\ 1,\ 0\), and undefined at \((2,0)\) (a vertical tangent). The solution curves are circles centred at the origin.`, "exam"),
      pq(r`For \(\dfrac{dy}{dx}=2x-y\), find the straight line that is itself a solution.`, r`Try \(y=mx+b\): \(m=2x-mx-b\) for all \(x\) requires \(m=2\) and \(b=-2\). The line \(y=2x-2\).`, "stretch"),

      sec("Summary"),
      key([
        ["Segment", r`Slope from substituting the point into the equation.`],
        ["Zeros first", r`Find where the slope is 0.`],
        ["Solution curve", r`Through the point, tangent to the field, both directions.`],
        ["Patterns", r`\(x\) only: columns alike. \(y\) only: rows alike.`],
      ]),
    ];
  },
});

// ───────────────────────── 7.4 ─────────────────────────
u7["7.4"] = lesson({
  code: "7.4", unit: 7, official: "7.4", calc: "No calculator",
  title: "Reasoning from a Slope Field",
  parts: () => {
    const logi = plot({ w: 360, h: 320, x: [-3.6, 3.6], y: [-1.6, 4.6], grid: false, alt: "Slope field of dy/dx = y(3 − y)/3 with equilibrium lines" });
    logi.hline(0, { color: C.green }).hline(3, { color: C.green }).slopes((x, y) => (y * (3 - y)) / 3, { half: 8 });
    return [
      lede(r`A slope field can be read as well as drawn. Given the picture, which equation produced it? Given the equation, what will its solutions do in the long run, and where are they concave up? The exam asks all of these, and each has a short method. This lesson also introduces the technique of differentiating the differential equation itself, which unlocks concavity and the second derivative test for solutions you cannot write down.`),
      goals([
        r`Match a slope field to its differential equation.`,
        r`Identify equilibrium solutions and describe long-run behaviour.`,
        r`Find \(\dfrac{d^2y}{dx^2}\) from a differential equation.`,
        r`Determine concavity and classify critical points of a solution curve.`,
      ]),

      sec("Matching a field to an equation"),
      p(r`Work through these checks in order. Usually two of them are enough to settle the matter.`),
      `<ol><li><strong>Where is the slope zero?</strong> Along a line, a curve, the axes? Each candidate equation predicts a different zero set.</li><li><strong>Does the slope depend on \(x\) only, \(y\) only, or both?</strong> Identical columns mean \(x\) only; identical rows mean \(y\) only.</li><li><strong>What is the sign in each quadrant?</strong> Test a single convenient point such as \((1,1)\) or \((-1,1)\).</li><li><strong>Where is it steepest?</strong> Does the steepness grow with \(|x|\), with \(|y|\), or with both?</li></ol>`,

      sec("Equilibrium and long-run behaviour"),
      p(r`When the equation has the form \(\dfrac{dy}{dx}=g(y)\), the values of \(y\) that make \(g\) zero are constant solutions. They split the plane into horizontal bands, and within each band every solution is either always increasing or always decreasing.`),
      figure(logi, r`\(\dfrac{dy}{dx}=\dfrac{y(3-y)}{3}\). The equilibrium solutions \(y=0\) and \(y=3\) are shown in green. Between them every solution rises toward 3; above 3 every solution falls toward 3.`),
      p(r`Here any solution that starts with \(y\gt0\) satisfies \(\displaystyle\lim_{x\to\infty}y=3\). The equilibrium \(y=3\) attracts nearby solutions; \(y=0\) repels them.`),

      sec("The second derivative of a solution"),
      p(r`A differential equation gives \(\dfrac{dy}{dx}\) in terms of \(x\) and \(y\). Differentiate that expression with respect to \(x\), implicitly, and then substitute for \(\dfrac{dy}{dx}\) using the equation itself.`),
      disp(r`\frac{dy}{dx}=x-y\quad\Longrightarrow\quad\frac{d^2y}{dx^2}=1-\frac{dy}{dx}=1-(x-y)=1-x+y.`),
      p(r`Now the concavity of the solution through any point is known without solving anything: at \((0,1)\), \(\dfrac{d^2y}{dx^2}=2\gt0\), so that solution is concave up there.`),

      sec("Worked examples"),
      ex("core", "Matching by zeros", r`A slope field has horizontal segments at every point of the line \(y=-x\), and nowhere else. Which of \(\dfrac{dy}{dx}=x-y\), \(\dfrac{dy}{dx}=x+y\), \(\dfrac{dy}{dx}=xy\) could it belong to?`, [
        r`\(x-y=0\) on \(y=x\). \(x+y=0\) on \(y=-x\). \(xy=0\) on both axes.`,
      ], r`\(\dfrac{dy}{dx}=x+y\).`),
      ex("exam", "Long-run behaviour", r`A solution of \(\dfrac{dy}{dx}=\dfrac{y(3-y)}{3}\) has \(y(0)=1\). Find \(\displaystyle\lim_{x\to\infty}y(x)\), and state where the solution is increasing most rapidly.`, [
        r`For \(0\lt y\lt3\) the right side is positive, so the solution increases, and it cannot cross the equilibrium \(y=3\).`,
        r`The rate \(\dfrac{y(3-y)}{3}\) is a downward parabola in \(y\), greatest at \(y=\dfrac32\).`,
      ], r`\(\displaystyle\lim_{x\to\infty}y(x)=3\). The solution is increasing fastest when \(y=\dfrac32\).`),
      ex("exam", "Concavity from the equation", r`Let \(y=f(x)\) be the solution of \(\dfrac{dy}{dx}=x-y\) with \(f(0)=1\). Is the graph of \(f\) concave up or concave down at \(x=0\)?`, [
        r`\(\dfrac{d^2y}{dx^2}=1-\dfrac{dy}{dx}\).`,
        r`At \((0,1)\): \(\dfrac{dy}{dx}=-1\), so \(\dfrac{d^2y}{dx^2}=1-(-1)=2\).`,
      ], r`Concave up, because \(\dfrac{d^2y}{dx^2}=2\gt0\) at \((0,1)\).`),
      ex("stretch", "Every critical point is a minimum", r`For \(\dfrac{dy}{dx}=2x-y\), show that any solution curve with a critical point has a relative minimum there.`, [
        r`A critical point of a solution occurs where \(\dfrac{dy}{dx}=0\), that is, on the line \(y=2x\).`,
        r`\(\dfrac{d^2y}{dx^2}=2-\dfrac{dy}{dx}\). At a critical point \(\dfrac{dy}{dx}=0\), so \(\dfrac{d^2y}{dx^2}=2\).`,
      ], r`At every critical point \(\dfrac{dy}{dx}=0\) and \(\dfrac{d^2y}{dx^2}=2\gt0\), so by the second derivative test it is a relative minimum.`),

      sec("Common errors"),
      mistake(r`forgetting to substitute for \(\dfrac{dy}{dx}\)`, r`<p>\(\dfrac{d^2y}{dx^2}=1-\dfrac{dy}{dx}\) is correct but unfinished if the answer is wanted in terms of \(x\) and \(y\). Replace \(\dfrac{dy}{dx}\) by \(x-y\).</p>`),
      mistake("differentiating y as if it were a constant", r`<p>\(\dfrac{d}{dx}[x-y]\) is \(1-\dfrac{dy}{dx}\), not 1. In \(\dfrac{d}{dx}[xy]\) the product rule is needed.</p>`),
      mistake("solutions crossing an equilibrium", r`<p>A solution that starts between \(y=0\) and \(y=3\) stays between them. It approaches 3 but does not reach or cross it.</p>`),
      mistake("matching on one feature only", r`<p>\(x-y\) and \(y-x\) have the same zero line. Use a test point to fix the sign: at \((1,0)\) the first gives \(+1\) and the second \(-1\).</p>`),

      sec("Write it so it scores"),
      justify(
        r`Consider \(\dfrac{dy}{dx}=x-y\). Find \(\dfrac{d^2y}{dx^2}\) in terms of \(x\) and \(y\), and describe the region of the plane in which all solution curves are concave up.`,
        r`\(\dfrac{d^2y}{dx^2}=1-\dfrac{dy}{dx}=1-(x-y)=1-x+y\). Solution curves are concave up where \(1-x+y\gt0\), that is, where \(y\gt x-1\).`,
        r`The implicit differentiation is shown, the substitution is made, and the inequality is solved for a region. This is a standard part of a differential-equation free-response question.`,
      ),
      exam(r`<p>When a differential-equation question asks whether a tangent-line approximation is an overestimate or an underestimate (Lesson 4.6), the reason is the sign of \(\dfrac{d^2y}{dx^2}\), found exactly as above. The two parts are designed to go together.</p>`),

      sec("Practice"),
      pq(r`Find the equilibrium solutions of \(\dfrac{dy}{dt}=y^2-4y\).`, r`\(y(y-4)=0\): \(y=0\) and \(y=4\).`, "core"),
      pq(r`A slope field has identical rows, with horizontal segments along \(y=2\), positive slopes below it and negative slopes above. Suggest a differential equation.`, r`One that depends on \(y\) only and is positive for \(y\lt2\): for example \(\dfrac{dy}{dx}=2-y\).`, "core"),
      pq(r`For \(\dfrac{dy}{dx}=xy\), find \(\dfrac{d^2y}{dx^2}\) in terms of \(x\) and \(y\).`, r`\(\dfrac{d^2y}{dx^2}=y+x\dfrac{dy}{dx}=y+x(xy)=y(1+x^2)\).`, "exam"),
      pq(r`A solution of \(\dfrac{dy}{dt}=0.5(4-y)\) has \(y(0)=1\). Find \(\displaystyle\lim_{t\to\infty}y(t)\).`, r`The only equilibrium is \(y=4\); below it \(\dfrac{dy}{dt}\gt0\), so the solution rises toward 4. The limit is 4.`, "exam"),
      pq(r`For \(\dfrac{dy}{dx}=y-x^2\), a solution passes through \((1,1)\). Does it have a relative maximum, a relative minimum, or neither there?`, r`\(\dfrac{dy}{dx}=0\) at \((1,1)\). \(\dfrac{d^2y}{dx^2}=\dfrac{dy}{dx}-2x=-2\lt0\). A relative maximum.`, "exam"),
      pq(r`For \(\dfrac{dy}{dx}=\dfrac{y(3-y)}{3}\), find \(\dfrac{d^2y}{dx^2}\) and the value of \(y\) at which a solution with \(0\lt y\lt3\) has a point of inflection.`, r`\(\dfrac{d^2y}{dx^2}=\dfrac{(3-2y)}{3}\cdot\dfrac{dy}{dx}=\dfrac{(3-2y)\,y(3-y)}{9}\), which changes sign at \(y=\dfrac32\).`, "stretch"),

      sec("Summary"),
      key([
        ["Match", r`Zeros, dependence, sign at a test point, steepness.`],
        ["Equilibrium", r`Constant solutions; others cannot cross them.`],
        ["Second derivative", r`Differentiate the equation, then substitute for \(\tfrac{dy}{dx}\).`],
        ["Classify", r`\(\tfrac{dy}{dx}=0\) with the sign of \(\tfrac{d^2y}{dx^2}\).`],
      ]),
    ];
  },
});

// ───────────────────────── 7.5 ─────────────────────────
u7["7.5"] = lesson({
  code: "7.5", unit: 7, official: "7.6", calc: "No calculator",
  title: "Separation of Variables",
  parts: () => [
    lede(r`There is exactly one method for solving a differential equation in this course, and it appears on the free-response section almost every year, usually for five or six points. The idea is to gather everything involving \(y\) on one side and everything involving \(x\) on the other, then integrate both sides. The algebra is short. The scoring is unforgiving: two specific mistakes, each a single symbol, can reduce a six-point part to one or zero.`),
    goals([
      r`Recognise a separable differential equation.`,
      r`Separate the variables and integrate both sides.`,
      r`Include the constant of integration at the correct step.`,
      r`Solve the resulting equation for \(y\).`,
    ]),

    sec("Separable equations"),
    def("Separable", r`<p>A differential equation is separable if it can be written as \(\dfrac{dy}{dx}=g(x)\,h(y)\): a function of \(x\) alone <strong>times</strong> a function of \(y\) alone.</p>`),
    p(r`\(\dfrac{dy}{dx}=2xy\), \(\dfrac{dy}{dx}=\dfrac xy\) and \(\dfrac{dy}{dx}=e^{x-y}=e^x\cdot e^{-y}\) are separable. \(\dfrac{dy}{dx}=x+y\) is not: a sum cannot be pulled apart by multiplying and dividing.`),

    sec("The method"),
    `<ol><li><strong>Separate.</strong> Move every \(y\) (with \(dy\)) to one side and every \(x\) (with \(dx\)) to the other: \(\dfrac{1}{h(y)}\,dy=g(x)\,dx\).</li><li><strong>Integrate</strong> both sides.</li><li><strong>Add the constant</strong> \(+C\) on one side, <em>at this step</em>.</li><li><strong>Use the initial condition</strong> to find \(C\), if one is given (Lesson 7.6).</li><li><strong>Solve for \(y\).</strong></li></ol>`,

    sec("Why the constant cannot wait"),
    p(r`The constant belongs to the integration. If it is added only at the end, it lands in the wrong place. For \(\dfrac{dy}{dx}=2xy\):`),
    disp(r`\ln|y|=x^2+C\quad\Longrightarrow\quad y=Ae^{x^2}`),
    p(r`Leaving the constant out, writing \(\ln|y|=x^2\), and then putting \(y=e^{x^2}+C\) at the end is <strong>wrong</strong>.`),
    p(r`The first is a family of curves that are constant multiples of one another; the second would be vertical shifts, which do not satisfy the equation.`),

    sec("Worked examples"),
    ex("core", "An exponential family", r`Find the general solution of \(\dfrac{dy}{dx}=2xy\).`, [
      r`Separate: \(\dfrac1y\,dy=2x\,dx\).`,
      r`Integrate: \(\ln|y|=x^2+C\).`,
      r`Exponentiate: \(|y|=e^{x^2+C}=e^C\,e^{x^2}\).`,
    ], r`\(y=Ae^{x^2}\), where \(A\) is any constant (\(A=\pm e^C\), and \(A=0\) gives the solution \(y=0\)).`),
    ex("exam", "A quotient", r`Find the general solution of \(\dfrac{dy}{dx}=\dfrac xy\).`, [
      r`Separate: \(y\,dy=x\,dx\).`,
      r`Integrate: \(\dfrac{y^2}{2}=\dfrac{x^2}{2}+C\).`,
    ], r`\(y^2=x^2+C_1\) (with \(C_1=2C\)), so \(y=\pm\sqrt{x^2+C_1}\).`),
    ex("exam", "A negative power", r`Find the general solution of \(\dfrac{dy}{dx}=y^2\cos x\).`, [
      r`Separate: \(y^{-2}\,dy=\cos x\,dx\).`,
      r`Integrate: \(-\dfrac1y=\sin x+C\).`,
    ], r`\(y=-\dfrac{1}{\sin x+C}\). (The constant function \(y=0\) is also a solution, lost when dividing by \(y^2\).)`),
    ex("stretch", "Separating an exponential", r`Find the general solution of \(\dfrac{dy}{dx}=e^{x-y}\).`, [
      r`\(e^{x-y}=e^x\,e^{-y}\), so \(e^{y}\,dy=e^{x}\,dx\).`,
      r`Integrate: \(e^y=e^x+C\).`,
    ], r`\(y=\ln\left(e^x+C\right)\).`),

    sec("Common errors"),
    mistake("no separation", r`<p>Writing \(y=\displaystyle\int2xy\,dx=x^2y\) treats \(y\) as a constant. On the exam, a response with no separation of variables earns <strong>none</strong> of the points for that part.</p>`),
    mistake("no constant of integration", r`<p>A response that separates and integrates correctly but never writes \(+C\) typically earns at most two of the five or six points, because nothing afterwards can be right.</p>`),
    mistake("the constant added at the end", r`<p>\(\ln|y|=x^2\), therefore \(y=e^{x^2}+C\). The \(+C\) must appear on the line where the integrals are evaluated.</p>`),
    mistake("an incorrect antiderivative of 1/y²", r`<p>\(\displaystyle\int y^{-2}\,dy=-y^{-1}\), not \(\ln\left(y^2\right)\). Only \(\displaystyle\int\dfrac1y\,dy\) is a logarithm.</p>`),

    sec("Write it so it scores"),
    justify(
      r`Find the general solution of \(\dfrac{dy}{dx}=\dfrac{2x}{y^2}\).`,
      r`\(y^2\,dy=2x\,dx\). \(\displaystyle\int y^2\,dy=\int2x\,dx\) gives \(\dfrac{y^3}{3}=x^2+C\). Therefore \(y=\sqrt[3]{3x^2+C_1}\).`,
      r`Separation (one point), both antiderivatives (two points), the constant at the integration step (one point), solved for \(y\) (one point). Each line of the response corresponds to a line of the scoring guide.`,
    ),
    exam(r`<p>Before starting, confirm the equation really is a product of an \(x\)-part and a \(y\)-part. If you separate first and the page shows \(\,(\dots y\dots)\,dy=(\dots x\dots)\,dx\,\), you have already secured the point that keeps every later point alive.</p>`),

    sec("Practice"),
    pq(r`Find the general solution of \(\dfrac{dy}{dx}=3y\).`, r`\(\dfrac1y\,dy=3\,dx\), \(\ln|y|=3x+C\), \(y=Ae^{3x}\).`, "core"),
    pq(r`Find the general solution of \(\dfrac{dy}{dx}=\dfrac{x^2}{y}\).`, r`\(y\,dy=x^2\,dx\), \(\dfrac{y^2}{2}=\dfrac{x^3}{3}+C\), so \(y=\pm\sqrt{\tfrac23x^3+C_1}\).`, "core"),
    pq(r`Which of these are separable: (a) \(\dfrac{dy}{dx}=xy+y\), (b) \(\dfrac{dy}{dx}=x+y\), (c) \(\dfrac{dy}{dx}=\dfrac{\sin x}{y}\)?`, r`(a) Yes: \(y(x+1)\). (b) No. (c) Yes.`, "exam"),
    pq(r`Find the general solution of \(\dfrac{dy}{dx}=xy^2\).`, r`\(y^{-2}\,dy=x\,dx\), \(-\dfrac1y=\dfrac{x^2}{2}+C\), so \(y=-\dfrac{2}{x^2+C_1}\).`, "exam"),
    pq(r`Find the general solution of \(\dfrac{dy}{dx}=\dfrac{\cos x}{e^{y}}\).`, r`\(e^y\,dy=\cos x\,dx\), \(e^y=\sin x+C\), \(y=\ln(\sin x+C)\).`, "exam"),
    pq(r`Find the general solution of \(\dfrac{dy}{dx}=(1+y^2)\,x\).`, r`\(\dfrac{dy}{1+y^2}=x\,dx\), \(\arctan y=\dfrac{x^2}{2}+C\), so \(y=\tan\!\left(\dfrac{x^2}{2}+C\right)\).`, "stretch"),

    sec("Summary"),
    key([
      ["Separable", r`\(\dfrac{dy}{dx}=g(x)\,h(y)\): a product.`],
      ["Separate", r`\(y\)'s with \(dy\); \(x\)'s with \(dx\).`],
      [r`\(+C\)`, r`On the line where you integrate. Never later.`],
      ["Finish", r`Solve for \(y\).`],
    ]),
  ],
});

// ───────────────────────── 7.6 ─────────────────────────
u7["7.6"] = lesson({
  code: "7.6", unit: 7, official: "7.7", calc: "Both",
  title: "Particular Solutions and Their Domains",
  parts: () => [
    lede(r`A general solution is a family of curves. An initial condition, one point the solution must pass through, selects a single member of the family. Finding it takes three decisions that the previous lesson did not: <em>when</em> to use the condition, <em>which branch</em> to keep when a square root or absolute value offers two, and <em>on what interval</em> the result is actually a solution.`),
    goals([
      r`Use an initial condition to find the constant of integration.`,
      r`Choose the correct branch of a solution involving \(\pm\) or an absolute value.`,
      r`State the domain of a particular solution.`,
      r`Express a solution as an accumulation function when no antiderivative is available.`,
    ]),

    sec("Use the condition early"),
    p(r`Substitute the initial condition <strong>immediately after integrating</strong>, while the constant is still an ordinary additive \(C\). Finding \(C\) at that stage is one substitution. Waiting until after solving for \(y\) means untangling it from exponentials or roots.`),

    sec("Choosing the branch"),
    p(r`Solving for \(y\) often produces two candidates: \(y=\pm\sqrt{\dots}\), or \(|y-1|=\dots\) which could mean \(y-1=\pm\dots\). Only one passes through the initial point. Check the sign of \(y\) (or of \(y-1\), or whatever is inside the absolute value) <strong>at the initial point</strong>, and keep the branch with that sign.`),

    sec("The domain of a solution"),
    def("Domain of a particular solution", r`<p>The largest open interval that contains the initial \(x\)-value and on which the solution is defined, differentiable, and satisfies the differential equation.</p>`),
    p(r`It is a single interval. If the formula breaks down somewhere (a zero denominator, a root of a negative number, a logarithm of a non-positive number, or a value of \(y\) at which the original equation is undefined), the domain stops there, on the side containing the initial point.`),

    sec("Worked examples"),
    ex("core", "A branch to choose", r`Find the particular solution of \(\dfrac{dy}{dx}=\dfrac xy\) with \(y(0)=-3\).`, [
      r`\(y\,dy=x\,dx\), so \(\dfrac{y^2}{2}=\dfrac{x^2}{2}+C\).`,
      r`Use \((0,-3)\): \(\dfrac92=0+C\), so \(C=\dfrac92\) and \(y^2=x^2+9\).`,
      r`\(y=\pm\sqrt{x^2+9}\). At the initial point \(y=-3\lt0\): keep the negative root.`,
    ], r`\(y=-\sqrt{x^2+9}\), defined for all real \(x\).`),
    ex("exam", "A domain that stops", r`Find the particular solution of \(\dfrac{dy}{dx}=y^2\) with \(y(0)=1\), and state its domain.`, [
      r`\(y^{-2}\,dy=dx\), so \(-\dfrac1y=x+C\).`,
      r`Use \((0,1)\): \(-1=C\). Then \(-\dfrac1y=x-1\).`,
      r`\(y=\dfrac{1}{1-x}\), which is undefined at \(x=1\).`,
    ], r`\(y=\dfrac{1}{1-x}\) for \(x\lt1\). The initial point \(x=0\) lies to the left of the break, so the domain is \((-\infty,1)\).`),
    ex("exam", "An absolute value to resolve", r`Find the particular solution of \(\dfrac{dy}{dx}=(3-y)\cos x\) with \(y(0)=1\).`, [
      r`\(\dfrac{dy}{3-y}=\cos x\,dx\), so \(-\ln|3-y|=\sin x+C\).`,
      r`Use \((0,1)\): \(-\ln2=C\). Then \(\ln|3-y|=\ln2-\sin x\), so \(|3-y|=2e^{-\sin x}\).`,
      r`At the initial point \(3-y=2\gt0\), so \(3-y=2e^{-\sin x}\).`,
    ], r`\(y=3-2e^{-\sin x}\), for all real \(x\).`),
    ex("stretch", "When no antiderivative exists", r`Find the particular solution of \(\dfrac{dy}{dx}=e^{-x^2}\) with \(y(1)=2\), and find \(y(2)\).`, [
      r`The right side depends on \(x\) only, but \(e^{-x^2}\) has no elementary antiderivative.`,
      r`Use the net change form: \(y(x)=y(1)+\displaystyle\int_1^xe^{-t^2}\,dt\).`,
      r`\(y(2)=2+\displaystyle\int_1^2e^{-t^2}\,dt=2+0.135\).`,
    ], r`\(y(x)=2+\displaystyle\int_1^xe^{-t^2}\,dt\), and \(y(2)=2.135\).`),

    sec("Common errors"),
    mistake(r`keeping \(\pm\) in the final answer`, r`<p>A particular solution is one function. \(y=\pm\sqrt{x^2+9}\) is two. The initial condition decides which.</p>`),
    mistake("dropping the absolute value without checking", r`<p>From \(|3-y|=2e^{-\sin x}\), writing \(3-y=2e^{-\sin x}\) is right here only because \(3-y\) is positive at the initial point. With \(y(0)=5\) it would be \(3-y=-2e^{-\sin x}\).</p>`),
    mistake("a domain in two pieces", r`<p>\(y=\dfrac{1}{1-x}\) is defined for \(x\gt1\) as well, but that piece is a different solution. The domain of the solution through \((0,1)\) is the single interval \(x\lt1\).</p>`),
    mistake("using the condition after a wrong rearrangement", r`<p>Find \(C\) straight after integrating. Each extra algebraic step before using the condition is another chance to place \(C\) wrongly.</p>`),

    sec("Write it so it scores"),
    justify(
      r`Find the particular solution \(y=f(x)\) of \(\dfrac{dy}{dx}=2x(y-1)\) with \(f(0)=3\).`,
      r`\(\dfrac{dy}{y-1}=2x\,dx\). \(\ln|y-1|=x^2+C\). Using \((0,3)\): \(\ln2=C\). So \(|y-1|=e^{x^2+\ln2}=2e^{x^2}\). Since \(y-1=2\gt0\) at the initial point, \(y-1=2e^{x^2}\) and \(y=1+2e^{x^2}\).`,
      r`Separation; antiderivatives; the constant with the initial condition used at once; and the absolute value resolved with a stated reason. This is the full five-point structure.`,
    ),
    exam(r`<p>The usual scoring is: 1 point for separation, 2 for the antiderivatives, 1 for the constant of integration together with use of the initial condition, 1 for solving for \(y\). With no separation the maximum is 0 of 5; with no constant, 2 of 5.</p>`),

    sec("Practice"),
    pq(r`Find the particular solution of \(\dfrac{dy}{dx}=3y\) with \(y(0)=5\).`, r`\(\ln|y|=3x+C\), \(C=\ln5\), so \(y=5e^{3x}\).`, "core"),
    pq(r`Find the particular solution of \(\dfrac{dy}{dx}=\dfrac xy\) with \(y(4)=5\).`, r`\(y^2=x^2+C_1\): \(25=16+C_1\), so \(C_1=9\) and \(y=\sqrt{x^2+9}\) (positive branch).`, "core"),
    pq(r`Find the particular solution of \(\dfrac{dy}{dx}=xy^2\) with \(y(0)=2\), and state its domain.`, r`\(-\dfrac1y=\dfrac{x^2}{2}+C\), \(C=-\dfrac12\), so \(y=\dfrac{2}{1-x^2}\). It breaks at \(x=\pm1\); the domain containing 0 is \(-1\lt x\lt1\).`, "exam"),
    pq(r`Find the particular solution of \(\dfrac{dy}{dx}=\dfrac{y}{x}\) with \(y(1)=-2\), and state its domain.`, r`\(\ln|y|=\ln|x|+C\), so \(|y|=A|x|\) with \(A=2\). The branch through \((1,-2)\) is \(y=-2x\), for \(x\gt0\) (the equation is undefined at \(x=0\)).`, "exam"),
    pq(r`Find the particular solution of \(\dfrac{dy}{dx}=1+y^2\) with \(y(0)=0\), and state its domain.`, r`\(\arctan y=x+C\), \(C=0\), so \(y=\tan x\) on \(\left(-\dfrac\pi2,\dfrac\pi2\right)\).`, "stretch"),
    pq(r`(Calculator) A function satisfies \(\dfrac{dy}{dx}=\sqrt{1+x^3}\) and \(y(1)=3\). Find \(y(2)\).`, r`\(y(2)=3+\displaystyle\int_1^2\sqrt{1+x^3}\,dx=3+2.130=5.130\).`, "stretch"),

    sec("Summary"),
    key([
      ["Find C", r`Immediately after integrating.`],
      ["Branch", r`Match the sign at the initial point.`],
      ["Domain", r`One interval, containing the initial \(x\), up to the nearest break.`],
      ["No antiderivative", r`\(y(x)=y(a)+\displaystyle\int_a^xf(t)\,dt\).`],
    ]),
  ],
});

// ───────────────────────── 7.7 ─────────────────────────
u7["7.7"] = lesson({
  code: "7.7", unit: 7, official: "7.8", calc: "Both",
  title: "Exponential Growth and Decay",
  parts: () => {
    const g = plot({ w: 420, h: 290, x: [-2, 42], y: [-10, 95], stepX: 5, stepY: 10, tickEvery: 2, xName: "t", yName: "T", alt: "Cooling curve approaching room temperature" });
    g.hline(20, { color: C.green }).curve((t) => 20 + 65 * Math.exp(-0.06 * t), 0, 41).dot(0, 85).label(24, 26, "room: 20 °C", { color: C.green, plain: true, size: 12 });
    return [
      lede(r`The simplest differential equation of all says that a quantity changes at a rate proportional to itself. It describes money earning interest, bacteria dividing, radioactive atoms decaying and, with a small shift, a hot drink cooling. Its solution is always an exponential function, and the exam expects you to write that solution down at sight and use it.`),
      goals([
        r`Solve \(\dfrac{dy}{dt}=ky\) and state its solution from memory.`,
        r`Find the constant \(k\) from two data points.`,
        r`Work with doubling time and half-life.`,
        r`Solve models of the form \(\dfrac{dy}{dt}=k(y-M)\).`,
      ]),

      sec("The model and its solution"),
      thm("Exponential growth and decay", r`<p>If \(\dfrac{dy}{dt}=ky\) and \(y(0)=y_0\), then</p>${disp(r`y=y_0\,e^{kt}.`)}<p>If \(k\gt0\) the quantity grows; if \(k\lt0\) it decays.</p>`),
      p(r`Derivation, by separation of variables: \(\dfrac1y\,dy=k\,dt\), so \(\ln|y|=kt+C\) and \(y=Ae^{kt}\); setting \(t=0\) gives \(A=y_0\). You may quote the result, but be ready to derive it if a question says "use separation of variables".`),

      sec("Finding k"),
      p(r`Two measurements determine \(k\). If \(y(t_1)=y_1\) and \(y(t_2)=y_2\), dividing the two equations removes \(y_0\):`),
      disp(r`\frac{y_2}{y_1}=e^{k(t_2-t_1)}\qquad\Longrightarrow\qquad k=\frac{\ln\left(y_2/y_1\right)}{t_2-t_1}.`),

      sec("Doubling time and half-life"),
      p(r`The time for a growing quantity to double satisfies \(e^{kT}=2\), and the time for a decaying one to halve satisfies \(e^{kT}=\tfrac12\). Either way`),
      disp(r`T=\frac{\ln2}{|k|}.`),
      p(r`This time is the same wherever you start: exponential change doubles (or halves) in equal time intervals for ever.`),

      sec("Shifted exponentials"),
      p(r`In \(\dfrac{dT}{dt}=k(T-M)\) the quantity that changes proportionally is the <em>difference</em> \(T-M\). So \(T-M=(T_0-M)e^{kt}\), that is, \(T=M+(T_0-M)e^{kt}\). With \(k\lt0\) the difference decays and \(T\) approaches \(M\).`),
      figure(g, r`\(\dfrac{dT}{dt}=-0.06(T-20)\), \(T(0)=85\): the solution \(T=20+65e^{-0.06t}\) decays toward room temperature.`),

      sec("Worked examples"),
      ex("core", "Stating the solution", r`A population satisfies \(\dfrac{dP}{dt}=0.04P\) with \(P(0)=500\) (\(t\) in years). Find \(P(10)\).`, [
        r`\(P(t)=500e^{0.04t}\).`,
        r`\(P(10)=500e^{0.4}\).`,
      ], r`\(P(10)\approx745.9\), about 746.`),
      ex("exam", "k from two measurements", r`A colony of bacteria grows at a rate proportional to its size. It has 200 cells at \(t=0\) and 800 cells at \(t=4\) hours. How many cells are there at \(t=6\)?`, [
        r`\(800=200e^{4k}\), so \(e^{4k}=4\) and \(k=\dfrac{\ln4}{4}\).`,
        r`\(P(6)=200e^{6k}=200\left(e^{4k}\right)^{3/2}=200\cdot4^{3/2}\).`,
      ], r`\(200\cdot8=1600\) cells.`),
      ex("exam", "Half-life", r`A radioactive substance has a half-life of 12 years. What fraction of a sample remains after 30 years, and what is the decay constant \(k\)?`, [
        r`After 30 years, \(\dfrac{30}{12}=2.5\) half-lives have passed: \(\left(\tfrac12\right)^{2.5}\).`,
        r`\(k=-\dfrac{\ln2}{12}\).`,
      ], r`\(\left(\tfrac12\right)^{2.5}\approx0.177\), about 17.7% remains. \(k\approx-0.0578\) per year.`),
      ex("stretch", "Cooling to a given temperature", r`Coffee cools according to \(\dfrac{dT}{dt}=-0.06(T-20)\) with \(T(0)=85\) (°C, minutes). When does it reach 50 °C?`, [
        r`\(T=20+65e^{-0.06t}\).`,
        r`\(50=20+65e^{-0.06t}\) gives \(e^{-0.06t}=\dfrac{30}{65}\).`,
        r`\(t=\dfrac{\ln(65/30)}{0.06}\).`,
      ], r`\(t\approx12.886\) minutes.`),

      sec("Common errors"),
      mistake("a linear model for a proportional rate", r`<p>"Grows at a rate proportional to its size" is exponential, not "adds the same amount each hour". From 200 to 800 in 4 hours does not mean 150 per hour.</p>`),
      mistake("rounding k too early", r`<p>Using \(k=0.35\) instead of \(\dfrac{\ln4}{4}\) gives 1633 cells instead of 1600. Keep \(k\) exact, or store it in the calculator.</p>`),
      mistake(r`applying \(y_0e^{kt}\) to a shifted model`, r`<p>\(\dfrac{dT}{dt}=k(T-20)\) does not have solution \(T=85e^{kt}\). It is the difference \(T-20\) that is exponential.</p>`),
      mistake("the sign of k in decay", r`<p>For decay, \(k\lt0\). A half-life of 12 years gives \(k=-\dfrac{\ln2}{12}\), not \(+\dfrac{\ln2}{12}\).</p>`),

      sec("Write it so it scores"),
      justify(
        r`The rate of change of the mass \(M\) of a substance is proportional to \(M\). Initially there are 80 grams, and after 5 days there are 60 grams. Write an expression for \(M(t)\).`,
        r`\(\dfrac{dM}{dt}=kM\), so \(M=80e^{kt}\). Using \(M(5)=60\): \(60=80e^{5k}\), so \(k=\dfrac15\ln\dfrac34\). Therefore \(M(t)=80e^{\frac t5\ln\frac34}=80\left(\dfrac34\right)^{t/5}\).`,
        r`The differential equation, the general form with the initial value, the second condition used to find \(k\) exactly, and the final expression. Either final form is accepted.`,
      ),
      exam(r`<p>If a question simply states \(\dfrac{dy}{dt}=ky\), you may write \(y=y_0e^{kt}\) directly. If it gives a different separable equation, or says "use separation of variables", the full method of Lessons 7.5 and 7.6 must be shown.</p>`),

      sec("Practice"),
      pq(r`Solve \(\dfrac{dy}{dt}=-0.5y\) with \(y(0)=12\).`, r`\(y=12e^{-0.5t}\).`, "core"),
      pq(r`A quantity grows according to \(\dfrac{dy}{dt}=0.1y\). What is its doubling time?`, r`\(\dfrac{\ln2}{0.1}\approx6.931\).`, "core"),
      pq(r`An investment grows at a rate proportional to its value, from 1000 dollars to 1500 dollars in 6 years. What is it worth after 12 years?`, r`It is multiplied by 1.5 every 6 years: \(1000(1.5)^2=2250\) dollars.`, "exam"),
      pq(r`A substance decays from 80 g to 60 g in 5 days. What is its half-life?`, r`\(k=\dfrac15\ln\dfrac34\approx-0.05754\). Half-life \(\dfrac{\ln2}{0.05754}\approx12.047\) days.`, "exam"),
      pq(r`A quantity satisfies \(\dfrac{dy}{dt}=ky\) with \(y(2)=3\) and \(y(5)=24\). Find \(y(0)\).`, r`\(e^{3k}=8\), so \(e^{k}=2\). Then \(y(0)=\dfrac{3}{e^{2k}}=\dfrac34\).`, "exam"),
      pq(r`A cake at 180 °C is placed in a 20 °C room and cools according to \(\dfrac{dT}{dt}=k(T-20)\). After 10 minutes it is at 100 °C. Find its temperature after 20 minutes.`, r`The difference \(T-20\) falls from 160 to 80 in 10 minutes, a factor of \(\tfrac12\). After another 10 minutes it is 40, so \(T=60\) °C.`, "stretch"),

      sec("Summary"),
      key([
        [r`\(\dfrac{dy}{dt}=ky\)`, r`\(y=y_0e^{kt}\).`],
        ["Find k", r`\(k=\dfrac{\ln(y_2/y_1)}{t_2-t_1}\).`],
        ["Doubling or halving", r`\(T=\dfrac{\ln2}{|k|}\).`],
        ["Shifted", r`\(y-M=(y_0-M)e^{kt}\).`],
      ]),
    ];
  },
});
