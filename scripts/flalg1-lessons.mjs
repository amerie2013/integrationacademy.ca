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
