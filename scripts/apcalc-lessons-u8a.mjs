// AP Calculus AB exam prep — Unit 8 (Applications of Integration), lessons 8.1–8.5.
// Original wording, examples, numbers and figures throughout (see u1a for notes).
// The examples here are deliberately not reused in the question bank, the
// free-response questions or the worksheets: each of those has its own set.
import { r, lesson, lede, goals, sec, p, disp, def, thm, exam, mistake, justify, ex, pq, key, table } from "./apcalc/kit.mjs";
import { plot, figure, C } from "./apcalc/fig.mjs";

export const u8a = {};

// ───────────────────────── 8.1 ─────────────────────────
u8a["8.1"] = lesson({
  code: "8.1", unit: 8, official: "8.1", calc: "Both",
  title: "Average Value of a Function",
  parts: () => {
    const g = plot({ w: 380, h: 290, x: [-0.6, 4.8], y: [-0.7, 4.8], alt: "The parabola y = 4x − x² on [0, 4] with a horizontal line at its average height 8/3" });
    g.shade((x) => 4 * x - x * x, () => 0, 0, 4).curve((x) => 4 * x - x * x, 0, 4).hline(8 / 3, { color: C.alt }).label(4.05, 2.85, "y = 8/3", { color: C.alt, size: 13 }).label(2.3, 4.25, "y = f(x)");
    return [
      lede(r`To average five test scores you add them and divide by five. A function on an interval takes infinitely many values, so they cannot be added one by one. The integral does the adding, and the length of the interval does the dividing. The result, the <strong>average value</strong>, is one of the most frequently examined single ideas in the course, largely because it is so easy to confuse with something else that has "average" in its name.`),
      goals([
        r`Compute the average value of a function on an interval.`,
        r`Interpret an average value in context, with units.`,
        r`Tell average value apart from average rate of change.`,
        r`Find where a continuous function takes its average value.`,
      ]),

      sec("The definition"),
      def("Average value", r`<p>If \(f\) is continuous on \([a,b]\), its average value on \([a,b]\) is</p>\[ f_{\text{avg}}=\frac{1}{b-a}\int_a^b f(x)\,dx. \]`),
      p(r`Rearranged, \(f_{\text{avg}}\cdot(b-a)=\displaystyle\int_a^b f(x)\,dx\): the rectangle on \([a,b]\) whose height is the average value has exactly the same area as the region under the curve. For \(f(x)=4x-x^2\) on \([0,4]\) the integral is \(\tfrac{32}{3}\), so the average value is \(\tfrac14\cdot\tfrac{32}{3}=\tfrac83\).`),
      figure(g, r`The rectangle of height \(\tfrac83\) on \([0,4]\) has the same area as the shaded region.`),

      sec("Two things called average"),
      table(
        ["", "Average value of \\(f\\)", "Average rate of change of \\(f\\)"],
        [
          ["Formula", r`\(\dfrac{1}{b-a}\displaystyle\int_a^b f(x)\,dx\)`, r`\(\dfrac{f(b)-f(a)}{b-a}\)`],
          ["Needs", "an integral", "two function values"],
          ["Units", r`the units of \(f\)`, r`units of \(f\) per unit of \(x\)`],
          ["Picture", "mean height of the graph", "slope of a secant line"],
        ],
      ),
      p(r`The two are linked. Because \(\displaystyle\int_a^b f'(x)\,dx=f(b)-f(a)\), the average <em>value</em> of \(f'\) on \([a,b]\) is the average <em>rate of change</em> of \(f\) on \([a,b]\). In motion: the average value of velocity is displacement divided by time.`),

      sec("The function reaches its average"),
      thm("Mean Value Theorem for integrals", r`<p>If \(f\) is continuous on \([a,b]\), there is at least one \(c\) in \([a,b]\) with \(f(c)=f_{\text{avg}}\).</p>`),
      p(r`In the figure the curve crosses the dashed line twice, so there are two such values of \(c\).`),

      sec("Worked examples"),
      ex("core", "A polynomial", r`Find the average value of \(f(x)=3x^2\) on \([1,3]\).`, [
        r`\(\displaystyle\int_1^3 3x^2\,dx=\Big[x^3\Big]_1^3=27-1=26\).`,
        r`Divide by the length of the interval, \(3-1=2\).`,
      ], r`\(f_{\text{avg}}=13\).`),
      ex("exam", "An average in context", r`The temperature in a greenhouse is \(T(t)=20+6\sin\!\left(\dfrac{\pi t}{12}\right)\) °C, where \(t\) is hours after 6 a.m. Find the average temperature for \(0\le t\le12\), and state its units.`, [
        r`\(\displaystyle\int_0^{12}T(t)\,dt=\Big[20t-\frac{72}{\pi}\cos\!\left(\frac{\pi t}{12}\right)\Big]_0^{12}=240+\frac{72}{\pi}+\frac{72}{\pi}=240+\frac{144}{\pi}\).`,
        r`Divide by 12: \(20+\dfrac{12}{\pi}\).`,
      ], r`About \(23.820\) °C. The units are those of \(T\), not °C per hour.`),
      ex("exam", "Where the average is reached", r`Let \(f(x)=x^2\) on \([0,3]\). Find the value of \(c\) guaranteed by the Mean Value Theorem for integrals.`, [
        r`\(f_{\text{avg}}=\dfrac13\displaystyle\int_0^3x^2\,dx=\dfrac13\cdot9=3\).`,
        r`Solve \(c^2=3\) with \(c\) in \([0,3]\).`,
      ], r`\(c=\sqrt3\).`),
      ex("stretch", "Average velocity two ways", r`A particle has velocity \(v(t)=3t^2-2t\) metres per second. Find the average value of \(v\) on \([1,4]\) and explain what it measures.`, [
        r`\(\displaystyle\int_1^4(3t^2-2t)\,dt=\Big[t^3-t^2\Big]_1^4=48-0=48\).`,
        r`Average value: \(\dfrac{48}{3}=16\) metres per second.`,
        r`The integral of velocity is displacement, so this is displacement divided by elapsed time.`,
      ], r`16 m/s: the particle's average velocity. Note that \(\dfrac{v(4)-v(1)}{3}=13\) is something else, its average <em>acceleration</em>.`),

      sec("Common errors"),
      mistake("forgetting to divide", r`<p>\(\displaystyle\int_a^bf(x)\,dx\) on its own is a total, not an average. The factor \(\dfrac{1}{b-a}\) is the whole point.</p>`),
      mistake("using the average rate of change formula", r`<p>"Average value of \(f\)" never means \(\dfrac{f(b)-f(a)}{b-a}\). If the question gives a formula or a graph of \(f\) and asks for its average value, an integral is required.</p>`),
      mistake("averaging the endpoints", r`<p>\(\dfrac{f(a)+f(b)}{2}\) is the average of two values. It equals the average value only for a linear function.</p>`),
      mistake("the wrong units", r`<p>An average value has the same units as the function. Average temperature is in degrees, not degrees per hour.</p>`),

      sec("Write it so it scores"),
      justify(
        r`The rate at which water flows through a pipe is \(R(t)\) litres per minute. Using correct units, explain the meaning of \(\dfrac{1}{10}\displaystyle\int_{5}^{15}R(t)\,dt\).`,
        r`It is the average rate, in litres per minute, at which water flows through the pipe from \(t=5\) to \(t=15\) minutes.`,
        r`The answer names the quantity (average rate of flow), gives the units of \(R\) itself, and states the interval. Saying "the average amount of water" would lose the point: the integral alone is an amount, but dividing by 10 minutes turns it back into a rate.`,
      ),
      exam(r`<p>In free response, write the set-up \(\dfrac{1}{b-a}\displaystyle\int_a^bf(x)\,dx\) with the numbers in place before evaluating. On the calculator section that line earns the set-up point even if the decimal that follows is wrong.</p>`),

      sec("Practice"),
      pq(r`Find the average value of \(f(x)=\sqrt x\) on \([0,9]\).`, r`\(\dfrac19\cdot\dfrac23\cdot27=2\).`, "core"),
      pq(r`Find the average value of \(f(x)=\cos x\) on \(\left[0,\dfrac{\pi}{2}\right]\).`, r`\(\dfrac{2}{\pi}\cdot1=\dfrac{2}{\pi}\).`, "core"),
      pq(r`Find the average value of \(f(x)=\dfrac1x\) on \([1,e]\).`, r`\(\dfrac{1}{e-1}\displaystyle\int_1^e\dfrac{dx}{x}=\dfrac{1}{e-1}\).`, "exam"),
      pq(r`The average value of \(f(x)=kx\) on \([0,4]\) is 6. Find \(k\).`, r`\(\dfrac14\cdot8k=2k=6\), so \(k=3\).`, "exam"),
      pq(r`(Calculator.) Find the average value of \(f(x)=\sqrt{1+x^3}\) on \([0,2]\), to three decimal places.`, r`\(\dfrac12\displaystyle\int_0^2\sqrt{1+x^3}\,dx=\dfrac12(3.2413)\approx1.621\).`, "exam"),
      pq(r`A differentiable function \(h\) has \(h(2)=7\) and \(h(10)=-9\). What is the average value of \(h'\) on \([2,10]\)?`, r`\(\dfrac{1}{8}\displaystyle\int_2^{10}h'(x)\,dx=\dfrac{h(10)-h(2)}{8}=-2\).`, "stretch"),

      sec("Summary"),
      key([
        ["Average value", r`\(\dfrac{1}{b-a}\displaystyle\int_a^bf(x)\,dx\).`],
        ["Picture", "The height of the equal-area rectangle."],
        ["Not the same as", r`\(\dfrac{f(b)-f(a)}{b-a}\), which is a slope.`],
        ["Link", r`Average value of \(f'\) equals average rate of change of \(f\).`],
      ]),
    ];
  },
});

