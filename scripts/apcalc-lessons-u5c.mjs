// AP Calculus AB exam prep — Unit 5 (Analysing Functions), lessons 5.9–5.11.
// Original wording, examples, numbers and figures throughout (see u1a for notes).
import { r, lesson, lede, goals, sec, p, disp, def, thm, exam, mistake, justify, ex, pq, key, table } from "./apcalc/kit.mjs";
import { plot, figure, C } from "./apcalc/fig.mjs";
import { fprimeFigure } from "./apcalc-lessons-u5a.mjs";

export const u5c = {};

// ───────────────────────── 5.9 ─────────────────────────
u5c["5.9"] = lesson({
  code: "5.9", unit: 5, official: "5.9", calc: "No calculator",
  title: "Moving Between the Graphs of f, f′ and f″",
  parts: () => [
    lede(r`Here is the question the exam asks in some form every single year. A graph is printed, and it is labelled \(f'\). Then every part asks about \(f\). The whole difficulty is one of discipline: you are looking at one function and must draw conclusions about another. Students who keep the two straight find these among the easiest points on the paper; students who do not lose all of them.`),
    goals([
      r`Translate each feature of the graph of \(f'\) into a property of \(f\).`,
      r`Translate each feature of the graph of \(f\) into signs of \(f'\) and \(f''\).`,
      r`Match graphs of a function and its derivatives.`,
      r`Justify every conclusion by reference to the graph that was given.`,
    ]),

    sec("The dictionary"),
    p(r`When the graph in front of you is \(f'\):`),
    table(
      [r`On the graph of \(f'\)`, r`Property of \(f\)`],
      [
        ["above the \\(x\\)-axis", "increasing"],
        ["below the \\(x\\)-axis", "decreasing"],
        ["crosses the axis from above to below", "relative maximum"],
        ["crosses the axis from below to above", "relative minimum"],
        ["touches the axis without crossing", "horizontal tangent, no extremum"],
        ["rising", "concave up"],
        ["falling", "concave down"],
        ["has a peak or a valley", "point of inflection"],
      ],
    ),
    p(r`The top five rows read the <strong>height</strong> of the \(f'\) graph (its sign). The bottom three read its <strong>direction</strong>. Nothing on this table refers to the height of \(f\) itself: a graph of \(f'\) cannot tell you any value of \(f\) unless one is given separately.`),

    sec("One graph, fully read"),
    figure(fprimeFigure(), r`The graph of \(f'\) on \([-4,6]\), made of line segments through \((-4,-2)\), \((-2,2)\), \((0,0)\), \((1,2)\), \((3,-2)\) and \((6,4)\).`),
    table(
      [r`Property of \(f\)`, "Where", "Reason, stated from the graph"],
      [
        ["increasing", r`\((-3,2)\) and \((4,6)\)`, r`\(f'\gt0\) there (apart from the single zero at \(x=0\))`],
        ["decreasing", r`\((-4,-3)\) and \((2,4)\)`, r`\(f'\lt0\) there`],
        ["relative maximum", r`\(x=2\)`, r`\(f'\) changes from positive to negative`],
        ["relative minimum", r`\(x=-3\) and \(x=4\)`, r`\(f'\) changes from negative to positive`],
        ["concave up", r`\((-4,-2)\), \((0,1)\), \((3,6)\)`, r`\(f'\) is increasing there`],
        ["concave down", r`\((-2,0)\), \((1,3)\)`, r`\(f'\) is decreasing there`],
        ["points of inflection", r`\(x=-2,\ 0,\ 1,\ 3\)`, r`\(f'\) changes between increasing and decreasing`],
      ],
    ),
    p(r`Because this \(f'\) is made of line segments, \(f''\) is simply the slope of each segment: \(f''(-3)=2\), \(f''(2)=-2\), \(f''(5)=2\). At the corners \(f''\) does not exist.`),

    sec("Reading the other way"),
    p(r`Given the graph of \(f\) and asked about derivatives, reverse the dictionary. Where \(f\) rises, \(f'\gt0\). At a smooth peak or valley, \(f'=0\). Where \(f\) is concave up, \(f''\gt0\) and \(f'\) is increasing. Where \(f\) is steepest, \(|f'|\) is greatest, and that is where \(f''\) changes sign.`),

    sec("Worked examples"),
    ex("core", "A relative maximum from f′", r`Using the graph of \(f'\) above, at what value of \(x\) does \(f\) have a relative maximum? Justify.`, [
      r`A relative maximum of \(f\) occurs where \(f'\) changes from positive to negative.`,
      r`The graph of \(f'\) crosses the axis from above to below only at \(x=2\).`,
    ], r`\(x=2\), because \(f'\) changes from positive to negative there.`),
    ex("exam", "Concave down and increasing", r`Using the graph of \(f'\) above, on which intervals is the graph of \(f\) both increasing and concave down?`, [
      r`Increasing: \(f'\gt0\), so the graph of \(f'\) is above the axis.`,
      r`Concave down: \(f'\) decreasing, so the graph of \(f'\) is falling.`,
      r`Above the axis <em>and</em> falling: \((-2,0)\) and \((1,2)\).`,
    ], r`\((-2,0)\) and \((1,2)\).`),
    ex("exam", "Comparing values of f", r`Using the graph of \(f'\) above, which is greater, \(f(2)\) or \(f(4)\)? Explain.`, [
      r`On \((2,4)\) the graph of \(f'\) is below the axis, so \(f'\lt0\).`,
      r`Therefore \(f\) is decreasing on \([2,4]\).`,
    ], r`\(f(2)\gt f(4)\), because \(f\) is decreasing on \([2,4]\). (The actual values are unknown, but their order is determined.)`),
    ex("stretch", "Which graph is which?", r`Three graphs \(A\), \(B\) and \(C\) show a function, its derivative and its second derivative, in some order. Graph \(A\) has zeros at \(x=-1\) and \(x=3\). Graph \(B\) has relative extrema at \(x=-1\) and \(x=3\) and is steepest at \(x=1\). Graph \(C\) is a straight line with a zero at \(x=1\). Identify them.`, [
      r`\(B\) has horizontal tangents at \(-1\) and \(3\), exactly where \(A\) is zero. So \(A=B'\).`,
      r`\(A\), a curve with zeros at \(-1\) and \(3\), has its turning point midway, at \(x=1\), which is where \(C\) is zero. So \(C=A'\).`,
      r`Check: \(B\) is steepest where its second derivative \(C\) changes sign, at \(x=1\). Consistent.`,
    ], r`\(B=f\), \(A=f'\), \(C=f''\). (This is the unit's running example: the cubic, the quadratic \(3(x+1)(x-3)\), and the line \(6(x-1)\).)`),

    sec("Common errors"),
    mistake("answering as if the graph were f", r`<p>Seeing a peak on the page at \(x=-2\) and writing "\(f\) has a relative maximum at \(x=-2\)". The peak belongs to \(f'\); for \(f\) it is a point of inflection.</p>`),
    mistake("justifying from a graph you were not given", r`<p>If the graph of \(f'\) is given, the reason must be about \(f'\): "\(f'\) changes from positive to negative". Writing "\(f\) changes from increasing to decreasing" describes the conclusion, not the evidence.</p>`),
    mistake("reading a value of f from a graph of f′", r`<p>The height of the \(f'\) graph at \(x=2\) is \(f'(2)\), not \(f(2)\).</p>`),
    mistake("mixing up \"f′ is positive\" and \"f′ is increasing\"", r`<p>Positive \(f'\) makes \(f\) increasing. Increasing \(f'\) makes \(f\) concave up. They are different properties of the same graph.</p>`),

    sec("Write it so it scores"),
    justify(
      r`The graph of \(f'\) is shown above. Find all values of \(x\) in \((-4,6)\) at which the graph of \(f\) has a point of inflection. Give a reason for your answer.`,
      r`The graph of \(f\) has points of inflection at \(x=-2\), \(x=0\), \(x=1\) and \(x=3\), because \(f'\) changes from increasing to decreasing, or from decreasing to increasing, at each of these values.`,
      r`All four values are listed, and the reason is phrased in terms of the given graph, \(f'\). "Because \(f''\) changes sign" is also correct, but since \(f''\) is not what was drawn, describing the behaviour of \(f'\) is the safer statement.`,
    ),
    exam(r`<p>Before writing anything on a graph question, <strong>circle the label on the graph</strong>: is it \(f\), \(f'\) or \(f''\)? Then, for every part, say to yourself which function the question is about. This ten-second habit prevents the most expensive error in the unit.</p>`),

    sec("Practice"),
    p(r`All questions refer to the graph of \(f'\) in this lesson.`),
    pq(r`On which intervals is \(f\) decreasing?`, r`Where \(f'\lt0\): \((-4,-3)\) and \((2,4)\).`, "core"),
    pq(r`At which values of \(x\) does \(f\) have a relative minimum?`, r`\(x=-3\) and \(x=4\), where \(f'\) changes from negative to positive.`, "core"),
    pq(r`Does \(f\) have a relative extremum at \(x=0\)?`, r`No. \(f'(0)=0\), but \(f'\) is positive on both sides and does not change sign.`, "exam"),
    pq(r`Find \(f''(2)\) and \(f''(-1)\).`, r`\(f''\) is the slope of the \(f'\) graph. On \((1,3)\) the slope is \(\dfrac{-2-2}{3-1}=-2\), so \(f''(2)=-2\). On \((-2,0)\) the slope is \(-1\), so \(f''(-1)=-1\).`, "exam"),
    pq(r`On which intervals is \(f\) decreasing and concave up?`, r`\(f'\) below the axis and rising: \((-4,-3)\) and \((3,4)\).`, "exam"),
    pq(r`Given also that \(f(-3)=5\), write an equation for the tangent line to the graph of \(f\) at \(x=-3\).`, r`\(f'(-3)=0\), so the tangent is horizontal: \(y=5\).`, "stretch"),
    pq(r`On the closed interval \([2,6]\), at which \(x\) does \(f\) attain its absolute minimum?`, r`On \([2,6]\), \(f\) decreases on \((2,4)\) and increases on \((4,6)\), so the absolute minimum is at \(x=4\).`, "stretch"),

    sec("Summary"),
    key([
      ["Height of f′", r`Sign: tells whether \(f\) is increasing or decreasing.`],
      ["Zeros of f′ with a crossing", r`Relative extrema of \(f\).`],
      ["Direction of f′", r`Tells the concavity of \(f\).`],
      ["Peaks and valleys of f′", r`Points of inflection of \(f\).`],
    ]),
  ],
});

