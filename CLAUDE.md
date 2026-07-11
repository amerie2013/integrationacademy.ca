@AGENTS.md

# Integration Academy — `.ca` (High School & University)

Adult-styled math platform for Grade 9–12, college, and university. **No games.**
Separate project + Supabase database from the K-8 sister site
(`E:\projects\integration-academy`, domain `integrationacademy.org`).

## Conventions
- Next.js 16 App Router, React 19, TypeScript. Read `node_modules/next/dist/docs/`
  before writing framework code (this Next version has breaking changes).
- Styling: inline styles + tokens in `lib/theme.ts`. Serious indigo/slate palette,
  Inter + Fraunces fonts. **No cartoon fonts or decorative emoji in UI chrome.**
- Data model lives in `supabase/schema.sql`. Account model (profiles + role +
  subscription) intentionally mirrors the K-8 site so logic can be shared.
- Math: use `<Math expr="..." />` (KaTeX) and `<FunctionGraph fn={...} />` for
  interactive graphs.

## Roles
`student` (level 9–12 / college / university) · `teacher` (instructor/tutor) · `admin`.
Students can be individual OR in a class — both must work.
