// MCV4U Unit 6 — Geometry & Algebra of Vectors. Deep single-card lessons.
import { html } from "./seed-mpm2d.mjs";
const L = (code, title, blocks) => ({ code, title, blocks });
const EX = `style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const PR = `style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const QA = `style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
export const u6 = {};

u6["6.1"] = L("6.1", "Introduction to Vectors", [
  html(String.raw`<div class="lecture-box">
  <h1>➡️ Introduction to Vectors</h1>
  <p><strong>Overview.</strong> A <strong>vector</strong> has both <em>magnitude</em> and <em>direction</em> (velocity, force, displacement); a <strong>scalar</strong> has magnitude only (speed, temperature, mass). Two vectors are <strong>equal</strong> when they share the same magnitude and direction — their position doesn't matter. The <strong>opposite</strong> vector \(-\vec v\) has the same magnitude but points the other way.</p>
  <h2>📌 Key ideas</h2>
  <ul>
    <li><strong>Vector:</strong> magnitude + direction, written \(\vec{AB}\) or \(\vec v\); magnitude \(|\vec v|\).</li>
    <li><strong>Equal vectors:</strong> same magnitude and direction (anywhere in the plane).</li>
    <li><strong>Opposite:</strong> \(-\vec v\) reverses direction. Directions use bearings (e.g. \(N30^\circ E\)) or angles.</li>
  </ul>
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Vector or scalar?</h3><p>Classify: velocity, speed, force, temperature, displacement.</p><div class="solution"><div class="step"><strong>Step 1:</strong> Does it have a direction?</div><em>Conclusion: velocity, force, displacement are vectors; speed and temperature are scalars. ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Magnitude and direction</h3><p>A plane flies \(500\) km at \(N60^\circ E\). State its magnitude and direction.</p><div class="solution"><div class="step"><strong>Step 1:</strong> Magnitude is the size; direction is the bearing.</div><em>Conclusion: magnitude \(500\) km, direction \(N60^\circ E\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: Equal vectors</h3><p>When are two displacement vectors equal even if drawn in different places?</p><div class="solution"><div class="step"><strong>Step 1:</strong> Compare magnitude and direction only.</div><em>Conclusion: equal iff same magnitude and same direction (location is irrelevant). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: Opposite vector</h3><p>If \(\vec v\) is \(8\) m/s east, describe \(-\vec v\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Same magnitude, reversed direction.</div><em>Conclusion: \(8\) m/s west. ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: Bearing notation</h3><p>Express "\(40^\circ\) east of north" as a true bearing.</p><div class="solution"><div class="step"><strong>Step 1:</strong> True bearings measure clockwise from north.</div><em>Conclusion: \(040^\circ\) (i.e. \(N40^\circ E\)). ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Is acceleration a vector or a scalar?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Vector (it has direction).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Is mass a vector or a scalar?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Scalar.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Describe \(-\vec v\) if \(\vec v\) is \(10\) N north.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(10\) N south.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Two vectors have the same magnitude but opposite directions. Are they equal?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>No — they are opposites.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>Write \(N75^\circ E\) as a true bearing.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(075^\circ\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: What makes something a vector?</h3><p><em>It has both magnitude and direction.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: When are two vectors equal?</h3><p><em>Same magnitude and direction — position doesn't matter.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: What is the opposite vector?</h3><p><em>\(-\vec v\): same magnitude, reversed direction.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: How are directions stated?</h3><p><em>By bearings or angles (e.g. \(N30^\circ E\), \(030^\circ\)).</em></p></div>
</div>`),
]);

u6["6.2"] = L("6.2", "Vector Operations (Geometric)", [
  html(String.raw`<div class="lecture-box">
  <h1>➕ Vector Operations (Geometric)</h1>
  <p><strong>Overview.</strong> Vectors add <strong>tip-to-tail</strong>: place the tail of \(\vec b\) at the tip of \(\vec a\); the <strong>resultant</strong> \(\vec a+\vec b\) runs from the start to the finish (the <em>triangle law</em>; the <em>parallelogram law</em> is the same idea). Subtraction is \(\vec a-\vec b=\vec a+(-\vec b)\). <strong>Scalar multiplication</strong> \(k\vec v\) scales the length by \(|k|\) and flips direction if \(k<0\).</p>
  <h2>📌 The operations</h2>
  <ul>
    <li><strong>Addition:</strong> tip-to-tail; resultant from first tail to last tip.</li>
    <li><strong>Subtraction:</strong> \(\vec a-\vec b=\vec a+(-\vec b)\).</li>
    <li><strong>Scalar multiple:</strong> \(k\vec v\) has length \(|k||\vec v|\); reversed if \(k<0\).</li>
  </ul>
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Triangle law</h3><p>How do you draw \(\vec a+\vec b\)?</p><div class="solution"><div class="step"><strong>Step 1:</strong> Tail of \(\vec b\) at the tip of \(\vec a\).</div><em>Conclusion: the resultant goes from \(\vec a\)'s tail to \(\vec b\)'s tip. ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Perpendicular resultant</h3><p>Add \(3\) units east and \(4\) units north. Find the resultant's magnitude.</p><div class="solution"><div class="step"><strong>Step 1:</strong> Perpendicular ⇒ Pythagoras: \(\sqrt{3^2+4^2}\).</div><em>Conclusion: magnitude \(5\), direction \(\tan^{-1}\!\tfrac43\approx53^\circ\) N of E. ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: Scalar multiplication</h3><p>Describe \(3\vec v\) and \(-2\vec v\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Scale lengths; check the sign.</div><em>Conclusion: \(3\vec v\) is \(3\times\) as long, same direction; \(-2\vec v\) is \(2\times\) as long, opposite direction. ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: Subtraction</h3><p>How do you draw \(\vec a-\vec b\)?</p><div class="solution"><div class="step"><strong>Step 1:</strong> Add \(\vec a\) and \(-\vec b\) tip-to-tail.</div><em>Conclusion: \(\vec a-\vec b=\vec a+(-\vec b)\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: Resultant force</h3><p>Two forces act: \(6\) N east and \(8\) N north. Find the resultant.</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\sqrt{6^2+8^2}=10\) N; angle \(\tan^{-1}\!\tfrac86\approx53^\circ\).</div><em>Conclusion: \(10\) N at \(\approx53^\circ\) N of E. ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Resultant magnitude of \(5\) east and \(12\) north?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\sqrt{25+144}=13\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Describe \(4\vec v\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(4\times\) the length, same direction.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Describe \(-\tfrac12\vec v\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Half the length, opposite direction.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Resultant magnitude of \(9\) east and \(12\) north?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\sqrt{81+144}=15\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>What law lets you add vectors tip-to-tail?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>The triangle law.</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: How do vectors add?</h3><p><em>Tip-to-tail; the resultant spans start to finish.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: How do you subtract?</h3><p><em>\(\vec a-\vec b=\vec a+(-\vec b)\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: What does \(k\vec v\) do?</h3><p><em>Scales length by \(|k|\); reverses if \(k<0\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: How do you find a perpendicular resultant?</h3><p><em>Pythagoras for magnitude, \(\tan^{-1}\) for direction.</em></p></div>
</div>`),
]);

u6["6.3"] = L("6.3", "Cartesian Vectors in 2-D & 3-D", [
  html(String.raw`<div class="lecture-box">
  <h1>📐 Cartesian Vectors in 2-D &amp; 3-D</h1>
  <p><strong>Overview.</strong> In <strong>component form</strong> a vector is \(\vec v=(a,b)\) in 2-D or \((a,b,c)\) in 3-D. Its <strong>magnitude</strong> is \(|\vec v|=\sqrt{a^2+b^2}\) (add \(+c^2\) in 3-D). You add, subtract, and scale <em>componentwise</em>. The vector from point \(A\) to point \(B\) is \(\vec{AB}=B-A\), and a <strong>unit vector</strong> is \(\vec v/|\vec v|\).</p>
  <h2>📌 The formulas</h2>
  <ul>
    <li><strong>Magnitude:</strong> \(|(a,b)|=\sqrt{a^2+b^2}\); \(|(a,b,c)|=\sqrt{a^2+b^2+c^2}\).</li>
    <li><strong>Operations:</strong> componentwise; \(\vec{AB}=B-A\).</li>
    <li><strong>Unit vector:</strong> \(\hat v=\dfrac{\vec v}{|\vec v|}\) (length \(1\)).</li>
  </ul>
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Magnitude (2-D)</h3><p>Find \(|(3,4)|\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\sqrt{3^2+4^2}=\sqrt{25}\).</div><em>Conclusion: \(5\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Magnitude (3-D)</h3><p>Find \(|(1,2,2)|\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\sqrt{1+4+4}=\sqrt9\).</div><em>Conclusion: \(3\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: Componentwise operations</h3><p>Compute \((2,3)+(1,-1)\) and \(3(2,-1)\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Add components; scale components.</div><em>Conclusion: \((3,2)\) and \((6,-3)\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: Vector between points</h3><p>Find \(\vec{AB}\) and \(|\vec{AB}|\) for \(A(1,2),\ B(4,6)\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\vec{AB}=B-A=(3,4)\).</div><div class="step"><strong>Step 2:</strong> \(|\vec{AB}|=\sqrt{9+16}=5\).</div><em>Conclusion: \((3,4)\), length \(5\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: Unit vector</h3><p>Find the unit vector in the direction of \((3,4)\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Divide by the magnitude \(5\).</div><em>Conclusion: \(\big(\tfrac35,\tfrac45\big)\). ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Find \(|(6,8)|\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(10\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Find \(|(2,3,6)|\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\sqrt{4+9+36}=7\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Compute \((5,1)-(2,4)\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\((3,-3)\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Find \(\vec{AB}\) for \(A(2,1),\ B(5,5)\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\((3,4)\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>Unit vector of \((6,8)\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\big(\tfrac35,\tfrac45\big)\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: How do you find a magnitude?</h3><p><em>Square-root of the sum of squared components.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: How do you operate on components?</h3><p><em>Componentwise (add, subtract, scale each).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: What is \(\vec{AB}\)?</h3><p><em>\(B-A\) (head minus tail).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: What is a unit vector?</h3><p><em>\(\vec v/|\vec v|\) — a length-\(1\) vector in the same direction.</em></p></div>
</div>`),
]);

u6["6.4"] = L("6.4", "The Dot Product", [
  html(String.raw`<div class="lecture-box">
  <h1>⚫ The Dot Product</h1>
  <p><strong>Overview.</strong> The <strong>dot product</strong> multiplies two vectors to a <em>scalar</em>: \(\vec a\cdot\vec b=|\vec a||\vec b|\cos\theta = a_1b_1+a_2b_2(+a_3b_3)\). The two forms together give the <strong>angle</strong> between vectors, and \(\vec a\cdot\vec b=0\) means the vectors are <strong>perpendicular</strong>. It also computes <strong>work</strong> done by a force along a displacement.</p>
  <h2>📌 The formulas</h2>
  <ul>
    <li><strong>Components:</strong> \(\vec a\cdot\vec b=a_1b_1+a_2b_2+a_3b_3\).</li>
    <li><strong>Geometric:</strong> \(\vec a\cdot\vec b=|\vec a||\vec b|\cos\theta\Rightarrow\cos\theta=\dfrac{\vec a\cdot\vec b}{|\vec a||\vec b|}\).</li>
    <li><strong>Orthogonal</strong> \(\iff\vec a\cdot\vec b=0\). <strong>Work</strong> \(=\vec F\cdot\vec d\).</li>
  </ul>
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Dot product (2-D)</h3><p>Find \((2,3)\cdot(4,-1)\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(2(4)+3(-1)=8-3\).</div><em>Conclusion: \(5\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Dot product (3-D)</h3><p>Find \((1,2,3)\cdot(2,0,-1)\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(2+0-3\).</div><em>Conclusion: \(-1\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: Angle between vectors</h3><p>Find the angle between \((1,0)\) and \((1,1)\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\cos\theta=\dfrac{(1)(1)+(0)(1)}{(1)(\sqrt2)}=\dfrac1{\sqrt2}\).</div><em>Conclusion: \(\theta=45^\circ\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: Test perpendicularity</h3><p>Are \((2,3)\) and \((3,-2)\) perpendicular?</p><div class="solution"><div class="step"><strong>Step 1:</strong> \((2)(3)+(3)(-2)=6-6=0\).</div><em>Conclusion: yes — the dot product is \(0\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: Work</h3><p>A force \(\vec F=(3,4)\) N moves an object \(\vec d=(2,0)\) m. Find the work.</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(W=\vec F\cdot\vec d=3(2)+4(0)\).</div><em>Conclusion: \(6\) J. ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Find \((1,2)\cdot(3,4)\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(3+8=11\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Find \((2,-1,3)\cdot(1,4,2)\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(2-4+6=4\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Are \((1,2)\) and \((4,-2)\) perpendicular?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(4-4=0\): yes.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Find the angle between \((1,0)\) and \((0,1)\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Dot \(=0\Rightarrow90^\circ\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>Work of \(\vec F=(5,0)\) along \(\vec d=(3,4)\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(15+0=15\) J.</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: What does the dot product produce?</h3><p><em>A scalar.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: How do you find the angle?</h3><p><em>\(\cos\theta=\dfrac{\vec a\cdot\vec b}{|\vec a||\vec b|}\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: What does a dot product of \(0\) mean?</h3><p><em>The vectors are perpendicular.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: What's a real use?</h3><p><em>Work \(=\vec F\cdot\vec d\).</em></p></div>
</div>`),
]);

u6["6.5"] = L("6.5", "The Cross Product", [
  html(String.raw`<div class="lecture-box">
  <h1>✖️ The Cross Product</h1>
  <p><strong>Overview.</strong> The <strong>cross product</strong> (3-D only) multiplies two vectors to a <em>vector</em> that is <strong>perpendicular to both</strong>. Its magnitude \(|\vec a\times\vec b|=|\vec a||\vec b|\sin\theta\) equals the <strong>area of the parallelogram</strong> they span, and its direction follows the <strong>right-hand rule</strong>. Compute it with a determinant.</p>
  <h2>📌 The formula</h2>
  <ul>
    <li>\(\vec a\times\vec b=(a_2b_3-a_3b_2,\ a_3b_1-a_1b_3,\ a_1b_2-a_2b_1)\).</li>
    <li>\(\vec a\times\vec b\perp\vec a\) and \(\perp\vec b\); \(|\vec a\times\vec b|=\) parallelogram area.</li>
    <li>Triangle area \(=\tfrac12|\vec a\times\vec b|\).</li>
  </ul>
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Standard basis</h3><p>Compute \((1,0,0)\times(0,1,0)\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> By the formula (or right-hand rule).</div><em>Conclusion: \((0,0,1)\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: General cross product</h3><p>Compute \((1,2,3)\times(4,5,6)\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \((2\cdot6-3\cdot5,\ 3\cdot4-1\cdot6,\ 1\cdot5-2\cdot4)\).</div><div class="step"><strong>Step 2:</strong> \((12-15,\ 12-6,\ 5-8)\).</div><em>Conclusion: \((-3,6,-3)\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: Perpendicularity check</h3><p>Verify \((-3,6,-3)\) is perpendicular to \((1,2,3)\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Dot product: \(-3+12-9\).</div><em>Conclusion: \(0\) ⇒ perpendicular, as expected. ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: Parallelogram area</h3><p>Find the area of the parallelogram spanned by \((1,0,0)\) and \((0,2,0)\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Cross product \((0,0,2)\); magnitude \(2\).</div><em>Conclusion: area \(2\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: Triangle area</h3><p>Find the area of the triangle with sides \((1,0,0)\) and \((0,2,0)\) from one vertex.</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\tfrac12|\vec a\times\vec b|=\tfrac12(2)\).</div><em>Conclusion: \(1\). ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Compute \((0,1,0)\times(0,0,1)\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\((1,0,0)\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Compute \((2,0,0)\times(0,3,0)\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\((0,0,6)\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>What is the direction of \(\vec a\times\vec b\) relative to \(\vec a,\vec b\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Perpendicular to both.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Area of the parallelogram from \((3,0,0)\) and \((0,4,0)\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(|(0,0,12)|=12\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>Compute \((1,1,0)\times(0,1,1)\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\((1\cdot1-0\cdot1,\ 0\cdot0-1\cdot1,\ 1\cdot1-1\cdot0)=(1,-1,1)\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: What does the cross product produce?</h3><p><em>A vector perpendicular to both inputs (3-D only).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: What is its magnitude?</h3><p><em>\(|\vec a||\vec b|\sin\theta\) = the parallelogram's area.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: How do you get a triangle's area?</h3><p><em>\(\tfrac12|\vec a\times\vec b|\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: How do you compute it?</h3><p><em>With the determinant/component formula.</em></p></div>
</div>`),
]);
