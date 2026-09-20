// Seeds the full MCV4U (Calculus and Vectors, Grade 12, University Preparation) course.
// Strands: A Rate of Change · B Derivatives & Their Applications · C Geometry & Algebra of Vectors.
// Authored lessons (MCR3U theme + derivative animations) override scaffolds unit by unit.
// Usage: node scripts/seed-mcv4u.mjs
import { createClient } from "@supabase/supabase-js";
import { teacherPassword } from "./_teacher-secret.mjs";
import { readFileSync } from "fs";
import { fileURLToPath, pathToFileURL } from "url";
import { dirname, join } from "path";
import { sk } from "./seed-mpm2d.mjs";
import { authored } from "./mcv4u-lessons.mjs";
import { ASSIGN } from "./mcv4u-assignments.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const env = {};
for (const line of readFileSync(join(__dirname, "..", ".env.local"), "utf8").split("\n")) {
  const m = line.match(/^([A-Z0-9_]+)=(.*)$/);
  if (m) env[m[1]] = m[2].trim();
}
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });

const TEACHER_EMAIL = "teacher@integrationacademy.ca";
const COURSE_TITLE = "Calculus and Vectors (MCV4U)";
const DESC = "Ontario Grade 12 Calculus and Vectors, University Preparation (MCV4U). Deep interactive lessons across Rate of Change & Limits, the Derivative and its rules, Curve Sketching, Applications of Derivatives (optimization, related rates, kinematics), and the Geometry & Algebra of Vectors, lines, and planes — with graphing-calculator animations of the derivative.";

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

