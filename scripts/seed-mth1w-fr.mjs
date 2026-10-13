// Seeds the MTH1W-FR (Mathématiques, 9e année) pilot French course into Supabase.
// This is a SEPARATE course row from the English MTH1W course (distinct code
// "MTH1W-FR"), so every existing English script's hardcoded
// .eq("code","MTH1W").single() lookup stays unaffected.
//
// Pilot slice: only topic 1.1 is seeded so far. Add more entries to `subjects`
// and `ASSIGN` as more chapters are translated, then re-run — safe to re-run
// (lessons are deleted/reinserted; assignments are upserted by title, never
// deleted, since submissions.assignment_id cascades on delete).
//
// Usage:  node scripts/seed-mth1w-fr.mjs
// Reads keys from .env.local.

import { createClient } from "@supabase/supabase-js";
import { teacherPassword } from "./_teacher-secret.mjs";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

// ── load .env.local ──────────────────────────────────────────
const env = {};
for (const line of readFileSync(join(__dirname, "..", ".env.local"), "utf8").split("\n")) {
  const m = line.match(/^([A-Z0-9_]+)=(.*)$/);
  if (m) env[m[1]] = m[2].trim();
}
const url = env.NEXT_PUBLIC_SUPABASE_URL;
const key = env.SUPABASE_SERVICE_ROLE_KEY;
if (!url || !key) { console.error("Missing Supabase URL or service role key in .env.local"); process.exit(1); }
const db = createClient(url, key, { auth: { persistSession: false } });

const TEACHER_EMAIL = "teacher@integrationacademy.ca";
const TEACHER_PASSWORD = teacherPassword(env);
const COURSE_CODE = "MTH1W-FR";
const COURSE_TITLE = "Mathématiques, 9e année (MTH1W)";

// ── content helpers (identical to seed-mth1w.mjs — no translation needed) ──
let _b = 0;
const bid = () => `b${Date.now().toString(36)}${(_b++).toString(36)}`;

// ── ASSIGNMENTS (français canadien) ─────────────────────────────
const ASSIGN = {
  "1.1": { title: "Devoir 1.1 — Ensembles de nombres et leurs sous-ensembles", description: String.raw`Connaissance et compréhension
1. Classe chaque nombre comme naturel, entier naturel, entier, rationnel ou irrationnel : \( -7,\ 0,\ \frac{3}{4},\ \sqrt{2},\ 5 \).
2. Vrai ou faux : tout entier est un nombre rationnel. Donne une raison.
3. Lequel de \( \sqrt{16} \) et \( \sqrt{20} \) est irrationnel? Explique.
Réflexion critique
4. Donne un nombre qui est rationnel mais qui N'EST PAS un entier, et explique comment tu le sais.
5. Existe-t-il un plus petit nombre rationnel positif? Justifie ta réponse.
Communication
6. Dans tes propres mots, explique la différence entre un nombre rationnel et un nombre irrationnel.
7. Dessine ou décris comment les ensembles \( \mathbb{N}, \mathbb{W}, \mathbb{Z}, \mathbb{Q}, \mathbb{R} \) s'imbriquent les uns dans les autres.
Application
8. Une planche mesure \( \sqrt{2} \) m de long. Cette longueur est-elle rationnelle? Qu'est-ce que cela signifie en pratique?
9. Classe ces nombres dans un tableau selon le plus petit ensemble auquel ils appartiennent : \( -3,\ 2.5,\ \sqrt{9},\ \pi,\ \frac{1}{3},\ 8 \).
10. Fais une recherche sur l'histoire du zéro (ou des nombres négatifs) et écris 2 à 3 phrases sur son utilisation aujourd'hui.` },
};

