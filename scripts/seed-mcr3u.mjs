// Seeds the full MCR3U (Grade 11 Functions, University) course.
// Structure follows the official Ontario curriculum strands:
//   A Characteristics of Functions · B Exponential · C Discrete · D Trigonometric.
// Unit 1 authored in full (Grade 9 lecture-box theme + interactive graph embeds);
// remaining units are scaffolds, filled in unit-by-unit.
// Usage: node scripts/seed-mcr3u.mjs
import { createClient } from "@supabase/supabase-js";
import { teacherPassword } from "./_teacher-secret.mjs";
import { readFileSync } from "fs";
import { fileURLToPath, pathToFileURL } from "url";
import { dirname, join } from "path";
import { html, gframe, sk } from "./seed-mpm2d.mjs";
import { authored } from "./mcr3u-lessons.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const env = {};
for (const line of readFileSync(join(__dirname, "..", ".env.local"), "utf8").split("\n")) {
  const m = line.match(/^([A-Z0-9_]+)=(.*)$/);
  if (m) env[m[1]] = m[2].trim();
}
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });

const TEACHER_EMAIL = "teacher@integrationacademy.ca";
const COURSE_TITLE = "Functions (MCR3U)";
const DESC = "Ontario Grade 11 Functions, University Preparation (MCR3U). Interactive lessons across Characteristics of Functions, Exponential Functions, Discrete Functions (sequences, series & finance), and Trigonometric Functions.";

async function getTeacherId() {
  const { data: created } = await db.auth.admin.createUser({
    email: TEACHER_EMAIL, password: teacherPassword(env), email_confirm: true,
    user_metadata: { full_name: "Integration Academy", role: "admin" },
  });
  if (created?.user) {
    await db.from("profiles").upsert({ id: created.user.id, full_name: "Integration Academy", role: "admin" });
    return created.user.id;
  }
  const { data: list } = await db.auth.admin.listUsers({ perPage: 1000 });
  const found = list.users.find((u) => u.email === TEACHER_EMAIL);
  if (!found) throw new Error("Could not create or find teacher.");
  await db.from("profiles").upsert({ id: found.id, full_name: "Integration Academy", role: "admin" });
  return found.id;
}

// ── UNIT 1 — Characteristics of Functions (authored in full) ──
const L11 = { code: "1.1", title: "Functions, Relations & Function Notation", blocks: [html(String.raw`<div class="lecture-box">
  <h1>📈 Functions, Relations &amp; Function Notation</h1>
  <p><strong>Overview.</strong> A <strong>relation</strong> is any set of ordered pairs. A <strong>function</strong> is a special relation where every input \(x\) gives <em>exactly one</em> output \(y\). This whole course is about functions, so we start by recognizing them and writing them with function notation.</p>

  <h2>📌 Is it a function?</h2>
  <ul>
    <li><strong>Vertical-line test:</strong> if any vertical line crosses the graph more than once, it is <em>not</em> a function.</li>
    <li><strong>Mapping:</strong> a function is <em>one-to-one</em> (each input → one output, each output from one input) or <em>many-to-one</em>. It is never <em>one-to-many</em>.</li>
  </ul>

  <div class="example-box">
    <p><strong>Example 1.</strong> Is \(x = y^2\) a function?</p>
    <div class="solution">Solving gives \(y = \pm\sqrt{x}\): the input \(x=4\) maps to both \(y=2\) and \(y=-2\). A vertical line hits the sideways parabola twice, so <strong>it is not a function</strong>. By contrast \(y=x^2\) below passes the vertical-line test.</div>
    ${gframe(["y = x^2"], { title: "y = x² is a function" })}
  </div>

  <h2>📌 Function notation</h2>
  <p>We write \(f(x)\) ("f of x") for the output of function \(f\) at input \(x\). It is <em>not</em> multiplication. To <strong>evaluate</strong>, substitute the value for every \(x\).</p>
  <div class="example-box">
    <p><strong>Example 2.</strong> For \(f(x) = 2x^2 + 3x - 1\), find \(f(2)\) and \(f(-1)\).</p>
    <div class="step">\(f(2) = 2(2)^2 + 3(2) - 1 = 8 + 6 - 1 = 13\)</div>
    <div class="step">\(f(-1) = 2(-1)^2 + 3(-1) - 1 = 2 - 3 - 1 = -2\)</div>
  </div>

  <div class="practice-box">
    <p><strong>Practice.</strong> For \(f(x) = x^2 - 4\), find \(f(3)\) and \(f(-2)\).</p>
    <details><summary>View answer</summary><p>\(f(3) = 9 - 4 = 5\); \(f(-2) = 4 - 4 = 0\).</p></details>
  </div>

  <div class="mistake-box"><p><strong>Common mistake.</strong> \(f(x)\) does <em>not</em> mean \(f \times x\). And \(f(-1)\) means substitute \(-1\) — square it <em>before</em> applying the sign: \((-1)^2 = 1\).</p></div>

  <div class="qa-box"><p><strong>Q&amp;A.</strong> <em>Can two inputs share one output?</em> Yes — that is "many-to-one" and is still a function (e.g. \(f(x)=x^2\) has \(f(2)=f(-2)=4\)). What is forbidden is one input giving two outputs.</p></div>
</div>`)] };

const L12 = { code: "1.2", title: "Domain and Range", blocks: [html(String.raw`<div class="lecture-box">
  <h1>🎯 Domain and Range</h1>
  <p><strong>Overview.</strong> The <strong>domain</strong> is the set of all allowed inputs \(x\); the <strong>range</strong> is the set of all resulting outputs \(y\). You read them from a graph, an equation, or a real-world context.</p>

  <h2>📌 Watch for restrictions</h2>
  <ul>
    <li><strong>Denominators</strong> cannot be zero.</li>
    <li><strong>Square roots</strong> need a non-negative radicand.</li>
    <li><strong>Context</strong> can limit values (time \(\ge 0\), etc.).</li>
  </ul>

  <div class="example-box">
    <p><strong>Example 1.</strong> State the domain and range of \(f(x) = \sqrt{x - 2}\).</p>
    <div class="step">Need \(x - 2 \ge 0\Rightarrow x \ge 2\), so domain is \(\{x \in \mathbb{R}\mid x \ge 2\}\).</div>
    <div class="step">The smallest output is \(0\) (at \(x=2\)) and it grows, so range is \(\{y\in\mathbb{R}\mid y \ge 0\}\).</div>
    ${gframe(["y = sqrt(x - 2)"], { title: "y = √(x − 2)" })}
  </div>

  <div class="example-box">
    <p><strong>Example 2.</strong> Range of \(f(x) = x^2 + 1\)?</p>
    <div class="solution">The parabola opens up with vertex \((0,1)\), so the minimum output is \(1\): range \(\{y \ge 1\}\). Domain is all real numbers.</div>
  </div>

  <div class="practice-box">
    <p><strong>Practice.</strong> State the domain of \(g(x) = \dfrac{1}{x - 3}\).</p>
    <details><summary>View answer</summary><p>\(x \ne 3\): domain \(\{x \in \mathbb{R}\mid x \ne 3\}\).</p></details>
  </div>

  <div class="mistake-box"><p><strong>Common mistake.</strong> Forgetting that \(\sqrt{\;}\) needs the inside \(\ge 0\), or that a denominator can never be \(0\). Always scan for these before stating the domain.</p></div>

  <div class="qa-box"><p><strong>Q&amp;A.</strong> <em>How do I write domain/range?</em> Set-builder \(\{x\in\mathbb{R}\mid x\ge 2\}\) or interval notation \([2,\infty)\) are both accepted.</p></div>
</div>`)] };

