// IB AA SL Worksheet 14.3 — The Normal Distribution (teacher edition)
import { normT } from "./figT.mjs";
import { Phi, normCdf } from "../figs14.mjs";

const S = String.raw;
const r = (v) => (Math.round(v * 10000) / 10000).toFixed(4);

const EXAMPLES = [
  { title: "Below a value", q: S`$X\sim N(80,5^2)$. Find $P(X<88)$.`,
    steps: [S`$z=\frac{88-80}{5}=1.6$.`], ans: S`$\approx${r(Phi(1.6))}$` },
  { title: "Empirical rule", q: S`For the same X, estimate $P(70<X<90)$.`,
    steps: [S`$\mu\pm2\sigma$.`], ans: S`$\approx0.95$` },
  { title: "Above a value", q: S`Find $P(X>77)$ for $X\sim N(80,5^2)$.`,
    steps: [S`$1-P(Z<-0.6)$.`], ans: S`$\approx${r(1 - Phi(-0.6))}$` },
  { title: "Between two values", q: S`Find $P(75<X<82)$ for $X\sim N(80,5^2)$.`,
    fig: normT(80, 5, [{ a: 75, b: 82, color: "green" }], {}, 5.6),
    steps: ["GDC normal cdf(75, 82, 80, 5)."], ans: S`$\approx${r(normCdf(82, 80, 5) - normCdf(75, 80, 5))}$` },
  { title: "z-score", q: S`Find the z-score of 91 for $N(80,5^2)$.`,
    steps: [S`$\frac{91-80}{5}$.`], ans: S`$2.2$` },
  { title: "Comparing results", q: S`Maths: 78, scores $N(70,6^2)$. English: 82, scores $N(75,4^2)$. Which result is better relative to the class?`,
    steps: [S`$z_M=\frac{8}{6}\approx1.33$, $z_E=\frac74=1.75$.`], ans: "English" },
  { title: "Expected number", q: S`Heights of 1200 students are $N(165,8^2)$ cm. How many are expected to be taller than 180 cm?`,
    steps: [S`$P(X>180)=P(Z>1.875)\approx${r(1 - Phi(1.875))}$.`, S`$1200\times${r(1 - Phi(1.875))}$.`], ans: "about 36" },
  { title: "Using symmetry", q: S`$X\sim N(50,\sigma^2)$ and $P(X<45)=0.3$. Find $P(45<X<55)$.`,
    fig: normT(50, 9.53, [{ a: 45, b: 55, color: "green" }, { a: -Infinity, b: 45, color: "red" }, { a: 55, b: Infinity, color: "red" }], {}, 5.6),
    steps: [S`$P(X>55)=0.3$ by symmetry.`, S`$1-0.3-0.3$.`], ans: S`$0.4$` },
  { title: "Standard deviations", q: S`For any normal X, find $P(\mu-1.5\sigma<X<\mu+0.5\sigma)$.`,
    fig: normT(0, 1, [{ a: -1.5, b: 0.5, color: "blue" }], {}, 5.6),
    steps: [S`$P(-1.5<Z<0.5)=\Phi(0.5)-\Phi(-1.5)$.`], ans: S`$\approx${r(Phi(0.5) - Phi(-1.5))}$` },
];

