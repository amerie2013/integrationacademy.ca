// IB AA SL Worksheet 14.4 — Inverse Normal and Standardisation (teacher edition)
import { normT } from "./figT.mjs";
import { invPhi } from "../figs14.mjs";

const S = String.raw;
const r = (v, d = 2) => (Math.round(v * 10 ** d) / 10 ** d).toFixed(d);
const z = (p) => invPhi(p);
const s8 = 20 / (z(0.9) - z(0.2)), m8 = 30 - z(0.2) * s8;
const s11 = 30 / (z(0.9) - z(0.2)), m11 = 80 - z(0.9) * s11;

const EXAMPLES = [
  { title: "A z-value", q: S`Find z with $P(Z<z)=0.8$.`,
    steps: ["Inverse normal(0.8, 0, 1)."], ans: S`$z\approx${r(z(0.8), 4)}$` },
  { title: "An upper tail", q: S`Find z with $P(Z>z)=0.025$.`,
    steps: [S`Left area $0.975$.`], ans: S`$z\approx1.96$` },
  { title: "A percentile", q: S`$X\sim N(200,25^2)$. Find x with $P(X<x)=0.65$.`,
    steps: [S`$200+${r(z(0.65), 4)}(25)$.`], ans: S`$\approx${r(200 + z(0.65) * 25)}$` },
  { title: "Bottom tail", q: S`For the same X, find the value below which the lowest 10% lie.`,
    steps: [S`$P(X<x)=0.1$.`], ans: S`$\approx${r(200 + z(0.1) * 25)}$` },
  { title: "Central interval", q: S`For the same X, find the interval containing the middle 90%.`,
    fig: normT(200, 25, [{ a: 200 - z(0.95) * 25, b: 200 + z(0.95) * 25, color: "green" }], { lines: [200 - z(0.95) * 25, 200 + z(0.95) * 25] }, 5.6),
    steps: [S`$200\pm${r(z(0.95), 4)}(25)$.`], ans: S`$${r(200 - z(0.95) * 25)}<X<${r(200 + z(0.95) * 25)}$` },
  { title: "Unknown σ", q: S`$X\sim N(80,\sigma^2)$ and $P(X>95)=0.1$. Find σ.`,
    steps: [S`$z=${r(z(0.9), 4)}$; $\sigma=\frac{15}{${r(z(0.9), 4)}}$.`], ans: S`$\sigma\approx${r(15 / z(0.9), 3)}$` },
  { title: "Unknown μ", q: S`$X\sim N(\mu,12^2)$ and $P(X<50)=0.3$. Find μ.`,
    steps: [S`$z=${r(z(0.3), 4)}$; $\mu=50-(${r(z(0.3), 4)})(12)$.`], ans: S`$\mu\approx${r(50 - z(0.3) * 12)}$` },
  { title: "Both unknown", q: S`$P(X<30)=0.2$ and $P(X<50)=0.9$. Find μ and σ.`,
    fig: normT(m8, s8, [{ a: -Infinity, b: 30, color: "red" }, { a: 50, b: Infinity, color: "amber" }], { lines: [30, 50] }, 5.6),
    steps: [S`$\mu${r(z(0.2), 4)}\sigma=30$, $\mu+${r(z(0.9), 4)}\sigma=50$.`], ans: S`$\sigma\approx${r(s8, 3)}$, $\mu\approx${r(m8)}$` },
  { title: "Quality control", q: S`Packets weigh $N(\mu,5^2)$ g. Find the least μ so that at most 2% are under 500 g.`,
    fig: normT(500 - z(0.02) * 5, 5, [{ a: -Infinity, b: 500, color: "red" }], { lines: [500] }, 5.6),
    steps: [S`$\mu=500-(${r(z(0.02), 4)})(5)$.`], ans: S`$\mu\approx${r(500 - z(0.02) * 5)}$ g` },
];

