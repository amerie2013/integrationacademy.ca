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

authored["1.2"] = L("1.2", "Rearranging Formulas & Solving Literal Equations", [html(String.raw`<div class="lecture-box">
  <h1>🔧 Rearranging Formulas &amp; Solving Literal Equations</h1>
  <p><strong>Overview.</strong> A <strong>literal equation</strong> is one with several letters, like a formula. To <em>solve for</em> a chosen variable means to isolate it on one side. The moves are exactly those from solving a numeric equation — the only mindset shift is to <strong>treat every other letter as if it were a number</strong>.</p>
  <h2>📌 The toolkit</h2>
  <ul>
    <li><strong>Undo</strong> operations with their inverses to peel the target variable free.</li>
    <li><strong>Treat other variables as constants</strong> — they just come along for the ride.</li>
    <li>If the target variable appears in <strong>two terms</strong>, <strong>factor it out</strong> first, then divide.</li>
  </ul>
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Solve \(d = rt\) for \(t\)</h3><p>The distance formula, rearranged for time.</p><div class="solution"><div class="step"><strong>Step 1 — divide both sides by \(r\):</strong> \(\dfrac{d}{r}=t\).</div><em>Conclusion: \(t=\dfrac{d}{r}\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Solve \(P = 2\ell + 2w\) for \(w\)</h3><p>Perimeter of a rectangle, solved for the width.</p><div class="solution"><div class="step"><strong>Step 1 — subtract \(2\ell\):</strong> \(P-2\ell = 2w\).</div><div class="step"><strong>Step 2 — divide by 2:</strong> \(w=\dfrac{P-2\ell}{2}\).</div><em>Conclusion: \(w=\dfrac{P-2\ell}{2}\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: Solve \(A = \tfrac{1}{2}bh\) for \(h\)</h3><p>Area of a triangle, solved for the height.</p><div class="solution"><div class="step"><strong>Step 1 — multiply both sides by 2:</strong> \(2A = bh\).</div><div class="step"><strong>Step 2 — divide by \(b\):</strong> \(h=\dfrac{2A}{b}\).</div><em>Conclusion: \(h=\dfrac{2A}{b}\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: Solve \(y = mx + b\) for \(x\)</h3><p>Isolating \(x\) in slope-intercept form.</p><div class="solution"><div class="step"><strong>Step 1 — subtract \(b\):</strong> \(y-b = mx\).</div><div class="step"><strong>Step 2 — divide by \(m\):</strong> \(x=\dfrac{y-b}{m}\).</div><em>Conclusion: \(x=\dfrac{y-b}{m}\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: The target appears twice — factor first</h3><p>Solve \(A = P + Prt\) for \(P\).</p><div class="solution"><div class="step"><strong>Step 1 — factor \(P\) from the right side:</strong> \(A = P(1+rt)\).</div><div class="step"><strong>Step 2 — divide by \((1+rt)\):</strong> \(P=\dfrac{A}{1+rt}\).</div><em>Conclusion: \(P=\dfrac{A}{1+rt}\). ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Solve \(C = 2\pi r\) for \(r\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(r=\dfrac{C}{2\pi}\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Solve \(F = ma\) for \(a\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(a=\dfrac{F}{m}\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Solve \(V = \ell w h\) for \(h\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(h=\dfrac{V}{\ell w}\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Solve \(2x + 3y = 12\) for \(y\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(3y = 12-2x\Rightarrow y=\dfrac{12-2x}{3}\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>Solve \(S = \tfrac{n}{2}(a+\ell)\) for \(\ell\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\dfrac{2S}{n}=a+\ell\Rightarrow \ell=\dfrac{2S}{n}-a\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: Isn't this just algebra with letters?</h3><p><em>Exactly — treat the other letters as numbers and use the same inverse operations.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: My variable shows up twice. Now what?</h3><p><em>Gather those terms on one side and <strong>factor the variable out</strong>, then divide (see Example 5).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: Why bother rearranging at all?</h3><p><em>One rearranged formula lets you solve for whichever quantity a problem asks for, without redoing the algebra each time.</em></p></div>
</div>`)]);

authored["1.3"] = L("1.3", "Compound Inequalities & Set Notation", [html(String.raw`<div class="lecture-box">
  <h1>↔️ Compound Inequalities &amp; Set Notation</h1>
  <p><strong>Overview.</strong> Inequalities describe a <em>range</em> of solutions. A <strong>compound inequality</strong> joins two conditions with <strong>“and”</strong> (both must hold) or <strong>“or”</strong> (either may hold). We solve them like equations, then record the answer three ways: on a number line, in <strong>set-builder</strong> notation, and in <strong>interval</strong> notation.</p>
  <h2>📌 The toolkit</h2>
  <ul>
    <li>Solve using inverse operations — but <strong>flip the inequality sign</strong> whenever you multiply or divide by a negative.</li>
    <li><strong>“And”</strong> = overlap (intersection); <strong>“or”</strong> = everything in either (union).</li>
    <li>Notation: \(\{x \mid -1 &lt; x \le 2\}\) (set-builder) is the interval \((-1,\,2]\). A round bracket excludes the endpoint; a square bracket includes it.</li>
  </ul>
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: One-variable inequality</h3><p>Solve \(2x - 3 &lt; 7\) and write the interval.</p><div class="solution"><div class="step"><strong>Step 1 — add 3:</strong> \(2x &lt; 10\).</div><div class="step"><strong>Step 2 — divide by 2:</strong> \(x &lt; 5\).</div><em>Conclusion: \(\{x \mid x&lt;5\}\), interval \((-\infty,\,5)\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Flip the sign</h3><p>Solve \(-3x \ge 12\).</p><div class="solution"><div class="step"><strong>Step 1 — divide by \(-3\) and flip:</strong> \(x \le -4\).</div><em>Conclusion: \(\{x \mid x \le -4\}\), interval \((-\infty,\,-4]\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: “And” (between)</h3><p>Solve \(-1 &lt; 2x + 1 \le 5\).</p><div class="solution"><div class="step"><strong>Step 1 — subtract 1 from all three parts:</strong> \(-2 &lt; 2x \le 4\).</div><div class="step"><strong>Step 2 — divide all parts by 2:</strong> \(-1 &lt; x \le 2\).</div><em>Conclusion: \(\{x \mid -1&lt;x\le 2\}\), interval \((-1,\,2]\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: “Or” (union)</h3><p>Solve \(x - 2 &lt; -3\) <strong>or</strong> \(x + 1 &gt; 4\).</p><div class="solution"><div class="step"><strong>Step 1 — solve each:</strong> \(x &lt; -1\) or \(x &gt; 3\).</div><em>Conclusion: \(\{x \mid x&lt;-1 \text{ or } x&gt;3\}\), interval \((-\infty,\,-1)\cup(3,\,\infty)\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: From words to notation</h3><p>“All numbers at least \(-2\) and less than \(6\).” Write it three ways.</p><div class="solution"><div class="step"><strong>Inequality:</strong> \(-2 \le x &lt; 6\).</div><div class="step"><strong>Set-builder:</strong> \(\{x \mid -2 \le x &lt; 6\}\). <strong>Interval:</strong> \([-2,\,6)\).</div><em>Conclusion: square bracket at \(-2\) (included), round at \(6\) (excluded). ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Solve \(3x + 4 \le 19\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(x \le 5\); interval \((-\infty,5]\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Solve \(-2x &gt; 10\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Divide by \(-2\), flip: \(x &lt; -5\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Solve \(0 \le 2x - 4 &lt; 6\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(4 \le 2x &lt; 10\Rightarrow 2 \le x &lt; 5\); interval \([2,5)\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Solve \(x + 5 &lt; 3\) or \(x - 1 &gt; 2\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(x &lt; -2\) or \(x &gt; 3\); interval \((-\infty,-2)\cup(3,\infty)\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>Write \(\{x \mid -3 &lt; x \le 4\}\) in interval notation.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\((-3,\,4]\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: When exactly do I flip the sign?</h3><p><em>Only when you multiply or divide <strong>both sides by a negative number</strong>. Adding or subtracting never flips it.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: What's the difference between “and” and “or”?</h3><p><em>“And” keeps only the overlap of the two solution sets; “or” keeps everything in either set.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: Round bracket or square bracket?</h3><p><em>Round \(( )\) excludes the endpoint (\(&lt;,&gt;\)); square \([ ]\) includes it (\(\le,\ge\)). \(\infty\) always gets a round bracket.</em></p></div>
</div>`)]);

authored["1.4"] = L("1.4", "Absolute Value Equations & Inequalities", [html(String.raw`<div class="lecture-box">
  <h1>│x│ Absolute Value Equations &amp; Inequalities</h1>
  <p><strong>Overview.</strong> The <strong>absolute value</strong> \(|x|\) is the <em>distance</em> of \(x\) from zero, so it's never negative. Because two points sit a given distance from zero (one on each side), absolute-value problems almost always split into <strong>two cases</strong>.</p>
  <h2>📌 The toolkit</h2>
  <ul>
    <li><strong>Equation:</strong> \(|ax+b|=c\ (c\ge 0)\) means \(ax+b=c\) <strong>or</strong> \(ax+b=-c\).</li>
    <li><strong>“Less than”:</strong> \(|x|&lt;c\) means \(-c&lt;x&lt;c\) (a single “between” interval).</li>
    <li><strong>“Greater than”:</strong> \(|x|&gt;c\) means \(x&lt;-c\) <strong>or</strong> \(x&gt;c\) (two outer pieces).</li>
    <li>If \(c&lt;0\): \(|x|=c\) has <strong>no solution</strong>; \(|x|&gt;c\) is <strong>always true</strong>.</li>
  </ul>
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Basic equation</h3><p>Solve \(|x| = 7\).</p><div class="solution"><div class="step"><strong>Two cases:</strong> \(x = 7\) or \(x = -7\).</div><em>Conclusion: \(x = \pm 7\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Shift inside</h3><p>Solve \(|x - 3| = 5\).</p><div class="solution"><div class="step"><strong>Case 1:</strong> \(x-3=5\Rightarrow x=8\).</div><div class="step"><strong>Case 2:</strong> \(x-3=-5\Rightarrow x=-2\).</div><em>Conclusion: \(x = 8\) or \(x = -2\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: Coefficient inside</h3><p>Solve \(|2x + 1| = 9\).</p><div class="solution"><div class="step"><strong>Case 1:</strong> \(2x+1=9\Rightarrow x=4\).</div><div class="step"><strong>Case 2:</strong> \(2x+1=-9\Rightarrow x=-5\).</div><em>Conclusion: \(x = 4\) or \(x = -5\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: “Less than” inequality</h3><p>Solve \(|x - 2| &lt; 4\).</p><div class="solution"><div class="step"><strong>Write as a “between”:</strong> \(-4 &lt; x-2 &lt; 4\).</div><div class="step"><strong>Add 2 to all parts:</strong> \(-2 &lt; x &lt; 6\).</div><em>Conclusion: \((-2,\,6)\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: “Greater than” inequality</h3><p>Solve \(|2x + 1| \ge 5\).</p><div class="solution"><div class="step"><strong>Split into two:</strong> \(2x+1 \le -5\) or \(2x+1 \ge 5\).</div><div class="step"><strong>Solve each:</strong> \(x \le -3\) or \(x \ge 2\).</div><em>Conclusion: \((-\infty,\,-3]\cup[2,\,\infty)\). ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Solve \(|x| = 12\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(x = \pm 12\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Solve \(|x + 4| = 6\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(x = 2\) or \(x = -10\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Solve \(|3x - 2| = 10\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(3x-2=\pm10\Rightarrow x=4\) or \(x=-\tfrac{8}{3}\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Solve \(|x + 1| \le 3\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(-3\le x+1\le 3\Rightarrow -4\le x\le 2\); \([-4,2]\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>Solve \(|x - 5| &gt; 2\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(x&lt;3\) or \(x&gt;7\); \((-\infty,3)\cup(7,\infty)\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: Why are there two answers?</h3><p><em>Two numbers sit the same distance from zero — one positive, one negative — so \(|ax+b|=c\) gives two equations.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: How do I remember \(&lt;\) vs \(&gt;\)?</h3><p><em>“Less th<strong>AN</strong>d” → one between interval; “great<strong>OR</strong>” → two outer pieces joined by <em>or</em>.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: Can \(|x| = -3\) be solved?</h3><p><em>No — absolute value can't be negative, so there's no solution. (And \(|x| &gt; -3\) is true for every \(x\).)</em></p></div>
</div>`)]);

