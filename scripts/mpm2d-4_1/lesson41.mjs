// MPM2D 4.1 — Introducing Quadratic Relations (rebuilt): colour-coded difference tables + "check the point" graphs.
import { html, gframe, ex, qa, watchOut, PR } from "../mth1w-ch1/lib.mjs";
import { poly, diffs, classify, diffTableHtml, compareCards, gview } from "./lib41.mjs";

export const CODE = "4.1";
export const FULL_TITLE = "4.1 Introducing Quadratic Relations";

const m = (n) => (n < 0 ? `-${-n}` : `${n}`);
const L = (arr) => arr.map((n) => `\\(${m(n)}\\)`).join(", ");
const range = (a, b, s = 1) => { const r = []; for (let x = a; x <= b + 1e-9; x += s) r.push(Math.round(x * 1e6) / 1e6); return r; };
const GREEN = "#1b7a44", RED = "#be123c";
const pr = (n, label, q, ans) => `<div class="practice-box" ${PR}><h3>Question ${n} (${label})</h3><div>${q}</div><details><summary>View answer</summary><div class="solution"><div class="step"><em>${ans}</em></div></div></details></div>`;
const lbl = (x, y, color = GREEN, t) => ({ x, y, t: t ?? `(${x}, ${y})`, c: color });

/** Interactive graph with the table's points labelled on the curve ("check the point"). */
function pointGraph({ expr, points, bounds, title, offPoints = [], dMin, dMax }) {
  const fn = dMin !== undefined || dMax !== undefined ? { kind: "cartesian", expr: `y = ${expr}`, ...(dMin !== undefined ? { dMin: String(dMin) } : {}), ...(dMax !== undefined ? { dMax: String(dMax) } : {}) } : `y = ${expr}`;
  return gframe([fn], { title, labels: [...points.map(([x, y]) => lbl(x, y)), ...offPoints.map(([x, y, t]) => lbl(x, y, RED, t))], ...gview(...bounds) });
}
/** Green "check a point" call-out. */
const check = (body) => `<div style="margin:8px 0;padding:9px 12px;border-radius:10px;background:#ecfdf5;border:1px solid #86efac;border-left:5px solid #16a34a;font-size:14.5px;line-height:1.55;"><strong style="color:#166534;">\u{1F50D} Check a point.</strong> ${body}</div>`;

// ── example data (every table below is computed from its function) ──
const f1 = poly(1, -4, 3), xs1 = range(-1, 4), ys1 = xs1.map(f1);
const xs3 = range(0, 4), ys3 = [5, 6, 9, 14, 21];
const f5 = poly(2, -3, 4), xs5 = range(0, 4), ys5 = xs5.map(f5);
const f6 = poly(-1, 6, -5), xs6 = range(0, 6), ys6 = xs6.map(f6);
const f7 = poly(1, 0, -1), xs7 = range(0, 6, 2), ys7 = xs7.map(f7);
const f8 = poly(-5, 20, 1), xs8 = range(0, 4), ys8 = xs8.map(f8);

