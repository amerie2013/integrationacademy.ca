// AP Calculus AB exam prep — Unit 6 (Integration), lessons 6.1–6.4.
// Original wording, examples, numbers and figures throughout (see u1a for notes).
import { r, lesson, lede, goals, sec, p, disp, def, thm, exam, mistake, justify, ex, pq, key, table } from "./apcalc/kit.mjs";
import { plot, figure, C } from "./apcalc/fig.mjs";

export const u6a = {};

// The unit's reference graph of f: line segments through
//   (−2,0) (0,4) (4,−4) (6,0) (8,2); zeros at −2, 2, 6.
// Signed areas: [−2,0] 4, [0,2] 4, [2,4] −4, [4,6] −4, [6,8] 2.
export const FPTS = [[-2, 0], [0, 4], [4, -4], [6, 0], [8, 2]];
export const fval = (x) => { for (let i = 0; i < FPTS.length - 1; i++) { const [a, ya] = FPTS[i], [b, yb] = FPTS[i + 1]; if (x >= a && x <= b) return ya + ((yb - ya) * (x - a)) / (b - a); } return NaN; };
export const fGraph = (o = {}) => {
  const g = plot({ w: 440, h: 320, x: [-3, 9], y: [-5, 5], xName: o.t ? "t" : "x", alt: "Piecewise-linear graph of f" });
  if (o.shade) { g.shade(fval, () => 0, -2, 2, { color: C.green, opacity: 0.2 }).shade(() => 0, fval, 2, 6, { color: C.alt, opacity: 0.16 }).shade(fval, () => 0, 6, 8, { color: C.green, opacity: 0.2 }); }
  g.poly(FPTS).dot(-2, 0).dot(8, 2).label(0.3, 4.3, o.t ? "y = f(t)" : "y = f(x)");
  return g;
};

// A rate graph for 6.1: R(t) litres per minute through (0,2) (4,6) (6,6) (10,0).
const RPTS = [[0, 2], [4, 6], [6, 6], [10, 0]];
const rval = (t) => (t <= 4 ? 2 + t : t <= 6 ? 6 : 6 - 1.5 * (t - 6));