// ───────────────────────── 5.10 ─────────────────────────
u5c["5.10"] = lesson({
  code: "5.10", unit: 5, official: "5.10–5.11", calc: "Both",
  title: "Optimisation",
  parts: () => {
    const g = plot({ w: 380, h: 300, x: [-4.5, 4.5], y: [-1, 13], stepY: 2, alt: "A rectangle inscribed under the parabola y = 12 minus x squared" });
    g.shade((x) => 8, (x) => 0, -2, 2, { color: C.gold, opacity: 0.22 }).curve((x) => 12 - x * x, -3.6, 3.6).poly([[-2, 0], [-2, 8], [2, 8], [2, 0]], { color: C.alt, width: 2 }).dot(2, 8, { color: C.alt });
    g.label(2.2, 8.4, "(x, 12 − x²)", { size: 13 });
    return [
      lede(r`A manufacturer wants the cheapest can that holds a litre. A farmer wants the largest field a length of fence can enclose. These are questions about the <em>best</em> value of a quantity, and they are answered with exactly the tools of this unit: find the critical points, then decide which is the extreme. The calculus is usually two lines. The skill is in turning the words into a function of one variable.`),
      goals([
        r`Translate a description into a function to be maximised or minimised.`,
        r`Use a constraint to reduce the function to one variable, and state its domain.`,
        r`Find the optimum and justify that it is an absolute extremum.`,
        r`Answer the question that was asked, with units.`,
      ]),

      sec("The method"),
      `<ol><li><strong>Draw and name.</strong> Sketch the situation and give letters to the quantities that vary.</li><li><strong>Objective.</strong> Write the quantity to be optimised as a formula.</li><li><strong>Constraint.</strong> Write the condition that links the variables, and use it to eliminate all but one.</li><li><strong>Domain.</strong> State the interval of values that make sense.</li><li><strong>Optimise.</strong> Differentiate, find the critical points, and <strong>justify</strong> the absolute extremum.</li><li><strong>Answer.</strong> Reread the question. Give what it asked for, with units.</li></ol>`,

      sec("Justifying the optimum"),
      p(r`Finding where the derivative is zero is not the end. The exam awards a separate point for showing that the critical point is the <em>absolute</em> maximum or minimum. Use whichever of these fits.`),
      key([
        ["Closed interval", r`The candidates test (Lesson 5.5): compare the critical value with the endpoint values.`],
        ["Sign of the first derivative", r`\(A'\gt0\) for all smaller values and \(A'\lt0\) for all larger values in the domain.`],
        ["Sign of the second derivative", r`A single critical point, with \(A''\lt0\) (or \(\gt0\)) on the <em>whole</em> domain.`],
      ]),

      sec("Worked examples"),
      ex("core", "A divided enclosure", r`A farmer has 240 m of fencing to build a rectangular pen divided into two equal parts by a fence parallel to one side. What dimensions give the largest total area?`, [
        r`Let the pen measure \(x\) by \(y\), with the dividing fence of length \(y\). Fencing: \(2x+3y=240\).`,
        r`Area \(A=xy\). From the constraint \(y=\dfrac{240-2x}{3}\), so \(A(x)=\dfrac{x(240-2x)}{3}=80x-\dfrac23x^2\), for \(0\le x\le120\).`,
        r`\(A'(x)=80-\dfrac43x=0\) at \(x=60\), giving \(y=40\).`,
        r`Candidates: \(A(0)=0\), \(A(60)=2400\), \(A(120)=0\).`,
      ], r`The pen should be 60 m by 40 m, with total area 2400 m².`),
      ex("exam", "Least material for a can", r`A closed cylindrical can must have volume \(250\pi\) cm³. Find the radius and height that minimise its surface area.`, [
        r`Volume: \(\pi r^2h=250\pi\), so \(h=\dfrac{250}{r^2}\).`,
        r`Surface area: \(S=2\pi r^2+2\pi rh=2\pi r^2+\dfrac{500\pi}{r}\), for \(r\gt0\).`,
        r`\(S'(r)=4\pi r-\dfrac{500\pi}{r^2}=0\) gives \(r^3=125\), so \(r=5\) and \(h=10\).`,
        r`\(S''(r)=4\pi+\dfrac{1000\pi}{r^3}\gt0\) for all \(r\gt0\).`,
      ], r`Radius 5 cm and height 10 cm. This is the absolute minimum because \(r=5\) is the only critical point and \(S''(r)\gt0\) for all \(r\gt0\).`),
      ex("exam", "Nearest point on a curve", r`Find the point on the curve \(y=\sqrt x\) that is closest to \((3,0)\).`, [
        r`Distance squared from \((x,\sqrt x)\) to \((3,0)\): \(D(x)=(x-3)^2+x\), for \(x\ge0\). Minimising \(D\) minimises the distance.`,
        r`\(D'(x)=2(x-3)+1=2x-5=0\) at \(x=\dfrac52\).`,
        r`\(D'(x)\lt0\) for \(0\le x\lt\tfrac52\) and \(D'(x)\gt0\) for \(x\gt\tfrac52\).`,
      ], r`The closest point is \(\left(\dfrac52,\sqrt{\dfrac52}\right)\), at distance \(\sqrt{D\!\left(\tfrac52\right)}=\sqrt{\tfrac{11}{4}}\approx1.658\).`),
      ex("stretch", "A rectangle under a parabola", r`A rectangle has its base on the \(x\)-axis and its upper corners on the parabola \(y=12-x^2\). Find the largest possible area.`, [
        r`Let the upper right corner be \((x,12-x^2)\), with \(0\le x\le\sqrt{12}\). The rectangle has width \(2x\) and height \(12-x^2\).`,
        r`\(A(x)=2x(12-x^2)=24x-2x^3\).`,
        r`\(A'(x)=24-6x^2=0\) at \(x=2\).`,
        r`Candidates: \(A(0)=0\), \(A(2)=32\), \(A\!\left(\sqrt{12}\right)=0\).`,
      ], r`The largest area is 32 square units, for the rectangle 4 wide and 8 high.`),
      figure(g, r`The optimal rectangle under \(y=12-x^2\): corner at \((2,8)\), area 32.`),

      sec("Common errors"),
      mistake("stopping at the critical point", r`<p>"\(A'(x)=0\) at \(x=60\), so the answer is 60" has not shown that 60 gives a maximum and has not answered the question (dimensions, with units).</p>`),
      mistake("differentiating with two variables still present", r`<p>\(A=xy\) cannot be optimised until the constraint has removed one variable.</p>`),
      mistake("no domain", r`<p>Without a stated domain there are no endpoints to compare and no basis for "all \(r\gt0\)". One short inequality fixes this.</p>`),
      mistake("a local justification for a global claim", r`<p>"\(S''(5)\gt0\)" shows a relative minimum at 5. To claim the absolute minimum, say that 5 is the <em>only</em> critical point and \(S''\gt0\) for <em>all</em> \(r\gt0\), or use one of the other two methods.</p>`),

      sec("Write it so it scores"),
      justify(
        r`For the can above, justify that \(r=5\) gives the minimum surface area.`,
        r`\(S'(r)=4\pi r-\dfrac{500\pi}{r^2}\) is negative for \(0\lt r\lt5\) and positive for \(r\gt5\). So \(S\) is decreasing on \((0,5)\) and increasing on \((5,\infty)\), and \(S\) has its absolute minimum at \(r=5\).`,
        r`It uses the sign of \(S'\) on the entire domain on each side of the critical point, which establishes an absolute, not merely relative, minimum.`,
      ),
      exam(r`<p>On the current exam, optimisation is more often a part of a contextual question ("at what time is the amount of water greatest?") than a geometry problem. The steps are the same: critical points of the given function, then the candidates test on the stated time interval.</p>`),

      sec("Practice"),
      pq(r`Two positive numbers have sum 20. What is the largest possible product?`, r`\(P=x(20-x)\), \(0\le x\le20\). \(P'=20-2x=0\) at \(x=10\). \(P(0)=P(20)=0\), \(P(10)=100\). Largest product 100.`, "core"),
      pq(r`A rectangle has perimeter 36 cm. What dimensions give the largest area?`, r`\(A=x(18-x)\), \(A'=18-2x=0\) at \(x=9\); endpoints give 0. A square, 9 cm by 9 cm.`, "core"),
      pq(r`An open-topped box with a square base must have volume 32 cm³. Find the dimensions that minimise the material used.`, r`\(x^2h=32\), so \(h=\dfrac{32}{x^2}\). \(S=x^2+4xh=x^2+\dfrac{128}{x}\). \(S'=2x-\dfrac{128}{x^2}=0\) gives \(x=4\), \(h=2\). \(S''=2+\dfrac{256}{x^3}\gt0\) for all \(x\gt0\): absolute minimum.`, "exam"),
      pq(r`Find the point on the line \(y=2x+5\) closest to the origin.`, r`\(D=x^2+(2x+5)^2\), \(D'=2x+4(2x+5)=10x+20=0\) at \(x=-2\). The point is \((-2,1)\); \(D''=10\gt0\) everywhere.`, "exam"),
      pq(r`The amount of water in a tank is \(W(t)=t^3-12t^2+36t+10\) litres for \(0\le t\le8\) hours. At what time is the amount greatest, and what is it?`, r`\(W'(t)=3t^2-24t+36=3(t-2)(t-6)\). Candidates: \(W(0)=10\), \(W(2)=42\), \(W(6)=10\), \(W(8)=42\). The greatest amount is 42 litres, at \(t=2\) and again at \(t=8\).`, "exam"),
      pq(r`A rectangle is inscribed in a semicircle of radius 5 with its base on the diameter. Find the largest possible area.`, r`Corner \((x,\sqrt{25-x^2})\): \(A=2x\sqrt{25-x^2}\). Maximise \(A^2=4x^2(25-x^2)=100x^2-4x^4\): derivative \(200x-16x^3=0\) gives \(x^2=\tfrac{25}{2}\). Then \(A=2\cdot\tfrac{5}{\sqrt2}\cdot\tfrac{5}{\sqrt2}=25\).`, "stretch"),

      sec("Summary"),
      key([
        ["Objective", r`The quantity to make largest or smallest.`],
        ["Constraint", r`Reduces the objective to one variable.`],
        ["Domain", r`State it; it supplies the endpoints.`],
        ["Justify", r`Absolute, not just relative: candidates, or a sign on the whole domain.`],
      ]),
    ];
  },
});

