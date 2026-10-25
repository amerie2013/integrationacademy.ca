// MDM4U chapter 5 rebuild: new 5.1 (Types of Data & Statistical Studies) and 5.3 (Bias & Principles of Data
// Collection) are inserted, so the old 5.1 becomes 5.2 (retitled "Sampling Techniques") and old 5.2–5.6 become
// 5.4–5.8; a 5.9 review is added. This renames the old worksheet codes (descending, so codes never collide),
// bank topics and assignment titles, then re-sorts every lesson position.
//   node scripts/mdm4u-ch5/renumber5.mjs          -> dry run
//   node scripts/mdm4u-ch5/renumber5.mjs --apply  -> writes (backup first)
// Order: lessons-publish --all --apply → renumber5 --apply → ws/build --all --apply → bank → asg → written.
import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";

const APPLY = process.argv.includes("--apply");
const env = {};
for (const line of fs.readFileSync(".env.local", "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });
const CID = "5906c8e7-bea7-4501-9ef6-6378d6fb3350";
// old code → [new code, new title]; applied in this (descending) order
const MOVES = [
  ["5.6", "5.8", "The z-Score & Comparing Data"],
  ["5.5", "5.7", "Displaying & Describing Distributions"],
  ["5.4", "5.6", "Quartiles, Percentiles & Box Plots"],
  ["5.3", "5.5", "Measures of Spread"],
  ["5.2", "5.4", "Measures of Central Tendency"],
  ["5.1", "5.2", "Sampling Techniques"],
];
const OLDTITLE = { "5.1": "Sampling Techniques & Bias", "5.2": "Measures of Central Tendency", "5.3": "Measures of Spread", "5.4": "Quartiles, Percentiles & Box Plots", "5.5": "Displaying & Describing Distributions", "5.6": "The z-Score & Comparing Data" };
const rank = (t) => { const m = t.match(/^(\d+)\.(\d+)/); return m ? Number(m[1]) * 1000 + Number(m[2]) : 1e9; };

const { data: lessons, error } = await db.from("lessons").select("id, title, position").eq("course_id", CID);
if (error) throw error;
const sorted = [...lessons].sort((a, b) => rank(a.title) - rank(b.title));
const moves = sorted.map((l, i) => ({ ...l, to: i })).filter((l) => l.position !== l.to);
const ch = sorted.filter((l) => l.title.startsWith("5."));
console.log("chapter 5 lessons:", ch.map((l) => l.title).join(" | "));
if (ch.length !== 9) console.log("NOTE: expected 9 chapter-5 lessons — run lessons-publish --all --apply first");
console.log(`positions to change: ${moves.length}`);
const { data: ws } = await db.from("worksheets").select("id, code, title").eq("course_id", CID).like("code", "5.%");
console.log("worksheets now:", ws.map((w) => `${w.code} ${w.title}`).join(" | "));
const done = ws.some((w) => w.code === "5.8");
if (done) console.log("NOTE: a 5.8 worksheet already exists — the renumber was probably applied before; worksheet step will be skipped");
for (const [from, to, title] of MOVES) {
  const { count } = await db.from("bank_questions").select("id", { count: "exact", head: true }).eq("course_id", CID).eq("topic", `${from} ${OLDTITLE[from]}`);
  console.log(`  ${from} ${OLDTITLE[from]} → ${to} ${title}: ${count} bank rows`);
}
const { data: asg } = await db.from("assignments").select("id, title").eq("course_id", CID).like("title", "Assignment 5.%");
console.log("assignments now:", asg.map((a) => a.title).join(" | "));
if (!APPLY) { console.log("Dry run."); process.exit(0); }
if (ch.length !== 9) process.exit(1);

fs.mkdirSync(path.resolve("scripts/mdm4u-ch5/backup"), { recursive: true });
fs.writeFileSync(path.resolve("scripts/mdm4u-ch5/backup", `renumber5-before.${new Date().toISOString().replace(/[:.]/g, "-")}.json`), JSON.stringify({ lessons, ws, asg }, null, 1));
for (const [from, to, title] of MOVES) {
  const w = ws.find((x) => x.code === from && x.title === OLDTITLE[from]);
  if (w && !done) { const r = await db.from("worksheets").update({ code: to, title, position: 5000 + Number(to.split(".")[1]) }).eq("id", w.id); if (r.error) throw r.error; }
  const b = await db.from("bank_questions").update({ topic: `${to} ${title}` }).eq("course_id", CID).eq("topic", `${from} ${OLDTITLE[from]}`);
  if (b.error) throw b.error;
  const a = asg.find((x) => x.title === `Assignment ${from} — ${OLDTITLE[from]}`);
  if (a) { const r = await db.from("assignments").update({ title: `Assignment ${to} — ${title}` }).eq("id", a.id); if (r.error) throw r.error; }
}
for (const l of moves) { const r = await db.from("lessons").update({ position: l.to }).eq("id", l.id); if (r.error) throw r.error; }
console.log("done");
