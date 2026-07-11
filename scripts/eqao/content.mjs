// EQAO Grade 9 practice questions — figure-rich starter set (Phase 1).
// Each question mirrors a real EQAO item type and, where natural, carries an
// inline-SVG figure like the diagrams/graphs on the actual assessment.

// ── question builders (shapes match lib/quiz.ts grading) ─────
const L = ["a", "b", "c", "d", "e"];
const mc = (strand, difficulty, prompt, opts, correct, figure = null, feedback = null) =>
  ({ strand, difficulty, kind: "multiple_choice", prompt, figure, choices: opts.map((t, i) => ({ id: L[i], text: t })), answer: L[correct], feedback });
const ms = (strand, difficulty, prompt, opts, correct, figure = null, feedback = null) =>
  ({ strand, difficulty, kind: "multiple_select", prompt, figure, choices: opts.map((t, i) => ({ id: L[i], text: t })), answer: correct.map((i) => L[i]), feedback });
const num = (strand, difficulty, prompt, value, tolerance = 0, figure = null, feedback = null) =>
  ({ strand, difficulty, kind: "numeric", prompt, figure, answer: value, tolerance, feedback });
const fill = (strand, difficulty, prompt, accepted, figure = null, feedback = null) =>
  ({ strand, difficulty, kind: "fill_blank", prompt, figure, answer: accepted, feedback });

// ── SVG figure helpers ──────────────────────────────────────
const svg = (s) => ({ type: "svg", svg: s });
const C = { ink: "#0f172a", grid: "#e2e8f0", accent: "#1b7a44", muted: "#64748b", fill: "#bfe3cd" };

// coordinate plane with an optional line (math endpoints) and lattice points
function coord({ line, pts = [], xlab = "x", ylab = "y" }) {
  const ox = 34, oy = 196, u = 19; // origin + unit (px); shows 0..8
  const X = (x) => ox + x * u, Y = (y) => oy - y * u;
  let body = `<rect x="${ox}" y="${oy - 8 * u}" width="${8 * u}" height="${8 * u}" fill="url(#g)"/>`;
  body += `<line x1="${ox}" y1="${oy}" x2="${ox + 8 * u + 8}" y2="${oy}" stroke="${C.ink}" stroke-width="1.4"/>`;
  body += `<line x1="${ox}" y1="${oy}" x2="${ox}" y2="${oy - 8 * u - 8}" stroke="${C.ink}" stroke-width="1.4"/>`;
  for (let i = 2; i <= 8; i += 2) {
    body += `<text x="${X(i)}" y="${oy + 14}" font-size="10" text-anchor="middle" fill="${C.muted}">${i}</text>`;
    body += `<text x="${ox - 8}" y="${Y(i) + 3}" font-size="10" text-anchor="end" fill="${C.muted}">${i}</text>`;
  }
  if (line) body += `<line x1="${X(line[0][0])}" y1="${Y(line[0][1])}" x2="${X(line[1][0])}" y2="${Y(line[1][1])}" stroke="${C.accent}" stroke-width="2.6"/>`;
  for (const [px, py] of pts) body += `<circle cx="${X(px)}" cy="${Y(py)}" r="3.6" fill="${C.accent}"/>`;
  body += `<text x="${ox + 8 * u + 4}" y="${oy + 13}" font-size="10" fill="${C.muted}">${xlab}</text>`;
  body += `<text x="${ox - 6}" y="${oy - 8 * u - 10}" font-size="10" fill="${C.muted}">${ylab}</text>`;
  return svg(`<svg viewBox="0 0 220 220" style="width:230px;max-width:100%" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="g" width="${u}" height="${u}" patternUnits="userSpaceOnUse"><path d="M${u} 0H0V${u}" fill="none" stroke="${C.grid}" stroke-width="1"/></pattern></defs>${body}</svg>`);
}

