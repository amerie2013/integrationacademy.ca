// Seeds the full MCT4C (Mathematics for College Technology, Grade 12, College
// Preparation) course — same lecture-box theme as the other courses.
// Strands: A Exponential Functions · B Polynomial Functions ·
//          C Trigonometric Functions · D Vectors & Geometry.
// Scaffolds are spliced with fully-authored lessons from mct4c-lessons.mjs.
// Usage: node scripts/seed-mct4c.mjs
import { createClient } from "@supabase/supabase-js";
import { teacherPassword } from "./_teacher-secret.mjs";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { sk } from "./seed-mpm2d.mjs";
import { authored } from "./mct4c-lessons.mjs";
import { ASSIGN } from "./mct4c-assignments.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const env = {};
for (const line of readFileSync(join(__dirname, "..", ".env.local"), "utf8").split("\n")) {
  const m = line.match(/^([A-Z0-9_]+)=(.*)$/);
  if (m) env[m[1]] = m[2].trim();
}
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });

const TEACHER_EMAIL = "teacher@integrationacademy.ca";
const COURSE_TITLE = "Mathematics for College Technology (MCT4C)";
const DESC = "Ontario Grade 12 Mathematics for College Technology, College Preparation (MCT4C). Applied, interactive lessons across Exponential Functions & Logarithms, Polynomial Functions, Trigonometric Functions (sine/cosine law and sinusoidal modelling), and Vectors & Geometry — preparing students for college technology programs.";

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

