// MTH1W 1.2 — Adding & Subtracting Integers (self-study format)
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, numberLine, chips, q, num, choice } from "./lib.mjs";

export const TITLE = "1.2 Adding & Subtracting Integers";

export const blocks = () => [
  intro({
    icon: "➕",
    title: "Adding &amp; Subtracting Integers",
    overview: String.raw`<strong>Integers</strong> are the whole numbers and their opposites: \(\dots,-3,-2,-1,0,1,2,3,\dots\). They describe temperatures below zero, floors below ground level, overdrawn bank accounts and golf scores under par. In this lesson you will add and subtract integers with two pictures — the <strong>number line</strong> and <strong>zero pairs</strong> — and then with two short rules that work every time. Algebra later in the course depends on getting these signs right, so take your time here.`,
    goals: [
      "find the opposite and the absolute value of an integer;",
      "add integers with the same sign and with different signs, using a model and using a rule;",
      String.raw`subtract any integer by adding its opposite: \(a-b=a+(-b)\);`,
      "evaluate expressions with several integer terms;",
      "solve problems about change and distance (temperature, elevation, money).",
    ],
    curriculum: "B3.1 (integers for location, direction, amount and change)",
    prior: [
      [String.raw`Which is greater, \(-8\) or \(-3\)?`, String.raw`\(-3\). On a number line it is to the right of \(-8\).`],
      [String.raw`What is the opposite of \(12\)?`, String.raw`\(-12\). Opposites are the same distance from \(0\) on opposite sides.`],
      ["What does a temperature of −6 °C mean?", "6 degrees below zero."],
    ],
    words: [
      ["Integer", "a whole number or its opposite", "\\(-4,\\ 0,\\ 17\\)"],
      ["Opposites", "two numbers the same distance from 0, on opposite sides; they add to 0", "\\(5\\) and \\(-5\\)"],
      ["Absolute value \\(|n|\\)", "the distance from 0 — never negative", "\\(|-9|=9\\)"],
      ["Zero pair", "one positive and one negative unit; together they equal 0", "\\((+1)+(-1)=0\\)"],
      ["Sum / difference", "the result of adding / subtracting", "sum of \\(-2\\) and \\(5\\) is \\(3\\)"],
    ],
  }),

  section("📌 Opposites and absolute value", String.raw`
  <p>Two integers that are the same distance from \(0\) on opposite sides are <strong>opposites</strong>, such as \(6\) and \(-6\). The <strong>absolute value</strong> \(|n|\) is a number's distance from \(0\), so it is never negative: \(|-6|=6\) and \(|6|=6\). Absolute value tells you <em>how big</em> a number is, ignoring its direction.</p>
  ${numberLine({ min: -7, max: 7, dots: [{ at: -6, label: "−6", color: "red" }, { at: 6, label: "6", color: "blue" }], caption: "−6 and 6 are opposites: both are 6 units from 0.", id: "nl21" })}`),

  section("📌 Adding integers", String.raw`
  <p>On a number line, start at the first number. Adding a <strong>positive</strong> integer moves you <strong>right</strong>; adding a <strong>negative</strong> integer moves you <strong>left</strong>.</p>
  <p>With chips, a yellow \(+\) chip and a red \(-\) chip form a <strong>zero pair</strong> and cancel. Whatever is left after cancelling is the answer.</p>
  ${chips({ pos: 3, neg: 7, caption: "3 + (−7): three zero pairs cancel and 4 negative chips are left, so the sum is −4." })}
  ${keyIdea(String.raw`<ul style="margin:4px 0 0;"><li><strong>Same signs:</strong> add the absolute values and keep the sign. \((-6)+(-9)=-15\).</li><li><strong>Different signs:</strong> subtract the smaller absolute value from the larger; the answer takes the sign of the number farther from \(0\). \(11+(-4)=7\) and \((-11)+4=-7\).</li></ul>`)}
  <p>Use the explorer to test the rules. Pick any two integers, choose <em>add</em>, and switch between the number line and zero pairs — both pictures always give the same answer.</p>`),

  widget("integerOps", { initA: -6, initB: 9, initOp: "+" }),

  section("📌 Subtracting integers: add the opposite", String.raw`
  <p>Subtraction can always be rewritten as addition: <strong>subtracting a number is the same as adding its opposite.</strong></p>
  <p style="text-align:center;font-size:1.1em;">\(a-b=a+(-b)\)</p>
  ${table(["Subtraction", "Add the opposite", "Answer"], [
    ["\\(9-13\\)", "\\(9+(-13)\\)", "\\(-4\\)"],
    ["\\(-2-6\\)", "\\(-2+(-6)\\)", "\\(-8\\)"],
    ["\\(5-(-7)\\)", "\\(5+7\\)", "\\(12\\)"],
    ["\\(-10-(-3)\\)", "\\(-10+3\\)", "\\(-7\\)"],
  ])}
  <p><strong>Why does subtracting a negative add?</strong> Think of a negative number as a debt. Taking away a 7-dollar debt leaves you 7 dollars better off — exactly like adding 7. In the explorer, choose <em>subtract</em> with a negative second number and watch the arrow turn to point right.</p>
  <p><strong>Subtraction as distance.</strong> The distance from a lower value \(b\) up to a higher value \(a\) is \(a-b\). From \(-4\) up to \(9\) is \(9-(-4)=13\) units — count them on a number line to check.</p>
  <p><strong>Several terms.</strong> Rewrite every subtraction as adding the opposite. Then add left to right, or add all the positives and all the negatives separately and combine.</p>
  ${watchOut([
    String.raw`<strong>The minus sign has two jobs.</strong> In \(4-9\) it means <em>subtract</em>; in \(-9\) it means <em>negative</em>. Writing \(4-9\) as \(4+(-9)\) separates the two jobs.`,
    String.raw`<strong>"Two negatives make a positive" is not a rule for adding.</strong> \((-3)+(-4)=-7\), not \(7\). It applies to <em>subtracting</em> a negative and to multiplying.`,
    String.raw`<strong>Order matters in subtraction.</strong> \(3-8=-5\) but \(8-3=5\). Swapping the numbers gives the opposite answer.`,
  ])}`),

  examples([
    ["Different signs, with zero pairs", String.raw`Evaluate \(6+(-10)\).`,
      [String.raw`The signs are different, so subtract the absolute values: \(10-6=4\).`, String.raw`\(-10\) is farther from \(0\) than \(6\), so the answer is negative.`, String.raw`Chips: six zero pairs cancel and four negative chips remain.`],
      String.raw`\(6+(-10)=-4\)`,
      chips({ pos: 6, neg: 10, caption: "6 zero pairs cancel; 4 negative chips are left." })],
    ["Same signs, on a number line", String.raw`Evaluate \((-7)+(-4)\).`,
      [String.raw`Start at \(-7\).`, String.raw`Adding \(-4\) means moving \(4\) units left: \(-7\to-11\).`, String.raw`Rule check: same signs, so add \(7+4=11\) and keep the negative sign.`],
      String.raw`\((-7)+(-4)=-11\)`,
      numberLine({ min: -12, max: 1, arrows: [{ from: 0, to: -7, label: "−7", color: "gray", lane: 0 }, { from: -7, to: -11, label: "+(−4)", color: "red", lane: 1 }], dots: [{ at: -11, label: "−11", color: "green" }], caption: "Start at −7 and move 4 to the left.", id: "nl22" })],
    ["Subtracting a negative", String.raw`Evaluate \(4-(-6)\).`,
      [String.raw`Add the opposite: subtracting \(-6\) is adding \(+6\), so \(4-(-6)=4+6\).`, String.raw`\(4+6=10\).`],
      String.raw`\(4-(-6)=10\)`,
      numberLine({ min: -1, max: 11, arrows: [{ from: 4, to: 10, label: "−(−6) = +6", color: "blue", lane: 0 }], dots: [{ at: 4, label: "4", color: "gray" }, { at: 10, label: "10", color: "green" }], caption: "Taking away −6 moves you 6 units right.", id: "nl23" })],
    ["Several terms", String.raw`Evaluate \(-5-8+12-(-3)\).`,
      [String.raw`Rewrite each subtraction as adding the opposite: \(-5+(-8)+12+3\).`, String.raw`Add the negatives: \(-5+(-8)=-13\). Add the positives: \(12+3=15\).`, String.raw`Combine: \(-13+15=2\).`],
      String.raw`\(-5-8+12-(-3)=2\)`],
    ["Temperature change", String.raw`At 6 a.m. it is \(-14\,^\circ\text{C}\). By noon the temperature rises \(9\) degrees, and by midnight it falls \(17\) degrees from the noon value. (a) What is the midnight temperature? (b) How much colder is midnight than 6 a.m.?`,
      [String.raw`Noon: \(-14+9=-5\).`, String.raw`Midnight: \(-5-17=-5+(-17)=-22\).`, String.raw`Difference: \(-14-(-22)=-14+22=8\).`],
      String.raw`(a) \(-22\,^\circ\text{C}\); (b) midnight is \(8\) degrees colder than 6 a.m.`,
      numberLine({ min: -24, max: 0, dots: [{ at: -22, label: "midnight", color: "red" }, { at: -14, label: "6 a.m.", color: "blue" }, { at: -5, label: "noon", color: "green" }], caption: "The three temperatures on a vertical thermometer, drawn sideways.", id: "nl24", unit: 22 })],
  ]),

  practice([
    q("different signs", String.raw`Evaluate \(-9+4\).`, num(-5),
      String.raw`Different signs: subtract the sizes, then take the sign of the number farther from \(0\).`,
      [String.raw`\(9-4=5\).`, String.raw`\(-9\) is farther from \(0\), so the answer is negative.`], String.raw`\(-5\)`),
    q("subtract to a negative", String.raw`Evaluate \(7-12\).`, num(-5),
      String.raw`Rewrite as \(7+(-12)\).`,
      [String.raw`\(7-12=7+(-12)\).`, String.raw`\(12-7=5\), and \(-12\) is larger in size, so \(-5\).`], String.raw`\(-5\)`),
    q("subtract a negative", String.raw`Evaluate \(-6-(-10)\).`, num(4),
      String.raw`Subtracting \(-10\) is the same as adding \(10\).`,
      [String.raw`\(-6-(-10)=-6+10\).`, String.raw`\(10-6=4\), positive because \(10\) is larger in size.`], String.raw`\(4\)`),
    q("same signs", String.raw`Evaluate \(-15+(-8)\).`, num(-23),
      "Both are negative: add the sizes and keep the sign.",
      [String.raw`\(15+8=23\).`, "Keep the negative sign."], String.raw`\(-23\)`),
    q("bank balance", String.raw`A bank account is overdrawn: its balance is \(-45\) dollars. A deposit of \(120\) dollars is made, then \(90\) dollars is withdrawn. What is the new balance (in dollars)?`, num(-15),
      "A deposit adds; a withdrawal subtracts. Work one step at a time.",
      [String.raw`After the deposit: \(-45+120=75\).`, String.raw`After the withdrawal: \(75-90=-15\).`], String.raw`\(-15\) dollars (overdrawn by \(15\) dollars)`),
  ]),

  wrapUp({
    qas: [
      ["Why does subtracting a negative number make the result bigger?", String.raw`Taking away a debt leaves you better off. In symbols, \(a-(-b)=a+b\): subtracting a number is adding its opposite.`],
      ["How do I know the sign when adding integers with different signs?", String.raw`Look at which number is farther from \(0\). The answer has that number's sign, and its size is the difference of the absolute values.`],
      [String.raw`Is \(a-b\) the same as \(b-a\)?`, String.raw`No — they are opposites. \(10-4=6\) but \(4-10=-6\).`],
      ["What is the fastest way to add a long list of integers?", "Rewrite subtractions as additions, add all the positives, add all the negatives, then combine the two totals."],
      ["How can I check an answer quickly?", "Estimate the sign first: if the negatives outweigh the positives, the answer must be negative. Then sketch the moves on a number line."],
    ],
    summary: [
      String.raw`Opposites add to \(0\); \(|n|\) is the distance from \(0\).`,
      "Same signs: add the sizes, keep the sign. Different signs: subtract the sizes, take the sign of the larger size.",
      String.raw`\(a-b=a+(-b)\): to subtract, add the opposite.`,
      "Distance between two values is higher minus lower.",
    ],
    next: "1.3 multiplies and divides integers and explains why a negative times a negative is positive.",
  }),
];
