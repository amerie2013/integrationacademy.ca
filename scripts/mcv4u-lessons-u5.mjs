// MCV4U Unit 5 — Applications of Derivatives. Deep word-problem lessons.
import { html, gframe } from "./seed-mpm2d.mjs";
const L = (code, title, blocks) => ({ code, title, blocks });
const EX = `style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const PR = `style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const QA = `style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
export const u5 = {};

u5["5.1"] = L("5.1", "Optimization", [
  html(String.raw`<div class="lecture-box">
  <h1>🎯 Optimization</h1>
  <p><strong>Overview.</strong> Optimization finds the largest or smallest value of a quantity. The method: write the quantity to optimize, use the constraint to reduce it to <em>one</em> variable, decide the sensible domain, set the derivative to zero to find critical numbers, and verify it's the max or min you want.</p>
  <h2>📌 The recipe</h2>
  <ul>
    <li>Define a variable; write the quantity \(Q\) to optimize.</li>
    <li>Use the constraint to write \(Q\) in <strong>one</strong> variable; state the domain.</li>
    <li>Solve \(Q'=0\); verify with the first/second derivative test or the endpoints.</li>
  </ul>
  ${gframe(["y = x*(20-x)"], { title: "Area A = x(20−x) for a fixed perimeter of 40: A'(x)=20−2x=0 gives the peak at x=10 (a square)" })}
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Maximum area, fixed perimeter</h3><p>A rectangular pen uses \(40\) m of fence. Maximize the area.</p><div class="solution"><div class="step"><strong>Step 1:</strong> Sides \(x\) and \(20-x\); \(A=x(20-x)=20x-x^2\).</div><div class="step"><strong>Step 2:</strong> \(A'=20-2x=0\Rightarrow x=10\); \(A''=-2<0\) (max).</div><em>Conclusion: \(10\times10\), area \(100\) m². ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: A wall on one side</h3><p>Only \(3\) sides are fenced (a wall is the fourth), with \(20\) m of fence. Maximize the area.</p><div class="solution"><div class="step"><strong>Step 1:</strong> Width \(x\), length \(20-2x\); \(A=x(20-2x)\).</div><div class="step"><strong>Step 2:</strong> \(A'=20-4x=0\Rightarrow x=5\), length \(10\).</div><em>Conclusion: \(5\times10\), area \(50\) m². ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: Minimize a sum</h3><p>For \(x>0\), minimize \(f(x)=x+\dfrac{16}{x}\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(f'(x)=1-\dfrac{16}{x^2}=0\Rightarrow x^2=16\Rightarrow x=4\).</div><div class="step"><strong>Step 2:</strong> \(f''=\dfrac{32}{x^3}>0\) (min).</div><em>Conclusion: minimum value \(f(4)=8\). ✓</em></div>${gframe(["y = x + 16/x"], { title: "f(x)=x+16/x (x>0): a clear minimum value of 8 at x=4" })}</div>
  <div class="example-box" ${EX}><h3>Example 4: Maximum-volume open box</h3><p>Squares of side \(x\) are cut from the corners of a \(12\times12\) sheet, which is folded into an open box. Maximize the volume.</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(V=x(12-2x)^2\), \(0<x<6\).</div><div class="step"><strong>Step 2:</strong> \(V'=(12-2x)^2+x\cdot2(12-2x)(-2)=(12-2x)(12-6x)=0\Rightarrow x=2\) (since \(x=6\) is invalid).</div><em>Conclusion: \(x=2\), giving \(V=2(8)^2=128\) cm³. ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: Maximum profit</h3><p>A firm's profit is \(P(x)=-2x^2+40x-100\). Find the output that maximizes profit.</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(P'(x)=-4x+40=0\Rightarrow x=10\).</div><div class="step"><strong>Step 2:</strong> \(P''=-4<0\) (max); \(P(10)=100\).</div><em>Conclusion: output \(10\), maximum profit \(100\). ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Two positive numbers sum to \(12\). Maximize their product.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(P=x(12-x)\), \(P'=12-2x=0\Rightarrow x=6\); product \(36\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Maximize the area of a rectangle with \(60\) m of fence.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(15\times15\), area \(225\) m².</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>For \(x>0\), minimize \(f(x)=x+\dfrac{9}{x}\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(1-\tfrac9{x^2}=0\Rightarrow x=3\); min value \(6\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Maximize \(P(x)=-x^2+10x\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(P'=-2x+10=0\Rightarrow x=5\); \(P(5)=25\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>A 3-sided pen uses \(40\) m of fence (a wall is the fourth side). Maximize the area.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(A=x(40-2x)\), \(x=10\), length \(20\); area \(200\) m².</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: What is the first step?</h3><p><em>Write the quantity to optimize.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: How do you get one variable?</h3><p><em>Substitute the constraint into the quantity.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: How do you find candidates?</h3><p><em>Solve \(Q'=0\) (and check where \(Q'\) is undefined).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: How do you confirm max vs min?</h3><p><em>Second derivative test, sign of \(Q'\), or compare endpoints.</em></p></div>
</div>`),
]);

u5["5.2"] = L("5.2", "Related Rates", [
  html(String.raw`<div class="lecture-box">
  <h1>⏱️ Related Rates</h1>
  <p><strong>Overview.</strong> When several quantities change together over <em>time</em>, their rates are linked. Find an equation relating the quantities, differentiate <strong>both sides with respect to \(t\)</strong> (using the chain rule), then substitute the values at the instant of interest and solve for the unknown rate.</p>
  <h2>📌 The recipe</h2>
  <ul>
    <li>Identify the quantities and which rates are known/unknown.</li>
    <li>Write an equation relating them; differentiate w.r.t. \(t\).</li>
    <li>Substitute the instant's values and solve for the unknown rate.</li>
  </ul>
  ${gframe(["y = 3.14159*x^2"], { title: "Circle area A = πr²: because A depends on r², dA/dt = 2πr·dr/dt grows as r grows" })}
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Expanding circle</h3><p>A circle's radius grows at \(\dfrac{dr}{dt}=2\) cm/s. How fast is the area growing when \(r=5\)?</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(A=\pi r^2\Rightarrow\dfrac{dA}{dt}=2\pi r\dfrac{dr}{dt}\).</div><div class="step"><strong>Step 2:</strong> \(=2\pi(5)(2)\).</div><em>Conclusion: \(\dfrac{dA}{dt}=20\pi\approx62.8\) cm²/s. ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Sliding ladder</h3><p>A \(13\) m ladder's base slides away at \(2\) m/s. How fast is the top sliding down when the base is \(5\) m out?</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(x^2+y^2=169\); at \(x=5,\ y=12\). Differentiate: \(2x\dfrac{dx}{dt}+2y\dfrac{dy}{dt}=0\).</div><div class="step"><strong>Step 2:</strong> \(\dfrac{dy}{dt}=-\dfrac{x}{y}\dfrac{dx}{dt}=-\dfrac{5(2)}{12}\).</div><em>Conclusion: \(\dfrac{dy}{dt}=-\dfrac56\) m/s (top descends at \(\tfrac56\) m/s). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: Inflating balloon</h3><p>A spherical balloon fills at \(\dfrac{dV}{dt}=100\) cm³/s. How fast is the radius growing when \(r=5\)?</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(V=\tfrac43\pi r^3\Rightarrow\dfrac{dV}{dt}=4\pi r^2\dfrac{dr}{dt}\).</div><div class="step"><strong>Step 2:</strong> \(100=4\pi(25)\dfrac{dr}{dt}\).</div><em>Conclusion: \(\dfrac{dr}{dt}=\dfrac{1}{\pi}\approx0.32\) cm/s. ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: Growing square</h3><p>A square's side grows at \(3\) cm/s. How fast is the area growing when the side is \(10\) cm?</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(A=s^2\Rightarrow\dfrac{dA}{dt}=2s\dfrac{ds}{dt}\).</div><div class="step"><strong>Step 2:</strong> \(=2(10)(3)\).</div><em>Conclusion: \(60\) cm²/s. ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: Two cars (Pythagorean)</h3><p>Car A drives north at \(60\) km/h; car B drives east at \(80\) km/h from the same point. How fast is the distance between them growing after \(1\) h?</p><div class="solution"><div class="step"><strong>Step 1:</strong> After \(1\) h: \(a=60,\ b=80,\ D=\sqrt{60^2+80^2}=100\). \(D^2=a^2+b^2\Rightarrow 2D D'=2a a'+2b b'\).</div><div class="step"><strong>Step 2:</strong> \(D'=\dfrac{60(60)+80(80)}{100}=\dfrac{10000}{100}\).</div><em>Conclusion: \(100\) km/h. ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>A circle's radius grows at \(3\) cm/s. Find \(\dfrac{dA}{dt}\) when \(r=4\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(2\pi(4)(3)=24\pi\) cm²/s.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>A square's side grows at \(2\) cm/s. Find \(\dfrac{dA}{dt}\) when \(s=6\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(2(6)(2)=24\) cm²/s.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>A balloon fills at \(\dfrac{dV}{dt}=36\pi\) cm³/s. Find \(\dfrac{dr}{dt}\) when \(r=3\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(36\pi=4\pi(9)\dfrac{dr}{dt}\Rightarrow\dfrac{dr}{dt}=1\) cm/s.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>A \(10\) m ladder's base slides out at \(1\) m/s. Find the top's rate when the base is \(6\) m out.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(y=8\); \(\dfrac{dy}{dt}=-\tfrac{6(1)}{8}=-\tfrac34\) m/s.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>What's the first move once you have the relating equation?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Differentiate both sides with respect to \(t\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: What links the rates?</h3><p><em>An equation relating the quantities, differentiated in \(t\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: Which rule appears?</h3><p><em>The chain rule — every variable carries a \(\tfrac{d}{dt}\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: When do you substitute the numbers?</h3><p><em>After differentiating, not before.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: What does a negative rate mean?</h3><p><em>The quantity is decreasing (e.g. the ladder top descending).</em></p></div>
</div>`),
]);

u5["5.3"] = L("5.3", "Kinematics: Velocity & Acceleration", [
  html(String.raw`<div class="lecture-box">
  <h1>🚗 Kinematics: Velocity &amp; Acceleration</h1>
  <p><strong>Overview.</strong> Motion in a line is described by <strong>position</strong> \(s(t)\). Its derivative is the <strong>velocity</strong> \(v=s'\) (with direction), and that derivative is the <strong>acceleration</strong> \(a=v'=s''\). The object is at rest when \(v=0\); it is <strong>speeding up</strong> when \(v\) and \(a\) have the <em>same</em> sign, and slowing down when they have opposite signs.</p>
  <h2>📌 The relationships</h2>
  <ul>
    <li>\(v(t)=s'(t)\); \(a(t)=v'(t)=s''(t)\); speed \(=|v|\).</li>
    <li><strong>At rest:</strong> \(v=0\). <strong>Direction:</strong> sign of \(v\).</li>
    <li><strong>Speeding up:</strong> \(v\) and \(a\) the same sign; <strong>slowing down:</strong> opposite signs.</li>
  </ul>
  ${gframe(["y = x^2 - 4*x", "y = 2*x - 4"], { title: "Position s(t)=t²−4t (blue) and velocity v(t)=2t−4 (orange): the object is at rest where v=0 (t=2), the lowest point of s" })}
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Velocity &amp; acceleration</h3><p>For \(s(t)=t^2-4t\), find \(v(t)\) and \(a(t)\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(v=s'=2t-4\); \(a=v'=2\).</div><em>Conclusion: \(v(t)=2t-4,\ a(t)=2\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: When is it at rest?</h3><p>When is the object in Example 1 at rest?</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(v=0\Rightarrow 2t-4=0\).</div><em>Conclusion: at \(t=2\) s. ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: Multiple rest times</h3><p>For \(s(t)=t^3-6t^2+9t\), find when the object is at rest.</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(v=3t^2-12t+9=3(t-1)(t-3)=0\).</div><em>Conclusion: at \(t=1\) and \(t=3\). ✓</em></div>${gframe(["y = x^3 - 6*x^2 + 9*x", "y = 3*x^2 - 12*x + 9"], { title: "position s(t)=t³−6t²+9t and velocity v(t)=3t²−12t+9: the object is at rest where v=0 (t=1, 3)" })}</div>
  <div class="example-box" ${EX}><h3>Example 4: Direction &amp; acceleration at an instant</h3><p>For \(s(t)=t^3-6t^2+9t\), describe the motion at \(t=0\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(v(0)=9>0\) (moving in the positive direction).</div><div class="step"><strong>Step 2:</strong> \(a=6t-12\Rightarrow a(0)=-12<0\) (decelerating).</div><em>Conclusion: moving right but slowing down. ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: Speeding up or slowing down?</h3><p>For \(s(t)=t^3-6t^2+9t\), is the object speeding up at \(t=4\)?</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(v(4)=3(3)(1)=9>0\); \(a(4)=24-12=12>0\).</div><div class="step"><strong>Step 2:</strong> Same sign ⇒ speeding up.</div><em>Conclusion: yes, speeding up at \(t=4\). ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>For \(s(t)=t^2-6t\), find \(v(t)\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(2t-6\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>When is that object at rest?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(2t-6=0\Rightarrow t=3\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>For \(s(t)=t^3-3t^2\), find \(a(t)\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(v=3t^2-6t,\ a=6t-6\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>A projectile has \(h(t)=-5t^2+20t\). When does it reach maximum height?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(v=-10t+20=0\Rightarrow t=2\) s.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>If \(v>0\) and \(a<0\), is the object speeding up or slowing down?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Slowing down (opposite signs).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: How are \(s,v,a\) related?</h3><p><em>\(v=s'\), \(a=v'=s''\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: When is the object at rest?</h3><p><em>When \(v=0\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: How do you tell speeding up from slowing down?</h3><p><em>Same sign of \(v,a\) → speeding up; opposite → slowing down.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: What gives the direction of motion?</h3><p><em>The sign of the velocity.</em></p></div>
</div>`),
]);