const subjects = [
  {
    code: "1.1", title: "Ensembles de nombres et leurs sous-ensembles",
    blocks: [
      { id: bid(), type: "html", html: String.raw`<div class="lecture-box">
  <h1>📚 Ensembles de nombres et leurs sous-ensembles</h1>
  <p><strong>Un ensemble de nombres</strong> est une collection de nombres qui partagent une propriété. Chaque nombre que tu rencontres en 9<sup>e</sup> année fait partie du système des nombres réels, et les ensembles s'imbriquent soigneusement les uns dans les autres.</p>

  <h2>📌 Le système des nombres réels</h2>
  <p>Du plus petit au plus grand, les cinq ensembles fondamentaux sont :</p>
  <ol class="math">
    <li><strong>Naturels</strong> : \( \mathbb{N} = \{1, 2, 3, \dots\} \) — les nombres de comptage</li>
    <li><strong>Entiers naturels</strong> : \( \{0, 1, 2, 3, \dots\} \) — les naturels plus zéro</li>
    <li><strong>Entiers</strong> : \( \mathbb{Z} = \{\dots, -2, -1, 0, 1, 2, \dots\} \)</li>
    <li><strong>Rationnels</strong> : \( \mathbb{Q} \) — tout \( \frac{a}{b} \) où \( a, b \) sont des entiers et \( b \neq 0 \)</li>
    <li><strong>Irrationnels</strong> : ne peut pas s'écrire comme une fraction, par ex. \( \sqrt{2},\ \pi \)</li>
  </ol>
  <p>Ensemble, ils forment les nombres réels : \( \mathbb{N} \subset \mathbb{W} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R} \).</p>

  <div style="text-align:center;margin:18px 0;">
    <svg viewBox="0 0 520 330" style="max-width:100%;height:auto;" role="img" aria-label="Diagramme imbriqué des ensembles de nombres réels">
      <rect x="8" y="8" width="504" height="314" rx="14" fill="#f5f3ff" stroke="#6d28d9" stroke-width="2"/>
      <text x="20" y="28" font-size="16" font-weight="700" fill="#6d28d9">ℝ  Nombres réels</text>
      <text x="300" y="58" font-size="14" fill="#7c3aed">Irrationnels : π,  √2,  √50</text>
      <rect x="26" y="44" width="318" height="266" rx="12" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
      <text x="38" y="64" font-size="15" font-weight="700" fill="#2563eb">ℚ  Rationnels</text>
      <text x="40" y="84" font-size="13" fill="#1d4ed8">−3/4,  1/3,  0.25,  0.3̄</text>
      <rect x="44" y="96" width="284" height="200" rx="11" fill="#ecfdf5" stroke="#0d9488" stroke-width="2"/>
      <text x="56" y="116" font-size="15" font-weight="700" fill="#0d9488">ℤ  Entiers</text>
      <text x="58" y="136" font-size="13" fill="#0f766e">−10,  −3</text>
      <rect x="62" y="148" width="250" height="134" rx="10" fill="#fff7ed" stroke="#ea580c" stroke-width="2"/>
      <text x="74" y="168" font-size="15" font-weight="700" fill="#ea580c">𝕎  Entiers naturels</text>
      <text x="76" y="188" font-size="13" fill="#c2410c">0</text>
      <rect x="80" y="200" width="214" height="68" rx="9" fill="#fef2f2" stroke="#dc2626" stroke-width="2"/>
      <text x="92" y="222" font-size="15" font-weight="700" fill="#dc2626">ℕ  Naturels</text>
      <text x="92" y="244" font-size="13" fill="#b91c1c">1,  2,  3,  …,  7</text>
    </svg>
    <div style="font-size:13px;color:#64748b;margin-top:4px;">Chaque ensemble est inclus dans le suivant : \( \mathbb{N} \subset \mathbb{W} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R} \). Les irrationnels remplissent le reste de \( \mathbb{R} \) (à l'extérieur de \( \mathbb{Q} \)).</div>
  </div>

  <h2>📌 Comment classer un nombre</h2>
  <p>Demande-toi : <em>puis-je l'écrire comme une fraction d'entiers?</em> Si oui, il est <strong>rationnel</strong> (son développement décimal se termine ou se répète). Si son développement décimal continue indéfiniment sans motif, il est <strong>irrationnel</strong>. Et vérifie toujours si une racine carrée est un carré parfait — \( \sqrt{9} = 3 \) est rationnel!</p>

  <h2>🔵 Exemples</h2>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Exemple 1 : Classer un nombre de comptage</h3>
    <p>À quels ensembles \( 7 \) appartient-il?</p>
    <div class="solution">
      <div class="step"><strong>Étape 1 :</strong> \( 7 \) est un nombre de comptage, donc il est <em>naturel</em> (\( 7 \in \mathbb{N} \)).</div>
      <div class="step"><strong>Étape 2 :</strong> Puisque \( \mathbb{N} \subset \mathbb{W} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R} \), il appartient automatiquement à tous les ensembles plus grands.</div>
      <div class="step"><strong>Étape 3 (vérification) :</strong> \( 7 = \frac{7}{1} \) est un rapport d'entiers, ce qui confirme qu'il est aussi rationnel.</div>
      <em>Conclusion : \( 7 \) est naturel, un entier naturel, un entier, rationnel et réel. ✓</em>
      <div style="text-align:center;margin:10px 0;">
        <svg viewBox="0 0 200 200" width="170" style="max-width:100%;background:#fff;border:1px solid #e2e8f0;border-radius:8px;">
          <circle cx="100" cy="100" r="80" fill="#f5f3ff" stroke="#6d28d9" stroke-width="1.5"/>
          <circle cx="100" cy="100" r="65" fill="#eff6ff" stroke="#2563eb" stroke-width="1.5"/>
          <circle cx="100" cy="100" r="50" fill="#ecfdf5" stroke="#0d9488" stroke-width="1.5"/>
          <circle cx="100" cy="100" r="35" fill="#fff7ed" stroke="#ea580c" stroke-width="1.5"/>
          <circle cx="100" cy="100" r="20" fill="#fef2f2" stroke="#dc2626" stroke-width="1.5"/>
          <circle cx="100" cy="100" r="5" fill="#111827"/>
          <text x="112" y="104" font-size="12" fill="#111827">7</text>
        </svg>
      </div>
    </div>
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Exemple 2 : Une racine carrée qui est rationnelle</h3>
    <p>\( \sqrt{16} \) est-il rationnel ou irrationnel?</p>
    <div class="solution">
      <div class="step"><strong>Étape 1 :</strong> Vérifie s'il s'agit d'un carré parfait : \( \sqrt{16} = 4 \), car \( 4^2 = 16 \).</div>
      <div class="step"><strong>Étape 2 :</strong> \( 4 = \frac{4}{1} \) est un rapport d'entiers, donc il est rationnel.</div>
      <em>Conclusion : \( \sqrt{16} = 4 \) est rationnel. ✓</em>
      <div style="text-align:center;margin:10px 0;">
        <svg viewBox="0 0 200 200" width="170" style="max-width:100%;background:#fff;border:1px solid #e2e8f0;border-radius:8px;">
          <circle cx="100" cy="100" r="80" fill="#f5f3ff" stroke="#6d28d9" stroke-width="1.5"/>
          <circle cx="100" cy="100" r="65" fill="#eff6ff" stroke="#2563eb" stroke-width="1.5"/>
          <circle cx="100" cy="100" r="50" fill="#ecfdf5" stroke="#0d9488" stroke-width="1.5"/>
          <circle cx="100" cy="100" r="35" fill="#fff7ed" stroke="#ea580c" stroke-width="1.5"/>
          <circle cx="100" cy="100" r="20" fill="#fef2f2" stroke="#dc2626" stroke-width="1.5"/>
          <circle cx="100" cy="100" r="5" fill="#111827"/>
          <text x="112" y="104" font-size="12" fill="#111827">√16 = 4</text>
        </svg>
      </div>
    </div>
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Exemple 3 : Une fraction négative</h3>
    <p>Nomme le plus petit ensemble qui contient \( -\frac{3}{4} \).</p>
    <div class="solution">
      <div class="step"><strong>Étape 1 :</strong> Il est négatif et n'a pas une valeur entière naturelle, donc il n'est ni naturel, ni un entier naturel, ni un entier.</div>
      <div class="step"><strong>Étape 2 :</strong> C'est un rapport d'entiers, \( \frac{-3}{4} \), donc il est rationnel.</div>
      <div class="step"><strong>Étape 3 (vérification) :</strong> son développement décimal \( -0.75 \) se termine — un autre signe qu'il est rationnel.</div>
      <em>Conclusion : le plus petit ensemble est celui des rationnels, \( \mathbb{Q} \). ✓</em>
      <div style="text-align:center;margin:10px 0;">
        <svg viewBox="0 0 200 200" width="170" style="max-width:100%;background:#fff;border:1px solid #e2e8f0;border-radius:8px;">
          <circle cx="100" cy="100" r="80" fill="#f5f3ff" stroke="#6d28d9" stroke-width="1.5"/>
          <circle cx="100" cy="100" r="65" fill="#eff6ff" stroke="#2563eb" stroke-width="1.5"/>
          <circle cx="100" cy="100" r="50" fill="#ecfdf5" stroke="#0d9488" stroke-width="1.5"/>
          <circle cx="100" cy="100" r="35" fill="#fff7ed" stroke="#ea580c" stroke-width="1.5"/>
          <circle cx="100" cy="100" r="20" fill="#fef2f2" stroke="#dc2626" stroke-width="1.5"/>
          <circle cx="100" cy="157" r="5" fill="#111827"/>
          <text x="112" y="161" font-size="12" fill="#111827">−3/4</text>
        </svg>
      </div>
    </div>
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Exemple 4 : Un développement décimal périodique</h3>
    <p>\( 0.\overline{3} \) est-il rationnel ou irrationnel?</p>
    <div class="solution">
      <div class="step"><strong>Étape 1 :</strong> Soit \( x = 0.\overline{3} \). Multiplie par 10 : \( 10x = 3.\overline{3} \).</div>
      <div class="step"><strong>Étape 2 :</strong> Soustrais : \( 10x - x = 3.\overline{3} - 0.\overline{3} = 3 \), donc \( 9x = 3 \Rightarrow x = \frac{3}{9} = \frac{1}{3} \).</div>
      <div class="step"><strong>Étape 3 :</strong> \( \frac{1}{3} \) est un rapport d'entiers, donc rationnel.</div>
      <em>Conclusion : \( 0.\overline{3} = \frac{1}{3} \) est rationnel. ✓ (Tout développement décimal qui se termine <em>ou</em> qui se répète est rationnel.)</em>
      <div style="text-align:center;margin:10px 0;">
        <svg viewBox="0 0 200 200" width="170" style="max-width:100%;background:#fff;border:1px solid #e2e8f0;border-radius:8px;">
          <circle cx="100" cy="100" r="80" fill="#f5f3ff" stroke="#6d28d9" stroke-width="1.5"/>
          <circle cx="100" cy="100" r="65" fill="#eff6ff" stroke="#2563eb" stroke-width="1.5"/>
          <circle cx="100" cy="100" r="50" fill="#ecfdf5" stroke="#0d9488" stroke-width="1.5"/>
          <circle cx="100" cy="100" r="35" fill="#fff7ed" stroke="#ea580c" stroke-width="1.5"/>
          <circle cx="100" cy="100" r="20" fill="#fef2f2" stroke="#dc2626" stroke-width="1.5"/>
          <circle cx="100" cy="157" r="5" fill="#111827"/>
          <text x="112" y="161" font-size="12" fill="#111827">1/3</text>
        </svg>
      </div>
    </div>
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Exemple 5 : Une racine carrée qui n'est pas un carré parfait</h3>
    <p>Classe \( \sqrt{50} \).</p>
    <div class="solution">
      <div class="step"><strong>Étape 1 :</strong> \( 50 \) n'est pas un carré parfait — il se situe entre \( 7^2 = 49 \) et \( 8^2 = 64 \).</div>
      <div class="step"><strong>Étape 2 :</strong> Simplifie : \( \sqrt{50} = \sqrt{25 \cdot 2} = 5\sqrt{2} \approx 7.071\ldots \), un développement décimal qui ne se répète jamais.</div>
      <div class="step"><strong>Étape 3 (vérification) :</strong> \( \sqrt{2} \) est irrationnel, et un rationnel (non nul) multiplié par un irrationnel donne un irrationnel.</div>
      <em>Conclusion : \( \sqrt{50} \) est irrationnel. ✓</em>
      <div style="text-align:center;margin:10px 0;">
        <svg viewBox="0 0 200 200" width="170" style="max-width:100%;background:#fff;border:1px solid #e2e8f0;border-radius:8px;">
          <circle cx="100" cy="100" r="80" fill="#f5f3ff" stroke="#6d28d9" stroke-width="1.5"/>
          <circle cx="100" cy="100" r="65" fill="#eff6ff" stroke="#2563eb" stroke-width="1.5"/>
          <circle cx="100" cy="100" r="50" fill="#ecfdf5" stroke="#0d9488" stroke-width="1.5"/>
          <circle cx="100" cy="100" r="35" fill="#fff7ed" stroke="#ea580c" stroke-width="1.5"/>
          <circle cx="100" cy="100" r="20" fill="#fef2f2" stroke="#dc2626" stroke-width="1.5"/>
          <circle cx="100" cy="172" r="5" fill="#111827"/>
          <text x="112" y="176" font-size="12" fill="#111827">√50</text>
        </svg>
      </div>
    </div>
  </div>

  <h2>🟡 Questions pratiques</h2>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 1</h3>
    <p>Quel est le plus petit ensemble qui contient \( -3 \)?</p>
    <details><summary>Voir la réponse</summary>
      <div class="solution"><div class="step">\( -3 \) est négatif mais a une valeur entière, donc c'est un entier (ni un entier naturel, ni un naturel). <em>Réponse : les entiers, \( \mathbb{Z} \).</em></div></div>
    </details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 2</h3>
    <p>\( \sqrt{25} \) est-il rationnel ou irrationnel?</p>
    <details><summary>Voir la réponse</summary>
      <div class="solution"><div class="step">\( \sqrt{25} = 5 \), un entier naturel. <em>Réponse : rationnel.</em></div></div>
    </details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 3</h3>
    <p>Donne un exemple de nombre qui est rationnel mais qui <em>n'est pas</em> un entier.</p>
    <details><summary>Voir la réponse</summary>
      <div class="solution"><div class="step">N'importe quelle fraction non entière convient. <em>Réponse : par ex. \( \frac{1}{2} \) ou \( 0.25 \).</em></div></div>
    </details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 4</h3>
    <p>Vrai ou faux : tout entier naturel est un entier.</p>
    <details><summary>Voir la réponse</summary>
      <div class="solution"><div class="step">Les entiers naturels \( \{0, 1, 2, \dots\} \) sont tous des entiers. <em>Réponse : Vrai.</em></div></div>
    </details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 5</h3>
    <p>Classe \( \pi \).</p>
    <details><summary>Voir la réponse</summary>
      <div class="solution"><div class="step">\( \pi = 3.14159\ldots \) ne se termine ni ne se répète. <em>Réponse : irrationnel.</em></div></div>
    </details>
  </div>

  <h2>❓ Résumé questions-réponses</h2>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Q1 : Zéro est-il un nombre naturel?</h3>
    <p><em>Dans ce cours, les nombres naturels commencent à 1; zéro est donc un <strong>entier naturel</strong>, mais pas un nombre naturel.</em></p>
  </div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Q2 : Quelle est la façon la plus rapide de distinguer un nombre rationnel d'un nombre irrationnel?</h3>
    <p><em>S'il peut s'écrire comme une fraction d'entiers — ou si son développement décimal se termine ou se répète — il est rationnel. Sinon, il est irrationnel.</em></p>
  </div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Q3 : Toutes les racines carrées sont-elles irrationnelles?</h3>
    <p><em>Non. La racine carrée d'un carré parfait est rationnelle (par ex. \( \sqrt{36} = 6 \)); les autres racines carrées sont irrationnelles.</em></p>
  </div>
</div>` },
    ],
  },
];

