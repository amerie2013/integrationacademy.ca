// Seeds the AP® Calculus AB exam-preparation course.
//
// ORIGINALITY. Every lesson, example, question and figure is written for this
// site. Nothing is copied or adapted from College Board publications, released
// exam questions, scoring guidelines, or any textbook. Unit and lesson titles
// and numbering are our own; each lesson records the framework topic number it
// prepares for (a fact about the exam) so students can cross-reference.
// "AP" is used only to say which exam the course prepares for, and the
// trademark notice in lib/courseNotice.ts is shown wherever the course appears.
//
// Structure mirrors seed-ibaasl.mjs: the full skeleton is seeded as planned()
// placeholders, and authored lessons override them unit by unit.
//
// The course is created UNPUBLISHED (visible to admins only) so it can be
// reviewed before students see it. Publishing is done from the teacher UI; a
// re-run never changes the published flag.
//
// Usage: node scripts/seed-apcalc.mjs
import { createClient } from "@supabase/supabase-js";
import { teacherPassword } from "./_teacher-secret.mjs";
import { readFileSync } from "fs";
import { fileURLToPath, pathToFileURL } from "url";
import { dirname, join } from "path";
import { planned } from "./apcalc/kit.mjs";
import { authored } from "./apcalc-lessons.mjs";
import { ASSIGN, SHOW_ASSIGNMENTS } from "./apcalc-assignments.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));

const TEACHER_EMAIL = "teacher@integrationacademy.ca";
export const COURSE_CODE = "APCALCAB";
const COURSE_TITLE = "Calculus AB: AP® Exam Preparation";
const DESC = "A complete preparation course for the AP® Calculus AB exam. Ten units take you from limits through applications of integration, then into exam technique: every lesson develops the idea, works examples at three levels up to exam difficulty, shows the errors that cost marks, and models the written justifications that free-response readers reward. Original questions with graphs and tables in both calculator and no-calculator formats.";

