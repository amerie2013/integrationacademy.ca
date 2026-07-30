// Seeds the Algebra 1 (FL B.E.S.T.) course — Grade 9 Math for Florida students.
// 6 chapters, 27 lesson scaffolds (same design as the other courses: overview +
// "What you'll learn", with full worked examples authored later).
// Usage: node scripts/seed-flalg1.mjs
import { createClient } from "@supabase/supabase-js";
import { teacherPassword } from "./_teacher-secret.mjs";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { sk } from "./seed-mpm2d.mjs";
import { authored } from "./flalg1-lessons.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const env = {};
for (const line of readFileSync(join(__dirname, "..", ".env.local"), "utf8").split("\n")) {
  const m = line.match(/^([A-Z0-9_]+)=(.*)$/);
  if (m) env[m[1]] = m[2].trim();
}
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });

const TEACHER_EMAIL = "teacher@integrationacademy.ca";
const COURSE_TITLE = "Algebra 1 (FL B.E.S.T.)";
const CODE = "ALG1";
const DESC = "Grade 9 Algebra 1 aligned to Florida's B.E.S.T. standards. Interactive lessons build fluency with linear equations and functions, systems, exponents and polynomials, factoring and quadratics, and exponential and bivariate-data modelling — establishing the linear, exponential, and quadratic modelling at the heart of high-school algebra.";

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

