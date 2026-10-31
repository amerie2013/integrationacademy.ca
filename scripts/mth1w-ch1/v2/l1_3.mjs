// MTH1W 1.3 — Multiplying & Dividing Integers (self-study format)
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, numberLine, q, num, hard, fig } from "./lib.mjs";
import { graph } from "./bank/svg.mjs";

export const TITLE = "1.3 Multiplying & Dividing Integers";

export const blocks = () => [
  intro({
    icon: "✖️",
    title: "Multiplying &amp; Dividing Integers",
    overview: String.raw`Multiplication is repeated addition, and that one idea explains every sign rule for integers — including the famous "negative times negative is positive". In this lesson you will see the rules on a number line and in a pattern, use them to multiply and divide, and then combine all four operations in the correct <strong>order of operations</strong>, including brackets and powers. These skills are used every time you substitute a negative number into a formula.`,
    goals: [
      "multiply and divide two integers and state the sign of the answer before calculating;",
      "explain the sign rules using repeated jumps and number patterns;",
      "find the sign of a product of many factors by counting the negative factors;",
      String.raw`explain why division by \(0\) is undefined;`,
      "evaluate integer expressions with brackets, powers and all four operations, and substitute integers into formulas.",
    ],
    curriculum: "B3.1, B3.3 (effect of signs); B3.4 (formulas)",
    prior: [
      [String.raw`Evaluate \(-3+(-3)+(-3)+(-3)\).`, String.raw`\(-12\). Four groups of \(-3\).`],
      [String.raw`What is \(7\times8\)? \(56\div7\)?`, String.raw`\(56\) and \(8\). Division undoes multiplication.`],
      [String.raw`In \(2+3\times4\), which operation comes first?`, String.raw`Multiplication: \(2+12=14\).`],
    ],
    words: [
      ["Product", "the result of multiplying", "product of \\(-3\\) and \\(4\\) is \\(-12\\)"],
      ["Quotient", "the result of dividing", "\\(-20\\div5=-4\\)"],
      ["Factor", "a number being multiplied", "in \\((-2)(7)\\), the factors are \\(-2\\) and \\(7\\)"],
      ["Undefined", "has no value — no number works", "\\(8\\div0\\)"],
      ["Order of operations", "the agreed order: Brackets, Exponents, Division and Multiplication (left to right), Addition and Subtraction (left to right)", "BEDMAS"],
    ],
  }),

  section("📌 The sign rules", String.raw`
  <p>\(3\times(-4)\) means three jumps of \(-4\): \((-4)+(-4)+(-4)=-12\). Each jump goes left, so the product is negative.</p>
  ${numberLine({ min: -13, max: 1, arrows: [{ from: 0, to: -4, label: "−4", color: "red", lane: 0 }, { from: -4, to: -8, label: "−4", color: "red", lane: 1 }, { from: -8, to: -12, label: "−4", color: "red", lane: 0 }], dots: [{ at: -12, label: "−12", color: "green" }], caption: "3 × (−4): three jumps of −4 land on −12.", id: "nl31", unit: 30 })}
  <p>A negative multiplier means "the opposite of": \(-3\times(-4)\) is the opposite of \(3\times(-4)\), so it is the opposite of \(-12\), which is \(+12\).</p>
  ${keyIdea(String.raw`When multiplying or dividing two integers: <strong>same signs → positive</strong>, <strong>different signs → negative</strong>. The size of the answer is the product (or quotient) of the absolute values.`)}
  ${table(["", "positive", "negative"], [["<strong>positive</strong>", "\\((+)(+)=+\\)", "\\((+)(-)=-\\)"], ["<strong>negative</strong>", "\\((-)(+)=-\\)", "\\((-)(-)=+\\)"]])}
  <p>The explorer shows the rules three ways: as jumps, as a pattern table that has to keep going past zero, and as a division check. Try \(a=-3\), \(b=-4\) in every mode.</p>`),

  widget("signRules", { initA: 3, initB: -4 }),

  section("📌 Many factors, division and zero", String.raw`
  <p><strong>Many factors.</strong> Negative factors cancel in pairs. Count them:</p>
  <ul><li>an <strong>even</strong> number of negative factors → positive product;</li><li>an <strong>odd</strong> number of negative factors → negative product.</li></ul>
  <p>So \((-1)(-1)(-1)=-1\), but \((-1)(-1)(-1)(-1)=1\).</p>
  <p><strong>Division</strong> undoes multiplication, so it follows the same sign rules. You can always check a quotient by multiplying back: \(-35\div7=-5\) because \(-5\times7=-35\).</p>
  <p><strong>Zero.</strong> \(0\div6=0\), because \(0\times6=0\). But \(6\div0\) is <strong>undefined</strong>: no number times \(0\) gives \(6\).</p>`),

  section("📌 Order of operations with integers", String.raw`
  <p>Expressions with several operations follow <strong>BEDMAS</strong>:</p>
  <ol>
    <li><strong>B</strong>rackets first (innermost first).</li>
    <li><strong>E</strong>xponents (powers).</li>
    <li><strong>D</strong>ivision and <strong>M</strong>ultiplication, in order from left to right.</li>
    <li><strong>A</strong>ddition and <strong>S</strong>ubtraction, in order from left to right.</li>
  </ol>
  <p><strong>Brackets around a negative base matter.</strong> \((-5)^2=(-5)(-5)=25\), but \(-5^2\) means \(-(5^2)=-25\): the exponent applies only to the \(5\).</p>
  <p><strong>Substitution.</strong> When you replace a variable by a negative number, put the number in brackets: if \(x=-2\), then \(3x^2=3(-2)^2=3(4)=12\).</p>
  ${watchOut([
    String.raw`<strong>Don't mix up the rules.</strong> For adding, \((-4)+(-5)=-9\). For multiplying, \((-4)(-5)=20\).`,
    String.raw`<strong>Division and multiplication are a tie.</strong> Do them left to right: \(24\div(-4)\times2=(-6)\times2=-12\), not \(24\div(-8)\).`,
    String.raw`<strong>Always bracket a substituted negative.</strong> With \(x=-3\), \(x^2=(-3)^2=9\), not \(-9\).`,
  ])}`),

  examples([
    ["The sign rules", String.raw`Evaluate (a) \((-5)(-8)\) and (b) \((-5)(8)\).`,
      [String.raw`Sizes: \(5\times8=40\).`, String.raw`(a) Same signs, so positive: \(40\).`, String.raw`(b) Different signs, so negative: \(-40\).`],
      String.raw`(a) \(40\); (b) \(-40\)`],
    ["Counting negative factors", String.raw`Evaluate \((-2)(3)(-1)(-4)\).`,
      [String.raw`Three factors are negative — an odd number — so the product is negative.`, String.raw`Sizes: \(2\times3\times1\times4=24\).`],
      String.raw`\((-2)(3)(-1)(-4)=-24\)`],
    ["Division and checking", String.raw`Evaluate (a) \(-72\div(-9)\) and (b) \(56\div(-7)\). Check each by multiplying.`,
      [String.raw`(a) Same signs → positive: \(72\div9=8\). Check: \(8\times(-9)=-72\) ✓`, String.raw`(b) Different signs → negative: \(56\div7=8\), so \(-8\). Check: \(-8\times(-7)=56\) ✓`],
      String.raw`(a) \(8\); (b) \(-8\)`],
    ["Order of operations", String.raw`Evaluate \((-4)^2-3(-6+2)\div(-2)\).`,
      [String.raw`Brackets: \(-6+2=-4\). The expression is \((-4)^2-3(-4)\div(-2)\).`, String.raw`Exponent: \((-4)^2=16\).`, String.raw`Multiply and divide left to right: \(3(-4)=-12\), then \(-12\div(-2)=6\).`, String.raw`Subtract: \(16-6=10\).`],
      String.raw`\((-4)^2-3(-6+2)\div(-2)=10\)`],
    ["Substituting negatives", String.raw`Evaluate \(2a^2-3ab\) when \(a=-2\) and \(b=5\).`,
      [String.raw`Substitute with brackets: \(2(-2)^2-3(-2)(5)\).`, String.raw`Exponent first: \((-2)^2=4\), so \(2(4)=8\).`, String.raw`Product: \(3(-2)(5)=-30\).`, String.raw`\(8-(-30)=8+30=38\).`],
      String.raw`\(2a^2-3ab=38\)`],
  ]),

  practice([
    q("two negatives", String.raw`Evaluate \((-7)(-9)\).`, num(63),
      "Same signs give a positive product.", [String.raw`\(7\times9=63\).`, "Same signs, so positive."], String.raw`\(63\)`),
    q("division", String.raw`Evaluate \(-84\div12\).`, num(-7),
      "Different signs give a negative quotient.", [String.raw`\(84\div12=7\).`, "Different signs, so negative."], String.raw`\(-7\)`),
    q("three factors", String.raw`Evaluate \((-3)(-2)(-5)\).`, num(-30),
      "Count the negative factors: odd or even?", [String.raw`Three negative factors (odd) → negative.`, String.raw`\(3\times2\times5=30\).`], String.raw`\(-30\)`),
    q("order of operations", String.raw`Evaluate \(-2+6(-3)-(-10)\div5\).`, num(-18),
      "Do the multiplication and division before the addition and subtraction.",
      [String.raw`\(6(-3)=-18\) and \((-10)\div5=-2\).`, String.raw`\(-2+(-18)-(-2)=-2-18+2\).`, String.raw`\(=-18\).`], String.raw`\(-18\)`),
    q("substitution", String.raw`Evaluate \(3m-m^2\) when \(m=-4\).`, num(-28),
      String.raw`Bracket the negative: \(3(-4)-(-4)^2\).`,
      [String.raw`\(3(-4)=-12\).`, String.raw`\((-4)^2=16\).`, String.raw`\(-12-16=-28\).`], String.raw`\(-28\)`),
  ]),

  ...hard([
    ["Brackets, powers and signs together", String.raw`Evaluate \(\left[(-4)^3-(-2)^4\right]\div\left[(-5)(-2)-(-6)\right]\).`,
      [String.raw`Evaluate the powers in the first bracket: \((-4)^3=-64\) and \((-2)^4=16\).`,
        String.raw`First bracket: \(-64-16=-80\).`,
        String.raw`Second bracket: \((-5)(-2)=10\), and \(10-(-6)=16\).`,
        String.raw`Divide: \(-80\div16=-5\).`],
      String.raw`the value is \(-5\)`],
    ["Three variables, all with signs", String.raw`Evaluate \(x^2y-3yz^2-(x-z)^3\div y\) when \(x=-3\), \(y=2\) and \(z=-1\).`,
      [String.raw`\(x^2y=(-3)^2(2)=18\).`,
        String.raw`\(3yz^2=3(2)(-1)^2=6\).`,
        String.raw`\(x-z=-3-(-1)=-2\), so \((x-z)^3=-8\), and \(-8\div2=-4\).`,
        String.raw`Combine, watching the subtractions: \(18-6-(-4)=16\).`],
      String.raw`the value is \(16\)`],
    ["Deciding the sign without calculating", String.raw`Is \(-2^6\times(-3)^5\div(-1)^9\) positive or negative? Explain.`,
      [String.raw`\(-2^6\) means \(-(2^6)\), so it is negative.`,
        String.raw`\((-3)^5\) has an odd exponent, so it is negative.`,
        String.raw`\((-1)^9\) has an odd exponent, so it is negative.`,
        String.raw`Three negative factors make a negative result.`],
      "the result is negative"],
    ["Working backward from a score", String.raw`A contest gives \(+4\) for a correct answer and \(-2\) for a wrong one. Dana answered all \(25\) questions and scored \(46\). How many did Dana get right?`,
      [String.raw`A perfect score would be \(25\times4=100\).`,
        String.raw`Changing one answer from right to wrong changes the score by \(-2-4=-6\).`,
        String.raw`The score is \(100-46=54\) below perfect, so there are \(54\div6=9\) wrong answers.`,
        String.raw`Right answers: \(25-9=16\). Check: \(16(4)+9(-2)=64-18=46\).`],
      String.raw`Dana got \(16\) right`],
    ["Reading a rate from a graph", String.raw`The graph shows a temperature falling at a constant rate. When will it reach \(-22\,^\circ\)C?`,
      [String.raw`Read two points: \((0,8)\) and \((2,2)\). The temperature falls \(6\) degrees in \(2\) hours, a rate of \(-3\) degrees per hour.`,
        String.raw`The total change needed is \(-22-8=-30\).`,
        String.raw`Divide: \(-30\div(-3)=10\).`],
      String.raw`the temperature reaches \(-22\,^\circ\)C after \(10\) hours`,
      fig(graph({ series: [{ pts: [[0, 8], [2, 2], [4, -4]] }], xmin: 0, xmax: 11, ymin: -24, ymax: 10, xstep: 1, ystep: 4, xlabel: "hours", ylabel: "°C" }), "A temperature that falls at a constant rate.")],
  ], [
    q("order of operations", String.raw`Evaluate \(\left[(-3)^4-(-5)^2\right]\div\left[(-2)(7)\right]\).`, num(-4),
      "Find each bracket separately. Watch which powers are positive.",
      [String.raw`\((-3)^4=81\) and \((-5)^2=25\), so the first bracket is \(56\).`, String.raw`The second bracket is \(-14\).`, String.raw`\(56\div(-14)=-4\).`], String.raw`\(-4\)`),
    q("substitution", String.raw`Evaluate \(x^3y-2xy^2\) when \(x=-2\) and \(y=-3\).`, num(60),
      "Substitute with brackets around every negative number.",
      [String.raw`\(x^3y=(-8)(-3)=24\).`, String.raw`\(2xy^2=2(-2)(9)=-36\).`, String.raw`\(24-(-36)=60\).`], String.raw`\(60\)`),
    q("missing value", String.raw`The readings \(-14,\ 7,\ -3,\ -20,\ 5\) and one more have a mean of \(-6\). What is the missing reading?`, num(-11),
      "Multiply the mean by 6 to get the total of all six readings.",
      [String.raw`Total of six readings: \(6(-6)=-36\).`, String.raw`Sum of the five known readings: \(-25\).`, String.raw`Missing reading: \(-36-(-25)=-11\).`], String.raw`\(-11\)`),
    q("contest", String.raw`A contest gives \(+3\) for a correct answer and \(-2\) for a wrong one. Ravi answered all \(20\) questions and scored \(20\). How many did Ravi get right?`, num(12),
      "Each answer that changes from right to wrong lowers the score by 5.",
      [String.raw`A perfect score is \(60\), which is \(40\) above Ravi's score.`, String.raw`\(40\div5=8\) wrong answers.`, String.raw`\(20-8=12\) right. Check: \(36-16=20\).`], String.raw`\(12\)`),
    q("product and sum", String.raw`Two integers have a product of \(-54\) and a sum of \(-3\). What is the smaller integer?`, num(-9),
      "The product is negative, so the signs differ. The sum is negative, so the negative number has the larger size.",
      [String.raw`Factor pairs of \(54\) that differ by \(3\): \(6\) and \(9\).`, String.raw`The larger size is negative: \(6+(-9)=-3\).`], String.raw`\(-9\)`),
  ]),

  wrapUp({
    qas: [
      ["Why is a negative times a negative positive?", String.raw`A negative multiplier means "the opposite of". \((-3)(-4)\) is the opposite of \(3(-4)=-12\), which is \(12\). The pattern table shows the same thing: the products keep increasing as you count past zero.`],
      ["Do the sign rules for multiplying also work for dividing?", String.raw`Yes. Division undoes multiplication, so same signs give a positive quotient and different signs give a negative one.`],
      [String.raw`What is the difference between \(-3^2\) and \((-3)^2\)?`, String.raw`\((-3)^2=(-3)(-3)=9\). In \(-3^2\) the exponent applies only to \(3\), so it is \(-(3^2)=-9\).`],
      [String.raw`Why can't I divide by \(0\)?`, String.raw`Dividing asks "what times the divisor gives the dividend?" Nothing times \(0\) gives a non-zero number, so there is no answer — it is undefined.`],
      ["How do I find the sign of a long product quickly?", "Count only the negative factors. Even count → positive; odd count → negative. Then multiply the sizes."],
    ],
    summary: [
      "Same signs → positive; different signs → negative (for × and ÷).",
      "An even number of negative factors gives a positive product; odd gives negative.",
      String.raw`Division by \(0\) is undefined; \(0\) divided by any non-zero number is \(0\).`,
      "BEDMAS: brackets, exponents, × and ÷ left to right, + and − left to right. Bracket every substituted negative.",
    ],
    next: "1.4 extends these ideas to fractions: equivalent fractions, comparing, adding and subtracting.",
  }),
];
