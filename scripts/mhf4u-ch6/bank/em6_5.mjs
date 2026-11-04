// 6.5 Logarithmic Scales — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
const S = String.raw;
const L = Math.log10;
const scale = (pts, xmin, xmax) => planeDoc({ view: { xmin, xmax, ymin: -1, ymax: 1.5 }, points: pts.map(([x, label, color = "blue"]) => ({ x, y: 0, label, color })), step: { x: 1, y: 1 } });

export const E = [
  mc(S`Which formula gives pH?`, S`$\text{pH}=-\log[\text{H}^+]$`, [S`$\text{pH}=\log[\text{H}^+]$`, S`$\text{pH}=10^{-[\text{H}^+]}$`, S`$\text{pH}=\frac1{[\text{H}^+]}$`], "The minus sign makes pH positive for small concentrations."),
  num(S`Find the pH when $[\text{H}^+]=10^{-3}$ mol/L.`, 3, "−log 10⁻³ = 3."),
  num(S`Find the pH when $[\text{H}^+]=10^{-12}$ mol/L.`, 12, "−log 10⁻¹² = 12."),
  mc("A pH of 7 is…", "neutral", ["acidic", "basic", "impossible"], "Pure water has pH 7."),
  mc("A pH of 2 is…", "acidic", ["neutral", "basic", "impossible"], "Below 7 is acidic."),
  num(S`How many times as acidic is pH $3$ as pH $4$?`, 10, "A difference of 1 is a factor of 10."),
  num(S`How many times as acidic is pH $2$ as pH $5$?`, 1000, "10³."),
  num(S`Find the sound level of a sound $10^{6}$ times the threshold intensity.`, 60, "10 log 10⁶ = 60 dB."),
  num(S`A sound $10$ dB louder is how many times as intense?`, 10, "10^(10/10)."),
  num(S`A sound $20$ dB louder is how many times as intense?`, 100, "10^(20/10)."),
  num(S`An earthquake one magnitude higher is how many times as intense?`, 10, "10¹."),
  num(S`How many times as intense is a magnitude $7$ earthquake as a magnitude $4$?`, 1000, "10³."),
  tf("On a logarithmic scale, equal steps mean equal ratios.", true, "Each step of 1 multiplies by 10."),
  tf("A pH of 4 is twice as acidic as a pH of 8.", false, "It is 10⁴ = 10 000 times as acidic."),
  tf("A higher pH means a higher hydrogen-ion concentration.", false, "pH = −log[H⁺]: more H⁺ gives a lower pH."),
  fill(S`$[\text{H}^+]=10^{-\text{pH}}$: for pH $6$, $[\text{H}^+]=10^{\square}$. Fill in the box.`, ["-6", "−6"], "10^(−pH)."),
  fill(S`The threshold of hearing $I_0$ has a level of ____ dB.`, ["0"], "10 log(I₀/I₀) = 10 log 1 = 0."),
  mc("Why are logarithmic scales used?", "the quantities range over many powers of 10", ["the numbers are always negative", "logarithms are always whole numbers", "they make every quantity linear"], "Taking the logarithm turns a huge range into a short one."),
  mc("On the pH scale shown, which liquid is the most acidic?", "lemon", ["water", "milk", "soap"], "Lowest pH is most acidic.", scale([[2.2, "lemon"], [6.6, "milk"], [7, "water", "green"], [10, "soap", "violet"]], -0.5, 14.5)),
  mc("On the scale shown, how many times as intense is the 6.0 quake as the 4.0 quake?", "100", ["2", "20", "1.5"], "10^(6 − 4).", scale([[4, "4.0"], [6, "6.0", "red"]], 0, 10)),
];

