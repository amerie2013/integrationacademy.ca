// 15.3 Communicating Mathematics — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { planeDoc, P } from "./fig.mjs";
import { probDoc } from "../figs15.mjs";

const S = String.raw;

export const E = [
  mc("Which is correct mathematical notation for 7 squared times x?", S`$7x^2$`, ["7x^2", "7*x^2", "7x**2"], "Superscript power."),
  mc("Which is correct standard form?", S`$4.8\times10^{6}$`, ["4.8E6", "4.8e6", "4.8^6"], "Avoid calculator notation."),
  mc(S`Which statement correctly uses ≈?`, S`$\sqrt{3}\approx1.732$`, [S`$\sqrt{9}\approx3$`, S`$2+2\approx4$`, S`$10^2\approx100$`], "Rounded values only."),
  mc("Criterion B is about:", "mathematical communication", ["personal engagement", "reflection", "the length of the work"], "Notation, terms, representations."),
  mc("Every graph's axes should show:", "labels and units", ["only numbers", "colours", "the author's name"], "So the reader can interpret it."),
  num("Round 3.14159 to 3 significant figures.", 3.14, "Three figures.", null, 0.001),
  num("Round 0.0045678 to 2 significant figures.", 0.0046, "Leading zeros are not significant.", null, 0.00001),
  num("Round 12 345 to 2 significant figures.", 12000, "1.2 × 10⁴."),
  num("How many significant figures are in 0.00708?", 3, "7, 0, 8."),
  num(S`Write $5.2\times10^{-3}$ as a decimal.`, 0.0052, "Move the point 3 places left.", null, 0.000001),
  tf("Variables should be defined, with units, the first time they appear.", true, "Criterion B."),
  tf(S`Writing "x^2" in an exploration is acceptable mathematical notation.`, false, "Use x²."),
  tf("Figures and tables should be numbered and referred to in the text.", true, "Coherence."),
  fill(S`For rounded values use the symbol ___ rather than =.`, ["≈", "\\approx", "approx"], "Approximately equal."),
  ms("Which belong in a self-explanatory graph? Select all.", ["a title", "labelled axes with units", "a named model or key", "random decorations"], [0, 1, 2], "Only what helps the reader."),
  mc("The graph shown is missing:", "axis labels and units", ["data points", "a scale", "gridlines"], "The axes are unlabelled.", planeDoc({ view: { xmin: 0, xmax: 8, ymin: 0, ymax: 20 }, step: { x: 1, y: 2 }, points: [P(1, 3, false), P(3, 8, false), P(5, 12, false), P(7, 17, false)], xlabel: "", ylabel: "" })),
  mc("The chart summarises repeated trials. Its main benefit is that it:", "replaces many repeated calculations with one clear display", ["proves the results are correct", "adds more pages", "hides the data"], "Concision.", probDoc(["1", "2", "3", "4", "5", "6"], [8.2, 8.5, 8.1, 8.4, 8.3, 8.6], { xlab: "trial", ylab: "time (s)" })),
  num(S`Write $6.03\times10^{4}$ as an ordinary number.`, 60300, "Move the point 4 places right."),
  num("A length is measured as 14.6 cm to the nearest 0.1 cm. How many decimal places should results based on it usually show?", 1, "Match the data."),
  mc("Which order is clearest for an exploration?", "introduction, mathematics, conclusion, reflection, bibliography", ["bibliography, introduction, mathematics", "conclusion, introduction, mathematics", "mathematics only"], "Aim first, answer after the mathematics."),
];

export const M = [
  num("Masses measured to 0.1 g have mean 52.37142 g. Report the mean to 1 d.p.", 52.4, "Match the data.", null, 0.001),
  num(S`Write 0.000307 in standard form $a\times10^n$. Enter n.`, -4, "3.07 × 10⁻⁴."),
  num(S`Write 0.000307 in standard form $a\times10^n$. Enter a.`, 3.07, "3.07 × 10⁻⁴.", null, 0.001),
  num("Round 2.0049 to 3 significant figures.", 2, "2.00.", null, 0.0001),
  num("A gradient is computed as 1.987654 from data with 3 significant figures. Report it to 3 s.f.", 1.99, "Consistent precision.", null, 0.001),
  num("A section repeats the same calculation for 10 trials. If one is shown in full, how many results go in the table?", 9, "The remaining trials."),
  mc(S`"Let t be time" is incomplete because it does not state:`, "the units", ["the gradient", "the answer", "the title"], "Time in what units?"),
  mc("Which representation best shows the shape of a distribution of 300 values?", "a histogram", ["a list of all 300 values", "a single mean", "a sentence"], "Shape of the data."),
  mc("Which is the best caption for a graph?", "Figure 2: Height h (cm) of a sunflower against time t (days), with logistic model", ["Graph", "My results", "Figure"], "Informative and specific."),
  tf("Rounding intermediate values too early can make final answers inaccurate.", true, "Keep full accuracy until the end."),
  tf("Using a vertical axis that does not start at 0 is always wrong.", false, "It is fine if clearly shown and not misleading."),
  num("A table has 12 rows of results. If 4 are shown as worked examples in the text, how many appear only in the table?", 8, "12 − 4."),
  num("A probability is computed as 0.384729. Report it to 3 significant figures.", 0.385, "0.385.", null, 0.0001),
  num(S`Evaluate $2.4\times10^3+6\times10^2$ and give the answer as an ordinary number.`, 3000, "2400 + 600."),
  ms("Which improve criterion B? Select all.", ["defining all variables", "using correct notation", "labelling graphs fully", "adding a long history section"], [0, 1, 2], "History adds nothing to B."),
  mc("Which graph communicates better?", "the one with labelled axes, units and a model", ["the one with only points", "both equally", "neither"], "Self-explanatory.", planeDoc({ view: { xmin: 0, xmax: 8, ymin: 0, ymax: 20 }, step: { x: 1, y: 2 }, lines: [{ m: 2.2, b: 1.5, color: "red" }], points: [P(1, 3.5, false), P(3, 8.4, false), P(5, 12.3, false), P(7, 17.1, false)], xlabel: "time t (s)", ylabel: "distance d (m)" })),
  mc("The vertical scale of the chart starts at 0. This helps the reader because:", "bar heights are proportional to the values", ["it hides small differences", "it adds colour", "it removes units"], "Fair comparison.", probDoc(["A", "B", "C"], [18, 21, 19], { xlab: "group", ylab: "mean score" })),
  num("A student writes 1/3 as 0.33333333. To 3 s.f. it should be:", 0.333, "Sensible precision.", null, 0.0001),
  num(S`Find $\sqrt{0.0049}$ exactly.`, 0.07, "0.07² = 0.0049.", null, 0.0001),
  num("An exploration has 5 figures and 3 tables, all referenced. How many items are numbered in total?", 8, "5 + 3."),
];
