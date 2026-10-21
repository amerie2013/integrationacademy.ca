// IB AA SL chapter 5 rebuild (6 lessons + review): renames the old 5.1, 5.4, 5.5 and 5.6 bank topics (every kind) to
// their new titles (5.3 keeps its title) and re-sorts every lesson position after the new 5.2 and 5.7 are inserted.
// Worksheet codes 5.1/5.3–5.6 stay; titles are rewritten by ws/build.mjs, assignments by asg/publish.mjs (by id).
//   node scripts/ibaasl-ch5/renumber5.mjs          -> dry run
//   node scripts/ibaasl-ch5/renumber5.mjs --apply  -> writes (backup first). Apply ONCE. APPLIED 2026-10-21 — never rerun.
// Order: lessons-publish --all --apply → renumber5 --apply → ws/build --all --apply → bank → asg → written.
import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";

const APPLY = process.argv.includes("--apply");
const env = {};
for (const line of fs.readFileSync(".env.local", "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });
const CID = "f635431f-3244-45c3-9c4a-39a33fd209b9";
const TOPICS = {
  "5.1 Limits & Introducing the Derivative": "5.1 Limits and Convergence",
  "5.4 Curve Sketching with Derivatives": "5.4 First and Second Derivatives and Graphs",
  "5.5 Optimization": "5.5 Optimisation",
  "5.6 Kinematics & Rates of Change": "5.6 Kinematics and Rates of Change",
};
const rank = (t) => { const m = t.match(/^(\d+)\.(\d+)/); return m ? Number(m[1]) * 1000 + Number(m[2]) : 1e9; };

const { data: lessons } = await db.from("lessons").select("id, title, position").eq("course_id", CID);
const sorted = [...lessons].sort((a, b) => rank(a.title) - rank(b.title));
const moves = sorted.map((l, i) => ({ ...l, to: i })).filter((l) => l.position !== l.to);
const ch = sorted.filter((l) => l.title.startsWith("5."));
console.log("chapter 5 lessons:", ch.map((l) => l.title).join(" | "));
if (ch.length !== 7) console.log("NOTE: expected 7 chapter-5 lessons — run lessons-publish --all --apply first");
console.log(`positions to change: ${moves.length}`);
const counts = {};
for (const from of Object.keys(TOPICS)) { const { count } = await db.from("bank_questions").select("id", { count: "exact", head: true }).eq("course_id", CID).eq("topic", from); counts[from] = count; }
console.log("topics:", Object.entries(TOPICS).map(([a, b]) => `${a} (${counts[a]} rows) -> ${b}`).join(" | "));
if (!APPLY) { console.log("Dry run."); process.exit(0); }
if (ch.length !== 7) process.exit(1);

fs.mkdirSync(path.resolve("scripts/ibaasl-ch5/backup"), { recursive: true });
fs.writeFileSync(path.resolve("scripts/ibaasl-ch5/backup", `renumber5-before.${new Date().toISOString().replace(/[:.]/g, "-")}.json`), JSON.stringify({ lessons, counts }, null, 1));
for (const [from, to] of Object.entries(TOPICS)) { const r = await db.from("bank_questions").update({ topic: to }).eq("course_id", CID).eq("topic", from); if (r.error) throw r.error; }
for (const l of moves) { const r = await db.from("lessons").update({ position: l.to }).eq("id", l.id); if (r.error) throw r.error; }
console.log("done");
