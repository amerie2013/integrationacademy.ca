// IB AA SL 10.7 — Chapter 10 Review: indefinite integrals, exponentials and reciprocals, approximating area, the fundamental theorem, area between curves, kinematics
import { intro, section, keyIdea, widget, examples, practice, wrapUp, table, q, num, hard } from "./lib.mjs";
import { fig, areaDoc, stripsOf } from "./figs10.mjs";

export const TITLE = "10.7 Chapter 10 Review";
export const ID = "1baa0010-0001-4001-8001-000000001007";
const S = String.raw;
const P = (x, y, label, color = "blue") => ({ x, y, label, color });

export const blocks = () => [
  intro({
    icon: "🧭",
    title: "Chapter 10 Review",
    overview: S`This review connects the chapter: antiderivatives and boundary conditions, integrating exponentials, reciprocals and linear composites, approximating area, the fundamental theorem of calculus, area between curves, and kinematics. The examples combine these as exam questions do.`,
    goals: [
      "find indefinite integrals and use boundary conditions;",
      "integrate exponential, reciprocal and linear composite functions;",
      "estimate areas with rectangles and trapezia;",
      "evaluate definite integrals and find areas;",
      "use integration for displacement and distance.",
    ],
    curriculum: "SL 5.5, 5.8–5.11 (integration, areas, trapezoidal rule, kinematics)",
    prior: [
      [S`Find \(\int x^{-3}\,dx\).`, S`\(-\frac{1}{2x^2}+C\).`],
      [S`Evaluate \(\big[\ln x\big]_1^{e^3}\).`, "3."],
      ["What is the difference between displacement and distance?", "Displacement is signed; distance is always positive."],
    ],
    words: [
      ["10.1–10.2", "antiderivatives, eˣ, 1/x, linear composites", ""],
      ["10.3", "rectangle sums, trapezoidal rule, properties", ""],
      ["10.4", "fundamental theorem, areas", ""],
      ["10.5", "area between curves", ""],
      ["10.6", "kinematics", ""],
    ],
  }),

  section("📌 The chapter on one page", S`
  ${table(["Task", "Tool"], [
    ["indefinite integral", S`\(\int x^n dx=\frac{x^{n+1}}{n+1}+C\); \(\int e^{ax+b}dx=\frac1ae^{ax+b}+C\); \(\int\frac{dx}{ax+b}=\frac1a\ln|ax+b|+C\)`],
    ["estimate area", "lower/upper sums; trapezoidal rule"],
    ["exact value", S`\(\int_a^bf\,dx=F(b)-F(a)\)`],
    ["area", "split at roots; area between curves = ∫(upper − lower)"],
    ["kinematics", S`\(v=\int a\,dt\), \(s=\int v\,dt\); distance \(\int|v|\,dt\)`],
  ])}
  ${fig(areaDoc({ view: { xmin: -0.5, xmax: 5.5, ymin: -1, ymax: 7 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => 5 * x - x * x, color: "violet" }, { f: (x) => x, color: "amber" }], points: [P(4, 4, "(4, 4)", "red")] }, [{ f: (x) => 5 * x - x * x, g: (x) => x, a: 0, b: 4 }]), "Example 3: the region between y = 5x − x² and y = x")}
  ${keyIdea("Decide first what the question wants — a function, a number, an area or a distance — then pick the tool.")}`),

  section("📌 Explore", S`<p>Use the explorer to check the area-between-curves example.</p>`),

  widget("ibBetween", { init: [0] }),

  examples([
    ["Level 1 · Mixed integral", S`Find \(\int\left(3\sqrt x-\frac{2}{x}+e^{-2x}\right)dx\) for \(x>0\).`,
      [S`\(3\cdot\frac23x^{3/2}-2\ln x-\frac12e^{-2x}\).`],
      S`\(2x^{3/2}-2\ln x-\frac12e^{-2x}+C\)`],
    ["Level 2 · Trapezoidal rule versus exact", S`Estimate \(\int_1^3\frac{6}{x}\,dx\) with 4 trapezia, then find the exact value.`,
      [S`\(h=0.5\); \(y\): 6, 4, 3, 2.4, 2.`, S`\(0.25[6+2(4+3+2.4)+2]=6.7\).`, S`Exact \(6\ln3\approx6.592\): the estimate is high because \(\frac6x\) is concave up.`],
      S`\(6.7\); \(6\ln3\approx6.592\)`,
      fig(areaDoc({ view: { xmin: 0, xmax: 3.5, ymin: -0.5, ymax: 7 }, step: { x: 0.5, y: 1 }, curves: [{ f: (x) => 6 / x, a: 0.85, b: 3.5, color: "violet" }] }, [], stripsOf((x) => 6 / x, 1, 3, 4, "trap", "amber")), "Four trapezia under y = 6/x")],
    ["Level 2 · Area between curves", S`Find the area enclosed by \(y=5x-x^2\) and \(y=x\).`,
      [S`\(5x-x^2=x\Rightarrow x=0,4\).`, S`\(\int_0^4(4x-x^2)\,dx=32-\frac{64}3\).`],
      S`\(\frac{32}3\)`],
    ["Level 2 · Boundary condition", S`A curve has gradient \(\frac{dy}{dx}=\frac{4}{2x-1}\) for \(x>\frac12\) and passes through \((1,3)\). Find its equation.`,
      [S`\(y=2\ln(2x-1)+C\); \(3=2\ln1+C\Rightarrow C=3\).`],
      S`\(y=2\ln(2x-1)+3\)`],
    ["Level 3 · Kinematics", S`\(v(t)=6-2t\) m/s for \(0\le t\le5\), and \(s(0)=1\). Find \(s(t)\), the displacement and the distance travelled.`,
      [S`\(s=6t-t^2+1\).`, S`Displacement \(s(5)-s(0)=6-1=5\).`, S`\(v=0\) at \(t=3\): forward 9, back 4; distance 13.`],
      S`\(s=6t-t^2+1\); 5 m; 13 m`,
      fig(areaDoc({ view: { xmin: -0.3, xmax: 5.5, ymin: -5, ymax: 7 }, step: { x: 1, y: 1 }, curves: [{ f: (t) => 6 - 2 * t, color: "violet" }], xlabel: "t", ylabel: "v" }, [{ f: (t) => 6 - 2 * t, a: 0, b: 3, color: "green" }, { f: (t) => 6 - 2 * t, a: 3, b: 5, color: "red" }]), "Forward area 9 (green), backward area 4 (red)")],
  ]),

  practice([
    q("Level 1 · power rule", S`\(\int 9x^2\,dx=kx^3+C\). Find k.`, num(3),
      "9/3.", [S`\(3x^3\).`], S`\(3\)`),
    q("Level 1 · definite", S`Evaluate \(\int_0^{2}(x^3+1)\,dx\).`, num(6),
      "[x⁴/4 + x]₀².", [S`\(4+2\).`], S`\(6\)`),
    q("Level 2 · log", S`Evaluate \(\int_1^{e}\frac{5}{x}\,dx\).`, num(5),
      "5 ln e.", [S`\(5\).`], S`\(5\)`),
    q("Level 2 · area", S`Find the area enclosed by \(y=9-x^2\) and the x-axis.`, num(36),
      "Roots ±3.", [S`\(\left[9x-\frac13x^3\right]_{-3}^3\).`], S`\(36\)`),
    q("Level 2 · velocity", S`\(a(t)=2e^{t}\) and \(v(0)=1\). Find \(v(\ln2)\).`, num(3),
      "v = 2eᵗ − 1.", [S`\(4-1\).`], S`\(3\)`),
  ]),

  ...hard([
    ["Area with an exponential", S`Find the area enclosed by \(y=e^{x}\), \(y=e^{-x}\) and \(x=\ln 3\).`,
      [S`They meet at \(x=0\); for \(x>0\), \(e^x>e^{-x}\).`, S`\(\int_0^{\ln3}(e^x-e^{-x})\,dx=\left[e^x+e^{-x}\right]_0^{\ln3}=\left(3+\frac13\right)-2\).`],
      S`\(\frac43\)`,
      fig(areaDoc({ view: { xmin: -1, xmax: 2, ymin: -0.5, ymax: 4 }, step: { x: 0.5, y: 1 }, curves: [{ f: Math.exp, color: "violet" }, { f: (x) => Math.exp(-x), color: "amber" }], vlines: [{ x: Math.log(3), color: "gray", dash: true }], points: [P(0, 1, "(0, 1)", "red")] }, [{ f: Math.exp, g: (x) => Math.exp(-x), a: 0, b: Math.log(3) }]), "Region between eˣ and e⁻ˣ up to x = ln 3")],
    ["An unknown upper limit", S`Find \(k>0\) such that the area under \(y=\sqrt{x}\) from 0 to \(k\) equals 18.`,
      [S`\(\frac23k^{3/2}=18\Rightarrow k^{3/2}=27\).`],
      S`\(k=9\)`,
      fig(areaDoc({ view: { xmin: -0.5, xmax: 10, ymin: -0.5, ymax: 3.5 }, step: { x: 1, y: 0.5 }, curves: [{ f: (x) => Math.sqrt(x), a: 0, b: 10, color: "violet" }], points: [P(9, 3, "(9, 3)", "red")] }, [{ f: (x) => Math.sqrt(x), a: 0, b: 9 }]), "Area under √x from 0 to 9 is 18")],
  ], [
    q("Level 3 · composite", S`Evaluate \(\int_0^1(3x+1)^2\,dx\).`, num(7),
      "[(3x + 1)³/9]₀¹.", [S`\(\frac{64-1}{9}\).`], S`\(7\)`),
    q("Level 3 · distance", S`\(v(t)=t^2-t\). Find the distance travelled from \(t=0\) to \(t=2\) (3 d.p.).`, num(1 / 6 + 5 / 6, 0.001),
      "Split at t = 1.", [S`\(\frac16+\frac56\).`], S`\(1\)`),
    q("Level 3 · area", S`Find the area enclosed by \(y=x^2\) and \(y=2-x^2\) (3 d.p.).`, num(8 / 3, 0.001),
      "Meet at ±1.", [S`\(\int_{-1}^1(2-2x^2)\,dx\).`], S`\(\frac83\)`),
  ]),

  wrapUp({
    qas: [
      ["Function or number?", "An indefinite integral is a function (+ C); a definite integral is a number."],
      ["How do I choose the limits for an area?", "Use the intersections or roots, or the given lines."],
      ["When is the trapezoidal rule high or low?", "High for concave-up curves, low for concave-down."],
      ["How do I handle 1/(ax + b)?", "(1/a) ln|ax + b| + C."],
      ["How do I find distance?", "Split where v = 0 and add the absolute values."],
    ],
    summary: [
      "∫xⁿ, ∫eˣ, ∫1/x and linear composites.",
      "Trapezoidal rule and its error direction.",
      "∫ₐᵇ f = F(b) − F(a); areas and areas between curves.",
      "s = ∫v, v = ∫a; distance = ∫|v|.",
    ],
    next: "Chapter 11 studies geometry and trigonometry.",
  }),
];
