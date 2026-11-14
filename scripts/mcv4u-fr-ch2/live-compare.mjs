// READ-ONLY: compare the English chapter-2 source (main) with the LIVE English DB rows (lessons, worksheets, bank counts).
//   node scripts/mcv4u-fr-ch2/live-compare.mjs
// Never writes anything. Used to decide which English version the French chapter mirrors.
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";
import { pathToFileURL } from "url";
import { resolve, join } from "path";

const CID_EN = "88ea0686-581a-4236-b4df-8059c8f1d214";
const env = {};
for (const line of readFileSync(".env.local", "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });
const EN = resolve("scripts/mcv4u-ch2");
const strip = (s) => String(s).replace(/data-[a-z]+="[^"]*"/g, "").replace(/\s+/g, " ").trim();

for (let k = 1; k <= 7; k++) {
  const M = await import(pathToFileURL(join(EN, `l2_${k}.mjs`)).href);
  const built = M.blocks();
  const { data: row } = await db.from("lessons").select("id, title, blocks, course_id").eq("id", M.ID).maybeSingle();
  if (!row) { console.log(`2.${k}: NO LIVE ROW`); continue; }
  const lw = row.blocks.filter((b) => b.type === "widget").map((b) => b.widget).join(",");
  const bw = built.filter((b) => b.type === "widget").map((b) => b.widget).join(",");
  // compare content ignoring random block ids
  const canon = (v) => Array.isArray(v) ? v.map(canon) : v && typeof v === "object" ? Object.fromEntries(Object.keys(v).filter((k) => k !== "id").sort().map((k) => [k, canon(v[k])])) : v;
  const norm = (bs) => bs.map((b) => strip(JSON.stringify(canon(b))));
  const L = norm(row.blocks), B = norm(built);
  const diffIdx = B.map((s, i) => (s === L[i] ? null : i)).filter((i) => i !== null);
  console.log(`2.${k} live "${row.title}" ${row.blocks.length} blocks [${lw}]  |  main ${built.length} blocks [${bw}]  title ${row.title === M.TITLE ? "=" : "≠ " + M.TITLE}  differing blocks: ${diffIdx.length ? diffIdx.join(",") : "none"}`);
  const signLive = (JSON.stringify(row.blocks).match(/Highlighted: where the product/g) || []).length;
  const signMain = (JSON.stringify(built).match(/Highlighted: where the product/g) || []).length;
  if (signLive || signMain) console.log(`     sign charts: live ${signLive}, main ${signMain}`);
  for (const i of diffIdx.slice(0, 3)) {
    const a = L[i] ?? "", b = B[i] ?? "";
    let p = 0; while (p < a.length && a[p] === b[p]) p++;
    console.log(`     block ${i} first diff @${p}:\n       live: ${a.slice(Math.max(0, p - 60), p + 140)}\n       main: ${b.slice(Math.max(0, p - 60), p + 140)}`);
  }
}

const { data: ws, error: wsErr } = await db.from("worksheets").select("*").eq("course_id", CID_EN).like("code", "2.%").order("code");
if (wsErr) console.log("ws error", wsErr.message);
for (const w of ws ?? []) {
  const src = (await import(pathToFileURL(join(EN, "ws", `w${w.code.replace(".", "_")}.mjs`)).href)).WS;
  const live = w.content ?? {};
  const liveEx = (live.examples ?? []).map((e) => e[0]).join(" | ");
  const mainEx = src.examples.map((e, i) => `Example ${i + 1}: ${e.title}`).join(" | ");
  const exSame = liveEx === mainEx;
  const stepsSame = (live.examples ?? []).every((e, i) => src.examples[i] && strip(e[2]).slice(0, 80) === strip(src.examples[i].steps.join(" ")).replace(/\\textbf\{([^{}]*)\}/g, "$1").slice(0, 80));
  const qSame = (live.questions ?? []).every((q, i) => src.problems.length > i);
  console.log(`ws ${w.code} live "${w.title}" ex=${(live.examples ?? []).length} q=${(live.questions ?? []).length} | main ex=${src.examples.length} q=${src.problems.length}  titles ${exSame ? "same" : "DIFFER"}  steps(first 80ch) ${stepsSame ? "same" : "differ"}  updated ${w.updated_at ?? "?"}`);
  if (!exSame) console.log("   live:", liveEx, "\n   main:", mainEx);
}

for (let k = 1; k <= 6; k++) {
  const { data: les } = await db.from("lessons").select("title").eq("id", (await import(pathToFileURL(join(EN, `l2_${k}.mjs`)).href)).ID).single();
  const { data: bq } = await db.from("bank_questions").select("difficulty, kind").eq("course_id", CID_EN).eq("topic", les.title);
  const c = {};
  for (const r of bq ?? []) { const key = r.kind === "long_answer" ? "written" : r.difficulty; c[key] = (c[key] ?? 0) + 1; }
  console.log(`bank "${les.title}":`, JSON.stringify(c));
}
const { data: asg } = await db.from("assignments").select("id, title").eq("course_id", CID_EN).like("title", "%2.%");
console.log("assignments:", (asg ?? []).map((a) => a.title).join(" | "));