const L13 = { code: "1.3", title: "Inverse Functions", blocks: [html(String.raw`<div class="lecture-box">
  <h1>🔄 Inverse Functions</h1>
  <p><strong>Overview.</strong> The inverse \(f^{-1}\) <em>undoes</em> \(f\): it reverses the operations. Whatever \(f\) does to \(x\), \(f^{-1}\) does the opposite, in the opposite order.</p>

  <h2>📌 Finding an inverse algebraically</h2>
  <ol><li>Write \(y = f(x)\).</li><li>Swap \(x\) and \(y\).</li><li>Solve for \(y\). That is \(f^{-1}(x)\).</li></ol>

  <div class="example-box">
    <p><strong>Example 1.</strong> Find the inverse of \(f(x) = 2x + 3\).</p>
    <div class="step">\(y = 2x + 3 \Rightarrow x = 2y + 3\) (swap)</div>
    <div class="step">\(x - 3 = 2y \Rightarrow y = \dfrac{x-3}{2}\), so \(f^{-1}(x) = \dfrac{x-3}{2}\).</div>
    <p>Notice the graphs are reflections of each other in the line \(y = x\):</p>
    ${gframe(["y = 2*x + 3", "y = (x - 3)/2", "y = x"], { title: "A function and its inverse reflect over y = x" })}
  </div>

  <h2>📌 When is the inverse a function?</h2>
  <p>The inverse is a function only if the original passes the <strong>horizontal-line test</strong> (is one-to-one). For \(f(x)=x^2\), the inverse \(y=\pm\sqrt{x}\) is <em>not</em> a function unless we restrict the domain (e.g. \(x\ge 0\)). The domain and range <strong>swap</strong> between a function and its inverse.</p>

  <div class="practice-box">
    <p><strong>Practice.</strong> Find the inverse of \(f(x) = 3x - 6\).</p>
    <details><summary>View answer</summary><p>\(f^{-1}(x) = \dfrac{x+6}{3}\).</p></details>
  </div>

  <div class="mistake-box"><p><strong>Common mistake.</strong> The inverse is <em>not</em> the reciprocal: \(f^{-1}(x) \ne \dfrac{1}{f(x)}\).</p></div>

  <div class="qa-box"><p><strong>Q&amp;A.</strong> <em>Quick check?</em> \(f(f^{-1}(x)) = x\). If composing them returns \(x\), your inverse is correct.</p></div>
</div>`)] };

const L14 = { code: "1.4", title: "Transformations of Functions", blocks: [html(String.raw`<div class="lecture-box">
  <h1>🪄 Transformations of Functions</h1>
  <p><strong>Overview.</strong> Every transformed function has the form \(g(x) = a\,f\big(k(x - d)\big) + c\). Each parameter moves or reshapes the parent graph \(f(x)\).</p>

  <h2>📌 The four parameters</h2>
  <ul>
    <li>\(a\): vertical stretch by \(|a|\) (reflection in the \(x\)-axis if \(a<0\)).</li>
    <li>\(k\): horizontal stretch by \(\tfrac{1}{|k|}\) (reflection in the \(y\)-axis if \(k<0\)).</li>
    <li>\(d\): horizontal shift right by \(d\) (note the <em>opposite</em> sign inside).</li>
    <li>\(c\): vertical shift up by \(c\).</li>
  </ul>

  <div class="example-box">
    <p><strong>Example.</strong> Describe \(g(x) = -2(x - 3)^2 + 1\) from \(f(x) = x^2\).</p>
    <div class="step">Vertical stretch by \(2\) and reflection in the \(x\)-axis (\(a=-2\)).</div>
    <div class="step">Shift right \(3\) (\(d=3\)) and up \(1\) (\(c=1\)); vertex at \((3,1)\).</div>
    ${gframe(["y = x^2", "y = -2*(x - 3)^2 + 1"], { title: "f(x)=x² → g(x)=−2(x−3)²+1" })}
  </div>

  <div class="practice-box">
    <p><strong>Practice.</strong> Describe the transformations of \(y = \sqrt{x + 4} - 2\) from \(y=\sqrt{x}\).</p>
    <details><summary>View answer</summary><p>Shift left \(4\) and down \(2\).</p></details>
  </div>

  <div class="mistake-box"><p><strong>Common mistake.</strong> Horizontal shifts are <em>opposite</em> to the sign: \((x-3)\) shifts <strong>right</strong> 3, not left.</p></div>

  <div class="qa-box"><p><strong>Q&amp;A.</strong> <em>What order?</em> Apply stretches/reflections first, then translations.</p></div>
</div>`)] };

const L15 = { code: "1.5", title: "Quadratic Functions: Zeros, Max & Min", blocks: [html(String.raw`<div class="lecture-box">
  <h1>⛰️ Quadratic Functions: Zeros, Max &amp; Min</h1>
  <p><strong>Overview.</strong> A quadratic \(f(x)=ax^2+bx+c\) graphs as a parabola. Its <strong>vertex</strong> is the maximum (if \(a<0\)) or minimum (if \(a>0\)); its <strong>zeros</strong> are where it crosses the \(x\)-axis.</p>

  <h2>📌 Completing the square → vertex form</h2>
  <p>Rewriting as \(f(x)=a(x-h)^2+k\) shows the vertex \((h,k)\) directly.</p>

  <div class="example-box">
    <p><strong>Example.</strong> For \(f(x) = x^2 - 6x + 5\), find the vertex, the min value, and the zeros.</p>
    <div class="step">Complete the square: \(x^2-6x+5 = (x-3)^2 - 9 + 5 = (x-3)^2 - 4\).</div>
    <div class="step">Vertex \((3,-4)\); minimum value \(-4\).</div>
    <div class="step">Zeros: \((x-3)^2 = 4 \Rightarrow x-3=\pm2 \Rightarrow x = 1,\,5\).</div>
    ${gframe(["y = x^2 - 6*x + 5"], { title: "Vertex (3, −4); zeros at 1 and 5", labels: [{ x: 3, y: -4, t: "vertex (3,−4)", c: "#1b7a44" }] })}
  </div>

  <div class="practice-box">
    <p><strong>Practice.</strong> Find the vertex of \(f(x) = x^2 + 4x + 1\).</p>
    <details><summary>View answer</summary><p>\((x+2)^2 - 3\): vertex \((-2,-3)\).</p></details>
  </div>

  <div class="mistake-box"><p><strong>Common mistake.</strong> When completing the square, remember to subtract the square you added back: \(x^2-6x = (x-3)^2 - 9\).</p></div>

  <div class="qa-box"><p><strong>Q&amp;A.</strong> <em>Axis of symmetry?</em> It is \(x = h\) (here \(x=3\)), the vertical line through the vertex.</p></div>
</div>`)] };

const L16 = { code: "1.6", title: "Solving Quadratics & Linear–Quadratic Systems", blocks: [html(String.raw`<div class="lecture-box">
  <h1>✖️ Solving Quadratics &amp; Linear–Quadratic Systems</h1>
  <p><strong>Overview.</strong> Solve quadratics by factoring or the quadratic formula, then use the same idea to find where a line meets a parabola.</p>

  <h2>📌 The quadratic formula</h2>
  <p>For \(ax^2+bx+c=0\): \(\;x = \dfrac{-b \pm \sqrt{b^2 - 4ac}}{2a}\).</p>

  <div class="example-box">
    <p><strong>Example 1.</strong> Solve \(x^2 - 5x + 6 = 0\).</p>
    <div class="solution">Factor: \((x-2)(x-3)=0 \Rightarrow x = 2\) or \(x = 3\).</div>
  </div>

  <div class="example-box">
    <p><strong>Example 2.</strong> Where do \(y = x^2 - 2\) and \(y = x\) intersect?</p>
    <div class="step">Set equal: \(x^2 - 2 = x \Rightarrow x^2 - x - 2 = 0 \Rightarrow (x-2)(x+1)=0\).</div>
    <div class="step">\(x = 2\) or \(x = -1\); points \((2,2)\) and \((-1,-1)\).</div>
    ${gframe(["y = x^2 - 2", "y = x"], { title: "Line meets parabola at (2,2) and (−1,−1)" })}
  </div>

  <div class="practice-box">
    <p><strong>Practice.</strong> Solve \(x^2 + 2x - 8 = 0\).</p>
    <details><summary>View answer</summary><p>\((x+4)(x-2)=0 \Rightarrow x = -4,\,2\).</p></details>
  </div>

  <div class="mistake-box"><p><strong>Common mistake.</strong> In the quadratic formula the whole \(-b\) is over \(2a\), and \(b^2-4ac\) must be computed carefully with signs.</p></div>

  <div class="qa-box"><p><strong>Q&amp;A.</strong> <em>No real solutions?</em> If the discriminant \(b^2-4ac<0\), the line and parabola do not meet (no real intersection).</p></div>
</div>`)] };

