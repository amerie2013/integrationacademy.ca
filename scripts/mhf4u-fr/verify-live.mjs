// MHF4U-FR: read-only comparison of live French vs English course counts.
import { createClient } from "@supabase/supabase-js";
import fs from "fs";
const env = {};
for (const line of fs.readFileSync(".env.local", "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });
const C = { FR: "26a9a4f5-7b5f-495d-901e-6359746e199b", EN: "7d3e0ca4-1c49-47d4-84f2-9c41c09dd49d" };
const cnt = async (t, f) => { let q = db.from(t).select("id", { count: "exact", head: true }); for (const [k, v] of Object.entries(f)) q = q.eq(k, v); const r = await q; if (r.error) throw r.error; return r.count; };
for (const [k, cid] of Object.entries(C)) {
  const out = { lessons: await cnt("lessons", { course_id: cid }), worksheets: await cnt("worksheets", { course_id: cid }), assignments: await cnt("assignments", { course_id: cid }), bank: await cnt("bank_questions", { course_id: cid }) };
  for (const d of ["easy", "medium", "hard"]) out[d] = await cnt("bank_questions", { course_id: cid, difficulty: d });
  out.written = await cnt("bank_questions", { course_id: cid, kind: "long_answer" });
  const { data: L } = await db.from("lessons").select("title,position").eq("course_id", cid).order("position");
  out.order = L.every((l, i) => l.position === i) ? "0..50 ok" : "gaps";
  out.noEmptyLessons = 0;
  for (const l of (await db.from("lessons").select("id").eq("course_id", cid)).data) if (!(await cnt("bank_questions", { lesson_id: l.id }))) out.noEmptyLessons++;
  console.log(k, JSON.stringify(out));
}
