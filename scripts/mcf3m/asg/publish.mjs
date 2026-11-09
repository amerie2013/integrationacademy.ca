// MCF3M assignments with figures (12 questions: Knowledge 1-3, Thinking 4-5, Communication 6-7, Application 8-10,
// Hard Level 11-12). Source: scripts/mcf3m/ch<N>/asg.mjs (export ASSIGNMENTS). [[key|caption]] = uploaded SVG figure.
//   node scripts/mcf3m/asg/publish.mjs --ch=1            -> check only
//   node scripts/mcf3m/asg/publish.mjs --ch=1 --preview  -> upload figures + .lesson-preview/<assignmentId>.json (dev only)
//   node scripts/mcf3m/asg/publish.mjs --ch=1 --apply    -> upload figures + update/insert assignments (old text backed up)
//   add --code=1.3 to publish a single assignment. Run AFTER restructure.mjs (existing rows are matched by the new title).
import { createRequire } from "module";
import { createClient } from "@supabase/supabase-js";
import { pathToFileURL } from "url";
import fs from "fs";
import path from "path";
import crypto from "crypto";
import { CID, newAsgId, lesson } from "../plan.mjs";

const katex = createRequire(import.meta.url)("katex");
const PREVIEW = process.argv.includes("--preview"), APPLY = process.argv.includes("--apply");
const CH = (process.argv.find((a) => a.startsWith("--ch=")) ?? "").slice(5);
const ONLY = (process.argv.find((a) => a.startsWith("--code=")) ?? "").slice(7);
if (!/^[1-8]$/.test(CH)) { console.log("usage: publish.mjs --ch=<1-8> [--code=x.y] [--preview|--apply]"); process.exit(1); }
let { ASSIGNMENTS } = await import(pathToFileURL(path.resolve(`scripts/mcf3m/ch${CH}/asg.mjs`)).href);
if (ONLY) ASSIGNMENTS = ASSIGNMENTS.filter((a) => a.code === ONLY);
let bad = 0;
const fail = (m) => { bad++; console.log("  FAIL:", m); };

for (const a of ASSIGNMENTS) {
  const L = lesson(a.code);
  if (a.title !== `Assignment ${a.code} — ${L.title}`) fail(`${a.code}: title must be "Assignment ${a.code} — ${L.title}"`);
  const cats = []; for (const l of a.lines) { if (/^(Knowledge|Thinking|Communication|Application|Hard Level)/.test(l)) cats.push(0); else if (/^\d+\./.test(l)) cats[cats.length - 1]++; }
  if (JSON.stringify(cats) !== "[3,2,2,3,2]") fail(`${a.code}: category split ${JSON.stringify(cats)}`);
  if (Object.keys(a.figs).length < 2) fail(`${a.code}: needs at least 2 figures`);
  for (const l of a.lines) {
    for (const m of l.matchAll(/\\\(([\s\S]*?)\\\)/g)) { try { katex.renderToString(m[1], { throwOnError: true }); } catch (e) { fail(`${a.code}: KaTeX ${m[1].slice(0, 40)} ${e.message.slice(0, 40)}`); } }
    for (const m of l.matchAll(/\[\[(\w+)\|/g)) if (!a.figs[m[1]]) fail(`${a.code}: missing figure ${m[1]}`);
    if (/\$/.test(l)) fail(`${a.code}: bare $ in "${l.slice(0, 50)}"`);
  }
  for (const k of Object.keys(a.figs)) if (!a.lines.some((l) => l.includes(`[[${k}|`))) fail(`${a.code}: figure ${k} not used`);
}
console.log(`${ASSIGNMENTS.length} assignments, ${ASSIGNMENTS.reduce((s, a) => s + Object.keys(a.figs).length, 0)} figures`);
if (bad || (!PREVIEW && !APPLY)) { console.log(bad ? `${bad} PROBLEM(S)` : "ALL CHECKS PASSED (no upload — use --preview or --apply)"); process.exit(bad ? 1 : 0); }

const env = {};
for (const line of fs.readFileSync(".env.local", "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });
const stamp = new Date().toISOString().replace(/[:.]/g, "-");
fs.mkdirSync(path.resolve("scripts/mcf3m/backup"), { recursive: true });
fs.mkdirSync(".lesson-preview", { recursive: true });

for (const a of ASSIGNMENTS) {
  let { data: rows, error } = await db.from("assignments").select("id, title, description, course_id").eq("course_id", CID).eq("title", a.title);
  if (error) throw error;
  if (!rows.length) rows = (await db.from("assignments").select("id, title, description, course_id").eq("id", newAsgId(a.code))).data ?? [];
  if (rows.length > 1) { console.log(`SKIP ${a.title}: ${rows.length} matching rows`); continue; }
  const urls = {};
  for (const [key, svg] of Object.entries(a.figs)) {
    const file = `mcf3m-${a.code.replace(".", "-")}/asg-${key}-${crypto.createHash("sha1").update(svg).digest("hex").slice(0, 8)}.svg`;
    const up = await db.storage.from("graph-images").upload(file, Buffer.from(svg), { upsert: true, contentType: "image/svg+xml" });
    if (up.error) throw up.error;
    urls[key] = db.storage.from("graph-images").getPublicUrl(file).data.publicUrl;
  }
  const description = a.lines.map((l) => l.replace(/\s*\[\[(\w+)\|([^\]]*)\]\]/g, (_, k, cap) => ` ![${cap}](${urls[k]})`)).join("\n");
  const row = rows[0] ?? null;
  if (PREVIEW) {
    const pid = row?.id ?? newAsgId(a.code);
    fs.writeFileSync(path.join(".lesson-preview", `${pid}.json`), JSON.stringify({ title: a.title, description, course_id: CID }));
    console.log(`preview ${a.code}: http://localhost:3001/assignments/${pid}`);
    continue;
  }
  if (!row) {
    const r = await db.from("assignments").insert({ id: newAsgId(a.code), course_id: CID, title: a.title, description, published: true, tutor_enabled: true });
    if (r.error) throw r.error;
    console.log(`INSERTED ${a.title}`);
    continue;
  }
  fs.writeFileSync(path.resolve("scripts/mcf3m/backup", `asg-${a.code}.${stamp}.json`), JSON.stringify(row, null, 1));
  const r = await db.from("assignments").update({ description, title: a.title }).eq("id", row.id);
  if (r.error) throw r.error;
  console.log(`updated ${a.title}`);
}
