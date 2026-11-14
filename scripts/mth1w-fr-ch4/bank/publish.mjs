// Banque du chapitre 4 (français) : questions faciles/moyennes (em4_*.mjs) et difficiles (h4_*.mjs), 20 (ou 21) de chaque par sujet.
// Les figures (plans cartésiens) ont des étiquettes françaises; clés de stockage mth1w-fr-….
//   node scripts/mth1w-fr-ch4/bank/publish.mjs --all          -> vérifications + rendu des figures dans bank/out/*.png (aucune écriture)
//   node scripts/mth1w-fr-ch4/bank/publish.mjs --all --apply  -> téléverse aussi les figures et écrit les lignes (CID_FR)
// Les lignes existantes (même cours, sujet, difficulté; long_answer exclu) sont MISES À JOUR sur place dans l'ordre;
// les questions qui manquent sont INSÉRÉES — une nouvelle exécution ne crée jamais de doublons.
// Le dry run compare aussi chaque compte au compte de la banque anglaise EN DIRECT (lecture seule).
import { createRequire } from "module";
import { pathToFileURL } from "url";
import path from "path";
import fs from "fs";
import crypto from "crypto";
import { createClient } from "@supabase/supabase-js";
import { sameExpr } from "../../../lib/answerCheck.ts";
import { CID_FR, CID_EN, FIG_PREFIX } from "../../mth1w-fr/common.mjs";

const katex = createRequire(import.meta.url)("katex");
const DIR = path.resolve("scripts/mth1w-fr-ch4/bank");
const EN_DIR = path.resolve("scripts/mth1w-ch4/bank");
const OUT = path.join(DIR, "out");
const APPLY = process.argv.includes("--apply");
let names = process.argv.slice(2).filter((a) => !a.startsWith("--"));
if (process.argv.includes("--all")) names = ["4_1", "4_2", "4_3", "4_4", "4_5", "4_6", "4_7", "4_8", "4_9"];
if (!names.length) { console.log("Name the topics (e.g. 4_1) or pass --all."); process.exit(1); }

let bad = 0;
const fail = (m) => { bad++; console.log("  FAIL:", m); };
function checkText(label, s) {
  if (typeof s !== "string") return;
  if ((s.match(/\$/g) || []).length % 2) fail(`${label}: odd number of $ in "${s.slice(0, 60)}"`);
  if (/\\\$|textdollar/.test(s)) fail(`${label}: escaped dollar`);
  if (/\bundefined\b|\bNaN\b/.test(s)) fail(`${label}: undefined/NaN in "${s.slice(0, 60)}"`);
  for (const m of s.matchAll(/\$([^$]+)\$/g)) { try { katex.renderToString(m[1], { throwOnError: true, strict: "ignore" }); } catch (e) { fail(`${label}: KaTeX "${m[1].slice(0, 50)}" ${e.message.slice(0, 50)}`); } }
}

fs.mkdirSync(OUT, { recursive: true });
let sharp = null;
try { sharp = (await import("sharp")).default; } catch { /* aperçus PNG facultatifs */ }
const env = {};
for (const line of fs.readFileSync(".env.local", "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });
const course = (await db.from("courses").select("id, code").eq("id", CID_FR).single()).data;
if (!course || course.code !== "MTH1W-FR") throw new Error(`course ${CID_FR} is not MTH1W-FR`);

// French topic must equal the French lesson title
const LESSON_TITLE = {};
for (const n of names) LESSON_TITLE[n] = (await import(pathToFileURL(path.resolve(`scripts/mth1w-fr-ch4/l${n}.mjs`)).href)).TITLE;

const pending = [];
for (const n of names) {
  const { TOPIC, Q } = await import(pathToFileURL(path.join(DIR, `h${n}.mjs`)).href);
  if (TOPIC !== LESSON_TITLE[n]) fail(`${n}: TOPIC "${TOPIC}" ≠ lesson title "${LESSON_TITLE[n]}"`);
  const { TOPIC: EN_TOPIC } = await import(pathToFileURL(path.join(EN_DIR, `h${n}.mjs`)).href);
  const em = await import(pathToFileURL(path.join(DIR, `em${n}.mjs`)).href);
  const code = TOPIC.split(" ")[0];
  const sets = [["easy", em.E], ["medium", em.M], ["hard", Q]];
  const all = sets.flatMap(([, s]) => s);
  if (new Set(all.map((q) => q.prompt)).size !== all.length) fail(`${code}: duplicate prompts across difficulties`);
  for (const [diff, S] of sets) {
    const { count: enCount, error: ee } = await db.from("bank_questions").select("id", { count: "exact", head: true }).eq("course_id", CID_EN).eq("topic", EN_TOPIC).eq("difficulty", diff).neq("kind", "long_answer");
    if (ee) throw ee;
    console.log(`\n${TOPIC} [${diff}]: ${S.length} questions (EN live ${enCount}), ${S.filter((q) => q.fig).length} with figures, kinds ${JSON.stringify(S.reduce((a, q) => ((a[q.kind] = (a[q.kind] || 0) + 1), a), {}))}`);
    if (S.length < 20 || S.length > 21) fail(`${diff}: need 20 (or 21) questions, have ${S.length}`);
    if (S.length !== enCount) fail(`${diff}: ${S.length} questions but the live English bank has ${enCount}`);
    S.forEach((q, i) => {
      const L = `${diff} Q${i + 1}`;
      [q.prompt, q.feedback, ...(q.choices ?? []).map((c) => c.text)].forEach((s) => checkText(L, s));
      if (!q.feedback) fail(`${L}: no feedback`);
      if (q.kind === "multiple_choice" && (q.choices.length !== 4 || new Set(q.choices.map((c) => c.text)).size !== 4 || !q.choices.some((c) => c.id === q.answer))) fail(`${L}: bad multiple choice`);
      if (q.kind === "multiple_select" && (!q.answer.length || q.answer.some((a) => !q.choices.some((c) => c.id === a)))) fail(`${L}: bad multiple select`);
      if (q.kind === "numeric" && !Number.isFinite(q.answer)) fail(`${L}: numeric answer`);
      if (q.kind === "fill_blank" && (!Array.isArray(q.answer) || !q.answer.length)) fail(`${L}: fill answers`);
      if (q.kind === "math_expr" && !sameExpr(q.answer, q.answer)) fail(`${L}: math_expr answer does not parse: ${q.answer}`);
      if (q.fig) {
        fs.writeFileSync(path.join(OUT, `${code}_${diff}_q${i + 1}.svg`), q.fig);
        if (sharp && !APPLY) pending.push(sharp(Buffer.from(q.fig)).png().toFile(path.join(OUT, `${code}_${diff}_q${i + 1}.png`)).catch((e) => fail(`${L}: SVG render ${e.message}`)));
      }
    });
    if (!APPLY) continue;
    const { data: rows, error } = await db.from("bank_questions").select("id").eq("course_id", CID_FR).eq("topic", TOPIC).eq("difficulty", diff).neq("kind", "long_answer").order("id");
    if (error) throw error;
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
    console.log(`  updated ${Math.min(rows.length, S.length)}, inserted ${Math.max(0, S.length - rows.length)} ${diff} rows${rows.length > S.length ? ` (WARNING: ${rows.length - S.length} extra old rows left untouched)` : ""}`);
  }
}
await Promise.all(pending);
console.log(bad ? `\n${bad} PROBLEM(S)` : "\nALL CHECKS PASSED");
process.exit(bad ? 1 : 0);
