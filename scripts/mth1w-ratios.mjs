// MTH1W 1.8 — Working with Ratios and Proportions.
// Everything for the topic lives here: web lesson, assignment, question bank and the
// worksheet (site content + PDF data). Lesson, worksheet and bank each use their OWN
// examples; the assignment uses the teacher-supplied questions.
// Nothing here touches the database — see publish-mth1w-1_7.mjs.
import { html, gframe } from "./seed-mpm2d.mjs";

export const CODE = "1.8";
export const TITLE = "Working with Ratios and Proportions";
export const FULL_TITLE = `${CODE} ${TITLE}`;

const EX = `style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const PR = `style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const QA = `style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const MI = `style="background-color:#fdecea;border-left:5px solid #d9534f;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const TH = `style="border:1px solid #c7d2fe;padding:7px 12px;text-align:center;background:#eef2ff;color:#3730a3;"`;
const TD = `style="border:1px solid #e2e8f0;padding:6px 12px;text-align:center;"`;
const TDL = `style="border:1px solid #e2e8f0;padding:6px 12px;text-align:left;font-weight:700;"`;

// ───────────────────────── figures ─────────────────────────
// Tape diagram: one block per "part", grouped and labelled. Widths come from the part counts,
// so the picture always matches the ratio it is captioning.
function tape(segs, caption, unit = 32) {
  const total = segs.reduce((s, g) => s + g.n, 0);
  const W = total * unit + 20, H = 82;
  let x = 10, out = "";
  for (const g of segs) {
    const x0 = x;
    for (let i = 0; i < g.n; i++) {
      out += `<rect x="${x}" y="26" width="${unit}" height="34" fill="${g.fill}" stroke="${g.stroke}" stroke-width="1.5"/>`;
      x += unit;
    }
    out += `<text x="${x0 + (g.n * unit) / 2}" y="18" font-size="12" font-weight="700" text-anchor="middle" fill="${g.stroke}">${g.label}</text>`;
    out += `<text x="${x0 + (g.n * unit) / 2}" y="76" font-size="12" font-weight="700" text-anchor="middle" fill="#0f172a">${g.n} ${g.n === 1 ? "part" : "parts"}</text>`;
  }
  return `<div style="text-align:center;margin:12px 0;"><svg viewBox="0 0 ${W} ${H}" width="${W}" style="max-width:100%;height:auto;" role="img" aria-label="${caption}">${out}</svg><div style="font-size:13px;color:#64748b;margin-top:2px;">${caption}</div></div>`;
}
const BLUE = { fill: "#bfdbfe", stroke: "#1e40af" };
const AMBER = { fill: "#fde68a", stroke: "#b45309" };
const GREEN = { fill: "#bbf7d0", stroke: "#15803d" };
const ROSE = { fill: "#fecdd3", stroke: "#be123c" };

const table = (head, rows) =>
  `<div style="overflow-x:auto;margin:10px 0;"><table style="border-collapse:collapse;width:100%;font-size:14px;"><thead><tr>${head.map((h) => `<th ${TH}>${h}</th>`).join("")}</tr></thead><tbody>${rows
    .map((r) => `<tr>${r.map((c, i) => `<td ${i === 0 ? TDL : TD}>${c}</td>`).join("")}</tr>`)
    .join("")}</tbody></table></div>`;

// ───────────────────────── lesson ─────────────────────────
const ex = (title, q, steps, conclusion, extra = "") =>
  `<div class="example-box" ${EX}><h3>${title}</h3><p>${q}</p><div class="solution">${steps
    .map((s, i) => `<div class="step"><strong>Step ${i + 1}:</strong> ${s}</div>`)
    .join("")}<em>Conclusion: ${conclusion} ✓</em></div>${extra}</div>`;
const pr = (n, label, q, ans) =>
  `<div class="practice-box" ${PR}><h3>Question ${n} (${label})</h3><p>${q}</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>${ans}</em></div></div></details></div>`;
const qa = (q, a) => `<div class="qa-box" ${QA}><h3>${q}</h3><p><em>${a}</em></p></div>`;

