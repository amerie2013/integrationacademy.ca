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

// ── Assignments — 10 questions, 4 genuine categories (every topic uses this) ──
// 4-category assignment (Knowledge & Understanding / Thinking / Communication / Application),
// 3/2/2/3 questions — used where a topic needs genuine, distinct-category questions (the
// Application items must be real applied contexts, not restated skill questions).
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
    ["Is $\\{(1,2),(2,4),(3,6)\\}$ a function? Explain using the definition.",
     "For $f(x)=2x-5$, find $f(3)$.",
     "For $f(x)=x^2+1$, find $f(-2)$."],
    ["A relation maps $1\\to2$ and $1\\to5$. Is it a function? Use the definition of a function to justify your answer.",
     "If $g(x)=2x^2+3x$ and $g(a)=20$, find all possible values of $a$."],
    ["Explain the difference between a relation and a function, using an example of each.",
     "Explain why $f(-2)$ requires squaring before applying the sign when $f(x)=x^2$, and why the result differs from $-f(2)$."],
    ["A taxi charges a flat fee of 4 dollars plus 2 dollars per kilometre, modeled by $C(d)=4+2d$. (a) Find $C(10)$ and interpret it. (b) If a ride costs 30 dollars, find the distance travelled.",
     "The number of bacteria in a culture after $t$ hours is $N(t)=200+50t$. (a) Find $N(0)$ and explain what it represents. (b) Find $N(6)$. (c) After how many hours will the population reach $650$?",
     "A phone plan costs $C(m)=35+0.10m$ dollars for $m$ minutes over the included limit. (a) Evaluate $C(50)$ and explain its meaning. (b) A customer's bill was 42 dollars. How many extra minutes did they use?"]),
  "1.2": A4("1.2", "Domain and Range",
    ["State the domain of $\\sqrt{x-3}$.",
     "State the domain of $\\dfrac{1}{x+4}$.",
     "State the range of $y=x^2+2$."],
    ["A function has domain $x\\ge-2$ and range $y\\le5$. Suggest a possible equation for the function, and explain how you know it fits both conditions.",
     "Find the domain of $g(x)=\\sqrt{x-3}+\\dfrac{1}{x-7}$, which combines two different kinds of restriction."],
    ["Explain two different things that can restrict a domain, with an example of each.",
     "A classmate says the range of $y=x^2+2$ is \"all real numbers\" because $x^2$ can be squared to give any $y$-value. Explain what is wrong with this reasoning and state the correct range."],
    ["A ball is thrown and its height is modeled by $h(t)=-5t^2+20t$ for $t\\ge0$ seconds. Explain why the domain cannot include negative values of $t$, and find the practical domain (the time interval before the ball lands).",
     "A rectangular garden has a perimeter of $40$ m. If $x$ is the length, the width is $20-x$ and the area is $A(x)=x(20-x)$. State the domain of $A$ that makes sense in this context, and explain your reasoning.",
     "The cost to rent a hall is $C(n)=500+15n$ dollars for $n$ guests, where the hall holds at most $150$ people. State the domain and range of $C$ in this context, and explain what each represents."]),
  "1.3": A4("1.3", "Inverse Functions",
    ["Find the inverse of $f(x)=2x-1$.",
     "Find the inverse of $f(x)=\\dfrac{x}{3}+2$.",
     "In which line is the graph of $f^{-1}$ a reflection of the graph of $f$?"],
    ["Find the inverse of $f(x)=3x-9$ and verify that $f(f^{-1}(x))=x$.",
     "If $f$ has domain $x\\ge0$ and range $y\\ge2$, state the domain and range of $f^{-1}$, and explain the general rule you used."],
    ["Explain why the inverse of a function is not the same as its reciprocal, using $f(x)=2x$ as an example.",
     "Describe the horizontal-line test and explain what it tells you about whether a function has an inverse that is also a function."],
    ["A recipe converts oven temperature using $F(C)=1.8C+32$. Find the inverse function $C(F)$, and use it to convert $350^\\circ\\text{F}$ to Celsius.",
     "A store converts a price in US dollars to Canadian dollars using $C(u)=1.35u$. Find the inverse function, explain what it represents, and use it to find the US-dollar price of an item that costs 81 Canadian dollars.",
     "The function $V(t)=25000-3000t$ models the value (in dollars) of a car $t$ years after purchase, for $0\\le t\\le6$. Find the inverse function, explain what it represents, and use it to find how many years until the car is worth 10000 dollars."]),
  "1.4": A4("1.4", "Transformations of Functions",
    ["For $y=-(x-4)$, state $a$, $k$, $d$ and $c$, then describe the transformation of $y=x$.",
     "State the vertex of $y=3(x+2)^2-5$ and describe how $y=x^2$ was transformed to get it.",
     "Write the equation of $y=|x|$ after a vertical stretch by $4$, a shift left $3$, and a shift up $2$."],
    ["A transformation of $y=\\sqrt{x}$ has domain $x\\ge5$ and passes through $(5,-2)$ and $(9,0)$. Determine $d$ and $c$ (with $a=1$), and explain your reasoning.",
     "Let $g(x)=2(x-1)^2+3$ and $h(x)=\\big(2(x-1)\\big)^2+3$, both built from $f(x)=x^2$. Explain how the transformation in $g$ differs from the one in $h$, and determine which graph is narrower."],
    ["Explain, using $g(x)=a\\,f(k(x-d))+c$, why the horizontal shift moves opposite to the sign written inside the brackets. Support your explanation with a specific example.",
     "A classmate says the graph of $y=-\\sqrt{x}-3$ is \"the same as\" $y=\\sqrt{x}$, just moved down. Explain what is incorrect about this statement."],
    ["A ball thrown from a balcony has height $h(t)=-5(t-1)^2+25$ metres after $t$ seconds. (a) Describe this as a transformation of $h(t)=t^2$. (b) State the maximum height and when it occurs. (c) Find the height of the balcony (the height at $t=0$).",
     "A shipping company charges $C(w)=4|w-5|+12$ dollars for a package based on its weight $w$ (in kg) compared to the ideal weight of $5$ kg. (a) Describe this as a transformation of $C=|w|$. (b) Find the cost for a $5$ kg package and for an $8$ kg package. (c) Explain what the value $12$ represents in this context.",
     "A print shop's average cost per shirt is $A(x)=\\dfrac{500}{x}+3$ dollars for an order of $x$ shirts. (a) Describe this as a transformation of $A=\\dfrac1x$. (b) Find the average cost for orders of $50$ and $500$ shirts. (c) Using the horizontal asymptote, explain what happens to the average cost as the order size grows very large."]),
  "1.5": A4("1.5", "Quadratic Functions: Zeros, Max & Min",
    ["State the vertex of $y=(x-3)^2-4$.",
     "Complete the square: $x^2+6x+5$.",
     "Find the minimum value of $y=x^2-2x+5$."],
    ["A parabola has zeros at $x=2$ and $x=8$. Determine the $x$-coordinate of the vertex without completing the square, and explain the property you used.",
     "A quadratic has vertex $(3,-4)$ and passes through $(5,4)$. Determine its equation in vertex form."],
    ["Explain how completing the square reveals the vertex of a quadratic, using $x^2+6x+5$ as your example.",
     "A classmate says a parabola can have three zeros. Explain why this is impossible, using the shape of a parabola in your explanation."],
    ["A vendor's daily profit from selling sandwiches at $p$ dollars each is modeled by $P(p)=-20p^2+300p-800$. (a) Find the profit when $p=8$ dollars. (b) Complete the square to find the price that maximizes profit, and state the maximum profit.",
     "A ball is thrown upward; its height is $h(t)=-5t^2+30t+2$ metres after $t$ seconds. Find the maximum height and the time it occurs, by completing the square.",
     "A farmer has $80$ m of fencing to enclose a rectangular pen against a barn wall (so only three sides need fencing). If $x$ is the width, the length is $80-2x$ and the area is $A(x)=x(80-2x)$. Find the value of $x$ that maximizes the area, and state the maximum area."]),
  "1.6": A4("1.6", "Solving Quadratics & Linear–Quadratic Systems",
    ["Solve $x^2-5x+6=0$ by factoring.",
     "Solve $x^2-9=0$.",
     "State the quadratic formula."],
    ["A quadratic equation $x^2+bx+9=0$ has exactly one real solution. Determine all possible values of $b$.",
     "Determine, without solving, whether $y=x^2+4$ and $y=2x-1$ intersect. Justify using the discriminant."],
    ["Explain what the discriminant tells you about the number of real solutions of a quadratic equation, with an example of each case.",
     "Explain the steps to solve a linear–quadratic system, and why setting the two expressions equal to each other works."],
    ["A ball's height is $h(t)=-5t^2+20t$ metres, and a drone hovers at a constant height of $15$ m. Find the times when the ball is at the same height as the drone.",
     "A company's revenue is $R(x)=-x^2+20x$ (thousands of dollars) and its cost is $C(x)=6x+40$ (thousands of dollars), where $x$ is hundreds of units sold. Find the break-even quantities where $R(x)=C(x)$, and state the interval of $x$ where the company makes a profit.",
     "A rectangular pool is $10\\text{ m}\\times6\\text{ m}$, surrounded by a walkway of constant width $x$. The total area (pool plus walkway) is $A(x)=(10+2x)(6+2x)$. If the total area must be $140\\text{ m}^2$, find the width of the walkway by solving the resulting quadratic equation."]),
  "2.1": A4("2.1", "Adding & Multiplying Polynomials",
    ["Simplify $4(2x-3)+5(x+1)$.",
     "Expand $3x(2x^2-x+5)$.",
     "Expand $(x+6)(x-2)$."],
    ["Find $k$ so that $(x+k)^2=x^2+10x+25$, and justify your answer using the pattern for squaring a binomial.",
     "Is $(x+2)(x+3)$ ever equal to $x^2+6$ for some value of $x$? Solve to find any such value(s), or show none exist."],
    ["A student expands $(x-3)^2$ as $x^2-9$. Explain the error and give the correct expansion.",
     "Explain why $(x+7)(x+3)$ is not the same as $x^2+7^2+3^2$, and show the correct expansion to support your explanation."],
    ["A rectangular garden has length $(x+7)$ m and width $(x+3)$ m. (a) Write and simplify a polynomial for its area. (b) Find the area when $x=5$ m.",
     "A picture frame is a square of side $(x+4)$ cm with a square opening of side $x$ cm cut from the centre. (a) Write and simplify a polynomial for the area of the frame material only. (b) Find that area when $x=10$ cm.",
     "A triangular sail has a base of $(2x-1)$ m and a height of $(x+4)$ m. Using $A=\\tfrac12\\times\\text{base}\\times\\text{height}$, write and simplify a polynomial for its area, then find the area when $x=6$ m."]),
  "2.2": A4("2.2", "Factoring Polynomials",
    ["Factor $12x^2-18x$.",
     "Factor $x^2+9x+20$.",
     "Factor $16x^2-49$."],
    ["A trinomial $x^2+bx+12$ factors with integers. List all possible values of $b$, and explain how you found them.",
     "Determine whether $x^2+4$ can be factored over the integers. Explain your reasoning using the discriminant or another method."],
    ["Explain why you should always look for a common factor first, using $2x^2-8$ as your example.",
     "A classmate factors $x^2-2x-15$ as $(x-3)(x+5)$. Explain how to check this answer, and identify whether it is correct."],
    ["The area of a rectangular rug is $x^2+7x+10$ m². Factor this expression to find possible length and width expressions, then state the actual dimensions when $x=3$ m.",
     "A ball's height is modeled by $h(x)=-x^2+2x+8$, where $x$ is the horizontal distance in metres. Factor $h(x)$ to find the ball's horizontal range (where it lands).",
     "A manufacturer's profit (in thousands of dollars) is $P(x)=x^2-x-30$, where $x$ is hundreds of units sold. Factor $P(x)$ to find the break-even points, and state the range of $x$ for which the company is profitable."]),
  "2.3": A4("2.3", "Simplifying Rational Expressions",
    ["Simplify $\\dfrac{x^2-16}{x-4}$ and state restrictions.",
     "Simplify $\\dfrac{3x^2}{6x}$ and state restrictions.",
     "State the restrictions for $\\dfrac{5}{x^2-9}$."],
    ["Simplify $\\dfrac{x^2-1}{x}\\cdot\\dfrac{2x}{x+1}$, and explain why you must state $x\\ne0$ and $x\\ne-1$ even though they don't appear in the simplified answer.",
     "For which value(s) of $x$ is $\\dfrac{x-2}{x^2-4}$ undefined? Simplify the expression first, then explain why one of the restricted values is a \"hole\" and not a vertical asymptote."],
    ["Explain why $\\dfrac{x^2-1}{x-1}$ is not exactly the same function as $x+1$, even though they simplify to the same expression.",
     "A student cancels $\\dfrac{x+3}{x+5}$ to $\\dfrac{3}{5}$. Explain the error in this reasoning."],
    ["A company's average cost per unit is $\\overline{C}(x)=\\dfrac{500+3x}{x}$ dollars, where $x$ is the number of units made. Simplify this expression by dividing each term by $x$, then use the simplified form to find the average cost when $x=100$.",
     "A model gives $P(x)=\\dfrac{x^2-9}{x-3}$ for $x\\ne3$. Simplify $P(x)$, and explain why $x=3$ must be excluded from the domain even though the simplified expression is defined there.",
     "A rectangular garden has area $x^2+5x+6$ m² and a length of $x+2$ m. Simplify $\\dfrac{x^2+5x+6}{x+2}$ to find an expression for the width, then find the width when $x=8$ m."]),
  "2.4": A4("2.4", "Adding & Subtracting Rational Expressions",
    ["Simplify $\\dfrac{4}{x}+\\dfrac{3}{x}$.",
     "Simplify $\\dfrac{7}{x}-\\dfrac{2}{x}$.",
     "State the LCD of $\\dfrac{1}{x}$ and $\\dfrac{1}{x+1}$."],
    ["Why is the LCD of $\\dfrac{1}{x-2}$ and $\\dfrac{1}{x^2-4}$ not their product? Factor $x^2-4$ first, find the actual LCD, and explain your reasoning.",
     "Create two rational expressions whose sum is $\\dfrac{2x}{x+1}$, and verify your answer by adding them back together."],
    ["Explain the most common sign error when subtracting rational expressions, using $\\dfrac{3x+1}{x-1}-\\dfrac{x+2}{x-1}$ as your example.",
     "Explain why you must state restrictions on a sum or difference of rational expressions using the restrictions of the ORIGINAL expressions, not the simplified result."],
    ["Two pipes fill a pool: pipe A alone takes $x$ hours and pipe B alone takes $x+2$ hours. Combine the pipes' combined rate, $\\dfrac1x+\\dfrac{1}{x+2}$ pools per hour, into a single rational expression.",
     "A cyclist rides $x$ km at one speed then $x+10$ km at a different speed; the total time is $\\dfrac{x}{15}+\\dfrac{x+10}{20}$ hours. Combine into a single rational expression, then evaluate the total time when $x=30$.",
     "A store's total weekly cost is $\\dfrac{2000}{x}+\\dfrac{500}{x+5}$ dollars, where $x$ is the number of items stocked per order. Combine into a single rational expression, then evaluate the total cost when $x=20$."]),
  "2.5": A4("2.5", "Radicals & Equivalent Expressions",
    ["Simplify $\\sqrt{75}$.",
     "Simplify $\\sqrt{48}$.",
     "Simplify $2\\sqrt5+3\\sqrt5$."],
    ["Show that $\\sqrt8+\\sqrt{18}$ and $5\\sqrt2$ are equivalent by simplifying the left side.",
     "Find all whole numbers $n$ with $6<\\sqrt n<7$."],
    ["Explain why $\\sqrt2+\\sqrt3\\ne\\sqrt5$, using approximate decimal values to support your explanation.",
     "Explain the steps to simplify a radical like $\\sqrt{75}$, and why we look for the largest perfect-square factor."],
    ["A rectangular TV screen has width $8$ in and height $10$ in. Using $d=\\sqrt{w^2+h^2}$, find the exact (simplified radical) diagonal length.",
     "A ship's radar can detect objects up to the horizon, estimated by $d=\\sqrt{13h}$ km, where $h$ is the antenna height in metres. Find the exact (simplified radical) range when $h=100$ m.",
     "A square-based storage box has a volume of $500\\text{ cm}^3$ and a height of $10$ cm. Since $V=s^2h$, find the exact (simplified radical) side length $s$ of the square base."]),
  "3.1": A4("3.1", "Exponent Laws & Rational Exponents",
    ["Simplify $x^4\\cdot x^5$.",
     "Simplify $(x^3)^4$.",
     "Evaluate $3^{-2}$."],
    ["Evaluate $8^{2/3}$, explaining the role of the denominator and numerator of the exponent.",
     "Is $(-2)^4$ equal to $-2^4$? Evaluate both and explain why the placement of the negative sign changes the result."],
    ["Explain why $x^0=1$ for any nonzero $x$, using the quotient law $\\dfrac{x^n}{x^n}=x^{n-n}$ in your explanation.",
     "Explain how to rewrite $\\sqrt[3]{x^2}$ using a rational exponent, and why the index of the root becomes the denominator."],
    ["The energy stored in a spring scales with the square of its compression, $E(x)=kx^2$. If the compression is tripled, use exponent laws to determine by what factor the energy increases, and justify algebraically.",
     "A bacteria population doubles every hour. After $6$ hours there are $64$ bacteria. Use the exponent law $2^{a+b}=2^a\\cdot2^b$ to find the population after $10$ hours.",
     "An investment growing at a fixed rate triples in value over $8$ years. Use exponent laws to determine how much it grows in $16$ years (twice as long), expressing your answer as a factor of the original investment."]),
  "3.2": A4("3.2", "Exponential Functions & Their Graphs",
    ["Is $y=4^x$ growth or decay? Explain how you know from the base.",
     "State the $y$-intercept of $y=6\\cdot2^x$.",
     "State the range of $y=2^x$."],
    ["An exponential function with base $3$ passes through $(0,5)$. Write its equation, and explain how the given point determines the coefficient in front of $3^x$.",
     "For large values of $x$, which grows faster: $y=2^x$ or $y=x^2$? Test $x=10$ and $x=20$ to support your answer, and explain the general pattern."],
    ["Explain why $y=b^x$ (with $b>0$) can never be negative or zero, no matter the value of $x$.",
     "How are $y=2^x$ and $y=2^{-x}$ related? Explain using exponent laws and describe how their graphs compare."],
    ["A social-media post is shared according to $N(t)=3\\cdot2^t$, where $t$ is hours since posting. (a) Find $N(0)$ and explain what it represents. (b) Find $N(5)$. (c) By testing values, find how many hours until the post has been shared more than $1000$ times.",
     "A new car worth 28000 dollars loses value according to $V(t)=28000(0.85)^t$, where $t$ is years since purchase. (a) Find $V(0)$ and interpret it. (b) Find $V(3)$, rounded to the nearest dollar. (c) Explain what the base $0.85$ tells you about the yearly depreciation rate.",
     "A radioactive sample of $80$ mg decays according to $A(t)=80(0.5)^{t/6}$, where $t$ is in days. (a) Find $A(0)$ and interpret it. (b) Find the amount remaining after $18$ days. (c) Explain, using the exponent, why the amount is exactly halved every $6$ days."]),
  "3.3": A4("3.3", "Transformations of Exponential Functions",
    ["State the asymptote of $y=2^x+4$.",
     "Describe the shift in $y=2^{x-3}$ compared to $y=2^x$.",
     "State the range of $y=2^x+1$."],
    ["An exponential function of the form $y=2^{x-d}+c$ has asymptote $y=-2$ and passes through $(3,-1)$. Determine $c$, then use the point to determine $d$.",
     "A company's profit model is $P(x)=1000\\cdot3^{x-2}-1000$, where $x$ is years of operation. Find, by testing integer values of $x$, the first year in which profit exceeds $8000$ dollars."],
    ["A student says $y=2^x+3$ has asymptote $y=0$. Explain what is wrong with this statement and state the correct asymptote.",
     "Explain why the domain of an exponential function never changes under a horizontal or vertical translation, even though the range and asymptote do."],
    ["A rare coin's value follows $V(t)=200(1.08)^t$, and a similar coin released $5$ years later instead follows $V_2(t)=200(1.08)^{t-5}$. (a) Describe $V_2$ as a transformation of $V$. (b) Find $V(10)$ and $V_2(10)$ (to the nearest dollar), and explain why they differ.",
     "A bacteria culture's population is $P(t)=100\\cdot2^{t/3}+50$, where $t$ is in hours (the $+50$ accounts for a fixed contamination baseline). (a) State the horizontal asymptote as $t\\to-\\infty$ and explain what it represents. (b) Find the population at $t=9$ hours.",
     "A tank starts with $50$ mg of contaminant remaining after treatment, modeled by $A(t)=1000\\cdot0.5^{t/4}+50$ mg, where $t$ is in days. (a) State the horizontal asymptote and explain what it represents. (b) Find the amount remaining after $12$ days."]),
  "3.4": A4("3.4", "Applications: Growth, Decay & Compound Interest",
    ["Write the growth model for $800$ increasing $6\\%$ per year.",
     "Write the decay model for $1200$ mg decreasing $9\\%$ per year.",
     "State the compound-interest formula $A=P(1+i)^n$ and explain what each symbol means."],
    ["An investment doubles in value over $12$ years at a fixed annual growth rate. Explain how you could set up the equation $2=(1+r)^{12}$ to represent this, without solving for $r$.",
     "Two investments start at $1000$ dollars: one grows at $5\\%$ compounded annually, the other grows by a flat $60$ dollars per year. Determine, by testing values of $n$, after how many whole years the compound investment first exceeds the simple one."],
    ["Explain the difference between $6\\%$ compounded annually and $6\\%$ compounded monthly. Which yields more? Why?",
     "A car depreciates $20\\%$ per year according to an exponential decay model. Explain why this model predicts the car's value approaches but never reaches $0$ dollars, and whether that is realistic."],
    ["A population of $1500$ grows $4\\%$ per year. Find it after $8$ years.",
     "An investment of $2000$ dollars at $5\\%$ compounded annually grows for $6$ years. Find the amount.",
     "A $90$ mg sample has a half-life of $3$ days. Find the amount after $12$ days."]),
  "4.1": A4("4.1", "Trigonometric Ratios & Special Angles",
    ["A right triangle has opposite $5$ and hypotenuse $13$. Find $\\sin\\theta$.",
     "State the exact value of $\\cos60^\\circ$.",
     "State the exact value of $\\tan30^\\circ$."],
    ["A right triangle has adjacent $8$ and opposite $6$. Use the Pythagorean theorem to find the hypotenuse, then find all three primary trigonometric ratios.",
     "Derive the exact value of $\\sin45^\\circ$ using a $45^\\circ$-$45^\\circ$-$90^\\circ$ triangle with legs of length $1$, showing your work with the Pythagorean theorem."],
    ["Explain why $\\sin\\theta$ can never exceed $1$ in a right triangle, using the relationship between the opposite side and the hypotenuse.",
     "Two students disagree on whether the hypotenuse can be the shortest side of a right triangle. Settle the disagreement and explain your reasoning."],
    ["A wheelchair ramp rises $1$ m over a horizontal distance of $12$ m. Find the angle of elevation of the ramp, to the nearest degree.",
     "A $6$ m ladder leans against a wall, making a $70^\\circ$ angle with the ground. How high up the wall does the ladder reach, to the nearest tenth of a metre?",
     "From a boat, the angle of elevation to the top of a $45$ m lighthouse is $20^\\circ$. Find the horizontal distance from the boat to the lighthouse, to the nearest metre."]),
  "4.2": A4("4.2", "Angles 0°–360° & the CAST Rule",
    ["Is $\\sin200^\\circ$ positive or negative? Use the CAST rule to explain.",
     "State the reference angle of $135^\\circ$.",
     "Evaluate $\\cos180^\\circ$."],
    ["Find all $\\theta\\in[0^\\circ,360^\\circ]$ with $\\cos\\theta=\\tfrac12$, using the reference angle and the CAST rule to find both solutions.",
     "Find all $\\theta\\in[0^\\circ,360^\\circ]$ with $\\tan\\theta=-1$, and explain how you used the CAST rule to identify both quadrants."],
    ["Explain how the CAST rule follows from the signs of the $x$- and $y$-coordinates on the unit circle in each quadrant.",
     "Explain why most equations like $\\sin\\theta=0.5$ have two solutions in $[0^\\circ,360^\\circ)$, while $\\sin\\theta=1$ has only one. Use the unit circle in your explanation."],
    ["A Ferris wheel car rotates counterclockwise from the bottom. After rotating $250^\\circ$, use the CAST rule to determine whether the car's height above the centre is above or below the centre line, and find the reference angle.",
     "A robotic arm's joint angle is $310^\\circ$ from its resting position. Find the reference angle and use the CAST rule to determine the sign of $\\cos\\theta$, which controls the arm's horizontal position.",
     "A lighthouse beam sweeps through angles measured counterclockwise from due east. At $\\theta=160^\\circ$, determine the sign of $\\sin\\theta$ (whether the beam points more north or south), and find the exact reference angle."]),
  "4.3": A4("4.3", "Reciprocal Ratios & Trigonometric Identities",
    ["If $\\sin\\theta=\\tfrac{7}{25}$, find $\\csc\\theta$.",
     "Evaluate $\\sec45^\\circ$.",
     "State the Pythagorean identity relating $\\sin\\theta$ and $\\cos\\theta$."],
    ["If $\\cos\\theta=\\tfrac{8}{17}$ and $\\theta$ is acute, find $\\sin\\theta$ using the Pythagorean identity (not a triangle sketch).",
     "If $\\tan\\theta=\\tfrac34$ and $\\theta$ is acute, find $\\sec\\theta$ using the identity $1+\\tan^2\\theta=\\sec^2\\theta$."],
    ["Prove that $\\sin\\theta\\,\\csc\\theta=1$ for any angle where both are defined, and explain why this makes sense given the definition of $\\csc\\theta$.",
     "Explain why $\\sec\\theta$ can never be a value strictly between $-1$ and $1$, using its definition as a reciprocal ratio."],
    ["A surveyor measures $\\cos\\theta=\\tfrac{5}{13}$ for the angle of elevation to a cliff top. The line-of-sight distance equals $\\sec\\theta$ times the horizontal distance. Find $\\sec\\theta$ exactly, then find the line-of-sight distance if the horizontal distance is $65$ m.",
     "An electrical circuit's impedance uses $\\csc\\theta$, where $\\sin\\theta=\\tfrac35$ for the phase angle. Find $\\csc\\theta$ exactly, then find the impedance if the base impedance of $40$ ohms is multiplied by $\\csc\\theta$.",
     "A ramp's incline satisfies $\\tan\\theta=\\tfrac5{12}$. Safety code requires the ramp's length-to-rise ratio, $\\csc\\theta$, to be at least $2.5$. Find $\\csc\\theta$ exactly and determine if the ramp meets code."]),
  "4.4": A4("4.4", "The Sine Law & Cosine Law",
    ["State the sine law.",
     "State the cosine law for finding side $c$.",
     "Given two angles and a side of a triangle, which law would you use to find another side?"],
    ["In $\\triangle ABC$, $A=45^\\circ$, $B=65^\\circ$, $a=14$. Find side $b$ using the sine law, showing your setup.",
     "Given $a=6$, $b=8$, $c=11$ in a triangle, determine which angle is the LARGEST without calculating all three, explain the property you used, then find that angle using the cosine law."],
    ["Explain the ambiguous (SSA) case in the sine law and how to check whether there is a second possible triangle.",
     "Show that the cosine law $c^2=a^2+b^2-2ab\\cos C$ becomes the Pythagorean theorem when $C=90^\\circ$, and explain why this makes sense."],
    ["A surveyor knows two sides ($120$ m and $150$ m) and the contained angle ($75^\\circ$) of a triangular plot of land. Use the cosine law to find the length of the third side, to the nearest metre.",
     "Two forest-fire towers are $8$ km apart. The angle from Tower A to a fire is $52^\\circ$ and from Tower B is $61^\\circ$ (both measured toward each other along the line joining the towers). Use the sine law to find the distance from Tower A to the fire.",
     "A triangular garden has two sides of $18$ m and $24$ m with an included angle of $55^\\circ$. Find its area using $A=\\tfrac12ab\\sin C$, then use the cosine law to find the length of the third side."]),
  "4.5": A4("4.5", "Trigonometry in 3-D Problems",
    ["From $60$ m away, the angle of elevation to a tower is $40^\\circ$. Find the height of the tower.",
     "A $9$ m ladder makes a $65^\\circ$ angle with the ground. How high does it reach?",
     "Define angle of elevation and angle of depression, and explain how they are related."],
    ["From two points $25$ m apart in line with a flagpole, the angles of elevation are $30^\\circ$ and $48^\\circ$. Set up and solve the system of equations needed to find the flagpole's height.",
     "Two paths leave a point at a $70^\\circ$ angle between them. Hikers walk $5$ km and $8$ km along each path. Determine the distance between the hikers, and identify which law is needed and why (rather than right-triangle trig)."],
    ["Describe a general strategy for solving a 3-D trigonometry problem that requires working through two separate triangles.",
     "Explain why the angle of elevation from point A to point B equals the angle of depression from point B to point A."],
    ["A drone is observed from two ground stations $200$ m apart, directly beneath its flight path, with angles of elevation $35^\\circ$ and $50^\\circ$. Explain what method you would use to find the drone's height, then find that height.",
     "A loading ramp rises at $12^\\circ$ over its slope. A box slides $15$ m along the ramp. Using right-triangle trig, find the vertical rise of the box.",
     "A cell tower's guy wire is anchored $40$ m from the base and makes a $62^\\circ$ angle with the ground. Find the length of the guy wire and the height at which it attaches to the tower."]),
  "5.1": A4("5.1", "Periodic Functions & Their Properties",
    ["A graph repeats every $6$ units. State the period.",
     "A periodic function has max $=9$ and min $=1$. Find the amplitude.",
     "A periodic function has max $=9$ and min $=1$. Find the axis (midline)."],
    ["A periodic function has max $=12$ and min $=-4$. Find the amplitude and axis, showing the formulas you used.",
     "A periodic function has amplitude $5$ and axis $y=3$. Determine its maximum and minimum values, and explain the reasoning (the reverse of finding amplitude and axis)."],
    ["Explain the difference between amplitude and the axis (midline) of a periodic function, using a labelled sketch description.",
     "Explain why amplitude is always reported as a positive value, even though a function's graph goes both above and below its midline."],
    ["A tide in a harbour repeats every $12.4$ hours, with a high of $6.5$ m and a low of $1.3$ m. State the period, amplitude, and midline of this pattern.",
     "A person's heart rate during a workout oscillates between $80$ and $160$ beats per minute over each $2$-minute cycle. State the period, amplitude, and midline of this pattern.",
     "The average monthly temperature in a city reaches a high of $26^\\circ\\text{C}$ in July and a low of $-6^\\circ\\text{C}$ in January, repeating every $12$ months. State the period, amplitude, and midline of this pattern."]),
  "5.2": A4("5.2", "Graphing Sine & Cosine",
    ["State the amplitude of $y=4\\sin x$.",
     "State the period of $y=\\sin x$ (in degrees).",
     "Evaluate $\\sin90^\\circ$."],
    ["At what angles does $y=\\sin x$ equal $0$ in $[0^\\circ,360^\\circ]$? List them and explain the pattern (how far apart they are).",
     "Explain how the graph of $y=\\cos x$ is related to the graph of $y=\\sin x$ by a horizontal shift, and state the size of that shift."],
    ["Describe one full cycle of $y=\\sin x$ from $0^\\circ$ to $360^\\circ$, naming the key points (zeros, max, min).",
     "Explain why sine and cosine values can never exceed $1$ or go below $-1$, using the unit circle."],
    ["A speaker's sound-wave pressure is modeled by $y=\\sin x$ (relative units) as $x$ increases with time. Using the graph of sine, explain at what points in the cycle the pressure is highest, lowest, and at the resting (zero) level.",
     "A pendulum's horizontal displacement is modeled by $y=8\\cos x$ cm, where $x$ is the angle swept. Find the displacement at $x=0^\\circ$, $x=90^\\circ$, and $x=180^\\circ$, and interpret each result physically.",
     "The height of a point on a bicycle wheel (radius $1$, relative to the axle) is modeled by $y=\\sin\\theta$ as the wheel turns through angle $\\theta$. Find the height at $\\theta=30^\\circ$, $150^\\circ$, and $210^\\circ$, and explain why two of these give the same height."]),
  "5.3": A4("5.3", "Transformations of Sinusoidal Functions",
    ["State the amplitude of $y=5\\sin x$.",
     "State the period of $y=\\sin(2x)$.",
     "State the midline of $y=\\cos x-3$."],
    ["State the amplitude, period, and midline of $y=3\\sin(2x)+1$, and explain how each parameter connects to that feature.",
     "Verify that $y=\\sin(x-90^\\circ)$ and $y=-\\cos x$ are equivalent by evaluating both at $x=0^\\circ,90^\\circ,180^\\circ$, and explain how both can correctly describe the same graph."],
    ["Explain how the value of $k$ in $y=\\sin(kx)$ affects the period of the graph, and give the formula that relates them.",
     "Explain how to determine the range of a sinusoidal function directly from the values of $a$ and $c$ in $y=a\\sin x+c$."],
    ["The height of a point on a rotating fan blade (radius $0.5$ m) above its resting position is $y=0.5\\sin(180t)$ metres, where $t$ is in seconds. State the amplitude and period, and explain what each represents.",
     "The depth of water at a dock is $d(t)=2\\sin(30t)+5$ metres, where $t$ is in hours. State the amplitude, period, and midline, then find the maximum and minimum water depths.",
     "A weight bobbing on a spring has height $h(t)=4\\cos(90t)+10$ cm above the table, where $t$ is in seconds. State the amplitude, period, and midline, and find the height at $t=2$ seconds."]),
  "5.4": A4("5.4", "Sinusoidal Applications",
    ["A Ferris wheel's height ranges from $2$ m to $18$ m. Find the amplitude.",
     "Find the midline for a Ferris wheel with a height range of $2$ m to $18$ m.",
     "For $h(t)=6\\sin(30t)+8$, state the maximum height reached."],
    ["A cycle of a Ferris wheel lasts $8$ seconds. Find the value of $k$ (in degrees) for its equation, and explain the formula $k=\\dfrac{360}{\\text{period}}$ you used.",
     "A tide has a period of $12$ hours, a high of $6$ m, and a low of $2$ m. Determine the amplitude, midline, and value of $k$ for its equation, showing all three calculations."],
    ["Explain when you would model a periodic situation with a cosine function instead of a sine function, based on where the pattern starts.",
     "Describe how to find the time of maximum height from a sinusoidal height model, without graphing."],
    ["Temperature over a day ranges from $8^\\circ\\text{C}$ to $22^\\circ\\text{C}$ over a $24$-hour cycle, reaching its low at midnight ($t=0$). Write a sinusoidal equation $T(t)$ for this pattern, and find the temperature at $t=9$ hours.",
     "A Ferris wheel is modeled by $h(t)=8\\sin(36t)+10$ metres, $t$ in seconds. Find the height of a rider after $12$ seconds, and determine whether they are above or below the wheel's centre.",
     "A Ferris wheel makes one full turn every $40$ seconds, with a minimum height of $1$ m and a maximum height of $31$ m. A rider boards at the minimum height. Write a sinusoidal equation for the rider's height, naming the amplitude, midline, and value of $k$ you used."]),
  "6.1": A4("6.1", "Arithmetic Sequences",
    ["Find the common difference $d$ for $5,9,13,17,\\dots$",
     "For $a=2,\\ d=5$, find $t_6$.",
     "Write the general term $t_n$ for $a=4,\\ d=3$."],
    ["Which term of the sequence $2,5,8,\\dots$ equals $59$?",
     "Find the first term of an arithmetic sequence if $t_3=11$ and $t_7=27$."],
    ["Explain why an arithmetic sequence's terms, plotted against their term number, form points on a straight line.",
     "Two arithmetic sequences have the same common difference $d$ but different first terms. Explain how their graphs (term number vs. value) compare."],
    ["A theatre has $20$ seats in the first row, and each row behind has $2$ more seats than the row before it. How many seats are in the $15$th row?",
     "A stack of firewood has $30$ logs on the bottom layer, and each layer above has $2$ fewer logs. If there are $12$ layers, how many logs are in the top layer?",
     "A gym membership costs $40$ dollars to join plus $25$ dollars per month. Write the general term $t_n$ for the total cost after $n$ months (including the joining fee), and find the total cost after $10$ months."]),
  "6.2": A4("6.2", "Geometric Sequences",
    ["Find the common ratio $r$ for $2,8,32,\\dots$",
     "For $a=3,\\ r=2$, find $t_5$.",
     "Write the general term $t_n$ for $a=5,\\ r=2$."],
    ["Which term of $2,6,18,\\dots$ equals $486$?",
     "If $t_1=2$ and $t_4=54$, find the common ratio $r$."],
    ["Explain why a geometric sequence's terms grow (or shrink) exponentially rather than linearly, contrasting it with an arithmetic sequence.",
     "How can you tell quickly, just by looking at the first few terms, whether a sequence is arithmetic or geometric? Explain your method."],
    ["A population of bacteria triples every hour, starting at $100$. Write the general term $t_n$ for the population after $n$ hours, and find the population after $5$ hours.",
     "A ball is dropped from $10$ m and bounces back to $60\\%$ of its previous height each time. Write the general term for the height of the $n$th bounce, and find the height of the $4$th bounce.",
     "A rumour spreads so that each person who hears it tells $3$ new people every day, starting with $1$ person on day $0$. Write the general term for the number of NEW people hearing it on day $n$, and find that number on day $5$."]),
  "6.3": A4("6.3", "Arithmetic Series",
    ["Find $1+2+3+\\dots+60$ using the series formula.",
     "State the formula $S_n=\\dfrac n2(a+t_n)$ in words.",
     "Sum the first $10$ terms of $2,5,8,\\dots$"],
    ["An arithmetic series has $a=5$, $t_n=95$, and $n=10$. Find $S_{10}$, and also find the common difference $d$.",
     "Find the sum $2+4+6+\\dots+80$, and explain how you first determined the number of terms before applying the series formula."],
    ["Explain why pairing the first and last terms (Gauss's method) gives the arithmetic series formula $S_n=\\dfrac n2(a+t_n)$.",
     "Explain when you would use $S_n=\\dfrac n2(2a+(n-1)d)$ instead of $S_n=\\dfrac n2(a+t_n)$."],
    ["A theatre has $20$ seats in the first row, increasing by $2$ seats per row, for $15$ rows total. Find the theatre's total seating capacity.",
     "An employee's salary starts at $42000$ dollars and increases by $1500$ dollars each year. Find the total amount earned over the first $8$ years.",
     "A stack of $12$ log layers has $30$ logs on the bottom and $2$ fewer per layer going up. Find the total number of logs in the stack."]),
  "6.4": A4("6.4", "Geometric Series",
    ["State the geometric series formula $S_n=\\dfrac{a(r^n-1)}{r-1}$.",
     "Find $2+6+18+54$ by adding directly, then verify using the series formula.",
     "Sum the first $5$ terms of $1,2,4,\\dots$"],
    ["A salary starts at $2000$ dollars and doubles each year. Find the total earned over $5$ years using the geometric series formula.",
     "Explain why the geometric series formula cannot be used when $r=1$, and state what you would use instead in that case."],
    ["Explain the most common mistake students make with the geometric series formula (confusing $r^n$ with $r^{n-1}$), using an example.",
     "Explain how a geometric series connects to compound interest, using the idea of repeated multiplication."],
    ["A ball is dropped from $10$ m, bouncing back to $60\\%$ of its previous height each time. Find the total distance the ball has travelled (down and up) through the first $5$ bounces, using a geometric series for the bounce heights.",
     "A company's revenue grows by $8\\%$ each year, starting at $50000$ dollars in year 1. Find the total revenue earned over the first $6$ years, using the geometric series formula.",
     "A rumour spreads so that $1$ person tells $3$ new people on day $1$, and each of those tells $3$ more the next day, and so on. Find the total number of NEW tellers after $5$ days, using the geometric series formula."]),
  "6.5": A4("6.5", "Pascal's Triangle & the Binomial Theorem",
    ["Write row $4$ of Pascal's triangle.",
     "Expand $(a+b)^2$.",
     "Expand $(a+b)^3$."],
    ["Find the coefficient of $a^2b^2$ in the expansion of $(a+b)^4$, using the appropriate row of Pascal's triangle.",
     "Show that the sum of the entries in row $4$ of Pascal's triangle equals $2^4$, and explain why this pattern holds for every row $n$ (relate it to substituting $a=b=1$ into $(a+b)^n$)."],
    ["Explain how each entry of Pascal's triangle is formed from the two entries above it.",
     "Explain why row $n$ of Pascal's triangle gives the coefficients of the expansion of $(a+b)^n$."],
    ["A coin is flipped $4$ times. Using row $4$ of Pascal's triangle (from $(H+T)^4$), find the number of ways to get exactly $2$ heads and $2$ tails.",
     "A true/false quiz has $5$ questions. Use row $5$ of Pascal's triangle to determine how many ways a student can answer exactly $3$ questions correctly.",
     "A delivery driver must choose $2$ out of $6$ possible routes to alternate between. Using row $6$ of Pascal's triangle, determine how many different pairs of routes are possible."]),
  "7.1": A4("7.1", "Simple Interest",
    ["Find the interest on $1000$ dollars at $5\\%$ simple interest for $3$ years.",
     "Find the total amount for $1000$ dollars at $5\\%$ simple interest for $3$ years.",
     "State the simple-interest formula $I=Prt$ and explain what each symbol means."],
    ["An investment at $3\\%$ simple interest for $4$ years earns $120$ dollars in interest. Find the principal invested.",
     "A friend claims that doubling the time period always doubles the simple interest earned, no matter the rate or principal. Test this claim using $500$ dollars at $4\\%$ for $2$ years versus $4$ years, and determine if the claim is true."],
    ["Explain why simple interest grows linearly over time, connecting this to the arithmetic sequences studied earlier in the course.",
     "Explain, in your own words, what each of the four quantities in $I=Prt$ represents, and how you would rearrange the formula to solve for the rate $r$."],
    ["$800$ dollars at $6\\%$ simple interest earns $144$ dollars. Find the time period.",
     "$2500$ dollars earns $300$ dollars in simple interest over $3$ years. Find the interest rate.",
     "A student borrows $3000$ dollars for tuition at $4.5\\%$ simple interest, to be repaid in full after $2$ years. Find the total amount they must repay."]),
  "7.2": A4("7.2", "Compound Interest",
    ["Find the amount: $1000$ dollars at $5\\%$ compounded annually for $3$ years.",
     "State the compound-interest formula and define $i$ and $n$.",
     "For $6\\%$ compounded monthly, find the periodic rate $i$."],
    ["Find the interest earned on $1500$ dollars at $5\\%$ compounded annually for $4$ years, and compare it to the simple interest that would be earned at the same rate and time.",
     "$1000$ dollars at $6\\%$ compounded monthly for $2$ years — find the amount, and state how many compounding periods ($n$) and what periodic rate ($i$) you used."],
    ["Explain why compound interest grows exponentially rather than linearly, connecting this to the geometric sequences studied earlier in the course.",
     "Compare $1000$ dollars at $6\\%$ simple interest versus $6\\%$ compound interest over $10$ years, and explain why the difference grows larger the longer the money is invested."],
    ["$2000$ dollars at $4\\%$ compounded annually for $5$ years. Find the amount.",
     "A parent invests $5000$ dollars in an RESP at $5\\%$ compounded annually when their child is born. Find the value of the investment after $18$ years, to the nearest dollar.",
     "Two banks offer $1000$-dollar investments: Bank A pays $5\\%$ compounded annually, Bank B pays $4.9\\%$ compounded monthly. Find the amount from each after $3$ years and determine which is the better choice."]),
  "7.3": A4("7.3", "Present Value",
    ["State the present-value formula.",
     "Find the present value of $1000$ dollars received in $5$ years at $6\\%$ compounded annually.",
     "Define present value in your own words."],
    ["How much must you invest now to have $5000$ dollars in $4$ years at $5\\%$ compounded annually?",
     "Is $500$ dollars now or $600$ dollars in $3$ years worth more today, at a discount rate of $5\\%$? Show your work by finding the present value of the future amount and comparing."],
    ["Explain how present value relates to compound interest — describe it as compound interest \"in reverse.\"",
     "Explain why a higher interest rate results in a LOWER present value for the same future amount."],
    ["Find the present value of $1000$ dollars received in $10$ years at $7\\%$ compounded annually.",
     "A lottery winner can choose $50000$ dollars now or $60000$ dollars in $4$ years. If money can earn $6\\%$ compounded annually, find the present value of the delayed option and recommend which choice is better.",
     "A company needs $20000$ dollars in $6$ years to replace equipment. If they can invest at $4.5\\%$ compounded annually, how much should they invest today to reach that goal?"]),
  "7.4": A4("7.4", "Annuities",
    ["State the future-value-of-an-annuity formula.",
     "Define $R$ in the annuity formulas.",
     "What kind of series (arithmetic or geometric) models an annuity, and why?"],
    ["Find the future value of $500$ dollars/year for $4$ years at $5\\%$ compounded annually, and verify your answer by adding the four individually compounded payments separately.",
     "Find the present value of $300$ dollars/year for $4$ years at $5\\%$, and explain why this value is smaller than simply multiplying $300$ dollars by $4$."],
    ["Explain why an annuity is modeled using a geometric series, connecting each payment's compounding to a term in the series.",
     "Explain the difference between the future value and present value of an annuity, and when you would use each."],
    ["Find the future value of $1000$ dollars/year for $3$ years at $6\\%$ compounded annually.",
     "A person saves $2400$ dollars/year in an RRSP for $25$ years, earning $6\\%$ compounded annually. Find the future value of these savings at retirement.",
     "A car loan requires payments of $450$ dollars/month for $4$ years ($48$ months) at a monthly rate of $0.5\\%$. Find the present value of this annuity (the original loan amount)."]),
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

export { subjects, ASSIGN };
