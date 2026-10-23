// IB AA SL chapter 13 rebuild (6 lessons + review): renames the old 13.1 and 13.3 bank topics (every kind) to their new
// titles, moves the old worksheet rows 13.3 → 13.4 and then 13.1 → 13.2 (freeing 13.1 and 13.3 for the new Chain,
// Product and Quotient Rules and Applications worksheets), and re-sorts every lesson position after the new 13.1, 13.3,
// 13.5, 13.6 and 13.7 lessons are inserted.
// Worksheet titles are rewritten by ws/build.mjs; assignment titles by asg/publish.mjs (matched by id).
//   node scripts/ibaasl-ch13/renumber13.mjs          -> dry run
//   node scripts/ibaasl-ch13/renumber13.mjs --apply  -> writes (backup first). Apply ONCE. APPLIED 2026-10-23 — never rerun.
// Order: lessons-publish --all --apply → renumber13 --apply → ws/build --all --apply → bank → asg → written.
import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";

const APPLY = process.argv.includes("--apply");
const env = {};
for (const line of fs.readFileSync(".env.local", "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });
const CID = "f635431f-3244-45c3-9c4a-39a33fd209b9";
const TOPICS = {
  "13.1 Derivatives of Trig, Exponential & Log Functions": "13.2 Derivatives of Trigonometric Functions",
  "13.3 Integration of Trig & Exponential Functions": "13.4 Integrating Trigonometric and Exponential Functions",
};
const rank = (t) => { const m = t.match(/^(\d+)\.(\d+)/); return m ? Number(m[1]) * 1000 + Number(m[2]) : 1e9; };

const { data: lessons } = await db.from("lessons").select("id, title, position").eq("course_id", CID);
const sorted = [...lessons].sort((a, b) => rank(a.title) - rank(b.title));
const moves = sorted.map((l, i) => ({ ...l, to: i })).filter((l) => l.position !== l.to);
const ch = sorted.filter((l) => l.title.startsWith("13."));
console.log("chapter 13 lessons:", ch.map((l) => l.title).join(" | "));
if (ch.length !== 7) console.log("NOTE: expected 7 chapter-13 lessons — run lessons-publish --all --apply first");
console.log(`positions to change: ${moves.length}`);
const counts = {};
for (const from of Object.keys(TOPICS)) { const { count } = await db.from("bank_questions").select("id", { count: "exact", head: true }).eq("course_id", CID).eq("topic", from); counts[from] = count; }
console.log("topics:", Object.entries(TOPICS).map(([a, b]) => `${a} (${counts[a]} rows) -> ${b}`).join(" | "));
const { data: ws } = await db.from("worksheets").select("id, code, title, position").eq("course_id", CID).like("code", "13.%");
const old133 = ws.find((w) => w.code === "13.3" && /Integration/.test(w.title));
const old131 = ws.find((w) => w.code === "13.1" && /Derivatives/.test(w.title));
console.log("worksheets:", old133 ? `13.3 ${old133.title} -> 13.4` : "no old 13.3 row", "|", old131 ? `13.1 ${old131.title} -> 13.2` : "no old 13.1 row");
if (!APPLY) { console.log("Dry run."); process.exit(0); }
if (ch.length !== 7 || ws.some((w) => w.code === "13.2" || w.code === "13.4")) { console.log("Refusing: lessons missing or worksheet 13.2/13.4 already exists."); process.exit(1); }

fs.mkdirSync(path.resolve("scripts/ibaasl-ch13/backup"), { recursive: true });
fs.writeFileSync(path.resolve("scripts/ibaasl-ch13/backup", `renumber13-before.${new Date().toISOString().replace(/[:.]/g, "-")}.json`), JSON.stringify({ lessons, counts, ws }, null, 1));
if (old133) { const r = await db.from("worksheets").update({ code: "13.4", position: 13004 }).eq("id", old133.id); if (r.error) throw r.error; }
if (old131) { const r = await db.from("worksheets").update({ code: "13.2", position: 13002 }).eq("id", old131.id); if (r.error) throw r.error; }
for (const [from, to] of Object.entries(TOPICS)) { const r = await db.from("bank_questions").update({ topic: to }).eq("course_id", CID).eq("topic", from); if (r.error) throw r.error; }
for (const l of moves) { const r = await db.from("lessons").update({ position: l.to }).eq("id", l.id); if (r.error) throw r.error; }
console.log("done");
