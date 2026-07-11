// Seeds the full MPM2D (Grade 10 Academic) course: 7 units / 39 lessons.
// Non-destructive re-run: keeps the course + classes + enrollments, refreshes
// lesson content only. Uses the Grade 9 lesson THEME (lecture-box HTML).
// Lesson 1.1 is authored in full depth (the sample); the rest are scaffolds.
// Usage: node scripts/seed-mpm2d.mjs

import { createClient } from "@supabase/supabase-js";
import { teacherPassword } from "./_teacher-secret.mjs";
import { readFileSync } from "fs";
import { fileURLToPath, pathToFileURL } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const env = {};
for (const line of readFileSync(join(__dirname, "..", ".env.local"), "utf8").split("\n")) {
  const m = line.match(/^([A-Z0-9_]+)=(.*)$/);
  if (m) env[m[1]] = m[2].trim();
}
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });

const TEACHER_EMAIL = "teacher@integrationacademy.ca";
const COURSE_TITLE = "Principles of Mathematics (MPM2D)";
const DESC = "Ontario Grade 10 Academic Mathematics (MPM2D). In-depth interactive lessons across Linear Systems, Analytic Geometry, Quadratics, and Trigonometry.";

// ── block helpers ────────────────────────────────────────────
let _b = 0;
const bid = () => `b${Date.now().toString(36)}${(_b++).toString(36)}`;
export const html = (h) => ({ id: bid(), type: "html", html: h });
export const graph = (expr, param, o = {}) => ({
  id: bid(), type: "graph", expr, param,
  xMin: o.xMin ?? -10, xMax: o.xMax ?? 10, yMin: o.yMin ?? -10, yMax: o.yMax ?? 10,
  paramMin: o.paramMin ?? -5, paramMax: o.paramMax ?? 5, paramInit: o.paramInit ?? 1, caption: o.caption ?? "",
});
export const mg = (curves, o = {}) => ({
  id: bid(), type: "multigraph", curves,
  param: o.param ?? "", paramMin: o.paramMin ?? -5, paramMax: o.paramMax ?? 5, paramInit: o.paramInit ?? 0,
  xMin: o.xMin ?? -6, xMax: o.xMax ?? 6, yMin: o.yMin ?? -6, yMax: o.yMax ?? 6,
  markIntersection: o.markIntersection ?? true, caption: o.caption ?? "",
});
// An auto-playing animation: sweeps `param` from `from` to `to` and back, on a
// loop (with a Pause button). Great for showing a parameter's effect (μ, σ, slope,
// growth rate). Renders via <AnimatedGraph> (block type "animation").
export const anim = (expr, param, o = {}) => ({
  id: bid(), type: "animation", expr, param,
  from: o.from ?? 0, to: o.to ?? 1, durationMs: o.durationMs ?? 4200,
  xMin: o.xMin ?? -6, xMax: o.xMax ?? 6, yMin: o.yMin ?? -6, yMax: o.yMax ?? 6,
  caption: o.caption ?? "",
});
// An embedded interactive graph (iframe → the graphing page) for an example.
// Pass one or more full expressions, e.g. gframe(["y = 2*x - 3"]).
export const gframe = (items, o = {}) => {
  // items: a string ("y = …" cartesian), an object ({kind, expr} e.g. polar circle),
  // or [] for a point-only graph (labels with no curve).
  const fns = (Array.isArray(items) ? items : [items]).filter(Boolean).map((it) => (typeof it === "string" ? { kind: "cartesian", expr: it } : it));
  // o.title  → caption drawn on the graph (e.g. the equation or the concept)
  // o.labels → [{x, y, t, c?, point?}] marked points/text — only what the example needs
  const labels = (o.labels ?? []).map((L) => ({ id: bid(), text: L.t ?? "", x: L.x, y: L.y, color: L.c ?? "#0f172a", visible: true, showPoint: L.point !== false }));
  const fig = {
    fns, labels,
    settings: { title: o.title ?? "", showGrid: true, showAxes: true, showNums: true, stepX: "auto", stepY: "auto" },
    view: { zoomX: o.zoom ?? 26, zoomY: o.zoomY ?? o.zoom ?? 26, ox: o.ox ?? 0, oy: o.oy ?? 0 },
  };
  const data = encodeURIComponent(Buffer.from(encodeURIComponent(JSON.stringify(fig))).toString("base64"));
  return `<iframe src="/tools/graph?embed=1&data=${data}" loading="lazy" style="width:100%;height:340px;border:1px solid #cbd5e1;border-radius:8px;margin-top:10px;background:#fff;" title="Interactive graph"></iframe>`;
};

// A scaffold lesson in the Grade 9 theme — overview + goals, deep content later.
export const sk = (code, title, overview, learn) => ({
  code, title,
  blocks: [html(String.raw`<div class="lecture-box">
  <h1>${title}</h1>
  <p><strong>Overview.</strong> ${overview}</p>
  <h2>📌 What you'll learn</h2>
  <ul>${learn.map((x) => `<li>${x}</li>`).join("")}</ul>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><p><em>Full worked examples and practice for this lesson are being written.</em></p></div>
</div>`)],
});

// ── LESSON 1.1 — full depth sample (Grade 9 theme) ───────────
const L11 = {
  code: "1.1", title: "Review of Linear Relations",
  blocks: [
    html(String.raw`<div class="lecture-box">
  <h1>📈 Review of Linear Relations</h1>
  <p><strong>Overview.</strong> Grade 10 opens by solving <strong>systems</strong> of lines, so the straight line must be second nature. This lesson rebuilds that foundation: what slope really measures (with every special case), the three equation forms and how to convert between them, fast graphing, and how to write a line's equation from any given information.</p>

  <h2>📌 Slope — the Rate of Change</h2>
  <p>The <strong>slope</strong> \( m \) measures how much \( y \) changes for each unit change in \( x \). For any two points \( (x_1,y_1) \) and \( (x_2,y_2) \) on the line:</p>
  <p style="text-align:center;">\( m = \dfrac{\text{rise}}{\text{run}} = \dfrac{y_2-y_1}{x_2-x_1} \)</p>
  <p>The slope is <strong>constant</strong> everywhere on a straight line — that constant rate is what makes it straight. It doesn't matter which point you call "first", as long as you subtract the \(x\)'s and \(y\)'s <strong>in the same order</strong>. There are four cases:</p>
  <ul>
    <li><strong>Positive</strong> (\( m>0 \)): rises left → right.</li>
    <li><strong>Negative</strong> (\( m<0 \)): falls left → right.</li>
    <li><strong>Zero</strong> (\( m=0 \)): horizontal line \( y=b \).</li>
    <li><strong>Undefined</strong>: vertical line \( x=a \) — the run is \(0\), and division by \(0\) is undefined.</li>
  </ul>

  <h2>📌 Intercepts</h2>
  <p>An <strong>intercept</strong> is where the line crosses an axis. The <strong>y-intercept</strong> is where \( x=0 \); the <strong>x-intercept</strong> (the zero) is where \( y=0 \). Set the other variable to zero and solve. For \( 2x+3y=12 \): \( x=0\Rightarrow y=4 \), and \( y=0\Rightarrow x=6 \). Two points are enough to draw the line.</p>

  <h2>📌 The Three Forms of a Line</h2>
  <ol class="math">
    <li><strong>Slope–intercept:</strong> \( y=mx+b \) — best for graphing and reading \( m \) and \( b \).</li>
    <li><strong>Standard:</strong> \( Ax+By=C \) — best for intercepts and the elimination method.</li>
    <li><strong>Point–slope:</strong> \( y-y_1=m(x-x_1) \) — best for building an equation from a point and a slope.</li>
  </ol>
  <p>All three describe the <strong>same</strong> line — convert freely and pick whichever a question makes easiest.</p>

  <h2>📌 Graphing from \( y=mx+b \)</h2>
  <p><strong>1.</strong> Plot the y-intercept \( b \). <strong>2.</strong> Use the slope as \( \tfrac{\text{rise}}{\text{run}} \) to step to a second point. <strong>3.</strong> Draw the line. For \( y=2x-3 \): start at \( (0,-3) \), then up \(2\), right \(1\). Experiment with the live graphs below.</p>

  <h2>📌 Writing the Equation of a Line</h2>
  <p><strong>From a point and slope:</strong> use point–slope, then tidy. Slope \(-2\) through \( (3,1) \): \( y-1=-2(x-3)\Rightarrow y=-2x+7 \).</p>
  <p><strong>From two points:</strong> find the slope first. Through \( (1,2) \) and \( (4,11) \): \( m=3 \), then \( y=3x-1 \).</p>
  <p><strong>Parallel &amp; perpendicular:</strong> parallel lines have <strong>equal</strong> slopes; perpendicular slopes are <strong>negative reciprocals</strong> (\( m_1 m_2=-1 \)).</p>

  <h2>🔵 Examples</h2>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 1: Slope from two points</h3>
    <p>Find the slope of the line through \( (-2,5) \) and \( (2,-3) \).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Subtract in the same order: \( m=\dfrac{-3-5}{2-(-2)} \).</div>
      <div class="step"><strong>Step 2:</strong> Simplify: \( \dfrac{-8}{4}=-2 \).</div>
      <em>Conclusion: \( m=-2 \) — the line falls. Its equation is \( y=-2x+1 \). ✓</em>
    </div>
    ${gframe(["y = -2*x + 1"], { title: "Slope m = −2 (the line falls)", labels: [{ x: -2, y: 5, t: "(−2, 5)", c: "#2563a0" }, { x: 2, y: -3, t: "(2, −3)", c: "#2563a0" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 2: Standard → slope–intercept</h3>
    <p>Rewrite \( 3x+2y=8 \) in the form \( y=mx+b \) and graph it.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Isolate the \(y\)-term: \( 2y=-3x+8 \).</div>
      <div class="step"><strong>Step 2:</strong> Divide <em>every</em> term by 2: \( y=-\tfrac{3}{2}x+4 \).</div>
      <em>Conclusion: slope \( -\tfrac32 \), y-intercept \( 4 \). ✓</em>
    </div>
    ${gframe(["y = -1.5*x + 4"], { title: "y = −1.5x + 4", labels: [{ x: 0, y: 4, t: "y-int (0, 4)", c: "#3b7d3b" }, { x: 2.6667, y: 0, t: "x-int (8/3, 0)", c: "#a3327a" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 3: Equation from a point and slope</h3>
    <p>Find the line with slope \( \tfrac34 \) through \( (4,-1) \).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Point–slope: \( y+1=\tfrac34(x-4) \).</div>
      <div class="step"><strong>Step 2:</strong> Expand: \( y=\tfrac34x-3-1 \).</div>
      <em>Conclusion: \( y=\tfrac34x-4 \). ✓</em>
    </div>
    ${gframe(["y = 0.75*x - 4"], { title: "slope ¾ through (4, −1)", labels: [{ x: 4, y: -1, t: "(4, −1)", c: "#2563a0" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 4: Perpendicular line</h3>
    <p>Find the line through \( (6,2) \) perpendicular to \( y=3x-7 \). The graph shows both lines meeting at a right angle.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Perpendicular slope = negative reciprocal of \(3\) = \( -\tfrac13 \).</div>
      <div class="step"><strong>Step 2:</strong> Point–slope: \( y-2=-\tfrac13(x-6) \).</div>
      <em>Conclusion: \( y=-\tfrac13x+4 \). ✓</em>
    </div>
    ${gframe(["y = 3*x - 7", "y = -1/3*x + 4"], { title: "Perpendicular: 3 × (−⅓) = −1", labels: [{ x: 2.4, y: 0.2, t: "y = 3x − 7", c: "#2563a0", point: false }, { x: 5, y: 2.3, t: "y = −⅓x + 4", c: "#a3327a", point: false }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 5: Parallel line</h3>
    <p>Find the line parallel to \( y=2x+1 \) that passes through \( (0,-3) \). Parallel lines share the same slope.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Parallel ⇒ same slope \( m=2 \).</div>
      <div class="step"><strong>Step 2:</strong> The y-intercept is the given point's \(y\)-value: \( b=-3 \).</div>
      <em>Conclusion: \( y=2x-3 \) — same steepness, shifted down. ✓</em>
    </div>
    ${gframe(["y = 2*x + 1", "y = 2*x - 3"], { title: "Parallel: equal slope m = 2", labels: [{ x: 1.5, y: 4.5, t: "y = 2x + 1", c: "#2563a0", point: false }, { x: 2.6, y: 2.2, t: "y = 2x − 3", c: "#3b7d3b", point: false }] })}
  </div>

  <h2>🟡 Practice Questions</h2>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 1</h3><p>Find the slope through \( (0,1) \) and \( (2,7) \).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\( m=\dfrac{7-1}{2-0}=3 \). <em>Answer: \( 3 \).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 2</h3><p>State the slope and y-intercept of \( y=-5x+3 \).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: slope \( -5 \), y-intercept \( 3 \).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 3</h3><p>Rewrite \( 4x-y=6 \) in slope–intercept form.</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\( -y=-4x+6\Rightarrow y=4x-6 \). <em>Answer: \( y=4x-6 \).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 4</h3><p>Find the equation of the line through \( (1,4) \) and \( (3,10) \).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\( m=3 \), then \( y-4=3(x-1) \). <em>Answer: \( y=3x+1 \).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 5 — Challenge</h3><p>Find the line perpendicular to \( y=\tfrac14x-2 \) through \( (2,3) \).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">Perpendicular slope \( -4 \); \( y-3=-4(x-2) \). <em>Answer: \( y=-4x+11 \).</em></div></div></details>
  </div>

  <div class="mistake-box" style="background-color:#fdecea;border-left:5px solid #d9534f;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>⚠️ Common Mistakes</h3>
    <ul>
      <li>Writing slope as \( \tfrac{\text{run}}{\text{rise}} \) — it's <strong>rise over run</strong>.</li>
      <li>Subtracting the points in different orders on top and bottom.</li>
      <li>Forgetting to divide <em>every</em> term when isolating \(y\).</li>
      <li>Confusing parallel (equal slopes) with perpendicular (negative reciprocals).</li>
    </ul>
  </div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q1: Zero slope vs undefined slope?</h3><p><em>Horizontal lines have slope 0; vertical lines have an undefined slope (the run is 0, and you can't divide by 0).</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q2: Which form should I use?</h3><p><em>Slope–intercept to graph, standard for intercepts and elimination, point–slope to build an equation from a point and a slope.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q3: Parallel vs perpendicular slopes?</h3><p><em>Parallel: equal slopes. Perpendicular: negative reciprocals (their product is −1).</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q4: Does it matter which point I call "first" in the slope formula?</h3><p><em>No — as long as you subtract the \(y\)'s and the \(x\)'s in the <strong>same</strong> order. \(\frac{y_2-y_1}{x_2-x_1}\) and \(\frac{y_1-y_2}{x_1-x_2}\) give the same slope.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q5: How many points do I need to graph a line?</h3><p><em>Two. The y-intercept plus one slope step, or both intercepts, is enough.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q6: What does a bigger slope mean?</h3><p><em>A larger \(|m|\) means a steeper line. The sign tells direction (up or down), the size tells steepness.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q7: Can a line have no y-intercept?</h3><p><em>Yes — a vertical line \(x=a\) never crosses the y-axis, so it has no y-intercept (and an undefined slope).</em></p></div>
</div>`),
    graph("m*x", "m", { xMin: -6, xMax: 6, yMin: -6, yMax: 6, paramMin: -3, paramMax: 3, paramInit: 1, caption: "y = m·x — slide m: positive rises, negative falls, larger |m| is steeper." }),
    mg([{ expr: "2*x - 3", label: "y = 2x − 3" }], { xMin: -2, xMax: 6, yMin: -6, yMax: 6, markIntersection: false, caption: "y = 2x − 3 — start at (0, −3), then up 2 / right 1." }),
  ],
};

