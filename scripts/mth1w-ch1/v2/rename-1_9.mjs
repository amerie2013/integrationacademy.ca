// One-time rename of topic 1.9 (2026-10-16): "Ratios, Rates, Percentages & Proportions" -> "Rates, Percentages & Percent Change".
// Lesson title, bank topic, assignment title and worksheet title move together so every link stays intact.
//   node scripts/mth1w-ch1/v2/rename-1_9.mjs [--apply]
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";
const APPLY = process.argv.includes("--apply");
const env = {}; for (const line of readFileSync(".env.local", "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });
const CID = "fef1dc8e-c6f7-4632-baa1-7eb940130557";
const OLD = "Ratios, Rates, Percentages & Proportions", NEW = "Rates, Percentages & Percent Change";
const steps = [
  ["lessons", "title", `1.9 ${OLD}`, `1.9 ${NEW}`],
  ["bank_questions", "topic", `1.9 ${OLD}`, `1.9 ${NEW}`],
  ["assignments", "title", `Assignment 1.9 — ${OLD}`, `Assignment 1.9 — ${NEW}`],
  ["worksheets", "title", OLD, NEW],
];
for (const [table, col, from, to] of steps) {
  const { count } = await db.from(table).select("id", { count: "exact", head: true }).eq("course_id", CID).eq(col, from);
  console.log(`${APPLY ? "" : "[dry] "}${table}.${col}: ${count} row(s) "${from}" -> "${to}"`);
  if (APPLY && count) { const r = await db.from(table).update({ [col]: to }).eq("course_id", CID).eq(col, from); if (r.error) throw r.error; }
}
