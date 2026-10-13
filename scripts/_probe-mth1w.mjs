import { readFileSync } from "fs";
import { createClient } from "@supabase/supabase-js";
const env = {};
for (const line of readFileSync(".env.local", "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });
const cid = "fef1dc8e-c6f7-4632-baa1-7eb940130557";
const { data: course } = await db.from("courses").select("id,code,title").eq("id", cid).maybeSingle();
console.log("course:", course);
const { data: lessons } = await db.from("lessons").select("title,position,updated_at").eq("course_id", cid).order("position");
console.log("lessons:", lessons?.length, lessons?.slice(0, 5), "...", lessons?.slice(-3));
const { data: ws } = await db.from("worksheets").select("code,title,updated_at").eq("course_id", cid).order("position");
console.log("worksheets:", ws?.length);
console.log(ws?.map((w) => w.code).join(", "));
console.log("most recent worksheet updates:", ws?.slice().sort((a, b) => b.updated_at.localeCompare(a.updated_at)).slice(0, 5));
