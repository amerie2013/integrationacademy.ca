// MHF4U-FR: removes the OLD French lessons and assignments (the 26 + 26 rows seeded by seed-mhf4u-fr.mjs,
// 7-unit layout) once the new 8-chapter French content (fixed ids 6d4f4652-…) is loaded.
// Assignments with any submission are kept and reported. Rows are backed up first.
//   node scripts/mhf4u-fr/remove-old.mjs          -> dry run
//   node scripts/mhf4u-fr/remove-old.mjs --apply  -> delete
// Then re-sort positions: node scripts/mhf4u-fr/positions.mjs --apply
import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";
import { CID_FR } from "./common.mjs";

const APPLY = process.argv.includes("--apply");
const env = {};
for (const line of fs.readFileSync(".env.local", "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });
const isNew = (id) => id.startsWith("6d4f4652-");

const { data: lessons, error: e1 } = await db.from("lessons").select("*").eq("course_id", CID_FR);
if (e1) throw e1;
const { data: asgs, error: e2 } = await db.from("assignments").select("*").eq("course_id", CID_FR);
if (e2) throw e2;
const oldL = lessons.filter((l) => !isNew(l.id)), oldA = asgs.filter((a) => !isNew(a.id));
const newL = lessons.length - oldL.length, newA = asgs.length - oldA.length;
console.log(`lessons: ${newL} new, ${oldL.length} old to remove; assignments: ${newA} new, ${oldA.length} old`);
if (newL < 51) { console.log(`Only ${newL} new lessons are loaded (expected 51) — refusing to remove the old course.`); process.exit(1); }

const keep = new Set();
for (const a of oldA) {
  const { count } = await db.from("submissions").select("id", { count: "exact", head: true }).eq("assignment_id", a.id);
  if (count) { keep.add(a.id); console.log(`  KEEP ${a.title}: ${count} submissions`); }
}
for (const l of oldL) console.log(`  - lesson ${l.title}`);
for (const a of oldA) if (!keep.has(a.id)) console.log(`  - assignment ${a.title}`);
if (!APPLY) { console.log("Dry run."); process.exit(0); }

fs.mkdirSync(path.resolve("scripts/mhf4u-fr/backup"), { recursive: true });
fs.writeFileSync(path.resolve("scripts/mhf4u-fr/backup", `old-course.${new Date().toISOString().replace(/[:.]/g, "-")}.json`), JSON.stringify({ lessons: oldL, assignments: oldA }, null, 1));
for (const l of oldL) { const r = await db.from("lessons").delete().eq("id", l.id); if (r.error) throw r.error; }
for (const a of oldA) if (!keep.has(a.id)) { const r = await db.from("assignments").delete().eq("id", a.id); if (r.error) throw r.error; }
console.log("removed");
