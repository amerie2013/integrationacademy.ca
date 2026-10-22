// IB AA SL 10.5 — Area Between Curves: ∫(upper − lower) dx, finding the limits from intersections, curves that cross inside the interval, regions bounded by a curve, a line and an axis, technology for intersections
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard } from "./lib.mjs";
import { fig, areaDoc } from "./figs10.mjs";

export const TITLE = "10.5 Area Between Curves";
export const ID = "ed637290-bc98-4ac6-9a9f-c3b708a28ccf";
const S = String.raw;
const P = (x, y, label, color = "blue") => ({ x, y, label, color });

export const blocks = () => [
  intro({
    icon: "🪟",
    title: "Area Between Curves",
    overview: S`The area between two curves is the area under the upper curve minus the area under the lower one. Because the subtraction happens inside the integral, it does not matter whether the region is above or below the x-axis. In this lesson you will find where curves meet, set up \(\int_a^b(\text{upper}-\text{lower})\,dx\), split the interval when the curves swap over, and handle regions bounded by curves, lines and axes.`,
    goals: [
      "find intersection points to use as limits;",
      S`find area as \(\int_a^b\left[f(x)-g(x)\right]dx\) where \(f\ge g\);`,
      "split the region when the curves cross inside the interval;",
      "find areas bounded by a curve, a line and an axis;",
      "use a GDC to find intersections and evaluate areas.",
    ],
    curriculum: "SL 5.11 (areas between curves); SL 5.5 (areas using technology)",
    prior: [
      [S`Solve \(x^2=2x+3\).`, S`\(x=-1\) or \(x=3\).`],
      [S`Evaluate \(\int_0^2(4-x^2)\,dx\).`, S`\(\frac{16}{3}\).`],
      [S`Which is larger at \(x=1\): \(y=x^2\) or \(y=\sqrt x\)? At \(x=0.25\)?`, "Equal at 1; √x at 0.25."],
    ],
    words: [
      ["Upper curve", "the one with the larger y-value on the interval", ""],
      ["Intersection", "where the curves meet: solve f(x) = g(x)", ""],
      ["Enclosed region", "bounded on all sides by the curves", ""],
      ["Bounded region", "may use a line or an axis as one side", ""],
      ["Split point", "a crossing inside the interval where upper and lower swap", ""],
    ],
  }),

  section("📌 Upper minus lower", S`
  <p>Between \(y=2x+3\) and \(y=x^2\): they meet where \(x^2=2x+3\), at \(x=-1\) and \(x=3\). On \([-1,3]\) the line is above, so the area is \(\int_{-1}^3\left(2x+3-x^2\right)dx=\left[x^2+3x-\frac13x^3\right]_{-1}^3=9-\left(-\frac53\right)=\frac{32}3\).</p>
  ${fig(areaDoc({ view: { xmin: -2, xmax: 4, ymin: -1, ymax: 11 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => 2 * x + 3, color: "amber" }, { f: (x) => x * x, color: "violet" }], points: [P(-1, 1, "(−1, 1)", "red"), P(3, 9, "(3, 9)", "red")] }, [{ f: (x) => 2 * x + 3, g: (x) => x * x, a: -1, b: 3 }]), "Area between y = 2x + 3 (amber) and y = x² (violet): 32/3")}
  <p>The same formula works below the axis. Between \(y=x^2-4\) and \(y=-x^2+4\) the region straddles the axis, yet the area is still \(\int_{-2}^2\left[(4-x^2)-(x^2-4)\right]dx=\int_{-2}^2(8-2x^2)\,dx=\frac{64}3\).</p>
  ${fig(areaDoc({ view: { xmin: -3, xmax: 3, ymin: -5, ymax: 5 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => 4 - x * x, color: "amber" }, { f: (x) => x * x - 4, color: "violet" }], points: [P(-2, 0, "(−2, 0)", "red"), P(2, 0, "(2, 0)", "red")] }, [{ f: (x) => 4 - x * x, g: (x) => x * x - 4, a: -2, b: 2, color: "green" }]), "Between 4 − x² and x² − 4: 64/3, even though half the region is below the axis")}
  ${keyIdea("Area between curves = ∫ₐᵇ (upper − lower) dx, with a and b at the intersections (or given limits).")}`),

  section("📌 When the curves cross", S`
  <p>If the curves swap over inside \([a,b]\), integrate on each piece with the correct upper curve, then add. On \([0,2]\), \(y=x^3\) and \(y=x\) cross at \(x=1\): \(\int_0^1(x-x^3)\,dx+\int_1^2(x^3-x)\,dx=\frac14+\frac94=\frac52\).</p>
  ${fig(areaDoc({ view: { xmin: -0.5, xmax: 2.3, ymin: -0.5, ymax: 8 }, step: { x: 0.5, y: 1 }, curves: [{ f: (x) => x ** 3, color: "violet" }, { f: (x) => x, color: "amber" }], points: [P(1, 1, "(1, 1)", "red")] }, [{ f: (x) => x, g: (x) => x ** 3, a: 0, b: 1, color: "green" }, { f: (x) => x ** 3, g: (x) => x, a: 1, b: 2, color: "violet" }]), "y = x³ and y = x on [0, 2]: green ¼ + violet 9/4 = 5/2")}
  <p>Curves involving \(e^x\) or \(\ln x\) often need a GDC for the intersection. For \(y=e^x\) and \(y=x+2\), the GDC gives \(x\approx-1.841\) and \(x\approx1.146\), and the enclosed area \(\approx1.949\).</p>
  ${fig(areaDoc({ view: { xmin: -3, xmax: 2, ymin: -1, ymax: 5 }, step: { x: 1, y: 1 }, curves: [{ f: Math.exp, color: "violet" }, { f: (x) => x + 2, color: "amber" }], points: [P(-1.841, 0.159, "x ≈ −1.841", "red"), P(1.146, 3.146, "x ≈ 1.146", "red")] }, [{ f: (x) => x + 2, g: Math.exp, a: -1.8414, b: 1.1462 }]), "Region between y = x + 2 and y = eˣ: area ≈ 1.949 (GDC)")}
  ${watchOut([
    "Sketch first: decide which curve is on top on each interval.",
    "Do not integrate across a crossing point without splitting.",
    "The limits come from the intersections, not the x-intercepts (unless an axis is a boundary).",
    "Area is always positive; if you get a negative, you subtracted the wrong way.",
  ])}`),

  section("📌 Explore", S`<p>Choose a pair of curves. The explorer finds the intersections, shades the region and computes the area.</p>`),

  widget("ibBetween", { init: [1] }),

  examples([
    ["Level 1 · Line and parabola", S`Find the area enclosed by \(y=x^2-2x\) and \(y=x\).`,
      [S`\(x^2-2x=x\Rightarrow x(x-3)=0\).`, S`\(\int_0^3\left(x-(x^2-2x)\right)dx=\int_0^3(3x-x^2)\,dx=\frac{27}2-9\).`],
      S`\(\frac92\)`,
      fig(areaDoc({ view: { xmin: -1, xmax: 4, ymin: -2, ymax: 5 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => x * x - 2 * x, color: "violet" }, { f: (x) => x, color: "amber" }], points: [P(0, 0, "(0, 0)", "red"), P(3, 3, "(3, 3)", "red")] }, [{ f: (x) => x, g: (x) => x * x - 2 * x, a: 0, b: 3 }]), "Area 9/2")],
    ["Level 1 · Two parabolas", S`Find the area enclosed by \(y=10-x^2\) and \(y=x^2+2\).`,
      [S`\(10-x^2=x^2+2\Rightarrow x=\pm2\).`, S`\(\int_{-2}^2(8-2x^2)\,dx=\left[8x-\frac23x^3\right]_{-2}^2\).`],
      S`\(\frac{64}3\)`],
    ["Level 2 · Curve, line and axis", S`Find the area bounded by \(y=\sqrt x\), the line \(y=2\) and the y-axis.`,
      [S`\(\sqrt x=2\) at \(x=4\); the line is above on \([0,4]\).`, S`\(\int_0^4(2-\sqrt x)\,dx=8-\frac{16}3\).`],
      S`\(\frac83\)`],
    ["Level 2 · Exponential and line", S`Find the area between \(y=e^x\), \(y=1\) and \(x=2\).`,
      [S`\(e^x\ge1\) for \(x\ge0\); they meet at \(x=0\).`, S`\(\int_0^2(e^x-1)\,dx=(e^2-2)-1\).`],
      S`\(e^2-3\approx4.389\)`],
    ["Level 3 · Crossing curves", S`Find the total area between \(y=x^2\) and \(y=4x-3\) from \(x=0\) to \(x=3\).`,
      [S`They meet at \(x=1\) and \(x=3\). On \([0,1]\) the parabola is above; on \([1,3]\) the line is.`, S`\(\int_0^1(x^2-4x+3)\,dx=\frac43\); \(\int_1^3(-x^2+4x-3)\,dx=\frac43\).`],
      S`\(\frac83\)`,
      fig(areaDoc({ view: { xmin: -0.5, xmax: 3.5, ymin: -3.5, ymax: 10 }, step: { x: 0.5, y: 1 }, curves: [{ f: (x) => x * x, color: "violet" }, { f: (x) => 4 * x - 3, color: "amber" }], points: [P(1, 1, "(1, 1)", "red"), P(3, 9, "(3, 9)", "red")] }, [{ f: (x) => x * x, g: (x) => 4 * x - 3, a: 0, b: 1, color: "green" }, { f: (x) => 4 * x - 3, g: (x) => x * x, a: 1, b: 3 }]), "Two pieces, each of area 4/3")],
  ]),

  practice([
    q("Level 1 · area", S`Find the area enclosed by \(y=x^2\) and \(y=4\).`, num(32 / 3, 0.001),
      "Meet at ±2.", [S`\(\int_{-2}^2(4-x^2)\,dx\).`], S`\(\frac{32}3\)`),
    q("Level 1 · limits", S`The limits for the area between \(y=x^2\) and \(y=5x\) are:`, choice(["0 and 5", "−5 and 5", "0 and 25", "1 and 5"], 0),
      "x² = 5x.", [S`\(x(x-5)=0\).`], "0 and 5"),
    q("Level 2 · area", S`Find the area enclosed by \(y=x^2\) and \(y=5x\).`, num(125 / 6, 0.001),
      "∫₀⁵ (5x − x²) dx.", [S`\(\frac{125}2-\frac{125}3\).`], S`\(\frac{125}6\)`),
    q("Level 2 · cubic", S`Find the area enclosed by \(y=x^3\) and \(y=4x\) for \(x\ge0\).`, num(4),
      "Meet at 0 and 2.", [S`\(\int_0^2(4x-x^3)\,dx=8-4\).`], S`\(4\)`),
    q("Level 2 · exponential", S`Find the area between \(y=e^{x}\) and \(y=e^{-x}\) from \(x=0\) to \(x=1\) (3 d.p.).`, num(Math.E + 1 / Math.E - 2, 0.001),
      "eˣ is on top for x > 0.", [S`\(\left[e^x+e^{-x}\right]_0^1\).`], S`\(\approx1.086\)`),
  ]),

  ...hard([
    ["A region with three boundaries", S`Find the area of the region bounded by \(y=\frac4x\), \(y=x\) and \(x=4\), for \(x>0\).`,
      [S`\(\frac4x=x\) at \(x=2\). On \([2,4]\) the line is above.`, S`\(\int_2^4\left(x-\frac4x\right)dx=\left[\frac12x^2-4\ln x\right]_2^4=(8-4\ln4)-(2-4\ln2)\).`, S`\(=6-4\ln2\approx3.227\).`],
      S`\(6-4\ln2\approx3.227\)`,
      fig(areaDoc({ view: { xmin: 0, xmax: 5, ymin: 0, ymax: 5 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => 4 / x, a: 0.8, b: 5, color: "violet" }, { f: (x) => x, color: "amber" }], vlines: [{ x: 4, color: "gray", dash: true }], points: [P(2, 2, "(2, 2)", "red")] }, [{ f: (x) => x, g: (x) => 4 / x, a: 2, b: 4 }]), "Region between y = x and y = 4/x from x = 2 to x = 4")],
    ["Finding an unknown boundary", S`The area enclosed by \(y=x^2\) and \(y=kx\) (\(k>0\)) is 36. Find \(k\).`,
      [S`Meet at \(0\) and \(k\). Area \(\int_0^k(kx-x^2)\,dx=\frac{k^3}2-\frac{k^3}3=\frac{k^3}6\).`, S`\(\frac{k^3}6=36\Rightarrow k^3=216\).`],
      S`\(k=6\)`],
  ], [
    q("Level 3 · sum of pieces", S`Find the total area between \(y=x^3\) and \(y=x\) from \(x=-1\) to \(x=1\).`, num(0.5, 0.001),
      "Two lobes of ¼.", [S`\(\frac14+\frac14\).`], S`\(\frac12\)`),
    q("Level 3 · GDC", S`Use a GDC to find the area enclosed by \(y=\ln x\) and \(y=x-2\) (3 d.p.).`, num(1.949, 0.002),
      "Intersections ≈ 0.159 and 3.146.", [S`\(\int(\ln x-x+2)\,dx\) between them.`], S`\(\approx1.949\)`),
    q("Level 3 · unknown", S`The area between \(y=a-x^2\) and the x-axis is \(\frac{32}3\). Find \(a>0\).`, num(4),
      "Area = (4/3)a^(3/2).", [S`\(a^{3/2}=8\).`], S`\(4\)`),
  ]),

  wrapUp({
    qas: [
      ["How do I set up the area between curves?", "∫ (upper − lower) dx between the intersection x-values."],
      ["Does it matter if the region is below the x-axis?", "No — upper minus lower is still positive."],
      ["What if the curves cross inside the interval?", "Split at the crossing and add the pieces."],
      ["When do I need technology?", "When the intersection equation cannot be solved exactly (e.g. eˣ = x + 2)."],
      ["How can I check my answer?", "Area must be positive; a GDC can evaluate the same integral."],
    ],
    summary: [
      "Area = ∫ₐᵇ (f − g) dx, f above g.",
      "Limits from f(x) = g(x).",
      "Split where the curves cross.",
      "Use a GDC for awkward intersections.",
    ],
    next: "10.6 uses integration for displacement and distance in kinematics.",
  }),
];