const lessonHtml = String.raw`<div class="lecture-box">
  <h1>⚖️ Working with Ratios and Proportions</h1>
  <p><strong>Overview.</strong> A <strong>ratio</strong> compares two or more quantities that are measured in the same units. A <strong>proportion</strong> says that two ratios are equal. Together they let you scale a recipe, share a bill fairly, read a map, or decide which of two deals is better — and they are the foundation for slope and proportional relationships later in the course.</p>

  <h2>📌 What a ratio says</h2>
  <p>The ratio of blue to gray squares below is \(3:5\). It can also be written "3 to 5" or \(\dfrac{3}{5}\). The <strong>order matters</strong>: \(3:5\) and \(5:3\) are different comparisons.</p>
  ${tape([{ n: 3, label: "blue", ...BLUE }, { n: 5, label: "gray", fill: "#e2e8f0", stroke: "#475569" }], "Blue to gray is 3 : 5. Blue to the whole is 3 : 8.")}
  <ul>
    <li><strong>Part-to-part</strong> compares one part with another: blue to gray is \(3:5\).</li>
    <li><strong>Part-to-whole</strong> compares one part with the total: blue to all squares is \(3:8\) (the whole is \(3+5=8\) parts).</li>
  </ul>

  <h2>📌 Equivalent ratios and simplest form</h2>
  <p><strong>Equivalent ratios</strong> describe the same comparison. Multiply <em>or</em> divide <strong>both terms by the same non-zero number</strong> and you get an equivalent ratio: \(3:5=6:10=9:15\). A ratio is in <strong>simplest form</strong> (lowest terms) when the only common factor of its terms is \(1\) — divide both terms by their greatest common factor (GCF).</p>
  <p><strong>Decimals and fractions.</strong> Clear them first: multiply every term by \(10\) or \(100\) to remove decimals, or by the common denominator to remove fractions, then simplify.</p>
  <p><strong>Are two ratios equivalent?</strong> Simplify both and compare — or check that the cross-products are equal: \(a:b\) and \(c:d\) are equivalent when \(a\times d=b\times c\).</p>

  <h2>📌 Three-term ratios and sharing</h2>
  <p>A ratio like \(a:b:c\) compares three quantities. To share a total, add the terms to get the <strong>number of parts</strong>, find the <strong>size of one part</strong> (total \(\div\) parts), then multiply back. If you are given one quantity instead of the total, that tells you the size of one part.</p>

  <h2>📌 Proportions and unit rates</h2>
  <p>A <strong>proportion</strong> is an equation stating two ratios are equal, such as \(\dfrac{2}{5}=\dfrac{x}{35}\). Three reliable ways to solve it:</p>
  <ul>
    <li><strong>Scale factor:</strong> \(35\div5=7\), so \(x=2\times7=14\).</li>
    <li><strong>Unit rate:</strong> find the amount per \(1\), then multiply by what you need.</li>
    <li><strong>Cross-multiply:</strong> \(5x=2\times35\), so \(x=14\).</li>
  </ul>
  <p>A <strong>proportional relationship</strong> keeps the same ratio between its two quantities, so its graph is a straight line through the origin \((0,0)\).</p>

  <div class="mistake-box" ${MI}>
    <h3>⚠️ Watch out</h3>
    <ul>
      <li><strong>Adding is not scaling.</strong> Adding \(2\) to both terms of \(3:5\) gives \(5:7\), which is <em>not</em> equivalent. Only multiplying or dividing both terms keeps the ratio.</li>
      <li><strong>Part-to-part is not part-to-whole.</strong> If boys to girls is \(2:3\), boys are \(\dfrac{2}{5}\) of the class, not \(\dfrac{2}{3}\).</li>
      <li><strong>Keep the order.</strong> "Girls to boys" and "boys to girls" are different ratios — write the terms in the order the question names them.</li>
    </ul>
  </div>

  <h2>🔵 Examples</h2>
  ${ex(
    "Example 1: Reading a ratio",
    String.raw`In a Grade 9 survey, \(14\) students walk to school, \(10\) take the bus and \(6\) are driven (\(30\) students in all). Write (a) walkers to bus riders and (b) students driven to all students, each in simplest form.`,
    [
      String.raw`(a) This is part-to-part: \(14:10\). Divide both terms by \(2\): \(7:5\).`,
      String.raw`(b) This is part-to-whole: \(6:30\). Divide both terms by \(6\): \(1:5\).`,
    ],
    String.raw`walkers to bus riders is \(7:5\); students driven to all students is \(1:5\), so \(1\) in every \(5\) students is driven`,
  )}
  ${ex(
    "Example 2: Building equivalent ratios with a ratio table",
    String.raw`A bracelet pattern uses \(3\) blue beads for every \(5\) white beads. How many white beads go with \(21\) blue beads?`,
    [
      String.raw`Start a ratio table and multiply both rows by the same number each time.`,
      String.raw`From \(3\) to \(21\) is \(\times7\), so the white beads are \(5\times7=35\).`,
    ],
    String.raw`\(21:35\) is equivalent to \(3:5\), so \(35\) white beads are needed`,
    table(["", "Start", "×2", "×3", "×4", "×7"], [["Blue beads", "3", "6", "9", "12", "21"], ["White beads", "5", "10", "15", "20", "35"]]),
  )}
  ${ex(
    "Example 3: Simplest form",
    String.raw`Write \(72:96\) in simplest form.`,
    [
      String.raw`Find the GCF of \(72\) and \(96\): \(72=24\times3\) and \(96=24\times4\), so the GCF is \(24\).`,
      String.raw`Divide both terms by \(24\): \(72\div24=3\) and \(96\div24=4\).`,
    ],
    String.raw`\(72:96=3:4\). Check: \(3\times24=72\) and \(4\times24=96\)`,
  )}
  ${ex(
    "Example 4: Decimal and fraction ratios",
    String.raw`Write each in simplest whole-number form: (a) \(1.5:2.5\)  (b) \(\dfrac{2}{3}:\dfrac{5}{6}\).`,
    [
      String.raw`(a) Multiply both terms by \(10\): \(15:25\). Divide by \(5\): \(3:5\).`,
      String.raw`(b) The common denominator of \(\dfrac{2}{3}\) and \(\dfrac{5}{6}\) is \(6\). Multiply both terms by \(6\): \(\dfrac{2}{3}\times6=4\) and \(\dfrac{5}{6}\times6=5\), giving \(4:5\).`,
    ],
    String.raw`(a) \(3:5\)  (b) \(4:5\). Check (b): \(\dfrac{2}{3}\div\dfrac{5}{6}=\dfrac{2}{3}\times\dfrac{6}{5}=\dfrac{12}{15}=\dfrac{4}{5}\)`,
  )}
  ${ex(
    "Example 5: Are two ratios equivalent?",
    String.raw`Are \(9:15\) and \(12:20\) equivalent?`,
    [
      String.raw`Simplify the first: \(9:15\), divide by \(3\), gives \(3:5\).`,
      String.raw`Simplify the second: \(12:20\), divide by \(4\), gives \(3:5\).`,
      String.raw`Cross-check: \(9\times20=180\) and \(15\times12=180\) — equal.`,
    ],
    String.raw`yes, both simplify to \(3:5\), so \(9:15\) and \(12:20\) are equivalent`,
  )}
  ${ex(
    "Example 6: Sharing a total in a three-term ratio",
    String.raw`A trail mix has nuts, raisins and chocolate in the ratio \(4:3:2\). How much of each is in \(270\) g of mix?`,
    [
      String.raw`Number of parts: \(4+3+2=9\).`,
      String.raw`One part: \(270\div9=30\) g.`,
      String.raw`Nuts \(4\times30=120\) g, raisins \(3\times30=90\) g, chocolate \(2\times30=60\) g.`,
    ],
    String.raw`\(120\) g nuts, \(90\) g raisins, \(60\) g chocolate. Check: \(120+90+60=270\)`,
    tape([{ n: 4, label: "nuts", ...BLUE }, { n: 3, label: "raisins", ...ROSE }, { n: 2, label: "chocolate", ...AMBER }], "9 equal parts of 30 g each make 270 g.", 30),
  )}
  ${ex(
    "Example 7: Solving a proportion",
    String.raw`A printer prints \(18\) pages in \(4\) minutes. At the same rate, how many pages does it print in \(10\) minutes?`,
    [
      String.raw`Unit rate: \(18\div4=4.5\) pages per minute.`,
      String.raw`Multiply by \(10\) minutes: \(4.5\times10=45\) pages.`,
      String.raw`Cross-multiply to check: \(\dfrac{18}{4}=\dfrac{x}{10}\), so \(4x=180\) and \(x=45\).`,
    ],
    String.raw`\(45\) pages`,
  )}
  ${ex(
    "Example 8: A proportional relationship on a graph",
    String.raw`A hiking group walks \(3\) km every hour. Show that distance and time are proportional and describe the graph.`,
    [
      String.raw`Pairs (hours, km): \((1,3)\), \((2,6)\), \((3,9)\), \((4,12)\).`,
      String.raw`Distance to time is \(3:1\), \(6:2=3:1\), \(9:3=3:1\), \(12:4=3:1\) — always the same ratio.`,
      String.raw`The points lie on the straight line \(d=3t\) that passes through the origin \((0,0)\).`,
    ],
    String.raw`the ratio is constant (\(3:1\)), so the relationship is proportional and its graph is a line through the origin`,
    gframe([{ kind: "cartesian", expr: "y = 3*x", dMin: "0" }], {
      title: "distance (y, km) against time (x, h): every point has the ratio 3 : 1",
      zoom: 100, zoomY: 22, ox: -250, oy: 48,
      labels: [{ x: 1, y: 3, t: "(1, 3)", c: "#1b7a44" }, { x: 2, y: 6, t: "(2, 6)", c: "#1b7a44" }, { x: 3, y: 9, t: "(3, 9)", c: "#1b7a44" }, { x: 4, y: 12, t: "(4, 12)", c: "#1b7a44" }],
    }),
  )}
  <h2>🟡 Practice Questions</h2>
  ${pr(1, "simplest form", String.raw`Write \(56:84\) in simplest form.`, String.raw`The GCF is \(28\): \(56\div28=2\) and \(84\div28=3\), so \(2:3\).`)}
  ${pr(2, "missing term", String.raw`Fill in the blank: \(5:9=35:\_\_\_\).`, String.raw`\(5\times7=35\), so \(9\times7=63\): \(5:9=35:63\).`)}
  ${pr(3, "equivalent?", String.raw`Are \(6:9\) and \(10:16\) equivalent? Show your work.`, String.raw`\(6:9=2:3\) but \(10:16=5:8\). They differ (cross-products: \(6\times16=96\), \(9\times10=90\)), so they are <strong>not</strong> equivalent.`)}
  ${pr(4, "sharing", String.raw`\(45\) stickers are shared between two friends in the ratio \(4:5\). How many stickers does each get?`, String.raw`\(4+5=9\) parts, so one part is \(45\div9=5\). The friends get \(4\times5=20\) and \(5\times5=25\) stickers.`)}
  ${pr(5, "proportion", String.raw`A tap fills \(15\) L in \(6\) minutes. At this rate, how long does it take to fill \(40\) L?`, String.raw`Unit rate \(15\div6=2.5\) L per minute, so \(40\div2.5=16\) minutes.`)}
  <h2>❓ Q&amp;A Summary</h2>
  ${qa("Q1: Is a ratio the same as a fraction?", String.raw`A part-to-whole ratio can be written as a fraction (\(3:8\) is \(\dfrac{3}{8}\) of the whole). A part-to-part ratio like \(3:5\) compares two parts, so \(\dfrac{3}{5}\) is <em>not</em> the fraction of the whole.`)}
  ${qa("Q2: Does the order of the terms matter?", String.raw`Yes. \(3:5\) and \(5:3\) are different ratios — always write the terms in the order the question names the quantities.`)}
  ${qa("Q3: How do I handle decimals or fractions in a ratio?", String.raw`Multiply every term by the same number (a power of \(10\), or the common denominator) to get whole numbers, then divide by the GCF.`)}
  ${qa("Q4: How can I check a proportion answer?", String.raw`Simplify both ratios and compare them, or check that the cross-products are equal.`)}
  ${qa("Q5: How is a proportion connected to a graph?", String.raw`Equivalent ratios are points on one straight line through the origin; the constant ratio is the slope of that line.`)}
</div>`;

