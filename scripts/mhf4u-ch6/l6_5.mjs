// MHF4U 6.5 — Logarithmic Scales (NEW): why logarithmic scales are used, pH, decibels and earthquake magnitude,
// converting both ways, and comparing two values by the ratio 10^(difference).
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";

export const TITLE = "6.5 Logarithmic Scales";
export const ID = "6d4f0006-0001-4001-8001-000000000605";

const S = String.raw;
const L = Math.log10;
const scale = (pts, xmin, xmax, cap) => plane({ view: { xmin, xmax, ymin: -1, ymax: 1.5 }, points: pts.map(([x, label, color = "blue"]) => ({ x, y: 0, label, color })), step: { x: 1, y: 1 } }, cap);
export const blocks = () => [
  intro({
    icon: "📏",
    title: "Logarithmic Scales",
    overview: S`Some quantities range over many powers of 10: the acidity of liquids, the loudness of sounds, the energy of earthquakes. A logarithmic scale records the <em>exponent</em> instead of the number, so a huge range becomes a short one. The price is that equal steps on the scale mean equal <em>ratios</em>, not equal differences: each step of 1 is a factor of 10.`,
    goals: [
      "explain why a logarithmic scale is useful;",
      "calculate pH, sound level and magnitude from a formula;",
      "convert a scale reading back to the original quantity;",
      "compare two readings using \\(10^{\\text{difference}}\\);",
      "read and interpret a logarithmic scale.",
    ],
    curriculum: "A2.4 (solve problems involving logarithmic scales, e.g. pH, decibels, Richter scale)",
    prior: [
      [S`Evaluate \(\log0.001\).`, S`\(-3\).`],
      [S`Write \(10^{2.5}\) as a decimal.`, S`\(\approx316.2\).`],
      [S`If \(\log x=4.2\), what is \(x\)?`, S`\(x=10^{4.2}\approx15\,849\).`],
    ],
    words: [
      ["Logarithmic scale", "a scale that records the logarithm of a quantity", "pH, dB, magnitude"],
      ["pH", "\\(\\text{pH}=-\\log[\\text{H}^+]\\)", "pure water: 7"],
      ["Decibel", "\\(\\beta=10\\log\\dfrac I{I_0}\\), \\(I_0=10^{-12}\\) W/m²", "a whisper is about 30 dB"],
      ["Magnitude", "\\(M=\\log\\dfrac I{I_0}\\) (earthquake intensity)", "magnitude 6 is 10× magnitude 5"],
    ],
  }),

  section("📌 Why a logarithmic scale?", S`
  <p>Hydrogen-ion concentrations in everyday liquids run from about \(10^{-1}\) to \(10^{-13}\) mol/L. On an ordinary number line nearly all of them would sit on top of each other next to 0. Taking the logarithm turns each power of 10 into one step.</p>
  ${scale([[2.3, "lemon"], [4.3, "tomato"], [7, "water", "green"], [8.3, "baking soda", "violet"], [13, "bleach", "violet"]], -0.5, 14.5, "The pH scale: each step to the left is 10 times more acidic.")}
  ${keyIdea(S`On a logarithmic scale, readings that differ by \(d\) correspond to quantities whose <strong>ratio</strong> is \(10^{d}\) (or \(10^{d/10}\) for decibels). Equal steps mean equal factors.`)}`),

  section("📌 Three common scales", S`
  ${table(["Scale", "Formula", "Inverse", "A difference of 1 means"], [
    ["pH", "\\(\\text{pH}=-\\log[\\text{H}^+]\\)", "\\([\\text{H}^+]=10^{-\\text{pH}}\\)", "10 times the acidity"],
    ["sound level", "\\(\\beta=10\\log\\dfrac I{I_0}\\)", "\\(I=I_0\\cdot10^{\\beta/10}\\)", "10 dB = 10 times the intensity"],
    ["magnitude", "\\(M=\\log\\dfrac I{I_0}\\)", "\\(I=I_0\\cdot10^{M}\\)", "10 times the intensity"],
  ])}
  ${plane({ view: { xmin: -0.5, xmax: 10.5, ymin: -0.5, ymax: 10.5 }, curves: [{ f: (x) => L(x) * 10, a: 0.01, color: "violet" }], points: [{ x: 1, y: 0, label: "(1, 0)" }, { x: 10, y: 10, label: "(10, 10)" }], step: { x: 1, y: 1 } }, "Decibels against intensity ratio: multiplying the intensity by 10 adds only 10 dB.")}
  ${watchOut([
    "A pH that is 2 lower is 10² = 100 times more acidic, not 2 times.",
    "pH has a minus sign: a larger concentration gives a smaller pH.",
    "For decibels, divide the difference by 10 before using it as an exponent.",
    "Doubling the intensity adds 10 log 2 ≈ 3 dB, not double the decibels.",
    "Keep the units of I and I₀ the same before dividing.",
  ])}`),

  widget("ibLogGraph", { init: [10, 0, 0] }),

  examples([
    ["pH from a concentration", S`Vinegar has \([\text{H}^+]=3.2\times10^{-4}\) mol/L. Find its pH and decide whether it is acidic.`,
      [S`<b>Formula.</b> \(\text{pH}=-\log[\text{H}^+]\); below 7 is acidic, above 7 is basic.`,
        S`<b>Substitute:</b> \(\text{pH}=-\log\left(3.2\times10^{-4}\right)\approx-(-3.495)=3.49\).`,
        S`<b>Interpret:</b> \(3.49<7\), so vinegar is acidic.`,
        S`<b>Estimate check:</b> \(10^{-4}<3.2\times10^{-4}<10^{-3}\), so the pH is between \(3\) and \(4\) ✓`],
      S`pH \(\approx3.49\), acidic`,
      scale([[3.49, "vinegar 3.49", "amber"], [7, "neutral", "green"]], -0.5, 14.5)],
    ["Concentration from a pH", S`Orange juice has pH \(3.7\). Find \([\text{H}^+]\).`,
      [S`<b>Inverse.</b> \(\text{pH}=-\log[\text{H}^+]\Rightarrow\log[\text{H}^+]=-\text{pH}\Rightarrow[\text{H}^+]=10^{-\text{pH}}\) (definition of a logarithm).`,
        S`<b>Substitute:</b> \([\text{H}^+]=10^{-3.7}\approx2.0\times10^{-4}\) mol/L.`,
        S`<b>Check:</b> \(-\log\left(2.0\times10^{-4}\right)\approx3.70\) ✓`],
      S`\(\approx2.0\times10^{-4}\) mol/L`,
      scale([[3.7, "juice 3.7", "amber"], [7, "neutral", "green"]], -0.5, 14.5)],
    ["Comparing two acids", S`Lemon juice has pH \(2.3\) and a tomato has pH \(4.3\). How many times more acidic is lemon juice?`,
      [S`<b>Rule.</b> \([\text{H}^+]=10^{-\text{pH}}\), so the ratio is \(\dfrac{10^{-2.3}}{10^{-4.3}}=10^{-2.3-(-4.3)}=10^{2}\) (quotient law).`,
        S`<b>Evaluate:</b> \(10^2=100\).`,
        S`<b>Meaning:</b> a difference of \(2\) on the pH scale is a factor of \(100\) in acidity.`,
        S`<b>Check:</b> \(10^{-2.3}\approx0.0050\) and \(10^{-4.3}\approx0.000050\); \(0.0050\div0.000050=100\) ✓`],
      S`\(100\) times`,
      scale([[2.3, "lemon 2.3", "amber"], [4.3, "tomato 4.3", "red"], [7, "neutral", "green"]], -0.5, 14.5)],
    ["Sound level", S`A sound has intensity \(I=10^{-3}\) W/m². Find its level in decibels (\(I_0=10^{-12}\) W/m²).`,
      [S`<b>Formula.</b> \(\beta=10\log\dfrac I{I_0}\).`,
        S`<b>Ratio:</b> \(\dfrac{10^{-3}}{10^{-12}}=10^{-3-(-12)}=10^{9}\).`,
        S`<b>Logarithm:</b> \(\log10^9=9\), so \(\beta=10\times9=90\) dB.`,
        S`<b>Check:</b> \(I_0\cdot10^{90/10}=10^{-12}\cdot10^9=10^{-3}\) ✓`],
      S`\(90\) dB`,
      plane({ view: { xmin: 0, xmax: 140, ymin: -1, ymax: 1.5 }, points: [{ x: 90, y: 0, label: "90 dB", color: "amber" }, { x: 0, y: 0, label: "threshold", color: "green" }], step: { x: 10, y: 1 }, xlabel: "dB" })],
    ["Comparing earthquakes", S`One earthquake has magnitude \(7.2\) and another \(5.4\). How many times as intense is the first?`,
      [S`<b>Rule.</b> \(I=I_0\cdot10^M\), so \(\dfrac{I_1}{I_2}=\dfrac{10^{7.2}}{10^{5.4}}=10^{7.2-5.4}=10^{1.8}\).`,
        S`<b>Evaluate:</b> \(10^{1.8}\approx63.1\).`,
        S`<b>Sense check:</b> a difference of almost \(2\) should be almost \(10^2=100\) times; \(63\) is between \(10\) and \(100\) ✓`],
      S`about \(63\) times as intense`,
      scale([[5.4, "5.4", "blue"], [7.2, "7.2", "red"]], 0, 10, "Magnitudes 5.4 and 7.2: a gap of 1.8 is a factor of 10^1.8.")],
  ]),

  practice([
    q("pH", S`Find the pH of a solution with \([\text{H}^+]=10^{-9}\) mol/L.`, num(9), "pH = −log[H⁺].", [S`\(-\log10^{-9}=9\).`], S`\(9\)`),
    q("concentration", S`A liquid has pH \(5\). Find \([\text{H}^+]\) in scientific notation; enter the exponent of 10.`, num(-5), "[H⁺] = 10^(−pH).", [S`\(10^{-5}\).`], S`\(-5\)`),
    q("decibels", S`A sound is \(10^5\) times the threshold intensity \(I_0\). Find its level in dB.`, num(50), "β = 10 log(I/I₀).", [S`\(10\log10^5=50\).`], S`\(50\)`),
    q("compare", S`How many times as intense is a magnitude \(6\) earthquake as a magnitude \(4\)?`, num(100), "10^(difference).", [S`\(10^{2}=100\).`], S`\(100\)`),
    q("which is true?", S`A pH of 3 compared with a pH of 6 is…`, choice(["1000 times more acidic", "2 times more acidic", "3 times more acidic", "1000 times less acidic"], 0), "Lower pH is more acidic.", [S`\(10^{6-3}=1000\).`], "1000 times more acidic"),
  ]),

  ...hard([
    ["Doubling a sound", S`(a) Show that doubling the intensity of a sound adds about \(3\) dB. (b) A rock concert is \(110\) dB and a busy street is \(80\) dB. How many times as intense is the concert?`,
      [S`<b>(a)</b> From \(\beta=10\log\dfrac I{I_0}\): \(\dfrac I{I_0}=10^{\beta/10}\). Write \(2=10^{\log2}\); then \(\dfrac{2I}{I_0}=10^{\log2}\cdot10^{\beta/10}=10^{\beta/10+\log2}\) (exponent law), so the new level is \(10\left(\frac\beta{10}+\log2\right)=\beta+10\log2\).`,
        S`<b>Value:</b> \(10\log2\approx3.01\) dB.`,
        S`<b>(b)</b> \(\dfrac{I_1}{I_2}=10^{(110-80)/10}=10^{3}=1000\).`,
        S`<b>Check (b):</b> each \(10\) dB is a factor of \(10\); three steps of \(10\) dB give \(10^3\) ✓`],
      S`(a) \(+3.01\) dB (b) \(1000\) times`],
    ["Diluting an acid", S`An acid has pH \(2.6\). It is diluted so that \([\text{H}^+]\) is divided by \(50\). Find the new pH.`,
      [S`<b>Rule.</b> \([\text{H}^+]=10^{-\text{pH}}\). Write \(50=10^{\log50}\); then \(\dfrac{10^{-2.6}}{10^{\log50}}=10^{-(2.6+\log50)}\) (exponent law).`,
        S`<b>So the new pH is</b> \(2.6+\log50\approx2.6+1.699=4.30\).`,
        S`<b>Check:</b> \([\text{H}^+]=10^{-2.6}\approx2.51\times10^{-3}\); divided by \(50\): \(5.02\times10^{-5}\); \(-\log(5.02\times10^{-5})\approx4.30\) ✓`],
      S`pH \(\approx4.30\)`],
  ], [
    q("hard", S`A sound of \(65\) dB is how many times as intense as one of \(45\) dB?`, num(100), "Divide the difference by 10 first.", [S`\(10^{20/10}=100\).`], S`\(100\)`),
    q("hard", S`Find the pH when \([\text{H}^+]=4.5\times10^{-8}\) (two decimals).`, num(-L(4.5e-8), 0.01), "−log(4.5 × 10⁻⁸).", [S`\(\approx7.35\).`], S`\(\approx7.35\)`),
    q("hard", S`An earthquake is \(500\) times as intense as a magnitude \(4.1\) quake. Find its magnitude (one decimal).`, num(4.1 + L(500), 0.05), "Add log 500.", [S`\(4.1+\log500\approx4.1+2.70=6.8\).`], S`\(\approx6.8\)`),
  ]),

  wrapUp({
    qas: [
      ["Why use a logarithmic scale?", "It squeezes values that span many powers of 10 into a short, readable range."],
      ["What does a difference of 1 mean?", "A factor of 10 (for pH and magnitude); for decibels, 10 dB is a factor of 10."],
      ["How do I go back from a reading?", "Undo the logarithm with a power of 10: [H⁺] = 10^(−pH), I = I₀·10^(β/10)."],
      ["Why does pH go down as acidity goes up?", "Because of the minus sign in pH = −log[H⁺]."],
      ["How many decibels does doubling add?", "10 log 2 ≈ 3 dB."],
    ],
    summary: [
      "pH = −log[H⁺]; [H⁺] = 10^(−pH).",
      "β = 10 log(I/I₀); I = I₀·10^(β/10).",
      "Magnitude M = log(I/I₀); ratio of two quakes = 10^(M₁ − M₂).",
      "Equal steps on a log scale are equal ratios.",
    ],
    next: "6.6 reviews the whole chapter: exponentials, logarithms, their graphs, the power law and logarithmic scales.",
  }),
];