// ── seeding ──────────────────────────────────────────────────
async function getTeacherId() {
  const { data: created, error } = await db.auth.admin.createUser({
    email: TEACHER_EMAIL,
    password: TEACHER_PASSWORD,
    email_confirm: true,
    user_metadata: { full_name: "Integration Academy", role: "admin" },
  });
  if (created?.user) {
    await db.from("profiles").upsert({ id: created.user.id, full_name: "Integration Academy", role: "admin" });
    return created.user.id;
  }
  const { data: list } = await db.auth.admin.listUsers({ perPage: 1000 });
  const found = list.users.find((u) => u.email === TEACHER_EMAIL);
  if (!found) throw new Error("Could not create or find teacher: " + (error?.message ?? ""));
  await db.from("profiles").upsert({ id: found.id, full_name: "Integration Academy", role: "admin" });
  return found.id;
}

async function run() {
  const teacherId = await getTeacherId();
  console.log("Teacher id:", teacherId);

  const DESC = "Mathématiques de 9e année de l'Ontario (programme déstreamé). Leçons interactives, questionnaires et devoirs couvrant les nombres, l'algèbre, les relations linéaires, la géométrie et la mesure, les données, et la littératie financière.";
  let course;
  const existing = await db.from("courses").select("id").eq("teacher_id", teacherId).eq("title", COURSE_TITLE).maybeSingle();
  if (existing.data) {
    course = existing.data;
    await db.from("courses").update({ code: COURSE_CODE, description: DESC, level: "9", language: "fr", published: true }).eq("id", course.id);
  } else {
    const ins = await db.from("courses").insert({ teacher_id: teacherId, code: COURSE_CODE, title: COURSE_TITLE, description: DESC, level: "9", language: "fr", published: true }).select("id").single();
    if (ins.error) throw ins.error;
    course = ins.data;
  }
  console.log("Course:", course.id);

  // Same re-run-safety rules as seed-mth1w.mjs: lessons are safe to
  // delete/reinsert (FKs are ON DELETE SET NULL); assignments are upserted by
  // title, never deleted (submissions.assignment_id cascades on delete).
  await db.from("lessons").delete().eq("course_id", course.id);

  let pos = 0;
  let asgCount = 0;
  for (const s of subjects) {
    await db
      .from("lessons")
      .insert({ course_id: course.id, title: `${s.code} ${s.title}`, blocks: s.blocks, position: pos++, published: true });
    console.log(`  Lesson ${s.code} ${s.title}`);

    const aDef = ASSIGN[s.code];
    if (aDef) {
      const existingA = await db.from("assignments").select("id").eq("course_id", course.id).eq("title", aDef.title).maybeSingle();
      let ar;
      if (existingA.data) {
        ar = await db.from("assignments").update({ description: aDef.description, published: true }).eq("id", existingA.data.id);
      } else {
        ar = await db.from("assignments").insert({ course_id: course.id, title: aDef.title, description: aDef.description, published: true });
      }
      if (ar.error) throw ar.error;
      asgCount++;
    }
  }

  console.log(`\nDone. Seeded ${subjects.length} lesson(s) + ${asgCount} assignment(s) into MTH1W-FR (pilot slice — more chapters to follow).`);
}

run().catch((e) => { console.error("SEED FAILED:", e.message ?? e); process.exit(1); });