export const lessonBlocks = () => [html(lessonHtml)];

// ───────────────────────── assignment (teacher-supplied questions) ─────────────────────────
export const ASSIGNMENT = {
  title: `Assignment ${CODE} — ${TITLE}`,
  description: String.raw`Knowledge & Understanding
1. Simplify the ratio \( 48:64 \).
2. Fill in the blank: \( 7:9 = 28:\_\_\_ \)
3. Simplify the ratio \( 0.9:1.2 \).
Thinking
4. Are the ratios \( 8:12 \) and \( 14:21 \) equivalent? Prove your answer.
5. The Reverse Recipe: A bakery's secret cookie recipe uses flour, butter, and sugar in the ratio \( 7:4:3 \). A baker accidentally added 280 g of sugar instead of the correct amount. If the baker used 490 g of flour, by how many grams did they overshoot the sugar, and what is the total weight of the ruined batch?
Communication
6. Write three equivalent ratios for \( 5:8 \), and explain how you know each one is equivalent.
7. A 12-pack of juice boxes costs 7.20 dollars. A 20-pack costs 11.00 dollars. Which is the better buy? Justify your answer using unit rates.
Application
8. A map has a scale of \( 1\text{ cm}:25\text{ km} \). If two cities are 7.5 cm apart on the map, what is the actual distance between them?
9. The ratio of boys to girls in a school is \( 5:4 \). If there are 320 girls, how many students are in the school in total?
10. A paint mixture uses blue, red, and white paint in the ratio \( 3:2:5 \). If you use 12 litres of blue paint, how many litres of white paint do you need, and what is the total volume of paint produced?`,
};