// ───────────────────────── 6.1 ─────────────────────────
u6a["6.1"] = lesson({
  code: "6.1", unit: 6, official: "6.1", calc: "No calculator",
  title: "Accumulating Change",
  parts: () => {
    const g = plot({ w: 430, h: 290, x: [-1, 11], y: [-1, 7], xName: "t", yName: "R", alt: "Rate of flow against time with the area beneath shaded" });
    g.shade(rval, () => 0, 0, 10, { color: C.gold, opacity: 0.22 }).poly(RPTS).dot(0, 2).dot(10, 0).seg(4, 0, 4, 6, { color: C.grey, width: 1, dash: "4 4" }).seg(6, 0, 6, 6, { color: C.grey, width: 1, dash: "4 4" });
    g.label(1.6, 1.3, "16", { plain: true }).label(4.7, 2.7, "12", { plain: true }).label(6.8, 1.3, "12", { plain: true });
    return [
      lede(r`Differential calculus started from a quantity and asked for its rate of change. Integral calculus runs the other way: it starts from a <em>rate</em> and asks how much has accumulated. Water flows into a tank at a known rate; how much water arrived? The answer is hiding in the picture. It is the <strong>area</strong> between the rate graph and the time axis, and this lesson is about seeing why.`),
      goals([
        r`Explain why the area under a rate graph gives an accumulated change.`,
        r`Find accumulated change from a rate graph using geometry.`,
        r`Attach correct units to an accumulated quantity.`,
        r`Treat area below the axis as a decrease.`,
      ]),

      sec("Rate times time"),
      p(r`If water flows at a constant 5 litres per minute for 8 minutes, 40 litres arrive: rate × time. On a graph of rate against time that product is the area of a rectangle, 5 high and 8 wide. When the rate varies, cut the time into short pieces on each of which the rate is nearly constant. Each piece contributes a thin rectangle, and together they fill the region under the graph.`),
      thm("Accumulated change", r`<p>If \(R(t)\) is the rate of change of a quantity, the net change in that quantity from \(t=a\) to \(t=b\) is the <strong>signed area</strong> between the graph of \(R\) and the \(t\)-axis over \([a,b]\).</p>`),

      sec("Units"),
      p(r`The units of the accumulated quantity are the units of the rate multiplied by the units of the input: (litres per minute) × (minutes) = litres. Reading the units off the axes this way is also a check that you are answering the right question.`),

      sec("Area below the axis"),
      p(r`When the rate is negative the quantity is decreasing, so area lying <strong>below</strong> the axis counts as a <strong>negative</strong> contribution. The net change is (area above) − (area below). If instead the question asks how much moved in total, regardless of direction (total distance travelled, for instance), the two areas are added.`),

      sec("A worked picture"),
      figure(g, r`Water enters a tank at \(R(t)\) litres per minute. The area under the graph, split into a trapezoid, a rectangle and a triangle, is \(16+12+12=40\).`),
      p(r`Over the 10 minutes shown, 40 litres of water entered the tank. If the tank held 15 litres at \(t=0\), it holds \(15+40=55\) litres at \(t=10\). An area gives a <em>change</em>; to get an amount you must add the starting amount.`),

      sec("Worked examples"),
      ex("core", "A constant rate", r`A car travels at a constant 30 m/s for 4 seconds. How far does it travel, and what does this look like on a velocity graph?`, [
        r`Distance = rate × time = \(30\times4\).`,
        r`On the graph of velocity against time, this is a rectangle 30 high and 4 wide.`,
      ], r`120 metres: the area of the rectangle, with units (m/s)(s) = m.`),
      ex("exam", "A linear rate", r`Water is pumped into a pool at \(r(t)=2t\) litres per minute for \(0\le t\le5\). How much water is pumped in?`, [
        r`The graph of \(r\) is a line from \((0,0)\) to \((5,10)\).`,
        r`The region under it is a triangle with base 5 and height 10.`,
      ], r`\(\tfrac12(5)(10)=25\) litres.`),
      ex("exam", "From change to amount", r`Using the graph of \(R\) above, and given that the tank holds 15 litres at \(t=0\), how much water is in the tank at \(t=6\)?`, [
        r`Area from 0 to 4: trapezoid \(\tfrac12(2+6)(4)=16\).`,
        r`Area from 4 to 6: rectangle \(6\times2=12\).`,
        r`Amount = starting amount + accumulated change.`,
      ], r`\(15+16+12=43\) litres.`),
      ex("stretch", "A rate that changes sign", r`A particle has velocity \(v(t)=6-2t\) m/s for \(0\le t\le5\). Find its net change in position and the total distance it travels.`, [
        r`\(v\) is positive for \(t\lt3\) and negative for \(t\gt3\).`,
        r`Above the axis: triangle with base 3, height 6, area 9.`,
        r`Below the axis: at \(t=5\), \(v=-4\); triangle with base 2, height 4, area 4.`,
      ], r`Net change in position: \(9-4=5\) m. Total distance: \(9+4=13\) m.`),

      sec("Common errors"),
      mistake("giving a change when an amount was asked", r`<p>The area under \(R\) from 0 to 6 is 28 litres, the water that <em>entered</em>. The amount in the tank is that plus the 15 litres already there.</p>`),
      mistake("counting area below the axis as positive", r`<p>For net change, regions below the axis subtract. Adding them answers a different question (total distance, total volume moved).</p>`),
      mistake("reading a height as an accumulated amount", r`<p>\(R(4)=6\) is the rate at \(t=4\): 6 litres per minute. It is not the amount of water that has arrived by \(t=4\), which is the area, 16 litres.</p>`),
      mistake("wrong units", r`<p>The area under a graph of litres per minute against minutes is in litres, not litres per minute.</p>`),

      sec("Write it so it scores"),
      justify(
        r`Using the graph of \(R\), explain the meaning of the area under the graph from \(t=0\) to \(t=10\), with units.`,
        r`The area, 40, is the total amount of water, in litres, that entered the tank from \(t=0\) to \(t=10\) minutes.`,
        r`It names the quantity that accumulated, gives its units, and states the time interval. The same three elements are required whenever an integral of a rate is interpreted (Lesson 6.7).`,
      ),
      exam(r`<p>Graphs made of line segments and quarter- or semicircles appear constantly, precisely so that areas can be found by geometry with no antiderivative. Know the areas of a triangle, a trapezoid \(\tfrac12(b_1+b_2)h\) and a circle without hesitation.</p>`),

      sec("Practice"),
      pq(r`A machine produces parts at a constant 12 parts per hour. How many parts does it produce in 7.5 hours?`, r`\(12\times7.5=90\) parts.`, "core"),
      pq(r`A tap runs at \(r(t)=3t\) litres per minute for \(0\le t\le4\). How much water flows out?`, r`Triangle with base 4 and height 12: \(24\) litres.`, "core"),
      pq(r`Using the graph of \(R\) in this lesson, how much water enters the tank from \(t=6\) to \(t=10\)?`, r`Triangle with base 4 and height 6: \(12\) litres.`, "exam"),
      pq(r`A particle has velocity \(v(t)=4-t\) m/s for \(0\le t\le6\). Find its displacement and the total distance travelled.`, r`Above: \(\tfrac12(4)(4)=8\). Below: \(\tfrac12(2)(2)=2\). Displacement \(6\) m; distance \(10\) m.`, "exam"),
      pq(r`A population grows at \(P'(t)=50+10t\) people per year for \(0\le t\le6\). If the population is 2000 at \(t=0\), what is it at \(t=6\)?`, r`Trapezoid: \(\tfrac12(50+110)(6)=480\). Population \(2480\).`, "exam"),
      pq(r`The rate at which a battery charges is a semicircle of radius 3 when graphed (in watt-hours per hour against hours, from \(t=0\) to \(t=6\)). How much energy is stored?`, r`Half the area of a circle of radius 3: \(\tfrac12\pi(3)^2=\dfrac{9\pi}{2}\) watt-hours.`, "stretch"),

      sec("Summary"),
      key([
        ["Area under a rate", r`Net change in the quantity.`],
        ["Units", r`Rate units × input units.`],
        ["Below the axis", r`Negative contribution to net change.`],
        ["Amount", r`Starting amount plus accumulated change.`],
      ]),
    ];
  },
});