// vertical bar graph
function bars(values, labels) {
  const ox = 30, oy = 150, h = 120, bw = 26, gap = 14, max = Math.max(...values);
  let body = `<line x1="${ox}" y1="${oy}" x2="${ox + values.length * (bw + gap) + 6}" y2="${oy}" stroke="${C.ink}" stroke-width="1.4"/>`;
  body += `<line x1="${ox}" y1="${oy}" x2="${ox}" y2="${oy - h - 6}" stroke="${C.ink}" stroke-width="1.4"/>`;
  values.forEach((v, i) => {
    const bx = ox + 12 + i * (bw + gap), bh = (v / max) * h;
    body += `<rect x="${bx}" y="${oy - bh}" width="${bw}" height="${bh}" fill="${C.accent}"/>`;
    body += `<text x="${bx + bw / 2}" y="${oy + 14}" font-size="10" text-anchor="middle" fill="${C.muted}">${labels[i]}</text>`;
    body += `<text x="${bx + bw / 2}" y="${oy - bh - 4}" font-size="10" text-anchor="middle" fill="${C.ink}">${v}</text>`;
  });
  return svg(`<svg viewBox="0 0 ${ox + values.length * (bw + gap) + 20} 175" style="width:260px;max-width:100%" xmlns="http://www.w3.org/2000/svg">${body}</svg>`);
}

// scatter plot with optional best-fit line
function scatter(points, line) {
  const ox = 30, oy = 150, w = 200, h = 120;
  let body = `<line x1="${ox}" y1="${oy}" x2="${ox + w}" y2="${oy}" stroke="${C.ink}" stroke-width="1.4"/>`;
  body += `<line x1="${ox}" y1="${oy}" x2="${ox}" y2="${oy - h - 6}" stroke="${C.ink}" stroke-width="1.4"/>`;
  if (line) body += `<line x1="${ox + line[0][0]}" y1="${oy - line[0][1]}" x2="${ox + line[1][0]}" y2="${oy - line[1][1]}" stroke="${C.accent}" stroke-width="2"/>`;
  for (const [px, py] of points) body += `<circle cx="${ox + px}" cy="${oy - py}" r="3" fill="${C.ink}"/>`;
  return svg(`<svg viewBox="0 0 ${ox + w + 14} 170" style="width:250px;max-width:100%" xmlns="http://www.w3.org/2000/svg">${body}</svg>`);
}

// triangle with base & height labels
function triangle(baseLabel, heightLabel) {
  return svg(`<svg viewBox="0 0 220 150" style="width:240px;max-width:100%" xmlns="http://www.w3.org/2000/svg">
    <polygon points="30,120 190,120 120,30" fill="${C.fill}" stroke="${C.ink}" stroke-width="1.6"/>
    <line x1="120" y1="120" x2="120" y2="30" stroke="${C.accent}" stroke-width="1.2" stroke-dasharray="4 4"/>
    <rect x="120" y="110" width="10" height="10" fill="none" stroke="${C.accent}" stroke-width="1"/>
    <text x="110" y="138" font-size="12" fill="${C.muted}">${baseLabel}</text>
    <text x="126" y="78" font-size="12" fill="${C.muted}">${heightLabel}</text>
  </svg>`);
}

// right triangle with two leg labels (find the hypotenuse)
function rightTriangle(aLabel, bLabel) {
  return svg(`<svg viewBox="0 0 200 150" style="width:230px;max-width:100%" xmlns="http://www.w3.org/2000/svg">
    <polygon points="30,120 170,120 30,30" fill="${C.fill}" stroke="${C.ink}" stroke-width="1.6"/>
    <rect x="30" y="108" width="12" height="12" fill="none" stroke="${C.ink}" stroke-width="1"/>
    <text x="92" y="138" font-size="12" fill="${C.muted}">${aLabel}</text>
    <text x="6" y="78" font-size="12" fill="${C.muted}">${bLabel}</text>
    <text x="108" y="68" font-size="12" fill="${C.accent}">?</text>
  </svg>`);
}

