// MTH1W 2.1 — From Words to Algebraic Expressions (self-study format)
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, expr, choice } from "./lib.mjs";
import { timeline, pattern, rect } from "./figs.mjs";

export const TITLE = "2.1 From Words to Algebraic Expressions";

export const blocks = () => [
  intro({
    icon: "🔤",
    title: "From Words to Algebraic Expressions",
    overview: String.raw`Algebra is a language for describing patterns and relationships with letters. In this lesson you will see how that language grew over 1500 years, learn its vocabulary (variable, term, coefficient, constant), translate between words and symbols, evaluate expressions by substitution, and build an expression for the \(n\)th figure of a growing pattern. Every later topic in this chapter — simplifying, expanding and solving — starts from an expression written correctly.`,
    goals: [
      "describe how algebraic notation developed in Greece, India, the Islamic world and Europe;",
      "name the parts of an expression: variable, term, coefficient, constant term;",
      String.raw`translate phrases such as “\(5\) less than twice a number” into expressions, and expressions back into words;`,
      "evaluate expressions by substituting integers, fractions and decimals, with correct order of operations;",
      String.raw`write and use an expression for the \(n\)th figure of a linear growing pattern, and for a real situation such as a service charge.`,
    ],
    curriculum: "C1.1 (history of algebra), C1.2 (create expressions from patterns), C1.3 (evaluate expressions)",
    book: "Nelson Principles of Mathematics 9, Ch. 2 Getting Started and §2.4; Ch. 4.1",
    prior: [
      [String.raw`Evaluate \(3+4\times5\).`, String.raw`\(23\) — multiplication before addition.`],
      [String.raw`Evaluate \((-2)^3\).`, String.raw`\(-8\) — three negative factors.`],
      [String.raw`What comes next: \(4, 7, 10, 13,\ \dots\)?`, String.raw`\(16\) — the pattern adds \(3\) each time.`],
    ],
    words: [
      ["Variable", "a letter that stands for a number that can change or is unknown", "\\(n\\), \\(x\\), \\(t\\)"],
      ["Algebraic expression", "numbers, variables and operations, with no equals sign", "\\(3n-5\\)"],
      ["Term", "one part of an expression, separated by \\(+\\) or \\(-\\)", "\\(3n-5\\) has terms \\(3n\\) and \\(-5\\)"],
      ["Coefficient", "the number multiplying a variable", "\\(-4\\) in \\(-4x^2\\)"],
      ["Constant term", "a term with no variable", "\\(-5\\) in \\(3n-5\\)"],
      ["Substitute", "replace a variable by a number", "\\(3n-5\\) at \\(n=4\\): \\(3(4)-5=7\\)"],
    ],
  }),

  section("📌 Where algebra came from", String.raw`
  <p>For most of history, people wrote mathematics in <strong>words</strong>. A Babylonian tablet (about 1800 BCE) asks for “the side of a square” when “the area added to the side is three-quarters” — a quadratic equation with no symbols at all. Algebraic notation grew slowly, in three stages:</p>
  ${timeline([
    ["c. 250", "Diophantus", "Alexandria"],
    ["628", "Brahmagupta", "India"],
    ["c. 820", "al-Khwārizmī", "Baghdad"],
    ["1591", "François Viète", "France"],
    ["1637", "René Descartes", "France"],
  ], "From words to symbols: about 1400 years of development.")}
  ${table(["Stage", "What it looked like", "Who"], [
    ["Rhetorical", "everything in words: “a thing, and twice the thing, make twelve”", "Babylon, Egypt, early Greece"],
    ["Syncopated", "words shortened to abbreviations for the unknown and its powers", "Diophantus (<em>Arithmetica</em>); Brahmagupta used colour names for several unknowns and gave rules for zero and negatives"],
    ["Symbolic", "letters and signs, as today: \\(3x+2=14\\)", "Viète used letters for unknowns <em>and</em> for known quantities; Descartes chose \\(x, y, z\\) for unknowns and \\(a, b, c\\) for knowns"],
  ])}
  <p>The word <strong>algebra</strong> comes from <em>al-jabr</em> (“restoring”), in the title of a book by Muhammad ibn Mūsā al-Khwārizmī of Baghdad's House of Wisdom. <em>Al-jabr</em> meant moving a subtracted quantity to the other side of an equation so that it becomes an addition — exactly what you will do when you solve equations in 2.4. His name, in Latin, also gave us the word <strong>algorithm</strong>.</p>
  ${keyIdea(String.raw`Symbols made algebra powerful because one short expression such as \(3n+1\) describes infinitely many numbers at once — and it can be manipulated by rules instead of by long sentences.`)}`),

  section("📌 The parts of an expression", String.raw`
  <p>In the expression \(4x^2-x+7\):</p>
  ${table(["Term", "Coefficient", "Variable part", "Type"], [
    ["\\(4x^2\\)", "\\(4\\)", "\\(x^2\\)", "variable term"],
    ["\\(-x\\)", "\\(-1\\)", "\\(x\\)", "variable term (the \\(1\\) is not written)"],
    ["\\(7\\)", "—", "none", "constant term"],
  ])}
  <p>A term keeps the sign in front of it: the second term is \(-x\), not \(x\). Multiplication signs are usually left out: \(4x^2\) means \(4\times x\times x\), and \(ab\) means \(a\times b\). A fraction bar groups: \(\frac{n+1}{2}\) means \((n+1)\div2\).</p>`),

  section("📌 Translating words into symbols", String.raw`
  ${table(["Operation", "Words that signal it", "Example", "Expression"], [
    ["\\(+\\)", "sum, more than, increased by, plus, total", "\\(6\\) more than a number", "\\(n+6\\)"],
    ["\\(-\\)", "difference, less than, decreased by, minus", "\\(6\\) less than a number", "\\(n-6\\) (not \\(6-n\\))"],
    ["\\(\\times\\)", "product, times, twice / triple, of", "\\(\\tfrac34\\) of a number", "\\(\\tfrac34n\\)"],
    ["\\(\\div\\)", "quotient, divided by, per, half of", "a number shared among \\(5\\)", "\\(\\tfrac{n}{5}\\)"],
    ["brackets", "“the sum of … then …”, “the quantity”", "triple the sum of a number and \\(4\\)", "\\(3(n+4)\\)"],
  ])}
  ${watchOut([
    String.raw`<strong>“Less than” reverses the order.</strong> “\(8\) less than \(x\)” is \(x-8\): start at \(x\), go down \(8\).`,
    String.raw`<strong>Brackets change meaning.</strong> “Twice a number, plus \(5\)” is \(2n+5\); “twice the sum of a number and \(5\)” is \(2(n+5)=2n+10\).`,
    String.raw`<strong>Consecutive integers</strong> differ by \(1\): \(n, n+1, n+2\). Consecutive <em>even</em> (or odd) integers differ by \(2\): \(n, n+2, n+4\).`,
  ])}`),

  section("📌 Evaluating: substitute, then follow BEDMAS", String.raw`
  <p>To <strong>evaluate</strong> an expression, replace each variable by its value <strong>in brackets</strong>, then calculate.</p>
  <p>\(3a^2-2ab\) at \(a=-2,\ b=\tfrac12\): \(3(-2)^2-2(-2)\left(\tfrac12\right)=3(4)+2=14\).</p>
  <p>A formula is an expression with a name. The perimeter of this rectangle is \(P=2l+2w\):</p>
  ${rect("l = 7.5 cm", "w = 3.2 cm", "P = 2(7.5) + 2(3.2) = 15 + 6.4 = 21.4 cm")}`),

  section("📌 Growing patterns and the nth figure", String.raw`
  ${pattern(4, 2, "Figure 1 has 6 tiles, Figure 2 has 10, Figure 3 has 14 — the blue part grows by 4.")}
  <p>The pattern above adds \(4\) tiles each time and keeps \(2\) tiles fixed, so Figure \(n\) has \(4n+2\) tiles. Check: Figure \(3\): \(4(3)+2=14\) ✓. Figure \(100\) has \(402\) tiles — no need to draw \(100\) figures.</p>
  ${keyIdea(String.raw`For a pattern that grows by the same amount each step: <strong>coefficient of \(n\) = the constant difference</strong>; <strong>constant term = the value at \(n=0\)</strong> (one step before Figure 1).`)}
  <p>Use the explorer: change how many tiles are added and how many are fixed, and watch the expression, the table and the drawing change together.</p>`),

  widget("patternRule", { initA: 4, initB: 2 }),

  examples([
    ["Words into an expression", String.raw`Write an expression for “\(7\) less than the product of \(5\) and a number \(k\)”, then evaluate it for \(k=-3\).`,
      [String.raw`“The product of \(5\) and \(k\)” is \(5k\).`, String.raw`“\(7\) less than” it: start at \(5k\) and subtract \(7\): \(5k-7\).`, String.raw`Substitute: \(5(-3)-7=-15-7=-22\).`],
      String.raw`\(5k-7\); value \(-22\)`],
    ["Consecutive integers", String.raw`Write a simplified expression for the sum of three consecutive odd integers if the smallest is \(n\). Then find the sum when \(n=17\).`,
      [String.raw`Consecutive odd integers differ by \(2\): \(n,\ n+2,\ n+4\).`, String.raw`Sum: \(n+(n+2)+(n+4)=3n+6\).`, String.raw`At \(n=17\): \(3(17)+6=57\). Check: \(17+19+21=57\).`],
      String.raw`\(3n+6\); \(57\)`],
    ["Evaluating with fractions and negatives", String.raw`Evaluate \(\dfrac{x^2-3y}{2x+y}\) when \(x=-4\) and \(y=\tfrac23\).`,
      [String.raw`Numerator: \((-4)^2-3\left(\tfrac23\right)=16-2=14\).`, String.raw`Denominator: \(2(-4)+\tfrac23=-8+\tfrac23=-\tfrac{22}{3}\).`, String.raw`Divide: \(14\div\left(-\tfrac{22}{3}\right)=14\times\left(-\tfrac{3}{22}\right)=-\tfrac{42}{22}=-\tfrac{21}{11}\).`],
      String.raw`\(-\tfrac{21}{11}\)`],
    ["A rule from a pattern", String.raw`A pattern has \(5, 8, 11, 14\) toothpicks in Figures \(1\) to \(4\). Write an expression for Figure \(n\) and decide whether some figure uses exactly \(100\) toothpicks.`,
      [String.raw`The difference is \(3\), so the coefficient of \(n\) is \(3\).`, String.raw`At \(n=0\) the value would be \(5-3=2\), so \(T=3n+2\). Check Figure \(4\): \(3(4)+2=14\) ✓.`, String.raw`For \(100\): \(3n+2=100\) needs \(3n=98\), and \(98\) is not a multiple of \(3\).`],
      String.raw`\(T=3n+2\); no figure has exactly \(100\) toothpicks (Figure \(32\) has \(98\), Figure \(33\) has \(101\))`],
    ["An expression for a real situation", String.raw`An electrician charges a \(65\)-dollar call-out fee plus \(48.50\) dollars per hour. A furnace technician charges \(40\) dollars plus \(52.75\) dollars per hour. (a) Write an expression for each bill for \(h\) hours. (b) Write one expression for the total if both work the same \(h\) hours. (c) Evaluate (b) for \(3.5\) hours.`,
      [String.raw`(a) Electrician: \(65+48.5h\). Technician: \(40+52.75h\).`, String.raw`(b) Add like parts: \((65+40)+(48.5+52.75)h=105+101.25h\).`, String.raw`(c) \(105+101.25(3.5)=105+354.375=459.375\), so about \(459.38\) dollars.`],
      String.raw`(b) \(105+101.25h\); (c) \(459.38\) dollars`],
  ]),

  practice([
    q("words → expression", String.raw`Write an expression for “\(9\) less than one-third of a number \(m\)”.`, expr("m/3-9"),
      String.raw`“One-third of \(m\)” is \(\tfrac{m}{3}\); “\(9\) less than” subtracts \(9\) from it.`, [String.raw`One-third of \(m\): \(\tfrac{m}{3}\).`, String.raw`\(9\) less than that: \(\tfrac{m}{3}-9\).`], String.raw`\(\tfrac{m}{3}-9\)`),
    q("parts of an expression", String.raw`In \(-x^3+6x-\tfrac{x^2}{4}+11\), what is the coefficient of \(x^2\)?`, { kind: "number", value: -0.25 },
      String.raw`\(\tfrac{x^2}{4}\) means \(\tfrac14x^2\); keep the sign in front.`, [String.raw`The term is \(-\tfrac{x^2}{4}=-\tfrac14x^2\).`, String.raw`Its coefficient is \(-\tfrac14\).`], String.raw`\(-\tfrac14\)`),
    q("evaluate", String.raw`Evaluate \(2p^2-5pq+q\) when \(p=-3\) and \(q=4\).`, num(82),
      String.raw`Bracket each value: \(2(-3)^2-5(-3)(4)+4\).`, [String.raw`\(2(-3)^2=2(9)=18\).`, String.raw`\(-5(-3)(4)=60\).`, String.raw`\(18+60+4=82\).`], String.raw`\(82\)`),
    q("pattern rule", String.raw`A pattern has \(7, 13, 19, 25\) squares in Figures \(1\) to \(4\). Write an expression for the number of squares in Figure \(n\).`, expr("6n+1"),
      "Find the constant difference, then the value one step before Figure 1.", [String.raw`Difference \(6\), so \(6n\).`, String.raw`One step before Figure 1: \(7-6=1\).`, String.raw`Check Figure 4: \(6(4)+1=25\) ✓`], String.raw`\(6n+1\)`),
    q("consecutive integers", String.raw`The middle one of three consecutive even integers is \(m\). Write a simplified expression for their sum.`, expr("3m"),
      String.raw`Consecutive even integers differ by \(2\): the three are \(m-2,\ m,\ m+2\).`, [String.raw`\((m-2)+m+(m+2)\).`, String.raw`The \(-2\) and \(+2\) make a zero pair: \(3m\).`], String.raw`\(3m\)`),
  ]),

  wrapUp({
    qas: [
      ["Why do we use letters at all?", String.raw`A letter lets one expression describe every case at once. “Figure \(n\) has \(4n+2\) tiles” covers Figure \(1\) and Figure \(1000\). It also lets us apply rules (simplify, solve) instead of reasoning in long sentences — the step that took algebra from Diophantus to Descartes.`],
      [String.raw`Is “\(5\) less than \(x\)” the same as \(5-x\)?`, String.raw`No. It means start at \(x\) and go down \(5\): \(x-5\). Test with \(x=12\): “\(5\) less than \(12\)” is \(7=12-5\), but \(5-12=-7\).`],
      [String.raw`What is the coefficient of \(-x\)?`, String.raw`\(-1\). When the coefficient is \(1\) or \(-1\) we don't write the \(1\), but it is still there.`],
      ["Why must I put a substituted negative number in brackets?", String.raw`Without brackets the sign gets lost in the order of operations: \(x^2\) at \(x=-3\) is \((-3)^2=9\), but typing \(-3^2\) gives \(-9\).`],
      ["How do I check a pattern rule?", String.raw`Substitute two figure numbers you already know (for example \(n=1\) and \(n=4\)). If both match the counts, the rule is right for every figure of a pattern that grows by a constant amount.`],
    ],
    summary: [
      "Algebra moved from words (rhetorical) to abbreviations (syncopated) to symbols; the name comes from al-Khwārizmī's al-jabr.",
      "A term keeps its sign; the coefficient multiplies the variable; the constant term has no variable.",
      "“Less than” reverses order; brackets group a sum before it is multiplied.",
      String.raw`Substitute in brackets, then BEDMAS. A constant-difference pattern has rule (difference)\(\times n\) + (value at \(n=0\)).`,
    ],
    next: "2.2 shows when two different-looking expressions are equivalent, and how to add and subtract polynomials with algebra tiles.",
  }),
];
