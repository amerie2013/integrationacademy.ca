// FTCE Unit 14 — Assessment. ~20 conceptual questions.
import { mc, tf, fill } from "./helpers.mjs";
const R = String.raw;

const g141 = () => [
  mc("easy", R`Assessment during learning to guide instruction is`, [R`formative`, R`summative`, R`diagnostic`, R`final`], 0),
  mc("easy", R`Assessment at the end of a unit is`, [R`summative`, R`formative`, R`diagnostic`, R`ongoing`], 0),
  mc("medium", R`Assessing prior knowledge before a unit is`, [R`diagnostic`, R`summative`, R`formative`, R`terminal`], 0),
  mc("easy", R`A portfolio is an ___ assessment.`, [R`alternative`, R`multiple-choice`, R`standardized`, R`timed`], 0),
  mc("medium", R`A rubric provides ___ scoring criteria.`, [R`consistent`, R`random`, R`hidden`, R`optional`], 0),
  mc("medium", R`Diagnosing a misconception from a wrong answer is`, [R`error analysis`, R`curving`, R`averaging`, R`ranking`], 0),
  mc("medium", R`Good multiple-choice distractors are built from`, [R`common errors`, R`random numbers`, R`the correct answer only`, R`easy values`], 0),
  mc("medium", R`A performance task is an ___ assessment.`, [R`alternative (authentic)`, R`multiple-choice`, R`true/false`, R`fill-in`], 0),
  mc("easy", R`A quiz given mid-unit to adjust teaching is`, [R`formative`, R`summative`, R`diagnostic`, R`final`], 0),
  mc("easy", R`A final exam is`, [R`summative`, R`formative`, R`diagnostic`, R`alternative`], 0),
  mc("hard", R`A student writes $\tfrac12+\tfrac13=\tfrac25$. The misconception is`, [R`adding numerators and denominators`, R`forgetting to simplify`, R`inverting a fraction`, R`rounding`], 0),
  tf("medium", R`Formative assessment is primarily used to adjust instruction, not to assign a final grade.`, true),
  mc("medium", R`A rubric lists`, [R`criteria and performance levels`, R`only a total score`, R`the answer key only`, R`student names`], 0),
  mc("medium", R`Projects and presentations are examples of ___ assessment.`, [R`alternative`, R`multiple-choice`, R`standardized`, R`diagnostic`], 0),
  tf("easy", R`Summative assessment occurs at the end of instruction.`, true),
  fill("medium", R`Assessment that identifies gaps before teaching is ___ assessment.`, ["diagnostic"]),
  mc("hard", R`Authentic assessment aims to mirror`, [R`real-world tasks`, R`textbook drills`, R`multiple-choice only`, R`timed recall`], 0),
  mc("medium", R`Analyzing wrong answers primarily informs`, [R`future instruction`, R`seating charts`, R`grading curves`, R`attendance`], 0),
  mc("medium", R`Using a rubric improves scoring`, [R`consistency (reliability)`, R`speed only`, R`difficulty`, R`randomness`], 0),
  tf("hard", R`Multiple-choice distractors should be chosen at random.`, false),
];

export default [{ code: "14.1", gen: g141 }];