// ── all 39 lessons (1.1 full; rest scaffolds) ────────────────
export const subjects = [
  L11,
  { code: "1.2", title: "Solving Linear Systems by Graphing", blocks: [html(String.raw`<div class="lecture-box">
  <h1>📐 Solving Linear Systems by Graphing</h1>
  <p><strong>Overview.</strong> A <strong>linear system</strong> is two (or more) lines that share the same variables. Its <strong>solution</strong> is the ordered pair \((x,y)\) that satisfies <em>both</em> equations — graphically, the point where the lines cross. You'll graph both lines, read the intersection, check it, and recognize when a system has one, no, or infinitely many solutions.</p>

  <h2>📌 What a Solution Means</h2>
  <p>The solution lies on <strong>both</strong> lines at once, so it is their point of intersection. To solve by graphing: write each equation as \(y=mx+b\), graph both on one grid, and read where they meet. Always <strong>verify</strong> by substituting the point back into both equations.</p>

  <h2>📌 The Three Possibilities</h2>
  <ul>
    <li><strong>One solution</strong> — different slopes; the lines cross once.</li>
    <li><strong>No solution</strong> — equal slopes, different intercepts (parallel lines never meet).</li>
    <li><strong>Infinitely many</strong> — equal slopes <em>and</em> equal intercepts (the same line twice).</li>
  </ul>

  <h2>📌 Strengths &amp; Limits</h2>
  <p>Graphing is the most <em>visual</em> method and makes the three cases obvious. Its weakness: exact values are hard to read when the intersection isn't at nice integers — for those, use substitution or elimination (next lessons).</p>

  <h2>🔵 Examples</h2>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 1: A one-solution system</h3>
    <p>Solve \( \begin{cases} y=2x+1 \\ y=-x+4 \end{cases} \) by graphing.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Both are already in \(y=mx+b\) form — graph each.</div>
      <div class="step"><strong>Step 2:</strong> They cross at \((1,3)\).</div>
      <div class="step"><strong>Step 3 (check):</strong> \(3=2(1)+1\) ✓ and \(3=-(1)+4\) ✓.</div>
      <em>Conclusion: the solution is \((1,3)\). ✓</em>
    </div>
    ${gframe(["y = 2*x + 1", "y = -x + 4"], { title: "Solution: (1, 3)", labels: [{ x: 1, y: 3, t: "(1, 3)", c: "#a3327a" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 2: Reading an integer intersection</h3>
    <p>Solve \( \begin{cases} y=x-2 \\ y=-2x+4 \end{cases} \).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Set them equal to locate \(x\): \(x-2=-2x+4\Rightarrow 3x=6\Rightarrow x=2\).</div>
      <div class="step"><strong>Step 2:</strong> Then \(y=2-2=0\).</div>
      <em>Conclusion: the lines meet at \((2,0)\). ✓</em>
    </div>
    ${gframe(["y = x - 2", "y = -2*x + 4"], { title: "Solution: (2, 0)", labels: [{ x: 2, y: 0, t: "(2, 0)", c: "#a3327a" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 3: Convert from standard form first</h3>
    <p>Solve \( \begin{cases} x+y=5 \\ x-y=1 \end{cases} \) by graphing.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Rewrite each in \(y=mx+b\): \(y=5-x\) and \(y=x-1\).</div>
      <div class="step"><strong>Step 2:</strong> \(5-x=x-1\Rightarrow 6=2x\Rightarrow x=3\), so \(y=2\).</div>
      <em>Conclusion: the solution is \((3,2)\). ✓</em>
    </div>
    ${gframe(["y = 5 - x", "y = x - 1"], { title: "Solution: (3, 2)", labels: [{ x: 3, y: 2, t: "(3, 2)", c: "#a3327a" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 4: No solution (parallel)</h3>
    <p>Solve \( \begin{cases} y=2x+1 \\ y=2x-3 \end{cases} \).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Equal slopes (both \(2\)) but different intercepts.</div>
      <div class="step"><strong>Step 2:</strong> The lines are parallel and never cross.</div>
      <em>Conclusion: <strong>no solution</strong>. ✓</em>
    </div>
    ${gframe(["y = 2*x + 1", "y = 2*x - 3"], { title: "No solution — parallel (equal slopes)" })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 5: Infinitely many (same line)</h3>
    <p>Solve \( \begin{cases} y=x+1 \\ 2y=2x+2 \end{cases} \).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Simplify the second: \(2y=2x+2\Rightarrow y=x+1\).</div>
      <div class="step"><strong>Step 2:</strong> Both equations are the <em>same</em> line.</div>
      <em>Conclusion: <strong>infinitely many</strong> solutions. ✓</em>
    </div>
    ${gframe(["y = x + 1"], { title: "Infinitely many — both equations are this line" })}
  </div>

  <h2>🟡 Practice Questions</h2>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 1</h3><p>Solve by graphing: \( \begin{cases} y=x+2 \\ y=-x+4 \end{cases} \).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\(x+2=-x+4\Rightarrow x=1,\ y=3\). <em>Answer: \((1,3)\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 2</h3><p>Solve: \( \begin{cases} y=2x \\ y=x+3 \end{cases} \).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\(2x=x+3\Rightarrow x=3,\ y=6\). <em>Answer: \((3,6)\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 3</h3><p>Solve: \( \begin{cases} y=-x+5 \\ y=2x-1 \end{cases} \).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\(-x+5=2x-1\Rightarrow 6=3x\Rightarrow x=2,\ y=3\). <em>Answer: \((2,3)\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 4</h3><p>How many solutions does \( \begin{cases} y=3x+2 \\ y=3x-5 \end{cases} \) have?</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">Equal slopes, different intercepts → parallel. <em>Answer: none.</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 5 — Challenge</h3><p>How many solutions does \( \begin{cases} y=\tfrac12x+1 \\ 2y=x+2 \end{cases} \) have?</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\(2y=x+2\Rightarrow y=\tfrac12x+1\) — same line. <em>Answer: infinitely many.</em></div></div></details>
  </div>

  <div class="mistake-box" style="background-color:#fdecea;border-left:5px solid #d9534f;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>⚠️ Common Mistakes</h3>
    <ul>
      <li>Reading the intersection a unit off — always verify by substitution.</li>
      <li>Calling parallel lines "one solution" — equal slopes with different intercepts means <strong>none</strong>.</li>
      <li>Graphing a standard-form equation without first solving for \(y\).</li>
    </ul>
  </div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q1: What is the solution of a system?</h3><p><em>The point that lies on both lines — their intersection.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q2: How do I check a solution?</h3><p><em>Substitute the pair into <strong>both</strong> equations; both must be true.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q3: When is there no solution?</h3><p><em>Equal slopes but different y-intercepts (parallel lines).</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q4: When are there infinitely many?</h3><p><em>Same slope <strong>and</strong> same intercept — the two equations describe one line.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q5: Why can graphing be inaccurate?</h3><p><em>If the intersection isn't at whole numbers it's hard to read exactly — switch to substitution or elimination.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q6: Must both equations be in \(y=mx+b\)?</h3><p><em>Not required, but it's the easiest form to graph — convert from standard form first.</em></p></div>
</div>`)] },

  { code: "1.3", title: "Solving by Substitution", blocks: [html(String.raw`<div class="lecture-box">
  <h1>🔁 Solving by Substitution</h1>
  <p><strong>Overview.</strong> Substitution gives an <em>exact</em> answer with no graphing. The idea: isolate one variable in one equation, then substitute that expression into the <strong>other</strong> equation so only one variable is left. It's the best method when a variable is already alone or has a coefficient of \(1\).</p>

  <h2>📌 The Method, Step by Step</h2>
  <ol class="math">
    <li>Isolate one variable in one equation (pick the easiest).</li>
    <li>Substitute that expression into the <strong>other</strong> equation.</li>
    <li>Solve the resulting single-variable equation.</li>
    <li>Back-substitute to find the second variable.</li>
    <li>Check the pair in both original equations.</li>
  </ol>
  <p>The graphs below confirm each answer — substitution finds the exact intersection point the lines show.</p>

  <h2>📌 No Solution vs Infinitely Many</h2>
  <p>If the variables cancel and you're left with a <strong>false</strong> statement (like \(-1=4\)), there is <strong>no solution</strong> (parallel lines). If you're left with a <strong>true</strong> statement (like \(6=6\)), there are <strong>infinitely many</strong> (the same line).</p>

  <h2>🔵 Examples</h2>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 1: A variable already isolated</h3>
    <p>Solve \( \begin{cases} y=2x+1 \\ x+y=7 \end{cases} \).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(y\) is alone — substitute into the second: \(x+(2x+1)=7\).</div>
      <div class="step"><strong>Step 2:</strong> \(3x+1=7\Rightarrow 3x=6\Rightarrow x=2\).</div>
      <div class="step"><strong>Step 3:</strong> Back-substitute: \(y=2(2)+1=5\).</div>
      <em>Conclusion: \((2,5)\). ✓</em>
    </div>
    ${gframe(["y = 2*x + 1", "y = 7 - x"], { title: "Solution: (2, 5)", labels: [{ x: 2, y: 5, t: "(2, 5)", c: "#a3327a" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 2: Substitute, then expand carefully</h3>
    <p>Solve \( \begin{cases} y=x-3 \\ 2x+y=9 \end{cases} \).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Substitute \(y=x-3\): \(2x+(x-3)=9\).</div>
      <div class="step"><strong>Step 2:</strong> \(3x-3=9\Rightarrow 3x=12\Rightarrow x=4\).</div>
      <div class="step"><strong>Step 3:</strong> \(y=4-3=1\).</div>
      <em>Conclusion: \((4,1)\). ✓</em>
    </div>
    ${gframe(["y = x - 3", "y = 9 - 2*x"], { title: "Solution: (4, 1)", labels: [{ x: 4, y: 1, t: "(4, 1)", c: "#a3327a" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 3: Isolate first</h3>
    <p>Solve \( \begin{cases} x+2y=11 \\ 3x-y=5 \end{cases} \).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Isolate \(y\) in the second: \(y=3x-5\).</div>
      <div class="step"><strong>Step 2:</strong> Substitute into the first: \(x+2(3x-5)=11\Rightarrow 7x-10=11\Rightarrow x=3\).</div>
      <div class="step"><strong>Step 3:</strong> \(y=3(3)-5=4\).</div>
      <em>Conclusion: \((3,4)\). ✓</em>
    </div>
    ${gframe(["y = (11 - x)/2", "y = 3*x - 5"], { title: "Solution: (3, 4)", labels: [{ x: 3, y: 4, t: "(3, 4)", c: "#a3327a" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 4: Isolate x instead</h3>
    <p>Solve \( \begin{cases} x=2y-1 \\ 3x+y=11 \end{cases} \).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(x\) is isolated — substitute: \(3(2y-1)+y=11\).</div>
      <div class="step"><strong>Step 2:</strong> \(6y-3+y=11\Rightarrow 7y=14\Rightarrow y=2\).</div>
      <div class="step"><strong>Step 3:</strong> \(x=2(2)-1=3\).</div>
      <em>Conclusion: \((3,2)\). ✓</em>
    </div>
    ${gframe(["y = (x + 1)/2", "y = 11 - 3*x"], { title: "Solution: (3, 2)", labels: [{ x: 3, y: 2, t: "(3, 2)", c: "#a3327a" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 5: A contradiction → no solution</h3>
    <p>Solve \( \begin{cases} y=2x+1 \\ 2x-y=4 \end{cases} \).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Substitute \(y=2x+1\): \(2x-(2x+1)=4\).</div>
      <div class="step"><strong>Step 2:</strong> \(2x-2x-1=4\Rightarrow -1=4\) — false.</div>
      <em>Conclusion: the statement is impossible → <strong>no solution</strong> (parallel lines). ✓</em>
    </div>
    ${gframe(["y = 2*x + 1", "y = 2*x - 4"], { title: "−1 = 4 is false → no solution (parallel)" })}
  </div>

  <h2>🟡 Practice Questions</h2>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 1</h3><p>Solve: \( \begin{cases} y=x+4 \\ 2x+y=10 \end{cases} \).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\(2x+(x+4)=10\Rightarrow 3x=6\Rightarrow x=2,\ y=6\). <em>Answer: \((2,6)\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 2</h3><p>Solve: \( \begin{cases} y=3x \\ x+y=8 \end{cases} \).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\(x+3x=8\Rightarrow x=2,\ y=6\). <em>Answer: \((2,6)\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 3</h3><p>Solve: \( \begin{cases} x=y+2 \\ 2x+3y=14 \end{cases} \).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\(2(y+2)+3y=14\Rightarrow 5y=10\Rightarrow y=2,\ x=4\). <em>Answer: \((4,2)\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 4</h3><p>Solve: \( \begin{cases} y=-x+5 \\ 3x+2y=12 \end{cases} \).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\(3x+2(-x+5)=12\Rightarrow x+10=12\Rightarrow x=2,\ y=3\). <em>Answer: \((2,3)\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 5 — Challenge</h3><p>Solve: \( \begin{cases} y=2x-3 \\ 4x-2y=6 \end{cases} \).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\(4x-2(2x-3)=6\Rightarrow 6=6\) — identity. <em>Answer: infinitely many.</em></div></div></details>
  </div>

  <div class="mistake-box" style="background-color:#fdecea;border-left:5px solid #d9534f;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>⚠️ Common Mistakes</h3>
    <ul>
      <li>Substituting back into the <em>same</em> equation you isolated — always use the <strong>other</strong> one.</li>
      <li>Sign errors when distributing into brackets, e.g. \(-(2x+1)\).</li>
      <li>Solving for one variable and forgetting to find the second.</li>
    </ul>
  </div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q1: When is substitution the best method?</h3><p><em>When a variable is already isolated or has a coefficient of 1.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q2: What's the first step?</h3><p><em>Isolate one variable in one equation.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q3: After solving for one variable?</h3><p><em>Back-substitute it into either equation to find the other.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q4: What does \(6=6\) mean?</h3><p><em>An identity — infinitely many solutions (the same line).</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q5: What does \(-1=4\) mean?</h3><p><em>A contradiction — no solution (parallel lines).</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q6: Should I still check my answer?</h3><p><em>Yes — substitute the pair into both original equations.</em></p></div>
</div>`)] },
  { code: "1.4", title: "Solving by Elimination", blocks: [html(String.raw`<div class="lecture-box">
  <h1>➕ Solving by Elimination</h1>
  <p><strong>Overview.</strong> Elimination (also called the addition method) <em>adds or subtracts</em> the two equations so one variable cancels, leaving a single equation to solve. It's the most efficient method when both equations are in standard form \(Ax+By=C\) and nothing isolates cleanly.</p>

  <h2>📌 The Method, Step by Step</h2>
  <ol class="math">
    <li>Write both equations in standard form with like terms lined up.</li>
    <li>If needed, multiply one or both equations so a variable's coefficients become <strong>equal</strong> or <strong>opposite</strong>.</li>
    <li><strong>Add</strong> the equations if the coefficients are opposite; <strong>subtract</strong> if they're equal.</li>
    <li>Solve the remaining single-variable equation, then back-substitute.</li>
    <li>Check the pair in both originals.</li>
  </ol>

  <h2>📌 No Solution vs Infinitely Many</h2>
  <p>If <em>both</em> variables cancel: a <strong>false</strong> statement (e.g. \(0=6\)) means <strong>no solution</strong>; a <strong>true</strong> one (e.g. \(0=0\)) means <strong>infinitely many</strong>.</p>

  <h2>🔵 Examples</h2>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 1: Add to eliminate (opposite coefficients)</h3>
    <p>Solve \( \begin{cases} 2x+y=8 \\ x-y=1 \end{cases} \).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> The \(y\)-coefficients are \(+1\) and \(-1\) — opposites, so <strong>add</strong>: \((2x+x)+(y-y)=8+1\Rightarrow 3x=9\).</div>
      <div class="step"><strong>Step 2:</strong> \(x=3\); back-substitute into \(x-y=1\): \(3-y=1\Rightarrow y=2\).</div>
      <em>Conclusion: \((3,2)\). ✓</em>
    </div>
    ${gframe(["y = 8 - 2*x", "y = x - 1"], { title: "Solution: (3, 2)", labels: [{ x: 3, y: 2, t: "(3, 2)", c: "#a3327a" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 2: Subtract to eliminate (equal coefficients)</h3>
    <p>Solve \( \begin{cases} 3x+2y=16 \\ x+2y=8 \end{cases} \).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> The \(y\)-coefficients are equal — <strong>subtract</strong>: \((3x-x)+(2y-2y)=16-8\Rightarrow 2x=8\).</div>
      <div class="step"><strong>Step 2:</strong> \(x=4\); then \(4+2y=8\Rightarrow y=2\).</div>
      <em>Conclusion: \((4,2)\). ✓</em>
    </div>
    ${gframe(["y = (16 - 3*x)/2", "y = (8 - x)/2"], { title: "Solution: (4, 2)", labels: [{ x: 4, y: 2, t: "(4, 2)", c: "#a3327a" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 3: Scale one equation first</h3>
    <p>Solve \( \begin{cases} 2x+3y=12 \\ x+y=5 \end{cases} \).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Multiply the second by 2: \(2x+2y=10\).</div>
      <div class="step"><strong>Step 2:</strong> Subtract from the first: \((2x+3y)-(2x+2y)=12-10\Rightarrow y=2\).</div>
      <div class="step"><strong>Step 3:</strong> \(x+2=5\Rightarrow x=3\).</div>
      <em>Conclusion: \((3,2)\). ✓</em>
    </div>
    ${gframe(["y = (12 - 2*x)/3", "y = 5 - x"], { title: "Solution: (3, 2)", labels: [{ x: 3, y: 2, t: "(3, 2)", c: "#a3327a" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 4: Scale both equations</h3>
    <p>Solve \( \begin{cases} 3x+2y=7 \\ 2x+5y=12 \end{cases} \).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Eliminate \(x\): multiply the first by 2 and the second by 3 → \(6x+4y=14\) and \(6x+15y=36\).</div>
      <div class="step"><strong>Step 2:</strong> Subtract: \(-11y=-22\Rightarrow y=2\).</div>
      <div class="step"><strong>Step 3:</strong> \(3x+4=7\Rightarrow x=1\).</div>
      <em>Conclusion: \((1,2)\). ✓</em>
    </div>
    ${gframe(["y = (7 - 3*x)/2", "y = (12 - 2*x)/5"], { title: "Solution: (1, 2)", labels: [{ x: 1, y: 2, t: "(1, 2)", c: "#a3327a" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 5: Both variables cancel → no solution</h3>
    <p>Solve \( \begin{cases} x-y=2 \\ 2x-2y=10 \end{cases} \).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Multiply the first by 2: \(2x-2y=4\).</div>
      <div class="step"><strong>Step 2:</strong> Compare with \(2x-2y=10\): the left sides match but \(4\neq 10\).</div>
      <em>Conclusion: contradiction → <strong>no solution</strong> (parallel lines). ✓</em>
    </div>
    ${gframe(["y = x - 2", "y = x - 5"], { title: "No solution — parallel (equal slopes)" })}
  </div>

  <h2>🟡 Practice Questions</h2>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 1</h3><p>Solve: \( \begin{cases} x+y=6 \\ x-y=2 \end{cases} \).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">Add: \(2x=8\Rightarrow x=4,\ y=2\). <em>Answer: \((4,2)\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 2</h3><p>Solve: \( \begin{cases} 2x+y=7 \\ x+y=4 \end{cases} \).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">Subtract: \(x=3\), then \(y=1\). <em>Answer: \((3,1)\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 3</h3><p>Solve: \( \begin{cases} 3x+2y=13 \\ x+2y=7 \end{cases} \).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">Subtract: \(2x=6\Rightarrow x=3\), then \(y=2\). <em>Answer: \((3,2)\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 4</h3><p>Solve: \( \begin{cases} 2x+3y=12 \\ x-y=1 \end{cases} \).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">×3 the second → \(3x-3y=3\), add: \(5x=15\Rightarrow x=3,\ y=2\). <em>Answer: \((3,2)\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 5 — Challenge</h3><p>Solve: \( \begin{cases} 3x+4y=10 \\ 2x+5y=9 \end{cases} \).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">×2 and ×3 → \(6x+8y=20,\ 6x+15y=27\); subtract: \(-7y=-7\Rightarrow y=1,\ x=2\). <em>Answer: \((2,1)\).</em></div></div></details>
  </div>

  <div class="mistake-box" style="background-color:#fdecea;border-left:5px solid #d9534f;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>⚠️ Common Mistakes</h3>
    <ul>
      <li>Multiplying only <em>part</em> of an equation when scaling — multiply <strong>every</strong> term.</li>
      <li>Adding when you should subtract (or vice-versa) — watch the signs.</li>
      <li>Eliminating a variable but forgetting to back-substitute for the other.</li>
    </ul>
  </div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q1: When is elimination best?</h3><p><em>When both equations are in standard form and no variable is already isolated.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q2: Do I add or subtract?</h3><p><em>Add if the matching coefficients are opposite; subtract if they're equal.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q3: What if no coefficients match?</h3><p><em>Multiply one or both equations to create a matching pair, then eliminate.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q4: After eliminating one variable?</h3><p><em>Solve for the other, then back-substitute to finish.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q5: What do \(0=0\) and \(0=6\) mean?</h3><p><em>\(0=0\): infinitely many solutions. \(0=6\): no solution.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q6: Substitution or elimination?</h3><p><em>Substitution when a variable is isolated; elimination for tidy standard-form systems.</em></p></div>
</div>`)] },

  { code: "1.5", title: "Solving Problems with Linear Systems", blocks: [html(String.raw`<div class="lecture-box">
  <h1>🧩 Solving Problems with Linear Systems</h1>
  <p><strong>Overview.</strong> The real power of systems is modelling. The skill is translation: turn a word problem into two equations, solve with any method, then interpret the answer back in context. Each graph below shows the two conditions meeting at the answer.</p>

  <h2>📌 A Reliable Plan</h2>
  <ol class="math">
    <li><strong>Define</strong> two variables clearly, with units.</li>
    <li><strong>Write</strong> one equation per condition (usually two).</li>
    <li><strong>Solve</strong> with graphing, substitution, or elimination.</li>
    <li><strong>Interpret &amp; check</strong> — does the answer make sense in the situation?</li>
  </ol>

  <h2>🔵 Examples</h2>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 1: Sum and difference</h3>
    <p>Two numbers add to \(20\) and differ by \(4\). Find them.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Let the numbers be \(x\) and \(y\): \(x+y=20\), \(x-y=4\).</div>
      <div class="step"><strong>Step 2:</strong> Add: \(2x=24\Rightarrow x=12\), so \(y=8\).</div>
      <em>Conclusion: the numbers are \(12\) and \(8\). ✓</em>
    </div>
    ${gframe(["y = 20 - x", "y = x - 4"], { zoom: 7, title: "The numbers: 12 and 8", labels: [{ x: 12, y: 8, t: "(12, 8)", c: "#a3327a" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 2: Ticket sales</h3>
    <p>A show sells \(200\) tickets for \(\$1390\). Adult tickets are \(\$8\), child tickets \(\$5\). How many of each?</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Let \(x\)=adult, \(y\)=child: \(x+y=200\), \(8x+5y=1390\).</div>
      <div class="step"><strong>Step 2:</strong> Substitute \(y=200-x\): \(8x+5(200-x)=1390\Rightarrow 3x=390\Rightarrow x=130\).</div>
      <div class="step"><strong>Step 3:</strong> \(y=70\).</div>
      <em>Conclusion: \(130\) adult and \(70\) child tickets. ✓</em>
    </div>
    ${gframe(["y = 200 - x", "y = (1390 - 8*x)/5"], { zoom: 0.8, title: "130 adult, 70 child", labels: [{ x: 130, y: 70, t: "(130, 70)", c: "#a3327a" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 3: Mixture</h3>
    <p>How many litres of a \(10\%\) and a \(30\%\) acid solution make \(20\) L of \(25\%\)?</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Let \(x\)=litres of 10%, \(y\)=litres of 30%: \(x+y=20\), \(0.1x+0.3y=0.25(20)=5\).</div>
      <div class="step"><strong>Step 2:</strong> Substitute \(x=20-y\): \(0.1(20-y)+0.3y=5\Rightarrow 0.2y=3\Rightarrow y=15\).</div>
      <div class="step"><strong>Step 3:</strong> \(x=5\).</div>
      <em>Conclusion: \(5\) L of 10% and \(15\) L of 30%. ✓</em>
    </div>
    ${gframe(["y = 20 - x", "y = (5 - 0.1*x)/0.3"], { zoom: 7, title: "5 L of 10%, 15 L of 30%", labels: [{ x: 5, y: 15, t: "(5, 15)", c: "#a3327a" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 4: Rectangle dimensions</h3>
    <p>A rectangle has perimeter \(36\) and its length is \(4\) more than its width. Find the dimensions.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Let \(x\)=length, \(y\)=width: \(x+y=18\) (half the perimeter), \(x-y=4\).</div>
      <div class="step"><strong>Step 2:</strong> Add: \(2x=22\Rightarrow x=11\), so \(y=7\).</div>
      <em>Conclusion: length \(11\), width \(7\). ✓</em>
    </div>
    ${gframe(["y = 18 - x", "y = x - 4"], { zoom: 8, title: "Length 11, width 7", labels: [{ x: 11, y: 7, t: "(11, 7)", c: "#a3327a" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 5: Break-even point</h3>
    <p>A stall's cost is \(C=20+2n\) and its revenue is \(R=6n\) for \(n\) items. Where does it break even?</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Break-even is where cost = revenue: \(20+2n=6n\).</div>
      <div class="step"><strong>Step 2:</strong> \(20=4n\Rightarrow n=5\); then \(R=6(5)=\$30\).</div>
      <em>Conclusion: break-even at \(n=5\) items (\(\$30\)). ✓</em>
    </div>
    ${gframe(["y = 20 + 2*x", "y = 6*x"], { zoom: 5, title: "Break-even: n = 5, $30", labels: [{ x: 5, y: 30, t: "(5, 30)", c: "#a3327a" }] })}
  </div>

  <h2>🟡 Practice Questions</h2>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 1</h3><p>Two numbers sum to \(30\) and differ by \(6\). Find them.</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\(x+y=30,\ x-y=6\Rightarrow x=18,\ y=12\). <em>Answer: 18 and 12.</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 2</h3><p>\(100\) tickets sell for \(\$580\); adult \(\$7\), child \(\$4\). How many of each?</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\(x+y=100,\ 7x+4y=580\Rightarrow x=60,\ y=40\). <em>Answer: 60 adult, 40 child.</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 3</h3><p>A rectangle has perimeter \(40\); the length is \(6\) more than the width. Find the dimensions.</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\(x+y=20,\ x-y=6\Rightarrow\) length \(13\), width \(7\). <em>Answer: 13 by 7.</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 4</h3><p>How many litres of \(20\%\) and \(80\%\) acid make \(10\) L of \(50\%\)?</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\(x+y=10,\ 0.2x+0.8y=5\Rightarrow x=5,\ y=5\). <em>Answer: 5 L of each.</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 5 — Challenge</h3><p>Cost \(C=100+8n\), revenue \(R=12n\). Find the break-even number of items.</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\(100+8n=12n\Rightarrow 4n=100\Rightarrow n=25\) (\(\$300\)). <em>Answer: 25 items.</em></div></div></details>
  </div>

  <div class="mistake-box" style="background-color:#fdecea;border-left:5px solid #d9534f;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>⚠️ Common Mistakes</h3>
    <ul>
      <li>Not defining the variables (and units) before writing equations.</li>
      <li>Writing only one equation when the problem gives two conditions.</li>
      <li>Solving the algebra but forgetting to answer the actual question.</li>
    </ul>
  </div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q1: What's the first step in a word problem?</h3><p><em>Define two variables clearly, including units.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q2: How many equations do I need?</h3><p><em>One per condition — almost always two for two unknowns.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q3: Which method should I use?</h3><p><em>Any of them — substitution if a variable is isolated, elimination for standard form.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q4: What is "break-even"?</h3><p><em>The point where cost equals revenue — neither profit nor loss.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q5: How do I know my answer is reasonable?</h3><p><em>It must fit the context — no negative people, lengths, or litres.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q6: How do I check?</h3><p><em>Substitute the answer back into both real-world conditions.</em></p></div>
</div>`)] },

  { code: "1.6", title: "Number of Solutions", blocks: [html(String.raw`<div class="lecture-box">
  <h1>🔢 Number of Solutions</h1>
  <p><strong>Overview.</strong> Without solving fully, you can tell <em>how many</em> solutions a system has just by comparing slopes and intercepts. This lesson ties together the three cases and the vocabulary your tests use: <strong>consistent / inconsistent</strong> and <strong>dependent / independent</strong>.</p>

  <h2>📌 The Three Cases at a Glance</h2>
  <ul>
    <li><strong>One solution</strong> — different slopes (lines cross once). <em>Consistent &amp; independent.</em></li>
    <li><strong>No solution</strong> — same slope, different y-intercept (parallel). <em>Inconsistent.</em></li>
    <li><strong>Infinitely many</strong> — same slope <em>and</em> same intercept (one line). <em>Consistent &amp; dependent.</em></li>
  </ul>

  <h2>📌 Deciding Without Graphing</h2>
  <p>Put both in \(y=mx+b\) and compare. Or, in standard form, compare the ratios of coefficients: if \(\frac{A_1}{A_2}=\frac{B_1}{B_2}=\frac{C_1}{C_2}\) the lines are identical (infinite); if the first two ratios are equal but the last differs, they're parallel (none); otherwise they cross once.</p>

  <h2>🔵 Examples</h2>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 1: One solution</h3>
    <p>How many solutions does \( \begin{cases} y=2x+1 \\ y=-x+4 \end{cases} \) have?</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Slopes \(2\) and \(-1\) are different.</div>
      <em>Conclusion: exactly <strong>one</strong> solution (at \((1,3)\)). ✓</em>
    </div>
    ${gframe(["y = 2*x + 1", "y = -x + 4"], { title: "Different slopes → one solution", labels: [{ x: 1, y: 3, t: "(1, 3)", c: "#a3327a" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 2: No solution</h3>
    <p>How many solutions does \( \begin{cases} y=3x+2 \\ y=3x-1 \end{cases} \) have?</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Same slope \(3\), different intercepts \(2\) and \(-1\).</div>
      <em>Conclusion: parallel → <strong>no</strong> solution (inconsistent). ✓</em>
    </div>
    ${gframe(["y = 3*x + 2", "y = 3*x - 1"], { title: "Same slope, different intercept → none" })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 3: Infinitely many</h3>
    <p>How many solutions does \( \begin{cases} y=x-2 \\ 2x-2y=4 \end{cases} \) have?</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Rewrite the second: \(2x-2y=4\Rightarrow y=x-2\).</div>
      <em>Conclusion: same line → <strong>infinitely many</strong> (dependent). ✓</em>
    </div>
    ${gframe(["y = x - 2"], { title: "Both equations are this one line" })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 4: Decide from standard form</h3>
    <p>How many solutions does \( \begin{cases} 2x+y=5 \\ 4x+2y=7 \end{cases} \) have?</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Ratios: \(\frac{2}{4}=\frac{1}{2}\) and \(\frac{1}{2}=\frac{1}{2}\), but \(\frac{5}{7}\neq\frac{1}{2}\).</div>
      <em>Conclusion: coefficients proportional but constants not → <strong>no</strong> solution. ✓</em>
    </div>
    ${gframe(["y = 5 - 2*x", "y = (7 - 4*x)/2"], { title: "Parallel → no solution" })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 5: Name the type</h3>
    <p>Classify \( \begin{cases} x+y=4 \\ x-y=2 \end{cases} \) and state the number of solutions.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> As \(y=4-x\) and \(y=x-2\): slopes \(-1\) and \(1\) differ.</div>
      <em>Conclusion: one solution \((3,1)\) — <strong>consistent &amp; independent</strong>. ✓</em>
    </div>
    ${gframe(["y = 4 - x", "y = x - 2"], { title: "Consistent & independent — one solution", labels: [{ x: 3, y: 1, t: "(3, 1)", c: "#a3327a" }] })}
  </div>

  <h2>🟡 Practice Questions</h2>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 1</h3><p>How many solutions: \( \begin{cases} y=2x+3 \\ y=2x-5 \end{cases} \)?</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">Same slope, different intercept. <em>Answer: none (parallel).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 2</h3><p>How many solutions: \( \begin{cases} y=4x-1 \\ y=-x+9 \end{cases} \)?</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">Different slopes. <em>Answer: one (at \((2,7)\)).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 3</h3><p>How many solutions: \( \begin{cases} y=\tfrac12x+2 \\ 2y=x+4 \end{cases} \)?</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\(2y=x+4\Rightarrow y=\tfrac12x+2\) — same line. <em>Answer: infinitely many.</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 4</h3><p>How many solutions: \( \begin{cases} 3x+y=6 \\ 6x+2y=12 \end{cases} \)?</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">Second is exactly \(2\times\) the first. <em>Answer: infinitely many.</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 5 — Challenge</h3><p>How many solutions: \( \begin{cases} 3x+y=6 \\ 6x+2y=5 \end{cases} \)?</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">Coefficients proportional (\(\tfrac12\)) but \(\tfrac{6}{5}\neq\tfrac12\). <em>Answer: none (parallel).</em></div></div></details>
  </div>

  <div class="mistake-box" style="background-color:#fdecea;border-left:5px solid #d9534f;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>⚠️ Common Mistakes</h3>
    <ul>
      <li>Saying "no solution" when the slopes differ — different slopes always give <strong>one</strong>.</li>
      <li>Not simplifying — \(6x+2y=12\) is the same line as \(3x+y=6\).</li>
      <li>Confusing <em>inconsistent</em> (none) with <em>dependent</em> (infinitely many).</li>
    </ul>
  </div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q1: How do I find the number of solutions without graphing?</h3><p><em>Compare slopes and y-intercepts (or coefficient ratios in standard form).</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q2: One solution?</h3><p><em>Different slopes — the lines cross exactly once.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q3: No solution?</h3><p><em>Same slope but different y-intercepts (parallel lines).</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q4: Infinitely many?</h3><p><em>Same slope and same intercept — the equations are multiples of each other.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q5: Consistent vs inconsistent?</h3><p><em>Consistent has at least one solution; inconsistent has none.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q6: Dependent vs independent?</h3><p><em>Dependent = infinitely many (same line); independent = exactly one.</em></p></div>
</div>`)] },

  { code: "2.1", title: "Midpoint of a Line Segment", blocks: [html(String.raw`<div class="lecture-box">
  <h1>📍 Midpoint of a Line Segment</h1>
  <p><strong>Overview.</strong> The <strong>midpoint</strong> of a segment is the point exactly halfway between its endpoints — found by <em>averaging</em> the coordinates. It's the foundation for right bisectors, medians, and the centre of a circle.</p>

  <h2>📌 The Midpoint Formula</h2>
  <p style="text-align:center;">\( M=\left(\dfrac{x_1+x_2}{2},\ \dfrac{y_1+y_2}{2}\right) \)</p>
  <p>Average the \(x\)-coordinates for the midpoint's \(x\); average the \(y\)-coordinates for its \(y\). Order doesn't matter — averaging is symmetric.</p>

  <h2>📌 Finding a Missing Endpoint</h2>
  <p>If you know one endpoint and the midpoint, rearrange: \(x_2=2M_x-x_1\) and \(y_2=2M_y-y_1\). (The midpoint is "double, then undo" the known endpoint.)</p>

  <h2>🔵 Examples</h2>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 1: Basic midpoint</h3>
    <p>Find the midpoint of \(A(2,3)\) and \(B(8,7)\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Average \(x\): \(\dfrac{2+8}{2}=5\).</div>
      <div class="step"><strong>Step 2:</strong> Average \(y\): \(\dfrac{3+7}{2}=5\).</div>
      <em>Conclusion: \(M=(5,5)\). ✓</em>
    </div>
    ${gframe(["y = (2/3)*x + 5/3"], { zoom: 16, title: "Midpoint M = (5, 5)", labels: [{ x: 2, y: 3, t: "A(2, 3)", c: "#2563a0" }, { x: 8, y: 7, t: "B(8, 7)", c: "#2563a0" }, { x: 5, y: 5, t: "M(5, 5)", c: "#a3327a" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 2: With negatives</h3>
    <p>Find the midpoint of \(A(-4,1)\) and \(B(2,-5)\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(x\): \(\dfrac{-4+2}{2}=-1\).</div>
      <div class="step"><strong>Step 2:</strong> \(y\): \(\dfrac{1+(-5)}{2}=-2\).</div>
      <em>Conclusion: \(M=(-1,-2)\). ✓</em>
    </div>
    ${gframe(["y = -x - 3"], { zoom: 16, title: "Midpoint M = (−1, −2)", labels: [{ x: -4, y: 1, t: "A(−4, 1)", c: "#2563a0" }, { x: 2, y: -5, t: "B(2, −5)", c: "#2563a0" }, { x: -1, y: -2, t: "M(−1, −2)", c: "#a3327a" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 3: Find a missing endpoint</h3>
    <p>\(M(3,4)\) is the midpoint of \(A(1,2)\) and \(B\). Find \(B\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(x_2=2(3)-1=5\).</div>
      <div class="step"><strong>Step 2:</strong> \(y_2=2(4)-2=6\).</div>
      <em>Conclusion: \(B=(5,6)\). ✓</em>
    </div>
    ${gframe(["y = x + 1"], { zoom: 18, title: "Missing endpoint B = (5, 6)", labels: [{ x: 1, y: 2, t: "A(1, 2)", c: "#2563a0" }, { x: 3, y: 4, t: "M(3, 4)", c: "#a3327a" }, { x: 5, y: 6, t: "B(5, 6)", c: "#2563a0" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 4: A fractional midpoint</h3>
    <p>Find the midpoint of \(A(-3,5)\) and \(B(4,-2)\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(x\): \(\dfrac{-3+4}{2}=0.5\).</div>
      <div class="step"><strong>Step 2:</strong> \(y\): \(\dfrac{5+(-2)}{2}=1.5\).</div>
      <em>Conclusion: \(M=(0.5,1.5)\). ✓</em>
    </div>
    ${gframe(["y = -x + 2"], { zoom: 18, title: "Midpoint M = (0.5, 1.5)", labels: [{ x: -3, y: 5, t: "A(−3, 5)", c: "#2563a0" }, { x: 4, y: -2, t: "B(4, −2)", c: "#2563a0" }, { x: 0.5, y: 1.5, t: "M", c: "#a3327a" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 5: Centre of a circle</h3>
    <p>A circle's diameter has endpoints \(P(-2,1)\) and \(Q(6,7)\). Find its centre.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> The centre is the midpoint of the diameter.</div>
      <div class="step"><strong>Step 2:</strong> \(\left(\dfrac{-2+6}{2},\dfrac{1+7}{2}\right)=(2,4)\).</div>
      <em>Conclusion: centre \((2,4)\). ✓</em>
    </div>
    ${gframe(["y = 0.75*x + 2.5"], { zoom: 16, title: "Centre = (2, 4)", labels: [{ x: -2, y: 1, t: "P(−2, 1)", c: "#2563a0" }, { x: 6, y: 7, t: "Q(6, 7)", c: "#2563a0" }, { x: 2, y: 4, t: "Centre", c: "#a3327a" }] })}
  </div>

  <h2>🟡 Practice Questions</h2>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 1</h3><p>Midpoint of \((1,1)\) and \((7,5)\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\(\left(\tfrac{1+7}{2},\tfrac{1+5}{2}\right)\). <em>Answer: \((4,3)\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 2</h3><p>Midpoint of \((-2,4)\) and \((6,-2)\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \((2,1)\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 3</h3><p>Midpoint of \((0,-3)\) and \((0,9)\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">Vertical segment — average the \(y\)'s. <em>Answer: \((0,3)\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 4</h3><p>\(M(5,5)\) is the midpoint of \(A(2,3)\) and \(B\). Find \(B\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\(B=(2\cdot5-2,\ 2\cdot5-3)\). <em>Answer: \((8,7)\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 5 — Challenge</h3><p>One end of a segment is \((-1,2)\) and its midpoint is \((3,-1)\). Find the other end.</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\((2\cdot3-(-1),\ 2\cdot(-1)-2)\). <em>Answer: \((7,-4)\).</em></div></div></details>
  </div>

  <div class="mistake-box" style="background-color:#fdecea;border-left:5px solid #d9534f;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>⚠️ Common Mistakes</h3>
    <ul>
      <li>Subtracting the coordinates instead of <strong>averaging</strong> them.</li>
      <li>Mixing up the \(x\) and \(y\) averages.</li>
      <li>For a missing endpoint, forgetting to <em>double</em> the midpoint first.</li>
    </ul>
  </div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q1: What is the midpoint formula?</h3><p><em>The average of the endpoints: \(\left(\frac{x_1+x_2}{2},\frac{y_1+y_2}{2}\right)\).</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q2: How do I find a missing endpoint?</h3><p><em>Use \(x_2=2M_x-x_1\) and \(y_2=2M_y-y_1\).</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q3: Does the order of endpoints matter?</h3><p><em>No — averaging gives the same result either way.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q4: Midpoint of a vertical segment?</h3><p><em>The \(x\)-coordinate stays the same; just average the \(y\)'s.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q5: Where is the midpoint used?</h3><p><em>Centre of a circle (from a diameter), right bisectors, and medians.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q6: Is the midpoint exactly halfway?</h3><p><em>Yes — it splits the segment into two equal halves.</em></p></div>
</div>`)] },

  { code: "2.2", title: "Length of a Line Segment", blocks: [html(String.raw`<div class="lecture-box">
  <h1>📏 Length of a Line Segment</h1>
  <p><strong>Overview.</strong> The <strong>distance formula</strong> measures the exact length between two points. It is just the Pythagorean theorem applied to the horizontal and vertical gaps between the points.</p>

  <h2>📌 The Distance Formula</h2>
  <p style="text-align:center;">\( d=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2} \)</p>
  <p>The run \((x_2-x_1)\) and rise \((y_2-y_1)\) are the legs of a right triangle; the segment is the hypotenuse. Squaring removes any negative signs, so the order of points doesn't matter.</p>

  <h2>📌 Horizontal &amp; Vertical Segments</h2>
  <p>For a horizontal segment the length is just \(|x_2-x_1|\); for a vertical one it's \(|y_2-y_1|\). Leave non-perfect answers as exact radicals (e.g. \(\sqrt{13}\)) unless told to round.</p>

  <h2>🔵 Examples</h2>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 1: A 3-4-5 segment</h3>
    <p>Find the length from \((1,2)\) to \((4,6)\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Run \(=4-1=3\), rise \(=6-2=4\).</div>
      <div class="step"><strong>Step 2:</strong> \(d=\sqrt{3^2+4^2}=\sqrt{25}=5\).</div>
      <em>Conclusion: length \(5\). ✓</em>
    </div>
    ${gframe(["y = (4/3)*x + 2/3"], { zoom: 18, title: "Length = 5", labels: [{ x: 1, y: 2, t: "(1, 2)", c: "#2563a0" }, { x: 4, y: 6, t: "(4, 6)", c: "#2563a0" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 2: A 6-8-10 segment</h3>
    <p>Find the length from \((0,0)\) to \((6,8)\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Run \(=6\), rise \(=8\).</div>
      <div class="step"><strong>Step 2:</strong> \(d=\sqrt{36+64}=\sqrt{100}=10\).</div>
      <em>Conclusion: length \(10\). ✓</em>
    </div>
    ${gframe(["y = (4/3)*x"], { zoom: 13, title: "Length = 10", labels: [{ x: 0, y: 0, t: "(0, 0)", c: "#2563a0" }, { x: 6, y: 8, t: "(6, 8)", c: "#2563a0" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 3: A vertical segment</h3>
    <p>Find the length from \((2,3)\) to \((2,9)\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> The \(x\)'s match, so it's vertical.</div>
      <div class="step"><strong>Step 2:</strong> \(d=|9-3|=6\).</div>
      <em>Conclusion: length \(6\). ✓</em>
    </div>
    ${gframe([], { zoom: 18, title: "Vertical segment — length 6", labels: [{ x: 2, y: 3, t: "(2, 3)", c: "#2563a0" }, { x: 2, y: 9, t: "(2, 9)", c: "#2563a0" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 4: A radical answer</h3>
    <p>Find the length from \((-1,2)\) to \((2,4)\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Run \(=3\), rise \(=2\).</div>
      <div class="step"><strong>Step 2:</strong> \(d=\sqrt{9+4}=\sqrt{13}\approx3.61\).</div>
      <em>Conclusion: length \(\sqrt{13}\). ✓</em>
    </div>
    ${gframe(["y = (2/3)*x + 8/3"], { zoom: 22, title: "Length = √13 ≈ 3.61", labels: [{ x: -1, y: 2, t: "(−1, 2)", c: "#2563a0" }, { x: 2, y: 4, t: "(2, 4)", c: "#2563a0" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 5: Classify a triangle</h3>
    <p>Is the triangle \(A(0,0)\), \(B(4,0)\), \(C(2,4)\) isosceles?</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(AC=\sqrt{2^2+4^2}=\sqrt{20}\); \(BC=\sqrt{2^2+4^2}=\sqrt{20}\).</div>
      <div class="step"><strong>Step 2:</strong> Two sides are equal.</div>
      <em>Conclusion: yes — isosceles (\(AC=BC=\sqrt{20}\)). ✓</em>
    </div>
    ${gframe([], { zoom: 22, title: "AC = BC = √20 → isosceles", labels: [{ x: 0, y: 0, t: "A", c: "#2563a0" }, { x: 4, y: 0, t: "B", c: "#2563a0" }, { x: 2, y: 4, t: "C", c: "#a3327a" }] })}
  </div>

  <h2>🟡 Practice Questions</h2>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 1</h3><p>Length from \((0,0)\) to \((3,4)\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\(\sqrt{9+16}=\sqrt{25}\). <em>Answer: \(5\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 2</h3><p>Length from \((1,2)\) to \((7,10)\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\(\sqrt{36+64}=\sqrt{100}\). <em>Answer: \(10\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 3</h3><p>Length from \((-3,2)\) to \((1,2)\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">Horizontal: \(|1-(-3)|\). <em>Answer: \(4\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 4</h3><p>Length from \((2,-1)\) to \((5,3)\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\(\sqrt{3^2+4^2}\). <em>Answer: \(5\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 5 — Challenge</h3><p>The distance between \((1,k)\) and \((4,1)\) is \(5\). Find \(k\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\(9+(1-k)^2=25\Rightarrow(1-k)^2=16\Rightarrow 1-k=\pm4\). <em>Answer: \(k=5\) or \(k=-3\).</em></div></div></details>
  </div>

  <div class="mistake-box" style="background-color:#fdecea;border-left:5px solid #d9534f;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>⚠️ Common Mistakes</h3>
    <ul>
      <li>Squaring only one of the differences.</li>
      <li>Taking the square root of the <em>difference</em> instead of the <em>sum</em> of the squares.</li>
      <li>Reporting a negative length — distance is always \(\ge 0\).</li>
    </ul>
  </div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q1: Where does the distance formula come from?</h3><p><em>The Pythagorean theorem on the run and rise between the points.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q2: Does the order of points matter?</h3><p><em>No — the differences are squared, so signs disappear.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q3: Length of a horizontal or vertical segment?</h3><p><em>\(|x_2-x_1|\) horizontally, \(|y_2-y_1|\) vertically.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q4: Can a length be negative?</h3><p><em>No — it's a square root, always zero or positive.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q5: How should I leave the answer?</h3><p><em>As an exact radical (e.g. \(\sqrt{13}\)) unless asked to round.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q6: What's it used for?</h3><p><em>Classifying triangles (isosceles/equilateral) and finding a circle's radius.</em></p></div>
</div>`)] },

  { code: "2.3", title: "Equation of a Circle (centre at the origin)", blocks: [html(String.raw`<div class="lecture-box">
  <h1>⭕ Equation of a Circle (centre at the origin)</h1>
  <p><strong>Overview.</strong> A circle is the set of all points a fixed distance \(r\) (the radius) from a centre. When the centre is the <strong>origin</strong>, the distance formula gives the clean equation \(x^2+y^2=r^2\).</p>

  <h2>📌 Where the Equation Comes From</h2>
  <p>A point \((x,y)\) is on the circle when its distance from the origin equals \(r\): \(\sqrt{x^2+y^2}=r\). Squaring both sides gives \(x^2+y^2=r^2\).</p>

  <h2>📌 On, Inside, or Outside</h2>
  <p>For a circle \(x^2+y^2=r^2\), compute \(x^2+y^2\) for the point: equal to \(r^2\) → <strong>on</strong> the circle; less than \(r^2\) → <strong>inside</strong>; greater → <strong>outside</strong>. Remember the radius is \(r=\sqrt{r^2}\) — take the square root of the constant.</p>

  <h2>🔵 Examples</h2>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 1: Write the equation</h3>
    <p>Write the equation of the circle centred at the origin with radius \(5\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(r=5\), so \(r^2=25\).</div>
      <em>Conclusion: \(x^2+y^2=25\). ✓</em>
    </div>
    ${gframe([{ kind: "polar", expr: "5" }], { zoom: 22, title: "x² + y² = 25 (r = 5)" })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 2: Find the radius</h3>
    <p>Find the radius of \(x^2+y^2=49\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(r^2=49\).</div>
      <div class="step"><strong>Step 2:</strong> \(r=\sqrt{49}=7\).</div>
      <em>Conclusion: \(r=7\). ✓</em>
    </div>
    ${gframe([{ kind: "polar", expr: "7" }], { zoom: 16, title: "x² + y² = 49 → r = 7" })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 3: Is a point on the circle?</h3>
    <p>Is \((3,4)\) on \(x^2+y^2=25\)?</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(3^2+4^2=9+16=25\).</div>
      <div class="step"><strong>Step 2:</strong> This equals \(r^2=25\).</div>
      <em>Conclusion: yes — \((3,4)\) is on the circle. ✓</em>
    </div>
    ${gframe([{ kind: "polar", expr: "5" }], { zoom: 22, title: "(3,4): 9 + 16 = 25 → on the circle", labels: [{ x: 3, y: 4, t: "(3, 4)", c: "#a3327a" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 4: Inside or outside?</h3>
    <p>Is \((2,3)\) inside or outside \(x^2+y^2=16\)?</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(2^2+3^2=4+9=13\).</div>
      <div class="step"><strong>Step 2:</strong> \(13<16\).</div>
      <em>Conclusion: \((2,3)\) is <strong>inside</strong> the circle. ✓</em>
    </div>
    ${gframe([{ kind: "polar", expr: "4" }], { zoom: 26, title: "(2,3): 13 < 16 → inside", labels: [{ x: 2, y: 3, t: "(2, 3)", c: "#a3327a" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 5: Circle through a point</h3>
    <p>Find the equation of the circle centred at the origin that passes through \((6,8)\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(r=\sqrt{6^2+8^2}=\sqrt{100}=10\).</div>
      <div class="step"><strong>Step 2:</strong> \(r^2=100\).</div>
      <em>Conclusion: \(x^2+y^2=100\). ✓</em>
    </div>
    ${gframe([{ kind: "polar", expr: "10" }], { zoom: 13, title: "Through (6,8): x² + y² = 100", labels: [{ x: 6, y: 8, t: "(6, 8)", c: "#a3327a" }] })}
  </div>

  <h2>🟡 Practice Questions</h2>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 1</h3><p>Equation of the circle centred at the origin with radius \(3\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \(x^2+y^2=9\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 2</h3><p>Radius of \(x^2+y^2=64\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\(\sqrt{64}\). <em>Answer: \(8\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 3</h3><p>Is \((5,12)\) on \(x^2+y^2=169\)?</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\(25+144=169\). <em>Answer: yes, it's on the circle.</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 4</h3><p>Is \((3,3)\) inside or outside \(x^2+y^2=25\)?</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\(9+9=18<25\). <em>Answer: inside.</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 5 — Challenge</h3><p>A circle centred at the origin passes through \((-7,24)\). Find its equation and radius.</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\(r=\sqrt{49+576}=\sqrt{625}=25\). <em>Answer: \(x^2+y^2=625,\ r=25\).</em></div></div></details>
  </div>

  <div class="mistake-box" style="background-color:#fdecea;border-left:5px solid #d9534f;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>⚠️ Common Mistakes</h3>
    <ul>
      <li>Forgetting the radius is the <strong>square root</strong> of the constant (\(r^2=25\Rightarrow r=5\), not \(25\)).</li>
      <li>Writing \(x^2+y^2=r\) instead of \(x^2+y^2=r^2\).</li>
      <li>Reversing the inside/outside comparison.</li>
    </ul>
  </div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q1: Equation of a circle centred at the origin?</h3><p><em>\(x^2+y^2=r^2\).</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q2: How do I find the radius?</h3><p><em>Take the square root of the constant on the right.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q3: When is a point on the circle?</h3><p><em>When \(x^2+y^2=r^2\) exactly.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q4: Inside vs outside?</h3><p><em>\(x^2+y^2<r^2\) is inside; \(>r^2\) is outside.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q5: Why \(x^2+y^2\)?</h3><p><em>It's the squared distance from the origin; set it equal to \(r^2\).</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q6: Does the centre move in this lesson?</h3><p><em>No — here the centre is always the origin \((0,0)\).</em></p></div>
</div>`)] },
  { code: "2.4", title: "Medians, Right Bisectors & Altitudes", blocks: [html(String.raw`<div class="lecture-box">
  <h1>📐 Medians, Right Bisectors &amp; Altitudes</h1>
  <p><strong>Overview.</strong> Three special segments live inside (or around) a triangle. Coordinate geometry lets you write the <em>equation</em> of each by combining midpoints and perpendicular slopes.</p>

  <h2>📌 The Three Segments</h2>
  <ul>
    <li><strong>Median</strong> — from a vertex to the <em>midpoint</em> of the opposite side.</li>
    <li><strong>Right bisector</strong> (perpendicular bisector) — passes through a segment's <em>midpoint</em>, <em>perpendicular</em> to it.</li>
    <li><strong>Altitude</strong> — from a vertex, <em>perpendicular</em> to the opposite side.</li>
  </ul>

  <h2>📌 The Recipes</h2>
  <p><strong>Median:</strong> midpoint of the opposite side → line through it and the vertex. <strong>Right bisector:</strong> midpoint of the segment → use the <em>negative reciprocal</em> of the segment's slope. <strong>Altitude:</strong> negative reciprocal of the opposite side's slope → line through the vertex.</p>

  <h2>🔵 Examples</h2>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 1: Equation of a median</h3>
    <p>In \(\triangle ABC\) with \(A(0,0)\), \(B(6,0)\), \(C(2,6)\), find the median from \(C\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Midpoint of \(AB=(3,0)\).</div>
      <div class="step"><strong>Step 2:</strong> Slope from \(C(2,6)\) to \((3,0)\): \(\dfrac{0-6}{3-2}=-6\).</div>
      <div class="step"><strong>Step 3:</strong> \(y-0=-6(x-3)\Rightarrow y=-6x+18\).</div>
      <em>Conclusion: median \(y=-6x+18\). ✓</em>
    </div>
    ${gframe(["y = -6*x + 18"], { zoom: 9, title: "Median from C: y = −6x + 18", labels: [{ x: 2, y: 6, t: "C(2, 6)", c: "#2563a0" }, { x: 3, y: 0, t: "mid AB", c: "#a3327a" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 2: Equation of a right bisector</h3>
    <p>Find the right bisector of \(P(1,2)\) and \(Q(5,8)\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Midpoint \(=(3,5)\).</div>
      <div class="step"><strong>Step 2:</strong> Slope \(PQ=\dfrac{8-2}{5-1}=\dfrac32\); perpendicular slope \(=-\dfrac23\).</div>
      <div class="step"><strong>Step 3:</strong> \(y-5=-\tfrac23(x-3)\Rightarrow y=-\tfrac23x+7\).</div>
      <em>Conclusion: right bisector \(y=-\tfrac23x+7\). ✓</em>
    </div>
    ${gframe(["y = (3/2)*x + 1/2", "y = -2/3*x + 7"], { zoom: 16, title: "Right bisector: y = −⅔x + 7", labels: [{ x: 1, y: 2, t: "P", c: "#2563a0" }, { x: 5, y: 8, t: "Q", c: "#2563a0" }, { x: 3, y: 5, t: "M(3,5)", c: "#a3327a" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 3: Equation of an altitude</h3>
    <p>In \(\triangle ABC\) with \(A(0,0)\), \(B(6,2)\), \(C(1,5)\), find the altitude from \(C\) to \(AB\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Slope \(AB=\dfrac{2-0}{6-0}=\dfrac13\); perpendicular slope \(=-3\).</div>
      <div class="step"><strong>Step 2:</strong> Through \(C(1,5)\): \(y-5=-3(x-1)\Rightarrow y=-3x+8\).</div>
      <em>Conclusion: altitude \(y=-3x+8\). ✓</em>
    </div>
    ${gframe(["y = (1/3)*x", "y = -3*x + 8"], { zoom: 16, title: "Altitude from C: y = −3x + 8", labels: [{ x: 1, y: 5, t: "C(1, 5)", c: "#a3327a" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 4: Another median</h3>
    <p>In \(\triangle ABC\) with \(A(2,1)\), \(B(8,3)\), \(C(4,9)\), find the median from \(A\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Midpoint of \(BC=\left(\dfrac{8+4}{2},\dfrac{3+9}{2}\right)=(6,6)\).</div>
      <div class="step"><strong>Step 2:</strong> Slope from \(A(2,1)\) to \((6,6)\): \(\dfrac{6-1}{6-2}=\dfrac54\).</div>
      <div class="step"><strong>Step 3:</strong> \(y-1=\tfrac54(x-2)\Rightarrow y=\tfrac54x-\tfrac32\).</div>
      <em>Conclusion: median \(y=\tfrac54x-\tfrac32\). ✓</em>
    </div>
    ${gframe(["y = (5/4)*x - 3/2"], { zoom: 14, title: "Median from A: y = 5/4 x − 3/2", labels: [{ x: 2, y: 1, t: "A(2, 1)", c: "#2563a0" }, { x: 6, y: 6, t: "mid BC", c: "#a3327a" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 5: A vertical right bisector</h3>
    <p>Find the right bisector of \(A(-2,3)\) and \(B(4,3)\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Midpoint \(=(1,3)\).</div>
      <div class="step"><strong>Step 2:</strong> \(AB\) is horizontal (slope \(0\)), so its perpendicular is <em>vertical</em>.</div>
      <em>Conclusion: right bisector \(x=1\). ✓</em>
    </div>
    ${gframe([], { zoom: 18, title: "Right bisector: x = 1 (vertical)", labels: [{ x: -2, y: 3, t: "A", c: "#2563a0" }, { x: 4, y: 3, t: "B", c: "#2563a0" }, { x: 1, y: 3, t: "M(1, 3)", c: "#a3327a" }] })}
  </div>

  <h2>🟡 Practice Questions</h2>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 1</h3><p>Median from \(C(0,6)\) to the midpoint of \(A(-4,0)\), \(B(4,0)\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">Midpoint \((0,0)\); the median is vertical. <em>Answer: \(x=0\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 2</h3><p>Right bisector of \((0,0)\) and \((4,0)\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">Midpoint \((2,0)\), perpendicular to a horizontal segment. <em>Answer: \(x=2\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 3</h3><p>Right bisector of \((1,1)\) and \((1,7)\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">Midpoint \((1,4)\); vertical segment → horizontal bisector. <em>Answer: \(y=4\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 4</h3><p>Altitude from \(C(2,5)\) to a side of slope \(2\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">Perpendicular slope \(-\tfrac12\): \(y-5=-\tfrac12(x-2)\). <em>Answer: \(y=-\tfrac12x+6\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 5 — Challenge</h3><p>In \(\triangle ABC\) with \(A(0,0)\), \(B(4,0)\), \(C(0,6)\), find the median from \(B\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">Midpoint of \(AC=(0,3)\); slope \(=\tfrac{3-0}{0-4}=-\tfrac34\). <em>Answer: \(y=-\tfrac34x+3\).</em></div></div></details>
  </div>

  <div class="mistake-box" style="background-color:#fdecea;border-left:5px solid #d9534f;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>⚠️ Common Mistakes</h3>
    <ul>
      <li>Using the segment's own slope for a right bisector/altitude — use the <strong>negative reciprocal</strong>.</li>
      <li>Running a right bisector through a vertex (it goes through the <strong>midpoint</strong>).</li>
      <li>Forgetting that horizontal ⟂ vertical (\(y=\dots\) vs \(x=\dots\)).</li>
    </ul>
  </div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q1: What is a median?</h3><p><em>A segment from a vertex to the midpoint of the opposite side.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q2: What is a right bisector?</h3><p><em>A line through a segment's midpoint, perpendicular to the segment.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q3: What is an altitude?</h3><p><em>A segment from a vertex, perpendicular to the opposite side.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q4: How do I find a right bisector?</h3><p><em>Midpoint, then the negative reciprocal of the segment's slope, then point–slope.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q5: How do I find an altitude?</h3><p><em>Negative reciprocal of the opposite side's slope, through the vertex.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q6: What if a side is horizontal or vertical?</h3><p><em>Its perpendicular is vertical (\(x=\dots\)) or horizontal (\(y=\dots\)).</em></p></div>
</div>`)] },

  { code: "2.5", title: "Verifying Geometric Properties", blocks: [html(String.raw`<div class="lecture-box">
  <h1>✅ Verifying Geometric Properties</h1>
  <p><strong>Overview.</strong> On a grid you don't guess what a shape is — you <em>prove</em> it. Three tools do all the work: <strong>slope</strong> (parallel or perpendicular), <strong>length</strong> (equal sides), and <strong>midpoint</strong> (bisecting).</p>

  <h2>📌 What Each Tool Proves</h2>
  <ul>
    <li><strong>Equal slopes</strong> → segments are <em>parallel</em>.</li>
    <li><strong>Slopes multiply to \(-1\)</strong> → segments are <em>perpendicular</em> (right angle).</li>
    <li><strong>Equal lengths</strong> → equal sides (isosceles, equilateral, rhombus…).</li>
    <li><strong>Shared midpoint</strong> → segments <em>bisect</em> each other.</li>
  </ul>

  <h2>🔵 Examples</h2>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 1: Prove a right angle</h3>
    <p>Show \(\triangle ABC\) with \(A(0,0)\), \(B(2,4)\), \(C(6,2)\) has a right angle at \(B\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Slope \(AB=\dfrac{4-0}{2-0}=2\).</div>
      <div class="step"><strong>Step 2:</strong> Slope \(BC=\dfrac{2-4}{6-2}=-\dfrac12\).</div>
      <div class="step"><strong>Step 3:</strong> \(2\times(-\tfrac12)=-1\) → perpendicular.</div>
      <em>Conclusion: right angle at \(B\). ✓</em>
    </div>
    ${gframe([], { zoom: 22, title: "AB ⟂ BC → right angle at B", labels: [{ x: 0, y: 0, t: "A", c: "#2563a0" }, { x: 2, y: 4, t: "B", c: "#a3327a" }, { x: 6, y: 2, t: "C", c: "#2563a0" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 2: Prove isosceles</h3>
    <p>Show \(\triangle ABC\) with \(A(1,1)\), \(B(5,1)\), \(C(3,5)\) is isosceles.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(AC=\sqrt{2^2+4^2}=\sqrt{20}\).</div>
      <div class="step"><strong>Step 2:</strong> \(BC=\sqrt{2^2+4^2}=\sqrt{20}\).</div>
      <em>Conclusion: \(AC=BC\) → isosceles. ✓</em>
    </div>
    ${gframe([], { zoom: 22, title: "AC = BC = √20 → isosceles", labels: [{ x: 1, y: 1, t: "A", c: "#2563a0" }, { x: 5, y: 1, t: "B", c: "#2563a0" }, { x: 3, y: 5, t: "C", c: "#a3327a" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 3: Prove a parallelogram</h3>
    <p>Show \(ABCD\) with \(A(0,0)\), \(B(4,1)\), \(C(6,4)\), \(D(2,3)\) is a parallelogram.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Slope \(AB=\tfrac14\); slope \(DC=\dfrac{4-3}{6-2}=\tfrac14\) → \(AB\parallel DC\).</div>
      <div class="step"><strong>Step 2:</strong> Slope \(AD=\tfrac32\); slope \(BC=\dfrac{4-1}{6-4}=\tfrac32\) → \(AD\parallel BC\).</div>
      <em>Conclusion: both pairs of opposite sides parallel → parallelogram. ✓</em>
    </div>
    ${gframe([], { zoom: 22, title: "Opposite sides parallel → parallelogram", labels: [{ x: 0, y: 0, t: "A", c: "#2563a0" }, { x: 4, y: 1, t: "B", c: "#2563a0" }, { x: 6, y: 4, t: "C", c: "#2563a0" }, { x: 2, y: 3, t: "D", c: "#2563a0" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 4: Right triangle from slopes</h3>
    <p>Is \(\triangle ABC\) with \(A(1,2)\), \(B(4,2)\), \(C(4,6)\) right-angled?</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(AB\) is horizontal (slope \(0\)).</div>
      <div class="step"><strong>Step 2:</strong> \(BC\) is vertical (undefined slope).</div>
      <em>Conclusion: horizontal ⟂ vertical → right angle at \(B\). ✓</em>
    </div>
    ${gframe([], { zoom: 24, title: "Right triangle (AB ⟂ BC)", labels: [{ x: 1, y: 2, t: "A", c: "#2563a0" }, { x: 4, y: 2, t: "B", c: "#a3327a" }, { x: 4, y: 6, t: "C", c: "#2563a0" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 5: Diagonals bisect each other</h3>
    <p>For square \(A(0,0)\), \(B(4,0)\), \(C(4,4)\), \(D(0,4)\), show the diagonals bisect each other.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Midpoint of \(AC=(2,2)\).</div>
      <div class="step"><strong>Step 2:</strong> Midpoint of \(BD=(2,2)\).</div>
      <em>Conclusion: same midpoint → diagonals bisect each other. ✓</em>
    </div>
    ${gframe([], { zoom: 26, title: "Diagonals share midpoint (2, 2)", labels: [{ x: 0, y: 0, t: "A", c: "#2563a0" }, { x: 4, y: 0, t: "B", c: "#2563a0" }, { x: 4, y: 4, t: "C", c: "#2563a0" }, { x: 0, y: 4, t: "D", c: "#2563a0" }, { x: 2, y: 2, t: "centre", c: "#a3327a" }] })}
  </div>

  <h2>🟡 Practice Questions</h2>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 1</h3><p>Are segment \(AB\) [\(A(0,0),B(3,1)\)] and \(CD\) [\(C(0,2),D(3,3)\)] parallel?</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">Both slopes \(\tfrac13\). <em>Answer: yes, parallel.</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 2</h3><p>Is \(\triangle ABC\) with \(A(0,0),B(4,0),C(0,3)\) right-angled?</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\(AB\) horizontal, \(AC\) vertical. <em>Answer: yes, right angle at \(A\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 3</h3><p>Show \(A(2,2),B(6,2),C(6,6),D(2,6)\) is a square (equal sides, right angles).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">All sides \(=4\) and adjacent sides ⟂. <em>Answer: it's a square.</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 4</h3><p>Do \(A(0,0),B(2,4),C(4,8)\) form a triangle?</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">Slopes \(AB=BC=2\) — collinear. <em>Answer: no (the points are on one line).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 5 — Challenge</h3><p>Show \(A(-1,1),B(2,2),C(1,-1),D(-2,-2)\) is a parallelogram.</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">Slope \(AB=\tfrac13=\) slope \(DC\); slope \(AD=3=\) slope \(BC\). <em>Answer: opposite sides parallel → parallelogram.</em></div></div></details>
  </div>

  <div class="mistake-box" style="background-color:#fdecea;border-left:5px solid #d9534f;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>⚠️ Common Mistakes</h3>
    <ul>
      <li>Eyeballing the figure instead of computing slope/length.</li>
      <li>Checking only one pair of sides for a parallelogram (check both).</li>
      <li>Treating a vertical slope as \(0\) — it's <strong>undefined</strong> when testing perpendicularity.</li>
    </ul>
  </div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q1: How do I show segments are parallel?</h3><p><em>Equal slopes.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q2: Perpendicular?</h3><p><em>Slopes multiply to \(-1\).</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q3: Equal sides?</h3><p><em>Equal lengths from the distance formula.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q4: How do I prove a parallelogram?</h3><p><em>Both pairs of opposite sides are parallel (or equal in length).</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q5: How do I prove a right triangle?</h3><p><em>Two sides have slopes multiplying to \(-1\).</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q6: What shows diagonals bisect each other?</h3><p><em>Both diagonals share the same midpoint.</em></p></div>
</div>`)] },

  { code: "2.6", title: "Problems Involving Lines & Line Segments", blocks: [html(String.raw`<div class="lecture-box">
  <h1>🧭 Problems Involving Lines &amp; Line Segments</h1>
  <p><strong>Overview.</strong> Real analytic-geometry questions combine several tools in sequence. The skill is <em>planning</em>: break the problem into the pieces you know — slope, midpoint, length, equation of a line, and intersection of two lines.</p>

  <h2>📌 The Toolkit</h2>
  <ul>
    <li><strong>Slope</strong> \(\dfrac{y_2-y_1}{x_2-x_1}\) — direction, parallel/perpendicular.</li>
    <li><strong>Midpoint</strong> and <strong>length</strong> — bisecting and measuring.</li>
    <li><strong>Equation of a line</strong> — point–slope, then tidy.</li>
    <li><strong>Intersection</strong> — solve two lines as a system.</li>
  </ul>

  <h2>🔵 Examples</h2>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 1: Right bisector meets an axis</h3>
    <p>Find where the right bisector of \(A(2,1)\), \(B(8,5)\) crosses the \(x\)-axis.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Midpoint \((5,3)\); slope \(AB=\tfrac46=\tfrac23\); perpendicular \(-\tfrac32\).</div>
      <div class="step"><strong>Step 2:</strong> Bisector: \(y-3=-\tfrac32(x-5)\Rightarrow y=-\tfrac32x+\tfrac{21}{2}\).</div>
      <div class="step"><strong>Step 3:</strong> Set \(y=0\): \(\tfrac32x=\tfrac{21}{2}\Rightarrow x=7\).</div>
      <em>Conclusion: crosses at \((7,0)\). ✓</em>
    </div>
    ${gframe(["y = -3/2*x + 21/2"], { zoom: 14, title: "Bisector meets x-axis at (7, 0)", labels: [{ x: 5, y: 3, t: "M(5, 3)", c: "#a3327a" }, { x: 7, y: 0, t: "(7, 0)", c: "#3b7d3b" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 2: Perimeter from coordinates</h3>
    <p>Find the perimeter of \(\triangle ABC\): \(A(0,0)\), \(B(3,4)\), \(C(8,4)\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(AB=\sqrt{9+16}=5\).</div>
      <div class="step"><strong>Step 2:</strong> \(BC=|8-3|=5\); \(CA=\sqrt{64+16}=\sqrt{80}\approx8.94\).</div>
      <em>Conclusion: perimeter \(=5+5+\sqrt{80}\approx18.9\). ✓</em>
    </div>
    ${gframe([], { zoom: 14, title: "Perimeter ≈ 18.9", labels: [{ x: 0, y: 0, t: "A", c: "#2563a0" }, { x: 3, y: 4, t: "B", c: "#2563a0" }, { x: 8, y: 4, t: "C", c: "#2563a0" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 3: Median to the hypotenuse</h3>
    <p>Right triangle \(A(0,0)\), \(B(6,0)\), \(C(0,8)\). Show the median from \(A\) to hypotenuse \(BC\) is half of \(BC\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Midpoint of \(BC=(3,4)\).</div>
      <div class="step"><strong>Step 2:</strong> Median \(A(0,0)\) to \((3,4)\): length \(\sqrt{9+16}=5\).</div>
      <div class="step"><strong>Step 3:</strong> \(BC=\sqrt{36+64}=10\); half is \(5\).</div>
      <em>Conclusion: the median equals half the hypotenuse. ✓</em>
    </div>
    ${gframe(["y = (4/3)*x"], { zoom: 14, title: "Median = 5 = ½ · BC", labels: [{ x: 0, y: 0, t: "A", c: "#2563a0" }, { x: 3, y: 4, t: "mid BC", c: "#a3327a" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 4: Line parallel to a segment</h3>
    <p>Find the line through \((2,3)\) parallel to the segment joining \((-1,0)\) and \((3,8)\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Segment slope \(=\dfrac{8-0}{3-(-1)}=2\).</div>
      <div class="step"><strong>Step 2:</strong> Parallel → slope \(2\) through \((2,3)\): \(y-3=2(x-2)\).</div>
      <em>Conclusion: \(y=2x-1\). ✓</em>
    </div>
    ${gframe(["y = 2*x - 1"], { zoom: 18, title: "Parallel to the segment, through (2, 3)", labels: [{ x: 2, y: 3, t: "(2, 3)", c: "#a3327a" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 5: Centroid of a triangle</h3>
    <p>Find the centroid of \(A(0,0)\), \(B(6,0)\), \(C(3,9)\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Average the \(x\)'s: \(\dfrac{0+6+3}{3}=3\).</div>
      <div class="step"><strong>Step 2:</strong> Average the \(y\)'s: \(\dfrac{0+0+9}{3}=3\).</div>
      <em>Conclusion: centroid \((3,3)\). ✓</em>
    </div>
    ${gframe([], { zoom: 14, title: "Centroid = (3, 3)", labels: [{ x: 0, y: 0, t: "A", c: "#2563a0" }, { x: 6, y: 0, t: "B", c: "#2563a0" }, { x: 3, y: 9, t: "C", c: "#2563a0" }, { x: 3, y: 3, t: "centroid", c: "#a3327a" }] })}
  </div>

  <h2>🟡 Practice Questions</h2>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 1</h3><p>Right bisector of \((0,0)\) and \((6,0)\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">Midpoint \((3,0)\), horizontal segment. <em>Answer: \(x=3\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 2</h3><p>Perimeter of the triangle \((0,0)\), \((3,0)\), \((0,4)\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\(3+4+5\). <em>Answer: \(12\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 3</h3><p>Line through \((1,1)\) parallel to the segment \((0,0)\)–\((2,6)\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">Slope \(3\): \(y-1=3(x-1)\). <em>Answer: \(y=3x-2\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 4</h3><p>Centroid of \((0,0)\), \((3,0)\), \((0,6)\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">Average the vertices. <em>Answer: \((1,2)\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 5 — Challenge</h3><p>The right bisector of \(A(1,2)\), \(B(7,2)\) meets the line \(y=x\). Find the point.</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">Bisector is \(x=4\); on \(y=x\) that's \((4,4)\). <em>Answer: \((4,4)\).</em></div></div></details>
  </div>

  <div class="mistake-box" style="background-color:#fdecea;border-left:5px solid #d9534f;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>⚠️ Common Mistakes</h3>
    <ul>
      <li>Stopping after one step — re-read what the question actually asks for.</li>
      <li>Using a slope when you need its perpendicular (or vice-versa).</li>
      <li>Sign slips with negatives — keep the work organized line by line.</li>
    </ul>
  </div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q1: How do I find where a line meets an axis?</h3><p><em>Set the other variable to \(0\) and solve.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q2: Where do two lines meet?</h3><p><em>Solve them together as a system.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q3: Perimeter from coordinates?</h3><p><em>Add the side lengths using the distance formula.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q4: What is the centroid?</h3><p><em>The average of the three vertices — where the medians meet.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q5: A line parallel to a segment?</h3><p><em>Use the segment's slope.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q6: How do I plan a multi-step problem?</h3><p><em>Break it into the basic tools — slope, midpoint, length, equation, intersection.</em></p></div>
</div>`)] },

  { code: "3.1", title: "Expanding & Multiplying Polynomials", blocks: [html(String.raw`<div class="lecture-box">
  <h1>✖️ Expanding &amp; Multiplying Polynomials</h1>
  <p><strong>Overview.</strong> Factoring is the reverse of expanding, so master expanding first. You'll use the distributive property, FOIL for two binomials, and the special-product patterns. Each graph shows the product as a parabola — its \(x\)-intercepts are the values that make it zero.</p>

  <h2>📌 The Distributive Property</h2>
  <p>Multiply the term(s) outside by <em>every</em> term inside: \(a(b+c)=ab+ac\). For two binomials use <strong>FOIL</strong> — First, Outer, Inner, Last — then collect like terms.</p>

  <h2>📌 Special Products (memorize these)</h2>
  <ol class="math">
    <li>\((a+b)^2=a^2+2ab+b^2\)</li>
    <li>\((a-b)^2=a^2-2ab+b^2\)</li>
    <li>\((a+b)(a-b)=a^2-b^2\)</li>
  </ol>
  <p><strong>Warning:</strong> \((a+b)^2\neq a^2+b^2\) — the middle term \(2ab\) is real.</p>

  <h2>🔵 Examples</h2>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 1: Monomial × binomial</h3>
    <p>Expand \(3x(2x+5)\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Distribute: \(3x\cdot2x+3x\cdot5\).</div>
      <em>Conclusion: \(6x^2+15x\). ✓</em>
    </div>
    ${gframe(["y = 6*x^2 + 15*x"], { zoom: 10, title: "3x(2x+5) = 6x² + 15x", labels: [{ x: 0, y: 0, t: "0", c: "#a3327a" }, { x: -2.5, y: 0, t: "−2.5", c: "#a3327a" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 2: FOIL</h3>
    <p>Expand \((x+3)(x+5)\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> First \(x^2\), Outer \(5x\), Inner \(3x\), Last \(15\).</div>
      <div class="step"><strong>Step 2:</strong> Collect: \(x^2+8x+15\).</div>
      <em>Conclusion: \(x^2+8x+15\) (zeros at \(-3,-5\)). ✓</em>
    </div>
    ${gframe(["y = x^2 + 8*x + 15"], { zoom: 11, title: "(x+3)(x+5) = x² + 8x + 15", labels: [{ x: -3, y: 0, t: "−3", c: "#a3327a" }, { x: -5, y: 0, t: "−5", c: "#a3327a" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 3: Two binomials with a coefficient</h3>
    <p>Expand \((2x-1)(x+4)\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(2x^2+8x-x-4\).</div>
      <div class="step"><strong>Step 2:</strong> Collect: \(2x^2+7x-4\).</div>
      <em>Conclusion: \(2x^2+7x-4\). ✓</em>
    </div>
    ${gframe(["y = 2*x^2 + 7*x - 4"], { zoom: 9, title: "(2x−1)(x+4) = 2x² + 7x − 4", labels: [{ x: 0.5, y: 0, t: "0.5", c: "#a3327a" }, { x: -4, y: 0, t: "−4", c: "#a3327a" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 4: A perfect square</h3>
    <p>Expand \((x+3)^2\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Pattern \((a+b)^2=a^2+2ab+b^2\): \(x^2+2(x)(3)+9\).</div>
      <em>Conclusion: \(x^2+6x+9\) (the graph just touches the \(x\)-axis at \(-3\)). ✓</em>
    </div>
    ${gframe(["y = x^2 + 6*x + 9"], { zoom: 12, title: "(x+3)² = x² + 6x + 9", labels: [{ x: -3, y: 0, t: "−3 (double)", c: "#a3327a" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 5: Difference of squares</h3>
    <p>Expand \((x+4)(x-4)\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Pattern \((a+b)(a-b)=a^2-b^2\): \(x^2-16\).</div>
      <em>Conclusion: \(x^2-16\) (zeros at \(\pm4\)). ✓</em>
    </div>
    ${gframe(["y = x^2 - 16"], { zoom: 8, title: "(x+4)(x−4) = x² − 16", labels: [{ x: 4, y: 0, t: "4", c: "#a3327a" }, { x: -4, y: 0, t: "−4", c: "#a3327a" }] })}
  </div>

  <h2>🟡 Practice Questions</h2>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 1</h3><p>Expand \(2x(3x-4)\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \(6x^2-8x\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 2</h3><p>Expand \((x+2)(x+6)\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \(x^2+8x+12\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 3</h3><p>Expand \((x-5)(x+3)\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \(x^2-2x-15\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 4</h3><p>Expand \((3x+1)(x-2)\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \(3x^2-5x-2\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 5 — Challenge</h3><p>Expand \((2x-3)^2\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\((2x)^2-2(2x)(3)+9\). <em>Answer: \(4x^2-12x+9\).</em></div></div></details>
  </div>

  <div class="mistake-box" style="background-color:#fdecea;border-left:5px solid #d9534f;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>⚠️ Common Mistakes</h3>
    <ul>
      <li>\((a+b)^2=a^2+b^2\) — wrong; the middle term \(2ab\) is missing.</li>
      <li>Sign errors with negative terms in FOIL.</li>
      <li>Forgetting to collect like terms at the end.</li>
    </ul>
  </div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q1: What is the distributive property?</h3><p><em>Multiply the outside term by each term inside.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q2: What is FOIL?</h3><p><em>First, Outer, Inner, Last — the four products of two binomials.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q3: What is \((a+b)^2\)?</h3><p><em>\(a^2+2ab+b^2\) — not \(a^2+b^2\).</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q4: What is \((a+b)(a-b)\)?</h3><p><em>\(a^2-b^2\), the difference of squares.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q5: How do I check an expansion?</h3><p><em>Substitute a number into both the original and the expanded form.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q6: Why expand at all?</h3><p><em>To collect like terms before solving or graphing.</em></p></div>
</div>`)] },

  { code: "3.2", title: "Common Factoring & Factoring by Grouping", blocks: [html(String.raw`<div class="lecture-box">
  <h1>🧱 Common Factoring &amp; Factoring by Grouping</h1>
  <p><strong>Overview.</strong> Factoring rewrites a sum as a product. The very first move in <em>every</em> factoring problem is to pull out the <strong>greatest common factor (GCF)</strong>. For four-term expressions, <strong>grouping</strong> finishes the job.</p>

  <h2>📌 The Greatest Common Factor</h2>
  <p>The GCF is the largest factor shared by all terms — both the number and the variables (lowest power). Factor it out front, leaving the rest in brackets: \(6x^2+15x=3x(2x+5)\). Always check by expanding.</p>

  <h2>📌 Factoring by Grouping (four terms)</h2>
  <p>Group the terms in pairs, factor the GCF from each pair, and if the leftover brackets match, factor that bracket out: \(x^3+2x^2+3x+6=x^2(x+2)+3(x+2)=(x+2)(x^2+3)\).</p>

  <h2>🔵 Examples</h2>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 1: Common factor</h3>
    <p>Factor \(6x^2+15x\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> GCF of \(6x^2\) and \(15x\) is \(3x\).</div>
      <em>Conclusion: \(3x(2x+5)\). ✓</em>
    </div>
    ${gframe(["y = 6*x^2 + 15*x"], { zoom: 10, title: "6x² + 15x = 3x(2x+5)", labels: [{ x: 0, y: 0, t: "0", c: "#a3327a" }, { x: -2.5, y: 0, t: "−2.5", c: "#a3327a" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 2: GCF with variables</h3>
    <p>Factor \(8x^3-12x^2\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Number GCF \(=4\); variable GCF \(=x^2\).</div>
      <em>Conclusion: \(4x^2(2x-3)\). ✓</em>
    </div>
    ${gframe(["y = 8*x^3 - 12*x^2"], { zoom: 10, title: "8x³ − 12x² = 4x²(2x−3)", labels: [{ x: 0, y: 0, t: "0", c: "#a3327a" }, { x: 1.5, y: 0, t: "1.5", c: "#a3327a" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 3: GCF, then factor further</h3>
    <p>Factor \(2x^2+8x+6\) completely.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> GCF \(=2\): \(2(x^2+4x+3)\).</div>
      <div class="step"><strong>Step 2:</strong> Factor the trinomial: \(x^2+4x+3=(x+1)(x+3)\).</div>
      <em>Conclusion: \(2(x+1)(x+3)\) (zeros \(-1,-3\)). ✓</em>
    </div>
    ${gframe(["y = 2*x^2 + 8*x + 6"], { zoom: 12, title: "2(x+1)(x+3)", labels: [{ x: -1, y: 0, t: "−1", c: "#a3327a" }, { x: -3, y: 0, t: "−3", c: "#a3327a" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 4: Grouping (4 terms)</h3>
    <p>Factor \(x^3+2x^2+3x+6\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Group: \((x^3+2x^2)+(3x+6)\).</div>
      <div class="step"><strong>Step 2:</strong> Factor each: \(x^2(x+2)+3(x+2)\).</div>
      <div class="step"><strong>Step 3:</strong> Common bracket \((x+2)\): \((x+2)(x^2+3)\).</div>
      <em>Conclusion: \((x+2)(x^2+3)\) (only real zero at \(-2\)). ✓</em>
    </div>
    ${gframe(["y = x^3 + 2*x^2 + 3*x + 6"], { zoom: 8, title: "(x+2)(x²+3)", labels: [{ x: -2, y: 0, t: "−2", c: "#a3327a" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 5: Grouping a quadratic</h3>
    <p>Factor \(6x^2+13x+6\) by grouping.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Split the middle \(13x=9x+4x\): \(6x^2+9x+4x+6\).</div>
      <div class="step"><strong>Step 2:</strong> Group: \(3x(2x+3)+2(2x+3)\).</div>
      <em>Conclusion: \((2x+3)(3x+2)\) (zeros \(-\tfrac32,-\tfrac23\)). ✓</em>
    </div>
    ${gframe(["y = 6*x^2 + 13*x + 6"], { zoom: 12, title: "(2x+3)(3x+2)", labels: [{ x: -1.5, y: 0, t: "−1.5", c: "#a3327a" }, { x: -0.667, y: 0, t: "−⅔", c: "#a3327a" }] })}
  </div>

  <h2>🟡 Practice Questions</h2>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 1</h3><p>Factor \(10x^2+25x\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \(5x(2x+5)\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 2</h3><p>Factor \(9x^3-6x^2\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \(3x^2(3x-2)\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 3</h3><p>Factor completely: \(3x^2+12x+9\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\(3(x^2+4x+3)\). <em>Answer: \(3(x+1)(x+3)\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 4</h3><p>Factor by grouping: \(x^3+x^2+2x+2\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\(x^2(x+1)+2(x+1)\). <em>Answer: \((x+1)(x^2+2)\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 5 — Challenge</h3><p>Factor by grouping: \(6x^2+11x+4\) (split \(11x=8x+3x\)).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\(2x(3x+4)+1(3x+4)\). <em>Answer: \((3x+4)(2x+1)\).</em></div></div></details>
  </div>

  <div class="mistake-box" style="background-color:#fdecea;border-left:5px solid #d9534f;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>⚠️ Common Mistakes</h3>
    <ul>
      <li>Skipping the GCF — always pull it out first.</li>
      <li>Factoring only part of the expression.</li>
      <li>Sign slips when grouping (sometimes factor out a <em>negative</em> so the brackets match).</li>
    </ul>
  </div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q1: What is the GCF?</h3><p><em>The largest factor common to all terms — number and variables.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q2: What's the first step in any factoring?</h3><p><em>Always look for a common factor first.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q3: When do I use grouping?</h3><p><em>When there are four terms.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q4: What are the grouping steps?</h3><p><em>Pair the terms, factor each pair, then factor out the common bracket.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q5: How do I check?</h3><p><em>Expand your factors — you should get the original back.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q6: Can I factor more after the GCF?</h3><p><em>Often yes — the leftover bracket may factor again.</em></p></div>
</div>`)] },

  { code: "3.3", title: "Factoring Simple Trinomials (x² + bx + c)", blocks: [html(String.raw`<div class="lecture-box">
  <h1>🧩 Factoring Simple Trinomials (x² + bx + c)</h1>
  <p><strong>Overview.</strong> When the leading coefficient is \(1\), factoring \(x^2+bx+c\) comes down to one question: which two numbers <strong>multiply to \(c\)</strong> and <strong>add to \(b\)</strong>? Those numbers are the constants in the two brackets, and they're exactly the parabola's \(x\)-intercepts (with opposite sign).</p>

  <h2>📌 The Sum-and-Product Method</h2>
  <p>To factor \(x^2+bx+c=(x+m)(x+n)\), find \(m\) and \(n\) with \(m\cdot n=c\) and \(m+n=b\).</p>

  <h2>📌 Sign Rules</h2>
  <ul>
    <li>\(c>0\): both numbers share \(b\)'s sign (both \(+\) or both \(-\)).</li>
    <li>\(c<0\): the numbers have <em>opposite</em> signs; the larger takes \(b\)'s sign.</li>
  </ul>

  <h2>🔵 Examples</h2>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 1: Both positive</h3>
    <p>Factor \(x^2+7x+12\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Need product \(12\), sum \(7\): that's \(3\) and \(4\).</div>
      <em>Conclusion: \((x+3)(x+4)\) (zeros \(-3,-4\)). ✓</em>
    </div>
    ${gframe(["y = x^2 + 7*x + 12"], { zoom: 12, title: "(x+3)(x+4)", labels: [{ x: -3, y: 0, t: "−3", c: "#a3327a" }, { x: -4, y: 0, t: "−4", c: "#a3327a" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 2: Both negative</h3>
    <p>Factor \(x^2-5x+6\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Product \(6\), sum \(-5\): that's \(-2\) and \(-3\).</div>
      <em>Conclusion: \((x-2)(x-3)\) (zeros \(2,3\)). ✓</em>
    </div>
    ${gframe(["y = x^2 - 5*x + 6"], { zoom: 14, title: "(x−2)(x−3)", labels: [{ x: 2, y: 0, t: "2", c: "#a3327a" }, { x: 3, y: 0, t: "3", c: "#a3327a" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 3: Opposite signs</h3>
    <p>Factor \(x^2+2x-15\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Product \(-15\), sum \(2\): that's \(+5\) and \(-3\).</div>
      <em>Conclusion: \((x+5)(x-3)\) (zeros \(-5,3\)). ✓</em>
    </div>
    ${gframe(["y = x^2 + 2*x - 15"], { zoom: 9, title: "(x+5)(x−3)", labels: [{ x: -5, y: 0, t: "−5", c: "#a3327a" }, { x: 3, y: 0, t: "3", c: "#a3327a" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 4: Opposite signs again</h3>
    <p>Factor \(x^2-x-12\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Product \(-12\), sum \(-1\): that's \(-4\) and \(+3\).</div>
      <em>Conclusion: \((x-4)(x+3)\) (zeros \(4,-3\)). ✓</em>
    </div>
    ${gframe(["y = x^2 - x - 12"], { zoom: 9, title: "(x−4)(x+3)", labels: [{ x: 4, y: 0, t: "4", c: "#a3327a" }, { x: -3, y: 0, t: "−3", c: "#a3327a" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 5: Larger numbers</h3>
    <p>Factor \(x^2-9x+20\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Product \(20\), sum \(-9\): that's \(-4\) and \(-5\).</div>
      <em>Conclusion: \((x-4)(x-5)\) (zeros \(4,5\)). ✓</em>
    </div>
    ${gframe(["y = x^2 - 9*x + 20"], { zoom: 11, title: "(x−4)(x−5)", labels: [{ x: 4, y: 0, t: "4", c: "#a3327a" }, { x: 5, y: 0, t: "5", c: "#a3327a" }] })}
  </div>

  <h2>🟡 Practice Questions</h2>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 1</h3><p>Factor \(x^2+5x+6\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\(2\cdot3=6,\ 2+3=5\). <em>Answer: \((x+2)(x+3)\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 2</h3><p>Factor \(x^2+x-6\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\(+3,-2\). <em>Answer: \((x+3)(x-2)\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 3</h3><p>Factor \(x^2-7x+12\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\(-3,-4\). <em>Answer: \((x-3)(x-4)\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 4</h3><p>Factor \(x^2-2x-8\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\(-4,+2\). <em>Answer: \((x-4)(x+2)\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 5 — Challenge</h3><p>Factor \(x^2-13x+36\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\(-4,-9\). <em>Answer: \((x-4)(x-9)\).</em></div></div></details>
  </div>

  <div class="mistake-box" style="background-color:#fdecea;border-left:5px solid #d9534f;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>⚠️ Common Mistakes</h3>
    <ul>
      <li>Mixing up the sum and the product.</li>
      <li>Sign errors when \(c<0\) (the numbers have opposite signs).</li>
      <li>Forgetting to factor out a GCF first.</li>
    </ul>
  </div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q1: What's the method for \(x^2+bx+c\)?</h3><p><em>Two numbers that multiply to \(c\) and add to \(b\).</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q2: \(c>0\) — what signs?</h3><p><em>Both numbers share \(b\)'s sign.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q3: \(c<0\) — what signs?</h3><p><em>Opposite signs; the larger number takes \(b\)'s sign.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q4: How do I check?</h3><p><em>Expand, or re-check the sum and product.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q5: What if no integer pair works?</h3><p><em>It may not factor over integers — you'll use the quadratic formula later.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q6: GCF first?</h3><p><em>Always — pull out any common factor before this step.</em></p></div>
</div>`)] },
  { code: "3.4", title: "Factoring Complex Trinomials (ax² + bx + c)", blocks: [html(String.raw`<div class="lecture-box">
  <h1>🧮 Factoring Complex Trinomials (ax² + bx + c)</h1>
  <p><strong>Overview.</strong> When the leading coefficient \(a\neq1\), use <strong>decomposition</strong> (the AC method): find two numbers that multiply to \(a\cdot c\) and add to \(b\), split the middle term into those two pieces, then factor by grouping.</p>

  <h2>📌 The AC Method, Step by Step</h2>
  <ol class="math">
    <li>Factor out any GCF first.</li>
    <li>Compute \(a\cdot c\).</li>
    <li>Find two numbers with product \(a\cdot c\) and sum \(b\).</li>
    <li>Split the middle term \(bx\) into those two terms.</li>
    <li>Factor by grouping; verify by expanding.</li>
  </ol>

  <h2>🔵 Examples</h2>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 1: \(a\cdot c\) positive</h3>
    <p>Factor \(2x^2+7x+3\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(a\cdot c=2\cdot3=6\); need product \(6\), sum \(7\) → \(6\) and \(1\).</div>
      <div class="step"><strong>Step 2:</strong> Split: \(2x^2+6x+x+3\).</div>
      <div class="step"><strong>Step 3:</strong> Group: \(2x(x+3)+1(x+3)=(x+3)(2x+1)\).</div>
      <em>Conclusion: \((x+3)(2x+1)\) (zeros \(-3,-\tfrac12\)). ✓</em>
    </div>
    ${gframe(["y = 2*x^2 + 7*x + 3"], { zoom: 13, title: "(x+3)(2x+1)", labels: [{ x: -3, y: 0, t: "−3", c: "#a3327a" }, { x: -0.5, y: 0, t: "−0.5", c: "#a3327a" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 2: Another positive case</h3>
    <p>Factor \(3x^2+10x+8\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(a\cdot c=24\); product \(24\), sum \(10\) → \(6\) and \(4\).</div>
      <div class="step"><strong>Step 2:</strong> \(3x^2+6x+4x+8\).</div>
      <div class="step"><strong>Step 3:</strong> \(3x(x+2)+4(x+2)=(x+2)(3x+4)\).</div>
      <em>Conclusion: \((x+2)(3x+4)\) (zeros \(-2,-\tfrac43\)). ✓</em>
    </div>
    ${gframe(["y = 3*x^2 + 10*x + 8"], { zoom: 16, title: "(x+2)(3x+4)", labels: [{ x: -2, y: 0, t: "−2", c: "#a3327a" }, { x: -1.333, y: 0, t: "−4/3", c: "#a3327a" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 3: \(a\cdot c\) negative</h3>
    <p>Factor \(6x^2-x-2\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(a\cdot c=-12\); product \(-12\), sum \(-1\) → \(-4\) and \(3\).</div>
      <div class="step"><strong>Step 2:</strong> \(6x^2-4x+3x-2\).</div>
      <div class="step"><strong>Step 3:</strong> \(2x(3x-2)+1(3x-2)=(3x-2)(2x+1)\).</div>
      <em>Conclusion: \((3x-2)(2x+1)\) (zeros \(\tfrac23,-\tfrac12\)). ✓</em>
    </div>
    ${gframe(["y = 6*x^2 - x - 2"], { zoom: 18, title: "(3x−2)(2x+1)", labels: [{ x: 0.667, y: 0, t: "⅔", c: "#a3327a" }, { x: -0.5, y: 0, t: "−0.5", c: "#a3327a" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 4: It's a perfect square</h3>
    <p>Factor \(4x^2-12x+9\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(a\cdot c=36\); product \(36\), sum \(-12\) → \(-6\) and \(-6\).</div>
      <div class="step"><strong>Step 2:</strong> \(4x^2-6x-6x+9=2x(2x-3)-3(2x-3)=(2x-3)(2x-3)\).</div>
      <em>Conclusion: \((2x-3)^2\) (double zero \(\tfrac32\)). ✓</em>
    </div>
    ${gframe(["y = 4*x^2 - 12*x + 9"], { zoom: 12, title: "(2x−3)²", labels: [{ x: 1.5, y: 0, t: "1.5 (double)", c: "#a3327a" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 5: Negative constant</h3>
    <p>Factor \(2x^2-5x-3\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(a\cdot c=-6\); product \(-6\), sum \(-5\) → \(-6\) and \(1\).</div>
      <div class="step"><strong>Step 2:</strong> \(2x^2-6x+x-3=2x(x-3)+1(x-3)\).</div>
      <em>Conclusion: \((x-3)(2x+1)\) (zeros \(3,-\tfrac12\)). ✓</em>
    </div>
    ${gframe(["y = 2*x^2 - 5*x - 3"], { zoom: 9, title: "(x−3)(2x+1)", labels: [{ x: 3, y: 0, t: "3", c: "#a3327a" }, { x: -0.5, y: 0, t: "−0.5", c: "#a3327a" }] })}
  </div>

  <h2>🟡 Practice Questions</h2>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 1</h3><p>Factor \(2x^2+5x+2\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\(ac=4\); \(4,1\). <em>Answer: \((2x+1)(x+2)\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 2</h3><p>Factor \(3x^2+7x+2\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\(ac=6\); \(6,1\). <em>Answer: \((3x+1)(x+2)\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 3</h3><p>Factor \(2x^2+x-6\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\(ac=-12\); \(4,-3\). <em>Answer: \((2x-3)(x+2)\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 4</h3><p>Factor \(6x^2+11x+3\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\(ac=18\); \(9,2\). <em>Answer: \((3x+1)(2x+3)\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 5 — Challenge</h3><p>Factor \(4x^2-4x-3\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\(ac=-12\); \(-6,2\). <em>Answer: \((2x-3)(2x+1)\).</em></div></div></details>
  </div>

  <div class="mistake-box" style="background-color:#fdecea;border-left:5px solid #d9534f;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>⚠️ Common Mistakes</h3>
    <ul>
      <li>Using product \(c\) instead of \(a\cdot c\).</li>
      <li>Sign errors when grouping.</li>
      <li>Forgetting the GCF before decomposing.</li>
    </ul>
  </div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q1: What is the AC method?</h3><p><em>Find two numbers with product \(a\cdot c\) and sum \(b\), split the middle term, then group.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q2: GCF first?</h3><p><em>Always — it makes the numbers smaller.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q3: Which two numbers do I need?</h3><p><em>Product \(=a\cdot c\), sum \(=b\).</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q4: Why split the middle term?</h3><p><em>It creates four terms you can factor by grouping.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q5: \(a\cdot c\) negative?</h3><p><em>The two numbers have opposite signs.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q6: How do I check?</h3><p><em>Expand the factors back to the original trinomial.</em></p></div>
</div>`)] },

  { code: "3.5", title: "Special Products", blocks: [html(String.raw`<div class="lecture-box">
  <h1>⭐ Special Products</h1>
  <p><strong>Overview.</strong> Two patterns factor instantly once you recognize them: the <strong>difference of squares</strong> and the <strong>perfect-square trinomial</strong>. Spotting them saves all the AC-method work.</p>

  <h2>📌 The Patterns</h2>
  <ol class="math">
    <li>Difference of squares: \(a^2-b^2=(a-b)(a+b)\).</li>
    <li>Perfect-square trinomial: \(a^2+2ab+b^2=(a+b)^2\) and \(a^2-2ab+b^2=(a-b)^2\).</li>
  </ol>
  <p><strong>Note:</strong> a <em>sum</em> of squares \(a^2+b^2\) does <strong>not</strong> factor over the real numbers.</p>

  <h2>📌 How to Spot Them</h2>
  <p>Difference of squares: two perfect squares with a minus between. Perfect-square trinomial: the first and last terms are perfect squares and the middle term equals \(2\times\) the product of their roots.</p>

  <h2>🔵 Examples</h2>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 1: Difference of squares</h3>
    <p>Factor \(x^2-25\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(x^2-25=x^2-5^2\).</div>
      <em>Conclusion: \((x-5)(x+5)\) (zeros \(\pm5\)). ✓</em>
    </div>
    ${gframe(["y = x^2 - 25"], { zoom: 6, title: "x² − 25 = (x−5)(x+5)", labels: [{ x: 5, y: 0, t: "5", c: "#a3327a" }, { x: -5, y: 0, t: "−5", c: "#a3327a" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 2: Difference of squares with coefficients</h3>
    <p>Factor \(9x^2-16\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(9x^2=(3x)^2\) and \(16=4^2\).</div>
      <em>Conclusion: \((3x-4)(3x+4)\) (zeros \(\pm\tfrac43\)). ✓</em>
    </div>
    ${gframe(["y = 9*x^2 - 16"], { zoom: 9, title: "9x² − 16 = (3x−4)(3x+4)", labels: [{ x: 1.333, y: 0, t: "4/3", c: "#a3327a" }, { x: -1.333, y: 0, t: "−4/3", c: "#a3327a" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 3: Perfect-square trinomial (+)</h3>
    <p>Factor \(x^2+10x+25\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(x^2\) and \(25=5^2\) are squares; middle \(=2(x)(5)=10x\). ✓</div>
      <em>Conclusion: \((x+5)^2\) (double zero \(-5\)). ✓</em>
    </div>
    ${gframe(["y = x^2 + 10*x + 25"], { zoom: 6, title: "(x+5)²", labels: [{ x: -5, y: 0, t: "−5 (double)", c: "#a3327a" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 4: Perfect-square trinomial (−)</h3>
    <p>Factor \(x^2-12x+36\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(x^2\) and \(36=6^2\); middle \(=-2(x)(6)=-12x\). ✓</div>
      <em>Conclusion: \((x-6)^2\) (double zero \(6\)). ✓</em>
    </div>
    ${gframe(["y = x^2 - 12*x + 36"], { zoom: 4, title: "(x−6)²", labels: [{ x: 6, y: 0, t: "6 (double)", c: "#a3327a" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 5: Perfect square with a coefficient</h3>
    <p>Factor \(4x^2-20x+25\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(4x^2=(2x)^2\), \(25=5^2\); middle \(=-2(2x)(5)=-20x\). ✓</div>
      <em>Conclusion: \((2x-5)^2\) (double zero \(\tfrac52\)). ✓</em>
    </div>
    ${gframe(["y = 4*x^2 - 20*x + 25"], { zoom: 6, title: "(2x−5)²", labels: [{ x: 2.5, y: 0, t: "2.5 (double)", c: "#a3327a" }] })}
  </div>

  <h2>🟡 Practice Questions</h2>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 1</h3><p>Factor \(x^2-49\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \((x-7)(x+7)\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 2</h3><p>Factor \(16x^2-9\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \((4x-3)(4x+3)\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 3</h3><p>Factor \(x^2+8x+16\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \((x+4)^2\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 4</h3><p>Factor \(x^2-14x+49\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \((x-7)^2\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 5 — Challenge</h3><p>Factor \(9x^2-24x+16\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\((3x)^2,(4)^2\), middle \(-2(3x)(4)=-24x\). <em>Answer: \((3x-4)^2\).</em></div></div></details>
  </div>

  <div class="mistake-box" style="background-color:#fdecea;border-left:5px solid #d9534f;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>⚠️ Common Mistakes</h3>
    <ul>
      <li>Trying to factor a <em>sum</em> of squares \(a^2+b^2\) — it doesn't factor over the reals.</li>
      <li>Skipping the middle-term check for a perfect square.</li>
      <li>Forgetting a GCF (e.g. \(2x^2-8=2(x^2-4)=2(x-2)(x+2)\)).</li>
    </ul>
  </div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q1: Difference-of-squares pattern?</h3><p><em>\(a^2-b^2=(a-b)(a+b)\).</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q2: How do I recognize it?</h3><p><em>Two perfect squares with a minus sign between them.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q3: Perfect-square trinomial?</h3><p><em>\(a^2\pm2ab+b^2=(a\pm b)^2\).</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q4: How do I confirm a perfect square?</h3><p><em>First and last are squares, and the middle equals \(2\times\) the product of their roots.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q5: Does \(a^2+b^2\) factor?</h3><p><em>No — not over the real numbers.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q6: GCF first?</h3><p><em>Always — then look for a special pattern.</em></p></div>
</div>`)] },

  { code: "4.1", title: "Introducing Quadratic Relations", blocks: [html(String.raw`<div class="lecture-box">
  <h1>📊 Introducing Quadratic Relations</h1>
  <p><strong>Overview.</strong> A <strong>quadratic relation</strong> has a squared term as its highest power. Its graph is a <strong>parabola</strong>. In a table of values its signature is a constant <em>second</em> difference (the first differences change, but at a steady rate).</p>

  <h2>📌 Recognizing a Quadratic</h2>
  <p>From an equation: it contains an \(x^2\) term and no higher power (e.g. \(y=2x^2-3\)). From a table: compute first differences, then differences of those — if the <strong>second differences are constant</strong>, it's quadratic.</p>

  <h2>📌 The Shape</h2>
  <p>The coefficient \(a\) controls the parabola: \(a>0\) opens <strong>up</strong> (has a minimum), \(a<0\) opens <strong>down</strong> (has a maximum), and a larger \(|a|\) makes it <strong>narrower</strong>. Also, the constant second difference equals \(2a\).</p>

  <h2>🔵 Examples</h2>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 1: The base parabola</h3>
    <p>Show \(y=x^2\) is quadratic using a table \((x=-2\text{ to }2)\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(y\): \(4,1,0,1,4\). First differences: \(-3,-1,1,3\).</div>
      <div class="step"><strong>Step 2:</strong> Second differences: \(2,2,2\) — constant.</div>
      <em>Conclusion: quadratic; the graph is a parabola with vertex \((0,0)\). ✓</em>
    </div>
    ${gframe(["y = x^2"], { zoom: 22, title: "y = x² (vertex at origin)", labels: [{ x: 0, y: 0, t: "(0, 0)", c: "#a3327a" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 2: Spot the quadratic</h3>
    <p>Which is quadratic: \(y=2x^2-3\), \(y=3x+1\), or \(y=x^3\)?</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(y=3x+1\) is linear; \(y=x^3\) is cubic.</div>
      <em>Conclusion: \(y=2x^2-3\) is the quadratic (highest power \(2\)). ✓</em>
    </div>
    ${gframe(["y = 2*x^2 - 3"], { zoom: 16, title: "y = 2x² − 3", labels: [{ x: 0, y: -3, t: "vertex (0, −3)", c: "#a3327a" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 3: Table → second differences</h3>
    <p>Is \(x:0,1,2,3\to y:1,3,7,13\) quadratic?</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> First differences: \(2,4,6\).</div>
      <div class="step"><strong>Step 2:</strong> Second differences: \(2,2\) — constant.</div>
      <em>Conclusion: quadratic (it fits \(y=x^2+x+1\)). ✓</em>
    </div>
    ${gframe(["y = x^2 + x + 1"], { zoom: 18, title: "Constant 2nd differences → quadratic", labels: [{ x: 0, y: 1, t: "(0, 1)", c: "#a3327a" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 4: Direction of opening</h3>
    <p>Which way does \(y=-x^2+4\) open?</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(a=-1<0\).</div>
      <em>Conclusion: opens <strong>down</strong>, with a maximum at \((0,4)\). ✓</em>
    </div>
    ${gframe(["y = -x^2 + 4"], { zoom: 18, title: "a < 0 → opens down (max at (0,4))", labels: [{ x: 0, y: 4, t: "max (0, 4)", c: "#a3327a" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 5: Width</h3>
    <p>Compare \(y=x^2\) and \(y=3x^2\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Both open up, but \(|3|>|1|\).</div>
      <em>Conclusion: \(y=3x^2\) is <strong>narrower</strong> — larger \(|a|\) means a thinner parabola. ✓</em>
    </div>
    ${gframe(["y = x^2", "y = 3*x^2"], { zoom: 16, title: "Larger |a| → narrower" })}
  </div>

  <h2>🟡 Practice Questions</h2>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 1</h3><p>Is \(y=5x^2+2x-1\) quadratic?</p>
    <details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: yes — it has an \(x^2\) term.</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 2</h3><p>Is \(y=4x-7\) quadratic?</p>
    <details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: no — it's linear.</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 3</h3><p>Table \(x:0,1,2,3\to y:2,5,10,17\). Quadratic?</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">First diffs \(3,5,7\); second diffs \(2,2\). <em>Answer: yes.</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 4</h3><p>Does \(y=-2x^2+1\) open up or down?</p>
    <details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: down (\(a<0\)).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 5 — Challenge</h3><p>A table has second differences all equal to \(6\). Is it quadratic, and what is \(a\)?</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\(2a=6\). <em>Answer: yes; \(a=3\).</em></div></div></details>
  </div>

  <div class="mistake-box" style="background-color:#fdecea;border-left:5px solid #d9534f;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>⚠️ Common Mistakes</h3>
    <ul>
      <li>Checking <em>first</em> differences (that's the linear test) instead of second.</li>
      <li>Calling \(y=x^3\) quadratic.</li>
      <li>Forgetting that the sign of \(a\) sets the opening direction.</li>
    </ul>
  </div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q1: What makes a relation quadratic?</h3><p><em>Its highest power of \(x\) is \(2\).</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q2: What is the graph called?</h3><p><em>A parabola.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q3: How do I tell from a table?</h3><p><em>The second differences are constant (the first differences are not).</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q4: What does the sign of \(a\) do?</h3><p><em>\(a>0\) opens up; \(a<0\) opens down.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q5: What does \(|a|\) do?</h3><p><em>A larger \(|a|\) makes the parabola narrower.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q6: How does the second difference relate to \(a\)?</h3><p><em>The constant second difference equals \(2a\).</em></p></div>
</div>`)] },

  { code: "4.2", title: "Key Features of a Parabola", blocks: [html(String.raw`<div class="lecture-box">
  <h1>🔑 Key Features of a Parabola</h1>
  <p><strong>Overview.</strong> Every parabola has the same vocabulary: <strong>vertex</strong> (the turning point), <strong>axis of symmetry</strong>, <strong>zeros</strong> (x-intercepts), <strong>y-intercept</strong>, a maximum or minimum, plus its <strong>domain</strong> and <strong>range</strong>.</p>

  <h2>📌 Finding the Vertex from \(y=ax^2+bx+c\)</h2>
  <p>The axis of symmetry is \(x=-\dfrac{b}{2a}\); substitute it back to get the vertex's \(y\). The vertex is a <strong>minimum</strong> if \(a>0\) and a <strong>maximum</strong> if \(a<0\).</p>

  <h2>📌 Domain &amp; Range</h2>
  <p>Every parabola's <strong>domain</strong> is all real numbers. Its <strong>range</strong> depends on the vertex: \(y\ge k\) if it opens up, \(y\le k\) if it opens down, where \(k\) is the vertex's \(y\)-value.</p>

  <h2>🔵 Examples</h2>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 1: All features (opens up)</h3>
    <p>Describe \(y=x^2-4x+3\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Axis \(x=-\dfrac{-4}{2(1)}=2\); vertex \(y=4-8+3=-1\) → \((2,-1)\) minimum.</div>
      <div class="step"><strong>Step 2:</strong> Zeros: \((x-1)(x-3)=0\to1,3\); y-intercept \(3\).</div>
      <em>Conclusion: vertex \((2,-1)\), axis \(x=2\), domain \(\mathbb{R}\), range \(y\ge-1\). ✓</em>
    </div>
    ${gframe(["y = x^2 - 4*x + 3"], { zoom: 22, title: "Vertex (2, −1), zeros 1 & 3", labels: [{ x: 2, y: -1, t: "vertex", c: "#a3327a" }, { x: 1, y: 0, t: "1", c: "#3b7d3b" }, { x: 3, y: 0, t: "3", c: "#3b7d3b" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 2: Opens down (maximum)</h3>
    <p>Describe \(y=-x^2+2x+3\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Axis \(x=-\dfrac{2}{2(-1)}=1\); vertex \(y=-1+2+3=4\) → \((1,4)\) maximum.</div>
      <div class="step"><strong>Step 2:</strong> Zeros: \(x^2-2x-3=0\to(x-3)(x+1)\to3,-1\).</div>
      <em>Conclusion: vertex \((1,4)\), range \(y\le4\). ✓</em>
    </div>
    ${gframe(["y = -x^2 + 2*x + 3"], { zoom: 18, title: "Vertex (1, 4) — maximum", labels: [{ x: 1, y: 4, t: "max (1, 4)", c: "#a3327a" }, { x: 3, y: 0, t: "3", c: "#3b7d3b" }, { x: -1, y: 0, t: "−1", c: "#3b7d3b" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 3: Axis &amp; vertex</h3>
    <p>Find the axis of symmetry and vertex of \(y=x^2+6x+5\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Axis \(x=-\dfrac{6}{2}= -3\).</div>
      <div class="step"><strong>Step 2:</strong> \(y=9-18+5=-4\).</div>
      <em>Conclusion: axis \(x=-3\), vertex \((-3,-4)\). ✓</em>
    </div>
    ${gframe(["y = x^2 + 6*x + 5"], { zoom: 14, title: "Axis x = −3, vertex (−3, −4)", labels: [{ x: -3, y: -4, t: "vertex", c: "#a3327a" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 4: Domain and range</h3>
    <p>State the domain and range of \(y=2x^2-8\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Vertex \((0,-8)\), opens up.</div>
      <em>Conclusion: domain \(\mathbb{R}\); range \(y\ge-8\). ✓</em>
    </div>
    ${gframe(["y = 2*x^2 - 8"], { zoom: 14, title: "Range y ≥ −8", labels: [{ x: 0, y: -8, t: "min (0, −8)", c: "#a3327a" }, { x: 2, y: 0, t: "2", c: "#3b7d3b" }, { x: -2, y: 0, t: "−2", c: "#3b7d3b" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 5: Read it from vertex form</h3>
    <p>Describe \(y=-(x-2)^2+5\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Vertex form gives vertex \((2,5)\); \(a=-1<0\) → maximum.</div>
      <em>Conclusion: max value \(5\), axis \(x=2\), range \(y\le5\). ✓</em>
    </div>
    ${gframe(["y = -(x-2)^2 + 5"], { zoom: 18, title: "Vertex (2, 5), range y ≤ 5", labels: [{ x: 2, y: 5, t: "max (2, 5)", c: "#a3327a" }] })}
  </div>

  <h2>🟡 Practice Questions</h2>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 1</h3><p>Vertex of \(y=x^2-6x+8\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\(x=3,\ y=-1\). <em>Answer: \((3,-1)\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 2</h3><p>Zeros of \(y=x^2-5x+6\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\((x-2)(x-3)\). <em>Answer: \(2\) and \(3\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 3</h3><p>Axis of symmetry of \(y=x^2+4x+1\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\(x=-\tfrac{4}{2}\). <em>Answer: \(x=-2\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 4</h3><p>Range of \(y=x^2+2\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">Min at \((0,2)\), opens up. <em>Answer: \(y\ge2\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 5 — Challenge</h3><p>Does \(y=-2x^2+8x-3\) have a max or min, and what is the vertex's \(x\)?</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\(a<0\) → max; \(x=-\tfrac{8}{2(-2)}\). <em>Answer: maximum at \(x=2\).</em></div></div></details>
  </div>

  <div class="mistake-box" style="background-color:#fdecea;border-left:5px solid #d9534f;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>⚠️ Common Mistakes</h3>
    <ul>
      <li>Forgetting the minus sign in \(x=-\dfrac{b}{2a}\).</li>
      <li>Stating the range as "all reals" — that's the <em>domain</em>.</li>
      <li>Confusing maximum/minimum with the sign of \(a\).</li>
    </ul>
  </div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q1: What is the vertex?</h3><p><em>The turning point — the maximum or minimum of the parabola.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q2: What is the axis of symmetry?</h3><p><em>The vertical line \(x=h\) through the vertex.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q3: How do I find the vertex from standard form?</h3><p><em>\(x=-\frac{b}{2a}\), then substitute for \(y\).</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q4: What are the zeros?</h3><p><em>The x-intercepts — where \(y=0\).</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q5: What is the domain of any parabola?</h3><p><em>All real numbers.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q6: What is the range?</h3><p><em>\(y\ge k\) (opens up) or \(y\le k\) (opens down), where \(k\) is the vertex's \(y\).</em></p></div>
</div>`)] },

  { code: "4.3", title: "Transformations & Vertex Form", blocks: [html(String.raw`<div class="lecture-box">
  <h1>🎚️ Transformations &amp; Vertex Form</h1>
  <p><strong>Overview.</strong> Vertex form \(y=a(x-h)^2+k\) is the most readable way to write a parabola: it shows the transformations of the base \(y=x^2\) directly, and the vertex is simply \((h,k)\).</p>

  <h2>📌 What Each Letter Does</h2>
  <ul>
    <li><strong>\(a\)</strong> — vertical stretch (\(|a|>1\)) or compression (\(|a|<1\)); reflects down if \(a<0\).</li>
    <li><strong>\(h\)</strong> — horizontal shift. Note \((x-h)\): \(h>0\) shifts <em>right</em>, \(h<0\) shifts <em>left</em>.</li>
    <li><strong>\(k\)</strong> — vertical shift up/down.</li>
  </ul>
  <p>The vertex is \((h,k)\); the axis of symmetry is \(x=h\); the max/min value is \(k\).</p>

  <h2>🔵 Examples</h2>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 1: Read the vertex</h3>
    <p>Find the vertex of \(y=(x-3)^2+2\) and describe the shift.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(h=3,\ k=2\).</div>
      <em>Conclusion: vertex \((3,2)\) — base parabola shifted right \(3\), up \(2\). ✓</em>
    </div>
    ${gframe(["y = (x-3)^2 + 2"], { zoom: 18, title: "Vertex (3, 2) — right 3, up 2", labels: [{ x: 3, y: 2, t: "(3, 2)", c: "#a3327a" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 2: A negative h</h3>
    <p>Find the vertex of \(y=(x+1)^2-4\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \((x+1)=(x-(-1))\), so \(h=-1,\ k=-4\).</div>
      <em>Conclusion: vertex \((-1,-4)\). ✓</em>
    </div>
    ${gframe(["y = (x+1)^2 - 4"], { zoom: 18, title: "Vertex (−1, −4)", labels: [{ x: -1, y: -4, t: "(−1, −4)", c: "#a3327a" }, { x: 1, y: 0, t: "1", c: "#3b7d3b" }, { x: -3, y: 0, t: "−3", c: "#3b7d3b" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 3: A reflection</h3>
    <p>Describe \(y=-(x-2)^2+5\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(a=-1\) → reflected (opens down); vertex \((2,5)\).</div>
      <em>Conclusion: maximum at \((2,5)\). ✓</em>
    </div>
    ${gframe(["y = -(x-2)^2 + 5"], { zoom: 18, title: "Reflected — max at (2, 5)", labels: [{ x: 2, y: 5, t: "max (2, 5)", c: "#a3327a" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 4: A vertical stretch</h3>
    <p>Describe \(y=2(x-1)^2-3\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(a=2\) → stretched (narrower); vertex \((1,-3)\).</div>
      <em>Conclusion: narrow parabola, vertex \((1,-3)\), opens up. ✓</em>
    </div>
    ${gframe(["y = 2*(x-1)^2 - 3"], { zoom: 16, title: "Stretch ×2, vertex (1, −3)", labels: [{ x: 1, y: -3, t: "(1, −3)", c: "#a3327a" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 5: Describe all transformations</h3>
    <p>Describe \(y=\tfrac12(x+2)^2+1\) from \(y=x^2\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(a=\tfrac12\) → vertical compression; \(h=-2\) → left \(2\); \(k=1\) → up \(1\).</div>
      <em>Conclusion: wider parabola, vertex \((-2,1)\). ✓</em>
    </div>
    ${gframe(["y = 0.5*(x+2)^2 + 1"], { zoom: 18, title: "Compress ×½, left 2, up 1", labels: [{ x: -2, y: 1, t: "(−2, 1)", c: "#a3327a" }] })}
  </div>

  <h2>🟡 Practice Questions</h2>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 1</h3><p>Vertex of \(y=(x-4)^2+1\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \((4,1)\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 2</h3><p>Vertex of \(y=(x+3)^2-2\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \((-3,-2)\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 3</h3><p>Does \(y=-(x-1)^2+6\) open up or down? Max or min?</p>
    <details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: down; maximum at \((1,6)\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 4</h3><p>Describe the transformations of \(y=3(x-2)^2\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: stretch ×3, right 2; vertex \((2,0)\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 5 — Challenge</h3><p>Write vertex form for a parabola with vertex \((-1,4)\) opening down with \(a=-2\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \(y=-2(x+1)^2+4\).</em></div></div></details>
  </div>

  <div class="mistake-box" style="background-color:#fdecea;border-left:5px solid #d9534f;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>⚠️ Common Mistakes</h3>
    <ul>
      <li>Reading \(h\) with the wrong sign — \(y=(x+1)^2\) has \(h=-1\).</li>
      <li>Thinking \(a\) moves the vertex (it changes width/direction only).</li>
      <li>Swapping horizontal and vertical shifts.</li>
    </ul>
  </div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q1: What does vertex form tell me instantly?</h3><p><em>The vertex \((h,k)\).</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q2: Why does \(h>0\) shift right?</h3><p><em>Because the form is \(x-h\) — you subtract \(h\).</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q3: What does \(a\) do?</h3><p><em>Vertical stretch/compression, and reflection if \(a<0\).</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q4: What does \(k\) do?</h3><p><em>Shifts the parabola up or down.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q5: Axis of symmetry in vertex form?</h3><p><em>\(x=h\).</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q6: What's the max/min value?</h3><p><em>\(k\) — a maximum if \(a<0\), a minimum if \(a>0\).</em></p></div>
</div>`)] },
  { code: "4.4", title: "Graphing from Vertex Form", blocks: [html(String.raw`<div class="lecture-box">
  <h1>✏️ Graphing from Vertex Form</h1>
  <p><strong>Overview.</strong> Vertex form \(y=a(x-h)^2+k\) makes graphing fast: plot the vertex, then use the <strong>step pattern</strong> set by \(a\) to find more points, and sketch the symmetric curve.</p>

  <h2>📌 The Step Pattern</h2>
  <p>From the vertex \((h,k)\): go over \(1\) and up \(a\); over \(2\) and up \(4a\) (the \(1,4,9\dots\) pattern scaled by \(a\)). The parabola is symmetric about \(x=h\), so mirror each point to the other side.</p>

  <h2>📌 Finding Zeros from Vertex Form</h2>
  <p>Set \(y=0\) and isolate the square: \(a(x-h)^2+k=0\Rightarrow(x-h)^2=-\dfrac{k}{a}\). If the right side is negative there are no real zeros.</p>

  <h2>🔵 Examples</h2>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 1: Basic, a = 1</h3>
    <p>Graph \(y=(x-2)^2-1\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Vertex \((2,-1)\).</div>
      <div class="step"><strong>Step 2:</strong> Over \(1\)/up \(1\): \((3,0)\) and \((1,0)\); over \(2\)/up \(4\): \((4,3),(0,3)\).</div>
      <em>Conclusion: zeros \(1,3\); opens up. ✓</em>
    </div>
    ${gframe(["y = (x-2)^2 - 1"], { zoom: 20, title: "Vertex (2, −1), zeros 1 & 3", labels: [{ x: 2, y: -1, t: "vertex", c: "#a3327a" }, { x: 1, y: 0, t: "1", c: "#3b7d3b" }, { x: 3, y: 0, t: "3", c: "#3b7d3b" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 2: Opens down</h3>
    <p>Graph \(y=-(x+1)^2+4\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Vertex \((-1,4)\), opens down.</div>
      <div class="step"><strong>Step 2:</strong> Zeros: \((x+1)^2=4\Rightarrow x=1,-3\).</div>
      <em>Conclusion: max \((-1,4)\); zeros \(1,-3\). ✓</em>
    </div>
    ${gframe(["y = -(x+1)^2 + 4"], { zoom: 18, title: "Vertex (−1, 4), zeros 1 & −3", labels: [{ x: -1, y: 4, t: "max", c: "#a3327a" }, { x: 1, y: 0, t: "1", c: "#3b7d3b" }, { x: -3, y: 0, t: "−3", c: "#3b7d3b" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 3: A stretch, a = 2</h3>
    <p>Graph \(y=2(x-1)^2\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Vertex \((1,0)\).</div>
      <div class="step"><strong>Step 2:</strong> Over \(1\)/up \(2\): \((2,2),(0,2)\) — narrower than the base.</div>
      <em>Conclusion: vertex \((1,0)\), one zero (touches at \(x=1\)). ✓</em>
    </div>
    ${gframe(["y = 2*(x-1)^2"], { zoom: 18, title: "Stretch ×2, vertex (1, 0)", labels: [{ x: 1, y: 0, t: "vertex (1, 0)", c: "#a3327a" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 4: A compression, a = ½</h3>
    <p>Graph \(y=\tfrac12(x+2)^2-2\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Vertex \((-2,-2)\), wider.</div>
      <div class="step"><strong>Step 2:</strong> Zeros: \(\tfrac12(x+2)^2=2\Rightarrow(x+2)^2=4\Rightarrow x=0,-4\).</div>
      <em>Conclusion: vertex \((-2,-2)\); zeros \(0,-4\). ✓</em>
    </div>
    ${gframe(["y = 0.5*(x+2)^2 - 2"], { zoom: 18, title: "Compress ×½, zeros 0 & −4", labels: [{ x: -2, y: -2, t: "vertex", c: "#a3327a" }, { x: 0, y: 0, t: "0", c: "#3b7d3b" }, { x: -4, y: 0, t: "−4", c: "#3b7d3b" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 5: Stretch and reflect</h3>
    <p>Graph \(y=-2(x-3)^2+8\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Vertex \((3,8)\), opens down.</div>
      <div class="step"><strong>Step 2:</strong> Zeros: \(-2(x-3)^2+8=0\Rightarrow(x-3)^2=4\Rightarrow x=1,5\).</div>
      <em>Conclusion: max \((3,8)\); zeros \(1,5\). ✓</em>
    </div>
    ${gframe(["y = -2*(x-3)^2 + 8"], { zoom: 14, title: "Max (3, 8), zeros 1 & 5", labels: [{ x: 3, y: 8, t: "max", c: "#a3327a" }, { x: 1, y: 0, t: "1", c: "#3b7d3b" }, { x: 5, y: 0, t: "5", c: "#3b7d3b" }] })}
  </div>

  <h2>🟡 Practice Questions</h2>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 1</h3><p>Vertex and opening of \(y=(x-5)^2+2\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: vertex \((5,2)\), opens up.</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 2</h3><p>Zeros of \(y=-(x-2)^2+9\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\((x-2)^2=9\). <em>Answer: \(x=-1,5\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 3</h3><p>From vertex \((0,-4)\) with \(a=1\), give the points one step left and right.</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">Over 1, up 1. <em>Answer: \((1,-3)\) and \((-1,-3)\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 4</h3><p>Zeros of \(y=3(x+1)^2-12\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\((x+1)^2=4\). <em>Answer: \(x=1,-3\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 5 — Challenge</h3><p>List the vertex, opening, and zeros of \(y=-(x-1)^2+4\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">Vertex \((1,4)\), down; \((x-1)^2=4\). <em>Answer: zeros \(-1,3\).</em></div></div></details>
  </div>

  <div class="mistake-box" style="background-color:#fdecea;border-left:5px solid #d9534f;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>⚠️ Common Mistakes</h3>
    <ul>
      <li>Plotting the vertex with the wrong sign of \(h\).</li>
      <li>Forgetting to multiply the step by \(a\).</li>
      <li>Plotting only one side instead of mirroring across \(x=h\).</li>
    </ul>
  </div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q1: First step to graph vertex form?</h3><p><em>Plot the vertex \((h,k)\).</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q2: How do I get more points?</h3><p><em>The step pattern: over 1 → up \(a\), over 2 → up \(4a\).</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q3: Why mirror the points?</h3><p><em>The parabola is symmetric about \(x=h\).</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q4: How do I find zeros from vertex form?</h3><p><em>Set \(y=0\) and isolate the square.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q5: What if \((x-h)^2\) equals a negative?</h3><p><em>No real zeros — the parabola doesn't cross the \(x\)-axis.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q6: Does \(a\) move the vertex?</h3><p><em>No — only width and direction.</em></p></div>
</div>`)] },

  { code: "4.5", title: "Factored Form & the Zeros", blocks: [html(String.raw`<div class="lecture-box">
  <h1>🎯 Factored Form &amp; the Zeros</h1>
  <p><strong>Overview.</strong> Factored form \(y=a(x-r)(x-s)\) hands you the <strong>zeros</strong> \(r\) and \(s\) directly. The axis of symmetry sits exactly midway between them, which leads straight to the vertex.</p>

  <h2>📌 Reading Factored Form</h2>
  <ul>
    <li><strong>Zeros</strong>: \(x=r\) and \(x=s\) (the values that make a bracket zero).</li>
    <li><strong>Axis of symmetry</strong>: \(x=\dfrac{r+s}{2}\) — the midpoint of the zeros.</li>
    <li><strong>Vertex</strong>: substitute the axis value back for \(y\).</li>
    <li><strong>\(a\)</strong>: direction and width (find it from another point if unknown).</li>
  </ul>

  <h2>🔵 Examples</h2>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 1: Zeros, axis, vertex</h3>
    <p>For \(y=(x-1)(x-5)\), find the zeros, axis, and vertex.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Zeros \(1\) and \(5\); axis \(x=\dfrac{1+5}{2}=3\).</div>
      <div class="step"><strong>Step 2:</strong> \(y=(3-1)(3-5)=-4\).</div>
      <em>Conclusion: zeros \(1,5\); vertex \((3,-4)\). ✓</em>
    </div>
    ${gframe(["y = (x-1)*(x-5)"], { zoom: 20, title: "Zeros 1 & 5, vertex (3, −4)", labels: [{ x: 1, y: 0, t: "1", c: "#3b7d3b" }, { x: 5, y: 0, t: "5", c: "#3b7d3b" }, { x: 3, y: -4, t: "vertex", c: "#a3327a" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 2: Zeros with opposite signs</h3>
    <p>For \(y=(x+2)(x-4)\), find the zeros and vertex.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Zeros \(-2\) and \(4\); axis \(x=1\).</div>
      <div class="step"><strong>Step 2:</strong> \(y=(1+2)(1-4)=-9\).</div>
      <em>Conclusion: vertex \((1,-9)\). ✓</em>
    </div>
    ${gframe(["y = (x+2)*(x-4)"], { zoom: 11, title: "Zeros −2 & 4, vertex (1, −9)", labels: [{ x: -2, y: 0, t: "−2", c: "#3b7d3b" }, { x: 4, y: 0, t: "4", c: "#3b7d3b" }, { x: 1, y: -9, t: "vertex", c: "#a3327a" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 3: With a stretch</h3>
    <p>For \(y=2(x-1)(x-3)\), find the vertex.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Zeros \(1,3\); axis \(x=2\).</div>
      <div class="step"><strong>Step 2:</strong> \(y=2(2-1)(2-3)=2(1)(-1)=-2\).</div>
      <em>Conclusion: vertex \((2,-2)\), narrower (\(a=2\)). ✓</em>
    </div>
    ${gframe(["y = 2*(x-1)*(x-3)"], { zoom: 16, title: "Zeros 1 & 3, vertex (2, −2)", labels: [{ x: 1, y: 0, t: "1", c: "#3b7d3b" }, { x: 3, y: 0, t: "3", c: "#3b7d3b" }, { x: 2, y: -2, t: "vertex", c: "#a3327a" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 4: Opens down</h3>
    <p>For \(y=-(x+1)(x-3)\), find the vertex.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Zeros \(-1,3\); axis \(x=1\).</div>
      <div class="step"><strong>Step 2:</strong> \(y=-(1+1)(1-3)=-(2)(-2)=4\).</div>
      <em>Conclusion: max at \((1,4)\). ✓</em>
    </div>
    ${gframe(["y = -(x+1)*(x-3)"], { zoom: 18, title: "Zeros −1 & 3, max (1, 4)", labels: [{ x: -1, y: 0, t: "−1", c: "#3b7d3b" }, { x: 3, y: 0, t: "3", c: "#3b7d3b" }, { x: 1, y: 4, t: "max", c: "#a3327a" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 5: Find a from a point</h3>
    <p>A parabola has zeros \(2\) and \(6\) and passes through \((4,-8)\). Find \(a\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(y=a(x-2)(x-6)\); plug in \((4,-8)\): \(a(2)(-2)=-8\).</div>
      <div class="step"><strong>Step 2:</strong> \(-4a=-8\Rightarrow a=2\).</div>
      <em>Conclusion: \(y=2(x-2)(x-6)\). ✓</em>
    </div>
    ${gframe(["y = 2*(x-2)*(x-6)"], { zoom: 12, title: "a = 2 — through (4, −8)", labels: [{ x: 2, y: 0, t: "2", c: "#3b7d3b" }, { x: 6, y: 0, t: "6", c: "#3b7d3b" }, { x: 4, y: -8, t: "(4, −8)", c: "#a3327a" }] })}
  </div>

  <h2>🟡 Practice Questions</h2>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 1</h3><p>Zeros of \(y=(x-3)(x+7)\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \(3\) and \(-7\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 2</h3><p>Axis of symmetry of \(y=(x-2)(x-8)\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\(\tfrac{2+8}{2}\). <em>Answer: \(x=5\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 3</h3><p>Vertex of \(y=x(x-6)\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">Zeros \(0,6\), axis \(3\), \(y=3(-3)=-9\). <em>Answer: \((3,-9)\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 4</h3><p>Max or min and vertex of \(y=-(x-1)(x-5)\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">Down; axis \(3\), \(y=-(2)(-2)=4\). <em>Answer: max at \((3,4)\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 5 — Challenge</h3><p>A parabola has zeros \(-1\) and \(4\) and passes through \((1,-12)\). Find \(a\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\(a(2)(-3)=-12\). <em>Answer: \(a=2\).</em></div></div></details>
  </div>

  <div class="mistake-box" style="background-color:#fdecea;border-left:5px solid #d9534f;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>⚠️ Common Mistakes</h3>
    <ul>
      <li>Sign of the zeros — \((x-r)\) gives a zero at \(+r\), not \(-r\).</li>
      <li>Forgetting the axis is the <strong>midpoint</strong> of the zeros.</li>
      <li>Leaving out \(a\) when computing the vertex's \(y\).</li>
    </ul>
  </div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q1: What does factored form give directly?</h3><p><em>The zeros \(r\) and \(s\).</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q2: Axis of symmetry?</h3><p><em>\(x=\frac{r+s}{2}\), midway between the zeros.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q3: How do I find the vertex?</h3><p><em>Find the axis \(x\), then substitute for \(y\).</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q4: How do I find \(a\)?</h3><p><em>Use one more known point on the parabola.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q5: Does \(a\) change the zeros?</h3><p><em>No — only the width and direction.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q6: What is a double root?</h3><p><em>When \(r=s\) — the parabola touches the \(x\)-axis once.</em></p></div>
</div>`)] },

  { code: "4.6", title: "Standard Form & Converting Between Forms", blocks: [html(String.raw`<div class="lecture-box">
  <h1>🔄 Standard Form &amp; Converting Between Forms</h1>
  <p><strong>Overview.</strong> Standard form \(y=ax^2+bx+c\) is the everyday way to write a quadratic — its constant \(c\) is the y-intercept. The real skill is moving freely between <strong>standard</strong>, <strong>vertex</strong>, and <strong>factored</strong> form, picking whichever a question needs.</p>

  <h2>📌 What Each Form Shows</h2>
  <ul>
    <li><strong>Standard</strong> \(ax^2+bx+c\): the y-intercept \(c\).</li>
    <li><strong>Vertex</strong> \(a(x-h)^2+k\): the vertex \((h,k)\) — get there by completing the square.</li>
    <li><strong>Factored</strong> \(a(x-r)(x-s)\): the zeros — get there by factoring.</li>
  </ul>

  <h2>📌 Converting</h2>
  <p><strong>Vertex/factored → standard:</strong> expand and collect. <strong>Standard → factored:</strong> factor. <strong>Standard → vertex:</strong> complete the square (halve \(b\), square it, add and subtract).</p>

  <h2>🔵 Examples</h2>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 1: Read standard form</h3>
    <p>Give the y-intercept, vertex, and zeros of \(y=x^2-6x+5\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> y-intercept \(=5\); vertex \(x=3,\ y=-4\).</div>
      <div class="step"><strong>Step 2:</strong> Factor: \((x-1)(x-5)\) → zeros \(1,5\).</div>
      <em>Conclusion: y-int \(5\), vertex \((3,-4)\), zeros \(1,5\). ✓</em>
    </div>
    ${gframe(["y = x^2 - 6*x + 5"], { zoom: 16, title: "y-int 5, vertex (3, −4), zeros 1 & 5", labels: [{ x: 0, y: 5, t: "y-int", c: "#2563a0" }, { x: 3, y: -4, t: "vertex", c: "#a3327a" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 2: Factored → standard</h3>
    <p>Expand \(y=(x-2)(x+3)\) to standard form.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> FOIL: \(x^2+3x-2x-6\).</div>
      <em>Conclusion: \(y=x^2+x-6\). ✓</em>
    </div>
    ${gframe(["y = x^2 + x - 6"], { zoom: 12, title: "(x−2)(x+3) = x² + x − 6", labels: [{ x: 2, y: 0, t: "2", c: "#3b7d3b" }, { x: -3, y: 0, t: "−3", c: "#3b7d3b" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 3: Vertex → standard</h3>
    <p>Expand \(y=(x-1)^2+2\) to standard form.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \((x-1)^2=x^2-2x+1\).</div>
      <div class="step"><strong>Step 2:</strong> Add \(2\): \(x^2-2x+3\).</div>
      <em>Conclusion: \(y=x^2-2x+3\). ✓</em>
    </div>
    ${gframe(["y = x^2 - 2*x + 3"], { zoom: 16, title: "(x−1)² + 2 = x² − 2x + 3", labels: [{ x: 1, y: 2, t: "vertex (1, 2)", c: "#a3327a" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 4: Standard → vertex (complete the square)</h3>
    <p>Write \(y=x^2+4x+1\) in vertex form.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Half of \(4\) is \(2\); \(2^2=4\). Add &amp; subtract: \(x^2+4x+4-4+1\).</div>
      <div class="step"><strong>Step 2:</strong> \((x+2)^2-3\).</div>
      <em>Conclusion: \(y=(x+2)^2-3\), vertex \((-2,-3)\). ✓</em>
    </div>
    ${gframe(["y = x^2 + 4*x + 1"], { zoom: 16, title: "(x+2)² − 3, vertex (−2, −3)", labels: [{ x: -2, y: -3, t: "vertex", c: "#a3327a" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 5: Standard → factored</h3>
    <p>Write \(y=x^2-x-6\) in factored form and state the zeros.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Two numbers: product \(-6\), sum \(-1\) → \(-3,2\).</div>
      <em>Conclusion: \(y=(x-3)(x+2)\), zeros \(3,-2\). ✓</em>
    </div>
    ${gframe(["y = x^2 - x - 6"], { zoom: 12, title: "(x−3)(x+2), zeros 3 & −2", labels: [{ x: 3, y: 0, t: "3", c: "#3b7d3b" }, { x: -2, y: 0, t: "−2", c: "#3b7d3b" }] })}
  </div>

  <h2>🟡 Practice Questions</h2>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 1</h3><p>y-intercept of \(y=2x^2-3x+7\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \(7\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 2</h3><p>Expand \((x-4)(x+1)\) to standard form.</p>
    <details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \(x^2-3x-4\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 3</h3><p>Convert \(y=(x+2)^2-5\) to standard form.</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\(x^2+4x+4-5\). <em>Answer: \(x^2+4x-1\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 4</h3><p>Complete the square: \(y=x^2+6x+5\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">Half of 6 is 3; \(3^2=9\). <em>Answer: \((x+3)^2-4\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 5 — Challenge</h3><p>Convert \(y=2x^2-8x+5\) to vertex form.</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">Factor 2 from the \(x\)-terms: \(2(x^2-4x)+5=2(x-2)^2-8+5\). <em>Answer: \(2(x-2)^2-3\).</em></div></div></details>
  </div>

  <div class="mistake-box" style="background-color:#fdecea;border-left:5px solid #d9534f;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>⚠️ Common Mistakes</h3>
    <ul>
      <li>Completing the square wrong — halve \(b\), square it, add <em>and</em> subtract.</li>
      <li>When \(a\neq1\), forgetting to factor \(a\) out of the \(x\)-terms first.</li>
      <li>Mixing up which form shows the vertex, zeros, or y-intercept.</li>
    </ul>
  </div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q1: What does standard form show at a glance?</h3><p><em>The y-intercept \(c\).</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q2: Standard → vertex?</h3><p><em>Complete the square (or use \(x=-\frac{b}{2a}\)).</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q3: Vertex/factored → standard?</h3><p><em>Expand and collect like terms.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q4: Which form for zeros? For the vertex?</h3><p><em>Factored for zeros; vertex form for the vertex; standard for the y-intercept.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q5: Do all three forms describe the same parabola?</h3><p><em>Yes — they're just rewrites of each other.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q6: Best form to graph quickly?</h3><p><em>Vertex form (or factored when you want the zeros).</em></p></div>
</div>`)] },

  { code: "5.1", title: "Solving Quadratic Equations by Factoring", blocks: [html(String.raw`<div class="lecture-box">
  <h1>🟰 Solving Quadratic Equations by Factoring</h1>
  <p><strong>Overview.</strong> The fastest way to solve a factorable quadratic is the <strong>zero-product property</strong>: if a product equals zero, at least one factor must be zero. Set the equation to \(0\), factor, then solve each bracket. The solutions are exactly the parabola's \(x\)-intercepts.</p>

  <h2>📌 The Zero-Product Property</h2>
  <p>If \(A\cdot B=0\), then \(A=0\) <em>or</em> \(B=0\). So \((x-2)(x-3)=0\) means \(x=2\) or \(x=3\). This only works when one side is <strong>zero</strong> — always rearrange first.</p>

  <h2>📌 The Steps</h2>
  <ol class="math">
    <li>Rearrange so one side is \(0\).</li>
    <li>Factor fully (GCF first!).</li>
    <li>Set each factor to \(0\) and solve.</li>
    <li>State both roots.</li>
  </ol>

  <h2>🔵 Examples</h2>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 1: Simple trinomial</h3>
    <p>Solve \(x^2-5x+6=0\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Factor: \((x-2)(x-3)=0\).</div>
      <div class="step"><strong>Step 2:</strong> \(x-2=0\) or \(x-3=0\).</div>
      <em>Conclusion: \(x=2\) or \(x=3\). ✓</em>
    </div>
    ${gframe(["y = x^2 - 5*x + 6"], { zoom: 16, title: "Roots x = 2 and x = 3", labels: [{ x: 2, y: 0, t: "2", c: "#a3327a" }, { x: 3, y: 0, t: "3", c: "#a3327a" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 2: Opposite signs</h3>
    <p>Solve \(x^2+2x-15=0\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \((x+5)(x-3)=0\).</div>
      <em>Conclusion: \(x=-5\) or \(x=3\). ✓</em>
    </div>
    ${gframe(["y = x^2 + 2*x - 15"], { zoom: 9, title: "Roots x = −5 and x = 3", labels: [{ x: -5, y: 0, t: "−5", c: "#a3327a" }, { x: 3, y: 0, t: "3", c: "#a3327a" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 3: Leading coefficient ≠ 1</h3>
    <p>Solve \(2x^2+7x+3=0\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \((x+3)(2x+1)=0\).</div>
      <div class="step"><strong>Step 2:</strong> \(x+3=0\) or \(2x+1=0\).</div>
      <em>Conclusion: \(x=-3\) or \(x=-\tfrac12\). ✓</em>
    </div>
    ${gframe(["y = 2*x^2 + 7*x + 3"], { zoom: 13, title: "Roots x = −3 and x = −½", labels: [{ x: -3, y: 0, t: "−3", c: "#a3327a" }, { x: -0.5, y: 0, t: "−0.5", c: "#a3327a" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 4: Difference of squares</h3>
    <p>Solve \(x^2-9=0\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \((x-3)(x+3)=0\).</div>
      <em>Conclusion: \(x=\pm3\). ✓</em>
    </div>
    ${gframe(["y = x^2 - 9"], { zoom: 12, title: "Roots x = ±3", labels: [{ x: 3, y: 0, t: "3", c: "#a3327a" }, { x: -3, y: 0, t: "−3", c: "#a3327a" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 5: Rearrange first</h3>
    <p>Solve \(x^2=4x+5\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Move all to one side: \(x^2-4x-5=0\).</div>
      <div class="step"><strong>Step 2:</strong> \((x-5)(x+1)=0\).</div>
      <em>Conclusion: \(x=5\) or \(x=-1\). ✓</em>
    </div>
    ${gframe(["y = x^2 - 4*x - 5"], { zoom: 10, title: "Roots x = 5 and x = −1", labels: [{ x: 5, y: 0, t: "5", c: "#a3327a" }, { x: -1, y: 0, t: "−1", c: "#a3327a" }] })}
  </div>

  <h2>🟡 Practice Questions</h2>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 1</h3><p>Solve \(x^2+5x+6=0\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\((x+2)(x+3)\). <em>Answer: \(x=-2,-3\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 2</h3><p>Solve \(x^2-x-12=0\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\((x-4)(x+3)\). <em>Answer: \(x=4,-3\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 3</h3><p>Solve \(3x^2-12=0\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\(x^2=4\). <em>Answer: \(x=\pm2\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 4</h3><p>Solve \(x^2+6x=0\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\(x(x+6)=0\). <em>Answer: \(x=0,-6\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 5 — Challenge</h3><p>Solve \(2x^2-5x-3=0\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\((x-3)(2x+1)\). <em>Answer: \(x=3,-\tfrac12\).</em></div></div></details>
  </div>

  <div class="mistake-box" style="background-color:#fdecea;border-left:5px solid #d9534f;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>⚠️ Common Mistakes</h3>
    <ul>
      <li>Factoring before moving everything to one side (the zero side is essential).</li>
      <li>Dividing both sides by \(x\) — that loses the \(x=0\) root. Factor instead.</li>
      <li>Sign errors reading roots from the factors.</li>
    </ul>
  </div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q1: What is the zero-product property?</h3><p><em>If \(A\cdot B=0\), then \(A=0\) or \(B=0\).</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q2: What's the first step?</h3><p><em>Set the equation equal to zero.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q3: Then what?</h3><p><em>Factor fully (GCF first).</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q4: How many solutions?</h3><p><em>Usually two — one if there's a double root.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q5: What do the solutions mean on a graph?</h3><p><em>They are the \(x\)-intercepts (zeros) of the parabola.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q6: GCF first?</h3><p><em>Always — it simplifies the factoring.</em></p></div>
</div>`)] },

  { code: "5.2", title: "Completing the Square", blocks: [html(String.raw`<div class="lecture-box">
  <h1>🟦 Completing the Square</h1>
  <p><strong>Overview.</strong> Completing the square rewrites \(x^2+bx\) as a perfect square. It solves quadratics that don't factor nicely, and it's exactly how you convert standard form into vertex form.</p>

  <h2>📌 The Key Move</h2>
  <p>To complete \(x^2+bx\), add \(\left(\dfrac{b}{2}\right)^2\) — half of \(b\), squared. Whatever you add, you must balance (add to both sides, or add and subtract). Then \(x^2+bx+\left(\tfrac{b}{2}\right)^2=\left(x+\tfrac{b}{2}\right)^2\).</p>

  <h2>📌 When \(a\neq1\)</h2>
  <p>First factor (or divide) \(a\) out of the \(x\)-terms, complete the square inside, then distribute back.</p>

  <h2>🔵 Examples</h2>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 1: Solve by completing the square</h3>
    <p>Solve \(x^2+6x+5=0\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Move the constant: \(x^2+6x=-5\).</div>
      <div class="step"><strong>Step 2:</strong> Add \(\left(\tfrac{6}{2}\right)^2=9\) to both sides: \((x+3)^2=4\).</div>
      <div class="step"><strong>Step 3:</strong> \(x+3=\pm2\Rightarrow x=-1,-5\).</div>
      <em>Conclusion: \(x=-1\) or \(x=-5\). ✓</em>
    </div>
    ${gframe(["y = x^2 + 6*x + 5"], { zoom: 13, title: "Roots x = −1 and x = −5", labels: [{ x: -1, y: 0, t: "−1", c: "#a3327a" }, { x: -5, y: 0, t: "−5", c: "#a3327a" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 2: An irrational answer</h3>
    <p>Solve \(x^2-4x-1=0\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(x^2-4x=1\); add \(4\): \((x-2)^2=5\).</div>
      <div class="step"><strong>Step 2:</strong> \(x-2=\pm\sqrt5\).</div>
      <em>Conclusion: \(x=2\pm\sqrt5\ (\approx4.24,\,-0.24)\). ✓</em>
    </div>
    ${gframe(["y = x^2 - 4*x - 1"], { zoom: 12, title: "Roots x = 2 ± √5", labels: [{ x: 4.236, y: 0, t: "≈4.24", c: "#a3327a" }, { x: -0.236, y: 0, t: "≈−0.24", c: "#a3327a" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 3: Convert to vertex form</h3>
    <p>Write \(y=x^2+8x+10\) in vertex form.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Half of \(8\) is \(4\); \(4^2=16\). Add &amp; subtract: \(x^2+8x+16-16+10\).</div>
      <em>Conclusion: \((x+4)^2-6\), vertex \((-4,-6)\). ✓</em>
    </div>
    ${gframe(["y = x^2 + 8*x + 10"], { zoom: 12, title: "(x+4)² − 6, vertex (−4, −6)", labels: [{ x: -4, y: -6, t: "vertex", c: "#a3327a" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 4: Leading coefficient ≠ 1</h3>
    <p>Solve \(2x^2+8x+3=0\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Divide by \(2\): \(x^2+4x+1.5=0\Rightarrow x^2+4x=-1.5\).</div>
      <div class="step"><strong>Step 2:</strong> Add \(4\): \((x+2)^2=2.5\).</div>
      <em>Conclusion: \(x=-2\pm\sqrt{2.5}\ (\approx-0.42,\,-3.58)\). ✓</em>
    </div>
    ${gframe(["y = 2*x^2 + 8*x + 3"], { zoom: 12, title: "Roots x = −2 ± √2.5", labels: [{ x: -0.42, y: 0, t: "≈−0.42", c: "#a3327a" }, { x: -3.58, y: 0, t: "≈−3.58", c: "#a3327a" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 5: Cross-check a factorable one</h3>
    <p>Solve \(x^2-2x-8=0\) by completing the square.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(x^2-2x=8\); add \(1\): \((x-1)^2=9\).</div>
      <div class="step"><strong>Step 2:</strong> \(x-1=\pm3\).</div>
      <em>Conclusion: \(x=4\) or \(x=-2\) (same as factoring). ✓</em>
    </div>
    ${gframe(["y = x^2 - 2*x - 8"], { zoom: 10, title: "Roots x = 4 and x = −2", labels: [{ x: 4, y: 0, t: "4", c: "#a3327a" }, { x: -2, y: 0, t: "−2", c: "#a3327a" }] })}
  </div>

  <h2>🟡 Practice Questions</h2>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 1</h3><p>Complete the square: \(x^2+10x\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">Add \(25\). <em>Answer: \((x+5)^2-25\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 2</h3><p>Solve \(x^2+2x-3=0\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\((x+1)^2=4\). <em>Answer: \(x=1,-3\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 3</h3><p>Solve \(x^2-6x+4=0\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\((x-3)^2=5\). <em>Answer: \(x=3\pm\sqrt5\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 4</h3><p>Vertex form of \(y=x^2-4x+7\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">Add &amp; subtract \(4\). <em>Answer: \((x-2)^2+3\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 5 — Challenge</h3><p>Solve \(2x^2-4x-6=0\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">÷2: \(x^2-2x-3=0\to(x-1)^2=4\). <em>Answer: \(x=3,-1\).</em></div></div></details>
  </div>

  <div class="mistake-box" style="background-color:#fdecea;border-left:5px solid #d9534f;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>⚠️ Common Mistakes</h3>
    <ul>
      <li>Adding \(\left(\tfrac{b}{2}\right)^2\) to one side only — you must balance it.</li>
      <li>Forgetting to halve \(b\) before squaring.</li>
      <li>Not factoring out \(a\) first when \(a\neq1\).</li>
    </ul>
  </div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q1: What does completing the square do?</h3><p><em>Rewrites a quadratic as a perfect square so you can solve it or read the vertex.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q2: What's the key step?</h3><p><em>Add \(\left(\frac{b}{2}\right)^2\) and balance it.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q3: What if \(a\neq1\)?</h3><p><em>Factor or divide \(a\) out of the \(x\)-terms first.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q4: Why use it instead of factoring?</h3><p><em>It works for every quadratic, even non-factorable ones.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q5: Why the \(\pm\)?</h3><p><em>Taking a square root gives two values, so two solutions.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q6: Link to vertex form?</h3><p><em>Completing the square <em>is</em> converting to vertex form.</em></p></div>
</div>`)] },

  { code: "5.3", title: "The Quadratic Formula", blocks: [html(String.raw`<div class="lecture-box">
  <h1>📐 The Quadratic Formula</h1>
  <p><strong>Overview.</strong> The quadratic formula solves <em>every</em> quadratic equation \(ax^2+bx+c=0\), whether it factors or not:</p>
  <p style="text-align:center;">\( x=\dfrac{-b\pm\sqrt{b^2-4ac}}{2a} \)</p>

  <h2>📌 How to Use It</h2>
  <p>Write the equation as \(ax^2+bx+c=0\), identify \(a,b,c\) (with their signs), substitute, and simplify. The part under the root, \(b^2-4ac\), is the <strong>discriminant</strong> — it decides how many real solutions there are.</p>

  <h2>🔵 Examples</h2>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 1: Nice whole-number roots</h3>
    <p>Solve \(x^2+5x+6=0\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(a=1,b=5,c=6\): \(x=\dfrac{-5\pm\sqrt{25-24}}{2}\).</div>
      <div class="step"><strong>Step 2:</strong> \(x=\dfrac{-5\pm1}{2}\).</div>
      <em>Conclusion: \(x=-2\) or \(x=-3\). ✓</em>
    </div>
    ${gframe(["y = x^2 + 5*x + 6"], { zoom: 14, title: "Roots x = −2 and x = −3", labels: [{ x: -2, y: 0, t: "−2", c: "#a3327a" }, { x: -3, y: 0, t: "−3", c: "#a3327a" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 2: Irrational roots</h3>
    <p>Solve \(2x^2-4x-3=0\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(a=2,b=-4,c=-3\): \(x=\dfrac{4\pm\sqrt{16+24}}{4}\).</div>
      <div class="step"><strong>Step 2:</strong> \(x=\dfrac{4\pm\sqrt{40}}{4}\approx\dfrac{4\pm6.32}{4}\).</div>
      <em>Conclusion: \(x\approx2.58\) or \(x\approx-0.58\). ✓</em>
    </div>
    ${gframe(["y = 2*x^2 - 4*x - 3"], { zoom: 13, title: "Roots ≈ 2.58 and −0.58", labels: [{ x: 2.58, y: 0, t: "≈2.58", c: "#a3327a" }, { x: -0.58, y: 0, t: "≈−0.58", c: "#a3327a" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 3: A double root</h3>
    <p>Solve \(x^2-6x+9=0\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(x=\dfrac{6\pm\sqrt{36-36}}{2}=\dfrac{6\pm0}{2}\).</div>
      <em>Conclusion: \(x=3\) (one repeated root). ✓</em>
    </div>
    ${gframe(["y = x^2 - 6*x + 9"], { zoom: 12, title: "Double root x = 3 (touches axis)", labels: [{ x: 3, y: 0, t: "3 (double)", c: "#a3327a" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 4: Leading coefficient ≠ 1</h3>
    <p>Solve \(3x^2+2x-1=0\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(x=\dfrac{-2\pm\sqrt{4+12}}{6}=\dfrac{-2\pm4}{6}\).</div>
      <em>Conclusion: \(x=\tfrac13\) or \(x=-1\). ✓</em>
    </div>
    ${gframe(["y = 3*x^2 + 2*x - 1"], { zoom: 16, title: "Roots x = ⅓ and x = −1", labels: [{ x: 0.333, y: 0, t: "⅓", c: "#a3327a" }, { x: -1, y: 0, t: "−1", c: "#a3327a" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 5: No real solutions</h3>
    <p>Solve \(x^2+x+1=0\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Discriminant \(=1-4=-3<0\).</div>
      <em>Conclusion: no real solutions — the parabola never crosses the \(x\)-axis. ✓</em>
    </div>
    ${gframe(["y = x^2 + x + 1"], { zoom: 18, title: "Discriminant < 0 → no x-intercepts" })}
  </div>

  <h2>🟡 Practice Questions</h2>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 1</h3><p>Solve \(x^2+3x-10=0\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\(\dfrac{-3\pm\sqrt{49}}{2}\). <em>Answer: \(x=2,-5\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 2</h3><p>Solve \(x^2-2x-5=0\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\(\dfrac{2\pm\sqrt{24}}{2}\). <em>Answer: \(x=1\pm\sqrt6\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 3</h3><p>Solve \(2x^2+5x+2=0\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\(\dfrac{-5\pm\sqrt{9}}{4}\). <em>Answer: \(x=-\tfrac12,-2\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 4</h3><p>Solve \(x^2-4x+4=0\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">Discriminant \(0\). <em>Answer: \(x=2\) (double).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 5 — Challenge</h3><p>Solve \(3x^2-5x+1=0\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\(\dfrac{5\pm\sqrt{25-12}}{6}\). <em>Answer: \(x=\dfrac{5\pm\sqrt{13}}{6}\).</em></div></div></details>
  </div>

  <div class="mistake-box" style="background-color:#fdecea;border-left:5px solid #d9534f;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>⚠️ Common Mistakes</h3>
    <ul>
      <li>Using \(b\) instead of \(-b\) at the front.</li>
      <li>Not setting the equation to \(0\) before reading \(a,b,c\).</li>
      <li>Dividing only part of the numerator by \(2a\) — divide the whole thing.</li>
    </ul>
  </div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q1: What is the quadratic formula?</h3><p><em>\(x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}\).</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q2: When should I use it?</h3><p><em>For any quadratic — especially when it won't factor.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q3: How do I find \(a,b,c\)?</h3><p><em>They're the coefficients once the equation equals zero.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q4: What's under the root?</h3><p><em>The discriminant \(b^2-4ac\).</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q5: Negative discriminant?</h3><p><em>No real solutions.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q6: Two identical answers?</h3><p><em>A double root — the discriminant is \(0\).</em></p></div>
</div>`)] },
  { code: "5.4", title: "The Discriminant & the Number of Roots", blocks: [html(String.raw`<div class="lecture-box">
  <h1>🔎 The Discriminant &amp; the Number of Roots</h1>
  <p><strong>Overview.</strong> The <strong>discriminant</strong> \(D=b^2-4ac\) is the part of the quadratic formula under the square root. Its sign tells you how many real roots a quadratic has — and how many times the parabola crosses the \(x\)-axis — <em>before</em> you solve.</p>

  <h2>📌 The Three Cases</h2>
  <ul>
    <li>\(D>0\): two distinct real roots (parabola crosses twice).</li>
    <li>\(D=0\): one repeated (double) root (parabola touches the axis).</li>
    <li>\(D<0\): no real roots (parabola misses the axis).</li>
  </ul>

  <h2>🔵 Examples</h2>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 1: Two roots</h3>
    <p>How many real roots does \(x^2-5x+6=0\) have?</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(D=(-5)^2-4(1)(6)=25-24=1>0\).</div>
      <em>Conclusion: two real roots. ✓</em>
    </div>
    ${gframe(["y = x^2 - 5*x + 6"], { zoom: 16, title: "D = 1 > 0 → two roots", labels: [{ x: 2, y: 0, t: "2", c: "#a3327a" }, { x: 3, y: 0, t: "3", c: "#a3327a" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 2: One double root</h3>
    <p>How many real roots does \(x^2-6x+9=0\) have?</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(D=36-36=0\).</div>
      <em>Conclusion: one repeated root (the parabola touches the axis at \(x=3\)). ✓</em>
    </div>
    ${gframe(["y = x^2 - 6*x + 9"], { zoom: 12, title: "D = 0 → one double root", labels: [{ x: 3, y: 0, t: "3", c: "#a3327a" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 3: No real roots</h3>
    <p>How many real roots does \(x^2+x+1=0\) have?</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(D=1-4=-3<0\).</div>
      <em>Conclusion: no real roots. ✓</em>
    </div>
    ${gframe(["y = x^2 + x + 1"], { zoom: 18, title: "D < 0 → no x-intercepts" })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 4: With a coefficient</h3>
    <p>How many real roots does \(2x^2-4x+2=0\) have?</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(D=16-4(2)(2)=16-16=0\).</div>
      <em>Conclusion: one double root (it's \(2(x-1)^2\)). ✓</em>
    </div>
    ${gframe(["y = 2*x^2 - 4*x + 2"], { zoom: 16, title: "D = 0 → double root at x = 1", labels: [{ x: 1, y: 0, t: "1", c: "#a3327a" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 5: Solve for k</h3>
    <p>Find \(k\) so that \(x^2+kx+9=0\) has exactly one root.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> One root → \(D=0\): \(k^2-4(1)(9)=0\).</div>
      <div class="step"><strong>Step 2:</strong> \(k^2=36\Rightarrow k=\pm6\).</div>
      <em>Conclusion: \(k=6\) or \(k=-6\). ✓</em>
    </div>
    ${gframe(["y = x^2 + 6*x + 9"], { zoom: 8, title: "k = 6 gives a double root", labels: [{ x: -3, y: 0, t: "−3", c: "#a3327a" }] })}
  </div>

  <h2>🟡 Practice Questions</h2>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 1</h3><p>How many roots: \(x^2+2x+5=0\)?</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\(D=4-20=-16\). <em>Answer: none.</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 2</h3><p>How many roots: \(x^2-4x+4=0\)?</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\(D=0\). <em>Answer: one (double).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 3</h3><p>How many roots: \(2x^2+3x-1=0\)?</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\(D=9+8=17\). <em>Answer: two.</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 4</h3><p>How many roots: \(x^2+x-6=0\)?</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\(D=1+24=25\). <em>Answer: two.</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 5 — Challenge</h3><p>For what \(k\) does \(x^2-kx+4=0\) have a double root?</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\(k^2-16=0\). <em>Answer: \(k=\pm4\).</em></div></div></details>
  </div>

  <div class="mistake-box" style="background-color:#fdecea;border-left:5px solid #d9534f;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>⚠️ Common Mistakes</h3>
    <ul>
      <li>Reading \(a,b,c\) without first setting the equation to \(0\).</li>
      <li>Sign error in \(b^2\) (it's always positive).</li>
      <li>Treating \(D<0\) as "one root" — it means <strong>none</strong>.</li>
    </ul>
  </div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q1: What is the discriminant?</h3><p><em>\(D=b^2-4ac\).</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q2: \(D>0\)?</h3><p><em>Two distinct real roots.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q3: \(D=0\)?</h3><p><em>One repeated (double) root.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q4: \(D<0\)?</h3><p><em>No real roots.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q5: How does it connect to the graph?</h3><p><em>It's the number of \(x\)-intercepts.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q6: Why is it useful?</h3><p><em>It tells you the root count without solving the equation.</em></p></div>
</div>`)] },

  { code: "5.5", title: "Quadratic Word Problems", blocks: [html(String.raw`<div class="lecture-box">
  <h1>🚀 Quadratic Word Problems</h1>
  <p><strong>Overview.</strong> Quadratics model projectile motion, areas, and revenue. The <strong>vertex</strong> gives a maximum or minimum; the <strong>zeros</strong> give where the quantity is zero (e.g. when a ball lands). Always interpret — and reject answers that don't make physical sense.</p>

  <h2>📌 The Plan</h2>
  <ol class="math">
    <li>Define the variable(s) and write the quadratic model.</li>
    <li>Decide what's asked: a maximum/minimum (vertex) or a specific value (solve).</li>
    <li>Solve, then interpret in context — discard negative time/length.</li>
  </ol>

  <h2>🔵 Examples</h2>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 1: Maximum height</h3>
    <p>A ball's height is \(h=-5t^2+20t\) (metres, seconds). Find its maximum height.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Vertex \(t=-\dfrac{20}{2(-5)}=2\).</div>
      <div class="step"><strong>Step 2:</strong> \(h=-5(4)+40=20\).</div>
      <em>Conclusion: max height \(20\) m at \(t=2\) s. ✓</em>
    </div>
    ${gframe(["y = -5*x^2 + 20*x"], { zoom: 18, zoomY: 6, title: "Max height 20 m at t = 2 s", labels: [{ x: 2, y: 20, t: "max", c: "#a3327a" }, { x: 4, y: 0, t: "lands t=4", c: "#3b7d3b" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 2: Maximum area</h3>
    <p>A rectangle has perimeter \(20\) m. What width gives the greatest area?</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(l+w=10\), so \(A=w(10-w)=10w-w^2\).</div>
      <div class="step"><strong>Step 2:</strong> Vertex \(w=\dfrac{10}{2}=5\), \(A=25\).</div>
      <em>Conclusion: width \(5\) m gives max area \(25\) m² (a square). ✓</em>
    </div>
    ${gframe(["y = 10*x - x^2"], { zoom: 14, zoomY: 5, title: "Max area 25 at w = 5", labels: [{ x: 5, y: 25, t: "max (5, 25)", c: "#a3327a" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 3: Find dimensions</h3>
    <p>A garden has area \(40\) m² and its length is \(3\) m more than its width. Find the dimensions.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(w(w+3)=40\Rightarrow w^2+3w-40=0\).</div>
      <div class="step"><strong>Step 2:</strong> \((w+8)(w-5)=0\Rightarrow w=5\) (reject \(-8\)).</div>
      <em>Conclusion: \(5\) m by \(8\) m. ✓</em>
    </div>
    ${gframe(["y = x^2 + 3*x - 40"], { zoom: 7, title: "w = 5 (reject −8)", labels: [{ x: 5, y: 0, t: "5", c: "#a3327a" }, { x: -8, y: 0, t: "−8 (reject)", c: "#888780" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 4: Maximum revenue</h3>
    <p>Revenue is \(R=p(100-2p)\) for price \(p\). What price maximizes revenue?</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(R=100p-2p^2\); vertex \(p=\dfrac{100}{2(2)}=25\).</div>
      <div class="step"><strong>Step 2:</strong> \(R=25(100-50)=1250\).</div>
      <em>Conclusion: price \(\$25\) gives max revenue \(\$1250\). ✓</em>
    </div>
    ${gframe(["y = 100*x - 2*x^2"], { zoom: 5, zoomY: 0.12, title: "Max revenue $1250 at p = $25", labels: [{ x: 25, y: 1250, t: "max", c: "#a3327a" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 5: Reaching a height</h3>
    <p>With \(h=-5t^2+30t\), at what times is the height \(40\) m?</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(-5t^2+30t=40\Rightarrow t^2-6t+8=0\).</div>
      <div class="step"><strong>Step 2:</strong> \((t-2)(t-4)=0\).</div>
      <em>Conclusion: at \(t=2\) s (rising) and \(t=4\) s (falling). ✓</em>
    </div>
    ${gframe(["y = -5*x^2 + 30*x", "y = 40"], { zoom: 12, zoomY: 4, title: "Height = 40 m at t = 2 and t = 4", labels: [{ x: 2, y: 40, t: "t=2", c: "#a3327a" }, { x: 4, y: 40, t: "t=4", c: "#a3327a" }] })}
  </div>

  <h2>🟡 Practice Questions</h2>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 1</h3><p>\(h=-5t^2+10t\). Find the maximum height.</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">Vertex \(t=1\). <em>Answer: \(5\) m.</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 2</h3><p>A rectangle has perimeter \(24\). What is the maximum area?</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\(w=6\). <em>Answer: \(36\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 3</h3><p>Two consecutive integers multiply to \(56\). Find them.</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\(n^2+n-56=0\to(n+8)(n-7)\). <em>Answer: \(7\) and \(8\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 4</h3><p>\(h=-5t^2+20t\). When does the ball hit the ground?</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\(-5t(t-4)=0\). <em>Answer: \(t=4\) s.</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 5 — Challenge</h3><p>A ball follows \(h=-5t^2+25t+30\). When does it land?</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\(t^2-5t-6=0\to(t-6)(t+1)\). <em>Answer: \(t=6\) s.</em></div></div></details>
  </div>

  <div class="mistake-box" style="background-color:#fdecea;border-left:5px solid #d9534f;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>⚠️ Common Mistakes</h3>
    <ul>
      <li>Keeping a negative time or length that isn't physically possible.</li>
      <li>Confusing the time of the maximum with the maximum value itself.</li>
      <li>Dropping units in the final answer.</li>
    </ul>
  </div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q1: What does the vertex give in projectile motion?</h3><p><em>The maximum height and the time it occurs.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q2: What do the zeros give?</h3><p><em>When the height is \(0\) — the start and landing times.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q3: How do I maximize area with a fixed perimeter?</h3><p><em>Find the vertex of the area quadratic (it's a square).</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q4: Which solutions do I reject?</h3><p><em>Negative times or lengths — they aren't physical.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q5: What's the first step?</h3><p><em>Define variables and write the quadratic model.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q6: Should I check the context?</h3><p><em>Yes — the answer must make real-world sense.</em></p></div>
</div>`)] },

  { code: "5.6", title: "Linear–Quadratic Systems", blocks: [html(String.raw`<div class="lecture-box">
  <h1>📉 Linear–Quadratic Systems</h1>
  <p><strong>Overview.</strong> A line and a parabola can meet at <strong>two</strong>, <strong>one</strong>, or <strong>zero</strong> points. Solve by substituting the line into the parabola, which gives a single quadratic — and its discriminant tells you how many intersection points there are.</p>

  <h2>📌 The Method</h2>
  <ol class="math">
    <li>Substitute the line's \(y\) into the parabola (or set them equal).</li>
    <li>Rearrange to \(0\) and solve the quadratic.</li>
    <li>Substitute each \(x\) back into the line to get \(y\).</li>
  </ol>
  <p>The discriminant of the combined quadratic: \(>0\) two points, \(=0\) one (tangent), \(<0\) none.</p>

  <h2>🔵 Examples</h2>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 1: Two intersection points</h3>
    <p>Solve \( \begin{cases} y=x^2 \\ y=x+2 \end{cases} \).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(x^2=x+2\Rightarrow x^2-x-2=0\).</div>
      <div class="step"><strong>Step 2:</strong> \((x-2)(x+1)=0\Rightarrow x=2,-1\).</div>
      <em>Conclusion: \((2,4)\) and \((-1,1)\). ✓</em>
    </div>
    ${gframe(["y = x^2", "y = x + 2"], { zoom: 16, title: "Meets at (2, 4) and (−1, 1)", labels: [{ x: 2, y: 4, t: "(2, 4)", c: "#a3327a" }, { x: -1, y: 1, t: "(−1, 1)", c: "#a3327a" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 2: A shifted parabola</h3>
    <p>Solve \( \begin{cases} y=x^2-4 \\ y=2x-1 \end{cases} \).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(x^2-4=2x-1\Rightarrow x^2-2x-3=0\).</div>
      <div class="step"><strong>Step 2:</strong> \((x-3)(x+1)=0\Rightarrow x=3,-1\).</div>
      <em>Conclusion: \((3,5)\) and \((-1,-3)\). ✓</em>
    </div>
    ${gframe(["y = x^2 - 4", "y = 2*x - 1"], { zoom: 12, title: "Meets at (3, 5) and (−1, −3)", labels: [{ x: 3, y: 5, t: "(3, 5)", c: "#a3327a" }, { x: -1, y: -3, t: "(−1, −3)", c: "#a3327a" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 3: A tangent line (one point)</h3>
    <p>Solve \( \begin{cases} y=x^2 \\ y=2x-1 \end{cases} \).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(x^2=2x-1\Rightarrow x^2-2x+1=0\).</div>
      <div class="step"><strong>Step 2:</strong> \((x-1)^2=0\Rightarrow x=1\) (double).</div>
      <em>Conclusion: tangent at \((1,1)\) — one point. ✓</em>
    </div>
    ${gframe(["y = x^2", "y = 2*x - 1"], { zoom: 16, title: "Tangent — one point (1, 1)", labels: [{ x: 1, y: 1, t: "(1, 1)", c: "#a3327a" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 4: No intersection</h3>
    <p>Solve \( \begin{cases} y=x^2+2 \\ y=x-1 \end{cases} \).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(x^2+2=x-1\Rightarrow x^2-x+3=0\).</div>
      <div class="step"><strong>Step 2:</strong> \(D=1-12=-11<0\).</div>
      <em>Conclusion: no real intersection. ✓</em>
    </div>
    ${gframe(["y = x^2 + 2", "y = x - 1"], { zoom: 16, title: "D < 0 → no intersection" })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 5: A downward parabola</h3>
    <p>Solve \( \begin{cases} y=-x^2+4 \\ y=-x+2 \end{cases} \).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(-x^2+4=-x+2\Rightarrow x^2-x-2=0\).</div>
      <div class="step"><strong>Step 2:</strong> \((x-2)(x+1)=0\Rightarrow x=2,-1\).</div>
      <em>Conclusion: \((2,0)\) and \((-1,3)\). ✓</em>
    </div>
    ${gframe(["y = -x^2 + 4", "y = -x + 2"], { zoom: 16, title: "Meets at (2, 0) and (−1, 3)", labels: [{ x: 2, y: 0, t: "(2, 0)", c: "#a3327a" }, { x: -1, y: 3, t: "(−1, 3)", c: "#a3327a" }] })}
  </div>

  <h2>🟡 Practice Questions</h2>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 1</h3><p>Solve \( \begin{cases} y=x^2 \\ y=x+6 \end{cases} \).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\(x^2-x-6=0\to(x-3)(x+2)\). <em>Answer: \((3,9)\) and \((-2,4)\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 2</h3><p>Solve \( \begin{cases} y=x^2-1 \\ y=3 \end{cases} \).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\(x^2=4\). <em>Answer: \((2,3)\) and \((-2,3)\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 3</h3><p>How many intersections: \( \begin{cases} y=x^2 \\ y=2x-1 \end{cases} \)?</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\((x-1)^2=0\). <em>Answer: one (tangent).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 4</h3><p>How many intersections: \( \begin{cases} y=x^2+1 \\ y=-x \end{cases} \)?</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\(x^2+x+1=0,\ D<0\). <em>Answer: none.</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 5 — Challenge</h3><p>Solve \( \begin{cases} y=x^2-2x \\ y=x \end{cases} \).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\(x^2-3x=0\to x(x-3)\). <em>Answer: \((0,0)\) and \((3,3)\).</em></div></div></details>
  </div>

  <div class="mistake-box" style="background-color:#fdecea;border-left:5px solid #d9534f;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>⚠️ Common Mistakes</h3>
    <ul>
      <li>Finding \(x\) but forgetting to find \(y\).</li>
      <li>Sign errors when moving all terms to one side.</li>
      <li>Forgetting that there may be \(0\) or \(1\) solution, not always \(2\).</li>
    </ul>
  </div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q1: How do I solve a linear–quadratic system?</h3><p><em>Substitute the line into the parabola and solve the quadratic.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q2: How many intersection points are possible?</h3><p><em>Zero, one, or two.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q3: What tells the count?</h3><p><em>The discriminant of the combined quadratic.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q4: What does one intersection mean?</h3><p><em>The line is tangent to the parabola.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q5: After finding \(x\)?</h3><p><em>Substitute into the line to get \(y\).</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q6: How do I check?</h3><p><em>Both equations should hold for each point.</em></p></div>
</div>`)] },

  { code: "6.1", title: "Congruence & Similar Triangles", blocks: [html(String.raw`<div class="lecture-box">
  <h1>🔺 Congruence &amp; Similar Triangles</h1>
  <p><strong>Overview.</strong> <strong>Similar</strong> triangles have the same shape: equal corresponding angles and <em>proportional</em> corresponding sides. That proportion is the engine behind all of trigonometry and indirect measurement.</p>

  <h2>📌 Conditions for Similarity</h2>
  <ul>
    <li><strong>AA</strong> — two pairs of equal angles.</li>
    <li><strong>SSS</strong> — all three side ratios equal.</li>
    <li><strong>SAS</strong> — two side ratios equal with the included angle equal.</li>
  </ul>
  <p>Once triangles are similar, corresponding sides are in a constant ratio (the <strong>scale factor</strong>): \(\dfrac{a'}{a}=\dfrac{b'}{b}=\dfrac{c'}{c}\).</p>

  <h2>🔵 Examples</h2>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 1: Spot the ratio</h3>
    <p>Are triangles with sides \(3,4,5\) and \(6,8,10\) similar?</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(\dfrac{6}{3}=\dfrac{8}{4}=\dfrac{10}{5}=2\).</div>
      <em>Conclusion: yes — similar with scale factor \(2\) (SSS). ✓</em>
    </div>
    ${gframe([], { zoom: 22, title: "3-4-5 triangle (the 6-8-10 is ×2)", labels: [{ x: 0, y: 0, t: "A", c: "#2563a0" }, { x: 4, y: 0, t: "B", c: "#2563a0" }, { x: 4, y: 3, t: "C", c: "#a3327a" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 2: Find a missing side</h3>
    <p>\(\triangle ABC\sim\triangle DEF\) with \(AB=4\), \(BC=6\), and \(DE=6\). Find \(EF\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Scale factor \(=\dfrac{DE}{AB}=\dfrac{6}{4}=1.5\).</div>
      <div class="step"><strong>Step 2:</strong> \(EF=BC\times1.5=6\times1.5=9\).</div>
      <em>Conclusion: \(EF=9\). ✓</em>
    </div>
    ${gframe([], { zoom: 18, title: "Scale factor 1.5 → EF = 9", labels: [{ x: 0, y: 0, t: "D", c: "#2563a0" }, { x: 6, y: 0, t: "E", c: "#2563a0" }, { x: 6, y: 9, t: "F", c: "#a3327a" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 3: AA similarity</h3>
    <p>Two triangles each have angles \(40°\) and \(75°\). Are they similar?</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Two pairs of equal angles → the third pair is equal too (angles sum to \(180°\)).</div>
      <em>Conclusion: yes — similar by AA. ✓</em>
    </div>
    ${gframe([], { zoom: 22, title: "AA: two equal angles → similar", labels: [{ x: 0, y: 0, t: "40°", c: "#2563a0" }, { x: 5, y: 0, t: "75°", c: "#2563a0" }, { x: 3, y: 3, t: "", c: "#a3327a" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 4: Use the scale factor both ways</h3>
    <p>A small triangle has sides \(2\) and \(3\); a similar large one has the side matching \(2\) equal to \(5\). Find the side matching \(3\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Scale factor \(=\dfrac{5}{2}=2.5\).</div>
      <div class="step"><strong>Step 2:</strong> \(3\times2.5=7.5\).</div>
      <em>Conclusion: the matching side is \(7.5\). ✓</em>
    </div>
    ${gframe([], { zoom: 16, title: "Scale factor 2.5 → 3 becomes 7.5", labels: [{ x: 0, y: 0, t: "·", c: "#2563a0" }, { x: 5, y: 0, t: "5", c: "#2563a0" }, { x: 5, y: 7.5, t: "7.5", c: "#a3327a" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 5: Shadow problem</h3>
    <p>A \(6\)-ft person casts a \(4\)-ft shadow. A tree casts a \(20\)-ft shadow at the same time. How tall is the tree?</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> The triangles are similar: \(\dfrac{\text{height}}{\text{shadow}}\) is constant.</div>
      <div class="step"><strong>Step 2:</strong> \(\dfrac{h}{20}=\dfrac{6}{4}\Rightarrow h=30\).</div>
      <em>Conclusion: the tree is \(30\) ft tall. ✓</em>
    </div>
    ${gframe([], { zoom: 7, title: "Tree height = 30 ft", labels: [{ x: 0, y: 0, t: "", c: "#2563a0" }, { x: 20, y: 0, t: "shadow 20", c: "#2563a0" }, { x: 20, y: 30, t: "tree 30", c: "#a3327a" }] })}
  </div>

  <h2>🟡 Practice Questions</h2>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 1</h3><p>Are triangles \(5,12,13\) and \(10,24,26\) similar?</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">All ratios \(=2\). <em>Answer: yes (scale factor 2).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 2</h3><p>\(\triangle ABC\sim\triangle DEF\), \(AB=3\), \(DE=12\). What is the scale factor?</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\(12/3\). <em>Answer: \(4\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 3</h3><p>Similar triangles: a side of \(5\) corresponds to \(15\). A side of \(8\) corresponds to what?</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">Scale factor \(3\). <em>Answer: \(24\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 4</h3><p>Do two triangles with angles \(30°,90°\) and \(30°,90°\) have to be similar?</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">Two equal angles → AA. <em>Answer: yes.</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 5 — Challenge</h3><p>A \(1.5\)-m stick casts a \(2\)-m shadow; a flagpole casts a \(16\)-m shadow. Find the pole's height.</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\(\dfrac{h}{16}=\dfrac{1.5}{2}\). <em>Answer: \(12\) m.</em></div></div></details>
  </div>

  <div class="mistake-box" style="background-color:#fdecea;border-left:5px solid #d9534f;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>⚠️ Common Mistakes</h3>
    <ul>
      <li>Matching sides to the wrong corresponding sides.</li>
      <li>Flipping the ratio (put corresponding sides in the same order on top and bottom).</li>
      <li>Assuming equal <em>perimeter</em> means similar — it's the angles/ratios that matter.</li>
    </ul>
  </div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q1: What makes triangles similar?</h3><p><em>Equal corresponding angles and proportional corresponding sides.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q2: What is AA similarity?</h3><p><em>Two pairs of equal angles is enough to prove similarity.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q3: What is the scale factor?</h3><p><em>The constant ratio between corresponding sides.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q4: How do I find a missing side?</h3><p><em>Multiply the corresponding side by the scale factor.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q5: Difference between congruent and similar?</h3><p><em>Congruent = same size and shape; similar = same shape, possibly different size.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q6: Why does similarity matter?</h3><p><em>It lets us measure heights/distances indirectly — and it underlies trigonometry.</em></p></div>
</div>`)] },

  { code: "6.2", title: "Solving Problems with Similar Triangles", blocks: [html(String.raw`<div class="lecture-box">
  <h1>📐 Solving Problems with Similar Triangles</h1>
  <p><strong>Overview.</strong> Similar triangles let you measure things you can't reach — the height of a building, the width of a river — by setting up a <strong>proportion</strong> of corresponding sides.</p>

  <h2>📌 The Method</h2>
  <ol class="math">
    <li>Draw and label both triangles; identify corresponding sides.</li>
    <li>Write a proportion with matching sides in the same positions.</li>
    <li>Cross-multiply and solve; interpret in context.</li>
  </ol>

  <h2>🔵 Examples</h2>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 1: Height of a tree</h3>
    <p>A \(2\)-m stick casts a \(3\)-m shadow; a tree casts a \(18\)-m shadow. Find the tree's height.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(\dfrac{h}{18}=\dfrac{2}{3}\).</div>
      <div class="step"><strong>Step 2:</strong> \(h=\dfrac{2}{3}\times18=12\).</div>
      <em>Conclusion: \(12\) m tall. ✓</em>
    </div>
    ${gframe([], { zoom: 8, title: "Tree height = 12 m", labels: [{ x: 0, y: 0, t: "", c: "#2563a0" }, { x: 18, y: 0, t: "shadow 18", c: "#2563a0" }, { x: 18, y: 12, t: "tree 12", c: "#a3327a" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 2: Width of a river</h3>
    <p>Similar triangles give \(\dfrac{w}{40}=\dfrac{15}{20}\) for a river width \(w\). Find \(w\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(w=\dfrac{15}{20}\times40=30\).</div>
      <em>Conclusion: the river is \(30\) m wide. ✓</em>
    </div>
    ${gframe([], { zoom: 5, title: "River width = 30 m", labels: [{ x: 0, y: 0, t: "", c: "#2563a0" }, { x: 40, y: 0, t: "40", c: "#2563a0" }, { x: 0, y: 30, t: "w = 30", c: "#a3327a" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 3: Nested triangles</h3>
    <p>A smaller triangle inside a larger one shares the apex angle. If \(\dfrac{x}{8}=\dfrac{6}{4}\), find \(x\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Cross-multiply: \(4x=48\).</div>
      <div class="step"><strong>Step 2:</strong> \(x=12\).</div>
      <em>Conclusion: \(x=12\). ✓</em>
    </div>
    ${gframe([], { zoom: 16, title: "x = 12", labels: [{ x: 0, y: 0, t: "apex", c: "#a3327a" }, { x: 8, y: 0, t: "8", c: "#2563a0" }, { x: 0, y: 12, t: "x = 12", c: "#2563a0" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 4: Map scale</h3>
    <p>On a map, \(2\) cm represents \(5\) km. A road measures \(7\) cm. How long is it?</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(\dfrac{d}{7}=\dfrac{5}{2}\).</div>
      <div class="step"><strong>Step 2:</strong> \(d=\dfrac{5}{2}\times7=17.5\).</div>
      <em>Conclusion: \(17.5\) km. ✓</em>
    </div>
    ${gframe([], { zoom: 16, title: "Road = 17.5 km", labels: [{ x: 0, y: 0, t: "scale 2cm : 5km", c: "#2563a0" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 5: Building height with a mirror</h3>
    <p>A mirror trick gives \(\dfrac{H}{1.6}=\dfrac{12}{2}\) for a building height \(H\). Find \(H\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(H=1.6\times\dfrac{12}{2}=1.6\times6=9.6\).</div>
      <em>Conclusion: \(9.6\) m. ✓</em>
    </div>
    ${gframe([], { zoom: 9, title: "Building H = 9.6 m", labels: [{ x: 0, y: 0, t: "", c: "#2563a0" }, { x: 12, y: 0, t: "12", c: "#2563a0" }, { x: 12, y: 9.6, t: "H = 9.6", c: "#a3327a" }] })}
  </div>

  <h2>🟡 Practice Questions</h2>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 1</h3><p>A \(1\)-m stick casts a \(0.5\)-m shadow; a pole casts a \(4\)-m shadow. Pole height?</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\(\dfrac{h}{4}=\dfrac{1}{0.5}\). <em>Answer: \(8\) m.</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 2</h3><p>Solve \(\dfrac{x}{10}=\dfrac{9}{6}\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\(x=\tfrac{9}{6}\cdot10\). <em>Answer: \(15\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 3</h3><p>Map: \(3\) cm = \(12\) km. A trail is \(5\) cm. Real length?</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\(\dfrac{d}{5}=\dfrac{12}{3}\). <em>Answer: \(20\) km.</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 4</h3><p>Solve \(\dfrac{6}{x}=\dfrac{8}{12}\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\(8x=72\). <em>Answer: \(x=9\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 5 — Challenge</h3><p>A \(1.8\)-m person stands \(3\) m from a lamp and casts a \(2\)-m shadow. How tall is the lamp? (Use \(\dfrac{H}{3+2}=\dfrac{1.8}{2}\).)</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\(H=\dfrac{1.8}{2}\times5\). <em>Answer: \(4.5\) m.</em></div></div></details>
  </div>

  <div class="mistake-box" style="background-color:#fdecea;border-left:5px solid #d9534f;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>⚠️ Common Mistakes</h3>
    <ul>
      <li>Putting corresponding sides in different orders across the proportion.</li>
      <li>Cross-multiplying incorrectly.</li>
      <li>Forgetting units or mixing cm with km.</li>
    </ul>
  </div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q1: How do similar triangles help measure things?</h3><p><em>They give a proportion linking a known and an unknown length.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q2: How do I set up the proportion?</h3><p><em>Match corresponding sides in the same positions, top and bottom.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q3: How do I solve it?</h3><p><em>Cross-multiply and isolate the unknown.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q4: What's a real use?</h3><p><em>Shadows, mirrors, and map scales to find heights and distances.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q5: Why are the triangles similar in a shadow problem?</h3><p><em>The sun's rays make equal angles, giving AA similarity.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q6: How do I check?</h3><p><em>The two ratios should be equal after substituting the answer.</em></p></div>
</div>`)] },

  { code: "6.3", title: "The Primary Trigonometric Ratios", blocks: [html(String.raw`<div class="lecture-box">
  <h1>📐 The Primary Trigonometric Ratios</h1>
  <p><strong>Overview.</strong> In a right triangle, the three primary ratios — <strong>sine</strong>, <strong>cosine</strong>, and <strong>tangent</strong> — link an acute angle to the sides. Remember <strong>SOH CAH TOA</strong>.</p>

  <h2>📌 Labelling the Sides (relative to angle θ)</h2>
  <ul>
    <li><strong>Hypotenuse</strong> — the longest side, opposite the right angle.</li>
    <li><strong>Opposite</strong> — the side across from \(\theta\).</li>
    <li><strong>Adjacent</strong> — the side next to \(\theta\) (not the hypotenuse).</li>
  </ul>

  <h2>📌 SOH CAH TOA</h2>
  <p style="text-align:center;">\( \sin\theta=\dfrac{\text{opp}}{\text{hyp}},\quad \cos\theta=\dfrac{\text{adj}}{\text{hyp}},\quad \tan\theta=\dfrac{\text{opp}}{\text{adj}} \)</p>

  <h2>🔵 Examples</h2>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 1: Write all three ratios</h3>
    <p>In a right triangle, the angle \(\theta\) at \(A\) has opposite \(=3\), adjacent \(=4\), hypotenuse \(=5\). Write \(\sin\theta,\cos\theta,\tan\theta\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(\sin\theta=\dfrac{3}{5}\), \(\cos\theta=\dfrac{4}{5}\), \(\tan\theta=\dfrac{3}{4}\).</div>
      <em>Conclusion: \(\sin=0.6,\ \cos=0.8,\ \tan=0.75\). ✓</em>
    </div>
    ${gframe([], { zoom: 26, title: "opp 3, adj 4, hyp 5", labels: [{ x: 0, y: 0, t: "θ (A)", c: "#a3327a" }, { x: 4, y: 0, t: "B", c: "#2563a0" }, { x: 4, y: 3, t: "C", c: "#2563a0" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 2: Identify opposite and adjacent</h3>
    <p>For angle \(\theta\) with opposite \(=5\), adjacent \(=12\), find the hypotenuse and \(\sin\theta\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Hypotenuse \(=\sqrt{5^2+12^2}=13\).</div>
      <div class="step"><strong>Step 2:</strong> \(\sin\theta=\dfrac{5}{13}\).</div>
      <em>Conclusion: hyp \(=13\), \(\sin\theta=\tfrac{5}{13}\). ✓</em>
    </div>
    ${gframe([], { zoom: 12, title: "5-12-13 right triangle", labels: [{ x: 0, y: 0, t: "θ", c: "#a3327a" }, { x: 12, y: 0, t: "adj 12", c: "#2563a0" }, { x: 12, y: 5, t: "opp 5", c: "#2563a0" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 3: Tangent only</h3>
    <p>A right triangle has opposite \(=8\) and adjacent \(=6\) for angle \(\theta\). Find \(\tan\theta\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(\tan\theta=\dfrac{\text{opp}}{\text{adj}}=\dfrac{8}{6}=\dfrac{4}{3}\).</div>
      <em>Conclusion: \(\tan\theta=\tfrac43\approx1.33\). ✓</em>
    </div>
    ${gframe([], { zoom: 14, title: "tan θ = 8/6 = 4/3", labels: [{ x: 0, y: 0, t: "θ", c: "#a3327a" }, { x: 6, y: 0, t: "adj 6", c: "#2563a0" }, { x: 6, y: 8, t: "opp 8", c: "#2563a0" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 4: Evaluate with a calculator</h3>
    <p>Find \(\sin40°\), \(\cos40°\), and \(\tan40°\) (to 3 decimals).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Make sure the calculator is in <strong>degree</strong> mode.</div>
      <em>Conclusion: \(\sin40°\approx0.643\), \(\cos40°\approx0.766\), \(\tan40°\approx0.839\). ✓</em>
    </div>
    ${gframe([], { zoom: 22, title: "Use degree mode on the calculator", labels: [{ x: 0, y: 0, t: "θ = 40°", c: "#a3327a" }, { x: 4, y: 0, t: "", c: "#2563a0" }, { x: 4, y: 3.36, t: "", c: "#2563a0" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 5: Different angle, same triangle</h3>
    <p>In the \(3\)-\(4\)-\(5\) triangle, write \(\sin,\cos,\tan\) for the <em>other</em> acute angle \(\phi\) (opposite \(=4\), adjacent \(=3\)).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(\sin\phi=\dfrac{4}{5},\ \cos\phi=\dfrac{3}{5},\ \tan\phi=\dfrac{4}{3}\).</div>
      <em>Conclusion: opposite and adjacent swap when the angle changes. ✓</em>
    </div>
    ${gframe([], { zoom: 26, title: "Other angle: opp 4, adj 3", labels: [{ x: 0, y: 0, t: "A", c: "#2563a0" }, { x: 4, y: 0, t: "B", c: "#2563a0" }, { x: 4, y: 3, t: "φ (C)", c: "#a3327a" }] })}
  </div>

  <h2>🟡 Practice Questions</h2>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 1</h3><p>opp \(=6\), hyp \(=10\). Find \(\sin\theta\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \(\tfrac{6}{10}=0.6\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 2</h3><p>adj \(=8\), hyp \(=17\). Find \(\cos\theta\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \(\tfrac{8}{17}\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 3</h3><p>opp \(=7\), adj \(=24\). Find \(\tan\theta\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \(\tfrac{7}{24}\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 4</h3><p>Evaluate \(\cos60°\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \(0.5\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 5 — Challenge</h3><p>opp \(=9\), adj \(=12\). Find the hypotenuse and \(\sin\theta\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">hyp \(=\sqrt{81+144}=15\). <em>Answer: hyp \(15\), \(\sin\theta=\tfrac{9}{15}=0.6\).</em></div></div></details>
  </div>

  <div class="mistake-box" style="background-color:#fdecea;border-left:5px solid #d9534f;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>⚠️ Common Mistakes</h3>
    <ul>
      <li>Mixing up opposite and adjacent — they depend on which angle you're using.</li>
      <li>Using the wrong ratio (check SOH CAH TOA).</li>
      <li>Calculator in radian mode instead of degree mode.</li>
    </ul>
  </div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q1: What is SOH CAH TOA?</h3><p><em>\(\sin=\frac{opp}{hyp}\), \(\cos=\frac{adj}{hyp}\), \(\tan=\frac{opp}{adj}\).</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q2: Which side is the hypotenuse?</h3><p><em>The longest side, opposite the right angle.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q3: How do I tell opposite from adjacent?</h3><p><em>Relative to the angle \(\theta\): opposite is across from it, adjacent is beside it.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q4: Do the ratios depend on the triangle's size?</h3><p><em>No — only on the angle (that's why similar triangles share them).</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q5: What calculator mode do I need?</h3><p><em>Degree mode for these problems.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q6: What happens to opp/adj for the other acute angle?</h3><p><em>They swap.</em></p></div>
</div>`)] },
  { code: "6.4", title: "Finding Side Lengths", blocks: [html(String.raw`<div class="lecture-box">
  <h1>📏 Finding Side Lengths</h1>
  <p><strong>Overview.</strong> Given an angle and one side of a right triangle, you can find another side. The skill is choosing the ratio (\(\sin,\cos,\tan\)) that connects the side you <em>know</em> to the side you <em>want</em>.</p>

  <h2>📌 Choose the Ratio</h2>
  <p>Label the sides relative to the angle, see which two the question involves, and pick the matching ratio from SOH CAH TOA. If the unknown is on top, multiply; if it's on the bottom, divide.</p>

  <h2>🔵 Examples</h2>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 1: Find the opposite side</h3>
    <p>Angle \(30°\), hypotenuse \(10\). Find the opposite side.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(\sin30°=\dfrac{\text{opp}}{10}\).</div>
      <div class="step"><strong>Step 2:</strong> opp \(=10\sin30°=10(0.5)=5\).</div>
      <em>Conclusion: opposite \(=5\). ✓</em>
    </div>
    ${gframe([], { zoom: 16, title: "opp = 10 sin 30° = 5", labels: [{ x: 0, y: 0, t: "30°", c: "#a3327a" }, { x: 8.66, y: 0, t: "adj", c: "#2563a0" }, { x: 8.66, y: 5, t: "opp 5", c: "#2563a0" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 2: Find the adjacent side</h3>
    <p>Angle \(40°\), hypotenuse \(8\). Find the adjacent side.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(\cos40°=\dfrac{\text{adj}}{8}\).</div>
      <div class="step"><strong>Step 2:</strong> adj \(=8\cos40°\approx6.13\).</div>
      <em>Conclusion: adjacent \(\approx6.13\). ✓</em>
    </div>
    ${gframe([], { zoom: 18, title: "adj = 8 cos 40° ≈ 6.13", labels: [{ x: 0, y: 0, t: "40°", c: "#a3327a" }, { x: 6.13, y: 0, t: "adj 6.13", c: "#2563a0" }, { x: 6.13, y: 5.14, t: "", c: "#2563a0" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 3: Use tangent</h3>
    <p>Angle \(35°\), adjacent \(12\). Find the opposite side.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(\tan35°=\dfrac{\text{opp}}{12}\).</div>
      <div class="step"><strong>Step 2:</strong> opp \(=12\tan35°\approx8.40\).</div>
      <em>Conclusion: opposite \(\approx8.40\). ✓</em>
    </div>
    ${gframe([], { zoom: 12, title: "opp = 12 tan 35° ≈ 8.40", labels: [{ x: 0, y: 0, t: "35°", c: "#a3327a" }, { x: 12, y: 0, t: "adj 12", c: "#2563a0" }, { x: 12, y: 8.4, t: "opp 8.4", c: "#2563a0" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 4: Unknown hypotenuse</h3>
    <p>Angle \(50°\), opposite \(7\). Find the hypotenuse.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(\sin50°=\dfrac{7}{\text{hyp}}\).</div>
      <div class="step"><strong>Step 2:</strong> hyp \(=\dfrac{7}{\sin50°}\approx9.14\).</div>
      <em>Conclusion: hypotenuse \(\approx9.14\). ✓</em>
    </div>
    ${gframe([], { zoom: 14, title: "hyp = 7 ÷ sin 50° ≈ 9.14", labels: [{ x: 0, y: 0, t: "50°", c: "#a3327a" }, { x: 5.87, y: 0, t: "adj", c: "#2563a0" }, { x: 5.87, y: 7, t: "opp 7", c: "#2563a0" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 5: Unknown in the denominator</h3>
    <p>Angle \(25°\), opposite \(5\). Find the adjacent side.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(\tan25°=\dfrac{5}{\text{adj}}\).</div>
      <div class="step"><strong>Step 2:</strong> adj \(=\dfrac{5}{\tan25°}\approx10.7\).</div>
      <em>Conclusion: adjacent \(\approx10.7\). ✓</em>
    </div>
    ${gframe([], { zoom: 12, title: "adj = 5 ÷ tan 25° ≈ 10.7", labels: [{ x: 0, y: 0, t: "25°", c: "#a3327a" }, { x: 10.7, y: 0, t: "adj 10.7", c: "#2563a0" }, { x: 10.7, y: 5, t: "opp 5", c: "#2563a0" }] })}
  </div>

  <h2>🟡 Practice Questions</h2>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 1</h3><p>Angle \(60°\), hyp \(20\). Find the opposite side.</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\(20\sin60°\). <em>Answer: \(\approx17.3\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 2</h3><p>Angle \(45°\), adjacent \(10\). Find the opposite side.</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\(10\tan45°\). <em>Answer: \(10\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 3</h3><p>Angle \(30°\), opposite \(6\). Find the hypotenuse.</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\(6\div\sin30°\). <em>Answer: \(12\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 4</h3><p>Angle \(70°\), hyp \(15\). Find the adjacent side.</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\(15\cos70°\). <em>Answer: \(\approx5.13\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 5 — Challenge</h3><p>Angle \(38°\), opposite \(9\). Find the adjacent side.</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\(9\div\tan38°\). <em>Answer: \(\approx11.5\).</em></div></div></details>
  </div>

  <div class="mistake-box" style="background-color:#fdecea;border-left:5px solid #d9534f;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>⚠️ Common Mistakes</h3>
    <ul>
      <li>Choosing a ratio that doesn't involve both the known and unknown sides.</li>
      <li>When the unknown is in the denominator, forgetting to divide instead of multiply.</li>
      <li>Calculator in radian mode.</li>
    </ul>
  </div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q1: How do I pick the ratio?</h3><p><em>Use the one that links the known side to the unknown side (SOH CAH TOA).</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q2: Unknown on top?</h3><p><em>Multiply: side \(=\) hyp \(\times\) ratio.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q3: Unknown on the bottom?</h3><p><em>Divide: side \(=\) known \(\div\) ratio.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q4: Which mode on the calculator?</h3><p><em>Degree mode.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q5: How do I check my answer?</h3><p><em>The hypotenuse should be the longest side; estimate from the angle.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q6: Can I use the Pythagorean theorem too?</h3><p><em>Yes — once you have two sides, it finds the third.</em></p></div>
</div>`)] },

  { code: "6.5", title: "Finding Angles", blocks: [html(String.raw`<div class="lecture-box">
  <h1>🔄 Finding Angles</h1>
  <p><strong>Overview.</strong> When you know two sides, the <strong>inverse</strong> trig functions \(\sin^{-1},\cos^{-1},\tan^{-1}\) recover the angle. They answer "what angle has this ratio?".</p>

  <h2>📌 The Idea</h2>
  <p>If \(\sin\theta=\dfrac{\text{opp}}{\text{hyp}}\), then \(\theta=\sin^{-1}\!\left(\dfrac{\text{opp}}{\text{hyp}}\right)\). Choose the inverse that matches the two sides you have, and keep the calculator in degree mode.</p>

  <h2>🔵 Examples</h2>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 1: Use sin⁻¹</h3>
    <p>opposite \(=3\), hypotenuse \(=5\). Find \(\theta\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(\sin\theta=\dfrac{3}{5}\).</div>
      <div class="step"><strong>Step 2:</strong> \(\theta=\sin^{-1}(0.6)\approx36.9°\).</div>
      <em>Conclusion: \(\theta\approx36.9°\). ✓</em>
    </div>
    ${gframe([], { zoom: 26, title: "θ = sin⁻¹(3/5) ≈ 36.9°", labels: [{ x: 0, y: 0, t: "θ", c: "#a3327a" }, { x: 4, y: 0, t: "adj 4", c: "#2563a0" }, { x: 4, y: 3, t: "opp 3", c: "#2563a0" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 2: Use cos⁻¹</h3>
    <p>adjacent \(=4\), hypotenuse \(=5\). Find \(\theta\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(\cos\theta=\dfrac{4}{5}\).</div>
      <div class="step"><strong>Step 2:</strong> \(\theta=\cos^{-1}(0.8)\approx36.9°\).</div>
      <em>Conclusion: \(\theta\approx36.9°\). ✓</em>
    </div>
    ${gframe([], { zoom: 26, title: "θ = cos⁻¹(4/5) ≈ 36.9°", labels: [{ x: 0, y: 0, t: "θ", c: "#a3327a" }, { x: 4, y: 0, t: "adj 4", c: "#2563a0" }, { x: 4, y: 3, t: "hyp 5", c: "#2563a0" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 3: Use tan⁻¹</h3>
    <p>opposite \(=8\), adjacent \(=6\). Find \(\theta\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(\tan\theta=\dfrac{8}{6}\).</div>
      <div class="step"><strong>Step 2:</strong> \(\theta=\tan^{-1}(1.33)\approx53.1°\).</div>
      <em>Conclusion: \(\theta\approx53.1°\). ✓</em>
    </div>
    ${gframe([], { zoom: 14, title: "θ = tan⁻¹(8/6) ≈ 53.1°", labels: [{ x: 0, y: 0, t: "θ", c: "#a3327a" }, { x: 6, y: 0, t: "adj 6", c: "#2563a0" }, { x: 6, y: 8, t: "opp 8", c: "#2563a0" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 4: A 5-13 ratio</h3>
    <p>opposite \(=5\), hypotenuse \(=13\). Find \(\theta\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(\theta=\sin^{-1}\!\left(\dfrac{5}{13}\right)\approx22.6°\).</div>
      <em>Conclusion: \(\theta\approx22.6°\). ✓</em>
    </div>
    ${gframe([], { zoom: 12, title: "θ = sin⁻¹(5/13) ≈ 22.6°", labels: [{ x: 0, y: 0, t: "θ", c: "#a3327a" }, { x: 12, y: 0, t: "adj 12", c: "#2563a0" }, { x: 12, y: 5, t: "opp 5", c: "#2563a0" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 5: Both acute angles</h3>
    <p>Find both acute angles of the \(3\)-\(4\)-\(5\) triangle.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(\tan^{-1}\!\left(\tfrac34\right)\approx36.9°\).</div>
      <div class="step"><strong>Step 2:</strong> The other is \(90°-36.9°=53.1°\).</div>
      <em>Conclusion: \(36.9°\) and \(53.1°\). ✓</em>
    </div>
    ${gframe([], { zoom: 26, title: "Angles 36.9° and 53.1°", labels: [{ x: 0, y: 0, t: "36.9°", c: "#a3327a" }, { x: 4, y: 0, t: "B", c: "#2563a0" }, { x: 4, y: 3, t: "53.1°", c: "#a3327a" }] })}
  </div>

  <h2>🟡 Practice Questions</h2>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 1</h3><p>\(\sin\theta=0.5\). Find \(\theta\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \(30°\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 2</h3><p>\(\cos\theta=0.5\). Find \(\theta\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \(60°\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 3</h3><p>\(\tan\theta=1\). Find \(\theta\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \(45°\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 4</h3><p>opp \(=7\), hyp \(=25\). Find \(\theta\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\(\sin^{-1}(7/25)\). <em>Answer: \(\approx16.3°\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 5 — Challenge</h3><p>opp \(=9\), adj \(=12\). Find \(\theta\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\(\tan^{-1}(9/12)\). <em>Answer: \(\approx36.9°\).</em></div></div></details>
  </div>

  <div class="mistake-box" style="background-color:#fdecea;border-left:5px solid #d9534f;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>⚠️ Common Mistakes</h3>
    <ul>
      <li>Using \(\sin\) instead of \(\sin^{-1}\) (you want the angle, not a ratio).</li>
      <li>Picking the wrong inverse for the sides you have.</li>
      <li>Calculator not in degree mode.</li>
    </ul>
  </div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q1: What do inverse trig functions do?</h3><p><em>They give the angle from a known ratio of sides.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q2: Which inverse do I use?</h3><p><em>The one matching the two sides you know (opp/hyp → \(\sin^{-1}\), etc.).</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q3: How do I get the other acute angle?</h3><p><em>Subtract from \(90°\) (the two acute angles add to \(90°\)).</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q4: Calculator mode?</h3><p><em>Degree mode.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q5: Is the answer reasonable?</h3><p><em>Acute-triangle angles are between \(0°\) and \(90°\).</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q6: Where is \(\sin^{-1}\) on a calculator?</h3><p><em>Usually 2nd/Shift then \(\sin\).</em></p></div>
</div>`)] },

  { code: "6.6", title: "Solving Right Triangles & Applications", blocks: [html(String.raw`<div class="lecture-box">
  <h1>🏗️ Solving Right Triangles &amp; Applications</h1>
  <p><strong>Overview.</strong> "Solving" a right triangle means finding <em>every</em> missing side and angle. The same tools handle real problems with <strong>angles of elevation and depression</strong>.</p>

  <h2>📌 Elevation &amp; Depression</h2>
  <p>An <strong>angle of elevation</strong> is measured upward from the horizontal; an <strong>angle of depression</strong> is measured downward from the horizontal. Draw the right triangle, label the angle and known side, then choose a ratio.</p>

  <h2>🔵 Examples</h2>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 1: Solve a full triangle</h3>
    <p>A right triangle has angle \(30°\) and hypotenuse \(10\). Find everything.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> opp \(=10\sin30°=5\); adj \(=10\cos30°\approx8.66\).</div>
      <div class="step"><strong>Step 2:</strong> Other angle \(=90°-30°=60°\).</div>
      <em>Conclusion: sides \(5,\ 8.66,\ 10\); angles \(30°,60°,90°\). ✓</em>
    </div>
    ${gframe([], { zoom: 16, title: "Sides 5, 8.66, 10; angles 30/60/90", labels: [{ x: 0, y: 0, t: "30°", c: "#a3327a" }, { x: 8.66, y: 0, t: "8.66", c: "#2563a0" }, { x: 8.66, y: 5, t: "5", c: "#2563a0" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 2: From two legs</h3>
    <p>A right triangle has legs \(6\) and \(8\). Find the hypotenuse and both acute angles.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> hyp \(=\sqrt{36+64}=10\).</div>
      <div class="step"><strong>Step 2:</strong> \(\tan^{-1}(6/8)\approx36.9°\); the other \(\approx53.1°\).</div>
      <em>Conclusion: hyp \(10\); angles \(36.9°,53.1°\). ✓</em>
    </div>
    ${gframe([], { zoom: 16, title: "hyp 10; angles 36.9° & 53.1°", labels: [{ x: 0, y: 0, t: "36.9°", c: "#a3327a" }, { x: 8, y: 0, t: "8", c: "#2563a0" }, { x: 8, y: 6, t: "6", c: "#2563a0" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 3: Angle of elevation</h3>
    <p>From \(50\) m away, the top of a building has an elevation angle of \(35°\). Find the height.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(\tan35°=\dfrac{h}{50}\).</div>
      <div class="step"><strong>Step 2:</strong> \(h=50\tan35°\approx35.0\).</div>
      <em>Conclusion: \(\approx35\) m tall. ✓</em>
    </div>
    ${gframe([], { zoom: 5, title: "Height = 50 tan 35° ≈ 35 m", labels: [{ x: 0, y: 0, t: "35°", c: "#a3327a" }, { x: 50, y: 0, t: "50 m", c: "#2563a0" }, { x: 50, y: 35, t: "h ≈ 35", c: "#2563a0" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 4: Angle of depression</h3>
    <p>From a \(20\)-m cliff, a boat has a depression angle of \(25°\). How far is the boat from the base?</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(\tan25°=\dfrac{20}{d}\).</div>
      <div class="step"><strong>Step 2:</strong> \(d=\dfrac{20}{\tan25°}\approx42.9\).</div>
      <em>Conclusion: \(\approx42.9\) m away. ✓</em>
    </div>
    ${gframe([], { zoom: 4, title: "Distance = 20 ÷ tan 25° ≈ 42.9 m", labels: [{ x: 0, y: 20, t: "cliff 20 m", c: "#a3327a" }, { x: 42.9, y: 0, t: "boat", c: "#2563a0" }, { x: 0, y: 0, t: "base", c: "#2563a0" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 5: A ladder</h3>
    <p>A \(5\)-m ladder leans at \(70°\) to the ground. How high up the wall does it reach?</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> height \(=5\sin70°\approx4.70\).</div>
      <em>Conclusion: \(\approx4.70\) m. ✓</em>
    </div>
    ${gframe([], { zoom: 22, title: "Height = 5 sin 70° ≈ 4.70 m", labels: [{ x: 0, y: 0, t: "70°", c: "#a3327a" }, { x: 1.71, y: 0, t: "base", c: "#2563a0" }, { x: 1.71, y: 4.7, t: "4.70 m", c: "#2563a0" }] })}
  </div>

  <h2>🟡 Practice Questions</h2>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 1</h3><p>Solve: angle \(45°\), hyp \(8\). Find the legs and the other angle.</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\(8\sin45°\). <em>Answer: legs \(\approx5.66\); other angle \(45°\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 2</h3><p>Legs \(5\) and \(12\). Find the hypotenuse and acute angles.</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">hyp \(13\). <em>Answer: \(\approx22.6°\) and \(67.4°\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 3</h3><p>Elevation \(40°\) from \(30\) m away. Find the height.</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\(30\tan40°\). <em>Answer: \(\approx25.2\) m.</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 4</h3><p>A \(6\)-m ladder at \(65°\). How high does it reach?</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\(6\sin65°\). <em>Answer: \(\approx5.44\) m.</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 5 — Challenge</h3><p>From a \(100\)-m tower, a car has a depression angle of \(30°\). How far is the car?</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\(100\div\tan30°\). <em>Answer: \(\approx173\) m.</em></div></div></details>
  </div>

  <div class="mistake-box" style="background-color:#fdecea;border-left:5px solid #d9534f;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>⚠️ Common Mistakes</h3>
    <ul>
      <li>Confusing the angle of elevation with depression (they're equal in these setups, but drawn differently).</li>
      <li>Putting the known side in the wrong place (opp vs adj).</li>
      <li>Not drawing a diagram first.</li>
    </ul>
  </div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q1: What does "solve a triangle" mean?</h3><p><em>Find all missing sides and angles.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q2: Angle of elevation?</h3><p><em>Measured upward from the horizontal.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q3: Angle of depression?</h3><p><em>Measured downward from the horizontal.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q4: First step in a word problem?</h3><p><em>Draw and label the right triangle.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q5: How do the two acute angles relate?</h3><p><em>They add to \(90°\).</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q6: Which tool finds a side from two sides?</h3><p><em>The Pythagorean theorem.</em></p></div>
</div>`)] },

  { code: "7.1", title: "The Sine Law", blocks: [html(String.raw`<div class="lecture-box">
  <h1>📐 The Sine Law</h1>
  <p><strong>Overview.</strong> Not every triangle has a right angle. The <strong>sine law</strong> relates each side to the sine of its opposite angle, letting you solve <em>oblique</em> (non-right) triangles.</p>

  <h2>📌 The Sine Law</h2>
  <p style="text-align:center;">\( \dfrac{a}{\sin A}=\dfrac{b}{\sin B}=\dfrac{c}{\sin C} \)</p>
  <p>Each side is paired with the angle <em>across</em> from it. Use the sine law when you know an <strong>angle and its opposite side</strong>, plus one more angle or side (cases AAS, ASA, or SSA).</p>

  <h2>🔵 Examples</h2>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 1: Find a side</h3>
    <p>\(A=40°\), \(B=60°\), side \(a=10\) (opposite \(A\)). Find \(b\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(\dfrac{b}{\sin60°}=\dfrac{10}{\sin40°}\).</div>
      <div class="step"><strong>Step 2:</strong> \(b=\dfrac{10\sin60°}{\sin40°}\approx13.5\).</div>
      <em>Conclusion: \(b\approx13.5\). ✓</em>
    </div>
    ${gframe([], { zoom: 16, title: "b = 10·sin60° / sin40° ≈ 13.5", labels: [{ x: 0, y: 0, t: "A 40°", c: "#a3327a" }, { x: 9, y: 0, t: "B 60°", c: "#a3327a" }, { x: 3, y: 5, t: "C", c: "#2563a0" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 2: ASA → find a side</h3>
    <p>\(A=50°\), \(B=60°\), and the side opposite \(A\) is \(8\). Find the side opposite \(C\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(C=180°-50°-60°=70°\).</div>
      <div class="step"><strong>Step 2:</strong> \(c=\dfrac{8\sin70°}{\sin50°}\approx9.8\).</div>
      <em>Conclusion: \(c\approx9.8\). ✓</em>
    </div>
    ${gframe([], { zoom: 16, title: "c = 8·sin70° / sin50° ≈ 9.8", labels: [{ x: 0, y: 0, t: "A 50°", c: "#a3327a" }, { x: 8, y: 0, t: "B 60°", c: "#a3327a" }, { x: 3, y: 4, t: "C 70°", c: "#a3327a" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 3: Find an angle</h3>
    <p>\(a=7\), \(b=10\), \(B=80°\). Find \(A\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(\dfrac{\sin A}{7}=\dfrac{\sin80°}{10}\).</div>
      <div class="step"><strong>Step 2:</strong> \(\sin A=\dfrac{7\sin80°}{10}\approx0.689\Rightarrow A\approx43.6°\).</div>
      <em>Conclusion: \(A\approx43.6°\). ✓</em>
    </div>
    ${gframe([], { zoom: 16, title: "A = sin⁻¹(7·sin80°/10) ≈ 43.6°", labels: [{ x: 0, y: 0, t: "A", c: "#a3327a" }, { x: 9, y: 0, t: "B 80°", c: "#a3327a" }, { x: 6, y: 4, t: "C", c: "#2563a0" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 4: Third angle, then a side</h3>
    <p>\(A=45°\), \(B=55°\), \(a=12\). Find \(c\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(C=80°\).</div>
      <div class="step"><strong>Step 2:</strong> \(c=\dfrac{12\sin80°}{\sin45°}\approx16.7\).</div>
      <em>Conclusion: \(c\approx16.7\). ✓</em>
    </div>
    ${gframe([], { zoom: 12, title: "c = 12·sin80° / sin45° ≈ 16.7", labels: [{ x: 0, y: 0, t: "A 45°", c: "#a3327a" }, { x: 12, y: 0, t: "B 55°", c: "#a3327a" }, { x: 5, y: 6, t: "C 80°", c: "#a3327a" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 5: A surveying problem</h3>
    <p>A triangular plot has angles \(35°\) and \(75°\); the side opposite \(35°\) is \(50\) m. Find the side opposite \(75°\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(\dfrac{x}{\sin75°}=\dfrac{50}{\sin35°}\).</div>
      <div class="step"><strong>Step 2:</strong> \(x=\dfrac{50\sin75°}{\sin35°}\approx84.2\).</div>
      <em>Conclusion: \(\approx84.2\) m. ✓</em>
    </div>
    ${gframe([], { zoom: 4, title: "x = 50·sin75° / sin35° ≈ 84.2 m", labels: [{ x: 0, y: 0, t: "35°", c: "#a3327a" }, { x: 70, y: 0, t: "75°", c: "#a3327a" }, { x: 25, y: 35, t: "", c: "#2563a0" }] })}
  </div>

  <h2>🟡 Practice Questions</h2>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 1</h3><p>\(A=30°\), \(B=70°\), \(a=6\). Find \(b\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\(\dfrac{6\sin70°}{\sin30°}\). <em>Answer: \(\approx11.3\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 2</h3><p>\(A=40°\), \(C=80°\), \(a=9\). Find \(c\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\(\dfrac{9\sin80°}{\sin40°}\). <em>Answer: \(\approx13.8\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 3</h3><p>\(a=5\), \(b=8\), \(B=75°\). Find \(A\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\(\sin A=\dfrac{5\sin75°}{8}\). <em>Answer: \(\approx37.1°\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 4</h3><p>\(A=50°\), \(B=60°\), \(a=10\). Find \(C\) and \(c\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\(C=70°\); \(c=\dfrac{10\sin70°}{\sin50°}\). <em>Answer: \(C=70°,\ c\approx12.3\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 5 — Challenge</h3><p>Angles \(48°\) and \(62°\); the side opposite \(48°\) is \(30\). Find the side opposite \(62°\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\(\dfrac{30\sin62°}{\sin48°}\). <em>Answer: \(\approx35.6\).</em></div></div></details>
  </div>

  <div class="mistake-box" style="background-color:#fdecea;border-left:5px solid #d9534f;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>⚠️ Common Mistakes</h3>
    <ul>
      <li>Pairing a side with the wrong angle (it must be the <em>opposite</em> one).</li>
      <li>Using the sine law when you don't have an angle-opposite-side pair — use the cosine law instead.</li>
      <li>Calculator in radian mode.</li>
    </ul>
  </div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q1: What is the sine law?</h3><p><em>\(\frac{a}{\sin A}=\frac{b}{\sin B}=\frac{c}{\sin C}\).</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q2: When do I use it?</h3><p><em>When you know an angle and the side opposite it (AAS, ASA, SSA).</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q3: How do I find an angle with it?</h3><p><em>Solve for \(\sin\) of the angle, then take the inverse sine.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q4: How do I get the third angle?</h3><p><em>Subtract the two known angles from \(180°\).</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q5: Which pairs go together?</h3><p><em>A side and the angle directly across from it.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q6: Does it work on right triangles too?</h3><p><em>Yes, but SOH CAH TOA is usually simpler there.</em></p></div>
</div>`)] },

  { code: "7.2", title: "The Cosine Law", blocks: [html(String.raw`<div class="lecture-box">
  <h1>📐 The Cosine Law</h1>
  <p><strong>Overview.</strong> The <strong>cosine law</strong> is a generalization of the Pythagorean theorem that works for <em>any</em> triangle. Use it when the sine law can't get started — that is, when you don't have an angle-opposite-side pair.</p>

  <h2>📌 The Cosine Law</h2>
  <p style="text-align:center;">\( c^2=a^2+b^2-2ab\cos C \)</p>
  <p>Use it for <strong>SAS</strong> (two sides and the included angle → find the third side) or <strong>SSS</strong> (three sides → find an angle, rearranged as \(\cos C=\dfrac{a^2+b^2-c^2}{2ab}\)).</p>

  <h2>🔵 Examples</h2>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 1: SAS → find the third side</h3>
    <p>\(a=8\), \(b=6\), included angle \(C=60°\). Find \(c\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(c^2=64+36-2(48)\cos60°=100-96(0.5)=52\).</div>
      <div class="step"><strong>Step 2:</strong> \(c=\sqrt{52}\approx7.21\).</div>
      <em>Conclusion: \(c\approx7.21\). ✓</em>
    </div>
    ${gframe([], { zoom: 16, title: "c² = 8² + 6² − 2·48·cos60° → c ≈ 7.21", labels: [{ x: 0, y: 0, t: "C 60°", c: "#a3327a" }, { x: 8, y: 0, t: "B", c: "#2563a0" }, { x: 3, y: 5, t: "A", c: "#2563a0" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 2: SAS with a smaller angle</h3>
    <p>\(a=5\), \(b=7\), \(C=40°\). Find \(c\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(c^2=25+49-70\cos40°\approx74-53.6=20.4\).</div>
      <div class="step"><strong>Step 2:</strong> \(c\approx4.52\).</div>
      <em>Conclusion: \(c\approx4.52\). ✓</em>
    </div>
    ${gframe([], { zoom: 18, title: "c ≈ 4.52", labels: [{ x: 0, y: 0, t: "C 40°", c: "#a3327a" }, { x: 7, y: 0, t: "B", c: "#2563a0" }, { x: 4, y: 3, t: "A", c: "#2563a0" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 3: SSS → find an angle</h3>
    <p>A triangle has sides \(6,7,8\). Find the angle opposite the side of length \(8\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(\cos C=\dfrac{6^2+7^2-8^2}{2(6)(7)}=\dfrac{21}{84}=0.25\).</div>
      <div class="step"><strong>Step 2:</strong> \(C=\cos^{-1}(0.25)\approx75.5°\).</div>
      <em>Conclusion: \(C\approx75.5°\). ✓</em>
    </div>
    ${gframe([], { zoom: 16, title: "C = cos⁻¹(0.25) ≈ 75.5°", labels: [{ x: 0, y: 0, t: "6", c: "#2563a0" }, { x: 8, y: 0, t: "7", c: "#2563a0" }, { x: 3, y: 5, t: "opp 8", c: "#a3327a" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 4: An obtuse angle</h3>
    <p>Sides \(5,6,9\). Find the largest angle (opposite \(9\)).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(\cos C=\dfrac{25+36-81}{2(30)}=\dfrac{-20}{60}\approx-0.333\).</div>
      <div class="step"><strong>Step 2:</strong> \(C=\cos^{-1}(-0.333)\approx109.5°\) (obtuse).</div>
      <em>Conclusion: \(C\approx109.5°\). ✓</em>
    </div>
    ${gframe([], { zoom: 16, title: "C = cos⁻¹(−0.333) ≈ 109.5°", labels: [{ x: 0, y: 0, t: "5", c: "#2563a0" }, { x: 9, y: 0, t: "6", c: "#2563a0" }, { x: 6, y: 3, t: "opp 9", c: "#a3327a" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 5: A land survey</h3>
    <p>Two sides of a lot are \(40\) m and \(50\) m with an included angle of \(70°\). Find the third side.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(c^2=1600+2500-2(2000)\cos70°\approx4100-1368=2732\).</div>
      <div class="step"><strong>Step 2:</strong> \(c\approx52.3\).</div>
      <em>Conclusion: \(\approx52.3\) m. ✓</em>
    </div>
    ${gframe([], { zoom: 5, title: "Third side ≈ 52.3 m", labels: [{ x: 0, y: 0, t: "70°", c: "#a3327a" }, { x: 50, y: 0, t: "50", c: "#2563a0" }, { x: 14, y: 38, t: "40", c: "#2563a0" }] })}
  </div>

  <h2>🟡 Practice Questions</h2>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 1</h3><p>\(a=4\), \(b=5\), \(C=60°\). Find \(c\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\(16+25-40\cos60°=21\). <em>Answer: \(c=\sqrt{21}\approx4.58\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 2</h3><p>\(a=7\), \(b=9\), \(C=50°\). Find \(c\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\(49+81-126\cos50°\approx48.9\). <em>Answer: \(\approx6.99\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 3</h3><p>Sides \(3,5,7\). Find the angle opposite \(7\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\(\cos C=\dfrac{9+25-49}{30}=-0.5\). <em>Answer: \(120°\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 4</h3><p>Sides \(8,15,17\). Find the angle opposite \(17\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\(\cos C=\dfrac{64+225-289}{240}=0\). <em>Answer: \(90°\) (right triangle).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 5 — Challenge</h3><p>Two sides \(12\) and \(18\) with included angle \(95°\). Find the third side.</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\(144+324-432\cos95°\approx505.7\). <em>Answer: \(\approx22.5\).</em></div></div></details>
  </div>

  <div class="mistake-box" style="background-color:#fdecea;border-left:5px solid #d9534f;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>⚠️ Common Mistakes</h3>
    <ul>
      <li>Using the angle that isn't <em>included</em> between the two sides (SAS).</li>
      <li>Forgetting that \(\cos\) of an obtuse angle is negative.</li>
      <li>Skipping the final square root when solving for a side.</li>
    </ul>
  </div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q1: What is the cosine law?</h3><p><em>\(c^2=a^2+b^2-2ab\cos C\).</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q2: When do I use it?</h3><p><em>For SAS (find a side) or SSS (find an angle).</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q3: How do I find an angle with it?</h3><p><em>Rearrange to \(\cos C=\frac{a^2+b^2-c^2}{2ab}\), then take \(\cos^{-1}\).</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q4: How is it related to Pythagoras?</h3><p><em>If \(C=90°\), \(\cos C=0\) and it becomes \(c^2=a^2+b^2\).</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q5: What does a negative cosine mean?</h3><p><em>The angle is obtuse (between \(90°\) and \(180°\)).</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q6: Which angle should I find first in SSS?</h3><p><em>Often the largest (opposite the longest side) — it may be obtuse.</em></p></div>
</div>`)] },

  { code: "7.3", title: "Choosing the Right Law", blocks: [html(String.raw`<div class="lecture-box">
  <h1>🧭 Choosing the Right Law</h1>
  <p><strong>Overview.</strong> Right-triangle trig, the sine law, and the cosine law each fit a specific situation. The skill is reading what you're <em>given</em> and picking the right tool the first time.</p>

  <h2>📌 The Decision Guide</h2>
  <ul>
    <li><strong>Right triangle</strong> (a \(90°\) angle): use SOH CAH TOA.</li>
    <li><strong>Sine law</strong>: you have an angle <em>and its opposite side</em> (AAS, ASA, SSA).</li>
    <li><strong>Cosine law</strong>: SAS (two sides + included angle) or SSS (three sides).</li>
  </ul>

  <h2>🔵 Examples</h2>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 1: Two angles and a side</h3>
    <p>Given \(A=40°\), \(B=65°\), \(a=10\). Which law?</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> An angle (\(A\)) with its opposite side (\(a\)) is known.</div>
      <em>Conclusion: <strong>sine law</strong>. ✓</em>
    </div>
    ${gframe([], { zoom: 16, title: "Angle + opposite side → sine law", labels: [{ x: 0, y: 0, t: "A 40°", c: "#a3327a" }, { x: 9, y: 0, t: "B 65°", c: "#a3327a" }, { x: 4, y: 4, t: "C", c: "#2563a0" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 2: Two sides and the included angle</h3>
    <p>Given \(a=9\), \(b=12\), \(C=55°\). Which law?</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Two sides with the angle <em>between</em> them — SAS.</div>
      <em>Conclusion: <strong>cosine law</strong>. ✓</em>
    </div>
    ${gframe([], { zoom: 14, title: "SAS → cosine law", labels: [{ x: 0, y: 0, t: "C 55°", c: "#a3327a" }, { x: 12, y: 0, t: "b 12", c: "#2563a0" }, { x: 5, y: 6, t: "a 9", c: "#2563a0" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 3: Three sides</h3>
    <p>Given sides \(7,9,11\) and asked for an angle. Which law?</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> All three sides, no angle — SSS.</div>
      <em>Conclusion: <strong>cosine law</strong> (rearranged for the angle). ✓</em>
    </div>
    ${gframe([], { zoom: 14, title: "SSS → cosine law", labels: [{ x: 0, y: 0, t: "7", c: "#2563a0" }, { x: 11, y: 0, t: "9", c: "#2563a0" }, { x: 4, y: 5, t: "11", c: "#a3327a" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 4: A right triangle</h3>
    <p>A right triangle has a \(90°\) angle, another angle \(35°\), and hypotenuse \(20\). Which law?</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> There's a right angle.</div>
      <em>Conclusion: use <strong>SOH CAH TOA</strong> (simplest). ✓</em>
    </div>
    ${gframe([], { zoom: 14, title: "Right angle → SOH CAH TOA", labels: [{ x: 0, y: 0, t: "35°", c: "#a3327a" }, { x: 11, y: 0, t: "90°", c: "#2563a0" }, { x: 11, y: 8, t: "", c: "#2563a0" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 5: Side, opposite angle, and another side</h3>
    <p>Given \(a=8\), \(A=50°\), \(b=10\), find \(B\). Which law?</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> An angle with its opposite side, plus another side — SSA.</div>
      <em>Conclusion: <strong>sine law</strong> (to find the opposite angle \(B\)). ✓</em>
    </div>
    ${gframe([], { zoom: 16, title: "SSA → sine law", labels: [{ x: 0, y: 0, t: "A 50°", c: "#a3327a" }, { x: 9, y: 0, t: "B ?", c: "#a3327a" }, { x: 4, y: 4, t: "C", c: "#2563a0" }] })}
  </div>

  <h2>🟡 Practice Questions</h2>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 1</h3><p>Given \(A=30°\), \(B=80°\), \(b=12\). Which law?</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">Angle + opposite side. <em>Answer: sine law.</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 2</h3><p>Given sides \(5,6,10\), find an angle. Which law?</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">SSS. <em>Answer: cosine law.</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 3</h3><p>Given \(a=7\), \(c=9\), \(B=48°\) (included). Which law?</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">SAS. <em>Answer: cosine law.</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 4</h3><p>Right triangle, angle \(40°\), opposite side \(6\), find hyp. Which law?</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">Right angle present. <em>Answer: SOH CAH TOA.</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 5 — Challenge</h3><p>Given \(A=35°\), \(a=10\), \(b=14\), find \(B\). Which law and is more than one triangle possible?</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">SSA → sine law; the ambiguous case can give two triangles. <em>Answer: sine law (check for two solutions).</em></div></div></details>
  </div>

  <div class="mistake-box" style="background-color:#fdecea;border-left:5px solid #d9534f;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>⚠️ Common Mistakes</h3>
    <ul>
      <li>Reaching for the sine law in an SAS/SSS case (it can't start there).</li>
      <li>Forgetting that a right angle lets you use the simpler primary ratios.</li>
      <li>Ignoring the ambiguous (SSA) case where two triangles may fit.</li>
    </ul>
  </div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q1: When do I use SOH CAH TOA?</h3><p><em>When the triangle has a right angle.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q2: When do I use the sine law?</h3><p><em>When you have an angle and the side opposite it.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q3: When do I use the cosine law?</h3><p><em>For SAS (find a side) or SSS (find an angle).</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q4: What is the included angle?</h3><p><em>The angle <em>between</em> the two known sides.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q5: What is the ambiguous case?</h3><p><em>SSA — sometimes two different triangles fit the given data.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q6: Can I sometimes use more than one law?</h3><p><em>Yes — but pick the one that solves it in the fewest steps.</em></p></div>
</div>`)] },

  { code: "7.4", title: "Applications of the Sine & Cosine Laws", blocks: [html(String.raw`<div class="lecture-box">
  <h1>🗺️ Applications of the Sine &amp; Cosine Laws</h1>
  <p><strong>Overview.</strong> Navigation, surveying, and construction are full of non-right triangles. The recipe is always the same: <strong>draw and label</strong> a diagram, decide which law fits, solve, and interpret.</p>

  <h2>📌 Working with Bearings</h2>
  <p>A <strong>bearing</strong> is a direction. The angle <em>inside</em> the triangle is what the laws need, so convert bearings into the triangle's interior angles before applying a law.</p>

  <h2>🔵 Examples</h2>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 1: Distance across a lake</h3>
    <p>From point \(C\), two points \(A\) and \(B\) across a lake are \(80\) m and \(100\) m away, with \(\angle C=70°\) between them. Find \(AB\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> SAS → cosine law: \(AB^2=80^2+100^2-2(8000)\cos70°\).</div>
      <div class="step"><strong>Step 2:</strong> \(AB^2\approx16400-5472=10928\Rightarrow AB\approx104.5\).</div>
      <em>Conclusion: \(\approx104.5\) m. ✓</em>
    </div>
    ${gframe([], { zoom: 3, title: "AB ≈ 104.5 m (cosine law)", labels: [{ x: 0, y: 0, t: "C 70°", c: "#a3327a" }, { x: 100, y: 0, t: "B", c: "#2563a0" }, { x: 28, y: 75, t: "A", c: "#2563a0" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 2: A leaning tower</h3>
    <p>A tower leans so that from a point \(60\) m away the angle to the top is \(50°\), and the angle at the tower's base (interior) is \(85°\). Find the tower's length.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Third angle \(=180°-50°-85°=45°\).</div>
      <div class="step"><strong>Step 2:</strong> Sine law: \(\dfrac{L}{\sin50°}=\dfrac{60}{\sin45°}\Rightarrow L\approx65.0\).</div>
      <em>Conclusion: \(\approx65.0\) m. ✓</em>
    </div>
    ${gframe([], { zoom: 4, title: "L = 60·sin50° / sin45° ≈ 65.0 m", labels: [{ x: 0, y: 0, t: "50°", c: "#a3327a" }, { x: 60, y: 0, t: "85°", c: "#a3327a" }, { x: 50, y: 30, t: "top", c: "#2563a0" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 3: Navigation (cosine law)</h3>
    <p>A ship sails \(30\) km, turns through an interior angle of \(110°\), then sails \(40\) km. How far is it from the start?</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(d^2=30^2+40^2-2(1200)\cos110°\).</div>
      <div class="step"><strong>Step 2:</strong> \(d^2\approx2500+821=3321\Rightarrow d\approx57.6\).</div>
      <em>Conclusion: \(\approx57.6\) km. ✓</em>
    </div>
    ${gframe([], { zoom: 5, title: "d ≈ 57.6 km (cosine law)", labels: [{ x: 0, y: 0, t: "start", c: "#2563a0" }, { x: 30, y: 0, t: "110°", c: "#a3327a" }, { x: 18, y: 30, t: "end", c: "#2563a0" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 4: Triangulating a tree</h3>
    <p>Two observers \(50\) m apart see a tree. The angles from the baseline are \(60°\) and \(70°\). How far is the tree from the first observer?</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Third angle \(=50°\).</div>
      <div class="step"><strong>Step 2:</strong> Sine law: \(\dfrac{d}{\sin70°}=\dfrac{50}{\sin50°}\Rightarrow d\approx61.3\).</div>
      <em>Conclusion: \(\approx61.3\) m. ✓</em>
    </div>
    ${gframe([], { zoom: 5, title: "d = 50·sin70° / sin50° ≈ 61.3 m", labels: [{ x: 0, y: 0, t: "60°", c: "#a3327a" }, { x: 50, y: 0, t: "70°", c: "#a3327a" }, { x: 30, y: 30, t: "tree", c: "#2563a0" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 5: Find an angle in a frame</h3>
    <p>A triangular roof truss has sides \(6\) m, \(8\) m, and \(10\) m. Find the angle between the \(6\)-m and \(8\)-m sides.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(\cos\theta=\dfrac{6^2+8^2-10^2}{2(6)(8)}=\dfrac{0}{96}=0\).</div>
      <div class="step"><strong>Step 2:</strong> \(\theta=90°\).</div>
      <em>Conclusion: it's a right angle. ✓</em>
    </div>
    ${gframe([], { zoom: 16, title: "θ = 90° (6-8-10 truss)", labels: [{ x: 0, y: 0, t: "90°", c: "#a3327a" }, { x: 8, y: 0, t: "8", c: "#2563a0" }, { x: 0, y: 6, t: "6", c: "#2563a0" }] })}
  </div>

  <h2>🟡 Practice Questions</h2>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 1</h3><p>Two sides \(20\) and \(25\) with included angle \(60°\). Find the third side.</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\(400+625-1000\cos60°=525\). <em>Answer: \(\approx22.9\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 2</h3><p>Angles \(40°\) and \(75°\); the side opposite \(40°\) is \(18\). Find the side opposite \(75°\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\(\dfrac{18\sin75°}{\sin40°}\). <em>Answer: \(\approx27.0\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 3</h3><p>A ship sails \(12\) km, turns through interior angle \(100°\), sails \(15\) km. Distance from start?</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\(144+225-360\cos100°\approx431.5\). <em>Answer: \(\approx20.8\) km.</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 4</h3><p>Triangle sides \(9,12,15\). Find the largest angle.</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\(\cos C=\dfrac{81+144-225}{216}=0\). <em>Answer: \(90°\).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 5 — Challenge</h3><p>Two observers \(40\) m apart sight a boat at baseline angles \(55°\) and \(65°\). Find the boat's distance from the second observer.</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">Third angle \(60°\); \(\dfrac{d}{\sin55°}=\dfrac{40}{\sin60°}\). <em>Answer: \(\approx37.8\) m.</em></div></div></details>
  </div>

  <div class="mistake-box" style="background-color:#fdecea;border-left:5px solid #d9534f;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>⚠️ Common Mistakes</h3>
    <ul>
      <li>Not drawing a diagram before choosing a law.</li>
      <li>Using a bearing directly instead of the triangle's interior angle.</li>
      <li>Picking the wrong law for the given information.</li>
    </ul>
  </div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q1: What's the first step in any application?</h3><p><em>Draw and label a clear diagram.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q2: How do I pick the law?</h3><p><em>Match the given information (see the decision guide in 7.3).</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q3: What is a bearing?</h3><p><em>A direction; convert it to the triangle's interior angle first.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q4: SAS distance problem — which law?</h3><p><em>The cosine law.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q5: Two angles and a baseline — which law?</h3><p><em>The sine law (after finding the third angle).</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q6: Last step?</h3><p><em>Interpret the answer in context, with units.</em></p></div>
</div>`)] },
];

