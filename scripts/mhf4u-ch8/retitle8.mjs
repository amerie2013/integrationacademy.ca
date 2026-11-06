// MHF4U chapter 8: renames the bank topics of the two retitled lessons (8.1, 8.3) so existing bank rows
// (including long_answer rows) follow their lessons. Run once, after lessons-publish --apply. Safe to rerun.
//   node scripts/mhf4u-ch8/retitle8.mjs          -> dry run
//   node scripts/mhf4u-ch8/retitle8.mjs --apply  -> writes
import { createClient } from "@supabase/supabase-js";
import fs from "fs";

const APPLY = process.argv.includes("--apply");
const env = {};
for (const line of fs.readFileSync(".env.local", "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });
const CID = "7d3e0ca4-1c49-47d4-84f2-9c41c09dd49d";
const TOPICS = {
  "8.1 Combining Functions": "8.1 Sums and Differences of Functions",
  "8.3 Composition of Functions": "8.3 Composite Functions",
};
for (const [from, to] of Object.entries(TOPICS)) {
  const { count } = await db.from("bank_questions").select("id", { count: "exact", head: true }).eq("course_id", CID).eq("topic", from);
  console.log(`${from} (${count} rows) -> ${to}`);
  if (APPLY && count) { const r = await db.from("bank_questions").update({ topic: to }).eq("course_id", CID).eq("topic", from); if (r.error) throw r.error; }
}
console.log(APPLY ? "done" : "Dry run.");
