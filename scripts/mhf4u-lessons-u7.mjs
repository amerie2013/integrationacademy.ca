// MHF4U Unit 7 — Rates of Change & Combining Functions. Deep single-card lessons.
import { html, gframe, graph } from "./seed-mpm2d.mjs";
const L = (code, title, blocks) => ({ code, title, blocks });
const EX = `style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const PR = `style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const QA = `style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
export const u7 = {};

u7["7.1"] = L("7.1", "Average & Instantaneous Rate of Change", [
  html(String.raw`<div class="lecture-box">
  <h1>📊 Average &amp; Instantaneous Rate of Change</h1>
  <p><strong>Overview.</strong> The <strong>average rate of change</strong> of \(f\) over \([a,b]\) is the slope of the <em>secant</em> line, \(\dfrac{f(b)-f(a)}{b-a}\). The <strong>instantaneous rate of change</strong> at a point is the slope of the <em>tangent</em> line — the limit of average rates as the interval shrinks to zero. You can estimate it numerically by using a very small interval.</p>
  <h2>📌 The two rates</h2>
  <ul>
    <li><strong>Average (secant):</strong> \(\dfrac{f(b)-f(a)}{b-a}\) over an interval \([a,b]\).</li>
    <li><strong>Instantaneous (tangent):</strong> the limiting slope at a single point.</li>
    <li><strong>Estimate it:</strong> compute the average rate over a tiny interval such as \([a,a+0.01]\).</li>
  </ul>
  ${gframe(["y = x^2"], { title: "On y = x², the secant slope over a shrinking interval approaches the tangent slope" })}
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Average rate</h3><p>Find the average rate of change of \(f(x)=x^2\) on \([1,3]\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\dfrac{f(3)-f(1)}{3-1}=\dfrac{9-1}{2}\).</div><em>Conclusion: \(4\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: A changing rate</h3><p>For \(f(x)=x^2\), compare the average rate of change on \([1,2]\) and on \([2,3]\). What does the comparison tell you?</p><div class="solution"><div class="step"><strong>Step 1:</strong> On \([1,2]\): \(\dfrac{4-1}{1}=3\). On \([2,3]\): \(\dfrac{9-4}{1}=5\).</div><div class="step"><strong>Step 2:</strong> The average rate is larger on the second interval.</div><em>Conclusion: the rate is <em>increasing</em> — the curve is steepening, unlike a straight line whose rate is constant. ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: Estimate instantaneous</h3><p>Estimate the instantaneous rate of \(f(x)=x^2\) at \(x=2\) using \([2,2.1]\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\dfrac{2.1^2-2^2}{0.1}=\dfrac{4.41-4}{0.1}\).</div><em>Conclusion: \(4.1\) (true value \(4\)). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: Linear (constant rate)</h3><p>Find the average rate of change of \(f(x)=2x+1\) on \([0,5]\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\dfrac{11-1}{5}\).</div><em>Conclusion: \(2\) — the same everywhere for a line. ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: Interpret</h3><p>A car's position is \(d(t)\). What does \(\dfrac{d(5)-d(2)}{5-2}\) represent?</p><div class="solution"><div class="step"><strong>Step 1:</strong> Change in distance over change in time.</div><em>Conclusion: the average speed on \([2,5]\). ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Average rate of \(f(x)=x^2\) on \([0,4]\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\dfrac{16-0}{4}=4\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Average rate of \(f(x)=x^3\) on \([1,2]\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\dfrac{8-1}{1}=7\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Estimate the instantaneous rate of \(f(x)=x^2\) at \(x=3\) using \([3,3.1]\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\dfrac{9.61-9}{0.1}=6.1\approx6\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Average rate of \(f(x)=5x-2\) on \([1,4]\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(5\) (linear).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>What does the slope of a tangent line measure?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>The instantaneous rate of change.</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: What is the average rate of change?</h3><p><em>The secant slope \(\dfrac{f(b)-f(a)}{b-a}\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: What is the instantaneous rate of change?</h3><p><em>The tangent slope at a point.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: How do you estimate it?</h3><p><em>Average rate over a very small interval.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: Why is a line's rate constant?</h3><p><em>Its slope is the same on every interval.</em></p></div>
</div>`),
]);

u7["7.2"] = L("7.2", "Combining Functions", [
  html(String.raw`<div class="lecture-box">
  <h1>➕ Combining Functions</h1>
  <p><strong>Overview.</strong> Functions can be added, subtracted, multiplied, and divided point by point: \((f+g)(x)=f(x)+g(x)\), and similarly for \(-,\times,\div\). The <strong>domain</strong> of the result is where <em>both</em> functions are defined — and for a quotient you must also exclude any \(x\) with \(g(x)=0\).</p>
  <h2>📌 The operations</h2>
  <ul>
    <li>\((f\pm g)(x)=f(x)\pm g(x)\); \((fg)(x)=f(x)\,g(x)\); \(\left(\tfrac fg\right)(x)=\dfrac{f(x)}{g(x)}\).</li>
    <li><strong>Domain:</strong> intersection of the domains; for \(\tfrac fg\), also \(g(x)\ne0\).</li>
  </ul>
  ${gframe(["y = x^2", "y = x", "y = x^2 + x"], { title: "Adding graphs: y = x² and y = x stack to give y = x² + x" })}
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Sum</h3><p>With \(f(x)=x^2,\ g(x)=x\), find \((f+g)(x)\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(x^2+x\).</div><em>Conclusion: \((f+g)(x)=x^2+x\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Difference</h3><p>Find \((f-g)(x)\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(x^2-x\).</div><em>Conclusion: \((f-g)(x)=x^2-x\). ✓</em></div>${gframe(["y = x^2", "y = x", "y = x^2 - x"], { title: "subtracting graphs: at each x, y=x² − x is the gap between the two curves" })}</div>
  <div class="example-box" ${EX}><h3>Example 3: Product</h3><p>Find \((fg)(x)\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(x^2\cdot x\).</div><em>Conclusion: \((fg)(x)=x^3\). ✓</em></div>${gframe(["y = x^2", "y = x", "y = x^3"], { title: "multiplying graphs: x²·x = x³" })}</div>
  <div class="example-box" ${EX}><h3>Example 4: Quotient</h3><p>Find \(\left(\tfrac fg\right)(x)\) and its domain.</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\dfrac{x^2}{x}=x\), but \(x\ne0\).</div><em>Conclusion: \(x\) with \(x\ne0\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: Domain of a combination</h3><p>With \(f(x)=\sqrt{x}\) and \(g(x)=x-1\), find \((f+g)(x)\) and state its domain.</p><div class="solution"><div class="step"><strong>Step 1:</strong> \((f+g)(x)=\sqrt{x}+(x-1)\).</div><div class="step"><strong>Step 2:</strong> Domain is the intersection of the pieces: \(g\) allows all reals, but \(\sqrt{x}\) needs \(x\ge0\).</div><em>Conclusion: \((f+g)(x)=\sqrt{x}+x-1\), domain \(x\ge0\). ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>\(f=x+1,\ g=x-1\). Find \((f+g)(x)\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(2x\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Same \(f,g\): find \((fg)(x)\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(x^2-1\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>\(f=x^2,\ g=3\). Find \((f-g)(x)\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(x^2-3\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>\(f=x,\ g=x+2\). Find \((f+g)(3)\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(3+5=8\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>\(f=x^2,\ g=x\). Find the domain of \(\tfrac fg\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(x\ne0\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: How do you add two functions?</h3><p><em>Add their outputs: \((f+g)(x)=f(x)+g(x)\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: What is the domain of a combined function?</h3><p><em>The intersection of the two domains.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: What extra restriction does a quotient have?</h3><p><em>\(g(x)\ne0\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: How do you evaluate \((fg)(a)\)?</h3><p><em>Multiply \(f(a)\) and \(g(a)\).</em></p></div>
</div>`),
  graph("x^2 + a*x", "a", { xMin: -4, xMax: 4, yMin: -4, yMax: 9, paramMin: -3, paramMax: 3, paramInit: 1, caption: "Animation: y = x² + a·x — combining x² with a multiple of x reshapes the parabola." }),
]);

u7["7.3"] = L("7.3", "Composition of Functions", [
  html(String.raw`<div class="lecture-box">
  <h1>🔗 Composition of Functions</h1>
  <p><strong>Overview.</strong> A <strong>composition</strong> feeds one function into another: \((f\circ g)(x)=f\big(g(x)\big)\). Evaluate the <em>inner</em> function first, then the outer. Order matters — \(f\circ g\) is usually different from \(g\circ f\). You can also work backwards and <strong>decompose</strong> a complicated function into simpler pieces.</p>
  <h2>📌 How composition works</h2>
  <ul>
    <li>\((f\circ g)(x)=f(g(x))\): apply \(g\) first, then \(f\).</li>
    <li><strong>Domain:</strong> \(x\) must be in the domain of \(g\), and \(g(x)\) in the domain of \(f\).</li>
    <li><strong>Decompose:</strong> rewrite \(h\) as an outer and inner function.</li>
  </ul>
  ${gframe(["y = (x+1)^2"], { title: "y = (x+1)² is the composition: square the result of (x + 1)" })}
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Compose</h3><p>With \(f(x)=x^2,\ g(x)=x+1\), find \(f(g(x))\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Replace the input of \(f\) with \(g(x)\): \((x+1)^2\).</div><em>Conclusion: \((x+1)^2\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Reverse order</h3><p>Find \(g(f(x))\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(g(x^2)=x^2+1\).</div><em>Conclusion: \(x^2+1\) (different from Example 1). ✓</em></div>${gframe(["y = x^2 + 1", "y = (x+1)^2"], { title: "order matters: g(f(x))=x²+1 (square then add 1) vs f(g(x))=(x+1)² (add 1 then square)" })}</div>
  <div class="example-box" ${EX}><h3>Example 3: Evaluate</h3><p>Find \(f(g(2))\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(g(2)=3\), then \(f(3)=9\).</div><em>Conclusion: \(9\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: Decompose</h3><p>Write \(h(x)=(x+1)^2\) as \(f(g(x))\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Inner \(g(x)=x+1\), outer \(f(x)=x^2\).</div><em>Conclusion: \(f(x)=x^2,\ g(x)=x+1\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: Domain of a composite</h3><p>With \(f(x)=\sqrt x,\ g(x)=x-3\), find \(f(g(x))\) and its domain.</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\sqrt{x-3}\); need \(x-3\ge0\).</div><em>Conclusion: \(\sqrt{x-3}\), domain \(x\ge3\). ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>\(f=x^2,\ g=x-2\). Find \(f(g(x))\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\((x-2)^2\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Same \(f,g\): find \(g(f(x))\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(x^2-2\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>\(f=2x,\ g=x+3\). Find \(f(g(1))\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(g(1)=4,\ f(4)=8\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Decompose \(h(x)=\sqrt{x+5}\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(f(x)=\sqrt x,\ g(x)=x+5\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>\(f=\sqrt x,\ g=x-1\). Domain of \(f(g(x))\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(x\ge1\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: What is \((f\circ g)(x)\)?</h3><p><em>\(f(g(x))\) — inner first, then outer.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: Is \(f\circ g\) the same as \(g\circ f\)?</h3><p><em>Usually not — order matters.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: How do you find the domain of a composite?</h3><p><em>\(x\) in \(g\)'s domain and \(g(x)\) in \(f\)'s domain.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: What is decomposition?</h3><p><em>Splitting a function into an outer and inner part.</em></p></div>
</div>`),
  graph("(x+d)^2", "d", { xMin: -6, xMax: 6, yMin: -1, yMax: 9, paramMin: -3, paramMax: 3, paramInit: 1, caption: "Animation: y = (x+d)² — composing the squaring function with the shift x+d slides the parabola." }),
]);
