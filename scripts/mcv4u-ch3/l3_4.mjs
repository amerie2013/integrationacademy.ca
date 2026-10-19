// MCV4U 3.4 — Simple Rational Functions (NEW lesson): vertical, horizontal and oblique asymptotes, behaviour near a
// vertical asymptote, intercepts and symmetry, and using f′ and f″ to locate extrema, intervals and concavity
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane, rat } from "./lib.mjs";

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
      [S`Vertical asymptote \(x=-2\); equal degrees, so \(y=3\).`, S`x-intercept \(\tfrac13\); y-intercept \(-\tfrac12\).`, S`\(f'(x)=\dfrac{3(x+2)-(3x-1)}{(x+2)^2}=\dfrac{7}{(x+2)^2}\gt0\).`],
      S`asymptotes \(x=-2\), \(y=3\); intercepts \(\left(\tfrac13,0\right)\), \(\left(0,-\tfrac12\right)\); increasing on each branch`],
    ["Two vertical asymptotes", S`Analyze \(f(x)=\dfrac{x^2}{x^2-1}\).`,
      [S`Vertical asymptotes \(x=\pm1\); horizontal \(y=1\); even function.`, S`\(f'(x)=\dfrac{2x(x^2-1)-x^2(2x)}{(x^2-1)^2}=\dfrac{-2x}{(x^2-1)^2}\): increasing for \(x\lt0\), decreasing for \(x\gt0\).`, S`Local maximum \((0,0)\).`],
      S`asymptotes \(x=\pm1\), \(y=1\); local maximum \((0,0)\); symmetric about the y-axis`,
      plane({ view: VA2, curves: rat((x) => (x * x) / (x * x - 1), [-1, 1], VA2), vlines: [{ x: -1, color: "red", dash: true }, { x: 1, color: "red", dash: true }], lines: [{ m: 0, b: 1, color: "red", dash: true }], points: [{ x: 0, y: 0, label: "max (0, 0)", color: "green" }], step: { x: 1, y: 1 } })],
    ["Left and right of the asymptote", S`Describe \(f(x)=\dfrac{x+1}{x-2}\) near \(x=2\).`,
      [S`Near 2 the numerator is close to 3 (positive).`, S`\(x\to2^-\): denominator \(\to0^-\), so \(f\to-\infty\). \(x\to2^+\): denominator \(\to0^+\), so \(f\to+\infty\).`, S`Check: \(f(1.9)=-29\), \(f(2.1)=31\).`],
      S`\(\lim_{x\to2^-}f(x)=-\infty\), \(\lim_{x\to2^+}f(x)=+\infty\); horizontal asymptote \(y=1\)`,
      plane({ view: VA3, curves: rat((x) => (x + 1) / (x - 2), [2], VA3), vlines: [{ x: 2, color: "red", dash: true }], lines: [{ m: 0, b: 1, color: "red", dash: true }], points: [{ x: -1, y: 0, label: "(−1, 0)", color: "blue" }, { x: 0, y: -0.5, label: "(0, −½)", color: "blue" }], step: { x: 1, y: 2 } })],
    ["An oblique asymptote", S`Analyze \(f(x)=\dfrac{x^2+x+4}{x+1}\).`,
      [S`Divide: \(f(x)=x+\dfrac{4}{x+1}\); oblique asymptote \(y=x\), vertical asymptote \(x=-1\).`, S`\(f'(x)=1-\dfrac{4}{(x+1)^2}=0\Rightarrow(x+1)^2=4\Rightarrow x=1\) or \(x=-3\).`, S`\(f(1)=3\), \(f(-3)=-5\); \(f''(x)=\dfrac{8}{(x+1)^3}\): \(\gt0\) at 1 (min), \(\lt0\) at \(-3\) (max).`],
      S`local minimum \((1,3)\), local maximum \((-3,-5)\); asymptotes \(x=-1\) and \(y=x\)`,
      plane({ view: VA4, curves: rat((x) => (x * x + x + 4) / (x + 1), [-1], VA4), vlines: [{ x: -1, color: "red", dash: true }], lines: [{ m: 1, b: 0, color: "red", dash: true }], points: [{ x: 1, y: 3, label: "min (1, 3)", color: "green" }, { x: -3, y: -5, label: "max (−3, −5)", color: "green" }], step: { x: 1, y: 2 } })],
    ["A complete sketch", S`Sketch \(f(x)=\dfrac{6x}{x^2+3}\) using its asymptote, symmetry, extrema and inflection points.`,
      [S`No vertical asymptote; \(y=0\) is horizontal; \(f\) is odd.`, S`\(f'(x)=\dfrac{6(3-x^2)}{(x^2+3)^2}\): max \((\sqrt3,\sqrt3)\), min \((-\sqrt3,-\sqrt3)\).`, S`\(f''(x)=\dfrac{12x(x^2-9)}{(x^2+3)^3}\): inflection points at \(x=0\) and \(x=\pm3\), i.e. \((0,0)\), \((3,1.5)\), \((-3,-1.5)\).`],
      S`max \((1.73,1.73)\), min \((-1.73,-1.73)\); inflection points \((0,0)\), \((\pm3,\pm1.5)\); approaches 0 at both ends`,
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
