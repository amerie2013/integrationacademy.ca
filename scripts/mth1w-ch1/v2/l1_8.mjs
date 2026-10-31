// MTH1W 1.8 — Working with Ratios and Proportions (self-study format)
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, tape, q, num, ratio, hard, fig } from "./lib.mjs";
import { rectangle } from "./bank/svg.mjs";

export const TITLE = "1.8 Working with Ratios and Proportions";

export const blocks = () => [
  intro({
    icon: "⚖️",
    title: "Working with Ratios and Proportions",
    overview: String.raw`A <strong>ratio</strong> compares two or more quantities measured in the same unit: \(3\) cups of flour to \(2\) cups of sugar, \(14\) girls to \(16\) boys. When two ratios are equal, the equation is a <strong>proportion</strong>, and proportions solve a huge range of problems — scaling a recipe, reading a map, mixing paint, sharing a prize fairly. In this lesson you will write and simplify ratios, recognise equivalent ratios, solve proportions, and divide a quantity in a given ratio.`,
    goals: [
      String.raw`write a ratio in the forms \(a:b\), \(a\) to \(b\) and \(\tfrac{a}{b}\), as part-to-part or part-to-whole;`,
      "simplify ratios, including three-term ratios and ratios of decimals or fractions;",
      "find equivalent ratios using a scale factor, a ratio table or a double number line;",
      "solve proportions using a scale factor or cross-multiplication;",
      "share a quantity in a given ratio and solve scale-drawing problems.",
    ],
    curriculum: "B3.5 (rates, percentages and proportions in various contexts)",
    prior: [
      [String.raw`Simplify \(\tfrac{12}{18}\).`, String.raw`\(\tfrac23\) (divide by \(6\)).`],
      [String.raw`What is \(\tfrac35\) of \(40\)?`, String.raw`\(24\).`],
      [String.raw`How many centimetres are in \(2.5\) m?`, String.raw`\(250\) cm.`],
    ],
    words: [
      ["Ratio", "a comparison of quantities in the same unit", "\\(3:2\\)"],
      ["Terms", "the numbers in a ratio", "in \\(3:2\\), the terms are \\(3\\) and \\(2\\)"],
      ["Part-to-part / part-to-whole", "compares two parts / compares a part with the total", "girls : boys vs girls : students"],
      ["Equivalent ratios", "ratios that make the same comparison", "\\(2:3=10:15\\)"],
      ["Proportion", "an equation stating two ratios are equal", "\\(\\tfrac{x}{12}=\\tfrac{3}{4}\\)"],
    ],
  }),

  section("📌 Writing and simplifying ratios", String.raw`
  <p>The <strong>order matters</strong>: "red to blue" is \(4:6\), but "blue to red" is \(6:4\). The quantities must be in the same unit — convert first (\(50\) cm to \(2\) m is \(50:200=1:4\)).</p>
  <p>Simplify a ratio like a fraction: divide every term by the GCF. \(18:24:30=3:4:5\) (divide by \(6\)). For decimals or fractions, first multiply every term to make whole numbers: \(1.5:0.6=15:6=5:2\).</p>
  ${keyIdea(String.raw`Multiplying or dividing <strong>every term</strong> of a ratio by the same non-zero number gives an <strong>equivalent ratio</strong>. That number is the <strong>scale factor</strong>.`)}`),

  section("📌 Equivalent ratios: tables and double number lines", String.raw`
  <p>A juice is mixed \(2\) parts concentrate to \(3\) parts water. Making \(3\) batches uses \(6\) parts to \(9\) parts, which is the same taste. A <strong>ratio table</strong> and a <strong>double number line</strong> organise this scaling:</p>
  ${table(["Batches", "1", "2", "3", "4", "5"], [["concentrate (cups)", "2", "4", "6", "8", "10"], ["water (cups)", "3", "6", "9", "12", "15"]])}
  <p>Use the explorer to change the ratio and the scale factor. The dashed green line on the double number line always joins matching amounts.</p>`),

  widget("ratioScale", { initA: 2, initB: 3, labels: ["juice", "water"] }),

  section("📌 Solving proportions and sharing in a ratio", String.raw`
  <p><strong>Solving a proportion.</strong> To solve \(\tfrac{x}{12}=\tfrac{3}{4}\):</p>
  <ul>
    <li><em>Scale factor:</em> \(4\times3=12\), so \(x=3\times3=9\).</li>
    <li><em>Cross-multiplying:</em> if \(\tfrac{a}{b}=\tfrac{c}{d}\) then \(ad=bc\). Here \(4x=36\), so \(x=9\). This works even when the scale factor is not a whole number.</li>
  </ul>
  <p><strong>Sharing in a ratio.</strong> To share an amount in the ratio \(a:b\), find the total number of parts \(a+b\), find the value of one part, then multiply.</p>
  ${tape([{ n: 3, label: "Sam: 3 parts", fill: "#dbeafe", stroke: "#1e40af" }, { n: 5, label: "Ria: 5 parts", fill: "#fef3c7", stroke: "#b45309" }], "Sharing 80 dollars in the ratio 3 : 5 → 8 parts, so 1 part = 10 dollars: Sam 30, Ria 50.")}
  ${watchOut([
    String.raw`<strong>Keep the order consistent.</strong> If the ratio is boys : girls, put boys on top in <em>both</em> fractions of the proportion.`,
    String.raw`<strong>Add, don't subtract, for the total.</strong> In a \(3:5\) share, there are \(3+5=8\) parts, not \(5-3\).`,
    String.raw`<strong>Ratios are not differences.</strong> \(2:3\) and \(5:6\) both differ by \(1\), but they are not equivalent (\(\tfrac23\neq\tfrac56\)).`,
  ])}`),

  examples([
    ["Part-to-part and part-to-whole", String.raw`A class has \(14\) girls and \(16\) boys. Write, in simplest form, the ratio of (a) girls to boys and (b) girls to all students.`,
      [String.raw`(a) \(14:16\); divide by \(2\): \(7:8\).`, String.raw`(b) Total \(=14+16=30\). \(14:30\); divide by \(2\): \(7:15\).`],
      String.raw`(a) \(7:8\); (b) \(7:15\)`],
    ["Ratios with decimals and fractions", String.raw`Simplify (a) \(2.5:1.5\) and (b) \(\tfrac{2}{3}:\tfrac{5}{6}\).`,
      [String.raw`(a) Multiply by \(10\): \(25:15\); divide by \(5\): \(5:3\).`, String.raw`(b) Multiply both terms by the LCD \(6\): \(4:5\).`],
      String.raw`(a) \(5:3\); (b) \(4:5\)`],
    ["Solving a proportion", String.raw`Solve \(\dfrac{x}{12}=\dfrac{15}{20}\).`,
      [String.raw`Simplify the known ratio first: \(\tfrac{15}{20}=\tfrac34\).`, String.raw`Cross-multiply: \(4x=3\times12=36\).`, String.raw`\(x=9\). Check: \(\tfrac{9}{12}=\tfrac34\) ✓`],
      String.raw`\(x=9\)`],
    ["A three-part share", String.raw`\(450\) g of trail mix is made of nuts, raisins and seeds in the ratio \(2:3:4\). How many grams of each?`,
      [String.raw`Total parts: \(2+3+4=9\).`, String.raw`One part: \(450\div9=50\) g.`, String.raw`Nuts \(2\times50=100\) g, raisins \(3\times50=150\) g, seeds \(4\times50=200\) g.`, String.raw`Check: \(100+150+200=450\) ✓`],
      String.raw`\(100\) g nuts, \(150\) g raisins, \(200\) g seeds`],
    ["Scale drawing", String.raw`A floor plan uses the scale \(1\text{ cm}:2.5\text{ m}\). A room is \(5.2\) cm long on the plan. How long is the real room?`,
      [String.raw`Proportion: \(\tfrac{1}{2.5}=\tfrac{5.2}{x}\) (plan over real in both).`, String.raw`Cross-multiply: \(x=2.5\times5.2\).`, String.raw`\(x=13\).`],
      String.raw`the real room is \(13\) m long`],
  ]),

  practice([
    q("simplify", String.raw`Write \(36:48\) in simplest form. Type it like <em>2:5</em>.`, ratio(3, 4),
      String.raw`Divide both terms by their GCF.`, [String.raw`GCF is \(12\).`, String.raw`\(36\div12:48\div12=3:4\).`], String.raw`\(3:4\)`, { placeholder: "e.g. 2:5" }),
    q("solve a proportion", String.raw`Solve \(6:x=9:15\).`, num(10),
      String.raw`Write it as \(\tfrac{6}{x}=\tfrac{9}{15}\) and cross-multiply.`, [String.raw`\(9x=6\times15=90\).`, String.raw`\(x=10\).`], String.raw`\(x=10\)`),
    q("part-to-whole", String.raw`A bag has \(8\) red marbles and \(12\) blue marbles. Write the ratio of red marbles to <strong>all</strong> marbles in simplest form.`, ratio(2, 5),
      "Find the total first.", [String.raw`Total \(=8+12=20\).`, String.raw`\(8:20=2:5\).`], String.raw`\(2:5\)`, { placeholder: "e.g. 1:3" }),
    q("share", String.raw`Share \(240\) dollars in the ratio \(3:5\). How much is the <strong>larger</strong> share (in dollars)?`, num(150),
      "Total parts, then the value of one part.", [String.raw`\(3+5=8\) parts; one part \(=240\div8=30\).`, String.raw`Larger share \(=5\times30=150\).`], String.raw`\(150\) dollars`),
    q("recipe", String.raw`Rice is cooked with \(2\) cups of rice to \(3\) cups of water. How many cups of water are needed for \(5\) cups of rice?`, num(7.5),
      String.raw`Set up \(\tfrac{2}{3}=\tfrac{5}{w}\).`, [String.raw`\(2w=15\).`, String.raw`\(w=7.5\).`], String.raw`\(7.5\) cups`),
  ]),

  ...hard([
    ["When a ratio changes", String.raw`A club has juniors and seniors in the ratio \(5:3\). After \(8\) juniors leave and \(4\) seniors join, the numbers are equal. How many members were there at first?`,
      [String.raw`Let there be \(5k\) juniors and \(3k\) seniors.`,
        String.raw`After the changes the numbers are equal: \(5k-8=3k+4\).`,
        String.raw`Subtract \(3k\) from both sides and add \(8\): \(2k=12\), so \(k=6\).`,
        String.raw`At first there were \(30\) juniors and \(18\) seniors, which is \(48\) members. Check: \(22=22\).`],
      String.raw`there were \(48\) members at first`],
    ["Linking two ratios", String.raw`\(A:B=3:4\) and \(B:C=6:5\). If \(A+B+C=310\), find each number.`,
      [String.raw`\(B\) has different values in the two ratios. The least common multiple of \(4\) and \(6\) is \(12\).`,
        String.raw`Scale: \(A:B=9:12\) and \(B:C=12:10\), so \(A:B:C=9:12:10\).`,
        String.raw`There are \(9+12+10=31\) parts, and one part is \(310\div31=10\).`,
        String.raw`\(A=90\), \(B=120\), \(C=100\).`],
      String.raw`\(A=90\), \(B=120\) and \(C=100\)`],
    ["Removing a mixture", String.raw`A \(12\) L jug holds juice and water in the ratio \(3:1\). You pour out \(4\) L of the mixture and refill the jug with water. What is the new ratio?`,
      [String.raw`At first there are \(9\) L of juice and \(3\) L of water.`,
        String.raw`The \(4\) L poured out has the same \(3:1\) ratio, so it holds \(3\) L of juice and \(1\) L of water.`,
        String.raw`What is left: \(6\) L of juice and \(2\) L of water.`,
        String.raw`Add \(4\) L of water: \(6\) L of juice and \(6\) L of water.`],
      String.raw`the new ratio is \(1:1\)`],
    ["Scale and area", String.raw`A floor plan has a scale of \(1:50\). A room is \(24\) cm by \(18\) cm on the plan. Find its real area, and compare the area on the plan with the real area.`,
      [String.raw`Real length: \(24\times50=1200\) cm \(=12\) m. Real width: \(18\times50=900\) cm \(=9\) m.`,
        String.raw`Real area: \(12\times9=108\) m².`,
        String.raw`Area on the plan: \(24\times18=432\) cm². Real area in the same unit: \(1200\times900=1\,080\,000\) cm².`,
        String.raw`\(1\,080\,000\div432=2500=50^2\). Lengths scale by \(50\), but areas scale by \(50^2\).`],
      String.raw`the room is \(108\) m², and the area ratio is \(1:2500\)`,
      fig(rectangle("24 cm", "18 cm"), "The room on the plan, at a scale of 1 : 50.")],
  ], [
    q("changing ratio", String.raw`Boys and girls in a group are in the ratio \(5:7\). After \(6\) boys join and \(2\) girls leave, the numbers are equal. How many people were in the group at first?`, num(48),
      "Write the group as 5k and 7k, then set the new numbers equal.",
      [String.raw`\(5k+6=7k-2\), so \(2k=8\) and \(k=4\).`, String.raw`At first: \(20\) boys and \(28\) girls, which is \(48\).`], String.raw`\(48\)`),
    q("linking ratios", String.raw`\(A:B=2:5\) and \(B:C=3:4\). Write \(A:C\) in simplest form.`, ratio(3, 10),
      "Make B the same number in both ratios.",
      [String.raw`Scale: \(A:B=6:15\) and \(B:C=15:20\).`, String.raw`\(A:C=6:20=3:10\).`], String.raw`\(3:10\)`),
    q("mixture", String.raw`A \(20\) L can of paint is red and white in the ratio \(3:2\). How many litres of red must be added to make the ratio \(2:1\)?`, num(4),
      "The amount of white does not change.",
      [String.raw`At first: \(12\) L of red and \(8\) L of white.`, String.raw`For \(2:1\) with \(8\) L of white, red must be \(16\) L.`, String.raw`Add \(16-12=4\) L.`], String.raw`\(4\)`),
    q("area scale", String.raw`A plan has a scale of \(1:200\). A park covers \(30\) cm² on the plan. What is its real area, in m²?`, num(120),
      "Areas scale by the square of the length scale. Remember that 1 m² is 10 000 cm².",
      [String.raw`Area scale: \(200^2=40\,000\).`, String.raw`\(30\times40\,000=1\,200\,000\) cm².`, String.raw`\(1\,200\,000\div10\,000=120\) m².`], String.raw`\(120\)`),
    q("fractional ratio", String.raw`Share \(390\) dollars in the ratio \(\tfrac12:\tfrac13:\tfrac14\). How many dollars is the smallest share?`, num(90),
      "Multiply all the terms by 12 to get whole numbers.",
      [String.raw`Multiply by \(12\): \(6:4:3\), which is \(13\) parts.`, String.raw`One part is \(390\div13=30\).`, String.raw`The smallest share is \(3\times30=90\).`], String.raw`\(90\)`),
  ]),

  wrapUp({
    qas: [
      ["What is the difference between a ratio and a fraction?", String.raw`A fraction compares a part with a whole. A ratio can compare a part with a whole <em>or</em> two parts — \(3:5\) (part to part) is not "three fifths" of anything; the parts make \(8\) in total.`],
      ["Can a ratio have more than two terms?", String.raw`Yes, for example \(2:3:4\). Simplify by dividing every term by the same number.`],
      ["Do ratios have units?", String.raw`No — the units cancel, which is why both quantities must use the <em>same</em> unit before you write the ratio.`],
      ["When should I cross-multiply instead of using a scale factor?", "Use the scale factor when it is a whole number you can see. Cross-multiplying always works, especially with decimals."],
      ["How do I check a proportion answer?", String.raw`Put your answer back in and simplify both ratios — they should be equal. Also check it makes sense: more rice must need more water.`],
    ],
    summary: [
      "Ratios compare quantities in the same unit; order matters.",
      "Simplify by dividing every term by the GCF; clear decimals and fractions first.",
      String.raw`A proportion \(\tfrac ab=\tfrac cd\) can be solved with a scale factor or by cross-multiplying (\(ad=bc\)).`,
      "To share in a ratio: total parts → value of one part → multiply.",
    ],
    next: "1.9 compares quantities with different units (rates) and works with percentages.",
  }),
];
