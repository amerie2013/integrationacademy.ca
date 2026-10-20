// MCR3U chapter 3: 3.1 split into 3.1 / 3.2 / 3.3, so the old 3.2–3.7 become 3.4–3.9. Renames the bank topics
// (every kind, including long_answer), shifts the worksheet codes 3.2–3.6 up by two, and re-sorts every lesson position
// after the new 3.2 and 3.3 lessons are inserted. Assignment titles are rewritten by asg/publish.mjs (matched by id),
// the two old 3.1 written questions are moved to 3.2 / 3.3 by written.mjs.
//   node scripts/mcr3u-ch3/split31.mjs          -> dry run
//   node scripts/mcr3u-ch3/split31.mjs --apply  -> writes (backup first). Apply ONCE.
// Order: lessons-publish --all --apply → split31 --apply → ws/build --all --apply → bank --all --apply → asg --apply → written --apply.
import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";

const APPLY = process.argv.includes("--apply");
const env = {};
for (const line of fs.readFileSync(".env.local", "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });
const CID = "4819065e-1703-478f-adb7-8226825be6aa";
// highest first, so no code is ever taken twice
const TOPICS = [
  ["3.6 Linear–Quadratic Systems", "3.8 Linear–Quadratic Systems"],
  ["3.5 Families of Quadratic Functions", "3.7 Families of Quadratic Functions"],
  ["3.4 The Zeros and the Discriminant", "3.6 The Zeros and the Discriminant"],
  ["3.3 Solving Quadratic Equations", "3.5 Solving Quadratic Equations"],
  ["3.2 Maximum and Minimum Values", "3.4 Maximum and Minimum Values"],
  ["3.1 Properties of Quadratic Functions", "3.1 The Three Forms of a Quadratic Function"],
];
const WS = [["3.6", "3.8"], ["3.5", "3.7"], ["3.4", "3.6"], ["3.3", "3.5"], ["3.2", "3.4"]];
const rank = (t) => { const m = t.match(/^(\d+)\.(\d+)/); return m ? Number(m[1]) * 1000 + Number(m[2]) : 1e9; };

const { data: lessons } = await db.from("lessons").select("id, title, position").eq("course_id", CID);
const sorted = [...lessons].sort((a, b) => rank(a.title) - rank(b.title));
const moves = sorted.map((l, i) => ({ ...l, to: i })).filter((l) => l.position !== l.to);
const ch3 = sorted.filter((l) => l.title.startsWith("3."));
console.log("chapter 3 lessons:", ch3.map((l) => l.title).join(" | "));
if (ch3.length !== 9) console.log("NOTE: expected 9 chapter-3 lessons — run lessons-publish --all --apply first");
console.log(`positions to change: ${moves.length}`);
const counts = {};
for (const [from] of TOPICS) { const { count } = await db.from("bank_questions").select("id", { count: "exact", head: true }).eq("course_id", CID).eq("topic", from); counts[from] = count; }
console.log("topics:\n " + TOPICS.map(([a, b]) => `${a} (${counts[a]} rows) -> ${b}`).join("\n "));
const { data: ws } = await db.from("worksheets").select("id, code, title, position").eq("course_id", CID).like("code", "3.%");
console.log("worksheets:", WS.map(([a, b]) => `${a} ${ws.find((w) => w.code === a)?.title ?? "(missing)"} -> ${b}`).join(" | "));
if (ws.some((w) => ["3.7", "3.8"].includes(w.code))) console.log("NOTE: worksheet 3.7/3.8 already exists — already applied?");
if (!APPLY) { console.log("Dry run."); process.exit(0); }
if (ch3.length !== 9 || ws.some((w) => ["3.7", "3.8"].includes(w.code))) process.exit(1);

fs.mkdirSync(path.resolve("scripts/mcr3u-ch3/backup"), { recursive: true });
fs.writeFileSync(path.resolve("scripts/mcr3u-ch3/backup", `split31-before.${new Date().toISOString().replace(/[:.]/g, "-")}.json`), JSON.stringify({ lessons, counts, ws }, null, 1));
for (const [from, to] of TOPICS) { const r = await db.from("bank_questions").update({ topic: to }).eq("course_id", CID).eq("topic", from); if (r.error) throw r.error; }
for (const [from, to] of WS) {
  const w = ws.find((x) => x.code === from);
  if (!w) continue;
  const r = await db.from("worksheets").update({ code: to, position: 3000 + Number(to.split(".")[1]) }).eq("id", w.id);
  if (r.error) throw r.error;
}
for (const l of moves) { const r = await db.from("lessons").update({ position: l.to }).eq("id", l.id); if (r.error) throw r.error; }
console.log("done");