authored["1.5"] = L("1.5", "Modeling Real-World Contexts with Linear Constraints", [html(String.raw`<div class="lecture-box">
  <h1>🌍 Modeling Real-World Contexts with Linear Constraints</h1>
  <p><strong>Overview.</strong> The power of algebra is turning a <em>situation</em> into an equation or inequality, solving it, and reading the answer back in plain language. The skill is the <strong>translation</strong>: name the unknown, catch the keywords, build the model, solve, and check that the answer makes sense.</p>
  <h2>📌 The toolkit</h2>
  <ul>
    <li><strong>Define a variable</strong> for the unknown (with units).</li>
    <li><strong>Keywords:</strong> “per / each” → a rate (multiply); “total / in all” → sum; “at most / no more than” → \(\le\); “at least / minimum” → \(\ge\).</li>
    <li>Build <strong>fixed + variable·(quantity)</strong>, solve, then <strong>interpret</strong> — and round sensibly for the context (you can't buy \(3.7\) tickets).</li>
  </ul>
  ${gframe(["y = 2*x + 3", "y = 15"], { title: "Taxi cost 3 + 2·(miles) reaches $15 at 6 miles", xMin: -1, xMax: 10, yMin: -1, yMax: 20 })}
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Cost equation</h3><p>A taxi charges $3 plus $2 per mile. How far can you go for exactly $15?</p><div class="solution"><div class="step"><strong>Model:</strong> let \(m\) = miles; \(3 + 2m = 15\).</div><div class="step"><strong>Solve:</strong> \(2m = 12\Rightarrow m = 6\).</div><em>Conclusion: 6 miles. ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: “At most” (a budget)</h3><p>Notebooks cost $8 each and you have $50. How many can you buy?</p><div class="solution"><div class="step"><strong>Model:</strong> let \(n\) = notebooks; \(8n \le 50\).</div><div class="step"><strong>Solve:</strong> \(n \le 6.25\).</div><em>Conclusion: at most <strong>6</strong> notebooks (round down — you can't buy a fraction). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: “At least” (a goal)</h3><p>You earn $12 per hour and need to raise <em>at least</em> $180. How many hours must you work?</p><div class="solution"><div class="step"><strong>Model:</strong> let \(h\) = hours; \(12h \ge 180\).</div><div class="step"><strong>Solve:</strong> \(h \ge 15\).</div><em>Conclusion: at least 15 hours. ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: Fixed fee plus a rate, with a cap</h3><p>A gym charges a $20 joining fee plus $10 per month. For how many months is the total <em>no more than</em> $100?</p><div class="solution"><div class="step"><strong>Model:</strong> let \(t\) = months; \(20 + 10t \le 100\).</div><div class="step"><strong>Solve:</strong> \(10t \le 80\Rightarrow t \le 8\).</div><em>Conclusion: up to 8 months. ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: Comparing two plans</h3><p>Plan A: $30 flat. Plan B: $6 per class. When does Plan A cost <em>less</em>?</p><div class="solution"><div class="step"><strong>Model:</strong> let \(c\) = classes; want \(30 &lt; 6c\).</div><div class="step"><strong>Solve:</strong> \(c &gt; 5\).</div><em>Conclusion: Plan A is cheaper once you take <strong>6 or more</strong> classes. ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>A plumber charges $40 plus $25 per hour. What does a 3-hour job cost?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(40 + 25(3) = \$115\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Tickets are $9 each and you have $60. At most how many can you buy?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(9t \le 60\Rightarrow t \le 6.67\), so <strong>6</strong> tickets.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>You save $15 per week and want at least $120. How many weeks?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(15w \ge 120\Rightarrow w \ge 8\) weeks.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>A phone plan is $25 plus $0.10 per text. Write the cost \(C\) for \(x\) texts, then find \(C\) for 200 texts.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(C = 25 + 0.10x\); at \(x=200\), \(C=\$45\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>Ride A: $2 per lap. Ride B: $10 flat. When is Ride A cheaper?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(2\ell &lt; 10\Rightarrow \ell &lt; 5\): fewer than 5 laps.</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: How do I know whether to use \(=\) or an inequality?</h3><p><em>“Exactly” → an equation; “at most / at least / no more than” → an inequality.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: My answer came out as a decimal — is that wrong?</h3><p><em>Not wrong, but interpret it. For countable things (tickets, months) round toward what the context allows — usually <strong>down</strong> for a budget, <strong>up</strong> for a goal.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: What's the single most common mistake?</h3><p><em>Forgetting the <strong>fixed</strong> starting amount. Model as <em>fixed + rate × quantity</em>, not just rate × quantity.</em></p></div>
</div>`)]);

authored["2.1"] = L("2.1", "Function Notation, Domain, and Range", [html(String.raw`<div class="lecture-box">
  <h1>🔤 Function Notation, Domain, and Range</h1>
  <p><strong>Overview.</strong> A <strong>function</strong> is a rule that gives exactly one output for each input. We write it as \(f(x)\) — read “\(f\) of \(x\)” — where \(x\) is the input and \(f(x)\) is the output. The set of allowed inputs is the <strong>domain</strong>; the set of outputs is the <strong>range</strong>.</p>
  <h2>📌 The toolkit</h2>
  <ul>
    <li><strong>Evaluate</strong> \(f(a)\) by substituting \(a\) for every \(x\).</li>
    <li>\(f(x)\) is <strong>not</strong> \(f\) times \(x\) — it names the output.</li>
    <li><strong>Domain</strong> = allowed \(x\)-values; <strong>range</strong> = resulting \(y\)-values. A context can restrict them (e.g. time \(\ge 0\)).</li>
  </ul>
  ${gframe(["y = 3*x - 2"], { title: "f(x) = 3x − 2: input x on the horizontal axis, output f(x) on the vertical", xMin: -5, xMax: 5, yMin: -12, yMax: 12 })}
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Evaluate a linear function</h3><p>If \(f(x) = 3x - 2\), find \(f(4)\).</p><div class="solution"><div class="step"><strong>Substitute \(x=4\):</strong> \(3(4)-2 = 10\).</div><em>Conclusion: \(f(4)=10\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Evaluate at a negative input</h3><p>If \(f(x) = x^2 + 1\), find \(f(-3)\).</p><div class="solution"><div class="step"><strong>Substitute \(x=-3\):</strong> \((-3)^2 + 1 = 9+1 = 10\).</div><em>Conclusion: \(f(-3)=10\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: Work backwards — solve \(f(x)=k\)</h3><p>If \(f(x) = 2x + 1\), for what \(x\) is \(f(x) = 9\)?</p><div class="solution"><div class="step"><strong>Set equal:</strong> \(2x + 1 = 9\).</div><div class="step"><strong>Solve:</strong> \(2x=8\Rightarrow x=4\).</div><em>Conclusion: \(x=4\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: Domain and range of a line</h3><p>State the domain and range of \(f(x) = 3x - 2\).</p><div class="solution"><div class="step"><strong>Reasoning:</strong> any real \(x\) works, and the outputs sweep all reals.</div><em>Conclusion: domain \(\{x \mid x\in\mathbb{R}\}\), range \(\{y \mid y\in\mathbb{R}\}\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: Domain restricted by context</h3><p>A tank drains by \(V(t) = 50 - 5t\) litres after \(t\) minutes. Find the sensible domain.</p><div class="solution"><div class="step"><strong>Reasoning:</strong> time can't be negative, and the tank empties when \(V=0\): \(50-5t=0\Rightarrow t=10\).</div><em>Conclusion: domain \(0 \le t \le 10\). ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>If \(f(x) = 5x - 4\), find \(f(3)\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(f(3)=11\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>If \(g(x) = x^2 - 2x\), find \(g(-2)\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(4+4=8\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>If \(f(x) = 4x - 1\), for what \(x\) is \(f(x) = 15\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(4x=16\Rightarrow x=4\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>If \(f(x) = 7\) for every \(x\) (a constant function), what is its range?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Just \(\{7\}\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>A rental is \(C(h) = 20 + 15h\) for \(h\) hours, up to 8 hours. State the domain.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(0 \le h \le 8\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: Does \(f(x)\) mean \(f\) times \(x\)?</h3><p><em>No. It names the output of the function \(f\) for the input \(x\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: Which is domain, which is range?</h3><p><em>Domain = inputs (\(x\)); range = outputs (\(y\)). Alphabetical order matches: <strong>d</strong>omain before <strong>r</strong>ange, \(x\) before \(y\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: How do I know a graph is a function?</h3><p><em>The <strong>vertical line test</strong>: any vertical line crosses the graph at most once.</em></p></div>
</div>`)]);

authored["2.2"] = L("2.2", "Intercepts, Slope, and Rate of Change", [html(String.raw`<div class="lecture-box">
  <h1>📈 Intercepts, Slope, and Rate of Change</h1>
  <p><strong>Overview.</strong> A line is captured by two ideas: <strong>where it crosses the axes</strong> (its intercepts) and <strong>how steeply it climbs</strong> (its slope). Slope is the same thing as a <strong>rate of change</strong> — how much \(y\) changes for each 1-unit change in \(x\).</p>
  <h2>📌 The toolkit</h2>
  <ul>
    <li><strong>\(y\)-intercept:</strong> set \(x=0\). <strong>\(x\)-intercept:</strong> set \(y=0\).</li>
    <li><strong>Slope:</strong> \(m = \dfrac{\text{rise}}{\text{run}} = \dfrac{y_2 - y_1}{x_2 - x_1}\).</li>
    <li>Horizontal line: \(m=0\). Vertical line: slope is <strong>undefined</strong>.</li>
  </ul>
  ${gframe(["y = 2*x + 1"], { title: "y = 2x + 1: y-intercept (0, 1), slope 2 (up 2 for every 1 across)", xMin: -5, xMax: 5, yMin: -9, yMax: 11 })}
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Intercepts from an equation</h3><p>Find the intercepts of \(2x + 3y = 12\).</p><div class="solution"><div class="step"><strong>\(y\)-intercept (\(x=0\)):</strong> \(3y=12\Rightarrow (0,4)\).</div><div class="step"><strong>\(x\)-intercept (\(y=0\)):</strong> \(2x=12\Rightarrow (6,0)\).</div><em>Conclusion: \((0,4)\) and \((6,0)\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Slope from two points</h3><p>Find the slope through \((1,2)\) and \((4,11)\).</p><div class="solution"><div class="step"><strong>Apply the formula:</strong> \(m=\dfrac{11-2}{4-1}=\dfrac{9}{3}=3\).</div><em>Conclusion: \(m=3\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: Slope from slope-intercept form</h3><p>State the slope and \(y\)-intercept of \(y = -\tfrac{2}{3}x + 5\).</p><div class="solution"><div class="step"><strong>Read \(m\) and \(b\):</strong> \(m=-\tfrac{2}{3}\), \(b=5\).</div><em>Conclusion: slope \(-\tfrac{2}{3}\), \(y\)-intercept \((0,5)\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: Slope as a rate of change</h3><p>A taxi's cost is \(C = 3 + 2m\). What does the slope mean?</p><div class="solution"><div class="step"><strong>Interpret:</strong> the slope 2 is the rate — cost rises <strong>$2 per mile</strong>; the 3 is the fixed start.</div><em>Conclusion: $2/mile. ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: Zero and undefined slope</h3><p>Give the slope of \(y = 4\) and of \(x = -1\).</p><div class="solution"><div class="step"><strong>Horizontal \(y=4\):</strong> no rise, \(m=0\).</div><div class="step"><strong>Vertical \(x=-1\):</strong> no run, slope <strong>undefined</strong>.</div><em>Conclusion: \(0\) and undefined. ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Find the intercepts of \(x - 2y = 8\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\((8,0)\) and \((0,-4)\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Slope through \((-2,3)\) and \((2,11)\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(m=\dfrac{11-3}{2-(-2)}=2\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Slope and \(y\)-intercept of \(y = 4x - 7\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(m=4\), \((0,-7)\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>A pool fills by \(V = 100 + 20t\) litres. What's the fill rate?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>20 litres per minute.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>What is the slope of the horizontal line \(y = -6\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(0\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: Which intercept do I set to zero?</h3><p><em>For the \(y\)-intercept set \(x=0\); for the \(x\)-intercept set \(y=0\). Set the <strong>other</strong> variable to zero.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: What does a negative slope mean?</h3><p><em>The line falls left-to-right: \(y\) decreases as \(x\) increases.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: Zero slope vs. undefined slope?</h3><p><em>Horizontal ⇒ slope \(0\); vertical ⇒ slope undefined (you'd divide by a zero run).</em></p></div>
</div>`)]);

