// MTH1W 5.6 — Changing Dimensions: Area (self-study format): area formulas, composite area,
// changing one or all dimensions (k²), maximum area for a given perimeter
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num } from "./lib.mjs";
import { fig, rect, polygon } from "./figs5.mjs";

export const TITLE = "5.6 Changing Dimensions: Area";

const arc = (cx, cy, r, a0, a1, n = 30) => Array.from({ length: n + 1 }, (_, i) => { const t = ((a0 + ((a1 - a0) * i) / n) * Math.PI) / 180; return [cx + r * Math.cos(t), cy + r * Math.sin(t)]; });

export const blocks = () => [
  intro({
    icon: "🟦",
    title: "Changing Dimensions: Area",
    overview: String.raw`Area measures the surface inside a boundary: paint, flooring, sod, glass. You will review the area formulas, split composite shapes into simpler pieces, and discover the surprising effect of scaling — double every length and the area becomes four times as big. Then you will find the rectangle that encloses the most area with a fixed length of fence.`,
    goals: [
      "use area formulas for rectangles, triangles, parallelograms, trapezoids and circles;",
      "find the area of composite shapes by adding and subtracting simpler areas;",
      "describe how changing one dimension changes the area;",
      "explain why scaling every length by \\(k\\) multiplies the area by \\(k^2\\);",
      "find the rectangle with the greatest area for a given perimeter (a square), with and without a wall.",
    ],
    curriculum: "E1.4 (how changing dimensions affects area; optimization)",
    prior: [
      [String.raw`Area of a triangle with base \(10\) and height \(6\)?`, String.raw`\(\tfrac12(10)(6)=30\).`],
      [String.raw`Area of a circle with radius \(2\)?`, String.raw`\(4\pi\approx12.6\).`],
      [String.raw`\(2.5^2=?\)`, String.raw`\(6.25\).`],
    ],
    words: [
      ["Area", "the number of unit squares that cover a region", "\\(\\text{cm}^2\\)"],
      ["Height", "perpendicular distance from the base to the opposite side or vertex", "always ⟂ to the base"],
      ["Trapezoid", "quadrilateral with one pair of parallel sides", "\\(A=\\tfrac12(a+b)h\\)"],
      ["Area scale factor", "the number the area is multiplied by", "\\(k^2\\)"],
      ["Maximum", "the greatest possible value", "max area"],
    ],
  }),

  section("📌 Area formulas", String.raw`
  ${table(["Shape", "Area", "Note"], [
    ["rectangle", "\\(A=lw\\)", ""], ["parallelogram", "\\(A=bh\\)", "h is the perpendicular height, not the slanted side"],
    ["triangle", "\\(A=\\tfrac12bh\\)", "half of a parallelogram"], ["trapezoid", "\\(A=\\tfrac12(a+b)h\\)", "average of the parallel sides × height"],
    ["circle", "\\(A=\\pi r^2\\)", "use the radius, not the diameter"],
  ])}
  <div style="display:flex;flex-wrap:wrap;justify-content:center;gap:10px;">
  ${fig({ w: 230, items: [...polygon([[0, 0], [6, 0], [7.5, 3], [1.5, 3]], { sides: ["b", "", "", ""], fill: "blue" }), { seg: [[1.5, 0], [1.5, 3]], color: "red", dash: true }, { right: [[2.5, 0], [1.5, 0], [1.5, 3]] }, { text: "h", at: [1.9, 1.5], bold: true, color: "red" }] }, "Parallelogram: A = bh.")}
  ${fig({ w: 230, items: [...polygon([[0, 0], [7, 0], [5, 3], [2, 3]], { sides: ["b", "", "a", ""], fill: "green", color: "green" }), { seg: [[2, 0], [2, 3]], color: "red", dash: true }, { right: [[3, 0], [2, 0], [2, 3]] }, { text: "h", at: [2.4, 1.5], bold: true, color: "red" }] }, "Trapezoid: A = ½(a + b)h.")}
  </div>
  <p><strong>Composite shapes:</strong> split into pieces and add, or take a big shape and subtract the hole.</p>`),

  section("📌 Scaling: area grows by k²", String.raw`
  <p>Scale a \(3\times2\) rectangle by \(k=2\): it becomes \(6\times4\). The area goes from \(6\) to \(24\) — four times as much, because <em>both</em> the length and the width doubled.</p>
  ${fig({ w: 320, items: [...rect(3, 2, { lw: "3", lh: "2" }), ...rect(6, 4, { lw: "6", lh: "4", fill: "violet", at: [4.5, 0] }), ...[1, 2].flatMap((i) => [{ seg: [[4.5 + 3 * i, 0], [4.5 + 3 * i, 4]], color: "violet", dash: true, width: 1.2 }]).slice(0, 1), { seg: [[4.5, 2], [10.5, 2]], color: "violet", dash: true, width: 1.2 }] }, "Doubling every length fits four copies of the original.")}
  ${keyIdea(String.raw`New area \(=k^2\times\) old area. Area has two dimensions, so the length factor is applied twice. Changing only <em>one</em> dimension by a factor multiplies the area by that factor once.`)}`),

  widget("scaleShape", { initShape: "triangle" }),

  section("📌 The greatest area for a given perimeter", String.raw`
  <p>With \(24\) m of fence:</p>
  ${table(["width (m)", "2", "4", "5", "6", "8"], [["length (m)", "10", "8", "7", "6", "4"], ["area (m²)", "20", "32", "35", "36", "32"]])}
  ${keyIdea(String.raw`For a fixed perimeter, the rectangle with the <strong>greatest area is a square</strong> (side \(=\tfrac P4\)). Against a wall (fence on three sides), the greatest area has the side along the wall <strong>twice</strong> the width: \(w=\tfrac P4\), \(l=\tfrac P2\).`)}`),

  widget("rectOptimizer", { initMode: "perimeter" }),

  section("📌 Strategy", watchOut([
    "Use the perpendicular height, not a slanted side.",
    "Circle area uses r²: square the radius, not the diameter.",
    "Scaling by k multiplies area by k², not k: double the sides, four times the area.",
    "Area units are squared: cm², m².",
  ])),

  examples([
    ["A composite window", String.raw`A window is a rectangle \(120\) cm wide and \(150\) cm high with a semicircle on top (diameter \(120\) cm). Find the area of glass.`,
      [String.raw`<b>Plan.</b> Split the composite shape into shapes with formulas, then add: rectangle \(+\) semicircle.`,
        String.raw`<b>Rectangle:</b> \(A=l\times w=120\times150=18\,000\ \text{cm}^2\).`,
        String.raw`<b>Semicircle.</b> Half a circle: \[A=\tfrac12\pi r^2\] The radius is half the diameter, \(r=120\div2=60\): \(A=\tfrac12\pi(60)^2=\tfrac12\pi(3600)=1800\pi\approx5654.9\ \text{cm}^2\).`,
        String.raw`<b>Total:</b> \(18\,000+5654.9=23\,654.9\ \text{cm}^2\).`,
        String.raw`<b>In square metres:</b> \(1\ \text{m}^2=10\,000\ \text{cm}^2\), so \(23\,654.9\div10\,000\approx2.37\ \text{m}^2\).`],
      String.raw`\(\approx23\,655\ \text{cm}^2\) (about \(2.37\ \text{m}^2\))`,
      fig({ w: 200, items: [{ poly: [[0, 0], [12, 0], [12, 15], ...arc(6, 15, 6, 0, 180).slice(1), [0, 15]], fill: "blue", color: "blue" }, { seg: [[0, 15], [12, 15]], color: "blue", dash: true, width: 1.3 }, { text: "120 cm", at: [6, -1.4], bold: true, color: "blue" }, { text: "150 cm", at: [12.8, 7.5], bold: true, color: "blue", anchor: "start" }] })],
    ["A trapezoid garden", String.raw`A garden bed is a trapezoid with parallel sides \(8\) m and \(14\) m, \(5\) m apart. Find its area.`,
      [String.raw`<b>Formula.</b> \[A=\tfrac12(a+b)h\] where \(a\) and \(b\) are the parallel sides and \(h\) is the perpendicular distance between them.`,
        String.raw`<b>Why it works.</b> Two copies of the trapezoid, one turned upside down, make a parallelogram with base \(a+b\) and height \(h\). The trapezoid is half of it.`,
        String.raw`<b>Substitute</b> \(a=8\), \(b=14\), \(h=5\): \(A=\tfrac12(8+14)(5)=\tfrac12(22)(5)=55\ \text{m}^2\).`],
      String.raw`\(55\ \text{m}^2\)`,
      fig({ w: 280, items: [...polygon([[0, 0], [14, 0], [11, 5], [3, 5]], { sides: ["14 m", "", "8 m", ""], fill: "green", color: "green" }), { seg: [[3, 0], [3, 5]], color: "red", dash: true }, { text: "5 m", at: [3.5, 2.5], color: "red", bold: true, anchor: "start" }] })],
    ["Scaling a triangle", String.raw`A triangular sail has area \(24\ \text{m}^2\). A model of it is built with every length \(\tfrac13\) of the real sail. Find the model's area.`,
      [String.raw`<b>Rule.</b> If every length is multiplied by \(k\), the area is multiplied by \(k^2\).`,
        String.raw`<b>Why.</b> Area is length \(\times\) length (here \(\tfrac12\times\) base \(\times\) height), and each length is multiplied by \(k\), so the area is multiplied by \(k\times k=k^2\).`,
        String.raw`<b>Area factor:</b> \(k=\tfrac13\), so \(k^2=\tfrac19\).`,
        String.raw`<b>Model area:</b> \(24\times\tfrac19=\tfrac{24}{9}\approx2.67\ \text{m}^2\).`,
        String.raw`<b>Check with a real sail.</b> Base \(8\), height \(6\): \(\tfrac12(8)(6)=24\) ✓. Model base \(\tfrac83\), height \(2\): \(\tfrac12\cdot\tfrac83\cdot2=\tfrac83\approx2.67\) ✓.`],
      String.raw`\(\approx2.67\ \text{m}^2\)`],
    ["One dimension vs both", String.raw`A \(6\) m by \(4\) m rug. (a) Double only the length. (b) Double both dimensions. Compare the areas.`,
      [String.raw`<b>Formula</b> \(A=l\times w\). Original: \(6\times4=24\ \text{m}^2\).`,
        String.raw`<b>(a)</b> \(12\times4=48\ \text{m}^2\). \(48\div24=2\): one length doubled, so the area doubles.`,
        String.raw`<b>(b)</b> \(12\times8=96\ \text{m}^2\). \(96\div24=4\): both lengths doubled, so the area is \(2\times2=2^2=4\) times as big.`,
        String.raw`<b>Picture it.</b> Four copies of the original rug fit exactly inside the doubled rug.`],
      "(a) doubles the area; (b) quadruples it",
      fig({ w: 320, items: [...rect(6, 4, { lw: "6 m", lh: "4 m" }), ...rect(12, 8, { lw: "12 m", lh: "8 m", fill: "amber", at: [9.5, 0] }), { seg: [[15.5, 0], [15.5, 8]], color: "amber", dash: true, width: 1.2 }, { seg: [[9.5, 4], [21.5, 4]], color: "amber", dash: true, width: 1.2 }] })],
    ["Greatest area with a wall", String.raw`A farmer has \(60\) m of fence. Find the greatest rectangular area (a) with fence on all four sides, (b) using a barn wall as one side.`,
      [String.raw`<b>(a) Rule.</b> For a fixed perimeter, the rectangle with the greatest area is a square. Side \(=60\div4=15\) m, area \(=15^2=225\ \text{m}^2\).`,
        String.raw`<b>(b) Set up.</b> The fence covers two widths and one length: \(2w+l=60\), so \(l=60-2w\) and \(A=w(60-2w)\).`,
        String.raw`<b>Try values:</b> \(w=10\): \(10\times40=400\); \(w=15\): \(15\times30=450\); \(w=20\): \(20\times20=400\). The greatest is at \(w=15\).`,
        String.raw`<b>Result:</b> \(15\) m by \(30\) m: the side along the wall is twice the width. Check \(2(15)+30=60\) ✓; area \(450\ \text{m}^2\).`],
      String.raw`(a) \(225\ \text{m}^2\); (b) \(450\ \text{m}^2\) — the wall doubles the area`,
      fig({ w: 280, items: [{ seg: [[-1, 7.5], [16, 7.5]], color: "gray", width: 4 }, { text: "barn wall", at: [7.5, 8.3], color: "gray", bold: true, size: 12 }, ...rect(15, 7.5, { lw: "30 m", lh: "15 m", fill: "green" })] })],
  ]),

  practice([
    q("circle", String.raw`Find the area of a circle with radius \(7\) cm, to the nearest hundredth.`, num(153.94, 0.006),
      "A = πr².", [String.raw`\(\pi(49)\approx153.938\).`], String.raw`\(\approx153.94\ \text{cm}^2\)`),
    q("area factor", String.raw`Every length of a shape is multiplied by \(2.5\). By what number is the area multiplied?`, num(6.25),
      "Area factor = k².", [String.raw`\(2.5^2=6.25\).`], String.raw`\(6.25\)`),
    q("scaled area", String.raw`A triangle with area \(18\ \text{cm}^2\) is enlarged by a scale factor of \(3\). Find the new area.`, num(162),
      "Multiply by k² = 9.", [String.raw`\(18\times9=162\).`], String.raw`\(162\ \text{cm}^2\)`),
    q("max area", String.raw`What is the greatest area of a rectangle with perimeter \(48\) m?`, num(144),
      "The best rectangle is a square.", [String.raw`Side \(48\div4=12\); \(12^2=144\).`], String.raw`\(144\ \text{m}^2\)`),
    q("max area with wall", String.raw`\(40\) m of fence encloses a rectangle against a wall (three sides fenced). What is the greatest area?`, num(200),
      "w = P/4 and l = P/2.", [String.raw`\(w=10\), \(l=20\); \(10\times20=200\).`], String.raw`\(200\ \text{m}^2\)`),
  ]),

  wrapUp({
    qas: [
      ["Why does area grow by k² and not k?", "A rectangle's area is length × width. Scaling multiplies both by k, so the area is multiplied by k × k = k². The same is true for every shape, because any shape can be built from tiny squares."],
      ["Why is a square best for area AND for perimeter?", "They are the same question turned around. For a fixed perimeter, a square gives the most area; for a fixed area, a square needs the least perimeter."],
      ["Why does a wall help so much?", "The wall replaces a whole side of fence, so the same fence can stretch further along the wall. The best shape is half a square: the wall side is twice the width."],
      ["Is the best shape always a rectangle?", "No. For a fixed perimeter, a circle encloses even more area than a square: 24 m of fence gives 36 m² as a square, but about 45.8 m² as a circle."],
      ["What if the answer must be in whole metres?", "Choose the whole-number dimensions closest to the square (or to l = 2w with a wall) and check the neighbours in a table."],
    ],
    summary: [
      "A = lw, bh, ½bh, ½(a + b)h, πr²; composite: add or subtract pieces.",
      "Changing one dimension by a factor multiplies the area by that factor.",
      "Scaling every length by k multiplies the area by k².",
      "Greatest area for a fixed perimeter: a square; with a wall, l = 2w.",
    ],
    next: "5.7 moves to three dimensions: volume.",
  }),
];
