// Seeds the MPM2D (Grade 10) course with the showcase lesson
// "U1S7 — Solving Linear Systems Graphically" — an interactive remake of the
// WordPress PDF lesson (live graphs instead of static images).
// Usage: node scripts/seed-mpm2d-linear-systems.mjs

import { createClient } from "@supabase/supabase-js";
import { teacherPassword } from "./_teacher-secret.mjs";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
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

// helpers
let _b = 0;
const bid = () => `b${Date.now().toString(36)}${(_b++).toString(36)}`;
const h2 = (text) => ({ id: bid(), type: "heading", text, level: 2 });
const h3 = (text) => ({ id: bid(), type: "heading", text, level: 3 });
const p = (markdown) => ({ id: bid(), type: "text", markdown });
const eq = (latex) => ({ id: bid(), type: "math", latex });
const note = (text, variant = "note") => ({ id: bid(), type: "callout", variant, text });
const mg = (curves, o = {}) => ({
  id: bid(), type: "multigraph", curves,
  param: o.param ?? "", paramMin: o.paramMin ?? -5, paramMax: o.paramMax ?? 5, paramInit: o.paramInit ?? 0,
  xMin: o.xMin ?? -6, xMax: o.xMax ?? 6, yMin: o.yMin ?? -6, yMax: o.yMax ?? 6,
  markIntersection: o.markIntersection ?? true, caption: o.caption ?? "",
});

const L = "abcdefgh";
const mc = (prompt, choices, c, points = 1, feedback = "") => ({ kind: "multiple_choice", prompt, choices: choices.map((t, i) => ({ id: L[i], text: t })), answer: L[c], points, feedback });
const tf = (prompt, c, points = 1, feedback = "") => ({ kind: "true_false", prompt, answer: c ? "true" : "false", points, feedback });
const num = (prompt, value, tol = 0, points = 1, feedback = "") => ({ kind: "numeric", prompt, answer: value, tolerance: tol, points, feedback });
const sa = (prompt, accepted, points = 1, feedback = "") => ({ kind: "short_answer", prompt, answer: accepted, points, feedback });

