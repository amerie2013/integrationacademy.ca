# MCR3U-FR — French mirror of the English Functions 11 course (brief for each chapter)

The English **Functions (MCR3U)** course (Grade 11, university preparation) is built by the pipelines in
`scripts/mcr3u-ch1` … `scripts/mcr3u-ch8` (lessons, worksheet PDFs, question bank, assignments, written test questions).
The French course **Fonctions (MCR3U)** (code `MCR3U-FR`, course id `CID_FR` in `scripts/mcr3u-fr/common.mjs`) is a new,
still-unpublished course that must become the *exact same course in Canadian French*: same chapters, topics, titles
(translated), examples, numbers, figures, questions, answers, difficulty. Only the language changes (plus the one
notation rule below).

The French course is empty; build everything fresh with the fixed ids from `common.mjs`.

A finished French mirror of another course exists and is the best model to copy: **`scripts/mcv4u-fr-ch3/`** (lessons,
`lessons-publish.mjs`, `ws/`, `bank/`, `asg/`, `written.mjs`, `check.mjs`) together with `scripts/mcv4u-fr/`.
Read it before you start — reuse its structure and code, changing course constants to MCR3U-FR.

## Your job: chapter N → `scripts/mcr3u-fr-chN/`

Build a complete French pipeline for ONE chapter, mirroring the English chapter folder `scripts/mcr3u-chN/` file for file.
The English chapter lib re-exports the MTH1W helpers and adds `hard()`; `../mcr3u-fr/chrome.mjs` provides the French
`ex, pr, qa, watchOut, intro, section, keyIdea, examples, practice, hard, wrapUp` with the same markup and rules
(intro prints "MCR3U (Ontario)"). Every lesson has a required hard part (2 worked problems + 3 checked questions).