// rectangular prism (box) with dimension labels
function box(l, w, h) {
  return svg(`<svg viewBox="0 0 200 150" style="width:230px;max-width:100%" xmlns="http://www.w3.org/2000/svg">
    <rect x="40" y="55" width="90" height="70" fill="${C.fill}" stroke="${C.ink}" stroke-width="1.6"/>
    <polyline points="40,55 70,30 160,30 130,55" fill="none" stroke="${C.ink}" stroke-width="1.6"/>
    <polyline points="130,125 160,100 160,30" fill="none" stroke="${C.ink}" stroke-width="1.6"/>
    <text x="78" y="142" font-size="12" fill="${C.muted}">l = ${l}</text>
    <text x="138" y="95" font-size="12" fill="${C.muted}">w = ${w}</text>
    <text x="20" y="95" font-size="12" fill="${C.muted}">h = ${h}</text>
  </svg>`);
}

// number line with a labelled point
function numberLine(markAt, min, max) {
  const ox = 20, w = 240, span = max - min;
  const X = (v) => ox + ((v - min) / span) * w;
  let ticks = "";
  for (let v = min; v <= max; v++) {
    ticks += `<line x1="${X(v)}" y1="36" x2="${X(v)}" y2="46" stroke="${C.ink}" stroke-width="1"/>`;
    ticks += `<text x="${X(v)}" y="60" font-size="10" text-anchor="middle" fill="${C.muted}">${v}</text>`;
  }
  return svg(`<svg viewBox="0 0 ${ox + w + 20} 70" style="width:280px;max-width:100%" xmlns="http://www.w3.org/2000/svg">
    <line x1="${ox}" y1="41" x2="${ox + w}" y2="41" stroke="${C.ink}" stroke-width="1.4"/>${ticks}
    <circle cx="${X(markAt)}" cy="41" r="5" fill="${C.accent}"/>
    <text x="${X(markAt)}" y="26" font-size="12" text-anchor="middle" fill="${C.accent}">P</text>
  </svg>`);
}

