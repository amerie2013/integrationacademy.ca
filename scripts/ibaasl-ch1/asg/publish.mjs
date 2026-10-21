// IB AA SL chapter 1 assignments with figures (SVG).
//   node scripts/ibaasl-ch1/asg/publish.mjs            -> check only
//   node scripts/ibaasl-ch1/asg/publish.mjs --preview  -> upload figures + write .lesson-preview/<assignmentId>.json (dev server only)
//   node scripts/ibaasl-ch1/asg/publish.mjs --apply    -> upload figures + update assignments.description (old text backed up)
// --apply needs the AssignmentBody figure support to be deployed first, or live pages show raw ![..](..) text.
import { createRequire } from "module";
import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";
import crypto from "crypto";
import { ASSIGNMENTS } from "./assignments.mjs";

const katex = createRequire(import.meta.url)("katex");
const PREVIEW = process.argv.includes("--preview"), APPLY = process.argv.includes("--apply");
const CID = "f635431f-3244-45c3-9c4a-39a33fd209b9";
let bad = 0;
const fail = (m) => { bad++; console.log("  FAIL:", m); };

for (const a of ASSIGNMENTS) {
  const cats = []; for (const l of a.lines) { if (/^(Knowledge|Thinking|Communication|Application|Hard Level)/.test(l)) cats.push(0); else if (/^\d+\./.test(l)) cats[cats.length - 1]++; }
  if (JSON.stringify(cats) !== "[3,2,2,3,2]") fail(`${a.code}: category split ${JSON.stringify(cats)}`);
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
fs.mkdirSync(path.resolve("scripts/ibaasl-ch1/backup"), { recursive: true });
fs.mkdirSync(".lesson-preview", { recursive: true });

// matched by fixed id (the restructure renumbers the old rows; their titles are rewritten here);
// the brand-new 1.4 is inserted with its id so it can be previewed first.
const NEWID = {
  "1.1": "b2d95c7e-4650-4cde-a2eb-ceac4478131c", "1.2": "3d6e0f17-7c18-4d5f-93db-0f82ef74f2d5", "1.3": "a17a6556-561a-4499-aefb-dd2c64e6d4be",
  "1.4": "1baa0001-0002-4001-8001-000000000104", "1.5": "9fc906dc-1196-4dd4-8df0-bcfadff2f5b8", "1.6": "789c6603-9ec4-47ba-8c37-ff905d1e7400",
};
for (const a of ASSIGNMENTS) {
  const { data: rows, error } = await db.from("assignments").select("id, title, description, course_id").eq("id", NEWID[a.code]);
  if (error) throw error;
  if (rows.length > 1) { console.log(`SKIP ${a.title}: ${rows.length} matching rows`); continue; }
  const urls = {};
  for (const [key, svg] of Object.entries(a.figs)) {
    const file = `ibaasl-${a.code.replace(".", "-")}/asg-${key}-${crypto.createHash("sha1").update(svg).digest("hex").slice(0, 8)}.svg`;
    const up = await db.storage.from("graph-images").upload(file, Buffer.from(svg), { upsert: true, contentType: "image/svg+xml" });
    if (up.error) throw up.error;
    urls[key] = db.storage.from("graph-images").getPublicUrl(file).data.publicUrl;
  }
  const description = a.lines.map((l) => l.replace(/\s*\[\[(\w+)\|([^\]]*)\]\]/g, (_, k, cap) => ` ![${cap}](${urls[k]})`)).join("\n");
  const row = rows[0] ?? null;
  if (PREVIEW) {
    const pid = row?.id ?? NEWID[a.code];
    if (!pid) { console.log(`preview skipped for ${a.code} (no row id)`); continue; }
    fs.writeFileSync(path.join(".lesson-preview", `${pid}.json`), JSON.stringify({ title: a.title, description, course_id: CID }));
    console.log(`preview ${a.code}: http://localhost:3001/assignments/${pid}`);
  } else {
    if (!row) {
      const r = await db.from("assignments").insert({ ...(NEWID[a.code] ? { id: NEWID[a.code] } : {}), course_id: CID, title: a.title, description, published: true, tutor_enabled: true });
      if (r.error) throw r.error;
      console.log(`INSERTED ${a.title}`);
      continue;
    }
    fs.writeFileSync(path.resolve("scripts/ibaasl-ch1/backup", `asg-${a.code}.${stamp}.json`), JSON.stringify(row, null, 1));
    const r = await db.from("assignments").update({ description, title: a.title }).eq("id", row.id);
    if (r.error) throw r.error;
    console.log(`updated ${a.title}`);
  }
}
