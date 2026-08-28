// IB Math AA SL — Unit 6: Integral Calculus. Original content and examples,
// at full SL exam difficulty (splitting signed area at x-intercepts, chained
// linear-substitution integrals, intersection-point area-between-curves
// problems, and integrated total-distance kinematics) — informed by, but
// never copied from, any published textbook.
import { html, gframe } from "./seed-mpm2d.mjs";
const L = (code, title, blocks) => ({ code, title, blocks });
const EX = `style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const PR = `style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const QA = `style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
export const u6 = {};

u6["6.1"] = L("6.1", "Antiderivatives & Indefinite Integrals", [
  html(String.raw`<div class="lecture-box">
  <h1>↩️ Antiderivatives &amp; Indefinite Integrals</h1>
  <p><strong>Overview.</strong> Integration reverses differentiation: given a derivative, find the function it came from. Since a constant always differentiates to zero, every antiderivative comes with an unknown constant \(C\) — pinned down only when extra information (like a starting value) is given.</p>
  <h2>📌 The Reverse Power Rule</h2>
  <p style="text-align:center;">\( \displaystyle\int x^n\,dx = \dfrac{x^{n+1}}{n+1}+C \qquad (n\neq-1) \)</p>
  <h2>📌 Linear Substitution Pattern</h2>
  <p>For a linear inner function, reverse the chain rule by dividing by the inner function's derivative:</p>
  <p style="text-align:center;">\( \displaystyle\int (ax+b)^n\,dx = \dfrac{(ax+b)^{n+1}}{a(n+1)}+C \)</p>
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}>
    <h3>Example 1</h3><p>Find \(\displaystyle\int (6x^2-4x+5)\,dx\).</p>
    <div class="solution">
      <em>Conclusion: \(2x^3-2x^2+5x+C\). ✓</em>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 2 — finding C</h3><p>Given \(f'(x)=3x^2-2\) and \(f(1)=4\), find \(f(x)\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Integrate: \(f(x)=x^3-2x+C\).</div>
      <div class="step"><strong>Step 2:</strong> Substitute the known point: \(4=1-2+C \Rightarrow C=5\).</div>
      <em>Conclusion: \(f(x)=x^3-2x+5\). ✓</em>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 3 — linear substitution</h3><p>Find \(\displaystyle\int (3x-2)^4\,dx\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Treat it like the power rule, then divide by the inner derivative \(a=3\): \(\dfrac{(3x-2)^5}{5}\div3\).</div>
      <em>Conclusion: \(\dfrac{(3x-2)^5}{15}+C\). ✓</em>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 4 — rewrite before integrating</h3><p>Find \(\displaystyle\int \dfrac{2x^3-3x}{x}\,dx\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Split the fraction termwise first (the power rule can't be applied to a quotient directly): \(\dfrac{2x^3}{x}-\dfrac{3x}{x}=2x^2-3\).</div>
      <div class="step"><strong>Step 2:</strong> Integrate the simplified form: \(\displaystyle\int(2x^2-3)\,dx\).</div>
      <em>Conclusion: \(\dfrac{2x^3}{3}-3x+C\). ✓</em>
    </div>
  </div>
  <div class="example-box" style="background-color:#fff0f5;border-left:5px solid #c2185b;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>⭐ Advanced Example — from acceleration to position</h3><p>A particle has acceleration \(a(t)=6t-4\) m/s². Given \(v(0)=3\) m/s and \(s(0)=-2\) m, find \(s(t)\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Integrate acceleration: \(v(t)=3t^2-4t+C_1\). Use \(v(0)=3\): \(C_1=3\), so \(v(t)=3t^2-4t+3\).</div>
      <div class="step"><strong>Step 2:</strong> Integrate velocity: \(s(t)=t^3-2t^2+3t+C_2\). Use \(s(0)=-2\): \(C_2=-2\).</div>
      <em>Conclusion: \(s(t)=t^3-2t^2+3t-2\). ✓ (two rounds of integration, each pinning down its own constant from a separate condition)</em>
    </div>
  </div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Find $\displaystyle\int(8x^3-6x+2)\,dx$.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: $2x^4-3x^2+2x+C$.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Given $f'(x)=4x-1$ and $f(2)=6$, find $f(x)$.</p><details><summary>View answer</summary><div class="solution"><div class="step">$f(x)=2x^2-x+C$; $6=8-2+C\Rightarrow C=0$. <em>Answer: $f(x)=2x^2-x$.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Find $\displaystyle\int(5x+1)^3\,dx$.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: $\dfrac{(5x+1)^4}{20}+C$.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Find $\displaystyle\int\dfrac{4x^2-6x}{2x}\,dx$.</p><details><summary>View answer</summary><div class="solution"><div class="step">Simplify to $2x-3$. <em>Answer: $x^2-3x+C$.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5 — Challenge</h3><p>A particle has $a(t)=12t-6$, $v(0)=-1$, $s(0)=5$. Find $s(t)$.</p><details><summary>View answer</summary><div class="solution"><div class="step">$v(t)=6t^2-6t+C_1$, $C_1=-1$. $s(t)=2t^3-3t^2-t+C_2$, $C_2=5$. <em>Answer: $s(t)=2t^3-3t^2-t+5$.</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: Why does every indefinite integral need a "+C"?</h3><p><em>Differentiating any constant gives 0, so infinitely many functions (differing only by a constant) share the same derivative — the integral can't distinguish between them without extra information.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: Why divide by $a$ in the linear substitution pattern?</h3><p><em>Differentiating $(ax+b)^{n+1}$ brings down an extra factor of $a$ via the chain rule; dividing by $a$ up front cancels that out so the derivative matches the original integrand.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: Why must a quotient be simplified before integrating termwise?</h3><p><em>There is no general "quotient rule" for integration the way there is for differentiation — splitting the fraction into separate power-rule-friendly terms is what makes it integrable directly.</em></p></div>
</div>`),
]);

u6["6.2"] = L("6.2", "Definite Integrals & Area", [
  html(String.raw`<div class="lecture-box">
  <h1>📏 Definite Integrals &amp; Area</h1>
  <p><strong>Overview.</strong> A definite integral evaluates to a number — the net signed area between a curve and the \(x\)-axis over an interval. When the curve dips below the axis, that portion counts as <em>negative</em> area, which means finding a true (unsigned) total area sometimes takes an extra step.</p>
  <h2>📌 The Fundamental Theorem of Calculus</h2>
  <p style="text-align:center;">\( \displaystyle\int_a^b f(x)\,dx = F(b)-F(a) \)</p>
  <p>where \(F\) is any antiderivative of \(f\). When \(f(x)\geq0\) on \([a,b]\), this equals the area under the curve.</p>
  <h2>📌 When the Curve Dips Below the Axis</h2>
  <p>A definite integral over a region where \(f(x)<0\) returns a <strong>negative</strong> value — it's still a valid signed area, but not the true geometric area. To find the actual (unsigned) area, split the integral at every \(x\)-intercept and take the absolute value of each piece before adding.</p>
  <div style="text-align:center;margin:14px 0;">
    ${gframe(["y = x*x-4"], { title: "y = x² − 4: the region below the x-axis contributes negative signed area", xMin: -3.5, xMax: 3.5, yMin: -5, yMax: 5 })}
  </div>
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}>
    <h3>Example 1</h3><p>Evaluate \(\displaystyle\int_1^3(2x+1)\,dx\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Antiderivative: \(x^2+x\).</div>
      <div class="step"><strong>Step 2:</strong> \(\big[x^2+x\big]_1^3 = (9+3)-(1+1)\).</div>
      <em>Conclusion: \(12-2=10\). ✓</em>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 2</h3><p>Find the area under \(f(x)=x^2\) between \(x=0\) and \(x=3\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(\displaystyle\int_0^3x^2\,dx = \left[\dfrac{x^3}{3}\right]_0^3 = \dfrac{27}{3}-0\).</div>
      <em>Conclusion: area \(=9\) square units. ✓</em>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 3 — curve dips below the axis</h3><p>Find the total (unsigned) area between \(f(x)=x^2-4\) and the \(x\)-axis on \([0,3]\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Find the \(x\)-intercept in this interval: \(x^2-4=0 \Rightarrow x=2\).</div>
      <div class="step"><strong>Step 2:</strong> Split at \(x=2\): \(\displaystyle\int_0^2(x^2-4)\,dx = \left[\dfrac{x^3}{3}-4x\right]_0^2 = \left(\dfrac83-8\right)-0=-\dfrac{16}{3}\) (negative, since $f<0$ here).</div>
      <div class="step"><strong>Step 3:</strong> \(\displaystyle\int_2^3(x^2-4)\,dx = \left(\dfrac{27}{3}-12\right)-\left(\dfrac83-8\right) = (9-12)-\left(-\dfrac{16}{3}\right) = -3+\dfrac{16}{3}=\dfrac73\).</div>
      <em>Conclusion: total area \(=\left|-\dfrac{16}{3}\right|+\dfrac73=\dfrac{16}{3}+\dfrac73=\dfrac{23}{3}\) square units. ✓ (simply computing $\int_0^3(x^2-4)dx$ directly would have wrongly cancelled the two regions)</em>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 4 — using integral properties</h3><p>Given \(\displaystyle\int_0^6f(x)\,dx=20\) and \(\displaystyle\int_0^4f(x)\,dx=13\), find \(\displaystyle\int_4^6f(x)\,dx\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Integrals over adjacent intervals add: \(\displaystyle\int_0^4f\,dx+\int_4^6f\,dx=\int_0^6f\,dx\).</div>
      <em>Conclusion: \(\displaystyle\int_4^6f(x)\,dx=20-13=7\). ✓</em>
    </div>
  </div>
  <div class="example-box" style="background-color:#fff0f5;border-left:5px solid #c2185b;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>⭐ Advanced Example — accumulated change in context</h3><p>A tank's water flow rate is \(r(t)=6-2t\) litres/minute (positive = filling, negative = draining), for \(0\leq t\leq5\). Find the net change in volume, and explain what a negative value for part of this interval means physically.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Net change \(=\displaystyle\int_0^5(6-2t)\,dt = \big[6t-t^2\big]_0^5 = (30-25)-0\).</div>
      <div class="step"><strong>Step 2:</strong> \(r(t)=0\) at \(t=3\); for \(t>3\), \(r(t)<0\), meaning the tank is draining rather than filling.</div>
      <em>Conclusion: net change in volume over $[0,5]$ is $+5$ litres — even though the tank drains for the last 2 minutes, the earlier filling more than makes up for it. ✓</em>
    </div>
  </div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Evaluate $\displaystyle\int_0^2(3x^2+2)\,dx$.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: $[x^3+2x]_0^2=8+4=12$.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Find the area under $f(x)=4-x^2$ between $x=-2$ and $x=2$.</p><details><summary>View answer</summary><div class="solution"><div class="step">$[4x-x^3/3]_{-2}^2=(8-8/3)-(-8+8/3)$. <em>Answer: $\dfrac{32}{3}$.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Find the total (unsigned) area between $f(x)=x^2-9$ and the x-axis on $[0,4]$.</p><details><summary>View answer</summary><div class="solution"><div class="step">Intercept at $x=3$. $\int_0^3(x^2-9)dx=9-27=-18$; $\int_3^4(x^2-9)dx=(64/3-36)-(9-27)=(-44/3)-(-18)=10/3$. <em>Answer: $18+10/3=64/3$.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Given $\int_1^8f\,dx=30$ and $\int_5^8f\,dx=18$, find $\int_1^5f\,dx$.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: $30-18=12$.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5 — Challenge</h3><p>A rate function is $r(t)=8-4t$ for $0\le t\le4$. Find the net accumulated change over $[0,4]$, and explain the sign of the result.</p><details><summary>View answer</summary><div class="solution"><div class="step">$[8t-2t^2]_0^4=32-32=0$. <em>Answer: net change is $0$ — the negative accumulation after $t=2$ exactly cancels the positive accumulation before it.</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: What's the difference between "signed area" and "true area"?</h3><p><em>Signed area lets regions below the x-axis subtract from the total (which is what a plain definite integral computes); true area treats every region as positive and must be found by splitting at x-intercepts first.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: Why can definite integrals over adjacent intervals be added?</h3><p><em>The Fundamental Theorem of Calculus makes this automatic — $F(b)-F(a)$ plus $F(c)-F(b)$ telescopes to $F(c)-F(a)$, matching one integral over the combined interval.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: How do you know when to split an integral before computing "area"?</h3><p><em>Whenever the function changes sign somewhere inside the interval — check for x-intercepts first before deciding whether one integral is enough.</em></p></div>
</div>`),
]);

u6["6.3"] = L("6.3", "Integration of Trig & Exponential Functions", [
  html(String.raw`<div class="lecture-box">
  <h1>🎼 Integration of Trig &amp; Exponential Functions</h1>
  <p><strong>Overview.</strong> Just as differentiation has base rules for trig, exponential, and logarithmic functions, integration reverses each one — including the linear-substitution pattern that appears throughout this unit.</p>
  <h2>📌 Base Antiderivatives</h2>
  <p style="text-align:center;">\( \displaystyle\int\sin x\,dx=-\cos x+C \qquad \int\cos x\,dx=\sin x+C \qquad \int e^x\,dx=e^x+C \qquad \int\dfrac1x\,dx=\ln|x|+C \)</p>
  <h2>📌 With Linear Substitution</h2>
  <p style="text-align:center;">\( \displaystyle\int\sin(ax+b)\,dx=-\dfrac{\cos(ax+b)}{a}+C \qquad \int e^{ax+b}\,dx=\dfrac{e^{ax+b}}{a}+C \qquad \int\dfrac{1}{ax+b}\,dx=\dfrac{\ln|ax+b|}{a}+C \)</p>
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}>
    <h3>Example 1</h3><p>Find \(\displaystyle\int(4\cos x - e^x)\,dx\).</p>
    <div class="solution">
      <em>Conclusion: \(4\sin x - e^x+C\). ✓</em>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 2</h3><p>Find \(\displaystyle\int e^{3x-1}\,dx\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Divide by the inner derivative \(a=3\): \(\dfrac{e^{3x-1}}{3}\).</div>
      <em>Conclusion: \(\dfrac{e^{3x-1}}{3}+C\). ✓</em>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 3</h3><p>Find \(\displaystyle\int\sin\!\left(2x+\dfrac{\pi}{4}\right)dx\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> The antiderivative pattern is \(-\dfrac{\cos(\cdot)}{a}\) with \(a=2\): \(-\dfrac{\cos\!\left(2x+\frac{\pi}{4}\right)}{2}\).</div>
      <em>Conclusion: \(-\dfrac12\cos\!\left(2x+\dfrac{\pi}{4}\right)+C\). ✓</em>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 4 — logarithmic form</h3><p>Find \(\displaystyle\int\dfrac{1}{2x-5}\,dx\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Divide by the inner derivative \(a=2\): \(\dfrac{\ln|2x-5|}{2}\).</div>
      <em>Conclusion: \(\dfrac12\ln|2x-5|+C\). ✓</em>
    </div>
  </div>
  <div class="example-box" style="background-color:#fff0f5;border-left:5px solid #c2185b;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>⭐ Advanced Example — definite integral, combined types</h3><p>Evaluate \(\displaystyle\int_0^{\pi/2}(2\sin x+3\cos x)\,dx\) exactly.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Antiderivative: \(-2\cos x+3\sin x\).</div>
      <div class="step"><strong>Step 2:</strong> Evaluate at \(x=\dfrac{\pi}{2}\): \(-2\cos\!\left(\tfrac{\pi}2\right)+3\sin\!\left(\tfrac{\pi}2\right) = -2(0)+3(1)=3\).</div>
      <div class="step"><strong>Step 3:</strong> Evaluate at \(x=0\): \(-2\cos(0)+3\sin(0)=-2(1)+3(0)=-2\).</div>
      <em>Conclusion: \(\displaystyle\int_0^{\pi/2}(2\sin x+3\cos x)\,dx = 3-(-2)=5\). ✓</em>
    </div>
  </div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Find $\displaystyle\int(3\sin x+2e^x)\,dx$.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: $-3\cos x+2e^x+C$.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Find $\displaystyle\int e^{4x+3}\,dx$.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: $\dfrac{e^{4x+3}}{4}+C$.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Find $\displaystyle\int\cos(5x-1)\,dx$.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: $\dfrac{\sin(5x-1)}{5}+C$.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Find $\displaystyle\int\dfrac{1}{4x+1}\,dx$.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: $\dfrac14\ln|4x+1|+C$.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5 — Challenge</h3><p>Evaluate $\displaystyle\int_0^{\pi}\sin x\,dx$ exactly, and explain geometrically why the result is positive even though sine is negative on part of $[0,\pi]$... or is it? Check first.</p><details><summary>View answer</summary><div class="solution"><div class="step">$[-\cos x]_0^\pi=(1)-(-1)=2$. Sine is actually $\ge0$ on all of $[0,\pi]$. <em>Answer: $2$ — the integral is positive because $\sin x\geq0$ throughout this entire interval, with no sign change to worry about.</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: Why does $\int\sin x\,dx$ pick up a negative sign but $\int\cos x\,dx$ doesn't?</h3><p><em>It's the reverse of differentiation: since $\dfrac{d}{dx}[\cos x]=-\sin x$, integrating $\sin x$ must undo that sign flip, giving $-\cos x$.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: Why is there an absolute value in $\int\frac1x dx=\ln|x|+C$?</h3><p><em>$\ln x$ is only defined for positive $x$, but $\dfrac1x$ is defined for negative $x$ too — the absolute value extends the antiderivative to the whole domain where $\dfrac1x$ makes sense.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: What's the general rule for spotting when linear substitution applies?</h3><p><em>Whenever the "inside" of a sin, cos, exponential, or $\frac1{(\cdot)}$ expression is a linear function of $x$ (like $ax+b$), not $x$ alone.</em></p></div>
</div>`),
]);

u6["6.4"] = L("6.4", "Applications: Area Between Curves & Kinematics", [
  html(String.raw`<div class="lecture-box">
  <h1>🧩 Applications: Area Between Curves &amp; Kinematics</h1>
  <p><strong>Overview.</strong> This closing lesson brings the whole unit together: finding the area trapped between two curves (starting by finding where they cross), and properly computing total distance travelled by integrating the <em>absolute value</em> of velocity — the rigorous version of the idea introduced back in Unit 5.</p>
  <h2>📌 Area Between Two Curves</h2>
  <p style="text-align:center;">\( \text{Area} = \displaystyle\int_a^b \big[f(x)-g(x)\big]\,dx \)</p>
  <p>where \(f(x)\geq g(x)\) on \([a,b]\), and \(a,b\) are the curves' intersection points (find these first by solving \(f(x)=g(x)\)).</p>
  <h2>📌 Displacement vs Total Distance via Integration</h2>
  <p style="text-align:center;">\( \text{displacement} = \displaystyle\int_a^b v(t)\,dt \qquad \text{total distance} = \displaystyle\int_a^b |v(t)|\,dt \)</p>
  <p>If \(v(t)\) changes sign inside \([a,b]\), split at that time and take the absolute value of each piece — exactly the "true area" technique from the previous lesson, applied to motion.</p>
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}>
    <h3>Example 1</h3><p>Find the area enclosed between \(f(x)=x+2\) and \(g(x)=x^2\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Find intersections: \(x+2=x^2 \Rightarrow x^2-x-2=0 \Rightarrow (x-2)(x+1)=0\), so \(x=-1,2\).</div>
      <div class="step"><strong>Step 2:</strong> Check which is on top between them (e.g. at $x=0$: $f=2>g=0$), so \(f\) is above \(g\): \(\text{Area}=\displaystyle\int_{-1}^2\big[(x+2)-x^2\big]\,dx\).</div>
      <div class="step"><strong>Step 3:</strong> Antiderivative: \(\dfrac{x^2}{2}+2x-\dfrac{x^3}{3}\). At \(x=2\): \(2+4-\tfrac83=\tfrac{10}{3}\). At \(x=-1\): \(\tfrac12-2+\tfrac13=-\tfrac76\).</div>
      <em>Conclusion: Area \(=\dfrac{10}{3}-\left(-\dfrac76\right)=\dfrac{20}{6}+\dfrac76=\dfrac{27}{6}=\dfrac92\) square units. ✓</em>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 2 — a harder intersection</h3><p>Find the area enclosed between \(f(x)=6-x^2\) and \(g(x)=x^2-2\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Set equal: \(6-x^2=x^2-2 \Rightarrow 8=2x^2 \Rightarrow x^2=4 \Rightarrow x=\pm2\).</div>
      <div class="step"><strong>Step 2:</strong> At $x=0$: $f=6>g=-2$, so $f$ is on top: \(\text{Area}=\displaystyle\int_{-2}^2\big[(6-x^2)-(x^2-2)\big]\,dx=\int_{-2}^2(8-2x^2)\,dx\).</div>
      <div class="step"><strong>Step 3:</strong> Antiderivative: \(8x-\dfrac{2x^3}{3}\). At \(x=2\): \(16-\tfrac{16}{3}=\tfrac{32}{3}\). At \(x=-2\): \(-16+\tfrac{16}{3}=-\tfrac{32}{3}\).</div>
      <em>Conclusion: Area \(=\dfrac{32}{3}-\left(-\dfrac{32}{3}\right)=\dfrac{64}{3}\) square units. ✓</em>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 3 — displacement via integration</h3><p>A particle's velocity is \(v(t)=4t-8\) m/s. Find its displacement from \(t=0\) to \(t=5\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(\displaystyle\int_0^5(4t-8)\,dt = \big[2t^2-8t\big]_0^5 = (50-40)-0\).</div>
      <em>Conclusion: displacement \(=10\) m. ✓</em>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 4 — total distance via integration</h3><p>Using the same \(v(t)=4t-8\), find the total distance travelled from \(t=0\) to \(t=5\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(v(t)=0\) at \(t=2\); \(v(t)<0\) on $(0,2)$ and $v(t)>0$ on $(2,5)$, so split there.</div>
      <div class="step"><strong>Step 2:</strong> \(\displaystyle\int_0^2(4t-8)\,dt=\big[2t^2-8t\big]_0^2=(8-16)-0=-8\).</div>
      <div class="step"><strong>Step 3:</strong> \(\displaystyle\int_2^5(4t-8)\,dt=(50-40)-(8-16)=10-(-8)=18\).</div>
      <em>Conclusion: total distance \(=|-8|+|18|=26\) m — quite different from the net displacement of $10$ m found in Example 3, since the particle backtracked during $[0,2]$. ✓</em>
    </div>
  </div>
  <div class="example-box" style="background-color:#fff0f5;border-left:5px solid #c2185b;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>⭐ Advanced Example — comparing accumulated profit</h3><p>Two companies' profit rates (in \$1000s/month) over the first year are modelled by \(p_1(t)=t+5\) and \(p_2(t)=0.5t^2\), for \(0\leq t\leq12\). Find the total interval where Company 1 out-earns Company 2, and the extra profit Company 1 accumulates over that interval.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Find where the rates are equal: \(t+5=0.5t^2 \Rightarrow 0.5t^2-t-5=0 \Rightarrow t^2-2t-10=0\).</div>
      <div class="step"><strong>Step 2:</strong> Quadratic formula: \(t=\dfrac{2\pm\sqrt{4+40}}{2}=\dfrac{2\pm\sqrt{44}}{2}=1\pm\sqrt{11}\); taking the positive root inside $[0,12]$: \(t=1+\sqrt{11}\approx4.317\).</div>
      <div class="step"><strong>Step 3:</strong> For \(0\leq t<4.317\), check $t=0$: $p_1=5>p_2=0$, so Company 1 leads on this interval. Extra profit: \(\displaystyle\int_0^{4.317}\big[(t+5)-0.5t^2\big]\,dt\).</div>
      <div class="step"><strong>Step 4:</strong> Antiderivative: \(\dfrac{t^2}{2}+5t-\dfrac{t^3}{6}\); evaluating at \(t\approx4.317\): \(9.32+21.58-13.42\approx17.48\).</div>
      <em>Conclusion: Company 1 leads for the first \(\approx4.32\) months, accumulating about \(\$17{,}480\) more profit than Company 2 over that period. ✓ (a genuine multi-step problem: solve for the crossing point, then integrate the difference)</em>
    </div>
  </div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Find the area enclosed between $f(x)=8-x^2$ and $g(x)=x^2$.</p><details><summary>View answer</summary><div class="solution"><div class="step">Intersect at $x=\pm2$. $\int_{-2}^2(8-2x^2)dx=[8x-\tfrac23x^3]_{-2}^2=(16-\tfrac{16}3)-(-16+\tfrac{16}3)$. <em>Answer: $\dfrac{64}{3}$.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Find the area enclosed between $f(x)=x+4$ and $g(x)=x^2-2$.</p><details><summary>View answer</summary><div class="solution"><div class="step">$x+4=x^2-2\Rightarrow x^2-x-6=0\Rightarrow(x-3)(x+2)=0$. $\int_{-2}^3[(x+4)-(x^2-2)]dx=\int_{-2}^3(6+x-x^2)dx$. <em>Answer: $\dfrac{125}{6}$.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>$v(t)=6t-12$ m/s. Find the displacement from $t=0$ to $t=4$.</p><details><summary>View answer</summary><div class="solution"><div class="step">$[3t^2-12t]_0^4=(48-48)-0$. <em>Answer: $0$ m.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Using the same $v(t)=6t-12$, find the total distance travelled from $t=0$ to $t=4$.</p><details><summary>View answer</summary><div class="solution"><div class="step">$v=0$ at $t=2$. $\int_0^2(6t-12)dt=(12-24)-0=-12$. $\int_2^4(6t-12)dt=(48-48)-(12-24)=0-(-12)=12$. <em>Answer: $12+12=24$ m.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5 — Challenge</h3><p>Find the area enclosed between $f(x)=x^2-4x$ and $g(x)=-x^2+4x$.</p><details><summary>View answer</summary><div class="solution"><div class="step">$x^2-4x=-x^2+4x\Rightarrow2x^2-8x=0\Rightarrow2x(x-4)=0$, so $x=0,4$. Between: $g>f$. $\int_0^4[(-x^2+4x)-(x^2-4x)]dx=\int_0^4(8x-2x^2)dx=[4x^2-\tfrac23x^3]_0^4=64-\tfrac{128}3$. <em>Answer: $\dfrac{64}{3}$.</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: Why must you find the intersection points before setting up an area-between-curves integral?</h3><p><em>They define the bounds of integration, and you also need to know which curve is "on top" within that interval so the subtraction gives a positive area.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: How is "total distance via integration" really the same idea as "true area" from the previous lesson?</h3><p><em>Both split the domain at every sign change of the function being integrated and add the absolute value of each resulting piece — one applied to a generic $f(x)$, the other specifically to $v(t)$.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: If two curves cross more than twice, how does the setup change?</h3><p><em>You'd need one integral for each interval between consecutive intersection points, since "which curve is on top" can flip at every crossing.</em></p></div>
</div>`),
]);
