// MTH1W 1.10 — Density, Infinity & Limit (self-study format)
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, numberLine, q, num, frac, choice } from "./lib.mjs";

export const TITLE = "1.10 Density, Infinity & Limit";

const ZENO = String.raw`<div style="text-align:center;margin:12px 0;"><svg viewBox="0 0 560 90" width="560" style="max-width:100%;height:auto;" role="img" aria-label="Walking half the remaining distance to a wall each step">
<line x1="20" y1="50" x2="540" y2="50" stroke="#334155" stroke-width="2"/><rect x="536" y="10" width="10" height="70" fill="#475569"/><text x="520" y="85" font-size="12" text-anchor="end" fill="#334155">wall (8 m)</text>
<path d="M20,50 Q150,0 280,50" fill="none" stroke="#1e40af" stroke-width="2.2"/><text x="150" y="20" font-size="12" text-anchor="middle" fill="#1e40af" font-weight="700">4 m</text>
<path d="M280,50 Q345,14 410,50" fill="none" stroke="#6d28d9" stroke-width="2.2"/><text x="345" y="26" font-size="12" text-anchor="middle" fill="#6d28d9" font-weight="700">2 m</text>
<path d="M410,50 Q442,26 475,50" fill="none" stroke="#b45309" stroke-width="2.2"/><text x="442" y="34" font-size="11" text-anchor="middle" fill="#b45309" font-weight="700">1</text>
<path d="M475,50 Q491,38 507,50" fill="none" stroke="#15803d" stroke-width="2"/><path d="M507,50 Q515,44 523,50" fill="none" stroke="#be123c" stroke-width="2"/>
<circle cx="20" cy="50" r="5" fill="#334155"/><text x="20" y="72" font-size="12" text-anchor="middle" fill="#334155">start</text>
</svg><div style="font-size:13px;color:#64748b;">Each step covers half of what is left: 4, 2, 1, ½, ¼ … The total gets as close to 8 m as you like.</div></div>`;

