// Compile the AP Calculus AB worksheet .tex files with Tectonic and publish
// each as a worksheet PDF on the APCALCAB course. Run build.mjs first.
//   node scripts/apcalc-worksheet-publish.mjs              # everything present
//   node scripts/apcalc-worksheet-publish.mjs 1.           # one unit, or 1.4 for one
//   node scripts/apcalc-worksheet-publish.mjs 1. --dry     # compile only, no upload
// A file named <code>-key.tex is compiled and attached to worksheet <code> as
// its separate answer document (used for the free-response scoring guides).
import fs from "fs";
import os from "os";
import path from "path";
import { execFileSync } from "child_process";
import { createClient } from "@supabase/supabase-js";

const DIR = path.resolve("scripts/apcalc-worksheets");
function tectonicBin() {
  if (process.env.TECTONIC && fs.existsSync(process.env.TECTONIC)) return process.env.TECTONIC;
  const local = path.join(os.homedir(), "tools", "tectonic", "tectonic.exe");
  return fs.existsSync(local) ? local : "tectonic";
}
const BIN = tectonicBin();
const args = process.argv.slice(2);
const dry = args.includes("--dry");
const only = args.find((a) => !a.startsWith("--"));

// Titles of worksheets that do not correspond to a lesson.
const EXTRA = { "1.11": "Unit 1 Test: Limits and Continuity", "1.12": "Unit 1 Free-Response Practice" };

const rank = (code) => { const [a, b] = code.split("."); return Number(a) * 1000 + Number(b || 0); };
const codes = fs.readdirSync(DIR)
  .filter((f) => f.endsWith(".tex") && !f.startsWith("_") && !f.endsWith("-key.tex") && (!only || f === `${only}.tex` || f.startsWith(only)))
  .map((f) => f.replace(/\.tex$/, ""))
  .sort((a, b) => rank(a) - rank(b));
if (!codes.length) { console.log("No .tex worksheets" + (only ? " matching " + only : "")); process.exit(0); }

const compile = (name) => {
  execFileSync(BIN, ["-X", "compile", path.join(DIR, name + ".tex"), "--outdir", DIR], { stdio: "pipe" });
  const pdf = path.join(DIR, name + ".pdf");
  if (!fs.existsSync(pdf)) throw new Error("no PDF produced");
  return pdf;
};

let db, course, lessons;
if (!dry) {
  const env = {};
  for (const l of fs.readFileSync(".env.local", "utf8").split("\n")) {
    const m = l.match(/^([A-Z0-9_]+)=(.*)$/);
    if (m) env[m[1]] = m[2].trim();
  }
  db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });
  const c = await db.from("courses").select("id").eq("code", "APCALCAB").single();
  if (c.error || !c.data) { console.error("APCALCAB course not found:", c.error?.message); process.exit(1); }
  course = c.data;
  lessons = (await db.from("lessons").select("title").eq("course_id", course.id)).data ?? [];
}
const titleFor = (code) => {
  if (EXTRA[code]) return EXTRA[code];
  const l = (lessons ?? []).find((x) => x.title.startsWith(code + " "));
  return l ? l.title.slice(code.length + 1) : code;
};
const upload = async (pdf, remote) => {
  // the storage endpoint occasionally drops a connection; a second try has always gone through
  let error;
  for (let attempt = 0; attempt < 3; attempt++) {
    ({ error } = await db.storage.from("worksheets").upload(remote, fs.readFileSync(pdf), { upsert: true, contentType: "application/pdf" }));
    if (!error) break;
  }
  if (error) throw new Error("upload: " + error.message);
  return db.storage.from("worksheets").getPublicUrl(remote).data.publicUrl + `?v=${Date.now()}`;
};

let ok = 0;
for (const code of codes) {
  try {
    const pdf = compile(code);
    const hasKey = fs.existsSync(path.join(DIR, `${code}-key.tex`));
    const keyPdf = hasKey ? compile(`${code}-key`) : null;
    const kb = Math.round(fs.statSync(pdf).size / 1024);
    if (dry) { console.log(`✓ ${code} compiled (${kb} kb)${keyPdf ? " + key" : ""}`); ok++; continue; }

    const row = {
      course_id: course.id, code, title: titleFor(code), position: rank(code), published: true,
      worksheet_url: await upload(pdf, `${course.id}/apcalc_${code}_worksheet.pdf`), worksheet_name: `${code} worksheet.pdf`,
      ...(keyPdf ? { answers_url: await upload(keyPdf, `${course.id}/apcalc_${code}_scoring_guide.pdf`), answers_name: `${code} answer key.pdf` } : {}),
    };
    const { error } = await db.from("worksheets").upsert(row, { onConflict: "course_id,code" });
    if (error) throw new Error(error.message);
    console.log(`✓ ${code} ${titleFor(code)} (${kb} kb)${keyPdf ? " + scoring guide" : ""}`);
    ok++;
  } catch (e) {
    const out = (e.stderr?.toString() || e.stdout?.toString() || e.message).split("\n").filter((l) => /error|^!|^l\.\d+/i.test(l)).slice(0, 6).join("\n   ");
    console.error(`✗ ${code}: ${out || e.message}`);
  }
}
console.log(`\n${dry ? "Compiled" : "Published"} ${ok}/${codes.length} AP Calculus AB worksheet(s).`);
