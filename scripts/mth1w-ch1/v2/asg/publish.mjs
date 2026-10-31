// Chapter 1 assignments with figures.
//   node scripts/mth1w-ch1/v2/asg/publish.mjs            -> check only
//   node scripts/mth1w-ch1/v2/asg/publish.mjs --preview  -> upload figures + write .lesson-preview/<assignmentId>.json (dev server only)
//   node scripts/mth1w-ch1/v2/asg/publish.mjs --apply    -> upload figures + update assignments.description (old text backed up)
// --apply needs the AssignmentBody figure support to be deployed first, or live pages show raw ![..](..) text.
import { createRequire } from "module";
import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";
import crypto from "crypto";
import { ASSIGNMENTS } from "./assignments.mjs";

const katex = createRequire(import.meta.url)("katex");
const PREVIEW = process.argv.includes("--preview"), APPLY = process.argv.includes("--apply");
const CID = "fef1dc8e-c6f7-4632-baa1-7eb940130557";
let bad = 0;
const fail = (m) => { bad++; console.log("  FAIL:", m); };

for (const a of ASSIGNMENTS) {
  const cats = []; for (const l of a.lines) { if (/^(Knowledge|Thinking|Communication|Application)/.test(l)) cats.push(0); else if (/^\d+\./.test(l)) cats[cats.length - 1]++; }
  if (JSON.stringify(cats) !== "[3,2,2,3]") fail(`${a.code}: category split ${JSON.stringify(cats)}`);
  for (const l of a.lines) {
    for (const m of l.matchAll(/\\\(([\s\S]*?)\\\)/g)) { try { katex.renderToString(m[1], { throwOnError: true }); } catch (e) { fail(`${a.code}: KaTeX ${m[1].slice(0, 40)} ${e.message.slice(0, 40)}`); } }
    for (const m of l.matchAll(/\[\[(\w+)\|/g)) if (!a.figs[m[1]]) fail(`${a.code}: missing figure ${m[1]}`);
    if (/\$/.test(l)) fail(`${a.code}: bare $ in "${l.slice(0, 50)}"`);
  }
}
console.log(`${ASSIGNMENTS.length} assignments, ${ASSIGNMENTS.reduce((s, a) => s + Object.keys(a.figs).length, 0)} figures`);
if (bad || (!PREVIEW && !APPLY)) { console.log(bad ? `${bad} PROBLEM(S)` : "ALL CHECKS PASSED (no upload — use --preview or --apply)"); process.exit(bad ? 1 : 0); }

const env = {};
for (const line of fs.readFileSync(".env.local", "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });
const stamp = new Date().toISOString().replace(/[:.]/g, "-");
fs.mkdirSync(path.resolve("scripts/mth1w-ch1/v2/backup"), { recursive: true });
fs.mkdirSync(".lesson-preview", { recursive: true });

const ONLY = (process.argv.find((a) => a.startsWith("--only=")) ?? "").slice(7); // e.g. --only=1.7
for (const a of ASSIGNMENTS.filter((x) => !ONLY || x.code === ONLY)) {
  const { data: rows, error } = await db.from("assignments").select("id, title, description, course_id").eq("course_id", CID).eq("title", a.title);
  if (error) throw error;
  if (rows.length !== 1) { console.log(`SKIP ${a.title}: ${rows.length} matching rows`); continue; }
  const urls = {};
  for (const [key, svg] of Object.entries(a.figs)) {
    const file = `mth1w-${a.code.replace(".", "-")}/asg-${key}-${crypto.createHash("sha1").update(svg).digest("hex").slice(0, 8)}.svg`;
    const up = await db.storage.from("graph-images").upload(file, Buffer.from(svg), { upsert: true, contentType: "image/svg+xml" });
    if (up.error) throw up.error;
    urls[key] = db.storage.from("graph-images").getPublicUrl(file).data.publicUrl;
  }
  const description = a.lines.map((l) => l.replace(/\s*\[\[(\w+)\|([^\]]*)\]\]/g, (_, k, cap) => ` ![${cap}](${urls[k]})`)).join("\n");
  const row = rows[0];
  if (PREVIEW) {
    fs.writeFileSync(path.join(".lesson-preview", `${row.id}.json`), JSON.stringify({ title: a.title, description, course_id: CID }));
    console.log(`preview ${a.code}: http://localhost:3001/assignments/${row.id}`);
  } else {
    fs.writeFileSync(path.resolve("scripts/mth1w-ch1/v2/backup", `asg-${a.code}.${stamp}.json`), JSON.stringify(row, null, 1));
    const r = await db.from("assignments").update({ description }).eq("id", row.id);
    if (r.error) throw r.error;
    console.log(`updated ${a.title}`);
  }
}