export const blocks = () => [
  intro({
    icon: "♾️",
    title: "Density, Infinity &amp; Limit",
    overview: String.raw`Integers come one after another with gaps between them: there is nothing between \(3\) and \(4\). Rational numbers are different — between any two of them there is always another, so you can never name "the next" fraction. This lesson explores three big ideas that come from that: <strong>density</strong> (always another number in between), <strong>infinity</strong> (number sets that never end), and the <strong>limit</strong> (a value that a list of numbers gets closer and closer to). These ideas lead, much later, to calculus.`,
    goals: [
      "find rational numbers between any two given rational numbers, using midpoints and equivalent fractions;",
      "explain what it means for a number set to be dense, and why the integers are not;",
      "explain why there is no largest number and no smallest positive rational number;",
      "describe the limit of a sequence such as \\(\\tfrac12,\\tfrac34,\\tfrac78,\\dots\\) and explain why \\(0.\\overline{9}=1\\);",
      "connect these ideas to real situations such as repeatedly halving a distance.",
    ],
    curriculum: "B1.3 (density, infinity and limit as they relate to number sets)",
    book: "Nelson Principles of Mathematics 9, §1.4 Rational Numbers (between any two rationals)",
    prior: [
      [String.raw`What is the average of \(4\) and \(10\)?`, String.raw`\(\tfrac{4+10}{2}=7\), halfway between them.`],
      [String.raw`Write \(\tfrac{1}{3}\) as a decimal.`, String.raw`\(0.\overline{3}=0.333\ldots\)`],
      [String.raw`Which is bigger, \(0.09\) or \(0.1\)?`, String.raw`\(0.1\) (it is \(0.10\)).`],
    ],
    words: [
      ["Dense", "between any two members of the set there is another member", "the rationals are dense"],
      ["Midpoint", "the number halfway between two numbers: their average", "midpoint of \\(1\\) and \\(2\\) is \\(1.5\\)"],
      ["Infinite", "without end; cannot be counted to a final member", "the natural numbers"],
      ["Sequence", "an ordered list of numbers", "\\(1,\\tfrac12,\\tfrac14,\\dots\\)"],
      ["Limit", "the value a sequence gets as close as you like to", "\\(\\tfrac1n\\) has limit \\(0\\)"],
    ],
  }),

  section("📌 Density: always another number in between", String.raw`
  <p>The <strong>midpoint</strong> (average) of two rational numbers \(a\) and \(b\) is \(\dfrac{a+b}{2}\). It is rational, and it lies exactly between them. Repeat with the new gap and you get another, and another — the gaps never run out.</p>
  ${keyIdea(String.raw`A set is <strong>dense</strong> if between any two of its members there is always another member. The rational numbers are dense. The integers are not: there is no integer between \(3\) and \(4\).`)}
  <p>A second method: rewrite both fractions with a larger common denominator. Between \(\tfrac{1}{5}\) and \(\tfrac{2}{5}\) you see nothing, but as \(\tfrac{10}{50}\) and \(\tfrac{20}{50}\) there are nine fractions in between. For decimals, add a digit: between \(0.6\) and \(0.7\) lie \(0.61,0.62,\dots,0.69\).</p>
  <p>Press <em>Insert midpoints</em> a few times, then <em>Zoom</em>. However far you zoom, a gap always holds more rational numbers.</p>`),

  widget("densityZoom"),

  section("📌 Infinity", String.raw`
  <ul>
    <li><strong>No largest number.</strong> Whatever number you name, adding \(1\) gives a bigger one. The natural numbers go on forever.</li>
    <li><strong>No smallest positive rational.</strong> If \(\tfrac{1}{n}\) were the smallest, \(\tfrac{1}{2n}\) would be smaller and still positive.</li>
    <li><strong>No "largest number less than 1".</strong> For any \(x<1\), the midpoint \(\tfrac{x+1}{2}\) is still less than \(1\) but bigger than \(x\).</li>
    <li><strong>Infinitely many numbers in a small interval.</strong> Between \(0\) and \(1\) alone there are infinitely many rational numbers — and infinitely many irrational ones too, like \(\tfrac{\sqrt2}{2}\).</li>
  </ul>
  <p>Infinity (\(\infty\)) is not a number you can reach or calculate with like \(5\); it describes a process that never ends.</p>`),

  section("📌 Limits", String.raw`
  <p>Some sequences go on forever but settle toward a single value. The terms of \(\tfrac{1}{2},\tfrac{3}{4},\tfrac{7}{8},\tfrac{15}{16},\dots\) get closer and closer to \(1\): the gap to \(1\) is \(\tfrac12,\tfrac14,\tfrac18,\tfrac{1}{16},\dots\), halving every time. We say the <strong>limit</strong> of the sequence is \(1\).</p>
  ${ZENO}
  <p>The ancient Greek thinker Zeno used this picture to argue that you could never reach the wall. Limits resolve the puzzle: the infinitely many steps add up to a finite distance, \(8\) m.</p>
  ${keyIdea(String.raw`A sequence has a <strong>limit</strong> \(L\) if its terms get as close to \(L\) as you like and stay that close. The terms do not have to ever equal \(L\).`)}
  <p><strong>Why \(0.\overline{9}=1\).</strong> The sequence \(0.9,0.99,0.999,\dots\) has limit \(1\), and \(0.\overline{9}\) means the value of the whole infinite decimal — its limit. Algebra agrees: if \(x=0.\overline{9}\) then \(10x=9.\overline{9}\), so \(9x=9\) and \(x=1\).</p>`),

  widget("limitSteps"),

  section("📌 Watch out", watchOut([
    String.raw`<strong>"The next number after \(\tfrac12\)" does not exist</strong> in the rationals — any candidate has another rational between it and \(\tfrac12\).`,
    String.raw`<strong>A limit is not always reached.</strong> \(\tfrac1n\) gets close to \(0\) but every term is positive.`,
    String.raw`<strong>Getting closer is not enough.</strong> \(1,\tfrac12,\tfrac13,\dots\) gets closer to \(-1\) too, but not <em>as close as you like</em>; its limit is \(0\), not \(-1\).`,
  ])),

  examples([
    ["Three numbers between two fractions", String.raw`Find three rational numbers between \(\dfrac{2}{7}\) and \(\dfrac{3}{7}\).`,
      [String.raw`There is no whole numerator between \(2\) and \(3\), so use a larger denominator: multiply top and bottom by \(4\).`, String.raw`\(\tfrac{2}{7}=\tfrac{8}{28}\) and \(\tfrac{3}{7}=\tfrac{12}{28}\).`, String.raw`Between them: \(\tfrac{9}{28},\ \tfrac{10}{28}=\tfrac{5}{14},\ \tfrac{11}{28}\).`],
      String.raw`\(\tfrac{9}{28},\ \tfrac{5}{14},\ \tfrac{11}{28}\) (many other answers are possible)`],
    ["Between two negative decimals", String.raw`Find a number between \(-0.31\) and \(-0.3\).`,
      [String.raw`Write both to three decimal places: \(-0.310\) and \(-0.300\).`, String.raw`Any of \(-0.309,\dots,-0.301\) works; the midpoint is \(\tfrac{-0.31+(-0.3)}{2}=-0.305\).`],
      String.raw`\(-0.305\) (for example)`,
      numberLine({ min: -1, max: 0, dots: [{ at: -0.31, label: "", color: "blue" }, { at: -0.3, label: "", color: "blue" }], caption: "Zoomed out, −0.31 and −0.3 look like one point — zooming in shows room for many more numbers.", id: "nl101", unit: 480 })],
    ["No largest number below 1", String.raw`Sam claims \(0.99\) is the largest number less than \(1\). Show that Sam is wrong.`,
      [String.raw`Take the midpoint of \(0.99\) and \(1\): \(\tfrac{0.99+1}{2}=0.995\).`, String.raw`\(0.995<1\), but \(0.995>0.99\).`, String.raw`The same argument works for any number less than \(1\), so no largest one exists.`],
      String.raw`\(0.995\) is a counterexample; there is no largest number less than \(1\)`],
    ["Describing a limit", String.raw`What is the limit of the sequence \(2,\ 1.5,\ 1.25,\ 1.125,\ \dots\)? Write the \(n\)th term.`,
      [String.raw`Subtract \(1\) from each term: \(1,\ 0.5,\ 0.25,\ 0.125,\dots\) — these halve each time.`, String.raw`So the \(n\)th term is \(1+\left(\tfrac12\right)^{n-1}\).`, String.raw`As \(n\) grows, \(\left(\tfrac12\right)^{n-1}\) gets as close to \(0\) as you like, so the terms approach \(1\).`],
      String.raw`the limit is \(1\)`],
    ["Halving the distance", String.raw`You stand \(8\) m from a wall and repeatedly walk half of the remaining distance. How far have you walked after \(5\) steps, and what is the limit?`,
      [String.raw`Steps: \(4,\ 2,\ 1,\ \tfrac12,\ \tfrac14\) m.`, String.raw`After 5 steps: \(4+2+1+0.5+0.25=7.75\) m.`, String.raw`The distance left after \(n\) steps is \(8\left(\tfrac12\right)^n\), which approaches \(0\).`],
      String.raw`\(7.75\) m after 5 steps; the total approaches the limit \(8\) m`],
  ]),

  practice([
    q("midpoint", String.raw`Find the midpoint of \(\tfrac{3}{8}\) and \(\tfrac{5}{6}\). Give a fraction.`, frac(29, 48),
      String.raw`Average them: \(\tfrac{a+b}{2}\). Add with the LCD \(24\) first.`, [String.raw`\(\tfrac{9}{24}+\tfrac{20}{24}=\tfrac{29}{24}\).`, String.raw`\(\tfrac{29}{24}\div2=\tfrac{29}{48}\).`], String.raw`\(\tfrac{29}{48}\)`, { placeholder: "a fraction like 3/4" }),
    q("negative midpoint", String.raw`Find the midpoint of \(-1.4\) and \(-1.2\).`, num(-1.3),
      "Add them and divide by 2.", [String.raw`\(-1.4+(-1.2)=-2.6\).`, String.raw`\(-2.6\div2=-1.3\).`], String.raw`\(-1.3\)`),
    q("limit", String.raw`What is the limit of the sequence \(3+\tfrac{1}{n}\): \(4,\ 3.5,\ 3.\overline{3},\ 3.25,\dots\)?`, num(3),
      String.raw`What happens to \(\tfrac1n\) when \(n\) is huge?`, [String.raw`\(\tfrac1n\) gets as close to \(0\) as you like.`, String.raw`So \(3+\tfrac1n\) gets as close to \(3\) as you like.`], String.raw`\(3\)`),
    q("repeating nines", String.raw`What number is \(2.\overline{9}=2.999\ldots\) equal to?`, num(3),
      String.raw`Use \(0.\overline{9}=1\).`, [String.raw`\(2.\overline{9}=2+0.\overline{9}\).`, String.raw`\(=2+1=3\).`], String.raw`\(3\)`),
    q("smallest fraction?", String.raw`True or false: there is a smallest positive fraction.`, choice(["True", "False"], 1),
      String.raw`If someone names one, can you always find a smaller positive fraction?`, [String.raw`For any positive fraction \(\tfrac{a}{b}\), the fraction \(\tfrac{a}{2b}\) is half as big and still positive.`, "So no smallest one can exist."], "False"),
  ]),

  wrapUp({
    qas: [
      ["How many numbers are there between 0 and 1?", "Infinitely many — infinitely many rationals and infinitely many irrationals."],
      [String.raw`Is \(0.\overline{9}\) really equal to \(1\), or just very close?`, String.raw`Exactly equal. If they were different, some number would lie between them — but no number fits between \(0.\overline{9}\) and \(1\).`],
      ["Are the irrational numbers dense too?", String.raw`Yes. Between any two real numbers there are infinitely many rationals <em>and</em> infinitely many irrationals.`],
      ["Is infinity a number?", "Not in the arithmetic of this course. It describes a quantity that never ends; you cannot add or subtract it like an ordinary number."],
      ["Where are limits used?", "Calculus is built on them: speed at an instant, area under a curve. Even today, computers approximate π or square roots with sequences that approach a limit."],
    ],
    summary: [
      String.raw`The rationals are dense: the midpoint \(\tfrac{a+b}{2}\) is always a rational number between \(a\) and \(b\).`,
      "There is no largest number, no smallest positive rational, and no next rational.",
      "A limit is the value a sequence gets as close as you like to; the terms need not reach it.",
      String.raw`\(0.\overline{9}=1\); the infinite halving sum \(\tfrac12+\tfrac14+\tfrac18+\dots\) equals \(1\).`,
    ],
    next: "Chapter 1 review and test. Then Chapter 2 uses these number skills to build and simplify algebraic expressions.",
  }),
];