// ── 30 lessons across 4 units (scaffolds; authored lessons spliced over them) ──
const subjects = [
  // UNIT 1 — Exponential Functions
  sk("1.1", "Exponent Laws", "Powers are the language of exponential growth, so the laws must be automatic. Review and extend the product, quotient, and power laws to zero, negative, and rational exponents, and simplify expressions with a common base.", ["Product, quotient, and power-of-a-power laws", "Zero and negative exponents; $a^{-n}=\\tfrac{1}{a^n}$", "Rational exponents as roots: $a^{m/n}=\\sqrt[n]{a^m}$"]),
  sk("1.2", "Exponential Functions & Their Graphs", "An exponential function $y=a\\,b^x$ multiplies by a constant factor each step. Explore its shape — a horizontal asymptote, a $y$-intercept, and growth ($b>1$) versus decay ($0<b<1$).", ["The form $y=a\\,b^x$ and its base $b$", "Key features: asymptote, intercept, domain and range", "Growth vs. decay from the base"]),
  sk("1.3", "Transformations of Exponential Functions", "Stretches, reflections, and shifts turn the parent $y=b^x$ into any exponential model. Track how $a$, $k$, $d$, and $c$ move the graph and its asymptote.", ["Vertical stretch/reflection ($a$) and horizontal stretch ($k$)", "Horizontal and vertical shifts ($d$, $c$)", "Locating the transformed asymptote and intercepts"]),
  sk("1.4", "Solving Exponential Equations by Common Bases", "When both sides can be written as powers of the same base, the exponents must be equal. Use this to solve exponential equations exactly.", ["Rewriting each side to a common base", "Equating exponents to solve", "Checking solutions by substitution"]),
  sk("1.5", "Introduction to Logarithms", "A logarithm is the exponent you need — the inverse of an exponential. Convert between exponential and logarithmic form and evaluate logarithms.", ["Logarithm as the inverse of an exponential", "Exponential $\\leftrightarrow$ logarithmic form", "Evaluating common and simple logarithms"]),
  sk("1.6", "Laws of Logarithms", "The product, quotient, and power laws let you expand and combine logarithmic expressions — and change the base when a calculator needs it.", ["Product, quotient, and power laws of logarithms", "Expanding and condensing logarithmic expressions", "The change-of-base formula"]),
  sk("1.7", "Solving Exponential Equations Using Logarithms", "When a common base is impossible, take the logarithm of both sides. Solve exponential equations and interpret the results.", ["Taking logarithms of both sides", "Isolating the variable with the power law", "Solving applied exponential equations"]),
  sk("1.8", "Growth, Decay & Compound Interest", "Exponentials model populations, radioactive decay, and money. Build and use doubling-time, half-life, and compound-interest models.", ["Growth and decay models $A=A_0\\,b^{t}$", "Doubling time and half-life", "Compound interest $A=P(1+i)^n$"]),

  // UNIT 2 — Polynomial Functions
  sk("2.1", "Polynomial Expressions & Functions", "A polynomial is a sum of power terms with whole-number exponents. Recognize polynomials, name their degree, and use function notation.", ["Recognizing polynomial expressions and functions", "Degree, leading coefficient, and standard form", "Linear and quadratic functions as polynomials"]),
  sk("2.2", "Graphs of Polynomial Functions", "The degree and leading coefficient dictate a polynomial's end behaviour and how many times it can cross the $x$-axis.", ["End behaviour from degree and leading-coefficient sign", "Maximum number of $x$-intercepts and turning points", "Comparing shapes of linear, quadratic, cubic, quartic graphs"]),
  sk("2.3", "Factored Form & Zeros", "Each factor of a polynomial names a zero. Read the $x$-intercepts and their multiplicities straight from factored form, then sketch.", ["Factors $\\leftrightarrow$ $x$-intercepts (zeros)", "Multiplicity and how the graph behaves at a zero", "Sketching from factored form"]),
  sk("2.4", "Dividing Polynomials", "Long division (and its shortcut, synthetic division) rewrites a polynomial as divisor $\\times$ quotient $+$ remainder.", ["Polynomial long division", "Synthetic division", "Writing $P(x)=D(x)Q(x)+R$"]),
  sk("2.5", "The Remainder Theorem", "The remainder when dividing by $x-a$ is simply $P(a)$ — a fast way to evaluate and to check factors.", ["The Remainder Theorem: remainder $=P(a)$", "Evaluating polynomials by substitution", "Finding an unknown coefficient from a remainder"]),
  sk("2.6", "The Factor Theorem", "$x-a$ is a factor exactly when $P(a)=0$. Use it to find factors and fully factor higher-degree polynomials.", ["The Factor Theorem: $x-a$ is a factor $\\Leftrightarrow P(a)=0$", "Testing possible integer zeros", "Factoring cubics and quartics completely"]),
  sk("2.7", "Solving Polynomial Equations", "Factor to solve. Set a polynomial equation to zero, factor it (up to degree four), and find all real roots.", ["Solving by factoring (degree $\\le4$)", "Real roots and their multiplicities", "Connecting roots to $x$-intercepts"]),
  sk("2.8", "Applications of Polynomial Functions", "Volume, profit, and design problems often reduce to a polynomial equation. Model the situation and solve.", ["Setting up polynomial models from a context", "Solving the resulting equation", "Interpreting solutions in the real-world setting"]),

  // UNIT 3 — Trigonometric Functions
  sk("3.1", "Trigonometric Ratios to 360°", "Angles past $90^\\circ$ still have sine, cosine, and tangent. Use reference angles, the CAST rule, and special angles to find ratios anywhere in $[0^\\circ,360^\\circ]$.", ["Ratios in all four quadrants (CAST rule)", "Reference angles and special angles", "Solving for angles given a ratio"]),
  sk("3.2", "The Sine Law & the Ambiguous Case", "The sine law relates sides to opposite angles in any triangle — but the SSA case can give zero, one, or two triangles.", ["The sine law $\\tfrac{a}{\\sin A}=\\tfrac{b}{\\sin B}$", "The ambiguous (SSA) case", "Deciding how many triangles exist"]),
  sk("3.3", "The Cosine Law", "When the sine law can't start (SAS or SSS), the cosine law finds the missing side or angle.", ["The cosine law $c^2=a^2+b^2-2ab\\cos C$", "SAS: finding the third side", "SSS: finding an angle"]),
  sk("3.4", "Solving Oblique-Triangle Problems", "Real problems — surveying, navigation, engineering — need the right law. Choose sine or cosine law and solve.", ["Choosing the sine or cosine law", "Multi-step triangle problems", "Applications in surveying and navigation"]),
  sk("3.5", "Graphs of Sinusoidal Functions", "Sine and cosine trace smooth repeating waves. Read amplitude, period, axis, and key points from the graph.", ["Graphs of $y=\\sin x$ and $y=\\cos x$", "Amplitude, period, and the midline (axis)", "Key points over one cycle"]),
  sk("3.6", "Transformations of Sinusoidal Functions", "The constants in $y=a\\sin(k(x-d))+c$ stretch, compress, and shift the wave. Connect each to amplitude, period, phase, and vertical shift.", ["Amplitude $|a|$ and period $\\tfrac{360^\\circ}{k}$", "Phase shift $d$ and vertical shift $c$", "Writing and graphing transformed sinusoids"]),
  sk("3.7", "Modelling with Sinusoidal Functions", "Tides, Ferris wheels, and daylight hours rise and fall like sinusoids. Build an equation from data and solve applied problems.", ["Writing a sinusoidal equation from a description or data", "Finding amplitude, period, axis, and shift", "Solving real-world sinusoidal problems"]),

  // UNIT 4 — Vectors & Geometry
  sk("4.1", "Introduction to Vectors", "A vector carries both magnitude and direction — velocity, force, displacement. Represent and describe geometric vectors.", ["Vectors vs. scalars: magnitude and direction", "Geometric vectors and notation", "Equal, opposite, and parallel vectors"]),
  sk("4.2", "Adding & Subtracting Vectors", "Vectors combine tip-to-tail. Find a resultant using the triangle and parallelogram methods, and subtract by adding the opposite.", ["Triangle (tip-to-tail) and parallelogram methods", "The resultant vector", "Subtraction as adding the opposite"]),
  sk("4.3", "Vector Applications", "Forces in equilibrium, an airplane in a crosswind, an orienteering course — all are vector problems. Model and solve them.", ["Resultant velocity and course problems", "Forces and statics (equilibrium)", "Bearings and orienteering"]),
  sk("4.4", "Areas of Composite 2-D Shapes", "Break a complex region into rectangles, triangles, trapezoids, and circles to find its total area.", ["Areas of standard 2-D shapes", "Decomposing composite regions", "Real-world area problems"]),
  sk("4.5", "Properties of Circles", "Central and inscribed angles, chords, and tangents obey precise relationships that solve many design problems.", ["Central and inscribed angle relationships", "Chord and tangent properties", "Applications of circle geometry"]),
  sk("4.6", "Surface Area & Volume", "Spheres, prisms, and cylinders each have formulas for surface area and volume. Apply them accurately.", ["Volume and surface area of prisms and cylinders", "Volume and surface area of spheres", "Choosing the right formula"]),
  sk("4.7", "Composite Figures", "Real objects combine shapes — a silo (cylinder + hemisphere), a machine part. Compute surface area and volume of composite 3-D figures.", ["Decomposing composite 3-D figures", "Total volume and surface area (watch shared faces)", "Real-world design and capacity problems"]),
];

// Splice fully-authored lessons over their scaffolds (mct4c-lessons.mjs).
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
    await db.from("courses").update({ code: "MCT4C", description: DESC, level: "12", published: true }).eq("id", course.id);
  } else {
    const ins = await db.from("courses").insert({ teacher_id: teacherId, code: "MCT4C", title: COURSE_TITLE, description: DESC, level: "12", published: true }).select("id").single();
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
  console.log(`\nSeeded ${subjects.length} MCT4C lessons (${full} full, ${subjects.length - full} scaffold).`);

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
  console.log(`Seeded ${asg} MCT4C assignments.`);
}

run().catch((e) => { console.error(e); process.exit(1); });