// ───────────────────────── question bank (60: 20 easy / 20 medium / 20 hard) ─────────────────────────
const L = "abcdefghij";
const shuffle = (a) => { const r = [...a]; for (let i = r.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [r[i], r[j]] = [r[j], r[i]]; } return r; };
const mcA = (difficulty, prompt, correct, distractors, feedback = "") => { const o = shuffle([correct, ...distractors]); return { difficulty, kind: "multiple_choice", prompt, choices: o.map((t, i) => ({ id: L[i], text: t })), answer: L[o.indexOf(correct)], points: 1, feedback }; };
const ms = (difficulty, prompt, choices, correct, feedback = "") => ({ difficulty, kind: "multiple_select", prompt, choices: choices.map((t, i) => ({ id: L[i], text: t })), answer: correct.map((i) => L[i]), points: 1, feedback });
const tf = (difficulty, prompt, correct, feedback = "") => ({ difficulty, kind: "true_false", prompt, answer: correct ? "true" : "false", points: 1, feedback });
const num = (difficulty, prompt, value, tol = 0, feedback = "") => ({ difficulty, kind: "numeric", prompt, answer: value, tolerance: tol, points: 1, feedback });
const fill = (difficulty, prompt, accepted, feedback = "") => ({ difficulty, kind: "fill_blank", prompt, answer: accepted, points: 1, feedback });