export const M = [
  num(S`Find the pH when $[\text{H}^+]=2.5\times10^{-4}$ mol/L (two decimals).`, -L(2.5e-4), "−log(2.5 × 10⁻⁴) ≈ 3.60.", null, 0.01),
  num(S`Find the pH when $[\text{H}^+]=5.0\times10^{-10}$ mol/L (two decimals).`, -L(5e-10), "≈ 9.30.", null, 0.01),
  num(S`Find $[\text{H}^+]$ for pH $4.6$, in units of $10^{-5}$ mol/L (two decimals).`, 10 ** -4.6 / 1e-5, "10^(−4.6) ≈ 2.51 × 10⁻⁵.", null, 0.02),
  num(S`How many times as acidic is pH $3.2$ as pH $5.7$? (nearest whole number)`, Math.round(10 ** 2.5), "10^2.5 ≈ 316.", null, 1),
  num(S`Find the sound level of $I=3\times10^{-6}$ W/m$^2$ ($I_0=10^{-12}$), to one decimal.`, 10 * L(3e6), "10 log(3 × 10⁶) ≈ 64.8 dB.", null, 0.1),
  num(S`Find the intensity of an $80$ dB sound, in units of $10^{-4}$ W/m$^2$.`, 1, "I = 10⁻¹² × 10⁸ = 10⁻⁴."),
  num(S`A $72$ dB sound is how many times as intense as a $57$ dB sound? (one decimal)`, 10 ** 1.5, "10^(15/10).", null, 0.1),
  num(S`Two earthquakes have magnitudes $6.1$ and $4.6$. How many times as intense is the first? (one decimal)`, 10 ** 1.5, "10^1.5.", null, 0.1),
  num(S`An earthquake is $200$ times as intense as a magnitude $3.9$ quake. Find its magnitude (one decimal).`, 3.9 + L(200), "3.9 + log 200 ≈ 6.2.", null, 0.05),
  num(S`By how much does the sound level increase when the intensity is multiplied by $5$? (one decimal)`, 10 * L(5), "10 log 5 ≈ 7.0 dB.", null, 0.1),
  mc("A liquid's [H⁺] is multiplied by 100. Its pH…", "decreases by 2", ["increases by 2", "is multiplied by 100", "decreases by 100"], "log 100 = 2, and the minus sign reverses the change."),
  mc("Two identical speakers each give 70 dB. Together they give about…", "73 dB", ["140 dB", "70 dB", "80 dB"], "Double the intensity adds 10 log 2 ≈ 3 dB."),
  ms("Select every true statement.", ["pH 5 is 100 times as acidic as pH 7", "90 dB is 1000 times as intense as 60 dB", "magnitude 8 is twice as intense as magnitude 4", "a 10-fold increase in [H⁺] lowers pH by 1"], [0, 1, 3], "Magnitude 8 vs 4 is 10⁴ times."),
  tf(S`If $\text{pH}=5.5$, then $10^{-6}<[\text{H}^+]<10^{-5}$.`, true, "10^(−5.5) is between 10⁻⁶ and 10⁻⁵."),
  tf("Adding two 60 dB sounds gives 120 dB.", false, "Intensities add, not decibels: about 63 dB."),
  mc(S`Which concentration has pH closest to $8$?`, S`$1.2\times10^{-8}$`, [S`$8\times10^{-1}$`, S`$1.2\times10^{-7}$`, S`$10^{8}$`], "−log(1.2 × 10⁻⁸) ≈ 7.92."),
  mc("A sound at 0 dB has intensity…", S`$I_0=10^{-12}$ W/m$^2$`, ["0 W/m²", S`$1$ W/m$^2$`, S`$10^{12}$ W/m$^2$`], "0 dB is the threshold of hearing, not silence."),
  mc("On the scale shown, how many times as acidic is coffee (5.0) as sea water (8.0)?", "1000", ["3", "30", "300"], "10^(8 − 5).", scale([[5, "coffee 5.0", "amber"], [8, "sea 8.0", "blue"]], -0.5, 14.5)),
  mc("The graph shows β = 10 log(I/I₀) against I/I₀. Reading it, multiplying the intensity by 10 adds…", "10 dB", ["1 dB", "100 dB", "it doubles the dB"], "Each factor of 10 in I/I₀ adds 10 dB.", planeDoc({ view: { xmin: -0.5, xmax: 10.5, ymin: -0.5, ymax: 11 }, curves: [{ f: (x) => 10 * L(x), a: 0.01, color: "violet" }], points: [{ x: 1, y: 0, label: "(1, 0)", color: "blue" }, { x: 10, y: 10, label: "(10, 10)", color: "blue" }], step: { x: 1, y: 1 } })),
  fill(S`If $\beta=10\log\frac I{I_0}$, then $I=I_0\cdot10^{\square}$. Write the exponent (e.g. b/10).`, ["β/10", "b/10", "beta/10", "\\beta/10"], "Divide by 10, then undo the logarithm."),
];
