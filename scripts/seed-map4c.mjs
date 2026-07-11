// Seeds the full MAP4C (Foundations for College Mathematics, Grade 12, College
// Preparation) course. Strands: A Mathematical Models · B Personal Finance ·
// C Geometry & Trigonometry · D Data Management.
// Scaffolds are spliced with fully-authored lessons from map4c-lessons.mjs.
// Usage: node scripts/seed-map4c.mjs
import { createClient } from "@supabase/supabase-js";
import { teacherPassword } from "./_teacher-secret.mjs";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { sk } from "./seed-mpm2d.mjs";
import { authored } from "./map4c-lessons.mjs";
import { ASSIGN } from "./map4c-assignments.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const env = {};
for (const line of readFileSync(join(__dirname, "..", ".env.local"), "utf8").split("\n")) {
  const m = line.match(/^([A-Z0-9_]+)=(.*)$/);
  if (m) env[m[1]] = m[2].trim();
}
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });

const TEACHER_EMAIL = "teacher@integrationacademy.ca";
const COURSE_TITLE = "Foundations for College Mathematics (MAP4C)";
const DESC = "Ontario Grade 12 Foundations for College Mathematics, College Preparation (MAP4C). Applied, interactive lessons across Mathematical Models (exponential relations and graphical modelling), Personal Finance (annuities, mortgages, and budgets), Geometry & Trigonometry (measurement, optimization, and the sine/cosine laws), and Data Management (one- and two-variable statistics and probability) — preparing students for a broad range of college programs.";

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

// ── 26 lessons across 4 units (scaffolds; authored lessons spliced over them) ──
const subjects = [
  // UNIT 1 — Mathematical Models
  sk("1.1", "Exponent Laws & Rational Exponents", "Exponential modelling rests on fluent work with powers. Consolidate the exponent laws and extend them to zero, negative, and rational exponents so you can simplify expressions and evaluate powers like $27^{2/3}$ by hand.", ["Product, quotient, and power laws for a common base", "Zero and negative exponents; $a^{-n}=\\tfrac{1}{a^n}$", "Rational exponents as roots: $a^{m/n}=\\sqrt[n]{a^m}$"]),
  sk("1.2", "Solving Exponential Equations by Common Bases", "When both sides of an exponential equation can be written as powers of the same base, the exponents must be equal. Use this to solve exponential equations exactly.", ["Rewriting each side with a common base", "Equating exponents to solve", "Verifying solutions by substitution"]),
  sk("1.3", "Solving Exponential Equations Graphically", "Not every exponential equation has a common base. Solve them by graphing or a table of values with technology, reading the intersection as the solution.", ["Solving $b^x=k$ from a graph or table", "Using the intersection of two curves", "Estimating solutions to a required accuracy"]),
  sk("1.4", "Exponential Growth & Decay Applications", "Exponentials model populations, radioactive decay, and cooling. Build and use growth and decay models to answer real-world questions.", ["Growth and decay models $A=A_0\\,b^{t}$", "Doubling time and half-life", "Solving applied problems with a graph or table"]),
  sk("1.5", "Interpreting Graphs & Describing Trends", "A graph tells a story. Read graphs to describe relationships, identify trends, and make predictions or justify decisions using appropriate language and units.", ["Describing a relationship from its graph", "Identifying trends and extrapolating", "Stating assumptions behind a prediction"]),
  sk("1.6", "Rate of Change from Graphs & Tables", "Rate of change measures how fast one quantity changes with another. Read it from graphs and tables, and compare relations by whether their rate is zero, constant, or changing.", ["Rate of change and its units", "Zero, constant, and changing rates", "Comparing two relations by their rates of change"]),
  sk("1.7", "Choosing a Model: Linear, Quadratic, or Exponential", "Data can follow a line, a parabola, or an exponential curve. Recognize the signature of each and select a model to represent numerical data graphically and algebraically.", ["Constant difference (linear) vs. constant ratio (exponential)", "Recognizing quadratic patterns (second differences)", "Selecting and fitting a model to data"]),
  sk("1.8", "Powers, Roots & Working with Formulas", "Solve equations of the form $x^n=a$, find a variable of a given degree, and connect formulas to linear, quadratic, and exponential relations in multi-step problems.", ["Solving $x^n=a$ with roots", "Rearranging and evaluating formulas", "Multi-step problems from real-world formulas"]),

  // UNIT 2 — Personal Finance
  sk("2.1", "Simple & Compound Interest", "Interest is the cost of borrowing or the reward for saving. Compare simple interest (on the principal only) with compound interest (on the growing balance) and compute each.", ["Simple interest $I=Prt$ and total amount", "Compound interest $A=P(1+i)^n$", "Comparing simple and compound growth"]),
  sk("2.2", "Annuities: Future Value", "An annuity is a series of equal, regular payments. Find the future value — what a stream of deposits grows to — and see how the conditions change the result.", ["Key features of an ordinary simple annuity", "Future value of regular deposits", "Effect of payment size, rate, and frequency"]),
  sk("2.3", "Annuities: Present Value", "The present value of an annuity is the single amount, invested today, equivalent to a future stream of payments. Use it for loans and to value regular payments.", ["Present value of an annuity", "Relating present value, payment, and amount", "Loan and savings applications"]),
  sk("2.4", "Mortgages & Amortization", "A mortgage is an annuity whose present value is the amount borrowed. Read and generate amortization tables and see how term and rate affect the total interest.", ["Mortgages as annuities; key features", "Reading and generating an amortization table", "Effect of term and rate on total interest"]),
  sk("2.5", "Renting vs Owning Accommodation", "Housing is most people's largest expense. Compare the fixed and variable costs of renting and owning, and weigh the financial and non-financial trade-offs.", ["Fixed vs. variable costs of accommodation", "Comparing renting and owning", "Affordability under given circumstances"]),
  sk("2.6", "Designing Budgets", "A budget plans income against expenses. Design, justify, and adjust a monthly budget for a case study, and build a savings plan toward a long-term goal.", ["Estimating living costs; income vs. expenses", "Designing and justifying a monthly budget", "Adjusting a budget for changing circumstances"]),

  // UNIT 3 — Geometry & Trigonometry
  sk("3.1", "Unit Conversion (Metric & Imperial)", "Real measurement mixes systems. Convert within and between the metric and imperial systems as needed within applications, using appropriate tools.", ["Metric prefixes and conversions", "Metric $\\leftrightarrow$ imperial conversions", "Converting within an applied problem"]),
  sk("3.2", "Areas of Composite Shapes", "Break a complex region into rectangles, triangles, and circles to find its total area in real-world situations.", ["Areas of rectangles, triangles, and circles", "Decomposing composite regions", "Real-world area problems"]),
  sk("3.3", "Surface Area & Volume of Composite Figures", "Compute the surface area and volume of prisms, cylinders, and composite solids that arise in packaging, construction, and design.", ["Surface area and volume of prisms and cylinders", "Composite 3-D figures (add or subtract parts)", "Real-world capacity and material problems"]),
  sk("3.4", "Optimizing Perimeter & Area (2-D)", "For a fixed constraint, one shape is best. Investigate the dimensions that minimize perimeter or maximize area, and explain why optimal dimensions matter.", ["Why optimal dimensions matter", "Maximizing area for a fixed perimeter", "Minimizing perimeter for a fixed area"]),
  sk("3.5", "Optimizing Surface Area & Volume (3-D)", "Packaging seeks the least material for the most volume. Find the optimal dimensions of prisms and cylinders for a given constraint.", ["Optimal dimensions of a rectangular prism", "Optimal dimensions of a cylinder", "Minimum surface area for a given volume"]),
  sk("3.6", "Right-Triangle Trigonometry", "The primary trig ratios connect a right triangle's sides and angles. Use them to find unknown sides and angles in two-dimensional problems.", ["Sine, cosine, and tangent (SOH-CAH-TOA)", "Finding sides and angles", "Applications with angles of elevation and depression"]),
  sk("3.7", "The Sine Law & the Cosine Law", "Oblique triangles need more than right-triangle trig. Apply the sine law and cosine law — including obtuse angles — to solve real-world triangle problems.", ["Trig ratios of obtuse angles", "The sine law (non-ambiguous) and cosine law", "Oblique-triangle applications"]),

  // UNIT 4 — Data Management
  sk("4.1", "One-Variable Statistics & Displaying Data", "Data becomes meaning through summary and display. Compute measures of centre and spread, and choose an appropriate graph to represent a data set.", ["Mean, median, mode, and range", "Choosing bar graphs, histograms, and circle graphs", "Reading and interpreting displays"]),
  sk("4.2", "Sampling, Bias & the Misuse of Statistics", "A conclusion is only as good as its sample. Distinguish population from sample, identify bias, and recognize how statistics can be misused to mislead.", ["Population vs. sample; a good sample", "Sources of bias", "How media misuse statistics"]),
  sk("4.3", "Two-Variable Data & Scatter Plots", "Two-variable data reveals relationships. Build a scatter plot and describe the relationship it shows between two quantities.", ["Plotting paired data", "Independent vs. dependent variables", "Describing the pattern in a scatter plot"]),
  sk("4.4", "Correlation, Trends & the Line of Best Fit", "A trend line summarizes a scatter plot. Describe correlation, fit a line of best fit with technology, and use it to make predictions.", ["Positive, negative, and no correlation; strength", "Line of best fit from technology", "Interpolation and extrapolation"]),
  sk("4.5", "Probability & Making Decisions", "Probability measures chance. Compute theoretical and experimental probability, compare them, and use probability to inform real decisions.", ["Theoretical probability as a ratio", "Experimental probability and simulation", "Using probability to make decisions"]),
];

