// MCR3U-FR chapitre 2 — banque de questions (adaptée de ../../mcv4u-fr-ch3/bank/publish.mjs).
// b2_k.mjs exports TOPIC (= the French lesson title) and bank() (60 questions, 20/20/20, same order as English).
// The English source is bank() of ../../mcr3u-ch2/t2_k.mjs; it is compared with the LIVE English rows (read only):
// same prompts, answers, counts per difficulty and figures. Existing rows for (CID_FR, TOPIC, difficulty) are updated
// in place (oldest first), missing rows inserted — a rerun never duplicates. Every row gets lesson_id = lessonId(2, k).
//   node scripts/mcr3u-fr-ch2/bank/publish.mjs --all          -> checks + render figures to bank/out/*.png (no DB writes)
//   node scripts/mcr3u-fr-ch2/bank/publish.mjs --all --apply  -> also upload figures (keys mcr3u-fr-…) and write the rows
import { createRequire } from "module";
import { pathToFileURL } from "url";
import path from "path";
import fs from "fs";
import crypto from "crypto";
import { createClient } from "@supabase/supabase-js";
import { CID_FR, CID_EN, FIG_PREFIX, lessonId } from "../../mcr3u-fr/common.mjs";

const katex = createRequire(import.meta.url)("katex");
const DIR = path.resolve("scripts/mcr3u-fr-ch2/bank");
const OUT = path.join(DIR, "out");
const APPLY = process.argv.includes("--apply");
let names = process.argv.slice(2).filter((a) => !a.startsWith("--"));
if (process.argv.includes("--all")) names = ["2_1", "2_2", "2_3", "2_4", "2_5"];
if (!names.length) { console.log("Name the topics (e.g. 2_1) or pass --all."); process.exit(1); }

