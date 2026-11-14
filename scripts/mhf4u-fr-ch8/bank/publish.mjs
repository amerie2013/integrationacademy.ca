// MHF4U-FR chapitre 8 — banque de questions : ensembles faciles/moyens (em8_*.mjs) et difficiles (h8_*.mjs) par sujet.
// Les lignes existantes sont mises à jour sur place (les plus anciennes d'abord); les lignes manquantes sont insérées;
// rien n'est supprimé. Les lignes long_answer (written.mjs) ne sont jamais touchées. Charger APRÈS les leçons.
//   node scripts/mhf4u-fr-ch8/bank/publish.mjs --all          -> vérifie + rend les figures dans bank/out/*.png (aucune écriture)
//   node scripts/mhf4u-fr-ch8/bank/publish.mjs --all --apply  -> téléverse aussi les figures et écrit les lignes (cours MHF4U-FR)
// Vérifie aussi que chaque ensemble a le même nombre de questions, les mêmes types et le même nombre de figures que l'anglais.
import { createRequire } from "module";
import { pathToFileURL } from "url";
import path from "path";
import fs from "fs";
import crypto from "crypto";
import { sameExpr } from "../../../lib/answerCheck.ts";
import { CID_FR, FIG_PREFIX } from "../../mhf4u-fr/common.mjs";

const katex = createRequire(import.meta.url)("katex");
const DIR = path.resolve("scripts/mhf4u-fr-ch8/bank");
const EN = path.resolve("scripts/mhf4u-ch8/bank");
const OUT = path.join(DIR, "out");
const APPLY = process.argv.includes("--apply");
let names = process.argv.slice(2).filter((a) => !a.startsWith("--"));
if (process.argv.includes("--all")) names = ["8_1", "8_2", "8_3", "8_4", "8_5"];
const LESSON_TITLES = Object.fromEntries(await Promise.all([1, 2, 3, 4, 5].map(async (k) => [`8.${k}`, (await import(pathToFileURL(path.resolve(`scripts/mhf4u-fr-ch8/l8_${k}.mjs`)).href)).TITLE])));

let bad = 0;
const fail = (m) => { bad++; console.log("  FAIL:", m); };
function checkText(label, s) {
  if (typeof s !== "string") return;
  if ((s.match(/\$/g) || []).length % 2) fail(`${label}: odd number of $ in "${s.slice(0, 60)}"`);
  if (/\\\$|textdollar/.test(s)) fail(`${label}: escaped dollar`);
  if (/\bundefined\b|\bNaN\b/.test(s)) fail(`${label}: contains undefined/NaN`);
  for (const m of s.matchAll(/\$([^$]+)\$/g)) { try { katex.renderToString(m[1], { throwOnError: true, strict: "ignore" }); } catch (e) { fail(`${label}: KaTeX "${m[1].slice(0, 50)}" ${e.message.slice(0, 50)}`); } }
}
const sameAnswer = (a, b) => (typeof a === "number" && typeof b === "number" ? Math.abs(a - b) < 1e-9 : JSON.stringify(a) === JSON.stringify(b));

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

