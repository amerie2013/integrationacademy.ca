// 4.5 Confidence Intervals — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { intervalsSvg, normalSvg, barsSvg } from "../../mdm4u/figs.mjs";

const r = (v, k = 3) => Math.round(v * 10 ** k) / 10 ** k;
const moe = (p, n, z = 1.96) => z * Math.sqrt((p * (1 - p)) / n);

export const TOPIC = "4.5 Confidence Intervals";
export const Q = [
  num("Poll A: 528 of 1100 support. Find the lower end of the 95% CI. (3 decimals)", r(0.48 - moe(0.48, 1100)), "p̂ = 0.48.", null, 0.003),
  num("A 95% CI for p is (0.312, 0.368). Find the sample size (nearest whole number).", Math.round((1.96 / 0.028) ** 2 * 0.34 * 0.66), "E = 0.028, p̂ = 0.34.", null, 3),
  num("A 95% CI for μ is (46.08, 53.92) with σ = 10. Find n.", 25, "E = 3.92 = 1.96(10/√n)."),
  num("A 95% CI for μ is (46.08, 53.92) with σ = 10 and n = 25. Find the 90% CI's upper end. (2 decimals)", r(50 + 1.645 * 2, 2), "50 + 1.645(2).", null, 0.02),
  num("A researcher wants a 99% CI for a proportion with E ≤ 0.02. A pilot gives p̂ = 0.15. Find n.", Math.ceil((2.576 / 0.02) ** 2 * 0.15 * 0.85), "(2.576/0.02)²(0.1275)."),
  num("How many times larger must n be to cut E from 0.05 to 0.01 (same p̂, same confidence)?", 25, "(0.05/0.01)²."),
  num("At 95% confidence with p̂ = 0.5, E = 0.031. What is n (nearest whole number)?", Math.round((1.96 / 0.031) ** 2 * 0.25), "(1.96/0.031)²·0.25.", null, 3),
  num("Two independent 95% intervals are made. What is the probability that both capture their true values?", 0.9025, "0.95².", null, 0.0005),
  num("Twenty independent 95% intervals are made. What is the expected number that miss?", 1, "20 × 0.05."),
  num("Twenty independent 95% intervals are made. What is P(all twenty capture)? (4 decimals)", r(0.95 ** 20, 4), "0.95²⁰.", null, 0.0005),
  num("The figure shows 12 intervals from samples of size 100. If samples of size 400 had been used, by what factor would each interval's width change?", 0.5, "Width ∝ 1/√n.", intervalsSvg([0.4, 0.46, 0.38, 0.44, 0.41, 0.47, 0.36, 0.43, 0.45, 0.39, 0.42, 0.48].map((c) => [c - 0.097, c + 0.097]), { truth: 0.42, min: 0.2, max: 0.65, ticks: [0.2, 0.3, 0.4, 0.5, 0.6] }), 0.001),
  num("The curve shows the sampling distribution of x̄ for samples of 25 from N(80, 10²). Find P(x̄ > 84). (4 decimals)", r(1 - 0.9772, 4), "SE = 2; z = 2.", normalSvg({ mu: 80, s: 2, shade: [[84, Infinity, "red"]] }), 0.003),
  num("The bars show the margins of error for n = 100, 400 and 1600 at p̂ = 0.5 (95%). What is the margin for n = 1600? (3 decimals)", r(moe(0.5, 1600)), "1.96 × 0.0125.", barsSvg([100, 400, 1600].map((n) => moe(0.5, n)), { labels: ["n = 100", "n = 400", "n = 1600"], top: true, fmt: (v) => v.toFixed(3), ylabel: "margin of error" }), 0.001),
  num("The figure compares two intervals. Interval A is (0.42, 0.50) and B is (0.47, 0.53). What is the width of their overlap?", 0.03, "From 0.47 to 0.50.", intervalsSvg([[0.42, 0.5], [0.47, 0.53]], { min: 0.38, max: 0.57, ticks: [0.4, 0.45, 0.5, 0.55] }), 0.001),
  mc("A website poll of 20 000 volunteers reports 81% ± 0.5%. Which criticism is most important?", "volunteers are not a random sample, so the interval may be badly biased", ["the sample is too small", "the margin of error is too large", "the confidence level is not stated, so it must be 99%"], "Voluntary response bias."),
  ms("A 95% CI for p is (0.55, 0.61) from n = 1000. Which are correct? Select all.", ["p̂ = 0.58", "E = 0.03", "a 90% CI would be narrower", "p = 0.5 is plausible", "with n = 4000 the margin would be about 0.015"], [0, 1, 2, 4], "0.5 is outside the interval."),
  tf("If a 95% CI for the difference between two means does not contain 0, the data suggest the means differ.", true, "0 is not a plausible difference."),
  tf("Using p̂ = 0.5 in the sample-size formula can only give a sample that is too small.", false, "It gives the largest (safest) n."),
  num("A survey wants a 95% CI of width at most 0.06 (total width) with no prior estimate. Find n.", 1068, "E = 0.03: n = (1.96/0.03)²(0.25) = 1067.1 → 1068."),
  num("x̄ = 3.2 kg, σ = 0.6 kg. What is the smallest n so that a 99% CI for μ has total width at most 0.2 kg?", Math.ceil((2.576 * 0.6 / 0.1) ** 2), "E = 0.1: n ≥ (2.576·0.6/0.1)²."),
];
