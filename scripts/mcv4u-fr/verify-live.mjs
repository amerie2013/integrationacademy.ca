// MCV4U-FR: read-only comparison of live French vs English course counts.
//   node scripts/mth1w-fr/verify-live.mjs
import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import { CID_FR, CID_EN } from "./common.mjs";
const env = {};
for (const line of fs.readFileSync(".env.local", "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });
const cnt = async (t, f) => { let q = db.from(t).select("id", { count: "exact", head: true }); for (const [k, v] of Object.entries(f)) q = q.eq(k, v); const r = await q; if (r.error) throw r.error; return r.count; };
for (const [k, cid] of Object.entries({ FR: CID_FR, EN: CID_EN })) {
  const out = { lessons: await cnt("lessons", { course_id: cid }), worksheets: await cnt("worksheets", { course_id: cid }), assignments: await cnt("assignments", { course_id: cid }), bank: await cnt("bank_questions", { course_id: cid }) };
  for (const d of ["easy", "medium", "hard"]) out[d] = await cnt("bank_questions", { course_id: cid, difficulty: d });
  out.written = await cnt("bank_questions", { course_id: cid, kind: "long_answer" });
  const { data: L } = await db.from("lessons").select("id,title,position,blocks").eq("course_id", cid).order("position");
  out.order = L.every((l, i) => l.position === i) ? "0..N ok" : "gaps";
  out.blocks = L.reduce((s, l) => s + (l.blocks?.length ?? 0), 0);
  console.log(k, JSON.stringify(out));
}
