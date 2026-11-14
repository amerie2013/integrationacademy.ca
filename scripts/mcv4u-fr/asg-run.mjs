// Shared checker/publisher for scripts/mcv4u-fr-chN/asg/publish.mjs (French assignments).
//   await runAsg(N, ASSIGNMENTS, EN_ASSIGNMENTS)
// Checks against English: same codes and number of lines, same category split, same figures (except the words drawn
// inside them), same math \( … \) in the same order, KaTeX renders, every [[fig|…]] exists, no untranslated words.
// --apply uploads figures (keys mcv4u-fr-…) and inserts/updates each row by its fixed id asgId(N, k).
import { createRequire } from "module";
import fs from "fs";
import path from "path";
import crypto from "crypto";
import { CID_FR, FIG_PREFIX, asgId } from "./common.mjs";

const katex = createRequire(import.meta.url)("katex");
const CAT_FR = /^(Connaissance et compréhension|Habiletés de la pensée|Communication|Mise en application|Niveau difficile)$/;
const CAT_EN = /^(Knowledge & Understanding|Knowledge and Understanding|Thinking|Communication|Application|Hard Level)$/;
const split = (lines, re) => { const c = []; for (const l of lines) { if (re.test(l)) c.push(0); else if (/^\d+\./.test(l)) c[c.length - 1]++; } return JSON.stringify(c); };
const mathOf = (s) => [...String(s).matchAll(/\\\(([\s\S]*?)\\\)/g)].map((m) => m[1]).join(" | ");
const shape = (svg) => String(svg ?? "").replace(/>[^<]*</g, "><");
const ENGLISH = /\b(the|and|Find|Show|Explain|which|Use|State|Determine|Graph for|Sketch|Describe|What|How)\b/;

export async function runAsg(ch, ASSIGNMENTS, EN) {
  const APPLY = process.argv.includes("--apply");
  let bad = 0;
  const fail = (m) => { bad++; console.log("  FAIL:", m); };
  if (ASSIGNMENTS.length !== EN.length) fail(`${ASSIGNMENTS.length} assignments but English has ${EN.length}`);
  for (const [k, a] of ASSIGNMENTS.entries()) {
    const e = EN.find((x) => x.code === a.code);
    if (a.id !== asgId(ch, k + 1) || a.code !== `${ch}.${k + 1}`) fail(`${a.code}: id/code`);
    if (!new RegExp(`^Devoir ${ch}\\.\\d — `).test(a.title)) fail(`${a.code}: title "${a.title}"`);
    if (!e) { fail(`${a.code}: no English assignment`); continue; }
    if (a.lines.length !== e.lines.length) fail(`${a.code}: ${a.lines.length} lines, English ${e.lines.length}`);
    if (split(a.lines, CAT_FR) !== split(e.lines, CAT_EN)) fail(`${a.code}: category split ${split(a.lines, CAT_FR)} vs English ${split(e.lines, CAT_EN)}`);
    const ka = Object.keys(a.figs), ke = Object.keys(e.figs);
    if (JSON.stringify(ka) !== JSON.stringify(ke) || ka.some((key) => shape(a.figs[key]) !== shape(e.figs[key]))) fail(`${a.code}: figures differ from English`);
    for (const [i, l] of a.lines.entries()) {
      for (const m of l.matchAll(/\\\(([\s\S]*?)\\\)/g)) { try { katex.renderToString(m[1], { throwOnError: true }); } catch (err) { fail(`${a.code}: KaTeX ${m[1].slice(0, 40)} ${err.message.slice(0, 40)}`); } }
      for (const m of l.matchAll(/\[\[(\w+)\|/g)) if (!a.figs[m[1]]) fail(`${a.code}: missing figure ${m[1]}`);
      if (/\$/.test(l)) fail(`${a.code}: bare $ in "${l.slice(0, 50)}"`);
      if (e.lines[i] !== undefined && mathOf(l) !== mathOf(e.lines[i])) fail(`${a.code} line ${i}: math differs from English\n     FR ${mathOf(l)}\n     EN ${mathOf(e.lines[i])}`);
      if (ENGLISH.test(l.replace(/\\\([\s\S]*?\\\)/g, ""))) fail(`${a.code} line ${i}: looks untranslated: ${l.slice(0, 60)}`);
    }
  }
  console.log(`${ASSIGNMENTS.length} devoirs (EN ${EN.length}), ${ASSIGNMENTS.reduce((s, a) => s + Object.keys(a.figs).length, 0)} figures`);
  if (bad || !APPLY) { console.log(bad ? `${bad} PROBLEM(S)` : "ALL CHECKS PASSED (no upload — use --apply)"); process.exit(bad ? 1 : 0); }

  const { createClient } = await import("@supabase/supabase-js");
  const env = {};
  for (const line of fs.readFileSync(".env.local", "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
  const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });
  const stamp = new Date().toISOString().replace(/[:.]/g, "-");
  const bdir = path.resolve(`scripts/mcv4u-fr-ch${ch}/backup`);
  for (const a of ASSIGNMENTS) {
    const { data: row, error } = await db.from("assignments").select("id, title, description, course_id").eq("id", a.id).maybeSingle();
    if (error) throw error;
    if (row && row.course_id !== CID_FR) throw new Error(`${a.id} belongs to another course`);
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
      console.log(`INSERTED ${a.title}`);
      continue;
    }
    fs.mkdirSync(bdir, { recursive: true });
    fs.writeFileSync(path.join(bdir, `asg-${a.code}.${stamp}.json`), JSON.stringify(row, null, 1));
    const r = await db.from("assignments").update({ description, title: a.title }).eq("id", row.id);
    if (r.error) throw r.error;
    console.log(`updated ${a.title}`);
  }
}