// ───────────────────────── 6.2 ─────────────────────────
u6a["6.2"] = lesson({
  code: "6.2", unit: 6, official: "6.2", calc: "Both",
  title: "Riemann Sums and the Trapezoidal Rule",
  parts: () => {
    const sq = (x) => x * x;
    const L = plot({ w: 250, h: 240, x: [-0.3, 2.3], y: [-0.4, 4.4], stepX: 0.5, tickEvery: 2, alt: "Left Riemann sum rectangles under y = x squared" });
    for (let i = 0; i < 4; i++) L.rect(i * 0.5, i * 0.5 + 0.5, sq(i * 0.5));
    L.curve(sq, 0, 2.1);
    const R = plot({ w: 250, h: 240, x: [-0.3, 2.3], y: [-0.4, 4.4], stepX: 0.5, tickEvery: 2, alt: "Right Riemann sum rectangles over y = x squared" });
    for (let i = 0; i < 4; i++) R.rect(i * 0.5, i * 0.5 + 0.5, sq(i * 0.5 + 0.5));
    R.curve(sq, 0, 2.1);
    return [
      lede(r`Geometry finds the area under a graph made of straight lines. Under a curve, or under a function known only at a few measured points, there is no exact shape to use. The remedy is to approximate: cover the region with rectangles or trapezoids whose areas <em>are</em> easy, and add them up. This is the most reliably tested computation in the free-response section, because it works on a table of data.`),
      goals([
        r`Compute left, right and midpoint Riemann sums and trapezoidal sums.`,
        r`Use subintervals of unequal width from a table.`,
        r`Decide whether an approximation is an overestimate or an underestimate.`,
        r`Interpret an approximating sum in context.`,
      ]),

      sec("Four approximations"),
      p(r`Split \([a,b]\) into subintervals. On each one, replace the region under the graph by a simple shape.`),
      table(
        ["Method", "Height used on each subinterval", "Shape"],
        [
          ["Left Riemann sum", "the function value at the left end", "rectangle"],
          ["Right Riemann sum", "the function value at the right end", "rectangle"],
          ["Midpoint Riemann sum", "the function value at the midpoint", "rectangle"],
          ["Trapezoidal sum", "the average of the values at the two ends", "trapezoid"],
        ],
      ),
      p(r`Each term is (width) × (height). A trapezoid on a subinterval of width \(\Delta x\) with end values \(f(x_{i-1})\) and \(f(x_i)\) has area \(\tfrac12\big(f(x_{i-1})+f(x_i)\big)\Delta x\), so a trapezoidal sum is the average of the left and right sums.`),
      `<div class="apx-figrow">${figure(L, r`Left sum for \(f(x)=x^2\) on \([0,2]\) with 4 subintervals: \(1.75\). The rectangles lie under the curve.`)}${figure(R, r`Right sum: \(3.75\). The rectangles reach above the curve. (The exact area is \(\tfrac83\approx2.667\).)`)}</div>`,

      sec("Unequal widths from a table"),
      p(r`Measured data rarely come at equal spacings, and the exam's tables almost never do. Nothing changes except that each term uses <strong>its own width</strong>. Write every term out; do not look for a formula.`),
      table([r`\(t\) (minutes)`, "0", "2", "5", "9", "12"], [[r`\(E(t)\) (litres per minute)`, "8", "14", "20", "12", "6"]]),
      p(r`The four subintervals have widths 2, 3, 4 and 3.`),
      disp(r`\text{Left: }(2)(8)+(3)(14)+(4)(20)+(3)(12)=174\qquad\text{Right: }(2)(14)+(3)(20)+(4)(12)+(3)(6)=154`),
      disp(r`\text{Trapezoidal: }\tfrac12(8+14)(2)+\tfrac12(14+20)(3)+\tfrac12(20+12)(4)+\tfrac12(12+6)(3)=164`),

      sec("Over or under?"),
      table(
        ["If the function is", "then"],
        [
          ["increasing", "left sum underestimates, right sum overestimates"],
          ["decreasing", "left sum overestimates, right sum underestimates"],
          ["concave up", "trapezoidal sum overestimates, midpoint sum underestimates"],
          ["concave down", "trapezoidal sum underestimates, midpoint sum overestimates"],
        ],
      ),
      p(r`Left and right sums depend on <strong>direction</strong> (the sign of \(f'\)). Trapezoidal and midpoint sums depend on <strong>bend</strong> (the sign of \(f''\)): a chord of a concave-up curve lies above it.`),

      sec("Worked examples"),
      ex("core", "Equal widths from a formula", r`Approximate the area under \(f(x)=x^2\) on \([0,2]\) with a midpoint Riemann sum using 4 subintervals.`, [
        r`Width \(\Delta x=0.5\). Midpoints: \(0.25,\ 0.75,\ 1.25,\ 1.75\).`,
        r`Heights: \(0.0625,\ 0.5625,\ 1.5625,\ 3.0625\), which add to \(5.25\).`,
      ], r`\(0.5\times5.25=2.625\). (Slightly below the exact \(2.667\), as expected for a concave-up function.)`),
      ex("exam", "A trapezoidal sum from the table", r`Using the table above, approximate the total amount of water that entered the tank from \(t=0\) to \(t=12\) with a trapezoidal sum using the four subintervals indicated.`, [
        r`\(\tfrac12(8+14)(2)=22\), \(\tfrac12(14+20)(3)=51\).`,
        r`\(\tfrac12(20+12)(4)=64\), \(\tfrac12(12+6)(3)=27\).`,
      ], r`\(22+51+64+27=164\) litres.`),
      ex("exam", "A midpoint sum from a table", r`Selected values of \(f\) are shown. Approximate the area under \(f\) on \([0,6]\) with a midpoint Riemann sum using three subintervals of equal width.${table(["\\(x\\)", "0", "1", "2", "3", "4", "5", "6"], [["\\(f(x)\\)", "3", "5", "8", "9", "7", "4", "2"]])}`, [
        r`Three equal subintervals: \([0,2]\), \([2,4]\), \([4,6]\), each of width 2.`,
        r`Their midpoints are \(x=1,\ 3,\ 5\), with \(f=5,\ 9,\ 4\).`,
      ], r`\(2(5+9+4)=36\). Only the values at the midpoints are used.`),
      ex("stretch", "Which is the overestimate?", r`A function \(f\) is positive, decreasing and concave up on \([1,5]\). Order from least to greatest: the left sum \(L\), the right sum \(R\), the trapezoidal sum \(T\), and the exact area \(A\), all with the same subintervals.`, [
        r`Decreasing: \(R\lt A\lt L\).`,
        r`Concave up: the trapezoids overestimate, so \(A\lt T\).`,
        r`\(T\) is the average of \(L\) and \(R\), so \(T\lt L\).`,
      ], r`\(R\lt A\lt T\lt L\).`),

      sec("Common errors"),
      mistake("assuming equal widths", r`<p>Using \(\Delta t=3\) for every subinterval in the table above is the standard way to lose the point. Subtract consecutive \(t\)-values for each term.</p>`),
      mistake("using the wrong ends", r`<p>A left sum never uses the last table value; a right sum never uses the first. Count: with 4 subintervals there are 4 terms.</p>`),
      mistake("a midpoint sum with values that are not at midpoints", r`<p>A midpoint sum from a table is only possible when the midpoints are themselves in the table, which forces you to take the subintervals two entries at a time.</p>`),
      mistake("justifying over or under with the wrong property", r`<p>"The trapezoidal sum is an overestimate because \(f\) is increasing" is not a valid reason. For trapezoids the reason is concavity.</p>`),

      sec("Write it so it scores"),
      justify(
        r`Using the table for \(E(t)\), approximate \(\displaystyle\int_0^{12}E(t)\,dt\) with a right Riemann sum using the four subintervals indicated by the table. Is this an overestimate or an underestimate, given that \(E\) is decreasing on \([5,12]\) and increasing on \([0,5]\)?`,
        r`\((2)(14)+(3)(20)+(4)(12)+(3)(6)=154\). Because \(E\) is not monotonic on \([0,12]\), no conclusion about over- or underestimation can be drawn for the whole interval: the right sum overestimates on \([0,5]\) and underestimates on \([5,12]\).`,
        r`Every term is shown as width × height before the total. The second half shows the care the exam rewards: the over/under rules need the function to be increasing (or decreasing) on the <em>entire</em> interval.`,
      ),
      exam(r`<p>You do not need to simplify. A fully written sum such as \((2)(14)+(3)(20)+(4)(12)+(3)(6)\) earns the answer point as it stands, and an arithmetic slip made while adding it up loses it.</p>`),

      sec("Practice"),
      pq(r`Approximate the area under \(f(x)=x^2\) on \([0,2]\) with a left Riemann sum using 4 subintervals.`, r`\(0.5(0+0.25+1+2.25)=1.75\).`, "core"),
      pq(r`For the same function and subintervals, find the trapezoidal sum.`, r`The average of the left sum 1.75 and the right sum 3.75: \(2.75\).`, "core"),
      pq(r`Using the table for \(E(t)\), find the left Riemann sum with the four subintervals indicated.`, r`\((2)(8)+(3)(14)+(4)(20)+(3)(12)=174\).`, "exam"),
      pq(r`A car's velocity, in m/s, is recorded: \(v(0)=10\), \(v(3)=16\), \(v(4)=18\), \(v(8)=14\). Estimate the distance travelled from \(t=0\) to \(t=8\) with a trapezoidal sum using three subintervals.`, r`\(\tfrac12(10+16)(3)+\tfrac12(16+18)(1)+\tfrac12(18+14)(4)=39+17+64=120\) m.`, "exam"),
      pq(r`A function is increasing and concave down on \([0,4]\). Is a trapezoidal sum an overestimate or an underestimate? What about a left Riemann sum?`, r`Trapezoidal: underestimate (concave down, chords below the curve). Left: underestimate (increasing).`, "exam"),
      pq(r`(Calculator) Approximate \(\displaystyle\int_0^2e^{-x^2}dx\) with a midpoint Riemann sum using 4 subintervals.`, r`\(0.5\left(e^{-0.0625}+e^{-0.5625}+e^{-1.5625}+e^{-3.0625}\right)=0.5(0.9394+0.5698+0.2096+0.0468)=0.883\). (The value to three places is 0.882.)`, "stretch"),

      sec("Summary"),
      key([
        ["Each term", r`Width × height, with the subinterval's own width.`],
        ["Trapezoid", r`\(\tfrac12(\text{left value}+\text{right value})\times\text{width}\).`],
        ["Left and right", r`Over or under according to increasing or decreasing.`],
        ["Trapezoid and midpoint", r`Over or under according to concavity.`],
      ]),
    ];
  },
});

