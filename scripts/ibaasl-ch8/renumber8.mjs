// IB AA SL chapter 8 rebuild (4 lessons + review): renames the old 8.2 and 8.3 bank topics (every kind) to their new
// titles and re-sorts every lesson position after the new 8.1, 8.4 and 8.5 are inserted.
// Worksheet codes 8.2/8.3 stay; titles are rewritten by ws/build.mjs, assignments by asg/publish.mjs (by id).
//   node scripts/ibaasl-ch8/renumber8.mjs          -> dry run
//   node scripts/ibaasl-ch8/renumber8.mjs --apply  -> writes (backup first). Apply ONCE.
// Order: lessons-publish --all --apply → renumber8 --apply → ws/build --all --apply → bank → asg → written.
import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";

const APPLY = process.argv.includes("--apply");
const env = {};
for (const line of fs.readFileSync(".env.local", "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });
const CID = "f635431f-3244-45c3-9c4a-39a33fd209b9";
const TOPICS = {
  "8.2 Probability Basics & Venn Diagrams": "8.2 Venn Diagrams and Sample Spaces",
  "8.3 Conditional Probability & Tree Diagrams": "8.3 Conditional Probability and Independence",
};
const rank = (t) => { const m = t.match(/^(\d+)\.(\d+)/); return m ? Number(m[1]) * 1000 + Number(m[2]) : 1e9; };

const { data: lessons } = await db.from("lessons").select("id, title, position").eq("course_id", CID);
const sorted = [...lessons].sort((a, b) => rank(a.title) - rank(b.title));
const moves = sorted.map((l, i) => ({ ...l, to: i })).filter((l) => l.position !== l.to);
const ch = sorted.filter((l) => l.title.startsWith("8."));
console.log("chapter 8 lessons:", ch.map((l) => l.title).join(" | "));
if (ch.length !== 5) console.log("NOTE: expected 5 chapter-8 lessons — run lessons-publish --all --apply first");
console.log(`positions to change: ${moves.length}`);
const counts = {};
for (const from of Object.keys(TOPICS)) { const { count } = await db.from("bank_questions").select("id", { count: "exact", head: true }).eq("course_id", CID).eq("topic", from); counts[from] = count; }
console.log("topics:", Object.entries(TOPICS).map(([a, b]) => `${a} (${counts[a]} rows) -> ${b}`).join(" | "));
if (!APPLY) { console.log("Dry run."); process.exit(0); }
if (ch.length !== 5) process.exit(1);

fs.mkdirSync(path.resolve("scripts/ibaasl-ch8/backup"), { recursive: true });
fs.writeFileSync(path.resolve("scripts/ibaasl-ch8/backup", `renumber8-before.${new Date().toISOString().replace(/[:.]/g, "-")}.json`), JSON.stringify({ lessons, counts }, null, 1));
for (const [from, to] of Object.entries(TOPICS)) { const r = await db.from("bank_questions").update({ topic: to }).eq("course_id", CID).eq("topic", from); if (r.error) throw r.error; }
for (const l of moves) { const r = await db.from("lessons").update({ position: l.to }).eq("id", l.id); if (r.error) throw r.error; }
console.log("done");
