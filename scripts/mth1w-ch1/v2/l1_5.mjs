// MTH1W 1.5 — Fractions: Multiplying, Dividing & Reciprocals (self-study format)
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, areaModel, tape, q, num, frac } from "./lib.mjs";

export const TITLE = "1.5 Fractions: Multiplying, Dividing & Reciprocals";

export const blocks = () => [
  intro({
    icon: "🧮",
    title: "Fractions: Multiplying, Dividing &amp; Reciprocals",
    overview: String.raw`Multiplying fractions answers questions like "what is \(\tfrac23\) of \(\tfrac34\) of a cup?" and dividing answers "how many \(\tfrac38\)-litre glasses fill a \(2\tfrac14\)-litre jug?". Surprisingly, these are <em>easier</em> than adding: no common denominator is needed. The key new idea is the <strong>reciprocal</strong> — the number you multiply by to get \(1\) — which turns every division into a multiplication.`,
    goals: [
      "multiply fractions and mixed numbers, simplifying before multiplying;",
      "use an area model to explain why you multiply numerators and denominators;",
      String.raw`find the reciprocal of a fraction, an integer, a mixed number or a decimal, and explain why \(0\) has none;`,
      "divide fractions by multiplying by the reciprocal, and explain division as \"how many fit\";",
      "apply the sign rules to products and quotients of negative fractions, and solve problems;",
      "calculate with any rational numbers — negative decimals, fractions and mixed numbers together — choosing the easier form and estimating first.",
    ],
    curriculum: "B3.3 (signs), B3.4 (operations with fractions and mixed numbers, formulas and measurement)",
    book: "Nelson Principles of Mathematics 9, §1.2 Multiplying and Dividing Mixed Numbers, §1.5 Rational Number Operations",
    prior: [
      [String.raw`Write \(3\tfrac{1}{2}\) as an improper fraction.`, String.raw`\(\tfrac{7}{2}\), because \(3\times2+1=7\).`],
      [String.raw`Simplify \(\tfrac{15}{40}\).`, String.raw`\(\tfrac{3}{8}\) (divide by \(5\)).`],
      [String.raw`What is the sign of \((-6)\div(-2)\)?`, "Positive: same signs."],
    ],
    words: [
      ["Product of fractions", "multiply numerators, multiply denominators", "\\(\\tfrac23\\times\\tfrac45=\\tfrac{8}{15}\\)"],
      ["\"of\"", "in fraction problems, \"of\" means multiply", "\\(\\tfrac12\\) of \\(10\\) is \\(5\\)"],
      ["Reciprocal", "the number whose product with the original is 1 (flip the fraction)", "reciprocal of \\(\\tfrac25\\) is \\(\\tfrac52\\)"],
      ["Cross-simplifying", "dividing a numerator and a different denominator by a common factor before multiplying", "\\(\\tfrac{4}{9}\\times\\tfrac{3}{8}\\to\\tfrac{1}{3}\\times\\tfrac{1}{2}\\)"],
      ["Complex fraction", "a fraction whose numerator or denominator contains a fraction", "\\(\\dfrac{\\ \\tfrac12\\ }{\\tfrac34}\\)"],
    ],
  }),

  section("📌 Multiplying fractions", String.raw`
  <p>\(\tfrac{2}{3}\times\tfrac{3}{4}\) means "\(\tfrac23\) of \(\tfrac34\)". Shade \(\tfrac23\) of a square one way and \(\tfrac34\) the other way. The overlap is \(2\times3=6\) small rectangles out of \(3\times4=12\):</p>
  ${areaModel({ a: 2, b: 3, c: 3, d: 4, caption: "Blue columns: 2/3. Yellow rows: 3/4. Green overlap: 6 of 12 = 1/2." })}
  ${keyIdea(String.raw`\(\dfrac{a}{b}\times\dfrac{c}{d}=\dfrac{a\times c}{b\times d}\). Multiply the numerators, multiply the denominators, then simplify. <strong>Mixed numbers must be changed to improper fractions first.</strong>`)}
  <p><strong>Simplify first.</strong> Before multiplying, divide any numerator and any denominator by a common factor. It gives the same answer with smaller numbers: \(\tfrac{10}{21}\times\tfrac{7}{15}=\tfrac{2}{3}\times\tfrac{1}{3}=\tfrac{2}{9}\) (divide \(10\) and \(15\) by \(5\); \(7\) and \(21\) by \(7\)).</p>
  <p>Use the explorer to build any product. Notice that multiplying by a fraction less than \(1\) makes the answer <em>smaller</em> than the number you started with.</p>`),

  widget("fractionMulDiv", { init: [3, 4, 1, 3] }),

  section("📌 Reciprocals", String.raw`
  <p>Two numbers are <strong>reciprocals</strong> if their product is \(1\). For a fraction, flip it: \(\tfrac{3}{5}\times\tfrac{5}{3}=1\).</p>
  ${table(["Number", "Write as a fraction", "Reciprocal", "Check"], [
    ["\\(\\tfrac{3}{5}\\)", "\\(\\tfrac{3}{5}\\)", "\\(\\tfrac{5}{3}\\)", "\\(\\tfrac35\\times\\tfrac53=1\\)"],
    ["\\(-6\\)", "\\(\\tfrac{-6}{1}\\)", "\\(-\\tfrac{1}{6}\\)", "\\((-6)\\left(-\\tfrac16\\right)=1\\)"],
    ["\\(1\\tfrac{1}{2}\\)", "\\(\\tfrac{3}{2}\\)", "\\(\\tfrac{2}{3}\\)", "\\(\\tfrac32\\times\\tfrac23=1\\)"],
    ["\\(0.4\\)", "\\(\\tfrac{2}{5}\\)", "\\(\\tfrac{5}{2}=2.5\\)", "\\(0.4\\times2.5=1\\)"],
    ["\\(0\\)", "—", "none", "\\(0\\times\\text{anything}=0\\), never \\(1\\)"],
  ])}
  <p>A reciprocal keeps the <strong>same sign</strong>: the reciprocal of a negative number is negative, because the product must be the positive number \(1\).</p>`),

  section("📌 Dividing fractions", String.raw`
  <p>\(2\div\tfrac{1}{3}\) asks "how many thirds fit into \(2\)?" Each whole holds \(3\) thirds, so \(2\) wholes hold \(6\): \(2\div\tfrac13=2\times3=6\). Dividing by \(\tfrac13\) is the same as multiplying by its reciprocal, \(3\).</p>
  ${tape([{ n: 3, label: "1 whole = 3 thirds", fill: "#dbeafe", stroke: "#1e40af" }, { n: 3, label: "1 whole = 3 thirds", fill: "#dcfce7", stroke: "#15803d" }], "2 ÷ 1/3 = 6: six thirds fit into 2.")}
  ${keyIdea(String.raw`\(\dfrac{a}{b}\div\dfrac{c}{d}=\dfrac{a}{b}\times\dfrac{d}{c}\). <strong>Keep</strong> the first fraction, <strong>change</strong> ÷ to ×, <strong>flip</strong> the divisor. Then multiply and simplify. The sign rules are the same as for integers.`)}
  <p>In the explorer, switch to <em>Divide</em> to watch the groups of the divisor being counted along the first fraction.</p>
  ${watchOut([
    String.raw`<strong>Flip the divisor, not the first fraction.</strong> \(\tfrac{3}{4}\div\tfrac{1}{2}=\tfrac34\times\tfrac21=\tfrac32\).`,
    String.raw`<strong>Change mixed numbers before flipping.</strong> The reciprocal of \(2\tfrac13=\tfrac73\) is \(\tfrac37\), not \(2\tfrac31\).`,
    String.raw`<strong>Dividing by a fraction less than 1 makes the answer bigger.</strong> If your answer to \(4\div\tfrac25\) is less than \(4\), something went wrong (it is \(10\)).`,
  ])}`),

  section("📌 All rational numbers: fractions and decimals together", String.raw`
  <p>Fractions, decimals, integers and mixed numbers are all <strong>rational numbers</strong>, so one set of rules covers them all: the <strong>integer sign rules</strong> (1.2, 1.3) and <strong>BEDMAS</strong>. Real problems mix forms — a price in decimals, a recipe in fractions, a temperature that is negative.</p>
  ${table(["Expression", "Sign first", "Then the size", "Answer"], [
    ["\\(-2.4\\times1.5\\)", "different signs → −", "\\(2.4\\times1.5=3.6\\)", "\\(-3.6\\)"],
    ["\\(-0.6\\div\\left(-\\tfrac34\\right)\\)", "same signs → +", "\\(0.6\\times\\tfrac43=0.8\\)", "\\(0.8\\)"],
    ["\\(-3.6-(-0.75)\\)", "add the opposite", "\\(-3.6+0.75\\)", "\\(-2.85\\)"],
  ])}
  <p><strong>Choose the easier form.</strong> If a fraction converts to a short decimal (\(\tfrac34=0.75\), \(\tfrac25=0.4\)), decimals are quick. If it does not (\(\tfrac13=0.333\ldots\)), change the decimal to a fraction instead: \(0.5\times\tfrac13=\tfrac12\times\tfrac13=\tfrac16\), which is exact.</p>
  ${keyIdea(String.raw`<strong>Estimate before calculating.</strong> For \(-2.4\times1.5\): about \(-2\times1.5=-3\), so an answer of \(-3.6\) is reasonable and \(36\) or \(+3.6\) is not.`)}
  <p>Example in context: a temperature of \(-4.5\,^\circ\)C drops by \(\tfrac23\) of a degree each hour for \(6\) hours: \(-4.5+6\times\left(-\tfrac23\right)=-4.5-4=-8.5\,^\circ\)C.</p>`),

  examples([
    ["Simplify, then multiply", String.raw`Evaluate \(\dfrac{4}{9}\times\dfrac{3}{10}\).`,
      [String.raw`Cross-simplify: \(4\) and \(10\) share \(2\); \(3\) and \(9\) share \(3\). This gives \(\tfrac{2}{3}\times\tfrac{1}{5}\).`, String.raw`Multiply: \(\tfrac{2\times1}{3\times5}=\tfrac{2}{15}\).`],
      String.raw`\(\tfrac{4}{9}\times\tfrac{3}{10}=\tfrac{2}{15}\)`],
    ["Negative mixed numbers", String.raw`Evaluate \(-2\tfrac{1}{2}\times1\tfrac{1}{5}\).`,
      [String.raw`Improper fractions: \(-\tfrac{5}{2}\times\tfrac{6}{5}\).`, String.raw`Different signs → negative. Simplify: \(\tfrac{5}{2}\times\tfrac{6}{5}=\tfrac{6}{2}=3\).`],
      String.raw`\(-2\tfrac12\times1\tfrac15=-3\)`],
    ["Finding reciprocals", String.raw`Find the reciprocal of (a) \(-\tfrac{4}{7}\), (b) \(3\tfrac{1}{3}\), (c) \(0.25\).`,
      [String.raw`(a) Flip and keep the sign: \(-\tfrac{7}{4}\).`, String.raw`(b) \(3\tfrac13=\tfrac{10}{3}\), so the reciprocal is \(\tfrac{3}{10}\).`, String.raw`(c) \(0.25=\tfrac14\), so the reciprocal is \(4\).`],
      String.raw`(a) \(-\tfrac74\); (b) \(\tfrac{3}{10}\); (c) \(4\)`],
    ["Dividing: how many fit?", String.raw`Evaluate \(\dfrac{5}{6}\div\dfrac{5}{12}\) and explain the answer.`,
      [String.raw`Multiply by the reciprocal: \(\tfrac{5}{6}\times\tfrac{12}{5}\).`, String.raw`Simplify: \(\tfrac{1}{1}\times\tfrac{2}{1}=2\).`, String.raw`Meaning: \(\tfrac{5}{6}=\tfrac{10}{12}\), and two pieces of \(\tfrac{5}{12}\) make \(\tfrac{10}{12}\).`],
      String.raw`\(\tfrac56\div\tfrac{5}{12}=2\)`],
    ["Baking problem", String.raw`A recipe uses \(\tfrac{5}{8}\) cup of flour per batch. How many batches can you make with \(3\tfrac{3}{4}\) cups?`,
      [String.raw`"How many fit" means divide: \(3\tfrac34\div\tfrac58\).`, String.raw`\(\tfrac{15}{4}\times\tfrac{8}{5}\).`, String.raw`Simplify: \(\tfrac{3}{1}\times\tfrac{2}{1}=6\).`],
      String.raw`you can make \(6\) batches`],
  ]),

  practice([
    q("multiply", String.raw`Evaluate \(\dfrac{5}{7}\times\dfrac{14}{15}\).`, frac(2, 3),
      String.raw`Cross-simplify \(5\) with \(15\) and \(14\) with \(7\).`, [String.raw`\(\tfrac{1}{1}\times\tfrac{2}{3}\).`, String.raw`\(=\tfrac{2}{3}\).`], String.raw`\(\tfrac{2}{3}\)`, { placeholder: "a fraction like 3/4" }),
    q("decimals and signs", String.raw`Evaluate \(-1.2\times2.5-(-0.4)\div0.8\).`, num(-2.5),
      "Multiply and divide first. Decide each sign before the size.", [String.raw`\(-1.2\times2.5=-3\).`, String.raw`\(-0.4\div0.8=-0.5\).`, String.raw`\(-3-(-0.5)=-3+0.5=-2.5\).`], String.raw`\(-2.5\)`),
    q("reciprocal", String.raw`What is the reciprocal of \(-1\tfrac{3}{5}\)?`, frac(-5, 8),
      "Change to an improper fraction first, then flip. Keep the sign.", [String.raw`\(-1\tfrac35=-\tfrac{8}{5}\).`, String.raw`Flip: \(-\tfrac{5}{8}\).`], String.raw`\(-\tfrac{5}{8}\)`, { placeholder: "e.g. -2/3" }),
    q("divide", String.raw`Evaluate \(2\tfrac{2}{5}\div\dfrac{3}{5}\).`, num(4),
      "Improper fraction, then multiply by the reciprocal of 3/5.", [String.raw`\(\tfrac{12}{5}\times\tfrac{5}{3}\).`, String.raw`\(=\tfrac{12}{3}=4\).`], String.raw`\(4\)`),
    q("jug problem", String.raw`A jug holds \(2\tfrac{1}{4}\) L. How many glasses of \(\tfrac{3}{8}\) L can it fill?`, num(6),
      String.raw`How many \(\tfrac38\)'s fit into \(2\tfrac14\)? Divide.`, [String.raw`\(\tfrac{9}{4}\div\tfrac{3}{8}=\tfrac{9}{4}\times\tfrac{8}{3}\).`, String.raw`\(=\tfrac{3}{1}\times\tfrac{2}{1}=6\).`], String.raw`\(6\) glasses`),
  ]),

  wrapUp({
    qas: [
      ["Why don't I need a common denominator to multiply?", "In the area model the grid creates its own denominator (rows × columns), so the pieces are automatically the same size."],
      ["Why does \"keep, change, flip\" work?", String.raw`Dividing by \(\tfrac{c}{d}\) asks how many \(\tfrac{c}{d}\)'s fit. One whole holds \(\tfrac{d}{c}\) of them, so the answer is the first number times \(\tfrac{d}{c}\).`],
      [String.raw`Does \(0\) have a reciprocal?`, String.raw`No. A reciprocal must multiply to \(1\), and \(0\) times any number is \(0\).`],
      ["Can I cross-simplify when adding?", String.raw`No — only when multiplying (or after a division has been changed to multiplication). For \(\tfrac{2}{3}+\tfrac{3}{4}\) you need the LCD.`],
      ["How do I know whether to multiply or divide in a word problem?", String.raw`"Part of" or "of" → multiply. "How many fit", "how many groups", "shared into pieces of size" → divide.`],
    ],
    summary: [
      String.raw`\(\tfrac{a}{b}\times\tfrac{c}{d}=\tfrac{ac}{bd}\): simplify first, change mixed numbers to improper fractions.`,
      String.raw`Reciprocals multiply to \(1\); they keep the sign; \(0\) has none.`,
      String.raw`\(\tfrac{a}{b}\div\tfrac{c}{d}=\tfrac{a}{b}\times\tfrac{d}{c}\).`,
      "Integer sign rules apply to fractions too.",
    ],
    next: "1.6 returns to powers: what a zero or negative exponent means.",
  }),
];
