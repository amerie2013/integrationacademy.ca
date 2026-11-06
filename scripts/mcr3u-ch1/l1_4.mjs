// MCR3U 1.4 — Domain and Range: set notation, reading graphs, algebraic restrictions, context restrictions
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { tv } from "../mcr3u-extables.mjs";
const S = String.raw;

export const TITLE = "1.4 Domain and Range";
export const ID = "79cdb1c2-797b-44a1-a067-f4d56117e968";

export const blocks = () => [
  intro({
    icon: "📏",
    title: "Domain and Range",
    overview: String.raw`The <strong>domain</strong> of a function is every input it accepts; the <strong>range</strong> is every output it produces. In this lesson you will write both in set notation, read them from graphs, find the restrictions that square roots and denominators create, and decide what values make sense when a function models a real situation.`,
    goals: [
      "write domain and range in set notation;",
      "read the domain and range from a graph;",
      "find restrictions caused by square roots and denominators;",
      "use the vertex to find the range of a quadratic;",
      "restrict the domain and range to suit a context.",
    ],
    curriculum: "A1.3 (domain and range through numeric, graphical and algebraic representations; describe the domain and range of a function appropriately and explain restrictions in contexts arising from real-world applications)",
    prior: [
      [String.raw`Solve \(5-2x\ge0\).`, String.raw`\(x\le2.5\) (dividing by \(-2\) flips the sign).`],
      [String.raw`What is the vertex of \(y=-(x-3)^2+4\)?`, String.raw`\((3,4)\), a maximum.`],
      [String.raw`For which \(x\) does \(\frac{1}{x-6}\) have no value?`, String.raw`\(x=6\).`],
    ],
    words: [
      ["Set notation", "\\(\\{x\\in\\mathbb R\\mid \\text{condition}\\}\\)", "\\(\\{x\\in\\mathbb R\\mid x\\ge2\\}\\)"],
      ["\\(\\mathbb R\\)", "the set of all real numbers", ""],
      ["Restriction", "a value that must be excluded", "\\(x\\ne3\\)"],
      ["Discrete domain", "separate values only (counts)", "\\(\\{0,1,2,3\\}\\)"],
    ],
  }),

  section("📌 Domain and range from a graph", String.raw`
  <p>Imagine shining a light straight down onto the x-axis: the shadow of the graph is the domain. Shine it from the side onto the y-axis: that shadow is the range. A closed dot is included; an open dot or an asymptote is not.</p>
  ${plane({ view: { xmin: -5, xmax: 5, ymin: -3, ymax: 7 }, curves: [{ f: (x) => -((x + 1) ** 2) + 5, color: "violet" }], points: [{ x: -1, y: 5, label: "vertex (−1, 5)" }], step: { x: 1, y: 1 } }, "Domain: all real x. Range: y ≤ 5")}
  ${keyIdea(String.raw`Write \(\{x\in\mathbb R\mid \ldots\}\) for the domain and \(\{y\in\mathbb R\mid \ldots\}\) for the range. Look for three things: square roots (inside \(\ge0\)), denominators (\(\ne0\)), and the context.`)}`),

  section("📌 Explore", String.raw`<p>Pick a function type and move \(h\), \(k\) and \(a\). The green shadow is the domain and the red shadow the range. Then switch on "restrict x" to see how a context changes both.</p>`),

  widget("domainRangeLab", { start: "root" }),

  section("📌 Algebraic restrictions", String.raw`
  ${table(["The function contains", "Rule", "Example"], [
    ["\\(\\sqrt{\\text{expression}}\\)", "expression \\(\\ge0\\)", "\\(\\sqrt{x+3}\\): \\(x\\ge-3\\)"],
    ["\\(\\frac{\\ldots}{\\text{expression}}\\)", "expression \\(\\ne0\\)", "\\(\\frac{2}{x-5}\\): \\(x\\ne5\\)"],
    ["polynomial only", "no restriction", "\\(x^3-2x\\): \\(x\\in\\mathbb R\\)"],
  ])}
  ${watchOut([
    "Range is about outputs — don't copy the domain.",
    "When you divide an inequality by a negative number, flip the sign.",
    "A context can restrict a function more than the algebra does (time ≥ 0, lengths > 0, whole numbers of items).",
    "For a parabola, the range starts at the vertex's y-value.",
  ])}`),

  examples([
    ["From a graph", S`State the domain and range of \(f(x)=-(x+1)^2+5\).`,
      [S`<b>Domain: which inputs are allowed?</b> The rule only adds, squares and negates. Every real number can go through those operations, so nothing is excluded.`,
        S`<b>Find the vertex.</b> In the form \(a(x-h)^2+k\), the vertex is \((h,k)\). Here \(x+1=x-(-1)\), so the vertex is \((-1,5)\).`,
        S`<b>Range: which outputs occur?</b> \((x+1)^2\ge0\), so \(-(x+1)^2\le0\). Adding 5 gives \(f(x)\le5\), and the value 5 occurs at \(x=-1\).`,
        S`<b>All lower values occur.</b> As \(x\) moves away from \(-1\), the output falls without limit, so every value below 5 is reached.`,
        S`<b>Check on the graph.</b> The parabola extends left and right forever, and its highest point is \((-1,5)\) ✓`],
      S`domain \(\{x\in\mathbb R\}\), range \(\{y\in\mathbb R\mid y\le5\}\)`,
      plane({ view: { xmin: -6, xmax: 4, ymin: -5, ymax: 7 }, curves: [{ f: (x) => -((x + 1) ** 2) + 5, color: "violet" }], lines: [{ m: 0, b: 5, color: "amber", dash: true }], points: [{ x: -1, y: 5, label: "(−1, 5)", color: "amber" }, { x: 0, y: 4, label: "(0, 4)" }, { x: 1, y: 1, label: "(1, 1)" }], step: { x: 1, y: 1 } })],
    ["Square-root restriction", S`Find the domain and range of \(f(x)=\sqrt{6-2x}\).`,
      [S`<b>Rule.</b> A real square root needs a non-negative radicand, so we require \(6-2x\ge0\).`,
        S`<b>Solve the inequality.</b> Subtract 6: \(-2x\ge-6\). Divide by \(-2\), and <em>reverse the sign</em> because the divisor is negative: \(x\le3\).`,
        S`<b>Range.</b> A square root is never negative, so \(y\ge0\). The value 0 occurs at \(x=3\). As \(x\) decreases, \(6-2x\) grows without limit, so \(y\) has no upper bound.`,
        S`<b>Table of values.</b> ${tv(["\\(x\\)", "\\(-5\\)", "\\(1\\)", "\\(3\\)", "\\(4\\)"], ["\\(6-2x\\)", "16", "4", "0", "\\(-2\\)"], ["\\(f(x)\\)", "4", "2", "0", "not real"])}`,
        S`<b>Check on the graph.</b> The curve ends at \((3,0)\) and runs up to the left ✓`],
      S`domain \(\{x\in\mathbb R\mid x\le3\}\), range \(\{y\in\mathbb R\mid y\ge0\}\)`,
      plane({ view: { xmin: -6, xmax: 5, ymin: -1, ymax: 5 }, curves: [{ f: (x) => Math.sqrt(6 - 2 * x), b: 3, color: "green" }], points: [{ x: 3, y: 0, label: "(3, 0)", color: "amber" }, { x: 1, y: 2, label: "(1, 2)" }, { x: -5, y: 4, label: "(−5, 4)" }], step: { x: 1, y: 1 } })],
    ["Reciprocal restriction", S`Find the domain and range of \(g(x)=\frac{3}{x+4}-1\).`,
      [S`<b>Domain.</b> Division by 0 has no value. The denominator is 0 when \(x+4=0\), so \(x=-4\) is the one excluded input.`,
        S`<b>Range.</b> A fraction is 0 only if its numerator is 0. The numerator is 3, so \(\frac3{x+4}\ne0\). Therefore \(g(x)\) can never equal \(0-1=-1\).`,
        S`<b>Every other output occurs.</b> Solve \(\frac3{x+4}-1=y\): \(x+4=\frac3{y+1}\). This gives an \(x\) for every \(y\ne-1\).`,
        S`<b>Plot some points.</b> ${tv(["\\(x\\)", "\\(-7\\)", "\\(-5\\)", "\\(-3\\)", "\\(-1\\)"], ["\\(g(x)\\)", "\\(-2\\)", "\\(-4\\)", "\\(2\\)", "\\(0\\)"])}`,
        S`<b>Check on the graph.</b> The asymptotes \(x=-4\) and \(y=-1\) mark the excluded input and the excluded output ✓`],
      S`domain \(\{x\in\mathbb R\mid x\ne-4\}\), range \(\{y\in\mathbb R\mid y\ne-1\}\)`,
      plane({ view: { xmin: -10, xmax: 4, ymin: -7, ymax: 5 }, curves: [{ f: (x) => 3 / (x + 4) - 1, color: "red" }], vlines: [{ x: -4, color: "gray", dash: true }], lines: [{ m: 0, b: -1, color: "gray", dash: true }], points: [{ x: -3, y: 2, label: "(−3, 2)" }, { x: -1, y: 0, label: "(−1, 0)" }, { x: -5, y: -4, label: "(−5, −4)" }], step: { x: 1, y: 1 } })],
    ["A context restriction", S`A ball's height is \(h(t)=-5t^2+30t+35\) metres after \(t\) seconds. Find a sensible domain and range.`,
      [S`<b>Think about the situation.</b> The rule works for any \(t\), but the model only describes the flight: from the throw (\(t=0\)) until the ball lands (\(h=0\)).`,
        S`<b>Find the landing time.</b> Set \(h=0\) and factor out \(-5\): \(-5(t^2-6t-7)=0\), so \((t-7)(t+1)=0\). Then \(t=7\) or \(t=-1\).`,
        S`<b>Reject the extra root.</b> Negative time is before the throw, so \(t=7\). The domain is \(0\le t\le7\).`,
        S`<b>Find the highest point.</b> The vertex is halfway between the roots: \(t=\frac{7+(-1)}2=3\). Then \(h(3)=-45+90+35=80\).`,
        S`<b>Range.</b> Over the flight the height goes from 35 up to 80, then down to 0. So the lowest value is 0 and the highest is 80.`,
        S`<b>Check.</b> \(h(7)=-245+210+35=0\) ✓`],
      S`domain \(\{t\in\mathbb R\mid0\le t\le7\}\), range \(\{h\in\mathbb R\mid0\le h\le80\}\)`,
      plane({ view: { xmin: 0, xmax: 8, ymin: 0, ymax: 90 }, curves: [{ f: (t) => -5 * t * t + 30 * t + 35, a: 0, b: 7, color: "violet" }], points: [{ x: 0, y: 35, label: "(0, 35)" }, { x: 3, y: 80, label: "(3, 80)" }, { x: 7, y: 0, label: "(7, 0)" }], step: { x: 1, y: 10 }, xlabel: "t (s)", ylabel: "h (m)" })],
    ["A discrete domain", S`Concert tickets cost 12 dollars each, and a customer may buy up to 5. Give the domain and range of the cost \(C(n)=12n\).`,
      [S`<b>Which inputs make sense?</b> \(n\) counts tickets. It must be a whole number, and at most 5. Values such as \(n=2.5\) or \(n=-1\) have no meaning here.`,
        S`<b>List the inputs and compute each output.</b> ${tv(["\\(n\\)", "0", "1", "2", "3", "4", "5"], ["\\(C(n)\\)", "0", "12", "24", "36", "48", "60"])}`,
        S`<b>Read off the sets.</b> The domain is the top row and the range is the bottom row.`,
        S`<b>Graph it correctly.</b> Because the domain is a list of separate values, the graph is six separate points. Joining them with a line would wrongly suggest part-tickets can be bought.`,
        S`<b>Check.</b> Each point lies on the line \(y=12x\), for example \(12\times5=60\) ✓`],
      S`domain \(\{0,1,2,3,4,5\}\), range \(\{0,12,24,36,48,60\}\)`,
      plane({ view: { xmin: -1, xmax: 6, ymin: -5, ymax: 70 }, points: [{ x: 0, y: 0, label: "(0, 0)" }, { x: 1, y: 12 }, { x: 2, y: 24 }, { x: 3, y: 36, label: "(3, 36)" }, { x: 4, y: 48 }, { x: 5, y: 60, label: "(5, 60)", color: "amber" }], step: { x: 1, y: 10 }, xlabel: "n", ylabel: "C" })],
  ]),

  practice([
    q("square root", String.raw`What is the smallest number in the domain of \(f(x)=\sqrt{x-7}\)?`, num(7),
      "Set the inside ≥ 0.", [String.raw`\(x-7\ge0\Rightarrow x\ge7\).`], String.raw`\(7\)`),
    q("quadratic range", String.raw`The range of \(g(x)=2(x-3)^2-8\) is \(y\ge m\). Find \(m\).`, num(-8),
      "Where is the vertex? Which way does it open?", [String.raw`Vertex \((3,-8)\), opens up.`], String.raw`\(-8\)`),
    q("denominator", String.raw`Which x-value is excluded from the domain of \(h(x)=\frac{5}{2x-6}\)?`, num(3),
      "Set the denominator to 0.", [String.raw`\(2x-6=0\Rightarrow x=3\).`], String.raw`\(3\)`),
    q("context", String.raw`A stone's height is \(h(t)=-5t^2+20t\) (thrown from the ground). What is the largest value in a sensible domain?`, num(4),
      "When is it back on the ground?", [String.raw`\(-5t(t-4)=0\Rightarrow t=0\) or \(t=4\).`], String.raw`\(4\)`),
    q("choose", String.raw`What is the domain of \(f(x)=\sqrt{x+2}+1\)?`, choice([String.raw`\(x\ge-2\)`, String.raw`\(x\ge1\)`, String.raw`\(x\ge2\)`, String.raw`\(x\in\mathbb R\)`], 0),
      "Only the inside of the root matters for the domain.", [String.raw`\(x+2\ge0\).`], String.raw`\(\{x\in\mathbb R\mid x\ge-2\}\)`),
  ]),

  ...hard([
    ["Two restrictions at once", String.raw`Find the domain of \(f(x)=\dfrac{\sqrt{x+3}}{x-2}\).`,
      [String.raw`The root needs \(x+3\ge0\Rightarrow x\ge-3\).`, String.raw`The denominator needs \(x-2\ne0\Rightarrow x\ne2\).`, String.raw`Both must hold.`],
      String.raw`\(\{x\in\mathbb R\mid x\ge-3,\ x\ne2\}\)`],
    ["Optimising inside a context", String.raw`A rectangle has perimeter 40 cm and width \(x\) cm. Write its area \(A(x)\) and state the domain and range.`,
      [String.raw`Length \(=20-x\), so \(A(x)=x(20-x)\).`, String.raw`Both sides must be positive: \(0<x<20\).`, String.raw`The vertex is midway between the zeros 0 and 20: \(A(10)=100\). Areas near the ends approach 0.`],
      String.raw`domain \(\{x\in\mathbb R\mid0<x<20\}\), range \(\{A\in\mathbb R\mid0<A\le100\}\)`,
      plane({ view: { xmin: 0, xmax: 22, ymin: 0, ymax: 110 }, curves: [{ f: (x) => x * (20 - x), a: 0, b: 20, color: "violet" }], points: [{ x: 10, y: 100, label: "(10, 100)" }], step: { x: 2, y: 10 }, xlabel: "width (cm)", ylabel: "area (cm²)" })],
  ], [
    q("hard", String.raw`How many integers are in the domain of \(f(x)=\sqrt{12-3x}+\sqrt{x+1}\)?`, num(6),
      "Both roots need non-negative insides.", [String.raw`\(12-3x\ge0\Rightarrow x\le4\); \(x+1\ge0\Rightarrow x\ge-1\).`, String.raw`Integers \(-1,0,1,2,3,4\).`], String.raw`\(6\)`),
    q("hard", String.raw`\(f(x)=-2(x-1)^2+7\) has domain \(-1\le x\le4\). What is the smallest value in its range?`, num(-11),
      "Check the vertex and both endpoints.", [String.raw`\(f(1)=7\), \(f(-1)=-1\), \(f(4)=-18+7\).`], String.raw`\(-11\)`),
    q("hard", String.raw`How many real numbers are excluded from the domain of \(f(x)=\frac{1}{x^2-9}\)?`, num(2),
      "Solve x² − 9 = 0.", [String.raw`\(x=3\) or \(x=-3\).`], String.raw`\(2\)`),
  ]),

  wrapUp({
    qas: [
      ["Why use set notation?", "It says exactly which numbers are included, with no ambiguity about endpoints."],
      ["How do I find a range without a graph?", "Use what you know: a parabola's vertex, a root's starting value, a reciprocal's horizontal asymptote."],
      ["Can the domain be just a few numbers?", "Yes — a set of ordered pairs or a counting context has a discrete domain."],
      ["Should I include t = 0 in a ball problem?", "Yes, if the ball is thrown at t = 0. Include the landing time too: the height is 0 then."],
      ["Is ≤ or < correct at an endpoint?", "Use ≤ if the value is actually reached (closed dot); < if it is approached but not reached."],
    ],
    summary: [
      "Domain = inputs (shadow on the x-axis); range = outputs (shadow on the y-axis).",
      "Roots: inside ≥ 0. Denominators: ≠ 0.",
      "Parabolas: the range starts at the vertex.",
      "A context can restrict the domain to an interval or to whole numbers.",
    ],
    next: "1.5 reverses functions: inverses swap the domain and the range.",
  }),
];
