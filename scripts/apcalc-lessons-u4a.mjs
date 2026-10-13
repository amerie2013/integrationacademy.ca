// AP Calculus AB exam prep — Unit 4 (Derivatives in Context), lessons 4.1–4.4.
// Original wording, examples, numbers and figures throughout (see u1a for notes).
import { r, lesson, lede, goals, sec, p, disp, def, thm, exam, mistake, justify, ex, pq, key, table } from "./apcalc/kit.mjs";
import { plot, figure, C } from "./apcalc/fig.mjs";

export const u4a = {};

// ───────────────────────── 4.1 ─────────────────────────
u4a["4.1"] = lesson({
  code: "4.1", unit: 4, official: "4.1", calc: "No calculator",
  title: "What a Derivative Means, in Words and Units",
  parts: () => [
    lede(r`Units 2 and 3 were about computing derivatives. This unit is about what they <em>say</em>. On the free-response section, a derivative that you have already calculated correctly is often worth a second point, awarded only for a sentence explaining it in the context of the problem. That sentence has a fixed anatomy, and students who know it collect the point every time.`),
    goals([
      r`State the units of a derivative from the units of the function and its input.`,
      r`Interpret the value and sign of a derivative in context.`,
      r`Keep an amount and its rate of change clearly apart.`,
      r`Interpret the derivative of a function that is itself a rate.`,
    ]),

    sec("Units"),
    p(r`A derivative is a limit of \(\dfrac{\text{change in output}}{\text{change in input}}\), so its units are the units of the output <strong>per</strong> unit of the input.`),
    table(
      ["Function", "Output units", "Input units", "Units of the derivative"],
      [
        [r`\(W(t)\): depth of water at time \(t\)`, "centimetres", "hours", "centimetres per hour"],
        [r`\(C(q)\): cost of producing \(q\) items`, "dollars", "items", "dollars per item"],
        [r`\(T(x)\): temperature at position \(x\) on a rod`, "°C", "centimetres", "°C per centimetre"],
        [r`\(G(t)\): rate of gas flow at time \(t\)`, "litres per minute", "minutes", "litres per minute per minute"],
      ],
    ),
    p(r`The input is not always time. And when the function is already a rate, as in the last row, its derivative is a rate of change <em>of a rate</em>.`),

    sec("The interpretation sentence"),
    p(r`An interpretation of \(f'(a)=k\) has four parts, in this order.`),
    key([
      ["1. When or where", r`"At \(t=3\) hours," — a single instant or point, never an interval.`],
      ["2. What", r`"the depth of the water in the tank" — the quantity \(f\) measures, in words.`],
      ["3. Direction", r`"is increasing" or "is decreasing", read from the sign of \(k\).`],
      ["4. How fast, with units", r`"at a rate of 1.5 centimetres per hour" — the size \(|k|\), then the units.`],
    ]),
    p(r`Assembled: <em>"At \(t=3\) hours, the depth of the water in the tank is decreasing at a rate of 1.5 centimetres per hour."</em>`),

    sec("Amount versus rate"),
    p(r`\(W(3)=42\) and \(W'(3)=-1.5\) are different kinds of fact. The first says how much water there is at \(t=3\); the second says how quickly that amount is changing at \(t=3\). A large amount can be changing slowly, and a small amount quickly. Questions deliberately give both and ask about one.`),

    sec("Worked examples"),
    ex("core", "A derivative with respect to quantity", r`\(C(q)\) is the cost, in dollars, of producing \(q\) items. Interpret \(C'(200)=4.5\).`, [
      r`Units: dollars per item.`,
      r`The "instant" here is a production level, \(q=200\) items.`,
    ], r`When 200 items are being produced, the cost of production is increasing at a rate of $4.50 per additional item.`),
    ex("exam", "Amount and rate together", r`\(W(t)\) is the depth of water in a tank, in centimetres, \(t\) hours after noon. Interpret \(W(3)=42\) and \(W'(3)=-1.5\).`, [
      r`\(W(3)=42\): an amount, in centimetres, at 3 p.m.`,
      r`\(W'(3)=-1.5\): a rate, in centimetres per hour; negative, so decreasing.`,
    ], r`At 3 p.m. the water is 42 centimetres deep, and at that moment the depth is decreasing at a rate of 1.5 centimetres per hour.`),
    ex("exam", "The derivative of a rate", r`Gas flows through a pipe at a rate of \(G(t)\) litres per minute at time \(t\) minutes. Interpret \(G'(10)=-0.2\).`, [
      r`\(G\) is already a rate. Its derivative has units of litres per minute, per minute.`,
      r`The quantity that is changing is "the rate at which gas flows", not "the amount of gas".`,
    ], r`At \(t=10\) minutes, the rate at which gas flows through the pipe is decreasing at 0.2 litres per minute per minute.`),
    ex("stretch", "Using a derivative to look ahead", r`A tree's height is \(h(t)\) metres at age \(t\) years, with \(h(10)=6\) and \(h'(10)=0.4\). Interpret \(h'(10)\) and use it to estimate the height at age 12.`, [
      r`At age 10 years, the height of the tree is increasing at a rate of 0.4 metres per year.`,
      r`If that rate held for two more years, the height would rise by about \(2\times0.4=0.8\) metres.`,
    ], r`\(h(12)\approx6+0.8=6.8\) metres. This is a tangent-line estimate, developed properly in Lesson 4.6.`),

    sec("Common errors"),
    mistake("a double negative", r`<p>"The depth is decreasing at a rate of \(-1.5\) cm per hour" says the depth is <em>increasing</em>. State the direction in words and the rate as a positive number.</p>`),
    mistake("an interval instead of an instant", r`<p>"Between \(t=0\) and \(t=3\) the depth fell by 1.5 cm per hour" describes an average rate. A derivative value is about one moment.</p>`),
    mistake("naming the wrong quantity", r`<p>For \(G'(10)\), writing "the amount of gas is decreasing" is wrong on two counts: \(G\) is a rate, and the gas in the pipe is not what is decreasing. The <em>flow rate</em> is.</p>`),
    mistake("missing or wrong units", r`<p>The units point is lost if units are absent or are those of \(f\) rather than \(f'\). "1.5 centimetres" is a length; the rate is "1.5 centimetres per hour".</p>`),

    sec("Write it so it scores"),
    justify(
      r`The number of people infected by a virus \(t\) days after an outbreak begins is \(N(t)\). Using correct units, interpret \(N'(20)=35\) in context.`,
      r`At \(t=20\) days, the number of people infected is increasing at a rate of 35 people per day.`,
      r`When, what, direction, rate with units. Nothing more is needed, and adding more ("so the outbreak is getting worse") risks saying something the mathematics does not support.`,
    ),
    exam(r`<p>The wording "<strong>using correct units, interpret</strong>" signals a point for exactly this sentence. Answer in one sentence, and check it against the four parts before moving on.</p>`),

    sec("Practice"),
    pq(r`\(R(t)\) is a company's revenue, in thousands of dollars, \(t\) months after launch. Interpret \(R'(6)=12\).`, r`At \(t=6\) months, the company's revenue is increasing at a rate of 12 thousand dollars per month.`, "core"),
    pq(r`A car has used \(F(x)\) litres of fuel after travelling \(x\) kilometres. What are the units of \(F'(x)\), and can \(F'(x)\) be negative?`, r`Litres per kilometre. No: the fuel used cannot decrease as the distance increases, so \(F'(x)\ge0\).`, "core"),
    pq(r`\(T(x)\) is the temperature, in °C, at a point \(x\) centimetres from one end of a metal rod. Interpret \(T'(8)=-3\).`, r`At the point 8 centimetres from the end, the temperature is decreasing at a rate of 3 °C per centimetre of distance along the rod.`, "exam"),
    pq(r`Water is pumped at a rate of \(P(t)\) litres per hour at time \(t\) hours, with \(P(2)=40\) and \(P'(2)=-6\). Estimate the pumping rate at \(t=2.5\).`, r`\(P(2.5)\approx40+(-6)(0.5)=37\) litres per hour.`, "exam"),
    pq(r`For the virus above, interpret \(N''(20)=-5\).`, r`At \(t=20\) days, the rate at which people are becoming infected is decreasing at 5 people per day per day. (The number infected may still be rising, but more slowly.)`, "stretch"),
    pq(r`A tank's volume is \(V(t)\) litres with \(V(0)=30\), and \(V'(t)=-2\) for all \(0\le t\le5\). Find \(V(5)\) and explain.`, r`The volume falls at a constant 2 litres per minute for 5 minutes, a total of 10 litres. \(V(5)=20\) litres.`, "stretch"),

    sec("Summary"),
    key([
      ["Units", r`Output units per input unit.`],
      ["Sentence", r`When, what, direction, how fast with units.`],
      ["Sign", r`Positive: increasing. Negative: decreasing. Say it in words.`],
      ["Rate of a rate", r`If \(f\) is a rate, \(f'\) describes how that rate is changing.`],
    ]),
  ],
});

