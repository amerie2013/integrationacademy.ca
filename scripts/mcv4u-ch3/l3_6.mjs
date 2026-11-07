// MCV4U 3.6 — Optimization Problems: a step-by-step method (variables, constraint, one-variable function, domain,
// derivative, endpoints), number, fencing, box, can and pricing problems, and harder distance and cost models
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { chart } from "./csign.mjs";
import { dia, field, box, can, poster } from "./diagrams.mjs";
import { tv } from "../mcr3u-extables.mjs";

export const TITLE = "3.6 Optimization Problems";
export const ID = "f9cbac41-acb6-4f60-ae92-d24c53624a51";

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "🎯",
    title: "Optimization Problems",
    overview: S`Engineers want the least material, businesses the greatest profit, travellers the shortest route. In each case one quantity is to be made as large or as small as possible subject to a condition — an <strong>optimization problem</strong>. The method is always the same: name the variables, write the quantity to optimize, use the condition (the <strong>constraint</strong>) to reduce it to one variable, state the realistic domain, then find the absolute maximum or minimum with the derivative, checking critical numbers and endpoints. Finally, answer the question in words with units.`,
    goals: [
      "translate a situation into a function of one variable;",
      "use a constraint to eliminate a variable;",
      "state a realistic domain;",
      "find and justify the absolute maximum or minimum;",
      "interpret the answer in context.",
    ],
    curriculum: "B2.4 (solve optimization problems involving polynomial, simple rational and other functions), B2.5 (solve problems arising from real-world applications by applying a mathematical model and the concepts of derivatives)",
    prior: [
      [S`Absolute maximum of \(x(10-x)\) on \([0,10]\)?`, S`25, at \(x=5\).`],
      [S`If \(xy=100\), write \(y\) in terms of \(x\).`, S`\(y=\frac{100}{x}\).`],
      [S`Volume of a cylinder?`, S`\(V=\pi r^2h\).`],
    ],
    words: [
      ["Objective function", "the quantity to maximize or minimize", "area, cost, volume"],
      ["Constraint", "an equation linking the variables", "fixed perimeter, fixed volume"],
      ["Domain", "the realistic values of the variable", "lengths ≥ 0"],
      ["Absolute extremum", "the overall largest or smallest value on the domain", ""],
    ],
  }),

  section("📌 The method", S`
  ${table(["Step", "Action"], [
    ["1", "Draw a diagram; name the variables with units"],
    ["2", "Write the objective function (what is optimized)"],
    ["3", "Use the constraint to write it in one variable"],
    ["4", "State the domain"],
    ["5", "Find the critical numbers; compare with the endpoints (or use a derivative test)"],
    ["6", "Answer the question asked, with units"],
  ])}
  ${plane({ view: { xmin: 0, xmax: 150, ymin: 0, ymax: 600 }, curves: [{ f: (x) => 2 * x + 7200 / x, a: 12, b: 150, color: "violet" }], points: [{ x: 60, y: 240, label: "min (60, 240)", color: "red" }], step: { x: 10, y: 50 } }, "Fence needed, L(x) = 2x + 7200/x, for a 2400 m² field split into two pens: least fencing at x = 60 m.")}
  ${keyIdea(S`An optimization answer needs justification: show the critical number gives the absolute extremum on the domain — by comparing with the endpoints, by the first derivative test (only one critical number, sign change), or by the second derivative test.`)}`),

  section("📌 Explore", S`<p>Choose the box or the pen. Move the slider to change the design and watch the volume or area on the graph. Find the best design by eye, then compare with the calculus answer in the panel. Notice that both endpoints give zero — the best design is in between.</p>`),

  widget("optimizationLab", { init: { kind: "box", x: 2 } }),

  section("📌 Avoiding the usual errors", S`
  <p>Most mistakes happen before any calculus: an objective function in two variables, or a domain that is too large. Write the domain before differentiating.</p>
  ${watchOut([
    "Reduce to ONE variable before differentiating.",
    "State the domain: lengths, prices and quantities are usually non-negative and bounded.",
    "Reject critical numbers outside the domain.",
    "Justify that the critical number gives a maximum (or minimum) — don't assume.",
    "Answer the question asked: dimensions, a price, a time — not just x.",
  ])}`),

  examples([
    ["A number problem", S`Two positive numbers add to 40. Find them so that the product of one and the square of the other is as large as possible.`,
      [S`<b>Variables and constraint.</b> Let the number that is squared be \(x\). The other is \(40-x\), because the two add to 40. Both are positive, so \(0\lt x\lt40\); we include the endpoints 0 and 40 to compare values.`,
        S`<b>Objective.</b> Maximize \(P(x)=x^2(40-x)=40x^2-x^3\) on \([0,40]\).`,
        S`<b>Critical numbers.</b> \(P'(x)=80x-3x^2=x(80-3x)=0\) gives \(x=0\) or \(x=\tfrac{80}{3}\approx26.67\).`,
        S`<b>Confirm it is a maximum.</b> ${chart({ from: [0, "0"], to: [40, "40"], cuts: [[80 / 3, "\\tfrac{80}{3}"]], d: ["P'(x)", (x) => 80 * x - 3 * x * x], f: "P" })} Also \(P(0)=P(40)=0\), while \(P\left(\tfrac{80}3\right)=\tfrac{6400}{9}\cdot\tfrac{40}{3}=\tfrac{256\,000}{27}\approx9481.5\).`,
        S`<b>Answer and check.</b> The numbers are \(\tfrac{80}{3}\) and \(40-\tfrac{80}{3}=\tfrac{40}{3}\). Nearby whole numbers do worse: \(P(26)=26^2\cdot14=9464\) and \(P(27)=27^2\cdot13=9477\), both below 9481.5 ✓`],
      S`\(\tfrac{80}{3}\approx26.67\) (the squared number) and \(\tfrac{40}{3}\approx13.33\)`,
      plane({ view: { xmin: 0, xmax: 42, ymin: 0, ymax: 10.5 }, curves: [{ f: (x) => (x * x * (40 - x)) / 1000, a: 0, b: 40, color: "violet" }], points: [{ x: 80 / 3, y: 9.4815, label: "(26.67, 9481.5)", color: "red" }], step: { x: 5, y: 1 }, xlabel: "x", ylabel: "P (thousands)" })],
    ["Least fencing", S`A 2400 m² rectangular field is split into two pens by a fence parallel to one side. Find the dimensions that use the least fencing.`,
      [S`<b>Draw and label.</b> Let the sides be \(x\) and \(y\), with the divider parallel to the sides of length \(y\). ${dia(field({ top: "x", side: "y", pens: 2, note: "divider y" }), "Fencing: two sides of length x, three of length y.")}`,
        S`<b>Objective and constraint.</b> Fencing \(L=2x+3y\). Area \(xy=2400\), so \(y=\dfrac{2400}{x}\) and \(L(x)=2x+\dfrac{7200}{x}\), with \(x\gt0\).`,
        S`<b>Critical number.</b> \(L'(x)=2-\dfrac{7200}{x^2}=0\Rightarrow x^2=3600\Rightarrow x=60\) (the negative root is not a length).`,
        S`<b>Minimum?</b> ${chart({ from: [0, "0"], cuts: [[60, "60"]], d: ["L'(x)", (x) => 2 - 7200 / (x * x)], f: "L" })} Equivalently \(L''(x)=\dfrac{14400}{x^3}\gt0\) for \(x\gt0\): a cup, so the only critical number is the absolute minimum.`,
        S`<b>Dimensions.</b> \(y=\dfrac{2400}{60}=40\) and \(L=120+120=240\) m.`,
        S`<b>Check.</b> \(L(50)=100+144=244\) and \(L(72)=144+100=244\), both more than 240 ✓. Notice that at the minimum the fencing splits evenly: 120 m in the \(x\)-direction and 120 m in the \(y\)-direction.`],
      S`60 m by 40 m (divider 40 m long), using 240 m of fencing`,
      plane({ view: { xmin: 0, xmax: 160, ymin: 0, ymax: 500 }, curves: [{ f: (x) => 2 * x + 7200 / x, a: 15, b: 160, color: "violet" }], points: [{ x: 60, y: 240, label: "min (60, 240)", color: "red" }], step: { x: 20, y: 50 }, xlabel: "x (m)", ylabel: "L (m)" })],
    ["Least material for a box", S`An open-top box with a square base must hold 32 000 cm³. Find the dimensions that use the least material.`,
      [S`<b>Draw and label.</b> Base \(x\) by \(x\), height \(h\). ${dia(box({ base: "x", h: "h" }), "Material = base + four sides (no top).")}`,
        S`<b>Constraint.</b> Volume \(x^2h=32\,000\), so \(h=\dfrac{32\,000}{x^2}\).`,
        S`<b>Objective.</b> Area \(A=x^2+4xh=x^2+4x\cdot\dfrac{32\,000}{x^2}=x^2+\dfrac{128\,000}{x}\), \(x\gt0\).`,
        S`<b>Critical number.</b> \(A'(x)=2x-\dfrac{128\,000}{x^2}=0\Rightarrow2x^3=128\,000\Rightarrow x^3=64\,000\Rightarrow x=40\).`,
        S`<b>Minimum and dimensions.</b> \(A''(x)=2+\dfrac{256\,000}{x^3}\gt0\): a cup, so \(x=40\) gives the minimum. \(h=\dfrac{32\,000}{1600}=20\) and \(A=1600+3200=4800\) cm².`,
        S`<b>Check.</b> \(A(30)=900+4266.7\approx5167\) and \(A(50)=2500+2560=5060\), both larger ✓. The volume is \(40\cdot40\cdot20=32\,000\) ✓`],
      S`base 40 cm by 40 cm, height 20 cm (4800 cm² of material)`,
      plane({ view: { xmin: 0, xmax: 100, ymin: 0, ymax: 16 }, curves: [{ f: (x) => (x * x + 128000 / x) / 1000, a: 9, b: 100, color: "violet" }], points: [{ x: 40, y: 4.8, label: "min (40, 4800 cm²)", color: "red" }], step: { x: 10, y: 2 }, xlabel: "x (cm)", ylabel: "A (thousand cm²)" })],
    ["The cheapest can", S`A cylindrical can must hold 500 cm³. Find the radius and height that minimize its surface area.`,
      [S`<b>Draw and label.</b> Radius \(r\), height \(h\). The surface is two circles plus the curved side. ${dia(can(), "Surface area A = 2πr² + 2πrh.")}`,
        S`<b>Constraint.</b> \(\pi r^2h=500\), so \(h=\dfrac{500}{\pi r^2}\).`,
        S`<b>Objective.</b> \(A=2\pi r^2+2\pi r\cdot\dfrac{500}{\pi r^2}=2\pi r^2+\dfrac{1000}{r}\), \(r\gt0\).`,
        S`<b>Critical number.</b> \(A'(r)=4\pi r-\dfrac{1000}{r^2}=0\Rightarrow4\pi r^3=1000\Rightarrow r^3=\dfrac{250}{\pi}\Rightarrow r=\sqrt[3]{250/\pi}\approx4.30\).`,
        S`<b>Minimum?</b> ${chart({ v: "r", f: "A", from: [0, "0"], cuts: [[Math.cbrt(250 / Math.PI), "4.30"]], d: ["A'(r)", (r) => 4 * Math.PI * r - 1000 / (r * r)] })}`,
        S`<b>The height, exactly.</b> From \(\pi r^3=250\): \(h=\dfrac{500}{\pi r^2}=\dfrac{2\cdot\pi r^3}{\pi r^2}=2r\approx8.60\). The best can is as tall as it is wide. \(A\approx2\pi(4.30)^2+\dfrac{1000}{4.30}\approx348.7\) cm².`,
        S`<b>Check.</b> \(A(4)=100.5+250=350.5\) and \(A(5)=157.1+200=357.1\), both above 348.7 ✓`],
      S`radius about 4.30 cm, height about 8.60 cm — the height equals the diameter`,
      plane({ view: { xmin: 0, xmax: 12, ymin: 0, ymax: 1200 }, curves: [{ f: (r) => 2 * Math.PI * r * r + 1000 / r, a: 1, b: 12, color: "violet" }], points: [{ x: 4.3013, y: 348.73, label: "min (4.30, 348.7)", color: "red" }], step: { x: 1, y: 100 }, xlabel: "r", ylabel: "A" })],
    ["The best ticket price", S`At 40 dollars a ticket, 2000 tickets sell; each 1 dollar decrease sells 75 more. What price maximizes revenue?`,
      [S`<b>Model the demand.</b> At price \(p\), the price has dropped by \(40-p\) dollars, so \(75(40-p)\) extra tickets sell: tickets \(=2000+75(40-p)=5000-75p\).`,
        S`<b>Objective and domain.</b> Revenue \(R(p)=p(5000-75p)=5000p-75p^2\). Tickets cannot be negative: \(5000-75p\ge0\), so \(0\le p\le\tfrac{200}{3}\approx66.67\).`,
        S`<b>Critical number.</b> \(R'(p)=5000-150p=0\Rightarrow p=\tfrac{100}{3}\approx33.33\).`,
        S`<b>Maximum?</b> ${chart({ v: "p", f: "R", from: [0, "0"], to: [200 / 3, "\\tfrac{200}{3}"], cuts: [[100 / 3, "\\tfrac{100}{3}"]], d: ["R'(p)", (p) => 5000 - 150 * p] })} At the endpoints \(R=0\), so the critical number gives the absolute maximum.`,
        S`<b>Results.</b> Tickets \(5000-75\cdot\tfrac{100}{3}=2500\); revenue \(\tfrac{100}{3}\cdot2500\approx83\,333\) dollars, more than \(R(40)=40\cdot2000=80\,000\).`,
        S`<b>Check with whole-dollar prices.</b> ${tv(["\\(p\\)", "32", "33", "34", "35"], ["tickets", "2600", "2525", "2450", "2375"], ["\\(R\\)", "83 200", "83 325", "83 300", "83 125"])} The best whole-dollar price is 33 dollars, next to 33.33 ✓`],
      S`about 33.33 dollars per ticket, giving 2500 tickets and about 83 333 dollars`,
      plane({ view: { xmin: 0, xmax: 70, ymin: 0, ymax: 90 }, curves: [{ f: (p) => (5000 * p - 75 * p * p) / 1000, a: 0, b: 200 / 3, color: "violet" }], points: [{ x: 100 / 3, y: 83.333, label: "max (33.33, 83.3)", color: "red" }, { x: 40, y: 80, label: "(40, 80)", color: "amber" }], step: { x: 10, y: 10 }, xlabel: "p (dollars)", ylabel: "R (thousand dollars)" })],
  ]),

  practice([
    q("product", S`Two numbers add to 18. Find the largest possible product.`, num(81),
      "P = x(18 − x).", [S`\(x=9\).`], S`\(81\)`),
    q("area", S`A rectangle has perimeter 60 m. Find its largest possible area (m²).`, num(225),
      "A = x(30 − x).", [S`A square, \(15\times15\).`], S`\(225\)`),
    q("minimum", S`For \(x\gt0\), at what \(x\) is \(x+\dfrac{16}{x}\) smallest?`, num(4),
      "1 − 16/x² = 0.", [S`\(x^2=16\).`], S`\(4\)`),
    q("endpoints", S`Why must the endpoints of the domain be checked?`, choice(["the absolute extremum may occur at an endpoint", "the derivative is always 0 there", "critical numbers are never extrema", "the function is not defined there"], 0),
      "Think of the roller-coaster in 3.2.", ["The derivative need not be 0 at the best value."], "the extremum may be at an endpoint"),
    q("inscribed", S`A rectangle has its base on the x-axis and upper corners on \(y=12-x^2\). Find its largest area.`, num(32),
      "A(x) = 2x(12 − x²), 0 ≤ x ≤ √12.", [S`\(A'=24-6x^2=0\Rightarrow x=2\); \(A=4\cdot8\).`], S`\(32\)`),
  ]),

  ...hard([
    ["The closest point", S`Find the point on \(y=\sqrt x\) closest to \((4,0)\).`,
      [S`Minimize the squared distance \(D(x)=(x-4)^2+x\), \(x\ge0\) (same minimum point as the distance).`, S`\(D'(x)=2(x-4)+1=0\Rightarrow x=3.5\); \(D''=2\gt0\).`, S`Point \((3.5,\sqrt{3.5})\approx(3.5,1.87)\); distance \(\sqrt{3.75}\approx1.94\).`],
      S`\((3.5,1.87)\), about 1.94 units away`,
      plane({ view: { xmin: -0.5, xmax: 6.5, ymin: -0.5, ymax: 3 }, curves: [{ f: (x) => Math.sqrt(x), a: 0, b: 6.5, color: "violet" }, { f: (x) => (Math.sqrt(3.5) / -0.5) * (x - 4), a: 3.5, b: 4, color: "green" }], points: [{ x: 4, y: 0, label: "(4, 0)", color: "red" }, { x: 3.5, y: Math.sqrt(3.5), label: "(3.5, 1.87)", color: "blue" }], step: { x: 0.5, y: 0.5 } })],
    ["The cheapest pipeline", S`A platform is 3 km offshore. A refinery is on the shore 8 km along the coast from the point nearest the platform. Pipe costs 50 thousand dollars per km underwater and 30 thousand per km on land. Where should the pipe reach the shore?`,
      [S`Let it land \(x\) km along the coast: \(C(x)=50\sqrt{9+x^2}+30(8-x)\), \(0\le x\le8\).`, S`\(C'(x)=\dfrac{50x}{\sqrt{9+x^2}}-30=0\Rightarrow25x^2=9(9+x^2)\Rightarrow x=2.25\).`, S`\(C(0)=390\), \(C(2.25)=360\), \(C(8)\approx427.2\) (thousand dollars).`],
      S`2.25 km along the coast; minimum cost 360 thousand dollars`,
      plane({ view: { xmin: 0, xmax: 8.5, ymin: 300, ymax: 450 }, curves: [{ f: (x) => 50 * Math.sqrt(9 + x * x) + 30 * (8 - x), a: 0, b: 8, color: "violet" }], points: [{ x: 2.25, y: 360, label: "min (2.25, 360)", color: "red" }, { x: 0, y: 390, label: "(0, 390)", color: "amber" }, { x: 8, y: 427.2, label: "(8, 427.2)", color: "amber" }], step: { x: 1, y: 25 } })],
  ], [
    q("hard", S`An open-top cylinder must hold \(1000\pi\) cm³. Find the radius (cm) that uses the least material.`, num(10),
      "A = πr² + 2000π/r.", [S`\(2\pi r-\frac{2000\pi}{r^2}=0\Rightarrow r^3=1000\).`], S`\(10\)`),
    q("hard", S`Find the largest area of a rectangle inscribed in a circle of radius 5.`, num(50),
      "A = 4xy with x² + y² = 25; the best rectangle is a square.", [S`Side \(5\sqrt2\), area 50.`], S`\(50\)`),
    q("hard", S`A farmer has 1200 m of fence to make a pen against a barn, split into three sections by two fences perpendicular to the barn. Find the largest total area (m²).`, num(90000),
      "4x + y = 1200; A = x(1200 − 4x).", [S`\(x=150\), \(y=600\).`], S`\(90\,000\)`),
  ]),

  wrapUp({
    qas: [
      ["Why minimize the square of a distance?", "√ is increasing, so the distance and its square are smallest at the same point, and the square is easier to differentiate."],
      ["What if there are two critical numbers?", "Evaluate the objective function at each (and the endpoints) and compare; or keep only those inside the domain."],
      ["Do I need a derivative test if I check the endpoints?", "No: on a closed interval, comparing all candidates is a complete justification. On an open domain, use a derivative test."],
      ["Why is the best can's height equal to its diameter?", "That is what the calculus gives for any volume: h = 2r minimizes 2πr² + 2πrh with πr²h fixed."],
      ["How do I set up a pricing problem?", "Write the number sold as a function of the price, multiply by the price for revenue, then maximize."],
    ],
    summary: [
      "Diagram, variables, objective, constraint.",
      "One variable and a domain.",
      "Critical numbers + endpoints (or a test).",
      "Answer in words with units.",
    ],
    next: "3.7 reviews the whole chapter.",
  }),
];
