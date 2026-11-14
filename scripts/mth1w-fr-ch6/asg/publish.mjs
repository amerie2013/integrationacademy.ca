// MTH1W-FR chapitre 6 — devoirs avec figures (miroir de ../../mth1w-ch6/asg/publish.mjs).
//   node scripts/mth1w-fr-ch6/asg/publish.mjs          -> vérifications seulement (aucune écriture)
//   node scripts/mth1w-fr-ch6/asg/publish.mjs --apply  -> téléverse les figures (graph-images, mth1w-fr-6-k/…) et insère ou
//                                                       met à jour la rangée assignments trouvée par l'ID fixe asgId(6, k)
// Pas de mode --preview (les fichiers .lesson-preview masqueraient la base de données).
import { createRequire } from "module";
import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";
import crypto from "crypto";
import { ASSIGNMENTS } from "./assignments.mjs";
import { ASSIGNMENTS as EN } from "../../mth1w-ch6/asg/assignments.mjs";
import { CID_FR, FIG_PREFIX, asgId } from "../../mth1w-fr/common.mjs";

const katex = createRequire(import.meta.url)("katex");
const APPLY = process.argv.includes("--apply");
let bad = 0;
const fail = (m) => { bad++; console.log("  ÉCHEC :", m); };
const CAT = /^(Connaissance et compréhension|Habiletés de la pensée|Communication|Mise en application|Niveau difficile)$/;
const ENGLISH = /\b(the|and|Find|Solve|Show|which|Explain|Evaluate|What|How many|State|Describe|times|between|Assignment|Knowledge|Thinking|Application|Hard Level|of|is|are|with)\b/;
const FIGWORDS = /\b(the|riders|hours|age|worked|earnings|time|from|home|homework|week|Mon|Tue|Wed)\b/;

ASSIGNMENTS.forEach((a, ai) => {
  const e = EN[ai];
  if (!e || e.code !== a.code) fail(`${a.code}: pas de devoir anglais correspondant`);
  if (a.id !== asgId(6, Number(a.code.split(".")[1]))) fail(`${a.code}: id ${a.id}`);
  if (!a.title.startsWith(`Devoir ${a.code} — `)) fail(`${a.code}: titre « ${a.title} »`);
  const cats = []; for (const l of a.lines) { if (CAT.test(l)) cats.push(0); else if (/^\d+\./.test(l)) cats[cats.length - 1]++; }
  const ecats = []; for (const l of e.lines) { if (/^(Knowledge|Thinking|Communication|Application)/.test(l)) ecats.push(0); else if (/^\d+\./.test(l)) ecats[ecats.length - 1]++; }
  if (JSON.stringify(cats) !== JSON.stringify(ecats)) fail(`${a.code}: répartition des catégories ${JSON.stringify(cats)} ≠ EN ${JSON.stringify(ecats)}`);
  if (a.lines.length !== e.lines.length) fail(`${a.code}: ${a.lines.length} lignes ≠ EN ${e.lines.length}`);
  if (JSON.stringify(Object.keys(a.figs)) !== JSON.stringify(Object.keys(e.figs))) fail(`${a.code}: figures ≠ EN`);
  a.lines.forEach((l, i) => {
    const el = e.lines[i] ?? "";
    for (const m of l.matchAll(/\\\(([\s\S]*?)\\\)/g)) { try { katex.renderToString(m[1], { throwOnError: true }); } catch (err) { fail(`${a.code}: KaTeX ${m[1].slice(0, 40)} ${err.message.slice(0, 40)}`); } }
    for (const m of l.matchAll(/\[\[(\w+)\|/g)) if (!a.figs[m[1]]) fail(`${a.code}: figure manquante ${m[1]}`);
    if (/\$/.test(l)) fail(`${a.code}: $ nu dans « ${l.slice(0, 50)} »`);
    const mathFr = [...l.matchAll(/\\\(([\s\S]*?)\\\)/g)].map((m) => m[1]).join("|"), mathEn = [...el.matchAll(/\\\(([\s\S]*?)\\\)/g)].map((m) => m[1]).join("|");
    if (mathFr !== mathEn) fail(`${a.code} ligne ${i}: maths différentes de l'anglais`);
    const m = l.replace(/\\\([\s\S]*?\\\)/g, " ").replace(/\[\[[^\]]*\]\]/g, " ").match(ENGLISH);
    if (m) fail(`${a.code} ligne ${i}: mot anglais « ${m[0]} »`);
  });
  for (const svg of Object.values(a.figs)) { const w = [...svg.matchAll(/<text[^>]*>([^<]*)<\/text>/g)].map((m) => m[1]).join(" | ").match(FIGWORDS); if (w) fail(`${a.code}: mot anglais dans une figure « ${w[0]} »`); }
});
console.log(`${ASSIGNMENTS.length} devoirs (EN ${EN.length}), ${ASSIGNMENTS.reduce((s, a) => s + Object.keys(a.figs).length, 0)} figures`);
for (const a of ASSIGNMENTS) console.log(`  ${a.id}  ${a.title}  (${a.lines.filter((l) => /^\d+\./.test(l)).length} questions)`);
if (bad || !APPLY) { console.log(bad ? `${bad} PROBLÈME(S)` : "ALL CHECKS PASSED (aucun téléversement — utilise --apply)"); process.exitCode = bad ? 1 : 0; }
else {
  const env = {};
  for (const line of fs.readFileSync(".env.local", "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
  const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });
  const stamp = new Date().toISOString().replace(/[:.]/g, "-");
  const BK = path.resolve("scripts/mth1w-fr-ch6/backup");
  fs.mkdirSync(BK, { recursive: true });
  for (const a of ASSIGNMENTS) {
    const { data: row, error } = await db.from("assignments").select("id, title, description, course_id").eq("id", a.id).maybeSingle();
    if (error) throw error;
    if (row && row.course_id !== CID_FR) throw new Error(`${a.id} appartient à un autre cours`);
    const urls = {};
    for (const [key, svg] of Object.entries(a.figs)) {
      const file = `${FIG_PREFIX}-${a.code.replace(".", "-")}/asg-${key}-${crypto.createHash("sha1").update(svg).digest("hex").slice(0, 8)}.svg`;
      const up = await db.storage.from("graph-images").upload(file, Buffer.from(svg), { upsert: true, contentType: "image/svg+xml" });
      if (up.error) throw up.error;
      urls[key] = db.storage.from("graph-images").getPublicUrl(file).data.publicUrl;
    }
    const description = a.lines.map((l) => l.replace(/\s*\[\[(\w+)\|([^\]]*)\]\]/g, (_, k, cap) => ` ![${cap}](${urls[k]})`)).join("\n");
    if (!row) {
      const r = await db.from("assignments").insert({ id: a.id, course_id: CID_FR, title: a.title, description, published: true, tutor_enabled: true });
      if (r.error) throw r.error;
      console.log(`INSÉRÉ ${a.title}`);
    } else {
      fs.writeFileSync(path.join(BK, `asg-${a.code}.${stamp}.json`), JSON.stringify(row, null, 1));
      const r = await db.from("assignments").update({ description, title: a.title }).eq("id", row.id);
      if (r.error) throw r.error;
      console.log(`mis à jour ${a.title}`);
    }
  }
}
