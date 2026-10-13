// AP Calculus AB exam prep — Unit 4 (Derivatives in Context), lessons 4.5–4.7.
// Original wording, examples, numbers and figures throughout (see u1a for notes).
import { r, lesson, lede, goals, sec, p, disp, def, thm, exam, mistake, justify, ex, pq, key, table } from "./apcalc/kit.mjs";
import { plot, figure, C } from "./apcalc/fig.mjs";

export const u4b = {};

// A ladder of length 13 against a wall, foot at x = 5 (so the top is at y = 12).
export const ladderFigure = () => {
  const g = plot({ w: 300, h: 330, x: [-1, 9], y: [-1, 14], grid: false, ticks: false, xName: " ", yName: " ", alt: "A ladder leaning against a vertical wall" });
  g.seg(5, 0, 0, 12, { color: C.main, width: 3.2 }).dot(5, 0).dot(0, 12);
  g.label(2.2, -0.75, "x", { size: 15 }).label(-0.75, 6, "y", { size: 15 }).label(2.9, 6.6, "13 m", { plain: true, size: 13 });
  g.label(0.35, 13.1, "wall", { plain: true, size: 12, color: C.grey }).label(6.3, 0.35, "ground", { plain: true, size: 12, color: C.grey });
  return g;
};

// ───────────────────────── 4.5 ─────────────────────────
u4b["4.5"] = lesson({
  code: "4.5", unit: 4, official: "4.5", calc: "No calculator",
  title: "Related Rates: Solving",
  parts: () => {
    const cone = plot({ w: 300, h: 330, x: [-6, 6], y: [-1, 14], grid: false, ticks: false, xName: " ", yName: " ", alt: "An inverted cone partly filled with water" });
    cone.shade((x) => 6, (x) => 3 * Math.abs(x), -2, 2, { color: C.main, opacity: 0.2 })
      .seg(-4, 12, 0, 0, { width: 2.6 }).seg(4, 12, 0, 0, { width: 2.6 }).seg(-4, 12, 4, 12, { width: 2.6 }).seg(-2, 6, 2, 6, { color: C.alt, width: 1.8 })
      .label(4.3, 5.7, "h", { size: 15 }).label(0.5, 6.5, "r", { size: 15, color: C.alt }).label(0.4, 12.6, "4 cm", { plain: true, size: 12 }).label(4.4, 11.6, "12 cm", { plain: true, size: 12 });
    return [
      lede(r`With the five steps of Lesson 4.4 in hand, related-rates problems fall into a small number of families. Each family has one linking equation and one characteristic difficulty. Learn the four below and you will recognise almost anything the exam can construct.`),
      goals([
        r`Solve ladder and other right-triangle problems with the Pythagorean relation.`,
        r`Solve cone problems by eliminating a variable with similar triangles.`,
        r`Solve problems with two moving objects.`,
        r`Solve problems in which an angle is changing.`,
      ]),

      sec("Family 1: sliding ladders"),
      figure(ladderFigure(), r`The ladder's length is constant, so \(x^2+y^2=13^2\) at every instant.`),
      p(r`<strong>Link:</strong> \(x^2+y^2=L^2\) with \(L\) constant. <strong>Differentiated:</strong> \(2x\dfrac{dx}{dt}+2y\dfrac{dy}{dt}=0\). The right-hand side is zero because the ladder does not change length. One of \(x\), \(y\) is given at the instant; find the other from the Pythagorean relation.`),

      sec("Family 2: filling a cone"),
      figure(cone, r`The water forms a small cone similar to the tank: \(\dfrac{r}{h}=\dfrac{4}{12}\), so \(r=\dfrac h3\).`),
      p(r`<strong>Link:</strong> \(V=\tfrac13\pi r^2h\), which has <em>two</em> variables besides \(V\). Similar triangles relate them, and that relation holds at every instant, so it is used <strong>before</strong> differentiating to leave a single variable. This is the one substitution that is not only allowed early but required.`),

      sec("Family 3: two moving objects"),
      p(r`Two objects move along perpendicular lines. <strong>Link:</strong> \(D^2=x^2+y^2\), where all three quantities vary. <strong>Differentiated:</strong> \(2D\dfrac{dD}{dt}=2x\dfrac{dx}{dt}+2y\dfrac{dy}{dt}\). An object moving <em>toward</em> the origin has a negative rate.`),

      sec("Family 4: a changing angle"),
      p(r`<strong>Link:</strong> a trigonometric ratio, most often \(\tan\theta=\dfrac{\text{opposite}}{\text{adjacent}}\). <strong>Differentiated:</strong> \(\sec^2\theta\,\dfrac{d\theta}{dt}=\dots\). Find \(\sec^2\theta\) from the triangle (\(\sec^2\theta=1+\tan^2\theta\)); you do not need \(\theta\) itself. The rate comes out in <strong>radians</strong> per unit time.`),

      sec("Worked examples"),
      ex("core", "Ladder", r`A 13 m ladder leans against a wall. Its foot is pulled away from the wall at 0.5 m/s. How fast is the top sliding down when the foot is 5 m from the wall?`, [
        r`\(x^2+y^2=169\), \(\dfrac{dx}{dt}=0.5\). Want \(\dfrac{dy}{dt}\) when \(x=5\).`,
        r`Differentiate: \(2x\dfrac{dx}{dt}+2y\dfrac{dy}{dt}=0\).`,
        r`When \(x=5\), \(y=\sqrt{169-25}=12\).`,
        r`\(5(0.5)+12\,\dfrac{dy}{dt}=0\).`,
      ], r`\(\dfrac{dy}{dt}=-\dfrac{5}{24}\) m/s: the top is sliding down at \(\dfrac{5}{24}\) m/s.`),
      ex("exam", "Cone", r`Water is poured into an inverted cone of height 12 cm and top radius 4 cm at 6 cm³/s. How fast is the water level rising when the water is 6 cm deep?`, [
        r`Similar triangles: \(r=\dfrac h3\).`,
        r`\(V=\dfrac13\pi\left(\dfrac h3\right)^2h=\dfrac{\pi h^3}{27}\).`,
        r`Differentiate: \(\dfrac{dV}{dt}=\dfrac{\pi h^2}{9}\,\dfrac{dh}{dt}\).`,
        r`Substitute \(\dfrac{dV}{dt}=6\), \(h=6\): \(6=4\pi\,\dfrac{dh}{dt}\).`,
      ], r`\(\dfrac{dh}{dt}=\dfrac{3}{2\pi}\) cm/s.`),
      ex("exam", "Two ships", r`Ship A is 50 km north of a port and sails south toward it at 10 km/h. At the same moment ship B leaves the port sailing east at 20 km/h. How fast is the distance between the ships changing 2 hours later?`, [
        r`Let \(y\) be A's distance north of the port and \(x\) be B's distance east. \(\dfrac{dy}{dt}=-10\), \(\dfrac{dx}{dt}=20\).`,
        r`After 2 hours: \(y=30\), \(x=40\), \(D=50\).`,
        r`\(D\dfrac{dD}{dt}=x\dfrac{dx}{dt}+y\dfrac{dy}{dt}\): \(50\dfrac{dD}{dt}=40(20)+30(-10)=500\).`,
      ], r`The distance is increasing at 10 km/h.`),
      ex("stretch", "Angle of elevation", r`A balloon rises vertically at 3 m/s from a point on level ground 40 m from an observer. How fast is the angle of elevation of the balloon changing when the balloon is 30 m high?`, [
        r`\(\tan\theta=\dfrac{h}{40}\), with \(\dfrac{dh}{dt}=3\).`,
        r`Differentiate: \(\sec^2\theta\,\dfrac{d\theta}{dt}=\dfrac{1}{40}\dfrac{dh}{dt}\).`,
        r`When \(h=30\), \(\tan\theta=\dfrac34\), so \(\sec^2\theta=1+\dfrac{9}{16}=\dfrac{25}{16}\).`,
        r`\(\dfrac{25}{16}\,\dfrac{d\theta}{dt}=\dfrac{3}{40}\).`,
      ], r`\(\dfrac{d\theta}{dt}=\dfrac{3}{40}\cdot\dfrac{16}{25}=0.048\) radians per second.`),

      sec("Common errors"),
      mistake("differentiating the cone formula with two variables", r`<p>Leaving \(V=\tfrac13\pi r^2h\) as it is forces you to supply \(\dfrac{dr}{dt}\), which is not given. Eliminate \(r\) with similar triangles first.</p>`),
      mistake("freezing the cone's variable ratio", r`<p>\(r=\dfrac h3\) is true at all times and may be used early. \(h=6\) is true at one instant and may not.</p>`),
      mistake("the wrong sign for motion toward a point", r`<p>Ship A's distance from the port is shrinking, so \(\dfrac{dy}{dt}=-10\). Using \(+10\) gives 22 km/h instead of 10.</p>`),
      mistake("degrees", r`<p>The derivative formulas for trigonometric functions hold only in radians, so \(\dfrac{d\theta}{dt}\) is in radians per second.</p>`),

      sec("Write it so it scores"),
      justify(
        r`For the ladder above, find the rate at which the top of the ladder is moving when the foot is 5 m from the wall. Indicate units.`,
        r`\(x^2+y^2=169\), so \(2x\dfrac{dx}{dt}+2y\dfrac{dy}{dt}=0\). When \(x=5\), \(y=12\): \(2(5)(0.5)+2(12)\dfrac{dy}{dt}=0\), so \(\dfrac{dy}{dt}=-\dfrac{5}{24}\) metres per second.`,
        r`The relation, the differentiated relation, the substitution, the answer and the units are all visible. A negative answer with units is complete; adding "the top is moving down" is good practice but the sign already says so.`,
      ),
      exam(r`<p>A related-rates part often sits inside a longer contextual question and uses a function defined earlier. The method does not change: write the relation, differentiate with respect to \(t\), substitute last.</p>`),

      sec("Practice"),
      pq(r`A spherical balloon is inflated at 50 cm³/s. How fast is its radius increasing when \(r=5\) cm?`, r`\(50=4\pi(25)\dfrac{dr}{dt}\), so \(\dfrac{dr}{dt}=\dfrac{1}{2\pi}\) cm/s.`, "core"),
      pq(r`The top of a 10 m ladder slides down a wall at 0.3 m/s. How fast is the foot moving when the top is 6 m above the ground?`, r`\(x=8\). \(8\dfrac{dx}{dt}+6(-0.3)=0\), so \(\dfrac{dx}{dt}=0.225\) m/s.`, "core"),
      pq(r`A person 1.5 m tall walks away from a lamp post 6 m high at 1.2 m/s. How fast is the length of the person's shadow increasing? How fast is the tip of the shadow moving?`, r`With \(x\) the distance from the post and \(s\) the shadow length, similar triangles give \(\dfrac{x+s}{6}=\dfrac{s}{1.5}\), so \(s=\dfrac x3\) and \(\dfrac{ds}{dt}=0.4\) m/s. The tip moves at \(\dfrac{dx}{dt}+\dfrac{ds}{dt}=1.6\) m/s.`, "exam"),
      pq(r`Sand falls onto a conical pile at 3 m³/min. The height of the pile always equals its diameter. How fast is the height increasing when the pile is 2 m high?`, r`\(r=\dfrac h2\), so \(V=\dfrac{\pi h^3}{12}\) and \(\dfrac{dV}{dt}=\dfrac{\pi h^2}{4}\dfrac{dh}{dt}\). Then \(3=\pi\,\dfrac{dh}{dt}\), so \(\dfrac{dh}{dt}=\dfrac3\pi\) m/min.`, "exam"),
      pq(r`Two sides of a triangle have fixed lengths 8 cm and 10 cm. The angle between them is increasing at 0.1 rad/s. How fast is the area changing when the angle is \(\dfrac\pi3\)?`, r`\(A=\tfrac12(8)(10)\sin\theta=40\sin\theta\), so \(\dfrac{dA}{dt}=40\cos\theta\,\dfrac{d\theta}{dt}=40\cdot\tfrac12\cdot0.1=2\) cm²/s.`, "exam"),
      pq(r`For the two ships in the worked example, how fast is the distance between them changing after 1 hour?`, r`\(y=40\), \(x=20\): \(D\dfrac{dD}{dt}=20(20)+40(-10)=0\). At that instant the distance is not changing: the ships are at their closest.`, "stretch"),
      pq(r`A point moves along \(y=x^2\) with \(\dfrac{dx}{dt}=2\). When \(x=3\), how fast is its distance from the origin changing?`, r`\(D^2=x^2+x^4\), so \(2D\dfrac{dD}{dt}=(2x+4x^3)\dfrac{dx}{dt}=(114)(2)\). With \(D=\sqrt{90}\): \(\dfrac{dD}{dt}=\dfrac{114}{\sqrt{90}}=\dfrac{38}{\sqrt{10}}\approx12.017\).`, "stretch"),

      sec("Summary"),
      key([
        ["Ladder", r`\(x^2+y^2=L^2\), right side differentiates to 0.`],
        ["Cone", r`Similar triangles first, to leave one variable.`],
        ["Two movers", r`\(D^2=x^2+y^2\); approaching means a negative rate.`],
        ["Angle", r`\(\tan\theta\); get \(\sec^2\theta\) from the triangle; radians.`],
      ]),
    ];
  },
});

