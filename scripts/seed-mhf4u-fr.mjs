// Seeds the French-language MHF4U course — "Fonctions avancées (MHF4U)" — as its own course
// row (code MHF4U-FR, language 'fr'), separate from the English MHF4U course so none of the
// English seeding/publishing scripts (which look up courses by code "MHF4U") are affected.
// Mirrors seed-mhf4u.mjs's structure. Usage: node scripts/seed-mhf4u-fr.mjs
import { createClient } from "@supabase/supabase-js";
import { teacherPassword } from "./_teacher-secret.mjs";
import { readFileSync } from "fs";
import { fileURLToPath, pathToFileURL } from "url";
import { dirname, join } from "path";
import { authored, ORDER } from "./mhf4u-lessons-fr.mjs";
import { ASSIGN } from "./mhf4u-assignments-fr.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const env = {};
for (const line of readFileSync(join(__dirname, "..", ".env.local"), "utf8").split("\n")) {
  const m = line.match(/^([A-Z0-9_]+)=(.*)$/);
  if (m) env[m[1]] = m[2].trim();
}
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });

const TEACHER_EMAIL = "teacher@integrationacademy.ca";
const COURSE_CODE = "MHF4U-FR";
const COURSE_TITLE = "Fonctions avancées (MHF4U)";
const DESC = "Fonctions avancées, 12e année, préparation à l'université (MHF4U), offert en français. Leçons interactives approfondies sur les fonctions polynomiales et rationnelles, les fonctions exponentielles et logarithmiques, les fonctions trigonométriques (radians et identités), et les caractéristiques des fonctions (taux de variation, combinaison de fonctions).";

async function getTeacherId() {
  const { data: created } = await db.auth.admin.createUser({
    email: TEACHER_EMAIL, password: teacherPassword(env), email_confirm: true,
    user_metadata: { full_name: "Integration Academy", role: "admin" },
  });
  if (created?.user) {
    await db.from("profiles").upsert({ id: created.user.id, full_name: "Integration Academy", role: "admin" });
    return created.user.id;
  }
  const { data: list } = await db.auth.admin.listUsers({ perPage: 1000 });
  const found = list.users.find((u) => u.email === TEACHER_EMAIL);
  if (!found) throw new Error("Could not create or find teacher.");
  await db.from("profiles").upsert({ id: found.id, full_name: "Integration Academy", role: "admin" });
  return found.id;
}

async function run() {
  const teacherId = await getTeacherId();
  console.log("Teacher id:", teacherId);

  let course;
  const existing = await db.from("courses").select("id").eq("code", COURSE_CODE).maybeSingle();
  if (existing.data) {
    course = existing.data;
    await db.from("courses").update({ title: COURSE_TITLE, description: DESC, level: "12", language: "fr", published: true }).eq("id", course.id);
  } else {
    const ins = await db.from("courses").insert({ teacher_id: teacherId, code: COURSE_CODE, title: COURSE_TITLE, description: DESC, level: "12", language: "fr", published: true }).select("id").single();
    if (ins.error) throw ins.error;
    course = ins.data;
  }
  console.log("Course:", course.id);

  const asgOnly = process.argv.includes("--assignments-only");
  if (!asgOnly) await db.from("lessons").delete().eq("course_id", course.id);
  // assignments.id est référencé par submissions.assignment_id ON DELETE CASCADE —
  // ne jamais supprimer les lignes assignments ; upsert par titre ci-dessous.
  let pos = 0, asg = 0;
  for (const code of ORDER) {
    const s = authored[code];
    if (!asgOnly) {
      const { error } = await db.from("lessons").insert({ course_id: course.id, title: `${s.code} ${s.title}`, blocks: s.blocks, position: pos++, published: true });
      if (error) throw error;
    }
    const ad = ASSIGN[code];
    if (ad) {
      const existingA = await db.from("assignments").select("id").eq("course_id", course.id).eq("title", ad.title).maybeSingle();
      const { error: ae } = existingA.data
        ? await db.from("assignments").update({ description: ad.description, published: true }).eq("id", existingA.data.id)
        : await db.from("assignments").insert({ course_id: course.id, title: ad.title, description: ad.description, published: true });
      if (ae) throw ae;
      asg++;
    }
    console.log(`  ${s.code} ${s.title}`);
  }
  if (asgOnly) console.log(`\nTerminé. ${asg} devoirs MHF4U-FR mis à jour (leçons inchangées).`);
  else console.log(`\nTerminé. ${ORDER.length} leçons MHF4U-FR + ${asg} devoirs.`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  run().catch((e) => { console.error("SEED FAILED:", e.message ?? e); process.exit(1); });
}
