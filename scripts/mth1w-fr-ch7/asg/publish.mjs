// MTH1W-FR chapitre 7 — devoirs avec figures (SVG). Miroir de ../../mth1w-ch7/asg/publish.mjs, cours MTH1W-FR seulement.
//   node scripts/mth1w-fr-ch7/asg/publish.mjs           -> vérifications seulement (aucune écriture)
//   node scripts/mth1w-fr-ch7/asg/publish.mjs --apply   -> téléverse les figures + insère ou met à jour assignments
// Chaque devoir est repéré par son ID fixe asgId(7, k) : insertion s'il n'existe pas, sinon mise à jour du titre et
// de la description (l'ancienne ligne est sauvegardée dans ../backup/). Clés de stockage « mth1w-fr-7-k/asg-… ».
import { createRequire } from "module";
import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";
import crypto from "crypto";
import { ASSIGNMENTS } from "./assignments.mjs";
import { CID_FR, asgId, FIG_PREFIX } from "../../mth1w-fr/common.mjs";

const katex = createRequire(import.meta.url)("katex");
const APPLY = process.argv.includes("--apply");
const CID = CID_FR;
let bad = 0;
const fail = (m) => { bad++; console.log("  ÉCHEC :", m); };
const CATS = /^(Connaissance et compréhension|Habiletés de la pensée|Communication|Mise en application|Niveau difficile)$/;

for (const a of ASSIGNMENTS) {
  const cats = []; for (const l of a.lines) { if (CATS.test(l)) cats.push(0); else if (/^\d+\./.test(l)) cats[cats.length - 1]++; }
  if (JSON.stringify(cats) !== "[3,2,2,3]") fail(`${a.code}: répartition des catégories ${JSON.stringify(cats)}`);
  if (!a.title.startsWith(`Devoir ${a.code} — `)) fail(`${a.code}: titre "${a.title}"`);
  for (const l of a.lines) {
    for (const m of l.matchAll(/\\\(([\s\S]*?)\\\)/g)) { try { katex.renderToString(m[1], { throwOnError: true }); } catch (e) { fail(`${a.code}: KaTeX ${m[1].slice(0, 40)} ${e.message.slice(0, 40)}`); } }
    for (const m of l.matchAll(/\[\[(\w+)\|/g)) if (!a.figs[m[1]]) fail(`${a.code}: figure manquante ${m[1]}`);
    if (/\$/.test(l)) fail(`${a.code}: $ nu dans "${l.slice(0, 50)}"`);
    if (/\bundefined\b|\bNaN\b/.test(l)) fail(`${a.code}: "undefined"/NaN dans "${l.slice(0, 50)}"`);
  }
  console.log(`${a.title}  id ${asgId(7, a.k)}  ${a.lines.filter((l) => /^\d+\./.test(l)).length} questions, ${Object.keys(a.figs).length} figure(s)`);
}
console.log(`${ASSIGNMENTS.length} devoirs, ${ASSIGNMENTS.reduce((s, a) => s + Object.keys(a.figs).length, 0)} figures`);
if (bad || !APPLY) { console.log(bad ? `${bad} PROBLÈME(S)` : "TOUTES LES VÉRIFICATIONS SONT RÉUSSIES (aucun téléversement — utilise --apply)"); process.exit(bad ? 1 : 0); }

const env = {};
for (const line of fs.readFileSync(".env.local", "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });
const stamp = new Date().toISOString().replace(/[:.]/g, "-");
const BACKUP = path.resolve("scripts/mth1w-fr-ch7/backup");

for (const a of ASSIGNMENTS) {
  const id = asgId(7, a.k);
  const { data: row, error } = await db.from("assignments").select("id, title, description, course_id").eq("id", id).maybeSingle();
  if (error) throw error;
  if (row && row.course_id !== CID) throw new Error(`${id} appartient à un autre cours (${row.course_id})`);
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
    console.log(`INSÉRÉ ${a.title}`);
    continue;
  }
  fs.mkdirSync(BACKUP, { recursive: true });
  fs.writeFileSync(path.join(BACKUP, `asg-${a.code}.${stamp}.json`), JSON.stringify(row, null, 1));
  const r = await db.from("assignments").update({ title: a.title, description }).eq("id", id);
  if (r.error) throw r.error;
  console.log(`mis à jour ${a.title}`);
}
