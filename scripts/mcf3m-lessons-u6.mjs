// MCF3M Unit 6 — Sine Functions. Deep single-card lessons (MCR3U theme) PLUS
// interactive degree-mode sine graphs with parameter sliders (animation).
import { html, gframe, graph } from "./seed-mpm2d.mjs";
const L = (code, title, blocks) => ({ code, title, blocks });
const EX = `style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const PR = `style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const QA = `style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
export const u6 = {};

u6["6.1"] = L("6.1", "Periodic Functions & the Sine Function", [
  html(String.raw`<div class="lecture-box">
  <h1>🌊 Periodic Functions &amp; the Sine Function</h1>
  <p><strong>Overview.</strong> A <strong>periodic function</strong> repeats the same shape over and over at regular intervals — think tides, daylight hours, or a point on a turning wheel. The most important one is the <strong>sine function</strong>, born by plotting an angle against its sine ratio. Before graphing it, we learn the vocabulary that describes any repeating wave.</p>
  <h2>📌 Key features</h2>
  <ul>
    <li><strong>Cycle:</strong> one complete repeat. <strong>Period:</strong> the horizontal length of one cycle.</li>
    <li><strong>Amplitude:</strong> half the distance between the max and min, \(\dfrac{\max-\min}{2}\).</li>
    <li><strong>Midline (axis):</strong> the centre line \(y=\dfrac{\max+\min}{2}\).</li>
    <li><strong>The sine function</strong> \(f(x)=\sin x\) is a function: each angle gives exactly one sine ratio. Its period is \(360^\circ\).</li>
  </ul>
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Period</h3><p>A wave repeats every \(360^\circ\). State its period.</p><div class="solution"><div class="step"><strong>Step 1:</strong> One cycle spans \(360^\circ\).</div><em>Conclusion: period \(=360^\circ\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Amplitude</h3><p>A wave has max \(5\) and min \(1\). Find the amplitude.</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\dfrac{5-1}{2}\).</div><em>Conclusion: \(2\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: Midline</h3><p>For the same wave, find the midline.</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\dfrac{5+1}{2}\).</div><em>Conclusion: \(y=3\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: Is it a function?</h3><p>Is \(y=\sin x\) a function?</p><div class="solution"><div class="step"><strong>Step 1:</strong> Each angle gives one sine value.</div><em>Conclusion: yes. ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: Parent period</h3><p>State the period of \(y=\sin x\) (in degrees).</p><div class="solution"><div class="step"><strong>Step 1:</strong> The sine ratio repeats once per full turn.</div><em>Conclusion: \(360^\circ\). ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>A wave has max \(7\), min \(1\). Find the amplitude.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(3\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Same wave: find the midline.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(y=4\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>State the period of \(y=\sin x\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(360^\circ\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>State the maximum value of \(y=\sin x\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(1\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>State the minimum value of \(y=\sin x\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(-1\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: What makes a function periodic?</h3><p><em>It repeats the same values at regular intervals.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: What is the amplitude?</h3><p><em>Half the distance between the maximum and minimum.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: What is the period?</h3><p><em>The horizontal length of one complete cycle.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: What is the midline?</h3><p><em>The horizontal line halfway between the max and min.</em></p></div>
</div>`),
  graph("a*sin(x*pi/180)", "a", { xMin: 0, xMax: 360, yMin: -4, yMax: 4, paramMin: 0.5, paramMax: 3, paramInit: 1, caption: "Animation: the sine function repeats every 360°. Slide a to change its height — the amplitude." }),
]);

u6["6.2"] = L("6.2", "Graphing f(x) = sin x", [
  html(String.raw`<div class="lecture-box">
  <h1>📈 Graphing f(x) = sin x</h1>
  <p><strong>Overview.</strong> The parent sine graph is built from <strong>five key points</strong> across one cycle. Memorize their pattern and you can sketch any sine curve quickly, then read off every property: amplitude, period, midline, intercepts, and where the max and min occur.</p>
  <h2>📌 The parent graph</h2>
  <ul>
    <li><strong>Five key points</strong> (one cycle): \((0^\circ,0),(90^\circ,1),(180^\circ,0),(270^\circ,-1),(360^\circ,0)\).</li>
    <li><strong>Domain</strong> all real numbers; <strong>range</strong> \([-1,1]\). <strong>Amplitude</strong> \(1\); <strong>period</strong> \(360^\circ\); <strong>midline</strong> \(y=0\).</li>
    <li><strong>Max</strong> at \(90^\circ\), <strong>min</strong> at \(270^\circ\); <strong>zeros</strong> at \(0^\circ,180^\circ,360^\circ\).</li>
  </ul>
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: A key value</h3><p>Find \(\sin0^\circ\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> The curve starts on the midline.</div><em>Conclusion: \(0\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: The peak</h3><p>Find \(\sin90^\circ\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> The maximum.</div><em>Conclusion: \(1\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: Back to zero</h3><p>Find \(\sin180^\circ\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> A zero crossing.</div><em>Conclusion: \(0\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: The trough</h3><p>Find \(\sin270^\circ\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> The minimum.</div><em>Conclusion: \(-1\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: The five points</h3><p>List the five key points of one cycle of \(y=\sin x\).</p><div class="solution"><em>Conclusion: \((0,0),(90,1),(180,0),(270,-1),(360,0)\). ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Find \(\sin360^\circ\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(0\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Where is \(y=\sin x\) maximum on \([0^\circ,360^\circ]\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(90^\circ\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Where is \(y=\sin x=0\) on \([0^\circ,360^\circ]\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(0^\circ,180^\circ,360^\circ\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>State the range of \(y=\sin x\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\([-1,1]\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>State the period of \(y=\sin x\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(360^\circ\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: How many key points are in one cycle?</h3><p><em>Five — they split the cycle into quarters.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: What are the domain and range?</h3><p><em>Domain all reals; range \([-1,1]\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: Where is the maximum?</h3><p><em>At \(90^\circ\) (then every \(360^\circ\)).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: Where are the zeros?</h3><p><em>At \(0^\circ,180^\circ,360^\circ\) — every \(180^\circ\).</em></p></div>
</div>`),
  graph("sin(k*x*pi/180)", "k", { xMin: 0, xMax: 360, yMin: -1.5, yMax: 1.5, paramMin: 1, paramMax: 4, paramInit: 1, caption: "Animation: slide k in y = sin(k·x). The curve squeezes — the period becomes 360°/k, fitting k cycles in 360°." }),
]);

u6["6.3"] = L("6.3", "Transformations of Sine Functions", [
  html(String.raw`<div class="lecture-box">
  <h1>🔧 Transformations of Sine Functions</h1>
  <p><strong>Overview.</strong> Every sinusoidal curve is the parent \(y=\sin x\) stretched, squeezed, and shifted: \(y=a\sin\!\big(k(x-d)\big)+c\). Each letter controls one feature, so you can read the equation from a graph or build a graph from the equation.</p>
  <h2>📌 The four parameters</h2>
  <ul>
    <li><strong>\(a\) — amplitude</strong> \(|a|\) (vertical stretch; reflects if \(a<0\)).</li>
    <li><strong>\(k\) — period:</strong> period \(=\dfrac{360^\circ}{k}\) (horizontal squeeze).</li>
    <li><strong>\(d\) — phase shift</strong> (horizontal, opposite to the sign).</li>
    <li><strong>\(c\) — midline</strong> \(y=c\) (vertical shift). Max \(=c+|a|\), min \(=c-|a|\).</li>
  </ul>
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Amplitude</h3><p>State the amplitude of \(y=3\sin x\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(|a|=3\).</div><em>Conclusion: \(3\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Period</h3><p>State the period of \(y=\sin(2x)\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\dfrac{360^\circ}{2}\).</div><em>Conclusion: \(180^\circ\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: Midline</h3><p>State the midline of \(y=\sin x+2\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(c=2\).</div><em>Conclusion: \(y=2\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: Max &amp; min</h3><p>Find the max and min of \(y=2\sin x+1\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Midline \(1\), amplitude \(2\).</div><em>Conclusion: max \(3\), min \(-1\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: Full description</h3><p>Describe \(y=3\sin\!\big(2(x-30^\circ)\big)+1\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(a=3,\ k=2,\ d=30^\circ,\ c=1\).</div><em>Conclusion: amplitude \(3\), period \(180^\circ\), phase right \(30^\circ\), midline \(y=1\). ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>State the amplitude of \(y=5\sin x\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(5\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>State the period of \(y=\sin(3x)\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(120^\circ\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>State the midline of \(y=\sin x-4\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(y=-4\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Find the maximum of \(y=2\sin x+3\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(5\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>State the period of \(y=\sin\!\big(\tfrac12 x\big)\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(720^\circ\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: What does \(a\) control?</h3><p><em>The amplitude (and a reflection if \(a<0\)).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: How do I get the period?</h3><p><em>Period \(=\dfrac{360^\circ}{k}\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: Which way is the phase shift?</h3><p><em>Opposite to the sign: \((x-d)\) shifts right by \(d\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: How do I find the max and min?</h3><p><em>Max \(=c+|a|\), min \(=c-|a|\).</em></p></div>
</div>`),
  graph("a*sin(x*pi/180)", "a", { xMin: 0, xMax: 360, yMin: -4, yMax: 4, paramMin: -3, paramMax: 3, paramInit: 1, caption: "Slider 1 — amplitude a: stretches the wave's height; a negative a flips it upside down." }),
  graph("sin((x-d)*pi/180)", "d", { xMin: 0, xMax: 360, yMin: -1.5, yMax: 1.5, paramMin: -90, paramMax: 90, paramInit: 0, caption: "Slider 2 — phase shift d: slides the wave left/right. (x − d) moves it right by d degrees." }),
  graph("sin(x*pi/180)+c", "c", { xMin: 0, xMax: 360, yMin: -3, yMax: 4, paramMin: -2, paramMax: 2, paramInit: 0, caption: "Slider 3 — midline c: lifts or lowers the whole wave; the midline becomes y = c." }),
]);

u6["6.4"] = L("6.4", "Sinusoidal Applications", [
  html(String.raw`<div class="lecture-box">
  <h1>🎡 Sinusoidal Applications</h1>
  <p><strong>Overview.</strong> Real repeating motion — a Ferris wheel, ocean tides, hours of daylight, average temperature — is modelled with a sine function \(h=a\sin(k t)+c\). The whole task is matching the words to the parameters: the swing becomes the amplitude, the centre becomes the midline, and the repeat time becomes the period.</p>
  <h2>📌 Reading a model</h2>
  <ul>
    <li><strong>Amplitude</strong> \(a=\dfrac{\max-\min}{2}\) (e.g. a Ferris wheel's radius).</li>
    <li><strong>Midline</strong> \(c=\dfrac{\max+\min}{2}\) (e.g. the wheel's centre height).</li>
    <li><strong>Period</strong> \(=\) the time for one full cycle (one rotation). <strong>Max</strong> \(=c+a\), <strong>min</strong> \(=c-a\).</li>
  </ul>
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Ferris wheel — max</h3><p>A wheel has radius 10 m, centre 12 m high. Find the maximum height.</p><div class="solution"><div class="step"><strong>Step 1:</strong> max \(=12+10\).</div><em>Conclusion: \(22\) m. ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Ferris wheel — min</h3><p>Same wheel: find the minimum height.</p><div class="solution"><div class="step"><strong>Step 1:</strong> min \(=12-10\).</div><em>Conclusion: \(2\) m. ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: Tide amplitude &amp; midline</h3><p>A tide rises to 6 m and falls to 2 m. Find the amplitude and midline.</p><div class="solution"><div class="step"><strong>Step 1:</strong> amplitude \(\tfrac{6-2}{2}=2\); midline \(\tfrac{6+2}{2}=4\).</div><em>Conclusion: amplitude 2 m, midline 4 m. ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: Period</h3><p>A Ferris wheel takes 60 s per rotation. State the period.</p><div class="solution"><div class="step"><strong>Step 1:</strong> One cycle \(=\) one rotation.</div><em>Conclusion: \(60\) s. ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: Daylight</h3><p>Daylight ranges from 16 h (max) to 8 h (min). Find the amplitude and midline.</p><div class="solution"><div class="step"><strong>Step 1:</strong> amplitude \(\tfrac{16-8}{2}=4\); midline \(\tfrac{16+8}{2}=12\).</div><em>Conclusion: amplitude 4 h, midline 12 h. ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>A wheel has radius 8 m, centre 10 m. Find the maximum height.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(18\) m.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>A tide rises to 5 m and falls to 1 m. Find the amplitude.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(2\) m.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Same tide: find the midline.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(3\) m.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>A wheel takes 40 s per rotation. State the period.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(40\) s.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>Daylight ranges from 14 h to 10 h. Find the amplitude.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(2\) h.</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: What is the amplitude in a model?</h3><p><em>Half the swing — a Ferris wheel's radius, or half the tide range.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: What is the midline?</h3><p><em>The centre value — the wheel's centre height or the average level.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: What is the period?</h3><p><em>The time for one full cycle (one rotation or one day).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: How do I get the max and min?</h3><p><em>Max \(=\) midline \(+\) amplitude; min \(=\) midline \(-\) amplitude.</em></p></div>
</div>`),
  graph("a*sin(x*pi/180)+12", "a", { xMin: 0, xMax: 360, yMin: 0, yMax: 25, paramMin: 5, paramMax: 12, paramInit: 10, caption: "Animation: a Ferris-wheel model h = a·sin(θ) + 12. Slide the amplitude a (the radius) — the centre height stays 12, so the max is 12+a and the min is 12−a." }),
]);
