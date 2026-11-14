// MTH1W-FR chapitre 6 — banque de questions (faciles/moyennes em6_*.mjs, difficiles h6_*.mjs), miroir de la banque anglaise.
// Les rangées existantes (CID_FR, sujet, difficulté) sont mises à jour sur place (les plus anciennes d'abord); les
// rangées manquantes sont insérées; rien n'est supprimé, donc une relance ne crée jamais de doublons.
// Les rangées long_answer ne sont jamais touchées (voir ../written.mjs). Les figures vont dans graph-images sous
// mth1w-fr-6-k/… (jamais les fichiers anglais). La banque anglaise ne remplit pas lesson_id : la française non plus.
//   node scripts/mth1w-fr-ch6/bank/publish.mjs --all          -> vérifications + figures dans bank/out/*.png (aucune écriture)
//   node scripts/mth1w-fr-ch6/bank/publish.mjs --all --apply  -> téléverse aussi les figures et écrit les rangées
// Vérifications supplémentaires : chaque question est comparée à sa jumelle anglaise (type, réponse numérique,
// tolérance, vrai/faux, choix multiples, présence de figure), les nombres sont comparés au nombre de rangées
// anglaises EN DIRECT (lecture seule), et le sujet doit être identique au titre de la leçon française.
import { createRequire } from "module";
import { pathToFileURL } from "url";
import path from "path";
import fs from "fs";
import crypto from "crypto";
import { createClient } from "@supabase/supabase-js";
import { sameExpr } from "../../../lib/answerCheck.ts";
import { CID_FR, CID_EN, FIG_PREFIX } from "../../mth1w-fr/common.mjs";

const katex = createRequire(import.meta.url)("katex");
const DIR = path.resolve("scripts/mth1w-fr-ch6/bank");
const EN = path.resolve("scripts/mth1w-ch6/bank");
const OUT = path.join(DIR, "out");
const APPLY = process.argv.includes("--apply");
let names = process.argv.slice(2).filter((a) => !a.startsWith("--"));
if (process.argv.includes("--all")) names = ["6_1", "6_2", "6_3", "6_4"];
if (!names.length) { console.log("Nomme les sujets (ex. 6_1) ou passe --all."); process.exit(1); }

let bad = 0;
const fail = (m) => { bad++; console.log("  ÉCHEC :", m); };
const ENGLISH = /\b(the|and|Find|Solve|Show|which|Which|Step|Example|Answer|Explain|What|How many|Select|between|times|years|hours|about|true|false|is|are|of|with|from|graph|data|sample|students|survey)\b/;
function checkText(label, s) {
  if (typeof s !== "string") return;
  if ((s.match(/\$/g) || []).length % 2) fail(`${label}: nombre impair de $ dans « ${s.slice(0, 60)} »`);
  if (/\\\$|textdollar/.test(s)) fail(`${label}: dollar échappé`);
  for (const m of s.matchAll(/\$([^$]+)\$/g)) { try { katex.renderToString(m[1], { throwOnError: true, strict: "ignore" }); } catch (e) { fail(`${label}: KaTeX « ${m[1].slice(0, 50)} » ${e.message.slice(0, 50)}`); } }
  const prose = s.replace(/\$[^$]*\$/g, " ");
  const m = prose.match(ENGLISH); if (m) fail(`${label}: mot anglais « ${m[0]} » dans « ${prose.slice(0, 70)} »`);
  if (/\bundefined\b|NaN/.test(s)) fail(`${label}: undefined/NaN`);
}
const FIGWORDS = /\b(the|height|time|frequency|speed|stopping|price|sales|score|students|hours|years|from|home|riders|books|revenue|practice|minutes from)\b/i;

const env = {};
for (const line of fs.readFileSync(".env.local", "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });

fs.mkdirSync(OUT, { recursive: true });
let sharp = null;
try { sharp = (await import("sharp")).default; } catch { /* aperçus PNG facultatifs */ }

const pending = [];
for (const n of names) {
  const { TOPIC, Q } = await import(pathToFileURL(path.join(DIR, `h${n}.mjs`)).href);
  const em = await import(pathToFileURL(path.join(DIR, `em${n}.mjs`)).href);
  const enH = await import(pathToFileURL(path.join(EN, `h${n}.mjs`)).href);
  const enEM = await import(pathToFileURL(path.join(EN, `em${n}.mjs`)).href);
  const lesson = await import(pathToFileURL(path.resolve(`scripts/mth1w-fr-ch6/l${n}.mjs`)).href);
  if (TOPIC !== lesson.TITLE) fail(`sujet « ${TOPIC} » ≠ titre de la leçon « ${lesson.TITLE} »`);
  const code = TOPIC.split(" ")[0];
  const sets = [["easy", em.E, enEM.E], ["medium", em.M, enEM.M], ["hard", Q, enH.Q]];
  const all = sets.flatMap(([, s]) => s);
  if (new Set(all.map((q) => q.prompt)).size !== all.length) fail(`${code}: énoncés en double entre les difficultés`);
  for (const [diff, S, ES] of sets) {
    const { count: live, error: e0 } = await db.from("bank_questions").select("id", { count: "exact", head: true }).eq("course_id", CID_EN).eq("topic", enH.TOPIC).eq("difficulty", diff).neq("kind", "long_answer");
    if (e0) throw e0;
    console.log(`\n${TOPIC} [${diff}] : ${S.length} questions (EN source ${ES.length}, EN en direct ${live}), ${S.filter((q) => q.fig).length} avec figures (EN ${ES.filter((q) => q.fig).length}), types ${JSON.stringify(S.reduce((a, q) => ((a[q.kind] = (a[q.kind] || 0) + 1), a), {}))}`);
    if (S.length !== ES.length) fail(`${diff}: ${S.length} questions ≠ EN ${ES.length}`);
    if (S.length !== live) fail(`${diff}: ${S.length} questions ≠ EN en direct ${live}`);
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
        const enCorrect = e.choices.find((c) => c.id === e.answer).text, frCorrect = q.choices.find((c) => c.id === q.answer).text;
        if (/^\$[^$]*\$$/.test(enCorrect) && enCorrect !== frCorrect) fail(`${L}: bonne réponse ${frCorrect} ≠ EN ${enCorrect}`);
      }
      if (q.kind === "fill_blank" && (!Array.isArray(q.answer) || !q.answer.length)) fail(`${L}: réponses à compléter`);
      if (q.kind === "math_expr" && !sameExpr(q.answer, q.answer)) fail(`${L}: l'expression ne s'analyse pas : ${q.answer}`);
      if (q.fig) {
        const words = [...q.fig.matchAll(/<text[^>]*>([^<]*)<\/text>/g)].map((m) => m[1]).join(" | ");
        const w = words.match(FIGWORDS); if (w) fail(`${L}: mot anglais dans la figure « ${w[0]} »`);
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
if (!APPLY) console.log("Essai à blanc seulement — relance avec --apply pour écrire dans la base de données.");
process.exitCode = bad ? 1 : 0;
