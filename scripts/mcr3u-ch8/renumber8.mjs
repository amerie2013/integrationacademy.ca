// MCR3U chapter 8 rebuild (6 lessons + review instead of 4): renames the old 8.x bank topics and worksheet titles
// (codes 8.1–8.4 keep their numbers; 8.5 and 8.6 are new) and re-sorts every lesson position after the new
// 8.5, 8.6 and 8.7 lessons are inserted.
//   node scripts/mcr3u-ch8/renumber8.mjs          -> dry run
//   node scripts/mcr3u-ch8/renumber8.mjs --apply  -> writes (backup first)
// Order: lessons-publish --all --apply → renumber8 --apply → ws/build --all --apply → bank → asg → written.
import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";

const APPLY = process.argv.includes("--apply");
const env = {};
for (const line of fs.readFileSync(".env.local", "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });
const CID = "4819065e-1703-478f-adb7-8226825be6aa";
const TOPICS = {
  "8.2 Compound Interest": "8.2 Compound Interest: Future Value",
  "8.3 Present Value": "8.3 Compound Interest: Present Value",
  "8.4 Annuities": "8.4 Annuities: Future Value",
};
const WS = {
  "8.4": { code: "8.4", title: "Annuities: Future Value", position: 8004 },
  "8.3": { code: "8.3", title: "Compound Interest: Present Value", position: 8003 },
  "8.2": { code: "8.2", title: "Compound Interest: Future Value", position: 8002 },
  "8.1": { code: "8.1", title: "Simple Interest", position: 8001 },
};
const rank = (t) => { const m = t.match(/^(\d+)\.(\d+)/); return m ? Number(m[1]) * 1000 + Number(m[2]) : 1e9; };

const { data: lessons } = await db.from("lessons").select("id, title, position").eq("course_id", CID);
const sorted = [...lessons].sort((a, b) => rank(a.title) - rank(b.title));
const moves = sorted.map((l, i) => ({ ...l, to: i })).filter((l) => l.position !== l.to);
const ch = sorted.filter((l) => l.title.startsWith("8."));
console.log("chapter 8 lessons:", ch.map((l) => l.title).join(" | "));
if (ch.length !== 7) console.log("NOTE: expected 7 chapter-8 lessons — run lessons-publish --all --apply first");
console.log(`positions to change: ${moves.length}`);
const { data: ws } = await db.from("worksheets").select("id, code, title").eq("course_id", CID).in("code", Object.keys(WS));
console.log("worksheets:", ws.map((w) => `${w.code} ${w.title} -> ${WS[w.code].code} ${WS[w.code].title}`).join(" | "));
console.log("topics:", Object.entries(TOPICS).map(([a, b]) => `${a} -> ${b}`).join(" | "));
if (!APPLY) { console.log("Dry run."); process.exit(0); }
if (ch.length !== 7) process.exit(1);

fs.mkdirSync(path.resolve("scripts/mcr3u-ch8/backup"), { recursive: true });
fs.writeFileSync(path.resolve("scripts/mcr3u-ch8/backup", `renumber8-before.${new Date().toISOString().replace(/[:.]/g, "-")}.json`), JSON.stringify({ lessons, ws }, null, 1));
for (const code of ["8.4", "8.3", "8.2", "8.1"]) { const w = ws.find((x) => x.code === code); if (!w) continue; const r = await db.from("worksheets").update(WS[code]).eq("id", w.id); if (r.error) throw r.error; }
for (const [from, to] of Object.entries(TOPICS)) { const r = await db.from("bank_questions").update({ topic: to }).eq("course_id", CID).eq("topic", from); if (r.error) throw r.error; }
for (const l of moves) { const r = await db.from("lessons").update({ position: l.to }).eq("id", l.id); if (r.error) throw r.error; }
console.log("done");
