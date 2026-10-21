// IB AA SL chapter 3 rebuild (7 lessons + review): renames the old 3.1 and 3.6 bank topics (every kind) to their new
// titles (3.3 keeps its title) and re-sorts every lesson position after the new 3.2, 3.4, 3.5, 3.7 and 3.8 lessons are
// inserted. Worksheet codes 3.1/3.3/3.6 stay; titles are rewritten by ws/build.mjs, assignments by asg/publish.mjs (by id).
//   node scripts/ibaasl-ch3/renumber3.mjs          -> dry run
//   node scripts/ibaasl-ch3/renumber3.mjs --apply  -> writes (backup first). Apply ONCE. APPLIED 2026-10-21 — never rerun.
// Order: lessons-publish --all --apply → renumber3 --apply → ws/build --all --apply → bank → asg → written.
import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";

const APPLY = process.argv.includes("--apply");
const env = {};
for (const line of fs.readFileSync(".env.local", "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });
const CID = "f635431f-3244-45c3-9c4a-39a33fd209b9";
const TOPICS = {
  "3.1 Linear & Quadratic Functions": "3.1 The Gradient of a Line",
  "3.6 The Quadratic Formula & Discriminant": "3.6 The Quadratic Formula and the Discriminant",
};
const rank = (t) => { const m = t.match(/^(\d+)\.(\d+)/); return m ? Number(m[1]) * 1000 + Number(m[2]) : 1e9; };

const { data: lessons } = await db.from("lessons").select("id, title, position").eq("course_id", CID);
const sorted = [...lessons].sort((a, b) => rank(a.title) - rank(b.title));
const moves = sorted.map((l, i) => ({ ...l, to: i })).filter((l) => l.position !== l.to);
const ch = sorted.filter((l) => l.title.startsWith("3."));
console.log("chapter 3 lessons:", ch.map((l) => l.title).join(" | "));
if (ch.length !== 8) console.log("NOTE: expected 8 chapter-3 lessons — run lessons-publish --all --apply first");
console.log(`positions to change: ${moves.length}`);
const counts = {};
for (const from of Object.keys(TOPICS)) { const { count } = await db.from("bank_questions").select("id", { count: "exact", head: true }).eq("course_id", CID).eq("topic", from); counts[from] = count; }
console.log("topics:", Object.entries(TOPICS).map(([a, b]) => `${a} (${counts[a]} rows) -> ${b}`).join(" | "));
if (!APPLY) { console.log("Dry run."); process.exit(0); }
if (ch.length !== 8) process.exit(1);

fs.mkdirSync(path.resolve("scripts/ibaasl-ch3/backup"), { recursive: true });
fs.writeFileSync(path.resolve("scripts/ibaasl-ch3/backup", `renumber3-before.${new Date().toISOString().replace(/[:.]/g, "-")}.json`), JSON.stringify({ lessons, counts }, null, 1));
for (const [from, to] of Object.entries(TOPICS)) { const r = await db.from("bank_questions").update({ topic: to }).eq("course_id", CID).eq("topic", from); if (r.error) throw r.error; }
for (const l of moves) { const r = await db.from("lessons").update({ position: l.to }).eq("id", l.id); if (r.error) throw r.error; }
console.log("done");
