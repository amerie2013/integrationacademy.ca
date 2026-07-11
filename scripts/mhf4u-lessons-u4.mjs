// MHF4U Unit 4 — Exponential & Logarithmic Functions. Deep single-card lessons.
import { html, gframe, graph } from "./seed-mpm2d.mjs";
const L = (code, title, blocks) => ({ code, title, blocks });
const EX = `style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const PR = `style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const QA = `style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
export const u4 = {};

u4["4.1"] = L("4.1", "Logarithms & the Laws of Logarithms", [
  html(String.raw`<div class="lecture-box">
  <h1>🔢 Logarithms &amp; the Laws of Logarithms</h1>
  <p><strong>Overview.</strong> A <strong>logarithm answers the question "what exponent?"</strong> By definition \(\log_b x=y\iff b^y=x\) — the logarithm is the <em>inverse</em> of the exponential. Once you can switch between exponential and logarithmic form, three <strong>laws</strong> turn products, quotients, and powers into sums, differences, and multiples.</p>
  <h2>📌 Definition and laws</h2>
  <ul>
    <li><strong>Definition:</strong> \(\log_b x=y\iff b^y=x\) (with \(b>0,\ b\ne1,\ x>0\)).</li>
    <li><strong>Product:</strong> \(\log_b(xy)=\log_b x+\log_b y\). <strong>Quotient:</strong> \(\log_b\!\frac{x}{y}=\log_b x-\log_b y\).</li>
    <li><strong>Power:</strong> \(\log_b(x^n)=n\log_b x\). <strong>Change of base:</strong> \(\log_b x=\dfrac{\log x}{\log b}\).</li>
  </ul>
  ${gframe(["y = 2^x"], { title: "y = 2ˣ — the exponential whose inverse is log₂x" })}
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Evaluate</h3><p>Find \(\log_2 8\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(2^?=8\Rightarrow 2^3=8\).</div><em>Conclusion: \(\log_2 8=3\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Convert to log form</h3><p>Write \(10^3=1000\) in logarithmic form.</p><div class="solution"><div class="step"><strong>Step 1:</strong> Base 10, exponent 3.</div><em>Conclusion: \(\log 1000=3\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: Quotient law</h3><p>Simplify \(\log_3 54-\log_3 2\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Quotient law: \(\log_3\dfrac{54}{2}=\log_3 27\).</div><div class="step"><strong>Step 2:</strong> \(3^3=27\).</div><em>Conclusion: \(3\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: Product law</h3><p>Simplify \(\log_2(4\cdot 8)\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\log_2 4+\log_2 8=2+3\).</div><em>Conclusion: \(5\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: Power law</h3><p>Simplify \(\log_2(8^2)\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(2\log_2 8=2\cdot3\).</div><em>Conclusion: \(6\). ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Find \(\log_3 27\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(3\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Write \(2^5=32\) in log form.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\log_2 32=5\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Find \(\log 100\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(2\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Simplify \(\log_3(9\cdot 27)\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(2+3=5\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>Simplify \(\log_5(25^3)\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(3\cdot2=6\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: What does a logarithm represent?</h3><p><em>The exponent you raise the base to.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: How do exponential and log form relate?</h3><p><em>\(\log_b x=y\iff b^y=x\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: What do the laws do?</h3><p><em>Turn products/quotients/powers into sums/differences/multiples.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: What is change of base for?</h3><p><em>Evaluating any base with a calculator's \(\log\) or \(\ln\).</em></p></div>
</div>`),
]);

u4["4.2"] = L("4.2", "Graphs of Logarithmic Functions", [
  html(String.raw`<div class="lecture-box">
  <h1>📈 Graphs of Logarithmic Functions</h1>
  <p><strong>Overview.</strong> The graph of \(y=\log_b x\) is the <strong>reflection of \(y=b^x\) in the line \(y=x\)</strong> — they are inverses. So the exponential's horizontal asymptote becomes the logarithm's <strong>vertical asymptote</strong> at \(x=0\). The log graph has domain \(x>0\), range all reals, and always passes through \((1,0)\).</p>
  <h2>📌 Key features of \(y=\log_b x\)</h2>
  <ul>
    <li><strong>Vertical asymptote:</strong> \(x=0\) (the y-axis). <strong>Domain:</strong> \(x>0\); <strong>range:</strong> all reals.</li>
    <li>Passes through \((1,0)\); increasing for \(b>1\).</li>
    <li><strong>Transformations:</strong> \(y=\log_b(x-d)\) shifts the VA to \(x=d\); \(+c\) shifts up.</li>
  </ul>
  ${gframe(["y = 2^x", "y = ln(x)/ln(2)"], { title: "y = 2ˣ and its inverse y = log₂x — mirror images across y = x" })}
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Read every feature at once</h3><p>For \(y=\log x\), state the domain, range, vertical asymptote, a key point, and whether it increases.</p><div class="solution"><div class="step"><strong>Step 1:</strong> Argument \(>0\) ⇒ domain \(x>0\); as \(x\to0^+,\ y\to-\infty\) ⇒ VA \(x=0\).</div><div class="step"><strong>Step 2:</strong> Output is unbounded both ways ⇒ range all reals; \(\log 1=0\) ⇒ passes \((1,0)\); base \(10>1\) ⇒ increasing.</div><em>Conclusion: domain \(x>0\), range \(\mathbb{R}\), VA \(x=0\), through \((1,0)\), increasing. ✓</em></div>${gframe(["y = log(x)"], { title: "y=log x: domain x>0, vertical asymptote x=0, passes (1,0), increasing" })}</div>
  <div class="example-box" ${EX}><h3>Example 2: Transform — track all features</h3><p>Describe \(y=\log(x-2)+1\): give its vertical asymptote and the image of the point \((1,0)\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(x-2>0\Rightarrow x>2\), so the VA shifts to \(x=2\).</div><div class="step"><strong>Step 2:</strong> Right 2, up 1 sends \((1,0)\to(3,1)\).</div><em>Conclusion: VA \(x=2\), domain \(x>2\), passes through \((3,1)\). ✓</em></div>${gframe(["y = log(x-2) + 1"], { title: "log(x−2)+1: the base log shifted right 2 and up 1 — VA at x=2, through (3,1)" })}</div>
  <div class="example-box" ${EX}><h3>Example 3: Inverse of an exponential</h3><p>Find the inverse of \(y=2^x\) and state how the graphs are related.</p><div class="solution"><div class="step"><strong>Step 1:</strong> Swap \(x\) and \(y\): \(x=2^y\Rightarrow y=\log_2 x\).</div><em>Conclusion: \(y=\log_2 x\) — the reflection of \(y=2^x\) in the line \(y=x\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: Reflection flips the domain</h3><p>State the domain and vertical asymptote of \(y=\log(-x)\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Need the argument \(-x>0\Rightarrow x<0\).</div><em>Conclusion: domain \(x<0\), VA still \(x=0\) — the graph is the usual log reflected into the left side. ✓</em></div>${gframe(["y = log(-x)"], { title: "log(−x): the usual log curve reflected into x<0 (domain x<0, VA still x=0)" })}</div>
  <div class="example-box" ${EX}><h3>Example 5: Find the domain of a transformed log</h3><p>For what \(x\) is \(y=\log(2x-6)\) defined?</p><div class="solution"><div class="step"><strong>Step 1:</strong> Require \(2x-6>0\).</div><div class="step"><strong>Step 2:</strong> \(2x>6\Rightarrow x>3\).</div><em>Conclusion: domain \(x>3\) (VA at \(x=3\)). ✓</em></div>${gframe(["y = log(2*x-6)"], { title: "log(2x−6): defined only for x>3, with a vertical asymptote at x=3" })}</div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Domain of \(y=\log_2 x\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(x>0\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>VA of \(y=\log(x+3)\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(x=-3\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>What is \(\log_b 1\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(0\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Is \(y=\log_2 x\) increasing or decreasing?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Increasing (\(b>1\)).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>What is the inverse of \(y=3^x\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(y=\log_3 x\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: How is the log graph related to the exponential?</h3><p><em>It's the reflection in \(y=x\) — they're inverses.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: Where is the vertical asymptote?</h3><p><em>At \(x=0\) (shifted by any horizontal translation).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: What is the domain?</h3><p><em>\(x>0\) (the argument must be positive).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: What point is always on the graph?</h3><p><em>\((1,0)\).</em></p></div>
</div>`),
  graph("ln(x)/ln(b)", "b", { xMin: 0, xMax: 8, yMin: -4, yMax: 4, paramMin: 2, paramMax: 10, paramInit: 2, caption: "Animation: y = log_b(x). Slide the base b — a larger base makes the curve rise more slowly." }),
]);

u4["4.3"] = L("4.3", "Solving Exponential & Logarithmic Equations", [
  html(String.raw`<div class="lecture-box">
  <h1>🧩 Solving Exponential &amp; Logarithmic Equations</h1>
  <p><strong>Overview.</strong> Two main moves. If both sides can be written with the <strong>same base</strong>, set the exponents equal. Otherwise, <strong>take the logarithm of both sides</strong> and use the power law to bring the exponent down. For <strong>logarithmic</strong> equations, rewrite in exponential form (or combine logs first), then always <strong>check</strong> that each argument stays positive.</p>
  <h2>📌 The strategies</h2>
  <ul>
    <li><strong>Same base:</strong> \(b^{f(x)}=b^{g(x)}\Rightarrow f(x)=g(x)\).</li>
    <li><strong>Take logs:</strong> \(b^x=c\Rightarrow x=\dfrac{\log c}{\log b}\).</li>
    <li><strong>Log equation:</strong> \(\log_b x=k\Rightarrow x=b^k\); reject any non-positive argument.</li>
  </ul>
  ${gframe(["y = 2^x"], { title: "Solving 2ˣ = c means reading across at height c" })}
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Same base</h3><p>Solve \(2^x=8\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(2^x=2^3\).</div><em>Conclusion: \(x=3\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Rewrite both sides to a common base</h3><p>Solve \(4^x=8\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Write each side as a power of 2: \((2^2)^x=2^3\Rightarrow 2^{2x}=2^3\).</div><div class="step"><strong>Step 2:</strong> Equate exponents: \(2x=3\).</div><em>Conclusion: \(x=\tfrac32\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: Take logs</h3><p>Solve \(2^x=10\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(x=\dfrac{\log 10}{\log 2}\approx3.32\).</div><em>Conclusion: \(x\approx3.32\). ✓</em></div>${gframe(["y = 2^x", "y = 10"], { title: "2ˣ=10 where the curve crosses the line y=10 — at x≈3.32" })}</div>
  <div class="example-box" ${EX}><h3>Example 4: Log equation</h3><p>Solve \(\log_2 x=5\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(x=2^5\).</div><em>Conclusion: \(x=32\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: Combine logs, then check</h3><p>Solve \(\log x+\log(x-3)=1\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Product law: \(\log\big(x(x-3)\big)=1\Rightarrow x(x-3)=10^1\).</div><div class="step"><strong>Step 2:</strong> \(x^2-3x-10=0\Rightarrow(x-5)(x+2)=0\Rightarrow x=5\) or \(x=-2\).</div><div class="step"><strong>Step 3:</strong> \(x=-2\) makes \(\log x\) undefined — reject it.</div><em>Conclusion: \(x=5\) only. ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Solve \(2^x=16\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(x=4\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Solve \(5^x=125\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(x=3\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Solve \(3^x=20\) (to 2 d.p.).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(x=\tfrac{\log20}{\log3}\approx2.73\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Solve \(\log_3 x=4\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(x=81\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>Solve \(\log(x+2)=1\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(x+2=10\Rightarrow x=8\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: When can you set exponents equal?</h3><p><em>When both sides share the same base.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: What if the bases differ?</h3><p><em>Take logs and use the power law.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: How do you undo a logarithm?</h3><p><em>Rewrite in exponential form: \(\log_b x=k\Rightarrow x=b^k\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: Why check solutions?</h3><p><em>Logarithm arguments must be positive — reject the rest.</em></p></div>
</div>`),
  graph("a^x", "a", { xMin: -3, xMax: 3, yMin: -1, yMax: 9, paramMin: 1.2, paramMax: 4, paramInit: 2, caption: "Animation: y = aˣ. A larger base grows faster — the curve you read across to solve aˣ = c." }),
]);

u4["4.4"] = L("4.4", "Applications of Exponential & Log Models", [
  html(String.raw`<div class="lecture-box">
  <h1>🌍 Applications of Exponential &amp; Log Models</h1>
  <p><strong>Overview.</strong> Exponential models \(A=A_0\,b^{\,t/p}\) describe growth (\(b>1\)) and decay (\(0<b<1\)); logarithms solve for the <em>time</em> (doubling time, half-life) and underlie compressed <strong>log scales</strong> like pH, decibels, and the Richter scale, where each unit means a factor of ten.</p>
  <h2>📌 The models</h2>
  <ul>
    <li><strong>Growth/decay:</strong> \(A=A_0\,b^{\,t/p}\) — \(p\) is the doubling time or half-life.</li>
    <li><strong>Solving for time:</strong> use logs, e.g. doubling time \(=\dfrac{\log 2}{\log(1+r)}\).</li>
    <li><strong>Log scales:</strong> \(\text{pH}=-\log[\text{H}^+]\); each Richter/decibel step is \(\times10\).</li>
  </ul>
  ${gframe(["y = 2^x", "y = 0.5^x"], { title: "Growth (2ˣ) vs decay (0.5ˣ)" })}
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Growth</h3><p>A colony of 100 doubles every 5 h: \(P=100\cdot2^{\,t/5}\). Find \(P\) at \(t=10\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(P=100\cdot2^{2}=100\cdot4\).</div><em>Conclusion: \(400\). ✓</em></div>${gframe(["y = 100*2^(x/5)"], { title: "P=100·2^(t/5): the colony doubles every 5 h, reaching 400 at t=10" })}</div>
  <div class="example-box" ${EX}><h3>Example 2: Half-life</h3><p>80 mg decays with half-life 3 h: \(A=80\left(\tfrac12\right)^{t/3}\). Find \(A\) at \(t=6\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(A=80\left(\tfrac12\right)^{2}=80\cdot\tfrac14\).</div><em>Conclusion: \(20\) mg. ✓</em></div>${gframe(["y = 80*0.5^(x/3)"], { title: "A=80·(½)^(t/3): halves every 3 h, down to 20 mg at t=6" })}</div>
  <div class="example-box" ${EX}><h3>Example 3: Solve for time</h3><p>An investment grows at 5%/yr. How long to double?</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(2=1.05^{\,t}\Rightarrow t=\dfrac{\log 2}{\log 1.05}\).</div><em>Conclusion: \(t\approx14.2\) years. ✓</em></div>${gframe(["y = 1.05^x", "y = 2"], { title: "1.05ᵗ=2 where the growth curve reaches the line y=2 — at t≈14.2 years" })}</div>
  <div class="example-box" ${EX}><h3>Example 4: pH scale</h3><p>Find the pH if \([\text{H}^+]=10^{-4}\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\text{pH}=-\log(10^{-4})\).</div><em>Conclusion: pH \(=4\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: Richter scale</h3><p>How much stronger is a magnitude-7 quake than a magnitude-5 one?</p><div class="solution"><div class="step"><strong>Step 1:</strong> Difference \(2\Rightarrow10^{2}\).</div><em>Conclusion: \(100\times\) the amplitude. ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>\(P=200\cdot2^{\,t/4}\). Find \(P\) at \(t=8\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(200\cdot4=800\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>\(A=160\left(\tfrac12\right)^{t/5}\). Find \(A\) at \(t=10\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(160\cdot\tfrac14=40\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>How long to double at 10%/yr?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\tfrac{\log2}{\log1.1}\approx7.3\) yr.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>pH if \([\text{H}^+]=10^{-7}\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>pH \(=7\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>How much stronger is a magnitude-6 quake than a magnitude-3 one?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(10^3=1000\times\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: What is the general model?</h3><p><em>\(A=A_0\,b^{\,t/p}\) (growth if \(b>1\), decay if \(0<b<1\)).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: How do you find a doubling time?</h3><p><em>Solve with logs: \(t=\dfrac{\log2}{\log(\text{growth factor})}\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: What is a log scale?</h3><p><em>One where each unit means a factor of ten (pH, dB, Richter).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: What is pH?</h3><p><em>\(-\log[\text{H}^+]\).</em></p></div>
</div>`),
  graph("100*1.05^x", "x", { xMin: 0, xMax: 30, yMin: 0, yMax: 450, paramMin: 0, paramMax: 30, paramInit: 14, caption: "Animation: A = 100·1.05ˣ. Slide t to watch a 5%/yr investment double around t ≈ 14.2 years." }),
]);
