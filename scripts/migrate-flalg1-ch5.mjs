// One-off, NON-destructive Chapter 5 restructure for ALG1:
//   5.2 → "Factoring Trinomials when a = 1" (redefined)
//   5.3 → "Factoring Trinomials when a ≠ 1" (NEW, inserted)
//   old 5.3→5.4, 5.4→5.5, 5.5→5.6, 5.6→5.7 (renamed in place, blocks kept)
// Surgical: touches ONLY Chapter 5 lessons; 5.1 and every other lesson's
// hand-edited blocks are preserved (no full seed). Usage: node scripts/migrate-flalg1-ch5.mjs
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { authored as A } from "./flalg1-lessons.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const env = {};
for (const line of readFileSync(join(__dirname, "..", ".env.local"), "utf8").split("\n")) {
  const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim();
}
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });

// sanity: source keys must be the new structure
for (const k of ["5.2", "5.3", "5.4", "5.5", "5.6", "5.7"]) {
  if (!A[k]) throw new Error(`authored[${k}] missing — source not updated`);
}
if (!/a = 1/.test(A["5.2"].title) || !/a ≠ 1/.test(A["5.3"].title)) throw new Error("5.2/5.3 titles not split — abort");

const { data: course } = await db.from("courses").select("id").eq("code", "ALG1").single();
const cid = course.id;

// 1. Rename the shifted lessons (title only, keep blocks) — high → low to avoid collisions
const renames = [
  ["5.6 Function Transformations: f(x)+k, kf(x), f(x+k)", "5.7 Function Transformations: f(x)+k, kf(x), f(x+k)"],
  ["5.5 Completing the Square & The Quadratic Formula", "5.6 Completing the Square & The Quadratic Formula"],
  ["5.4 Solving Quadratics by Factoring and Square Roots", "5.5 Solving Quadratics by Factoring and Square Roots"],
  ["5.3 Features of Parabolas (Vertex, Axis of Symmetry, Intercepts)", "5.4 Features of Parabolas (Vertex, Axis of Symmetry, Intercepts)"],
];
for (const [oldT, newT] of renames) {
  const { data: row } = await db.from("lessons").select("id").eq("course_id", cid).eq("title", oldT).maybeSingle();
  if (!row) { console.log("SKIP rename (not found):", oldT); continue; }
  const { error } = await db.from("lessons").update({ title: newT }).eq("id", row.id);
  if (error) throw error;
  console.log("renamed:", oldT.slice(0, 24), "→", newT.slice(0, 24));
}

// 2. Redefine 5.2 → a = 1 (replace title + blocks of the current 5.2 row)
const t52 = `5.2 ${A["5.2"].title}`;
{
  const { data: row } = await db.from("lessons").select("id,title").eq("course_id", cid).ilike("title", "5.2 %").maybeSingle();
  if (!row) throw new Error("no 5.2 row found");
  const { error } = await db.from("lessons").update({ title: t52, blocks: A["5.2"].blocks, published: true }).eq("id", row.id);
  if (error) throw error;
  console.log("redefined:", row.title, "→", t52);
}

// 3. Insert (or update if present) the new 5.3 → a ≠ 1
const t53 = `5.3 ${A["5.3"].title}`;
{
  const { data: exists } = await db.from("lessons").select("id").eq("course_id", cid).ilike("title", "5.3 %").maybeSingle();
  if (exists) {
    const { error } = await db.from("lessons").update({ title: t53, blocks: A["5.3"].blocks, published: true }).eq("id", exists.id);
    if (error) throw error; console.log("updated existing 5.3 →", t53);
  } else {
    const { error } = await db.from("lessons").insert({ course_id: cid, title: t53, blocks: A["5.3"].blocks, position: 999, published: true });
    if (error) throw error; console.log("inserted new 5.3 →", t53);
  }
}

// 4. Renumber positions across the whole course by lesson code
const { data: all } = await db.from("lessons").select("id,title").eq("course_id", cid);
const codeOf = (t) => { const m = t.match(/^(\d+)\.(\d+)/); return m ? [+m[1], +m[2]] : [99, 99]; };
all.sort((x, y) => { const a = codeOf(x.title), b = codeOf(y.title); return a[0] - b[0] || a[1] - b[1]; });
for (let i = 0; i < all.length; i++) await db.from("lessons").update({ position: i + 1 }).eq("id", all[i].id);
console.log("repositioned", all.length, "lessons");

// report Chapter 5
const ch5 = all.filter((l) => /^5\./.test(l.title)).sort((x, y) => codeOf(x.title)[1] - codeOf(y.title)[1]);
console.log("\nChapter 5 now:");
ch5.forEach((l) => console.log("  " + l.title));
