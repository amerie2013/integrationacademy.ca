// MTH1W 2.6 — Rearranging Formulas (NEW lesson): isolating any variable with inverse operations
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, expr } from "./lib.mjs";
import { flow, polygon } from "./figs.mjs";

export const TITLE = "2.6 Rearranging Formulas";
export const NEW = { id: "2b5e7c1a-0a26-4d1e-9c26-c2a9f0000206", position: 16 };

const FORMULAS = [
  { name: "Temperature", tex: String.raw`F=\tfrac95C+32`, target: "C",
    fwd: [String.raw`\times\tfrac95`, "+32"], inv: ["-32", String.raw`\times\tfrac59`],
    steps: [{ op: "subtract 32 from both sides", result: String.raw`F-32=\tfrac95C` }, { op: String.raw`multiply both sides by \(\tfrac59\)`, result: String.raw`C=\tfrac59(F-32)` }] },
  { name: "Rectangle perimeter", tex: String.raw`P=2l+2w`, target: "w",
    fwd: [String.raw`\times2`, "+2l"], inv: ["-2l", String.raw`\div2`],
    steps: [{ op: String.raw`subtract \(2l\) from both sides`, result: String.raw`P-2l=2w` }, { op: "divide both sides by 2", result: String.raw`w=\dfrac{P-2l}{2}` }] },
  { name: "Line", tex: String.raw`y=mx+b`, target: "x",
    fwd: [String.raw`\times m`, "+b"], inv: ["-b", String.raw`\div m`],
    steps: [{ op: String.raw`subtract \(b\) from both sides`, result: String.raw`y-b=mx` }, { op: String.raw`divide both sides by \(m\)`, result: String.raw`x=\dfrac{y-b}{m}` }] },
  { name: "Cylinder volume", tex: String.raw`V=\pi r^2h`, target: "h",
    fwd: [String.raw`\times\pi r^2`], inv: [String.raw`\div\pi r^2`],
    steps: [{ op: String.raw`divide both sides by \(\pi r^2\)`, result: String.raw`h=\dfrac{V}{\pi r^2}` }] },
  { name: "Trapezoid area", tex: String.raw`A=\dfrac{(a+b)h}{2}`, target: "b",
    fwd: ["+a", String.raw`\times h`, String.raw`\div2`], inv: [String.raw`\times2`, String.raw`\div h`, "-a"],
    steps: [{ op: "multiply both sides by 2", result: String.raw`2A=(a+b)h` }, { op: String.raw`divide both sides by \(h\)`, result: String.raw`\dfrac{2A}{h}=a+b` }, { op: String.raw`subtract \(a\) from both sides`, result: String.raw`b=\dfrac{2A}{h}-a` }] },
];