// ───────────────────────── 4.6 ─────────────────────────
export const sqrtTangentFigure = () => {
  const g = plot({ w: 420, h: 290, x: [-0.5, 9.5], y: [-0.5, 4], alt: "Graph of the square root function with its tangent line at x = 4" });
  g.curve((x) => 2 + 0.25 * (x - 4), 0, 9.3, { color: C.alt, width: 1.9 }).curve(Math.sqrt, 0, 9.3, { n: 600 }).dot(4, 2);
  g.label(6.6, 2.25, "y = f(x)").label(6.1, 3.45, "tangent line", { color: C.alt });
  return g;
};

u4b["4.6"] = lesson({
  code: "4.6", unit: 4, official: "4.6", calc: "No calculator",
  title: "Tangent-Line Approximation",
  parts: () => [
    lede(r`Zoom in far enough on any differentiable curve and it looks straight. That is what differentiable <em>means</em>, and it has a practical consequence: near the point of tangency, the tangent line is an excellent stand-in for the function. The exam uses this to have you approximate values of functions you cannot evaluate, and then asks the sharper question: is your approximation too big or too small?`),
    goals([
      r`Write the tangent-line approximation (linearisation) of a function at a point.`,
      r`Use it to approximate function values.`,
      r`Decide whether the approximation is an overestimate or an underestimate, with justification.`,
      r`Apply it when the function is known only through its derivative.`,
    ]),

    sec("The approximation"),
    def("Tangent-line approximation", r`<p>For \(x\) near \(a\),</p>${disp(r`f(x)\approx L(x)=f(a)+f'(a)\,(x-a).`)}<p>\(L\) is the tangent line at \(x=a\), also called the <strong>linearisation</strong> of \(f\) at \(a\).</p>`),
    p(r`In words: start from the known value \(f(a)\) and add (rate) × (distance moved). It is the estimate you made informally in Lesson 4.1.`),
    figure(sqrtTangentFigure(), r`\(f(x)=\sqrt x\) and its tangent line at \(x=4\). Close to 4 the two are almost indistinguishable; further away the line drifts above the curve.`),

    sec("Too big or too small?"),
    p(r`The answer depends on which side of the curve the tangent line lies, and that is decided by <strong>concavity</strong>.`),
    key([
      [r`Concave up: \(f''\gt0\)`, r`The curve bends upward, away from the tangent. The tangent lies <strong>below</strong> the curve, so the approximation is an <strong>underestimate</strong>.`],
      [r`Concave down: \(f''\lt0\)`, r`The curve bends downward. The tangent lies <strong>above</strong> the curve, so the approximation is an <strong>overestimate</strong>.`],
    ]),
    p(r`In the figure, \(f''(x)=-\tfrac14x^{-3/2}\lt0\): concave down, tangent above, overestimate. The sign of \(f''\) must hold on the whole interval between \(a\) and the point being approximated.`),

    sec("Worked examples"),
    ex("core", "Approximating a root", r`Use the tangent line to \(f(x)=\sqrt x\) at \(x=4\) to approximate \(\sqrt{4.1}\).`, [
      r`\(f(4)=2\) and \(f'(x)=\dfrac{1}{2\sqrt x}\), so \(f'(4)=\dfrac14\).`,
      r`\(L(x)=2+\dfrac14(x-4)\).`,
      r`\(L(4.1)=2+\dfrac14(0.1)\).`,
    ], r`\(\sqrt{4.1}\approx2.025\). (The true value is 2.02485…, slightly less: an overestimate, as predicted.)`),
    ex("exam", "From given values", r`A differentiable function \(f\) has \(f(2)=5\) and \(f'(2)=-3\). Approximate \(f(2.2)\).`, [
      r`\(L(x)=5-3(x-2)\).`,
      r`\(L(2.2)=5-3(0.2)\).`,
    ], r`\(f(2.2)\approx4.4\).`),
    ex("exam", "A function known only by its derivative", r`A function \(f\) satisfies \(f(2)=4\) and \(f'(x)=\sqrt{x^3+1}\). Approximate \(f(2.1)\) and determine whether the approximation is an overestimate or an underestimate.`, [
      r`\(f'(2)=\sqrt9=3\), so \(f(2.1)\approx4+3(0.1)=4.3\).`,
      r`\(f''(x)=\dfrac{3x^2}{2\sqrt{x^3+1}}\gt0\) for \(2\le x\le2.1\).`,
    ], r`\(f(2.1)\approx4.3\). This is an underestimate, because \(f''(x)\gt0\) on the interval, so the graph of \(f\) is concave up and the tangent line lies below it.`),
    ex("stretch", "On an implicit curve", r`The point \((1,-1)\) lies on the curve \(x^2-xy+y^2=3\), where \(\dfrac{dy}{dx}=\dfrac{y-2x}{2y-x}\). Approximate the \(y\)-coordinate of the point on the curve near \((1,-1)\) with \(x=1.1\).`, [
      r`Slope at \((1,-1)\): \(\dfrac{-1-2}{-2-1}=1\).`,
      r`Tangent line: \(y=-1+1\,(x-1)\).`,
      r`At \(x=1.1\): \(y\approx-1+0.1\).`,
    ], r`\(y\approx-0.9\).`),

    sec("Common errors"),
    mistake("re-evaluating the slope at the new point", r`<p>The slope in \(L(x)\) is \(f'(a)\), a fixed number. Using \(f'(x)\) there makes the "line" a curve and the answer wrong.</p>`),
    mistake("justifying over or under with the first derivative", r`<p>"It is an overestimate because \(f\) is increasing" is not a reason. Whether the tangent lies above or below is a matter of <em>concavity</em>, that is, the sign of \(f''\).</p>`),
    mistake("checking concavity at a single point", r`<p>State that \(f''\) has the required sign on the interval between \(a\) and the approximation point, not only at \(a\).</p>`),
    mistake("approximating far from the point of tangency", r`<p>The tangent line at \(x=4\) estimates \(\sqrt{4.1}\) well and \(\sqrt{9}\) badly (3.25 instead of 3).</p>`),

    sec("Write it so it scores"),
    justify(
      r`Let \(f(x)=e^x\). Use the tangent line at \(x=0\) to approximate \(e^{0.1}\). Is the approximation greater than or less than \(e^{0.1}\)? Give a reason.`,
      r`\(f(0)=1\) and \(f'(0)=1\), so \(e^{0.1}\approx1+1(0.1)=1.1\). The approximation is less than \(e^{0.1}\) because \(f''(x)=e^x\gt0\) for all \(x\), so the graph of \(f\) is concave up and the tangent line lies below the graph.`,
      r`The approximation is shown as \(f(a)+f'(a)(x-a)\) with numbers. The reason cites the sign of \(f''\), connects it to concavity, and connects concavity to the position of the tangent line.`,
    ),
    exam(r`<p>This two-part pattern (approximate, then over or under with a reason) is a regular free-response item, especially in differential-equation questions where \(\dfrac{dy}{dx}\) is given. If \(\dfrac{d^2y}{dx^2}\) was found in an earlier part, its sign is your reason.</p>`),

    sec("Practice"),
    pq(r`A function has \(f(3)=7\) and \(f'(3)=2\). Approximate \(f(2.9)\).`, r`\(7+2(-0.1)=6.8\).`, "core"),
    pq(r`Use a tangent line to approximate \(\sqrt{25.4}\).`, r`\(f(x)=\sqrt x\) at \(a=25\): \(5+\dfrac{1}{10}(0.4)=5.04\).`, "core"),
    pq(r`Use a tangent line to approximate \(\ln(1.05)\). Is it an overestimate or an underestimate?`, r`At \(a=1\): \(0+1(0.05)=0.05\). Since \((\ln x)''=-\dfrac{1}{x^2}\lt0\), the graph is concave down and this is an overestimate.`, "exam"),
    pq(r`Use a tangent line to approximate \((1.02)^5\).`, r`\(f(x)=x^5\) at \(a=1\): \(1+5(0.02)=1.1\).`, "exam"),
    pq(r`Use a tangent line to approximate \(\tan\!\left(\dfrac\pi4+0.02\right)\).`, r`\(\tan\dfrac\pi4=1\) and \(\sec^2\dfrac\pi4=2\): \(1+2(0.02)=1.04\).`, "exam"),
    pq(r`A function \(y\) satisfies \(\dfrac{dy}{dx}=x-y\) with \(y(1)=2\). Approximate \(y(1.2)\).`, r`Slope at \((1,2)\) is \(1-2=-1\). \(y(1.2)\approx2+(-1)(0.2)=1.8\).`, "stretch"),
    pq(r`A function has \(f(1)=3\), \(f'(1)=4\) and \(f''(x)\lt0\) for all \(x\). Which of 4.8, 5.0, 5.2 could be the value of \(f(1.5)\)?`, r`The tangent line gives \(3+4(0.5)=5\). Since \(f\) is concave down, the tangent lies above the graph, so \(f(1.5)\lt5\). Only 4.8 is possible.`, "stretch"),

    sec("Summary"),
    key([
      ["Formula", r`\(f(x)\approx f(a)+f'(a)(x-a)\).`],
      ["Concave up", r`Tangent below the curve: underestimate.`],
      ["Concave down", r`Tangent above the curve: overestimate.`],
      ["Reason", r`The sign of \(f''\) on the interval.`],
    ]),
  ],
});

// ───────────────────────── 4.7 ─────────────────────────
u4b["4.7"] = lesson({
  code: "4.7", unit: 4, official: "4.7", calc: "No calculator",
  title: "Indeterminate Forms and L'Hôpital's Rule",
  parts: () => [
    lede(r`In Unit 1 a limit of the form \(\tfrac00\) had to be rescued by algebra: a factor to cancel, a conjugate to multiply by. Many limits have no such trick. \(\dfrac{e^x-1}{\sin x}\) near 0 cannot be factored. L'Hôpital's Rule resolves these with derivatives, by comparing how fast the numerator and denominator are heading to zero. It is simple to use, and the exam is strict about how its use is written down.`),
    goals([
      r`Recognise the indeterminate forms \(\tfrac00\) and \(\tfrac\infty\infty\).`,
      r`Apply L'Hôpital's Rule, repeatedly if necessary.`,
      r`Write the justification in the form free-response readers require.`,
      r`Identify limits to which the rule does not apply.`,
    ]),

    sec("The rule"),
    thm("L'Hôpital's Rule", r`<p>Suppose \(f\) and \(g\) are differentiable near \(a\), and that</p>${disp(r`\lim_{x\to a}f(x)=0\ \text{ and }\ \lim_{x\to a}g(x)=0,\qquad\text{or both limits are }\pm\infty.`)}<p>Then</p>${disp(r`\lim_{x\to a}\frac{f(x)}{g(x)}=\lim_{x\to a}\frac{f'(x)}{g'(x)},`)}<p>provided the limit on the right exists or is \(\pm\infty\). The same holds for one-sided limits and for \(x\to\pm\infty\).</p>`),
    p(r`Differentiate the numerator and the denominator <strong>separately</strong>. This is not the quotient rule.`),

    sec("Why it is plausible"),
    p(r`If \(f(a)=g(a)=0\), then near \(a\) each function is close to its tangent line: \(f(x)\approx f'(a)(x-a)\) and \(g(x)\approx g'(a)(x-a)\). Dividing, the factors \((x-a)\) cancel and the ratio is close to \(\dfrac{f'(a)}{g'(a)}\). The rule compares the two slopes.`),

    sec("How to write it"),
    p(r`On the free-response section, a correct answer earns full credit only if the conditions are shown. The accepted form is:`),
    `<ol><li>State the limit of the numerator and the limit of the denominator <strong>separately</strong>, each with limit notation.</li><li>Then apply the rule, keeping "\(\lim\)" until you substitute.</li></ol>`,
    p(r`Never write "\(=\dfrac00\)". \(\tfrac00\) is not a number, and equating a limit to it is penalised.`),

    sec("Other indeterminate forms"),
    p(r`A product of the form \(0\cdot\infty\) is not covered directly. Rewrite it as a quotient by moving one factor into the denominator as its reciprocal, so that it becomes \(\tfrac00\) or \(\tfrac\infty\infty\).`),

    sec("Worked examples"),
    ex("core", "Zero over zero", r`Evaluate \(\displaystyle\lim_{x\to0}\dfrac{e^x-1}{\sin x}\).`, [
      r`\(\displaystyle\lim_{x\to0}(e^x-1)=0\) and \(\displaystyle\lim_{x\to0}\sin x=0\).`,
      r`By L'Hôpital's Rule, the limit equals \(\displaystyle\lim_{x\to0}\dfrac{e^x}{\cos x}\).`,
    ], r`\(\dfrac{1}{1}=1\).`),
    ex("exam", "Applying the rule twice", r`Evaluate \(\displaystyle\lim_{x\to\infty}\dfrac{x^2}{e^x}\).`, [
      r`Both \(x^2\) and \(e^x\) tend to \(\infty\). First application: \(\displaystyle\lim_{x\to\infty}\dfrac{2x}{e^x}\).`,
      r`Still \(\tfrac\infty\infty\). Second application: \(\displaystyle\lim_{x\to\infty}\dfrac{2}{e^x}\).`,
    ], r`The limit is \(0\). The exponential outgrows the power, as claimed in Lesson 1.9.`),
    ex("exam", "With a function given only by values", r`A differentiable function \(f\) has \(f(2)=0\) and \(f'(2)=5\), and \(f'\) is continuous. Evaluate \(\displaystyle\lim_{x\to2}\dfrac{f(x)}{x^2-4}\).`, [
      r`\(f\) is differentiable, hence continuous, so \(\displaystyle\lim_{x\to2}f(x)=f(2)=0\). Also \(\displaystyle\lim_{x\to2}(x^2-4)=0\).`,
      r`By L'Hôpital's Rule, the limit is \(\displaystyle\lim_{x\to2}\dfrac{f'(x)}{2x}=\dfrac{f'(2)}{4}\).`,
    ], r`\(\dfrac54\).`),
    ex("stretch", "Zero times infinity", r`Evaluate \(\displaystyle\lim_{x\to0^+}x\ln x\).`, [
      r`As \(x\to0^+\), \(x\to0\) and \(\ln x\to-\infty\): the form \(0\cdot\infty\).`,
      r`Rewrite as a quotient: \(x\ln x=\dfrac{\ln x}{1/x}\), which has the form \(\tfrac{-\infty}{\infty}\).`,
      r`L'Hôpital's Rule: \(\displaystyle\lim_{x\to0^+}\dfrac{1/x}{-1/x^2}=\lim_{x\to0^+}(-x)\).`,
    ], r`The limit is \(0\).`),

    sec("Common errors"),
    mistake("using the rule on a limit that is not indeterminate", r`<p>\(\displaystyle\lim_{x\to1}\dfrac{x^2+1}{x+1}=\dfrac22=1\) by substitution. "Applying" the rule gives \(\dfrac{2x}{1}\to2\), which is wrong. Always check the form first.</p>`),
    mistake("the quotient rule", r`<p>\(\dfrac{f'(x)}{g'(x)}\), not \(\dfrac{f'g-fg'}{g^2}\). You are replacing the limit, not differentiating the fraction.</p>`),
    mistake(r`writing \(\displaystyle\lim\dfrac{f}{g}=\dfrac00\)`, r`<p>State the two limits separately in words or symbols. An "\(=\tfrac00\)" on the page costs the justification point even when the final answer is right.</p>`),
    mistake("stopping too early or going too far", r`<p>After each application, check the form again. If it is still indeterminate, apply the rule again; if it is not, substitute and stop.</p>`),

    sec("Write it so it scores"),
    justify(
      r`Evaluate \(\displaystyle\lim_{x\to1}\dfrac{\ln x}{x^2-1}\). Justify your answer.`,
      r`\(\displaystyle\lim_{x\to1}\ln x=0\) and \(\displaystyle\lim_{x\to1}(x^2-1)=0\). By L'Hôpital's Rule, \(\displaystyle\lim_{x\to1}\dfrac{\ln x}{x^2-1}=\lim_{x\to1}\dfrac{1/x}{2x}=\dfrac{1}{2}\).`,
      r`Two separate limit statements establish the indeterminate form; the rule is named; limit notation is kept until substitution. That is the complete pattern, and it is short enough to write every time.`,
    ),
    exam(r`<p>When a free-response part gives values such as \(f(2)=0\) and \(f'(2)=5\) and then asks for a limit of a quotient, it is L'Hôpital's Rule. The continuity of \(f\) (from differentiability) is what lets you say the numerator's limit is 0, so say it.</p>`),

    sec("Practice"),
    pq(r`Evaluate \(\displaystyle\lim_{x\to0}\dfrac{\sin(3x)}{2x}\).`, r`Form \(\tfrac00\). \(\displaystyle\lim_{x\to0}\dfrac{3\cos(3x)}{2}=\dfrac32\).`, "core"),
    pq(r`Evaluate \(\displaystyle\lim_{x\to2}\dfrac{x^3-8}{x^2-4}\).`, r`Form \(\tfrac00\). \(\displaystyle\lim_{x\to2}\dfrac{3x^2}{2x}=\dfrac{12}{4}=3\).`, "core"),
    pq(r`Evaluate \(\displaystyle\lim_{x\to\infty}\dfrac{\ln x}{\sqrt x}\).`, r`Form \(\tfrac\infty\infty\). \(\displaystyle\lim_{x\to\infty}\dfrac{1/x}{1/(2\sqrt x)}=\lim_{x\to\infty}\dfrac{2}{\sqrt x}=0\).`, "exam"),
    pq(r`Evaluate \(\displaystyle\lim_{x\to0}\dfrac{e^{2x}-1-2x}{x^2}\).`, r`\(\tfrac00\): \(\dfrac{2e^{2x}-2}{2x}\). Still \(\tfrac00\): \(\dfrac{4e^{2x}}{2}\to2\).`, "exam"),
    pq(r`A differentiable function \(g\) has \(g(3)=0\) and \(g'(3)=-2\), with \(g'\) continuous. Evaluate \(\displaystyle\lim_{x\to3}\dfrac{g(x)}{e^{x-3}-1}\).`, r`Both tend to 0. \(\displaystyle\lim_{x\to3}\dfrac{g'(x)}{e^{x-3}}=\dfrac{-2}{1}=-2\).`, "exam"),
    pq(r`Evaluate \(\displaystyle\lim_{x\to0}\dfrac{\tan x-x}{x^3}\).`, r`\(\tfrac00\): \(\dfrac{\sec^2x-1}{3x^2}=\dfrac{\tan^2x}{3x^2}=\dfrac13\left(\dfrac{\tan x}{x}\right)^2\to\dfrac13\).`, "stretch"),
    pq(r`Find the value of \(k\) for which \(\displaystyle\lim_{x\to0}\dfrac{e^{kx}-1}{\sin(2x)}=3\).`, r`\(\tfrac00\): \(\displaystyle\lim_{x\to0}\dfrac{ke^{kx}}{2\cos(2x)}=\dfrac k2\). So \(k=6\).`, "stretch"),

    sec("Summary"),
    key([
      ["Applies to", r`\(\tfrac00\) and \(\tfrac\infty\infty\) only.`],
      ["Method", r`Differentiate top and bottom separately.`],
      ["Writing", r`Two separate limits first; never "\(=\tfrac00\)".`],
      [r`\(0\cdot\infty\)`, r`Rewrite as a quotient.`],
    ]),
  ],
});