**Required entry points (exact names — the lead's load script `scripts/mcr3u-fr/load-all.sh` calls these):**

| File | Behaviour |
|---|---|
| `lib.mjs` | `export * from "<English chapter lib>";` then `export { ex, pr, qa, watchOut, intro, section, keyIdea, examples, practice, hard, wrapUp } from "../mcr3u-fr/chrome.mjs";` (explicit re-exports override). Add French versions of any other helper that prints English words (figure helpers with built-in labels, table helpers, etc.). |
| `lN_k.mjs` | same file names as English, every student-visible string translated. `TITLE = "N.k <titre français>"`, `ID = lessonId(N, k)` from `../mcr3u-fr/common.mjs`. |
| `lessons-publish.mjs` | `--all` builds every lesson; dry run by default; `--apply` writes. Course = `CID_FR`; insert the row if the id is new (position = N·100 + k, published true), else update title + blocks. Prints FR block count + widget list next to the LIVE English lesson's. No `--preview` mode, no `.lesson-preview` files. |
| `ws/build.mjs` (+ `ws/w*.mjs`, helpers) | `--all` compiles every French worksheet PDF into your own `ws/out/`; `--apply` also uploads to the `worksheets` bucket at `${CID_FR}/${code}_worksheet.pdf` and inserts/updates the `worksheets` row for (CID_FR, code), French title. All LaTeX chrome in French (NOM, Les grandes idées, Objectifs d'apprentissage et curriculum, Mise en situation, Erreurs fréquentes et conseils, Exemples résolus, Exemple, Solution, Réponse, Étape, Problème, level titles, Récapitulatif des questions et corrigé, Fiche d'exercices, Vocabulaire clé; the brand slogan may stay). Compile with tectonic (path in the English build); accents must render (é è à ç ê ô û î « »). Known tectonic/T1 issue: « » print as ń/ż and œ fails — replace « » œ Œ with guillemotleft{} guillemotright{} oe{} OE{} in the generated LaTeX (`scripts/mcv4u-fr-ch3/ws/build.mjs` has a working converter); check the extracted PDF text (`pdftotext -enc UTF-8`) has no ń/ż. Same number of worksheets as English (English has none for review lessons). |
| `bank/publish.mjs` (+ `bank/em*`, `bank/h*`, kit, figures) | `--all` dry run with checks; `--apply` writes. `CID_FR`, `topic` = the French lesson title (identical to the lesson TITLE), `lesson_id` = `lessonId(N,k)` when English rows have a lesson_id. Storage keys start with `mcr3u-fr-` (never overwrite English files). Same count per topic and difficulty as the LIVE English bank, same figures, same kinds and answers. Update-in-place then insert, so a rerun never duplicates rows. Copy `scripts/mcv4u-fr-ch3/bank/publish.mjs` as the starting point. |
| `asg/publish.mjs` (+ `asg/assignments.mjs`) | dry run with checks; `--apply` writes. Use `runAsg(N, ASSIGNMENTS, EN)` from `../../mcr3u-fr/asg-run.mjs` (it checks against English and writes by fixed id `asgId(N,k)`). Each assignment: `{ code, id: asgId(N,k), title: "Devoir N.k — <titre>", figs, lines }`. French category headers: Connaissance et compréhension / Habiletés de la pensée / Communication / Mise en application / Niveau difficile. Keep every `\( … \)` math span identical and in the same order as English (the checker compares them; reorder a French sentence rather than the math). |
| `written.mjs` | `await runWritten(WRITTEN, "../mcr3u-chN/written-data.mjs" (or written.mjs), import.meta.url)` from `../mcr3u-fr/written-run.mjs`: dry run by default; `--apply` inserts prompts not already present. Same count, points, difficulty and figure shapes as English (figure text may be French). Topics = the French lesson TITLEs. |
| `check.mjs` | French copy of the English checks that apply (see `scripts/mcv4u-fr-ch2/check.mjs` for the pattern: French markers "🔴 Niveau difficile", "Voir la solution", "Exemples résolus", "Questions et réponses", "Révision"). |

Do NOT copy `backup/`, `out/`, `renumbered-ws/`, rename/restructure/split/renumber scripts, `t*_*.mjs` scratch files, or
anything that only existed to migrate old English rows. (Chapter 2 is the exception — see below.)

**Figures:** reuse the English figure code by import, but every word drawn inside a figure (axis labels, legends,
captions, table headers inside SVG/TikZ) must be French — pass French labels or make a French copy of the helper inside
your folder. Bank figures added later by `scripts/mcr3u-bank-figures/` live in the DB (image_url) — mirror the live rows.

**Widgets:** keep widget names and numeric props identical. Translate props that hold text a student sees (captions,
labels, titles, scenario text, legends). The widget UI chrome itself is localized separately by the lead; do not edit
`components/`.

## Rules

1. **Translation quality.** Natural Canadian French for Grade 11 university-bound students, "tu" form, Ontario
   terminology from `GLOSSARY` in `../mcr3u-fr/common.mjs`. Translate everything a student or teacher sees: titles,
   overviews, goals, curriculum text (keep expectation codes such as A1.2), prior-knowledge checks, vocabulary tables,
   sections, key ideas, watch-outs, examples, steps, conclusions, practice prompts/hints/solutions/finals/labels, choice
   options, `txt(...)` / fill-in accepted answers (accept the French words; also keep the English word as an extra accepted
   answer when harmless), Q&A, summaries, "Next" lines, widget text props, bank prompts/choices/feedback, assignment
   lines, written prompts/feedback, worksheet notes/examples/problems/answers.
   Keep decimal POINTS (3.5, not 3,5) exactly as in English — answers are auto-checked. Keep every coordinate, interval
   and number written exactly as in English (e.g. (2, -1), [1, 4]); do not switch to the French semicolon convention.
   Money: never change a value; write amounts the way the English does (e.g. "1250 dollars" or "$1250" → "1250 $" is
   fine in prose, but never insert a space inside a number that is an answer or inside math).
2. **Transformation notation (the one intentional difference).** French writes **y = af(k(x − c)) + d** (c =
   horizontal translation, d = vertical translation), the convention already used by the French Advanced Functions course.
   English MCR3U writes y = af(k(x − d)) + c. Wherever the letters c and d name these translation parameters (prose,
   math, tables, hints, widget props that are labels, worksheet notes), swap them. Never change a number or an answer.
   (Sinusoidal y = a sin(k(x − d)) + c in chapter 6 → y = a sin(k(x − c)) + d in French; same swap.) If a lesson uses
   c or d for something else (e.g. a constant in factoring, a sequence's common difference d), leave it alone.
3. **Do not change the mathematics.** Same numbers, same answers, same answer specs, same number of examples,
   questions and figures, same hard sections. Never shorten solutions — translate every step in full.
   Names of people may stay or be swapped for French-Canadian names, consistently within a question.
4. **Never name or cite a textbook** (no publisher, no book title).
5. **Source of truth = what is live.** Before translating, compare your English source files with the LIVE English rows
   (`CID_EN`): lesson block count / widget list, bank prompts and counts per topic and difficulty, bank image_url
   presence, assignment text, worksheet count. Where they differ, mirror the LIVE version and say so in your report.
   You may read English DB rows with the service key in `.env.local`; never write to them.
6. **No database writes, no storage uploads, no git commits.** Do not run any `--apply`. Do not run English scripts
   with `--apply`/`--preview`. Only create/edit files inside `scripts/mcr3u-fr-chN/`. The lead reviews and loads.
7. **English modules with a main block.** English `written.mjs` (and some publish scripts) run their main block when
   `process.argv[1]` ends in the same file name. Import `written-data.mjs` where it exists; otherwise hide argv[1]
   while importing (`const a1 = process.argv[1]; process.argv[1] = "x"; const EN = await import(...); process.argv[1] = a1;`).
8. **Windows notes.** Long bash heredocs fail (ENAMETOOLONG) — create files with the Write tool. Python reading stdin is
   cp1252 — don't pipe accented text through Python. In `String.replace` a `$\`` in the replacement is special (use
   split/join); in a normal "…\%…" string the backslash is lost (use String.raw). Write "non défini", never the literal
   word "undefined" (checks flag it). Run node from the repo root (`E:\projects\integrationacademy-ca`).

## Chapter 2 is different
`scripts/mcr3u-ch2/` is an older, self-contained pipeline: `t2_1..t2_5.mjs` each export lessonBlocks, a worksheet
(W2N / LEARN2N), `bank()` (60 questions, 20/20/20), and ASSIGNMENT; `lib2.mjs` / `lib2tex.mjs` are the helpers;
`ws-content.mjs` + `scripts/mcr3u-worksheets/build.mjs` build the PDFs; `publish.mjs` writes everything. Later live
patches were applied OUTSIDE these files (lesson/worksheet example extensions 2026-11-06, bank figures and standalone
prompts 2026-11-05 via `scripts/mcr3u-bank-figures/`), so the live rows can differ from t2_*. For chapter 2: build the
French chapter in the SAME standard layout as the other chapters (lN_k.mjs + lessons-publish.mjs, ws/build.mjs,
bank/publish.mjs, asg/publish.mjs, and a `written.mjs` that reports 0 questions like English), using the t2_* code and
`lib2*` helpers by import where useful, but verify every lesson, bank row and assignment against the LIVE English rows
and mirror the live text/figures. A French copy of `lib2`/`lib2tex` labels may be needed (they print English words).

## Done means (run all of these, they must pass)

- `node scripts/mcr3u-fr-chN/lessons-publish.mjs --all` builds every lesson with the same block count and widget
  list as the live English one.
- `node scripts/mcr3u-fr-chN/ws/build.mjs --all` compiles every French PDF (check the log; pdftotext shows French, no ń/ż).
- `node scripts/mcr3u-fr-chN/bank/publish.mjs --all` → all checks pass, counts per topic/difficulty equal live English.
- `node scripts/mcr3u-fr-chN/asg/publish.mjs` → all checks pass.
- `node scripts/mcr3u-fr-chN/written.mjs` dry run OK, count equals English.
- `node scripts/mcr3u-fr-chN/check.mjs` passes.
- A leftover-English scan over your folder's string content (regex for common English words such as
  `\b(the|and|Find|Solve|Show|which|Step|Example|Answer|Watch out|Hard level|Explain|What|How many|Graph|shown)\b`
  inside strings) returns nothing student-visible.

## Report back (short)
Files created; per-lesson block counts EN vs FR; worksheet PDFs; bank counts per topic/difficulty; assignments; written
count; where you mirrored live rows that differ from the English source; anything you could not mirror or are unsure about.