// ── questions ───────────────────────────────────────────────
export const questions = [
  // NUMBER
  num("number", "easy", "Evaluate $2^5$.", 32, 0, null, "$2^5 = 2\\times2\\times2\\times2\\times2 = 32$."),
  num("number", "medium", "Point $P$ is shown on the number line. What value does $P$ represent?", 2.5, 0.01, numberLine(2.5, 0, 6), "$P$ sits halfway between $2$ and $3$."),
  mc("number", "easy", "Which ratio is equivalent to $3:5$?", ["$9:15$", "$5:3$", "$6:8$", "$8:10$"], 0, null, "Multiply both terms by $3$."),
  num("number", "medium", "A $400$ g box of cereal costs \\$3.20. What is the unit cost, in cents per gram?", 0.8, 0.01, null, "$320 \\div 400 = 0.8$ cents/g."),
  mc("number", "hard", "A recipe uses flour and sugar in the ratio $3:2$. If $9$ cups of flour are used, how many cups of sugar are needed?", ["$6$", "$4$", "$13.5$", "$5$"], 0, null, "$9 \\div 3 \\times 2 = 6$."),

  // ALGEBRA
  num("algebra", "medium", "What is the rate of change (slope) of the line shown?", 2, 0, coord({ line: [[0, 1], [3.5, 8]], pts: [[1, 3], [3, 7]] }), "Rise/run between $(1,3)$ and $(3,7)$ is $4/2 = 2$."),
  mc("algebra", "medium", "Which equation represents the line shown?", ["$y = 2x + 1$", "$y = x + 1$", "$y = 2x - 1$", "$y = \\tfrac12 x + 1$"], 0, coord({ line: [[0, 1], [3.5, 8]], pts: [[0, 1], [3, 7]] }), "Slope $2$, $y$-intercept $1$."),
  num("algebra", "easy", "Solve for $x$: $3x + 5 = 20$.", 5, 0, null, "$3x = 15$, so $x = 5$."),
  fill("algebra", "medium", "Simplify $4x + 7 - 2x + 3$. (Write your answer like $2x+10$.)", ["2x+10", "2x + 10"], null, "Combine like terms."),
  num("algebra", "hard", "A line passes through $(2,5)$ and $(6,13)$. What is its slope?", 2, 0, null, "$(13-5)/(6-2) = 8/4 = 2$."),

  // DATA
  mc("data", "easy", "The bar graph shows books read by four students. Who read the most books?", ["Dana", "Amir", "Bea", "Cam"], 0, bars([3, 5, 2, 6], ["Amir", "Bea", "Cam", "Dana"]), "Dana's bar is the tallest at $6$."),
  num("data", "medium", "Using the bar graph, how many more books did Dana read than Cam?", 4, 0, bars([3, 5, 2, 6], ["Amir", "Bea", "Cam", "Dana"]), "$6 - 2 = 4$."),
  mc("data", "medium", "What type of correlation does the scatter plot show?", ["Positive", "Negative", "No correlation", "Constant"], 0, scatter([[20, 18], [50, 36], [80, 62], [110, 70], [150, 96]], [[10, 10], [180, 110]]), "As $x$ increases, $y$ increases."),
  num("data", "easy", "Find the mean of the data set: $4, 8, 6, 10, 2$.", 6, 0, null, "$30 \\div 5 = 6$."),
  mc("data", "hard", "A line of best fit is drawn through the scatter plot. It is best used to:", ["predict values within the data range", "list the exact data points", "find the largest value", "remove outliers"], 0, scatter([[20, 18], [50, 36], [80, 62], [110, 70], [150, 96]], [[10, 10], [180, 110]]), "A line of best fit models the trend for predictions."),

  // GEOMETRY & MEASUREMENT
  num("geometry_measurement", "easy", "Find the area of the triangle, in square units.", 20, 0, triangle("b = 8", "h = 5"), "$A = \\tfrac{bh}{2} = \\tfrac{8\\times5}{2} = 20$."),
  num("geometry_measurement", "medium", "Find the length of the hypotenuse, in units.", 10, 0, rightTriangle("8", "6"), "$\\sqrt{6^2+8^2} = \\sqrt{100} = 10$."),
  num("geometry_measurement", "medium", "Find the volume of the rectangular prism, in cubic units.", 60, 0, box(5, 4, 3), "$V = l\\times w\\times h = 5\\times4\\times3 = 60$."),
  num("geometry_measurement", "hard", "A cylinder has radius $3$ and height $10$. Find its volume to one decimal place. (Use $\\pi \\approx 3.14159$.)", 282.7, 0.5, null, "$V = \\pi r^2 h = \\pi(9)(10) \\approx 282.7$."),
  mc("geometry_measurement", "easy", "Which formula gives the area of a circle?", ["$\\pi r^2$", "$2\\pi r$", "$\\pi d$", "$\\tfrac12 bh$"], 0, null, "Area of a circle is $\\pi r^2$."),

  // FINANCIAL LITERACY
  num("financial_literacy", "medium", "You invest \\$500 at $4\\%$ simple interest per year for $3$ years. How much interest do you earn, in dollars?", 60, 0, null, "$I = Prt = 500\\times0.04\\times3 = 60$."),
  mc("financial_literacy", "easy", "Plan A costs \\$5 per visit. Plan B costs \\$3 per visit plus a \\$4 fee. For $1$ visit, which is cheaper?", ["Plan A (\\$5)", "Plan B (\\$7)", "They cost the same", "Cannot tell"], 0, null, "Plan A = \\$5; Plan B = \\$7."),
  num("financial_literacy", "medium", "A \\$80 jacket is on sale for $25\\%$ off. What is the sale price, in dollars?", 60, 0, null, "$80 \\times 0.75 = 60$."),
  num("financial_literacy", "hard", "Two gym plans: A is \\$10/month + \\$5/visit; B is \\$30/month + \\$1/visit. After how many visits per month do they cost the same?", 5, 0, null, "$10+5v = 30+v \\Rightarrow 4v = 20 \\Rightarrow v = 5$."),
  mc("financial_literacy", "easy", "Which is the best definition of a budget?", ["a plan for income and expenses", "money owed on a loan", "interest earned", "a tax refund"], 0, null, "A budget plans income vs. expenses."),
];