export function bank() {
  const q = [];
  // ── EASY ──
  q.push(mcA("easy", "Simplify the ratio $48 : 64$.", "$3 : 4$", ["$24 : 32$", "$4 : 3$", "$6 : 8$"], "The GCF is $16$: $48 \\div 16 = 3$ and $64 \\div 16 = 4$."));
  q.push(mcA("easy", "Which ratio is equivalent to $2 : 5$?", "$6 : 15$", ["$4 : 7$", "$5 : 2$", "$2 : 10$"], "Multiply both terms by $3$."));
  q.push(mcA("easy", "A class has $12$ girls and $18$ boys. The ratio of girls to boys in simplest form is:", "$2 : 3$", ["$3 : 2$", "$12 : 30$", "$2 : 5$"], "$12 : 18$, divide both terms by $6$."));
  q.push(mcA("easy", "A bag has $5$ red and $7$ blue marbles. The ratio of red marbles to all marbles is:", "$5 : 12$", ["$5 : 7$", "$7 : 12$", "$12 : 5$"], "Part-to-whole: the whole is $5 + 7 = 12$."));
  q.push(mcA("easy", "A hot-chocolate mix uses $2$ parts chocolate to $5$ parts milk. With $35$ mL of milk, the chocolate needed is:", "$14$ mL", ["$7$ mL", "$28$ mL", "$87.5$ mL"], "$35 \\div 5 = 7$ per part, and $2 \\times 7 = 14$."));
  q.push(ms("easy", "Which ratios are equivalent to $3 : 4$?", ["$6 : 8$", "$9 : 12$", "$12 : 20$", "$30 : 40$"], [0, 1, 3], "$12 : 20$ simplifies to $3 : 5$."));
  q.push(ms("easy", "Which are ways to write the ratio of $3$ cats to $7$ dogs?", ["$3 : 7$", "$3$ to $7$", "$\\frac{3}{7}$", "$7 : 3$"], [0, 1, 2]));
  q.push(ms("easy", "Which ratios are already in simplest form?", ["$5 : 8$", "$6 : 9$", "$7 : 10$", "$10 : 15$"], [0, 2]));
  q.push(ms("easy", "Which statements about the ratio $4 : 9$ are true?", ["Multiplying both terms by $3$ gives $12 : 27$", "Adding $3$ to both terms gives an equivalent ratio", "$8 : 18$ is equivalent", "$9 : 4$ is equivalent"], [0, 2]));
  q.push(tf("easy", "The ratios $8 : 12$ and $14 : 21$ are equivalent.", true, "Both simplify to $2 : 3$."));
  q.push(tf("easy", "The ratio $3 : 5$ is the same as $5 : 3$.", false, "The order of the terms matters."));
  q.push(tf("easy", "Adding the same number to both terms of a ratio always gives an equivalent ratio.", false, "Only multiplying or dividing both terms by the same number does."));
  q.push(tf("easy", "If the ratio of cats to dogs is $4 : 7$, the total is made of $11$ equal parts.", true));
  q.push(tf("easy", "$0.9 : 1.2$ simplifies to $3 : 4$.", true, "Multiply by $10$: $9 : 12$; divide by $3$."));
  q.push(fill("easy", "Simplify $75 : 100 : 125 =$ ___ (write as p:q:r).", ["3:4:5", "3 : 4 : 5"]));
  q.push(num("easy", "Fill in the blank: $7 : 9 = 28 : x$. Then $x =$ ___.", 36, 0));
  q.push(num("easy", "Fill in the blank: $11 : 6 = x : 54$. Then $x =$ ___.", 99, 0));
  q.push(fill("easy", "Simplify $15 : 25 =$ ___ (write as p:q).", ["3:5", "3 : 5"]));
  q.push(num("easy", "The ratio of cats to dogs at a shelter is $4 : 7$. There are $28$ dogs. The number of cats is ___.", 16, 0));
  q.push(fill("easy", "Simplify $36 : 12 =$ ___ (write as p:q).", ["3:1", "3 : 1"]));
  // ── MEDIUM ──
  q.push(mcA("medium", "Simplify $\\frac{4}{5} : \\frac{2}{3}$.", "$6 : 5$", ["$8 : 15$", "$5 : 6$", "$2 : 3$"], "Multiply both terms by $15$: $12 : 10 = 6 : 5$."));
  q.push(mcA("medium", "Car A travels $240$ km in $3$ hours. Car B travels $350$ km in $5$ hours. Which is faster?", "Car A, at $80$ km/h", ["Car B, at $70$ km/h", "Car A, at $70$ km/h", "They are equally fast"], "$240 \\div 3 = 80$ km/h and $350 \\div 5 = 70$ km/h."));
  q.push(mcA("medium", "Pack A has $4$ batteries for 5.80 dollars. Pack B has $7$ batteries for 9.80 dollars. Which is cheaper per battery?", "Pack B, at 1.40 dollars each", ["Pack A, at 1.45 dollars each", "Pack B, at 1.45 dollars each", "They cost the same per battery"], "$5.80 \\div 4 = 1.45$ and $9.80 \\div 7 = 1.40$."));
  q.push(mcA("medium", "A map scale is $1\\text{ cm} : 40\\text{ km}$. Two towns are $6.5$ cm apart on the map. The real distance is:", "$260$ km", ["$46.5$ km", "$6.15$ km", "$320$ km"], "$6.5 \\times 40 = 260$."));
  q.push(mcA("medium", "The ratio of boys to girls in a club is $3 : 2$ and there are $40$ members. The number of girls is:", "$16$", ["$24$", "$20$", "$8$"], "$5$ parts, $40 \\div 5 = 8$ per part, girls $= 2 \\times 8 = 16$."));
  q.push(ms("medium", "Beads are red : blue : green in the ratio $2 : 3 : 5$, with $60$ beads in all. Which are true?", ["There are $12$ red beads", "There are $18$ blue beads", "There are $30$ green beads", "One part is $5$ beads"], [0, 1, 2], "One part is $60 \\div 10 = 6$ beads."));
  q.push(ms("medium", "Which pairs of ratios are equivalent?", ["$3 : 8$ and $12 : 32$", "$5 : 6$ and $15 : 20$", "$9 : 12$ and $15 : 20$", "$4 : 7$ and $12 : 21$"], [0, 2, 3], "$5 : 6$ and $15 : 20 = 3 : 4$ are different."));
  q.push(ms("medium", "Which are unit rates?", ["$60$ km per $1$ h", "2.50 dollars per $1$ kg", "$150$ km in $3$ h", "$12$ eggs per $1$ carton"], [0, 1, 3], "A unit rate compares to $1$ of the second quantity."));
  q.push(ms("medium", "The ratio of apples to oranges is $5 : 3$ and there are $24$ oranges. Which are true?", ["There are $40$ apples", "There are $64$ pieces of fruit", "One part is $8$ pieces", "There are $15$ apples"], [0, 1, 2], "$24 \\div 3 = 8$ per part; apples $= 5 \\times 8 = 40$."));
  q.push(tf("medium", "If $x : 12 = 5 : 6$, then $x = 10$.", true, "$12 \\div 6 = 2$ and $5 \\times 2 = 10$."));
  q.push(tf("medium", "$\\frac{6}{9} = \\frac{10}{15}$ is a true proportion.", true, "Both equal $\\frac{2}{3}$."));
  q.push(tf("medium", "A recipe for $4$ people uses $3$ cups of flour. For $10$ people at the same rate you need $7.5$ cups.", true, "$3 \\div 4 = 0.75$ cups per person, $0.75 \\times 10 = 7.5$."));
  q.push(tf("medium", "The ratios $2 : 3$ and $3 : 4$ are equivalent.", false, "$2 \\times 4 = 8$ but $3 \\times 3 = 9$."));
  q.push(tf("medium", "The points of a proportional relationship lie on a straight line through the origin.", true));
  q.push(num("medium", "Two numbers are in the ratio $5 : 7$ and their sum is $72$. The smaller number is ___.", 30, 0, "$12$ parts, one part $= 6$, so $5 \\times 6 = 30$."));
  q.push(num("medium", "A snail crawls $12$ m in $8$ minutes. At this rate it crawls ___ m in $20$ minutes.", 30, 0, "$1.5$ m per minute."));
  q.push(num("medium", "A scale drawing uses $1$ cm for every $3$ m. A room is $4.2$ cm long in the drawing. Its real length is ___ m.", 12.6, 0.01));
  q.push(fill("medium", "Simplify $18 : 24 : 30 =$ ___ (write as p:q:r).", ["3:4:5", "3 : 4 : 5"]));
  q.push(num("medium", "$84$ stickers are shared in the ratio $3 : 4$. The larger share is ___ stickers.", 48, 0, "$84 \\div 7 = 12$, and $4 \\times 12 = 48$."));
  q.push(num("medium", "Solve the proportion $\\frac{x}{9} = \\frac{14}{6}$. Then $x =$ ___.", 21, 0, "$x = 9 \\times 14 \\div 6 = 21$."));
  // ── HARD ──
  q.push(mcA("hard", "A bucket has a small leak. The ratio of water leaked to water remaining after $1$ hour is $2 : 9$. After $2$ more hours, the total water leaked is $6$ litres. How much water was in the bucket originally? (Assume a constant leak rate.)", "$11$ L", ["$16.5$ L", "$27$ L", "$33$ L"], "After $3$ hours in all, $3 \\times 2 = 6$ parts have leaked, and $6$ parts $= 6$ L, so $1$ part $= 1$ L. The bucket began with $2 + 9 = 11$ parts $= 11$ L."));
  q.push(mcA("hard", "If $x : y = 3 : 4$ and $y : z = 6 : 5$, then $x : z =$", "$9 : 10$", ["$3 : 5$", "$18 : 5$", "$10 : 9$"], "Match $y$: $x : y : z = 9 : 12 : 10$."));
  q.push(mcA("hard", "At a concert the ratio of adults to students is $3 : 5$. After $30$ more adults arrive the ratio becomes $1 : 1$. The number of students is:", "$75$", ["$45$", "$30$", "$120$"], "$3k + 30 = 5k$, so $k = 15$ and students $= 75$."));
  q.push(mcA("hard", "A $20$ L mixture of syrup and water is in the ratio $1 : 4$. How much water must be added to make the ratio $1 : 5$?", "$4$ L", ["$5$ L", "$2$ L", "$20$ L"], "Syrup $= 4$ L, water $= 16$ L; for $1 : 5$ water must be $20$ L."));
  q.push(mcA("hard", "A cyclist rides $30$ km at $15$ km/h, then $30$ km at $10$ km/h. The average speed for the whole trip is:", "$12$ km/h", ["$12.5$ km/h", "$15$ km/h", "$10$ km/h"], "$60$ km in $2 + 3 = 5$ h $= 12$ km/h."));
  q.push(ms("hard", "A photo $6$ cm by $4$ cm is enlarged to $15$ cm by $w$ cm with the same ratio. Which are true?", ["The scale factor is $2.5$", "$w = 10$", "The area is multiplied by $2.5$", "The ratio of length to width is still $3 : 2$"], [0, 1, 3], "The area is multiplied by $2.5^2$."));
  q.push(ms("hard", "If $a : b = 4 : 5$ and $a + b = 63$, which are true?", ["$a = 28$", "$b = 35$", "$b - a = 7$", "$a = 35$"], [0, 1, 2]));
  q.push(ms("hard", "Which situations are proportional (a constant ratio between the quantities)?", ["Distance at a steady $4$ km per hour", "Cost at 2.50 dollars per kg", "A plant that starts at $10$ cm and grows $2$ cm each week", "Pay of 18 dollars per hour"], [0, 1, 3], "A plant that starts at $10$ cm does not start at $0$."));
  q.push(ms("hard", "Three people share 180 dollars in the ratio $2 : 3 : 4$. Which are true?", ["The smallest share is 40 dollars", "The largest share is 80 dollars", "The middle share is 60 dollars", "Each part is 30 dollars"], [0, 1, 2], "$9$ parts, 20 dollars each."));
  q.push(tf("hard", "If $a : b = 3 : 7$, then $b$ is $\\frac{7}{3}$ of $a$.", true));
  q.push(tf("hard", "Doubling both terms of $6 : 8$ gives a different ratio, $12 : 16$.", false, "$12 : 16$ is equivalent to $6 : 8$."));
  q.push(tf("hard", "If $4$ pumps empty a pool in $9$ hours, then $6$ pumps empty it in $6$ hours.", true, "$4 \\times 9 = 36$ pump-hours, $36 \\div 6 = 6$."));
  q.push(tf("hard", "$\\frac{2}{3} : \\frac{3}{4}$ simplifies to $8 : 9$.", true, "Multiply both terms by $12$: $8 : 9$."));
  q.push(tf("hard", "The ratio $1 : 1.5$ is equivalent to $2 : 3$.", true));
  q.push(num("hard", "Two numbers are in the ratio $7 : 4$ and differ by $18$. The larger number is ___.", 42, 0, "$3$ parts $= 18$, one part $= 6$, larger $= 7 \\times 6 = 42$."));
  q.push(num("hard", "A drone flies $2.4$ km in $6$ minutes. At the same rate it flies ___ km in $25$ minutes.", 10, 0, "$0.4$ km per minute."));
  q.push(num("hard", "Concrete is cement : sand : gravel in the ratio $1 : 2 : 4$. A $350$ kg batch contains ___ kg of gravel.", 200, 0, "$7$ parts, $50$ kg each, gravel $= 4 \\times 50$."));
  q.push(fill("hard", "Write $0.75 : 1.25$ in simplest whole-number form (as p:q).", ["3:5", "3 : 5"]));
  q.push(num("hard", "Two numbers are in the ratio $3 : 4$. When $6$ is added to each, the new ratio is $5 : 6$. The smaller original number is ___.", 9, 0, "$6(3k + 6) = 5(4k + 6)$ gives $k = 3$, so the smaller is $9$."));
  q.push(num("hard", "A model car is built at scale $1 : 18$. The real car is $4.5$ m long. The model is ___ cm long.", 25, 0, "$450 \\div 18 = 25$."));
  return q;
}

