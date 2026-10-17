// MTH1W 5.5 — Changing Dimensions: Perimeter (self-study format): perimeter/circumference, composite shapes,
// changing one or all dimensions, minimum perimeter for a given area
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num } from "./lib.mjs";
import { fig, rect } from "./figs5.mjs";

export const TITLE = "5.5 Changing Dimensions: Perimeter";

const semi = (cx, cy, r, from, n = 30) => Array.from({ length: n + 1 }, (_, i) => { const t = ((from + (180 * i) / n) * Math.PI) / 180; return [cx + r * Math.cos(t), cy + r * Math.sin(t)]; });

export const blocks = () => [
  intro({
    icon: "📏",
    title: "Changing Dimensions: Perimeter",
    overview: String.raw`Perimeter is the length of a boundary: fencing, trim, edging, a running track. In this lesson you will find perimeters of composite shapes that include circles, then investigate what happens to the perimeter when you change one dimension, or scale all of them. Finally you will find the rectangle that encloses a given area with the least fencing — an optimization problem.`,
    goals: [
      "find the perimeter of polygons and the circumference of circles (\\(C=\\pi d=2\\pi r\\));",
      "find the perimeter of composite shapes, counting only the outside boundary;",
      "describe how changing one dimension changes the perimeter;",
      "explain why scaling every length by \\(k\\) multiplies the perimeter by \\(k\\);",
      "find the rectangle with the least perimeter for a given area (a square), with and without a wall.",
    ],
    curriculum: "E1.4 (how changing dimensions affects perimeter; optimization)",
    prior: [
      [String.raw`Perimeter of a \(7\) by \(3\) rectangle?`, String.raw`\(2(7+3)=20\).`],
      [String.raw`Circumference of a circle with diameter \(10\)?`, String.raw`\(10\pi\approx31.4\).`],
      [String.raw`Which whole numbers multiply to \(36\)?`, String.raw`\(1\times36, 2\times18, 3\times12, 4\times9, 6\times6\).`],
    ],
    words: [
      ["Perimeter", "total length of the boundary of a 2-D shape", "\\(P=2(l+w)\\)"],
      ["Circumference", "perimeter of a circle", "\\(C=2\\pi r\\)"],
      ["Composite shape", "a shape made of simpler shapes", "rectangle + semicircles"],
      ["Scale factor k", "the number every length is multiplied by", "\\(k=1.5\\)"],
      ["Optimization", "finding the best (least or greatest) value", "least fence"],
    ],
  }),

  section("📌 Perimeters of shapes", String.raw`
  ${table(["Shape", "Perimeter"], [["rectangle", "\\(P=2l+2w\\)"], ["square", "\\(P=4s\\)"], ["any polygon", "add the side lengths"], ["circle", "\\(C=\\pi d=2\\pi r\\)"], ["semicircle (curved part only)", "\\(\\tfrac12\\pi d=\\pi r\\)"]])}
  <p>For a <strong>composite</strong> shape, trace the outside boundary and add each piece. Edges where two parts join are inside the shape and are <strong>not</strong> counted.</p>
  ${fig({ w: 340, items: [{ poly: [[0, 0], [8, 0], ...semi(8, 2.5, 2.5, -90), [0, 5], ...semi(0, 2.5, 2.5, 90)], fill: "green", color: "green" }, { seg: [[0, 0], [0, 5]], color: "green", dash: true, width: 1.3 }, { seg: [[8, 0], [8, 5]], color: "green", dash: true, width: 1.3 }, { text: "80 m", at: [4, -0.8], bold: true, color: "blue" }, { text: "50 m", at: [9.4, 2.5], bold: true, color: "blue", anchor: "start" }] }, "A running track: two straights and two semicircular ends. The dashed lines are not part of the boundary.")}`),

  section("📌 Changing one dimension vs scaling every dimension", String.raw`
  <p>If you add \(x\) to the length of a rectangle, two sides grow, so the perimeter grows by \(2x\). If you multiply <em>every</em> length by \(k\), every piece of the boundary is multiplied by \(k\):</p>
  ${keyIdea(String.raw`New perimeter \(=k\times\) old perimeter. Perimeter is a length, so it scales by the same factor as the sides — even for circles (\(C=2\pi r\): double \(r\), double \(C\)).`)}
  <p>Try a scale factor below \(1\) too: the shape shrinks and so does the perimeter.</p>`),

  widget("scaleShape", { initShape: "rectangle" }),

  section("📌 The least perimeter for a given area", String.raw`
  <p>A garden must have area \(36\ \text{m}^2\). Some rectangles that work:</p>
  ${table(["width (m)", "1", "2", "3", "4", "6"], [["length (m)", "36", "18", "12", "9", "6"], ["perimeter (m)", "74", "40", "30", "26", "24"]])}
  ${keyIdea(String.raw`For a fixed area, the rectangle with the <strong>least perimeter is a square</strong>: side \(=\sqrt{A}\). If one side is against a wall (no fence there), the least fence uses a side along the wall that is <strong>twice</strong> the width: \(w=\sqrt{A/2}\), \(l=2w\).`)}
  <p>In the explorer choose “fixed area → min perimeter”, move the width and watch the fence length on the graph. Then tick the wall option.</p>`),

  widget("rectOptimizer", { initMode: "area" }),

  section("📌 Strategy", watchOut([
    "Composite shapes: count only the outside edges; a semicircle's curved edge is πr, half of 2πr.",
    "Adding x to one dimension of a rectangle adds 2x to the perimeter — it does not double it.",
    "Scaling by k multiplies the perimeter by k (not k²: that is area, in 5.6).",
    "With a wall, the fence covers only three sides: P = 2w + l.",
  ])),

  examples([
    ["A running track", String.raw`A track has two straight sides of \(80\) m and two semicircular ends with diameter \(50\) m. Find the distance around it.`,
      [String.raw`Straights: \(2\times80=160\) m.`, String.raw`Two semicircles make one circle: \(C=\pi\times50\approx157.1\) m.`, String.raw`Total \(\approx160+157.1=317.1\) m.`],
      String.raw`\(\approx317.1\) m`],
    ["Changing one dimension", String.raw`A \(12\) m by \(5\) m patio is made \(3\) m longer. How does the perimeter change?`,
      [String.raw`Old: \(2(12+5)=34\) m.`, String.raw`New: \(2(15+5)=40\) m.`, String.raw`The change is \(6=2\times3\): two sides each grew by \(3\).`],
      String.raw`it increases by \(6\) m, from \(34\) m to \(40\) m`,
      fig({ w: 300, items: [...rect(12, 5, { lw: "12 m", lh: "5 m" }), { poly: [[12, 0], [15, 0], [15, 5], [12, 5]], fill: "amber", color: "amber", dash: true }, { text: "+3", at: [13.5, 2.5], bold: true, color: "amber" }] })],
    ["Scaling a triangle", String.raw`A triangle has sides \(5\), \(7\) and \(9\) cm. Every side is multiplied by \(1.5\). Find the new perimeter two ways.`,
      [String.raw`Old perimeter: \(5+7+9=21\) cm, so new \(=1.5\times21=31.5\) cm.`, String.raw`Check: new sides \(7.5+10.5+13.5=31.5\) ✓`],
      String.raw`\(31.5\) cm`],
    ["Doubling a radius", String.raw`A circular flower bed has radius \(3\) m. The radius is doubled. Compare the edging needed.`,
      [String.raw`Old: \(C=2\pi(3)=6\pi\approx18.8\) m.`, String.raw`New: \(C=2\pi(6)=12\pi\approx37.7\) m.`, String.raw`\(12\pi\div6\pi=2\): double the radius, double the circumference.`],
      String.raw`twice as much edging: about \(37.7\) m instead of \(18.8\) m`],
    ["Least fencing", String.raw`A rectangular dog run must have area \(64\ \text{m}^2\). Find the dimensions that need the least fence, and compare with a \(4\) m by \(16\) m run.`,
      [String.raw`Least perimeter: a square with side \(\sqrt{64}=8\) m, so \(P=4\times8=32\) m.`, String.raw`\(4\times16\): \(P=2(4+16)=40\) m — \(8\) m more fence for the same area.`],
      String.raw`\(8\) m by \(8\) m, using \(32\) m of fence`],
  ]),

  practice([
    q("one dimension", String.raw`A \(9\) cm by \(4\) cm rectangle has its width increased by \(2\) cm. Find the new perimeter.`, num(30),
      "New width = 6; P = 2(l + w).", [String.raw`\(2(9+6)=30\).`], String.raw`\(30\) cm`),
    q("scaling", String.raw`A regular pentagon has side \(6\) cm. It is enlarged by a scale factor of \(2.5\). Find the new perimeter.`, num(75),
      "Old perimeter × k.", [String.raw`\(5\times6=30\); \(30\times2.5=75\).`], String.raw`\(75\) cm`),
    q("semicircle", String.raw`Find the perimeter of a semicircular region with diameter \(10\) cm (curved edge plus the diameter), to the nearest hundredth.`, num(25.71, 0.006),
      "Curved part = ½πd; then add the straight edge.", [String.raw`\(\tfrac12\pi(10)=5\pi\approx15.71\); \(15.71+10=25.71\).`], String.raw`\(\approx25.71\) cm`),
    q("least perimeter", String.raw`What is the least possible perimeter of a rectangle with area \(49\ \text{m}^2\)?`, num(28),
      "The best rectangle is a square.", [String.raw`Side \(\sqrt{49}=7\); \(4\times7=28\).`], String.raw`\(28\) m`),
    q("scale factor", String.raw`After every length of a figure is multiplied by \(k\), its perimeter grows from \(36\) cm to \(54\) cm. Find \(k\).`, num(1.5),
      "k = new ÷ old.", [String.raw`\(54\div36=1.5\).`], String.raw`\(k=1.5\)`),
  ]),

  wrapUp({
    qas: [
      ["Why is the square the best rectangle for a fixed area?", "For a fixed area, long thin rectangles have a lot of boundary for little area. As the sides get closer in length, the boundary shrinks; it is smallest when they are equal."],
      ["Does the same idea work for other shapes?", "Yes. Of all shapes with a given area, a circle has the least perimeter. That is one reason pipes, cans and tree trunks are round."],
      ["What changes when one side is a wall?", "You only pay for three sides, so the side along the wall can be longer. The best shape is half of a square: the wall side is twice each other side."],
      ["If I double the length and the width, does the perimeter double?", "Yes. Doubling every length is scaling by k = 2, so the perimeter doubles. Doubling only the length does not double the perimeter."],
      ["Why use π ≈ 3.14 only at the end?", "Writing answers like 12π keeps them exact. Rounding at the end avoids extra error."],
    ],
    summary: [
      "Composite perimeter: add the outside edges only; semicircle arc = πr.",
      "Adding x to one side of a rectangle adds 2x to the perimeter.",
      "Scaling all lengths by k multiplies the perimeter by k.",
      "Least perimeter for a fixed area: a square (side √A); with a wall, l = 2w.",
    ],
    next: "5.6 does the same for area — where scaling has a much bigger effect.",
  }),
];
