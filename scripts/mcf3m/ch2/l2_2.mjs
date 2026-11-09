// MCF3M 2.2 — Common Factoring: GCF of terms, factoring out a monomial, a negative common factor, a binomial
// common factor, grouping, and a height model.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, fexpr, hard, plane, fig } from "../lib.mjs";
import { areaBox } from "../figs.mjs";
const S = String.raw;

export const TITLE = "2.2 Common Factoring";

export const blocks = () => [
  intro({
    icon: "🧲",
    title: "Common Factoring",
    overview: S`<b>Factoring</b> is expanding in reverse: it rewrites a sum as a product. The first thing to look for is always the <b>greatest common factor</b> (GCF) — the largest number and highest power of the variable that divide every term. Taking it out leaves a simpler bracket, and a factored form tells you at once where an expression is zero. Common factoring is also the first step of every harder factoring method in this chapter.`,
    goals: [
      "find the GCF of two or more monomials;",
      "factor out a monomial GCF, including a negative one, and check by expanding;",
      "factor out a common binomial factor;",
      "factor a four-term polynomial by grouping;",
      "use a factored form to find where a quantity (such as a height) is zero.",
    ],
    curriculum: "A1.3 (factor quadratic expressions in one variable by selecting and applying an appropriate strategy), A1.2 (expanding as the reverse process)",
    prior: [
      [S`What is the GCF of \(18\) and \(24\)?`, S`\(6\).`],
      [S`Expand \(5x(x-3)\).`, S`\(5x^2-15x\).`],
      [S`What is \(x^3\div x\)?`, S`\(x^2\).`],
    ],
    words: [
      ["Factor", "write as a product", "\\(6x+9=3(2x+3)\\)"],
      ["GCF", "greatest common factor of all the terms", "GCF of \\(8x^2\\) and \\(12x\\) is \\(4x\\)"],
      ["Common binomial factor", "the same bracket appears in every term", "\\(x(a+2)+5(a+2)\\)"],
      ["Grouping", "pair up terms, common factor each pair, then the bracket", "\\(x^2+3x+2x+6\\)"],
      ["Fully factored", "no factor can be factored further", "\\(2x(x-5)\\), not \\(x(2x-10)\\)"],
    ],
  }),

  section("📌 Taking out the greatest common factor", S`
  <p>To factor \(8x^2+12x\): the GCF of \(8\) and \(12\) is \(4\); both terms contain \(x\), so the GCF is \(4x\). Divide each term by \(4x\) to fill the bracket: \(8x^2\div4x=2x\) and \(12x\div4x=3\). So \(8x^2+12x=4x(2x+3)\).</p>
  ${fig(areaBox(["2x", "+3"], ["4x"], [["8x²", "12x"]], "8x² + 12x = 4x(2x + 3)"), "Factoring finds the side lengths of a rectangle with the given area.")}
  ${table(["Expression", "GCF", "Factored"], [
    ["\\(6x^2-15x\\)", "\\(3x\\)", "\\(3x(2x-5)\\)"],
    ["\\(-4x^2-20\\)", "\\(-4\\)", "\\(-4(x^2+5)\\)"],
    ["\\(10x^2+5x\\)", "\\(5x\\)", "\\(5x(2x+1)\\)"],
    ["\\(x(x-3)+2(x-3)\\)", "\\((x-3)\\)", "\\((x-3)(x+2)\\)"],
  ])}
  ${keyIdea(S`Always check a factoring by expanding it back. If the leading coefficient is negative, it is usual to take out a negative GCF so that the bracket starts with a positive term; every sign inside then changes.`)}`),

  widget("commonFactor", {}),

  section("⚠️ Common errors", S`
  ${watchOut([
    "When a whole term is the GCF, a 1 is left behind: 3x + 3 = 3(x + 1), not 3(x).",
    "Take out the GREATEST factor: 12x² + 18x = 6x(2x + 3); 2x(6x + 9) is not fully factored.",
    "Taking out a negative changes every sign in the bracket: −2x² + 8x = −2x(x − 4).",
    "In grouping, the two brackets must match exactly before they can be factored out.",
    "x(x + 4) + (x + 4) has a hidden 1: it is (x + 4)(x + 1).",
  ])}`),

  examples([
    ["Find the GCF and factor", S`Factor fully: \(18x^2-24x\).`,
      [S`<b>Numbers.</b> The factors of \(18\) are \(1,2,3,6,9,18\); of \(24\): \(1,2,3,4,6,8,12,24\). The greatest common one is \(6\).`,
        S`<b>Variable.</b> \(x^2\) and \(x\) share one factor of \(x\) (the lower power). So the GCF is \(6x\).`,
        S`<b>Divide each term.</b> \(18x^2\div6x=3x\) and \(-24x\div6x=-4\). So \(18x^2-24x=6x(3x-4)\).`,
        S`<b>Fully factored?</b> \(3\) and \(4\) have no common factor, and \(-4\) has no \(x\): yes.`,
        S`<b>Check by expanding.</b> \(6x\cdot3x-6x\cdot4=18x^2-24x\) ✓`],
      S`\(6x(3x-4)\)`,
      fig(areaBox(["3x", "−4"], ["6x"], [["18x²", "−24x"]], "18x² − 24x"), "The GCF 6x is the shared side.")],

    ["A three-term expression", S`Factor \(10x^2+15x-35\).`,
      [S`<b>GCF.</b> \(10,\,15,\,35\) share \(5\); the last term has no \(x\), so the GCF is just \(5\).`,
        S`<b>Divide.</b> \(10x^2\div5=2x^2\), \(15x\div5=3x\), \(-35\div5=-7\).`,
        S`<b>Factored form.</b> \(5(2x^2+3x-7)\).`,
        S`<b>Check.</b> \(5(2x^2)+5(3x)+5(-7)=10x^2+15x-35\) ✓`,
        S`<b>Note.</b> The bracket is a trinomial; later lessons show how to factor some trinomials further (this one: \(2x^2+3x-7\) does not factor over the integers).`],
      S`\(5(2x^2+3x-7)\)`,
      fig(areaBox(["2x²", "+3x", "−7"], ["5"], [["10x²", "15x", "−35"]], "10x² + 15x − 35"), "The common factor 5 is the shared side of all three pieces.")],

    ["A negative common factor in a height model", S`A ball is thrown upward: \(h(t)=-5t^2+30t\). Factor \(h(t)\) with a negative GCF and use it to find when the ball is at ground level.`,
      [S`<b>GCF.</b> \(5\) and \(t\) divide both terms; the leading coefficient is negative, so take out \(-5t\).`,
        S`<b>Divide.</b> \(-5t^2\div(-5t)=t\) and \(30t\div(-5t)=-6\). So \(h(t)=-5t(t-6)\).`,
        S`<b>Check.</b> \(-5t(t)-5t(-6)=-5t^2+30t\) ✓`,
        S`<b>Use the factors.</b> A product is zero when a factor is zero: \(-5t=0\Rightarrow t=0\), or \(t-6=0\Rightarrow t=6\).`,
        S`<b>Meaning.</b> The ball leaves the ground at \(0\) s and lands at \(6\) s. The graph crosses the \(t\)-axis at both ✓`],
      S`\(h(t)=-5t(t-6)\); ground level at \(t=0\) and \(t=6\) s`,
      plane({ view: { xmin: -0.5, xmax: 7, ymin: -5, ymax: 50 }, curves: [{ f: (t) => -5 * t * t + 30 * t, a: 0, b: 6, color: "violet" }], points: [{ x: 0, y: 0, label: "(0, 0)", color: "amber" }, { x: 6, y: 0, label: "(6, 0)", color: "amber" }, { x: 3, y: 45, label: "(3, 45)", color: "blue" }], step: { x: 1, y: 5 }, xlabel: "t (s)", ylabel: "h (m)" })],

    ["A common binomial factor", S`Factor \(3x(x+4)-5(x+4)\).`,
      [S`<b>Look at the terms.</b> The two terms are \(3x(x+4)\) and \(-5(x+4)\). Both contain the factor \((x+4)\).`,
        S`<b>Take it out.</b> Think of \((x+4)\) as one block \(B\): \(3xB-5B=B(3x-5)\).`,
        S`<b>Result.</b> \((x+4)(3x-5)\).`,
        S`<b>Check by expanding.</b> \((x+4)(3x-5)=3x^2-5x+12x-20=3x^2+7x-20\), and the original is \(3x^2+12x-5x-20=3x^2+7x-20\) ✓`,
        S`<b>Graph check.</b> Both forms are zero at \(x=-4\) and \(x=\tfrac53\) ✓`],
      S`\((x+4)(3x-5)\)`,
      plane({ view: { xmin: -6, xmax: 3, ymin: -26, ymax: 10 }, curves: [{ f: (x) => 3 * x * x + 7 * x - 20, color: "violet" }], points: [{ x: -4, y: 0, label: "(−4, 0)", color: "amber" }, { x: 5 / 3, y: 0, label: "(1.67, 0)", color: "amber" }], step: { x: 1, y: 4 } })],

    ["Factor by grouping", S`Factor \(2x^2-6x+5x-15\) by grouping.`,
      [S`<b>Group in pairs.</b> \((2x^2-6x)+(5x-15)\).`,
        S`<b>Common factor each pair.</b> \(2x^2-6x=2x(x-3)\) and \(5x-15=5(x-3)\).`,
        S`<b>Matching brackets.</b> Both pairs contain \((x-3)\), so \(2x(x-3)+5(x-3)=(x-3)(2x+5)\).`,
        S`<b>Check by expanding.</b> \((x-3)(2x+5)=2x^2+5x-6x-15=2x^2-x-15\), and the original simplifies to \(2x^2-x-15\) ✓`,
        S`<b>Why it matters.</b> Grouping is exactly how trinomials \(ax^2+bx+c\) are factored in lesson 2.4: split the middle term, then group.`],
      S`\((x-3)(2x+5)\)`,
      fig(areaBox(["2x", "+5"], ["x", "−3"], [["2x²", "5x"], ["−6x", "−15"]], "(x − 3)(2x + 5)"), "Grouping rebuilds the four pieces of the area model.")],
  ]),

  practice([
    q("gcf", S`Factor fully: \(14x^2+21x\).`, fexpr("7*x*(2*x+3)"), "GCF 7x.", [S`\(7x(2x+3)\).`], S`\(7x(2x+3)\)`),
    q("gcf", S`Factor fully: \(-3x^2+12x\) (take out a negative GCF).`, fexpr("-3*x*(x-4)"), "GCF −3x.", [S`\(-3x(x-4)\).`], S`\(-3x(x-4)\)`),
    q("gcf", S`What is the GCF of \(16x^2\), \(24x\) and \(40\)?`, choice(["8", "8x", "4", "16x"], 0), "The last term has no x.", [S`GCF of \(16,24,40\) is \(8\); not every term has \(x\).`], S`\(8\)`),
    q("binomial", S`Factor \(x(x-2)+7(x-2)\).`, fexpr("(x-2)*(x+7)"), "Common bracket (x − 2).", [S`\((x-2)(x+7)\).`], S`\((x-2)(x+7)\)`),
    q("grouping", S`Factor by grouping: \(x^2+4x+3x+12\).`, fexpr("(x+4)*(x+3)"), "x(x + 4) + 3(x + 4).", [S`\((x+4)(x+3)\).`], S`\((x+4)(x+3)\)`),
  ]),

  ...hard([
    ["Factor, then evaluate cleverly", S`Factor \(x^2-17x\) and use the result to evaluate it at \(x=117\) without a calculator.`,
      [S`<b>Factor.</b> \(x^2-17x=x(x-17)\).`,
        S`<b>Evaluate.</b> \(117(117-17)=117\times100=11\,700\).`,
        S`<b>Check.</b> \(117^2=13\,689\); \(13\,689-1989=11\,700\) ✓`],
      S`x(x − 17) = 11 700 at x = 117`],
    ["Grouping with negatives", S`Factor \(6x^2-4x-9x+6\).`,
      [S`<b>Group.</b> \((6x^2-4x)+(-9x+6)\).`,
        S`<b>Factor each.</b> \(2x(3x-2)\) and \(-3(3x-2)\): take out \(-3\) so the brackets match.`,
        S`<b>Common bracket.</b> \((3x-2)(2x-3)\).`,
        S`<b>Check.</b> \(6x^2-9x-4x+6\) ✓`],
      S`(3x − 2)(2x − 3)`,
      fig(areaBox(["2x", "−3"], ["3x", "−2"], [["6x²", "−9x"], ["−4x", "+6"]], "(3x − 2)(2x − 3)"), "")],
  ], [
    q("hard", S`Factor fully: \(12x^3-18x^2\).`, fexpr("6*x^2*(2*x-3)"), "GCF 6x².", [S`\(6x^2(2x-3)\).`], S`\(6x^2(2x-3)\)`),
    q("hard", S`Factor \(5x(2x-1)-(2x-1)\).`, fexpr("(2*x-1)*(5*x-1)"), "The second term is −1·(2x − 1).", [S`\((2x-1)(5x-1)\).`], S`\((2x-1)(5x-1)\)`),
    q("hard", S`Factor by grouping: \(3x^2+12x-2x-8\).`, fexpr("(x+4)*(3*x-2)"), "3x(x + 4) − 2(x + 4).", [S`\((x+4)(3x-2)\).`], S`\((x+4)(3x-2)\)`),
    q("hard", S`A rectangle has area \(8x^2+20x\) and width \(4x\). Enter its length.`, { kind: "expr", value: "2*x+5", simplified: true }, "Area ÷ width.", [S`\(8x^2+20x=4x(2x+5)\).`], S`\(2x+5\)`),
    q("hard", S`A rocket's height is \(h=-4.9t^2+49t\). Factor and enter the time (s) it lands.`, num(10), "Take out −4.9t.", [S`\(-4.9t(t-10)=0\Rightarrow t=10\).`], S`\(10\)`),
  ]),

  wrapUp({
    qas: [
      ["What should I always look for first when factoring?", "A greatest common factor of all the terms."],
      ["How do I check my factoring?", "Expand it; you must get the original expression."],
      ["When do I take out a negative?", "Usually when the first term is negative, so the bracket starts with a positive term."],
      ["What is grouping?", "Pair the terms, common factor each pair, then take out the matching bracket."],
      ["Why is factored form useful?", "A product is zero when a factor is zero, so it shows the zeros at once."],
    ],
    summary: [
      "GCF = largest number × lowest power of each shared variable.",
      "Divide every term by the GCF to fill the bracket.",
      "A common bracket can be factored out like a single term.",
      "Grouping: two pairs → two matching brackets → product.",
    ],
    next: "2.3 factors trinomials of the form x² + bx + c.",
  }),
];
