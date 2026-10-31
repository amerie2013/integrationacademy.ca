// MTH1W 1.1 — Number Sets & Their Subsets (self-study format)
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, numberLine, q, num, frac, txt, choice, hard, fig } from "./lib.mjs";
import { numberLine as lineSvg } from "./bank/svg.mjs";

export const TITLE = "1.1 Number Sets & Their Subsets";

const NEST = String.raw`<div style="text-align:center;margin:12px 0;"><svg viewBox="0 0 560 210" width="560" style="max-width:100%;height:auto;" role="img" aria-label="Nested sets: natural inside whole inside integers inside rationals; irrationals beside rationals; all inside reals">
<rect x="4" y="4" width="552" height="202" rx="14" fill="#f8fafc" stroke="#334155" stroke-width="1.6"/><text x="16" y="24" font-size="14" font-weight="700" fill="#334155">Real numbers ℝ</text>
<rect x="18" y="34" width="340" height="164" rx="12" fill="#ede9fe" stroke="#6d28d9" stroke-width="1.6"/><text x="30" y="54" font-size="13.5" font-weight="700" fill="#6d28d9">Rational ℚ   e.g. 2/3, −0.25, 0.1̅</text>
<rect x="32" y="64" width="312" height="126" rx="11" fill="#dbeafe" stroke="#1e40af" stroke-width="1.6"/><text x="44" y="84" font-size="13.5" font-weight="700" fill="#1e40af">Integers ℤ   e.g. −7, −1</text>
<rect x="46" y="94" width="284" height="88" rx="10" fill="#dcfce7" stroke="#15803d" stroke-width="1.6"/><text x="58" y="114" font-size="13.5" font-weight="700" fill="#15803d">Whole 𝕎   0</text>
<rect x="60" y="124" width="256" height="50" rx="9" fill="#fef3c7" stroke="#b45309" stroke-width="1.6"/><text x="72" y="154" font-size="13.5" font-weight="700" fill="#b45309">Natural ℕ   1, 2, 3, …</text>
<rect x="372" y="34" width="172" height="164" rx="12" fill="#ffe4e6" stroke="#be123c" stroke-width="1.6"/><text x="384" y="54" font-size="13.5" font-weight="700" fill="#be123c">Irrational</text><text x="384" y="84" font-size="13" fill="#be123c">√2, √7, π,</text><text x="384" y="104" font-size="13" fill="#be123c">0.1010010001…</text>
</svg><div style="font-size:13px;color:#64748b;">Each set sits inside the next. Rational and irrational numbers never overlap; together they make the real numbers.</div></div>`;