let bad = 0;
const fail = (m) => { bad++; console.log("  FAIL:", m); };
function checkText(label, s) {
  if (typeof s !== "string") return;
  if ((s.match(/\$/g) || []).length % 2) fail(`${label}: odd number of $ in "${s.slice(0, 60)}"`);
  if (/\\\$|textdollar/.test(s)) fail(`${label}: escaped dollar`);
  if (/\bundefined\b|\bNaN\b|\$\{/.test(s)) fail(`${label}: template bug in "${s.slice(0, 60)}"`);
  for (const m of s.matchAll(/\$([^$]+)\$/g)) { try { katex.renderToString(m[1], { throwOnError: true, strict: "ignore" }); } catch (e) { fail(`${label}: KaTeX "${m[1].slice(0, 50)}" ${e.message.slice(0, 50)}`); } }
}
const textsOf = (q) => [q.prompt, q.feedback, ...(Array.isArray(q.choices) ? q.choices.map((c) => (typeof c === "string" ? c : c.text)) : q.choices ? [...q.choices.left, ...q.choices.right] : [])];
/** the math parts of a text ($…$ segments, or the whole text when it has no letters) — must match English */
const mathOf = (t) => ((String(t).match(/\$[^$]+\$/g) || []).join(" ") || (/[a-zA-Zà-ÿ]{2}/.test(t) ? "" : t)).replace(/\s/g, "");
/** the $…$ segments of a prompt/feedback as a sorted list (a French sentence may reorder them) */
const mathSet = (t) => (String(t ?? "").match(/\$[^$]+\$/g) || []).map((m) => m.replace(/\s/g, "")).filter((m) => !/^\$[a-z]\$$/.test(m)).sort().join(" "); // a lone $x$ may vanish ("x-intercepts" → "abscisses à l'origine")
/** choices: $…$ spans compared as a set (lone letters ignored); a choice without any $ must match as plain math text */
const mathCmp = (t) => (/\$/.test(String(t)) ? mathSet(t) : mathOf(t));
/** an SVG without its text nodes (the words drawn inside a figure are translated) */
const shape = (svg) => String(svg ?? "").replace(/>[^<]*</g, "><");

fs.mkdirSync(OUT, { recursive: true });
let sharp = null;
try { sharp = (await import("sharp")).default; } catch { /* PNG previews optional */ }
const env = {};
for (const line of fs.readFileSync(".env.local", "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });
const CID = CID_FR; // MCR3U-FR — never the English course

for (const n of names) {
  const k = Number(n.split("_")[1]);
  const { TOPIC, bank } = await import(pathToFileURL(path.join(DIR, `b${n}.mjs`)).href);
  const LES = await import(pathToFileURL(path.resolve(`scripts/mcr3u-fr-ch2/l${n}.mjs`)).href);
  const ENM = await import(pathToFileURL(path.resolve(`scripts/mcr3u-ch2/t${n}.mjs`)).href);
  const code = TOPIC.split(" ")[0];
  if (TOPIC !== LES.TITLE) fail(`${code}: TOPIC "${TOPIC}" differs from the French lesson title "${LES.TITLE}"`);
  const all = bank(), en = ENM.bank();
  // LIVE English rows (read only): every English source question must be live, with the same answer and figure presence
  const { data: live, error: le } = await db.from("bank_questions").select("difficulty, kind, prompt, answer, image_url, lesson_id").eq("course_id", CID_EN).eq("topic", ENM.FULL_TITLE);
  if (le) throw le;
  if (live.length !== en.length) fail(`${code}: English source has ${en.length} questions but LIVE has ${live.length}`);
  for (const e of en) { const r = live.find((x) => x.prompt === e.prompt); if (!r) fail(`${code}: English source prompt not live: ${e.prompt.slice(0, 50)}`); else if (JSON.stringify(r.answer) !== JSON.stringify(e.answer) || r.kind !== e.kind || r.difficulty !== e.difficulty || !!r.image_url !== !!e.image) fail(`${code}: live row differs from source: ${e.prompt.slice(0, 50)}`); }
  const enHasLesson = live.some((r) => r.lesson_id);
  if (new Set(all.map((q) => q.prompt)).size !== all.length) fail(`${code}: duplicate prompts`);
  if (all.length !== en.length) fail(`${code}: ${all.length} questions, English has ${en.length}`);
  all.forEach((q, i) => {
    const e = en[i], L = `${code} Q${i + 1} [${q.difficulty}]`;
    if (!e) return;
    if (q.kind !== e.kind || q.difficulty !== e.difficulty) fail(`${L}: kind/difficulty ${q.kind}/${q.difficulty} vs English ${e.kind}/${e.difficulty}`);
    else if (["numeric", "true_false", "multiple_select", "ordering", "matching", "multiple_choice"].includes(q.kind) && JSON.stringify(q.answer) !== JSON.stringify(e.answer)) fail(`${L}: answer ${JSON.stringify(q.answer)} vs English ${JSON.stringify(e.answer)}`);
    else if (q.kind === "fill_blank" && !e.answer.every((a) => q.answer.includes(a))) fail(`${L}: fill answers drop an English spelling`);
    if (q.kind === "multiple_choice" && mathOf(q.choices.find((c) => c.id === q.answer).text) !== mathOf(e.choices.find((c) => c.id === e.answer).text)) fail(`${L}: correct choice math differs from English`);
    if (q.kind === "multiple_choice" || q.kind === "multiple_select") q.choices.forEach((c, j) => { if (mathCmp(c.text) !== mathCmp(e.choices[j].text)) fail(`${L}: choice ${c.id} math differs from English`); });
    if (q.kind === "ordering") q.choices.forEach((c, j) => { if (mathCmp(c) !== mathCmp(e.choices[j])) fail(`${L}: ordering item ${j + 1} math differs from English`); });
    if (q.kind === "matching") q.choices.left.forEach((c, j) => { if (mathCmp(c) !== mathCmp(e.choices.left[j]) || mathCmp(q.choices.right[j]) !== mathCmp(e.choices.right[j])) fail(`${L}: matching item ${j + 1} math differs from English`); });
    if (mathSet(q.prompt) !== mathSet(e.prompt)) fail(`${L}: prompt math differs from English\n     FR ${mathSet(q.prompt)}\n     EN ${mathSet(e.prompt)}`);
    if (mathSet(q.feedback) !== mathSet(e.feedback)) fail(`${L}: feedback math differs from English\n     FR ${mathSet(q.feedback)}\n     EN ${mathSet(e.feedback)}`);
    if ((q.tolerance ?? null) !== (e.tolerance ?? null)) fail(`${L}: tolerance`);
    if (!!q.image !== !!e.image) fail(`${L}: figure presence differs from English`);
    if (q.image && shape(q.image) !== shape(e.image)) fail(`${L}: figure differs from English (beyond its words)`);
    textsOf(q).forEach((s) => checkText(L, s));
    if (!q.feedback && e.feedback) fail(`${L}: no feedback`);
    if (q.kind === "multiple_choice" && (new Set(q.choices.map((c) => c.text)).size !== q.choices.length || !q.choices.some((c) => c.id === q.answer))) fail(`${L}: bad multiple choice`);
    if (q.kind === "multiple_select" && (!q.answer.length || q.answer.some((a) => !q.choices.some((c) => c.id === a)))) fail(`${L}: bad multiple select`);
    if (q.kind === "numeric" && !Number.isFinite(q.answer)) fail(`${L}: numeric answer`);
    if (q.kind === "fill_blank" && (!Array.isArray(q.answer) || !q.answer.length)) fail(`${L}: fill answers`);
    if (q.kind === "matching" && (q.answer.length !== q.choices.left.length || new Set(q.choices.right).size !== q.choices.right.length)) fail(`${L}: matching`);
    if (q.image) {
      const f = `${code}_q${String(i + 1).padStart(2, "0")}`;
      fs.writeFileSync(path.join(OUT, f + ".svg"), q.image);
      if (sharp && !APPLY) sharp(Buffer.from(q.image)).png().toFile(path.join(OUT, f + ".png")).catch((err) => fail(`${L}: SVG render ${err.message}`));
    }
  });
  for (const diff of ["easy", "medium", "hard"]) {
    const S = all.filter((q) => q.difficulty === diff), E = en.filter((q) => q.difficulty === diff), Lv = live.filter((q) => q.difficulty === diff);
    console.log(`${TOPIC} [${diff}]: ${S.length} questions (EN source ${E.length}, LIVE ${Lv.length}), figures ${S.filter((q) => q.image).length} (EN ${E.filter((q) => q.image).length}, LIVE ${Lv.filter((q) => q.image_url).length}), kinds ${JSON.stringify(S.reduce((a, q) => ((a[q.kind] = (a[q.kind] || 0) + 1), a), {}))}`);
    if (S.length !== 20 || S.length !== E.length || S.length !== Lv.length) fail(`${code} ${diff}: count ${S.length} vs English ${E.length} / LIVE ${Lv.length}`);
    if (S.filter((q) => q.image).length !== Lv.filter((q) => q.image_url).length) fail(`${code} ${diff}: figure count differs from LIVE`);
  }
  if (!APPLY || bad) continue;
  const lesson_id = enHasLesson ? lessonId(2, k) : null;
  for (const diff of ["easy", "medium", "hard"]) {
    const S = all.map((q, i) => [q, i]).filter(([q]) => q.difficulty === diff);
    const { data: rows, error } = await db.from("bank_questions").select("id").eq("course_id", CID).eq("topic", TOPIC).eq("difficulty", diff).neq("kind", "long_answer").order("created_at").order("id");
    if (error) throw error;
    if (rows.length > S.length) { fail(`DB has ${rows.length} ${diff} rows for ${TOPIC}; write at least that many questions — skipped`); continue; }
    for (let j = 0; j < S.length; j++) {
      const [q, i] = S[j];
      let image_url = null;
      if (q.image) {
        const key = `${FIG_PREFIX}-${code.replace(".", "-")}/q${String(i + 1).padStart(2, "0")}-${crypto.createHash("sha1").update(q.image).digest("hex").slice(0, 8)}.svg`;
        const up = await db.storage.from("graph-images").upload(key, Buffer.from(q.image), { upsert: true, contentType: "image/svg+xml" });
        if (up.error) throw up.error;
        image_url = db.storage.from("graph-images").getPublicUrl(key).data.publicUrl;
      }
      const fields = { kind: q.kind, prompt: q.prompt, choices: q.choices ?? null, answer: q.answer ?? null, tolerance: q.tolerance ?? null, feedback: q.feedback ?? null, image_url, points: q.points ?? 1, lesson_id };
      const r = j < rows.length
        ? await db.from("bank_questions").update(fields).eq("id", rows[j].id)
        : await db.from("bank_questions").insert({ ...fields, course_id: CID, topic: TOPIC, difficulty: diff });
      if (r.error) throw r.error;
    }
    console.log(`  updated ${Math.min(rows.length, S.length)}, inserted ${Math.max(0, S.length - rows.length)} ${diff} rows`);
  }
}
console.log(bad ? `\n${bad} PROBLEM(S)` : APPLY ? "\nALL CHECKS PASSED — written" : "\nALL CHECKS PASSED (dry run — use --apply)");
process.exit(bad ? 1 : 0);