// ───────────────────────── worksheet ─────────────────────────
// One authored copy; the PDF (TeX) version is derived from it so they cannot drift apart.
const wLesson = [
  ["What a ratio compares", String.raw`A <b>ratio</b> compares quantities in the same units, and the order matters: $3:5$ is not $5:3$. <b>Part-to-part</b> compares one part with another; <b>part-to-whole</b> compares a part with the total.`],
  ["Equivalent ratios and simplest form", String.raw`Multiply or divide <b>both</b> terms by the same non-zero number to get an equivalent ratio: $2:3=4:6=10:15$. Divide by the greatest common factor to reach simplest form. Clear decimals or fractions first by scaling every term.`],
  ["Proportions and sharing", String.raw`A <b>proportion</b> sets two ratios equal, e.g. $\dfrac{3}{5}=\dfrac{x}{40}$. To share a total in a ratio, add the terms to count the parts, divide the total by the parts to get one part, then multiply back.`],
];
const wExamples = [
  ["Example 1: Write a ratio", String.raw`A player made $18$ of $30$ shots. Write the ratio of shots made to shots missed, and of shots made to shots attempted, in simplest form.`, String.raw`Missed $=30-18=12$. Made to missed is $18:12=3:2$. Made to attempted is $18:30=3:5$.`],
  ["Example 2: Equivalent by multiplying", String.raw`Write two ratios equivalent to $4:7$.`, String.raw`Multiply both terms by $3$: $12:21$. Multiply by $5$: $20:35$.`],
  ["Example 3: Equivalent by dividing", String.raw`Write $45:60$ in simplest form.`, String.raw`The GCF is $15$: $45\div15=3$ and $60\div15=4$, so $3:4$.`],
  ["Example 4: Find the missing term", String.raw`Fill in the blank: $5:8=\_\_\_:56$.`, String.raw`$8\times7=56$, so multiply $5$ by $7$ too: $35$. So $5:8=35:56$.`],
  ["Example 5: A three-term ratio", String.raw`Simplify $20:30:50$.`, String.raw`Divide all three terms by $10$: $2:3:5$.`],
  ["Example 6: A decimal ratio", String.raw`Simplify $0.4:2$.`, String.raw`Multiply both terms by $10$: $4:20$. Divide by $4$: $1:5$.`],
  ["Example 7: Proportion by unit rate", String.raw`$3$ coffees cost $10.50$ dollars. How much do $8$ coffees cost at the same price?`, String.raw`One coffee costs $10.50\div3=3.50$ dollars, so $8$ coffees cost $8\times3.50=28$ dollars.`],
  ["Example 8: Sharing in a ratio", String.raw`A fundraiser raises $360$ dollars to split between two clubs in the ratio $5:4$. How much does each club get?`, String.raw`$5+4=9$ parts, so one part is $360\div9=40$ dollars. The clubs get $5\times40=200$ and $4\times40=160$ dollars.`],
  ["Example 9: Given the difference", String.raw`Two numbers are in the ratio $7:4$ and differ by $18$. Find them.`, String.raw`The difference is $7-4=3$ parts, so $3$ parts $=18$ and one part is $6$. The numbers are $7\times6=42$ and $4\times6=24$.`],
];
// [label, question, answer, workspace-cm for the PDF]
const wQuestions = [
  ["Problem 1", String.raw`Write the ratio of $12$ blue pens to $20$ red pens in simplest form.`, String.raw`$3:5$`, 3.0],
  ["Problem 2", String.raw`Simplify $56:42$.`, String.raw`$4:3$`, 3.0],
  ["Problem 3", String.raw`Simplify $27:45:63$.`, String.raw`$3:5:7$`, 3.2],
  ["Problem 4", String.raw`Write two ratios equivalent to $6:11$.`, String.raw`For example $12:22$ and $18:33$ (any multiple of both terms)`, 3.0],
  ["Problem 5", String.raw`Fill in the blank: $9:4=63:\_\_\_$.`, String.raw`$28$`, 3.0],
  ["Problem 6", String.raw`Fill in the blank: $14:21=\_\_\_:3$.`, String.raw`$2$`, 3.0],
  ["Problem 7", String.raw`Are $12:18$ and $20:30$ equivalent? Show how you know.`, String.raw`Yes --- both simplify to $2:3$`, 3.2],
  ["Problem 8", String.raw`Are $5:9$ and $8:12$ equivalent? Show how you know.`, String.raw`No --- $8:12=2:3$ but $5:9$ is already in simplest form`, 3.2],
  ["Problem 9", String.raw`Simplify $1.2:0.8$.`, String.raw`$3:2$`, 3.2],
  ["Problem 10", String.raw`Simplify $\dfrac12:\dfrac34$.`, String.raw`$2:3$ (multiply both terms by $4$)`, 3.4],
  ["Problem 11", String.raw`A garden has tulips and daffodils in the ratio $5:3$. There are $45$ tulips. How many daffodils are there?`, String.raw`$27$ daffodils`, 3.4],
  ["Problem 12", String.raw`A smoothie uses $3$ parts banana to $2$ parts yogurt. How much banana is needed with $500$ g of yogurt?`, String.raw`$750$ g`, 3.4],
  ["Problem 13 --- Challenge", String.raw`Three friends share $280$ dollars in the ratio $2:3:5$. How much does each friend get?`, String.raw`$56$, $84$ and $140$ dollars`, 3.8],
];

