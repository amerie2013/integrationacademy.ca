// MCR3U chapter 3 rebuild (6 lessons + review instead of 2): renames the old 3.1 / 3.2 bank topics and worksheet rows,
// and re-sorts every lesson position after the new 3.2–3.5 and 3.7 lessons are inserted.
//   node scripts/mcr3u-ch3/renumber3.mjs          -> dry run
//   node scripts/mcr3u-ch3/renumber3.mjs --apply  -> writes (backup first)
// Order: lessons-publish --all --apply → renumber3 --apply → ws/build --all --apply → bank → asg → written.
import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";

const APPLY = process.argv.includes("--apply");
const env = {};
for (const line of fs.readFileSync(".env.local", "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });
const CID = "4819065e-1703-478f-adb7-8226825be6aa";
const TOPICS = { "3.1 Quadratic Functions: Zeros, Max & Min": "3.1 Properties of Quadratic Functions", "3.2 Solving Quadratics & Linear–Quadratic Systems": "3.6 Linear–Quadratic Systems" };
const WS = { "3.2": { code: "3.6", title: "Linear–Quadratic Systems", position: 3006 }, "3.1": { code: "3.1", title: "Properties of Quadratic Functions", position: 3001 } };
const rank = (t) => { const m = t.match(/^(\d+)\.(\d+)/); return m ? Number(m[1]) * 1000 + Number(m[2]) : 1e9; };

const { data: lessons } = await db.from("lessons").select("id, title, position").eq("course_id", CID);
const sorted = [...lessons].sort((a, b) => rank(a.title) - rank(b.title));
const moves = sorted.map((l, i) => ({ ...l, to: i })).filter((l) => l.position !== l.to);
const ch3 = sorted.filter((l) => l.title.startsWith("3."));
console.log("chapter 3 lessons:", ch3.map((l) => l.title).join(" | "));
if (ch3.length !== 7) console.log("NOTE: expected 7 chapter-3 lessons — run lessons-publish --all --apply first");
console.log(`positions to change: ${moves.length}`);
const { data: ws } = await db.from("worksheets").select("id, code, title").eq("course_id", CID).in("code", ["3.1", "3.2"]);
console.log("worksheets:", ws.map((w) => `${w.code} ${w.title} -> ${WS[w.code].code} ${WS[w.code].title}`).join(" | "));
console.log("topics:", Object.entries(TOPICS).map(([a, b]) => `${a} -> ${b}`).join(" | "));
if (!APPLY) { console.log("Dry run."); process.exit(0); }
if (ch3.length !== 7) process.exit(1);

fs.mkdirSync(path.resolve("scripts/mcr3u-ch3/backup"), { recursive: true });
fs.writeFileSync(path.resolve("scripts/mcr3u-ch3/backup", `renumber3-before.${new Date().toISOString().replace(/[:.]/g, "-")}.json`), JSON.stringify({ lessons, ws }, null, 1));
// worksheet 3.2 (old linear–quadratic) moves to 3.6 first, freeing 3.2 for the new worksheet
for (const code of ["3.2", "3.1"]) { const w = ws.find((x) => x.code === code); if (!w) continue; const r = await db.from("worksheets").update(WS[code]).eq("id", w.id); if (r.error) throw r.error; }
for (const [from, to] of Object.entries(TOPICS)) { const r = await db.from("bank_questions").update({ topic: to }).eq("course_id", CID).eq("topic", from); if (r.error) throw r.error; }
for (const l of moves) { const r = await db.from("lessons").update({ position: l.to }).eq("id", l.id); if (r.error) throw r.error; }
console.log("done");