authored["2.3"] = L("2.3", "Writing Linear Equations (Slope-Intercept, Point-Slope, Standard Form)", [html(String.raw`<div class="lecture-box">
  <h1>✍️ Writing Linear Equations</h1>
  <p><strong>Overview.</strong> The same line can be written three ways. Choose the form that fits the information you're given, then convert as needed.</p>
  <h2>📌 The three forms</h2>
  <ul>
    <li><strong>Slope-intercept:</strong> \(y = mx + b\) — best when you know the slope and \(y\)-intercept.</li>
    <li><strong>Point-slope:</strong> \(y - y_1 = m(x - x_1)\) — best from a point and a slope.</li>
    <li><strong>Standard:</strong> \(Ax + By = C\) — tidy for intercepts and integer coefficients.</li>
  </ul>
  ${gframe(["y = 3*x + 1"], { title: "y = 3x + 1 — the same line in every form", xMin: -5, xMax: 5, yMin: -14, yMax: 16 })}
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: From slope and \(y\)-intercept</h3><p>Slope 2, \(y\)-intercept \(-3\).</p><div class="solution"><div class="step"><strong>Plug into \(y=mx+b\):</strong> \(m=2,\ b=-3\).</div><em>Conclusion: \(y = 2x - 3\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: From a point and a slope</h3><p>Slope 3 through \((2,5)\).</p><div class="solution"><div class="step"><strong>Point-slope:</strong> \(y - 5 = 3(x - 2)\).</div><div class="step"><strong>Simplify:</strong> \(y = 3x - 6 + 5 = 3x - 1\).</div><em>Conclusion: \(y = 3x - 1\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: From two points</h3><p>Through \((1,4)\) and \((3,10)\).</p><div class="solution"><div class="step"><strong>Slope:</strong> \(m=\dfrac{10-4}{3-1}=3\).</div><div class="step"><strong>Use \((1,4)\):</strong> \(y - 4 = 3(x-1)\Rightarrow y = 3x + 1\).</div><em>Conclusion: \(y = 3x + 1\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: Convert to standard form</h3><p>Write \(y = \tfrac{2}{3}x + 4\) in standard form with integer coefficients.</p><div class="solution"><div class="step"><strong>Multiply by 3:</strong> \(3y = 2x + 12\).</div><div class="step"><strong>Rearrange:</strong> \(-2x + 3y = 12\Rightarrow 2x - 3y = -12\).</div><em>Conclusion: \(2x - 3y = -12\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: Horizontal and vertical lines</h3><p>Write the line through \((4,-1)\) that is (a) horizontal, (b) vertical.</p><div class="solution"><div class="step"><strong>(a) Horizontal:</strong> \(y=-1\). <strong>(b) Vertical:</strong> \(x=4\).</div><em>Conclusion: \(y=-1\) and \(x=4\). ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Slope \(-4\), \(y\)-intercept 2. Write the equation.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(y = -4x + 2\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Slope 5 through \((1,3)\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(y - 3 = 5(x-1)\Rightarrow y = 5x - 2\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Through \((2,3)\) and \((6,11)\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(m=2\Rightarrow y = 2x - 1\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Convert \(y = -\tfrac{1}{2}x + 3\) to standard form.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(x + 2y = 6\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>Write the vertical line through \((-3, 7)\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(x = -3\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: Which form should I start from?</h3><p><em>Point + slope ⇒ point-slope. Slope + \(y\)-intercept ⇒ slope-intercept. Two points ⇒ find the slope first, then either form.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: What makes standard form “standard”?</h3><p><em>Integer \(A,B,C\) with \(A\ge 0\), and \(x,y\) on the same side.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: Why is point-slope so handy?</h3><p><em>You can write the line instantly from a single point and the slope — no need to solve for \(b\) first.</em></p></div>
</div>`)]);

authored["2.4"] = L("2.4", "Parallel and Perpendicular Lines on the Coordinate Plane", [html(String.raw`<div class="lecture-box">
  <h1>∥⟂ Parallel and Perpendicular Lines</h1>
  <p><strong>Overview.</strong> Slope alone tells you how two lines relate. <strong>Parallel</strong> lines never meet — they have <strong>equal slopes</strong>. <strong>Perpendicular</strong> lines cross at a right angle — their slopes are <strong>negative reciprocals</strong>.</p>
  <h2>📌 The toolkit</h2>
  <ul>
    <li><strong>Parallel:</strong> \(m_1 = m_2\).</li>
    <li><strong>Perpendicular:</strong> \(m_1 \cdot m_2 = -1\), i.e. \(m_2 = -\dfrac{1}{m_1}\) (flip and negate).</li>
    <li>A horizontal line (\(m=0\)) is perpendicular to a vertical line (undefined slope).</li>
  </ul>
  ${gframe(["y = 2*x + 1", "y = 2*x - 3"], { title: "Two parallel lines — same slope 2, different intercepts", xMin: -5, xMax: 5, yMin: -13, yMax: 11 })}
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Are they parallel?</h3><p>Do \(y = 2x + 1\) and \(y = 2x - 4\) run parallel?</p><div class="solution"><div class="step"><strong>Compare slopes:</strong> both are 2.</div><em>Conclusion: yes — parallel. ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Perpendicular slope</h3><p>What slope is perpendicular to \(m = 3\)?</p><div class="solution"><div class="step"><strong>Flip and negate:</strong> \(-\dfrac{1}{3}\).</div><em>Conclusion: \(-\tfrac{1}{3}\) (check: \(3\cdot-\tfrac13=-1\)). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: Line parallel through a point</h3><p>Write the line parallel to \(y = 2x + 1\) through \((0, 5)\).</p><div class="solution"><div class="step"><strong>Same slope 2, \(y\)-intercept 5:</strong> \(y = 2x + 5\).</div><em>Conclusion: \(y = 2x + 5\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: Line perpendicular through a point</h3><p>Write the line perpendicular to \(y = \tfrac{1}{2}x\) through \((2, 3)\).</p><div class="solution"><div class="step"><strong>Perpendicular slope:</strong> \(-2\).</div><div class="step"><strong>Point-slope:</strong> \(y - 3 = -2(x - 2)\Rightarrow y = -2x + 7\).</div><em>Conclusion: \(y = -2x + 7\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: Decide from the equations</h3><p>Are \(y = -3x + 2\) and \(y = \tfrac{1}{3}x - 4\) parallel, perpendicular, or neither?</p><div class="solution"><div class="step"><strong>Slopes:</strong> \(-3\) and \(\tfrac13\); product \(-3\cdot\tfrac13 = -1\).</div><em>Conclusion: perpendicular. ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>What slope is parallel to \(m = -5\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(-5\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>What slope is perpendicular to \(m = -\tfrac{2}{3}\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\tfrac{3}{2}\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Line parallel to \(y = 4x - 1\) through \((0, -2)\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(y = 4x - 2\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Line perpendicular to \(y = \tfrac{1}{4}x + 5\) through \((0, 1)\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Slope \(-4\): \(y = -4x + 1\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>Are \(y = 2x + 3\) and \(y = 2x - 9\) parallel, perpendicular, or neither?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Parallel (equal slopes).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: What's a “negative reciprocal”?</h3><p><em>Flip the fraction and change its sign: the negative reciprocal of \(\tfrac{2}{3}\) is \(-\tfrac{3}{2}\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: Do parallel lines ever share a point?</h3><p><em>No — same slope, different intercept means they never meet. (Same slope <em>and</em> same intercept is the identical line.)</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: What's perpendicular to a horizontal line?</h3><p><em>A vertical line — \(y=k\) is perpendicular to \(x=c\).</em></p></div>
</div>`)]);

authored["2.5"] = L("2.5", "Function Transformations: f(x)+k, kf(x), f(x+k)", [html(String.raw`<div class="lecture-box">
  <h1>🔀 Function Transformations</h1>
  <p><strong>Overview.</strong> Small changes to a function's rule move its graph in predictable ways. Learn three building blocks and you can shift, stretch, and slide any graph.</p>
  <h2>📌 The toolkit</h2>
  <ul>
    <li><strong>\(f(x) + k\):</strong> vertical shift — <strong>up</strong> by \(k\) (down if \(k&lt;0\)).</li>
    <li><strong>\(k\,f(x)\):</strong> vertical stretch by factor \(k\) (\(|k|&gt;1\) taller, \(0&lt;|k|&lt;1\) shorter; \(k&lt;0\) flips over the \(x\)-axis).</li>
    <li><strong>\(f(x + k)\):</strong> horizontal shift — <strong>left</strong> by \(k\) (right if \(k&lt;0\)). Note it moves the <em>opposite</em> way to the sign.</li>
  </ul>
  ${gframe(["y = x^2", "y = x^2 + 3"], { title: "y = x² and y = x² + 3 — the same parabola shifted up 3", xMin: -5, xMax: 5, yMin: -2, yMax: 20 })}
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Vertical shift up</h3><p>Describe \(g(x) = x^2 + 3\) relative to \(f(x) = x^2\).</p><div class="solution"><div class="step"><strong>Form \(f(x)+k\) with \(k=3\):</strong> shift up.</div><em>Conclusion: the parabola moves up 3 units. ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Vertical shift down</h3><p>Describe \(g(x) = x^2 - 2\) relative to \(f(x)=x^2\).</p><div class="solution"><div class="step"><strong>\(k=-2\):</strong> shift down.</div><em>Conclusion: down 2 units. ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: Vertical stretch</h3><p>Describe \(g(x) = 2f(x)\) where \(f(x)=x^2\).</p><div class="solution"><div class="step"><strong>\(k=2\):</strong> every output doubles.</div><em>Conclusion: a vertical stretch by factor 2 (the parabola gets narrower). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: Horizontal shift (the tricky sign)</h3><p>How does \(g(x) = f(x + 3)\) move \(f\)?</p><div class="solution"><div class="step"><strong>Inside \(+3\):</strong> the graph shifts the <em>opposite</em> way.</div><em>Conclusion: shift <strong>left</strong> 3 units. ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: Combine transformations</h3><p>Describe \(g(x) = (x - 1)^2 + 2\) from \(f(x) = x^2\).</p><div class="solution"><div class="step"><strong>\((x-1)\):</strong> right 1. <strong>\(+2\):</strong> up 2.</div><em>Conclusion: vertex moves from \((0,0)\) to \((1,2)\). ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Describe \(g(x) = x^2 + 5\) from \(f(x)=x^2\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Up 5.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Describe \(g(x) = x^2 - 4\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Down 4.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Describe \(g(x) = 3f(x)\), \(f(x)=x^2\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Vertical stretch by 3 (narrower).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Which way does \(g(x) = f(x - 2)\) shift the graph?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Right 2.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>Where is the vertex of \(g(x) = (x + 3)^2 - 1\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\((-3, -1)\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: Why does \(f(x+3)\) go <em>left</em>?</h3><p><em>The input reaches its value 3 units sooner, so the whole graph slides left — inside changes act opposite to their sign.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: Stretch or compression?</h3><p><em>\(|k|&gt;1\) stretches (taller/narrower); \(0&lt;|k|&lt;1\) compresses (shorter/wider).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: What does a negative \(k\) in \(kf(x)\) do?</h3><p><em>It reflects the graph over the \(x\)-axis (flips it upside down).</em></p></div>
</div>`)]);

authored["3.1"] = L("3.1", "Solving Systems by Graphing & Substitution", [html(String.raw`<div class="lecture-box">
  <h1>🤝 Solving Systems by Graphing &amp; Substitution</h1>
  <p><strong>Overview.</strong> A <strong>system</strong> is two (or more) equations that must hold at once. Its <strong>solution</strong> is the \((x,y)\) that satisfies <em>both</em> — graphically, the point where the lines cross. Graphing shows the idea; <strong>substitution</strong> gives an exact answer.</p>
  <h2>📌 The toolkit</h2>
  <ul>
    <li><strong>Graphing:</strong> draw both lines; the intersection is the solution.</li>
    <li><strong>Substitution:</strong> solve one equation for a variable, substitute into the other, solve, then back-substitute.</li>
    <li>Always <strong>check</strong> the point in both equations.</li>
  </ul>
  ${gframe(["y = x + 1", "y = -x + 5"], { title: "The lines y = x + 1 and y = −x + 5 cross at (2, 3)", xMin: -3, xMax: 7, yMin: -3, yMax: 9 })}
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: By graphing</h3><p>Solve \(\begin{cases} y = x + 1\\ y = -x + 5\end{cases}\)</p><div class="solution"><div class="step"><strong>Both graphed:</strong> they cross where \(x+1=-x+5\Rightarrow x=2,\ y=3\).</div><em>Conclusion: \((2, 3)\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Substitution (one already isolated)</h3><p>Solve \(\begin{cases} y = 2x\\ x + y = 6\end{cases}\)</p><div class="solution"><div class="step"><strong>Substitute \(y=2x\):</strong> \(x + 2x = 6\Rightarrow x = 2\).</div><div class="step"><strong>Back-substitute:</strong> \(y = 2(2) = 4\).</div><em>Conclusion: \((2, 4)\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: Isolate first, then substitute</h3><p>Solve \(\begin{cases} x + y = 7\\ 2x - y = 2\end{cases}\)</p><div class="solution"><div class="step"><strong>Solve the first for \(x\):</strong> \(x = 7 - y\).</div><div class="step"><strong>Substitute:</strong> \(2(7-y) - y = 2\Rightarrow 14 - 3y = 2\Rightarrow y = 4\).</div><div class="step"><strong>Back-substitute:</strong> \(x = 3\).</div><em>Conclusion: \((3, 4)\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: A coefficient to handle</h3><p>Solve \(\begin{cases} y = 3x - 4\\ 2x + y = 6\end{cases}\)</p><div class="solution"><div class="step"><strong>Substitute:</strong> \(2x + (3x - 4) = 6\Rightarrow 5x = 10\Rightarrow x = 2\).</div><div class="step"><strong>Back-substitute:</strong> \(y = 3(2) - 4 = 2\).</div><em>Conclusion: \((2, 2)\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: Verify a claimed solution</h3><p>Is \((1, 5)\) a solution of \(\begin{cases} y = 4x + 1\\ x + y = 6\end{cases}\)?</p><div class="solution"><div class="step"><strong>Check both:</strong> \(4(1)+1 = 5\) ✓ and \(1 + 5 = 6\) ✓.</div><em>Conclusion: yes — it satisfies both. ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Solve \(\begin{cases} y = x - 2\\ y = -2x + 7\end{cases}\)</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(x - 2 = -2x + 7\Rightarrow x = 3,\ y = 1\): \((3,1)\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Solve \(\begin{cases} y = 3x\\ x + y = 8\end{cases}\)</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(4x = 8\Rightarrow x = 2,\ y = 6\): \((2,6)\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Solve \(\begin{cases} x + y = 10\\ y = x + 2\end{cases}\)</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(x + x + 2 = 10\Rightarrow x = 4,\ y = 6\): \((4,6)\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Solve \(\begin{cases} 2x + y = 5\\ y = x - 1\end{cases}\)</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(2x + x - 1 = 5\Rightarrow x = 2,\ y = 1\): \((2,1)\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>Is \((4, 1)\) a solution of \(\begin{cases} x - y = 3\\ x + 2y = 6\end{cases}\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(4-1=3\) ✓ and \(4+2=6\) ✓ — yes.</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: What does the solution represent?</h3><p><em>The single \((x,y)\) that makes both equations true — the point where the lines cross.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: When is graphing a bad choice?</h3><p><em>When the intersection isn't at nice whole numbers — reading it off a graph is only approximate, so substitution is safer.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: Which equation should I solve first for substitution?</h3><p><em>The one where a variable already has coefficient 1 (no fractions) — usually the easiest to isolate.</em></p></div>
</div>`)]);

