// MBF3C Unit 4 — Geometry & Trigonometry. Deep single-card lessons (MCR3U theme).
import { html, gframe, graph } from "./seed-mpm2d.mjs";
const L = (code, title, blocks) => ({ code, title, blocks });
const EX = `style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const PR = `style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const QA = `style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
export const u4 = {};

u4["4.1"] = L("4.1", "Surface Area & Volume", [
  html(String.raw`<div class="lecture-box">
  <h1>📦 Surface Area &amp; Volume</h1>
  <p><strong>Overview.</strong> <strong>Volume</strong> measures the space inside a 3-D object; <strong>surface area</strong> measures the material covering its outside. Prisms and cylinders multiply a base by a height; cones and pyramids take a third of that; spheres have their own formulas. Many real problems combine shapes, or run a formula <em>backwards</em> to recover a dimension.</p>
  <h2>📌 The formulas</h2>
  <ul>
    <li><strong>Cylinder:</strong> \(V=\pi r^2 h\), \(SA=2\pi r^2+2\pi r h\).</li>
    <li><strong>Cone:</strong> \(V=\tfrac13\pi r^2 h\), \(SA=\pi r^2+\pi r\ell\) (slant \(\ell\)).</li>
    <li><strong>Sphere:</strong> \(V=\tfrac43\pi r^3\), \(SA=4\pi r^2\). <strong>Prism/Pyramid:</strong> \(V=(\text{base area})h\) or \(\tfrac13(\text{base area})h\).</li>
  </ul>
  ${gframe(["y = x^3"], { title: "Volume scales with the cube of a length — double the size, 8× the volume" })}
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Volume of a cylinder</h3><p>A can has radius \(5\) cm and height \(12\) cm. Find its volume.</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(V=\pi r^2 h=\pi(5)^2(12)=300\pi\).</div><em>Conclusion: \(\approx942.5\) cm³. ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Surface area of that cylinder</h3><p>Find the surface area of the same can (the label plus both lids).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(SA=2\pi r^2+2\pi r h=2\pi(25)+2\pi(5)(12)\).</div><div class="step"><strong>Step 2:</strong> \(=50\pi+120\pi=170\pi\).</div><em>Conclusion: \(\approx534.1\) cm². ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: Cone — find the slant height first</h3><p>A cone has radius \(6\) and height \(8\). Find its surface area.</p><div class="solution"><div class="step"><strong>Step 1:</strong> Slant \(\ell=\sqrt{r^2+h^2}=\sqrt{36+64}=10\).</div><div class="step"><strong>Step 2:</strong> \(SA=\pi r^2+\pi r\ell=36\pi+60\pi=96\pi\).</div><em>Conclusion: \(\approx301.6\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: Work backwards (sphere)</h3><p>A sphere has volume \(36\pi\) cm³. Find its radius.</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\tfrac43\pi r^3=36\pi\Rightarrow r^3=27\).</div><em>Conclusion: \(r=3\) cm. ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: Composite solid</h3><p>A silo is a cylinder (\(r=3,\ h=10\)) topped by a cone (\(r=3,\ h=4\)). Find the total volume.</p><div class="solution"><div class="step"><strong>Step 1:</strong> Cylinder \(=\pi(9)(10)=90\pi\); cone \(=\tfrac13\pi(9)(4)=12\pi\).</div><div class="step"><strong>Step 2:</strong> Add the pieces: \(90\pi+12\pi=102\pi\).</div><em>Conclusion: \(\approx320.4\) m³. ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Volume of a cylinder with \(r=3,\ h=10\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(90\pi\approx282.7\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Volume of a sphere with \(r=6\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\tfrac43\pi(216)=288\pi\approx904.8\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>A cone has \(r=3,\ h=4\). Find its slant height, then its surface area.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\ell=5\); \(SA=9\pi+15\pi=24\pi\approx75.4\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>A cube has volume \(125\) cm³. Find its side length.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(s=\sqrt[3]{125}=5\) cm.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>Surface area of a sphere with \(r=5\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(4\pi(25)=100\pi\approx314.2\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: What do volume and surface area measure?</h3><p><em>Space inside vs material covering the outside.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: How do cones relate to cylinders?</h3><p><em>A cone is \(\tfrac13\) of the matching cylinder's volume.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: What do you need before a cone's surface area?</h3><p><em>The slant height \(\ell=\sqrt{r^2+h^2}\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: How do you handle a composite solid?</h3><p><em>Find each piece's measure, then add (or subtract).</em></p></div>
</div>`),
]);

u4["4.2"] = L("4.2", "2-D Design & Optimization", [
  html(String.raw`<div class="lecture-box">
  <h1>📐 2-D Design &amp; Optimization</h1>
  <p><strong>Overview.</strong> Designers constantly trade off <strong>perimeter</strong> (the boundary) and <strong>area</strong> (the space enclosed). Two classic problems: get the <em>most area</em> from a fixed amount of fencing, or the <em>least boundary</em> for a required area. Both answers turn out to be a square. Real layouts often combine shapes, so you add and subtract areas.</p>
  <h2>📌 Key ideas</h2>
  <ul>
    <li><strong>Rectangle:</strong> \(A=lw\), \(P=2l+2w\). <strong>Net → surface area:</strong> add the area of every face.</li>
    <li><strong>Max area, fixed perimeter:</strong> the square gives the most area.</li>
    <li><strong>Composite figures:</strong> add the pieces, subtract any holes.</li>
  </ul>
  ${gframe(["y = x*(20-x)"], { title: "Fixed perimeter 40: area x(20−x) is largest at the square, x = 10" })}
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Area and perimeter</h3><p>A rectangle is \(8\) m by \(5\) m. Find its area and perimeter.</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(A=8\times5=40\) m²; \(P=2(8)+2(5)=26\) m.</div><em>Conclusion: \(A=40\) m², \(P=26\) m. ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Maximum area for fixed fencing</h3><p>You have \(40\) m of fencing for a rectangular pen. What dimensions give the greatest area?</p><div class="solution"><div class="step"><strong>Step 1:</strong> If one side is \(x\), the other is \(20-x\), so \(A=x(20-x)\).</div><div class="step"><strong>Step 2:</strong> This parabola peaks halfway between the zeros \(0\) and \(20\), at \(x=10\).</div><em>Conclusion: \(10\times10\) (a square), area \(100\) m². ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: Least perimeter for a fixed area</h3><p>A garden must have area \(36\) m². Which whole-number rectangle uses the least fencing?</p><div class="solution"><div class="step"><strong>Step 1:</strong> Compare factor pairs: \(1{\times}36\ (P=74)\), \(4{\times}9\ (P=26)\), \(6{\times}6\ (P=24)\).</div><em>Conclusion: the \(6\times6\) square, \(P=24\) m. ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: Composite area (subtract a hole)</h3><p>A \(10\) m by \(6\) m yard contains a circular pond of radius \(2\) m. Find the grass area.</p><div class="solution"><div class="step"><strong>Step 1:</strong> Yard \(=60\) m²; pond \(=\pi(2)^2=4\pi\approx12.6\) m².</div><em>Conclusion: \(60-4\pi\approx47.4\) m² of grass. ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: Surface area from a net</h3><p>A closed box is \(4\times3\times2\) cm. Use its net to find the surface area.</p><div class="solution"><div class="step"><strong>Step 1:</strong> The net has three pairs of faces: \(lw,\ lh,\ wh\).</div><div class="step"><strong>Step 2:</strong> \(SA=2(lw+lh+wh)=2(12+8+6)\).</div><em>Conclusion: \(52\) cm². ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Area and perimeter of a \(12\times5\) rectangle?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(A=60\), \(P=34\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>With \(60\) m of fencing, what rectangle gives the most area?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(15\times15\), area \(225\) m².</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Which whole-number rectangle of area \(16\) m² has the least perimeter?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(4\times4\), \(P=16\) m.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>A \(8\times8\) m patio has a \(2\times3\) m planter removed. Find the paved area.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(64-6=58\) m².</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>Surface area of a closed \(5\times4\times3\) box?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(2(20+15+12)=94\) cm².</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: What shape maximizes area for fixed perimeter?</h3><p><em>A square.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: How do you model the area in a fencing problem?</h3><p><em>Write one side as \(x\), the other from the perimeter, then \(A=x(\dots)\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: How do you find a composite area?</h3><p><em>Add the pieces; subtract any holes.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: What is a net good for?</h3><p><em>Seeing every face, so you can total the surface area.</em></p></div>
</div>`),
  graph("x*(p-x)", "p", { xMin: 0, xMax: 30, yMin: 0, yMax: 230, paramMin: 10, paramMax: 30, paramInit: 20, caption: "Animation: area x(p−x) for half-perimeter p. The maximum is always at the square, x = p/2." }),
]);

u4["4.3"] = L("4.3", "The Sine Law", [
  html(String.raw`<div class="lecture-box">
  <h1>🔺 The Sine Law</h1>
  <p><strong>Overview.</strong> Most triangles have no right angle. The <strong>sine law</strong> solves them whenever you can pair a side with the angle <em>directly across from it</em>: the ratio of each side to the sine of its opposite angle is the same throughout the triangle.</p>
  <h2>📌 The law</h2>
  <ul>
    <li>\(\dfrac{a}{\sin A}=\dfrac{b}{\sin B}=\dfrac{c}{\sin C}\).</li>
    <li><strong>Use it when</strong> you have a side and its opposite angle, plus one more side or angle.</li>
    <li>Need the third angle? The three angles sum to \(180^\circ\).</li>
  </ul>
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Find a side</h3><p>\(A=40^\circ,\ a=10,\ B=60^\circ\). Find \(b\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\dfrac{b}{\sin B}=\dfrac{a}{\sin A}\Rightarrow b=\dfrac{10\sin60^\circ}{\sin40^\circ}\).</div><em>Conclusion: \(\approx13.5\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Find the third angle first</h3><p>\(A=50^\circ,\ B=70^\circ,\ a=8\). Find \(b\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> No work needed for the pairing — apply directly: \(b=\dfrac{8\sin70^\circ}{\sin50^\circ}\).</div><em>Conclusion: \(\approx9.81\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: Find an angle</h3><p>\(a=8,\ A=50^\circ,\ b=6\). Find \(B\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\sin B=\dfrac{b\sin A}{a}=\dfrac{6\sin50^\circ}{8}\approx0.5745\).</div><div class="step"><strong>Step 2:</strong> \(B=\sin^{-1}(0.5745)\).</div><em>Conclusion: \(B\approx35.1^\circ\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: Two angles and a side</h3><p>\(A=45^\circ,\ B=60^\circ,\ a=12\). Find \(c\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(C=180^\circ-45^\circ-60^\circ=75^\circ\).</div><div class="step"><strong>Step 2:</strong> \(c=\dfrac{12\sin75^\circ}{\sin45^\circ}\).</div><em>Conclusion: \(\approx16.4\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: Application (distance)</h3><p>From two points \(50\) m apart, the angles to a tree are \(70^\circ\) and \(60^\circ\). The angle at the tree is \(50^\circ\). Find the distance from the first point to the tree.</p><div class="solution"><div class="step"><strong>Step 1:</strong> The side opposite the \(50^\circ\) tree angle is \(50\) m; the wanted side is opposite \(60^\circ\).</div><div class="step"><strong>Step 2:</strong> \(d=\dfrac{50\sin60^\circ}{\sin50^\circ}\).</div><em>Conclusion: \(\approx56.5\) m. ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>\(A=30^\circ,\ a=5,\ B=80^\circ\). Find \(b\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\dfrac{5\sin80^\circ}{\sin30^\circ}\approx9.85\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>If \(A=40^\circ\) and \(B=75^\circ\), find \(C\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(65^\circ\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>\(A=60^\circ,\ a=10,\ B=40^\circ\). Find \(b\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\dfrac{10\sin40^\circ}{\sin60^\circ}\approx7.42\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>\(a=10,\ A=70^\circ,\ b=8\). Find \(B\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\sin B=\tfrac{8\sin70^\circ}{10}\approx0.7518\Rightarrow B\approx48.8^\circ\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>When is the sine law the right tool?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>When you have a side and the angle opposite it.</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: What pairs go together?</h3><p><em>Each side with the angle directly across from it.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: When should I use the sine law?</h3><p><em>When I have a complete side–angle pair plus one more piece.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: How do I find a missing angle?</h3><p><em>Cross-multiply, then take \(\sin^{-1}\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: What if I only have two angles?</h3><p><em>Use the \(180^\circ\) sum to get the third, then a side.</em></p></div>
</div>`),
  graph("k*sin(x*pi/180)", "k", { xMin: 0, xMax: 180, yMin: 0, yMax: 2, paramMin: 1, paramMax: 2, paramInit: 1, caption: "Animation: sine stays positive across 0°–180°, so the ratios in the sine law are valid for every triangle angle." }),
]);

u4["4.4"] = L("4.4", "The Cosine Law", [
  html(String.raw`<div class="lecture-box">
  <h1>🔻 The Cosine Law</h1>
  <p><strong>Overview.</strong> When you <em>can't</em> pair a side with its opposite angle — you have two sides and the angle <strong>between</strong> them (SAS), or all three sides (SSS) — the <strong>cosine law</strong> takes over. It is the Pythagorean theorem plus a correction \(-2ab\cos C\) for the angle not being \(90^\circ\).</p>
  <h2>📌 The law</h2>
  <ul>
    <li><strong>Find a side (SAS):</strong> \(c^2=a^2+b^2-2ab\cos C\).</li>
    <li><strong>Find an angle (SSS):</strong> \(\cos C=\dfrac{a^2+b^2-c^2}{2ab}\), then \(C=\cos^{-1}(\dots)\).</li>
    <li>When \(C=90^\circ\), \(\cos C=0\) and it collapses to \(c^2=a^2+b^2\) — plain Pythagoras.</li>
  </ul>
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Find a side (SAS)</h3><p>\(a=7,\ b=9,\ C=50^\circ\). Find \(c\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(c^2=49+81-2(7)(9)\cos50^\circ\approx130-80.99\).</div><em>Conclusion: \(c\approx7.0\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Find an angle (SSS)</h3><p>\(a=5,\ b=6,\ c=7\). Find \(C\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\cos C=\dfrac{25+36-49}{2(5)(6)}=\dfrac{12}{60}=0.2\).</div><em>Conclusion: \(C=\cos^{-1}(0.2)\approx78.5^\circ\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: Largest angle of a triangle</h3><p>For sides \(4,5,6\), find the largest angle.</p><div class="solution"><div class="step"><strong>Step 1:</strong> The largest angle is opposite the longest side (\(6\)).</div><div class="step"><strong>Step 2:</strong> \(\cos C=\dfrac{16+25-36}{2(4)(5)}=\dfrac{5}{40}=0.125\Rightarrow C\approx82.8^\circ\).</div><em>Conclusion: \(\approx82.8^\circ\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: Choose the right law</h3><p>You know \(a=8,\ c=11,\ B=35^\circ\). Which law finds \(b\)?</p><div class="solution"><div class="step"><strong>Step 1:</strong> You have two sides and the angle <em>between</em> them (SAS) — no side–angle pair.</div><em>Conclusion: use the cosine law: \(b^2=8^2+11^2-2(8)(11)\cos35^\circ\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: Application (two roads)</h3><p>Two roads leave a town at a \(60^\circ\) angle. A car drives \(40\) km on one and \(30\) km on the other. How far apart are the cars?</p><div class="solution"><div class="step"><strong>Step 1:</strong> SAS with the \(60^\circ\) between the \(40\) and \(30\): \(d^2=40^2+30^2-2(40)(30)\cos60^\circ\).</div><div class="step"><strong>Step 2:</strong> \(=1600+900-2400(0.5)=1300\).</div><em>Conclusion: \(d=\sqrt{1300}\approx36.1\) km. ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>\(a=6,\ b=8,\ C=60^\circ\). Find \(c\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(c^2=36+64-96(0.5)=52\Rightarrow c\approx7.21\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>\(a=4,\ b=5,\ c=6\). Find the angle opposite \(c\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\cos C=\tfrac{16+25-36}{40}=0.125\Rightarrow\approx82.8^\circ\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Which law: you know all three sides and want an angle?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>The cosine law (SSS).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>\(a=10,\ b=7,\ C=45^\circ\). Find \(c\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(c^2=100+49-140\cos45^\circ\approx49.0\Rightarrow c\approx7.0\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>Why is the cosine law "Pythagoras with a correction"?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>The \(-2ab\cos C\) term vanishes when \(C=90^\circ\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: When do you use the cosine law?</h3><p><em>SAS (two sides + included angle) or SSS (three sides).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: How do you find an angle from three sides?</h3><p><em>\(\cos C=\dfrac{a^2+b^2-c^2}{2ab}\), then \(\cos^{-1}\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: Where is the largest angle?</h3><p><em>Opposite the longest side.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: Sine law or cosine law?</h3><p><em>Sine law needs an opposite pair; otherwise reach for the cosine law.</em></p></div>
</div>`),
  graph("k*cos(x*pi/180)", "k", { xMin: 0, xMax: 180, yMin: -2, yMax: 2, paramMin: 1, paramMax: 2, paramInit: 1, caption: "Animation: cosine is positive below 90° and negative above — that sign is how the cosine law detects an obtuse angle." }),
]);