const PROBLEMS = [
  { level: 1, q: S`$Z\sim N(0,1)$. Find $P(Z<0)$.`, recap: "Symmetry.", ans: S`$0.5$` },
  { level: 1, q: S`$X\sim N(10,2^2)$. Estimate $P(8<X<12)$.`, recap: "μ ± σ.", ans: S`$\approx0.68$` },
  { level: 1, q: S`Find the z-score of 25 for $N(20,2.5^2)$.`, recap: "(x − μ)/σ.", ans: S`$2$` },
  { level: 2, q: S`$X\sim N(60,10^2)$. Find $P(X>48)$.`, recap: "z = −1.2.", ans: S`$\approx${r(1 - Phi(-1.2))}$` },
  { level: 2, q: S`$X\sim N(3.5,0.2^2)$. Find $P(3.3<X<3.8)$.`, recap: "GDC.", ans: S`$\approx${r(normCdf(3.8, 3.5, 0.2) - normCdf(3.3, 3.5, 0.2))}$` },
  { level: 2, q: S`300 bulbs have lifetimes $N(900,60^2)$ hours. How many are expected to fail before 800 hours?`, recap: "P × 300.", ans: S`about 14` },
  { level: 2, q: S`The graph shows $N(100,10^2)$ with a shaded tail. Find $P(X>115)$.`, recap: "z = 1.5.", ans: S`$\approx${r(1 - Phi(1.5))}$`,
    fig: normT(100, 10, [{ a: 115, b: Infinity, color: "amber" }], {}, 5) },
  { level: 2, q: S`Which is larger for $Z\sim N(0,1)$: $P(Z<-0.5)$ or $P(Z>0.8)$? Explain with a sketch.`, recap: "Compare tails.", ans: S`$P(Z<-0.5)\approx${r(Phi(-0.5))}$ is larger than $\approx${r(1 - Phi(0.8))}$` },
  { level: 3, space: 4, q: S`$X\sim N(60,10^2)$. Find $P(X>70\mid X>60)$.`, recap: "Divide by 0.5.", ans: S`$\approx${r((1 - Phi(1)) / 0.5)}$` },
  { level: 3, space: 4, q: S`$X\sim N(100,10^2)$. Find $P(|X-100|>25)$.`, recap: "Two tails.", ans: S`$\approx${r(2 * (1 - Phi(2.5)))}$` },
  { level: 3, space: 4, q: S`Apples have mass $N(180,15^2)$ g. Find the probability that an apple exceeds 200 g, and that none of 8 apples in a bag does.`, recap: "Normal then binomial.", ans: S`$\approx${r(1 - Phi(4 / 3))}$; $\approx${r(Phi(4 / 3) ** 8)}$` },
  { level: 3, space: 4, q: S`Machine A fills $N(500,3^2)$ g and machine B fills $N(502,6^2)$ g. Which produces a larger proportion under 495 g?`, recap: "Compare z.", ans: S`B: $\approx${r(Phi(-7 / 6))}$ vs A: $\approx${r(Phi(-5 / 3))}$` },
  { level: 3, space: 4, q: S`Explain why $P(X=50)=0$ for a normal random variable X, and what this means for $P(X\le50)$ and $P(X<50)$.`, recap: "Continuous.", ans: "a single point has zero area, so the two probabilities are equal" },
];

export const WS = {
  code: "14.3",
  title: "The Normal Distribution",
  bigideas: S`$X\sim N(\mu,\sigma^2)$ is a symmetric bell curve centred at μ with spread σ. Probabilities are areas: about 68%, 95% and 99.7% lie within 1, 2 and 3 standard deviations. Technology gives exact areas; the z-score $z=\frac{x-\mu}{\sigma}$ compares values from different distributions.`,
  goals: ["Use properties and the empirical rule.", "Find probabilities with technology.", "Use z-scores.", "Find expected numbers."],
  curriculum: "SL 4.9, 4.12",
  vocab: [["N(μ, σ²)", "normal distribution"], ["68–95–99.7", "empirical rule"], ["z-score", "(x − μ)/σ"]],
  hook: "Why do heights, test scores and measurement errors all make the same bell shape?",
  concepts: [
    ["1. The bell curve", S`${normT(0, 1, [{ a: -1, b: 1, color: "green" }], {}, 4.6)} About 68% within one σ.`],
    ["2. Areas", "Sketch, shade, calculate."],
    ["3. z-scores", "Standardise to compare."],
  ],
  tips: ["Sketch first.", "σ, not σ², in the GDC.", "P(X > a) = 1 − P(X < a).", "Symmetry saves work.", "Continuous: ≤ same as <."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
