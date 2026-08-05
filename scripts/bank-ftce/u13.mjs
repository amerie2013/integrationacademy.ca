// FTCE Unit 13 — Instruction. ~20 conceptual questions.
import { mc, tf, fill } from "./helpers.mjs";
const R = String.raw;

const g131 = () => [
  mc("easy", R`"Guess and check" is a`, [R`problem-solving strategy`, R`grading method`, R`theorem`, R`representation`], 0),
  mc("medium", R`Anticipating student misconceptions is part of`, [R`pedagogical content knowledge`, R`content knowledge only`, R`grading`, R`classroom decor`], 0),
  mc("medium", R`Viewing students as active builders of understanding describes`, [R`constructivism`, R`behaviorism (tabula rasa)`, R`lecturing`, R`memorization`], 0),
  mc("easy", R`Estimating to judge an answer checks its`, [R`reasonableness`, R`neatness`, R`length`, R`spelling`], 0),
  mc("easy", R`Group work is a ___ delivery method.`, [R`collaborative`, R`lecture`, R`independent-only`, R`assessment`], 0),
  mc("medium", R`The pause a teacher allows after asking a question is`, [R`wait time`, R`downtime`, R`transition`, R`recess`], 0),
  mc("medium", R`Organizing given data to reveal a pattern uses which strategy?`, [R`making a table`, R`guessing randomly`, R`skipping`, R`memorizing`], 0),
  mc("easy", R`Manipulatives are a teaching`, [R`tool`, R`test`, R`grade`, R`standard`], 0),
  mc("medium", R`"Working backwards" suits a problem that gives`, [R`an end result`, R`no information`, R`only a diagram`, R`a definition`], 0),
  mc("medium", R`A lecture is primarily a ___ method.`, [R`teacher-centered`, R`student-centered`, R`assessment`, R`collaborative`], 0),
  mc("medium", R`Discovery learning is primarily a ___ method.`, [R`student-centered`, R`teacher-centered`, R`punitive`, R`summative`], 0),
  tf("medium", R`Constructivism treats students as blank slates.`, false),
  mc("hard", R`Bloom's taxonomy classifies`, [R`cognitive levels of objectives`, R`student ages`, R`grading scales`, R`seating charts`], 0),
  mc("medium", R`The first step in problem solving is to`, [R`understand the problem`, R`guess the answer`, R`write the conclusion`, R`grade it`], 0),
  fill("easy", R`Estimation checks the ___ of an answer.`, ["reasonableness"]),
  mc("hard", R`Strategies for English-language learners support`, [R`language access to the mathematics`, R`faster grading`, R`larger classes`, R`less content`], 0),
  mc("medium", R`Open-ended problems tend to promote`, [R`higher-order thinking`, R`rote recall only`, R`memorization only`, R`guessing`], 0),
  tf("easy", R`Adequate wait time tends to improve the quality of student responses.`, true),
  mc("hard", R`Temporary support a teacher removes as students gain skill is`, [R`scaffolding`, R`tracking`, R`retention`, R`streaming`], 0),
  mc("medium", R`Checking whether an answer makes sense in context is checking`, [R`reasonableness`, R`the rubric`, R`the calculator`, R`the textbook`], 0),
];

export default [{ code: "13.1", gen: g131 }];
