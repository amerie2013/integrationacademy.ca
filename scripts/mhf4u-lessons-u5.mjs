// MHF4U Unit 5 — Trigonometric Functions (radians). Deep single-card lessons.
import { html, gframe, graph } from "./seed-mpm2d.mjs";
const L = (code, title, blocks) => ({ code, title, blocks });
const EX = `style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const PR = `style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const QA = `style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
export const u5 = {};

u5["5.1"] = L("5.1", "Radian Measure", [
  html(String.raw`<div class="lecture-box">
  <h1>📐 Radian Measure</h1>
  <p><strong>Overview.</strong> A <strong>radian</strong> measures an angle by arc length: one radian is the angle that cuts off an arc equal to the radius. Since the full circumference is \(2\pi r\), a full turn is \(2\pi\) radians \(=360^\circ\). Radians are the natural unit for advanced functions — the sine and cosine graphs and all of calculus use them.</p>
  <h2>📌 Converting and arc length</h2>
  <ul>
    <li><strong>Degrees → radians:</strong> multiply by \(\dfrac{\pi}{180}\). <strong>Radians → degrees:</strong> multiply by \(\dfrac{180}{\pi}\).</li>
    <li><strong>Special angles:</strong> \(30^\circ=\tfrac{\pi}{6},\ 45^\circ=\tfrac{\pi}{4},\ 60^\circ=\tfrac{\pi}{3},\ 90^\circ=\tfrac{\pi}{2},\ 180^\circ=\pi\).</li>
    <li><strong>Arc length:</strong> \(s=r\theta\) with \(\theta\) in radians.</li>
  </ul>
  ${gframe(["y = sin(x)"], { title: "y = sin x on a radian axis — one full wave spans 2π" })}
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Degrees → radians</h3><p>Convert \(135^\circ\) to radians.</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(135\cdot\tfrac{\pi}{180}=\tfrac{135\pi}{180}\).</div><div class="step"><strong>Step 2:</strong> Reduce \(\tfrac{135}{180}=\tfrac34\).</div><em>Conclusion: \(\tfrac{3\pi}{4}\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Radians → degrees</h3><p>Convert \(\tfrac{5\pi}{6}\) to degrees.</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\tfrac{5\pi}{6}\cdot\tfrac{180}{\pi}=5\cdot30\).</div><em>Conclusion: \(150^\circ\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: Arc length</h3><p>Find the arc length for \(r=6\), \(\theta=\tfrac{\pi}{2}\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(s=r\theta=6\cdot\tfrac{\pi}{2}\).</div><em>Conclusion: \(3\pi\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: Work backwards for the angle</h3><p>An arc of length 10 lies on a circle of radius 4. Find the central angle in radians.</p><div class="solution"><div class="step"><strong>Step 1:</strong> Rearrange \(s=r\theta\): \(\theta=\dfrac{s}{r}=\dfrac{10}{4}\).</div><em>Conclusion: \(\theta=2.5\) rad. ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: Work backwards for the radius</h3><p>An arc of length 8 subtends an angle of 2 rad. Find the radius.</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(r=\dfrac{s}{\theta}=\dfrac{8}{2}\).</div><em>Conclusion: \(r=4\). ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Convert \(60^\circ\) to radians.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\tfrac{\pi}{3}\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Convert \(\tfrac{\pi}{6}\) to degrees.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(30^\circ\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Convert \(270^\circ\) to radians.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\tfrac{3\pi}{2}\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Convert \(2\pi\) to degrees.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(360^\circ\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>Arc length for \(r=4\), \(\theta=\tfrac{\pi}{3}\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\tfrac{4\pi}{3}\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: What is a radian?</h3><p><em>The angle whose arc equals the radius.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: How many radians in a full circle?</h3><p><em>\(2\pi\) (\(=360^\circ\)).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: How do you convert degrees to radians?</h3><p><em>Multiply by \(\tfrac{\pi}{180}\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: What is the arc-length formula?</h3><p><em>\(s=r\theta\), with \(\theta\) in radians.</em></p></div>
</div>`),
]);

u5["5.2"] = L("5.2", "Trigonometric Ratios & the Unit Circle", [
  html(String.raw`<div class="lecture-box">
  <h1>⭕ Trigonometric Ratios &amp; the Unit Circle</h1>
  <p><strong>Overview.</strong> On the <strong>unit circle</strong> (radius 1), the point at angle \(\theta\) has coordinates \((\cos\theta,\sin\theta)\). This single idea gives the exact values of the special angles and the sign of each ratio in every quadrant (the <strong>CAST</strong> rule), and lets you solve trig equations over \([0,2\pi)\).</p>
  <h2>📌 The essentials</h2>
  <ul>
    <li><strong>Coordinates:</strong> \((\cos\theta,\sin\theta)\); \(\tan\theta=\dfrac{\sin\theta}{\cos\theta}\).</li>
    <li><strong>Special values:</strong> \(\sin\tfrac{\pi}{6}=\tfrac12,\ \cos\tfrac{\pi}{6}=\tfrac{\sqrt3}{2},\ \sin\tfrac{\pi}{4}=\cos\tfrac{\pi}{4}=\tfrac{\sqrt2}{2},\ \tan\tfrac{\pi}{4}=1\).</li>
    <li><strong>CAST:</strong> which ratios are positive in each quadrant (All, Sine, Tangent, Cosine).</li>
  </ul>
  ${gframe(["y = sin(x)", "y = cos(x)"], { title: "sine and cosine together — same shape, shifted by π/2" })}
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: A special-angle value</h3><p>Find \(\sin\tfrac{\pi}{6}\) from the unit circle.</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\tfrac{\pi}{6}=30^\circ\); the point is \(\big(\tfrac{\sqrt3}{2},\tfrac12\big)\), and \(\sin\) is the y-coordinate.</div><em>Conclusion: \(\tfrac12\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Use a reference angle (Quadrant II)</h3><p>Find \(\cos\tfrac{2\pi}{3}\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\tfrac{2\pi}{3}\) is in QII; its reference angle is \(\pi-\tfrac{2\pi}{3}=\tfrac{\pi}{3}\), so the size is \(\cos\tfrac{\pi}{3}=\tfrac12\).</div><div class="step"><strong>Step 2:</strong> In QII cosine is negative (CAST).</div><em>Conclusion: \(-\tfrac12\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: Tangent from sine and cosine</h3><p>Find \(\tan\tfrac{\pi}{4}\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\tan=\dfrac{\sin}{\cos}=\dfrac{\sqrt2/2}{\sqrt2/2}\).</div><em>Conclusion: \(1\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: A quadrantal angle</h3><p>Find \(\cos\pi\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> At \(\theta=\pi\) the point is \((-1,0)\); \(\cos\) is the x-coordinate.</div><em>Conclusion: \(-1\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: Solve over \([0,2\pi)\)</h3><p>Find all \(\theta\) in \([0,2\pi)\) with \(\sin\theta=\tfrac12\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Base angle \(\tfrac{\pi}{6}\); sine is positive in QI and QII.</div><div class="step"><strong>Step 2:</strong> QI: \(\tfrac{\pi}{6}\); QII: \(\pi-\tfrac{\pi}{6}=\tfrac{5\pi}{6}\).</div><em>Conclusion: \(\theta=\tfrac{\pi}{6},\tfrac{5\pi}{6}\). ✓</em></div>${gframe(["y = sin(x)", "y = 0.5"], { title: "sin θ=½ over [0,2π): the wave meets y=½ at θ=π/6 and θ=5π/6" })}</div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Find \(\cos\tfrac{\pi}{6}\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\tfrac{\sqrt3}{2}\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Find \(\sin\tfrac{\pi}{3}\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\tfrac{\sqrt3}{2}\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Find \(\cos\tfrac{\pi}{2}\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(0\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Find \(\sin\pi\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(0\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>In which quadrant is \(\sin\theta>0\) but \(\cos\theta<0\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Quadrant II.</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: What are the unit-circle coordinates?</h3><p><em>\((\cos\theta,\sin\theta)\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: What is \(\sin\tfrac{\pi}{6}\)?</h3><p><em>\(\tfrac12\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: How do you get \(\tan\theta\)?</h3><p><em>\(\dfrac{\sin\theta}{\cos\theta}\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: What does CAST tell you?</h3><p><em>Which ratios are positive in each quadrant.</em></p></div>
</div>`),
]);

u5["5.3"] = L("5.3", "Graphs of Sinusoidal Functions", [
  html(String.raw`<div class="lecture-box">
  <h1>🌊 Graphs of Sinusoidal Functions</h1>
  <p><strong>Overview.</strong> Every sine or cosine graph is described by \(y=a\sin\!\big(k(x-d)\big)+c\): the <strong>amplitude</strong> \(|a|\), the <strong>period</strong> \(\tfrac{2\pi}{k}\), the <strong>phase shift</strong> \(d\), and the <strong>midline</strong> \(y=c\). Read these four off the equation and you can sketch — or read off the graph and write the equation.</p>
  <h2>📌 The four parameters</h2>
  <ul>
    <li><strong>Amplitude</strong> \(=|a|\) (height above the midline). <strong>Midline</strong> \(y=c\).</li>
    <li><strong>Period</strong> \(=\dfrac{2\pi}{k}\) (one full cycle). <strong>Phase shift</strong> \(=d\).</li>
  </ul>
  ${gframe(["y = sin(x)"], { title: "y = sin x — amplitude 1, period 2π, midline y = 0" })}
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Amplitude</h3><p>State the amplitude of \(y=3\sin x\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(|a|=3\).</div><em>Conclusion: \(3\). ✓</em></div>${gframe(["y = 3*sin(x)"], { title: "y=3sin x: amplitude 3 — the wave peaks at +3 and bottoms at −3" })}</div>
  <div class="example-box" ${EX}><h3>Example 2: Period</h3><p>Find the period of \(y=\sin(2x)\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\tfrac{2\pi}{k}=\tfrac{2\pi}{2}\).</div><em>Conclusion: \(\pi\). ✓</em></div>${gframe(["y = sin(2*x)"], { title: "y=sin(2x): period π — two full waves fit where sin x had one" })}</div>
  <div class="example-box" ${EX}><h3>Example 3: Midline and range together</h3><p>State the midline and range of \(y=\sin x+2\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(c=2\) ⇒ midline \(y=2\); amplitude \(1\).</div><div class="step"><strong>Step 2:</strong> Range \(=[\,c-|a|,\ c+|a|\,]=[1,3]\).</div><em>Conclusion: midline \(y=2\), range \([1,3]\). ✓</em></div>${gframe(["y = sin(x) + 2"], { title: "y=sin x+2: the whole wave lifted to midline y=2, range [1,3]" })}</div>
  <div class="example-box" ${EX}><h3>Example 4: Build the equation from a description</h3><p>Write a sine function with amplitude 3, period \(\pi\), and midline \(y=1\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(a=3\); period \(\pi=\tfrac{2\pi}{k}\Rightarrow k=2\); \(c=1\).</div><em>Conclusion: \(y=3\sin(2x)+1\). ✓</em></div>${gframe(["y = 3*sin(2*x) + 1"], { title: "y=3sin(2x)+1: amplitude 3, period π, midline y=1 — exactly the description" })}</div>
  <div class="example-box" ${EX}><h3>Example 5: Full read — amplitude, period, midline, max/min</h3><p>For \(y=2\sin(3x)-1\), state all four features and the maximum and minimum.</p><div class="solution"><div class="step"><strong>Step 1:</strong> Amplitude \(2\); period \(\tfrac{2\pi}{3}\); midline \(y=-1\).</div><div class="step"><strong>Step 2:</strong> Max \(=-1+2=1\); min \(=-1-2=-3\).</div><em>Conclusion: amp 2, period \(\tfrac{2\pi}{3}\), midline \(-1\), range \([-3,1]\). ✓</em></div>${gframe(["y = 2*sin(3*x) - 1"], { title: "y=2sin(3x)−1: amplitude 2, period 2π/3, midline −1, range [−3,1]" })}</div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Amplitude of \(y=5\sin x\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(5\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Period of \(y=\sin(4x)\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\tfrac{\pi}{2}\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Midline of \(y=\cos x-3\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(y=-3\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Period of \(y=\sin\!\big(\tfrac{x}{3}\big)\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(6\pi\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>Amplitude and period of \(y=4\cos(2x)\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Amplitude \(4\), period \(\pi\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: What is the amplitude?</h3><p><em>\(|a|\) — the height above the midline.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: How do you find the period?</h3><p><em>\(\tfrac{2\pi}{k}\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: What is the midline?</h3><p><em>\(y=c\), the vertical centre of the wave.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: What does \(d\) do?</h3><p><em>Shifts the wave horizontally (phase shift).</em></p></div>
</div>`),
  graph("a*sin(x)", "a", { xMin: -6.5, xMax: 6.5, yMin: -3.5, yMax: 3.5, paramMin: 0.5, paramMax: 3, paramInit: 1, caption: "Animation: y = a·sin x. Slide a to change the amplitude (height) of the wave." }),
  graph("sin(b*x)", "b", { xMin: -6.5, xMax: 6.5, yMin: -2, yMax: 2, paramMin: 1, paramMax: 4, paramInit: 1, caption: "Animation: y = sin(bx). A larger b squeezes the wave — period = 2π/b." }),
  graph("sin(x)+c", "c", { xMin: -6.5, xMax: 6.5, yMin: -3.5, yMax: 3.5, paramMin: -2, paramMax: 2, paramInit: 0, caption: "Animation: y = sin x + c. Slide c to move the midline up or down." }),
]);

u5["5.4"] = L("5.4", "Reciprocal Trigonometric Functions", [
  html(String.raw`<div class="lecture-box">
  <h1>🔁 Reciprocal Trigonometric Functions</h1>
  <p><strong>Overview.</strong> The three reciprocal ratios are <strong>cosecant</strong> \(\csc\theta=\dfrac1{\sin\theta}\), <strong>secant</strong> \(\sec\theta=\dfrac1{\cos\theta}\), and <strong>cotangent</strong> \(\cot\theta=\dfrac{\cos\theta}{\sin\theta}\). Each has a <strong>vertical asymptote</strong> wherever its base function is zero, so their graphs are made of separated branches.</p>
  <h2>📌 Definitions and asymptotes</h2>
  <ul>
    <li>\(\csc\theta=\dfrac1{\sin\theta}\) (undefined where \(\sin\theta=0\)); \(\sec\theta=\dfrac1{\cos\theta}\) (undefined where \(\cos\theta=0\)).</li>
    <li>\(\cot\theta=\dfrac1{\tan\theta}=\dfrac{\cos\theta}{\sin\theta}\) (undefined where \(\sin\theta=0\)).</li>
    <li>To evaluate, find the base ratio first, then take its reciprocal.</li>
  </ul>
  ${gframe(["y = sin(x)", "y = 1/sin(x)"], { title: "y = sin x and its reciprocal y = csc x (asymptotes where sin = 0)" })}
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Cosecant</h3><p>Find \(\csc\tfrac{\pi}{2}\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\sin\tfrac{\pi}{2}=1\Rightarrow\csc=\tfrac11\).</div><em>Conclusion: \(1\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Secant</h3><p>Find \(\sec 0\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\cos 0=1\Rightarrow\sec=\tfrac11\).</div><em>Conclusion: \(1\). ✓</em></div>${gframe(["y = 1/cos(x)"], { title: "y=sec x = 1/cos x: vertical asymptotes where cos=0; at x=0, sec=1" })}</div>
  <div class="example-box" ${EX}><h3>Example 3: Cotangent</h3><p>Find \(\cot\tfrac{\pi}{4}\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\tan\tfrac{\pi}{4}=1\Rightarrow\cot=\tfrac11\).</div><em>Conclusion: \(1\). ✓</em></div>${gframe(["y = cos(x)/sin(x)"], { title: "y=cot x = cos x / sin x: asymptotes where sin=0; at x=π/4, cot=1" })}</div>
  <div class="example-box" ${EX}><h3>Example 4: Reciprocal with a sign (Quadrant II)</h3><p>Find \(\sec\tfrac{2\pi}{3}\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\tfrac{2\pi}{3}\) is in QII; \(\cos\tfrac{2\pi}{3}=-\tfrac12\) (reference angle \(\tfrac{\pi}{3}\), cosine negative).</div><div class="step"><strong>Step 2:</strong> \(\sec=\dfrac1{\cos}=\dfrac1{-1/2}\).</div><em>Conclusion: \(-2\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: An undefined value (asymptote)</h3><p>Evaluate \(\csc\pi\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\csc\pi=\dfrac1{\sin\pi}=\dfrac10\).</div><em>Conclusion: undefined — \(\csc\) has a vertical asymptote everywhere \(\sin\theta=0\) (\(\theta=0,\pi,2\pi,\dots\)). ✓</em></div>${gframe(["y = 1/sin(x)"], { title: "y=csc x: a vertical asymptote everywhere sin=0 (x=0,π,2π,…), so csc π is undefined" })}</div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Find \(\csc\tfrac{\pi}{2}\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(1\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Find \(\sec\tfrac{\pi}{3}\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(2\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Where does \(\csc\theta\) have asymptotes?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Where \(\sin\theta=0\) (\(\theta=0,\pi,2\pi,\dots\)).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Find \(\cot\tfrac{\pi}{2}\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\dfrac{\cos(\pi/2)}{\sin(\pi/2)}=\dfrac01=0\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>Find \(\sec\pi\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\dfrac1{\cos\pi}=\dfrac1{-1}=-1\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: What is \(\csc\theta\)?</h3><p><em>\(\dfrac1{\sin\theta}\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: What is \(\sec\theta\)?</h3><p><em>\(\dfrac1{\cos\theta}\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: What is \(\cot\theta\)?</h3><p><em>\(\dfrac{\cos\theta}{\sin\theta}\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: Why do these have asymptotes?</h3><p><em>The base function hits zero, so the reciprocal blows up.</em></p></div>
</div>`),
]);
