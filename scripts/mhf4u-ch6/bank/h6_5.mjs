// 6.5 Logarithmic Scales — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
const S = String.raw;
const L = Math.log10;
const scale = (pts, xmin, xmax) => planeDoc({ view: { xmin, xmax, ymin: -1, ymax: 1.5 }, points: pts.map(([x, label, color = "blue"]) => ({ x, y: 0, label, color })), step: { x: 1, y: 1 } });

export const TOPIC = "6.5 Logarithmic Scales";
export const Q = [
  num(S`A solution with pH $3.4$ is diluted so its $[\text{H}^+]$ is divided by $20$. Find the new pH (two decimals).`, 3.4 + L(20), "Dividing [H⁺] by 20 raises pH by log 20 ≈ 1.30.", null, 0.01),
  num(S`What fraction of the hydrogen ions must be removed to raise pH from $4$ to $4.5$? Give the fraction remaining (three decimals).`, 10 ** -0.5, "[H⁺] is multiplied by 10^(−0.5) ≈ 0.316.", null, 0.002),
  num(S`Three identical machines together produce $85$ dB. What does one machine produce? (one decimal)`, 85 - 10 * L(3), "Tripling adds 10 log 3 ≈ 4.8 dB, so one gives 80.2 dB.", null, 0.1),
  num(S`How many identical $60$ dB sources together give $70$ dB?`, 10, "+10 dB means 10 times the intensity, so 10 sources."),
  num(S`An earthquake of magnitude $7.8$ releases how many times the intensity of two magnitude $6.8$ earthquakes combined?`, 5, "One 7.8 is 10 times one 6.8; two 6.8s are 2 times one 6.8: 10/2 = 5."),
  num(S`A sound must be reduced from $96$ dB to $85$ dB. By what factor must the intensity be divided? (one decimal)`, 10 ** 1.1, "10^(11/10) ≈ 12.6.", null, 0.1),
  num(S`Star magnitude: $m_1-m_2=-2.5\log\frac{b_1}{b_2}$. How many times as bright is a magnitude $-1.5$ star as a magnitude $2$ star? (one decimal)`, 10 ** (3.5 / 2.5), "b₁/b₂ = 10^(3.5/2.5) = 10^1.4 ≈ 25.1.", null, 0.1),
  num(S`Find the magnitude of an earthquake $5000$ times as intense as a magnitude $2.5$ quake (one decimal).`, 2.5 + L(5000), "2.5 + log 5000 ≈ 6.2.", null, 0.05),
  num(S`A pH meter reads $6.2$. A second sample has $4$ times the $[\text{H}^+]$. Find its pH (two decimals).`, 6.2 - L(4), "pH decreases by log 4 ≈ 0.60.", null, 0.01),
  num(S`On a scale where each unit is a factor of $2$ (not $10$), readings $3$ and $8$ differ by what factor?`, 32, "2^(8 − 3) = 2⁵."),
  mc("Which change has the greatest effect on intensity?", "an earthquake going from magnitude 5 to 7", ["a sound going from 60 dB to 70 dB", "pH going from 6 to 7 (as a change in [H⁺])", "a sound going from 40 dB to 55 dB"], "Factors: 100; 10; 10; ≈ 31.6."),
  mc("A sound's intensity is halved. Its level…", "drops by about 3 dB", ["drops by half", "drops by 10 dB", "drops by 50 dB"], "10 log ½ ≈ −3.01 dB."),
  tf("If one earthquake is 1000 times as intense as another, their magnitudes differ by 3.", true, "log 1000 = 3."),
  tf(S`A pH of $0$ is impossible because $\log$ of a concentration is never $0$.`, false, "pH 0 means [H⁺] = 10⁰ = 1 mol/L, which very strong acids reach."),
  ms("Select every pair whose intensities differ by a factor of 100.", ["50 dB and 70 dB", "magnitude 3 and magnitude 5", "pH 4 and pH 6", "40 dB and 42 dB"], [0, 1, 2], "20 dB, 2 magnitudes and 2 pH units each mean ×100; 2 dB is only ≈ 1.6."),
  mc(S`A logarithmic scale is defined by $R=\log\frac{A}{A_0}$. If $A$ doubles, $R$…`, S`increases by $\log2\approx0.301$`, ["doubles", "increases by 2", "increases by 1"], "log(2A/A₀) = log 2 + log(A/A₀)."),
  mc("On the scale shown, how many times as acidic is A as B?", "about 2000", ["about 3", "about 200", "about 20 000"], "10^(6.4 − 3.1) = 10^3.3 ≈ 1995.", scale([[3.1, "A 3.1", "red"], [6.4, "B 6.4"]], -0.5, 14.5)),
  mc("On the scale shown, quake P is magnitude 7.5. Quake Q is 50 times less intense. Where is Q?", "about 5.8", ["about 2.5", "about 7.0", "about 4.5"], "7.5 − log 50 ≈ 7.5 − 1.70.", scale([[7.5, "P 7.5", "red"], [5.8, "Q ?", "blue"]], 0, 10)),
  mc("The graph shows pH against [H⁺] (in units of 10⁻⁵). Which statement is true?", "pH decreases as [H⁺] increases, faster for small [H⁺]", ["pH increases with [H⁺]", "pH is a straight line", "pH is constant"], "pH = −log[H⁺] is a decreasing logarithmic curve.", planeDoc({ view: { xmin: -0.5, xmax: 10.5, ymin: 3.5, ymax: 6.5 }, curves: [{ f: (x) => -L(x * 1e-5), a: 0.1, color: "violet" }], step: { x: 1, y: 0.5 } })),
  num(S`A whisper is $30$ dB and a jet engine is $140$ dB. How many powers of $10$ apart are their intensities?`, 11, "(140 − 30)/10 = 11.", planeDoc({ view: { xmin: -5, xmax: 150, ymin: -1, ymax: 1.5 }, points: [{ x: 30, y: 0, label: "whisper 30", color: "blue" }, { x: 140, y: 0, label: "jet 140", color: "red" }], step: { x: 10, y: 1 } })),
];
