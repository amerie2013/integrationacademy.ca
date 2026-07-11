// MBF3C Unit 2 — Exponential Relations: question bank (60 per topic).
// Topics match MCF3M's exponential strand exactly, so reuse those generators.
import mcf3m3 from "../bank-mcf3m/u3.mjs";

const gen = Object.fromEntries(mcf3m3.map((t) => [t.code, t.gen]));

export default [
  { code: "2.1", gen: gen["3.1"] }, // Exponent Laws
  { code: "2.2", gen: gen["3.2"] }, // Exponential Relations & Graphs
  { code: "2.3", gen: gen["3.3"] }, // Exponential Growth & Decay Applications
];