export const blocks = () => [
  intro({
    icon: "🔁",
    title: "Rearranging Formulas",
    overview: String.raw`A formula such as \(F=\tfrac95C+32\) is written to find one variable (\(F\)) from another (\(C\)). But often you know \(F\) and need \(C\). Instead of solving a new equation every time, you can <strong>rearrange</strong> the formula once, isolating the variable you want. This lesson uses exactly the inverse operations from 2.4 and 2.5 — only now the other quantities are letters.`,
    goals: [
      "identify the operations applied to a variable in a formula and the order they are applied;",
      "isolate any variable by undoing those operations in reverse order;",
      String.raw`rewrite a linear relation such as \(3x+4y=24\) in the form \(y=mx+b\);`,
      "decide when to rearrange first and when to substitute first;",
      "use rearranged formulas from measurement, science and finance, with units.",
    ],
    curriculum: "C1.5 (rearrange formulas to isolate a variable); C3 link (forms of a linear relation)",
    prior: [
      [String.raw`Solve \(4x+10=30\).`, String.raw`\(x=5\): subtract \(10\), then divide by \(4\).`],
      [String.raw`What undoes “multiply by \(\tfrac95\)”?`, String.raw`Multiply by \(\tfrac59\).`],
      [String.raw`Simplify \(\dfrac{6x-12}{6}\).`, String.raw`\(x-2\) — divide <em>both</em> terms by \(6\).`],
    ],
    words: [
      ["Formula", "an equation that relates two or more quantities", "\\(A=lw\\)"],
      ["Subject", "the variable on its own on one side", "\\(A\\) is the subject of \\(A=lw\\)"],
      ["Rearrange (solve for)", "make another variable the subject", "\\(w=\\tfrac{A}{l}\\)"],
      ["Literal equation", "an equation with several letters", "\\(ax+b=c\\)"],
    ],
  }),

  section("📌 Same moves, letters instead of numbers", String.raw`
  ${table(["Solving 4x + 10 = 30", "Solving ax + b = c for x"], [
    ["\\(4x=30-10\\) (subtract 10)", "\\(ax=c-b\\) (subtract \\(b\\))"],
    ["\\(x=\\dfrac{20}{4}=5\\) (divide by 4)", "\\(x=\\dfrac{c-b}{a}\\) (divide by \\(a\\))"],
  ])}
  <p>With letters, you cannot calculate \(c-b\) as one number, so the answer keeps the operations visible. That is the point: the rearranged formula works for <em>every</em> set of values.</p>
  ${flow("C", ["× 9/5", "+ 32"], "F", "Building F from C (top), and undoing it to get C from F (bottom).", ["F", "− 32", "× 5/9", "C"])}
  ${keyIdea(String.raw`List the operations done to your target variable, in order. Undo them in <strong>reverse</strong> order, doing each to <strong>both sides</strong> of the formula.`)}`),

  widget("formulaRearrange", { formulas: FORMULAS }),

  section("📌 Rearrange first, or substitute first?", String.raw`
  <p>For a single calculation, substituting the numbers and then solving is fine. If you need the same unknown many times — a table of values, a spreadsheet, a program — rearrange once and substitute many times.</p>
  ${table(["F (°F)", "C = 5/9(F − 32)"], [["\\(212\\)", "\\(100\\)"], ["\\(98.6\\)", "\\(37\\)"], ["\\(32\\)", "\\(0\\)"], ["\\(-40\\)", "\\(-40\\)"]])}
  ${watchOut([
    String.raw`<strong>Divide every term</strong>: from \(2w=P-2l\), \(w=\tfrac{P-2l}{2}=\tfrac{P}{2}-l\), not \(P-l\).`,
    String.raw`<strong>Keep brackets</strong> that group an operation: \(\tfrac59(F-32)\) is not \(\tfrac59F-32\).`,
    String.raw`<strong>A negative coefficient</strong> moves with its sign: from \(3x-4y=12\), \(-4y=12-3x\), so \(y=\tfrac34x-3\).`,
    String.raw`<strong>You cannot divide by a variable that could be \(0\)</strong>; for example \(x=\tfrac{y-b}{m}\) needs \(m\neq0\).`,
  ])}`),

  examples([
    ["Distance, speed and time", String.raw`Solve \(d=vt\) for \(t\). Then find how long a \(375\)-km drive takes at \(100\) km/h.`,
      [String.raw`\(t\) is multiplied by \(v\); undo by dividing both sides by \(v\): \(t=\dfrac{d}{v}\).`, String.raw`\(t=\dfrac{375}{100}=3.75\) h, which is \(3\) h \(45\) min.`],
      String.raw`\(t=\dfrac{d}{v}\); \(3.75\) h`],
    ["Temperature", String.raw`Use \(C=\tfrac59(F-32)\) to convert \(-40\,^\circ\)F and \(50\,^\circ\)F to Celsius.`,
      [String.raw`\(-40\): \(\tfrac59(-72)=-40\). (The only temperature that is the same on both scales!)`, String.raw`\(50\): \(\tfrac59(18)=10\).`],
      String.raw`\(-40\,^\circ\)C and \(10\,^\circ\)C`],
    ["A fence", String.raw`Solve \(P=2l+2w\) for \(l\). A rectangular pen uses \(150\) m of fencing and is \(30\) m wide. How long is it?`,
      [String.raw`Subtract \(2w\): \(P-2w=2l\).`, String.raw`Divide by \(2\): \(l=\dfrac{P-2w}{2}=\dfrac{P}{2}-w\).`, String.raw`\(l=\tfrac{150}{2}-30=75-30=45\) m. Check: \(2(45)+2(30)=150\) ✓`],
      String.raw`\(l=\tfrac{P}{2}-w\); \(45\) m`],
    ["From standard form to y = mx + b", String.raw`Write \(3x+4y=24\) in the form \(y=mx+b\). State the slope and the \(y\)-intercept.`,
      [String.raw`Subtract \(3x\): \(4y=-3x+24\).`, String.raw`Divide <em>every</em> term by \(4\): \(y=-\tfrac34x+6\).`, String.raw`Check with \(x=4\): \(3(4)+4y=24\) gives \(y=3\); and \(-\tfrac34(4)+6=3\) ✓`],
      String.raw`\(y=-\tfrac34x+6\): slope \(-\tfrac34\), \(y\)-intercept \(6\)`],
    ["A trapezoid", String.raw`Solve \(A=\dfrac{(a+b)h}{2}\) for \(b\). A trapezoid has area \(91\) cm², height \(7\) cm and one parallel side \(11\) cm. Find the other parallel side.`,
      [String.raw`\(\times2\): \(2A=(a+b)h\). \(\div h\): \(\tfrac{2A}{h}=a+b\). \(-a\): \(b=\tfrac{2A}{h}-a\).`, String.raw`\(b=\tfrac{2(91)}{7}-11=26-11=15\) cm.`, String.raw`Check: \(\tfrac{(11+15)(7)}{2}=\tfrac{182}{2}=91\) ✓`],
      String.raw`\(b=\tfrac{2A}{h}-a\); \(15\) cm`,
      polygon([[40, 140], [300, 140], [230, 30], [100, 30]], ["b = ?", "", "a = 11 cm", ""], "Area 91 cm², height 7 cm.")],
  ]),

  practice([
    q("one step", String.raw`A regular hexagon has perimeter \(P=6s\). Solve for \(s\).`, expr("P/6", false),
      String.raw`\(s\) is multiplied by \(6\).`, [String.raw`Divide both sides by \(6\).`], String.raw`\(s=\dfrac{P}{6}\)`, { placeholder: "s = …" }),
    q("two steps", String.raw`Solve \(P=2a+b\) for \(a\).`, expr("(P-b)/2", false),
      String.raw`Undo \(+b\) first, then \(\times2\).`, [String.raw`\(P-b=2a\).`, String.raw`\(a=\dfrac{P-b}{2}\).`], String.raw`\(a=\dfrac{P-b}{2}\)`, { placeholder: "a = …" }),
    q("line", String.raw`Solve \(y=mx+b\) for \(b\).`, expr("y-mx", false),
      String.raw`\(b\) has \(mx\) added to it.`, [String.raw`Subtract \(mx\) from both sides.`], String.raw`\(b=y-mx\)`, { placeholder: "b = …" }),
    q("standard form", String.raw`Solve \(2x-5y=10\) for \(y\).`, expr("(2x-10)/5", false),
      String.raw`Subtract \(2x\), then divide every term by \(-5\).`, [String.raw`\(-5y=10-2x\).`, String.raw`\(y=\dfrac{10-2x}{-5}=\tfrac25x-2\).`], String.raw`\(y=\tfrac25x-2\)`, { placeholder: "y = …" }),
    q("use it", String.raw`A phone plan costs \(C=25+0.15k\) dollars, where \(k\) is the number of extra megabytes. Solve for \(k\), then find \(k\) when the bill is \(61\) dollars.`, num(240),
      String.raw`\(k=\dfrac{C-25}{0.15}\).`, [String.raw`\(C-25=0.15k\), so \(k=\dfrac{C-25}{0.15}\).`, String.raw`\(k=\dfrac{36}{0.15}=240\).`], String.raw`\(240\) MB`),
  ]),

  wrapUp({
    qas: [
      ["Is rearranging a formula different from solving an equation?", "No — it is the same process. The only difference is that the other quantities are letters, so the answer is an expression instead of a single number."],
      [String.raw`Why is \(w=\tfrac{P-2l}{2}\) not \(P-l\)?`, String.raw`Dividing by \(2\) divides the whole side: \(\tfrac{P-2l}{2}=\tfrac P2-l\). Test: \(P=20\), \(l=6\): \(w=4\); but \(P-l=14\), which is wrong.`],
      ["Which form should I give as my final answer?", String.raw`Either equivalent form is correct, e.g. \(\tfrac{P-2l}{2}\) or \(\tfrac P2-l\). Choose the one easiest to use; check it by substituting numbers into both the original and your new formula.`],
      ["What if the variable I want appears twice?", String.raw`Collect the terms with that variable first (as in 2.5), then factor it out if needed. For example, \(ax+bx=c\) gives \(x(a+b)=c\), so \(x=\tfrac{c}{a+b}\).`],
      ["Why does this matter outside math class?", "Spreadsheets, calculators and computer programs need a formula with the unknown as the subject. Nurses rearrange dosage formulas, engineers rearrange stress formulas, and you rearranged one every time you worked out how long a trip takes."],
    ],
    summary: [
      "List the operations applied to the target variable, then undo them in reverse order on both sides.",
      "Divide or multiply every term on a side; keep grouping brackets.",
      "Standard form Ax + By = C can be rearranged to y = mx + b to read the slope and intercept.",
      "Rearrange once when the same unknown is needed many times; check with numbers.",
    ],
    next: "2.7 reviews the whole chapter with mixed problems before the chapter test.",
  }),
];
