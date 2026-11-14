// MTH1W-FR: removes the OLD French rows (the one lesson 1.1 + one assignment from the first translation)
// once the new 7-chapter French content (fixed ids 4d544857-…) is loaded.
// Assignments with any submission are kept and reported. Rows are backed up first.
//   node scripts/mth1w-fr/remove-old.mjs          -> dry run
//   node scripts/mth1w-fr/remove-old.mjs --apply  -> delete
import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";
import { CID_FR, ID_PREFIX } from "./common.mjs";

const APPLY = process.argv.includes("--apply");
const EXPECTED = 51;
const env = {};
for (const line of fs.readFileSync(".env.local", "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });
const isNew = (id) => id.startsWith(ID_PREFIX);

const { data: lessons, error: e1 } = await db.from("lessons").select("*").eq("course_id", CID_FR);
if (e1) throw e1;
const { data: asgs, error: e2 } = await db.from("assignments").select("*").eq("course_id", CID_FR);
if (e2) throw e2;
const oldL = lessons.filter((l) => !isNew(l.id)), oldA = asgs.filter((a) => !isNew(a.id));
const newL = lessons.length - oldL.length, newA = asgs.length - oldA.length;
console.log(`lessons: ${newL} new, ${oldL.length} old to remove; assignments: ${newA} new, ${oldA.length} old`);
if (newL < EXPECTED) { console.log(`Only ${newL} new lessons are loaded (expected ${EXPECTED}) — refusing to remove the old rows.`); process.exit(1); }

const keep = new Set();
for (const a of oldA) {
  const { count } = await db.from("submissions").select("id", { count: "exact", head: true }).eq("assignment_id", a.id);
  if (count) { keep.add(a.id); console.log(`  KEEP ${a.title}: ${count} submissions`); }
}
for (const l of oldL) console.log(`  - lesson ${l.title}`);
for (const a of oldA) if (!keep.has(a.id)) console.log(`  - assignment ${a.title}`);
if (!APPLY) { console.log("Dry run."); process.exit(0); }

fs.mkdirSync(path.resolve("scripts/mth1w-fr/backup"), { recursive: true });
fs.writeFileSync(path.resolve("scripts/mth1w-fr/backup", `old-course.${new Date().toISOString().replace(/[:.]/g, "-")}.json`), JSON.stringify({ lessons: oldL, assignments: oldA }, null, 1));
for (const l of oldL) { const r = await db.from("lessons").delete().eq("id", l.id); if (r.error) throw r.error; }
for (const a of oldA) if (!keep.has(a.id)) { const r = await db.from("assignments").delete().eq("id", a.id); if (r.error) throw r.error; }
console.log("removed");
