// MCR3U chapter 4 rebuild (6 lessons + review instead of 4): renames the old 4.x bank topics and worksheet rows,
// and re-sorts every lesson position after the new 4.2, 4.3 and 4.7 lessons are inserted.
//   node scripts/mcr3u-ch4/renumber4.mjs          -> dry run
//   node scripts/mcr3u-ch4/renumber4.mjs --apply  -> writes (backup first)
// Order: lessons-publish --all --apply → renumber4 --apply → ws/build --all --apply → bank → asg → written.
import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";

const APPLY = process.argv.includes("--apply");
const env = {};
for (const line of fs.readFileSync(".env.local", "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });
const CID = "4819065e-1703-478f-adb7-8226825be6aa";
const TOPICS = { "4.1 Exponent Laws & Rational Exponents": "4.1 Exponent Laws and Integer Exponents", "4.2 Exponential Functions & Their Graphs": "4.4 Exponential Functions and Their Properties", "4.3 Transformations of Exponential Functions": "4.5 Transformations of Exponential Functions", "4.4 Applications: Growth, Decay & Compound Interest": "4.6 Exponential Models: Growth and Decay" };
const WS = { "4.4": { code: "4.6", title: "Exponential Models: Growth and Decay", position: 4006 }, "4.3": { code: "4.5", title: "Transformations of Exponential Functions", position: 4005 }, "4.2": { code: "4.4", title: "Exponential Functions and Their Properties", position: 4004 }, "4.1": { code: "4.1", title: "Exponent Laws and Integer Exponents", position: 4001 } };
const rank = (t) => { const m = t.match(/^(\d+)\.(\d+)/); return m ? Number(m[1]) * 1000 + Number(m[2]) : 1e9; };

const { data: lessons } = await db.from("lessons").select("id, title, position").eq("course_id", CID);
const sorted = [...lessons].sort((a, b) => rank(a.title) - rank(b.title));
const moves = sorted.map((l, i) => ({ ...l, to: i })).filter((l) => l.position !== l.to);
const ch3 = sorted.filter((l) => l.title.startsWith("4."));
console.log("chapter 4 lessons:", ch3.map((l) => l.title).join(" | "));
if (ch3.length !== 7) console.log("NOTE: expected 7 chapter-4 lessons — run lessons-publish --all --apply first");
console.log(`positions to change: ${moves.length}`);
const { data: ws } = await db.from("worksheets").select("id, code, title").eq("course_id", CID).in("code", ["4.1", "4.2", "4.3", "4.4"]);
console.log("worksheets:", ws.map((w) => `${w.code} ${w.title} -> ${WS[w.code].code} ${WS[w.code].title}`).join(" | "));
console.log("topics:", Object.entries(TOPICS).map(([a, b]) => `${a} -> ${b}`).join(" | "));
if (!APPLY) { console.log("Dry run."); process.exit(0); }
if (ch3.length !== 7) process.exit(1);

fs.mkdirSync(path.resolve("scripts/mcr3u-ch4/backup"), { recursive: true });
fs.writeFileSync(path.resolve("scripts/mcr3u-ch4/backup", `renumber4-before.${new Date().toISOString().replace(/[:.]/g, "-")}.json`), JSON.stringify({ lessons, ws }, null, 1));
// worksheet 3.2 (old linear–quadratic) moves to 3.6 first, freeing 3.2 for the new worksheet
for (const code of ["4.4", "4.3", "4.2", "4.1"]) { const w = ws.find((x) => x.code === code); if (!w) continue; const r = await db.from("worksheets").update(WS[code]).eq("id", w.id); if (r.error) throw r.error; }
for (const [from, to] of Object.entries(TOPICS)) { const r = await db.from("bank_questions").update({ topic: to }).eq("course_id", CID).eq("topic", from); if (r.error) throw r.error; }
for (const l of moves) { const r = await db.from("lessons").update({ position: l.to }).eq("id", l.id); if (r.error) throw r.error; }
console.log("done");
