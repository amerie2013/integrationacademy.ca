// MBF3C Unit 1 — Quadratic Relations. Deep single-card lessons (MCR3U/MCF3M theme)
// PLUS interactive parameter-slider graphs (animation).
import { html, gframe, graph } from "./seed-mpm2d.mjs";
const L = (code, title, blocks) => ({ code, title, blocks });
const EX = `style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const PR = `style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const QA = `style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
export const u1 = {};

u1["1.1"] = L("1.1", "Expanding & Factoring Quadratics", [
  html(String.raw`<div class="lecture-box">
  <h1>✖️ Expanding &amp; Factoring Quadratics</h1>
  <p><strong>Overview.</strong> <strong>Expanding</strong> removes brackets by multiplying; <strong>factoring</strong> runs that in reverse, turning a sum back into a product. These two skills let you move between the two ways of writing the same quadratic relation, which is the foundation of everything in this unit.</p>
  <h2>📌 The tools</h2>
  <ul>
    <li><strong>Distribute:</strong> \(a(b+c)=ab+ac\). <strong>FOIL:</strong> \((x+p)(x+q)=x^2+(p+q)x+pq\).</li>
    <li><strong>Special products:</strong> \((a\pm b)^2=a^2\pm2ab+b^2\); \((a-b)(a+b)=a^2-b^2\).</li>
    <li><strong>Factoring:</strong> take out the common factor first, then look for two numbers that multiply to \(c\) and add to \(b\).</li>
  </ul>
  ${gframe(["y = x^2 + 5*x + 6"], { title: "Factored (x+2)(x+3) and expanded x²+5x+6 are one parabola" })}
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Distribute</h3><p>Expand \(3(x+4)\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Multiply each term by 3.</div><em>Conclusion: \(3x+12\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: FOIL</h3><p>Expand \((x+2)(x+3)\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(x^2+3x+2x+6\).</div><em>Conclusion: \(x^2+5x+6\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: Perfect square</h3><p>Expand \((x+5)^2\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(x^2+2(5)x+25\).</div><em>Conclusion: \(x^2+10x+25\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: Factor a trinomial</h3><p>Factor \(x^2+7x+12\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Two numbers with product 12, sum 7: \(3,4\).</div><em>Conclusion: \((x+3)(x+4)\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: Common factor</h3><p>Factor \(2x^2+8x\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> The GCF is \(2x\).</div><em>Conclusion: \(2x(x+4)\). ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Expand \(2x(x-5)\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(2x^2-10x\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Expand \((x-4)(x+4)\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(x^2-16\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Factor \(x^2-x-6\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\((x-3)(x+2)\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Factor \(6x^2+9x\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(3x(2x+3)\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>Expand \((2x+1)(x+3)\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(2x^2+7x+3\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: What does FOIL stand for?</h3><p><em>First, Outer, Inner, Last — the four products of two binomials.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: Is \((x+5)^2=x^2+25\)?</h3><p><em>No — include the middle term \(2(5)x\): it is \(x^2+10x+25\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: What is factoring the reverse of?</h3><p><em>Expanding — multiply the factors back to check.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: What do you look for first when factoring?</h3><p><em>A common factor (GCF).</em></p></div>
</div>`),
]);

u1["1.2"] = L("1.2", "Quadratic Relations & Their Graphs", [
  html(String.raw`<div class="lecture-box">
  <h1>📈 Quadratic Relations &amp; Their Graphs</h1>
  <p><strong>Overview.</strong> A quadratic relation graphs as a <strong>parabola</strong>. In <strong>vertex form</strong> \(y=a(x-h)^2+k\), the three numbers \(a,h,k\) transform the parent \(y=x^2\) and reveal the vertex \((h,k)\) at a glance.</p>
  <h2>📌 The roles of a, h, k</h2>
  <ul>
    <li><strong>\(a\):</strong> vertical stretch/compression; reflects in the x-axis if \(a<0\) (opens down).</li>
    <li><strong>\(h\):</strong> horizontal shift (opposite to the sign). <strong>\(k\):</strong> vertical shift. Vertex \((h,k)\).</li>
    <li><strong>Standard form</strong> \(y=ax^2+bx+c\) comes from expanding vertex form.</li>
  </ul>
  ${gframe(["y = (x-2)^2 + 1"], { title: "Vertex form: vertex at (2, 1)" })}
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Read the vertex</h3><p>State the vertex of \(y=(x-3)^2+2\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(h=3,\ k=2\).</div><em>Conclusion: \((3,2)\). ✓</em></div>${gframe(["y = (x-3)^2 + 2"], { title: "(x−3)²+2: vertex (lowest point) at (3,2)" })}</div>
  <div class="example-box" ${EX}><h3>Example 2: Describe the transformations</h3><p>Describe \(y=-2(x+1)^2+5\) from \(y=x^2\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(a=-2,\ h=-1,\ k=5\).</div><em>Conclusion: reflect, stretch by 2, left 1, up 5. ✓</em></div>${gframe(["y = x^2", "y = -2*(x+1)^2 + 5"], { title: "−2(x+1)²+5: y=x² reflected (opens down), stretched ×2, left 1, up 5" })}</div>
  <div class="example-box" ${EX}><h3>Example 3: Vertex form → standard</h3><p>Expand \(y=(x-1)^2+4\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(x^2-2x+1+4\).</div><em>Conclusion: \(y=x^2-2x+5\). ✓</em></div>${gframe(["y = (x-1)^2 + 4"], { title: "(x−1)²+4 = x²−2x+5: vertex and standard form describe the same parabola, vertex (1,4)" })}</div>
  <div class="example-box" ${EX}><h3>Example 4: Direction &amp; max/min</h3><p>For \(y=-(x-2)^2+3\), state the direction and the max or min.</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(a<0\) opens down; vertex \((2,3)\).</div><em>Conclusion: maximum value 3. ✓</em></div>${gframe(["y = -(x-2)^2 + 3"], { title: "−(x−2)²+3: opens downward, so the vertex (2,3) is a maximum" })}</div>
  <div class="example-box" ${EX}><h3>Example 5: Write the equation</h3><p>Write \(y=x^2\) shifted right 3 and down 2.</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(h=3,\ k=-2\).</div><em>Conclusion: \(y=(x-3)^2-2\). ✓</em></div>${gframe(["y = (x-3)^2 - 2"], { title: "(x−3)²−2: y=x² moved right 3 and down 2 — vertex (3,−2)" })}</div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>State the vertex of \(y=(x+4)^2-2\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\((-4,-2)\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Does \(y=3(x-1)^2\) open up or down?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Up (\(a>0\)).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Expand \(y=(x+2)^2-7\) to standard form.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(y=x^2+4x-3\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Max or min value of \(y=-(x-5)^2+8\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Maximum 8.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>Write \(y=x^2\) reflected and shifted up 4.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(y=-x^2+4\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: How do you read the vertex from vertex form?</h3><p><em>It is \((h,k)\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: Why is the horizontal shift opposite to the sign?</h3><p><em>Because \((x-h)\) is zero when \(x=h\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: What does \(a<0\) do?</h3><p><em>Reflects the parabola so it opens down (a maximum).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: How do you get standard form?</h3><p><em>Expand the vertex form.</em></p></div>
</div>`),
  graph("a*x^2", "a", { xMin: -5, xMax: 5, yMin: -8, yMax: 8, paramMin: -2, paramMax: 3, paramInit: 1, caption: "Slider a — y = a·x²: a>1 narrows the parabola, 0<a<1 widens it, and a<0 flips it to open downward." }),
  graph("(x-h)^2", "h", { xMin: -6, xMax: 6, yMin: -1, yMax: 9, paramMin: -3, paramMax: 3, paramInit: 0, caption: "Slider h — y = (x−h)²: the vertex slides horizontally to (h, 0), opposite to the sign." }),
  graph("x^2+k", "k", { xMin: -4, xMax: 4, yMin: -5, yMax: 9, paramMin: -4, paramMax: 4, paramInit: 0, caption: "Slider k — y = x²+k: the vertex slides vertically to (0, k)." }),
]);

u1["1.3"] = L("1.3", "Solving Quadratic Equations", [
  html(String.raw`<div class="lecture-box">
  <h1>🟰 Solving Quadratic Equations</h1>
  <p><strong>Overview.</strong> Solving \(ax^2+bx+c=0\) means finding the <strong>x-intercepts</strong> (zeros) of the parabola. The fastest way for these is to factor and use the <strong>zero product property</strong>; a graph shows the same answers as the points where the curve crosses the x-axis.</p>
  <h2>📌 The method</h2>
  <ol>
    <li>Rearrange so one side equals \(0\).</li>
    <li>Factor (common factor first, then the trinomial).</li>
    <li>Set each factor to \(0\) and solve.</li>
  </ol>
  ${gframe(["y = x^2 - 5*x + 6"], { title: "Roots x=2, x=3 are the x-intercepts of the parabola" })}
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Trinomial</h3><p>Solve \(x^2-5x+6=0\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \((x-2)(x-3)=0\).</div><em>Conclusion: \(x=2\) or \(x=3\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Difference of squares</h3><p>Solve \(x^2-9=0\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \((x-3)(x+3)=0\).</div><em>Conclusion: \(x=\pm3\). ✓</em></div>${gframe(["y = x^2 - 9"], { title: "x²−9=0: the parabola crosses the x-axis at x=−3 and 3" })}</div>
  <div class="example-box" ${EX}><h3>Example 3: Negative constant</h3><p>Solve \(x^2+2x-8=0\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \((x+4)(x-2)=0\).</div><em>Conclusion: \(x=-4\) or \(x=2\). ✓</em></div>${gframe(["y = x^2 + 2*x - 8"], { title: "x²+2x−8=0: roots at x=−4 and 2" })}</div>
  <div class="example-box" ${EX}><h3>Example 4: Common factor</h3><p>Solve \(x^2-6x=0\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(x(x-6)=0\).</div><em>Conclusion: \(x=0\) or \(x=6\). ✓</em></div>${gframe(["y = x^2 - 6*x"], { title: "x²−6x=0: roots at x=0 and 6 (one at the origin)" })}</div>
  <div class="example-box" ${EX}><h3>Example 5: Break-even</h3><p>A profit relation is \(P=x^2-7x+10\) (in $1000s). For what \(x\) does the company break even (\(P=0\))?</p><div class="solution"><div class="step"><strong>Step 1:</strong> \((x-2)(x-5)=0\).</div><em>Conclusion: \(x=2\) or \(x=5\). ✓</em></div>${gframe(["y = x^2 - 7*x + 10"], { title: "P=x²−7x+10: breaks even (P=0) where the curve meets the axis, at x=2 and 5" })}</div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Solve \(x^2-7x+10=0\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(x=2,5\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Solve \(x^2-16=0\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(x=\pm4\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Solve \(x^2+5x+6=0\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(x=-2,-3\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Solve \(x^2-4x=0\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(x=0,4\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>Solve \(x^2-x-12=0\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(x=4,-3\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: What is the zero product property?</h3><p><em>If \(AB=0\), then \(A=0\) or \(B=0\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: What must be true before factoring?</h3><p><em>One side must equal \(0\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: What do the solutions mean on the graph?</h3><p><em>They are the x-intercepts (zeros) of the parabola.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: What does "break-even" mean?</h3><p><em>Where profit \(P=0\) — the x-intercepts of the profit relation.</em></p></div>
</div>`),
]);

u1["1.4"] = L("1.4", "Quadratic Models & Applications", [
  html(String.raw`<div class="lecture-box">
  <h1>🎯 Quadratic Models &amp; Applications</h1>
  <p><strong>Overview.</strong> Real situations — a thrown ball, a company's profit, the area of a rectangle — are often quadratic. The <strong>vertex</strong> gives the maximum or minimum, and the <strong>x-intercepts</strong> give break-even or landing times.</p>
  <h2>📌 The strategy</h2>
  <ul>
    <li>Maximum/minimum: find the vertex (\(x=-\dfrac{b}{2a}\), then substitute), giving the optimal value.</li>
    <li>Break-even / when it hits the ground: set the relation to \(0\) and solve.</li>
  </ul>
  ${gframe(["y = -(x-3)^2 + 9"], { title: "Maximum value 9 at x = 3" })}
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Read a maximum</h3><p>Find the maximum of \(y=-(x-3)^2+9\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Vertex \((3,9)\), opens down.</div><em>Conclusion: maximum 9 at \(x=3\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Maximum height</h3><p>A ball's height is \(h=-5t^2+20t\). Find the maximum height.</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(t=-\dfrac{20}{2(-5)}=2\); \(h=-20+40=20\).</div><em>Conclusion: 20 m at \(t=2\) s. ✓</em></div>${gframe(["y = -5*x^2 + 20*x"], { title: "h=−5t²+20t: the ball's path peaks at 20 m (t=2 s) and lands at t=4 s" })}</div>
  <div class="example-box" ${EX}><h3>Example 3: When it lands</h3><p>For the same ball, when does it hit the ground (\(h=0\))?</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(-5t(t-4)=0\).</div><em>Conclusion: \(t=0\) (start) and \(t=4\) s (lands). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: Maximum profit</h3><p>Profit is \(P=-2x^2+12x-10\). Find the maximum profit.</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(x=3\); \(P=-18+36-10=8\).</div><em>Conclusion: maximum profit 8. ✓</em></div>${gframe(["y = -2*x^2 + 12*x - 10"], { title: "P=−2x²+12x−10: opens down, maximum profit 8 at x=3" })}</div>
  <div class="example-box" ${EX}><h3>Example 5: Maximum area</h3><p>A rectangle has perimeter 20 m. What dimensions give the maximum area?</p><div class="solution"><div class="step"><strong>Step 1:</strong> Width \(w\), length \(10-w\); \(A=w(10-w)\), vertex at \(w=5\).</div><em>Conclusion: 5 m × 5 m, area 25 m². ✓</em></div>${gframe(["y = x*(10-x)"], { title: "A=w(10−w): area peaks at 25 m² when w=5 — the rectangle is a 5×5 square" })}</div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Find the maximum of \(y=-(x-2)^2+7\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>7 (at \(x=2\)).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>For \(h=-5t^2+30t\), find the maximum height.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(t=3\); \(h=45\) m.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>A profit relation \(P=x^2-7x+10\); find the break-even values.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(x=2\) and \(x=5\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Find the minimum of \(y=x^2-6x+5\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Vertex \((3,-4)\): minimum \(-4\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>A farmer has 40 m of fencing for a rectangle. What is the maximum area?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>10 m × 10 m, area 100 m².</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: Where is the max or min?</h3><p><em>At the vertex.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: How do I know max vs min?</h3><p><em>\(a>0\) gives a minimum; \(a<0\) gives a maximum.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: How do I find when a ball lands?</h3><p><em>Set the height to \(0\) and solve for time.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: What does the vertex mean in context?</h3><p><em>The optimal value — maximum height, maximum profit, or minimum cost.</em></p></div>
</div>`),
]);
