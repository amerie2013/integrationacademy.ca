// MCF3M Unit 5 — Trigonometry (acute triangles). Deep single-card lessons (MCR3U theme)
// PLUS interactive degree-mode trig graphs with parameter sliders (animation).
import { html, gframe, graph } from "./seed-mpm2d.mjs";
const L = (code, title, blocks) => ({ code, title, blocks });
const EX = `style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const PR = `style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const QA = `style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
export const u5 = {};

u5["5.1"] = L("5.1", "Primary Trigonometric Ratios & Right Triangles", [
  html(String.raw`<div class="lecture-box">
  <h1>📐 Primary Trigonometric Ratios &amp; Right Triangles</h1>
  <p><strong>Overview.</strong> In a right triangle the three sides — <strong>opposite</strong>, <strong>adjacent</strong>, and <strong>hypotenuse</strong> — are named <em>relative to an angle</em>. The three primary ratios link an angle to a pair of sides, so if you know enough you can find any missing side or angle. This is the engine behind surveying, navigation, and construction.</p>
  <h2>📌 SOH CAH TOA</h2>
  <ul>
    <li>\(\sin\theta=\dfrac{\text{opp}}{\text{hyp}}\), \(\cos\theta=\dfrac{\text{adj}}{\text{hyp}}\), \(\tan\theta=\dfrac{\text{opp}}{\text{adj}}\).</li>
    <li><strong>Find a side:</strong> set up the ratio and multiply. <strong>Find an angle:</strong> use the inverse, e.g. \(\theta=\tan^{-1}\!\big(\tfrac{\text{opp}}{\text{adj}}\big)\).</li>
    <li>The <strong>hypotenuse</strong> is always opposite the right angle and is the longest side.</li>
  </ul>
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: A ratio</h3><p>Opposite \(=3\), hypotenuse \(=5\). Find \(\sin\theta\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\sin\theta=\tfrac{3}{5}\).</div><em>Conclusion: \(0.6\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Find a side (sine)</h3><p>Hypotenuse \(=10\), angle \(=30^\circ\). Find the opposite side.</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\text{opp}=10\sin30^\circ\).</div><em>Conclusion: \(5\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: Find a side (tangent)</h3><p>Adjacent \(=8\), angle \(=40^\circ\). Find the opposite side.</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\text{opp}=8\tan40^\circ\).</div><em>Conclusion: \(\approx6.71\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: Find an angle</h3><p>Opposite \(=3\), adjacent \(=4\). Find \(\theta\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\theta=\tan^{-1}\!\big(\tfrac34\big)\).</div><em>Conclusion: \(\approx36.9^\circ\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: A ladder</h3><p>A 10 m ladder leans at \(60^\circ\) to the ground. How high does it reach?</p><div class="solution"><div class="step"><strong>Step 1:</strong> height \(=10\sin60^\circ\).</div><em>Conclusion: \(\approx8.66\) m. ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Adjacent \(=4\), hypotenuse \(=5\). Find \(\cos\theta\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(0.8\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Hypotenuse \(=20\), angle \(=30^\circ\). Find the opposite side.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(10\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Adjacent \(=12\), angle \(=50^\circ\). Find the opposite side.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(12\tan50^\circ\approx14.3\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Opposite \(=7\), hypotenuse \(=10\). Find \(\theta\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\sin^{-1}(0.7)\approx44.4^\circ\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>An 8 m ladder leans at \(70^\circ\). How high does it reach?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(8\sin70^\circ\approx7.52\) m.</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: What does SOH CAH TOA stand for?</h3><p><em>Sine = Opp/Hyp, Cosine = Adj/Hyp, Tangent = Opp/Adj.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: When do I use inverse trig?</h3><p><em>To find an <strong>angle</strong> from two known sides.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: How do I label the sides?</h3><p><em>Relative to the angle: opposite faces it, adjacent is beside it, hypotenuse faces the right angle.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: Find a side vs find an angle?</h3><p><em>Side: pick a ratio and multiply. Angle: use \(\sin^{-1},\cos^{-1},\tan^{-1}\).</em></p></div>
</div>`),
  graph("a*sin(x*pi/180)", "a", { xMin: 0, xMax: 90, yMin: 0, yMax: 2, paramMin: 1, paramMax: 2, paramInit: 1, caption: "Animation: the sine ratio climbs from 0 (at 0°) to 1 (at 90°). Slide a to scale the height — bigger sightings need bigger angles." }),
]);

u5["5.2"] = L("5.2", "Two Right Triangles in 2-D", [
  html(String.raw`<div class="lecture-box">
  <h1>📡 Two Right Triangles in 2-D</h1>
  <p><strong>Overview.</strong> Many real problems hide <em>two</em> right triangles that share a side — a height seen from two distances, or two objects sighted from one point. The trick is to write a ratio in <strong>each</strong> triangle (often both involving the same unknown), then combine the two equations.</p>
  <h2>📌 The strategy</h2>
  <ul>
    <li>Draw the figure and mark the shared side (usually the height or the base).</li>
    <li><strong>Angle of elevation</strong> looks up from the horizontal; <strong>angle of depression</strong> looks down — they are equal across parallel horizontals.</li>
    <li>Set up one equation per triangle, then subtract or substitute to solve.</li>
  </ul>
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Helicopter &amp; two trucks</h3><p>A helicopter hovers 500 m above a straight road. Two trucks ahead have depression angles \(60^\circ\) and \(20^\circ\). How far apart are they?</p><div class="solution"><div class="step"><strong>Step 1:</strong> Distances from the point below: \(\tfrac{500}{\tan60^\circ}\approx288.7\), \(\tfrac{500}{\tan20^\circ}\approx1373.7\).</div><em>Conclusion: \(\approx1085\) m apart. ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Pole on a building</h3><p>From 50 m away, the angle of elevation to the base of a rooftop pole is \(30^\circ\) and to its top is \(40^\circ\). Find the pole's height.</p><div class="solution"><div class="step"><strong>Step 1:</strong> Heights \(50\tan40^\circ\approx41.95\) and \(50\tan30^\circ\approx28.87\).</div><em>Conclusion: pole \(\approx13.1\) m. ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: Two buoys from a cliff</h3><p>From the top of a 40 m cliff, depression to a near buoy is \(50^\circ\) and to a far buoy \(30^\circ\). How far apart are they?</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\tfrac{40}{\tan30^\circ}\approx69.28\), \(\tfrac{40}{\tan50^\circ}\approx33.56\).</div><em>Conclusion: \(\approx35.7\) m. ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: Walking toward a hill</h3><p>From point A the elevation to a hilltop is \(20^\circ\); 100 m closer at B it is \(35^\circ\). Find the height \(h\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\tfrac{h}{\tan20^\circ}-\tfrac{h}{\tan35^\circ}=100\Rightarrow h(2.747-1.428)=100\).</div><em>Conclusion: \(h\approx75.8\) m. ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: Approaching a tower</h3><p>A tower's elevation is \(45^\circ\) from one point and \(60^\circ\) from a point 20 m closer. Find its height.</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(h(\cot45^\circ-\cot60^\circ)=20\Rightarrow h(1-0.5774)=20\).</div><em>Conclusion: \(h\approx47.3\) m. ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>From 40 m away, the elevation to a roof is \(35^\circ\). Find its height.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(40\tan35^\circ\approx28.0\) m.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>From a 60 m cliff, the depression to a boat is \(25^\circ\). Find its distance from the base.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\tfrac{60}{\tan25^\circ}\approx128.7\) m.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>From 30 m away, elevations to a pole's base and top are \(25^\circ\) and \(40^\circ\). Find the pole's height.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(30(\tan40^\circ-\tan25^\circ)\approx11.2\) m.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Elevation \(30^\circ\) from A; 50 m closer, \(45^\circ\). Find the height.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(h(\cot30^\circ-\cot45^\circ)=50\Rightarrow h\approx68.3\) m.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>From a 300 m helicopter, two trucks have depressions \(45^\circ\) and \(30^\circ\). How far apart?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\tfrac{300}{\tan30^\circ}-\tfrac{300}{\tan45^\circ}\approx219.6\) m.</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: What is the key first step?</h3><p><em>Draw the figure and identify the shared side between the two triangles.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: How do elevation and depression relate?</h3><p><em>They are equal across parallel horizontal lines (alternate angles).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: Why two equations?</h3><p><em>Each triangle gives one; combining them eliminates the unknown distance.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: A common setup?</h3><p><em>A height seen from two points — subtract the two base distances.</em></p></div>
</div>`),
  graph("k*tan(x*pi/180)", "k", { xMin: 0, xMax: 80, yMin: 0, yMax: 8, paramMin: 1, paramMax: 2, paramInit: 1, caption: "Animation: the tangent ratio (opp/adj) shoots up as the angle of elevation grows — steeper sight-lines reach far taller objects." }),
]);

u5["5.3"] = L("5.3", "The Sine Law", [
  html(String.raw`<div class="lecture-box">
  <h1>🔺 The Sine Law</h1>
  <p><strong>Overview.</strong> Not every triangle has a right angle. The <strong>sine law</strong> handles acute triangles whenever you can pair a side with the angle <em>across from it</em>. It says the ratio of each side to the sine of its opposite angle is the same throughout the triangle.</p>
  <h2>📌 The law</h2>
  <ul>
    <li>\(\dfrac{a}{\sin A}=\dfrac{b}{\sin B}=\dfrac{c}{\sin C}\).</li>
    <li><strong>Use it when</strong> you know a side and its opposite angle, plus one more side or angle.</li>
    <li>Need the third angle? The angles sum to \(180^\circ\).</li>
  </ul>
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Find a side</h3><p>\(A=40^\circ,\ a=10,\ B=60^\circ\). Find \(b\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(b=\dfrac{a\sin B}{\sin A}=\dfrac{10\sin60^\circ}{\sin40^\circ}\).</div><em>Conclusion: \(\approx13.5\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Third angle first</h3><p>\(A=50^\circ,\ B=70^\circ,\ a=8\). Find \(b\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(b=\dfrac{8\sin70^\circ}{\sin50^\circ}\).</div><em>Conclusion: \(\approx9.81\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: Find an angle</h3><p>\(a=8,\ A=50^\circ,\ b=6\). Find \(B\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\sin B=\dfrac{b\sin A}{a}=\dfrac{6\sin50^\circ}{8}\approx0.5745\).</div><em>Conclusion: \(B\approx35.1^\circ\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: Two angles given</h3><p>\(A=45^\circ,\ B=60^\circ,\ a=12\). Find \(c\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(C=75^\circ\); \(c=\dfrac{12\sin75^\circ}{\sin45^\circ}\).</div><em>Conclusion: \(\approx16.4\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: Set it up</h3><p>For \(A=35^\circ,\ a=9,\ b=7\), write the equation to find \(B\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\dfrac{\sin B}{7}=\dfrac{\sin35^\circ}{9}\).</div><em>Conclusion: \(\sin B=\dfrac{7\sin35^\circ}{9}\). ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>\(A=30^\circ,\ a=5,\ B=80^\circ\). Find \(b\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\dfrac{5\sin80^\circ}{\sin30^\circ}\approx9.85\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>If \(A=40^\circ\) and \(B=75^\circ\), find \(C\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(65^\circ\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>\(A=60^\circ,\ a=10,\ B=40^\circ\). Find \(b\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\dfrac{10\sin40^\circ}{\sin60^\circ}\approx7.42\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>\(a=10,\ A=70^\circ,\ b=8\). Find \(B\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\sin B=\tfrac{8\sin70^\circ}{10}\approx0.7518\Rightarrow B\approx48.8^\circ\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>When is the sine law the right tool?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>When you have a side and the angle opposite it.</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: What pairs go together?</h3><p><em>Each side with the angle directly across from it.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: When should I use the sine law?</h3><p><em>When you have a complete side–angle pair plus one more piece.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: How do I find a missing angle?</h3><p><em>Cross-multiply and take \(\sin^{-1}\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: What if I only have two angles?</h3><p><em>Use the \(180^\circ\) angle sum to get the third, then a side.</em></p></div>
</div>`),
  graph("k*sin(x*pi/180)", "k", { xMin: 0, xMax: 180, yMin: 0, yMax: 2, paramMin: 1, paramMax: 2, paramInit: 1, caption: "Animation: sine stays positive across 0°–180°, so the sine law gives valid ratios for every angle in an acute triangle. Slide k to scale." }),
]);

u5["5.4"] = L("5.4", "The Cosine Law", [
  html(String.raw`<div class="lecture-box">
  <h1>🔻 The Cosine Law</h1>
  <p><strong>Overview.</strong> When you cannot pair a side with its opposite angle — you have two sides and the angle <em>between</em> them (SAS), or all three sides (SSS) — the <strong>cosine law</strong> takes over. It is the Pythagorean theorem with a correction term \(-2ab\cos C\) that accounts for the angle not being \(90^\circ\).</p>
  <h2>📌 The law</h2>
  <ul>
    <li><strong>Find a side (SAS):</strong> \(c^2=a^2+b^2-2ab\cos C\).</li>
    <li><strong>Find an angle (SSS):</strong> \(\cos C=\dfrac{a^2+b^2-c^2}{2ab}\), then \(C=\cos^{-1}(\dots)\).</li>
    <li>When \(C=90^\circ\), \(\cos C=0\) and it becomes \(c^2=a^2+b^2\) — plain Pythagoras.</li>
  </ul>
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Find a side (SAS)</h3><p>\(a=5,\ b=7,\ C=60^\circ\). Find \(c\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(c^2=25+49-2(5)(7)\cos60^\circ=74-35=39\).</div><em>Conclusion: \(c\approx6.24\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Right-angle check</h3><p>\(a=8,\ b=6,\ C=90^\circ\). Find \(c\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\cos90^\circ=0\): \(c^2=64+36\).</div><em>Conclusion: \(c=10\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: Find an angle (SSS)</h3><p>Sides \(6,8,10\). Find the angle opposite \(10\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\cos C=\dfrac{36+64-100}{2(6)(8)}=0\).</div><em>Conclusion: \(C=90^\circ\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: SAS</h3><p>\(a=7,\ b=9,\ C=50^\circ\). Find \(c\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(c^2=49+81-126\cos50^\circ\approx130-81.0=49.0\).</div><em>Conclusion: \(c\approx7.0\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: Largest angle (SSS)</h3><p>Sides \(5,6,7\). Find the largest angle (opposite \(7\)).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\cos C=\dfrac{25+36-49}{2(5)(6)}=\dfrac{12}{60}=0.2\).</div><em>Conclusion: \(C\approx78.5^\circ\). ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>\(a=5,\ b=7,\ C=60^\circ\). Find \(c\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\sqrt{39}\approx6.24\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>\(a=4,\ b=5,\ C=90^\circ\). Find \(c\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\sqrt{41}\approx6.40\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Sides \(6,8,10\). Find the largest angle.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(90^\circ\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>\(a=9,\ b=12,\ C=80^\circ\). Find \(c\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(c^2=225-216\cos80^\circ\approx187.5\Rightarrow c\approx13.7\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>When should you use the cosine law?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>For SAS (find a side) or SSS (find an angle).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: When do I use the cosine law?</h3><p><em>SAS (two sides and the included angle) or SSS (three sides).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: How do I find an angle from three sides?</h3><p><em>Rearrange to \(\cos C=\dfrac{a^2+b^2-c^2}{2ab}\), then \(\cos^{-1}\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: Sine law or cosine law?</h3><p><em>Have a side–angle pair? Sine law. Otherwise (SAS or SSS) cosine law.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: How does it relate to Pythagoras?</h3><p><em>At \(C=90^\circ\), \(\cos C=0\) and it reduces to \(c^2=a^2+b^2\).</em></p></div>
</div>`),
  graph("k*cos(x*pi/180)", "k", { xMin: 0, xMax: 180, yMin: -2, yMax: 2, paramMin: 1, paramMax: 2, paramInit: 1, caption: "Animation: cosine is positive for acute angles and turns negative past 90° — exactly the sign the −2ab·cos C term uses to lengthen or shorten the opposite side." }),
]);
