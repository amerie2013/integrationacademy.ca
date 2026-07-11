// MCR3U Unit 5 — Sinusoidal Functions. Single-card lessons (Grade 9/10 pattern)
// with sine/cosine graphs embedded inline via gframe.
import { html, gframe } from "./seed-mpm2d.mjs";
const L = (code, title, blocks) => ({ code, title, blocks });
const EX = `style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const PR = `style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const QA = `style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
export const u5 = {};

u5["5.1"] = L("5.1", "Periodic Functions & Their Properties", [html(String.raw`<div class="lecture-box">
  <h1>🌊 Periodic Functions &amp; Their Properties</h1>
  <p><strong>Overview.</strong> A <strong>periodic</strong> function repeats the same pattern at regular intervals. Tides, sound, and a Ferris wheel are all periodic.</p>
  <h2>📌 The vocabulary</h2>
  <ul>
    <li><strong>Cycle:</strong> one complete repeat. <strong>Period:</strong> the horizontal length of one cycle.</li>
    <li><strong>Amplitude:</strong> \(\dfrac{\text{max}-\text{min}}{2}\). <strong>Axis / midline:</strong> \(\dfrac{\text{max}+\text{min}}{2}\).</li>
  </ul>
  ${gframe(["y = sin(x)"], { title: "A periodic function repeats the same cycle over and over" })}
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Period from a graph</h3><p>A graph repeats every \(4\) units. State the period.</p><div class="solution"><em>Conclusion: \(4\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Amplitude</h3><p>Max \(=7\), min \(=1\). Find the amplitude.</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\dfrac{7-1}{2}\).</div><em>Conclusion: \(3\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: Axis (midline)</h3><p>Max \(=7\), min \(=1\). Find the axis.</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\dfrac{7+1}{2}\).</div><em>Conclusion: \(y=4\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: Period of \(\sin\)</h3><p>State the period of \(y=\sin x\) (degrees).</p><div class="solution"><em>Conclusion: \(360^\circ\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: Max/min</h3><p>State the max and min of \(y=\sin x\).</p><div class="solution"><em>Conclusion: \(1\) and \(-1\). ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Max \(=10\), min \(=2\). Find the amplitude.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(4\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Max \(=10\), min \(=2\). Find the axis.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(y=6\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>A wave repeats every \(8\) s. State the period.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(8\) s.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>State the period of \(y=\cos x\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(360^\circ\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>Max \(=5\), min \(=-3\). Find the amplitude and axis.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Amplitude \(4\), axis \(y=1\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: Amplitude vs axis?</h3><p><em>Amplitude is half the max–min gap; the axis is the average of max and min.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: Is amplitude ever negative?</h3><p><em>No — it is a distance, always positive.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: What does the period measure?</h3><p><em>The length of one full cycle along the horizontal axis.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: Real examples?</h3><p><em>Tides, daylight hours, a Ferris wheel, sound waves.</em></p></div>
</div>`)]);

u5["5.2"] = L("5.2", "Graphing Sine & Cosine", [html(String.raw`<div class="lecture-box">
  <h1>〰️ Graphing Sine &amp; Cosine</h1>
  <p><strong>Overview.</strong> The parent graphs \(y=\sin x\) and \(y=\cos x\) (in degrees) both have amplitude \(1\), period \(360^\circ\), and midline \(y=0\).</p>
  <h2>📌 Key facts</h2>
  <ul>
    <li>\(y=\sin x\) starts at \((0,0)\), rises to \(1\) at \(90^\circ\).</li>
    <li>\(y=\cos x\) starts at \((0,1)\) (its maximum).</li>
    <li>Both repeat every \(360^\circ\).</li>
  </ul>
  ${gframe(["y = sin(x)", "y = cos(x)"], { title: "y = sin x and y = cos x — same shape, shifted" })}
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Amplitude</h3><p>Amplitude of \(y=3\sin x\)?</p><div class="solution"><em>Conclusion: \(3\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Period</h3><p>Period of \(y=\sin x\)?</p><div class="solution"><em>Conclusion: \(360^\circ\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: Starting point</h3><p>Where does \(y=\cos x\) start?</p><div class="solution"><em>Conclusion: at its maximum, \((0,1)\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: A key value</h3><p>Evaluate \(\sin90^\circ\).</p><div class="solution"><em>Conclusion: \(1\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: Midline</h3><p>State the midline of \(y=\cos x\).</p><div class="solution"><em>Conclusion: \(y=0\). ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Amplitude of \(y=5\sin x\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(5\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Period of \(y=\cos x\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(360^\circ\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Evaluate \(\cos0^\circ\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(1\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Evaluate \(\sin180^\circ\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(0\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>State the max of \(y=2\sin x\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(2\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: How are \(\sin\) and \(\cos\) related?</h3><p><em>Cosine is sine shifted left \(90^\circ\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: How tall is the parent graph?</h3><p><em>Amplitude \(1\): it ranges from \(-1\) to \(1\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: Where does \(\sin x\) cross zero?</h3><p><em>At \(0^\circ,180^\circ,360^\circ,\dots\)</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: Degrees or radians here?</h3><p><em>We graph in degrees, so one cycle is \(360^\circ\).</em></p></div>
</div>`)]);

u5["5.3"] = L("5.3", "Transformations of Sinusoidal Functions", [html(String.raw`<div class="lecture-box">
  <h1>🎚️ Transformations of Sinusoidal Functions</h1>
  <p><strong>Overview.</strong> A general sinusoidal function is \(y=a\sin\big(k(x-d)\big)+c\). Each parameter changes a feature.</p>
  <h2>📌 What each does</h2>
  <ul>
    <li>\(a\): <strong>amplitude</strong> \(=|a|\). \(c\): vertical shift → <strong>midline</strong> \(y=c\).</li>
    <li>\(k\): <strong>period</strong> \(=\dfrac{360^\circ}{k}\). \(d\): <strong>phase shift</strong> (horizontal).</li>
  </ul>
  ${gframe(["y = sin(x)", "y = 2*sin(x) + 1"], { title: "y = sin x vs y = 2 sin x + 1: amplitude 2, midline y = 1" })}
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Amplitude &amp; period</h3><p>For \(y=3\sin(2x)\), state the amplitude and period.</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(a=3\); period \(=\dfrac{360^\circ}{2}\).</div><em>Conclusion: amplitude \(3\), period \(180^\circ\). ✓</em></div>${gframe(["y = sin(x)", "y = 3*sin(2*x)"], { title: "3sin(2x): three times as tall as sin x and cycling twice as fast (half the period)" })}</div>
  <div class="example-box" ${EX}><h3>Example 2: Midline</h3><p>Midline of \(y=\sin x+4\)?</p><div class="solution"><em>Conclusion: \(y=4\). ✓</em></div>${gframe(["y = sin(x) + 4"], { title: "sin x+4: the whole wave lifted so its midline is y=4" })}</div>
  <div class="example-box" ${EX}><h3>Example 3: Period</h3><p>Period of \(y=\cos(4x)\)?</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\dfrac{360^\circ}{4}\).</div><em>Conclusion: \(90^\circ\). ✓</em></div>${gframe(["y = cos(x)", "y = cos(4*x)"], { title: "cos(4x): four full cycles fit where cos x completes just one" })}</div>
  <div class="example-box" ${EX}><h3>Example 4: Write an equation</h3><p>Write a sine function with amplitude \(2\), period \(360^\circ\), midline \(y=0\).</p><div class="solution"><em>Conclusion: \(y=2\sin x\). ✓</em></div>${gframe(["y = 2*sin(x)"], { title: "y=2sin x: amplitude 2, full period, midline y=0 — exactly the description" })}</div>
  <div class="example-box" ${EX}><h3>Example 5: Phase shift</h3><p>Phase shift of \(y=\sin(x-30^\circ)\)?</p><div class="solution"><em>Conclusion: right \(30^\circ\). ✓</em></div>${gframe(["y = sin(x)", "y = sin(x - pi/6)"], { title: "sin(x−30°): the sine wave slid to the right by 30° (≈0.52 rad)" })}</div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Amplitude of \(y=4\sin x\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(4\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Period of \(y=\sin(3x)\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(120^\circ\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Midline of \(y=2\cos x-5\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(y=-5\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Range of \(y=3\sin x+1\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(-2\le y\le4\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>Write a cosine function with amplitude \(3\) and midline \(y=2\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(y=3\cos x+2\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: How do I get the period?</h3><p><em>\(\dfrac{360^\circ}{k}\) (in degrees).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: How do I get the range?</h3><p><em>From \(c-|a|\) to \(c+|a|\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: What is the midline?</h3><p><em>The horizontal line \(y=c\) the wave oscillates about.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: Bigger \(k\) means…?</h3><p><em>A shorter period — the wave repeats faster.</em></p></div>
</div>`)]);

u5["5.4"] = L("5.4", "Sinusoidal Applications", [html(String.raw`<div class="lecture-box">
  <h1>🎡 Sinusoidal Applications</h1>
  <p><strong>Overview.</strong> Model real periodic situations — Ferris wheels, tides, temperature — with \(h=a\sin\big(k(t-d)\big)+c\) (or cosine).</p>
  <h2>📌 Building a model</h2>
  <ul>
    <li>Amplitude \(a=\dfrac{\text{max}-\text{min}}{2}\); midline \(c=\dfrac{\text{max}+\text{min}}{2}\).</li>
    <li>\(k=\dfrac{360^\circ}{\text{period}}\); choose sine or cosine by the starting point.</li>
  </ul>
  ${gframe(["y = 5*sin(x) + 7"], { title: "A Ferris wheel: height oscillates between 2 and 12 about a midline of 7" })}
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Ferris wheel amplitude</h3><p>A wheel's height ranges from \(2\) m to \(12\) m. Find the amplitude and midline.</p><div class="solution"><div class="step"><strong>Step 1:</strong> Amplitude \(\dfrac{12-2}{2}=5\).</div><em>Conclusion: amplitude \(5\), midline \(7\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Period to \(k\)</h3><p>A tide cycle is \(12\) h. Find \(k\) (degrees).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(k=\dfrac{360^\circ}{12}\).</div><em>Conclusion: \(30^\circ\) per hour. ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: Build a model</h3><p>Temperature ranges \(10^\circ\) to \(24^\circ\) over a \(24\)-h period. Give amplitude and midline.</p><div class="solution"><div class="step"><strong>Step 1:</strong> Amplitude \(7\), midline \(17\).</div><em>Conclusion: \(T=7\sin(15t)+17\) form. ✓</em></div>${gframe(["y = 7*sin(x) + 17"], { title: "T=7sin(…)+17: temperature swings between 10° and 24° around the midline 17°" })}</div>
  <div class="example-box" ${EX}><h3>Example 4: Height at a time</h3><p>For \(h=5\sin(30t)+7\), find \(h\) at \(t=3\) (so \(30t=90^\circ\)).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(5\sin90^\circ+7\).</div><em>Conclusion: \(12\) m (the top). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: Max value</h3><p>What is the maximum of \(h=5\sin(30t)+7\)?</p><div class="solution"><em>Conclusion: \(7+5=12\) m. ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>A wheel ranges \(1\) m to \(15\) m. Find the amplitude and midline.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Amplitude \(7\), midline \(8\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>A cycle lasts \(10\) s. Find \(k\) in degrees.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(36^\circ\)/s.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>For \(h=4\sin(30t)+6\), find the maximum height.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(10\) m.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>For \(h=4\sin(30t)+6\), find the minimum height.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(2\) m.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>Temperature ranges \(-5^\circ\) to \(15^\circ\). Find the midline.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(y=5\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: Sine or cosine?</h3><p><em>Use cosine if the situation starts at a maximum; sine if it starts at the midline going up.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: How do I find \(k\)?</h3><p><em>\(k=\dfrac{360^\circ}{\text{period}}\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: Where is the max?</h3><p><em>At midline \(+\) amplitude.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: First step on a word problem?</h3><p><em>Read off the max and min to get amplitude and midline.</em></p></div>
</div>`)]);
