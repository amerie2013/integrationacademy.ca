// IB AA SL 13.5 — Integration by Substitution: reversing the chain rule, integrals of the form ∫ f(g(x)) g′(x) dx and ∫ g′(x)/g(x) dx, changing limits in definite integrals
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard } from "./lib.mjs";
import { fig, areaDoc } from "./figs13.mjs";

export const TITLE = "13.5 Integration by Substitution";
export const ID = "1baa0013-0001-4001-8001-000000001305";
const S = String.raw;
const PI = Math.PI;
const P = (x, y, label, color = "red") => ({ x, y, label, color });
const shade = (view, step, f, a, b, cap, points = []) => fig(areaDoc({ view, step, curves: [{ f, color: "violet" }], points }, [{ f, a, b, color: "green" }]), cap);

export const blocks = () => [
  intro({
    icon: "🔄",
    title: "Integration by Substitution",
    overview: S`The chain rule says \(\frac{d}{dx}F(g(x))=f(g(x))\,g'(x)\). Read backwards, any integrand that is "a function of g(x), times g′(x)" integrates to \(F(g(x))+C\). Substitution makes this systematic: let \(u=g(x)\), replace \(g'(x)\,dx\) by \(du\), integrate in u, then substitute back. For definite integrals, change the limits to u-values and never return to x.`,
    goals: [
      S`recognise integrands of the form \(f(g(x))\,g'(x)\);`,
      S`integrate by substitution \(u=g(x)\), \(du=g'(x)\,dx\);`,
      S`integrate \(\frac{g'(x)}{g(x)}\) as \(\ln|g(x)|\);`,
      "change the limits of a definite integral to u-values;",
      "find areas using substitution.",
    ],
    curriculum: "SL 5.10 (integration by inspection, or substitution of the form ∫ f(g(x)) g′(x) dx), SL 5.11 (definite integrals)",
    prior: [
      [S`Differentiate \((x^3+1)^6\).`, S`\(18x^2(x^3+1)^5\).`],
      [S`Differentiate \(\ln(x^2+3)\).`, S`\(\frac{2x}{x^2+3}\).`],
      [S`Find \(\int u^4\,du\).`, S`\(\frac{u^5}{5}+C\).`],
    ],
    words: [
      ["Substitution", S`replacing an inner function by a new variable \(u=g(x)\)`, ""],
      ["Differential", S`\(du=g'(x)\,dx\)`, ""],
      ["Inspection", "spotting the antiderivative directly by reversing the chain rule", ""],
      ["Log pattern", S`\(\int\frac{g'(x)}{g(x)}dx=\ln|g(x)|+C\)`, ""],
      ["New limits", S`the values of u at the old x-limits`, ""],
    ],
  }),

  section("📌 Reversing the chain rule", S`
  <p>For \(\int3x^2(x^3+1)^5dx\): let \(u=x^3+1\), so \(du=3x^2dx\). The integral becomes \(\int u^5du=\frac{u^6}{6}+C=\frac{(x^3+1)^6}{6}+C\). On \([0,1]\), u runs from 1 to 2: \(\left[\frac{u^6}{6}\right]_1^2=\frac{63}{6}=10.5\).</p>
  ${shade({ xmin: -0.2, xmax: 1.2, ymin: -2, ymax: 110 }, { x: 0.2, y: 20 }, (x) => 3 * x * x * (x ** 3 + 1) ** 5, 0, 1, "∫₀¹ 3x²(x³ + 1)⁵ dx = 10.5 (u from 1 to 2)")}
  ${table(["Integrand", "u", "Result"], [[S`\(3x^2(x^3+1)^5\)`, S`\(x^3+1\)`, S`\(\frac16(x^3+1)^6+C\)`], [S`\(\sin x\cos^2x\)`, S`\(\cos x\)`, S`\(-\frac13\cos^3x+C\)`], [S`\(xe^{x^2}\)`, S`\(x^2\)`, S`\(\frac12e^{x^2}+C\)`], [S`\(\frac{\ln x}{x}\)`, S`\(\ln x\)`, S`\(\frac12(\ln x)^2+C\)`]])}
  <p>For \(\int_0^{\pi/2}\sin x\cos^2x\,dx\): \(u=\cos x\), \(du=-\sin x\,dx\), limits 1 to 0, giving \(\int_1^0-u^2du=\frac13\).</p>
  ${shade({ xmin: 0, xmax: PI / 2, ymin: -0.05, ymax: 0.45 }, { x: PI / 8, y: 0.1 }, (x) => Math.sin(x) * Math.cos(x) ** 2, 0, PI / 2, "∫₀^{π/2} sin x cos²x dx = 1/3")}
  ${keyIdea(S`Look for an inner function whose derivative (up to a constant) is also a factor. Let it be u.`)}`),

  section("📌 The log pattern and changing limits", S`
  <p>If the numerator is the derivative of the denominator, the result is a logarithm: \(\int\frac{2x}{x^2+3}dx=\ln(x^2+3)+C\). The same idea gives \(\int\frac{\ln x}{x}dx\): \(u=\ln x\), \(du=\frac1x dx\), so \(\int_1^e\frac{\ln x}{x}dx=\int_0^1u\,du=\frac12\).</p>
  ${shade({ xmin: 0.5, xmax: 3.2, ymin: -0.1, ymax: 0.45 }, { x: 0.5, y: 0.1 }, (x) => Math.log(x) / x, 1, Math.E, "∫₁ᵉ (ln x)/x dx = ½ (u from 0 to 1)", [P(Math.E, 1 / Math.E, "x = e")])}
  ${shade({ xmin: -0.2, xmax: 1.3, ymin: -0.2, ymax: 3.2 }, { x: 0.25, y: 0.5 }, (x) => x * Math.exp(x * x), 0, 1, "∫₀¹ xe^{x²} dx = ½(e − 1) ≈ 0.859")}
  ${watchOut([
    S`Replace every x, including dx: \(dx=\frac{du}{g'(x)}\).`,
    "In a definite integral, change the limits to u-values — or substitute back before using x-limits, never a mixture.",
    S`A missing constant factor is fine (adjust by multiplying); a missing x is not.`,
    S`\(\int\frac{g'}{g}=\ln|g|\): keep the absolute value unless g > 0.`,
  ])}`),

  section("📌 Explore", S`<p>Pick an integrand and move the upper limit. The readout shows the substitution, the new limits and the exact value.</p>`),

  widget("ibSubstitution", { init: [0, 1] }),

  examples([
    ["Level 1 · Power", S`Find \(\int2x(x^2-5)^4dx\).`,
      [S`\(u=x^2-5\), \(du=2x\,dx\): \(\int u^4du\).`],
      S`\(\frac15(x^2-5)^5+C\)`],
    ["Level 1 · Log pattern", S`Find \(\int\frac{6x^2}{x^3+2}dx\).`,
      [S`\(u=x^3+2\), \(du=3x^2dx\): \(\int\frac{2}{u}du\).`],
      S`\(2\ln|x^3+2|+C\)`],
    ["Level 2 · Trigonometric", S`Find \(\int\cos x\sin^4x\,dx\).`,
      [S`\(u=\sin x\), \(du=\cos x\,dx\).`],
      S`\(\frac15\sin^5x+C\)`],
    ["Level 2 · Root", S`Find \(\int x\sqrt{x^2+9}\,dx\).`,
      [S`\(u=x^2+9\), \(x\,dx=\frac12du\): \(\frac12\int u^{1/2}du=\frac13u^{3/2}\).`],
      S`\(\frac13(x^2+9)^{3/2}+C\)`],
    ["Level 3 · New limits", S`Evaluate \(\int_0^{\pi/3}\frac{\sin x}{\cos^2x}dx\).`,
      [S`\(u=\cos x\), \(du=-\sin x\,dx\); limits \(1\to\frac12\).`, S`\(\int_1^{1/2}-u^{-2}du=\left[u^{-1}\right]_1^{1/2}=2-1\).`],
      S`\(1\)`,
      shade({ xmin: 0, xmax: 1.3, ymin: -0.2, ymax: 4 }, { x: PI / 12, y: 0.5 }, (x) => Math.sin(x) / Math.cos(x) ** 2, 0, PI / 3, "the area under sin x / cos²x from 0 to π/3 is exactly 1")],
  ]),

  practice([
    q("Level 1 · inspection", S`\(\int3x^2e^{x^3}dx\) equals:`, choice([S`\(e^{x^3}+C\)`, S`\(3e^{x^3}+C\)`, S`\(x^3e^{x^3}+C\)`, S`\(\frac13e^{x^3}+C\)`], 0),
      "u = x³.", [S`\(e^{x^3}+C\).`], S`\(e^{x^3}+C\)`),
    q("Level 1 · definite", S`Evaluate \(\int_0^14x(2x^2+1)^2dx\) (3 d.p.).`, num(26 / 3, 0.001),
      "u = 2x² + 1 from 1 to 3.", [S`\(\left[\frac{u^3}{3}\right]_1^3=\frac{26}{3}\).`], S`\(\approx8.667\)`),
    q("Level 2 · log", S`Evaluate \(\int_0^{\pi/2}\frac{\cos x}{1+\sin x}dx\) (3 d.p.).`, num(Math.log(2), 0.001),
      "u = 1 + sin x from 1 to 2.", [S`\(\ln2\).`], S`\(\approx0.693\)`),
    q("Level 2 · log value", S`Evaluate \(\int_0^2\frac{x}{x^2+1}dx\) (3 d.p.).`, num(0.5 * Math.log(5), 0.001),
      "½ ln(x² + 1).", [S`\(\frac12\ln5\).`], S`\(\approx0.805\)`),
    q("Level 2 · exponential", S`\(\int e^{\cos x}\sin x\,dx\) equals:`, choice([S`\(-e^{\cos x}+C\)`, S`\(e^{\cos x}+C\)`, S`\(e^{\sin x}+C\)`, S`\(-e^{\sin x}+C\)`], 0),
      "u = cos x, du = −sin x dx.", [S`\(-e^{\cos x}+C\).`], S`\(-e^{\cos x}+C\)`),
  ]),

  ...hard([
    ["When x remains: write it in terms of u", S`Evaluate \(\int_0^3x\sqrt{x+1}\,dx\).`,
      [S`\(u=x+1\), \(x=u-1\), \(dx=du\); limits 1 to 4.`, S`\(\int_1^4(u-1)u^{1/2}du=\left[\frac25u^{5/2}-\frac23u^{3/2}\right]_1^4\).`, S`\(=\frac25(31)-\frac23(7)=12.4-4.667\).`],
      S`\(\frac{116}{15}\approx7.733\)`,
      shade({ xmin: -1, xmax: 3.5, ymin: -0.5, ymax: 7 }, { x: 0.5, y: 1 }, (x) => x * Math.sqrt(x + 1), 0, 3, "∫₀³ x√(x + 1) dx = 116/15")],
    ["An area with a squared logarithm", S`Find the area under \(y=\frac{(\ln x)^2}{x}\) from \(x=1\) to \(x=e\).`,
      [S`\(u=\ln x\), \(du=\frac1xdx\); limits 0 to 1.`, S`\(\int_0^1u^2du=\frac13\).`],
      S`\(\frac13\)`,
      shade({ xmin: 0.5, xmax: 3.2, ymin: -0.05, ymax: 0.5 }, { x: 0.5, y: 0.1 }, (x) => Math.log(x) ** 2 / x, 1, Math.E, "the area under (ln x)²/x from 1 to e is 1/3")],
  ], [
    q("Level 3 · tan", S`Evaluate \(\int_0^{\pi/4}\tan x\,dx\) (3 d.p.).`, num(-Math.log(Math.SQRT1_2), 0.001),
      "tan = sin/cos; u = cos x.", [S`\([-\ln\cos x]_0^{\pi/4}=\ln\sqrt2\).`], S`\(\approx0.347\)`),
    q("Level 3 · rewrite", S`Evaluate \(\int_1^2\frac{x}{x+1}dx\) (3 d.p.).`, num(1 - Math.log(1.5), 0.001),
      "u = x + 1, x = u − 1.", [S`\(\int_2^3\left(1-\frac1u\right)du=1-\ln\frac32\).`], S`\(\approx0.595\)`),
    q("Level 3 · unknown limit", S`Find \(k>0\) such that \(\int_0^kxe^{x^2}dx=1\) (3 d.p.).`, num(Math.sqrt(Math.log(3)), 0.001),
      "½(e^{k²} − 1) = 1.", [S`\(e^{k^2}=3\Rightarrow k=\sqrt{\ln3}\).`], S`\(\approx1.048\)`),
  ]),

  wrapUp({
    qas: [
      ["When does substitution work?", "When the integrand is a function of g(x) multiplied by g′(x), up to a constant."],
      ["How do I choose u?", "Usually the inside of a bracket, root, exponent or denominator."],
      ["What happens to the limits?", "Replace them by the u-values at the old limits."],
      ["What if an x is left over?", "Write it in terms of u, as with x = u − 1."],
      ["What is ∫ g′/g dx?", "ln|g(x)| + C."],
    ],
    summary: [
      "u = g(x), du = g′(x) dx.",
      "Integrate in u, then substitute back.",
      "Definite: change the limits.",
      "Numerator = derivative of denominator gives ln.",
    ],
    next: "13.6 uses integration for kinematics and accumulating change.",
  }),
];