// ── 27 lessons across 6 chapters (scaffolds) ──
const subjects = [
  // CHAPTER 1 — Linear Equations, Inequalities & Absolute Value
  sk("1.1", "Multi-Step Equations in One Variable", "Solve linear equations that involve several steps — distributing, combining like terms, and moving variables across the equals sign — and check each solution.", ["Distributive property and combining like terms", "Equations with the variable on both sides", "Clearing fractions and decimals from an equation"]),
  sk("1.2", "Rearranging Formulas & Solving Literal Equations", "Use inverse operations to isolate any variable in a formula, so a single relationship can be used to solve for whichever quantity you need.", ["Isolating a target variable with inverse operations", "Rearranging common formulas such as $A=\\tfrac{1}{2}bh$ and $C=2\\pi r$", "Interpreting and using the rearranged formula"]),
  sk("1.3", "Compound Inequalities & Set Notation", "Solve inequalities joined by “and” or “or”, graph their solutions on a number line, and record them in set-builder and interval notation.", ["Solving and graphing compound (“and”/“or”) inequalities", "Set-builder notation, e.g. $\\{x \\mid -2 \\le x < 5\\}$", "Interval notation and its connection to the graph"]),
  sk("1.4", "Absolute Value Equations & Inequalities", "Interpret absolute value as distance from zero and use it to solve equations and inequalities of the form $|ax+b|=c$, $|ax+b|<c$, and $|ax+b|>c$.", ["Absolute value as distance; the two-case idea", "Solving $|ax+b|=c$", "Solving $|ax+b|<c$ (“between”) and $|ax+b|>c$ (“beyond”)"]),
  sk("1.5", "Modeling Real-World Contexts with Linear Constraints", "Translate a situation into linear equations or inequalities, solve, and interpret the answer back in the context of the problem.", ["Defining variables from a word problem", "Writing linear equations and inequalities from constraints", "Interpreting solutions and checking they make sense"]),

  // CHAPTER 2 — Linear Functions & Coordinate Geometry
  sk("2.1", "Function Notation, Domain, and Range", "Meet function notation $f(x)$, evaluate functions, and describe the set of allowed inputs (domain) and resulting outputs (range).", ["Function notation and evaluating $f(x)$", "Reading domain and range from a graph", "Restricting the domain from a real-world context"]),
  sk("2.2", "Intercepts, Slope, and Rate of Change", "Find where a line crosses the axes, measure its slope as a rate of change, and interpret both in real situations.", ["Finding $x$- and $y$-intercepts", "Slope as rise over run and as a rate of change", "Interpreting slope and intercepts in context"]),
  sk("2.3", "Point-Slope Form", "Write the equation of a line straight from one point and a slope using $y-y_1=m(x-x_1)$, and turn it into slope-intercept form.", ["The point-slope template $y-y_1=m(x-x_1)$", "Writing a line from a point and a slope, or from two points", "Simplifying point-slope into $y=mx+b$"]),
  sk("2.4", "General (Standard) Form", "Work with a line written as $Ax+By=C$: read its intercepts, graph it, and produce integer coefficients.", ["The standard form $Ax+By=C$", "Finding and using $x$- and $y$-intercepts", "Clearing fractions to get integer $A,B,C$"]),
  sk("2.5", "Converting Between Forms", "Move fluently among slope-intercept, point-slope, and standard form — picking the right form and switching from one to another.", ["Slope-intercept ↔ point-slope ↔ standard", "Solving standard form for $y$ to read slope and intercept", "Choosing the best form for the information given"]),
  sk("2.6", "Parallel and Perpendicular Lines on the Coordinate Plane", "Use slope to decide whether lines are parallel or perpendicular, and write equations of lines meeting those conditions.", ["Parallel lines have equal slopes", "Perpendicular lines have negative-reciprocal slopes", "Writing equations of parallel and perpendicular lines"]),

  // CHAPTER 3 — Systems of Linear Equations & Inequalities
  sk("3.1", "Solving Systems by Graphing", "Understand a system's solution as the point where two lines meet, and find it by graphing both lines and reading the intersection.", ["The solution as the intersection of two lines", "Graphing each line from slope-intercept form", "Special cases: parallel (none) and coincident (infinite)"]),
  sk("3.2", "Solving Systems by Substitution", "Isolate one variable, substitute it into the other equation, and solve the system algebraically for an exact answer.", ["Isolating a variable in one equation", "Substituting to reduce to one variable", "Back-substituting and checking the solution"]),
  sk("3.3", "Solving Systems by Elimination", "Add or subtract equations — scaling first when needed — to eliminate a variable and solve efficiently.", ["Eliminating a variable by adding or subtracting", "Scaling equations to line up coefficients", "Solving and checking the result"]),
  sk("3.4", "Real-World Systems Applications & Special Cases (No/Infinite Solutions)", "Model situations with a system of equations, and recognize when a system has one, no, or infinitely many solutions.", ["Setting up a system from a word problem", "One solution vs. no solution vs. infinitely many", "Interpreting special cases in context"]),
  sk("3.5", "Graphing Two-Variable Linear Inequalities & Systems", "Graph the solution region of a linear inequality, and of a system of inequalities, using boundary lines and shading.", ["Boundary line: solid ($\\le,\\ge$) vs. dashed ($<,>$)", "Choosing which side to shade", "The overlapping solution region of a system"]),

  // CHAPTER 4 — Exponents, Radicals & Polynomial Operations
  sk("4.1", "Laws of Exponents & Rational Exponents", "Consolidate the exponent laws and extend them to zero, negative, and rational exponents so you can simplify and evaluate powers by hand.", ["Product, quotient, and power laws", "Zero and negative exponents: $a^{-n}=\\tfrac{1}{a^{n}}$", "Rational exponents as roots: $a^{m/n}=\\sqrt[n]{a^{m}}$"]),
  sk("4.2", "Operations with Radical Expressions", "Simplify radicals and combine them through addition, subtraction, and multiplication.", ["Simplifying radicals using perfect-square factors", "Adding and subtracting like radicals", "Multiplying radicals and rationalizing a denominator"]),
  sk("4.3", "Adding and Subtracting Polynomials", "Combine polynomials by collecting like terms, distributing the minus sign carefully when subtracting.", ["Identifying like terms", "Adding polynomials", "Subtracting by adding the opposite of every term"]),
  sk("4.4", "Multiplying and Dividing Polynomials", "Multiply polynomials with the distributive property and FOIL, and divide a polynomial by a monomial term by term.", ["Multiplying a monomial by a polynomial", "Multiplying binomials (FOIL) and larger products", "Dividing a polynomial by a monomial"]),
  sk("4.5", "Special Polynomial Products (Difference of Squares, Perfect Square Trinomials)", "Recognize and use the product patterns that appear again and again in algebra.", ["Difference of squares: $(a+b)(a-b)=a^{2}-b^{2}$", "Perfect square trinomials: $(a\\pm b)^{2}=a^{2}\\pm 2ab+b^{2}$", "Spotting these patterns to expand quickly"]),

  // CHAPTER 5 — Factoring & Quadratic Functions
  sk("5.1", "GCF and Factoring by Grouping", "Reverse multiplication: pull out the greatest common factor, then factor four-term polynomials by grouping.", ["Factoring out the greatest common factor (GCF)", "Factoring by grouping", "Checking a factorization by expanding"]),
  sk("5.2", "Factoring Trinomials when $a = 1$ ($x^2 + bx + c$)", "Factor $x^{2}+bx+c$ by finding two numbers that multiply to $c$ and add to $b$.", ["The multiply-to-$c$, add-to-$b$ rule", "Handling signs", "Perfect-square trinomials and primes"]),
  sk("5.3", "Factoring Trinomials when $a \\neq 1$ ($ax^2 + bx + c$)", "Factor $ax^{2}+bx+c$ with the $ac$ method: split the middle term, then group.", ["Pulling out the GCF first", "The $ac$ product and splitting the middle term", "Factoring by grouping"]),
  sk("5.4", "Features of Parabolas (Vertex, Axis of Symmetry, Intercepts)", "Read the key features of a parabola from its graph and equation.", ["Vertex and axis of symmetry", "$x$-intercepts (roots) and the $y$-intercept", "Direction of opening and width"]),
  sk("5.5", "Solving Quadratics by Factoring and Square Roots", "Solve quadratic equations using the zero-product property or by taking square roots.", ["The zero-product property", "Solving by factoring", "Solving $x^{2}=k$ by square roots"]),
  sk("5.6", "Completing the Square & The Quadratic Formula", "Solve any quadratic by completing the square or with the quadratic formula, and use the discriminant to predict the number of solutions.", ["Completing the square", "The quadratic formula $x=\\dfrac{-b\\pm\\sqrt{b^{2}-4ac}}{2a}$", "The discriminant $b^{2}-4ac$ and the number of roots"]),
  sk("5.7", "Function Transformations: $f(x)+k$, $kf(x)$, $f(x+k)$", "See how simple changes to a function's rule shift, stretch, or slide the graph of a quadratic.", ["Vertical shifts: $f(x)+k$", "Vertical stretches and compressions: $kf(x)$", "Horizontal shifts: $f(x+k)$"]),

  // CHAPTER 6 — Exponential Functions & Bivariate Data
  sk("6.1", "Exponential Growth and Decay Models", "Build and use exponential models of the form $y=a\\,b^{x}$ for growth and decay.", ["Exponential form $y=a\\,b^{x}$", "Growth ($b>1$) vs. decay ($0<b<1$)", "Applied growth and decay problems"]),
  sk("6.2", "Comparing Linear, Quadratic, and Exponential Models", "Recognize the fingerprint of each model in a table or graph and choose the one that fits the data.", ["Constant difference (linear) vs. constant ratio (exponential)", "Recognizing quadratic patterns (second differences)", "Choosing the best model for a data set"]),
  sk("6.3", "Scatter Plots, Lines of Best Fit, and Residuals Analysis", "Plot paired data, fit a line of best fit, and use residuals to judge how well the line fits.", ["Building and describing a scatter plot", "Fitting a line of best fit", "Residuals and what they reveal about the fit"]),
  sk("6.4", "Two-Way Frequency Tables & Categorical Data", "Organize categorical data in a two-way table and read joint, marginal, and relative frequencies to look for association.", ["Building a two-way frequency table", "Joint and marginal frequencies", "Relative frequencies and association between categories"]),
];