// ───────────────────────── 8.2 ─────────────────────────
u8a["8.2"] = lesson({
  code: "8.2", unit: 8, official: "8.2", calc: "Both",
  title: "Position, Velocity and Acceleration by Integration",
  parts: () => {
    const v = (t) => t * t - 4 * t + 3;
    const g = plot({ w: 380, h: 280, x: [-0.5, 4.7], y: [-1.8, 3.8], xName: "t", yName: "v", alt: "Graph of v(t) = t² − 4t + 3 on [0, 4], above the axis on [0, 1] and [3, 4] and below it on [1, 3]" });
    g.shade(v, () => 0, 0, 1, { color: C.green }).shade(v, () => 0, 1, 3, { color: C.alt }).shade(v, () => 0, 3, 4, { color: C.green }).curve(v, 0, 4).label(0.2, 0.7, "4/3", { plain: true, size: 13 }).label(1.75, -0.45, "4/3", { plain: true, size: 13 }).label(3.45, 0.45, "4/3", { plain: true, size: 13 });
    return [
      lede(r`In Unit 4 you differentiated position to get velocity. This lesson runs the film backwards. Integrating velocity tells you how far a particle has moved; and depending on whether you integrate \(v\) or \(|v|\), "how far" means two different things. Almost every motion question on the exam turns on that distinction.`),
      goals([
        r`Find displacement and total distance travelled from a velocity function.`,
        r`Find a position at a given time from a velocity and one known position.`,
        r`Recover velocity from acceleration and an initial velocity.`,
        r`Use the calculator for \(\displaystyle\int|v(t)|\,dt\), and write the set-up that earns credit.`,
      ]),

      sec("Three integrals"),
      table(
        ["Quantity", "Integral", "Meaning"],
        [
          ["Displacement", r`\(\displaystyle\int_a^bv(t)\,dt\)`, "net change in position; can be negative"],
          ["Total distance", r`\(\displaystyle\int_a^b|v(t)|\,dt\)`, "ground covered; never negative"],
          ["Position", r`\(x(b)=x(a)+\displaystyle\int_a^bv(t)\,dt\)`, "where the particle is at time \\(b\\)"],
          ["Velocity", r`\(v(b)=v(a)+\displaystyle\int_a^ba(t)\,dt\)`, "the same idea one level up"],
        ],
      ),
      p(r`Without a calculator, total distance needs the times at which \(v\) changes sign. Split the interval there, integrate each piece, and add the absolute values.`),
      figure(g, r`For \(v(t)=t^2-4t+3\): the areas above the axis count forwards, the area below counts backwards. Displacement is \(\tfrac43-\tfrac43+\tfrac43\); total distance is \(\tfrac43+\tfrac43+\tfrac43\).`),

      sec("Worked examples"),
      ex("core", "Displacement and distance", r`A particle moves along the \(x\)-axis with \(v(t)=t^2-4t+3\) for \(0\le t\le4\). Find its displacement and the total distance it travels.`, [
        r`Displacement: \(\displaystyle\int_0^4(t^2-4t+3)\,dt=\Big[\tfrac{t^3}{3}-2t^2+3t\Big]_0^4=\tfrac{64}{3}-32+12=\tfrac43\).`,
        r`\(v(t)=(t-1)(t-3)\) changes sign at \(t=1\) and \(t=3\).`,
        r`The three pieces are \(\displaystyle\int_0^1v=\tfrac43\), \(\displaystyle\int_1^3v=-\tfrac43\) and \(\displaystyle\int_3^4v=\tfrac43\).`,
      ], r`Displacement \(\tfrac43\); total distance \(\tfrac43+\tfrac43+\tfrac43=4\).`),
      ex("exam", "Where is it?", r`The particle above is at \(x=2\) when \(t=0\). Find its position at \(t=4\), and its position when it is farthest to the left on \([0,4]\).`, [
        r`\(x(4)=x(0)+\displaystyle\int_0^4v(t)\,dt=2+\tfrac43=\tfrac{10}{3}\).`,
        r`The particle moves left only on \((1,3)\), so the candidates for the leftmost position are \(t=0\) and \(t=3\).`,
        r`\(x(3)=2+\tfrac43-\tfrac43=2\), the same as \(x(0)=2\).`,
      ], r`\(x(4)=\tfrac{10}{3}\). The leftmost position is \(x=2\), reached at \(t=0\) and again at \(t=3\).`),
      ex("exam", "With the calculator", r`A particle has velocity \(v(t)=t\cos t\) for \(0\le t\le5\). Find its displacement and the total distance travelled, to three decimal places.`, [
        r`Displacement: \(\displaystyle\int_0^5t\cos t\,dt\approx-5.511\).`,
        r`Total distance: \(\displaystyle\int_0^5|t\cos t|\,dt\approx7.055\).`,
      ], r`Write both integrals on the page exactly as above, then the decimals. There is no need to find where \(v\) changes sign: the absolute value does that work.`),
      ex("stretch", "Starting from acceleration", r`A particle has acceleration \(a(t)=6t-12\), with \(v(0)=9\) and \(x(0)=0\). Find the total distance travelled for \(0\le t\le4\).`, [
        r`\(v(t)=9+\displaystyle\int_0^t(6s-12)\,ds=3t^2-12t+9=3(t-1)(t-3)\).`,
        r`\(x(t)=t^3-6t^2+9t\), so \(x(0)=0\), \(x(1)=4\), \(x(3)=0\), \(x(4)=4\).`,
        r`The particle goes from 0 to 4, back to 0, then to 4 again.`,
      ], r`Total distance \(4+4+4=12\); displacement only 4.`),

      sec("Common errors"),
      mistake("giving displacement when distance is asked", r`<p>"Total distance travelled" always means \(\displaystyle\int|v|\). If the velocity changes sign and your answer came from a single antiderivative evaluation, it is a displacement.</p>`),
      mistake("forgetting the initial position", r`<p>\(\displaystyle\int_0^4v(t)\,dt\) is a change in position. The position itself is \(x(0)\) plus that change.</p>`),
      mistake("absolute value in the wrong place", r`<p>\(\left|\displaystyle\int_a^bv(t)\,dt\right|\) is the size of the displacement. Total distance is \(\displaystyle\int_a^b|v(t)|\,dt\), with the bars inside.</p>`),
      mistake("losing the constant between levels", r`<p>Going from \(a(t)\) to \(v(t)\) and again from \(v(t)\) to \(x(t)\) each brings its own constant, fixed by its own initial condition.</p>`),

      sec("Write it so it scores"),
      justify(
        r`A particle moves along the \(x\)-axis with velocity \(v(t)\) for \(0\le t\le6\), and \(x(0)=-3\). Write, but do not evaluate, an expression for the position of the particle at time \(t=6\) and an expression for the total distance it travels.`,
        r`\(x(6)=-3+\displaystyle\int_0^6v(t)\,dt\). &nbsp; Total distance \(=\displaystyle\int_0^6|v(t)|\,dt\).`,
        r`The position expression shows the initial position and a definite integral with both limits; the distance expression has the absolute value inside the integral. Each is one point, earned by the set-up alone.`,
      ),
      exam(r`<p>When a velocity is given as a graph, displacement and distance come from areas: add signed areas for displacement, unsigned areas for distance. No antiderivative is needed, and none is available.</p>`),

      sec("Practice"),
      pq(r`A particle has \(v(t)=2t-6\) for \(0\le t\le5\). Find its displacement and total distance.`, r`Displacement \(\Big[t^2-6t\Big]_0^5=-5\). It turns at \(t=3\): \(\displaystyle\int_0^3v=-9\), \(\displaystyle\int_3^5v=4\). Distance \(9+4=13\).`, "core"),
      pq(r`A particle has \(v(t)=\cos t\) for \(0\le t\le\pi\). Find its displacement and total distance.`, r`Displacement \(\sin\pi-\sin0=0\). Distance \(1+1=2\).`, "core"),
      pq(r`A particle has \(v(t)=3t^2\) and \(x(2)=5\). Find \(x(3)\).`, r`\(5+\displaystyle\int_2^33t^2\,dt=5+19=24\).`, "exam"),
      pq(r`A ball is thrown upward with \(v(0)=20\) m/s and acceleration \(-10\) m/s². Find the total distance it travels in the first 3 seconds.`, r`\(v(t)=20-10t\), zero at \(t=2\). Up: \(\displaystyle\int_0^2v=20\). Down: \(\left|\displaystyle\int_2^3v\right|=5\). Total 25 m.`, "exam"),
      pq(r`(Calculator.) A particle has \(v(t)=e^{t/2}-3\) for \(0\le t\le4\). Find the total distance travelled, to three decimal places.`, r`\(\displaystyle\int_0^4\left|e^{t/2}-3\right|dt\approx5.961\). (The displacement is only \(0.778\).)`, "exam"),
      pq(r`For a particle with velocity \(v\), \(\displaystyle\int_0^8v(t)\,dt=-2\) and \(\displaystyle\int_0^8|v(t)|\,dt=10\). How far did it travel in the positive direction?`, r`Let \(P\) and \(N\) be the distances travelled in the positive and negative directions. \(P-N=-2\) and \(P+N=10\), so \(P=4\).`, "stretch"),

      sec("Summary"),
      key([
        ["Displacement", r`\(\displaystyle\int_a^bv\,dt\): net change.`],
        ["Distance", r`\(\displaystyle\int_a^b|v|\,dt\): split where \(v\) changes sign.`],
        ["Position", r`Known position plus displacement.`],
        ["From acceleration", r`Integrate twice, one condition each time.`],
      ]),
    ];
  },
});

