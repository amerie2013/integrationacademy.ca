# Linear Algebra I (LINALG1) — course plan

Internal planning note (not published). The user's lecture notes (units 1a–5c) set the order of chapters 1–5;
the reference textbook (never named in published content) sets the level and supplies chapters 6–9.
All questions are original — nothing is copied from the notes or the book.

Course row: `ecde4f8f-5ccf-410d-a70a-a71a89847088`, code `LINALG1`, level `university`, **unpublished**
(admin-visible only) until the user approves it.

| Ch. | Title | Source units | Status |
|---|---|---|---|
| 1 | Vectors and the Geometry of Rⁿ | notes 1a–1c | built + loaded 2026-10-30 |
| 2 | Systems of Linear Equations | notes 2a–2c (systems, augmented matrices, EROs, REF/RREF, Gaussian elimination, rank, homogeneous systems) | built + loaded 2026-10-30 |
| 3 | Matrix Algebra | notes 3a–3c (operations, transpose, symmetric/triangular, matrix–vector product, Ax = b) + matrix multiplication and its properties (needed by ch.6, not in the notes): 3.1 matrices/sum/scalar · 3.2 transpose & symmetric · 3.3 triangular/diagonal · 3.4 Ax · 3.5 Ax = b · 3.6 AB · 3.7 properties & powers | built + loaded 2026-10-30 |
| 4 | Span, Linear Independence and Bases | notes 4a–4c (kept to ℝⁿ): 4.1 span · 4.2 spanning ℝⁿ · 4.3 independence · 4.4 theorems/geometry · 4.5 reducing spanning sets · 4.6 bases of ℝⁿ · 4.7 coordinates | built + loaded 2026-10-31 |
| 5 | Subspaces, Dimension and the Fundamental Subspaces | notes 5a–5c (orthogonal bases, dimension, row/column/null space) | built + loaded 2026-10-30 (before 3–4, at the user's request) |
| 6 | Inverses and Determinants | reference textbook | built + loaded 2026-10-31 (scripts/linalg-ch6): 6.1 inverse · 6.2 [A&#124;I] row reduction · 6.3 elementary matrices · 6.4 Invertible Matrix Theorem · 6.5 cofactor expansion · 6.6 det properties · 6.7 Cramer/adjugate/volume |
| 7 | Linear Transformations | reference textbook | built + loaded 2026-10-31 (scripts/linalg-ch7): 7.1 matrix transformations · 7.2 linearity · 7.3 standard matrix · 7.4 plane geometry (R_θ, uuᵀ, 2P − I, shears) · 7.5 composition & inverses · 7.6 kernel/range, one-to-one/onto · 7.7 matrix relative to a basis |
| 8 | Eigenvalues and Eigenvectors | reference textbook | built + loaded 2026-10-31 (scripts/linalg-ch8): 8.1 eigenvectors · 8.2 characteristic equation · 8.3 eigenspaces & multiplicity · 8.4 diagonalisation · 8.5 powers & dynamical systems (Markov, recurrences) · 8.6 complex eigenvalues (PCP⁻¹) · 8.7 symmetric matrices (QDQᵀ, quadratic forms) |
| 9 | Orthogonality and Least Squares | reference textbook (Gram–Schmidt, QR, least squares) | built + loaded 2026-11-01 (scripts/linalg-ch9): 9.1 orthogonal complements · 9.2 orthogonal matrices · 9.3 projection onto a subspace · 9.4 projection matrices & normal equations · 9.5 Gram–Schmidt · 9.6 QR · 9.7 least squares; 7 worksheets, 420 bank, 7 assignments, 14 written; explorers LinAlg9.tsx |

## Chapter 1 pipeline (copy forward for later chapters)

- `create-course.mjs` — the course row (run once; re-run only refreshes the description)
- `l1_1..l1_7.mjs` — lessons (fixed ids `11a10001-0001-4001-8001-00000000010N`); `check.mjs` verifies structure,
  KaTeX, arithmetic and answer specs; `lessons-publish.mjs --all --apply` loads them (`--preview` for localhost)
- `lib.mjs` — university intro card, `definition()`, `theorem()` (folded proof), `hard()`, vector answer specs
  `vec()`, `dir()` (any nonzero multiple), `vecT()` (rounded) — backed by the `vector` kind in `lib/answerCheck.ts`
- `vecfig.mjs` — MCV4U vector SVG engine + `scene3()` (auto-fitting 3-D scenes with x₁ x₂ x₃ axes), `a3`, `pt3`, `seg3`
- explorers: `components/widgets/LinAlg1.tsx` (laCombo, laLinePlane, laNorm, laDot, laCross, laPlaneNormal, laProj)
- `ws/` worksheets, **self-contained** (the user teaches from them without the lesson): complete notes — 6–8 sections
  `{ h, lead, fig, w, body }` with definition/theorem boxes (`wkit.mjs`: `def`, `thm`, `side`, `VF`), proofs, a
  "Key Facts" summary — then 9 worked examples and 13 problems (3 + 5 + 5, Level 3 = proofs / multi-step).
  The builder refuses fewer than 5 note figures, 7 example figures or 4 problem figures. Examples must not reuse
  lesson, bank or assignment numbers. `node scripts/linalg-ch1/ws/build.mjs --all --apply`
- `bank/` 20 easy + 20 medium + 20 hard per topic; numeric answers computed in `bank/la.mjs`;
  `publish.mjs` refuses non-integer answers with zero tolerance
- `asg/` 7 assignments × 12 (fixed ids `11a10001-0002-4001-8001-00000000010N`); `written.mjs` 2 long-answer per topic
