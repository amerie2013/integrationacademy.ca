// Chapitre 2 (MTH1W-FR) — banque de questions : faciles/moyennes (em2_*.mjs) et difficiles (h2_*.mjs), 20 chacune par sujet.
// Mirror of ../../mth1w-ch2/bank/publish.mjs for the French course.
//   node scripts/mth1w-fr-ch2/bank/publish.mjs --all          -> checks + render figures to bank/out/ (no DB writes)
//   node scripts/mth1w-fr-ch2/bank/publish.mjs --all --apply  -> also upload figures (graph-images/mth1w-fr-2-k/...) and write rows
// Checks: KaTeX, choices, answers; and every French question matches its English twin (kind, answer, tolerance,
// correct choice text maps to the same position, same math, same figure presence) and the live English counts.
// Rows: course CID_FR, topic = French lesson title, lesson_id = lessonId(2, k). Existing French rows of the same
// topic/difficulty (kind ≠ long_answer — those belong to written.mjs) are UPDATED IN PLACE, otherwise INSERTED,
// so a rerun never duplicates rows.
import { createRequire } from "module";
import { pathToFileURL } from "url";
import path from "path";
import fs from "fs";
import crypto from "crypto";
import { sameExpr } from "../../../lib/answerCheck.ts";
import { createClient } from "@supabase/supabase-js";
import { CID_FR, CID_EN, lessonId, FIG_PREFIX } from "../../mth1w-fr/common.mjs";

const katex = createRequire(import.meta.url)("katex");
const DIR = path.resolve("scripts/mth1w-fr-ch2/bank");
const EN_DIR = path.resolve("scripts/mth1w-ch2/bank");
const OUT = path.join(DIR, "out");
const APPLY = process.argv.includes("--apply");
let names = process.argv.slice(2).filter((a) => !a.startsWith("--"));
if (process.argv.includes("--all")) names = ["2_1", "2_2", "2_3", "2_4", "2_5", "2_6"];
if (!names.length) { console.log("Name the topics (e.g. 2_1) or pass --all."); process.exit(1); }

let bad = 0;
const fail = (m) => { bad++; console.log("  FAIL:", m); };
function checkText(label, s) {
  if (typeof s !== "string") return;
  if ((s.replace(/\\\$/g, "").match(/\$/g) || []).length % 2) fail(`${label}: odd number of $ in "${s.slice(0, 60)}"`);
  if (/textdollar/.test(s)) fail(`${label}: escaped dollar`);
  if (/\bundefined\b/.test(s)) fail(`${label}: "undefined" in text`);
  for (const m of s.replace(/\\\$/g, "").matchAll(/\$([^$]+)\$/g)) { try { katex.renderToString(m[1], { throwOnError: true, strict: "ignore" }); } catch (e) { fail(`${label}: KaTeX "${m[1].slice(0, 50)}" ${e.message.slice(0, 50)}`); } }
}
const mathOf = (s) => [...String(s ?? "").matchAll(/\$([^$]+)\$/g)].map((m) => m[1].replace(/\s+/g, "")).filter((x) => x.length > 1).sort().join(" | ");
const numsOf = (s) => (String(s ?? "").match(/\d+(?:\.\d+)?/g) ?? []).join(",");