const lessonHtml = String.raw`<div class="lecture-box">
  <h1>\u{1F4CA} Introducing Quadratic Relations</h1>
  <p><strong>Overview.</strong> A <strong>quadratic relation</strong> has \(x^2\) as its highest power, and its graph is a <strong>parabola</strong>. You can spot one in <em>three</em> ways: from its equation, from its graph, and from a <strong>table of values</strong> using <strong>finite differences</strong> — the differences between neighbouring \(y\)-values. This lesson makes that last tool powerful: you will read difference tables, find missing values, work out \(a\), \(b\) and \(c\) from a table, and always <strong>check the points on the graph</strong>.</p>

  <h2>\u{1F4CC} Three tables, three behaviours</h2>
  <p>Subtract each \(y\)-value from the next to get the <strong style="color:#1e40af;">1st differences</strong>; subtract those to get the <strong style="color:#92400e;">2nd differences</strong>. What stays constant tells you the type of relation:</p>
  ${compareCards([
    { title: "Linear — y = 2x + 1", xs: range(0, 4), ys: range(0, 4).map((x) => 2 * x + 1) },
    { title: "Quadratic — y = x² + x", xs: range(0, 4), ys: range(0, 4).map((x) => x * x + x) },
    { title: "Neither — y = 2ˣ", xs: range(0, 4), ys: range(0, 4).map((x) => 2 ** x) },
  ])}
  <ul>
    <li><strong>Linear:</strong> the 1st differences are constant (and the 2nd differences are all \(0\)).</li>
    <li><strong>Quadratic:</strong> the 1st differences change, but the <strong>2nd differences are constant</strong>.</li>
    <li><strong>Neither:</strong> even the 2nd differences keep changing (as for the exponential \(2^x\)).</li>
  </ul>
  <p><strong>Important:</strong> the \(x\)-values must go up by the <em>same step</em> each time. If the step is \(h\), the constant 2nd difference of \(y=ax^2+bx+c\) is \(2a h^2\). With step \(h=1\) that is simply \(2a\).</p>

  <h2>\u{1F4CC} Checking a point</h2>
  <p>A point \((x,y)\) lies on the graph of a relation exactly when substituting its \(x\)-value gives its \(y\)-value. Every row of a table is a point on the graph, so you can <strong>check the table against the graph</strong> — and a single point that sits off the curve means a value in the table is wrong.</p>

  <h2>\u{1F4CC} Reading the equation from a table (step 1)</h2>
  <ol>
    <li>Find the 2nd difference \(d\). Then \(a=\dfrac d2\).</li>
    <li>The \(y\)-value at \(x=0\) is \(c\).</li>
    <li>Substitute one more point to find \(b\).</li>
    <li>Check with a point you did not use.</li>
  </ol>

  ${watchOut([
    String.raw`<strong>Look at the right row.</strong> Constant 1st differences mean <em>linear</em>. For a quadratic you need constant <em>2nd</em> differences.`,
    String.raw`<strong>The \(x\)-steps must be equal.</strong> If \(x\) goes \(0,1,3,4\) the differences cannot be compared directly.`,
    String.raw`<strong>The 2nd difference is \(2a\), not \(a\)</strong> (when the step is \(1\)). A 2nd difference of \(6\) means \(a=3\).`,
    String.raw`<strong>One point off the curve means one wrong table value</strong> — recompute that row before blaming the equation.`,
  ])}

  <h2>\u{1F535} Examples</h2>

  ${ex(
    "Example 1: Build a difference table and check it on the graph",
    String.raw`For \(y=x^2-4x+3\), complete the table for \(x=-1\) to \(4\), decide whether the relation is quadratic, and check the points on the graph.`,
    [
      String.raw`Substitute each \(x\): \(y\)-values ${L(ys1)}.`,
      String.raw`1st differences: ${L(diffs(ys1))}. They change, so it is not linear.`,
      String.raw`2nd differences: ${L(diffs(diffs(ys1)))} — constant, so the relation is <strong>quadratic</strong>, and \(2a=2\) gives \(a=1\) (matching \(x^2\)).`,
    ],
    String.raw`quadratic with \(a=1\); every table point lies on the parabola whose lowest point is \((2,-1)\)`,
    diffTableHtml({ xs: xs1, ys: ys1 }) +
      check(String.raw`Take \((3,0)\): \(y=3^2-4(3)+3=9-12+3=0\) ✓, so \((3,0)\) is on the graph. Look at the green labels below — every table row appears on the curve.`) +
      pointGraph({ expr: "x^2 - 4*x + 3", points: xs1.map((x, i) => [x, ys1[i]]), bounds: [-2, 5, -2, 9], title: "y = x² − 4x + 3: the table points sit on the parabola" }),
  )}
  ${ex(
    "Example 2: Is a point on the graph?",
    String.raw`Is the point \((3,6)\) on the graph of \(y=x^2-2x\)? What about \((3,3)\)?`,
    [
      String.raw`Substitute \(x=3\): \(y=3^2-2(3)=9-6=3\).`,
      String.raw`The graph passes through \((3,3)\), not \((3,6)\).`,
    ],
    String.raw`\((3,6)\) is <strong>not</strong> on the graph; \((3,3)\) is`,
    check(String.raw`The <span style="color:#be123c;font-weight:700;">red</span> point \((3,6)\) floats above the curve; the <span style="color:#166534;font-weight:700;">green</span> point \((3,3)\) sits on it.`) +
      pointGraph({ expr: "x^2 - 2*x", points: [[0, 0], [1, -1], [2, 0], [3, 3]], offPoints: [[3, 6, "(3, 6) ✗"]], bounds: [-2, 5, -2, 9], title: "y = x² − 2x: only (3, 3) is on the parabola" }),
  )}
  ${ex(
    "Example 3: Find a missing value",
    String.raw`A quadratic relation has the table below. Find the missing \(y\)-value.`,
    [
      String.raw`The 1st differences so far: \(1\) (from \(5\) to \(6\)) and \(3\) (from \(6\) to \(9\)). The 2nd difference is \(3-1=2\).`,
      String.raw`The next 1st difference must be \(3+2=5\), so the missing value is \(9+5=14\).`,
      String.raw`Check the last step: \(14+7=21\) (the next 1st difference is \(5+2=7\)) ✓.`,
    ],
    String.raw`the missing value is \(14\), and the relation is \(y=x^2+5\)`,
    diffTableHtml({ xs: xs3, ys: ys3, blankY: [3] }) +
      check(String.raw`Test \((3,14)\) in \(y=x^2+5\): \(9+5=14\) ✓. The point lies on the parabola.`) +
      pointGraph({ expr: "x^2 + 5", points: xs3.map((x, i) => [x, ys3[i]]), bounds: [-1, 5, 0, 24], title: "y = x² + 5 through all five table points, including (3, 14)" }),
  )}
  ${ex(
    "Example 4: Find a, b and c from a table",
    String.raw`Find the equation of the relation \(y=ax^2+bx+c\) from the table.`,
    [
      String.raw`2nd differences are ${L(diffs(diffs(ys5)))}, so \(2a=4\) and \(a=2\).`,
      String.raw`At \(x=0\): \(c=${ys5[0]}\).`,
      String.raw`At \(x=1\): \(2(1)^2+b(1)+4=3\), so \(b=-3\).`,
      String.raw`Check an unused point, \(x=3\): \(2(9)-3(3)+4=13\) ✓.`,
    ],
    String.raw`\(y=2x^2-3x+4\)`,
    diffTableHtml({ xs: xs5, ys: ys5 }) +
      check(String.raw`\((4,24)\): \(2(16)-3(4)+4=32-12+4=24\) ✓ — the last table point is on the graph too.`) +
      pointGraph({ expr: "2*x^2 - 3*x + 4", points: xs5.map((x, i) => [x, ys5[i]]), bounds: [-1, 5, 0, 26], title: "y = 2x² − 3x + 4" }),
  )}
  ${ex(
    "Example 5: A parabola that opens down",
    String.raw`What do the differences tell you about \(y=-x^2+6x-5\)?`,
    [
      String.raw`2nd differences are ${L(diffs(diffs(ys6)))} — constant and <em>negative</em>, so \(2a=-2\) and \(a=-1\).`,
      String.raw`A negative \(a\) means the parabola opens <strong>down</strong>. The 1st differences go from positive to negative, so the \(y\)-values rise, then fall.`,
      String.raw`The \(y\)-values peak at \(4\) when \(x=3\).`,
    ],
    String.raw`opens down with maximum value \(4\) at \(x=3\) (vertex \((3,4)\))`,
    diffTableHtml({ xs: xs6, ys: ys6 }) +
      check(String.raw`The values \(0\) at \(x=1\) and \(0\) at \(x=5\) are equally far from the peak at \(x=3\) — the graph is symmetric.`) +
      pointGraph({ expr: "-x^2 + 6*x - 5", points: xs6.map((x, i) => [x, ys6[i]]), bounds: [-1, 7, -6, 6], title: "y = −x² + 6x − 5 opens down" }),
  )}
  ${ex(
    "Example 6 (challenge): Steps of 2",
    String.raw`The table below uses \(x\)-steps of \(2\). Find \(a\) if \(y=ax^2+c\).`,
    [
      String.raw`1st differences ${L(diffs(ys7))}; 2nd differences ${L(diffs(diffs(ys7)))} — constant, so it is quadratic.`,
      String.raw`With step \(h=2\), the 2nd difference is \(2ah^2=8a\). Since it equals \(8\), \(a=1\).`,
      String.raw`\(c\) is the \(y\)-value at \(x=0\): \(c=-1\).`,
    ],
    String.raw`\(y=x^2-1\) (a step of \(2\) multiplies the 2nd difference by \(h^2=4\))`,
    diffTableHtml({ xs: xs7, ys: ys7 }) +
      check(String.raw`\((6,35)\): \(6^2-1=35\) ✓.`),
  )}
  ${ex(
    "Example 7: A thrown ball",
    String.raw`A ball's height is \(h=-5t^2+20t+1\) (metres, \(t\) in seconds). Use the table to describe the flight and check the points.`,
    [
      String.raw`2nd differences are ${L(diffs(diffs(ys8)))}, so \(2a=-10\) and \(a=-5\) — matching the equation.`,
      String.raw`The heights \(${ys8.join(", ")}\) rise, peak at \(21\) m when \(t=2\), then fall back.`,
      String.raw`The heights at \(t=1\) and \(t=3\) are equal (\(16\) m): the path is symmetric about \(t=2\).`,
    ],
    String.raw`maximum height \(21\) m at \(t=2\) s; the ball is back at \(1\) m at \(t=4\) s`,
    diffTableHtml({ xs: xs8, ys: ys8, name: "h" }) +
      check(String.raw`\((3,16)\): \(-5(9)+20(3)+1=-45+60+1=16\) ✓ — the ball is at \(16\) m on the way up (\(t=1\)) <em>and</em> on the way down (\(t=3\)).`) +
      pointGraph({ expr: "-5*x^2 + 20*x + 1", points: xs8.map((x, i) => [x, ys8[i]]), bounds: [-1, 5, -2, 24], title: "h(t) = −5t² + 20t + 1 (x is the time t)" }),
  )}

  <h2>\u{1F7E1} Practice Questions</h2>
  ${pr(1, "classify the table", String.raw`Is the relation quadratic?` + diffTableHtml({ xs: range(1, 5), ys: [3, 8, 15, 24, 35], verdict: false }), String.raw`1st differences \(5,7,9,11\); 2nd differences \(2,2,2\) — constant. <strong>Quadratic</strong> (\(a=1\); it is \(y=x^2+2x\)).`)}
  ${pr(2, "missing value", String.raw`This relation is quadratic. Find the missing \(y\)-value.` + diffTableHtml({ xs: range(0, 4), ys: [7, 4, 3, 4, 7], blankY: [3], verdict: false }), String.raw`1st differences \(-3,-1,?\): the 2nd difference is \(2\), so the missing 1st difference is \(1\) and the missing value is \(3+1=4\). Check: next 1st difference \(3\), and \(4+3=7\) ✓.`)}
  ${pr(3, "check the point", String.raw`Is \((-2,9)\) on the graph of \(y=x^2+3x+7\)?`, String.raw`\((-2)^2+3(-2)+7=4-6+7=5\), not \(9\). <strong>No</strong> — the graph passes through \((-2,5)\).`)}
  ${pr(4, "find the equation", String.raw`Find the equation of the quadratic relation through these points.` + diffTableHtml({ xs: range(0, 3), ys: [6, 4, 6, 12], verdict: false }), String.raw`2nd difference \(4\), so \(a=2\); \(c=6\); at \(x=1\): \(2+b+6=4\), so \(b=-4\). <strong>\(y=2x^2-4x+6\)</strong>. Check: \(x=3\): \(18-12+6=12\) ✓.`)}
  ${pr(5, "steps of 2", String.raw`Find the equation \(y=ax^2+bx+c\) from this table (steps of \(2\)).` + diffTableHtml({ xs: range(0, 6, 2), ys: [3, 7, 19, 39], verdict: false }), String.raw`2nd difference \(8=2a(2)^2\), so \(a=1\); \(c=3\); at \(x=2\): \(4+2b+3=7\), so \(b=0\). <strong>\(y=x^2+3\)</strong>. Check \(x=6\): \(36+3=39\) ✓.`)}
  ${pr(6, "challenge", String.raw`A quadratic relation has the points \((0,-2)\), \((1,1)\) and \((2,10)\). Find \(y\) when \(x=5\).`, String.raw`1st differences \(3,9\); 2nd difference \(6\), so \(a=3\). \(c=-2\); at \(x=1\): \(3+b-2=1\), so \(b=0\). \(y=3x^2-2\), so \(y(5)=75-2=\) <strong>\(73\)</strong>.`)}
  <h2>❓ Q&amp;A Summary</h2>
  ${qa("Q1: How do I tell from a table that a relation is quadratic?", String.raw`Subtract neighbouring \(y\)-values to get the 1st differences, then subtract again for the 2nd differences. If the 2nd differences are constant (and not \(0\)) and the \(x\)-steps are equal, the relation is quadratic.`)}
  ${qa("Q2: What if the 1st differences are constant?", String.raw`Then the relation is linear, not quadratic — its 2nd differences are all \(0\).`)}
  ${qa("Q3: How is the 2nd difference related to \\(a\\)?", String.raw`For equal \(x\)-steps of size \(h\), the constant 2nd difference is \(2ah^2\). With \(h=1\) it is \(2a\), so \(a=\) (2nd difference) \(\div2\).`)}
  ${qa("Q4: How do I check that a point is on a graph?", String.raw`Substitute its \(x\)-value into the equation. If you get its \(y\)-value, the point is on the graph; if not, it lies off the curve.`)}
  ${qa("Q5: What does a negative 2nd difference mean?", String.raw`\(a\) is negative, so the parabola opens down and has a maximum value.`)}
  ${qa("Q6: Where do quadratic tables show up in real life?", String.raw`Falling objects and projectiles (height against time), areas of shapes that grow in two directions, and revenue models.`)}
</div>`;

export const lessonBlocks = () => [html(lessonHtml.replace(/\\u\{([0-9A-F]+)\}/g, (_, h) => String.fromCodePoint(parseInt(h, 16))).replace(/\\u([0-9A-F]{4})/g, (_, h) => String.fromCharCode(parseInt(h, 16))))];