// ───────────────────────── 4.2 ─────────────────────────
const vel = (t) => 3 * (t - 2) * (t - 4), acc = (t) => 6 * t - 18;
u4a["4.2"] = lesson({
  code: "4.2", unit: 4, official: "4.2", calc: "No calculator",
  title: "Motion Along a Line",
  parts: () => {
    const g = plot({ w: 420, h: 320, x: [-0.5, 5.5], y: [-20, 26], stepY: 4, tickEvery: 2, xName: "t", yName: " ", alt: "Velocity and acceleration graphs for the particle" });
    g.curve(acc, 0, 5, { color: C.alt, width: 1.9 }).curve(vel, 0, 5).dot(2, 0).dot(4, 0).dot(3, 0, { color: C.alt });
    g.label(0.35, 21.5, "v(t)").label(4.1, 10.5, "a(t)", { color: C.alt });
    return [
      lede(r`A particle moving back and forth along a line is the exam's favourite setting for derivatives, because one position function generates three linked questions: where is it, how fast is it going, and is it speeding up? The mathematics is two derivatives. The marks are in the vocabulary: velocity versus speed, displacement versus distance, and the precise condition for speeding up.`),
      goals([
        r`Relate position, velocity and acceleration by differentiation.`,
        r`Determine when a particle is at rest, moving in each direction, and changing direction.`,
        r`Decide whether a particle is speeding up or slowing down, with justification.`,
        r`Find displacement and total distance from a position function.`,
      ]),

      sec("Three functions"),
      def("Position, velocity, acceleration", r`<p>For a particle with position \(x(t)\) on a line:</p><ul><li><strong>velocity</strong> \(v(t)=x'(t)\): the rate of change of position (signed);</li><li><strong>acceleration</strong> \(a(t)=v'(t)=x''(t)\): the rate of change of velocity;</li><li><strong>speed</strong> \(=|v(t)|\): how fast, regardless of direction (never negative).</li></ul>`),
      table(
        ["Question", "Condition"],
        [
          ["Moving in the positive direction (right or up)", r`\(v(t)\gt0\)`],
          ["Moving in the negative direction (left or down)", r`\(v(t)\lt0\)`],
          ["At rest", r`\(v(t)=0\)`],
          ["Changes direction", r`\(v(t)\) <strong>changes sign</strong>`],
          ["Speeding up", r`\(v(t)\) and \(a(t)\) have the <strong>same</strong> sign`],
          ["Slowing down", r`\(v(t)\) and \(a(t)\) have <strong>opposite</strong> signs`],
        ],
      ),

      sec("A complete analysis"),
      p(r`Let \(x(t)=t^3-9t^2+24t\) for \(t\ge0\) (position in metres, time in seconds). Then`),
      disp(r`v(t)=3t^2-18t+24=3(t-2)(t-4)\qquad a(t)=6t-18.`),
      figure(g, r`Velocity (blue) and acceleration (red). The particle is at rest at \(t=2\) and \(t=4\); the acceleration is zero at \(t=3\).`),
      table(
        ["Interval", r`\(v\)`, r`\(a\)`, "Direction", "Speed"],
        [
          [r`\(0\lt t\lt2\)`, "+", "−", "right", "slowing down"],
          [r`\(2\lt t\lt3\)`, "−", "−", "left", "speeding up"],
          [r`\(3\lt t\lt4\)`, "−", "+", "left", "slowing down"],
          [r`\(t\gt4\)`, "+", "+", "right", "speeding up"],
        ],
      ),
      p(r`Notice the second row. The acceleration is negative and the particle is <em>speeding up</em>, because it is already moving in the negative direction and is being pushed further that way.`),

      sec("Displacement and distance"),
      p(r`<strong>Displacement</strong> over \([a,b]\) is the net change in position, \(x(b)-x(a)\). <strong>Total distance</strong> counts every metre travelled, so the journey must be split at each change of direction and the pieces added as positive amounts.`),
      p(r`For the particle above on \([0,5]\): \(x(0)=0\), \(x(2)=20\), \(x(4)=16\), \(x(5)=20\). Displacement \(=20-0=20\) m. Total distance \(=|20-0|+|16-20|+|20-16|=28\) m.`),

      sec("Worked examples"),
      ex("core", "At rest, and direction", r`For \(x(t)=t^3-9t^2+24t\), when is the particle at rest, and when is it moving left?`, [
        r`\(v(t)=3(t-2)(t-4)=0\) at \(t=2\) and \(t=4\).`,
        r`\(v(t)\lt0\) when exactly one factor is negative: \(2\lt t\lt4\).`,
      ], r`At rest at \(t=2\) and \(t=4\); moving left for \(2\lt t\lt4\).`),
      ex("exam", "Speeding up or slowing down at an instant", r`A particle has position \(x(t)=2\sin(2t)\). At \(t=\dfrac\pi3\), is the speed of the particle increasing or decreasing? Give a reason.`, [
        r`\(v(t)=4\cos(2t)\), so \(v\!\left(\dfrac\pi3\right)=4\cos\dfrac{2\pi}{3}=-2\).`,
        r`\(a(t)=-8\sin(2t)\), so \(a\!\left(\dfrac\pi3\right)=-8\cdot\dfrac{\sqrt3}{2}=-4\sqrt3\).`,
      ], r`The speed is increasing, because \(v\!\left(\tfrac\pi3\right)\lt0\) and \(a\!\left(\tfrac\pi3\right)\lt0\) have the same sign.`),
      ex("exam", "A projectile", r`A ball is thrown upward with height \(h(t)=30t-5t^2\) metres after \(t\) seconds. Find its maximum height and its speed when it returns to the ground.`, [
        r`\(v(t)=30-10t\). The ball is highest when \(v=0\): \(t=3\), and \(h(3)=90-45=45\).`,
        r`It is on the ground when \(h(t)=5t(6-t)=0\): \(t=6\). Then \(v(6)=-30\).`,
      ], r`Maximum height 45 m; speed on landing \(|-30|=30\) m/s.`),
      ex("stretch", "Speed from velocity alone", r`A particle has velocity \(v(t)=t^2-4t+3\) for \(0\le t\le5\). On which intervals is its speed decreasing?`, [
        r`\(v(t)=(t-1)(t-3)\): positive on \((0,1)\) and \((3,5)\), negative on \((1,3)\).`,
        r`\(a(t)=2t-4\): negative on \((0,2)\), positive on \((2,5)\).`,
        r`Opposite signs: \((0,1)\) has \(v\gt0,\ a\lt0\); \((2,3)\) has \(v\lt0,\ a\gt0\).`,
      ], r`The speed is decreasing on \(0\lt t\lt1\) and on \(2\lt t\lt3\).`),

      sec("Common errors"),
      mistake("\"negative acceleration means slowing down\"", r`<p>Only if the velocity is positive. Compare signs: same sign, speeding up; opposite signs, slowing down.</p>`),
      mistake("speed given as a negative number", r`<p>Velocity can be \(-30\) m/s. Speed is \(30\) m/s. If a question asks for speed, the answer is never negative.</p>`),
      mistake("\"at rest\" taken to mean \"changes direction\"", r`<p>\(v=0\) is necessary for a change of direction but not sufficient: \(v\) must change sign. For \(x(t)=t^3\), \(v(0)=0\) and the particle keeps moving right.</p>`),
      mistake("displacement offered as distance", r`<p>If the particle turns round, \(x(b)-x(a)\) undercounts the distance travelled. Split at the turning points.</p>`),

      sec("Write it so it scores"),
      justify(
        r`For \(x(t)=t^3-9t^2+24t\), is the particle speeding up or slowing down at \(t=2.5\)? Justify your answer.`,
        r`\(v(2.5)=3(0.5)(-1.5)=-2.25\) and \(a(2.5)=6(2.5)-18=-3\). The particle is speeding up at \(t=2.5\) because \(v(2.5)\) and \(a(2.5)\) are both negative.`,
        r`Both values are computed and shown, and the reason is stated as a comparison of their signs. "Because \(a\lt0\)" alone would lose the point, and so would a conclusion with no numbers.`,
      ),
      exam(r`<p>Speeding up or slowing down is asked in nearly every motion question. The accepted justification always has the same three elements: the value (or sign) of \(v\), the value (or sign) of \(a\), and the phrase "same sign" or "opposite signs".</p>`),

      sec("Practice"),
      pq(r`A particle has \(x(t)=2t^3-15t^2+36t\). When is it moving in the negative direction?`, r`\(v(t)=6t^2-30t+36=6(t-2)(t-3)\lt0\) for \(2\lt t\lt3\).`, "core"),
      pq(r`A particle has \(x(t)=t^2-8t+3\). When is it at rest, and does it change direction then?`, r`\(v(t)=2t-8=0\) at \(t=4\). \(v\) changes from negative to positive there, so yes.`, "core"),
      pq(r`For \(x(t)=t^3-9t^2+24t\), is the particle speeding up or slowing down at \(t=1\)?`, r`\(v(1)=9\gt0\) and \(a(1)=-12\lt0\): opposite signs, so it is slowing down.`, "exam"),
      pq(r`For \(x(t)=t^3-12t\), \(t\ge0\), find the total distance travelled on \([0,3]\).`, r`\(v=3t^2-12=0\) at \(t=2\). \(x(0)=0\), \(x(2)=-16\), \(x(3)=-9\). Distance \(=16+7=23\).`, "exam"),
      pq(r`A particle has \(x(t)=e^t-3t\). When does it change direction?`, r`\(v(t)=e^t-3\) is negative for \(t\lt\ln3\) and positive for \(t\gt\ln3\). It changes direction at \(t=\ln3\).`, "exam"),
      pq(r`A particle has \(v(t)=\cos t\) for \(0\le t\le2\pi\). On which intervals is it speeding up?`, r`\(a(t)=-\sin t\). Same signs: on \(\left(\tfrac\pi2,\pi\right)\) both are negative; on \(\left(\tfrac{3\pi}2,2\pi\right)\) both are positive. Speeding up on those two intervals.`, "stretch"),

      sec("Summary"),
      key([
        ["Chain of derivatives", r`\(x\to v=x'\to a=v'\).`],
        ["Direction", r`The sign of \(v\). A change of direction is a sign change of \(v\).`],
        ["Speeding up", r`\(v\) and \(a\) have the same sign.`],
        ["Distance", r`Split at turning points; add absolute changes.`],
      ]),
    ];
  },
});

