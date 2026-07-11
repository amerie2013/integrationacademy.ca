// MHF4U Unit 6 — Trigonometric Identities & Equations. Deep single-card lessons.
import { html, gframe } from "./seed-mpm2d.mjs";
const L = (code, title, blocks) => ({ code, title, blocks });
const EX = `style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const PR = `style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const QA = `style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
export const u6 = {};

u6["6.1"] = L("6.1", "Compound Angle Formulas", [
  html(String.raw`<div class="lecture-box">
  <h1>➕ Compound Angle Formulas</h1>
  <p><strong>Overview.</strong> The <strong>compound angle formulas</strong> give the sine, cosine, and tangent of a <em>sum</em> or <em>difference</em> of angles. They let you find exact values for new angles like \(15^\circ\) and \(75^\circ\) by writing them as combinations of the special angles, and they are the foundation for the double-angle formulas and many identities.</p>
  <h2>📌 The formulas</h2>
  <ul>
    <li>\(\sin(A\pm B)=\sin A\cos B\pm\cos A\sin B\).</li>
    <li>\(\cos(A\pm B)=\cos A\cos B\mp\sin A\sin B\).</li>
    <li>\(\tan(A\pm B)=\dfrac{\tan A\pm\tan B}{1\mp\tan A\tan B}\).</li>
  </ul>
  ${gframe(["y = sin(x)", "y = cos(x)"], { title: "cos x is sin shifted by π/2 — a compound-angle identity in picture form" })}
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Sine of a sum</h3><p>Find \(\sin 75^\circ=\sin(45^\circ+30^\circ)\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\sin45\cos30+\cos45\sin30=\tfrac{\sqrt2}{2}\cdot\tfrac{\sqrt3}{2}+\tfrac{\sqrt2}{2}\cdot\tfrac12\).</div><em>Conclusion: \(\dfrac{\sqrt6+\sqrt2}{4}\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Cosine of a sum</h3><p>Find \(\cos 75^\circ\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\cos45\cos30-\sin45\sin30=\tfrac{\sqrt6}{4}-\tfrac{\sqrt2}{4}\).</div><em>Conclusion: \(\dfrac{\sqrt6-\sqrt2}{4}\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: Prove a co-function identity</h3><p>Use a compound angle formula to prove \(\sin\!\big(\tfrac{\pi}{2}-x\big)=\cos x\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\sin\!\big(\tfrac{\pi}{2}-x\big)=\sin\tfrac{\pi}{2}\cos x-\cos\tfrac{\pi}{2}\sin x\).</div><div class="step"><strong>Step 2:</strong> \(\sin\tfrac{\pi}{2}=1,\ \cos\tfrac{\pi}{2}=0\), so this is \(1\cdot\cos x-0\cdot\sin x\).</div><em>Conclusion: \(=\cos x\) — the formulas explain <em>why</em> sine and cosine are shifts of each other. ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: Recognize a formula</h3><p>Simplify \(\cos x\cos y+\sin x\sin y\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> This is the \(\cos(A-B)\) pattern.</div><em>Conclusion: \(\cos(x-y)\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: Use given values</h3><p>If \(\sin A=\tfrac35,\cos A=\tfrac45,\sin B=\tfrac5{13},\cos B=\tfrac{12}{13}\), find \(\sin(A+B)\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\tfrac35\cdot\tfrac{12}{13}+\tfrac45\cdot\tfrac5{13}=\tfrac{36+20}{65}\).</div><em>Conclusion: \(\dfrac{56}{65}\). ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Find \(\cos 15^\circ\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\dfrac{\sqrt6+\sqrt2}{4}\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Simplify \(\sin x\cos y+\cos x\sin y\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\sin(x+y)\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Simplify \(\cos x\cos y-\sin x\sin y\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\cos(x+y)\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Find \(\sin 105^\circ=\sin(60^\circ+45^\circ)\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\dfrac{\sqrt6+\sqrt2}{4}\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>With the values in Example 5, find \(\cos(A+B)\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\tfrac45\cdot\tfrac{12}{13}-\tfrac35\cdot\tfrac5{13}=\tfrac{33}{65}\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: What is \(\sin(A+B)\)?</h3><p><em>\(\sin A\cos B+\cos A\sin B\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: What is \(\cos(A-B)\)?</h3><p><em>\(\cos A\cos B+\sin A\sin B\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: How do you get exact values for \(15^\circ\) or \(75^\circ\)?</h3><p><em>Write them as sums/differences of special angles.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: Watch the signs?</h3><p><em>Yes — cosine flips the sign (\(\mp\)) compared to the angle's.</em></p></div>
</div>`),
]);

u6["6.2"] = L("6.2", "Double Angle Formulas", [
  html(String.raw`<div class="lecture-box">
  <h1>✖️ Double Angle Formulas</h1>
  <p><strong>Overview.</strong> Setting \(B=A\) in the compound angle formulas produces the <strong>double angle formulas</strong> for \(2\theta\). The cosine one has three equivalent forms — pick whichever fits the information you have.</p>
  <h2>📌 The formulas</h2>
  <ul>
    <li>\(\sin 2\theta=2\sin\theta\cos\theta\).</li>
    <li>\(\cos 2\theta=\cos^2\theta-\sin^2\theta=1-2\sin^2\theta=2\cos^2\theta-1\).</li>
    <li>\(\tan 2\theta=\dfrac{2\tan\theta}{1-\tan^2\theta}\).</li>
  </ul>
  ${gframe(["y = sin(2*x)"], { title: "y = sin 2x — equal to 2 sin x cos x at every point" })}
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Sine double angle</h3><p>If \(\sin\theta=\tfrac35,\cos\theta=\tfrac45\), find \(\sin 2\theta\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(2\sin\theta\cos\theta=2\cdot\tfrac35\cdot\tfrac45\).</div><em>Conclusion: \(\dfrac{24}{25}\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Cosine double angle</h3><p>With \(\sin\theta=\tfrac35\), find \(\cos 2\theta\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(1-2\sin^2\theta=1-2\cdot\tfrac9{25}=1-\tfrac{18}{25}\).</div><em>Conclusion: \(\dfrac7{25}\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: Recognize the form</h3><p>Simplify \(2\sin x\cos x\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> This is \(\sin 2x\).</div><em>Conclusion: \(\sin 2x\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: Cosine form</h3><p>Write \(\cos 2\theta\) using only \(\cos\theta\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Use \(2\cos^2\theta-1\).</div><em>Conclusion: \(2\cos^2\theta-1\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: Find the missing ratio first (quadrant matters)</h3><p>Given \(\sin\theta=\tfrac35\) with \(\theta\) in Quadrant II, find \(\sin 2\theta\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Need \(\cos\theta\): from \(\sin^2\theta+\cos^2\theta=1\), \(\cos\theta=\pm\tfrac45\); in QII cosine is negative, so \(\cos\theta=-\tfrac45\).</div><div class="step"><strong>Step 2:</strong> \(\sin 2\theta=2\sin\theta\cos\theta=2\cdot\tfrac35\cdot\big(-\tfrac45\big)\).</div><em>Conclusion: \(\sin 2\theta=-\tfrac{24}{25}\). ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>If \(\sin\theta=\tfrac5{13},\cos\theta=\tfrac{12}{13}\), find \(\sin 2\theta\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(2\cdot\tfrac5{13}\cdot\tfrac{12}{13}=\tfrac{120}{169}\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Simplify \(2\cos^2 x-1\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\cos 2x\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>With \(\cos\theta=\tfrac35\), find \(\cos 2\theta\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(2\cdot\tfrac9{25}-1=-\tfrac7{25}\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Simplify \(\dfrac{\sin 2x}{2\cos x}\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\dfrac{2\sin x\cos x}{2\cos x}=\sin x\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>Simplify \(\cos^2 x-\sin^2 x\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\cos 2x\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: What is \(\sin 2\theta\)?</h3><p><em>\(2\sin\theta\cos\theta\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: What are the three forms of \(\cos 2\theta\)?</h3><p><em>\(\cos^2\theta-\sin^2\theta=1-2\sin^2\theta=2\cos^2\theta-1\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: Where do these come from?</h3><p><em>The compound angle formulas with \(B=A\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: Which \(\cos 2\theta\) form should you use?</h3><p><em>The one matching what you're given (sine-only or cosine-only).</em></p></div>
</div>`),
]);

u6["6.3"] = L("6.3", "Proving Trigonometric Identities", [
  html(String.raw`<div class="lecture-box">
  <h1>✅ Proving Trigonometric Identities</h1>
  <p><strong>Overview.</strong> An identity is true for <em>all</em> valid angles. To prove one, you transform one side until it matches the other — never move terms across the \(=\). The toolkit is the <strong>Pythagorean</strong>, <strong>quotient</strong>, and <strong>reciprocal</strong> identities, plus the compound and double angle formulas.</p>
  <h2>📌 The core identities</h2>
  <ul>
    <li><strong>Pythagorean:</strong> \(\sin^2\theta+\cos^2\theta=1\); \(1+\tan^2\theta=\sec^2\theta\); \(1+\cot^2\theta=\csc^2\theta\).</li>
    <li><strong>Quotient:</strong> \(\tan\theta=\dfrac{\sin\theta}{\cos\theta}\), \(\cot\theta=\dfrac{\cos\theta}{\sin\theta}\).</li>
    <li><strong>Strategy:</strong> start with the more complicated side; rewrite in sines and cosines.</li>
  </ul>
  ${gframe(["y = (sin(x))^2 + (cos(x))^2"], { title: "y = sin²x + cos²x is the constant 1 — the Pythagorean identity" })}
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Pythagorean</h3><p>Show \(1-\cos^2 x=\sin^2 x\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> From \(\sin^2 x+\cos^2 x=1\), subtract \(\cos^2 x\).</div><em>Conclusion: \(1-\cos^2 x=\sin^2 x\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Quotient</h3><p>Prove \(\tan x\cos x=\sin x\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\dfrac{\sin x}{\cos x}\cdot\cos x=\sin x\).</div><em>Conclusion: identity holds. ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: Reciprocal ratios</h3><p>Prove \(\dfrac{\sec x}{\csc x}=\tan x\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\dfrac{1/\cos x}{1/\sin x}=\dfrac{\sin x}{\cos x}\).</div><em>Conclusion: \(=\tan x\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: Build to a known one</h3><p>Prove \(\csc x\tan x=\sec x\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\dfrac1{\sin x}\cdot\dfrac{\sin x}{\cos x}=\dfrac1{\cos x}\).</div><em>Conclusion: \(=\sec x\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: Pythagorean form</h3><p>Prove \(1+\tan^2 x=\sec^2 x\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Divide \(\sin^2 x+\cos^2 x=1\) by \(\cos^2 x\).</div><em>Conclusion: \(\tan^2 x+1=\sec^2 x\). ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Prove \(1-\sin^2 x=\cos^2 x\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>From \(\sin^2+\cos^2=1\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Prove \(\cot x\sin x=\cos x\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\dfrac{\cos x}{\sin x}\cdot\sin x=\cos x\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Prove \(\dfrac{\csc x}{\sec x}=\cot x\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\dfrac{1/\sin x}{1/\cos x}=\cot x\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Prove \(\sec x\cot x=\csc x\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\dfrac1{\cos x}\cdot\dfrac{\cos x}{\sin x}=\csc x\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>Prove \(1+\cot^2 x=\csc^2 x\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Divide \(\sin^2+\cos^2=1\) by \(\sin^2 x\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: What does proving an identity mean?</h3><p><em>Showing both sides are equal for all valid angles.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: Can you move terms across the equals sign?</h3><p><em>No — transform one side only.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: What's a reliable first move?</h3><p><em>Rewrite everything in sines and cosines.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: Which side do you start with?</h3><p><em>The more complicated one.</em></p></div>
</div>`),
]);

u6["6.4"] = L("6.4", "Solving Trigonometric Equations", [
  html(String.raw`<div class="lecture-box">
  <h1>🎯 Solving Trigonometric Equations</h1>
  <p><strong>Overview.</strong> Solving a trig equation means finding <em>all</em> angles in a given interval (usually \([0,2\pi)\)) that satisfy it. Find the <strong>related (reference) angle</strong>, then use the unit circle to place every solution in the correct quadrants. Quadratic-type equations factor first; mixed equations need an identity to reduce to one ratio.</p>
  <h2>📌 The method</h2>
  <ul>
    <li>Isolate the trig ratio; find the related angle from a special value.</li>
    <li>Use CAST to find every quadrant where the ratio has that sign.</li>
    <li><strong>Quadratic:</strong> factor (e.g. \(2\sin^2\theta-\sin\theta=0\)); <strong>mixed:</strong> apply an identity first.</li>
  </ul>
  ${gframe(["y = sin(x)"], { title: "Solving sin θ = ½ means finding where the wave reaches ½" })}
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Basic sine</h3><p>Solve \(\sin\theta=\tfrac12\) on \([0,2\pi)\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Related angle \(\tfrac{\pi}{6}\); sine positive in QI, QII.</div><em>Conclusion: \(\theta=\tfrac{\pi}{6},\tfrac{5\pi}{6}\). ✓</em></div>${gframe(["y = sin(x)", "y = 0.5"], { title: "sin θ=½ on [0,2π): the wave meets y=½ at θ=π/6 and 5π/6" })}</div>
  <div class="example-box" ${EX}><h3>Example 2: Cosine zero</h3><p>Solve \(\cos\theta=0\) on \([0,2\pi)\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Cosine is 0 at the top and bottom of the circle.</div><em>Conclusion: \(\theta=\tfrac{\pi}{2},\tfrac{3\pi}{2}\). ✓</em></div>${gframe(["y = cos(x)"], { title: "cos θ=0 where the cosine wave crosses the axis: θ=π/2 and 3π/2" })}</div>
  <div class="example-box" ${EX}><h3>Example 3: Isolate first</h3><p>Solve \(2\cos\theta-1=0\) on \([0,2\pi)\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\cos\theta=\tfrac12\); related angle \(\tfrac{\pi}{3}\), cosine positive in QI, QIV.</div><em>Conclusion: \(\theta=\tfrac{\pi}{3},\tfrac{5\pi}{3}\). ✓</em></div>${gframe(["y = cos(x)", "y = 0.5"], { title: "cos θ=½ on [0,2π): the wave meets y=½ at θ=π/3 and 5π/3" })}</div>
  <div class="example-box" ${EX}><h3>Example 4: Tangent</h3><p>Solve \(\tan\theta=1\) on \([0,2\pi)\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Related angle \(\tfrac{\pi}{4}\); tangent positive in QI, QIII.</div><em>Conclusion: \(\theta=\tfrac{\pi}{4},\tfrac{5\pi}{4}\). ✓</em></div>${gframe(["y = tan(x)", "y = 1"], { title: "tan θ=1 on [0,2π): the tangent curve meets y=1 at θ=π/4 and 5π/4" })}</div>
  <div class="example-box" ${EX}><h3>Example 5: Quadratic type</h3><p>Solve \(2\sin^2\theta-1=0\) on \([0,2\pi)\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\sin\theta=\pm\tfrac{\sqrt2}{2}\); related angle \(\tfrac{\pi}{4}\), all four quadrants.</div><em>Conclusion: \(\theta=\tfrac{\pi}{4},\tfrac{3\pi}{4},\tfrac{5\pi}{4},\tfrac{7\pi}{4}\). ✓</em></div>${gframe(["y = (sin(x))^2", "y = 0.5"], { title: "2sin²θ=1 ⇒ sin²θ=½: sin²θ meets y=½ at four points in [0,2π)" })}</div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Solve \(\cos\theta=\tfrac12\) on \([0,2\pi)\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\theta=\tfrac{\pi}{3},\tfrac{5\pi}{3}\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Solve \(\sin\theta=0\) on \([0,2\pi)\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\theta=0,\pi\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Solve \(2\sin\theta+1=0\) on \([0,2\pi)\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\sin\theta=-\tfrac12\Rightarrow\theta=\tfrac{7\pi}{6},\tfrac{11\pi}{6}\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Solve \(\tan\theta=-1\) on \([0,2\pi)\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\theta=\tfrac{3\pi}{4},\tfrac{7\pi}{4}\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>Solve \(\sin\theta(\sin\theta-1)=0\) on \([0,2\pi)\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\theta=0,\pi,\tfrac{\pi}{2}\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: What's the first step?</h3><p><em>Isolate the trig ratio.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: How do you find all solutions?</h3><p><em>Use the related angle and CAST for each quadrant.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: How do you handle a quadratic in \(\sin\theta\)?</h3><p><em>Factor, then solve each factor.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: What if sine and cosine both appear?</h3><p><em>Use an identity to reduce to a single ratio.</em></p></div>
</div>`),
]);
