// MTH1W-FR chapitre 4 — devoirs avec figures (plans cartésiens SVG, étiquettes françaises).
//   node scripts/mth1w-fr-ch4/asg/publish.mjs           -> vérification seulement (aucune écriture)
//   node scripts/mth1w-fr-ch4/asg/publish.mjs --apply   -> téléverse les figures (clés mth1w-fr-…) et insère/met à jour les devoirs
// Chaque devoir est repéré par l'ID fixe asgId(4, k) : insertion si absent, sinon mise à jour (copie de sauvegarde d'abord).
// Pas de mode --preview (les fichiers .lesson-preview masquent la base de données).
import { createRequire } from "module";
import fs from "fs";
import path from "path";
import crypto from "crypto";
import { ASSIGNMENTS } from "./assignments.mjs";
import { ASSIGNMENTS as EN } from "../../mth1w-ch4/asg/assignments.mjs";
import { CID_FR, asgId, FIG_PREFIX } from "../../mth1w-fr/common.mjs";

const katex = createRequire(import.meta.url)("katex");
const APPLY = process.argv.includes("--apply");
const CID = CID_FR;
let bad = 0;
const fail = (m) => { bad++; console.log("  FAIL:", m); };

if (ASSIGNMENTS.length !== EN.length) fail(`${ASSIGNMENTS.length} assignments, English has ${EN.length}`);
for (const a of ASSIGNMENTS) {
  const cats = []; for (const l of a.lines) { if (/^(Connaissance et compréhension|Habiletés de la pensée|Communication|Mise en application|Niveau difficile)$/.test(l)) cats.push(0); else if (/^\d+\./.test(l)) cats[cats.length - 1]++; }
  if (JSON.stringify(cats) !== "[3,2,2,3]") fail(`${a.code}: category split ${JSON.stringify(cats)}`);
  const en = EN.find((e) => e.code === a.code);
  if (!en) fail(`${a.code}: no English assignment`);
  else {
    if (en.lines.length !== a.lines.length) fail(`${a.code}: ${a.lines.length} lines, English has ${en.lines.length}`);
    if (Object.keys(en.figs).join() !== Object.keys(a.figs).join()) fail(`${a.code}: figure keys differ from English`);
  }
  // title must be "Devoir N.k — <French lesson title without the number>"
  const k = Number(a.code.split(".")[1]);
  const L = await import(new URL(`../l4_${k}.mjs`, import.meta.url).href);
  if (a.title !== `Devoir ${a.code} — ${L.TITLE.replace(/^\d+\.\d+ /, "")}`) fail(`${a.code}: title "${a.title}" does not match lesson "${L.TITLE}"`);
  for (const l of a.lines) {
    for (const m of l.matchAll(/\\\(([\s\S]*?)\\\)/g)) { try { katex.renderToString(m[1], { throwOnError: true }); } catch (e) { fail(`${a.code}: KaTeX ${m[1].slice(0, 40)} ${e.message.slice(0, 40)}`); } }
    for (const m of l.matchAll(/\[\[(\w+)\|/g)) if (!a.figs[m[1]]) fail(`${a.code}: missing figure ${m[1]}`);
    if (/\$/.test(l)) fail(`${a.code}: bare $ in "${l.slice(0, 50)}"`);
    const prose = l.replace(/\\\([\s\S]*?\\\)/g, " ");
    if (/\b(the|and|Find|Solve|Show|which|Explain|Predict|Write|Program for)\b/.test(prose)) fail(`${a.code}: English left? "${prose.slice(0, 60)}"`);
  }
}
console.log(`${ASSIGNMENTS.length} devoirs, ${ASSIGNMENTS.reduce((s, a) => s + Object.keys(a.figs).length, 0)} figures (anglais : ${EN.reduce((s, a) => s + Object.keys(a.figs).length, 0)})`);
for (const a of ASSIGNMENTS) console.log(`  ${a.title}  id ${asgId(4, Number(a.code.split(".")[1]))}`);
if (bad || !APPLY) { console.log(bad ? `${bad} PROBLEM(S)` : "ALL CHECKS PASSED (aucun téléversement — relancer avec --apply)"); process.exit(bad ? 1 : 0); }

const { createClient } = await import("@supabase/supabase-js");
const env = {};
for (const line of fs.readFileSync(".env.local", "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });
const stamp = new Date().toISOString().replace(/[:.]/g, "-");
const BK = path.resolve("scripts/mth1w-fr-ch4/backup");

for (const a of ASSIGNMENTS) {
  const id = asgId(4, Number(a.code.split(".")[1]));
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
  fs.mkdirSync(BK, { recursive: true });
  fs.writeFileSync(path.join(BK, `asg-${a.code}.${stamp}.json`), JSON.stringify(row, null, 1));
  const r = await db.from("assignments").update({ description, title: a.title }).eq("id", id);
  if (r.error) throw r.error;
  console.log(`updated ${a.title}`);
}