// Splice fully-authored lessons over their scaffolds (map4c-lessons.mjs).
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
    await db.from("courses").update({ code: "MAP4C", description: DESC, level: "12", published: true }).eq("id", course.id);
  } else {
    const ins = await db.from("courses").insert({ teacher_id: teacherId, code: "MAP4C", title: COURSE_TITLE, description: DESC, level: "12", published: true }).select("id").single();
    if (ins.error) throw ins.error;
    course = ins.data;
  }
  console.log("Course:", course.id);

  await db.from("lessons").delete().eq("course_id", course.id);
  let pos = 0, full = 0;
  for (const s of subjects) {
    const { error } = await db.from("lessons").insert({ course_id: course.id, title: `${s.code} ${s.title}`, blocks: s.blocks, position: pos++, published: true });
    if (error) throw error;
    if (!JSON.stringify(s.blocks).includes("are being written")) full++;
    console.log(`  ${s.code} ${s.title}`);
  }
  console.log(`\nSeeded ${subjects.length} MAP4C lessons (${full} full, ${subjects.length - full} scaffold).`);

  // ── Assignments (K/Application/Thinking, one per topic) ──
  await db.from("assignments").delete().eq("course_id", course.id);
  let asg = 0;
  for (const s of subjects) {
    const ad = ASSIGN[s.code];
    if (!ad) continue;
    const { error: ae } = await db.from("assignments").insert({ course_id: course.id, title: ad.title, description: ad.description, published: true });
    if (ae) throw ae;
    asg++;
  }
  console.log(`Seeded ${asg} MAP4C assignments.`);
}

run().catch((e) => { console.error(e); process.exit(1); });
