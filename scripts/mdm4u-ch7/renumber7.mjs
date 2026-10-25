// MDM4U chapter 7 rebuild: 7.1–7.4 keep their titles, worksheet codes, bank topics and assignment titles; new 7.5
// and a 7.6 review are added at the end of the chapter. This only re-sorts every lesson position.
//   node scripts/mdm4u-ch7/renumber7.mjs          -> dry run
//   node scripts/mdm4u-ch7/renumber7.mjs --apply  -> writes (backup first)
// Order: lessons-publish --all --apply → renumber7 --apply → ws/build --all --apply → bank → asg → written.
import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";

const APPLY = process.argv.includes("--apply");
const env = {};
for (const line of fs.readFileSync(".env.local", "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });
const CID = "5906c8e7-bea7-4501-9ef6-6378d6fb3350";
const rank = (t) => { const m = t.match(/^(\d+)\.(\d+)/); return m ? Number(m[1]) * 1000 + Number(m[2]) : 1e9; };

const { data: lessons, error } = await db.from("lessons").select("id, title, position").eq("course_id", CID);
if (error) throw error;
const sorted = [...lessons].sort((a, b) => rank(a.title) - rank(b.title));
const moves = sorted.map((l, i) => ({ ...l, to: i })).filter((l) => l.position !== l.to);
const ch = sorted.filter((l) => l.title.startsWith("7."));
console.log("chapter 7 lessons:", ch.map((l) => l.title).join(" | "));
if (ch.length !== 6) console.log("NOTE: expected 6 chapter-7 lessons — run lessons-publish --all --apply first");
console.log(`positions to change: ${moves.length}`);
if (!APPLY) { console.log("Dry run."); process.exit(0); }
if (ch.length !== 6) process.exit(1);

fs.mkdirSync(path.resolve("scripts/mdm4u-ch7/backup"), { recursive: true });
fs.writeFileSync(path.resolve("scripts/mdm4u-ch7/backup", `renumber7-before.${new Date().toISOString().replace(/[:.]/g, "-")}.json`), JSON.stringify({ lessons }, null, 1));
for (const l of moves) { const r = await db.from("lessons").update({ position: l.to }).eq("id", l.id); if (r.error) throw r.error; }
console.log("done");
