// MCR3U Unit 4 — Trigonometric Functions. Single-card lessons matching the
// Grade 9/10 pattern, graphs embedded inline via gframe (radian sine for shape).
import { html, gframe } from "./seed-mpm2d.mjs";
const L = (code, title, blocks) => ({ code, title, blocks });
const EX = `style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const PR = `style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const QA = `style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
export const u4 = {};

u4["4.1"] = L("4.1", "Trigonometric Ratios & Special Angles", [html(String.raw`<div class="lecture-box">
  <h1>📐 Trigonometric Ratios &amp; Special Angles</h1>
  <p><strong>Overview.</strong> In a right triangle the primary ratios are <strong>SOH CAH TOA</strong>: \(\sin\theta=\tfrac{\text{opp}}{\text{hyp}}\), \(\cos\theta=\tfrac{\text{adj}}{\text{hyp}}\), \(\tan\theta=\tfrac{\text{opp}}{\text{adj}}\).</p>
  <h2>📌 Special angles (exact values)</h2>
  <ul>
    <li>\(\sin30^\circ=\tfrac12,\ \cos30^\circ=\tfrac{\sqrt3}{2},\ \tan30^\circ=\tfrac{1}{\sqrt3}\)</li>
    <li>\(\sin45^\circ=\cos45^\circ=\tfrac{\sqrt2}{2},\ \tan45^\circ=1\)</li>
    <li>\(\sin60^\circ=\tfrac{\sqrt3}{2},\ \cos60^\circ=\tfrac12,\ \tan60^\circ=\sqrt3\)</li>
  </ul>
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Find a ratio</h3><p>Opposite \(3\), hypotenuse \(5\). Find \(\sin\theta\).</p><div class="solution"><em>Conclusion: \(\tfrac{3}{5}\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: All three</h3><p>Adjacent \(4\), hypotenuse \(5\). Find \(\cos\theta\) and \(\tan\theta\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Opposite \(=3\).</div><em>Conclusion: \(\cos\theta=\tfrac45,\ \tan\theta=\tfrac34\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: Special angle</h3><p>State \(\cos30^\circ\).</p><div class="solution"><em>Conclusion: \(\tfrac{\sqrt3}{2}\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: Special angle</h3><p>State \(\tan45^\circ\).</p><div class="solution"><em>Conclusion: \(1\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: Find a side</h3><p>Hypotenuse \(10\), angle \(30^\circ\). Find the opposite side.</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\text{opp}=10\sin30^\circ\).</div><em>Conclusion: \(5\). ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>State \(\sin60^\circ\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\tfrac{\sqrt3}{2}\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>State \(\cos45^\circ\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\tfrac{\sqrt2}{2}\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>State \(\tan60^\circ\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\sqrt3\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Hypotenuse \(8\), angle \(45^\circ\): find the opposite side.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(8\sin45^\circ=4\sqrt2\approx5.66\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>Find \(\theta\) if opposite \(=3\), adjacent \(=4\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\tan\theta=\tfrac34\Rightarrow\theta\approx36.9^\circ\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: How do I remember the ratios?</h3><p><em>SOH CAH TOA.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: Which side is the hypotenuse?</h3><p><em>The longest side, opposite the right angle.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: Why memorize special angles?</h3><p><em>They give exact answers without a calculator.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: Calculator mode?</h3><p><em>DEGREE mode for these problems.</em></p></div>
</div>`)]);

u4["4.2"] = L("4.2", "Angles 0°–360° & the CAST Rule", [html(String.raw`<div class="lecture-box">
  <h1>🧭 Angles 0°–360° &amp; the CAST Rule</h1>
  <p><strong>Overview.</strong> Beyond \(90^\circ\), ratios can be negative. <strong>CAST</strong> (from Q4 counter-clockwise) names the positive ratio per quadrant: C (cos), A (all), S (sin), T (tan).</p>
  <h2>📌 Reference angle</h2>
  <p>The acute angle to the \(x\)-axis. Find the ratio of the reference angle, then attach the CAST sign. Two angles in \([0^\circ,360^\circ]\) can share a ratio.</p>
  ${gframe(["y = sin(x)"], { title: "The sine function rises then falls — positive in Q1, Q2, then negative" })}
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Sign</h3><p>Is \(\sin150^\circ\) positive or negative?</p><div class="solution"><em>Conclusion: Q2 — positive. ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Sign</h3><p>Is \(\cos210^\circ\) positive or negative?</p><div class="solution"><em>Conclusion: Q3 — negative. ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: Reference angle</h3><p>Reference angle of \(210^\circ\)?</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(210-180\).</div><em>Conclusion: \(30^\circ\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: Exact value</h3><p>Evaluate \(\cos120^\circ\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Q2 (cos −), reference \(60^\circ\).</div><em>Conclusion: \(-\tfrac12\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: Two angles</h3><p>Find all \(\theta\in[0^\circ,360^\circ]\) with \(\sin\theta=\tfrac12\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Reference \(30^\circ\); sine + in Q1, Q2.</div><em>Conclusion: \(\theta=30^\circ,150^\circ\). ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Sign of \(\tan200^\circ\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Q3: positive.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Reference angle of \(300^\circ\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(60^\circ\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Evaluate \(\sin210^\circ\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(-\tfrac12\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Evaluate \(\cos300^\circ\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\tfrac12\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>Find all \(\theta\in[0^\circ,360^\circ]\) with \(\cos\theta=-\tfrac{\sqrt3}{2}\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(150^\circ,210^\circ\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: How do I read CAST?</h3><p><em>From Q4 counter-clockwise: C, A, S, T — the letter names the positive ratio.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: How many answers in \([0^\circ,360^\circ]\)?</h3><p><em>Usually two.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: Reference angle formulas?</h3><p><em>Q2 \(180-\theta\), Q3 \(\theta-180\), Q4 \(360-\theta\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: Does the graph confirm CAST?</h3><p><em>Yes — sine is positive then negative as the angle grows.</em></p></div>
</div>`)]);

u4["4.3"] = L("4.3", "Reciprocal Ratios & Trigonometric Identities", [html(String.raw`<div class="lecture-box">
  <h1>🔁 Reciprocal Ratios &amp; Identities</h1>
  <p><strong>Overview.</strong> The reciprocal ratios are \(\csc\theta=\tfrac{1}{\sin\theta}\), \(\sec\theta=\tfrac{1}{\cos\theta}\), \(\cot\theta=\tfrac{1}{\tan\theta}\).</p>
  <h2>📌 Key identities</h2>
  <ul>
    <li>Quotient: \(\tan\theta=\tfrac{\sin\theta}{\cos\theta}\). Pythagorean: \(\sin^2\theta+\cos^2\theta=1\).</li>
    <li>To prove an identity, rewrite everything in sine and cosine.</li>
  </ul>
  ${gframe(["y = sin(x)", "y = cos(x)"], { title: "Sine and cosine — they cross where sin = cos" })}
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Reciprocal</h3><p>If \(\sin\theta=\tfrac35\), find \(\csc\theta\).</p><div class="solution"><em>Conclusion: \(\tfrac53\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Evaluate</h3><p>Find \(\sec60^\circ\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\tfrac{1}{\cos60^\circ}=\tfrac{1}{1/2}\).</div><em>Conclusion: \(2\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: Evaluate</h3><p>Find \(\cot45^\circ\).</p><div class="solution"><em>Conclusion: \(1\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: Pythagorean identity</h3><p>If \(\sin\theta=\tfrac35\) and \(\theta\) is acute, find \(\cos\theta\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\cos^2\theta=1-\tfrac{9}{25}=\tfrac{16}{25}\).</div><em>Conclusion: \(\tfrac45\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: Prove</h3><p>Prove \(\tan\theta\cos\theta=\sin\theta\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\tfrac{\sin\theta}{\cos\theta}\cdot\cos\theta\).</div><em>Conclusion: \(\sin\theta\). ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>If \(\cos\theta=\tfrac45\), find \(\sec\theta\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\tfrac54\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Find \(\csc30^\circ\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(2\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Find \(\cot60^\circ\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\tfrac{1}{\sqrt3}\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>If \(\cos\theta=\tfrac{12}{13}\) (acute), find \(\sin\theta\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\tfrac{5}{13}\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>Prove \(\tfrac{\sin\theta}{\cos\theta}=\tan\theta\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Quotient identity — true by definition.</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: Is \(\csc\) the reciprocal of \(\cos\)?</h3><p><em>No — \(\csc=1/\sin\); \(\sec=1/\cos\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: Why does \(\sin^2\theta+\cos^2\theta=1\)?</h3><p><em>Pythagoras applied to a point on the unit circle.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: How do I choose the sign for \(\cos\theta\)?</h3><p><em>Use the quadrant (CAST); acute is positive.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: Proving tips?</h3><p><em>Convert to sine and cosine, then simplify.</em></p></div>
</div>`)]);

u4["4.4"] = L("4.4", "The Sine Law & Cosine Law", [html(String.raw`<div class="lecture-box">
  <h1>🔺 The Sine Law &amp; Cosine Law</h1>
  <p><strong>Overview.</strong> For oblique (non-right) triangles, two laws relate sides and angles.</p>
  <h2>📌 Which law?</h2>
  <ul>
    <li><strong>Sine law</strong> \(\dfrac{a}{\sin A}=\dfrac{b}{\sin B}=\dfrac{c}{\sin C}\): use with a side–angle pair.</li>
    <li><strong>Cosine law</strong> \(c^2=a^2+b^2-2ab\cos C\): use with SAS or SSS.</li>
    <li>The ambiguous case (SSA) can give two triangles.</li>
  </ul>
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Sine law (side)</h3><p>\(A=40^\circ\), \(B=60^\circ\), \(a=10\). Find \(b\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\dfrac{b}{\sin60^\circ}=\dfrac{10}{\sin40^\circ}\).</div><em>Conclusion: \(b\approx13.5\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Sine law (angle)</h3><p>\(a=8\), \(b=11\), \(A=35^\circ\). Find \(B\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\sin B=\dfrac{11\sin35^\circ}{8}\approx0.789\).</div><em>Conclusion: \(B\approx52.1^\circ\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: Cosine law (side, SAS)</h3><p>\(a=8\), \(b=5\), \(C=60^\circ\). Find \(c\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(c^2=64+25-80\cos60^\circ=49\).</div><em>Conclusion: \(c=7\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: Cosine law (angle, SSS)</h3><p>\(a=5\), \(b=6\), \(c=7\). Find \(C\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\cos C=\dfrac{25+36-49}{60}=0.2\).</div><em>Conclusion: \(C\approx78.5^\circ\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: Choose the law</h3><p>Given two angles and a side, which law?</p><div class="solution"><em>Conclusion: sine law (a complete side–angle pair). ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>\(A=50^\circ\), \(B=70^\circ\), \(a=12\). Find \(b\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\approx14.7\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>\(a=9\), \(b=12\), \(A=40^\circ\). Find \(B\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(B\approx59^\circ\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>\(a=8\), \(b=5\), \(C=60^\circ\). Find \(c\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(c=7\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>\(a=4\), \(b=5\), \(c=6\). Find the largest angle.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(C\approx82.8^\circ\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>Given three sides, which law finds an angle?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Cosine law.</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: Quick way to choose?</h3><p><em>Side–angle pair → sine law; SAS or SSS → cosine law.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: The ambiguous case?</h3><p><em>SSA can give 0, 1, or 2 triangles — check \(180^\circ-B\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: Calculator mode?</h3><p><em>Degrees; use \(\sin^{-1}\)/\(\cos^{-1}\) for angles.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: Cosine law special case?</h3><p><em>If \(C=90^\circ\), it becomes the Pythagorean theorem.</em></p></div>
</div>`)]);

u4["4.5"] = L("4.5", "Trigonometry in 3-D Problems", [html(String.raw`<div class="lecture-box">
  <h1>🧱 Trigonometry in 3-D Problems</h1>
  <p><strong>Overview.</strong> Real problems often need several triangles. Identify the right and oblique triangles, and solve one to feed the next.</p>
  <h2>📌 Strategy</h2>
  <ol>
    <li>Draw and label a clear diagram.</li>
    <li>Solve a triangle you can fully solve.</li>
    <li>Use a shared side to move to the next triangle.</li>
  </ol>
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Angle of elevation</h3><p>From \(50\) m away, the elevation to a tower top is \(38^\circ\). Find the height.</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(h=50\tan38^\circ\).</div><em>Conclusion: \(\approx39.1\) m. ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Two distances</h3><p>From \(A\) and \(B\), \(30\) m apart in line with a pole, elevations are \(35^\circ\) and \(50^\circ\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Both triangles share \(h\): \(h=d\tan35^\circ=(d-30)\tan50^\circ\).</div><em>Conclusion: solve for \(d\), then \(h\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: Ladder</h3><p>A \(6\) m ladder makes \(70^\circ\) with the ground. How high does it reach?</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(h=6\sin70^\circ\).</div><em>Conclusion: \(\approx5.6\) m. ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: Space diagonal</h3><p>A box is \(3\times4\times12\). Find the space diagonal.</p><div class="solution"><div class="step"><strong>Step 1:</strong> Base \(\sqrt{9+16}=5\).</div><div class="step"><strong>Step 2:</strong> \(\sqrt{25+144}\).</div><em>Conclusion: \(13\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: Oblique in 3-D</h3><p>Two roads leave a point \(65^\circ\) apart; cars go \(40\) km and \(55\) km. Distance apart?</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(d^2=40^2+55^2-2(40)(55)\cos65^\circ\).</div><em>Conclusion: \(\approx52.6\) km. ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>From \(80\) m away the elevation to a roof is \(25^\circ\). Find the height.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(80\tan25^\circ\approx37.3\) m.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>A \(10\) m wire makes \(55^\circ\) with the ground. How high is the attachment point?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(10\sin55^\circ\approx8.2\) m.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Find the space diagonal of a \(6\times8\times24\) box.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Base \(10\); diagonal \(26\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Two ships leave port \(48^\circ\) apart at \(20\) km and \(30\) km. Distance apart?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\approx22.3\) km.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>A ramp rises \(2\) m over a \(10\) m run. Find the angle of elevation.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\tan\theta=0.2\Rightarrow\theta\approx11.3^\circ\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: How do I start a wordy 3-D problem?</h3><p><em>Draw it — a labelled diagram makes it ordinary triangles.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: When do I need the cosine law in 3-D?</h3><p><em>When the triangle is oblique.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: Elevation vs depression?</h3><p><em>They are equal (alternate angles).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: Shared-side problems?</h3><p><em>Solve the triangle you can, then carry that side into the next.</em></p></div>
</div>`)]);
