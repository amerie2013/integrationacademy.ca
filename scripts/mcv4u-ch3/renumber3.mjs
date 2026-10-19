// MCV4U chapter 3 rebuild (7 lessons): renames the old 3.x bank topics (every kind, including long_answer) to the
// new lesson titles and re-sorts every lesson position after the new 3.4 and 3.7 lessons are inserted. Worksheet titles are
// rewritten by ws/build.mjs; assignment titles by asg/publish.mjs.
//   node scripts/mcv4u-ch3/renumber3.mjs          -> dry run
//   node scripts/mcv4u-ch3/renumber3.mjs --apply  -> writes (backup first)
// Order: lessons-publish --all --apply → renumber3 --apply → ws/build --all --apply → bank → asg → written.
import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";

const APPLY = process.argv.includes("--apply");
const env = {};
for (const line of fs.readFileSync(".env.local", "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });
const CID = "88ea0686-581a-4236-b4df-8059c8f1d214";
const TOPICS = {
  "3.1 Increasing/Decreasing & the First Derivative Test": "3.1 Increasing and Decreasing Functions",
  "3.2 Critical, Inflection & End Behaviour": "3.2 Maxima and Minima",
  "3.3 Concavity & the Second Derivative": "3.3 Concavity and the Second Derivative Test",
  "3.5 Full Curve Sketching": "3.5 Putting It All Together",
  "3.6 Optimization": "3.6 Optimization Problems",
};
const rank = (t) => { const m = t.match(/^(\d+)\.(\d+)/); return m ? Number(m[1]) * 1000 + Number(m[2]) : 1e9; };

const { data: lessons } = await db.from("lessons").select("id, title, position").eq("course_id", CID);
const sorted = [...lessons].sort((a, b) => rank(a.title) - rank(b.title));
const moves = sorted.map((l, i) => ({ ...l, to: i })).filter((l) => l.position !== l.to);
const ch = sorted.filter((l) => l.title.startsWith("3."));
console.log("chapter 3 lessons:", ch.map((l) => l.title).join(" | "));
if (ch.length !== 7) console.log("NOTE: expected 7 chapter-3 lessons — run lessons-publish --all --apply first");
console.log(`positions to change: ${moves.length}`);
const counts = {};
for (const from of Object.keys(TOPICS)) { const { count } = await db.from("bank_questions").select("id", { count: "exact", head: true }).eq("course_id", CID).eq("topic", from); counts[from] = count; }
console.log("topics:", Object.entries(TOPICS).map(([a, b]) => `${a} (${counts[a]} rows) -> ${b}`).join(" | "));
if (!APPLY) { console.log("Dry run."); process.exit(0); }
if (ch.length !== 7) process.exit(1);

fs.mkdirSync(path.resolve("scripts/mcv4u-ch3/backup"), { recursive: true });
fs.writeFileSync(path.resolve("scripts/mcv4u-ch3/backup", `renumber3-before.${new Date().toISOString().replace(/[:.]/g, "-")}.json`), JSON.stringify({ lessons, counts }, null, 1));
for (const [from, to] of Object.entries(TOPICS)) { const r = await db.from("bank_questions").update({ topic: to }).eq("course_id", CID).eq("topic", from); if (r.error) throw r.error; }
for (const l of moves) { const r = await db.from("lessons").update({ position: l.to }).eq("id", l.id); if (r.error) throw r.error; }
console.log("done");