authored["3.2"] = L("3.2", "Solving Systems by Elimination", [html(String.raw`<div class="lecture-box">
  <h1>➕ Solving Systems by Elimination</h1>
  <p><strong>Overview.</strong> <strong>Elimination</strong> adds or subtracts the two equations so that one variable cancels, leaving a single equation in one variable. It's the fastest method when the equations are in standard form.</p>
  <h2>📌 The toolkit</h2>
  <ul>
    <li>Line up like terms; if a variable already has <strong>opposite</strong> coefficients, <strong>add</strong>. If they're <strong>equal</strong>, <strong>subtract</strong>.</li>
    <li>Otherwise <strong>scale</strong> one (or both) equations first to create matching/opposite coefficients.</li>
    <li>Solve for the surviving variable, then <strong>back-substitute</strong>.</li>
  </ul>
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Add to eliminate</h3><p>Solve \(\begin{cases} x + y = 10\\ x - y = 4\end{cases}\)</p><div class="solution"><div class="step"><strong>Add:</strong> the \(y\)'s cancel — \(2x = 14\Rightarrow x = 7\).</div><div class="step"><strong>Back-substitute:</strong> \(7 + y = 10\Rightarrow y = 3\).</div><em>Conclusion: \((7, 3)\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Subtract to eliminate</h3><p>Solve \(\begin{cases} 2x + 3y = 13\\ 2x + y = 7\end{cases}\)</p><div class="solution"><div class="step"><strong>Subtract:</strong> the \(2x\)'s cancel — \(2y = 6\Rightarrow y = 3\).</div><div class="step"><strong>Back-substitute:</strong> \(2x + 3 = 7\Rightarrow x = 2\).</div><em>Conclusion: \((2, 3)\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: Scale one equation</h3><p>Solve \(\begin{cases} x + 2y = 11\\ 3x - y = 5\end{cases}\)</p><div class="solution"><div class="step"><strong>Multiply the first by \(-3\):</strong> \(-3x - 6y = -33\).</div><div class="step"><strong>Add to the second:</strong> \(-7y = -28\Rightarrow y = 4\).</div><div class="step"><strong>Back-substitute:</strong> \(x + 8 = 11\Rightarrow x = 3\).</div><em>Conclusion: \((3, 4)\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: Scale both equations</h3><p>Solve \(\begin{cases} 2x + 3y = 7\\ 3x + 2y = 8\end{cases}\)</p><div class="solution"><div class="step"><strong>To clear \(x\):</strong> ×3 and ×2 give \(6x + 9y = 21\) and \(6x + 4y = 16\).</div><div class="step"><strong>Subtract:</strong> \(5y = 5\Rightarrow y = 1\).</div><div class="step"><strong>Back-substitute:</strong> \(2x + 3 = 7\Rightarrow x = 2\).</div><em>Conclusion: \((2, 1)\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: With negatives</h3><p>Solve \(\begin{cases} 4x - 3y = 5\\ 2x + 3y = 13\end{cases}\)</p><div class="solution"><div class="step"><strong>Add (the \(\pm 3y\) cancel):</strong> \(6x = 18\Rightarrow x = 3\).</div><div class="step"><strong>Back-substitute:</strong> \(2(3) + 3y = 13\Rightarrow y = \tfrac{7}{3}\).</div><em>Conclusion: \(\left(3, \tfrac{7}{3}\right)\). ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Solve \(\begin{cases} x + y = 9\\ x - y = 1\end{cases}\)</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Add: \(2x=10\Rightarrow x=5,\ y=4\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Solve \(\begin{cases} 3x + 2y = 16\\ 3x - y = 4\end{cases}\)</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Subtract: \(3y=12\Rightarrow y=4,\ x=\tfrac{8}{3}\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Solve \(\begin{cases} x + 3y = 14\\ 2x - y = 7\end{cases}\)</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>×2 the first, subtract: \(7y=21\Rightarrow y=3,\ x=5\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Solve \(\begin{cases} 5x + 2y = 1\\ 2x + 3y = 7\end{cases}\)</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Eliminate \(y\): \(11x=-11\Rightarrow x=-1,\ y=3\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>Solve \(\begin{cases} 2x - y = 3\\ 4x + y = 9\end{cases}\)</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Add: \(6x=12\Rightarrow x=2,\ y=1\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: Add or subtract?</h3><p><em>Add when the matching coefficients are <strong>opposite</strong> (\(+3y\) and \(-3y\)); subtract when they're <strong>equal</strong> (\(2x\) and \(2x\)).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: When do I need to scale?</h3><p><em>When no variable's coefficients already match — multiply an equation so they do.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: Elimination or substitution — which is better?</h3><p><em>Elimination shines when equations are in \(Ax+By=C\) form; substitution is easier when a variable is already isolated.</em></p></div>
</div>`)]);

authored["3.3"] = L("3.3", "Real-World Systems Applications & Special Cases (No/Infinite Solutions)", [html(String.raw`<div class="lecture-box">
  <h1>🌐 Systems in Context &amp; Special Cases</h1>
  <p><strong>Overview.</strong> Many real problems hide <em>two</em> unknowns linked by <em>two</em> conditions — a perfect fit for a system. We'll also meet the two special outcomes: <strong>no solution</strong> (parallel lines) and <strong>infinitely many</strong> (the same line).</p>
  <h2>📌 The toolkit</h2>
  <ul>
    <li><strong>Model:</strong> define two variables, write two equations, solve by elimination or substitution.</li>
    <li><strong>No solution:</strong> the variables all cancel and leave a <strong>false</strong> statement (e.g. \(0 = 5\)) — parallel lines.</li>
    <li><strong>Infinitely many:</strong> they cancel and leave a <strong>true</strong> statement (e.g. \(0 = 0\)) — one line drawn twice.</li>
  </ul>
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Ticket sales</h3><p>20 tickets sold for $130. Adult tickets are $8, child $5. How many of each?</p><div class="solution"><div class="step"><strong>Model:</strong> \(a + c = 20\) and \(8a + 5c = 130\).</div><div class="step"><strong>Substitute \(c = 20 - a\):</strong> \(8a + 5(20-a) = 130\Rightarrow 3a = 30\Rightarrow a = 10\).</div><em>Conclusion: 10 adult, 10 child. ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Sum and difference</h3><p>Two numbers add to 24; their difference is 6. Find them.</p><div class="solution"><div class="step"><strong>Model:</strong> \(x + y = 24\), \(x - y = 6\).</div><div class="step"><strong>Add:</strong> \(2x = 30\Rightarrow x = 15,\ y = 9\).</div><em>Conclusion: 15 and 9. ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: A “per unit” model</h3><p>3 coffees and 2 muffins cost $13; 1 coffee and 2 muffins cost $7. Find each price.</p><div class="solution"><div class="step"><strong>Model:</strong> \(3c + 2m = 13\), \(c + 2m = 7\).</div><div class="step"><strong>Subtract:</strong> \(2c = 6\Rightarrow c = 3\), then \(m = 2\).</div><em>Conclusion: coffee $3, muffin $2. ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: No solution</h3><p>Solve \(\begin{cases} y = 2x + 1\\ y = 2x - 3\end{cases}\)</p><div class="solution"><div class="step"><strong>Set equal:</strong> \(2x + 1 = 2x - 3\Rightarrow 1 = -3\), which is false.</div><em>Conclusion: no solution — the lines are parallel. ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: Infinitely many solutions</h3><p>Solve \(\begin{cases} 2x + y = 4\\ 4x + 2y = 8\end{cases}\)</p><div class="solution"><div class="step"><strong>The second is just \(2\times\) the first,</strong> so elimination gives \(0 = 0\) (true).</div><em>Conclusion: infinitely many solutions — the same line. ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>15 coins (dimes &amp; quarters) worth $2.55. How many of each? (\(d + q = 15,\ 10d + 25q = 255\))</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(q = 7,\ d = 8\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Two numbers add to 30; one is 4 more than the other. Find them.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>17 and 13.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>2 shirts and 1 hat cost $35; 1 shirt and 1 hat cost $23. Find each price.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Shirt $12, hat $11.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>How many solutions has \(\begin{cases} y = 3x + 2\\ y = 3x - 5\end{cases}\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>None (parallel; \(2 = -5\) is false).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>How many solutions has \(\begin{cases} x - y = 2\\ 2x - 2y = 4\end{cases}\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Infinitely many (same line).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: How do I set up a word problem?</h3><p><em>Name two variables, then write one equation per condition (a “count” equation and a “value” equation, for instance).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: The variables all cancelled — what does that mean?</h3><p><em>A <strong>false</strong> leftover (\(0=5\)) ⇒ no solution; a <strong>true</strong> one (\(0=0\)) ⇒ infinitely many.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: How can I spot these before solving?</h3><p><em>Same slope, different intercept ⇒ none; same slope <em>and</em> intercept ⇒ infinitely many.</em></p></div>
</div>`)]);

