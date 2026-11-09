// MCF3M 3.4 — Solving Problems with Quadratic Equations: area/border, consecutive numbers, projectile times and
// intervals, revenue, right triangles; rejecting inadmissible roots.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, roots, hard, plane, fig } from "../lib.mjs";
import { areaBox } from "../figs.mjs";
const S = String.raw;

export const TITLE = "3.4 Solving Problems with Quadratic Equations";

export const blocks = () => [
  intro({
    icon: "🛠️",
    title: "Solving Problems with Quadratic Equations",
    overview: S`Many real questions lead to a quadratic equation: the width of a border that gives a certain area, the time at which a ball reaches a height, the price that brings in a target revenue. The method is always the same — define a variable, write an equation, rearrange to \(=0\), factor, solve, and then <b>interpret</b>. Interpreting matters: a quadratic usually gives two roots, and the situation decides whether both make sense (a negative width or time is rejected).`,
    goals: [
      "define a variable and translate a situation into a quadratic equation;",
      "solve the equation by factoring and interpret both roots;",
      "reject roots that make no sense in the context;",
      "find a time interval during which a quantity is above a given value;",
      "answer the question with units and a check.",
    ],
    curriculum: "A3.3 (solve problems arising from real-world applications, given the algebraic representation of a quadratic function, including the time interval when a ball is higher than a given measurement), A1.4, A2.4",
    prior: [
      [S`Solve \(x^2+2x-48=0\).`, S`\((x+8)(x-6)=0\): \(x=-8\) or \(6\).`],
      [S`A rectangle is \(x\) by \(x+3\). Write its area.`, S`\(x(x+3)=x^2+3x\).`],
      [S`Pythagoras for legs \(a,b\) and hypotenuse \(c\)?`, S`\(a^2+b^2=c^2\).`],
    ],
    words: [
      ["Let statement", "defines the variable and its units", "let w be the width in metres"],
      ["Admissible root", "a root that makes sense in the situation", "w = 6"],
      ["Inadmissible root", "a root rejected by the context", "w = −8"],
      ["Interval", "a range of input values", "\\(1<t<4\\)"],
      ["Interpret", "say what the answer means, with units", "the ball lands after 5 s"],
    ],
  }),

  section("📌 A problem-solving routine", S`
  ${table(["Step", "What to do"], [
    ["1. Define", "write 'Let x be …' with units"],
    ["2. Model", "write an equation from the facts (diagram!)"],
    ["3. Rearrange", "make one side zero"],
    ["4. Solve", "factor and use the zero-product property"],
    ["5. Interpret", "reject impossible roots; answer the question in words with units"],
    ["6. Check", "substitute into the original facts, not just the equation"],
  ])}
  ${keyIdea(S`For a height model \(h(t)\), "when is the object above \(k\) metres?" has an interval answer: solve \(h(t)=k\) to get two times \(t_1<t_2\); between them the parabola (opening down) is above the line \(y=k\).`)}
  ${plane({ view: { xmin: -0.3, xmax: 6.5, ymin: -3, ymax: 50 }, curves: [{ f: (t) => -5 * t * t + 30 * t + 5, a: 0, b: 6.16, color: "violet" }], lines: [{ m: 0, b: 30, color: "green", dash: true }], points: [{ x: 1, y: 30, label: "(1, 30)", color: "amber" }, { x: 5, y: 30, label: "(5, 30)", color: "amber" }], step: { x: 1, y: 5 }, xlabel: "t (s)", ylabel: "h (m)" }, "h(t) = −5t² + 30t + 5 is above 30 m between t = 1 and t = 5.")}`),

  widget("heightInterval", { init: [30, 5, 30] }),

  section("⚠️ Common errors", S`
  ${watchOut([
    "Answer the question asked: 'how wide is the border' needs x, but 'what are the outer dimensions' needs more.",
    "Reject negative lengths, times before the start, or prices that give negative sales.",
    "In an interval problem, both roots matter — they are the start and end of the interval.",
    "Check in the words of the problem: a border of 2 m on a 10 m × 6 m pool gives 14 m × 10 m.",
    "Keep units consistent (cm with cm, s with s).",
  ])}`),

  examples([
    ["A border of uniform width", S`A \(10\) m by \(6\) m pool is surrounded by a deck of uniform width. The pool and deck together cover \(140\) m². How wide is the deck?`,
      [S`<b>Define.</b> Let \(x\) be the width of the deck in metres. Outer dimensions: \((10+2x)\) by \((6+2x)\).`,
        S`<b>Model.</b> \((10+2x)(6+2x)=140\).`,
        S`<b>Rearrange.</b> \(60+32x+4x^2=140\Rightarrow4x^2+32x-80=0\Rightarrow x^2+8x-20=0\).`,
        S`<b>Solve.</b> \((x+10)(x-2)=0\Rightarrow x=-10\) or \(x=2\).`,
        S`<b>Interpret.</b> A width cannot be negative, so the deck is \(2\) m wide. Check: outer \(14\times10=140\) m² ✓`],
      S`2 m (the root −10 is rejected)`,
      fig(areaBox(["10", "+2x"], ["6", "+2x"], [["60", "20x"], ["12x", "4x²"]], "(10 + 2x)(6 + 2x) = 140"), "Pool (60 m²) plus deck pieces.")],

    ["Consecutive integers", S`The product of two consecutive odd integers is \(143\). Find the integers.`,
      [S`<b>Define.</b> Let the integers be \(n\) and \(n+2\).`,
        S`<b>Model.</b> \(n(n+2)=143\Rightarrow n^2+2n-143=0\).`,
        S`<b>Solve.</b> Product \(-143\), sum \(2\): \(13\) and \(-11\). \((n+13)(n-11)=0\Rightarrow n=11\) or \(n=-13\).`,
        S`<b>Interpret.</b> Both are odd, so both work: \(11\) and \(13\), or \(-13\) and \(-11\).`,
        S`<b>Check.</b> \(11\times13=143\) ✓; \((-13)(-11)=143\) ✓`],
      S`11 and 13, or −13 and −11`,
      plane({ view: { xmin: -16, xmax: 14, ymin: -160, ymax: 40 }, curves: [{ f: (n) => n * n + 2 * n - 143, color: "violet" }], points: [{ x: 11, y: 0, label: "(11, 0)", color: "amber" }, { x: -13, y: 0, label: "(−13, 0)", color: "amber" }], step: { x: 2, y: 20 } })],

    ["Above a given height", S`A ball is kicked: \(h(t)=-5t^2+20t+1\) m. During what interval is it above \(16\) m?`,
      [S`<b>Boundary times.</b> \(-5t^2+20t+1=16\Rightarrow-5t^2+20t-15=0\Rightarrow t^2-4t+3=0\).`,
        S`<b>Solve.</b> \((t-1)(t-3)=0\Rightarrow t=1\) or \(t=3\).`,
        S`<b>Interpret.</b> The parabola opens down, so it is above \(16\) between the roots: \(1<t<3\).`,
        S`<b>Check a time inside.</b> \(h(2)=-20+40+1=21>16\) ✓. Outside, \(h(0.5)=-1.25+10+1=9.75<16\) ✓`],
      S`between t = 1 s and t = 3 s (2 seconds)`,
      plane({ view: { xmin: -0.3, xmax: 4.5, ymin: -2, ymax: 24 }, curves: [{ f: (t) => -5 * t * t + 20 * t + 1, a: 0, b: 4.05, color: "violet" }], lines: [{ m: 0, b: 16, color: "green", dash: true }], points: [{ x: 1, y: 16, label: "(1, 16)", color: "amber" }, { x: 3, y: 16, label: "(3, 16)", color: "amber" }], step: { x: 0.5, y: 2 }, xlabel: "t (s)", ylabel: "h (m)" })],

    ["Revenue", S`A club sells \(400-20x\) memberships at \((25+x)\) dollars each when the price rises by \(x\) dollars. For which price increases is the revenue \(10\,500\) dollars?`,
      [S`<b>Model.</b> \(R=(25+x)(400-20x)=10\,000-500x+400x-20x^2=-20x^2-100x+10\,000\).`,
        S`<b>Equation.</b> \(-20x^2-100x+10\,000=10\,500\Rightarrow-20x^2-100x-500=0\Rightarrow x^2+5x+25=0\).`,
        S`<b>Solve?</b> No integer pair has product \(25\) and sum \(5\); the graph of \(R\) peaks below \(10\,500\). So this revenue is impossible.`,
        S`<b>Check the maximum.</b> Zeros of \(R\) at \(x=-25\) and \(x=20\); vertex at \(x=-2.5\): \(R=(22.5)(450)=10\,125<10\,500\) ✓`,
        S`<b>Interpret.</b> The most the club can earn is \(10\,125\) dollars (at a price decrease of \(2.50\)), so \(10\,500\) cannot be reached.`],
      S`no price works; the maximum revenue is 10 125 dollars`,
      plane({ view: { xmin: -26, xmax: 22, ymin: -500, ymax: 11500 }, curves: [{ f: (x) => (25 + x) * (400 - 20 * x), a: -25, b: 20, color: "violet" }], lines: [{ m: 0, b: 10500, color: "red", dash: true }], points: [{ x: -2.5, y: 10125, label: "(−2.5, 10125)", color: "amber" }], step: { x: 5, y: 1000 } })],

    ["A right triangle", S`The legs of a right triangle are \(x\) cm and \((x+7)\) cm, and the hypotenuse is \(13\) cm. Find the legs.`,
      [S`<b>Model (Pythagoras).</b> \(x^2+(x+7)^2=13^2\).`,
        S`<b>Expand.</b> \(x^2+x^2+14x+49=169\Rightarrow2x^2+14x-120=0\Rightarrow x^2+7x-60=0\).`,
        S`<b>Solve.</b> \((x+12)(x-5)=0\Rightarrow x=5\) (reject \(-12\)).`,
        S`<b>Answer.</b> Legs \(5\) cm and \(12\) cm.`,
        S`<b>Check.</b> \(25+144=169=13^2\) ✓`],
      S`5 cm and 12 cm`,
      plane({ view: { xmin: -1, xmax: 7, ymin: -1, ymax: 13 }, segs: [{ pts: [[0, 0], [5, 0], [0, 12], [0, 0]], color: "violet" }], points: [{ x: 2.5, y: 0, label: "x = 5", color: "blue" }, { x: 0, y: 6, label: "x + 7 = 12", color: "blue" }, { x: 2.5, y: 6, label: "13", color: "red" }], step: { x: 1, y: 1 }, bare: true })],
  ]),

  practice([
    q("area", S`A rectangle's length is \(4\) m more than its width and its area is \(96\) m². Enter the width.`, num(8), "w(w + 4) = 96.", [S`\(w^2+4w-96=(w+12)(w-8)=0\).`], S`\(8\)`),
    q("numbers", S`Two consecutive integers have product \(210\). Enter the positive smaller one.`, num(14), "n(n + 1) = 210.", [S`\(n^2+n-210=(n+15)(n-14)\).`], S`\(14\)`),
    q("height", S`\(h(t)=-5t^2+25t\). Enter both times when \(h=30\).`, roots(2, 3), "−5t² + 25t − 30 = 0.", [S`\(t^2-5t+6=(t-2)(t-3)\).`], S`\(t=2,\ 3\)`),
    q("border", S`A \(6\) cm by \(4\) cm photo gets a border of width \(x\); the total area is \(48\) cm². Enter \(x\).`, num(1), "(6 + 2x)(4 + 2x) = 48.", [S`\(4x^2+20x-24=0\Rightarrow x^2+5x-6=(x+6)(x-1)\).`], S`\(1\)`),
    q("reject", S`Which root is rejected when a length satisfies \(x^2-3x-28=0\)?`, choice(["−4", "7", "both", "neither"], 0), "Lengths are positive.", [S`\((x-7)(x+4)=0\): reject \(-4\).`], S`\(-4\)`),
  ]),

  ...hard([
    ["A fenced pen", S`A farmer uses \(50\) m of fencing for three sides of a rectangular pen against a barn. The area is \(300\) m². Find all possible dimensions.`,
      [S`<b>Define.</b> Let \(x\) be each side perpendicular to the barn; the side parallel is \(50-2x\).`,
        S`<b>Model.</b> \(x(50-2x)=300\Rightarrow-2x^2+50x-300=0\Rightarrow x^2-25x+150=0\).`,
        S`<b>Solve.</b> \((x-10)(x-15)=0\Rightarrow x=10\) or \(15\).`,
        S`<b>Interpret.</b> Two pens: \(10\) by \(30\) m, or \(15\) by \(20\) m. Both areas are \(300\) ✓`],
      S`10 m × 30 m or 15 m × 20 m`,
      plane({ view: { xmin: 0, xmax: 26, ymin: -20, ymax: 340 }, curves: [{ f: (x) => x * (50 - 2 * x), a: 0, b: 25, color: "violet" }], lines: [{ m: 0, b: 300, color: "green", dash: true }], points: [{ x: 10, y: 300, label: "(10, 300)", color: "amber" }, { x: 15, y: 300, label: "(15, 300)", color: "amber" }], step: { x: 5, y: 50 } })],
    ["Two trains", S`Two trains leave a station at right angles. One is \(10\) km/h faster than the other. After \(1\) hour they are \(50\) km apart. Find their speeds.`,
      [S`<b>Model.</b> Speeds \(v\) and \(v+10\); after 1 h the distances are \(v\) and \(v+10\): \(v^2+(v+10)^2=50^2\).`,
        S`<b>Simplify.</b> \(2v^2+20v+100=2500\Rightarrow v^2+10v-1200=0\).`,
        S`<b>Solve.</b> \((v+40)(v-30)=0\Rightarrow v=30\).`,
        S`<b>Answer.</b> \(30\) km/h and \(40\) km/h; check \(900+1600=2500\) ✓`],
      S`30 km/h and 40 km/h`],
  ], [
    q("hard", S`A \(12\) m by \(8\) m garden has a path of uniform width inside its edge; the remaining planted area is \(60\) m². Enter the path width (m).`, num(1), "(12 − 2x)(8 − 2x) = 60.", [S`\(4x^2-40x+36=0\Rightarrow x^2-10x+9=(x-1)(x-9)\).`, S`\(x=9\) is too wide, so \(x=1\).`], S`\(1\)`),
    q("hard", S`\(h(t)=-5t^2+40t\). For how many seconds is the object at least \(60\) m high?`, num(4), "Solve −5t² + 40t = 60.", [S`\(t^2-8t+12=(t-2)(t-6)\); \(6-2=4\).`], S`\(4\)`),
    q("hard", S`The sum of the squares of two consecutive positive even integers is \(244\). Enter the smaller.`, num(10), "n² + (n + 2)² = 244.", [S`\(2n^2+4n-240=0\Rightarrow n^2+2n-120=(n+12)(n-10)\).`], S`\(10\)`),
    q("hard", S`A rectangle has perimeter \(34\) cm and diagonal \(13\) cm. Enter its longer side.`, num(12), "l + w = 17, l² + w² = 169.", [S`\(w^2+(17-w)^2=169\Rightarrow w^2-17w+60=0\Rightarrow w=5\) or \(12\).`], S`\(12\)`),
    q("hard", S`A theatre sells \(300-10x\) tickets at \((20+x)\) dollars. Enter the larger price increase \(x\) giving revenue \(6000\) dollars.`, num(10), "(20 + x)(300 − 10x) = 6000.", [S`\(6000+100x-10x^2=6000\Rightarrow x(10-x)=0\).`, S`\(x=0\) or \(10\).`], S`\(10\)`),
  ]),

  wrapUp({
    qas: [
      ["Why do I often reject one root?", "Lengths, times and prices must make sense; negative or too-large values are rejected."],
      ["How do I find when a ball is above a height?", "Solve h(t) = height; the ball is above it between the two roots."],
      ["What if the equation has no real roots?", "The situation cannot happen (e.g. the target revenue is above the maximum)."],
      ["Why write a 'let' statement?", "So the variable and its units are clear and the answer can be interpreted."],
      ["How should I check?", "Use the numbers in the original story, not only the equation."],
    ],
    summary: [
      "Define → model → rearrange → factor → solve → interpret → check.",
      "Reject roots that do not fit the context.",
      "Intervals: between the two roots for a downward parabola.",
      "No real root = impossible situation.",
    ],
    next: "3.5 builds quadratic models from data.",
  }),
];
