// IB AA SL worksheets — Unit 7: The Exploration (IA). A planning worksheet
// rather than a problem set, matching the lesson's guide format.
const r = String.raw;
const U = "7: The Exploration (Internal Assessment)";

export default [
  {
    code: "7.1", unit: U, title: "Planning Your Mathematical Exploration",
    intro: r`Use this worksheet to plan your Exploration before you start writing --- a clear plan up front saves far more time than it costs.`,
    ideas: [
      r`Five criteria: A Presentation, B Mathematical communication, C Personal engagement, D Reflection, E Use of mathematics.`,
      r`A strong aim names a specific, answerable question --- not just a general area of interest.`,
      r`Real (self-collected or public) data strengthens both Criterion C and E far more than invented numbers.`,
    ],
    examples: [
      { t: "Modelling rumour spread", body: r`Model how news spreads through a school using geometric-growth ideas, compared against a small survey you run yourself.\soln
\textbf{Why it works:} uses Unit 1 sequences meaningfully, and pairs a model with real, self-collected data.` },
      { t: "Optimizing a drink can", body: r`Use Unit 5's optimization techniques to find a cylinder's minimal-material dimensions for a fixed volume, then compare to real cans.\soln
\textbf{Why it works:} a genuine calculus application with a natural extension --- comparing theory to reality invites real reflection.` },
      { t: "Correlation in an unexpected pair", body: r`Investigate whether two seemingly unrelated variables show meaningful correlation, using Unit 4's tools on a real dataset.\soln
\textbf{Why it works:} forces careful thought about correlation vs causation --- exactly what Criterion D rewards.` },
      { t: "Combining two strands", body: r`Model a Ferris wheel rider's height with a sinusoidal function (Unit 3), then integrate (Unit 6) to find total vertical distance travelled.\soln
\textbf{Why it works:} combining two strands into one coherent investigation pushes Criterion E from sufficient to excellent, without needing content beyond SL.` },
    ],
    questions: [
      { ask: r`Write a one-sentence aim for a topic of your own. Does it name a specific, answerable question?`, ws: "3.4cm" },
      { ask: r`List the specific mathematical techniques from this course your topic will require.`, ws: "3.4cm" },
      { ask: r`Outline your four main sections (introduction/aim, background, mathematical content, conclusion) in one sentence each.`, ws: "4.4cm" },
      { ask: r`Will you use real data? If so, where will it come from? If not, explain why an invented scenario still serves your aim.`, ws: "3.4cm" },
      { ask: r`Identify one way you could extend your basic approach to demonstrate more sophisticated mathematics.`, ws: "3.4cm" },
      { ask: r`What is the biggest risk to your topic being too broad or too narrow? How will you keep it appropriately scoped?`, ws: "3.4cm" },
      { ask: r`If your results don't match your model's predictions, what would you write in your reflection section?`, ws: "3.4cm" },
    ],
    answers: [
      r`A strong aim reads like "Does X follow model Y, and how well?" --- specific enough that a stranger could tell exactly what you're investigating`,
      r`Answers will vary; check that every technique listed is one you've actually learned and can justify using`,
      r`Answers will vary; each section should have a clear, distinct purpose --- avoid overlap between background and mathematical content`,
      r`Real data (self-collected or public) generally strengthens Criteria C and E; an invented scenario can still work if it's used to illustrate a technique clearly and honestly labelled as illustrative`,
      r`E.g., comparing your model against an alternative one, or testing its reliability outside the original data range`,
      r`Too broad: you won't have room to go deep. Too narrow: there's nothing left to investigate. Aim for one clear question with room for a genuine "extension" step`,
      r`A mismatch is a strength, not a failure --- discuss why the model might fail (a missing variable, an unrealistic assumption, measurement error) to show critical reflection`,
    ],
  },
];