// Splice fully-authored lessons over their scaffolds.
for (let i = 0; i < subjects.length; i++) {
  const a = authored[subjects[i].code];
  if (a) subjects[i] = a;
}

async function run() {
  const teacherId = await getTeacherId();
  let course;
  const existing = await db.from("courses").select("id").eq("teacher_id", teacherId).eq("title", COURSE_TITLE).maybeSingle();
  if (existing.data) {
    course = existing.data;
    await db.from("courses").update({ code: CODE, description: DESC, level: "9", published: true }).eq("id", course.id);
  } else {
    const ins = await db.from("courses").insert({ teacher_id: teacherId, code: CODE, title: COURSE_TITLE, description: DESC, level: "9", published: true }).select("id").single();
    if (ins.error) throw ins.error;
    course = ins.data;
  }
  console.log("Course:", course.id);

  await db.from("lessons").delete().eq("course_id", course.id);
  let pos = 0;
  for (const s of subjects) {
    const { error } = await db.from("lessons").insert({ course_id: course.id, title: `${s.code} ${s.title}`, blocks: s.blocks, position: pos++, published: true });
    if (error) throw error;
    console.log(`  ${s.code} ${s.title}`);
  }
  console.log(`\nSeeded ${subjects.length} ${CODE} lesson scaffolds.`);
}

run().catch((e) => { console.error(e); process.exit(1); });
