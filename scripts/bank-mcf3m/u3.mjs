// MCF3M Unit 3 — Exponential Functions: question bank (60 per topic).
// These three topics are identical in content to MCR3U's exponential strand, so we
// reuse those proven generators (MCR3U 3.4 "Applications" maps to MCF3M 3.3).
import mcr3u from "../bank-mcr3u/u3.mjs";

const gen = Object.fromEntries(mcr3u.map((t) => [t.code, t.gen]));

export default [
  { code: "3.1", gen: gen["3.1"] }, // Exponent Laws & Rational Exponents
  { code: "3.2", gen: gen["3.2"] }, // Exponential Functions & Their Graphs
  { code: "3.3", gen: gen["3.4"] }, // Exponential Growth & Decay Applications
];
