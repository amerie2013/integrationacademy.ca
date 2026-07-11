// MCF3M Unit 6 — Sine Functions: question bank (60 per topic).
// These topics mirror MCR3U's sinusoidal strand, so we reuse those generators.
import mcr3u5 from "../bank-mcr3u/u5.mjs";

const gen = Object.fromEntries(mcr3u5.map((t) => [t.code, t.gen]));

export default [
  { code: "6.1", gen: gen["5.1"] }, // Periodic Functions & the Sine Function
  { code: "6.2", gen: gen["5.2"] }, // Graphing f(x) = sin x
  { code: "6.3", gen: gen["5.3"] }, // Transformations of Sine Functions
  { code: "6.4", gen: gen["5.4"] }, // Sinusoidal Applications
];