// ── ASSIGNMENTS (10 questions each: 3 K/U, 2 Thinking, 2 Communication, 3 Application) ──
const A = (code, topic, ku, th, co, ap) => {
  let n = 0;
  const sec = (arr) => arr.map((q) => `${++n}. ${q}`);
  const description = [
    "Knowledge & Understanding", ...sec(ku),
    "Thinking", ...sec(th),
    "Communication", ...sec(co),
    "Application", ...sec(ap),
  ].join("\n");
  return { code, title: `Assignment ${code} — ${topic}`, description };
};
export const ASSIGN = Object.fromEntries([
  A("1.1", "Review of Linear Relations",
    ["Find the slope of the line through $(2,-1)$ and $(6,7)$.",
     "State the slope and $y$-intercept of $y=-3x+5$.",
     "Rewrite $4x+2y=10$ in slope–intercept form."],
    ["A line has slope $2$ through $(1,3)$; another passes through $(1,3)$ and $(4,9)$. Are they the same line? Justify.",
     "For what value of $k$ is the line through $(2,k)$ and $(5,1)$ horizontal? Explain."],
    ["In your own words, explain the difference between slope–intercept, standard, and point–slope form, and when each is most useful.",
     "Describe, step by step, how to graph a line from $y=mx+b$ so a classmate could follow."],
    ["A taxi charges a base fare of 3 dollars plus 2 dollars per km. Write an equation for cost $C$ versus distance $d$, then find the cost for $7$ km.",
     "Find the equation of the line parallel to $y=\\tfrac12x-4$ passing through $(2,5)$.",
     "Find the equation of the line perpendicular to $y=-2x+1$ passing through $(4,3)$."]),
  A("1.2", "Solving Linear Systems by Graphing",
    ["Solve by graphing: $y=x+1$ and $y=-x+5$.",
     "How many solutions does the system $y=2x+3$, $y=2x-1$ have? Explain.",
     "Verify that $(2,3)$ is the solution of $y=x+1$, $y=-x+5$."],
    ["Two lines share the same $y$-intercept but have different slopes. How many solutions does the system have? Explain.",
     "Create a linear system whose only solution is $(3,-2)$."],
    ["Explain why two parallel lines produce a system with no solution.",
     "Describe one limitation of solving a system by graphing."],
    ["Gym A charges 20 dollars to join plus 5 dollars per visit; Gym B charges 9 dollars per visit with no join fee. Write the cost equations and find when the costs are equal.",
     "Solve by graphing: $y=2x$ and $y=x+4$.",
     "Solve by graphing: $x+y=6$ and $y=x$."]),
  A("1.3", "Solving by Substitution",
    ["Solve by substitution: $y=2x+1$, $x+y=7$.",
     "Solve: $y=x-3$, $2x+y=9$.",
     "In the system $x=2y-1$, $3x+y=11$, which variable is easiest to substitute, and why?"],
    ["When solving a system you reach $6=6$. What does that tell you about the lines? What about $-1=4$?",
     "Create a system that is best solved by substitution rather than elimination, and explain your choice."],
    ["Describe the steps of the substitution method in order.",
     "Explain why you must substitute into the *other* equation, not the one you isolated."],
    ["The sum of two numbers is $24$ and one is twice the other. Use substitution to find them.",
     "Solve: $y=-x+5$, $3x+2y=12$.",
     "A rectangle's length is $3$ more than its width and its perimeter is $26$. Set up and solve by substitution."]),
  A("1.4", "Solving by Elimination",
    ["Solve by elimination: $x+y=7$, $x-y=1$.",
     "Solve: $3x+2y=16$, $x+2y=8$.",
     "To eliminate $x$ from $2x+3y=12$ and $x+y=5$, what do you multiply the second equation by?"],
    ["When does *adding* the equations eliminate a variable, and when must you *subtract*?",
     "Create a system where you must multiply *both* equations before eliminating a variable."],
    ["Explain why multiplying an equation by a non-zero number does not change its solution.",
     "During elimination you obtain $0=5$. Explain what this means about the system."],
    ["A theatre sells $200$ tickets for $1430$ dollars; adults cost 9 dollars and children 5 dollars. Use elimination to find how many of each were sold.",
     "Solve: $2x+3y=7$, $3x-y=5$.",
     "Two coffees and a muffin cost 11 dollars; one coffee and a muffin cost 7 dollars. Find each price."]),
  A("1.5", "Solving Problems with Linear Systems",
    ["Two numbers add to $30$ and differ by $8$. Find them.",
     "Define two variables for: \"Adult tickets are 10 dollars, child tickets 6 dollars, and 150 were sold for 1260 dollars.\"",
     "Write a system for: \"5000 dollars is split between accounts earning $3\\%$ and $5\\%$, earning $210$ dollars total interest.\""],
    ["Why is it important to state what each variable represents (with units) before writing equations?",
     "A problem gives only one equation for two unknowns. What does that imply about the solution?"],
    ["Outline the four steps for solving a word problem with a linear system.",
     "Explain how you would check that a solution makes sense in its context."],
    ["A boat travels $30$ km downstream in $2$ h and the same distance upstream in $3$ h. Find the boat's speed and the current's speed.",
     "A vendor's cost is $C=200+4n$ and revenue is $R=12n$. Find the break-even number of items $n$.",
     "How much of a $20\\%$ and a $50\\%$ solution are mixed to make $30$ L of a $40\\%$ solution?"]),
  A("1.6", "Number of Solutions",
    ["How many solutions does $y=2x+3$, $y=2x-5$ have?",
     "How many solutions does $y=3x+1$, $y=-x+5$ have?",
     "How many solutions does $y=\\tfrac12x+2$, $2y=x+4$ have?"],
    ["Two equations in standard form have proportional coefficients but different constants. How many solutions, and why?",
     "Without graphing, explain how to tell from $3x+y=6$ and $6x+2y=12$ that there are infinitely many solutions."],
    ["Explain the difference between an *inconsistent* and a *dependent* system.",
     "Describe how the slopes and $y$-intercepts determine the number of solutions."],
    ["For what value of $k$ does $y=kx+1$, $y=4x-3$ have no solution?",
     "For what value of $c$ does $y=2x+c$, $y=2x+5$ have infinitely many solutions?",
     "Two phone plans have the same per-minute rate but different monthly fees. Will their total costs ever be equal? Explain."]),

  A("2.1", "Midpoint of a Line Segment",
    ["Find the midpoint of $(2,3)$ and $(8,7)$.",
     "Find the midpoint of $(-4,1)$ and $(2,-5)$.",
     "$M(3,4)$ is the midpoint of $A(1,2)$ and $B$. Find $B$."],
    ["The midpoint of a segment is $(0,0)$. If one endpoint is $(a,b)$, what is the other? Explain.",
     "Can two different segments share the same midpoint? Give an example."],
    ["Explain why the midpoint formula is the average of the coordinates.",
     "Describe how to find a missing endpoint given one endpoint and the midpoint."],
    ["A circle's diameter has endpoints $(-2,1)$ and $(6,7)$. Find the centre.",
     "Find the midpoint of the segment joining $(-3,5)$ and $(4,-2)$.",
     "The midpoint of $PQ$ is $(2,-1)$ and $P=(-1,3)$. Find $Q$."]),
  A("2.2", "Length of a Line Segment",
    ["Find the length from $(1,2)$ to $(4,6)$.",
     "Find the length from $(0,0)$ to $(6,8)$.",
     "Find the length of the vertical segment from $(2,3)$ to $(2,9)$."],
    ["Why does the order of the two points not matter in the distance formula?",
     "Two points are $5$ apart; one is $(1,2)$ and the other is $(4,k)$. Find $k$."],
    ["Explain how the distance formula comes from the Pythagorean theorem.",
     "When should a length be left as an exact radical instead of a decimal?"],
    ["Show that the triangle $A(0,0)$, $B(4,0)$, $C(2,4)$ is isosceles.",
     "Find the length from $(-2,-3)$ to $(4,5)$.",
     "Find the radius of a circle centred at the origin passing through $(5,12)$."]),
  A("2.3", "Equation of a Circle (centre at the origin)",
    ["Write the equation of a circle centred at the origin with radius $6$.",
     "Find the radius of $x^2+y^2=49$.",
     "Is $(3,4)$ on $x^2+y^2=25$?"],
    ["Explain why $x^2+y^2<r^2$ means a point is inside the circle.",
     "How many points on $x^2+y^2=25$ have $x=3$? Explain."],
    ["Explain where the equation $x^2+y^2=r^2$ comes from.",
     "Describe how to decide if a point is on, inside, or outside a circle."],
    ["Find the equation of the circle centred at the origin through $(6,8)$.",
     "Is $(2,3)$ inside or outside $x^2+y^2=16$?",
     "A circular fountain of radius $5$ m is centred at the origin. Does $(3,4)$ lie on its edge?"]),
  A("2.4", "Medians, Right Bisectors & Altitudes",
    ["Find the median from $C(2,6)$ to the midpoint of $A(0,0)$, $B(6,0)$.",
     "Define median, right bisector, and altitude.",
     "Find the right bisector of $P(1,2)$ and $Q(5,8)$."],
    ["Why does a right bisector use the negative-reciprocal slope?",
     "When is a right bisector a vertical line? Give an example."],
    ["Explain the difference between a median and an altitude.",
     "Describe the steps to find an altitude from a vertex."],
    ["Find the altitude from $C(1,5)$ to side $AB$, where $A(0,0)$, $B(6,2)$.",
     "Find the right bisector of $(-2,3)$ and $(4,3)$.",
     "Find the median from $A(2,1)$ to the midpoint of $B(8,3)$, $C(4,9)$."]),
  A("2.5", "Verifying Geometric Properties",
    ["Show the segments through $(0,0),(2,4)$ and $(0,2),(2,6)$ are parallel.",
     "Are slopes $3$ and $-\\tfrac13$ perpendicular?",
     "Find the length of side $AB$ for $A(1,1)$, $B(5,1)$."],
    ["Why must you check both pairs of opposite sides to prove a parallelogram?",
     "Two sides of a triangle have slopes $2$ and $-\\tfrac12$. What does that tell you about the triangle?"],
    ["Explain how to use slope to test for a right angle.",
     "Explain how length and slope together can prove a figure is a square."],
    ["Show $A(0,0)$, $B(2,4)$, $C(6,2)$ has a right angle at $B$.",
     "Classify the triangle $A(1,1)$, $B(5,1)$, $C(3,5)$.",
     "Show the diagonals of square $A(0,0),B(4,0),C(4,4),D(0,4)$ bisect each other."]),
  A("2.6", "Problems Involving Lines & Line Segments",
    ["Where does $y=-\\tfrac32x+9$ cross the $x$-axis?",
     "Find the perimeter of the triangle $(0,0),(3,0),(0,4)$.",
     "Find the centroid of $(0,0),(6,0),(3,9)$."],
    ["Describe a plan to find where the right bisector of two points meets the $x$-axis.",
     "Why might a coordinate-geometry problem need both the midpoint and the slope tools?"],
    ["Explain how to find the intersection of two lines from their equations.",
     "Describe how to compute a triangle's perimeter from its vertices."],
    ["Find where the right bisector of $A(2,1)$, $B(8,5)$ crosses the $x$-axis.",
     "Find the line through $(2,3)$ parallel to the segment $(-1,0)$–$(3,8)$.",
     "Find the perimeter of triangle $A(0,0)$, $B(3,4)$, $C(8,4)$ (round to one decimal)."]),

  A("3.1", "Expanding & Multiplying Polynomials",
    ["Expand $3x(2x+5)$.",
     "Expand $(x+3)(x+5)$.",
     "Expand $(2x-1)(x+4)$."],
    ["Explain why $(a+b)^2\\neq a^2+b^2$ using a numerical example.",
     "Without expanding fully, what is the constant term of $(x-3)(x+7)$? Explain."],
    ["Describe the FOIL process for multiplying two binomials.",
     "Explain the difference-of-squares pattern and when it appears."],
    ["Expand $(x+4)(x-4)$.",
     "Expand $(2x-3)^2$.",
     "A rectangle has length $(x+5)$ and width $(x+2)$. Write its area as a trinomial."]),
  A("3.2", "Common Factoring & Factoring by Grouping",
    ["Factor $6x^2+15x$.",
     "Factor $8x^3-12x^2$.",
     "Factor by grouping $x^3+2x^2+3x+6$."],
    ["Why should you always factor the GCF first?",
     "When grouping four terms, what must be true for the method to work?"],
    ["Explain how to find the GCF of several terms.",
     "Describe factoring by grouping in steps."],
    ["Factor completely $2x^2+8x+6$.",
     "Factor $10x^2+25x$.",
     "Factor by grouping $6x^2+8x+3x+4$."]),
  A("3.3", "Factoring Simple Trinomials (x² + bx + c)",
    ["Factor $x^2+7x+12$.",
     "Factor $x^2-5x+6$.",
     "Factor $x^2+2x-15$."],
    ["For $x^2+bx+c$ with $c<0$, what do you know about the signs of the two numbers?",
     "Why might a trinomial not factor over the integers?"],
    ["Explain the sum-and-product method.",
     "Describe how to check a factoring by expanding."],
    ["Factor $x^2-x-12$.",
     "Factor $x^2-9x+20$.",
     "The area of a rectangle is $x^2+8x+15$. Find expressions for its length and width."]),
  A("3.4", "Factoring Complex Trinomials (ax² + bx + c)",
    ["Factor $2x^2+7x+3$.",
     "Factor $3x^2+10x+8$.",
     "Factor $6x^2-x-2$."],
    ["In the AC method, why do we use $a\\cdot c$ rather than just $c$?",
     "How can you tell a complex trinomial is a perfect square before factoring?"],
    ["Describe the decomposition (AC) method.",
     "Explain why splitting the middle term lets you factor by grouping."],
    ["Factor $2x^2-5x-3$.",
     "Factor $6x^2+11x+3$.",
     "Factor $4x^2-4x-3$."]),
  A("3.5", "Special Products",
    ["Factor $x^2-25$.",
     "Factor $9x^2-16$.",
     "Factor $x^2+10x+25$."],
    ["Why does $a^2+b^2$ not factor over the real numbers?",
     "How do you confirm a trinomial is a perfect square?"],
    ["State the difference-of-squares and perfect-square patterns.",
     "Explain why factoring the GCF first can reveal a special product."],
    ["Factor $x^2-12x+36$.",
     "Factor $4x^2-20x+25$.",
     "Factor completely $2x^2-8$."]),

  A("4.1", "Introducing Quadratic Relations",
    ["Is $y=5x^2+2x-1$ quadratic?",
     "Compute the second differences for $x:0,1,2,3\\to y:1,3,7,13$.",
     "Does $y=-2x^2+1$ open up or down?"],
    ["A table has constant second differences of $6$. What is $a$?",
     "Why are the first differences not constant for a quadratic?"],
    ["Explain how to tell a relation is quadratic from a table of values.",
     "Describe how the value of $a$ affects a parabola's shape."],
    ["Describe the difference between $y=x^2$ and $y=3x^2$.",
     "Which is quadratic: $y=4x-7$, $y=2x^2-3$, or $y=x^3$?",
     "A height table has constant second difference $-10$. State the value of $a$."]),
  A("4.2", "Key Features of a Parabola",
    ["Find the vertex of $y=x^2-4x+3$.",
     "Find the zeros of $y=x^2-5x+6$.",
     "Find the axis of symmetry of $y=x^2+6x+5$."],
    ["Why is the vertex a minimum when $a>0$?",
     "How are the zeros related to the axis of symmetry?"],
    ["Explain how to find the vertex from standard form.",
     "Describe the domain and range of a parabola that opens up."],
    ["State the range of $y=2x^2-8$.",
     "Does $y=-2x^2+8x-3$ have a maximum or minimum? Find the vertex's $x$.",
     "Describe all key features of $y=-(x-2)^2+5$."]),
  A("4.3", "Transformations & Vertex Form",
    ["Find the vertex of $y=(x-3)^2+2$.",
     "Find the vertex of $y=(x+1)^2-4$.",
     "Does $y=-(x-2)^2+5$ open up or down?"],
    ["Why does $(x+1)$ shift the graph to the left?",
     "Does changing $a$ move the vertex? Explain."],
    ["Describe the role of $a$, $h$, and $k$ in $y=a(x-h)^2+k$.",
     "Explain how to read the maximum or minimum from vertex form."],
    ["Describe the transformations of $y=\\tfrac12(x+2)^2+1$ from $y=x^2$.",
     "Write the vertex form for a parabola with vertex $(-1,4)$ and $a=-2$.",
     "A parabola has vertex $(3,-5)$ and passes through $(4,-3)$. Find $a$."]),
  A("4.4", "Graphing from Vertex Form",
    ["State the vertex and opening of $y=(x-5)^2+2$.",
     "Find the zeros of $y=-(x-2)^2+9$.",
     "From vertex $(0,-4)$ with $a=1$, give the points one step left and right."],
    ["When does a vertex-form parabola have no real zeros?",
     "Why are the two points one step from the vertex symmetric?"],
    ["Describe the step pattern for graphing from vertex form.",
     "Explain how to find the zeros from vertex form."],
    ["Find the zeros of $y=3(x+1)^2-12$.",
     "List the vertex, opening, and zeros of $y=-(x-1)^2+4$.",
     "Sketch $y=2(x-1)^2-3$: state the vertex and two more points."]),
  A("4.5", "Factored Form & the Zeros",
    ["Find the zeros of $y=(x-1)(x-5)$.",
     "Find the axis of symmetry of $y=(x-2)(x-8)$.",
     "Find the vertex of $y=x(x-6)$."],
    ["Why is the axis of symmetry the midpoint of the zeros?",
     "Does $a$ change the zeros? Explain."],
    ["Explain how to find the vertex from factored form.",
     "Describe how to find $a$ given the zeros and one other point."],
    ["State the max/min and vertex of $y=-(x-1)(x-5)$.",
     "A parabola has zeros $2$ and $6$ and passes through $(4,-8)$. Find $a$.",
     "A parabola has zeros $-1$ and $4$ and passes through $(1,-12)$. Find $a$."]),
  A("4.6", "Standard Form & Converting Between Forms",
    ["State the $y$-intercept of $y=2x^2-3x+7$.",
     "Expand $(x-2)(x+3)$ to standard form.",
     "Convert $y=(x+2)^2-5$ to standard form."],
    ["Which form is best for the vertex? For the zeros? For the $y$-intercept?",
     "When completing the square with $a\\neq1$, what must you do first?"],
    ["Describe how to complete the square.",
     "Explain why all three forms describe the same parabola."],
    ["Complete the square: $y=x^2+6x+5$.",
     "Convert $y=2x^2-8x+5$ to vertex form.",
     "Factor $y=x^2-x-6$ and state the zeros."]),

  A("5.1", "Solving Quadratic Equations by Factoring",
    ["Solve $x^2-5x+6=0$.",
     "Solve $x^2+2x-15=0$.",
     "Solve $2x^2+7x+3=0$."],
    ["Why must one side equal zero before using the zero-product property?",
     "What is wrong with dividing $x^2=4x$ by $x$ to solve it?"],
    ["State the zero-product property and explain why it works.",
     "Describe the steps to solve a quadratic equation by factoring."],
    ["Solve $x^2-9=0$.",
     "Solve $x^2=4x+5$.",
     "The product of a number and three more than it is $40$. Find the number."]),
  A("5.2", "Completing the Square",
    ["Complete the square: $x^2+6x$.",
     "Solve $x^2+6x+5=0$ by completing the square.",
     "Convert $y=x^2+8x+10$ to vertex form."],
    ["Why do we add $\\left(\\tfrac{b}{2}\\right)^2$ when completing the square?",
     "When $a\\neq1$, why must you factor $a$ out of the $x$-terms first?"],
    ["Describe completing the square in steps.",
     "Explain how completing the square relates to vertex form."],
    ["Solve $x^2-4x-1=0$.",
     "Convert $y=x^2-4x+7$ to vertex form.",
     "Solve $2x^2-4x-6=0$."]),
  A("5.3", "The Quadratic Formula",
    ["Solve $x^2+5x+6=0$.",
     "Solve $2x^2-4x-3=0$ (round to two decimals).",
     "Identify $a$, $b$, $c$ in $3x^2-5x+1=0$."],
    ["What does the quantity under the square root tell you?",
     "Why must the equation equal zero before applying the formula?"],
    ["State the quadratic formula.",
     "Explain a common sign error students make and how to avoid it."],
    ["Solve $x^2-2x-5=0$ (exact form).",
     "Solve $x^2+x+1=0$ and interpret the result.",
     "A ball's height is $h=-5t^2+20t-15$. Find the times when $h=0$."]),
  A("5.4", "The Discriminant & the Number of Roots",
    ["Find the discriminant of $x^2-5x+6$.",
     "Find the discriminant of $x^2-6x+9$.",
     "Find the discriminant of $x^2+x+1$."],
    ["How does the discriminant relate to the parabola's $x$-intercepts?",
     "For what value of $k$ does $x^2+kx+9=0$ have exactly one root?"],
    ["Explain what each sign of the discriminant means.",
     "Why is the discriminant useful before you solve?"],
    ["How many real roots does $2x^2+3x-1=0$ have?",
     "For what $k$ does $x^2-kx+4=0$ have a double root?",
     "The parabola $y=x^2+bx+4$ touches the $x$-axis once. Find $b$."]),
  A("5.5", "Quadratic Word Problems",
    ["For $h=-5t^2+20t$, find the maximum height.",
     "A rectangle has perimeter $20$. Find the maximum area.",
     "Two consecutive integers multiply to $56$. Find them."],
    ["Why do you reject a negative time in a projectile problem?",
     "How is the time of the maximum height different from the maximum height value?"],
    ["Outline the steps to solve a quadratic word problem.",
     "Explain why a maximum-area rectangle with a fixed perimeter is a square."],
    ["For $h=-5t^2+30t$, when is the height $40$ m?",
     "Revenue is $R=p(100-2p)$. Find the price that maximizes revenue.",
     "A ball follows $h=-5t^2+25t+30$. When does it land?"]),
  A("5.6", "Linear–Quadratic Systems",
    ["Solve $y=x^2$, $y=x+2$.",
     "Solve $y=x^2-4$, $y=2x-1$.",
     "How many intersection points do $y=x^2$ and $y=2x-1$ have?"],
    ["What does the discriminant of the combined equation tell you?",
     "What does it mean for a line to be tangent to a parabola?"],
    ["Describe how to solve a linear–quadratic system.",
     "Explain why such a system can have $0$, $1$, or $2$ solutions."],
    ["Solve $y=x^2$, $y=x+6$.",
     "How many intersections do $y=x^2+1$ and $y=-x$ have?",
     "Solve $y=-x^2+4$, $y=-x+2$."]),

  A("6.1", "Congruence & Similar Triangles",
    ["Are triangles with sides $3,4,5$ and $6,8,10$ similar?",
     "$\\triangle ABC\\sim\\triangle DEF$ with $AB=3$ and $DE=12$. Find the scale factor.",
     "A side of $5$ corresponds to $15$; what does a side of $8$ correspond to?"],
    ["Why is AA enough to prove two triangles are similar?",
     "Does equal perimeter imply two triangles are similar? Explain."],
    ["State the conditions for similarity (AA, SSS, SAS).",
     "Explain the difference between congruent and similar triangles."],
    ["A $1.5$-m stick casts a $2$-m shadow; a flagpole casts a $16$-m shadow. Find its height.",
     "$\\triangle ABC\\sim\\triangle DEF$ with $AB=4$, $BC=6$, $DE=6$. Find $EF$.",
     "Are triangles $5,12,13$ and $10,24,26$ similar?"]),
  A("6.2", "Solving Problems with Similar Triangles",
    ["Solve $\\dfrac{x}{10}=\\dfrac{9}{6}$.",
     "A $2$-m stick casts $3$ m; a tree casts $18$ m. Find the tree's height.",
     "Solve $\\dfrac{6}{x}=\\dfrac{8}{12}$."],
    ["Why are the triangles in a shadow problem similar?",
     "What can go wrong if corresponding sides are placed in different orders?"],
    ["Describe how to set up a proportion from similar triangles.",
     "Explain how to check a proportion solution."],
    ["On a map $3$ cm represents $12$ km; a trail is $5$ cm. Find its real length.",
     "A $1$-m stick casts $0.5$ m; a pole casts $4$ m. Find the pole's height.",
     "A $1.8$-m person $3$ m from a lamp casts a $2$-m shadow. Find the lamp's height (use $\\dfrac{H}{5}=\\dfrac{1.8}{2}$)."]),
  A("6.3", "The Primary Trigonometric Ratios",
    ["opp $=3$, hyp $=5$: find $\\sin\\theta$.",
     "adj $=8$, hyp $=17$: find $\\cos\\theta$.",
     "opp $=7$, adj $=24$: find $\\tan\\theta$."],
    ["Why do similar right triangles share the same trig ratios?",
     "What happens to opposite and adjacent for the other acute angle?"],
    ["State SOH CAH TOA.",
     "Explain how to identify the opposite, adjacent, and hypotenuse."],
    ["Evaluate $\\cos60°$.",
     "opp $=9$, adj $=12$: find the hypotenuse and $\\sin\\theta$.",
     "In a $5$-$12$-$13$ triangle, find $\\sin$, $\\cos$, $\\tan$ of the angle opposite the side $5$."]),
  A("6.4", "Finding Side Lengths",
    ["Angle $30°$, hyp $10$: find the opposite side.",
     "Angle $45°$, adj $10$: find the opposite side.",
     "Angle $30°$, opp $6$: find the hypotenuse."],
    ["How do you decide which ratio to use?",
     "When the unknown is in the denominator, how does the method change?"],
    ["Describe how to choose and set up the correct ratio.",
     "Explain how to check that a side answer is reasonable."],
    ["Angle $70°$, hyp $15$: find the adjacent side.",
     "Angle $38°$, opp $9$: find the adjacent side.",
     "A $5$-m ramp rises at $20°$. How high is its top end?"]),
  A("6.5", "Finding Angles",
    ["$\\sin\\theta=0.5$: find $\\theta$.",
     "$\\cos\\theta=0.5$: find $\\theta$.",
     "$\\tan\\theta=1$: find $\\theta$."],
    ["Why do you use $\\sin^{-1}$ rather than $\\sin$ here?",
     "How can you find the second acute angle without inverse trig?"],
    ["Explain what the inverse trig functions do.",
     "Describe how to choose the right inverse for the sides you have."],
    ["opp $=7$, hyp $=25$: find $\\theta$.",
     "opp $=9$, adj $=12$: find $\\theta$.",
     "Find both acute angles of the $3$-$4$-$5$ triangle."]),
  A("6.6", "Solving Right Triangles & Applications",
    ["Angle $30°$, hyp $10$: find both legs.",
     "Legs $6$ and $8$: find the hypotenuse and both acute angles.",
     "Define the angle of elevation and the angle of depression."],
    ["Why are the angle of elevation and the matching angle of depression equal?",
     "What is the first thing you should do in a trigonometry word problem?"],
    ["Describe how to solve a right triangle completely.",
     "Explain how to set up an angle-of-elevation problem."],
    ["From $50$ m away, a building's top has an elevation angle of $35°$. Find its height.",
     "From a $20$-m cliff a boat has a depression angle of $25°$. Find the boat's distance.",
     "A $6$-m ladder leans at $65°$ to the ground. How high does it reach?"]),

  A("7.1", "The Sine Law",
    ["$A=40°$, $B=60°$, $a=10$: find $b$.",
     "State the sine law.",
     "$A=50°$, $B=60°$, $a=8$: find $C$."],
    ["Why must you have an angle and its opposite side to start the sine law?",
     "What is the ambiguous (SSA) case?"],
    ["Explain which side pairs with which angle in the sine law.",
     "Describe how to find an angle using the sine law."],
    ["$A=45°$, $B=55°$, $a=12$: find $c$.",
     "$a=7$, $b=10$, $B=80°$: find $A$.",
     "A plot has angles $35°$ and $75°$; the side opposite $35°$ is $50$ m. Find the side opposite $75°$."]),
  A("7.2", "The Cosine Law",
    ["$a=8$, $b=6$, $C=60°$: find $c$.",
     "State the cosine law.",
     "Sides $6,7,8$: find the angle opposite the side $8$."],
    ["How is the cosine law related to the Pythagorean theorem?",
     "What does a negative cosine tell you about an angle?"],
    ["Explain when to use the cosine law instead of the sine law.",
     "Describe how to find an angle using the cosine law."],
    ["$a=5$, $b=7$, $C=40°$: find $c$.",
     "Sides $5,6,9$: find the largest angle.",
     "Two sides of $40$ m and $50$ m meet at $70°$. Find the third side."]),
  A("7.3", "Choosing the Right Law",
    ["Given $A=40°$, $B=65°$, $a=10$: which law applies?",
     "Given $a=9$, $b=12$, $C=55°$: which law applies?",
     "Given sides $7,9,11$ and asked for an angle: which law applies?"],
    ["Why can't the sine law start an SAS problem?",
     "When is right-triangle trig simpler than either law?"],
    ["Describe the decision guide for choosing a method.",
     "Explain the ambiguous case and why to watch for it."],
    ["Given $A=30°$, $B=80°$, $b=12$: name the law and find $a$.",
     "Given sides $5,6,10$: name the law and find the largest angle.",
     "Given $a=7$, $c=9$, $B=48°$: name the law and find $b$."]),
  A("7.4", "Applications of the Sine & Cosine Laws",
    ["Two sides of $20$ and $25$ meet at $60°$. Find the third side.",
     "Angles $40°$ and $75°$; the side opposite $40°$ is $18$. Find the side opposite $75°$.",
     "Sides $9,12,15$: find the largest angle."],
    ["Why convert a bearing into an interior angle before applying a law?",
     "Why is drawing a diagram the essential first step?"],
    ["Outline the steps to solve a trigonometry application.",
     "Explain how to decide between the sine and cosine laws in a word problem."],
    ["From point $C$, two points are $80$ m and $100$ m away with $70°$ between them. Find the distance between them.",
     "A ship sails $30$ km, turns through an interior angle of $110°$, then sails $40$ km. How far is it from the start?",
     "Two observers $40$ m apart sight a boat at baseline angles $55°$ and $65°$. Find the boat's distance from the second observer."]),
].map((a) => [a.code, a]));