const blocks = [
  h2("Solving Linear Systems Graphically"),
  p("In this lesson you'll solve a system of two linear equations **by graphing** — find where the lines cross, recognize the three types of solutions, and check your answer. Unlike a textbook, **every graph here is live**: drag the sliders and watch what happens."),

  h3("1 · What is a linear system?"),
  p("A **linear system** is two (or more) linear equations sharing the same variables. The **solution** is the ordered pair $(x, y)$ that satisfies **both** equations at once — graphically, the point where the lines cross."),
  eq("\\begin{cases} y = 2x + 1 \\\\ y = -x + 4 \\end{cases}"),
  mg([{ expr: "2*x + 1", label: "y = 2x + 1" }, { expr: "-x + 4", label: "y = -x + 4" }], { xMin: -2, xMax: 6, yMin: -2, yMax: 8, caption: "The two lines meet at exactly one point — that point is the solution." }),
  note("The solution $(1, 3)$ works in **both** equations: $3 = 2(1)+1$ ✓ and $3 = -(1)+4$ ✓.", "tip"),

  h3("2 · The three types of solutions"),
  p("How the lines sit relative to each other tells you everything:\n**One solution** — different slopes, lines cross once.\n**No solution** — equal slopes, different intercepts (parallel).\n**Infinite solutions** — equal slopes *and* intercepts (the same line)."),
  p("Try it: the line $y = ax - 1$ below has a slope you control. When $a = 2$ it becomes **parallel** to $y = 2x + 1$ and the system has **no solution**. For every other slope, they cross."),
  mg([{ expr: "2*x + 1", label: "y = 2x + 1" }, { expr: "a*x - 1", label: "y = ax − 1" }], { param: "a", paramMin: -2, paramMax: 4, paramInit: 0, xMin: -4, xMax: 4, yMin: -6, yMax: 6, caption: "Slide a. At a = 2 the slopes match → parallel → no solution." }),

  h3("3 · Method 1 — Slope-intercept form (y = mx + b)"),
  p("**1.** Plot the y-intercept $b$. **2.** Use the slope $m = \\frac{\\text{rise}}{\\text{run}}$ to step to a second point. **3.** Draw the line. **4.** Repeat for the second equation. **5.** Read off the intersection."),

  h3("4 · Method 2 — Standard form (Ax + By = C) using intercepts"),
  p("**x-intercept:** set $y = 0$ and solve for $x$. **y-intercept:** set $x = 0$ and solve for $y$. Plot both intercepts, draw the line, and find where the two lines meet."),

  h3("Example 1 — Basic intersection"),
  p("Solve $y = 2x + 1$ and $y = -x + 4$ graphically."),
  mg([{ expr: "2*x + 1", label: "y = 2x + 1" }, { expr: "-x + 4", label: "y = -x + 4" }], { xMin: -2, xMax: 6, yMin: -2, yMax: 8 }),
  note("**Solution (1, 3).** Check: $3 = 2(1)+1$ ✓ and $3 = -(1)+4$ ✓.", "example"),

  h3("Example 2 — Intercept method"),
  p("Solve $3x + y = 3$ and $x - 2y = 8$. Rearranged: $y = 3 - 3x$ and $y = \\tfrac{1}{2}x - 4$."),
  mg([{ expr: "3 - 3*x", label: "3x + y = 3" }, { expr: "0.5*x - 4", label: "x − 2y = 8" }], { xMin: -2, xMax: 10, yMin: -6, yMax: 6 }),
  note("**Solution (2, −3).** Check: $3(2) + (-3) = 3$ ✓ and $2 - 2(-3) = 8$ ✓.", "example"),

  h3("Example 3 — Parallel lines (no solution)"),
  p("Solve $y = 2x - 1$ and $y = 2x + 3$. Same slope, different intercepts."),
  mg([{ expr: "2*x - 1", label: "y = 2x − 1" }, { expr: "2*x + 3", label: "y = 2x + 3" }], { xMin: -4, xMax: 4, yMin: -4, yMax: 6 }),
  note("Equal slopes, different y-intercepts → the lines never meet → **no solution** (the system is *inconsistent*).", "warning"),

  h3("Example 4 — Coincident lines (infinite solutions)"),
  p("Solve $2x - y = 4$ and $4x - 2y = 8$. The second equation is just the first one doubled — both simplify to $y = 2x - 4$."),
  mg([{ expr: "2*x - 4", label: "2x − y = 4" }, { expr: "2*x - 4", label: "4x − 2y = 8" }], { xMin: -2, xMax: 6, yMin: -6, yMax: 4 }),
  note("Same slope **and** same intercept → one line on top of the other → **infinite solutions** (the system is *dependent*).", "tip"),

  h3("Always verify"),
  p("Substitute your $(x, y)$ back into **both** original equations. If both are true, you've found the solution."),
];

const quizQuestions = [
  mc("The solution to a linear system is…", ["the y-intercept", "the point where the lines cross", "the slope", "the x-intercept"], 1),
  mc("Two lines with equal slopes and different y-intercepts have…", ["one solution", "no solution", "infinite solutions"], 1),
  mc("Two lines with equal slopes and equal y-intercepts have…", ["one solution", "no solution", "infinite solutions"], 2),
  mc("Lines with different slopes have…", ["one solution", "no solution", "infinite solutions"], 0),
  tf("The solution $(x, y)$ must satisfy both equations.", true),
  mc("For $y = 2x + 1$ and $y = -x + 4$, the intersection is…", ["(1, 3)", "(3, 1)", "(0, 1)", "(2, 2)"], 0),
  num("For $y = x + 2$ and $y = -x + 6$, what is the x-coordinate of the solution?", 2, 0, 1, "x + 2 = -x + 6 → 2x = 4 → x = 2."),
  num("…and the y-coordinate of that solution?", 4, 0),
  mc("A system with no solution is called…", ["consistent", "inconsistent", "dependent"], 1),
  tf("Parallel lines intersect at exactly one point.", false),
];

