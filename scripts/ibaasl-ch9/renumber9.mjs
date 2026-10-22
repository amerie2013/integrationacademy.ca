// IB AA SL chapter 9 rebuild (6 lessons + review): renames the old 9.1 and 9.2 bank topics (every kind) to their new
// titles, moves the old 9.2 Logarithms worksheet row to code 9.3 (freeing 9.2 for the new Exponential Functions
// worksheet), and re-sorts every lesson position after the new 9.2, 9.4, 9.5, 9.6 and 9.7 lessons are inserted.
// Worksheet titles are rewritten by ws/build.mjs; assignment titles by asg/publish.mjs (matched by id).
//   node scripts/ibaasl-ch9/renumber9.mjs          -> dry run
//   node scripts/ibaasl-ch9/renumber9.mjs --apply  -> writes (backup first). Apply ONCE. APPLIED 2026-10-22 — never rerun.
// Order: lessons-publish --all --apply → renumber9 --apply → ws/build --all --apply → bank → asg → written.
import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";

const APPLY = process.argv.includes("--apply");
const env = {};
for (const line of fs.readFileSync(".env.local", "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });
const CID = "f635431f-3244-45c3-9c4a-39a33fd209b9";
const TOPICS = {
  "9.1 Exponents & Radicals": "9.1 Exponents and Radicals",
  "9.2 Logarithms": "9.3 Logarithms and Their Graphs",
};
const rank = (t) => { const m = t.match(/^(\d+)\.(\d+)/); return m ? Number(m[1]) * 1000 + Number(m[2]) : 1e9; };

const { data: lessons } = await db.from("lessons").select("id, title, position").eq("course_id", CID);
const sorted = [...lessons].sort((a, b) => rank(a.title) - rank(b.title));
const moves = sorted.map((l, i) => ({ ...l, to: i })).filter((l) => l.position !== l.to);
const ch = sorted.filter((l) => l.title.startsWith("9."));
console.log("chapter 9 lessons:", ch.map((l) => l.title).join(" | "));
if (ch.length !== 7) console.log("NOTE: expected 7 chapter-9 lessons — run lessons-publish --all --apply first");
console.log(`positions to change: ${moves.length}`);
const counts = {};
for (const from of Object.keys(TOPICS)) { const { count } = await db.from("bank_questions").select("id", { count: "exact", head: true }).eq("course_id", CID).eq("topic", from); counts[from] = count; }
console.log("topics:", Object.entries(TOPICS).map(([a, b]) => `${a} (${counts[a]} rows) -> ${b}`).join(" | "));
const { data: ws } = await db.from("worksheets").select("id, code, title, position").eq("course_id", CID).like("code", "9.%");
const old92 = ws.find((w) => w.code === "9.2" && /Logarithm/.test(w.title));
console.log("worksheet:", old92 ? `9.2 ${old92.title} -> 9.3` : "no old 9.2 row (already moved?)");
if (!APPLY) { console.log("Dry run."); process.exit(0); }
if (ch.length !== 7 || ws.some((w) => w.code === "9.3")) { console.log("Refusing: lessons missing or worksheet 9.3 already exists."); process.exit(1); }

fs.mkdirSync(path.resolve("scripts/ibaasl-ch9/backup"), { recursive: true });
fs.writeFileSync(path.resolve("scripts/ibaasl-ch9/backup", `renumber9-before.${new Date().toISOString().replace(/[:.]/g, "-")}.json`), JSON.stringify({ lessons, counts, ws }, null, 1));
if (old92) { const r = await db.from("worksheets").update({ code: "9.3", position: 9003 }).eq("id", old92.id); if (r.error) throw r.error; }
for (const [from, to] of Object.entries(TOPICS)) { const r = await db.from("bank_questions").update({ topic: to }).eq("course_id", CID).eq("topic", from); if (r.error) throw r.error; }
for (const l of moves) { const r = await db.from("lessons").update({ position: l.to }).eq("id", l.id); if (r.error) throw r.error; }
console.log("done");