const P = planned;
export const subjects = [
  // ── UNIT 0 — Readiness ──
  P("0.1", "Functions You Must Know Cold", 0, "prerequisite", "The parent functions, their graphs, domains and ranges, and the transformations that move them. Calculus assumes all of this without comment.", ["Sketch the twelve parent graphs from memory", "State domain and range from a formula", "Compose and invert functions fluently"]),
  P("0.2", "Trigonometry Without Hesitation", 0, "prerequisite", "Exact values, the unit circle in radians, and the identities that calculus uses again and again.", ["Recall exact values at the standard angles", "Solve trigonometric equations on an interval", "Use the Pythagorean and double-angle identities"]),
  P("0.3", "Exponentials, Logarithms and Their Laws", 0, "prerequisite", "The number e, the natural logarithm, and the algebra that links them.", ["Apply the laws of exponents and logarithms", "Solve exponential and logarithmic equations", "Rewrite between exponential and logarithmic form"]),
  P("0.4", "Your Graphing Calculator: The Four Exam Skills", 0, "prerequisite", "The four things the exam expects a graphing calculator to do, and how to record calculator work so that it earns credit.", ["Graph in a chosen window and find intersections", "Solve an equation numerically", "Evaluate a derivative at a point and a definite integral"]),

  // ── UNIT 1 — Limits and continuity (authored) ──
  P("1.1", "The Instant Problem: From Average Rates to Limits", 1, "1.1–1.2", "", []),
  P("1.2", "Reading Limits off a Graph", 1, "1.3", "", []),
  P("1.3", "Limits from Numerical Evidence", 1, "1.4", "", []),
  P("1.4", "Limit Laws and Direct Substitution", 1, "1.5", "", []),
  P("1.5", "Resolving 0/0: Factoring, Conjugates and Compound Fractions", 1, "1.6–1.7", "", []),
  P("1.6", "Trapping a Limit: The Squeeze Theorem", 1, "1.8", "", []),
  P("1.7", "Where Graphs Break: Classifying Discontinuities", 1, "1.10", "", []),
  P("1.8", "The Three-Part Continuity Test", 1, "1.11–1.13", "", []),
  P("1.9", "Unbounded Behaviour: Vertical and Horizontal Asymptotes", 1, "1.14–1.15", "", []),
  P("1.10", "Guaranteed Values: The Intermediate Value Theorem", 1, "1.16", "", []),

  // ── UNIT 2 — The derivative ──
  P("2.1", "Slope at a Single Point", 2, "2.1", "From secant slopes to the slope of the tangent line, and what that number means.", ["Compute an instantaneous rate as a limit of average rates", "Write the equation of a tangent line", "Interpret a tangent slope in context"]),
  P("2.2", "The Derivative as a Limit", 2, "2.2", "The two limit definitions of the derivative, and how to recognise a derivative hiding inside a limit.", ["Differentiate from the definition", "Use all the standard notations", "Identify a given limit as a derivative and evaluate it at sight"]),
  P("2.3", "Estimating a Derivative from Data and Graphs", 2, "2.3", "Finding a rate of change when no formula is given.", ["Estimate a derivative from a table with a difference quotient", "Estimate from a graph using a tangent line", "Use the calculator's numerical derivative"]),
  P("2.4", "Corners, Cusps and Breaks: When the Derivative Fails", 2, "2.4", "Differentiability, its link to continuity, and the four ways it can fail.", ["Decide differentiability at a point from a graph or formula", "Explain why differentiable implies continuous", "Find constants that make a piecewise function differentiable"]),
  P("2.5", "Power, Sum and Constant-Multiple Rules", 2, "2.5–2.6", "The rules that differentiate every polynomial and every power, including negative and fractional exponents.", ["Differentiate powers and polynomials at sight", "Rewrite roots and reciprocals as powers first", "Find tangent and normal lines"]),
  P("2.6", "Derivatives of Sine, Cosine, eˣ and ln x", 2, "2.7", "The four transcendental derivatives that must be automatic.", ["State and use the four derivatives", "Combine them with the power rule", "Connect each to its limit definition"]),
  P("2.7", "Differentiating Products and Quotients", 2, "2.8–2.9", "The product and quotient rules, including their use with functions known only from a table.", ["Apply the product rule", "Apply the quotient rule", "Evaluate derivatives of combinations from tabulated values"]),
  P("2.8", "The Other Four Trigonometric Derivatives", 2, "2.10", "Tangent, cotangent, secant and cosecant, derived from the quotient rule.", ["Derive and use the four derivatives", "Simplify trigonometric derivatives", "Find where a trigonometric graph has a horizontal tangent"]),

  // ── UNIT 3 — Composite, implicit and inverse functions ──
  P("3.1", "Functions Inside Functions: The Chain Rule", 3, "3.1", "The single most used rule in calculus, from simple compositions to several layers.", ["Identify inner and outer functions", "Differentiate compositions of any depth", "Apply the chain rule to tables and graphs"]),
  P("3.2", "Curves That Are Not Functions: Implicit Differentiation", 3, "3.2", "Finding dy/dx when y is not isolated.", ["Differentiate an equation in x and y", "Find tangent lines to implicit curves", "Locate horizontal and vertical tangents"]),
  P("3.3", "Slopes of Inverse Functions", 3, "3.3", "How the derivative of an inverse relates to the derivative of the original.", ["Use the inverse-derivative formula", "Evaluate (f⁻¹)′ from a table or formula", "Explain the reciprocal-slope relationship geometrically"]),
  P("3.4", "Derivatives of Inverse Trigonometric Functions", 3, "3.4", "Arcsine, arctangent and their relatives.", ["Differentiate the inverse trigonometric functions", "Combine them with the chain rule", "Recognise them later as antiderivatives"]),
  P("3.5", "Choosing the Right Rule", 3, "3.5", "A decision procedure for derivatives that need several rules at once.", ["Read the structure of a function from the outside in", "Combine product, quotient and chain rules without error", "Simplify strategically before differentiating"]),
  P("3.6", "Second and Higher Derivatives", 3, "3.6", "Differentiating again, including for implicitly defined curves.", ["Compute and notate higher derivatives", "Find a second derivative implicitly", "Interpret the second derivative as a rate of a rate"]),

  // ── UNIT 4 — Derivatives in context ──
  P("4.1", "What a Derivative Means, in Words and Units", 4, "4.1", "Interpreting a derivative in context: the sentence the exam wants.", ["State the units of a derivative", "Interpret a derivative value in context", "Distinguish amount from rate"]),
  P("4.2", "Motion Along a Line", 4, "4.2", "Position, velocity, acceleration, speed and direction.", ["Relate position, velocity and acceleration", "Decide when a particle speeds up or slows down", "Find when a particle changes direction"]),
  P("4.3", "Rates of Change Beyond Motion", 4, "4.3", "The same reasoning applied to populations, costs, volumes and flows.", ["Model a rate in a non-motion context", "Interpret positive and negative rates", "Compare rates at different instants"]),
  P("4.4", "Related Rates: Setting Up", 4, "4.4", "Turning a description into an equation linking changing quantities.", ["Identify what is constant and what varies", "Write the linking equation", "Differentiate with respect to time"]),
  P("4.5", "Related Rates: Solving", 4, "4.5", "The standard families: ladders, cones, shadows, expanding shapes.", ["Substitute only after differentiating", "Solve the main problem types", "Answer with units and a sentence"]),
  P("4.6", "Tangent-Line Approximation", 4, "4.6", "Using the tangent line as a stand-in for the function, and judging the error.", ["Write and use a linearisation", "Decide over- or under-estimate from concavity", "Approximate values without a calculator"]),
  P("4.7", "Indeterminate Forms and L'Hôpital's Rule", 4, "4.7", "A derivative-based method for 0/0 and ∞/∞, with the justification the exam requires.", ["Verify the conditions before applying the rule", "Apply it once or repeatedly", "Write the justification in the accepted form"]),

  // ── UNIT 5 — Analysing functions ──
  P("5.1", "The Mean Value Theorem", 5, "5.1", "Where the instantaneous rate must equal the average rate.", ["State the hypotheses and conclusion", "Find the guaranteed value", "Justify existence in a free-response answer"]),
  P("5.2", "Extreme Values and Critical Points", 5, "5.2", "The Extreme Value Theorem and where extrema can occur.", ["State the Extreme Value Theorem", "Find critical points", "Distinguish absolute from relative extrema"]),
  P("5.3", "Increasing and Decreasing Intervals", 5, "5.3", "Reading a function's direction from the sign of its derivative.", ["Build a sign chart for f′", "State intervals of increase and decrease", "Justify with the sign of f′"]),
  P("5.4", "The First Derivative Test", 5, "5.4", "Classifying critical points by a sign change.", ["Classify relative extrema", "Write the justification that earns the point", "Handle critical points with no sign change"]),
  P("5.5", "Absolute Extrema on a Closed Interval", 5, "5.5", "The candidates test.", ["List candidates: critical points and endpoints", "Compare values to find absolute extrema", "Justify the result"]),
  P("5.6", "Concavity and Points of Inflection", 5, "5.6", "The shape of a graph, from the second derivative.", ["Determine intervals of concavity", "Locate points of inflection", "Justify with a sign change of f″ or a change in the direction of f′"]),
  P("5.7", "The Second Derivative Test", 5, "5.7", "A quick classification of critical points, and when it fails.", ["Apply the second derivative test", "Recognise when it is inconclusive", "Choose between the two tests"]),
  P("5.8", "Sketching a Function from Its Derivatives", 5, "5.8", "Assembling increase, decrease, concavity and asymptotes into one graph.", ["Organise information in a combined chart", "Sketch a consistent graph", "Sketch f from a description of f′ and f″"]),
  P("5.9", "Moving Between the Graphs of f, f′ and f″", 5, "5.9", "The question type that appears in every exam: one graph given, conclusions about another required.", ["Read properties of f from the graph of f′", "Match graphs of a function and its derivatives", "Justify using the given graph, not the one you imagine"]),
  P("5.10", "Optimisation", 5, "5.10–5.11", "Finding the best value of a quantity under a constraint.", ["Build a one-variable model", "Find and justify the optimum", "Interpret the answer in context"]),
  P("5.11", "Behaviour of Implicitly Defined Curves", 5, "5.12", "Applying the unit's tools when y is not given explicitly.", ["Find critical points on an implicit curve", "Use the second derivative implicitly", "Classify points on the curve"]),

  // ── UNIT 6 — Integration ──
  P("6.1", "Accumulating Change", 6, "6.1", "Area under a rate graph as total change.", ["Interpret area under a rate curve", "Attach units to accumulated change", "Use geometry to find exact areas"]),
  P("6.2", "Riemann Sums and the Trapezoidal Rule", 6, "6.2", "Left, right, midpoint and trapezoidal approximations, from formulas and from tables with unequal widths.", ["Compute each approximation", "Handle unequal subintervals", "Decide over- or under-estimate"]),
  P("6.3", "From Sums to the Definite Integral", 6, "6.3", "The definite integral as a limit of Riemann sums, and translating between the two forms.", ["Read summation notation", "Write a limit of a sum as a definite integral", "Reverse the translation"]),
  P("6.4", "Accumulation Functions and the Fundamental Theorem, Part 1", 6, "6.4", "Functions defined by an integral, and their derivatives.", ["Differentiate an accumulation function", "Apply the chain rule to a variable limit", "Evaluate such functions from a graph"]),
  P("6.5", "Analysing a Function Defined by an Integral", 6, "6.5", "Increase, extrema and concavity of g(x) = ∫f, from the graph of f.", ["Find extrema of an accumulation function", "Find its points of inflection", "Justify from the graph of the integrand"]),
  P("6.6", "Properties of Definite Integrals", 6, "6.6", "Linearity, reversing limits, and splitting intervals.", ["Combine and split definite integrals", "Use symmetry", "Solve for an unknown integral"]),
  P("6.7", "The Fundamental Theorem, Part 2: Evaluating Integrals", 6, "6.7", "Evaluating a definite integral exactly with an antiderivative.", ["Evaluate definite integrals", "Use net change: f(b) = f(a) + ∫f′", "Recover a function value from a rate"]),
  P("6.8", "Antiderivatives and the Basic Rules", 6, "6.8", "Reversing each differentiation rule.", ["Find indefinite integrals of the standard functions", "Include and determine the constant", "Check by differentiating"]),
  P("6.9", "Integration by Substitution", 6, "6.9", "Reversing the chain rule, for indefinite and definite integrals.", ["Choose u", "Change the limits of a definite integral", "Recognise patterns at sight"]),
  P("6.10", "Rational Integrands: Division and Completing the Square", 6, "6.10", "Two algebraic preparations that turn a hard integral into a standard one.", ["Use long division before integrating", "Complete the square to reach an arctangent", "Choose between logarithm and arctangent forms"]),
  P("6.11", "Choosing an Integration Method", 6, "6.14", "A decision procedure for antiderivatives.", ["Classify an integrand", "Select and apply the method", "Recognise integrals that need rewriting first"]),
  P("6.12", "Integrals from Graphs and Tables", 6, "6.2–6.7", "The representations the exam prefers: reading integrals when no formula exists.", ["Evaluate integrals from a piecewise-linear graph", "Combine graph and table information", "Avoid sign errors below the axis"]),
  P("6.13", "Unit 6 Synthesis: The Accumulation Free-Response Question", 6, "6.1–6.7", "Bringing the unit together in the form it is examined.", ["Work a full multi-part question", "Score your own answer against a rubric", "Identify where points are typically lost"]),

  // ── UNIT 7 — Differential equations ──
  P("7.1", "Writing a Differential Equation from a Description", 7, "7.1", "Translating 'the rate is proportional to…' into symbols.", ["Write a differential equation from words", "Identify the constant of proportionality", "Interpret each term"]),
  P("7.2", "Checking a Proposed Solution", 7, "7.2", "Verifying that a function satisfies a differential equation.", ["Substitute a function and its derivatives", "Distinguish general from particular solutions", "Find constants that make a function a solution"]),
  P("7.3", "Drawing Slope Fields", 7, "7.3", "A picture of every solution at once.", ["Sketch a slope field at given points", "Sketch a solution curve through a point", "Draw segments of the correct relative steepness"]),
  P("7.4", "Reasoning from a Slope Field", 7, "7.4", "Matching fields to equations and reading behaviour from them.", ["Match a slope field to its equation", "Identify equilibrium solutions", "Describe long-run behaviour"]),
  P("7.5", "Separation of Variables", 7, "7.6", "The one solving technique required, done so that every point is earned.", ["Separate, integrate and include the constant", "Solve for y", "Avoid the errors that forfeit all later points"]),
  P("7.6", "Particular Solutions and Their Domains", 7, "7.7", "Using an initial condition, and saying where the solution is valid.", ["Apply an initial condition at the right moment", "Choose the correct branch", "State the domain of the solution"]),
  P("7.7", "Exponential Growth and Decay", 7, "7.8", "The model dy/dt = ky and its uses.", ["Solve dy/dt = ky", "Find k from data", "Work with half-life and doubling time"]),

  // ── UNIT 8 — Applications of integration ──
  P("8.1", "Average Value of a Function", 8, "8.1", "The mean height of a graph, and how it differs from an average rate of change.", ["Compute an average value", "Interpret it in context", "Distinguish it from average rate of change"]),
  P("8.2", "Position, Velocity and Acceleration by Integration", 8, "8.2", "Displacement, total distance and position from velocity.", ["Find displacement and total distance", "Find position from velocity and an initial condition", "Use the calculator for the absolute-value integral"]),
  P("8.3", "Rate In, Rate Out", 8, "8.3", "Amounts that change through competing rates: the most frequent free-response context.", ["Find an amount at a given time", "Find when an amount is greatest or least", "Interpret an integral of a rate with units"]),
  P("8.4", "Area Between Curves, Slicing Vertically", 8, "8.4", "Top minus bottom.", ["Set up and evaluate the area integral", "Find limits from intersections", "Use the calculator when intersections are not exact"]),
  P("8.5", "Area Between Curves, Slicing Horizontally", 8, "8.5", "Right minus left, when integrating in y is easier.", ["Rewrite curves as x = g(y)", "Set up the integral in y", "Choose the better direction"]),
  P("8.6", "Regions with More Than One Piece", 8, "8.6", "When the curves cross and the roles of top and bottom swap.", ["Split the region at intersections", "Set up a sum of integrals", "Use absolute value on the calculator"]),
  P("8.7", "Volumes from Known Cross-Sections", 8, "8.7–8.8", "Squares, rectangles, triangles and semicircles standing on a base region.", ["Express a cross-section's area in terms of x", "Integrate to find volume", "Handle each standard shape"]),
  P("8.8", "Solids of Revolution: Discs", 8, "8.9–8.10", "Rotating a region flush against the axis.", ["Set up a disc integral about an axis", "Rotate about a line other than an axis", "Identify the radius correctly"]),
  P("8.9", "Solids of Revolution: Washers", 8, "8.11–8.12", "Rotating a region with a gap between it and the axis.", ["Find outer and inner radii", "Rotate about horizontal and vertical lines", "Avoid the (R − r)² error"]),
  P("8.10", "Unit 8 Synthesis: The Area and Volume Free-Response Question", 8, "8.4–8.12", "The full question as it is examined, with scoring.", ["Work a complete multi-part question", "Write set-ups that earn the integrand point", "Score your own answer"]),

  // ── UNIT 9 — Exam mastery ──
  P("9.1", "How the Exam Is Built and Scored", 9, "exam skills", "The four parts, their timing, how raw points become a score, and a pacing plan.", ["Describe each part of the exam", "Plan your time per question", "Know what earns and what loses points"]),
  P("9.2", "A Phrase Bank for Justifications", 9, "exam skills", "The exact sentences that readers accept for every standard justification.", ["Justify extrema, concavity and inflection", "Justify with the three existence theorems", "Avoid vague wording that earns nothing"]),
  P("9.3", "Calculator Strategy", 9, "exam skills", "What to do on the calculator, what to write on the page, and how to avoid rounding penalties.", ["Record calculator set-ups correctly", "Store values instead of retyping", "Give answers to three decimal places"]),
  P("9.4", "Free-Response Type: Rates and Accumulation", 9, "exam skills", "The recurring contextual question, dissected.", ["Recognise the type in the first ten seconds", "Know the standard parts and their methods", "Practise under time"]),
  P("9.5", "Free-Response Type: Functions Given by Graphs and Tables", 9, "exam skills", "Questions with no formula at all.", ["Use graph and table data correctly", "Apply theorems to tabulated functions", "Practise under time"]),
  P("9.6", "Free-Response Type: Particle Motion", 9, "exam skills", "Motion questions, including those driven by a graph of velocity.", ["Handle speed, direction and distance", "Combine derivative and integral reasoning", "Practise under time"]),
  P("9.7", "Free-Response Type: Differential Equations", 9, "exam skills", "Slope field, separation of variables and a tangent-line estimate in one question.", ["Earn every separation-of-variables point", "Use the differential equation for d²y/dx²", "Practise under time"]),
  P("9.8", "Multiple-Choice Technique and the Last Two Weeks", 9, "exam skills", "Eliminating distractors, and a revision plan.", ["Recognise standard distractors", "Decide when to skip and return", "Follow a two-week revision schedule"]),
];

