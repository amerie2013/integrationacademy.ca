// MTH1W 1.10 — Density, Infinity & Limit (self-study format)
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, numberLine, tape, q, num, frac, choice, hard, fig } from "./lib.mjs";
import { graph } from "./bank/svg.mjs";

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
      [String.raw`<b>Density property.</b> Between any two different rational numbers there is always another rational number, so there are infinitely many.`,
        String.raw`<b>Problem:</b> with denominator \(7\) there is no whole numerator between \(2\) and \(3\). <b>Fix:</b> make the pieces smaller by using an equivalent fraction with a larger denominator.`,
        String.raw`<b>Multiply top and bottom by \(4\):</b> \(\tfrac{2}{7}=\tfrac{8}{28}\) and \(\tfrac{3}{7}=\tfrac{12}{28}\).`,
        String.raw`<b>Read off the numbers between:</b> \(\tfrac{9}{28},\ \tfrac{10}{28}=\tfrac{5}{14},\ \tfrac{11}{28}\).`,
        String.raw`<b>Check with decimals:</b> \(\tfrac27\approx0.286\), \(\tfrac{9}{28}\approx0.321\), \(\tfrac{5}{14}\approx0.357\), \(\tfrac{11}{28}\approx0.393\), \(\tfrac37\approx0.429\) — all in order ✓`],
      String.raw`\(\tfrac{9}{28},\ \tfrac{5}{14},\ \tfrac{11}{28}\) (many other answers are possible)`],
    ["Between two negative decimals", String.raw`Find a number between \(-0.31\) and \(-0.3\).`,
      [String.raw`<b>Midpoint formula.</b> The number halfway between \(a\) and \(b\) is \[m=\frac{a+b}{2}\] and it always lies between them.`,
        String.raw`<b>Line up the decimal places:</b> \(-0.310\) and \(-0.300\). Now the gap is visible: \(-0.309,\ -0.308,\dots,-0.301\) all fit.`,
        String.raw`<b>Midpoint:</b> \(\tfrac{-0.31+(-0.3)}{2}=\tfrac{-0.61}{2}=-0.305\).`,
        String.raw`<b>Check the order:</b> \(-0.310<-0.305<-0.300\), because on the number line \(-0.305\) is right of \(-0.310\) and left of \(-0.300\) ✓`],
      String.raw`\(-0.305\) (for example)`,
      numberLine({ min: -1, max: 0, dots: [{ at: -0.31, label: "", color: "blue" }, { at: -0.3, label: "", color: "blue" }], caption: "Zoomed out, −0.31 and −0.3 look like one point — zooming in shows room for many more numbers.", id: "nl101", unit: 480 })],
    ["No largest number below 1", String.raw`Sam claims \(0.99\) is the largest number less than \(1\). Show that Sam is wrong.`,
      [String.raw`<b>Logic.</b> To disprove "\(0.99\) is the largest", find one number that is bigger than \(0.99\) and still less than \(1\).`,
        String.raw`<b>Use the midpoint:</b> \(\tfrac{0.99+1}{2}=\tfrac{1.99}{2}=0.995\).`,
        String.raw`<b>Check both conditions:</b> \(0.995>0.99\) ✓ and \(0.995<1\) ✓.`,
        String.raw`<b>Generalize:</b> for <i>any</i> number \(x<1\), the midpoint \(\tfrac{x+1}{2}\) is between \(x\) and \(1\). So whatever number someone names, there is a bigger one below \(1\): no largest one exists.`],
      String.raw`\(0.995\) is a counterexample; there is no largest number less than \(1\)`],
    ["Describing a limit", String.raw`What is the limit of the sequence \(2,\ 1.5,\ 1.25,\ 1.125,\ \dots\)? Write the \(n\)th term.`,
      [String.raw`<b>Idea.</b> A sequence has limit \(L\) if its terms get as close to \(L\) as we like (and stay close) as \(n\) grows.`,
        String.raw`<b>Look for the pattern:</b> subtract \(1\) from each term: \(1,\ 0.5,\ 0.25,\ 0.125,\dots\). Each is half the one before, so these are \(\left(\tfrac12\right)^0,\left(\tfrac12\right)^1,\left(\tfrac12\right)^2,\dots\)`,
        String.raw`<b>\(n\)th term:</b> \[t_n=1+\left(\tfrac12\right)^{n-1}\] Check: \(t_1=1+1=2\) ✓, \(t_4=1+\tfrac18=1.125\) ✓.`,
        String.raw`<b>Find the limit:</b> \(\left(\tfrac12\right)^{n-1}\) keeps halving towards \(0\) (e.g. \(t_{11}=1+\tfrac{1}{1024}\approx1.001\)), so \(t_n\) gets as close to \(1+0=1\) as we like.`],
      String.raw`the limit is \(1\)`,
      fig(graph({ series: [{ pts: [[1, 2], [2, 1.5], [3, 1.25], [4, 1.125], [5, 1.0625], [6, 1.03125], [7, 1.015625]], color: "blue", join: false }, { pts: [[0, 1], [8, 1]], color: "red", label: "y = 1" }], xmin: 0, xmax: 8, ymin: 0, ymax: 2.5, xstep: 1, ystep: 0.5, xlabel: "n", ylabel: "tₙ" }), "The terms fall towards the red line y = 1 but never reach it.")],
    ["Halving the distance", String.raw`You stand \(8\) m from a wall and repeatedly walk half of the remaining distance. How far have you walked after \(5\) steps, and what is the limit?`,
      [String.raw`<b>Model.</b> Each step is half of what is left, so the distance left is multiplied by \(\tfrac12\) each step: after \(n\) steps \[\text{left}=8\left(\tfrac12\right)^n,\qquad\text{walked}=8-8\left(\tfrac12\right)^n\]`,
        String.raw`<b>The steps:</b> \(4,\ 2,\ 1,\ \tfrac12,\ \tfrac14\) m (each half of the remaining distance).`,
        String.raw`<b>Add them:</b> \(4+2+1+0.5+0.25=7.75\) m.`,
        String.raw`<b>Check with the formula:</b> left \(=8\left(\tfrac12\right)^5=\tfrac{8}{32}=0.25\) m, walked \(=8-0.25=7.75\) m ✓`,
        String.raw`<b>Limit:</b> \(8\left(\tfrac12\right)^n\to0\) as \(n\) grows, so the distance walked approaches \(8-0=8\) m but never exceeds it.`],
      String.raw`\(7.75\) m after 5 steps; the total approaches the limit \(8\) m`,
      table(["Step", "Walk (m)", "Walked so far (m)", "Left (m)"], [["1", "4", "4", "4"], ["2", "2", "6", "2"], ["3", "1", "7", "1"], ["4", "0.5", "7.5", "0.5"], ["5", "0.25", "7.75", "0.25"]])],
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

  ...hard([
    ["Halving a gap", String.raw`Find the midpoint of \(\tfrac17\) and \(\tfrac16\). If you keep taking the midpoint with \(\tfrac16\), how many steps does it take for the gap to \(\tfrac16\) to fall below \(0.001\)?`,
      [String.raw`Use the common denominator \(42\): \(\tfrac{6}{42}\) and \(\tfrac{7}{42}\).`,
        String.raw`The midpoint is \(\tfrac{6.5}{42}=\tfrac{13}{84}\).`,
        String.raw`The first gap is \(\tfrac{1}{42}\), and each midpoint cuts it in half. After \(k\) steps it is \(\tfrac{1}{42\times2^k}\).`,
        String.raw`We need \(42\times2^k>1000\), so \(2^k>23.8\). Since \(2^4=16\) and \(2^5=32\), \(k=5\).`],
      String.raw`the midpoint is \(\tfrac{13}{84}\), and \(5\) steps are needed`],
    ["How close is close enough?", String.raw`The sequence \(a_n=\dfrac{4n-3}{2n}\). Find its limit, and the first \(n\) for which \(a_n\) is within \(0.01\) of the limit.`,
      [String.raw`Split the fraction: \(\dfrac{4n-3}{2n}=2-\dfrac{3}{2n}\).`,
        String.raw`As \(n\) grows, \(\dfrac{3}{2n}\) approaches \(0\), so the limit is \(2\).`,
        String.raw`The gap is \(\dfrac{3}{2n}\). We need \(\dfrac{3}{2n}<0.01\), which means \(2n>300\), so \(n>150\).`,
        String.raw`The first such \(n\) is \(151\).`],
      String.raw`the limit is \(2\), and \(n=151\) is the first term within \(0.01\)`],
    ["An endless bounce with a finite distance", String.raw`A ball is dropped from \(16\) m, and each bounce reaches half the previous height. What total distance does it travel, in the model where it bounces forever?`,
      [String.raw`The bounce heights are \(8,\ 4,\ 2,\ 1,\dots\) Their sum approaches \(16\), just as \(\tfrac12+\tfrac14+\cdots\) approaches \(1\).`,
        String.raw`The ball travels each bounce height twice, once up and once down: \(2\times16=32\) m.`,
        String.raw`Add the first drop: \(16+32=48\) m.`],
      String.raw`the total distance approaches \(48\) m, even with infinitely many bounces`,
      fig(graph({ series: [{ pts: [[0, 16], [1, 8], [2, 4], [3, 2], [4, 1], [5, 0.5], [6, 0.25]], join: false }], xmin: 0, xmax: 7, ymin: 0, ymax: 18, xstep: 1, ystep: 2, xlabel: "bounce number", ylabel: "height (m)" }), "The bounce heights approach 0 m.")],
    ["An irrational number in a tiny gap", String.raw`Find a rational number and an irrational number between \(0.3\) and \(0.31\).`,
      [String.raw`\(0.305\) terminates, so it is a rational number in the gap.`,
        String.raw`Build a decimal that never ends and never repeats: \(0.3010010001\ldots\), with one more zero each time.`,
        String.raw`It starts with \(0.30\), so it is greater than \(0.3\) and less than \(0.31\).`],
      String.raw`\(0.305\) and \(0.3010010001\ldots\) both lie in the gap`],
  ], [
    q("midpoint", String.raw`Find the midpoint of \(\tfrac29\) and \(\tfrac14\).`, frac(17, 72),
      "Add the fractions, then divide by 2.",
      [String.raw`\(\tfrac{8}{36}+\tfrac{9}{36}=\tfrac{17}{36}\).`, String.raw`\(\tfrac{17}{36}\div2=\tfrac{17}{72}\).`], String.raw`\(\tfrac{17}{72}\)`, { placeholder: "a fraction like 2/5" }),
    q("limit", String.raw`What value does \(\dfrac{5n+2}{2n}\) approach as \(n\) gets very large? Give a decimal.`, num(2.5),
      "Split the fraction into two parts.",
      [String.raw`\(\dfrac{5n+2}{2n}=\dfrac52+\dfrac1n\).`, String.raw`\(\dfrac1n\) approaches \(0\), so the limit is \(2.5\).`], String.raw`\(2.5\)`),
    q("close enough", String.raw`What is the first \(n\) for which \(3+\dfrac1n\) is within \(0.002\) of \(3\)?`, num(501),
      "The gap is 1/n. Solve 1/n < 0.002.",
      [String.raw`\(\tfrac1n<0.002\) means \(n>500\).`, String.raw`The first such whole number is \(501\).`], String.raw`\(501\)`),
    q("total distance", String.raw`A ball is dropped from \(20\) m, and each bounce reaches half the previous height. In metres, what value does the total distance travelled approach?`, num(60),
      "The bounce heights add up to 20. Each is travelled twice.",
      [String.raw`Bounce heights: \(10+5+2.5+\cdots\) approaches \(20\).`, String.raw`Up and down: \(40\) m.`, String.raw`Add the first drop: \(20+40=60\) m.`], String.raw`\(60\)`),
    q("repeating decimals", String.raw`Evaluate \(0.\overline{27}+0.\overline{4}\) as a fraction.`, frac(71, 99),
      "Write each decimal as a fraction first.",
      [String.raw`\(0.\overline{27}=\tfrac{27}{99}\) and \(0.\overline{4}=\tfrac49=\tfrac{44}{99}\).`, String.raw`The sum is \(\tfrac{71}{99}\).`], String.raw`\(\tfrac{71}{99}\)`, { placeholder: "a fraction like 2/5" }),
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
