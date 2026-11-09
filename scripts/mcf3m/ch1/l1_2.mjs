// MCF3M 1.2 — Function Notation: reading f(x), evaluating linear and quadratic functions (numbers, negatives,
// expressions), reading values from a graph, solving f(x) = k, and interpreting values in context.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane, roots, expr } from "../lib.mjs";
const S = String.raw;

export const TITLE = "1.2 Function Notation";

export const blocks = () => [
  intro({
    icon: "🏷️",
    title: "Function Notation",
    overview: S`Writing \(f(x)=2x^2-3x+1\) instead of \(y=2x^2-3x+1\) does two jobs at once: it gives the function a name, \(f\), and it shows the input in brackets. Then \(f(4)\) means "the output of \(f\) when the input is \(4\)", and \(f(4)=21\) records both numbers in one short statement. In this lesson you evaluate linear and quadratic functions, read values from graphs, work backwards from an output, and interpret the results in real situations.`,
    goals: [
      "read and write statements such as \\(f(3)=7\\) and explain what each number means;",
      "evaluate linear and quadratic functions at integers, negatives, fractions and expressions;",
      "read \\(f(a)\\) from a graph, and find the inputs where \\(f(x)\\) equals a given value;",
      "solve \\(f(x)=k\\) for linear and simple quadratic functions;",
      "interpret function values in context (units, meaning, reasonableness).",
    ],
    curriculum: "A2.2 (substitute into and evaluate linear and quadratic functions represented using function notation, including functions arising from real-world applications)",
    prior: [
      [S`Evaluate \(3(-2)^2-4(-2)\).`, S`\(3(4)+8=20\). Square first, then multiply.`],
      [S`Solve \(5x-7=18\).`, S`\(5x=25\), so \(x=5\).`],
      [S`Which numbers satisfy \(x^2=36\)?`, S`\(x=6\) and \(x=-6\).`],
    ],
    words: [
      ["f(x)", "the output of the function f for the input x (read “f of x”)", "\\(f(x)=x^2+1\\)"],
      ["Evaluate", "replace x by a value and simplify", "\\(f(3)=3^2+1=10\\)"],
      ["Argument", "whatever is inside the brackets", "in \\(f(a+1)\\) the argument is \\(a+1\\)"],
      ["Point on the graph", "f(a) = b means (a, b) is on the graph", "\\(f(3)=10\\Rightarrow(3,\\,10)\\)"],
      ["Solve f(x) = k", "find every input whose output is k", "\\(x^2+1=10\\Rightarrow x=\\pm3\\)"],
    ],
  }),

  section("📌 Reading function notation", S`
  <p>\(f(x)\) is <b>not</b> "\(f\) times \(x\)". The letter \(f\) is the name of the rule and the brackets hold the input. Other letters are common: \(g(x)\), \(h(t)\) for height at time \(t\), \(C(n)\) for the cost of \(n\) items.</p>
  ${table(["Statement", "Input", "Output", "Point on the graph"], [
    ["\\(f(2)=9\\)", "2", "9", "\\((2,\\,9)\\)"],
    ["\\(g(-1)=0\\)", "−1", "0", "\\((-1,\\,0)\\): an x-intercept"],
    ["\\(h(0)=1.5\\)", "0", "1.5", "\\((0,\\,1.5)\\): the y-intercept"],
  ])}
  ${keyIdea(S`To evaluate, replace <b>every</b> \(x\) by the input <b>in brackets</b>, then follow the order of operations. To solve \(f(x)=k\), set the rule equal to \(k\) and solve for \(x\) — there may be zero, one or two answers.`)}
  ${plane({ view: { xmin: -3, xmax: 5, ymin: -3, ymax: 9 }, curves: [{ f: (x) => x * x - 2 * x - 1, color: "violet" }], vlines: [{ x: 4, color: "blue", dash: true }], lines: [{ m: 0, b: 2, color: "green", dash: true }], points: [{ x: 4, y: 7, label: "f(4) = 7", color: "blue" }, { x: 3, y: 2, label: "(3, 2)", color: "green" }, { x: -1, y: 2, label: "(−1, 2)", color: "green" }], step: { x: 1, y: 1 } }, "f(x) = x² − 2x − 1. Up from x = 4 reads f(4) = 7; across from y = 2 finds both solutions of f(x) = 2.")}`),

  widget("notationLab", { init: [1, -2, -1] }),

  section("⚠️ Careful substitution", S`
  ${watchOut([
    "Bracket negative inputs: for f(x) = x², f(−3) = (−3)² = 9, not −3² = −9.",
    "f(2) + 3 (add 3 to the output) is different from f(2 + 3) = f(5) (change the input).",
    "2f(x) doubles the output; f(2x) doubles the input — they are different functions.",
    "f(a) = b and f(b) = a are different statements; keep inputs and outputs in their places.",
    "A quadratic equation f(x) = k can have two answers; always look for both.",
  ])}`),

  examples([
    ["Evaluate a quadratic", S`For \(f(x)=2x^2-3x+1\), find \(f(3)\), \(f(-2)\) and \(f\!\left(\tfrac12\right)\).`,
      [S`<b>Method.</b> Replace every \(x\) by the input in brackets. Then square first, multiply next, and add or subtract last.`,
        S`<b>\(f(3)\):</b> \(2(3)^2-3(3)+1=2(9)-9+1=18-9+1=10\).`,
        S`<b>\(f(-2)\):</b> \(2(-2)^2-3(-2)+1=2(4)+6+1=15\). The bracket makes \((-2)^2=4\), and \(-3(-2)=+6\).`,
        S`<b>\(f\!\left(\tfrac12\right)\):</b> \(2\left(\tfrac14\right)-\tfrac32+1=\tfrac12-\tfrac32+1=0\). So \(\tfrac12\) is a zero of \(f\).`,
        S`<b>Read as points.</b> The results are the points \((3,\,10)\), \((-2,\,15)\) and \(\left(\tfrac12,\,0\right)\) on the graph of \(f\).`,
        S`<b>Check on the graph.</b> The parabola passes through all three marked points, and it crosses the \(x\)-axis at \(x=\tfrac12\), agreeing with \(f\!\left(\tfrac12\right)=0\) ✓`],
      S`\(f(3)=10\), \(f(-2)=15\), \(f\!\left(\tfrac12\right)=0\)`,
      plane({ view: { xmin: -3, xmax: 4, ymin: -2, ymax: 17 }, curves: [{ f: (x) => 2 * x * x - 3 * x + 1, color: "violet" }], points: [{ x: 3, y: 10, label: "(3, 10)", color: "amber" }, { x: -2, y: 15, label: "(−2, 15)", color: "amber" }, { x: 0.5, y: 0, label: "(0.5, 0)", color: "amber" }], step: { x: 1, y: 2 } })],

    ["An expression as the input", S`For \(g(x)=x^2-4x\), find and simplify \(g(a+1)\). Then use it to find \(g(3)\).`,
      [S`<b>Rule.</b> The argument is now \(a+1\). Every \(x\) is replaced by the whole bracket \((a+1)\).`,
        S`<b>Substitute.</b> \(g(a+1)=(a+1)^2-4(a+1)\).`,
        S`<b>Expand.</b> \((a+1)^2=a^2+2a+1\) and \(-4(a+1)=-4a-4\).`,
        S`<b>Collect like terms.</b> \(a^2+2a+1-4a-4=a^2-2a-3\). So \(g(a+1)=a^2-2a-3\).`,
        S`<b>Use it.</b> \(g(3)\) means \(a+1=3\), so \(a=2\): \(2^2-2(2)-3=4-4-3=-3\).`,
        S`<b>Check directly.</b> \(g(3)=3^2-4(3)=9-12=-3\) ✓. The point \((3,\,-3)\) is on the graph of \(g\).`],
      S`\(g(a+1)=a^2-2a-3\); \(g(3)=-3\)`,
      plane({ view: { xmin: -2, xmax: 6, ymin: -5, ymax: 6 }, curves: [{ f: (x) => x * x - 4 * x, color: "violet" }], points: [{ x: 3, y: -3, label: "(3, −3)", color: "amber" }, { x: 2, y: -4, label: "(2, −4)", color: "gray" }], step: { x: 1, y: 1 } })],

    ["Reading values from a graph", S`The graph shows \(y=h(x)\). Find \(h(0)\), \(h(4)\), and every \(x\) with \(h(x)=3\).`,
      [S`<b>Rule.</b> \(h(a)\) is the \(y\)-coordinate of the point of the graph above (or below) \(x=a\). To solve \(h(x)=3\), draw the horizontal line \(y=3\) and read the \(x\)-coordinates where it meets the graph.`,
        S`<b>\(h(0)\).</b> Go up from \(x=0\): the graph is at \(y=-1\), so \(h(0)=-1\) (the \(y\)-intercept).`,
        S`<b>\(h(4)\).</b> Go up from \(x=4\): the graph is at \(y=7\), so \(h(4)=7\).`,
        S`<b>\(h(x)=3\).</b> The line \(y=3\) meets the curve twice, at about \(x=-2.8\) and \(x=2.8\). A horizontal line can meet a parabola twice, so two inputs share the output \(3\).`,
        S`<b>Exact check with the rule.</b> This curve is \(h(x)=\tfrac12x^2-1\): it passes through \((0,\,-1)\), and \(h(4)=\tfrac12(16)-1=7\) ✓. Solving \(\tfrac12x^2-1=3\) gives \(\tfrac12x^2=4\), so \(x^2=8\) and \(x=\pm\sqrt8=\pm2\sqrt2\approx\pm2.83\) ✓`,
        S`<b>Conclusion.</b> Reading a graph is fast but only approximate (\(x\approx\pm2.8\)). The rule gives exact values (\(x=\pm2\sqrt2\)), and the two methods agree.`],
      S`\(h(0)=-1\), \(h(4)=7\), \(h(x)=3\) at \(x=\pm2\sqrt2\approx\pm2.83\)`,
      plane({ view: { xmin: -5, xmax: 5, ymin: -2, ymax: 9 }, curves: [{ f: (x) => 0.5 * x * x - 1, color: "violet" }], lines: [{ m: 0, b: 3, color: "green", dash: true }], points: [{ x: 0, y: -1, label: "(0, −1)", color: "amber" }, { x: 4, y: 7, label: "(4, 7)", color: "amber" }, { x: Math.sqrt(8), y: 3, label: "(2.83, 3)", color: "green" }, { x: -Math.sqrt(8), y: 3, label: "(−2.83, 3)", color: "green" }], step: { x: 1, y: 1 } })],

    ["Solving f(x) = k", S`For \(f(x)=-3x+7\) and \(g(x)=x^2-5\): (a) solve \(f(x)=-8\); (b) solve \(g(x)=11\); (c) solve \(g(x)=-9\).`,
      [S`<b>Rule.</b> \(f(x)=k\) asks for the input(s) whose output is \(k\). Replace \(f(x)\) by its rule and solve the equation.`,
        S`<b>(a) Linear.</b> \(-3x+7=-8\Rightarrow-3x=-15\Rightarrow x=5\). Check: \(f(5)=-15+7=-8\) ✓. A non-horizontal line meets each horizontal line once, so there is exactly one answer.`,
        S`<b>(b) Quadratic.</b> \(x^2-5=11\Rightarrow x^2=16\Rightarrow x=4\) or \(x=-4\). Check: \(g(4)=16-5=11\) ✓ and \(g(-4)=16-5=11\) ✓.`,
        S`<b>(c) No solution.</b> \(x^2-5=-9\Rightarrow x^2=-4\). A square is never negative, so there is no real \(x\).`,
        S`<b>Check with the graph.</b> The lowest point of \(g\) is \((0,\,-5)\). The line \(y=11\) is above it and meets the parabola twice; the line \(y=-9\) is below it and misses ✓`],
      S`(a) \(x=5\); (b) \(x=\pm4\); (c) no real solution`,
      plane({ view: { xmin: -6, xmax: 6, ymin: -11, ymax: 14 }, curves: [{ f: (x) => x * x - 5, color: "violet" }], lines: [{ m: 0, b: 11, color: "green", dash: true }, { m: 0, b: -9, color: "red", dash: true }], points: [{ x: 4, y: 11, label: "(4, 11)", color: "green" }, { x: -4, y: 11, label: "(−4, 11)", color: "green" }, { x: 0, y: -5, label: "(0, −5)", color: "amber" }], step: { x: 1, y: 2 } })],

    ["Function notation in context", S`A drone's height in metres \(t\) seconds after launch is \(H(t)=-2t^2+16t\). (a) Find and interpret \(H(3)\). (b) Is \(H(10)\) meaningful? (c) When is the drone \(30\) m high?`,
      [S`<b>(a)</b> \(H(3)=-2(9)+16(3)=-18+48=30\). Meaning: <b>3 seconds</b> after launch the drone is <b>30 m</b> above the ground. The input has units of seconds, the output units of metres.`,
        S`<b>(b)</b> \(H(10)=-2(100)+160=-40\). A negative height is impossible, so the model does not apply at \(t=10\): the drone landed before then.`,
        S`<b>(c) Solve \(H(t)=30\).</b> \(-2t^2+16t=30\Rightarrow-2t^2+16t-30=0\Rightarrow t^2-8t+15=0\).`,
        S`<b>Factor.</b> \(t^2-8t+15=(t-3)(t-5)=0\), so \(t=3\) or \(t=5\).`,
        S`<b>Interpret and check.</b> The drone passes \(30\) m going up at \(3\) s and coming down at \(5\) s. Check: \(H(5)=-50+80=30\) ✓. The graph shows the line \(H=30\) crossing the curve twice ✓`],
      S`(a) H(3) = 30: 30 m high after 3 s; (b) no, H(10) = −40 is impossible; (c) at t = 3 s and t = 5 s`,
      plane({ view: { xmin: 0, xmax: 9, ymin: -2, ymax: 36 }, curves: [{ f: (t) => -2 * t * t + 16 * t, a: 0, b: 8, color: "violet" }], lines: [{ m: 0, b: 30, color: "green", dash: true }], points: [{ x: 3, y: 30, label: "(3, 30)", color: "amber" }, { x: 5, y: 30, label: "(5, 30)", color: "amber" }, { x: 8, y: 0, label: "lands (8, 0)", color: "gray" }], step: { x: 1, y: 4 }, xlabel: "t (s)", ylabel: "H (m)" })],
  ]),

  practice([
    q("evaluate", S`If \(f(x)=3x^2-x+4\), find \(f(-2)\).`, num(18), "Bracket the −2: 3(−2)² − (−2) + 4.", [S`\(3(4)+2+4=18\).`], S`\(18\)`),
    q("evaluate", S`If \(g(x)=5-2x\), find \(g(-3)+g(1)\).`, num(14), "Evaluate each, then add.", [S`\(g(-3)=11\), \(g(1)=3\); \(11+3=14\).`], S`\(14\)`),
    q("expression", S`If \(f(x)=x^2+3x\), simplify \(f(2a)\).`, expr("4*a^2+6*a"), "Replace every x by (2a).", [S`\((2a)^2+3(2a)=4a^2+6a\).`], S`\(4a^2+6a\)`),
    q("solve", S`Solve \(p(x)=2x^2-7=43\). Enter both values.`, roots(5, -5), "2x² = 50.", [S`\(x^2=25\Rightarrow x=\pm5\).`], S`\(x=\pm5\)`),
    q("context", S`The cost to print \(n\) posters is \(C(n)=0.75n+20\) dollars. For how many posters is \(C(n)=65\)?`, num(60), "Solve 0.75n + 20 = 65.", [S`\(0.75n=45\Rightarrow n=60\).`], S`\(60\)`),
  ]),

  ...hard([
    ["Find the coefficients", S`A quadratic \(f(x)=ax^2+bx+3\) has \(f(1)=4\) and \(f(-2)=19\). Find \(a\) and \(b\), then find \(f(3)\).`,
      [S`<b>Use \(f(1)=4\):</b> \(a+b+3=4\Rightarrow a+b=1\).`,
        S`<b>Use \(f(-2)=19\):</b> \(4a-2b+3=19\Rightarrow4a-2b=16\Rightarrow2a-b=8\).`,
        S`<b>Add the two equations:</b> \((a+b)+(2a-b)=1+8\Rightarrow3a=9\Rightarrow a=3\), then \(b=1-3=-2\).`,
        S`<b>So</b> \(f(x)=3x^2-2x+3\) and \(f(3)=27-6+3=24\).`,
        S`<b>Check:</b> \(f(1)=3-2+3=4\) ✓, \(f(-2)=12+4+3=19\) ✓`],
      S`a = 3, b = −2, f(3) = 24`,
      plane({ view: { xmin: -3, xmax: 4, ymin: -2, ymax: 28 }, curves: [{ f: (x) => 3 * x * x - 2 * x + 3, color: "violet" }], points: [{ x: 1, y: 4, label: "(1, 4)", color: "amber" }, { x: -2, y: 19, label: "(−2, 19)", color: "amber" }, { x: 3, y: 24, label: "(3, 24)", color: "blue" }], step: { x: 1, y: 4 } })],
    ["When do two functions agree?", S`For \(f(x)=x^2-2x\) and \(g(x)=x+4\), solve \(f(x)=g(x)\) and give the points where the graphs meet.`,
      [S`<b>Set the outputs equal:</b> \(x^2-2x=x+4\Rightarrow x^2-3x-4=0\).`,
        S`<b>Factor:</b> \((x-4)(x+1)=0\Rightarrow x=4\) or \(x=-1\).`,
        S`<b>Outputs:</b> \(g(4)=8\) and \(g(-1)=3\). Check in \(f\): \(f(4)=16-8=8\) ✓, \(f(-1)=1+2=3\) ✓`,
        S`<b>Meaning:</b> the parabola and the line cross at \((4,\,8)\) and \((-1,\,3)\).`],
      S`x = 4 or x = −1; the graphs meet at (4, 8) and (−1, 3)`],
  ], [
    q("hard", S`\(f(x)=x^2-6x+k\) and \(f(2)=-3\). Find \(f(-1)\).`, num(12), "First find k from f(2) = −3.", [S`\(4-12+k=-3\Rightarrow k=5\).`, S`\(f(-1)=1+6+5=12\).`], S`\(12\)`),
    q("hard", S`For \(f(x)=2x+1\), solve \(f(x^2)=f(3x)+8\). Enter both roots.`, roots(4, -1), "f(x²) = 2x² + 1 and f(3x) = 6x + 1.", [S`\(2x^2+1=6x+1+8\Rightarrow2x^2-6x-8=0\Rightarrow x^2-3x-4=0\).`, S`\((x-4)(x+1)=0\Rightarrow x=4\) or \(x=-1\). Check \(x=4\): \(f(16)=33\) and \(f(12)+8=25+8=33\) ✓`], S`\(x=4,\ -1\)`),
    q("hard", S`\(h(t)=-5t^2+30t+2\) is a height in metres. Enter the time (s) when the height is \(42\) m on the way <b>down</b>.`, num(4), "Solve −5t² + 30t + 2 = 42.", [S`\(-5t^2+30t-40=0\Rightarrow t^2-6t+8=0\Rightarrow(t-2)(t-4)=0\).`, S`Going down is the later time, \(t=4\).`], S`\(4\)`),
    q("hard", S`\(f(x)=x^2+bx+c\) with \(f(0)=-6\) and \(f(2)=0\). Find \(f(-3)\).`, num(0), "f(0) gives c.", [S`\(c=-6\); \(4+2b-6=0\Rightarrow b=1\).`, S`\(f(-3)=9-3-6=0\).`], S`\(0\)`),
    q("hard", S`\(g(x)=3x-4\). Solve \(g(g(x))=11\).`, num(3), "g(g(x)) = 3(3x − 4) − 4.", [S`\(9x-16=11\Rightarrow x=3\).`, S`Check: \(g(3)=5\), \(g(5)=11\) ✓`], S`\(3\)`),
  ]),

  wrapUp({
    qas: [
      ["Does f(x) mean f times x?", "No. f names the function and x is the input; f(x) is the output."],
      ["What does f(5) = 2 tell me about the graph?", "The point (5, 2) is on the graph of f."],
      ["Why bracket negative inputs?", "So the sign is squared too: (−3)² = 9, while −3² = −9."],
      ["How many answers can f(x) = k have?", "A line usually gives one; a parabola can give two, one or none."],
      ["How do I know if a value makes sense in context?", "Check units and the real situation: negative heights or fractions of people mean the model does not apply there."],
    ],
    summary: [
      "f(a) = output for input a; it is the point (a, f(a)).",
      "Substitute in brackets, then use the order of operations.",
      "f(x) = k: set the rule equal to k and solve; quadratics may give two answers.",
      "Always interpret values with units in a context.",
    ],
    next: "1.3 studies the domain and range of a function: which inputs are allowed and which outputs are produced.",
  }),
];
