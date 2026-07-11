// Compile MCF3M worksheet .tex files with Tectonic and publish each as the
// course's worksheet PDF in Supabase.
//   node scripts/mcf3m-worksheet-publish.mjs            # all .tex present
//   node scripts/mcf3m-worksheet-publish.mjs 2.         # one unit, or 2.1 for one
import fs from "fs";
import os from "os";
import path from "path";
import { execFileSync } from "child_process";
import { createClient } from "@supabase/supabase-js";

const DIR = path.resolve("scripts/mcf3m-worksheets");
function tectonicBin() {
  if (process.env.TECTONIC && fs.existsSync(process.env.TECTONIC)) return process.env.TECTONIC;
  const local = path.join(os.homedir(), "tools", "tectonic", "tectonic.exe");
  return fs.existsSync(local) ? local : "tectonic";
}
const BIN = tectonicBin();

const env = {};
for (const l of fs.readFileSync(".env.local", "utf8").split("\n")) {
  const m = l.match(/^([A-Z0-9_]+)=(.*)$/);
  if (m) env[m[1]] = m[2].trim();
}
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });

const { data: course, error: cErr } = await db.from("courses").select("id").eq("code", "MCF3M").single();
if (cErr || !course) { console.error("MCF3M course not found:", cErr?.message); process.exit(1); }

const { data: lessons } = await db.from("lessons").select("title").eq("course_id", course.id);
const titleFor = (code) => {
  const l = (lessons ?? []).find((x) => x.title.startsWith(code + " "));
  return l ? l.title.slice(code.length + 1) : code;
};
const rank = (code) => { const [a, b] = code.split("."); return Number(a) * 1000 + Number(b || 0); };

const only = process.argv[2];
const codes = fs.readdirSync(DIR)
  .filter((f) => f.endsWith(".tex") && !f.startsWith("_") && (!only || f === `${only}.tex` || f.startsWith(only)))
  .map((f) => f.replace(/\.tex$/, ""))
  .sort((a, b) => rank(a) - rank(b));
if (!codes.length) { console.log("No .tex worksheets" + (only ? " matching " + only : "")); process.exit(0); }

let ok = 0;
for (const code of codes) {
  try {
    execFileSync(BIN, ["-X", "compile", path.join(DIR, code + ".tex"), "--outdir", DIR, "--keep-logs"], { stdio: "pipe" });
    const pdf = path.join(DIR, code + ".pdf");
    if (!fs.existsSync(pdf)) throw new Error("no PDF produced");

    const remote = `${course.id}/mcf3m_${code}_worksheet.pdf`;
    const { error: upErr } = await db.storage.from("worksheets").upload(remote, fs.readFileSync(pdf), { upsert: true, contentType: "application/pdf" });
    if (upErr) throw new Error("upload: " + upErr.message);
    const url = db.storage.from("worksheets").getPublicUrl(remote).data.publicUrl + `?v=${Date.now()}`;

    const row = { course_id: course.id, code, title: titleFor(code), position: rank(code), published: true, worksheet_url: url, worksheet_name: `${code} worksheet.pdf` };
    const { error } = await db.from("worksheets").upsert(row, { onConflict: "course_id,code" });
    if (error) throw new Error(error.message);
    console.log(`✓ ${code} ${titleFor(code)} (${Math.round(fs.statSync(pdf).size / 1024)} kb)`);
    ok++;
  } catch (e) {
    console.error(`✗ ${code}: ${e.message}`);
  }
}
console.log(`\nPublished ${ok}/${codes.length} MCF3M worksheet(s).`);