// ── Units 2–7 — scaffolds (filled in next) ────────────────────
const subjects = [
  L11, L12, L13, L14, L15, L16,
  // Unit 2 — Equivalent Algebraic Expressions
  sk("2.1", "Adding & Multiplying Polynomials", "Combine and expand polynomial expressions, the foundation of equivalence.", ["Add and subtract polynomials", "Multiply polynomials (distribution & FOIL)", "Simplify to standard form"]),
  sk("2.2", "Factoring Polynomials", "Reverse expansion: pull out common factors, factor trinomials and special products.", ["Common factoring", "Factor x²+bx+c and ax²+bx+c", "Difference of squares & perfect squares"]),
  sk("2.3", "Simplifying Rational Expressions", "Treat algebraic fractions like number fractions, with restrictions.", ["Simplify by factoring & cancelling", "Multiply & divide rational expressions", "State restrictions on the variable"]),
  sk("2.4", "Adding & Subtracting Rational Expressions", "Common denominators with polynomials.", ["Find the LCD", "Add & subtract rational expressions", "State restrictions"]),
  sk("2.5", "Radicals & Equivalent Expressions", "Simplify and combine radicals; verify equivalence.", ["Simplify radicals using √(ab)=√a·√b", "Add, subtract & multiply radicals", "Verify two expressions are equivalent"]),
  // Unit 3 — Exponential Functions
  sk("3.1", "Exponent Laws & Rational Exponents", "Extend the exponent laws to negative and fractional exponents.", ["Product, quotient & power laws", "Negative exponents", "Rational exponents and radicals"]),
  sk("3.2", "Exponential Functions & Their Graphs", "Graph y=aᵇˣ and read its key features.", ["Shape of exponential growth & decay", "Asymptotes, intercepts, domain & range", "Compare bases"]),
  sk("3.3", "Transformations of Exponential Functions", "Apply y=a·f(k(x−d))+c to exponential graphs.", ["Stretches, reflections & shifts", "Locate the horizontal asymptote", "State domain & range"]),
  sk("3.4", "Applications: Growth, Decay & Compound Interest", "Model real situations with exponential functions.", ["Population growth & radioactive decay", "Half-life and doubling time", "Compound interest as an exponential model"]),
  // Unit 4 — Trigonometry
  sk("4.1", "Trigonometric Ratios & Special Angles", "Exact values for 0°, 30°, 45°, 60°, 90°.", ["Primary trig ratios", "Exact values of special angles", "The reference triangles"]),
  sk("4.2", "Angles 0°–360° & the CAST Rule", "Evaluate trig ratios for any angle to 360°.", ["The unit circle & related angles", "CAST rule for signs", "Find both angles with a given ratio"]),
  sk("4.3", "Reciprocal Ratios & Trig Identities", "Secant, cosecant, cotangent, and proving identities.", ["Define sec, csc, cot", "Pythagorean & quotient identities", "Prove simple identities"]),
  sk("4.4", "The Sine Law & Cosine Law", "Solve oblique (non-right) triangles, including the ambiguous case.", ["Sine law", "Cosine law", "The ambiguous case (SSA)"]),
  sk("4.5", "Trigonometry in 3-D Problems", "Apply trig to two- and three-dimensional situations.", ["Combine right & oblique triangles", "Set up 3-D problems", "Real-world applications"]),
  // Unit 5 — Sinusoidal Functions
  sk("5.1", "Periodic Functions & Their Properties", "Describe repeating behaviour numerically and graphically.", ["Cycle, period, amplitude, axis", "Read periodic graphs", "Real-world periodic data"]),
  sk("5.2", "Graphing Sine & Cosine", "The parent sinusoidal graphs and their features.", ["Graph y=sin x and y=cos x", "Amplitude, period & midline", "Degrees on the horizontal axis"]),
  sk("5.3", "Transformations of Sinusoidal Functions", "Build y=a·sin(k(x−d))+c and read it from a graph.", ["Effect of a, k, d, c", "Determine an equation from a graph", "State amplitude, period, phase shift"]),
  sk("5.4", "Sinusoidal Applications", "Model tides, Ferris wheels, temperature and more.", ["Set up a sinusoidal model", "Solve for time or height", "Interpret the model"]),
  // Unit 6 — Discrete Functions: Sequences & Series
  sk("6.1", "Arithmetic Sequences", "Sequences with a common difference.", ["Recognize arithmetic sequences", "General term tₙ = a + (n−1)d", "Solve for a term or position"]),
  sk("6.2", "Geometric Sequences", "Sequences with a common ratio.", ["Recognize geometric sequences", "General term tₙ = a·r^(n−1)", "Applications"]),
  sk("6.3", "Arithmetic Series", "Sum the terms of an arithmetic sequence.", ["Series vs sequence", "Sₙ = n/2 (a + tₙ)", "Solve series problems"]),
  sk("6.4", "Geometric Series", "Sum the terms of a geometric sequence.", ["Sₙ = a(rⁿ−1)/(r−1)", "Apply to growth problems", "Connect to finance"]),
  sk("6.5", "Pascal's Triangle & the Binomial Theorem", "Patterns in Pascal's triangle and binomial expansions.", ["Build Pascal's triangle", "Expand (a+b)ⁿ", "Find a specific term"]),
  // Unit 7 — Financial Applications
  sk("7.1", "Simple Interest", "Linear growth of money.", ["I = Prt", "Connect to arithmetic sequences", "Solve for any variable"]),
  sk("7.2", "Compound Interest", "Exponential growth of money.", ["A = P(1+i)ⁿ", "Connect to geometric sequences", "Compounding periods"]),
  sk("7.3", "Present Value", "Discounting a future amount to today.", ["PV = A/(1+i)ⁿ", "Solve for principal", "Compare investments"]),
  sk("7.4", "Annuities", "Regular payments and their value.", ["Future value of an annuity", "Present value of an annuity", "Real-world annuity problems"]),
];

// Replace scaffolds with fully-authored lessons as each unit is written.
for (let i = 0; i < subjects.length; i++) {
  const a = authored[subjects[i].code];
  if (a) subjects[i] = a;
}

// ── Assignments — 10 questions in 3 categories (K / Application / Thinking) ──
const A3 = (code, topic, knowledge, application, thinking) => {
  let n = 0;
  const sec = (arr) => arr.map((q) => `${++n}. ${q}`);
  const description = [
    "Knowledge & Understanding", ...sec(knowledge),
    "Application", ...sec(application),
    "Thinking", ...sec(thinking),
  ].join("\n");
  return { title: `Assignment ${code} — ${topic}`, description };
};