// ───────────────────────── 8.3 ─────────────────────────
u8a["8.3"] = lesson({
  code: "8.3", unit: 8, official: "8.3", calc: "Calculator",
  title: "Rate In, Rate Out",
  parts: () => [
    lede(r`Water runs into a reservoir while a town draws it out. Cars arrive at a ferry terminal while the ferry loads them. In each case an amount is being pushed up by one rate and pulled down by another, and you are asked how much there is, when there is the most, and what a particular integral means. This is the single most common setting for a calculator free-response question, and the method never changes.`),
    goals([
      r`Write an amount at time \(t\) as an initial amount plus an integral of a net rate.`,
      r`Decide whether an amount is increasing or decreasing at a given time.`,
      r`Find when an amount is greatest or least, with justification.`,
      r`Interpret an integral of a rate, with units.`,
    ]),

    sec("The one equation"),
    disp(r`A(t)=A(0)+\int_0^t\big[\text{in}(s)-\text{out}(s)\big]\,ds\qquad\Longrightarrow\qquad A'(t)=\text{in}(t)-\text{out}(t)`),
    p(r`Everything follows from these two statements. The amount is increasing when the rate in exceeds the rate out. Its critical points are the times at which the two rates are equal. An integral of the rate in alone is the total amount that entered, and an integral of the net rate is the change in the amount.`),

    sec("Reading the question"),
    table(
      ["The question asks", "What to compute"],
      [
        [r`How much entered from \(t=a\) to \(t=b\)?`, r`\(\displaystyle\int_a^b\text{in}(t)\,dt\)`],
        [r`How much is there at \(t=b\)?`, r`\(A(0)+\displaystyle\int_0^b\big[\text{in}(t)-\text{out}(t)\big]dt\)`],
        [r`Is the amount increasing at \(t=c\)?`, r`the sign of \(\text{in}(c)-\text{out}(c)\)`],
        [r`When is the amount greatest?`, r`solve \(\text{in}(t)=\text{out}(t)\), then compare with the endpoints`],
        [r`How fast is the rate itself changing?`, r`a derivative of the rate, in units per time squared`],
      ],
    ),

    sec("Worked examples"),
    ex("core", "By hand first", r`A tank holds 50 litres at \(t=0\). Water enters at a constant 6 litres per minute and drains at \(0.5t\) litres per minute. Find the amount at \(t=4\), and the greatest amount in the tank for \(0\le t\le20\).`, [
      r`\(A(t)=50+\displaystyle\int_0^t(6-0.5s)\,ds=50+6t-0.25t^2\), so \(A(4)=70\).`,
      r`\(A'(t)=6-0.5t=0\) at \(t=12\); \(A'\) changes from positive to negative there.`,
      r`Compare: \(A(0)=50\), \(A(12)=86\), \(A(20)=70\).`,
    ], r`70 litres at \(t=4\); the greatest amount is 86 litres, at \(t=12\).`),
    ex("exam", "A full calculator question", r`A reservoir holds 30 thousand litres at \(t=0\). For \(0\le t\le8\) hours, water flows in at \(I(t)=12+5\sin\!\left(\dfrac t2\right)\) and is drawn out at \(O(t)=0.4t^2\), both in thousands of litres per hour. (a) How much water flows in during the 8 hours? (b) Is the amount in the reservoir increasing or decreasing at \(t=3\)? (c) How much water is in the reservoir at \(t=8\)? (d) At what time is the amount greatest?`, [
      r`(a) \(\displaystyle\int_0^8I(t)\,dt\approx112.536\) thousand litres.`,
      r`(b) \(I(3)\approx16.987\) and \(O(3)=3.6\). Since \(I(3)\gt O(3)\), the amount is increasing.`,
      r`(c) \(30+\displaystyle\int_0^8\big[I(t)-O(t)\big]dt\approx74.270\) thousand litres.`,
      r`(d) \(I(t)=O(t)\) at \(t\approx5.763\). \(A'=I-O\) is positive before and negative after, and this is the only critical point, so the amount is greatest there.`,
    ], r`The greatest amount is \(30+\displaystyle\int_0^{5.763}(I-O)\,dt\approx93.299\) thousand litres.`),
    ex("exam", "What does it mean?", r`With \(I\) as above, explain the meaning of \(\displaystyle\int_2^6I(t)\,dt\) and of \(I'(4)\), with units.`, [
      r`The integral of a rate over an interval is the amount accumulated over that interval.`,
      r`The derivative of a rate is how quickly that rate is itself changing.`,
    ], r`\(\displaystyle\int_2^6I(t)\,dt\) is the amount of water, in thousands of litres, that flows into the reservoir from \(t=2\) to \(t=6\) hours. \(I'(4)\) is the rate at which the inflow rate is changing at \(t=4\), in thousands of litres per hour per hour.`),
    ex("stretch", "The least amount", r`For the reservoir, find the least amount of water during \(0\le t\le8\). Justify your answer.`, [
      r`The candidates are the endpoints and the critical point \(t\approx5.763\).`,
      r`\(A(0)=30\), \(A(5.763)\approx93.299\), \(A(8)\approx74.270\).`,
    ], r`The least amount is 30 thousand litres, at \(t=0\). A minimum on a closed interval can sit at an endpoint; the candidates test finds it without any second-derivative work.`),

    sec("Common errors"),
    mistake("leaving out the starting amount", r`<p>\(\displaystyle\int_0^8(I-O)\,dt\) is how much the amount <em>changed</em>. The amount present is 30 plus that.</p>`),
    mistake("setting the wrong thing to zero", r`<p>The amount is greatest where its derivative, in minus out, is zero. Solving \(I'(t)=0\) finds when the inflow is fastest, which is a different question.</p>`),
    mistake("a maximum without justification", r`<p>"The rates are equal at \(t=5.763\)" identifies a critical point. To earn the justification point, add the sign change of \(I-O\) or compare with the endpoint values.</p>`),
    mistake("rounding too early", r`<p>Store \(5.763140\ldots\) in the calculator and use the stored value as the limit of integration. Retyping a rounded limit can move the third decimal place of the answer.</p>`),

    sec("Write it so it scores"),
    justify(
      r`Using the reservoir above: is the amount of water increasing or decreasing at time \(t=7\)? Give a reason for your answer.`,
      r`\(I(7)\approx10.246\) and \(O(7)=19.6\). Since \(I(7)\lt O(7)\), the rate of change of the amount, \(I(7)-O(7)\), is negative, so the amount of water is decreasing at \(t=7\).`,
      r`Both rates are evaluated, they are compared explicitly, and the conclusion is tied to the sign of the net rate. "Decreasing because more is leaving" with no numbers earns nothing.`,
    ),
    exam(r`<p>These questions are written for the calculator, and the functions are chosen so that no antiderivative exists. Do not try to integrate by hand. Write the integral, evaluate it on the calculator, and give three decimal places.</p>`),

    sec("Practice"),
    pq(r`Water leaks from a barrel at \(r(t)=4-0.5t\) litres per hour for \(0\le t\le8\). How much leaks out in the 8 hours?`, r`\(\displaystyle\int_0^8(4-0.5t)\,dt=32-16=16\) litres.`, "core"),
    pq(r`People enter a museum at \(E(t)\) people per hour, where \(t\) is hours after opening. Explain the meaning of \(\displaystyle\int_0^3E(t)\,dt\).`, r`The number of people who enter the museum during the first 3 hours after opening.`, "core"),
    pq(r`(Calculator.) Sand is removed from a beach at \(15+5\cos\!\left(\dfrac t3\right)\) cubic metres per hour. How much is removed for \(0\le t\le6\)?`, r`\(\displaystyle\int_0^6\left(15+5\cos\tfrac t3\right)dt=90+15\sin2\approx103.639\) cubic metres.`, "exam"),
    pq(r`A tank is filled at \(3t^2\) litres per minute and drained at 12 litres per minute, for \(0\le t\le3\). At what time is the amount of water least?`, r`\(A'(t)=3t^2-12\) is negative for \(t\lt2\) and positive for \(t\gt2\), so the amount is least at \(t=2\).`, "exam"),
    pq(r`For the tank in the previous question, what is the net change in the amount of water over the 3 minutes?`, r`\(\displaystyle\int_0^3(3t^2-12)\,dt=27-36=-9\) litres.`, "exam"),
    pq(r`A rate in \(f\) and a rate out \(g\) are continuous on \([0,10]\), with \(f(t)\gt g(t)\) for \(0\le t\lt6\) and \(f(t)\lt g(t)\) for \(6\lt t\le10\). At what time is the amount greatest? Justify.`, r`At \(t=6\). The derivative of the amount, \(f-g\), changes from positive to negative there and nowhere else, so the amount rises until \(t=6\) and falls afterwards.`, "stretch"),

    sec("Summary"),
    key([
      ["Amount", r`Start \(+\displaystyle\int(\text{in}-\text{out})\).`],
      ["Increasing?", r`Compare in and out at that time.`],
      ["Greatest or least", r`In \(=\) out, then check the endpoints.`],
      ["Meaning", r`Integral of a rate is an amount; derivative of a rate is a rate of a rate.`],
    ]),
  ],
});

