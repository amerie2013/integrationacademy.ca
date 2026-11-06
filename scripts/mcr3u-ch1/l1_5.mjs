// MCR3U 1.5 — Inverse Functions: reverse processes, tables, reflection in y = x, algebra, inverse of a quadratic
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, expr, hard, plane } from "./lib.mjs";
import { tv } from "../mcr3u-extables.mjs";
const S = String.raw;

export const TITLE = "1.5 Inverse Functions";
export const ID = "bd79c525-1735-4d81-914e-2161934afb7f";

export const blocks = () => [
  intro({
    icon: "🔁",
    title: "Inverse Functions",
    overview: String.raw`An inverse undoes a function: if \(f\) takes 4 to 7, then \(f^{-1}\) takes 7 back to 4. In this lesson you will find inverses by reversing steps, by swapping a table, by reflecting a graph in the line \(y=x\), and by algebra. You will see why the inverse of a quadratic is not a function unless you restrict the domain, and how the domain and range trade places.`,
    goals: [
      "connect an inverse to reversing a process;",
      "find the inverse of a table, graph or equation;",
      "reflect a graph in y = x to graph its inverse;",
      "decide whether an inverse is a function, and restrict the domain if needed;",
      "relate the domain and range of f and f⁻¹.",
    ],
    curriculum: "A1.4–A1.7 (inverse as a reverse process; numeric, graphical and algebraic inverses of linear and quadratic functions; reflection in y = x; domain and range of the inverse; whether the inverse is a function; g(x) = √x and h(x) = −√x)",
    prior: [
      [String.raw`Solve \(y=3x-5\) for \(x\).`, String.raw`\(x=\frac{y+5}{3}\).`],
      [String.raw`What is the reflection of \((2,7)\) in the line \(y=x\)?`, String.raw`\((7,2)\): the coordinates swap.`],
      [String.raw`Is \(x^2=9\) solved by one number?`, String.raw`No: \(x=3\) or \(x=-3\).`],
    ],
    words: [
      ["Inverse function", "\\(f^{-1}\\) undoes \\(f\\): if \\(f(a)=b\\), then \\(f^{-1}(b)=a\\)", ""],
      ["\\(f^{-1}\\)", "read “f inverse” — not \\(\\frac1f\\)", ""],
      ["Line of reflection", "the line \\(y=x\\)", ""],
      ["Restricted domain", "part of the domain chosen so the inverse is a function", "\\(x\\ge0\\)"],
    ],
  }),

  section("📌 Undoing a process", String.raw`
  <p>\(f(x)=3x-5\) says: <em>multiply by 3, then subtract 5</em>. To undo it, reverse the steps <em>and</em> their order: <em>add 5, then divide by 3</em>. So \(f^{-1}(x)=\frac{x+5}{3}\).</p>
  ${table(["", "step 1", "step 2"], [["f", "× 3", "− 5"], ["f⁻¹", "+ 5", "÷ 3"]])}
  ${keyIdea(String.raw`To find an inverse algebraically: write \(y=f(x)\), <strong>swap \(x\) and \(y\)</strong>, solve for \(y\). Graphically the swap is a reflection in \(y=x\). The domain of \(f^{-1}\) is the range of \(f\), and the range of \(f^{-1}\) is the domain of \(f\).`)}`),

  section("📌 Explore", String.raw`<p>Blue is \(f\); red is its reflection. Each grey dashed segment joins a point to its mirror image. Try the quadratic: with "all x" the red curve fails the vertical-line test; restrict to one side of the vertex and it passes.</p>`),

  widget("inverseLab", { start: "quad" }),

  section("📌 Inverse of a quadratic", String.raw`
  <p>For \(f(x)=x^2\), swapping gives \(x=y^2\), so \(y=\pm\sqrt x\): two outputs for each positive input — not a function. Keep only the right half of the parabola (\(x\ge0\)) and the inverse is \(y=\sqrt x\); keep the left half (\(x\le0\)) and it is \(y=-\sqrt x\).</p>
  ${plane({ view: { xmin: -5, xmax: 5, ymin: -5, ymax: 5 }, curves: [{ f: (x) => x * x, a: 0, color: "blue" }, { f: (x) => x * x, b: 0, color: "blue", }, { f: (x) => Math.sqrt(x), a: 0, color: "red" }, { f: (x) => -Math.sqrt(x), a: 0, color: "amber" }], lines: [{ m: 1, b: 0, color: "gray", dash: true }], step: { x: 1, y: 1 } }, "y = x² (blue); its inverse y = ±√x: red (√x) for x ≥ 0, amber (−√x) for x ≤ 0")}
  ${watchOut([
    "f⁻¹(x) is NOT 1/f(x). The −1 is a label, not an exponent.",
    "Reverse the order of the steps, not only the operations.",
    "A function has an inverse function only if it is one-to-one (passes the horizontal-line test).",
    "After restricting, state which root (+ or −) the inverse uses.",
  ])}`),

  examples([
    ["Reversing steps", S`Find the inverse of \(f(x)=3x-5\) and check with \(x=4\).`,
      [S`<b>Idea.</b> The inverse undoes \(f\): it takes each output back to its input. So we reverse the steps of \(f\), in reverse order, each with the opposite operation.`,
        S`<b>Steps of \(f\).</b> Multiply by 3, then subtract 5.`,
        S`<b>Steps of \(f^{-1}\).</b> Add 5, then divide by 3. This gives \(f^{-1}(x)=\dfrac{x+5}3\).`,
        S`<b>Check with \(x=4\).</b> \(f(4)=12-5=7\), and \(f^{-1}(7)=\frac{12}3=4\). We return to the starting value ✓`,
        S`<b>Check on the graph.</b> \((4,7)\) is on \(f\) and \((7,4)\) is on \(f^{-1}\). The two lines are mirror images in \(y=x\) ✓`],
      S`\(f^{-1}(x)=\frac{x+5}{3}\)`,
      plane({ view: { xmin: -6, xmax: 9, ymin: -6, ymax: 9 }, lines: [{ m: 3, b: -5, color: "blue" }, { m: 1 / 3, b: 5 / 3, color: "red" }, { m: 1, b: 0, color: "gray", dash: true }], points: [{ x: 4, y: 7, label: "(4, 7)", color: "blue" }, { x: 7, y: 4, label: "(7, 4)", color: "red" }], step: { x: 1, y: 1 } }, "blue f, red its inverse, dashed y = x")],
    ["From a table", S`\(f\) has points \((-1,-7),(0,-4),(2,2),(5,11)\). Give the points of \(f^{-1}\) and its domain.`,
      [S`<b>Rule.</b> The inverse swaps inputs and outputs: if \(f(a)=b\), then \(f^{-1}(b)=a\). So each point \((a,b)\) becomes \((b,a)\).`,
        S`<b>Swap every pair.</b> ${tv(["\\(f\\): \\(x\\)", "\\(-1\\)", "0", "2", "5"], ["\\(f\\): \\(y\\)", "\\(-7\\)", "\\(-4\\)", "2", "11"], ["\\(f^{-1}\\): \\(x\\)", "\\(-7\\)", "\\(-4\\)", "2", "11"], ["\\(f^{-1}\\): \\(y\\)", "\\(-1\\)", "0", "2", "5"])}`,
        S`<b>Domain.</b> The inputs of \(f^{-1}\) are the outputs of \(f\), so the domain of \(f^{-1}\) is the range of \(f\): \(\{-7,-4,2,11\}\).`,
        S`<b>Is it a function?</b> The new inputs are all different, so yes.`,
        S`<b>Check on the graph.</b> Each pair of points is mirrored in \(y=x\). The point \((2,2)\) lies on the mirror, so it does not move ✓`],
      S`\(f^{-1}\): \((-7,-1),(-4,0),(2,2),(11,5)\); domain \(\{-7,-4,2,11\}\)`,
      plane({ view: { xmin: -8, xmax: 12, ymin: -8, ymax: 12 }, lines: [{ m: 1, b: 0, color: "gray", dash: true }], points: [{ x: -1, y: -7, color: "blue" }, { x: 0, y: -4, color: "blue" }, { x: 5, y: 11, label: "(5, 11)", color: "blue" }, { x: -7, y: -1, color: "red" }, { x: -4, y: 0, color: "red" }, { x: 11, y: 5, label: "(11, 5)", color: "red" }, { x: 2, y: 2, label: "(2, 2)", color: "amber" }], step: { x: 2, y: 2 } }, "blue points of f, red points of the inverse")],
    ["By algebra", S`Find the inverse of \(g(x)=\frac{2x+1}{4}\).`,
      [S`<b>Method.</b> Write \(y=g(x)\), swap \(x\) and \(y\), and solve for the new \(y\). The swap is the algebra version of exchanging inputs and outputs.`,
        S`<b>Swap.</b> \(y=\frac{2x+1}4\) becomes \(x=\frac{2y+1}4\).`,
        S`<b>Clear the denominator.</b> Multiply both sides by 4: \(4x=2y+1\).`,
        S`<b>Isolate \(y\).</b> Subtract 1: \(4x-1=2y\). Divide by 2: \(y=\frac{4x-1}2\).`,
        S`<b>Check.</b> \(g(3)=\frac74\), and \(g^{-1}\left(\frac74\right)=\frac{7-1}2=3\) ✓. Both lines pass through mirror-image points.`],
      S`\(g^{-1}(x)=\frac{4x-1}{2}\)`,
      plane({ view: { xmin: -4, xmax: 6, ymin: -4, ymax: 6 }, lines: [{ m: 0.5, b: 0.25, color: "blue" }, { m: 2, b: -0.5, color: "red" }, { m: 1, b: 0, color: "gray", dash: true }], points: [{ x: 3, y: 1.75, label: "(3, 1.75)", color: "blue" }, { x: 1.75, y: 3, label: "(1.75, 3)", color: "red" }], step: { x: 1, y: 1 } }, "blue g, red its inverse")],
    ["Inverse of a quadratic", S`Find the inverse of \(f(x)=(x-3)^2+1\). Restrict the domain of \(f\) so that the inverse is a function.`,
      [S`<b>Swap and solve.</b> \(x=(y-3)^2+1\). Subtract 1: \((y-3)^2=x-1\). Take both roots: \(y=3\pm\sqrt{x-1}\).`,
        S`<b>The problem.</b> The \(\pm\) gives two outputs for each \(x>1\), so this inverse is not a function. The reason is that \(f\) is many-to-one: \(f(2)=f(4)=2\).`,
        S`<b>Restrict \(f\).</b> Keep one side of the vertex \((3,1)\). Taking \(x\ge3\) makes \(f\) one-to-one, and the inverse must then give outputs \(y\ge3\). So we keep the \(+\) root.`,
        S`<b>Inverse.</b> \(f^{-1}(x)=3+\sqrt{x-1}\). Its domain \(x\ge1\) is the range of \(f\). Its range \(y\ge3\) is the restricted domain of \(f\).`,
        S`<b>Check.</b> \(f(5)=4+1=5\), and \(f^{-1}(5)=3+\sqrt4=5\) ✓ (the point \((5,5)\) lies on the mirror line). Also \(f(4)=2\), and \(f^{-1}(2)=3+1=4\) ✓`],
      S`\(f^{-1}(x)=3+\sqrt{x-1}\) for \(f\) restricted to \(x\ge3\)`,
      plane({ view: { xmin: -1, xmax: 9, ymin: -1, ymax: 9 }, curves: [{ f: (x) => (x - 3) ** 2 + 1, a: 3, color: "blue" }, { f: (x) => 3 + Math.sqrt(x - 1), a: 1, color: "red" }], lines: [{ m: 1, b: 0, color: "gray", dash: true }], points: [{ x: 3, y: 1, label: "(3, 1)", color: "blue" }, { x: 1, y: 3, label: "(1, 3)", color: "red" }, { x: 5, y: 5, label: "(5, 5)", color: "amber" }], step: { x: 1, y: 1 } })],
    ["In context", S`Fahrenheit and Celsius are related by \(F=1.8C+32\). Find the inverse and convert 77 °F.`,
      [S`<b>What the inverse means.</b> The given rule turns Celsius into Fahrenheit. The inverse turns Fahrenheit back into Celsius. In context we keep the letters, because they name the quantities.`,
        S`<b>Solve for \(C\).</b> Subtract 32: \(F-32=1.8C\). Divide by 1.8: \(C=\dfrac{F-32}{1.8}\).`,
        S`<b>Substitute</b> \(F=77\). \(C=\dfrac{77-32}{1.8}=\dfrac{45}{1.8}=25\).`,
        S`<b>Check in the original.</b> \(1.8(25)+32=45+32=77\) ✓`,
        S`<b>Check with known values.</b> Water freezes at \(0\) °C, which is \(32\) °F: \(\frac{32-32}{1.8}=0\) ✓. The graph shows both values on the line.`],
      "C = (F − 32)/1.8; 77 °F = 25 °C",
      plane({ view: { xmin: 0, xmax: 100, ymin: 0, ymax: 40 }, lines: [{ m: 1 / 1.8, b: -32 / 1.8, color: "violet" }], points: [{ x: 32, y: 0, label: "(32, 0)" }, { x: 77, y: 25, label: "(77, 25)", color: "amber" }], step: { x: 10, y: 5 }, xlabel: "F", ylabel: "C" })],
  ]),

  practice([
    q("evaluate the inverse", String.raw`For \(f(x)=4x+9\), find \(f^{-1}(1)\).`, num(-2),
      "Solve 4x + 9 = 1, or find f⁻¹ first.", [String.raw`\(f^{-1}(x)=\frac{x-9}{4}\); \(\frac{1-9}{4}\).`], String.raw`\(-2\)`),
    q("algebra", String.raw`Find \(f^{-1}(x)\) for \(f(x)=\frac{x-6}{2}\).`, expr("2*x+6"),
      "Reverse: multiply by 2, then add 6.", [String.raw`Swap: \(x=\frac{y-6}{2}\Rightarrow y=2x+6\).`], String.raw`\(f^{-1}(x)=2x+6\)`),
    q("meaning", String.raw`If \(f(3)=10\), what is \(f^{-1}(10)\)?`, num(3),
      "The inverse sends outputs back to inputs.", [String.raw`\((3,10)\) on \(f\) means \((10,3)\) on \(f^{-1}\).`], String.raw`\(3\)`),
    q("quadratic", String.raw`\(f(x)=(x+2)^2\) with \(x\ge-2\). Find \(f^{-1}(16)\).`, num(2),
      "Which x ≥ −2 gives 16?", [String.raw`\((x+2)^2=16\Rightarrow x+2=4\) (the positive root, since \(x\ge-2\)).`], String.raw`\(2\)`),
    q("domain", String.raw`\(f(x)=x^2+5\) with \(x\ge0\). What is the domain of \(f^{-1}\)?`, choice([String.raw`\(x\ge5\)`, String.raw`\(x\ge0\)`, String.raw`\(x\in\mathbb R\)`, String.raw`\(x\le5\)`], 0),
      "Domain of the inverse = range of f.", [String.raw`The range of \(f\) is \(y\ge5\).`], String.raw`\(\{x\in\mathbb R\mid x\ge5\}\)`),
  ]),

  ...hard([
    ["Restricting to the left half", String.raw`\(f(x)=2(x+1)^2-8\) with \(x\le-1\). Find \(f^{-1}(x)\) and check one point.`,
      [String.raw`Swap: \(x=2(y+1)^2-8\Rightarrow(y+1)^2=\frac{x+8}{2}\Rightarrow y=-1\pm\sqrt{\frac{x+8}{2}}\).`, String.raw`The original \(x\)-values are \(\le-1\), so the inverse's \(y\)-values must be \(\le-1\): take the minus sign.`, String.raw`Check: \(f(-3)=2(4)-8=0\) and \(f^{-1}(0)=-1-\sqrt4=-3\) ✓.`],
      String.raw`\(f^{-1}(x)=-1-\sqrt{\frac{x+8}{2}}\), domain \(x\ge-8\)`],
    ["A function that is its own inverse", String.raw`\(f(x)=ax+b\) is its own inverse and \(f(0)=6\). Find \(f\).`,
      [String.raw`\(f(0)=b=6\).`, String.raw`Self-inverse means \(f(f(x))=x\): \(a(ax+6)+6=a^2x+6a+6=x\) for every \(x\).`, String.raw`So \(a^2=1\) and \(6a+6=0\Rightarrow a=-1\).`, String.raw`Check: \(f(f(x))=-(-x+6)+6=x\) ✓. Its graph is perpendicular to \(y=x\), so reflecting leaves it unchanged.`],
      String.raw`\(f(x)=-x+6\)`,
      plane({ view: { xmin: -2, xmax: 8, ymin: -2, ymax: 8 }, lines: [{ m: -1, b: 6, color: "violet" }, { m: 1, b: 0, color: "gray", dash: true }], points: [{ x: 1, y: 5, label: "(1, 5)" }, { x: 5, y: 1, label: "(5, 1)" }], step: { x: 1, y: 1 } })],
  ], [
    q("hard", String.raw`\(f(x)=3(x-2)^2+1\) with \(x\ge2\). Find \(f^{-1}(28)\).`, num(5),
      "Solve f(x) = 28 with x ≥ 2.", [String.raw`\((x-2)^2=9\Rightarrow x-2=3\).`], String.raw`\(5\)`),
    q("hard", String.raw`\(f(x)=mx+4\) and \(f^{-1}(10)=3\). Find \(m\).`, num(2),
      "f⁻¹(10) = 3 means f(3) = 10.", [String.raw`\(3m+4=10\).`], String.raw`\(2\)`),
    q("hard", String.raw`At what x-value does \(f(x)=2x-3\) meet its inverse?`, num(3),
      "A function and its inverse meet on y = x (here).", [String.raw`\(2x-3=x\).`], String.raw`\(3\)`),
  ]),

  wrapUp({
    qas: [
      ["Why reflect in y = x?", "Swapping x and y moves (a, b) to (b, a), which is exactly the mirror image across y = x."],
      ["Does every function have an inverse function?", "Only one-to-one functions. Others (like x²) need a restricted domain."],
      ["Is f⁻¹(x) the same as 1/f(x)?", "No. For f(x) = 2x, f⁻¹(x) = x/2, but 1/f(x) = 1/(2x)."],
      ["What is f(f⁻¹(x))?", "x — doing and then undoing returns the input."],
      ["How do √x and −√x relate to x²?", "They are the inverses of the right half and the left half of y = x²."],
    ],
    summary: [
      "An inverse reverses the steps in reverse order.",
      "Swap x and y, then solve for y.",
      "The graph reflects in y = x; domain and range swap.",
      "Quadratics need a restricted domain for the inverse to be a function.",
    ],
    next: "1.6 transforms parent functions with translations and vertical stretches.",
  }),
];