// Usual Ontario four-category style: 3 Knowledge & Understanding, 2 Thinking, 2 Communication, 3 Application.
const A4 = (code, topic, knowledge, thinking, communication, application) => {
  let n = 0;
  const sec = (arr) => arr.map((q) => `${++n}. ${q}`);
  const description = [
    "Knowledge & Understanding", ...sec(knowledge),
    "Thinking", ...sec(thinking),
    "Communication", ...sec(communication),
    "Application", ...sec(application),
  ].join("\n");
  return { title: `Assignment ${code} — ${topic}`, description };
};
const ASSIGN = {
  "1.1": A4("1.1", "Functions, Relations & Function Notation",
    ["Is $\\{(1,2),(2,4),(3,6)\\}$ a function? Explain.", "For $f(x)=2x-5$, find $f(3)$.", "Does $y=x^2$ pass the vertical-line test? Does $x=y^2$?"],
    ["For $f(x)=3x^2-x$, find $f(-1)$, then find every value of $x$ for which $f(x)=f(-1)$.", "A relation contains $(1,2)$ and $(1,5)$. Is it a function? Change one ordered pair so that it becomes a function, and explain your change."],
    ["Explain the difference between a relation and a function.", "Can a function be many-to-one? Can it be one-to-many? Give an example of each or explain why not."],
    ["A taxi charges $\\$4.50$ plus $\\$1.80$ per km. Write the cost $C$ as a function of the distance $d$, find $C(12)$, and find the distance travelled for a fare of $\\$31.50$.", "A ball's height in metres after $t$ seconds is $h(t)=-5t^2+20t$. Find $h(1)$ and $h(3)$, and find the times when the ball is on the ground. What do the equal values of $h(1)$ and $h(3)$ tell you?", "A school bus company charges $\\$45$ for $10$ students, $\\$75$ for $20$, $\\$105$ for $30$ and $\\$135$ for $40$. Is the fee a function of the number of students? Write a rule $f(s)$ and use it to find the fee for $25$ students."]),
  "1.2": A4("1.2", "Domain and Range",
    ["State the domain of $\\sqrt{x-3}$.", "State the domain of $\\dfrac{1}{x+4}$.", "State the range of $y=x^2+2$."],
    ["State the domain and range of $y=\\sqrt{x+1}-2$.", "Find the domain of $f(x)=\\dfrac{\\sqrt{2x-8}}{x-6}$."],
    ["Explain two different things that can restrict a domain, with an example of each.", "Why is the range of $y=-x^2+5$ only $y\\le5$? Explain using the graph."],
    ["A rectangular pen is built with $40$ m of fence, so its length is $20-w$ when the width is $w$. Write the area $A(w)$ and state the domain and range that make sense in the situation.", "The height of a ball is $h(t)=-5t^2+20t$ metres. State the domain (the time the ball is in the air) and the range of heights.", "A phone plan costs $\\$20$ plus $\\$0.10$ per minute, with a limit of $500$ minutes. Write the cost function $C(m)$ and state its domain and range."]),
  "1.3": A4("1.3", "Inverse Functions",
    ["Find the inverse of $f(x)=2x-1$.", "Find the inverse of $f(x)=\\dfrac{x}{3}+2$.", "The graph of an inverse is a reflection of the original in which line?"],
    ["Find the inverse of $f(x)=3x-9$ and verify that $f(f^{-1}(x))=x$.", "The function $f(x)=x^2+2$ has domain $x\\ge0$. Find $f^{-1}(x)$ and state the domain and range of both $f$ and $f^{-1}$."],
    ["Explain why the inverse of a function is not the same as its reciprocal.", "Explain the horizontal-line test, and why $f(x)=x^2$ with all real $x$ does not have an inverse function."],
    ["The Celsius–Fahrenheit rule is $F=1.8C+32$. Write the inverse that converts $F$ to $C$, convert $98.6^\\circ$F, and find the temperature at which the two scales are equal.", "A taxi fare is $f(d)=4.50+1.80d$ dollars for $d$ km. Find $f^{-1}$, explain what it tells you, and use it to find the distance for a $\\$27.90$ fare.", "A store takes $20\\%$ off the original price $x$ and then applies a $\\$10$ coupon, so you pay $f(x)=0.8x-10$. Find $f^{-1}$ and use it to find the original price when you paid $\\$46$."]),
  "1.4": A4("1.4", "Transformations of Functions",
    ["Describe how $y=(x-2)^2+3$ is obtained from $y=x^2$.", "State the vertex of $y=(x+1)^2-5$.", "Describe the transformations in $y=\\sqrt{x}-4$."],
    ["Describe all the transformations of $y=-2(x-3)^2+1$, and state its vertex, direction of opening and range.", "Write the equation of the parabola obtained from $y=x^2$ by a vertical stretch of factor $3$, a reflection in the $x$-axis, a shift $2$ units left and $5$ units up. State its range."],
    ["Explain why the horizontal shift in $y=(x-2)^2$ is to the right even though a minus sign appears.", "In what order are the transformations applied in $y=af(k(x-d))+c$? Explain why the order can matter."],
    ["A bridge arch is modelled by $h(x)=-0.05(x-20)^2+20$ (metres). State the greatest height and where it occurs, and find the span at the base. Describe the arch as a transformation of $y=x^2$.", "A company's profit in thousands of dollars is $P(x)=-2(x-5)^2+50$, where $x$ is the selling price in dollars. Describe the transformations, state the maximum profit and the price that gives it.", "Water from a fountain follows $y=-(x-3)^2+9$ (metres). Describe how to obtain it from $y=x^2$ and find where the water lands."]),
  "1.5": A4("1.5", "Quadratic Functions: Zeros, Max & Min",
    ["State the vertex of $y=(x-3)^2-4$.", "Complete the square: $x^2+6x+5$.", "Find the minimum value of $y=x^2-2x+5$."],
    ["Find the vertex, axis of symmetry and zeros of $y=x^2-6x+5$.", "Write $y=2x^2-12x+19$ in vertex form. Does it have a maximum or a minimum, and what is its value?"],
    ["Explain how completing the square reveals the vertex of a parabola.", "Explain how the direction of opening and the position of the vertex tell you the number of zeros."],
    ["A farmer has $60$ m of fence for a rectangular pen against a barn wall, so only three sides need fencing. With width $w$, the area is $A(w)=w(60-2w)$. Find the width that gives the greatest area and that area.", "A ball is thrown from a height of $1.5$ m and its height is $h=-5t^2+20t+1.5$ metres. Find its maximum height and when it occurs, and the time it lands to one decimal place.", "A concert's revenue in hundreds of dollars is $R(x)=-2x^2+80x$, where $x$ is the ticket price in dollars. Find the price that maximises revenue and the maximum revenue."]),
  "1.6": A4("1.6", "Solving Quadratics & Linear–Quadratic Systems",
    ["Solve $x^2-5x+6=0$.", "Solve $x^2+2x-8=0$.", "State the quadratic formula."],
    ["Solve $x^2-4x+1=0$ using the quadratic formula. Give exact roots and decimals to two places.", "Find the points where the line $y=x$ meets the parabola $y=x^2-2$."],
    ["What does the discriminant tell you? Give an example equation for each case.", "Explain how to solve a linear–quadratic system, and what $0$, $1$ or $2$ solutions mean on the graph."],
    ["A rectangular garden has a length $3$ m more than its width and an area of $70$ m$^2$. Find its dimensions.", "A ball's height is $h=-5t^2+15t+2$ metres. When is the height $12$ m? Explain why there are two answers.", "A ski ramp has profile $y=x^2-4x+5$ and a straight zip-line is $y=x+1$ (both in metres). Find where the zip-line meets the ramp."]),
  "2.1": A4("2.1", "Adding & Multiplying Polynomials",
    ["Simplify $4(2x-3)+5(x+1)$.", "Expand $3x(2x^2-x+5)$.", "Expand $(2x-5)^2$."],
    ["Expand and simplify $(x+4)(x-4)+(x+1)^2$.", "Show that $(x+3)(x^2-3x+9)=x^3+27$."],
    ["A student expands $(x-3)^2$ as $x^2-9$. Explain the error and give the correct expansion.", "Is $(x+2)(x+3)$ ever equal to $x^2+6$? Test values of $x$ and explain the difference between an equation and an identity."],
    ["A rectangular pool measures $(x+7)$ m by $(x+3)$ m and is surrounded by a path $1$ m wide. Write polynomials for the total area including the path and for the area of the path alone.", "An open box is made from a $30$ cm by $20$ cm sheet by cutting a square of side $x$ cm from each corner. Write and expand the volume $V(x)$.", "A triangle has sides $(x+5)$, $(2x+1)$ and $(2x+4)$ metres. Write its perimeter, and find $x$ and the three side lengths when the perimeter is $45$ m."]),
  "2.2": A4("2.2", "Factoring Polynomials",
    ["Factor fully $16x^2+24x$.", "Factor $x^2-6x-27$.", "Factor $3x^2+14x+11$. Show $ac$, the two numbers, the split and the grouping, then check by expanding."],
    ["Factor fully $8x^2-2x-6$. Take out the common factor first, then factor the trinomial and check.", "A student factors $6x^2+x-12$ as $(3x+4)(2x-3)$. Expand to check, find the error, and give the correct factoring."],
    ["Explain, step by step, how to factor $4x^2-8x-5$ so that a classmate could follow: $ac$, the pair of numbers, the split, the grouping, and the check.", "Use $ac$ and a list of factor pairs to explain why $2x^2+5x+4$ cannot be factored over the integers."],
    ["A rectangular garden has area $(10x^2+19x+6)$ m$^2$ and width $(5x+2)$ m. Factor the area to find the length as an expression in $x$, then find the length and width when $x=3$ and check the area.", "A ball is thrown upward from a platform. Its height in metres after $t$ seconds is $h=-5t^2+10t+15$. Take out $-5$ first, factor fully, and use the factors to find when the ball lands ($h=0$). Explain why one answer is rejected.", "A rectangular tile has area $(4x^2-25)$ cm$^2$. Factor to find expressions for its side lengths, then find its perimeter when $x=5$."]),
  "2.3": A4("2.3", "Simplifying Rational Expressions",
    ["Simplify $\\dfrac{x^2-16}{x-4}$ and state restrictions.", "Simplify $\\dfrac{x^2+5x+6}{x+2}$ and state restrictions.", "State the restrictions for $\\dfrac{5}{x^2-9}$."],
    ["Simplify $\\dfrac{x^2-1}{x}\\cdot\\dfrac{2x}{x+1}$ and state all restrictions.", "Simplify $\\dfrac{x+2}{x-3}\\div\\dfrac{x+2}{x}$ and state all restrictions."],
    ["Explain why $\\dfrac{x^2-1}{x-1}$ is not exactly the same function as $x+1$.", "A student cancels $\\dfrac{x+3}{x+5}$ to $\\dfrac{3}{5}$. Explain the error."],
    ["A banner has area $(x^2+5x+6)$ cm$^2$ and width $(x+2)$ cm. Find an expression for its length, state the restrictions, and find the length when the width is $8$ cm.", "A print shop's cost for $n$ posters is $C=0.5n^2+20n$ dollars. Simplify the average cost per poster $\\dfrac{C}{n}$, state the restriction, and find the average cost for $40$ posters.", "A school buys $(x^2-9)$ pencils in packs of $(x-3)$ pencils. Write the number of packs in simplest form, state the restriction, and find the number of packs when $x=11$."]),
  "2.4": A4("2.4", "Adding & Subtracting Rational Expressions",
    ["Simplify $\\dfrac{7}{x}-\\dfrac{2}{x}$.", "Simplify $\\dfrac{x}{2}+\\dfrac{x}{3}$.", "State the LCD of $\\dfrac{1}{x}$ and $\\dfrac{1}{x+1}$."],
    ["Simplify $\\dfrac{2}{x}+\\dfrac{5}{x+3}$ and state the restrictions.", "Simplify $\\dfrac{1}{x-3}+\\dfrac{1}{x^2-9}$ and state the restrictions."],
    ["Explain the most common sign error when subtracting rational expressions and give an example.", "Why is the LCD of $\\dfrac{1}{x-2}$ and $\\dfrac{1}{x^2-4}$ not their product?"],
    ["One pipe fills a tank in $x$ hours and another fills it in $(x+2)$ hours. Write the combined rate in tanks per hour as a single fraction, and find the combined rate and the time to fill the tank when $x=4$.", "A cyclist rides $20$ km at $v$ km/h and returns at $(v+5)$ km/h. Write the total time as a single fraction and find it when $v=15$.", "Two resistors in parallel satisfy $\\dfrac{1}{R}=\\dfrac{1}{R_1}+\\dfrac{1}{R_2}$. Find $R$ when $R_1=6$ ohms and $R_2=10$ ohms, and write $R$ as a single fraction when $R_2=R_1+4$."]),
  "2.5": A4("2.5", "Radicals & Equivalent Expressions",
    ["Simplify $\\sqrt{75}$.", "Simplify $2\\sqrt5+3\\sqrt5$.", "Simplify $\\sqrt{18}+\\sqrt{2}$."],
    ["Simplify $\\sqrt3(\\sqrt{12}+\\sqrt3)$.", "Expand and simplify $(3+\\sqrt5)^2$."],
    ["Explain why $\\sqrt2+\\sqrt3\\ne\\sqrt5$, using approximate values.", "Show that $\\sqrt8+\\sqrt{18}$ and $5\\sqrt2$ are equivalent."],
    ["A square garden has area $72$ m$^2$. Find its side length in simplest radical form, its perimeter in exact form, and the perimeter to one decimal place.", "A $5$ m ladder leans against a wall with its base $2$ m from the wall. Find the height it reaches in exact form and to two decimal places.", "A television screen is $50$ cm wide and $30$ cm high. Find its diagonal in simplest radical form and as a decimal."]),
  "3.1": A4("3.1", "Exponent Laws & Rational Exponents",
    ["Simplify $x^4\\cdot x^5$.", "Evaluate $3^{-2}$.", "Evaluate $8^{2/3}$."],
    ["Simplify $(2x^2y^3)^3$.", "Simplify $\\dfrac{6x^5y^{-2}}{2x^2y}$ and write the answer with positive exponents."],
    ["Explain why $x^0=1$ using the quotient law.", "Is $(-2)^4$ equal to $-2^4$? Explain."],
    ["A cube has volume $64x^6$ cm$^3$. Use a rational exponent to find its edge length.", "A radioactive sample follows $A=80\\left(\\tfrac12\\right)^{t/5}$ grams after $t$ years. Find the amount after $15$ years and, using exponent laws, give the exact amount after $7.5$ years.", "The energy released by an earthquake of magnitude $M$ is proportional to $10^{1.5M}$. How many times more energy does a magnitude $7$ earthquake release than a magnitude $5$ earthquake?"]),
  "3.2": A4("3.2", "Exponential Functions & Their Graphs",
    ["Is $y=4^x$ growth or decay? How do you know?", "State the $y$-intercept of $y=6\\cdot2^x$.", "State the range of $y=2^x$."],
    ["An exponential function with base $3$ passes through $(0,5)$. Write its equation and find $y$ when $x=2$.", "Compare $y=2^x$ and $y=x^2$ at $x=3$, $x=4$ and $x=10$. For which values is each larger?"],
    ["Explain why $y=b^x$ with $b>0$ can never be negative.", "How are the graphs of $y=2^x$ and $y=2^{-x}$ related? Explain."],
    ["A town of $12\\,000$ people grows $3\\%$ per year, so $P=12\\,000(1.03)^t$. Find its population after $10$ years and explain why this is exponential growth.", "A medication in the bloodstream halves every $4$ hours from $200$ mg, so $A=200\\left(\\tfrac12\\right)^{t/4}$. Find the amount after $10$ hours and describe what happens for large $t$.", "A video has $500$ views and the number triples each day: $V=500\\cdot3^d$. Find the views after $5$ days and the first day on which the views exceed one million."]),
  "3.3": A4("3.3", "Transformations of Exponential Functions",
    ["State the asymptote of $y=2^x+4$.", "Describe the shift in $y=2^{x-3}$.", "State the range of $y=2^x+1$."],
    ["State the asymptote, domain and range of $y=3^x-5$.", "Describe all the transformations of $y=-2^{x+1}+3$ from $y=2^x$, and state its asymptote and range."],
    ["Explain why the domain of an exponential function does not change under these transformations.", "A student says $y=2^x+3$ has asymptote $y=0$. Correct them."],
    ["A cup of coffee cools toward room temperature: $T=65(0.9)^t+20$ in $^\\circ$C after $t$ minutes. State the asymptote and what it means, the initial temperature, and the temperature after $5$ minutes.", "The count rate of a radioactive source above background radiation is $R=80\\left(\\tfrac12\\right)^{t/3}+5$. State the asymptote, interpret it, and find $R$ at $t=6$ hours.", "A collectible is worth $V(t)=500(1.06)^t$ dollars after $t$ years. A second one is worth $W(t)=500(1.06)^{t-2}$. Describe how $W$ relates to $V$, explain what this means in context, and compare $V(10)$ and $W(10)$."]),
  "3.4": A4("3.4", "Applications: Growth, Decay & Compound Interest",
    ["Write the growth model for $800$ increasing $6\\%$ per year.", "Write the decay model for $1200$ decreasing $9\\%$ per year.", "A quantity doubles every $4$ years. Write its model starting from $A_0$."],
    ["An investment of $\\$2000$ at $5\\%$ compounded annually grows for $6$ years. Find the amount.", "Compare the amount after $5$ years of $\\$1000$ at $6\\%$ compounded annually and compounded monthly."],
    ["Explain why $6\\%$ compounded monthly yields more than $6\\%$ compounded annually.", "A car loses $20\\%$ of its value each year. Explain why this model never reaches $\\$0$."],
    ["A population of $1500$ grows $4\\%$ per year. Find the population after $8$ years and estimate, by trial, how long it takes to double.", "A $90$ mg sample has a half-life of $3$ days. Find the amount after $12$ days and after $10$ days.", "A $\\$24\\,000$ car depreciates $15\\%$ per year. Find its value after $4$ years and estimate when it is worth half its price."]),
  "4.1": A4("4.1", "Trigonometric Ratios & Special Angles",
    ["A right triangle has opposite side $5$ and hypotenuse $13$. Find $\\sin\\theta$.", "State the exact value of $\\cos60^\\circ$.", "State the exact value of $\\tan30^\\circ$."],
    ["A right triangle has adjacent side $8$ and opposite side $6$. Find the hypotenuse, all three primary ratios, and $\\theta$ to the nearest degree.", "A $45^\\circ$-$45^\\circ$-$90^\\circ$ triangle has hypotenuse $10$. Find the legs in exact form."],
    ["Explain why $\\sin\\theta$ can never exceed $1$ in a right triangle.", "Derive the exact value of $\\sin45^\\circ$ from a $45^\\circ$-$45^\\circ$-$90^\\circ$ triangle."],
    ["A $6$ m ladder leans against a wall at $70^\\circ$ to the ground. How high up the wall does it reach, and how far is its base from the wall?", "From a point $60$ m from the base of a building, the angle of elevation to the top is $40^\\circ$. Find the height of the building.", "A wheelchair ramp must rise $0.9$ m and must not be steeper than $5^\\circ$. What is the shortest possible length of the ramp surface?"]),
  "4.2": A4("4.2", "Angles 0°–360° & the CAST Rule",
    ["Is $\\sin200^\\circ$ positive or negative?", "State the reference angle of $135^\\circ$.", "Evaluate $\\cos180^\\circ$."],
    ["Evaluate $\\sin240^\\circ$ exactly.", "Find all $\\theta$ in $[0^\\circ,360^\\circ]$ with $\\tan\\theta=-1$."],
    ["Explain how the CAST rule follows from the signs of $x$ and $y$ on the unit circle.", "Why do most equations like $\\sin\\theta=0.5$ have two solutions in $[0^\\circ,360^\\circ]$?"],
    ["The point $P(-8,6)$ lies on the terminal arm of angle $\\theta$ in standard position. Find $r$, $\\sin\\theta$, $\\cos\\theta$, $\\tan\\theta$, and $\\theta$ to the nearest degree.", "A pendulum of length $2$ m is displaced horizontally by $x=2\\sin\\theta$ metres. Find the angles $\\theta$ in $[0^\\circ,360^\\circ]$ for which $x=1$, and describe what each represents.", "A boat travels $10$ km on a bearing of $220^\\circ$ (measured clockwise from north). Find its eastward and northward components, and say which directions the signs indicate."]),
  "4.3": A4("4.3", "Reciprocal Ratios & Trigonometric Identities",
    ["If $\\sin\\theta=\\tfrac{7}{25}$, find $\\csc\\theta$.", "Evaluate $\\sec45^\\circ$.", "State the Pythagorean identity."],
    ["If $\\cos\\theta=\\tfrac{8}{17}$ and $\\theta$ is acute, find $\\sin\\theta$, $\\tan\\theta$ and $\\csc\\theta$.", "Simplify $\\dfrac{1-\\cos^2\\theta}{\\sin\\theta}$."],
    ["Prove that $\\sin\\theta\\,\\csc\\theta=1$.", "Explain why $\\sec\\theta$ is never between $-1$ and $1$."],
    ["A roof rises $3$ m for every $4$ m of horizontal run. Find the slope angle, the rafter length for a $4$ m run, and $\\csc\\theta$ for the roof angle.", "The sun's elevation angle $\\theta$ has $\\sin\\theta=0.6$. Find $\\tan\\theta$, and use it to find the shadow length of a $12$ m pole.", "A surveyor finds $\\sin A=\\tfrac{5}{13}$ for an acute angle $A$ and measures $39$ m along the slope. Find $\\cos A$ and the horizontal distance."]),
  "4.4": A4("4.4", "The Sine Law & Cosine Law",
    ["State the sine law.", "State the cosine law for side $c$.", "Which law would you use given two angles and a side? Given three sides?"],
    ["In $\\triangle ABC$, $a=9$, $b=7$ and $C=55^\\circ$. Find $c$ and then angle $A$.", "In $\\triangle ABC$, $a=6$, $b=8$ and $c=11$. Find the largest angle."],
    ["Explain the ambiguous (SSA) case and how to check for a second triangle.", "Show that the cosine law becomes the Pythagorean theorem when $C=90^\\circ$."],
    ["Two ships leave port. One sails $12$ km on a bearing of $040^\\circ$ and the other sails $9$ km on a bearing of $130^\\circ$. How far apart are they?", "A triangular plot has sides $120$ m, $150$ m and $180$ m. Find its largest angle.", "To find the width of a river, a surveyor stands at $A$ and $B$, $80$ m apart on one bank. The angles to a tree on the far bank are $62^\\circ$ at $A$ and $71^\\circ$ at $B$. Find the distance from $A$ to the tree."]),
  "4.5": A4("4.5", "Trigonometry in 3-D Problems",
    ["A $9$ m ladder makes $65^\\circ$ with the ground. How high does it reach?", "Find the length of the space diagonal of a $3\\times4\\times12$ box.", "Define angle of elevation and angle of depression."],
    ["From two points $25$ m apart in line with a flagpole, the angles of elevation of its top are $30^\\circ$ and $48^\\circ$. Find the height of the flagpole.", "Two paths leave a point $70^\\circ$ apart. Hikers walk $5$ km along one and $8$ km along the other. Find the distance between them."],
    ["Describe a strategy for solving a 3-D problem that needs two triangles.", "Explain why the angle of elevation from $A$ to $B$ equals the angle of depression from $B$ to $A$."],
    ["A mast is supported by a cable from its top to a point on level ground $15$ m from its base. The cable makes $52^\\circ$ with the ground. Find the height of the mast and the length of the cable.", "A square-based tent has base side $4$ m and height $3$ m. Find the slant height of a triangular face and the angle that a face makes with the ground.", "A gondola cable runs from a base station to a summit station $1500$ m away horizontally and $420$ m higher. Find the length of the cable and its angle of elevation."]),
  "5.1": A4("5.1", "Periodic Functions & Their Properties",
    ["A graph repeats every $6$ units. State its period.", "A periodic graph has maximum $9$ and minimum $1$. Find its amplitude.", "For the same graph, find the equation of the midline."],
    ["A graph has a maximum of $15$ at $x=3$ and the next minimum of $-5$ at $x=9$. Find the amplitude, midline and period.", "A periodic function has peaks at $x=2$ and $x=14$ with maximum $12$ and minimum $-4$. Find its period, amplitude and midline."],
    ["Explain the difference between amplitude and the midline.", "Why is amplitude always positive? Is $y=x^2$ periodic? Explain."],
    ["In a bay, high tide is $7.2$ m at 2:00 and the next low tide is $1.2$ m at 8:12. Find the amplitude, the midline and the period of the tide.", "A Ferris wheel rider's height ranges from $1$ m to $31$ m and one rotation takes $60$ s. Find the amplitude, the midline, and the number of rotations in $5$ minutes.", "A city's average monthly temperature peaks at $24^\\circ$C in July and bottoms out at $-8^\\circ$C in January. Find the amplitude, midline and period of the yearly temperature cycle."]),
  "5.2": A4("5.2", "Graphing Sine & Cosine",
    ["State the amplitude of $y=4\\sin x$.", "Where does $y=\\cos x$ start on its graph?", "Evaluate $\\sin90^\\circ$."],
    ["State the range of $y=2\\sin x$ and the zeros of $y=\\sin x$ in $[0^\\circ,360^\\circ]$.", "For $y=\\cos x$ on $[0^\\circ,360^\\circ]$, list the values of $x$ where it is a maximum, a minimum and zero."],
    ["Explain how $y=\\cos x$ is a shift of $y=\\sin x$.", "Why do sine and cosine never exceed $1$ in absolute value?"],
    ["A mass on a spring has displacement $d=8\\cos(90t)$ cm after $t$ seconds. Find $d$ at $t=0$, $1$ and $2$, and the period of the motion.", "The voltage in an AC circuit is $V=170\\sin\\theta$. State the maximum voltage and find the angles $\\theta$ in $[0^\\circ,360^\\circ]$ for which $V=85$.", "A buoy bobs according to $h=0.5\\sin\\theta$ metres relative to its rest position. Find its height at $\\theta=210^\\circ$ and interpret the sign."]),
  "5.3": A4("5.3", "Transformations of Sinusoidal Functions",
    ["State the amplitude of $y=5\\sin x$.", "State the period of $y=\\sin(2x)$.", "State the midline of $y=\\cos x-3$."],
    ["State the amplitude, period and midline of $y=3\\sin(2x)+1$, and its range.", "Write a cosine function with amplitude $4$, period $720^\\circ$ and midline $y=2$."],
    ["Explain how the value of $k$ affects the period of $y=\\sin(kx)$.", "Two students write different equations, one with sine and one with cosine, for the same graph. Explain how both can be correct."],
    ["A Ferris wheel has radius $12$ m, centre $14$ m above the ground, and one rotation takes $48$ s. A rider starts at the bottom. Write $h(t)=-12\\cos(kt)+14$ with the correct $k$ and find the height after $12$ s.", "The temperature in a city is lowest at $4{:}00$ ($6^\\circ$C) and highest at $16{:}00$ ($20^\\circ$C). State the amplitude, midline and period, write a cosine model for $T(t)$, and find the temperature at $10{:}00$.", "The depth of water in a harbour is $d(t)=2.5\\sin(30t)+6$ metres, where $t$ is in hours. State the range of depths and find the depth at $t=3$ and $t=9$."]),
  "5.4": A4("5.4", "Sinusoidal Applications",
    ["A Ferris wheel ranges from $2$ m to $18$ m. Find the amplitude and the midline.", "A cycle lasts $8$ s. Find $k$ in degrees per second.", "For $h=6\\sin(30t)+8$, state the maximum height."],
    ["A tide has period $12$ h, high tide $6$ m and low tide $2$ m. Write a model $h(t)=a\\sin(kt)+c$ and find $h$ at $t=2$.", "For $h=5\\sin(30t)+7$, find every $t$ in $[0,12)$ for which $h=9.5$."],
    ["Explain when it is more natural to model with cosine than with sine.", "Describe how to find the time of maximum height from a model."],
    ["A Ferris wheel has diameter $36$ m, centre height $20$ m and one rotation in $40$ s, boarding at the bottom: $h(t)=-18\\cos(9t)+20$. Find the height at $t=10$ and the part of each rotation spent above $30$ m.", "Daylight in a city is modelled by $D(m)=3.5\\cos(30(m-6))+12$ hours, where $m$ is the month number ($6$ is June). Find the longest and shortest days, the daylight in March, and the months with more than $14$ hours.", "A playground swing moves horizontally according to $x(t)=0.8\\sin(120t)$ metres. State the amplitude and period, and find the displacement at $t=0.5$ s."]),
  "6.1": A4("6.1", "Arithmetic Sequences",
    ["Find the common difference of $5,9,13,17,\\dots$", "Find $t_{12}$ of $3,7,11,\\dots$", "Write the general term $t_n$ for $a=4$, $d=3$."],
    ["Which term of $2,5,8,\\dots$ equals $59$?", "In an arithmetic sequence $t_3=11$ and $t_7=27$. Find $a$, $d$ and $t_{20}$."],
    ["Explain why an arithmetic sequence is a linear function of $n$.", "Two sequences have the same common difference but different first terms. How do their graphs compare?"],
    ["A theatre has $20$ seats in the first row and each row has $3$ more seats than the one before. How many seats are in row $15$, and which row has $83$ seats?", "A student has $\\$50$ in savings after week $1$ and adds $\\$15$ each week. After which week does the savings first exceed $\\$400$?", "A runner trains $10$ km in week $1$ and increases the distance by $2.5$ km each week. In which week does she reach $30$ km?"]),
  "6.2": A4("6.2", "Geometric Sequences",
    ["Find the common ratio of $2,8,32,\\dots$", "Find $t_6$ of $1,3,9,\\dots$", "Write the general term $t_n$ for $a=5$, $r=2$."],
    ["Which term of $2,6,18,\\dots$ equals $486$?", "In a geometric sequence $t_1=2$ and $t_4=54$. Find $r$ and $t_6$."],
    ["Explain why a geometric sequence is an exponential function of $n$.", "How can you tell quickly whether a sequence is arithmetic or geometric?"],
    ["A ball is dropped from $2$ m and rebounds to $60\\%$ of its previous height each time. Find the height of the third rebound and the first rebound that is lower than $10$ cm.", "On day $1$ a post is shared by $5$ people, and each day $3$ times as many people share it as the day before. Find the number on day $6$ and the first day on which more than $10\\,000$ people share it.", "A photocopier reduces a $30$ cm wide image to $80\\%$ of its width each time it is run. Find the width after $4$ reductions and the number of reductions needed to get below $10$ cm."]),
  "6.3": A4("6.3", "Arithmetic Series",
    ["Find $1+2+3+\\dots+60$.", "Find $t_{10}$ of $4,7,10,\\dots$ and the sum of its first $10$ terms.", "State the formula $S_n=\\dfrac{n}{2}(a+t_n)$ in words."],
    ["Sum the first $20$ terms of $3,7,11,\\dots$", "An arithmetic series has $a=5$, $t_{10}=95$. Find $d$ and $S_{10}$. Then find $2+4+6+\\dots+80$."],
    ["Explain why pairing the first and last terms leads to the sum formula.", "When would you use $S_n=\\dfrac{n}{2}\\left(2a+(n-1)d\\right)$ instead? Describe how to find the number of terms before summing."],
    ["A theatre has $25$ rows. The first row has $20$ seats and each later row has $3$ more seats than the row before. Find the total number of seats.", "A person saves $\\$10$ in week $1$ and increases the deposit by $\\$5$ each week for $52$ weeks. Find the total saved.", "Logs are stacked with $18$ in the bottom row and one fewer in each higher row, ending with $1$ log on top. How many logs are in the stack?"]),
  "6.4": A4("6.4", "Geometric Series",
    ["State the formula $S_n=\\dfrac{a(r^n-1)}{r-1}$ and what each symbol means.", "Find $2+6+18+54$.", "Sum the first $5$ terms of $1,2,4,\\dots$"],
    ["Sum the first $6$ terms of $2,6,18,\\dots$", "Find the sum of the first $3$ terms of $5,15,45,\\dots$, then the smallest number of terms for which the sum exceeds $1000$."],
    ["Explain why the formula cannot be used when $r=1$, and what to do instead.", "Explain the most common mistake (using $r^{n-1}$ instead of $r^n$ in the series formula)."],
    ["In a chain letter you send it to $3$ people, each of whom sends it to $3$ new people, for $6$ rounds. How many letters are sent altogether?", "A person deposits $\\$100$ at the end of year $1$ and each following year deposits $10\\%$ more than the year before, for $8$ years. Find the total deposited.", "A ball is dropped from $3$ m and each rebound reaches $70\\%$ of the previous height. Find the total distance it falls in its first $5$ drops."]),
  "6.5": A4("6.5", "Pascal's Triangle & the Binomial Theorem",
    ["Write row $4$ of Pascal's triangle.", "Expand $(a+b)^3$.", "State the coefficient of $a^2b^2$ in $(a+b)^4$."],
    ["Expand $(2x-3)^3$.", "Find the coefficient of $x^2y^3$ in $(x+y)^5$, and the $x^3$ term in the expansion of $(x+2)^5$."],
    ["Explain how each entry of Pascal's triangle is formed from the row above.", "Show that the entries in row $4$ sum to $2^4$, and explain why every row sums to a power of $2$."],
    ["A cube has edge $(x+2)$ cm. Expand its volume, and check the result for $x=3$.", "An investment grows by $r$ each year, so its value after $4$ years is multiplied by $(1+r)^4$. Expand it and use the first three terms to estimate $(1.02)^4$.", "In a city grid, the number of shortest routes from one corner to the opposite corner of a $3$-by-$4$ block grid can be found with Pascal's triangle. Use row $7$ to find the number of routes."]),
  "7.1": A4("7.1", "Simple Interest",
    ["Find the interest on $\\$1000$ at $5\\%$ per year for $3$ years.", "State the simple-interest formula $I=Prt$ and say what each symbol means.", "Convert $4\\%$ to a decimal."],
    ["$\\$800$ at $6\\%$ simple interest earns $\\$144$. Find the time.", "$\\$2500$ earns $\\$300$ in $3$ years at simple interest. Find the rate."],
    ["Explain why simple interest grows linearly and how it relates to an arithmetic sequence.", "A friend says that doubling the time doubles the interest. Is that true for simple interest? Explain."],
    ["You borrow $\\$1200$ for $9$ months at $8\\%$ per year simple interest. Find the interest and the total to repay.", "A GIC pays $3.5\\%$ simple interest per year. How much must be invested to earn $\\$210$ in $2$ years?", "A short-term loan of $\\$5000$ charges $\\$50$ interest per month. Find the equivalent annual simple interest rate."]),
  "7.2": A4("7.2", "Compound Interest",
    ["Find the amount: $\\$1000$ at $5\\%$ compounded annually for $3$ years.", "For $6\\%$ per year compounded monthly, find $i$ and the value of $n$ for $2$ years.", "State the compound-interest formula and define each symbol."],
    ["$\\$2000$ at $4\\%$ compounded annually for $5$ years. Find the amount and the interest earned.", "$\\$1000$ at $6\\%$ compounded monthly for $2$ years. Find the amount."],
    ["Explain why compound interest grows exponentially and how it connects to geometric sequences.", "Compare $\\$1000$ at $6\\%$ for $10$ years, simple versus compounded annually, and explain the difference."],
    ["You invest $\\$5000$ at $3.6\\%$ per year compounded monthly for $4$ years. Find the amount and the interest earned.", "A $\\$20\\,000$ loan at $6\\%$ per year compounded semi-annually is not paid for $3$ years. How much is owed?", "Which is better for $\\$1000$ over $10$ years: $5\\%$ compounded annually or $4.9\\%$ compounded monthly? Show the amounts."]),
  "7.3": A4("7.3", "Present Value",
    ["State the present-value formula and define each symbol.", "Find the present value of $\\$1000$ due in $5$ years at $6\\%$ compounded annually.", "Define present value in your own words."],
    ["How much must be invested now at $5\\%$ compounded annually to have $\\$5000$ in $4$ years?", "Which is worth more today at $5\\%$ compounded annually: $\\$500$ now or $\\$600$ in $3$ years? Show your work."],
    ["Does a higher interest rate increase or decrease the present value? Explain.", "Explain why comparing amounts in present-value terms is a fair way to compare options."],
    ["A scholarship will pay $\\$8000$ in $6$ years. Find its present value at $4\\%$ per year compounded semi-annually.", "You can take $\\$3000$ now or $\\$3500$ in $3$ years, and money earns $5\\%$ compounded annually. Which option is worth more today, and by how much?", "A company needs $\\$25\\,000$ for equipment in $5$ years and invests at $6\\%$ per year compounded monthly. How much must it invest today?"]),
  "7.4": A4("7.4", "Annuities",
    ["State the future-value-of-an-annuity formula and define $R$.", "State the present-value-of-an-annuity formula.", "What kind of series does an annuity form?"],
    ["Find the future value of $\\$500$ deposited at the end of each year for $4$ years at $5\\%$ compounded annually.", "Find the present value of $\\$300$ received at the end of each year for $4$ years at $5\\%$ compounded annually."],
    ["Explain why the future value of an annuity is a geometric series.", "Explain the difference between the future value and the present value of an annuity."],
    ["To save for a trip, you deposit $\\$200$ at the end of each month for $2$ years at $3\\%$ per year compounded monthly. How much will you have?", "A car loan requires payments of $\\$350$ at the end of each month for $4$ years at $6\\%$ per year compounded monthly. What is the present value (the amount borrowed)?", "A person deposits $\\$2000$ at the end of each year for $30$ years at $5\\%$ compounded annually. Find the final balance."]),
};

