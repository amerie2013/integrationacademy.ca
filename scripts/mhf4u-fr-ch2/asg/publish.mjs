// MHF4U-FR chapitre 2 — devoirs avec figures (plans cartésiens en SVG). Copie française de ../../mhf4u-ch2/asg/publish.mjs.
//   node scripts/mhf4u-fr-ch2/asg/publish.mjs            -> check only (no DB, no upload)
//   node scripts/mhf4u-fr-ch2/asg/publish.mjs --apply    -> upload figures (keys mhf4u-fr-…) + insert/update the rows
// Each row is matched by its FIXED id asgId(2, k): inserted if missing, else title + description updated (old row backed up).
// No --preview mode (preview files shadow the database).
import { createRequire } from "module";
import fs from "fs";
import path from "path";
import crypto from "crypto";
import { ASSIGNMENTS } from "./assignments.mjs";
import { ASSIGNMENTS as EN } from "../../mhf4u-ch2/asg/assignments.mjs";
import { CID_FR, asgId, FIG_PREFIX } from "../../mhf4u-fr/common.mjs";

const katex = createRequire(import.meta.url)("katex");
const APPLY = process.argv.includes("--apply");
let bad = 0;
const fail = (m) => { bad++; console.log("  FAIL:", m); };
const CAT = /^(Connaissance et compréhension|Habiletés de la pensée|Communication|Mise en application|Niveau difficile)$/;
const mathOf = (l) => [...l.matchAll(/\\\(([\s\S]*?)\\\)/g)].map((m) => m[1]).join(" | ");

for (const [i, a] of ASSIGNMENTS.entries()) {
  const cats = []; for (const l of a.lines) { if (CAT.test(l)) cats.push(0); else if (/^\d+\./.test(l)) cats[cats.length - 1]++; }
  if (JSON.stringify(cats) !== "[3,2,2,3,2]") fail(`${a.code}: category split ${JSON.stringify(cats)}`);
  const lesson = await import(`../l${a.code.replace(".", "_")}.mjs`);
  if (a.title !== `Devoir ${a.code} — ${lesson.TITLE.slice(a.code.length + 1)}`) fail(`${a.code}: title "${a.title}" does not match the lesson title`);
  for (const l of a.lines) {
    for (const m of l.matchAll(/\\\(([\s\S]*?)\\\)/g)) { try { katex.renderToString(m[1], { throwOnError: true }); } catch (e) { fail(`${a.code}: KaTeX ${m[1].slice(0, 40)} ${e.message.slice(0, 40)}`); } }
    for (const m of l.matchAll(/\[\[(\w+)\|/g)) if (!a.figs[m[1]]) fail(`${a.code}: missing figure ${m[1]}`);
    if (/\$/.test(l)) fail(`${a.code}: bare $ in "${l.slice(0, 50)}"`);
  }
  // same questions as English: line count, figure keys + SVGs, and the math of every line
  const e = EN[i];
  if (e.code !== a.code || e.lines.length !== a.lines.length) fail(`${a.code}: ${a.lines.length} lines, English has ${e.lines.length}`);
  if (JSON.stringify(Object.keys(e.figs)) !== JSON.stringify(Object.keys(a.figs)) || Object.keys(e.figs).some((k) => e.figs[k] !== a.figs[k])) fail(`${a.code}: figures differ from English`);
  a.lines.forEach((l, j) => { if (mathOf(l) !== mathOf(e.lines[j])) fail(`${a.code} line ${j + 1}: math differs from English`); if ((l.match(/\[\[(\w+)\|/) ?? [])[1] !== (e.lines[j].match(/\[\[(\w+)\|/) ?? [])[1]) fail(`${a.code} line ${j + 1}: figure placement differs`); });
}
console.log(`${ASSIGNMENTS.length} assignments, ${ASSIGNMENTS.reduce((s, a) => s + Object.keys(a.figs).length, 0)} figures (English: ${EN.length} assignments, ${EN.reduce((s, a) => s + Object.keys(a.figs).length, 0)} figures)`);
if (bad || !APPLY) { console.log(bad ? `${bad} PROBLEM(S)` : "ALL CHECKS PASSED (no upload — use --apply)"); process.exit(bad ? 1 : 0); }

const { createClient } = await import("@supabase/supabase-js");
const env = {};
for (const line of fs.readFileSync(".env.local", "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });
const stamp = new Date().toISOString().replace(/[:.]/g, "-");
const BACKUP = path.resolve("scripts/mhf4u-fr-ch2/backup");
fs.mkdirSync(BACKUP, { recursive: true });

for (const a of ASSIGNMENTS) {
  const id = asgId(2, Number(a.code.split(".")[1]));
  const { data: row, error } = await db.from("assignments").select("id, title, description, course_id").eq("id", id).maybeSingle();
  if (error) throw error;
  if (row && row.course_id !== CID_FR) throw new Error(`${id} belongs to another course`);
  const urls = {};
  for (const [key, svg] of Object.entries(a.figs)) {
    const file = `${FIG_PREFIX}-${a.code.replace(".", "-")}/asg-${key}-${crypto.createHash("sha1").update(svg).digest("hex").slice(0, 8)}.svg`;
    const up = await db.storage.from("graph-images").upload(file, Buffer.from(svg), { upsert: true, contentType: "image/svg+xml" });
    if (up.error) throw up.error;
    urls[key] = db.storage.from("graph-images").getPublicUrl(file).data.publicUrl;
  }
  const description = a.lines.map((l) => l.replace(/\s*\[\[(\w+)\|([^\]]*)\]\]/g, (_, k, cap) => ` ![${cap}](${urls[k]})`)).join("\n");
  if (!row) {
    const r = await db.from("assignments").insert({ id, course_id: CID_FR, title: a.title, description, published: true, tutor_enabled: true });
    if (r.error) throw r.error;
    console.log(`INSERTED ${a.title}`);
    continue;
  }
  fs.writeFileSync(path.join(BACKUP, `asg-${a.code}.${stamp}.json`), JSON.stringify(row, null, 1));
  const r = await db.from("assignments").update({ description, title: a.title }).eq("id", row.id);
  if (r.error) throw r.error;
  console.log(`updated ${a.title}`);
}