authored["3.4"] = L("3.4", "Graphing Two-Variable Linear Inequalities & Systems", [html(String.raw`<div class="lecture-box">
  <h1>🟦 Graphing Linear Inequalities &amp; Systems</h1>
  <p><strong>Overview.</strong> A two-variable inequality like \(y &lt; 2x + 1\) is satisfied by a whole <strong>region</strong> of the plane, not a single line. We draw its <strong>boundary</strong> line, then <strong>shade</strong> the side that works. A <strong>system</strong> of inequalities is the <em>overlap</em> of the regions.</p>
  <h2>📌 The toolkit</h2>
  <ul>
    <li><strong>Boundary line:</strong> <strong>solid</strong> for \(\le\) or \(\ge\) (included), <strong>dashed</strong> for \(&lt;\) or \(&gt;\) (excluded).</li>
    <li><strong>Which side?</strong> Test a point not on the line (the origin \((0,0)\) is easiest). If it makes the inequality true, shade that side.</li>
    <li><strong>System:</strong> shade each inequality; the solution is where all shadings <strong>overlap</strong>.</li>
  </ul>
  ${gframe(["y = 2*x + 1"], { title: "Boundary y = 2x + 1 (dashed for <): shade below, where (0,0) satisfies y < 2x+1", xMin: -5, xMax: 5, yMin: -9, yMax: 11 })}
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: A “less than” region</h3><p>Graph \(y &lt; 2x + 1\).</p><div class="solution"><div class="step"><strong>Boundary:</strong> \(y = 2x + 1\), <strong>dashed</strong> (strict).</div><div class="step"><strong>Test \((0,0)\):</strong> \(0 &lt; 1\) true ⇒ shade the side containing the origin (below).</div><em>Conclusion: dashed line, shade below. ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: A “greater than or equal” region</h3><p>Graph \(y \ge -x + 3\).</p><div class="solution"><div class="step"><strong>Boundary:</strong> \(y = -x + 3\), <strong>solid</strong> (\(\ge\)).</div><div class="step"><strong>Test \((0,0)\):</strong> \(0 \ge 3\) false ⇒ shade the <em>other</em> side (above).</div><em>Conclusion: solid line, shade above. ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: A vertical boundary</h3><p>Graph \(x \ge 2\).</p><div class="solution"><div class="step"><strong>Boundary:</strong> the vertical line \(x = 2\), solid.</div><div class="step"><strong>Shade:</strong> all points with \(x\) at least 2 — to the right.</div><em>Conclusion: solid vertical line, shade right. ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: Choosing a clear test point</h3><p>Graph \(2x - y &gt; 4\).</p><div class="solution"><div class="step"><strong>Boundary:</strong> \(2x - y = 4\), dashed.</div><div class="step"><strong>Test \((0,0)\):</strong> \(0 &gt; 4\) false ⇒ shade the side <em>not</em> containing the origin.</div><em>Conclusion: dashed line, shade below-right. ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: A system of two inequalities</h3><p>Graph \(\begin{cases} y \le x + 2\\ y &gt; -1\end{cases}\)</p><div class="solution"><div class="step"><strong>First:</strong> solid \(y = x+2\), shade below.</div><div class="step"><strong>Second:</strong> dashed \(y = -1\), shade above.</div><em>Conclusion: the solution is the band where both shadings overlap. ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Is the boundary of \(y \le 3x - 2\) solid or dashed?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Solid (\(\le\) includes the line).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>For \(y &gt; x + 4\), does \((0,0)\) satisfy it?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(0 &gt; 4\) is false — shade the other side.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Which side of \(x &lt; -1\) do you shade?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Left of the (dashed) vertical line \(x=-1\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Is \((1, 1)\) a solution of \(y \ge 2x - 3\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(1 \ge 2(1)-3 = -1\) — yes.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>Is \((0,0)\) in the solution of \(\begin{cases} y &lt; x + 1\\ y &gt; -2\end{cases}\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(0 &lt; 1\) ✓ and \(0 &gt; -2\) ✓ — yes.</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: Solid or dashed?</h3><p><em>Solid for \(\le,\ge\) (the boundary counts); dashed for \(&lt;,&gt;\) (it doesn't).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: How do I pick which side to shade?</h3><p><em>Test one point off the line — the origin if it's not on the boundary. True ⇒ shade that side; false ⇒ shade the other.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: What's the solution of a system of inequalities?</h3><p><em>The region where <strong>all</strong> the individual shadings overlap.</em></p></div>
</div>`)]);

authored["4.1"] = L("4.1", "Laws of Exponents & Rational Exponents", [html(String.raw`<div class="lecture-box">
  <h1>⚡ Laws of Exponents &amp; Rational Exponents</h1>
  <p><strong>Overview.</strong> Exponents are repeated multiplication, and a handful of <strong>laws</strong> let you simplify powers without expanding them. Extending the laws to <strong>zero, negative, and rational</strong> exponents unlocks roots and prepares you for exponential functions.</p>
  <h2>📌 The laws</h2>
  <ul>
    <li><strong>Product:</strong> \(a^m \cdot a^n = a^{m+n}\). <strong>Quotient:</strong> \(\dfrac{a^m}{a^n} = a^{m-n}\). <strong>Power:</strong> \((a^m)^n = a^{mn}\).</li>
    <li><strong>Zero:</strong> \(a^0 = 1\). <strong>Negative:</strong> \(a^{-n} = \dfrac{1}{a^n}\).</li>
    <li><strong>Rational:</strong> \(a^{m/n} = \sqrt[n]{a^m} = \left(\sqrt[n]{a}\right)^m\).</li>
  </ul>
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Product &amp; power laws</h3><p>Simplify \((2x^2)^3 \cdot x\).</p><div class="solution"><div class="step"><strong>Power law:</strong> \((2x^2)^3 = 8x^6\).</div><div class="step"><strong>Product law:</strong> \(8x^6 \cdot x = 8x^7\).</div><em>Conclusion: \(8x^7\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Quotient law</h3><p>Simplify \(\dfrac{x^7}{x^3}\).</p><div class="solution"><div class="step"><strong>Subtract exponents:</strong> \(x^{7-3}\).</div><em>Conclusion: \(x^4\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: Zero &amp; negative exponents</h3><p>Evaluate \(3^{-2}\) and \(5^0\).</p><div class="solution"><div class="step"><strong>Negative:</strong> \(3^{-2} = \dfrac{1}{3^2} = \dfrac{1}{9}\).</div><div class="step"><strong>Zero:</strong> \(5^0 = 1\).</div><em>Conclusion: \(\tfrac{1}{9}\) and \(1\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: Rational exponent</h3><p>Evaluate \(27^{2/3}\).</p><div class="solution"><div class="step"><strong>Root then power:</strong> \(\sqrt[3]{27} = 3\), then \(3^2 = 9\).</div><em>Conclusion: \(9\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: Combine several laws</h3><p>Simplify \(\dfrac{x^4 \cdot x^{-1}}{x^2}\).</p><div class="solution"><div class="step"><strong>Top (product):</strong> \(x^{4+(-1)} = x^3\).</div><div class="step"><strong>Quotient:</strong> \(x^{3-2} = x^1\).</div><em>Conclusion: \(x\). ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Simplify \(a^5 \cdot a^2\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(a^7\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Simplify \((3x^3)^2\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(9x^6\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Evaluate \(2^{-3}\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\dfrac{1}{8}\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Evaluate \(16^{3/4}\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\left(\sqrt[4]{16}\right)^3 = 2^3 = 8\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>Simplify \(\dfrac{y^6}{y^2 \cdot y}\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\dfrac{y^6}{y^3} = y^3\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: Why does \(a^0 = 1\)?</h3><p><em>Because \(\dfrac{a^n}{a^n} = a^{n-n} = a^0\), and any number over itself is 1.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: What does a negative exponent mean?</h3><p><em>“Reciprocal”: \(a^{-n} = \dfrac{1}{a^n}\). It does <strong>not</strong> make the number negative.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: How do I read \(a^{m/n}\)?</h3><p><em>The bottom \(n\) is the root, the top \(m\) is the power: \(a^{m/n} = \sqrt[n]{a^m}\).</em></p></div>
</div>`)]);

authored["4.2"] = L("4.2", "Operations with Radical Expressions", [html(String.raw`<div class="lecture-box">
  <h1>√ Operations with Radical Expressions</h1>
  <p><strong>Overview.</strong> A <strong>radical</strong> is a root, like \(\sqrt{50}\). We <strong>simplify</strong> radicals by pulling out perfect-square factors, <strong>add or subtract</strong> only <em>like</em> radicals, and <strong>multiply</strong> using \(\sqrt{a}\cdot\sqrt{b}=\sqrt{ab}\).</p>
  <h2>📌 The toolkit</h2>
  <ul>
    <li><strong>Simplify:</strong> \(\sqrt{ab} = \sqrt{a}\,\sqrt{b}\); factor out the largest perfect square.</li>
    <li><strong>Add/subtract:</strong> combine only <strong>like radicals</strong> (same number under the root), like adding like terms.</li>
    <li><strong>Multiply:</strong> \(\sqrt{a}\cdot\sqrt{b} = \sqrt{ab}\), then simplify. <strong>Rationalize</strong> to clear a root from a denominator.</li>
  </ul>
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Simplify a radical</h3><p>Simplify \(\sqrt{50}\).</p><div class="solution"><div class="step"><strong>Factor out a perfect square:</strong> \(\sqrt{25 \cdot 2} = \sqrt{25}\,\sqrt{2}\).</div><em>Conclusion: \(5\sqrt{2}\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Add like radicals</h3><p>Simplify \(3\sqrt{2} + 4\sqrt{2}\).</p><div class="solution"><div class="step"><strong>Same radical — add coefficients:</strong> \((3+4)\sqrt{2}\).</div><em>Conclusion: \(7\sqrt{2}\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: Simplify, then combine</h3><p>Simplify \(\sqrt{12} + \sqrt{27}\).</p><div class="solution"><div class="step"><strong>Simplify each:</strong> \(\sqrt{12}=2\sqrt{3}\), \(\sqrt{27}=3\sqrt{3}\).</div><div class="step"><strong>Add like radicals:</strong> \(2\sqrt{3}+3\sqrt{3}\).</div><em>Conclusion: \(5\sqrt{3}\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: Multiply radicals</h3><p>Simplify \(\sqrt{3}\cdot\sqrt{6}\).</p><div class="solution"><div class="step"><strong>Multiply under one root:</strong> \(\sqrt{18}\).</div><div class="step"><strong>Simplify:</strong> \(\sqrt{9\cdot 2}=3\sqrt{2}\).</div><em>Conclusion: \(3\sqrt{2}\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: Rationalize a denominator</h3><p>Simplify \(\dfrac{1}{\sqrt{2}}\).</p><div class="solution"><div class="step"><strong>Multiply top and bottom by \(\sqrt{2}\):</strong> \(\dfrac{\sqrt{2}}{\sqrt{2}\,\sqrt{2}} = \dfrac{\sqrt{2}}{2}\).</div><em>Conclusion: \(\dfrac{\sqrt{2}}{2}\). ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Simplify \(\sqrt{72}\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\sqrt{36\cdot2}=6\sqrt{2}\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Simplify \(5\sqrt{3} - 2\sqrt{3}\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(3\sqrt{3}\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Simplify \(\sqrt{8} + \sqrt{18}\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(2\sqrt{2}+3\sqrt{2}=5\sqrt{2}\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Simplify \(\sqrt{5}\cdot\sqrt{10}\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\sqrt{50}=5\sqrt{2}\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>Rationalize \(\dfrac{3}{\sqrt{5}}\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\dfrac{3\sqrt{5}}{5}\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: When can I add two radicals?</h3><p><em>Only when the expression under the root is the same after simplifying — like terms, e.g. \(2\sqrt3+3\sqrt3\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: Is \(\sqrt{a}+\sqrt{b}=\sqrt{a+b}\)?</h3><p><em>No! That's a common trap. \(\sqrt{9}+\sqrt{16}=3+4=7\), not \(\sqrt{25}=5\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: Why rationalize the denominator?</h3><p><em>It's the standard tidy form — no roots left downstairs — and makes further computation easier.</em></p></div>
</div>`)]);

authored["4.3"] = L("4.3", "Addition, Subtraction, and Multiplication of Polynomials", [html(String.raw`<div class="lecture-box">
  <h1>➗ Adding, Subtracting &amp; Multiplying Polynomials</h1>
  <p><strong>Overview.</strong> A <strong>polynomial</strong> is a sum of terms like \(3x^2 - 5x + 4\). Adding and subtracting is just <strong>combining like terms</strong>; multiplying is the <strong>distributive property</strong> applied carefully (FOIL is the two-binomial case).</p>
  <h2>📌 The toolkit</h2>
  <ul>
    <li><strong>Like terms</strong> share the same variable and exponent (\(3x^2\) and \(-5x^2\)); only like terms combine.</li>
    <li><strong>Subtracting</strong> means adding the opposite — distribute the minus sign to <em>every</em> term.</li>
    <li><strong>Multiplying:</strong> distribute each term of one factor across the other; <strong>FOIL</strong> (First-Outer-Inner-Last) for two binomials.</li>
  </ul>
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Add polynomials</h3><p>Add \((3x^2 + 2x - 1) + (x^2 - 5x + 4)\).</p><div class="solution"><div class="step"><strong>Combine like terms:</strong> \((3+1)x^2 + (2-5)x + (-1+4)\).</div><em>Conclusion: \(4x^2 - 3x + 3\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Subtract polynomials</h3><p>Subtract \((5x^2 - 3x) - (2x^2 + x - 4)\).</p><div class="solution"><div class="step"><strong>Distribute the minus:</strong> \(5x^2 - 3x - 2x^2 - x + 4\).</div><div class="step"><strong>Combine:</strong> \(3x^2 - 4x + 4\).</div><em>Conclusion: \(3x^2 - 4x + 4\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: Monomial × polynomial</h3><p>Expand \(3x(2x^2 - x + 5)\).</p><div class="solution"><div class="step"><strong>Distribute \(3x\):</strong> \(6x^3 - 3x^2 + 15x\).</div><em>Conclusion: \(6x^3 - 3x^2 + 15x\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: FOIL two binomials</h3><p>Expand \((x + 3)(x - 5)\).</p><div class="solution"><div class="step"><strong>FOIL:</strong> \(x^2 - 5x + 3x - 15\).</div><div class="step"><strong>Combine:</strong> \(x^2 - 2x - 15\).</div><em>Conclusion: \(x^2 - 2x - 15\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: Binomial × trinomial</h3><p>Expand \((x + 2)(x^2 + 3x + 1)\).</p><div class="solution"><div class="step"><strong>Distribute each term:</strong> \(x^3 + 3x^2 + x + 2x^2 + 6x + 2\).</div><div class="step"><strong>Combine:</strong> \(x^3 + 5x^2 + 7x + 2\).</div><em>Conclusion: \(x^3 + 5x^2 + 7x + 2\). ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Add \((2x^2 + x) + (3x^2 - 4x + 2)\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(5x^2 - 3x + 2\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Subtract \((4x^2 - 2x + 1) - (x^2 - 3x)\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(3x^2 + x + 1\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Expand \(2x^2(3x - 4)\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(6x^3 - 8x^2\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Expand \((x - 2)(x + 7)\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(x^2 + 5x - 14\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>Expand \((2x + 1)(x^2 - x + 3)\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(2x^3 - x^2 + 5x + 3\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: What exactly are “like terms”?</h3><p><em>Terms with the same variable to the same power. \(3x^2\) and \(7x^2\) combine; \(3x^2\) and \(3x\) do not.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: What's the #1 subtraction mistake?</h3><p><em>Only flipping the sign of the first term. Distribute the minus to <strong>every</strong> term in the second polynomial.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: What's the degree of a product?</h3><p><em>Add the degrees: a degree-1 times a degree-2 gives a degree-3 polynomial.</em></p></div>
</div>`)]);