// ── seeding ──────────────────────────────────────────────────
async function getTeacherId() {
  const { data: created, error } = await db.auth.admin.createUser({
    email: TEACHER_EMAIL, password: teacherPassword(env), email_confirm: true,
    user_metadata: { full_name: "Integration Academy", role: "admin" },
  });
  if (created?.user) {
    await db.from("profiles").upsert({ id: created.user.id, full_name: "Integration Academy", role: "admin" });
    return created.user.id;
  }
  const { data: list } = await db.auth.admin.listUsers({ perPage: 1000 });
  const found = list.users.find((u) => u.email === TEACHER_EMAIL);
  if (!found) throw new Error("Could not create or find teacher: " + (error?.message ?? ""));
  await db.from("profiles").upsert({ id: found.id, full_name: "Integration Academy", role: "admin" });
  return found.id;
}

async function run() {
  const teacherId = await getTeacherId();
  console.log("Teacher id:", teacherId);

  let course;
  const existing = await db.from("courses").select("id").eq("teacher_id", teacherId).eq("title", COURSE_TITLE).maybeSingle();
  if (existing.data) {
    course = existing.data;
    await db.from("courses").update({ code: "MPM2D", description: DESC, level: "10", published: true }).eq("id", course.id);
  } else {
    const ins = await db.from("courses").insert({ teacher_id: teacherId, code: "MPM2D", title: COURSE_TITLE, description: DESC, level: "10", published: true }).select("id").single();
    if (ins.error) throw ins.error;
    course = ins.data;
  }
  console.log("Course:", course.id);

  await db.from("lessons").delete().eq("course_id", course.id);
  await db.from("assignments").delete().eq("course_id", course.id);

  let pos = 0;
  let asg = 0;
  for (const s of subjects) {
    const { error } = await db.from("lessons").insert({ course_id: course.id, title: `${s.code} ${s.title}`, blocks: s.blocks, position: pos++, published: true });
    if (error) throw error;
    console.log(`  Lesson ${s.code} ${s.title}`);

    const ad = ASSIGN[s.code];
    if (ad) {
      const { error: ae } = await db.from("assignments").insert({ course_id: course.id, title: ad.title, description: ad.description, published: true });
      if (ae) throw ae;
      asg++;
    }
  }

  console.log(`\nDone. Seeded ${subjects.length} MPM2D lessons (all full) + ${asg} assignments.`);
}

// Only auto-seed when run directly (so seed-mfm2p.mjs can import the lessons).
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  run().catch((e) => { console.error("SEED FAILED:", e.message ?? e); process.exit(1); });
}