const subjects = [
  // ── UNIT 1 — Rates of Change & Limits (Strand A1) ──
  sk("1.1", "Average & Instantaneous Rate of Change", "Secants, tangents, and the difference quotient.", ["Average rate (secant)", "Instantaneous rate (tangent)", "The difference quotient & its limit"]),
  sk("1.2", "The Limit of a Function", "Evaluate limits numerically and algebraically.", ["Direct substitution", "Indeterminate 0/0 (factor / rationalize)", "One-sided limits & limits at infinity"]),
  sk("1.3", "Continuity & Limit Laws", "Continuity, discontinuities, and the limit laws.", ["The three conditions for continuity", "Removable, jump & infinite breaks", "Applying the limit laws"]),
  sk("1.4", "Slope of Tangent", "Find the exact tangent slope at a point, using a limit.", ["m = lim (f(a+h)-f(a))/h", "Confirms Lesson 1.1's estimate exactly", "Equation of a tangent line"]),
  sk("1.5", "Derivative Using Definition", "Define and compute f'(x) as a limit, for a general x.", ["The limit definition of f'(x)", "Differentiate polynomials, 1/x, √x", "Using f'(x) to skip the limit at any point"]),
  // ── UNIT 2 — Derivative Rules (Strand A3) ──
  sk("2.1", "Power, Constant & Sum Rules", "Differentiate polynomials fast.", ["Power rule", "Constant multiple & sum/difference", "Polynomial derivatives"]),
  sk("2.2", "Product & Quotient Rules", "Differentiate products and quotients.", ["The product rule", "The quotient rule", "Combining the rules"]),
  sk("2.3", "The Chain Rule", "Differentiate composite functions.", ["Outer × inner derivative", "Powers of a function", "Nested compositions"]),
  sk("2.4", "Rational, Radical & Higher-Order Derivatives", "Apply the rules to harder functions.", ["Rational & radical functions", "Second derivatives", "Implicit differentiation (intro)"]),
  // ── UNIT 3 — Derivatives of Transcendental Functions (Strand A2, A3) ──
  sk("3.1", "Derivatives of Sinusoidal Functions", "Differentiate sine and cosine.", ["d/dx sin x = cos x", "d/dx cos x = −sin x", "With the chain rule"]),
  sk("3.2", "Derivatives of Exponential Functions", "Differentiate eˣ and bˣ.", ["d/dx eˣ = eˣ", "d/dx bˣ = bˣ ln b", "With the chain rule"]),
  sk("3.3", "Derivatives of Logarithmic Functions", "Differentiate ln x and connect f to f'.", ["d/dx ln x = 1/x", "Logarithmic differentiation", "Graph of f vs f'"]),
  // ── UNIT 4 — Curve Sketching (Strand B1) ──
  sk("4.1", "Increasing/Decreasing & the First Derivative Test", "Use f' to find intervals and extrema.", ["Sign of f'", "Critical numbers", "Local max / min"]),
  sk("4.2", "Concavity & the Second Derivative", "Use f'' for concavity and inflection.", ["Sign of f''", "Concave up / down", "Inflection points"]),
  sk("4.3", "Critical, Inflection & End Behaviour", "Assemble all the key features.", ["Critical & inflection points", "Asymptotes", "Reading f, f', f'' together"]),
  sk("4.4", "Full Curve Sketching", "Sketch a curve from start to finish.", ["The full analysis checklist", "Polynomials & rationals", "Match a function to its derivative"]),
  // ── UNIT 5 — Applications of Derivatives (Strand B2) ──
  sk("5.1", "Optimization", "Maximize or minimize a modelled quantity.", ["Set up the model & domain", "Solve f'=0", "Verify the optimum"]),
  sk("5.2", "Related Rates", "Relate rates through a shared equation.", ["Differentiate with respect to time", "Substitute the instant", "Solve for the unknown rate"]),
  sk("5.3", "Kinematics: Velocity & Acceleration", "Position, velocity, acceleration.", ["v = s', a = v' = s''", "Direction & speed", "When is it speeding up?"]),
  // ── UNIT 6 — Geometry & Algebra of Vectors (Strand C1, C2) ──
  sk("6.1", "Introduction to Vectors", "Magnitude, direction, and geometry.", ["Vectors vs scalars", "Magnitude & direction", "Equal & opposite vectors"]),
  sk("6.2", "Vector Operations (Geometric)", "Add, subtract, and scale vectors.", ["Triangle & parallelogram laws", "Scalar multiplication", "Resultants"]),
  sk("6.3", "Cartesian Vectors in 2-D & 3-D", "Components, magnitude, unit vectors.", ["Component form", "Magnitude in 2-D/3-D", "Operations on components"]),
  sk("6.4", "The Dot Product", "Multiply vectors to a scalar.", ["a·b = |a||b|cosθ", "Component formula", "Angle & orthogonality"]),
  sk("6.5", "The Cross Product", "Multiply vectors to a perpendicular vector.", ["a×b in 3-D", "Magnitude = area", "Direction (right-hand rule)"]),
  // ── UNIT 7 — Lines & Planes (Strand C3, C4) ──
  sk("7.1", "Equations of Lines", "Vector, parametric & symmetric forms.", ["Direction vector & a point", "Vector & parametric form", "Symmetric form"]),
  sk("7.2", "Equations of Planes", "Normal vectors and plane equations.", ["Normal vector", "Scalar & vector equations", "A point on a plane"]),
  sk("7.3", "Intersections of Lines & Planes", "Where lines and planes meet.", ["Line–line intersection", "Line–plane intersection", "Parallel / skew / coincident"]),
];

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
    await db.from("courses").update({ code: "MCV4U", description: DESC, level: "12", published: true }).eq("id", course.id);
  } else {
    const ins = await db.from("courses").insert({ teacher_id: teacherId, code: "MCV4U", title: COURSE_TITLE, description: DESC, level: "12", published: true }).select("id").single();
    if (ins.error) throw ins.error;
    course = ins.data;
  }
  console.log("Course:", course.id);

  // --assignments-only: refresh assignment text without re-seeding lessons.
  const asgOnly = process.argv.includes("--assignments-only");
  if (!asgOnly) await db.from("lessons").delete().eq("course_id", course.id);
  // assignments.id is referenced by submissions.assignment_id ON DELETE CASCADE —
  // never delete assignment rows (it destroys student submissions). Upsert by title below.
  let pos = 0, full = 0, asg = 0;
  for (const s of subjects) {
    if (!asgOnly) {
    const { error } = await db.from("lessons").insert({ course_id: course.id, title: `${s.code} ${s.title}`, blocks: s.blocks, position: pos++, published: true });
    if (error) throw error;
    }
    if (!JSON.stringify(s.blocks).includes("are being written")) full++;
    const ad = ASSIGN[s.code];
    if (ad) {
      const existingA = await db.from("assignments").select("id").eq("course_id", course.id).eq("title", ad.title).maybeSingle();
      const { error: ae } = existingA.data
        ? await db.from("assignments").update({ description: ad.description, published: true }).eq("id", existingA.data.id)
        : await db.from("assignments").insert({ course_id: course.id, title: ad.title, description: ad.description, published: true });
      if (ae) throw ae;
      asg++;
    }
    console.log(`  ${s.code} ${s.title}`);
  }
  if (asgOnly) console.log(`\nDone. Refreshed ${asg} MCV4U assignments (lessons untouched).`);
  else console.log(`\nDone. Seeded ${subjects.length} MCV4U lessons (${full} full, ${subjects.length - full} scaffold) + ${asg} assignments.`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  run().catch((e) => { console.error("SEED FAILED:", e.message ?? e); process.exit(1); });
}

export { subjects };