authored["4.4"] = L("4.4", "Special Polynomial Products (Difference of Squares, Perfect Square Trinomials)", [html(String.raw`<div class="lecture-box">
  <h1>✨ Special Polynomial Products</h1>
  <p><strong>Overview.</strong> A few products appear so often they're worth memorizing as <strong>patterns</strong>. Recognizing them lets you expand (and later factor) in one step — no full FOIL needed.</p>
  <h2>📌 The patterns</h2>
  <ul>
    <li><strong>Difference of squares:</strong> \((a + b)(a - b) = a^2 - b^2\) — the middle terms cancel.</li>
    <li><strong>Perfect square (sum):</strong> \((a + b)^2 = a^2 + 2ab + b^2\).</li>
    <li><strong>Perfect square (difference):</strong> \((a - b)^2 = a^2 - 2ab + b^2\).</li>
  </ul>
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Difference of squares</h3><p>Expand \((x + 4)(x - 4)\).</p><div class="solution"><div class="step"><strong>Pattern with \(a=x,\ b=4\):</strong> \(x^2 - 16\).</div><em>Conclusion: \(x^2 - 16\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Perfect square (sum)</h3><p>Expand \((x + 5)^2\).</p><div class="solution"><div class="step"><strong>\(a^2 + 2ab + b^2\):</strong> \(x^2 + 2(5)x + 25\).</div><em>Conclusion: \(x^2 + 10x + 25\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: Perfect square (difference)</h3><p>Expand \((x - 3)^2\).</p><div class="solution"><div class="step"><strong>\(a^2 - 2ab + b^2\):</strong> \(x^2 - 2(3)x + 9\).</div><em>Conclusion: \(x^2 - 6x + 9\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: Coefficient in a difference of squares</h3><p>Expand \((2x + 3)(2x - 3)\).</p><div class="solution"><div class="step"><strong>\(a=2x,\ b=3\):</strong> \((2x)^2 - 3^2\).</div><em>Conclusion: \(4x^2 - 9\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: Coefficient in a perfect square</h3><p>Expand \((3x - 1)^2\).</p><div class="solution"><div class="step"><strong>\(a=3x,\ b=1\):</strong> \((3x)^2 - 2(3x)(1) + 1^2\).</div><em>Conclusion: \(9x^2 - 6x + 1\). ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Expand \((x + 7)(x - 7)\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(x^2 - 49\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Expand \((x + 2)^2\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(x^2 + 4x + 4\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Expand \((x - 6)^2\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(x^2 - 12x + 36\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Expand \((5x + 4)(5x - 4)\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(25x^2 - 16\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>Expand \((2x - 5)^2\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(4x^2 - 20x + 25\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: Is \((x + 5)^2 = x^2 + 25\)?</h3><p><em>No — you must include the middle term \(2ab\): it's \(x^2 + 10x + 25\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: Why do the middle terms cancel in a difference of squares?</h3><p><em>The outer and inner products are \(+ab\) and \(-ab\), which add to zero.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: How do I recognize these patterns quickly?</h3><p><em>Same two terms with opposite signs ⇒ difference of squares; a binomial squared ⇒ perfect square trinomial.</em></p></div>
</div>`)]);

authored["5.1"] = L("5.1", "GCF and Factoring by Grouping", [html(String.raw`<div class="lecture-box">
  <h1>🧲 GCF and Factoring by Grouping</h1>
  <p><strong>Overview.</strong> <strong>Factoring</strong> reverses multiplication — it rewrites a sum as a product. The first move is <em>always</em> to pull out the <strong>greatest common factor</strong> (GCF). For four-term expressions, <strong>grouping</strong> then finishes the job.</p>
  <h2>📌 The toolkit</h2>
  <ul>
    <li><strong>GCF:</strong> the largest factor (number and variables) common to every term — factor it out first.</li>
    <li><strong>Grouping (4 terms):</strong> group into two pairs, factor each pair, then factor out the shared binomial.</li>
    <li><strong>Check</strong> by expanding your factors back out.</li>
  </ul>
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: GCF of a binomial</h3><p>Factor \(6x^2 + 9x\).</p><div class="solution"><div class="step"><strong>GCF is \(3x\):</strong> \(3x(2x + 3)\).</div><em>Conclusion: \(3x(2x + 3)\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: A larger GCF</h3><p>Factor \(12x^3 - 8x^2\).</p><div class="solution"><div class="step"><strong>GCF is \(4x^2\):</strong> \(4x^2(3x - 2)\).</div><em>Conclusion: \(4x^2(3x - 2)\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: Factor by grouping</h3><p>Factor \(x^3 + 2x^2 + 3x + 6\).</p><div class="solution"><div class="step"><strong>Group in pairs:</strong> \(x^2(x + 2) + 3(x + 2)\).</div><div class="step"><strong>Common binomial \((x+2)\):</strong> \((x + 2)(x^2 + 3)\).</div><em>Conclusion: \((x + 2)(x^2 + 3)\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: Grouping with coefficients</h3><p>Factor \(2x^3 + 6x^2 + x + 3\).</p><div class="solution"><div class="step"><strong>Group:</strong> \(2x^2(x + 3) + 1(x + 3)\).</div><div class="step"><strong>Factor out \((x+3)\):</strong> \((x + 3)(2x^2 + 1)\).</div><em>Conclusion: \((x + 3)(2x^2 + 1)\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: GCF first, then more</h3><p>Factor \(2x^3 - 8x\).</p><div class="solution"><div class="step"><strong>GCF \(2x\):</strong> \(2x(x^2 - 4)\).</div><div class="step"><strong>Difference of squares:</strong> \(2x(x - 2)(x + 2)\).</div><em>Conclusion: \(2x(x - 2)(x + 2)\). ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Factor \(10x^2 + 15x\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(5x(2x + 3)\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Factor \(6x^4 - 9x^2\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(3x^2(2x^2 - 3)\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Factor \(x^3 + 4x^2 + 2x + 8\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\((x + 4)(x^2 + 2)\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Factor \(3x^3 - 3x^2 + x - 1\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\((x - 1)(3x^2 + 1)\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>Factor \(5x^3 - 20x\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(5x(x - 2)(x + 2)\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: What should I always try first?</h3><p><em>The GCF. Pulling it out simplifies everything that follows.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: How do I know grouping will work?</h3><p><em>After factoring each pair, the leftover binomials must <strong>match</strong>. If they don't, try reordering the terms.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: How do I check a factorization?</h3><p><em>Multiply the factors back out — you should recover the original expression.</em></p></div>
</div>`)]);

authored["5.2"] = L("5.2", "Factoring Trinomials (ax² + bx + c)", [html(String.raw`<div class="lecture-box">
  <h1>🧩 Factoring Trinomials \(ax^2 + bx + c\)</h1>
  <p><strong>Overview.</strong> Factoring a trinomial reverses FOIL. When \(a = 1\), find two numbers that multiply to \(c\) and add to \(b\). When \(a \neq 1\), use the <strong>\(ac\) method</strong>: split the middle term, then group.</p>
  <h2>📌 The toolkit</h2>
  <ul>
    <li><strong>\(x^2 + bx + c\):</strong> find \(p, q\) with \(p+q = b\) and \(pq = c\); then \((x + p)(x + q)\).</li>
    <li><strong>\(ax^2 + bx + c\) (ac method):</strong> find two numbers multiplying to \(ac\) and adding to \(b\); split \(bx\) and factor by grouping.</li>
    <li>Watch the <strong>signs</strong>: product/sum of \(p\) and \(q\) must match \(c\) and \(b\).</li>
  </ul>
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: \(a = 1\), all positive</h3><p>Factor \(x^2 + 7x + 12\).</p><div class="solution"><div class="step"><strong>Sum 7, product 12:</strong> \(3\) and \(4\).</div><em>Conclusion: \((x + 3)(x + 4)\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: \(a = 1\), negative middle</h3><p>Factor \(x^2 - 5x + 6\).</p><div class="solution"><div class="step"><strong>Sum \(-5\), product 6:</strong> \(-2\) and \(-3\).</div><em>Conclusion: \((x - 2)(x - 3)\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: \(a = 1\), mixed signs</h3><p>Factor \(x^2 + 2x - 15\).</p><div class="solution"><div class="step"><strong>Sum 2, product \(-15\):</strong> \(5\) and \(-3\).</div><em>Conclusion: \((x + 5)(x - 3)\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: \(a \neq 1\) (ac method)</h3><p>Factor \(2x^2 + 7x + 3\).</p><div class="solution"><div class="step"><strong>\(ac = 6\); need sum 7:</strong> \(6\) and \(1\).</div><div class="step"><strong>Split &amp; group:</strong> \(2x^2 + 6x + x + 3 = 2x(x+3) + 1(x+3)\).</div><em>Conclusion: \((2x + 1)(x + 3)\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: \(a \neq 1\) with negatives</h3><p>Factor \(3x^2 - 10x + 8\).</p><div class="solution"><div class="step"><strong>\(ac = 24\); need sum \(-10\):</strong> \(-6\) and \(-4\).</div><div class="step"><strong>Split &amp; group:</strong> \(3x^2 - 6x - 4x + 8 = 3x(x-2) - 4(x-2)\).</div><em>Conclusion: \((3x - 4)(x - 2)\). ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Factor \(x^2 + 8x + 15\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\((x + 3)(x + 5)\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Factor \(x^2 - 7x + 10\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\((x - 2)(x - 5)\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Factor \(x^2 - x - 12\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\((x - 4)(x + 3)\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Factor \(2x^2 + 5x + 2\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\((2x + 1)(x + 2)\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>Factor \(3x^2 + 7x - 6\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\((3x - 2)(x + 3)\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: What's the quick rule for \(a=1\)?</h3><p><em>Two numbers that <strong>multiply to \(c\)</strong> and <strong>add to \(b\)</strong>.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: What's the \(ac\) method for?</h3><p><em>When \(a\neq 1\): find two numbers multiplying to \(ac\) and adding to \(b\), split the middle term, then group.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: What if no such numbers exist?</h3><p><em>The trinomial is <strong>prime</strong> — it doesn't factor over the integers (you'd need the quadratic formula to find its roots).</em></p></div>
</div>`)]);

