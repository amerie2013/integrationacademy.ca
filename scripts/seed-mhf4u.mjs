// Seeds the full MHF4U (Advanced Functions, Grade 12, University Preparation) course.
// Strands: A Exponential & Logarithmic · B Trigonometric · C Polynomial & Rational · D Characteristics of Functions.
// Authored lessons (Grade 9/10/MCR3U theme + professional interactive graphs) override scaffolds unit by unit.
// Usage: node scripts/seed-mhf4u.mjs
import { createClient } from "@supabase/supabase-js";
import { teacherPassword } from "./_teacher-secret.mjs";
import { readFileSync } from "fs";
import { fileURLToPath, pathToFileURL } from "url";
import { dirname, join } from "path";
import { sk } from "./seed-mpm2d.mjs";
import { authored } from "./mhf4u-lessons.mjs";
import { ASSIGN } from "./mhf4u-assignments.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const env = {};
for (const line of readFileSync(join(__dirname, "..", ".env.local"), "utf8").split("\n")) {
  const m = line.match(/^([A-Z0-9_]+)=(.*)$/);
  if (m) env[m[1]] = m[2].trim();
}
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });

const TEACHER_EMAIL = "teacher@integrationacademy.ca";
const COURSE_TITLE = "Advanced Functions (MHF4U)";
const DESC = "Ontario Grade 12 Advanced Functions, University Preparation (MHF4U). Deep interactive lessons across Polynomial & Rational Functions, Exponential & Logarithmic Functions, Trigonometric Functions (radians & identities), and the Characteristics of Functions (rates of change, combining functions).";

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
  // ── UNIT 1 — Polynomial Functions (Strand C1) ──
  sk("1.1", "Power Functions & End Behaviour", "How degree and leading coefficient set a polynomial's ends.", ["Power functions y=axⁿ", "Even vs odd degree", "End behaviour as x→±∞"]),
  sk("1.2", "Characteristics of Polynomial Functions", "Degree, turning points, zeros, symmetry, finite differences.", ["Max zeros & turning points", "Finite differences", "Even & odd functions"]),
  sk("1.3", "Equations & Graphs of Polynomial Functions", "Factored form, zeros, and multiplicity.", ["Zeros from factors", "Multiplicity: cross vs touch", "Sketch & build equations"]),
  sk("1.4", "Transformations of Functions", "Apply y=a·f(k(x−d))+c to power functions.", ["Stretches & reflections", "Horizontal & vertical shifts", "Map points & write equations"]),
  // ── UNIT 2 — Polynomial Equations & Inequalities (Strand C3, C4) ──
  sk("2.1", "Dividing Polynomials", "Long and synthetic division.", ["Long division", "Synthetic division", "Quotient & remainder"]),
  sk("2.2", "Remainder & Factor Theorems", "Find factors and remainders quickly.", ["Remainder theorem", "Factor theorem", "Find rational zeros"]),
  sk("2.3", "Solving Polynomial Equations", "Factor fully and find all real roots.", ["Factor by grouping & theorems", "Find all roots", "Real-world applications"]),
  sk("2.4", "Polynomial Inequalities", "Solve inequalities with sign analysis.", ["Sign charts", "Intervals of the solution", "Graphical reasoning"]),
  // ── UNIT 3 — Rational Functions (Strand C2, C3, C4) ──
  sk("3.1", "Reciprocal & Rational Functions", "Asymptotes and key features.", ["Vertical & horizontal asymptotes", "Holes", "Domain & range"]),
  sk("3.2", "Graphs of Rational Functions", "Sketch rational functions from features.", ["Intercepts & asymptotes", "Behaviour near asymptotes", "Sketching strategy"]),
  sk("3.3", "Solving Rational Equations & Inequalities", "Solve algebraically and with sign charts.", ["Rational equations", "Restrictions", "Rational inequalities"]),
  // ── UNIT 4 — Exponential & Logarithmic Functions (Strand A1, A2, A3) ──
  sk("4.1", "Logarithms & the Laws of Logarithms", "Logs as inverse exponents.", ["Exponential ↔ logarithmic form", "Evaluate logarithms", "Product, quotient & power laws"]),
  sk("4.2", "Graphs of Logarithmic Functions", "The log graph and its transformations.", ["Inverse of the exponential", "Asymptote, domain & range", "Transformations"]),
  sk("4.3", "Solving Exponential & Logarithmic Equations", "Solve with logs and log laws.", ["Same-base & taking logs", "Solve log equations", "Check restrictions"]),
  sk("4.4", "Applications of Exponential & Log Models", "Growth, decay and log scales.", ["Compound growth & decay", "Doubling & half-life with logs", "pH, dB & Richter scales"]),
  // ── UNIT 5 — Trigonometric Functions (Strand B1, B2) ──
  sk("5.1", "Radian Measure", "Measure angles in radians.", ["Degrees ↔ radians", "Arc length & special angles", "The radian unit circle"]),
  sk("5.2", "Trigonometric Ratios & the Unit Circle", "Exact values around the unit circle.", ["Unit-circle coordinates", "Exact values in radians", "Solving over [0, 2π)"]),
  sk("5.3", "Graphs of Sinusoidal Functions", "Sine & cosine graphs in radians.", ["Amplitude, period, phase, midline", "Period = 2π/k", "Model & read graphs"]),
  sk("5.4", "Reciprocal Trigonometric Functions", "Cosecant, secant, cotangent.", ["Define csc, sec, cot", "Their graphs & asymptotes", "Evaluate exactly"]),
  // ── UNIT 6 — Trigonometric Identities & Equations (Strand B3) ──
  sk("6.1", "Compound Angle Formulas", "Sine & cosine of sums and differences.", ["sin(A±B), cos(A±B)", "Exact values of new angles", "Simplify expressions"]),
  sk("6.2", "Double Angle Formulas", "Identities for 2θ.", ["sin 2θ, cos 2θ, tan 2θ", "Derive from compound angles", "Apply to problems"]),
  sk("6.3", "Proving Trigonometric Identities", "Prove identities by rewriting.", ["Pythagorean & quotient identities", "Work one side", "Strategies for proofs"]),
  sk("6.4", "Solving Trigonometric Equations", "Solve over a given interval.", ["Linear & quadratic in trig", "Use identities first", "All solutions in the interval"]),
  // ── UNIT 7 — Rates of Change & Combining Functions (Strand D1, D2, D3) ──
  sk("7.1", "Average & Instantaneous Rate of Change", "Slopes of secants and tangents.", ["Average rate (secant)", "Instantaneous rate (tangent)", "Estimate from a graph or table"]),
  sk("7.2", "Combining Functions", "Add, subtract, multiply, divide functions.", ["(f±g), (fg), (f/g)", "Domain of the result", "Read combined graphs"]),
  sk("7.3", "Composition of Functions", "Build f(g(x)) and decompose.", ["Evaluate f(g(x))", "Domain of a composite", "Decompose a function"]),
];

// Replace scaffolds with fully-authored lessons as each unit is written.
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
    await db.from("courses").update({ code: "MHF4U", description: DESC, level: "12", published: true }).eq("id", course.id);
  } else {
    const ins = await db.from("courses").insert({ teacher_id: teacherId, code: "MHF4U", title: COURSE_TITLE, description: DESC, level: "12", published: true }).select("id").single();
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
  if (asgOnly) console.log(`\nDone. Refreshed ${asg} MHF4U assignments (lessons untouched).`);
  else console.log(`\nDone. Seeded ${subjects.length} MHF4U lessons (${full} full, ${subjects.length - full} scaffold) + ${asg} assignments.`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  run().catch((e) => { console.error("SEED FAILED:", e.message ?? e); process.exit(1); });
}

export { subjects };
