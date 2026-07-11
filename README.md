# Integration Academy — High School & University (`integrationacademy.ca`)

Next.js + Supabase + Stripe platform for **Grade 9–12, college, and university**
math. Adult-styled, **no games** — built around interactive lessons, auto-graded
quizzes, assignments, and explorable graphs.

This is a **separate project and database** from the K-8 game platform
(`integration-academy` / `integrationacademy.org`). It reuses the same account,
role, and billing model.

## Stack

- Next.js 16 (App Router) · React 19 · TypeScript
- Tailwind v4
- Supabase (auth + Postgres) — **its own project**
- Stripe (subscriptions)
- KaTeX (math typesetting) + a dependency-free SVG `FunctionGraph`

## Getting started

```bash
npm install
cp .env.local.example .env.local   # then fill in your keys
npm run dev
```

Open http://localhost:3000.

> The app runs without keys, but auth, database, and payments stay inert until
> you fill in `.env.local`.

## 1. Supabase setup

1. Create a **new** Supabase project at https://supabase.com.
2. In **SQL Editor**, paste and run `supabase/schema.sql`.
3. Copy your keys from **Project Settings → API** into `.env.local`:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
4. (Optional) Enable **Google** and **Microsoft (Azure)** providers under
   **Authentication → Providers** for the SSO buttons.
5. Under **Authentication → URL Configuration**, add
   `http://localhost:3000/auth/callback` (and your production URL later) as a
   redirect URL.

## 2. Stripe setup

1. Create 4 prices in the Stripe dashboard and put their IDs in `.env.local`
   (`STRIPE_PRICE_STUDENT_MONTHLY`, `_STUDENT_ANNUAL`, `_TUTOR_MONTHLY`,
   `_TUTOR_ANNUAL`).
2. Add `STRIPE_SECRET_KEY` and `STRIPE_WEBHOOK_SECRET`.
3. Point a webhook at `/api/stripe/webhook` (use the Stripe CLI locally:
   `stripe listen --forward-to localhost:3000/api/stripe/webhook`).

## Project map

| Path | What it is |
|------|------------|
| `app/page.tsx` | Marketing landing page + interactive graph demo |
| `app/login` | Email + Google + Microsoft sign-in / sign-up |
| `app/dashboard` | Student dashboard (courses + assignments) |
| `app/teacher` | Instructor dashboard (create courses, lessons, quizzes, assignments) |
| `app/profile` | Account settings |
| `app/pricing` | Plans + Stripe checkout |
| `app/api/stripe/*` | Checkout, billing portal, webhook |
| `components/FunctionGraph.tsx` | Interactive, dependency-free function plotter |
| `components/Math.tsx` | KaTeX LaTeX renderer |
| `lib/` | Supabase clients, subscription logic, theme tokens |
| `supabase/schema.sql` | Full database schema + RLS |

## Roadmap / next steps

- Lesson authoring UI (rich text + LaTeX + embedded graphs)
- Quiz builder + auto-grading + attempt tracking
- Assignment submission + grading flow
- Course enrollment / join-code flow
- Migrate marketing content from the WordPress `.ca` site
