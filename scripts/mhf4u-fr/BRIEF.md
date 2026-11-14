# MHF4U-FR — French mirror of the rebuilt English MHF4U (brief for each chapter)

The English **Advanced Functions (MHF4U)** course was fully rebuilt in `scripts/mhf4u-ch1` … `scripts/mhf4u-ch8`
(lessons, worksheet PDFs, question bank, assignments, written test questions). The French course
**Fonctions avancées (MHF4U)** (code `MHF4U-FR`, course id in `scripts/mhf4u-fr/common.mjs` → `CID_FR`)
must become the *exact same course in Canadian French*: same chapters, topics, titles (translated),
examples, numbers, figures, questions, answers, difficulty — only the language changes, plus the
transformation-notation rule below.

## Your job: chapter N → `scripts/mhf4u-fr-chN/`

Build a complete French pipeline for ONE chapter, mirroring `scripts/mhf4u-chN/` file for file:

| English | French (yours) |
|---|---|
| `lib.mjs` | `lib.mjs`: `export * from "../mhf4u-chN/lib.mjs";` then `export { ex, pr, qa, watchOut, intro, section, keyIdea, examples, practice, hard, wrapUp } from "../mhf4u-fr/chrome.mjs";` (explicit re-exports override the English chrome). Add French versions of any other chapter-lib helper that prints English words. |
| `lN_k.mjs` | same file name, every student-visible string translated. `TITLE = "N.k <titre français>"`, `ID = lessonId(N, k)` from `../mhf4u-fr/common.mjs`. |
| `lessons-publish.mjs` | course = `CID_FR`; insert the row if the ID is new (position = (N·100 + k)), else update title + blocks. No `--preview` mode (preview files shadow the DB). |
| `ws/wN_k.mjs`, `ws/build.mjs`, `ws/figT.mjs` | translated; build.mjs: all LaTeX chrome in French (NAME → NOM, The Big Ideas → Les grandes idées, Learning Goals & Curriculum → Objectifs d'apprentissage et curriculum, Minds On → Mise en situation, Common Mistakes & Teaching Tips → Erreurs fréquentes et conseils pédagogiques, Worked Examples → Exemples résolus, Example → Exemple, Solution → Solution, Answer → Réponse, Step → Étape, Problem → Problème, Level 1/2/3 titles, Question Recap & Answer Key → Récapitulatif des questions et corrigé, Worksheet → Fiche d'exercices, Key vocabulary → Vocabulaire clé, "Math Simplified · Success Amplified" may stay as the brand slogan). `CID_FR`; output in your own `ws/out/`; storage path `${CID_FR}/${code}_worksheet.pdf`; insert or update the `worksheets` row for (CID_FR, code), position = N·1000 + k, title French. Compile every PDF with tectonic (path in the English build.mjs) and make sure accents render (é è à ç ê ô û î « »). |
| `bank/emN_k.mjs`, `bank/hN_k.mjs`, `bank/fig.mjs`, `bank/kit.mjs`, `bank/publish.mjs` | translated; publish: `CID_FR`, `TOPIC` = the French lesson title ("N.k …", identical to the lesson TITLE), storage keys start with `mhf4u-fr-` (never overwrite English figure files). Same counts per difficulty and the same figures as English. Keep update-in-place-then-insert so a rerun never duplicates rows. |
| `asg/assignments.mjs`, `asg/publish.mjs` | translated. Category headers in French: Connaissance et compréhension / Habiletés de la pensée / Communication / Mise en application / Niveau difficile — update the category-split check regex to match. Title "Devoir N.k — <titre>". Row matched by fixed id `asgId(N, k)` (insert if missing, else update). `CID_FR`, storage keys `mhf4u-fr-…`. |
| `written.mjs` | translated, `CID_FR`, topics = French lesson titles, storage keys `mhf4u-fr-…`, insert only prompts not already present. |
| `check.mjs` | French copy of the checks that apply. |