// ───────────────────────── 8.4 ─────────────────────────
u8a["8.4"] = lesson({
  code: "8.4", unit: 8, official: "8.4", calc: "Both",
  title: "Area Between Curves, Slicing Vertically",
  parts: () => {
    const g = plot({ w: 380, h: 300, x: [-2.6, 3.4], y: [-0.8, 5.6], alt: "The region between the line y = x + 2 and the parabola y = x², from x = −1 to x = 2" });
    g.shade((x) => x + 2, (x) => x * x, -1, 2).curve((x) => x * x, -2.3, 2.4).curve((x) => x + 2, -2.6, 3.2, { color: C.alt }).dot(-1, 1).dot(2, 4).label(-2.45, 4.2, "y = x²").label(1.9, 5.05, "y = x + 2", { color: C.alt, anchor: "end" });
    g.seg(0.8, 0.64, 0.8, 2.8, { color: C.gold, width: 3 });
    return [
      lede(r`The area under one curve is an integral of its height. The area between two curves is an integral of the gap between them. Picture the region cut into thin vertical strips: each strip runs from the lower curve up to the upper one, so its height is "top minus bottom". Add up the strips and you have the area.`),
      goals([
        r`Set up and evaluate the area between two curves as an integral in \(x\).`,
        r`Find the limits of integration from intersection points.`,
        r`Decide which curve is on top.`,
        r`Use the calculator when the intersections are not exact.`,
      ]),

      sec("Top minus bottom"),
      thm("Area between two curves", r`<p>If \(f(x)\ge g(x)\) for all \(x\) in \([a,b]\), the area of the region between the graphs from \(x=a\) to \(x=b\) is</p>\[ A=\int_a^b\big[f(x)-g(x)\big]\,dx. \]`),
      p(r`It does not matter whether the curves are above or below the \(x\)-axis. The height of a strip is the difference of the two \(y\)-values, and a difference is unaffected by where the axis happens to be.`),
      figure(g, r`One vertical strip (gold) runs from the parabola up to the line. Its height is \((x+2)-x^2\).`),
      p(r`The method is always the same three steps. Find where the curves meet. Decide which is on top between those points, by testing one value of \(x\). Integrate top minus bottom.`),

      sec("Worked examples"),
      ex("core", "A line and a parabola", r`Find the area of the region enclosed by \(y=x^2\) and \(y=x+2\).`, [
        r`Intersections: \(x^2=x+2\) gives \((x-2)(x+1)=0\), so \(x=-1\) and \(x=2\).`,
        r`At \(x=0\) the line gives 2 and the parabola gives 0: the line is on top.`,
        r`\(\displaystyle\int_{-1}^{2}(x+2-x^2)\,dx=\Big[\tfrac{x^2}{2}+2x-\tfrac{x^3}{3}\Big]_{-1}^{2}=\tfrac{10}{3}-\left(-\tfrac76\right)\).`,
      ], r`Area \(=\tfrac92\).`),
      ex("exam", "A root and a line", r`Find the area of the region bounded by \(y=\sqrt x\) and \(y=\dfrac x2\).`, [
        r`\(\sqrt x=\dfrac x2\) gives \(x=\dfrac{x^2}{4}\), so \(x=0\) or \(x=4\).`,
        r`At \(x=1\): \(\sqrt1=1\gt\tfrac12\). The root is on top.`,
        r`\(\displaystyle\int_0^4\left(\sqrt x-\frac x2\right)dx=\Big[\tfrac23x^{3/2}-\tfrac{x^2}{4}\Big]_0^4=\tfrac{16}{3}-4\).`,
      ], r`Area \(=\tfrac43\).`),
      ex("exam", "Intersections from the calculator", r`Find the area of the region enclosed by \(y=\cos x\) and \(y=x^2\), to three decimal places.`, [
        r`The curves meet where \(\cos x=x^2\): \(x\approx\pm0.824132\). Store this value as \(a\).`,
        r`Between them \(\cos x\) is on top (at \(x=0\): \(1\gt0\)).`,
        r`\(A=\displaystyle\int_{-a}^{a}(\cos x-x^2)\,dx\).`,
      ], r`Area \(\approx1.095\).`),
      ex("stretch", "Cutting a region in half", r`The region under \(y=\dfrac{1}{x^2}\) from \(x=1\) to \(x=4\) is divided into two regions of equal area by the vertical line \(x=k\). Find \(k\).`, [
        r`Total area: \(\displaystyle\int_1^4x^{-2}\,dx=\Big[-\tfrac1x\Big]_1^4=\tfrac34\).`,
        r`Area to the left of \(x=k\): \(1-\dfrac1k\). Set this equal to \(\tfrac38\).`,
      ], r`\(\dfrac1k=\dfrac58\), so \(k=\dfrac85\). Note that this is not the midpoint of \([1,4]\): the region is taller on the left.`),

      sec("Common errors"),
      mistake("bottom minus top", r`<p>A negative area means the subtraction is the wrong way round. Test one \(x\)-value between the intersections before you integrate.</p>`),
      mistake("using the wrong limits", r`<p>The limits are the \(x\)-coordinates of the intersection points, not the \(y\)-coordinates and not the \(x\)-intercepts of either curve.</p>`),
      mistake("subtracting areas that are not both under the top curve", r`<p>"Area under the top minus area under the bottom" works, and gives the same integral, provided both are taken over the same interval \([a,b]\).</p>`),
      mistake("dropping the brackets", r`<p>\(\displaystyle\int(x+2-x^2)\,dx\), not \(\displaystyle\int x+2-x^2\,dx\) with a stray sign. Subtracting a bottom curve with several terms changes every one of its signs.</p>`),

      sec("Write it so it scores"),
      justify(
        r`Let \(R\) be the region enclosed by the graphs of \(f(x)=6-x^2\) and \(g(x)=x\). Write, but do not evaluate, an integral expression for the area of \(R\).`,
        r`\(6-x^2=x\) when \(x=-3\) and \(x=2\), and \(f(x)\ge g(x)\) between them. Area \(=\displaystyle\int_{-3}^{2}\big[(6-x^2)-x\big]\,dx\).`,
        r`A reader awards one point for the integrand (top minus bottom, in the right order) and one for the limits. Showing the equation that produced the limits protects the limits point.`,
      ),
      exam(r`<p>On the calculator section the intersection points are usually not exact. Write the equation you solved, write the limits to at least three decimal places (or as stored letters), and write the integral before the answer.</p>`),

      sec("Practice"),
      pq(r`Find the area of the region enclosed by \(y=9-x^2\) and \(y=5\).`, r`They meet at \(x=\pm2\). \(\displaystyle\int_{-2}^{2}(4-x^2)\,dx=16-\tfrac{16}{3}=\tfrac{32}{3}\).`, "core"),
      pq(r`Find the area of the region enclosed by \(y=x^2+1\) and \(y=3-x\).`, r`\(x^2+x-2=0\): \(x=-2,1\). \(\displaystyle\int_{-2}^{1}(2-x-x^2)\,dx=\tfrac92\).`, "core"),
      pq(r`Find the area of the region bounded by \(y=e^x\), \(y=e^{-x}\) and \(x=1\).`, r`The curves meet at \(x=0\). \(\displaystyle\int_0^1(e^x-e^{-x})\,dx=e+\dfrac1e-2\).`, "exam"),
      pq(r`(Calculator.) Find the area of the region in the first quadrant bounded by \(y=e^{-x}\), \(y=x\) and the \(y\)-axis.`, r`\(e^{-x}=x\) at \(x\approx0.567\). \(\displaystyle\int_0^{0.567}(e^{-x}-x)\,dx\approx0.272\).`, "exam"),
      pq(r`Two curves \(f\) and \(g\) meet only at \(x=1\) and \(x=5\), and \(g(3)\gt f(3)\). Write an integral for the area between them.`, r`\(g\) is on top throughout \([1,5]\), since the curves do not cross inside. \(\displaystyle\int_1^5\big[g(x)-f(x)\big]dx\).`, "exam"),
      pq(r`The line \(x=k\) divides the region under \(y=\sqrt x\) on \([0,4]\) into two regions of equal area. Find \(k\).`, r`Total \(\tfrac{16}{3}\). \(\tfrac23k^{3/2}=\tfrac83\) gives \(k^{3/2}=4\), so \(k=4^{2/3}\approx2.520\).`, "stretch"),

      sec("Summary"),
      key([
        ["Formula", r`\(\displaystyle\int_a^b(\text{top}-\text{bottom})\,dx\).`],
        ["Limits", "Where the curves intersect."],
        ["Which is on top", "Test one value between the limits."],
        ["Axis", "Irrelevant: only the gap matters."],
      ]),
    ];
  },
});

