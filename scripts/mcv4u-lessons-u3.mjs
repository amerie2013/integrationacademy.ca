// MCV4U Unit 3 — Derivatives of Transcendental Functions. Deep lessons + f-vs-f' graphs.
import { html, gframe } from "./seed-mpm2d.mjs";
const L = (code, title, blocks) => ({ code, title, blocks });
const EX = `style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const PR = `style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const QA = `style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
export const u3 = {};

u3["3.1"] = L("3.1", "Derivatives of Sinusoidal Functions", [
  html(String.raw`<div class="lecture-box">
  <h1>🌊 Derivatives of Sinusoidal Functions</h1>
  <p><strong>Overview.</strong> In <em>radians</em>, the sine and cosine have beautifully simple derivatives: \(\dfrac{d}{dx}\sin x=\cos x\) and \(\dfrac{d}{dx}\cos x=-\sin x\). Graphically, the slope of \(\sin x\) at every point is exactly the height of \(\cos x\). Combine these with the chain, product, and quotient rules to differentiate any trig expression.</p>
  <h2>📌 The rules (radians)</h2>
  <ul>
    <li>\(\dfrac{d}{dx}\sin x=\cos x\); \(\dfrac{d}{dx}\cos x=-\sin x\).</li>
    <li><strong>Chain:</strong> \(\dfrac{d}{dx}\sin(g(x))=\cos(g(x))\,g'(x)\), and similarly for cosine.</li>
  </ul>
  ${gframe(["y = sin(x)", "y = cos(x)"], { title: "y = sin x and its derivative y = cos x: where sin is steepest (x=0), cos is at its max; where sin peaks, cos = 0" })}
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Sine</h3><p>Differentiate \(f(x)=\sin x\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Standard rule.</div><em>Conclusion: \(f'(x)=\cos x\). ✓</em></div>${gframe(["y = sin(x)", "y = cos(x)"], { title: "f(x)=sin x and its derivative cos x: the slope of sine is the height of cosine" })}</div>
  <div class="example-box" ${EX}><h3>Example 2: Cosine (mind the sign)</h3><p>Differentiate \(f(x)=\cos x\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> The cosine derivative carries a minus sign.</div><em>Conclusion: \(f'(x)=-\sin x\). ✓</em></div>${gframe(["y = cos(x)", "y = -sin(x)"], { title: "f(x)=cos x and its derivative −sin x" })}</div>
  <div class="example-box" ${EX}><h3>Example 3: Chain rule</h3><p>Differentiate \(f(x)=\sin(3x)\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\cos(3x)\cdot\dfrac{d}{dx}(3x)\).</div><em>Conclusion: \(f'(x)=3\cos(3x)\). ✓</em></div>${gframe(["y = sin(3*x)", "y = 3*cos(3*x)"], { title: "f(x)=sin(3x) and its derivative 3cos(3x) (3× taller, 3× faster)" })}</div>
  <div class="example-box" ${EX}><h3>Example 4: Product rule</h3><p>Differentiate \(f(x)=x\sin x\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \((1)\sin x+x\cos x\).</div><em>Conclusion: \(f'(x)=\sin x+x\cos x\). ✓</em></div>${gframe(["y = x*sin(x)", "y = sin(x) + x*cos(x)"], { title: "f(x)=x·sin x and its derivative sin x + x·cos x" })}</div>
  <div class="example-box" ${EX}><h3>Example 5: Power of sine</h3><p>Differentiate \(f(x)=\sin^2 x\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Write \((\sin x)^2\); chain rule: \(2\sin x\cdot\cos x\).</div><em>Conclusion: \(f'(x)=2\sin x\cos x=\sin 2x\). ✓</em></div>${gframe(["y = (sin(x))^2", "y = sin(2*x)"], { title: "f(x)=sin²x and its derivative sin 2x" })}</div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Differentiate \(f(x)=\cos(2x)\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(-2\sin(2x)\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Differentiate \(f(x)=\sin(5x)\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(5\cos(5x)\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Differentiate \(f(x)=x^2\cos x\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(2x\cos x-x^2\sin x\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Differentiate \(f(x)=\sin(x^2)\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(2x\cos(x^2)\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>Find the slope of \(y=\sin x\) at \(x=0\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\cos 0=1\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: What is \(\dfrac{d}{dx}\sin x\)?</h3><p><em>\(\cos x\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: What is \(\dfrac{d}{dx}\cos x\)?</h3><p><em>\(-\sin x\) (note the minus).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: How do you handle \(\sin(3x)\)?</h3><p><em>Chain rule: \(\cos(3x)\cdot3\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: Which unit must angles be in?</h3><p><em>Radians — these rules fail in degrees.</em></p></div>
</div>`),
]);

u3["3.2"] = L("3.2", "Derivatives of Exponential Functions", [
  html(String.raw`<div class="lecture-box">
  <h1>📈 Derivatives of Exponential Functions</h1>
  <p><strong>Overview.</strong> The exponential \(e^x\) is the one function that is <strong>its own derivative</strong>: \(\dfrac{d}{dx}e^x=e^x\). For other bases, \(\dfrac{d}{dx}b^x=b^x\ln b\). With the chain rule, \(\dfrac{d}{dx}e^{g(x)}=e^{g(x)}\,g'(x)\) — the exponential carries along, multiplied by the inner derivative.</p>
  <h2>📌 The rules</h2>
  <ul>
    <li>\(\dfrac{d}{dx}e^x=e^x\); \(\dfrac{d}{dx}b^x=b^x\ln b\).</li>
    <li><strong>Chain:</strong> \(\dfrac{d}{dx}e^{g(x)}=e^{g(x)}\,g'(x)\).</li>
  </ul>
  ${gframe(["y = exp(x)"], { title: "y = eˣ is its own derivative — the slope at every point equals the height" })}
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: The base \(e\)</h3><p>Differentiate \(f(x)=e^x\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> It is its own derivative.</div><em>Conclusion: \(f'(x)=e^x\). ✓</em></div>${gframe(["y = exp(x)"], { title: "y = eˣ is its own derivative — the slope equals the height at every point" })}</div>
  <div class="example-box" ${EX}><h3>Example 2: Chain rule</h3><p>Differentiate \(f(x)=e^{3x}\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(e^{3x}\cdot\dfrac{d}{dx}(3x)\).</div><em>Conclusion: \(f'(x)=3e^{3x}\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: Other base</h3><p>Differentiate \(f(x)=2^x\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(b^x\ln b\) with \(b=2\).</div><em>Conclusion: \(f'(x)=2^x\ln 2\). ✓</em></div>${gframe(["y = 2^x", "y = 2^x*ln(2)"], { title: "f(x)=2ˣ and its derivative 2ˣ ln 2 (just below f, since ln 2 ≈ 0.69)" })}</div>
  <div class="example-box" ${EX}><h3>Example 4: Product rule</h3><p>Differentiate \(f(x)=x\,e^x\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \((1)e^x+x\,e^x\).</div><em>Conclusion: \(f'(x)=e^x(1+x)\). ✓</em></div>${gframe(["y = x*exp(x)", "y = exp(x)*(1+x)"], { title: "f(x)=x·eˣ and its derivative eˣ(1+x): note the minimum of f where f'=0 (x=−1)" })}</div>
  <div class="example-box" ${EX}><h3>Example 5: Chain with a square</h3><p>Differentiate \(f(x)=e^{x^2}\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(e^{x^2}\cdot\dfrac{d}{dx}(x^2)\).</div><em>Conclusion: \(f'(x)=2x\,e^{x^2}\). ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Differentiate \(f(x)=e^{5x}\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(5e^{5x}\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Differentiate \(f(x)=3^x\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(3^x\ln 3\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Differentiate \(f(x)=x^2 e^x\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(2x e^x+x^2 e^x=e^x(x^2+2x)\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Differentiate \(f(x)=e^{-x}\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(-e^{-x}\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>Differentiate \(f(x)=e^{x^3+1}\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(3x^2 e^{x^3+1}\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: What is \(\dfrac{d}{dx}e^x\)?</h3><p><em>\(e^x\) — itself.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: What is \(\dfrac{d}{dx}b^x\)?</h3><p><em>\(b^x\ln b\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: What is \(\dfrac{d}{dx}e^{g(x)}\)?</h3><p><em>\(e^{g(x)}g'(x)\) — exponential times the inner derivative.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: Why is \(e\) special?</h3><p><em>Its growth rate always equals its current value.</em></p></div>
</div>`),
]);

u3["3.3"] = L("3.3", "Derivatives of Logarithmic Functions", [
  html(String.raw`<div class="lecture-box">
  <h1>🔍 Derivatives of Logarithmic Functions</h1>
  <p><strong>Overview.</strong> The natural log has the elegant derivative \(\dfrac{d}{dx}\ln x=\dfrac1x\). With the chain rule, \(\dfrac{d}{dx}\ln(g(x))=\dfrac{g'(x)}{g(x)}\). For other bases, \(\dfrac{d}{dx}\log_b x=\dfrac1{x\ln b}\). And a powerful trick — <strong>logarithmic differentiation</strong> — tames functions like \(x^x\) that no single rule reaches.</p>
  <h2>📌 The rules</h2>
  <ul>
    <li>\(\dfrac{d}{dx}\ln x=\dfrac1x\); \(\dfrac{d}{dx}\ln(g(x))=\dfrac{g'(x)}{g(x)}\); \(\dfrac{d}{dx}\log_b x=\dfrac1{x\ln b}\).</li>
    <li><strong>Logarithmic differentiation:</strong> take \(\ln\) of both sides, differentiate implicitly, then solve for \(y'\).</li>
  </ul>
  ${gframe(["y = ln(x)", "y = 1/x"], { title: "y = ln x and its derivative y = 1/x: the log's slope is large near 0 and shrinks toward 0 as x grows" })}
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Natural log</h3><p>Differentiate \(f(x)=\ln x\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Standard rule.</div><em>Conclusion: \(f'(x)=\dfrac1x\). ✓</em></div>${gframe(["y = ln(x)", "y = 1/x"], { title: "f(x)=ln x and its derivative 1/x (large slope near 0, shrinking as x grows)" })}</div>
  <div class="example-box" ${EX}><h3>Example 2: Chain rule</h3><p>Differentiate \(f(x)=\ln(x^2+1)\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\dfrac{g'}{g}=\dfrac{2x}{x^2+1}\).</div><em>Conclusion: \(f'(x)=\dfrac{2x}{x^2+1}\). ✓</em></div>${gframe(["y = ln(x^2+1)", "y = 2*x/(x^2+1)"], { title: "f(x)=ln(x²+1) and its derivative 2x/(x²+1)" })}</div>
  <div class="example-box" ${EX}><h3>Example 3: Product rule</h3><p>Differentiate \(f(x)=x\ln x\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \((1)\ln x+x\cdot\dfrac1x\).</div><em>Conclusion: \(f'(x)=\ln x+1\). ✓</em></div>${gframe(["y = x*ln(x)", "y = ln(x) + 1"], { title: "f(x)=x·ln x and its derivative ln x + 1 (zero at x=1/e, where f bottoms out)" })}</div>
  <div class="example-box" ${EX}><h3>Example 4: Other base</h3><p>Differentiate \(f(x)=\log_2 x\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\dfrac1{x\ln b}\) with \(b=2\).</div><em>Conclusion: \(f'(x)=\dfrac1{x\ln 2}\). ✓</em></div>${gframe(["y = ln(x)/ln(2)", "y = 1/(x*ln(2))"], { title: "f(x)=log₂x and its derivative 1/(x ln 2)" })}</div>
  <div class="example-box" ${EX}><h3>Example 5: Logarithmic differentiation</h3><p>Differentiate \(y=x^x\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\ln y=x\ln x\).</div><div class="step"><strong>Step 2:</strong> Differentiate: \(\dfrac{y'}{y}=\ln x+1\).</div><div class="step"><strong>Step 3:</strong> \(y'=y(\ln x+1)\).</div><em>Conclusion: \(y'=x^x(\ln x+1)\). ✓</em></div>${gframe(["y = exp(x*ln(x))"], { title: "y = xˣ (for x>0): it dips to a minimum near x=1/e then shoots up" })}</div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Differentiate \(f(x)=\ln(3x)\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\dfrac{3}{3x}=\dfrac1x\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Differentiate \(f(x)=\ln(x^3)\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\dfrac{3x^2}{x^3}=\dfrac3x\) (or use \(3\ln x\)).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Differentiate \(f(x)=x^2\ln x\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(2x\ln x+x\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Differentiate \(f(x)=\ln(\cos x)\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\dfrac{-\sin x}{\cos x}=-\tan x\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>Find the slope of \(y=\ln x\) at \(x=2\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\dfrac12\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: What is \(\dfrac{d}{dx}\ln x\)?</h3><p><em>\(\dfrac1x\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: What is \(\dfrac{d}{dx}\ln(g(x))\)?</h3><p><em>\(\dfrac{g'(x)}{g(x)}\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: What is \(\dfrac{d}{dx}\log_b x\)?</h3><p><em>\(\dfrac1{x\ln b}\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: When do you use logarithmic differentiation?</h3><p><em>For variable bases/exponents like \(x^x\) — take \(\ln\) first.</em></p></div>
</div>`),
]);
