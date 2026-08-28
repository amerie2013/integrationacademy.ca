// IB Math AA SL — Unit 5: Differential Calculus. Original content and examples,
// written at full SL exam difficulty (first-principles derivations, layered
// product/chain-rule combinations, the "critical point that isn't an extremum"
// subtlety, and multi-stage optimization/kinematics problems) — informed by,
// but never copied from, any published textbook.
import { html, gframe } from "./seed-mpm2d.mjs";
const L = (code, title, blocks) => ({ code, title, blocks });
const EX = `style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const PR = `style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const QA = `style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
export const u5 = {};

u5["5.1"] = L("5.1", "Limits & Introducing the Derivative", [
  html(String.raw`<div class="lecture-box">
  <h1>🌀 Limits &amp; Introducing the Derivative</h1>
  <p><strong>Overview.</strong> Calculus begins with a single question: what does a function do as \(x\) gets arbitrarily close to some value, without necessarily reaching it? This idea of a <strong>limit</strong> lets us define the derivative — the instantaneous rate of change — as the limit of a slope between two points that get closer and closer together.</p>
  <h2>📌 Evaluating Limits</h2>
  <p>Try direct substitution first. If that gives \(\dfrac00\) (an <strong>indeterminate form</strong>), factor or rationalize to cancel the term causing the problem, then substitute again.</p>
  <h2>📌 The Derivative from First Principles</h2>
  <p style="text-align:center;">\( f'(x) = \lim_{h\to0}\dfrac{f(x+h)-f(x)}{h} \)</p>
  <p>This is the limit of the slope of a secant line through \((x,f(x))\) and \((x+h,f(x+h))\), as \(h\to0\) — the secant becomes the <strong>tangent</strong>.</p>
  <div style="text-align:center;margin:14px 0;">
    ${gframe(["y = x*x", "y = 2*x-1"], { title: "as h → 0, the secant through nearby points on y = x² becomes the tangent at x = 1", xMin: -2, xMax: 4, yMin: -2, yMax: 8 })}
  </div>
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}>
    <h3>Example 1</h3><p>Evaluate \(\displaystyle\lim_{x\to2}(3x^2-x+4)\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> This is a polynomial, so direct substitution works: \(3(2)^2-2+4=12-2+4\).</div>
      <em>Conclusion: the limit is \(14\). ✓</em>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 2 — factoring an indeterminate form</h3><p>Evaluate \(\displaystyle\lim_{x\to3}\dfrac{x^2-9}{x-3}\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Direct substitution gives \(\dfrac00\), so factor the numerator: \(\dfrac{(x-3)(x+3)}{x-3}\).</div>
      <div class="step"><strong>Step 2:</strong> Cancel the common factor (valid since \(x\neq3\) throughout the limit process): \(x+3\).</div>
      <em>Conclusion: \(\displaystyle\lim_{x\to3}\dfrac{x^2-9}{x-3}=3+3=6\). ✓</em>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 3 — rationalizing</h3><p>Evaluate \(\displaystyle\lim_{x\to0}\dfrac{\sqrt{x+4}-2}{x}\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Direct substitution gives \(\dfrac00\). Multiply by the conjugate: \(\dfrac{\sqrt{x+4}-2}{x}\times\dfrac{\sqrt{x+4}+2}{\sqrt{x+4}+2}\).</div>
      <div class="step"><strong>Step 2:</strong> The numerator becomes \((x+4)-4=x\): \(\dfrac{x}{x(\sqrt{x+4}+2)}\).</div>
      <div class="step"><strong>Step 3:</strong> Cancel \(x\): \(\dfrac{1}{\sqrt{x+4}+2}\), then substitute \(x=0\): \(\dfrac{1}{\sqrt4+2}=\dfrac{1}{4}\).</div>
      <em>Conclusion: the limit is \(\dfrac14\). ✓</em>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 4 — first principles</h3><p>Use first principles to find the derivative of \(f(x)=x^2\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(f'(x)=\displaystyle\lim_{h\to0}\dfrac{(x+h)^2-x^2}{h}\).</div>
      <div class="step"><strong>Step 2:</strong> Expand the numerator: \((x^2+2xh+h^2)-x^2=2xh+h^2\).</div>
      <div class="step"><strong>Step 3:</strong> Factor and cancel \(h\): \(\dfrac{h(2x+h)}{h}=2x+h\), then let \(h\to0\).</div>
      <em>Conclusion: \(f'(x)=2x\). ✓</em>
    </div>
  </div>
  <div class="example-box" style="background-color:#fff0f5;border-left:5px solid #c2185b;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>⭐ Advanced Example — first principles for a general quadratic</h3><p>Use first principles to find the derivative of \(f(x)=ax^2+bx+c\), where \(a,b,c\) are constants.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(f(x+h)=a(x+h)^2+b(x+h)+c = a(x^2+2xh+h^2)+bx+bh+c\).</div>
      <div class="step"><strong>Step 2:</strong> \(f(x+h)-f(x) = a(2xh+h^2)+bh = h(2ax+ah+b)\) (grouping every term that carries a factor of \(h\)).</div>
      <div class="step"><strong>Step 3:</strong> Divide by \(h\): \(2ax+ah+b\), then let \(h\to0\).</div>
      <em>Conclusion: \(f'(x)=2ax+b\) — this single derivation proves the power rule for every quadratic at once. ✓</em>
    </div>
  </div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Evaluate $\displaystyle\lim_{x\to-1}(2x^2+5x-3)$.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: $2-5-3=-6$.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Evaluate $\displaystyle\lim_{x\to5}\dfrac{x^2-25}{x-5}$.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: $x+5\to10$.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Evaluate $\displaystyle\lim_{x\to0}\dfrac{\sqrt{x+9}-3}{x}$.</p><details><summary>View answer</summary><div class="solution"><div class="step">Rationalize: $\dfrac{1}{\sqrt{x+9}+3}$. <em>Answer: $\dfrac16$.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Use first principles to find the derivative of $f(x)=3x^2$.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: $f'(x)=6x$.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5 — Challenge</h3><p>Use first principles to find the derivative of $f(x)=x^2+4x$.</p><details><summary>View answer</summary><div class="solution"><div class="step">$f(x+h)-f(x)=2xh+h^2+4h=h(2x+h+4)$. <em>Answer: $f'(x)=2x+4$.</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: Why does direct substitution sometimes fail?</h3><p><em>If it produces $\dfrac00$, the function has a removable discontinuity there — algebra (factoring/rationalizing) reveals what value the function is actually approaching.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: What does $h$ represent in the first-principles definition?</h3><p><em>A small horizontal gap between two points on the curve — as $h\to0$, the second point slides into the first, and the secant's slope becomes the tangent's slope.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: Why is it valid to cancel $h$ before taking the limit?</h3><p><em>Throughout the limit process $h\neq0$ (it only approaches 0, never equals it), so dividing by $h$ is a legitimate algebraic step.</em></p></div>
</div>`),
]);

u5["5.2"] = L("5.2", "Differentiation Rules", [
  html(String.raw`<div class="lecture-box">
  <h1>⚙️ Differentiation Rules</h1>
  <p><strong>Overview.</strong> First principles works, but it's slow. This lesson covers the shortcut rules — power, product, quotient, and chain — that let you differentiate almost any combination of functions directly, including the layered cases where more than one rule is needed at once.</p>
  <h2>📌 The Rules</h2>
  <p style="text-align:center;">\( \dfrac{d}{dx}[x^n]=nx^{n-1} \)</p>
  <p><strong>Product rule:</strong> \((uv)'=u'v+uv'\). <strong>Quotient rule:</strong> \(\left(\dfrac uv\right)'=\dfrac{u'v-uv'}{v^2}\). <strong>Chain rule:</strong> \(\dfrac{d}{dx}[f(g(x))]=f'(g(x))\cdot g'(x)\).</p>
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}>
    <h3>Example 1</h3><p>Differentiate \(f(x)=5x^4-3x^2+7x-2\).</p>
    <div class="solution">
      <em>Conclusion: \(f'(x)=20x^3-6x+7\). ✓</em>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 2 — product rule</h3><p>Differentiate \(f(x)=(2x-1)(x^2+3)\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Let \(u=2x-1\), \(v=x^2+3\), so \(u'=2\), \(v'=2x\).</div>
      <div class="step"><strong>Step 2:</strong> \(f'(x)=u'v+uv' = 2(x^2+3)+(2x-1)(2x)\).</div>
      <div class="step"><strong>Step 3:</strong> Expand: \(2x^2+6+4x^2-2x = 6x^2-2x+6\).</div>
      <em>Conclusion: \(f'(x)=6x^2-2x+6\). ✓</em>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 3 — quotient rule</h3><p>Differentiate \(f(x)=\dfrac{3x}{x^2+1}\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(u=3x\), \(v=x^2+1\), so \(u'=3\), \(v'=2x\).</div>
      <div class="step"><strong>Step 2:</strong> \(f'(x)=\dfrac{3(x^2+1)-3x(2x)}{(x^2+1)^2} = \dfrac{3x^2+3-6x^2}{(x^2+1)^2}\).</div>
      <em>Conclusion: \(f'(x)=\dfrac{3-3x^2}{(x^2+1)^2}\). ✓</em>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 4 — chain rule</h3><p>Differentiate \(f(x)=(4x-5)^6\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Outer function \(u^6\), inner function \(u=4x-5\), with \(u'=4\).</div>
      <div class="step"><strong>Step 2:</strong> \(f'(x)=6(4x-5)^5\cdot4\).</div>
      <em>Conclusion: \(f'(x)=24(4x-5)^5\). ✓</em>
    </div>
  </div>
  <div class="example-box" style="background-color:#fff0f5;border-left:5px solid #c2185b;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>⭐ Advanced Example — product rule combined with the chain rule</h3><p>Differentiate \(f(x)=x^2(3x-1)^4\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Let \(u=x^2\), \(v=(3x-1)^4\). Then \(u'=2x\), and by the chain rule \(v'=4(3x-1)^3\cdot3=12(3x-1)^3\).</div>
      <div class="step"><strong>Step 2:</strong> \(f'(x)=u'v+uv' = 2x(3x-1)^4 + x^2\cdot12(3x-1)^3\).</div>
      <div class="step"><strong>Step 3:</strong> Factor out the common factor \(2x(3x-1)^3\): \(2x(3x-1)^3\big[(3x-1)+6x\big]\).</div>
      <em>Conclusion: \(f'(x)=2x(3x-1)^3(9x-1)\). ✓ (factoring the shared pieces first makes the final expression far cleaner than leaving it expanded)</em>
    </div>
  </div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Differentiate $f(x)=7x^3-4x^2+x-9$.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: $f'(x)=21x^2-8x+1$.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Differentiate $f(x)=(x+5)(2x^2-1)$ using the product rule.</p><details><summary>View answer</summary><div class="solution"><div class="step">$1(2x^2-1)+(x+5)(4x)$. <em>Answer: $f'(x)=6x^2+20x-1$.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Differentiate $f(x)=\dfrac{x^2}{2x+1}$ using the quotient rule.</p><details><summary>View answer</summary><div class="solution"><div class="step">$\dfrac{2x(2x+1)-x^2(2)}{(2x+1)^2}$. <em>Answer: $f'(x)=\dfrac{2x^2+2x}{(2x+1)^2}$.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Differentiate $f(x)=(5-2x)^3$ using the chain rule.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: $f'(x)=-6(5-2x)^2$.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5 — Challenge</h3><p>Differentiate $f(x)=x^3(2x+3)^2$, factoring your final answer.</p><details><summary>View answer</summary><div class="solution"><div class="step">$3x^2(2x+3)^2+x^3\cdot2(2x+3)\cdot2$. Factor $x^2(2x+3)$: $3(2x+3)+4x$. <em>Answer: $f'(x)=x^2(2x+3)(10x+9)$.</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: How do I know which rule to apply first in a layered expression?</h3><p><em>Identify the outermost operation — a product, a quotient, or a composition — and start there; any inner pieces that are themselves composite functions get the chain rule as you differentiate them.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: Why does factoring the final derivative matter?</h3><p><em>An unfactored derivative is hard to analyze further (e.g., for finding where it equals zero); factoring reveals the roots directly.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: Is the quotient rule ever avoidable?</h3><p><em>Yes — rewriting $\dfrac{u}{v}$ as $u\cdot v^{-1}$ and using the product and chain rules gives the same result, which some students find easier to track.</em></p></div>
</div>`),
]);

u5["5.3"] = L("5.3", "Derivatives of Trig, Exponential & Log Functions", [
  html(String.raw`<div class="lecture-box">
  <h1>📐 Derivatives of Trig, Exponential &amp; Log Functions</h1>
  <p><strong>Overview.</strong> Beyond polynomials, three families of functions come up constantly in calculus: trigonometric, exponential, and logarithmic. Each has its own base derivative, and combined with the chain rule they cover almost every function you'll differentiate in this course.</p>
  <h2>📌 Base Derivatives</h2>
  <p style="text-align:center;">\( \dfrac{d}{dx}[\sin x]=\cos x \qquad \dfrac{d}{dx}[\cos x]=-\sin x \qquad \dfrac{d}{dx}[e^x]=e^x \qquad \dfrac{d}{dx}[\ln x]=\dfrac1x \)</p>
  <h2>📌 Combined with the Chain Rule</h2>
  <p style="text-align:center;">\( \dfrac{d}{dx}[e^{g(x)}]=g'(x)e^{g(x)} \qquad \dfrac{d}{dx}[\ln(g(x))]=\dfrac{g'(x)}{g(x)} \qquad \dfrac{d}{dx}[\sin(g(x))]=g'(x)\cos(g(x)) \)</p>
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}>
    <h3>Example 1</h3><p>Differentiate \(f(x)=3\sin x - 5\cos x + e^x\).</p>
    <div class="solution">
      <em>Conclusion: \(f'(x)=3\cos x+5\sin x+e^x\). ✓</em>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 2 — chain rule with exponentials</h3><p>Differentiate \(f(x)=e^{3x^2-x}\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Inner function \(g(x)=3x^2-x\), so \(g'(x)=6x-1\).</div>
      <em>Conclusion: \(f'(x)=(6x-1)e^{3x^2-x}\). ✓</em>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 3 — chain rule with logarithms</h3><p>Differentiate \(f(x)=\ln(5x^2-2)\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Inner function \(g(x)=5x^2-2\), so \(g'(x)=10x\).</div>
      <em>Conclusion: \(f'(x)=\dfrac{10x}{5x^2-2}\). ✓</em>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 4 — product rule with an exponential</h3><p>Differentiate \(f(x)=x^3e^{2x}\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Let \(u=x^3\), \(v=e^{2x}\), so \(u'=3x^2\), and by the chain rule \(v'=2e^{2x}\).</div>
      <div class="step"><strong>Step 2:</strong> \(f'(x)=3x^2e^{2x}+x^3\cdot2e^{2x}\).</div>
      <div class="step"><strong>Step 3:</strong> Factor out \(x^2e^{2x}\): \(x^2e^{2x}(3+2x)\).</div>
      <em>Conclusion: \(f'(x)=x^2e^{2x}(2x+3)\). ✓</em>
    </div>
  </div>
  <div class="example-box" style="background-color:#fff0f5;border-left:5px solid #c2185b;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>⭐ Advanced Example — deriving the derivative of tan x</h3><p>Using the quotient rule and the identity \(\tan x=\dfrac{\sin x}{\cos x}\), prove that \(\dfrac{d}{dx}[\tan x]=\sec^2x\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Apply the quotient rule with \(u=\sin x\), \(v=\cos x\): \(u'=\cos x\), \(v'=-\sin x\).</div>
      <div class="step"><strong>Step 2:</strong> \(\dfrac{d}{dx}[\tan x]=\dfrac{\cos x\cdot\cos x - \sin x\cdot(-\sin x)}{\cos^2x} = \dfrac{\cos^2x+\sin^2x}{\cos^2x}\).</div>
      <div class="step"><strong>Step 3:</strong> By the Pythagorean identity, the numerator is exactly \(1\): \(\dfrac{1}{\cos^2x}\).</div>
      <em>Conclusion: \(\dfrac{d}{dx}[\tan x]=\dfrac{1}{\cos^2x}=\sec^2x\). ✓</em>
    </div>
  </div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Differentiate $f(x)=4\cos x+\ln x$.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: $f'(x)=-4\sin x+\dfrac1x$.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Differentiate $f(x)=e^{4x+1}$.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: $f'(x)=4e^{4x+1}$.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Differentiate $f(x)=\ln(x^2+7)$.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: $f'(x)=\dfrac{2x}{x^2+7}$.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Differentiate $f(x)=x^2\sin x$ using the product rule.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: $f'(x)=2x\sin x+x^2\cos x$.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5 — Challenge</h3><p>Differentiate $f(x)=\dfrac{e^{2x}}{x}$ using the quotient rule.</p><details><summary>View answer</summary><div class="solution"><div class="step">$\dfrac{2e^{2x}(x)-e^{2x}(1)}{x^2}$. <em>Answer: $f'(x)=\dfrac{e^{2x}(2x-1)}{x^2}$.</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: Why does $e^x$ differentiate to itself?</h3><p><em>It's essentially the defining property of $e$ — it's the unique base for which the exponential function's instantaneous growth rate always equals its current value.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: What's the fastest way to remember the trig derivatives?</h3><p><em>$\sin\to\cos$ (no sign change), $\cos\to-\sin$ (picks up a negative) — everything else (tan, sec, etc.) can be derived from these two using the quotient rule.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: Why does $\ln(g(x))$ differentiate to $g'(x)/g(x)$?</h3><p><em>It's the chain rule applied to $\ln x\to\dfrac1x$: the "outer" derivative $\dfrac{1}{g(x)}$ gets multiplied by the "inner" derivative $g'(x)$.</em></p></div>
</div>`),
]);

u5["5.4"] = L("5.4", "Curve Sketching with Derivatives", [
  html(String.raw`<div class="lecture-box">
  <h1>📉 Curve Sketching with Derivatives</h1>
  <p><strong>Overview.</strong> The first and second derivatives reveal a curve's entire shape without plotting a single extra point: where it rises and falls, where it turns, and where it bends. This lesson also covers a classic subtlety — a critical point where \(f'(x)=0\) but the function doesn't actually turn around.</p>
  <h2>📌 Critical Points &amp; the First Derivative Test</h2>
  <p>A <strong>critical point</strong> occurs where \(f'(x)=0\) (or is undefined). If \(f'\) changes from positive to negative there, it's a <strong>local maximum</strong>; negative to positive, a <strong>local minimum</strong>; no sign change at all, <strong>neither</strong>.</p>
  <h2>📌 The Second Derivative Test &amp; Concavity</h2>
  <p>\(f''(x)>0\): concave up (curve holds water) — a critical point here is a local min. \(f''(x)<0\): concave down — a local max. An <strong>inflection point</strong> is where concavity switches, i.e. \(f''(x)=0\) with a sign change.</p>
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}>
    <h3>Example 1 — first derivative test</h3><p>Find and classify the critical points of \(f(x)=x^3-3x^2\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(f'(x)=3x^2-6x=3x(x-2)\). Set to zero: \(x=0\) or \(x=2\).</div>
      <div class="step"><strong>Step 2:</strong> Test signs: \(f'(-1)=9>0\); \(f'(1)=-3<0\); \(f'(3)=9>0\).</div>
      <em>Conclusion: \(f'\) goes \(+\to-\) at \(x=0\) (local max), and \(-\to+\) at \(x=2\) (local min). ✓</em>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 2 — second derivative test</h3><p>Confirm the classification of \(f(x)=x^3-3x^2\)'s critical points using the second derivative.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(f''(x)=6x-6\).</div>
      <div class="step"><strong>Step 2:</strong> \(f''(0)=-6<0\) (concave down: confirms local max). \(f''(2)=6>0\) (concave up: confirms local min).</div>
      <em>Conclusion: same result as the first derivative test — local max at \(x=0\), local min at \(x=2\). ✓</em>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 3 — inflection point</h3><p>Find the inflection point of \(f(x)=x^3-3x^2\) and state the intervals of concavity.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Set \(f''(x)=6x-6=0 \Rightarrow x=1\).</div>
      <div class="step"><strong>Step 2:</strong> \(f''\) is negative for \(x<1\) (concave down) and positive for \(x>1\) (concave up) — a genuine sign change.</div>
      <em>Conclusion: inflection point at \(x=1\), where \(f(1)=1-3=-2\), i.e. \((1,-2)\); concave down on \((-\infty,1)\), concave up on \((1,\infty)\). ✓</em>
      <div style="text-align:center;margin:10px 0;">${gframe(["y = x*x*x-3*x*x"], { title: "y = x³ − 3x²: max at (0,0), inflection at (1,−2), min at (2,−4)", xMin: -2, xMax: 4, yMin: -6, yMax: 4 })}</div>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 4 — full analysis</h3><p>Find and classify all critical points of \(f(x)=3x^4-4x^3\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(f'(x)=12x^3-12x^2=12x^2(x-1)\). Critical points: \(x=0\) and \(x=1\).</div>
      <div class="step"><strong>Step 2:</strong> \(f''(x)=36x^2-24x\). \(f''(1)=36-24=12>0\) — local min at \(x=1\).</div>
      <div class="step"><strong>Step 3:</strong> \(f''(0)=0\), so the second derivative test is inconclusive there — check sign of \(f'\) instead: \(f'(-1)=12(1)(-2)=-24<0\); \(f'(0.5)=12(0.25)(-0.5)=-1.5<0\). No sign change through \(x=0\).</div>
      <em>Conclusion: \(x=0\) is a critical point but <strong>not</strong> an extremum (the curve flattens but keeps decreasing); \(x=1\) is a genuine local minimum. ✓</em>
    </div>
  </div>
  <div class="example-box" style="background-color:#fff0f5;border-left:5px solid #c2185b;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>⭐ Advanced Example — the classic "critical point that isn't an extremum"</h3><p>Show that \(f(x)=x^3\) has a critical point at \(x=0\) that is neither a local maximum nor a local minimum, and describe the graph's behaviour there.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(f'(x)=3x^2\), so \(f'(0)=0\) — a genuine critical point.</div>
      <div class="step"><strong>Step 2:</strong> But \(f'(x)=3x^2\geq0\) for <em>every</em> \(x\) — it never goes negative, so there's no sign change at \(x=0\).</div>
      <div class="step"><strong>Step 3:</strong> Since \(f'\) doesn't change sign, \(f\) is increasing on both sides of \(x=0\) — it just momentarily flattens (a horizontal tangent) before continuing to rise.</div>
      <em>Conclusion: \(x=0\) is a critical point (in fact, an inflection point with a horizontal tangent) but not an extremum — a sharp reminder that $f'(x)=0$ alone is never enough to guarantee a max or min. ✓</em>
    </div>
  </div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Find and classify the critical points of $f(x)=x^3-12x$.</p><details><summary>View answer</summary><div class="solution"><div class="step">$f'(x)=3x^2-12=3(x-2)(x+2)$. <em>Answer: local max at $x=-2$, local min at $x=2$.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Use the second derivative test to confirm Question 1's classifications.</p><details><summary>View answer</summary><div class="solution"><div class="step">$f''(x)=6x$. $f''(-2)=-12<0$ (max); $f''(2)=12>0$ (min). <em>Answer: confirmed.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Find the inflection point of $f(x)=x^3-12x$.</p><details><summary>View answer</summary><div class="solution"><div class="step">$6x=0\Rightarrow x=0$, $f(0)=0$. <em>Answer: $(0,0)$.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>State the intervals of concavity for $f(x)=x^3-12x$.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: concave down on $(-\infty,0)$, concave up on $(0,\infty)$.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5 — Challenge</h3><p>Show that $f(x)=x^4$ has a critical point at $x=0$ that is a local minimum, even though $f''(0)=0$ (so the second derivative test alone fails here).</p><details><summary>View answer</summary><div class="solution"><div class="step">$f'(x)=4x^3$ is negative for $x<0$ and positive for $x>0$ — a genuine sign change. <em>Answer: by the first derivative test, $x=0$ is a local minimum, even though the second derivative test is inconclusive.</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: What should I do when the second derivative test gives $f''(c)=0$?</h3><p><em>It's inconclusive — fall back on the first derivative test and check for an actual sign change around that point.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: Can a function have an inflection point where $f'(x)$ is also zero?</h3><p><em>Yes — that's exactly the $f(x)=x^3$ case: a horizontal tangent at a point where the curve is simply flattening while continuing in the same direction.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: What's the full checklist for sketching a curve from its derivatives?</h3><p><em>Find critical points from $f'(x)=0$, classify them with a sign chart or the second derivative test, find inflection points from $f''(x)=0$ with a genuine sign change, then combine all of it into intervals of increase/decrease and concavity.</em></p></div>
</div>`),
]);

u5["5.5"] = L("5.5", "Optimization", [
  html(String.raw`<div class="lecture-box">
  <h1>🎯 Optimization</h1>
  <p><strong>Overview.</strong> Optimization problems ask for the best possible value of some quantity — maximum area, minimum cost, minimum material — subject to a constraint. The strategy: express the quantity as a function of <em>one</em> variable using the constraint, then find its critical point.</p>
  <h2>📌 The General Strategy</h2>
  <p><strong>1.</strong> Identify the quantity to optimize and write a formula for it. <strong>2.</strong> Use the constraint to eliminate one variable. <strong>3.</strong> Differentiate, set equal to zero, and solve. <strong>4.</strong> Confirm it's a max or min (second derivative test, or by checking the endpoints/behaviour of the domain).</p>
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}>
    <h3>Example 1</h3><p>A rectangular field is enclosed by \(200\) m of fencing. Find the dimensions that maximize its area.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Constraint: \(2x+2y=200 \Rightarrow y=100-x\). Area: \(A=xy=x(100-x)=100x-x^2\).</div>
      <div class="step"><strong>Step 2:</strong> \(A'(x)=100-2x=0 \Rightarrow x=50\).</div>
      <div class="step"><strong>Step 3:</strong> \(A''(x)=-2<0\), confirming a maximum.</div>
      <em>Conclusion: \(x=50\), \(y=50\) — a square, giving maximum area \(2500\) m². ✓</em>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 2 — minimizing with a fixed area</h3><p>A rectangular pen must enclose an area of \(400\) m². Find the dimensions that minimize the total fencing used.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Constraint: \(xy=400 \Rightarrow y=\dfrac{400}{x}\). Perimeter: \(P=2x+2y=2x+\dfrac{800}{x}\).</div>
      <div class="step"><strong>Step 2:</strong> \(P'(x)=2-\dfrac{800}{x^2}=0 \Rightarrow x^2=400 \Rightarrow x=20\) (rejecting the negative root, since \(x>0\)).</div>
      <div class="step"><strong>Step 3:</strong> \(P''(x)=\dfrac{1600}{x^3}>0\) for \(x>0\), confirming a minimum.</div>
      <em>Conclusion: \(x=20\), \(y=20\) — again a square, minimizing the fencing at \(P=80\) m. ✓</em>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 3 — the classic open-top box</h3><p>An open-top box is made by cutting equal squares of side \(x\) from each corner of a \(20\text{ cm}\times20\text{ cm}\) sheet, then folding up the sides. Find \(x\) that maximizes the box's volume.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> The base becomes \((20-2x)\) by \((20-2x)\), and the height is \(x\): \(V(x)=x(20-2x)^2\).</div>
      <div class="step"><strong>Step 2:</strong> Expand: \(V(x)=x(400-80x+4x^2)=400x-80x^2+4x^3\).</div>
      <div class="step"><strong>Step 3:</strong> \(V'(x)=400-160x+12x^2=0\). Divide by 4: \(3x^2-40x+100=0\).</div>
      <div class="step"><strong>Step 4:</strong> Quadratic formula: \(x=\dfrac{40\pm\sqrt{1600-1200}}{6}=\dfrac{40\pm20}{6}\), giving \(x=10\) or \(x=\dfrac{10}{3}\). Since \(x=10\) would collapse the box (side length \(20-2x=0\)), the valid solution is \(x=\dfrac{10}{3}\).</div>
      <em>Conclusion: \(x=\dfrac{10}{3}\) cm maximizes the volume. ✓ (checking which root actually makes geometric sense is a critical last step)</em>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 4 — minimum surface area of a cylinder</h3><p>A cylindrical can must hold a volume of \(500\pi\) cm³. Find the radius that minimizes the total surface area (including both circular ends).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Constraint: \(\pi r^2h=500\pi \Rightarrow h=\dfrac{500}{r^2}\).</div>
      <div class="step"><strong>Step 2:</strong> Surface area: \(S=2\pi r^2+2\pi rh = 2\pi r^2+2\pi r\left(\dfrac{500}{r^2}\right) = 2\pi r^2+\dfrac{1000\pi}{r}\).</div>
      <div class="step"><strong>Step 3:</strong> \(S'(r)=4\pi r-\dfrac{1000\pi}{r^2}=0 \Rightarrow 4\pi r=\dfrac{1000\pi}{r^2} \Rightarrow r^3=250\).</div>
      <em>Conclusion: \(r=\sqrt[3]{250}\approx6.30\) cm minimizes the surface area. ✓</em>
    </div>
  </div>
  <div class="example-box" style="background-color:#fff0f5;border-left:5px solid #c2185b;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>⭐ Advanced Example — cost optimization with unequal rates</h3><p>A pipeline must connect a pumping station to a facility \(8\) km downstream along a straight riverbank and \(3\) km inland from a point directly opposite the station. Laying pipe underwater costs \$2000/km, and on land costs \$1000/km. If the pipe goes underwater to a point \(x\) km along the bank from the point opposite the station, then overland to the facility, find \(x\) that minimizes total cost.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Underwater distance (diagonal): \(\sqrt{x^2+3^2}\) (from the station, across to a point \(x\) km along the bank — using the perpendicular distance of 3 km as one leg). Overland distance: \(8-x\).</div>
      <div class="step"><strong>Step 2:</strong> Cost: \(C(x)=2000\sqrt{x^2+9}+1000(8-x)\).</div>
      <div class="step"><strong>Step 3:</strong> \(C'(x)=2000\cdot\dfrac{x}{\sqrt{x^2+9}}-1000=0 \Rightarrow \dfrac{2x}{\sqrt{x^2+9}}=1 \Rightarrow 2x=\sqrt{x^2+9}\).</div>
      <div class="step"><strong>Step 4:</strong> Square both sides: \(4x^2=x^2+9 \Rightarrow 3x^2=9 \Rightarrow x^2=3 \Rightarrow x=\sqrt3\) (taking the positive root).</div>
      <em>Conclusion: \(x=\sqrt3\approx1.73\) km minimizes the total pipeline cost. ✓</em>
    </div>
  </div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>A rectangle is enclosed by 120 m of fencing. Find the dimensions that maximize its area.</p><details><summary>View answer</summary><div class="solution"><div class="step">$y=60-x$, $A=60x-x^2$, $A'=60-2x=0$. <em>Answer: $x=y=30$ m (a square).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>A rectangular pen must have area 900 m². Find the dimensions minimizing the perimeter.</p><details><summary>View answer</summary><div class="solution"><div class="step">$y=900/x$, $P=2x+1800/x$, $P'=2-1800/x^2=0\Rightarrow x^2=900$. <em>Answer: $x=y=30$ m.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>An open-top box is cut from a $12\text{ cm}\times12\text{ cm}$ sheet with corner squares of side $x$. Set up $V(x)$ and find the value of $x$ that maximizes volume.</p><details><summary>View answer</summary><div class="solution"><div class="step">$V=x(12-2x)^2$, $V'=144-96x+12x^2=0\Rightarrow x^2-8x+12=0\Rightarrow(x-2)(x-6)=0$. <em>Answer: $x=2$ cm (rejecting $x=6$, which collapses the box).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>A cylindrical can must hold volume $250\pi$ cm³. Find the radius minimizing surface area.</p><details><summary>View answer</summary><div class="solution"><div class="step">$S=2\pi r^2+500\pi/r$, $S'=4\pi r-500\pi/r^2=0\Rightarrow r^3=125$. <em>Answer: $r=5$ cm.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5 — Challenge</h3><p>For the cylinder in Question 4, find the corresponding height, and show that at the optimum, $h=2r$.</p><details><summary>View answer</summary><div class="solution"><div class="step">$h=250/r^2=250/25=10$. <em>Answer: $h=10$ cm, and indeed $2r=10=h$ — the classic result that the optimal can has height equal to its diameter.</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: Why must one variable always be eliminated first?</h3><p><em>Derivatives only work with a function of a single variable — the constraint is exactly what lets you rewrite a two-variable quantity in terms of one.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: How do I know if a critical point is really a maximum or minimum, not just a flat point?</h3><p><em>Use the second derivative test, or check the sign of the first derivative just before and after the critical value.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: What should I do if solving $f'(x)=0$ gives more than one root?</h3><p><em>Check each root against the problem's real-world constraints (e.g., lengths must be positive, or less than a given total) — some roots are mathematically valid but physically meaningless.</em></p></div>
</div>`),
]);

u5["5.6"] = L("5.6", "Kinematics & Rates of Change", [
  html(String.raw`<div class="lecture-box">
  <h1>🚗 Kinematics &amp; Rates of Change</h1>
  <p><strong>Overview.</strong> Derivatives model motion directly: velocity is the rate of change of position, and acceleration is the rate of change of velocity. This lesson also covers a subtlety that trips people up — the difference between <strong>displacement</strong> (net position change) and <strong>total distance travelled</strong> when direction reverses.</p>
  <h2>📌 The Chain of Derivatives</h2>
  <p style="text-align:center;">\( s(t) \xrightarrow{\ \frac{d}{dt}\ } v(t)=s'(t) \xrightarrow{\ \frac{d}{dt}\ } a(t)=v'(t) \)</p>
  <p>The object is <strong>at rest</strong> when \(v(t)=0\). It's <strong>speeding up</strong> when \(v(t)\) and \(a(t)\) have the <em>same</em> sign, and <strong>slowing down</strong> when they have <em>opposite</em> signs.</p>
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}>
    <h3>Example 1</h3><p>A particle's position is \(s(t)=t^3-6t^2+9t\) (metres, \(t\) in seconds). Find its velocity and acceleration at \(t=4\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(v(t)=3t^2-12t+9\); \(v(4)=48-48+9\).</div>
      <div class="step"><strong>Step 2:</strong> \(a(t)=6t-12\); \(a(4)=24-12\).</div>
      <em>Conclusion: \(v(4)=9\) m/s, \(a(4)=12\) m/s². ✓</em>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 2 — when is it at rest</h3><p>Using the same \(s(t)=t^3-6t^2+9t\), find every time the particle is at rest.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(v(t)=3t^2-12t+9=3(t^2-4t+3)=3(t-1)(t-3)\).</div>
      <em>Conclusion: \(v(t)=0\) at \(t=1\) and \(t=3\) seconds. ✓</em>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 3 — speeding up or slowing down?</h3><p>For the same particle, determine whether it is speeding up or slowing down at \(t=2\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(v(2)=3(4)-12(2)+9=12-24+9=-3\) (negative — moving backward).</div>
      <div class="step"><strong>Step 2:</strong> \(a(2)=6(2)-12=0\)... use a slightly different time to see the trend, or note \(a(2)=0\) exactly at the inflection of velocity; check \(a(2.1)=6(2.1)-12=0.6>0\) (accelerating in the positive direction while $v<0$).</div>
      <em>Conclusion: at \(t=2\), \(v<0\) and \(a\) is transitioning from negative to positive — velocity and acceleration have opposite signs just before \(t=2\) and the same sign just after, so the particle is momentarily at its slowest (in terms of decelerating then starting to speed back up) around this instant. ✓ (this is exactly the inflection point of $s(t)$, where deceleration turns into acceleration)</em>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 4 — total distance travelled</h3><p>Find the total distance travelled by the particle \(s(t)=t^3-6t^2+9t\) between \(t=0\) and \(t=4\), given it changes direction at \(t=1\) and \(t=3\) (from Example 2).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Evaluate position at each key time: \(s(0)=0\), \(s(1)=1-6+9=4\), \(s(3)=27-54+27=0\), \(s(4)=64-96+36=4\).</div>
      <div class="step"><strong>Step 2:</strong> Distance in each leg: \(|s(1)-s(0)|=4\); \(|s(3)-s(1)|=|0-4|=4\); \(|s(4)-s(3)|=4\).</div>
      <em>Conclusion: total distance \(=4+4+4=12\) m — even though the net displacement from \(t=0\) to \(t=4\) is only \(s(4)-s(0)=4\) m, since the particle backtracked twice. ✓</em>
    </div>
  </div>
  <div class="example-box" style="background-color:#fff0f5;border-left:5px solid #c2185b;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>⭐ Advanced Example — projectile motion, full analysis</h3><p>A ball is thrown so that its height is \(s(t)=-5t^2+30t+2\) metres, \(t\) in seconds. Find its maximum height, and its velocity the instant it hits the ground.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(v(t)=-10t+30\). Set \(v(t)=0\): \(t=3\) s, the time of maximum height.</div>
      <div class="step"><strong>Step 2:</strong> \(s(3)=-45+90+2=47\) m — the maximum height.</div>
      <div class="step"><strong>Step 3:</strong> Find when it lands: \(s(t)=0 \Rightarrow -5t^2+30t+2=0\). Using the quadratic formula: \(t=\dfrac{-30\pm\sqrt{900+40}}{-10}=\dfrac{-30\pm\sqrt{940}}{-10}\); taking the positive root, \(t\approx6.065\) s.</div>
      <div class="step"><strong>Step 4:</strong> \(v(6.065)=-10(6.065)+30\approx-30.65\) m/s.</div>
      <em>Conclusion: maximum height \(47\) m at \(t=3\) s; impact velocity \(\approx-30.65\) m/s (negative, confirming it's moving downward on landing). ✓</em>
    </div>
  </div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>$s(t)=t^3-9t^2+24t$. Find $v(t)$ and $a(t)$, then evaluate both at $t=2$.</p><details><summary>View answer</summary><div class="solution"><div class="step">$v(t)=3t^2-18t+24$, $a(t)=6t-18$. <em>Answer: $v(2)=12-36+24=0$, $a(2)=-6$.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Using the same $s(t)$, find every time the particle is at rest.</p><details><summary>View answer</summary><div class="solution"><div class="step">$3t^2-18t+24=3(t-2)(t-4)=0$. <em>Answer: $t=2$ and $t=4$.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Determine whether the particle is speeding up or slowing down at $t=3$ (using $v(t)=3t^2-18t+24$, $a(t)=6t-18$).</p><details><summary>View answer</summary><div class="solution"><div class="step">$v(3)=27-54+24=-3<0$; $a(3)=0$; check $a(3.1)=0.6>0$ so acceleration is turning positive while $v<0$. <em>Answer: opposite signs just before $t=3$ mean it's still slowing its backward motion.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Given $s(0)=0$, $s(2)=20$, $s(4)=16$, $s(5)=25$ for a particle that reverses direction at $t=2$ and $t=4$, find the total distance travelled from $t=0$ to $t=5$.</p><details><summary>View answer</summary><div class="solution"><div class="step">$|20-0|+|16-20|+|25-16|=20+4+9$. <em>Answer: $33$.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5 — Challenge</h3><p>A ball's height is $s(t)=-5t^2+20t+1$. Find its maximum height and the time it lands (to 2 d.p.).</p><details><summary>View answer</summary><div class="solution"><div class="step">$v(t)=-10t+20=0\Rightarrow t=2$, $s(2)=-20+40+1=21$. Landing: $-5t^2+20t+1=0\Rightarrow t=\dfrac{-20\pm\sqrt{400+20}}{-10}$. <em>Answer: max height $21$ m at $t=2$ s; lands at $t\approx4.05$ s.</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: What's the difference between displacement and total distance?</h3><p><em>Displacement is the net change in position (can be positive, negative, or zero); total distance adds up every bit of movement regardless of direction, so it can never decrease.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: How do I decide if an object is speeding up or slowing down?</h3><p><em>Compare the signs of velocity and acceleration at that instant — matching signs means speeding up, opposite signs means slowing down.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: Why does $v(t)=0$ mark a direction change (usually)?</h3><p><em>Velocity measures the direction and rate of motion — if it smoothly passes through zero, the object has stopped and (generally) reverses, which is exactly why those instants split a distance calculation into separate legs.</em></p></div>
</div>`),
]);
