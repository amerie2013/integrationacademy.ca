# MTH1W-FR — French mirror of the English Grade 9 course (brief for each chapter)

The English **Grade 9 Mathematics (MTH1W)** course is built by the pipelines in `scripts/mth1w-ch1/v2/` (chapter 1)
and `scripts/mth1w-ch2` … `scripts/mth1w-ch7` (lessons, worksheet PDFs, question bank, assignments, written test
questions). The French course **Mathématiques, 9e année (MTH1W)** (code `MTH1W-FR`, course id `CID_FR` in
`scripts/mth1w-fr/common.mjs`) must become the *exact same course in Canadian French*: same chapters, topics, titles
(translated), examples, numbers, figures, questions, answers, difficulty. Only the language changes.

The French course currently holds one old lesson (1.1) and one old assignment; the lead deletes them after your
content is loaded. Build everything fresh with the fixed ids from `common.mjs`.

## Your job: chapter N → `scripts/mth1w-fr-chN/`

Build a complete French pipeline for ONE chapter, mirroring the English chapter folder file for file
(chapter 1: mirror `scripts/mth1w-ch1/v2/`, plus whatever it imports from `scripts/mth1w-ch1/` that prints words).

**Required entry points (exact names — the lead's load script calls these):**

| File | Behaviour |
|---|---|
| `lib.mjs` | `export * from "<English chapter lib>";` then `export { ex, pr, qa, watchOut, intro, section, keyIdea, examples, practice, hard, wrapUp } from "../mth1w-fr/chrome.mjs";` (explicit re-exports override). Add French versions of any other helper that prints English words (figure helpers with built-in labels, code-output helpers, etc.). |
| `lN_k.mjs` | same file names as English, every student-visible string translated. `TITLE = "N.k <titre français>"`, `ID = lessonId(N, k)` from `../mth1w-fr/common.mjs`. If an English lesson passes a custom intro sentence to `hard()`, pass the French one as the 3rd argument. |
| `lessons-publish.mjs` | `--all` (or a list of codes) builds; dry run by default; `--apply` writes. Course = `CID_FR`; insert the row if the ID is new (position = N·100 + k, published true), else update title + blocks. Prints block count + widget list for FR next to the LIVE English lesson's. No `--preview` mode, no `.lesson-preview` files. |
| `ws/build.mjs` (+ `ws/w*.mjs`, helpers) | `--all` compiles every French worksheet PDF into your own `ws/out/`; `--apply` also uploads to the `worksheets` bucket at `${CID_FR}/${code}_worksheet.pdf` and inserts/updates the `worksheets` row for (CID_FR, code), position = N·1000 + k, French title. All LaTeX chrome in French (NOM, Les grandes idées, Objectifs d'apprentissage et curriculum, Mise en situation, Erreurs fréquentes et conseils, Exemples résolus, Exemple, Solution, Réponse, Étape, Problème, level titles, Récapitulatif des questions et corrigé, Fiche d'exercices, Vocabulaire clé; the brand slogan may stay). Compile with tectonic (path in the English build) and make sure accents render (é è à ç ê ô û î « »). Same number of worksheets as English (English has none for review lessons). |
| `bank/publish.mjs` (+ `bank/em*`, `bank/h*`, kit, figures) | `--all` dry run with checks; `--apply` writes. `CID_FR`, `topic` = the French lesson title (identical to the lesson TITLE), `lesson_id` = `lessonId(N,k)` if English sets lesson_id. Storage keys start with `mth1w-fr-` (never overwrite English files). Same count per topic and difficulty as the LIVE English bank, same figures. Update-in-place then insert, so a rerun never duplicates rows. |
| `asg/publish.mjs` (+ `asg/assignments.mjs`) | dry run with checks; `--apply` writes. Title "Devoir N.k — <titre>". Row matched by fixed id `asgId(N, k)` (insert if missing, else update), `CID_FR`. French category headers (Connaissance et compréhension / Habiletés de la pensée / Communication / Mise en application / Niveau difficile) — update any category check regex. Storage keys `mth1w-fr-…`. |
| `written.mjs` | dry run by default; `--apply` inserts only prompts not already present. `CID_FR`, topics/lesson ids = the French lessons, storage keys `mth1w-fr-…`. |
| `check.mjs` | French copy of the checks that apply. |

Do NOT copy `backup/`, `out/`, rename/restructure/split scripts, `t*_*.mjs` scratch files, or anything that only existed to migrate old English rows.

**Figures:** reuse the English figure code by import, but every word drawn inside a figure (axis labels, legends,
captions, table headers inside SVG/TikZ) must be French — pass French labels or make a French copy of the helper
inside your folder.

**Widgets:** keep widget names and numeric props identical. Translate props that hold text a student sees
(captions, labels, titles, scenario text, item names, code comments/strings in `codeTracer` programs only if they are
printed output text — keep the code itself runnable and its output matching the French expected answers).
The widget UI chrome itself is being localized separately by the lead; do not edit `components/`.

## Rules

1. **Translation quality.** Natural Canadian French for Grade 9 students, "tu" form, Ontario terminology from
   `GLOSSARY` in `../mth1w-fr/common.mjs`. Translate everything a student or teacher sees: titles, overviews, goals,
   curriculum text (keep expectation codes such as B2.1), prior-knowledge checks, vocabulary tables, sections, key
   ideas, watch-outs, examples, steps, conclusions, practice prompts/hints/solutions/finals/labels, choice options,
   `txt(...)` accepted answers (accept the French words; also keep the English word as an extra accepted answer when
   harmless), Q&A, summaries, "Next" lines, widget text props, bank prompts/choices/feedback, assignment lines,
   written prompts/feedback, worksheet notes/examples/problems/answers.
   Keep decimal POINTS (3.5, not 3,5) exactly as in English — answers are auto-checked. Money: write amounts the same
   way the English does but in French word order where natural ("12.50 $" is fine in prose); never change a value.
2. **Do not change the mathematics.** Same numbers, same answers, same answer specs, same number of examples,
   questions and figures, same hard sections. Never shorten solutions — translate every step in full.
   Names of people may stay or be swapped for French-Canadian names, consistently within a question.
3. **Never name or cite a textbook** (no publisher, no book title).
4. **Source of truth = what is live.** If an English source file looks out of step with the live English DB (block
   count / widget list / bank count / worksheet count differ), mirror the LIVE version and say so in your report.
   You may read English DB rows with the service key in `.env.local` (`CID_EN` in common.mjs); never write to them.
5. **No database writes, no storage uploads, no git commits.** Do not run any `--apply`. Do not run English scripts
   with `--apply`/`--preview`. Only create/edit files inside `scripts/mth1w-fr-chN/`. The lead reviews and loads.
6. **English `written.mjs` self-runs on import.** Its main block runs when `process.argv[1]` ends in `written.mjs` —
   which is ALSO true for your French `written.mjs`. If you import it, hide argv[1] while importing
   (`const a1 = process.argv[1]; process.argv[1] = "x"; const EN = await import(...); process.argv[1] = a1;`) so it can
   never write to the English course. Same caution for any other English module with a main block.
7. **Long bash heredocs fail on Windows (ENAMETOOLONG)** — create files with the Write tool. Python reading stdin is
   cp1252 — don't pipe accented text through Python. In `String.replace` a `$\`` in the replacement is special (use
   split/join); in a normal "…\%…" string the backslash is lost (use String.raw). Write "non défini", never the
   literal word "undefined" (checks flag it).

## Done means (run all of these, they must pass)

- `node scripts/mth1w-fr-chN/lessons-publish.mjs --all` builds every lesson with the same block count and widget
  list as the live English one.
- `node scripts/mth1w-fr-chN/ws/build.mjs --all` compiles every French PDF (check the log for errors).
- `node scripts/mth1w-fr-chN/bank/publish.mjs --all` → all checks pass, counts equal live English.
- `node scripts/mth1w-fr-chN/asg/publish.mjs` → all checks pass.
- `node scripts/mth1w-fr-chN/written.mjs` dry run OK, count equals English.
- A leftover-English scan over your folder's string content (regex for common English words such as
  `\b(the|and|Find|Solve|Show|which|Step|Example|Answer|Watch out|Hard level|Explain|What|How many)\b` inside strings)
  returns nothing student-visible.

## Report back (short)
Files created; per-lesson block counts EN vs FR; worksheet PDFs; bank counts per topic/difficulty; assignments;
written count; anything you could not mirror or are unsure about.