const env = {};
for (const line of fs.readFileSync(".env.local", "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });

fs.mkdirSync(OUT, { recursive: true });
let sharp = null;
try { sharp = (await import("sharp")).default; } catch { /* PNG previews optional */ }

const ONLY = (process.argv.find((a) => a.startsWith("--only=")) ?? "").slice(7);
const summary = [];
for (const n of names) {
  const k = Number(n.split("_")[1]);
  const { TOPIC, Q } = await import(pathToFileURL(path.join(DIR, `h${n}.mjs`)).href);
  const em = await import(pathToFileURL(path.join(DIR, `em${n}.mjs`)).href);
  const EH = await import(pathToFileURL(path.join(EN_DIR, `h${n}.mjs`)).href);
  const EE = await import(pathToFileURL(path.join(EN_DIR, `em${n}.mjs`)).href);
  const LESSON = (await import(pathToFileURL(path.resolve(`scripts/mth1w-fr-ch2/l${n}.mjs`)).href)).TITLE;
  if (TOPIC !== LESSON) fail(`${n}: TOPIC "${TOPIC}" is not the lesson title "${LESSON}"`);
  const code = TOPIC.split(" ")[0];
  // live English counts (non-written rows) for this topic
  const { data: enRows, error: enErr } = await db.from("bank_questions").select("difficulty, kind, image_url").eq("course_id", CID_EN).eq("topic", EH.TOPIC);
  if (enErr) throw enErr;
  const sets = [["easy", em.E, EE.E], ["medium", em.M, EE.M], ["hard", Q, EH.Q]].filter(([d]) => !ONLY || ONLY.split(",").includes(d));
  const all = sets.flatMap(([, s]) => s);
  if (new Set(all.map((q) => q.prompt)).size !== all.length) fail(`${code}: duplicate prompts across difficulties`);
  for (const [diff, S, EN] of sets) {
    const live = enRows.filter((r) => r.difficulty === diff && r.kind !== "long_answer");
    console.log(`\n${TOPIC} [${diff}]: ${S.length} questions (EN live ${live.length}), ${S.filter((q) => q.fig).length} with figures (EN live ${live.filter((r) => r.image_url).length}), kinds ${JSON.stringify(S.reduce((a, q) => ((a[q.kind] = (a[q.kind] || 0) + 1), a), {}))}`);
    summary.push(`${code} ${diff}: FR ${S.length} / EN live ${live.length}, figures ${S.filter((q) => q.fig).length}/${live.filter((r) => r.image_url).length}`);
    if (S.length !== 20) fail(`${diff}: need 20 questions, have ${S.length}`);
    if (S.length !== live.length) fail(`${diff}: ${S.length} French vs ${live.length} live English`);
    if (S.filter((q) => q.fig).length !== live.filter((r) => r.image_url).length) fail(`${diff}: figure count differs from live English`);
    S.forEach((q, i) => {
      const L = `${diff} Q${i + 1}`;
      const e = EN[i];
      [q.prompt, q.feedback, ...(q.choices ?? []).map((c) => c.text)].forEach((s) => checkText(L, s));
      if (!q.feedback) fail(`${L}: no feedback`);
      if (q.kind === "multiple_choice" && (q.choices.length !== 4 || new Set(q.choices.map((c) => c.text)).size !== 4 || !q.choices.some((c) => c.id === q.answer))) fail(`${L}: bad multiple choice`);
      if (q.kind === "multiple_select" && (!q.answer.length || q.answer.some((a) => !q.choices.some((c) => c.id === a)))) fail(`${L}: bad multiple select`);
      if (q.kind === "numeric" && !Number.isFinite(q.answer)) fail(`${L}: numeric answer`);
      if (q.kind === "fill_blank" && (!Array.isArray(q.answer) || !q.answer.length)) fail(`${L}: fill answers`);
      if (q.kind === "math_expr" && !sameExpr(q.answer, q.answer)) fail(`${L}: math_expr answer does not parse: ${q.answer}`);
      // mirror checks against the English twin
      if (!e) { fail(`${L}: no English twin`); return; }
      if (q.kind !== e.kind) fail(`${L}: kind ${q.kind} vs EN ${e.kind}`);
      if (["numeric", "math_expr", "true_false"].includes(q.kind) && q.answer !== e.answer) fail(`${L}: answer ${q.answer} vs EN ${e.answer}`);
      if (q.kind === "fill_blank" && JSON.stringify(q.answer) !== JSON.stringify(e.answer)) fail(`${L}: fill answers differ`);
      if ((q.tolerance ?? null) !== (e.tolerance ?? null)) fail(`${L}: tolerance differs`);
      if (q.kind === "multiple_select" && (JSON.stringify(q.answer) !== JSON.stringify(e.answer) || q.choices.length !== e.choices.length)) fail(`${L}: multiple-select answers differ`);
      if (q.kind === "multiple_choice") {
        // the correct option must be the twin of the English correct option (same math / numbers)
        const fc = q.choices.find((c) => c.id === q.answer).text, ec = e.choices.find((c) => c.id === e.answer).text;
        if (mathOf(fc) !== mathOf(ec) || numsOf(fc) !== numsOf(ec)) fail(`${L}: correct choice "${fc}" vs EN "${ec}"`);
      }
      if (mathOf(q.prompt) !== mathOf(e.prompt)) fail(`${L}: prompt math differs\n     EN ${mathOf(e.prompt)}\n     FR ${mathOf(q.prompt)}`);
      if (mathOf(q.feedback) !== mathOf(e.feedback)) fail(`${L}: feedback math differs\n     EN ${mathOf(e.feedback)}\n     FR ${mathOf(q.feedback)}`);
      if (!!q.fig !== !!e.fig) fail(`${L}: figure presence differs`);
      if (q.fig) {
        if (numsOf(q.fig.replace(/<text[^>]*>[^<]*<\/text>/g, "")) !== numsOf(e.fig.replace(/<text[^>]*>[^<]*<\/text>/g, ""))) fail(`${L}: figure geometry differs from English`);
        fs.writeFileSync(path.join(OUT, `${code}_${diff}_q${i + 1}.svg`), q.fig);
        if (sharp && !APPLY) sharp(Buffer.from(q.fig)).png().toFile(path.join(OUT, `${code}_${diff}_q${i + 1}.png`)).catch((er) => fail(`${L}: SVG render ${er.message}`));
      }
    });
    if (!APPLY || bad) continue;
    const { data: rows, error } = await db.from("bank_questions").select("id, kind").eq("course_id", CID_FR).eq("topic", TOPIC).eq("difficulty", diff).neq("kind", "long_answer").order("id");
    if (error) throw error;
    if (rows.length > S.length) { fail(`DB has ${rows.length} ${diff} rows for ${TOPIC}; expected at most ${S.length} — skipped`); continue; }
    let up = 0, ins = 0;
    for (let i = 0; i < S.length; i++) {
      const q = S[i];
      let image_url = null;
      if (q.fig) {
        const key = `${FIG_PREFIX}-${code.replace(".", "-")}/${diff}-q${i + 1}-${crypto.createHash("sha1").update(q.fig).digest("hex").slice(0, 8)}.svg`;
        const u = await db.storage.from("graph-images").upload(key, Buffer.from(q.fig), { upsert: true, contentType: "image/svg+xml" });
        if (u.error) throw u.error;
        image_url = db.storage.from("graph-images").getPublicUrl(key).data.publicUrl;
      }
      const fields = { kind: q.kind, prompt: q.prompt, choices: q.choices ?? null, answer: q.answer, tolerance: q.tolerance ?? null, feedback: q.feedback, image_url, points: 1, lesson_id: lessonId(2, k) };
      const r = i < rows.length
        ? await db.from("bank_questions").update(fields).eq("id", rows[i].id)
        : await db.from("bank_questions").insert({ ...fields, course_id: CID_FR, topic: TOPIC, difficulty: diff });
      if (r.error) throw r.error;
      i < rows.length ? up++ : ins++;
    }
    console.log(`  updated ${up}, inserted ${ins} ${diff} rows`);
  }
}
console.log("\n" + summary.join("\n"));
console.log(bad ? `\n${bad} PROBLEM(S)${APPLY ? " — nothing further written" : ""}` : `\nALL CHECKS PASSED${APPLY ? "" : " (dry run — re-run with --apply to write to the MTH1W-FR course)"}`);
process.exit(bad ? 1 : 0);
