// MCR3U chapter 6 rebuild (7 lessons + review instead of 4): renames the old 6.x bank topics and worksheet rows,
// and re-sorts every lesson position after the new 6.3, 6.5, 6.6 and 6.8 lessons are inserted.
//   node scripts/mcr3u-ch6/renumber6.mjs          -> dry run
//   node scripts/mcr3u-ch6/renumber6.mjs --apply  -> writes (backup first)
// Order: lessons-publish --all --apply → renumber6 --apply → ws/build --all --apply → bank → asg → written.
import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";

const APPLY = process.argv.includes("--apply");
const env = {};
for (const line of fs.readFileSync(".env.local", "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });
const CID = "4819065e-1703-478f-adb7-8226825be6aa";
const TOPICS = {
  "6.1 Periodic Functions & Their Properties": "6.1 Periodic Functions and Their Properties",
  "6.2 Graphing Sine & Cosine": "6.2 Graphs of Sine and Cosine",
  "6.3 Transformations of Sinusoidal Functions": "6.4 Transformations of Sinusoidal Functions",
  "6.4 Sinusoidal Applications": "6.7 Solving Problems with Sinusoidal Models",
};
// codes are unique per course: move 6.4 → 6.7 first, then 6.3 → 6.4 (frees 6.3, 6.5, 6.6 for the new worksheets)
const WS = {
  "6.4": { code: "6.7", title: "Solving Problems with Sinusoidal Models", position: 6007 },
  "6.3": { code: "6.4", title: "Transformations of Sinusoidal Functions", position: 6004 },
  "6.2": { code: "6.2", title: "Graphs of Sine and Cosine", position: 6002 },
  "6.1": { code: "6.1", title: "Periodic Functions and Their Properties", position: 6001 },
};
const rank = (t) => { const m = t.match(/^(\d+)\.(\d+)/); return m ? Number(m[1]) * 1000 + Number(m[2]) : 1e9; };

const { data: lessons } = await db.from("lessons").select("id, title, position").eq("course_id", CID);
const sorted = [...lessons].sort((a, b) => rank(a.title) - rank(b.title));
const moves = sorted.map((l, i) => ({ ...l, to: i })).filter((l) => l.position !== l.to);
const ch = sorted.filter((l) => l.title.startsWith("6."));
console.log("chapter 6 lessons:", ch.map((l) => l.title).join(" | "));
if (ch.length !== 8) console.log("NOTE: expected 8 chapter-6 lessons — run lessons-publish --all --apply first");
console.log(`positions to change: ${moves.length}`);
const { data: ws } = await db.from("worksheets").select("id, code, title").eq("course_id", CID).in("code", Object.keys(WS));
console.log("worksheets:", ws.map((w) => `${w.code} ${w.title} -> ${WS[w.code].code} ${WS[w.code].title}`).join(" | "));
console.log("topics:", Object.entries(TOPICS).map(([a, b]) => `${a} -> ${b}`).join(" | "));
if (!APPLY) { console.log("Dry run."); process.exit(0); }
if (ch.length !== 8) process.exit(1);
if (ws.some((w) => w.code === "6.4" && w.title === "Transformations of Sinusoidal Functions")) { console.log("worksheet 6.4 is already Transformations — renumber was applied before"); process.exit(1); }

fs.mkdirSync(path.resolve("scripts/mcr3u-ch6/backup"), { recursive: true });
fs.writeFileSync(path.resolve("scripts/mcr3u-ch6/backup", `renumber6-before.${new Date().toISOString().replace(/[:.]/g, "-")}.json`), JSON.stringify({ lessons, ws }, null, 1));
for (const code of ["6.4", "6.3", "6.2", "6.1"]) { const w = ws.find((x) => x.code === code); if (!w) continue; const r = await db.from("worksheets").update(WS[code]).eq("id", w.id); if (r.error) throw r.error; }
for (const [from, to] of Object.entries(TOPICS)) { const r = await db.from("bank_questions").update({ topic: to }).eq("course_id", CID).eq("topic", from); if (r.error) throw r.error; }
for (const l of moves) { const r = await db.from("lessons").update({ position: l.to }).eq("id", l.id); if (r.error) throw r.error; }
console.log("done");
