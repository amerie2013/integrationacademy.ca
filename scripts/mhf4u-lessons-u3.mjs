// MHF4U Unit 3 — Rational Functions. Deep single-card lessons with asymptote graphs.
import { html, gframe, graph } from "./seed-mpm2d.mjs";
const L = (code, title, blocks) => ({ code, title, blocks });
const EX = `style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const PR = `style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const QA = `style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
export const u3 = {};

u3["3.1"] = L("3.1", "Reciprocal & Rational Functions", [
  html(String.raw`<div class="lecture-box">
  <h1>🪞 Reciprocal &amp; Rational Functions</h1>
  <p><strong>Overview.</strong> A <strong>rational function</strong> is a ratio of polynomials \(f(x)=\dfrac{p(x)}{q(x)}\). Its graph is shaped by <strong>asymptotes</strong> — lines the curve approaches but never reaches. The simplest case is the reciprocal \(y=\tfrac1x\), with a <strong>vertical asymptote</strong> at \(x=0\) and a <strong>horizontal asymptote</strong> at \(y=0\). Where the denominator is zero (and the numerator isn't), you get a vertical asymptote; where a factor cancels, you get a <strong>hole</strong>.</p>
  <h2>📌 Finding the key features</h2>
  <ul>
    <li><strong>Domain:</strong> exclude any \(x\) where \(q(x)=0\).</li>
    <li><strong>Vertical asymptote:</strong> at zeros of \(q(x)\) that don't cancel.</li>
    <li><strong>Horizontal asymptote:</strong> deg \(p<\) deg \(q\Rightarrow y=0\); equal degrees \(\Rightarrow y=\dfrac{\text{leading } p}{\text{leading } q}\).</li>
    <li><strong>Hole:</strong> where a common factor of \(p\) and \(q\) cancels.</li>
  </ul>
  ${gframe(["y = 1/x"], { title: "y = 1/x: vertical asymptote x = 0, horizontal asymptote y = 0" })}
  ${gframe(["y = 1/(x-3)"], { title: "y = 1/(x−3): vertical asymptote shifts to x = 3" })}
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Full analysis of one function</h3><p>For \(y=\dfrac{x+1}{x-3}\), state the domain, the vertical asymptote, and the horizontal asymptote.</p><div class="solution"><div class="step"><strong>Step 1:</strong> Denominator zero at \(x=3\): domain \(x\ne3\), vertical asymptote \(x=3\).</div><div class="step"><strong>Step 2:</strong> Numerator and denominator both degree 1 (equal) ⇒ horizontal asymptote is the ratio of leading coefficients, \(y=\tfrac11=1\).</div><em>Conclusion: domain \(x\ne3\), VA \(x=3\), HA \(y=1\). ✓</em></div>${gframe(["y = (x+1)/(x-3)"], { title: "(x+1)/(x−3): vertical asymptote x=3, horizontal asymptote y=1" })}</div>
  <div class="example-box" ${EX}><h3>Example 2: Two vertical asymptotes</h3><p>Find the asymptotes of \(y=\dfrac{5}{x^2-4}\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(x^2-4=(x-2)(x+2)=0\) at \(x=\pm2\) ⇒ <em>two</em> vertical asymptotes.</div><div class="step"><strong>Step 2:</strong> Numerator degree 0 \(<\) denominator degree 2 ⇒ horizontal asymptote \(y=0\).</div><em>Conclusion: VAs \(x=2\) and \(x=-2\); HA \(y=0\). ✓</em></div>${gframe(["y = 5/(x^2-4)"], { title: "5/(x²−4): two vertical asymptotes at x=±2, horizontal asymptote y=0" })}</div>
  <div class="example-box" ${EX}><h3>Example 3: Equal degrees with coefficients</h3><p>Find the horizontal asymptote of \(y=\dfrac{3x-1}{2x+5}\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Equal degrees ⇒ ratio of leading coefficients.</div><em>Conclusion: \(y=\tfrac32\). ✓</em></div>${gframe(["y = (3*x-1)/(2*x+5)"], { title: "(3x−1)/(2x+5): horizontal asymptote y=3/2 (the ratio of leading coefficients)" })}</div>
  <div class="example-box" ${EX}><h3>Example 4: A hole (cancelling factor)</h3><p>Describe \(y=\dfrac{x^2-1}{x-1}\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\dfrac{(x-1)(x+1)}{x-1}=x+1\), but \(x\ne1\).</div><em>Conclusion: the line \(y=x+1\) with a <em>hole</em> at \(x=1\) — not an asymptote. ✓</em></div>${gframe(["y = (x^2-1)/(x-1)"], { title: "(x²−1)/(x−1) simplifies to the line y=x+1 — with a hole (removable point) at x=1" })}</div>
  <div class="example-box" ${EX}><h3>Example 5: When there is no horizontal asymptote</h3><p>Does \(y=\dfrac{x^2+1}{x-1}\) have a horizontal asymptote?</p><div class="solution"><div class="step"><strong>Step 1:</strong> Numerator degree 2 \(>\) denominator degree 1.</div><em>Conclusion: no horizontal asymptote — the graph grows without bound (it has a slant/oblique asymptote instead). ✓</em></div>${gframe(["y = (x^2+1)/(x-1)"], { title: "(x²+1)/(x−1): no horizontal asymptote — it follows a slanted line as x→±∞" })}</div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Vertical asymptote of \(y=\dfrac{1}{x-5}\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(x=5\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Horizontal asymptote of \(y=\dfrac{3}{x+1}\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(y=0\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Domain of \(y=\dfrac{x}{x-4}\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(x\ne4\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Horizontal asymptote of \(y=\dfrac{5x}{x+2}\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(y=5\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>Where is the hole in \(y=\dfrac{x^2-4}{x-2}\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>At \(x=2\) (simplifies to \(x+2\)).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: Where are vertical asymptotes?</h3><p><em>At zeros of the denominator that don't cancel.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: How do you find the horizontal asymptote?</h3><p><em>Compare degrees: lower top → \(y=0\); equal → ratio of leading coefficients.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: What causes a hole?</h3><p><em>A factor that cancels from top and bottom.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: What is excluded from the domain?</h3><p><em>Any value making the denominator zero.</em></p></div>
</div>`),
  graph("1/(x-h)", "h", { xMin: -6, xMax: 6, yMin: -6, yMax: 6, paramMin: -3, paramMax: 3, paramInit: 0, caption: "Animation: y = 1/(x−h). Slide h to move the vertical asymptote to x = h." }),
]);

u3["3.2"] = L("3.2", "Graphs of Rational Functions", [
  html(String.raw`<div class="lecture-box">
  <h1>📉 Graphs of Rational Functions</h1>
  <p><strong>Overview.</strong> To sketch \(f(x)=\dfrac{p(x)}{q(x)}\), assemble its skeleton: the <strong>intercepts</strong>, the <strong>vertical and horizontal asymptotes</strong>, and the <strong>behaviour near each asymptote</strong> (does the curve shoot up or down?). A quick sign check on each interval finishes the sketch.</p>
  <h2>📌 The sketching checklist</h2>
  <ul>
    <li><strong>x-intercept:</strong> numerator \(=0\). <strong>y-intercept:</strong> evaluate \(f(0)\).</li>
    <li><strong>Vertical asymptote:</strong> denominator \(=0\). <strong>Horizontal asymptote:</strong> from the degrees.</li>
    <li><strong>Near a VA:</strong> the curve rushes to \(\pm\infty\); test a point on each side.</li>
  </ul>
  ${gframe(["y = (x-2)/(x+1)"], { title: "y = (x−2)/(x+1): VA at x = −1, HA at y = 1, x-intercept (2,0)" })}
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Reciprocal</h3><p>Describe the graph of \(y=\dfrac1x\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> VA \(x=0\), HA \(y=0\), no intercepts.</div><em>Conclusion: two branches in opposite quadrants. ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Intercepts &amp; asymptotes</h3><p>For \(y=\dfrac{x-2}{x+1}\), find intercepts and asymptotes.</p><div class="solution"><div class="step"><strong>Step 1:</strong> x-int: \(x=2\); y-int: \(f(0)=-2\).</div><div class="step"><strong>Step 2:</strong> VA \(x=-1\); HA \(y=1\) (equal degrees).</div><em>Conclusion: \((2,0),\ (0,-2)\), VA \(x=-1\), HA \(y=1\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: Behaviour near a VA</h3><p>How does \(y=\dfrac{1}{x-2}\) behave near \(x=2\)?</p><div class="solution"><div class="step"><strong>Step 1:</strong> Just left (\(x=1.9\)) \(y\) is large negative; just right (\(x=2.1\)) large positive.</div><em>Conclusion: \(y\to-\infty\) then \(+\infty\). ✓</em></div>${gframe(["y = 1/(x-2)"], { title: "1/(x−2): plunges to −∞ just left of x=2, shoots to +∞ just right" })}</div>
  <div class="example-box" ${EX}><h3>Example 4: Can a graph cross its horizontal asymptote?</h3><p>Does \(y=\dfrac{2x}{x^2+1}\) ever cross its horizontal asymptote?</p><div class="solution"><div class="step"><strong>Step 1:</strong> Degree of top \(<\) degree of bottom ⇒ HA is \(y=0\).</div><div class="step"><strong>Step 2:</strong> Set \(\dfrac{2x}{x^2+1}=0\Rightarrow 2x=0\Rightarrow x=0\).</div><em>Conclusion: yes — it crosses at \((0,0)\). A horizontal asymptote describes the <em>ends</em>, not a barrier in the middle. ✓</em></div>${gframe(["y = 2*x/(x^2+1)"], { title: "2x/(x²+1) crosses its horizontal asymptote y=0 at the origin — then returns to it at the ends" })}</div>
  <div class="example-box" ${EX}><h3>Example 5: End behaviour</h3><p>As \(x\to\infty\), what does \(y=\dfrac{2x+1}{x-3}\) approach?</p><div class="solution"><div class="step"><strong>Step 1:</strong> Equal degrees → ratio \(\tfrac{2}{1}\).</div><em>Conclusion: \(y\to2\). ✓</em></div>${gframe(["y = (2*x+1)/(x-3)"], { title: "(2x+1)/(x−3): as x→±∞ the curve flattens toward y=2" })}</div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>VA and HA of \(y=\dfrac{1}{x-4}\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>VA \(x=4\), HA \(y=0\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>x-intercept of \(y=\dfrac{x-5}{x+2}\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\((5,0)\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>y-intercept of \(y=\dfrac{x+4}{x-2}\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\((0,-2)\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>HA of \(y=\dfrac{3x}{x+5}\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(y=3\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>As \(x\to\infty\), \(y=\dfrac{x+1}{2x-1}\to\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(y\to\tfrac12\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: How do you find the x-intercept?</h3><p><em>Set the numerator equal to zero.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: How do you find the y-intercept?</h3><p><em>Evaluate \(f(0)\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: What happens near a vertical asymptote?</h3><p><em>The curve rushes to \(\pm\infty\); check each side.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: Where does the curve go far out?</h3><p><em>Toward the horizontal asymptote.</em></p></div>
</div>`),
  graph("(x-a)/(x+1)", "a", { xMin: -6, xMax: 6, yMin: -6, yMax: 6, paramMin: -3, paramMax: 3, paramInit: 2, caption: "Animation: y = (x−a)/(x+1). Slide a to move the x-intercept while the asymptotes stay fixed." }),
]);

u3["3.3"] = L("3.3", "Solving Rational Equations & Inequalities", [
  html(String.raw`<div class="lecture-box">
  <h1>🧮 Solving Rational Equations &amp; Inequalities</h1>
  <p><strong>Overview.</strong> To solve a rational <strong>equation</strong>, multiply through by the lowest common denominator to clear fractions — then solve the polynomial that remains, and <strong>reject any answer</strong> that makes an original denominator zero (an extraneous root). For an <strong>inequality</strong>, move everything to one side, find the <strong>critical values</strong> (zeros of the numerator <em>and</em> of the denominator), and use a sign chart — but the denominator's zeros are always excluded.</p>
  <h2>📌 The methods</h2>
  <ul>
    <li><strong>Equation:</strong> multiply by the LCD, solve, then check restrictions.</li>
    <li><strong>Inequality:</strong> get \(0\) on one side, find critical values, test each interval.</li>
    <li>Denominator zeros are never part of the solution (open circles).</li>
  </ul>
  ${gframe(["y = x/(x-1)"], { title: "y = x/(x−1): solution of x/(x−1) > 0 is where the curve is above the axis" })}
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Watch for an extraneous root</h3><p>Solve \(\dfrac{x}{x-2}=\dfrac{2}{x-2}\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Note the restriction \(x\ne2\). Multiply both sides by \(x-2\): \(x=2\).</div><div class="step"><strong>Step 2:</strong> But \(x=2\) is excluded — it makes the denominators zero.</div><em>Conclusion: \(x=2\) is extraneous, so there is <em>no solution</em>. Always check answers against the restrictions. ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Cross-multiply</h3><p>Solve \(\dfrac{x+1}{x-2}=3\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(x+1=3(x-2)=3x-6\).</div><div class="step"><strong>Step 2:</strong> \(7=2x\).</div><em>Conclusion: \(x=\tfrac72\) (valid, \(\ne2\)). ✓</em></div>${gframe(["y = (x+1)/(x-2)", "y = 3"], { title: "(x+1)/(x−2)=3 where the curve meets the line y=3 — at x=7/2" })}</div>
  <div class="example-box" ${EX}><h3>Example 3: Clear the LCD</h3><p>Solve \(\dfrac2x+1=3\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\dfrac2x=2\Rightarrow 2=2x\).</div><em>Conclusion: \(x=1\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: Inequality</h3><p>Solve \(\dfrac{x}{x-1}>0\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Critical values \(0\) (numerator) and \(1\) (denominator).</div><div class="step"><strong>Step 2:</strong> Signs: \((-\infty,0)\) +, \((0,1)\) −, \((1,\infty)\) +.</div><em>Conclusion: \(x<0\) or \(x>1\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: Reciprocal inequality</h3><p>Solve \(\dfrac{1}{x-2}<0\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> The fraction is negative when \(x-2<0\).</div><em>Conclusion: \(x<2\). ✓</em></div>${gframe(["y = 1/(x-2)"], { title: "1/(x−2)<0 holds where the curve is below the axis: x<2" })}</div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Solve \(\dfrac3x=6\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(x=\tfrac12\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Solve \(\dfrac{x-1}{x+2}=2\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(x-1=2x+4\Rightarrow x=-5\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Solve \(\dfrac4x-1=1\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\tfrac4x=2\Rightarrow x=2\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Solve \(\dfrac{x}{x+2}>0\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(x<-2\) or \(x>0\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>Solve \(\dfrac{1}{x+1}>0\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(x>-1\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: How do you clear fractions?</h3><p><em>Multiply every term by the lowest common denominator.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: What is an extraneous root?</h3><p><em>A solution that makes an original denominator zero — reject it.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: What are the critical values of an inequality?</h3><p><em>Zeros of the numerator and of the denominator.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: Are denominator zeros ever included?</h3><p><em>No — they're always excluded (open circles).</em></p></div>
</div>`),
]);