// ───────────────────────── 4.3 ─────────────────────────
u4a["4.3"] = lesson({
  code: "4.3", unit: 4, official: "4.3", calc: "Both",
  title: "Rates of Change Beyond Motion",
  parts: () => [
    lede(r`Velocity is one rate of change among thousands. A population grows, a tank drains, a cost rises with production, a temperature falls along a rod. Each is a function and each has a derivative, and the calculus is identical to what you did with particles. What changes is the vocabulary, and the fact that the input is sometimes not time at all.`),
    goals([
      r`Compute and interpret rates of change in non-motion contexts.`,
      r`Differentiate with respect to variables other than time.`,
      r`Form a net rate from a rate in and a rate out.`,
      r`Decide from a rate whether a quantity is increasing or decreasing.`,
    ]),

    sec("Reading the model"),
    p(r`Before differentiating, establish three things: what the function measures, what its input is, and therefore what the units of the derivative will be. Then the derivative is computed with the rules of Units 2 and 3, the chain rule above all.`),
    table(
      ["Model", "Derivative", "Meaning"],
      [
        [r`\(A=\pi r^2\) (area of a circle)`, r`\(\dfrac{dA}{dr}=2\pi r\)`, "area gained per unit increase in radius"],
        [r`\(P(t)=500e^{0.2t}\) (bacteria after \(t\) hours)`, r`\(P'(t)=100e^{0.2t}\)`, "bacteria per hour"],
        [r`\(C(q)\) (cost of \(q\) items)`, r`\(C'(q)\)`, "marginal cost: dollars per extra item"],
        [r`\(T(t)=20+60e^{-0.1t}\) (cooling)`, r`\(T'(t)=-6e^{-0.1t}\)`, "°C per minute, negative while cooling"],
      ],
    ),

    sec("Rate in, rate out"),
    p(r`When a quantity is added to at one rate and removed at another, its rate of change is the difference:`),
    disp(r`\frac{dQ}{dt}=\text{(rate in)}-\text{(rate out)}.`),
    p(r`The quantity is increasing when the rate in exceeds the rate out, decreasing when it is less, and momentarily steady when they are equal. This idea returns in Unit 8 as one of the most frequently examined free-response contexts.`),

    sec("Worked examples"),
    ex("core", "A rate with respect to radius", r`A circle has area \(A=\pi r^2\) cm². Find the rate of change of area with respect to radius when \(r=5\) cm, with units.`, [
      r`\(\dfrac{dA}{dr}=2\pi r\).`,
      r`At \(r=5\): \(10\pi\).`,
    ], r`\(10\pi\) cm² per cm. (This is the circumference: a small increase in radius adds a thin ring.)`),
    ex("exam", "Exponential growth", r`A culture contains \(P(t)=500e^{0.2t}\) bacteria after \(t\) hours. Find \(P'(5)\) and interpret it.`, [
      r`Chain rule: \(P'(t)=500\cdot0.2\,e^{0.2t}=100e^{0.2t}\).`,
      r`\(P'(5)=100e^{1}\approx271.8\).`,
    ], r`At \(t=5\) hours, the number of bacteria is increasing at a rate of about 272 bacteria per hour.`),
    ex("exam", "A draining tank", r`A tank holds \(V(t)=200-8t+0.1t^2\) litres after \(t\) minutes, for \(0\le t\le40\). How fast is the volume changing at \(t=10\), and when does the tank stop draining?`, [
      r`\(V'(t)=-8+0.2t\).`,
      r`\(V'(10)=-8+2=-6\).`,
      r`\(V'(t)=0\) when \(0.2t=8\), that is \(t=40\).`,
    ], r`At \(t=10\) minutes the volume is decreasing at 6 litres per minute. The draining stops at \(t=40\) minutes.`),
    ex("exam", "Competing rates", r`Water enters a tank at \(5\sqrt t\) litres per minute and leaves at a constant 10 litres per minute, for \(t\ge0\). Is the amount of water increasing or decreasing at \(t=9\)? When is it decreasing?`, [
      r`Net rate: \(\dfrac{dQ}{dt}=5\sqrt t-10\).`,
      r`At \(t=9\): \(15-10=5\gt0\).`,
      r`\(5\sqrt t-10\lt0\) when \(\sqrt t\lt2\), that is \(0\le t\lt4\).`,
    ], r`Increasing at \(t=9\), at 5 litres per minute. The amount is decreasing for \(0\le t\lt4\) and increasing afterwards, so it is least at \(t=4\).`),
    ex("stretch", "Marginal profit", r`A firm's revenue from selling \(q\) items is \(R(q)=50q-0.1q^2\) dollars and its cost is \(C(q)=800+10q\) dollars. Interpret the marginal profit at \(q=150\), and find the production level at which marginal profit is zero.`, [
      r`Profit: \(P(q)=R(q)-C(q)=40q-0.1q^2-800\).`,
      r`\(P'(q)=40-0.2q\), so \(P'(150)=10\).`,
      r`\(P'(q)=0\) when \(q=200\).`,
    ], r`At a production level of 150 items, profit is increasing at $10 per additional item. Marginal profit is zero at 200 items, beyond which each extra item reduces profit.`),

    sec("Common errors"),
    mistake("forgetting the chain rule in the model", r`<p>\(\dfrac{d}{dt}\left[500e^{0.2t}\right]\) is \(100e^{0.2t}\), not \(500e^{0.2t}\). Context questions are still chain-rule questions.</p>`),
    mistake("answering with an amount when a rate was asked", r`<p>"How fast is the volume changing at \(t=10\)?" wants \(V'(10)\), not \(V(10)\).</p>`),
    mistake("subtracting the wrong way", r`<p>Net rate is in <em>minus</em> out. Reversing it turns every conclusion about increasing and decreasing upside down.</p>`),
    mistake("units of the input ignored", r`<p>\(\dfrac{dA}{dr}\) is in cm² per cm, not cm² per second. No time is involved.</p>`),

    sec("Write it so it scores"),
    justify(
      r`For the tank with inflow \(5\sqrt t\) and outflow 10 litres per minute, is the amount of water in the tank increasing or decreasing at \(t=1\)? Give a reason.`,
      r`At \(t=1\) the rate in is \(5\sqrt1=5\) litres per minute and the rate out is 10 litres per minute. Since the rate in is less than the rate out, the amount of water is decreasing at \(t=1\).`,
      r`It evaluates both rates, compares them explicitly, and draws the conclusion from the comparison. "Decreasing because the net rate is negative" is also accepted, provided the net rate \(-5\) is shown.`,
    ),
    exam(r`<p>In the calculator parts, these models are often too awkward to differentiate by hand, and you are not expected to. Define the function on the calculator, use the numerical derivative, and write the result as, for example, \(T'(10)=-2.207\).</p>`),

    sec("Practice"),
    pq(r`A sphere has volume \(V=\tfrac43\pi r^3\). Find \(\dfrac{dV}{dr}\) when \(r=3\).`, r`\(\dfrac{dV}{dr}=4\pi r^2=36\pi\) (cubic units per unit of radius: the surface area).`, "core"),
    pq(r`The number of fish in a lake is \(N(t)=\dfrac{1000}{1+t}\) after \(t\) years. Find \(N'(4)\) and interpret it.`, r`\(N'(t)=-\dfrac{1000}{(1+t)^2}\), so \(N'(4)=-40\). At \(t=4\) years the number of fish is decreasing at 40 fish per year.`, "core"),
    pq(r`A cup of coffee has temperature \(T(t)=20+60e^{-0.1t}\) °C after \(t\) minutes. How fast is it cooling at \(t=0\)?`, r`\(T'(t)=-6e^{-0.1t}\), so \(T'(0)=-6\): cooling at 6 °C per minute.`, "exam"),
    pq(r`(Calculator) For the same cup, find \(T'(10)\).`, r`\(T'(10)=-6e^{-1}=-2.207\) °C per minute.`, "exam"),
    pq(r`Water enters a tank at \(20+4t\) litres per minute and leaves at 30 litres per minute. For which \(t\ge0\) is the volume increasing?`, r`\(20+4t\gt30\) when \(t\gt2.5\).`, "exam"),
    pq(r`For a fixed mass of gas, pressure and volume satisfy \(P=\dfrac{600}{V}\) (kPa, litres). Find \(\dfrac{dP}{dV}\) at \(V=20\) and interpret it.`, r`\(\dfrac{dP}{dV}=-\dfrac{600}{V^2}=-1.5\). When the volume is 20 litres, the pressure is decreasing at 1.5 kPa per litre of added volume.`, "stretch"),
    pq(r`For \(P(t)=500e^{0.2t}\), at what time is the population growing at 1000 bacteria per hour?`, r`\(100e^{0.2t}=1000\) gives \(0.2t=\ln10\), so \(t=5\ln10\approx11.513\) hours.`, "stretch"),

    sec("Summary"),
    key([
      ["Same calculus", r`Any rate of change is a derivative.`],
      ["Input", r`Not always time: check the units.`],
      ["Net rate", r`Rate in minus rate out.`],
      ["Increasing when", r`The rate (or net rate) is positive.`],
    ]),
  ],
});

