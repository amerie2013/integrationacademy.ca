// Seed (or re-seed) the EQAO Grade 9 practice question pool.
//   node scripts/eqao/seed.mjs
// Requires the 2026-06-22_eqao.sql migration to have been run.
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { questions } from "./content.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const env = {};
for (const line of readFileSync(join(__dirname, "..", "..", ".env.local"), "utf8").split("\n")) {
  const m = line.match(/^([A-Z0-9_]+)=(.*)$/);
  if (m) env[m[1]] = m[2].trim();
}
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });

const rows = questions.map((q) => ({
  strand: q.strand,
  difficulty: q.difficulty,
  kind: q.kind,
  prompt: q.prompt,
  figure: q.figure ?? null,
  choices: q.choices ?? null,
  answer: q.answer ?? null,
  tolerance: q.tolerance ?? null,
  points: q.points ?? 1,
  feedback: q.feedback ?? null,
}));

const { error: delErr } = await db.from("eqao_questions").delete().not("id", "is", null);
if (delErr) { console.error("Delete failed (is the migration applied?):", delErr.message); process.exit(1); }

for (let i = 0; i < rows.length; i += 200) {
  const { error } = await db.from("eqao_questions").insert(rows.slice(i, i + 200));
  if (error) { console.error("Insert failed:", error.message); process.exit(1); }
}

const byStrand = {};
for (const r of rows) byStrand[r.strand] = (byStrand[r.strand] || 0) + 1;
for (const [s, n] of Object.entries(byStrand)) console.log(`  ${s}: ${n}`);
console.log(`\nSeeded ${rows.length} EQAO practice questions.`);