// Site (on-screen worksheet) content, same shape as the other MTH1W worksheets.
export const WORKSHEET_CONTENT = {
  grade: "MTH1W",
  title: TITLE,
  intro: "A ratio compares quantities and a proportion says two ratios are equal. This worksheet practises writing and simplifying ratios, building equivalent ratios, sharing a total, and solving proportions.",
  lesson: wLesson,
  examples: wExamples,
  questions: wQuestions.map(([label, text, answer]) => [label.replace(/ --- /g, " — "), text, answer.replace(/ --- /g, " — ")]),
};

// PDF (Tectonic) data in the shape scripts/_wsgen.mjs expects.
const tex = (s) => s.replace(/<b>(.*?)<\/b>/g, String.raw`\textbf{$1}`).replace(/<i>(.*?)<\/i>/g, String.raw`\textit{$1}`).replace(/<br>/g, String.raw`\\ `).replace(/&/g, String.raw`\&`);
export const WORKSHEET_TEX = {
  code: CODE,
  title: TITLE,
  unit: "Unit 1: Number Sense",
  bigideas: tex(String.raw`A <b>ratio</b> compares quantities and a <b>proportion</b> sets two ratios equal. Multiplying or dividing <b>both</b> terms by the same number keeps a ratio equivalent --- adding does not.`),
  concepts: wLesson.map(([h, b]) => [h, tex(b)]),
  examples: wExamples.map(([t, q, s]) => [t.replace(/^Example \d+: /, ""), tex(q), tex(s)]),
  problems: wQuestions.map(([label, q, , cm]) => [label, tex(q), cm]),
  answers: wQuestions.map(([, , a]) => tex(a)),
};