export const blocks = () => [
  intro({
    icon: "🔢",
    title: "Number Sets &amp; Their Subsets",
    overview: String.raw`Mathematicians sort numbers into families — <em>natural, whole, integer, rational, irrational</em> and <em>real</em> — the way biologists sort living things. Knowing which family a number belongs to tells you what you can do with it: whether it can be written as a fraction, whether its decimal ends, whether it can be negative. This lesson builds the family tree, shows how to classify any number (even ones that look tricky, like \(\sqrt{49}\) or \(0.\overline{45}\)), and tells the story of where two of these numbers — zero and the negatives — came from.`,
    goals: [
      String.raw`name and describe the sets \(\mathbb{N},\ \mathbb{W},\ \mathbb{Z},\ \mathbb{Q}\), the irrationals and \(\mathbb{R}\), and how they nest inside one another;`,
      "classify any number, simplifying it first when needed;",
      "explain why terminating and repeating decimals are rational, and convert a repeating decimal to a fraction;",
      "use a counterexample to show a statement about number sets is false;",
      "describe how zero and negative numbers developed in different cultures and why they matter today.",
    ],
    curriculum: "B1.1 (story of a number concept), B1.2 (subsets of a number system)",
    prior: [
      [String.raw`What is \(\sqrt{81}\)?`, String.raw`\(9\), because \(9\times9=81\).`],
      [String.raw`Write \(0.3\) as a fraction.`, String.raw`\(\tfrac{3}{10}\) — the last digit is in the tenths place.`],
      [String.raw`Is \(-5\) greater or less than \(-2\)?`, String.raw`Less: \(-5\) is farther left on the number line.`],
    ],
    words: [
      ["Natural numbers \\(\\mathbb{N}\\)", "the counting numbers", "\\(1, 2, 3, \\dots\\)"],
      ["Whole numbers \\(\\mathbb{W}\\)", "natural numbers and zero", "\\(0, 1, 2, \\dots\\)"],
      ["Integers \\(\\mathbb{Z}\\)", "whole numbers and their opposites", "\\(\\dots,-2,-1,0,1,2,\\dots\\)"],
      ["Rational \\(\\mathbb{Q}\\)", "any number that can be written \\(\\tfrac{a}{b}\\), with \\(a,b\\) integers and \\(b\\neq0\\)", "\\(-\\tfrac{4}{9},\\ 0.6,\\ 0.\\overline{2},\\ 5\\)"],
      ["Irrational", "a real number that cannot be written as \\(\\tfrac{a}{b}\\); its decimal never ends and never repeats", "\\(\\sqrt{3},\\ \\pi\\)"],
      ["Real \\(\\mathbb{R}\\)", "every number on the number line (rational or irrational)", "all of the above"],
      ["Subset \\(\\subset\\)", "a set whose members all belong to a larger set", "\\(\\mathbb{N}\\subset\\mathbb{W}\\)"],
    ],
  }),

  section("📌 The family tree of numbers", String.raw`
  <p>Each set is built from the one before it by adding new kinds of numbers:</p>
  <ul>
    <li>Start with the <strong>natural numbers</strong> \(1,2,3,\dots\) — the numbers you count with.</li>
    <li>Add \(0\) to get the <strong>whole numbers</strong>.</li>
    <li>Add the negatives \(-1,-2,-3,\dots\) to get the <strong>integers</strong>.</li>
    <li>Add every quotient of integers, like \(\tfrac{2}{3}\) and \(-\tfrac{7}{4}\), to get the <strong>rational numbers</strong>. Every integer is already rational: \(5=\tfrac{5}{1}\).</li>
    <li>The number line still has gaps — numbers like \(\sqrt{2}\) and \(\pi\) that are <em>not</em> quotients of integers. These are the <strong>irrational numbers</strong>. Rationals and irrationals together fill the whole line: the <strong>real numbers</strong>.</li>
  </ul>
  ${NEST}
  ${keyIdea(String.raw`\(\mathbb{N}\subset\mathbb{W}\subset\mathbb{Z}\subset\mathbb{Q}\subset\mathbb{R}\). A number belongs to <em>its own set and every set outside it</em>. So \(4\) is natural, whole, an integer, rational and real — five sets at once.`)}
  <p>Try it below: choose a number and watch every set it belongs to light up.</p>`),

  widget("numberSets"),

  section("📌 Rational or irrational? Look at the decimal", String.raw`
  <p>The decimal form of a number tells you which family it is in:</p>
  ${table(["Decimal type", "Example", "Rational?", "Why"], [
    ["Terminating (ends)", "\\(0.375\\)", "Yes", "\\(0.375=\\tfrac{375}{1000}=\\tfrac{3}{8}\\)"],
    ["Repeating (a block repeats forever)", "\\(0.\\overline{6}=0.666\\ldots\\)", "Yes", "\\(0.\\overline{6}=\\tfrac{2}{3}\\)"],
    ["Never ends, never repeats", "\\(\\sqrt{2}=1.41421356\\ldots\\)", "No — irrational", "no fraction of integers equals it"],
  ])}
  <p><strong>Converting a repeating decimal to a fraction.</strong> Call the number \(x\). Multiply by \(10\) if one digit repeats, \(100\) if two digits repeat, and so on. Subtracting lines the repeating tails up so they cancel:</p>
  <p style="text-align:center;">\(x=0.\overline{8}\ \Rightarrow\ 10x=8.\overline{8}\ \Rightarrow\ 10x-x=8\ \Rightarrow\ 9x=8\ \Rightarrow\ x=\tfrac{8}{9}\)</p>
  <p><strong>Square roots.</strong> \(\sqrt{n}\) is rational only when \(n\) is a perfect square (\(1,4,9,16,25,\dots\)). Otherwise it is irrational, though you can still locate it: \(\sqrt{20}\) is between \(\sqrt{16}=4\) and \(\sqrt{25}=5\), a little closer to \(4\).</p>
  ${numberLine({ min: 0, max: 6, dots: [{ at: 4, label: "√16", color: "blue" }, { at: 5, label: "√25", color: "blue" }], caption: "√20 lies between √16 = 4 and √25 = 5 (about 4.47).", id: "nl11" })}
  ${watchOut([
    String.raw`<strong>Simplify before you classify.</strong> \(\sqrt{49}\) looks irrational but equals \(7\); \(-\tfrac{12}{4}\) looks like a fraction but equals \(-3\), an integer.`,
    String.raw`<strong>Zero is whole but not natural.</strong> The natural numbers start at \(1\).`,
    String.raw`<strong>\(\tfrac{22}{7}\) is not \(\pi\).</strong> \(\tfrac{22}{7}=3.\overline{142857}\) repeats, so it is rational — it is only an approximation of the irrational \(\pi\).`,
    String.raw`<strong>A calculator display does not decide.</strong> \(\sqrt{2}\) shows as \(1.414213562\) only because the screen runs out of room; the real decimal continues forever without repeating.`,
  ])}`),

  section("📌 A story of numbers: zero and the negatives", String.raw`
  <p>The sets above were not invented all at once. Different cultures needed different numbers, and some ideas took centuries to be accepted.</p>
  <ul>
    <li><strong>Negative numbers in China.</strong> The Chinese text <em>The Nine Chapters on the Mathematical Art</em> (compiled roughly 2000 years ago) solved problems about debts and gains using counting rods: red rods for positive amounts, black rods for negative ones, with rules for combining them.</li>
    <li><strong>A symbol for "nothing".</strong> Babylonian scribes used a placeholder mark inside numbers, and the Maya of Central America wrote a shell-shaped zero in their calendar counts.</li>
    <li><strong>Zero as a number.</strong> In India, the mathematician Brahmagupta (628 CE) treated zero as a number in its own right and wrote rules such as "a debt minus zero is a debt" — the first known rules for calculating with zero and negatives. These ideas travelled through the Arabic-speaking world to Europe, where negatives were still distrusted as late as the 1600s.</li>
  </ul>
  <p><strong>Why it matters today.</strong> Negative integers record temperatures below zero, overdrawn bank balances and depths below sea level. Zero makes place value work — without it, \(205\) and \(25\) would look the same — and every computer stores information as strings of \(0\)s and \(1\)s.</p>`),

  examples([
    ["Simplify, then classify", String.raw`Classify \(-\dfrac{18}{3}\). List every set it belongs to.`,
      [String.raw`Simplify first: \(-\tfrac{18}{3}=-6\).`, String.raw`\(-6\) is negative, so it is not natural or whole.`, String.raw`It is an integer, and every integer is rational (\(-6=\tfrac{-6}{1}\)) and real.`],
      String.raw`\(-\tfrac{18}{3}=-6\) belongs to \(\mathbb{Z},\ \mathbb{Q},\ \mathbb{R}\)`],
    ["A repeating decimal is rational", String.raw`Show that \(0.\overline{45}=0.454545\ldots\) is rational by writing it as a fraction in lowest terms.`,
      [String.raw`Let \(x=0.\overline{45}\). Two digits repeat, so multiply by \(100\): \(100x=45.\overline{45}\).`, String.raw`Subtract: \(100x-x=45.\overline{45}-0.\overline{45}\), so \(99x=45\).`, String.raw`\(x=\tfrac{45}{99}=\tfrac{5}{11}\) (divide top and bottom by \(9\)).`, String.raw`Check: \(5\div11=0.4545\ldots\) ✓`],
      String.raw`\(0.\overline{45}=\tfrac{5}{11}\), a quotient of integers, so it is rational`],
    ["Square roots: perfect square or not?", String.raw`Classify \(\sqrt{36}\) and \(\sqrt{40}\). Between which two integers is \(\sqrt{40}\)?`,
      [String.raw`\(36=6^2\) is a perfect square, so \(\sqrt{36}=6\): natural, whole, integer, rational, real.`, String.raw`\(40\) is not a perfect square, so \(\sqrt{40}\) is irrational (its decimal never ends or repeats).`, String.raw`\(36<40<49\), so \(\sqrt{36}<\sqrt{40}<\sqrt{49}\), that is, \(6<\sqrt{40}<7\).`],
      String.raw`\(\sqrt{36}\) is natural; \(\sqrt{40}\approx6.32\) is irrational and lies between \(6\) and \(7\)`,
      numberLine({ min: 4, max: 8, dots: [{ at: 6, label: "√36", color: "blue" }, { at: 7, label: "√49", color: "gray" }], caption: "√40 ≈ 6.32 sits between 6 and 7.", id: "nl12" })],
    ["Sorting a list", String.raw`Sort \(\left\{-3,\ 0,\ 2.6,\ \tfrac{5}{8},\ \sqrt{11},\ 12\right\}\): which numbers are integers, which are rational, and which are irrational?`,
      [String.raw`Integers: \(-3,\ 0,\ 12\).`, String.raw`Rational: all the integers, plus \(2.6=\tfrac{13}{5}\) and \(\tfrac{5}{8}\).`, String.raw`Irrational: \(\sqrt{11}\), because \(11\) is not a perfect square.`],
      String.raw`integers \(\{-3,0,12\}\); rational \(\{-3,0,2.6,\tfrac58,12\}\); irrational \(\{\sqrt{11}\}\)`,
      table(["Number", "ℕ", "𝕎", "ℤ", "ℚ", "Irrational"], [
        ["\\(-3\\)", "", "", "✓", "✓", ""], ["\\(0\\)", "", "✓", "✓", "✓", ""], ["\\(2.6\\)", "", "", "", "✓", ""],
        ["\\(\\tfrac58\\)", "", "", "", "✓", ""], ["\\(\\sqrt{11}\\)", "", "", "", "", "✓"], ["\\(12\\)", "✓", "✓", "✓", "✓", ""],
      ])],
    ["Disproving a claim with a counterexample", String.raw`Ali says: "Adding two irrational numbers always gives an irrational number." Is Ali right?`,
      [String.raw`To show a claim is false, one example where it fails is enough — a <strong>counterexample</strong>.`, String.raw`\(\sqrt{2}\) and \(-\sqrt{2}\) are both irrational.`, String.raw`Their sum is \(\sqrt{2}+(-\sqrt{2})=0\), which is rational.`],
      String.raw`Ali is wrong: \(\sqrt{2}+(-\sqrt{2})=0\) is a counterexample`],
  ]),

  practice([
    q("smallest set", String.raw`What is the <strong>smallest</strong> set that contains \(-11\)?`,
      choice(["Natural numbers", "Whole numbers", "Integers", "Rational numbers"], 2),
      String.raw`Is \(-11\) a counting number? Is it whole? Negatives first appear in the integers.`,
      [String.raw`\(-11\) is negative, so it is not natural or whole.`, String.raw`It is an integer. The rationals also contain it, but the integers are the smaller set.`],
      "Integers"),
    q("repeating decimal", String.raw`Write \(0.\overline{7}=0.777\ldots\) as a fraction.`,
      frac(7, 9), String.raw`Let \(x=0.\overline{7}\). One digit repeats, so compare \(10x\) with \(x\).`,
      [String.raw`\(x=0.\overline{7}\) and \(10x=7.\overline{7}\).`, String.raw`\(10x-x=7\), so \(9x=7\).`, String.raw`\(x=\tfrac{7}{9}\).`],
      String.raw`\(\tfrac{7}{9}\)`, { placeholder: "a fraction like 2/3" }),
    q("spot the irrational", String.raw`Which number is irrational?`,
      choice([String.raw`\(\sqrt{64}\)`, String.raw`\(0.125\)`, String.raw`\(\sqrt{30}\)`, String.raw`\(-\tfrac{2}{3}\)`], 2),
      "Simplify each one. A square root is irrational only if the number inside is not a perfect square.",
      [String.raw`\(\sqrt{64}=8\) (rational).`, String.raw`\(0.125=\tfrac18\) (rational).`, String.raw`\(-\tfrac23\) is a quotient of integers (rational).`, String.raw`\(30\) is not a perfect square, so \(\sqrt{30}\) is irrational.`],
      String.raw`\(\sqrt{30}\)`),
    q("terminating decimal", String.raw`Write \(0.36\) as a fraction in lowest terms.`,
      frac(9, 25), "The last digit is in the hundredths place, so start with a denominator of 100.",
      [String.raw`\(0.36=\tfrac{36}{100}\).`, String.raw`Divide top and bottom by \(4\): \(\tfrac{9}{25}\).`],
      String.raw`\(\tfrac{9}{25}\)`, { placeholder: "a fraction like 3/4" }),
    q("locate a root", String.raw`Between which two consecutive integers does \(\sqrt{70}\) lie? Type them like <em>3 and 4</em>.`,
      txt("8 and 9", "8, 9", "8,9", "8 9", "between 8 and 9", "8 to 9", "9 and 8"),
      "Find the perfect squares just below and just above 70.",
      [String.raw`\(8^2=64\) and \(9^2=81\).`, String.raw`\(64<70<81\), so \(8<\sqrt{70}<9\).`],
      String.raw`between \(8\) and \(9\) (\(\sqrt{70}\approx8.37\))`),
  ]),

  ...hard([
    ["A repeating decimal with a late start", String.raw`Write \(2.1\overline{36}=2.13636\ldots\) as a fraction in lowest terms.`,
      [String.raw`Let \(x=2.1\overline{36}\). One digit comes before the repeat, so \(10x=21.\overline{36}\).`,
        String.raw`Two digits repeat, so move two more places: \(1000x=2136.\overline{36}\).`,
        String.raw`Subtract so the tails cancel: \(1000x-10x=2136-21\), which gives \(990x=2115\).`,
        String.raw`Divide and reduce by \(45\): \(x=\tfrac{2115}{990}=\tfrac{47}{22}\).`,
        String.raw`Check: \(47\div22=2.13636\ldots\) ✓`],
      String.raw`\(2.1\overline{36}=\tfrac{47}{22}\)`],
    ["Do not trust the look of a number", String.raw`Classify each number as rational or irrational: \(\sqrt{12}\times\sqrt{3}\), \(\ \sqrt{2.25}\), \(\ 3+\sqrt{2}\), \(\ \sqrt{0.4}\).`,
      [String.raw`Multiply under the root: \(\sqrt{12}\times\sqrt{3}=\sqrt{36}=6\), which is rational.`,
        String.raw`\(1.5^2=2.25\), so \(\sqrt{2.25}=1.5\), which is rational.`,
        String.raw`\(\sqrt{2}\) is irrational, and adding a rational number cannot remove the endless decimal, so \(3+\sqrt{2}\) is irrational.`,
        String.raw`\(0.4=\tfrac{2}{5}\), and neither \(2\) nor \(5\) is a perfect square, so \(\sqrt{0.4}\) is irrational. It is not \(0.2\), because \(0.2^2=0.04\).`],
      String.raw`\(\sqrt{12}\times\sqrt{3}\) and \(\sqrt{2.25}\) are rational; \(3+\sqrt{2}\) and \(\sqrt{0.4}\) are irrational`],
    ["A short proof", String.raw`Explain why \(2+\sqrt{3}\) cannot be rational, given that \(\sqrt{3}\) is irrational.`,
      [String.raw`Suppose \(2+\sqrt{3}\) were rational. Call it \(r\).`,
        String.raw`Subtract \(2\) from both sides: \(\sqrt{3}=r-2\).`,
        String.raw`A rational number minus a rational number is rational, so \(\sqrt{3}\) would be rational.`,
        String.raw`That contradicts what we know about \(\sqrt{3}\), so the supposition must be false.`],
      String.raw`\(2+\sqrt{3}\) is irrational`],
    ["Trapping a square root", String.raw`Find \(\sqrt{47}\) to one decimal place without using the root key. Use only multiplication.`,
      [String.raw`\(6^2=36\) and \(7^2=49\), so \(\sqrt{47}\) is between \(6\) and \(7\), close to \(7\).`,
        String.raw`Try tenths: \(6.8^2=46.24\) is too small, and \(6.9^2=47.61\) is too big.`,
        String.raw`Compare the gaps: \(47-46.24=0.76\) and \(47.61-47=0.61\). The second gap is smaller.`],
      String.raw`\(\sqrt{47}\approx6.9\)`,
      fig(lineSvg({ min: 6.5, max: 7.5, step: 0.1, labelEvery: 5, letters: [{ at: 6.86, label: "√47" }] }), "√47 lies between 6.8 and 6.9, a little closer to 6.9.")],
  ], [
    q("late repeat", String.raw`Write \(0.2\overline{7}=0.2777\ldots\) as a fraction in lowest terms.`, frac(5, 18),
      String.raw`Compare \(100x\) with \(10x\), so the repeating tails line up.`,
      [String.raw`\(100x=27.\overline{7}\) and \(10x=2.\overline{7}\).`, String.raw`Subtract: \(90x=25\).`, String.raw`\(x=\tfrac{25}{90}=\tfrac{5}{18}\).`], String.raw`\(\tfrac{5}{18}\)`, { placeholder: "a fraction like 2/3" }),
    q("repeating block", String.raw`Write \(1.\overline{18}=1.1818\ldots\) as an improper fraction in lowest terms.`, frac(13, 11),
      "Two digits repeat, so compare 100x with x.",
      [String.raw`\(100x=118.\overline{18}\) and \(x=1.\overline{18}\).`, String.raw`Subtract: \(99x=117\).`, String.raw`\(x=\tfrac{117}{99}=\tfrac{13}{11}\).`], String.raw`\(\tfrac{13}{11}\)`, { placeholder: "a fraction like 7/3" }),
    q("spot the irrational", "Which number is irrational?", choice([String.raw`\(\sqrt{2}\times\sqrt{18}\)`, String.raw`\(\sqrt{0.09}\)`, String.raw`\(\sqrt{0.9}\)`, String.raw`\((\sqrt{7})^2\)`], 2),
      "Simplify each one first. Be careful with the decimals under the root signs.",
      [String.raw`\(\sqrt{2}\times\sqrt{18}=\sqrt{36}=6\).`, String.raw`\(\sqrt{0.09}=0.3\).`, String.raw`\((\sqrt{7})^2=7\).`, String.raw`\(0.9=\tfrac{9}{10}\), and \(10\) is not a perfect square, so \(\sqrt{0.9}\) is irrational.`], String.raw`\(\sqrt{0.9}\)`),
    q("counting integers", String.raw`How many integers lie strictly between \(-\sqrt{30}\) and \(\sqrt{50}\)?`, num(13),
      "Locate each root between two integers, then count, and remember to count 0.",
      [String.raw`\(25<30<36\), so \(-\sqrt{30}\) is between \(-6\) and \(-5\).`, String.raw`\(49<50<64\), so \(\sqrt{50}\) is between \(7\) and \(8\).`, String.raw`The integers are \(-5,-4,\dots,6,7\), which is \(13\) integers.`], String.raw`\(13\)`),
    q("always true?", "Which statement is always true?", choice(["The product of two irrational numbers is irrational.", "The sum of two rational numbers is rational.", "The quotient of two integers is rational.", "The square root of a positive rational number is rational."], 1),
      "Look for a counterexample to each statement.",
      [String.raw`\(\sqrt{2}\times\sqrt{2}=2\) rules out the first.`, String.raw`\(5\div0\) is undefined, which rules out the third.`, String.raw`\(\sqrt{2}\) rules out the fourth.`, String.raw`Adding fractions of integers always gives a fraction of integers.`], "The sum of two rational numbers is rational."),
  ]),

  wrapUp({
    qas: [
      [String.raw`Is \(0\) positive or negative?`, String.raw`Neither. It is the integer that separates positives from negatives; it is whole, an integer, rational and real, but not natural.`],
      [String.raw`Can a number be both rational and irrational?`, String.raw`No. "Irrational" means "not rational", so the two sets never overlap. Every real number is exactly one of the two.`],
      [String.raw`Is every fraction rational?`, String.raw`Every fraction of <em>integers</em> (with a non-zero denominator) is rational. \(\tfrac{\pi}{2}\) is written as a fraction but is irrational, because \(\pi\) is not an integer.`],
      [String.raw`How can I tell whether a long decimal on my calculator is rational?`, String.raw`You usually can't from the screen alone. Decide from where the number came from: a perfect-square root, a fraction, or a terminating decimal is rational; the square root of a non-perfect square, or \(\pi\), is irrational.`],
      [String.raw`Why do mathematicians care which set a number is in?`, String.raw`Each set answers different questions. Counting needs \(\mathbb{N}\), temperatures need \(\mathbb{Z}\), sharing and measuring need \(\mathbb{Q}\), and lengths like the diagonal of a square need the irrationals.`],
    ],
    summary: [
      String.raw`\(\mathbb{N}\subset\mathbb{W}\subset\mathbb{Z}\subset\mathbb{Q}\subset\mathbb{R}\); the irrationals are the reals that are not rational.`,
      "Terminating and repeating decimals are rational; non-terminating, non-repeating decimals are irrational.",
      String.raw`\(\sqrt{n}\) is rational only when \(n\) is a perfect square — always simplify before classifying.`,
      "One counterexample is enough to prove a general statement false.",
      "Zero and the negatives grew out of real needs (debts, calendars, place value) in China, India and Central America.",
    ],
    next: "1.2 uses the integers to model gains and losses — adding and subtracting with signs.",
  }),
];