// ───────────────────────── 6.3 ─────────────────────────
u6a["6.3"] = lesson({
  code: "6.3", unit: 6, official: "6.3", calc: "No calculator",
  title: "From Sums to the Definite Integral",
  parts: () => [
    lede(r`A Riemann sum with four rectangles is a rough estimate. With forty it is better; with four thousand, better still. If the function is continuous, these sums close in on a single number as the rectangles become thinner without limit. That number is the <strong>definite integral</strong>. This lesson introduces the notation and one skill that the multiple-choice section tests directly: recognising a limit of a sum as an integral, and writing an integral as a limit of a sum.`),
    goals([
      r`Interpret a definite integral as a limit of Riemann sums and as a signed area.`,
      r`Read and write summation notation.`,
      r`Translate a limit of a Riemann sum into a definite integral.`,
      r`Evaluate simple definite integrals using geometry.`,
    ]),

    sec("The definition"),
    def("Definite integral", r`<p>For a function \(f\) continuous on \([a,b]\), divide the interval into \(n\) subintervals of width \(\Delta x=\dfrac{b-a}{n}\) and choose a point \(x_i^*\) in the \(i\)th subinterval. Then</p>${disp(r`\int_a^bf(x)\,dx=\lim_{n\to\infty}\sum_{i=1}^{n}f\!\left(x_i^*\right)\Delta x.`)}`),
    p(r`Each part of the notation has a counterpart in the sum. The elongated S, \(\int\), stands for "sum". \(f(x)\) is a height, \(dx\) is a width, and \(a\) and \(b\), the <strong>limits of integration</strong>, say where the summing starts and stops. The result is a number: the signed area between the graph and the \(x\)-axis.`),

    sec("The right-endpoint form"),
    p(r`Using right endpoints, \(x_i=a+i\,\Delta x\), the definition becomes`),
    disp(r`\int_a^bf(x)\,dx=\lim_{n\to\infty}\sum_{i=1}^{n}f\!\left(a+\frac{(b-a)\,i}{n}\right)\cdot\frac{b-a}{n}.`),
    p(r`To translate a given limit of a sum into an integral, identify three things in this order.`),
    `<ol><li><strong>\(\Delta x\):</strong> the factor outside the function, of the form \(\dfrac{\text{number}}{n}\). The number is \(b-a\).</li><li><strong>\(x_i\):</strong> the expression \(a+\dfrac{(b-a)i}{n}\) inside the function. The constant term is \(a\).</li><li><strong>\(f\):</strong> what is done to \(x_i\).</li></ol>`,
    p(r`The answer is not unique. \(\displaystyle\sum\left(2+\tfrac{3i}{n}\right)^2\tfrac3n\) can be read as \(f(x)=x^2\) on \([2,5]\), or equally as \(f(x)=(2+x)^2\) on \([0,3]\). Both integrals are equal.`),

    sec("Integrals by geometry"),
    p(r`Before any technique of integration is available, an integral whose graph is made of familiar shapes can be evaluated as an area, with regions below the axis counted as negative.`),

    sec("Worked examples"),
    ex("core", "A sum becomes an integral", r`Write \(\displaystyle\lim_{n\to\infty}\sum_{i=1}^{n}\left(2+\frac{3i}{n}\right)^{2}\cdot\frac3n\) as a definite integral.`, [
      r`\(\Delta x=\dfrac3n\), so \(b-a=3\).`,
      r`\(x_i=2+\dfrac{3i}{n}\), so \(a=2\) and \(b=5\).`,
      r`The function squares its input: \(f(x)=x^2\).`,
    ], r`\(\displaystyle\int_2^5x^2\,dx\).`),
    ex("exam", "A less obvious pattern", r`Write \(\displaystyle\lim_{n\to\infty}\sum_{i=1}^{n}\frac{\pi}{n}\sin\!\left(\frac{\pi i}{n}\right)\) as a definite integral.`, [
      r`\(\Delta x=\dfrac\pi n\), so \(b-a=\pi\).`,
      r`\(x_i=\dfrac{\pi i}{n}=0+\dfrac{\pi i}{n}\), so \(a=0\) and \(b=\pi\).`,
      r`\(f(x)=\sin x\).`,
    ], r`\(\displaystyle\int_0^\pi\sin x\,dx\).`),
    ex("exam", "An integral becomes a sum", r`Write \(\displaystyle\int_1^4\ln x\,dx\) as a limit of a right Riemann sum.`, [
      r`\(\Delta x=\dfrac{4-1}{n}=\dfrac3n\).`,
      r`\(x_i=1+\dfrac{3i}{n}\).`,
    ], r`\(\displaystyle\lim_{n\to\infty}\sum_{i=1}^{n}\ln\!\left(1+\frac{3i}{n}\right)\cdot\frac3n\).`),
    ex("stretch", "Three integrals by geometry", r`Evaluate (a) \(\displaystyle\int_0^4(2x+1)\,dx\), (b) \(\displaystyle\int_{-3}^{3}\sqrt{9-x^2}\,dx\), (c) \(\displaystyle\int_{-2}^{3}|x|\,dx\).`, [
      r`(a) A trapezoid with parallel sides 1 and 9 and width 4: \(\tfrac12(1+9)(4)=20\).`,
      r`(b) \(y=\sqrt{9-x^2}\) is the upper half of the circle \(x^2+y^2=9\): \(\tfrac12\pi(3)^2=\dfrac{9\pi}{2}\).`,
      r`(c) Two triangles: \(\tfrac12(2)(2)+\tfrac12(3)(3)=2+\dfrac92\).`,
    ], r`(a) \(20\). (b) \(\dfrac{9\pi}{2}\). (c) \(\dfrac{13}{2}\).`),

    sec("Common errors"),
    mistake("taking the limits of integration from the wrong place", r`<p>In \(\left(2+\tfrac{3i}{n}\right)\), the lower limit is the constant 2, and the upper limit is \(2+3=5\), not 3.</p>`),
    mistake(r`forgetting that \(\Delta x\) must match`, r`<p>If you read the function as \(x^2\) on \([2,5]\), then \(\Delta x\) is \(\tfrac3n\). An option with the same integrand but limits 0 to 5 is wrong, because its \(\Delta x\) would be \(\tfrac5n\).</p>`),
    mistake("treating a definite integral as always positive", r`<p>\(\displaystyle\int_0^{2\pi}\sin x\,dx=0\): equal areas above and below the axis cancel.</p>`),
    mistake(r`dropping \(dx\)`, r`<p>\(dx\) is part of the notation, not decoration. It names the variable of integration and is the width in the sum; leaving it out is a notational error that can cost a communication point.</p>`),

    sec("Write it so it scores"),
    justify(
      r`The function \(E\) gives the rate, in litres per minute, at which water enters a tank at time \(t\) minutes. Explain the meaning of \(\displaystyle\int_0^{12}E(t)\,dt\).`,
      r`\(\displaystyle\int_0^{12}E(t)\,dt\) is the total amount of water, in litres, that entered the tank from \(t=0\) to \(t=12\) minutes.`,
      r`The integral of a rate is an accumulated amount. The sentence gives the quantity, its units (rate units × time units), and the interval.`,
    ),
    exam(r`<p>The sum-to-integral item is a multiple-choice regular. The four options usually share the same integrand and differ only in their limits, or share limits and differ in the integrand. Find \(\Delta x\) first: it fixes \(b-a\) and eliminates half the options at once.</p>`),

    sec("Practice"),
    pq(r`Write \(\displaystyle\lim_{n\to\infty}\sum_{i=1}^{n}\sqrt{1+\frac{i}{n}}\cdot\frac1n\) as a definite integral.`, r`\(\Delta x=\tfrac1n\), \(x_i=1+\tfrac in\): \(\displaystyle\int_1^2\sqrt x\,dx\) (or \(\displaystyle\int_0^1\sqrt{1+x}\,dx\)).`, "core"),
    pq(r`Write \(\displaystyle\lim_{n\to\infty}\sum_{i=1}^{n}\left(\frac{4i}{n}\right)^{3}\cdot\frac4n\) as a definite integral.`, r`\(\Delta x=\tfrac4n\), \(x_i=\tfrac{4i}{n}\): \(\displaystyle\int_0^4x^3\,dx\).`, "core"),
    pq(r`Write \(\displaystyle\int_0^2e^{x}\,dx\) as a limit of a right Riemann sum.`, r`\(\displaystyle\lim_{n\to\infty}\sum_{i=1}^{n}e^{2i/n}\cdot\frac2n\).`, "exam"),
    pq(r`Evaluate \(\displaystyle\int_0^6(6-2x)\,dx\) using geometry.`, r`Triangle above the axis on \([0,3]\): area 9. Triangle below on \([3,6]\): area 9. The integral is \(9-9=0\).`, "exam"),
    pq(r`Evaluate \(\displaystyle\int_0^2\sqrt{4-x^2}\,dx\) using geometry.`, r`A quarter of a circle of radius 2: \(\tfrac14\pi(2)^2=\pi\).`, "exam"),
    pq(r`Write \(\displaystyle\lim_{n\to\infty}\sum_{i=1}^{n}\frac{1}{1+\left(\frac{2i}{n}\right)^{2}}\cdot\frac2n\) as a definite integral.`, r`\(\Delta x=\tfrac2n\), \(x_i=\tfrac{2i}{n}\): \(\displaystyle\int_0^2\frac{1}{1+x^2}\,dx\).`, "stretch"),

    sec("Summary"),
    key([
      ["Definite integral", r`The limit of Riemann sums: a signed area.`],
      [r`\(\Delta x\)`, r`\(\dfrac{b-a}{n}\): find it first.`],
      [r`\(x_i\)`, r`\(a+\dfrac{(b-a)i}{n}\): its constant term is \(a\).`],
      ["Geometry", r`Triangles, trapezoids and circles give exact values.`],
    ]),
  ],
});

