// MHF4U-FR chapitre 7 — devoirs avec figures (plans cartésiens en SVG), cours MHF4U-FR (CID_FR).
//   node scripts/mhf4u-fr-ch7/asg/publish.mjs          -> vérifications seulement (aucune écriture)
//   node scripts/mhf4u-fr-ch7/asg/publish.mjs --apply  -> téléverse les figures + insère ou met à jour assignments
// Chaque ligne est repérée par son ID fixe asgId(7, k) : insérée si elle manque, sinon mise à jour (ancien texte sauvegardé).
import { createRequire } from "module";
import fs from "fs";
import path from "path";
import crypto from "crypto";
import { ASSIGNMENTS } from "./assignments.mjs";
import { CID_FR, asgId, FIG_PREFIX } from "../../mhf4u-fr/common.mjs";

const katex = createRequire(import.meta.url)("katex");
const APPLY = process.argv.includes("--apply");
const CID = CID_FR;
let bad = 0;
const fail = (m) => { bad++; console.log("  FAIL:", m); };

const CAT = /^(Connaissance et compréhension|Habiletés de la pensée|Communication|Mise en application|Niveau difficile)$/;
for (const a of ASSIGNMENTS) {
  const cats = []; for (const l of a.lines) { if (CAT.test(l)) cats.push(0); else if (/^\d+\./.test(l)) cats[cats.length - 1]++; }
  if (JSON.stringify(cats) !== "[3,2,2,3,2]") fail(`${a.code}: category split ${JSON.stringify(cats)}`);
  if (!a.title.startsWith(`Devoir ${a.code} — `)) fail(`${a.code}: title "${a.title}"`);
  for (const l of a.lines) {
    for (const m of l.matchAll(/\\\(([\s\S]*?)\\\)/g)) { try { katex.renderToString(m[1], { throwOnError: true }); } catch (e) { fail(`${a.code}: KaTeX ${m[1].slice(0, 40)} ${e.message.slice(0, 40)}`); } }
    for (const m of l.matchAll(/\[\[(\w+)\|/g)) if (!a.figs[m[1]]) fail(`${a.code}: missing figure ${m[1]}`);
    if (/\$/.test(l)) fail(`${a.code}: bare $ in "${l.slice(0, 50)}"`);
  }
}
console.log(`${ASSIGNMENTS.length} assignments, ${ASSIGNMENTS.reduce((s, a) => s + Object.keys(a.figs).length, 0)} figures`);
for (const a of ASSIGNMENTS) console.log(`  ${a.code}  id ${asgId(7, Number(a.code.split(".")[1]))}  "${a.title}"  ${a.lines.filter((l) => /^\d+\./.test(l)).length} questions`);
if (bad || !APPLY) { console.log(bad ? `${bad} PROBLEM(S)` : "ALL CHECKS PASSED (no upload — use --apply)"); process.exit(bad ? 1 : 0); }

const { createClient } = await import("@supabase/supabase-js");
const env = {};
for (const line of fs.readFileSync(".env.local", "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });
const stamp = new Date().toISOString().replace(/[:.]/g, "-");

for (const a of ASSIGNMENTS) {
  const id = asgId(7, Number(a.code.split(".")[1]));
  const { data: row, error } = await db.from("assignments").select("id, title, description, course_id").eq("id", id).maybeSingle();
  if (error) throw error;
  if (row && row.course_id !== CID) throw new Error(`${id} belongs to another course`);
  const urls = {};
  for (const [key, svg] of Object.entries(a.figs)) {
    const file = `${FIG_PREFIX}-${a.code.replace(".", "-")}/asg-${key}-${crypto.createHash("sha1").update(svg).digest("hex").slice(0, 8)}.svg`;
    const up = await db.storage.from("graph-images").upload(file, Buffer.from(svg), { upsert: true, contentType: "image/svg+xml" });
    if (up.error) throw up.error;
    urls[key] = db.storage.from("graph-images").getPublicUrl(file).data.publicUrl;
  }
  const description = a.lines.map((l) => l.replace(/\s*\[\[(\w+)\|([^\]]*)\]\]/g, (_, k, cap) => ` ![${cap}](${urls[k]})`)).join("\n");
  if (!row) {
    const r = await db.from("assignments").insert({ id, course_id: CID, title: a.title, description, published: true, tutor_enabled: true });
    if (r.error) throw r.error;
    console.log(`INSERTED ${a.title}`);
    continue;
  }
  fs.mkdirSync(path.resolve("scripts/mhf4u-fr-ch7/backup"), { recursive: true });
  fs.writeFileSync(path.resolve("scripts/mhf4u-fr-ch7/backup", `asg-${a.code}.${stamp}.json`), JSON.stringify(row, null, 1));
  const r = await db.from("assignments").update({ description, title: a.title }).eq("id", id);
  if (r.error) throw r.error;
  console.log(`updated ${a.title}`);
}
