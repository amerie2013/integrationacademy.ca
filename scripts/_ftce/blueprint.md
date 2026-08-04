# FTCE Mathematics 6–12 — Course Blueprint (from REA 2015 prep book)

Course: **FTCEMATH612**, level **certification**, title "FTCE Mathematics 6–12".
Source book text: `scripts/_ftce/fulltext.txt`. Test: ~80 MC questions, 150 min, pass = ~66%.
15 competencies → course units. Difficulty: certification / university level ("go hard").

## Unit → Lesson map (codes = unit.lesson)

### U1 Algebra (Competency 1)
- 1.1 Polynomial vocabulary & operations (incl. long division)
- 1.2 Factoring (GCF, diff of squares, sum/diff cubes, trinomials, complete)
- 1.3 Rational expressions & complex fractions
- 1.4 Linear equations (fractional, radical)
- 1.5 Slope & forms of a line
- 1.6 Systems of linear equations (2×2, 3×3, types)
- 1.7 Quadratic equations (factoring, formula, completing the square)
- 1.8 Absolute value & inequalities
- 1.9 Ratios, proportions & variation (direct/inverse/joint)
- 1.10 Algebraic word problems

### U2 Functions (Competency 2)
- 2.1 Function basics: domain & range
- 2.2 Function arithmetic & composition
- 2.3 Inverse functions
- 2.4 Exponential & logarithmic functions
- 2.5 Properties (even/odd, one-to-one, periodic, zeros)
- 2.6 Graphing, symmetry, asymptotes

### U3 Geometry (Competencies 3 & 4)
- 3.1 Angles & angle relationships
- 3.2 Proof: congruent segments/angles, perpendiculars
- 3.3 Triangles & classification
- 3.4 Similar triangles & polygons
- 3.5 Regular polygons, area & perimeter
- 3.6 Quadrilaterals
- 3.7 Circles
- 3.8 Volume & surface area of solids
- 3.9 Coordinate geometry (distance, midpoint, point-to-line)
- 3.10 Conic sections (parabola, circle, ellipse, hyperbola)

### U4 Trigonometry (Competency 5)
- 4.1 Six trig functions & right triangles
- 4.2 Unit circle, radians, quadrant signs
- 4.3 Identities (Pythagorean, reciprocal)
- 4.4 Sum/difference, double/half-angle formulas
- 4.5 Graphs of sine & cosine
- 4.6 Inverse trig functions

### U5 Statistics (Competency 6)
- 5.1 Data displays (charts, stem-leaf, box plot, scatterplot)
- 5.2 Central tendency (mean/median/mode, grouped data)
- 5.3 Variability (range, IQR, variance, SD)
- 5.4 Percentiles & position
- 5.5 Regression, sampling & experimental design

### U6 Probability (Competency 7)
- 6.1 Probability basics & properties
- 6.2 Addition & multiplication rules (conditional)
- 6.3 Counting: FCP, permutations, combinations
- 6.4 Applying counting to probability

### U7 Discrete Mathematics (Competency 8)
- 7.1 Arithmetic & geometric sequences and series
- 7.2 Matrix arithmetic
- 7.3 Matrices & systems (row reduction, determinants)

### U8 Calculus (Competency 9)
- 8.1 Limits
- 8.2 Continuity
- 8.3 The derivative (definition, tangent slope)
- 8.4 Differentiation rules (power, product, quotient, chain)
- 8.5 Derivatives of exp, log & trig
- 8.6 Applications: max/min & curve sketching
- 8.7 Antiderivatives & the definite integral
- 8.8 Applications of integration (area between curves, volumes of revolution)

### U9 Number Sense & Structure (Competency 10)
- 9.1 Real numbers & subsets
- 9.2 Properties of equality & operations
- 9.3 Complex numbers

### U10 Mathematics as Communication (Competency 11)
- 10.1 Mathematics as communication (definitions, representations)

### U11 Mathematics as Reasoning (Competency 12)
- 11.1 Logic & arguments (deductive/inductive)
- 11.2 Conditionals, converse/contrapositive, proof methods
- 11.3 Induction & indirect proof

### U12 Mathematical Connections (Competency 13)
- 12.1 Connections & equivalent representations

### U13 Instruction (Competency 14)
- 13.1 Teaching mathematics: instruction & problem solving

### U14 Assessment (Competency 15)
- 14.1 Assessment in mathematics

### U15 Practice Tests
- 15.1 Diagnostic Test (40 Q, 75 min)
- 15.2 Full-length Practice Test (80 Q, 150 min)

## Build pipeline (mirrors ALG1, streamlined single-source)
- `scripts/worksheets-ftce/<code>.mjs` = single source: {grade, code, title, intro, lesson:[[h,b]], examples:[[t,prompt,soln]], questions:[[t,prompt,ans]]}.
- `scripts/pdfgen-ftce.mjs` → worksheet PDFs. `scripts/publish-worksheets-ftce.mjs` → storage+table (course FTCEMATH612).
- `scripts/seed-ftce.mjs` → creates course + builds on-site LESSON from each module (converts `$...$`→`\(...\)`) + seeds assignments.
- `scripts/ftce-assignments.mjs` (ASSIGN, KTCA), `scripts/bank-ftce/` (question bank).

## Progress
- [ ] pipeline + course row
- [ ] U1 Algebra … U15 Practice tests
