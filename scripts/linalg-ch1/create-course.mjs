// Creates the Linear Algebra I course row (code LINALG1, level university) — UNPUBLISHED, so it stays off the public
// catalog until it is reviewed. Safe to re-run: an existing LINALG1 row is left alone (its description is refreshed).
//   node scripts/linalg-ch1/create-course.mjs           -> dry run
//   node scripts/linalg-ch1/create-course.mjs --apply
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";

const APPLY = process.argv.includes("--apply");
const env = {};
for (const line of readFileSync(".env.local", "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });

export const CODE = "LINALG1";
const TITLE = "Linear Algebra I";
const DESCRIPTION = "First-year university linear algebra, from vectors to eigenvalues. Nine chapters: Vectors and the Geometry of Rⁿ, Systems of Linear Equations, Matrix Algebra, Span, Linear Independence and Bases, Subspaces, Dimension and the Fundamental Subspaces, Inverses and Determinants, Linear Transformations, Eigenvalues and Eigenvectors, and Orthogonality and Least Squares. Interactive lessons with worked examples, proofs and 3-D figures, printable worksheets, and practice assignments with instant feedback.";

const { data: have, error } = await db.from("courses").select("id, code, title, published").eq("code", CODE);
if (error) throw error;
if (have.length) {
  console.log(`exists: ${have[0].id} "${have[0].title}" published=${have[0].published}`);
  if (APPLY) { const r = await db.from("courses").update({ description: DESCRIPTION }).eq("id", have[0].id); if (r.error) throw r.error; console.log("description refreshed"); }
  process.exit(0);
}
// same owner as every other course on the site
const { data: ref } = await db.from("courses").select("teacher_id").eq("code", "MCV4U").single();
const row = { teacher_id: ref.teacher_id, code: CODE, title: TITLE, description: DESCRIPTION, level: "university", published: false, language: "en" };
console.log(APPLY ? "creating" : "[dry] would create", row);
if (APPLY) {
  const r = await db.from("courses").insert(row).select("id").single();
  if (r.error) throw r.error;
  console.log("created course", r.data.id);
}
