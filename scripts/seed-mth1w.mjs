// Seeds the MTH1W (Grade 9) course into Supabase with real Chapter 1 content.
// Usage:  node scripts/seed-mth1w.mjs
// Reads keys from .env.local. Safe to re-run (it replaces the MTH1W course).

import { createClient } from "@supabase/supabase-js";
import { teacherPassword } from "./_teacher-secret.mjs";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

// ── load .env.local ──────────────────────────────────────────
const env = {};
for (const line of readFileSync(join(__dirname, "..", ".env.local"), "utf8").split("\n")) {
  const m = line.match(/^([A-Z0-9_]+)=(.*)$/);
  if (m) env[m[1]] = m[2].trim();
}
const url = env.NEXT_PUBLIC_SUPABASE_URL;
const key = env.SUPABASE_SERVICE_ROLE_KEY;
if (!url || !key) { console.error("Missing Supabase URL or service role key in .env.local"); process.exit(1); }
const db = createClient(url, key, { auth: { persistSession: false } });

const TEACHER_EMAIL = "teacher@integrationacademy.ca";
const TEACHER_PASSWORD = teacherPassword(env);
const COURSE_TITLE = "Grade 9 Mathematics (MTH1W)";

// ── content helpers ──────────────────────────────────────────
let _b = 0;
const bid = () => `b${Date.now().toString(36)}${(_b++).toString(36)}`;
const h2 = (text) => ({ id: bid(), type: "heading", text, level: 2 });
const h3 = (text) => ({ id: bid(), type: "heading", text, level: 3 });
const p = (markdown) => ({ id: bid(), type: "text", markdown });
const eq = (latex) => ({ id: bid(), type: "math", latex });
const note = (text, variant = "note") => ({ id: bid(), type: "callout", variant, text });
const graph = (expr, param, o = {}) => ({
  id: bid(), type: "graph", expr, param,
  xMin: o.xMin ?? -10, xMax: o.xMax ?? 10, yMin: o.yMin ?? -10, yMax: o.yMax ?? 10,
  paramMin: o.paramMin ?? -5, paramMax: o.paramMax ?? 5, paramInit: o.paramInit ?? 1, caption: o.caption ?? "",
});
const mg = (curves, o = {}) => ({
  id: bid(), type: "multigraph", curves,
  param: o.param ?? "", paramMin: o.paramMin ?? -5, paramMax: o.paramMax ?? 5, paramInit: o.paramInit ?? 0,
  xMin: o.xMin ?? -6, xMax: o.xMax ?? 6, yMin: o.yMin ?? -6, yMax: o.yMax ?? 6,
  markIntersection: o.markIntersection ?? true, caption: o.caption ?? "",
});
// gframe — an interactive graph embedded INLINE inside example HTML (iframe to /tools/graph),
// so a graph can sit right in a worked example. items: ["y = 2*x - 3", …]; o.title = caption.
const gframe = (items, o = {}) => {
  const fns = (Array.isArray(items) ? items : [items]).filter(Boolean).map((it) => (typeof it === "string" ? { kind: "cartesian", expr: it } : it));
  const labels = (o.labels ?? []).map((Lb) => ({ id: bid(), text: Lb.t ?? "", x: Lb.x, y: Lb.y, color: Lb.c ?? "#0f172a", visible: true, showPoint: Lb.point !== false }));
  const fig = {
    fns, labels,
    settings: { title: o.title ?? "", showGrid: true, showAxes: true, showNums: true, stepX: "auto", stepY: "auto" },
    view: { zoomX: o.zoom ?? 26, zoomY: o.zoomY ?? o.zoom ?? 26, ox: o.ox ?? 0, oy: o.oy ?? 0 },
  };
  const data = encodeURIComponent(Buffer.from(encodeURIComponent(JSON.stringify(fig))).toString("base64"));
  return `<iframe src="/tools/graph?embed=1&data=${data}" loading="lazy" style="width:100%;height:340px;border:1px solid #cbd5e1;border-radius:8px;margin-top:10px;background:#fff;" title="Interactive graph"></iframe>`;
};

const L = "abcdefgh";
const mc = (prompt, choices, correct, points = 1, feedback = "") =>
  ({ kind: "multiple_choice", prompt, choices: choices.map((t, i) => ({ id: L[i], text: t })), answer: L[correct], points, feedback });
const ms = (prompt, choices, correct, points = 1, feedback = "") =>
  ({ kind: "multiple_select", prompt, choices: choices.map((t, i) => ({ id: L[i], text: t })), answer: correct.map((i) => L[i]), points, feedback });
const tf = (prompt, correct, points = 1, feedback = "") =>
  ({ kind: "true_false", prompt, answer: correct ? "true" : "false", points, feedback });
const num = (prompt, value, tol = 0, points = 1, feedback = "") =>
  ({ kind: "numeric", prompt, answer: value, tolerance: tol, points, feedback });
const sa = (prompt, accepted, points = 1, feedback = "") =>
  ({ kind: "short_answer", prompt, answer: accepted, points, feedback });

const quiz = (level, questions, extra = {}) => ({ level, questions, ...extra });
// quiz difficulty presets
const EASY = { passing_score: 50, attempts_allowed: null, time_limit_minutes: null, show_answers: "after_submit" };
const MED = { passing_score: 60, attempts_allowed: 3, time_limit_minutes: null, show_answers: "after_submit" };
const HARD = { passing_score: 70, attempts_allowed: 2, time_limit_minutes: 15, shuffle_questions: true, show_answers: "after_submit" };

// ── CHAPTER 1 CONTENT ────────────────────────────────────────
// Full assignments (10 questions each: 3 K/U, 2 Thinking, 2 Communication, 3 Application).
const ASSIGN = {
  "1.1": { title: "Assignment 1.1 — Number Sets & Their Subsets", description: String.raw`Knowledge & Understanding
1. Classify each number as natural, whole, integer, rational, or irrational: \( -7,\ 0,\ \frac{3}{4},\ \sqrt{2},\ 5 \).
2. True or False: every integer is a rational number. Give one reason.
3. Which of \( \sqrt{16} \) and \( \sqrt{20} \) is irrational? Explain.
Thinking
4. Give a number that is rational but NOT an integer, and explain how you know.
5. Is there a smallest positive rational number? Justify your answer.
Communication
6. In your own words, explain the difference between a rational and an irrational number.
7. Draw or describe how the sets \( \mathbb{N}, \mathbb{W}, \mathbb{Z}, \mathbb{Q}, \mathbb{R} \) nest inside one another.
Application
8. A board is measured as \( \sqrt{2} \) m long. Is that length rational? What does it mean in practice?
9. Sort these into a table by smallest set: \( -3,\ 2.5,\ \sqrt{9},\ \pi,\ \frac{1}{3},\ 8 \).
10. Research the history of zero (or negative numbers) and write 2–3 sentences on where it is used today.` },

  "1.2": { title: "Assignment 1.2 — Density, Infinity & Limit", description: String.raw`Knowledge & Understanding
1. Find a number between \( \frac{1}{3} \) and \( \frac{1}{2} \).
2. State the limit of the sequence \( 1, \frac{1}{2}, \frac{1}{4}, \frac{1}{8}, \dots \)
3. How many integers are strictly between 0 and 1?
Thinking
4. Explain why there are infinitely many numbers between 0 and 1.
5. Create a sequence of 5 numbers that gets closer and closer to 3 without reaching it.
Communication
6. In your own words, what does the "limit" of a sequence mean?
7. Explain the difference between a set being "infinite" and being "dense."
Application
8. A ball bounces to half its height each time, starting at 8 m. List the first 4 bounce heights and state the limit.
9. Between 0 and 20, which is denser — the even numbers or the multiples of 5? Justify with a count.
10. Describe one real-life situation that approaches a limit.` },

  "1.3": { title: "Assignment 1.3 — Powers & Scientific Notation", description: String.raw`Knowledge & Understanding
1. Evaluate \( 2^5,\ 3^3,\ 10^0 \).
2. Write \( 3^{-2} \) as a fraction.
3. Write \( 4\,500\,000 \) in scientific notation.
Thinking
4. Use the exponent pattern to explain why \( a^0 = 1 \).
5. Which is larger: \( -4 \times 10^{3} \) or \( 4 \times 10^{-3} \)? Justify.
Communication
6. Explain the difference between \( (-2)^4 \) and \( -2^4 \).
7. Why is scientific notation useful? Give an example.
Application
8. The Sun is about \( 1.5 \times 10^{8} \) km away. Write that in standard form.
9. A cell is about \( 2 \times 10^{-5} \) m wide. Is that bigger or smaller than 1 mm? Explain.
10. Find a real measurement (a distance, mass, or population) and write it in scientific notation, citing your source.` },

  "1.4": { title: "Assignment 1.4 — Exponent Laws", description: String.raw`Knowledge & Understanding
1. Simplify \( a^3 \cdot a^4 \).
2. Simplify \( \frac{a^8}{a^3} \).
3. Simplify \( (a^2)^3 \).
Thinking
4. Give three different pairs of powers that multiply to \( a^{10} \).
5. Is \( a^m \cdot a^n = a^{mn} \) ever true? Explain.
Communication
6. Explain, in words, the difference between the product law and the power-of-a-power law.
7. Describe the most common mistake students make with exponent laws.
Application
8. Simplify \( (2x^2)^3 \).
9. Simplify \( \frac{a^6 \cdot a^2}{a^3} \).
10. Simplify \( \dfrac{(2x^2 y^3)^2 \cdot x\,y}{x^2 y} \) and state the result.` },

  "1.5": { title: "Assignment 1.5 — Integers in Context", description: String.raw`Knowledge & Understanding
1. Evaluate \( (-8)+5,\ 12-(-4),\ (-3)\times(-6) \).
2. Evaluate \( -20 \div 4 \).
3. Write an integer for: 7°C below zero; a \$150 deposit.
Thinking
4. Use a pattern to explain why two negatives multiply to a positive.
5. Create a real scenario whose answer is \( -7 \).
Communication
6. Explain what subtracting a negative means, using a number-line picture.
7. Describe a real situation that uses negative numbers.
Application
8. At 5 a.m. it was \( -5°C \) and rose 3°C each hour. What was the temperature at 11 a.m.?
9. A diver at \( -12 \) m descends 8 m, then rises 5 m. What is the final depth?
10. An account has \$250; \$75 is withdrawn each week for 4 weeks. What is the balance?` },

  "1.6": { title: "Assignment 1.6 — Fractions & Unit Fractions", description: String.raw`Knowledge & Understanding
1. Simplify \( \frac{6}{8} \) and \( \frac{12}{18} \).
2. Which is larger: \( \frac{2}{3} \) or \( \frac{3}{4} \)?
3. Write \( \frac{5}{8} \) as a decimal.
Thinking
4. Find a fraction between \( \frac{1}{2} \) and \( \frac{2}{3} \).
5. Order \( \frac{1}{2}, \frac{2}{3}, \frac{3}{5} \) from least to greatest and explain your method.
Communication
6. Explain what a unit fraction is and give an example.
7. Explain why \( -\frac{1}{2} = \frac{1}{-2} = -\left(\frac{1}{2}\right) \).
Application
8. A recipe needs \( \frac{3}{4} \) cup but you only have a \( \frac{1}{4} \)-cup scoop. How many scoops?
9. Plot \( \frac{3}{4}, -\frac{1}{4}, -\frac{3}{4} \) on a number line.
10. Write \( \frac{7}{2} \) as a mixed number and describe a situation it could represent.` },

  "1.7": { title: "Assignment 1.7 — Operations with Fractions", description: String.raw`Knowledge & Understanding
1. Evaluate \( \frac{1}{2} + \frac{1}{4} \).
2. Evaluate \( \frac{2}{3} \times \frac{3}{4} \).
3. Evaluate \( \frac{3}{4} \div \frac{1}{2} \).
Thinking
4. Explain why dividing by a fraction is the same as multiplying by its reciprocal.
5. Find two different pairs of fractions whose product is \( \frac{1}{2} \).
Communication
6. Show step-by-step how to compute \( \frac{1}{2} + \frac{1}{3} \), explaining each step.
7. Describe a common error students make when adding fractions.
Application
8. A recipe needs \( 2\frac{1}{2} \) cups of flour. You triple it — how much flour total?
9. A 70 L barrel loses \( \frac{3}{4} \) L per minute. How many litres are lost in 8 minutes?
10. Evaluate \( \left(\frac{2}{3}\right)^2 \) and describe what squaring a fraction does to its size.` },

  "1.8": { title: "Assignment 1.8 — Ratios, Rates, Percentages & Proportions", description: String.raw`Knowledge & Understanding
1. Find \( 25\% \) of 80.
2. Simplify the ratio \( 6:4 \).
3. Solve the proportion \( \frac{3}{4} = \frac{x}{12} \).
Thinking
4. Which is the better deal: 20% off, or \$20 off a \$90 item? Justify.
5. If 3 kg of apples cost \$7.50, find the cost of 5 kg.
Communication
6. Explain the difference between a ratio, a rate, and a unit rate.
7. Explain, in words, how to find a percent of a number.
Application
8. A car travels 240 km in 4 hours. What is the unit rate in km/h?
9. An \$80 item has 13% tax. What is the total cost?
10. A population grows from 200 to 250. What is the percent increase?` },

  "2.1": { title: "Assignment 2.1 — Writing Expressions", description: String.raw`Knowledge & Understanding
1. Write an expression for "8 more than a number \( n \)".
2. Write an expression for "triple a number, minus 5".
3. Evaluate \( 3x + 7 \) when \( x = 5 \).
Thinking
4. Find the nth-term expression for \( 5, 10, 15, 20, \dots \)
5. Find the nth-term expression for \( 1, 4, 9, 16, \dots \) and explain.
Communication
6. Explain the difference between a variable and a coefficient.
7. Explain why generalizing a pattern with an expression is useful.
Application
8. Write an expression for the perimeter of a rectangle with length \( l \) and width \( w \).
9. A taxi charges \$4 plus \$2 per km. Write an expression for the cost of \( k \) km.
10. Use your taxi expression to find the cost of a 12 km ride.` },

  "2.2": { title: "Assignment 2.2 — Equivalent Expressions", description: String.raw`Knowledge & Understanding
1. Expand \( 3(x+4) \).
2. Expand \( 5(2x-3) \).
3. Expand \( -2(x-4) \).
Thinking
4. Are \( 2(x+3) \) and \( 2x+6 \) equivalent? Test by substituting \( x = 5 \).
5. Write two different expressions equivalent to \( 4x + 8 \).
Communication
6. Explain why \( 2(x+3) \) is NOT equal to \( 2x+3 \).
7. Explain how graphing can show that two expressions are equivalent.
Application
8. Expand \( x(x+5) \).
9. A rectangle has length \( x+3 \) and width 2. Write and expand an expression for its area.
10. Write two equivalent expressions for the perimeter of that rectangle.` },

  "2.3": { title: "Assignment 2.3 — Simplifying Expressions", description: String.raw`Knowledge & Understanding
1. Simplify \( 3x + 5x \).
2. Simplify \( 7y - 2y \).
3. Expand \( 2(x+4) \).
Thinking
4. Simplify \( 3x^2 + x - 2x^2 \) and explain which terms combine.
5. Create two different expressions that simplify to \( 6x + 2 \).
Communication
6. Explain what "like terms" are, with an example.
7. Explain why you cannot combine \( 3x \) and \( 3x^2 \).
Application
8. Simplify \( 2(x+3) + 3(x-1) \).
9. Simplify \( (2x + 4y) - (x - y) \).
10. Simplify \( x(x+2) + 3(x^2 + 2x - 5) \).` },

  "2.4": { title: "Assignment 2.4 — Solving Equations", description: String.raw`Knowledge & Understanding
1. Solve \( x + 7 = 12 \).
2. Solve \( 3x = 21 \).
3. Solve \( 2x + 3 = 11 \).
Thinking
4. Solve \( 4x - 5 = 2x + 7 \), showing each step.
5. Create an equation whose solution is \( x = 6 \).
Communication
6. Explain the "golden rule" of solving equations.
7. Explain how to check whether a solution is correct.
Application
8. Solve \( 3(x + 1) = 18 \).
9. "A number tripled, plus 4, is 19." Write the equation and solve it.
10. A rectangle's perimeter is 36 and its length is twice its width. Set up an equation and find the dimensions.` },

  "3.1": { title: "Assignment 3.1 — Variables in Code", description: String.raw`Knowledge & Understanding
1. Predict the output: set x to 5; set y to x + 3; output y.
2. Predict the output: set a to 4; set b to a * a; output b.
3. In a process area(l, w) that returns l * w, name the parameters.
Thinking
4. Predict the output: set x to 6; set y to x + 4; set y to y * 2; output y.
5. Write pseudocode that computes the area of a rectangle from its length and width.
Communication
6. Explain, in your own words, what a variable does.
7. Explain the difference between a variable and a parameter.
Application
8. Write pseudocode that converts a price into price + 13% tax.
9. Predict the output: set p to 3; set q to p + 5; set r to p * q; output r.
10. Write pseudocode for the perimeter of a rectangle.` },

  "3.2": { title: "Assignment 3.2 — Building Code from Steps", description: String.raw`Knowledge & Understanding
1. Predict the output: set s to 0; for i from 1 to 4: set s to s + i; output s.
2. Predict the output: set x to 1; repeat 3 times: set x to x * 2; output x.
3. set mark to 72; if mark >= 50 output "Pass" else output "Fail". What is the output?
Thinking
4. Write code (using a loop) that adds the numbers 1 to 10.
5. Add an if-statement to your code that outputs "big" when the total is greater than 50.
Communication
6. Explain what a loop does and why it is useful.
7. Explain what a conditional (if/else) does.
Application
8. Write code that outputs the 5 times table: 5, 10, 15, …, 50.
9. Predict the output: set s to 0; for i from 1 to 3: set s to s + 2; output s.
10. Write code that reads a student's mark and outputs "Pass" or "Fail".` },

  "3.3": { title: "Assignment 3.3 — Reading, Predicting & Altering Code", description: String.raw`Knowledge & Understanding
1. Trace and give the output: set a to 3; set b to 4; set c to a + b; output c.
2. Trace and give the output: set a to 3; set b to 4; set c to a * b; output c.
3. Predict the output: set x to 2; repeat 4 times: set x to x * 2; output x.
Thinking
4. In question 3, change "repeat 4 times" to "repeat 5 times." What is the new output? Explain.
5. Predict the output and explain your reasoning: set p to 2; set q to p + 3; set r to q * q; output r.
Communication
6. Explain how to trace code to predict its output.
7. Explain what changing a parameter does to the result.
Application
8. Trace and give the output: set s to 0; for i from 1 to 5: set s to s + i; output s.
9. set p to 5; set t to p * 3; output t. Now change p to 8 — what is the new output?
10. A loop reads "for i from 1 to 5." What would you change to make it print 10 numbers?` },

  "4.1": { title: "Assignment 4.1 — Linear vs Non-Linear & Rate of Change", description: String.raw`Knowledge & Understanding
1. Is \( y = 2x + 1 \) linear or non-linear?
2. Is \( y = x^2 \) linear or non-linear?
3. State the rate of change (slope) of \( y = 3x + 2 \).
Thinking
4. For the table \( x: 0,1,2,3 \) and \( y: 5,8,11,14 \), is the relation linear? What is the rate of change?
5. Give an example of a real-life situation that is non-linear.
Communication
6. Explain how you can tell from a graph whether a relation is linear.
7. Explain, in words, what "rate of change" means.
Application
8. A taxi charges \$4 plus \$2/km. Is cost vs. distance linear? What is the rate of change?
9. Describe the difference between the graphs of \( y = 2x \) and \( y = x^2 \).
10. A plant's height (cm) over weeks is \( 2, 5, 8, 11 \). Is the growth linear? Explain.` },

  "4.2": { title: "Assignment 4.2 — Representing Linear Relations", description: String.raw`Knowledge & Understanding
1. For \( y = 2x + 1 \), make a table of values for \( x = 0, 1, 2, 3 \).
2. State the slope and y-intercept of \( y = 3x - 4 \).
3. What is the y-intercept of \( y = -2x + 5 \)?
Thinking
4. A line passes through \( (0, 2) \) and \( (1, 5) \). Find its equation.
5. Convert the table \( x: 0,1,2 \), \( y: 1,3,5 \) into an equation.
Communication
6. Explain the meaning of the slope and the y-intercept in \( y = mx + b \).
7. Describe three different ways to represent a linear relation.
Application
8. A pool fills at 10 L/min starting from 50 L. Write the equation for volume vs. time.
9. Describe how to graph \( y = \frac{1}{2}x + 2 \) using two points.
10. Using your pool equation, how much water is in the pool after 8 minutes?` },

  "4.3": { title: "Assignment 4.3 — Comparing Lines", description: String.raw`Knowledge & Understanding
1. Which is steeper: \( y = 2x + 1 \) or \( y = 5x - 3 \)?
2. Which has the greater y-intercept: \( y = 2x + 1 \) or \( y = 2x + 4 \)?
3. Are \( y = 2x + 1 \) and \( y = 2x - 3 \) parallel?
Thinking
4. Compare \( y = 3x + 1 \) and \( y = -3x + 1 \): how do their steepness and direction differ?
5. Where do \( y = 2x + 1 \) and \( y = x + 4 \) cross?
Communication
6. Explain how the slope affects a line's steepness and direction.
7. Explain what the y-intercept tells you on a graph.
Application
8. Plan A: \$20 + \$5/month; Plan B: \$35 + \$2/month. Write each as an equation.
9. Which plan is cheaper at 3 months?
10. After how many months do the two plans cost the same?` },

  "4.4": { title: "Assignment 4.4 — Graphing Special Lines", description: String.raw`Knowledge & Understanding
1. Describe the graph of \( y = 3 \).
2. Describe the graph of \( x = -2 \).
3. Describe the graph of \( y = x \).
Thinking
4. Where do \( y = 4 \) and \( x = 1 \) intersect?
5. Is \( x = 5 \) a function? Explain.
Communication
6. Explain why \( y = k \) is horizontal but \( x = k \) is vertical.
7. Describe the line \( y = x \) in words.
Application
8. Graph \( y = 2x - 3 \) using the slope and y-intercept (give two points).
9. A item costs \$7 no matter how many you buy. What type of line models cost vs. quantity?
10. Sketch \( y = -x \) and state its slope.` },

  "4.5": { title: "Assignment 4.5 — Transformations of Lines", description: String.raw`Knowledge & Understanding
1. Start with \( y = 2x \). Write the equation after shifting it up 3.
2. What is \( y = x \) reflected in the x-axis?
3. Write \( y = 3x \) translated down 5.
Thinking
4. How does changing \( b \) in \( y = mx + b \) transform the line?
5. How does changing \( m \) transform a line through the origin?
Communication
6. Explain the difference between changing the slope and changing the y-intercept.
7. Describe what reflecting \( y = 2x \) in the x-axis does to the line.
Application
8. \( y = x + 1 \) is shifted up 4. Write the new equation.
9. A line \( y = 2x \) is made less steep, to slope 1. Write the new equation.
10. Translate \( y = -x + 2 \) down 3 and write the result.` },

  "4.6": { title: "Assignment 4.6 — Finding the Equation of a Line", description: String.raw`Knowledge & Understanding
1. A line has slope 2 and y-intercept 5. Write its equation.
2. A line passes through \( (0, -1) \) with slope 3. Write its equation.
3. A line has slope 0 and passes through \( (0, 4) \). Write its equation.
Thinking
4. Find the equation of the line through \( (0, 2) \) and \( (3, 8) \).
5. Find the slope of the line through \( (1, 3) \) and \( (4, 12) \).
Communication
6. Explain how to find a line's equation from two points.
7. Explain how to read the slope and y-intercept from a graph.
Application
8. A candle starts at 20 cm and burns 2 cm/hour. Write the equation for height vs. time.
9. From the table \( x: 0,2,4 \), \( y: 3,7,11 \), find the equation.
10. Using your candle equation, what is the height after 5 hours?` },

  "4.7": { title: "Assignment 4.7 — General Form of a Line", description: String.raw`Knowledge & Understanding
1. Write \( y = 3x - 4 \) in general form \( Ax + By + C = 0 \).
2. Find the x-intercept of \( 2x + 5y = 10 \).
3. Find the y-intercept of \( 2x + 5y = 10 \).
Thinking
4. Write \( y = -\frac{2}{3}x + 4 \) in general form with integer coefficients.
5. A line is \( 4x - 3y - 12 = 0 \). Find both intercepts.
Communication
6. Explain how to find the x- and y-intercepts of a line given in general form.
7. Explain why we usually clear fractions when writing a line in general form.
Application
8. A line has x-intercept \( 8 \) and y-intercept \( -2 \). Write it in general form.
9. The line \( 5x + 2y = 20 \) models a budget. Find where it crosses each axis and state what each intercept means.
10. Convert \( 6x + 9y - 18 = 0 \) to its simplest general form (divide out the common factor).` },

  "4.8": { title: "Assignment 4.8 — General Form vs Slope-Intercept Form", description: String.raw`Knowledge & Understanding
1. Convert \( 3x + y - 7 = 0 \) to slope-intercept form.
2. Convert \( y = 4x - 1 \) to general form.
3. State which form shows the slope directly.
Thinking
4. Convert \( 2x - 5y = 10 \) to slope-intercept form and state the slope.
5. Convert \( y = -\frac{3}{4}x + 2 \) to general form with integer coefficients.
Communication
6. Explain when slope-intercept form is more useful than general form.
7. Explain why a vertical line cannot be written in slope-intercept form but can be written in general form.
Application
8. A line is given as \( 4x + 2y - 12 = 0 \). Rewrite it in slope-intercept form, then state its slope and y-intercept.
9. Two lines are \( 2x + 3y = 6 \) and \( y = -\frac{2}{3}x + 5 \). Convert the first and decide whether the lines are parallel.
10. Write the vertical line through \( (7, -3) \) in general form.` },

  "4.9": { title: "Assignment 4.9 — Parallel and Perpendicular Lines", description: String.raw`Knowledge & Understanding
1. State the slope relationship for parallel lines.
2. State the slope relationship for perpendicular lines.
3. Give the slope of a line perpendicular to \( y = 5x - 2 \).
Thinking
4. Are \( y = 2x + 3 \) and \( 2x - y = 7 \) parallel? Justify your answer.
5. Find the slope of a line perpendicular to the line through \( (1,2) \) and \( (5,10) \).
Communication
6. Explain how to tell, from two equations, whether the lines are parallel, perpendicular, or neither.
7. Explain why a horizontal and a vertical line are perpendicular even though the "product of slopes" rule cannot be applied directly.
Application
8. Find the equation of the line through \( (0, 4) \) parallel to \( y = -3x + 1 \).
9. Find the equation of the line through \( (0, -1) \) perpendicular to \( y = \frac{1}{2}x + 6 \).
10. A line through \( (2, 5) \) is perpendicular to the line through \( (0,0) \) and \( (2,4) \). Find its equation.` },

  "5.1": { title: "Assignment 5.1 — Geometry & Measurement Through History", description: String.raw`Knowledge & Understanding
1. State what the ancient Egyptians used a "3-4-5" knotted rope for.
2. Define the term \emph{conjecture} and give one geometric example.
3. Convert 2 cubits to "hands" given 1 cubit = 6 hands.
Thinking
4. The Babylonians used base 60. Write 75 minutes as hours and minutes, and explain the base-60 link.
5. A surveyor measures a field by triangulation. Explain why triangles (not quadrilaterals) give a rigid, unambiguous result.
Communication
6. Explain, in 2–3 sentences, why standardized units of measurement were a turning point in mathematics and trade.
7. Describe one way measurement tools have changed from antiquity to today and the mathematical idea behind the improvement.
Application
8. An ancient builder lays out a right angle with a 3-4-5 rope. Verify it is a right angle using the Pythagorean relationship.
9. A scale drawing uses 1 unit = 12 ancient "palms." A wall is 9 units long on the drawing. How many palms is the real wall?
10. Research-style: a circle's circumference was estimated as \( \frac{256}{81}\,d \) (an early value of \(\pi\)). Compute this factor as a decimal and find its percent error from \( \pi \).` },

  "5.2": { title: "Assignment 5.2 — Designs with Circle & Triangle Properties", description: String.raw`Knowledge & Understanding
1. State the sum of the interior angles of a triangle.
2. Define a central angle and an inscribed angle in a circle.
3. A radius is 5 cm. State the diameter.
Thinking
4. Two angles of a triangle are \(47^\circ\) and \(68^\circ\). Find the third, and classify the triangle by angles.
5. An inscribed angle subtends the same arc as a central angle of \(80^\circ\). Find the inscribed angle and state the property used.
Communication
6. Explain why the exterior angle of a triangle equals the sum of the two non-adjacent interior angles.
7. Describe how circle and triangle properties can be combined to create a symmetric design (e.g. an inscribed equilateral triangle).
Application
8. A regular hexagon is inscribed in a circle of radius 6 cm. Explain why each side equals 6 cm.
9. A triangular logo has angles in the ratio \(2:3:4\). Find all three angles.
10. A semicircle has a triangle inscribed on its diameter. Using the "angle in a semicircle" property, state the triangle's angle at the circle and justify it.` },

  "5.3": { title: "Assignment 5.3 — Units & Unit Conversion", description: String.raw`Knowledge & Understanding
1. Convert 3.5 m to centimetres.
2. Convert 2500 g to kilograms.
3. Convert 4 km to metres.
Thinking
4. Convert \( 90 \text{ km/h} \) to metres per second. Show the chain of unit factors.
5. A recipe in the US uses 2 cups (1 cup \(\approx 237\) mL). Convert to litres and round to 2 decimals.
Communication
6. Explain the "unit-factor" (dimensional analysis) method and why units cancel.
7. Explain why \( 1 \text{ m}^2 = 10\,000 \text{ cm}^2 \) (not 100), using the idea of squaring a conversion.
Application
8. A room is \(4.2 \text{ m} \times 3.5 \text{ m}\). Find its area in \(\text{m}^2\) and in \(\text{cm}^2\).
9. A car travels \(540 \text{ km}\) on \(45 \text{ L}\). Express fuel use in \(\text{L}/100\text{ km}\).
10. A tank holds \(0.75 \text{ m}^3\). Convert to litres (1 \(\text{m}^3 = 1000\) L) and to millilitres.` },

  "5.4": { title: "Assignment 5.4 — The Pythagorean Theorem", description: String.raw`Knowledge & Understanding
1. State the Pythagorean theorem.
2. A right triangle has legs 6 and 8. Find the hypotenuse.
3. Is a triangle with sides 5, 12, 13 a right triangle? Justify.
Thinking
4. A right triangle has hypotenuse 15 and one leg 9. Find the other leg.
5. Find the exact length (in simplest radical form) of the diagonal of a square with side 7.
Communication
6. Explain how to decide whether a triangle is right-angled given its three side lengths.
7. Explain why the converse of the Pythagorean theorem lets builders check for square corners.
Application
8. A 5 m ladder leans against a wall with its base 1.5 m out. How high up the wall does it reach? Round to 2 decimals.
9. A rectangular field is \(120 \text{ m} \times 90 \text{ m}\). Find the length of the diagonal path across it.
10. A drone flies 40 m east then 30 m north. How far is it from the start, and explain why the straight-line distance is shorter than the path flown.` },

  "5.5": { title: "Assignment 5.5 — Changing Dimensions: Perimeter", description: String.raw`Knowledge & Understanding
1. A square has side 5 cm. Find its perimeter.
2. A rectangle is \(8 \times 3\). Find its perimeter.
3. A regular hexagon has side 5. Find its perimeter.
Thinking
4. If every side of a shape is multiplied by 4, by what factor does the perimeter change? Justify.
5. A figure's perimeter grows from 30 cm to 75 cm after a uniform scaling. Find the scale factor.
Communication
6. Explain why perimeter scales by \(k\) (not \(k^2\)) when all lengths scale by \(k\).
7. Describe a real situation where the perimeter scale factor matters (e.g. fencing, framing).
Application
8. A triangle has perimeter 18. After scaling by 4, find the new perimeter.
9. A square's perimeter is 20. Find the perimeter after each side is tripled.
10. A map uses scale \(1 : 50\,000\). A park's boundary is 12 cm on the map. Find the real perimeter in km.` },

  "5.6": { title: "Assignment 5.6 — Changing Dimensions: Area", description: String.raw`Knowledge & Understanding
1. A square has side 5 cm. Find its area.
2. A rectangle is \(8 \times 3\). Find its area.
3. A triangle has base 6 and height 4. Find its area.
Thinking
4. If every side of a square is doubled, by what factor does the area change? Justify.
5. All sides of a triangle are scaled by 3. By what factor does its area change? Justify.
Communication
6. Explain why area scales by \(k^2\) when all lengths scale by \(k\).
7. Describe a real situation where knowing the area scale factor (not just the length factor) matters.
Application
8. A photo \(10 \times 15 \text{ cm}\) is enlarged so each side is \(2.5\times\). Find the new area.
9. A rectangle's area is 20. If both sides are doubled, find the new area.
10. A model car is built at scale \(1:18\). The real car's surface needs \(9 \text{ m}^2\) of paint. Estimate the model's surface area in \(\text{cm}^2\).` },

  "5.7": { title: "Assignment 5.7 — Volume", description: String.raw`Knowledge & Understanding
1. Find the volume of a rectangular prism \(5 \times 4 \times 3\).
2. Find the volume of a cylinder with \(r = 3\), \(h = 10\) (leave in terms of \(\pi\)).
3. State the formula for the volume of a sphere.
Thinking
4. A cone and a cylinder share the same radius and height. Compare their volumes and justify the ratio.
5. A sphere has volume \(36\pi \text{ cm}^3\). Find its radius.
Communication
6. Explain why volume scales by \(k^3\) when all lengths scale by \(k\).
7. Describe a situation where comparing volumes of different containers matters.
Application
8. A cylindrical tank's radius and height are both doubled. By what factor does its volume increase?
9. A spherical tank has radius 1.5 m. Find its volume in \(\text{m}^3\) (round to 2 decimals).
10. An ice-cream cone (\(r = 3\), \(h = 12\)) is topped with a hemisphere of the same radius. Find the total volume in terms of \(\pi\).` },

  "5.8": { title: "Assignment 5.8 — Surface Area", description: String.raw`Knowledge & Understanding
1. Find the surface area of a cube with edge 4.
2. Find the surface area of a rectangular prism \(5 \times 4 \times 3\).
3. State the formula for the surface area of a sphere.
Thinking
4. If every edge of a cube is doubled, by what factor does the surface area change? Justify.
5. A solid's surface area is \(54 \text{ cm}^2\); after doubling all lengths, find the new surface area.
Communication
6. Explain the difference between volume and surface area, and give the units of each.
7. Describe a situation where minimizing surface area for a fixed volume is useful (e.g. packaging).
Application
8. Find the total surface area of a cylinder with \(r = 4 \text{ cm}\), \(h = 9 \text{ cm}\) (round to 1 decimal).
9. Find the surface area of a sphere with \(r = 5\) (leave in terms of \(\pi\)).
10. A net of a cube is made of 6 congruent squares of side 3 cm. Find the cube's total surface area.` },

  "6.1": { title: "Assignment 6.1 — Big Data & Its Implications", description: String.raw`Knowledge & Understanding
1. Define "big data" in one sentence.
2. List the "three V's" commonly used to describe big data.
3. Convert 2 GB to MB (use 1 GB = 1000 MB).
Thinking
4. A streaming service stores 4 TB of new video per day. How many GB is that, and how many GB per hour (1 TB = 1000 GB)?
5. Explain one way a biased sample could make a "data-driven" conclusion wrong.
Communication
6. Describe one benefit and one risk of companies collecting large amounts of personal data.
7. Explain the difference between a population and a sample, and why sampling is used.
Application
8. A sensor records 5 readings per second. How many readings does it collect in one full day?
9. A website logs 1.2 KB per visit and gets 50 000 visits a day. How many MB of logs per day (1 MB = 1000 KB)?
10. A company claims "90% of users love our app" from a survey of only its paying members. Identify the sampling problem and suggest a fairer method.` },

  "6.2": { title: "Assignment 6.2 — One-Variable Data & Statistics", description: String.raw`Knowledge & Understanding
1. Find the mean of \( 4, 8, 6, 10, 2 \).
2. Find the median of \( 3, 7, 9, 2, 5 \).
3. Find the mode of \( 2, 4, 4, 6, 9, 4 \).
Thinking
4. Find the range and the mean of \( 12, 15, 11, 20, 17 \).
5. A data set of 5 numbers has a mean of 10. Four of them are \( 8, 9, 11, 12 \). Find the fifth.
Communication
6. Explain when the median is a better measure of centre than the mean.
7. Describe what an outlier is and how it can affect the mean.
Application
8. Test scores are \( 70, 85, 90, 60, 95, 80 \). Find the mean and median.
9. A store's daily sales (\$) are \( 200, 220, 210, 800, 215 \). State which measure of centre best represents a typical day, and why.
10. The mean height of 4 players is 180 cm. A fifth player joins and the mean becomes 182 cm. How tall is the fifth player?` },

  "6.3": { title: "Assignment 6.3 — Scatter Plots & Correlation", description: String.raw`Knowledge & Understanding
1. Define positive correlation.
2. Define negative correlation.
3. State what "no correlation" means for a scatter plot.
Thinking
4. Hours studied vs test score tends to rise together. What type of correlation is this, and roughly what slope sign would the line of best fit have?
5. Find the slope of a line of best fit passing through \( (0, 2) \) and \( (5, 12) \).
Communication
6. Explain the difference between interpolation and extrapolation, and which is generally more reliable.
7. Explain why "correlation does not imply causation," with an example.
Application
8. A line of best fit is \( y = 3x + 5 \) (study hours \(x\), score \(y\)). Predict the score for 4 hours.
9. Using \( y = 3x + 5 \), predict the score for 20 hours and explain why this prediction may be unreliable.
10. A scatter plot of ice-cream sales vs drowning incidents shows positive correlation. Explain the likely lurking variable.` },

  "6.4": { title: "Assignment 6.4 — The Mathematical Modelling Process", description: String.raw`Knowledge & Understanding
1. List the main stages of the mathematical modelling process in order.
2. State what it means to "make assumptions" when building a model.
3. A model gives cost \( C = 15n + 40 \). State the fixed cost and the cost per item.
Thinking
4. Using \( C = 15n + 40 \), find the cost for 12 items.
5. A phone plan is modelled by \( C = 0.10m + 25 \) (\(m\) = minutes). Find the cost for 300 minutes.
Communication
6. Explain why a model usually needs to be tested and revised, not just built once.
7. Describe one limitation of using a straight-line model for real population growth.
Application
8. A taxi charges \$3.50 plus \$1.75/km. Write a model for cost vs distance and find the cost of a 10 km trip.
9. A pool drains at 50 L/min from 3000 L. Write a model for volume vs time and find when it is empty.
10. You model your weekly savings as \( S = 20w + 50 \). Interpret the 20 and the 50, and predict your savings after 8 weeks.` },

  "7.1": { title: "Assignment 7.1 — Making Financial Decisions", description: String.raw`Knowledge & Understanding
1. Define "fixed cost" and "variable cost" with one example each.
2. A phone plan costs \$30/month plus \$0.05/text. Write the monthly cost \( C \) for \( t \) texts.
3. State what a "unit price" is and why it helps compare deals.
Thinking
4. Plan A: \$40 flat. Plan B: \$15 + \$0.50/GB. For how many GB is Plan B cheaper than Plan A?
5. A 750 mL juice costs \$3.00 and a 2 L bottle costs \$7.20. Which is the better unit price, and by how much per litre?
Communication
6. Explain the difference between "needs" and "wants" when making a financial decision.
7. Explain why the cheapest sticker price is not always the best financial decision (give a factor to consider).
Application
8. A gym charges \$25 to join plus \$18/month. Write the cost model and find the total for one year.
9. Store A sells a laptop for \$900 with no tax; Store B for \$820 plus 13% tax. Which is cheaper, and by how much?
10. You earn \$60 for 5 hours of tutoring. Find your hourly rate and predict earnings for a 13-hour week.` },

  "7.2": { title: "Assignment 7.2 — Appreciation & Depreciation", description: String.raw`Knowledge & Understanding
1. Define appreciation and depreciation.
2. A \$1000 asset grows 5% in a year. Find its new value.
3. A \$1000 asset loses 10% in a year. Find its new value.
Thinking
4. Write the formula for the value of a \$1000 asset after \( n \) years at 5% annual appreciation.
5. A car depreciates 15%/year from \$20 000. Find its value after 2 years (to the nearest dollar).
Communication
6. Explain why depreciation is modelled with repeated multiplication rather than subtracting a fixed amount each year.
7. Explain the difference between the growth factor for 8% appreciation and for 8% depreciation.
Application
8. A house worth \$300 000 appreciates 4%/year. Find its value after 3 years (nearest dollar).
9. A phone worth \$1200 depreciates 25%/year. What is it worth after 3 years?
10. Collectible art appreciates 6%/year from \$5000. Write the model and find when it first exceeds \$6000 (whole years).` },

  "7.3": { title: "Assignment 7.3 — Interest & Borrowing", description: String.raw`Knowledge & Understanding
1. State the simple interest formula \( I = Prt \).
2. Find the simple interest on \$2000 at 4%/year for 3 years.
3. Define "principal" and "interest rate."
Thinking
4. Find the total amount owed on a \$1500 loan at 6% simple interest for 2 years.
5. \$1000 is invested at 5% compounded annually. Find the amount after 3 years (nearest cent).
Communication
6. Explain the difference between simple and compound interest.
7. Explain why credit-card debt can grow quickly when only the minimum is paid.
Application
8. A \$5000 loan charges 8% simple interest per year. How much interest after 4 years?
9. \$2000 invested at 6% compounded annually — find the amount after 5 years (nearest cent).
10. Compare \$1000 at 5% simple vs 5% compound interest after 10 years; which earns more and by roughly how much?` },

  "7.4": { title: "Assignment 7.4 — Budgets", description: String.raw`Knowledge & Understanding
1. Define a budget.
2. State what it means for a budget to "balance."
3. Monthly income is \$2400 and expenses are \$2100. Find the monthly surplus.
Thinking
4. A budget allocates 50% to needs, 30% to wants, 20% to savings on \$2000 income. Find each amount.
5. Income is \$1800/month; rent \$700, food \$400, transport \$200, other \$300. How much is left to save?
Communication
6. Explain why tracking expenses is important even when income is steady.
7. Explain the "50/30/20" budgeting guideline in your own words.
Application
8. You want to save \$1200 in a year. How much must you set aside each month?
9. Income \$2500/month with \$2200 expenses. If you save the surplus, how long to reach \$1800 saved?
10. Your phone bill rises from \$45 to \$60/month. By how much must you cut other spending to keep the same total budget, and what % increase was the phone bill?` },
};

const subjects = [
  {
    code: "1.1", title: "Number Sets & Their Subsets",
    blocks: [
      { id: bid(), type: "html", html: String.raw`<div class="lecture-box">
  <h1>📚 Number Sets &amp; Their Subsets</h1>
  <p><strong>A number set</strong> is a collection of numbers that share a property. Every number you meet in Grade 9 lives in the <em>real number system</em>, and the sets nest neatly inside one another.</p>

  <h2>📌 The Real Number System</h2>
  <p>From smallest to largest, the five core sets are:</p>
  <ol class="math">
    <li><strong>Natural</strong>: \( \mathbb{N} = \{1, 2, 3, \dots\} \) — the counting numbers</li>
    <li><strong>Whole</strong>: \( \{0, 1, 2, 3, \dots\} \) — naturals plus zero</li>
    <li><strong>Integers</strong>: \( \mathbb{Z} = \{\dots, -2, -1, 0, 1, 2, \dots\} \)</li>
    <li><strong>Rational</strong>: \( \mathbb{Q} \) — any \( \frac{a}{b} \) with integers \( a, b \) and \( b \neq 0 \)</li>
    <li><strong>Irrational</strong>: cannot be written as a fraction, e.g. \( \sqrt{2},\ \pi \)</li>
  </ol>
  <p>Together they form the real numbers: \( \mathbb{N} \subset \mathbb{W} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R} \).</p>

  <div style="text-align:center;margin:18px 0;">
    <svg viewBox="0 0 520 330" style="max-width:100%;height:auto;" role="img" aria-label="Nested diagram of the real number sets">
      <rect x="8" y="8" width="504" height="314" rx="14" fill="#f5f3ff" stroke="#6d28d9" stroke-width="2"/>
      <text x="20" y="28" font-size="16" font-weight="700" fill="#6d28d9">ℝ  Real numbers</text>
      <text x="300" y="58" font-size="14" fill="#7c3aed">Irrational: π,  √2,  √50</text>
      <rect x="26" y="44" width="318" height="266" rx="12" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
      <text x="38" y="64" font-size="15" font-weight="700" fill="#2563eb">ℚ  Rational</text>
      <text x="40" y="84" font-size="13" fill="#1d4ed8">−3/4,  1/3,  0.25,  0.3̄</text>
      <rect x="44" y="96" width="284" height="200" rx="11" fill="#ecfdf5" stroke="#0d9488" stroke-width="2"/>
      <text x="56" y="116" font-size="15" font-weight="700" fill="#0d9488">ℤ  Integers</text>
      <text x="58" y="136" font-size="13" fill="#0f766e">−10,  −3</text>
      <rect x="62" y="148" width="250" height="134" rx="10" fill="#fff7ed" stroke="#ea580c" stroke-width="2"/>
      <text x="74" y="168" font-size="15" font-weight="700" fill="#ea580c">𝕎  Whole</text>
      <text x="76" y="188" font-size="13" fill="#c2410c">0</text>
      <rect x="80" y="200" width="214" height="68" rx="9" fill="#fef2f2" stroke="#dc2626" stroke-width="2"/>
      <text x="92" y="222" font-size="15" font-weight="700" fill="#dc2626">ℕ  Natural</text>
      <text x="92" y="244" font-size="13" fill="#b91c1c">1,  2,  3,  …,  7</text>
    </svg>
    <div style="font-size:13px;color:#64748b;margin-top:4px;">Each set sits inside the next: \( \mathbb{N} \subset \mathbb{W} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R} \). The irrationals fill the rest of \( \mathbb{R} \) (outside \( \mathbb{Q} \)).</div>
  </div>

  <h2>📌 How to Classify a Number</h2>
  <p>Ask yourself: <em>can I write it as a fraction of integers?</em> If yes, it is <strong>rational</strong> (its decimal terminates or repeats). If its decimal runs on forever with no pattern, it is <strong>irrational</strong>. And always check a square root for a perfect square first — \( \sqrt{9} = 3 \) is rational!</p>

  <h2>🔵 Examples</h2>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 1: Classifying a counting number</h3>
    <p>To which sets does \( 7 \) belong?</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \( 7 \) is a counting number, so it is <em>natural</em> (\( 7 \in \mathbb{N} \)).</div>
      <div class="step"><strong>Step 2:</strong> Because \( \mathbb{N} \subset \mathbb{W} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R} \), it automatically belongs to every set further out.</div>
      <div class="step"><strong>Step 3 (check):</strong> \( 7 = \frac{7}{1} \) is a ratio of integers, confirming it is also rational.</div>
      <em>Conclusion: \( 7 \) is natural, whole, an integer, rational, and real. ✓</em>
    </div>
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 2: A square root that is rational</h3>
    <p>Is \( \sqrt{16} \) rational or irrational?</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Check for a perfect square: \( \sqrt{16} = 4 \), because \( 4^2 = 16 \).</div>
      <div class="step"><strong>Step 2:</strong> \( 4 = \frac{4}{1} \) is a ratio of integers, so it is rational.</div>
      <em>Conclusion: \( \sqrt{16} = 4 \) is rational. ✓</em>
    </div>
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 3: A negative fraction</h3>
    <p>Name the smallest set that contains \( -\frac{3}{4} \).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> It is negative and not a whole number, so it is <em>not</em> natural, whole, or an integer.</div>
      <div class="step"><strong>Step 2:</strong> It is a ratio of integers, \( \frac{-3}{4} \), so it is rational.</div>
      <div class="step"><strong>Step 3 (check):</strong> its decimal \( -0.75 \) terminates — another sign it is rational.</div>
      <em>Conclusion: the smallest set is the rationals, \( \mathbb{Q} \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 4: A repeating decimal</h3>
    <p>Is \( 0.\overline{3} \) rational or irrational?</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Let \( x = 0.\overline{3} \). Multiply by 10: \( 10x = 3.\overline{3} \).</div>
      <div class="step"><strong>Step 2:</strong> Subtract: \( 10x - x = 3.\overline{3} - 0.\overline{3} = 3 \), so \( 9x = 3 \Rightarrow x = \frac{3}{9} = \frac{1}{3} \).</div>
      <div class="step"><strong>Step 3:</strong> \( \frac{1}{3} \) is a ratio of integers, hence rational.</div>
      <em>Conclusion: \( 0.\overline{3} = \frac{1}{3} \) is rational. ✓ (Every terminating <em>or</em> repeating decimal is rational.)</em>
    </div>
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 5: A non-perfect square root</h3>
    <p>Classify \( \sqrt{50} \).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \( 50 \) is not a perfect square — it sits between \( 7^2 = 49 \) and \( 8^2 = 64 \).</div>
      <div class="step"><strong>Step 2:</strong> Simplify: \( \sqrt{50} = \sqrt{25 \cdot 2} = 5\sqrt{2} \approx 7.071\ldots \), a decimal that never repeats.</div>
      <div class="step"><strong>Step 3 (check):</strong> \( \sqrt{2} \) is irrational, and a (non-zero) rational times an irrational is irrational.</div>
      <em>Conclusion: \( \sqrt{50} \) is irrational. ✓</em>
    </div>
  </div>

  <h2>🟡 Practice Questions</h2>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 1</h3>
    <p>What is the smallest set that contains \( -3 \)?</p>
    <details><summary>View answer</summary>
      <div class="solution"><div class="step">\( -3 \) is negative but whole-valued, so it is an integer (not a whole or natural number). <em>Answer: the integers, \( \mathbb{Z} \).</em></div></div>
    </details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 2</h3>
    <p>Is \( \sqrt{25} \) rational or irrational?</p>
    <details><summary>View answer</summary>
      <div class="solution"><div class="step">\( \sqrt{25} = 5 \), a whole number. <em>Answer: rational.</em></div></div>
    </details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 3</h3>
    <p>Give an example of a number that is rational but <em>not</em> an integer.</p>
    <details><summary>View answer</summary>
      <div class="solution"><div class="step">Any non-whole fraction works. <em>Answer: e.g. \( \frac{1}{2} \) or \( 0.25 \).</em></div></div>
    </details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 4</h3>
    <p>True or False: every whole number is an integer.</p>
    <details><summary>View answer</summary>
      <div class="solution"><div class="step">The whole numbers \( \{0, 1, 2, \dots\} \) are all integers. <em>Answer: True.</em></div></div>
    </details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 5</h3>
    <p>Classify \( \pi \).</p>
    <details><summary>View answer</summary>
      <div class="solution"><div class="step">\( \pi = 3.14159\ldots \) never terminates or repeats. <em>Answer: irrational.</em></div></div>
    </details>
  </div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Q1: Is zero a natural number?</h3>
    <p><em>In this course the natural numbers start at 1, so zero is a <strong>whole</strong> number but not a natural number.</em></p>
  </div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Q2: Fastest way to tell rational from irrational?</h3>
    <p><em>If it can be written as a fraction of integers — or its decimal terminates or repeats — it is rational. Otherwise it is irrational.</em></p>
  </div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Q3: Are all square roots irrational?</h3>
    <p><em>No. The square root of a perfect square is rational (e.g. \( \sqrt{36} = 6 \)); other square roots are irrational.</em></p>
  </div>
</div>` },
    ],
    assignment: {
      title: "Assignment 1.1 — Classifying Numbers & a Number Story",
      description: "Part A (Classify): For each number, list every set it belongs to (N, W, Z, Q, Irrational, Real): -7, 0, 3/4, √2, 5, -2.5, π, √16, √10, 0.̅3 (repeating).\nPart B (Justify): True or false, with one sentence of reasoning each: (i) Every integer is rational. (ii) Every square root is irrational. (iii) There is a smallest positive rational number.\nPart C (Number line): Plot -3, -3/4, √2, and 5/2 on a single number line.\nPart D (Research story, ~1 paragraph): Pick a number concept (zero, negative numbers, irrational numbers, or the golden ratio). Tell the story of where it came from and one place it is used today.",
    },
    quizzes: [
      quiz("Easy", [
        mc("Which set is the counting numbers $\\{1, 2, 3, \\dots\\}$?", ["Natural numbers", "Whole numbers", "Integers", "Irrational numbers"], 0),
        tf("Every integer is also a rational number.", true, 1, "Yes — e.g. $5 = \\frac{5}{1}$."),
        mc("Which of these is irrational?", ["$\\frac{1}{2}$", "$0.75$", "$\\sqrt{2}$", "$-3$"], 2),
        mc("To which smallest set does $0$ belong?", ["Natural", "Whole", "Rational", "Real"], 1),
        mc("Which of these is a whole number?", ["$-2$", "$3.5$", "$4$", "$\\frac{1}{2}$"], 2),
        tf("$\\sqrt{2}$ is a rational number.", false),
        mc("Which number is rational?", ["$\\sqrt{2}$", "$\\pi$", "$0.5$", "$\\sqrt{3}$"], 2),
        mc("To which smallest set does $-5$ belong?", ["Natural", "Whole", "Integers", "Irrational"], 2),
      ], EASY),
      quiz("Medium", [
        ms("Select all numbers that are integers.", ["$-5$", "$2.5$", "$0$", "$7$", "$\\frac{1}{3}$"], [0, 2, 3]),
        mc("$\\sqrt{16}$ is…", ["irrational", "rational", "not a real number"], 1, 1, "$\\sqrt{16}=4$."),
        tf("Some rational numbers are also integers.", true),
        sa("What name is given to numbers that cannot be written as a fraction?", ["irrational", "irrational numbers"]),
        mc("The numbers $4, 9, 16, 25$ are all…", ["prime numbers", "perfect squares", "even numbers"], 1),
        mc("$0.\\overline{3}$ (repeating) is…", ["rational", "irrational"], 0, 1, "It equals $\\frac{1}{3}$."),
        mc("Which of these is NOT an integer?", ["$-3$", "$0$", "$2.5$", "$7$"], 2),
        tf("Every natural number is also a whole number.", true),
      ], MED),
      quiz("Hard", [
        ms("Select all irrational numbers.", ["$\\pi$", "$\\sqrt{4}$", "$\\sqrt{5}$", "$\\frac{22}{7}$", "$e$"], [0, 2, 4]),
        tf("There are finitely many real numbers between $0$ and $1$.", false),
        num("How many integers satisfy $-2 \\le x \\le 3$?", 6, 0),
        mc("Which statement is always true?", ["Every real number is rational", "Every natural number is a real number", "Every rational number is an integer", "Every integer is a natural number"], 1),
        sa("A whole number greater than 1 divisible only by 1 and itself is a ___ number.", ["prime"]),
        mc("Which number is rational?", ["$\\sqrt{7}$", "$\\sqrt{9}$", "$\\sqrt{10}$"], 1, 1, "$\\sqrt{9}=3$."),
        ms("Select all perfect squares.", ["$16$", "$20$", "$25$", "$30$", "$36$"], [0, 2, 4]),
        num("How many prime numbers are there between 1 and 10?", 4, 0, 1, "2, 3, 5, 7."),
      ], HARD),
    ],
  },

  {
    code: "1.2", title: "Density, Infinity & Limit",
    blocks: [
      { id: bid(), type: "html", html: String.raw`<div class="lecture-box">
  <h1>📈 Density, Infinity &amp; Limit</h1>
  <p><strong>Overview.</strong> Three big ideas about number sets: which ones go on forever (<em>infinity</em>), how tightly packed they are (<em>density</em>), and what it means for a list of numbers to creep ever closer to a value (<em>limit</em>).</p>

  <h2>📌 Infinite Sets</h2>
  <p>The naturals, integers, rationals, and reals are all <strong>infinite</strong> — they never run out. The "\( \dots \)" (ellipsis) shows a pattern continues forever. Infinity is <em>not</em> a number you reach; it is a process that never ends — you can always add 1.</p>

  <h2>📌 Density</h2>
  <p>A set is <strong>dense</strong> if between <em>any</em> two of its members there is always another one. The rationals and reals are dense; the integers are not — between \( 0 \) and \( 1 \) there are no integers, but infinitely many fractions.</p>
  <p><strong>Midpoint trick:</strong> between any two numbers \( a \) and \( b \), the average \( \frac{a+b}{2} \) sits strictly between them. Repeat forever → infinitely many numbers in between.</p>

  <h2>📌 Approaching a Limit</h2>
  <p>In \( 1, \frac{1}{2}, \frac{1}{4}, \frac{1}{8}, \dots \) each term is half the one before. The values shrink toward \( 0 \) but never reach it — we say the <strong>limit</strong> is \( 0 \). Explore the curve below the lesson.</p>

  <h2>🔵 Examples</h2>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 1: A number between two fractions</h3>
    <p>Find a number between \( \frac{1}{4} \) and \( \frac{1}{2} \).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Add them&nbsp; \( \left(\frac{1}{4}+\frac{1}{2}\right) =\frac{1}{4}+ \frac{1}{2}\cdot\frac{2}{2}=\frac{3}{4} \) (Commend denominator).</div><div class="step"><span style="font-weight: bolder;">Step 2:</span> Divid by 2:&nbsp; \( \frac{ \frac{3}{4}}{2}=\frac{3}{8} \).</div>
      <em>Conclusion: \( \frac{3}{8} \), and \( \frac{1}{4} &lt; \frac{3}{8} &lt; \frac{1}{2} \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 2: Between two close decimals</h3>
    <p>Find a number between \( 0.7 \) and \( 0.71 \).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Add the two values:&nbsp; \( 0.7 + 0.71 = 1.41 \).</div>
      <div class="step"><strong>Step 2:</strong> Divide by 2 to land exactly in the middle:&nbsp; \( \frac{1.41}{2} = 0.705 \).</div>
      <div class="step"><strong>Step 3 (check):</strong> \( 0.7 &lt; 0.705 &lt; 0.71 \). ✓</div>
      <em>Conclusion: \( 0.705 \). And we are not stuck — between \( 0.7 \) and \( 0.705 \) sits \( 0.7025 \), and so on <strong>forever</strong>.</em>
    </div>
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 3: Does a sequence have a limit?</h3>
    <p>Does \( 1, \frac{1}{3}, \frac{1}{9}, \frac{1}{27}, \dots \) approach a limit?</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Find the pattern — divide each term by 3 to get the next:&nbsp; \( 1 \to \frac{1}{3} \to \frac{1}{9} \to \frac{1}{27} \) (constant ratio \( \frac{1}{3} \)).</div>
      <div class="step"><strong>Step 2:</strong> Write the terms as decimals:&nbsp; \( 1,\ 0.333\dots,\ 0.111\dots,\ 0.037\dots,\ 0.0123\dots \) — each about a third of the one before.</div>
      <div class="step"><strong>Step 3:</strong> The terms get as close to \( 0 \) as we like, but never actually equal \( 0 \).</div>
      <em>Conclusion: yes — the limit is \( 0 \). See the interactive graph just below: the curve \( y = \left(\frac{1}{3}\right)^{x} \) dives toward the x-axis.</em>
    </div>
  </div>
</div>
` },
      graph("(1/3)^x", "", { xMin: 0, xMax: 6, yMin: 0, yMax: 1.1, caption: "Example 3: the sequence 1, 1/3, 1/9, 1/27, … shown as y = (1/3)^x. It dives toward 0 (the limit) but never touches the x-axis." }),
      { id: bid(), type: "html", html: String.raw`<div class="lecture-box">
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 4: Build a sequence that approaches 2</h3>
    <p>Make a list that gets closer and closer to \( 2 \) without ever reaching it.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Start at \( 1 \). The gap to \( 2 \) is \( 2 - 1 = 1 \).</div>
      <div class="step"><strong>Step 2:</strong> Each step, close <em>half</em> of the remaining gap — add \( \frac{1}{2} \), then \( \frac{1}{4} \), then \( \frac{1}{8} \), \( \dots \):&nbsp; \( 1 \to 1.5 \to 1.75 \to 1.875 \to 1.9375 \).</div>
      <div class="step"><strong>Step 3:</strong> The gap is now \( 1,\ 0.5,\ 0.25,\ 0.125,\ \dots \) — it halves every time, heading to \( 0 \). So the terms head to \( 2 \).</div>
      <em>Conclusion: \( 1,\ 1.5,\ 1.75,\ 1.875,\ 1.9375,\ \dots \to 2 \) (the limit is \( 2 \)).</em>
    </div>
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 5: Which set is denser?</h3>
    <p>Between \( 0 \) and \( 10 \), which is denser — the integers or the real numbers?</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> List the integers strictly between \( 0 \) and \( 10 \):&nbsp; \( 1, 2, 3, \dots, 9 \) — only \( 9 \) values (a finite list).</div>
      <div class="step"><strong>Step 2:</strong> For the reals, take any two and average them to get a new one in between — e.g. between \( 0 \) and \( 1 \): \( 0.5 \), then \( 0.25 \), then \( 0.125 \), \( \dots \) — infinitely many.</div>
      <div class="step"><strong>Step 3:</strong> "Denser" means more values packed into the same interval.</div>
      <em>Conclusion: the real numbers are far denser — infinitely many, versus just \( 9 \) integers.</em>
    </div>
  </div>

  <h2>🟡 Practice Questions</h2>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 1</h3><p>Find a number between \( \frac{1}{3} \) and \( \frac{1}{2} \).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">Average them: \( \frac{1}{2}\left(\frac{1}{3}+\frac{1}{2}\right) = \frac{1}{2}\cdot\frac{5}{6} \). <em>Answer: \( \frac{5}{12} \).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 2</h3><p>What is the limit of \( 1, \frac{1}{2}, \frac{1}{4}, \dots \)?</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">The terms halve toward zero. <em>Answer: \( 0 \).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 3</h3><p>How many integers lie between \( 0 \) and \( 1 \)?</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">There are none. <em>Answer: 0.</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 4</h3><p>True or False: a sequence must eventually equal its limit.</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">It only gets arbitrarily close. <em>Answer: False.</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 5</h3><p>Find the midpoint of \( 0.6 \) and \( 0.8 \).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\( \frac{0.6+0.8}{2} = \frac{1.4}{2} \). <em>Answer: \( 0.7 \).</em></div></div></details>
  </div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q1: Is infinity a number?</h3><p><em>No — it describes a process that never ends.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q2: Are the rational numbers dense?</h3><p><em>Yes — between any two there is always another.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q3: Quick way to find a number between two values?</h3><p><em>Take their average (midpoint).</em></p></div>
</div>
` },
      graph("(1/2)^x", "", { xMin: 0, xMax: 6, yMin: 0, yMax: 1.1, caption: "The limit example: 1, 1/2, 1/4, 1/8, … as y = (1/2)^x — it approaches the limit 0." }),
    ],
    assignment: {
      title: "Assignment 1.2 — Patterns, Density & Limits",
      description: "Part A (Density): Find a number between each pair: (i) 1/3 and 1/2  (ii) 0.7 and 0.71  (iii) -1 and -0.9. Show the method you used.\nPart B (Limits): Write a sequence of 5 numbers that gets closer and closer to 2, and state the limit.\nPart C (Explain): In 2–3 sentences, explain why there are infinitely many numbers between 0 and 1.\nPart D (Compare): Between 0 and 20, which set is denser — the even numbers or the multiples of 5? Justify with a count.",
    },
    quizzes: [
      quiz("Easy", [
        tf("Between any two different fractions, there is always another fraction.", true),
        mc("$1, \\frac{1}{2}, \\frac{1}{4}, \\frac{1}{8}, \\dots$ gets closer and closer to…", ["1", "0", "Infinity", "2"], 1),
        mc("How many integers are between $0$ and $1$?", ["0", "1", "2", "Infinitely many"], 0),
        tf("The natural numbers form an infinite set.", true),
        mc("Which set is infinite?", ["$\\{1, 2, 3\\}$", "The integers", "$\\{0\\}$", "$\\{1, 2\\}$"], 1),
        mc("Which number lies between $0$ and $1$?", ["$2$", "$0.5$", "$-1$", "$5$"], 1),
        tf("There are infinitely many fractions between 0 and 1.", true),
      ], EASY),
      quiz("Medium", [
        mc("Which is more dense between 0 and 1?", ["Integers", "Real numbers", "They are equally dense"], 1),
        sa("Next term in $1, \\frac{1}{3}, \\frac{1}{9}, \\dots$ (as a fraction)?", ["1/27"]),
        tf("A sequence that approaches a limit must eventually equal that limit.", false),
        ms("Select all sequences that approach a limit of 0.", ["$1,\\frac12,\\frac14,\\dots$", "$2,4,6,8,\\dots$", "$1,\\frac13,\\frac19,\\dots$", "$1,2,4,8,\\dots$"], [0, 2]),
        num("Find the number exactly between $\\frac{1}{4}$ and $\\frac{1}{2}$ (as a decimal).", 0.375, 0),
        mc("The limit of $1, \\frac{1}{2}, \\frac{1}{4}, \\dots$ is…", ["1", "0", "$\\frac{1}{2}$"], 1),
        sa("Write a number exactly halfway between 2 and 3 (as a decimal).", ["2.5"]),
      ], MED),
      quiz("Hard", [
        mc("Which best describes the real numbers between 1 and 2?", ["Empty", "Finite", "Infinite and dense", "Exactly 10 numbers"], 2),
        sa("What word describes a value a sequence gets arbitrarily close to but may never reach?", ["limit"]),
        tf("The even numbers from 0–100 are denser than the multiples of 10 from 0–100.", true),
        num("In $100, 50, 25, 12.5, \\dots$ what is the 5th term?", 6.25, 0),
        num("Find the midpoint of $0.6$ and $0.8$.", 0.7, 0),
        sa("Write a fraction exactly halfway between $\\frac{1}{2}$ and $1$.", ["3/4"]),
        mc("Which best describes the natural numbers?", ["Finite", "Infinite and dense", "Infinite but not dense"], 2, 1, "Between 3 and 4 there is no other natural number, so they are not dense."),
      ], HARD),
    ],
  },

  {
    code: "1.3", title: "Powers & Scientific Notation",
    blocks: [
      { id: bid(), type: "html", html: String.raw`<div class="lecture-box">
  <h1>🔢 Powers &amp; Scientific Notation</h1>
  <p><strong>Overview.</strong> A power is a compact way to write repeated multiplication. You'll evaluate powers (including zero and negative exponents), handle negative bases carefully, and use scientific notation for very large and very small numbers.</p>

  <h2>📌 Base and Exponent</h2>
  <p>In \( 2^5 = 2\times2\times2\times2\times2 = 32 \), the <strong>base</strong> (\( 2 \)) is the number being multiplied and the <strong>exponent</strong> (\( 5 \)) counts how many times.</p>

  <h2>📌 The Exponent Pattern</h2>
  <p>Each time the exponent drops by 1, you <strong>divide by the base</strong>: \( 2^3=8,\ 2^2=4,\ 2^1=2,\ 2^0=1,\ 2^{-1}=\frac{1}{2} \). This explains two key rules:</p>
  <ol class="math">
    <li>\( a^0 = 1 \)</li>
    <li>\( a^{-n} = \frac{1}{a^{n}} \)</li>
  </ol>
  <p>Slide the base on the interactive graph below the lesson to see how fast \( a^x \) grows.</p>

  <h2>📌 Negative Bases — Watch the Brackets</h2>
  <p>Brackets change everything: \( (-2)^4 \) multiplies \( -2 \) four times \( = 16 \), but \( -2^4 \) means \( -(2^4) = -16 \). An <strong>even</strong> exponent on a negative base gives a positive result; an <strong>odd</strong> exponent stays negative.</p>

  <h2>📌 Scientific Notation</h2>
  <p>Write a number as \( a \times 10^{n} \) with \( 1 \le a < 10 \). A <strong>positive</strong> \( n \) means a large number; a <strong>negative</strong> \( n \) means a small one. E.g. the speed of light \( \approx 3 \times 10^{8} \) m/s.</p>

  <h2>🔵 Examples</h2>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 1: Evaluate a power</h3>
    <p>Evaluate \( 2^4 \).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Write it as repeated multiplication: \( 2^4 = 2\times2\times2\times2 \).</div>
      <div class="step"><strong>Step 2:</strong> Multiply two at a time: \( 2\times2 = 4 \), then \( 4\times2 = 8 \), then \( 8\times2 = 16 \).</div>
      <em>Conclusion: \( 2^4 = 16 \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 2: A negative exponent</h3>
    <p>Evaluate \( 3^{-2} \).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> A negative exponent means "reciprocal": \( a^{-n}=\frac{1}{a^{n}} \), so \( 3^{-2} = \frac{1}{3^{2}} \).</div>
      <div class="step"><strong>Step 2:</strong> Evaluate the denominator: \( 3^{2} = 9 \), giving \( \frac{1}{9} \).</div>
      <em>Conclusion: \( 3^{-2} = \frac{1}{9} \approx 0.111 \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 3: Brackets matter</h3>
    <p>Compare \( (-2)^4 \) and \( -2^4 \).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \( (-2)^4 = (-2)(-2)(-2)(-2) \). Pair them: \( (-2)(-2)=4 \) and \( (-2)(-2)=4 \), then \( 4\times4 = 16 \).</div>
      <div class="step"><strong>Step 2:</strong> \( -2^4 \) raises only the \( 2 \): \( -(2\times2\times2\times2) = -(16) = -16 \).</div>
      <div class="step"><strong>Step 3 (rule):</strong> an <em>even</em> exponent on a bracketed negative is positive; without brackets the negative is applied last.</div>
      <em>Conclusion: \( (-2)^4 = 16 \) but \( -2^4 = -16 \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 4: A large number in scientific notation</h3>
    <p>Write \( 4\,500\,000 \) in scientific notation.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Place the decimal after the first non-zero digit: \( 4.5 \).</div>
      <div class="step"><strong>Step 2:</strong> Count how far the decimal moved <em>left</em>: \( 4\,500\,000. \to 4.5 \) is \( 6 \) places, so the power is \( 10^{6} \) (large number ⇒ positive exponent).</div>
      <div class="step"><strong>Step 3 (check):</strong> \( 4.5 \times 10^{6} = 4\,500\,000 \). ✓</div>
      <em>Conclusion: \( 4.5 \times 10^{6} \).</em>
    </div>
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 5: A small number in scientific notation</h3>
    <p>Write \( 0.00067 \) in scientific notation.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Put the first non-zero digit before the decimal: \( 6.7 \).</div>
      <div class="step"><strong>Step 2:</strong> Count how far the decimal moved <em>right</em>: \( 0.00067 \to 6.7 \) is \( 4 \) places, so the power is \( 10^{-4} \) (small number ⇒ negative exponent).</div>
      <div class="step"><strong>Step 3 (check):</strong> \( 6.7 \times 10^{-4} = 0.00067 \). ✓</div>
      <em>Conclusion: \( 6.7 \times 10^{-4} \).</em>
    </div>
  </div>

  <h2>🟡 Practice Questions</h2>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 1</h3><p>Evaluate \( 5^3 \).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\( 5\times5\times5 \). <em>Answer: \( 125 \).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 2</h3><p>Evaluate \( 10^0 \).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">Any non-zero base to the power 0 is 1. <em>Answer: \( 1 \).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 3</h3><p>Evaluate \( 2^{-3} \) as a decimal.</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\( 2^{-3} = \frac{1}{8} \). <em>Answer: \( 0.125 \).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 4</h3><p>Write \( 93\,000\,000 \) in scientific notation.</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">Move the decimal 7 places left. <em>Answer: \( 9.3 \times 10^{7} \).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 5</h3><p>Evaluate \( (-3)^3 \).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">Odd exponent keeps the sign negative: \( (-3)(-3)(-3) \). <em>Answer: \( -27 \).</em></div></div></details>
  </div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q1: Why does \( a^0 = 1 \)?</h3><p><em>Following the divide-by-base pattern downward, the step after \( a^1 = a \) is \( a \div a = 1 \).</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q2: Why are \( (-2)^4 \) and \( -2^4 \) different?</h3><p><em>Brackets put the negative inside the power; without them only the 2 is raised, then negated.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q3: When should I use scientific notation?</h3><p><em>For very large or very small numbers, to keep them compact and readable.</em></p></div>
</div>` },
      graph("a^x", "a", { xMin: -3, xMax: 4, yMin: -1, yMax: 16, paramMin: 1, paramMax: 3, paramInit: 2, caption: "y = aˣ — slide the base a and watch how fast it grows" }),
    ],
    assignment: {
      title: "Assignment 1.3 — Powers in the Real World",
      description: "Part A (Evaluate): 2^6, 3^4, (-2)^5, -3^2, 10^-3, (1/2)^3.\nPart B (Scientific notation): Write in scientific notation: 4,500,000; 0.00067; 93,000,000. Then convert back to standard form: 7.2×10^5 and 1.5×10^-3.\nPart C (Brackets): Explain in one sentence why (-2)^4 and -2^4 are different, and give both values.\nPart D (Real world): Find one real measurement (a distance, size, mass, or population) and write it in scientific notation, citing your source.",
    },
    quizzes: [
      quiz("Easy", [
        num("Evaluate $2^4$.", 16, 0),
        mc("In $7^3$, which number is the exponent?", ["7", "3", "21", "10"], 1),
        num("What is $10^0$?", 1, 0),
        mc("Which is $5\\times10^{3}$ in standard form?", ["50", "500", "5000", "53"], 2),
        num("Evaluate $3^2$.", 9, 0),
        num("Evaluate $5^3$.", 125, 0),
        mc("In $4^6$, which number is the base?", ["4", "6", "24"], 0),
      ], EASY),
      quiz("Medium", [
        sa("Evaluate $3^{-2}$ as a fraction.", ["1/9"]),
        num("Write $0.0042$ as $a\\times10^{n}$. What is $n$?", -3, 0),
        num("Evaluate $(-2)^3$.", -8, 0),
        mc("$(-4)^2$ equals", ["-16", "-8", "8", "16"], 3),
        num("Evaluate $2^5$.", 32, 0),
        sa("Write $0.00067$ in scientific notation.", ["6.7 x 10^-4", "6.7*10^-4", "6.7×10^-4", "6.7e-4"]),
        num("Write $10^{-2}$ as a decimal.", 0.01, 0),
      ], MED),
      quiz("Hard", [
        num("Evaluate $2^{-3}$ as a decimal.", 0.125, 0),
        sa("Write $93\\,000\\,000$ in scientific notation.", ["9.3 x 10^7", "9.3*10^7", "9.3×10^7", "9.3e7"]),
        num("If $a\\times10^{n} = 6.02\\times10^{23}$, what is $n$?", 23, 0),
        mc("Which is larger?", ["$-4\\times10^{3}$", "$4\\times10^{-3}$"], 1),
        num("Evaluate $\\left(\\frac{1}{2}\\right)^{4}$ as a decimal.", 0.0625, 0),
        num("Evaluate $-2^4$ (note: no brackets).", -16, 0, 1, "$-2^4 = -(2^4) = -16$."),
        num("Evaluate $(-3)^3$.", -27, 0),
      ], HARD),
    ],
  },

  {
    code: "1.4", title: "Exponent Laws",
    blocks: [
      { id: bid(), type: "html", html: String.raw`<div class="lecture-box">
  <h1>⚡ Exponent Laws</h1>
  <p><strong>Overview.</strong> When you multiply, divide, or raise powers to powers, there are shortcuts — the <strong>exponent laws</strong>. They only work when the <strong>bases are the same</strong>.</p>

  <h2>📌 The Three Laws</h2>
  <ol class="math">
    <li><strong>Product:</strong> \( a^m \cdot a^n = a^{m+n} \) — add the exponents</li>
    <li><strong>Quotient:</strong> \( \frac{a^m}{a^n} = a^{m-n} \) — subtract the exponents</li>
    <li><strong>Power of a power:</strong> \( (a^m)^n = a^{m\cdot n} \) — multiply the exponents</li>
  </ol>

  <h2>📌 Why They Work</h2>
  <p>\( 3^5 \times 3^2 = (3\cdot3\cdot3\cdot3\cdot3)\times(3\cdot3) = 3^{7} \) — you are just counting how many 3's are multiplied. A common mistake: \( a^m \cdot a^n \) is <strong>not</strong> \( a^{m\times n} \) — you <em>add</em> when multiplying.</p>

  <h2>🔵 Examples</h2>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 1: Product law</h3>
    <p>Simplify \( a^3 \cdot a^4 \).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Same base, multiplication ⇒ <em>add</em> the exponents: \( a^{3+4} \).</div>
      <div class="step"><strong>Step 2:</strong> \( a^{3+4} = a^{7} \).</div>
      <div class="step"><strong>Step 3 (check):</strong> \( (a\,a\,a)(a\,a\,a\,a) \) is seven \( a \)'s multiplied \( = a^{7} \).</div>
      <em>Conclusion: \( a^{7} \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 2: Quotient law</h3>
    <p>Simplify \( \frac{a^8}{a^3} \).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Same base, division ⇒ <em>subtract</em> the exponents: \( a^{8-3} \).</div>
      <div class="step"><strong>Step 2:</strong> \( a^{8-3} = a^{5} \).</div>
      <div class="step"><strong>Step 3 (check):</strong> three \( a \)'s in the bottom cancel three on top, leaving \( 8-3 = 5 \).</div>
      <em>Conclusion: \( a^{5} \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 3: Power of a power</h3>
    <p>Simplify \( (a^2)^3 \).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Power of a power ⇒ <em>multiply</em> the exponents: \( a^{2\cdot 3} \).</div>
      <div class="step"><strong>Step 2:</strong> \( a^{2\cdot 3} = a^{6} \).</div>
      <div class="step"><strong>Step 3 (check):</strong> \( (a^2)(a^2)(a^2) = a^{2+2+2} = a^{6} \).</div>
      <em>Conclusion: \( a^{6} \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 4: Combining laws</h3>
    <p>Simplify \( (2x^2)^3 \).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Apply the outer power to <em>each</em> factor inside: \( 2^3 \cdot (x^2)^3 \).</div>
      <div class="step"><strong>Step 2:</strong> \( 2^3 = 8 \), and \( (x^2)^3 = x^{2\cdot 3} = x^{6} \).</div>
      <div class="step"><strong>Step 3:</strong> Combine: \( 8 \cdot x^{6} \).</div>
      <em>Conclusion: \( 8x^{6} \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 5: Evaluate with the product law</h3>
    <p>Simplify and evaluate \( 2^3 \cdot 2^4 \).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Same base ⇒ add exponents: \( 2^{3+4} = 2^{7} \).</div>
      <div class="step"><strong>Step 2:</strong> \( 2^{7} = 128 \).</div>
      <div class="step"><strong>Step 3 (check):</strong> directly, \( 2^3 \cdot 2^4 = 8 \times 16 = 128 \).</div>
      <em>Conclusion: \( 128 \). ✓</em>
    </div>
  </div>

  <h2>🟡 Practice Questions</h2>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 1</h3><p>Simplify \( x^5 \cdot x^2 \).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">Add exponents. <em>Answer: \( x^{7} \).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 2</h3><p>Simplify \( \frac{a^9}{a^5} \).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">Subtract exponents. <em>Answer: \( a^{4} \).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 3</h3><p>Simplify \( (m^2)^5 \).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">Multiply exponents. <em>Answer: \( m^{10} \).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 4</h3><p>Evaluate \( \frac{5^7}{5^5} \).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\( 5^{7-5} = 5^2 \). <em>Answer: \( 25 \).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 5</h3><p>Simplify \( \frac{a^6 \cdot a^2}{a^3} \).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\( a^{6+2} = a^8 \), then \( a^{8-3} \). <em>Answer: \( a^{5} \).</em></div></div></details>
  </div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q1: When I multiply powers, what happens to the exponents?</h3><p><em>You add them — but only when the bases match.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q2: And for a power of a power?</h3><p><em>You multiply the exponents: \( (a^m)^n = a^{mn} \).</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q3: What is the most common mistake?</h3><p><em>Multiplying exponents when you should add them: \( a^m \cdot a^n = a^{m+n} \), not \( a^{mn} \).</em></p></div>
</div>` },
    ],
    assignment: {
      title: "Assignment 1.4 — Simplifying with Exponent Laws",
      description: "Simplify and where possible evaluate: (a) x^4·x^3  (b) a^9/a^5  (c) (m^2)^5  (d) (2x^3)^2  (e) (a^6·a^2)/a^3. Show each exponent law you used.",
    },
    quizzes: [
      quiz("Easy", [
        mc("$a^3 \\cdot a^4 = $", ["$a^{7}$", "$a^{12}$", "$a^{1}$", "$a^{34}$"], 0),
        mc("$\\frac{a^8}{a^3} = $", ["$a^{5}$", "$a^{11}$", "$a^{24}$"], 0),
        mc("$(a^2)^3 = $", ["$a^{5}$", "$a^{6}$", "$a^{8}$"], 1),
        tf("$a^m \\cdot a^n = a^{m+n}$ only when the bases are equal.", true),
      ], EASY),
      quiz("Medium", [
        num("Simplify $2^3 \\cdot 2^4$ and evaluate.", 128, 0),
        sa("Simplify $x^5 \\cdot x^{-2}$.", ["x^3"]),
        num("Evaluate $\\frac{5^7}{5^5}$.", 25, 0),
        mc("$(x^3)^4 =$", ["$x^{7}$", "$x^{12}$", "$x^{81}$"], 1),
      ], MED),
      quiz("Hard", [
        sa("Simplify $\\frac{(a^6)(a^3)}{a^2}$.", ["a^7"]),
        num("Evaluate $\\frac{2^{10}}{2^{7}}$.", 8, 0),
        sa("Simplify $(2x^2)^3$.", ["8x^6"]),
        num("Evaluate $(3^2)^2$.", 81, 0),
        ms("Which expressions equal $a^6$?", ["$a^2\\cdot a^3$", "$(a^2)^3$", "$a^8/a^2$", "$a^3\\cdot a^3$"], [1, 2, 3]),
      ], HARD),
    ],
  },

  {
    code: "1.5", title: "Integers in Context",
    blocks: [
      { id: bid(), type: "html", html: String.raw`<div class="lecture-box">
  <h1>➖ Integers in Context</h1>
  <p><strong>Overview.</strong> Integers are the positive and negative whole numbers and zero: \( \dots, -3, -2, -1, 0, 1, 2, 3, \dots \). We use them to describe <strong>direction, location, amount, and change</strong>.</p>

  <h2>📌 What the Sign Means</h2>
  <p>A negative sign is the <em>opposite</em> of a positive one. \( +5 \) might mean money saved or \( 5°C \) above zero; \( -5 \) means money spent or \( 5°C \) below zero. A drop from \( 3°C \) to \( -4°C \) is a change of \( -7 \).</p>

  <h2>📌 Adding &amp; Subtracting</h2>
  <p><strong>Same signs</strong> → add and keep the sign. <strong>Different signs</strong> → subtract and take the sign of the larger. Subtracting is adding the opposite: \( a - b = a + (-b) \). On a number line, \( + \) moves <strong>right</strong> and \( - \) moves <strong>left</strong>.</p>

  <div style="text-align:center;margin:16px 0;">
    <svg viewBox="0 0 560 120" style="max-width:100%;height:auto;" role="img" aria-label="Number line showing negative 7 plus 4 equals negative 3">
      <line x1="30" y1="78" x2="530" y2="78" stroke="#475569" stroke-width="2"/>
      <!-- ticks -8..8 -->
      <g font-size="10" fill="#64748b" text-anchor="middle">
        <line x1="30" y1="73" x2="30" y2="83" stroke="#94a3b8"/><text x="30" y="98">−8</text>
        <line x1="61.25" y1="73" x2="61.25" y2="83" stroke="#94a3b8"/><text x="61.25" y="98">−7</text>
        <line x1="92.5" y1="73" x2="92.5" y2="83" stroke="#94a3b8"/><text x="92.5" y="98">−6</text>
        <line x1="123.75" y1="73" x2="123.75" y2="83" stroke="#94a3b8"/><text x="123.75" y="98">−5</text>
        <line x1="155" y1="73" x2="155" y2="83" stroke="#94a3b8"/><text x="155" y="98">−4</text>
        <line x1="186.25" y1="73" x2="186.25" y2="83" stroke="#94a3b8"/><text x="186.25" y="98">−3</text>
        <line x1="217.5" y1="73" x2="217.5" y2="83" stroke="#94a3b8"/><text x="217.5" y="98">−2</text>
        <line x1="248.75" y1="73" x2="248.75" y2="83" stroke="#94a3b8"/><text x="248.75" y="98">−1</text>
        <line x1="280" y1="71" x2="280" y2="85" stroke="#475569" stroke-width="2"/><text x="280" y="98">0</text>
        <line x1="311.25" y1="73" x2="311.25" y2="83" stroke="#94a3b8"/><text x="311.25" y="98">1</text>
        <line x1="342.5" y1="73" x2="342.5" y2="83" stroke="#94a3b8"/><text x="342.5" y="98">2</text>
        <line x1="373.75" y1="73" x2="373.75" y2="83" stroke="#94a3b8"/><text x="373.75" y="98">3</text>
        <line x1="405" y1="73" x2="405" y2="83" stroke="#94a3b8"/><text x="405" y="98">4</text>
        <line x1="436.25" y1="73" x2="436.25" y2="83" stroke="#94a3b8"/><text x="436.25" y="98">5</text>
        <line x1="467.5" y1="73" x2="467.5" y2="83" stroke="#94a3b8"/><text x="467.5" y="98">6</text>
        <line x1="498.75" y1="73" x2="498.75" y2="83" stroke="#94a3b8"/><text x="498.75" y="98">7</text>
        <line x1="530" y1="73" x2="530" y2="83" stroke="#94a3b8"/><text x="530" y="98">8</text>
      </g>
      <!-- jump +4 from -7 to -3 -->
      <path d="M 61.25 60 Q 123.75 22 186.25 60" fill="none" stroke="#2563eb" stroke-width="2.5"/>
      <polygon points="186.25,60 180,52 190,50" fill="#2563eb"/>
      <text x="123.75" y="32" font-size="13" fill="#2563eb" text-anchor="middle" font-weight="700">+4</text>
      <circle cx="61.25" cy="78" r="4.5" fill="#dc2626"/>
      <circle cx="186.25" cy="78" r="4.5" fill="#16a34a"/>
      <text x="61.25" y="116" font-size="11" fill="#dc2626" text-anchor="middle">start −7</text>
      <text x="186.25" y="116" font-size="11" fill="#16a34a" text-anchor="middle">end −3</text>
    </svg>
    <div style="font-size:13px;color:#64748b;margin-top:2px;">\( (-7) + 4 \): start at \( -7 \) and move <strong>right</strong> 4 → \( -3 \).</div>
  </div>

  <h2>📌 Multiplying &amp; Dividing</h2>
  <p>Same signs give a <strong>positive</strong> result; different signs give a <strong>negative</strong> result: \( (-)(-) = + \), \( (-)(+) = - \).</p>

  <h2>🔵 Examples</h2>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 1: Same signs</h3><p>Evaluate \( (-3) + (-5) \).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Signs are the same (both negative) → add the sizes: \( 3 + 5 = 8 \).</div>
      <div class="step"><strong>Step 2:</strong> Keep the common sign (negative): \( -8 \).</div>
      <div class="step"><strong>Step 3 (check):</strong> owing \( 3 \) then owing \( 5 \) more = owing \( 8 \). ✓</div>
      <em>Conclusion: \( -8 \).</em>
    </div>
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 2: Different signs</h3><p>Evaluate \( (-7) + 4 \).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Signs differ → subtract the smaller size from the larger: \( 7 - 4 = 3 \).</div>
      <div class="step"><strong>Step 2:</strong> Take the sign of the larger size (\( 7 \) is negative): \( -3 \).</div>
      <div class="step"><strong>Step 3 (check):</strong> on the number line above, start at \( -7 \) and move right 4 → \( -3 \). ✓</div>
      <em>Conclusion: \( -3 \).</em>
    </div>
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 3: Subtracting a negative</h3><p>Evaluate \( 6 - (-2) \).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Subtracting a negative = adding the opposite: \( 6 - (-2) = 6 + 2 \).</div>
      <div class="step"><strong>Step 2:</strong> \( 6 + 2 = 8 \).</div>
      <em>Conclusion: \( 8 \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 4: Multiplying</h3><p>Evaluate \( (-4) \times 3 \).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Multiply the sizes: \( 4 \times 3 = 12 \).</div>
      <div class="step"><strong>Step 2:</strong> Different signs → the result is negative: \( -12 \).</div>
      <em>Conclusion: \( -12 \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 5: Dividing two negatives</h3><p>Evaluate \( (-12) \div (-3) \).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Divide the sizes: \( 12 \div 3 = 4 \).</div>
      <div class="step"><strong>Step 2:</strong> Same signs → the result is positive: \( +4 \).</div>
      <em>Conclusion: \( 4 \). ✓</em>
    </div>
  </div>

  <h2>🟡 Practice Questions</h2>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 1</h3><p>Evaluate \( (-8) + 5 \).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">Different signs: \( 8 - 5 = 3 \), negative wins. <em>Answer: \( -3 \).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 2</h3><p>Evaluate \( 12 - (-4) \).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">Subtracting a negative adds. <em>Answer: \( 16 \).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 3</h3><p>Evaluate \( (-3) \times (-6) \).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">Two negatives make a positive. <em>Answer: \( 18 \).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 4</h3><p>At 5 a.m. it was \( -3°C \) and rose \( 2°C \) per hour. What was the temperature at 9 a.m.?</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\( -3 + 2\times 4 = -3 + 8 \). <em>Answer: \( 5°C \).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 5</h3><p>Evaluate \( -20 \div 4 \).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">Different signs → negative. <em>Answer: \( -5 \).</em></div></div></details>
  </div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q1: What does a negative sign represent?</h3><p><em>The opposite direction or amount — below zero, owed, lost, downward.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q2: What is subtracting a negative?</h3><p><em>The same as adding a positive: \( 6 - (-2) = 6 + 2 = 8 \).</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q3: What sign is the product of two negatives?</h3><p><em>Positive.</em></p></div>
</div>` },
    ],
    assignment: {
      title: "Assignment 1.5 — Integers in the Real World",
      description: "Part A: Evaluate (-8)+5, 12-(-4), (-3)×(-6), -20÷4. Part B: Write an integer for each: 7°C below zero; a $150 deposit; 40 m below sea level; a loss of 12 points. Part C: At 6 a.m. it was -5°C and rose 3°C each hour — what was the temperature at 11 a.m.? Show a number-line.",
    },
    quizzes: [
      quiz("Easy", [
        num("Evaluate $(-3) + (-5)$.", -8, 0),
        num("Evaluate $(-7) + 4$.", -3, 0),
        mc("The temperature falls from $5°C$ to $-2°C$. What is the change?", ["$-7$", "$-3$", "$7$", "$3$"], 0),
        tf("Subtracting a number is the same as adding its opposite.", true),
      ], EASY),
      quiz("Medium", [
        num("Evaluate $6 - (-2)$.", 8, 0),
        num("Evaluate $(-4) \\times 3$.", -12, 0),
        num("A diver at $-12$ m descends another $8$ m. What is the new depth?", -20, 0),
        mc("Which expression equals $-10$?", ["$-4 + (-6)$", "$4 + 6$", "$-4 + 6$", "$4 - 6$"], 0),
      ], MED),
      quiz("Hard", [
        num("Evaluate $(-2) \\times (-3) \\times (-1)$.", -6, 0),
        num("An account has $\\$250$. After withdrawals of $\\$75$ each week for 4 weeks, what is the balance?", -50, 0),
        num("Evaluate $-15 \\div 3 + (-2)$.", -7, 0),
        tf("The product of two negative numbers is negative.", false),
        num("At 5 a.m. it was $-3°C$ and rose $2°C$ per hour. What was the temperature at 9 a.m.?", 5, 0),
      ], HARD),
    ],
  },

  {
    code: "1.6", title: "Fractions & Unit Fractions",
    blocks: [
      { id: bid(), type: "html", html: String.raw`<div class="lecture-box">
  <h1>🍕 Fractions &amp; Unit Fractions</h1>
  <p><strong>Overview.</strong> A <strong>unit fraction</strong> has a numerator of \( 1 \), like \( \frac{1}{4} \). Every fraction is built from unit fractions: \( \frac{3}{4} = \frac{1}{4} + \frac{1}{4} + \frac{1}{4} \).</p>

  <h2>📌 Equivalent Fractions &amp; Simplifying</h2>
  <p>Multiply or divide top and bottom by the same number: \( \frac{1}{2} = \frac{2}{4} = \frac{3}{6} \). To <strong>simplify</strong>, divide both by their greatest common factor.</p>

  <h2>📌 Comparing Fractions</h2>
  <p>Rewrite with a common denominator. Compare \( \frac{2}{3} \) and \( \frac{3}{4} \): \( \frac{8}{12} \) vs \( \frac{9}{12} \), so \( \frac{3}{4} \) is larger.</p>

  <div style="text-align:center;margin:16px 0;">
    <svg viewBox="0 0 380 140" style="max-width:100%;height:auto;" role="img" aria-label="Bars comparing two thirds and three quarters">
      <text x="30" y="42" font-size="14" font-weight="700" fill="#1e3a8a" text-anchor="end">⅔</text>
      <g stroke="#1e3a8a" stroke-width="1.5">
        <rect x="40" y="24" width="100" height="30" fill="#bfdbfe"/>
        <rect x="140" y="24" width="100" height="30" fill="#bfdbfe"/>
        <rect x="240" y="24" width="100" height="30" fill="#fff"/>
      </g>
      <text x="30" y="108" font-size="14" font-weight="700" fill="#0f766e" text-anchor="end">¾</text>
      <g stroke="#0f766e" stroke-width="1.5">
        <rect x="40" y="90" width="75" height="30" fill="#99f6e4"/>
        <rect x="115" y="90" width="75" height="30" fill="#99f6e4"/>
        <rect x="190" y="90" width="75" height="30" fill="#99f6e4"/>
        <rect x="265" y="90" width="75" height="30" fill="#fff"/>
      </g>
      <line x1="240" y1="18" x2="240" y2="126" stroke="#94a3b8" stroke-dasharray="3 3"/>
    </svg>
    <div style="font-size:13px;color:#64748b;margin-top:2px;">Same-width bars: \( \frac{3}{4} \) (shaded to the dashed line and past it) reaches further than \( \frac{2}{3} \), so \( \frac{3}{4} > \frac{2}{3} \).</div>
  </div>

  <h2>📌 Positive &amp; Negative Fractions</h2>
  <p>The negative sign can sit on top, on the bottom, or in front — all the same value: \( -\frac{1}{2} = \frac{-1}{2} = \frac{1}{-2} \).</p>

  <h2>🔵 Examples</h2>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 1: Simplify a fraction</h3><p>Simplify \( \frac{6}{8} \).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Find the greatest common factor of \( 6 \) and \( 8 \): it is \( 2 \).</div>
      <div class="step"><strong>Step 2:</strong> Divide top and bottom by \( 2 \): \( \frac{6 \div 2}{8 \div 2} = \frac{3}{4} \).</div>
      <div class="step"><strong>Step 3 (check):</strong> \( 3 \) and \( 4 \) share no common factor, so it is fully simplified.</div>
      <em>Conclusion: \( \frac{3}{4} \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 2: Equivalent fraction</h3><p>Write \( \frac{1}{2} \) with denominator \( 4 \).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> To turn the denominator \( 2 \) into \( 4 \), multiply by \( 2 \) — and do the same to the top.</div>
      <div class="step"><strong>Step 2:</strong> \( \frac{1 \times 2}{2 \times 2} = \frac{2}{4} \).</div>
      <em>Conclusion: \( \frac{2}{4} \) (which equals \( \frac{1}{2} \)). ✓</em>
    </div>
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 3: Compare two fractions</h3><p>Which is larger, \( \frac{2}{3} \) or \( \frac{3}{4} \)?</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Common denominator is \( 12 \) (the LCM of \( 3 \) and \( 4 \)).</div>
      <div class="step"><strong>Step 2:</strong> \( \frac{2}{3} = \frac{8}{12} \) and \( \frac{3}{4} = \frac{9}{12} \).</div>
      <div class="step"><strong>Step 3:</strong> Compare numerators: \( 9 > 8 \).</div>
      <em>Conclusion: \( \frac{3}{4} \) is larger (see the bars above). ✓</em>
    </div>
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 4: Improper to mixed</h3><p>Write \( \frac{7}{2} \) as a mixed number.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Divide: \( 7 \div 2 = 3 \) remainder \( 1 \).</div>
      <div class="step"><strong>Step 2:</strong> Whole part is \( 3 \); the remainder over the divisor is \( \frac{1}{2} \).</div>
      <div class="step"><strong>Step 3 (check):</strong> \( 3 \times 2 + 1 = 7 \). ✓</div>
      <em>Conclusion: \( 3\frac{1}{2} \).</em>
    </div>
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 5: Fraction to decimal</h3><p>Write \( \frac{5}{8} \) as a decimal.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> A fraction means "divide": compute \( 5 \div 8 \).</div>
      <div class="step"><strong>Step 2:</strong> \( 5.000 \div 8 = 0.625 \).</div>
      <div class="step"><strong>Step 3 (check):</strong> \( 0.625 \times 8 = 5 \). ✓</div>
      <em>Conclusion: \( 0.625 \).</em>
    </div>
  </div>

  <h2>🟡 Practice Questions</h2>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 1</h3><p>Simplify \( \frac{12}{18} \).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">Divide both by 6. <em>Answer: \( \frac{2}{3} \).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 2</h3><p>Write \( \frac{2}{3} \) with denominator 9.</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">Multiply top and bottom by 3. <em>Answer: \( \frac{6}{9} \).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 3</h3><p>Which is larger, \( \frac{2}{3} \) or \( \frac{3}{4} \)?</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\( \frac{8}{12} \) vs \( \frac{9}{12} \). <em>Answer: \( \frac{3}{4} \).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 4</h3><p>How many \( \frac{1}{4} \) cups make \( \frac{3}{4} \) cup?</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\( \frac{3}{4} = \frac{1}{4}+\frac{1}{4}+\frac{1}{4} \). <em>Answer: 3.</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 5</h3><p>Order least to greatest: \( \frac{1}{2}, \frac{2}{3}, \frac{3}{5} \).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">Common denominator 30: \( \frac{15}{30}, \frac{20}{30}, \frac{18}{30} \). <em>Answer: \( \frac{1}{2}, \frac{3}{5}, \frac{2}{3} \).</em></div></div></details>
  </div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q1: How do I simplify a fraction?</h3><p><em>Divide the top and bottom by their greatest common factor.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q2: How do I compare two fractions?</h3><p><em>Rewrite them with a common denominator, then compare numerators.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q3: Where does the negative sign go?</h3><p><em>Top, bottom, or in front — \( -\frac{1}{2} = \frac{-1}{2} = \frac{1}{-2} \), all equal.</em></p></div>
</div>` },
    ],
    assignment: {
      title: "Assignment 1.6 — Working with Fractions",
      description: "Part A: Simplify 6/8, 12/18, 10/25. Part B: Write two fractions equivalent to 2/3. Part C: Order from least to greatest: 1/2, 2/3, 3/5. Part D: On a number line from -1 to 1, plot 3/4, -1/4, and -3/4.",
    },
    quizzes: [
      quiz("Easy", [
        mc("Which is a unit fraction?", ["$\\frac{2}{3}$", "$\\frac{1}{5}$", "$\\frac{3}{4}$"], 1),
        sa("Write $\\frac{1}{2}$ as an equivalent fraction with denominator 4.", ["2/4"]),
        mc("Which is larger, $\\frac{2}{3}$ or $\\frac{3}{4}$?", ["$\\frac{2}{3}$", "$\\frac{3}{4}$", "they are equal"], 1),
        tf("$\\frac{3}{4} = \\frac{1}{4} + \\frac{1}{4} + \\frac{1}{4}$.", true),
      ], EASY),
      quiz("Medium", [
        sa("Simplify $\\frac{6}{8}$.", ["3/4"]),
        mc("Which equals $-\\frac{2}{5}$?", ["$\\frac{-2}{5}$", "$\\frac{2}{-5}$", "both of these"], 2),
        num("How many $\\frac{1}{4}$ cups make $\\frac{3}{4}$ cup?", 3, 0),
        sa("Write a fraction equivalent to $\\frac{2}{3}$ with denominator 9.", ["6/9"]),
      ], MED),
      quiz("Hard", [
        mc("Which list is ordered least to greatest?", ["$\\frac{1}{2}, \\frac{3}{5}, \\frac{2}{3}$", "$\\frac{2}{3}, \\frac{1}{2}, \\frac{3}{5}$", "$\\frac{3}{5}, \\frac{1}{2}, \\frac{2}{3}$"], 0),
        num("What is $\\frac{5}{8}$ as a decimal?", 0.625, 0),
        mc("On a number line, where is $-\\frac{3}{4}$?", ["between 0 and 1", "between -1 and 0", "between -2 and -1"], 1),
        sa("Simplify $\\frac{12}{18}$.", ["2/3"]),
        mc("$\\frac{7}{2}$ as a mixed number is", ["$3\\frac{1}{2}$", "$2\\frac{1}{7}$", "$3\\frac{1}{3}$"], 0),
      ], HARD),
    ],
  },

  {
    code: "1.7", title: "Operations with Positive & Negative Fractions",
    blocks: [
      { id: bid(), type: "html", html: String.raw`<div class="lecture-box">
  <h1>🧮 Operations with Positive &amp; Negative Fractions</h1>
  <p><strong>Overview.</strong> Add, subtract, multiply, and divide fractions — with the integer sign rules still in force.</p>

  <h2>📌 Adding &amp; Subtracting</h2>
  <p>Find a <strong>common denominator</strong>, then add or subtract the numerators: \( \frac{1}{2} + \frac{1}{3} = \frac{3}{6} + \frac{2}{6} = \frac{5}{6} \).</p>

  <h2>📌 Multiplying</h2>
  <p>Multiply straight across — no common denominator needed: \( \frac{a}{b} \times \frac{c}{d} = \frac{ac}{bd} \). Example: \( \frac{2}{3} \times \frac{3}{4} = \frac{6}{12} = \frac{1}{2} \).</p>

  <h2>📌 Dividing</h2>
  <p>Multiply by the <strong>reciprocal</strong> (flip the second fraction): \( \frac{a}{b} \div \frac{c}{d} = \frac{a}{b} \times \frac{d}{c} \). And remember: a negative times a positive is negative; two negatives give a positive.</p>

  <h2>🔵 Examples</h2>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 1: Add with unlike denominators</h3><p>Evaluate \( \frac{1}{2} + \frac{1}{3} \).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Lowest common denominator of \( 2 \) and \( 3 \) is \( 6 \).</div>
      <div class="step"><strong>Step 2:</strong> Rewrite each: \( \frac{1}{2} = \frac{3}{6} \), \( \frac{1}{3} = \frac{2}{6} \).</div>
      <div class="step"><strong>Step 3:</strong> Add the numerators: \( \frac{3}{6} + \frac{2}{6} = \frac{5}{6} \).</div>
      <em>Conclusion: \( \frac{5}{6} \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 2: Subtract</h3><p>Evaluate \( \frac{5}{6} - \frac{1}{4} \).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Lowest common denominator of \( 6 \) and \( 4 \) is \( 12 \).</div>
      <div class="step"><strong>Step 2:</strong> Rewrite: \( \frac{5}{6} = \frac{10}{12} \), \( \frac{1}{4} = \frac{3}{12} \).</div>
      <div class="step"><strong>Step 3:</strong> Subtract: \( \frac{10}{12} - \frac{3}{12} = \frac{7}{12} \) (already simplified).</div>
      <em>Conclusion: \( \frac{7}{12} \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 3: Multiply</h3><p>Evaluate \( \frac{2}{3} \times \frac{3}{4} \).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Multiply straight across: \( \frac{2 \times 3}{3 \times 4} = \frac{6}{12} \).</div>
      <div class="step"><strong>Step 2:</strong> Simplify by the GCF \( 6 \): \( \frac{6}{12} = \frac{1}{2} \).</div>
      <div class="step"><strong>Tip:</strong> you could cancel the \( 3 \)'s first: \( \frac{2}{\cancel{3}} \times \frac{\cancel{3}}{4} = \frac{2}{4} = \frac{1}{2} \).</div>
      <em>Conclusion: \( \frac{1}{2} \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 4: Divide</h3><p>Evaluate \( \frac{3}{4} \div \frac{1}{2} \).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Dividing means multiply by the reciprocal: \( \frac{3}{4} \times \frac{2}{1} \).</div>
      <div class="step"><strong>Step 2:</strong> Across: \( \frac{3 \times 2}{4 \times 1} = \frac{6}{4} \).</div>
      <div class="step"><strong>Step 3:</strong> Simplify: \( \frac{6}{4} = \frac{3}{2} = 1\frac{1}{2} \).</div>
      <em>Conclusion: \( \frac{3}{2} \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 5: A negative product</h3><p>Evaluate \( -\frac{2}{3} \times \frac{3}{8} \).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Multiply the sizes across: \( \frac{2 \times 3}{3 \times 8} = \frac{6}{24} \).</div>
      <div class="step"><strong>Step 2:</strong> Simplify: \( \frac{6}{24} = \frac{1}{4} \).</div>
      <div class="step"><strong>Step 3:</strong> Different signs → the result is negative: \( -\frac{1}{4} \).</div>
      <em>Conclusion: \( -\frac{1}{4} \). ✓</em>
    </div>
  </div>

  <h2>🟡 Practice Questions</h2>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 1</h3><p>Evaluate \( \frac{1}{2} + \frac{1}{4} \).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\( \frac{2}{4}+\frac{1}{4} \). <em>Answer: \( \frac{3}{4} \).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 2</h3><p>Evaluate \( \frac{2}{3} \times \frac{1}{2} \).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">Across: \( \frac{2}{6} \). <em>Answer: \( \frac{1}{3} \).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 3</h3><p>Evaluate \( \frac{1}{2} \div \frac{3}{4} \).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">Flip: \( \frac{1}{2} \times \frac{4}{3} = \frac{4}{6} \). <em>Answer: \( \frac{2}{3} \).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 4</h3><p>Evaluate \( -\frac{1}{2} + \frac{1}{4} \).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\( -\frac{2}{4} + \frac{1}{4} \). <em>Answer: \( -\frac{1}{4} \).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 5</h3><p>Evaluate \( \left(\frac{2}{3}\right)^2 \).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">Square top and bottom: \( \frac{4}{9} \). <em>Answer: \( \frac{4}{9} \).</em></div></div></details>
  </div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q1: When do I need a common denominator?</h3><p><em>For adding and subtracting — not for multiplying or dividing.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q2: How do I divide by a fraction?</h3><p><em>Multiply by its reciprocal (flip the second fraction).</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q3: What about the signs?</h3><p><em>Same integer rules: \( (-)(-) = + \), \( (-)(+) = - \).</em></p></div>
</div>` },
    ],
    assignment: {
      title: "Assignment 1.7 — Fraction Operations",
      description: "Evaluate and simplify: (a) 1/2 + 1/3  (b) 5/6 - 1/4  (c) 2/3 × 3/8  (d) 3/4 ÷ 1/2  (e) -1/2 + 1/4. Then: a recipe needs 2 1/2 cups of flour but you triple it — how much flour total?",
    },
    quizzes: [
      quiz("Easy", [
        sa("Evaluate $\\frac{1}{2} + \\frac{1}{4}$.", ["3/4"]),
        sa("Evaluate $\\frac{2}{3} \\times \\frac{1}{2}$.", ["1/3", "2/6"]),
        sa("Evaluate $\\frac{3}{4} - \\frac{1}{4}$.", ["1/2", "2/4"]),
        tf("To divide by a fraction, multiply by its reciprocal.", true),
      ], EASY),
      quiz("Medium", [
        sa("Evaluate $\\frac{1}{2} + \\frac{1}{3}$.", ["5/6"]),
        sa("Evaluate $\\frac{3}{4} \\div \\frac{1}{2}$.", ["3/2", "6/4"]),
        sa("Evaluate $-\\frac{1}{2} + \\frac{1}{4}$.", ["-1/4"]),
        num("Evaluate $\\frac{2}{5} \\times 10$.", 4, 0),
      ], MED),
      quiz("Hard", [
        sa("Evaluate $\\frac{5}{6} - \\frac{1}{4}$.", ["7/12"]),
        sa("Evaluate $-\\frac{2}{3} \\times \\frac{3}{8}$.", ["-1/4"]),
        sa("Evaluate $\\frac{1}{2} \\div \\frac{3}{4}$.", ["2/3", "4/6"]),
        num("A barrel loses $\\frac{3}{4}$ L per minute. How many litres are lost in 8 minutes?", 6, 0),
        sa("Evaluate $\\left(\\frac{2}{3}\\right)^2$.", ["4/9"]),
      ], HARD),
    ],
  },

  {
    code: "1.8", title: "Ratios, Rates, Percentages & Proportions",
    blocks: [
      { id: bid(), type: "html", html: String.raw`<div class="lecture-box">
  <h1>📊 Ratios, Rates, Percentages &amp; Proportions</h1>
  <p><strong>Overview.</strong> Four closely-linked ideas for comparing quantities and solving real-world problems.</p>

  <h2>📌 Ratios &amp; Rates</h2>
  <p>A <strong>ratio</strong> compares quantities (\( 3:2 \)). A <strong>rate</strong> compares different units (km/h, \( \$ \)/kg). A <strong>unit rate</strong> is the amount per \( 1 \) (e.g. \( \$2.50 \) per litre).</p>

  <h2>📌 Proportions</h2>
  <p>A <strong>proportion</strong> sets two ratios equal: \( \frac{a}{b} = \frac{c}{d} \). Solve by cross-multiplying: \( \frac{3}{4} = \frac{x}{12} \Rightarrow 4x = 36 \Rightarrow x = 9 \).</p>

  <h2>📌 Percentages</h2>
  <p>Percent means "out of 100": \( 25\% = \frac{25}{100} = 0.25 \). To find \( 25\% \) of \( 80 \): \( 0.25 \times 80 = 20 \).</p>

  <div style="text-align:center;margin:16px 0;">
    <svg viewBox="0 0 380 96" style="max-width:100%;height:auto;" role="img" aria-label="Discount bar for a 40 dollar shirt at 25 percent off">
      <text x="30" y="18" font-size="12" fill="#475569">Original price: $40</text>
      <rect x="30" y="26" width="240" height="36" fill="#99f6e4" stroke="#0f766e" stroke-width="1.5"/>
      <rect x="270" y="26" width="80" height="36" fill="#fde68a" stroke="#b45309" stroke-width="1.5"/>
      <text x="150" y="49" font-size="13" fill="#0f766e" text-anchor="middle" font-weight="700">Pay $30 (75%)</text>
      <text x="310" y="49" font-size="11" fill="#b45309" text-anchor="middle" font-weight="700">Save $10</text>
      <text x="310" y="78" font-size="11" fill="#b45309" text-anchor="middle">25% off</text>
    </svg>
    <div style="font-size:13px;color:#64748b;margin-top:2px;">A \( 25\% \) discount removes \( \$10 \) of the \( \$40 \), leaving \( 75\% = \$30 \) to pay.</div>
  </div>

  <h2>🔵 Examples</h2>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 1: Percent of a number</h3><p>Find \( 25\% \) of \( 80 \).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Convert the percent to a decimal: \( 25\% = 0.25 \).</div>
      <div class="step"><strong>Step 2:</strong> "of" means multiply: \( 0.25 \times 80 = 20 \).</div>
      <div class="step"><strong>Step 3 (check):</strong> \( 25\% \) is one quarter, and a quarter of \( 80 \) is \( 20 \). ✓</div>
      <em>Conclusion: \( 20 \).</em>
    </div>
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 2: Solve a proportion</h3><p>Solve \( \frac{3}{4} = \frac{x}{12} \).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Cross-multiply: \( 3 \times 12 = 4 \times x \), so \( 36 = 4x \).</div>
      <div class="step"><strong>Step 2:</strong> Divide both sides by \( 4 \): \( x = 9 \).</div>
      <div class="step"><strong>Step 3 (check):</strong> \( \frac{9}{12} = \frac{3}{4} \). ✓</div>
      <em>Conclusion: \( x = 9 \).</em>
    </div>
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 3: Unit rate</h3><p>A car travels \( 150 \) km in \( 3 \) hours. Find the unit rate.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> A unit rate is the amount per \( 1 \) hour: divide distance by time, \( 150 \div 3 \).</div>
      <div class="step"><strong>Step 2:</strong> \( 150 \div 3 = 50 \).</div>
      <em>Conclusion: \( 50 \) km/h. ✓</em>
    </div>
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 4: A discount</h3><p>A \( \$40 \) shirt is \( 25\% \) off. What does it cost?</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Discount \( = 25\% \) of \( 40 = 0.25 \times 40 = \$10 \).</div>
      <div class="step"><strong>Step 2:</strong> Sale price \( = 40 - 10 = \$30 \).</div>
      <div class="step"><strong>Step 3 (shortcut check):</strong> you pay \( 75\% \): \( 0.75 \times 40 = \$30 \) (see the bar above). ✓</div>
      <em>Conclusion: \( \$30 \).</em>
    </div>
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 5: Price plus tax</h3><p>An \( \$80 \) item has \( 13\% \) tax. Find the total.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Tax \( = 0.13 \times 80 = \$10.40 \).</div>
      <div class="step"><strong>Step 2:</strong> Total \( = 80 + 10.40 = \$90.40 \).</div>
      <div class="step"><strong>Step 3 (shortcut check):</strong> multiply by \( 1.13 \): \( 1.13 \times 80 = \$90.40 \). ✓</div>
      <em>Conclusion: \( \$90.40 \).</em>
    </div>
  </div>

  <h2>🟡 Practice Questions</h2>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 1</h3><p>Find \( 20\% \) of \( 45 \).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\( 0.20 \times 45 \). <em>Answer: \( 9 \).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 2</h3><p>Solve \( \frac{5}{x} = \frac{2}{8} \).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">Cross-multiply: \( 2x = 40 \). <em>Answer: \( x = 20 \).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 3</h3><p>A car travels \( 240 \) km in \( 4 \) hours. Find the unit rate.</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\( 240 \div 4 \). <em>Answer: \( 60 \) km/h.</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 4</h3><p>Simplify the ratio \( 6:4 \).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">Divide both by 2. <em>Answer: \( 3:2 \).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 5</h3><p>A \( \$60 \) item is \( 15\% \) off. How many dollars do you save?</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\( 0.15 \times 60 \). <em>Answer: \( \$9 \).</em></div></div></details>
  </div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q1: What is a unit rate?</h3><p><em>A rate per single unit — e.g. price per 1 litre, or km per 1 hour.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q2: How do I solve a proportion?</h3><p><em>Cross-multiply, then solve for the unknown.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q3: How do I find a percent of a number?</h3><p><em>Convert the percent to a decimal and multiply: \( 25\% \) of \( 80 = 0.25 \times 80 \).</em></p></div>
</div>` },
    ],
    assignment: {
      title: "Assignment 1.8 — Ratios, Rates & Percent",
      description: "Part A: Solve 3/4 = x/12 and 5/x = 2/8. Part B: A car goes 240 km in 4 h — find the unit rate. Part C: Find 20% of 45, and the total cost of an $80 item with 13% tax. Part D: Which is the better deal — 20% off, or $20 off a $90 item? Explain.",
    },
    quizzes: [
      quiz("Easy", [
        num("What is $25\\%$ of $80$?", 20, 0),
        num("What is $10\\%$ of $50$?", 5, 0),
        mc("The ratio $6:4$ simplifies to", ["$3:2$", "$2:3$", "$6:4$"], 0),
        mc("$0.5$ written as a percent is", ["5%", "50%", "0.5%"], 1),
      ], EASY),
      quiz("Medium", [
        num("Solve the proportion $\\frac{3}{4} = \\frac{x}{12}$. What is $x$?", 9, 0),
        num("A car travels 150 km in 3 hours. What is the unit rate in km/h?", 50, 0),
        num("What is $20\\%$ of $45$?", 9, 0),
        num("A $\\$60$ item is 15% off. How many dollars do you save?", 9, 0),
      ], MED),
      quiz("Hard", [
        num("Solve $\\frac{5}{x} = \\frac{2}{8}$. What is $x$?", 20, 0),
        num("A shirt costs $\\$80$ plus 13% tax. What is the total cost (in dollars)?", 90.4, 0.01),
        num("If 3 kg of apples cost $\\$7.50$, what is the cost of 5 kg (in dollars)?", 12.5, 0),
        num("A population grows from 200 to 250. What is the percent increase?", 25, 0),
        mc("Which is larger: $12\\%$ or $\\frac{8}{50}$?", ["$12\\%$", "$\\frac{8}{50}$", "they are equal"], 1),
      ], HARD),
    ],
  },

  {
    code: "2.1", title: "From Words to Algebraic Expressions",
    quizzes: [],
    assignment: {
      title: "Assignment 2.1 — Writing Expressions",
      description: "Part A: Write an expression for each: (a) 8 more than n; (b) triple a number, minus 5; (c) the length is 4 times the width; (d) the sum of x and y, divided by 3. Part B: Evaluate 3x+7 when x=5, and 2(x+y)-1 when x=4, y=2. Part C: Find the nth-term expression for 5, 10, 15, 20, … and for 1, 4, 9, 16, …",
    },
    blocks: [{ id: bid(), type: "html", html: String.raw`<div class="lecture-box">
  <h1>✍️ From Words to Algebraic Expressions</h1>
  <p><strong>Overview.</strong> Algebra uses letters (<strong>variables</strong>) to stand for numbers. An <strong>expression</strong> combines numbers, variables, and operations — like \( 3x + 5 \). This lesson turns word descriptions and patterns into expressions.</p>

  <h2>📌 Variables, Coefficients &amp; Terms</h2>
  <p>A <strong>variable</strong> (e.g. \( x \)) represents a number that can change. A <strong>coefficient</strong> is the number multiplying a variable — in \( 3x \) the coefficient is \( 3 \). A <strong>term</strong> is a single number, variable, or product, like \( 3x \) or \( 5 \).</p>

  <h2>📌 Turning Words into Expressions</h2>
  <p>Watch the keywords for each operation:</p>
  <div style="overflow-x:auto;margin:10px 0;">
    <table style="border-collapse:collapse;width:100%;font-size:14px;">
      <thead>
        <tr style="background:#eef2ff;color:#3730a3;">
          <th style="border:1px solid #c7d2fe;padding:7px 12px;text-align:left;">Words</th>
          <th style="border:1px solid #c7d2fe;padding:7px 12px;">Operation</th>
          <th style="border:1px solid #c7d2fe;padding:7px 12px;text-align:left;">Example</th>
        </tr>
      </thead>
      <tbody>
        <tr><td style="border:1px solid #e2e8f0;padding:6px 12px;">sum, more than, increased by, plus</td><td style="border:1px solid #e2e8f0;padding:6px 12px;text-align:center;">\( + \)</td><td style="border:1px solid #e2e8f0;padding:6px 12px;">"5 more than \( n \)" → \( n + 5 \)</td></tr>
        <tr><td style="border:1px solid #e2e8f0;padding:6px 12px;">less than, difference, decreased by, minus</td><td style="border:1px solid #e2e8f0;padding:6px 12px;text-align:center;">\( - \)</td><td style="border:1px solid #e2e8f0;padding:6px 12px;">"3 less than \( n \)" → \( n - 3 \)</td></tr>
        <tr><td style="border:1px solid #e2e8f0;padding:6px 12px;">times, of, double, triple, product</td><td style="border:1px solid #e2e8f0;padding:6px 12px;text-align:center;">\( \times \)</td><td style="border:1px solid #e2e8f0;padding:6px 12px;">"double \( n \)" → \( 2n \)</td></tr>
        <tr><td style="border:1px solid #e2e8f0;padding:6px 12px;">per, divided by, quotient, ratio</td><td style="border:1px solid #e2e8f0;padding:6px 12px;text-align:center;">\( \div \)</td><td style="border:1px solid #e2e8f0;padding:6px 12px;">"\( n \) divided by 2" → \( \frac{n}{2} \)</td></tr>
      </tbody>
    </table>
  </div>
  <p>⚠️ <strong>Order matters with "less than":</strong> "3 less than a number" is \( n - 3 \), <em>not</em> \( 3 - n \).</p>

  <h2>📌 Generalizing Patterns</h2>
  <p>A pattern can be captured by an expression in the term number \( n \): \( 2, 4, 6, 8, \dots \) is \( 2n \); \( 1, 4, 9, 16, \dots \) is \( n^2 \).</p>

  <h2>🔵 Examples</h2>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 1: A phrase</h3><p>Write an expression for "5 more than a number \( n \)".</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> "more than" signals addition.</div>
      <div class="step"><strong>Step 2:</strong> Start with the number \( n \) and add \( 5 \): \( n + 5 \).</div>
      <em>Conclusion: \( n + 5 \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 2: Two operations</h3><p>"Double a number, then subtract 3."</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> "double" the number \( x \): \( 2x \).</div>
      <div class="step"><strong>Step 2:</strong> "then subtract 3": \( 2x - 3 \).</div>
      <div class="step"><strong>Watch the order:</strong> it is \( 2x - 3 \), not \( 3 - 2x \).</div>
      <em>Conclusion: \( 2x - 3 \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 3: A relationship</h3><p>The length is 3 times the width \( w \).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> "3 times the width" means \( 3 \times w = 3w \).</div>
      <div class="step"><strong>Step 2 (check):</strong> if \( w = 5 \), then \( l = 3(5) = 15 \). ✓</div>
      <em>Conclusion: \( l = 3w \).</em>
    </div>
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 4: A pattern</h3><p>Find the \( n \)th term of \( 2, 4, 6, 8, \dots \)</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> The terms go up by a constant \( 2 \), so the rule is a multiple of the position.</div>
      <div class="step"><strong>Step 2:</strong> Each term \( = 2 \times \) its position \( = 2n \).</div>
      <div class="step"><strong>Step 3 (check):</strong> position \( n = 3 \) gives \( 2(3) = 6 \). ✓</div>
      <em>Conclusion: \( 2n \).</em>
    </div>
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 5: A square pattern</h3><p>Find the \( n \)th term of \( 1, 4, 9, 16, \dots \)</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Recognize them as perfect squares: \( 1^2, 2^2, 3^2, 4^2 \).</div>
      <div class="step"><strong>Step 2:</strong> So the term at position \( n \) is \( n^2 \).</div>
      <div class="step"><strong>Step 3 (check):</strong> \( n = 4 \) gives \( 4^2 = 16 \). ✓</div>
      <em>Conclusion: \( n^2 \).</em>
    </div>
  </div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 1</h3><p>Write an expression for "7 less than \( x \)".</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \( x - 7 \).</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 2</h3><p>Write an expression for "the sum of \( a \) and \( b \), divided by 2".</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \( \frac{a+b}{2} \).</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 3</h3><p>Evaluate \( 3x + 5 \) when \( x = 4 \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 3(4)+5 = 12+5 \). <em>Answer: 17.</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 4</h3><p>Find the \( n \)th term of \( 3, 6, 9, 12, \dots \)</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \( 3n \).</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 5</h3><p>Write an expression for the perimeter of a rectangle with length \( l \) and width \( w \).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \( 2l + 2w \) (or \( 2(l+w) \)).</em></div></div></details></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q1: What is a variable?</h3><p><em>A letter that represents a number which can change.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q2: What is the coefficient in \( 7x \)?</h3><p><em>7 — the number multiplying the variable.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q3: Why generalize a pattern with an expression?</h3><p><em>So you can find any term instantly without listing them all.</em></p></div>
</div>` }],
  },

  {
    code: "2.2", title: "Equivalent Expressions",
    quizzes: [],
    assignment: {
      title: "Assignment 2.2 — Equivalent Expressions",
      description: "Part A: Expand: (a) 3(x+4); (b) 5(2x-3); (c) -2(x-4); (d) x(x+5). Part B: Are these equivalent? Justify by substituting x=2: (i) 2(x+3) and 2x+6; (ii) 2(x+3) and 2x+3. Part C: Write two different expressions equivalent to 4x+8.",
    },
    blocks: [{ id: bid(), type: "html", html: String.raw`<div class="lecture-box">
  <h1>🟰 Equivalent Expressions</h1>
  <p><strong>Overview.</strong> Two expressions are <strong>equivalent</strong> if they give the same value for <em>every</em> input. You can check by substituting numbers, by graphing, or by simplifying.</p>

  <h2>📌 Check by Substituting</h2>
  <p>Compare \( 2(x+3) \) and \( 2x+6 \) at \( x=5 \): \( 2(8)=16 \) and \( 2(5)+6=16 \) ✓ — and in fact they're always equal.</p>

  <h2>📌 Check by Simplifying (Distribute!)</h2>
  <p>Multiply the outside term by <strong>each</strong> term inside: \( a(b+c)=ab+ac \). So \( 2(x+3)=2x+6 \).</p>

  <div style="text-align:center;margin:16px 0;">
    <svg viewBox="0 0 330 150" style="max-width:100%;height:auto;" role="img" aria-label="Area model showing 2 times (x plus 3) equals 2x plus 6">
      <text x="125" y="22" font-size="14" fill="#475569" text-anchor="middle">\( x \)</text>
      <text x="245" y="22" font-size="14" fill="#475569" text-anchor="middle">3</text>
      <line x1="50" y1="28" x2="200" y2="28" stroke="#94a3b8"/><line x1="200" y1="28" x2="290" y2="28" stroke="#94a3b8"/>
      <text x="34" y="72" font-size="14" fill="#475569" text-anchor="middle">2</text>
      <rect x="50" y="34" width="150" height="72" fill="#bfdbfe" stroke="#2563eb" stroke-width="1.5"/>
      <rect x="200" y="34" width="90" height="72" fill="#99f6e4" stroke="#0f766e" stroke-width="1.5"/>
      <text x="125" y="76" font-size="16" fill="#1e3a8a" text-anchor="middle" font-weight="700">2x</text>
      <text x="245" y="76" font-size="16" fill="#0f766e" text-anchor="middle" font-weight="700">6</text>
    </svg>
    <div style="font-size:13px;color:#64748b;margin-top:2px;">A \( 2 \times (x+3) \) rectangle splits into \( 2\cdot x = 2x \) and \( 2\cdot 3 = 6 \), so \( 2(x+3) = 2x + 6 \).</div>
  </div>

  <h2>📌 A Common Trap</h2>
  <p>\( 2(x+3) \) is <strong>not</strong> \( 2x+3 \) — you must distribute to <em>both</em> terms, giving \( 2x+6 \). Equivalent expressions also produce the <em>same graph</em>.</p>

  <h2>🔵 Examples</h2>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 1: Distribute</h3><p>Is \( 2(x+3) \) equivalent to \( 2x+6 \)?</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Distribute the \( 2 \) to each term: \( 2\cdot x + 2\cdot 3 \).</div>
      <div class="step"><strong>Step 2:</strong> \( = 2x + 6 \).</div>
      <div class="step"><strong>Step 3 (check):</strong> at \( x = 5 \), \( 2(8) = 16 \) and \( 2(5)+6 = 16 \). ✓</div>
      <em>Conclusion: yes, equivalent.</em>
    </div>
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 2: The trap</h3><p>Is \( 2(x+3) \) equivalent to \( 2x+3 \)?</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Distribute correctly: \( 2(x+3) = 2x + 6 \).</div>
      <div class="step"><strong>Step 2:</strong> Compare: \( 2x + 6 \neq 2x + 3 \) (the constants differ).</div>
      <div class="step"><strong>Step 3 (check):</strong> at \( x = 0 \), \( 2(3) = 6 \) but \( 2(0)+3 = 3 \) — different. ✓</div>
      <em>Conclusion: NOT equivalent.</em>
    </div>
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 3: Multiply by a variable</h3><p>Is \( x(x-4) \) equivalent to \( x^2 - 4x \)?</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Distribute the \( x \): \( x\cdot x - x\cdot 4 \).</div>
      <div class="step"><strong>Step 2:</strong> \( = x^2 - 4x \).</div>
      <em>Conclusion: yes, equivalent. ✓</em>
    </div>
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 4: Substitution test</h3><p>Are \( 3x + 5x \) and \( 8x \) equivalent?</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Combine like terms: \( 3x + 5x = (3+5)x = 8x \).</div>
      <div class="step"><strong>Step 2 (check):</strong> at \( x = 2 \), \( 6 + 10 = 16 \) and \( 8(2) = 16 \). ✓</div>
      <em>Conclusion: yes — both simplify to \( 8x \).</em>
    </div>
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 5: Expand</h3><p>Expand \( 3(2x-5) \).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Distribute the \( 3 \): \( 3\cdot 2x - 3\cdot 5 \).</div>
      <div class="step"><strong>Step 2:</strong> \( = 6x - 15 \).</div>
      <em>Conclusion: \( 6x - 15 \). ✓</em>
    </div>
  </div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 1</h3><p>Which is equivalent to \( 5(x-2) \)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \( 5x - 10 \).</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 2</h3><p>Expand \( -2(x-4) \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( -2x + 8 \). <em>Answer: \( -2x + 8 \).</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 3</h3><p>True or False: \( x + x + x = 3x \).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: True.</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 4</h3><p>Which is equivalent to \( 4x + 8 \)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \( 4(x+2) \).</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 5</h3><p>Expand \( x(x+5) \).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \( x^2 + 5x \).</em></div></div></details></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q1: What does "equivalent" mean?</h3><p><em>Same value for every input.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q2: Why is \( 2(x+3) \neq 2x+3 \)?</h3><p><em>You must distribute the 2 to both terms → \( 2x+6 \).</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q3: Quickest equivalence check?</h3><p><em>Simplify both — if they reduce to the same thing, they're equivalent.</em></p></div>
</div>` }],
  },

  {
    code: "2.3", title: "Simplifying Expressions",
    quizzes: [],
    assignment: {
      title: "Assignment 2.3 — Simplifying",
      description: "Simplify: (a) 3x+5x; (b) 7y-2y; (c) 3x²+x-2x²; (d) 2(x+4)+3(x-1); (e) (2x+4y)-(x-y); (f) x(x+2)+3(x²+2x-5). State which property you used for each.",
    },
    blocks: [{ id: bid(), type: "html", html: String.raw`<div class="lecture-box">
  <h1>🧹 Simplifying Expressions</h1>
  <p><strong>Overview.</strong> Simplifying makes an expression as short as possible by combining <strong>like terms</strong> and using the <strong>distributive property</strong>.</p>

  <h2>📌 Collect Like Terms</h2>
  <p><strong>Like terms</strong> have the same variable part. Add their coefficients: \( 3x + 5x = 8x \) and \( 3x^2 + x - 2x^2 = x^2 + x \). You can <em>only</em> combine like terms — \( 3x \) and \( 3x^2 \) are not alike.</p>

  <h2>📌 The Distributive Property</h2>
  <p>Multiply the outside by each inside term: \( a(b+c)=ab+ac \). Example: \( 2(x+4)=2x+8 \).</p>

  <h2>📌 Combine Both</h2>
  <p>\( x(x+2) + 3(x^2 + 2x - 5) = x^2 + 2x + 3x^2 + 6x - 15 = 4x^2 + 8x - 15 \).</p>

  <h2>🔵 Examples</h2>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 1: Like terms</h3><p>Simplify \( 3x + 5x \).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Both are like terms (each has \( x \)), so add the coefficients: \( 3 + 5 = 8 \).</div>
      <div class="step"><strong>Step 2:</strong> Keep the variable: \( 8x \).</div>
      <em>Conclusion: \( 8x \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 2: Mixed degrees</h3><p>Simplify \( 3x^2 + x - 2x^2 \).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Group like terms: \( (3x^2 - 2x^2) + x \).</div>
      <div class="step"><strong>Step 2:</strong> \( 3x^2 - 2x^2 = x^2 \); the lone \( x \) has no partner.</div>
      <div class="step"><strong>Note:</strong> \( x^2 \) and \( x \) are <em>not</em> like terms, so we stop here.</div>
      <em>Conclusion: \( x^2 + x \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 3: Distribute</h3><p>Simplify \( 2(x+4) \).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Distribute the \( 2 \): \( 2\cdot x + 2\cdot 4 \).</div>
      <div class="step"><strong>Step 2:</strong> \( = 2x + 8 \).</div>
      <em>Conclusion: \( 2x + 8 \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 4: Distribute then collect</h3><p>Simplify \( 2(x+3) + 3(x-1) \).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Distribute each bracket: \( 2x + 6 + 3x - 3 \).</div>
      <div class="step"><strong>Step 2:</strong> Group like terms: \( (2x + 3x) + (6 - 3) \).</div>
      <div class="step"><strong>Step 3:</strong> \( = 5x + 3 \).</div>
      <em>Conclusion: \( 5x + 3 \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 5: Full combine</h3><p>Simplify \( x(x+2) + 3(x^2 + 2x - 5) \).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Distribute both: \( x^2 + 2x + 3x^2 + 6x - 15 \).</div>
      <div class="step"><strong>Step 2:</strong> Group like terms: \( (x^2 + 3x^2) + (2x + 6x) - 15 \).</div>
      <div class="step"><strong>Step 3:</strong> \( = 4x^2 + 8x - 15 \).</div>
      <em>Conclusion: \( 4x^2 + 8x - 15 \). ✓</em>
    </div>
  </div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 1</h3><p>Simplify \( 7y - 2y \).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \( 5y \).</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 2</h3><p>Expand \( 5(2x-3) \).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \( 10x - 15 \).</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 3</h3><p>Simplify \( 4x + 3 + 2x - 1 \).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \( 6x + 2 \).</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 4</h3><p>Simplify \( (2x + 4y) - (x - y) \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 2x+4y-x+y \). <em>Answer: \( x + 5y \).</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 5</h3><p>Expand \( x(x+2) \).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \( x^2 + 2x \).</em></div></div></details></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q1: What are like terms?</h3><p><em>Terms with the same variable part, e.g. \( 3x \) and \( 5x \).</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q2: Can I combine \( 3x \) and \( 3x^2 \)?</h3><p><em>No — different variable parts.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q3: What does the distributive property do?</h3><p><em>Multiplies the outside term by each term inside the brackets.</em></p></div>
</div>` }],
  },

  {
    code: "2.4", title: "Creating & Solving Equations",
    quizzes: [],
    assignment: {
      title: "Assignment 2.4 — Solving Equations",
      description: "Solve and check: (a) x+7=12; (b) 3x=21; (c) 2x+3=11; (d) 3(x+1)=18; (e) 4x-5=2x+7; (f) x/3+2=5. Then translate and solve: 'A number tripled, plus 4, is 19.'",
    },
    blocks: [{ id: bid(), type: "html", html: String.raw`<div class="lecture-box">
  <h1>⚖️ Creating &amp; Solving Equations</h1>
  <p><strong>Overview.</strong> An <strong>equation</strong> says two expressions are equal. <strong>Solving</strong> means finding the value of the variable that makes it true. Golden rule: whatever you do to one side, do to the other.</p>

  <h2>📌 Steps to Solve</h2>
  <p><strong>1.</strong> Simplify each side. <strong>2.</strong> Move variable terms to one side, numbers to the other. <strong>3.</strong> Divide to isolate the variable. <strong>4.</strong> Check by substituting.</p>
  <p>\( 3x + 5 = 20 \Rightarrow 3x = 15 \Rightarrow x = 5 \). Check: \( 3(5)+5 = 20 \) ✓.</p>

  <div style="text-align:center;margin:16px 0;">
    <svg viewBox="0 0 320 170" style="max-width:100%;height:auto;" role="img" aria-label="Balance scale: 3x plus 5 equals 20">
      <line x1="60" y1="70" x2="260" y2="70" stroke="#475569" stroke-width="3"/>
      <line x1="160" y1="70" x2="160" y2="120" stroke="#475569" stroke-width="3"/>
      <polygon points="160,118 142,150 178,150" fill="#94a3b8"/>
      <line x1="160" y1="150" x2="120" y2="150" stroke="#475569" stroke-width="2"/><line x1="160" y1="150" x2="200" y2="150" stroke="#475569" stroke-width="2"/>
      <!-- left pan -->
      <line x1="95" y1="70" x2="95" y2="96" stroke="#94a3b8"/>
      <path d="M 68 96 A 27 14 0 0 0 122 96 Z" fill="#bfdbfe" stroke="#2563eb" stroke-width="1.5"/>
      <text x="95" y="60" font-size="15" fill="#1e3a8a" text-anchor="middle" font-weight="700">3x + 5</text>
      <!-- right pan -->
      <line x1="225" y1="70" x2="225" y2="96" stroke="#94a3b8"/>
      <path d="M 198 96 A 27 14 0 0 0 252 96 Z" fill="#99f6e4" stroke="#0f766e" stroke-width="1.5"/>
      <text x="225" y="60" font-size="15" fill="#0f766e" text-anchor="middle" font-weight="700">20</text>
    </svg>
    <div style="font-size:13px;color:#64748b;margin-top:2px;">An equation is a balance: \( 3x + 5 = 20 \). To keep it level, do the <strong>same</strong> to both sides.</div>
  </div>

  <h2>📌 From Words to Equations</h2>
  <p>"A number tripled, plus 4, is 19" → \( 3x + 4 = 19 \Rightarrow 3x = 15 \Rightarrow x = 5 \).</p>

  <h2>🔵 Examples</h2>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 1: One step</h3><p>Solve \( x + 7 = 12 \).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Subtract \( 7 \) from both sides: \( x + 7 - 7 = 12 - 7 \).</div>
      <div class="step"><strong>Step 2:</strong> \( x = 5 \).</div>
      <div class="step"><strong>Step 3 (check):</strong> \( 5 + 7 = 12 \). ✓</div>
      <em>Conclusion: \( x = 5 \).</em>
    </div>
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 2: Divide</h3><p>Solve \( 3x = 21 \).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Divide both sides by \( 3 \): \( \frac{3x}{3} = \frac{21}{3} \).</div>
      <div class="step"><strong>Step 2:</strong> \( x = 7 \).</div>
      <div class="step"><strong>Step 3 (check):</strong> \( 3(7) = 21 \). ✓</div>
      <em>Conclusion: \( x = 7 \).</em>
    </div>
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 3: Two steps</h3><p>Solve \( 2x + 3 = 11 \).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Subtract \( 3 \) from both sides: \( 2x = 8 \).</div>
      <div class="step"><strong>Step 2:</strong> Divide both sides by \( 2 \): \( x = 4 \).</div>
      <div class="step"><strong>Step 3 (check):</strong> \( 2(4) + 3 = 11 \). ✓</div>
      <em>Conclusion: \( x = 4 \).</em>
    </div>
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 4: Brackets</h3><p>Solve \( 3(x+1) = 18 \).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Distribute: \( 3x + 3 = 18 \).</div>
      <div class="step"><strong>Step 2:</strong> Subtract \( 3 \): \( 3x = 15 \).</div>
      <div class="step"><strong>Step 3:</strong> Divide by \( 3 \): \( x = 5 \).</div>
      <div class="step"><strong>Step 4 (check):</strong> \( 3(5+1) = 3(6) = 18 \). ✓</div>
      <em>Conclusion: \( x = 5 \).</em>
    </div>
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 5: Variables on both sides</h3><p>Solve \( 4x - 5 = 2x + 7 \).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Subtract \( 2x \) from both sides: \( 2x - 5 = 7 \).</div>
      <div class="step"><strong>Step 2:</strong> Add \( 5 \) to both sides: \( 2x = 12 \).</div>
      <div class="step"><strong>Step 3:</strong> Divide by \( 2 \): \( x = 6 \).</div>
      <div class="step"><strong>Step 4 (check):</strong> \( 4(6) - 5 = 19 \) and \( 2(6) + 7 = 19 \). ✓</div>
      <em>Conclusion: \( x = 6 \).</em>
    </div>
  </div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 1</h3><p>Solve \( x - 4 = 10 \).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \( x = 14 \).</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 2</h3><p>Solve \( 5x - 2 = 18 \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 5x = 20 \). <em>Answer: \( x = 4 \).</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 3</h3><p>Solve \( 2(x - 3) = x + 4 \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 2x - 6 = x + 4 \Rightarrow x = 10 \). <em>Answer: \( x = 10 \).</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 4</h3><p>Solve \( \frac{x}{3} + 2 = 5 \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( \frac{x}{3} = 3 \). <em>Answer: \( x = 9 \).</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 5</h3><p>"A number tripled, plus 4, is 19." Find the number.</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 3x + 4 = 19 \Rightarrow 3x = 15 \). <em>Answer: 5.</em></div></div></details></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q1: What is the golden rule?</h3><p><em>Whatever you do to one side of the equation, do to the other.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q2: How do I check a solution?</h3><p><em>Substitute it back into the original equation — both sides should match.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q3: How do I handle brackets?</h3><p><em>Distribute first, then solve as usual.</em></p></div>
</div>` }],
  },

  {
    code: "3.1", title: "Coding Algebraic Concepts",
    quizzes: [],
    assignment: { title: "Assignment 3.1 — Variables in Code", description: "Part A: Write pseudocode that stores a length and width, computes the area, and outputs it. Part B: Identify every variable in your code, and which ones are inputs (parameters). Part C: Predict the output of: set x to 6; set y to x + 4; set y to y * 2; output y." },
    blocks: [{ id: bid(), type: "html", html: String.raw`<div class="lecture-box">
  <h1>💻 Coding Algebraic Concepts</h1>
  <p><strong>Overview.</strong> Code uses <strong>variables</strong> — just like algebra — to store values and compute with them. Learning to read and write simple pseudocode helps you express and explore math.</p>

  <h2>📌 Variables Store Values</h2>
  <p>A variable holds a value you can use later. Assigning a value:</p>
  <pre style="background:#0f172a;color:#e2e8f0;padding:12px 14px;border-radius:8px;font-family:'JetBrains Mono',monospace;font-size:14px;overflow:auto;">set x to 5
output x        → 5</pre>

  <h2>📌 Variables in Expressions</h2>
  <p>Combine variables with operations — like an algebraic formula \( A = l \times w \):</p>
  <pre style="background:#0f172a;color:#e2e8f0;padding:12px 14px;border-radius:8px;font-family:'JetBrains Mono',monospace;font-size:14px;overflow:auto;">set length to 8
set width  to 3
set area to length * width
output area     → 24</pre>

  <h2>📌 Parameters</h2>
  <p>A <strong>parameter</strong> is an input that changes the result. In a process <code>area(l, w)</code> that returns \( l \times w \), the values \( l \) and \( w \) are parameters — change them and the output changes.</p>

  <h2>📌 Tracing Code</h2>
  <p>To predict output, <strong>trace</strong> the program line by line, writing each variable's value as it changes. Read the right-hand side first, then store the result on the left.</p>

  <h2>🔵 Examples</h2>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 1: Predict the output</h3><p><code>set x to 5; set y to x + 3; output y.</code></p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> <code>set x to 5</code> → \( x = 5 \).</div>
      <div class="step"><strong>Step 2:</strong> <code>set y to x + 3</code> → \( y = 5 + 3 = 8 \).</div>
      <div class="step"><strong>Step 3:</strong> <code>output y</code> prints \( 8 \).</div>
      <em>Conclusion: 8. ✓</em>
    </div>
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 2: A formula</h3><p><code>set a to 4; set b to a * a; output b.</code></p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \( a = 4 \).</div>
      <div class="step"><strong>Step 2:</strong> \( b = a \times a = 4 \times 4 = 16 \).</div>
      <em>Conclusion: 16. ✓</em>
    </div>
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 3: Reassignment</h3><p><code>set x to 10; set x to x - 4; output x.</code></p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \( x = 10 \).</div>
      <div class="step"><strong>Step 2:</strong> <code>set x to x - 4</code> uses the <em>old</em> \( x \): \( 10 - 4 = 6 \), then stores \( 6 \) back into \( x \).</div>
      <em>Conclusion: 6. ✓ (a variable can be updated using its own current value)</em>
    </div>
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 4: Using a parameter</h3><p>A process <code>double(n)</code> returns \( 2 \times n \). What is <code>double(7)</code>?</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Substitute the parameter \( n = 7 \).</div>
      <div class="step"><strong>Step 2:</strong> \( 2 \times 7 = 14 \).</div>
      <em>Conclusion: 14. ✓</em>
    </div>
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 5: Trace with a table</h3><p><code>set p to 3; set q to p + 5; set r to p * q; output r.</code></p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Build a trace table, updating one variable per line:</div>
      <table style="border-collapse:collapse;font-size:13px;margin:6px 0;">
        <thead><tr style="background:#eef2ff;color:#3730a3;"><th style="border:1px solid #c7d2fe;padding:4px 12px;">line</th><th style="border:1px solid #c7d2fe;padding:4px 12px;">p</th><th style="border:1px solid #c7d2fe;padding:4px 12px;">q</th><th style="border:1px solid #c7d2fe;padding:4px 12px;">r</th></tr></thead>
        <tbody>
          <tr><td style="border:1px solid #e2e8f0;padding:4px 12px;">set p to 3</td><td style="border:1px solid #e2e8f0;padding:4px 12px;text-align:center;">3</td><td style="border:1px solid #e2e8f0;padding:4px 12px;text-align:center;">—</td><td style="border:1px solid #e2e8f0;padding:4px 12px;text-align:center;">—</td></tr>
          <tr><td style="border:1px solid #e2e8f0;padding:4px 12px;">set q to p + 5</td><td style="border:1px solid #e2e8f0;padding:4px 12px;text-align:center;">3</td><td style="border:1px solid #e2e8f0;padding:4px 12px;text-align:center;">8</td><td style="border:1px solid #e2e8f0;padding:4px 12px;text-align:center;">—</td></tr>
          <tr><td style="border:1px solid #e2e8f0;padding:4px 12px;">set r to p * q</td><td style="border:1px solid #e2e8f0;padding:4px 12px;text-align:center;">3</td><td style="border:1px solid #e2e8f0;padding:4px 12px;text-align:center;">8</td><td style="border:1px solid #e2e8f0;padding:4px 12px;text-align:center;">24</td></tr>
        </tbody>
      </table>
      <div class="step"><strong>Step 2:</strong> <code>output r</code> prints the final \( r = 24 \).</div>
      <em>Conclusion: 24. ✓</em>
    </div>
  </div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 1</h3><p><code>set x to 7; set y to x + 2; output y.</code> What is y?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: 9.</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 2</h3><p><code>set a to 5; set b to a * 3; output b.</code> What is b?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: 15.</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 3</h3><p>A process <code>triple(n)</code> returns \( 3 \times n \). What is <code>triple(6)</code>?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: 18.</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 4</h3><p><code>set x to 20; set x to x / 4; output x.</code> What is x?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: 5.</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 5</h3><p>In <code>perimeter(l, w)</code> returning \( 2(l+w) \), what are the parameters?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: l and w.</em></div></div></details></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q1: What does a variable do?</h3><p><em>Stores a value you can use or change later.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q2: What is a parameter?</h3><p><em>An input to a process that changes its result.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q3: How is code like algebra?</h3><p><em>Both use letters/variables to represent and compute with values.</em></p></div>
</div>` }],
  },

  {
    code: "3.2", title: "Building Code from Steps",
    quizzes: [],
    assignment: { title: "Assignment 3.2 — Build the Steps", description: "Part A: Write step-by-step pseudocode (using a loop) to add the numbers 1 to 10 and output the total. Part B: Add an if-statement that outputs \"big\" when the total is greater than 50. Part C: Predict the output of: set s to 0; for i from 1 to 4: set s to s + i; output s." },
    blocks: [{ id: bid(), type: "html", html: String.raw`<div class="lecture-box">
  <h1>🧩 Building Code from Steps</h1>
  <p><strong>Overview.</strong> Break a problem into ordered <strong>steps</strong>. Three building blocks: <strong>sequence</strong> (do steps in order), <strong>loops</strong> (repeat), and <strong>conditionals</strong> (decide).</p>

  <h2>📌 Sequence</h2>
  <p>Steps run top to bottom: read inputs, compute, output. Order matters.</p>

  <h2>📌 Loops (Repeat)</h2>
  <pre style="background:#0f172a;color:#e2e8f0;padding:12px 14px;border-radius:8px;font-family:'JetBrains Mono',monospace;font-size:14px;overflow:auto;">set sum to 0
for i from 1 to 5:
    set sum to sum + i
output sum      → 15</pre>

  <h2>📌 Conditionals (If / Else)</h2>
  <pre style="background:#0f172a;color:#e2e8f0;padding:12px 14px;border-radius:8px;font-family:'JetBrains Mono',monospace;font-size:14px;overflow:auto;">if mark >= 50:
    output "Pass"
else:
    output "Fail"</pre>

  <div style="text-align:center;margin:16px 0;">
    <svg viewBox="0 0 340 255" style="max-width:100%;height:auto;" role="img" aria-label="Flowchart of an if-else decision">
      <defs><marker id="ar32" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#475569"/></marker></defs>
      <rect x="130" y="8" width="80" height="30" rx="15" fill="#f1f5f9" stroke="#475569" stroke-width="1.5"/>
      <text x="170" y="28" font-size="13" text-anchor="middle" fill="#334155">Start</text>
      <polygon points="170,66 216,96 170,126 124,96" fill="#fef3c7" stroke="#b45309" stroke-width="1.5"/>
      <text x="170" y="100" font-size="12" text-anchor="middle" fill="#92400e">mark ≥ 50?</text>
      <rect x="238" y="150" width="90" height="34" rx="6" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
      <text x="283" y="171" font-size="12" text-anchor="middle" fill="#166534">output "Pass"</text>
      <rect x="12" y="150" width="90" height="34" rx="6" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
      <text x="57" y="171" font-size="12" text-anchor="middle" fill="#991b1b">output "Fail"</text>
      <rect x="130" y="216" width="80" height="30" rx="15" fill="#f1f5f9" stroke="#475569" stroke-width="1.5"/>
      <text x="170" y="236" font-size="13" text-anchor="middle" fill="#334155">End</text>
      <line x1="170" y1="38" x2="170" y2="64" stroke="#475569" stroke-width="1.5" marker-end="url(#ar32)"/>
      <polyline points="216,96 283,96 283,148" fill="none" stroke="#475569" stroke-width="1.5" marker-end="url(#ar32)"/>
      <polyline points="124,96 57,96 57,148" fill="none" stroke="#475569" stroke-width="1.5" marker-end="url(#ar32)"/>
      <polyline points="283,184 283,231 212,231" fill="none" stroke="#475569" stroke-width="1.5" marker-end="url(#ar32)"/>
      <polyline points="57,184 57,231 128,231" fill="none" stroke="#475569" stroke-width="1.5" marker-end="url(#ar32)"/>
      <text x="240" y="90" font-size="11" fill="#16a34a" font-weight="700">Yes</text>
      <text x="86" y="90" font-size="11" fill="#dc2626" font-weight="700" text-anchor="end">No</text>
    </svg>
    <div style="font-size:13px;color:#64748b;margin-top:2px;">A conditional <em>decides</em>: the test <code>mark ≥ 50</code> sends the program down the <strong>Yes</strong> or <strong>No</strong> branch.</div>
  </div>

  <h2>🔵 Examples</h2>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 1: A loop sum</h3><p><code>set s to 0; for i from 1 to 4: set s to s + i; output s.</code></p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Start with \( s = 0 \).</div>
      <div class="step"><strong>Step 2:</strong> Each pass adds \( i \): \( i=1 \Rightarrow s=1 \); \( i=2 \Rightarrow s=3 \); \( i=3 \Rightarrow s=6 \); \( i=4 \Rightarrow s=10 \).</div>
      <em>Conclusion: 10. ✓</em>
    </div>
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 2: Repeated doubling</h3><p><code>set x to 1; repeat 3 times: set x to x * 2; output x.</code></p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Start with \( x = 1 \).</div>
      <div class="step"><strong>Step 2:</strong> Double three times: \( 1 \to 2 \to 4 \to 8 \).</div>
      <em>Conclusion: 8. ✓</em>
    </div>
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 3: A conditional</h3><p><code>set mark to 72; if mark >= 50 output "Pass" else output "Fail".</code></p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Evaluate the test: \( 72 \ge 50 \) is <em>true</em>.</div>
      <div class="step"><strong>Step 2:</strong> The "Yes" branch runs → output "Pass" (follow the flowchart above).</div>
      <em>Conclusion: "Pass". ✓</em>
    </div>
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 4: Ordering steps</h3><p>To find a rectangle's area, which step is FIRST?</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> You can't compute with values you don't have yet, so <em>read the inputs first</em>.</div>
      <div class="step"><strong>Step 2:</strong> Then compute: \( \text{area} = \text{length} \times \text{width} \).</div>
      <div class="step"><strong>Step 3:</strong> Finally, output the area.</div>
      <em>Conclusion: read length &amp; width → multiply → output. ✓</em>
    </div>
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 5: Counting</h3><p><code>for i from 1 to n: output i.</code> How many numbers are printed?</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> The loop runs once for each value \( i = 1, 2, \dots, n \).</div>
      <div class="step"><strong>Step 2:</strong> That is \( n \) passes, each printing one number.</div>
      <em>Conclusion: \( n \) numbers. ✓</em>
    </div>
  </div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 1</h3><p><code>set s to 0; for i from 1 to 5: set s to s + i; output s.</code> What is s?</p><details><summary>View answer</summary><div class="solution"><div class="step">1+2+3+4+5. <em>Answer: 15.</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 2</h3><p><code>set x to 1; repeat 4 times: set x to x * 2; output x.</code> What is x?</p><details><summary>View answer</summary><div class="solution"><div class="step">1→2→4→8→16. <em>Answer: 16.</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 3</h3><p><code>set mark to 40; if mark >= 50 output "Pass" else output "Fail".</code> Output?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: "Fail".</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 4</h3><p>Which runs repeatedly: a sequence, a loop, or a conditional?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: a loop.</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 5</h3><p><code>set s to 0; for i from 1 to 3: set s to s + 2; output s.</code> What is s?</p><details><summary>View answer</summary><div class="solution"><div class="step">2+2+2. <em>Answer: 6.</em></div></div></details></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q1: What is a loop for?</h3><p><em>Repeating steps without rewriting them.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q2: What does a conditional do?</h3><p><em>Chooses what to do based on whether something is true.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q3: Why does step order matter?</h3><p><em>You can't use a value before it has been set.</em></p></div>
</div>` }],
  },

  {
    code: "3.3", title: "Reading, Predicting & Altering Code",
    quizzes: [],
    assignment: { title: "Assignment 3.3 — Trace & Alter", description: "Part A: Trace this code and give the output: set x to 2; repeat 4 times: set x to x * 2; output x. Part B: Change the repeat count from 4 to 5 and state the new output. Part C: Explain in one sentence what changing a parameter does to the result." },
    blocks: [{ id: bid(), type: "html", html: String.raw`<div class="lecture-box">
  <h1>🔎 Reading, Predicting &amp; Altering Code</h1>
  <p><strong>Overview.</strong> To predict what code does, <strong>trace</strong> it line by line, tracking each variable. To change the result, <strong>alter</strong> a value or constraint.</p>

  <h2>📌 Tracing</h2>
  <p>Follow each step, writing down the current value of every variable:</p>
  <pre style="background:#0f172a;color:#e2e8f0;padding:12px 14px;border-radius:8px;font-family:'JetBrains Mono',monospace;font-size:14px;overflow:auto;">set a to 3      (a = 3)
set b to 4      (b = 4)
set c to a + b  (c = 7)
output c        → 7</pre>

  <h2>📌 Altering</h2>
  <p>Change a parameter and the output changes. In a loop <code>for i from 1 to n</code>, increasing \( n \) makes it run more times.</p>

  <h2>🔵 Examples</h2>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 1: Trace</h3><p><code>set a to 3; set b to 4; set c to a * b; output c.</code></p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \( a = 3 \), \( b = 4 \).</div>
      <div class="step"><strong>Step 2:</strong> \( c = a \times b = 3 \times 4 = 12 \).</div>
      <em>Conclusion: 12. ✓</em>
    </div>
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 2: Doubling loop (with a trace table)</h3><p><code>set x to 2; repeat 4 times: set x to x * 2; output x.</code></p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Trace each repeat, doubling \( x \):</div>
      <table style="border-collapse:collapse;font-size:13px;margin:6px 0;">
        <thead><tr style="background:#eef2ff;color:#3730a3;"><th style="border:1px solid #c7d2fe;padding:4px 12px;">pass</th><th style="border:1px solid #c7d2fe;padding:4px 12px;">start</th><th style="border:1px solid #c7d2fe;padding:4px 12px;">x after ×2</th></tr></thead>
        <tbody>
          <tr><td style="border:1px solid #e2e8f0;padding:4px 12px;text-align:center;">1</td><td style="border:1px solid #e2e8f0;padding:4px 12px;text-align:center;">2</td><td style="border:1px solid #e2e8f0;padding:4px 12px;text-align:center;">4</td></tr>
          <tr><td style="border:1px solid #e2e8f0;padding:4px 12px;text-align:center;">2</td><td style="border:1px solid #e2e8f0;padding:4px 12px;text-align:center;">4</td><td style="border:1px solid #e2e8f0;padding:4px 12px;text-align:center;">8</td></tr>
          <tr><td style="border:1px solid #e2e8f0;padding:4px 12px;text-align:center;">3</td><td style="border:1px solid #e2e8f0;padding:4px 12px;text-align:center;">8</td><td style="border:1px solid #e2e8f0;padding:4px 12px;text-align:center;">16</td></tr>
          <tr><td style="border:1px solid #e2e8f0;padding:4px 12px;text-align:center;">4</td><td style="border:1px solid #e2e8f0;padding:4px 12px;text-align:center;">16</td><td style="border:1px solid #e2e8f0;padding:4px 12px;text-align:center;">32</td></tr>
        </tbody>
      </table>
      <em>Conclusion: 32. ✓</em>
    </div>
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 3: Alter the loop</h3><p>In Example 2, change <code>repeat 4 times</code> to <code>repeat 5 times</code>. New output?</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Everything is the same up to \( x = 32 \) after pass 4.</div>
      <div class="step"><strong>Step 2:</strong> One extra pass doubles again: \( 32 \times 2 = 64 \).</div>
      <em>Conclusion: 64. ✓ (raising the loop count raises the output)</em>
    </div>
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 4: Sum loop</h3><p><code>set s to 0; for i from 1 to 5: set s to s + i; output s.</code></p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Start \( s = 0 \).</div>
      <div class="step"><strong>Step 2:</strong> Add each \( i \): \( 0+1+2+3+4+5 = 15 \).</div>
      <em>Conclusion: 15. ✓</em>
    </div>
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 5: Alter a value</h3><p><code>set p to 5; set total to p * 3; output total.</code> Change \( p \) to \( 8 \) — new output?</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> The rule is \( \text{total} = p \times 3 \); now \( p = 8 \).</div>
      <div class="step"><strong>Step 2:</strong> \( 8 \times 3 = 24 \).</div>
      <em>Conclusion: 24. ✓</em>
    </div>
  </div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 1</h3><p><code>set a to 6; set b to 2; set c to a - b; output c.</code> What is c?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: 4.</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 2</h3><p><code>set x to 3; repeat 3 times: set x to x * 2; output x.</code> What is x?</p><details><summary>View answer</summary><div class="solution"><div class="step">3→6→12→24. <em>Answer: 24.</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 3</h3><p><code>set s to 0; for i from 1 to 6: set s to s + i; output s.</code> What is s?</p><details><summary>View answer</summary><div class="solution"><div class="step">1+…+6. <em>Answer: 21.</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 4</h3><p><code>set p to 4; set total to p * 5; output total.</code> Now change \( p \) to \( 10 \). New output?</p><details><summary>View answer</summary><div class="solution"><div class="step">10 × 5. <em>Answer: 50.</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 5</h3><p><code>set x to 100; repeat 2 times: set x to x / 2; output x.</code> What is x?</p><details><summary>View answer</summary><div class="solution"><div class="step">100→50→25. <em>Answer: 25.</em></div></div></details></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q1: How do I predict code output?</h3><p><em>Trace it line by line, tracking each variable's value.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q2: What happens if I increase a loop's count?</h3><p><em>It repeats more times, changing the result.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q3: Why alter code?</h3><p><em>To test "what if" and see how the output responds.</em></p></div>
</div>` }],
  },

  {
    code: "4.1", title: "Linear vs Non-Linear Relations", quizzes: [],
    blocks: [
      { id: bid(), type: "html", html: String.raw`<div class="lecture-box">
  <h1>📈 Linear vs Non-Linear Relations</h1>
  <p><strong>Overview.</strong> A relation is <strong>linear</strong> if its graph is a straight line and it changes at a <strong>constant rate</strong>. Otherwise it is <strong>non-linear</strong>.</p>
  <h2>📌 Constant Rate of Change</h2>
  <p>In a table, a linear relation goes up (or down) by the same amount each step. That step size is the <strong>rate of change</strong> — the <em>slope</em>. For \( y = 3x + 2 \), the rate of change is \( 3 \).</p>
  <h2>📌 Spotting It on a Graph</h2>
  <p>Straight line → linear. A curve (like \( y = x^2 \)) → non-linear. Explore both on the graph below the lesson.</p>
  <h2>🔵 Examples</h2>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 1</h3><p>Is \( y = 2x + 1 \) linear?</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> The variable \( x \) is to the first power, in the form \( y = mx + b \).</div>
      <div class="step"><strong>Step 2:</strong> So its graph is a straight line with a constant rate of change (\( 2 \)).</div>
      <em>Conclusion: linear. ✓</em>${gframe(["y = 2*x + 1"], { title: "y = 2x + 1: a straight line — this relation is linear" })}
    </div>
  </div>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 2</h3><p>Is \( y = x^2 \) linear?</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Here \( x \) is squared (degree 2).</div>
      <div class="step"><strong>Step 2:</strong> Its graph curves (a parabola) and the rate of change is not constant.</div>
      <em>Conclusion: non-linear. ✓</em>${gframe(["y = x^2"], { title: "y = x²: a curve (parabola) — non-linear" })}
    </div>
  </div>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 3</h3><p>Table \( x:0,1,2,3 \), \( y:5,8,11,14 \) — linear?</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Find the first differences in \( y \): \( 8-5=3 \), \( 11-8=3 \), \( 14-11=3 \).</div>
      <div class="step"><strong>Step 2:</strong> The difference is constant (\( +3 \)), so the relation is linear.</div>
      <em>Conclusion: linear, rate of change \( = 3 \). ✓</em>${gframe(["y = 3*x + 5"], { title: "the table points lie on the straight line y = 3x + 5 — linear, slope 3" })}
    </div>
  </div>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 4</h3><p>State the rate of change of \( y = -4x + 7 \).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> In \( y = mx + b \), the rate of change is \( m \) — the coefficient of \( x \).</div>
      <div class="step"><strong>Step 2:</strong> Here \( m = -4 \).</div>
      <em>Conclusion: \( -4 \). ✓</em>${gframe(["y = -4*x + 7"], { title: "y = -4x + 7: rate of change -4 (falls 4 for each step right)" })}
    </div>
  </div>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 5</h3><p>A table has \( x:1,2,3,4 \) and \( y:2,5,8,11 \). Is it linear, and what is the rate of change?</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> First differences: \( 5-2=3 \), \( 8-5=3 \), \( 11-8=3 \).</div>
      <div class="step"><strong>Step 2:</strong> Constant \( +3 \) per step of \( x \), so it is linear.</div>
      <em>Conclusion: linear, with rate of change \( = 3 \). ✓</em>${gframe(["y = 3*x - 1"], { title: "the table points lie on y = 3x - 1 — linear, slope 3" })}
    </div>
  </div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 1</h3><p>Is \( y = 5x - 2 \) linear or non-linear?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: linear.</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 2</h3><p>Is \( y = x^3 \) linear or non-linear?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: non-linear.</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 3</h3><p>State the rate of change of \( y = 6x + 1 \).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: 6.</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 4</h3><p>Table \( x:0,1,2 \), \( y:2,5,10 \). Linear?</p><details><summary>View answer</summary><div class="solution"><div class="step">Steps are +3 then +5 — not constant. <em>Answer: non-linear.</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 5</h3><p>Is the constant relation \( y = 7 \) linear or non-linear?</p><details><summary>View answer</summary><div class="solution"><div class="step">Its graph is a horizontal line (slope 0). <em>Answer: linear.</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q1: How do I spot a linear relation in a table?</h3><p><em>The y-values change by a constant amount each step.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q2: What is the rate of change?</h3><p><em>How much y changes per 1 unit of x — the slope.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q3: How does a non-linear graph look?</h3><p><em>It curves instead of being a straight line.</em></p></div>
</div>` },
      mg([{ expr: "2*x + 1", label: "y = 2x + 1 (linear)" }, { expr: "x^2", label: "y = x² (non-linear)" }], { markIntersection: false, xMin: -4, xMax: 4, yMin: -2, yMax: 10, caption: "Linear is a straight line; non-linear curves." }),
    ],
  },

  {
    code: "4.2", title: "Representing Linear Relations", quizzes: [],
    blocks: [
      { id: bid(), type: "html", html: String.raw`<div class="lecture-box">
  <h1>📊 Representing Linear Relations</h1>
  <p><strong>Overview.</strong> A linear relation can be shown three ways: a <strong>table</strong>, a <strong>graph</strong>, and an <strong>equation</strong> \( y = mx + b \).</p>
  <h2>📌 Slope and y-Intercept</h2>
  <p>In \( y = mx + b \): \( m \) is the <strong>slope</strong> (rate of change) and \( b \) is the <strong>y-intercept</strong> (where the line crosses the y-axis). For \( y = 3x - 4 \): slope \( 3 \), y-intercept \( -4 \).</p>
  <h2>📌 Moving Between Representations</h2>
  <p>From a table, the y-intercept is the value at \( x = 0 \) and the slope is the step size. Slide the slope on the graph below to see its effect.</p>
  <h2>🔵 Examples</h2>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 1</h3><p>Slope and y-intercept of \( y = 2x + 5 \)?</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Compare to the form \( y = mx + b \).</div>
      <div class="step"><strong>Step 2:</strong> \( m = 2 \) (slope) and \( b = 5 \) (y-intercept).</div>
      <em>Conclusion: slope \( 2 \), y-intercept \( 5 \). ✓</em>${gframe(["y = 2*x + 5"], { title: "y = 2x + 5: slope 2, y-intercept (0, 5)" })}
    </div>
  </div>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 2</h3><p>Table \( x:0,1,2 \), \( y:1,3,5 \) — find the equation.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> y-intercept is the value at \( x = 0 \): \( b = 1 \).</div>
      <div class="step"><strong>Step 2:</strong> Slope is the step in \( y \) per step in \( x \): \( +2 \).</div>
      <div class="step"><strong>Step 3 (check):</strong> at \( x = 2 \), \( 2(2) + 1 = 5 \). ✓</div>
      <em>Conclusion: \( y = 2x + 1 \).</em>${gframe(["y = 2*x + 1"], { title: "the table points (0,1),(1,3),(2,5) lie on y = 2x + 1" })}
    </div>
  </div>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 3</h3><p>Line through \( (0,2) \) and \( (1,5) \) — equation?</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> The point with \( x = 0 \) gives the y-intercept: \( b = 2 \).</div>
      <div class="step"><strong>Step 2:</strong> Slope \( = \frac{5-2}{1-0} = 3 \).</div>
      <em>Conclusion: \( y = 3x + 2 \). ✓</em>${gframe(["y = 3*x + 2"], { title: "the line through (0,2) and (1,5): y = 3x + 2" })}
    </div>
  </div>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 4</h3><p>For \( y = \frac{1}{2}x + 2 \), give two points.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \( x = 0 \Rightarrow y = 2 \), so \( (0,2) \).</div>
      <div class="step"><strong>Step 2:</strong> \( x = 2 \Rightarrow y = \frac{1}{2}(2) + 2 = 3 \), so \( (2,3) \).</div>
      <em>Conclusion: \( (0,2) \) and \( (2,3) \). ✓</em>${gframe(["y = 0.5*x + 2"], { title: "y = ½x + 2 passes through (0,2) and (2,3)" })}
    </div>
  </div>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 5</h3><p>A taxi charges $4 to start plus $2 per km. Write the equation for cost \( C \) vs distance \( d \).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> The fixed start fee is the y-intercept: \( b = 4 \).</div>
      <div class="step"><strong>Step 2:</strong> The per-km rate is the slope: \( m = 2 \).</div>
      <div class="step"><strong>Step 3 (check):</strong> for \( d = 3 \) km, \( C = 2(3) + 4 = \$10 \).</div>
      <em>Conclusion: \( C = 2d + 4 \). ✓</em>${gframe(["y = 2*x + 4"], { title: "taxi cost C = 2d + 4: starts at $4 (y-intercept), rises $2 per km" })}
    </div>
  </div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 1</h3><p>Slope and y-intercept of \( y = -2x + 5 \)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: slope −2, y-intercept 5.</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 2</h3><p>Make a table for \( y = 2x + 1 \), \( x = 0,1,2 \).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \( y = 1, 3, 5 \).</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 3</h3><p>Line through \( (0,-1) \) with slope 4 — equation?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \( y = 4x - 1 \).</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 4</h3><p>A pool starts at 50 L and fills 10 L/min. Equation?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \( V = 10t + 50 \).</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 5</h3><p>A gym costs $30 to join plus $20 per month. Write the equation for total cost \( C \) after \( m \) months.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \( C = 20m + 30 \).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q1: What is \( m \) in \( y = mx + b \)?</h3><p><em>The slope (rate of change).</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q2: What is \( b \)?</h3><p><em>The y-intercept — where the line crosses the y-axis.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q3: How do I find the slope from a table?</h3><p><em>It's the constant change in y for each step of 1 in x.</em></p></div>
</div>` },
      graph("a*x + 2", "a", { xMin: -6, xMax: 6, yMin: -6, yMax: 8, paramMin: -3, paramMax: 3, paramInit: 1, caption: "y = ax + 2 — slide a (the slope); the y-intercept stays at 2." }),
    ],
  },

  {
    code: "4.3", title: "Comparing Lines", quizzes: [],
    blocks: [
      { id: bid(), type: "html", html: String.raw`<div class="lecture-box">
  <h1>📐 Comparing Lines</h1>
  <p><strong>Overview.</strong> Two lines \( y = ax + b \) can be compared by <strong>slope</strong> (steepness &amp; direction) and <strong>y-intercept</strong> (starting height).</p>
  <h2>📌 Slope</h2>
  <p>A bigger \( |a| \) is steeper. Positive \( a \) rises left-to-right; negative \( a \) falls. Equal slopes ⇒ <strong>parallel</strong>.</p>
  <h2>📌 Where Lines Meet</h2>
  <p>Two lines with different slopes cross at one point — set the expressions equal to find it. Slide the slider below to compare a second line with \( y = 2x + 1 \).</p>
  <h2>🔵 Examples</h2>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 1</h3><p>Which is steeper: \( y = 2x+1 \) or \( y = 5x-3 \)?</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Steepness depends on the absolute value of the slope: \( |2| = 2 \), \( |5| = 5 \).</div>
      <div class="step"><strong>Step 2:</strong> \( 5 > 2 \).</div>
      <em>Conclusion: \( y = 5x - 3 \) is steeper. ✓</em>${gframe(["y = 2*x + 1", "y = 5*x - 3"], { title: "y = 5x - 3 climbs faster than y = 2x + 1 — the bigger slope is steeper" })}
    </div>
  </div>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 2</h3><p>Are \( y = 2x+1 \) and \( y = 2x-3 \) parallel?</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Both have slope \( 2 \) — equal slopes.</div>
      <div class="step"><strong>Step 2:</strong> Equal slopes with different y-intercepts never meet.</div>
      <em>Conclusion: yes, parallel. ✓</em>${gframe(["y = 2*x + 1", "y = 2*x - 3"], { title: "equal slopes (2) — the lines are parallel and never meet" })}
    </div>
  </div>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 3</h3><p>Where do \( y = 2x+1 \) and \( y = x+4 \) cross?</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Set the expressions equal: \( 2x + 1 = x + 4 \).</div>
      <div class="step"><strong>Step 2:</strong> Solve: \( 2x - x = 4 - 1 \Rightarrow x = 3 \).</div>
      <div class="step"><strong>Step 3:</strong> Find \( y \): \( y = 2(3) + 1 = 7 \).</div>
      <em>Conclusion: \( (3, 7) \). ✓</em>${gframe(["y = 2*x + 1", "y = x + 4"], { title: "y = 2x + 1 and y = x + 4 cross at (3, 7)" })}
    </div>
  </div>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 4</h3><p>Which has the greater y-intercept: \( y=2x+1 \) or \( y=2x+4 \)?</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> The y-intercept is the constant \( b \): here \( 1 \) and \( 4 \).</div>
      <div class="step"><strong>Step 2:</strong> \( 4 > 1 \) (the lines are parallel, differing only in height).</div>
      <em>Conclusion: \( y = 2x + 4 \). ✓</em>${gframe(["y = 2*x + 1", "y = 2*x + 4"], { title: "same slope, different heights: y = 2x + 4 sits above y = 2x + 1" })}
    </div>
  </div>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 5</h3><p>Where do \( y = 3x - 2 \) and \( y = x + 4 \) cross?</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Set equal: \( 3x - 2 = x + 4 \).</div>
      <div class="step"><strong>Step 2:</strong> \( 2x = 6 \Rightarrow x = 3 \).</div>
      <div class="step"><strong>Step 3:</strong> \( y = 3(3) - 2 = 7 \) (check: \( 3 + 4 = 7 \) ✓).</div>
      <em>Conclusion: \( (3, 7) \). ✓</em>
    </div>
  </div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 1</h3><p>Which is steeper: \( y = -4x \) or \( y = 2x \)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \( y = -4x \) ( \( |-4| > 2 \) ).</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 2</h3><p>Are \( y = 3x+2 \) and \( y = 3x-5 \) parallel?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: yes.</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 3</h3><p>Where do \( y = x \) and \( y = -x + 4 \) cross?</p><details><summary>View answer</summary><div class="solution"><div class="step">\( x = -x+4 \Rightarrow x=2 \). <em>Answer: \( (2, 2) \).</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 4</h3><p>Plan A: \( C = 5x + 20 \); Plan B: \( C = 2x + 35 \). When are they equal?</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 5x+20 = 2x+35 \Rightarrow x = 5 \). <em>Answer: 5 months.</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 5</h3><p>Are \( y = 4x + 1 \) and \( y = -4x + 1 \) parallel?</p><details><summary>View answer</summary><div class="solution"><div class="step">Slopes are \( 4 \) and \( -4 \) — different. <em>Answer: no (they cross at \( (0,1) \)).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q1: What makes a line steeper?</h3><p><em>A larger absolute value of the slope.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q2: When are two lines parallel?</h3><p><em>When they have equal slopes.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q3: How do I find where two lines cross?</h3><p><em>Set their expressions equal and solve for x, then find y.</em></p></div>
</div>` },
      mg([{ expr: "2*x + 1", label: "y = 2x + 1" }, { expr: "a*x + 1", label: "y = ax + 1" }], { param: "a", paramMin: -3, paramMax: 4, paramInit: 1, xMin: -5, xMax: 5, yMin: -6, yMax: 6, caption: "Slide a to compare the second line's slope with y = 2x + 1." }),
    ],
  },

  {
    code: "4.4", title: "Graphing Special Lines", quizzes: [],
    blocks: [
      { id: bid(), type: "html", html: String.raw`<div class="lecture-box">
  <h1>📏 Graphing Special Lines</h1>
  <p><strong>Special lines</strong> in coordinate geometry are the <strong>horizontal</strong> lines \( y = b \), the <strong>vertical</strong> lines \( x = a \), and the lines <strong>through the origin</strong> \( y = mx \) (including the identity line \( y = x \) and its mirror \( y = -x \)). They appear everywhere real situations hold something <em>constant</em> or describe <em>direct proportion</em> — so recognizing and graphing them instantly is a core skill.</p>

  <div style="background:#f8faff;border:1px solid #cde3ff;border-radius:18px;padding:16px 20px;margin:20px 0;box-shadow:0 2px 6px rgba(0,0,0,0.04);">
    <h2 style="margin-top:0;">📐 Key Rules &amp; Formulas</h2>
    <ul style="margin:8px 0 6px 22px;line-height:1.9;">
      <li><span style="background:#2c6e9e;color:#fff;padding:2px 10px;border-radius:30px;font-size:0.8rem;font-weight:700;margin-right:8px;">H</span><strong>Horizontal:</strong> \( y = b \) — slope \( m = 0 \); every point shares the same \( y \). Parallel to the x-axis.</li>
      <li><span style="background:#2e9e6e;color:#fff;padding:2px 10px;border-radius:30px;font-size:0.8rem;font-weight:700;margin-right:8px;">V</span><strong>Vertical:</strong> \( x = a \) — slope <strong>undefined</strong>; every point shares the same \( x \). <em>Not a function.</em></li>
      <li><span style="background:#e69138;color:#fff;padding:2px 10px;border-radius:30px;font-size:0.8rem;font-weight:700;margin-right:8px;">O</span><strong>Through the origin:</strong> \( y = mx \) — direct variation, passes through \( (0,0) \).</li>
      <li><span style="background:#7c3aed;color:#fff;padding:2px 10px;border-radius:30px;font-size:0.8rem;font-weight:700;margin-right:8px;">±</span><strong>Identity / mirror:</strong> \( y = x \) bisects quadrants I &amp; III; \( y = -x \) bisects II &amp; IV.</li>
    </ul>
    <p style="margin:8px 0 0;">💡 <strong>Graphing tip:</strong> for \( x=a \) plot \( (a,0) \) and draw up/down; for \( y=b \) plot \( (0,b) \) and draw left/right; for \( y=mx \) join the origin to one more point.</p>
  </div>

  <h2>🎬 See It Move</h2>
  <p>Below, the blue horizontal line \( y = 3 \), the green vertical line \( x = -2 \), and the orange diagonal \( y = x \) are drawn on one grid. Watch the tracer dots: on \( y = 3 \) the height never changes, while on \( y = x \) the dot climbs at \( 45^\circ \).</p>
  <div style="text-align:center;margin:16px 0;">
    <svg viewBox="0 0 340 280" width="360" style="max-width:100%;background:#fff;border:1px solid #e2e8f0;border-radius:14px;">
      <defs>
        <pattern id="grid44" width="22" height="22" patternUnits="userSpaceOnUse"><path d="M22 0H0V22" fill="none" stroke="#eef2f7" stroke-width="1"/></pattern>
      </defs>
      <rect x="15" y="15" width="310" height="255" fill="url(#grid44)"/>
      <line x1="15" y1="150" x2="325" y2="150" stroke="#94a3b8" stroke-width="1.5"/>
      <line x1="170" y1="15" x2="170" y2="270" stroke="#94a3b8" stroke-width="1.5"/>
      <text x="318" y="145" font-size="11" fill="#64748b">x</text>
      <text x="175" y="24" font-size="11" fill="#64748b">y</text>
      <!-- y = 3 horizontal -->
      <line x1="20" y1="84" x2="320" y2="84" stroke="#4a90e2" stroke-width="3"/>
      <text x="250" y="78" font-size="12" fill="#1e3a5f" font-weight="700">y = 3</text>
      <circle r="5" fill="#4a90e2"><animate attributeName="cx" values="30;310;30" dur="4s" repeatCount="indefinite"/><animate attributeName="cy" values="84;84;84" dur="4s" repeatCount="indefinite"/></circle>
      <!-- x = -2 vertical -->
      <line x1="126" y1="20" x2="126" y2="266" stroke="#2e9e6e" stroke-width="3"/>
      <text x="78" y="36" font-size="12" fill="#1c5c43" font-weight="700">x = -2</text>
      <!-- y = x diagonal -->
      <line x1="82" y1="238" x2="258" y2="62" stroke="#e69138" stroke-width="3"/>
      <text x="222" y="58" font-size="12" fill="#9a5b00" font-weight="700">y = x</text>
      <circle r="5" fill="#e69138"><animate attributeName="cx" values="82;258;82" dur="4s" repeatCount="indefinite"/><animate attributeName="cy" values="238;62;238" dur="4s" repeatCount="indefinite"/></circle>
      <circle cx="170" cy="150" r="3.5" fill="#0f172a"/>
    </svg>
    <div style="font-size:13px;color:#64748b;">Blue dot: \(y\) stays 3. Orange dot: \(y\) always equals \(x\).</div>
  </div>

  <h2>🔵 Examples (Application &amp; Challenge)</h2>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:12px 16px;margin:16px 0;border-radius:16px;"><h3>📌 Example 1 — Constant Temperature (horizontal)</h3><p>A reactor is held at \( 72^\circ\text{F} \) for 4 hours. Write temperature \( T \) as a function of time \( t \) and describe its graph for \( 0 \le t \le 5 \).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \( T \) never changes ⇒ \( T = 72 \).</div><div class="step"><strong>Step 2:</strong> the graph is a horizontal line crossing the \( T \)-axis at 72, slope \( 0 \).</div><em>✅ Every point \( (t, 72) \) satisfies it — a constant relation.</em></div></div>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:12px 16px;margin:16px 0;border-radius:16px;"><h3>📌 Example 2 — Delivery Boundary (vertical)</h3><p>A store at the origin delivers only where the east–west coordinate satisfies \( x \le 5 \) km. Give the boundary line and decide whether \( (5, 12) \) is eligible.</p><div class="solution"><div class="step"><strong>Step 1:</strong> the boundary is the vertical line \( x = 5 \).</div><div class="step"><strong>Step 2:</strong> \( (5,12) \) has \( x = 5 \), which satisfies \( x \le 5 \) — it lies exactly on the boundary.</div><em>✅ Eligible. The vertical line \( x = 5 \) is the maximum eastward limit.</em></div></div>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:12px 16px;margin:16px 0;border-radius:16px;"><h3>📌 Example 3 — Direct Variation (through origin)</h3><p>Cost \( C \) of apples is proportional to weight \( w \). If 3 kg cost $7.50, find the equation and name the special line.</p><div class="solution"><div class="step"><strong>Step 1:</strong> direct variation ⇒ \( C = mw \), through \( (0,0) \).</div><div class="step"><strong>Step 2:</strong> \( 7.50 = m(3) \Rightarrow m = 2.5 \).</div><em>✅ \( C = 2.5w \): a line through the origin with unit rate $2.50/kg.</em></div></div>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:12px 16px;margin:16px 0;border-radius:16px;"><h3>📌 Example 4 — Parking Grid (intersecting special lines)</h3><p>A lot is bounded by \( x = 2 \), \( x = 8 \), \( y = 1 \), \( y = 5 \). Give the corner coordinates and the area.</p><div class="solution"><div class="step"><strong>Step 1:</strong> corners are intersections: \( (2,1), (8,1), (2,5), (8,5) \).</div><div class="step"><strong>Step 2:</strong> width \( = 8-2 = 6 \), height \( = 5-1 = 4 \).</div><em>✅ Area \( = 6 \times 4 = 24 \) square units — special lines fence the region.</em></div></div>
  <div class="example-box" style="background-color:#fff0f5;border-left:5px solid #c2185b;padding:12px 16px;margin:16px 0;border-radius:16px;"><h3>⭐ Example 5 (Challenge) — Reflection over \( y = -x \)</h3><p>Reflect \( P(3, -4) \) across the diagonal \( y = -x \).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \( y = -x \) has slope \( -1 \) through the origin.</div><div class="step"><strong>Step 2:</strong> the reflection rule over \( y=-x \) is \( (a,b) \to (-b,-a) \).</div><div class="step"><strong>Step 3:</strong> \( P(3,-4) \to (-(-4), -3) = (4, -3) \).</div><em>✅ \( P' = (4,-3) \). The midpoint of \( PP' \) lies on \( y=-x \) and \( PP' \perp \) the line.</em></div></div>

  <h2>🟡 Practice Questions (Skill &amp; Word Problems)</h2>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:12px 16px;margin:16px 0;border-radius:16px;"><h3>📝 Question 1 — Water Level</h3><p>A pool sits at a constant depth of 1.8 m. Write depth \( d \) as a function of horizontal position \( x \) and name the line type.</p><details><summary>🔎 Show Answer</summary><div class="solution"><div class="step">Depth is constant ⇒ \( d = 1.8 \), a horizontal line (slope 0).</div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:12px 16px;margin:16px 0;border-radius:16px;"><h3>📝 Question 2 — Deadline Constraint</h3><p>All tasks must finish by day \( t = 14 \). Write the boundary as a special line. Is a task finished exactly on day 14 on time?</p><details><summary>🔎 Show Answer</summary><div class="solution"><div class="step">Vertical line \( t = 14 \). A task at \( t = 14 \) is on the line ⇒ on time.</div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:12px 16px;margin:16px 0;border-radius:16px;"><h3>📝 Question 3 — Fuel Efficiency (direct variation)</h3><p>A car travels distance \( d \) proportional to fuel \( f \): 12 L gives 180 km. Find \( d \) in terms of \( f \), then the range on 5 L.</p><details><summary>🔎 Show Answer</summary><div class="solution"><div class="step">\( 180 = k(12) \Rightarrow k = 15 \), so \( d = 15f \) (through origin).</div><div class="step">\( f = 5 \Rightarrow d = 75 \) km.</div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:12px 16px;margin:16px 0;border-radius:16px;"><h3>📝 Question 4 (Hard) — Rectangle from Special Lines</h3><p>A rectangle has opposite corners \( (-3, 2) \) and \( (4, 7) \). Give the equations of its four sides and its area.</p><details><summary>🔎 Show Answer</summary><div class="solution"><div class="step">Sides: \( x = -3,\ x = 4,\ y = 2,\ y = 7 \).</div><div class="step">Area \( = (4-(-3))\times(7-2) = 7\times 5 = 35 \) square units.</div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:12px 16px;margin:16px 0;border-radius:16px;"><h3>⭐ Question 5 (Challenge) — Logo Design Triangle</h3><p>A logo uses \( x = 2 \), \( y = 3 \), and \( y = 0.5x \). Find the three intersection points and the area of the triangle they form.</p><details><summary>🔎 Show Answer</summary><div class="solution"><div class="step">\( x=2 \cap y=0.5x:\ (2,1) \); \( y=3 \cap y=0.5x:\ (6,3) \); \( x=2 \cap y=3:\ (2,3) \).</div><div class="step">Vertical leg \( = 3-1 = 2 \), horizontal leg \( = 6-2 = 4 \), area \( = \tfrac12(4)(2) = 4 \).</div></div></details></div>

  <h2>❓ Q&amp;A Summary — Key Concepts</h2>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #2c6e9e;padding:10px 14px;margin:10px 0;border-radius:12px;"><h3>Q1: What defines a horizontal line and its slope?</h3><p><em>\( y = b \) with \( b \) constant; slope \( 0 \) (no vertical change).</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #2c6e9e;padding:10px 14px;margin:10px 0;border-radius:12px;"><h3>Q2: Why is a vertical line's slope undefined?</h3><p><em>\( x = a \): the run is 0, so rise/run divides by zero.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #2c6e9e;padding:10px 14px;margin:10px 0;border-radius:12px;"><h3>Q3: Why is \( y = mx \) "special"?</h3><p><em>It passes through the origin (no \( b \) term) — direct variation.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #2c6e9e;padding:10px 14px;margin:10px 0;border-radius:12px;"><h3>Q4: How do you quickly graph \( x=-4 \) or \( y=5 \)?</h3><p><em>Draw the vertical line through \( x=-4 \); the horizontal line through \( y=5 \) — no slope needed.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #2c6e9e;padding:10px 14px;margin:10px 0;border-radius:12px;"><h3>Q5: Can two special lines be parallel?</h3><p><em>Yes — any two horizontals (e.g. \( y=2,\ y=-7 \)) or any two verticals (\( x=1,\ x=10 \)).</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #2c6e9e;padding:10px 14px;margin:10px 0;border-radius:12px;"><h3>Q6: Real-life uses?</h3><p><em>Horizontal: fixed price, constant speed, thermostat. Vertical: deadlines, boundaries, capacity limits.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #2c6e9e;padding:10px 14px;margin:10px 0;border-radius:12px;"><h3>Q7: How is \( y = x \) a reference line?</h3><p><em>The identity line (slope 1); reflecting over it swaps coordinates \( (a,b)\to(b,a) \).</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #2c6e9e;padding:10px 14px;margin:10px 0;border-radius:12px;"><h3>Q8: A line through \( (0,0) \) and \( (4,-8) \) — equation?</h3><p><em>\( m = \frac{-8-0}{4-0} = -2 \), so \( y = -2x \) (direct variation).</em></p></div>

  <div style="background:#e9f3fb;border-radius:18px;padding:14px 18px;margin-top:18px;">
    <p style="margin:0 0 6px;">🧠 <strong>Pro Tip:</strong> Decide first whether a line is vertical or horizontal — keywords like "constant", "fixed", or "every \( x \) the same" signal a special line, so you can skip the slope formula entirely.</p>
    <p style="margin:0;">✨ These four line types are the building blocks that make graphing systems and regions fast.</p>
  </div>
</div>` },
      mg([{ expr: "3", label: "y = 3 (horizontal)" }, { expr: "x", label: "y = x" }], { markIntersection: false, xMin: -5, xMax: 5, yMin: -5, yMax: 6, caption: "y = 3 is flat; y = x rises at 45°. (Vertical lines x = k can't be drawn as y = f(x).)" }),
    ],
  },

  {
    code: "4.5", title: "Transformations of Lines", quizzes: [],
    blocks: [
      { id: bid(), type: "html", html: String.raw`<div class="lecture-box">
  <h1>🔄 Transformations of Lines</h1>
  <p><strong>Overview.</strong> Changing the equation \( y = mx + b \) moves the line. Change \( b \) to <strong>translate</strong> (slide up/down); change \( m \) to <strong>rotate</strong> (change steepness).</p>
  <h2>📌 Translating (change \( b \))</h2>
  <p>Adding to \( b \) slides the whole line up; subtracting slides it down. \( y = 2x \) shifted up 3 becomes \( y = 2x + 3 \).</p>
  <h2>📌 Rotating (change \( m \))</h2>
  <p>Changing the slope rotates the line about its y-intercept. A negative slope <strong>reflects</strong> the direction. Use the sliders below the lesson.</p>
  <h2>🔵 Examples</h2>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 1</h3><p>\( y = 2x \) shifted up 3?</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Shifting up changes the y-intercept \( b \): add \( 3 \) to it (\( 0 + 3 \)).</div>
      <div class="step"><strong>Step 2:</strong> The slope is unchanged: \( y = 2x + 3 \).</div>
      <em>Conclusion: \( y = 2x + 3 \). ✓</em>${gframe(["y = 2*x", "y = 2*x + 3"], { title: "y = 2x shifted up 3 gives y = 2x + 3" })}
    </div>
  </div>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 2</h3><p>\( y = x \) reflected in the x-axis?</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Reflecting in the x-axis negates the right side: \( y = -(x) \).</div>
      <div class="step"><strong>Step 2:</strong> \( y = -x \).</div>
      <em>Conclusion: \( y = -x \). ✓</em>${gframe(["y = x", "y = -x"], { title: "y = x reflected in the x-axis gives y = -x" })}
    </div>
  </div>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 3</h3><p>\( y = 3x \) translated down 5?</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Down means subtract from \( b \): \( 0 - 5 \).</div>
      <div class="step"><strong>Step 2:</strong> \( y = 3x - 5 \).</div>
      <em>Conclusion: \( y = 3x - 5 \). ✓</em>${gframe(["y = 3*x", "y = 3*x - 5"], { title: "y = 3x translated down 5 gives y = 3x - 5" })}
    </div>
  </div>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 4</h3><p>\( y = 2x \) made less steep, to slope 1?</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Steepness is the slope \( m \): change it from \( 2 \) to \( 1 \).</div>
      <div class="step"><strong>Step 2:</strong> \( y = 1\cdot x = x \).</div>
      <em>Conclusion: \( y = x \). ✓</em>${gframe(["y = 2*x", "y = x"], { title: "y = 2x made less steep (slope 1) gives y = x" })}
    </div>
  </div>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 5</h3><p>Reflect \( y = 3x + 2 \) in the x-axis.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Negate the <em>whole</em> right side: \( y = -(3x + 2) \).</div>
      <div class="step"><strong>Step 2:</strong> Distribute the negative: \( y = -3x - 2 \).</div>
      <div class="step"><strong>Note:</strong> both the slope and the y-intercept flip sign.</div>
      <em>Conclusion: \( y = -3x - 2 \). ✓</em>${gframe(["y = 3*x + 2", "y = -3*x - 2"], { title: "y = 3x + 2 reflected in the x-axis gives y = -3x - 2" })}
    </div>
  </div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 1</h3><p>\( y = x + 1 \) shifted up 4?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \( y = x + 5 \).</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 2</h3><p>\( y = 4x \) reflected in the x-axis?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \( y = -4x \).</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 3</h3><p>Translate \( y = -x + 2 \) down 3.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \( y = -x - 1 \).</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 4</h3><p>Which change makes \( y = 2x + 1 \) steeper — raising \( m \) or \( b \)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: raising \( m \) (the slope).</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 5</h3><p>Translate \( y = x - 4 \) up 6 units. New equation?</p><details><summary>View answer</summary><div class="solution"><div class="step">\( -4 + 6 = 2 \). <em>Answer: \( y = x + 2 \).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q1: What does changing \( b \) do?</h3><p><em>Slides (translates) the line up or down.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q2: What does changing \( m \) do?</h3><p><em>Rotates the line (changes steepness/direction).</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q3: What is a reflection in the x-axis?</h3><p><em>Negating the slope (and intercept), flipping the line over the x-axis.</em></p></div>
</div>` },
      graph("a*x", "a", { xMin: -5, xMax: 5, yMin: -6, yMax: 6, paramMin: -3, paramMax: 3, paramInit: 2, caption: "y = ax through the origin — slide a to rotate (and reflect when a < 0)." }),
      graph("2*x + a", "a", { xMin: -5, xMax: 5, yMin: -6, yMax: 8, paramMin: -4, paramMax: 4, paramInit: 0, caption: "y = 2x + a — slide a to translate the line up and down." }),
    ],
  },

  {
    code: "4.6", title: "Finding the Equation of a Line", quizzes: [],
    blocks: [
      { id: bid(), type: "html", html: String.raw`<div class="lecture-box">
  <h1>🧭 Finding the Equation of a Line</h1>
  <p><strong>Overview.</strong> To write \( y = mx + b \) you need the <strong>slope</strong> \( m \) and the <strong>y-intercept</strong> \( b \).</p>
  <h2>📌 From a Graph</h2>
  <p>Read \( b \) where the line crosses the y-axis, then count \( m = \frac{\text{rise}}{\text{run}} \).</p>
  <h2>📌 From Two Points</h2>
  <p>Slope \( m = \dfrac{y_2 - y_1}{x_2 - x_1} \); then substitute a point to find \( b \).</p>
  <h2>📌 From a Table</h2>
  <p>The step in \( y \) per step of 1 in \( x \) is the slope; the value at \( x = 0 \) is \( b \).</p>
  <h2>🔵 Examples</h2>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 1</h3><p>Slope 2, y-intercept 5 — equation?</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Substitute \( m = 2 \) and \( b = 5 \) into \( y = mx + b \).</div>
      <div class="step"><strong>Step 2:</strong> \( y = 2x + 5 \).</div>
      <em>Conclusion: \( y = 2x + 5 \). ✓</em>${gframe(["y = 2*x + 5"], { title: "slope 2, y-intercept 5: y = 2x + 5" })}
    </div>
  </div>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 2</h3><p>Through \( (0,2) \) and \( (3,8) \) — equation?</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Slope \( m = \frac{8-2}{3-0} = \frac{6}{3} = 2 \).</div>
      <div class="step"><strong>Step 2:</strong> The point \( (0,2) \) is the y-intercept, so \( b = 2 \).</div>
      <div class="step"><strong>Step 3 (check):</strong> at \( (3,8) \): \( 2(3) + 2 = 8 \). ✓</div>
      <em>Conclusion: \( y = 2x + 2 \).</em>${gframe(["y = 2*x + 2"], { title: "the line through (0,2) and (3,8): y = 2x + 2" })}
    </div>
  </div>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 3</h3><p>Slope between \( (1,3) \) and \( (4,12) \)?</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \( m = \frac{y_2 - y_1}{x_2 - x_1} = \frac{12-3}{4-1} = \frac{9}{3} \).</div>
      <div class="step"><strong>Step 2:</strong> \( = 3 \).</div>
      <em>Conclusion: slope \( = 3 \). ✓</em>${gframe(["y = 3*x"], { title: "(1,3) and (4,12) both lie on y = 3x — slope 3" })}
    </div>
  </div>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 4</h3><p>Table \( x:0,2,4 \), \( y:3,7,11 \) — equation?</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> y-intercept is the value at \( x = 0 \): \( b = 3 \).</div>
      <div class="step"><strong>Step 2:</strong> Slope \( = \frac{\text{change in }y}{\text{change in }x} = \frac{7-3}{2-0} = \frac{4}{2} = 2 \).</div>
      <div class="step"><strong>Step 3 (check):</strong> at \( x = 4 \): \( 2(4) + 3 = 11 \). ✓</div>
      <em>Conclusion: \( y = 2x + 3 \).</em>${gframe(["y = 2*x + 3"], { title: "the table points (0,3),(2,7),(4,11) lie on y = 2x + 3" })}
    </div>
  </div>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 5</h3><p>Find the equation of the line through \( (1, 3) \) and \( (3, 7) \) (neither point is on the y-axis).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \( m = \frac{7-3}{3-1} = \frac{4}{2} = 2 \).</div>
      <div class="step"><strong>Step 2:</strong> Substitute \( (1,3) \): \( 3 = 2(1) + b \Rightarrow b = 1 \).</div>
      <div class="step"><strong>Step 3 (check):</strong> at \( (3,7) \): \( 2(3) + 1 = 7 \). ✓</div>
      <em>Conclusion: \( y = 2x + 1 \).</em>${gframe(["y = 2*x + 1"], { title: "the line through (1,3) and (3,7): y = 2x + 1" })}
    </div>
  </div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 1</h3><p>Slope 3, y-intercept −1 — equation?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \( y = 3x - 1 \).</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 2</h3><p>Slope between \( (2,5) \) and \( (6,13) \)?</p><details><summary>View answer</summary><div class="solution"><div class="step">\( \frac{13-5}{6-2} = \frac{8}{4} \). <em>Answer: 2.</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 3</h3><p>Line through \( (0,4) \) with slope 0 — equation?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \( y = 4 \).</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 4</h3><p>A candle starts at 20 cm and burns 2 cm/hour. Equation for height \( h \) vs time \( t \)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \( h = -2t + 20 \).</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 5</h3><p>A line passes through \( (0, 5) \) and \( (2, 9) \). Write its equation.</p><details><summary>View answer</summary><div class="solution"><div class="step">\( m = \frac{9-5}{2-0} = 2 \), \( b = 5 \). <em>Answer: \( y = 2x + 5 \).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q1: What two things define a line's equation?</h3><p><em>The slope and the y-intercept.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q2: How do I find slope from two points?</h3><p><em>Rise over run: \( \frac{y_2 - y_1}{x_2 - x_1} \).</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q3: Where is the y-intercept in a table?</h3><p><em>The y-value when \( x = 0 \).</em></p></div>
</div>` },
      mg([{ expr: "2*x + 1", label: "y = 2x + 1" }], { markIntersection: false, xMin: -4, xMax: 4, yMin: -4, yMax: 8, caption: "This line has slope 2 and y-intercept 1." }),
    ],
  },

  {
    code: "4.7", title: "General Form of a Line", quizzes: [],
    blocks: [
      { id: bid(), type: "html", html: String.raw`<div class="lecture-box">
  <h1>📐 General Form of a Line</h1>
  <p><strong>Overview.</strong> Every straight line can be written in <strong>general form</strong> \( Ax + By + C = 0 \), where \( A, B, C \) are integers and \( A \ge 0 \). (The closely related <strong>standard form</strong> is \( Ax + By = C \).) This is a tidy, universal way to present <em>any</em> line — even vertical ones.</p>
  <h2>📌 Writing a Line in General Form</h2>
  <p>Start from \( y = mx + b \), move every term to one side, and clear fractions so all coefficients are integers. Example: \( y = \frac{2}{3}x - 1 \Rightarrow 3y = 2x - 3 \Rightarrow 2x - 3y - 3 = 0 \).</p>
  <h2>📌 Finding the Intercepts</h2>
  <p><strong>x-intercept:</strong> set \( y = 0 \) and solve for \( x \). <strong>y-intercept:</strong> set \( x = 0 \) and solve for \( y \). The intercepts are the two easiest points to plot a line from its general form.</p>
  <h2>🔵 Examples</h2>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Example 1</h3><p>Write \( y = 2x + 5 \) in general form.</p><div class="solution"><div class="step"><strong>Step 1:</strong> move all terms left: \( 2x - y + 5 = 0 \).</div><em>Conclusion: \( 2x - y + 5 = 0 \).</em>${gframe(["y = 2*x + 5"], { title: "y = 2x + 5 is the same line as 2x - y + 5 = 0" })}</div></div>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Example 2</h3><p>Find the intercepts of \( 3x + 4y = 12 \).</p><div class="solution"><div class="step"><strong>x-intercept:</strong> \( y = 0 \Rightarrow 3x = 12 \Rightarrow x = 4 \), point \( (4,0) \).</div><div class="step"><strong>y-intercept:</strong> \( x = 0 \Rightarrow 4y = 12 \Rightarrow y = 3 \), point \( (0,3) \).</div><em>Conclusion: \( (4,0) \) and \( (0,3) \).</em>${gframe(["y = (12 - 3*x)/4"], { title: "3x + 4y = 12 crosses the axes at (4,0) and (0,3)" })}</div></div>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Example 3</h3><p>Write \( y = -\frac{3}{4}x + 2 \) in general form with integer coefficients.</p><div class="solution"><div class="step"><strong>Step 1:</strong> \( \times 4 \): \( 4y = -3x + 8 \).</div><div class="step"><strong>Step 2:</strong> \( 3x + 4y - 8 = 0 \).</div><em>Conclusion: \( 3x + 4y - 8 = 0 \).</em>${gframe(["y = -0.75*x + 2"], { title: "y = -¾x + 2 is the same line as 3x + 4y - 8 = 0" })}</div></div>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Example 4</h3><p>Find the intercepts of \( 2x - 5y - 10 = 0 \).</p><div class="solution"><div class="step"><strong>x-intercept:</strong> \( y = 0 \Rightarrow 2x = 10 \Rightarrow x = 5 \), point \( (5,0) \).</div><div class="step"><strong>y-intercept:</strong> \( x = 0 \Rightarrow -5y = 10 \Rightarrow y = -2 \), point \( (0,-2) \).</div><em>Conclusion: \( (5,0) \) and \( (0,-2) \).</em>${gframe(["y = (2*x - 10)/5"], { title: "2x - 5y - 10 = 0 crosses the axes at (5,0) and (0,-2)" })}</div></div>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>⭐ Advanced Example 5</h3><p>A line has x-intercept \( 6 \) and y-intercept \( -4 \). Write it in general form.</p><div class="solution"><div class="step"><strong>Step 1:</strong> slope \( = \frac{-4 - 0}{0 - 6} = \frac{2}{3} \).</div><div class="step"><strong>Step 2:</strong> \( y = \frac{2}{3}x - 4 \Rightarrow 3y = 2x - 12 \).</div><div class="step"><strong>Step 3:</strong> \( 2x - 3y - 12 = 0 \).</div><em>Conclusion: \( 2x - 3y - 12 = 0 \).</em>${gframe(["y = (2*x - 12)/3"], { title: "the line 2x - 3y - 12 = 0" })}</div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 1</h3><p>Write \( y = x - 7 \) in general form.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \( x - y - 7 = 0 \).</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 2</h3><p>Find the x-intercept of \( 5x + 2y = 20 \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( y = 0 \Rightarrow 5x = 20 \). <em>Answer: \( (4,0) \).</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 3</h3><p>Find the y-intercept of \( 5x + 2y = 20 \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( x = 0 \Rightarrow 2y = 20 \). <em>Answer: \( (0,10) \).</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 4</h3><p>Write \( y = -2x + 3 \) in general form.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \( 2x + y - 3 = 0 \).</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>⭐ Challenge Question 5</h3><p>Find both intercepts of \( x - 3y = 6 \).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( y = 0 \Rightarrow x = 6 \); \( x = 0 \Rightarrow -3y = 6 \Rightarrow y = -2 \). <em>Answer: \( (6,0) \) and \( (0,-2) \).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q1: What is the general form of a line?</h3><p><em>\( Ax + By + C = 0 \) with integer coefficients.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q2: How do I find the x-intercept?</h3><p><em>Set \( y = 0 \) and solve for \( x \).</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q3: How do I find the y-intercept?</h3><p><em>Set \( x = 0 \) and solve for \( y \).</em></p></div>
</div>` },
      mg([{ expr: "(6 - 2*x)/3", label: "2x + 3y = 6" }], { markIntersection: false, xMin: -2, xMax: 6, yMin: -2, yMax: 5, caption: "The line 2x + 3y = 6: x-intercept (3,0), y-intercept (0,2)." }),
    ],
  },

  {
    code: "4.8", title: "General Form vs Slope-Intercept Form", quizzes: [],
    blocks: [
      { id: bid(), type: "html", html: String.raw`<div class="lecture-box">
  <h1>🔄 General Form vs Slope-Intercept Form</h1>
  <p><strong>Overview.</strong> The same line can be written two ways. <strong>Slope-intercept form</strong> \( y = mx + b \) shows the slope and y-intercept at a glance — ideal for graphing and comparing. <strong>General form</strong> \( Ax + By + C = 0 \) is a tidy, integer-coefficient standard that also handles <em>vertical</em> lines.</p>
  <h2>📌 General → Slope-Intercept</h2>
  <p>Solve for \( y \). Example: \( 3x - 4y = 12 \Rightarrow -4y = -3x + 12 \Rightarrow y = \frac{3}{4}x - 3 \).</p>
  <h2>📌 Slope-Intercept → General</h2>
  <p>Move all terms to one side and clear fractions. Example: \( y = -\frac{1}{2}x + 4 \Rightarrow 2y = -x + 8 \Rightarrow x + 2y - 8 = 0 \).</p>
  <h2>📌 Which Form, When?</h2>
  <p>Use <strong>slope-intercept</strong> to graph quickly or to read/compare slopes. Use <strong>general form</strong> for a standard written answer, for integer coefficients, and for vertical lines like \( x = 3 \) (\( \Rightarrow x - 3 = 0 \)) which have <em>no</em> slope-intercept form.</p>
  <h2>🔵 Examples</h2>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Example 1</h3><p>Convert \( 2x + y - 6 = 0 \) to slope-intercept form.</p><div class="solution"><div class="step"><strong>Step 1:</strong> \( y = -2x + 6 \).</div><em>Conclusion: slope \( -2 \), y-intercept \( 6 \).</em>${gframe(["y = -2*x + 6"], { title: "2x + y - 6 = 0 is y = -2x + 6: slope -2, y-intercept 6" })}</div></div>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Example 2</h3><p>Convert \( 3x - 4y = 12 \) to slope-intercept form.</p><div class="solution"><div class="step"><strong>Step 1:</strong> \( -4y = -3x + 12 \).</div><div class="step"><strong>Step 2:</strong> \( y = \frac{3}{4}x - 3 \).</div><em>Conclusion: \( y = \frac{3}{4}x - 3 \).</em>${gframe(["y = 0.75*x - 3"], { title: "3x - 4y = 12 is y = ¾x - 3" })}</div></div>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Example 3</h3><p>Convert \( y = 5x - 2 \) to general form.</p><div class="solution"><div class="step"><strong>Step 1:</strong> \( 5x - y - 2 = 0 \).</div><em>Conclusion: \( 5x - y - 2 = 0 \).</em>${gframe(["y = 5*x - 2"], { title: "y = 5x - 2 is the same line as 5x - y - 2 = 0" })}</div></div>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Example 4</h3><p>Convert \( y = -\frac{1}{2}x + 4 \) to general form (integers).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \( \times 2 \): \( 2y = -x + 8 \).</div><div class="step"><strong>Step 2:</strong> \( x + 2y - 8 = 0 \).</div><em>Conclusion: \( x + 2y - 8 = 0 \).</em>${gframe(["y = -0.5*x + 4"], { title: "y = -½x + 4 is the same line as x + 2y - 8 = 0" })}</div></div>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>⭐ Advanced Example 5</h3><p>Why can't \( x = 3 \) be written as \( y = mx + b \)?</p><div class="solution"><div class="step"><strong>Reason:</strong> a vertical line has <em>undefined</em> slope, so there is no value of \( m \).</div><div class="step">General form handles it: \( x - 3 = 0 \).</div><em>Conclusion: use general form for vertical lines.</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 1</h3><p>Convert \( 4x + 2y - 8 = 0 \) to slope-intercept form.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \( y = -2x + 4 \).</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 2</h3><p>Convert \( x - y + 5 = 0 \) to slope-intercept form.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \( y = x + 5 \).</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 3</h3><p>Convert \( y = 3x + 1 \) to general form.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \( 3x - y + 1 = 0 \).</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 4</h3><p>Convert \( y = \frac{2}{3}x - 2 \) to general form (integers).</p><details><summary>View answer</summary><div class="solution"><div class="step">\( \times 3 \): \( 3y = 2x - 6 \). <em>Answer: \( 2x - 3y - 6 = 0 \).</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>⭐ Challenge Question 5</h3><p>Which form best shows the slope at a glance, and which can represent a vertical line?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: slope-intercept shows slope directly; general form can represent vertical lines.</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q1: Which form is best for graphing quickly?</h3><p><em>Slope-intercept form, \( y = mx + b \).</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q2: Which form can represent a vertical line?</h3><p><em>General form (e.g. \( x - 3 = 0 \)).</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q3: How do I convert general form to slope form?</h3><p><em>Solve the equation for \( y \).</em></p></div>
</div>` },
      mg([{ expr: "-2*x + 6", label: "y = -2x + 6" }], { markIntersection: false, xMin: -2, xMax: 6, yMin: -2, yMax: 8, caption: "One line, two names: 2x + y − 6 = 0 (general) = y = −2x + 6 (slope-intercept)." }),
    ],
  },

  {
    code: "4.9", title: "Parallel and Perpendicular Lines", quizzes: [],
    blocks: [
      { id: bid(), type: "html", html: String.raw`<div class="lecture-box">
  <h1>⟂ Parallel and Perpendicular Lines</h1>
  <p><strong>Overview.</strong> The slopes of two lines tell you instantly how they sit relative to each other.</p>
  <h2>📌 Parallel Lines</h2>
  <p>Parallel lines never meet — they have <strong>equal slopes</strong> \( (m_1 = m_2) \) but different y-intercepts. Example: \( y = 2x + 1 \) and \( y = 2x - 5 \).</p>
  <h2>📌 Perpendicular Lines</h2>
  <p>Perpendicular lines meet at \( 90^\circ \). Their slopes are <strong>negative reciprocals</strong>: \( m_1 \cdot m_2 = -1 \), so \( m_2 = -\frac{1}{m_1} \). Example: slopes \( 3 \) and \( -\frac{1}{3} \). (A horizontal line \( y = c \) and a vertical line \( x = c \) are also perpendicular.)</p>
  <h2>🔵 Examples</h2>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Example 1</h3><p>Are \( y = 3x + 2 \) and \( y = 3x - 5 \) parallel?</p><div class="solution"><div class="step"><strong>Step 1:</strong> both have slope \( 3 \).</div><em>Conclusion: yes, parallel (and distinct).</em>${gframe(["y = 3*x + 2", "y = 3*x - 5"], { title: "equal slopes (3): y = 3x + 2 and y = 3x - 5 are parallel" })}</div></div>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Example 2</h3><p>What slope is perpendicular to slope \( 4 \)?</p><div class="solution"><div class="step"><strong>Step 1:</strong> negative reciprocal of \( 4 \) is \( -\frac{1}{4} \).</div><em>Conclusion: \( -\frac{1}{4} \).</em>${gframe(["y = 4*x", "y = -0.25*x"], { title: "slopes 4 and -¼ multiply to -1 — the lines meet at a right angle" })}</div></div>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Example 3</h3><p>Find the line through \( (0,1) \) parallel to \( y = 2x - 3 \).</p><div class="solution"><div class="step"><strong>Step 1:</strong> same slope \( 2 \), y-intercept \( 1 \).</div><em>Conclusion: \( y = 2x + 1 \).</em>${gframe(["y = 2*x - 3", "y = 2*x + 1"], { title: "y = 2x + 1 is parallel to y = 2x - 3 and passes through (0,1)" })}</div></div>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Example 4</h3><p>Find the line through \( (0,-2) \) perpendicular to \( y = \frac{1}{2}x + 4 \).</p><div class="solution"><div class="step"><strong>Step 1:</strong> perpendicular slope \( = -2 \), y-intercept \( -2 \).</div><em>Conclusion: \( y = -2x - 2 \).</em>${gframe(["y = 0.5*x + 4", "y = -2*x - 2"], { title: "y = -2x - 2 is perpendicular to y = ½x + 4 (slopes ½ and -2)" })}</div></div>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>⭐ Advanced Example 5</h3><p>Is the line through \( (1,2) \) and \( (3,8) \) perpendicular to \( y = -\frac{1}{3}x \)?</p><div class="solution"><div class="step"><strong>Step 1:</strong> slope \( = \frac{8-2}{3-1} = 3 \).</div><div class="step"><strong>Step 2:</strong> \( 3 \times \left(-\frac{1}{3}\right) = -1 \).</div><em>Conclusion: yes, perpendicular.</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 1</h3><p>What is the slope of any line parallel to \( y = -5x + 1 \)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \( -5 \).</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 2</h3><p>What is the slope of any line perpendicular to \( y = \frac{2}{3}x \)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \( -\frac{3}{2} \).</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 3</h3><p>Are \( y = 4x + 1 \) and \( y = -4x + 1 \) parallel?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: no — their slopes \( 4 \) and \( -4 \) differ.</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 4</h3><p>Find the line through \( (0,3) \) parallel to \( y = -x + 5 \).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \( y = -x + 3 \).</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>⭐ Challenge Question 5</h3><p>Find the line through \( (0,0) \) perpendicular to \( y = \frac{1}{4}x - 2 \).</p><details><summary>View answer</summary><div class="solution"><div class="step">Perpendicular slope \( -4 \), through the origin. <em>Answer: \( y = -4x \).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q1: How do the slopes of parallel lines relate?</h3><p><em>They are equal.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q2: How do the slopes of perpendicular lines relate?</h3><p><em>They are negative reciprocals; their product is \( -1 \).</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q3: How are horizontal and vertical lines related?</h3><p><em>They are perpendicular to each other.</em></p></div>
</div>` },
      mg([
        { expr: "2*x + 1", label: "y = 2x + 1" },
        { expr: "2*x - 3", label: "y = 2x − 3 (parallel)" },
        { expr: "-0.5*x + 1", label: "y = −½x + 1 (perpendicular)" },
      ], { markIntersection: false, xMin: -5, xMax: 5, yMin: -5, yMax: 6, caption: "Equal slopes ⇒ parallel; negative-reciprocal slopes (2 and −½) ⇒ perpendicular." }),
    ],
  },

  {
    code: "5.1", title: "Geometry & Measurement Through History", quizzes: [],
    blocks: [
      { id: bid(), type: "html", html: String.raw`<div class="lecture-box">
  <h1>🏛️ Geometry &amp; Measurement Through History</h1>
  <p><strong>Overview.</strong> Geometry began as practical measurement — laying out fields, building pyramids, tracking the seasons. The word itself means "earth-measuring." This lesson connects those ancient ideas to the precise tools we use today.</p>
  <h2>📌 The Rope-Stretchers</h2>
  <p>Egyptian surveyors carried a loop of rope knotted into <strong>12 equal segments</strong>. Pulled tight into sides of 3, 4 and 5, it forms a perfect right angle — a portable way to "square" a corner long before the Pythagorean theorem was proved.</p>
  <div style="text-align:center;margin:14px 0;">
    <svg viewBox="0 0 220 170" width="240" style="max-width:100%;background:#fff;border:1px solid #e2e8f0;border-radius:8px;">
      <polygon points="30,140 190,140 30,20" fill="#e6f3ff" stroke="#4a90e2" stroke-width="2.5"/>
      <rect x="30" y="122" width="18" height="18" fill="none" stroke="#4a90e2" stroke-width="2"/>
      <text x="105" y="158" font-size="13" text-anchor="middle" fill="#1e3a5f">4 (base)</text>
      <text x="14" y="85" font-size="13" text-anchor="middle" fill="#1e3a5f" transform="rotate(-90 14 85)">3</text>
      <text x="120" y="75" font-size="13" text-anchor="middle" fill="#1e3a5f" transform="rotate(-37 120 75)">5</text>
    </svg>
    <div style="font-size:13px;color:#64748b;">A 3-4-5 rope triangle: \( 3^2 + 4^2 = 5^2 \).</div>
  </div>
  <h2>📌 Standard Units</h2>
  <p>Early units were body-based: the <strong>cubit</strong> (elbow to fingertip), the <strong>hand</strong>, the <strong>foot</strong>. They varied person to person — so societies standardized them. Today the metre is defined by the speed of light, making measurement identical worldwide.</p>
  <h2>📌 Different Number Bases</h2>
  <p>The Babylonians counted in <strong>base 60</strong> — which is why we still have 60 minutes in an hour and \(360^\circ\) in a circle. A conjecture (an educated guess) like "the angles of a triangle always sum to \(180^\circ\)" was tested by measurement, then later <em>proved</em>.</p>
  <h2>🔵 Examples</h2>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 1</h3><p>If 1 cubit = 6 hands, how many hands are in 2 cubits?</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Each cubit is \( 6 \) hands, so multiply: \( 2 \times 6 \).</div>
      <div class="step"><strong>Step 2:</strong> \( 2 \times 6 = 12 \).</div>
      <em>Conclusion: 12 hands. ✓</em>
    </div>
  </div>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 2</h3><p>Verify the 3-4-5 rope makes a right angle.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Add the squares of the two shorter sides: \( 3^2 + 4^2 = 9 + 16 = 25 \).</div>
      <div class="step"><strong>Step 2:</strong> Square the longest side: \( 5^2 = 25 \).</div>
      <div class="step"><strong>Step 3:</strong> They are equal, so the Pythagorean relationship holds — the triangle is right-angled.</div>
      <em>Conclusion: yes, the 3-4-5 rope gives a right angle. ✓</em>
    </div>
  </div>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 3</h3><p>Babylonian base 60: write 75 minutes in hours and minutes.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \( 60 \) minutes make \( 1 \) hour; subtract: \( 75 - 60 = 15 \).</div>
      <div class="step"><strong>Step 2:</strong> So \( 75 \) min \( = 1 \) hour and \( 15 \) minutes.</div>
      <em>Conclusion: 1 hour 15 minutes. ✓</em>
    </div>
  </div>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 4</h3><p>If 1 cubit = 4 palms, how many palms are in 5 cubits?</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Each cubit is \( 4 \) palms, so multiply: \( 5 \times 4 \).</div>
      <div class="step"><strong>Step 2:</strong> \( 5 \times 4 = 20 \).</div>
      <em>Conclusion: 20 palms. ✓</em>
    </div>
  </div>
  <div class="example-box" style="background-color:#fff0f5;border-left:5px solid #c2185b;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>⭐ Advanced Example — Early value of π</h3><p>An ancient scribe used \( \pi \approx \frac{256}{81} \). Find the decimal value and the percent error from \( \pi = 3.14159\ldots \)</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \( \frac{256}{81} \approx 3.1605 \).</div>
      <div class="step"><strong>Step 2:</strong> Percent error \( = \frac{3.1605 - 3.14159}{3.14159} \times 100\% \approx 0.60\% \).</div>
      <em>Conclusion: remarkably close — about 0.6% high. ✓</em>
    </div>
  </div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 1</h3><p>What shape does a 3-4-5 rope create?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: a right triangle (right-angled triangle).</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 2</h3><p>Why did societies standardize units like the cubit?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: body-based units varied person to person; standard units make trade and building consistent.</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 3</h3><p>Where does "360° in a circle" come from?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: the Babylonian base-60 counting system.</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 4</h3><p>If 1 cubit = 4 palms, how many cubits are 12 palms?</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 12 \div 4 = 3 \). <em>Answer: 3 cubits.</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>⭐ Challenge Question</h3><p>A drawing uses scale 1 unit = 12 palms. A wall is 9 units long. How many palms is the real wall, and how many cubits if 1 cubit = 4 palms?</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 9 \times 12 = 108 \) palms; \( 108 \div 4 = 27 \) cubits.</div><em>Answer: 108 palms = 27 cubits.</em></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q1: What does "geometry" literally mean?</h3><p><em>Earth-measuring.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q2: What is a conjecture?</h3><p><em>An educated guess about a pattern, later tested and possibly proved.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q3: Why is the modern metre more reliable than a cubit?</h3><p><em>It's defined by a physical constant (the speed of light), so it never varies.</em></p></div>
</div>` },
    ],
  },

  {
    code: "5.2", title: "Designs with Circle & Triangle Properties", quizzes: [],
    blocks: [
      { id: bid(), type: "html", html: String.raw`<div class="lecture-box">
  <h1>⭕ Designs with Circle &amp; Triangle Properties</h1>
  <p><strong>Overview.</strong> Beautiful designs — logos, tilings, stained glass — rely on a few reliable facts about triangles and circles. Master these and you can both analyze and create symmetric figures.</p>
  <h2>📌 Triangle Angle Facts</h2>
  <p>The interior angles of any triangle sum to \(180^\circ\). An <strong>exterior angle</strong> equals the sum of the two non-adjacent interior angles.</p>
  <h2>📌 Circle Angle Facts</h2>
  <p>A <strong>central angle</strong> sits at the centre; an <strong>inscribed angle</strong> sits on the circle. Subtending the same arc, the inscribed angle is <strong>half</strong> the central angle. A special case: an angle inscribed in a <strong>semicircle is \(90^\circ\)</strong>.</p>
  <div style="text-align:center;margin:14px 0;">
    <svg viewBox="0 0 200 200" width="220" style="max-width:100%;background:#fff;border:1px solid #e2e8f0;border-radius:8px;">
      <circle cx="100" cy="100" r="75" fill="#e6f3ff" stroke="#4a90e2" stroke-width="2"/>
      <circle cx="100" cy="100" r="3" fill="#1e3a5f"/>
      <line x1="100" y1="100" x2="47" y2="47" stroke="#4a90e2" stroke-width="2"/>
      <line x1="100" y1="100" x2="153" y2="47" stroke="#4a90e2" stroke-width="2"/>
      <text x="100" y="92" font-size="12" text-anchor="middle" fill="#1e3a5f">central</text>
      <line x1="100" y1="175" x2="47" y2="47" stroke="#e69138" stroke-width="2"/>
      <line x1="100" y1="175" x2="153" y2="47" stroke="#e69138" stroke-width="2"/>
      <text x="100" y="168" font-size="12" text-anchor="middle" fill="#9a5b00">inscribed</text>
    </svg>
    <div style="font-size:13px;color:#64748b;">Same arc: the inscribed angle (orange) is half the central angle (blue).</div>
  </div>
  <h2>🔵 Examples</h2>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 1</h3><p>Two angles of a triangle are \(47^\circ\) and \(68^\circ\). Find the third.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> The three interior angles sum to \(180^\circ\).</div>
      <div class="step"><strong>Step 2:</strong> Third \( = 180 - 47 - 68 = 65^\circ \).</div>
      <em>Conclusion: \(65^\circ\) — all angles \(&lt; 90^\circ\), so an acute triangle. ✓</em>
    </div>
  </div>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 2</h3><p>A central angle is \(80^\circ\). What is the inscribed angle on the same arc?</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> The inscribed angle is <em>half</em> the central angle on the same arc.</div>
      <div class="step"><strong>Step 2:</strong> \( 80 \div 2 = 40^\circ \).</div>
      <em>Conclusion: \(40^\circ\). ✓</em>
    </div>
  </div>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 3</h3><p>A radius is 5 cm. What is the diameter?</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> The diameter is twice the radius: \( d = 2r \).</div>
      <div class="step"><strong>Step 2:</strong> \( 2 \times 5 = 10 \) cm.</div>
      <em>Conclusion: \(10\) cm. ✓</em>
    </div>
  </div>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 4</h3><p>An inscribed angle is \(35^\circ\). Find the central angle on the same arc.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Reverse the half-rule: central \( = 2 \times \) inscribed.</div>
      <div class="step"><strong>Step 2:</strong> \( 2 \times 35 = 70^\circ \).</div>
      <em>Conclusion: \(70^\circ\). ✓</em>
    </div>
  </div>
  <div class="example-box" style="background-color:#fff0f5;border-left:5px solid #c2185b;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>⭐ Advanced Example — Angles in a ratio</h3><p>A triangular logo has angles in the ratio \(2:3:4\). Find each angle.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Total parts \( = 2+3+4 = 9 \).</div>
      <div class="step"><strong>Step 2:</strong> Each part \( = 180 \div 9 = 20^\circ \).</div>
      <div class="step"><strong>Step 3:</strong> Multiply out: \( 2(20), 3(20), 4(20) \).</div>
      <em>Conclusion: \(40^\circ, 60^\circ, 80^\circ\) (sum \(= 180^\circ\) ✓).</em>
    </div>
  </div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 1</h3><p>The angles of a triangle sum to ___.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \(180^\circ\).</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 2</h3><p>A central angle is \(100^\circ\). Find the inscribed angle on the same arc.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \(50^\circ\).</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 3</h3><p>An equilateral triangle's angles are each ___.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \(60^\circ\).</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 4</h3><p>Two angles of a triangle are \(90^\circ\) and \(55^\circ\). Find the third.</p><details><summary>View answer</summary><div class="solution"><div class="step">\(180 - 90 - 55 = 35\). <em>Answer: \(35^\circ\).</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>⭐ Challenge Question</h3><p>A triangle is inscribed in a semicircle with one side as the diameter. What is the angle at the circle, and why?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \(90^\circ\) — angle in a semicircle (the diameter subtends a \(180^\circ\) arc, so the inscribed angle is half = \(90^\circ\)).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q1: How do central and inscribed angles relate?</h3><p><em>The inscribed angle is half the central angle on the same arc.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q2: What is an exterior angle equal to?</h3><p><em>The sum of the two non-adjacent interior angles.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q3: What's special about an angle inscribed in a semicircle?</h3><p><em>It is always \(90^\circ\).</em></p></div>
</div>` },
    ],
  },

  {
    code: "5.3", title: "Units & Unit Conversion", quizzes: [],
    blocks: [
      { id: bid(), type: "html", html: String.raw`<div class="lecture-box">
  <h1>📐 Units &amp; Unit Conversion</h1>
  <p><strong>Overview.</strong> Converting units cleanly is a superpower in science and trades. The reliable method is <strong>dimensional analysis</strong>: multiply by fractions equal to 1 so unwanted units cancel.</p>
  <h2>📌 The Metric Ladder</h2>
  <p>Each step is \(\times 10\): km → hm → dam → m → dm → cm → mm. So \(1 \text{ m} = 100 \text{ cm} = 1000 \text{ mm}\), and \(1 \text{ km} = 1000 \text{ m}\).</p>
  <h2>📌 Unit-Factor Method</h2>
  <p>Write the quantity, then multiply by \( \frac{\text{want}}{\text{have}} \). Units cancel like numbers:</p>
  <p style="text-align:center;">\( 90\ \tfrac{\text{km}}{\text{h}} \times \dfrac{1000\ \text{m}}{1\ \text{km}} \times \dfrac{1\ \text{h}}{3600\ \text{s}} = 25\ \tfrac{\text{m}}{\text{s}} \)</p>
  <h2>📌 Squares &amp; Cubes</h2>
  <p>Watch the exponent! \(1 \text{ m} = 100 \text{ cm}\), so \(1 \text{ m}^2 = 100^2 = 10\,000 \text{ cm}^2\) and \(1 \text{ m}^3 = 100^3 = 1\,000\,000 \text{ cm}^3\).</p>
  <h2>🔵 Examples</h2>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 1</h3><p>Convert 3.5 m to cm.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(1 \text{ m} = 100 \text{ cm}\), so multiply by \(100\).</div>
      <div class="step"><strong>Step 2:</strong> \(3.5 \times 100 = 350\) cm.</div>
      <em>Conclusion: \(350\) cm. ✓</em>
    </div>
  </div>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 2</h3><p>Convert 2500 g to kg.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(1 \text{ kg} = 1000 \text{ g}\), so divide by \(1000\).</div>
      <div class="step"><strong>Step 2:</strong> \(2500 \div 1000 = 2.5\) kg.</div>
      <em>Conclusion: \(2.5\) kg. ✓</em>
    </div>
  </div>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 3</h3><p>A car uses 45 L over 540 km. Find L/100 km.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Fuel rate \( = \frac{45}{540} \) L per km.</div>
      <div class="step"><strong>Step 2:</strong> Scale to 100 km: \( \frac{45}{540} \times 100 = 8.33 \).</div>
      <em>Conclusion: about \(8.3 \text{ L}/100\text{ km}\). ✓</em>
    </div>
  </div>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 4</h3><p>Convert \(2 \text{ m}^2\) to \(\text{cm}^2\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Square the linear factor: \(1 \text{ m}^2 = 100^2 = 10\,000 \text{ cm}^2\).</div>
      <div class="step"><strong>Step 2:</strong> \(2 \times 10\,000 = 20\,000 \text{ cm}^2\).</div>
      <em>Conclusion: \(20\,000 \text{ cm}^2\). ✓</em>
    </div>
  </div>
  <div class="example-box" style="background-color:#fff0f5;border-left:5px solid #c2185b;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>⭐ Advanced Example — Area conversion</h3><p>A room is \(4.2 \text{ m} \times 3.5 \text{ m}\). Find its area in \(\text{cm}^2\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Area \(= 4.2 \times 3.5 = 14.7 \text{ m}^2\).</div>
      <div class="step"><strong>Step 2:</strong> Multiply by \(10\,000\) (since \(1\text{ m}^2 = 10\,000\text{ cm}^2\)): \(14.7 \times 10\,000 = 147\,000 \text{ cm}^2\).</div>
      <em>Conclusion: \(147\,000 \text{ cm}^2\). ✓</em>
    </div>
  </div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 1</h3><p>Convert 4 km to metres.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: 4000 m.</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 2</h3><p>Convert 250 cm to metres.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: 2.5 m.</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 3</h3><p>Convert \(36 \text{ km/h}\) to m/s.</p><details><summary>View answer</summary><div class="solution"><div class="step">\( 36 \times \frac{1000}{3600} \). <em>Answer: 10 m/s.</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 4</h3><p>Convert \(1.5 \text{ m}^3\) to litres (1 \(\text{m}^3 = 1000\) L).</p><details><summary>View answer</summary><div class="solution"><div class="step">\(1.5 \times 1000\). <em>Answer: 1500 L.</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>⭐ Challenge Question</h3><p>A tank holds \(0.75 \text{ m}^3\). How many litres is that (1 \(\text{m}^3 = 1000\) L), and how many cm³?</p><details><summary>View answer</summary><div class="solution"><div class="step">\(0.75 \times 1000 = 750\) L; \(0.75 \times 1\,000\,000 = 750\,000 \text{ cm}^3\).</div><em>Answer: 750 L = 750 000 cm³.</em></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q1: What is the unit-factor method?</h3><p><em>Multiplying by fractions equal to 1 so unwanted units cancel.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q2: Why is \(1 \text{ m}^2 = 10\,000 \text{ cm}^2\)?</h3><p><em>Because you square the linear factor: \(100^2 = 10\,000\).</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q3: How many mL in a litre?</h3><p><em>1000.</em></p></div>
</div>` },
      graph("a*x", "a", { xMin: 0, xMax: 10, yMin: 0, yMax: 100, paramMin: 1, paramMax: 10, paramInit: 10, caption: "Every unit conversion is linear: output = factor × input. Slide the factor (e.g. 100 for m → cm, 1000 for m → mm)." }),
    ],
  },

  {
    code: "5.4", title: "The Pythagorean Theorem", quizzes: [],
    blocks: [
      { id: bid(), type: "html", html: String.raw`<div class="lecture-box">
  <h1>📐 The Pythagorean Theorem</h1>
  <p><strong>Overview.</strong> In any right triangle, \( a^2 + b^2 = c^2 \), where \(c\) is the <strong>hypotenuse</strong> (the side opposite the right angle). It links the three sides and powers an enormous range of distance problems.</p>
  <div style="text-align:center;margin:14px 0;">
    <svg viewBox="0 0 200 160" width="220" style="max-width:100%;background:#fff;border:1px solid #e2e8f0;border-radius:8px;">
      <polygon points="40,130 160,130 40,40" fill="#e6f3ff" stroke="#4a90e2" stroke-width="2.5"/>
      <rect x="40" y="112" width="18" height="18" fill="none" stroke="#4a90e2" stroke-width="2"/>
      <text x="100" y="148" font-size="13" text-anchor="middle" fill="#1e3a5f">b</text>
      <text x="26" y="88" font-size="13" text-anchor="middle" fill="#1e3a5f">a</text>
      <text x="108" y="80" font-size="13" text-anchor="middle" fill="#9a5b00" transform="rotate(-37 108 80)">c (hyp)</text>
    </svg>
    <div style="font-size:13px;color:#64748b;">\( a^2 + b^2 = c^2 \)</div>
  </div>
  <h2>📌 Finding the Hypotenuse</h2>
  <p>Add the squares of the legs, then take the square root: \( c = \sqrt{a^2 + b^2} \).</p>
  <h2>📌 Finding a Leg</h2>
  <p>Rearrange: \( a = \sqrt{c^2 - b^2} \). Subtract, don't add, when the hypotenuse is known.</p>
  <h2>📌 The Converse (checking for right angles)</h2>
  <p>If \( a^2 + b^2 = c^2 \) holds, the triangle <em>is</em> right-angled — how builders verify square corners.</p>
  <h2>🔵 Examples</h2>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 1</h3><p>Legs 6 and 8 — find the hypotenuse.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Add the squares of the legs: \(6^2 + 8^2 = 36 + 64 = 100\).</div>
      <div class="step"><strong>Step 2:</strong> Take the square root: \(\sqrt{100} = 10\).</div>
      <em>Conclusion: the hypotenuse is \(10\). ✓</em>
    </div>
  </div>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 2</h3><p>Hypotenuse 15, one leg 9 — find the other leg.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Subtract (the hypotenuse is known): \(15^2 - 9^2 = 225 - 81 = 144\).</div>
      <div class="step"><strong>Step 2:</strong> \(\sqrt{144} = 12\).</div>
      <em>Conclusion: the other leg is \(12\). ✓</em>
    </div>
  </div>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 3</h3><p>Is 5, 12, 13 a right triangle?</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Add the squares of the two shorter sides: \(5^2 + 12^2 = 25 + 144 = 169\).</div>
      <div class="step"><strong>Step 2:</strong> Compare to the longest side squared: \(13^2 = 169\). Equal, so the converse holds.</div>
      <em>Conclusion: yes, it is a right triangle. ✓</em>
    </div>
  </div>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 4</h3><p>A right triangle has legs 9 and 12. Find the hypotenuse.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(9^2 + 12^2 = 81 + 144 = 225\).</div>
      <div class="step"><strong>Step 2:</strong> \(\sqrt{225} = 15\).</div>
      <em>Conclusion: the hypotenuse is \(15\). ✓</em>
    </div>
  </div>
  <div class="example-box" style="background-color:#fff0f5;border-left:5px solid #c2185b;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>⭐ Advanced Example — Exact radical</h3><p>Find the exact diagonal of a square with side 7.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(d = \sqrt{7^2 + 7^2} = \sqrt{98}\).</div>
      <div class="step"><strong>Step 2:</strong> \(\sqrt{98} = \sqrt{49 \cdot 2} = 7\sqrt{2}\).</div>
      <em>Conclusion: \(7\sqrt{2} \approx 9.90\). ✓</em>
    </div>
  </div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 1</h3><p>Legs 3 and 4 — find the hypotenuse.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: 5.</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 2</h3><p>Is 8, 15, 17 a right triangle?</p><details><summary>View answer</summary><div class="solution"><div class="step">\(64 + 225 = 289 = 17^2\). <em>Answer: yes.</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 3</h3><p>A 5 m ladder's base is 1.5 m from a wall. How high does it reach (2 dp)?</p><details><summary>View answer</summary><div class="solution"><div class="step">\(\sqrt{25 - 2.25} = \sqrt{22.75}\). <em>Answer: ≈ 4.77 m.</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 4</h3><p>Find the diagonal of a \(6 \times 8\) rectangle.</p><details><summary>View answer</summary><div class="solution"><div class="step">\(\sqrt{6^2 + 8^2} = \sqrt{100}\). <em>Answer: 10.</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>⭐ Challenge Question</h3><p>A drone flies 40 m east then 30 m north. How far is it from the start, and how much shorter is that than the path flown?</p><details><summary>View answer</summary><div class="solution"><div class="step">Distance \(= \sqrt{40^2 + 30^2} = \sqrt{2500} = 50\) m.</div><div class="step">Path flown \(= 70\) m, so it's \(70 - 50 = 20\) m shorter.</div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q1: Which side is the hypotenuse?</h3><p><em>The longest side, opposite the right angle.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q2: How do I find a leg, not the hypotenuse?</h3><p><em>Subtract: \(a = \sqrt{c^2 - b^2}\).</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q3: What does the converse let us do?</h3><p><em>Check whether a triangle is right-angled from its side lengths.</em></p></div>
</div>` },
      graph("sqrt(x^2 + a^2)", "a", { xMin: 0, xMax: 10, yMin: 0, yMax: 14, paramMin: 0, paramMax: 8, paramInit: 3, caption: "Hypotenuse c = √(x² + a²). x is one leg; slide a to fix the other leg and watch the hypotenuse grow." }),
    ],
  },

  {
    code: "5.5", title: "Changing Dimensions: Perimeter", quizzes: [],
    blocks: [
      { id: bid(), type: "html", html: String.raw`<div class="lecture-box">
  <h1>📏 Changing Dimensions: Perimeter</h1>
  <p><strong>Overview.</strong> Perimeter is a <em>length</em> — the distance once around a shape. When every length of a figure is scaled by a factor \(k\), the perimeter scales by the same factor \(k\).</p>
  <h2>📌 The Rule</h2>
  <p>If every side is multiplied by \(k\), then <strong>new perimeter \(= k \times\) old perimeter</strong>. (Perimeter grows like \(k\), not \(k^2\) — that's area.)</p>
  <div style="text-align:center;margin:14px 0;">
    <svg viewBox="0 0 240 110" width="260" style="max-width:100%;background:#fff;border:1px solid #e2e8f0;border-radius:8px;">
      <rect x="20" y="60" width="40" height="40" fill="#e6f3ff" stroke="#4a90e2" stroke-width="2"/>
      <text x="40" y="108" font-size="11" text-anchor="middle" fill="#1e3a5f">×1: P = 4s</text>
      <rect x="110" y="20" width="80" height="80" fill="#e6f3ff" stroke="#4a90e2" stroke-width="2"/>
      <text x="150" y="108" font-size="11" text-anchor="middle" fill="#1e3a5f">×2: P = 8s</text>
    </svg>
    <div style="font-size:13px;color:#64748b;">Double the side → double the perimeter (\(k = 2\)).</div>
  </div>
  <h2>🔵 Examples</h2>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 1</h3><p>A square has side 5 cm. Find its perimeter.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> A square has 4 equal sides, so \(P = 4 \times \text{side}\).</div>
      <div class="step"><strong>Step 2:</strong> \(4 \times 5 = 20\) cm.</div>
      <em>Conclusion: \(P = 20\) cm. ✓</em>
    </div>
  </div>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 2</h3><p>A rectangle is \(8 \times 3\). Find its perimeter.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(P = 2(l + w)\).</div>
      <div class="step"><strong>Step 2:</strong> \(2(8 + 3) = 2(11) = 22\).</div>
      <em>Conclusion: \(P = 22\). ✓</em>
    </div>
  </div>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 3</h3><p>Every side of a shape is multiplied by 4. By what factor does the perimeter change?</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Perimeter is a length, so it scales by the same factor \(k\) as the sides.</div>
      <div class="step"><strong>Step 2:</strong> Here \(k = 4\).</div>
      <em>Conclusion: 4 times. ✓</em>
    </div>
  </div>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 4</h3><p>A square of side 6 is enlarged by factor 2.5. Find the new perimeter.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Old perimeter \(= 4 \times 6 = 24\).</div>
      <div class="step"><strong>Step 2:</strong> New \(= k \times\) old \(= 2.5 \times 24 = 60\).</div>
      <em>Conclusion: new perimeter \(= 60\). ✓</em>
    </div>
  </div>
  <div class="example-box" style="background-color:#fff0f5;border-left:5px solid #c2185b;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>⭐ Advanced Example — Working backward</h3><p>A figure's perimeter grows from 30 cm to 75 cm after a uniform scaling. Find the scale factor \(k\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(k = \dfrac{\text{new}}{\text{old}} = \dfrac{75}{30} = 2.5\).</div>
      <em>Conclusion: each length was multiplied by 2.5. ✓</em>
    </div>
  </div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 1</h3><p>A regular hexagon has side 5. Find its perimeter.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \(6 \times 5 = 30\).</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 2</h3><p>If all sides scale by 3, the perimeter scales by ___.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: 3.</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 3</h3><p>A triangle has perimeter 18. After scaling by 4, what is the new perimeter?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \(4 \times 18 = 72\).</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 4</h3><p>A square's perimeter is 20. What is the perimeter after each side is tripled?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \(3 \times 20 = 60\).</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>⭐ Challenge Question</h3><p>A map uses scale \(1 : 50\,000\). A park's boundary is 12 cm on the map. Find the real perimeter in km.</p><details><summary>View answer</summary><div class="solution"><div class="step">\(12 \times 50\,000 = 600\,000\) cm \(= 6\) km.</div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q1: How does perimeter scale when lengths scale by \(k\)?</h3><p><em>By \(k\) (the same factor).</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q2: Why isn't it \(k^2\)?</h3><p><em>\(k^2\) is for area; perimeter is one-dimensional (a length).</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q3: What units does perimeter use?</h3><p><em>Linear units (cm, m, …).</em></p></div>
</div>` },
      graph("a*x", "a", { xMin: 0, xMax: 6, yMin: 0, yMax: 60, paramMin: 1, paramMax: 10, paramInit: 4, caption: "New perimeter = k × (side length). Slide k: perimeter grows in a straight line — linearly with the scale factor." }),
    ],
  },

  {
    code: "5.6", title: "Changing Dimensions: Area", quizzes: [],
    blocks: [
      { id: bid(), type: "html", html: String.raw`<div class="lecture-box">
  <h1>🟦 Changing Dimensions: Area</h1>
  <p><strong>Overview.</strong> Area is <em>two-dimensional</em>. When every length of a figure is scaled by a factor \(k\), the area scales by \(k^2\) — it grows much faster than perimeter.</p>
  <h2>📌 The Rule</h2>
  <p>If every side is multiplied by \(k\), then <strong>new area \(= k^2 \times\) old area</strong>.</p>
  <div style="text-align:center;margin:14px 0;">
    <svg viewBox="0 0 240 120" width="260" style="max-width:100%;background:#fff;border:1px solid #e2e8f0;border-radius:8px;">
      <rect x="20" y="70" width="35" height="35" fill="#e6f3ff" stroke="#4a90e2" stroke-width="2"/>
      <text x="37" y="118" font-size="11" text-anchor="middle" fill="#1e3a5f">×1: area 1</text>
      <rect x="110" y="35" width="70" height="70" fill="#e6f3ff" stroke="#4a90e2" stroke-width="2"/>
      <text x="145" y="118" font-size="11" text-anchor="middle" fill="#1e3a5f">×2: area 4</text>
    </svg>
    <div style="font-size:13px;color:#64748b;">Double the side → 4× the area (\(2^2\)).</div>
  </div>
  <h2>🔵 Examples</h2>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Example 1</h3><p>A square has side 5 cm. Find its area.</p><div class="solution"><div class="step"><strong>Step 1:</strong> for a square, \(A = s^2\), and here \(s = 5\) cm.</div><div class="step"><strong>Step 2:</strong> \(A = 5^2 = 5 \times 5 = 25\).</div><em>Conclusion: \(A = 25 \text{ cm}^2\). ✓ (units squared because we multiplied cm × cm)</em></div></div>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Example 2</h3><p>A rectangle is \(8 \times 3\). Find its area.</p><div class="solution"><div class="step"><strong>Step 1:</strong> for a rectangle, \(A = \text{length} \times \text{width} = 8 \times 3\).</div><div class="step"><strong>Step 2:</strong> \(8 \times 3 = 24\).</div><em>Conclusion: \(A = 24\) square units. ✓</em></div></div>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Example 3</h3><p>Double every side of a square. By what factor does the area change?</p><div class="solution"><div class="step"><strong>Step 1:</strong> the scale factor of the lengths is \(k = 2\).</div><div class="step"><strong>Step 2:</strong> area scales by \(k^2 = 2^2 = 4\).</div><div class="step"><strong>Check:</strong> a \(3 \times 3\) square (area 9) becomes \(6 \times 6\) (area 36), and \(36 / 9 = 4\). ✓</div><em>Conclusion: the area becomes \(4\) times larger.</em></div></div>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Example 4</h3><p>All sides of a triangle are scaled by 3. By what factor does its area change?</p><div class="solution"><div class="step"><strong>Step 1:</strong> the length scale factor is \(k = 3\).</div><div class="step"><strong>Step 2:</strong> area scales by \(k^2 = 3^2 = 9\).</div><div class="step"><strong>Check:</strong> base and height each triple, so \(\tfrac12 (3b)(3h) = 9 \cdot \tfrac12 bh\). ✓</div><em>Conclusion: the area becomes \(9\) times larger.</em></div></div>
  <div class="example-box" style="background-color:#fff0f5;border-left:5px solid #c2185b;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>⭐ Advanced Example — Enlarging a photo</h3><p>A \(10 \times 15 \text{ cm}\) photo is enlarged so each side is \(2.5\times\). Find the new area.</p><div class="solution"><div class="step"><strong>Step 1:</strong> original area \(= 10 \times 15 = 150 \text{ cm}^2\).</div><div class="step"><strong>Step 2:</strong> area factor \(= 2.5^2 = 6.25\).</div><div class="step"><strong>Step 3:</strong> \(150 \times 6.25 = 937.5 \text{ cm}^2\).</div><em>Conclusion: the enlarged photo has area \(937.5 \text{ cm}^2\). ✓ (a 2.5× enlargement uses over 6× the paper)</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 1</h3><p>If all sides of a shape are scaled by 5, the area scales by ___.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: 25 (\(5^2\)).</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 2</h3><p>A rectangle's area is 20. If both sides are doubled, the new area is ___.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \(20 \times 2^2 = 80\).</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 3</h3><p>A triangle has base 6 and height 4. Find its area.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \(\tfrac{1}{2}(6)(4) = 12\).</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 4</h3><p>A shape has area 15. After scaling all sides by 4, what is the new area?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \(15 \times 16 = 240\).</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>⭐ Challenge Question</h3><p>A model is built at scale \(1:18\). The real car needs \(9 \text{ m}^2\) of paint. Estimate the model's surface area in \(\text{cm}^2\).</p><details><summary>View answer</summary><div class="solution"><div class="step">Area factor \(= (1/18)^2 = 1/324\). Model area \(= 9/324 = 0.0278 \text{ m}^2\).</div><div class="step">\(\times 10\,000 \approx 278 \text{ cm}^2\).</div><em>Answer: about \(278 \text{ cm}^2\).</em></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q1: How does area scale when lengths scale by \(k\)?</h3><p><em>By \(k^2\).</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q2: Why does area grow faster than perimeter?</h3><p><em>Area is 2-D (\(k^2\)); perimeter is 1-D (\(k\)).</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q3: What units does area use?</h3><p><em>Square units (cm², m², …).</em></p></div>
</div>` },
      graph("a*a*x", "a", { xMin: 0, xMax: 5, yMin: 0, yMax: 100, paramMin: 1, paramMax: 5, paramInit: 2, caption: "New area = k² × (old area). Slide the scale factor k: area grows with the SQUARE of k — far faster than perimeter." }),
    ],
  },

  {
    code: "5.7", title: "Volume", quizzes: [],
    blocks: [
      { id: bid(), type: "html", html: String.raw`<div class="lecture-box">
  <h1>🧊 Volume</h1>
  <p><strong>Overview.</strong> Volume measures the space inside a solid, in <strong>cubic units</strong>. When every length scales by \(k\), volume scales by \(k^3\).</p>
  <h2>📌 Core Formulas</h2>
  <ul>
    <li>Rectangular prism: \( V = l \times w \times h \). Cube: \( V = s^3 \).</li>
    <li>Cylinder: \( V = \pi r^2 h \).</li>
    <li>Cone: \( V = \frac{1}{3}\pi r^2 h \) (one-third of the matching cylinder).</li>
    <li>Sphere: \( V = \frac{4}{3}\pi r^3 \).</li>
  </ul>
  <div style="text-align:center;margin:14px 0;">
    <svg viewBox="0 0 240 110" width="260" style="max-width:100%;background:#fff;border:1px solid #e2e8f0;border-radius:8px;">
      <ellipse cx="45" cy="25" rx="25" ry="9" fill="#e6f3ff" stroke="#4a90e2" stroke-width="2"/>
      <path d="M20,25 V85 A25,9 0 0 0 70,85 V25" fill="#e6f3ff" stroke="#4a90e2" stroke-width="2"/>
      <text x="45" y="105" font-size="11" text-anchor="middle" fill="#1e3a5f">cylinder</text>
      <path d="M95,85 L120,20 L145,85 A25,9 0 0 1 95,85" fill="#e6f3ff" stroke="#4a90e2" stroke-width="2"/>
      <text x="120" y="105" font-size="11" text-anchor="middle" fill="#1e3a5f">cone</text>
      <circle cx="200" cy="55" r="30" fill="#e6f3ff" stroke="#4a90e2" stroke-width="2"/>
      <ellipse cx="200" cy="55" rx="30" ry="10" fill="none" stroke="#4a90e2" stroke-width="1" stroke-dasharray="3,3"/>
      <text x="200" y="105" font-size="11" text-anchor="middle" fill="#1e3a5f">sphere</text>
    </svg>
  </div>
  <h2>🔵 Examples</h2>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Example 1</h3><p>Rectangular prism \(5 \times 4 \times 3\). Find the volume.</p><div class="solution"><div class="step"><strong>Step 1:</strong> for a prism, \(V = l \times w \times h = 5 \times 4 \times 3\).</div><div class="step"><strong>Step 2:</strong> \(5 \times 4 = 20\), then \(20 \times 3 = 60\).</div><em>Conclusion: \(V = 60 \text{ units}^3\). ✓ (three lengths multiplied → cubic units)</em></div></div>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Example 2</h3><p>Cylinder \(r = 3\), \(h = 10\). Find the volume (in terms of \(\pi\)).</p><div class="solution"><div class="step"><strong>Step 1:</strong> use \(V = \pi r^2 h\) with \(r = 3\), \(h = 10\).</div><div class="step"><strong>Step 2:</strong> \(r^2 = 3^2 = 9\), so \(V = \pi (9)(10)\).</div><div class="step"><strong>Step 3:</strong> \(9 \times 10 = 90\), giving \(V = 90\pi\).</div><em>Conclusion: \(V = 90\pi \approx 282.7 \text{ units}^3\). ✓</em></div></div>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Example 3</h3><p>A cone and cylinder share \(r\) and \(h\). Compare volumes.</p><div class="solution"><div class="step"><strong>Step 1:</strong> cylinder \(V = \pi r^2 h\); cone \(V = \tfrac{1}{3}\pi r^2 h\).</div><div class="step"><strong>Step 2:</strong> divide: \(\dfrac{\text{cone}}{\text{cylinder}} = \dfrac{\frac{1}{3}\pi r^2 h}{\pi r^2 h} = \dfrac{1}{3}\).</div><em>Conclusion: the cone holds exactly \(\tfrac{1}{3}\) of the cylinder — you could fill the cylinder with three coneloads. ✓</em></div></div>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Example 4</h3><p>Find the volume of a sphere with \(r = 3\) (in terms of \(\pi\)).</p><div class="solution"><div class="step"><strong>Step 1:</strong> use \(V = \tfrac{4}{3}\pi r^3\) with \(r = 3\).</div><div class="step"><strong>Step 2:</strong> \(r^3 = 3^3 = 27\), so \(V = \tfrac{4}{3}\pi (27)\).</div><div class="step"><strong>Step 3:</strong> \(\tfrac{4}{3} \times 27 = 4 \times 9 = 36\).</div><em>Conclusion: \(V = 36\pi \approx 113.1 \text{ units}^3\). ✓</em></div></div>
  <div class="example-box" style="background-color:#fff0f5;border-left:5px solid #c2185b;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>⭐ Advanced Example — Scaling volume</h3><p>Every edge of a solid is tripled. By what factor does the volume change?</p><div class="solution"><div class="step"><strong>Step 1:</strong> the length scale factor is \(k = 3\); volume scales by \(k^3\).</div><div class="step"><strong>Step 2:</strong> \(k^3 = 3^3 = 27\).</div><div class="step"><strong>Check:</strong> a \(1\times1\times1\) cube (volume 1) becomes \(3\times3\times3\) (volume 27). ✓</div><em>Conclusion: the volume becomes \(27\) times larger.</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 1</h3><p>Find the volume of a cube with edge 5.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \(125 \text{ units}^3\).</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 2</h3><p>Volume of a cylinder \(r = 2\), \(h = 5\) (in terms of \(\pi\))?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: \(20\pi\).</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 3</h3><p>A cylinder's radius and height are both doubled. Volume increases by what factor?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: 8 (\(2^3\)).</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 4</h3><p>Find the volume of a cube with edge 10.</p><details><summary>View answer</summary><div class="solution"><div class="step">\(10^3\). <em>Answer: 1000 cubic units.</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>⭐ Challenge Question</h3><p>An ice-cream cone (\(r = 3\), \(h = 12\)) is topped with a hemisphere of the same radius. Find the total volume in terms of \(\pi\).</p><details><summary>View answer</summary><div class="solution"><div class="step">Cone: \(\frac{1}{3}\pi(9)(12) = 36\pi\).</div><div class="step">Hemisphere: \(\frac{1}{2}\cdot\frac{4}{3}\pi(27) = 18\pi\).</div><em>Answer: \(36\pi + 18\pi = 54\pi\).</em></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q1: What units does volume use?</h3><p><em>Cubic units (cm³, m³, …).</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q2: How do a cone and cylinder with equal r and h compare?</h3><p><em>The cone holds one-third as much.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q3: How does volume scale when lengths scale by \(k\)?</h3><p><em>By \(k^3\).</em></p></div>
</div>` },
      graph("3.14159*a*x^2", "a", { xMin: 0, xMax: 6, yMin: 0, yMax: 300, paramMin: 1, paramMax: 10, paramInit: 5, caption: "Cylinder volume V = πr²h plotted against radius r. Slide the height h — notice volume grows with the SQUARE of the radius." }),
    ],
  },

  {
    code: "5.8", title: "Surface Area", quizzes: [],
    blocks: [
      { id: bid(), type: "html", html: String.raw`<div class="lecture-box">
  <h1>📦 Surface Area</h1>
  <p><strong>Overview.</strong> Surface area measures the total area of the "skin" of a solid, in <strong>square units</strong>. When every length scales by \(k\), surface area scales by \(k^2\).</p>
  <h2>📌 Core Formulas</h2>
  <ul>
    <li>Cube: \( SA = 6s^2 \).</li>
    <li>Rectangular prism: \( SA = 2(lw + lh + wh) \).</li>
    <li>Cylinder: \( SA = 2\pi r^2 + 2\pi r h \).</li>
    <li>Sphere: \( SA = 4\pi r^2 \).</li>
  </ul>
  <div style="text-align:center;margin:14px 0;">
    <svg viewBox="0 0 220 170" width="240" style="max-width:100%;background:#fff;border:1px solid #e2e8f0;border-radius:8px;">
      <rect x="80" y="20" width="40" height="40" fill="#e6f3ff" stroke="#4a90e2" stroke-width="2"/>
      <rect x="40" y="60" width="40" height="40" fill="#e6f3ff" stroke="#4a90e2" stroke-width="2"/>
      <rect x="80" y="60" width="40" height="40" fill="#cfe8ff" stroke="#4a90e2" stroke-width="2"/>
      <rect x="120" y="60" width="40" height="40" fill="#e6f3ff" stroke="#4a90e2" stroke-width="2"/>
      <rect x="160" y="60" width="40" height="40" fill="#e6f3ff" stroke="#4a90e2" stroke-width="2"/>
      <rect x="80" y="100" width="40" height="40" fill="#e6f3ff" stroke="#4a90e2" stroke-width="2"/>
      <text x="100" y="160" font-size="11" text-anchor="middle" fill="#1e3a5f">a cube unfolds into 6 equal squares</text>
    </svg>
    <div style="font-size:13px;color:#64748b;">Each face has area \(s^2\); six faces give \(SA = 6s^2\).</div>
  </div>
  <h2>🔵 Examples</h2>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Example 1</h3><p>A cube has edge 4. Find its surface area.</p><div class="solution"><div class="step"><strong>Step 1:</strong> a cube has 6 faces, so \(SA = 6s^2\) with \(s = 4\).</div><div class="step"><strong>Step 2:</strong> \(s^2 = 4^2 = 16\), so \(SA = 6 \times 16\).</div><div class="step"><strong>Step 3:</strong> \(6 \times 16 = 96\).</div><em>Conclusion: \(SA = 96 \text{ units}^2\). ✓</em></div></div>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Example 2</h3><p>Rectangular prism \(5 \times 4 \times 3\). Find the surface area.</p><div class="solution"><div class="step"><strong>Step 1:</strong> use \(SA = 2(lw + lh + wh)\) with \(l=5, w=4, h=3\).</div><div class="step"><strong>Step 2:</strong> \(lw = 20\), \(lh = 15\), \(wh = 12\); sum \(= 47\).</div><div class="step"><strong>Step 3:</strong> \(2 \times 47 = 94\).</div><em>Conclusion: \(SA = 94 \text{ units}^2\). ✓ (each of the 3 pairs of faces counted twice)</em></div></div>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Example 3</h3><p>Cylinder \(r = 4\), \(h = 9\). Surface area (in terms of \(\pi\)).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(SA = \underbrace{2\pi r^2}_{\text{two circles}} + \underbrace{2\pi r h}_{\text{side}}\).</div><div class="step"><strong>Step 2:</strong> two circles: \(2\pi (4)^2 = 32\pi\).</div><div class="step"><strong>Step 3:</strong> side: \(2\pi (4)(9) = 72\pi\).</div><div class="step"><strong>Step 4:</strong> add: \(32\pi + 72\pi = 104\pi\).</div><em>Conclusion: \(SA = 104\pi \approx 326.7 \text{ units}^2\). ✓</em></div></div>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Example 4</h3><p>Find the surface area of a sphere with \(r = 3\) (in terms of \(\pi\)).</p><div class="solution"><div class="step"><strong>Step 1:</strong> use \(SA = 4\pi r^2\) with \(r = 3\).</div><div class="step"><strong>Step 2:</strong> \(r^2 = 3^2 = 9\), so \(SA = 4\pi(9)\).</div><div class="step"><strong>Step 3:</strong> \(4 \times 9 = 36\).</div><em>Conclusion: \(SA = 36\pi \approx 113.1 \text{ units}^2\). ✓</em></div></div>
  <div class="example-box" style="background-color:#fff0f5;border-left:5px solid #c2185b;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>⭐ Advanced Example — Scaling surface area</h3><p>Every edge of a cube is doubled. By what factor does the surface area change?</p><div class="solution"><div class="step"><strong>Step 1:</strong> the length scale factor is \(k = 2\); surface area scales by \(k^2\).</div><div class="step"><strong>Step 2:</strong> \(k^2 = 2^2 = 4\).</div><div class="step"><strong>Check:</strong> edge 1 gives \(SA = 6\); edge 2 gives \(SA = 6(4) = 24\), and \(24/6 = 4\). ✓</div><em>Conclusion: the surface area becomes \(4\) times larger.</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 1</h3><p>Find the surface area of a cube with edge 3.</p><details><summary>View answer</summary><div class="solution"><div class="step">\(6 \times 9\). <em>Answer: 54.</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 2</h3><p>Surface area of a sphere with \(r = 5\) (in terms of \(\pi\))?</p><details><summary>View answer</summary><div class="solution"><div class="step">\(4\pi(25)\). <em>Answer: \(100\pi\).</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 3</h3><p>A prism is \(2 \times 3 \times 4\). Find its surface area.</p><details><summary>View answer</summary><div class="solution"><div class="step">\(2(6 + 8 + 12) = 2(26)\). <em>Answer: 52.</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 4</h3><p>All lengths of a solid are scaled by 3. By what factor does its surface area change?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: 9 (\(3^2\)).</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>⭐ Challenge Question</h3><p>A solid has surface area \(54 \text{ cm}^2\). After every length is doubled, what is the new surface area?</p><details><summary>View answer</summary><div class="solution"><div class="step">Factor \(= 2^2 = 4\). \(54 \times 4 = 216 \text{ cm}^2\).</div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q1: What units does surface area use?</h3><p><em>Square units (cm², m², …).</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q2: What is the surface area of a cube?</h3><p><em>\(6s^2\) — six congruent square faces.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q3: How does surface area scale with \(k\)?</h3><p><em>By \(k^2\) (it's an area).</em></p></div>
</div>` },
      graph("a*a*x", "a", { xMin: 0, xMax: 6, yMin: 0, yMax: 200, paramMin: 1, paramMax: 5, paramInit: 2, caption: "New surface area = k² × (old surface area). Slide k: surface area grows with the SQUARE of the scale factor." }),
    ],
  },

  {
    code: "6.1", title: "Big Data & Its Implications", quizzes: [],
    blocks: [
      { id: bid(), type: "html", html: String.raw`<div class="lecture-box">
  <h1>🌐 Big Data &amp; Its Implications</h1>
  <p><strong>Overview.</strong> Every search, tap, and purchase creates data. <strong>Big data</strong> means data sets so large and fast-growing that ordinary tools struggle to store or analyze them. Understanding it — and its risks — is now a basic numeracy skill.</p>
  <h2>📌 The "Three V's"</h2>
  <p>Big data is usually described by <strong>Volume</strong> (how much), <strong>Velocity</strong> (how fast it arrives), and <strong>Variety</strong> (text, images, sensors, clicks). Some add <strong>Veracity</strong> (how trustworthy).</p>
  <h2>📌 Data Sizes</h2>
  <p>Sizes step up by about 1000: \( 1\text{ KB} = 1000\text{ B},\ 1\text{ MB} = 1000\text{ KB},\ 1\text{ GB} = 1000\text{ MB},\ 1\text{ TB} = 1000\text{ GB} \).</p>
  <div style="text-align:center;margin:14px 0;">
    <svg viewBox="0 0 260 110" width="280" style="max-width:100%;background:#fff;border:1px solid #e2e8f0;border-radius:8px;">
      <rect x="20" y="80" width="30" height="15" fill="#bcd8f7" stroke="#4a90e2"/><text x="35" y="105" font-size="10" text-anchor="middle">KB</text>
      <rect x="70" y="65" width="30" height="30" fill="#9ec6f2" stroke="#4a90e2"/><text x="85" y="105" font-size="10" text-anchor="middle">MB</text>
      <rect x="120" y="45" width="30" height="50" fill="#6faeed" stroke="#4a90e2"/><text x="135" y="105" font-size="10" text-anchor="middle">GB</text>
      <rect x="170" y="20" width="30" height="75" fill="#4a90e2" stroke="#1e3a5f"/><text x="185" y="105" font-size="10" text-anchor="middle">TB</text>
    </svg>
    <div style="font-size:13px;color:#64748b;">Each step is roughly ×1000 bigger.</div>
  </div>
  <h2>📌 Samples, Bias &amp; Privacy</h2>
  <p>We rarely measure a whole <strong>population</strong> — we take a <strong>sample</strong>. A biased sample (e.g. only asking paying customers) gives misleading conclusions. Big data also raises <strong>privacy</strong> concerns: who owns it, and how is it used?</p>
  <h2>🔵 Examples</h2>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Example 1</h3><p>Convert 2 GB to MB.</p><div class="solution"><div class="step"><strong>Step 1:</strong> each step up the size ladder is ×1000, and \(1\text{ GB} = 1000\text{ MB}\).</div><div class="step"><strong>Step 2:</strong> we are going from a bigger unit (GB) to a smaller one (MB), so we <em>multiply</em>: \(2 \times 1000\).</div><em>Conclusion: \(2\text{ GB} = 2000\text{ MB}\). ✓ (more, smaller units — answer should be bigger, and it is)</em></div></div>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Example 2</h3><p>Name the "three V's" of big data and what each measures.</p><div class="solution"><div class="step"><strong>Volume</strong> — how much data there is.</div><div class="step"><strong>Velocity</strong> — how fast it arrives.</div><div class="step"><strong>Variety</strong> — how many different forms it takes (text, images, clicks, sensors).</div><em>Conclusion: Volume, Velocity, Variety. ✓</em></div></div>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Example 3</h3><p>A sensor takes 5 readings per second. How many in one minute?</p><div class="solution"><div class="step"><strong>Step 1:</strong> one minute \(= 60\) seconds.</div><div class="step"><strong>Step 2:</strong> readings \(= 5 \text{ per second} \times 60 \text{ seconds} = 300\).</div><em>Conclusion: 300 readings in one minute. ✓ (this is the "Velocity" of the data)</em></div></div>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Example 4</h3><p>Why is surveying only paying members biased?</p><div class="solution"><div class="step"><strong>Step 1:</strong> the <em>population</em> you care about is all users — but the <em>sample</em> is only paying members.</div><div class="step"><strong>Step 2:</strong> non-paying or former users are systematically left out, and they may feel very differently.</div><em>Conclusion: the sample isn't representative, so any conclusion is biased toward the views of paying members. ✓</em></div></div>
  <div class="example-box" style="background-color:#fff0f5;border-left:5px solid #c2185b;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>⭐ Advanced Example — Daily data load</h3><p>A website logs 1.2 KB per visit and gets 50 000 visits a day. How many MB per day?</p><div class="solution"><div class="step"><strong>Step 1:</strong> total per day \(= 1.2 \text{ KB} \times 50\,000 = 60\,000\) KB.</div><div class="step"><strong>Step 2:</strong> convert KB → MB by dividing by 1000: \(60\,000 \div 1000 = 60\) MB.</div><em>Conclusion: about \(60\) MB per day. ✓ (over a year that's \(60 \times 365 \approx 21\,900\) MB ≈ 22 GB — small data adds up fast)</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 1</h3><p>Convert 3 TB to GB.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: 3000 GB.</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 2</h3><p>Which "V" refers to how <em>fast</em> data arrives?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: Velocity.</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 3</h3><p>A group you want to study (e.g. all Canadian teens) is called the ___.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: population.</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 4</h3><p>Name one risk of large-scale personal data collection.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: e.g. loss of privacy, misuse, security breaches, or biased decisions.</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>⭐ Challenge Question</h3><p>A sensor records 5 readings/second. How many readings in one full day?</p><details><summary>View answer</summary><div class="solution"><div class="step">\(5 \times 60 \times 60 \times 24 = 432\,000\).</div><em>Answer: 432 000 readings.</em></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q1: What are the three V's of big data?</h3><p><em>Volume, Velocity, Variety.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q2: What is a sample?</h3><p><em>A smaller group chosen to represent the whole population.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q3: Why does sample bias matter?</h3><p><em>A non-representative sample leads to wrong conclusions.</em></p></div>
</div>` },
    ],
  },

  {
    code: "6.2", title: "One-Variable Data & Statistics", quizzes: [],
    blocks: [
      { id: bid(), type: "html", html: String.raw`<div class="lecture-box">
  <h1>📊 One-Variable Data &amp; Statistics</h1>
  <p><strong>Overview.</strong> To summarize a list of numbers we use <strong>measures of centre</strong> (mean, median, mode) and a <strong>measure of spread</strong> (range).</p>
  <h2>📌 The Three Averages</h2>
  <ul>
    <li><strong>Mean</strong> = sum ÷ count.</li>
    <li><strong>Median</strong> = middle value when sorted (average the two middle ones if even count).</li>
    <li><strong>Mode</strong> = the value that appears most often.</li>
  </ul>
  <h2>📌 Range &amp; Outliers</h2>
  <p><strong>Range</strong> = max − min. An <strong>outlier</strong> is an unusually large or small value; it pulls the <em>mean</em> but barely moves the <em>median</em> — so the median is often the fairer "typical" value.</p>
  <div style="text-align:center;margin:14px 0;">
    <svg viewBox="0 0 240 120" width="260" style="max-width:100%;background:#fff;border:1px solid #e2e8f0;border-radius:8px;">
      <rect x="20" y="70" width="28" height="40" fill="#4a90e2"/><rect x="56" y="50" width="28" height="60" fill="#4a90e2"/><rect x="92" y="30" width="28" height="80" fill="#4a90e2"/><rect x="128" y="55" width="28" height="55" fill="#4a90e2"/><rect x="164" y="85" width="28" height="25" fill="#4a90e2"/>
      <line x1="15" y1="110" x2="210" y2="110" stroke="#1e3a5f" stroke-width="1.5"/>
      <text x="110" y="120" font-size="11" text-anchor="middle" fill="#64748b">a simple histogram of frequencies</text>
    </svg>
  </div>
  <h2>🔵 Examples</h2>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Example 1</h3><p>Find the mean of \(4, 8, 6, 10, 2\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> add every value: \(4 + 8 + 6 + 10 + 2 = 30\).</div><div class="step"><strong>Step 2:</strong> count how many: there are \(5\) values.</div><div class="step"><strong>Step 3:</strong> mean \(= \dfrac{\text{sum}}{\text{count}} = \dfrac{30}{5} = 6\).</div><em>Conclusion: the mean is \(6\). ✓ (6 sits in the middle of the data — sensible)</em></div></div>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Example 2</h3><p>Find the median of \(3, 7, 9, 2, 5\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> sort smallest → largest: \(2,\ 3,\ \mathbf{5},\ 7,\ 9\).</div><div class="step"><strong>Step 2:</strong> there are 5 values (odd), so the median is the single middle one — the 3rd.</div><em>Conclusion: the median is \(5\). ✓ (two values below it, two above it)</em></div></div>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Example 3</h3><p>Find the mode of \(2, 4, 4, 6, 9, 4\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> tally how often each value appears: 2→once, 4→<strong>three</strong> times, 6→once, 9→once.</div><div class="step"><strong>Step 2:</strong> the mode is the value with the highest count.</div><em>Conclusion: the mode is \(4\) (it appears three times). ✓</em></div></div>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Example 4</h3><p>Find the range of \(12, 15, 11, 20, 17\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> identify the maximum \(= 20\) and the minimum \(= 11\).</div><div class="step"><strong>Step 2:</strong> range \(= \text{max} - \text{min} = 20 - 11\).</div><em>Conclusion: the range is \(9\). ✓ (the data spans 9 units from lowest to highest)</em></div></div>
  <div class="example-box" style="background-color:#fff0f5;border-left:5px solid #c2185b;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>⭐ Advanced Example — Find a missing value</h3><p>Five numbers have a mean of 10. Four of them are \(8, 9, 11, 12\). Find the fifth.</p><div class="solution"><div class="step"><strong>Step 1:</strong> work backwards from the mean. If the mean is 10 over 5 numbers, the total must be \(5 \times 10 = 50\).</div><div class="step"><strong>Step 2:</strong> add the four known values: \(8 + 9 + 11 + 12 = 40\).</div><div class="step"><strong>Step 3:</strong> the fifth value \(= \text{total} - \text{known sum} = 50 - 40 = 10\).</div><em>Conclusion: the fifth number is \(10\). ✓ (check: \((8+9+11+12+10)/5 = 50/5 = 10\))</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 1</h3><p>Find the mean of \(5, 10, 15\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: 10.</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 2</h3><p>Find the median of \(8, 3, 5, 9, 1, 7\) (even count).</p><details><summary>View answer</summary><div class="solution"><div class="step">Sorted: 1,3,5,7,8,9; middle two are 5 and 7. <em>Answer: 6.</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 3</h3><p>Find the mode of \(1, 2, 2, 3, 3, 3, 4\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: 3.</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 4</h3><p>Why might the median beat the mean for "typical" house price?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: a few very expensive homes (outliers) inflate the mean; the median is unaffected.</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>⭐ Challenge Question</h3><p>The mean height of 4 players is 180 cm. A fifth joins and the mean becomes 182 cm. How tall is the fifth player?</p><details><summary>View answer</summary><div class="solution"><div class="step">New total \(= 5 \times 182 = 910\); old total \(= 4 \times 180 = 720\).</div><em>Answer: \(910 - 720 = 190\) cm.</em></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q1: How do I find the mean?</h3><p><em>Add all values, divide by how many there are.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q2: What is the median of an even-sized list?</h3><p><em>The average of the two middle values after sorting.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q3: What does range measure?</h3><p><em>The spread: maximum minus minimum.</em></p></div>
</div>` },
    ],
  },

  {
    code: "6.3", title: "Scatter Plots & Correlation", quizzes: [],
    blocks: [
      { id: bid(), type: "html", html: String.raw`<div class="lecture-box">
  <h1>📈 Scatter Plots &amp; Correlation</h1>
  <p><strong>Overview.</strong> A <strong>scatter plot</strong> shows pairs of values as points. <strong>Correlation</strong> describes whether they tend to move together.</p>
  <h2>📌 Types of Correlation</h2>
  <ul>
    <li><strong>Positive</strong>: as \(x\) increases, \(y\) increases (line of best fit slopes up).</li>
    <li><strong>Negative</strong>: as \(x\) increases, \(y\) decreases (slopes down).</li>
    <li><strong>No correlation</strong>: points show no clear pattern.</li>
  </ul>
  <div style="text-align:center;margin:14px 0;">
    <svg viewBox="0 0 330 110" width="330" style="max-width:100%;background:#fff;border:1px solid #e2e8f0;border-radius:8px;">
      <g>
        <line x1="15" y1="90" x2="95" y2="90" stroke="#1e3a5f" stroke-width="1.2"/><line x1="15" y1="90" x2="15" y2="15" stroke="#1e3a5f" stroke-width="1.2"/>
        <circle cx="25" cy="80" r="2.5" fill="#4a90e2"/><circle cx="38" cy="72" r="2.5" fill="#4a90e2"/><circle cx="50" cy="60" r="2.5" fill="#4a90e2"/><circle cx="62" cy="48" r="2.5" fill="#4a90e2"/><circle cx="78" cy="34" r="2.5" fill="#4a90e2"/><circle cx="88" cy="26" r="2.5" fill="#4a90e2"/>
        <line x1="20" y1="84" x2="92" y2="24" stroke="#c2185b" stroke-width="1.3" stroke-dasharray="3,2"/>
        <text x="55" y="105" font-size="10" text-anchor="middle" fill="#64748b">positive</text>
      </g>
      <g transform="translate(110,0)">
        <line x1="15" y1="90" x2="95" y2="90" stroke="#1e3a5f" stroke-width="1.2"/><line x1="15" y1="90" x2="15" y2="15" stroke="#1e3a5f" stroke-width="1.2"/>
        <circle cx="25" cy="28" r="2.5" fill="#4a90e2"/><circle cx="38" cy="38" r="2.5" fill="#4a90e2"/><circle cx="50" cy="52" r="2.5" fill="#4a90e2"/><circle cx="62" cy="62" r="2.5" fill="#4a90e2"/><circle cx="78" cy="76" r="2.5" fill="#4a90e2"/><circle cx="88" cy="82" r="2.5" fill="#4a90e2"/>
        <line x1="20" y1="26" x2="92" y2="84" stroke="#c2185b" stroke-width="1.3" stroke-dasharray="3,2"/>
        <text x="55" y="105" font-size="10" text-anchor="middle" fill="#64748b">negative</text>
      </g>
      <g transform="translate(220,0)">
        <line x1="15" y1="90" x2="95" y2="90" stroke="#1e3a5f" stroke-width="1.2"/><line x1="15" y1="90" x2="15" y2="15" stroke="#1e3a5f" stroke-width="1.2"/>
        <circle cx="28" cy="40" r="2.5" fill="#4a90e2"/><circle cx="44" cy="70" r="2.5" fill="#4a90e2"/><circle cx="55" cy="32" r="2.5" fill="#4a90e2"/><circle cx="66" cy="58" r="2.5" fill="#4a90e2"/><circle cx="80" cy="44" r="2.5" fill="#4a90e2"/><circle cx="86" cy="74" r="2.5" fill="#4a90e2"/>
        <text x="55" y="105" font-size="10" text-anchor="middle" fill="#64748b">no correlation</text>
      </g>
    </svg>
    <div style="font-size:13px;color:#64748b;">The dashed line is the line of best fit; flat/no line means no correlation.</div>
  </div>
  <h2>📌 Line of Best Fit</h2>
  <p>A straight line drawn through the trend of the points. Its equation \( y = mx + b \) lets us <strong>predict</strong>. Use the slider below to "fit" a line.</p>
  <h2>📌 Interpolation vs Extrapolation; Causation</h2>
  <p><strong>Interpolation</strong> predicts <em>within</em> the data range (reliable); <strong>extrapolation</strong> predicts <em>beyond</em> it (risky). And <strong>correlation does not imply causation</strong> — a hidden "lurking" variable may be the real cause.</p>
  <h2>🔵 Examples</h2>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Example 1</h3><p>Hours studied vs test score rise together. What correlation?</p><div class="solution"><div class="step"><strong>Step 1:</strong> ask how \(y\) moves as \(x\) increases — here, more hours (\(x\)↑) go with higher scores (\(y\)↑).</div><div class="step"><strong>Step 2:</strong> both move the <em>same</em> direction, so the best-fit line slopes <em>up</em>.</div><em>Conclusion: positive correlation. ✓</em></div></div>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Example 2</h3><p>Outside temperature vs heating cost. What correlation?</p><div class="solution"><div class="step"><strong>Step 1:</strong> as temperature rises (\(x\)↑), you run the heater less, so cost falls (\(y\)↓).</div><div class="step"><strong>Step 2:</strong> they move in <em>opposite</em> directions, so the best-fit line slopes <em>down</em>.</div><em>Conclusion: negative correlation. ✓</em></div></div>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Example 3</h3><p>Find the slope of the best-fit line through \((0,2)\) and \((5,12)\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> slope \(= \dfrac{\text{rise}}{\text{run}} = \dfrac{y_2 - y_1}{x_2 - x_1} = \dfrac{12-2}{5-0}\).</div><div class="step"><strong>Step 2:</strong> \(\dfrac{10}{5} = 2\).</div><em>Conclusion: slope \(= 2\) — \(y\) rises 2 for every 1 unit of \(x\). ✓ (positive slope ⇒ positive correlation)</em></div></div>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Example 4</h3><p>Best-fit line \(y = 3x + 5\). Predict the score for 4 study hours.</p><div class="solution"><div class="step"><strong>Step 1:</strong> substitute \(x = 4\) into the equation: \(y = 3(4) + 5\).</div><div class="step"><strong>Step 2:</strong> \(3(4) = 12\), then \(12 + 5 = 17\).</div><em>Conclusion: a predicted score of about 17. ✓ (this is interpolation if 4 is inside the data range)</em></div></div>
  <div class="example-box" style="background-color:#fff0f5;border-left:5px solid #c2185b;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>⭐ Advanced Example — Causation trap</h3><p>Ice-cream sales and drowning incidents are positively correlated. Does ice cream cause drowning?</p><div class="solution"><div class="step"><strong>Step 1:</strong> the data really do rise together — the correlation is real.</div><div class="step"><strong>Step 2:</strong> but look for a <em>lurking variable</em>: hot weather independently drives BOTH ice-cream sales and swimming (so drownings).</div><em>Conclusion: no — ice cream does not cause drowning; correlation ≠ causation. ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 1</h3><p>As \(x\) goes up, \(y\) goes down. What correlation?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: negative.</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 2</h3><p>Random scattered points with no trend show ___ correlation.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: no (zero) correlation.</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 3</h3><p>Find the slope of the best-fit line through \((1,3)\) and \((4,9)\).</p><details><summary>View answer</summary><div class="solution"><div class="step">\(\frac{9-3}{4-1} = \frac{6}{3}\). <em>Answer: 2.</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 4</h3><p>Using \(y = 2x + 1\), predict \(y\) when \(x = 6\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: 13.</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>⭐ Challenge Question</h3><p>Best-fit \(y = 3x + 5\) was built from 1–6 study hours. Why is predicting the score for 20 hours unreliable?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: 20 is far outside the data range — that's extrapolation, and the linear trend may not hold (scores cap at 100).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q1: What does a line of best fit do?</h3><p><em>Summarizes the trend so you can make predictions.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q2: Interpolation vs extrapolation?</h3><p><em>Predicting inside the data range (safer) vs beyond it (riskier).</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q3: Does correlation prove causation?</h3><p><em>No — a lurking variable may cause both.</em></p></div>
</div>` },
      graph("a*x + 2", "a", { xMin: 0, xMax: 10, yMin: -4, yMax: 14, paramMin: -2, paramMax: 2, paramInit: 1, caption: "Line of best fit y = mx + b. Slide the slope m: m > 0 is positive correlation, m < 0 is negative, m ≈ 0 is no correlation." }),
    ],
  },

  {
    code: "6.4", title: "The Mathematical Modelling Process", quizzes: [],
    blocks: [
      { id: bid(), type: "html", html: String.raw`<div class="lecture-box">
  <h1>🔧 The Mathematical Modelling Process</h1>
  <p><strong>Overview.</strong> A <strong>mathematical model</strong> is an equation or rule that describes a real situation so we can analyze and predict. Building one follows a repeatable cycle.</p>
  <h2>📌 The Modelling Cycle</h2>
  <ol>
    <li><strong>Understand</strong> the problem.</li>
    <li><strong>Make assumptions</strong> and choose variables.</li>
    <li><strong>Build</strong> the model (often \( y = mx + b \)).</li>
    <li><strong>Analyze &amp; test</strong> it against real data.</li>
    <li><strong>Interpret &amp; revise</strong> — repeat if needed.</li>
  </ol>
  <div style="text-align:center;margin:14px 0;">
    <svg viewBox="0 0 300 130" width="320" style="max-width:100%;background:#fff;border:1px solid #e2e8f0;border-radius:8px;">
      <rect x="8" y="50" width="50" height="30" rx="5" fill="#e6f3ff" stroke="#4a90e2"/><text x="33" y="69" font-size="9" text-anchor="middle" fill="#1e3a5f">Understand</text>
      <rect x="70" y="50" width="50" height="30" rx="5" fill="#e6f3ff" stroke="#4a90e2"/><text x="95" y="69" font-size="9" text-anchor="middle" fill="#1e3a5f">Assume</text>
      <rect x="132" y="50" width="46" height="30" rx="5" fill="#e6f3ff" stroke="#4a90e2"/><text x="155" y="69" font-size="9" text-anchor="middle" fill="#1e3a5f">Build</text>
      <rect x="190" y="50" width="46" height="30" rx="5" fill="#e6f3ff" stroke="#4a90e2"/><text x="213" y="69" font-size="9" text-anchor="middle" fill="#1e3a5f">Test</text>
      <rect x="248" y="50" width="46" height="30" rx="5" fill="#cfe8ff" stroke="#4a90e2"/><text x="271" y="65" font-size="9" text-anchor="middle" fill="#1e3a5f">Interpret</text><text x="271" y="75" font-size="9" text-anchor="middle" fill="#1e3a5f">/Revise</text>
      <line x1="58" y1="65" x2="68" y2="65" stroke="#4a90e2" stroke-width="1.5" marker-end="url(#ar64)"/>
      <line x1="120" y1="65" x2="130" y2="65" stroke="#4a90e2" stroke-width="1.5" marker-end="url(#ar64)"/>
      <line x1="178" y1="65" x2="188" y2="65" stroke="#4a90e2" stroke-width="1.5" marker-end="url(#ar64)"/>
      <line x1="236" y1="65" x2="246" y2="65" stroke="#4a90e2" stroke-width="1.5" marker-end="url(#ar64)"/>
      <path d="M271,50 C271,20 33,20 33,50" fill="none" stroke="#c2185b" stroke-width="1.4" stroke-dasharray="4,3" marker-end="url(#ar64b)"/>
      <text x="152" y="18" font-size="9" text-anchor="middle" fill="#c2185b">revise &amp; repeat</text>
      <defs>
        <marker id="ar64" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#4a90e2"/></marker>
        <marker id="ar64b" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#c2185b"/></marker>
      </defs>
    </svg>
    <div style="font-size:13px;color:#64748b;">Modelling is a loop, not a straight line — testing often sends you back to revise.</div>
  </div>
  <h2>📌 Reading a Linear Model</h2>
  <p>In \( C = 15n + 40 \): the \(40\) is the <strong>fixed cost</strong> (start value) and \(15\) is the <strong>rate</strong> (cost per item). Slide the rate below to see how the model line changes.</p>
  <h2>🔵 Examples</h2>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Example 1</h3><p>In \(C = 15n + 40\), state the fixed cost and cost per item.</p><div class="solution"><div class="step"><strong>Step 1:</strong> match the model to \(y = mx + b\): here \(b = 40\) (the constant) and \(m = 15\) (the coefficient of \(n\)).</div><div class="step"><strong>Step 2:</strong> \(b\) is the value when \(n = 0\) — the cost before making anything = the <em>fixed cost</em>; \(m\) is the per-item <em>rate</em>.</div><em>Conclusion: fixed cost $40, and $15 per item. ✓</em>${gframe(["y = 15*x + 40"], { title: "C = 15n + 40: fixed cost 40 (y-intercept) plus 15 per item (slope)" })}</div></div>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Example 2</h3><p>Using \(C = 15n + 40\), find the cost for 12 items.</p><div class="solution"><div class="step"><strong>Step 1:</strong> substitute \(n = 12\): \(C = 15(12) + 40\).</div><div class="step"><strong>Step 2:</strong> \(15 \times 12 = 180\), then \(180 + 40 = 220\).</div><em>Conclusion: the cost is $220. ✓</em></div></div>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Example 3</h3><p>A taxi charges $3.50 plus $1.75/km. Write the model for cost vs distance \(d\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> identify the fixed part ($3.50, charged no matter what) → that's \(b\).</div><div class="step"><strong>Step 2:</strong> identify the rate ($1.75 per km) → that's \(m\), the coefficient of \(d\).</div><em>Conclusion: \(C = 1.75d + 3.50\). ✓ (check: at \(d = 0\), \(C = $3.50\), the base fare)</em>${gframe(["y = 1.75*x + 3.5"], { title: "taxi model C = 1.75d + 3.50: base fare 3.50, rising 1.75 per km" })}</div></div>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Example 4</h3><p>List the modelling cycle stages in order.</p><div class="solution"><div class="step"><strong>Step 1:</strong> start by making sense of the situation, then set up.</div><div class="step"><strong>Step 2:</strong> the full loop: <strong>understand → assume → build → test → interpret/revise</strong> (then repeat).</div><em>Conclusion: understand → assume → build → test → interpret/revise. ✓</em></div></div>
  <div class="example-box" style="background-color:#fff0f5;border-left:5px solid #c2185b;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>⭐ Advanced Example — Draining pool</h3><p>A pool drains at 50 L/min from 3000 L. Write a model for volume \(V\) vs time \(t\), and find when it is empty.</p><div class="solution"><div class="step"><strong>Step 1:</strong> start value is 3000 L; it <em>decreases</em> by 50 each minute, so the rate is \(-50\): \(V = 3000 - 50t\).</div><div class="step"><strong>Step 2:</strong> "empty" means \(V = 0\): set \(3000 - 50t = 0\).</div><div class="step"><strong>Step 3:</strong> \(50t = 3000\), so \(t = 3000 \div 50 = 60\).</div><em>Conclusion: the pool is empty after 60 minutes. ✓ (check: \(V = 3000 - 50(60) = 0\))</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 1</h3><p>In \(C = 0.10m + 25\), what is the fixed monthly cost?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: $25.</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 2</h3><p>Using \(C = 0.10m + 25\), find the cost for 300 minutes.</p><details><summary>View answer</summary><div class="solution"><div class="step">\(0.10(300) + 25 = 30 + 25\). <em>Answer: $55.</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 3</h3><p>What is the first stage of the modelling process?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: understand the problem.</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question 4</h3><p>Why must a model be tested and sometimes revised?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Answer: assumptions may be wrong; testing against real data shows where it must improve.</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>⭐ Challenge Question</h3><p>You model weekly savings as \(S = 20w + 50\). Interpret the 20 and the 50, then predict savings after 8 weeks.</p><details><summary>View answer</summary><div class="solution"><div class="step">50 = starting savings; 20 = saved per week. \(S = 20(8) + 50 = 210\).</div><em>Answer: $210 after 8 weeks.</em></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q1: What is a mathematical model?</h3><p><em>An equation or rule that describes a real situation for analysis and prediction.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q2: What do the numbers in \(y = mx + b\) mean in a model?</h3><p><em>\(b\) is the start/fixed value; \(m\) is the rate of change.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q3: Is modelling a one-time step?</h3><p><em>No — it's a cycle: build, test, interpret, and revise.</em></p></div>
</div>` },
      graph("a*x + 40", "a", { xMin: 0, xMax: 20, yMin: 0, yMax: 400, paramMin: 5, paramMax: 25, paramInit: 15, caption: "Cost model C = (rate)·n + 40. Slide the rate (cost per item) and watch the model line tilt; the 40 fixed cost stays put." }),
    ],
  },

  {
    code: "7.1", title: "Making Financial Decisions", quizzes: [],
    blocks: [
      { id: bid(), type: "html", html: String.raw`<div class="lecture-box">
  <h1>💵 Making Financial Decisions</h1>
  <p>Smart money choices come down to <strong>comparing options with math</strong>: separating <strong>fixed</strong> from <strong>variable</strong> costs, finding the <strong>unit price</strong>, and locating the <strong>break-even point</strong> where one option overtakes another.</p>

  <div style="background:#f8faff;border:1px solid #cde3ff;border-radius:18px;padding:16px 20px;margin:20px 0;box-shadow:0 2px 6px rgba(0,0,0,0.04);">
    <h2 style="margin-top:0;">📐 Key Ideas</h2>
    <ul style="margin:8px 0 6px 22px;line-height:1.9;">
      <li><span style="background:#2c6e9e;color:#fff;padding:2px 10px;border-radius:30px;font-size:0.8rem;font-weight:700;margin-right:8px;">F</span><strong>Fixed cost:</strong> the same no matter how much you use (e.g. a $30 monthly fee).</li>
      <li><span style="background:#e69138;color:#fff;padding:2px 10px;border-radius:30px;font-size:0.8rem;font-weight:700;margin-right:8px;">V</span><strong>Variable cost:</strong> grows with usage (e.g. $0.05 per text).</li>
      <li><span style="background:#2e9e6e;color:#fff;padding:2px 10px;border-radius:30px;font-size:0.8rem;font-weight:700;margin-right:8px;">U</span><strong>Unit price</strong> \( = \dfrac{\text{total cost}}{\text{quantity}} \) — the great equalizer for comparing sizes.</li>
      <li><span style="background:#7c3aed;color:#fff;padding:2px 10px;border-radius:30px;font-size:0.8rem;font-weight:700;margin-right:8px;">=</span><strong>Break-even:</strong> set the two cost equations equal and solve.</li>
    </ul>
    <p style="margin:8px 0 0;">💡 A total-cost model usually looks like \( C = (\text{variable rate})\,x + (\text{fixed cost}) \).</p>
  </div>

  <h2>🎬 Plan A vs Plan B</h2>
  <p>Plan A is a flat $40. Plan B is $15 plus $0.50/GB. The tracer rides up Plan B until it crosses Plan A — that crossing is the break-even point.</p>
  <div style="text-align:center;margin:16px 0;">
    <svg viewBox="0 0 340 240" width="360" style="max-width:100%;background:#fff;border:1px solid #e2e8f0;border-radius:14px;">
      <line x1="40" y1="200" x2="320" y2="200" stroke="#94a3b8" stroke-width="1.5"/>
      <line x1="40" y1="20" x2="40" y2="200" stroke="#94a3b8" stroke-width="1.5"/>
      <text x="300" y="216" font-size="11" fill="#64748b">GB</text>
      <text x="8" y="28" font-size="11" fill="#64748b">$ cost</text>
      <!-- Plan A flat 40: y_px = 200 - 40*3 = 80 -->
      <line x1="40" y1="80" x2="320" y2="80" stroke="#4a90e2" stroke-width="3"/>
      <text x="250" y="74" font-size="12" fill="#1e3a5f" font-weight="700">Plan A: $40</text>
      <!-- Plan B: 15 + 0.5x; at x=0 -> 15 -> y=155; at x=80 -> 55 -> y=35 -->
      <line x1="40" y1="155" x2="320" y2="35" stroke="#e69138" stroke-width="3"/>
      <text x="120" y="150" font-size="12" fill="#9a5b00" font-weight="700">Plan B: 15 + 0.5·GB</text>
      <!-- break-even at x=50 -> px 40 + 50*3.5=215; cost 40 -> y 80 -->
      <circle cx="215" cy="80" r="6" fill="#c2185b"><animate attributeName="r" values="5;8;5" dur="1.6s" repeatCount="indefinite"/></circle>
      <text x="200" y="100" font-size="11" fill="#c2185b" font-weight="700">break-even ≈ 50 GB</text>
    </svg>
    <div style="font-size:13px;color:#64748b;">Below 50 GB, Plan B wins; above it, Plan A's flat fee is cheaper.</div>
  </div>

  <h2>🔵 Examples (Application &amp; Challenge)</h2>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:12px 16px;margin:16px 0;border-radius:16px;"><h3>📌 Example 1 — Build a cost model</h3><p>A phone plan is $30/month plus $0.05/text. Write the monthly cost \( C \) for \( t \) texts.</p><div class="solution"><div class="step"><strong>Step 1:</strong> the $30 is fixed (charged even for 0 texts) → constant term.</div><div class="step"><strong>Step 2:</strong> the $0.05 is the rate per text → coefficient of \( t \): \( 0.05t \).</div><em>✅ \( C = 0.05t + 30 \). (check: 0 texts → $30, the fixed fee)</em></div></div>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:12px 16px;margin:16px 0;border-radius:16px;"><h3>📌 Example 2 — Break-even</h3><p>Plan A: $40 flat. Plan B: $15 + $0.50/GB. For how many GB is Plan B cheaper?</p><div class="solution"><div class="step"><strong>Step 1:</strong> set equal: \( 15 + 0.5g = 40 \).</div><div class="step"><strong>Step 2:</strong> \( 0.5g = 25 \Rightarrow g = 50 \).</div><em>✅ Plan B is cheaper below 50 GB; above 50 GB choose Plan A.</em></div></div>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:12px 16px;margin:16px 0;border-radius:16px;"><h3>📌 Example 3 — Unit price</h3><p>A 750 mL juice costs $3.00; a 2 L bottle costs $7.20. Which is the better deal?</p><div class="solution"><div class="step"><strong>Step 1:</strong> small: \( 3.00 / 0.75 = \$4.00 \)/L.</div><div class="step"><strong>Step 2:</strong> large: \( 7.20 / 2 = \$3.60 \)/L.</div><em>✅ The 2 L bottle is better by $0.40/L.</em></div></div>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:12px 16px;margin:16px 0;border-radius:16px;"><h3>📌 Example 4 — Tax changes the winner</h3><p>Store A: $900, no tax. Store B: $820 + 13% tax. Which is cheaper?</p><div class="solution"><div class="step"><strong>Step 1:</strong> add 13% tax to B by multiplying by \( 1.13 \): \( 820 \times 1.13 = \$926.60 \).</div><div class="step"><strong>Step 2:</strong> compare totals: A = $900 vs B = $926.60.</div><em>✅ Store A is cheaper by $26.60 — the lower sticker price (B) lost once tax was added.</em></div></div>
  <div class="example-box" style="background-color:#fff0f5;border-left:5px solid #c2185b;padding:12px 16px;margin:16px 0;border-radius:16px;"><h3>⭐ Example 5 (Challenge) — Three-way compare</h3><p>Gym X: $25 join + $18/month. Gym Y: $40/month, no join fee. Over one year, which costs less, and when do they break even?</p><div class="solution"><div class="step"><strong>Step 1:</strong> X: \( 25 + 18(12) = \$241 \). Y: \( 40(12) = \$480 \).</div><div class="step"><strong>Step 2:</strong> break-even: \( 25 + 18m = 40m \Rightarrow 25 = 22m \Rightarrow m \approx 1.1 \) months.</div><em>✅ After about 1 month, Gym X is cheaper; over a year it saves $239.</em></div></div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:12px 16px;margin:16px 0;border-radius:16px;"><h3>📝 Question 1</h3><p>A gym charges $25 to join plus $18/month. Write the cost model and find the one-year total.</p><details><summary>🔎 Show Answer</summary><div class="solution"><div class="step">\( C = 18m + 25 \); one year: \( 18(12)+25 = \$241 \).</div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:12px 16px;margin:16px 0;border-radius:16px;"><h3>📝 Question 2</h3><p>You earn $60 for 5 hours of tutoring. Find the hourly rate and earnings for 13 hours.</p><details><summary>🔎 Show Answer</summary><div class="solution"><div class="step">Rate \( = 60/5 = \$12 \)/h; \( 12 \times 13 = \$156 \).</div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:12px 16px;margin:16px 0;border-radius:16px;"><h3>📝 Question 3</h3><p>Which is the better unit price: 500 g for $4.00 or 1.2 kg for $8.40?</p><details><summary>🔎 Show Answer</summary><div class="solution"><div class="step">\( 4/0.5 = \$8 \)/kg vs \( 8.40/1.2 = \$7 \)/kg. <em>The 1.2 kg is better.</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:12px 16px;margin:16px 0;border-radius:16px;"><h3>📝 Question 4</h3><p>Give one reason the lowest sticker price may not be the best decision.</p><details><summary>🔎 Show Answer</summary><div class="solution"><div class="step"><em>e.g. taxes, shipping, durability/quality, warranty, or ongoing fees.</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:12px 16px;margin:16px 0;border-radius:16px;"><h3>⭐ Question 5 (Challenge)</h3><p>Plan A: $50 flat. Plan B: $20 + $3/hour. For how many hours is Plan A the better choice?</p><details><summary>🔎 Show Answer</summary><div class="solution"><div class="step">\( 20 + 3h = 50 \Rightarrow h = 10 \). <em>Plan A is better for more than 10 hours.</em></div></div></details></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #2c6e9e;padding:10px 14px;margin:10px 0;border-radius:12px;"><h3>Q1: Fixed vs variable cost?</h3><p><em>Fixed stays constant; variable grows with how much you use.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #2c6e9e;padding:10px 14px;margin:10px 0;border-radius:12px;"><h3>Q2: What is a unit price?</h3><p><em>Cost per single unit (per litre, per kg) — lets you compare sizes fairly.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #2c6e9e;padding:10px 14px;margin:10px 0;border-radius:12px;"><h3>Q3: How do you find a break-even point?</h3><p><em>Set the two cost equations equal and solve for the quantity.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #2c6e9e;padding:10px 14px;margin:10px 0;border-radius:12px;"><h3>Q4: Needs vs wants?</h3><p><em>Needs are essentials (food, rent); wants are optional. Prioritize needs.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #2c6e9e;padding:10px 14px;margin:10px 0;border-radius:12px;"><h3>Q5: Why include tax when comparing prices?</h3><p><em>After-tax totals can flip which option is actually cheaper.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #2c6e9e;padding:10px 14px;margin:10px 0;border-radius:12px;"><h3>Q6: What shape is a "flat fee" cost graph?</h3><p><em>A horizontal line — the cost doesn't change with usage.</em></p></div>

  <div style="background:#e9f3fb;border-radius:18px;padding:14px 18px;margin-top:18px;">
    <p style="margin:0;">🧠 <strong>Pro Tip:</strong> Turn every offer into an equation \( C = rx + f \). Two equations + "set equal" answers almost any "which is cheaper?" question.</p>
  </div>
</div>` },
      mg([{ expr: "40", label: "Plan A: $40 flat" }, { expr: "15 + 0.5*x", label: "Plan B: 15 + 0.5·GB" }], { markIntersection: true, xMin: 0, xMax: 80, yMin: 0, yMax: 60, caption: "The marked crossing is the break-even point (≈ 50 GB). Left of it Plan B wins; right of it Plan A wins." }),
    ],
  },

  {
    code: "7.2", title: "Appreciation & Depreciation", quizzes: [],
    blocks: [
      { id: bid(), type: "html", html: String.raw`<div class="lecture-box">
  <h1>📉 Appreciation &amp; Depreciation</h1>
  <p>Some things gain value over time (<strong>appreciation</strong> — houses, collectibles), others lose it (<strong>depreciation</strong> — cars, phones). Both change by a <em>percentage each period</em>, so we model them with <strong>repeated multiplication</strong>, not repeated subtraction.</p>

  <div style="background:#f8faff;border:1px solid #cde3ff;border-radius:18px;padding:16px 20px;margin:20px 0;box-shadow:0 2px 6px rgba(0,0,0,0.04);">
    <h2 style="margin-top:0;">📐 The Growth-Factor Formula</h2>
    <p style="margin:6px 0;">\[ V = V_0 \,(1 \pm r)^n \]</p>
    <ul style="margin:8px 0 6px 22px;line-height:1.9;">
      <li><strong>\( V_0 \)</strong> = starting value, <strong>\( r \)</strong> = rate (as a decimal), <strong>\( n \)</strong> = number of periods.</li>
      <li><span style="background:#2e9e6e;color:#fff;padding:2px 10px;border-radius:30px;font-size:0.8rem;font-weight:700;margin-right:8px;">↑</span><strong>Appreciation:</strong> use \( (1 + r) \). E.g. +5% ⇒ factor \( 1.05 \).</li>
      <li><span style="background:#c2185b;color:#fff;padding:2px 10px;border-radius:30px;font-size:0.8rem;font-weight:700;margin-right:8px;">↓</span><strong>Depreciation:</strong> use \( (1 - r) \). E.g. −15% ⇒ factor \( 0.85 \).</li>
    </ul>
  </div>

  <h2>🎬 Growth Factor in Action</h2>
  <p>The bars show a $1000 asset over 4 years. Green grows at +10%/year (appreciation); red shrinks at −20%/year (depreciation).</p>
  <div style="text-align:center;margin:16px 0;">
    <svg viewBox="0 0 360 200" width="380" style="max-width:100%;background:#fff;border:1px solid #e2e8f0;border-radius:14px;">
      <line x1="30" y1="170" x2="350" y2="170" stroke="#94a3b8" stroke-width="1.5"/>
      <!-- appreciation 1000,1100,1210,1331,1464 scaled /10 -->
      <g fill="#2e9e6e">
        <rect x="40" y="70" width="22" height="100"><animate attributeName="height" values="0;100" dur="1s" fill="freeze"/><animate attributeName="y" values="170;70" dur="1s" fill="freeze"/></rect>
        <rect x="70" y="60" width="22" height="110"><animate attributeName="height" values="0;110" dur="1.1s" fill="freeze"/><animate attributeName="y" values="170;60" dur="1.1s" fill="freeze"/></rect>
        <rect x="100" y="49" width="22" height="121"><animate attributeName="height" values="0;121" dur="1.2s" fill="freeze"/><animate attributeName="y" values="170;49" dur="1.2s" fill="freeze"/></rect>
        <rect x="130" y="37" width="22" height="133"><animate attributeName="height" values="0;133" dur="1.3s" fill="freeze"/><animate attributeName="y" values="170;37" dur="1.3s" fill="freeze"/></rect>
      </g>
      <text x="95" y="188" font-size="11" fill="#1c5c43" font-weight="700">appreciation +10%</text>
      <!-- depreciation 1000,800,640,512 scaled /10 -->
      <g fill="#c2185b">
        <rect x="230" y="70" width="22" height="100"><animate attributeName="height" values="0;100" dur="1s" fill="freeze"/><animate attributeName="y" values="170;70" dur="1s" fill="freeze"/></rect>
        <rect x="260" y="90" width="22" height="80"><animate attributeName="height" values="0;80" dur="1.1s" fill="freeze"/><animate attributeName="y" values="170;90" dur="1.1s" fill="freeze"/></rect>
        <rect x="290" y="106" width="22" height="64"><animate attributeName="height" values="0;64" dur="1.2s" fill="freeze"/><animate attributeName="y" values="170;106" dur="1.2s" fill="freeze"/></rect>
        <rect x="320" y="119" width="22" height="51"><animate attributeName="height" values="0;51" dur="1.3s" fill="freeze"/><animate attributeName="y" values="170;119" dur="1.3s" fill="freeze"/></rect>
      </g>
      <text x="285" y="188" font-size="11" fill="#8a1340" font-weight="700">depreciation −20%</text>
    </svg>
    <div style="font-size:13px;color:#64748b;">Equal % change compounds: the gap widens every year.</div>
  </div>

  <h2>🔵 Examples (Application &amp; Challenge)</h2>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:12px 16px;margin:16px 0;border-radius:16px;"><h3>📌 Example 1 — One year up</h3><p>A $1000 asset appreciates 5% in a year. Find its value.</p><div class="solution"><div class="step"><strong>Step 1:</strong> +5% means a growth factor of \( 1 + 0.05 = 1.05 \).</div><div class="step"><strong>Step 2:</strong> multiply the start value by the factor: \( 1000 \times 1.05 = 1050 \).</div><em>✅ $1050. (check: a $50 gain is exactly 5% of $1000)</em></div></div>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:12px 16px;margin:16px 0;border-radius:16px;"><h3>📌 Example 2 — One year down</h3><p>A $1000 asset depreciates 10% in a year. Find its value.</p><div class="solution"><div class="step"><strong>Step 1:</strong> −10% means a growth factor of \( 1 - 0.10 = 0.90 \).</div><div class="step"><strong>Step 2:</strong> multiply: \( 1000 \times 0.90 = 900 \).</div><em>✅ $900. (check: a $100 loss is 10% of $1000)</em></div></div>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:12px 16px;margin:16px 0;border-radius:16px;"><h3>📌 Example 3 — Write the model</h3><p>Write the value of a $1000 asset after \( n \) years at 5% appreciation.</p><div class="solution"><div class="step"><strong>Step 1:</strong> use \( V = V_0(1+r)^n \) with \( V_0 = 1000 \) and \( r = 0.05 \).</div><div class="step"><strong>Step 2:</strong> the factor \( 1+r = 1.05 \) is applied once per year, so it is raised to the power \( n \).</div><em>✅ \( V = 1000(1.05)^n \). (check: \( n=1 \) gives $1050, matching Example 1)</em></div></div>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:12px 16px;margin:16px 0;border-radius:16px;"><h3>📌 Example 4 — Car after 2 years</h3><p>A $20 000 car depreciates 15%/year. Find its value after 2 years.</p><div class="solution"><div class="step"><strong>Step 1:</strong> −15%/year means factor \( 0.85 \); over 2 years apply it twice: \( 0.85^2 = 0.7225 \).</div><div class="step"><strong>Step 2:</strong> \( 20000 \times 0.7225 = 14450 \).</div><em>✅ $14 450. (check: year 1 → $17 000, year 2 → $14 450)</em></div></div>
  <div class="example-box" style="background-color:#fff0f5;border-left:5px solid #c2185b;padding:12px 16px;margin:16px 0;border-radius:16px;"><h3>⭐ Example 5 (Challenge) — When does it pass a target?</h3><p>Art worth $5000 appreciates 6%/year. In how many whole years does it first exceed $6000?</p><div class="solution"><div class="step"><strong>Step 1:</strong> \( 5000(1.06)^n > 6000 \Rightarrow 1.06^n > 1.2 \).</div><div class="step"><strong>Step 2:</strong> test: \( 1.06^3 = 1.191 \) (no), \( 1.06^4 = 1.262 \) (yes).</div><em>✅ After 4 years (≈ $6312).</em></div></div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:12px 16px;margin:16px 0;border-radius:16px;"><h3>📝 Question 1</h3><p>A $2000 item appreciates 10% in one year. New value?</p><details><summary>🔎 Show Answer</summary><div class="solution"><div class="step">\( 2000 \times 1.10 = \$2200 \).</div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:12px 16px;margin:16px 0;border-radius:16px;"><h3>📝 Question 2</h3><p>State the growth factor for (a) 8% appreciation and (b) 8% depreciation.</p><details><summary>🔎 Show Answer</summary><div class="solution"><div class="step">(a) \( 1.08 \) (b) \( 0.92 \).</div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:12px 16px;margin:16px 0;border-radius:16px;"><h3>📝 Question 3</h3><p>A house worth $300 000 appreciates 4%/year. Value after 3 years (nearest dollar)?</p><details><summary>🔎 Show Answer</summary><div class="solution"><div class="step">\( 300000 \times 1.04^3 = 300000 \times 1.124864 \approx \$337 459 \).</div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:12px 16px;margin:16px 0;border-radius:16px;"><h3>📝 Question 4</h3><p>A $1200 phone depreciates 25%/year. Worth after 3 years?</p><details><summary>🔎 Show Answer</summary><div class="solution"><div class="step">\( 1200 \times 0.75^3 = 1200 \times 0.421875 = \$506.25 \).</div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:12px 16px;margin:16px 0;border-radius:16px;"><h3>⭐ Question 5 (Challenge)</h3><p>Why does subtracting a fixed $100/year give a different answer than depreciating 10%/year on $1000?</p><details><summary>🔎 Show Answer</summary><div class="solution"><div class="step"><em>Percent loss shrinks as the value shrinks (×0.9 each year), so it never reaches zero; subtracting a fixed amount is linear and would hit zero in 10 years.</em></div></div></details></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #2c6e9e;padding:10px 14px;margin:10px 0;border-radius:12px;"><h3>Q1: What is appreciation?</h3><p><em>An increase in value over time.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #2c6e9e;padding:10px 14px;margin:10px 0;border-radius:12px;"><h3>Q2: What is the depreciation growth factor for −20%?</h3><p><em>\( 0.80 \).</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #2c6e9e;padding:10px 14px;margin:10px 0;border-radius:12px;"><h3>Q3: Why repeated multiplication, not subtraction?</h3><p><em>The percent applies to the current (changing) value each period.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #2c6e9e;padding:10px 14px;margin:10px 0;border-radius:12px;"><h3>Q4: Write the general formula.</h3><p><em>\( V = V_0(1 \pm r)^n \).</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #2c6e9e;padding:10px 14px;margin:10px 0;border-radius:12px;"><h3>Q5: Cars — appreciate or depreciate?</h3><p><em>Depreciate (lose value).</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #2c6e9e;padding:10px 14px;margin:10px 0;border-radius:12px;"><h3>Q6: Does a depreciating value ever reach exactly $0?</h3><p><em>No — multiplying by a factor below 1 only approaches zero.</em></p></div>

  <div style="background:#e9f3fb;border-radius:18px;padding:14px 18px;margin-top:18px;">
    <p style="margin:0;">🧠 <strong>Pro Tip:</strong> Convert the percent to a factor first: +7% → 1.07, −7% → 0.93. Then just raise it to the power of the number of years.</p>
  </div>
</div>` },
      graph("1000*r^x", "r", { xMin: 0, xMax: 10, yMin: 0, yMax: 2500, paramMin: 0.8, paramMax: 1.2, paramInit: 1.05, caption: "Value of a $1000 asset, V = 1000·rⁿ. Slide the growth factor r: r > 1 is appreciation, r < 1 is depreciation, r = 1 holds steady." }),
    ],
  },

  {
    code: "7.3", title: "Interest & Borrowing", quizzes: [],
    blocks: [
      { id: bid(), type: "html", html: String.raw`<div class="lecture-box">
  <h1>🏦 Interest &amp; Borrowing</h1>
  <p><strong>Interest</strong> is the price of money — what you earn when you save and what you pay when you borrow. The key contrast is <strong>simple</strong> interest (on the original amount only) vs <strong>compound</strong> interest (on the growing balance).</p>

  <div style="background:#f8faff;border:1px solid #cde3ff;border-radius:18px;padding:16px 20px;margin:20px 0;box-shadow:0 2px 6px rgba(0,0,0,0.04);">
    <h2 style="margin-top:0;">📐 Two Formulas</h2>
    <ul style="margin:8px 0 6px 22px;line-height:1.9;">
      <li><span style="background:#4a90e2;color:#fff;padding:2px 10px;border-radius:30px;font-size:0.8rem;font-weight:700;margin-right:8px;">S</span><strong>Simple:</strong> \( I = Prt \) and total \( A = P(1 + rt) \) — linear growth.</li>
      <li><span style="background:#2e9e6e;color:#fff;padding:2px 10px;border-radius:30px;font-size:0.8rem;font-weight:700;margin-right:8px;">C</span><strong>Compound (annual):</strong> \( A = P(1 + r)^n \) — exponential growth.</li>
      <li><strong>\( P \)</strong> = principal, <strong>\( r \)</strong> = rate (decimal), <strong>\( t \)</strong> or <strong>\( n \)</strong> = years.</li>
    </ul>
    <p style="margin:8px 0 0;">💡 Compound interest is "interest on interest" — it always overtakes simple interest given time.</p>
  </div>

  <h2>🎬 Simple vs Compound</h2>
  <p>Both start at $1000 at 5%/year. The blue line (simple) rises in equal steps; the green curve (compound) bends upward as it earns interest on its interest.</p>
  <div style="text-align:center;margin:16px 0;">
    <svg viewBox="0 0 340 220" width="360" style="max-width:100%;background:#fff;border:1px solid #e2e8f0;border-radius:14px;">
      <line x1="35" y1="185" x2="320" y2="185" stroke="#94a3b8" stroke-width="1.5"/>
      <line x1="35" y1="20" x2="35" y2="185" stroke="#94a3b8" stroke-width="1.5"/>
      <text x="300" y="200" font-size="11" fill="#64748b">years</text>
      <!-- simple: straight line from (0,1000) to (20,2000): map year0->x35,y150 ; year20->x320,y70 -->
      <line x1="35" y1="150" x2="320" y2="70" stroke="#4a90e2" stroke-width="3"/>
      <text x="250" y="64" font-size="12" fill="#1e3a5f" font-weight="700">simple</text>
      <!-- compound curve approx points 1000,1276(5y),1629(10),2079(15),2653(20) -->
      <path d="M35,150 Q150,120 200,95 T320,30" fill="none" stroke="#2e9e6e" stroke-width="3"/>
      <text x="250" y="40" font-size="12" fill="#1c5c43" font-weight="700">compound</text>
      <circle r="4.5" fill="#2e9e6e"><animateMotion path="M35,150 Q150,120 200,95 T320,30" dur="3.5s" repeatCount="indefinite"/></circle>
    </svg>
    <div style="font-size:13px;color:#64748b;">Over 20 years, $1000 at 5%: simple → $2000, compound → ≈ $2653.</div>
  </div>

  <h2>🔵 Examples (Application &amp; Challenge)</h2>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:12px 16px;margin:16px 0;border-radius:16px;"><h3>📌 Example 1 — Simple interest</h3><p>Find the simple interest on $2000 at 4%/year for 3 years.</p><div class="solution"><div class="step"><strong>Step 1:</strong> use \( I = Prt \) with \( P = 2000 \), \( r = 0.04 \), \( t = 3 \).</div><div class="step"><strong>Step 2:</strong> \( 2000 \times 0.04 = 80 \) (one year), then \( 80 \times 3 = 240 \).</div><em>✅ $240 interest. (simple interest adds the same $80 each year)</em></div></div>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:12px 16px;margin:16px 0;border-radius:16px;"><h3>📌 Example 2 — Total owed</h3><p>A $1500 loan at 6% simple interest for 2 years — total to repay?</p><div class="solution"><div class="step"><strong>Step 1:</strong> \( I = 1500 \times 0.06 \times 2 = 180 \).</div><div class="step"><strong>Step 2:</strong> \( A = 1500 + 180 \).</div><em>✅ $1680.</em></div></div>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:12px 16px;margin:16px 0;border-radius:16px;"><h3>📌 Example 3 — Compound interest</h3><p>$1000 at 5% compounded annually for 3 years.</p><div class="solution"><div class="step"><strong>Step 1:</strong> compound annually means factor \( 1.05 \) applied 3 times: \( 1.05^3 = 1.157625 \).</div><div class="step"><strong>Step 2:</strong> \( A = 1000 \times 1.157625 = 1157.625 \), round to the cent.</div><em>✅ $1157.63. (vs $1150 with simple interest — compounding adds $7.63 extra)</em></div></div>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:12px 16px;margin:16px 0;border-radius:16px;"><h3>📌 Example 4 — Loan interest</h3><p>A $5000 loan at 8% simple interest. Interest after 4 years?</p><div class="solution"><div class="step"><strong>Step 1:</strong> simple interest \( I = Prt = 5000 \times 0.08 \times 4 \).</div><div class="step"><strong>Step 2:</strong> \( 5000 \times 0.08 = 400 \) per year, then \( 400 \times 4 = 1600 \).</div><em>✅ $1600 interest. (the borrower repays $5000 + $1600 = $6600 total)</em></div></div>
  <div class="example-box" style="background-color:#fff0f5;border-left:5px solid #c2185b;padding:12px 16px;margin:16px 0;border-radius:16px;"><h3>⭐ Example 5 (Challenge) — Simple vs compound</h3><p>Compare $1000 at 5% simple vs 5% compound after 10 years.</p><div class="solution"><div class="step"><strong>Simple:</strong> \( A = 1000(1 + 0.05\times10) = \$1500 \).</div><div class="step"><strong>Compound:</strong> \( A = 1000(1.05)^{10} \approx \$1628.89 \).</div><em>✅ Compound earns ≈ $128.89 more.</em></div></div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:12px 16px;margin:16px 0;border-radius:16px;"><h3>📝 Question 1</h3><p>Simple interest on $800 at 5%/year for 2 years?</p><details><summary>🔎 Show Answer</summary><div class="solution"><div class="step">\( 800 \times 0.05 \times 2 = \$80 \).</div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:12px 16px;margin:16px 0;border-radius:16px;"><h3>📝 Question 2</h3><p>Total to repay a $1200 loan at 10% simple interest for 3 years?</p><details><summary>🔎 Show Answer</summary><div class="solution"><div class="step">\( I = 1200 \times 0.1 \times 3 = 360 \); total \( = \$1560 \).</div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:12px 16px;margin:16px 0;border-radius:16px;"><h3>📝 Question 3</h3><p>$2000 at 6% compounded annually for 5 years (nearest cent)?</p><details><summary>🔎 Show Answer</summary><div class="solution"><div class="step">\( 2000 \times 1.06^5 = 2000 \times 1.338226 \approx \$2676.45 \).</div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:12px 16px;margin:16px 0;border-radius:16px;"><h3>📝 Question 4</h3><p>Why can credit-card debt grow so fast?</p><details><summary>🔎 Show Answer</summary><div class="solution"><div class="step"><em>It compounds (often monthly) at a high rate, so unpaid interest is added to the balance and itself earns interest.</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:12px 16px;margin:16px 0;border-radius:16px;"><h3>⭐ Question 5 (Challenge)</h3><p>How much more does $3000 earn at 4% compound vs 4% simple after 6 years (nearest cent)?</p><details><summary>🔎 Show Answer</summary><div class="solution"><div class="step">Simple: \( 3000(1+0.24) = \$3720 \). Compound: \( 3000 \times 1.04^6 \approx \$3795.96 \). <em>Difference ≈ $75.96.</em></div></div></details></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #2c6e9e;padding:10px 14px;margin:10px 0;border-radius:12px;"><h3>Q1: What is the simple interest formula?</h3><p><em>\( I = Prt \).</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #2c6e9e;padding:10px 14px;margin:10px 0;border-radius:12px;"><h3>Q2: What is the compound amount formula?</h3><p><em>\( A = P(1 + r)^n \).</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #2c6e9e;padding:10px 14px;margin:10px 0;border-radius:12px;"><h3>Q3: What is the principal?</h3><p><em>The original amount invested or borrowed.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #2c6e9e;padding:10px 14px;margin:10px 0;border-radius:12px;"><h3>Q4: Which grows faster over time?</h3><p><em>Compound interest.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #2c6e9e;padding:10px 14px;margin:10px 0;border-radius:12px;"><h3>Q5: Simple interest grows in what shape?</h3><p><em>A straight line (linear).</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #2c6e9e;padding:10px 14px;margin:10px 0;border-radius:12px;"><h3>Q6: Is interest good or bad?</h3><p><em>Good when you're saving/investing; costly when you're borrowing.</em></p></div>

  <div style="background:#e9f3fb;border-radius:18px;padding:14px 18px;margin-top:18px;">
    <p style="margin:0;">🧠 <strong>Pro Tip:</strong> Simple interest adds the same amount each year; compound multiplies by \( (1+r) \) each year. Over long periods, compounding wins big.</p>
  </div>
</div>` },
      mg([{ expr: "1000 + 1000*0.05*x", label: "Simple: 1000 + 50·t" }, { expr: "1000*1.05^x", label: "Compound: 1000·1.05ᵗ" }], { markIntersection: false, xMin: 0, xMax: 20, yMin: 900, yMax: 2800, caption: "$1000 at 5%/year: the straight line is simple interest; the curve is compound — it pulls away over time." }),
    ],
  },

  {
    code: "7.4", title: "Budgets", quizzes: [],
    blocks: [
      { id: bid(), type: "html", html: String.raw`<div class="lecture-box">
  <h1>🧾 Budgets</h1>
  <p>A <strong>budget</strong> is a plan for your money: it matches <strong>income</strong> against <strong>expenses</strong> so you can cover needs, enjoy some wants, and still <strong>save</strong>. A budget <em>balances</em> when income ≥ expenses; the leftover is your <strong>surplus</strong>.</p>

  <div style="background:#f8faff;border:1px solid #cde3ff;border-radius:18px;padding:16px 20px;margin:20px 0;box-shadow:0 2px 6px rgba(0,0,0,0.04);">
    <h2 style="margin-top:0;">📐 The 50 / 30 / 20 Guideline</h2>
    <ul style="margin:8px 0 6px 22px;line-height:1.9;">
      <li><span style="background:#4a90e2;color:#fff;padding:2px 10px;border-radius:30px;font-size:0.8rem;font-weight:700;margin-right:8px;">50%</span><strong>Needs</strong> — rent, food, transport, bills.</li>
      <li><span style="background:#e69138;color:#fff;padding:2px 10px;border-radius:30px;font-size:0.8rem;font-weight:700;margin-right:8px;">30%</span><strong>Wants</strong> — entertainment, dining out, extras.</li>
      <li><span style="background:#2e9e6e;color:#fff;padding:2px 10px;border-radius:30px;font-size:0.8rem;font-weight:700;margin-right:8px;">20%</span><strong>Savings</strong> — emergency fund, goals, investments.</li>
    </ul>
    <p style="margin:8px 0 0;">💡 Surplus \( = \) income \( - \) expenses. A negative surplus (a deficit) means you're overspending.</p>
  </div>

  <h2>🎬 Where the Money Goes</h2>
  <p>A $2000 monthly income split by 50/30/20:</p>
  <div style="text-align:center;margin:16px 0;">
    <svg viewBox="0 0 320 170" width="340" style="max-width:100%;background:#fff;border:1px solid #e2e8f0;border-radius:14px;">
      <!-- donut: 50% needs, 30% wants, 20% savings. circumference for r=55 ~ 345.6 -->
      <g transform="translate(95,85)">
        <circle r="55" fill="none" stroke="#4a90e2" stroke-width="26" stroke-dasharray="172.8 345.6" transform="rotate(-90)"><animate attributeName="stroke-dashoffset" values="345.6;0" dur="1s" fill="freeze"/></circle>
        <circle r="55" fill="none" stroke="#e69138" stroke-width="26" stroke-dasharray="103.7 345.6" stroke-dashoffset="-172.8" transform="rotate(-90)"/>
        <circle r="55" fill="none" stroke="#2e9e6e" stroke-width="26" stroke-dasharray="69.1 345.6" stroke-dashoffset="-276.5" transform="rotate(-90)"/>
      </g>
      <g font-size="12">
        <rect x="190" y="40" width="14" height="14" fill="#4a90e2"/><text x="210" y="52" fill="#1e3a5f">Needs $1000</text>
        <rect x="190" y="70" width="14" height="14" fill="#e69138"/><text x="210" y="82" fill="#9a5b00">Wants $600</text>
        <rect x="190" y="100" width="14" height="14" fill="#2e9e6e"/><text x="210" y="112" fill="#1c5c43">Savings $400</text>
      </g>
    </svg>
    <div style="font-size:13px;color:#64748b;">50% needs · 30% wants · 20% savings.</div>
  </div>

  <h2>🔵 Examples (Application &amp; Challenge)</h2>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:12px 16px;margin:16px 0;border-radius:16px;"><h3>📌 Example 1 — Surplus</h3><p>Income $2400, expenses $2100. Find the monthly surplus.</p><div class="solution"><div class="step"><strong>Step 1:</strong> surplus \( = \) income \( - \) expenses \( = 2400 - 2100 \).</div><div class="step"><strong>Step 2:</strong> \( 2400 - 2100 = 300 \), and it is positive, so the budget balances.</div><em>✅ $300 surplus each month. (a negative result would be a deficit)</em></div></div>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:12px 16px;margin:16px 0;border-radius:16px;"><h3>📌 Example 2 — Apply 50/30/20</h3><p>On $2000 income, find the needs/wants/savings amounts.</p><div class="solution"><div class="step"><strong>Step 1:</strong> turn each percent into a decimal: 50% → 0.5, 30% → 0.3, 20% → 0.2.</div><div class="step"><strong>Step 2:</strong> multiply income by each: \( 0.5(2000)=1000,\ 0.3(2000)=600,\ 0.2(2000)=400 \).</div><em>✅ $1000 needs / $600 wants / $400 savings. (check: \( 1000+600+400 = 2000 \), the whole income)</em></div></div>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:12px 16px;margin:16px 0;border-radius:16px;"><h3>📌 Example 3 — What's left to save?</h3><p>Income $1800; rent $700, food $400, transport $200, other $300. How much can you save?</p><div class="solution"><div class="step"><strong>Step 1:</strong> add all expenses: \( 700+400+200+300 = 1600 \).</div><div class="step"><strong>Step 2:</strong> savings \( = \) income \( - \) expenses \( = 1800 - 1600 \).</div><em>✅ $200 left to save. (that’s \( 200/1800 \approx 11\% \) — below the 20% target)</em></div></div>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:12px 16px;margin:16px 0;border-radius:16px;"><h3>📌 Example 4 — Monthly toward a goal</h3><p>You want $1200 saved in a year. How much per month?</p><div class="solution"><div class="step"><strong>Step 1:</strong> spread the goal evenly over 12 months: \( 1200 \div 12 \).</div><div class="step"><strong>Step 2:</strong> \( 1200 \div 12 = 100 \).</div><em>✅ $100/month. (check: \( 100 \times 12 = \$1200 \), the goal)</em></div></div>
  <div class="example-box" style="background-color:#fff0f5;border-left:5px solid #c2185b;padding:12px 16px;margin:16px 0;border-radius:16px;"><h3>⭐ Example 5 (Challenge) — Absorbing a price rise</h3><p>Your phone bill rises from $45 to $60/month. By how much must other spending be cut to keep the same total, and what % increase was the bill?</p><div class="solution"><div class="step"><strong>Step 1:</strong> increase \( = 60 - 45 = \$15 \) → cut $15 elsewhere.</div><div class="step"><strong>Step 2:</strong> percent increase \( = 15/45 = 33.\overline{3}\% \).</div><em>✅ Cut $15; the bill rose about 33%.</em></div></div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:12px 16px;margin:16px 0;border-radius:16px;"><h3>📝 Question 1</h3><p>Income $3000, expenses $2500. Find the surplus.</p><details><summary>🔎 Show Answer</summary><div class="solution"><div class="step">\( 3000 - 2500 = \$500 \).</div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:12px 16px;margin:16px 0;border-radius:16px;"><h3>📝 Question 2</h3><p>Apply 50/30/20 to a $1500 income.</p><details><summary>🔎 Show Answer</summary><div class="solution"><div class="step">Needs $750, wants $450, savings $300.</div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:12px 16px;margin:16px 0;border-radius:16px;"><h3>📝 Question 3</h3><p>You save the $300 monthly surplus. How many months to reach $1800?</p><details><summary>🔎 Show Answer</summary><div class="solution"><div class="step">\( 1800 \div 300 = 6 \) months.</div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:12px 16px;margin:16px 0;border-radius:16px;"><h3>📝 Question 4</h3><p>Why track expenses even when income is steady?</p><details><summary>🔎 Show Answer</summary><div class="solution"><div class="step"><em>To catch overspending, find savings, and make sure the budget actually balances.</em></div></div></details></div>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:12px 16px;margin:16px 0;border-radius:16px;"><h3>⭐ Question 5 (Challenge)</h3><p>Income is $2500 with $2200 expenses. After 8 months of saving the surplus, you spend $900 on a laptop. What's your savings balance?</p><details><summary>🔎 Show Answer</summary><div class="solution"><div class="step">Surplus \( = 300 \)/mo; \( 300 \times 8 = 2400 \); \( 2400 - 900 = \$1500 \).</div></div></details></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #2c6e9e;padding:10px 14px;margin:10px 0;border-radius:12px;"><h3>Q1: What is a budget?</h3><p><em>A plan matching income against expenses.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #2c6e9e;padding:10px 14px;margin:10px 0;border-radius:12px;"><h3>Q2: When does a budget balance?</h3><p><em>When income is at least as large as expenses.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #2c6e9e;padding:10px 14px;margin:10px 0;border-radius:12px;"><h3>Q3: What is a surplus?</h3><p><em>Income minus expenses, when positive.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #2c6e9e;padding:10px 14px;margin:10px 0;border-radius:12px;"><h3>Q4: What is a deficit?</h3><p><em>When expenses exceed income (negative surplus).</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #2c6e9e;padding:10px 14px;margin:10px 0;border-radius:12px;"><h3>Q5: What does 50/30/20 stand for?</h3><p><em>Needs / wants / savings as percents of income.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #2c6e9e;padding:10px 14px;margin:10px 0;border-radius:12px;"><h3>Q6: How do you find a monthly savings target?</h3><p><em>Divide the goal by the number of months.</em></p></div>

  <div style="background:#e9f3fb;border-radius:18px;padding:14px 18px;margin-top:18px;">
    <p style="margin:0;">🧠 <strong>Pro Tip:</strong> Pay yourself first — set aside savings <em>before</em> spending on wants, so the 20% doesn't disappear by month-end.</p>
  </div>
</div>` },
      graph("a*x", "a", { xMin: 0, xMax: 12, yMin: 0, yMax: 3600, paramMin: 50, paramMax: 300, paramInit: 200, caption: "Savings accumulation S = (monthly surplus)·month. Slide the monthly surplus to see how fast savings grow over a year." }),
    ],
  },
];

// ── seeding ──────────────────────────────────────────────────
async function getTeacherId() {
  const { data: created, error } = await db.auth.admin.createUser({
    email: TEACHER_EMAIL,
    password: TEACHER_PASSWORD,
    email_confirm: true,
    user_metadata: { full_name: "Integration Academy", role: "admin" },
  });
  if (created?.user) {
    await db.from("profiles").upsert({ id: created.user.id, full_name: "Integration Academy", role: "admin" });
    return created.user.id;
  }
  // already exists → find them
  const { data: list } = await db.auth.admin.listUsers({ perPage: 1000 });
  const found = list.users.find((u) => u.email === TEACHER_EMAIL);
  if (!found) throw new Error("Could not create or find teacher: " + (error?.message ?? ""));
  await db.from("profiles").upsert({ id: found.id, full_name: "Integration Academy", role: "admin" });
  return found.id;
}

async function run() {
  const teacherId = await getTeacherId();
  console.log("Teacher id:", teacherId);

  // Find-or-create the course. We do NOT delete the course on re-run, because
  // classes/enrollments reference it (ON DELETE CASCADE) and would be wiped.
  const DESC = "Ontario Grade 9 De-streamed Mathematics. Interactive lessons, quizzes, and assignments across Number, Algebra, Linear Relations, Geometry & Measurement, Data, and Financial Literacy.";
  let course;
  const existing = await db.from("courses").select("id").eq("teacher_id", teacherId).eq("title", COURSE_TITLE).maybeSingle();
  if (existing.data) {
    course = existing.data;
    await db.from("courses").update({ code: "MTH1W", description: DESC, level: "9", published: true }).eq("id", course.id);
  } else {
    const ins = await db.from("courses").insert({ teacher_id: teacherId, code: "MTH1W", title: COURSE_TITLE, description: DESC, level: "9", published: true }).select("id").single();
    if (ins.error) throw ins.error;
    course = ins.data;
  }
  console.log("Course:", course.id);

  // Refresh source content only — keep the course, its classes, enrollments,
  // and any teacher-built CLASS quizzes (class_id not null).
  await db.from("lessons").delete().eq("course_id", course.id);
  await db.from("assignments").delete().eq("course_id", course.id);
  await db.from("quizzes").delete().eq("course_id", course.id).is("class_id", null);

  let pos = 0;
  let asgCount = 0;
  for (const s of subjects) {
    const { data: lesson } = await db
      .from("lessons")
      .insert({ course_id: course.id, title: `${s.code} ${s.title}`, blocks: s.blocks, position: pos++, published: true })
      .select("id")
      .single();
    console.log(`  Lesson ${s.code} ${s.title}`);

    const aDef = ASSIGN[s.code] ?? s.assignment;
    // Insert with published; if the assignments.published column doesn't exist
    // yet (migration not run), retry without it so assignments still appear.
    let ar = await db.from("assignments").insert({ course_id: course.id, title: aDef.title, description: aDef.description, published: true });
    if (ar.error && /published/.test(ar.error.message)) {
      ar = await db.from("assignments").insert({ course_id: course.id, title: aDef.title, description: aDef.description });
    }
    if (ar.error) throw ar.error;
    asgCount++;

    // No admin quizzes are created here — quizzes are built by teachers from
    // the question bank (see scripts/seed-bank.mjs + the teacher quiz-builder).
  }

  console.log(`\nDone. Seeded ${subjects.length} lessons + ${asgCount} assignments (no admin quizzes; teachers build from the bank).`);
  console.log(`Instructor login → ${TEACHER_EMAIL} / ${TEACHER_PASSWORD}`);
}

run().catch((e) => { console.error("SEED FAILED:", e.message ?? e); process.exit(1); });