Do NOT copy `renumber*.mjs`, `restructure.mjs`, `retitle*.mjs`, `positions.mjs`, `backup/`, `out/` — the French course is built fresh.
Figures: reuse the English figure code by import, but every word drawn inside a figure (axis labels, "ground", "depth (m)", legends, captions) must be French — pass French labels or make a French copy of the figure helper inside your folder.

## Rules

1. **Translation quality.** Natural Canadian French for Grade 12 students, "tu" form, Ontario terminology from `GLOSSARY` in `../mhf4u-fr/common.mjs`. Translate everything a student or teacher sees: titles, overviews, goals, curriculum text (keep the expectation codes like D2.1), prior-knowledge checks, vocabulary tables, sections, key ideas, watch-outs, examples, steps, conclusions, practice prompts/hints/solutions/finals/labels, choice options, `txt(...)` accepted answers (accept the French words; also keep the English word as an extra accepted answer when harmless), Q&A, summaries, "Next" lines, widget props that hold text (captions, labels, titles), multigraph curve labels and captions, bank prompts/choices/feedback, assignment lines, written prompts/feedback, worksheet notes/examples/problems/answers. Keep decimal POINTS (3.5, not 3,5) exactly as in English — answers are auto-checked. Money stays "N dollars" (→ "N dollars" is fine in French) — never a `$` sign in bank/assignment text.
2. **Do not change the mathematics.** Same numbers, same functions, same answers, same answer specs, same number of examples/questions/figures, same hard sections. Never shorten solutions — translate every step in full.
3. **Transformation notation (the one intentional difference).** English: `y = af(k(x − d)) + c` (d = horizontal, c = vertical). French: **`y = af(k(x − c)) + d`** (c = translation horizontale, d = translation verticale). Wherever c and d are those transformation parameters (power functions, sinusoidal functions, log/exp transformations, reviews, worksheets, bank, assignments, written), swap them consistently: formulas, mapping rules `(x, y) → (x/k + c, ay + d)`, wording, worked numbers, answer specs, graph/widget expressions and slider names. Leave c and d alone when they mean something else (e.g. coefficients in `(ax+b)/(cx+d)`). Read `NOTATION` in common.mjs.
4. **Never name or cite a textbook** (no publisher, no book title).
5. **Source of truth = what is live.** If an English source file looks out of step with the live English DB (block count / widget list / bank count differ), mirror the LIVE version and say so in your report. (You may read the English DB rows with the service key in `.env.local`; never write to the English course.)
6. **No database writes, no storage uploads, no git commits.** Do not run any `--apply`. Do not run English scripts with `--apply`/`--preview`. Do not create `.lesson-preview` files. Only create/edit files inside `scripts/mhf4u-fr-chN/`. The lead will review and load everything.
7. **Long bash heredocs fail on Windows (ENAMETOOLONG)** — create files with the Write tool. JS gotchas from the English build: in `String.replace` a `$\`` in the replacement is special (use split/join); in a normal "…\%…" string the backslash is lost (use `S\`\`` = String.raw); sed `\l` lowercases. `check.mjs` flags the literal word "undefined" (write "non défini").

## Done means (run all of these, they must pass)

- `node scripts/mhf4u-fr-chN/lessons-publish.mjs --all` (dry run) builds every lesson with the same block count and widget list as the English one.
- `node scripts/mhf4u-fr-chN/ws/build.mjs --all` compiles every French PDF (look at least at one page image per PDF if you can, or check the .tex/log for errors).
- `node scripts/mhf4u-fr-chN/bank/publish.mjs --all` → ALL CHECKS PASSED, counts equal English.
- `node scripts/mhf4u-fr-chN/asg/publish.mjs` → ALL CHECKS PASSED.
- `node scripts/mhf4u-fr-chN/written.mjs` dry run OK.
- A leftover-English scan over your folder's string content (e.g. regex for common English words: `\b(the|and|Find|Solve|Show|which|Step|Example|Answer|Watch out|Hard level|Explain|graph of)\b` inside strings) returns nothing student-visible.

## Report back (short)
Files created; per-lesson block counts EN vs FR; worksheet PDFs + page counts; bank counts per topic/difficulty; assignments; written count; every c↔d swap location; anything you could not mirror or are unsure about.
