// MTH1W 5.8 — Surface Area (self-study format): nets, prisms, cylinders, pyramids, cones (slant height), spheres
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num } from "./lib.mjs";
import { fig, prism, triPrism, cone, pyramid, prismNet, cylinderNet } from "./figs5.mjs";

export const TITLE = "5.8 Surface Area";

export const blocks = () => [
  intro({
    icon: "📦",
    title: "Surface Area",
    overview: String.raw`Surface area is the total area of all the faces of a solid — the cardboard in a box, the label on a can, the paint on a wall, the shingles on a roof. The reliable method is to unfold the solid into a <strong>net</strong> and add the areas of its pieces. For pyramids and cones you will need the <strong>slant height</strong>, which comes from the Pythagorean theorem.`,
    goals: [
      "draw or picture the net of a prism, cylinder, pyramid and cone;",
      "find the surface area of prisms and cylinders, including open containers;",
      "find the slant height of a pyramid or cone with the Pythagorean theorem;",
      "find the surface area of pyramids, cones and spheres;",
      "solve problems about composite solids and explain why scaling by \\(k\\) multiplies surface area by \\(k^2\\).",
    ],
    curriculum: "E1.4 (how changing dimensions affects surface area), E1.6 (solve problems involving surface area of prisms, pyramids, cylinders, cones and spheres)",
    prior: [
      [String.raw`Area of a triangle, base \(6\), height \(5\)?`, String.raw`\(15\).`],
      [String.raw`Circumference of a circle, radius \(4\)?`, String.raw`\(8\pi\approx25.1\).`],
      [String.raw`Hypotenuse with legs \(5\) and \(12\)?`, String.raw`\(13\).`],
    ],
    words: [
      ["Surface area (SA)", "total area of all outside surfaces", "\\(\\text{cm}^2\\)"],
      ["Net", "a flat pattern that folds into the solid", ""],
      ["Lateral area", "area of the sides only (not the bases)", "a can's label"],
      ["Slant height s", "height of a face of a pyramid or cone, measured along the face", "\\(s=\\sqrt{h^2+r^2}\\)"],
      ["Height h", "perpendicular distance from base to apex", "\\(h\\ne s\\)"],
    ],
  }),

  section("📌 Nets: unfold and add", String.raw`
  <div style="display:flex;flex-wrap:wrap;justify-content:center;gap:12px;align-items:center;">
  ${fig({ w: 300, items: prismNet(6, 3, 4) }, "Net of a 6 × 3 × 4 prism: three pairs of equal rectangles.")}
  ${fig({ w: 220, items: cylinderNet(2, 5) }, "Net of a cylinder: the side unrolls into a rectangle 2πr long.")}
  </div>
  ${table(["Solid", "Surface area"], [
    ["rectangular prism", "\\(SA=2lw+2lh+2wh\\)"],
    ["any prism", "2 × (area of base) + (perimeter of base) × height"],
    ["cylinder", "\\(SA=2\\pi r^2+2\\pi rh\\)"],
  ])}
  ${keyIdea(String.raw`Surface area is the area of the net. For an <strong>open</strong> container (no lid) leave out one face; for a solid sitting on the ground, leave out what is hidden. Read the question to decide which faces count.`)}`),

  widget("netExplorer", { init: "prism" }),

  section("📌 Pyramids and cones: the slant height", String.raw`
  <div style="display:flex;flex-wrap:wrap;justify-content:center;gap:12px;">
  ${fig({ w: 210, items: pyramid(6, 4, { lb: "b", lh: "h", ls: "s" }) }, "s² = h² + (b/2)²")}
  ${fig({ w: 180, items: cone(3, 4, { lr: "r", lh: "h", ls: "s" }) }, "s² = h² + r²")}
  </div>
  ${keyIdea(String.raw`Square pyramid: \(SA=b^2+4\big(\tfrac12bs\big)=b^2+2bs\). Cone: \(SA=\pi r^2+\pi rs\). Sphere: \(SA=4\pi r^2\). The slant height \(s\) is the hypotenuse of a right triangle whose legs are the height \(h\) and half the base (pyramid) or the radius (cone).`)}
  ${watchOut([
    "Triangular faces use the slant height s, not the height h of the solid.",
    "Cone: lateral area πrs uses the slant height; the base πr² uses the radius.",
    "Open box or can: subtract the missing face.",
    "Scaling by k multiplies surface area by k² (it is an area).",
  ])}`),

  widget("netExplorer", { init: "cone" }),

  examples([
    ["A gift box", String.raw`How much wrapping paper covers a box \(30\) cm by \(20\) cm by \(8\) cm with no overlap?`,
      [String.raw`<b>Idea.</b> Surface area is the total area of all the faces (unfold the box into its net). A box has 6 rectangular faces in 3 matching pairs.`,
        String.raw`<b>Top and bottom:</b> \(2(30\times20)=2(600)=1200\ \text{cm}^2\).`,
        String.raw`<b>Front and back:</b> \(2(30\times8)=2(240)=480\ \text{cm}^2\).`,
        String.raw`<b>Two ends:</b> \(2(20\times8)=2(160)=320\ \text{cm}^2\).`,
        String.raw`<b>Total:</b> \(1200+480+320=2000\ \text{cm}^2\).`,
        String.raw`<b>Check with the formula</b> \(SA=2(lw+lh+wh)\): \(2(600+240+160)=2(1000)=2000\) ✓.`],
      String.raw`\(2000\ \text{cm}^2\)`,
      fig({ w: 260, items: prism(30, 20, 8, { ll: "30 cm", lw: "20 cm", lh: "8 cm" }) })],
    ["A tent (triangular prism)", String.raw`A tent's triangular ends have base \(3\) m and height \(2\) m; the sloping sides are \(2.5\) m; the tent is \(4\) m long. Find the fabric needed, including the floor.`,
      [String.raw`<b>Faces.</b> 2 triangles (the ends) and 3 rectangles (two sloping sides and the floor).`,
        String.raw`<b>Check the sloping side.</b> The height splits the base into \(1.5\) and \(1.5\), so by Pythagoras the slope is \(\sqrt{1.5^2+2^2}=\sqrt{6.25}=2.5\) m ✓.`,
        String.raw`<b>Two triangles:</b> \(2\times\tfrac12(3)(2)=6\ \text{m}^2\).`,
        String.raw`<b>Three rectangles</b>, each \(4\) m long, with widths \(2.5\), \(2.5\) and \(3\): \(4\times(2.5+2.5+3)=4\times8=32\ \text{m}^2\).`,
        String.raw`<b>Total:</b> \(6+32=38\ \text{m}^2\). Without the floor: \(38-4\times3=38-12=26\ \text{m}^2\).`],
      String.raw`\(38\ \text{m}^2\) (\(26\ \text{m}^2\) without the floor)`,
      fig({ w: 260, items: triPrism(3, 2, 4, { lb: "3 m", lt: "2 m", lL: "4 m", ax: 1.5 }) })],
    ["An open can", String.raw`A can with no lid has radius \(4\) cm and height \(10\) cm. Find the area of metal used.`,
      [String.raw`<b>Net of a cylinder.</b> Two circles and one rectangle. The rectangle's width is the circumference \(2\pi r\), because it wraps once around the circle: \[SA=2\pi r^2+2\pi rh\]`,
        String.raw`<b>No lid</b>, so use only one circle: \(\pi(4)^2=16\pi\).`,
        String.raw`<b>Side (rectangle):</b> \(2\pi(4)\times10=8\pi\times10=80\pi\).`,
        String.raw`<b>Total:</b> \(16\pi+80\pi=96\pi\approx301.6\ \text{cm}^2\).`],
      String.raw`\(96\pi\approx301.6\ \text{cm}^2\)`,
      fig({ w: 240, items: cylinderNet(4, 10, { lr: "r = 4", lh: "10 cm", lc: "2π(4)" }) })],
    ["A square pyramid", String.raw`A pyramid has a square base of side \(10\) m and height \(12\) m. Find its surface area.`,
      [String.raw`<b>Faces.</b> One square base and four equal triangles. Each triangle's height is the <b>slant height</b> \(s\), not the pyramid's height.`,
        String.raw`<b>Slant height.</b> The height \(12\), half the base \(5\) and \(s\) form a right triangle: \(s=\sqrt{12^2+5^2}=\sqrt{144+25}=\sqrt{169}=13\) m.`,
        String.raw`<b>Base:</b> \(10^2=100\ \text{m}^2\).`,
        String.raw`<b>Four triangles:</b> \(4\times\tfrac12(10)(13)=4\times65=260\ \text{m}^2\).`,
        String.raw`<b>Total:</b> \(100+260=360\ \text{m}^2\).`],
      String.raw`\(360\ \text{m}^2\)`,
      fig({ w: 220, items: pyramid(10, 12, { lb: "10 m", lh: "12 m", ls: "s" }) })],
    ["A cone", String.raw`A cone has radius \(5\) cm and height \(12\) cm. Find its total surface area.`,
      [String.raw`<b>Formula.</b> \[SA=\pi r^2+\pi rs\] (base \(+\) curved surface), where \(s\) is the slant height.`,
        String.raw`<b>Slant height.</b> Radius, height and slant form a right triangle: \(s=\sqrt{5^2+12^2}=\sqrt{25+144}=\sqrt{169}=13\) cm.`,
        String.raw`<b>Curved surface:</b> \(\pi(5)(13)=65\pi\). <b>Base:</b> \(\pi(5)^2=25\pi\).`,
        String.raw`<b>Total:</b> \(65\pi+25\pi=90\pi\approx282.7\ \text{cm}^2\).`],
      String.raw`\(90\pi\approx282.7\ \text{cm}^2\)`,
      fig({ w: 180, items: cone(5, 12, { lr: "5 cm", lh: "12 cm", ls: "s" }) })],
  ]),

  practice([
    q("cube", String.raw`Find the surface area of a cube with edge \(7\) cm.`, num(294),
      "Six equal square faces.", [String.raw`\(6\times7^2=6\times49=294\).`], String.raw`\(294\ \text{cm}^2\)`),
    q("cylinder", String.raw`Find the surface area of a closed cylinder with radius \(3\) cm and height \(10\) cm, to the nearest hundredth.`, num(245.04, 0.006),
      "SA = 2πr² + 2πrh.", [String.raw`\(18\pi+60\pi=78\pi\approx245.04\).`], String.raw`\(\approx245.04\ \text{cm}^2\)`),
    q("pyramid", String.raw`A square pyramid has base side \(6\) m and slant height \(5\) m. Find its surface area.`, num(96),
      "Base b² plus four triangles ½bs.", [String.raw`\(36+4\times\tfrac12(6)(5)=36+60=96\).`], String.raw`\(96\ \text{m}^2\)`),
    q("sphere", String.raw`Find the surface area of a sphere with radius \(10\) cm, to the nearest hundredth.`, num(1256.64, 0.006),
      "SA = 4πr².", [String.raw`\(4\pi(100)=400\pi\approx1256.64\).`], String.raw`\(\approx1256.64\ \text{cm}^2\)`),
    q("scaling", String.raw`Every length of a solid is tripled. By what number is its surface area multiplied?`, num(9),
      "Surface area is an area: factor k².", [String.raw`\(3^2=9\).`], String.raw`\(9\)`),
  ]),

  wrapUp({
    qas: [
      ["What is the difference between h and s?", "h goes straight down from the apex to the centre of the base, inside the solid. s runs down the middle of a face to the base edge. s is always longer, and s² = h² + (b/2)² or s² = h² + r²."],
      ["Why is a cone's curved surface πrs?", "Unrolled, it is a sector of a circle with radius s. Its arc must wrap the base, so its length is 2πr; a sector's area is ½ × arc × radius = ½(2πr)(s) = πrs."],
      ["When do I leave faces out?", "When they are not covered by the material: an open box has no lid, a tent may have no floor, and faces glued together in a composite solid are hidden."],
      ["Which shape holds the most for the least material?", "For a fixed volume, a sphere has the least surface area. Among cylinders, the best has height equal to its diameter (h = 2r); among boxes, a cube."],
      ["If I double every length, what happens to SA and V?", "SA is multiplied by 2² = 4 and V by 2³ = 8. Volume grows faster than surface area — one reason large animals lose heat more slowly."],
    ],
    summary: [
      "SA = area of the net; leave out faces that are open or hidden.",
      "Prism: 2(base) + (perimeter of base)(height); cylinder 2πr² + 2πrh.",
      "Pyramid b² + 2bs; cone πr² + πrs; sphere 4πr².",
      "Slant height from Pythagoras; scaling by k multiplies SA by k².",
    ],
    next: "5.9 reviews the whole chapter.",
  }),
];