// ───────────────────────── 4.4 ─────────────────────────
u4a["4.4"] = lesson({
  code: "4.4", unit: 4, official: "4.4", calc: "No calculator",
  title: "Related Rates: Setting Up",
  parts: () => [
    lede(r`A balloon is inflated: its volume grows, and so do its radius and its surface area, all at once. These quantities are tied together by geometry, so their <em>rates</em> are tied together too. If you know how fast one is changing, calculus tells you how fast the others are. This lesson is about the set-up, which is where related-rates problems are won or lost. Lesson 4.5 applies it to the standard problem types.`),
    goals([
      r`Translate a verbal description into rates written as derivatives with respect to time.`,
      r`Write the equation that links the changing quantities.`,
      r`Differentiate that equation implicitly with respect to time.`,
      r`Distinguish quantities that vary from those that are constant.`,
    ]),

    sec("Everything is a function of time"),
    p(r`In a related-rates problem every changing quantity is a function of \(t\), even though \(t\) rarely appears in the equation. Differentiating with respect to \(t\) is therefore implicit differentiation, and <strong>every variable picks up its own rate</strong> by the chain rule:`),
    disp(r`\frac{d}{dt}\left[r^2\right]=2r\,\frac{dr}{dt}\qquad\frac{d}{dt}\left[s^3\right]=3s^2\,\frac{ds}{dt}\qquad\frac{d}{dt}[xy]=\frac{dx}{dt}\,y+x\,\frac{dy}{dt}.`),

    sec("Translating the words"),
    table(
      ["The problem says", "Write"],
      [
        ["the radius is increasing at 3 cm/s", r`\(\dfrac{dr}{dt}=3\)`],
        ["the volume is decreasing at 12 cm³/min", r`\(\dfrac{dV}{dt}=-12\)`],
        ["how fast is the area changing?", r`find \(\dfrac{dA}{dt}\)`],
        ["at the instant when the radius is 10 cm", r`\(r=10\) — to be used <strong>last</strong>`],
      ],
    ),
    p(r`A quantity that is decreasing has a <strong>negative</strong> rate. Putting the sign in at this stage, rather than fixing it at the end, prevents most sign errors.`),

    sec("The five steps"),
    `<ol><li><strong>Name</strong> each changing quantity with a letter, and draw a diagram if there is any geometry.</li><li><strong>List</strong> the given rates and the rate you want, as derivatives with respect to \(t\).</li><li><strong>Link</strong> the quantities with an equation that is true at every moment.</li><li><strong>Differentiate</strong> both sides with respect to \(t\).</li><li><strong>Substitute</strong> the values at the instant in question, and solve.</li></ol>`,
    p(r`The order of steps 4 and 5 is not negotiable. A value that holds only at one instant, such as \(r=10\), must not be substituted before differentiating: it would turn a variable into a constant, and the derivative of a constant is zero.`),

    sec("Worked examples"),
    ex("core", "One changing quantity drives another", r`The radius of a circular oil slick is increasing at 3 cm/s. How fast is its area increasing when the radius is 10 cm?`, [
      r`Given \(\dfrac{dr}{dt}=3\). Want \(\dfrac{dA}{dt}\) when \(r=10\).`,
      r`Link: \(A=\pi r^2\).`,
      r`Differentiate: \(\dfrac{dA}{dt}=2\pi r\,\dfrac{dr}{dt}\).`,
      r`Substitute: \(2\pi(10)(3)\).`,
    ], r`The area is increasing at \(60\pi\) cm² per second.`),
    ex("exam", "A chain of two links", r`The volume of a cube is increasing at 24 cm³/s. When the edge length is 2 cm, how fast is (a) the edge length and (b) the surface area changing?`, [
      r`(a) \(V=s^3\), so \(\dfrac{dV}{dt}=3s^2\dfrac{ds}{dt}\). Then \(24=3(4)\dfrac{ds}{dt}\), so \(\dfrac{ds}{dt}=2\).`,
      r`(b) \(S=6s^2\), so \(\dfrac{dS}{dt}=12s\,\dfrac{ds}{dt}=12(2)(2)\).`,
    ], r`(a) 2 cm/s. (b) 48 cm² per second.`),
    ex("exam", "A product of two variables", r`Two quantities satisfy \(xy=12\) at all times. When \(x=3\), \(x\) is increasing at 2 units per second. How fast is \(y\) changing?`, [
      r`Differentiate with the product rule: \(\dfrac{dx}{dt}\,y+x\,\dfrac{dy}{dt}=0\).`,
      r`At that instant \(x=3\), so \(y=\dfrac{12}{3}=4\).`,
      r`\((2)(4)+3\,\dfrac{dy}{dt}=0\).`,
    ], r`\(\dfrac{dy}{dt}=-\dfrac83\): \(y\) is decreasing at \(\dfrac83\) units per second.`),
    ex("stretch", "Two rates feeding one", r`A cylinder's radius is increasing at 1 cm/s while its height is decreasing at 2 cm/s. How fast is the volume changing when the radius is 3 cm and the height is 5 cm?`, [
      r`\(V=\pi r^2h\), with both \(r\) and \(h\) varying.`,
      r`Product and chain rules: \(\dfrac{dV}{dt}=\pi\left(2r\,\dfrac{dr}{dt}\,h+r^2\,\dfrac{dh}{dt}\right)\).`,
      r`Substitute \(r=3\), \(h=5\), \(\dfrac{dr}{dt}=1\), \(\dfrac{dh}{dt}=-2\): \(\pi(30-18)\).`,
    ], r`The volume is increasing at \(12\pi\) cm³ per second.`),

    sec("Common errors"),
    mistake("substituting before differentiating", r`<p>Writing \(A=\pi(10)^2=100\pi\) and then differentiating gives \(\dfrac{dA}{dt}=0\). The radius is changing; only its value <em>at one instant</em> is 10.</p>`),
    mistake("no rate attached to a variable", r`<p>\(\dfrac{d}{dt}\left[\pi r^2\right]=2\pi r\) is the derivative with respect to \(r\). With respect to \(t\) it is \(2\pi r\,\dfrac{dr}{dt}\).</p>`),
    mistake("a decreasing quantity given a positive rate", r`<p>"Decreasing at 2 cm/s" is \(\dfrac{dh}{dt}=-2\). In the cylinder example the wrong sign changes \(12\pi\) into \(48\pi\).</p>`),
    mistake("treating a constant as a variable (or the reverse)", r`<p>A ladder's length does not change; the distance of its foot from the wall does. Decide which is which before differentiating.</p>`),

    sec("Write it so it scores"),
    justify(
      r`The radius of a sphere is increasing at 0.2 cm/s. Find the rate at which its surface area \(S=4\pi r^2\) is changing when \(r=5\) cm. Indicate units.`,
      r`\(\dfrac{dS}{dt}=8\pi r\,\dfrac{dr}{dt}\). When \(r=5\): \(\dfrac{dS}{dt}=8\pi(5)(0.2)=8\pi\) cm² per second.`,
      r`The differentiated equation appears in general form <em>before</em> any numbers go in. That line is where the chain-rule point is awarded, and it shows the reader that substitution came afterwards.`,
    ),
    exam(r`<p>Related-rates parts are typically worth two or three points: one for the differentiated equation, one for the answer, sometimes one for units. Even if your arithmetic fails, a correct differentiated equation on the page keeps the first point.</p>`),

    sec("Practice"),
    pq(r`Differentiate \(A=\tfrac12bh\) with respect to \(t\), given that both \(b\) and \(h\) vary.`, r`\(\dfrac{dA}{dt}=\dfrac12\left(\dfrac{db}{dt}\,h+b\,\dfrac{dh}{dt}\right)\).`, "core"),
    pq(r`The side of a square is increasing at 0.5 cm/s. How fast is its area increasing when the side is 8 cm?`, r`\(\dfrac{dA}{dt}=2s\,\dfrac{ds}{dt}=2(8)(0.5)=8\) cm² per second.`, "core"),
    pq(r`A spherical balloon is inflated at 100 cm³/s. How fast is the radius increasing when \(r=5\) cm?`, r`\(\dfrac{dV}{dt}=4\pi r^2\dfrac{dr}{dt}\), so \(100=100\pi\,\dfrac{dr}{dt}\) and \(\dfrac{dr}{dt}=\dfrac1\pi\) cm/s.`, "exam"),
    pq(r`A gas satisfies \(PV=600\). When \(V=20\), the volume is increasing at 2 units per second. How fast is the pressure changing?`, r`\(\dfrac{dP}{dt}V+P\dfrac{dV}{dt}=0\) with \(P=30\): \(20\dfrac{dP}{dt}+60=0\), so \(\dfrac{dP}{dt}=-3\).`, "exam"),
    pq(r`Quantities satisfy \(z^2=x^2+y^2\). When \(x=3\) and \(y=4\), \(\dfrac{dx}{dt}=2\) and \(\dfrac{dy}{dt}=-1\). Find \(\dfrac{dz}{dt}\).`, r`\(z=5\). \(2z\dfrac{dz}{dt}=2x\dfrac{dx}{dt}+2y\dfrac{dy}{dt}\), so \(5\dfrac{dz}{dt}=6-4=2\) and \(\dfrac{dz}{dt}=\dfrac25\).`, "exam"),
    pq(r`A rectangle's length is increasing at 3 cm/s and its width is decreasing at 2 cm/s. When the length is 10 cm and the width is 6 cm, how fast are (a) the area and (b) the diagonal changing?`, r`(a) \(\dfrac{dA}{dt}=3(6)+10(-2)=-2\) cm²/s. (b) \(D^2=\ell^2+w^2\), \(D=\sqrt{136}\); \(D\dfrac{dD}{dt}=10(3)+6(-2)=18\), so \(\dfrac{dD}{dt}=\dfrac{18}{\sqrt{136}}=\dfrac{9}{\sqrt{34}}\) cm/s.`, "stretch"),

    sec("Summary"),
    key([
      ["Every variable", r`Is a function of \(t\) and gets its own \(\tfrac{d}{dt}\).`],
      ["Signs", r`Decreasing means a negative rate, from the start.`],
      ["Order", r`Link, differentiate, <em>then</em> substitute.`],
      ["Constants", r`Decide what does not change before you begin.`],
    ]),
  ],
});
