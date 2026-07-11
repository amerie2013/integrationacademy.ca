// MCF3M Unit 2 — Quadratic Functions. Single-card lessons matching the MCR3U pattern.
import { html, gframe } from "./seed-mpm2d.mjs";
const L = (code, title, blocks) => ({ code, title, blocks });
const EX = `style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const PR = `style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const QA = `style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
export const u2 = {};

u2["2.1"] = L("2.1", "Functions, Function Notation, Domain & Range", [html(String.raw`<div class="lecture-box">
  <h1>📈 Functions, Function Notation, Domain &amp; Range</h1>
  <p><strong>Overview.</strong> A <strong>relation</strong> pairs inputs with outputs; a <strong>function</strong> gives <em>exactly one</em> output for each input. We write outputs with function notation \(f(x)\), and describe the allowed inputs (<strong>domain</strong>) and resulting outputs (<strong>range</strong>).</p>
  <h2>📌 The ideas</h2>
  <ul>
    <li><strong>Vertical-line test:</strong> a graph is a function if no vertical line meets it more than once.</li>
    <li><strong>Evaluate:</strong> substitute the value for every \(x\). For a quadratic, the domain is all real numbers and the range is bounded by the vertex.</li>
  </ul>
  ${gframe(["y = x^2"], { title: "y = x² is a function (passes the vertical-line test)" })}
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Function or not</h3><p>Is \(\{(1,2),(2,4),(3,6)\}\) a function?</p><div class="solution"><div class="step"><strong>Step 1:</strong> Each input has one output.</div><em>Conclusion: yes. ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Evaluate</h3><p>For \(f(x)=2x^2+3x-1\), find \(f(2)\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(2(4)+6-1\).</div><em>Conclusion: \(f(2)=13\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: Negative input</h3><p>For the same \(f\), find \(f(-1)\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(2(1)-3-1\).</div><em>Conclusion: \(f(-1)=-2\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: Domain &amp; range</h3><p>State the domain and range of \(f(x)=x^2+1\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Any \(x\) works; the smallest output is at the vertex \((0,1)\).</div><em>Conclusion: domain all reals, range \(y\ge1\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: Application</h3><p>Revenue is \(r(s)=-10s^2+1500s\). Find \(r(60)\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(-10(3600)+90000\).</div><em>Conclusion: \(r(60)=\$54\,000\). ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Is \(x=y^2\) a function?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>No — \(x=4\) gives \(y=\pm2\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>For \(f(x)=x^2-4\), find \(f(3)\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(f(3)=5\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>For \(f(x)=5-2x\), solve \(f(x)=1\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(x=2\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>State the range of \(y=-x^2+5\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(y\le5\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>State the range of \(y=x^2-3\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(y\ge-3\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: What is the difference between a relation and a function?</h3><p><em>A function gives each input exactly one output.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: What is the vertical-line test?</h3><p><em>If a vertical line meets the graph more than once, it is not a function.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: Does \(f(x)\) mean \(f\times x\)?</h3><p><em>No — it is the output of \(f\) at \(x\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: What are the domain and range of a quadratic?</h3><p><em>Domain is all real numbers; the range starts (or ends) at the vertex.</em></p></div>
</div>`)]);

u2["2.2"] = L("2.2", "Transformations & Vertex Form", [html(String.raw`<div class="lecture-box">
  <h1>🔧 Transformations &amp; Vertex Form</h1>
  <p><strong>Overview.</strong> Every parabola can be written in <strong>vertex form</strong> \(f(x)=a(x-h)^2+k\). The numbers \(a,h,k\) transform the parent \(y=x^2\), and the vertex is \((h,k)\).</p>
  <h2>📌 The roles of a, h, k</h2>
  <ul>
    <li><strong>\(a\):</strong> vertical stretch by \(|a|\); reflects in the x-axis if \(a<0\) (opens down).</li>
    <li><strong>\(h\):</strong> horizontal shift (opposite to the sign). <strong>\(k\):</strong> vertical shift. Vertex \((h,k)\).</li>
  </ul>
  ${gframe(["y = (x-2)^2 + 1"], { title: "Vertex form: vertex at (2, 1)" })}
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Read the vertex</h3><p>State the vertex of \(y=(x-3)^2+2\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(h=3,\ k=2\).</div><em>Conclusion: \((3,2)\). ✓</em></div>${gframe(["y = (x-3)^2 + 2"], { title: "(x−3)²+2: vertex (lowest point) at (3,2)" })}</div>
  <div class="example-box" ${EX}><h3>Example 2: Describe the transformations</h3><p>Describe \(y=-2(x+1)^2+5\) from \(y=x^2\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(a=-2,\ h=-1,\ k=5\).</div><em>Conclusion: reflect, stretch by 2, left 1, up 5. ✓</em></div>${gframe(["y = x^2", "y = -2*(x+1)^2 + 5"], { title: "−2(x+1)²+5: y=x² reflected (opens down), stretched ×2, left 1, up 5" })}</div>
  <div class="example-box" ${EX}><h3>Example 3: Negative h</h3><p>State the vertex of \(y=(x+4)^2-2\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(h=-4,\ k=-2\).</div><em>Conclusion: \((-4,-2)\). ✓</em></div>${gframe(["y = (x+4)^2 - 2"], { title: "(x+4)²−2: a plus sign inside shifts left — vertex at (−4,−2)" })}</div>
  <div class="example-box" ${EX}><h3>Example 4: Direction &amp; max/min</h3><p>For \(y=-(x-2)^2+3\), state the direction and the max or min.</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(a<0\) opens down; vertex \((2,3)\).</div><em>Conclusion: maximum value 3. ✓</em></div>${gframe(["y = -(x-2)^2 + 3"], { title: "−(x−2)²+3: opens downward, so the vertex (2,3) is a maximum" })}</div>
  <div class="example-box" ${EX}><h3>Example 5: Write the equation</h3><p>Write \(y=x^2\) shifted right 5 and down 4.</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(h=5,\ k=-4\).</div><em>Conclusion: \(y=(x-5)^2-4\). ✓</em></div>${gframe(["y = (x-5)^2 - 4"], { title: "(x−5)²−4: y=x² moved right 5 and down 4 — vertex (5,−4)" })}</div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>State the vertex of \(y=(x-1)^2-7\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\((1,-7)\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Describe \(y=3(x-2)^2\) from \(y=x^2\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Stretch by 3, right 2.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>State the vertex and direction of \(y=-2(x+3)^2+1\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Vertex \((-3,1)\), opens down.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Write \(y=x^2\) reflected in the x-axis and shifted left 2.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(y=-(x+2)^2\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>Does \(y=(x-4)^2+6\) have a max or min, and what is its value?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Minimum 6.</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: Why is the horizontal shift opposite to the sign?</h3><p><em>Because \((x-h)\) is zero when \(x=h\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: What does \(a<0\) do?</h3><p><em>Reflects in the x-axis — the parabola opens down.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: How do you read the vertex from vertex form?</h3><p><em>It is \((h,k)\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: In what order are transformations applied?</h3><p><em>Stretches and reflections first, then translations.</em></p></div>
</div>`)]);

u2["2.3"] = L("2.3", "Completing the Square", [html(String.raw`<div class="lecture-box">
  <h1>🟦 Completing the Square</h1>
  <p><strong>Overview.</strong> <strong>Completing the square</strong> rewrites a quadratic from standard form \(ax^2+bx+c\) into vertex form \(a(x-h)^2+k\), revealing the vertex and the maximum or minimum.</p>
  <h2>📌 The method</h2>
  <ol>
    <li>(If \(a\ne1\)) factor \(a\) out of the \(x^2\) and \(x\) terms.</li>
    <li>Take half of the \(x\)-coefficient, square it, add and subtract it inside.</li>
    <li>Write the perfect square and simplify the constant.</li>
  </ol>
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Basic</h3><p>Complete the square: \(x^2+6x+5\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Half of 6 is 3; \((x+3)^2-9+5\).</div><em>Conclusion: \((x+3)^2-4\); vertex \((-3,-4)\). ✓</em></div>${gframe(["y = x^2 + 6*x + 5"], { title: "x²+6x+5 = (x+3)²−4: completing the square reveals the vertex (−3,−4)" })}</div>
  <div class="example-box" ${EX}><h3>Example 2: Negative middle term</h3><p>Complete the square: \(x^2-4x+1\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \((x-2)^2-4+1\).</div><em>Conclusion: \((x-2)^2-3\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: Larger constant</h3><p>Complete the square: \(y=x^2+8x+10\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \((x+4)^2-16+10\).</div><em>Conclusion: \((x+4)^2-6\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: Leading coefficient</h3><p>Complete the square: \(y=2x^2-12x+5\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(2(x^2-6x)+5=2((x-3)^2-9)+5\).</div><em>Conclusion: \(2(x-3)^2-13\); vertex \((3,-13)\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: Vertex → standard</h3><p>Expand \(y=(x-1)^2+4\) to standard form.</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(x^2-2x+1+4\).</div><em>Conclusion: \(x^2-2x+5\). ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Complete the square: \(x^2+2x-3\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\((x+1)^2-4\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Complete the square: \(x^2-10x\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\((x-5)^2-25\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Find the vertex of \(y=x^2-6x+5\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\((x-3)^2-4\Rightarrow (3,-4)\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Complete the square: \(y=2x^2+8x+3\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(2(x+2)^2-5\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>Write \(y=(x+2)^2-7\) in standard form.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(x^2+4x-3\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: Why complete the square?</h3><p><em>It reveals the vertex and the max or min value.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: What number do you add inside?</h3><p><em>The square of half the \(x\)-coefficient.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: What if \(a\ne1\)?</h3><p><em>Factor \(a\) out of the \(x^2\) and \(x\) terms first.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: How do you read the vertex from \(a(x-h)^2+k\)?</h3><p><em>It is \((h,k)\).</em></p></div>
</div>`)]);

u2["2.4"] = L("2.4", "Factored Form & Graphing", [html(String.raw`<div class="lecture-box">
  <h1>🪟 Factored Form &amp; Graphing</h1>
  <p><strong>Overview.</strong> In <strong>factored form</strong> \(f(x)=a(x-r)(x-s)\), the x-intercepts are \(r\) and \(s\). The axis of symmetry is halfway between them, and the vertex sits on that axis.</p>
  <h2>📌 The plan</h2>
  <ul>
    <li>x-intercepts: set each factor to \(0\). Axis of symmetry: \(x=\dfrac{r+s}{2}\).</li>
    <li>Vertex: substitute the axis value back. y-intercept: set \(x=0\).</li>
  </ul>
  ${gframe(["y = (x-1)*(x-5)"], { title: "x-intercepts 1 and 5; axis x = 3" })}
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: x-intercepts &amp; axis</h3><p>For \(y=(x-1)(x-5)\), find the x-intercepts and axis of symmetry.</p><div class="solution"><div class="step"><strong>Step 1:</strong> Intercepts \(1,5\); axis \(x=\tfrac{1+5}{2}\).</div><em>Conclusion: \(x=1,5\); axis \(x=3\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Vertex</h3><p>Find the vertex of \(y=(x-1)(x-5)\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> At \(x=3\): \(y=(2)(-2)=-4\).</div><em>Conclusion: \((3,-4)\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: Factor first</h3><p>Find the x-intercepts of \(y=x^2-2x-3\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \((x-3)(x+1)\).</div><em>Conclusion: \(x=3,-1\); axis \(x=1\). ✓</em></div>${gframe(["y = x^2 - 2*x - 3"], { title: "x²−2x−3=(x−3)(x+1): x-intercepts at −1 and 3, axis of symmetry x=1" })}</div>
  <div class="example-box" ${EX}><h3>Example 4: With a leading coefficient</h3><p>For \(y=2(x+2)(x-4)\), find the x-intercepts and vertex.</p><div class="solution"><div class="step"><strong>Step 1:</strong> Intercepts \(-2,4\); axis \(x=1\); \(y=2(3)(-3)=-18\).</div><em>Conclusion: x-intercepts \(-2,4\); vertex \((1,-18)\). ✓</em></div>${gframe(["y = 2*(x+2)*(x-4)"], { title: "2(x+2)(x−4): x-intercepts −2 and 4, vertex (1,−18) midway between them" })}</div>
  <div class="example-box" ${EX}><h3>Example 5: y-intercept</h3><p>Find the y-intercept of \(y=(x-1)(x-5)\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(x=0\): \((-1)(-5)=5\).</div><em>Conclusion: \((0,5)\). ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Find the x-intercepts of \(y=(x+2)(x-6)\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(x=-2,6\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Find the axis of symmetry of \(y=(x+2)(x-6)\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(x=2\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Find the vertex of \(y=(x-2)(x-8)\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Axis \(x=5\); \(y=(3)(-3)=-9\Rightarrow(5,-9)\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Find the x-intercepts and axis of \(y=x^2-9\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(x=\pm3\); axis \(x=0\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>Find the y-intercept of \(y=(x-3)(x+4)\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\((0,-12)\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: How do you get the x-intercepts from factored form?</h3><p><em>Set each factor equal to \(0\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: Where is the axis of symmetry?</h3><p><em>Halfway between the two x-intercepts.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: How do you find the vertex?</h3><p><em>Substitute the axis value back into the equation.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: How do you find the y-intercept?</h3><p><em>Set \(x=0\).</em></p></div>
</div>`)]);

u2["2.5"] = L("2.5", "Maximum/Minimum Problems & Applications", [html(String.raw`<div class="lecture-box">
  <h1>🎯 Maximum/Minimum Problems &amp; Applications</h1>
  <p><strong>Overview.</strong> The <strong>vertex</strong> of a parabola gives the maximum (if \(a<0\)) or minimum (if \(a>0\)) value. Many real problems — height, profit, area — are solved by finding the vertex.</p>
  <h2>📌 The strategy</h2>
  <ul>
    <li>Write the quantity as a quadratic; find the vertex (complete the square or use \(x=-\dfrac{b}{2a}\)).</li>
    <li>The \(x\)-value tells you <em>where</em>, the \(y\)-value tells you the <em>maximum/minimum</em>.</li>
  </ul>
  ${gframe(["y = -(x-3)^2 + 9"], { title: "Maximum value 9 at x = 3" })}
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Read a maximum</h3><p>Find the maximum of \(y=-(x-3)^2+9\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Vertex \((3,9)\), opens down.</div><em>Conclusion: maximum 9 at \(x=3\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Find a minimum</h3><p>Find the minimum of \(y=x^2-6x+5\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(x=-\tfrac{-6}{2}=3\); \(y=9-18+5=-4\).</div><em>Conclusion: minimum \(-4\). ✓</em></div>${gframe(["y = x^2 - 6*x + 5"], { title: "x²−6x+5: opens up, so the vertex (3,−4) is the minimum value −4" })}</div>
  <div class="example-box" ${EX}><h3>Example 3: Maximum height</h3><p>A ball's height is \(h=-5t^2+20t\). Find the maximum height.</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(t=-\tfrac{20}{2(-5)}=2\); \(h=-20+40=20\).</div><em>Conclusion: 20 m at \(t=2\) s. ✓</em></div>${gframe(["y = -5*x^2 + 20*x"], { title: "h=−5t²+20t: the ball's path peaks at 20 m when t=2 s, back to the ground at t=4" })}</div>
  <div class="example-box" ${EX}><h3>Example 4: Maximum profit</h3><p>Profit is \(P=-2x^2+12x-10\). Find the maximum profit.</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(x=3\); \(P=-18+36-10=8\).</div><em>Conclusion: maximum profit 8. ✓</em></div>${gframe(["y = -2*x^2 + 12*x - 10"], { title: "P=−2x²+12x−10: opens down, maximum profit 8 at x=3" })}</div>
  <div class="example-box" ${EX}><h3>Example 5: Maximum area</h3><p>A rectangle has perimeter 20 m. What dimensions give the maximum area?</p><div class="solution"><div class="step"><strong>Step 1:</strong> Width \(w\), length \(10-w\); \(A=w(10-w)\), vertex at \(w=5\).</div><em>Conclusion: 5 m × 5 m, area 25 m². ✓</em></div>${gframe(["y = x*(10-x)"], { title: "A=w(10−w): area peaks at 25 m² when w=5 — the rectangle is a 5×5 square" })}</div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Find the maximum of \(y=-(x-2)^2+7\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>7 (at \(x=2\)).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Find the minimum of \(y=x^2-4x+1\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Vertex \((2,-3)\): minimum \(-3\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>For \(h=-5t^2+30t\), find the maximum height.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(t=3\); \(h=45\) m.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Find the minimum of \(y=2x^2-8x+1\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(x=2\); \(y=-7\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>A farmer has 40 m of fencing for a rectangle. What is the maximum area?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>10 m × 10 m, area 100 m².</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: How do you know it is a max or a min?</h3><p><em>\(a>0\) gives a minimum; \(a<0\) gives a maximum.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: Where is the max or min?</h3><p><em>At the vertex.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: How do you find the vertex quickly?</h3><p><em>Use \(x=-\dfrac{b}{2a}\), then substitute back.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: What does the vertex mean in context?</h3><p><em>The optimal value — maximum height, maximum profit, or minimum cost.</em></p></div>
</div>`)]);