for (const n of names) {
  const { TOPIC, Q } = await import(pathToFileURL(path.join(DIR, `h${n}.mjs`)).href);
  const em = await import(pathToFileURL(path.join(DIR, `em${n}.mjs`)).href);
  const enH = await import(pathToFileURL(path.join(EN, `h${n}.mjs`)).href);
  const enEM = await import(pathToFileURL(path.join(EN, `em${n}.mjs`)).href);
  const code = TOPIC.split(" ")[0];
  if (TOPIC !== LESSON_TITLES[code]) fail(`${code}: TOPIC "${TOPIC}" ≠ lesson title "${LESSON_TITLES[code]}"`);
  const sets = [["easy", em.E, enEM.E], ["medium", em.M, enEM.M], ["hard", Q, enH.Q]];
  const all = sets.flatMap(([, s]) => s);
  if (new Set(all.map((q) => q.prompt)).size !== all.length) fail(`${code}: duplicate prompts across difficulties`);
  for (const [diff, S, ENS] of sets) {
    console.log(`\n${TOPIC} [${diff}]: ${S.length} questions (EN ${ENS.length}), ${S.filter((q) => q.fig).length} with figures (EN ${ENS.filter((q) => q.fig).length}), kinds ${JSON.stringify(S.reduce((a, q) => ((a[q.kind] = (a[q.kind] || 0) + 1), a), {}))}`);
    if (S.length < 20 || S.length > 21) fail(`${diff}: need 20 (or 21) questions, have ${S.length}`);
    if (S.length !== ENS.length) fail(`${diff}: ${S.length} questions but English has ${ENS.length}`);
    if (S.filter((q) => q.fig).length < (diff === "hard" ? 4 : 2)) fail(`${diff}: needs at least ${diff === "hard" ? 4 : 2} figures`);
    S.forEach((q, i) => {
      const L = `${diff} Q${i + 1}`;
      const e = ENS[i];
      // même question que l'anglais : même type, même réponse (pour les choix : même texte de la bonne réponse modulo la langue), même figure
      if (e) {
        if (q.kind !== e.kind) fail(`${L}: kind ${q.kind} ≠ EN ${e.kind}`);
        if (["numeric", "math_expr", "true_false"].includes(q.kind) && !sameAnswer(q.answer, e.answer)) fail(`${L}: answer ${JSON.stringify(q.answer)} ≠ EN ${JSON.stringify(e.answer)}`);
        if (q.kind === "multiple_select" && JSON.stringify(q.answer) !== JSON.stringify(e.answer)) fail(`${L}: multiple-select answer differs from EN`);
        if ((q.tolerance ?? 0) !== (e.tolerance ?? 0)) fail(`${L}: tolerance differs from EN`);
        if ((q.fig ?? null) !== (e.fig ?? null)) fail(`${L}: figure differs from EN`);
        if (q.kind === "multiple_choice") {
          const fr = q.choices.find((c) => c.id === q.answer).text, en = e.choices.find((c) => c.id === e.answer).text;
          const words = (s) => s.replace(/ (ou|or) /g, " | ").replace(/ (et|and) /g, " & ").replace(/ seulement| only/g, "");
          if (/\$/.test(en) && words(fr) !== words(en)) fail(`${L}: correct choice "${fr}" ≠ EN "${en}"`);
        }
      }
      [q.prompt, q.feedback, ...(q.choices ?? []).map((c) => c.text)].forEach((s) => checkText(L, s));
      if (!q.feedback) fail(`${L}: no feedback`);
      if (q.kind === "multiple_choice" && (q.choices.length !== 4 || new Set(q.choices.map((c) => c.text)).size !== 4 || !q.choices.some((c) => c.id === q.answer))) fail(`${L}: bad multiple choice`);
      if (q.kind === "multiple_select" && (!q.answer.length || q.answer.some((a) => !q.choices.some((c) => c.id === a)))) fail(`${L}: bad multiple select`);
      if (q.kind === "numeric" && !Number.isFinite(q.answer)) fail(`${L}: numeric answer`);
      if (q.kind === "fill_blank" && (!Array.isArray(q.answer) || !q.answer.length)) fail(`${L}: fill answers`);
      if (q.kind === "math_expr" && !sameExpr(q.answer, q.answer)) fail(`${L}: math_expr answer does not parse: ${q.answer}`);
      if (q.fig) {
        fs.writeFileSync(path.join(OUT, `${code}_${diff}_q${i + 1}.svg`), q.fig);
        if (sharp && !APPLY) sharp(Buffer.from(q.fig)).png().toFile(path.join(OUT, `${code}_${diff}_q${i + 1}.png`)).catch((err) => fail(`${L}: SVG render ${err.message}`));
      }
    });
    if (!APPLY) continue;
    const { data: rows, error } = await db.from("bank_questions").select("id").eq("course_id", CID).eq("topic", TOPIC).eq("difficulty", diff).neq("kind", "long_answer").order("created_at").order("id");
    if (error) throw error;
    if (rows.length > S.length) { fail(`DB has ${rows.length} ${diff} rows for ${TOPIC}; write at least that many questions — skipped`); continue; }
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
    console.log(`  updated ${Math.min(rows.length, S.length)}, inserted ${Math.max(0, S.length - rows.length)} ${diff} rows`);
  }
}
console.log(bad ? `\n${bad} PROBLEM(S)` : "\nALL CHECKS PASSED");
process.exit(bad ? 1 : 0);
