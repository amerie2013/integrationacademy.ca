// IB AA SL Worksheet 15.3 — Communicating Mathematics (teacher edition)
import { probT, F, pt, normT } from "./figT.mjs";

const S = String.raw;

const EXAMPLES = [
  { title: "Calculator notation", q: S`Rewrite \texttt{y = 4x\^{}3 - 2} and \texttt{6.1E-3} correctly.`,
    steps: [S`$y=4x^3-2$; $6.1\times10^{-3}$.`], ans: S`$y=4x^3-2$, $6.1\times10^{-3}$` },
  { title: "Equals or approximately", q: S`Correct "$e=2.718$" and "$\ln5=1.609$".`,
    steps: ["Both are rounded."], ans: S`$e\approx2.718$, $\ln5\approx1.609$` },
  { title: "Defining variables", q: S`Rewrite "$c=3.5n+20$" for a phone-plan cost model.`,
    steps: [S`"Let n be the number of gigabytes used and c the monthly cost in dollars: $c=3.5n+20$."`], ans: "define n and c with units, then the model" },
  { title: "Significant figures", q: "Round 2.71828 and 0.0049571 to 3 significant figures.",
    steps: ["2.72 and 0.00496."], ans: S`$2.72$, $0.00496$` },
  { title: "Consistent precision", q: "Masses measured to 0.1 g have mean 45.273333 g. Report it sensibly.",
    steps: ["Match the data's precision (or one more figure)."], ans: S`$45.3$ g` },
  { title: "Improving a graph", q: "List what the graph shown is missing.",
    fig: F({ view: { xmin: 0, xmax: 10, ymin: 0, ymax: 50 }, points: [pt(1, 8, false), pt(3, 17, false), pt(5, 25, false), pt(7, 34, false), pt(9, 44, false)], step: { x: 1, y: 10 } }, 5.6),
    steps: ["Title, axis labels with units, a named model, a source note."], ans: "title, labels, units, model, source" },
  { title: "Choosing a representation", q: "Which representation best shows how 150 test scores are distributed?",
    fig: probT([40, 50, 60, 70, 80, 90], [6, 18, 41, 48, 27, 10], { xlab: "score (class midpoint)", ylab: "frequency", labels: false }, 5.6),
    steps: ["A histogram shows the shape; add summary statistics."], ans: "histogram plus summary statistics" },
  { title: "Avoiding repetition", q: "A student shows 15 nearly identical integrals in full. Suggest an improvement.",
    steps: ["Show one in full, then tabulate the other 14 results."], ans: "one worked example + table" },
  { title: "Labelling a model", q: S`Write a caption for a graph of $h\sim N(170,8^2)$ shading $162<h<178$.`,
    fig: normT(170, 8, [{ a: 162, b: 178, color: "green" }], {}, 5.6),
    steps: ["Name the variable, units, model and the meaning of the shading."], ans: "Heights h (cm) modelled by N(170, 8²); shaded: about 68% between 162 and 178 cm" },
];

const PROBLEMS = [
  { level: 1, q: S`Rewrite "sqrt(18)=4.24" correctly.`, recap: "≈ and √.", ans: S`$\sqrt{18}\approx4.24$` },
  { level: 1, q: "Round 0.0082649 to 3 significant figures.", recap: "s.f.", ans: S`$0.00826$` },
  { level: 1, q: "Write 3.4E5 in standard form.", recap: "×10ⁿ.", ans: S`$3.4\times10^5$` },
  { level: 2, q: S`Define the variables for "$P=1200(1.03)^t$".`, recap: "Units.", ans: "P = value in dollars after t years" },
  { level: 2, q: "Lengths measured to 1 mm have mean 23.46667 cm. Report it.", recap: "Precision.", ans: S`$23.5$ cm` },
  { level: 2, q: "Give the correct order: conclusion, introduction, bibliography, mathematics, reflection.", recap: "Structure.", ans: "introduction, mathematics, conclusion, reflection, bibliography" },
  { level: 2, q: "Explain why each figure should be numbered and referred to in the text.", recap: "Coherence.", ans: "so the reader knows which figure supports each point" },
  { level: 2, q: "The bar chart shows results of 5 repeated trials. Write one sentence that interprets it.", recap: "Interpret.", ans: "e.g. times vary little (11.8–12.9 s), so the method is consistent",
    fig: probT(["1", "2", "3", "4", "5"], [12.4, 11.8, 12.9, 12.1, 12.6], { xlab: "trial", ylab: "time (s)" }, 5) },
  { level: 3, space: 4, q: S`Rewrite: "Calculator says 0.94 so it's correct, y=3x+2."`, recap: "Name, define, interpret.", ans: "name the regression, define x and y with units, interpret r ≈ 0.94 in context" },
  { level: 3, space: 4, q: "A student reports a gradient as 2.347826 from data with 2 significant figures. Comment.", recap: "Over-precision.", ans: "report about 2.3; extra digits suggest false accuracy" },
  { level: 3, space: 4, q: "Explain when a table is better than a graph and when a graph is better.", recap: "Purpose.", ans: "tables give exact values; graphs show trends and shape" },
  { level: 3, space: 4, q: "Which elements does criterion B reward that criterion A does not?", recap: "Notation vs structure.", ans: "B: notation, terminology, representations; A: organisation, coherence, concision" },
  { level: 3, space: 4, q: "The graph shown uses a scale that starts at 40. Explain how this might mislead a reader and how to fix it.", recap: "Scale.", ans: "small differences look large; state the broken axis or start at 0",
    fig: F({ view: { xmin: 0, xmax: 6, ymin: 40, ymax: 50 }, points: [pt(1, 42, false), pt(2, 43, false), pt(3, 45, false), pt(4, 46, false), pt(5, 48, false)], step: { x: 1, y: 2 } }, 5) },
];

export const WS = {
  code: "15.3",
  title: "Communicating Mathematics",
  bigideas: S`Criteria A and B (8 marks) depend on how the work reads. Organise it: aim, mathematics in steps, conclusion, reflection, bibliography. Use proper notation, define every variable with units, write $\approx$ for rounded values and keep precision consistent with the data. Graphs need titles, labelled axes with units and named models; summarise repeated work in tables.`,
  goals: ["Structure the exploration.", "Use correct notation.", "Choose sensible precision.", "Communicate with graphs and tables."],
  curriculum: "Internal assessment",
  vocab: [["Notation", "mathematical symbols"], ["Representation", "graph, table, equation"], ["Precision", "s.f. or d.p. reported"]],
  hook: "Could a classmate follow your exploration without asking you a single question?",
  concepts: [
    ["1. Structure", S`${probT(["intro", "maths", "conclusion", "reflection"], [2, 8, 1, 2], { xlab: "section", ylab: "pages" }, 4.6)} Most space for the mathematics.`],
    ["2. Notation", "Define, then use."],
    ["3. Representations", "Graphs that stand alone."],
  ],
  tips: ["No calculator notation.", "Define symbols with units.", "≈ for rounded values.", "Number figures.", "Show one, tabulate the rest."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