for (let i = 0; i < subjects.length; i++) {
  const a = authored[subjects[i].code];
  if (a) subjects[i] = a;
}

async function run() {
  const env = {};
  for (const line of readFileSync(join(__dirname, "..", ".env.local"), "utf8").split("\n")) {
    const m = line.match(/^([A-Z0-9_]+)=(.*)$/);
    if (m) env[m[1]] = m[2].trim();
  }
  const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });

  const { data: created } = await db.auth.admin.createUser({
    email: TEACHER_EMAIL, password: teacherPassword(env), email_confirm: true,
    user_metadata: { full_name: "Integration Academy", role: "admin" },
  });
  let teacherId = created?.user?.id;
  if (!teacherId) {
    const { data: list } = await db.auth.admin.listUsers({ perPage: 1000 });
    teacherId = list.users.find((u) => u.email === TEACHER_EMAIL)?.id;
    if (!teacherId) throw new Error("Could not create or find teacher.");
  }

  let course;
  const existing = await db.from("courses").select("id").eq("code", COURSE_CODE).maybeSingle();
  if (existing.data) {
    course = existing.data;
    await db.from("courses").update({ title: COURSE_TITLE, description: DESC, level: "12" }).eq("id", course.id);
  } else {
    const ins = await db.from("courses").insert({ teacher_id: teacherId, code: COURSE_CODE, title: COURSE_TITLE, description: DESC, level: "12", published: false }).select("id").single();
    if (ins.error) throw ins.error;
    course = ins.data;
  }
  console.log("Course:", course.id);

  // Update lessons in place (matched by code) so bank_questions.lesson_id and
  // student progress survive a re-seed; only lessons no longer listed are removed.
  const { data: old } = await db.from("lessons").select("id, title").eq("course_id", course.id);
  const byCode = new Map((old ?? []).map((l) => [l.title.split(" ")[0], l]));
  let pos = 0, full = 0;
  for (const s of subjects) {
    const row = { course_id: course.id, title: `${s.code} ${s.title}`, blocks: s.blocks, position: pos++, published: true };
    const prev = byCode.get(s.code);
    const { error } = prev ? await db.from("lessons").update(row).eq("id", prev.id) : await db.from("lessons").insert(row);
    if (error) throw error;
    byCode.delete(s.code);
    if (!JSON.stringify(s.blocks).includes("are being written")) full++;
  }
  for (const gone of byCode.values()) await db.from("lessons").delete().eq("id", gone.id);
  // Assignments: upsert by title, never delete (submissions cascade from the row).
  let asg = 0;
  for (const ad of Object.values(ASSIGN)) {
    const prev = await db.from("assignments").select("id").eq("course_id", course.id).eq("title", ad.title).maybeSingle();
    const { error } = prev.data
      ? await db.from("assignments").update({ description: ad.description, published: SHOW_ASSIGNMENTS }).eq("id", prev.data.id)
      : await db.from("assignments").insert({ course_id: course.id, title: ad.title, description: ad.description, published: SHOW_ASSIGNMENTS });
    if (error) throw error;
    asg++;
  }
  console.log(`Done. Seeded ${subjects.length} lessons (${full} full, ${subjects.length - full} planned) + ${asg} assignments.`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  run().catch((e) => { console.error("SEED FAILED:", e.message ?? e); process.exit(1); });
}