authored["5.3"] = L("5.3", "Features of Parabolas (Vertex, Axis of Symmetry, Intercepts)", [html(String.raw`<div class="lecture-box">
  <h1>🅿️ Features of Parabolas</h1>
  <p><strong>Overview.</strong> The graph of a quadratic \(y = ax^2 + bx + c\) is a <strong>parabola</strong>. Four features describe it completely: which way it opens, its <strong>axis of symmetry</strong>, its <strong>vertex</strong> (turning point), and its <strong>intercepts</strong>.</p>
  <h2>📌 The toolkit</h2>
  <ul>
    <li><strong>Opens up</strong> if \(a &gt; 0\) (minimum), <strong>down</strong> if \(a &lt; 0\) (maximum).</li>
    <li><strong>Axis of symmetry:</strong> the vertical line \(x = -\dfrac{b}{2a}\); the <strong>vertex</strong> sits on it.</li>
    <li><strong>\(y\)-intercept:</strong> \((0, c)\). <strong>\(x\)-intercepts (roots):</strong> where \(y = 0\) (factor or use the formula).</li>
  </ul>
  ${gframe(["y = x^2 - 4*x + 3"], { title: "y = x² − 4x + 3: opens up, axis x = 2, vertex (2, −1), roots 1 and 3", xMin: -2, xMax: 6, yMin: -3, yMax: 9 })}
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Direction &amp; \(y\)-intercept</h3><p>For \(y = x^2 - 4x + 3\), state the direction and \(y\)-intercept.</p><div class="solution"><div class="step"><strong>\(a = 1 &gt; 0\):</strong> opens up (minimum). <strong>\(c = 3\):</strong> \(y\)-intercept \((0,3)\).</div><em>Conclusion: opens up, \((0,3)\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Axis of symmetry</h3><p>Find the axis of \(y = x^2 - 4x + 3\).</p><div class="solution"><div class="step"><strong>\(x = -\dfrac{b}{2a} = -\dfrac{-4}{2(1)}\):</strong> \(x = 2\).</div><em>Conclusion: axis \(x = 2\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: Vertex</h3><p>Find the vertex of \(y = x^2 - 4x + 3\).</p><div class="solution"><div class="step"><strong>Use \(x = 2\):</strong> \(y = 2^2 - 4(2) + 3 = -1\).</div><em>Conclusion: vertex \((2, -1)\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: \(x\)-intercepts (roots)</h3><p>Find where \(y = x^2 - 4x + 3\) crosses the \(x\)-axis.</p><div class="solution"><div class="step"><strong>Set \(y=0\) and factor:</strong> \((x - 1)(x - 3) = 0\).</div><em>Conclusion: \(x = 1\) and \(x = 3\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: Read a vertex form</h3><p>Give the vertex of \(y = (x - 2)^2 - 1\).</p><div class="solution"><div class="step"><strong>Vertex form \(y=(x-h)^2+k\):</strong> \(h = 2,\ k = -1\).</div><em>Conclusion: vertex \((2, -1)\). ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Does \(y = -2x^2 + x + 1\) open up or down?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Down (\(a = -2 &lt; 0\)).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Axis of symmetry of \(y = x^2 - 6x + 5\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(x = 3\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Vertex of \(y = x^2 - 6x + 5\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\((3, -4)\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>\(x\)-intercepts of \(y = x^2 - 6x + 5\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\((x-1)(x-5)\Rightarrow x = 1, 5\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>Vertex of \(y = (x + 3)^2 + 2\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\((-3, 2)\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: How do I know which way it opens?</h3><p><em>The sign of \(a\): positive opens up (has a minimum), negative opens down (has a maximum).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: How are the axis and vertex related?</h3><p><em>The vertex lies on the axis of symmetry, so find \(x = -\tfrac{b}{2a}\) first, then substitute for the vertex's \(y\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: Why is vertex form handy?</h3><p><em>\(y = (x-h)^2 + k\) shows the vertex \((h, k)\) directly — no calculation needed.</em></p></div>
</div>`)]);

authored["5.4"] = L("5.4", "Solving Quadratics by Factoring and Square Roots", [html(String.raw`<div class="lecture-box">
  <h1>🎯 Solving Quadratics by Factoring &amp; Square Roots</h1>
  <p><strong>Overview.</strong> A quadratic can have up to <strong>two</strong> solutions (its roots). Two quick methods: the <strong>zero-product property</strong> after factoring, and taking <strong>square roots</strong> when there's no middle term.</p>
  <h2>📌 The toolkit</h2>
  <ul>
    <li><strong>Zero-product property:</strong> if \(AB = 0\) then \(A = 0\) or \(B = 0\). Factor, set the equation to \(0\), solve each factor.</li>
    <li><strong>Square roots:</strong> \(x^2 = k\) gives \(x = \pm\sqrt{k}\) — remember <strong>both</strong> signs.</li>
    <li>Always move everything to one side first, so it equals \(0\).</li>
  </ul>
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Already factored</h3><p>Solve \((x - 2)(x + 5) = 0\).</p><div class="solution"><div class="step"><strong>Each factor \(= 0\):</strong> \(x - 2 = 0\) or \(x + 5 = 0\).</div><em>Conclusion: \(x = 2\) or \(x = -5\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Factor, then solve</h3><p>Solve \(x^2 + 3x - 10 = 0\).</p><div class="solution"><div class="step"><strong>Factor:</strong> \((x + 5)(x - 2) = 0\).</div><em>Conclusion: \(x = -5\) or \(x = 2\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: GCF first</h3><p>Solve \(x^2 - 6x = 0\).</p><div class="solution"><div class="step"><strong>Factor out \(x\):</strong> \(x(x - 6) = 0\).</div><em>Conclusion: \(x = 0\) or \(x = 6\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: Square roots</h3><p>Solve \(x^2 = 49\).</p><div class="solution"><div class="step"><strong>Take \(\pm\sqrt{\ }\):</strong> \(x = \pm 7\).</div><em>Conclusion: \(x = 7\) or \(x = -7\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: Square roots with a shift</h3><p>Solve \((x - 3)^2 = 16\).</p><div class="solution"><div class="step"><strong>Take \(\pm\sqrt{\ }\):</strong> \(x - 3 = \pm 4\).</div><div class="step"><strong>Solve both:</strong> \(x = 7\) or \(x = -1\).</div><em>Conclusion: \(x = 7\) or \(x = -1\). ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Solve \((x + 1)(x - 4) = 0\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(x = -1\) or \(x = 4\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Solve \(x^2 - 7x + 12 = 0\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\((x-3)(x-4)=0\Rightarrow x = 3, 4\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Solve \(x^2 + 5x = 0\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(x(x+5)=0\Rightarrow x = 0, -5\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Solve \(x^2 = 81\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(x = \pm 9\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>Solve \((x + 2)^2 = 25\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(x + 2 = \pm 5\Rightarrow x = 3\) or \(x = -7\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: Why does the zero-product property work?</h3><p><em>The only way a product is \(0\) is if one of the factors is \(0\) — so solve each factor separately.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: Why \(\pm\) when taking a square root?</h3><p><em>Both \(7^2\) and \((-7)^2\) equal 49, so \(x^2 = 49\) has two solutions.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: What if \(x^2 = -9\)?</h3><p><em>No real solution — a real square can't be negative.</em></p></div>
</div>`)]);

authored["5.5"] = L("5.5", "Completing the Square & The Quadratic Formula", [html(String.raw`<div class="lecture-box">
  <h1>🔑 Completing the Square &amp; The Quadratic Formula</h1>
  <p><strong>Overview.</strong> Not every quadratic factors nicely. Two methods solve <em>any</em> quadratic: <strong>completing the square</strong> and the <strong>quadratic formula</strong>. The <strong>discriminant</strong> then tells you how many real roots to expect — before you even finish.</p>
  <h2>📌 The toolkit</h2>
  <ul>
    <li><strong>Complete the square:</strong> add \(\left(\dfrac{b}{2}\right)^2\) to build a perfect square, then take \(\pm\sqrt{\ }\).</li>
    <li><strong>Quadratic formula:</strong> \(x = \dfrac{-b \pm \sqrt{b^2 - 4ac}}{2a}\) for \(ax^2 + bx + c = 0\).</li>
    <li><strong>Discriminant \(D = b^2 - 4ac\):</strong> \(D &gt; 0\) two roots, \(D = 0\) one root, \(D &lt; 0\) no real roots.</li>
  </ul>
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Complete the square</h3><p>Solve \(x^2 + 6x + 5 = 0\).</p><div class="solution"><div class="step"><strong>Move \(5\):</strong> \(x^2 + 6x = -5\).</div><div class="step"><strong>Add \((\tfrac{6}{2})^2 = 9\):</strong> \((x + 3)^2 = 4\).</div><div class="step"><strong>Square roots:</strong> \(x + 3 = \pm 2\Rightarrow x = -1\) or \(-5\).</div><em>Conclusion: \(x = -1\) or \(x = -5\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Quadratic formula (factorable check)</h3><p>Solve \(x^2 - 5x + 6 = 0\).</p><div class="solution"><div class="step"><strong>Formula with \(a=1,b=-5,c=6\):</strong> \(x = \dfrac{5 \pm \sqrt{25 - 24}}{2} = \dfrac{5 \pm 1}{2}\).</div><em>Conclusion: \(x = 3\) or \(x = 2\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: Formula, non-factorable</h3><p>Solve \(x^2 + 4x + 1 = 0\).</p><div class="solution"><div class="step"><strong>Formula:</strong> \(x = \dfrac{-4 \pm \sqrt{16 - 4}}{2} = \dfrac{-4 \pm \sqrt{12}}{2}\).</div><div class="step"><strong>Simplify:</strong> \(\dfrac{-4 \pm 2\sqrt{3}}{2} = -2 \pm \sqrt{3}\).</div><em>Conclusion: \(x = -2 \pm \sqrt{3}\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: Discriminant — no real roots</h3><p>How many real roots has \(2x^2 - 3x + 5 = 0\)?</p><div class="solution"><div class="step"><strong>\(D = (-3)^2 - 4(2)(5) = 9 - 40 = -31\).</strong></div><em>Conclusion: \(D &lt; 0\) ⇒ no real roots. ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: Discriminant — one root</h3><p>How many real roots has \(x^2 - 4x + 4 = 0\)?</p><div class="solution"><div class="step"><strong>\(D = (-4)^2 - 4(1)(4) = 0\).</strong></div><div class="step"><strong>One repeated root:</strong> \(x = \dfrac{4}{2} = 2\).</div><em>Conclusion: exactly one root, \(x = 2\). ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Complete the square: \(x^2 + 8x + 7 = 0\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\((x+4)^2 = 9\Rightarrow x = -1\) or \(-7\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Use the formula: \(x^2 - 2x - 8 = 0\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(x = \dfrac{2 \pm 6}{2} = 4\) or \(-2\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Use the formula: \(x^2 + 6x + 4 = 0\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(x = -3 \pm \sqrt{5}\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>How many real roots has \(x^2 + x + 1 = 0\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(D = 1 - 4 = -3 &lt; 0\): none.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>How many real roots has \(9x^2 - 6x + 1 = 0\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(D = 36 - 36 = 0\): exactly one (\(x = \tfrac{1}{3}\)).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: When should I use the quadratic formula?</h3><p><em>Always works — reach for it when factoring isn't obvious. Factoring is just faster when it's easy.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: What does the discriminant tell me?</h3><p><em>\(b^2 - 4ac\): positive ⇒ two roots, zero ⇒ one, negative ⇒ no real roots — the number under the square root.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: What number do I add to complete the square?</h3><p><em>Half the middle coefficient, squared: \(\left(\tfrac{b}{2}\right)^2\) (when \(a = 1\)).</em></p></div>
</div>`)]);

authored["6.1"] = L("6.1", "Exponential Growth and Decay Models", [html(String.raw`<div class="lecture-box">
  <h1>📈 Exponential Growth and Decay Models</h1>
  <p><strong>Overview.</strong> Exponential functions \(y = a\,b^x\) model anything that <strong>multiplies</strong> by the same factor each step — populations, savings, medicine in the bloodstream. If \(b &gt; 1\) the quantity <strong>grows</strong>; if \(0 &lt; b &lt; 1\) it <strong>decays</strong>.</p>
  <h2>📌 The toolkit</h2>
  <ul>
    <li><strong>\(y = a\,b^x\):</strong> \(a\) is the <strong>starting amount</strong> (at \(x=0\)); \(b\) is the <strong>growth/decay factor</strong>.</li>
    <li><strong>Growth</strong> of \(r\%\): \(b = 1 + r\). <strong>Decay</strong> of \(r\%\): \(b = 1 - r\).</li>
    <li>Evaluate by substituting \(x\); interpret the answer in context.</li>
  </ul>
  ${gframe(["y = 2^x"], { title: "y = 2ˣ — exponential growth: each step doubles the output", xMin: -3, xMax: 6, yMin: -2, yMax: 20 })}
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Identify \(a\) and \(b\)</h3><p>For \(y = 100 \cdot 2^x\), state the starting amount and behaviour.</p><div class="solution"><div class="step"><strong>Read off:</strong> \(a = 100\), \(b = 2 &gt; 1\).</div><em>Conclusion: starts at 100 and doubles each step (growth). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Growth or decay?</h3><p>Describe \(y = 50 \cdot (0.8)^x\).</p><div class="solution"><div class="step"><strong>\(b = 0.8\) is between 0 and 1:</strong> decay.</div><em>Conclusion: starts at 50, shrinks 20% each step. ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: Evaluate a model</h3><p>For \(y = 200 \cdot (1.05)^x\), find \(y\) when \(x = 3\).</p><div class="solution"><div class="step"><strong>Substitute:</strong> \(200 \cdot (1.05)^3 = 200 \cdot 1.157625\).</div><em>Conclusion: \(y \approx 231.53\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: Build a growth model</h3><p>A town of 500 grows 10% per year. Write the model.</p><div class="solution"><div class="step"><strong>\(a = 500\), \(b = 1 + 0.10 = 1.1\):</strong> \(y = 500 \cdot (1.1)^x\).</div><em>Conclusion: \(y = 500(1.1)^x\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: Build a decay model</h3><p>A $2000 car loses 15% of its value each year. What's it worth after 2 years?</p><div class="solution"><div class="step"><strong>Model:</strong> \(b = 1 - 0.15 = 0.85\), so \(y = 2000(0.85)^x\).</div><div class="step"><strong>At \(x = 2\):</strong> \(2000 \cdot 0.7225 = 1445\).</div><em>Conclusion: about $1445. ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>For \(y = 30 \cdot 3^x\), what is the starting amount?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(30\) (the value at \(x=0\)).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Is \(y = 80 \cdot (0.5)^x\) growth or decay?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Decay (\(b = 0.5 &lt; 1\)).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Find \(y = 100 \cdot 2^x\) at \(x = 4\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(100 \cdot 16 = 1600\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Write a model: 400 bacteria doubling each hour.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(y = 400 \cdot 2^x\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>A $5000 investment grows 8% per year. Write the model.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(y = 5000 \cdot (1.08)^x\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: What do \(a\) and \(b\) mean?</h3><p><em>\(a\) is the starting value (at \(x=0\)); \(b\) is what you multiply by each step.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: Growth or decay — how do I tell?</h3><p><em>\(b &gt; 1\) grows; \(0 &lt; b &lt; 1\) decays.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: How do I turn a percent into \(b\)?</h3><p><em>Growth: \(b = 1 + r\). Decay: \(b = 1 - r\). So 12% growth ⇒ \(b = 1.12\); 12% decay ⇒ \(b = 0.88\).</em></p></div>
</div>`)]);

