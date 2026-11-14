// MCV4U-FR chapitre 5 — banque de questions (faciles/moyennes em5_*.mjs, difficiles h5_*.mjs), miroir de la banque anglaise.
// Les rangées existantes (CID_FR, sujet, difficulté) sont mises à jour sur place (les plus anciennes d'abord); les
// rangées manquantes sont insérées; rien n'est supprimé, donc une relance ne crée jamais de doublons.
// Les rangées long_answer ne sont jamais touchées. Les figures vont dans graph-images sous mcv4u-fr-5-k/… (jamais les
// fichiers anglais).
//   node scripts/mcv4u-fr-ch5/bank/publish.mjs --all          -> vérifications + figures dans bank/out/*.png (aucune écriture)
//   node scripts/mcv4u-fr-ch5/bank/publish.mjs --all --apply  -> téléverse aussi les figures et écrit les rangées
// Vérifications supplémentaires : chaque question est comparée à sa jumelle anglaise (type, réponse numérique,
// tolérance, vrai/faux, choix multiples, présence de figure) et le sujet doit être identique au titre de la leçon.
import { createRequire } from "module";
import { pathToFileURL } from "url";
import path from "path";
import fs from "fs";
import crypto from "crypto";
import { sameExpr } from "../../../lib/answerCheck.ts";
import { CID_FR, FIG_PREFIX } from "../../mcv4u-fr/common.mjs";

const katex = createRequire(import.meta.url)("katex");
const DIR = path.resolve("scripts/mcv4u-fr-ch5/bank");
const EN = path.resolve("scripts/mcv4u-ch5/bank");
const OUT = path.join(DIR, "out");
const APPLY = process.argv.includes("--apply");
let names = process.argv.slice(2).filter((a) => !a.startsWith("--"));
if (process.argv.includes("--all")) names = ["5_1", "5_2", "5_3", "5_4", "5_5"];

let bad = 0;
const fail = (m) => { bad++; console.log("  ÉCHEC :", m); };
const ENGLISH = /\b(the|and|Find|Solve|Show|which|Which|Step|Example|Answer|Explain|graph of|Evaluate|Select|between|times|years|hours|about|true|false|is|are|of)\b/;
function checkText(label, s) {
  if (typeof s !== "string") return;
  if ((s.match(/\$/g) || []).length % 2) fail(`${label}: nombre impair de $ dans « ${s.slice(0, 60)} »`);
  if (/\\\$|textdollar/.test(s)) fail(`${label}: dollar échappé`);
  for (const m of s.matchAll(/\$([^$]+)\$/g)) { try { katex.renderToString(m[1], { throwOnError: true, strict: "ignore" }); } catch (e) { fail(`${label}: KaTeX « ${m[1].slice(0, 50)} » ${e.message.slice(0, 50)}`); } }
  const prose = s.replace(/\$[^$]*\$/g, " ");
  const m = prose.match(ENGLISH); if (m) fail(`${label}: mot anglais « ${m[0] } » dans « ${prose.slice(0, 70)} »`);
}

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

