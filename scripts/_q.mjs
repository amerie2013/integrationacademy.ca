import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";
const env = {};
for (const line of readFileSync(".env.local", "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });
const cid = "88ea0686-581a-4236-b4df-8059c8f1d214";
const { data: ls } = await db.from("lessons").select("id, title, position, published").eq("course_id", cid).order("position");
const ch = ls.filter((l) => /^[78]./.test(l.title));
console.log(ch.map((l) => `${l.position} ${l.published ? "" : "(unpub) "}${l.title}`).join("\n"));
const t5 = ls.filter((l) => l.title.startsWith("8."));
for (const l of t5) {
  const { data: b } = await db.from("bank_questions").select("difficulty, kind").eq("course_id", cid).eq("topic", l.title);
  const c = {}; for (const r of b ?? []) { const k = r.kind === "long_answer" ? "written" : r.difficulty; c[k] = (c[k] ?? 0) + 1; }
  console.log(l.title, JSON.stringify(c));
}
const { data: ws } = await db.from("worksheets").select("*").eq("course_id", cid);
console.log(ws.filter((w) => /5\.\d/.test(w.title ?? w.code ?? "")).map((w) => `${w.title ?? w.code} pub=${w.published}`).join("\n"));
const { data: as } = await db.from("assignments").select("title, published").eq("course_id", cid).like("title", "Assignment 8.%");
console.log(as.map((a) => `${a.title} pub=${a.published}`).join("\n"));
