// MCV4U Unit 1 — Rates of Change & Limits. Deep single-card lessons (MCR3U theme)
// with interactive graphs that ANIMATE the derivative (secant → tangent, f vs f').
import { html, gframe, graph } from "./seed-mpm2d.mjs";
const L = (code, title, blocks) => ({ code, title, blocks });
const EX = `style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const PR = `style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const QA = `style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
export const u1 = {};

u1["1.1"] = L("1.1", "Average & Instantaneous Rate of Change", [
  html(String.raw`<div class="lecture-box">
  <h1>📈 Average &amp; Instantaneous Rate of Change</h1>
  <p><strong>Overview.</strong> The <strong>average rate of change</strong> over \([a,b]\) is the slope of the <em>secant</em> line, \(\dfrac{f(b)-f(a)}{b-a}\). The <strong>instantaneous rate of change</strong> at a point is the slope of the <em>tangent</em> there. We don't have limits yet, so for now we <strong>estimate</strong> it: compute the average rate over a <em>very short</em> interval near the point (spacing \(h\), e.g. \(h=0.001\)) using the <strong>difference quotient</strong> \(\dfrac{f(x+h)-f(x)}{h}\) — the smaller \(h\) is, the better the estimate. (In the next lesson you'll see how to make this exact with a limit.)</p>
  <h2>📌 The key ideas</h2>
  <ul>
    <li><strong>Average (secant):</strong> \(\dfrac{f(b)-f(a)}{b-a}\) over an interval.</li>
    <li><strong>Instantaneous (tangent), estimated:</strong> plug a tiny \(h\) (like \(0.001\)) into \(\dfrac{f(x+h)-f(x)}{h}\).</li>
    <li>Shrinking \(h\) further makes the estimate more accurate — the secant is settling toward the tangent.</li>
  </ul>
  ${graph("((x+h)^2 - x^2)/h", "h", { xMin: -3, xMax: 5, yMin: -4, yMax: 10, paramMin: 0.1, paramMax: 4, paramInit: 4, caption: "✨ This is the secant-slope of y=x² for spacing h. Slide h smaller and watch it settle onto the line y = 2x." })}
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Polynomial (cubic)</h3><p>Find the average rate of change of \(f(x)=x^3\) on \([1,3]\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\dfrac{f(3)-f(1)}{3-1}=\dfrac{27-1}{2}\).</div><em>Conclusion: \(13\) — the slope of the secant joining \((1,1)\) and \((3,27)\). ✓</em></div>${gframe(["y = x^3", "y = 13*x - 12"], { title: "f(x)=x³ with the secant from (1,1) to (3,27): slope 13" })}</div>
  <div class="example-box" ${EX}><h3>Example 2: Reciprocal (a negative rate)</h3><p>Find the average rate of change of \(f(x)=\dfrac1x\) on \([1,4]\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\dfrac{f(4)-f(1)}{4-1}=\dfrac{\frac14-1}{3}=\dfrac{-\frac34}{3}\).</div><em>Conclusion: \(-\dfrac14\) — negative because \(\tfrac1x\) is decreasing. ✓</em></div>${gframe(["y = 1/x", "y = -0.25*x + 1.25"], { title: "f(x)=1/x with the secant from (1,1) to (4,¼): slope −¼ (falling)" })}</div>
  <div class="example-box" ${EX}><h3>Example 3: Exponential</h3><p>Find the average rate of change of \(f(x)=2^x\) on \([0,3]\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\dfrac{2^3-2^0}{3-0}=\dfrac{8-1}{3}\).</div><em>Conclusion: \(\dfrac73\approx2.33\) — the average growth rate over the interval. ✓</em></div>${gframe(["y = 2^x", "y = (7/3)*x + 1"], { title: "f(x)=2ˣ with the secant from (0,1) to (3,8): slope 7/3" })}</div>
  <div class="example-box" ${EX}><h3>Example 4: Trigonometric</h3><p>Find the average rate of change of \(f(x)=\sin x\) on \(\big[0,\tfrac{\pi}{2}\big]\) (radians).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\dfrac{\sin\frac{\pi}{2}-\sin 0}{\frac{\pi}{2}-0}=\dfrac{1-0}{\pi/2}\).</div><em>Conclusion: \(\dfrac{2}{\pi}\approx0.64\). ✓</em></div>${gframe(["y = sin(x)", "y = (2/pi)*x"], { title: "f(x)=sin x with the secant from (0,0) to (π/2,1): slope 2/π" })}</div>
  <div class="example-box" ${EX}><h3>Example 5: Instantaneous rate — estimated numerically</h3><p>Estimate the <em>instantaneous</em> rate of \(f(x)=x^2\) at \(x=2\) using \(h=0.001\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Plug into the difference quotient: \(\dfrac{f(2.001)-f(2)}{0.001}=\dfrac{4.004001-4}{0.001}\).</div><div class="step"><strong>Step 2:</strong> That's \(\dfrac{0.004001}{0.001}=4.001\).</div><em>Conclusion: \(\approx4\) — the slope of the <strong>tangent</strong> (not a secant). Try an even smaller \(h\) and you'll get even closer to \(4\). ✓</em></div>${gframe(["y = x^2", "y = 4*x - 4"], { title: "f(x)=x² with the tangent at x=2: slope ≈4, which the estimate is closing in on" })}</div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Average rate of change of \(f(x)=x^3\) on \([0,2]\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\dfrac{8-0}{2}=4\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Average rate of change of \(f(x)=\dfrac1x\) on \([2,4]\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\dfrac{\frac14-\frac12}{2}=-\dfrac18\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Average rate of change of \(f(x)=2^x\) on \([1,3]\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\dfrac{8-2}{2}=3\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Average rate of change of \(f(x)=\cos x\) on \([0,\pi]\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\dfrac{\cos\pi-\cos 0}{\pi}=\dfrac{-1-1}{\pi}=-\dfrac2\pi\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>Estimate the instantaneous rate of \(f(x)=x^2\) at \(x=5\) using \(h=0.001\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\dfrac{(5.001)^2-25}{0.001}=\dfrac{0.010001}{0.001}=10.001\approx10\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: What's the difference between the two rates?</h3><p><em>Average = secant slope over an interval; instantaneous = tangent slope at a point.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: How do you estimate the instantaneous rate?</h3><p><em>Compute the average rate over a very small interval (a tiny \(h\), like \(0.001\)) — the smaller \(h\), the better the estimate.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: What does the slider show?</h3><p><em>The secant-slope function settling toward \(2x\) as \(h\) shrinks — that settled value is what we're estimating.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: Why can average and instantaneous differ so much?</h3><p><em>Average smooths over a whole interval; instantaneous captures one moment (the ball example: \(0\) vs \(10\)).</em></p></div>
</div>`),
]);

u1["1.2"] = L("1.2", "The Limit of a Function", [
  html(String.raw`<div class="lecture-box">
  <h1>🎯 The Limit of a Function</h1>
  <p><strong>Overview.</strong> \(\displaystyle\lim_{x\to a}f(x)=L\) means \(f(x)\) gets arbitrarily close to \(L\) as \(x\) approaches \(a\) — <em>whether or not</em> \(f(a)\) itself exists. If the function is well-behaved you just substitute; if substitution gives the indeterminate \(\tfrac00\), you must <strong>factor</strong> or <strong>rationalize</strong> first. One-sided limits and limits at infinity round out the toolkit.</p>
  <h2>📌 How to evaluate a limit</h2>
  <ul>
    <li><strong>Direct substitution</strong> when \(f\) is continuous there.</li>
    <li><strong>\(\tfrac00\) indeterminate:</strong> factor and cancel, or rationalize, then substitute.</li>
    <li><strong>One-sided:</strong> \(\lim_{x\to a^-}\) and \(\lim_{x\to a^+}\); the limit exists only if they agree.</li>
    <li><strong>At infinity:</strong> compare degrees / divide by the highest power.</li>
  </ul>
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Direct substitution (linear)</h3><p>Evaluate \(\displaystyle\lim_{x\to3}(2x+1)\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> The function is continuous; substitute \(x=3\).</div><em>Conclusion: \(7\). ✓</em></div>${gframe(["y = 2*x + 1"], { title: "y = 2x+1 is continuous, so the limit at x=3 is just f(3)=7" })}</div>
  <div class="example-box" ${EX}><h3>Example 2: Factor to remove \(\tfrac00\) (rational)</h3><p>Evaluate \(\displaystyle\lim_{x\to2}\dfrac{x^2-4}{x-2}\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Substitution gives \(\tfrac00\). Factor: \(\dfrac{(x-2)(x+2)}{x-2}=x+2\).</div><div class="step"><strong>Step 2:</strong> Now substitute: \(2+2\).</div><em>Conclusion: \(4\). ✓</em></div>${gframe(["y = (x^2 - 4)/(x - 2)"], { title: "the line y = x+2 with a hole at x=2 — the limit is 4 even though f(2) is undefined" })}</div>
  <div class="example-box" ${EX}><h3>Example 3: Rationalize to remove \(\tfrac00\) (radical)</h3><p>Evaluate \(\displaystyle\lim_{x\to0}\dfrac{\sqrt{x+9}-3}{x}\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\tfrac00\). Multiply by the conjugate: \(\dfrac{(\sqrt{x+9}-3)(\sqrt{x+9}+3)}{x(\sqrt{x+9}+3)}=\dfrac{x}{x(\sqrt{x+9}+3)}\).</div><div class="step"><strong>Step 2:</strong> Cancel \(x\): \(\dfrac{1}{\sqrt{x+9}+3}\to\dfrac{1}{3+3}\).</div><em>Conclusion: \(\tfrac16\). ✓</em></div>${gframe(["y = (sqrt(x+9) - 3)/x"], { title: "a hole at x=0; the curve approaches y = 1/6 ≈ 0.167" })}</div>
  <div class="example-box" ${EX}><h3>Example 4: One-sided limits disagree (absolute value)</h3><p>Does \(\displaystyle\lim_{x\to0}\dfrac{|x|}{x}\) exist?</p><div class="solution"><div class="step"><strong>Step 1:</strong> For \(x>0,\ \tfrac{|x|}{x}=1\); for \(x<0,\ =-1\).</div><div class="step"><strong>Step 2:</strong> \(\lim_{x\to0^+}=1\ne-1=\lim_{x\to0^-}\).</div><em>Conclusion: the limit <strong>does not exist</strong>. ✓</em></div>${gframe(["y = abs(x)/x"], { title: "a jump at x=0: +1 on the right, −1 on the left — so no two-sided limit" })}</div>
  <div class="example-box" ${EX}><h3>Example 5: Limit at infinity (rational)</h3><p>Evaluate \(\displaystyle\lim_{x\to\infty}\dfrac{3x^2-x}{x^2+5}\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Divide top and bottom by \(x^2\): \(\dfrac{3-\tfrac1x}{1+\tfrac5{x^2}}\).</div><div class="step"><strong>Step 2:</strong> As \(x\to\infty\) the small terms vanish.</div><em>Conclusion: \(3\) (the ratio of leading coefficients). ✓</em></div>${gframe(["y = (3*x^2 - x)/(x^2 + 5)"], { title: "the curve levels off toward the horizontal asymptote y = 3 as x grows" })}</div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>\(\displaystyle\lim_{x\to4}(x^2-1)\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(15\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>\(\displaystyle\lim_{x\to3}\dfrac{x^2-9}{x-3}\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(x+3\to6\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>\(\displaystyle\lim_{x\to\infty}\dfrac{5x-2}{x+1}\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(5\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>\(\displaystyle\lim_{x\to1}\dfrac{x^2+x-2}{x-1}\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\dfrac{(x+2)(x-1)}{x-1}=x+2\to3\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>Does \(\displaystyle\lim_{x\to0}\dfrac1x\) exist?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>No — it goes to \(-\infty\) on the left and \(+\infty\) on the right.</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: Does a limit require \(f(a)\) to exist?</h3><p><em>No — the limit is about the approach, not the value at \(a\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: What does \(\tfrac00\) tell you?</h3><p><em>It's indeterminate — factor or rationalize, then re-evaluate.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: When does a two-sided limit exist?</h3><p><em>Only when the left and right limits are equal.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: How do you take a limit at infinity?</h3><p><em>Divide by the highest power; small terms vanish.</em></p></div>
</div>`),
]);

u1["1.3"] = L("1.3", "Continuity & Limit Laws", [
  html(String.raw`<div class="lecture-box">
  <h1>🔗 Continuity &amp; Limit Laws</h1>
  <p><strong>Overview.</strong> A function is <strong>continuous at \(a\)</strong> when you can draw it through that point without lifting your pen — formally, \(f(a)\) is defined, \(\lim_{x\to a}f(x)\) exists, and the two are <em>equal</em>. When any condition fails you have a discontinuity: a <strong>hole</strong> (removable), a <strong>jump</strong>, or an <strong>infinite</strong> break at an asymptote. The <strong>limit laws</strong> let you break complicated limits into simple pieces.</p>
  <h2>📌 The essentials</h2>
  <ul>
    <li><strong>Continuous at \(a\):</strong> \(f(a)\) defined, \(\lim_{x\to a}f(x)\) exists, and \(\lim_{x\to a}f(x)=f(a)\).</li>
    <li><strong>Discontinuities:</strong> removable (hole), jump (one-sided limits differ), infinite (vertical asymptote).</li>
    <li><strong>Limit laws:</strong> the limit of a sum/difference/product/quotient is the sum/…/quotient of the limits (quotient needs a nonzero denominator).</li>
  </ul>
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Verify continuity (polynomial)</h3><p>Is \(f(x)=x^2+1\) continuous at \(x=2\)?</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(f(2)=5\), \(\lim_{x\to2}(x^2+1)=5\), and they match.</div><em>Conclusion: yes — continuous (in fact everywhere). ✓</em></div>${gframe(["y = x^2 + 1"], { title: "an unbroken curve — continuous for every x" })}</div>
  <div class="example-box" ${EX}><h3>Example 2: Removable discontinuity (rational)</h3><p>Classify the discontinuity of \(f(x)=\dfrac{x^2-4}{x-2}\) at \(x=2\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(f(2)\) is undefined, but \(\lim_{x\to2}=4\) exists.</div><em>Conclusion: removable — a single hole at \((2,4)\). ✓</em></div>${gframe(["y = (x^2 - 4)/(x - 2)"], { title: "a removable hole at (2,4) — the limit exists, so it could be 'filled in'" })}</div>
  <div class="example-box" ${EX}><h3>Example 3: Infinite discontinuity (rational)</h3><p>Classify the discontinuity of \(f(x)=\dfrac{1}{x-3}\) at \(x=3\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> The one-sided limits are \(\pm\infty\).</div><em>Conclusion: infinite (a vertical asymptote) — not removable. ✓</em></div>${gframe(["y = 1/(x - 3)"], { title: "an infinite (non-removable) break — a vertical asymptote at x=3" })}</div>
  <div class="example-box" ${EX}><h3>Example 4: Jump discontinuity</h3><p>For \(f(x)=\begin{cases}x,&x<1\\x+2,&x\ge1\end{cases}\), what happens at \(x=1\)?</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\lim_{x\to1^-}=1\) but \(\lim_{x\to1^+}=3\).</div><em>Conclusion: a jump discontinuity (limit does not exist). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: Make it continuous</h3><p>Find \(k\) so that \(f(x)=\begin{cases}x^2,&x\le2\\kx,&x>2\end{cases}\) is continuous at \(x=2\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Need the pieces to meet: \(2^2=k(2)\).</div><em>Conclusion: \(4=2k\Rightarrow k=2\). ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Is \(\dfrac{x+1}{x-2}\) continuous at \(x=2\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>No — infinite discontinuity (asymptote).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Classify the discontinuity of \(\dfrac{x^2-1}{x-1}\) at \(x=1\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Removable (hole at \((1,2)\)).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Use limit laws: \(\displaystyle\lim_{x\to2}(3x^2-x)\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(12-2=10\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Find \(k\): \(f(x)=\begin{cases}3x,&x<1\\x+k,&x\ge1\end{cases}\) continuous at \(1\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(3=1+k\Rightarrow k=2\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>Where is \(\dfrac{1}{x^2-9}\) discontinuous?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(x=3\) and \(x=-3\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: What are the three conditions for continuity?</h3><p><em>\(f(a)\) defined, the limit exists, and they're equal.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: What makes a discontinuity removable?</h3><p><em>The limit exists (a hole) — you could "fill it in".</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: How do you spot a jump?</h3><p><em>The one-sided limits exist but differ.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: How do you make a piecewise function continuous?</h3><p><em>Set the pieces equal at the boundary and solve.</em></p></div>
</div>`),
]);

u1["1.4"] = L("1.4", "Slope of Tangent", [
  html(String.raw`<div class="lecture-box">
  <h1>📐 Slope of Tangent</h1>
  <p><strong>Overview.</strong> In Lesson 1.1 you <em>estimated</em> the instantaneous rate with a tiny \(h\). Now that you can evaluate limits exactly (Lessons 1.2–1.3), you can find the tangent slope at a specific point <strong>exactly</strong>: \[m=\lim_{h\to0}\frac{f(a+h)-f(a)}{h}.\] Once you have the slope \(m\) and the point \((a,f(a))\), the tangent <strong>line</strong> follows from point-slope form.</p>
  <h2>📌 The key ideas</h2>
  <ul>
    <li><strong>Tangent slope at \(x=a\):</strong> \(m=\displaystyle\lim_{h\to0}\dfrac{f(a+h)-f(a)}{h}\) — expand, simplify, cancel \(h\), then let \(h\to0\).</li>
    <li><strong>Tangent line</strong> at \(x=a\): \(y-f(a)=m(x-a)\).</li>
    <li>This is the exact version of Lesson 1.1's estimate — the same difference quotient, but now solved precisely instead of approximated.</li>
  </ul>
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Confirming the estimate — \(f(x)=x^2\) at \(x=2\)</h3><p>Find the exact tangent slope of \(f(x)=x^2\) at \(x=2\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\dfrac{(2+h)^2-4}{h}=\dfrac{4h+h^2}{h}=4+h\).</div><div class="step"><strong>Step 2:</strong> \(\lim_{h\to0}(4+h)=4\).</div><em>Conclusion: \(m=4\) exactly — matching Lesson 1.1's estimate of \(\approx4\). ✓</em></div>${gframe(["y = x^2", "y = 4*x - 4"], { title: "f(x)=x² with its tangent at x=2: slope exactly 4" })}</div>
  <div class="example-box" ${EX}><h3>Example 2: The tangent line — \(f(x)=x^2\) at \(x=3\)</h3><p>Find the equation of the tangent line to \(y=x^2\) at \(x=3\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Slope: \(\dfrac{(3+h)^2-9}{h}=\dfrac{6h+h^2}{h}=6+h\to6\).</div><div class="step"><strong>Step 2:</strong> Point \((3,9)\); \(y-9=6(x-3)\).</div><em>Conclusion: \(y=6x-9\). ✓</em></div>${gframe(["y = x^2", "y = 6*x - 9"], { title: "y = x² with its tangent y = 6x−9 at (3,9)" })}</div>
  <div class="example-box" ${EX}><h3>Example 3: Polynomial — \(f(x)=3x^2-x\) at \(x=1\)</h3><p>Find the exact tangent slope at \(x=1\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Numerator \(=3(1+h)^2-(1+h)-2=5h+3h^2\).</div><div class="step"><strong>Step 2:</strong> Divide by \(h\): \(5+3h\to5\).</div><em>Conclusion: \(m=5\). ✓</em></div>${gframe(["y = 3*x^2 - x", "y = 5*x - 3"], { title: "f(x)=3x²−x with its tangent at x=1: slope 5" })}</div>
  <div class="example-box" ${EX}><h3>Example 4: Reciprocal — \(f(x)=\dfrac1x\) at \(x=2\)</h3><p>Find the exact tangent slope (a negative rate).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\dfrac{\frac1{2+h}-\frac12}{h}=\dfrac{-h}{2(2+h)h}=\dfrac{-1}{2(2+h)}\).</div><div class="step"><strong>Step 2:</strong> \(\lim_{h\to0}\dfrac{-1}{2(2+h)}=-\dfrac14\).</div><em>Conclusion: \(m=-\dfrac14\). ✓</em></div>${gframe(["y = 1/x", "y = -0.25*x + 1"], { title: "f(x)=1/x with its tangent at x=2: slope −¼ (falling)" })}</div>
  <div class="example-box" ${EX}><h3>Example 5: Radical — \(f(x)=\sqrt{x}\) at \(x=4\)</h3><p>Find the exact tangent slope using the conjugate.</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\dfrac{\sqrt{4+h}-2}{h}\cdot\dfrac{\sqrt{4+h}+2}{\sqrt{4+h}+2}=\dfrac{h}{h(\sqrt{4+h}+2)}=\dfrac{1}{\sqrt{4+h}+2}\).</div><div class="step"><strong>Step 2:</strong> \(\lim_{h\to0}\dfrac{1}{\sqrt{4+h}+2}=\dfrac14\).</div><em>Conclusion: \(m=\dfrac14\). ✓</em></div>${gframe(["y = sqrt(x)", "y = 0.25*x + 1"], { title: "f(x)=√x with its tangent at x=4: slope ¼" })}</div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Find the exact tangent slope of \(f(x)=x^2\) at \(x=5\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(10\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Find the tangent line to \(y=x^2\) at \(x=1\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Slope \(2\), point \((1,1)\): \(y=2x-1\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Find the exact tangent slope of \(f(x)=2x^2\) at \(x=3\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(12\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Find the exact tangent slope of \(f(x)=\dfrac1x\) at \(x=1\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(-1\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>Find the exact tangent slope of \(f(x)=5x-3\) at \(x=4\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(5\) (a line's slope is constant, the same everywhere).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: How is this different from Lesson 1.1?</h3><p><em>Same idea, but exact — we now use a limit instead of a tiny \(h\) estimate.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: What's the routine?</h3><p><em>Form \(\tfrac{f(a+h)-f(a)}{h}\), simplify to cancel \(h\), then let \(h\to0\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: How do you write the tangent line?</h3><p><em>\(y-f(a)=m(x-a)\), using the slope \(m\) and the point \((a,f(a))\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: What comes next?</h3><p><em>Doing this same limit for a <strong>general</strong> \(x\) (not just one point) gives the <strong>derivative function</strong> — Lesson 1.5.</em></p></div>
</div>`),
]);

u1["1.5"] = L("1.5", "Derivative Using Definition", [
  html(String.raw`<div class="lecture-box">
  <h1>✨ Derivative Using Definition</h1>
  <p><strong>Overview.</strong> Lesson 1.4 found the tangent slope at <em>one</em> point at a time. The <strong>derivative</strong> \(f'(x)\) does this for <em>every</em> \(x\) at once — it's a whole new function, defined as a limit of difference quotients: \[f'(x)=\lim_{h\to0}\frac{f(x+h)-f(x)}{h}.\] "Using the definition" (or "first principles") means computing this limit directly, with a general \(x\) instead of a specific number — the foundation every shortcut rule is built on.</p>
  <h2>📌 The definition</h2>
  <ul>
    <li>\(f'(x)=\displaystyle\lim_{h\to0}\dfrac{f(x+h)-f(x)}{h}\) — same routine as Lesson 1.4, but with \(x\) left general.</li>
    <li>Once you know \(f'(x)\), the tangent slope at <em>any</em> point \(a\) is just \(f'(a)\) — no limit needed each time.</li>
  </ul>
  ${graph("((x+h)^3 - x^3)/h", "h", { xMin: -3, xMax: 3, yMin: -2, yMax: 12, paramMin: 0.1, paramMax: 3, paramInit: 3, caption: "✨ Difference quotient of y=x³. Slide h→0 and watch it become the parabola y = 3x² — the derivative of x³." })}
  <p><strong>How every solution below is laid out.</strong> <strong>Step 1</strong> — find \(f(x+h)\) and expand it. <strong>Step 2</strong> — write \(f'(x)=\lim_{h\to0}\dfrac{f(x+h)-f(x)}{h}\), substitute, cross out the terms that cancel, factor out \(h\), cancel it, and box the answer.</p>
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Polynomial \(f(x)=x^2\)</h3><p>Find \(f'(x)\) using the definition.</p><div class="solution"><div class="step"><strong>Step 1:</strong> Find \(f(x+h)\): \(f(x+h)=(x+h)^2=x^2+2xh+h^2\).</div><div class="step"><strong>Step 2:</strong> Substitute into the definition, cross out what cancels, factor out \(h\), and cancel it:\[\begin{aligned}f'(x)&=\lim_{h\to0}\frac{f(x+h)-f(x)}{h}\\&=\lim_{h\to0}\frac{(x^2+2xh+h^2)-(x)^2}{h}\\&=\lim_{h\to0}\frac{\cancel{x^2}+2xh+h^2-\cancel{x^2}}{h}\\&=\lim_{h\to0}\frac{\cancel{h}(2x+h)}{\cancel{h}}\\&=\boxed{2x}\end{aligned}\]</div><em>Conclusion: \(f'(x)=2x\). ✓</em></div>${gframe(["y = x^2", "y = 2*x"], { title: "f(x)=x² (blue) and its derivative f'(x)=2x (orange): slope 0 at x=0 ↔ 2x crosses zero there" })}</div>
  <div class="example-box" ${EX}><h3>Example 2: Polynomial \(f(x)=3x^2-x\)</h3><p>Find \(f'(x)\) using the definition.</p><div class="solution"><div class="step"><strong>Step 1:</strong> Find \(f(x+h)\): \(f(x+h)=3(x+h)^2-(x+h)=3x^2+6xh+3h^2-x-h\).</div><div class="step"><strong>Step 2:</strong> Substitute into the definition, cross out what cancels, factor out \(h\), and cancel it:\[\begin{aligned}f'(x)&=\lim_{h\to0}\frac{f(x+h)-f(x)}{h}\\&=\lim_{h\to0}\frac{(3x^2+6xh+3h^2-x-h)-(3x^2-x)}{h}\\&=\lim_{h\to0}\frac{\cancel{3x^2}+6xh+3h^2-\cancel{x}-h-\cancel{3x^2}+\cancel{x}}{h}\\&=\lim_{h\to0}\frac{\cancel{h}(6x+3h-1)}{\cancel{h}}\\&=\boxed{6x-1}\end{aligned}\]</div><em>Conclusion: \(f'(x)=6x-1\). ✓</em></div>${gframe(["y = 3*x^2 - x", "y = 6*x - 1"], { title: "f(x)=3x²−x and its derivative f'(x)=6x−1" })}</div>
  <div class="example-box" ${EX}><h3>Example 3: Reciprocal \(f(x)=\dfrac1x\)</h3><p>Find \(f'(x)\) using the definition.</p><div class="solution"><div class="step"><strong>Step 1:</strong> Find \(f(x+h)\): \(f(x+h)=\dfrac{1}{x+h}\).</div><div class="step"><strong>Step 2:</strong> Substitute into the definition, combine the fractions over the common denominator \(x(x+h)\), cross out what cancels, and cancel \(h\):\[\begin{aligned}f'(x)&=\lim_{h\to0}\frac{f(x+h)-f(x)}{h}\\&=\lim_{h\to0}\dfrac{\dfrac{1}{x+h}-\dfrac{1}{x}}{h}\\&=\lim_{h\to0}\dfrac{\dfrac{x-(x+h)}{x(x+h)}}{h}\\&=\lim_{h\to0}\frac{\cancel{x}-\cancel{x}-h}{x(x+h)\cdot h}\\&=\lim_{h\to0}\frac{-\cancel{h}}{x(x+h)\cancel{h}}\\&=\lim_{h\to0}\frac{-1}{x(x+h)}\\&=\boxed{-\frac{1}{x^2}}\end{aligned}\]</div><em>Conclusion: \(f'(x)=-\dfrac1{x^2}\). ✓</em></div>${gframe(["y = 1/x", "y = -1/x^2"], { title: "f(x)=1/x and its derivative f'(x)=−1/x² (always negative — 1/x is always falling)" })}</div>
  <div class="example-box" ${EX}><h3>Example 4: Using the formula instead of redoing the limit</h3><p>From Example 1, \(f(x)=x^2\) has \(f'(x)=2x\). Find the tangent slope at \(x=5\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> No need to redo the limit — just substitute into the formula.</div><div class="step"><strong>Step 2:</strong> \(f'(5)=2(5)\).</div><em>Conclusion: \(10\) — instant, once you have \(f'(x)\) in general. Compare to Lesson 1.4, where each point needed its own limit. ✓</em></div>${gframe(["y = x^2", "y = 10*x - 25"], { title: "y = x² with its tangent at x=5 (slope 10), read straight off f'(x)=2x" })}</div>
  <div class="example-box" ${EX}><h3>Example 5: Radical \(f(x)=\sqrt{x}\)</h3><p>Find \(f'(x)\) using the definition.</p><div class="solution"><div class="step"><strong>Step 1:</strong> Find \(f(x+h)\): \(f(x+h)=\sqrt{x+h}\).</div><div class="step"><strong>Step 2:</strong> Substitute into the definition, multiply top and bottom by the conjugate \(\sqrt{x+h}+\sqrt{x}\), cross out what cancels, and cancel \(h\):\[\begin{aligned}f'(x)&=\lim_{h\to0}\frac{f(x+h)-f(x)}{h}\\&=\lim_{h\to0}\frac{\sqrt{x+h}-\sqrt{x}}{h}\\&=\lim_{h\to0}\frac{\left(\sqrt{x+h}-\sqrt{x}\right)\left(\sqrt{x+h}+\sqrt{x}\right)}{h\left(\sqrt{x+h}+\sqrt{x}\right)}\\&=\lim_{h\to0}\frac{\cancel{x}+h-\cancel{x}}{h\left(\sqrt{x+h}+\sqrt{x}\right)}\\&=\lim_{h\to0}\frac{\cancel{h}}{\cancel{h}\left(\sqrt{x+h}+\sqrt{x}\right)}\\&=\lim_{h\to0}\frac{1}{\sqrt{x+h}+\sqrt{x}}\\&=\boxed{\frac{1}{2\sqrt{x}}}\end{aligned}\]</div><em>Conclusion: \(f'(x)=\dfrac{1}{2\sqrt{x}}\). ✓</em></div>${gframe(["y = sqrt(x)", "y = 1/(2*sqrt(x))"], { title: "f(x)=√x and its derivative f'(x)=1/(2√x) (large slope near 0, shrinking as x grows)" })}</div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Using the definition, differentiate \(f(x)=x^2\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(2x\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Using the definition, differentiate \(f(x)=x^2+5x\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(2x+5\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Using the definition, differentiate \(f(x)=2x^2\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(4x\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>From \(f'(x)=4x\) (Question 3), find the tangent slope of \(f(x)=2x^2\) at \(x=3\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(f'(3)=12\) — no limit needed.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>Using the definition, differentiate \(f(x)=5x-3\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(5\) (a line's slope is constant).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: What is the derivative?</h3><p><em>The limit of the difference quotient, done for a general \(x\) — the slope of the tangent at every point at once.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: How is this different from Lesson 1.4?</h3><p><em>Lesson 1.4 found the slope at one number; here \(x\) stays general, giving a formula that works everywhere.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: How do you handle \(\tfrac1x\) or \(\sqrt{x}\)?</h3><p><em>Combine fractions / rationalize so the \(h\) cancels.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: Why bother deriving \(f'(x)\) in general?</h3><p><em>Once you have it, plugging in any point is instant — no limit to redo each time.</em></p></div>
</div>`),
]);
