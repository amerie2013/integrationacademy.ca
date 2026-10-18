// MCR3U chapter 5 rebuild (6 lessons + review instead of 5): renames the old 5.x bank topics and worksheet rows,
// and re-sorts every lesson position after the new 5.5 (cosine law) and 5.7 (review) lessons are inserted.
//   node scripts/mcr3u-ch5/renumber5.mjs          -> dry run
//   node scripts/mcr3u-ch5/renumber5.mjs --apply  -> writes (backup first)
// Order: lessons-publish --all --apply → renumber5 --apply → ws/build --all --apply → bank → asg → written.
import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";

const APPLY = process.argv.includes("--apply");
const env = {};
for (const line of fs.readFileSync(".env.local", "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });
const CID = "4819065e-1703-478f-adb7-8226825be6aa";
const TOPICS = {
  "5.1 Trigonometric Ratios & Special Angles": "5.1 Trigonometric Ratios and Special Angles",
  "5.2 Angles 0°–360° & the CAST Rule": "5.2 Angles from 0° to 360°",
  "5.3 Reciprocal Ratios & Trigonometric Identities": "5.3 Reciprocal Ratios and Trigonometric Identities",
  "5.4 The Sine Law & Cosine Law": "5.4 The Sine Law and the Ambiguous Case",
  "5.5 Trigonometry in 3-D Problems": "5.6 Trigonometry in Three Dimensions",
};
// 5.5 moves to 5.6 first (codes are unique per course), freeing 5.5 for the new cosine-law worksheet
const WS = {
  "5.5": { code: "5.6", title: "Trigonometry in Three Dimensions", position: 5006 },
  "5.4": { code: "5.4", title: "The Sine Law and the Ambiguous Case", position: 5004 },
  "5.3": { code: "5.3", title: "Reciprocal Ratios and Trigonometric Identities", position: 5003 },
  "5.2": { code: "5.2", title: "Angles from 0° to 360°", position: 5002 },
  "5.1": { code: "5.1", title: "Trigonometric Ratios and Special Angles", position: 5001 },
};
const rank = (t) => { const m = t.match(/^(\d+)\.(\d+)/); return m ? Number(m[1]) * 1000 + Number(m[2]) : 1e9; };

const { data: lessons } = await db.from("lessons").select("id, title, position").eq("course_id", CID);
const sorted = [...lessons].sort((a, b) => rank(a.title) - rank(b.title));
const moves = sorted.map((l, i) => ({ ...l, to: i })).filter((l) => l.position !== l.to);
const ch = sorted.filter((l) => l.title.startsWith("5."));
console.log("chapter 5 lessons:", ch.map((l) => l.title).join(" | "));
if (ch.length !== 7) console.log("NOTE: expected 7 chapter-5 lessons — run lessons-publish --all --apply first");
console.log(`positions to change: ${moves.length}`);
const { data: ws } = await db.from("worksheets").select("id, code, title").eq("course_id", CID).in("code", Object.keys(WS));
console.log("worksheets:", ws.map((w) => `${w.code} ${w.title} -> ${WS[w.code].code} ${WS[w.code].title}`).join(" | "));
console.log("topics:", Object.entries(TOPICS).map(([a, b]) => `${a} -> ${b}`).join(" | "));
if (!APPLY) { console.log("Dry run."); process.exit(0); }
if (ch.length !== 7) process.exit(1);
if (ws.some((w) => w.code === "5.5" && w.title === "The Cosine Law")) { console.log("worksheet 5.5 is already the cosine law — renumber was applied before"); process.exit(1); }

fs.mkdirSync(path.resolve("scripts/mcr3u-ch5/backup"), { recursive: true });
fs.writeFileSync(path.resolve("scripts/mcr3u-ch5/backup", `renumber5-before.${new Date().toISOString().replace(/[:.]/g, "-")}.json`), JSON.stringify({ lessons, ws }, null, 1));
for (const code of ["5.5", "5.4", "5.3", "5.2", "5.1"]) { const w = ws.find((x) => x.code === code); if (!w) continue; const r = await db.from("worksheets").update(WS[code]).eq("id", w.id); if (r.error) throw r.error; }
for (const [from, to] of Object.entries(TOPICS)) { const r = await db.from("bank_questions").update({ topic: to }).eq("course_id", CID).eq("topic", from); if (r.error) throw r.error; }
for (const l of moves) { const r = await db.from("lessons").update({ position: l.to }).eq("id", l.id); if (r.error) throw r.error; }
console.log("done");
