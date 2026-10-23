// IB AA SL 15.3 — Communicating Mathematics: structure, correct notation and terminology, defining variables, equals versus approximately, precision, graphs and tables as representations, avoiding repetition
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard } from "./lib.mjs";
import { fig, planeDoc, normalDoc, probDoc } from "./figs15.mjs";

export const TITLE = "15.3 Communicating Mathematics";
export const ID = "1baa0015-0001-4001-8001-000000001503";
const S = String.raw;
const P = (x, y, label = "", color = "violet") => ({ x, y, label, color });
const PLANT = [[1, 3.1], [2, 4.4], [3, 6.2], [4, 7.1], [5, 8.9], [6, 9.8], [7, 11.6], [8, 12.4]];

export const blocks = () => [
  intro({
    icon: "✍️",
    title: "Communicating Mathematics",
    overview: S`Criteria A (presentation) and B (mathematical communication) are worth 8 of the 20 marks, and they depend on how the work reads, not on how hard the mathematics is. Readers should be able to follow the argument from aim to conclusion, understand every symbol, and interpret every graph without guessing. This lesson shows how to structure the exploration, write notation properly and choose representations that do real work.`,
    goals: [
      "organise the exploration with an aim, logical sections and a conclusion;",
      "use correct notation and define every variable;",
      "distinguish = from ≈ and choose sensible precision;",
      "draw graphs and tables a reader can interpret on their own;",
      "avoid repetition by showing one calculation and summarising the rest.",
    ],
    curriculum: "Internal assessment: criterion A (presentation) and criterion B (mathematical communication)",
    prior: [
      [S`Round 0.004567 to 3 significant figures.`, S`\(0.00457\).`],
      [S`Write \(2.5\times10^3\) as an ordinary number.`, S`\(2500\).`],
      ["What should every graph's axes show?", "A label and a unit."],
    ],
    words: [
      ["Notation", "the symbols of mathematics, written correctly (e.g. x², not x^2)", ""],
      ["Define a variable", "state what a letter stands for, with units, before using it", ""],
      ["Representation", "a way of showing information: equation, graph, table, diagram", ""],
      ["Precision", "the number of significant figures or decimal places reported", ""],
      ["Concise", "everything included is relevant; nothing is repeated without reason", ""],
    ],
  }),

  section("📌 Structure and notation", S`
  <p>A clear structure: an introduction stating the aim and why it matters to you; sections that build the mathematics step by step; a conclusion that answers the question; then reflection and a bibliography. Headings help the reader see this plan.</p>
  ${table(["Calculator or informal", "Correct mathematical writing"], [["x^2", S`\(x^2\)`], ["2.5E3", S`\(2.5\times10^3\)`], ["sqrt(2) = 1.41", S`\(\sqrt2\approx1.41\)`], ["sin x = 0.5 so x = 30", S`\(\sin x=0.5\Rightarrow x=30^\circ\) (or \(\frac{\pi}{6}\))`], ["the answer is 3", S`\(t=3\) seconds`]])}
  ${fig(normalDoc(165, 7, [{ a: 158, b: 172, color: "green" }]), "A labelled model: heights h (cm) of 40 students, h ~ N(165, 7²); about 68% lie between 158 and 172 cm")}
  ${keyIdea("Define every symbol with its units the first time it appears, and use = only for exact equality.")}`),

  section("📌 Graphs, tables and precision", S`
  <p>A graph should stand on its own: a title, labelled axes with units, a sensible scale, and any model drawn and named. Compare the two versions of the same data.</p>
  ${fig(planeDoc({ view: { xmin: 0, xmax: 9, ymin: 0, ymax: 14 }, step: { x: 1, y: 2 }, points: PLANT.map(([x, y]) => P(x, y)), xlabel: "", ylabel: "" }), "Before: points with no labels, units or model — the reader cannot interpret it")}
  ${fig(planeDoc({ view: { xmin: 0, xmax: 9, ymin: 0, ymax: 14 }, step: { x: 1, y: 2 }, lines: [{ m: 1.3536, b: 1.8464, color: "red" }], points: PLANT.map(([x, y]) => P(x, y)), xlabel: "time t (weeks)", ylabel: "height h (cm)" }), "After: labelled axes with units and the model h ≈ 1.35t + 1.85")}
  <p>Report answers to a precision that matches the data: measurements to 0.1 cm do not justify answers to 6 decimal places. When a calculation is repeated many times, show one example in full and put the rest in a table.</p>
  ${fig(probDoc(["1", "2", "3", "4", "5"], [12.4, 11.8, 12.9, 12.1, 12.6], { xlab: "trial", ylab: "time (s)" }), "Repeated trials summarised in one chart instead of five pages of working")}
  ${watchOut([
    "No calculator notation: write x², ×10³, √, not ^, E or sqrt.",
    "Use ≈ for rounded values.",
    "Number figures and tables and refer to them in the text.",
    "Do not repeat the same calculation in full many times.",
  ])}`),

  section("📌 Explore", S`<p>Switch each element of the graph on and off. Which ones does a reader need to understand it?</p>`),

  widget("ibGraphQuality", { init: [0, 0, 0, 0, 0] }),

  examples([
    ["Level 1 · Notation", S`Rewrite "x^2 = 2.5E3, so x = 50" in correct notation.`,
      [S`\(x^2=2.5\times10^3\Rightarrow x=\pm50\) (or \(x=50\) if x is a length).`],
      S`\(x^2=2.5\times10^3,\ x=50\)`],
    ["Level 1 · Equals or approximately", S`Correct "\(\pi=3.14\) and \(\sqrt{10}=3.16\)".`,
      ["Both values are rounded."],
      S`\(\pi\approx3.14,\ \sqrt{10}\approx3.16\)`],
    ["Level 2 · Defining variables", S`A student writes "\(y=0.8x+12\)" for a model of fuel use. Rewrite it so a reader understands it.`,
      [S`"Let d be the distance driven (km) and F the fuel used (L). The model is \(F=0.8d+12\)."`],
      "Define each variable with units, then state the model"],
    ["Level 2 · Precision", "Lengths are measured to the nearest 0.1 cm: 12.3, 12.5, 12.4 cm. The mean is shown as 12.4000000. How should it be reported?",
      [S`Mean \(=\frac{37.2}{3}=12.4\).`, "Report to the same precision as the data (or one extra figure)."],
      "12.4 cm"],
    ["Level 3 · Avoiding repetition", "A student calculates a speed for each of 12 trials, showing every calculation in full. How could this be improved?",
      [S`Show one calculation fully: \(v=\frac{d}{t}=\frac{2.00}{0.81}\approx2.47\) m/s.`, "Give the other 11 results in a numbered table, then analyse the table."],
      "One worked calculation plus a summary table",
      fig(probDoc(Array.from({ length: 12 }, (_, i) => String(i + 1)), [2.47, 2.41, 2.52, 2.44, 2.5, 2.38, 2.46, 2.55, 2.43, 2.49, 2.4, 2.51], { xlab: "trial", ylab: "speed (m/s)", labels: false }), "Twelve speeds summarised in one chart")],
  ]),

  practice([
    q("Level 1 · notation", "Which is correct mathematical notation?", choice([S`\(3.2\times10^{-4}\)`, "3.2E-4", "3.2*10^-4", "3.2e−4"], 0),
      "Standard form.", [S`\(3.2\times10^{-4}\).`], S`\(3.2\times10^{-4}\)`),
    q("Level 1 · significant figures", "Round 0.0063849 to 3 significant figures.", num(0.00638, 0.000001),
      "Third significant figure is 8.", ["0.00638."], S`\(0.00638\)`),
    q("Level 2 · approximately", S`Which statement should use ≈?`, choice([S`\(\sqrt{50}=7.07\)`, S`\(\sqrt{49}=7\)`, S`\(2^5=32\)`, S`\(\frac{3}{4}=0.75\)`], 0),
      "Rounded value.", [S`\(\sqrt{50}\approx7.07\).`], S`\(\sqrt{50}\)`),
    q("Level 2 · graph checklist", "How many of these does a self-explanatory graph need: title, axis labels, units, a key or named model, a source note?", num(5),
      "All five help the reader.", ["All five."], S`\(5\)`),
    q("Level 2 · structure", "Which order is best for an exploration?", choice(["introduction and aim, mathematics in steps, conclusion, reflection, bibliography", "mathematics, introduction, bibliography, conclusion", "conclusion first, then calculations", "bibliography, mathematics, aim"], 0),
      "Aim → development → answer.", ["Introduction first, conclusion after the mathematics."], "introduction … bibliography"),
  ]),

  ...hard([
    ["Rewriting a weak paragraph", S`Weak: "I put the numbers in my calculator and got 0.89 so it's good. y = 2x + 1." Rewrite it for criterion B.`,
      [S`Name the technique: "Using linear regression on the GDC for the 15 data points in Table 2 …"`, S`Define and state: "… with t the time (s) and d the distance (m), the model is \(d\approx2.0t+1.0\), with \(r\approx0.89\)."`, "Interpret: \"r ≈ 0.89 indicates a strong positive linear relationship, although the residuals (Figure 3) suggest slight curvature.\""],
      "Technique named, variables defined, result interpreted",
      fig(planeDoc({ view: { xmin: 0, xmax: 8, ymin: -3, ymax: 3 }, step: { x: 1, y: 1 }, points: [P(1, 1.2), P(2, 0.3), P(3, -0.6), P(4, -1.0), P(5, -0.7), P(6, 0.1), P(7, 1.4)], lines: [{ m: 0, b: 0, color: "gray" }], xlabel: "time t (s)", ylabel: "residual (m)" }), "Figure 3: residuals form a curve, suggesting a non-linear model")],
    ["Choosing the representation", "A student has 200 measurements of reaction time. Which representation(s) should appear in the exploration, and why?",
      ["A histogram shows the shape of the distribution (is it roughly normal?).", "A summary table gives mean, median and standard deviation.", "The 200 raw values belong in an appendix, not the main text."],
      "Histogram + summary statistics; raw data in an appendix",
      fig(probDoc([0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5], [8, 26, 52, 58, 36, 15, 5], { xlab: "reaction time (s)", ylab: "frequency", labels: false }), "A histogram of 200 reaction times")],
  ], [
    q("Level 3 · precision", "Times measured to 0.01 s have mean 0.38371 s. Report the mean to a sensible precision (s).", num(0.384, 0.0005),
      "One figure beyond the data's precision at most.", ["0.384 s."], S`\(0.384\)`),
    q("Level 3 · standard form", S`Write 0.000052 in standard form \(a\times10^n\). Enter n.`, num(-5),
      "5.2 × 10⁻⁵.", [S`\(5.2\times10^{-5}\).`], S`\(-5\)`),
    q("Level 3 · weighting", "How many marks are criteria A and B worth together?", num(8),
      "4 + 4.", ["8 of 20."], S`\(8\)`),
  ]),

  wrapUp({
    qas: [
      ["What structure should I use?", "Introduction and aim, mathematics in logical steps, conclusion, reflection, bibliography."],
      ["What counts as correct notation?", "Mathematical symbols (x², ×10³, √, ≈), not calculator or programming notation."],
      ["When do I define variables?", "The first time each appears, with units."],
      ["How precise should answers be?", "Consistent with the data — usually 3 significant figures."],
      ["How do I avoid repetition?", "Show one calculation fully and summarise the rest in a table or graph."],
    ],
    summary: [
      "Aim → mathematics → conclusion.",
      "Define every symbol with units.",
      "= exact, ≈ rounded.",
      "Graphs that stand on their own.",
    ],
    next: "15.4 covers reflection, academic honesty and a worked mini-exploration.",
  }),
];