const advancedQuestions = [
  num("Solve $y = 3x - 2$ and $y = x + 4$. What is x?", 3, 0, 1, "3x − 2 = x + 4 → 2x = 6 → x = 3."),
  num("…and what is y for that system?", 7, 0),
  mc("$y = 2x - 1$ and $y = 2x + 3$ have…", ["one solution", "no solution", "infinite solutions"], 1),
  mc("$2x - y = 4$ and $4x - 2y = 8$ have…", ["one solution", "no solution", "infinite solutions"], 2),
  num("For $x + y = 5$ and $x - y = 1$, what is x?", 3, 0, 1, "Add the equations: 2x = 6 → x = 3."),
  num("…and what is y?", 2, 0),
  mc("Rewrite $3x + y = 3$ in slope-intercept form:", ["y = 3 − 3x", "y = 3x − 3", "y = 3x + 3"], 0),
  num("For $y = -x + 4$, what is the x-intercept (set y = 0)?", 4, 0),
  tf("A 'dependent' system has infinitely many solutions.", true),
  sa("The point where two lines cross is called the ___ point.", ["intersection"]),
];

async function teacherId() {
  const { data: list } = await db.auth.admin.listUsers({ perPage: 1000 });
  const found = list.users.find((u) => u.email === TEACHER_EMAIL);
  if (found) return found.id;
  const { data } = await db.auth.admin.createUser({ email: TEACHER_EMAIL, password: teacherPassword(env), email_confirm: true, user_metadata: { full_name: "Integration Academy", role: "admin" } });
  await db.from("profiles").upsert({ id: data.user.id, full_name: "Integration Academy", role: "admin" });
  return data.user.id;
}

async function run() {
  const tid = await teacherId();
  await db.from("courses").delete().eq("teacher_id", tid).eq("title", COURSE_TITLE);
  const { data: course, error } = await db.from("courses").insert({
    teacher_id: tid, code: "MPM2D", title: COURSE_TITLE, level: "10", published: true,
    description: "Grade 10 Academic Mathematics. Interactive lessons with live, draggable graphs — including a fully interactive remake of Solving Linear Systems Graphically.",
  }).select("id").single();
  if (error) throw error;

  const { data: lesson } = await db.from("lessons").insert({
    course_id: course.id, title: "MPM2D U1S7 — Solving Linear Systems Graphically", blocks, position: 0, published: true,
  }).select("id").single();

  await db.from("assignments").insert({
    course_id: course.id,
    title: "MPM2D U1S7 Assignment — Solving Linear Systems Graphically",
    description: "Solve each system by graphing, classify it (one / none / infinite), and verify by substitution: (1) y = x + 2, y = -2x + 5  (2) y = 3x - 4, y = 3x + 1  (3) 2x + y = 6, x - y = 0  (4) x - y = 2, 2x - 2y = 4. (5) Word problem: A gym charges $40 plus $5/visit; another charges $10/visit. Write the system, graph it, and find when the costs are equal.",
  });

  for (const [title, qs, settings] of [
    [`MPM2D U1S7 — Quiz`, quizQuestions, { passing_score: 60, attempts_allowed: 3 }],
    [`MPM2D U1S7 — Advanced`, advancedQuestions, { passing_score: 70, attempts_allowed: 2, time_limit_minutes: 20, shuffle_questions: true }],
  ]) {
    const { data: quizRow } = await db.from("quizzes").insert({
      course_id: course.id, lesson_id: lesson.id, title, published: true, show_score: true, allow_backtracking: true, show_answers: "after_submit", ...settings,
    }).select("id").single();
    await db.from("quiz_questions").insert(qs.map((q, i) => ({
      quiz_id: quizRow.id, kind: q.kind, prompt: q.prompt, choices: q.choices ?? null, answer: q.answer ?? null,
      tolerance: q.tolerance ?? null, points: q.points ?? 1, feedback: q.feedback ?? null, position: i,
    })));
  }

  console.log("Seeded MPM2D course:", course.id);
  console.log("Lesson:", lesson.id, "+ Quiz (10) + Advanced (10) + Assignment");
}
run().catch((e) => { console.error("FAILED:", e.message ?? e); process.exit(1); });