// ───────────────────────── 8.5 ─────────────────────────
u8a["8.5"] = lesson({
  code: "8.5", unit: 8, official: "8.5", calc: "No calculator",
  title: "Area Between Curves, Slicing Horizontally",
  parts: () => {
    const g = plot({ w: 380, h: 280, x: [-0.6, 5], y: [-0.7, 2.9], alt: "The region bounded by y = √x, the line y = x − 2 and the x-axis" });
    g.shade((x) => Math.sqrt(x), () => 0, 0, 2).shade((x) => Math.sqrt(x), (x) => x - 2, 2, 4).curve((x) => Math.sqrt(x), 0, 4.8).curve((x) => x - 2, 1.4, 4.8, { color: C.alt }).dot(4, 2).dot(2, 0).label(0.9, 1.45, "y = √x").label(3.3, 0.6, "y = x − 2", { color: C.alt });
    g.seg(1, 1, 3, 1, { color: C.gold, width: 3 });
    return [
      lede(r`Some regions are awkward to cut vertically: the curve on the bottom changes part of the way across, and one integral becomes two. Turn your head. Cut the same region into horizontal strips and it may have one curve on the right and one on the left from bottom to top. The price is that everything must be written in terms of \(y\).`),
      goals([
        r`Rewrite a curve as \(x=g(y)\).`,
        r`Set up and evaluate an area as an integral in \(y\).`,
        r`Recognise when horizontal strips need fewer integrals.`,
        r`Use \(y\)-coordinates of intersections as limits.`,
      ]),

      sec("Right minus left"),
      thm("Area by horizontal strips", r`<p>If a region lies between \(x=f(y)\) on the right and \(x=g(y)\) on the left for \(c\le y\le d\), its area is</p>\[ A=\int_c^d\big[f(y)-g(y)\big]\,dy. \]`),
      p(r`A horizontal strip at height \(y\) has length "right minus left" and thickness \(dy\). The limits are the lowest and highest \(y\)-values in the region. To use the formula, each boundary must be solved for \(x\): \(y=\sqrt x\) becomes \(x=y^2\), and \(y=x-2\) becomes \(x=y+2\).`),
      figure(g, r`Cut vertically, the bottom boundary changes at \(x=2\) from the axis to the line. Cut horizontally (gold strip), every strip runs from the curve \(x=y^2\) to the line \(x=y+2\).`),

      sec("Choosing the direction"),
      p(r`Sketch the region and imagine a strip sliding across it. If a vertical strip always has the same curve at its top and the same curve at its bottom, integrate in \(x\). If a horizontal strip always has the same curve at its right end and the same curve at its left end, integrate in \(y\). If both work, choose the one with the easier algebra.`),

      sec("Worked examples"),
      ex("core", "Two curves given as x in terms of y", r`Find the area of the region enclosed by \(x=y^2\) and \(x=2y\).`, [
        r`\(y^2=2y\) gives \(y=0\) and \(y=2\).`,
        r`At \(y=1\): \(2y=2\) and \(y^2=1\), so the line is on the right.`,
        r`\(\displaystyle\int_0^2(2y-y^2)\,dy=\Big[y^2-\tfrac{y^3}{3}\Big]_0^2=4-\tfrac83\).`,
      ], r`Area \(=\tfrac43\).`),
      ex("exam", "One integral in place of two", r`Find the area of the region bounded by \(y=\sqrt x\), \(y=x-2\) and the \(x\)-axis.`, [
        r`In terms of \(y\): the right boundary is \(x=y+2\) and the left boundary is \(x=y^2\).`,
        r`They meet where \(y^2=y+2\), that is \(y=2\) (the point \((4,2)\)). The region starts at \(y=0\).`,
        r`\(\displaystyle\int_0^2(y+2-y^2)\,dy=\Big[\tfrac{y^2}{2}+2y-\tfrac{y^3}{3}\Big]_0^2=2+4-\tfrac83\).`,
      ], r`Area \(=\tfrac{10}{3}\). In \(x\) it would be \(\displaystyle\int_0^2\sqrt x\,dx+\int_2^4\big(\sqrt x-x+2\big)dx\), which gives the same value with twice the work.`),
      ex("exam", "A sideways parabola and a line", r`Find the area of the region enclosed by \(x=3-y^2\) and \(x=y+1\).`, [
        r`\(3-y^2=y+1\) gives \(y^2+y-2=0\), so \(y=-2\) and \(y=1\).`,
        r`At \(y=0\): the parabola gives \(x=3\), the line gives \(x=1\). The parabola is on the right.`,
        r`\(\displaystyle\int_{-2}^{1}(2-y-y^2)\,dy=\Big[2y-\tfrac{y^2}{2}-\tfrac{y^3}{3}\Big]_{-2}^{1}=\tfrac76-\left(-\tfrac{10}{3}\right)\).`,
      ], r`Area \(=\tfrac92\).`),
      ex("stretch", "A logarithm without integrating a logarithm", r`Find the area of the region bounded by \(y=\ln x\), the \(x\)-axis, the \(y\)-axis and the line \(y=1\).`, [
        r`\(y=\ln x\) is \(x=e^y\). The region lies between \(x=0\) on the left and \(x=e^y\) on the right, for \(0\le y\le1\).`,
        r`\(\displaystyle\int_0^1e^y\,dy=e-1\).`,
      ], r`Area \(=e-1\). No antiderivative of \(\ln x\) was needed.`),

      sec("Common errors"),
      mistake("mixing the variables", r`<p>An integral ending in \(dy\) must have an integrand in \(y\) and limits that are \(y\)-values. \(\displaystyle\int_0^4(y+2-y^2)\,dy\) uses an \(x\)-coordinate as a limit and is wrong.</p>`),
      mistake("left minus right", r`<p>The curve with the larger \(x\)-value is the one on the right. Test one value of \(y\).</p>`),
      mistake("solving for x carelessly", r`<p>\(y=x^2\) gives \(x=\sqrt y\) on the right half and \(x=-\sqrt y\) on the left half. A full parabola opening upward has both as boundaries.</p>`),
      mistake("ignoring part of the region", r`<p>With horizontal strips, check the bottom of the region as carefully as the top: the lowest \(y\)-value is often a second intersection point below the axis.</p>`),

      sec("Write it so it scores"),
      justify(
        r`Let \(R\) be the region enclosed by the graphs of \(x=y^2-4\) and \(x=2-y\). Write, but do not evaluate, an integral expression for the area of \(R\).`,
        r`\(y^2-4=2-y\) when \(y^2+y-6=0\), so \(y=-3\) and \(y=2\). For \(-3\le y\le2\) the line is to the right of the parabola. Area \(=\displaystyle\int_{-3}^{2}\big[(2-y)-(y^2-4)\big]\,dy\).`,
        r`The integrand is right minus left with its brackets, the limits are \(y\)-values, and the differential is \(dy\). All three are consistent, which is what the integrand and limits points require.`,
      ),
      exam(r`<p>A question may say "write an expression involving one or more integrals". If your set-up in \(x\) needs two integrals, that is acceptable and earns full credit; a correct set-up in \(y\) is simply quicker.</p>`),

      sec("Practice"),
      pq(r`Find the area of the region enclosed by \(x=y^2\) and \(x=4\).`, r`\(\displaystyle\int_{-2}^{2}(4-y^2)\,dy=\tfrac{32}{3}\).`, "core"),
      pq(r`Find the area of the region enclosed by \(x=y^2-1\) and \(x=1-y^2\).`, r`They meet at \(y=\pm1\). \(\displaystyle\int_{-1}^{1}(2-2y^2)\,dy=\tfrac83\).`, "core"),
      pq(r`Find the area of the region bounded by \(y=x^3\), \(y=8\) and the \(y\)-axis.`, r`\(x=y^{1/3}\). \(\displaystyle\int_0^8y^{1/3}\,dy=\tfrac34\cdot16=12\).`, "exam"),
      pq(r`Rewrite \(y=\sqrt{x-1}\) as \(x\) in terms of \(y\), and state the restriction on \(y\).`, r`\(x=y^2+1\), with \(y\ge0\).`, "exam"),
      pq(r`A region is bounded on the left by the \(y\)-axis, on the right by \(x=4y-y^2\). Find its area.`, r`\(4y-y^2=0\) at \(y=0,4\). \(\displaystyle\int_0^4(4y-y^2)\,dy=\tfrac{32}{3}\).`, "exam"),
      pq(r`The region bounded by \(y=x^2\) (for \(x\ge0\)), \(y=9\) and the \(y\)-axis is cut by the horizontal line \(y=k\) into two regions of equal area. Find \(k\).`, r`Area below \(y=k\): \(\displaystyle\int_0^k\sqrt y\,dy=\tfrac23k^{3/2}\). Total 18, so \(\tfrac23k^{3/2}=9\), \(k^{3/2}=\tfrac{27}{2}\) and \(k=\left(\tfrac{27}{2}\right)^{2/3}\approx5.670\).`, "stretch"),

      sec("Summary"),
      key([
        ["Formula", r`\(\displaystyle\int_c^d(\text{right}-\text{left})\,dy\).`],
        ["Rewrite", r`Every boundary as \(x=\ldots\) in terms of \(y\).`],
        ["Limits", r`\(y\)-values, lowest to highest.`],
        ["When", "A horizontal strip keeps the same two boundaries all the way up."],
      ]),
    ];
  },
});
