// MTH1W-FR banque du chapitre 5 : questions faciles/moyennes (em5_*.mjs) et difficiles (h5_*.mjs) par sujet.
// Les lignes existantes (cours MTH1W-FR, même sujet, même difficulté) sont mises à jour sur place (les plus anciennes
// d'abord); les lignes manquantes sont insérées; rien n'est supprimé, donc une relance ne crée jamais de doublons.
// Les lignes long_answer ne sont jamais touchées.
//   node scripts/mth1w-fr-ch5/bank/publish.mjs 5_1 5_2       -> vérifications + rendu des figures dans bank/out/*.png (aucune écriture)
//   node scripts/mth1w-fr-ch5/bank/publish.mjs --all          -> idem pour les huit sujets, avec comparaison à l'anglais
//   node scripts/mth1w-fr-ch5/bank/publish.mjs --all --apply  -> téléverse aussi les figures (clés mth1w-fr-…) et écrit les lignes
import { createRequire } from "module";
import { pathToFileURL } from "url";
import path from "path";
import fs from "fs";
import crypto from "crypto";
import { sameExpr } from "../../../lib/answerCheck.ts";
import { CID_FR, FIG_PREFIX } from "../../mth1w-fr/common.mjs";

const katex = createRequire(import.meta.url)("katex");
const DIR = path.resolve("scripts/mth1w-fr-ch5/bank");
const EN = path.resolve("scripts/mth1w-ch5/bank");
const OUT = path.join(DIR, "out");
const APPLY = process.argv.includes("--apply");
let names = process.argv.slice(2).filter((a) => !a.startsWith("--"));
if (process.argv.includes("--all")) names = ["5_1", "5_2", "5_3", "5_4", "5_5", "5_6", "5_7", "5_8"];

let bad = 0;
const fail = (m) => { bad++; console.log("  FAIL:", m); };
function checkText(label, s) {
  if (typeof s !== "string") return;
  if ((s.match(/\$/g) || []).length % 2) fail(`${label}: nombre impair de $ dans "${s.slice(0, 60)}"`);
  if (/\\\$|textdollar/.test(s)) fail(`${label}: dollar échappé`);
  for (const m of s.matchAll(/\$([^$]+)\$/g)) { try { katex.renderToString(m[1], { throwOnError: true, strict: "ignore" }); } catch (e) { fail(`${label}: KaTeX "${m[1].slice(0, 50)}" ${e.message.slice(0, 50)}`); } }
}
/** same mathematics as English: kind, answer (letters may differ after shuffling, so compare the correct choice's position-free identity), tolerance, figure presence */
const mathKey = (q) => JSON.stringify({ kind: q.kind, answer: q.kind === "multiple_choice" ? null : q.kind === "fill_blank" ? null : q.answer, tolerance: q.tolerance ?? null, fig: !!q.fig, n: q.choices?.length ?? 0 });

fs.mkdirSync(OUT, { recursive: true });
let sharp = null;
try { sharp = (await import("sharp")).default; } catch { /* aperçus PNG facultatifs */ }
let db = null;
if (APPLY) {
  const { createClient } = await import("@supabase/supabase-js");
  const env = {};
  for (const line of fs.readFileSync(".env.local", "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
  db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });
}
const CID = CID_FR;
const lessonTitles = {};
for (let k = 1; k <= 8; k++) lessonTitles[`5_${k}`] = (await import(pathToFileURL(path.resolve(`scripts/mth1w-fr-ch5/l5_${k}.mjs`)).href)).TITLE;

