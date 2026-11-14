import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";
const env = {};
for (const line of readFileSync(".env.local", "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });
const CID = "88ea0686-581a-4236-b4df-8059c8f1d214";
const { data } = await db.from("bank_questions").select("topic, difficulty, kind, lesson_id, image_url").eq("course_id", CID).like("topic", "8.%");
const c = {};
for (const r of data) { const k = `${r.topic.split(" ")[0]} ${r.difficulty} ${r.kind === "long_answer" ? "LA" : ""} lid=${!!r.lesson_id}`; c[k] = (c[k] || 0) + 1; }
console.log(c);
console.log([...new Set(data.map(r=>r.topic))]);
const { data: a } = await db.from("assignments").select("title").eq("course_id", CID).like("title", "%8.%");
console.log(a.map(x=>x.title));
const { data: w } = await db.from("worksheets").select("code,title").eq("course_id", CID).like("code", "8.%");
console.log(w);
