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
const ASSIGN = {
  "1.1": A3("1.1", "Functions, Relations & Function Notation",
    ["Is $\\{(1,2),(2,4),(3,6)\\}$ a function?", "For $f(x)=2x-5$, find $f(3)$.", "For $f(x)=x^2+1$, find $f(-2)$.", "Does $y=x^2$ pass the vertical-line test?"],
    ["For $f(x)=3x^2-x$, find $f(2)$ and $f(-1)$.", "A relation maps $1\\to2$ and $1\\to5$. Is it a function? Explain.", "For $g(x)=5-2x$, solve $g(x)=1$."],
    ["Explain the difference between a relation and a function.", "Can a function be many-to-one? Give an example.", "Explain why $f(-2)$ requires squaring before applying the sign when $f(x)=x^2$."]),
  "1.2": A3("1.2", "Domain and Range",
    ["State the domain of $\\sqrt{x-3}$.", "State the domain of $\\dfrac{1}{x+4}$.", "State the range of $x^2+2$.", "State the domain of $x^2-1$."],
    ["State the domain and range of $\\sqrt{x+1}$.", "State the range of $-x^2+5$.", "State the domain of $\\sqrt{2x-8}$."],
    ["Explain two things that can restrict a domain.", "Why is the range of $y=x^2$ only $y\\ge0$?", "Describe how to read domain and range from a graph."]),
  "1.3": A3("1.3", "Inverse Functions",
    ["Find the inverse of $f(x)=2x-1$.", "Find the inverse of $f(x)=\\dfrac{x}{3}+2$.", "Find the inverse of $f(x)=4x$.", "In which line is an inverse a reflection?"],
    ["Find the inverse of $f(x)=3x-9$ and verify $f(f^{-1}(x))=x$.", "Is the inverse of $f(x)=x^2$ a function? Explain.", "If $f$ has domain $x\\ge0$, range $y\\ge2$, state the domain and range of $f^{-1}$."],
    ["Explain why the inverse is not the reciprocal.", "Describe the horizontal-line test and what it tells you.", "Explain why domain and range swap between $f$ and $f^{-1}$."]),
  "1.4": A3("1.4", "Transformations of Functions",
    ["Describe $y=(x-2)^2+3$.", "State the vertex of $y=(x+1)^2-5$.", "What does $a=-1$ do?", "Describe $y=\\sqrt{x}-4$."],
    ["Describe all transformations of $y=-2(x-3)^2+1$.", "Write $y=x^2$ shifted right $4$ and down $2$.", "State the vertex and direction of $y=-3(x+2)^2+4$."],
    ["Explain why the horizontal shift is opposite to the sign inside.", "State the order in which transformations are applied.", "Does the value of $a$ change the vertex? Explain."]),
  "1.5": A3("1.5", "Quadratic Functions: Zeros, Max & Min",
    ["State the vertex of $y=(x-3)^2-4$.", "Complete the square: $x^2+6x+5$.", "Find the minimum of $y=x^2-2x+5$.", "State the axis of symmetry of $y=x^2-6x+5$."],
    ["Find the vertex and zeros of $x^2-6x+5$.", "Does $y=-x^2+4$ have a max or min, and what is its value?", "Complete the square: $x^2+8x+10$."],
    ["Explain how completing the square reveals the vertex.", "How many zeros can a parabola have?", "Explain how to tell max vs min from the equation."]),
  "1.6": A3("1.6", "Solving Quadratics & Linear–Quadratic Systems",
    ["Solve $x^2-5x+6=0$.", "Solve $x^2-9=0$.", "Solve $x^2+2x-8=0$.", "State the quadratic formula."],
    ["Where do $y=x^2-2$ and $y=x$ meet?", "Solve $x^2-4x+1=0$ using the quadratic formula.", "Solve $x^2+2x-15=0$."],
    ["What does the discriminant tell you?", "Explain how to solve a linear–quadratic system.", "When would you use the quadratic formula instead of factoring?"]),
  "2.1": A3("2.1", "Adding & Multiplying Polynomials",
    ["Simplify $4(2x-3)+5(x+1)$.", "Expand $3x(2x^2-x+5)$.", "Expand $(x+6)(x-2)$.", "Expand $(2x-5)^2$."],
    ["A rectangle has length $(x+7)$ and width $(x+3)$. Write its area as a polynomial.", "Write a simplified polynomial for the perimeter of a triangle with sides $x+2$, $2x-1$, and $3x+4$.", "Expand and simplify $(x+4)(x-4)+(x+1)^2$."],
    ["A student expands $(x-3)^2$ as $x^2-9$. Explain the error and give the correct expansion.", "Find $k$ so that $(x+k)^2=x^2+10x+25$. Justify.", "Is $(x+2)(x+3)$ ever equal to $x^2+6$? Test a value of $x$ and explain."]),
  "2.2": A3("2.2", "Factoring Polynomials",
    ["Factor $12x^2-18x$.", "Factor $x^2+9x+20$.", "Factor $x^2-2x-15$.", "Factor $16x^2-49$."],
    ["Factor fully $3x^2-27$.", "The area of a rectangle is $x^2+7x+10$. Find possible dimensions.", "Factor $2x^2+5x-3$."],
    ["Explain why you should always look for a common factor first, using $2x^2-8$.", "A trinomial $x^2+bx+12$ factors with integers. List all possible values of $b$.", "Determine whether $x^2+4$ factors over the integers. Explain."]),
  "2.3": A3("2.3", "Simplifying Rational Expressions",
    ["Simplify $\\dfrac{x^2-16}{x-4}$ and state restrictions.", "Simplify $\\dfrac{3x^2}{6x}$ and state restrictions.", "Simplify $\\dfrac{x^2+5x+6}{x+2}$ and state restrictions.", "State the restrictions for $\\dfrac{5}{x^2-9}$."],
    ["Simplify $\\dfrac{x^2-1}{x}\\cdot\\dfrac{2x}{x+1}$.", "Simplify $\\dfrac{x+2}{x-3}\\div\\dfrac{x+2}{x}$.", "Simplify $\\dfrac{2x^2+8x}{x^2+4x}$."],
    ["Explain why $\\dfrac{x^2-1}{x-1}$ is not exactly the same function as $x+1$.", "A student cancels $\\dfrac{x+3}{x+5}$ to $\\dfrac{3}{5}$. Explain the error.", "For which value(s) of $x$ is $\\dfrac{x-2}{x^2-4}$ undefined? Explain."]),
  "2.4": A3("2.4", "Adding & Subtracting Rational Expressions",
    ["Simplify $\\dfrac{4}{x}+\\dfrac{3}{x}$.", "Simplify $\\dfrac{x}{2}+\\dfrac{x}{3}$.", "Simplify $\\dfrac{7}{x}-\\dfrac{2}{x}$.", "State the LCD of $\\dfrac{1}{x}$ and $\\dfrac{1}{x+1}$."],
    ["Simplify $\\dfrac{2}{x}+\\dfrac{5}{x+3}$.", "Simplify $\\dfrac{3x+1}{x-1}-\\dfrac{x+2}{x-1}$.", "Simplify $\\dfrac{1}{x-3}+\\dfrac{1}{x^2-9}$."],
    ["Explain the most common sign error when subtracting rational expressions; give an example.", "Why is the LCD of $\\dfrac{1}{x-2}$ and $\\dfrac{1}{x^2-4}$ not their product? Explain.", "Create two rational expressions whose sum is $\\dfrac{2x}{x+1}$."]),
  "2.5": A3("2.5", "Radicals & Equivalent Expressions",
    ["Simplify $\\sqrt{75}$.", "Simplify $\\sqrt{48}$.", "Simplify $2\\sqrt5+3\\sqrt5$.", "Simplify $\\sqrt{18}+\\sqrt{2}$."],
    ["Simplify $\\sqrt3(\\sqrt{12}+\\sqrt3)$.", "Expand $(4+\\sqrt2)(4-\\sqrt2)$.", "Simplify $\\sqrt{50}-\\sqrt{8}$."],
    ["Explain why $\\sqrt2+\\sqrt3\\ne\\sqrt5$ using approximate values.", "Show that $\\sqrt8+\\sqrt{18}$ and $5\\sqrt2$ are equivalent.", "Find a whole number $n$ with $\\sqrt{n}$ between $7$ and $8$, and justify."]),
  "3.1": A3("3.1", "Exponent Laws & Rational Exponents",
    ["Simplify $x^4\\cdot x^5$.", "Simplify $(x^3)^4$.", "Simplify $\\dfrac{x^{10}}{x^6}$.", "Evaluate $3^{-2}$."],
    ["Evaluate $8^{2/3}$.", "Simplify $\\dfrac{6x^5}{2x^2}$.", "Simplify $(2x^2y^3)^3$."],
    ["Explain why $x^0=1$ using the quotient law.", "Is $(-2)^4$ equal to $-2^4$? Explain.", "Write $\\sqrt[3]{x^2}$ using a rational exponent."]),
  "3.2": A3("3.2", "Exponential Functions & Their Graphs",
    ["Is $y=4^x$ growth or decay?", "Is $y=(1/3)^x$ growth or decay?", "State the $y$-intercept of $y=6\\cdot2^x$.", "State the range of $y=2^x$."],
    ["Evaluate $y=2^x$ at $x=6$ and $x=-3$.", "An exponential function with base $3$ passes through $(0,5)$. Write its equation.", "State the asymptote and domain of $y=3^x$."],
    ["Explain why $y=b^x$ (with $b>0$) can never be negative.", "How are $y=2^x$ and $y=2^{-x}$ related? Explain.", "For large $x$, which is larger: $y=2^x$ or $y=x^2$? Justify."]),
  "3.3": A3("3.3", "Transformations of Exponential Functions",
    ["State the asymptote of $y=2^x+4$.", "Describe the shift in $y=2^{x-3}$.", "State the range of $y=2^x+1$.", "What transformation does the negative cause in $y=-2^x$?"],
    ["State the asymptote, domain, and range of $y=3^x-5$.", "Describe all transformations of $y=2^{x+1}-3$ from $y=2^x$.", "Write the equation of $y=2^x$ shifted right $2$ and up $1$."],
    ["Explain why the domain never changes under these transformations.", "A student says $y=2^x+3$ has asymptote $y=0$. Correct them.", "Explain how to read the range of an exponential function from its equation."]),
  "3.4": A3("3.4", "Applications: Growth, Decay & Compound Interest",
    ["Write the growth model for $800$ increasing 6% per year.", "Write the decay model for $1200$ decreasing 9% per year.", "State the compound-interest formula $A=P(1+i)^n$ and what each symbol means.", "A quantity doubles every $4$ years. Write its model from $A_0$."],
    ["A population of $1500$ grows 4% per year. Find it after $8$ years.", "An investment of $2000$ dollars at 5% compounded annually grows for $6$ years. Find the amount.", "A $90$ mg sample has a half-life of $3$ days. Find the amount after $12$ days."],
    ["Explain the difference between 6% compounded annually versus monthly. Which yields more? Why?", "A car depreciates 20% per year. Explain why this model never reaches $0$ dollars.", "Estimate how many years it takes an investment at 7% to roughly double, and justify."]),
  "4.1": A3("4.1", "Trigonometric Ratios & Special Angles",
    ["A right triangle has opposite $5$ and hypotenuse $13$. Find $\\sin\\theta$.", "State $\\cos60^\\circ$.", "State $\\tan30^\\circ$.", "A right triangle has hypotenuse $12$ and angle $30^\\circ$. Find the opposite side."],
    ["A right triangle has adjacent $8$, opposite $6$. Find all three primary ratios.", "Find the hypotenuse if the opposite is $7$ and the angle is $45^\\circ$.", "Find $\\theta$ if $\\tan\\theta=1$ (acute)."],
    ["Explain why $\\sin\\theta$ can never exceed $1$ in a right triangle.", "Derive the exact value of $\\sin45^\\circ$ from a $45^\\circ$-$45^\\circ$-$90^\\circ$ triangle.", "Two students disagree on whether the hypotenuse can be the shortest side. Settle it."]),
  "4.2": A3("4.2", "Angles 0°–360° & the CAST Rule",
    ["Is $\\sin200^\\circ$ positive or negative?", "State the reference angle of $135^\\circ$.", "Evaluate $\\cos180^\\circ$.", "In which quadrant is tangent positive besides Q1?"],
    ["Evaluate $\\sin240^\\circ$ exactly.", "Find all $\\theta\\in[0^\\circ,360^\\circ]$ with $\\cos\\theta=\\tfrac12$.", "Find all $\\theta\\in[0^\\circ,360^\\circ]$ with $\\tan\\theta=-1$."],
    ["Explain how the CAST rule follows from the signs of $x$ and $y$ on the unit circle.", "Why do most equations like $\\sin\\theta=0.5$ have two solutions in $[0^\\circ,360^\\circ]$?", "Explain how to find the reference angle in each quadrant."]),
  "4.3": A3("4.3", "Reciprocal Ratios & Trigonometric Identities",
    ["If $\\sin\\theta=\\tfrac{7}{25}$, find $\\csc\\theta$.", "Evaluate $\\sec45^\\circ$.", "Evaluate $\\cot30^\\circ$.", "State the Pythagorean identity."],
    ["If $\\cos\\theta=\\tfrac{8}{17}$ and $\\theta$ is acute, find $\\sin\\theta$.", "Simplify $\\dfrac{\\sin\\theta}{\\cos\\theta}\\cdot\\cos\\theta$.", "If $\\tan\\theta=\\tfrac34$, find $\\cot\\theta$."],
    ["Prove $\\sin\\theta\\,\\csc\\theta=1$.", "Prove $\\dfrac{\\cos\\theta}{\\sin\\theta}=\\cot\\theta$.", "Explain why $\\sec\\theta$ is never between $-1$ and $1$."]),
  "4.4": A3("4.4", "The Sine Law & Cosine Law",
    ["State the sine law.", "State the cosine law for side $c$.", "Which law do you use given two angles and a side?", "Which law do you use given three sides?"],
    ["In $\\triangle ABC$, $A=45^\\circ$, $B=65^\\circ$, $a=14$. Find $b$.", "$a=9$, $b=7$, $C=55^\\circ$. Find $c$.", "$a=6$, $b=8$, $c=11$. Find the largest angle."],
    ["Explain the ambiguous (SSA) case and how to check for a second triangle.", "Show that the cosine law becomes the Pythagorean theorem when $C=90^\\circ$.", "A surveyor knows two sides and the contained angle of a triangular plot. Explain which law finds the third side and why."]),
  "4.5": A3("4.5", "Trigonometry in 3-D Problems",
    ["From $60$ m away the angle of elevation to a tower is $40^\\circ$. Find the height.", "A $9$ m ladder makes $65^\\circ$ with the ground. How high does it reach?", "Find the space diagonal of a $3\\times4\\times12$ box.", "Define angle of elevation."],
    ["From two points $25$ m apart in line with a flagpole, the elevations are $30^\\circ$ and $48^\\circ$. Set up the equations to find the height.", "Two paths leave a point $70^\\circ$ apart; hikers walk $5$ km and $8$ km. Find the distance between them.", "A ramp rises $3$ m over a $20$ m run. Find the angle of elevation."],
    ["Describe a strategy for solving a 3-D problem that needs two triangles.", "Explain why angles of elevation and depression between two points are equal.", "A drone is seen from two ground stations. Explain what measurements you would take and which laws you would use to find its height."]),
  "5.1": A3("5.1", "Periodic Functions & Their Properties",
    ["A graph repeats every $6$ units. State the period.", "Max $=9$, min $=1$. Find the amplitude.", "Max $=9$, min $=1$. Find the axis (midline).", "State the period of $y=\\sin x$."],
    ["Max $=12$, min $=-4$. Find the amplitude and axis.", "A tide repeats every $12$ hours. State the period.", "State the maximum and minimum of $y=\\cos x$."],
    ["Explain the difference between amplitude and axis.", "Why is amplitude always positive?", "Give two real-world examples of periodic behaviour and identify their period."]),
  "5.2": A3("5.2", "Graphing Sine & Cosine",
    ["State the amplitude of $y=4\\sin x$.", "State the period of $y=\\sin x$.", "Where does $y=\\cos x$ start?", "Evaluate $\\sin90^\\circ$."],
    ["State the range of $y=2\\sin x$.", "Evaluate $\\cos180^\\circ$.", "At what angles does $y=\\sin x$ equal $0$ in $[0^\\circ,360^\\circ]$?"],
    ["Explain how $y=\\cos x$ is a shift of $y=\\sin x$.", "Sketch and describe one full cycle of $y=\\sin x$.", "Why do sine and cosine never exceed $1$ in absolute value?"]),
  "5.3": A3("5.3", "Transformations of Sinusoidal Functions",
    ["State the amplitude of $y=5\\sin x$.", "State the period of $y=\\sin(2x)$.", "State the midline of $y=\\cos x-3$.", "State the phase shift of $y=\\sin(x-40^\\circ)$."],
    ["State the amplitude, period, and midline of $y=3\\sin(2x)+1$.", "Write a sine function with amplitude $4$, period $360^\\circ$, midline $y=2$.", "State the range of $y=2\\sin x-1$."],
    ["Explain how $k$ affects the period.", "Explain how to find the range from $a$ and $c$.", "Two students write different equations for the same graph (one sine, one cosine). Explain how both can be correct."]),
  "5.4": A3("5.4", "Sinusoidal Applications",
    ["A Ferris wheel ranges from $2$ m to $18$ m. Find the amplitude.", "Find the midline for a range of $2$ m to $18$ m.", "A cycle lasts $8$ s. Find $k$ in degrees.", "For $h=6\\sin(30t)+8$, state the maximum height."],
    ["Temperature ranges $8^\\circ$ to $22^\\circ$ over $24$ h. Give the amplitude and midline.", "For $h=5\\sin(30t)+7$, find $h$ at $t=3$.", "A tide has period $12$ h, high $6$ m, low $2$ m. Find the amplitude, midline, and $k$."],
    ["Explain when to model with cosine instead of sine.", "Describe how to find the time of maximum height from a model.", "A Ferris wheel makes one turn in $40$ s. Explain how to find the rider's height equation, naming each parameter."]),
  "6.1": A3("6.1", "Arithmetic Sequences",
    ["Find $d$ for $5,9,13,17,\\dots$", "For $a=2,\\ d=5$, find $t_{6}$.", "Find $t_{12}$ of $3,7,11,\\dots$", "Write the general term $t_n$ for $a=4,\\ d=3$."],
    ["Which term of $2,5,8,\\dots$ equals $59$?", "If $d=4$ and $t_6=29$, find $a$.", "Find the first term if $t_3=11$ and $t_7=27$."],
    ["Explain why an arithmetic sequence is linear.", "Two sequences have the same $d$ but different first terms. How do their graphs compare?", "Create an arithmetic sequence whose $10$th term is $50$."]),
  "6.2": A3("6.2", "Geometric Sequences",
    ["Find $r$ for $2,8,32,\\dots$", "For $a=3,\\ r=2$, find $t_5$.", "Find $t_6$ of $1,3,9,\\dots$", "Write the general term $t_n$ for $a=5,\\ r=2$."],
    ["Which term of $2,6,18,\\dots$ equals $486$?", "If $t_1=2$ and $t_4=54$, find $r$.", "A population triples each year from $100$. Write $t_n$."],
    ["Explain why a geometric sequence is exponential.", "How can you tell quickly if a sequence is arithmetic or geometric?", "Create a geometric sequence whose $4$th term is $40$."]),
  "6.3": A3("6.3", "Arithmetic Series",
    ["Find $1+2+3+\\dots+60$.", "State the formula $S_n=\\dfrac{n}{2}(a+t_n)$ in words.", "Sum the first $10$ terms of $2,5,8,\\dots$", "Find $t_{10}$ of $4,7,10,\\dots$ (needed for its series)."],
    ["Sum the first $20$ terms of $3,7,11,\\dots$", "An arithmetic series has $a=5$, $t_n=95$, $n=10$. Find $S_{10}$.", "Find $2+4+6+\\dots+80$."],
    ["Explain why pairing the first and last terms gives the sum formula.", "When would you use $\\dfrac{n}{2}(2a+(n-1)d)$ instead?", "Describe how to find the number of terms before summing."]),
  "6.4": A3("6.4", "Geometric Series",
    ["State the formula $S_n=\\dfrac{a(r^n-1)}{r-1}$.", "Find $2+6+18+54$.", "Sum the first $5$ terms of $1,2,4,\\dots$", "Sum the first $4$ terms of $3,6,12,\\dots$"],
    ["Sum the first $6$ terms of $2,6,18,\\dots$", "A salary starts at $\\$2000$ and doubles each year. Total over $5$ years?", "Sum the first $3$ terms of $5,15,45,\\dots$"],
    ["Why can't the formula be used when $r=1$?", "Explain the most common mistake (using $r^{n-1}$ in the series formula).", "Explain how a geometric series connects to compound interest."]),
  "6.5": A3("6.5", "Pascal's Triangle & the Binomial Theorem",
    ["Write row $4$ of Pascal's triangle.", "Expand $(a+b)^2$.", "Expand $(a+b)^3$.", "State the coefficients for $(a+b)^4$."],
    ["Expand $(x+2)^3$.", "Expand $(x+1)^4$.", "Find the coefficient of $a^2b^2$ in $(a+b)^4$."],
    ["Explain how each entry of Pascal's triangle is formed.", "Why does row $n$ give the coefficients of $(a+b)^n$?", "Show that the entries in row $4$ sum to $2^4$."]),
  "7.1": A3("7.1", "Simple Interest",
    ["Find the interest on $1000 at 5% for 3 years.", "Find the total amount for $1000 at 5% for 3 years.", "State the simple-interest formula $I=Prt$ and what each symbol means.", "Convert 4% to a decimal rate."],
    ["$800 at 6% earns $144. Find the time.", "An investment at 3% for 4 years earns $120. Find the principal.", "$2500 earns $300 in 3 years. Find the rate."],
    ["Explain why simple interest grows linearly.", "Explain how simple interest connects to arithmetic sequences.", "A friend says doubling the time doubles the interest. Is that true for simple interest? Explain."]),
  "7.2": A3("7.2", "Compound Interest",
    ["Find the amount: $1000 at 5% compounded annually for 3 years.", "State the compound-interest formula and define $i$ and $n$.", "For 6% compounded monthly, find $i$.", "For 6% compounded monthly over 2 years, find $n$."],
    ["$2000 at 4% compounded annually for 5 years. Find the amount.", "Find the interest earned on $1500 at 5% compounded annually for 4 years.", "$1000 at 6% compounded monthly for 2 years. Find the amount."],
    ["Explain why compound interest grows exponentially.", "Compare $1000 at 6% simple vs compound over 10 years and explain the difference.", "Explain how compound interest connects to geometric sequences."]),
  "7.3": A3("7.3", "Present Value",
    ["State the present-value formula.", "Find the present value of $1000 in 5 years at 6%.", "Find the present value of $2000 in 3 years at 5%.", "Define present value in your own words."],
    ["How much must you invest now to have $5000 in 4 years at 5%?", "Present value of $1000 in 10 years at 7%?", "Is $500 now or $600 in 3 years at 5% worth more today? Show your work."],
    ["Explain how present value relates to compound interest.", "Does a higher interest rate increase or decrease present value? Explain.", "Explain why comparing options in present-value terms is fair."]),
  "7.4": A3("7.4", "Annuities",
    ["State the future-value-of-an-annuity formula.", "Define $R$ in the annuity formulas.", "What kind of series is an annuity?", "State the present-value-of-an-annuity formula."],
    ["Find the future value of $500/year for 4 years at 5%.", "Find the future value of $1000/year for 3 years at 6%.", "Find the present value of $300/year for 4 years at 5%."],
    ["Explain why an annuity is a geometric series.", "Explain the difference between the future and present value of an annuity.", "Give two real-world examples of annuities and identify the payment $R$."]),
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
  await db.from("assignments").delete().eq("course_id", course.id);
  let pos = 0;
  let full = 0;
  let asg = 0;
  for (const s of subjects) {
    const { error } = await db.from("lessons").insert({ course_id: course.id, title: `${s.code} ${s.title}`, blocks: s.blocks, position: pos++, published: true });
    if (error) throw error;
    if (!JSON.stringify(s.blocks).includes("are being written")) full++;
    const ad = ASSIGN[s.code];
    if (ad) {
      const { error: ae } = await db.from("assignments").insert({ course_id: course.id, title: ad.title, description: ad.description, published: true });
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