// ───────────────────────── 6.4 ─────────────────────────
u6a["6.4"] = lesson({
  code: "6.4", unit: 6, official: "6.4", calc: "No calculator",
  title: "Accumulation Functions and the Fundamental Theorem, Part 1",
  parts: () => [
    lede(r`Fix the starting point of an integral and let the endpoint move. The accumulated area now depends on where you stop, so it is a <em>function</em> of the endpoint. How fast does that area grow as the endpoint moves? At exactly the height of the graph at that point. This is the Fundamental Theorem of Calculus: accumulating and differentiating undo one another. It is the single most important fact in the course.`),
    goals([
      r`Interpret \(g(x)=\displaystyle\int_a^xf(t)\,dt\) as a function and evaluate it from a graph.`,
      r`State the first part of the Fundamental Theorem of Calculus.`,
      r`Differentiate integrals whose limits are functions of \(x\), using the chain rule.`,
      r`Find \(g'\) and \(g''\) for an accumulation function from the graph of its integrand.`,
    ]),

    sec("A function defined by an integral"),
    def("Accumulation function", r`<p>For a continuous function \(f\) and a constant \(a\), the function</p>${disp(r`g(x)=\int_a^xf(t)\,dt`)}<p>gives the signed area under the graph of \(f\) from \(a\) to \(x\).</p>`),
    p(r`The variable of the function is the <strong>upper limit</strong> \(x\). The letter \(t\) inside is a placeholder used up by the integration; it could be any letter other than \(x\). Note that \(g(a)=\displaystyle\int_a^af(t)\,dt=0\) always.`),
    figure(fGraph({ t: true, shade: true }), r`The graph of \(f\), made of line segments. For \(g(x)=\displaystyle\int_0^xf(t)\,dt\): \(g(2)=4\), \(g(4)=4-4=0\), \(g(6)=-4\), \(g(8)=-2\), and \(g(-2)=-4\) (integrating backwards over a positive area).`),

    sec("The theorem"),
    thm("Fundamental Theorem of Calculus, Part 1", r`<p>If \(f\) is continuous on an interval containing \(a\), then the function \(g(x)=\displaystyle\int_a^xf(t)\,dt\) is differentiable, and</p>${disp(r`g'(x)=\frac{d}{dx}\int_a^xf(t)\,dt=f(x).`)}`),
    p(r`Why: \(g(x+h)-g(x)\) is the area of a thin strip from \(x\) to \(x+h\), which is approximately a rectangle of height \(f(x)\) and width \(h\). Dividing by \(h\) leaves \(f(x)\).`),
    p(r`The lower limit \(a\) does not appear in the answer. Changing \(a\) changes \(g\) by a constant, and constants disappear on differentiating.`),

    sec("When the limit is not simply x"),
    p(r`If the upper limit is a function \(u(x)\), the chain rule applies; if the variable is in the lower limit, reverse the limits first, which changes the sign.`),
    disp(r`\frac{d}{dx}\int_a^{u(x)}f(t)\,dt=f\big(u(x)\big)\,u'(x)\qquad\qquad\frac{d}{dx}\int_{v(x)}^{u(x)}f(t)\,dt=f\big(u(x)\big)\,u'(x)-f\big(v(x)\big)\,v'(x)`),

    sec("Worked examples"),
    ex("core", "Direct use of the theorem", r`Find \(\dfrac{d}{dx}\displaystyle\int_1^x\sqrt{1+t^3}\,dt\).`, [
      r`The integrand is continuous and the upper limit is \(x\).`,
      r`Replace \(t\) by \(x\).`,
    ], r`\(\sqrt{1+x^3}\).`),
    ex("exam", "With the chain rule", r`Find \(\dfrac{d}{dx}\displaystyle\int_0^{x^2}\cos\left(t^2\right)dt\).`, [
      r`The upper limit is \(u=x^2\), with \(u'=2x\).`,
      r`Substitute the upper limit into the integrand: \(\cos\!\left((x^2)^2\right)=\cos\left(x^4\right)\).`,
      r`Multiply by \(u'\).`,
    ], r`\(2x\cos\left(x^4\right)\).`),
    ex("exam", "Reading g, g′ and g″ from the graph", r`Using the graph of \(f\) above and \(g(x)=\displaystyle\int_0^xf(t)\,dt\), find \(g(1)\), \(g'(1)\) and \(g''(1)\).`, [
      r`\(g(1)\) is the area from 0 to 1: a trapezoid with heights \(f(0)=4\) and \(f(1)=2\), so \(\tfrac12(4+2)(1)=3\).`,
      r`\(g'(1)=f(1)=2\), by the Fundamental Theorem.`,
      r`\(g''(1)=f'(1)\), the slope of the graph of \(f\) at \(t=1\): \(\dfrac{-4-4}{4-0}=-2\).`,
    ], r`\(g(1)=3\), \(g'(1)=2\), \(g''(1)=-2\).`),
    ex("stretch", "Variable in both limits", r`Find \(\dfrac{d}{dx}\displaystyle\int_{2x}^{x^3}\ln\left(1+t^2\right)dt\).`, [
      r`Upper limit \(x^3\): \(\ln\left(1+x^6\right)\cdot3x^2\).`,
      r`Lower limit \(2x\): \(\ln\left(1+4x^2\right)\cdot2\), subtracted.`,
    ], r`\(3x^2\ln\left(1+x^6\right)-2\ln\left(1+4x^2\right)\).`),

    sec("Common errors"),
    mistake("forgetting the chain rule", r`<p>\(\dfrac{d}{dx}\displaystyle\int_0^{x^2}\cos(t^2)\,dt\) is not \(\cos(x^4)\). The upper limit is not \(x\), so a factor \(2x\) is owed.</p>`),
    mistake("the sign when x is the lower limit", r`<p>\(\dfrac{d}{dx}\displaystyle\int_x^5e^{t^2}dt=-e^{x^2}\). Reversing the limits introduces a minus sign.</p>`),
    mistake("mixing up g, g′ and g″ on a graph", r`<p>With the graph of \(f\) given: \(g\) is an <em>area</em>, \(g'\) is a <em>height</em>, and \(g''\) is a <em>slope</em>. Decide which is being asked before looking at the picture.</p>`),
    mistake("trying to integrate first", r`<p>\(\sqrt{1+t^3}\) and \(\cos(t^2)\) have no elementary antiderivatives. The theorem gives the derivative without one, which is the point of these questions.</p>`),

    sec("Write it so it scores"),
    justify(
      r`Let \(g(x)=\displaystyle\int_0^xf(t)\,dt\), where \(f\) is the function graphed above. Find \(g'(5)\) and \(g''(5)\).`,
      r`\(g'(x)=f(x)\), so \(g'(5)=f(5)=-2\). \(g''(x)=f'(x)\), so \(g''(5)=f'(5)=\dfrac{0-(-4)}{6-4}=2\).`,
      r`Each derivative is first expressed in terms of \(f\), then evaluated from the graph. Writing \(g'(x)=f(x)\) explicitly is what shows the reader the Fundamental Theorem was used.`,
    ),
    exam(r`<p>"Let \(g(x)=\displaystyle\int_a^xf(t)\,dt\), where the graph of \(f\) is shown" opens a free-response question in most years. The first thing to write, before reading the parts, is \(g'(x)=f(x)\) and \(g''(x)=f'(x)\). Every part follows from those two lines and the unit you have just finished.</p>`),

    sec("Practice"),
    pq(r`Find \(\dfrac{d}{dx}\displaystyle\int_3^x\frac{\sin t}{t}\,dt\).`, r`\(\dfrac{\sin x}{x}\).`, "core"),
    pq(r`Using the graph of \(f\) in this lesson and \(g(x)=\displaystyle\int_0^xf(t)\,dt\), find \(g(6)\) and \(g'(6)\).`, r`\(g(6)=4-4-4=-4\). \(g'(6)=f(6)=0\).`, "core"),
    pq(r`Find \(\dfrac{d}{dx}\displaystyle\int_x^5e^{t^2}\,dt\).`, r`\(-e^{x^2}\).`, "exam"),
    pq(r`Find \(\dfrac{d}{dx}\displaystyle\int_1^{\sin x}\sqrt{1+t^4}\,dt\).`, r`\(\sqrt{1+\sin^4x}\cdot\cos x\).`, "exam"),
    pq(r`Let \(h(x)=\displaystyle\int_0^{3x}f(t)\,dt\) with \(f\) as graphed. Find \(h'(1)\).`, r`\(h'(x)=3f(3x)\), so \(h'(1)=3f(3)=3(-2)=-6\).`, "exam"),
    pq(r`Let \(F(x)=\displaystyle\int_0^xe^{-t^2}dt\). Find \(F'(x)\) and \(F''(x)\), and describe the graph of \(F\) for \(x\gt0\).`, r`\(F'(x)=e^{-x^2}\gt0\) and \(F''(x)=-2xe^{-x^2}\lt0\) for \(x\gt0\): increasing and concave down.`, "stretch"),

    sec("Summary"),
    key([
      ["Accumulation function", r`\(g(x)=\displaystyle\int_a^xf(t)\,dt\): area up to \(x\).`],
      ["Fundamental Theorem", r`\(g'(x)=f(x)\).`],
      ["Chain rule", r`Upper limit \(u(x)\): \(f(u)\,u'\).`],
      ["From a graph of f", r`\(g\): area. \(g'\): height. \(g''\): slope.`],
    ]),
  ],
});
