// node scripts/mcf3m/final-check.mjs — whole-course check: lesson order, bank topics vs lesson titles, 20/20/20 counts.
import { readFileSync } from "fs";
import { createClient } from "@supabase/supabase-js";
const env = Object.fromEntries(readFileSync("E:/projects/integrationacademy-ca/.env.local", "utf8").split(/\r?\n/).filter((l) => l.includes("=")).map((l) => [l.slice(0, l.indexOf("=")).trim(), l.slice(l.indexOf("=") + 1).trim().replace(/^"|"$/g, "")]));
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });
const CID = "9b5d2c58-858e-4609-a021-005c72bde403";
const { data: L, error } = await db.from("lessons").select("id,title,position").eq("course_id", CID).order("position");
if (error) throw error;
console.log("lessons", L.length);
const bad = L.filter((l, k) => k > 0 && l.position <= L[k - 1].position);
console.log(L.map((l) => `${l.position}:${l.title.split(" ")[0]}`).join(" "));
const titles = new Set(L.map((l) => l.title));
let rows = [], from = 0;
for (;;) { const { data, error: e } = await db.from("bank_questions").select("topic,difficulty,kind").eq("course_id", CID).range(from, from + 999); if (e) throw e; rows = rows.concat(data); if (data.length < 1000) break; from += 1000; }
console.log("bank rows", rows.length);
const byTopic = {};
for (const r of rows) { const k = r.topic; byTopic[k] ??= { easy: 0, medium: 0, hard: 0, long: 0 }; if (r.kind === "long_answer") byTopic[k].long++; else byTopic[k][r.difficulty]++; }
const orphans = Object.keys(byTopic).filter((t) => !titles.has(t));
console.log("orphan topics", orphans);
const odd = Object.entries(byTopic).filter(([t, c]) => c.easy !== 20 || c.medium !== 20 || c.hard !== 20);
console.log("topics not 20/20/20:", odd.map(([t, c]) => `${t} ${JSON.stringify(c)}`));
const noBank = L.filter((l) => !byTopic[l.title] && !/Review/.test(l.title)).map((l) => l.title);
console.log("non-review lessons without bank:", noBank);
