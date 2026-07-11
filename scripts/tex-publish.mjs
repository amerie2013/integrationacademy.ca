// Compile EDITED LaTeX worksheets (scripts/_tex/<code>.tex and
// <code>_compact.tex) to PDF with Tectonic, then replace the published files in
// Supabase storage and bump the URLs so the new versions show immediately.
// Also uploads the .tex sources so the admin editor can offer "Download LaTeX".
//
//   node scripts/tex-publish.mjs          # compile + publish every worksheet
//   node scripts/tex-publish.mjs 1.       # only codes starting with "1."
//   node scripts/tex-publish.mjs 1.1      # a single worksheet
//
// IMPORTANT: compiles the .tex AS-IS — never regenerates them, so edits are
// safe. (To rebuild a .tex from the .mjs content, run texgen.mjs.)
import fs from "fs";
import os from "os";
import path from "path";
import { execFileSync } from "child_process";
import { pathToFileURL } from "url";
import { createClient } from "@supabase/supabase-js";

const TEX = path.resolve("scripts/_tex");
const OUT = path.resolve("scripts/_texpdf");
const SRC = path.resolve("scripts/worksheets");
fs.mkdirSync(OUT, { recursive: true });

function tectonicBin() {
  if (process.env.TECTONIC && fs.existsSync(process.env.TECTONIC)) return process.env.TECTONIC;
  const local = path.join(os.homedir(), "tools", "tectonic", "tectonic.exe");
  if (fs.existsSync(local)) return local;
  return "tectonic"; // assume on PATH
}
const BIN = tectonicBin();

const env = {};
for (const l of fs.readFileSync(".env.local", "utf8").split("\n")) {
  const m = l.match(/^([A-Z0-9_]+)=(.*)$/);
  if (m) env[m[1]] = m[2].trim();
}
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });

const { data: course, error: cErr } = await db.from("courses").select("id").eq("code", "MTH1W").single();
if (cErr || !course) { console.error("MTH1W course not found:", cErr?.message); process.exit(1); }

const only = process.argv[2];
const codes = fs.readdirSync(TEX)
  .filter((f) => f.endsWith(".tex") && !f.endsWith("_compact.tex") && (!only || f.startsWith(only)))
  .map((f) => f.replace(/\.tex$/, ""))
  .sort((a, b) => { const r = (c) => { const [x, y] = c.split("."); return Number(x) * 100 + Number(y || 0); }; return r(a) - r(b); });

if (!codes.length) { console.log("No .tex files in scripts/_tex/" + (only ? " matching " + only : "") + " — run texgen.mjs first."); process.exit(0); }

function compile(stem) {
  try {
    execFileSync(BIN, ["-X", "compile", path.join(TEX, stem + ".tex"), "--outdir", OUT, "--keep-logs"], { stdio: "pipe" });
  } catch {
    const log = path.join(OUT, stem + ".log");
    const tail = fs.existsSync(log) ? "\n  " + fs.readFileSync(log, "utf8").split("\n").filter((l) => /error|undefined|!/i.test(l)).slice(-5).join("\n  ") : "";
    throw new Error("compile failed (" + stem + ".tex)" + tail);
  }
  const pdf = path.join(OUT, stem + ".pdf");
  if (!fs.existsSync(pdf)) throw new Error("no PDF produced for " + stem);
  return pdf;
}

async function put(remote, body, type) {
  const { error } = await db.storage.from("worksheets").upload(remote, body, { upsert: true, contentType: type });
  if (error) throw new Error("upload " + remote + ": " + error.message);
  return db.storage.from("worksheets").getPublicUrl(remote).data.publicUrl;
}

let ok = 0;
for (const code of codes) {
  try {
    const v = Date.now();
    const hasCompact = fs.existsSync(path.join(TEX, code + "_compact.tex"));

    // 1) worksheet PDF + source
    const wsPdf = compile(code);
    const wsUrl = (await put(`${course.id}/${code}_worksheet.pdf`, fs.readFileSync(wsPdf), "application/pdf")) + `?v=${v}`;
    await put(`${course.id}/${code}.tex`, fs.readFileSync(path.join(TEX, code + ".tex")), "text/x-tex");

    // 2) compact / answer-key PDF + source (if present)
    let ansUrl = null;
    if (hasCompact) {
      const cPdf = compile(code + "_compact");
      ansUrl = (await put(`${course.id}/${code}_answers.pdf`, fs.readFileSync(cPdf), "application/pdf")) + `?v=${v}`;
      await put(`${course.id}/${code}_compact.tex`, fs.readFileSync(path.join(TEX, code + "_compact.tex")), "text/x-tex");
    }

    // 3) update the row (only the file fields)
    const patch = { worksheet_url: wsUrl, worksheet_name: `${code}_worksheet.pdf` };
    if (ansUrl) { patch.answers_url = ansUrl; patch.answers_name = `${code}_answers.pdf`; }

    const { data: row } = await db.from("worksheets").select("id").eq("course_id", course.id).eq("code", code).maybeSingle();
    if (row) {
      const { error } = await db.from("worksheets").update(patch).eq("id", row.id);
      if (error) throw new Error(error.message);
    } else {
      let title = code, position = 0;
      const mjs = path.join(SRC, code + ".mjs");
      if (fs.existsSync(mjs)) { const mod = (await import(pathToFileURL(mjs).href)).default; title = mod.title; const [a, b] = code.split("."); position = Number(a) * 100 + Number(b || 0); }
      const { error } = await db.from("worksheets").upsert({ course_id: course.id, code, title, position, published: true, ...patch }, { onConflict: "course_id,code" });
      if (error) throw new Error(error.message);
    }
    console.log(`✓ ${code}  worksheet${hasCompact ? " + answers" : ""} published`);
    ok++;
  } catch (e) {
    console.error(`✗ ${code}: ${e.message}`);
  }
}
console.log(`\nPublished ${ok}/${codes.length} worksheet(s) from LaTeX.`);
