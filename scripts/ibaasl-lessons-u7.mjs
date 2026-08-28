// IB Math AA SL — Unit 7: The Exploration (Internal Assessment). A guide
// lesson rather than a problem set — original topic ideas, structural advice,
// and self-assessment prompts, informed by the general IA assessment
// framework but with no content copied from any published source.
import { html } from "./seed-mpm2d.mjs";
const L = (code, title, blocks) => ({ code, title, blocks });
const EX = `style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const PR = `style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const QA = `style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
export const u7 = {};

u7["7.1"] = L("7.1", "Writing Your Mathematical Exploration (IA)", [
  html(String.raw`<div class="lecture-box">
  <h1>📝 Writing Your Mathematical Exploration (IA)</h1>
  <p><strong>Overview.</strong> The Exploration is a short, independent piece of mathematical writing — typically 6 to 12 pages — where you investigate a question of your own choosing using mathematics from this course (or slightly beyond it). Unlike an exam question, nobody hands you the problem: picking a good one is half the work.</p>
  <h2>📌 The Five Assessment Criteria</h2>
  <p>Every Exploration is marked against five criteria. Understanding what each one actually rewards is the single most useful thing you can do before you start writing.</p>
  <div style="overflow-x:auto;margin:14px 0;">
    <table style="width:100%;border-collapse:collapse;font-size:0.92em;">
      <thead>
        <tr style="background:#1b7a44;color:#fff;">
          <th style="padding:8px 10px;text-align:left;">Criterion</th>
          <th style="padding:8px 10px;text-align:left;">What it rewards</th>
        </tr>
      </thead>
      <tbody>
        <tr style="background:#f0f7f2;"><td style="padding:8px 10px;font-weight:700;">A — Presentation</td><td style="padding:8px 10px;">A clear, logically organized, well-labelled piece of work a reader can follow without getting lost.</td></tr>
        <tr><td style="padding:8px 10px;font-weight:700;">B — Mathematical communication</td><td style="padding:8px 10px;">Correct notation, defined variables, and language used precisely — like a textbook, not a diary.</td></tr>
        <tr style="background:#f0f7f2;"><td style="padding:8px 10px;font-weight:700;">C — Personal engagement</td><td style="padding:8px 10px;">Evidence the topic was genuinely yours — an original angle, your own data, or a question you actually wanted answered.</td></tr>
        <tr><td style="padding:8px 10px;font-weight:700;">D — Reflection</td><td style="padding:8px 10px;">Thinking critically about your own results — their limitations, what surprised you, what you'd try next.</td></tr>
        <tr style="background:#f0f7f2;"><td style="padding:8px 10px;font-weight:700;">E — Use of mathematics</td><td style="padding:8px 10px;">Mathematics that is correct <em>and</em> appropriately sophisticated for this course — the single largest criterion.</td></tr>
      </tbody>
    </table>
  </div>
  <h2>📌 Choosing a Topic</h2>
  <p>The best topics start from genuine curiosity — a hobby, a sport, a "what if" question — narrowed until it points to a specific mathematical technique. "The mathematics of basketball" is not a topic; "does a player's free-throw success rate follow a binomial model, based on their season statistics?" is.</p>
  <h2>📌 Structure of a Strong Exploration</h2>
  <p>A clear <strong>aim</strong> stating exactly what question is being investigated; enough <strong>background</strong> to justify the approach; the <strong>mathematical content</strong> itself, worked with full justification (not just a final answer); and a <strong>conclusion</strong> that honestly evaluates what was found and what its limitations are.</p>
  <h2>🔵 Example Topic Ideas</h2>
  <div class="example-box" ${EX}>
    <h3>Idea 1 — Modelling rumour spread</h3><p>Model how a piece of news spreads through a school population using a geometric-growth approximation for the early stage, then compare the model's predictions to a small survey you run yourself.</p>
    <div class="solution"><em>Why it works: it uses Unit 1 sequences meaningfully, and pairs a model with real (self-collected) data — strong for both Criterion C and E.</em></div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Idea 2 — Optimizing a drink can</h3><p>Use the optimization techniques from Unit 5 to find the dimensions that minimize a cylindrical can's material for a fixed volume, then compare the "ideal" dimensions to several real cans' actual measurements and discuss why real cans might deviate.</p>
    <div class="solution"><em>Why it works: it's a genuine calculus application with a clear extension — comparing theory to reality invites real reflection (Criterion D).</em></div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Idea 3 — Correlation in an unexpected pair of variables</h3><p>Investigate whether two seemingly unrelated variables (e.g., a country's average temperature and its Olympic medal count) show a statistically meaningful correlation, using the regression and correlation tools from Unit 4 on a real dataset you compile.</p>
    <div class="solution"><em>Why it works: it forces careful thought about correlation vs causation — exactly the kind of critical thinking Criterion D rewards.</em></div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Idea 4 — Modelling local tide heights</h3><p>Fit a sinusoidal function (Unit 3's amplitude/period/midline tools) to a real coastal town's tide-table data, then use the model to predict a tide height on a date outside the original data and check it against the actual published table.</p>
    <div class="solution"><em>Why it works: fitting a model to real data and testing a genuine prediction is one of the clearest ways to demonstrate sophisticated, purposeful use of mathematics.</em></div>
  </div>
  <div class="example-box" style="background-color:#fff0f5;border-left:5px solid #c2185b;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>⭐ Idea 5 — combining two strands for extra depth</h3><p>Model a Ferris wheel rider's height over time using a sinusoidal function (Unit 3), then use integration (Unit 6) to find the total vertical distance travelled during one ride — comparing that to the much smaller net displacement (zero, for a full rotation).</p>
    <div class="solution"><em>Why it's a strong "advanced" choice: combining two different strands (trigonometry and calculus) into one coherent investigation is exactly the kind of extra sophistication that pushes Criterion E from "sufficient" to "excellent," without needing content beyond the SL syllabus. ✓</em></div>
  </div>
  <h2>🟡 Self-Assessment Prompts</h2>
  <div class="practice-box" ${PR}><h3>Prompt 1</h3><p>Write a one-sentence aim for a topic idea of your own. Does it name a specific, answerable mathematical question — not just a general area of interest?</p><details><summary>View guidance</summary><div class="solution"><div class="step"><em>A strong aim reads like "Does X follow model Y, and how well?" — specific enough that a stranger could tell exactly what you're about to investigate.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Prompt 2</h3><p>A classmate's topic is "The mathematics of sports." Suggest two ways to narrow this into a workable Exploration topic.</p><details><summary>View guidance</summary><div class="solution"><div class="step"><em>E.g., "modelling a specific athlete's performance trend over a season with regression," or "using trigonometry to model the optimal launch angle for a javelin throw" — each narrows to one sport, one question, and one clear technique.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Prompt 3</h3><p>List two ways you could extend a basic linear regression exploration to demonstrate more sophisticated mathematics.</p><details><summary>View guidance</summary><div class="solution"><div class="step"><em>Compare a linear model against a different one (e.g., a quadratic or exponential fit) and justify which fits better, or discuss the reliability of extrapolating beyond your data's range.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Prompt 4</h3><p>Your first draft only states a final numeric answer for each calculation. What's missing, and which criterion does it affect most?</p><details><summary>View guidance</summary><div class="solution"><div class="step"><em>The justification and working are missing — Criterion B (mathematical communication) specifically rewards showing the reasoning, not just the result.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Prompt 5 — Challenge</h3><p>Your model's predictions don't match your real data very well. Is this a failure? Explain how you could turn this into a strength of your Exploration.</p><details><summary>View guidance</summary><div class="solution"><div class="step"><em>Answer: no — a mismatch is a genuine opportunity for Criterion D. Discussing <em>why</em> the model fails (a missing variable, an unrealistic assumption, measurement error) shows exactly the critical reflection markers are looking for.</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: Does the Exploration need to use content beyond the syllabus?</h3><p><em>No — using SL content thoroughly and thoughtfully scores just as well as reaching for unfamiliar material; depth of understanding matters more than the label on the technique.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: How long should the Exploration be?</h3><p><em>Roughly 6–12 pages is typical — long enough to develop one idea properly, short enough to stay focused; padding with unnecessary content usually hurts Criterion A more than it helps anything else.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: What's the most common way explorations lose marks?</h3><p><em>Choosing a topic too broad to explore in the space available, or including calculations with no explanation of why they were done — both are avoidable with a clear aim and consistent narration of your reasoning throughout.</em></p></div>
</div>`),
]);