// ───────────────────────── 5.11 ─────────────────────────
u5c["5.11"] = lesson({
  code: "5.11", unit: 5, official: "5.12", calc: "No calculator",
  title: "Behaviour of Implicitly Defined Curves",
  parts: () => {
    const top = (x) => (-x + Math.sqrt(Math.max(0, 48 - 3 * x * x))) / 2, bot = (x) => (-x - Math.sqrt(Math.max(0, 48 - 3 * x * x))) / 2;
    const g = plot({ w: 360, h: 360, x: [-6, 6], y: [-6, 6], alt: "The curve x squared plus xy plus y squared equals 12" });
    g.curve(top, -4, 4, { n: 1400 }).curve(bot, -4, 4, { n: 1400 }).seg(-3.4, 4, -0.6, 4, { color: C.alt, width: 1.7 }).seg(0.6, -4, 3.4, -4, { color: C.alt, width: 1.7 }).dot(-2, 4).dot(2, -4);
    g.label(-2.2, 4.55, "(−2, 4)", { plain: true, size: 12 }).label(1.2, -4.95, "(2, −4)", { plain: true, size: 12 });
    return [
      lede(r`Unit 3 found slopes on curves given by an equation in \(x\) and \(y\). This unit classified critical points using first and second derivatives. The final lesson of the unit joins the two: on an implicitly defined curve, where is the tangent horizontal, and is that point a local high point, a local low point, or neither? This combination is a recurring free-response question, and it rewards a specific technique.`),
      goals([
        r`Find the points of an implicit curve where the tangent is horizontal or vertical.`,
        r`Evaluate \(\dfrac{d^2y}{dx^2}\) at a point of an implicit curve.`,
        r`Classify a point with a horizontal tangent using the second derivative test.`,
        r`Reason about the sign of \(\dfrac{dy}{dx}\) on a region of the curve.`,
      ]),

      sec("The plan"),
      `<ol><li>Differentiate implicitly to obtain \(\dfrac{dy}{dx}\) in terms of \(x\) and \(y\).</li><li>Set the numerator to zero for horizontal tangents (or the denominator for vertical ones), and substitute into the curve's equation to find the points.</li><li>To classify, find \(\dfrac{d^2y}{dx^2}\) <strong>at the point</strong>: differentiate \(\dfrac{dy}{dx}\) once more and substitute the coordinates together with \(\dfrac{dy}{dx}=0\).</li><li>Apply the second derivative test.</li></ol>`,
      p(r`Step 3 is far easier at a horizontal tangent than in general, because every term containing \(\dfrac{dy}{dx}\) vanishes.`),

      sec("A complete example"),
      p(r`Consider the curve \(x^2+xy+y^2=12\). Differentiating,`),
      disp(r`2x+y+x\frac{dy}{dx}+2y\frac{dy}{dx}=0\qquad\Longrightarrow\qquad\frac{dy}{dx}=-\frac{2x+y}{x+2y}.`),
      p(r`<strong>Horizontal tangents:</strong> \(2x+y=0\), so \(y=-2x\). Substituting, \(x^2-2x^2+4x^2=12\), so \(x=\pm2\): the points \((2,-4)\) and \((-2,4)\).`),
      p(r`<strong>Second derivative.</strong> Differentiate the line \(2x+y+x\,y'+2y\,y'=0\) again, rather than the quotient:`),
      disp(r`2+y'+\big(y'+x\,y''\big)+\big(2(y')^2+2y\,y''\big)=0.`),
      p(r`At a point where \(y'=0\) this collapses to \(2+(x+2y)\,y''=0\), so \(y''=-\dfrac{2}{x+2y}\).`),
      table(
        ["Point", r`\(x+2y\)`, r`\(\dfrac{d^2y}{dx^2}\)`, "Conclusion"],
        [
          [r`\((-2,4)\)`, "6", r`\(-\dfrac13\)`, "relative maximum"],
          [r`\((2,-4)\)`, "−6", r`\(\dfrac13\)`, "relative minimum"],
        ],
      ),
      figure(g, r`The curve \(x^2+xy+y^2=12\). Near \((-2,4)\) the curve is concave down with a horizontal tangent: a local high point. Near \((2,-4)\) it is a local low point.`),

      sec("Worked examples"),
      ex("core", "Horizontal tangents", r`For the curve \(x^2+xy+y^2=12\), with \(\dfrac{dy}{dx}=-\dfrac{2x+y}{x+2y}\), find all points where the tangent line is horizontal.`, [
        r`\(\dfrac{dy}{dx}=0\) requires \(2x+y=0\), so \(y=-2x\).`,
        r`Substitute: \(x^2+x(-2x)+4x^2=3x^2=12\), so \(x=\pm2\).`,
        r`Check the denominator: \(x+2y=\mp6\neq0\).`,
      ], r`\((2,-4)\) and \((-2,4)\).`),
      ex("exam", "Classifying with the second derivative", r`For the same curve, determine whether the point \((-2,4)\) is a relative maximum, a relative minimum, or neither. Justify.`, [
        r`At \((-2,4)\), \(\dfrac{dy}{dx}=0\).`,
        r`From the differentiated equation with \(y'=0\): \(2+(x+2y)\,y''=0\). At \((-2,4)\): \(2+6\,y''=0\), so \(y''=-\dfrac13\).`,
      ], r`A relative maximum, because \(\dfrac{dy}{dx}=0\) and \(\dfrac{d^2y}{dx^2}=-\dfrac13\lt0\) at \((-2,4)\).`),
      ex("exam", "Vertical tangents", r`For the same curve, find all points where the tangent line is vertical.`, [
        r`The denominator must vanish: \(x+2y=0\), so \(x=-2y\).`,
        r`Substitute: \(4y^2-2y^2+y^2=3y^2=12\), so \(y=\pm2\).`,
        r`Check the numerator: \(2x+y=-3y=\mp6\neq0\).`,
      ], r`\((-4,2)\) and \((4,-2)\).`),
      ex("stretch", "A horizontal tangent that is neither", r`For the curve \(x^3+y^3=6\), show that the tangent is horizontal at the point where \(x=0\), and determine whether that point is a relative extremum.`, [
        r`\(3x^2+3y^2\dfrac{dy}{dx}=0\), so \(\dfrac{dy}{dx}=-\dfrac{x^2}{y^2}\).`,
        r`At \(x=0\), \(y=\sqrt[3]{6}\) and \(\dfrac{dy}{dx}=0\): horizontal.`,
        r`But \(-\dfrac{x^2}{y^2}\le0\) on both sides of \(x=0\): the slope does not change sign.`,
      ], r`Neither. \(\dfrac{dy}{dx}\) is negative on both sides of \(x=0\), so \(y\) is decreasing through the point. (Here the second derivative there is 0, so the second derivative test would have been inconclusive.)`),

      sec("Common errors"),
      mistake("stopping at the relation", r`<p>\(y=-2x\) is not an answer. It is a line; the points are where that line meets the curve. Substitute back.</p>`),
      mistake("not checking the other part of the fraction", r`<p>If the numerator and denominator of \(\dfrac{dy}{dx}\) are both zero at a point, the slope there is not determined by this method.</p>`),
      mistake("grinding out a general second derivative", r`<p>The full formula for \(\dfrac{d^2y}{dx^2}\) is rarely needed. Differentiate once, then substitute the coordinates and \(\dfrac{dy}{dx}=0\) immediately.</p>`),
      mistake("classifying by looking at y-values", r`<p>"It is a maximum because \(y=4\) is the larger value" is not a justification. Use \(\dfrac{dy}{dx}=0\) together with the sign of \(\dfrac{d^2y}{dx^2}\), or a sign change of \(\dfrac{dy}{dx}\).</p>`),

      sec("Write it so it scores"),
      justify(
        r`For the curve \(x^2+xy+y^2=12\), does the curve have a relative minimum, a relative maximum, or neither at \((2,-4)\)? Justify your answer.`,
        r`At \((2,-4)\), \(\dfrac{dy}{dx}=-\dfrac{2(2)+(-4)}{2+2(-4)}=0\). Differentiating \(2x+y+x\,y'+2y\,y'=0\) and setting \(y'=0\) gives \(2+(x+2y)y''=0\), so at \((2,-4)\), \(y''=-\dfrac{2}{-6}=\dfrac13\gt0\). The curve has a relative minimum at \((2,-4)\) because \(\dfrac{dy}{dx}=0\) and \(\dfrac{d^2y}{dx^2}\gt0\) there.`,
        r`The first derivative is shown to be zero at the point, the second derivative is evaluated there with visible working, and the conclusion cites both. That is the full second derivative test.`,
      ),
      exam(r`<p>These questions nearly always <em>give</em> you \(\dfrac{dy}{dx}\) in part (a) as a "show that". Use the given expression for every later part, even if your own derivation went wrong.</p>`),

      sec("Practice"),
      pq(r`For the curve \(x^2-xy+y^2=3\), with \(\dfrac{dy}{dx}=\dfrac{y-2x}{2y-x}\), find the points where the tangent is horizontal.`, r`\(y=2x\): \(x^2-2x^2+4x^2=3\), so \(x=\pm1\). Points \((1,2)\) and \((-1,-2)\).`, "core"),
      pq(r`For the circle \(x^2+y^2=25\), classify the point \((0,5)\) using derivatives.`, r`\(\dfrac{dy}{dx}=-\dfrac xy=0\) at \((0,5)\), and \(\dfrac{d^2y}{dx^2}=-\dfrac{25}{y^3}=-\dfrac15\lt0\): a relative maximum.`, "core"),
      pq(r`For the curve \(x^2-xy+y^2=3\), classify the point \((1,2)\).`, r`Differentiate \(2x-y-x\,y'+2y\,y'=0\) again and set \(y'=0\): \(2+(2y-x)y''=0\). At \((1,2)\): \(2+3y''=0\), so \(y''=-\dfrac23\lt0\). A relative maximum.`, "exam"),
      pq(r`For the curve \(y^2=x^3-3x+3\) with \(y\gt0\), find the \(x\)-values where the tangent is horizontal.`, r`\(2y\,y'=3x^2-3\), so \(y'=\dfrac{3x^2-3}{2y}=0\) at \(x=\pm1\). (Both give points on the curve: \(y^2=1\) at \(x=1\) and \(y^2=5\) at \(x=-1\).)`, "exam"),
      pq(r`For the curve in the previous question, classify the point \((1,1)\).`, r`\(y'=\dfrac{3(x-1)(x+1)}{2y}\) with \(y\gt0\): negative just left of \(x=1\), positive just right. \(y'\) changes from negative to positive, so \((1,1)\) is a relative minimum.`, "exam"),
      pq(r`For the curve \(x^2+xy+y^2=12\), on the part of the curve near \((2,2)\), is \(y\) increasing or decreasing as \(x\) increases?`, r`\(\dfrac{dy}{dx}=-\dfrac{2(2)+2}{2+2(2)}=-1\lt0\). \(y\) is decreasing there.`, "stretch"),

      sec("Summary"),
      key([
        ["Horizontal", r`Numerator of \(\tfrac{dy}{dx}\) is zero; substitute into the curve.`],
        ["Vertical", r`Denominator is zero; substitute into the curve.`],
        ["Classify", r`\(\tfrac{dy}{dx}=0\) with the sign of \(\tfrac{d^2y}{dx^2}\) at the point.`],
        ["Shortcut", r`Differentiate the un-solved equation and set \(y'=0\).`],
      ]),
    ];
  },
});
