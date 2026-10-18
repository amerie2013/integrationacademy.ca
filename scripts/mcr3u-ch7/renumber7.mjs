// MCR3U chapter 7 rebuild (7 lessons + review instead of 5): renames the old 7.x bank topics and worksheet rows,
// and re-sorts every lesson position after the new 7.3, 7.4 and 7.8 lessons are inserted.
//   node scripts/mcr3u-ch7/renumber7.mjs          -> dry run
//   node scripts/mcr3u-ch7/renumber7.mjs --apply  -> writes (backup first)
// Order: lessons-publish --all --apply → renumber7 --apply → ws/build --all --apply → bank → asg → written.
// Assignment titles are renamed by asg/publish.mjs (OLD map), not here.
import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";

const APPLY = process.argv.includes("--apply");
const env = {};
for (const line of fs.readFileSync(".env.local", "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });
const CID = "4819065e-1703-478f-adb7-8226825be6aa";
const TOPICS = {
  "7.3 Arithmetic Series": "7.5 Arithmetic Series",
  "7.4 Geometric Series": "7.6 Geometric Series",
  "7.5 Pascal's Triangle & the Binomial Theorem": "7.7 Pascal's Triangle and Binomial Expansions",
};
// codes are unique per course: move the highest first (7.5 → 7.7, 7.4 → 7.6, 7.3 → 7.5), freeing 7.3 and 7.4
const WS = {
  "7.5": { code: "7.7", title: "Pascal's Triangle and Binomial Expansions", position: 7007 },
  "7.4": { code: "7.6", title: "Geometric Series", position: 7006 },
  "7.3": { code: "7.5", title: "Arithmetic Series", position: 7005 },
  "7.2": { code: "7.2", title: "Geometric Sequences", position: 7002 },
  "7.1": { code: "7.1", title: "Arithmetic Sequences", position: 7001 },
};
const rank = (t) => { const m = t.match(/^(\d+)\.(\d+)/); return m ? Number(m[1]) * 1000 + Number(m[2]) : 1e9; };

const { data: lessons } = await db.from("lessons").select("id, title, position").eq("course_id", CID);
const sorted = [...lessons].sort((a, b) => rank(a.title) - rank(b.title));
const moves = sorted.map((l, i) => ({ ...l, to: i })).filter((l) => l.position !== l.to);
const ch = sorted.filter((l) => l.title.startsWith("7."));
console.log("chapter 7 lessons:", ch.map((l) => l.title).join(" | "));
if (ch.length !== 8) console.log("NOTE: expected 8 chapter-7 lessons — run lessons-publish --all --apply first");
console.log(`positions to change: ${moves.length}`);
const { data: ws } = await db.from("worksheets").select("id, code, title").eq("course_id", CID).in("code", Object.keys(WS));
console.log("worksheets:", ws.map((w) => `${w.code} ${w.title} -> ${WS[w.code].code} ${WS[w.code].title}`).join(" | "));
console.log("topics:", Object.entries(TOPICS).map(([a, b]) => `${a} -> ${b}`).join(" | "));
if (!APPLY) { console.log("Dry run."); process.exit(0); }
if (ch.length !== 8) process.exit(1);
if (ws.some((w) => w.code === "7.5" && w.title === "Arithmetic Series")) { console.log("worksheet 7.5 is already Arithmetic Series — renumber was applied before"); process.exit(1); }

fs.mkdirSync(path.resolve("scripts/mcr3u-ch7/backup"), { recursive: true });
fs.writeFileSync(path.resolve("scripts/mcr3u-ch7/backup", `renumber7-before.${new Date().toISOString().replace(/[:.]/g, "-")}.json`), JSON.stringify({ lessons, ws }, null, 1));
for (const code of ["7.5", "7.4", "7.3", "7.2", "7.1"]) { const w = ws.find((x) => x.code === code); if (!w) continue; const r = await db.from("worksheets").update(WS[code]).eq("id", w.id); if (r.error) throw r.error; }
for (const [from, to] of Object.entries(TOPICS)) { const r = await db.from("bank_questions").update({ topic: to }).eq("course_id", CID).eq("topic", from); if (r.error) throw r.error; }
for (const l of moves) { const r = await db.from("lessons").update({ position: l.to }).eq("id", l.id); if (r.error) throw r.error; }
console.log("done");