async function run() {
  const teacherId = await getTeacherId();
  let course;
  const existing = await db.from("courses").select("id").eq("teacher_id", teacherId).eq("title", COURSE_TITLE).maybeSingle();
  if (existing.data) {
    course = existing.data;
    await db.from("courses").update({ code: "MCR3U", description: DESC, level: "11", published: true }).eq("id", course.id);
  } else {
    const ins = await db.from("courses").insert({ teacher_id: teacherId, code: "MCR3U", title: COURSE_TITLE, description: DESC, level: "11", published: true }).select("id").single();
    if (ins.error) throw ins.error;
    course = ins.data;
  }
  console.log("Course:", course.id);

  await db.from("lessons").delete().eq("course_id", course.id);
  // assignments.id is referenced by submissions.assignment_id ON DELETE CASCADE —
  // never delete assignment rows (it destroys student submissions). Upsert by title below.
  let pos = 0;
  let full = 0;
  let asg = 0;
  for (const s of subjects) {
    const { error } = await db.from("lessons").insert({ course_id: course.id, title: `${s.code} ${s.title}`, blocks: s.blocks, position: pos++, published: true });
    if (error) throw error;
    if (!JSON.stringify(s.blocks).includes("are being written")) full++;
    const ad = ASSIGN[s.code];
    if (ad) {
      const existingA = await db.from("assignments").select("id").eq("course_id", course.id).eq("title", ad.title).maybeSingle();
      const { error: ae } = existingA.data
        ? await db.from("assignments").update({ description: ad.description, published: true }).eq("id", existingA.data.id)
        : await db.from("assignments").insert({ course_id: course.id, title: ad.title, description: ad.description, published: true });
      if (ae) throw ae;
      asg++;
    }
    console.log(`  ${s.code} ${s.title}`);
  }
  console.log(`\nDone. Seeded ${subjects.length} MCR3U lessons (${full} full, ${subjects.length - full} scaffold) + ${asg} assignments.`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  run().catch((e) => { console.error("SEED FAILED:", e.message ?? e); process.exit(1); });
}

export { subjects };