const PROBLEMS = [
  { level: 1, q: S`Find z with $P(Z<z)=0.99$.`, recap: "Inverse normal.", ans: S`$\approx${r(z(0.99), 3)}$` },
  { level: 1, q: S`Find z with $P(Z<z)=0.1$.`, recap: "Negative.", ans: S`$\approx${r(z(0.1), 4)}$` },
  { level: 1, q: S`$X\sim N(50,4^2)$. Find x with $P(X<x)=0.5$.`, recap: "The mean.", ans: S`$50$` },
  { level: 2, q: S`$X\sim N(120,20^2)$. Find the boundary of the top 20%.`, recap: "Left area 0.8.", ans: S`$\approx${r(120 + z(0.8) * 20)}$` },
  { level: 2, q: S`$X\sim N(120,20^2)$. Find x with $P(X>x)=0.6$.`, recap: "Left area 0.4.", ans: S`$\approx${r(120 + z(0.4) * 20)}$` },
  { level: 2, q: S`$X\sim N(40,\sigma^2)$ and $P(X<35)=0.25$. Find σ.`, recap: S`$\frac{-5}{z}$.`, ans: S`$\approx${r(-5 / z(0.25), 3)}$` },
  { level: 2, q: S`$X\sim N(\mu,3^2)$ and $P(X>15)=0.05$. Find μ.`, recap: "z ≈ 1.6449.", ans: S`$\approx${r(15 - z(0.95) * 3)}$` },
  { level: 2, q: S`The graph shows $N(60,8^2)$ with the central 70% shaded. Find its bounds.`, recap: "Tails 0.15 each.", ans: S`$${r(60 - z(0.85) * 8)}$ and $${r(60 + z(0.85) * 8)}$`,
    fig: normT(60, 8, [{ a: 60 - z(0.85) * 8, b: 60 + z(0.85) * 8, color: "green" }], {}, 5) },
  { level: 3, space: 4, q: S`$P(X>80)=0.1$ and $P(X<50)=0.2$. Find μ and σ.`, recap: "Two equations.", ans: S`$\sigma\approx${r(s11, 3)}$, $\mu\approx${r(m11)}$` },
  { level: 3, space: 4, q: S`Marks are $N(62,11^2)$. The top 10% get an A and the next 20% a B. Find the lowest A and the lowest B marks.`, recap: "Left areas 0.9 and 0.7.", ans: S`A $\approx${r(62 + z(0.9) * 11)}$, B $\approx${r(62 + z(0.7) * 11)}$` },
  { level: 3, space: 4, q: S`Lifetimes are $N(1200,150^2)$ hours. A guarantee replaces items that fail before T hours; only 3% should be replaced. Find T.`, recap: "Left area 0.03.", ans: S`$T\approx${r(1200 + z(0.03) * 150, 1)}$ h` },
  { level: 3, space: 4, q: S`Show that the middle 50% of any normal distribution is $\mu\pm k\sigma$ with $k\approx0.674$.`, recap: "Left area 0.75.", ans: S`$P(Z<k)=0.75\Rightarrow k\approx${r(z(0.75), 4)}$` },
  { level: 3, space: 4, q: "Explain why the inverse normal function needs the area to the left, and how you adapt a question about the top p%.", recap: "Left area.", ans: "it inverts P(X < x); for the top p% use left area 1 − p" },
];

export const WS = {
  code: "14.4",
  title: "Inverse Normal and Standardisation",
  bigideas: S`The inverse normal turns a left-tail probability into a boundary value. With $z$ from the standard normal, $x=\mu+z\sigma$. An unknown μ or σ comes from one condition; both come from two conditions solved simultaneously. Symmetric intervals split the leftover probability equally into two tails.`,
  goals: ["Find boundaries from probabilities.", "Find unknown μ or σ.", "Solve for both.", "Use symmetric intervals."],
  curriculum: "SL 4.9, 4.12",
  vocab: [["Inverse normal", "probability → value"], ["z-value", "standard normal boundary"], ["x = μ + zσ", "standardising"]],
  hook: "What mark puts you in the top 10% of a class?",
  concepts: [
    ["1. Left area", S`${normT(0, 1, [{ a: -Infinity, b: z(0.9), color: "green" }], { lines: [z(0.9)] }, 4.6)} $P(Z<1.2816)=0.9$.`],
    ["2. x = μ + zσ", "Rearrange for the unknown."],
    ["3. Two conditions", "Two equations in μ and σ."],
  ],
  tips: ["Use the left area.", "Keep the sign of z.", "Write μ + zσ = x.", "Check by recomputing.", "Split tails for symmetric intervals."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
