import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";
import { ASSIGNMENTS } from "../mhf4u-ch8/asg/assignments.mjs";
import { WRITTEN } from "../mhf4u-ch8/written.mjs";
const env = {};
for (const line of readFileSync(".env.local", "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });
const CID = "7d3e0ca4-1c49-47d4-84f2-9c41c09dd49d";
for (const a of ASSIGNMENTS) {
  const { data } = await db.from("assignments").select("description").eq("course_id", CID).eq("title", a.title);
  const live = (data?.[0]?.description ?? "").split("\n").map((l) => l.replace(/\s*!\[[^\]]*\]\([^)]*\)/g, ""));
  const src = a.lines.map((l) => l.replace(/\s*\[\[(\w+)\|([^\]]*)\]\]/g, ""));
  console.log(a.code, data?.length, JSON.stringify(live) === JSON.stringify(src) ? "identical" : "DIFF");
}
const { data: la } = await db.from("bank_questions").select("prompt").eq("course_id", CID).eq("kind", "long_answer").like("topic", "8.%");
console.log("written live", la.length, "src", WRITTEN.length, "matching", WRITTEN.filter((w) => la.some((r) => r.prompt === w.prompt)).length);
