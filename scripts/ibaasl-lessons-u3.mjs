// IB Math AA SL — Unit 3: Geometry & Trigonometry. Original content and examples.
// Pitched slightly above Units 1-2: multi-step setups, ambiguous-case/segment/
// identity-proof style questions typical of harder SL exam papers.
import { html, gframe } from "./seed-mpm2d.mjs";
const L = (code, title, blocks) => ({ code, title, blocks });
const EX = `style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const PR = `style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const QA = `style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
export const u3 = {};

u3["3.1"] = L("3.1", "3D Geometry: Volume, Surface Area & Distance", [
  html(String.raw`<div class="lecture-box">
  <h1>📦 3D Geometry: Volume, Surface Area &amp; Distance</h1>
  <p><strong>Overview.</strong> This lesson extends coordinate geometry and trigonometry into three dimensions: measuring distances between points in space, finding volumes and surface areas of solids (including composite ones), and finding angles between a diagonal and a face.</p>
  <h2>📌 3D Distance Formula</h2>
  <p style="text-align:center;">\( d = \sqrt{(x_2-x_1)^2+(y_2-y_1)^2+(z_2-z_1)^2} \)</p>
  <h2>📌 Volume &amp; Surface Area (formula-booklet results)</h2>
  <p>Cone: \(V=\tfrac13\pi r^2h\), \(A_{\text{curved}}=\pi rl\) (\(l\) = slant height). Sphere: \(V=\tfrac43\pi r^3\), \(A=4\pi r^2\). Pyramid: \(V=\tfrac13 \times \text{base area} \times h\).</p>
  <h2>📌 Angle Between a Diagonal and a Face</h2>
  <p>Find the diagonal of the base face first, then use right-triangle trigonometry on the vertical rise and that base diagonal to get the angle the space diagonal makes with the base.</p>
  <div style="text-align:center;margin:14px 0;">
    <svg viewBox="0 0 240 190" width="260" xmlns="http://www.w3.org/2000/svg">
      <polygon points="40,160 160,160 160,60 40,60" fill="none" stroke="#333" stroke-width="1.5"/>
      <polygon points="40,60 160,60 200,30 80,30" fill="none" stroke="#333" stroke-width="1.5"/>
      <polygon points="160,160 160,60 200,30 200,130" fill="none" stroke="#333" stroke-width="1.5"/>
      <line x1="40" y1="160" x2="200" y2="130" stroke="#999" stroke-width="1.2" stroke-dasharray="4 3"/>
      <line x1="40" y1="160" x2="200" y2="30" stroke="#2e7d32" stroke-width="2"/>
      <text x="12" y="115" font-size="12" fill="#222">h</text>
      <text x="95" y="176" font-size="12" fill="#222">l</text>
      <text x="185" y="150" font-size="12" fill="#222">w</text>
      <text x="118" y="128" font-size="12" fill="#2e7d32">θ</text>
      <text x="110" y="55" font-size="11" fill="#666">space diagonal (green)</text>
    </svg>
    <div style="font-size:0.85em;color:#555;">a rectangular box, with the space diagonal (green) and its angle θ with the base</div>
  </div>
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}>
    <h3>Example 1</h3><p>Find the distance between \(P(1,-2,3)\) and \(Q(4,2,-1)\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(d=\sqrt{(4-1)^2+(2-(-2))^2+(-1-3)^2}\).</div>
      <div class="step"><strong>Step 2:</strong> \(d=\sqrt{9+16+16}=\sqrt{41}\).</div>
      <em>Conclusion: \(d=\sqrt{41}\approx6.40\). ✓</em>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 2 — composite solid</h3><p>A silo cap is a cone of base radius \(3\) m and height \(4\) m, joined to a hemisphere of the same radius. Find the total exposed curved surface area (exclude the shared circular base).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Find the cone's slant height: \(l=\sqrt{r^2+h^2}=\sqrt{9+16}=5\) m.</div>
      <div class="step"><strong>Step 2:</strong> Cone curved area: \(A_{\text{cone}}=\pi rl=\pi(3)(5)=15\pi\).</div>
      <div class="step"><strong>Step 3:</strong> Hemisphere curved area is half a sphere's surface: \(A_{\text{hemi}}=\tfrac12(4\pi r^2)=2\pi(9)=18\pi\).</div>
      <em>Conclusion: total curved area \(=15\pi+18\pi=33\pi\approx103.7\text{ m}^2\). ✓</em>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 3</h3><p>A square-based pyramid has base side \(6\) cm and volume \(96\) cm³. Find its height.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Base area \(=6^2=36\) cm². Use \(V=\tfrac13\times\text{base area}\times h\).</div>
      <div class="step"><strong>Step 2:</strong> \(96=\tfrac13(36)h=12h\).</div>
      <em>Conclusion: \(h=8\) cm. ✓</em>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 4 — angle between a diagonal and a face</h3><p>A rectangular box has length \(8\) cm, width \(6\) cm, and height \(5\) cm. Find the angle the space diagonal makes with the base.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Find the base diagonal first: \(\sqrt{8^2+6^2}=\sqrt{100}=10\) cm.</div>
      <div class="step"><strong>Step 2:</strong> The space diagonal, the base diagonal, and the vertical height \(5\) form a right triangle, with the height opposite the required angle \(\theta\) and the base diagonal adjacent.</div>
      <div class="step"><strong>Step 3:</strong> \(\tan\theta=\dfrac{5}{10}=0.5 \Rightarrow \theta=\tan^{-1}(0.5)\).</div>
      <em>Conclusion: \(\theta\approx26.6°\). ✓</em>
    </div>
  </div>
  <div class="example-box" style="background-color:#fff0f5;border-left:5px solid #c2185b;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>⭐ Advanced Example — solving for an unknown dimension</h3><p>A grain silo is a cylinder of radius \(r\) and height \(10\) m, topped with a hemisphere of the same radius. Its total volume is \(500\pi\) m³. Find \(r\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Cylinder volume: \(\pi r^2(10)\). Hemisphere volume: \(\tfrac12\left(\tfrac43\pi r^3\right)=\tfrac23\pi r^3\).</div>
      <div class="step"><strong>Step 2:</strong> Total: \(10\pi r^2+\tfrac23\pi r^3=500\pi\). Divide by \(\pi\): \(10r^2+\tfrac23r^3=500\).</div>
      <div class="step"><strong>Step 3:</strong> Multiply by 3: \(30r^2+2r^3=1500\). Testing \(r=5\): \(30(25)+2(125)=750+250=1000\) — too small. Testing \(r=6\): \(30(36)+2(216)=1080+432=1512\) — very close.</div>
      <em>Conclusion: \(r\approx6\) m (solving numerically/graphically, as this cubic doesn't factor nicely — exactly the kind of equation a GDC handles quickly). ✓</em>
    </div>
  </div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Find the distance between \(A(0,0,0)\) and \(B(6,-3,2)\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \(\sqrt{36+9+4}=\sqrt{49}=7\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Find the volume of a cone with radius 4 cm and height 9 cm.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \(V=\tfrac13\pi(16)(9)=48\pi\approx150.8\text{ cm}^3\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>A sphere has surface area \(144\pi\) cm². Find its radius.</p><details><summary>View answer</summary><div class="solution"><div class="step">$4\pi r^2=144\pi\Rightarrow r^2=36$. <em>Answer: \(r=6\) cm.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>A box has length 12 cm, width 9 cm, height 8 cm. Find the length of the space diagonal.</p><details><summary>View answer</summary><div class="solution"><div class="step">Base diagonal $=\sqrt{144+81}=15$; space diagonal $=\sqrt{15^2+8^2}=\sqrt{289}$. <em>Answer: \(17\) cm.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5 — Challenge</h3><p>Find the angle the space diagonal of a cube with side \(10\) cm makes with the base.</p><details><summary>View answer</summary><div class="solution"><div class="step">Base diagonal $=10\sqrt2$; $\tan\theta=\dfrac{10}{10\sqrt2}=\dfrac{1}{\sqrt2}$. <em>Answer: \(\theta=\tan^{-1}\!\left(\tfrac{1}{\sqrt2}\right)\approx35.3°\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: How is the 3D distance formula related to the 2D one?</h3><p><em>It's the same Pythagorean idea with one more squared difference added for the \(z\)-coordinate.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: What's the general strategy for a diagonal-and-face angle question?</h3><p><em>Find the base diagonal first (a 2D right triangle), then build a second right triangle using that diagonal and the height.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: For a composite solid, what surfaces do I include?</h3><p><em>Only the surfaces actually exposed to the outside — any face where two solids join internally is excluded.</em></p></div>
</div>`),
]);

u3["3.2"] = L("3.2", "Right-Triangle Trigonometry", [
  html(String.raw`<div class="lecture-box">
  <h1>📐 Right-Triangle Trigonometry</h1>
  <p><strong>Overview.</strong> SOH-CAH-TOA solves single right triangles, but many real problems need two right triangles chained together — an elevation from two points, or a building with a flagpole on top. This lesson builds those multi-step setups.</p>
  <h2>📌 The Ratios</h2>
  <p style="text-align:center;">\( \sin\theta=\dfrac{\text{opp}}{\text{hyp}}, \quad \cos\theta=\dfrac{\text{adj}}{\text{hyp}}, \quad \tan\theta=\dfrac{\text{opp}}{\text{adj}} \)</p>
  <h2>📌 Two-Triangle Setups</h2>
  <p>When a problem gives two angles from two different positions, it usually means <strong>two right triangles share a common side</strong> (often the unknown height). Write an equation for each triangle, then solve the resulting system.</p>
  <div style="text-align:center;margin:14px 0;">
    <svg viewBox="0 0 260 150" width="280" xmlns="http://www.w3.org/2000/svg">
      <line x1="20" y1="130" x2="230" y2="130" stroke="#333" stroke-width="1.5"/>
      <line x1="200" y1="130" x2="200" y2="20" stroke="#333" stroke-width="1.5"/>
      <line x1="20" y1="130" x2="200" y2="20" stroke="#2e7d32" stroke-width="1.5"/>
      <line x1="90" y1="130" x2="200" y2="20" stroke="#4a90e2" stroke-width="1.5"/>
      <text x="205" y="70" font-size="12" fill="#222">h</text>
      <text x="30" y="122" font-size="11" fill="#2e7d32">α</text>
      <text x="98" y="122" font-size="11" fill="#4a90e2">β</text>
      <text x="45" y="145" font-size="11" fill="#666">far point</text>
      <text x="150" y="145" font-size="11" fill="#666">near point</text>
    </svg>
    <div style="font-size:0.85em;color:#555;">two angles of elevation, α and β, to the same tower top from two ground positions</div>
  </div>
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}>
    <h3>Example 1</h3><p>A ramp rises \(1.4\) m over a horizontal run of \(9\) m. Find its angle of inclination.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(\tan\theta=\dfrac{1.4}{9}\).</div>
      <em>Conclusion: \(\theta=\tan^{-1}(0.1\overline{5})\approx8.9°\). ✓</em>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 2 — offset eye height</h3><p>A person whose eyes are \(1.6\) m above the ground stands \(20\) m from a tower and measures an angle of elevation of \(35°\) to the top. Find the tower's height.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> The right triangle's opposite side is the height <em>above eye level</em>: \(x=20\tan(35°)\).</div>
      <div class="step"><strong>Step 2:</strong> \(x\approx14.0\) m.</div>
      <em>Conclusion: total height \(=14.0+1.6=15.6\) m. ✓ (the eye-height offset must be added back at the end)</em>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 3 — two-step angle of depression</h3><p>From the top of a \(50\) m cliff, the angle of depression to a boat is \(18°\). The boat then sails directly away from the cliff until the angle of depression is \(9°\). Find how far the boat travelled.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Initial distance: \(\tan(18°)=\dfrac{50}{d_1} \Rightarrow d_1=\dfrac{50}{\tan(18°)}\approx153.9\) m.</div>
      <div class="step"><strong>Step 2:</strong> New distance: \(d_2=\dfrac{50}{\tan(9°)}\approx315.5\) m.</div>
      <em>Conclusion: distance travelled \(=d_2-d_1\approx161.6\) m. ✓</em>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 4 — flagpole on a building</h3><p>A flagpole of length \(4\) m stands on top of a building. From a point on the ground, the angle of elevation to the base of the flagpole is \(40°\), and to the top of the flagpole is \(46°\). Find the height of the building.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Let \(d\) = horizontal distance, \(h\) = building height. From the base angle: \(\tan(40°)=\dfrac{h}{d}\).</div>
      <div class="step"><strong>Step 2:</strong> From the top angle: \(\tan(46°)=\dfrac{h+4}{d}\).</div>
      <div class="step"><strong>Step 3:</strong> From the first equation, \(d=\dfrac{h}{\tan(40°)}\). Substitute: \(\tan(46°)=\dfrac{h+4}{h/\tan(40°)} = \dfrac{(h+4)\tan(40°)}{h}\).</div>
      <div class="step"><strong>Step 4:</strong> Solve: \(h\tan(46°)=(h+4)\tan(40°) \Rightarrow h\big(\tan(46°)-\tan(40°)\big)=4\tan(40°)\).</div>
      <em>Conclusion: \(h=\dfrac{4\tan(40°)}{\tan(46°)-\tan(40°)}\approx\dfrac{3.356}{0.196}\approx17.1\) m. ✓</em>
    </div>
  </div>
  <div class="example-box" style="background-color:#fff0f5;border-left:5px solid #c2185b;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>⭐ Advanced Example — resolving a bearing into components</h3><p>A hiker walks \(12\) km on a bearing of \(070°\). Find how far north and how far east she has travelled.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> A bearing of \(070°\) is measured clockwise from north, so it makes a \(70°\) angle with the north direction, and the "east" and "north" displacements form a right triangle with the \(12\) km path as hypotenuse.</div>
      <div class="step"><strong>Step 2:</strong> East component (opposite the bearing angle): \(12\sin(70°)\approx11.28\) km.</div>
      <div class="step"><strong>Step 3:</strong> North component (adjacent): \(12\cos(70°)\approx4.10\) km.</div>
      <em>Conclusion: about \(4.10\) km north and \(11.28\) km east. ✓</em>
    </div>
  </div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Find the angle of elevation to the top of a 25 m tower from a point 40 m away.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \(\tan^{-1}(25/40)\approx32.0°\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>A person with eyes at 1.5 m stands 30 m from a tree and sees the top at an elevation angle of 22°. Find the tree's height.</p><details><summary>View answer</summary><div class="solution"><div class="step">$30\tan22°\approx12.12$. <em>Answer: \(\approx13.6\) m.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>From a cliff top of height 80 m, the angle of depression to a buoy is 12°. Find the horizontal distance to the buoy.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \(80/\tan12°\approx376.3\) m.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>A plane flies 200 km on a bearing of 150°. Find its distance south and east of its starting point.</p><details><summary>View answer</summary><div class="solution"><div class="step">Angle from south is $180°-150°=30°$ on the other side, or resolve directly. <em>Answer: south $=200\cos30°\approx173.2$ km, east $=200\sin30°=100$ km.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5 — Challenge</h3><p>From two points 60 m apart on a straight line from the base of a tower, the angles of elevation to the top are 25° (far point) and 40° (near point). Find the tower's height.</p><details><summary>View answer</summary><div class="solution"><div class="step">$h/\tan25°-h/\tan40°=60\Rightarrow h(1/\tan25°-1/\tan40°)=60\Rightarrow h(2.1445-1.1918)=60$. <em>Answer: \(h\approx63.0\) m.</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: What's the giveaway that a problem needs two right triangles?</h3><p><em>Two angles (or two positions) are given for the same unknown height or distance.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: How do I handle an observer's eye height?</h3><p><em>Solve for the height above eye level using the triangle, then add the eye height back at the end.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: How do bearings connect to right-triangle trig?</h3><p><em>A bearing measured from north lets you resolve a distance into north/south and east/west right-triangle components using sine and cosine.</em></p></div>
</div>`),
]);

u3["3.3"] = L("3.3", "The Sine Rule & Cosine Rule", [
  html(String.raw`<div class="lecture-box">
  <h1>🔺 The Sine Rule &amp; Cosine Rule</h1>
  <p><strong>Overview.</strong> Right-triangle trig only works when there's a right angle. The <strong>sine rule</strong> and <strong>cosine rule</strong> handle any triangle — including the tricky <em>ambiguous case</em>, where two different triangles both fit the given information.</p>
  <h2>📌 The Sine Rule</h2>
  <p style="text-align:center;">\( \dfrac{a}{\sin A}=\dfrac{b}{\sin B}=\dfrac{c}{\sin C} \)</p>
  <h2>📌 The Cosine Rule</h2>
  <p style="text-align:center;">\( a^2=b^2+c^2-2bc\cos A \qquad \cos A=\dfrac{b^2+c^2-a^2}{2bc} \)</p>
  <h2>📌 Area of a Triangle</h2>
  <p style="text-align:center;">\( \text{Area}=\tfrac12ab\sin C \)</p>
  <h2>📌 The Ambiguous Case (SSA)</h2>
  <p>Given two sides and a non-included angle, there can be <strong>two</strong> valid triangles — because \(\sin\theta\) and \(\sin(180°-\theta)\) are equal. Always check whether the second solution's angle sum still works.</p>
  <div style="text-align:center;margin:14px 0;">
    <svg viewBox="0 0 280 160" width="300" xmlns="http://www.w3.org/2000/svg">
      <line x1="30" y1="130" x2="250" y2="130" stroke="#333" stroke-width="1.5"/>
      <line x1="30" y1="130" x2="150" y2="30" stroke="#2e7d32" stroke-width="1.5"/>
      <line x1="150" y1="30" x2="230" y2="130" stroke="#2e7d32" stroke-width="1.5"/>
      <line x1="150" y1="30" x2="100" y2="130" stroke="#4a90e2" stroke-width="1.5" stroke-dasharray="4 3"/>
      <circle cx="150" cy="30" r="2.5" fill="#222"/>
      <text x="140" y="20" font-size="11" fill="#222">C</text>
      <text x="20" y="145" font-size="11" fill="#222">A</text>
      <text x="90" y="145" font-size="11" fill="#4a90e2">B'</text>
      <text x="235" y="145" font-size="11" fill="#2e7d32">B</text>
      <text x="70" y="75" font-size="10" fill="#666">two possible</text>
      <text x="70" y="88" font-size="10" fill="#666">triangles from</text>
      <text x="70" y="101" font-size="10" fill="#666">the same given info</text>
    </svg>
    <div style="font-size:0.85em;color:#555;">the ambiguous case: side CB' (dashed) and side CB both satisfy the same given angle A and side lengths</div>
  </div>
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}>
    <h3>Example 1</h3><p>In triangle \(ABC\), \(A=40°\), \(B=65°\), \(a=12\). Find \(b\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(\dfrac{12}{\sin40°}=\dfrac{b}{\sin65°}\).</div>
      <em>Conclusion: \(b=\dfrac{12\sin65°}{\sin40°}\approx16.9\). ✓</em>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 2</h3><p>A triangle has sides \(a=7\), \(b=9\), \(c=13\). Find the largest angle.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> The largest angle is opposite the longest side, \(c\), so find \(C\): \(\cos C=\dfrac{7^2+9^2-13^2}{2(7)(9)}=\dfrac{49+81-169}{126}=\dfrac{-39}{126}\).</div>
      <em>Conclusion: \(C=\cos^{-1}(-0.3095)\approx108.0°\) — obtuse, as the negative cosine warned. ✓</em>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 3 — the ambiguous case</h3><p>In triangle \(ABC\), \(A=30°\), \(a=6\), \(b=10\). Find both possible values of angle \(B\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(\dfrac{6}{\sin30°}=\dfrac{10}{\sin B} \Rightarrow \sin B=\dfrac{10\sin30°}{6}=\dfrac{5}{6}\).</div>
      <div class="step"><strong>Step 2:</strong> \(B_1=\sin^{-1}\!\left(\tfrac56\right)\approx56.4°\).</div>
      <div class="step"><strong>Step 3:</strong> The second solution: \(B_2=180°-56.4°=123.6°\). Check: \(A+B_2=30°+123.6°=153.6°<180°\), so it's valid too.</div>
      <em>Conclusion: \(B\approx56.4°\) or \(B\approx123.6°\) — both triangles exist. ✓</em>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 4</h3><p>Find the area of triangle \(ABC\) where \(a=8\), \(b=11\), and the angle between them is \(C=52°\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Area \(=\tfrac12(8)(11)\sin52°\).</div>
      <em>Conclusion: Area \(\approx34.7\) square units. ✓</em>
    </div>
  </div>
  <div class="example-box" style="background-color:#fff0f5;border-left:5px solid #c2185b;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>⭐ Advanced Example — two-leg navigation</h3><p>A ship sails \(40\) km on a bearing of \(060°\), then \(55\) km on a bearing of \(150°\). Find the direct distance back to the starting point.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> The angle between the two legs (the interior angle of the travel triangle) is the difference between the bearings measured the right way around: \(150°-60°=90°\) — the two legs happen to be perpendicular here.</div>
      <div class="step"><strong>Step 2:</strong> Apply the cosine rule with this \(90°\) included angle: \(d^2=40^2+55^2-2(40)(55)\cos90°\).</div>
      <div class="step"><strong>Step 3:</strong> Since \(\cos90°=0\), this reduces to \(d^2=1600+3025=4625\).</div>
      <em>Conclusion: \(d=\sqrt{4625}\approx68.0\) km. ✓ (a perpendicular turn reduces the cosine rule to Pythagoras — a useful check)</em>
    </div>
  </div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>In triangle \(ABC\), \(A=50°\), \(C=75°\), \(c=20\). Find \(a\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \(a=\dfrac{20\sin50°}{\sin75°}\approx15.9\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>A triangle has sides 5, 6, 9. Find the largest angle.</p><details><summary>View answer</summary><div class="solution"><div class="step">$\cos C=\dfrac{25+36-81}{60}=\dfrac{-20}{60}$. <em>Answer: \(\approx109.5°\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>In triangle \(ABC\), \(A=35°\), \(a=9\), \(b=14\). Determine whether the ambiguous case applies, and if so, find both values of \(B\).</p><details><summary>View answer</summary><div class="solution"><div class="step">$\sin B=\dfrac{14\sin35°}{9}\approx0.893$. <em>Answer: \(B\approx63.2°\) or \(B\approx116.8°\); both are valid since $A+B_2<180°$.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Find the area of a triangle with sides 6 and 10 and an included angle of 110°.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: $\tfrac12(6)(10)\sin110°\approx28.2$ square units.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5 — Challenge</h3><p>A hiker walks 3 km on a bearing of 040°, then 5 km on a bearing of 110°. Find the direct distance back to the start.</p><details><summary>View answer</summary><div class="solution"><div class="step">Included angle $=110°-40°=70°$. $d^2=9+25-2(3)(5)\cos70°\approx34-10.26=23.74$. <em>Answer: \(d\approx4.87\) km.</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: When should I use the sine rule vs the cosine rule?</h3><p><em>Sine rule when you have an angle-side matching pair; cosine rule when you have three sides, or two sides and the included angle.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: How do I know if the ambiguous case applies?</h3><p><em>It only arises with the sine rule when given two sides and a non-included angle (SSA) — always check whether the supplementary angle also produces a valid triangle.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: Why does a negative cosine value make sense for an angle?</h3><p><em>Cosine is negative for obtuse angles (between 90° and 180°), so it's a built-in signal, not an error.</em></p></div>
</div>`),
]);

u3["3.4"] = L("3.4", "Radian Measure, Arcs & Sectors", [
  html(String.raw`<div class="lecture-box">
  <h1>🥧 Radian Measure, Arcs &amp; Sectors</h1>
  <p><strong>Overview.</strong> Radians measure angles by arc length rather than degrees, which is what makes calculus with trig functions work cleanly later in the course. This lesson also covers arc length, sector area, and the trickier <strong>segment</strong> area.</p>
  <h2>📌 Radian Conversion</h2>
  <p style="text-align:center;">\( 180° = \pi \text{ radians} \)</p>
  <h2>📌 Arc Length &amp; Sector Area</h2>
  <p style="text-align:center;">\( s=r\theta \qquad A_{\text{sector}}=\tfrac12r^2\theta \) \(\quad\) (\(\theta\) in radians)</p>
  <h2>📌 Segment Area</h2>
  <p>A <strong>segment</strong> is the region between a chord and its arc — a sector with the triangular piece removed:</p>
  <p style="text-align:center;">\( A_{\text{segment}} = \tfrac12r^2\theta - \tfrac12r^2\sin\theta = \tfrac12r^2(\theta-\sin\theta) \)</p>
  <div style="text-align:center;margin:14px 0;">
    <svg viewBox="0 0 240 200" width="240" xmlns="http://www.w3.org/2000/svg">
      <circle cx="120" cy="100" r="80" fill="none" stroke="#ccc" stroke-width="1"/>
      <path d="M 120 100 L 189 60 A 80 80 0 0 1 155 173 Z" fill="#dbeeff" stroke="#4a90e2" stroke-width="1.5"/>
      <line x1="189" y1="60" x2="155" y2="173" stroke="#2e7d32" stroke-width="1.5"/>
      <text x="122" y="90" font-size="11" fill="#222">θ</text>
      <text x="100" y="140" font-size="11" fill="#222">r</text>
      <text x="165" y="120" font-size="11" fill="#2e7d32">chord</text>
    </svg>
    <div style="font-size:0.85em;color:#555;">the shaded segment (blue) sits between the chord (green) and the arc</div>
  </div>
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}>
    <h3>Example 1</h3><p>Convert \(150°\) to radians, and \(\dfrac{5\pi}{6}\) radians to degrees.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(150° \times \dfrac{\pi}{180}=\dfrac{5\pi}{6}\) rad.</div>
      <div class="step"><strong>Step 2:</strong> \(\dfrac{5\pi}{6}\times\dfrac{180}{\pi}=150°\) (the reverse conversion, confirming they're the same angle).</div>
      <em>Conclusion: \(150°=\tfrac{5\pi}{6}\) rad. ✓</em>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 2</h3><p>An arc of length \(9\) cm is cut from a circle of radius \(4\) cm. Find the angle it subtends, in radians.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(s=r\theta \Rightarrow 9=4\theta\).</div>
      <em>Conclusion: \(\theta=2.25\) rad (about \(128.9°\)). ✓</em>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 3</h3><p>A sector has area \(30\) cm² and angle \(\dfrac{2\pi}{3}\) rad. Find the radius.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(30=\tfrac12r^2\left(\tfrac{2\pi}{3}\right)=\tfrac{\pi}{3}r^2\).</div>
      <div class="step"><strong>Step 2:</strong> \(r^2=\dfrac{90}{\pi}\approx28.65\).</div>
      <em>Conclusion: \(r\approx5.35\) cm. ✓</em>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 4 — segment area</h3><p>Find the area of the segment cut off by a chord in a circle of radius \(10\) cm, where the chord subtends an angle of \(\dfrac{\pi}{3}\) at the centre.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Sector area: \(\tfrac12(10)^2\left(\tfrac{\pi}{3}\right)=\tfrac{50\pi}{3}\approx52.36\) cm².</div>
      <div class="step"><strong>Step 2:</strong> Triangle area: \(\tfrac12(10)^2\sin\!\left(\tfrac{\pi}{3}\right)=50\left(\tfrac{\sqrt3}{2}\right)\approx43.30\) cm².</div>
      <em>Conclusion: segment area \(\approx52.36-43.30=9.06\) cm². ✓</em>
    </div>
  </div>
  <div class="example-box" style="background-color:#fff0f5;border-left:5px solid #c2185b;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>⭐ Advanced Example — composite shape</h3><p>A running track consists of a rectangle \(80\) m by \(30\) m, capped on each short end by a semicircular sector of radius \(15\) m (matching the rectangle's width). Find the total perimeter of the track.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> The two long straight sides contribute \(2(80)=160\) m.</div>
      <div class="step"><strong>Step 2:</strong> Each semicircular end has arc length \(s=r\theta=15(\pi)=15\pi\) m (using \(\theta=\pi\) for a half-turn); two ends give \(30\pi\) m.</div>
      <em>Conclusion: total perimeter \(=160+30\pi\approx160+94.25=254.25\) m. ✓ (the straight rectangle sides where the semicircles attach are internal, not part of the outer boundary)</em>
    </div>
  </div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Convert \(210°\) to radians as an exact multiple of \(\pi\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \(\dfrac{7\pi}{6}\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Find the arc length subtended by an angle of \(1.8\) rad in a circle of radius 7 cm.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \(12.6\) cm.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Find the area of a sector with radius 8 cm and angle \(\dfrac{\pi}{4}\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \(\tfrac12(64)\left(\tfrac{\pi}{4}\right)=8\pi\approx25.1\text{ cm}^2\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Find the segment area for a circle of radius 6 cm and central angle \(\dfrac{\pi}{2}\).</p><details><summary>View answer</summary><div class="solution"><div class="step">Sector $=\tfrac12(36)(\pi/2)=9\pi$; triangle $=\tfrac12(36)\sin(\pi/2)=18$. <em>Answer: \(9\pi-18\approx10.27\text{ cm}^2\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5 — Challenge</h3><p>A sector has perimeter (two radii plus the arc) equal to 26 cm and area 40 cm². Set up and solve for the radius \(r\) and angle \(\theta\).</p><details><summary>View answer</summary><div class="solution"><div class="step">$2r+r\theta=26$ and $\tfrac12r^2\theta=40\Rightarrow r\theta=\tfrac{80}{r}$. Substitute: $2r+\tfrac{80}{r}=26\Rightarrow2r^2-26r+80=0\Rightarrow r^2-13r+40=0\Rightarrow(r-5)(r-8)=0$. <em>Answer: \(r=5\) (giving \(\theta=3.2\) rad, valid since $<2\pi$) or \(r=8\) (giving \(\theta=1.25\) rad) — both are geometrically valid.</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: Why must \(\theta\) be in radians for \(s=r\theta\)?</h3><p><em>Radians are defined so that arc length equals radius times angle directly — degrees would need an extra conversion factor.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: How is segment area different from sector area?</h3><p><em>A segment is the sector with the enclosed triangle subtracted — it's bounded by the chord, not two straight radii.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: What's a quick way to remember common radian values?</h3><p><em>Memorize \(30°=\pi/6\), \(45°=\pi/4\), \(60°=\pi/3\), \(90°=\pi/2\), and \(180°=\pi\) — every other common angle is a multiple of these.</em></p></div>
</div>`),
]);

u3["3.5"] = L("3.5", "The Unit Circle & Trigonometric Identities", [
  html(String.raw`<div class="lecture-box">
  <h1>⭕ The Unit Circle &amp; Trigonometric Identities</h1>
  <p><strong>Overview.</strong> The unit circle defines sine and cosine for <em>any</em> angle, not just those inside a right triangle. Combined with the Pythagorean identity, it lets you find exact trig values in any quadrant and prove identities algebraically.</p>
  <h2>📌 Unit Circle Definitions</h2>
  <p>For an angle \(\theta\) measured from the positive \(x\)-axis, the point where the terminal ray meets the unit circle is \((\cos\theta,\sin\theta)\).</p>
  <div style="text-align:center;margin:14px 0;">
    <svg viewBox="0 0 240 240" width="230" xmlns="http://www.w3.org/2000/svg">
      <line x1="20" y1="120" x2="220" y2="120" stroke="#ccc" stroke-width="1"/>
      <line x1="120" y1="20" x2="120" y2="220" stroke="#ccc" stroke-width="1"/>
      <circle cx="120" cy="120" r="90" fill="none" stroke="#333" stroke-width="1.5"/>
      <line x1="120" y1="120" x2="184" y2="75" stroke="#2e7d32" stroke-width="1.5"/>
      <circle cx="184" cy="75" r="2.5" fill="#2e7d32"/>
      <text x="188" y="70" font-size="11" fill="#2e7d32">(cos θ, sin θ)</text>
      <text x="200" y="115" font-size="10" fill="#666">0°</text>
      <text x="105" y="18" font-size="10" fill="#666">90°</text>
      <text x="15" y="115" font-size="10" fill="#666">180°</text>
      <text x="105" y="235" font-size="10" fill="#666">270°</text>
      <text x="128" y="98" font-size="10" fill="#333">θ</text>
    </svg>
    <div style="font-size:0.85em;color:#555;">the unit circle — angle θ from the positive x-axis gives the point (cos θ, sin θ)</div>
  </div>
  <h2>📌 Key Identities</h2>
  <p style="text-align:center;">\( \sin^2\theta+\cos^2\theta=1 \qquad \tan\theta=\dfrac{\sin\theta}{\cos\theta} \)</p>
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}>
    <h3>Example 1</h3><p>Find the exact value of \(\cos(210°)\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(210°\) is in the third quadrant, \(30°\) past \(180°\), so its reference angle is \(30°\).</div>
      <div class="step"><strong>Step 2:</strong> In the third quadrant, cosine is negative.</div>
      <em>Conclusion: \(\cos(210°)=-\cos(30°)=-\dfrac{\sqrt3}{2}\). ✓</em>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 2 — quadrant + Pythagorean identity</h3><p>Given \(\cos\theta=-\dfrac35\) and \(\theta\) is in the third quadrant, find \(\sin\theta\) and \(\tan\theta\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(\sin^2\theta=1-\cos^2\theta=1-\dfrac{9}{25}=\dfrac{16}{25}\), so \(\sin\theta=\pm\dfrac45\).</div>
      <div class="step"><strong>Step 2:</strong> In the third quadrant, sine is also negative, so \(\sin\theta=-\dfrac45\).</div>
      <div class="step"><strong>Step 3:</strong> \(\tan\theta=\dfrac{\sin\theta}{\cos\theta}=\dfrac{-4/5}{-3/5}\).</div>
      <em>Conclusion: \(\sin\theta=-\dfrac45\), \(\tan\theta=\dfrac43\). ✓</em>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 3</h3><p>Prove that \((1-\cos x)(1+\cos x)=\sin^2x\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Expand the left side using difference of squares: \(1-\cos^2x\).</div>
      <div class="step"><strong>Step 2:</strong> By the Pythagorean identity, \(1-\cos^2x=\sin^2x\).</div>
      <em>Conclusion: LHS \(=\) RHS, so the identity holds. ✓</em>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 4 — harder identity proof</h3><p>Prove that \(\dfrac{\sin x}{1-\cos x}=\dfrac{1+\cos x}{\sin x}\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Cross-multiply: it suffices to show \(\sin^2x=(1-\cos x)(1+\cos x)\).</div>
      <div class="step"><strong>Step 2:</strong> The right side expands to \(1-\cos^2x\) by difference of squares.</div>
      <div class="step"><strong>Step 3:</strong> By the Pythagorean identity, \(1-\cos^2x=\sin^2x\), which matches the left side exactly.</div>
      <em>Conclusion: the cross-multiplied equation holds, so the original identity is true (for \(\sin x\neq0\), \(\cos x\neq1\)). ✓</em>
    </div>
  </div>
  <div class="example-box" style="background-color:#fff0f5;border-left:5px solid #c2185b;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>⭐ Advanced Example — from tan to sin+cos</h3><p>Given \(\tan\theta=2\) and \(\theta\) is in the third quadrant, find the exact value of \(\sin\theta+\cos\theta\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Build a reference triangle: opposite \(=2\), adjacent \(=1\), so hypotenuse \(=\sqrt{1^2+2^2}=\sqrt5\).</div>
      <div class="step"><strong>Step 2:</strong> In the third quadrant, both sine and cosine are negative: \(\sin\theta=-\dfrac{2}{\sqrt5}\), \(\cos\theta=-\dfrac{1}{\sqrt5}\).</div>
      <div class="step"><strong>Step 3:</strong> Add: \(-\dfrac{2}{\sqrt5}-\dfrac{1}{\sqrt5}=-\dfrac{3}{\sqrt5}\).</div>
      <em>Conclusion: \(\sin\theta+\cos\theta=-\dfrac{3}{\sqrt5}=-\dfrac{3\sqrt5}{5}\). ✓</em>
    </div>
  </div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Find the exact value of \(\sin(315°)\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \(-\dfrac{\sqrt2}{2}\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Given \(\sin\theta=\dfrac{5}{13}\) and \(\theta\) is in the second quadrant, find \(\cos\theta\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \(\cos\theta=-\dfrac{12}{13}\) (cosine negative in Q2).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Prove that \(\tan x \cdot \cos x=\sin x\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: $\tan x\cos x=\dfrac{\sin x}{\cos x}\cdot\cos x=\sin x$. ✓</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Prove that \(1-2\sin^2x=2\cos^2x-1\).</p><details><summary>View answer</summary><div class="solution"><div class="step">Both equal $\cos^2x-\sin^2x$ once $\sin^2x=1-\cos^2x$ (or vice versa) is substituted. <em>Answer: both sides simplify to \(\cos^2x-\sin^2x\). ✓</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5 — Challenge</h3><p>Given \(\cos\theta=-\dfrac{1}{3}\) and \(\theta\) is in the second quadrant, find the exact value of \(\tan\theta\).</p><details><summary>View answer</summary><div class="solution"><div class="step">$\sin^2\theta=1-\tfrac19=\tfrac89$, so $\sin\theta=\dfrac{2\sqrt2}{3}$ (positive in Q2). <em>Answer: \(\tan\theta=\dfrac{2\sqrt2/3}{-1/3}=-2\sqrt2\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: How do quadrant signs work for sin, cos, tan?</h3><p><em>All positive in Q1; only sine positive in Q2; only tangent positive in Q3; only cosine positive in Q4 (remember "All Students Take Calculus").</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: What's the go-to move for proving a trig identity?</h3><p><em>Rewrite everything in terms of sine and cosine, then look for a Pythagorean substitution or a difference-of-squares factorization.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: Why does knowing just \(\tan\theta\) and a quadrant pin down \(\sin\theta\) and \(\cos\theta\) exactly?</h3><p><em>The tangent ratio fixes the reference triangle's side lengths, and the quadrant then fixes the signs — together that's enough for an exact value.</em></p></div>
</div>`),
]);

u3["3.6"] = L("3.6", "Trigonometric Functions & Equations", [
  html(String.raw`<div class="lecture-box">
  <h1>🌊 Trigonometric Functions &amp; Equations</h1>
  <p><strong>Overview.</strong> Sine and cosine graphs model anything periodic — tides, temperatures, sound waves. This lesson covers reading a transformed trig graph, then solving trig equations, including the harder cases that need factoring or an identity substitution first.</p>
  <h2>📌 Transformed Trig Functions</h2>
  <p style="text-align:center;">\( y = a\sin(b(x-c))+d \)</p>
  <p>\(|a|\) = amplitude, \(\dfrac{2\pi}{b}\) = period, \(c\) = horizontal shift, \(d\) = vertical shift (midline).</p>
  <h2>📌 Solving Trig Equations</h2>
  <p>Find one solution using inverse trig, then use the unit circle's symmetry to find every solution inside the given domain. If the equation is <strong>quadratic in form</strong> (e.g. in \(\cos x\)), factor it like an ordinary quadratic first.</p>
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}>
    <h3>Example 1</h3><p>State the amplitude, period, and vertical shift of \(y=4\sin(2x)-1\), then sketch it.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Amplitude \(=|4|=4\). Period \(=\dfrac{2\pi}{2}=\pi\).</div>
      <div class="step"><strong>Step 2:</strong> Vertical shift (midline) \(=-1\), so the graph oscillates between \(y=-5\) and \(y=3\).</div>
      <em>Conclusion: amplitude 4, period π, midline y = −1. ✓</em>
      <div style="text-align:center;margin:10px 0;">${gframe(["y = 4*sin(2*x)-1"], { title: "y = 4sin(2x) − 1: amplitude 4, period π, midline y = −1", xMin: -6.3, xMax: 6.3, yMin: -6, yMax: 4 })}</div>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 2</h3><p>Solve \(\sin x=-0.6\) for \(0\leq x\leq2\pi\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> The reference angle is \(\sin^{-1}(0.6)\approx0.6435\) rad. Since \(\sin x\) is negative, the true solutions lie in quadrants III and IV.</div>
      <div class="step"><strong>Step 2:</strong> Q III: \(x=\pi+0.6435\approx3.785\). Q IV: \(x=2\pi-0.6435\approx5.640\).</div>
      <em>Conclusion: \(x\approx3.785\) or \(x\approx5.640\). ✓</em>
      <div style="text-align:center;margin:10px 0;">${gframe(["y = sin(x)", "y = -0.6"], { title: "y = sin x meets y = −0.6 twice on [0, 2π]", xMin: 0, xMax: 6.3, yMin: -1.5, yMax: 1.5 })}</div>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 3 — quadratic in cosine</h3><p>Solve \(2\cos^2x-\cos x-1=0\) for \(0\leq x\leq2\pi\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Let \(u=\cos x\): \(2u^2-u-1=0\), which factors as \((2u+1)(u-1)=0\).</div>
      <div class="step"><strong>Step 2:</strong> So \(\cos x=-\tfrac12\) or \(\cos x=1\).</div>
      <div class="step"><strong>Step 3:</strong> \(\cos x=-\tfrac12\): \(x=\tfrac{2\pi}{3}\) or \(x=\tfrac{4\pi}{3}\). \(\cos x=1\): \(x=0\) (and \(x=2\pi\), the same point on this domain).</div>
      <em>Conclusion: \(x=0,\ \tfrac{2\pi}{3},\ \tfrac{4\pi}{3},\ 2\pi\). ✓</em>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 4 — identity substitution first</h3><p>Solve \(2\sin^2x+\cos x=2\) for \(0\leq x\leq2\pi\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Replace \(\sin^2x\) using \(\sin^2x=1-\cos^2x\): \(2(1-\cos^2x)+\cos x=2\).</div>
      <div class="step"><strong>Step 2:</strong> Expand: \(2-2\cos^2x+\cos x=2 \Rightarrow -2\cos^2x+\cos x=0 \Rightarrow \cos x(1-2\cos x)=0\) (after factoring out \(-\cos x\) and flipping signs).</div>
      <div class="step"><strong>Step 3:</strong> \(\cos x=0\) gives \(x=\tfrac{\pi}{2},\tfrac{3\pi}{2}\). \(\cos x=\tfrac12\) gives \(x=\tfrac{\pi}{3},\tfrac{5\pi}{3}\).</div>
      <em>Conclusion: \(x=\tfrac{\pi}{3},\ \tfrac{\pi}{2},\ \tfrac{3\pi}{2},\ \tfrac{5\pi}{3}\). ✓</em>
    </div>
  </div>
  <div class="example-box" style="background-color:#fff0f5;border-left:5px solid #c2185b;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>⭐ Advanced Example — sinusoidal temperature model</h3><p>A city's average monthly temperature is modelled by \(T(m)=12\sin\!\left(\dfrac{\pi}{6}(m-4)\right)+15\), where \(m\) is the month number (\(1\leq m\leq12\)) and \(T\) is in °C. Find the first month in which the average temperature reaches \(21°\text{C}\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Set \(T(m)=21\): \(12\sin\!\left(\tfrac{\pi}{6}(m-4)\right)+15=21 \Rightarrow \sin\!\left(\tfrac{\pi}{6}(m-4)\right)=0.5\).</div>
      <div class="step"><strong>Step 2:</strong> The reference solution is \(\tfrac{\pi}{6}(m-4)=\tfrac{\pi}{6} \Rightarrow m-4=1 \Rightarrow m=5\); the next is \(\tfrac{\pi}{6}(m-4)=\tfrac{5\pi}{6}\Rightarrow m-4=5\Rightarrow m=9\).</div>
      <em>Conclusion: the temperature first reaches 21°C in month \(m=5\) (May). ✓</em>
      <div style="text-align:center;margin:10px 0;">${gframe(["y = 12*sin((pi/6)*(x-4))+15", "y = 21"], { title: "T(m) = 12 sin(π/6·(m−4)) + 15 first reaches 21°C at m = 5", xMin: 1, xMax: 12, yMin: 0, yMax: 28 })}</div>
    </div>
  </div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>State the amplitude, period, and midline of \(y=3\cos(4x)+2\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: amplitude 3, period $\pi/2$, midline $y=2$.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Solve \(\cos x=-0.8\) for \(0\leq x\leq2\pi\).</p><details><summary>View answer</summary><div class="solution"><div class="step">Reference angle $\cos^{-1}(0.8)\approx0.6435$. <em>Answer: \(x\approx\pi-0.6435\approx2.498\) or \(x\approx\pi+0.6435\approx3.785\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Solve \(2\sin^2x-\sin x-1=0\) for \(0\leq x\leq2\pi\).</p><details><summary>View answer</summary><div class="solution"><div class="step">$(2\sin x+1)(\sin x-1)=0$. <em>Answer: \(\sin x=-\tfrac12\Rightarrow x=\tfrac{7\pi}{6},\tfrac{11\pi}{6}\); \(\sin x=1\Rightarrow x=\tfrac{\pi}{2}\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Solve \(2\cos^2x-\sin x-1=0\) for \(0\leq x\leq2\pi\) (substitute \(\cos^2x=1-\sin^2x\) first).</p><details><summary>View answer</summary><div class="solution"><div class="step">$2(1-\sin^2x)-\sin x-1=0\Rightarrow-2\sin^2x-\sin x+1=0\Rightarrow2\sin^2x+\sin x-1=0\Rightarrow(2\sin x-1)(\sin x+1)=0$. <em>Answer: \(\sin x=\tfrac12\Rightarrow x=\tfrac{\pi}{6},\tfrac{5\pi}{6}\); \(\sin x=-1\Rightarrow x=\tfrac{3\pi}{2}\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5 — Challenge</h3><p>A Ferris wheel's height is modelled by \(h(t)=15\sin\!\left(\dfrac{\pi}{4}t\right)+17\) metres, \(t\) in minutes. Find all times in the first 8 minutes when the rider is at height 24.5 m.</p><details><summary>View answer</summary><div class="solution"><div class="step">$15\sin(\pi t/4)=7.5\Rightarrow\sin(\pi t/4)=0.5\Rightarrow\pi t/4=\pi/6$ or $5\pi/6$ (plus one full cycle later, period $=8$). <em>Answer: \(t=\tfrac23\) min and \(t=\tfrac{10}{3}\) min (and their repeats at $t+8$, outside this window).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: How do I get the period from the equation?</h3><p><em>Divide \(2\pi\) by the coefficient \(b\) inside the function, \(y=a\sin(bx)+d\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: How do I know how many solutions a trig equation has in a domain?</h3><p><em>Sketch or picture the graph against the horizontal line at the target value — every crossing inside the domain is a solution.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: What's the signal that I need an identity before I can solve an equation?</h3><p><em>A mix of \(\sin^2x\) and \(\cos x\) (or vice versa) in the same equation — substitute the Pythagorean identity so everything is in one function.</em></p></div>
</div>`),
]);
