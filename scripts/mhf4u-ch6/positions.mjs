// MHF4U chapter 6: re-sorts every lesson position by its x.y code after new chapter-6 lessons are inserted
// (lessons-publish puts brand-new rows at position 900). Worksheet positions are set by ws/build.mjs.
//   node scripts/mhf4u-ch6/positions.mjs          -> dry run
//   node scripts/mhf4u-ch6/positions.mjs --apply  -> writes (backup first)
// Order: lessons-publish --apply → positions --apply → ws/build --apply → bank → asg → written.
import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";

const APPLY = process.argv.includes("--apply");
const env = {};
for (const line of fs.readFileSync(".env.local", "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });
const CID = "7d3e0ca4-1c49-47d4-84f2-9c41c09dd49d";
const rank = (t) => { const m = t.match(/^(\d+)\.(\d+)/); return m ? Number(m[1]) * 1000 + Number(m[2]) : 1e9; };

const { data: lessons, error } = await db.from("lessons").select("id, title, position").eq("course_id", CID);
if (error) throw error;
const sorted = [...lessons].sort((a, b) => rank(a.title) - rank(b.title));
const moves = sorted.map((l, i) => ({ ...l, to: i })).filter((l) => l.position !== l.to);
console.log("chapter 6 lessons:", sorted.filter((l) => l.title.startsWith("6.")).map((l) => l.title).join(" | "));
for (const l of moves) console.log(`  ${l.title}: ${l.position} -> ${l.to}`);
if (!APPLY) { console.log("Dry run."); process.exit(0); }

fs.mkdirSync(path.resolve("scripts/mhf4u-ch6/backup"), { recursive: true });
fs.writeFileSync(path.resolve("scripts/mhf4u-ch6/backup", `positions-before.${new Date().toISOString().replace(/[:.]/g, "-")}.json`), JSON.stringify(lessons, null, 1));
for (const l of moves) { const r = await db.from("lessons").update({ position: l.to }).eq("id", l.id); if (r.error) throw r.error; }
console.log(`moved ${moves.length}`);
