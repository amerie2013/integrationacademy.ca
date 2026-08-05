// FTCE Unit 15 — Practice Tests. Turns the shared u15-data.mjs items into bank
// questions (multiple-choice, shuffled via mcv) for two pools:
//   15.1 Diagnostic Test (40 Q)   15.2 Full-Length Practice Test (80 Q)
import { mcv } from "./helpers.mjs";
import { DIAG, FULL } from "./u15-data.mjs";

const toBank = (arr) => arr.map(([difficulty, prompt, correct, distractors]) =>
  mcv(difficulty, prompt, correct, distractors));

export default [
  { code: "15.1", gen: () => toBank(DIAG) },
  { code: "15.2", gen: () => toBank(FULL) },
];
