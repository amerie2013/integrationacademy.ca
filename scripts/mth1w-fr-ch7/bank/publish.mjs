// MTH1W-FR chapitre 7 — banque de questions : ensembles faciles/moyens (em7_*.mjs) et difficiles (h7_*.mjs) par sujet.
// Miroir de ../../mth1w-ch7/bank/publish.mjs, écrit seulement dans le cours MTH1W-FR (CID_FR).
// Les lignes existantes (même cours, même topic, même difficulté, kind ≠ long_answer) sont mises à jour sur place
// (les plus anciennes d'abord); les lignes manquantes sont insérées; rien n'est supprimé — une relance ne crée donc
// jamais de doublons. Les lignes long_answer (written.mjs) ne sont jamais touchées.
//   node scripts/mth1w-fr-ch7/bank/publish.mjs 7_1 7_2      -> vérifications + figures dans bank/out/*.png (aucune écriture)
//   node scripts/mth1w-fr-ch7/bank/publish.mjs --all        -> idem pour 7.1–7.4, et compare avec la banque anglaise EN LIGNE
//   node scripts/mth1w-fr-ch7/bank/publish.mjs --all --apply -> téléverse aussi les figures et écrit les lignes
// topic = titre de la leçon française (identique à TITLE); clés de stockage « mth1w-fr-7-k/… ».
import { createRequire } from "module";
import { pathToFileURL } from "url";
import path from "path";
import fs from "fs";
import crypto from "crypto";
import { createClient } from "@supabase/supabase-js";
import { sameExpr } from "../../../lib/answerCheck.ts";
import { CID_FR, CID_EN, FIG_PREFIX } from "../../mth1w-fr/common.mjs";

const katex = createRequire(import.meta.url)("katex");
const DIR = path.resolve("scripts/mth1w-fr-ch7/bank");
const OUT = path.join(DIR, "out");
const APPLY = process.argv.includes("--apply");
let names = process.argv.slice(2).filter((a) => !a.startsWith("--"));
if (process.argv.includes("--all")) names = ["7_1", "7_2", "7_3", "7_4"];
if (!names.length) { console.log("Nomme les sujets (p. ex. 7_1) ou passe --all."); process.exit(1); }

let bad = 0;
const fail = (m) => { bad++; console.log("  ÉCHEC :", m); };
function checkText(label, s) {
  if (typeof s !== "string") return;
  if ((s.match(/\$/g) || []).length % 2) fail(`${label}: nombre impair de $ dans "${s.slice(0, 60)}"`);
  if (/\\\$|textdollar/.test(s)) fail(`${label}: dollar échappé`);
  if (/\bundefined\b|\bNaN\b/.test(s)) fail(`${label}: "undefined"/NaN dans le texte`);
  for (const m of s.matchAll(/\$([^$]+)\$/g)) { try { katex.renderToString(m[1], { throwOnError: true, strict: "ignore" }); } catch (e) { fail(`${label}: KaTeX "${m[1].slice(0, 50)}" ${e.message.slice(0, 50)}`); } }
}

