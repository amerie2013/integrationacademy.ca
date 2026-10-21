# IB Mathematics: Analysis & Approaches SL — course plan (2026-10-21)

The course is reorganised from 7 syllabus-topic units (37 short lessons) into 15 chapters that follow the
teaching order of the reference textbook. The textbook sets the order, depth and difficulty only: it is never
named, cited or copied in lessons, worksheets, banks or assignments. Every lesson gets the full self-study format
(intro, figures, interactive explorer, 5 worked examples, 5 checked practice questions marked by level, a hard
level with 2 challenges and 3 exam-style questions, Q&A, summary) plus a worksheet (Level 1/2/3), a bank set
(20 easy / 20 medium / 20 hard), written questions and a 12-question assignment.

Syllabus references use the IB AA SL topic numbering (SL 1.x number and algebra, SL 2.x functions,
SL 3.x geometry and trigonometry, SL 4.x statistics and probability, SL 5.x calculus).

## Old → new numbering (applied once by `scripts/ibaasl-ch1/restructure.mjs`)

| Old | Title (old) | New |
|---|---|---|
| 1.3 | Sigma Notation | 1.1 |
| 1.1 | Arithmetic Sequences & Series | 1.2 |
| 1.2 | Geometric Sequences & Series | 1.3 |
| 1.4 | The Binomial Theorem | 1.5 |
| 1.7 | Mathematical Proof | 1.6 |
| 2.1 | Function Basics | 2.1 |
| 2.3 | Composite & Inverse Functions | 2.4 |
| 2.4 | Linear & Quadratic Functions | 3.1 |
| 2.2 | Transformations of Functions | 3.3 |
| 2.5 | The Quadratic Formula & Discriminant | 3.6 |
| 2.6 | Rational Functions | 4.3 |
| 5.1 | Limits & Introducing the Derivative | 5.1 |
| 5.2 | Differentiation Rules | 5.3 |
| 5.4 | Curve Sketching with Derivatives | 5.4 |
| 5.5 | Optimization | 5.5 |
| 5.6 | Kinematics & Rates of Change | 5.6 |
| 4.1 | Sampling & Presenting Data | 6.1 |
| 4.2 | Measures of Central Tendency & Spread | 6.3 |
| 4.3 | Bivariate Data & Correlation | 7.1 |
| 4.4 | Probability Basics & Venn Diagrams | 8.2 |
| 4.5 | Conditional Probability & Tree Diagrams | 8.3 |
| 1.5 | Exponents & Radicals | 9.1 |
| 1.6 | Logarithms | 9.2 |
| 6.1 | Antiderivatives & Indefinite Integrals | 10.1 |
| 6.2 | Definite Integrals & Area | 10.3 |
| 6.4 | Area Between Curves & Kinematics | 10.5 |
| 3.1 | 3D Geometry | 11.1 |
| 3.2 | Right-Triangle Trigonometry | 11.2 |
| 3.3 | The Sine Rule & Cosine Rule | 11.3 |
| 3.4 | Radian Measure, Arcs & Sectors | 12.1 |
| 3.5 | The Unit Circle & Trigonometric Identities | 12.2 |
| 3.6 | Trigonometric Functions & Equations | 12.4 |
| 5.3 | Derivatives of Trig, Exponential & Log Functions | 13.1 |
| 6.3 | Integration of Trig & Exponential Functions | 13.3 |
| 4.6 | Discrete Random Variables & the Binomial Distribution | 14.1 |
| 4.7 | The Normal Distribution | 14.3 |
| 7.1 | Writing Your Mathematical Exploration (IA) | 15.1 |

Chapters 2–15 keep their old lesson titles after the restructure (only the number changes); each chapter's own
rebuild later sets the final titles, splits lessons and inserts the new ones.

## Target chapters

1. **Sequences and Series** — 1.1 Number Patterns and Sigma Notation · 1.2 Arithmetic and Geometric Sequences ·
   1.3 Arithmetic and Geometric Series · 1.4 Financial Applications of Sequences · 1.5 The Binomial Theorem ·
   1.6 Proof · 1.7 Chapter 1 Review (SL 1.2, 1.3, 1.4, 1.6, 1.8, 1.9)
2. **Functions** — what is a function · notation · graphs · domain and range · composite · inverse · review (SL 2.1–2.3, 2.5)
3. **Linear and Quadratic Functions** — gradient · linear functions · transformations · graphing quadratics ·
   factorising and completing the square · quadratic formula and discriminant · applications · review (SL 2.1, 2.4, 2.6, 2.7, 2.11)
4. **Rational Functions** — reciprocal function · transforming it · (ax + b)/(cx + d) · review (SL 2.8)
5. **Differentiation** — limits and convergence · derivative function · rules · first and second derivatives and graphs ·
   optimisation · kinematics · review (SL 5.1–5.3, 5.6–5.9)
6. **Statistics for Univariate Data** — sampling · presenting data · central tendency · dispersion · review (SL 4.1–4.3)
7. **Bivariate Data** — scatter diagrams · correlation · line of best fit and least-squares regression · review (SL 4.4, 4.10)
8. **Probability** — theoretical and experimental · Venn diagrams and sample spaces · conditional probability and
   independence · tree diagrams · review (SL 4.5, 4.6, 4.11)
9. **Exponentials and Logarithms** — exponents · logarithms · exponential and logarithmic equations and models ·
   derivatives of eˣ and ln x · review (SL 1.5, 1.7, 2.9, 5.6)
10. **Integration** — antiderivatives · more indefinite integrals · area and definite integrals · fundamental theorem ·
    area between curves · review (SL 5.5, 5.10, 5.11)
11. **Geometry and Trigonometry in 2D and 3D** — 3D shapes · right-angled trigonometry · sine rule · cosine rule ·
    applications · review (SL 3.1–3.3)
12. **Trigonometric Functions** — radians, arcs, sectors and segments · unit circle · identities and equations ·
    trigonometric functions · review (SL 3.4–3.8, 2.10)
13. **More Calculus** — derivatives with sine and cosine · applications · integration with sine, cosine and
    substitution · kinematics and accumulating change · review (SL 5.6–5.11)
14. **Probability Distributions** — random variables · binomial distribution · normal distribution · review (SL 4.7–4.9, 4.12)
15. **The Exploration** — 15.1 Writing Your Mathematical Exploration (internal assessment)

## Load order per chapter

push → Vercel deploy → `lessons-publish --all --apply` → (chapter 1 only: `restructure --apply`; later chapters:
their own renumber script) → `ws/build --all --apply` → `bank/publish --all --apply` → `asg/publish --apply` → `written --apply`.
