// IB AA SL 5.5 — Optimisation: one-variable models from a constraint, stationary points, checking max/min, endpoints, contexts
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";

export const TITLE = "5.5 Optimisation";
export const ID = "955b5bcf-7c58-4684-833b-3f5f43ea82d7";
const S = String.raw;
const P = (x, y, label, color = "blue") => ({ x, y, label, color });

export const blocks = () => [
  intro({
    icon: "📦",
    title: "Optimisation",
    overview: S`Optimisation means finding the best value — the largest volume, the smallest cost, the greatest profit. With calculus the method is always the same: write the quantity as a function of one variable, find where its derivative is zero, check that it is the maximum or minimum you want (including the ends of the domain), and answer in context. In this lesson you will apply that method to boxes, cans, fences, profits and distances.`,
    goals: [
      "define a variable and write the quantity to optimise as a function of one variable, using a constraint;",
      "state a sensible domain for the variable;",
      "find stationary points by solving the derivative equal to 0;",
      "justify a maximum or minimum with the second derivative, a sign table or endpoint values;",
      "answer the question asked, with units and sensible rounding.",
    ],
    curriculum: "SL 5.8 (optimisation problems in context; local and global maxima and minima, including at the end points of a domain)",
    prior: [
      [S`Differentiate \(V=x(20-2x)^2\) after expanding.`, S`\(V=4x^3-80x^2+400x\Rightarrow V'=12x^2-160x+400\).`],
      [S`A rectangle has perimeter 40. Write its length in terms of its width \(w\).`, S`\(20-w\).`],
      [S`What does \(f''(a)<0\) tell you at a stationary point \(x=a\)?`, "A local maximum."],
    ],
    words: [
      ["Objective function", "the quantity to maximise or minimise", "volume, cost"],
      ["Constraint", "an equation linking the variables", "perimeter = 40"],
      ["Domain", "the values the variable can sensibly take", "\\(0<x<10\\)"],
      ["Global maximum", "the largest value on the whole domain", "may be at an endpoint"],
      ["Second derivative test", "\\(f''<0\\) max, \\(f''>0\\) min", "\\(V''(a)<0\\)"],
    ],
  }),

  section("📌 The method", S`
  ${table(["Step", "Example: open box from a 30 cm square sheet"], [
    ["1. Draw and define", "cut squares of side x cm from each corner"],
    ["2. Write the objective in one variable", S`\(V=x(30-2x)^2=4x^3-120x^2+900x\)`],
    ["3. State the domain", S`\(0<x<15\)`],
    ["4. Solve f′ = 0", S`\(V'=12x^2-240x+900=12(x-5)(x-15)=0\Rightarrow x=5\)`],
    ["5. Justify", S`\(V''=24x-240\); \(V''(5)=-120<0\): maximum`],
    ["6. Answer", S`\(V(5)=5\times20^2=2000\) cm³`],
  ])}
  ${plane({ view: { xmin: -0.5, xmax: 15.5, ymin: -100, ymax: 2300 }, step: { x: 1, y: 200 }, curves: [{ f: (x) => x * (30 - 2 * x) ** 2, a: 0, b: 15, color: "violet" }], points: [P(5, 2000, "max (5, 2000)", "red")], xlabel: "x (cm)", ylabel: "V (cm³)" }, "V = x(30 − 2x)² on 0 < x < 15: the maximum is at x = 5")}
  ${keyIdea("Every optimisation answer needs three things: the derivative set to zero, a reason it is a maximum or minimum, and the final value in context.")}`),

  section("📌 Cans, endpoints and distances", S`
  <p>A cylindrical can holds 500 cm³. Its surface area is \(A=2\pi r^2+2\pi rh\). The constraint \(\pi r^2h=500\) gives \(h=\frac{500}{\pi r^2}\), so \(A=2\pi r^2+\frac{1000}{r}\). Then \(A'=4\pi r-\frac{1000}{r^2}=0\Rightarrow r^3=\frac{250}{\pi}\Rightarrow r\approx4.30\) cm, and \(A''=4\pi+\frac{2000}{r^3}>0\): a minimum of about 349 cm².</p>
  ${plane({ view: { xmin: 0, xmax: 12, ymin: -20, ymax: 1000 }, step: { x: 1, y: 100 }, curves: [{ f: (r) => 2 * Math.PI * r * r + 1000 / r, a: 1, b: 12, color: "violet" }], points: [P(4.30, 348.7, "min (4.30, 349)", "red")], xlabel: "r (cm)", ylabel: "A (cm²)" }, "Surface area of a 500 cm³ can against its radius")}
  <p>On a closed interval the largest or smallest value may be at an endpoint. For \(f(x)=x^3-6x^2+9x\) on \(0\le x\le5\): the local maximum is \(f(1)=4\), but \(f(5)=20\) is larger, so the global maximum is 20, at the endpoint.</p>
  ${plane({ view: { xmin: -0.5, xmax: 5.5, ymin: -2, ymax: 22 }, step: { x: 1, y: 2 }, curves: [{ f: (x) => x ** 3 - 6 * x * x + 9 * x, a: 0, b: 5, color: "violet" }], points: [P(1, 4, "local max (1, 4)"), P(3, 0, "(3, 0)"), P(5, 20, "global max (5, 20)", "red")] }, "Check the endpoints on a closed interval")}
  ${plane({ view: { xmin: -1, xmax: 5, ymin: -1, ymax: 5 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => Math.sqrt(x), a: 0, color: "violet" }], segs: [{ pts: [[3, 0], [2.5, Math.sqrt(2.5)]], color: "red" }], points: [P(3, 0, "(3, 0)"), P(2.5, Math.sqrt(2.5), "(2.5, 1.58)", "red")] }, "Closest point on y = √x to (3, 0): minimise D = (x − 3)² + x")}
  ${watchOut([
    "Eliminate the second variable with the constraint before differentiating.",
    "Reject stationary points outside the domain (e.g. x = 15 gives no box).",
    "On a closed interval, compare the stationary values with the endpoint values.",
    "Answer the question: 'find the maximum volume' needs V, not just x.",
  ])}`),

  section("📌 Explore", S`<p>Change the size of the sheet and the cut. The graph shows the volume; the amber point is the maximum, always at a cut of one sixth of the side.</p>`),

  widget("ibBox", { init: [24, 3] }),

  examples([
    ["Level 1 · A maximum product", S`Two positive numbers have sum 18. Find the maximum of the product of one number and the square of the other.`,
      [S`\(P=x^2(18-x)=18x^2-x^3\), \(0<x<18\).`, S`\(P'=36x-3x^2=3x(12-x)=0\Rightarrow x=12\).`, S`\(P''=36-6x=-36<0\): max \(P=144\times6=864\).`],
      S`\(864\)`],
    ["Level 1 · Profit", S`Profit is \(P(x)=-2x^3+30x^2-54x-50\) (hundreds of dollars), where \(x\) is hundreds of items, \(0\le x\le12\). Find the production level for maximum profit.`,
      [S`\(P'=-6x^2+60x-54=-6(x-1)(x-9)=0\).`, S`\(P''=-12x+60\): \(P''(9)=-48<0\) max; \(P''(1)>0\) min.`, S`\(P(9)=-1458+2430-486-50=436\); endpoints \(P(0)=-50\), \(P(12)=166\) are smaller.`],
      "900 items (profit 43 600 dollars)",
      plane({ view: { xmin: -0.5, xmax: 12.5, ymin: -120, ymax: 480 }, step: { x: 1, y: 50 }, curves: [{ f: (x) => -2 * x ** 3 + 30 * x * x - 54 * x - 50, a: 0, b: 12, color: "violet" }], points: [P(9, 436, "(9, 436)", "red"), P(1, -76, "(1, −76)")], xlabel: "x", ylabel: "P" })],
    ["Level 2 · A fence against a wall", S`A rectangular pen uses a wall as one side and 80 m of fencing for the other three. Use calculus to find the maximum area.`,
      [S`Width \(x\) (two sides), length \(80-2x\): \(A=80x-2x^2\), \(0<x<40\).`, S`\(A'=80-4x=0\Rightarrow x=20\); \(A''=-4<0\).`, S`\(A=20\times40=800\) m².`],
      S`800 m²`],
    ["Level 2 · An open tank", S`An open tank with a square base must hold 32 m³. Find the dimensions that use the least metal.`,
      [S`Base \(x\), height \(h\): \(x^2h=32\Rightarrow h=\frac{32}{x^2}\).`, S`\(A=x^2+4xh=x^2+\frac{128}{x}\); \(A'=2x-\frac{128}{x^2}=0\Rightarrow x^3=64\Rightarrow x=4\).`, S`\(A''=2+\frac{256}{x^3}>0\): minimum; \(h=2\), \(A=48\) m².`],
      "4 m × 4 m × 2 m",
      plane({ view: { xmin: 0, xmax: 10, ymin: -5, ymax: 140 }, step: { x: 1, y: 20 }, curves: [{ f: (x) => x * x + 128 / x, a: 1, b: 10, color: "violet" }], points: [P(4, 48, "min (4, 48)", "red")], xlabel: "x (m)", ylabel: "A (m²)" })],
    ["Level 3 · Closest point", S`Find the point on \(y=\sqrt x\) closest to \((3,0)\).`,
      [S`Distance² \(D=(x-3)^2+(\sqrt x)^2=x^2-5x+9\).`, S`\(D'=2x-5=0\Rightarrow x=2.5\); \(D''=2>0\).`, S`Point \((2.5,\sqrt{2.5})\approx(2.5,1.58)\); distance \(\sqrt{2.75}\approx1.66\).`],
      S`\((2.5,1.58)\)`],
  ]),

  practice([
    q("Level 1 · stationary point", S`\(A=60x-3x^2\). Find the value of \(x\) that maximises \(A\).`, num(10),
      "A′ = 60 − 6x.", [S`\(x=10\).`], S`\(10\)`),
    q("Level 1 · maximum value", S`Find the maximum value of \(A=60x-3x^2\).`, num(300),
      "Substitute x = 10.", [S`\(600-300\).`], S`\(300\)`),
    q("Level 2 · product", S`Two positive numbers have sum 12. Find the maximum of \(x^2y\).`, num(256),
      "P = x²(12 − x).", [S`\(x=8\): \(64\times4\).`], S`\(256\)`),
    q("Level 2 · justify", S`At \(x=3\), \(V'(3)=0\) and \(V''(3)=-14\). The stationary point is:`, choice(["a maximum", "a minimum", "a point of inflection", "not stationary"], 0),
      "Sign of V″.", [S`\(V''<0\).`], "maximum"),
    q("Level 2 · endpoint", S`\(f(x)=x^2-4x\) on \(0\le x\le6\). Find the global maximum of \(f\).`, num(12),
      "Compare the vertex and the endpoints.", [S`\(f(0)=0\), \(f(2)=-4\), \(f(6)=12\).`], S`\(12\)`),
  ]),

  ...hard([
    ["A box with a lid", S`A closed box has a square base of side \(x\) cm and volume 1000 cm³. The base and lid cost 3 cents per cm², the sides 2 cents per cm². Find \(x\) for the least cost.`,
      [S`Height \(h=\frac{1000}{x^2}\). Cost \(C=3(2x^2)+2(4xh)=6x^2+\frac{8000}{x}\).`, S`\(C'=12x-\frac{8000}{x^2}=0\Rightarrow x^3=\frac{2000}{3}\Rightarrow x\approx8.74\) cm.`, S`\(C''=12+\frac{16000}{x^3}>0\): a minimum; \(C\approx1373\) cents.`],
      S`\(x\approx8.74\) cm`],
    ["A window", S`A window is a rectangle of width \(2r\) topped by a semicircle of radius \(r\). Its perimeter is 10 m. Find \(r\) for the greatest area.`,
      [S`Height \(h\): \(2r+2h+\pi r=10\Rightarrow h=5-r-\frac{\pi r}{2}\).`, S`\(A=2rh+\frac{\pi r^2}{2}=10r-2r^2-\frac{\pi r^2}{2}\).`, S`\(A'=10-4r-\pi r=0\Rightarrow r=\frac{10}{4+\pi}\approx1.40\) m; \(A''=-4-\pi<0\).`],
      S`\(r\approx1.40\) m`,
      plane({ view: { xmin: -0.2, xmax: 2.6, ymin: -1, ymax: 9 }, step: { x: 0.5, y: 1 }, curves: [{ f: (r) => 10 * r - 2 * r * r - (Math.PI * r * r) / 2, a: 0, b: 2.5, color: "violet" }], points: [P(10 / (4 + Math.PI), 50 / (4 + Math.PI), "max (1.40, 7.00)", "red")], xlabel: "r", ylabel: "A" }, "Area of the window against r")],
  ], [
    q("Level 3 · open box", S`Squares of side \(x\) are cut from the corners of a 12 cm by 12 cm sheet to make an open box. Find the maximum volume (cm³).`, num(128),
      "V = x(12 − 2x)²; max at x = 2.", [S`\(2\times8^2\).`], S`\(128\)`),
    q("Level 3 · tank", S`An open tank with a square base holds 4 m³. Find the side of the base (m) that minimises the surface area.`, num(2),
      "A = x² + 16/x.", [S`\(2x=\frac{16}{x^2}\Rightarrow x^3=8\).`], S`\(2\)`),
    q("Level 3 · closest", S`Find the x-coordinate of the point on \(y=x^2\) closest to \((0,2)\), with \(x>0\) (3 d.p.).`, num(1.225, 0.001),
      "D = x² + (x² − 2)².", [S`\(D'=4x^3-6x=0\Rightarrow x^2=1.5\).`], S`\(\sqrt{1.5}\approx1.225\)`),
  ]),

  wrapUp({
    qas: [
      ["How do I start an optimisation problem?", "Draw a diagram, name the variables, and write the quantity to optimise. Use the constraint to reduce it to one variable."],
      ["Why state a domain?", "It rules out impossible answers (negative lengths, no box) and tells you which endpoints to check."],
      ["Is f′ = 0 always the answer?", "On an open interval with one stationary point, usually; on a closed interval the best value may be at an endpoint."],
      ["How do I justify a maximum?", "f″ < 0 at the point, or f′ changing from + to −, or comparing values including endpoints."],
      ["Why minimise distance squared?", "It has the same minimum point as the distance and avoids square roots."],
    ],
    summary: [
      "Model: one variable, from the constraint; state the domain.",
      "Solve f′ = 0.",
      "Justify with f″, a sign table or endpoints.",
      "Answer in context with units.",
    ],
    next: "5.6 applies derivatives to motion: velocity and acceleration.",
  }),
];