fs.mkdirSync(OUT, { recursive: true });
let sharp = null;
try { sharp = (await import("sharp")).default; } catch { /* aperçus PNG facultatifs */ }
const env = {};
for (const line of fs.readFileSync(".env.local", "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });
const CID = CID_FR;

// banque anglaise EN LIGNE (lecture seule) : nombre de questions et de figures par sujet et difficulté
const { data: enRows, error: enErr } = await db.from("bank_questions").select("topic, difficulty, kind, image_url").eq("course_id", CID_EN).like("topic", "7.%").neq("kind", "long_answer");
if (enErr) throw enErr;
const enCount = (code, d) => enRows.filter((r) => r.topic.startsWith(code + " ") && r.difficulty === d);

const ONLY = (process.argv.find((a) => a.startsWith("--only=")) ?? "").slice(7); // p. ex. --only=easy,medium
for (const n of names) {
  const { TOPIC, Q } = await import(pathToFileURL(path.join(DIR, `h${n}.mjs`)).href);
  const emFile = path.join(DIR, `em${n}.mjs`);
  const em = fs.existsSync(emFile) ? await import(pathToFileURL(emFile).href) : {};
  const code = TOPIC.split(" ")[0];
  const sets = [["easy", em.E], ["medium", em.M], ["hard", Q]].filter(([d, s]) => s && (!ONLY || ONLY.split(",").includes(d)));
  const all = sets.flatMap(([, s]) => s);
  if (new Set(all.map((q) => q.prompt)).size !== all.length) fail(`${code}: énoncés en double entre les difficultés`);
  for (const [diff, S] of sets) {
    const en = enCount(code, diff);
    const figs = S.filter((q) => q.fig).length, enFigs = en.filter((r) => r.image_url).length;
    console.log(`\n${TOPIC} [${diff}]: ${S.length} questions (EN en ligne ${en.length}), ${figs} avec figures (EN ${enFigs}), types ${JSON.stringify(S.reduce((a, q) => ((a[q.kind] = (a[q.kind] || 0) + 1), a), {}))}`);
    if (S.length < 20 || S.length > 21) fail(`${diff}: il faut 20 (ou 21) questions, il y en a ${S.length}`);
    if (S.length !== en.length) fail(`${diff}: ${S.length} questions FR contre ${en.length} EN en ligne`);
    if (figs !== enFigs) fail(`${diff}: ${figs} figures FR contre ${enFigs} EN en ligne`);
    S.forEach((q, i) => {
      const L = `${diff} Q${i + 1}`;
      [q.prompt, q.feedback, ...(q.choices ?? []).map((c) => c.text)].forEach((s) => checkText(L, s));
      if (!q.feedback) fail(`${L}: aucune rétroaction`);
      if (q.kind === "multiple_choice" && (q.choices.length !== 4 || new Set(q.choices.map((c) => c.text)).size !== 4 || !q.choices.some((c) => c.id === q.answer))) fail(`${L}: choix multiple invalide`);
      if (q.kind === "multiple_select" && (!q.answer.length || q.answer.some((a) => !q.choices.some((c) => c.id === a)))) fail(`${L}: sélection multiple invalide`);
      if (q.kind === "numeric" && !Number.isFinite(q.answer)) fail(`${L}: réponse numérique`);
      if (q.kind === "fill_blank" && (!Array.isArray(q.answer) || !q.answer.length)) fail(`${L}: réponses à compléter`);
      if (q.kind === "math_expr" && !sameExpr(q.answer, q.answer)) fail(`${L}: la réponse math_expr ne s'analyse pas : ${q.answer}`);
      if (q.fig) {
        fs.writeFileSync(path.join(OUT, `${code}_${diff}_q${i + 1}.svg`), q.fig);
        if (sharp && !APPLY) sharp(Buffer.from(q.fig)).png().toFile(path.join(OUT, `${code}_${diff}_q${i + 1}.png`)).catch((e) => fail(`${L}: rendu SVG ${e.message}`));
      }
    });
    if (!APPLY) continue;
    const { data: rows, error } = await db.from("bank_questions").select("id").eq("course_id", CID).eq("topic", TOPIC).eq("difficulty", diff).neq("kind", "long_answer").order("created_at").order("id");
    if (error) throw error;
    if (rows.length > S.length) { fail(`la BD contient ${rows.length} lignes ${diff} pour ${TOPIC}; il faut au moins autant de questions — ignoré`); continue; }
    for (let i = 0; i < S.length; i++) {
      const q = S[i];
      let image_url = null;
      if (q.fig) {
        const key = `${FIG_PREFIX}-${code.replace(".", "-")}/${diff}-q${i + 1}-${crypto.createHash("sha1").update(q.fig).digest("hex").slice(0, 8)}.svg`;
        const up = await db.storage.from("graph-images").upload(key, Buffer.from(q.fig), { upsert: true, contentType: "image/svg+xml" });
        if (up.error) throw up.error;
        image_url = db.storage.from("graph-images").getPublicUrl(key).data.publicUrl;
      }
      const fields = { kind: q.kind, prompt: q.prompt, choices: q.choices ?? null, answer: q.answer, tolerance: q.tolerance ?? null, feedback: q.feedback, image_url, points: 1 };
      const r = i < rows.length
        ? await db.from("bank_questions").update(fields).eq("id", rows[i].id)
        : await db.from("bank_questions").insert({ ...fields, course_id: CID, topic: TOPIC, difficulty: diff });
      if (r.error) throw r.error;
    }
    console.log(`  ${Math.min(rows.length, S.length)} mises à jour, ${Math.max(0, S.length - rows.length)} insertions (${diff})`);
  }
}
if (!APPLY) await new Promise((r) => setTimeout(r, 1500)); // laisser finir les rendus PNG
console.log(bad ? `\n${bad} PROBLÈME(S)` : "\nTOUTES LES VÉRIFICATIONS SONT RÉUSSIES");
if (!APPLY && !bad) console.log("Dry run seulement — relance avec --apply pour écrire dans le cours MTH1W-FR.");
process.exit(bad ? 1 : 0);
