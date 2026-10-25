// MDM4U chapter 2 rebuild: a new 2.2 (Experimental vs Theoretical Probability) is inserted, the old
// "2.2 Counting & Probability" moves to 2.8, and a 2.9 review is added. This renames the old 2.2 worksheet
// (code 2.2 → 2.8), bank topic and assignment title, then re-sorts every lesson position.
//   node scripts/mdm4u-ch2/renumber2.mjs          -> dry run
//   node scripts/mdm4u-ch2/renumber2.mjs --apply  -> writes (backup first)
// Order: lessons-publish --all --apply → renumber2 --apply → ws/build --all --apply → bank → asg → written.
import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";

const APPLY = process.argv.includes("--apply");
const env = {};
for (const line of fs.readFileSync(".env.local", "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });
const CID = "5906c8e7-bea7-4501-9ef6-6378d6fb3350";
const TOPICS = { "2.2 Counting & Probability": "2.8 Counting & Probability" };
const ASG = { "Assignment 2.2 — Counting & Probability": "Assignment 2.8 — Counting & Probability" };
const WS = { "2.2": { code: "2.8", title: "Counting & Probability", position: 2008 } };
const rank = (t) => { const m = t.match(/^(\d+)\.(\d+)/); return m ? Number(m[1]) * 1000 + Number(m[2]) : 1e9; };

const { data: lessons, error } = await db.from("lessons").select("id, title, position").eq("course_id", CID);
if (error) throw error;
const sorted = [...lessons].sort((a, b) => rank(a.title) - rank(b.title));
const moves = sorted.map((l, i) => ({ ...l, to: i })).filter((l) => l.position !== l.to);
const ch = sorted.filter((l) => l.title.startsWith("2."));
console.log("chapter 2 lessons:", ch.map((l) => l.title).join(" | "));
if (ch.length !== 9) console.log("NOTE: expected 9 chapter-2 lessons — run lessons-publish --all --apply first");
console.log(`positions to change: ${moves.length}`);
const { data: ws } = await db.from("worksheets").select("id, code, title").eq("course_id", CID).in("code", ["2.2", "2.8"]);
console.log("worksheets now:", ws.map((w) => `${w.code} ${w.title}`).join(" | "));
const oldWs = ws.find((w) => w.code === "2.2" && w.title === "Counting & Probability");
if (ws.some((w) => w.code === "2.8")) console.log("NOTE: a 2.8 worksheet already exists — the rename was probably applied before");
const { count: nTopic } = await db.from("bank_questions").select("id", { count: "exact", head: true }).eq("course_id", CID).eq("topic", Object.keys(TOPICS)[0]);
console.log(`bank rows to rename: ${nTopic}`);
const { data: asg } = await db.from("assignments").select("id, title").eq("course_id", CID).in("title", Object.keys(ASG));
console.log("assignments to retitle:", asg.map((a) => a.title).join(" | ") || "none");
if (!APPLY) { console.log("Dry run."); process.exit(0); }
if (ch.length !== 9) process.exit(1);

fs.mkdirSync(path.resolve("scripts/mdm4u-ch2/backup"), { recursive: true });
fs.writeFileSync(path.resolve("scripts/mdm4u-ch2/backup", `renumber2-before.${new Date().toISOString().replace(/[:.]/g, "-")}.json`), JSON.stringify({ lessons, ws, asg }, null, 1));
if (oldWs && !ws.some((w) => w.code === "2.8")) { const r = await db.from("worksheets").update(WS["2.2"]).eq("id", oldWs.id); if (r.error) throw r.error; }
for (const [from, to] of Object.entries(TOPICS)) { const r = await db.from("bank_questions").update({ topic: to }).eq("course_id", CID).eq("topic", from); if (r.error) throw r.error; }
for (const a of asg) { const r = await db.from("assignments").update({ title: ASG[a.title] }).eq("id", a.id); if (r.error) throw r.error; }
for (const l of moves) { const r = await db.from("lessons").update({ position: l.to }).eq("id", l.id); if (r.error) throw r.error; }
console.log("done");
