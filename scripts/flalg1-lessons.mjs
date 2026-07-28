// Algebra 1 (FL B.E.S.T.) authored lessons. Keyed by lesson code; seed-flalg1.mjs
// splices these over the scaffolds. Same single-card design as the other courses
// (🔵 Examples ×5 / 🟡 Practice ×5 / ❓ Q&A Summary).
import { html, gframe } from "./seed-mpm2d.mjs";

const L = (code, title, blocks) => ({ code, title, blocks });
const EX = `style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const PR = `style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const QA = `style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"`;

export const authored = {};

authored["1.1"] = L("1.1", "Multi-Step Equations in One Variable", [html(String.raw`<div class="lecture-box">
  <h1>⚖️ Multi-Step Equations in One Variable</h1>
  <p><strong>Overview.</strong> A linear equation is solved by <strong>undoing</strong> the operations around the variable until it stands alone. Multi-step equations add a few layers first — brackets to distribute, like terms to combine, or the variable appearing on <em>both</em> sides — but the golden rule never changes: <strong>whatever you do to one side, do to the other</strong>, keeping the equation balanced.</p>

  <h2>📌 The toolkit</h2>
  <ul>
    <li><strong>Distribute</strong> to clear brackets: \(a(b+c)=ab+ac\).</li>
    <li><strong>Combine like terms</strong> on each side.</li>
    <li><strong>Collect the variable on one side</strong> by adding/subtracting the same term from both sides.</li>
    <li><strong>Undo</strong> with inverse operations (add ↔ subtract, multiply ↔ divide), then <strong>check</strong> by substituting back.</li>
  </ul>
  ${gframe(["y = 3*x + 3", "y = 18"], { title: "Solving 3x + 3 = 18: the lines meet at x = 5", xMin: -2, xMax: 10, yMin: -2, yMax: 24 })}

  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Combine like terms, then two steps</h3>
    <p>Solve \(4x + 3 - x = 18\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1 — combine like terms:</strong> \(4x - x = 3x\), so \(3x + 3 = 18\).</div>
      <div class="step"><strong>Step 2 — subtract 3:</strong> \(3x = 15\).</div>
      <div class="step"><strong>Step 3 — divide by 3:</strong> \(x = 5\).</div>
      <em>Check: \(4(5)+3-5 = 20+3-5 = 18\). ✓</em>
    </div>
  </div>

  <div class="example-box" ${EX}><h3>Example 2: Variable on both sides</h3>
    <p>Solve \(7x - 4 = 3x + 12\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1 — subtract \(3x\) from both sides:</strong> \(4x - 4 = 12\).</div>
      <div class="step"><strong>Step 2 — add 4:</strong> \(4x = 16\).</div>
      <div class="step"><strong>Step 3 — divide by 4:</strong> \(x = 4\).</div>
      <em>Check: \(7(4)-4 = 24\) and \(3(4)+12 = 24\). ✓</em>
    </div>
  </div>

  <div class="example-box" ${EX}><h3>Example 3: Distribute to clear a bracket</h3>
    <p>Solve \(3(2x - 1) = 21\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1 — distribute the 3:</strong> \(6x - 3 = 21\).</div>
      <div class="step"><strong>Step 2 — add 3:</strong> \(6x = 24\).</div>
      <div class="step"><strong>Step 3 — divide by 6:</strong> \(x = 4\).</div>
      <em>Check: \(3(2\cdot4-1) = 3(7) = 21\). ✓</em>
    </div>
  </div>

  <div class="example-box" ${EX}><h3>Example 4: Brackets and variables on both sides</h3>
    <p>Solve \(5(x - 2) = 2(x + 1)\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1 — distribute each side:</strong> \(5x - 10 = 2x + 2\).</div>
      <div class="step"><strong>Step 2 — subtract \(2x\):</strong> \(3x - 10 = 2\).</div>
      <div class="step"><strong>Step 3 — add 10, then divide by 3:</strong> \(3x = 12\), so \(x = 4\).</div>
      <em>Check: \(5(4-2)=10\) and \(2(4+1)=10\). ✓</em>
    </div>
  </div>

  <div class="example-box" ${EX}><h3>Example 5: Clear the fractions first</h3>
    <p>Solve \(\dfrac{x}{3} + \dfrac{1}{2} = \dfrac{5}{6}\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1 — multiply every term by the LCD 6:</strong> \(6\cdot\dfrac{x}{3} + 6\cdot\dfrac{1}{2} = 6\cdot\dfrac{5}{6}\) gives \(2x + 3 = 5\).</div>
      <div class="step"><strong>Step 2 — subtract 3:</strong> \(2x = 2\).</div>
      <div class="step"><strong>Step 3 — divide by 2:</strong> \(x = 1\).</div>
      <em>Check: \(\dfrac{1}{3}+\dfrac{1}{2}=\dfrac{2}{6}+\dfrac{3}{6}=\dfrac{5}{6}\). ✓</em>
    </div>
  </div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Solve \(2x + 9 = 5x - 6\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(15 = 3x\Rightarrow x = 5\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Solve \(4(x + 3) = 32\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(4x+12=32\Rightarrow 4x=20\Rightarrow x = 5\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Solve \(6x - 5 = 2x + 19\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(4x = 24\Rightarrow x = 6\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Solve \(3(2x - 4) = 2(x + 2)\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(6x-12=2x+4\Rightarrow 4x=16\Rightarrow x = 4\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>Solve \(\dfrac{x}{2} - \dfrac{1}{3} = \dfrac{2}{3}\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Multiply by 6: \(3x - 2 = 4\Rightarrow 3x = 6\Rightarrow x = 2\).</em></div></div></details></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: What's the very first thing to look for?</h3><p><em>Brackets to distribute or fractions to clear. Simplify each side <strong>before</strong> moving variables across.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: Which side should the variable go on?</h3><p><em>Either works. Moving it to the side with the larger \(x\)-coefficient keeps the coefficient positive and avoids sign slips.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: I got \(6 = 6\) (or \(3 = 8\)). What happened?</h3><p><em>If the variable cancels and you're left with a <strong>true</strong> statement (\(6=6\)), every number is a solution (infinitely many). A <strong>false</strong> one (\(3=8\)) means <strong>no solution</strong>.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: Do I really need to check?</h3><p><em>Yes — substituting your answer back into the original equation catches arithmetic and sign errors in seconds.</em></p></div>
</div>`)]);
