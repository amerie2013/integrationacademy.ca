// MTH1W 1.4 — Fractions: Equivalence, Comparing, Adding & Subtracting (self-study format)
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, numberLine, fracBar, q, frac, choice } from "./lib.mjs";

export const TITLE = "1.4 Fractions: Equivalence, Comparing, Adding & Subtracting";

export const blocks = () => [
  intro({
    icon: "🍰",
    title: "Fractions: Equivalence, Comparing, Adding &amp; Subtracting",
    overview: String.raw`A fraction \(\tfrac{a}{b}\) means \(a\) parts of a whole cut into \(b\) equal parts. Fractions are rational numbers, so they can be negative too, and they appear everywhere: recipes, measurements in inches, sports statistics, probabilities. The single most important idea in this lesson is that <strong>you can only add or compare pieces of the same size</strong> — so you first rewrite the fractions with a common denominator. You will also work with mixed numbers and negative fractions.`,
    goals: [
      "write equivalent fractions and simplify a fraction to lowest terms using the GCF;",
      String.raw`explain why \(-\tfrac{3}{4}=\tfrac{-3}{4}=\tfrac{3}{-4}\);`,
      "compare and order fractions, including negative fractions, using a common denominator;",
      "add and subtract fractions with unlike denominators using the lowest common denominator (LCD);",
      "add and subtract mixed numbers and solve problems with them.",
    ],
    curriculum: "B3.2 (unit fractions), B3.3 (signs on fractions), B3.4 (operations with fractions and mixed numbers)",
    book: "Nelson Principles of Mathematics 9, §1.1 Adding and Subtracting Mixed Numbers, §1.4–1.5 Rational Numbers",
    prior: [
      [String.raw`What is the GCF of \(18\) and \(24\)?`, String.raw`\(6\) — the greatest number that divides both.`],
      [String.raw`What is the LCM of \(4\) and \(6\)?`, String.raw`\(12\) — the smallest number both divide into.`],
      [String.raw`Is \(\tfrac{1}{3}\) bigger or smaller than \(\tfrac{1}{4}\)?`, String.raw`Bigger. Cutting a whole into 3 pieces makes bigger pieces than cutting it into 4.`],
    ],
    words: [
      ["Numerator / denominator", "top number (how many parts) / bottom number (how many equal parts in a whole)", "in \\(\\tfrac{3}{8}\\): 3 and 8"],
      ["Equivalent fractions", "fractions with the same value", "\\(\\tfrac{2}{3}=\\tfrac{8}{12}\\)"],
      ["Lowest terms", "numerator and denominator have no common factor except 1", "\\(\\tfrac{18}{24}=\\tfrac{3}{4}\\)"],
      ["LCD", "lowest common denominator = LCM of the denominators", "LCD of \\(\\tfrac16,\\tfrac14\\) is \\(12\\)"],
      ["Mixed number / improper fraction", "a whole number with a fraction / a fraction bigger than 1 written over one denominator", "\\(2\\tfrac{1}{3}=\\tfrac{7}{3}\\)"],
    ],
  }),

  section("📌 Equivalent fractions and lowest terms", String.raw`
  <p>Multiplying or dividing the numerator <em>and</em> the denominator by the same non-zero number gives an <strong>equivalent fraction</strong> — the same amount, cut into a different number of pieces.</p>
  ${fracBar({ n: 2, d: 3, caption: "2/3 of a bar" })}
  ${fracBar({ n: 8, d: 12, caption: "8/12 of the same bar: every third is cut into 4, so 2 × 4 = 8 of 3 × 4 = 12 pieces" })}
  <p>To write a fraction in <strong>lowest terms</strong>, divide the numerator and denominator by their <strong>greatest common factor (GCF)</strong>: \(\tfrac{18}{24}=\tfrac{18\div6}{24\div6}=\tfrac{3}{4}\).</p>
  <p><strong>Negative fractions.</strong> A fraction is a division, and dividing integers with different signs gives a negative result, so \(\tfrac{-3}{4}=\tfrac{3}{-4}=-\tfrac{3}{4}\). Two negatives cancel: \(\tfrac{-3}{-4}=\tfrac{3}{4}\). Write the sign in front of the fraction.</p>`),

  section("📌 Comparing and ordering fractions", String.raw`
  <p>To compare fractions, rewrite them with a <strong>common denominator</strong> and compare the numerators. To compare \(\tfrac{5}{6}\) and \(\tfrac{7}{9}\): the LCD is \(18\), so \(\tfrac{15}{18}\) vs \(\tfrac{14}{18}\), and \(\tfrac{5}{6}\) is greater.</p>
  <p>For <strong>negative fractions</strong>, think about the number line: the number farther left is smaller. Since \(\tfrac{5}{6}>\tfrac{7}{9}\), their opposites flip: \(-\tfrac{5}{6}<-\tfrac{7}{9}\).</p>
  ${numberLine({ min: -1, max: 1, dots: [{ at: -0.8333, label: "−5/6", color: "red" }, { at: -0.7778, label: "", color: "amber" }, { at: 0.7778, label: "7/9", color: "amber" }, { at: 0.8333, label: "5/6", color: "blue" }], caption: "Opposites mirror each other across 0, so the order of negative fractions is reversed.", id: "nl41", unit: 260 })}
  <p>Quick estimates help too: compare each fraction to the <strong>benchmarks</strong> \(0\), \(\tfrac12\) and \(1\). \(\tfrac{3}{7}\) is less than \(\tfrac12\) and \(\tfrac{5}{9}\) is more, so \(\tfrac37<\tfrac59\) with no calculation.</p>`),

  section("📌 Adding and subtracting fractions", String.raw`
  ${keyIdea(String.raw`Add or subtract only pieces of the same size. <strong>(1)</strong> Rewrite both fractions with the LCD. <strong>(2)</strong> Add or subtract the numerators; keep the denominator. <strong>(3)</strong> Simplify, and write an improper answer as a mixed number if the question asks.`)}
  <p>The explorer shows why. The original bars have different-sized pieces; re-cutting both into the LCD makes the pieces match, and then the numerators simply add. Try \(\tfrac{1}{4}+\tfrac{5}{6}\) and switch to <em>Compare</em> and <em>Subtract</em>.</p>`),

  widget("fractionAddSub", { init: [2, 3, 1, 4] }),

  section("📌 Mixed numbers", String.raw`
  <p>Two reliable methods:</p>
  <ul>
    <li><strong>Improper fractions.</strong> Convert each mixed number (\(3\tfrac{2}{5}=\tfrac{3\times5+2}{5}=\tfrac{17}{5}\)), then add or subtract as usual. This always works, including with negatives.</li>
    <li><strong>Wholes and parts.</strong> Add the whole numbers and the fractions separately. When subtracting, you may need to <em>regroup</em> one whole as a fraction first: \(5\tfrac{1}{4}-2\tfrac{3}{4}=4\tfrac{5}{4}-2\tfrac{3}{4}=2\tfrac{2}{4}=2\tfrac12\).</li>
  </ul>
  ${watchOut([
    String.raw`<strong>Never add the denominators.</strong> \(\tfrac12+\tfrac13\neq\tfrac25\). Half a pizza plus a third of a pizza is more than half a pizza, but \(\tfrac25\) is less.`,
    String.raw`<strong>Convert mixed numbers correctly.</strong> \(2\tfrac34=\tfrac{2\times4+3}{4}=\tfrac{11}{4}\), not \(\tfrac{2\times3+4}{4}\).`,
    String.raw`<strong>The sign of a negative mixed number covers both parts.</strong> \(-1\tfrac12=-\left(1+\tfrac12\right)=-\tfrac32\), not \(-1+\tfrac12\).`,
  ])}`),

  examples([
    ["Lowest terms with the GCF", String.raw`Write \(\dfrac{84}{126}\) in lowest terms.`,
      [String.raw`Factors: \(84=2^2\times3\times7\) and \(126=2\times3^2\times7\).`, String.raw`GCF \(=2\times3\times7=42\).`, String.raw`\(\tfrac{84\div42}{126\div42}=\tfrac{2}{3}\).`],
      String.raw`\(\tfrac{84}{126}=\tfrac{2}{3}\)`],
    ["Comparing negative fractions", String.raw`Which is greater, \(-\dfrac{2}{3}\) or \(-\dfrac{5}{8}\)?`,
      [String.raw`LCD of \(3\) and \(8\) is \(24\): \(-\tfrac{2}{3}=-\tfrac{16}{24}\) and \(-\tfrac{5}{8}=-\tfrac{15}{24}\).`, String.raw`\(-15\) is to the right of \(-16\) on a number line, so \(-\tfrac{15}{24}>-\tfrac{16}{24}\).`],
      String.raw`\(-\tfrac{5}{8}>-\tfrac{2}{3}\)`,
      numberLine({ min: -1, max: 0, dots: [{ at: -0.6667, label: "−2/3", color: "red" }, { at: -0.625, label: "−5/8", color: "green" }], caption: "−5/8 is closer to 0, so it is the greater number.", id: "nl42", unit: 480 })],
    ["Adding with the LCD", String.raw`Evaluate \(\dfrac{3}{4}+\dfrac{5}{6}\).`,
      [String.raw`LCD of \(4\) and \(6\) is \(12\): \(\tfrac{3}{4}=\tfrac{9}{12}\), \(\tfrac{5}{6}=\tfrac{10}{12}\).`, String.raw`Add the numerators: \(\tfrac{9+10}{12}=\tfrac{19}{12}\).`, String.raw`As a mixed number: \(\tfrac{19}{12}=1\tfrac{7}{12}\).`],
      String.raw`\(\tfrac{3}{4}+\tfrac{5}{6}=\tfrac{19}{12}=1\tfrac{7}{12}\)`],
    ["Subtracting with a negative", String.raw`Evaluate \(-\dfrac{1}{2}-\dfrac{3}{5}\).`,
      [String.raw`LCD is \(10\): \(-\tfrac{5}{10}-\tfrac{6}{10}\).`, String.raw`Add the opposite: \(-\tfrac{5}{10}+\left(-\tfrac{6}{10}\right)=-\tfrac{11}{10}\) (same signs, so add the sizes and keep the sign).`],
      String.raw`\(-\tfrac{1}{2}-\tfrac{3}{5}=-\tfrac{11}{10}=-1\tfrac{1}{10}\)`],
    ["Mixed numbers in a problem", String.raw`A board is \(4\tfrac{1}{3}\) m long. A piece \(1\tfrac{3}{4}\) m long is cut off. How long is the remaining piece?`,
      [String.raw`Improper fractions: \(4\tfrac13=\tfrac{13}{3}\) and \(1\tfrac34=\tfrac{7}{4}\).`, String.raw`LCD \(12\): \(\tfrac{52}{12}-\tfrac{21}{12}=\tfrac{31}{12}\).`, String.raw`\(\tfrac{31}{12}=2\tfrac{7}{12}\).`, String.raw`Estimate: \(4.3-1.8\approx2.5\) ✓`],
      String.raw`the remaining piece is \(2\tfrac{7}{12}\) m long`],
  ]),

  practice([
    q("lowest terms", String.raw`Write \(\dfrac{60}{84}\) in lowest terms.`, frac(5, 7),
      String.raw`Find the GCF of \(60\) and \(84\).`, [String.raw`The GCF of \(60\) and \(84\) is \(12\).`, String.raw`\(\tfrac{60\div12}{84\div12}=\tfrac{5}{7}\).`], String.raw`\(\tfrac{5}{7}\)`, { placeholder: "a fraction like 3/4" }),
    q("compare", String.raw`Which is greater?`, choice([String.raw`\(\tfrac{4}{7}\)`, String.raw`\(\tfrac{5}{9}\)`, "They are equal"], 0),
      String.raw`Rewrite both with denominator \(63\).`, [String.raw`\(\tfrac47=\tfrac{36}{63}\) and \(\tfrac59=\tfrac{35}{63}\).`, String.raw`\(36>35\).`], String.raw`\(\tfrac{4}{7}\)`),
    q("add", String.raw`Evaluate \(\dfrac{2}{5}+\dfrac{1}{3}\).`, frac(11, 15),
      String.raw`The LCD of \(5\) and \(3\) is \(15\).`, [String.raw`\(\tfrac{6}{15}+\tfrac{5}{15}\).`, String.raw`\(=\tfrac{11}{15}\).`], String.raw`\(\tfrac{11}{15}\)`, { placeholder: "a fraction like 3/4" }),
    q("subtract to a negative", String.raw`Evaluate \(\dfrac{5}{6}-\dfrac{7}{8}\).`, frac(-1, 24),
      String.raw`The LCD of \(6\) and \(8\) is \(24\). Which fraction is bigger?`, [String.raw`\(\tfrac{20}{24}-\tfrac{21}{24}\).`, String.raw`\(=-\tfrac{1}{24}\).`], String.raw`\(-\tfrac{1}{24}\)`, { placeholder: "e.g. -1/6" }),
    q("mixed numbers", String.raw`Evaluate \(2\tfrac{1}{4}+1\tfrac{5}{6}\). Give a mixed number or an improper fraction.`, frac(49, 12),
      String.raw`Convert to improper fractions, then use the LCD \(12\).`,
      [String.raw`\(\tfrac{9}{4}+\tfrac{11}{6}\).`, String.raw`\(\tfrac{27}{12}+\tfrac{22}{12}=\tfrac{49}{12}\).`, String.raw`\(\tfrac{49}{12}=4\tfrac{1}{12}\).`], String.raw`\(4\tfrac{1}{12}\) \(\left(=\tfrac{49}{12}\right)\)`, { placeholder: "e.g. 3 1/2 or 7/2" }),
  ]),

  wrapUp({
    qas: [
      ["Why do I need a common denominator to add, but not to multiply?", String.raw`Adding combines pieces, so the pieces must be the same size. Multiplying finds a part of a part — the area model in 1.5 makes its own denominator.`],
      ["Must I use the lowest common denominator?", String.raw`Any common denominator works (the product of the denominators always does), but the LCD keeps the numbers small and means less simplifying at the end.`],
      [String.raw`Where does the negative sign go in \(-\tfrac{3}{4}\)?`, String.raw`Anywhere — \(\tfrac{-3}{4}\), \(\tfrac{3}{-4}\) and \(-\tfrac34\) are equal. Writing it in front is the convention.`],
      ["How do I compare two negative fractions?", String.raw`Compare their sizes first. The one with the larger size is farther from \(0\) on the left, so it is the smaller number.`],
      ["Should my answer be a mixed number or an improper fraction?", "Both are correct. Mixed numbers are easier to picture in measurement problems; improper fractions are easier to keep calculating with."],
    ],
    summary: [
      "Multiply or divide top and bottom by the same number to get an equivalent fraction; divide by the GCF for lowest terms.",
      String.raw`\(\tfrac{-a}{b}=\tfrac{a}{-b}=-\tfrac{a}{b}\).`,
      "Compare, add and subtract with a common denominator (LCD); never add denominators.",
      "Convert mixed numbers to improper fractions, or add wholes and parts separately and regroup when needed.",
    ],
    next: "1.5 multiplies and divides fractions and introduces the reciprocal.",
  }),
];
