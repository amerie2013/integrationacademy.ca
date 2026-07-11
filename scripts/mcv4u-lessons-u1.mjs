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
  <p><strong>Overview.</strong> The <strong>average rate of change</strong> over \([a,b]\) is the slope of the <em>secant</em> line, \(\dfrac{f(b)-f(a)}{b-a}\). The <strong>instantaneous rate of change</strong> at a point is the slope of the <em>tangent</em> — and the whole of calculus rests on one idea: the tangent is the <strong>limit of secants</strong> as the interval shrinks to zero. The engine that does this is the <strong>difference quotient</strong> \(\dfrac{f(x+h)-f(x)}{h}\).</p>
  <h2>📌 The key ideas</h2>
  <ul>
    <li><strong>Average (secant):</strong> \(\dfrac{f(b)-f(a)}{b-a}\) over an interval.</li>
    <li><strong>Instantaneous (tangent):</strong> \(\displaystyle\lim_{h\to0}\dfrac{f(a+h)-f(a)}{h}\).</li>
    <li>The difference quotient \(\dfrac{f(x+h)-f(x)}{h}\) is the secant slope for spacing \(h\); let \(h\to0\) to get the tangent slope.</li>
  </ul>
  ${graph("((x+h)^2 - x^2)/h", "h", { xMin: -3, xMax: 5, yMin: -4, yMax: 10, paramMin: 0.1, paramMax: 4, paramInit: 4, caption: "✨ The magic: this is the secant-slope of y=x² for spacing h. Slide h toward 0 and watch it collapse onto the line y = 2x — the derivative." })}
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Polynomial (cubic)</h3><p>Find the average rate of change of \(f(x)=x^3\) on \([1,3]\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\dfrac{f(3)-f(1)}{3-1}=\dfrac{27-1}{2}\).</div><em>Conclusion: \(13\) — the slope of the secant joining \((1,1)\) and \((3,27)\). ✓</em></div>${gframe(["y = x^3", "y = 13*x - 12"], { title: "f(x)=x³ with the secant from (1,1) to (3,27): slope 13" })}</div>
  <div class="example-box" ${EX}><h3>Example 2: Reciprocal (a negative rate)</h3><p>Find the average rate of change of \(f(x)=\dfrac1x\) on \([1,4]\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\dfrac{f(4)-f(1)}{4-1}=\dfrac{\frac14-1}{3}=\dfrac{-\frac34}{3}\).</div><em>Conclusion: \(-\dfrac14\) — negative because \(\tfrac1x\) is decreasing. ✓</em></div>${gframe(["y = 1/x", "y = -0.25*x + 1.25"], { title: "f(x)=1/x with the secant from (1,1) to (4,¼): slope −¼ (falling)" })}</div>
  <div class="example-box" ${EX}><h3>Example 3: Exponential</h3><p>Find the average rate of change of \(f(x)=2^x\) on \([0,3]\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\dfrac{2^3-2^0}{3-0}=\dfrac{8-1}{3}\).</div><em>Conclusion: \(\dfrac73\approx2.33\) — the average growth rate over the interval. ✓</em></div>${gframe(["y = 2^x", "y = (7/3)*x + 1"], { title: "f(x)=2ˣ with the secant from (0,1) to (3,8): slope 7/3" })}</div>
  <div class="example-box" ${EX}><h3>Example 4: Trigonometric</h3><p>Find the average rate of change of \(f(x)=\sin x\) on \(\big[0,\tfrac{\pi}{2}\big]\) (radians).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\dfrac{\sin\frac{\pi}{2}-\sin 0}{\frac{\pi}{2}-0}=\dfrac{1-0}{\pi/2}\).</div><em>Conclusion: \(\dfrac{2}{\pi}\approx0.64\). ✓</em></div>${gframe(["y = sin(x)", "y = (2/pi)*x"], { title: "f(x)=sin x with the secant from (0,0) to (π/2,1): slope 2/π" })}</div>
  <div class="example-box" ${EX}><h3>Example 5: Instantaneous rate — the exact limit</h3><p>Find the <em>instantaneous</em> rate of \(f(x)=x^2\) at \(x=2\) exactly.</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\displaystyle\lim_{h\to0}\dfrac{(2+h)^2-4}{h}=\lim_{h\to0}\dfrac{4h+h^2}{h}=\lim_{h\to0}(4+h)\).</div><em>Conclusion: \(4\) — the slope of the <strong>tangent</strong> (not a secant). For \(2^x\) or \(\sin x\) you estimate this numerically until you learn the rules in Units 2–3. ✓</em></div>${gframe(["y = x^2", "y = 4*x - 4"], { title: "f(x)=x² with the tangent at x=2: slope 4 — the limit of the secants" })}</div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Average rate of change of \(f(x)=x^3\) on \([0,2]\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\dfrac{8-0}{2}=4\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Average rate of change of \(f(x)=\dfrac1x\) on \([2,4]\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\dfrac{\frac14-\frac12}{2}=-\dfrac18\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Average rate of change of \(f(x)=2^x\) on \([1,3]\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\dfrac{8-2}{2}=3\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Average rate of change of \(f(x)=\cos x\) on \([0,\pi]\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\dfrac{\cos\pi-\cos 0}{\pi}=\dfrac{-1-1}{\pi}=-\dfrac2\pi\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>Instantaneous rate of \(f(x)=x^2\) at \(x=5\) (via the limit)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\lim_{h\to0}(10+h)=10\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: What's the difference between the two rates?</h3><p><em>Average = secant slope over an interval; instantaneous = tangent slope at a point.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: How do you get the instantaneous rate exactly?</h3><p><em>Take the limit of the difference quotient as \(h\to0\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: What does the slider show?</h3><p><em>The secant-slope function approaching the derivative \(2x\) as \(h\to0\).</em></p></div>
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

u1["1.4"] = L("1.4", "The Derivative from First Principles", [
  html(String.raw`<div class="lecture-box">
  <h1>✨ The Derivative from First Principles</h1>
  <p><strong>Overview.</strong> The <strong>derivative</strong> is the instantaneous-rate function, defined as a limit of difference quotients: \[f'(x)=\lim_{h\to0}\frac{f(x+h)-f(x)}{h}.\] It gives the slope of the tangent at every \(x\). "First principles" means computing this limit directly — the foundation every shortcut rule is built on.</p>
  <h2>📌 The definition &amp; the tangent line</h2>
  <ul>
    <li>\(f'(x)=\displaystyle\lim_{h\to0}\dfrac{f(x+h)-f(x)}{h}\) — expand, simplify, cancel \(h\), then let \(h\to0\).</li>
    <li><strong>Tangent line</strong> at \(x=a\): \(y-f(a)=f'(a)(x-a)\).</li>
  </ul>
  ${graph("((x+h)^3 - x^3)/h", "h", { xMin: -3, xMax: 3, yMin: -2, yMax: 12, paramMin: 0.1, paramMax: 3, paramInit: 3, caption: "✨ Difference quotient of y=x³. Slide h→0 and watch it become the parabola y = 3x² — the derivative of x³." })}
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Polynomial \(f(x)=x^2\)</h3><p>Differentiate from first principles.</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\dfrac{(x+h)^2-x^2}{h}=\dfrac{2xh+h^2}{h}=2x+h\).</div><div class="step"><strong>Step 2:</strong> \(\lim_{h\to0}(2x+h)\).</div><em>Conclusion: \(f'(x)=2x\). ✓</em></div>${gframe(["y = x^2", "y = 2*x"], { title: "f(x)=x² (blue) and its derivative f'(x)=2x (orange): slope 0 at x=0 ↔ 2x crosses zero there" })}</div>
  <div class="example-box" ${EX}><h3>Example 2: Polynomial \(f(x)=3x^2-x\)</h3><p>Differentiate from first principles.</p><div class="solution"><div class="step"><strong>Step 1:</strong> Numerator \(=3(x+h)^2-(x+h)-(3x^2-x)=6xh+3h^2-h\).</div><div class="step"><strong>Step 2:</strong> Divide by \(h\): \(6x+3h-1\), then \(h\to0\).</div><em>Conclusion: \(f'(x)=6x-1\). ✓</em></div>${gframe(["y = 3*x^2 - x", "y = 6*x - 1"], { title: "f(x)=3x²−x and its derivative f'(x)=6x−1" })}</div>
  <div class="example-box" ${EX}><h3>Example 3: Reciprocal \(f(x)=\dfrac1x\)</h3><p>Differentiate from first principles.</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\dfrac{\frac1{x+h}-\frac1x}{h}=\dfrac{x-(x+h)}{x(x+h)h}=\dfrac{-h}{x(x+h)h}\).</div><div class="step"><strong>Step 2:</strong> Cancel \(h\): \(\dfrac{-1}{x(x+h)}\to\dfrac{-1}{x^2}\).</div><em>Conclusion: \(f'(x)=-\dfrac1{x^2}\). ✓</em></div>${gframe(["y = 1/x", "y = -1/x^2"], { title: "f(x)=1/x and its derivative f'(x)=−1/x² (always negative — 1/x is always falling)" })}</div>
  <div class="example-box" ${EX}><h3>Example 4: Equation of a tangent</h3><p>Find the tangent line to \(y=x^2\) at \(x=3\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(f'(x)=2x\Rightarrow f'(3)=6\); point \((3,9)\).</div><div class="step"><strong>Step 2:</strong> \(y-9=6(x-3)\).</div><em>Conclusion: \(y=6x-9\). ✓</em></div>${gframe(["y = x^2", "y = 6*x - 9"], { title: "y = x² with its tangent y = 6x−9 at (3,9)" })}</div>
  <div class="example-box" ${EX}><h3>Example 5: Radical \(f(x)=\sqrt{x}\)</h3><p>Differentiate from first principles.</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\dfrac{\sqrt{x+h}-\sqrt{x}}{h}\) — multiply by the conjugate to get \(\dfrac{h}{h(\sqrt{x+h}+\sqrt{x})}\).</div><div class="step"><strong>Step 2:</strong> Cancel \(h\): \(\dfrac{1}{\sqrt{x+h}+\sqrt{x}}\to\dfrac{1}{2\sqrt{x}}\).</div><em>Conclusion: \(f'(x)=\dfrac{1}{2\sqrt{x}}\). ✓</em></div>${gframe(["y = sqrt(x)", "y = 1/(2*sqrt(x))"], { title: "f(x)=√x and its derivative f'(x)=1/(2√x) (large slope near 0, shrinking as x grows)" })}</div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>From first principles, differentiate \(f(x)=x^2\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(2x\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>From first principles, differentiate \(f(x)=x^2+5x\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(2x+5\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>From first principles, differentiate \(f(x)=2x^2\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(4x\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Find the tangent to \(y=x^2\) at \(x=1\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(f'(1)=2\), point \((1,1)\): \(y=2x-1\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>From first principles, differentiate \(f(x)=5x-3\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(5\) (a line's slope is constant).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: What is the derivative?</h3><p><em>The limit of the difference quotient — the slope of the tangent at each \(x\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: What's the routine for first principles?</h3><p><em>Form \(\tfrac{f(x+h)-f(x)}{h}\), simplify to cancel \(h\), then let \(h\to0\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: How do you handle \(\tfrac1x\) or \(\sqrt{x}\)?</h3><p><em>Combine fractions / rationalize so the \(h\) cancels.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: How do you write the tangent line?</h3><p><em>\(y-f(a)=f'(a)(x-a)\).</em></p></div>
</div>`),
]);