const pending = [];
for (const n of names) {
  const { TOPIC, Q } = await import(pathToFileURL(path.join(DIR, `h${n}.mjs`)).href);
  const em = await import(pathToFileURL(path.join(DIR, `em${n}.mjs`)).href);
  const enH = await import(pathToFileURL(path.join(EN, `h${n}.mjs`)).href);
  const enEM = await import(pathToFileURL(path.join(EN, `em${n}.mjs`)).href);
  const lesson = await import(pathToFileURL(path.resolve(`scripts/mcv4u-fr-ch5/l${n}.mjs`)).href);
  if (TOPIC !== lesson.TITLE) fail(`sujet « ${TOPIC} » ≠ titre de la leçon « ${lesson.TITLE} »`);
  const code = TOPIC.split(" ")[0];
  const sets = [["easy", em.E, enEM.E], ["medium", em.M, enEM.M], ["hard", Q, enH.Q]];
  const all = sets.flatMap(([, s]) => s);
  if (new Set(all.map((q) => q.prompt)).size !== all.length) fail(`${code}: énoncés en double entre les difficultés`);
  for (const [diff, S, ES] of sets) {
    console.log(`\n${TOPIC} [${diff}] : ${S.length} questions (EN ${ES.length}), ${S.filter((q) => q.fig).length} avec figures (EN ${ES.filter((q) => q.fig).length}), types ${JSON.stringify(S.reduce((a, q) => ((a[q.kind] = (a[q.kind] || 0) + 1), a), {}))}`);
    if (S.length !== ES.length) fail(`${diff}: ${S.length} questions ≠ EN ${ES.length}`);
    if (S.length < 20 || S.length > 21) fail(`${diff}: il faut 20 (ou 21) questions, il y en a ${S.length}`);
    if (S.filter((q) => q.fig).length < (diff === "hard" ? 4 : 2)) fail(`${diff}: il faut au moins ${diff === "hard" ? 4 : 2} figures`);
    S.forEach((q, i) => {
      const L = `${diff} Q${i + 1}`, e = ES[i];
      [q.prompt, q.feedback, ...(q.choices ?? []).map((c) => c.text)].forEach((s) => checkText(L, s));
      if (!q.feedback) fail(`${L}: pas de rétroaction`);
      if (q.kind !== e.kind) fail(`${L}: type ${q.kind} ≠ EN ${e.kind}`);
      if (!!q.fig !== !!e.fig) fail(`${L}: figure présente/absente différente de l'anglais`);
      if (q.kind === "numeric" && (q.answer !== e.answer || (q.tolerance ?? 0) !== (e.tolerance ?? 0))) fail(`${L}: réponse ${q.answer}±${q.tolerance} ≠ EN ${e.answer}±${e.tolerance}`);
      if (q.kind === "true_false" && q.answer !== e.answer) fail(`${L}: vrai/faux ≠ EN`);
      if (q.kind === "multiple_select" && (JSON.stringify(q.answer) !== JSON.stringify(e.answer) || q.choices.length !== e.choices.length)) fail(`${L}: choix multiples ≠ EN`);
      if (q.kind === "multiple_choice" && (q.choices.length !== 4 || new Set(q.choices.map((c) => c.text)).size !== 4 || !q.choices.some((c) => c.id === q.answer))) fail(`${L}: mauvais choix multiple`);
      if (q.kind === "multiple_choice") {
        // la bonne réponse anglaise et française doivent occuper la même place dans la liste écrite (même mathématique)
        const enCorrect = e.choices.find((c) => c.id === e.answer).text, frCorrect = q.choices.find((c) => c.id === q.answer).text;
        if (/^\$[^$]*\$$/.test(enCorrect) && enCorrect !== frCorrect && !/[cd]=/.test(enCorrect)) fail(`${L}: bonne réponse ${frCorrect} ≠ EN ${enCorrect}`);
      }
      if (q.kind === "fill_blank" && (!Array.isArray(q.answer) || !q.answer.length)) fail(`${L}: réponses à compléter`);
      if (q.kind === "math_expr" && !sameExpr(q.answer, q.answer)) fail(`${L}: l'expression ne s'analyse pas : ${q.answer}`);
      if (q.fig) {
        if (/>[^<]*\b(the|slope|years|hours|after|death|thousand|dollars|steepest|inflection|halved|doubled)\b[^<]*</i.test(q.fig)) fail(`${L}: mot anglais dans la figure`);
        fs.writeFileSync(path.join(OUT, `${code}_${diff}_q${i + 1}.svg`), q.fig);
        if (sharp && !APPLY) pending.push(sharp(Buffer.from(q.fig)).png().toFile(path.join(OUT, `${code}_${diff}_q${i + 1}.png`)).catch((err) => fail(`${L}: rendu SVG ${err.message}`)));
      }
    });
    if (!APPLY || bad) continue;
    const { data: rows, error } = await db.from("bank_questions").select("id").eq("course_id", CID_FR).eq("topic", TOPIC).eq("difficulty", diff).neq("kind", "long_answer").order("created_at").order("id");
    if (error) throw error;
    if (rows.length > S.length) { fail(`la BD contient ${rows.length} rangées ${diff} pour ${TOPIC}; ignoré`); continue; }
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
        : await db.from("bank_questions").insert({ ...fields, course_id: CID_FR, topic: TOPIC, difficulty: diff });
      if (r.error) throw r.error;
    }
    console.log(`  ${Math.min(rows.length, S.length)} mises à jour, ${Math.max(0, S.length - rows.length)} insérées (${diff})`);
  }
}
await Promise.all(pending);
console.log(bad ? `\n${bad} PROBLÈME(S)` : "\nALL CHECKS PASSED (toutes les vérifications sont réussies)");
process.exitCode = bad ? 1 : 0;
