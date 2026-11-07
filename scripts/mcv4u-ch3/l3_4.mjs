// MCV4U 3.4 — Simple Rational Functions (NEW lesson): vertical, horizontal and oblique asymptotes, behaviour near a
// vertical asymptote, intercepts and symmetry, and using f′ and f″ to locate extrema, intervals and concavity
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane, rat } from "./lib.mjs";
import { chart } from "./csign.mjs";
import { tv } from "../mcr3u-extables.mjs";

export const TITLE = "3.4 Simple Rational Functions";
export const ID = "6d4fc003-0001-4001-8001-000000000304";

const S = String.raw;
const VA1 = { xmin: -8, xmax: 6, ymin: -6, ymax: 12 };
const VA2 = { xmin: -4, xmax: 4, ymin: -4, ymax: 5 };
const VA3 = { xmin: -4, xmax: 8, ymin: -6, ymax: 8 };
const VA4 = { xmin: -7, xmax: 5, ymin: -12, ymax: 10 };
const VA5 = { xmin: -4, xmax: 4, ymin: -6, ymax: 7 };
export const blocks = () => [
  intro({
    icon: "🪃",
    title: "Simple Rational Functions",
    overview: S`A rational function \(f(x)=\dfrac{p(x)}{q(x)}\) is a quotient of polynomials. Its graph can break into pieces at the zeros of the denominator and can approach straight lines far away. To sketch one we combine algebra and calculus: the <strong>asymptotes</strong> come from the denominator and from comparing degrees; the <strong>intercepts and symmetry</strong> from the equation; the <strong>intervals of increase and decrease</strong> and the extrema from \(f'\); the <strong>concavity</strong> from \(f''\). Near a vertical asymptote, the signs of the numerator and denominator decide whether the graph shoots up or down.`,
    goals: [
      "find vertical, horizontal and oblique asymptotes;",
      "describe the behaviour of f on each side of a vertical asymptote;",
      "find intercepts and recognize symmetry;",
      "use f′ to find intervals of increase/decrease and extrema of rational functions;",
      "sketch a simple rational function from its key features.",
    ],
    curriculum: "B1.5 (sketch the graph of a rational function using its key features: asymptotes, intercepts, intervals of increase and decrease, extrema, concavity)",
    prior: [
      [S`Where is \(\dfrac{x+1}{x-2}\) not defined?`, S`At \(x=2\).`],
      [S`What does \(\dfrac{3x}{x}\) approach for large \(x\)?`, S`\(3\).`],
      [S`Differentiate \(\dfrac1{x-2}\).`, S`\(-\dfrac1{(x-2)^2}\).`],
    ],
    words: [
      ["Vertical asymptote", "a line \\(x=a\\) where \\(|f(x)|\\to\\infty\\) as \\(x\\to a\\)", "zero of the denominator"],
      ["Horizontal asymptote", "a line \\(y=L\\) with \\(f(x)\\to L\\) as \\(x\\to\\pm\\infty\\)", "compare degrees"],
      ["Oblique asymptote", "a slanted line \\(y=mx+b\\) the graph approaches", "numerator degree one higher"],
      ["Even / odd", "\\(f(-x)=f(x)\\) / \\(f(-x)=-f(x)\\)", "y-axis / origin symmetry"],
    ],
  }),

  section("📌 Finding the asymptotes", S`
  ${table(["Compare degrees of p and q", "End behaviour", "Example"], [
    ["deg p < deg q", "horizontal asymptote \\(y=0\\)", "\\(\\frac{3}{x^2+1}\\)"],
    ["deg p = deg q", "\\(y=\\) ratio of leading coefficients", "\\(\\frac{3x-1}{x+2}\\to3\\)"],
    ["deg p = deg q + 1", "oblique asymptote from long division", "\\(\\frac{x^2+x+4}{x+1}=x+\\frac4{x+1}\\)"],
  ])}
  ${plane({ view: VA1, curves: rat((x) => (3 * x - 1) / (x + 2), [-2], VA1), vlines: [{ x: -2, color: "red", dash: true }], lines: [{ m: 0, b: 3, color: "red", dash: true }], points: [{ x: 1 / 3, y: 0, label: "(⅓, 0)", color: "blue" }, { x: 0, y: -0.5, label: "(0, −½)", color: "blue" }], step: { x: 1, y: 2 } }, "f(x) = (3x − 1)/(x + 2): vertical asymptote x = −2, horizontal asymptote y = 3.")}
  ${keyIdea(S`Vertical asymptotes: zeros of the denominator that are not also zeros of the numerator (check the signs on each side). Horizontal or oblique asymptote: compare degrees, or divide. Then use \(f'\) for increase/decrease and extrema and \(f''\) for concavity, remembering to cut the number line at the vertical asymptotes as well.`)}`),

  section("📌 Explore", S`<p>Choose a rational function. The red dashed lines are its asymptotes and the green dots its turning points. Move the red point toward a vertical asymptote and watch \(f\) and \(f'\) grow without bound; move it far out and watch \(f\) approach the horizontal or oblique asymptote.</p>`),

  widget("rationalSketch", { init: { fn: "c", x: 3 } }),

  section("📌 Behaviour near a vertical asymptote", S`
  <p>Just to the left and right of \(x=a\), the denominator is a tiny positive or negative number. Combine its sign with the sign of the numerator to decide \(+\infty\) or \(-\infty\) on each side.</p>
  ${watchOut([
    "A zero of the denominator that also makes the numerator 0 may be a hole, not an asymptote.",
    "The graph can cross a horizontal asymptote; it cannot cross a vertical one.",
    "Cut the sign chart for f′ and f″ at every vertical asymptote.",
    "An oblique asymptote needs long division: the quotient is the line, the remainder fraction goes to 0.",
    "A squared factor in the denominator gives the same sign on both sides of the asymptote.",
  ])}`),

  examples([
    ["Asymptotes and intercepts", S`Find the asymptotes and intercepts of \(f(x)=\dfrac{3x-1}{x+2}\), and decide where it increases.`,
      [S`<b>Vertical asymptote.</b> The denominator is 0 at \(x=-2\), and the numerator there is \(3(-2)-1=-7\ne0\). A nonzero number over something tending to 0 blows up, so \(x=-2\) is a vertical asymptote.`,
        S`<b>Horizontal asymptote.</b> Divide top and bottom by \(x\): \(f(x)=\dfrac{3-\frac1x}{1+\frac2x}\to\dfrac{3}{1}=3\) as \(x\to\pm\infty\). So \(y=3\).`,
        S`<b>Intercepts.</b> x-intercept: numerator \(=0\), so \(3x-1=0\) and \(x=\tfrac13\). y-intercept: \(f(0)=\dfrac{-1}{2}=-\tfrac12\).`,
        S`<b>Derivative.</b> Quotient rule: \(f'(x)=\dfrac{3(x+2)-(3x-1)(1)}{(x+2)^2}=\dfrac{7}{(x+2)^2}\).`,
        S`<b>Sign chart.</b> Cut at the asymptote too. ${chart({ cuts: [[-2, "-2"]], undef: [-2], d: ["f'(x)", (x) => 7 / (x + 2) ** 2] })}`,
        S`<b>Check.</b> \(f(-3)=\dfrac{-10}{-1}=10\) (left branch, above 3) and \(f(-1)=\dfrac{-4}{1}=-4\) (right branch, below 3). Both branches rise from left to right, as the chart says ✓`],
      S`asymptotes \(x=-2\), \(y=3\); intercepts \(\left(\tfrac13,0\right)\), \(\left(0,-\tfrac12\right)\); increasing on \((-\infty,-2)\) and on \((-2,\infty)\)`,
      plane({ view: VA1, curves: rat((x) => (3 * x - 1) / (x + 2), [-2], VA1), vlines: [{ x: -2, color: "red", dash: true }], lines: [{ m: 0, b: 3, color: "red", dash: true }], points: [{ x: 1 / 3, y: 0, label: "(⅓, 0)", color: "blue" }, { x: 0, y: -0.5, label: "(0, −½)", color: "blue" }, { x: -3, y: 10, label: "(−3, 10)", color: "amber" }], step: { x: 1, y: 2 } }, "Dashed red: the asymptotes x = −2 and y = 3.")],
    ["Two vertical asymptotes", S`Analyze \(f(x)=\dfrac{x^2}{x^2-1}\).`,
      [S`<b>Vertical asymptotes.</b> \(x^2-1=(x-1)(x+1)=0\) at \(x=\pm1\), where the numerator is \(1\ne0\). So \(x=-1\) and \(x=1\).`,
        S`<b>Horizontal asymptote and symmetry.</b> Equal degrees, leading coefficients 1 and 1: \(y=1\). Also \(f(-x)=f(x)\), so the graph is symmetric in the y-axis.`,
        S`<b>Derivative.</b> \(f'(x)=\dfrac{2x(x^2-1)-x^2(2x)}{(x^2-1)^2}=\dfrac{-2x}{(x^2-1)^2}\). It is 0 at \(x=0\) and not defined at \(x=\pm1\).`,
        S`<b>Sign chart.</b> ${chart({ cuts: [[-1, "-1"], [0, "0"], [1, "1"]], undef: [-1, 1], d: ["f'(x)", (x) => (-2 * x) / (x * x - 1) ** 2], tests: [-2, -0.5, 0.5, 2] })}`,
        S`<b>The turning point.</b> \(f(0)=0\), so \((0,0)\) is a local maximum on the middle branch.`,
        S`<b>Check the branches.</b> \(f(0.5)=\dfrac{0.25}{-0.75}=-\tfrac13\lt0\): the middle branch lies below the x-axis apart from \((0,0)\) ✓. \(f(2)=\tfrac43\gt1\): the outer branches approach \(y=1\) from above ✓`],
      S`asymptotes \(x=\pm1\), \(y=1\); local maximum \((0,0)\); symmetric about the y-axis`,
      plane({ view: VA2, curves: rat((x) => (x * x) / (x * x - 1), [-1, 1], VA2), vlines: [{ x: -1, color: "red", dash: true }, { x: 1, color: "red", dash: true }], lines: [{ m: 0, b: 1, color: "red", dash: true }], points: [{ x: 0, y: 0, label: "max (0, 0)", color: "green" }, { x: 2, y: 4 / 3, label: "(2, 4/3)", color: "amber" }], step: { x: 1, y: 1 } })],
    ["Left and right of the asymptote", S`Describe \(f(x)=\dfrac{x+1}{x-2}\) near \(x=2\).`,
      [S`<b>Why it blows up.</b> At \(x=2\) the denominator is 0 and the numerator is 3. Near \(x=2\), \(f(x)\approx\dfrac{3}{\text{tiny number}}\), which is huge. The sign of the tiny number decides \(+\infty\) or \(-\infty\).`,
        S`<b>From the left.</b> For \(x\) slightly less than 2, \(x-2\) is a tiny negative number, so \(f(x)\to-\infty\).`,
        S`<b>From the right.</b> For \(x\) slightly more than 2, \(x-2\) is tiny and positive, so \(f(x)\to+\infty\).`,
        S`<b>Check with a table.</b> ${tv(["\\(x\\)", "1.9", "1.99", "2.01", "2.1"], ["\\(f(x)\\)", "\\(\\frac{2.9}{-0.1}=-29\\)", "\\(\\frac{2.99}{-0.01}=-299\\)", "\\(\\frac{3.01}{0.01}=301\\)", "\\(\\frac{3.1}{0.1}=31\\)"])}`,
        S`<b>Far away.</b> Equal degrees give \(y=\tfrac11=1\). Also \(f'(x)=\dfrac{(x-2)-(x+1)}{(x-2)^2}=\dfrac{-3}{(x-2)^2}\lt0\), so each branch falls: the left branch falls from 1 down to \(-\infty\), and the right branch falls from \(+\infty\) toward 1 ✓`],
      S`\(\lim_{x\to2^-}f(x)=-\infty\), \(\lim_{x\to2^+}f(x)=+\infty\); horizontal asymptote \(y=1\)`,
      plane({ view: VA3, curves: rat((x) => (x + 1) / (x - 2), [2], VA3), vlines: [{ x: 2, color: "red", dash: true }], lines: [{ m: 0, b: 1, color: "red", dash: true }], points: [{ x: -1, y: 0, label: "(−1, 0)", color: "blue" }, { x: 0, y: -0.5, label: "(0, −½)", color: "blue" }], step: { x: 1, y: 2 } })],
    ["An oblique asymptote", S`Analyze \(f(x)=\dfrac{x^2+x+4}{x+1}\).`,
      [S`<b>Divide.</b> The numerator's degree is one more than the denominator's, so divide: \(x^2+x+4=x(x+1)+4\), giving \(f(x)=x+\dfrac{4}{x+1}\).`,
        S`<b>Asymptotes.</b> As \(x\to\pm\infty\), \(\dfrac{4}{x+1}\to0\), so the graph approaches the line \(y=x\) (oblique asymptote). The denominator is 0 at \(x=-1\), where the numerator is \(4\ne0\): vertical asymptote \(x=-1\).`,
        S`<b>Derivative.</b> \(f'(x)=1-\dfrac{4}{(x+1)^2}=\dfrac{(x+1)^2-4}{(x+1)^2}=\dfrac{(x+3)(x-1)}{(x+1)^2}\). Zeros \(x=-3\) and \(x=1\); not defined at \(x=-1\).`,
        S`<b>Sign chart.</b> ${chart({ cuts: [[-3, "-3"], [-1, "-1"], [1, "1"]], undef: [-1], d: ["f'(x)", (x) => 1 - 4 / (x + 1) ** 2] })}`,
        S`<b>Turning points.</b> \(f(-3)=-3+\dfrac{4}{-2}=-5\) (local max) and \(f(1)=1+\dfrac42=3\) (local min).`,
        S`<b>Check.</b> Second derivative \(f''(x)=\dfrac{8}{(x+1)^3}\): \(f''(1)=1\gt0\) (cup, min) and \(f''(-3)=-1\lt0\) (cap, max) ✓. Also the local max \(-5\) is below the local min 3 — possible because they are on different branches ✓`],
      S`local minimum \((1,3)\), local maximum \((-3,-5)\); asymptotes \(x=-1\) and \(y=x\)`,
      plane({ view: VA4, curves: rat((x) => (x * x + x + 4) / (x + 1), [-1], VA4), vlines: [{ x: -1, color: "red", dash: true }], lines: [{ m: 1, b: 0, color: "red", dash: true }], points: [{ x: 1, y: 3, label: "min (1, 3)", color: "green" }, { x: -3, y: -5, label: "max (−3, −5)", color: "green" }], step: { x: 1, y: 2 } }, "Dashed red: x = −1 and the oblique asymptote y = x.")],
    ["A complete sketch", S`Sketch \(f(x)=\dfrac{6x}{x^2+3}\) using its asymptote, symmetry, extrema and inflection points.`,
      [S`<b>Asymptotes and symmetry.</b> \(x^2+3\gt0\), so there is no vertical asymptote. The degree of the top is less than the bottom, so \(y=0\) is the horizontal asymptote. \(f(-x)=-f(x)\): odd, symmetric about the origin.`,
        S`<b>First derivative.</b> \(f'(x)=\dfrac{6(x^2+3)-6x(2x)}{(x^2+3)^2}=\dfrac{6(3-x^2)}{(x^2+3)^2}\), zero at \(x=\pm\sqrt3\). ${chart({ cuts: [[-Math.sqrt(3), "-\\sqrt3"], [Math.sqrt(3), "\\sqrt3"]], d: ["f'(x)", (x) => (6 * (3 - x * x)) / (x * x + 3) ** 2] })}`,
        S`<b>Extreme values.</b> \(f(\sqrt3)=\dfrac{6\sqrt3}{6}=\sqrt3\approx1.73\) (max) and, by symmetry, \(f(-\sqrt3)=-\sqrt3\) (min).`,
        S`<b>Second derivative.</b> \(f''(x)=\dfrac{12x(x^2-9)}{(x^2+3)^3}\), zero at \(x=0\) and \(x=\pm3\). ${chart({ kind: "conc", cuts: [[-3, "-3"], [0, "0"], [3, "3"]], d: ["f''(x)", (x) => (12 * x * (x * x - 9)) / (x * x + 3) ** 3] })}`,
        S`<b>Inflection points.</b> \(f(0)=0\), \(f(3)=\tfrac{18}{12}=1.5\), \(f(-3)=-1.5\).`,
        S`<b>Check.</b> Far right the graph is above 0 and concave up, so it falls toward \(y=0\) from above — matching \(f(10)=\tfrac{60}{103}\approx0.58\) ✓`],
      S`max \((\sqrt3,\sqrt3)\approx(1.73,1.73)\), min \((-1.73,-1.73)\); inflection points \((0,0)\), \((\pm3,\pm1.5)\); approaches 0 at both ends`,
      plane({ view: { xmin: -8, xmax: 8, ymin: -2.2, ymax: 2.2 }, curves: [{ f: (x) => (6 * x) / (x * x + 3), color: "violet" }], points: [{ x: Math.sqrt(3), y: Math.sqrt(3), label: "max", color: "green" }, { x: -Math.sqrt(3), y: -Math.sqrt(3), label: "min", color: "green" }, { x: 0, y: 0, color: "violet" }, { x: 3, y: 1.5, label: "inflection", color: "violet" }, { x: -3, y: -1.5, label: "inflection", color: "violet" }], step: { x: 1, y: 0.5 } })],
  ]),

  practice([
    q("vertical", S`Find the vertical asymptote of \(f(x)=\dfrac{2x+5}{x-4}\): \(x=\,?\)`, num(4),
      "Zero of the denominator.", [S`\(x-4=0\).`], S`\(4\)`),
    q("horizontal", S`Find the horizontal asymptote of \(f(x)=\dfrac{6x-1}{3x+2}\): \(y=\,?\)`, num(2),
      "Equal degrees: ratio of leading coefficients.", [S`\(\frac63\).`], S`\(2\)`),
    q("behaviour", S`How does \(f(x)=\dfrac{1}{(x-1)^2}\) behave near \(x=1\)?`, choice([S`\(f\to+\infty\) on both sides`, S`\(f\to-\infty\) on both sides`, S`\(+\infty\) on the left, \(-\infty\) on the right`, S`\(f\to1\)`], 0),
      "A square is never negative.", [S`The denominator is a small positive number on both sides.`], S`\(+\infty\) on both sides`),
    q("oblique", S`Which is the oblique asymptote of \(f(x)=\dfrac{x^2+2x+3}{x}\)?`, choice([S`\(y=x+2\)`, S`\(y=x\)`, S`\(y=x+3\)`, S`\(y=2x\)`], 0),
      "Divide each term by x.", [S`\(x+2+\frac3x\).`], S`\(y=x+2\)`),
    q("count", S`How many vertical asymptotes does \(f(x)=\dfrac{1}{x^2-5x+6}\) have?`, num(2),
      "Factor the denominator.", [S`\((x-2)(x-3)\).`], S`\(2\)`),
  ]),

  ...hard([
    ["A full analysis", S`Sketch \(f(x)=\dfrac{x^2-4}{x^2-1}\): asymptotes, intercepts, intervals, extrema and concavity.`,
      [S`Write \(f(x)=1-\dfrac{3}{x^2-1}\): vertical asymptotes \(x=\pm1\), horizontal \(y=1\); x-intercepts \(\pm2\), y-intercept 4; even.`, S`\(f'(x)=\dfrac{6x}{(x^2-1)^2}\): decreasing for \(x\lt0\), increasing for \(x\gt0\) (away from \(\pm1\)); local minimum \((0,4)\).`, S`\(f''(x)=\dfrac{-6(3x^2+1)}{(x^2-1)^3}\): concave up on \((-1,1)\), concave down for \(|x|\gt1\); no inflection points.`],
      S`asymptotes \(x=\pm1\), \(y=1\); local minimum \((0,4)\); concave up only between the asymptotes`,
      plane({ view: VA5, curves: rat((x) => (x * x - 4) / (x * x - 1), [-1, 1], VA5), vlines: [{ x: -1, color: "red", dash: true }, { x: 1, color: "red", dash: true }], lines: [{ m: 0, b: 1, color: "red", dash: true }], points: [{ x: 0, y: 4, label: "min (0, 4)", color: "green" }, { x: 2, y: 0, label: "(2, 0)", color: "blue" }, { x: -2, y: 0, label: "(−2, 0)", color: "blue" }], step: { x: 1, y: 1 } })],
    ["Designing the asymptotes", S`Find \(a\) and \(b\) so that \(f(x)=\dfrac{ax+1}{x+b}\) has vertical asymptote \(x=4\) and horizontal asymptote \(y=\tfrac12\). Is \(f\) increasing or decreasing?`,
      [S`Vertical asymptote at \(x=-b\): \(b=-4\). Horizontal asymptote \(y=a\): \(a=\tfrac12\).`, S`\(f'(x)=\dfrac{a\cdot b-1}{(x+b)^2}=\dfrac{-2-1}{(x-4)^2}=\dfrac{-3}{(x-4)^2}\lt0\).`],
      S`\(f(x)=\dfrac{0.5x+1}{x-4}\), decreasing on each branch`,
      plane({ view: { xmin: -6, xmax: 12, ymin: -6, ymax: 6 }, curves: rat((x) => (0.5 * x + 1) / (x - 4), [4], { xmin: -6, xmax: 12 }), vlines: [{ x: 4, color: "red", dash: true }], lines: [{ m: 0, b: 0.5, color: "red", dash: true }], points: [{ x: -2, y: 0, label: "(−2, 0)", color: "blue" }, { x: 0, y: -0.25, label: "(0, −¼)", color: "blue" }], step: { x: 1, y: 1 } })],
  ], [
    q("hard", S`Find the minimum value of \(f(x)=\dfrac{x^2-4}{x^2+4}\).`, num(-1),
      "f′ = 16x/(x² + 4)²: minimum at x = 0.", [S`\(f(0)=-1\).`], S`\(-1\)`),
    q("hard", S`The oblique asymptote of \(f(x)=\dfrac{2x^2+3x-1}{x+1}\) is \(y=mx+b\). Find \(b\).`, num(1),
      "Long division.", [S`\(2x+1-\frac{2}{x+1}\).`], S`\(1\)`),
    q("hard", S`At what \(x\) does \(f(x)=\dfrac{x}{x^2+16}\) have its local maximum?`, num(4),
      "Numerator of f′: 16 − x².", [S`\(x^2=16\), \(x\gt0\).`], S`\(4\)`),
  ]),

  wrapUp({
    qas: [
      ["How do I know if a zero of the denominator is an asymptote?", "If the numerator is not zero there, it is a vertical asymptote. If both are zero, simplify: the factor may cancel and leave a hole."],
      ["Can the graph cross a horizontal asymptote?", "Yes — the asymptote only describes the ends. 6x/(x² + 3) crosses y = 0 at the origin."],
      ["Why cut the sign chart at the asymptotes?", "f and f′ are not defined there, and their signs can switch across the asymptote without passing through 0."],
      ["When is there an oblique asymptote?", "When the numerator's degree is exactly one more than the denominator's; the quotient from long division is the line."],
      ["What order should I follow when sketching?", "Domain and asymptotes, intercepts and symmetry, f′ (intervals, extrema), f″ (concavity, inflection), then plot and join."],
    ],
    summary: [
      "Vertical asymptotes: zeros of the denominator.",
      "Compare degrees for the end behaviour.",
      "Signs near x = a decide ±∞.",
      "Use f′ and f″, cutting at asymptotes.",
    ],
    next: "3.5 brings every tool together for full curve sketches.",
  }),
];