authored["6.2"] = L("6.2", "Comparing Linear, Quadratic, and Exponential Models", [html(String.raw`<div class="lecture-box">
  <h1>🔍 Comparing Linear, Quadratic &amp; Exponential Models</h1>
  <p><strong>Overview.</strong> Given a table or a situation, which model fits — a line, a parabola, or an exponential curve? Each leaves a <strong>fingerprint</strong> in how its outputs change.</p>
  <h2>📌 The fingerprints</h2>
  <ul>
    <li><strong>Linear:</strong> outputs change by a <strong>constant difference</strong> (add the same each step).</li>
    <li><strong>Quadratic:</strong> the <strong>second differences</strong> are constant.</li>
    <li><strong>Exponential:</strong> outputs change by a <strong>constant ratio</strong> (multiply by the same each step).</li>
  </ul>
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Spot a linear table</h3><p>\(y\)-values \(3, 7, 11, 15\) at \(x = 0,1,2,3\).</p><div class="solution"><div class="step"><strong>Differences:</strong> \(+4, +4, +4\) — constant.</div><em>Conclusion: linear (\(y = 4x + 3\)). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Spot an exponential table</h3><p>\(y\)-values \(2, 6, 18, 54\).</p><div class="solution"><div class="step"><strong>Ratios:</strong> \(\times 3, \times 3, \times 3\) — constant.</div><em>Conclusion: exponential (\(y = 2 \cdot 3^x\)). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: Spot a quadratic table</h3><p>\(y\)-values \(1, 4, 9, 16\).</p><div class="solution"><div class="step"><strong>First differences:</strong> \(3, 5, 7\); <strong>second differences:</strong> \(2, 2\) — constant.</div><em>Conclusion: quadratic (\(y = x^2\), shifted). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: Choose a model from a description</h3><p>“A balance earns 5% interest each year.” Which model?</p><div class="solution"><div class="step"><strong>“Each year × the same factor”:</strong> constant ratio.</div><em>Conclusion: exponential. ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: Which wins in the long run?</h3><p>Compare \(y = 10x\) (linear) and \(y = 2^x\) (exponential) for large \(x\).</p><div class="solution"><div class="step"><strong>At \(x = 10\):</strong> \(100\) vs \(1024\).</div><em>Conclusion: exponential growth eventually overtakes any linear (or quadratic) model. ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>\(y\): \(5, 8, 11, 14\). Which model?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Linear (constant difference \(+3\)).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>\(y\): \(3, 6, 12, 24\). Which model?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Exponential (constant ratio \(\times 2\)).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>\(y\): \(2, 5, 10, 17\). Which model?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Quadratic (second differences constant at \(2\)).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>A car depreciates 12% per year. Which model?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Exponential (decay).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>You save $20 every week. Which model?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Linear (constant difference).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: How do I test a table quickly?</h3><p><em>Check the differences (linear) and ratios (exponential); if neither is constant, check second differences (quadratic).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: “Constant difference” vs “constant ratio”?</h3><p><em>Adding the same amount ⇒ linear; multiplying by the same amount ⇒ exponential.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: Which model grows fastest?</h3><p><em>Exponential — for large inputs it outpaces both linear and quadratic growth.</em></p></div>
</div>`)]);

authored["6.3"] = L("6.3", "Scatter Plots, Lines of Best Fit, and Residuals Analysis", [html(String.raw`<div class="lecture-box">
  <h1>🔵 Scatter Plots, Lines of Best Fit &amp; Residuals</h1>
  <p><strong>Overview.</strong> A <strong>scatter plot</strong> shows paired data \((x, y)\) as points. If a trend appears, a <strong>line of best fit</strong> models it, and <strong>residuals</strong> measure how far each real point sits from that line.</p>
  <h2>📌 The toolkit</h2>
  <ul>
    <li><strong>Correlation:</strong> <em>positive</em> (up together), <em>negative</em> (one up, one down), or <em>none</em>; and <em>strong</em> vs <em>weak</em>.</li>
    <li><strong>Line of best fit:</strong> the line that most closely follows the trend; use it to <strong>predict</strong>.</li>
    <li><strong>Residual</strong> \(= \text{actual} - \text{predicted}\). Small, balanced residuals mean a good fit.</li>
  </ul>
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Describe correlation</h3><p>As study hours rise, test scores rise. What correlation is that?</p><div class="solution"><div class="step"><strong>Both increase together:</strong> positive correlation.</div><em>Conclusion: positive (and likely strong). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Predict with a best-fit line</h3><p>A best-fit line is \(y = 5x + 50\) (score vs. hours). Predict the score for 6 hours.</p><div class="solution"><div class="step"><strong>Substitute \(x = 6\):</strong> \(5(6) + 50 = 80\).</div><em>Conclusion: about 80. ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: Compute a residual</h3><p>The line predicts 80 but the student actually scored 85. Find the residual.</p><div class="solution"><div class="step"><strong>actual − predicted:</strong> \(85 - 80\).</div><em>Conclusion: residual \(= +5\) (the point sits above the line). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: Interpolate vs. extrapolate</h3><p>The data covers 1–8 hours. Is predicting at 5 hours interpolation or extrapolation?</p><div class="solution"><div class="step"><strong>5 is inside the data range:</strong> interpolation (more reliable). Predicting at 20 hours would be extrapolation.</div><em>Conclusion: interpolation. ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: Interpret the slope</h3><p>In \(y = 5x + 50\), what does the slope mean?</p><div class="solution"><div class="step"><strong>Rate of change:</strong> each extra hour of study is linked to about <strong>5 more points</strong>.</div><em>Conclusion: +5 points per hour. ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>As temperature rises, hot-chocolate sales fall. Correlation?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Negative.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Best-fit \(y = 2x + 3\). Predict \(y\) at \(x = 10\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(23\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Predicted 23, actual 20. Residual?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(20 - 23 = -3\) (point below the line).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Data span \(x = 0\) to \(50\). Predicting at \(x = 100\) is…?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Extrapolation (outside the range — less reliable).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>In \(y = -4x + 60\), interpret the slope.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(y\) drops by 4 for each 1-unit increase in \(x\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: Does correlation prove causation?</h3><p><em>No. A strong relationship doesn't prove one variable <em>causes</em> the other — there may be a hidden factor.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: What does a residual tell me?</h3><p><em>How far a real point is from the line: positive is above, negative is below. Smaller residuals ⇒ better fit.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: Interpolation vs. extrapolation?</h3><p><em>Interpolation predicts <strong>inside</strong> the data range (safer); extrapolation predicts <strong>outside</strong> it (riskier).</em></p></div>
</div>`)]);

authored["6.4"] = L("6.4", "Two-Way Frequency Tables & Categorical Data", [html(String.raw`<div class="lecture-box">
  <h1>🗂️ Two-Way Frequency Tables &amp; Categorical Data</h1>
  <p><strong>Overview.</strong> <strong>Categorical data</strong> sorts people or things into groups (grade, sport, yes/no). A <strong>two-way table</strong> cross-classifies two categories at once, letting us read <strong>joint</strong>, <strong>marginal</strong>, and <strong>relative</strong> frequencies — and look for <strong>association</strong>.</p>
  <h2>📌 The toolkit</h2>
  <ul>
    <li><strong>Joint frequency:</strong> the count in a single inner cell.</li>
    <li><strong>Marginal frequency:</strong> a row or column <strong>total</strong>.</li>
    <li><strong>Relative frequency:</strong> a count \(\div\) a total (grand total, or a row/column total for a <em>conditional</em> rate).</li>
  </ul>
  <table style="border-collapse:collapse;margin:12px 0;font-size:15px;"><thead><tr><th style="border:1px solid #cbd5e1;padding:6px 12px;background:#f1f5f9;"></th><th style="border:1px solid #cbd5e1;padding:6px 12px;background:#f1f5f9;">Plays a sport</th><th style="border:1px solid #cbd5e1;padding:6px 12px;background:#f1f5f9;">No sport</th><th style="border:1px solid #cbd5e1;padding:6px 12px;background:#f1f5f9;">Total</th></tr></thead><tbody><tr><td style="border:1px solid #cbd5e1;padding:6px 12px;font-weight:700;">Grade 9</td><td style="border:1px solid #cbd5e1;padding:6px 12px;text-align:center;">18</td><td style="border:1px solid #cbd5e1;padding:6px 12px;text-align:center;">12</td><td style="border:1px solid #cbd5e1;padding:6px 12px;text-align:center;font-weight:700;">30</td></tr><tr><td style="border:1px solid #cbd5e1;padding:6px 12px;font-weight:700;">Grade 10</td><td style="border:1px solid #cbd5e1;padding:6px 12px;text-align:center;">22</td><td style="border:1px solid #cbd5e1;padding:6px 12px;text-align:center;">8</td><td style="border:1px solid #cbd5e1;padding:6px 12px;text-align:center;font-weight:700;">30</td></tr><tr><td style="border:1px solid #cbd5e1;padding:6px 12px;font-weight:700;">Total</td><td style="border:1px solid #cbd5e1;padding:6px 12px;text-align:center;font-weight:700;">40</td><td style="border:1px solid #cbd5e1;padding:6px 12px;text-align:center;font-weight:700;">20</td><td style="border:1px solid #cbd5e1;padding:6px 12px;text-align:center;font-weight:700;">60</td></tr></tbody></table>
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Joint frequency</h3><p>How many Grade 9 students play a sport?</p><div class="solution"><div class="step"><strong>Read the Grade 9 / Plays cell:</strong> 18.</div><em>Conclusion: 18. ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Marginal frequency</h3><p>How many students are in Grade 10 altogether?</p><div class="solution"><div class="step"><strong>Read the Grade 10 row total:</strong> 30.</div><em>Conclusion: 30. ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: Relative frequency</h3><p>What fraction of all students are Grade 9 athletes?</p><div class="solution"><div class="step"><strong>Cell \(\div\) grand total:</strong> \(\dfrac{18}{60} = 0.30\).</div><em>Conclusion: 30%. ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: Conditional relative frequency</h3><p>Among Grade 9 students, what fraction play a sport?</p><div class="solution"><div class="step"><strong>Cell \(\div\) row total:</strong> \(\dfrac{18}{30} = 0.60\).</div><em>Conclusion: 60% of Grade 9 play. ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: Is there an association?</h3><p>Compare the “plays a sport” rate by grade.</p><div class="solution"><div class="step"><strong>Grade 9:</strong> \(\tfrac{18}{30} = 60\%\). <strong>Grade 10:</strong> \(\tfrac{22}{30} \approx 73\%\).</div><em>Conclusion: the rates differ, so grade and playing a sport appear <strong>associated</strong>. ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>How many students play no sport in total?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>20 (the “No sport” column total).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>How many Grade 10 students play no sport?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>8 (a joint frequency).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>What fraction of all students play a sport?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\dfrac{40}{60} \approx 0.67\) (67%).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Among Grade 10 students, what fraction play no sport?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\dfrac{8}{30} \approx 0.27\) (27%).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>Is a marginal total a joint or a marginal frequency?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Marginal (a row or column total).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: Joint vs. marginal frequency?</h3><p><em>Joint = a single inner cell; marginal = a row or column <strong>total</strong> (found in the margins).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: How do I find a relative frequency?</h3><p><em>Divide a count by a total — the grand total for an overall rate, or a row/column total for a conditional rate.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: What signals an association?</h3><p><em>When the conditional rates differ noticeably across groups (e.g. 60% vs. 73%), the two categories appear related.</em></p></div>
</div>`)]);