const ONLY = (process.argv.find((a) => a.startsWith("--only=")) ?? "").slice(7);
for (const n of names) {
  const { TOPIC, Q } = await import(pathToFileURL(path.join(DIR, `h${n}.mjs`)).href);
  const em = await import(pathToFileURL(path.join(DIR, `em${n}.mjs`)).href);
  const enH = await import(pathToFileURL(path.join(EN, `h${n}.mjs`)).href), enEM = await import(pathToFileURL(path.join(EN, `em${n}.mjs`)).href);
  if (TOPIC !== lessonTitles[n]) fail(`${n}: TOPIC "${TOPIC}" ≠ titre de la leçon "${lessonTitles[n]}"`);
  const code = TOPIC.split(" ")[0];
  const sets = [["easy", em.E, enEM.E], ["medium", em.M, enEM.M], ["hard", Q, enH.Q]].filter(([d, s]) => s && (!ONLY || ONLY.split(",").includes(d)));
  const all = sets.flatMap(([, s]) => s);
  if (new Set(all.map((q) => q.prompt)).size !== all.length) fail(`${code}: énoncés en double entre les difficultés`);
  for (const [diff, S, ENS] of sets) {
    console.log(`\n${TOPIC} [${diff}]: ${S.length} questions (EN ${ENS.length}), ${S.filter((q) => q.fig).length} avec figure, types ${JSON.stringify(S.reduce((a, q) => ((a[q.kind] = (a[q.kind] || 0) + 1), a), {}))}`);
    if (S.length !== ENS.length) fail(`${diff}: ${S.length} questions, l'anglais en a ${ENS.length}`);
    if (S.length < 20 || S.length > 21) fail(`${diff}: il faut 20 (ou 21) questions, il y en a ${S.length}`);
    if (S.filter((q) => q.fig).length !== ENS.filter((q) => q.fig).length) fail(`${diff}: nombre de figures différent de l'anglais`);
    S.forEach((q, i) => {
      const L = `${diff} Q${i + 1}`;
      [q.prompt, q.feedback, ...(q.choices ?? []).map((c) => c.text)].forEach((s) => checkText(L, s));
      if (ENS[i] && mathKey(q) !== mathKey(ENS[i])) fail(`${L}: mathématique différente de l'anglais`);
      if (q.kind === "multiple_choice" && ENS[i]) { const en = ENS[i]; if (en.choices.findIndex((c) => c.id === en.answer) < 0) fail(`${L}: anglais invalide`); }
      if (!q.feedback) fail(`${L}: pas de rétroaction`);
      if (q.kind === "multiple_choice" && (q.choices.length !== 4 || new Set(q.choices.map((c) => c.text)).size !== 4 || !q.choices.some((c) => c.id === q.answer))) fail(`${L}: choix multiple invalide`);
      if (q.kind === "multiple_select" && (!q.answer.length || q.answer.some((a) => !q.choices.some((c) => c.id === a)))) fail(`${L}: sélection multiple invalide`);
      if (q.kind === "numeric" && !Number.isFinite(q.answer)) fail(`${L}: réponse numérique`);
      if (q.kind === "fill_blank" && (!Array.isArray(q.answer) || !q.answer.length)) fail(`${L}: réponses acceptées`);
      if (q.kind === "math_expr" && !sameExpr(q.answer, q.answer)) fail(`${L}: la réponse math_expr ne s'analyse pas : ${q.answer}`);
      if (q.fig) {
        fs.writeFileSync(path.join(OUT, `${code}_${diff}_q${i + 1}.svg`), q.fig);
        if (sharp && !APPLY) sharp(Buffer.from(q.fig)).png().toFile(path.join(OUT, `${code}_${diff}_q${i + 1}.png`)).catch((e) => fail(`${L}: rendu SVG ${e.message}`));
      }
    });
    if (!APPLY) continue;
    const { data: rows, error } = await db.from("bank_questions").select("id").eq("course_id", CID).eq("topic", TOPIC).eq("difficulty", diff).neq("kind", "long_answer").order("created_at").order("id");
    if (error) throw error;
    if (rows.length > S.length) { fail(`la base contient ${rows.length} lignes ${diff} pour ${TOPIC}; il en faut au moins autant — ignoré`); continue; }
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
console.log(bad ? `\n${bad} PROBLEM(S)` : "\nALL CHECKS PASSED");
process.exit(bad ? 1 : 0);
